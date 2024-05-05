import HappyMarriageCategories from "../../enums/HappyMarriageCategories"

var HAPPY_MARRIAGE_ASSESSMENT = {
  "title": "幸福婚姻评测",
  "rule": "这是幸福婚姻评测的规则",
  "description": "这是幸福婚姻评测的描述",
  "test_subset": [{
    "category": HappyMarriageCategories.CommQuality,
    "questions": [
    {
      "ID": 1,
      "description": "伴侣常常不明白我向他表达的感受",
      "positive": false
    }, 
    {
        "ID": 2,
        "description": "伴侣会专注聆听我的倾述",
        "positive": true
    },
    {
        "ID": 3,
        "description": "我与伴侣之间的谈话，让我感到舒畅",
        "positive": true
    },
    {
        "ID": 4,
        "description": "我向伴侣提出要求，有时感到为难",
        "positive": false
    },
    {
        "ID": 5,
        "description": "我感觉伴侣在有些事情上对我不诚实",
        "positive": false
    },
    {
        "ID": 6,
        "description": "我们不想谈有些不太好解决的问题",
        "positive": false
    },
    {
        "ID": 7,
        "description": "伴侣对我说过一些伤我自尊的话",
        "positive": false
    },
    {
        "ID": 8,
        "description": "向伴侣表达真实感受，对来说没有压力",
        "positive": true
    },
    {
        "ID": 9,
        "description": "当我有负面情绪，有时不想与伴侣分享",
        "positive": false
    },
    {
        "ID": 10,
        "description": "伴侣能更多些与我分享他(她)的感受最好",
        "positive": false
    }]
  },
  {
    "category": HappyMarriageCategories.ConflitionHandling,
    "questions": [
        {
            "ID": 1,
            "description": "我会毫无压力地向伴侣表达不同的感受与想法",
            "positive": true
          }, 
          {
              "ID": 2,
              "description": "有时我们会因小事争吵，而不断升级到严重伤害感情",
              "positive": false
          },
          {
              "ID": 3,
              "description": "有时我感觉我们的差异没有改善，还是那么大",
              "positive": false
          },
          {
              "ID": 4,
              "description": "伴侣能听懂我所表达问题的观点与想法",
              "positive": true
          },
          {
              "ID": 5,
              "description": "伴侣和我就如何化解矛盾存不同的看法",
              "positive": false
          },
          {
              "ID": 6,
              "description": "伴侣没有认真面对及处理我们之间某些不合的意见",
              "positive": false
          },
          {
              "ID": 7,
              "description": "不想在争执时伤害伴侣，我通常选择忍气吞声",
              "positive": false
          },
          {
              "ID": 8,
              "description": "一旦发生争吵，我常以最快速度投降让步",
              "positive": false
          },
          {
              "ID": 9,
              "description": "在争执中，最后我总能意识到是自己的错造成的",
              "positive": false
          },
          {
              "ID": 10,
              "description": "夫妻过日子能不吵架，尽量避免不要吵架",
              "positive": false
          }
      ]
  },
  {
    "category": HappyMarriageCategories.PersonalityHabits,
    "questions": [
        {
            "ID": 1,
            "description": "伴侣的有些生活习惯让我难以接受",
            "positive": false
          }, 
          {
              "ID": 2,
              "description": "我希望伴侣对我某些意见能少一点批评",
              "positive": false
          },
          {
              "ID": 3,
              "description": "伴侣在有些事上太固执了",
              "positive": false
          },
          {
              "ID": 4,
              "description": "伴侣对我的控制欲有时会很强",
              "positive": false
          },
          {
              "ID": 5,
              "description": "伴侣发脾气的时候不太理智，我有些担心",
              "positive": false
          },
          {
              "ID": 6,
              "description": "伴侣的有些行为会让我生气或难堪",
              "positive": false
          },
          {
              "ID": 7,
              "description": "伴侣不快乐或沉默退缩了，我就会担心",
              "positive": false
          },
          {
              "ID": 8,
              "description": "伴侣有时的情绪变化太大，让我难以驾驭",
              "positive": false
          },
          {
              "ID": 9,
              "description": "我希望伴侣不要求我改掉我做事的风格",
              "positive": false
          },
          {
              "ID": 10,
              "description": "我希望伴侣做事能更可靠，给我踏实感",
              "positive": false
          }
      ]
  },
  {
    "category": HappyMarriageCategories.FinancialManagement,
    "questions": [
        {
            "ID": 1,
            "description": "我们已经为婚后的经济作过计划",
            "positive": true
          }, 
          {
              "ID": 2,
              "description": "我担心伴侣比我更会花钱",
              "positive": false
          },
          {
              "ID": 3,
              "description": "我有点为家庭债务、费用或信用卡透支担心",
              "positive": false
          },
          {
              "ID": 4,
              "description": "我担心我们目前的收入太低了",
              "positive": false
          },
          {
              "ID": 5,
              "description": "我们为每个月的生活开支作了明确的计划",
              "positive": true
          },
          {
              "ID": 6,
              "description": "我们还没有考虑好以后家庭如何使用金钱",
              "positive": false
          },
          {
              "ID": 7,
              "description": "有时我感觉伴侣的消费应该更理智些",
              "positive": false
          },
          {
              "ID": 8,
              "description": "我们已经统一好家庭的财务管理",
              "positive": true
          },
          {
              "ID": 9,
              "description": "我们打算婚后的收入各自管理",
              "positive": false
          },
          {
              "ID": 10,
              "description": "我们为家庭应该积蓄钱的目标已达成了共识",
              "positive": true
          }
      ]
  },
  {
    "category": HappyMarriageCategories.EntertainmentLife,
    "questions": [
        {
            "ID": 1,
            "description": "我们有很多相同的兴趣爱好和娱乐活动",
            "positive": true
          }, 
          {
              "ID": 2,
              "description": "伴侣自己喜欢的娱乐（游戏、电视、运动）占我们相处时的大部份时间",
              "positive": false
          },
          {
              "ID": 3,
              "description": "我会介意伴侣有过多的兴趣或娱乐活动",
              "positive": false
          },
          {
              "ID": 4,
              "description": "伴侣与我对“浪漫的生活”有不同的理解",
              "positive": false
          },
          {
              "ID": 5,
              "description": "我不想伴侣常邀我参与他喜欢的娱乐",
              "positive": true
          },
          {
              "ID": 6,
              "description": "我经常会想起曾与伴侣一起做过的事",
              "positive": false
          },
          {
              "ID": 7,
              "description": "我们比较容易与伴侣的朋友建立友谊",
              "positive": false
          },
          {
              "ID": 8,
              "description": "我希望伴侣能更多时间与精力参与我的兴趣爱好",
              "positive": true
          },
          {
              "ID": 9,
              "description": "我希望伴侣的家庭、工作、娱乐的时间能更平衡",
              "positive": false
          },
          {
              "ID": 10,
              "description": "我希望能与伴侣更多做些二人都喜欢的娱乐活动",
              "positive": true
          }
      ]
  },
  {
    "category": HappyMarriageCategories.SexualAwareness,
    "questions": [
        {
            "ID": 1,
            "description": "伴侣喜欢上色情网站让我感到担心",
            "positive": false
          }, 
          {
              "ID": 2,
              "description": "伴侣有时会拒绝或利用我对他的亲热",
              "positive": false
          },
          {
              "ID": 3,
              "description": "伴侣给予我的爱让我特别幸福",
              "positive": true
          },
          {
              "ID": 4,
              "description": "我们已讨论过婚前性行为的尺度且达成共识",
              "positive": true
          },
          {
              "ID": 5,
              "description": "我不敢与伴侣太过亲热，他以为这是性暗示",
              "positive": false
          },
          {
              "ID": 6,
              "description": "我担心伴侣的性欲过强或不强，与我不和谐",
              "positive": false
          },
          {
              "ID": 7,
              "description": "我有时会担心伴侣会出轨",
              "positive": false
          },
          {
              "ID": 8,
              "description": "我们能坦诚的谈论对性生活的期待",
              "positive": true
          },
          {
              "ID": 9,
              "description": "我们已讨论过避孕方式或生育计划，且达成共识",
              "positive": true
          },
          {
              "ID": 10,
              "description": "我能很轻松自在和伴侣谈论性爱",
              "positive": true
          }
      ]
  },
  {
    "category": HappyMarriageCategories.ReletivesFriends,
    "questions": [
        {
            "ID": 1,
            "description": "伴侣与其家人太过密切，受家人影响太大",
            "positive": false
          }, 
          {
              "ID": 2,
              "description": "伴侣与我朋友的关系都处理的很好",
              "positive": true
          },
          {
              "ID": 3,
              "description": "我的家人很相信我，也尊重我的个人选择",
              "positive": true
          },
          {
              "ID": 4,
              "description": "我不看好伴侣其中一二位朋友，希望能与他们保持距离",
              "positive": false
          },
          {
              "ID": 5,
              "description": "我很期待与伴侣的亲戚来往",
              "positive": true
          },
          {
              "ID": 6,
              "description": "我担心我或伴侣的家人会给我们的婚姻造成压力",
              "positive": false
          },
          {
              "ID": 7,
              "description": "我担心家人经济援助我们，会造成我们的某些困扰",
              "positive": false
          },
          {
              "ID": 8,
              "description": "我会担心伴侣去参加同学会或跟朋友同事的聚会",
              "positive": false
          },
          {
              "ID": 9,
              "description": "有时伴侣的朋友或家人会对我们的关系指手划脚",
              "positive": false
          },
          {
              "ID": 10,
              "description": "其实有部份亲友不太看好我们的婚事",
              "positive": false
          }
      ]
  },
  {
    "category": HappyMarriageCategories.CoupleRole,
    "questions": [
        {
            "ID": 1,
            "description": "事业对夫妻双方而言，可以同样重要",
            "positive": true
          }, 
          {
              "ID": 2,
              "description": "我期待我的伴侣在作重要的决定前会跟我商量",
              "positive": true
          },
          {
              "ID": 3,
              "description": "夫妻都必须愿意承担已谈好的相应的家庭责任",
              "positive": true
          },
          {
              "ID": 4,
              "description": "我们期待不以传统的角色，以个人的能力专长分做家务事",
              "positive": true
          },
          {
              "ID": 5,
              "description": "我很满意我们在夫妻责任上能保持弹性",
              "positive": true
          },
          {
              "ID": 6,
              "description": "我主张男女平等，双方应共享家庭领导权，一起作决定",
              "positive": true
          },
          {
              "ID": 7,
              "description": "如果夫妻都有工作，双方应当分担等量的家务事",
              "positive": true
          },
          {
              "ID": 8,
              "description": "我做的家事超过份内的太多，我会感到委屈",
              "positive": false
          },
          {
              "ID": 9,
              "description": "夫妻若能保持平等关系，家庭生活会更幸福",
              "positive": true
          },
          {
              "ID": 10,
              "description": "我认为夫妻中的一方当家作主，是婚姻最好的状态",
              "positive": false
          }
      ]
  },
  {
    "category": HappyMarriageCategories.MarriageExpectation,
    "questions": [
        {
            "ID": 1,
            "description": "伴侣与我之间的共同点多于不同点",
            "positive": false
          }, 
          {
              "ID": 2,
              "description": "只要我们有更多相处的时间，关系自然就会变得更好",
              "positive": false
          },
          {
              "ID": 3,
              "description": "我在婚后仍然需要在配偶以外的朋友",
              "positive": true
          },
          {
              "ID": 4,
              "description": "伴侣与我对婚姻的蓝图和认识是一致的",
              "positive": false
          },
          {
              "ID": 5,
              "description": "在婚前所遇到的大部分困难，我相信在婚后都会慢慢消失",
              "positive": false
          },
          {
              "ID": 6,
              "description": "我们之间的浪漫激情会随时间逐渐消退",
              "positive": true
          },
          {
              "ID": 7,
              "description": "只要我们结婚，我们的婚姻不会出现什么严重的问题",
              "positive": false
          },
          {
              "ID": 8,
              "description": "伴侣会在婚姻中让我更加优秀",
              "positive": false
          },
          {
              "ID": 9,
              "description": "有些时候我感到我们的婚姻也许会令人感到失望气馁",
              "positive": true
          },
          {
              "ID": 10,
              "description": "没有任何事会让我质疑我对伴侣的爱",
              "positive": false
          }
      ]
  },
  {
    "category": HappyMarriageCategories.EducationExpectation,
    "questions": [
        {
            "ID": 1,
            "description": "伴侣很喜欢小孩子，将来也会是个好父亲",
            "positive": true
          }, 
          {
              "ID": 2,
              "description": "我认为我们之间的问题，等有了孩子以后将会得到解决",
              "positive": false
          },
          {
              "ID": 3,
              "description": "我认为我们的生活方式会因养育孩子而改变",
              "positive": false
          },
          {
              "ID": 4,
              "description": "伴侣和我给子女何种教育已达成一致性",
              "positive": true
          },
          {
              "ID": 5,
              "description": "我担心我们双方的原生家庭差异大会影响孩子教育",
              "positive": false
          },
          {
              "ID": 6,
              "description": "我觉得正确的方式是父母带孩子，再艰难也不能让长辈带",
              "positive": true
          },
          {
              "ID": 7,
              "description": "我们计划过生几个小孩以及什么时候生的问题",
              "positive": true
          },
          {
              "ID": 8,
              "description": "我们谈论过未来对孩子的管教原则",
              "positive": true
          },
          {
              "ID": 9,
              "description": "我们讨论过如何担负养育子女的责任",
              "positive": true
          },
          {
              "ID": 10,
              "description": "我向伴侣分享过关于养育子女个人心得",
              "positive": true
          }
      ]
  }
]
  }

export {HAPPY_MARRIAGE_ASSESSMENT};