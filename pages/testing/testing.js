// pages/testing/testing.js
const app = getApp()

Page({
  data: {
    current_question: {},
    selected_choice: null,
    progress: 0.7,
    is_the_first_question: true,
    is_the_last_question: false
  },
  start_test(){
    this.is_entry_page = false;
  },
  on_radio_change: function(event) {
    this.selected_choice = event.detail.value;
  },
  on_previous_question: function(event){
    if(selected_choice){
      app.global_data.test_manager.move_back_to_last_question()
      const previous_question = app.global_data.test_manager.get_current_test();
      this.setData({
        current_question: previous_question,
        selected_choice: null,
        is_the_first_question: app.global_data.test_manager.is_the_first_question(),
        is_the_last_question: app.global_data.test_manager.are_all_tests_finished()
      });
    }
  },
  on_next_question: function(event){
    //TODO: if is the end of a test, switch to the next one
    if (this.selected_choice) {
      app.global_data.test_manager.answer_the_current_question(this.selected_choice);
      app.global_data.test_manager.store_test_record();

      // Get the next question from your question list and update the current_question property
      const next_question = app.global_data.test_manager.get_current_question();
      debugger
      if (next_question.ID == 1) {
        this.setData({
          current_question: next_question,
          selected_choice: null,
          is_the_first_question: app.global_data.test_manager.is_the_first_question(),
          is_the_last_question: app.global_data.test_manager.are_all_tests_finished()
        });
      } else {
        // No more questions, TODO
      }
    }
  },
  onLoad(options) {
    this.setData({
      current_question: app.global_data.test_manager.get_current_question()
    });
    this.on_previous_question = this.on_previous_question.bind(this);
    this.on_next_question = this.on_next_question.bind(this);
    this.on_radio_change = this.on_radio_change.bind(this);
  }
});