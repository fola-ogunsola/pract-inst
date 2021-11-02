<template>
  <main>
    <navigation :show-bg="showNavBG" @open="showModal = true"></navigation>
    <router-view></router-view>
    <page-footer></page-footer>
    <website-modal v-show="showModal"  @close="showModal = false"></website-modal>
  </main>
</template>

<script>
import { Navigation, PageFooter, WebsiteModal } from '@/components'
export default {
  name: 'WebsiteLayout',
  components: {
    Navigation,
    PageFooter,
    WebsiteModal
  },
  data: () => ({ showNavBG: false, showModal: false }),
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