<template>
  <div class="container text-center empty-state">
    <svg xmlns="http://www.w3.org/2000/svg" width="101" height="101" fill="none">
      <g clip-path="url(#clip0)">
        <path fill="#00AD94" d="M96.315 36.227H38.949l54.663 57.535 7.27-51.82c.662-2.928-1.565-5.715-4.567-5.715z"/>
        <path fill="#EFEDEE" d="M78.892 7.237H24.791a6.033 6.033 0 00-6.033 6.033v70.725h66.167V13.27c0-3.331-2.7-6.032-6.033-6.032z"/>
        <path fill="#D4D2D3" d="M84.927 34.776H26.223v26.561h58.704v-26.56z"/>
        <path fill="#3AC7B4" d="M83.183 47.64a6.992 6.992 0 00-6.82-5.45H31.361l-.913-4.036a4.333 4.333 0 00-4.226-3.378H4.334c-2.778 0-4.838 2.578-4.226 5.288l10.978 48.552a6.602 6.602 0 006.44 5.146h76.086L83.184 47.64z"/>
        <path fill="#3A484A" d="M38.512 24.052a1.524 1.524 0 01-1.524-1.524v-2.413a1.524 1.524 0 113.048 0v2.413c0 .841-.682 1.524-1.524 1.524zM65.17 24.051a1.524 1.524 0 01-1.523-1.524v-2.412a1.524 1.524 0 113.048 0v2.412c0 .842-.682 1.524-1.524 1.524zM51.841 25.834c-2.015 0-3.907-.842-5.19-2.31a1.524 1.524 0 112.295-2.006c.705.806 1.76 1.268 2.895 1.268 1.136 0 2.19-.462 2.895-1.268a1.524 1.524 0 112.295 2.007c-1.283 1.467-3.175 2.309-5.19 2.309z"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h100.999v100.999H0z"/>
        </clipPath>
      </defs>
    </svg>
    <p class="empty-state__text">{{message}}</p>
  </div>
</template>
<script>
export default {
  name: 'EmptyState',
  props: {
    message: {
      type: String,
      default: 'No records found'
    }
  }
}
</script>
<style lang="scss" scoped>
.empty-state {
  margin:auto;
  &__text {
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 600;
  }
}
</style>