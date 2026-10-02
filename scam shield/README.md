# ScamShield Bharat (SANGYAN Hackathon, Track A)

**Tagline:** Protect. Understand. Verify.  
**Track:** Track A – Digital Fraud & Scam Resilience  
**Target Audience / Persona:** Ravi Kumar, 62, Tier-3 city in Tamil Nadu, Android user, WhatsApp user, Tamil language preference, low financial literacy, struggles with small UI text and complex English jargon.

---

## 📌 Executive Summary

ScamShield Bharat is an explainable, privacy-first, multilingual investor-safety web prototype designed to protect India's elderly and first-time retail investors from financial fraud, fake regulatory claims, and high-pressure investment scams.

Unlike black-box models or generic AI chatbots, ScamShield Bharat uses an explainable rule-based pattern matching engine (`engine.js`) that runs entirely within the user's browser. It detects warning signals (guaranteed returns, fake regulatory claims, urgency pressure, credential theft, payment requests), masks sensitive numbers locally before analysis, and delivers simple, actionable guidance in regional languages.

---

## 🛠️ Architecture & Technical Specifications

- **Zero Build Step & File:// Execution**: Plain HTML5, CSS3, vanilla JavaScript (`index.html`, `styles.css`, `i18n.js`, `engine.js`, `app.js`). Opens directly in any web browser (`file://`) without npm, Node.js, Webpack, or local web servers.
- **Zero External Runtime Dependencies**: The core application runs 100% offline with zero external CDNs, fonts, or frameworks. The optional Screenshot OCR feature lazy-loads Tesseract.js from CDN with an automatic manual typing fallback if offline.
- **Local Sensitive Data Masking**: Automatically masks 16-digit card numbers, OTPs, UPI PINs, and bank account numbers on device before evaluation.
- **Auth Provider Abstraction**: Features a clean `authProvider` interface generating 6-digit DEMO OTPs via `crypto.getRandomValues()` and offering a 1-tap "Continue as Guest" mode.

---

## 📊 Implemented vs. Planned Roadmap

| Feature / Layer | Prototype (Implemented) | Production (Planned) |
|---|---|---|
| **Analysis Engine** | Deterministic Rule-Based Analyzer (`engine.js`) | FastAPI Backend + Fine-tuned Multilingual NLP Classifier |
| **Explanation Layer** | Pattern-matched explainable signal cards & text highlighting | Fine-tuned LLM for personalized regional advice |
| **Privacy & Security** | In-Browser Local Sensitive Number Masking | Edge-masked API Gateway + Zero-Retention Policy |
| **Authentication** | `authProvider` Interface + `crypto.getRandomValues()` Demo OTP | Firebase Auth / Twilio Verify / MSG91 SMS Provider |
| **Languages** | English, Tamil, Hindi, Telugu, Malayalam UI & Signals | 12+ Official Indian Languages + Voice-First Dialog |
| **OCR** | Tesseract.js CDN (Lazy-loaded) with manual fallback | Cloud Vision OCR Engine |
| **Verification** | Text pattern analysis of URL & regulatory claims | Real-time SEBI / NSDL / RBI API Registry Lookup |

---

## 🧪 SANGYAN Guardrail Compliance Table

| SANGYAN Rule | Implementation in ScamShield Bharat | Compliance Status |
|---|---|---|
| **No Investment Advice** | Permanent footer disclaimer & copy enforcement: zero stock tips, buy/sell/hold calls, or price predictions. | ✅ FULL COMPLIANCE |
| **No Fake Certainty** | Confidence capped at 90% with explicit note: *"Confidence shows how much evidence we found, not the chance that this is a scam."* | ✅ FULL COMPLIANCE |
| **Truthful Labeling** | Labeled "Rule-based analysis · Prototype" & "Signal-based confidence". Never claims false ML/AI certainty. | ✅ FULL COMPLIANCE |
| **Unverified Authority Claim** | Regulatory claims (SEBI/RBI) labeled *"Unverified authority claim"*, never *"fake"*, with official verification links. | ✅ FULL COMPLIANCE |
| **Privacy First** | Local masking of sensitive numbers prior to analysis. Zero remote message storage. | ✅ FULL COMPLIANCE |
| **Official Reporting** | Direct official links to 1930 Helpline, cybercrime.gov.in, SEBI SCORES, and sebi.gov.in. | ✅ FULL COMPLIANCE |

---

## 🚀 How to Run the Prototype

1. Download or extract the project folder `scamshield-bharat`.
2. Double-click `index.html` to open it directly in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.
3. No web server, terminal, or installation steps are required (`file://` supported).
4. Click **"Run Automated Test Suite (9 Test Cases)"** in the Architecture section to execute dynamic automated verification.

---

## ⚠️ Disclaimers & Limitations

- **Rule-Based Limitation**: The prototype analyzer is deterministic and rule-based. Automated analysis may produce false positives or negatives. Users must independently verify financial information.
- **Tamil Translation Notice**: Tamil UI strings have been structured for elderly clarity and accessibility, marked *to be reviewed by a native speaker* for production deployment.
- **No Financial Advice**: ScamShield Bharat is strictly an educational investor-safety tool and does not provide financial or investment recommendations.
