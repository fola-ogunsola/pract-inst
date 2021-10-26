import InputMixin from '@/mixins/input'
export default {
  name: 'IInput',
  mixins: [InputMixin],
  props: {
    type: {
      type: String,
      default: "text",
      validator(value) {
        return [
          "url",
          "text",
          "password",
          "tel",
          "search",
          "number",
          "email",
          "name",
          "date",
          ""
        ].includes(value);
      }
    },
    maxLength: {
      type: Number
    }
  },
  data: () => ({
    inputType: "text",
    eyeOpenPath: `
    M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 
    7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z
    `,
    eyeClosedPath: `
    M1 11c1.274-4.057 5.065-7 9.542-7 4.478 0 8.268 2.943 9.542 7-1.274
    4.057-5.064 7-9.542 7C6.065 18 2.274 15.057 
    1 11zm13.542 0a4 4 0 11-8 0 4 4 0 018 0z
    `
  }),
  watch: {
    type: {
      handler(val) {
        this.inputType = val === 'number' ? 'tel' : val;
      },
      immediate: true
    },
    innerValue(value) {
      this.$emit("input", value);
      this.$emit("change", value);
    },
    value(val) {
      this.innerValue = val;
    }
  },
  methods: {
    validateKeyPress($event) {
      const { type, maxLength } = this;
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
      if (type === 'tel' || type === 'number') {
        if (
          keyCode < 43 || keyCode > 57 || keyCode === 173 || 
          ($event.target.value && $event.target.value.length >= maxLength )
          ) { // 46 is dot
          $event.preventDefault();
          return false;
        }
        return true;
      }
      return true;
    }
  }
}
