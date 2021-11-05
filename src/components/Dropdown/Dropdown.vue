<template>
  <div :class="['dropdown', isTable ? 'dropdown--table': '', form ? 'dropdown--form' : '', isFilter ? 'filter-dropdown' : '']">
    <button class="dropdown__button" @click="toggleDropdown" type="button">
      <slot>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
          <path fill="#3A434B" d="M10 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM10 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>
        </svg>
      </slot>
    </button>
    <div :class="['dropdown__menu', show ? 'show': '', 'filter-dropdown__menu', show ? 'show' : '']" >
      <ul class="dropdown__list">
        <li class="dropdown__item" v-for="option in options" :key="option.value">
          <input
            :name="id + option.value"
            :id="id + option.value"
            type="radio"
            :value="option.value"
            v-on="$listeners"
            v-model="selectedOption"
          />
          <label class="dropdown__item-label" :for="id + option.value" v-html="option.label"></label>
        </li>
      </ul>
    </div>
    <div class="overlay" v-if="show" @click="show = false"></div>

  </div>
</template>


<script>
import IDropdown from './Dropdown'
export default IDropdown
</script>

<style lang="scss" scoped src="./Dropdown.scss"></style>