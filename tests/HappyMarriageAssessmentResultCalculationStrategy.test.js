import HappyMarriageAssessmentResultCalculationStrategy from "../classes/HappyMarriageAssessmentResultCalculationStrategy";
import SCORES from "../enums/Scores"


const DUMMY_TEST_CASE_1 = [
    SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, 
    SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE,
    SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, 
    SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE,
    SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, 
    SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE,
    SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, 
    SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE];

const DUMMY_TEST_CASE_2 = [
    SCORES.FIVE, SCORES.FIVE, SCORES.FIVE, SCORES.FIVE, SCORES.FIVE, 
    SCORES.FIVE, SCORES.FIVE, SCORES.FIVE, SCORES.FIVE, SCORES.FIVE,
    SCORES.FIVE, SCORES.FIVE, SCORES.FIVE, SCORES.FIVE, SCORES.FIVE, 
    SCORES.FIVE, SCORES.FIVE, SCORES.FIVE, SCORES.FIVE, SCORES.FIVE,
    SCORES.FIVE, SCORES.FIVE, SCORES.FIVE, SCORES.FIVE, SCORES.FIVE, 
    SCORES.FIVE, SCORES.FIVE, SCORES.FIVE, SCORES.FIVE, SCORES.FIVE,
    SCORES.FIVE, SCORES.FIVE, SCORES.FIVE, SCORES.FIVE, SCORES.FIVE, 
    SCORES.FIVE, SCORES.FIVE, SCORES.FIVE, SCORES.FIVE, SCORES.FIVE];

const DUMMY_TEST_CASE_3 = [];

const _expected_result_for_case_1 = {
    score: {},
    answers: {}
};
const _expected_result_for_case_2 = {
    score: {},
    answers: {}
  };
const _expected_result_for_case_3 = {
    score: {
        "Original Family": {
            "Closeness":15,
            "Elasticity":17
        },
        "Ideal Relationship": {
            "Closeness":15,
            "Elasticity":17
        }
    },
    answers: {
        "Original Family": {
            "Closeness":[
                SCORES.TWO, SCORES.THREE, SCORES.FIVE, SCORES.FOUR, SCORES.ONE, 
                SCORES.TWO, SCORES.THREE, SCORES.FIVE, SCORES.FOUR, SCORES.ONE],
            "Elasticity":[
                SCORES.ONE, SCORES.FOUR, SCORES.FIVE, SCORES.FOUR, SCORES.ONE, 
                SCORES.ONE, SCORES.FOUR, SCORES.FIVE, SCORES.FOUR, SCORES.FIVE]
        },
        "Ideal Relationship": {
            "Closeness":[
                SCORES.TWO, SCORES.THREE, SCORES.FIVE, SCORES.FOUR, SCORES.ONE, 
                SCORES.TWO, SCORES.THREE, SCORES.FIVE, SCORES.FOUR, SCORES.ONE],
            "Elasticity":[
                SCORES.ONE, SCORES.FOUR, SCORES.FIVE, SCORES.FOUR, SCORES.ONE, 
                SCORES.ONE, SCORES.FOUR, SCORES.FIVE, SCORES.FOUR, SCORES.FIVE]
        }
}};

const DUMMY_TEST_CASES = [
    [
      DUMMY_TEST_CASE_1, // given test data
      _expected_result_for_case_1 // expected result
    ],
    [
      DUMMY_TEST_CASE_2, // given test data
      _expected_result_for_case_2 // expected result
    ],
    [
      DUMMY_TEST_CASE_3, // given test data
      _expected_result_for_case_3 // expected result
    ]
  ];

describe("testing rules of MBTI test", ()=>{
  let _sut;

  beforeEach(() => {
    _sut = new HappyMarriageAssessmentResultCalculationStrategy();
  })//before each

  it.each(DUMMY_TEST_CASES)
    ("expected result should match the actual situation", (given_test_record, expected_result) => {
      let actual_result = _sut.calculate_test_result(given_test_record);
      expect(actual_result).toEqual(expected_result);
  })
})//describe


 
  