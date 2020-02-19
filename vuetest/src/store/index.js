import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        num: 100,
        name: "张三",
        age: 18,
    },
    getters: {
        count: state => {
            return state.num > 120 ? 120 : state.num;
        }
    },
    mutations: {
        increment(state, pload) {
            state.num += pload.n;
            // 异步请求
            // setTimeout(() => {
            //     state.num += pload.n;
            // }, 1000)
        },
        mincrement(state, pload) {
            state.num -= pload.n;
        }
    },
    actions: {
        Addaction(context) {
            console.log(context);
            setTimeout(() => {
                context.commit('increment', { n: 5 });
            }, 1000);
            context.dispatch('textAction');
        },
        textAction() {
            console.log("context调用了");
        }
    }
})
export default store