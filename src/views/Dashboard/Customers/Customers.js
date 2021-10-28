import { ITable, IPagination, ISearch, CreateCustomer } from "@/components";
import { mapActions, mapGetters } from "vuex";


export default {
  name: "AdminCustomers",
  components: {
    ITable,
    IPagination,
    ISearch,
    CreateCustomer
  },
  data: () => ({
    isLoading: false,
    usersPage: 1,
    customersCount: 0,
    customersTotalPages: 1,
    searchKeyword: '',
    showCreateModal: false,
    customersHeaders: [
      {
        name: "Name",
        value: "name",
      },
      {
        name: "Email Address",
        value: "email"
      },
      {
        name: "Phone Number",
        value: "phone"
      },
      {
        name: "Country",
        value: "country",
        filter: "capitalize"
      },
      {
        name: "Status",
        value: "status",
        filter: "status"
      },
      {
        name: "Date Created",
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
        value: "remove",
        label: "Remove Customer"
      }
    ]
  }),

  mounted() {
    this.getAllCustomers();
  },

  computed: {
    ...mapGetters({
      users: "customer/getAllCustomers"
    })
  },
  watch: {
    usersPage(value) {
      if (value) {
        this.getAllCustomers(value)
      }
    },
    searchKeyword(val) {
      if(!val) {
        this.getAllCustomers(1)
      }
    }
  },
  methods: {
    ...mapActions({
      fetchCustomers: "customer/fetchAllCustomers"
    }),
    async getAllCustomers(page = 1) {
      const { searchKeyword } = this
      this.isLoading = true;
      try {
        const customersFetched = await this.fetchCustomers({ page, searchKeyword });
        if (!customersFetched.error) {
          this.usersPage = Number(customersFetched.currentPage);
          this.customersTotalPages = customersFetched.totalPages;
          this.customersCount = customersFetched.total;
        } else {
          throw Error(customersFetched.error)
        }
        this.isLoading = false;
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
};