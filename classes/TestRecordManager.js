export default class TestRecordManager{
    #test_record;
    #current_selected_test_index = 0;
  
    get_selected_choice_of_question(){
        
    }

    get_test_record(){
        return this.#test_record;
    }

    answer_the_current_question(choice){
  
    }

    update_answer(selected_index){
    }
    is_the_first_question(){
    }
    get_current_question(){
      }

    get_current_question_index(){
        
    }

    move_back_to_last_question(){
      }

      is_end_of_a_test_list(){
          
      }

    close_test_category(){
        this.#test_record["status"] = TestStatus.FINISHED;//make this common to other managers
    }
    move_to_next_question(){
        //this.#current_selected_test_index++;//make this common to other managers
    }
}