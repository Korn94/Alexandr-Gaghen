<template>
  <div class="container">
    <BlockAnimator>
      <div class="image">
        <img src="/projects/itglav/logo.png" alt="" loading="lazy">
      </div>
      <h1>ItGlav</h1>
      <NuxtLink href="https://glavlider.ru" target="_blank"><UIButton color="grey" buttonText="Перейти на сайт"></UIButton></NuxtLink>
      <!-- <h4>Проектирование и разработка</h4> -->
      <div class="box-img">
        <img src="/projects/itglav/screen-full.png" alt="">
      </div>
      <div class="container__text">
        <!-- <h3>Введение</h3> -->
        <!-- <p>Данный сайт имеет огрехи с точки зрения </p> -->
        <h3>Итоги, которые получились за время работы</h3>
        <p>Новый сайт. В данное время проект стоит на паузе.</p>
        <p>Проект разработан одним человеком</p>
        <h3>Продукт</h3>
        <!-- <p>Изначальная идея была в продаже готовых шаблонов сайтов, </p> -->
        <p>Изначально был лендинг по продаже шаблонов готовых сайтов. Дальше проект перерос в предоставление маркетинговых услуг и веб-разработки. Продажа шаблонов ушла на второй план.</p>
        <h3>Мои задачи в продукте</h3>
        <ul>
          <li>Запуск MVP продукта</li>
          <li>Разработка концепции, дизайна сайта и проектирование веб-приложения</li>
          <li>Форма отправки заявок в Телеграм с привязкой странице и услуге (видно в каком месте сайта была заполнена форма и какая услуга была выбрана)</li>
          <li>Тестирование кросс-браузерной и кросс-платформенной совместимости веб-приложений для обеспечения одинакового пользовательского опыта на различных устройствах и в браузерах</li>
          <li>Оптимизация сайта для поисковых систем (SEO) для увеличения видимости и привлечения целевой аудитории</li>
          <li>Внедрение механизмов аналитики для отслеживания поведения пользователей и оценки эффективности маркетинговых кампаний</li>
          <li>Поддержка и обновление сайта</li>
        </ul>
      </div>
    </BlockAnimator>
    <BlockAnimator>
      <div class="line"></div>
      <div class="container__text">
        <h3>Проблемы, с которыми столкнулся и их решение</h3>
        <UISolution text="Проблема №1" color="red" />
        <p>Проект был без макета, не было понимания, как это вообще должно выглядеть в конечном виде.</p>
        <UISolution text="Решение" color="green" />
        <p>Решение было подобрано </p>
        <hr>
        <UISolution text="Проблема №2" color="red" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, animi esse! Ea doloremque unde est odio repellat libero quod ullam, assumenda officia, veritatis inventore sed fuga! Assumenda corrupti explicabo non?</p>
        <UISolution text="Решение" color="green" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, animi esse! Ea doloremque unde est odio repellat libero quod ullam, assumenda officia, veritatis inventore sed fuga! Assumenda corrupti explicabo non?</p>
        <hr>
        <UISolution text="Проблема №3" color="red" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, animi esse! Ea doloremque unde est odio repellat libero quod ullam, assumenda officia, veritatis inventore sed fuga! Assumenda corrupti explicabo non?</p>
        <UISolution text="Решение" color="green" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, animi esse! Ea doloremque unde est odio repellat libero quod ullam, assumenda officia, veritatis inventore sed fuga! Assumenda corrupti explicabo non?</p>
      </div>
    </BlockAnimator>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 4em;
  text-align: center;
  max-width: 1000px;
  margin: 4em auto auto;

  .box-img {
    background-color: #00c3f520;
    padding: 2em 2em 0;
    border-radius: 12px;
    margin: 2em auto;

    img {
      // margin-bottom: 0em;
      border-radius: 8px;
      max-height: 100%;
      max-width: 100%;
      margin-bottom: -4px;
    }
  }

  h4 {
    text-align: center;
  }

  .image img {
    width: 100px;
  }

  &__text {
    max-width: 600px;
    margin: 4em auto;

    p {
      margin: 1em;
      text-align: left;
    }

    ul {
      margin-left: 1em;

      li {
        text-align: left;
        list-style-type: "— ";
        margin: 1em;
      }
    }
  }
}
</style>