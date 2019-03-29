<template>
  <div class="test-form">
    <h3>具有数据校验功能的表单 - Form</h3>
    <m-form ref="form" :model="formValidate" :rules="ruleValidate">
      <m-form-item label="用户名" prop="name">
        <m-input v-model="formValidate.name"></m-input>
      </m-form-item>
      <m-form-item label="邮箱" prop="email">
        <m-input v-model="formValidate.email"></m-input>
      </m-form-item>
    </m-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
  </div>
</template>

<script>
import MForm from '../components/Form/Form'
import MFormItem from '../components/Form/FormItem'
import MInput from '../components/Input/Input'

export default {
  components: {
    MForm,
    MFormItem,
    MInput
  },
  data() {
    return {
      formValidate: {
        name: '',
        email: ''
      },
      ruleValidate: {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          window.alert('提交成功')
        } else {
          window.alert('表单验证失败')
        }
      })
    },
    handleReset() {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style>
</style>
