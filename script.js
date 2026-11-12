
const translations = {
  ru: {
    home:"Главная",about:"О компании",services:"Услуги",training:"Обучение",
    documents:"Документы",contacts:"Контакты",welcome:"Добро пожаловать в UNOBTAINIUM",
    heroTitle:"Надёжность. Качество. Профессионализм.",
    heroText:"Информация о компании, направлениях деятельности и возможностях сотрудничества.",
    learnMore:"Узнать о компании",aboutTitle:"О компании",
    aboutText:"UNOBTAINIUM — компания, представленная в Казахстане. На сайте собрана основная информация о компании и её направлениях деятельности.",
    directionsTitle:"Наши разделы",servicesText:"Информация о направлениях деятельности.",
    trainingText:"Информация об обучении и подготовке.",
    documentsText:"Информация о документах компании.",
    contactTitle:"Свяжитесь с нами",contactText:"Будем рады ответить на ваши вопросы.",
    contactButton:"Контакты",rights:"Все права защищены."
  },
  kz: {
    home:"Басты бет",about:"Компания туралы",services:"Қызметтер",training:"Оқыту",
    documents:"Құжаттар",contacts:"Байланыс",welcome:"UNOBTAINIUM компаниясына қош келдіңіз",
    heroTitle:"Сенімділік. Сапа. Кәсібилік.",
    heroText:"Компания, қызмет бағыттары және ынтымақтастық мүмкіндіктері туралы ақпарат.",
    learnMore:"Компания туралы білу",aboutTitle:"Компания туралы",
    aboutText:"UNOBTAINIUM — Қазақстанда ұсынылған компания. Сайтта компания және оның қызмет бағыттары туралы негізгі ақпарат берілген.",
    directionsTitle:"Біздің бөлімдер",servicesText:"Қызмет бағыттары туралы ақпарат.",
    trainingText:"Оқыту және дайындық туралы ақпарат.",
    documentsText:"Компания құжаттары туралы ақпарат.",
    contactTitle:"Бізбен байланысыңыз",contactText:"Сұрақтарыңызға жауап беруге қуаныштымыз.",
    contactButton:"Байланыс",rights:"Барлық құқықтар қорғалған."
  },
  en: {
    home:"Home",about:"About us",services:"Services",training:"Training",
    documents:"Documents",contacts:"Contacts",welcome:"Welcome to UNOBTAINIUM",
    heroTitle:"Reliability. Quality. Professionalism.",
    heroText:"Information about the company, its activities and cooperation opportunities.",
    learnMore:"Learn about us",aboutTitle:"About the company",
    aboutText:"UNOBTAINIUM is a company represented in Kazakhstan. This website provides basic information about the company and its activities.",
    directionsTitle:"Our sections",servicesText:"Information about our areas of activity.",
    trainingText:"Information about training and preparation.",
    documentsText:"Information about company documents.",
    contactTitle:"Contact us",contactText:"We will be happy to answer your questions.",
    contactButton:"Contacts",rights:"All rights reserved."
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
  document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  setLanguage(localStorage.getItem("siteLanguage") || "ru");

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
