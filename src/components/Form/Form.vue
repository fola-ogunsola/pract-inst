<template>
  <ValidationObserver
    v-slot="{ passes, reset }"
    :ref="formRef"
    tag="div"
    class="form">
    <form 
      @submit.prevent="passes(onSubmit)"
      @reset.prevent="reset">
      <slot :reset="reset"/>
    </form>
  </ValidationObserver>
</template>

<script>
import IForm from './Form'
export default IForm
</script>

