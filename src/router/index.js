import Vue from 'vue'
import Router from 'vue-router'
import iframeVideo from '@/components/iframeVideo'
import Video from '@/components/Video'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'iframeVideo',
        component: iframeVideo
    }, {
        path: '/Video',
        name: 'Video',
        component: Video
    }]
})