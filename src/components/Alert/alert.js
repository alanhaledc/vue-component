import Notification from './notification'

let messageInstance

function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance() // 单例模式，确保只创建一次
  return messageInstance
}

function notice({ duration = 1.5, content = '' }) {
  let instance = getMessageInstance()

  instance.add({ content, duration }) // 传入配置
}

export default {
  // 不同的提示样式
  info(options) {
    return notice(options)
  },
  success() {},
  warning() {},
  error() {}
}
