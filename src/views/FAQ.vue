<template>
  <div>
    <page-header>Frequently Asked Questions</page-header>
    <div class="container">
      <div class="content">
        <i-faq />
        <i-faq />
        <i-faq />
        <i-faq />
        <i-faq />
        <i-faq />
      </div>
    </div>
  </div>
</template>

<script>
import { PageHeader, IFaq } from "@/components";
export default {
  name: "FAQ",
  components: {
    PageHeader,
    IFaq,
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin: 10rem 0 18rem 0;
  padding: 0 14rem;

  @media (max-width: 768px) {
    padding: 0 5%;
  }

  .title {
    font-family: Poppins;
    font-weight: 600;
    font-size: 2.6rem;
    line-height: 4rem;
    letter-spacing: 0.01rem;
    color: $dark;
    margin-bottom: 2.4rem;
    padding-top: 3.2rem;
    border-top: 1px solid #dde5ee;
  }
  .description {
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 3.2rem;
    color: #6d7a98;
    margin-bottom: 3rem;
  }
  .email-span {
    color: $blue;
  }
  ul {
    list-style: none;
  }

  ul li::before {
    content: "\2022";
    color: $dark;
    font-weight: 600;
    display: inline-block;
    width: 1em;
    height: 1rem;
  }
}
</style>