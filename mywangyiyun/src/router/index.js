import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import recommend from '@/components/wangyi/recommend'
import friend from '@/components/wangyi/friend'
import radio from '@/components/wangyi/radio'
import wangyi from '@/components/wangyi'
import music from '@/components/music'
import mv from '@/components/mv'
import tuijian from '@/components/MV/tuijian'
import xianchang from '@/components/MV/xianchang'
import fanchang from '@/components/MV/fanchang'
import BGM from '@/components/MV/BGM'
import MV2 from '@/components/MV/MV2'
import wudao from '@/components/MV/wudao'
import ACG from '@/components/MV/ACG'
import yanzou from '@/components/MV/yanzou'
import slide_left from '@/components/slide/slide-left'
import slide_right from '@/components/slide/slide-right'
import option from '@/components/options/option'
Vue.use(Router)

export default new Router({
  routes: [
  {
    path:'*',
    //component:recommend,
    redirect:'/recommend'//重定向==component:recommend,
  },
  {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/option',
      name: 'option',
      component: option
    },
    {
      path: '/wangyi',
      name: 'wangyi',
      component: wangyi,
      children:[
        {path:'/recommend',component:recommend},
        {path:'/friend',component:friend},
        {path:'/radio',component:radio},
        {path:'/',redirect:'/recommend'}
      ]
    },
    {
      path: '/mv',
      name: 'mv',
      component: mv,
       children:[
         {path:'/tuijian',component:tuijian},
         {path:'/xianchang',component:xianchang},
         {path:'/fanchang',component:fanchang},
         {path:'/BGM',component:BGM},
         {path:'/MV2',component:MV2},
         {path:'/wudao',component:wudao},
         {path:'/ACG',component:ACG},
         {path:'/yanzou',component:yanzou},
         {path:'/',redirect:'/tuijian'}
      ]
    },
    {
      path: '/slide_left',
      name: 'slide_left',
      component: slide_left
    },
    {
      path: '/slide_right',
      name: 'slide_right',
      component: slide_right
    },
  ]
})
