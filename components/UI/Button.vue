<template>
  <!-- Компонент кнопки с динамическими классами и стилями -->
  <button :class="[colorClass]" :style="{ width: width }" @click="handleClick">
    {{ buttonText }} <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    // Текст кнопки, обязательный параметр
    buttonText: {
      type: String,
      required: true,
    },
    // Цвет по умолчанию
    color: {
      type: String,
      default: "blue",
      validator: function (value) {
        return ['blue', 'green', 'grey'].includes(value);
      }
    },
    // Ширина по умолчанию
    width: {
      type: String,
      default: "auto",
    },
  },
  // Определяет класс кнопки в зависимости от выбранного цвета
  computed: {
    colorClass() {
      return this.color === "blue" ? "blue-button" : (this.color === "green" ? "green-button" : "grey-button");
    },
  },
  // Обработчик клика на кнопку, генерирует событие "click"
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
/* Стили для всех кнопок */
button {
  padding: 10px 40px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 500;
  border: 1px solid transparent;
  color: #f1f1f2;

  /* Стили для синей кнопки */
  &.blue-button {
    background: #00c3f520;
    border-color: #00c3f580;
    background-image: radial-gradient(15em circle at 50% 60px,#00c3f550,transparent 40%);
    transition: background-image 0.5s, border-color 0.5s;
    &:hover {
      // transform: perspective(1200px) translateX(0px) translateY(0px) scale(1) rotateX(0deg) rotateY(20deg) translateZ(0px);
      border-color: #00c3f5;
      background-image: radial-gradient(15em circle at 50% 30px,#00c3f550,transparent 50%);
      transition: 0.5s;
      // color: #00c3f5;
    }
  }

  /* Стили для зеленой кнопки */
  &.green-button {
    background: #00a12a20;
    border-color: #00a12a80;
    background-image: radial-gradient(15em circle at 50% 60px,#00a12a50,transparent 40%);
    transition: background-image 0.5s, border-color 0.5s; 
    &:hover {
      border-color: #00a12a;
      background-image: radial-gradient(15em circle at 50% 30px,#00a12a50,transparent 50%);
    }
  }

  /* Стили для серой кнопки */
  &.grey-button {
    background: #0d121c40;
    border-color: #b9b9b950;
    transition: background-image 1s, border-color 0.5s; 
    &:hover {
      border-color: #b9b9b990;
      background-image: radial-gradient(15em circle at 50% 60px,#b9b9b950,transparent 40%);
      transition: 0.5s;
    }
  }
}
</style>
