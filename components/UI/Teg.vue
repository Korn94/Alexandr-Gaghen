<template>
  <div :style="{ margin: margin }" class="containet">
    <slot></slot>  {{ buttonText }}
  </div>
</template>

<script>
export default {
  props: {
    // Текст кнопки, обязательный параметр
    buttonText: {
      type: String,
      required: true,
    },
        // Значение margin
    margin: {
      type: String,
      default: '1em 1em 0 0' // Значение по умолчанию, если не передано пользователем
    }
  },
};
</script>

<style lang="scss" scoped>
.containet {
  display: flex;
  // justify-content: space-between;

  font-size: 12px;
  padding: 5px 20px;
  border-radius: 5px;
  border: 1px solid transparent;
  border-color: #00c3f550;
  background-color: #0d121c;
}
</style>