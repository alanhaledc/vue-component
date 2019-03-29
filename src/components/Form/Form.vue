<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'Form',
  provide() {
    return {
      form: this // 提供自己给子组件使用
    }
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  data() {
    return {
      fields: []
    }
  },
  created() {
    // 缓存 item 组件
    this.$on('on-form-item-add', field => {
      if (field) this.fields.push(field)
    })

    // 删除 item 组件
    this.$on('on-form-item-remove', field => {
      const index = this.fields.indexOf(field)
      if (field.prop) this.fields.splice(index, 1)
    })
  },
  methods: {
    /**
     * 重置全部数据
     */
    resetFields() {
      this.fields.forEach(field => field.resetField())
    },

    /**
     * 验证全部 item
     */
    validate(callback) {
      return new Promise(reslove => {
        let valid = true
        let count = 0
        this.fields.forEach(field => {
          field.validate('', errors => {
            if (errors) valid = false
            if (++count === this.fields.length) {
              reslove(valid)
              if (typeof callback === 'function') callback(valid)
            }
          })
        })
      })
    }
  }
}
</script>

<style>
</style>
