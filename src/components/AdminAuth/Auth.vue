<template>
  <div class="admin-auth">
    <div class="admin-auth-content">
      <img src="@/assets/icons/admin-logo.svg" alt="" />
      <h3 class="admin-auth-content-title">{{ title }}</h3>
      <p class="admin-auth-content-subtitle">{{ subtitle }}</p>
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: "AdminAuthWrapper",
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped src="./Auth.scss"></style>
