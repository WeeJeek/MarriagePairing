import ITestResultCalculationStrategy from "./ITestResultCalculationStrategy"
import MBTICategories from "../enums/MBTICategories"
import MBTIFeatureCategories from "../enums/MBTIFeatureCategories"
import {MBTI} from "../src/tests_related/mbti"
import CHOICES from "../enums/ChoiceCategories"

export default class MBTIResultCalculationStrategy extends ITestResultCalculationStrategy{
  #test_category_record;

  calculate_test_result(answers){
    let category_result = {};
    
    for(let i = 0; i < MBTI["test_subset"].length; i++){  
      let current_mbti_category = MBTI["test_subset"][i]["category"];
      let starting_index_of_this_category = this.#find_starting_index_of_a_category(i);
      let ending_index_of_this_category= this.#find_ending_index_of_a_category(starting_index_of_this_category, i);

      this.#start_a_category_in_test_result(category_result, current_mbti_category, answers.splice(starting_index_of_this_category, ending_index_of_this_category+1)); 

      let starting_index_within_cat = this.#convert_index_within_category(starting_index_of_this_category);
      let ending_index_within_cat = this.#convert_index_within_category(ending_index_of_this_category);

      this.#sumarize_for_a_category(
          MBTI["test_subset"][i], 
          starting_index_within_cat, 
          ending_index_within_cat, 
          answers, 
          current_mbti_category, 
          category_result);
    }

    return category_result;
  }

  #find_starting_index_of_a_category(index_of_target_category){
    let sum = 0;
    for(let i = 0; i < index_of_target_category; i++){
        sum += MBTI["test_subset"][i]["questions"].length;
    }
    return sum;
  }

  #find_ending_index_of_a_category(sum_of_prev_cat, index_of_target_category){
    return sum_of_prev_cat + MBTI["test_subset"][index_of_target_category]["questions"].length - 1;
  }

  #start_a_category_in_test_result(test_result, category, answers){
    test_result[category] = {
      answers: answers,
      score:0
    };
  }

  #sumarize_for_a_category(categoty_list, starting_index, ending_index, answers, current_mbti_category, category_result){
    for(let i = starting_index; i <= ending_index; i++){
      let current_answer = answers[i];
      let current_feature_category = this.#map_choice_to_feature_category(categoty_list, i, current_answer);
      category_result[current_mbti_category]["score"] += this.#calculate_score_for_a_question(current_mbti_category, current_feature_category);
    }

    category_result[current_mbti_category]["trend"] = this.#calculate_trend_of_a_category(category_result[current_mbti_category]["score"], current_mbti_category);
  }

  #convert_index_within_category(overal_index){
    let remaining_index = overal_index;

    for(let i = 0; i < MBTI["test_subset"].length; i++){
        if(remaining_index > MBTI["test_subset"][i]["questions"].length || remaining_index == MBTI["test_subset"][i]["questions"].length){
            remaining_index = remaining_index - MBTI["test_subset"][i]["questions"].length;
        }else{
            break;
        }
    }

    return remaining_index;
  }

  #map_choice_to_feature_category(category, index_of_question_in_cat, choice){
    let choices = category["questions"][index_of_question_in_cat]["choices"];
    if(choices[0]["index"] == choice){
        return choices[0]["category"];
    }else{
        return choices[1]["category"];
    }
    //later also update writing method with categories
    //in the page, choice is not loaded
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


  #map_mbti_feature_category_to_category(feature_category){
      if(feature_category == MBTIFeatureCategories.E || feature_category == MBTIFeatureCategories.I){
          return MBTICategories.EvI;
      }
      else if(feature_category == MBTIFeatureCategories.N || feature_category == MBTIFeatureCategories.S){
          return MBTICategories.NvS;
      }
      else if(feature_category == MBTIFeatureCategories.F || feature_category == MBTIFeatureCategories.T){
        return MBTICategories.FvT;
      }
      else if(feature_category == MBTIFeatureCategories.J || feature_category == MBTIFeatureCategories.P){
          return MBTICategories.JvP;
      }
      throw new Error("wrong MBTI category or feature category");
  }
  
  #calculate_trend_of_a_category(score, current_mbti_category){
    if(current_mbti_category === MBTICategories.EvI){
      if(score > 0){
        return MBTIFeatureCategories.E;
      }
      else if(score < 0){
        return MBTIFeatureCategories.I;
      }
      else{
        return MBTIFeatureCategories.Neutral;
      }
    }
    else if(current_mbti_category === MBTICategories.NvS){
      if(score > 0){
        return MBTIFeatureCategories.N;
      }
      else if(score < 0){
        return MBTIFeatureCategories.S;
      }
      else{
        return MBTIFeatureCategories.Neutral;
      }
    }
    else if(current_mbti_category === MBTICategories.FvT){
      if(score > 0){
        return MBTIFeatureCategories.F;
      }
      else if(score < 0){
        return MBTIFeatureCategories.T;
      }
      else{
        return MBTIFeatureCategories.Neutral;
      }
    }
    else if(current_mbti_category === MBTICategories.JvP){
      if(score > 0){
        return MBTIFeatureCategories.J;
      }
      else if(score < 0){
        return MBTIFeatureCategories.P;
      }
      else{
        return MBTIFeatureCategories.Neutral;
      }
    }
    else{
        throw new Error("wrong MBTI category or feature category");
    }
  }

  #calculate_letter_of_a_category(answers_of_a_category){
    //Choice A + 1; Choice B - 1
    let result = 0;

    //store for each letter
    answers_of_a_category.forEach(element=>{
      if(element === CHOICES.A){
        result++;
      }else{
        result--;
      }
    });

    return result;
  }
}