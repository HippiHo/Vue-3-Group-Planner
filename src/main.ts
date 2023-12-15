import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuestic } from "vuestic-ui";

const app = createApp(App)

app.use(createVuestic({
    config: {
      breakpoint: {
        enable: true,
        bodyClass: false,
        thresholds: {
          xs: 0,
          sm: 320,
          md: 768,
          lg: 1024,
          xl: 1280,
        },
      },
    } as any,
  }))

app.use(router)

app.mount('#app')
