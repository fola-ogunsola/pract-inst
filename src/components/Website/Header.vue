<template>
  <div class="page-header">
    <h1>
      <slot></slot>
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.page-header {
  min-height: 45rem;
  background: #041237;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family:  'Crimson Text', serif;
    font-weight: bold;
    font-size: 7.2rem;
    line-height: 7.2rem;
    color: $white;
  }
} 
</style>