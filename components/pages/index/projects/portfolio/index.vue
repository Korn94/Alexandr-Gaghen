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
        <p class="container__text-title">
          При создании портфолио было сложно определить, какие разделы будут наиболее важными для потенциальных работодателей и как структурировать информацию, чтобы она была понятной и доступной.
        </p>
        <UISolution text="Решение" color="green" />
        <p>
          Текстовая составляеющая моя не сильная сторона, обдумывание и написание текстов у меня всегда занимает какое-то время. Так же было не совсем ясно что именно будет интересно и на что стоит уделить больше внимания.
        </p>
        <hr class="line">
        <UISolution text="Задача №2" color="red" />
        <p class="container__text-title">
          Трудности в создании дизайна, который бы выделялся среди других портфолио и одновременно был профессиональным и соответствовал современным тенденциям веб-дизайна.
        </p>
        <UISolution text="Решение" color="green" />
        <p>
          1
        </p>
        <hr class="line">
        <UISolution text="Проблема №3" color="red" />
        <p class="container__text-title">
          Обдумывание и написание текстов всегда занимало у меня много времени, так как текстовая составляющая не является моей сильной стороной.
        </p>
        <UISolution text="Решение" color="green" />
        <p>
          Я решил использовать простой и ясный язык, избегая сложных конструкций и лишней информации.
        </p>
        <hr class="line">
        <UISolution text="Проблема №3" color="red" />
        <p class="container__text-title">
          Было неясно на какие аспекты стоит уделить больше внимания.
        </p>
        <UISolution text="Решение" color="green" />
        <p>
          1
        </p>
        <hr class="line">
        <UISolution text="Проблема №3" color="red" />
        <p class="container__text-title">
          Хотелось придать дизайну легкость и ненавязчивость, при этом чтобы он выглядел современно и уникально.
        </p>
        <UISolution text="Решение" color="green" />
        <p>
          1.
        </p>
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

  hr {
    margin: 2em 0;
  }

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

  &__text-title {
    font-weight: 500;
  }
}
</style>