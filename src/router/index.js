import Vue from 'vue';
import VueRouter from 'vue-router';

// Pages

import HomeNew from '@/pages/home/Home.vue';
import HomeCategory from '@/pages/home/HomeCategory.vue';
import HomeIndex from '@/pages/article/Index.vue';
import HomeFormulaire from '@/pages/home/HomeFormulaire.vue';

Vue.use(VueRouter);

//Listes des routes
const routes = [
 

    {
        path: '/',
        name: 'home',
        component: HomeNew,
    },
    {
        path: '/games/',
        name: 'games',
        component: HomeIndex,
    },
    {
        path: '/game/:id',
        name: 'game',
        component: HomeIndex,
    },
    {
        path: '/category/:id',
        name: 'category',
        component: HomeCategory,
    },
    {
        path: '/ecriretest',
        name: 'ecriretest',
        component: HomeFormulaire,
    },
    
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;