<template>
  <nav>
    <div class="hamburger-wrapper">
      <label for="hamburger">
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H17M1 7H17M1 13H17"
            stroke="#0B2253"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </label>
      <input type="checkbox" name="" id="hamburger" @change="$emit('openSidebar')" />
      <p class="dashboard-title">{{ pageTitle }}</p>
    </div>
    <div class="profile">
      <label for="arrow">
        <div class="image-rounded image-rounded-small">
          <img class="avatar" :src="profile.imageUrl ? profile.imageUrl :  '/profile-pic.png'" :alt="profile.firstName" />
        </div>
        <img class="triangle-icon" src="../../assets/icons/triangle.svg" alt="icon" />
      </label>
      <input type="checkbox" name="" id="arrow" v-model="isOpen" />
      <div class="nav-dropdown" id="hidden-nav">
        <button class="nav-dropdown-content" @click="goToProfile">
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.66659 4.66667C9.66659 6.13943 8.47268 7.33333 6.99992 7.33333C5.52716 7.33333 4.33325 6.13943 4.33325 4.66667C4.33325 3.19391 5.52716 2 6.99992 2C8.47268 2 9.66659 3.19391 9.66659 4.66667Z"
              stroke="#3A434B"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.99992 9.33337C4.42259 9.33337 2.33325 11.4227 2.33325 14H11.6666C11.6666 11.4227 9.57725 9.33337 6.99992 9.33337Z"
              stroke="#3A434B"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Profile
        </button>
        <div class="arrow-up"></div>
        <button class="nav-dropdown-content" @click="logout">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.33333 10.9446L4.66667 8.27791M4.66667 8.27791L7.33333 5.61125M4.66667 8.27791L14 8.27791M10.6667 10.9446V11.6112C10.6667 12.7158 9.77124 13.6112 8.66667 13.6112H4C2.89543 13.6112 2 12.7158 2 11.6112V4.94458C2 3.84001 2.89543 2.94458 4 2.94458H8.66667C9.77124 2.94458 10.6667 3.84001 10.6667 4.94458V5.61125"
              stroke="#3A434B"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Log Out
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import INavbar from "./Navbar";
export default INavbar;
</script>

<style lang="scss" src="./Navbar.scss" scoped></style>
