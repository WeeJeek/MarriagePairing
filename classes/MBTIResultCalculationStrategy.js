import ITestResultCalculationStrategy from "./ITestResultCalculationStrategy"
import { MBTIFeatureCategories, MBTICategories } from "../enums/MBTICategories"
import {MBTI} from "../src/tests_related/mbti"
import {Choice} from "../enums/ChoiceCategories"

export default class MBTIResultCalculationStrategy extends ITestResultCalculationStrategy{
  #test_category_record;

  calculate_test_result(test_category_record){
    let starting_indexes_of_categories = this.#find_first_index_of_categories(test_category_record);
    let test_result = {};
    
    for(let i = 0; i < starting_indexes_of_categories.length; i++){
      let end_of_this_category = this.#find_the_end_of_the_category(i, starting_indexes_of_categories);
      let current_starting_index = starting_indexes_of_categories[i];
      let current_mbti_category = this.#map_mbti_feature_category_to_category(MBTI["questions"][current_starting_index]["choices"][0]["category"]);
      this.#start_a_category_in_test_result(test_result, current_mbti_category); 
      this.#sumarize_for_a_category(starting_indexes_of_categories[i], end_of_this_category, test_category_record, current_mbti_category);
    }

    return test_category_record;
  }

  #start_a_category_in_test_result(test_result, category){
    test_result[category] = {
      score:0
    };
  }

  #sumarize_for_a_category(starting_index, ending_index, test_category_record, current_mbti_category){
    for(let i = starting_index; i <= ending_index; i++){//TODO be careful for this, Maybe shoudl not include ending index
      let current_answer = test_category_record[i];
      let current_feature_category = this.#map_choice_to_feature_category(i, current_answer);
      test_category_record[current_feature_category]["score"] += this.#calculate_score_for_a_question(current_mbti_category, current_feature_category);
    }
    test_category_record[current_feature_category]["category"] = this.#calculate_letter_of_a_category(test_category_record[current_feature_category]);
  }

  #calculate_score_for_a_question(current_mbti_category, current_feature_category){
    if(current_mbti_category === MBTICategories.EvI){
      if(current_feature_category === MBTIFeatureCategories.E){
        return 1;
      }
      else if(current_feature_category === MBTIFeatureCategories.I){
        return -1;
      }
    }
    else if(current_mbti_category === MBTICategories.NvS){
      if(current_feature_category === MBTIFeatureCategories.N){
        return 1;
      }
      else if(current_feature_category === MBTIFeatureCategories.S){
        return -1;
      }
    }
    else if(current_mbti_category === MBTICategories.FvT){
      if(current_feature_category === MBTIFeatureCategories.F){
        return 1;
      }
      else if(current_feature_category === MBTIFeatureCategories.T){
        return -1;
      }
    }
    else if(current_mbti_category === MBTICategories.JvP){
      if(current_feature_category === MBTIFeatureCategories.J){
        return 1;
      }
      else if(current_feature_category === MBTIFeatureCategories.P){
        return -1;
      }
    }
    throw new Error("wrong MBTI category or feature category");
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

  #map_mbti_feature_category_to_category(feature_category){
    if(feature_category === MBTICategories.EvI){
      if(feature_category["score"] > 0){
        feature_category["trend"] = MBTICategories.E;
      }
      else if(feature_category["score"] < 0){
        feature_category["trend"] = MBTICategories.I;
      }
      else{
        feature_category["trend"] = MBTICategories.Neutral;
      }
    }
    else if(feature_category === MBTICategories.NvS){
      if(feature_category["score"] > 0){
        feature_category["trend"] = MBTICategories.N;
      }
      else if(feature_category["score"] < 0){
        feature_category["trend"] = MBTICategories.S;
      }
      else{
        feature_category["trend"] = MBTICategories.Neutral;
      }
    }
    else if(feature_category === MBTICategories.FvT){
      if(feature_category["score"] > 0){
        feature_category["trend"] = MBTICategories.F;
      }
      else if(feature_category["score"] < 0){
        feature_category["trend"] = MBTICategories.T;
      }
      else{
        feature_category["trend"] = MBTICategories.Neutral;
      }
    }
    else{
      if(feature_category["score"] > 0){
        feature_category["trend"] = MBTICategories.J;
      }
      else if(feature_category["score"] < 0){
        feature_category["trend"] = MBTICategories.P;
      }
      else{
        feature_category["trend"] = MBTICategories.Neutral;
      }
    }
  }

  #calculate_letter_of_a_category(answers_of_a_category){
    //Choice A + 1; Choice B - 1
    result = 0;

    //store for each letter
    answers_of_a_category.forEach(element=>{
      if(element === Choice.A){
        result++;
      }else{
        result--;
      }
    });

    return result;
  }
}