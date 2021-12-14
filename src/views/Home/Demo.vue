<template>
  <div class="section demo">
    <div class="container demo__container">
      <h4 class="demo__header">
        Still not convinced? <br>
        Watch Instrail in action.
      </h4>
        <div class="demo__media">
          <img src="@/assets/demo.png" alt="">
          <!-- <button class="demo__media__play">
            <svg xmlns="http://www.w3.org/2000/svg" width="105" height="105" fill="none">
              <circle cx="52.5" cy="52.5" r="52.5" fill="#ECF2FD"/>
              <path fill="#1F6AEC" d="M67.816 55.59c-.168.16-.796.835-1.385 1.395-3.439 3.509-12.417 9.247-17.114 11.003-.713.28-2.516.876-3.483.918a6.109 6.109 0 0 1-2.643-.6c-1.05-.556-1.886-1.436-2.349-2.472-.294-.717-.757-2.87-.757-2.91-.46-2.352-.71-6.177-.71-10.406 0-4.024.25-7.693.627-10.084.042-.042.504-2.714 1.008-3.63.923-1.674 2.726-2.71 4.656-2.71h.168c1.258.039 3.901 1.078 3.901 1.114 4.447 1.756 13.213 7.217 16.737 10.846 0 0 .995.934 1.426 1.515a4.646 4.646 0 0 1 1.008 2.91 4.882 4.882 0 0 1-1.09 3.111Z"/>
            </svg>
          </button> -->
        </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.demo {
  background: #011456;
  margin-top: 11rem;
  &__container {
    padding-bottom: 14rem;
  }
  &__header {
    color: $white;
    font-size: 7.2rem;
    font-family: 'Crimson Text', serif;
    line-height: 7.2rem;
    margin-bottom: 10rem;
    max-width: 90rem;
    @include mq-up('lg') {
      font-size: 4.68rem;
    }
  }
  &__media {
    position: relative;
    img {
      width: 100%;
    }
    &__play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: none;
      cursor: pointer;
      border: none;
    }
  }
}
</style>