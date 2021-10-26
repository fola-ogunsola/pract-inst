<template>
  <div class="pagination">
    <p class="pagination__details">
      Showing <span>
        Page {{currentPage}} of {{totalPages}}
      </span>
    </p>
    <div class="pagination__menu">
      <button
        class="pagination__button"
        :disabled="noPreviousPage"
        @click="currentPage -= 1">
        Prev
      </button>
      <div class="pagination__menu first" first v-if="showFirstPage">
        <button class="pagination__button" @click="currentPage = 1">1</button>
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#6D7A98"/>
        </svg>
      </div>
      <button 
        v-for="page in pages"
        :class="['pagination__button', page === currentPage ? 'active' : '']"
        :key="page"
        @click="currentPage = page">
        {{page}}
      </button>
      <template v-if="showLastPage">
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#6D7A98"/>
        </svg>
        <button
          class="pagination__button"
          @click="currentPage = totalPages">
          {{ totalPages }}
        </button>
      </template>
      <button
        class="pagination__button"
        :disabled="noNextPage"
        @click="currentPage += 1">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import IPagination from "./Pagination";
export default IPagination
</script>

<style lang="scss" scoped src="./Pagination.scss"></style>