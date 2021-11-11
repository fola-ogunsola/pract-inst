<template>
  <div class="modal">
    <div class="modal-content">
      <div class="header">
        <h2 class="title">
          Request a Demo
        </h2>
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
      </div>
      <div class="modal-body">
      <i-form @submit="createDemo" ref="demo">
        <div class="form__grid">
          <i-input
          label="Full Name"
          name="name"
          type="text"
          rules="required"
          placeholder="Full Name"
          v-model="demo.fullName"
        />
        <i-input
          label="Phone Number"
          name="phone"
          type="tel"
          rules="required|phone"
          placeholder="Phone Number"
          v-model="demo.phoneNumber"
        />
        </div>
        <i-input
          label="Email Address"
          name="email"
          type="email"
          rules="required"
          placeholder="Email Address"
          v-model="demo.email"
        />
        <i-input
          label="Subject"
          name="subject"
          type="text"
          rules="required"
          placeholder="Enter subject here..."
          v-model="demo.subject"
        />
        <i-text-area
          name="message"
          :rows="5"
          rules="required"
          label="Message"
          placeholder="Type message here.."
          v-model="demo.message"
          />
          <br>
          <i-button submit :loading="isLoading" class="ml-auto" size="large" >Send</i-button>
          <br>
          <br>
      </i-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "Websitemodal",
  data: () => ({
    demo: {},
    isLoading: false,
    showModal: false
  }),

  methods: {
    ...mapActions({
      addDemo: "demo/addDemo"
    }),
    async createDemo() {
      const { demo } = this;
      this.isLoading = true;
      try {
        const demoCreated = await this.addDemo(demo);
        if(!demoCreated.error) {
          this.isLoading = false;
          this.$toast.show({
            message: 'Support Created Successfully',
            type: "success",
            fade: 3000
          });
          this.$emit('close')
          this.demo = {}
          this.$refs.demo.$children[0].reset()
          this.showModal = false
        } else {
          throw Error(demoCreated.error)
        }
      } catch (error) {
        this.isLoading = false;
        this.$toast.show({
            message: error,
            type: "error",
            fade: 3000
          });
      }
    }
  },

}
</script>

<style lang="scss" scoped>
.modal {
  height: 100vh;
  overflow: auto;
  background-color: rgba(#0d0f11, 0.3);
  backdrop-filter: blur(1px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000;

  .modal-content {
    position: absolute;
    top: 0;
    width: 100%;
    overflow: auto;
    background-color: $white;
    z-index: inherit;
    @include mq(md) {
      max-width: 67rem;
      border-radius: 0.8rem;
    }
    .header {
      width: 100%;
      height: 8rem;
      background-color: $transparent;
      padding: 3.2rem 0 2.4rem 3.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
      border-radius: 0.8rem;
      @include mq(md){
          background-color: #f4f5f6;
      }
      .arrow-btn {
        display: flex;
        border: none;
        background-color: $transparent;
        margin-right: 3.3rem;
        @include mq(md) {
          display: none;
        }
      }
      title {
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 2.4rem;
        color: $dark;
      }
    }
    .modal-body {
      padding: 2.4rem 3.2rem 0 3.2rem;
      overflow: auto;
      display: flex;
      flex-direction: column;
    }
  }
  .close-btn {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2.4rem;
    cursor: pointer;
    border: none;
  }
}

</style>