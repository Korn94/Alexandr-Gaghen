<template>
  <UXContainer>
    <!-- <h2>.about<span> (alex)</span></h2> -->
    <h2>$ {<span> Обо мне </span>}</h2>
      <div class="content">
        <div><PagesIndexAboutFoto /></div>
        <hr>
        <div>
          <h3>Краткая информация</h3>
          <p>Работаю Frontend разработчиком, в основном во Vue/Nuxt. <br>В IT сфере с 2021.</p>
          <p>Изначально путь начался с маркетинговой компании, где, в том числе, получил базовые знания в веб-разработке, а так же понял основные принципы коммерческой разработки. Не стою на месте, постоянно изучаю новые технологии, методы, инструменты и оттачиваю имеющиеся навыки.</p>
          <p>Cтремлюсь делать сложное простым и понятным, а также оставлять после себя четкий и понятный код для комфортной работы коллег и последующего обслуживания проектов.</p>
          <div class="flex">
            <UITeg buttonText="# 30 лет" />
            <UITeg buttonText="# Общий опыт 3 года" />
            <UITeg buttonText="# Командный игрок" />
            <UITeg buttonText="# Саморганизовован " />
            <UITeg buttonText="# Самостоятелен" />
            <UITeg buttonText="# Слушаю и слышу" />
          </div>
        </div>
      </div>
  </UXContainer>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #00c3f550;
  border-radius: 15px;
  padding: 2em;
  margin: 2em;
  // background-color: #0f1622;

  hr {
    height: 300px;
  }

  p {
    max-width: 600px;
    text-align: left;
  }

  p + p {
    margin-top: 1em;
  }
}

.flex {
  display: flex;
  flex-wrap: wrap;

  .UITeg {
    margin: 0 1em;
  }

  .ico {
    margin-right: .5em;
  }
}

@media screen and (max-width: 850px) {
  .content {
    flex-direction: column;

    hr {
      width: 90%;  // Обеспечение горизонтальной ширины
      height: 1px;  // Уменьшение высоты для горизонтального состояния
      margin: 1em 0;  // Добавление вертикальных отступов для эстетики
    }
  }
}
</style>