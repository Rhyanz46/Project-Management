import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import TeamView from '../views/TeamView.vue'
import endpoint from './endpoints'

Vue.use(VueRouter)

const routes = [{
        path: endpoint.dashboard.path,
        name: endpoint.dashboard.name,
        component: DashboardView
    },
    {
        path: endpoint.projects.path,
        name: endpoint.projects.name,
        component: ProjectsView
    },
    {
        path: endpoint.team.path,
        name: endpoint.team.name,
        component: TeamView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router