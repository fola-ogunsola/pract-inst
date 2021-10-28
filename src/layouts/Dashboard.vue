<template>
  <main class="dashboard">
    <i-sidebar
      :class="showSidebar ? 'show' : ''"
      @closeSidebar="showSidebar = false"
    />
    <div class="container">
      <i-navbar :page-title="pageTitle" @openSidebar="showSidebar = true" />
      <transition name="list">
        <router-view></router-view>
      </transition>
    </div>
  </main>
</template>

<script>
import { ISidebar, INavbar } from "@/components";
export default {
  name: "DashboardLayout",
  components: {
    ISidebar,
    INavbar
  },
  data: () => ({
    showSidebar: false,
  }),
  computed: {
    pageTitle() {
      return this.$route.meta.title || "";
    },
    
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  display: grid;
  overflow: hidden;
  height: 100vh;
  grid-template-columns: 1fr;
  > .container {
    overflow-x: hidden;
    max-width: unset;
    @include mq(md) {
      padding: 0 3.2rem;
    }
    .dashboard-title {
      display: none;
      @include mq(md) {
        display: block;
        margin-bottom: 2rem;
      }
    }
  }
  @include mq(md) {
    grid-template-columns: 25rem auto;
    > .container {
      grid-column: 2/3;
    }
  }
}
@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.list-enter-active {
  animation: slide-in 0.5s;
}
</style>
