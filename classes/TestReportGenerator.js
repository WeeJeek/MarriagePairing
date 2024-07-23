import MBTIResultCalculationStrategy from "./MBTIResultCalculationStrategy";
import LifePressureAnalysisResultCalculationStrategy from "./LifePressureAnalysisResultCalculationStrategy";
import HappyMarriageAssessmentResultCalculationStrategy from "./HappyMarriageAssessmentResultCalculationStrategy";
import FamilyAdaptabilityResultCalculationStrategy from "./FamilyAdaptabilityResultCalculationStrategy";
import TestCategories from "../enums/TestCategories";
import TestReportTranslator from "./TestReportTranslator";
import TestTypes from "../enums/TestTypes"
import Genders from "../enums/Genders"

export default class TestReportCalculator {
  #calculation_strategy = null;
  #test_report = {};
  #is_report_successfully_generated = false;

  constructor(){
  }

  generate_test_report(answers) {
    // this.#store_user_info_to_report();
    this.#calculate_test_result_for_independent_tests(answers[[TestTypes.INDEPENDENT_TESTS]]);
    this.#calculate_test_result_for_dependent_tests(answers[[TestTypes.DEPENDENT_TESTS]]);
    this.#is_report_successfully_generated = true;

    return this.#test_report;
  }

  is_report_successfully_generated() {
    return this.#is_report_successfully_generated;
  }

  #store_user_info_to_report() {
    // Placeholder for storing user info to the report
  }

  #merge_test_result_from_2_users(result_male, result_female) {
    // Placeholder for merging test results from two users
  }

  #collect_user_result() {
    // Placeholder for collecting user results
  }

  #calculate_test_result_for_independent_tests(test_record) {
    if (!test_record) {
      return;
    }

    this.#test_report[[TestTypes.INDEPENDENT_TESTS]] = {};
    let keys = Object.keys(test_record);

    for (let i = 0; i < keys.length; i++) {
      if (keys[i] == TestCategories.MBTI) {
          console.log("DEBUGGING: MBTI strategy is triggered");
        this.#set_strategy(new MBTIResultCalculationStrategy());
      } else if (keys[i] == TestCategories.FAMILY_ADAPTABILITY_TEST) {
        console.log("DEBUGGING: Family strategy is triggered");
        this.#set_strategy(new FamilyAdaptabilityResultCalculationStrategy());
      } else if (keys[i] == TestCategories.LIFE_PRESSURE_ANALYSIS) {
        console.log("DEBUGGING: Life Pressure strategy is triggered");
        this.#set_strategy(new LifePressureAnalysisResultCalculationStrategy());
      }

      if (this.#calculation_strategy != null) {
        console.log("DEBUGGING: strategy exist");
        console.log("the input for male is " + JSON.stringify(test_record[keys[i]][[Genders.MALE]]))
        const result_of_male = this.#calculation_strategy.calculate_test_result(test_record[keys[i]][[Genders.MALE]]);
        console.log("DEBUGGING: the reuslt of male is " + JSON.stringify(result_of_male))
        const result_of_female = this.#calculation_strategy.calculate_test_result(test_record[keys[i]][[Genders.FEMALE]]);

        this.#collect_independent_test_report(keys[i], result_of_male, result_of_female);
        console.log("the test report after this test" + JSON.stringify(this.#test_report))
        this.#calculation_strategy = null;
      }
    }
  }

  #calculate_test_result_for_dependent_tests(test_record) {
    if (!test_record) {
      return;
    }

    this.#test_report[[TestTypes.DEPENDENT_TESTS]] = {};
    let keys = Object.keys(test_record);

    for (let i = 0; i < keys.length; i++) {
      if (keys[i] == TestCategories.HAPPY_MARRIAGE_ASSESSMENT) {
        console.log("DEBUGGING: Happy Marriage strategy is triggered");
        this.#set_strategy(new HappyMarriageAssessmentResultCalculationStrategy());
      }

      if (this.#calculation_strategy != null) {
        const result_of_category = this.#calculation_strategy.calculate_test_result(test_record[keys[i]]);
        this.#collect_dependent_test_report(keys[i], result_of_category);
        this.#is_report_successfully_generated = true;
        this.#calculation_strategy = null;
      }
    }
  }

  #collect_independent_test_report(test_category, result_of_male, result_of_female) {
    this.#test_report[[TestTypes.INDEPENDENT_TESTS]] = {};
    this.#test_report[[TestTypes.INDEPENDENT_TESTS]][test_category] = {};
    this.#test_report[[TestTypes.INDEPENDENT_TESTS]][test_category][[Genders.MALE]] = result_of_male;
    this.#test_report[[TestTypes.INDEPENDENT_TESTS]][test_category][[Genders.FEMALE]] = result_of_female;
    console.log("test report before translation " + JSON.stringify(this.#test_report))
    this.#test_report[[TestTypes.INDEPENDENT_TESTS]] = this.#translate_reports(this.#test_report[[TestTypes.INDEPENDENT_TESTS]]);
    console.log("test report after translation " + JSON.stringify(this.#test_report))
  }

  #collect_dependent_test_report(test_category, test_result) {
    this.#test_report[[TestTypes.DEPENDENT_TESTS]] = {};
    this.#test_report[[TestTypes.DEPENDENT_TESTS]][test_category] = test_result;
    this.#test_report[[TestTypes.DEPENDENT_TESTS]] = this.#translate_reports(this.#test_report[[TestTypes.DEPENDENT_TESTS]]);
  }

  #translate_reports(reports){
    const translator = new TestReportTranslator();

    // Ensure reports is an array or convert it to an array
    const reportsArray = Array.isArray(reports) ? reports : [reports];

    return reportsArray.map(report => {
        const translatedReport = translator.translate(report);
        console.log("Translated Report: ", JSON.stringify(translatedReport, null, 2));
        return translatedReport;
    });
  }
  #set_strategy(strategy) {
    this.#calculation_strategy = strategy;
  }
}
