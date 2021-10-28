<template>
  <div id="app">
    <router-view/>
    <i-toast/>
  </div>
</template>

<script>
import { IToast } from '@/components'
export default {
  components: {
    IToast
  }
}
</script>

<style lang="scss" src="@/styles/main.scss"></style>