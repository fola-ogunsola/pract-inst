<template>
  <div id="toast-group">
    <transition-group
      name="list"
      tag="div"
      class="toast"
      v-if="notifications.length"
    >
      <template v-for="{ message, type, id } in notifications">
        <div
          :class="[
            'toast__item',
            type ? `toast__item--${type}` : '',
            endList ? `end` : '',
          ]"
          :key="id"
        >
          <div class="toast__message">
            <span class="toast__icon">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  v-if="type === 'warning'"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM7 11a1 1 0 100 2h10a1 1 0 100-2H7z"
                />
                <path
                  v-else-if="type === 'error'"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm4.243-14.243a1 1 0 010 1.415L13.414 12l2.829 2.828a1 1 0 11-1.415 1.415L12 13.414l-2.828 2.829a1 1 0 01-1.415-1.415L10.586 12 7.757 9.17a1 1 0 011.415-1.414L12 10.586l2.828-2.829a1 1 0 011.415 0z"
                />
                <path
                  v-else
                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.704-6.707a1 1 0 001.414 0l5.656-5.657a1 1 0 00-1.414-1.414l-4.949 4.95-2.122-2.122a1 1 0 10-1.414 1.414l2.829 2.829z"
                />
              </svg>
            </span>
            <p>{{ message }}</p>
          </div>
          <button
            class="toast__button"
            @click="removeToast(id)"
            :id="`${id}-delete`"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 8.822l3.536-3.536a.833.833 0 011.178 1.178L11.178 10l3.536 3.536a.833.833 0 01-1.178 1.178L10 11.178l-3.536 3.536a.833.833 0 01-1.178-1.178L8.822 10 5.286 6.464a.833.833 0 011.178-1.178L10 8.822z"
              />
            </svg>
          </button>
        </div>
      </template>
    </transition-group>
  </div>
</template>

<script>
import IToast from "./Toast";
export default IToast;
</script>
<style lang="scss" src="./Toast.scss" scoped></style>