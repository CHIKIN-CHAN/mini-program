// pages/album-list/album-list.js
const request = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {}
  },

  // 接收一个页面调用事件函数传过来的id
  getInfo (id) {
    request({
      url: 'https://www.missevan.com/sound/soundalllist?albumid=' + id,
      success: res => {
        console.log(id)
        console.log(res)
        this.setData({info: res.info})
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)   //options为页面加载时接收的参数
    let id = options
    this.getInfo(id)
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