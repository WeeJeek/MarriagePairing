import ITestResultCalculationStrategy from "./ITestResultCalculationStrategy"

export default class FamilyAdaptabilityResultCalculationStrategy extends ITestResultCalculationStrategy{
  calculate_test_result(answers){
    let test_result = this.#init_test_result();

    for(let i = 0; i < answers.length; i++){
        if(i < 20){//original family
            if(i % 2 == 1){//elasticity
                this.#update_original_family_category_elasticity_result(answers[i], test_result)
            }
            else{
                this.#update_original_family_category_closeness_result(answers[i], test_result)
            }
        }
        else{//expectation
            if(i % 2 == 1){//elasticity
                this.#update_ideal_relationship_category_elasticity_result(answers[i], test_result)
            }
            else{
                this.#update_ideal_relationship_category_closeness_result(answers[i], test_result)
            }
        }
    }

    return test_result;
  }

  #update_original_family_category_elasticity_result(answer, test_result){
    test_result["answers"]["Original Family"]["Elasticity"].push(answer);
    test_result["score"]["Original Family"]["Elasticity"] += parseInt(answer)/2;
  }

  #update_original_family_category_closeness_result(answer, test_result){
    test_result["answers"]["Original Family"]["Closeness"].push(answer);
    test_result["score"]["Original Family"]["Closeness"] += parseInt(answer)/2;
}

  #update_ideal_relationship_category_elasticity_result(answer, test_result){
    test_result["answers"]["Ideal Relationship"]["Elasticity"].push(answer);
    test_result["score"]["Ideal Relationship"]["Elasticity"] += parseInt(answer)/2;
  }

  #update_ideal_relationship_category_closeness_result(answer, test_result){
    test_result["answers"]["Ideal Relationship"]["Closeness"].push(answer);
    test_result["score"]["Ideal Relationship"]["Closeness"] += parseInt(answer)/2;
  }

  #init_test_result(){
      return {
        score: {
            "Original Family": {
                "Closeness":0,
                "Elasticity":0
            },
            "Ideal Relationship": {
                "Closeness":0,
                "Elasticity":0
            }
        },
        answers: {
            "Original Family": {
                "Closeness":[],
                "Elasticity":[]
            },
            "Ideal Relationship": {
                "Closeness":[],
                "Elasticity":[]
            }
        }
      }
  }


}