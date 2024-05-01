import HappyMarriageAssessmentResultCalculationStrategy from "../classes/HappyMarriageAssessmentResultCalculationStrategy";
import SCORES from "../enums/Scores"
import HappyMarriageCategories from "../enums/HappyMarriageCategories"

const DUMMY_GUY_ANSWERS_1 = [];
const DUMMY_LADY_ANSWERS_1 = [];

const DUMMY_TEST_CASE_MALE = {
    [HappyMarriageCategories.CommQuality]: [
        SCORES.ONE, SCORES.TWO, SCORES.FIVE, SCORES.TWO, SCORES.THREE, 
        SCORES.FIVE, SCORES.ONE, SCORES.TWO, SCORES.TWO, SCORES.FOUR],
    [HappyMarriageCategories.ConflitionHandling]:[
        SCORES.THREE, SCORES.FOUR, SCORES.FIVE, SCORES.THREE, SCORES.TWO, 
        SCORES.FOUR, SCORES.ONE, SCORES.FIVE, SCORES.THREE, SCORES.ONE],
    [HappyMarriageCategories.PersonalityHabits]:[
        SCORES.THREE, SCORES.FOUR, SCORES.FIVE, SCORES.THREE, SCORES.TWO, 
        SCORES.FOUR, SCORES.ONE, SCORES.FIVE, SCORES.THREE, SCORES.ONE],
    [HappyMarriageCategories.FinancialManagement]:[
        SCORES.THREE, SCORES.FOUR, SCORES.FIVE, SCORES.THREE, SCORES.TWO, 
        SCORES.FOUR, SCORES.ONE, SCORES.FIVE, SCORES.THREE, SCORES.ONE],
    [HappyMarriageCategories.EntertainmentLife]:[
        SCORES.ONE, SCORES.THREE, SCORES.FIVE, SCORES.TWO, SCORES.TWO, 
        SCORES.FIVE, SCORES.ONE, SCORES.ONE, SCORES.TWO, SCORES.FOUR],
    [HappyMarriageCategories.SexualAwareness]:[
        SCORES.ONE, SCORES.TWO, SCORES.FIVE, SCORES.TWO, SCORES.THREE, 
        SCORES.FIVE, SCORES.ONE, SCORES.TWO, SCORES.TWO, SCORES.FOUR],
    [HappyMarriageCategories.ReletivesFriends]:[
        SCORES.THREE, SCORES.FOUR, SCORES.FIVE, SCORES.TWO, SCORES.TWO, 
        SCORES.TWO, SCORES.ONE, SCORES.FOUR, SCORES.THREE, SCORES.ONE],
    [HappyMarriageCategories.CoupleRole]:[
        SCORES.ONE, SCORES.ONE, SCORES.FIVE, SCORES.TWO, SCORES.THREE, 
        SCORES.FIVE, SCORES.ONE, SCORES.TWO, SCORES.TWO, SCORES.FOUR],
    [HappyMarriageCategories.MarriageExpectation]:[
        SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, 
        SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE],
    [HappyMarriageCategories.EducationExpectation]:[
        SCORES.ONE, SCORES.TWO, SCORES.FIVE, SCORES.TWO, SCORES.THREE, 
        SCORES.FIVE, SCORES.ONE, SCORES.TWO, SCORES.TWO, SCORES.FOUR]
}

