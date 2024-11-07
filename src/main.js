import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Childrenable from './mixins/Childrenable'

const app = createApp(App)
app.mixin(Childrenable)
app.mount('#app')
