import TestManager from "../../classes/TestManager";
const app = getApp()

Page({
    data: {
      has_test_progress: true,
      is_tests_all_finished: true,
      test_progress_manager: null
    },
    onLoad(res) {
      app.test_manager = new TestManager()
      this.setData({
        has_test_progress: app.test_manager.check_test_record_exist(),
        is_tests_all_finished: app.test_manager.are_all_tests_finished()
      })
    },

    back_to_progress:res =>{
      console.log("user starts testing from previous progress.")
    },
    restart_test: res=>{
      wx.navigateTo({
        url: '../testing/testing'
      });
      console.log("user starts testing from the beginning.")
    }
})