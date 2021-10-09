import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        data: [],
        mutatedData: [],
        themes:[]
    },
    actions:{
        filterData(store, { theme = '', search = '', options = {} }) {
            const data = [...store.state.data]
            const filtered = data.filter(item => {
                let isPassed = true
                if (search && !item.title.toLowerCase().includes(search.toLowerCase())) {
                    isPassed = false
                }
                if (theme && item.theme !== theme) {
                    isPassed = false;
                }
                Object.keys(options).forEach(key => {
                    if (key === 'new') {
                        if (options.new && new Date(item.date).getMonth() !== 7) {
                            isPassed = false
                        }
                    } else if (options[key] && item.options[key] !== options[key]) {
                        isPassed = false
                    }
                })
                return isPassed
            })

            store.commit('setMutatedData', filtered);
        }
    },
    mutations: {
        setData (state, payload) {
            const themes = []
            payload.forEach(item => {
                if(!themes.includes(item.theme)) {
                    themes.push(item.theme)
                }
            })
            state.data = payload
            state.themes = themes
        },
        setMutatedData(state, payload) {
            state.mutatedData = payload
        }
    },
    getters: {
        getData(state) {
            return state.data
        },
        getMutatedData(state) {
            return state.mutatedData
        },
        getThemes(state) {
            return state.themes
        }
    }
})

export default store
