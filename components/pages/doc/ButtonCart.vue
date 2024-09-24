<template>
  <div class="container">
    <div class="contant">
        <h3>{{ title }}</h3>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid #00c3f550;
  border-radius: 15px;
  // margin-right: 15px;
  margin: 1em;
  transition: 0.5s, transform 0.5s, background-color 0.5s;
  max-width: 400px;
  background: -moz-linear-gradient(-45deg, #0D121C 20%, #00c3f520 100%);
  background: -webkit-linear-gradient(-45deg, #0D121C 20%, #00c3f520 100%);
  background: linear-gradient(135deg, #0D121C 20%, #00c3f520 100%);

  &:hover {
    border: 1px solid #00c3f5;
  }

  &:last-child {
    margin: auto;
  }

  .contant {
    padding: 1em;
  }
}

@media screen and (max-width: 840px) {
  .container {
    margin: 1em auto;
  }
}
</style>