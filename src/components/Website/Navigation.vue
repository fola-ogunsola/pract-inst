<template>
  <nav class="navigation" ref="nav" :class="{bg: showBg}">
    <div class="container navigation__container">
      <img src="@/assets/icons/logo.svg" alt="Instrail">
      <button class="navigation__mobile" :class="{open: isOpen}" @click="isOpen = !isOpen">
        <span></span>
      </button>
      <ul class="navigation__menu" :class="{open: isOpen}" @click="isOpen = false">
        <li class="navigation__menu__item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="navigation__menu__item">
          <router-link to="/faq">FAQs</router-link>
        </li>
        <li class="navigation__menu__item">
          <button class="navigation__menu__button" @click="$emit('open')">
            Request a Demo
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
// import gsap from 'gsap'
export default {
  data: () => ({
    isOpen: false
  }),
  props: {
    showBg: {
      type: Boolean,
      default: false
    }
  },
  // mounted() { 
  //   const { nav } = this.$refs
  //   let tl = gsap.timeline()
  //   tl.fromTo(nav, { y: -30, opacity: 0}, { duration: 0.4, y: 0, opacity: 1}) 
  // } 
}
</script>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  transition: background 300ms ease-in-out;
  &.bg {
    background: #041237;
  }
  top: 0;
  z-index: 230;
  left: 0;
  right: 0;
  &__container {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    img {
      height: 4rem;
      width: auto;
    }
  }
  &__menu {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    color: $white;
    font-family: 'Karla', serif;
    text-transform: capitalize;
    &__item {
      margin: 0 2.8rem;
      font-size: 1.6rem;
      line-height: 2.4rem;
      &:last-child {
        margin-right: 0;
      }
      &:first-child {
        margin-left: 0;
      }
      &:hover {
        color: $blue;
      }
    }
    &__button {
      padding: 1.2rem 2.8rem;
      font-weight: 500;
      font-family: 'Karla', serif;
      border: 1px solid #1F6AEC;
      box-sizing: border-box;
      border-radius: 8px;
      display: flex;
      background: $blue;
      color: $white;
      &:hover {
        background: transparent;
      }
    }
    @include mq-up('md') {
      position: fixed;
      flex-direction: column;
      align-items: center;
      background: #041237;
      top: 8rem;
      left: 0;
      right: 0;
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      max-height: 0;
      transition: all 300ms ease-in-out;
      &__item {
        margin: 3.6rem 0;
        font-size: 2.4rem;
        text-transform: uppercase;
      }
      &.open {
        max-height: 100vh;
        opacity: 1;
        visibility: visible;
      }
    }
  }
  &__mobile {
    display: none;
    @include mq-up('md') {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      background: none;
      border: none;
      span {
        position: relative;
        &,
        &::after,
        &::before {
          width: 2.4rem;
          height: 0.2rem;
          content: '';
          display: flex;
          flex-direction: column;
          background: $white;
          transition: all 0.3s ease-in-out;
        }
        &::before,
        &::after {
            position: absolute;
          }
          &::before {
            top: -0.8rem;
          }
          &::after {
            top: 0.8rem;
          }
        }
        &.open {
          span {
            & {  background: #041237; } 
            &::after {
              transform: rotate(-45deg);
              transform-origin: left;
            }
            &::before {
              transform: rotate(45deg);
              transform-origin: left;
            }
          }
        }
    }
  }
}
</style>