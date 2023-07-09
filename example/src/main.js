import { createApp } from 'vue'
// import LegoComponents from '../../../dist/@strive-cli/component-test.esm'
import LegoComponents from '../../dist/test1.esm'
import App from './App.vue'

createApp(App).use(LegoComponents).mount('#app')
