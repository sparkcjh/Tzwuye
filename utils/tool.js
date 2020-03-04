// 原生封装
// 判空，简单数据类型
let isNull = (value) => {
  if (value == '' || value == null || value == undefined) {
    return true;
  }
  return false;
}
// 封装数据对象
let toObject = (objectName, objectValue) => {
  return { objectName: objectValue }
}
// 数组单选,以下标换值
let selectArrayValue = (array) =>{
  
}
let getArrayIndex = (arr, obj) => {
  var i = arr.length;
  while (i--) {
    if (arr[i] === obj) {
      return i;
    }
  }
  return -1;
}
// true。false互换
let onoff = (flag) =>{
  return !flag;
}
// 微信封装
// 提示
let toast = (title,icon=false) =>{
  wx.showToast({ title: title, icon: icon?icon:"none"})
}
// 日志打印
let log = (title,option=true) =>{
  if (option){
    console.log(title);
  }
}
// 后台请求
let get = (url,data,fuc,header) =>{
  wx.request({
    url: url,
    data:data,
    header: header,
    success(res) {
      typeof funct == "function" && fuc(res)
    }
  })
} 
let post = (url,data,fuc,header) =>{
  wx.request({
    url: url,
    data:data,
    header: header,
    success(res) {
      typeof funct == "function" && fuc(res)
    }
  })
} 

// 登录(参数：登录地址,成功回调，失败回调)
let login = (url,success,fail) =>{
  wx.login({
    success(res) {
      if (res.code) {
        //发起网络请求
        wx.request({
          url: url,
          data: {
            code: res.code
          }
        })
        typeof success == "function" && success(res)
      } else {
        typeof fail == "function" && fail()
      }
    }
  })
}
// 修改缓存
let getMap = (key) => {
  return wx.getStorageSync(key);
}
let setMap = (key,value) => {
  return wx.setStorageSync(key,value);
}
// 链接类型
let link = (url,type) => {
  switch (type){
    case 'tab':
      wx.switchTab({ url: url });
      break;
    case 'pages':
      wx.navigateTo({ url: url});
      break;
    default:
      wx.navigateTo({ url: url });
  }
}
let back = (page=1) =>{
  wx.navigateBack({ delta:page});
}
//获取历史
let hository = (index=1) =>{
  let pages = getCurrentPages();
  let page = pages[pages.length - index];  
  return page==null || page==undefined? null : page
} 
// 当前页
let page = () => {
  let pages = getCurrentPages();
  let Page = pages[pages.length - 1];
  return Page;
}
export default{
  isNull,
  toObject,
  selectArrayValue,
  toast,
  log,
  get,
  post,
  login,
  getMap,
  setMap,
  link,
  back,
  hository,
  page
}

