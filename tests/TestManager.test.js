import TestManager from "../utils/TestManager.js"
import TestRecordManager from "../utils/TestRecordManager.js"
import TestCategories from "../utils/TestCategories.js"
import TestFacade from "../utils/TestManager.js";
import TestStatus from "../utils/TestStatus.js"

describe("unit test testing for Test Manager class", () =>{
  let _sut;
  let _get_test_category_mock;
  let _get_test_index_mock;

  _setup_test_record_manager_mock = () => {
    _get_test_category_mock = jest.spyOn(TestRecordManager.prototype, "get_test_category_on_progress");
    _get_test_index_mock = jest.spyOn(TestRecordManager.prototype, "get_test_index_on_progress");
    //get_test_category_on_progress_mock = jest.spy(TestHistory, "get_test_category_on_progress");
    //TODO test history class owns: current index of category; current index of test; Answers are stored
  }

  beforeEach(() => {
    console.log("before test start");
    _sut = new TestFacade();
    _setup_test_record_manager_mock();
  })
  
  it("a test manager should get the correct test category on progress", ()=>{
    let expected_test_category = TestCategories.MBTI;

    let result = _sut.get_test_category_on_progress();

    expect(_get_test_category_mock).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected_test_category);
  })

  it("a test manager should get the correct test index of the test on progress", ()=>{
    let expected_test_index = 2;

    let result = _sut.get_test_index_on_progress();

    expect(_get_test_index_mock).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected_test_index);
  })

  it("a test manager should return test progress exist if user did test before", ()=>
  {
    let expected_result = true;

    let result = _sut.check_test_record_exist();

    expect(result).toEqual(expected_result);
  })

  it("a test manager should return test progress not exist if user never did test before", ()=>
  {
    let expected_result = false;
    
    _sut['#test_record'] = {
      "test_progress":{
        "mbti":{
          "status": TestStatus.IN_PROGRESS
        }
      }
    };
    let result = _sut.check_test_record_exist();

    expect(result).toEqual(expected_result);
  })

  afterEach(()=>{
    jest.restoreAllMocks()
  })
})