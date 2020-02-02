import Vue from 'vue';
import VueRouter from 'vue-router';

// Pages

import HomeNew from '@/pages/home/Home.vue';
import Article from '@/pages/article/Index.vue';

Vue.use(VueRouter);

//Listes des routes
const routes = [
 
    {
        path: '/article/:id',
        name: 'article',
        component: Article,
    },
    {
        path: '/',
        name: 'home',
        component: HomeNew,
    },
    
];

const router = new VueRouter({
    routes,
    mode: 'history',
    methods: { 
        scrollToTop() {
             window.scrollTo(0,0);
        }
     }
});

export default router;