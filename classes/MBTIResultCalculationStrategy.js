import ITestResultCalculationStrategy from "./ITestResultCalculationStrategy"
import MBTICategories from "../enums/MBTICategories"
import MBTIFeatureCategories from "../enums/MBTIFeatureCategories"
import {MBTI} from "../src/tests_related/mbti"
import CHOICES from "../enums/ChoiceCategories"

export default class MBTIResultCalculationStrategy extends ITestResultCalculationStrategy{
  #test_category_record;

  calculate_test_result(answers){
    let starting_indexes_of_categories = this.#find_first_index_of_categories(MBTI["questions"]);
    let category_result = {};
    
    for(let i = 0; i < starting_indexes_of_categories.length; i++){
      let current_starting_index = starting_indexes_of_categories[i];
      let end_index_of_this_category = this.#find_the_end_of_the_category(i, starting_indexes_of_categories, answers);
      
      let current_mbti_category = this.#map_mbti_feature_category_to_category(MBTI["questions"][current_starting_index]["choices"][0]["category"]);

      this.#start_a_category_in_test_result(category_result, current_mbti_category, answers.slice(current_starting_index, end_index_of_this_category)); 
      this.#sumarize_for_a_category(starting_indexes_of_categories[i], end_index_of_this_category, answers, current_mbti_category, category_result);
    }

    return category_result;
  }

  #find_first_index_of_categories(question_list) {
    let category_indexes = [];
    let current_category;

    for (let i = 0; i < question_list.length; i++) {
        let choice_category = this.#map_mbti_feature_category_to_category(question_list[i]["choices"][0]["category"]);
        if(choice_category != current_category){
            current_category = choice_category;
            category_indexes.push(i);
        }
    }
    return category_indexes;
  }

  #map_choice_to_feature_category(index_of_question, choice){
    let choices = MBTI["questions"][index_of_question]["choices"];
    if(choices[0]["index"] == choice){
      return choices[0]["category"];
    }else{
      return choices[1]["category"];
    }
  }

  #start_a_category_in_test_result(test_result, category, answers){
    test_result[category] = {
      answers: answers,
      score:0
    };
  }

  #sumarize_for_a_category(starting_index, ending_index, answers, current_mbti_category, category_result){
    for(let i = starting_index; i <= ending_index; i++){//TODO be careful for this, Maybe shoudl not include ending index
      let current_answer = answers[i];
      let current_feature_category = this.#map_choice_to_feature_category(i, current_answer);
      category_result[current_mbti_category]["score"] += this.#calculate_score_for_a_question(current_mbti_category, current_feature_category);
    }

    category_result[current_mbti_category]["trend"] = this.#calculate_trend_of_a_category(category_result[current_mbti_category]["score"], current_mbti_category);
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

  #find_the_end_of_the_category(current_index_of_category, starting_indexes_of_categories, test_category_record){
    if(current_index_of_category == starting_indexes_of_categories.length -1){
      return test_category_record.length - 1;
    }
    else{
      return starting_indexes_of_categories[current_index_of_category+1] - 1;
    }
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
        return MBTICategories.E;
      }
      else if(score < 0){
        return MBTICategories.I;
      }
      else{
        return MBTICategories.Neutral;
      }
    }
    else if(current_mbti_category === MBTICategories.NvS){
      if(score > 0){
        return MBTICategories.N;
      }
      else if(score < 0){
        return MBTICategories.S;
      }
      else{
        return MBTICategories.Neutral;
      }
    }
    else if(current_mbti_category === MBTICategories.FvT){
      if(score > 0){
        return MBTICategories.F;
      }
      else if(feature_category["score"] < 0){
        return MBTICategories.T;
      }
      else{
        return MBTICategories.Neutral;
      }
    }
    else if(current_mbti_category === MBTICategories.JvP){
      if(score > 0){
        return MBTICategories.J;
      }
      else if(score < 0){
        return MBTICategories.P;
      }
      else{
        return MBTICategories.Neutral;
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
        console.log("=====" + element)
      if(element === CHOICES.A){
        result++;
      }else{
        result--;
      }
    });

    return result;
  }
}