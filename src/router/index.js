import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Info from '@/components/Info/info.vue'
import Skill from '@/components/Info/skill.vue'
import Myproject from '@/components/Info/myProject.vue'

Vue.use(Router)
// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/components/Login'], resolve)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登陆',
      component: Login
    },
    {
      path: '/',
      name:'home',
      component:Home
    },
    {
      path:'/',
      component:Home,
      name:"自述",
      menuShow:true,
      iconCls:'iconfont icon-users',
      children:[
        {
          path:'/Info/info',component:Info,name:'个人信息',menuShow:true
        }
      ]
    },
    {
      path:'/',
      component:Home,
      name:'技能介绍',
      menuShow:true,
      children:[
        {
          path:'/Info/skill',component:Skill,name:'个人技能',menuShow:true
        }
      ]
    },
    {
      path:'/',
      component:Home,
      name:'项目介绍',
      menuShow:true,
      children:[
        {
          path:'/Info/myProject',component:Myproject,name:'个人项目',menuShow:true
        }
      ]
    }
  ]
})
