import { createApp } from 'vue';
import App from './App.vue';
// We import our plugin exporter to test what will be imported when installed via NPM.
import TestPlugin from './index';

// Font Awsome free version. Erase it if you don't want it (and delete it from your package.json) ;)
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import ripple from './directives/ripple';

const app = createApp(App);
// We test our Plugin. if you can use your components and directives inside this project without manually import them,
// your plugin work and can now export it in any Vue3 project !
app.use(TestPlugin);
app.mount('#app');