const DUMMY_TEST_CASE_FEMALE = {
    [HappyMarriageCategories.CommQuality]: [
        SCORES.ONE, SCORES.THREE, SCORES.FOUR, SCORES.ONE, SCORES.THREE, 
        SCORES.FIVE, SCORES.ONE, SCORES.ONE, SCORES.TWO, SCORES.TWO],
    [HappyMarriageCategories.ConflitionHandling]:[
        SCORES.THREE, SCORES.FOUR, SCORES.FIVE, SCORES.THREE, SCORES.TWO, 
        SCORES.THREE, SCORES.ONE, SCORES.FOUR, SCORES.THREE, SCORES.ONE],
    [HappyMarriageCategories.PersonalityHabits]:[
        SCORES.THREE, SCORES.FOUR, SCORES.FIVE, SCORES.THREE, SCORES.TWO, 
        SCORES.FOUR, SCORES.TWO, SCORES.FIVE, SCORES.THREE, SCORES.FIVE],
    [HappyMarriageCategories.FinancialManagement]:[
        SCORES.THREE, SCORES.FOUR, SCORES.FIVE, SCORES.THREE, SCORES.TWO, 
        SCORES.FOUR, SCORES.ONE, SCORES.FIVE, SCORES.THREE, SCORES.ONE],
    [HappyMarriageCategories.EntertainmentLife]:[
        SCORES.TWO, SCORES.THREE, SCORES.FIVE, SCORES.THREE, SCORES.TWO, 
        SCORES.FIVE, SCORES.THREE, SCORES.ONE, SCORES.FOUR, SCORES.FOUR],
    [HappyMarriageCategories.SexualAwareness]:[
        SCORES.ONE, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.ONE, 
        SCORES.ONE, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.FOUR],
    [HappyMarriageCategories.ReletivesFriends]:[
        SSCORES.THREE, SCORES.TWO, SCORES.FIVE, SCORES.TWO, SCORES.TWO, 
        SCORES.TWO, SCORES.FIVE, SCORES.FOUR, SCORES.THREE, SCORES.ONE],
    [HappyMarriageCategories.CoupleRole]:[
        SCORES.ONE, SCORES.FIVE, SCORES.FIVE, SCORES.TWO, SCORES.THREE, 
        SCORES.FIVE, SCORES.ONE, SCORES.TWO, SCORES.TWO, SCORES.FOUR],
    [HappyMarriageCategories.MarriageExpectation]:[
        SCORES.ONE, SCORES.TWO, SCORES.ONE, SCORES.ONE, SCORES.ONE, 
        SCORES.ONE, SCORES.ONE, SCORES.THREE, SCORES.ONE, SCORES.ONE],
    [HappyMarriageCategories.EducationExpectation]:[
        SCORES.ONE, SCORES.TWO, SCORES.FIVE, SCORES.FOUR, SCORES.THREE, 
        SCORES.ONE, SCORES.ONE, SCORES.THREE, SCORES.TWO, SCORES.FOUR]
}

const _expected_result_for_case_1 = {
    [HappyMarriageCategories.CommQuality]: {
        score: -4,
        answers:[
            SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, 
            SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE]
    },
    [HappyMarriageCategories.ConflitionHandling]:{
        score: -6,
        answers:[
            SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, 
            SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE]
    },
    [HappyMarriageCategories.PersonalityHabits]:{
        score: -10,
        answers:[
            SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, 
            SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE]
    },
    [HappyMarriageCategories.FinancialManagement]:{
        score:1,
        answers:[
            SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, 
            SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE]
    },
    [HappyMarriageCategories.EntertainmentLife]:{
        score:1,
        answers:[
            SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, 
            SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE]
    },
    [HappyMarriageCategories.SexualAwareness]:{
        score:1,
        answers:[
            SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, 
            SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE]
    },
    [HappyMarriageCategories.ReletivesFriends]:{
        score:1,
        answers:[
            SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, 
            SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE]
    },
    [HappyMarriageCategories.CoupleRole]:{
        score:1,
        answers:[
            SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, 
            SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE]
    },
    [HappyMarriageCategories.MarriageExpectation]:{
        score:1,
        answers:[
            SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, 
            SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE]
    },
    [HappyMarriageCategories.EducationExpectation]:{
        score:1,
        answers:[
            SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, 
            SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE, SCORES.ONE]
    }
};
const _expected_result_for_case_2 = {
    score: {},
    answers: {}
};

const _expected_result_for_case_3 = {
    score: {},
    answers: {}
};

const DUMMY_TEST_CASES = [
    [
      DUMMY_GUY_ANSWERS_1,
      DUMMY_LADY_ANSWERS_1, // given test data
      _expected_result_for_case_1 // expected result
    ]
  ];

describe("testing rules of Happy Marriage Assessment test", ()=>{
  let _sut;

  beforeEach(() => {
    _sut = new HappyMarriageAssessmentResultCalculationStrategy();
  })//before each

  it.each(DUMMY_TEST_CASES)
    ("expected result should match the actual situation", (given_guy_answers, given_lady_answers, expected_result) => {
      let actual_result = _sut.calculate_test_result(given_guy_answers, given_lady_answers);
      expect(actual_result).toEqual(expected_result);
  })
})//describe


 
  