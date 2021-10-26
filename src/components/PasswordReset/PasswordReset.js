import { IModal } from "@/components";
import { mapActions } from 'vuex'

export default {
  name: 'PasswordReset',
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  components: {
    IModal
  },
  data: () => ({
    showModal: false,
    passwords: {},
    isLoading: false
  }),
  methods: {
    ...mapActions({
      updatePassword: 'auth/changePassword'
    }),
    async changePassword() {
      const { isAdmin, passwords: { newPassword, oldPassword } } = this
      this.isLoading = true
      try {
        const passwordChanged = 
          await this.updatePassword({isAdmin, passwords: {newPassword, oldPassword}})
        if (!passwordChanged.error) {
          this.isLoading = false;
          this.showModal = false;
          this.$toast.show({
            message: passwordChanged,
            type: "success",
            fade: 3000
          });
          this.passwords = {}
          this.$refs.passwordChange.$children[0].reset();
        } else {
          throw Error(passwordChanged.error);
        }
      } catch (error) {
        this.isLoading = false;
        this.$toast.show({
          message: error,
          type: "error",
          fade: 3000
        });
      }
    }
  }
}