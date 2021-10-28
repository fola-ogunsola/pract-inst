<template>
  <button 
    :class="[
      'btn', type ? `btn--${type}`: '' ,
      size ? `btn--${size}` : '',
      full ? `btn--full` : ''
    ]"
    @click="handleClick"
    :type="submit ? 'submit' : 'button'"
    :disabled="disabled || loading"
  >
    <slot />
    <span class="btn__loader" v-if="loading"/>
  </button>
</template>

<script>
import IButton from './Button'
export default IButton
</script>
<style lang="scss" src="./Button.scss"></style>
