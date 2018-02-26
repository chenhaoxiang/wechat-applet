//接收脚本数据
var postsData = require('../../data/post-data.js');//使用相对路径，使用绝对路径不行

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //小程序总是会读取data对象来做数据绑定，这个动作我们称为动作A
    //动作A的执行，是在onLoad事件执行之后发生的
    date:"2018-02-25",
    title:"课程一",
    // 1 
    //posts_key: postsData.postList
  },

  // 自定义变量
  imgPath:"/imagess/..",
  // 自定义函数
  process: function(){
  },

  /**
   * 生命周期函数--监听页面加载 页面初始化
   */
  onLoad: function (options) {
    console.log("onLoad");
    //引入数据文件
    // var posts_content=[{
    //   date: "2018-02-26",
    //   title: "标题-",
    //   imgSrc: "/images/post/crab.png",
    //   avatar: "/images/avatar/1.png",
    //   img_condition: true,
    //   content: "课程内容简介111.......",
    //   reding: "203",
    //   collection: "120"
    // },
    // {
    //   date: "2018-02-25",
    //   title: "标题-",
    //   imgSrc: "/images/post/bl.png",
    //   avatar: "/images/avatar/2.png",
    //   img_condition: true,
    //   content: "课程内容简介222.......",
    //   reding: "125",
    //   collection: "23"
    // }];
    this.setData({
      //posts_key: posts_content
      //2 
      posts_key: postsData.postList
    });
    // 等同于把 posts_key:[...]赋值到data中去

    // 3 直接赋值
    // this.data.posts_key = postsData.postList;//TODO 20180226 直接赋值无法在页面中显示数据，但是经过调试，变量中的值是有数据的.猜测和数据绑定运行的生命周期有关。用该方式直接赋值的，数据data不会重新去渲染页面了
    // this.data.title="测试";

    // 等同于把post_content1变量中的值平铺赋值到data下去了
    // this.setData(posts_content1);
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