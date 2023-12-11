import TestRecordManager from "./TestRecordManager"
import TestCategories from "../enums/TestCategories"
import TestStatus from "../enums/TestStatus"
import TEST_LIST from "../src/tests_related/test_list"

export default class MBTITestRecordManager extends TestRecordManager{
    #test_record;
    #current_selected_test_index = 0;

    constructor(mbti_test_record){
        super();
        this.#test_record = mbti_test_record;
    }
    /**is_the_first_question(){
        return this.#current_selected_test_index == 0;
    }*/

    /*close_test_category(){
        this.#test_record["status"] = TestStatus.FINISHED;//make this common to other managers
    }*/
    /*get_current_question(){
        return TEST_LIST[TestCategories.MBTI]["questions"][this.#current_selected_test_index];
    }*/
    /**get_current_question_index(){
        return this.#current_selected_test_index;
    }*/
    /**move_back_to_last_question(){
        this.#current_selected_test_index--;
    }*/
    /*get_selected_choice_of_question(index){
        if(index in this.#test_record["answers"]){
            return this.#test_record["answers"][index]["choice"]
        }
        return null;
    }*/
    /*answer_the_current_question(choice){//can this be common?
        var index = this.get_current_question_index();

        let answers = this.#test_record["answers"];
    
        if(this.#is_the_question_answered(answers, index)){
          //let mbti_category = this.#get_mbti_category(choice, insert_index); this line might be used when generating report.
          this.#update_the_question_with_new_answer(answers, index, choice,);
        }
        else{
          this.#extend_test_record_with_new_answer(answers, index, choice);
        }
        this.#test_record["status"] = TestStatus.IN_PROGRESS;
    }*/

    /**is_end_of_a_test_list(){
        let amount_test = this.get_amount_of_questions_of_current_test_category()
        if(this.#current_selected_test_index == amount_test - 1){
          return true;
        }
        return false;
    }*/

    /*move_to_next_question(){
        this.#current_selected_test_index++;//make this common to other managers
    }*/

    get_amount_of_questions_of_current_test_category(){//This is just added. Fix it here
        let cur_test_list = TEST_LIST[TestCategories.MBTI];
        /*if(this.#current_test_category == TestCategories.HAPPY_MARRIAGE_ASSESSMENT || this.#current_test_category == TestCategories.FAMILY_ADAPTABILITY_TEST){
            for(let j = 0; j < cur_test_list['test_subset'].length; j++){
                sum += cur_test_list['test_subset'][j]['questions'].length;
            }
        }
        else{*/
        var sum = cur_test_list['questions'].length;
        //}
        return sum;
      }

    #is_the_question_answered(existing_answers, insert_index){
        if(existing_answers.length === 0){
          return false;
        }
        return existing_answers.length > insert_index;
    }

    #get_mbti_category(choice, insert_index){
        let choices = TEST_LIST[TestCategories.MBTI]["questions"][insert_index]["choices"]
        let category;
        
        if(choices[0]["index"] == choice){
            category = choices[0]["category"];
        }else{
            category = choices[1]["category"];
        }
        
        return category;
    }

    #update_the_question_with_new_answer(existing_answers, insert_index, choice){
        existing_answers[insert_index] = choice;
    }
  
    #extend_test_record_with_new_answer(answers, insert_index, choice){
        answers.splice(insert_index, 0, choice);
    }
}
