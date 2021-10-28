<template>
  <div class="account">
    <div class="dashboard__title-container">
      <h1 class="dashboard__title">Account Settings</h1>
    </div>
    <div class="account-profile-picture">
      <div class="image-rounded">
        <img src="/profile-pic.png" :alt="user.firstName" />
      </div>
    </div>
    <div class="account-form">
      <i-form ref="updateProfile" @submit="updateMyProfile">
        <div class="form__grid">
          <i-input
            v-model="user.firstName"
            label="First Name"
            name="first name"
            type="name"
            rules="required|min:3"
            placeholder="First Name"
          />
          <i-input
            v-model="user.lastName"
            label="Last Name"
            name="last name"
            type="name"
            rules="required|min:3"
            placeholder="Last Name"
          />
        </div>
        <i-input
          v-model="user.email"
          label="Email Address"
          name="email"
          type="name"
          rules="required|min:3"
          disabled
          placeholder="Email Address"
        />
        <div class="account-form-buttons">
          <i-button class="cancel-btn" type="ghost" size="small">Cancel</i-button>
          <i-button class="save-changes-btn" type="regular" :loading="isLoading" submit full>Save Changes</i-button>
        </div>
      </i-form>
    </div>
    <i-password-reset />
  </div>
</template>

<script>
import AccountHome from "./Account";
export default AccountHome;
</script>

<style lang="scss" scoped src="./Account.scss"></style>
