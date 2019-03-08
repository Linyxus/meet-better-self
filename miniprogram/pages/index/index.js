//index.js
//获取应用实例
const app = getApp()
const apis = require('../../apis.js')

Page({
  bindOptInTap: function(e) {
    const sid = e.currentTarget.dataset.id
    const subjects = this.data.subjects
    const subject = subjects.find(s => s.id == sid)
    app.setGlobalData({currentSubject: subject})
    wx.navigateTo({
      url: '../subject/subject',
    })
  },

  data: {
    subjects: []
  },

  onLoad: function() {
    wx.cloud.callFunction({
      name: 'Subjects',
      data: {
        scope: 'hasBinding'
      }
    })
    .then(r => r.result)
    .then(bind => {
      app.setGlobalData({hasBind: bind.length != 0})
      if (bind.length) {
        app.setGlobalData({
          bind: {
            sid: bind[0].sid
          }
        })
      }
      if (!bind.length) {
        app.toBind()
      }
    })
    // wx.cloud.callFunction({
    //   name: 'Subjects',
    //   data: {
    //     scope: 'punchIn',
    //     subjectId: 'words-daily',
    //     options: {
    //       words: '123',
    //       imageUrls: ['123'],
    //       count: 60
    //     }
    //   }
    // })
    // .then(r => console.log(r))
    wx.showNavigationBarLoading()
    apis.fetchSubjects()
      .then(r => r.result)
      .then(subjects => {
        this.setData({subjects})
        console.log(this.data)
        wx.hideNavigationBarLoading()
      })
      .catch(e => {
        console.log(e)
      })
  },

  onShow: function() {
  }
  // data: {
  //   motto: 'Hello World',
  //   userInfo: {},
  //   hasUserInfo: false,
  //   canIUse: wx.canIUse('button.open-type.getUserInfo')
  // },
  // //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
