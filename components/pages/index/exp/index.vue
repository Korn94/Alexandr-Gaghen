<template>
  <UXContainer>
    <h2>$ {<span> Опыт </span>}</h2>
    <div class="content">
      <UXFaq :faqsData="faqsData">
        <template #faq1>
          <h4>Frontend-разработчик - Vue / Nuxt</h4>
          <p>Технический опыт:</p>
          <ul>
            <li>Умение анализировать код и понимать его функциональность и цели. Есть опыт создания проектов с 0.</li>
            <li>Соблюдение структуры файлов и стиля кода в соответствии с требованиями проекта, а также поддержание его чистоты.</li>
            <li>Опыт работы с массивами данных и их отображением, включая сортировку контента по выбранным тегам.</li>
            <li>Работа с макетами в Figma или аналогичных инструментах, обработка изображений, и использование систем управления задачами, таких как Trello.</li>
            <li>Проектирование компонентов с возможностью многократного использования.</li>
            <li>Создание модальных окон.</li>
            <li>Опыт работы с маршрутизацией Vue-router.</li>
            <li>Разработка форм для отправки данных в Telegram через бота с отображением их источника, т.е. то, с какого место была заполнена форма (опыт работы с Axios).</li>
            <li>Анимация выпадающих списков, анимация переходов, анимация загрузки, бесшовность перехода страницы.</li>
            <li>Опыт миграции проекта с Vue в Nuxt и миграция из версии к версии (с 2й к 3й).</li>
            <li>Настройка индексации страниц для поисковых систем и работа над SEO-оптимизацией.</li>
          </ul>
        </template>
        <template #faq2>
          <h4>Маркетинговая компания - NetFace</h4>
          <p>Штат до 10 человек.</p>
          <p>Если говорить о тех. части работы с сайтами, то:</p>
          <ul>
            <li>Обучился основам.</li>
            <li>Изучал структуру различных проектов, принимал в них участие.</li>
            <li>Вносил правки и исправлял баги.</li>
            <li>Писал, оформлял и верстал страницы с учетом SEO-оптимизации.</li>
            <li>Работал с MySQL (подключал к страницам, работал с самой таблицей и ее контентом).</li>
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
          question: "Фриланс / Обучение",
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