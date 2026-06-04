const languages = {
  uz: {
    title: "⚡ DevForge Battle",
    subtitle: "10 Nazariy va 10 Amaliy Frontend Topshiriqlari",
    theoryTitle: "🧠 Nazariy Test",
    practiceTitle: "🛠 Amaliy Loyihalar",
    checkBtn: "Natijani Tekshirish",
    result: "Natija: 10 ta savoldan {score} tasiga to'g'ri javob berdingiz!",
    theory: [
      {
        id: 1,
        q: "1. JavaScript'da closure (yopiq muhit) nima?",
        o: [
          "Ichki funksiyaning tashqi funksiya o'zgaruvchilariga kirish huquqi",
          "Xotirani tozalash mexanizmi",
          "Faqat massivlarni nusxalash metodi",
          "Asinxron so'rov yuborish usuli",
        ],
        c: 0,
      },
      {
        id: 2,
        q: "2. CSS Grid va Flexbox o'rtasidagi asosiy farq?",
        o: [
          "Flexbox rasmlar uchun, Grid matnlar uchun",
          "Flexbox bir o'lchamli (liniyali), Grid ikki o'lchamli (to'rli) maketlash tizimi",
          "Flexbox faqat mobil qurilmalarda ishlaydi",
          "Hech qanday farqi yo'q",
        ],
        c: 1,
      },
      {
        id: 3,
        q: "3. Semantic HTML elementlaridan foydalanishning asosiy maqsadi nima?",
        o: [
          "Sahifani tezroq yuklash",
          "Dizaynni avtomatik chiroyli qilish",
          "SEO va skrinriderlar (kattalar/qidiruv botlari) uchun kod ma'nosini tushuntirish",
          "Animatsiyalar yaratish",
        ],
        c: 2,
      },
      {
        id: 4,
        q: "4. JS'da '==' va '===' farqi nimada?",
        o: [
          "'==' qiymatni, '===' esa qiymat va ma'lumot turini tekshiradi",
          "Farqi yo'q",
          "'===' tezroq ishlaydi",
          "'==' obyektlarni taqqoslaydi",
        ],
        c: 0,
      },
      {
        id: 5,
        q: "5. DOM (Document Object Model) nima?",
        o: [
          "Ma'lumotlar bazasi turi",
          "HTML hujjatning brauzer tomonidan yaratilgan dasturiy obyekti va strukturasi",
          "CSS animatsiyalar kutubxonasi",
          "JS frameworki",
        ],
        c: 1,
      },
      {
        id: 6,
        q: "6. CSS'da 'box-sizing: border-box' nima vazifani bajaradi?",
        o: [
          "Elementga chegara qo'shadi",
          "Padding va border o'lchamlarini elementning umumiy kengligiga hisoblaydi",
          "Elementni yashiradi",
          "Fon rasmini o'rnatadi",
        ],
        c: 1,
      },
      {
        id: 7,
        q: "7. Event Bubbling nima?",
        o: [
          "Hodisaning eng ichki elementdan boshlab tepaga qarab otilib chiqishi",
          "Hodisaning o'chib qolishi",
          "Sahifaning yangilanishi",
          "Faqat sichqoncha bosilganda ishlaydigan hodisa",
        ],
        c: 0,
      },
      {
        id: 8,
        q: "8. LocalStorage ma'lumotlari qachon o'chib ketadi?",
        o: [
          "Brauzer yopilganda",
          "Kompyuter o'chganda",
          "Faqat dasturchi yoki foydalanuvchi qo'lda tozalaguncha o'chmaydi",
          "1 soatdan keyin",
        ],
        c: 2,
      },
      {
        id: 9,
        q: "9. CSS'da elementni mutloq markazga keltirishning eng qisqa yo'li?",
        o: [
          "display: flex; justify-content: center; align-items: center;",
          "margin: 0 auto;",
          "float: left;",
          "position: absolute;",
        ],
        c: 0,
      },
      {
        id: 10,
        q: "10. Asinxron JavaScript dasturlashda Promise nima?",
        o: [
          "Oddiy massiv turi",
          "Kelajakda bajariladigan yoki rad etiladigan operatsiya natijasini ifodalovchi obyekt",
          "Sikl operatori",
          "CSS selectori",
        ],
        c: 1,
      },
    ],
    projects: [
      {
        id: 1,
        t: "1. Virtual Kassa Dasturi",
        d: "Tarix (history) va foizlarni hisoblaydigan mukammal kalkulyator widgeti.",
      },
      {
        id: 2,
        t: "2. Smart To-Do App",
        d: "LocalStorage bilan bog'langan, filtratsiya tizimiga ega mukammal vazifalar ro'yxati.",
      },
      {
        id: 3,
        t: "3. Universal Countdown Timer",
        d: "Foydalanuvchi vaqt kiritadi, vaqt tugagach vizual effekt ko'rsatadi.",
      },
      {
        id: 4,
        t: "4. Advanced Color Palette Generator",
        d: "Hex kodlarni yaratuvchi va bir dona klik orqali nusxa oluvchi (copy) generator.",
      },
      {
        id: 5,
        t: "5. Responsive Image Slider",
        d: "Avtomatik o'tish rejimi va pastki navigatsiya nuqtalari bo'lgan galereya.",
      },
      {
        id: 6,
        t: "6. Professional Stopwatch",
        d: "Davrlarni (Laps) saqlab boruvchi va millisekundlargacha aniq hisoblovchi sekundomer.",
      },
      {
        id: 7,
        t: "7. Static Currency Converter",
        d: "So'm, USD, EUR va RUB qiymatlarini real vaqtda o'zaro hisoblovchi qulay forma.",
      },
      {
        id: 8,
        t: "8. Animated Accordion Component",
        d: "FAQ (Savol-javob) qismi uchun silliq ochilib yopiluvchi akkordeon tizimi.",
      },
      {
        id: 9,
        t: "9. Live Text & Word Counter",
        d: "Matndagi harf, so'z va bo'shliqlarni kiritish jarayonida hisoblovchi analyzer.",
      },
      {
        id: 10,
        t: "10. Accessible Modal Window",
        d: "Tashqi fonni yoki ESC tugmasini bosganda yopiluvchi premium pop-up modal.",
      },
    ],
  },
  en: {
    title: "⚡ DevForge Battle",
    subtitle: "10 Theoretical and 10 Practical Frontend Challenges",
    theoryTitle: "🧠 Theory Quiz",
    practiceTitle: "🛠 Practical Projects",
    checkBtn: "Check Results",
    result: "Result: You answered {score} out of 10 questions correctly!",
    theory: [
      {
        id: 1,
        q: "1. What is a closure in JavaScript?",
        o: [
          "An inner function having access to the outer function variables",
          "A memory cleanup mechanism",
          "An array cloning method",
          "An asynchronous request method",
        ],
        c: 0,
      },
      {
        id: 2,
        q: "2. What is the main difference between CSS Grid and Flexbox?",
        o: [
          "Flexbox is for images, Grid is for text",
          "Flexbox is one-dimensional, Grid is two-dimensional",
          "Flexbox only works on mobile devices",
          "There is no difference",
        ],
        c: 1,
      },
      {
        id: 3,
        q: "3. What is the main purpose of Semantic HTML?",
        o: [
          "To load pages faster",
          "To style code automatically",
          "To provide meaning to SEO and screen readers",
          "To create web animations",
        ],
        c: 2,
      },
      {
        id: 4,
        q: "4. Difference between '==' and '===' in JS?",
        o: [
          "'==' checks value, '===' checks both value and type",
          "No difference",
          "'===' works faster",
          "'==' compares objects",
        ],
        c: 0,
      },
      {
        id: 5,
        q: "5. What is the DOM (Document Object Model)?",
        o: [
          "A database type",
          "A programming interface and structural representation of HTML by browser",
          "A CSS animation library",
          "A JS framework",
        ],
        c: 1,
      },
      {
        id: 6,
        q: "6. What does 'box-sizing: border-box' do in CSS?",
        o: [
          "Adds borders to elements",
          "Includes padding and border in the element's total width and height",
          "Hides elements",
          "Sets background image scale",
        ],
        c: 1,
      },
      {
        id: 7,
        q: "7. What is Event Bubbling?",
        o: [
          "An event propagating upwards from the innermost element",
          "Event termination",
          "Page refreshing",
          "Mouse click tracking",
        ],
        c: 0,
      },
      {
        id: 8,
        q: "8. When does LocalStorage data expire?",
        o: [
          "When the browser closes",
          "When the PC turns off",
          "Never, until explicitly cleared by dev or user",
          "After 1 hour",
        ],
        c: 2,
      },
      {
        id: 9,
        q: "9. Shortest way to perfectly center an element in CSS?",
        o: [
          "display: flex; justify-content: center; align-items: center;",
          "margin: 0 auto;",
          "float: left;",
          "position: absolute;",
        ],
        c: 0,
      },
      {
        id: 10,
        q: "10. What is a Promise in Asynchronous JavaScript?",
        o: [
          "An array type",
          "An object representing the eventual completion or failure of an async operation",
          "A loop operator",
          "A CSS selector",
        ],
        c: 1,
      },
    ],
    projects: [
      {
        id: 1,
        t: "1. Virtual Cashier App",
        d: "An advanced calculator widget that tracks transaction history and percentages.",
      },
      {
        id: 2,
        t: "2. Smart To-Do App",
        d: "A tasks manager connected to LocalStorage with precise filter mechanics.",
      },
      {
        id: 3,
        t: "3. Universal Countdown Timer",
        d: "User sets a specific duration, triggers micro-visuals upon completion.",
      },
      {
        id: 4,
        t: "4. Advanced Color Palette Generator",
        d: "Generates beautiful hex codes with built-in copy-to-clipboard functionality.",
      },
      {
        id: 5,
        t: "5. Responsive Image Slider",
        d: "A fully functional image carousel featuring auto-play and navigation dots.",
      },
      {
        id: 6,
        t: "6. Professional Stopwatch",
        d: "A sub-millisecond precision stopwatch that logs multiple time laps.",
      },
      {
        id: 7,
        t: "7. Static Currency Converter",
        d: "A reliable layout translating values between UZS, USD, EUR, and RUB instantly.",
      },
      {
        id: 8,
        t: "8. Animated Accordion Component",
        d: "Smooth collapsible dynamic question-answer layout built for web FAQs.",
      },
      {
        id: 9,
        t: "9. Live Text & Word Counter",
        d: "An interactive field checking total characters, words, and spaces simultaneously.",
      },
      {
        id: 10,
        t: "10. Accessible Modal Window",
        d: "A responsive overlay closing smoothly via backdrop click or ESC key trigger.",
      },
    ],
  },
  ru: {
    title: "⚡ DevForge Battle",
    subtitle: "10 Теоретических и 10 Практических Frontend Заданий",
    theoryTitle: "🧠 Теоретический Тест",
    practiceTitle: "🛠 Практические Проекты",
    checkBtn: "Проверить Результат",
    result: "Результат: Вы правильно ответили на {score} из 10 вопросов!",
    theory: [
      {
        id: 1,
        q: "1. Что такое замыкание (closure) в JavaScript?",
        o: [
          "Доступ внутренней функции к переменным внешней функции",
          "Механизм очистки памяти",
          "Метод копирования массивов",
          "Метод отправки запросов",
        ],
        c: 0,
      },
      {
        id: 2,
        q: "2. В чем разница между CSS Grid и Flexbox?",
        o: [
          "Flexbox для картинок, Grid для текста",
          "Flexbox одномерная сетка, Grid двухмерная сетка",
          "Flexbox работает только на мобильных",
          "Нет никакой разницы",
        ],
        c: 1,
      },
      {
        id: 3,
        q: "3. Какова цель Семантического HTML?",
        o: [
          "Ускорить загрузку страниц",
          "Автоматически улучшить дизайн",
          "Предоставить смысловую структуру для SEO и скринридеров",
          "Создавать анимации",
        ],
        c: 2,
      },
      {
        id: 4,
        q: "4. В чем разница между '==' и '===' в JS?",
        o: [
          "'==' проверяет значение, '===' проверяет и значение, и тип данных",
          "Разницы нет",
          "'===' работает быстрее",
          "'==' сравнивает объекты",
        ],
        c: 0,
      },
      {
        id: 5,
        q: "5. Что такое DOM?",
        o: [
          "Тип базы данных",
          "Программный интерфейс и представление структуры HTML браузером",
          "Библиотека CSS анимаций",
          "Фреймворк JS",
        ],
        c: 1,
      },
      {
        id: 6,
        q: "6. Что делает 'box-sizing: border-box' в CSS?",
        o: [
          "Добавляет рамку",
          "Включает внутренние отступы и рамки в общую ширину/высоту элемента",
          "Скрывает элемент",
          "Масштабирует фон",
        ],
        c: 1,
      },
      {
        id: 7,
        q: "7. Что такое Event Bubbling (всплытие событий)?",
        o: [
          "Распространение события от самого внутреннего элемента вверх",
          "Завершение события",
          "Обновление страницы",
          "Клик мыши",
        ],
        c: 0,
      },
      {
        id: 8,
        q: "8. Когда удаляются данные из LocalStorage?",
        o: [
          "При закрытии браузера",
          "При выключении ПК",
          "Никогда, пока не будут очищены вручную разработчиком или пользователем",
          "Через 1 час",
        ],
        c: 2,
      },
      {
        id: 9,
        q: "9. Самый короткий способ центрирования в CSS?",
        o: [
          "display: flex; justify-content: center; align-items: center;",
          "margin: 0 auto;",
          "float: left;",
          "position: absolute;",
        ],
        c: 0,
      },
      {
        id: 10,
        q: "10. Что такое Promise в асинхронном JavaScript?",
        o: [
          "Тип массива",
          "Объект, представляющий результат успешного или неудачного завершения асинхронной операции",
          "Оператор цикла",
          "Селектор CSS",
        ],
        c: 1,
      },
    ],
    projects: [
      {
        id: 1,
        t: "1. Виртуальная Касса",
        d: "Продвинутый калькулятор с историей транзакций и вычислением процентов.",
      },
      {
        id: 2,
        t: "2. Умный To-Do App",
        d: "Менеджер задач, привязанный к LocalStorage, с системой фильтрации.",
      },
      {
        id: 3,
        t: "3. Универсальный Таймер Обратного Отсчета",
        d: "Пользователь задает время, по окончании которого срабатывает визуальный эффект.",
      },
      {
        id: 4,
        t: "4. Генератор Цветовой Палитры",
        d: "Генерирует красивые hex-коды с возможностью копирования в буфер обмена в один клик.",
      },
      {
        id: 5,
        t: "5. Адаптивный Слайдер Картинок",
        d: "Карусель изображений с автопрокруткой и навигационными точками.",
      },
      {
        id: 6,
        t: "6. Профессиональный Секундомер",
        d: "Секундомер высокой точности, фиксирующий круги времени.",
      },
      {
        id: 7,
        t: "7. Статический Конвертер Валют",
        d: "Удобная форма мгновенного пересчета значений между UZS, USD, EUR и RUB.",
      },
      {
        id: 8,
        t: "8. Анимированный Компонент Аккордеон",
        d: "Плавное раскрывающееся меню вопросов и ответов для FAQ.",
      },
      {
        id: 9,
        t: "9. Анализатор Текста в Реальном Времени",
        d: "Счетчик символов, слов и пробелов, работающий прямо при вводе текста.",
      },
      {
        id: 10,
        t: "10. Доступное Модальное Окно",
        d: "Премиальное всплывающее окно, закрывающееся по клику на фон или клавишу ESC.",
      },
    ],
  },
};

