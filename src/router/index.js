import Vue from 'vue';
import VueRouter from 'vue-router';

// Pages
import Home from '@/pages/home/index.vue';
import Article from '@/pages/article/Index.vue';

Vue.use(VueRouter);

//Listes des routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/article/:id',
        name: 'article',
        component: Article,
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;