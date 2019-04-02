<template>
  <label>
    <span>
      <input
        v-if="hasGroup"
        type="checkbox"
        :disabled="disabled"
        :value="label"
        v-model="model"
        @change="change"
      />
      <input
        v-else
        type="checkbox"
        :disabled="disabled"
        :checked="currentValue"
        @change="change"
      />
    </span>
    <slot></slot>
  </label>
</template>

<script>
import Emitter from '../../assets/mixins/emitter'
import { findComponentUpward } from '../../assets/utils/assist'

export default {
  name: 'Checkbox',
  mixins: [Emitter],
  props: {
    // 标识
    label: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    // 扩展属性
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    // 扩展属性
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value,
      model: [], // 多个 checkbox 绑定值必须是数组，详情见 Vue 官方文档
      hasGroup: false,
      parent: null
    }
  },
  mounted() {
    this.parent = findComponentUpward(this, 'CheckboxGroup') // 找到父组件

    if (this.parent) this.hasGroup = true // 找到后设置为 true

    if (this.hasGroup) {
      this.parent.updateModel(true) // 调用父组件的方法更新子组件的 model 值
    } else {
      this.updateModel() // 子组件自己更新
    }
  },
  watch: {
    // 监听 value，更新 currentValue
    value(val) {
      // val 的值必须和扩展属性一致
      if (val === this.trueValue || val === this.falseValue) {
        this.updateModel()
      } else {
        throw 'Value should be trueValue or falseValue'
      }
    }
  },
  methods: {
    change(e) {
      if (this.disabled) return

      const checked = e.target.checked
      this.currentValue = checked // 更新

      const value = checked ? this.trueValue : this.falseValue
      this.$emit('input', value) // 更新值 => v-model 传入的值

      if (this.hasGroup) {
        this.parent.change(this.model) // 调用父组件的 change 方法，用子组件的 model 更新父组件的 model
      } else {
        this.$emit('on-change', value)
        this.dispatch('FormItem', 'on-from-change', value) // 派发事件给 FormItem 组件
      }
    },

    // 更新值
    updateModel() {
      this.currentValue = this.value === this.trueValue
    }
  }
}
</script>

<style>
</style>
