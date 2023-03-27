import MBTIResultCalculationStrategy from "./MBTIResultCalculationStrategy"
import LifePressureAnalysisResultCalculationStrategy from "./LifePressureAnalysisResultCalculationStrategy"
import HappyMarriageAssessmentResultCalculationStrategy from "./HappyMarriageAssessmentResultCalculationStrategy"
import FamilyAdaptabilityResultCalculationStrategy from "./FamilyAdaptabilityResultCalculationStrategy"
import ITestResultCalculationStrategy from "./ITestResultCalculationStrategy"

export default class TestResultCalculator{
  #strategy = null;

  set_strategy(strategy){
    this.#strategy = strategy;
  }

  execute_strategy(test_category_record){
    this.#strategy.calculate_test_result(test_category_record);
  }
}