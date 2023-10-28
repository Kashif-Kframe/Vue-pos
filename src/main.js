import './assets/main.css'
import Company from './components/Company.vue'
import Employee from './components/Employee.vue'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/company',
            component: Company
        },
        {
            path: '/employee',
            component: Employee,
        },
        {
            path: '/employee/:id',
            component: Employee,
            props: true
        },
    ]
});

const app = createApp(App)

app.use(router);

app.mount('#app')
