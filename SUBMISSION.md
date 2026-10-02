# SANGYAN Investor Resilience Hackathon Submission Package
**Track A: Digital Fraud & Scam Resilience**
**Project Name:** ScamShield Bharat
**Tagline:** Protect. Understand. Verify.

---

## Section 1: Problem Statement

First-time and elderly retail investors in India's Tier-2 and Tier-3 cities (such as 62-year-old Ravi Kumar from Tamil Nadu) are increasingly targeted by sophisticated digital financial scams via WhatsApp, Telegram, SMS, and phone calls.

Scammers exploit low financial literacy and digital unfamiliarity by fabricating guaranteed-return schemes (e.g., "50% profit in 7 days"), forging SEBI/RBI regulator logos, creating artificial time pressure ("offer ends in 30 minutes"), and requesting funds via personal UPI IDs or demanding sensitive security credentials (OTPs, PINs).

Existing solutions fail this vulnerable demographic because:
1. **Black-box AI tools** output meaningless probability percentages without explainable context.
2. **Complex interfaces** overload elderly users with small text and financial jargon.
3. **Privacy risks** deter users who fear their personal messages will be harvested by servers.

---

## Section 2: Solution Overview

**ScamShield Bharat** is an explainable, privacy-first, multilingual investor-safety web application built specifically for Bharat-first investors.

### Core Capabilities:
1. **Detect (Explainable Risk Analysis)**: Identifies 7 key scam warning vectors (guaranteed returns, urgency pressure, unverified authority claims, payment requests, credential theft, suspicious links, and unsolicited groups) using a deterministic rule-based engine.
2. **Understand (Visual Highlighting & Simple Explanations)**: Highlights specific text spans with color-coded and icon-based badges. Explains *why* a claim is suspicious without technical jargon.
3. **Verify (Actionable Safety & Official Portals)**: Connects users directly to official verification resources (1930 Cyber Fraud Helpline, cybercrime.gov.in, SEBI SCORES, sebi.gov.in).
4. **Stay Safe (Privacy & Accessibility)**: Masks sensitive numbers locally on device before analysis. Provides **Senior Mode** (large text, high contrast, 60px tap targets) and **Lite Mode** (low data, optimized for 2G/3G connections).

---

## Section 3: Technology Details

### 1. Prototype Architecture
- **Zero-Build Vanilla Stack**: Built with standard HTML5, CSS3, ES6 JavaScript. Runs locally directly via file:// with zero npm/node build steps.
- **Deterministic Rule Engine (engine.js)**: Evaluates English and Tamil/Hinglish keyword patterns, computes evidence-strength confidence (capped at 90%), and handles inconclusive cases gracefully.
- **Multilingual i18n Engine (i18n.js)**: Real-time DOM text replacement across English, Tamil, Hindi, Telugu, and Malayalam using data-i18n keys.
- **Local Sensitive Data Masking**: Uses local regex patterns to strip OTPs (from scam messages), card numbers, and UPI PINs in browser memory before scoring.
- **Demo Mode**: Simple local demo session -- no phone number, OTP, or personal information required. Prototype authentication is intentionally omitted to keep the demonstration focused on investor-safety analysis.

### 2. Production Architecture (Planned Path)
```
[User Browser / Mobile]
       |
       +-- Local Masking Layer (regex on device)
       |
       +-- API Gateway (HTTPS REST)
               |
               +-- FastAPI Microservice
               |      +-- Fine-tuned Multilingual NLP Classifier (BERT-multilingual)
               |      +-- Explainable LLM Layer (Gemini Flash / Llama-3-8B)
               |
               +-- SEBI / NSDL / RBI Registry API Lookup
               +-- Cloud Vision OCR Service
```

---

## Section 4: Impact & Scalability

### 1. Qualitative Impact Outcomes
- **Enhanced Resilience**: Empowers elderly investors like Ravi Kumar to pause and verify before transferring money under pressure.
- **Digital Literacy**: Educates users on common scam vectors through interactive visual feedback.
- **Reduced Financial Losses**: Acts as a first line of defense before fraudulent UPI transactions occur.

