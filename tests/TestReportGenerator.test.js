import ITestResultCalculationStrategy from "../classes/ITestResultCalculationStrategy";
import TestReportGenerator from "../classes/TestReportGenerator";
import TestCategories from "../enums/TestCategories"
import CHOICES from "../enums/ChoiceCategories"
import SCORES from "../enums/Scores"
import HappyMarriageCategories from "../enums/HappyMarriageCategories"
import MBTIFeatureCategories from "../enums/MBTIFeatureCategories"


describe("unit test testing for Test Result Calculator class", () =>{
  let _sut;

  beforeEach(() => {
    _sut = new TestReportGenerator();
  })

  it("The test report generator should get gerenated result as expected", ()=>{
    let PERSONAL_INFO_MALE = {};
    let PERSONAL_INFO_FEMALE = {};

    let MBTI_INPUT_MALE = {//EvI, FvT, JvP, NvS
        "EvI": {
          answers: [CHOICES.B, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.B, CHOICES.A, CHOICES.B]
        },
        "NvS": {
          answers: [CHOICES.A, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B] //BBBABBB
        },
        "FvT": {
          answers: [CHOICES.B, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.A]
        },
        "JvP": {
          answers: [CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.B, CHOICES.B] // BBA BBBA
        }
      };
    let MBTI_RESULT_MALE = {//EvI, FvT, JvP, NvS
    "EvI": {
        "得分": 1,
        "倾向": MBTIFeatureCategories.E,
        "具体选项": [CHOICES.B, CHOICES.A, CHOICES.A, CHOICES.A, CHOICES.B, CHOICES.A, CHOICES.B]
    },
    "NvS": {
        "得分": -3,//x 1
        "倾向": MBTIFeatureCategories.S,
        "具体选项": [CHOICES.A, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B] //BBBABBB
    },
    "FvT": {
        "得分": -3,//x 1
        "倾向": MBTIFeatureCategories.T,
        "具体选项": [CHOICES.B, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.A]
    },
    "JvP": {
        "得分": -5,//x 1
        "倾向": MBTIFeatureCategories.P,
        "具体选项": [CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.A, CHOICES.B, CHOICES.B, CHOICES.B] // BBA BBBA
    }
    };
    let MBTI_INPUT_FEMALE = {
        "EvI": {
          answers:[CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B]
        },
        "NvS": {
          answers:[CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B]
        },
        "FvT": {
          answers:[CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B]
        },
        "JvP": {
          answers:[CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B]
        }
    };
    let MBTI_RESULT_FEMALE = {
        "EvI": {
          score: -7,
          trend: MBTIFeatureCategories.I,
          answers:[CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B]
        },
        "NvS": {
          score: -7,
          trend: MBTIFeatureCategories.S,
          answers:[CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B]
        },
        "FvT": {
          score: -7,
          trend: MBTIFeatureCategories.T,
          answers:[CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B]
        },
        "JvP": {
          score: -7,
          trend: MBTIFeatureCategories.P,
          answers:[CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B, CHOICES.B]
        }
    };

    let LIFE_PRESSURE_INPUT_MALE = [
        SCORES.TWO, SCORES.ONE, SCORES.THREE, SCORES.FOUR, SCORES.FIVE, 
        SCORES.FIVE, SCORES.FOUR, SCORES.FOUR, SCORES.ONE, SCORES.ONE
    ];
    let LIFE_PRESSURE_RESULT_MALE = {
        "得分": 30,
        "具体选项": [
            SCORES.TWO, SCORES.ONE, SCORES.THREE, SCORES.FOUR, SCORES.FIVE, 
            SCORES.FIVE, SCORES.FOUR, SCORES.FOUR, SCORES.ONE, SCORES.ONE
        ]
    };
    let LIFE_PRESSURE_INPUT_FEMALE = [
        SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, 
        SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO
    ];
    let LIFE_PRESSURE_RESULT_FEMALE = {
        "得分": 20,
        "具体选项": [
            SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, 
            SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO]
    };

    let FAMILY_ADAPTABILITY_INPUT_MALE = [
        SCORES.TWO, SCORES.ONE, SCORES.THREE, SCORES.FOUR, SCORES.FIVE, 
        SCORES.FIVE, SCORES.FOUR, SCORES.FOUR, SCORES.ONE, SCORES.ONE, 
        SCORES.TWO, SCORES.ONE, SCORES.THREE, SCORES.FOUR, SCORES.FIVE, 
        SCORES.FIVE, SCORES.FOUR, SCORES.FOUR, SCORES.ONE, SCORES.FIVE, 
        SCORES.TWO, SCORES.ONE, SCORES.THREE, SCORES.FOUR, SCORES.FIVE, 
        SCORES.FIVE, SCORES.FOUR, SCORES.FOUR, SCORES.ONE, SCORES.ONE, 
        SCORES.TWO, SCORES.ONE, SCORES.THREE, SCORES.FOUR, SCORES.FIVE, 
        SCORES.FIVE, SCORES.FOUR, SCORES.FOUR, SCORES.ONE, SCORES.FIVE
    ];
    let FAMILY_ADAPTABILITY_RESULT_MALE = {
        "得分": {
            "原生家庭": {
            "相似性":15,
            "差异性":17//Elasticity
        },
        "Ideal Relationship": {
            "相似性":15,
            "差异性":17
        }
    },
    "得分": {
        "Original Family": {
            "相似性":[
                SCORES.TWO, SCORES.THREE, SCORES.FIVE, SCORES.FOUR, SCORES.ONE, 
                SCORES.TWO, SCORES.THREE, SCORES.FIVE, SCORES.FOUR, SCORES.ONE],
            "差异性":[
                SCORES.ONE, SCORES.FOUR, SCORES.FIVE, SCORES.FOUR, SCORES.ONE, 
                SCORES.ONE, SCORES.FOUR, SCORES.FIVE, SCORES.FOUR, SCORES.FIVE]
        },
        "Ideal Relationship": {
            "相似性":[
                SCORES.TWO, SCORES.THREE, SCORES.FIVE, SCORES.FOUR, SCORES.ONE, 
                SCORES.TWO, SCORES.THREE, SCORES.FIVE, SCORES.FOUR, SCORES.ONE],
            "差异性":[
                SCORES.ONE, SCORES.FOUR, SCORES.FIVE, SCORES.FOUR, SCORES.ONE, 
                SCORES.ONE, SCORES.FOUR, SCORES.FIVE, SCORES.FOUR, SCORES.FIVE]
        }
    }};
    let FAMILY_ADAPTABILITY_INPUT_FEMALE = [
        SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, 
        SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO,
        SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, 
        SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO,
        SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, 
        SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO,
        SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, 
        SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO
    ];
    let FAMILY_ADAPTABILITY_RESULT_FEMALE = {
        "得分": {
            "原生家庭": {
                "答案相似性":10,
                "相互包容性":10
            },
            "理想关系": {
                "答案相似性":10,
                "相互包容性":10
            }
        },
        "具体选项": {
            "原生家庭": {
                "答案相似性":[
                    SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, 
                    SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO],
                "相互包容性":[
                    SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, 
                    SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO]
            },
            "理想关系": {
                "答案相似性":[
                    SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, 
                    SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO],
                "相互包容性":[
                    SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, 
                    SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO, SCORES.TWO]
            }
        }
    };

    const GIVEN_SUB_CATEGORY = HappyMarriageCategories.EntertainmentLife;
    const HAPPY_MARRIAGE_MALE_INPUT = [
        SCORES.FIVE, SCORES.ONE, SCORES.THREE, SCORES.THREE, SCORES.TWO,
        SCORES.ONE, SCORES.TWO, SCORES.FIVE, SCORES.ONE, SCORES.FOUR
    ];
    const HAPPY_MARRIAGE_FEMALE_INPUT = [
        SCORES.THREE, SCORES.TWO, SCORES.ONE, SCORES.ONE, SCORES.FIVE,
        SCORES.FOUR, SCORES.FOUR, SCORES.FIVE, SCORES.THREE, SCORES.TWO
    ];
    let HAPPY_MARRIAGE_INPUT = [
        {
            subcategory: GIVEN_SUB_CATEGORY,
            male_input: HAPPY_MARRIAGE_MALE_INPUT,
            female_input: HAPPY_MARRIAGE_FEMALE_INPUT
        }
    ];
    let HAPPY_MARRIAGE_RESULT = [
        {
            "subcategory": GIVEN_SUB_CATEGORY,
            "男方满意度": 98,//(5+5+3+3+4+1+2+1+5+2)/40
            "女方满意度": 90,//(3+4+5+5+1+4+4+1+3+4)/40
            "一致性": 60//1+1+1+1+0+0+0+1+1+0
        }
    ];

    let GIVEN_TEST_RECORD = {
        "INDEPENDENT_TESTS":{
            [TestCategories.PERSONAL]:{
                "MALE": PERSONAL_INFO_MALE,
                "FEMALE": PERSONAL_INFO_FEMALE
            },
            [TestCategories.MBTI]:{
                "MALE": MBTI_INPUT_MALE,
                "FEMALE": MBTI_INPUT_FEMALE
            },
            [TestCategories.FAMILY_ADAPTABILITY_TEST]:{
                "MALE": FAMILY_ADAPTABILITY_INPUT_MALE,
                "FEMALE": FAMILY_ADAPTABILITY_INPUT_FEMALE, 
            },
            [TestCategories.LIFE_PRESSURE_ANALYSIS]:{
                "MALE": LIFE_PRESSURE_INPUT_MALE,
                "FEMALE": LIFE_PRESSURE_INPUT_FEMALE
            }
        },
        "DEPENDENT_TESTS":{
            [TestCategories.HAPPY_MARRIAGE_ASSESSMENT]: HAPPY_MARRIAGE_INPUT
        }
    };

    let EXPECTED_TEST_RESULT = {
        "INDEPENDENT_TESTS":{
            [TestCategories.PERSONAL]:{
                "MALE": PERSONAL_INFO_MALE,
                "FEMALE": PERSONAL_INFO_FEMALE
            },
            [TestCategories.MBTI]:{
                "MALE": MBTI_RESULT_MALE,
                "FEMALE": MBTI_RESULT_FEMALE
            },
            [TestCategories.FAMILY_ADAPTABILITY_TEST]:{
                "MALE": FAMILY_ADAPTABILITY_RESULT_MALE,
                "FEMALE": FAMILY_ADAPTABILITY_RESULT_FEMALE, 
            },
            [TestCategories.LIFE_PRESSURE_ANALYSIS]:{
                "MALE": LIFE_PRESSURE_RESULT_MALE,
                "FEMALE": LIFE_PRESSURE_RESULT_FEMALE
            }
        },
        "DEPENDENT_TESTS":{
            [TestCategories.HAPPY_MARRIAGE_ASSESSMENT]: HAPPY_MARRIAGE_RESULT
        }
    };

    let result_test_result = _sut.generate_test_report(GIVEN_TEST_RECORD);

    expect(result_test_result).toEqual(EXPECTED_TEST_RESULT);
  })
  afterEach(()=>{
    jest.restoreAllMocks()
  })
})