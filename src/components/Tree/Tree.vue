<template>
  <div class="tree">
    <Node
      v-for="(item, index) in cloneData"
      :key="index"
      :data="item"
      :show-checbox="showCheckbox"
    ></Node>
  </div>
</template>

<script>
import Node from './Node'
import { cloneDeep } from '../../assets/utils/assist'

export default {
  name: 'Tree',
  components: {
    Node
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cloneData: []
    }
  },
  created() {
    this.rebuildData()
  },
  watch: {
    data() {
      this.rebuildData()
    }
  },
  methods: {
    rebuildData() {
      this.cloneData = cloneDeep(this.data)
    },
    emitEvent(eventName, data) {
      this.$emit(eventName, data, this.cloneData)
    }
  }
}
</script>

<style>
</style>
