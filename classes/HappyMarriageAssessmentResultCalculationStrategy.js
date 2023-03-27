import ITestResultCalculationStrategy from "./ITestResultCalculationStrategy"

export default class HappyMarriageAssessmentResultCalculationStrategy extends ITestResultCalculationStrategy{
  calculate_test_result(test_category_record){
    console.log("HappyMarriageAssessment strategy applied");
    return ;
  }
}