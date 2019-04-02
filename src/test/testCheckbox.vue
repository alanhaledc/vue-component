<template>
  <div class="test-checkbox">
    <m-checkbox v-model="single">单独选项</m-checkbox>
    <m-checkbox-group v-model="multiple">
      <m-checkbox label="option1">选项1</m-checkbox>
      <m-checkbox label="option2" :disabled="disabled">选项2</m-checkbox>
      <m-checkbox label="option3">选项3</m-checkbox>
      <m-checkbox label="option4">选项4</m-checkbox>
    </m-checkbox-group>
  </div>
</template>

<script>
import MCheckbox from '../components/Checkbox/Checkbox'
import MCheckboxGroup from '../components/Checkbox/CheckboxGroup'

export default {
  components: {
    MCheckbox,
    MCheckboxGroup
  },
  data() {
    return {
      single: true,
      multiple: ['option1', 'option3'],
      disabled: true
    }
  }
}
</script>

<style>
</style>
