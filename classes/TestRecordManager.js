export default class TestRecordManager{
    #test_category_record;
  
    get_selected_choice_of_question(){
        
    }

    get_test_record(){
        return this.#test_category_record;
    }

    answer_the_current_question(){
  
    }

    update_answer(selected_index){
    }

    #is_the_question_answered(existing_answers, insert_index){
        if(existing_answers.length === 0){
          return false;
        }
        return existing_answers.length > insert_index;
      }
}