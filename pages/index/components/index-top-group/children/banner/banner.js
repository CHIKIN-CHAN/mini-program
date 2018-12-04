// // pages/index/components/banner/banner.js
// var request = require('../../../../../../utils/request')
Component({
    
      /**
       * 组件的初始数据
       */
      data: {
        
      },
      //接收该组件外传过来的数据并规定值类型
      properties: {
        imgUrls: Array
      }
      /**
       * 组件的方法列表
       */
      // methods: {
      //   getImgUrls () {
      //     //https://www.missevan.com/mobileWeb/newHomepage3
      //     request({
      //       url: 'https://www.missevan.com/mobileWeb/newHomepage3',
      //       success: (res) => {
      //         this.setData({ imgUrls: res.info.banner })
      //       }
      //     })
      //   }
      // },
      // ready () {
      //   this.getImgUrls()
      // }
})