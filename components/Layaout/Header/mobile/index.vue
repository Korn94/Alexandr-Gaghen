<template>
  <div class="header">
    <div class="navigation">
      <nuxt-link to="/" exact-active-class="active">
        <Icon class="ico" name="heroicons-solid:home" width="24" height="24" />
      </nuxt-link>
      <nuxt-link to="/doc" exact-active-class="active">
        <Icon class="ico" name="solar:documents-bold" width="24" height="24" />
      </nuxt-link>
      <nuxt-link to="/contacts" exact-active-class="active">
        <Icon class="ico" name="heroicons-solid:user" width="24" height="24" />
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #111;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  z-index: 999;

  background-image: radial-gradient(30em circle at 50% 10px, #00c3f515, transparent 80%);

  border-top: 1px solid;
  border-image: linear-gradient(to right, #00c3f505, #00c3f520, #00c3f505);
  border-image-slice: 1;

  .navigation {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 600px;

    .ico {
      transition: transform 0.2s ease;
    }

    .active .ico {
      color: #00c3f5;
    }
  }
}
</style>
