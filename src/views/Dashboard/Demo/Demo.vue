<template>
  <div class="support">
    <div class="dashboard__title-container">
      <h1 class="dashboard__title">Support</h1>
    </div>
    <div class="search-container">
      <p class="search-container-title">{{ supportCount }} Messages</p>
      <div class="search-container-content">
        <i-search v-model="searchKeyword" @search="getAllSupport" />
        <button class="filter-btn">
          Filter
          <span>
            <img src="@/assets/icons/filter-icon.svg" alt="" />
          </span>
        </button>
      </div>
    </div>
    <div class="table-container">
      <i-table
        @actionCalled="handleAction"
        :data="support"
        :table-headers="commHeaders"
        empty-message="No records"
        :actions="options"
        is-admin
      />
      <i-pagination v-model="supportPage" :total-pages="supportTotalPages" />
    </div>
  </div>
</template>

<script>
import AdminSupport from "./Demo";
export default AdminSupport;
</script>

<style lang="scss" scoped src="./Demo.scss"></style>
