import LifePressureAnalysisResultCalculationStrategy from "../classes/LifePressureAnalysisResultCalculationStrategy";
import SCORES from "../enums/Scores"


const DUMMY_TEST_CASE_1 = [
    SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, 
    SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE];

const DUMMY_TEST_CASE_2 = [
    SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, 
    SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO];

const DUMMY_TEST_CASE_3 = [
    SCORES.TWO, SCORES.ONE, SCORES.THREE, SCORES.FOUR, SCORES.FIVE, 
    SCORES.FIVE, SCORES.FOUR, SCORES.FOUR, SCORES.ONE, SCORES.ONE];

const _expected_result_for_case_1 = {
    score: 10,
    answers: [
        SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, 
        SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE]
};
const _expected_result_for_case_2 = {
    score: 20,
    answers: [
        SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, 
        SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO]
  };
const _expected_result_for_case_3 = {
    score: 30,
    answers: [
        SCORES.TWO, SCORES.ONE, SCORES.THREE, SCORES.FOUR, SCORES.FIVE, 
        SCORES.FIVE, SCORES.FOUR, SCORES.FOUR, SCORES.ONE, SCORES.ONE]};

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
    _sut = new LifePressureAnalysisResultCalculationStrategy();
  })//before each

  it.each(DUMMY_TEST_CASES)
    ("expected result should match the actual situation", (given_test_record, expected_result) => {
      let actual_result = _sut.calculate_test_result(given_test_record);//TODO strategy shall return the conclusion, not just list of answers
      expect(actual_result).toEqual(expected_result);
  })
})//describe


 
  