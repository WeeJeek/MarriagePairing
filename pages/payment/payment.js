// pages/payment/payment.js
import PaymentProcessor from "../../classes/PaymentProcessor"

const app = getApp()

Page({
  data: {
    is_paid: false,
    payment_processor: new PaymentProcessor(),
  },
  onLoad(options) {
    this.on_generate_report = this.on_generate_report.bind(this);
    wx.redirectTo({
      url: '../report/report'
    }); 
  },
  on_generate_report: res=>{
    console.log("user pressed to generate report");
    // the implementation depends on how the payment is done
    wx.redirectTo({
      url: '../report/report'
    }); 
    console.log("frdf")
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