import ITestResultCalculationStrategy from "./ITestResultCalculationStrategy"

export default class MBTIResultCalculationStrategy extends ITestResultCalculationStrategy{
  calculate_test_result(test_category_record){
    console.log("MBTI strategy applied");
    return ;
  }
}