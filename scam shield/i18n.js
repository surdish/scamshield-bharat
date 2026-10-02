// ScamShield Bharat - Internationalization & Translation System (i18n.js)
// Plain JavaScript - No modules, works over file://

var i18n = {
  currentLang: 'en',
  
  translations: {
    en: {
      appName: "ScamShield Bharat",
      tagline: "Protect. Understand. Verify.",
      heroTitle: "Don't Trust Every Investment Message.",
      heroSub: "Explainable investor-safety technology that helps India's elderly and first-time investors understand suspicious financial messages before they act.",
      heroBadge1: "Privacy First",
      heroBadge2: "Bharat-First",
      heroBadge3: "Explainable Engine",
      heroBadge4: "Voice Accessible",
      btnAnalyze: "Analyze Suspicious Message",
      btnHowItWorks: "See How It Works",
      navHome: "Home",
      navAnalyze: "Analyze",
      navHowItWorks: "How It Works",
      navWhy: "Why It Matters",
      navSafety: "Safety & Helpline",
      navPrivacy: "Privacy Center",
      navLearn: "Spot a Scam",
      navArch: "Architecture",
      navLogin: "Demo Login",
      navLogout: "Logout",
      seniorModeBtn: "Senior Mode",
      liteModeBtn: "Lite Mode",
      privacyNotice: "Sensitive numbers (OTPs, card PINs) are masked locally on your device before analysis.",
      
      // Dashboard options
      dashTitle: "What would you like to check?",
      dashSub: "Select an input method below to verify suspicious financial content.",
      optText: "Message Text",
      optTextDesc: "Paste WhatsApp, SMS or email text",
      optImage: "Screenshot OCR",
      optImageDesc: "Upload an image of a message",
      optVoice: "Voice Input",
      optVoiceDesc: "Speak or listen in your language",
      optUrl: "Link / URL Check",
      optUrlDesc: "Check suspicious website links",

      // Analysis UI
      inputPlaceholder: "Paste suspicious WhatsApp message, SMS, investment offer, or group message here...",
      btnAnalyzeAction: "Analyze Risk Now",
      btnTryScam: "Try Scam Example",
      btnTrySafe: "Try Safe Example",
      btnMaskNotice: "We hid sensitive numbers on your device before analysis.",
      sensitiveHint: "Please do not paste OTPs, PINs or passwords.",

      // Loading steps
      step1: "Reading content...",
      step2: "Detecting financial claims...",
      step3: "Identifying warning patterns...",
      step4: "Assessing evidence strength...",
      step5: "Preparing simple explanation...",

      // Result Headlines & Messages (EXACT REQUIRED)
      noMajorTitle: "NO MAJOR WARNING SIGNALS",
      noMajorMsg: "No major warning signals were identified in the content provided. This does not guarantee that the source is legitimate.",
      potentialTitle: "POTENTIAL RISK",
      potentialMsg: "Several warning signs were detected. Verify the sender and claims independently before taking action.",
      highTitle: "HIGH RISK",
      highMsg: "Multiple warning signals were detected. Avoid transferring money or sharing sensitive credentials until the information has been independently verified.",
      inconclusiveTitle: "INCONCLUSIVE",
      inconclusiveMsg: "We don't have enough evidence to determine whether this content is fraudulent. Do not treat this result as proof of legitimacy or fraud. Verify through an independent official source.",

      // Confidence & Disclaimers
      confidenceLabel: "Signal Confidence",
      confidenceNote: "Confidence shows how much evidence we found, not the chance that this is a scam.",
      evidenceLabel: "Evidence Strength",
      evidenceStrong: "Strong Evidence",
      evidenceModerate: "Moderate Evidence",
      evidenceLimited: "Limited Evidence",
      unverifiedNote: "ScamShield cannot independently confirm whether the sender or organisation is legitimate.",

      // Action checklist
      actionTitle: "What You Can Do Now",
      action1: "PAUSE: Do not transfer money or reply immediately under pressure.",
      action2: "VERIFY: Check official websites directly (e.g. SEBI registered list).",
      action3: "NEVER SHARE: Keep OTPs, PINs, bank credentials strictly private.",
      action4: "SAVE EVIDENCE: Take screenshots of messages and transaction details.",
      action5: "REPORT: Call national cyber fraud helpline 1930 if money was lost.",

      // Signal explanations
      sigGuaranteed: "Guaranteed / Assured Returns",
      sigGuaranteedExp: "Promises fixed or risk-free returns. Legitimate market investments carry risk and cannot guarantee fixed returns by law.",
      sigUrgency: "Urgency & Pressure",
      sigUrgencyExp: "Uses strict time limits to panic you into acting before thinking or asking a family member.",
      sigAuthority: "Unverified Authority Claim",
      sigAuthorityExp: "The message claims regulatory approval (e.g. SEBI/RBI). ScamShield cannot verify that claim from the message alone. Verify the organisation and claim through an official source.",
      sigPayment: "Payment Request / Registration Fee",
      sigPaymentExp: "Asks you to transfer money to a personal UPI ID or account to unlock gains or activate an account.",
      sigCredential: "Sensitive Credential Request",
      sigCredentialExp: "Requests confidential security data such as OTP, UPI PIN, CVV, or remote control app installation.",
      sigLink: "Suspicious Link / Domain",
      sigLinkExp: "Contains shortened or unofficial links designed to look like legitimate bank or investment portals.",
      sigContact: "Unsolicited Group / Tips",
      sigContactExp: "Claims you were randomly selected or invites you to private WhatsApp/Telegram stock tip groups.",

      // Reporting Links
      reportingTitle: "Official Emergency Reporting & Verification",
      report1930: "National Cyber Crime Helpline: Call 1930",
      reportCyber: "Official Cyber Crime Portal: cybercrime.gov.in",
      reportSebiScores: "SEBI SCORES Grievance Portal: scores.sebi.gov.in",
      reportSebiMain: "Official SEBI Website: sebi.gov.in",
      verifySelf: "Always verify links yourself by typing official web addresses directly.",

      // Privacy Center
      privacyTitle: "Privacy & Data Protection Center",
      privacySub: "ScamShield Bharat processes your text entirely inside your browser. No messages leave your phone or computer.",
      privacyNotNeededTitle: "What We Never Access",
      privacyNotNeededList: "• Bank account passwords\n• UPI PINs or ATM PINs\n• Card numbers or CVV\n• Real-time OTPs\n• Personal contacts or SMS inbox",
      privacyFlowTitle: "Data Flow Diagram",

      // Senior Mode / Lite Mode
      seniorActiveNotice: "Senior Mode Active: Larger Text, High Contrast, Simple Controls.",
      liteActiveNotice: "Lite Mode Active, designed for slower connections.",

      // Footer
      footerDisclaimer1: "ScamShield Bharat does not provide investment advice, stock tips, buy/sell/hold recommendations, price predictions or product promotions. It is an investor-safety and education tool.",
      footerDisclaimer2: "Automated analysis may be incorrect. Always independently verify important financial information.",
      prototypeTag: "Rule-based analysis · Prototype"
    },

    ta: {
      // Tamil Translations (Designed for elderly accessibility - Note: to be reviewed by a native speaker)
      appName: "ஸ்கேம்ஷீல்ட் பாரத்",
      tagline: "பாதுகாப்போம். புரிந்துகொள்வோம். சரிபார்ப்போம்.",
      heroTitle: "ஒவ்வொரு முதலீட்டு செய்தியையும் நம்பாதீர்கள்.",
      heroSub: "மூத்த குடிமக்கள் மற்றும் புதிய முதலீட்டாளர்கள் சந்தேகத்திற்குரிய நிதிச் செய்திகளைப் புரிந்து கொள்ள உதவும் எளிய பாதுகாப்புத் தொழில் நுட்பம்.",
      heroBadge1: "தனியுரிமை பாதுகாப்பு",
      heroBadge2: "பாரத் முன்னுரிமை",
      heroBadge3: "விளக்கக்கூடிய பகுப்பாய்வு",
      heroBadge4: "குரல் வழி பயன்பாடு",
      btnAnalyze: "செய்தியைச் சரிபார்க்கவும்",
      btnHowItWorks: "செயல்படும் விதம்",
      navHome: "முகப்பு",
      navAnalyze: "பகுப்பாய்வு",
      navHowItWorks: "செயல்முறை",
      navWhy: "முக்கியத்துவம்",
      navSafety: "உதவி மையம்",
      navPrivacy: "தனியுரிமை",
      navLearn: "விழிப்புணர்வு",
      navArch: "கட்டமைப்பு",
      navLogin: "உள்நுழைவு",
      navLogout: "வெளியேறு",
      seniorModeBtn: "பெரிய எழுத்து முறை (Senior)",
      liteModeBtn: "லைட் முறை (Lite)",
      privacyNotice: "உங்கள் OTP மற்றும் PIN எண்கள் பகுப்பாய்விற்கு முன் மறைக்கப்படும்.",

      dashTitle: "நீங்கள் எதைச் சரிபார்க்க விரும்புகிறீர்கள்?",
      dashSub: "சந்தேகத்திற்குரிய உள்ளடக்கத்தைச் சரிபார்க்க கீழே உள்ள முறையைத் தேர்ந்தெடுக்கவும்.",
      optText: "உரை செய்தி",
      optTextDesc: "வாட்ஸ்அப் அல்லது எஸ்.எம்.எஸ் உரையை ஒட்டவும்",
      optImage: "திரைப்படம் (Screenshot)",
      optImageDesc: "செய்தியின் புகைப்படத்தைப் பதிவேற்றவும்",
      optVoice: "குரல் பதிவு",
      optVoiceDesc: "உங்கள் மொழியில் பேசுங்கள்",
      optUrl: "இணைய இணைப்பு (URL)",
      optUrlDesc: "இணைப்பைச் சரிபார்க்கவும்",

      inputPlaceholder: "சந்தேகத்திற்குரிய வாட்ஸ்அப் அல்லது எஸ்.எம்.எஸ் செய்தியை இங்கே ஒட்டவும்...",
      btnAnalyzeAction: "இப்போது பகுப்பாய்வு செய்",
      btnTryScam: "மோசடி செய்தி மாதிரி",
      btnTrySafe: "பாதுகாப்பான செய்தி மாதிரி",
      btnMaskNotice: "உங்கள் சாதனத்திலேயே ரகசிய எண்கள் மறைக்கப்பட்டன.",
      sensitiveHint: "தயவுசெய்து OTP அல்லது PIN எண்களைப் பகிர வேண்டாம்.",

      step1: "உரையைப் படிக்கிறது...",
      step2: "நிதி உரிமைகளைக் கண்டறிகிறது...",
      step3: "எச்சரிக்கை வடிவங்களைக் கண்டறிகிறது...",
      step4: "சான்றுகளின் வலிமையை மதிப்பிடுகிறது...",
      step5: "எளிய விளக்கத்தை ஆயத்தப்படுத்துகிறது...",

      noMajorTitle: "முக்கிய எச்சரிக்கை அறிகுறிகள் இல்லை",
      noMajorMsg: "வழங்கப்பட்ட உள்ளடக்கத்தில் எந்த முக்கிய எச்சரிக்கை அறிகுறிகளும் கண்டறியப்படவில்லை. இது இதன் மூலத்தின் நம்பகத்தன்மையை உறுதி செய்யாது.",
      potentialTitle: "சாத்தியமான அபாயம்",
      potentialMsg: "சில எச்சரிக்கை அறிகுறிகள் கண்டறியப்பட்டுள்ளன. எந்த நடவடிக்கையும் எடுப்பதற்கு முன் அனுப்புநரையும் தகவலையும் சரிபார்க்கவும்.",
      highTitle: "அதிக அபாயம்",
      highMsg: "பல எச்சரிக்கை அறிகுறிகள் கண்டறியப்பட்டுள்ளன. சுதந்திரமாக சரிபார்க்கும் வரை பணம் அனுப்பவோ அல்லது தகவல்களைப் பகிரவோ வேண்டாம்.",
      inconclusiveTitle: "முடிவு செய்ய இயலவில்லை",
      inconclusiveMsg: "இது மோசடியானதா என்பதைத் தீர்மானிக்க நம்மிடம் போதுமான சான்றுகள் இல்லை. சுயாதீன அதிகாரப்பூர்வ மூலத்தின் மூலம் சரிபார்க்கவும்.",

      confidenceLabel: "சான்றுகளின் நம்பிக்கை அளவு",
      confidenceNote: "இந்த அளவு சான்றுகளின் வலிமையைக் காட்டுகிறது, மோசடியின் சதவீதத்தை அல்ல.",
      evidenceLabel: "சான்றுகளின் வலிமை",
      evidenceStrong: "শক্তமான சான்று",
      evidenceModerate: "மிதமான சான்று",
      evidenceLimited: "குறைந்த சான்று",
      unverifiedNote: "அனுப்புநர் அல்லது நிறுவனம் உண்மையானதா என்பதை ஸ்கேம்ஷீல்ட் நேரடியாக உறுதிப்படுத்த முடியாது.",

      actionTitle: "நீங்கள் இப்போது செய்ய வேண்டியவை",
      action1: "நிறுத்துங்கள்: அவசரப்பட்டு உடனே பணம் அனுப்பாதீர்கள்.",
      action2: "சரிபார்க்கவும்: அதிகாரப்பூர்வ இணையதளங்களில் (SEBI) நேரடியாக சரிபார்க்கவும்.",
      action3: "ரகசியம் காக்கவும்: OTP, PIN எண்களை யாருடனும் பகிர வேண்டாம்.",
      action4: "ஆதாரம் சேகரிக்கவும்: செய்தியின் திரைப்பிடிப்பை (Screenshot) சேமிக்கவும்.",
      action5: "புகார் அளிக்கவும்: பணம் இழந்திருந்தால் உடனே 1930 என்ற எண்ணிற்கு அழைக்கவும்.",

      sigGuaranteed: "உறுதியளிக்கப்பட்ட லாபம்",
      sigGuaranteedExp: "நிச்சய லாபம் தருவதாகக் கூறுகிறது. சட்டப்படி பங்குச்சந்தை முதலீடுகளில் நிச்சய லாபம் அளிக்க முடியாது.",
      sigUrgency: "அவசரம் மற்றும் நெருக்குதல்",
      sigUrgencyExp: "யோசிக்க நேரம் தராமல் உடனே செயல்பட வைக்க அவசரப்படுத்துகிறது.",
      sigAuthority: "சரிபார்க்கப்படாத அதிகாரப்பூர்வ கூற்று",
      sigAuthorityExp: "அரசு அல்லது SEBI அங்கீகாரம் பெற்றதாகக் கூறுகிறது. இதை அதிகாரப்பூர்வ தளத்தில் சரிபார்க்க வேண்டும்.",
      sigPayment: "பணம் செலுத்தும் கோரிக்கை",
      sigPaymentExp: "தனிநபர் UPI அல்லது கணக்கிற்கு பணம் அனுப்புமாறு கேட்கிறது.",
      sigCredential: "ரகசிய விவரங்கள் கோரிக்கை",
      sigCredentialExp: "OTP, PIN அல்லது கடவுச்சொல்லைக் கேட்கிறது.",
      sigLink: "சந்தேகத்திற்குரிய இணைய இணைப்பு",
      sigLinkExp: "போலியான அல்லது குறுகிய இணைய இணைப்பைக் கொண்டுள்ளது.",
      sigContact: "அழைக்கப்படாத குழுக்கள்",
      sigContactExp: "வாட்ஸ்அப் அல்லது தந்தி குழுவில் இணைய அழைக்கிறது.",

      reportingTitle: "அதிகாரப்பூர்வ உதவி மற்றும் புகார் மையங்கள்",
      report1930: "தேசிய சைபர் குற்ற உதவி எண்: 1930",
      reportCyber: "சைபர் குற்ற இணையதளம்: cybercrime.gov.in",
      reportSebiScores: "SEBI புகார் மையம்: scores.sebi.gov.in",
      reportSebiMain: "அதிகாரப்பூர்வ SEBI தளம்: sebi.gov.in",
      verifySelf: "இணைப்புகளை எப்போதும் நீங்களே நேரடியாகத் தட்டச்சு செய்து சரிபார்க்கவும்.",

      privacyTitle: "தனியுரிமை பாதுகாப்பு மையம்",
      privacySub: "உங்கள் தகவல்கள் உங்கள் போனுக்குள்ளேயே பகுப்பாய்வு செய்யப்படுகின்றன.",
      privacyNotNeededTitle: "நாங்கள் சேகரிக்காதவை",
      privacyNotNeededList: "• வங்கி கடவுச்சொல்\n• UPI அல்லது ATM PIN எண்கள்\n• அட்டை விவரங்கள்\n• உங்கள் OTP எண்கள்",
      privacyFlowTitle: "தகவல் பரிமாற்ற வரைபடம்",

      seniorActiveNotice: "பெரிய எழுத்து முறை செயல்படுகிறது: பெரிய எழுத்துக்கள், தெளிவான பொத்தான்கள்.",
      liteActiveNotice: "லைட் முறை செயல்படுகிறது: மெதுவான இணைய இணைப்பிற்கு உகந்தது.",

      footerDisclaimer1: "ஸ்கேம்ஷீல்ட் பாரத் முதலீட்டு ஆலோசனைகளையோ அல்லது பங்குப் பரிந்துரைகளையோ வழங்காது. இது ஒரு பாதுகாப்பு விழிப்புணர்வு கருவி மட்டுமே.",
      footerDisclaimer2: "தானியங்கி பகுப்பாய்வு தவறாக இருக்கலாம். முக்கியமான நிதித் தகவல்களை எப்போதும் நேரடியாக சரிபார்க்கவும்.",
      prototypeTag: "விதி சார்ந்த பகுப்பாய்வு · மாதிரி வடிவம்"
    },

    hi: {
      appName: "स्कैमशील्ड भारत",
      tagline: "सुरक्षा। समझ। सत्यापन।",
      heroTitle: "हर निवेश संदेश पर भरोसा न करें।",
      heroSub: "व्याख्यात्मक निवेशक-सुरक्षा तकनीक जो भारत के वरिष्ठ नागरिकों और नए निवेशकों को संदिग्ध वित्तीय संदेशों को समझने में मदद करती है।",
      heroBadge1: "गोपनीयता प्रथम",
      heroBadge2: "भारत-प्रथम",
      heroBadge3: "स्पष्ट विश्लेषण",
      heroBadge4: "वॉइस सुलभ",
      btnAnalyze: "संदेश की जांच करें",
      btnHowItWorks: "यह कैसे काम करता है",
      navHome: "होम",
      navAnalyze: "जांच करें",
      navHowItWorks: "कार्यप्रणाली",
      navWhy: "क्यों जरूरी है",
      navSafety: "सुरक्षा और हेल्पलाइन",
      navPrivacy: "गोपनीयता केंद्र",
      navLearn: "स्कैम पहचानें",
      navArch: "आर्किटेक्चर",
      navLogin: "डेमो लॉगिन",
      navLogout: "लॉगआउट",
      seniorModeBtn: "सीनियर मोड",
      liteModeBtn: "लाइट मोड",
      privacyNotice: "विश्लेषण से पहले आपके उपकरण पर संवेदनशील नंबर (OTP, PIN) छिपा दिए जाते हैं।",

      dashTitle: "आप क्या जांचना चाहते हैं?",
      dashSub: "संदिग्ध सामग्री की जांच के लिए नीचे दिए गए विकल्प चुनें।",
      optText: "संदेश टेक्स्ट",
      optTextDesc: "व्हाट्सएप या एसएमएस टेक्स्ट पेस्ट करें",
      optImage: "स्क्रीनशॉट OCR",
      optImageDesc: "संदेश की फोटो अपलोड करें",
      optVoice: "वॉइस इनपुट",
      optVoiceDesc: "अपनी भाषा में बोलें",
      optUrl: "लिंक / URL जांच",
      optUrlDesc: "वेबसाइट लिंक की जांच करें",

      inputPlaceholder: "संदिग्ध व्हाट्सएप संदेश या निवेश प्रस्ताव यहां पेस्ट करें...",
      btnAnalyzeAction: "जोखिम का विश्लेषण करें",
      btnTryScam: "स्कैम उदाहरण",
      btnTrySafe: "सुरक्षित उदाहरण",
      btnMaskNotice: "हमने विश्लेषण से पहले आपके डिवाइस पर संवेदनशील नंबर छिपा दिए।",
      sensitiveHint: "कृपया OTP, PIN या पासवर्ड शेयर न करें।",

      step1: "सामग्री पढ़ी जा रही है...",
      step2: "वित्तीय दावों की पहचान...",
      step3: "चेतावनी पैटर्न की पहचान...",
      step4: "साक्ष्यों का मूल्यांकन...",
      step5: "सरल व्याख्या तैयार की जा रही है...",

      noMajorTitle: "कोई मुख्य चेतावनी संकेत नहीं",
      noMajorMsg: "प्रदान की गई सामग्री में कोई मुख्य चेतावनी संकेत नहीं मिले। यह स्रोत के वैध होने की गारंटी नहीं देता है।",
      potentialTitle: "संभावित जोखिम",
      potentialMsg: "कई चेतावनी संकेत पाए गए हैं। कदम उठाने से पहले प्रेषक और दावों की स्वतंत्र रूप से पुष्टि करें।",
      highTitle: "उच्च जोखिम",
      highMsg: "कई चेतावनी संकेत पाए गए हैं। जब तक जानकारी की स्वतंत्र रूप से पुष्टि न हो जाए, पैसे भेजने या गोपनीय जानकारी साझा करने से बचें।",
      inconclusiveTitle: "अनिर्णायक",
      inconclusiveMsg: "हमारे पास यह तय करने के लिए पर्याप्त साक्ष्य नहीं हैं कि यह सामग्री धोखाधड़ी है या नहीं। आधिकारिक स्रोत से पुष्टि करें।",

      confidenceLabel: "साक्ष्य का विश्वास स्तर",
      confidenceNote: "विश्वास स्तर यह दर्शाता है कि हमें कितने साक्ष्य मिले, न कि स्कैम की संभावना।",
      evidenceLabel: "साक्ष्य की ताकत",
      evidenceStrong: "मजबूत साक्ष्य",
      evidenceModerate: "मध्यम साक्ष्य",
      evidenceLimited: "सीमित साक्ष्य",
      unverifiedNote: "स्कैमशील्ड स्वतंत्र रूप से यह पुष्टि नहीं कर सकता कि प्रेषक या संगठन वैध है या नहीं।",

      actionTitle: "अब आप क्या कर सकते हैं",
      action1: "रोकें: दबाव में तुरंत पैसे न भेजें।",
      action2: "सत्यापित करें: आधिकारिक वेबसाइटों (SEBI) की जांच करें।",
      action3: "गोपनीय रखें: OTP और PIN कभी साझा न करें।",
      action4: "साक्ष्य रखें: संदेश का स्क्रीनशॉट लें।",
      action5: "रिपोर्ट करें: वित्तीय धोखाधड़ी होने पर 1930 पर कॉल करें।",

      sigGuaranteed: "गारंटीकृत रिटर्न",
      sigGuaranteedExp: "निश्चित या जोखिम-मुक्त रिटर्न का वादा करता है। कानूनन बाजार निवेश में गारंटीकृत रिटर्न नहीं दिया जा सकता।",
      sigUrgency: "जल्दबाजी और दबाव",
      sigUrgencyExp: "सोचने का समय दिए बिना जल्दबाजी में निर्णय लेने का दबाव बनाता है।",
      sigAuthority: "अत्यावश्यक/अपुष्ट दावा",
      sigAuthorityExp: "सरकारी या SEBI अनुमोदन का दावा। इसे आधिकारिक स्रोत से सत्यापित करें।",
      sigPayment: "भुगतान का अनुरोध",
      sigPaymentExp: "व्यक्तिगत UPI या खाते में पैसे भेजने का अनुरोध।",
      sigCredential: "गोपनीय जानकारी का अनुरोध",
      sigCredentialExp: "OTP, PIN या पासवर्ड मांगता है।",
      sigLink: "संदिग्ध लिंक",
      sigLinkExp: "फर्जी या छोटे किए गए वेब लिंक शामिल हैं।",
      sigContact: "अवांछित ग्रुप/टिप्स",
      sigContactExp: "व्हाट्सएप या टेलीग्राम ग्रुप में शामिल होने का न्योता।",

      reportingTitle: "आधिकारिक आपातकालीन रिपोर्टिंग",
      report1930: "राष्ट्रीय साइबर अपराध हेल्पलाइन: 1930",
      reportCyber: "आधिकारिक साइबर अपराध पोर्टल: cybercrime.gov.in",
      reportSebiScores: "SEBI SCORES शिकायत पोर्टल: scores.sebi.gov.in",
      reportSebiMain: "आधिकारिक SEBI वेबसाइट: sebi.gov.in",
      verifySelf: "हमेशा आधिकारिक वेब पते स्वयं टाइप करके लिंक सत्यापित करें।",

      privacyTitle: "गोपनीयता और डेटा सुरक्षा केंद्र",
      privacySub: "आपकी जानकारी आपके ब्राउज़र के भीतर ही विश्लेषित की जाती है।",
      privacyNotNeededTitle: "हम क्या कभी एक्सेस नहीं करते",
      privacyNotNeededList: "• बैंक पासवर्ड\n• UPI / ATM PIN\n• कार्ड विवरण\n• आपके OTP नंबर",
      privacyFlowTitle: "डेटा फ्लो आरेख",

      seniorActiveNotice: "सीनियर मोड सक्रिय: बड़ा टेक्स्ट और उच्च कंट्रास्ट।",
      liteActiveNotice: "लाइट मोड सक्रिय: धीमे इंटरनेट कनेक्शन के लिए अनुकूलित।",

      footerDisclaimer1: "स्कैमशील्ड भारत निवेश सलाह या स्टॉक सिफारिशें प्रदान नहीं करता है। यह केवल एक सुरक्षा शिक्षा उपकरण है।",
      footerDisclaimer2: "स्वचालित विश्लेषण गलत हो सकता है। हमेशा महत्वपूर्ण वित्तीय जानकारी को स्वतंत्र रूप से सत्यापित करें।",
      prototypeTag: "नियम-आधारित विश्लेषण · प्रोटोटाइप"
    },

    te: {
      appName: "స్కామ్‌షీల్డ్ భారత్",
      tagline: "రక్షించండి. అర్థం చేసుకోండి. సరిచూడండి.",
      heroTitle: "ప్రతి పెట్టుబడి సందేశాన్ని నమ్మవద్దు.",
      heroSub: "అనుమానాస్పద ఆర్థిక సందేశాలను అర్థం చేసుకోవడానికి సీనియర్ పౌరులు మరియు కొత్త పెట్టుబడిదారులకు సహాయపడే సాంకేతికత.",
      heroBadge1: "గోప్యత ప్రథమం",
      heroBadge2: "భారత్-ఫస్ట్",
      heroBadge3: "వివరణాత్మక ఇంజిన్",
      heroBadge4: "వాయిస్ సపోర్ట్",
      btnAnalyze: "సందేశాన్ని సరిచూడండి",
      btnHowItWorks: "ఇది ఎలా పనిచేస్తుంది",
      navHome: "హోమ్",
      navAnalyze: "విశ్లేషణ",
      navHowItWorks: "విధానం",
      navWhy: "ఎందుకు ముఖ్యం",
      navSafety: "హెల్ప్‌లైన్",
      navPrivacy: "గోప్యతా కేంద్రం",
      navLearn: "స్కామ్‌ను గుర్తించండి",
      navArch: "ఆర్కిటెక్చర్",
      navLogin: "లాగిన్",
      navLogout: "లాగౌట్",
      seniorModeBtn: "సీనియర్ మోడ్",
      liteModeBtn: "లైట్ మోడ్",
      privacyNotice: "విశ్లేషణకు ముందు మీ పరికరంలో రహస్య సంఖ్యలు (OTP, PIN) దాచబడతాయి.",

      dashTitle: "మీరు దేనిని తనిఖీ చేయాలనుకుంటున్నారు?",
      dashSub: "అనుమానాస్పద వివరాలను తనిఖీ చేయడానికి క్రింది ఎంపికను ఎంచుకోండి.",
      optText: "సందేశం టెక్స్ట్",
      optTextDesc: "వాట్సాప్ లేదా SMS టెక్స్ట్ पेस्ट చేయండి",
      optImage: "స్క్రీన్‌షాట్ OCR",
      optImageDesc: "సందేశం ఫోటోను అప్‌లోడ్ చేయండి",
      optVoice: "వాయిస్ ఇన్పుట్",
      optVoiceDesc: "మీ భాషలో మాట్లాడండి",
      optUrl: "లింక్ / URL తనిఖీ",
      optUrlDesc: "వెబ్‌సైట్ లింక్‌ను తనిఖీ చేయండి",

      inputPlaceholder: "అనుమానాస్పద సందేశాన్ని ఇక్కడ पेस्ट చేయండి...",
      btnAnalyzeAction: "విశ్లేషించండి",
      btnTryScam: "స్కామ్ ఉదాహరణ",
      btnTrySafe: "సురక్షిత ఉదాహరణ",
      btnMaskNotice: "విశ్లేషణకు ముందే మీ ఫోన్‌లో రహస్య సంఖ్యలు దాచబడ్డాయి.",
      sensitiveHint: "దయచేసి OTP లేదా PIN లభ్యతను పంచుకోవద్దు.",

      step1: "సందేశాన్ని చదువుతోంది...",
      step2: "దావాలను గుర్తిస్తోంది...",
      step3: "హెచ్చరికల పరిశీలన...",
      step4: "ఆధారాల మూల్యాంకనం...",
      step5: "వివరణ సిద్ధమవుతోంది...",

      noMajorTitle: "ముఖ్యమైన హెచ్చరిక సంకేతాలు లేవు",
      noMajorMsg: "అందించిన వివరాలలో ఎటువంటి ముఖ్యమైన హెచ్చరిక సంకేతాలు కనుగొనబడలేదు. ఇది మూలం యొక్క ప్రామాణికతకు హామీ ఇవ్వదు.",
      potentialTitle: "సాధ్యమైన ప్రమాదం",
      potentialMsg: "కొన్ని హెచ్చరిక సంకేతాలు కనుగొనబడ్డాయి. చర్య తీసుకునే ముందు పంపినవారిని స్వతంత్రంగా సరిచూడండి.",
      highTitle: "అధిక ప్రమాదం",
      highMsg: "పలు హెచ్చరిక సంకేతాలు కనుగొనబడ్డాయి. వివరాలు ధృవీకరించబడే వరకు డబ్బు పంపడం లేదా సమాచారం పంచుకోవడం చేయవద్దు.",
      inconclusiveTitle: "అనిశ్చితం",
      inconclusiveMsg: "ఇది మోసపూరితమైనదా కాదా అని నిర్ణయించడానికి సరిపడా ఆధారాలు లేవు. అధికారిక మూలం ద్వారా సరిచూడండి.",

      confidenceLabel: "ఆధారాల విశ్వసనీయత",
      confidenceNote: "విశ్వసనీయత అనేది ఆధారాల బలాన్ని చూపిస్తుంది, మోసం యొక్క శాతాన్ని కాదు.",
      evidenceLabel: "ఆధారాల బలం",
      evidenceStrong: "బలమైన ఆధారం",
      evidenceModerate: "మధ్యస్థ ఆధారం",
      evidenceLimited: "పరిమిత ఆధారం",
      unverifiedNote: "పంపినవారు లేదా సంస్థ ప్రామాణికమైనదా కాదా అనేది స్కామ్‌షీల్డ్ స్వతంత్రంగా ధృవీకరించలేదు.",

      actionTitle: "మీరు ఇప్పుడు ఏమి చేయవచ్చు",
      action1: "ఆగండి: ఒత్తిడిలో వెంటనే డబ్బు పంపవద్దు.",
      action2: "సరిచూడండి: అధికారిక వెబ్‌సైట్లలో (SEBI) తనిఖీ చేయండి.",
      action3: "రహస్యంగా ఉంచండి: OTP, PIN లను ఎప్పుడూ పంచుకోవద్దు.",
      action4: "ఆధారం ఉంచండి: స్క్రీన్‌షాట్ తీసి ఉంచండి.",
      action5: "నివేదించండి: మోసం జరిగితే 1930 హెల్ప్‌లైన్‌కు కాల్ చేయండి.",

      sigGuaranteed: "హామీ ఇవ్వబడిన రాబడి",
      sigGuaranteedExp: "ఖచ్చితమైన లాభాల హామీ. మార్కెట్ పెట్టుబడులలో నిశ్చిత లాభాలు ఇవ్వడం చట్టరీత్యా సాధ్యం కాదు.",
      sigUrgency: "అత్యవసరం మరియు ఒత్తిడి",
      sigUrgencyExp: "ఆలోచించే సమయం ఇవ్వకుండా వెంటనే స్పందించేలా ఒత్తిడి తెస్తుంది.",
      sigAuthority: "ధృవీకరించబడని అధికారం",
      sigAuthorityExp: "SEBI/RBI అనుమతి ఉందనే దావా. అధికారిక సైట్‌లో సరిచూడాలి.",
      sigPayment: "చెల్లింపు అభ్యర్థన",
      sigPaymentExp: "వ్యక్తిగత UPI లేదా ఖాతాకు డబ్బు పంపమని కోరుతుంది.",
      sigCredential: "రహస్య వివరాల కోరిక",
      sigCredentialExp: "OTP లేదా PIN అడుగుతుంది.",
      sigLink: "అనుమానాస్పద లింక్",
      sigLinkExp: "నకిలీ లేదా చిన్న లింక్‌లు ఉన్నాయి.",
      sigContact: "అపరిచిత గ్రూపులు",
      sigContactExp: "వాట్సాప్ లేదా టెలిగ్రామ్ గ్రూప్‌లో చేరమని ఆహ్వానం.",

      reportingTitle: "అధికారిక అత్యవసర నివేదిక",
      report1930: "సైబర్ క్రైమ్ హెల్ప్‌లైన్: 1930",
      reportCyber: "సైబర్ క్రైమ్ పోర్టల్: cybercrime.gov.in",
      reportSebiScores: "SEBI SCORES పోర్టల్: scores.sebi.gov.in",
      reportSebiMain: "అధికారిక SEBI వెబ్‌సైట్: sebi.gov.in",
      verifySelf: "లింక్‌లను ఎల్లప్పుడూ నిష్పాక్షికంగా నేరుగా టైప్ చేసి తనిఖీ చేయండి.",

      privacyTitle: "గోప్యతా రక్షణ కేంద్రం",
      privacySub: "మీ వివరాలు మీ ఫోన్‌లోనే విశ్లేషించబడతాయి.",
      privacyNotNeededTitle: "మేము సేకరించనివి",
      privacyNotNeededList: "• బ్యాంక్ పాస్‌వర్డ్\n• UPI / ATM PIN\n• కార్డ్ వివరాలు\n• మీ OTP సంఖ్యలు",
      privacyFlowTitle: "డేటా ఫ్లో డయాగ్రామ్",

      seniorActiveNotice: "సీనియర్ మోడ్ ఆన్‌లో ఉంది: పెద్ద అక్షరాలు మరియు స్పష్టమైన బటన్లు.",
      liteActiveNotice: "లైట్ మోడ్ ఆన్‌లో ఉంది: తక్కువ ఇంటర్నెట్ వేగానికి అనుకూలం.",

      footerDisclaimer1: "స్కామ్‌షీల్డ్ భారత్ పెట్టుబడి సలహాలను అందించదు. ఇది కేవలం ఒక రక్షణ అవగాహన సాధనం మాత్రమే.",
      footerDisclaimer2: "ఆటోమేటెడ్ విశ్లేషణ తప్పు కావచ్చు. ముఖ్యమైన వివరాలను ఎల్లప్పుడూ స్వతంత్రంగా సరిచూడండి.",
      prototypeTag: "రూల్ ఆధారిత విశ్లేషణ · ప్రొటోటైప్"
    },

    ml: {
      appName: "സ്‌കാംഷീൽഡ് ഭാരത്",
      tagline: "സംരക്ഷിക്കുക. മനസ്സിലാക്കുക. പരിശോധിക്കുക.",
      heroTitle: "എല്ലാ നിക്ഷേപ സന്ദേശങ്ങളെയും വിശ്വസിക്കരുത്.",
      heroSub: "സംശയാസ്പദമായ സാമ്പത്തിക സന്ദേശങ്ങൾ മനസ്സിലാക്കാൻ മുതിർന്ന പൗരന്മാരെയും പുതിയ നിക്ഷേപകരെയും സഹായിക്കുന്ന സാങ്കേതികവിദ്യ.",
      heroBadge1: "സ്വകാര്യത പ്രധാനം",
      heroBadge2: "ഭാരത്-ഫസ്റ്റ്",
      heroBadge3: "ലളിതമായ വിശദീകരണം",
      heroBadge4: "വോയ്‌സ് പിന്തുണ",
      btnAnalyze: "സന്ദേശം പരിശോധിക്കുക",
      btnHowItWorks: "പ്രവർത്തനം എങ്ങനെ",
      navHome: "ഹോം",
      navAnalyze: "പരിശോധന",
      navHowItWorks: "പ്രവർത്തനം",
      navWhy: "എന്തുകൊണ്ട് പ്രധാനം",
      navSafety: "ഹെൽപ്പ് ലൈൻ",
      navPrivacy: "സ്വകാര്യത കേന്ദ്രം",
      navLearn: "തട്ടിപ്പ് തിരിച്ചറിയുക",
      navArch: "ആർക്കിടെക്ചർ",
      navLogin: "ലോഗിൻ",
      navLogout: "ലോഗ് ഔട്ട്",
      seniorModeBtn: "സീനിയർ മോഡ്",
      liteModeBtn: "ലൈറ്റ് മോഡ്",
      privacyNotice: "പരിശോധനയ്ക്ക് മുൻപ് നിങ്ങളുടെ ഉപകരണത്തിൽ തന്നെ രഹസ്യ നമ്പറുകൾ (OTP, PIN) മറയ്ക്കപ്പെടും.",

      dashTitle: "നിങ്ങൾക്ക് എന്താണ് പരിശോധിക്കേണ്ടത്?",
      dashSub: "സംശയാസ്പദമായ വിവരങ്ങൾ പരിശോധിക്കാൻ താഴെ നൽകിയിരിക്കുന്ന രീതി തിരഞ്ഞെടുക്കുക.",
      optText: "സന്ദേശം ടെക്സ്റ്റ്",
      optTextDesc: "വാട്ട്‌സ്ആപ്പ് അല്ലെങ്കിൽ SMS ടെക്സ്റ്റ് പേസ്റ്റ് ചെയ്യുക",
      optImage: "സ്ക്രീൻഷോട്ട് OCR",
      optImageDesc: "സന്ദേശത്തിന്റെ ചിത്രം അപ്‌ലോഡ് ചെയ്യുക",
      optVoice: "വോയ്‌സ് ഇൻപുട്ട്",
      optVoiceDesc: "നിങ്ങളുടെ ഭാഷയിൽ സംസാരിക്കുക",
      optUrl: "ലിങ്ക് / URL പരിശോധന",
      optUrlDesc: "വെബ്‌സൈറ്റ് ലിങ്ക് പരിശോധിക്കുക",

      inputPlaceholder: "സംശയാസ്പദമായ സന്ദേശം ഇവിടെ പേസ്റ്റ് ചെയ്യുക...",
      btnAnalyze: "പരിശോധിക്കുക",
      btnTryScam: "തട്ടിപ്പ് ഉദാഹരണം",
      btnTrySafe: "സുരക്ഷിത ഉദാഹരണം",
      btnMaskNotice: "നിങ്ങളുടെ ഫോണിൽ തന്നെ രഹസ്യ നമ്പറുകൾ മറയ്ക്കപ്പെട്ടു.",
      sensitiveHint: "ദയവായി OTP അല്ലെങ്കിൽ PIN വിവരങ്ങൾ പങ്കിടരുത്.",

      step1: "സന്ദേശം വായിക്കുന്നു...",
      step2: "അവകാശവാദങ്ങൾ കണ്ടെത്തുന്നു...",
      step3: "മുന്നറിയിപ്പുകൾ തിരിച്ചറിയുന്നു...",
      step4: "തെളിവുകളുടെ ബലം വിലയിരുത്തുന്നു...",
      step5: "വിശദീകരണം തയ്യാറാക്കുന്നു...",

      noMajorTitle: "പ്രധാന മുന്നറിയിപ്പുകൾ ഒന്നുമില്ല",
      noMajorMsg: "നൽകിയ വിവരങ്ങളിൽ പ്രധാന മുന്നറിയിപ്പുകൾ ഒന്നും കണ്ടെത്തിയില്ല. എന്നാൽ ഇത് ഉറവിടത്തിന്റെ നിഷ്കളങ്കത ഉറപ്പുനൽകുന്നില്ല.",
      potentialTitle: "സാധ്യമായ അപകടം",
      potentialMsg: "ചില മുന്നറിയിപ്പുകൾ കണ്ടെത്തിയിട്ടുണ്ട്. തുക അയക്കുന്നതിന് മുൻപ് വിവരങ്ങൾ സ്വന്തമായി പരിശോധിക്കുക.",
      highTitle: "ഉയർന്ന അപകടസാധ്യത",
      highMsg: "നിരവധി മുന്നറിയിപ്പുകൾ കണ്ടെത്തിയിട്ടുണ്ട്. വിവരങ്ങൾ പരിശോധിക്കുന്നത് വരെ പണം അയക്കാനോ രഹസ്യവിവരങ്ങൾ പങ്കിടാനോ പാടില്ല.",
      inconclusiveTitle: "തീരുമാനമെടുക്കാനായില്ല",
      inconclusiveMsg: "ഇത് തട്ടിപ്പാണോ എന്ന് ഉറപ്പിക്കാൻ തക്ക തെളിവുകളില്ല. ഔദ്യോഗിക ഉറവിടങ്ങളിലൂടെ നേരിട്ട് പരിശോധിക്കുക.",

      confidenceLabel: "തെളിവുകളുടെ വിശ്വാസ്യത",
      confidenceNote: "വിശ്വാസ്യത കാണിക്കുന്നത് തെളിവുകളുടെ ബലമാണ്, തട്ടിപ്പിന്റെ ശതമാനമല്ല.",
      evidenceLabel: "തെളിവുകളുടെ ശക്തി",
      evidenceStrong: "ശക്തമായ തെളിവ്",
      evidenceModerate: "മിതമായ തെളിവ്",
      evidenceLimited: "കുറഞ്ഞ തെളിവ്",
      unverifiedNote: "സന്ദേശം അയച്ചയാൾ ഔദ്യോഗിക സ്ഥാപനമാണോ എന്ന് സ്‌കാംഷീൽഡിന് നേരിട്ട് ഉറപ്പിക്കാനാവില്ല.",

      actionTitle: "നിങ്ങൾ ഇപ്പോൾ ചെയ്യേണ്ട കാര്യങ്ങൾ",
      action1: "നിൽക്കൂ: സമ്മർദ്ദത്തിലായി ഉടൻ പണം അയക്കരുത്.",
      action2: "പരിശോധിക്കുക: ഔദ്യോഗിക വെബ്സൈറ്റുകളിൽ (SEBI) നേരിട്ട് പരിശോധിക്കുക.",
      action3: "രഹസ്യമായി സൂക്ഷിക്കുക: OTP, PIN വിവരങ്ങൾ ആരോടും പറയരുത്.",
      action4: "തെളിവ് സൂക്ഷിക്കുക: സ്‌ക്രീൻഷോട്ട് എടുത്തു വയ്ക്കുക.",
      action5: "പരാതിപ്പെടുക: തട്ടിപ്പിനിരയായാൽ 1930 എന്ന നമ്പറിൽ വിളിക്കുക.",

      sigGuaranteed: "ഉറപ്പുള്ള ലാഭം",
      sigGuaranteedExp: "നിശ്ചിത ലാഭം വാഗ്ദാനം ചെയ്യുന്നു. വിപണി നിക്ഷേപങ്ങളിൽ നിയമപരമായി ഉറപ്പുള്ള ലാഭം നൽകാനാവില്ല.",
      sigUrgency: "അടിയന്തിരാവസ്ഥയും സമ്മർദ്ദവും",
      sigUrgencyExp: "ചിന്തിക്കാൻ സമയം നൽകാതെ ഉടൻ പ്രവർത്തിക്കാൻ സമ്മർദ്ദം ചെലുത്തുന്നു.",
      sigAuthority: "സ്ഥിരീകരിക്കാത്ത അതോറിറ്റി അവകാശവാദം",
      sigAuthorityExp: "SEBI/RBI അംഗീകാരമുണ്ടെന്ന അവകാശവാദം. ഔദ്യോഗിക സൈറ്റിൽ പരിശോധിക്കണം.",
      sigPayment: "പണമടയ്ക്കൽ ആവശ്യം",
      sigPaymentExp: "വ്യക്തിഗത UPI അല്ലെങ്കിൽ അക്കൗണ്ടിലേക്ക് പണം അയക്കാൻ ആവശ്യപ്പെടുന്നു.",
      sigCredential: "രഹസ്യ വിവരങ്ങൾ ആവശ്യപ്പെടൽ",
      sigCredentialExp: "OTP അല്ലെങ്കിൽ PIN ആവശ്യപ്പെടുന്നു.",
      sigLink: "സംശയാസ്പദമായ ലിങ്ക്",
      sigLinkExp: "വ്യാജ അല്ലെങ്കിൽ ചെറുതാക്കിയ ലിങ്കുകൾ ഉൾപ്പെടുന്നു.",
      sigContact: "അനാവശ്യ ഗ്രൂപ്പുകൾ",
      sigContactExp: "വാട്ട്‌സ്ആപ്പ് അല്ലെങ്കിൽ ടെലിഗ്രാം ഗ്രൂപ്പിലേക്ക് ക്ഷണം.",

      reportingTitle: "ഔദ്യോഗിക പരാതി പരിഹാര കേന്ദ്രങ്ങൾ",
      report1930: "ദേശീയ സൈബർ ക്രൈം ഹെൽപ്പ് ലൈൻ: 1930",
      reportCyber: "സൈബർ ക്രൈം പോർട്ടൽ: cybercrime.gov.in",
      reportSebiScores: "SEBI SCORES പരാതി പോർട്ടൽ: scores.sebi.gov.in",
      reportSebiMain: "ഔദ്യോഗിക SEBI വെബ്സൈറ്റ്: sebi.gov.in",
      verifySelf: "ലിങ്കുകൾ എപ്പോഴും നേരിട്ട് തട്ടിച്ചു ചെയ്ത് പരിശോധിക്കുക.",

      privacyTitle: "സ്വകാര്യതാ സംരക്ഷണ കേന്ദ്രം",
      privacySub: "നിങ്ങളുടെ വിവരങ്ങൾ നിങ്ങളുടെ ഫോണിനുള്ളിൽ മാത്രമാണ് പരിശോധിക്കപ്പെടുന്നത്.",
      privacyNotNeededTitle: "ഞങ്ങൾ ശേഖരിക്കാത്ത കാര്യങ്ങൾ",
      privacyNotNeededList: "• ബാങ്ക് പാസ്‌വേഡ്\n• UPI / ATM PIN\n• കാർഡ് വിവരങ്ങൾ\n• നിങ്ങളുടെ OTP നമ്പറുകൾ",
      privacyFlowTitle: "ഡാറ്റ ഫ്ലോ ഡയഗ്രാം",

      seniorActiveNotice: "സീനിയർ മോഡ് സജീവം: വലിയ അക്ഷരങ്ങളും വ്യക്തമായ ബട്ടണുകളും.",
      liteActiveNotice: "ലൈറ്റ് മോഡ് സജീവം: വേഗത കുറഞ്ഞ ഇന്റർനെറ്റിന് അനുയോജ്യം.",

      footerDisclaimer1: "സ്‌കാംഷീൽഡ് ഭാരത് നിക്ഷേപ ഉപദേശങ്ങൾ നൽകുന്നില്ല. ഇത് ഒരു സുരക്ഷാ ബോധവൽക്കരണ ഉപകരണം മാത്രമാണ്.",
      footerDisclaimer2: "ഓട്ടോമേറ്റഡ് പരിശോധന തെറ്റാകാം. പ്രധാനപ്പെട്ട വിവരങ്ങൾ എപ്പോഴും നേരിട്ട് പരിശോധിക്കുക.",
      prototypeTag: "റൂൾ അധിഷ്ഠിത പരിശോധന · പ്രോട്ടോടൈപ്പ്"
    }
  },

  setLanguage: function(lang) {
    if (this.translations[lang]) {
      this.currentLang = lang;
      this.applyTranslations();
      if (typeof app !== 'undefined' && app.onLanguageChanged) {
        app.onLanguageChanged(lang);
      }
    }
  },

  t: function(key) {
    var dict = this.translations[this.currentLang] || this.translations['en'];
    return dict[key] || this.translations['en'][key] || key;
  },

  applyTranslations: function() {
    var elements = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var key = el.getAttribute('data-i18n');
      var translation = this.t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        if (el.hasAttribute('placeholder')) {
          el.setAttribute('placeholder', translation);
        }
      } else {
        el.textContent = translation;
      }
    }
    
    // Update html lang attribute
    document.documentElement.lang = this.currentLang;
  }
};
