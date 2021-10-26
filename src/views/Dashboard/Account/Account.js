import { ISelect } from "@/components";
import AccountMixin from '@/mixins/account'
export default {
  name: "AccountHome",
  components: {
    ISelect
  },
  mixins: [AccountMixin],
  watch: {
    profile: {
      immediate: true,
      deep: true,
      handler(val) {
        if (val) {
          const { firstName, lastName, imageUrl, email, gender, country, phoneNumber } = val;
          this.user = {
            firstName,
            lastName,
            imageUrl,
            email,
            gender,
            country,
            phoneNumber
          };
        }
      }
    }
  },
  data: () => ({
    showModal: false,
    user: {},
    country: [
      {
        value: "Ghana",
        label: "Ghana"
      },
      {
        value: "Nigeria",
        label: "Nigeria"
      }
    ],
    gender: [
      {
        value: "Male",
        label: "Male"
      },
      {
        value: "Female",
        label: "Female"
      },
      {
        value: "Other",
        label: "Other"
      }
    ]
  }),
  methods: {
    async updateMyProfile() {
      const {
        user: { firstName, lastName, imageUrl, phoneNumber, country, gender }
      } = this;
      this.isLoading = true;
      let user = {
        firstName,
        lastName,
        imageUrl,
        phoneNumber,
        country,
        gender
      };
      if (!imageUrl) {
        delete user.imageUrl;
      }
      this.profileUpdate({user})
    }
  }
};
