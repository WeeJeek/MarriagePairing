import TestRecordManager from "./TestRecordManager"
import { TestProgressManager } from "./TestProgressManager"
import {test_records} from "../src/tests_related/test_records"
import TestStatus from "../utils/TestStatus"

export default class TestManager{
  #test_record;

  constructor(){
    this.#test_record = test_records;
  }

  check_test_record_exist(){
    let result = false;
    let test_names = Object.keys(this.#test_record.test_progress);
    console.log("test_names length: ", test_names.length);
    for(let i = 0; i < test_names.length; i++){
      console.log("the " + i + " times in the loop")
      const test_name = test_names[i];
      console.log("the test name is "+ test_name)
      const test = this.#test_record.test_progress[test_name];
      console.log("the test is "+ test)
      console.log("the status is "+ test.status)
      if(test.status !== TestStatus.UNTOUCHED)
      {
        result = true;
        break;
      }
    }

    return result;
  }

  get_test_category_on_progress(){
    return this._test_record_manager.get_test_category_on_progress()
  }

  get_test_index_on_progress(){
    return this._test_record_manager.get_test_index_on_progress();
  }
}