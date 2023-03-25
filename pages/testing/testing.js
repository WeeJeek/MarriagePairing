// pages/testing/testing.js
import TestManager from "../../classes/TestManager";
const app = getApp()

Page({
  data: {
    current_question: {},
    selected_choice: null,
    progress: 0.7
  },
  start_test(){
    this.is_entry_page = false;
  },
  on_radio_change: function(event) {
    this.setData({
      selected_choice: event.detail.value
    });
    console.dir(this.data.selected_choice);
  },
  on_previous_question(){

  },
  on_next_question(){

  },
  onLoad(options) {
    this.setData({
      current_question: app.global_data.test_manager.get_current_test()
    });
    this.on_radio_change = this.on_radio_change.bind(this);
  }
});