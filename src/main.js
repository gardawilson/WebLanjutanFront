import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Todo from './components/todo.vue'
import User from './components/user.vue'
import Auth from './components/auth.vue'

const routes = [
    {path: '/', component: Auth},
      {path: '/todo', component: Todo},
      {path: '/user', component: User}
  ]
const router = createRouter({
  history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
