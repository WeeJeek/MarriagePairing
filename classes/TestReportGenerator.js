import MBTIResultCalculationStrategy from "./MBTIResultCalculationStrategy"
import LifePressureAnalysisResultCalculationStrategy from "./LifePressureAnalysisResultCalculationStrategy"
import HappyMarriageAssessmentResultCalculationStrategy from "./HappyMarriageAssessmentResultCalculationStrategy"
import FamilyAdaptabilityResultCalculationStrategy from "./FamilyAdaptabilityResultCalculationStrategy"
import TestCategories  from "../enums/TestCategories"

export default class TestReportCalculator{
  #calculation_strategy = null;
  #test_report = {};
  #is_report_successfully_generated = false;

  generate_test_report(answers){
    //this.#store_user_info_to_report();
    this.#calculate_test_result_for_independent_tests(answers["INDEPENDENT_TESTS"]);
    this.#calculate_test_result_for_dependent_tests(answers["DEPENDENT_TESTS"]);
    this.#is_report_successfully_generated = true;

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

  #calculate_test_result_for_independent_tests(test_record){
    console.log("DEBUGGING: Start")
    if(!test_record){
      return;
    }

    this.#test_report["INDEPENDENT_TESTS"] = {};
    let keys = Object.keys(test_record)

    for(let i = 0; i < keys.length; i++){
        if(keys[i] == TestCategories.MBTI){
            this.#set_strategy(new MBTIResultCalculationStrategy());
        }
        else if(keys[i] == TestCategories.FAMILY_ADAPTABILITY_TEST){
            this.#set_strategy(new FamilyAdaptabilityResultCalculationStrategy());
        }
        else if(keys[i] == TestCategories.LIFE_PRESSURE_ANALYSIS){
            this.#set_strategy(new LifePressureAnalysisResultCalculationStrategy());
        }

        if(this.#calculation_strategy != null){
            console.log("strategy is set")
            const result_of_male = this.#calculation_strategy.calculate_test_result(test_record[keys[i]]["MALE"]);
            const result_of_female = this.#calculation_strategy.calculate_test_result(test_record[keys[i]]["FEMALE"]);
            
            this.#collect_independent_test_report(keys[i], result_of_male, result_of_female);
            this.#calculation_strategy = null;
        }       
    }
  }

  #calculate_test_result_for_dependent_tests(test_record){
    if(!test_record){
      return;
    }

    this.#test_report["DEPENDENT_TESTS"] = {};
    let keys = Object.keys(test_record);

    for(let i = 0; i++; O < keys.length){
        if(keys[i] == TestCategories.HAPPY_MARRIAGE_ASSESSMENT){
            this.#set_strategy(new HappyMarriageAssessmentResultCalculationStrategy());
        }

        if(this.#calculation_strategy != null){
            const result_of_category = this.#calculation_strategy.calculate_test_result(test_record[keys[i]]);
            this.#collect_dependent_test_report(result_of_category, result_of_category);
            this.#is_report_successfully_generated = true;
            this.#calculation_strategy = null;
        }
    }
  }

  #collect_independent_test_report(test_category, result_of_male, result_of_female){
    //TODO: add translator here
    this.#test_report["INDEPENDENT_TESTS"][test_category] = {};
    this.#test_report["INDEPENDENT_TESTS"][test_category]["MALE"] = result_of_male;
    this.#test_report["INDEPENDENT_TESTS"][test_category]["MALE"] = result_of_female;
  }

  #collect_dependent_test_report(test_category, test_result){
    //TODO: add translator here
    this.#test_report["DEPENDENT_TESTS"][test_category] = test_result;
  }

  #set_strategy(strategy){
    this.#calculation_strategy = strategy;
  }
}