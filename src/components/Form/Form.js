import { ValidationObserver  } from "vee-validate";

export default {
  name: 'IForm',
  components: {
    ValidationObserver
  },
  props: {
    formRef: {
      type: String,
      required: false
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit')
    }
  }
}