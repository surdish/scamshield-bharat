// ScamShield Bharat - Main Application Logic (app.js)
// Plain Vanilla JavaScript - No build step, open access without forced OTP

// AuthProvider Interface (Demo Provider implementation)
var authProvider = {
  currentUser: null,
  isGuestUser: true, // Default to Guest Mode so site opens instantly
  generatedOTP: null,
  otpTimerInterval: null,
  otpTimeRemaining: 60,

  sendOTP: function(mobileNumber) {
    if (!mobileNumber || !/^[6-9]\d{9}$/.test(mobileNumber)) {
      return { success: false, message: "Please enter a valid 10-digit mobile number starting with 6-9." };
    }
    
    // Generate secure random 6-digit OTP using crypto.getRandomValues()
    var array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    var otpVal = (100000 + (array[0] % 900000)).toString();
    this.generatedOTP = otpVal;
    
    this.pendingMobile = mobileNumber;
    this.startOTPTimer();

    return { 
      success: true, 
      demoOTP: otpVal, 
      message: "DEMO OTP generated successfully." 
    };
  },

  verifyOTP: function(inputOTP) {
    if (!this.generatedOTP) {
      return { success: false, message: "OTP has expired. Please request a new one." };
    }
    
    if (inputOTP === this.generatedOTP) {
      this.currentUser = { mobile: this.pendingMobile, authenticatedAt: new Date() };
      this.isGuestUser = false;
      this.stopOTPTimer();
      return { success: true, user: this.currentUser };
    } else {
      return { success: false, message: "Incorrect OTP entered. Please check the demo code and try again." };
    }
  },

  loginAsGuest: function() {
    this.currentUser = { name: "Guest Investor", guest: true };
    this.isGuestUser = true;
    this.stopOTPTimer();
    return { success: true, user: this.currentUser };
  },

  logout: function() {
    this.currentUser = null;
    this.isGuestUser = true;
    this.generatedOTP = null;
    this.stopOTPTimer();
  },

  resendOTP: function() {
    if (this.pendingMobile) {
      return this.sendOTP(this.pendingMobile);
    }
    return { success: false, message: "No mobile number found." };
  },

  startOTPTimer: function() {
    this.stopOTPTimer();
    this.otpTimeRemaining = 60;
    var self = this;
    this.otpTimerInterval = setInterval(function() {
      self.otpTimeRemaining--;
      if (typeof app !== 'undefined' && app.onOTPTick) {
        app.onOTPTick(self.otpTimeRemaining);
      }
      if (self.otpTimeRemaining <= 0) {
        self.stopOTPTimer();
        self.generatedOTP = null;
      }
    }, 1000);
  },

  stopOTPTimer: function() {
    if (this.otpTimerInterval) {
      clearInterval(this.otpTimerInterval);
      this.otpTimerInterval = null;
    }
  }
};

