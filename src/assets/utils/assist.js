/**
 * 找到第一个父组件
 * @param {Component} context
 * @param {String} componentName
 */
function findComponentUpward(context, componentName) {
  let parent = context.$parent
  let name = parent.$options.name

  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }

  return parent
}

/**
 * 找到所有父组件
 * @param {Component} context
 * @param {String} componentName
 */
function findAllComponentUpward(context, componentName) {
  let parents = []
  const parent = context.$parent

  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent)
    return parents.concat(findAllComponentUpward(parent, componentName))
  } else {
    return []
  }
}

/**
 * 找到第一个子组件
 * @param {Component} context
 * @param {String} componentName
 */
function findComponentDownward(context, componentName) {
  const children = context.$children
  let targetChild = null

  if (children.length) {
    for (const child of children) {
      const name = child.$options.name

      if (name === componentName) {
        targetChild = child
        break
      } else {
        targetChild = findComponentDownward(child, componentName)
        if (targetChild) break
      }
    }
  }

  return targetChild
}

/**
 * 找到所有子组件
 * @param {Component} context
 * @param {String} componentName
 */
function findAllComponentDownward(context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child)
    const targetComponents = findAllComponentDownward(child, componentName)
    return components.concat(targetComponents)
  }, [])
}

export {
  findComponentUpward,
  findAllComponentUpward,
  findComponentDownward,
  findAllComponentDownward
}
