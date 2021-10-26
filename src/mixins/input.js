import { ValidationProvider } from 'vee-validate'
import '@/utils/validators'

export default {
  components: {
    ValidationProvider
  },
  props: {
    vid: {
      type: String,
      default: undefined
    },
    name: {
      type: String,
      required: true
    },
    inputRef: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: ""
    },
    helpText: {
      type: String,
      default: ""
    },
    rules: {
      type: [Object, String],
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: null,
      default: ""
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    customError: {
      type: String,
      default: ''
    },
    showError: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    innerValue: "",
  }),
  computed: {
    id() {
      return (this.name && this.name.replace(/[^\w\s]|\s/gi, ''))
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
}