let currentLang = "uz";

function renderApp() {
  const data = languages[currentLang];

  document.getElementById("main-title").innerText = data.title;
  document.getElementById("main-subtitle").innerText = data.subtitle;
  document.getElementById("theory-title").innerText = data.theoryTitle;
  document.getElementById("practice-title").innerText = data.practiceTitle;
  document.getElementById("submit-quiz-btn").innerText = data.checkBtn;

  const theoryContainer = document.getElementById("theory-container");
  theoryContainer.innerHTML = "";

  data.theory.forEach((q) => {
    const item = document.createElement("div");
    item.className = "quiz-item";

    let optionsHtml = `<div class="options-list">`;
    q.o.forEach((opt, index) => {
      optionsHtml += `
                <label class="option-item">
                    <input type="radio" name="q-${q.id}" value="${index}">
                    <span>${opt}</span>
                </label>
            `;
    });
    optionsHtml += `</div>`;

    item.innerHTML = `<h3>${q.q}</h3>` + optionsHtml;
    theoryContainer.appendChild(item);
  });

  const practiceContainer = document.getElementById("practice-container");
  practiceContainer.innerHTML = "";

  data.projects.forEach((p) => {
    const item = document.createElement("div");
    item.className = "project-item";
    item.innerHTML = `
            <h3>${p.t}</h3>
            <p>${p.d}</p>
        `;
    practiceContainer.appendChild(item);
  });

  document.getElementById("quiz-result").style.display = "none";
}

function changeLanguage(lang) {
  currentLang = lang;
  document
    .querySelectorAll(".lang-btn")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");
  renderApp();
}

document.getElementById("submit-quiz-btn").addEventListener("click", () => {
  const data = languages[currentLang].theory;
  let score = 0;

  data.forEach((q) => {
    const selected = document.querySelector(`input[name="q-${q.id}"]:checked`);
    if (selected && parseInt(selected.value) === q.c) {
      score++;
    }
  });

  const resultBox = document.getElementById("quiz-result");
  resultBox.style.display = "block";

  if (score >= 7) {
    resultBox.style.background = "#e6f4ea";
    resultBox.style.color = "#137333";
  } else {
    resultBox.style.background = "#fce8e6";
    resultBox.style.color = "#c5221f";
  }

  resultBox.innerText = languages[currentLang].result.replace("{score}", score);
});

document.addEventListener("DOMContentLoaded", renderApp);
