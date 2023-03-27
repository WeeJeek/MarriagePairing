import ITestResultCalculationStrategy from "../classes/ITestResultCalculationStrategy";
import TestReportGenerator from "../classes/TestReportGenerator";


describe("unit test testing for Test Result Calculator class", () =>{
  let _sut;

  beforeEach(() => {
    _sut = new TestReportGenerator();
  })

  it("The test report generator should get gerenated result as expected", ()=>{
    let given_test_record = {};
    let expected_test_record_result = {};

    let result_test_result = _sut.generate_test_report(given_test_record);

    expect(result_test_result).toEqual(expected_test_record_result);
  })
  afterEach(()=>{
    jest.restoreAllMocks()
  })
})