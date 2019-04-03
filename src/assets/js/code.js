const codeStr = `
  <template>
    <div>
      <input type="text" v-model="message">
      <h3 class="title">{{ message }}</h3>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          message: 'hello display.vue'
        }
      }
    }
  </script>
  <style>
    .title {
      color: red;
    }
  </style>
`

export default codeStr
