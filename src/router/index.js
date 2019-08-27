import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Resume from '@/components/Resume';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume,
    },
  ],
  mode: 'history',
  linkExactActiveClass: 'active',
});
