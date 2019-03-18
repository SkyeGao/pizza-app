/**
 * Created by 长宝 on 2019/3/5.
 */
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Login from './components/Login'
import Regist from './components/Regist'
import About from './components/abouts/About'
//二级路由
import Contact from './components/abouts/Contact'
import Delivery from './components/abouts/Delivery'
import History from './components/abouts/History'
import OrderingGuide from './components/abouts/OrderingGuide'
//三级路由
import Phone from './components/abouts/contact/Phone'
import Name from './components/abouts/contact/Name'

export const routes=[
  {path:'/',name:"homeLink",components: {
      default:Home,
      'OrderingGuide':OrderingGuide,
      'Delivery': Delivery,
      'History':History
    }
  },
  {path:'/menu',name:"menuLink",component: Menu},
  {path:'/admin',name:"adminLink",component: Admin,
    //beforeEnter:(to,from,next)=>{
    //  alert("导航守卫");
    //next();
    //next(false);//不跳转
    //}a
  },
  {path:'/login',name:"loginLink",component: Login},
  {path:'/regist',name:"registLink",component: Regist},
  {path:'/about',name:"aboutLink",redirect:'/about/history',component: About,children:[
    {path:'/about/contact',name:'contactLink',redirect:'/about/contact/name',component:Contact,children:[
      {path:'/about/contact/phone',name:'phoneLink',component:Phone},
      {path:'/about/contact/name',name:'nameLink',component:Name}
    ]},
    {path:'/about/history',name:'historyLink',component:History},
    {path:'/about/delivery',name:'deliveryLink',component:Delivery},
    {path:'/about/orderingguide',name:'orderingguideLink',component:OrderingGuide}
  ]},
  {path:'*',redirect:'/'}
]
