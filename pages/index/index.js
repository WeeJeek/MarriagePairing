import TestManager from "../../utils/TestManager";
const app = getApp()

Page({
    data: {
      test_progress_manager:"",
      has_test_progress:false
    },
    onLoad(res) {
      this.test_manager = new TestManager()
      console.log(this.test_manager)
      this.setData({has_test_progress: this.test_manager.check_test_record_exist()})
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