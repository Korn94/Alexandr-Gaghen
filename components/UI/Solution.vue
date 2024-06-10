<!-- Используется на страницах проектов, вскоре переедет туда, если больше нигде не будет использоваться - components\pages\index\projects -->
<template>
  <div :class="colorClass">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    // Текст кнопки, обязательный параметр
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "red",
      validator: function (value) {
        return ["red", "green"].includes(value);
      },
    },
  },
  computed: {
    colorClass() {
      return this.color === "red" ? "red" : "green";
    },
  },
};
</script>

<style lang="scss" scoped>
// p {
//   padding: 1em;
//   text-align: left;
// }

.red, .green {
  display: flex;
  margin: 1em;
  
  p {
    font-size: .8em;
    border-radius: 15px;
    padding: 5px 1em;
    text-align: left;
  }
}

.red p {
  background-color: $red;
}

.green p {
  background-color: $green;
}
</style>