<template>
  <div class="container">
    <div class="modal" @click="closeModal">
      <div class="content">
        <span class="close" @click.stop="closeModal">&times;</span>
        <h2>Отправить сообщение</h2>
        <forms @formSubmitted="handleFormSubmitted" />
        <hr class="line">
        <h3>Связаться со мной в мессенджерах или соцсетях:</h3>
        <div class="block">
          <NuxtLink href="https://www.instagram.com/alexandr_gaghen/" target="_blank"><Icon name="bxl:instagram" size="24px" /></NuxtLink>
          <NuxtLink href="https://vk.com/gaghen" target="_blank"><Icon name="bxl:vk" size="24px" /></NuxtLink>
          <NuxtLink href="https://t.me/alexandr_gaghen" target="_blank"><Icon name="bxl:telegram" size="24px" /></NuxtLink>
          <NuxtLink href="viber://add?number=37362013900" target="_blank"><Icon name="basil:viber-outline" size="24px" /></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal(event) {
      // Проверяем, был ли клик на крестике или за пределами контента формы
      if (event.target.classList.contains('modal') || event.target.classList.contains('close')) {
        this.$emit("close");
      }
    },
    handleFormSubmitted(success) {
      this.$emit("formSubmitted", success); // Передаем результат отправки формы на главный компонент
    }
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);

  .content {
    background-color: #0d121c;
    margin: 15% auto;
    padding: 1em;
    border: 1px solid #00c3f550;
    border-radius: 15px;
    max-width: 500px;

    .line {
      margin: 1em 0;
    }

    .block a {
      margin-right: 1.5em;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .close {
    color: #00c3f550;
    float: right;
    font-size: 28px;
    font-weight: bold;

    &:hover,
    &:focus {
      color: #00c3f5;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>
