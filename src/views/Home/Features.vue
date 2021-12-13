<template>
  <section class="section">
    <div class="container">
      <h3 class="features__header">
        What makes Instrail the best option for managing insurance?
      </h3>
      <div class="features__grid">
        <div class="features__item">
          <span class="features__icon">
            <img src="@/assets/icons/integration.svg" alt="Easy Integration">
          </span>
          <h4>Integration</h4>
          <p>Offers structure to your company’s operations; complete with tools and features to help run the business effectively.</p>
        </div>
        <div class="features__item">
          <span class="features__icon">
            <img src="@/assets/icons/customizable.svg" alt="Customizable">
          </span>
          <h4>Customisation</h4>
          <p>Ensures that it is designed to accommodate your insurance offerings and manage customer relationships better. </p>
        </div>
        <div class="features__item">
          <span class="features__icon">
            <img src="@/assets/icons/automated.svg" alt="Fully Automated">
          </span>
          <h4>Automation</h4>
          <p>Creates a seamless experience for you and your customers. All processes are accounted for within the platform and optimised for efficiency.</p>
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
    max-width: 70rem;
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