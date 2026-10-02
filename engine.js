// ScamShield Bharat - Rule-Based Analysis Engine (engine.js)
// Deterministic, Explainable, In-Browser Risk Engine

var ScamEngine = (function() {
  
  // Sensitive Data Masking (Runs locally on device BEFORE scoring)
  function maskSensitiveData(text) {
    if (!text) return { maskedText: "", count: 0, foundSensitive: false };
    
    var count = 0;
    var maskedText = text;
    
    // Mask 16-digit Card Numbers
    maskedText = maskedText.replace(/\b\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}\b/g, function(match) {
      count++;
      return "[CARD NUMBER HIDDEN]";
    });
    
    // Mask 4-6 digit OTPs (when accompanied by terms like OTP, pin, code, verification)
    maskedText = maskedText.replace(/(OTP|code|pin|password|otp|ओटीपी|கடவுச்சொல்)[:\s-]*(\b\d{4,6}\b)/gi, function(match, p1, p2) {
      count++;
      return p1 + ": [SENSITIVE PIN/OTP HIDDEN]";
    });

    // Mask standalone 6-digit OTP numbers
    maskedText = maskedText.replace(/\b(is|your|code|OTP|otp)\s+(\d{4,6})\b/gi, function(match, p1, p2) {
      count++;
      return p1 + " [OTP HIDDEN]";
    });
    
    // Mask UPI PINs
    maskedText = maskedText.replace(/(UPI PIN|UPI-PIN|enter PIN)[:\s-]*(\b\d{4,6}\b)/gi, function(match, p1) {
      count++;
      return p1 + ": [UPI PIN HIDDEN]";
    });
    
    return {
      maskedText: maskedText,
      count: count,
      foundSensitive: count > 0
    };
  }

  // Keywords & Pattern Rules
  var SIGNAL_PATTERNS = [
    {
      id: "guaranteed_returns",
      category: "Guaranteed / Fixed Returns",
      severity: "High", // Strong signal
      titleKey: "sigGuaranteed",
      expKey: "sigGuaranteedExp",
      regex: /(guarant|assured|risk-free|double your money|100% return|fixed return|daily return|profit of \d+|% in \d+ days|நிச்சய லாபம்|உறுதியளிக்கப்பட்ட|பணம் இரட்டிப்பு|गारंटी|गारंटीड|डबल|100% रिटर्न)/i
    },
    {
      id: "urgency_pressure",
      category: "Urgency & Time Pressure",
      severity: "Medium",
      titleKey: "sigUrgency",
      expKey: "sigUrgencyExp",
      regex: /(today only|within 30 min|within 1 hour|last seats|limited seats|act fast|offer expires|hurry up|இன்றே|30 நிமிடங்களில்|அவசரம்|आज ही|30 मिनट|अंतिम मौका)/i
    },
    {
      id: "authority_claim",
      category: "Unverified Authority Claim", // Exact required title
      severity: "High",
      titleKey: "sigAuthority",
      expKey: "sigAuthorityExp",
      regex: /(SEBI approved|RBI approved|NSDL|government scheme|SEBI registered|Govt of India|SEBI அங்கீகரிக்கப்பட்டது|அரசு திட்டம்|सेबी स्वीकृत|आरबीआई|सरकारी योजना)/i
    },
    {
      id: "payment_request",
      category: "Payment Request / Fee",
      severity: "High",
      titleKey: "sigPayment",
      expKey: "sigPaymentExp",
      regex: /(send Rs|pay Rs|transfer Rs|pay now|registration fee|activation fee|deposit Rs|UPI ID|@[a-zA-Z]{3,}|பணம் அனுப்பு|பதிவு கட்டணம்|பணம் செலுத்து|पैसे भेजें|रजिस्ट्रेशन शुल्क|पे करें)/i
    },
    {
      id: "credential_request",
      category: "Sensitive Credential Theft Risk",
      severity: "High", // Very Strong signal
      titleKey: "sigCredential",
      expKey: "sigCredentialExp",
      regex: /(OTP|PIN|password|CVV|AnyDesk|TeamViewer|QuickSupport|share screen|கடவுச்சொல்|PIN எண்ணை|ओटीपी|पासवर्ड|सीवीवी)/i
    },
    {
      id: "suspicious_link",
      category: "Suspicious Link / Domain",
      severity: "Medium",
      titleKey: "sigLink",
      expKey: "sigLinkExp",
      regex: /(bit\.ly|tinyurl\.com|t\.me|wa\.me|goo\.gl|http:\/\/|[a-zA-Z0-9-]+\.(xyz|top|site|club|link|online|vip|work))/i
    },
    {
      id: "unsolicited_contact",
      category: "Unsolicited Group / Tips",
      severity: "Low",
      titleKey: "sigContact",
      expKey: "sigContactExp",
      regex: /(you have been selected|join our (WhatsApp|Telegram) group|free stock tips|VIP investment group|தேர்ந்தெடுக்கப்பட்டுள்ளீர்கள்|குழுவில் இணையுங்கள்|चयनित हुए हैं|ग्रुप में जुड़ें)/i
    }
  ];

  // Core Analyzer Function
  function analyze(rawInputText, currentLang) {
    lang = currentLang || 'en';
    
    // Step 1: Mask Sensitive Data locally
    var maskResult = maskSensitiveData(rawInputText);
    var text = maskResult.maskedText.trim();
    
    // Step 2: Handle Very Short or Vague Text -> INCONCLUSIVE
    if (!text || text.length < 15) {
      return {
        status: "INCONCLUSIVE",
        riskLevel: "inconclusive",
        badgeText: i18n.t("inconclusiveTitle"),
        messageText: i18n.t("inconclusiveMsg"),
        confidence: 25, // Heuristic base for inconclusive
        confidenceNote: i18n.t("confidenceNote"),
        evidenceStrength: "Limited",
        evidenceStrengthText: i18n.t("evidenceLimited"),
        unverifiedNote: i18n.t("unverifiedNote"),
        signals: [],
        highlightedSpans: [],
        maskedNotice: maskResult.foundSensitive ? i18n.t("btnMaskNotice") : null,
        maskedText: text
      };
    }

    // Step 3: Extract Signals & Highlight Spans
    var detectedSignals = [];
    var highlights = [];
    var textLower = text.toLowerCase();
    
    SIGNAL_PATTERNS.forEach(function(pattern) {
      var match = pattern.regex.exec(text);
      if (match) {
        var matchedText = match[0];
        var startIndex = match.index;
        var endIndex = startIndex + matchedText.length;
        
        detectedSignals.push({
          id: pattern.id,
          category: pattern.category,
          severity: pattern.severity,
          title: i18n.t(pattern.titleKey),
          explanation: i18n.t(pattern.expKey),
          matchedText: matchedText
        });

        highlights.push({
          start: startIndex,
          end: endIndex,
          matchedText: matchedText,
          severity: pattern.severity,
          category: pattern.category
        });
      }
    });

    // Sort highlights by starting index
    highlights.sort(function(a, b) { return a.start - b.start; });

    // Step 4: Scoring Rules logic
    var highCount = 0;
    var mediumCount = 0;
    var lowCount = 0;

    detectedSignals.forEach(function(sig) {
      if (sig.severity === "High") highCount++;
      else if (sig.severity === "Medium") mediumCount++;
      else lowCount++;
    });

    var hasGuaranteed = detectedSignals.some(function(s) { return s.id === "guaranteed_returns"; });
    var hasPayment = detectedSignals.some(function(s) { return s.id === "payment_request"; });
    var hasCredential = detectedSignals.some(function(s) { return s.id === "credential_request"; });

    var totalSignals = detectedSignals.length;
    var isHighRiskCombo = (hasGuaranteed && hasPayment) || hasCredential || (highCount >= 2);
    
    var riskLevel = "no_major";
    var badgeText = i18n.t("noMajorTitle");
    var messageText = i18n.t("noMajorMsg");
    var evidenceStrength = "Limited";
    var evidenceText = i18n.t("evidenceLimited");

    if (totalSignals >= 4 || isHighRiskCombo) {
      riskLevel = "high";
      badgeText = i18n.t("highTitle");
      messageText = i18n.t("highMsg");
      evidenceStrength = "Strong";
      evidenceText = i18n.t("evidenceStrong");
    } else if (totalSignals >= 2 || highCount >= 1) {
      riskLevel = "potential";
      badgeText = i18n.t("potentialTitle");
      messageText = i18n.t("potentialMsg");
      evidenceStrength = "Moderate";
      evidenceText = i18n.t("evidenceModerate");
    } else {
      riskLevel = "no_major";
      badgeText = i18n.t("noMajorTitle");
      messageText = i18n.t("noMajorMsg");
      evidenceStrength = totalSignals > 0 ? "Moderate" : "Limited";
      evidenceText = totalSignals > 0 ? i18n.t("evidenceModerate") : i18n.t("evidenceLimited");
    }

    // Step 5: Confidence Calculation (Capped at 90%, Never 0% or 100%)
    // Formula: Base 20% + 20% per signal + length factor, capped at 90%
    var confidence = 20 + (totalSignals * 20) + (highCount * 10);
    if (confidence < 25) confidence = 25;
    if (confidence > 90) confidence = 90; // Strictly capped at 90%

    // Construct Highlighted HTML Output safely
    var formattedHtml = renderHighlightedText(text, highlights);

    return {
      status: "SUCCESS",
      riskLevel: riskLevel, // "no_major", "potential", "high", "inconclusive"
      badgeText: badgeText,
      messageText: messageText,
      confidence: confidence,
      confidenceNote: i18n.t("confidenceNote"),
      evidenceStrength: evidenceStrength,
      evidenceStrengthText: evidenceText,
      unverifiedNote: i18n.t("unverifiedNote"),
      signals: detectedSignals,
      highlights: highlights,
      formattedHtml: formattedHtml,
      maskedNotice: maskResult.foundSensitive ? i18n.t("btnMaskNotice") : null,
      maskedText: text
    };
  }

  // Render text with non-color-only markup & visual icons for accessibility
  function renderHighlightedText(text, highlights) {
    if (!highlights || highlights.length === 0) {
      return escapeHtml(text);
    }

    var result = "";
    var lastIndex = 0;

    highlights.forEach(function(hl) {
      // Append unhighlighted text before this match
      if (hl.start > lastIndex) {
        result += escapeHtml(text.substring(lastIndex, hl.start));
      }
      
      var matchedContent = escapeHtml(text.substring(hl.start, hl.end));
      var badgeClass = "hl-low";
      var icon = "ℹ️";
      if (hl.severity === "High") {
        badgeClass = "hl-high";
        icon = "⚠️";
      } else if (hl.severity === "Medium") {
        badgeClass = "hl-medium";
        icon = "⚡";
      }

      result += '<mark class="highlight-span ' + badgeClass + '" title="' + escapeHtml(hl.category) + '">';
      result += '<span class="hl-icon">' + icon + '</span> ';
      result += matchedContent;
      result += '<span class="hl-label">[' + escapeHtml(hl.category) + ']</span>';
      result += '</mark>';

      lastIndex = hl.end;
    });

    if (lastIndex < text.length) {
      result += escapeHtml(text.substring(lastIndex));
    }

    return result;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
  }

  // URL Signal Analyzer (Text-based only, zero network requests)
  function analyzeUrl(urlText) {
    if (!urlText) return null;
    
    var url = urlText.trim().toLowerCase();
    var signals = [];

    var isHttps = url.indexOf("https://") === 0;
    var isHttp = url.indexOf("http://") === 0;
    
    if (isHttps) {
      signals.push({
        id: "https_present",
        type: "positive",
        title: "HTTPS Encryption Present",
        desc: "The connection uses SSL/TLS. Note: HTTPS indicates secure transmission, but DOES NOT guarantee that the site is legitimate or safe."
      });
    } else if (isHttp) {
      signals.push({
        id: "http_unsecure",
        type: "warning",
        title: "Unencrypted HTTP Connection",
        desc: "The site uses unencrypted HTTP. Legitimate financial portals always use HTTPS."
      });
    }

    var shortenerMatch = /(bit\.ly|tinyurl|t\.co|is\.gd|cutt\.ly|rebrand\.ly)/i.test(url);
    if (shortenerMatch) {
      signals.push({
        id: "url_shortener",
        type: "warning",
        title: "URL Shortener Detected",
        desc: "The link hides its true destination domain using a link shortening service."
      });
    }

    var suspiciousDomain = /(\.xyz|\.top|\.site|\.club|\.online|\.vip|\.work|\.cc)/i.test(url);
    if (suspiciousDomain) {
      signals.push({
        id: "suspicious_tld",
        type: "warning",
        title: "Unusual Top-Level Domain",
        desc: "The domain uses a non-standard domain extension often associated with temporary scam sites."
      });
    }

    var brandLookalike = /(sebi-login|rbi-verify|nsdl-claim|sbi-bonus|hdfc-offer|tata-shares)/i.test(url);
    if (brandLookalike) {
      signals.push({
        id: "brand_lookalike",
        type: "high",
        title: "Lookalike Institution Name",
        desc: "The URL includes names of financial regulators or banks in suspicious combinations."
      });
    }

    var riskStatus = signals.some(function(s) { return s.type === "high" || s.type === "warning"; }) ? "POTENTIAL WARNING SIGNS" : "NO MAJOR AUTOMATED URL SIGNALS";
    
    return {
      url: urlText,
      signals: signals,
      riskStatus: riskStatus,
      wording: "Potential warning signs detected. Additional verification recommended.",
      disclaimer: "This analysis does not establish that the website is malicious. Prototype analysis evaluates link text structure only and does not visit or load the URL."
    };
  }

  return {
    maskSensitiveData: maskSensitiveData,
    analyze: analyze,
    analyzeUrl: analyzeUrl
  };
})();
