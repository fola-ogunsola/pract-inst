import { ITable } from "@/components";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AdminHome",
  components: {
    ITable
  },
  data: () => ({
    isLoading: false,
    total: {
      totalPayedClaims: "",
      customerTotal: "",
      insuranceTotal: "",
      transactionTotal: ""
    },
    insuranceData: {},
    headers: [
      {
        name: "From",
        value: "fullName"
      },
      {
        name: "Message",
        value: "message",
        filter: "limit"
      },
      {
        name: "Phone Number",
        value: "phoneNumber"
      },
      {
        name: "Status",
        value: "status"
      },
      {
        name: "Date",
        value: "createdAt",
        filter: "date"
      }
    ],
  }),

  mounted() {
    this.getTotal();
    this.getAllDemo();
  },

  computed: {
    ...mapGetters({
      activities: "getActivitiesTotal",
      demo: "demo/getAllDemoRequests"
    }),
    recentDemo() {
      const { demo } = this;
      return demo.slice(0, 5);
    }
  },

  methods: {
    ...mapActions({
      getActivityTotal: "getActivityTotal",
      fetchDemo: "demo/fetchAllDemoRequests"
    }),
    async getTotal() {
      this.isLoading = true;
      try {
        const activitiesFetched = await this.getActivityTotal();
        if (!activitiesFetched.error) {
          this.isLoading = false;
          return true
        } else {
          throw Error(activitiesFetched.error);
        }
      } catch (error) {
        this.isLoading = false;
        this.$toast.show({
          message: error,
          type: "error",
          fade: 3000
        });
      }
    },
    async getAllDemo(page = 1) {
      this.isLoading = true;
      try {
        const demoFetched = await this.fetchDemo({ page, searchKeyword: '', status: "" });
        if (!demoFetched.error) {
          this.isLoading = false;
          return true
        } else {
          throw Error(demoFetched.error);
        }
      } catch (error) {
        this.$toast.show({
          message: error,
          type: "error",
          fade: 3000
        });
      }
    },
  }
};
