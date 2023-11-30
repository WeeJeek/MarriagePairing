import MBTIResultCalculationStrategy from "../classes/MBTIResultCalculationStrategy";
import CHOICES from "../enums/ChoiceCategories";
import MBTICategories from "../enums/MBTICategories";
import TestStatus from "../enums/TestStatus";
import MBTIFeatureCategories from "../enums/MBTIFeatureCategories"

const DUMMY_TEST_CASE_1 = [
    CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, 
    CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, 
    CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, 
    CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A];

const DUMMY_TEST_CASE_2 = [
    CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, 
    CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B,
    CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, 
    CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B];

const DUMMY_TEST_CASE_3 = [
    CHOICES.B, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.B, CHOICES.A, CHOICES.B,
    CHOICES.A, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B,
    CHOICES.B, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.A,
    CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.B, CHOICES.B];
const _expected_result_for_case_1 = {
    "EvI": {
      score: 7,
      trend: MBTIFeatureCategories.E,
      answers:[CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A]
    },
    "NvS": {
      score: 7,
      trend: MBTIFeatureCategories.N,
      answers:[CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A]
    },
    "FvT": {
      score: 7,
      trend: MBTIFeatureCategories.F,
      answers:[CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A]
    },
    "JvP": {
      score: 7,
      trend: MBTIFeatureCategories.J,
      answers:[CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A]
    }
  };
const _expected_result_for_case_2 = {
    "EvI": {
      score: -7,
      trend: MBTIFeatureCategories.I,
      answers:[CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B]
    },
    "NvS": {
      score: -7,
      trend: MBTIFeatureCategories.S,
      answers:[CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B]
    },
    "FvT": {
      score: -7,
      trend: MBTIFeatureCategories.T,
      answers:[CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B]
    },
    "JvP": {
      score: -7,
      trend: MBTIFeatureCategories.P,
      answers:[CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B]
    }
  };
const _expected_result_for_case_3 = {
    "EvI": {
      score: 1,
      trend: MBTIFeatureCategories.E,
      answers: [CHOICES.B, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.B, CHOICES.A, CHOICES.B]
    },
    "NvS": {
      score: -3,
      trend: MBTIFeatureCategories.S,
      answers: [CHOICES.A, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B]
    },
    "FvT": {
      score: -3,
      trend: MBTIFeatureCategories.T,
      answers: [CHOICES.B, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.A]
    },
    "JvP": {
      score: -5,
      trend: MBTIFeatureCategories.P,
      answers: [CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.B, CHOICES.B]
    }
  };
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
    _sut = new MBTIResultCalculationStrategy();
  })//before each

  it.each(DUMMY_TEST_CASES)
    ("expected result should match the actual situation", (given_test_record, expected_result) => {
      let actual_result = _sut.calculate_test_result(given_test_record);//TODO strategy shall return the conclusion, not just list of answers
      expect(actual_result).toEqual(expected_result);
  })
})//describe


 
  