import MBTIResultCalculationStrategy from "./MBTIResultCalculationStrategy"
import LifePressureAnalysisResultCalculationStrategy from "./LifePressureAnalysisResultCalculationStrategy"
import HappyMarriageAssessmentResultCalculationStrategy from "./HappyMarriageAssessmentResultCalculationStrategy"
import FamilyAdaptabilityResultCalculationStrategy from "./FamilyAdaptabilityResultCalculationStrategy"
import TestCategories  from "../enums/TestCategories"

export default class TestReportCalculator{
  #calculation_strategy = null;
  #male_result = null;
  #female_result = null;
  #test_report = {};
  #is_report_successfully_generated = false;

  generate_test_report(test_record){
    //this.#store_user_info_to_report();
    this.#male_result = this.#collect_user_result();//need to adjust signature
    this.#female_result = this.#collect_user_result();
    this.#calculate_test_result(test_record);

    return this.#test_report;
  }

  is_report_successfully_generated(){
    return this.#is_report_successfully_generated;
  }

  #store_user_info_to_report(){

  }

  #merge_test_result_from_2_users(result_male, result_female){

  }

  #collect_user_result(){

  }

  #calculate_test_result(test_record){
    if(!test_record){
      return;
    }

    let answers;

    Object.keys(test_record).forEach(
      function(test_name){
        if(test_name == TestCategories.MBTI){
          this.#set_strategy(new MBTIResultCalculationStrategy());
        }
        else if(test_name == TestCategories.FAMILY_ADAPTABILITY_TEST){
          this.#set_strategy(new FamilyAdaptabilityResultCalculationStrategy());
        }
        else if(test_name == TestCategories.LIFE_PRESSURE_ANALYSIS){
          this.#set_strategy(new LifePressureAnalysisResultCalculationStrategy());
        }
        else if(test_name == TestCategories.HAPPY_MARRIAGE_ASSESSMENT){
          this.#set_strategy(new HappyMarriageAssessmentResultCalculationStrategy());
          answers = this.#merge_test_result_from_2_users(this.#male_result, this.#female_result);
        }
//现在的问题是，HappyMarriage需要两个结果，怎么样统一格式？
        if(this.#calculation_strategy != null){
            const result_of_category = this.#calculation_strategy.calculate_test_result(answers);
            this.#collect_test_report(result_of_category);
            this.#is_report_successfully_generated = true;
            this.#calculation_strategy = null;
        }
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