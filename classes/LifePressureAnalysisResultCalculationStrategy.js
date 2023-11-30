import ITestResultCalculationStrategy from "./ITestResultCalculationStrategy"

export default class LifePressureAnalysisResultCalculationStrategy extends ITestResultCalculationStrategy{
  calculate_test_result(answers){
    let sum = 0;
    let test_result = {};
    for(let i = 0; i < answers.length; i++){
        sum += parseInt(answers[i]);
    }
    test_result["score"] = sum;
    test_result["answers"] = answers;
    return test_result;
  }
}