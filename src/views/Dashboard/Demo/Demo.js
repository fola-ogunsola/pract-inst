import { ITable, IPagination, ISearch } from "@/components";
import { mapGetters, mapActions } from "vuex";


export default {
  name: "AdminSupport",
  components: {
    ITable,
    IPagination,
    ISearch
  },
  data: () => ({
    isLoading: false,
    supportPage: 1,
    supportCount: 0,
    supportTotalPages: 1,
    searchKeyword: "",
    commHeaders: [
      {
        name: "From",
        value: "email"
      },
      {
        name: "Message",
        value: "emailBody",
        filter: "limit"
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
        label: "View"
      },
      {
        value: "delete",
        label: "Delete message"
      }
    ]
  }),
  mounted() {
    this.getAllSupport();
  },

  computed: {
    ...mapGetters({
      support: "admin/getSupport"
    })
  },
  watch: {
    supportPage(value) {
      if (value) {
        this.getAllSupport(value);
      }
    },
    searchKeyword(val) {
      if (!val) {
        this.getAllSupport(1);
      }
    }
  },
  methods: {
    ...mapActions({
      fetchSupport: "admin/fetchSupport",
      deleteSupport: "admin/deleteSupport"
    }),
    async getAllSupport(page = 1) {
      const { searchKeyword } = this;
      this.isLoading = true;
      try {
        const supportFetched = await this.fetchSupport({ page, searchKeyword });
        if (!supportFetched.error) {
          this.supportPage = Number(supportFetched.currentPage);
          this.supportTotalPages = supportFetched.totalPages;
          this.supportCount = supportFetched.total;
        } else {
          throw Error(supportFetched.error);
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
    async removeSingleSupport(id) {
      try {
        const isRemoved = await this.deleteSupport(id);
        if (!isRemoved.error) {
          this.$toast.show({
            message: isRemoved,
            type: "success",
            fade: 3000
          });
          this.getAllSupport(this.supportPage);
          return isRemoved;
        } else {
          throw Error(isRemoved.error);
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
            this.$router.push({ name: "SingleSupport", params: { id: item.id } });
            break;
          case "delete":
            return this.removeSingleSupport(item.id);
        }
      }
    }
  }
};