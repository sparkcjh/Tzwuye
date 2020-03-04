//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    arr:2,
    statusMore:false
  },
  onLoad(){
    wx.hideTabBar({})
  },

  // 跳转
  link(e) {
    let link = e.currentTarget.dataset.link;
    wx.navigateTo({
      url: link,
    })
  },
  // 更多选项
  tapMore(e){
    let statusMore = !this.data.statusMore;
    let arr = statusMore?4:2;
    this.setData({
      arr,
      statusMore
    });
  }
})
