import {TestProgressManager} from "../../utils/TestProgressManager"

const app = getApp()

Page({
    data: {
      test_progress_manager:"",
      has_test_progress:false
    },
    onLoad(res) {
      this.test_progress_manager = new TestProgressManager()
      app.global_data.test_progress_manager = this.test_progress_manager
      this.setData({
        has_test_progress: this.test_progress_manager.has_test_progress()
      });  
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