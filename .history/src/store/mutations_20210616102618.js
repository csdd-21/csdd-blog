export default {
    GET_TAGS: (state, payload) => {
        state[payload.parent].tags = payload.tags
    },

    GET_ARTICLES: (state, payload) => {
        state[payload.parent].res.datas = payload.datas
        state[payload.parent].res.total = payload.total
    },

    SET_PARAMS_DEFAULT: (state, payload) => {
        if (payload == 'study') {
            state.study = {
                tags: ["js", "ts", "css", "node"],
                req: {
                    parent: "study",
                    checkTags: ["js", "ts", "css", "vue", "node"],
                    sort: -1,
                    skip: 1,
                    limit: 5,
                },
                res: {
                    datas: [],
                    total: 0,
                }
            }
            return
        }
        if (payload == 'life') {
            state.life = {
                tags: ["memory", "music", "travel", "delicacy"],
                req: {
                    parent: "life",
                    checkTags: ["memory", "music", "travel", "delicacy"],
                    sort: -1,
                    skip: 1,
                    limit: 3,
                },
                res: {
                    datas: [],
                    total: 0,
                }
            }
            return
        }
    },

    SET_PARAMS: (state, payload) => {
        state[payload.parent].req.title = payload.title
        if (state[payload.parent].req.checkTags.length == 0) {
            state[payload.parent].req.checkTags = state[payload.parent].tags
        }
        if (payload.checkTags) {
            if (payload.checkTags.length == 0) {
                state[payload.parent].req.checkTags = state[payload.parent].tags
            } else {
                state[payload.parent].req.checkTags = payload.checkTags
            }
        }
        if (payload.sort) {
            state[payload.parent].req.sort = payload.sort
        }
        if (payload.skip) {
            state[payload.parent].req.skip = payload.skip
        }
    },

    SET_SHOW_FOOTER: (state, payload) => {
        state.showFooter = payload.showFooter
    },
}