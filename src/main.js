// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer)
import 'videojs-contrib-hls';
import 'video.js/dist/video-js.css'
import $ from 'jquery'

//require('videojs-contrib-hls/dist/videojs-contrib-hls')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})