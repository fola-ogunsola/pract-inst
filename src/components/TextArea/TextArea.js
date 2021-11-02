import InputMixin from '@/mixins/input'
export default {
  name: 'ITextArea',
  mixins: [InputMixin],
  props: {
    rows: {
      type: Number,
      default: 2
    }
  },
  watch: {
    innerValue(value) {
      this.$emit("input", value);
      this.$emit("change", value);
    },
    value(val) {
      this.innerValue = val;
    }
  }
}