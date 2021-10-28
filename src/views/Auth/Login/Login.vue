<template>
  <i-admin-auth
    title="Welcome to Instrail Admin."
    subtitle="Enter you email and password"
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
      <div class="forgot">
        <router-link :to="{name: 'AdminForgotPassword'}">Forgot password?</router-link>
      </div>
      <i-button :loading="isLoading" type="regular" full size="large" submit>Log In</i-button>
    </i-form>
  </i-admin-auth>
</template>

<script>
import IAdminLogin from "./Login";
export default IAdminLogin;
</script>

<style lang="scss" src="./Login.scss" scoped></style>
