import tool from"../../utils/tool.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 图片最多9张。
    // 而且每次上传后都可以新增。
    imgArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // wx.hideTabBar({})
  },
  tapChooseImg(e){
    let that = this;
    wx.chooseImage({
      success: function(res) {
        console.log(res.tempFilePaths);
  
        // 最多9个
        let front = tool.isNull(tool.getMap("chooseImg")) ? [] : tool.getMap("chooseImg");
        front = front.concat(res.tempFilePaths);

        // 大于9个时。退出勾选功能。
        if(front.length >9){
          return ;
        }

        tool.setMap("chooseImg", front);
        console.log(front);
        // wx.setStorageSync("chooseImg", wx.getStorageSync("chooseImg")+res.tempFilePaths);
      
        that.setData({
          imgArr: tool.getMap("chooseImg")
        });
      },
    })

  },
  getFocus(e){
    let height = e.detail.height*2+20;
    this.setData({
      marginHeight:height,
      dispalyBar: true
    });

    console.log(height);
  },
  getBlur(e){
    this.setData({
      dispalyBar:false
    });
  }

})