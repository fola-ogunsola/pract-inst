<template>
  <div class="single-demo">
    <div class="dashboard__title-container">
      <h1 class="dashboard__title">
        <button @click="$router.go(-1)" class="arrow-btn">
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 15L1 8L8 1"
              stroke="#0B2253"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        Back
      </h1>
    </div>
    <div :data="singleDemo" class="single-demo-content">
      <p class="single-demo-content-subject">
        Demo Request
      </p>
      <div class="single-demo-content-profile-content">
        <div class="single-demo-content-profile-content-header">
          <div class="profile-avatar">
            <img src="@/assets/images/email-avatar.svg" alt="" />
          </div>
          <div class="profile-details">
            <p class="name">
              {{singleDemo.fullName}} <span class="demo-email"> {{singleDemo.email}}></span>
            </p>
            <p class="email-receiver">to me</p>
          </div>
        </div>
        <div class="single-demo-content-profile-content-date">
          <p>{{ singleDemo.createdAt | formatDate }}</p>
        </div>
      </div>
      <div class="single-demo-content-message-content">
        <p class="message-text">
          {{ singleDemo.message }}
        </p>
      </div>
      <i-button @click="updateDemo" class="my-2 ml-5" v-if="singleDemo && singleDemo.status !== 'approved'" :loading="isLoading">Approve Request</i-button>
      <div class="single-demo-content-reply-links">
        <p>
          <a :href="reply">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 20L1 12L11 4V9C16.523 9 21 13.477 21 19C21 19.273 20.99 19.543 20.968 19.81C19.505 17.036 16.638 15.119 13.313 15.005L13 15H11V20ZM9 13H13.034L13.381 13.007C14.666 13.05 15.905 13.317 17.057 13.773C15.59 12.075 13.42 11 11 11H9V8.161L4.202 12L9 15.839V13Z"
                fill="#0D0F11"
              />
            </svg>
            Reply
          </a>
          <a :href="forward">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 4.5V9C4.477 9 0 13.477 0 19C0 19.273 0.0100002 19.543 0.0319996 19.81C1.495 17.036 4.362 15.119 7.687 15.005L8 15H10V19.5L18 12L10 4.5ZM16 4.5V7.237L21.08 12L16.001 16.761L16 19.5L24 12L16 4.5ZM12 9.116L15.076 12L12 14.883V13H7.966L7.619 13.007C6.334 13.05 5.095 13.317 3.943 13.773C5.41 12.075 7.58 11 10 11H12V9.116Z"
                fill="#0D0F11"
              />
            </svg>
            Forward
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSingleDemo from "./SingleDemo.js";
export default AdminSingleDemo;
</script>

<style lang="scss" scoped src="./SingleDemo.scss"></style>
