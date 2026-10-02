# ScamShield Bharat (SANGYAN Hackathon, Track A)

**Tagline:** Protect. Understand. Verify.
**Track:** Track A - Digital Fraud & Scam Resilience
**Target Audience / Persona:** Ravi Kumar, 62, Tier-3 city in Tamil Nadu, Android user, WhatsApp user, Tamil language preference, low financial literacy.

---

## Executive Summary

ScamShield Bharat is an explainable, privacy-first, multilingual investor-safety web prototype designed to protect India's elderly and first-time retail investors from financial fraud, fake regulatory claims, and high-pressure investment scams.

It uses an explainable rule-based pattern matching engine (engine.js) that runs entirely within the user's browser. It detects warning signals (guaranteed returns, fake regulatory claims, urgency pressure, credential theft, payment requests), masks sensitive numbers locally before analysis, and delivers simple, actionable guidance in regional languages.

---

## Demo Access

ScamShield Bharat uses a local **Demo Mode** for the hackathon prototype. No phone number, OTP, bank credential, or personal authentication information is required.

Click **"Enter Demo Mode"** on the site to immediately access the full application. No account, password, or personal information of any kind is needed.

> Production authentication, if required, would be implemented server-side using an established authentication provider (e.g., Firebase Auth or Twilio Verify for SMS OTP). Authentication is intentionally omitted from this prototype to keep the hackathon demonstration focused on investor-safety analysis.

---

## Architecture & Technical Specifications

- **Zero Build Step & File:// Execution**: Plain HTML5, CSS3, vanilla JavaScript. Opens directly in any browser without npm, Node.js, or Webpack.
- **Zero External Runtime Dependencies**: Core app runs 100% offline. Optional Screenshot OCR lazy-loads Tesseract.js from CDN with a fallback.
- **Local Sensitive Data Masking**: Automatically masks 16-digit card numbers, OTPs mentioned in scam messages, UPI PINs, and bank account numbers on device before evaluation. Note: OTP masking is for scam message analysis only -- ScamShield does not use OTPs for authentication.

---

## Implemented vs. Planned Roadmap

| Feature / Layer | Prototype (Implemented) | Production (Planned) |
|---|---|---|
| Analysis Engine | Deterministic Rule-Based Analyzer (engine.js) | FastAPI Backend + Fine-tuned Multilingual NLP Classifier |
| Explanation Layer | Pattern-matched explainable signal cards & text highlighting | Fine-tuned LLM for personalized regional advice |
| Privacy & Security | In-Browser Local Sensitive Number Masking | Edge-masked API Gateway + Zero-Retention Policy |
| Authentication | Local Demo Mode -- no personal info required | Firebase Auth / Twilio Verify / MSG91 SMS Provider |
| Languages | English, Tamil, Hindi, Telugu, Malayalam | 12+ Official Indian Languages + Voice-First Dialog |
| OCR | Tesseract.js CDN (Lazy-loaded) with manual fallback | Cloud Vision OCR Engine |
| Verification | Text pattern analysis of URL & regulatory claims | Real-time SEBI / NSDL / RBI API Registry Lookup |

---

## SANGYAN Guardrail Compliance Table

| SANGYAN Rule | Implementation | Status |
|---|---|---|
| No Investment Advice | Permanent footer disclaimer; zero stock tips or price predictions | FULL COMPLIANCE |
| No Fake Certainty | Confidence capped at 90% with explicit uncertainty note | FULL COMPLIANCE |
| Truthful Labeling | Labeled "Rule-based analysis - Prototype". Never claims ML/AI certainty | FULL COMPLIANCE |
| Unverified Authority | Regulatory claims labeled "Unverified authority claim", not "fake" | FULL COMPLIANCE |
| Privacy First | Local masking, zero remote storage, no phone number or personal data collected | FULL COMPLIANCE |
| Official Reporting | Direct links to 1930 Helpline, cybercrime.gov.in, SEBI SCORES, sebi.gov.in | FULL COMPLIANCE |

---

## How to Run

1. Download or extract the project folder.
2. Double-click index.html to open in any modern browser.
3. No web server, terminal, or installation required (file:// supported).
4. Click "Run Automated Test Suite" in the Architecture section to verify.

---

## Disclaimers & Limitations

- Rule-Based Limitation: The analyzer is deterministic and rule-based. May produce false positives or negatives. Users must independently verify.
- Tamil Translation Notice: Tamil UI strings are structured for elderly clarity, marked for native speaker review before production.
- No Financial Advice: ScamShield Bharat is strictly an educational investor-safety tool.
