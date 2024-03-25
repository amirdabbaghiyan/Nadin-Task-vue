import { createRouter, createWebHistory } from 'vue-router';
// components
import Home from  '@/pages/Home';
import Todos from  '@/pages/Todos';
import Weather from  '@/pages/Weather';
import Profile from  '@/pages/Profile';

const routes = [
    { path: '/' , name: 'home' , component: Home },

    { path: '/todos' , name: 'todos' , component: Todos },

    { path: '/weather' , name: 'weather' , component: Weather }, 

    { path: '/profile' , name: 'profile' , component: Profile }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;