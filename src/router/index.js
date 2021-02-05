import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/Login';
import First from '@/components/First';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/hello',
      name: 'Login',
      component: Login,
    },
    {
      path: '/first',
      name: 'First',
      component: First,
    },
  ],
});
