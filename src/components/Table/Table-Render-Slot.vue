<template>
  <table>
    <!-- 使用了自定义的插槽组件，允许组件在使用层面加上插槽 -->
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.title">{{ col.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in data" :key="rowIndex">
        <td v-for="col in columns" :key="col.title">
          <template v-if="'render' in col">
            <Render
              :row="row"
              :column="col"
              :index="rowIndex"
              :render="col.render"
            ></Render>
          </template>
          <template v-else-if="'slot' in col">
            <!-- 自定义插槽 -->
            <SlotScope :row="row" :column="col" :index="rowIndex"></SlotScope>
          </template>
          <template v-else>{{ row[col.key] }}</template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Render from './render'
import SlotScope from './slot'

export default {
  name: 'Table',
  components: {
    Render,
    SlotScope
  },
  provide() {
    return {
      tableRoot: this // 提供本身给子组件
    }
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #e9e9e9;
}
table th {
  background: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
  white-space: nowrap;
}
table td,
table th {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: center;
}
</style>
