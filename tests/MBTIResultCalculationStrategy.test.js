import MBTIResultCalculationStrategy from "../classes/MBTIResultCalculationStrategy";
import CHOICES from "../enums/ChoiceCategories";
import { MBTIFeatureCategories, MBTICategories } from "../enums/MBTICategories"
import TestStatus from "../enums/TestStatus"

const DUMMY_TEST_CASE_1 = {
  "status": TestStatus.FINISHED,
  "answers": [CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A]
};
const DUMMY_TEST_CASE_2 = {
  "status": TestStatus.FINISHED,
  "answers": [CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B]
};
const DUMMY_TEST_CASE_3 = {
  "status": TestStatus.FINISHED,
  "answers": [CHOICES.B, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.B, CHOICES.B]
};

describe("testing rules of MBTI test", ()=>{
  let _sut;
  const _expected_result_for_case_1 = [1,2,3];
  const _expected_result_for_case_2 = [1,2,3];
  const _expected_result_for_case_3 = [1,2,3];
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

  beforeEach(() => {
    _sut = new MBTIResultCalculationStrategy();
  })//before each

  it.each(DUMMY_TEST_CASES)
    ("expected result should match the actual situation", (given_test_record, expected_result) => {
      let actual_result = _sut.calculate_test_result(given_test_record);
      expect(actual_result).toBe(expected_result);
  })
})//describe


 
  