import HappyMarriageAssessmentResultCalculationStrategy from "../classes/HappyMarriageAssessmentResultCalculationStrategy";
import SCORES from "../enums/Scores"
import HappyMarriageCategories from "../enums/HappyMarriageCategories"
import CHOICES from "../enums/ChoiceCategories";

const GIVEN_SUB_CATEGORY = HappyMarriageCategories.EntertainmentLife;
const HAPPY_MALE_CASE = [
    SCORES.E, SCORES.A, SCORES.B, SCORES.A, SCORES.A,
    SCORES.A, SCORES.C, SCORES.D, SCORES.A, SCORES.B
];
const SAD_MALE_CASE = [
    SCORES.A, SCORES.A, SCORES.D, SCORES.E, SCORES.E,
    SCORES.B, SCORES.D, SCORES.A, SCORES.E, SCORES.C
];
const HAPPY_FEMALE_CASE = [
    SCORES.D, SCORES.B, SCORES.C, SCORES.B, SCORES.A,
    SCORES.D, SCORES.E, SCORES.B, SCORES.C, SCORES.E
];
const SAD_FEMALE_CASE = [
    SCORES.E, SCORES.B, SCORES.C, SCORES.E, SCORES.E,
    SCORES.A, SCORES.B, SCORES.D, SCORES.E, SCORES.C
];
const REALITY_MALE_CASE = [
    SCORES.E, SCORES.A, SCORES.C, SCORES.C, SCORES.B,
    SCORES.A, SCORES.B, SCORES.E, SCORES.A, SCORES.D
];
const REALITY_FEMALE_CASE = [
    SCORES.C, SCORES.B, SCORES.A, SCORES.A, SCORES.E,
    SCORES.D, SCORES.D, SCORES.E, SCORES.C, SCORES.B
];

const EXPECTED_HAPPY_RESULT = {
    satisfaction_male:0,
    satisfaction_female:0,
    consistency:0
};
const GOOD_COUPLE_CASE = [
    HAPPY_MALE_CASE, 
    HAPPY_FEMALE_CASE, 
    EXPECTED_HAPPY_RESULT];

const EXPECTED_SAD_RESULT = {
    satisfaction_male:0,
    satisfaction_female:0,
    consistency:0
};
const SAD_COUPLE_CASE = [
    SAD_MALE_CASE, 
    SAD_FEMALE_CASE, 
    EXPECTED_SAD_RESULT];

const EXPECTED_REALITY_RESULT = {
    satisfaction_male:0,
    satisfaction_female:0,
    consistency:0
};
const REALITY_COUPLE_CASE = [
    REALITY_MALE_CASE, 
    REALITY_FEMALE_CASE, 
    EXPECTED_REALITY_RESULT];

const DUMMY_TEST_CASES = [
    GOOD_COUPLE_CASE,
    SAD_COUPLE_CASE,
    REALITY_COUPLE_CASE
];

describe("testing rules of Happy Marriage Assessment test", ()=>{
  let _sut;

  beforeEach(() => {
    _sut = new HappyMarriageAssessmentResultCalculationStrategy();
  })//before each

  it.each(DUMMY_TEST_CASES)
        ("for one test case, the relationship satisfaction shall be caluclated as expected", 
        (male_input, female_input, expected_result)
  =>{
    let actual_consistency = _sut.calculate_relationship_consistency(male_input, female_input, GIVEN_SUB_CATEGORY);
    let actual_male_satisfaction = _sut.calculate_satisfaction(male_input, GIVEN_SUB_CATEGORY);
    let actual_female_satisfaction = _sut.calculate_satisfaction(female_input, GIVEN_SUB_CATEGORY);

    expect(actual_consistency).toEqual(expected_result.consistency);
    expect(actual_male_satisfaction).toEqual(expected_result.satisfaction_male);
    expect(actual_female_satisfaction).toEqual(expected_result.satisfaction_female);
  })//end of test
})//describe


 
  