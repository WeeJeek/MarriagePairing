import {TestManager, TestProgressManager} from "../../utils/TestProgressManager"

const app = getApp()

Page({
    data: {
      test_progress_manager:"",
      has_test_progress:""
    },
    onLoad(res) {
      this.test_progress_manager = new TestProgressManager()
      this.has_test_progress = this.test_progress_manager.has_test_progress()
    },
    back_to_progress(res){
      console.log("user starts testing from previous progress.")
    },
    restart_test(res){
      console.log("user starts testing from the beginning.")
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