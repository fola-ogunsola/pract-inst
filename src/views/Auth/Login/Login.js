import { IAdminAuth } from "@/components";
import { mapActions } from 'vuex';
export default {
  name: "login",
  components: {
    IAdminAuth
  },
  data: () => ({
    user: {
      email: '',
      password: ''
    },
    isLoading: false
  }),
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    async loginUser() {
      const { user } = this
      this.isLoading = true
      try {
        const isLoggedIn = await this.login({user})
        if(!isLoggedIn.error ) {
          this.$router.push({ name: 'Dashboard'})
        } else {
          throw Error(isLoggedIn.error)
        }
      } catch (error) {
        this.$toast.show({
          message: error,
          type: 'error',
          fade: 3000
        })
        this.isLoading = false
      }
    }
  }
};
