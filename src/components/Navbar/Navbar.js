// import { mapMutations, mapGetters } from 'vuex'
export default {
  name: "Navbar",
  props: {
    pageTitle: {
      type: String,
      default: 'My Dashboard'
    }
  },
  data: () => ({
    isOpen: false,
    user: {},
    profile: {}
  }),
  computed: {
    // ...mapGetters({
    //   user: 'auth/getUser',
    //   profile: 'auth/getProfile'
    // })
  },
  methods: {
    // ...mapMutations({
    //   reset: 'auth/RESET'
    // }),
    logout() {
      const { user } = this
      this.reset()
      this.isOpen = false
      this.$router.push({
        name: user && user.role ? 'AdminLogin' : 'Login'
      })
    },
    goToProfile() {
      const { user } = this
      this.$router.push({
        name: user && user.role ? 'AdminAccount' : 'Account'
      })
      this.isOpen = false
    }
  }
};
