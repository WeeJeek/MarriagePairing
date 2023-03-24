import CHOICES from "../enums/ChoiceCategories.js"
import TestCategories from "../enums/TestCategories"
import TEST_LIST from "../src/tests_related/test_list"

export function answer_questions_with_dummy_answers(testManager, amountOfQuestions) {
  for (let i = 0; i < amountOfQuestions; i++) {
    testManager.answer_the_current_question(CHOICES.A);
  }
}


export function get_amount_of_all_questions() {
  const test_category_values = Object.values(TestCategories);
  let sum = 0;
  
  for (let i = 0; i < test_category_values.length; i++) {
    let cur_test_list = TEST_LIST[test_category_values[i]]
    sum += cur_test_list['questions'].length;
  }

  return sum;
}