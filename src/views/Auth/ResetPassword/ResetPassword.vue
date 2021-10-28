<template>
  <i-admin-auth title="Reset Password" subtitle="Enter a new password to proceed">
    <i-form @submit="resetPassword">
      <i-input
        name="password"
        type="password"
        label="Password"
        placeholder="•••••••••••"
        rules="required|password"
        v-model="user.password"
      />
      <i-input
        name="confirm password"
        type="password"
        label="Confirm Password"
        placeholder="•••••••••••"
        rules="required|confirm:@password"
        v-model="user.confirmPassword"
      />
      <i-button type="regular" full size="large"  :loading="isLoading" submit>Reset Password</i-button>
    </i-form>
  </i-admin-auth>
</template>

<script>
import IAdminResetPassword from "./ResetPassword";
export default IAdminResetPassword;
</script>

<style lang="scss" src="./ResetPassword.scss" scoped></style>
