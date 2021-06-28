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




        if (payload.parent == 'study') {
            console.log('study params payload ---------------------- ', payload);
            if (payload.tags) {
                if (payload.tags.length == 0) {
                    state.study.req.checkTags = state.study.tags

                } else {
                    state.study.req.checkTags = payload.tags
                }
            }
            if (payload.sort) {
                state.study.req.sort = payload.sort
            }
            if (payload.skip) {
                state.study.req.skip = payload.skip
            }
        }
        if (payload.parent == 'life') {
            console.log('life params payload ---------------------- ', payload);
            if (payload.tags) {
                if (payload.tags.length == 0) {
                    state.life.req.checkTags = state.life.tags

                } else {
                    state.life.req.checkTags = payload.tags
                }
            }
            if (payload.sort) {
                state.life.req.sort = payload.sort
            }
            if (payload.skip) {
                state.life.req.skip = payload.skip
            }
        }

    },
    SET_SHOW_FOOTER: (state, payload) => {
        state.showFooter = payload.showFooter
    },
}