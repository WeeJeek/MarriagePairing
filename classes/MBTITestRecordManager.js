import TestRecordManager from "./TestRecordManager"
import TestCategories from "../enums/TestCategories"
import TestStatus from "../enums/TestStatus"

export default class MBTITestRecordManager extends TestRecordManager{
    #test_record;
    #current_selected_test_index = 0;

    constructor(mbti_test_record){
        super();
        this.#test_record = mbti_test_record;
    }
    is_the_first_question(){
        return this.#current_selected_test_index == 0;
      }

      get_current_question(){
        return TEST_LIST[TestCategories.MBTI]["questions"][this.#current_selected_test_index];
      }
      get_current_question_index(){
        return this.#current_selected_test_index;
      }

      move_back_to_last_question(){
        this.#current_selected_test_index--;
      }

    get_selected_choice_of_question(index){
        if(index in this.#test_record["answers"]){
            return this.#test_record["answers"][index]["choice"]
        }
        return null;
    }
    
    answer_the_current_question(choice){
        var index = this.get_current_question_index();
        this.#update_answer(index, choice);
        this.#test_record["status"] = TestStatus.IN_PROGRESS;
        //TODO
        if(this.#is_end_of_a_test_list()){
          this.#current_selected_test_index = 0;
          this.#test_record["status"] = TestStatus.FINISHED;
          if(!this.are_all_tests_finished())
            return false;
        }
        else{
          return true;
        }
    }

    get_amount_of_questions_of_current_test_category(){//This is just added. Fix it here
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

    #is_end_of_a_test_list(){
        let amount_test = this.get_amount_of_questions_of_current_test_category()
        if(this.#current_selected_test_index == amount_test - 1){
          return true;
        }
        return false;
    }

    #update_answer(selected_index, choice){//somewhere should update the selectede_index to user selected one, not current one
        let answers = this.#test_record["answers"];
        let insert_index = selected_index;
    
        if(this.#is_the_question_answered(answers, insert_index)){
          this.#update_the_question_with_new_answer(answers, insert_index, choice, mbti_category);
        }
        else{
          this.#extend_test_record_with_new_answer(answers, insert_index, choice);
        }
    }

    #is_the_question_answered(existing_answers, insert_index){
        if(existing_answers.length === 0){
          return false;
        }
        return existing_answers.length > insert_index;
    }

    #update_the_question_with_new_answer(existing_answers, insert_index, choice, mbti_category){
        existing_answers[insert_index]["choice"] = choice;
        existing_answers[insert_index]["MBTICategory"] = mbti_category;
    }
  
    #extend_test_record_with_new_answer(answers, insert_index, choice){
        answers.splice(insert_index, 0, choice);
    }
}
