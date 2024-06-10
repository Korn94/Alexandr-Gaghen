<template>
  <h2>{{ title }}</h2>
  <div class="accordion">
    <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
      <div class="accordion-button" :id="'accordion-button-' + (index + 1)" :aria-expanded="faq.expanded" @click="toggleAccordion(index)">
        <span class="accordion-title">{{ faq.question }}</span><span>{{ faq.date }}<Icon class="ico" :name="faq.expanded ? 'line-md:minus' : 'line-md:plus'" /></span>
      </div>
      <div class="accordion-content" :class="{ 'expanded': faq.expanded }">
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
  .accordion-item {
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
      .accordion-content {
        border-bottom: none;
      }
    }
    /* Стилизация кнопки при раскрытии */
    .accordion-button[aria-expanded="true"] {
      border-bottom: 1px solid #00c3f550;
    }
  }
  .accordion-button {
    position: relative;
    display: flex;
    justify-content: space-between;
    text-align: left;
    width: 100%;
    padding: 10px 0;
    cursor: pointer;

    /* Стили при наведении и фокусировке на кнопке */


    .accordion-title:hover {
      color: #00c3f5;
    }
    
    .ico {
      color: #00c3f5;
      margin-left: 1em;
    }
  }

  .accordion-content {
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
}
</style>
