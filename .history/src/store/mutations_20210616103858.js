export default {
    GET_TAGS: (state, payload) => {
        state[payload.parent].tags = payload.tags
    },

    GET_ARTICLES: (state, payload) => {
        state[payload.parent].res.datas = payload.datas
        state[payload.parent].res.total = payload.total
    },

    SET_PARAMS_DEFAULT: (state, payload) => {
        state[payload.parent] = {
            tags: [],
            req: {
                parent: payload.parent,
                checkTags: [],
                sort: -1,
                skip: 1,
                limit: 6,
            },
            res: {
                datas: [],
                total: 0,
            }
        }

        // if (payload == 'study') {
        //     state.study = {
        //         tags: [],
        //         req: {
        //             parent: "study",
        //             checkTags: [],
        //             sort: -1,
        //             skip: 1,
        //             limit: 6,
        //         },
        //         res: {
        //             datas: [],
        //             total: 0,
        //         }
        //     }
        // }
        // if (payload == 'life') {
        //     state.life = {
        //         tags: [],
        //         req: {
        //             parent: "life",
        //             checkTags: [],
        //             sort: -1,
        //             skip: 1,
        //             limit: 6,
        //         },
        //         res: {
        //             datas: [],
        //             total: 0,
        //         }
        //     }
        // }
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