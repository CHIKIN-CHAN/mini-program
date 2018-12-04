// pages/rank/rank.js
const request = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: []
  },

  // 获取数据
  getInfo () {
    request({
      url: 'https://www.missevan.com/mobileWeb/albumList',
      success: res => {
        // console.log(res)
        this.setData({info: res.info})
      }
    })
  },

  // 绑定点击事件，跳转音单音乐列表
  toAlbumList (e) {
    // 需要跳转的应用内非 tabBar 的页面的路径, 路径后可以带参数。参数与路径之间使用 ? 分隔，参数键与参数值用 = 相连，不同参数用 & 分隔；如 'path?key=value&key2=value2'

    // console.log(e)
    let id = e.currentTarget.dataset.id
    let url = '../album-list/album-list?id=' + id
    // console.log(url)
    wx.navigateTo({
      url: url,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})