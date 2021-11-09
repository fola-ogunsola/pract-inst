import { ITable, IPagination, ISearch, IDropdown } from "@/components";
import { mapGetters, mapActions } from "vuex";


export default {
  name: "AdminDemo",
  components: {
    ITable,
    IPagination,
    ISearch,
    IDropdown
  },
  data: () => ({
    isLoading: false,
    demoPage: 1,
    demoCount: 0,
    demoTotalPages: 1,
    searchKeyword: "",
    commHeaders: [
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
    options: [
      {
        value: "view",
        label: "View request"
      },
      {
        value: "approve",
        label: "Approve request"
      }
    ],
    actions: [
      {
        value: "new",
        label: "New"
      },
      {
        value: "approved",
        label: "Approved"
      },
    ],
    showDropdown: false,
    status: ''
  }),
  mounted() {
    this.getAllDemo();
  },

  computed: {
    ...mapGetters({
      demo: "demo/getAllDemoRequests"
    })
  },
  watch: {
    demoPage(value) {
      if (value) {
        this.getAllDemo(value);
      }
    },
    searchKeyword(val) {
      if (!val) {
        this.getAllDemo(1);
      }
    },
    status(val) {
      if(typeof val === "string") {
        this.getAllDemo(1, val);
      }
    }
  },
  methods: {
    ...mapActions({
      fetchDemo: "demo/fetchAllDemoRequests",
      approveDemo: "demo/approveDemo"
    }),
    async getAllDemo(page = 1) {
      const { searchKeyword, status } = this;
      this.isLoading = true;
      try {
        const demoFetched = await this.fetchDemo({ page, searchKeyword, status });
        if (!demoFetched.error) {
          this.demoPage = Number(demoFetched.currentPage);
          this.demoTotalPages = demoFetched.totalPages;
          this.demoCount = demoFetched.total;
        } else {
          throw Error(demoFetched.error);
        }
        this.isLoading = false;
      } catch (error) {
        this.$toast.show({
          message: error,
          type: "error",
          fade: 3000
        });
      }
    },
    async updateDemo(id) {
      try {
        const isUpdated = await this.approveDemo(id);
        if (!isUpdated.error) {
          this.$toast.show({
            message: 'Demo approved successfully',
            type: "success",
            fade: 3000
          });
          this.getAllDemo(this.demoPage);
          return isUpdated;
        } else {
          throw Error(isUpdated.error);
        }
      } catch (error) {
        this.$toast.show({
          message: error,
          type: "error",
          fade: 3000
        });
      }
    },
    handleAction(value) {
      const { action, item } = value;
      if (typeof action === "string") {
        switch (action) {
          case "view":
            this.$router.push({ name: "SingleDemo", params: { id: item.id } });
            break;
          case "approve":
            return this.updateDemo(item.id);
        }
      }
    },
    clearFilter() {
      this.status = '';
    }
  }
};