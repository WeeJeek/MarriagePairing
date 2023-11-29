import TestRecordManager from "./TestRecordManager"

import TestStatus from "../enums/TestStatus"

export default class FamilyAdaptabilityRecordManager extends TestRecordManager{
    #test_record;
    #current_selected_test_index = 0;

    constructor(family_adaptability_record){
        super();
        this.#test_record = family_adaptability_record;
    }

    get_current_question_index(){
        return this.#current_selected_test_index;
    }

    answer_the_current_question(choice){
        this.#test_record["status"] = TestStatus.IN_PROGRESS;
    }
}