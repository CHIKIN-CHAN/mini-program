const request = ({url, data, success, fail, toast=true}) => {
    //toast为显示loading提示框参数
    if (toast) {
        wx.showLoading({title: "请稍等..."})//打开loaing提示框
    }
    //封装请求的API
    wx.request({
        url, //仅为示例，并非真实的接口地址
        data,
        header: {
          'content-type': 'application/json' // 小程序设定的默认值
        },
        success: function (res) {
        //   console.log(res)
          if(res.data.status === "fail"){
            wx.showToast({
                title: "没有请求到数据",
                icon: "none",
                duration: 2000
            })
          }else{
            success(res.data)
          }
        },
        fail: function (error) {
            //弹出请求失败
            wx.showToast({
                title: "请求失败",
                icon: "none",
                duration: 2000
            })
            fail(error)
        },
        // complete 接口调用结束的回调函数（调用成功、失败都会执行）
        complete: () => {
            if(toast){
                wx.hideLoading()//关闭loading提示框
            }
        }
    })
}

module.exports = request