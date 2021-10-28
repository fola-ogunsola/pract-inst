<template>
  <div class="select">
    <label :for="name" class="form__label">{{ label }}</label>
    <ValidationProvider
      v-slot="{ errors, ariaInput, ariaMsg }"
      slim
      :rules="rules"
      :name="name" >
      <div :class="{'form__error__wrapper' : errors && errors[0]}">
        <span
          class="form__error"
          v-bind="ariaMsg" >
          {{ customError || (errors && errors[0]) }}
        </span>
        <input type="text" class="visually-hidden" v-model="innerValue" v-bind="ariaInput">
      </div>
    </ValidationProvider>
    <select 
      :id="id"
      :name="name"
      :ref="inputRef"
      :disabled="disabled"
      :readonly="readonly"
      :class="{
        'form__input--light': !value
      }"
      class="form__input"
      @change="setValue($event.target.value)"
      v-on="$listeners"
    >
      <option value="" disabled :selected="!innerValue">
        {{placeholder}}
      </option>
      <option 
        v-for="{ value, label } in options"
        :value="value"
        :key="value"
        :selected="innerValue === value"
      >
        {{ label }}
      </option>
    </select>
    <span class="form__input__icon">
      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.707 15.293a1 1 0 01-1.414 0l-3.586-3.586c-.63-.63-.184-1.707.707-1.707h7.172c.89 0 1.337 1.077.707 1.707l-3.586 3.586z" fill="#6D7A98"/>
      </svg>
    </span>
  </div>
</template>

<script>
import ISelect from "./Select";
export default ISelect;
</script>