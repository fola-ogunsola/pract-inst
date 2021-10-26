import format from "date-fns/format";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { mapActions } from "vuex";

export default {
  name: "AdminSingleSupport",
  components: {},
  data: () => ({
    singleSupport: {}
  }),
  mounted() {
    const { id } = this;
    this.getSupportById(id);
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    reply() {
      const { singleSupport } = this
      // eslint-disable-next-line vue/max-len
      return `mailto:${singleSupport.email}?subject=RE: ${singleSupport.emailSubject}&body=%0D%0A%0D%0A%0D%0A----------------------------------------------%0D%0A${singleSupport.emailBody}%0D%0A----------------------------------------------%0D%0A
        `;
    },
    forward() {
      const { singleSupport } = this
      // eslint-disable-next-line vue/max-len
      return `mailto:?subject=RE: ${singleSupport.emailSubject}&body=%0D%0AForwarded%0D%0A%0D%0ASender: ${singleSupport.email}%0D%0A----------------------------------------------%0D%0A${singleSupport.emailBody}%0D%0A----------------------------------------------%0D%0A
        `;
    }
  },

  methods: {
    ...mapActions({
      fetchSingleSupport: "admin/fetchSingleSupport"
    }),
    async getSupportById(id) {
      try {
        const singleSupportfetched = await this.fetchSingleSupport(id);
        if (!singleSupportfetched.error) {
          this.singleSupport = singleSupportfetched;
        } else {
          throw Error(singleSupportfetched.error);
        }
      } catch (error) {
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
