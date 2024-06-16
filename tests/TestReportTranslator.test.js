import TestReportTranslator from "../classes/TestReportTranslator"


describe("unit test testing for Test Result Calculator class", () =>{
  let _sut;

  beforeEach(() => {
    _sut = new TestReportTranslator();
  })

  it("The test report translator should translate the result as expected", ()=>{
    let GIVEN_REPORT = {
        "INDEPENDENT_TESTS":{
            "MBTI":{
                "MALE":{
                    "EvI":{
                        "answers":["B","B","B","B","B","B","B"],
                        "score":-7,
                        "trend":"Introversion"},
                    "FvT":{
                        "answers":["B","B","B","B","B","B","B"],
                        "score":-7,
                        "trend":"Thinking"},
                    "JvP":{
                        "answers":["B","B","B","B","B","B","B"],
                        "score":-7,
                        "trend":"Perceiving"},
                    "NvS":{
                        "answers":["B","B","B","B","B","B","B"],
                        "score":-7,
                        "trend":"Sensing"}}},
            "FAMILY_ADAPTABILITY_TEST":{
                "MALE":{
                    "score":{
                        "Original Family":{
                            "Closeness":10,"Elasticity":10},
                        "Ideal Relationship":{
                            "Closeness":10,"Elasticity":10}},
                    "answers":{
                        "Original Family":{
                            "Closeness":[2,2,2,2,2,2,2,2,2,2],
                            "Elasticity":[2,2,2,2,2,2,2,2,2,2]},
                        "Ideal Relationship":{
                            "Closeness":[2,2,2,2,2,2,2,2,2,2],
                            "Elasticity":[2,2,2,2,2,2,2,2,2,2]}
                    }
                }
            },
            "LIFE_PRESSURE_ANALYSIS":{
                "MALE":{
                    "score":20,
                    "answers":[2,2,2,2,2,2,2,2,2,2]}
            }
        },
        "DEPENDENT_TESTS":{}
    };
    let EXPECTED_REPORT = {
        "双方独立测试":{
            "MBTI":{
                "男方":{
                    "EvI":{
                        "答案":["B","B","B","B","B","B","B"],
                        "得分":-7,
                        "倾向":"Introversion"},
                    "FvT":{
                        "答案":["B","B","B","B","B","B","B"],
                        "得分":-7,
                        "倾向":"Thinking"},
                    "JvP":{
                        "答案":["B","B","B","B","B","B","B"],
                        "得分":-7,
                        "倾向":"Perceiving"},
                    "NvS":{
                        "答案":["B","B","B","B","B","B","B"],
                        "得分":-7,
                        "倾向":"Sensing"}}},
            "家庭适应性测试":{
                "MALE":{
                    "得分":{
                        "原生家庭":{
                            "答案相似性":10,
                            "相互包容性":10},
                        "理想关系":{
                            "答案相似性":10,
                            "相互包容性":10}},
                    "答案":{
                        "原生家庭":{
                            "答案相似性":[2,2,2,2,2,2,2,2,2,2],
                            "相互包容性":[2,2,2,2,2,2,2,2,2,2]},
                        "理想关系":{
                            "答案相似性":[2,2,2,2,2,2,2,2,2,2],
                            "相互包容性":[2,2,2,2,2,2,2,2,2,2]}
                    }
                }
            },
            "生活压力分析":{
                "男方":{
                    "得分":20,
                    "答案":[2,2,2,2,2,2,2,2,2,2]}
            }
        },
        "双方关联测试":{}
    };

    let actual_result = _sut.translate(GIVEN_REPORT);

    expect(actual_result).toEqual(EXPECTED_REPORT);
  })
  afterEach(()=>{
    jest.restoreAllMocks()
  })
})