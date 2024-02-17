import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Jobs  from '../views/jobs/JobView.vue'
import JobDetails from '../views/jobs/JobDetailsView.vue'
import NotFound from '../views/ErrorView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About 
  },
  {
    path:'/jobs',
    name: 'Jobs',
    component: Jobs
  }
  ,
  {
    path:'/Jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  //redirect 
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  //catchall 404
  {
path: '/:catchAll(.*)',
name:'not found',
component: NotFound

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
