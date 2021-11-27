import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { handle } from './common/promise'

createApp(App)
    .use(router)
    .mixin({
        methods: {
            handle,
        }
    })
    .mount('#app')