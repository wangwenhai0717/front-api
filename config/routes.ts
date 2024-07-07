export default [
  { path: '/index', name: '接口广场', icon: 'RedditOutlined', component: './index/Index' },
  { path: '/interface_info/:id', name: '接口详情', component: './interfaceInfo/Index',hideInMenu: true },
  {
    path: '/user',
    layout: false,
    routes: [{name: '登录', path: '/user/login', component: './User/Login'}],
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {name: '接口管理', icon: 'table', path: '/admin/interfaceInfo', component: './admin/InterfaceInfo'},
      {name: '接口统计', icon: 'analysis', path: '/admin/interface_analysis', component: './admin/InterfaceAnalysis'},
    ],
  },
  { path: '/', name: '欢迎页', icon: 'smile', component: './Welcome' },
  {path: '*', layout: false, component: './404'},
];
