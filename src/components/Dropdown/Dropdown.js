
export default {
  name: 'IDropdown',
  data: () => ({
    test: '',
    show: false
  }),
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      required: true
    },
    isTable: {
      type: Boolean,
      default: false
    },
    form: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    selectedOption: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
        this.$emit('change', value);
      }
    },
    id() {
      return Math.floor(Math.random() * 90000) + 10000;
    }
  },
  watch: {
    selectedOption() {
      this.show = false
    }
  },
  methods: {
    toggleDropdown() {
      this.show = !this.show
    }
  }
}