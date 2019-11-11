import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import door from '../components/door';
import 首页 from '../components/首页';
import 发现 from '../components/发现';
import 订单 from '../components/订单';
import 我的 from '../components/我的';
import 登录 from '../components/登录';
import 注册 from '../components/注册';
import 商家商品 from '../components/商家商品列表';
import 地址 from '../components/地址'

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: '主页',
        component: door,
        redirect: '/home',
        children: [
            { path: '/home', component: 首页, name: '首页' },
            { path: '/find', component: 发现, name: '发现' },
            { path: '/description', component: 订单, name: '订单' },
            { path: '/user', component: 我的, name: '我的' }
        ]
    }, {
        path: '/login',
        name: '登录',
        component: 登录
    },
    {
        path: '/registered',
        name: '注册',
        component: 注册
    },
    {
        path: '/merchants',
        name: '商家',
        component: 商家商品
    },
    {
        path: '/address',
        name: '地址',
        component: 地址
    }],
    beforeEach: ((to, from, next) => {
        next();
    })
})