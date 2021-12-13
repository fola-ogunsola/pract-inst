<template>
<div class="scale section">
  <section class="container scale__container">
    <div class="scale__text">
      <h3>Instrail is here to help you gain control.</h3>
      <p>
        Instrail is a one-stop shop for insurance management. It offers features for every thing your business needs to run efficiently.
<br><br>
From customer relations to claims management, Instrails makes execution easy for insurance companies around the world. By helping business fasttrack performance, we bring efficiency to  the workflow.
<br><br>

Think of it as an operations caretaker; a platform put in charge of taking care of business so you can focus on more important stuff.

      </p>
    </div>
  </section>
  <div class="scale__media">
    <img src="../../assets/images/scale.png" alt="">
  </div>
</div>
</template>

<style lang="scss" scoped>
.scale {
  position: relative;
  overflow: hidden;
  &__container {
    display: grid;
    grid-template-columns: 50rem 1fr;
    grid-gap: 10rem;
    overflow: hidden;
    position: relative;
    padding-bottom: 12rem !important;
    @include mq-up('lg') {
      display: block;
      margin: 0 auto;
    }
  }
  &__text {

    h3 {
      color: #1E3A8A;
      font-size: 3.4rem;
      line-height: 4.4rem;
      letter-spacing: 0.02em;
      font-weight: 600;
      font-family: 'Poppins', serif;
      @include mq-up('md') {
        font-size: 2.8rem;
      }
      &::after {
        background: #00DDC0;
        border-radius: 2px;
        content: '';
        width: 8.8rem;
        height: 0.8rem;
        display: block;
        margin-top: 2rem;
        margin-bottom: 3rem;
      }
    }
    p {
      color: #222222;
      font-size: 1.8rem;
      line-height: 2.8rem;
    }
  }
  &__media {
    width: 80rem;
    height: 54rem;
    overflow: hidden;
    padding: 6.3rem  0 0 5.8rem;
    // box-shadow: 0 6px 18px rgba(14, 52, 126, 0.22);
    background: $blue;
    border-radius: 2rem;
    position: absolute;
    top: 10rem;
    right: -12rem;

    @include mq-up('lg') {
      display: none;
    }

    @media screen and (min-width: 1081px) and (max-width: 1181px) {
      max-width: 95%;
      right: -23vw;
    }
  }
}
</style>