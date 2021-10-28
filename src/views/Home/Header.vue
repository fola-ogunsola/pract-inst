<template>
  <header class="hero">
    <div class="container hero__container">
      <div class="hero__text" ref="text">
        <h1>
          Our passion is protecting yours.
        </h1>
        <h3>
          Insurance is simply about protecting what matters most to you and your family.
        </h3>
        <div class="hero__cta" ref="cta">
          <button class="hero__cta__button">Request a Demo</button>
          <button class="hero__cta__button --white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
              <circle cx="12" cy="12" r="12" fill="#ECF2FD"/>
              <path fill="#0B2253" d="M16.668 12.942c-.052.049-.243.254-.422.425-1.048 1.07-3.785 2.818-5.216 3.353-.217.085-.767.267-1.062.28a1.86 1.86 0 0 1-.805-.183 1.608 1.608 0 0 1-.716-.753c-.09-.219-.23-.875-.23-.887C8.076 14.46 8 13.294 8 12.006c0-1.227.076-2.345.191-3.074.013-.013.154-.827.307-1.106A1.62 1.62 0 0 1 9.918 7h.05c.384.012 1.19.329 1.19.34 1.355.535 4.026 2.199 5.1 3.305 0 0 .303.285.435.462.205.255.307.57.307.887 0 .352-.115.68-.332.948Z"/>
            </svg>
            Watch Demo
          </button>
        </div>
      </div>
      <div class="hero__media">
       <img src="@/assets/hero-pink.png" alt="" ref="bg">
       <img class="hero__media--float" src="@/assets/hero-color.png" alt="" ref="float">
      </div>
    </div>
  </header>
</template>

<script>
import gsap from 'gsap'
export default {
  mounted() { 
    const { text, bg, float, cta } = this.$refs

    let tl = gsap.timeline()
    
    tl.fromTo(text, { y: -40, opacity: 0 }, { duration: 1, y: 0, opacity: 1 })
    .fromTo(bg, { x: 100, opacity: 0}, { duration: 0.5, x: 0, opacity: 1}) 
    .fromTo(float, { y: 100, opacity: 0}, { duration: 0.3, y: 0, opacity: 1}) 
    .fromTo(cta, { y: 10, opacity: 0}, { duration: 0.5, y: 0, opacity: 1}) 
  } 
}
</script>

<style lang="scss" scoped>
.hero {
  background: #041237;
  min-height: 74rem;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 12rem;
  color: $white;
  &__container {
    display: flex;
    align-items: center;
    height: 100%;
    flex-grow: 1;
  }
  &__text {
    max-width: 58rem;
    h1 {
      font-size: 7.2rem;
      font-weight: bold;
      margin-bottom: 2rem;
      line-height: 100%;
      font-family: 'Crimson Text', serif;
    }
    h3 {
      font-size: 2.4rem;
      line-height: 3.4rem;
      font-family: 'Karla', serif;
      font-weight: normal;
    }
    @include mq-up('lg') {
     h1 {
       font-size: 4.68em;
     }
    }
  }
  &__cta {
    display: flex;
    grid-gap: 2rem;
    margin-top: 5.6rem;
    padding-bottom: 12.5rem;
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
  &__media {
    margin-left: auto;
    height: 50rem;
    position: relative;
    img {
      height: 100%;
      width: auto;
    }
    &--float {
      position: absolute;
      right: 15rem;
      top: 14rem;
    }
    @include mq-up('lg') {
      display: none;
    }
  }
}
</style>