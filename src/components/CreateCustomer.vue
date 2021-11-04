<template>
  <i-modal @close="$emit('close')">
    <template v-slot:header>
      <h3>Add Customer</h3>
    </template>
    <template>
      <i-form ref="createCustomer" form-ref="createCustomer" @submit="createCustomer">
        <i-input
          label="Name"
          name="name"
          type="text"
          rules="required"
          placeholder="Company name"
          v-model="customer.name"
        />
        <i-input
          label="Email Address"
          name="email"
          type="email"
          rules="required"
          placeholder="Email Address"
          v-model="customer.email"
        />
        <i-input
            v-model="customer.phone"
            label="Phone Number"
            name="phone number"
            type="tel"
            rules="required|phone"
            placeholder="Phone number"
          />
        <i-select
          label="Country"
          name="country"
          rules="required"
          placeholder="Select Country"
          :options="countries"
          v-model="customer.country"
        />
        <i-button class="button" :loading="isLoading"  full submit>Save</i-button>
      </i-form>
    </template>
  </i-modal>
</template>

<script>
import IModal from "./Modal/Modal.vue";
import ISelect from "./Select/Select.vue"
import { mapActions } from 'vuex'
import allCountries from '../utils/countries.json'
export default {
  name: "CreateCustomer",
  components: {
    IModal,
    ISelect
  },
  mounted() {
    allCountries.forEach(country => {
      this.countries.push({
        label: country.name,
        value: country.name,
      })
    });
  },

  data: () => ({
    customer: {},
    countries: [],
    isLoading: false
  }),
  methods: {
    ...mapActions({
      addCustomer: 'customer/addCustomer'
    }),
    async createCustomer() {
      const { customer } = this
      this.isLoading = true
      try {
        const customerCreated = await this.addCustomer(customer)
        if(!customerCreated.error) {
          this.isLoading = false;
          this.$toast.show({
            message: customerCreated,
            type: 'success',
            fade: 3000
          })
          this.customer = {}
          this.$refs.createCustomer.$children[0].reset()
          this.$emit('close')
        } else {
          throw Error(customerCreated.error)
        }
      } catch(error) {
        this.isLoading = false
        this.$toast.show({
          message: error,
          type: 'error',
          fade: 3000
        })
      }
    }
  }
};
</script>
