import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8644cf84 = () => interopDefault(import('..\\pages\\components\\chart.vue' /* webpackChunkName: "pages/components/chart" */))
const _4225ce38 = () => interopDefault(import('..\\pages\\components\\chart2.vue' /* webpackChunkName: "pages/components/chart2" */))
const _8b1256f0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/components/chart",
    component: _8644cf84,
    name: "components-chart"
  }, {
    path: "/components/chart2",
    component: _4225ce38,
    name: "components-chart2"
  }, {
    path: "/",
    component: _8b1256f0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
