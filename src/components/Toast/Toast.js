import EventBus from "@/utils/event-bus";

export default {
  name: 'IToast',
  data: () => ({
    notifications: [],
    endList: false
  }),
  created() {
    EventBus.$on("addNotification", (options) => {
      this.addNotification(options)
    });
  },
  methods: {
    removeToast(id) {
      let index = this.notifications.findIndex((notification) => notification.id === id)
      if(this.notifications.length <= 1) {
        this.endList = true
        setTimeout(() => {
          this.notifications.splice(index, 1);
          this.endList = false
        }, 500)
      } else {
        this.notifications.splice(index, 1);
      }
    },
    addNotification(options) {
      const { message, type, fade } = options;
      const id = Math.floor(Math.random() * 90000) + 10000;
      this.notifications.push({
        message: message,
        type: type,
        id
      });
      if (fade) {
        setTimeout(() => {
          this.removeToast(id);
        }, fade);
      }
    }
  },
}