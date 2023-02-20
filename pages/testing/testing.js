// pages/testing/testing.js

const app = getApp()

Page({
  data: {
    is_entry_page: true,
    current_test: {},
    test_index: 0,
    progress: 0.7
  },
  start_test(){
    this.is_entry_page = false;
    this.current_test = app.test_progress_manager.get_current_test()
    console.log("in start test: " + this.current_test)
  },
  onLoad(options) {
  
  },
  onReady() {

  },
  onShow() {
  
  },
  onHide() {

  },
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