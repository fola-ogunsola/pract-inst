import { IAdminAuth } from "@/components";
import { mapActions } from "vuex";
export default {
  name: "forgot-password",
  components: {
    IAdminAuth
  },
  data: () => ({
    user: {
      email: ""
    },
    isLoading: false
  }),
  methods: {
    ...mapActions({
      forgotPassword: "auth/forgotPassword"
    }),
    async sendEmail() {
      const { user } = this;
      this.isLoading = true;
      try {
        const emailIsSent = await this.forgotPassword({ user });
        if (!emailIsSent.error) {
          this.$toast.show({
            message: emailIsSent,
            type: "success",
            fade: 3000
          });
          this.isLoading = false;
        } else {
          throw Error(emailIsSent.error);
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
