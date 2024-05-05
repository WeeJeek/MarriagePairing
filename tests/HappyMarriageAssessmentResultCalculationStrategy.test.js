import HappyMarriageAssessmentResultCalculationStrategy from "../classes/HappyMarriageAssessmentResultCalculationStrategy";
import SCORES from "../enums/Scores"
import HappyMarriageCategories from "../enums/HappyMarriageCategories"
import CHOICES from "../enums/ChoiceCategories";

const GIVEN_SUB_CATEGORY = HappyMarriageCategories.EntertainmentLife;

const HAPPY_MALE_CASE = [
    SCORES.E, SCORES.A, SCORES.B, SCORES.A, SCORES.A,
    SCORES.A, SCORES.C, SCORES.D, SCORES.A, SCORES.B
];
const HAPPY_FEMALE_CASE = [
    SCORES.D, SCORES.B, SCORES.C, SCORES.B, SCORES.A,
    SCORES.D, SCORES.E, SCORES.B, SCORES.C, SCORES.E
];
const HAPPY_COUPLE_TEST_CASE = {
    subcategory: GIVEN_SUB_CATEGORY,
    male_input: HAPPY_MALE_CASE,
    female_input:HAPPY_FEMALE_CASE
};
const EXPECTED_HAPPY_RESULT = {
    satisfaction_male: 97.5,//(5+5+4+5+5+1+3+2+5+4)/40,
    satisfaction_female:92.5,//(4+4+3+4+5+4+5+4+3+1)/40,
    consistency:70//(1+1+1+1+1+0+1+0+1+0)/10
};

const SAD_MALE_CASE = [
    SCORES.A, SCORES.A, SCORES.D, SCORES.E, SCORES.E,
    SCORES.B, SCORES.D, SCORES.A, SCORES.E, SCORES.C
];
const SAD_FEMALE_CASE = [
    SCORES.E, SCORES.B, SCORES.C, SCORES.E, SCORES.E,
    SCORES.A, SCORES.B, SCORES.D, SCORES.E, SCORES.C
];
const SAD_COUPLE_TEST_CASE = {
    subcategory: GIVEN_SUB_CATEGORY,
    male_input: SAD_MALE_CASE,
    female_input: SAD_FEMALE_CASE
};
const EXPECTED_SAD_RESULT = {
    satisfaction_male:62.5,//(1+5+2+1+1+2+4+5+1+3)/40,
    satisfaction_female:57.5,//(5+4+3+1+1+1+2+2+1+3)/40,
    consistency:20//0+1+0+0+0+0+0+0+0+1
};

const REALITY_MALE_CASE = [
    SCORES.E, SCORES.A, SCORES.C, SCORES.C, SCORES.B,
    SCORES.A, SCORES.B, SCORES.E, SCORES.A, SCORES.D
];
const REALITY_FEMALE_CASE = [
    SCORES.C, SCORES.B, SCORES.A, SCORES.A, SCORES.E,
    SCORES.D, SCORES.D, SCORES.E, SCORES.C, SCORES.B
];
const REALITY_COUPLE_TEST_CASE = {
    subcategory: GIVEN_SUB_CATEGORY,
    male_input: REALITY_MALE_CASE,
    female_input: REALITY_FEMALE_CASE
};
const EXPECTED_REALITY_RESULT = {
    satisfaction_male:77.5,//(5+5+3+3+4+1+2+1+5+2)/40
    satisfaction_female:85,//(3+4+5+5+1+4+4+1+3+4)/40
    consistency:50//1+1+1+1+0+0+0+0+1+0
};

const GOOD_COUPLE_CASE = [
    HAPPY_COUPLE_TEST_CASE, 
    EXPECTED_HAPPY_RESULT];
const SAD_COUPLE_CASE = [
    SAD_COUPLE_TEST_CASE, 
    EXPECTED_SAD_RESULT];
const REALITY_COUPLE_CASE = [
    REALITY_COUPLE_TEST_CASE, 
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
        (test_input, expected_result)
  =>{
    let result = _sut.calculate_test_result(test_input)
    let actual_consistency = result[GIVEN_SUB_CATEGORY].consistency;//_sut.calculate_relationship_consistency(male_input, female_input, GIVEN_SUB_CATEGORY);
    let actual_male_satisfaction = result[GIVEN_SUB_CATEGORY].satisfaction.male;//_sut.calculate_satisfaction(male_input, GIVEN_SUB_CATEGORY);
    let actual_female_satisfaction = result[GIVEN_SUB_CATEGORY].satisfaction.female;//_sut.calculate_satisfaction(female_input, GIVEN_SUB_CATEGORY);

    expect(actual_consistency).toEqual(expected_result.consistency);
    expect(actual_male_satisfaction).toEqual(expected_result.satisfaction_male);
    expect(actual_female_satisfaction).toEqual(expected_result.satisfaction_female);
  })//end of test
})//describe


 
  