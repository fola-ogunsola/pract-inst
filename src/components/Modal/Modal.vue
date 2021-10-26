<template>
  <div class="modal" :class="size">
    <button @click="$emit('close')" class="close-btn">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.99999 5.58623L11.95 0.63623L13.364 2.05023L8.41398 7.00023L13.364 11.9502L11.95 13.3642L6.99999 8.41423L2.04999 13.3642L0.635986 11.9502L5.58599 7.00023L0.635986 2.05023L2.04999 0.63623L6.99999 5.58623Z"
          fill="#3A434B"
        />
      </svg>
    </button>

    <div class="modal-content">
      <div class="header">
        <button @click="$emit('close')" class="arrow-btn">
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
        <p class="title">
          <slot name="header"></slot>
        </p>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import IModal from "./Modal";
export default IModal;
</script>

<style lang="scss" src="./Modal.scss" scoped></style>
