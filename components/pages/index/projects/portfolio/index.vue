<template>
  <div class="container">
    <BlockAnimator>
      <div class="image">
        <img src="/projects/portfolio/logo.png" alt="" loading="lazy">
      </div>
      <h1>Сайт-портфолио</h1>
      <NuxtLink href="https://github.com/Korn94" target="_blank"><Icon name="bxl:github" size="32px" /> - исходный код</NuxtLink>
      <div class="box-img">
        <img src="/projects/portfolio/screen-full.png" alt="" loading="lazy">
      </div>
      <div class="container__text">
        <h3>Итоги, которые получились за время работы</h3>
        <p>Сайт-портфолио представляет собой место, где я демонстрирую свои навыки и проекты в области фронтенд-разработки, основанные на Vue и Nuxt. В процессе создания сайта я столкнулся с несколькими вызовами, но смог найти эффективные решения, на мой взгляд, чтобы обеспечить его успешное завершение.</p>
        <h3>Продукт</h3>
        <p>Получился уникальный дизайн, который отражает часть моих навыков и стиль.</p>
        <h3>Мои задачи для продукта</h3>
        <ul>
          <li>Создать раздел, в котором будет подробно описаны мои навыки. Это позволит предоставить более детальное описание моих умений и опыта по сравнению с резюме.</li>
          <li>Создать раздел, в котором я смогу показать на практике свои навыки вёрстки, структуру файлов проектов и стиль написания кода, что позволит продемонстрировать мои умения в этих областях более наглядно.</li>
          <li>Организовать место для демонстрации готовых проектов, а также для сбора интересных проектов, в которых я участвовал.</li>
        </ul>
      </div>
    </BlockAnimator>
    <BlockAnimator>
      <div class="line"></div>
      <div class="container__text">
        <h3>Проблемы и задачи, с которыми столкнулся и их решение</h3>
        <UISolution text="Задача №1" color="red" />
        <p>Проект был без макета, не было понимания, как это вообще должно выглядеть в конечном виде.</p>
        <UISolution text="Решение" color="green" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, animi esse! Ea doloremque unde est odio repellat libero quod ullam, assumenda officia, veritatis inventore sed fuga! Assumenda corrupti explicabo non?</p>
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