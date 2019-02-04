// pages/subject/subject.js
const apis = require('../../apis')

const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    subject: {
      title: 'Test',
      description: 'Test',
      count: 123,
    },
    checkData: [
      {
        id: 'cd-1',
        user: '徐逸辰',
        time: '2018.11.13 21:23',
        words: '第一次背单词，坚持！！',
        img: 'http://linyxus.xyz/file/data/vip_data/bg.jpg',
        thumbUps: 123
      },
      {
        id: 'cd-2',
        user: '徐逸辰',
        time: '2018.11.13 21:23',
        words: '第一次背单词，坚持！！！！！！！',
        img: 'http://linyxus.xyz/file/data/vip_data/bg.jpg',
        thumbUps: 234
      },
      {
        id: 'cd-3',
        user: '徐逸辰',
        time: '2018.11.13 21:23',
        words: '第一次背单词，坚持！！',
        img: 'http://linyxus.xyz/file/data/vip_data/bg.jpg',
        thumbUps: 345
      },
    ],
  },

  bindButtonTap: function(e) {
    console.log('tap!!!')
    console.log(e.currentTarget.dataset)
    wx.showLoading({
      title: 'Logining...',
    })
    wx.cloud.callFunction({
      name: 'login',
      data: {}
    }).then(
      res => {
        wx.hideLoading()
        wx.showToast({
          title: res.result.openid,
          duration: 2000
        })
      }
    )
  },

  bindButton2Tap: (e) => {
    const time = moment('22:23:30', 'HH:mm:ss')
    wx.showToast({
      title: time.format('HH mm ss'),
    })
  },

  bindPulishTap: function() {
    wx.navigateTo({
      url: '../punch/punch',
    })
    // wx.chooseImage({
    //   success: res => {
    //     const tempFilePath = res.tempFilePaths[0];
    //     const task = wx.uploadFile({
    //       url: 'http://localhost:8000/upload',
    //       filePath: tempFilePath,
    //       name: 'file',
    //       success: res => {
    //         console.log(res)
    //         this.setData({
    //           checkData: [
    //             {
    //               id: 'cd-10',
    //               user: '徐逸辰',
    //               time: '2018.11.13 21:23',
    //               words: '第一次背单词，坚持！！',
    //               img: res.data,
    //               thumbUps: 123
    //             },
    //           ]
    //         })
    //       }
    //     })
    //     task.onProgressUpdate(res => {
    //       console.log('上传进度', res.progress)
    //     })
    //   },
    //   count: 1,
    // })
  },

  reloadPunch: function() {
    wx.showNavigationBarLoading()
    apis.fetchSubjectPunch(this.data.subject.id)
      .then(resp => {
        console.log(resp.result)
        this.setData({punchData: resp.result})
        wx.hideNavigationBarLoading()
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({subject: app.globalData.currentSubject})
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
    this.reloadPunch()
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
    this.reloadPunch()
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