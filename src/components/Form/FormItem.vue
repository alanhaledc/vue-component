<template>
  <div class="form-item">
    <label v-if="label" :class="{ 'form-item-label-required': isRequired }">
      {{ label }}
    </label>
    <div>
      <slot></slot>
      <div v-if="validateState === 'error'" class="form-item-message">
        {{ validateMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
import Emitter from '../../assets/mixins/emitter'

export default {
  name: 'FormItem',
  mixins: [Emitter],
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      validateState: '',
      validateMessage: '',
      isRequired: false
    }
  },

  computed: {
    fieldValue() {
      return this.form.model[this.prop]
    }
  },

  mounted() {
    if (this.prop) {
      this.dispatch('Form', 'on-form-item-add', this) // 缓存组件
      this.initialValue = this.fieldValue
      this.setRules()
    }
  },

  /**
   * 销毁页面时删除缓存
   */
  beforeDestroy() {
    this.dispatch('Form', 'on-form-item-remove', this)
  },

  methods: {
    setRules() {
      const rules = this.getRules()
      if (rules.length) {
        rules.every(rule => (this.isRequired = rule.required))
      }
      this.$on('on-from-blur', this.onFieldBlur)
      this.$on('on-from-change', this.onFieldChange)
    },

    /**
     * 获取 rules
     */
    getRules() {
      let formRules = this.form.rules
      formRules = formRules ? formRules[this.prop] : []
      return [].concat(formRules || [])
    },

    /**
     * 重置数据
     */
    resetField() {
      this.validateState = '' // 校验状态
      this.validateMessage = '' // 校验不通过时提升信息
      this.form.model[this.prop] = this.initialValue // 初始值
    },

    /**
     * 获取对应的 rules
     */
    getFilteredRule(trigger) {
      const rules = this.getRules()
      return rules.filter(
        rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      )
    },

    /**
     * 表单验证方法
     */
    validate(trigger, callback = () => {}) {
      const rules = this.getFilteredRule(trigger)
      console.log(rules)

      if (!rules || rules.length === 0) {
        return true
      }

      this.validateState = 'validating'

      let descriptor = {}
      descriptor[this.prop] = rules

      const validator = new AsyncValidator(descriptor)
      let model = {}

      model[this.prop] = this.fieldValue

      // 验证
      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? 'success' : 'error'
        this.validateMessage = errors ? errors[0].message : ''
        callback(this.validateMessage)
      })
    },

    onFieldBlur() {
      this.validate('blur')
    },

    onFieldChange() {
      this.validate('change')
    }
  }
}
</script>

<style>
.form-item-label-required::before {
  content: '';
  color: red;
}
.form-item-message {
  color: red;
}
</style>