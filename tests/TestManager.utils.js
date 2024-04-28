import CHOICES from "../enums/ChoiceCategories.js"
import TestCategories from "../enums/TestCategories"
import TEST_LIST from "../src/tests_related/test_list"

export function answer_questions_with_dummy_answers(testManager, amountOfQuestions) {
    for (let i = 0; i < amountOfQuestions; i++) {
        if(i == 26){
            testManager.answer_the_current_question(CHOICES.B);
        }
        else if(i == 27){
            testManager.answer_the_current_question(CHOICES.C);
        }
        else{
            testManager.answer_the_current_question(CHOICES.A);
        } 
    }
}

export function get_amount_of_all_questions() {
  const test_category_values = Object.values(TestCategories);
  let sum = 0;
  
  for (let i = 0; i < test_category_values.length; i++) {
    let cur_test_list = TEST_LIST[test_category_values[i]]
    for(let j = 0; j < cur_test_list['test_subset'].length; j++){
        sum += cur_test_list['test_subset'][j]['questions'].length;
    }
  }
  return sum;
}