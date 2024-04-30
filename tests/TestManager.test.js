import TestManager from "../classes/TestManager.js"
import TestCategories from "../enums/TestCategories"
import TestStatus from "../enums/TestStatus.js"
import CHOICES from "../enums/ChoiceCategories"
import {answer_questions_with_dummy_answers, get_amount_of_all_questions} from "./TestManager.utils"
import HappyMarriageCategories from "../enums/HappyMarriageCategories"
import FamilyAdaptabilityCategories from "../enums/FamilyAdaptabilityCategories"
import PersonalInfoCategories from "../enums/PersonalInfoCategories"
import SCORES from "../enums/Scores"
import MBTICategories from "../enums/MBTICategories.js"
import LifePressureAnalysisCategories from "../enums/LifePressureAnalysisCategories.js"

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
    let expected_current_test_category = TestCategories.PERSONAL;
    let expected_current_test_index = 0;
    let expected_status = TestStatus.IN_PROGRESS;
    let expected_answer = CHOICES.B;
    let expected_sub_test_subcat = PersonalInfoCategories.PERSONAL_INFO;

    _sut.answer_the_current_question(expected_answer);

    let result_test_record = _sut.get_test_record();
    let result_status = result_test_record[expected_current_test_category]["status"];
    let result_answer = result_test_record[expected_current_test_category]["result"][expected_sub_test_subcat]["answers"][expected_current_test_index];
    expect(result_answer).toEqual(expected_answer);
    expect(result_status).toEqual(expected_status);
  })

  it("a test manager should able to update the same question with different answer", ()=>{
    let expected_answer = CHOICES.B;
    let expected_current_test_category = TestCategories.PERSONAL;
    let expected_current_test_index = 0;
    let first_answer = CHOICES.A;
    let expected_sub_test_subcat = PersonalInfoCategories.PERSONAL_INFO;

    _sut.answer_the_current_question(first_answer);
    
    _sut.move_back_to_last_question();
    _sut.answer_the_current_question(expected_answer);

    let result_test_record = _sut.get_test_record();
    let result_answer = result_test_record[expected_current_test_category]["result"][expected_sub_test_subcat]["answers"][expected_current_test_index]
    expect(result_answer).toEqual(expected_answer);
  })

  it("a test manager should be able to switch to the next test category while it reaches the end of the question list and test status will be changed", ()=>{
    let current_test_category = TestCategories.PERSONAL;
    let expected_test_category = TestCategories.MBTI;
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

    expect(_sut.are_all_tests_finished()).toEqual(expected_all_finished);
  })

  it("a test manager should not able to move back the last category if it is at the first question of the category", ()=>{
    let previous_test_category = TestCategories.PERSONAL;
    let expected_test_category = TestCategories.MBTI;
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

  it("test manager shall clean everything in its test record if it reset it", ()=>{
    let expected_test_record = {
      [TestCategories.PERSONAL]:{
        status: TestStatus.UNTOUCHED,
        result: {
            [PersonalInfoCategories.PERSONAL_INFO]:{
                answers:[]
            }
        }
    },
    [TestCategories.MBTI]:{
        "status": TestStatus.UNTOUCHED,
        "result": {
            EvI: {
                answers:[]
            },
            NvS: {
                answers:[]
            },
            FvT: {
                answers:[]
            },
            JvP: {
                answers:[]
            }
        }
      },
      [TestCategories.FAMILY_ADAPTABILITY_TEST]:{
        "status": TestStatus.UNTOUCHED,
        "result":{
            [FamilyAdaptabilityCategories.FamilySituation]:{
                answers:[]
            },
            [FamilyAdaptabilityCategories.FamilyWish]:{
                answers:[]
            }
        }
      },
      [TestCategories.LIFE_PRESSURE_ANALYSIS]:{
        "status": TestStatus.UNTOUCHED,
        result: {
            [LifePressureAnalysisCategories.LifePressure]:{
                answers:[]
            }
        }
      },
      [TestCategories.HAPPY_MARRIAGE_ASSESSMENT]:{
        "status": TestStatus.UNTOUCHED,
        "result":{
            [HappyMarriageCategories.CommQuality]: {
                score: 0,
                answers:[]
            },
            [HappyMarriageCategories.ConflitionHandling]:{
                score: 0,
                answers:[]
            },
            [HappyMarriageCategories.PersonalityHabits]:{
                score: 0,
                answers:[]
            },
            [HappyMarriageCategories.FinancialManagement]:{
                score:0,
                answers:[]
            },
            [HappyMarriageCategories.EntertainmentLife]:{
                score:0,
                answers:[]
            },
            [HappyMarriageCategories.SexualAwareness]:{
                score:0,
                answers:[]
            },
            [HappyMarriageCategories.ReletivesFriends]:{
                score:0,
                answers:[]
            },
            [HappyMarriageCategories.CoupleRole]:{
                score:0,
                answers:[]
            },
            [HappyMarriageCategories.MarriageExpectation]:{
                score:0,
                answers:[]
            },
            [HappyMarriageCategories.EducationExpectation]:{
                score:0,
                answers:[]
            }
        }
      }
    }

    answer_questions_with_dummy_answers(_sut, CHOICES.A);
    _sut.reset_test_record()

    let result_test_record = _sut.get_test_record()
    expect(result_test_record).toEqual(expected_test_record)
  })

  it("test manager shall generate test record in a right format", ()=>{
      let expected_test_record = {
        PERSONAL_INFO:{
            status: TestStatus.FINISHED,
            result: {
                [PersonalInfoCategories.PERSONAL_INFO]:{
                    answers:[
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A,
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A,
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, 
                        CHOICES.A]
                }
            }
        },
        MBTI:{
            status: TestStatus.FINISHED,
            result: {
                EvI: {
                    answers:[CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A]
                },
                NvS: {
                    answers:[CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A]
                },
                FvT: {
                    answers:[CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A]
                },
                JvP: {
                    answers:[CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A]
                }
            }
          },
        FAMILY_ADAPTABILITY_TEST:{
            status: TestStatus.FINISHED,
            result:{
                [FamilyAdaptabilityCategories.FamilySituation]:{
                    answers:[
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A,
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A,
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A,
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A
                    ]
             },
            [FamilyAdaptabilityCategories.FamilyWish]:{
                answers:[
                    CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A,
                    CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A,
                    CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A,
                    CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A
                ]
            }
        }
        },
          LIFE_PRESSURE_ANALYSIS:{
            status: TestStatus.FINISHED,
            result: {
                [LifePressureAnalysisCategories.LifePressure]:{
                    answers:[
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A,
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A
                    ]
                }
            }
          },
          HAPPY_MARRIAGE_ASSESSMENT:{
            status: TestStatus.FINISHED,
            result:{
                [HappyMarriageCategories.CommQuality]: {
                    score: 0,
                    answers:[
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A,
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A
                    ]
                },
                [HappyMarriageCategories.ConflitionHandling]:{
                    score: 0,
                    answers:[
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A,
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A
                    ]
                },
                [HappyMarriageCategories.PersonalityHabits]:{
                    score: 0,
                    answers:[
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A,
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A
                    ]
                },
                [HappyMarriageCategories.FinancialManagement]:{
                    score:0,
                    answers:[
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A,
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A
                    ]
                },
                [HappyMarriageCategories.EntertainmentLife]:{
                    score:0,
                    answers:[
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A,
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A
                    ]
                },
                [HappyMarriageCategories.SexualAwareness]:{
                    score:0,
                    answers:[
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A,
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A
                    ]
                },
                [HappyMarriageCategories.ReletivesFriends]:{
                    score:0,
                    answers:[
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A,
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A
                    ]
                },
                [HappyMarriageCategories.CoupleRole]:{
                    score:0,
                    answers:[
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A,
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A
                    ]
                },
                [HappyMarriageCategories.MarriageExpectation]:{
                    score:0,
                    answers:[
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A,
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A
                    ]
                },
                [HappyMarriageCategories.EducationExpectation]:{
                    score:0,
                    answers:[
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A,
                        CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A
                    ]
                }
            }
          }
      };

      let amount = get_amount_of_all_questions();
      answer_questions_with_dummy_answers(_sut, amount);

      let actual_test_record = _sut.get_test_record();
      console.log("the ACTUAL is " + JSON.stringify(actual_test_record))
      console.log("the EXPECTED is " + JSON.stringify(expected_test_record))
      expect(actual_test_record).toEqual(expected_test_record);
  })

  afterEach(()=>{
    jest.restoreAllMocks()
  })
})