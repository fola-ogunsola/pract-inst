import { mapActions, mapGetters } from "vuex"
import { uploadFile } from "@/api/upload";
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
    async uploadImage(event) {
      this.isUploading = true;
      let form = new FormData();
      form.append("file", event.target.files[0]);
      const imageUploaded = await uploadFile(form);
      this.isUploading = false;
      if (imageUploaded.status === 200) {
        const {
          data: { data }
        } = imageUploaded;
        this.user.imageUrl = data.url;
        this.$toast.show({
          message: "Image uploaded successfully",
          type: "success",
          fade: 5000
        });
      } else {
        const {
          response: { data }
        } = imageUploaded;
        this.$toast.show({
          message: data.message,
          fade: 3000,
          type: "error"
        });
      }
    },
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