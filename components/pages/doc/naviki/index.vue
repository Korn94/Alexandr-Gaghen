<template>
  <h1>Навыки</h1>
  <h2>Основные</h2>
  
<BlockAnimator>
  <div class="contant">
    <PagesDocNavikiCartNaviki title="Vue 2 / Vue 3" nameIco="logos:vue">
      <p>
        Уверенная работа с Vue CLI, компонентами, директивами (v-if, v-for, v-bind, v-on и др.).
      </p>
      <p>
        Понимание реактивности и построения DOM дерева.
      </p>
      <p>
        Знание жизненных циклов компонентов и их композиций (использую Option API, умею читать Composition API).
      </p>
      <p>
        Опыт настройки и работы с Vue Router, VueX.
      </p>
      <p>
        Понимание принципов модульности.
      </p>
      <h5>Дополнительно</h5>
      <p>
        Опыт работы с vue-i18n.
      </p>
      <p>
        Базовые знания Tailwind (в практике не использовал).
      </p>
      <p>
        Пользуюсь iconify.
      </p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="Nuxt 2 / Nuxt 3" nameIco="logos:nuxt-icon">
      <p>
        Получаю удовольствие работая с данным фреймворком благодаря удобству работы с SSR, SEO, роутингом (его "отсутствием"), layouts и скоростью разработки приложений.
      </p>
      <p>Есть опыт работы с прошлой его версией (т.е. 2й).</p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="Sass / Scss" nameIco="logos:node-sass">
      <p>
        Предпочитаю Scss за его функции, удобство и быстроту работы, а также за его лучшую читабельность по сравнению с обычным CSS.
      </p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="Pinia" nameIco="logos:pinia">
      <p>
        Базовые знания: создание хранилищ и использование их в приложениях Vue.
      </p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="JavaScript" nameIco="logos:javascript">
      <p>
        Базовые знания: чтение и понимание кода, переиспользование и адаптация написанного кода. Приоритет в изучении отдаю TypeScript.
      </p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="TypeScript" nameIco="logos:typescript-icon">
      <p>
        Базовые знания: чтение и понимание кода, переиспользование и адаптация написанного кода.
      </p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="Node" nameIco="devicon:nodejs">
      <p>
        Знание основных концепций и инструментов Node.js.
      </p>
      <p>
        Умение пользоваться npm для установки зависимостей и сборки проекта.
      </p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="Git" nameIco="logos:git-icon">
      <p>
        Опыт работы с системой контроля версий и ветками, умение вести совместную разработку.
      </p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="MySql" nameIco="logos:mysql-icon">
      <p>
        Опыт работы с данной БД.
      </p>
    </PagesDocNavikiCartNaviki>
  </div>
</BlockAnimator>

  <h2>Дополнительные</h2>
  
<BlockAnimator>
  <div class="contant">
    <PagesDocNavikiCartNaviki title="React" nameIco="skill-icons:react-dark">
      <p>
        Есть небольшой опыт. В случае необходимости легко освою его глубже. Данный фреймворк мне не понравился в работе и структурировании.
      </p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="Bootstrap" nameIco="logos:bootstrap">
      <p>
        Достаточные знания для поддержки легаси кода и выполнения необходимых задач.
      </p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="Figma" nameIco="logos:figma">
      <p>
        Уверенная верстка веб-приложений по готовым макетам.
      </p>
      <p>
        Точное воплощение дизайнерских концепций в код.
      </p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="Photoshop" nameIco="logos:adobe-photoshop">
      <p>
        Редактирование изображений, обрезка, изменение размера и формата, оптимизация для веб-проектов.
      </p>
      <p>
        Работа с форматами, такими как webp, для обеспечения качества и скорости загрузки.
      </p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="Illustrator" nameIco="logos:adobe-illustrator">
      <p>
        Навыки работы с векторными изображениями: создание и редактирование логотипов, иллюстраций и других графических элементов.
      </p>
    </PagesDocNavikiCartNaviki>
  </div>
</BlockAnimator>
</template>

<style lang="scss" scoped>
.contant {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem 1rem;
  margin: 2em 1em 2em;

  h5 {
    margin: 1em auto;
  }

  p {
    font-size: 14px;
}

  p + p {
    margin-top: 1em;
  }
}

@media screen and (max-width: 840px) {
  .contant {
    display: flex;
    flex-direction: column;
  }
}
</style>