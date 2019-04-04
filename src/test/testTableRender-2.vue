<template>
  <div>
    <m-table :columns="columns" :data="data" ref="table">
      <template #name="{ row, index }">
        <input type="text" v-model="editName" v-if="editIndex === index" />
        <span v-else>{{ row.name }}</span>
      </template>

      <template #age="{ row, index }">
        <input type="text" v-model="editAge" v-if="editIndex === index" />
        <span v-else>{{ row.age }}</span>
      </template>

      <template #birthday="{ row, index }">
        <input type="text" v-model="editBirthday" v-if="editIndex === index" />
        <span v-else>{{ getBirthday(row.birthday) }}</span>
      </template>

      <template #address="{ row, index }">
        <input type="text" v-model="editAddress" v-if="editIndex === index" />
        <span v-else>{{ row.address }}</span>
      </template>

      <template #action="{ row, index }">
        <div v-if="editIndex === index">
          <button @click="handleSave(index)">保存</button>
          <button @click="editIndex = -1">取消</button>
        </div>
        <div v-else>
          <button @click="handleEdit(row, index)">操作</button>
        </div>
      </template>
    </m-table>
  </div>
</template>

<script>
// 组件 table-render.vue 不变， 只在使用层面上进行修改
// slot 方案二：组件不支持 scopedSlots。
// 但是可以在使用层面添加 scopedSlots来使用。
import MTable from '../components/Table/Table-Render'

export default {
  components: {
    MTable
  },
  data() {
    return {
      columns: [
        {
          title: '姓名',
          key: 'name',
          render: (h, { row, column, index }) => {
            return h(
              'div',
              this.$refs.table.$scopedSlots.name({
                row,
                column,
                index
              })
            )
          }
        },
        {
          title: '年龄',
          key: 'age',
          render: (h, { row, column, index }) => {
            return h(
              'div',
              this.$refs.table.$scopedSlots.age({
                row,
                column,
                index
              })
            )
          }
        },
        {
          title: '出生日期',
          key: 'birthday',
          render: (h, { row, column, index }) => {
            return h(
              'div',
              this.$refs.table.$scopedSlots.birthday({
                row,
                column,
                index
              })
            )
          }
        },
        {
          title: '地址',
          key: 'address',
          render: (h, { row, column, index }) => {
            return h(
              'div',
              this.$refs.table.$scopedSlots.address({
                row,
                column,
                index
              })
            )
          }
        },
        {
          title: '操作',
          render: (h, { row, column, index }) => {
            return h(
              'div',
              this.$refs.table.$scopedSlots.action({
                row,
                column,
                index
              })
            )
          }
        }
      ],
      data: [],
      editName: '',
      editAge: '',
      editBirthday: '',
      editAddress: '',
      editIndex: -1
    }
  },
  mounted() {
    // 需要在挂载后赋值，不然无法获取 data 的数据
    this.data = [
      {
        name: '王小明',
        age: 18,
        birthday: '919526400000',
        address: '北京市朝阳区芍药居'
      },
      {
        name: '张小刚',
        age: 25,
        birthday: '696096000000',
        address: '北京市海淀区西二旗'
      },
      {
        name: '李小红',
        age: 30,
        birthday: '563472000000',
        address: '上海市浦东新区世纪大道'
      },
      {
        name: '周小伟',
        age: 26,
        birthday: '687024000000',
        address: '深圳市南山区深南大道'
      }
    ]
  },
  methods: {
    handleEdit(row, index) {
      this.editName = row.name
      this.editAge = row.age
      this.editBirthday = row.birthday
      this.editAddress = row.address
      this.editIndex = index
    },
    handleSave(index) {
      this.data[index].name = this.editName
      this.data[index].age = this.editAge
      this.data[index].birthday = this.editBirthday
      this.data[index].address = this.editAddress
      this.editIndex = -1
    },
    getBirthday(birthday) {
      const date = new Date(parseInt(birthday))
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      return `${year}-${month}-${day}`
    }
  }
}
</script>

<style>
</style>
