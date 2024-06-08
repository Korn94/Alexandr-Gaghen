<template>
  <div class="block">
    <PagesIndexMainAnimationGlow />

    <div class="block__img-box">
      <img src="~/assets/ico/mountain.webp" alt="Главное изображение">
    </div>
    
    <div class="block__content">
      <p class="block__title-text">Frontend <br>VUE / Nuxt <span>Developer</span></p>
      <p class="block__slogan-text"><span>Персональное портфолио, Web Разработчик -</span> Александр Гаген</p>
      <UIButton width="220px" buttonText="Скачать CV (PDF)" color="grey" @click="downloadFile"><img class="ico" src="/assets/svg/download.svg" alt=""></UIButton>
      <UIButton width="220px" buttonText="Связаться со мной" @click="openModal"></UIButton>
      <ModalsContactForm v-if="showModal" @close="closeModal" @formSubmitted="handleFormSubmitted" />
      <img class="block__arrow" src="/assets/svg/arrow.svg" alt="">
      <div v-if="notification" :class="['notification', notification.type]">
        <Icon
          class="ico"
          :style="{ color: notification.type === 'success' ? 'greenyellow' : 'red' }"
          :name="notification.type === 'success' ? 'mdi:success-bold' : 'mdi:close-thick'"
        />
        {{ notification.message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      notification: null, // Добавляем состояние для уведомления
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    handleFormSubmitted(success) {
      this.showModal = false; // Закрываем модальное окно
      if (success) {
        this.notification = {
          type: "success",
          // title: "Спасибо!",
          message: "Ваше cообщение успешно отправлено",
        };
      } else {
        this.notification = {
          type: "error",
          // title: "Упс...",
          message: "Произошла ошибка при отправке сообщения",
        };
      }

      // Очищаем уведомление через 5 секунд
      setTimeout(() => {
        this.notification = null;
      }, 5000);
    },
    downloadFile() {
      const fileUrl = '/alexandr-gaghen.pdf'; // URL файла, который вы хотите скачать
      const fileName = 'alexandr-gaghen.pdf'; // Имя файла, под которым он будет сохранен

      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<style scoped lang="scss">
.block {
  height: 100vh;
  text-align: center;
  margin-bottom: 4em;
  z-index: 2;

  &__content {
    position: relative;
    padding-top: 14rem;
    max-width: 1400px;
    margin: auto;
    text-align: center;
    z-index: 1;
  }

  &__img-box {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 100%;
    height: auto;

    img {
      width: auto;
      height: auto;
    }
  }

  &__title-text {
    background-image: linear-gradient(120deg, #00c3f5, #71e0fa);
    -webkit-background-clip: text; /* Для поддержки веб-браузерами на основе Webkit */
    background-clip: text;
    color: transparent; /* Скрывает фактический цвет текста */
    font-size: 3em;
    font-weight: 700;
    text-transform: uppercase;
    font-family: "Roboto", sans-serif;
  }

  &__slogan-text {
    color: #00c3f5;
    margin: 1em;
    line-height: 1.75rem;
    letter-spacing: 0.15em;
  }

  &__buttons-wrapper {
    display: flex;
    justify-content: center;
  }

  &__arrow {
    position: absolute;
  }

  .ico {
    margin-left: 0.5em;
    width: 14px;
  }
}

.notification {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  backdrop-filter: blur(5px);

  .ico {
    width: 20px;
    height: 20px;
    margin: -4px 10px 0 0;
  }
}

.notification.success {
  background-color: #00A12A20;
  border: 1px solid $green;
}

.notification.error {
  background-color: #A6130020;
  border: 1px solid $red;
}

@media screen and (max-width: 840px) {
.block {
  &__content {
    padding-top: 12rem;
  }

  &__title-text {
    font-size: 2em;
  }
  
  &__img-box {
    left: unset;
    transform: unset;
    bottom: 35px;
      
      img {
        width: 100%;
        height: 100%;
      }
    }
  } 
}

@media screen and (max-width: 495px) {
  .block__content button + button {
    margin-top: 1em;
  }
}
</style>
