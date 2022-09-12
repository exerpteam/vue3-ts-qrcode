import { createApp } from 'vue';
import App from './App.vue';
// We import our plugin exporter to test what will be imported when installed via NPM.


const app = createApp(App);
// We test our Plugin. if you can use your components and directives inside this project without manually import them,
// your plugin work and can now export it in any Vue3 project !
app.mount('#app');


