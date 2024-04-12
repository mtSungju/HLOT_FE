import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/company/companyList',
      component: () => import('@/views/company/CompanyList.vue')
    },
    {
      path: '/estimate/estimateList',
      component: () => import('@/views/estimate/EstimateList.vue')
    },
    {
      path: '/project/projectList',
      component: () => import('@/views/project/ProjectList.vue')
    },
    {
      path: '/sample/sampleList',
      component: () => import('@/views/sample/SampleList.vue')
    },
    {
      path: '/sample/sampleList2',
      component: () => import('@/views/sample/SampleList2.vue')
    },
    {
      path: '/sample/sampleList3',
      component: () => import('@/views/sample/SampleList3.vue')
    }
  ],
})
