/* eslint-disable vue/max-len */
import *  as rules from "vee-validate/dist/rules";
import { extend } from "vee-validate";
import { messages } from 'vee-validate/dist/locale/en.json';


Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

extend('password', {
  message: 'Your password must be at least 8 characters long',
  validate(value) {
    return value.match(/.{8,}$/gm)
  }
})

extend('confirm', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'Passwords do not match'
});

extend('phone', {
  message: 'Please enter a valid phone number',
  validate(value) {
    return value.match(/^(?=.*[0-9+-]).{10,15}$/gm)
  }
})
