

const translations = {
  ru: {
    home: "Главная",
    about: "О компании",
    services: "Услуги",
    training: "Обучение",
    documents: "Документы",
    contacts: "Контакты",
    language: "Язык"
  },
  kz: {
    home: "Басты бет",
    about: "Компания туралы",
    services: "Қызметтер",
    training: "Оқыту",
    documents: "Құжаттар",
    contacts: "Байланыс",
    language: "Тіл"
  },
  en: {
    home: "Home",
    about: "About us",
    services: "Services",
    training: "Training",
    documents: "Documents",
    contacts: "Contacts",
    language: "Language"
  }
};

function setLanguage(lang) {
  if (!translations[lang]) return;

  localStorage.setItem("siteLanguage", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("siteLanguage") || "ru";
  setLanguage(savedLanguage);

  document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
    });
  });
});
