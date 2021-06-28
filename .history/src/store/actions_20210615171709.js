import axios from "axios";

export default {
    getTags({ state, commit }, payload) {
        return axios
            .get("/api/tags", {params:{parent:payload}})
            .then((res) => {
                commit('GET_TAGS', res.data)
                console.log('getTags ----',res.data);
            })
            .catch(function (err) { })
    },
    getArticles({ state, commit }, payload) {
        return axios
            .get("/api/article", { params: state[payload]['req'] })
            .then((res) => {
                commit('GET_ARTICLES', res.data)
                // if (payload == 'study') { commit('GET_STUDY_ARTICLES', res.data) }
                // if (payload == 'life') { commit('GET_LIFE_ARTICLES', res.data) }
                // console.log('getArticles ----',res.data );
            })
            .catch(function (err) { })
    },
}