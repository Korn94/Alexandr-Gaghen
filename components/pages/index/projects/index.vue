<template>
  <UXContainer>
    <h2>$ {<span> Последние проекты </span>}</h2>
    <swiper
      :style="{
        '--swiper-pagination-color': '#00c3f5', // Цвет активной точки слайда
        '--swiper-pagination-bullet-inactive-color': 'rgba(0, 195, 245, 0.8)', // Цвет неактивной точки
        '--swiper-navigation-color': '#00c3f5', // Цвет стрелок навигации
        '--swiper-navigation-size': '20px', // Размер стрелок навигации
      }"
      :slides-per-view="2"
      :breakpoints="{
        0: {
          slidesPerView: 1, // Показывать одну карточку при размере экрана менее 850px
        },
        850: {
          slidesPerView: 2, // Показывать две карточки при размере экрана 850px и более
        },
      }"
      :pagination="{
        dynamicBullets: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
      @slideChange="onSlideChange"
    >
      <!-- Перебор проектов и создание слайдов -->
      <swiper-slide v-for="(project, index) in projects" :key="index">
        <!-- Компонент карточки проекта -->
        <PagesIndexProjectsCart
          class="cart"
          :class="{ left: isLeft(index), right: isRight(index) }"
          :title="project.title"
          :role="project.role"
          :img="project.img"
          :link="project.link"
        >
          <!-- Перебор тегов проекта и создание кнопок тегов -->
          <UITeg v-for="(tag, i) in project.tags" :key="i" :buttonText="tag" />
        </PagesIndexProjectsCart>
      </swiper-slide>
    </swiper>
  </UXContainer>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // Данные о проектах
    const projects = ref([
      {
        title: 'Данный сайт',
        role: 'Разработчик и Дизайнер',
        img: '/projects/portfolio/screen.png',
        link: '/portfolio',
        tags: ['Nuxt', 'Scss', 'GitHub'],
      },
      {
        title: 'ItGlav',
        role: 'Проектирование и разработка',
        img: '/projects/itglav/screen.png',
        link: '/itglav',
        tags: ['Nuxt', 'SSR', 'Css', 'Axios'],
      },
      {
        title: 'Nikas-Trans',
        role: 'Frontend-разработчик',
        img: '/projects/nikas-trans/screen.png',
        link: '/nikas-trans',
        tags: ['Nuxt', 'Scss', 'Axios'],
      },
    ]);

    // Текущий индекс слайда
    const currentIndex = ref(0);

    // Обработчик изменения слайда
    const onSlideChange = (swiper) => {
      currentIndex.value = swiper.activeIndex;
    };

    // Проверка, является ли элемент слева
    const isLeft = (index) => {
      const relativeIndex = index - currentIndex.value;
      return relativeIndex === 0 || relativeIndex === 1;
    };

    // Проверка, является ли элемент справа
    const isRight = (index) => {
      const relativeIndex = index - currentIndex.value;
      return relativeIndex === 1 || relativeIndex === 2;
    };

    return {
      modules: [Pagination, Navigation],
      projects,
      currentIndex,
      onSlideChange,
      isLeft,
      isRight,
    };
  },
};
</script>

<style lang="scss" scoped>
.mySwiper {
  width: 100%;
  height: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cart {
    margin: 2em;
    width: 90%;
    max-width: 400px;
    transition: transform 0.5s;

    &:hover {
      background-color: #00c3f540;
    }

    &.left:hover {
      transform: perspective(1200px) translateX(0px) translateY(0px) scale(1)
        rotateX(0deg) rotateY(20deg) translateZ(0px);
    }

    &.right:hover {
      transform: perspective(1200px) translateX(0px) translateY(0px) scale(1)
        rotateX(0deg) rotateY(-20deg) translateZ(0px);
    }
  }
}
</style>
