import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

import { createStore } from 'vuex'

export default createStore({
  state: {
    study: {
      tags: ["js", "ts", "css", "node"],
      req: {
        parent: "study",
        checkTags: ["js", "ts", "css", "vue", "node"],
        sort: -1,
        skip: 1,
        limit: 6,
      },
      res: {
        datas: [],
        total: 0,
      }
    },
    life: {
      tags: ["memory", "music", "travel", "delicacy"],
      req: {
        parent: "life",
        checkTags: ["memory", "music", "travel", "delicacy"],
        sort: -1,
        skip: 1,
        limit: 6,
      },
      res: {
        datas: [],
        total: 0,
      }
    },
    showFooter:false,
  },
  getters,
  actions,
  mutations
})
