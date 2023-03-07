import TestRecordManager from "./TestRecordManager"
import { TestProgressManager } from "./TestProgressManager"

export default class TestFacade{
  constructor(){
    this._test_record_manager = new TestRecordManager();
  }

  get_test_category_on_progress(){
    return this._test_record_manager.get_test_category_on_progress()
  }

  get_test_index_on_progress(){
    return this._test_record_manager.get_test_index_on_progress();
  }
}