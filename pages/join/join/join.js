// pages/join/join/join.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  link(e) {
    let link = e.currentTarget.dataset.link;
    wx.navigateTo({
      url: link,
    })
  }
})