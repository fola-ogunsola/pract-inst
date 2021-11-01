<template>
  <main>
    <navigation :show-bg="showNavBG"></navigation>
    <router-view></router-view>
    <page-footer></page-footer>
  </main>
</template>

<script>
import { Navigation, PageFooter } from '@/components'
export default {
  name: 'WebsiteLayout',
  components: {
    Navigation,
    PageFooter
  },
  data: () => ({ showNavBG: false }),
  mounted() {
    window.addEventListener('scroll', () => this.handleScroll(), 100);
  },
  methods: {
    handleScroll() {
      if(window.scrollY >= 100) {
        this.showNavBG = true
      } else {
        this.showNavBG = false
      }
    }
  }
}
</script>