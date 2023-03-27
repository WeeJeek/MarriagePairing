import ITestResultCalculationStrategy from "../classes/ITestResultCalculationStrategy";
import MBTIResultCalculationStrategy from "../classes/MBTIResultCalculationStrategy"
import TestResultCalculator from "../classes/TestResultCalculator"


describe("unit test testing for Test Result Calculator class", () =>{
  let _sut;

  beforeEach(() => {
    _sut = new MBTIResultCalculationStrategy();
  })

  it("The result calculator should get gerenated result as expected", ()=>{
    let given_test_category_record = null;
    let expected_test_record_result = null;

    let result_test_result = _sut.calculate_test_result(given_test_category_record);

    expect(result_test_result).toEqual(expected_test_record_result);
  })
  afterEach(()=>{
    jest.restoreAllMocks()
  })
})