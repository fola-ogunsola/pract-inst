<template>
<section class="control section">
  <div class="container control__container">
    <div class="control__media">
      <img src="@/assets/control.png" alt="Conrol">
    </div>
    <div class="control__text">
      <h4>
        Take full control of your insurance business
      </h4>
      <ul class="control__list">
        <li class="control__list__item" v-for="n in 4" :key="n">
          <div>
            <h5>Flexible Integration</h5>
            <p>Accusantium des doloremque totam rem eaque ipsa quae ab illo inventore veritatis quasi architecto beatae explicabo que totam.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>
</template>

<style lang="scss" scoped>
.control {
  background: #F7F9FB;
  padding-bottom: 13.2rem !important;
  &__container {
    display: grid;
    grid-template-columns: 49rem 56rem;
    grid-column-gap: 10rem;
    justify-content: center;
    @include  mq-up('lg') {
      display: block;
    }
  }
  &__media {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
    @include  mq-up('lg') {
      display: none;
    }
  }
  &__text {
   h4 {
     font-size: 4rem;
     line-height: 5.4rem;
     color: #0B2253;
     font-family: 'Poppins', serif;
     font-weight: 600;
     margin-bottom: 1.6rem;
     @include  mq-up('lg') {
      font-size: 2.8rem;
    }
   }
  }
  &__list {
    @include  mq-up('lg') {
      display: block;
      max-width: 70rem;
      margin: 0 auto;
    }
    margin: 0;
    padding: 0;
    list-style: none;
    &__item {
      margin-top: 2.4rem;
      color: #6D7A98;
      position: relative;
      display: flex;
      align-items: flex-start;
      h5 {
        margin-bottom: 0.8rem;
        font-weight: 600;
        line-height: 3.2rem;
        font-size: 2.4rem;
        color: #0B2253;
      }
      p {
        font-size: 1.8rem;
        line-height: 3.2rem;
      }
      &::before {
        content: url('../../assets/icons/rocket.svg');
        margin-right: 2.8rem;
        display: inline-flex;
      }
    }
  }
}
</style>