<template>
  <aside>
    <nav class="navigation">
        <h5>Введение</h5>
        <ul>
          <li><nuxt-link to="/doc" exact-active-class="active">Содержание</nuxt-link></li>
          <li><nuxt-link to="/doc/naviki" exact-active-class="active">Навыки</nuxt-link></li>
        </ul>
        <h5>Для HR и ЛПР</h5>
        <ul>
          <li><nuxt-link to="/#" exact-active-class="active">Основные FAQ</nuxt-link></li>
        </ul>
        <h5>UX/UI</h5>
        <ul>
          <li><nuxt-link to="/#" exact-active-class="active">UI макеты</nuxt-link></li>
          <li><nuxt-link to="/#" exact-active-class="active">UX</nuxt-link></li>
        </ul>
    </nav>
  </aside>
</template>

  
<style lang="scss" scoped>
.navigation {
  position: fixed;
  margin-top: 4em;
  width: 200px;
  
  h5 {
    text-indent: 5px;
    font-size: 16px;
  }

  ul {
    margin-bottom: 2em;
  }
  
  li {
    margin-bottom: 10px;
    font-size: 14px;
    // margin-left: 10px;
  }

  a {
    display: block;
    margin-top: 0.5em;
    padding: .5em 1em;
    font-weight: 600;
  }

  a:hover {
    color: #00c3f5;
    border-right: 1px solid #00c3f5;
    background-color: #00c4f50a;
  }
  
  .active {
    color: #00c3f5;
    border-right: 2px solid #00c3f5;
    background-color: #00c3f510;
  }
}
</style>
