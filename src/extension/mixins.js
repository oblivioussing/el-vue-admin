import Vue from 'vue'
import store from '@/store'

Vue.mixin({
  created: function () {
  },
  methods: {
    // 返回
    $back (e, fresh) {
      const name = e.$options.name
      if (fresh !== false) {
        const listPath = name.replace(/Add|Edit|View/, 'List')
        e.$emit(`global:${listPath}`)
      }
      store.commit('menuTabs/removeTab', name)
    }
  }
})
