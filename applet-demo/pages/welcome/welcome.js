Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

//向上冒泡事件 bind事件绑定不会阻止冒泡事件向上冒泡，catch事件绑定可以阻止冒泡事件向上冒泡。
  onTextTap: function (event){
    console.log("onTextTap");
  },
  onTap:function(event){
    console.log("onTop");
    //页面跳转
    //父级跳往子级页面，左上角有返回按钮。层级关系最多只能有5层
    // wx.navigateTo({
    //   url: '../posts/post',
    // });//会执行onHide函数 

// 跳转页面后，左上角没有返回
    wx.redirectTo({ 
      url: '../posts/post',
    });//会执行onUnload函数  页面被关闭了

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
   * 生命周期函数--监听页面隐藏 关闭
   */
  onHide: function () {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload");
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