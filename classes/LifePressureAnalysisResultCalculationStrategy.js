import ITestResultCalculationStrategy from "./ITestResultCalculationStrategy"

export default class LifePressureAnalysisResultCalculationStrategy extends ITestResultCalculationStrategy{
  calculate_test_result(test_category_record){
    console.log("Life Pressure Analysis strategy applied");
    return ;
  }
}