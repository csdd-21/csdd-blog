import axios from "axios";

export default {
    getTags({ state, commit }, payload) {
        return axios
            .get("/api/tags", { params: { parent: payload } })
            .then((res) => {
                console.log('getTags ----', res.data);

                commit('GET_TAGS', res.data)
            })
            .catch(function (err) { })
    },
    getArticles({ state, commit }, payload) {
        return axios
            .get("/api/article", { params: state[payload]['req'] })
            .then((res) => {
                console.log('getArticles ----', res.data);
                commit('GET_ARTICLES', res.data)
            })
            .catch(function (err) { })
    },
}