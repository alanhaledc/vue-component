<template>
  <div>
    <h3>test Tree</h3>
    <Tree
      :data="data"
      :show-checkbox="showCheckbox"
      @on-toggle-expand="handleToggleExpand"
      @on-check-change="handleCheckChange"
    ></Tree>
  </div>
</template>

<script>
import Tree from '../components/Tree/Tree'

export default {
  components: {
    Tree
  },
  data() {
    return {
      showCheckbox: true,
      data: [
        {
          title: 'parent 1-1',
          expand: true,
          children: [
            {
              title: 'leaf 1-1-1'
            },
            {
              title: 'leaf 1-1-2'
            }
          ]
        },
        {
          title: 'parent 1-2',
          expand: true,
          children: [
            {
              title: 'leaf 1-2-1'
            },
            {
              title: 'leaf 1-2-2'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleToggleExpand(data) {
      console.log(data)
    },

    handleCheckChange(data) {
      console.log(data)
    }
  }
}
</script>

<style>
</style>
