import format from "date-fns/format";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { mapActions } from "vuex";

export default {
  name: "AdminSingleDemo",
  components: {},
  data: () => ({
    singleDemo: {},
    isLoading: false
  }),
  mounted() {
    const { id } = this;
    this.getDemoById(id);
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    reply() {
      const { singleDemo } = this
      // eslint-disable-next-line vue/max-len
      return `mailto:${singleDemo.email}?subject=RE: Demo Request &body=%0D%0A%0D%0A%0D%0A----------------------------------------------%0D%0A${singleDemo.message}%0D%0A----------------------------------------------%0D%0A
        `;
    },
    forward() {
      const { singleDemo } = this
      // eslint-disable-next-line vue/max-len
      return `mailto:?subject=RE: Demo Request&body=%0D%0AForwarded%0D%0A%0D%0ASender: ${singleDemo.email}%0D%0A----------------------------------------------%0D%0A${singleDemo.message}%0D%0A----------------------------------------------%0D%0A
        `;
    }
  },

  methods: {
    ...mapActions({
      fetchSingleDemo: "demo/fetchSingleDemo",
      approveDemo: "demo/approveDemo"
    }),
    async getDemoById(id) {
      try {
        const singleDemofetched = await this.fetchSingleDemo(id);
        if (!singleDemofetched.error) {
          this.singleDemo = singleDemofetched;
        } else {
          throw Error(singleDemofetched.error);
        }
      } catch (error) {
        this.$toast.show({
          message: error,
          type: "error",
          fade: 3000
        });
      }
    },
    async updateDemo() {
      this.isLoading = true
      try {
        const isUpdated = await this.approveDemo(this.id);
        if (!isUpdated.error) {
          this.$toast.show({
            message: 'Demo approved successfully',
            type: "success",
            fade: 3000
          });
          this.getDemoById(this.id);
          this.isLoading = false;
          return isUpdated;
        } else {
          throw Error(isUpdated.error);
        }
      } catch (error) {
        this.isLoading = false;
        this.$toast.show({
          message: error,
          type: "error",
          fade: 3000
        });
      }
    },
  },
  filters: {
    formatDate(value) {
      if(!value) return '-'
      const item = new Date(value);
      const weekDay = format(item, "eee");
      const date = format(item, "PP").split(",")[0]
      const time = format(item, "p")
      const distance = formatDistanceToNow(item, {
        addSuffix: true
      }).replace('about ', '');
      return `${weekDay} , ${date} , ${time} ,  (${distance})`;
    }
  }
};
