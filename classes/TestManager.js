import {test_records} from "../report_segments/test_records"
import TestStatus from "../enums/TestStatus"
import TestCategories from "../enums/TestCategories"
import TEST_LIST from "../src/tests_related/test_list"
import DataStoreKeys from "../enums/DataStoreKeys"

export default class TestManager{
  #test_record;
  #current_test_category;
  #current_selected_test_index; 
  #DEFAULT_TEST_CATEGORY = TestCategories.MBTI;

  constructor(){
    //let data_storage = this.read_test_record();

    //if(!data_storage){
      this.reset_test_record();
      this.#current_test_category = TestCategories.MBTI;
      this.#current_selected_test_index = 0;
    //}
    //else{
      //this.#test_record = data_storage;
    //}
  }

  are_all_tests_finished(){
    const test_category_values = Object.values(TestCategories);
    let all_finished = true;
    for (let i = 0; i < test_category_values.length; i++) {
      let cur_test_list = this.#test_record[test_category_values[i]]
      if(cur_test_list["status"] != TestStatus.FINISHED){
        all_finished = false;
        break;
      }
    }
    return all_finished;
  }

  check_test_record_exist(){
    let result = false;
    let test_names = Object.keys(this.#test_record);

    for(let i = 0; i < test_names.length; i++){
      const test_name = test_names[i];
      const test = this.#test_record[test_name];

      if(test.status !== TestStatus.UNTOUCHED)
      {
        result = true;
        break;
      }
    }
    return result;
  }

  is_the_first_question(){
    return this.#current_selected_test_index == 0;
  }

  is_the_last_question(){//OF a category?
    return this.are_all_tests_finished();
  }

  get_status_of_category(category){
    return this.#test_record[category]["status"];
  }

  get_current_question(){
    return TEST_LIST[this.#current_test_category]["questions"][this.#current_selected_test_index];
  }

  get_current_test_category(){
    return this.#current_test_category;
  }

  get_title_of_current_test_category(){
    return TEST_LIST[this.#current_test_category]["title"];
  }

  get_description_of_current_test_category(){
    return TEST_LIST[this.#current_test_category]["description"];
  }

  get_rule_of_current_test_category(){
    return TEST_LIST[this.#current_test_category]["rule"];
  }

  get_amount_of_questions_of_current_test_category(){
    let cur_test_list = TEST_LIST[this.#current_test_category]
    var sum = 0;

    if(this.#current_test_category == TestCategories.HAPPY_MARRIAGE_ASSESSMENT || this.#current_test_category == TestCategories.FAMILY_ADAPTABILITY_TEST){
        for(let j = 0; j < cur_test_list['test_subset'].length; j++){
            sum += cur_test_list['test_subset'][j]['questions'].length;
        }
    }
    else{
        sum += cur_test_list['questions'].length;
    }
    return sum;
  }

  get_current_question(){
    return TEST_LIST[this.#current_test_category]["questions"][this.#current_selected_test_index];
}

  #close_test_category(){
    this.#test_record[this.#current_test_category]["status"] = TestStatus.FINISHED;
  }

  get_test_record(){
    return this.#test_record;
  }

  answer_the_current_question(choice){
    var index = this.get_current_question_index();

    let answers = this.#test_record[this.#current_test_category]["answers"];

    if(this.#is_the_question_answered(answers, index)){
        this.#update_the_question_with_new_answer(answers, index, choice,);
    }
    else{
        this.#extend_test_record_with_new_answer(answers, index, choice);
        this.#test_record[this.#current_test_category]["status"] = TestStatus.IN_PROGRESS;
    }

    if (this.is_end_of_a_test_list()){
        this.#close_test_category();
        this.#move_to_the_next_test_category();//TODO do something if at the end of list f
    }
    else{
        this.move_to_next_question();
    }
  }

  is_end_of_a_test_list(){
    let amount_test = this.get_amount_of_questions_of_current_test_category()
    if(this.#current_selected_test_index == amount_test - 1){
      return true;
    }
    return false;
}

  get_amount_of_questions_of_current_test_category(){//This is just added. Fix it here
    let cur_test_list = TEST_LIST[this.#current_test_category];
    let result = -1; 
    if(cur_test_list['questions'] === undefined){

    }
    else{
        result = cur_test_list['questions'].length;
    }
    
    /*if(this.#current_test_category == TestCategories.HAPPY_MARRIAGE_ASSESSMENT || this.#current_test_category == TestCategories.FAMILY_ADAPTABILITY_TEST){
        for(let j = 0; j < cur_test_list['test_subset'].length; j++){
            sum += cur_test_list['test_subset'][j]['questions'].length;
        }
    }
    else{*/
    return result;
    //}
  }

  get_current_question_index(){
    return this.#current_selected_test_index;
  }

  reset_test_record(){
    this.#test_record = JSON.parse(JSON.stringify(test_records));
  }

  move_back_to_last_question(){
    if(!this.is_the_first_question()){
        this.#current_selected_test_index--;
    }
  }

  store_test_record(){
    try{
      wx.setStorageSync(DataStoreKeys.HISTORY_TEST_RECORD, this.#test_record);
    }catch(e){
      throw new Error("存储测试记录时发生错误");
    }
  }

  read_test_record(){
    try {
      var value = wx.getStorageSync(DataStoreKeys.HISTORY_TEST_RECORD)
    } catch (e) {
      throw new Error("读取测试记录时发生错误" + e);
    }
  }

  get_selected_choice_of_question(){
    let cur_index = this.get_current_question_index();
    /*return this.#current_test_record_manager.get_selected_choice_of_question(cur_index);*/
    if(cur_index in this.#test_record[this.#current_test_category]["answers"]){
        return this.#test_record[this.#current_test_category]["answers"][cur_index]["choice"]
    }
    return null;
  }

  move_to_next_question(){
    this.#current_selected_test_index++;//make this common to other managers
  }

  #move_to_the_next_test_category(){
    const test_category_values = Object.values(TestCategories);
    const index = test_category_values.indexOf(this.#current_test_category);
    if(index != test_category_values.length - 1){
      const next_index = (index + 1) % test_category_values.length;
      this.#current_test_category = test_category_values[next_index];
      this.#current_selected_test_index = 0;
      return true;
    }
    return false;
  }

  get_amount_of_questions_of_current_test_category(){//This is just added. Fix it here
    let sum = 0;
    let cur_test_list = TEST_LIST[this.#current_test_category];
    if(this.#current_test_category == TestCategories.MBTI || 
        this.#current_test_category == TestCategories.LIFE_PRESSURE_ANALYSIS){
        sum = cur_test_list['questions'].length;
    }
    else{
        sum = cur_test_list["test_subset"][0]['questions'].length;
    }
    return sum;
    
    /*if(this.#current_test_category == TestCategories.HAPPY_MARRIAGE_ASSESSMENT || this.#current_test_category == TestCategories.FAMILY_ADAPTABILITY_TEST){
        for(let j = 0; j < cur_test_list['test_subset'].length; j++){
            sum += cur_test_list['test_subset'][j]['questions'].length;
        }
    }
    else{*/
    
  }

#is_the_question_answered(existing_answers, insert_index){
    if(existing_answers.length === 0){
      return false;
    }
    return existing_answers.length > insert_index;
}

#update_the_question_with_new_answer(existing_answers, insert_index, choice){
    existing_answers[insert_index] = choice;
}

#extend_test_record_with_new_answer(answers, insert_index, choice){
    answers.splice(insert_index, 0, choice);
}
}