import MBTIResultCalculationStrategy from "./MBTIResultCalculationStrategy"
import LifePressureAnalysisResultCalculationStrategy from "./LifePressureAnalysisResultCalculationStrategy"
import HappyMarriageAssessmentResultCalculationStrategy from "./HappyMarriageAssessmentResultCalculationStrategy"
import FamilyAdaptabilityResultCalculationStrategy from "./FamilyAdaptabilityResultCalculationStrategy"
import TestCategories  from "../enums/TestCategories"

export default class TestReportCalculator{
  #calculation_strategy = null;
  #test_report = {};
  #is_report_successfully_generated = false;

  generate_test_report(test_record){
    this.#store_user_info_to_report();
    this.#calculate_test_result(test_record);

    return this.#test_report;
  }

  is_report_successfully_generated(){
    return this.#is_report_successfully_generated;
  }

  #store_user_info_to_report(){

  }

  #calculate_test_result(test_record){
    if(!test_record){
      return;
    }

    Object.keys(test_record).forEach(
      function(test_name){
        if(test_name == TestCategories.MBTI){
          this.#set_strategy(new MBTIResultCalculationStrategy());
          this.#is_report_successfully_generated = true;
        }
        else if(test_name == TestCategories.FAMILY_ADAPTABILITY_TEST){
          this.#set_strategy(new FamilyAdaptabilityResultCalculationStrategy());
          this.#is_report_successfully_generated = true;
        }
        else if(test_name == TestCategories.LIFE_PRESSURE_ANALYSIS){
          this.#set_strategy(new LifePressureAnalysisResultCalculationStrategy());
          this.#is_report_successfully_generated = true;
        }
        else if(test_name == TestCategories.HAPPY_MARRIAGE_ASSESSMENT){
          this.#set_strategy(new HappyMarriageAssessmentResultCalculationStrategy());
          this.#is_report_successfully_generated = true;
        }
        
        const result_of_category = this.#calculation_strategy.calculate_test_result();
        this.#collect_test_report(result_of_category);
      }
    );
  }

  #collect_test_report(result_of_category){

  }

  #set_strategy(strategy){
    this.#calculation_strategy = strategy;
  }

  #execute_strategy(test_category_record){
    return this.#calculation_strategy.calculate_test_result(test_category_record);
  }
}