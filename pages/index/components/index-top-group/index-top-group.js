// 引入请求的封装函数的文件
var request = require ('../../../../utils/request')

// pages/index/components/banner/banner.js
Component({

  /**
   * 页面的初始数据
   */
  data: {
    datas: {}
  },
  methods: {
    getDatas () {
      request({
        url: 'https://www.missevan.com/mobileWeb/newHomepage3',
        success: (res) => {
          // console.log(res)
          this.setData({datas: res.info})
        }
      }) 
    }
  },
  //获取到dom节点时执行的钩子函数
  ready () {
    this.getDatas()
  }
})