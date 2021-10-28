import InputMixin from '@/mixins/input'
export default {
  name: 'ISelect',
  mixins: [InputMixin],
  props: {
    options: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    setValue(value) {
      this.innerValue = value
      this.$emit('input', value);
    }
  },
  watch: {
    value(val) {
      this.innerValue = val
    }
  }
}