import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

import { createStore } from 'vuex'

export default createStore({
  state: {
    study: {
      tags: [],
      req: {
        parent: "study",
        title:"",
        checkTags: [],
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
      tags: [],
      req: {
        parent: "life",
        title:"",
        checkTags: [],
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
