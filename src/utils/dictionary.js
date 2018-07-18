;(() => {
  'use strict'

  /*服务器异常错误提示*/
  window.ERROR_MSG = '服务器错误'

  /*后台返回接口状态*/
  //接口状态(成功)
  window.SUCCESS = '10'
  //接口状态(权限认证失败)
  window.AUTH_FAIL = '11'
  //接口状态(未登录，请重新登录)
  window.NO_LOGIN = '12'
  //接口状态(登陆超时，请重新登录)
  window.LONGIN_EXPIRE = '13'
  //接口状态(失败登录次数过多，用户被锁定)
  window.LOCKED = '14'
  //接口状态(登录名不能为空)
  window.LONGIN_NAME_NOT_NULL = '15'
  //接口状态(令牌密钥不能为空)
  window.TOKEN_SALT_NOT_NULL = '16'

  /*前段自定义接口状态*/
  //接口状态(拿不到后台响应)
  window.ERROR = 'error'

  /*文件类型*/
  //图片
  window.PIC = 10
  //视频
  window.VIDEO = 11
  //音频
  window.AUDIO = 12
  //pdf
  window.PDF = 13
  //word
  window.WORD = 14
  //excel
  window.EXCEL = 15
  //txt
  window.TXT = 16
  //apk
  window.APK = 17
  //压缩包
  window.ZIP = 18

  /*获取验证码的业务编码*/
  //注册
  window.REGISTER_CODE = '10'
  //重置密码
  window.RESET_PWD_CODE = '11'
  //修改手机号
  window.UPDATE_TEL_CODE = '12'
  /* 直播活动类型 */
  window.TOPICTYPE = [
    {
      topicType: '10',
      topicDes: '直播'
    },
    {
      topicType: '11',
      topicDes: '视频'
    },
    {
      topicType: '12',
      topicDes: '音频'
    },
    {
      topicType: '13',
      topicDes: '图文'
    },
    {
      topicType: '14',
      topicDes: '奇讯直播'
    }
  ]

  /* 文章列表样式类型 */
  //样式1
  window.ART_LIST_STYLE1 = 10
  //样式2
  window.ART_LIST_STYLE2 = 11
  //样式3
  window.ART_LIST_STYLE3 = 12
  //样式4
  window.ART_LIST_STYLE4 = 13

  /* 文章编辑类型 */
  // 文章新增
  window.EDITOR_TYPE_ADD = 10
  //资讯文章编辑
  window.EDITOR_TYPE_INFOR = 11
  //待整理文章编辑
  window.EDITOR_TYPE_PENDING = 12
  //备选文章编辑
  window.EDITOR_TYPE_SPARE = 13
  //待发布文章编辑
  window.EDITOR_TYPE_REPEAL = 14
  //暂存文章编辑
  window.EDITOR_TYPE_TEMP = 15
  //待审核文章审核
  window.EDITOR_TYPE_CHECK = 16
  //未通过审核文章编辑
  window.EDITOR_TYPE_UNAPPROVED = 17
  //撤销文章编辑
  window.EDITOR_TYPE_REVOCA = 18

  /*渠道*/
  // pc_erp
  window.PC_ERP = '11'

  /*默认请求超时时间*/
  window.TIME_OUT = 10000
})()
