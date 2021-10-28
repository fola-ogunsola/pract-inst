<template>
  <div class="table__loading">
    <div class="table__loading-header"></div>
    <div class="table__loading-row" v-for="x in 8" :key="x">
      <div class="table__loading-row-item" v-for="n in columnCount" :key="n" :data-count="columnCount"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableLoading',
  props: {
    columnCount: {
      type: Number,
      default: 4
    }
  }
}
</script>

<style lang="scss" scoped>
%shimmer {
  position: relative;
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba($white, 0) 0,
      rgba($white, 0.2) 20%,
      rgba($white, 0.5) 60%,
      rgba($white, 0)
    );
    animation: shimmer 2s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}
.table__loading {
  width: 100%;
  margin: 2rem auto;
  position: relative;
  overflow: hidden;
  &-header {
    height: 4.8rem;
    background: $light-sky-blue;
    @extend %shimmer;
  }
  &-row {
    padding: 2.4rem 2rem;
    display: grid;
    border-bottom: 1px solid #F2F2F2;
    grid-column-gap: 4rem;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    
    @include mq-up('md') {
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 1rem;
    }
    &-item {
      background: $light-sky-blue;
      height: 12px;
      @extend %shimmer;
      @include mq-up('md') {
        &:nth-child(n+5) {
          display: none;
        }
      }
    }
  }
}
</style>