import components from'./components/components';
// Here is the code called when you use App.use( ... )
const plugin = {
  install (Vue: any) {
    for (const propComponent in components) {
      if (components.hasOwnProperty(propComponent)) {
        const component = (components as any)[propComponent]
        Vue.component(component.name, component)
      }
    }
  }
}

export default plugin