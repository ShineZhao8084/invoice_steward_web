import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '/authorize',
        name: 'authorize',
        component: () => import('./views/authorize'),
        meta: {
            title: '用户授权'
        }
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('./views/home'),
        meta: {
            title: '主页'
        },
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: () => import('./views/dashboard'),
                meta: {
                    title: '首页'
                }
            },
            {
                path: 'title',
                name: 'title',
                component: () => import('./views/invoice-title'),
                meta: {
                    title: '抬头'
                }
            },
            {
                path: 'invoice',
                name: 'invoice',
                component: () => import('./views/invoice'),
                meta: {
                    title: '发票'
                }
            }
        ]
    },
    {
        path: '/home/title/add',
        name: 'title-add',
        component: () => import('./views/invoice-title/invoice-title-add'),
        meta: {
            title: '抬头新增/更新'
        },
    },
    {
        path: '/home/title/update/:id',
        name: 'title-update',
        component: () => import('./views/invoice-title/invoice-title-add'),
        meta: {
            title: '抬头新增/更新'
        },
    },
    {
        path: '/home/invoice/info/:id',
        name: 'invoice info',
        component: () => import('./views/invoice-info'),
        meta: {
            title: '发票详情'
        }
    }
];

const router = new Router({routes});

/*router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});*/

export {
    router
};
