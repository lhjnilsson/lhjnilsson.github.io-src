import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Work from '@/components/Work'
import Blog from '@/components/Blog'
import Education from '@/components/Education'
import Experience from '@/components/Experience'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/education',
      name: 'Education',
      component: Education
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
  ]
})
