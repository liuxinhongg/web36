import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import frist from '@/components/first'
import page from '@/components/page'
import home from '@/views/home'
import detail from '@/views/detail'
import count from '@/views/count'
// const User = {
//     template: `<div>
//         <h2> User{{$route.params.id}}</h2>
//         <router-view/>
//     </div>`
// }
// const Sonfrist = {
//     template: '<div>我是user的第一个子组件</div>'
// }
// const Senfrist = {
//     template: '<div>我是user的第二个子组件</div>'
// }
// const NotFont = {
//     template: '<div><h1>404 您访问的页面不存在</h1> </div>'
// }
Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: 'nav',
    routes: [
        // {
        //     path: '/',
        //     name: 'HelloWorld',
        //     component: HelloWorld
        // },
        {
            path: '/',
            redirect: 'index',
        },
        {
            path: '/index',
            name: "home",
            component: home
        },
        {
            path: '/count',
            name: "count",
            component: count
        },
        {
            path: '/detail',
            name: "detail",
            component: detail
        },
        {
            path: '/frist/:class',
            name: 'frist',
            component: frist
        },
        {
            path: '/page',
            name: 'page',
            component: page
        },
        // {
        //     path: '*',
        //     // component: NotFont,
        //     redirect: (to) => {
        //         console.log(to);
        //         if (to.path == '/aaa') {
        //             return '/page'
        //         } else if (to.path == '/bbb') {
        //             return '/frist/123'
        //         } else {
        //             return '/'
        //         }
        //     }
        // },
        // {
        //     path: '/user/:id',
        //     name: 'User',
        //     component: User,
        //     children: [{
        //         path: 'sonone',
        //         name: 'Sonfrist',
        //         component: Sonfrist
        //     }, {
        //         path: 'sontwo',
        //         name: 'Senfrist',
        //         component: Senfrist
        //     }]
        // }
        // {
        //     path: '/user/:id',
        //     name: 'User',
        //     component: User,
        //     children: [{
        //         path: '',
        //         name: 'Sonfrist',
        //         component: Sonfrist
        //     }, {
        //         path: 'sontwo',
        //         name: 'Senfrist',
        //         component: Senfrist
        //     }]
        // }
    ]
})