<template>
  <ValidationProvider
    v-slot="{ errors, ariaInput, ariaMsg }"
    tag="div"
    :vid="vid"
    :rules="rules"
    :name="name"
  >
    <label :for="name" class="form__label" v-if="label">{{ label }}</label>
    <input
      :id="id"
      :ref="inputRef"
      :name="name"
      :class="{ 'form__input--error': showError || (errors && errors[0]) }"
      :type="inputType"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      class="form__input"
      v-model="innerValue"
      v-bind="ariaInput"
      v-on="$listeners"
      @keypress="validateKeyPress"
    >
    <span
      class="form__input__icon password__icon"
      v-if="type === 'password'"
      @click="inputType = inputType === 'password' ? 'text' : 'password'"
    >
      <svg width="20" height="20" fill="none" v-if="inputType === 'password'">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" fill="#6D7A98" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          :d="eyeOpenPath"
          fill="#6D7A98"
        />
      </svg>
      <svg width="20" height="20" fill="none" v-else>
        <g clip-path="url(#clip0)">
          <path d="M10.542 13a2 2 0 100-4 2 2 0 000 4z" fill="#6D7A98" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            :d="eyeClosedPath"
            fill="#6D7A98"
          />
          <path
            d="M3.121 2.707a1 1 0 011.414 0L18.678 16.85a1 1 0 010 1.415l-.707.707L2.414 3.414l.707-.707z"
            fill="#6D7A98"
          />
          <path
            d="M17.264 19.678a1 1 0 01-1.415 0L1.707 5.536a1 1 0 010-1.415l.707-.707 15.557 15.557-.707.707z"
            fill="#F7F9FB"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill="#F7F9FB" d="M0 0h20v20H0z" />
          </clipPath>
        </defs>
      </svg>
    </span>
    <span
      v-if="showError || (errors && errors[0])"
      class="form__error"
      v-bind="ariaMsg"
    >{{ customError || (errors && errors[0]) }}</span
    >
    <span v-if="helpText" class="form__helper" v-bind="ariaMsg">{{
      helpText
    }}</span>
  </ValidationProvider>
</template>

<script>
import IInput from "./Input";
export default IInput;
</script>
