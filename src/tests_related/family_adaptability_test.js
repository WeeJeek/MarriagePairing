import FamilyAdaptabilitySubCategories from "../../enums/FamilyAdaptabilitySubCategories"

var FAMILY_ADAPTABILITY_TEST = {
  "title": "家庭适应力和向心力的评分表",
  "rule": "1=几乎没有；2=偶尔；3=有时；4=经常；5=一向如此",
  "description": "指示：请将下列的号码填入以下的两套问题之中：",
  "test_subset": [
    {
      "category": FamilyAdaptabilitySubCategories.FamilyCommunication,
      "questions": [{
        "ID": 1,
        "description": "我的家人会彼此寻求帮助"
      }, {
        "ID": 2,
        "description": "我家在解决问题的时候孩子的建议会受到采纳"
      },{
        "ID": 3,
        "description": "我家人之间认同彼此的朋友"
      },{
        "ID": 4,
        "description": "我作孩子时在被管教的过程中有发言权"
      },{
        "ID": 5,
        "description": "我们家喜欢与家人一同作事"
      },{
        "ID": 6,
        "description": "在我们家，每个人都可以表现得你当家人"
      },{
        "ID": 7,
        "description": "我家人间的关系比外人来得亲密"
      },{
        "ID": 8,
        "description": "我家在分配家事上会改变方式"
      },{
        "ID": 9,
        "description": "我们家人在闲暇时，总喜欢聚在一起"
      },{
        "ID": 10,
        "description": "我的父母会与孩子一同讨论处罚的方式"
      },{
        "ID": 11,
        "description": "我的家人觉得彼此的关系很亲密"
      },{
        "ID": 12,
        "description": "在我们家，孩子可以自行作决定"
      },{
        "ID": 13,
        "description": "在我们家，当家里有活动时，所有的成员都会出席"
      },{
        "ID": 14,
        "description": "我家的家规会作出调整"
      },{
        "ID": 15,
        "description": "我们家会一起讨论事情要怎么做"
      },{
        "ID": 16,
        "description": "我们家会针对不同的成员，而更改家中成员的义务"
      },{
        "ID": 17,
        "description": "在我家中成员在作决定时，会征询其他家人的意见"
      },{
        "ID": 18,
        "description": "在我们家很难找出谁是作主的人"
      },{
        "ID": 19,
        "description": "对我们家来说，家人聚会一起非常重要"
      },{
        "ID": 20,
        "description": "在我们家很难区别出谁来做家事"
      }]
    },
    {
      "category": FamilyAdaptabilitySubCategories.FamilyExpectation,
      "questions": [
        {
            "ID": 21,
            "description": "我希望家人之间应该彼此寻求帮助"
        },
        {
            "ID": 22,
            "description": "在解决问题的时候，我希望孩子的建议应该受到采纳"
        },
        {
            "ID": 23,
            "description": "我希望家人应该认同彼此的朋友"
        },
        {
            "ID": 24,
            "description": "我希望孩子应该在被管教的过程中有发言权"
        },
        {
            "ID": 25,
            "description": "我喜欢与家人一同作事"
        },
        {
            "ID": 26,
            "description": "我希望在我家，每个人应该可以表现得你当家人"
        },
        {
            "ID": 27,
            "description": "我希望家人间的关系应该比外人来得亲密"
        },
        {
            "ID": 28,
            "description": "我希望我家在分配家事上应该改变方式"
        },
        {
            "ID": 29,
            "description": "我希望家人在闲暇时，喜欢聚在一起"
        },
        {
            "ID": 30,
            "description": "我希望父母会与孩子应该一同讨论处罚的方式"
        },
        {
            "ID": 31,
            "description": "我希望家人应该觉得彼此的关系很亲密"
        },
        {
            "ID": 32,
            "description": "我希望在我们家，孩子应该可以自行作决定"
        },
        {
            "ID": 33,
            "description": "当家里有活动时，我希望所有的成员应该都会出席"
        },
        {
            "ID": 34,
            "description": "我希望家规应该会适当作些调整"
        },
        {
            "ID": 35,
            "description": "我希望家人间很容易一起讨论事情要怎么做"
        },
        {
            "ID": 36,
            "description": "我们希望针对不同的家庭成员，更改家中成员的义务"
        },
        {
            "ID": 37,
            "description": "我希望家庭成员在作决定时，应该征询其他家人的意见"
        },
        {
            "ID": 38,
            "description": "我希望在我们家应该知道谁是作主的人"
        },
        {
            "ID": 39,
            "description": "对我来说家人聚会一起应该是很重要的"
        },
        {
            "ID": 40,
            "description": "我希望在我们家可以区别出谁来做家事  "
        }]
    }]

  }

export {FAMILY_ADAPTABILITY_TEST}