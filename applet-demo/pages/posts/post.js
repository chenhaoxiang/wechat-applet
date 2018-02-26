Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:"2018-02-25",
    title:"课程一"
  },

  // 自定义变量
  imgPath:"/imagess/..",

  // 自定义函数
  process: function(){
    var date = "2018-02-25";

  },

  /**
   * 生命周期函数--监听页面加载 页面初始化
   */
  onLoad: function (options) {
    console.log("onLoad");
    //从服务器中请求数据来
    var post_content1={
      date:"2018-02-26",
      title:"标题一-",
      img:{
        post_img: "/images/post/crab.png",
        author_img: "/images/avatar/1.png"
      },
      img_condition:true,
      content:"课程内容简介.......",
      view_num:"203",
      collect_num:"120"
    }
    // 等同于把post_content1变量赋值到data下去了
    this.setData(post_content1);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载 页面关闭
   */
  onUnload: function () {
    console.log("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage");
  }
})