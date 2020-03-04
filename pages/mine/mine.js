// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.hideTabBar({})
  },

  link(e){
    let link = e.currentTarget.dataset.link;
    wx.navigateTo({
      url: link,
    })
  }


})