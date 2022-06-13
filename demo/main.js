import { createApp } from 'vue'

// import VueSimpleSVG from '../dist/plugin.js'
import VueSimpleSVG from '../src/plugin.js'
import App from "./App"
import './index.css'


createApp(App).use(VueSimpleSVG).mount('#app')
