<template>
  <section class="section">
    <div class="container">
      <h3 class="features__header">
        Some reasons why we are better than others
      </h3>
      <div class="features__grid">
        <div class="features__item">
          <span class="features__icon">
            <img src="@/assets/icons/integration.svg" alt="Easy Integration">
          </span>
          <h4>Easy Integration</h4>
          <p>Lorem ipsum dolor sit amert plerusa consectetur vred adipiscing sit deauteir accumsan nibh turpis treu adipiscing tortor benelit.</p>
        </div>
        <div class="features__item">
          <span class="features__icon">
            <img src="@/assets/icons/customizable.svg" alt="Customizable">
          </span>
          <h4>Customizable</h4>
          <p>Lorem ipsum dolor sit amert plerusa   adipiscing sit deauteir accumsan nibh turpis treu consectetur adipiscing tortor accumsan benelit.</p>
        </div>
        <div class="features__item">
          <span class="features__icon">
            <img src="@/assets/icons/automated.svg" alt="Fully Automated">
          </span>
          <h4>Fully Automated</h4>
          <p>Lorem ipsum dolor sit amert plerusa consectetur vred adipiscing sit deauteir accumsan nibh turpis treu adipiscing tortor benelit.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.features {
  &__header {
    color: #0C377D;
    font-size: 4rem;
    line-height: 5.2rem;
    letter-spacing: 1px;
    max-width: 58rem;
    margin-bottom: 8rem;
    font-family: 'Poppins', serif;
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8rem;
    @include mq-up('md') {
      grid-template-columns: 1fr;
    }
  }
  &__icon {
    background: #F7F9FB;
    width: 7.2rem;
    height: 7.2rem;
    border-radius: 0.8rem;
    display: flex;
    margin-bottom: 2.8rem;
    img {
      height: 3.6rem;
      width: auto;
      margin: auto;
    }
  }
  &__item {
    h4 {
      font-size: 2.8rem;
      line-height: 3.2rem;
      color: #0B2253;
      font-family: 'Poppins', serif;
      margin-bottom: 1.6rem;
      font-weight: 500;
    }
    p {
      color: #474E5E;
      font-weight: 300;
      font-family: 'Karla', serif;
      font-size: 1.8rem;
      line-height: 3.2rem;
      max-width: 34rem;
      @include mq-up('md') {
        max-width: 40rem;
      }
    }
  }
}
</style>