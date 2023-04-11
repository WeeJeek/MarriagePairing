import { loadTTFFont } from "XrFrame/kanata/lib/index";
import { test_records } from "../report_segments/test_records";
import ITestResultCalculationStrategy from "./ITestResultCalculationStrategy"

export default class MBTIResultCalculationStrategy extends ITestResultCalculationStrategy{
  #test_category_record;

  calculate_test_result(test_category_record){
    this.#test_category_record = test_category_record;
    console.log("MBTI strategy applied");
    categories = this.#sort_questions_into_4_categories();
    return this.#calculate_for_all_categories(categories);
  }

  #calculate_for_all_categories(categories){
    result = {
      "ExtraversionVSIntroversion": "",
      "SensingVsIntuition": "",
      "ThinkingVsFeeling": "",
      "JudgingVsPerceiving": ""
    }


    return result;
  }

  #calculate_letter_of_a_category(answers_of_a_category){
    result = null;

    //store for each letter
    answers_of_a_category.forEach(element=>{
      
    });

    return result;
  }

  #sort_questions_into_4_categories(){
    this.#test_category_record.forEach(element => {
      
    });

    return;
  }
}