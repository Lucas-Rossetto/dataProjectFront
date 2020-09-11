import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8644cf84 = () => interopDefault(import('..\\pages\\components\\chart.vue' /* webpackChunkName: "pages/components/chart" */))
const _4225ce38 = () => interopDefault(import('..\\pages\\components\\chart2.vue' /* webpackChunkName: "pages/components/chart2" */))
const _42099f36 = () => interopDefault(import('..\\pages\\components\\chart3.vue' /* webpackChunkName: "pages/components/chart3" */))
const _41ed7034 = () => interopDefault(import('..\\pages\\components\\chart4.vue' /* webpackChunkName: "pages/components/chart4" */))
const _41d14132 = () => interopDefault(import('..\\pages\\components\\chart5.vue' /* webpackChunkName: "pages/components/chart5" */))
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
    path: "/components/chart3",
    component: _42099f36,
    name: "components-chart3"
  }, {
    path: "/components/chart4",
    component: _41ed7034,
    name: "components-chart4"
  }, {
    path: "/components/chart5",
    component: _41d14132,
    name: "components-chart5"
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
