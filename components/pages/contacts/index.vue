<template>
<BlockAnimator>
    <div class="container">
      <div class="content">
        <h1>Контакты</h1>
        <h3>Социальные сети</h3>
        <div class="block">
          <NuxtLink href="https://www.instagram.com/alexandr_gaghen/" target="_blank"><Icon name="bxl:instagram" size="24px" /></NuxtLink>
          <NuxtLink href="https://vk.com/gaghen" target="_blank"><Icon name="bxl:vk" size="24px" /></NuxtLink>
          <NuxtLink href="https://t.me/alexandr_gaghen" target="_blank"><Icon name="bxl:telegram" size="24px" /></NuxtLink>
        </div>
        <h3>Почта</h3>
        <div class="block">
          <a href="mailto:alexandrgaghen@gmail.com">alexandrgaghen@gmail.com</a>
        </div>
        <h3>Место проживания</h3>
        <div class="block">
          <p>Приднестровье, г. Рыбница</p>
        </div>
      </div>
    </div>
</BlockAnimator>
<div class="map-container">
  <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9a4897218453928e680e4e6d28a7e14f6a902041de8ae784d2c16ba81f4b73cb&amp;source=constructor" width="100%" height="500" frameborder="0"></iframe>
  <div class="map-overlay"></div>
</div>
</template>

<style lang="scss" scoped>
.container {
  padding: 4em;

  .content {
    margin: auto;
    max-width: 740px;

    a {
      margin-right: 1em;
    }

    .block {
      margin-left: 1em;
    }

    h1 {
      text-align: center;
    }

    h3 {
      margin-top: 1em;
    }
  }
}

.map-container {
  position: relative;
  width: 100%;
  height: 500px;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Полупрозрачный черный цвет */
  pointer-events: none; /* Позволяет взаимодействовать с картой под overlay */
}
</style>