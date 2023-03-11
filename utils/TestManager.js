import TestRecordManager from "./TestRecordManager"
import { TestProgressManager } from "./TestProgressManager"

export default class TestManager{
  #test_record;

  constructor(){
    this.#test_record = {};
  }

  check_test_record_exist(){
    if (!this.#test_record) {
       console.log("first")
      return false; 
    }
    if (!this.#test_record["test_progress"]) {
      console.log("second")
      return false; 
    }

    let elements = Object.values(this.#test_record["test_progress"]);

    elements.forEach(element => {
      if(element["status"] == TestStatus.IN_PROGRESS || element["status"] == TestStatus.FINISHED)
      {
        return true;
      }
    });

    return false;
  }

  get_test_category_on_progress(){
    return this._test_record_manager.get_test_category_on_progress()
  }

  get_test_index_on_progress(){
    return this._test_record_manager.get_test_index_on_progress();
  }
}