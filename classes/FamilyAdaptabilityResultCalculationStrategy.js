import ITestResultCalculationStrategy from "./ITestResultCalculationStrategy"

export default class FamilyAdaptabilityResultCalculationStrategy extends ITestResultCalculationStrategy{
  calculate_test_result(test_category_record){
    console.log("Family Adaptability strategy applied");
    return ;
  }
}