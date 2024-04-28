import CHOICES from "../../enums/ChoiceCategories"

var PERSONAL_INFO = {
    "title": "个人基本信息",
    "rule": "",
    "description": "",
    "test_subset":[
      {
          "category": "个人基本信息",
          "questions": 
          [{
                  "ID": 1,
                  "description": "性别",
                  "choices":[
                      {"index": CHOICES.A,"description": "男"},
                      {"index": CHOICES.B,"description": "女"}
                  ]
          },{
                  "ID": 2,
                  "description": "年龄",
                  "choices":[
                    {"index": CHOICES.A,"description": "20-25"},
                    {"index": CHOICES.B,"description": "26-30"},
                    {"index": CHOICES.C,"description": "31-35"},
                    {"index": CHOICES.D,"description": "36-40"},
                    {"index": CHOICES.E,"description": "40-50"},
                    {"index": CHOICES.F,"description": "50-60"},
                    {"index": CHOICES.G,"description": "60以上"}
                ]
          },{
              "ID": 3,
              "description": "兄弟姐妹排行",
              "choices":[
                {"index": CHOICES.A,"description": "一"},
                {"index": CHOICES.B,"description": "二"},
                {"index": CHOICES.C,"description": "三"},
                {"index": CHOICES.D,"description": "四"},
                {"index": CHOICES.E,"description": "五"}
            ]
          },{
              "ID": 4,
              "description": "兄弟姐妹几个",
              "choices":[
                {"index": CHOICES.A,"description": "一"},
                {"index": CHOICES.B,"description": "二"},
                {"index": CHOICES.C,"description": "三"},
                {"index": CHOICES.D,"description": "四"},
                {"index": CHOICES.E,"description": "五"}
            ]
          },{
              "ID": 5,
              "description": "认识多久",
              "choices":[
                {"index": CHOICES.A,"description": "1年以内"},
                {"index": CHOICES.B,"description": "1-3年"},
                {"index": CHOICES.C,"description": "4-9年"},
                {"index": CHOICES.D,"description": "10年及以上"}
            ]
          },{       
              "ID": 6,
              "description": "是否订婚"
          },{
              "ID": 7,
              "description": "朋友对婚事的态度",
              "choices":[
                {"index": CHOICES.A,"description": "是"},
                {"index": CHOICES.B,"description": "否"}
            ]
          },{
              "ID": 8,
              "description": "家人对婚事的态度",
              "choices":[
                {"index": CHOICES.A,"description": "非常赞同"},
                {"index": CHOICES.B,"description": "大多赞同"},
                {"index": CHOICES.C,"description": "少数赞同"},
                {"index": CHOICES.D,"description": "没有赞同"}
            ]
          },{
              "ID": 9,
              "description": "你有几个儿女",
              "choices":[
                {"index": CHOICES.A,"description": "无"},
                {"index": CHOICES.B,"description": "一"},
                {"index": CHOICES.C,"description": "二"},
                {"index": CHOICES.D,"description": "三"},
                {"index": CHOICES.E,"description": "四以上"}
            ]
          },{
              "ID": 10,
              "description": "你想要几个小孩",
              "choices":[
                {"index": CHOICES.A,"description": "不要"},
                {"index": CHOICES.B,"description": "一"},
                {"index": CHOICES.C,"description": "二"},
                {"index": CHOICES.D,"description": "三"},
                {"index": CHOICES.E,"description": "四以上"}
            ]
          },{
            "ID": 11,
            "description": "你打算何时生小孩",
            "choices":[
              {"index": CHOICES.A,"description": "没有打算"},
              {"index": CHOICES.B,"description": "一年内"},
              {"index": CHOICES.C,"description": "两年内"},
              {"index": CHOICES.D,"description": "三年内"},
              {"index": CHOICES.E,"description": "四年以上"}
          ]
        },{
            "ID": 12,
            "description": "女方是否已怀孕",
            "choices":[
              {"index": CHOICES.A,"description": "没有"},
              {"index": CHOICES.B,"description": "已怀孕"}
          ]
        },{
            "ID": 13,
            "description": "双方分手次数",
            "choices":[
              {"index": CHOICES.A,"description": "从未"},
              {"index": CHOICES.B,"description": "一次"},
              {"index": CHOICES.C,"description": "两次"},
              {"index": CHOICES.D,"description": "三次"},
              {"index": CHOICES.E,"description": "四次及以上"}
          ]
        },{
            "ID": 14,
            "description": "是否有已婚经历",
            "choices":[
              {"index": CHOICES.A,"description": "从未"},
              {"index": CHOICES.B,"description": "一次"},
              {"index": CHOICES.C,"description": "两次"},
              {"index": CHOICES.D,"description": "三次及以上"}
          ]
        },{
            "ID": 15,
            "description": "父母婚姻情况",
            "choices":[
              {"index": CHOICES.A,"description": "在婚姻中"},
              {"index": CHOICES.B,"description": "已离婚"},
              {"index": CHOICES.C,"description": "父亲已离世"},
              {"index": CHOICES.D,"description": "母亲已离世"}
          ]
        },{
            "ID": 16,
            "description": "你被谁养大",
            "choices":[
              {"index": CHOICES.A,"description": "父母一起养大"},
              {"index": CHOICES.B,"description": "祖父母或外祖父母"},
              {"index": CHOICES.C,"description": "与养父母长大"},
              {"index": CHOICES.D,"description": "其他"}
          ]
        }
    ]}]}
  
  export {PERSONAL_INFO}