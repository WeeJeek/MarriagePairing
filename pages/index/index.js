import TestManager from "../../classes/TestManager";
const app = getApp()

Page({
    data: {
      has_test_progress: true,
      are_tests_all_finished: true,
      test_progress_manager: null
    },
    onLoad(res) {
      app.global_data.test_manager = new TestManager();
      this.setData({
        has_test_progress: app.global_data.test_manager.check_test_record_exist(),
        are_tests_all_finished: app.global_data.test_manager.are_all_tests_finished()
      })
    },
    process_to_payment:res=>{},
    start_from_history:res =>{
      console.log("user starts testing from previous progress.");
    },
    restart_test:res=>{
      app.global_data.test_manager.reset_test_record();
      wx.navigateTo({
        url: '../testing/testing'
      });
    },
    start_test: res=>{
      wx.navigateTo({
        url: '../testing/testing'
      });
    }  
})