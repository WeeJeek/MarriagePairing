import TestCategory from "./TestCategories"

export default class TestRecordManager{
  constructor(){

  }

  get_test_category_on_progress(){
    return TestCategory.MBTI;
  }

  get_test_index_on_progress(){
    return 2;
  }
}