<template>
  <i-admin-auth
    title="Welcome to Instrail Admin."
    subtitle="Create password for kingsley@gmail.com"
  >
    <i-form @submit="loginUser">
      <i-input
        name="Email Address"
        type="email"
        label="Email Address"
        placeholder="Email Address"
        rules="required|email"
        v-model="user.email"
      />
      <i-input
        name="password"
        type="password"
        label="Password"
        placeholder="•••••••••••"
        rules="required|password"
        v-model="user.password"
      />
      <i-button :loading="isLoading" type="regular" full size="large" submit>Log In</i-button>
    </i-form>
  </i-admin-auth>
</template>

<script>
import IAdminLogin from "./Login";
export default IAdminLogin;
</script>

<style lang="scss" src="./Login.scss" scoped></style>
