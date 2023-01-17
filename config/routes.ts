export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/home',
    name: 'home',
    // icon: 'smile',
    component: './Home',
  },
  {
    path: '/welcome',
    name: 'welcome',
    // icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    // icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    // icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    name: 'project',
    // icon: 'table',
    path: '/project',
    component: './ProjectList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
