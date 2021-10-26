import { IToast } from "@/components";
import EventBus from "@/utils/event-bus";

export default {
  install(Vue) {
    Vue.component('IToast', IToast);
    const toast = {
      show(options) {
        EventBus.$emit("addNotification", options);
      }
    };
    Vue.prototype.$toast = toast;
  },
};
