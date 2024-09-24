<template>
  <LayaoutHeader />
  <LayaoutHeaderNavDoc class="navigation" />
  <div class="container">
    <div class="content"><NuxtPage /></div>
    <LayaoutFooter />
  </div>
</template>
  
  
<style lang="scss" scoped>
.container {
  min-height: 100vh;
  margin-left: 200px;
  background-color: #111827;
  border-left: 1px solid #00c3f550;
  padding: 4em;

  .content {
    margin: auto;
    // border: 1px solid red;
    max-width: 840px;
  }
}

@media screen and (max-width: 840px) {
  .navigation {
    display: none;
  }

  .container {
    border-left: unset;
    min-height: unset;
    margin-left: unset;
    background-color: unset;
    padding: 1em;
  }
}
</style>