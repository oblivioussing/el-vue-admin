const list = {
  data () {
    return {
      list: [], // 列表
      total: 0, // 总条数
      loading: false // loading
    }
  },
  methods: {
    // 查询
    query () {
      this.getList()
    },
    // 刷新
    refresh () {
      this.reset()
      this.getList()
    },
    // 重置
    reset () {
      this.form = {}
    }
  }
}

export default list