### 2. Scalability Roadmap
- **Phase 1 (Hackathon Prototype)**: Local explainable engine, English + Tamil flow, Senior & Lite modes, privacy masking.
- **Phase 2 (Near-Term)**: Expansion to Hindi, Telugu, Malayalam, Kannada, Bengali; voice-first dialogs; SMS gateway integration.
- **Phase 3 (Enterprise & Institutional)**: Official integration with SEBI registered intermediaries, bank messaging apps, and state cyber cell helplines.

---

## Section 5: 3-5 Minute Demo Script (Ravi Story)

**Target Persona:** Ravi Kumar, 62, Tier-3 Tamil Nadu
**Duration:** 4 minutes

```
[0:00 - 0:30] OPEN & ENTER DEMO MODE
Presenter: "Meet Ravi Kumar, a 62-year-old retired teacher from Salem, Tamil Nadu.
He opens ScamShield Bharat. No login, no OTP, no phone number needed.
He clicks 'Enter Demo Mode' and is immediately inside the application."

[0:30 - 1:15] SENIOR MODE & LANGUAGE SELECTION
Presenter: "Ravi clicks 'Senior Mode' for larger text and tap targets.
He selects Tamil language. The entire interface -- all labels, warnings,
and instructions -- switches to Tamil."

[1:15 - 2:00] ANALYZE A SUSPICIOUS MESSAGE
Presenter: "Ravi pastes a WhatsApp message promising guaranteed 50% returns
in 7 days under a 'SEBI Approved Govt Scheme', asking to transfer Rs 10,000
within 30 minutes. Before analysis, ScamShield automatically masks any
sensitive numbers locally: 'We hid sensitive numbers on your device.'"

[2:00 - 2:45] EXPLAINABLE RESULT & UNCERTAINTY
Presenter: "ScamShield highlights warning signals in Tamil:
Guaranteed Returns (Red), Urgency Pressure (Amber), Unverified SEBI Claim (Blue).
The result clearly states HIGH RISK with signal confidence and the honest note:
'Confidence shows how much evidence we found, not the chance that this is a scam.'
It advises: 'ScamShield cannot confirm whether the sender is legitimate.
Verify on official SEBI portal.'"

[2:45 - 3:30] LITE MODE & SAFETY CHECKLIST
Presenter: "Ravi toggles Lite Mode for his 2G connection. He views the checklist:
Pause, Verify, Never Share PINs or OTPs, Call 1930 Helpline.
He clicks the direct link to cybercrime.gov.in."

[3:30 - 4:00] PRIVACY CENTER & TEST SUITE
Presenter: "Privacy Center shows zero server storage. We run the 9-test automated
suite confirming 100% offline file:// capability. ScamShield Bharat: Protect. Understand. Verify."
```

---

## Judging Criteria Mapping Table

| SANGYAN Judging Criteria | Satisfying Feature / Capability in ScamShield Bharat |
|---|---|
| **1. Investor Resilience & Safety** | Explainable 7-vector scam analysis, warning highlights, official reporting (1930 Helpline, SEBI SCORES), and actionable safety checklists. |
| **2. Bharat-First Usability** | Full Tamil flow, multi-language support (EN, TA, HI, TE, ML), 1-tap Senior Mode (WCAG AAA), Lite Mode for 2G/3G, and Web Speech voice input. |
| **3. Trust / Privacy / Guardrails** | Local in-browser number masking, no personal data collected, truthful prototype labeling, confidence capping at 90%, zero remote message storage, and mandatory financial disclaimers. |
| **4. Technical Execution** | Zero build step vanilla HTML/CSS/JS engine working directly via file://, Tesseract.js OCR lazy-loading, Web Speech API integration, and integrated 9-test automated test suite. |
| **5. Impact & Scalability** | Structured qualitative impact framework, architectural separation of implemented vs planned components, and API integration roadmap for SEBI & banking portals. |
