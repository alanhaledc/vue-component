function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    const name = child.$options.name // 获取子组件的组件名
    // 找到对应的子组件
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params)) // 在这个子组件中派发事件
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}

export default {
  methods: {
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root // 找到父组件
      let name = parent.$options.name // 获取父组件的组件名

      // 找到父组件但是名字不一样时
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent // 继续往上找

        if (parent) {
          name = parent.$options.name // 继续获取组件名
        }
      }

      // 直到找到对应的父组件为止
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params)) // 在这个父组件中派发事件
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}
