<template>
  <div class="demo">
    <div class="dashboard__title-container">
      <h1 class="dashboard__title">Demo Request</h1>
    </div>
    <div class="search-container">
      <p class="search-container-title">{{ demoCount }} Requests</p>
      <div class="search-container-content">
        <i-search v-model="searchKeyword" @search="getAllDemo" />
        <i-button type="outline" @click="clearFilter" class="clear-filter-btn" v-if="status">
          Clear Filter
        </i-button>
        <i-dropdown :options="actions" v-model="status">
          <button @click="showDropdown = true" class="filter-btn">
            Filter
            <span>
              <img src="@/assets/icons/filter-icon.svg" alt="" />
            </span>
          </button>
        </i-dropdown>
      </div>
    </div>
    <div class="table-container">
      <i-table
        @actionCalled="handleAction"
        :data="demo"
        :table-headers="commHeaders"
        empty-message="No Demo requests"
        :actions="options"
        :loading="isLoading"
        is-admin
        is-demo
      />
      <i-pagination v-model="demoPage" :total-pages="demoTotalPages" />
    </div>
  </div>
</template>

<script>
import AdminDemo from "./Demo";
export default AdminDemo;
</script>

<style lang="scss" scoped src="./Demo.scss"></style>
