import {test_records} from "../report_segments/test_records"
import TestStatus from "../enums/TestStatus"
import TestCategories from "../enums/TestCategories"
import TEST_LIST from "../src/tests_related/test_list"
import DataStoreKeys from "../enums/DataStoreKeys"

export default class TestManager{
  #test_record;
  #current_test_category;
  #current_sub_test_category;
  #current_selected_test_index;

  constructor(){
    //let data_storage = this.read_test_record();
    
    //if(!data_storage){
      this.reset_test_record();
      this.#current_test_category = TestCategories.MBTI;
      this.#current_selected_test_index = 0;
      this.#init_current_sub_test_category();
    //}
    //else{
      //this.#test_record = data_storage;
    //}
  }

  #init_current_sub_test_category(){
      this.#current_sub_test_category = Object.keys(this.#test_record[this.#current_test_category]["result"])[0];
      this.#current_selected_test_index = 0;
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
    return TEST_LIST[this.#current_test_category]["test_subset"][this.#current_sub_test_category]["questions"][this.#current_selected_test_index];
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
    let cat_index_que_index = this.#convert_index_within_category(this.#current_selected_test_index);
    let cat_index = cat_index_que_index[0];
    let que_index = cat_index_que_index[1];

    return TEST_LIST[this.#current_test_category]["test_subset"][cat_index]["questions"][que_index];//可能这里需要把cat_index改成cat本身
  }

  #convert_index_within_category(overal_index){
    let remaining_index = overal_index;
    let cat_index = 0;

    for(let i = 0; i < TEST_LIST[this.#current_test_category]["test_subset"].length; i++){
        if(remaining_index > TEST_LIST[this.#current_test_category]["test_subset"][i].length){
            cat_index++;
            remaining_index = remaining_index - TEST_LIST[this.#current_test_category]["test_subset"][i].length;
        }else{
            break;
        }
    }

    return [cat_index, remaining_index];
  }

  #close_test_category(){
    this.#test_record[this.#current_test_category]["status"] = TestStatus.FINISHED;
  }

  get_test_record(){
    return this.#test_record;
  }
  

  answer_the_current_question(choice){
    this.#test_record[this.#current_test_category]["result"][this.#current_sub_test_category]["answers"][this.#current_selected_test_index] = choice;

    if(this.#is_at_end_of_test_category()){
        this.#close_test_category();
        this.#move_to_the_next_test_category();
    }
    else if(this.#is_end_of_sub_category()){
        this.#move_to_next_sub_category();
    }
    else{
        this.#update_status_of_subset_to_in_progress();
        this.#move_to_next_question();
    }
  }

  #update_status_of_subset_to_in_progress()
  {
    this.#test_record[this.#current_test_category]["status"] = TestStatus.IN_PROGRESS;
  }

  #move_to_next_question(){
      this.#current_selected_test_index++;
  }

  #move_to_next_sub_category(){
      let keys = Object.keys(this.#test_record[this.#current_test_category]["result"]);
      let index_of_cat = keys.indexOf(this.#current_sub_test_category);
      this.#current_sub_test_category = keys[index_of_cat + 1];
      this.#current_selected_test_index = 0;
  }

  #is_at_end_of_test_category(){
    return this.#check_if_all_questions_of_category_answered();
  }

  #check_if_all_questions_of_category_answered(){
      let all_test_answered = true;
      let sub_categories = this.#collect_sub_categories();
      let subset = TEST_LIST[this.#current_test_category]["test_subset"];

      for(let i = 0; i < sub_categories.length; i++){
        if(subset[i]["questions"].length != this.#test_record[this.#current_test_category]["result"][sub_categories[i]]["answers"].length){
            all_test_answered = false;
            break;
        }
      }

      return all_test_answered;
  }

  #collect_sub_categories(){
      let result = [];
      let subset = TEST_LIST[this.#current_test_category]["test_subset"];

      for(let i = 0; i < subset.length; i++){
        result.push(subset[i]["category"]);
      }

      return result;
  }

  #is_end_of_sub_category(){
    let keys = Object.keys(this.#test_record[this.#current_test_category]["result"]);
    let index_of_cat = keys.indexOf(this.#current_sub_test_category);
    let amount_of_question = TEST_LIST[this.#current_test_category]["test_subset"][index_of_cat]["questions"].length;

    if(this.#current_selected_test_index == amount_of_question - 1){
        return true;
    }
    return false;
  }

  #is_is_the_question_answered(result, index){

  }

  #collect_result_for_this_category(){
      let result = {};
      let keys = Object.keys(this.#test_record[this.#current_test_category]["result"])
      for(let i = 0; i < keys.length; i++){
         result[keys[i]] = {
             answers: this.#test_record[this.#current_test_category]["result"][keys[i]]["answers"]
         };
      }

      return result;
  }

  is_end_of_a_test_list(){
    let amount_test = this.get_amount_of_questions_of_current_test_category()
    if(this.#current_selected_test_index == amount_test - 1){
      return true;
    }
    return false;
}

  get_amount_of_questions_of_current_test_category(){
    let cur_test_list = TEST_LIST[this.#current_test_category];
    let result = -1; 
    if(cur_test_list['questions'] === undefined){

    }
    else{
        result = cur_test_list['questions'].length;
    }

    return result;
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
    let cur_index = this.#convert_index_within_category(this.get_current_question_index());
    /*return this.#current_test_record_manager.get_selected_choice_of_question(cur_index);*/
    if(cur_index in this.#test_record[this.#current_test_category]["result"][this.#current_sub_test_category]["answers"]){
        return this.#test_record[this.#current_test_category]["result"][this.#current_sub_test_category]["answers"][cur_index]//["choice"] Maybe this choice is not needed
    }
    return null;
  }

  move_to_next_question(){
    this.#current_selected_test_index++;
  }

  #move_to_the_next_test_category(){
    const test_category_values = Object.values(TestCategories);
    const index = test_category_values.indexOf(this.#current_test_category);

    if(index != test_category_values.length - 1){
      const next_index = (index + 1) % test_category_values.length;
      this.#current_test_category = test_category_values[next_index];
      this.#init_current_sub_test_category();
      return true;
    }

    return false;
  }

  get_amount_of_questions_of_current_test_category(){
    let sum = 0;
    let cur_test_list = TEST_LIST[this.#current_test_category];

    for(let i = 0; i < cur_test_list["test_subset"].length; i++){
        sum += cur_test_list["test_subset"][i]['questions'].length;
    }

    return sum;
  }

#is_the_question_answered(existing_result, insert_index){
    let cat_index_que_index = this.#convert_index_within_category(this.#current_selected_test_index);
    let cat_index = cat_index_que_index[0];
    let que_index = cat_index_que_index[1];

    let len_of_existing_result = this.#collect_len_of_result(existing_result);

    if(len_of_existing_result === 0){
      return false;
    }
    return len_of_existing_result > insert_index;
}

#collect_len_of_result(result){
    let len = 0;

    let keys = Object.keys(result);

    for(let i = 0; i < keys.length; i++){
        len += result[keys[i]]["answers"].length;
    }

    return len;
}

#update_the_question_with_new_answer(existing_answers, insert_index, choice){
    existing_answers[insert_index] = choice;
}

#extend_test_record_with_new_answer(result, insert_index, choice){
    result[this.#current_sub_test_category]["answers"].splice(insert_index, 0, choice);
}
}