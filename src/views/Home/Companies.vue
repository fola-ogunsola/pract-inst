<template>
  <section class="section">
    <div class="container">
      <h3 class="companies__header">Trusted by companies around the world</h3>
      <div class="companies__grid">
        <div class="companies__grid__item">
          <img src="@/assets/companies/logo-1.png" alt="">
        </div>
        <div class="companies__grid__item">
          <img src="@/assets/companies/logo-2.png" alt="">
        </div>
        <div class="companies__grid__item">
          <img src="@/assets/companies/logo-3.png" alt="">
        </div>
        <div class="companies__grid__item">
          <img src="@/assets/companies/logo-5.png" alt="">
        </div>
        <div class="companies__grid__item">
          <img src="@/assets/companies/logo-6.png" alt="">
        </div>
        <div class="companies__grid__item">
          <img src="@/assets/companies/logo-7.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.companies {
  &__header {
    color: #6D7A98;
    font-size: 1.8rem;
    line-height: 2.4rem;
    font-weight: 400;
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10rem;
    margin-top: 5rem;
    justify-content: space-between;
    img {
      width: 100%;
      height: auto;
    }
    @include mq-up('md') {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2.5rem;
    }
  }
}
</style>