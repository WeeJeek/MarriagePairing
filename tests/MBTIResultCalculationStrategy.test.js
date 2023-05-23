import MBTIResultCalculationStrategy from "../classes/MBTIResultCalculationStrategy";
import CHOICES from "../enums/ChoiceCategories";
import MBTIFeatureCategories from "../enums/MBTICategoty"

describe("testing rules of MBTI test", ()=>{
  let _sut;
  let _example_test_case_1;
  let _example_test_case_2;
  let _example_test_case_3;
  let _test_data_table;

  beforeEach(() => {
    _sut = new MBTIResultCalculationStrategy();
    _example_test_case_1 = [CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.A];
    _example_test_case_2 = [CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B];
    _example_test_case_3 = [CHOICES.B, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.B, CHOICES.B];
  })

  function testMBTI(testCase) {
    const input = testCase.input;
    const expectedOutput = testCase.output;
  
    // call your MBTI calculation function with the input
    const actualOutput = calculateMBTI(input);
  
    // compare the actual output with the expected output
    expect(actualOutput).toEqual(expectedOutput);
  }
  

  it("the strategy should ", ()=>{
    let test_cases = [
      {
        given_test_data: _example_test_case_1,
        expected_EVI_score: 1,
        expected_EVI_category: MBTIFeatureCategories.E,
        expected_NVS_score: 1,
        expected_NVS_category: MBTIFeatureCategories.N,
        expected_FVT_score: 1,
        expected_FVT_category: MBTIFeatureCategories.F,
        expected_JVP_score: 1,
        expected_JVP_category: MBTIFeatureCategories.J,
      }
    ];

    it.each(_test_data_table)("the strategy should sum up number for each category", )


  })
})