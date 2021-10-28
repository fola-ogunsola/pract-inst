import { mapMutations, mapGetters } from 'vuex'
export default {
  name: "Navbar",
  props: {
    pageTitle: {
      type: String,
      default: 'My Dashboard'
    }
  },
  data: () => ({
    isOpen: false
  }),
  computed: {
    ...mapGetters({
      user: 'auth/getUser',
      profile: 'auth/getProfile'
    })
  },
  methods: {
    ...mapMutations({
      reset: 'auth/RESET'
    }),
    logout() {
      this.reset()
      this.isOpen = false
      this.$router.push({
        name: 'Login'
      })
    },
    goToProfile() {
      this.$router.push({
        name: 'Account'
      })
      this.isOpen = false
    }
  }
};
