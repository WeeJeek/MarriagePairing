// pages/testing/testing.js
const app = getApp()

Page({
  data: {
    current_question: {},
    selected_choice: null,
    progress: 0.7,
    is_the_first_question: true,
    is_the_last_question: false,
    all_tests_finished: false,
    current_index: 0,
    total_amount: 0
  },
  start_test(){
    this.is_entry_page = false;
  },
  on_radio_change: function(event) {
    this.selected_choice = event.detail.value;
  },
  on_previous_question: function(event){
    app.global_data.test_manager.move_back_to_last_question()
    const current_question = app.global_data.test_manager.get_current_question();
    this.selected_choice = app.global_data.test_manager.get_selected_choice_of_question();
    this.setData({
      current_question: current_question,
      is_the_first_question: app.global_data.test_manager.is_the_first_question(),
      is_the_last_question: app.global_data.test_manager.are_all_tests_finished(),
      current_index: app.global_data.test_manager.get_current_question_index(),
      total_amount: app.global_data.test_manager.get_amount_of_questions_of_current_test_category(),
      selected_choice: this.selected_choice
    });
    console.log(this.is_the_first_question)
  },
  on_next_question: function(event){
      console.log("next botton is pressed")
    if (this.selected_choice) {//choice is selected
        console.log("entered if")
      app.global_data.test_manager.answer_the_current_question(this.selected_choice);
      app.global_data.test_manager.store_test_record();

      const next_question = app.global_data.test_manager.get_current_question();
      console.log("Next question: " + JSON.stringify(next_question))
      let selected_choice = app.global_data.test_manager.get_selected_choice_of_question();
      if (next_question.ID != 1) {//not the starting of the next test category
        this.setData({
          current_question: next_question,
          selected_choice: selected_choice,
          is_the_first_question: app.global_data.test_manager.is_the_first_question(),
          is_the_last_question: app.global_data.test_manager.are_all_tests_finished(),
          current_index: app.global_data.test_manager.get_current_question_index(),
          total_amount: app.global_data.test_manager.get_amount_of_questions_of_current_test_category()
        });
        this.selected_choice = selected_choice;
      } 
      else {
        console.log("entered else")
        if(!app.global_data.test_manager.are_all_tests_finished()){
          wx.navigateTo({
            url: '../test_description/test_description'
          });
        }
        else{
          //TODO this shall not shown, or switch to payment
          wx.navigateTo({
            url: '../payment/payment'
          });
        }
      }
    }
  },
  onLoad(options) {
    this.setData({
      current_question: app.global_data.test_manager.get_current_question(),
      total_amount: app.global_data.test_manager.get_amount_of_questions_of_current_test_category()
    });
    this.on_previous_question = this.on_previous_question.bind(this);
    this.on_next_question = this.on_next_question.bind(this);
    this.on_radio_change = this.on_radio_change.bind(this);
  }
});