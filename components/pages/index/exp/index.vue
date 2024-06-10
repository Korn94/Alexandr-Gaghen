<template>
  <UXContainer>
    <h2>$ {<span> Опыт </span>}</h2>
    <div class="content">
      <UXFaq :faqsData="faqsData">
        <template #faq1>
          <h3>Frontend-разработчик - Vue / Nuxt</h3>
          <h4>Основные обязанности и достижения:</h4>
          <ul>
            <li>Анализ кода и понимание его функциональности и целей, создание проектов с нуля.</li>
            <li>Поддержание структуры файлов и стиля кода в соответствии с требованиями проекта, обеспечение чистоты кода.</li>
            <li>Работа с массивами данных и их отображением, включая сортировку контента по выбранным тегам.</li>
            <li>Проектирование и создание компонентов с возможностью многократного использования.</li>
            <li>Разработка модальных окон и других пользовательских интерфейсов.</li>
            <li>Настройка и работа с маршрутизацией (Vue Router).</li>
            <li>Разработка форм для отправки данных в Telegram через бота с использованием Axios, включая отображение источника формы.</li>
            <li>Создание анимаций (выпадающие списки, переходы, загрузки), обеспечение плавности переходов между страницами.</li>
            <li>Миграция проектов с Vue на Nuxt, а также между версиями (с версии 2 на версию 3).</li>
            <li>Настройка индексации страниц для поисковых систем и работа над SEO-оптимизацией.</li>
            <li>Работа с макетами в Figma и аналогичных инструментах, обработка изображений.</li>
            <li>Использование систем управления задачами, таких как Trello.</li>
          </ul>
          <!-- <br>
          <h4>Технический опыт:</h4>
          <ul>
            <li>Vue 2 / Vue 3: компоненты, директивы, реактивность, жизненные циклы компонентов, Vue Router, VueX, SSR, SEO, layouts.</li>
            <li>Sass / Less: стилизация и организация кода.</li>
            <li>Pinia: создание и использование хранилищ.</li>
            <li>JavaScript и TypeScript: чтение и адаптация кода, написание простого кода.</li>
            <li>Node.js: установка зависимостей и сборка проектов через npm.</li>
            <li>Git: контроль версий и работа с ветками.</li>
            <li>MySQL: работа с базами данных.</li>
            <li>Дополнительные инструменты: vue-i18n, iconify, Tailwind CSS (базовые знания), Figma, Photoshop, Illustrator, Trello.</li>
          </ul> -->
        </template>
        <template #faq2>
          <h4>Маркетинговая компания - NetFace</h4>
          <p>Работа в компании с численностью до 10 человек.</p>
          <h4>Основные обязанности и достижения в веб-разработке:</h4>
          <ul>
            <li>Обучился основам.</li>
            <li>Изучал структуру различных проектов, принимал в них участие.</li>
            <li>Вносил правки и исправлял баги.</li>
            <li>Писал, оформлял и верстал страницы с учетом SEO-оптимизации.</li>
            <li>Работа с базой данных MySQL: подключение к страницам, работа с таблицами и их содержимым.</li>
          </ul>
          <h4>Технический опыт:</h4>
          <ul>
            <li>HTML, CSS, JavaScript: базовые знания и применение в проектах.</li>
            <li>SEO: оптимизация страниц для поисковых систем.</li>
            <li>MySQL: подключение баз данных, работа с таблицами.</li>
            <li>Работа с макетами и дизайнами, адаптация их под требования проекта.</li>
            <li>Базовые навыки работы с системами управления версиями (Git).</li>
          </ul>
        </template>
      </UXFaq>
      
      <p class="endh">Общий опыт в сфере IT: <span>{{ years }} года {{ months }} месяцев</span></p>
      <p class="endh">Vue / Nuxt: <span>1 год +</span></p>
    </div>
  </UXContainer>
</template>

<script>
export default {
  data() {
    return {
      faqTitle: "",
      faqsData: [
        {
          question: "Фриланс / Обучение на практике",
          date: "Апр. 2022 - по н/в",
          slotName: 'faq1'
        },
        {
          question: "Маркетолог / Фронтенд разработчик",
          date: "Июнь 2021 - Февр. 2022",
          slotName: 'faq2'
        },
      ],
      startDate: new Date("2021-06-01"), // Начальная дата
      currentDate: new Date(), // Текущая дата
      years: 0,
      months: 0,
    };
  },
  mounted() {
    this.calculateExperience();
  },
  methods: {
    calculateExperience() {
      const diffInMonths =
        (this.currentDate.getFullYear() - this.startDate.getFullYear()) * 12 +
        this.currentDate.getMonth() -
        this.startDate.getMonth();
      this.years = Math.floor(diffInMonths / 12);
      this.months = diffInMonths % 12;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin: 2em;

  h4 {
    margin-top: 1em;
  }

  ul {
    margin: 1em 0 0 1em;
    list-style-type: disc;

    li {
      margin-top: 10px;
      // text-indent: 5px;
    }
  }
}
</style>