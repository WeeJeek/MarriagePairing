import {test_records} from "../src/tests_related/test_records"
import TestStatus from "../enums/TestStatus"
import TestCategories from "../enums/TestCategories"

export default class TestManager{
  #test_record;
  #current_test_category;
  #current_selected_test_index;

  constructor(){
    this.#test_record = test_records;
    this.#current_test_category = TestCategories.MBTI;
    this.#current_selected_test_index = 0;
  }

  answer_the_current_question(choice){
    this._insert_new_answer(choice);
    this.#test_record.test_progress[this.#current_test_category]["status"] = TestStatus.IN_PROGRESS;
    this.#current_selected_test_index++;
        //TODO Move index and category
  }

  move_back_to_last_question(){
    this.#current_selected_test_index--;
  }

  _insert_new_answer(choice)
  {
    console.log('choice is: ' + choice)
    let answers = this.#test_record.test_progress[this.#current_test_category]["answers"].sort((a, b)=> a.index - b.index)
    const new_answer = {index: this.#current_selected_test_index, answer: choice}
    let insert_index = answers.length;

    for (let i = 0; i < answers.length; i++) {
      if (this.#current_selected_test_index < answers[i].index) {
        insert_index = i;
        break;
      }
    }

    answers.splice(insert_index, 0, new_answer);
    console.log(answers)
    console.log(answers[insert_index].answer)
    
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
}