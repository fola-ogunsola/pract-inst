<template>
  <div class="faq">
    <div class="faq-content">
      <div class="faq-content-item" @click="toggleAnswers()">
        <p class="question">{{ data.question }}</p>
        <button class="arrow-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#6D7A98" d="m16 17.563 6.6-6.6 1.885 1.885L16 21.333l-8.485-8.485L9.4 10.963l6.6 6.6Z"/></svg>
        </button>
      </div>
      <div v-if="showAnswers" class="faq-content-answers">
        <p class="answers">
          {{ data.answer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import IFaq from "./faq";
export default IFaq;
</script>

<style lang="scss" scoped src="./faq.scss"></style>