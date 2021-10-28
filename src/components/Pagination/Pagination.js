export default {
  name: 'IPagination',
  props: {
    totalPages: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      currentPage: this.value
    }
  },
  computed: {
    noPreviousPage() {
      const { currentPage, totalPages}  = this;
      return currentPage <= 1 || totalPages <= 1;
    },
    noNextPage() {
      const { currentPage, totalPages } = this;
      return currentPage === totalPages;
    },
    pages() {
      const { currentPage, totalPages } = this;
      let pageDifference = totalPages - currentPage;
      let startPoint = totalPages >= 5 ? pageDifference < 5 ? totalPages - 4 : currentPage : 1;
      let pagesLength = totalPages > 5 ? pageDifference < 5 ? 5 : 3 : totalPages

      let pages = [];

      if(totalPages > 1) {
        while (pages.length < pagesLength) {
          pages.push(startPoint);
          startPoint++;
        }
        return pages
      }
      return [ totalPages ];
    },
    showLastPage() {
      const { pages, totalPages } = this
      return !pages.includes(totalPages);
    },
    showFirstPage() {
      const { pages } = this
      return !pages.includes(1);
    }
  },
  watch: {
    currentPage(val) {
      this.$emit('input', val)
    },
    value(val) {
      this.currentPage = val;
    }
  }
}