import { ITable, IPagination, ISearch, CreateCustomer, IDropdown } from "@/components";
import { mapActions, mapGetters } from "vuex";


export default {
  name: "AdminCustomers",
  components: {
    ITable,
    IPagination,
    ISearch,
    CreateCustomer,
    IDropdown
  },
  data: () => ({
    isLoading: false,
    usersPage: 1,
    customersCount: 0,
    customersTotalPages: 1,
    searchKeyword: '',
    showCreateModal: false,
    showDropdown: false,
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
    ],
    actions: [
      {
        value: "inactive",
        label: "Inactive"
      },
      {
        value: "active",
        label: "Active"
      },
    ],
    status: ''
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
    },
    showCreateModal(val) {
      if(val === false) {
        this.getAllCustomers()
      }
    },
    status(val) {
      if(typeof val === 'string') {
        this.getAllCustomers(1, val)
      }
    }
  },
  methods: {
    ...mapActions({
      fetchCustomers: "customer/fetchAllCustomers"
    }),
    async getAllCustomers(page = 1, status = '') {
      const { searchKeyword } = this
      this.isLoading = true;
      try {
        const customersFetched = await this.fetchCustomers({ page, searchKeyword, status });
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
    },
    clearFilter() {
      this.status = ''
    }
  }
};