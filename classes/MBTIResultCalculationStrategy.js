import ITestResultCalculationStrategy from "./ITestResultCalculationStrategy"
import { MBTIFeatureCategories, MBTICategories } from "../enums/MBTICategories"
import {MBTI} from "../src/tests_related/mbti"

export default class MBTIResultCalculationStrategy extends ITestResultCalculationStrategy{
  #test_category_record;

  calculate_test_result(test_category_record){
    console.log("MBTI strategy applied");
    let starting_indexes_of_categories = this.#find_first_index_of_categories(test_category_record);
    let test_result = {};
    
    for(let i = 0; i < starting_indexes_of_categories.length; i++){
      let end_of_this_category = this.#find_the_end_of_the_category(i, starting_indexes_of_categories);
      let current_starting_index = starting_indexes_of_categories[i];
      let current_mbti_category = this.#map_mbti_feature_category_to_category(MBTI["questions"][current_starting_index]["choices"][0]["category"]);
      test_result = this.#start_a_category_in_test_result(test_result, current_mbti_category); 

      this.#sum_scores_for_a_category(starting_indexes_of_categories[i], end_of_this_category, test_category_record, current_mbti_category);
    }

    return test_category_record;
  }

  #start_a_category_in_test_result(test_result, category){
    test_result[category] = {};
    return test_result;
  }

  #sum_scores_for_a_category(starting_index, ending_index, test_category_record, current_mbti_category){
    for(let j = starting_index; j <= ending_index; j++){
      let current_answer = test_category_record[j];
      let current_feature_category = this.#map_choice_to_feature_category(j, current_answer);
      if(!test_category_record.hasOwnProperty(current_feature_category)){
        test_category_record[current_feature_category] = 0;
      }
      test_category_record[current_feature_category] += 1;
    }
  }

  #map_choice_to_feature_category(index_of_question, choice){
    let choices = MBTI["questions"][index_of_question][choices];
    if(choices[0]["index"] == choice){
      return choices[0]["category"];
    }else{
      return choices[1]["category"];
    }

  }

  #find_the_end_of_the_category(current_index, starting_indexes_of_categories){
    if(current_index == starting_indexes_of_categories.length -1){
      return test_category_record.length - 1;
    }
    else{
      return starting_indexes_of_categories[i+1] - 1;
    }
  }

  #find_first_index_of_categories(question_list) {
    let category_indexes = {};
    let current_category;

    for (let i = 0; i < question_list.length; i++) {
      console.log("DEBUG: question list" + question_list)
      console.log("DEBUG: question list [i]" + question_list[i])
      let choice_category = this.#map_mbti_feature_category_to_category(question_list[i]["choices"][0]["category"])
      if(choice_category != current_category){
        current_category = choice_category;
        category_indexes.push(i);
      }
    }
    
    return category_indexes;
  }

  #map_mbti_feature_category_to_category(choice_category){
    if(choice_category == MBTIFeatureCategories.E || MBTIFeatureCategories.I){
      return MBTICategories.EvI;
    }
    if(choice_category == MBTIFeatureCategories.N || MBTIFeatureCategories.S){
      return MBTICategories.NvS;
    }
    if(choice_category == MBTIFeatureCategories.F || MBTIFeatureCategories.T){
      return MBTICategories.FvT;
    }
    if(choice_category == MBTIFeatureCategories.J || MBTIFeatureCategories.P){
      return MBTICategories.JvP;
    }
  }

  #calculate_letter_of_a_category(answers_of_a_category){
    result = null;

    //store for each letter
    answers_of_a_category.forEach(element=>{
      
    });

    return result;
  }
}