/* =========================================================
   KaushalSetu — Landing page behaviour
   Vanilla JavaScript only. No frameworks, no backend.
   ========================================================= */
(function () {
  "use strict";

  /* -------------------------------------------------------
     Translation dictionary
     ------------------------------------------------------- */
  var translations = {
    en: {
      "a11y.skip": "Skip to main content",
      "a11y.langChanged": "Language changed to English.",
      "about.eyebrow": "Why we are building this",
      "about.note": "KaushalSetu helps organise work records into probable skills. It does not replace formal certification or claim government validation.",
      "about.noteTitle": "What “evidence-based” means here",
      "about.p1": "Millions of workers learn through doing — fixing a fault, shaping wood, installing a panel or solving a customer's problem. Much of that skill is real, but hard to show.",
      "about.p2": "KaushalSetu is a concept for an AI-assisted, evidence-based platform that helps workers turn everyday work into a clear, portable skill profile — while keeping the worker in control.",
      "about.photoCaption": "Illustrative stock photo · Pexels",
      "about.quote": "“The best proof of skill is the work itself.”",
      "about.quoteFooter": "Our design principle",
      "about.title": "Skills are built on the job. Recognition should follow.",
      "about.value1.desc": "Work is documented through voice, text and photos — not only certificates.",
      "about.value1.title": "Evidence over assumptions",
      "about.value2.desc": "People decide what to share, and with whom.",
      "about.value2.title": "Worker-first privacy",
      "about.value3.desc": "Designed for Hindi, English and future Indian languages.",
      "about.value3.title": "Language-inclusive",
      "about.value4.desc": "A work identity that can travel across employers and locations.",
      "about.value4.title": "Portable by design",
      "actions.login": "Login",
      "actions.register": "Register",
      "actions.switchLanguage": "Switch to Hindi",
      "brand.tagline": "Skills · Identity · Opportunity",
      "contact.desc": "Have a question about the concept, accessibility, or a potential collaboration? This prototype does not yet accept live messages.",
      "contact.emailInputLabel": "Email address",
      "contact.emailLabel": "Email (placeholder)",
      "contact.emailPlaceholder": "you@example.com",
      "contact.eyebrow": "Get in touch",
      "contact.formBadge": "Demo form",
      "contact.formNote": "Front-end preview only. This form does not send or store data.",
      "contact.formTitle": "Register your interest",
      "contact.locationLabel": "Location",
      "contact.locationValue": "India",
      "contact.messageLabel": "Message",
      "contact.messagePlaceholder": "Tell us what you'd like to know...",
      "contact.nameLabel": "Your name",
      "contact.namePlaceholder": "e.g. Asha Verma",
      "contact.note": "No official contact channels, partnerships or service approvals are claimed on this prototype.",
      "contact.role.employer": "Employer",
      "contact.role.partner": "Partner / Other",
      "contact.role.trainer": "Trainer / Assessor",
      "contact.role.worker": "Worker",
      "contact.roleLabel": "I am a",
      "contact.statusLabel": "Contact status",
      "contact.statusValue": "Details coming soon",
      "contact.submit": "Submit preview message",
      "contact.successBody": "This is a front-end prototype. Your message was not submitted or stored anywhere.",
      "contact.successTitle": "Demo form — nothing was sent",
      "contact.title": "Let's build a more visible workforce, together.",
      "demo.login.title": "Login is coming soon",
      "demo.login.body": "This is a front-end prototype. No account exists and no credentials were checked.",
      "demo.register.title": "Registration is coming soon",
      "demo.register.body": "This is a front-end prototype. No account was created and no personal data was collected.",
      "demo.pass.title": "KaushalPass demo",
      "demo.pass.body": "This is a sample card for design preview only. It is not a verified identity or a government-issued document.",
      "demo.module.title": "Learning module preview",
      "demo.module.body": "Course modules are illustrative in this prototype. No lesson will start and no progress will be saved.",
      "demo.alerts.title": "Update alerts are not live",
      "demo.alerts.body": "No email address was collected and no subscription was created. This prototype has no backend.",
      "demo.apply.title": "Sample listing only",
      "demo.apply.body": "This is an illustrative vacancy. No application was submitted and no employer was contacted.",
      "demo.privacy.title": "Privacy policy placeholder",
      "demo.privacy.body": "This prototype does not collect, send or store personal data. A full privacy policy will be published before any live service.",
      "demo.terms.title": "Terms of use placeholder",
      "demo.terms.body": "These terms are not final. This site is a design prototype with no live services or accounts.",
      "demo.accessibility.title": "Accessibility statement placeholder",
      "demo.accessibility.body": "This prototype aims to follow accessible design practices. A full accessibility statement will be published before launch.",
      "demo.generic.title": "Front-end demo",
      "demo.generic.body": "This is a front-end prototype with no live services, accounts or data storage.",
      "dialog.badge": "Front-end demo",
      "dialog.close": "Close dialog",
      "dialog.fineprint": "No backend, account service or data storage is connected to this page.",
      "dialog.ok": "Got it",
      "features.eyebrow": "What makes it different",
      "features.jobs.desc": "Future opportunity discovery based on demonstrated skills and interests.",
      "features.jobs.link": "Preview opportunities",
      "features.jobs.title": "Job Matching",
      "features.livelihoods.desc": "A stronger future built on recognition, learning and access to work.",
      "features.livelihoods.link": "Our approach",
      "features.livelihoods.title": "Better Livelihoods",
      "features.pass.desc": "A portable digital identity that keeps work history, skills and evidence in one place.",
      "features.pass.link": "Explore KaushalPass",
      "features.pass.mini": "DEMO",
      "features.pass.title": "KaushalPass",
      "features.subtitle": "Built around evidence, consent and portability — so skills learned outside classrooms are not invisible.",
      "features.title": "One platform, a stronger work identity",
      "features.training.desc": "Personalised learning recommendations that meet workers where they are.",
      "features.training.link": "View learning paths",
      "features.training.title": "Training & Development",
      "features.verify.chip1": "Voice note",
      "features.verify.chip2": "Wiring · probable",
      "features.verify.desc": "An evidence-based verification status built from real work records — transparently labelled, never overstated.",
      "features.verify.flowLabel": "Illustrative flow from a voice note to a probable wiring skill",
      "features.verify.link": "See how it works",
      "features.verify.note": "Illustrative model — not a certification.",
      "features.verify.title": "Skill Verification",
      "footer.accessibility": "Accessibility statement",
      "footer.backToTop": "Back to top",
      "footer.contactNote": "Contact details and support channels will be published when the platform launches.",
      "footer.contactTitle": "Contact",
      "footer.copyright": "© 2026 KaushalSetu. All rights reserved.",
      "footer.credit": "Photography via Pexels",
      "footer.demoBadge": "Front-end demo · No live services",
      "footer.desc": "An AI-assisted, evidence-based skill and work identity platform for India's informal and skilled workers. This site is a design prototype.",
      "footer.disclaimer": "KaushalSetu is an independent concept prototype. It is not an official government service and has no government affiliation or approval.",
      "footer.legalNote": "These documents are placeholders for this prototype.",
      "footer.legalTitle": "Legal & accessibility",
      "footer.placeholderLabel": "Placeholder address — not monitored",
      "footer.privacy": "Privacy policy",
      "footer.quickLinks": "Quick links",
      "footer.terms": "Terms of use",
      "form.err.name": "Please enter your name (at least 2 characters).",
      "form.err.email": "Please enter a valid email address.",
      "form.err.message": "Please write a message of at least 10 characters.",
      "hero.badge": "AI-assisted · Evidence-based · Worker-first",
      "hero.carpenterCaption": "Carpentry",
      "hero.ctaPrimary": "Register as Worker",
      "hero.ctaSecondary": "Know More",
      "hero.description": "KaushalSetu helps skilled and informal workers record real work experience, build an evidence-based skill profile, discover learning paths, and carry a portable work identity wherever they go.",
      "hero.evidence": "Voice evidence added",
      "hero.evidenceDemo": "Demo",
      "hero.evidenceLang": "Hindi",
      "hero.illustrative": "Illustrative",
      "hero.line1": "Connecting Skills,",
      "hero.line2": "Verifying Competencies,",
      "hero.line3": "Creating Opportunities",
      "hero.note1": "Real Work.",
      "hero.note2": "Real Skills.",
      "hero.note3": "Brighter Future.",
      "hero.photoCaption": "Illustrative stock photo",
      "hero.point1": "Voice-first evidence",
      "hero.point2": "Hindi & English",
      "hero.point3": "Portable KaushalPass",
      "hero.tagline": "कौशल से समृद्धि की ओर",
      "hero.visualLabel": "Illustrative preview of a KaushalPass profile",
      "how.eyebrow": "Simple by design",
      "how.step1.desc": "Register and share basic details about your work and experience.",
      "how.step1.title": "Create Profile",
      "how.step2.desc": "Record work using voice notes, simple text or photos.",
      "how.step2.title": "Add Work Evidence",
      "how.step3.desc": "Organise evidence into probable skills, with clear labels.",
      "how.step3.title": "Build Skill Profile",
      "how.step4.desc": "Discover learning recommendations that build on existing skills.",
      "how.step4.title": "Learn & Grow",
      "how.step5.desc": "Present your skills and explore suitable work opportunities.",
      "how.step5.title": "Access Opportunities",
      "how.subtitle": "Five clear steps turn everyday work into a skill profile that workers can understand, improve and share.",
      "how.title": "How KaushalSetu Works",
      "nav.about": "About",
      "nav.closeMenu": "Close menu",
      "nav.contact": "Contact",
      "nav.home": "Home",
      "nav.how": "How It Works",
      "nav.mobileLabel": "Mobile navigation",
      "nav.openMenu": "Open menu",
      "nav.opportunities": "Opportunities",
      "nav.pass": "KaushalPass",
      "nav.primaryLabel": "Primary navigation",
      "nav.training": "Training",
      "opp.badge": "Illustrative listings",
      "opp.cta": "Get opportunity updates",
      "opp.ctaDesc": "This is a front-end prototype. Sign-up is not connected yet.",
      "opp.ctaTitle": "Want to hear when opportunity matching is ready?",
      "opp.disclaimer": "Sample listings for preview only — not live vacancies. No application is submitted.",
      "opp.eyebrow": "Where skills can lead",
      "opp.filter.all": "All",
      "opp.filter.carpentry": "Carpentry",
      "opp.filter.electrical": "Electrical",
      "opp.filter.service": "Service",
      "opp.filter.technician": "Technician",
      "opp.filterLabel": "Filter sample opportunities",
      "opp.job1.meta": "Jaipur, Rajasthan · Full-time",
      "opp.job1.pay": "₹18,000–24,000 / month",
      "opp.job1.title": "Electrical maintenance technician",
      "opp.job2.meta": "Pune, Maharashtra · Contract",
      "opp.job2.pay": "₹700–900 / day",
      "opp.job2.title": "Site carpenter",
      "opp.job3.meta": "New Delhi · Full-time",
      "opp.job3.pay": "₹20,000–26,000 / month",
      "opp.job3.title": "AC service technician",
      "opp.job4.meta": "Bengaluru, Karnataka · Gig",
      "opp.job4.pay": "₹650–850 / day",
      "opp.job4.title": "Furniture assembly specialist",
      "opp.job5.meta": "Surat, Gujarat · Full-time",
      "opp.job5.pay": "₹18,000–22,000 / month",
      "opp.job5.title": "Solar panel installer",
      "opp.job6.meta": "Lucknow, Uttar Pradesh · Full-time",
      "opp.job6.pay": "₹16,000–21,000 / month",
      "opp.job6.title": "Appliance repair technician",
      "opp.sample": "Sample listing",
      "opp.showing": "sample listings shown",
      "opp.subtitle": "A preview of how a verified skill profile could connect workers with suitable work.",
      "opp.tag.assembly": "Assembly",
      "opp.tag.carpentry": "Carpentry",
      "opp.tag.diagnostics": "Diagnostics",
      "opp.tag.electrical": "Electrical",
      "opp.tag.measurement": "Measurement",
      "opp.tag.repair": "Repair",
      "opp.tag.safety": "Safety",
      "opp.tag.service": "Service",
      "opp.tag.technician": "Technician",
      "opp.title": "Explore opportunity pathways",
      "opp.view": "View sample",
      "pass.avatarAlt": "Illustrative portrait used on a sample KaushalPass card",
      "pass.cardLabel": "Illustrative KaushalPass demo card",
      "pass.demo": "DEMO CARD",
      "pass.disclaimer": "Illustrative demo card — not a verified identity.",
      "pass.holder": "Ramesh Kumar",
      "pass.idLabel": "Pass ID",
      "pass.location": "Jaipur, Rajasthan",
      "pass.qrAlt": "Decorative sample QR pattern — not a real code",
      "pass.qrLabel": "Sample QR",
      "pass.skill1": "Wiring",
      "pass.skill2": "Safety",
      "pass.summaryLabel1": "Work records",
      "pass.summaryLabel2": "Probable skills",
      "pass.summaryLabel3": "Learning path",
      "pass.trade": "Electrician",
      "passSection.badge": "Illustrative sample",
      "passSection.bullet1": "One profile for skills, work evidence and learning progress.",
      "passSection.bullet2": "A simple QR view for sharing with employers or trainers — with consent.",
      "passSection.bullet3": "Clear labels that separate self-reported work from verified evidence.",
      "passSection.bullet4": "Available in Hindi and English.",
      "passSection.caption": "Sample profile for design demonstration only. No real person or identity is represented.",
      "passSection.cta": "Create your KaushalPass",
      "passSection.cta2": "See how it works",
      "passSection.desc": "A simple, shareable view of a worker's skills, evidence and learning journey — designed to travel across employers, trainers and locations.",
      "passSection.eyebrow": "Your work, in your pocket",
      "passSection.note": "KaushalPass is a private, worker-controlled profile. It is not a government-issued identity document.",
      "passSection.title": "Meet KaushalPass",
      "stats.categories": "Skill Categories",
      "stats.demo": "Demo Data",
      "stats.footnote": "Illustrative figures for this design preview — not actual platform metrics.",
      "stats.heading": "Platform statistics, illustrative demo data",
      "stats.modules": "Learning Modules",
      "stats.records": "Work Records",
      "stats.title": "KaushalSetu at a glance",
      "stats.workers": "Skilled Workers",
      "training.badge": "Illustrative learning paths",
      "training.course1.cat": "Electrical",
      "training.course1.desc": "Refresh safe isolation, wiring and inspection habits for everyday electrical work.",
      "training.course1.meta": "3 modules · 45 min",
      "training.course1.title": "Electrical safety essentials",
      "training.course2.cat": "Carpentry",
      "training.course2.desc": "Build confidence with measurement, material selection and safer hand-tool practice.",
      "training.course2.meta": "4 modules · 1 hr",
      "training.course2.title": "Measure twice: carpentry basics",
      "training.course3.cat": "Service skills",
      "training.course3.desc": "Practical communication, trust and problem-solving for on-site and workshop service.",
      "training.course3.meta": "2 modules · 30 min",
      "training.course3.title": "Customer care for service workers",
      "training.cta": "Get learning updates",
      "training.eyebrow": "Learn what comes next",
      "training.languages": "Hindi / English",
      "training.level.all": "All levels",
      "training.level.beginner": "Beginner",
      "training.note": "These are illustrative learning paths for this design preview. The course catalogue is not live yet.",
      "training.preview": "Preview module",
      "training.subtitle": "Personalised recommendations will connect work evidence to practical learning paths.",
      "training.title": "Training that grows with your work"
    },
    hi: {
      "a11y.skip": "मुख्य सामग्री पर जाएँ",
      "a11y.langChanged": "भाषा हिंदी में बदल गई।",
      "about.eyebrow": "हम इसे क्यों बना रहे हैं",
      "about.note": "KaushalSetu काम के रिकॉर्ड को संभावित कौशलों में व्यवस्थित करने में मदद करता है। यह औपचारिक प्रमाणन का विकल्प नहीं है और सरकारी सत्यापन का दावा नहीं करता।",
      "about.noteTitle": "यहाँ “साक्ष्य-आधारित” का क्या अर्थ है",
      "about.p1": "लाखों श्रमिक काम करते हुए सीखते हैं — कोई खराबी ठीक करना, लकड़ी तराशना, पैनल लगाना या ग्राहक की समस्या हल करना। इनमें से बहुत-सा कौशल असली होता है, पर दिखाना मुश्किल।",
      "about.p2": "KaushalSetu एक ऐसे AI-सहायित, साक्ष्य-आधारित प्लेटफ़ॉर्म की संकल्पना है जो श्रमिकों को रोज़ के काम को स्पष्ट और साथ ले जाने योग्य कौशल प्रोफ़ाइल में बदलने में मदद करता है — और नियंत्रण श्रमिक के पास ही रहता है।",
      "about.photoCaption": "उदाहरण के लिए स्टॉक फ़ोटो · Pexels",
      "about.quote": "“कौशल का सबसे अच्छा प्रमाण काम ही है।”",
      "about.quoteFooter": "हमारा डिज़ाइन सिद्धांत",
      "about.title": "कौशल काम करते हुए बनते हैं। पहचान उसके बाद मिलनी चाहिए।",
      "about.value1.desc": "काम को आवाज़, लिखित विवरण और फ़ोटो से दर्ज किया जाता है — केवल प्रमाणपत्रों से नहीं।",
      "about.value1.title": "अनुमान से पहले साक्ष्य",
      "about.value2.desc": "क्या साझा करना है और किसके साथ, यह व्यक्ति तय करता है।",
      "about.value2.title": "श्रमिक-प्रथम निजता",
      "about.value3.desc": "हिंदी, अंग्रेज़ी और आगे की भारतीय भाषाओं के लिए बनाया गया।",
      "about.value3.title": "भाषा-समावेशी",
      "about.value4.desc": "एक कार्य-पहचान जो नियोक्ताओं और स्थानों के साथ चल सके।",
      "about.value4.title": "साथ ले जाने योग्य",
      "actions.login": "लॉगिन",
      "actions.register": "रजिस्टर",
      "actions.switchLanguage": "अंग्रेज़ी में बदलें",
      "brand.tagline": "कौशल · पहचान · अवसर",
      "contact.desc": "संकल्पना, सुगम्यता या किसी संभावित सहयोग के बारे में कोई सवाल है? यह प्रोटोटाइप अभी सीधे संदेश स्वीकार नहीं करता।",
      "contact.emailInputLabel": "ईमेल पता",
      "contact.emailLabel": "ईमेल (प्लेसहोल्डर)",
      "contact.emailPlaceholder": "you@example.com",
      "contact.eyebrow": "संपर्क करें",
      "contact.formBadge": "डेमो फ़ॉर्म",
      "contact.formNote": "केवल फ्रंट-एंड प्रीव्यू। यह फ़ॉर्म डेटा न भेजता है न सहेजता है।",
      "contact.formTitle": "अपनी रुचि दर्ज करें",
      "contact.locationLabel": "स्थान",
      "contact.locationValue": "भारत",
      "contact.messageLabel": "संदेश",
      "contact.messagePlaceholder": "बताइए आप क्या जानना चाहते हैं...",
      "contact.nameLabel": "आपका नाम",
      "contact.namePlaceholder": "जैसे: आशा वर्मा",
      "contact.note": "इस प्रोटोटाइप पर किसी आधिकारिक संपर्क माध्यम, साझेदारी या सेवा-स्वीकृति का दावा नहीं किया गया है।",
      "contact.role.employer": "नियोक्ता",
      "contact.role.partner": "साझेदार / अन्य",
      "contact.role.trainer": "प्रशिक्षक / आकलनकर्ता",
      "contact.role.worker": "श्रमिक",
      "contact.roleLabel": "मैं हूँ",
      "contact.statusLabel": "संपर्क स्थिति",
      "contact.statusValue": "जानकारी जल्द आएगी",
      "contact.submit": "प्रीव्यू संदेश भेजें",
      "contact.successBody": "यह एक फ्रंट-एंड प्रोटोटाइप है। आपका संदेश कहीं भेजा या सहेजा नहीं गया।",
      "contact.successTitle": "डेमो फ़ॉर्म — कुछ भी नहीं भेजा गया",
      "contact.title": "आइए मिलकर एक अधिक दिखने वाला कार्यबल बनाएँ।",
      "demo.login.title": "लॉगिन जल्द आएगा",
      "demo.login.body": "यह एक फ्रंट-एंड प्रोटोटाइप है। कोई खाता मौजूद नहीं है और कोई लॉगिन जाँचा नहीं गया।",
      "demo.register.title": "रजिस्ट्रेशन जल्द आएगा",
      "demo.register.body": "यह एक फ्रंट-एंड प्रोटोटाइप है। कोई खाता नहीं बना और कोई व्यक्तिगत डेटा एकत्र नहीं किया गया।",
      "demo.pass.title": "KaushalPass डेमो",
      "demo.pass.body": "यह केवल डिज़ाइन प्रीव्यू के लिए एक नमूना कार्ड है। यह सत्यापित पहचान या सरकार द्वारा जारी दस्तावेज़ नहीं है।",
      "demo.module.title": "लर्निंग मॉड्यूल प्रीव्यू",
      "demo.module.body": "इस प्रोटोटाइप में पाठ्यक्रम मॉड्यूल केवल उदाहरण हैं। कोई पाठ शुरू नहीं होगा और कोई प्रगति सहेजी नहीं जाएगी।",
      "demo.alerts.title": "अपडेट अलर्ट लाइव नहीं हैं",
      "demo.alerts.body": "कोई ईमेल पता एकत्र नहीं किया गया और कोई सदस्यता नहीं बनी। इस प्रोटोटाइप में कोई बैकएंड नहीं है।",
      "demo.apply.title": "केवल नमूना सूची",
      "demo.apply.body": "यह एक उदाहरण रिक्ति है। कोई आवेदन जमा नहीं हुआ और किसी नियोक्ता से संपर्क नहीं किया गया।",
      "demo.privacy.title": "गोपनीयता नीति प्लेसहोल्डर",
      "demo.privacy.body": "यह प्रोटोटाइप व्यक्तिगत डेटा एकत्र, भेज या सहेजता नहीं है। किसी भी लाइव सेवा से पहले पूरी गोपनीयता नीति प्रकाशित की जाएगी।",
      "demo.terms.title": "उपयोग की शर्तें — प्लेसहोल्डर",
      "demo.terms.body": "ये शर्तें अंतिम नहीं हैं। यह साइट एक डिज़ाइन प्रोटोटाइप है जिसमें कोई लाइव सेवा या खाता नहीं है।",
      "demo.accessibility.title": "सुगम्यता विवरण — प्लेसहोल्डर",
      "demo.accessibility.body": "यह प्रोटोटाइप सुगम डिज़ाइन प्रथाओं का पालन करने का प्रयास करता है। लॉन्च से पहले पूरा सुगम्यता विवरण प्रकाशित किया जाएगा।",
      "demo.generic.title": "फ्रंट-एंड डेमो",
      "demo.generic.body": "यह एक फ्रंट-एंड प्रोटोटाइप है जिसमें कोई लाइव सेवा, खाता या डेटा स्टोरेज नहीं है।",
      "dialog.badge": "फ्रंट-एंड डेमो",
      "dialog.close": "संवाद बंद करें",
      "dialog.fineprint": "इस पृष्ठ से कोई बैकएंड, खाता सेवा या डेटा स्टोरेज जुड़ा नहीं है।",
      "dialog.ok": "समझ गया",
      "features.eyebrow": "यह अलग क्यों है",
      "features.jobs.desc": "दिखाए गए कौशल और रुचियों के आधार पर भविष्य में अवसर खोजना।",
      "features.jobs.link": "अवसरों की झलक",
      "features.jobs.title": "नौकरी मिलान",
      "features.livelihoods.desc": "पहचान, सीख और काम तक पहुँच पर बना एक मज़बूत भविष्य।",
      "features.livelihoods.link": "हमारा दृष्टिकोण",
      "features.livelihoods.title": "बेहतर आजीविका",
      "features.pass.desc": "एक साथ ले जाने योग्य डिजिटल पहचान जो काम का इतिहास, कौशल और साक्ष्य एक जगह रखती है।",
      "features.pass.link": "KaushalPass देखें",
      "features.pass.mini": "डेमो",
      "features.pass.title": "KaushalPass",
      "features.subtitle": "साक्ष्य, सहमति और साथ ले जाने की क्षमता के इर्द-गिर्द बनाया गया — ताकि कक्षाओं के बाहर सीखे गए कौशल अदृश्य न रहें।",
      "features.title": "एक प्लेटफ़ॉर्म, एक मज़बूत कार्य-पहचान",
      "features.training.desc": "श्रमिकों की वर्तमान स्थिति से शुरू होने वाली व्यक्तिगत सीखने की सिफ़ारिशें।",
      "features.training.link": "सीखने के रास्ते देखें",
      "features.training.title": "प्रशिक्षण और विकास",
      "features.verify.chip1": "आवाज़ नोट",
      "features.verify.chip2": "वायरिंग · संभावित",
      "features.verify.desc": "असली काम के रिकॉर्ड से बनी साक्ष्य-आधारित सत्यापन स्थिति — स्पष्ट रूप से लेबल की गई, कभी बढ़ा-चढ़ाकर नहीं।",
      "features.verify.flowLabel": "आवाज़ नोट से संभावित वायरिंग कौशल तक का उदाहरण प्रवाह",
      "features.verify.link": "यह कैसे काम करता है",
      "features.verify.note": "उदाहरण मॉडल — प्रमाणन नहीं।",
      "features.verify.title": "कौशल सत्यापन",
      "footer.accessibility": "सुगम्यता विवरण",
      "footer.backToTop": "ऊपर जाएँ",
      "footer.contactNote": "प्लेटफ़ॉर्म शुरू होने पर संपर्क विवरण और सहायता माध्यम प्रकाशित किए जाएँगे।",
      "footer.contactTitle": "संपर्क",
      "footer.copyright": "© 2026 KaushalSetu. सर्वाधिकार सुरक्षित।",
      "footer.credit": "फ़ोटोग्राफ़ी: Pexels",
      "footer.demoBadge": "फ्रंट-एंड डेमो · कोई लाइव सेवा नहीं",
      "footer.desc": "भारत के अनौपचारिक और कुशल श्रमिकों के लिए एक AI-सहायित, साक्ष्य-आधारित कौशल और कार्य-पहचान प्लेटफ़ॉर्म। यह साइट एक डिज़ाइन प्रोटोटाइप है।",
      "footer.disclaimer": "KaushalSetu एक स्वतंत्र संकल्पना प्रोटोटाइप है। यह आधिकारिक सरकारी सेवा नहीं है और इसका सरकार से कोई संबंध या अनुमोदन नहीं है।",
      "footer.legalNote": "ये दस्तावेज़ इस प्रोटोटाइप के लिए प्लेसहोल्डर हैं।",
      "footer.legalTitle": "कानूनी और सुगम्यता",
      "footer.placeholderLabel": "प्लेसहोल्डर पता — निगरानी नहीं होती",
      "footer.privacy": "गोपनीयता नीति",
      "footer.quickLinks": "त्वरित लिंक",
      "footer.terms": "उपयोग की शर्तें",
      "form.err.name": "कृपया अपना नाम लिखें (कम से कम 2 अक्षर)।",
      "form.err.email": "कृपया एक मान्य ईमेल पता लिखें।",
      "form.err.message": "कृपया कम से कम 10 अक्षरों का संदेश लिखें।",
      "hero.badge": "AI-सहायित · साक्ष्य-आधारित · श्रमिक-प्रथम",
      "hero.carpenterCaption": "बढ़ईगीरी",
      "hero.ctaPrimary": "श्रमिक के रूप में रजिस्टर करें",
      "hero.ctaSecondary": "और जानें",
      "hero.description": "KaushalSetu कुशल और अनौपचारिक श्रमिकों को असली काम का अनुभव दर्ज करने, साक्ष्य-आधारित कौशल प्रोफ़ाइल बनाने, सीखने के रास्ते खोजने और अपनी साथ ले जाने योग्य कार्य-पहचान हर जगह ले जाने में मदद करता है।",
      "hero.evidence": "आवाज़ साक्ष्य जोड़ा गया",
      "hero.evidenceDemo": "डेमो",
      "hero.evidenceLang": "हिंदी",
      "hero.illustrative": "उदाहरण",
      "hero.line1": "कौशल जोड़ते हुए,",
      "hero.line2": "क्षमताएँ सत्यापित करते हुए,",
      "hero.line3": "अवसर बनाते हुए",
      "hero.note1": "असली काम।",
      "hero.note2": "असली कौशल।",
      "hero.note3": "बेहतर भविष्य।",
      "hero.photoCaption": "उदाहरण स्टॉक फ़ोटो",
      "hero.point1": "आवाज़-प्रथम साक्ष्य",
      "hero.point2": "हिंदी और अंग्रेज़ी",
      "hero.point3": "साथ ले जाने योग्य KaushalPass",
      "hero.tagline": "कौशल से समृद्धि की ओर",
      "hero.visualLabel": "KaushalPass प्रोफ़ाइल का उदाहरण प्रीव्यू",
      "how.eyebrow": "सरल रूप से बनाया गया",
      "how.step1.desc": "रजिस्टर करें और अपने काम व अनुभव की बुनियादी जानकारी साझा करें।",
      "how.step1.title": "प्रोफ़ाइल बनाएँ",
      "how.step2.desc": "आवाज़ नोट, सरल लिखित विवरण या फ़ोटो से काम दर्ज करें।",
      "how.step2.title": "काम का साक्ष्य जोड़ें",
      "how.step3.desc": "साक्ष्य को स्पष्ट लेबल के साथ संभावित कौशलों में व्यवस्थित करें।",
      "how.step3.title": "कौशल प्रोफ़ाइल बनाएँ",
      "how.step4.desc": "मौजूदा कौशलों पर आगे बढ़ने वाली सीखने की सिफ़ारिशें खोजें।",
      "how.step4.title": "सीखें और बढ़ें",
      "how.step5.desc": "अपने कौशल दिखाएँ और उपयुक्त काम के अवसर खोजें।",
      "how.step5.title": "अवसरों तक पहुँचें",
      "how.subtitle": "पाँच स्पष्ट चरण रोज़ के काम को ऐसी कौशल प्रोफ़ाइल में बदलते हैं जिसे श्रमिक समझ, सुधार और साझा कर सकें।",
      "how.title": "KaushalSetu कैसे काम करता है",
      "nav.about": "परिचय",
      "nav.closeMenu": "मेन्यू बंद करें",
      "nav.contact": "संपर्क",
      "nav.home": "होम",
      "nav.how": "यह कैसे काम करता है",
      "nav.mobileLabel": "मोबाइल नेविगेशन",
      "nav.openMenu": "मेन्यू खोलें",
      "nav.opportunities": "अवसर",
      "nav.pass": "KaushalPass",
      "nav.primaryLabel": "मुख्य नेविगेशन",
      "nav.training": "प्रशिक्षण",
      "opp.badge": "उदाहरण सूचियाँ",
      "opp.cta": "अवसर अपडेट पाएँ",
      "opp.ctaDesc": "यह एक फ्रंट-एंड प्रोटोटाइप है। साइन-अप अभी जुड़ा नहीं है।",
      "opp.ctaTitle": "अवसर मिलान तैयार होने पर सूचना चाहते हैं?",
      "opp.disclaimer": "ये सूचियाँ केवल प्रीव्यू के लिए हैं — असली रिक्तियाँ नहीं। कोई आवेदन जमा नहीं होता।",
      "opp.eyebrow": "कौशल कहाँ ले जा सकता है",
      "opp.filter.all": "सभी",
      "opp.filter.carpentry": "बढ़ईगीरी",
      "opp.filter.electrical": "इलेक्ट्रिकल",
      "opp.filter.service": "सेवा",
      "opp.filter.technician": "तकनीशियन",
      "opp.filterLabel": "उदाहरण अवसरों को फ़िल्टर करें",
      "opp.job1.meta": "जयपुर, राजस्थान · पूर्णकालिक",
      "opp.job1.pay": "₹18,000–24,000 / माह",
      "opp.job1.title": "इलेक्ट्रिकल रखरखाव तकनीशियन",
      "opp.job2.meta": "पुणे, महाराष्ट्र · अनुबंध",
      "opp.job2.pay": "₹700–900 / दिन",
      "opp.job2.title": "साइट बढ़ई",
      "opp.job3.meta": "नई दिल्ली · पूर्णकालिक",
      "opp.job3.pay": "₹20,000–26,000 / माह",
      "opp.job3.title": "AC सेवा तकनीशियन",
      "opp.job4.meta": "बेंगलुरु, कर्नाटक · गिग",
      "opp.job4.pay": "₹650–850 / दिन",
      "opp.job4.title": "फ़र्निचर असेंबली विशेषज्ञ",
      "opp.job5.meta": "सूरत, गुजरात · पूर्णकालिक",
      "opp.job5.pay": "₹18,000–22,000 / माह",
      "opp.job5.title": "सोलर पैनल इंस्टॉलर",
      "opp.job6.meta": "लखनऊ, उत्तर प्रदेश · पूर्णकालिक",
      "opp.job6.pay": "₹16,000–21,000 / माह",
      "opp.job6.title": "उपकरण मरम्मत तकनीशियन",
      "opp.sample": "उदाहरण सूची",
      "opp.showing": "उदाहरण सूचियाँ दिख रही हैं",
      "opp.subtitle": "एक झलक कि सत्यापित कौशल प्रोफ़ाइल श्रमिकों को उपयुक्त काम से कैसे जोड़ सकती है।",
      "opp.tag.assembly": "असेंबली",
      "opp.tag.carpentry": "बढ़ईगीरी",
      "opp.tag.diagnostics": "निदान",
      "opp.tag.electrical": "इलेक्ट्रिकल",
      "opp.tag.measurement": "माप",
      "opp.tag.repair": "मरम्मत",
      "opp.tag.safety": "सुरक्षा",
      "opp.tag.service": "सेवा",
      "opp.tag.technician": "तकनीशियन",
      "opp.title": "अवसरों के रास्ते देखें",
      "opp.view": "नमूना देखें",
      "pass.avatarAlt": "उदाहरण KaushalPass कार्ड पर इस्तेमाल किया गया नमूना चित्र",
      "pass.cardLabel": "उदाहरण KaushalPass डेमो कार्ड",
      "pass.demo": "डेमो कार्ड",
      "pass.disclaimer": "उदाहरण डेमो कार्ड — सत्यापित पहचान नहीं।",
      "pass.holder": "रमेश कुमार",
      "pass.idLabel": "पास आईडी",
      "pass.location": "जयपुर, राजस्थान",
      "pass.qrAlt": "सजावटी नमूना QR पैटर्न — असली कोड नहीं",
      "pass.qrLabel": "नमूना QR",
      "pass.skill1": "वायरिंग",
      "pass.skill2": "सुरक्षा",
      "pass.summaryLabel1": "कार्य रिकॉर्ड",
      "pass.summaryLabel2": "संभावित कौशल",
      "pass.summaryLabel3": "सीखने का रास्ता",
      "pass.trade": "इलेक्ट्रीशियन",
      "passSection.badge": "उदाहरण नमूना",
      "passSection.bullet1": "कौशल, काम के साक्ष्य और सीखने की प्रगति के लिए एक प्रोफ़ाइल।",
      "passSection.bullet2": "सहमति के साथ नियोक्ताओं या प्रशिक्षकों से साझा करने के लिए सरल QR दृश्य।",
      "passSection.bullet3": "स्पष्ट लेबल जो स्वयं बताए गए काम को सत्यापित साक्ष्य से अलग रखते हैं।",
      "passSection.bullet4": "हिंदी और अंग्रेज़ी में उपलब्ध।",
      "passSection.caption": "केवल डिज़ाइन प्रदर्शन के लिए नमूना प्रोफ़ाइल। किसी असली व्यक्ति या पहचान का प्रतिनिधित्व नहीं।",
      "passSection.cta": "अपना KaushalPass बनाएँ",
      "passSection.cta2": "यह कैसे काम करता है",
      "passSection.desc": "श्रमिक के कौशल, साक्ष्य और सीखने की यात्रा का सरल, साझा करने योग्य दृश्य — जो नियोक्ताओं, प्रशिक्षकों और स्थानों के साथ चल सके।",
      "passSection.eyebrow": "आपका काम, आपकी जेब में",
      "passSection.note": "KaushalPass एक निजी, श्रमिक-नियंत्रित प्रोफ़ाइल है। यह सरकार द्वारा जारी पहचान दस्तावेज़ नहीं है।",
      "passSection.title": "KaushalPass से मिलें",
      "stats.categories": "कौशल श्रेणियाँ",
      "stats.demo": "डेमो डेटा",
      "stats.footnote": "इस डिज़ाइन प्रीव्यू के लिए उदाहरण आँकड़े — वास्तविक प्लेटफ़ॉर्म मेट्रिक्स नहीं।",
      "stats.heading": "प्लेटफ़ॉर्म आँकड़े, उदाहरण डेमो डेटा",
      "stats.modules": "सीखने के मॉड्यूल",
      "stats.records": "कार्य रिकॉर्ड",
      "stats.title": "एक नज़र में KaushalSetu",
      "stats.workers": "कुशल श्रमिक",
      "training.badge": "उदाहरण सीखने के रास्ते",
      "training.course1.cat": "इलेक्ट्रिकल",
      "training.course1.desc": "रोज़ के इलेक्ट्रिकल काम के लिए सुरक्षित आइसोलेशन, वायरिंग और निरीक्षण की आदतें ताज़ा करें।",
      "training.course1.meta": "3 मॉड्यूल · 45 मिनट",
      "training.course1.title": "इलेक्ट्रिकल सुरक्षा की बुनियाद",
      "training.course2.cat": "बढ़ईगीरी",
      "training.course2.desc": "माप, सामग्री चयन और हाथ के औज़ारों के सुरक्षित उपयोग में आत्मविश्वास बढ़ाएँ।",
      "training.course2.meta": "4 मॉड्यूल · 1 घंटा",
      "training.course2.title": "दो बार मापें: बढ़ईगीरी की बुनियाद",
      "training.course3.cat": "सेवा कौशल",
      "training.course3.desc": "साइट और कार्यशाला सेवा के लिए व्यावहारिक संवाद, भरोसा और समस्या-समाधान।",
      "training.course3.meta": "2 मॉड्यूल · 30 मिनट",
      "training.course3.title": "सेवा कर्मियों के लिए ग्राहक देखभाल",
      "training.cta": "सीखने के अपडेट पाएँ",
      "training.eyebrow": "आगे क्या सीखें",
      "training.languages": "हिंदी / अंग्रेज़ी",
      "training.level.all": "सभी स्तर",
      "training.level.beginner": "शुरुआती",
      "training.note": "ये इस डिज़ाइन प्रीव्यू के लिए उदाहरण सीखने के रास्ते हैं। पाठ्यक्रम सूची अभी लाइव नहीं है।",
      "training.preview": "मॉड्यूल देखें",
      "training.subtitle": "व्यक्तिगत सिफ़ारिशें काम के साक्ष्य को व्यावहारिक सीखने के रास्तों से जोड़ेंगी।",
      "training.title": "प्रशिक्षण जो आपके काम के साथ बढ़े"
    }
  };

  var STORAGE_KEY = "kaushalsetu:lang";

  var pageMeta = {
    en: {
      title: "KaushalSetu — Skills, Verified. Opportunities, Created.",
      description: "KaushalSetu is an AI-assisted, evidence-based skill and work identity platform for India's informal and skilled workers. This site is a design prototype.",
      ogTitle: "KaushalSetu — Connecting Skills, Verifying Competencies, Creating Opportunities",
      ogDescription: "An evidence-based skill and work identity platform for India's skilled and informal workers. Front-end concept prototype."
    },
    hi: {
      title: "KaushalSetu — कौशल सत्यापित। अवसर सृजित।",
      description: "KaushalSetu भारत के अनौपचारिक और कुशल श्रमिकों के लिए एक AI-सहायित, साक्ष्य-आधारित कौशल और कार्य-पहचान प्लेटफ़ॉर्म है। यह साइट एक डिज़ाइन प्रोटोटाइप है।",
      ogTitle: "KaushalSetu — कौशल जोड़ना, क्षमताएँ सत्यापित करना, अवसर बनाना",
      ogDescription: "भारत के कुशल और अनौपचारिक श्रमिकों के लिए साक्ष्य-आधारित कौशल और कार्य-पहचान प्लेटफ़ॉर्म। फ्रंट-एंड संकल्पना प्रोटोटाइप।"
    }
  };

  var htmlEl = document.documentElement;
  var siteHeader = document.getElementById("site-header");
  var menuToggle = document.getElementById("menuToggle");
  var mobileNav = document.getElementById("mobileNav");
  var navScrim = document.getElementById("navScrim");
  var langToggles = document.querySelectorAll(".js-lang-toggle");
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".primary-nav .nav-link")
  );
  var navSections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href");
      return id ? document.querySelector(id) : null;
    })
    .filter(Boolean);
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var counterEls = Array.prototype.slice.call(document.querySelectorAll("[data-count]"));

  var filterButtons = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
  var filterCountNum = document.getElementById("filterCountNum");
  var opportunityCards = Array.prototype.slice.call(
    document.querySelectorAll(".opportunity[data-category]")
  );

  var demoDialog = document.getElementById("demoDialog");
  var dialogTitle = document.getElementById("dialogTitle");
  var dialogBody = document.getElementById("dialogBody");
  var dialogClose = document.getElementById("dialogClose");
  var dialogOk = document.getElementById("dialogOk");
  var dialogIconUse = document.getElementById("dialogIconUse");

  var contactForm = document.getElementById("contactForm");
  var formStatus = document.getElementById("formStatus");
  var fieldMap = {
    name: {
      input: document.getElementById("contactName"),
      error: document.getElementById("nameError"),
      key: "form.err.name"
    },
    email: {
      input: document.getElementById("contactEmail"),
      error: document.getElementById("emailError"),
      key: "form.err.email"
    },
    message: {
      input: document.getElementById("contactMessage"),
      error: document.getElementById("messageError"),
      key: "form.err.message"
    }
  };

  var currentLang = "en";
  var activeErrors = {};
  var currentDemo = null;
  var lastTrigger = null;
  var isNavOpen = false;

  var langStatus = document.createElement("p");
  langStatus.className = "sr-only";
  langStatus.id = "langStatus";
  langStatus.setAttribute("role", "status");
  langStatus.setAttribute("aria-live", "polite");
  document.body.appendChild(langStatus);

  function t(key) {
    var dict = translations[currentLang] || translations.en;
    if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    return translations.en[key] || "";
  }

  function getStoredLanguage() {
    try {
      var stored = window.localStorage.getItem(STORAGE_KEY);
      return stored === "hi" || stored === "en" ? stored : "en";
    } catch (err) {
      return "en";
    }
  }

  function persistLanguage(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {
      /* Storage can be unavailable for local files. */
    }
  }

  function setMetaContent(selector, value) {
    var node = document.querySelector(selector);
    if (node) node.setAttribute("content", value);
  }

  function updateMenuLabel() {
    if (!menuToggle) return;
    menuToggle.setAttribute("aria-label", t(isNavOpen ? "nav.closeMenu" : "nav.openMenu"));
  }

  function applyLanguage(lang, announce) {
    if (!translations[lang]) lang = "en";
    currentLang = lang;
    var dict = translations[lang];

    htmlEl.lang = lang;
    htmlEl.setAttribute("data-lang", lang);
    document.title = pageMeta[lang].title;
    setMetaContent('meta[name="description"]', pageMeta[lang].description);
    setMetaContent('meta[property="og:title"]', pageMeta[lang].ogTitle);
    setMetaContent('meta[property="og:description"]', pageMeta[lang].ogDescription);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = dict[key];
      if (typeof value === "string") el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var value = dict[el.getAttribute("data-i18n-aria-label")];
      if (typeof value === "string") el.setAttribute("aria-label", value);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var value = dict[el.getAttribute("data-i18n-placeholder")];
      if (typeof value === "string") el.setAttribute("placeholder", value);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var value = dict[el.getAttribute("data-i18n-alt")];
      if (typeof value === "string") el.setAttribute("alt", value);
    });

    langToggles.forEach(function (btn) {
      btn.querySelectorAll("[data-lang-opt]").forEach(function (opt) {
        opt.classList.toggle("is-active", opt.getAttribute("data-lang-opt") === lang);
      });
    });

    renderActiveErrors();
    if (demoDialog.open && currentDemo) renderDialog();
    updateMenuLabel();
    persistLanguage(lang);

    if (announce) {
      langStatus.textContent = dict["a11y.langChanged"];
    }
  }

  function openNav() {
    if (!mobileNav || !menuToggle) return;
    isNavOpen = true;
    mobileNav.hidden = false;
    navScrim.hidden = false;
    mobileNav.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-open");
    updateMenuLabel();
    var first = mobileNav.querySelector("a[href], button:not([disabled])");
    if (first) first.focus();
  }

  function closeNav(restoreFocus) {
    if (!mobileNav || !menuToggle) return;
    var wasOpen = isNavOpen;
    isNavOpen = false;
    mobileNav.classList.remove("is-open");
    mobileNav.hidden = true;
    navScrim.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
    updateMenuLabel();
    if (restoreFocus && wasOpen) menuToggle.focus();
  }

  function handleDocumentKeydown(event) {
    if (!isNavOpen) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeNav(true);
      return;
    }

    if (event.key !== "Tab") return;
    var items = Array.prototype.slice
      .call(mobileNav.querySelectorAll("a[href], button:not([disabled])"))
      .filter(function (el) {
        return el.offsetParent !== null;
      });
    if (!items.length) return;

    var first = items[0];
    var last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function setupNavigation() {
    if (menuToggle) {
      menuToggle.addEventListener("click", function () {
        if (isNavOpen) closeNav(true);
        else openNav();
      });
    }
    if (navScrim) navScrim.addEventListener("click", function () { closeNav(true); });
    if (mobileNav) {
      mobileNav.addEventListener("click", function (event) {
        var link = event.target.closest ? event.target.closest('a[href^="#"]') : null;
        if (link) closeNav(true);
      });
    }
    document.addEventListener("keydown", handleDocumentKeydown);
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1250 && isNavOpen) closeNav(false);
    });
  }

  var navActiveId = "";

  function setActiveNav(id) {
    if (id === navActiveId) return;
    navActiveId = id;
    document.querySelectorAll(".primary-nav .nav-link, .mobile-link").forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + id;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }

  function updateActiveNav() {
    if (!navSections.length) return;
    var headerHeight = siteHeader ? siteHeader.offsetHeight : 70;
    var threshold = headerHeight + 100;
    var current = navSections[0];

    navSections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= threshold) current = section;
    });

    var viewportBottom = window.scrollY + window.innerHeight;
    if (viewportBottom >= document.documentElement.scrollHeight - 4) {
      current = navSections[navSections.length - 1];
    }
    setActiveNav(current.id);
  }

  var scrollTicking = false;

  function onScrollFrame() {
    scrollTicking = false;
    if (siteHeader) siteHeader.classList.toggle("is-scrolled", window.scrollY > 6);
    updateActiveNav();
  }

  function onScroll() {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(onScrollFrame);
  }

  function setupScrollState() {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScrollFrame();
  }

  function setupReveal() {
    if (!revealEls.length) return;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || reduce) {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  function formatCount(value) {
    if (value >= 1000) {
      var k = Math.round((value / 1000) * 10) / 10;
      return (k % 1 === 0 ? String(k) : k.toFixed(1)) + "K";
    }
    return String(Math.round(value));
  }

  function setCounterFinal(el) {
    var end = Number(el.getAttribute("data-count")) || 0;
    el.textContent = formatCount(end) + (el.getAttribute("data-suffix") || "");
  }

  function animateCounter(el) {
    if (el.getAttribute("data-counted") === "true") return;
    el.setAttribute("data-counted", "true");
    var end = Number(el.getAttribute("data-count")) || 0;
    var suffix = el.getAttribute("data-suffix") || "";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCounterFinal(el);
      return;
    }

    var duration = 1500;
    var start = null;

    function frame(now) {
      if (start === null) start = now;
      var progress = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = formatCount(end * eased) + suffix;
      if (progress < 1) window.requestAnimationFrame(frame);
      else setCounterFinal(el);
    }
    window.requestAnimationFrame(frame);
  }

  function setupCounters() {
    if (!counterEls.length) return;
    if (!("IntersectionObserver" in window)) {
      counterEls.forEach(setCounterFinal);
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counterEls.forEach(function (el) { observer.observe(el); });
  }

  function applyFilter(filter) {
    var shown = 0;
    opportunityCards.forEach(function (card) {
      var categories = (card.getAttribute("data-category") || "").split(/\s+/);
      var visible = filter === "all" || categories.indexOf(filter) !== -1;
      card.classList.toggle("is-hidden", !visible);
      if (visible) {
        shown += 1;
        card.classList.add("is-visible");
      }
    });
    filterButtons.forEach(function (btn) {
      var active = btn.getAttribute("data-filter") === filter;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
    if (filterCountNum) filterCountNum.textContent = String(shown);
  }

  function setupFilters() {
    if (!filterButtons.length) return;
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyFilter(btn.getAttribute("data-filter") || "all");
      });
    });

    var bar = document.querySelector(".filter-bar");
    if (!bar) return;
    bar.addEventListener("keydown", function (event) {
      var keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
      if (keys.indexOf(event.key) === -1) return;
      event.preventDefault();
      var index = filterButtons.indexOf(document.activeElement);
      if (index === -1) index = 0;
      var next = index;
      if (event.key === "ArrowLeft") next = (index - 1 + filterButtons.length) % filterButtons.length;
      if (event.key === "ArrowRight") next = (index + 1) % filterButtons.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = filterButtons.length - 1;
      filterButtons[next].focus();
    });
  }

  function setupLanguageToggles() {
    langToggles.forEach(function (btn) {
      btn.addEventListener("click", function (event) {
        var opt = event.target.closest ? event.target.closest("[data-lang-opt]") : null;
        var next = opt
          ? opt.getAttribute("data-lang-opt")
          : currentLang === "en"
            ? "hi"
            : "en";
        if (next && next !== currentLang) applyLanguage(next, true);
      });
    });
  }

  var demoConfig = {
    login: { icon: "user-plus" },
    register: { icon: "sparkles" },
    pass: { icon: "id-card" },
    module: { icon: "book-open" },
    alerts: { icon: "mail" },
    apply: { icon: "briefcase" },
    privacy: { icon: "lock" },
    terms: { icon: "file-text" },
    accessibility: { icon: "heart" },
    generic: { icon: "info" }
  };

  function renderDialog() {
    var config = demoConfig[currentDemo] || demoConfig.generic;
    var type = demoConfig[currentDemo] ? currentDemo : "generic";
    var dict = translations[currentLang] || translations.en;
    var titleKey = "demo." + type + ".title";
    var bodyKey = "demo." + type + ".body";

    dialogTitle.textContent = dict[titleKey] || translations.en[titleKey] || "";
    dialogBody.textContent = dict[bodyKey] || translations.en[bodyKey] || "";
    if (dialogIconUse) dialogIconUse.setAttribute("href", "#icon-" + config.icon);
  }

  function handleDialogClosed() {
    htmlEl.classList.remove("dialog-open");
    var restore = lastTrigger;
    currentDemo = null;
    lastTrigger = null;
    if (restore && typeof restore.focus === "function") {
      try {
        restore.focus({ preventScroll: true });
      } catch (err) {
        restore.focus();
      }
    }
  }

  function openDemo(type, trigger) {
    if (!demoDialog) return;
    if (isNavOpen) closeNav(false);

    currentDemo = demoConfig[type] ? type : "generic";
    if (trigger && trigger.closest && trigger.closest("#mobileNav")) {
      lastTrigger = menuToggle;
    } else {
      lastTrigger = trigger || null;
    }

    renderDialog();
    htmlEl.classList.add("dialog-open");

    if (typeof demoDialog.showModal === "function") {
      try {
        demoDialog.showModal();
      } catch (err) {
        demoDialog.setAttribute("open", "");
      }
    } else {
      demoDialog.setAttribute("open", "");
    }
  }

  function closeDemo() {
    if (!demoDialog) return;
    if (typeof demoDialog.close === "function" && demoDialog.open) {
      demoDialog.close();
    } else {
      demoDialog.removeAttribute("open");
      handleDialogClosed();
    }
  }

  function setupDialog() {
    if (!demoDialog) return;

    document.querySelectorAll("[data-demo]").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        openDemo(trigger.getAttribute("data-demo"), trigger);
      });
    });

    if (dialogClose) dialogClose.addEventListener("click", closeDemo);
    if (dialogOk) dialogOk.addEventListener("click", closeDemo);

    demoDialog.addEventListener("click", function (event) {
      if (event.target === demoDialog) closeDemo();
    });
    demoDialog.addEventListener("close", handleDialogClosed);
  }

  function setFieldError(name, key) {
    var cfg = fieldMap[name];
    if (!cfg) return;
    activeErrors[name] = key;
    cfg.input.setAttribute("aria-invalid", "true");
    if (cfg.input.closest) cfg.input.closest(".field").classList.add("has-error");
    cfg.error.textContent = t(key) || key;
    cfg.error.hidden = false;
  }

  function clearFieldError(name) {
    var cfg = fieldMap[name];
    if (!cfg) return;
    delete activeErrors[name];
    cfg.input.removeAttribute("aria-invalid");
    if (cfg.input.closest) cfg.input.closest(".field").classList.remove("has-error");
    cfg.error.textContent = "";
    cfg.error.hidden = true;
  }

  function renderActiveErrors() {
    Object.keys(activeErrors).forEach(function (name) {
      var cfg = fieldMap[name];
      if (!cfg) return;
      cfg.error.textContent = t(activeErrors[name]) || activeErrors[name];
      cfg.error.hidden = false;
    });
  }

  function validateForm() {
    var errors = {};
    var name = fieldMap.name.input.value.trim();
    var email = fieldMap.email.input.value.trim();
    var message = fieldMap.message.input.value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (name.length < 2) errors.name = "form.err.name";
    if (!emailPattern.test(email)) errors.email = "form.err.email";
    if (message.length < 10) errors.message = "form.err.message";

    Object.keys(fieldMap).forEach(function (field) {
      if (errors[field]) setFieldError(field, errors[field]);
      else clearFieldError(field);
    });

    return errors;
  }

  function setupForm() {
    if (!contactForm) return;

    Object.keys(fieldMap).forEach(function (name) {
      var cfg = fieldMap[name];
      cfg.input.setAttribute("aria-required", "true");
      cfg.input.addEventListener("input", function () {
        if (activeErrors[name]) clearFieldError(name);
      });
    });

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var errors = validateForm();
      var failed = Object.keys(errors);
      formStatus.hidden = true;

      if (failed.length) {
        fieldMap[failed[0]].input.focus();
        return;
      }

      contactForm.reset();
      Object.keys(fieldMap).forEach(clearFieldError);
      formStatus.hidden = false;
    });
  }

  function init() {
    applyLanguage(getStoredLanguage(), false);
    setupLanguageToggles();
    setupNavigation();
    setupReveal();
    setupCounters();
    setupFilters();
    setupScrollState();
    setupDialog();
    setupForm();
  }

  init();
})();
