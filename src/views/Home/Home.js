import PageHeader from './Header.vue'
import Navigation from './Navigation.vue'
import Companies from './Companies.vue'
import Features from './Features.vue'
import Demo from './Demo.vue'
import Control from './Control.vue'
import Scale from './Scale.vue'
import Media from './Media.vue'
import PageFooter from './Footer.vue'
export default  {
  name: 'Homepage',
  components: {
    PageHeader,
    Navigation,
    Companies,
    Features,
    Demo,
    Control,
    Scale,
    Media,
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