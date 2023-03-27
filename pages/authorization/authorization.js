import DataStoreKeys from "../../enums/DataStoreKeys"

const app = getApp();

Page({
  data:{
    is_authed: false
  },
  onLoad(){
    var user_info = wx.getStorageSync(DataStoreKeys.USER_INFO)
    /*this.setData({
      is_authed: true //TODO 会造成渲染空白页面
    })*/
    if(user_info)
    {
      app.global_data.user_info = user_info
      this.navigate_to_index()
      console.log("user was already logged before")
    }
  },
  login(){
    console.log("button pressed")
    wx.getUserProfile({
      desc: "授权以正常使用小程序",
      success: res => {
        app.global_data.user_info = res.userInfo
        this.setData({
          is_authed: true
        });
        console.log('successfully got user profile', res)
        this.navigate_to_index()
        this.save_to_cache()
      },
      fail: res => {
        console.log('fail to get user profile', res)
      }
    })
  },
  navigate_to_index: res => {
    wx.navigateTo({
      url: '../index/index'
    });
  }, 
  save_to_cache: res => {
    wx.setStorageSync(DataStoreKeys.USER_INFO, app.global_data.user_info)
  }
})