import TestRecordManager from "./MBTITestRecordManager"
export default class MBTITestRecordManager extends TestRecordManager{
    #test_record;

    constructor(mbti_test_record){
        this.#test_record = test_record;
    }

    get_selected_choice_of_question(index){
        if(index in this.#mbti_test_record["answers"]){
            return this.#mbti_test_category["answers"][index]["choice"]
        }
        return null;
    }

    update_answer(selected_index){
        let answers = this.#test_record["answers"];
        let insert_index = selected_index;
    
        if(this.#is_the_question_answered(answers, insert_index)){
          this.#update_the_question_with_new_answer(answers, insert_index, choice, mbti_category);
        }
        else{
          this.#extend_test_record_with_new_answer(answers, insert_index, choice);
        }
    }

    #update_the_question_with_new_answer(existing_answers, insert_index, choice, mbti_category){
        existing_answers[insert_index]["choice"] = choice;
        existing_answers[insert_index]["MBTICategory"] = mbti_category;
    }

    answer_the_current_question(){
        <--      this.#update_answer(choice);
          this.#test_record[this.#current_test_category]["status"] = TestStatus.IN_PROGRESS;
          //TODO
          if(this.#is_end_of_a_test_list()){
            this.#current_selected_test_index = 0;
            this.#test_record[this.#current_test_category]["status"] = TestStatus.FINISHED;
            if(!this.are_all_tests_finished())
            {
              this.#move_to_the_next_test_category()//TODO do something if at the end of list
            }
          }
          else{
            this.#current_selected_test_index++;
          }
          }
    

}
