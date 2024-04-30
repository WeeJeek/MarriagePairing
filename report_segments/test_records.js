import TestStatus from "../enums/TestStatus"
import HappyMarriageCategories from "../enums/HappyMarriageCategories"
import FamilyAdaptabilityCategories from "../enums/FamilyAdaptabilityCategories"
import MBTICategories from "../enums/MBTICategories"
import TestCategories from "../enums/TestCategories"
import LifePressureAnalysisCategories from "../enums/LifePressureAnalysisCategories"
import PersonalInfoCategories from "../enums/PersonalInfoCategories.js"
import SCORES from "../enums/Scores"

var test_records = {
    [TestCategories.PERSONAL]:{
        status: TestStatus.UNTOUCHED,
        result: {
            [PersonalInfoCategories.PERSONAL_INFO]:{
                answers:[]
            }
        }
    },
    [TestCategories.MBTI]:{
        status: TestStatus.UNTOUCHED,
        result: {
            [MBTICategories.EvI]: {
                answers:[]
            },
            [MBTICategories.NvS]: {
                answers:[]
            },
            [MBTICategories.FvT]: {
                answers:[]
            },
            [MBTICategories.JvP]: {
                answers:[]
            }
        }
      },
      [TestCategories.FAMILY_ADAPTABILITY_TEST]:{
        status: TestStatus.UNTOUCHED,
        result:{
            [FamilyAdaptabilityCategories.FamilySituation]:{
                answers:[]
            },
            [FamilyAdaptabilityCategories.FamilyWish]:{
                answers:[]
            }
        }
      },
      [TestCategories.LIFE_PRESSURE_ANALYSIS]:{
        status: TestStatus.UNTOUCHED,
        result: {
            [LifePressureAnalysisCategories.LifePressure]:{
                answers:[]
            }
        }
      },
      [TestCategories.HAPPY_MARRIAGE_ASSESSMENT]:{
        status: TestStatus.UNTOUCHED,
        result:{
            [HappyMarriageCategories.CommQuality]: {
                score: 0,
                answers:[]
            },
            [HappyMarriageCategories.ConflitionHandling]:{
                score: 0,
                answers:[]
            },
            [HappyMarriageCategories.PersonalityHabits]:{
                score: 0,
                answers:[]
            },
            [HappyMarriageCategories.FinancialManagement]:{
                score:0,
                answers:[]
            },
            [HappyMarriageCategories.EntertainmentLife]:{
                score:0,
                answers:[]
            },
            [HappyMarriageCategories.SexualAwareness]:{
                score:0,
                answers:[]
            },
            [HappyMarriageCategories.ReletivesFriends]:{
                score:0,
                answers:[]
            },
            [HappyMarriageCategories.CoupleRole]:{
                score:0,
                answers:[]
            },
            [HappyMarriageCategories.MarriageExpectation]:{
                score:0,
                answers:[]
            },
            [HappyMarriageCategories.EducationExpectation]:{
                score:0,
                answers:[]
            }
        }
      }
  };

export {test_records}