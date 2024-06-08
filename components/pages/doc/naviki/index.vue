<template>
  <h1>Навыки</h1>
  <h2>Основные</h2>
  
<BlockAnimator>
  <div class="contant">
    <PagesDocNavikiCartNaviki title="Vue 2 / Vue 3" nameIco="logos:vue">
      <p>
        Умею работать с Vue CLI, компонентами, директивами, такими как  v-if, v-for, v-bind и v-on и др., также имею понимание реактивности и самого построения DOM дерева, понимаю жизненные циклы и композиции компонентов (использую Option API, умею читать Composition API). Умею настраивать и работать с Vue Router, VueX. Понимаю принципы модульности.
      </p>
      <h5>Дополнительно</h5>
      <p>
        Есть опыт работы с vue-i18n. Tailwind знаю бозово, в практике не использовал. Пользуюсь iconify.
      </p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="Nuxt 2 / Nuxt 3" nameIco="logos:nuxt-icon">
      <p>
        Получаю удовольствие работая с данным фреймворком. Люблю за удобство работы с SSR, seo, роутингом (точнее за его "отсутствие" <Icon name="noto:grinning-face-with-sweat" size="24px" />), layouts и скоростью разработки приложений.
      </p>
      <p>Есть опыт работы с прошлой его версией (т.е. 2й).</p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="Sass / Scss" nameIco="logos:node-sass">
      <p>
        Если имеется выбор, всегда выбираю Scss, т.к. включает в себя множество функций, которые делают его мощным инструментом для организации и стилизации кода, весьма удобен и быстр в работе. Также более читабельный в сравнение с обычным css.
      </p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="Pinia" nameIco="logos:pinia">
      <p>
        Имею базовые знания. Умею создавать хранилища и использовать их в приложениях Vue.
      </p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="JavaScript" nameIco="logos:javascript">
      <p>
        Имею базовые знания. Умею читать и понимать что делает тот или иной код. Умею переиспользовать / адаптировать написаный код. Приоритет в изучении отдаю TypeScript.
      </p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="TypeScript" nameIco="logos:typescript-icon">
      <p>
        Имею базовые знания. Умею читать и понимать что делает тот или иной код. Умею переиспользовать / адаптировать написанный код.
      </p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="Node" nameIco="devicon:nodejs">
      <p>
        Ознакомлены с основными концепциями и инструментами, используемыми в среде Node.js.
      </p>
      <p>
        Умею пользоваться пакетным менеджер npm - установка зависимостей, сборка проекта.
      </p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="Git" nameIco="logos:git-icon">
      <p>
        Умею работать с системой контролей версий и их ветками, т.е. умею вести совместную разработку.
      </p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="MySql" nameIco="logos:mysql-icon">
      <p>
        Имею опыт работы с данной БД.
      </p>
    </PagesDocNavikiCartNaviki>
  </div>
</BlockAnimator>

  <h2>Дополнительные</h2>
  
<BlockAnimator>
  <div class="contant">
    <PagesDocNavikiCartNaviki title="Bootstrap" nameIco="logos:bootstrap">
      <p>
        Весьма не однозначные эмоции вызывает данная библеотека, но владею достаточными знаниями для поддержки легаси кода и выполнения необходимых задач. Могу адаптировать существующий код и вносить необходимые изменения для обеспечения совместимости и работоспособности сайтов.
      </p>
      <p>Предпочитаю использовать flex и grid + ***.</p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="Figma" nameIco="logos:figma">
      <p>
        Уверенно верстаю веб-приложения по готовым макетам с использованием инструментов Figma. Могу точно воплощать дизайнерские концепции в код, обеспечивая сохранение внешнего вида и функциональности интерфейса.
      </p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="Photoshop" nameIco="logos:adobe-photoshop">
      <p>
        Умею редактировать изображения, вырезать, обрезать, изменять размер и формат, а также оптимизировать их для веб-проектов. Работаю с различными форматами, такими как webp, чтобы обеспечить оптимальное качество и скорость загрузки изображений.
      </p>
    </PagesDocNavikiCartNaviki>
    <PagesDocNavikiCartNaviki title="Illustrator" nameIco="logos:adobe-illustrator">
      <p>
        Владею навыками работы с векторными изображениями, созданием и редактированием логотипов, иллюстраций и других графических элементов.
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
</style>