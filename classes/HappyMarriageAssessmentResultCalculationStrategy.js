import ITestResultCalculationStrategy from "./ITestResultCalculationStrategy"
import HappyMarriageCategories from "../enums/HappyMarriageCategories"
import {HAPPY_MARRIAGE_ASSESSMENT} from "../src/tests_related/happy_marriage_assessment"
import SCORES from "../enums/Scores";

export default class HappyMarriageAssessmentResultCalculationStrategy extends ITestResultCalculationStrategy{
  calculate_test_result(answers){
    let STRUCTURE = {
        consistency:"",
        satisfaction:{
            male:"",
            female:""
        }
    };
    let results = {};

    for(let i = 0; i < answers.length; i++)
    {
        let result = STRUCTURE;
        result.consistency = this.#calculate_consistency(answers[i]["male_input"], answers[i]["female_input"], answers[i].subcategory);
        console.log("male satisfaction started +++++++")
        result.satisfaction.male = this.#calculate_satisfaction(answers[i]["male_input"], answers[i].subcategory);
        console.log("female satisfaction started +++++++")
        result.satisfaction.female = this.#calculate_satisfaction(answers[i]["female_input"], answers[i].subcategory);

        results[answers[i].subcategory] = result;
    }

    return results;
  }

  #calculate_consistency(male_input, female_input, subcategory){
      try{
          this.#ensure_input_with_same_amount(male_input, female_input);
          this.#ensure_input_with_same_category(male_input, female_input);
      }catch(e){
          console.error(e)
      }

      let question_list = this.#parse_question_list_with_category(subcategory);
      let score = 0;

      for(let i = 0; i < question_list.length; i++){
          let is_positive = question_list[i].positive;
          
          if(is_positive && (male_input[i] > SCORES.TWO) && (female_input[i] > SCORES.TWO)){
              if(!(male_input[i] == SCORES.THREE && female_input[i] == SCORES.THREE))
                score++;
          }
          else if(!is_positive && (male_input[i] < SCORES.FOUR) && (female_input[i] < SCORES.FOUR)){
              if(!(male_input[i] == SCORES.THREE && female_input[i] == SCORES.THREE))
                score++;
          }
      }

      return score*10;
  }

  #convert_score(score, is_positive){
      console.log("the input positive is " + is_positive)
      if(is_positive){
          return score;
      }
      else{
          return 6 - score;
      }
  }

  #calculate_satisfaction(input, subcategory){
    let question_list = this.#parse_question_list_with_category(subcategory);

    console.log("question list is " + JSON.stringify(question_list))
    let total = 0;

    for(let i = 0; i < input.length; i++){
        console.log("index i question list is " + JSON.stringify(question_list[i]))
        console.log("Original score is " + input[i])
        console.log("converted score " + this.#convert_score(input[i], question_list[i]["questions"]))
        total += this.#convert_score(input[i], question_list[i]["positive"]);
        console.log("total is " + total)
    }

    let satisfaction_ratio = total/40*100;
    if(satisfaction_ratio >98) 
        return 98;
    return satisfaction_ratio;
  }

  #ensure_input_with_same_amount(male_input, female_input){
      if(male_input.length != female_input.length){
          throw new Error("Unequal amount of input");
      }
  }
  #ensure_input_with_same_category(male_input, female_input){
    if(male_input.subcategory != female_input.subcategory){
        throw new Error("Unequal subcategory of input");
    }
  }
  #parse_question_list_with_category(expected_subcategory){
    let full_list = HAPPY_MARRIAGE_ASSESSMENT["test_subset"];
    
    for(let i = 0; i < full_list.length; i++){
        if(full_list[i].category == expected_subcategory){
            return full_list[i]["questions"];
        }
    }
    return null;
  }
}