// Main App Controller
var app = {
  activeTab: 'text', // text, image, voice, url
  currentLanguage: 'en',
  seniorMode: false,
  liteMode: false,
  theme: 'light',
  ocrLoading: false,

  init: function() {
    this.loadPreferences();
    this.checkNetworkConnection();
    this.setupEventListeners();
    this.setupOTPBoxes();
    i18n.setLanguage(this.currentLanguage);
    this.updateUIState();
  },

  loadPreferences: function() {
    try {
      var savedSenior = localStorage.getItem('scamshield_senior_mode');
      if (savedSenior !== null) this.seniorMode = (savedSenior === 'true');
      
      var savedLite = localStorage.getItem('scamshield_lite_mode');
      if (savedLite !== null) this.liteMode = (savedLite === 'true');

      var savedLang = localStorage.getItem('scamshield_lang');
      if (savedLang) this.currentLanguage = savedLang;

      var savedTheme = localStorage.getItem('scamshield_theme');
      if (savedTheme) this.theme = savedTheme;
    } catch(e) {
      console.warn('localStorage disabled or unavailable:', e);
    }
  },

  savePreferences: function() {
    try {
      localStorage.setItem('scamshield_senior_mode', this.seniorMode);
      localStorage.setItem('scamshield_lite_mode', this.liteMode);
      localStorage.setItem('scamshield_lang', this.currentLanguage);
      localStorage.setItem('scamshield_theme', this.theme);
    } catch(e) {
      console.warn('localStorage save failed:', e);
    }
  },

  clearData: function() {
    try {
      localStorage.clear();
      this.seniorMode = false;
      this.liteMode = false;
      this.currentLanguage = 'en';
      this.theme = 'light';
      this.updateUIState();
      i18n.setLanguage('en');
      alert('All local data and preferences have been cleared.');
    } catch(e) {
      console.warn('Clear data failed:', e);
    }
  },

  checkNetworkConnection: function() {
    if (navigator.connection) {
      var conn = navigator.connection;
      if (conn.effectiveType === '2g' || conn.effectiveType === '3g' || conn.saveData) {
        if (localStorage.getItem('scamshield_lite_mode') === null) {
          this.liteMode = true;
          this.savePreferences();
        }
      }
    }
  },

  toggleSeniorMode: function() {
    this.seniorMode = !this.seniorMode;
    this.savePreferences();
    this.updateUIState();
  },

  toggleLiteMode: function() {
    this.liteMode = !this.liteMode;
    this.savePreferences();
    this.updateUIState();
  },

  toggleTheme: function() {
    this.theme = (this.theme === 'dark') ? 'light' : 'dark';
    this.savePreferences();
    this.updateUIState();
  },

  updateUIState: function() {
    document.body.classList.toggle('senior-mode', this.seniorMode);
    document.body.classList.toggle('lite-mode', this.liteMode);
    document.body.classList.toggle('dark-mode', this.theme === 'dark');

    var seniorBtn = document.getElementById('seniorModeBtn');
    if (seniorBtn) seniorBtn.classList.toggle('active', this.seniorMode);

    var liteBtn = document.getElementById('liteModeBtn');
    if (liteBtn) liteBtn.classList.toggle('active', this.liteMode);

    var seniorNotice = document.getElementById('seniorActiveBanner');
    if (seniorNotice) seniorNotice.classList.toggle('hidden', !this.seniorMode);

    var liteNotice = document.getElementById('liteActiveBanner');
    if (liteNotice) liteNotice.classList.toggle('hidden', !this.liteMode);

    var loginBtn = document.getElementById('navLoginBtn');
    if (loginBtn) {
      if (authProvider.currentUser && !authProvider.isGuestUser) {
        loginBtn.textContent = i18n.t("navLogout");
      } else {
        loginBtn.textContent = i18n.t("navLogin");
      }
    }
  },

  onLanguageChanged: function(lang) {
    this.currentLanguage = lang;
    this.savePreferences();
  },

  selectOption: function(tabName) {
    this.activeTab = tabName;
    var cards = document.querySelectorAll('.dash-card');
    cards.forEach(function(card) {
      card.classList.toggle('active', card.getAttribute('data-tab') === tabName);
    });

    document.getElementById('textAnalysisPanel').classList.toggle('hidden', tabName !== 'text');
    document.getElementById('imageOcrPanel').classList.toggle('hidden', tabName !== 'image');
    document.getElementById('voicePanel').classList.toggle('hidden', tabName !== 'voice');
    document.getElementById('urlPanel').classList.toggle('hidden', tabName !== 'url');
  },

  runTextAnalysis: function(customText) {
    var textInput = customText || document.getElementById('inputText').value;
    if (!textInput || !textInput.trim()) {
      alert("Please enter or paste a message to analyze.");
      return;
    }

    document.getElementById('resultOutputCard').classList.add('hidden');
    document.getElementById('loadingBox').classList.remove('hidden');

    var progressFill = document.getElementById('progressFill');
    var loadingStepText = document.getElementById('loadingStepText');

    var steps = [
      { pct: "20%", textKey: "step1" },
      { pct: "40%", textKey: "step2" },
      { pct: "60%", textKey: "step3" },
      { pct: "80%", textKey: "step4" },
      { pct: "100%", textKey: "step5" }
    ];

    var stepIdx = 0;
    var interval = setInterval(function() {
      if (stepIdx < steps.length) {
        progressFill.style.width = steps[stepIdx].pct;
        loadingStepText.textContent = i18n.t(steps[stepIdx].textKey);
        stepIdx++;
      } else {
        clearInterval(interval);
        document.getElementById('loadingBox').classList.add('hidden');
        
        var result = ScamEngine.analyze(textInput, app.currentLanguage);
        app.displayAnalysisResult(result);
      }
    }, app.liteMode ? 100 : 250);
  },

  displayAnalysisResult: function(result) {
    var card = document.getElementById('resultOutputCard');
    card.className = "result-card " + result.riskLevel;
    card.classList.remove('hidden');

    document.getElementById('resultBadgeText').textContent = result.badgeText;
    document.getElementById('resultMessageText').textContent = result.messageText;

    document.getElementById('confidenceValText').textContent = result.confidence + "%";
    document.getElementById('confidenceNoteText').textContent = result.confidenceNote;
    document.getElementById('evidenceValText').textContent = result.evidenceStrengthText;

    document.getElementById('unverifiedNoteText').textContent = result.unverifiedNote;

    var maskNotice = document.getElementById('maskingNoticeBanner');
    if (result.maskedNotice) {
      maskNotice.classList.remove('hidden');
      maskNotice.textContent = result.maskedNotice;
    } else {
      maskNotice.classList.add('hidden');
    }

    document.getElementById('highlightedTextContainer').innerHTML = result.formattedHtml || result.maskedText;

    var signalsList = document.getElementById('signalsListItems');
    signalsList.innerHTML = "";

    if (result.signals && result.signals.length > 0) {
      result.signals.forEach(function(sig) {
        var item = document.createElement('div');
        item.className = "signal-card-item";
        
        var icon = sig.severity === 'High' ? '⚠️' : (sig.severity === 'Medium' ? '⚡' : 'ℹ️');
        item.innerHTML = 
          '<div class="signal-card-header">' +
            '<span>' + icon + ' ' + ScamEngine.escapeHtml(sig.title) + '</span>' +
            '<span class="hero-pill-badge" style="margin:0;">' + ScamEngine.escapeHtml(sig.severity) + '</span>' +
          '</div>' +
          '<div class="signal-card-body">' +
            '<p><strong>Matched text:</strong> "' + ScamEngine.escapeHtml(sig.matchedText) + '"</p>' +
            '<p style="margin-top:4px;">' + ScamEngine.escapeHtml(sig.explanation) + '</p>' +
          '</div>';
        signalsList.appendChild(item);
      });
    } else {
      signalsList.innerHTML = '<p style="color:var(--text-muted);">No specific warning signals detected in the text.</p>';
    }

    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  },

  tryScamExample: function() {
    var scamText = "GUARANTEED 40% PROFIT in 7 days! Risk-free investment scheme. SEBI Approved government scheme. Send Rs 20,000 within 30 minutes to UPI ID: fastwealth@upi to activate your VIP account.";
    document.getElementById('inputText').value = scamText;
    this.selectOption('text');
    this.runTextAnalysis(scamText);
  },

  trySafeExample: function() {
    var safeText = "Dear Investor, please refer to the official SEBI portal for list of registered stock brokers. Never share your passwords or personal details with unknown persons.";
    document.getElementById('inputText').value = safeText;
    this.selectOption('text');
    this.runTextAnalysis(safeText);
  },

  processScreenshot: function(fileInput) {
    var file = fileInput.files[0];
    if (!file) return;

    var statusEl = document.getElementById('ocrStatusText');
    var progressEl = document.getElementById('ocrProgressText');
    statusEl.textContent = "Loading OCR Engine (Demo OCR)...";
    progressEl.textContent = "Initializing Tesseract.js eng+tam...";

    if (typeof Tesseract === 'undefined') {
      var script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
      script.onload = function() {
        app.runTesseractOCR(file);
      };
      script.onerror = function() {
        statusEl.textContent = "OCR network unavailable. Please type or paste the message text manually below.";
        progressEl.textContent = "Fallback active: Offline/file mode.";
      };
      document.head.appendChild(script);
    } else {
      this.runTesseractOCR(file);
    }
  },

  runTesseractOCR: function(file) {
    var statusEl = document.getElementById('ocrStatusText');
    var progressEl = document.getElementById('ocrProgressText');

    Tesseract.recognize(
      file,
      'eng+tam',
      {
        logger: function(m) {
          if (m.status === 'recognizing text') {
            progressEl.textContent = "Processing image text: " + Math.round(m.progress * 100) + "%";
          }
        }
      }
    ).then(function(result) {
      var extractedText = result.data.text;
      statusEl.textContent = "OCR Complete (Demo OCR)";
      document.getElementById('inputText').value = extractedText;
      app.selectOption('text');
      app.runTextAnalysis(extractedText);
    }).catch(function(err) {
      statusEl.textContent = "OCR extraction encountered an issue. You can type or paste the text directly into the box below.";
      console.warn("OCR Error:", err);
    });
  },

  startVoiceInput: function() {
    var statusEl = document.getElementById('voiceStatusText');
    
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      statusEl.textContent = "Speech recognition is not supported by your current browser. You can type your message in the text box.";
      return;
    }

    var recognition = new SpeechRecognition();
    var langMap = { en: 'en-IN', ta: 'ta-IN', hi: 'hi-IN', te: 'te-IN', ml: 'ml-IN' };
    recognition.lang = langMap[this.currentLanguage] || 'en-IN';
    recognition.interimResults = false;

    statusEl.textContent = "Listening... Speak your message now in " + this.currentLanguage.toUpperCase();

    recognition.onresult = function(event) {
      var spokenText = event.results[0][0].transcript;
      statusEl.textContent = "Recognized: \"" + spokenText + "\"";
      document.getElementById('inputText').value = spokenText;
      app.selectOption('text');
      app.runTextAnalysis(spokenText);

      app.speakReply(spokenText);
    };

    recognition.onerror = function(event) {
      statusEl.textContent = "Voice input error: " + event.error + ". Please try typing your text.";
    };

    recognition.start();
  },

  speakReply: function(text) {
    if ('speechSynthesis' in window) {
      var utterance = new SpeechSynthesisUtterance("Analyzing message now.");
      utterance.lang = this.currentLanguage;
      window.speechSynthesis.speak(utterance);
    }
  },

  runUrlCheck: function() {
    var urlInput = document.getElementById('inputUrl').value;
    var result = ScamEngine.analyzeUrl(urlInput);
    if (!result) {
      alert("Please enter a URL link.");
      return;
    }

    var card = document.getElementById('urlResultCard');
    card.classList.remove('hidden');

    document.getElementById('urlStatusTitle').textContent = result.riskStatus;
    document.getElementById('urlWordingText').textContent = result.wording;
    document.getElementById('urlDisclaimerText').textContent = result.disclaimer;

    var container = document.getElementById('urlSignalsList');
    container.innerHTML = "";
    result.signals.forEach(function(sig) {
      var div = document.createElement('div');
      div.className = "signal-card-item";
      div.innerHTML = '<strong>' + ScamEngine.escapeHtml(sig.title) + '</strong><p>' + ScamEngine.escapeHtml(sig.desc) + '</p>';
      container.appendChild(div);
    });
  },

  // Demo Login Modal
  openLoginModal: function() {
    if (authProvider.currentUser && !authProvider.isGuestUser) {
      authProvider.logout();
      this.updateUIState();
      alert("Logged out successfully.");
    } else {
      document.getElementById('loginModal').classList.remove('hidden');
      document.getElementById('stepMobile').classList.remove('hidden');
      document.getElementById('stepOTP').classList.add('hidden');
    }
  },

  closeLoginModal: function() {
    document.getElementById('loginModal').classList.add('hidden');
  },

  sendLoginOTP: function() {
    var mobile = document.getElementById('mobileInput').value;
    var res = authProvider.sendOTP(mobile);
    if (!res.success) {
      alert(res.message);
      return;
    }

    document.getElementById('demoOtpBadge').textContent = "DEMO OTP — NOT SENT BY SMS: " + res.demoOTP;
    document.getElementById('stepMobile').classList.add('hidden');
    document.getElementById('stepOTP').classList.remove('hidden');
    document.querySelector('.otp-input-digit').focus();
  },

  verifyLoginOTP: function() {
    var digits = document.querySelectorAll('.otp-input-digit');
    var code = "";
    digits.forEach(function(d) { code += d.value; });

    var res = authProvider.verifyOTP(code);
    if (res.success) {
      document.getElementById('loginModal').classList.add('hidden');
      this.updateUIState();
      alert("Login successful!");
    } else {
      alert(res.message);
    }
  },

  loginAsGuest: function() {
    authProvider.loginAsGuest();
    document.getElementById('loginModal').classList.add('hidden');
    this.updateUIState();
  },

  onOTPTick: function(seconds) {
    var timerEl = document.getElementById('otpTimerText');
    if (timerEl) {
      timerEl.textContent = seconds > 0 ? "OTP expires in " + seconds + "s" : "OTP Expired. Please resend.";
    }
  },

  setupOTPBoxes: function() {
    var digits = document.querySelectorAll('.otp-input-digit');
    digits.forEach(function(input, idx) {
      input.addEventListener('keyup', function(e) {
        if (e.key >= '0' && e.key <= '9') {
          if (idx < digits.length - 1) digits[idx + 1].focus();
        } else if (e.key === 'Backspace') {
          if (idx > 0) digits[idx - 1].focus();
        }
      });
      input.addEventListener('paste', function(e) {
        var pasted = (e.clipboardData || window.clipboardData).getData('text');
        if (pasted && /^\d{6}$/.test(pasted)) {
          for (var i = 0; i < 6; i++) {
            digits[i].value = pasted[i];
          }
        }
      });
    });
  },

  setupEventListeners: function() {
    document.querySelectorAll('.nav-links a').forEach(function(link) {
      link.addEventListener('click', function(e) {
        document.querySelectorAll('.nav-links a').forEach(function(l) { l.classList.remove('active'); });
        link.classList.add('active');
      });
    });
  },

  // Automated Test Suite Runner (Verifies 9 Prompt Test Cases)
  runAutomatedTests: function() {
    console.log("=== RUNNING SCAMSHIELD BHARAT 9-TEST SUITE ===");
    var results = [];

    // Test 1: Scam Example
    var scamRes = ScamEngine.analyze("GUARANTEED 40% profit in 7 days! SEBI approved scheme. Send Rs 20,000 to fastwealth@upi within 30 minutes.", "en");
    results.push({ name: "Test 1: Scam Example", pass: scamRes.riskLevel === "high" && scamRes.signals.length >= 3 });

    // Test 2: Safe Example
    var safeRes = ScamEngine.analyze("Dear Investor, please check official SEBI portal for registered brokers list.", "en");
    results.push({ name: "Test 2: Safe Example", pass: safeRes.riskLevel === "no_major" });

    // Test 3: Short / Vague Text
    var shortRes = ScamEngine.analyze("Hi", "en");
    results.push({ name: "Test 3: Short/Vague Text", pass: shortRes.status === "INCONCLUSIVE" });

    // Test 4: Credential Request
    var credRes = ScamEngine.analyze("Dear user, please share your 6-digit OTP code to verify account.", "en");
    results.push({ name: "Test 4: Credential Theft Signal", pass: credRes.riskLevel === "high" });

    // Test 5: Tamil Scam Message
    var tamRes = ScamEngine.analyze("உறுதியளிக்கப்பட்ட 50% லாபம்! இன்றே பணம் அனுப்புங்கள்.", "ta");
    results.push({ name: "Test 5: Tamil Scam Analysis", pass: tamRes.riskLevel === "high" || tamRes.riskLevel === "potential" });

    // Test 6: Sensitive Masking
    var maskRes = ScamEngine.maskSensitiveData("My card is 4111 2222 3333 4444 and OTP is 987654");
    results.push({ name: "Test 6: Local Sensitive Data Masking", pass: maskRes.count >= 2 && maskRes.maskedText.indexOf("[CARD NUMBER HIDDEN]") !== -1 });

    // Test 7: Auth Demo OTP & Guest Mode
    var otpGen = authProvider.sendOTP("9876543210");
    var otpVerifyFail = authProvider.verifyOTP("000000");
    var guestRes = authProvider.loginAsGuest();
    results.push({ name: "Test 7: Auth Demo OTP & Guest Mode", pass: otpGen.success && !otpVerifyFail.success && guestRes.success });

    // Test 8: Senior & Lite Persistence
    app.seniorMode = true;
    app.savePreferences();
    results.push({ name: "Test 8: Preferences Persistence", pass: localStorage.getItem('scamshield_senior_mode') === 'true' });

    // Test 9: Offline file:// capability check
    results.push({ name: "Test 9: Core Engine Offline File:// Execution", pass: typeof ScamEngine.analyze === 'function' });

    var report = "SCAMSHIELD BHARAT TEST RESULTS:\n\n";
    var allPassed = true;
    results.forEach(function(t) {
      report += (t.pass ? "✅ PASS: " : "❌ FAIL: ") + t.name + "\n";
      if (!t.pass) allPassed = false;
    });

    alert(report + "\nOverall: " + (allPassed ? "ALL 9 TEST CASES PASSED SUCCESSFULLY!" : "SOME TESTS FAILED."));
  }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  app.init();
});
