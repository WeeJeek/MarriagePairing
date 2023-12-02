import ITestResultCalculationStrategy from "./ITestResultCalculationStrategy"

export default class HappyMarriageAssessmentResultCalculationStrategy extends ITestResultCalculationStrategy{
  calculate_test_result(answers){
    console.log("HappyMarriageAssessment strategy applied");
    return ;
  }
}