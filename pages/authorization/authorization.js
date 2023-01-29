const app = getApp();

Page({
  data:{
    is_authed: false
  },
  login(){
    console.log("button pressed")
    wx.getUserProfile({
      desc: "授权以正常使用小程序",
      success: res => {
        app.global_data.user_info = res.userInfo
        this.is_authed = true
        console.log('successfully got user profile', res)
      },
      fail: res => {
        console.log('fail to get user profile', res)
      }
    })
  }
})





/*
// pages/authorization/authorization.js
//import {UserManager} from '../../utils/UserManager'
//let user_manager = new UserManager();
const app = getApp();
//TODO:
// [] if user is already authed, skip the process.
Page({
  data: {
    is_authorized: wx.canIUse('button.open-type.getUserInfo'),
  },
  bindGetUserInfo: function (e) { //点击的“拒绝”或者“允许
    if (e.detail.userInfo) { //点击了“允许”按钮，
      wx.login({ // 调用微信登录api
        success: res => { // 这一步是获取用户在小程序里的临时code码
          wx.getUserInfo({
            success: res => {
              console.log("successfully sent the request");
            }
          });
          wx.getSetting({
            success:res => {
              app.global_data.user_info = res.userInfo;
              console.log("successfully get user info")

              //getUserInfo communicate via Network, the data might stuck on Page.Load. having a callbac to prevent this from happening
              if(this.userInfoReadyCallback){
                this.userInfoReadyCallback(res);
              }
            }
          });
          wx.navigateTo({
            url: '../index/index'
          });

          //app.http.getOpenId({ // 请求后台接口，用code码换取用户信息openid或者token
          //  js_code: res.code,
          //}).then(res => {
          //  wx.setStorageSync('openid', res.data.openid)
          //  wx.setStorageSync('Token', res.data.Token)
          //})
        },
        fail: function (res) { // 获取code码失败的方法
          return app.ShowToast('授权失败' + res.Msg)
        }
      })
    } else {
    	//用户点击拒绝逻辑
    }
  },//end of bindGetUserInfo


  onLoad: function (options) {
    
  },

  onReady() {

  },


  onShow() {

  },

  onHide() {

  },


  onUnload() {

  },


  onPullDownRefresh() {

  },

  onReachBottom() {

  },


  onShareAppMessage() {

  }
})*/