// pages/subject/subject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkData: [
      {
        id: 'cd-1',
        user: '徐逸辰',
        time: '2018.11.13 21:23',
        words: '第一次背单词，坚持！！',
        thumbUps: 123
      },
      {
        id: 'cd-2',
        user: '徐逸辰',
        time: '2018.11.13 21:23',
        words: '第一次背单词，坚持！！！！！！！',
        thumbUps: 234
      },
      {
        id: 'cd-3',
        user: '徐逸辰',
        time: '2018.11.13 21:23',
        words: '第一次背单词，坚持！！',
        thumbUps: 345
      },
    ]
  },

  bindButtonTap: function(e) {
    console.log('tap!!!')
    console.log(e.currentTarget.dataset)
  },

  bindPulishTap: function() {
    wx.chooseImage({
      success: function(res) {
        console.log(res)
      },
      count: 1,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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