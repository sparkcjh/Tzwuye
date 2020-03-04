// _message/detail/detail.js
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
  tapPress(e) {
    this.setData({
      dispalyBar: true
    });

    console.log(height);
  },
  getFocus(e){
    let height = e.detail.height * 2+10;
    this.setData({
      marginHeight: height
    });
  }
})