<template>
  <div>
    <div class="password-change">
      <p class="heading">Password Update</p>
      <p class="title">Update your Password</p>
      <div class="password-change-button">
        <p class="text">Change your password to a new one</p>
        <i-button @click="showModal = true" class="change-password-btn" type="ghost" size="small">Change Password</i-button>
      </div>
    </div>
    <i-modal v-show="showModal" @close="showModal = false">
      <template v-slot:header>
        <h3>Change Password</h3>
      </template>
      <template>
        <i-form ref="passwordChange" @submit="changePassword">
          <i-input
            label="Old Password"
            name="old password"
            type="password"
            rules="required|password"
            placeholder="•••••••••••"
            v-model="passwords.oldPassword"
          />
          <i-input
            label="New Password"
            name="new password"
            type="password"
            rules="required|password"
            placeholder="•••••••••••"
            v-model="passwords.newPassword"
          />
          <i-input
            label="Confirm New Password"
            name="confirm new password"
            type="password"
            rules="required|confirm:@new password"
            placeholder="•••••••••••"
            v-model="passwords.confirmNewPassword"
          />
          <i-button class="button" full submit :loading="isLoading">Reset Password</i-button>
        </i-form>
      </template>
    </i-modal>
  </div>
</template>
<script>
import PasswordReset from "./PasswordReset";
export default PasswordReset;
</script>

<style lang="scss" scoped src="./PasswordReset.scss"></style>