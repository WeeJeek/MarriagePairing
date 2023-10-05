import TestManager from "../classes/TestManager.js"
import TestCategories from "../enums/TestCategories.js"
import TestStatus from "../enums/TestStatus.js"
import CHOICES from "../enums/ChoiceCategories"
import {answer_questions_with_dummy_answers, get_amount_of_all_questions} from "./TestManager.utils"

describe("unit test testing for Test Manager class", () =>{
  let _sut;


  beforeEach(() => {
    _sut = new TestManager();
  })

  it("a test manager should return test progress not exist if user never did test before", ()=>
  {
    let expected_result = false;
    
    let result = _sut.check_test_record_exist();

    expect(result).toEqual(expected_result);
  })

  it("a test manager should able to set the answer with given test info and update the current test reocrd", ()=>{
    let expected_current_test_category = TestCategories.MBTI;
    let expected_current_test_index = 0;
    let expected_status = TestStatus.IN_PROGRESS;
    let expected_answer = CHOICES.B;

    _sut.answer_the_current_question(expected_answer);

    let result_test_record = _sut.get_test_record();
    let result_status = result_test_record[expected_current_test_category]["status"];
    let result_answer = result_test_record[expected_current_test_category]["answers"][expected_current_test_index];
    expect(result_status).toEqual(expected_status);
    expect(result_answer).toEqual(expected_answer);
  })

  it("a test manager should able to update the same question with different answer", ()=>{
    let expected_answer = CHOICES.B;
    let expected_current_test_category = TestCategories.MBTI;
    let expected_current_test_index = 0;
    let first_answer = CHOICES.A;
    _sut.answer_the_current_question(first_answer);
    
    _sut.move_back_to_last_question();
    _sut.answer_the_current_question(expected_answer);

    let result_test_record = _sut.get_test_record();
    let result_answer = result_test_record[expected_current_test_category]["answers"][expected_current_test_index]
    expect(result_answer).toEqual(expected_answer);
  })

  it("a test manager should not be able to switch to the next test category while it reaches the end of the question list and test status will be changed", ()=>{
    let current_test_category = TestCategories.MBTI;
    let expected_test_category = TestCategories.FAMILY_ADAPTABILITY_TEST;
    let expected_test_status = TestStatus.FINISHED;
    let expected_test_index = 0;
    const amount_of_question_in_test = _sut.get_amount_of_questions_of_current_test_category()

    answer_questions_with_dummy_answers(_sut, amount_of_question_in_test)

    let result_category = _sut.get_current_test_category();
    let result_test_status = _sut.get_status_of_category(current_test_category);
    let result_test_index = _sut.get_current_question_index()
    expect(result_category).toEqual(expected_test_category);
    expect(result_test_status).toEqual(expected_test_status);
    expect(result_test_index).toEqual(expected_test_index);
  })

  it("a test manager should say it not all questions are answered if it really doens't", ()=>{
    let expected_all_finished = false;
    let amount_of_question_to_be_answered = 2;
    
    answer_questions_with_dummy_answers(_sut, amount_of_question_to_be_answered);

    expect(expected_all_finished).toEqual(_sut.are_all_tests_finished());
  })

  it("a test manager should show all tests are finished when all tests are answered", ()=>{
    let expected_all_finished = true;
    let sum = get_amount_of_all_questions();
    
    answer_questions_with_dummy_answers(_sut, sum);

    expect(true).toEqual(_sut.are_all_tests_finished());
  })

  it("a test manager should not able to move back the last category if it is at the first question of the category", ()=>{
    let previous_test_category = TestCategories.MBTI;
    let expected_test_category = TestCategories.FAMILY_ADAPTABILITY_TEST;
    let expected_previous_test_status = TestStatus.FINISHED;
    let expected_updated_test_status = TestStatus.UNTOUCHED;
    const amount_of_question_in_test = _sut.get_amount_of_questions_of_current_test_category();

    answer_questions_with_dummy_answers(_sut, amount_of_question_in_test);
    _sut.move_back_to_last_question();

    let result_category = _sut.get_current_test_category();
    let previous_result_test_status = _sut.get_status_of_category(previous_test_category);
    let updated_result_test_status = _sut.get_status_of_category(expected_test_category);
 
    expect(result_category).toEqual(expected_test_category);
    expect(previous_result_test_status).toEqual(expected_previous_test_status)
    expect(updated_result_test_status).toEqual(expected_updated_test_status)
  })

  it("test manager shall clean everything in its test record if it reset it", ()=>{
    let expected_test_record = {
      "MBTI":{
        "status": TestStatus.UNTOUCHED,
        "answers":[]
      },
      "FAMIL_ADAPTABILITY_TEST":{
        "status": TestStatus.UNTOUCHED,
        "answers":[]
      },
      "LIFE_PRESSURE_ANALYSIS":{
        "status": TestStatus.UNTOUCHED,
        "answers":[]
      },
      "HAPPY_MARRIAGE_ASSESSMENT":{
        "status": TestStatus.UNTOUCHED,
        "answers":[]
      }
    }

    answer_questions_with_dummy_answers(_sut, CHOICES.A);
    _sut.reset_test_record()

    let result_test_record = _sut.get_test_record()
    expect(result_test_record).toEqual(expected_test_record)
  })

  it("test manager shall return current test with correct content", ()=>{
    let expected_current_test_id = 6;

    answer_questions_with_dummy_answers(_sut, 5);
    let result_current_test = _sut.get_current_question();

    expect(result_current_test.ID).toEqual(expected_current_test_id);
  })

  it("the answer of a question shall remain the same if user press a button to go to the previous question", ()=>{
    let first_answer = CHOICES.B;
    let second_answer = CHOICES.A;
    let third_answer = CHOICES.B;
    let _first_test_record;
    let _second_test_record;

    _sut.answer_the_current_question(first_answer);
    _sut.answer_the_current_question(second_answer);
    _sut.answer_the_current_question(third_answer);
    _first_test_record = _sut.get_test_record();

    _sut.move_back_to_last_question();
    _sut.answer_the_current_question(third_answer);
    _second_test_record = _sut.get_test_record();
    //可能没有检查这题有没有重复答过，可以考虑加回index

    expect(_first_test_record).toEqual(_second_test_record);
  })
  
  afterEach(()=>{
    jest.restoreAllMocks()
  })
})