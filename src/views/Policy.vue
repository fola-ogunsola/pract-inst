<template>
  <div>
    <page-header>Privacy Policy</page-header>
    <div class="container">
      <div class="content">
        <h2 class="title">Introduction</h2>
        <p class="description">
          Product design dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam dolor sit amet, dolores eos qui
          ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quiaolor sit amet, consectetur, adipisci velit, sed qui
          aliqua.
        </p>
        <p class="description">
          Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae inventore veritatis architecto beatae vitae dicta sunt
          explicabo. Minim veniam, quis nostrud exercitation ullamco laboris
          nisi utert aliquip exeampl commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore euder fugiat
          nullape pariatur. perspiciatis unde omnis iste natus error sit Nemo
          enim ipsam voluptatem quia voluptas sitreart aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque quisquam est, qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore
        </p>
        <h2 class="title">Privacy One</h2>
        <p class="description">
          Product design dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam dolor sit amet, dolores eos qui
          ratione voluptatem sequi nesciunt.
        </p>
        <p class="description">
          Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae inventore veritatis architecto beatae vitae dicta sunt
          explicabo. Minim veniam, quis nostrud exercitation ullamco laboris
          nisi utert aliquip exeampl commodo consequat.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { PageHeader } from "@/components";
export default {
  name: "Policy",
  components: {
    PageHeader,
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin: 10rem 0 18rem 0;
  padding: 0 14rem;
  .title {
    font-family: Poppins;
    font-weight: 600;
    font-size: 2.6rem;
    line-height: 4rem;
    letter-spacing: 0.01rem;
    color: $dark;
    margin-bottom: 2.4rem;
  }
  .description {
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 3.2rem;
    color: #6d7a98;
    margin-bottom: 5rem;
  }
}
</style>