<template>
  <h2>{{ title }}</h2>
  <div class="accordion">
    <div class="item" v-for="(faq, index) in faqs" :key="index">
      <div class="button" :id="'button-' + (index + 1)" :aria-expanded="faq.expanded" @click="toggleAccordion(index)">
        <span class="title">{{ faq.question }}</span>
        <hr class="line">
        <p class="date">{{ faq.date }}<Icon class="ico" :name="faq.expanded ? 'line-md:minus' : 'line-md:plus'" /></p>
      </div>
      <div class="content" :class="{ 'expanded': faq.expanded }">
        <slot :name="faq.slotName"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Заголовок для раздела FAQ
    title: {
      type: String,
      default: ""
    },
    // Массив данных о FAQ
    faqsData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      // Инициализация FAQ с раскрытым состоянием, установленным на false
      faqs: this.faqsData.map(faq => ({ ...faq, expanded: false }))
    };
  },
  methods: {
    // Метод для переключения аккордеона для каждого вопроса
    toggleAccordion(index) {
      this.faqs.forEach((faq, i) => {
        if (i === index) {
          faq.expanded = !faq.expanded;
        } else {
          faq.expanded = false;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.accordion {
  .item {
    border: 1px solid #00c3f550;
    margin: 10px 0;
    padding: 5px 40px;
    border-radius: 15px;
    transition: .5s;
    
    &:hover {
      // background-image: radial-gradient(15em circle at 50% 0px,#00c3f580,transparent 60%);
      border: 1px solid #00c3f580;
    }

    &:last-child {
      .content {
        border-bottom: none;
      }
    }
    /* Стилизация кнопки при раскрытии */
    .button[aria-expanded="true"] {
      border-bottom: 1px solid #00c3f550;
    }
  }
  .button {
    position: relative;
    display: flex;
    justify-content: space-between;
    text-align: left;
    width: 100%;
    padding: 10px 0;
    cursor: pointer;

    .line {
      display: none;
    }

    /* Стили при наведении и фокусировке на кнопке */
    .title:hover {
      color: #00c3f5;
    }
    
    .ico {
      color: #fff;
      margin-left: 1em;
    }

    p {
      font-size: 13px;
      color: #00c3f5;
    }
  }

  .content {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.8s ease;
  }

  /* Стилизация раскрытого контента аккордеона */
  .expanded {
    opacity: 1;
    max-height: 40em;
    padding: 1em;
  }
  
  @media screen and (max-width: 650px) {
    .item {
      position: relative;

      .button {
        display: flex;
        flex-direction: column-reverse;

        .line {
          display: block;
          margin: 1em 0;
        }

        .ico {
          position: absolute;
          right: 0;
        }
      }

      .content {
        overflow-y: auto; /* Включает горизонтальный скролл */
      }
    }
  }

  .expanded {
    padding: .5em;
    max-height: 30em;
  }
}
</style>
