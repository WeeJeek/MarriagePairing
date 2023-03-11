import TestStatus from "../../utils/TestStatus"

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
    "mbti":{
      "status": TestStatus.UNTOUCHED,
      "answers":[
        /*{
          "index":1,
          "answer": ""
        }*/]
    },
    "familiy_adaptability_test":{
      "status": TestStatus.UNTOUCHED,
      "answers":[]
    },
    "life_pressure_analysis":{
      "status": TestStatus.UNTOUCHED,
      "answers":[
        {
          "index":1,
          "answer": ""
        }]
    },
    "happy_marriage_assessment":{
      "status": TestStatus.UNTOUCHED,
      "answers":[]
    }
  }
}

export {test_records}