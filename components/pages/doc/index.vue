<template>
  <BlockAnimator>
    <div class="content">
      <h1>Содержание</h1>
      <div class="grid">
        <PagesDocButtonCart title="Навыки">
          <p>Здесь я представлю список моих основных навыков в области веб-разработки, включая знание языков программирования, фреймворков и инструментов разработки.</p>
          <router-link to="/doc/naviki">
            <UIButton buttonText="Перейти" width="100%">
              <Icon name="line-md:arrow-small-right" size="16px" style="margin-left: 1em;" />
            </UIButton>
          </router-link>
        </PagesDocButtonCart>
  
        <PagesDocButtonCart title="Для HR и ЛПР">
          <p>В этом разделе я собрал ответы на часто задаваемые вопросы, которые могут быть полезны HR-специалистам и руководителям проектов.</p>
          <!-- <router-link to="/"> -->
            <UIButton buttonText="В разработке..." color="grey" width="100%" />
              <!-- <Icon name="line-md:arrow-small-right" size="16px" style="margin-left: 1em;" /> -->
            <!-- </UIButton> -->
          <!-- </router-link> -->
        </PagesDocButtonCart>
        
        <PagesDocButtonCart title="UI / UX">
          <p>Здесь я представлю некоторые из моих работ по созданию пользовательских интерфейсов.</p>
          <!-- <router-link to="/"> -->
            <UIButton buttonText="В разработке..." color="grey" width="100%" />
              <!-- <Icon name="line-md:arrow-small-right" size="16px" style="margin-left: 1em;" /> -->
            <!-- </UIButton> -->
          <!-- </router-link> -->
        </PagesDocButtonCart>
      </div>
    </div>
  </BlockAnimator>
</template>

<style lang="scss" scoped>
.content {
  button {
    margin: 1em 0 0;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }


  h2 {
    margin-bottom: 1em;
  }

  h3 {
    text-indent: 1em;
  }

  .line {
    margin-bottom: 1em;
  }
}

@media screen and (max-width: 840px) {
  .content .grid {
    display: flex;
    flex-direction: column;
  }
}
</style>
