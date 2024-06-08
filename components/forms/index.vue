<template>
  <form @submit.prevent="submitForm">
    <div class="input-group">
      <input type="text" v-model="name" v-on:input="textFilter" required placeholder="Имя">
      <input type="text" v-phone-format id="phone" v-model="phoneNumber" required placeholder="Телефон" />
    </div>
    <div>
      <textarea id="comment" v-model="comment" required placeholder="Комментарий"></textarea>
    </div>
    <UIButton buttonText="Отправить" width="100%" type="submit" />
  </form>
</template>

<script>
import axios from "axios";
import { telegramToken, telegramChatId } from "/config/config.js";

export default {
  data() {
    return {
      name: "",
      phoneNumber: "+7 ",
      comment: "",
    };
  },
  methods: {
    textFilter() {
      // Разделяем строку на слова и преобразуем первую букву каждого слова в верхний регистр
      this.name = this.name.replace(/\d/g, "").split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      // Ограничение количества символов до 40
      if (this.name.length > 40) {
        this.name = this.name.slice(0, 40);
      }
    },
    submitForm() {
      const token = telegramToken;
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      const message = `
        Сообщение с сайта:
        ФИО: ${this.name}
        Номер телефона: ${this.phoneNumber}
        Комментарий: ${this.comment}`;

      axios.post(url, {
        chat_id: telegramChatId,
        text: message,
      })
      .then(() => {
        this.$emit('formSubmitted', true); // Сообщаем об успешной отправке формы
      })
      .catch(() => {
        this.$emit('formSubmitted', false); // Сообщаем о неудачной отправке формы
      });
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  margin: auto;
  padding: 1em 1% 0.5em;

  .input-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    input {
      flex: 1;
      margin-right: 1em;

      &:last-child {
        margin-right: unset;
      }
    }
  }

  input,
  textarea {
    width: 100%;
    padding: 1em;
    margin-bottom: 10px;
    border: 1px solid #00c3f550;
    border-radius: 5px;
    color: #fff;
    background-image: linear-gradient(120deg, #0d121c, #0b2938);
  }

  input:focus,
  textarea:focus {
    outline: none;
    border: 1px solid #00c3f5;
  }

  textarea {
    resize: vertical;
    margin-bottom: 1em;
  }
}
</style>
