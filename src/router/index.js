import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const System = () => import('../views/system/System')

Vue.use(VueRouter)

const routes=[
    {
        path: '',
        redirect: '/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/system',
        component:System
    },

]
const router=new VueRouter({
    routes,
    mode:'history'
})

export default router
