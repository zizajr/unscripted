const fs = require('fs');

const en = JSON.parse(fs.readFileSync('src/i18n/dictionaries/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('src/i18n/dictionaries/fr.json', 'utf8'));
const ar = JSON.parse(fs.readFileSync('src/i18n/dictionaries/ar.json', 'utf8'));

const contactEN = {
  title1: "Let's Build",
  title2: "Something.",
  nameLabel: "NAME *",
  emailLabel: "EMAIL *",
  companyLabel: "COMPANY",
  budgetLabel: "BUDGET *",
  selectBudget: "Select a budget range…",
  heardLabel: "HOW DID YOU HEAR ABOUT US?",
  selectHeard: "Select an option… (optional)",
  messageLabel: "MESSAGE * (20 - 2,000 characters)",
  messagePlaceholder: "Tell us about your project…",
  sendBtn: "Send Message",
  sendingBtn: "Sending…",
  successTitle: "Message received.",
  successSub: "We'll be in touch soon.",
  errorFallback: "Something went wrong. Please email us directly at defy@theunscripted.xyz"
};

const contactFR = {
  title1: "Construisons",
  title2: "Quelque chose.",
  nameLabel: "NOM *",
  emailLabel: "E-MAIL *",
  companyLabel: "ENTREPRISE",
  budgetLabel: "BUDGET *",
  selectBudget: "Sélectionnez un budget…",
  heardLabel: "COMMENT NOUS AVEZ-VOUS CONNU ?",
  selectHeard: "Sélectionnez une option… (facultatif)",
  messageLabel: "MESSAGE * (20 - 2 000 caractères)",
  messagePlaceholder: "Parlez-nous de votre projet…",
  sendBtn: "Envoyer le message",
  sendingBtn: "Envoi en cours…",
  successTitle: "Message reçu.",
  successSub: "Nous vous contacterons bientôt.",
  errorFallback: "Une erreur s'est produite. Veuillez nous envoyer un e-mail directement à defy@theunscripted.xyz"
};

const contactAR = {
  title1: "لنبنِ",
  title2: "شيئاً.",
  nameLabel: "الاسم *",
  emailLabel: "البريد الإلكتروني *",
  companyLabel: "الشركة",
  budgetLabel: "الميزانية *",
  selectBudget: "حدد نطاق الميزانية…",
  heardLabel: "كيف سمعت عنا؟",
  selectHeard: "حدد خياراً… (اختياري)",
  messageLabel: "الرسالة * (20 - 2000 حرف)",
  messagePlaceholder: "أخبرنا عن مشروعك…",
  sendBtn: "إرسال الرسالة",
  sendingBtn: "جارٍ الإرسال…",
  successTitle: "تم استلام الرسالة.",
  successSub: "سنتواصل معك قريباً.",
  errorFallback: "حدث خطأ ما. يرجى مراسلتنا مباشرة على defy@theunscripted.xyz"
};

en.contact = contactEN;
fr.contact = contactFR;
ar.contact = contactAR;

fs.writeFileSync('src/i18n/dictionaries/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('src/i18n/dictionaries/fr.json', JSON.stringify(fr, null, 2));
fs.writeFileSync('src/i18n/dictionaries/ar.json', JSON.stringify(ar, null, 2));

console.log("Dictionaries updated with Contact section.");
