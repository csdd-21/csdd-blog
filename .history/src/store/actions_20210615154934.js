import axios from "axios";

export default {
    getArticles({ state, commit }, payload) {
        return axios
            .get("/api/article", { params: state[payload]['req'] })
            .then((res) => {
                if (payload == 'study') { commit('GET_STUDY_ARTICLES', res.data) }
                if (payload == 'life') { commit('GET_LIFE_ARTICLES', res.data) }
                // console.log('getArticles ----',res.data );
            })
            .catch(function (err) { })
    },
}