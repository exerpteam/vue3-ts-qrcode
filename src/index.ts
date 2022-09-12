import components from'./components/components';
import directives from './directives/directives'
// Here is the code called when you use App.use( ... )
const plugin = {
  install (Vue: any) {
    for (const propComponent in components) {
      if (components.hasOwnProperty(propComponent)) {
        const component = (components as any)[propComponent]
        Vue.component(component.name, component)
      }
    }
    for (const propDirective in directives) {
      if (directives.hasOwnProperty(propDirective)) {
        const directive = (directives as any)[propDirective]
        Vue.directive(propDirective, directive);
      }
    }
  }
}

export default plugin