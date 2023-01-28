// pages/index/index.js
import {UserManager} from "../../utils/UserManager"
const app = getApp()

Page({
    data: {
      is_authenticed: false,
      app : getApp(),
    },

    onLoad(options) {
      console.log("onLoad page loading");
      this.verify_user_authorization();
      this.get_user_info();      
    },

    verify_user_authorization(data){
      wx.getSetting({
        success: (data) => {
          if(data.authSetting['scope.userInfo']){
            //authed
            this.setData({is_authenticed: true});
            console.log("user is authed");
          }else{
            //not authed
            this.setData({is_authenticed: false});
            console.log("user is not authed");
          }
        }
      })
    },
    
    get_user_info(res){
      wx.getUserInfo({
        success: res => {
          console.log("User info got.");
          console.log(res);
        },
        fail: res =>{
          console.log("Didn't get user info got.");
        }
      })
    },

    handle_user_authorization(data)
    {
      console.log("user clicked botton to authorize");
      if(data.detail.rawData){
        this.verify_user_authorization();
        this.get_user_info();
      }
    },

  
    load_mbti_test(){
      const fs = wx.getFileSystemManager();
      fs.readFile({
        filePath: 'app.data.test_path.MBTI',
        encoding: 'utf8',
        position: 0,
        success(res){
          console.log(res.data)
        },
        fail(res){
          console.error(res)
        }
      });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})