import TestStatus from "../../enums/TestStatus"

var test_records = {
  "user_info":{
    "name": "dasd",
    "wx_id": "",
    "account_id": "",
    "gender": ""
  },
  "report_info":{
    "created_date":"",
    "last_modified":""
  },
  "test_progress":{
    "MBTI":{
      "status": TestStatus.UNTOUCHED,
      "answers":[]
    },
    "familiy_adaptability_test":{
      "status": TestStatus.UNTOUCHED,
      "answers":[]
    },
    "life_pressure_analysis":{
      "status": TestStatus.UNTOUCHED,
      "answers":[]
    },
    "happy_marriage_assessment":{
      "status": TestStatus.UNTOUCHED,
      "answers":[]
    }
  }
}

export {test_records}