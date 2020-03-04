// component/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    index:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapTab(e) {
      //点击时，重绘页面
      console.log(e.currentTarget.dataset.index);
      let index = e.currentTarget.dataset.index;
      this.setData({index});

      // 
      if (index == 0) {
        wx.switchTab({
          url: '/pages/index/index',
        })
        this.setData({ index: 0 });
      }
      if (index == 1) {
        wx.switchTab({
          url: '/pages/message/message',
        })
      }
      if(index==2){
        wx.switchTab({
          url: '/pages/mine/mine',
        })
        this.setData({ index:2 });
      }
    }
  }
})
