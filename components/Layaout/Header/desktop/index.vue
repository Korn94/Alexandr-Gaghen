<template>
  <header class="header">
    <div class="logo"><router-link to="/">&#8826; <span>A</span>G &#8827;</router-link></div>
    <nav class="navigation">
      <ul>
        <li :class="{ active: $route.path === '/' }"><NuxtLink to="/"><span>Г</span>лавная</NuxtLink></li>
        <li :class="{ active: $route.path === '/doc' }"><NuxtLink to="/doc"><span>Н</span>авыки</NuxtLink></li>
        <li :class="{ active: $route.path === '/contacts' }"><NuxtLink to="/contacts"><span>К</span>онтакты</NuxtLink></li>
      </ul>
    </nav>
    <div class="theme-switcher">
      <div @click="toggleTheme">
        <Icon :name="darkTheme ? 'meteocons:dust-day-fill' : 'meteocons:clear-night-fill'" size="24px"></Icon>
      </div>
      <div v-if="showDropdown" class="dropdown">
        Извините, пока еще не придумал дизайн для светлой темы.
      </div>
      <hr>
      <div class="social-icons">
        <NuxtLink href="https://www.instagram.com/alexandr_gaghen/" target="_blank"><Icon name="bxl:instagram" size="24px" /></NuxtLink>
        <NuxtLink href="https://vk.com/gaghen" target="_blank"><Icon name="bxl:vk" size="24px" /></NuxtLink>
        <NuxtLink href="https://github.com/Korn94" target="_blank"><Icon name="bxl:github" size="24px" /></NuxtLink>
        <NuxtLink href="https://t.me/alexandr_gaghen" target="_blank"><Icon name="bxl:telegram" size="24px" /></NuxtLink>
      </div>
    </div>
  </header>
</template>

<script>
import "@/assets/styles/index.scss";

export default {
  data() {
    return {
      darkTheme: true, // начальное состояние - темная тема
      showDropdown: false, // состояние для отображения выпадающего окна
    };
  },
    methods: {
    toggleTheme() {
      this.showDropdown = true; // показываем выпадающее окно
      setTimeout(() => {
        this.showDropdown = false; // скрываем выпадающее окно через 3 секунды
      }, 3000);
    },

    // Смена цветовой темы
  // methods: {
  //   toggleTheme() {
  //     this.darkTheme = !this.darkTheme; // изменяем текущую тему при каждом вызове
  //   },
  // },
  // watch: {
  //   darkTheme(newVal) {
  //     // Изменяем переменную CSS в зависимости от текущей темы
  //     document.documentElement.style.setProperty(
  //       "--background",
  //       newVal ? "#0d121c" : "linear-gradient(to right, #4d4f54, #7c8088)"
  //     );
  //   },
  },
};
</script>

<style lang="scss" scoped>
.header {
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .7em 2em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  background-image: radial-gradient(30em circle at 50% 10px, #00c3f515, transparent 80%);

  border-bottom: 1px solid;
  border-image: linear-gradient(to right, #00c3f505, #00c3f520, #00c3f505);
  border-image-slice: 1;

  .logo {
    width: 250px;
    font-weight: bold;

    span {
      color: $blue;
    }
  }

  .navigation {
    .active a {
      color: $blue;
    }

    ul {
      display: flex;

      li {
        margin: 0 1em;
        font-weight: 500;

        span {
          color: $blue;
        }

        ul {
          display: none;
          position: absolute;
        }

        &:hover ul {
          display: block;
        }

        ul li {
          padding: 10px;
        }

        a {
          text-decoration: none;
          padding: 14px 0px;
          position: relative;
        }

        a::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          height: 1px;
          width: 0%;
          background: $blue;
          transition: width 0.3s ease 0s, left 0.3s ease 0s;
        }

        a:hover::after {
          width: 100%;
          left: 3%;
          background: $blue;
        }
      }
    }
  }

  .theme-switcher {
    width: 250px;
    display: flex;
    justify-content: center;
    position: relative;
    cursor: pointer;

    .dropdown {
      position: absolute;
      top: 50px;
      left: 10%;
      transform: translateX(-50%);
      border: 1px solid $blue50;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      &::after {
        content: "";
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent $blue transparent;
      }
    }

    .social-icons {
      a {
        margin-right: 1em;
      }
    }
  }
}

@media screen and (max-width: 850px) {
  .header {
    padding: .7em 1em;

    .logo, .theme-switcher {
      width: 205px;
    }
  }
}
</style>
