import { mapActions, mapGetters } from "vuex"
import { IPasswordReset } from "@/components";

export default {
  components: {
    IPasswordReset
  },
  data: () => ({
    user: {},
    showModal: false,
    isUploading: false,
    isLoading: false,
    passwords: {}
  }),
  computed: {
    ...mapGetters({
      profile: "auth/getProfile"
    })
  },
  methods: {
    ...mapActions({
      updateProfile: "auth/updateProfile"
    }),
    async profileUpdate({ user, isAdmin }) {
      if (!user.imageUrl) {
        delete user.imageUrl;
      }
      try {
        const profileUpdated = await this.updateProfile({ user, isAdmin });
        if (!profileUpdated.error) {
          this.isLoading = false;
          this.$toast.show({
            message: profileUpdated,
            type: "success",
            fade: 3000
          });
          this.$refs.updateProfile.$children[0].reset();
        } else {
          throw Error(profileUpdated.error);
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