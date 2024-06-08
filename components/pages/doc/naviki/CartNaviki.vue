<template>
  <div class="container">
    <div class="contant">
      <div class="flex">
        <Icon :name=nameIco size="24px" />
        <h3> {{ title }}</h3>
      </div>
      <hr class="line">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    nameIco: String,
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 400px;
  padding: 1em;
  border: 1px solid #00c3f550;
  border-radius: 15px;
  transition: 0.5s;
  background: -moz-linear-gradient(-45deg, #0D121C 20%, #00c3f520 100%);
  background: -webkit-linear-gradient(-45deg, #0D121C 20%, #00c3f520 100%);
  background: linear-gradient(135deg, #0D121C 20%, #00c3f520 100%);
  
  &:hover {
    border: 1px solid #00c3f5;
  }
  
  .flex {
    display: flex;
    
    h3 {
      margin-left: 1em;
    }
  }

  .line {
    margin-bottom: 1em;
  }
}
</style>