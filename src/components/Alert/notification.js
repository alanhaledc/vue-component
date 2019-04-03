import Vue from 'vue'
import Alert from './Alert.vue'

// 创建新实例
Alert.newInstance = properties => {
  const props = properties || {}

  // 新建实例
  const Instance = new Vue({
    data: props,
    render(h) {
      return h(Alert, { props }) // 重新封装组件
    }
  })

  // 挂载到 body
  const component = Instance.$mount()
  document.body.appendChild(component.$el)

  const alert = Instance.$children[0] // 获取子组件

  // 复用方法
  return {
    add(noticeProps) {
      alert.add(noticeProps)
    },

    remove(name) {
      alert.remove(name)
    }
  }
}

export default Alert
