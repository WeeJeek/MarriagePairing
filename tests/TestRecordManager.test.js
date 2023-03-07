import TestRecordManager from "../utils/TestRecordManager.js"
import TestCategories from "../utils/TestCategories.js"

describe("unit test testing for Test Manager class", () =>{
  let _sut;

  beforeEach(() => {
    console.log("before test start");
    _sut = new TestRecordManager();
    _setup_test_record_manager_mock();
  })
  
  it("a test manager should get the correct test category on progress", ()=>{
    let expected_test_category = TestCategories.MBTI;

    let result = _sut.get_test_category_on_progress();

    expect(_get_test_category_mock).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected_test_category);
  })

  afterEach(()=>{
    jest.restoreAllMocks()
  })
})