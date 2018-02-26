//从服务器中请求数据来 理解为本地数据库 这里没有去请求数据库
var local_database = [{
  date: "2018-02-26",
  title: "标题-",
  imgSrc: "/images/post/crab.png",
  avatar: "/images/avatar/1.png",
  img_condition: true,
  content: "课程内容简介111.......",
  reding: "203",
  collection: "120"
},
{
  date: "2018-02-25",
  title: "标题-",
  imgSrc: "/images/post/bl.png",
  avatar: "/images/avatar/2.png",
  img_condition: true,
  content: "课程内容简介222.......",
  reding: "125",
  collection: "23"
},
{
  date: "2018-02-24",
  title: "标题-",
  imgSrc: "/images/post/cat.png",
  avatar: "/images/avatar/3.png",
  img_condition: true,
  content: "课程内容简介3333.......",
  reding: "268",
  collection: "55"
}];

var a = "2";
// 定义出口
module.exports = {
  postList:local_database,
  a_key:a
};