import CHOICES from "../enums/ChoiceCategories.js"

export function answer_questions_with_dummy_answers(testManager, amountOfQuestions) {
  for (let i = 0; i < amountOfQuestions; i++) {
    testManager.answer_the_current_question(CHOICES.A);
  }
}