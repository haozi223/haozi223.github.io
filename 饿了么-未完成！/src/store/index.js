import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        nev_icon: [{ img: "https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed", txt: "美食" },
        { img: "https://cube.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed", txt: "大牌惠此" },
        { img: "https://cube.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed", txt: "商超便利" },
        { img: "https://cube.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed", txt: "水果" },
        { img: "https://cube.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed", txt: "医药健康" },
        { img: "https://cube.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed", txt: "浪漫鲜花" },
        { img: "https://cube.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed", txt: "跑腿代购" },
        { img: "https://cube.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed", txt: "汉堡披萨" },
        { img: "https://cube.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed", txt: "厨房生鲜" },
        { img: "https://cube.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed", txt: "甜品饮品" }],
        merchants: [],
        recommended: [],
        Timelimit: [],
        islogin: false,
        userdata: []
    },
    mutations: {
        setmerchants(state, newVal) {
            state.merchants = state.merchants.concat(newVal)
        },
        setrecommended(state, newVal) {
            state.recommended = newVal
        },
        setTimelimit(state, newVal) {
            state.Timelimit = newVal
        },
        setislogin(state, newVal) {
            state.islogin = newVal
        },
        setuserdata(state, newVal) {
            state.userdata = newVal
        }
    },
    actions: {
        setmerchants(context, newVal) {
            context.commit('setmerchants', newVal)
        },
        setrecommended(context, newVal) {
            context.commit('setrecommended', newVal)
        },
        setTimelimit(context, newVal) {
            context.commit('setTimelimit', newVal)
        },
        setislogin(context, newVal) {
            context.commit('setislogin', newVal)
        },
        setuserdata(context, newVal) {
            context.commit('setuserdata', newVal)
        }
    },
    getters: {
        getmerchants(state) {
            return state.merchants
        },
        getNevIcon(state) {
            return state.nev_icon
        },
        getrecommended(state) {
            return state.recommended
        },
        getTimelimit(state) {
            return state.Timelimit
        },
        getislogin(state) {
            return state.islogin
        },
        getuserdata(state) {
            return state.userdata
        }
    }
});

