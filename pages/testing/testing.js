// pages/testing/testing.js

import TestManager from "../../classes/TestManager";

const app = getApp()

Page({
  data: {
    has_test_progress: true,
    is_tests_all_finished: false,
    current_test: {},
    test_index: 0,
    progress: 0.7
  },
  start_test(){
    this.is_entry_page = false;
    console.log("in start test: " + this.current_test)
  },
  onLoad(options) {
    app.test_manager = new TestManager()
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