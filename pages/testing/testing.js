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
    console.log("in start test: " + this.current_question)
  },
  on_radio_change: function(event) {
    console.log("on_radio_change called");

    this.setData({
      selected_choice: event.detail.value
    });
    console.log(this.data.selected_choice);
  },
  on_previous_question(){

  },
  on_next_question(){

  },
  onLoad(options) {
    //debugger;
    this.setData({
      current_question: app.test_manager.get_current_test()
    });
    this.on_checkbox_change = this.on_checkbox_change.bind(this);
  }
});