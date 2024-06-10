<template>
  <div class="container">
    <NuxtLink :to="link">
      <div class="content">
        <div class="title">
          <h3>{{ title }}</h3>
          <Icon class="ico" name="mdi:arrow-right-bold" style="color: #00c3f540" />
        </div>
        <p>{{ role }}</p>
        <br />
        <div class="box-img">
          <img :src="img" alt="" />
        </div>
        <div class="tegs">
          <slot></slot>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    role: String,
    img: String,
    link: String,
  },
};
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid #00c3f550;
  border-radius: 15px;
  margin-right: 15px;
  transition: transform 0.5s, background-color 0.5s;
  cursor: pointer;
  background: -moz-linear-gradient(-45deg, #0d121c 20%, #00c3f520 100%);
  background: -webkit-linear-gradient(-45deg, #0d121c 20%, #00c3f520 100%);
  background: linear-gradient(135deg, #0d121c 20%, #00c3f520 100%);

  &:hover {
    background-color: #00c3f540;
  }

  &:last-child {
    margin-right: 0px;
  }

  .content {
    padding: 1em;

    .tegs,
    .title {
      display: flex;
    }

    .tegs {
      align-items: center;
    }

    .title {
      justify-content: space-between;
    }
  }

  .box-img {
    background-color: #00c3f520;
    padding: 1em 1em 0 1em;
    border-radius: 12px;
    margin-bottom: 1em;

    img {
      margin-bottom: -1em;
      border-radius: 8px;
      max-height: 100%;
      max-width: 100%;
    }
  }
}
</style>
