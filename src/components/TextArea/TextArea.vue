<template>
  <ValidationProvider
    v-slot="{ errors, ariaInput, ariaMsg }"
    tag="div"
    :vid="vid"
    :rules="rules"
    :name="name"
  >
    <label :for="name" class="form__label" v-if="label">{{ label }}</label>
    <textarea
      :id="id"
      :ref="inputRef"
      :name="name"
      :class="{ 'form__input--error': showError || (errors && errors[0]) }"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      class="form__input" 
      v-model="innerValue"
      v-bind="ariaInput"
      v-on="$listeners"
      :rows="rows">
    </textarea>
    <span
      v-if="showError || (errors && errors[0])"
      class="form__error"
      v-bind="ariaMsg"
    >{{ customError || (errors && errors[0]) }}</span>
  </ValidationProvider>
</template>
<script>
import ITextArea from "./TextArea";
export default ITextArea;
</script>