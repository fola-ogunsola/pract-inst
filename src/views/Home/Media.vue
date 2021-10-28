<template>
  <section class="section media">
    <div class="container media__container">
      <div class="media__text">
        <h3>Take full control of your insurance business</h3>
        <p>Insurance is simply about protecting what matters most to you and your family.</p>
        <div class="media__actions">
          <button class="media__actions__button">Request a Demo</button>
            <button class="media__actions__button --white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#ECF2FD"/>
                <path fill="#0B2253" d="M16.668 12.942c-.052.049-.243.254-.422.425-1.048 1.07-3.785 2.818-5.216 3.353-.217.085-.767.267-1.062.28a1.86 1.86 0 0 1-.805-.183 1.608 1.608 0 0 1-.716-.753c-.09-.219-.23-.875-.23-.887C8.076 14.46 8 13.294 8 12.006c0-1.227.076-2.345.191-3.074.013-.013.154-.827.307-1.106A1.62 1.62 0 0 1 9.918 7h.05c.384.012 1.19.329 1.19.34 1.355.535 4.026 2.199 5.1 3.305 0 0 .303.285.435.462.205.255.307.57.307.887 0 .352-.115.68-.332.948Z"/>
              </svg>
              Watch Demo
            </button>
        </div>
      </div>
      <img class="media__image" src="../../assets/dashboard.png" alt="">
    </div>
  </section>
</template>

<style lang="scss" scoped>
.media {
  &__container {
    background: #F7EEFA;
    border-radius: 1.6rem;
    padding: 9.2rem 12.5rem;
    position: relative;
    margin-bottom: 10rem;
    @include mq-up('md') {
      padding: 3rem 2rem;
    }
  }
  &__text {
    max-width: 54rem;
    h3 {
      color: #0B2253;
      font-size: 4rem;
      line-height: 5.4rem;
      font-family: 'Poppins', serif;
      margin-bottom: 3.2rem;
      @include mq-up('md') {
        font-size: 2.8rem;
      }
    }
    p {
      color:  #0B2253;
      font-size: 2.4rem;
      line-height: 3.4rem;
      margin-bottom: 4rem;
      font-family: 'Karla', serif;
    }
    }
    &__actions {
     display: flex;
     grid-gap: 2rem;
     &__button {
      padding: 1.8rem 2.8rem;
      font-size: 2rem;
      font-weight: 500;
      font-family: 'Karla', serif;
      border: 1px solid #1F6AEC;
      box-sizing: border-box;
      border-radius: 8px;
      display: flex;
      background: $blue;
      color: $white;
      &.--white {
        background: $white;
        color: $blue;
        svg {
          margin-right: 1rem;
        }
      }
    }
    @include mq-up('md') {
      display: block;
      &__button {
        margin-bottom: 1rem;
        width: 100%;
        align-items: center;
        text-align: center;
        display: block;
        svg {
          display: none;
        }
      }
    }
  }
  &__image {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 0;
    @include mq-up('lg') {
      display: none;
    }
  }
}
</style>