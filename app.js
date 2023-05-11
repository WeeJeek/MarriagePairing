
import TestReportGenerator from "./classes/TestReportGenerator"

App({
  global_data: {
    user_info: "",
    test_manager: null,
    report_generator: new TestReportGenerator(),
    app_name: "盟约吧"
  },
  onHide: function(){
    if(global_data.test_manager){
      this.global_data.test_manager.store_test_record()
    }
  }
});