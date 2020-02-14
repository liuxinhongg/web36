import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import frist from '@/components/first'
import page from '@/components/page'
Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: 'nav',
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/first',
            name: 'frist',
            component: frist
        },
        {
            path: '/page',
            name: 'page',
            component: page
        }
    ]
})