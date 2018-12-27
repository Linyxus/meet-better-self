// miniprogram/pages/punch/punch.js

const app = getApp()
const apis = require('../../apis')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageCount: 0,
    imageUrls: [],
  },

  formData: {
    words: null,
  },

  handleInput: function(e) {
    console.log(e.target)
    console.log(this.formData)
    this.formData[e.target.dataset.name] = e.detail.value
  },

  handleWordsInput: function(e) {
    this.formData.words = e.detail.value
  },

  handleChooseImage: function() {
    wx.chooseImage({
      count: 3,
      sizeType: 'compressed',
      success: res => {
        const plist = res.tempFilePaths
        console.log(plist)
        this.setData({ imageUrls: plist })
      }
    })
  },

  handleSubmit: function() {
    for (const key in this.formData) {
      if (this.formData[key] == null) {
        wx.showModal({
          title: '无法提交！',
          content: `未填写'${key}'`,
          showCancel: false,
        })
        return
      }
    }
    // start submitting
    wx.showLoading({
      title: '喝杯水休息一下吧~',
    })
    const imageProms = this.data.imageUrls.map(path => new Promise((resolve, reject) => {
      wx.cloud.uploadFile({
        cloudPath: path.slice(-10),
        filePath: path,
        success: res => {
          resolve(res.fileID)
        },
        fail: e => reject(e)
      })
    }))
    Promise.all(imageProms).then(imageIds => {
      this.formData.imageIds = imageIds
      console.log(this.formData)
      apis.punchIn(this.data.subject.id, this.formData)
        .then(r => {
          console.log(r)
          wx.hideLoading()
          if (r.result.error) {
            wx.showModal({
              title: '打卡失败啦...',
              content: `${r.error}`,
              showCancel: false
            })
          }
          wx.showModal({
            title: '打卡成功！',
            content: `获得${r.result.data.credits}积分！`,
            showCancel: false,
            success: () => {
              wx.navigateBack()
            }
          })
        })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({subject: app.globalData.currentSubject})
    const subject = this.data.subject
    for (const option of subject.punch.options) {
      this.formData[option.name] = null
    }
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