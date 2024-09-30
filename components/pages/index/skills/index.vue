<template>
  <UXContainer>
    <!-- <h2>.skills <span>(info)</span></h2> -->
    <h2>$ {<span> Навыки </span>}</h2>
    <div class="content">
      <div class="block">
        <h3>Инструменты с которыми работаю</h3>
        <p>Изученные инструменты и навыки помогают мне создавать качественные веб-приложения. Ознакомьтесь с тем, что я могу предложить в сфере разработки веб-технологий.</p>
        <router-link to="/doc/naviki"><UIButton buttonText="Узнать подробнее" /></router-link>
      </div>
      <hr>
      <div class="block ico">
        <Icon name="logos:vue" size="32px" />
        <Icon name="logos:nuxt-icon" size="32px" />
          <Icon name="logos:node-sass" size="32px" />
          <Icon name="logos:pinia" size="32px" />
          <Icon name="logos:javascript" size="32px" />
          <Icon name="logos:typescript-icon" size="32px" />
          <Icon name="devicon:nodejs" size="32px" />
          <Icon name="logos:git-icon" size="32px" />
          <Icon name="logos:adobe-photoshop" size="32px" />
          <Icon name="logos:adobe-illustrator" size="32px" />
          <Icon name="logos:figma" size="32px" />
          <Icon name="logos:bootstrap" size="32px" />
        </div>
      </div>
  </UXContainer>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-around;
  border: 1px solid #00c3f550;
  border-radius: 15px;
  padding: 2em;
  margin: 2em;
  background-image: radial-gradient(15em circle at 84% 0px,#00c3f580,transparent 60%);
  
  .block {
    max-width: 500px;

    p {
      margin-bottom: 1em;
    }
  }
  
  .ico {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
}

@media screen and (max-width: 850px) {
  .content {
    flex-direction: column-reverse;
    background-image: radial-gradient(15em circle at 50% 0px,#00c3f580,transparent 60%);
    
    .block {
      margin: auto;
      
      & a {
        display: flex;
        justify-content: center;
      }
    }

    hr {
      margin: 1em;
    }
  }
}
</style>