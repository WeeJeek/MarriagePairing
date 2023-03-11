

const app = getApp()

Page({
    data: {
      test_progress_manager:"",
      has_test_progress:false
    },
    onLoad(res) {
      
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