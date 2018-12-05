const Peti = {
  createElement: function(tag, attrs, children) {
    let element = document.createElement(tag)

    for (let name in attrs) {
      let value = attrs[name]
      if (!name || !attrs.hasOwnProperty(name) || !value) return
      name = name === 'className' ? 'class' : name
      element.setAttribute(name, value.toString())
    }

    for (let i = 2; i < arguments.length; i++) {
      let child = arguments[i]
      element.appendChild(
        !child.nodeType ? document.createTextNode(child.toString()) : child
      )
    }

    return element
  }
}

export default Peti
