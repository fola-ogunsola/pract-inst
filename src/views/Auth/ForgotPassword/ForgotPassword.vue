<template>
  <i-admin-auth title="Forgot Password" subtitle="Enter your email address to reset password">
    <i-form @submit="sendEmail">
      <i-input
        name="Email Address"
        type="email"
        label="Email Address"
        placeholder="Email Address"
        rules="required|email"
        v-model="user.email"
      />
      <i-button :loading="isLoading" submit type="regular" full size="large">Recover Password</i-button>
      <p class="text-center mt-2 " >
        <router-link class="text-underline" :to="{ name: 'AdminLogin' }">
          Back to Log In
        </router-link>
      </p>
    </i-form>
  </i-admin-auth>
</template>

<script>
import IAdminForgotPassword from "./ForgotPassword";
export default IAdminForgotPassword;
</script>

<style lang="scss" src="./ForgotPassword.scss" scoped></style>
