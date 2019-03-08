// miniprogram/pages/bind/bind.js
const apis = require('../../apis')

app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {

  },

  formData: {
    sid: ''
  },

  handleBindButtonTap: function() {
    console.log(this.formData.sid)
    wx.showLoading()
    apis.bindUser(this.formData.sid)
    .then(r => {
      console.log(r)
      wx.showToast({
        title: '绑定成功！',
        duration: 2000
      })
      app.globalData.hasBind = true
      wx.hideLoading()
      wx.navigateBack()
    })
    .catch(e => {
      console.log(e)
      wx.showToast({
        title: '绑定失败！学号无效或已被占用。',
        duration: 2000,
        icon: 'none'
      })
      wx.hideLoading()
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },
  
  handleInput: function(e) {
    console.log(e.target)
    console.log(this.formData)
    this.formData.sid = e.detail.value
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})