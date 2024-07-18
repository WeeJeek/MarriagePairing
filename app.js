import TestReportGenerator from "./classes/TestReportGenerator"

App({
  global_data: {
    user_info: "",
    test_manager: null,
    report_generator: new TestReportGenerator(),
    app_name: "盟约吧"
  },
  onHide: function(){
    if(this.global_data.test_manager){
      this.global_data.test_manager.store_test_record();
    }
  },
  onLaunch: function(){
    wx.cloud.init({
        env: 'db-we-convenant-4gpanifs779587a6', // 云开发环境ID
        traceUser: true, // 是否在用户访问记录中携带用户信息
      })
  }
});