import HappyMarriageAssessmentResultCalculationStrategy from "../classes/HappyMarriageAssessmentResultCalculationStrategy";
import SCORES from "../enums/Scores"
import HappyMarriageCategories from "../enums/HappyMarriageCategories"
import CHOICES from "../enums/ChoiceCategories";

const GIVEN_SUB_CATEGORY = HappyMarriageCategories.EntertainmentLife;

const HAPPY_MALE_CASE = [
    SCORES.FIVE, SCORES.ONE, SCORES.TWO, SCORES.ONE, SCORES.ONE,
    SCORES.ONE, SCORES.THREE, SCORES.FOUR, SCORES.ONE, SCORES.TWO
];
const HAPPY_FEMALE_CASE = [
    SCORES.FOUR, SCORES.TWO, SCORES.THREE, SCORES.TWO, SCORES.ONE,
    SCORES.FOUR, SCORES.FIVE, SCORES.TWO, SCORES.THREE, SCORES.FIVE
];
const HAPPY_COUPLE_TEST_CASE = {
    subcategory: GIVEN_SUB_CATEGORY,
    male_input: HAPPY_MALE_CASE,
    female_input:HAPPY_FEMALE_CASE
};
const EXPECTED_HAPPY_RESULT = {
    satisfaction_male: 97.5,//(5+5+4+5+5+1+3+2+5+4)/40,
    satisfaction_female:72.5,
    consistency:50//(1+1+1+1+0+0+0+0+1+0)/10
};

const SAD_MALE_CASE = [
    SCORES.ONE, SCORES.ONE, SCORES.FOUR, SCORES.FIVE, SCORES.FIVE,
    SCORES.TWO, SCORES.FOUR, SCORES.ONE, SCORES.FIVE, SCORES.THREE
];
const SAD_FEMALE_CASE = [
    SCORES.FIVE, SCORES.TWO, SCORES.THREE, SCORES.FIVE, SCORES.FIVE,
    SCORES.ONE, SCORES.TWO, SCORES.FOUR, SCORES.FIVE, SCORES.THREE
];
const SAD_COUPLE_TEST_CASE = {
    subcategory: GIVEN_SUB_CATEGORY,
    male_input: SAD_MALE_CASE,
    female_input: SAD_FEMALE_CASE
};
const EXPECTED_SAD_RESULT = {
    satisfaction_male:62.5,//(1+5+2+1+1+2+4+5+1+3)/40,
    satisfaction_female:87.5,//(5+4+3+1+1+1+2+2+1+3)/40,
    consistency:30//0+1+0+0+1+1+0+0+0+0 //最后一对是33
};

const REALITY_MALE_CASE = [
    SCORES.FIVE, SCORES.ONE, SCORES.THREE, SCORES.THREE, SCORES.TWO,
    SCORES.ONE, SCORES.TWO, SCORES.FIVE, SCORES.ONE, SCORES.FOUR
];
const REALITY_FEMALE_CASE = [
    SCORES.THREE, SCORES.TWO, SCORES.ONE, SCORES.ONE, SCORES.FIVE,
    SCORES.FOUR, SCORES.FOUR, SCORES.FIVE, SCORES.THREE, SCORES.TWO
];
const REALITY_COUPLE_TEST_CASE = {
    subcategory: GIVEN_SUB_CATEGORY,
    male_input: REALITY_MALE_CASE,
    female_input: REALITY_FEMALE_CASE
};
const EXPECTED_REALITY_RESULT = {
    satisfaction_male:98,//(5+5+3+3+4+1+2+1+5+2)/40
    satisfaction_female:90,//(3+4+5+5+1+4+4+1+3+4)/40
    consistency:60//1+1+1+1+0+0+0+1+1+0
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

  it.each(DUMMY_TEST_CASES)(
    "for one test case, the relationship satisfaction shall be caluclated as expected", 
    (test_input, expected_result) => {
        let result = _sut.calculate_test_result([test_input]);
        let actual_consistency = result[GIVEN_SUB_CATEGORY].consistency;
        let actual_male_satisfaction = result[GIVEN_SUB_CATEGORY].satisfaction.male;
        let actual_female_satisfaction = result[GIVEN_SUB_CATEGORY].satisfaction.female;

        expect(actual_consistency).toEqual(expected_result.consistency);
        expect(actual_male_satisfaction).toEqual(expected_result.satisfaction_male);
        expect(actual_female_satisfaction).toEqual(expected_result.satisfaction_female);
    }
);

})//describe


 
  