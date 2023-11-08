import {test_records} from "../report_segments/test_records"
import TestStatus from "../enums/TestStatus"
import TestCategories from "../enums/TestCategories"
import TEST_LIST from "../src/tests_related/test_list"
import DataStoreKeys from "../enums/DataStoreKeys"
import TestReportGenerator from "./TestReportGenerator"
import MBTITestRecordEditor from "./MBTITestRecordManager"

export default class TestManager{
  #test_record;
  #current_test_category;
  #test_report_generator;
  #current_test_record_manager;

  constructor(){
    //let data_storage = this.read_test_record();

    //if(!data_storage){
      this.reset_test_record();
      this.#current_test_category = TestCategories.MBTI;
      this.#test_report_generator = new TestReportGenerator();
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
    this.#current_test_record_manager.is_the_first_question();
  }

  is_the_last_question(){
    return this.are_all_tests_finished();
  }

  get_status_of_category(category){
    return this.#test_record[category]["status"];
  }

  get_current_question(){
    return this.#current_test_record_manager.get_current_question();
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

  get_test_record(){
    return this.#test_record;
  }

  answer_the_current_question(choice){
    if (!this.#current_test_record_manager.answer_the_current_question(choice)){
        this.#move_to_the_next_test_category();//TODO do something if at the end of list
    }
  }

  get_current_question_index(){
    return this.#current_test_record_manager.get_current_question_index();
  }

  reset_test_record(){
    this.#test_record = JSON.parse(JSON.stringify(test_records));
  }

  move_back_to_last_question(){
    this.#current_test_record_manager.move_back_to_last_question();
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
    return this.#current_test_record_manager.get_selected_choice_of_question(cur_index);
  }

  generate_test_report(){
    return this.#test_report_generator.generate_test_report()
  }

  #switch_test_record_manager(test_name){
    this.#update_test_record();
    if(test_name == TestCategories.MBTI){
        this.#current_test_record_manager = new MBTITestRecordEditor(this.#test_record["MBTI"]);
      }
      else if(test_name == TestCategories.FAMILY_ADAPTABILITY_TEST){
        
      }
      else if(test_name == TestCategories.LIFE_PRESSURE_ANALYSIS){
        
      }
      else if(test_name == TestCategories.HAPPY_MARRIAGE_ASSESSMENT){
        
      }
  }

  #update_test_record(test_name){
    this.#test_record[test_name] = this.#current_test_record_manager.get_test_record();
  }

  #move_to_the_next_test_category(){
    const test_category_values = Object.values(TestCategories);
    const index = test_category_values.indexOf(this.#current_test_category);
    if(index != test_category_values.length - 1){
      const next_index = (index + 1) % test_category_values.length;
      var test_name = current_test_category;
      this.#current_test_category = test_category_values[next_index];
      this.#switch_test_record_manager(test_name)
      return true;
    }
    return false;
  }
}