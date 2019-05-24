import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Content from '../components/Content';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Content
        }
    ]
})