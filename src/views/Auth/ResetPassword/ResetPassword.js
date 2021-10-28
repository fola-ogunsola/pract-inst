import { IAdminAuth } from "@/components";
import { mapActions } from "vuex";
export default {
  name: "reset-password",
  components: {
    IAdminAuth
  },
  computed: {
    urlToken: function() {
      return this.$route.query.token;
    }
  },
  data: () => ({
    user: {
      password: "",
      confirmPassword: ""
    },
    isLoading: false
  }),
  methods: {
    ...mapActions({
     passwordReset: "auth/resetPassword"
    }),
    async resetPassword() {
      const { user, urlToken: token } = this;
      const data = {
        password: user.password
      };
      this.isLoading = true;
      try {
        const passwordIsReset = await this.passwordReset({ data, token });
        if (!passwordIsReset.error) {
          this.$toast.show({
            message: passwordIsReset,
            type: "success",
            fade: 3000
          });
          this.$router.push({ name: 'AdminLogin' })
        } else {
          throw Error(passwordIsReset.error);
        }
      } catch (error) {
        this.$toast.show({
          message: error,
          type: "error",
          fade: 3000
        });
        this.isLoading = false;
      }
    }
  }
};
