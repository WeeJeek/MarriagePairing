App({
  global_data: {
    user_info: "",
    test_manager: null
  },
  onHide: function(){
    if(global_data.test_manager){
      this.global_data.test_manager.store_test_record()
    }
  }
});