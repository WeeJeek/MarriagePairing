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
    "FAMIL_ADAPTABILITY_TEST":{
      "status": TestStatus.UNTOUCHED,
      "answers":[]
    },
    "LIFE_PRESSURE_ANALYSIS":{
      "status": TestStatus.UNTOUCHED,
      "answers":[]
    },
    "HAPPY_MARRIAGE_ASSESSMENT":{
      "status": TestStatus.UNTOUCHED,
      "answers":[]
    }
  }
}

export {test_records}