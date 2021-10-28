<template>
  <div class="admin-home">
    <div class="dashboard__title-container">
      <h1 class="dashboard__title">Dashboard</h1>
    </div>
    <div class="admin-home-overview">
      <div class="admin-home-overview-item">
        <p class="admin-home-overview-item-value">{{ activities.customerCount && activities.customerCount.count || '--' }}</p>
        <p class="admin-home-overview-item-title">Total number of Customers</p>
      </div>
      <div class="admin-home-overview-item">
        <p class="admin-home-overview-item-value">{{ activities.allRequestCount && activities.allRequestCount.count || '--' }}</p>
        <p class="admin-home-overview-item-title">Total number of Demo</p>
      </div>
      <div class="admin-home-overview-item">
        <p class="admin-home-overview-item-value">{{ activities.approvedRequestCount && activities.approvedRequestCount.count || '--' }}</p>
        <p class="admin-home-overview-item-title">Total number of Approved Demos</p>
      </div>
    </div>
    <div class="admin-home-content">
      <div class="admin-home-content-claim">
        <div class="d-flex">
          <p>Recent Demo request</p>
          <router-link :to="{name: 'Demo'}">See all</router-link>
        </div>
        <template>
          <i-table
            name="Claims"
            empty-message="No transactions record"
            :table-headers="headers"
            :data="recentDemo"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import AdminHome from "./Home";
export default AdminHome;
</script>

<style lang="scss" scoped src="./Home.scss"></style>
