import {test_records} from "../src/tests_related/test_records"
import TestStatus from "../enums/TestStatus"
import TestCategories from "../enums/TestCategories"
import TEST_LIST from "../src/tests_related/test_list"

export default class TestManager{
  #test_record;
  #current_test_category;
  #current_selected_test_index;

  constructor(){
    this.reset_test_record();
    this.#current_test_category = TestCategories.MBTI;
    this.#current_selected_test_index = 0;
  }

  answer_the_current_question(choice){
    this.#insert_new_answer(choice);
    this.#test_record.test_progress[this.#current_test_category]["status"] = TestStatus.IN_PROGRESS;
    if(this.#is_end_of_a_test_list()){
      this.#current_selected_test_index = 0;
      this.#test_record["test_progress"][this.#current_test_category]["status"] = TestStatus.FINISHED;
      if(!this.are_all_tests_finished())
      {
        this.#move_to_the_next_test_category()//TODO do something if at the end of list
      }
    }
    else{
      this.#current_selected_test_index++;
    }
  }

  get_status_of_category(category){
    return this.#test_record["test_progress"][category]["status"];
  }

  are_all_tests_finished(){
    const test_category_values = Object.values(TestCategories);
    let all_finished = true;
    for (let i = 0; i < test_category_values.length; i++) {
      let cur_test_list = this.#test_record["test_progress"][test_category_values[i]]
      if(cur_test_list["status"] != TestStatus.FINISHED){
        all_finished = false;
        break;
      }
    }
    return all_finished;
  }

  reset_test_record(){
    this.#test_record = JSON.parse(JSON.stringify(test_records));
  }

  move_back_to_last_question(){
    this.#current_selected_test_index--;
  }

  get_current_test_category(){
    return this.#current_test_category;
  }

  get_amount_of_questions_of_current_test_category(){
    let cur_test_list = TEST_LIST[this.#current_test_category]
    return cur_test_list['questions'].length;
  }

  get_test_record(){
    return this.#test_record;
  }

  check_test_record_exist(){
    let result = false;
    let test_names = Object.keys(this.#test_record.test_progress);

    for(let i = 0; i < test_names.length; i++){
      const test_name = test_names[i];
      const test = this.#test_record.test_progress[test_name];

      if(test.status !== TestStatus.UNTOUCHED)
      {
        result = true;
        break;
      }
    }
    return result;
  }

  get_current_test_index(){
    return this.#current_selected_test_index;
  }

  #move_to_the_next_test_category(){
    const test_category_values = Object.values(TestCategories);
    const index = test_category_values.indexOf(this.#current_test_category);
    if(index != test_category_values.length - 1){
      const next_index = (index + 1) % test_category_values.length;
      this.#current_test_category = test_category_values[next_index];
      return true;
    }
    return false;
  }

  #is_end_of_a_test_list(){
    let amount_test = this.get_amount_of_questions_of_current_test_category()
    if(this.#current_selected_test_index == amount_test - 1){
      return true;
    }
    return false;
  }

  #insert_new_answer(choice)
  {
    let answers = this.#test_record.test_progress[this.#current_test_category]["answers"].sort((a, b)=> a.index - b.index)
    const new_answer = {index: this.#current_selected_test_index, answer: choice}
    let insert_index = answers.length - 1;

    for (let i = 0; i < answers.length; i++) {
      if (this.#current_selected_test_index < answers[i].index) {
        insert_index = i;
        break;
      }
    }

    answers.splice(insert_index, 0, new_answer);
  }

}