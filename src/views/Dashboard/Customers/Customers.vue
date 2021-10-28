<template>
  <div class="customers">
    <create-customer v-if="showCreateModal" @close="showCreateModal = false" />
    <div class="dashboard__title-container">
      <h1 class="dashboard__title">Customers</h1>
      <i-button
        @click="showCreateModal = true"
        class="create-btn"
        type="regular"
      >
        <svg viewBox="0 0 14 24">
          <path
            d="M6 11V5.4c0-.22.18-.4.4-.4h1.2c.22 0 .4.18.4.4V11h5.6c.22 0 .4.18.4.4v1.2a.4.4 0 0 1-.4.4H8v5.6a.4.4 0 0 1-.4.4H6.4a.4.4 0 0 1-.4-.4V13H.4a.4.4 0 0 1-.4-.4v-1.2c0-.22.18-.4.4-.4H6Z"
          />
        </svg>
        Add Customer
      </i-button>
    </div>
    <div class="customers-content">
      <p class="customers-content-heading">{{ customersCount }} Customers</p>
      <div class="customers-content-search">
        <i-search v-model="searchKeyword" @search="getAllCustomers"/>
        <button @click="showModal = true" class="filter-btn">
          Filter
          <span>
            <img src="@/assets/icons/filter-icon.svg" alt="" />
          </span>
        </button>
      </div>
    </div>
    <div class="customers-table-container">
      <i-table
        :data="users"
        :table-headers="customersHeaders"
        empty-message="No customers found"
        :actions="options"
        :loading="isLoading"
      />
      <i-pagination v-model="usersPage" :total-pages="customersTotalPages" />
    </div>
  </div>
</template>

<script>
import AdminCustomers from "./Customers";
export default AdminCustomers;
</script>

<style lang="scss" scoped src="./Customers.scss"></style>
