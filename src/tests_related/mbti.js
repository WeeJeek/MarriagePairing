import CHOICES from "../../enums/ChoiceCategories"
import MBTICategories from "../../enums/MBTICategories"

var MBTI = {
    "title": "MBTI",
    "rule": "每一对中那些得分较高的字母代表你四种最强的偏好，当它们合并起来时，将决定你的性格典型。例如说，你也许是 (ENFP)，或是 (ISTJ)，或是个性典型十六类型中的任何一类，完全看那四个字母的组合。如果在你所偏好的字母上之得分是四，那表示这个偏好是中度的。得五分或六分表示渐强的偏好。而七分则代表非常强烈的偏好。",
    "description": "每7题为一部分，请找出你选择最多的那个字母，按顺序进行排列。每道题无需考虑很久。 ",
    "questions": 
      [
        {
          "ID": 1,
          "description": "你倾向从何处得到力量:",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.E,
                "description": "与人交流"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.I,
                "description": "自己的想法"
              }
            ]
        },
      {
          "ID": 2,
          "description": "当你参加一个社交聚会时，你会：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.E,
                "description": "在夜色很深时，一旦你开始投入，也许就是最晚离开的那一个"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.I,
                "description": "在夜晚刚开始的时候，我就疲倦了并且想回家"
              }
            ]
        }/*
        {
          "ID": 3,
          "description": "下列哪一件事听起来比较吸引你？",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.E,
                "description": "与情人到有很多人且社交活动频繁的地方。"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.I,
                "description": "待在家中与情人做一些特别的事情，例如说观赏一部有趣的录影带并享用你最喜欢的外卖食物。"
              }
            ]
        },
        {
          "ID": 4,
          "description": "在约会中，你通常：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.E,
                "description": "整体来说很健谈"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.I,
                "description": "较安静并保留，直到你觉得舒服。"
              }
            ]
        },
        {
          "ID": 5,
          "description": "过去，你遇见你大部分的异性朋友是： ",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.E,
                "description": "在宴会中、夜总会、工作上、休闲活动中、会议上或当朋友介绍我给他们的朋友时。"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.I,
                "description": "通过私人的方式，例如个人广告、录影约会，或是由亲密的朋友和家人介绍。 "
              }
            ]
        },
        {
          "ID": 6,
          "description": "你倾向拥有：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.E,
                "description": "很多认识的人和很亲密的朋友。"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.I,
                "description": "一些很亲密的朋友和一些认识的人。 "
              }
            ]
        },
        {
          "ID": 7,
          "description": "过去，你的朋友和同事倾向对你说：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.E,
                "description": "你难道不可以安静一会儿吗？"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.I,
                "description": "可以请你从你的世界中出来一下吗？ "
              }
            ]
        },
        {
          "ID": 8,
          "description": "你倾向通过以下哪种方式收集信息：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.N,
                "description": "你对有可能发生之事的想像和期望。"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.S,
                "description": "你对目前状况的实际认知。 "
              }
            ]
        },
        {
          "ID": 9,
          "description": "你倾向相信：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.N,
                "description": "你的直觉。"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.S,
                "description": "你直接的观察和现成的经验。 "
              }
            ]
        },
        {
          "ID": 10,
          "description": "当你置身于一段关系中时，你倾向相信：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.N,
                "description": "永远有进步的空间。"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.S,
                "description": "若它没有被破坏，不予修补。 "
              }
            ]
        },
        {
          "ID": 11,
          "description": "当你对一个约会觉得放心时，你偏向谈论：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.N,
                "description": "未来，关于改进或发明事物和生活的种种可能性。例如，你也许会谈论一个新的科学发明，或一个更好的方法来表达你的感受。"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.S,
                "description": "实际的、具体的、关于“此时此地”的事物。例如，你也许会谈论品酒的好方法，或你即将要参加的新奇旅程。 "
              }
            ]
        },
        {
          "ID": 12,
          "description": "你是这种人：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.N,
                "description": "喜欢先纵观全局。"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.S,
                "description": "喜欢先掌握细节。 "
              }
            ]
        },
        {
          "ID": 13,
          "description": "你是这类型的人",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.N,
                "description": "与其活在现实中，不如活在想像里。"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.S,
                "description": "与其活在想像里，不如活在现实中。 "
              }
            ]
        },
        {
          "ID": 14,
          "description": "你通常：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.N,
                "description": "偏向于去想像一大堆关于即将来临的约会的事情。"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.S,
                "description": "偏向于拘谨地想像即将来临的约会，只期待让它自然地发生。 "
              }
            ]
        },
        {
          "ID": 15,
          "description": "你倾向如此做决定：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.F,
                "description": "首先依你的心意，然后依你的逻辑。"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.T,
                "description": "首先依你的逻辑，然后依你的心意。 "
              }
            ]
        },
        {
          "ID": 16,
          "description": "你倾向比较能够察觉到：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.F,
                "description": "当人们需要情感上的支持时。"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.T,
                "description": "当人们不合逻辑时。 "
              }
            ]
        },
        {
          "ID": 17,
          "description": "当和某人分手时：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.F,
                "description": "你通常让自己的情绪深陷其中，很难抽身出来。"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.T,
                "description": "虽然你觉得受伤，但一旦下定决心，你会直截了当地将过去恋人的影子甩开。 "
              }
            ]
        },
        {
          "ID": 18,
          "description": "当与一个人交往时，你倾向于看重： ",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.F,
                "description": "情感上的相容性：表达爱意和对另一半的需求很敏感。"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.T,
                "description": "智慧上的相容性：沟通重要的想法；客观地讨论和辩论事情。 "
              }
            ]
        },
        {
          "ID": 19,
          "description": "当你不同意情人的想法时： ",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.F,
                "description": "你尽可能地避免伤害对方的感情；若是会对对方造成伤害的话，你就不会说。"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.T,
                "description": "你通常毫无保留地说话，并且对情人直言不讳，因为对的就是对的。  "
              }
            ]
        },
        {
          "ID": 20,
          "description": "认识你的人倾向形容你为： ",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.F,
                "description": "热情和敏感"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.T,
                "description": "逻辑和明确。"
              }
            ]
        },
        {
          "ID": 21,
          "description": "你把大部分和别人的相遇视为：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.F,
                "description": "友善及重要的"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.T,
                "description": "另有目的"
              }
            ]
        },
        {
          "ID": 22,
          "description": "若你有时间和金钱，你的朋友邀请你到国外度假，并且在前一天才通知，你会：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.J,
                "description": "必须先检查你的时间表。"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.P,
                "description": "立刻收拾行装"
              }
            ]
        },
        {
          "ID": 23,
          "description": "在第一次约会中：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.J,
                "description": "若你所约的人来迟了，你会很不高兴"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.P,
                "description": "一点儿都不在乎，因为你自己常常迟到"
              }
            ]
        },
        {
          "ID": 24,
          "description": "你偏好：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.J,
                "description": "事先知道约会的行程：要去哪里、有谁参加、你会在那里多久、该如何打扮"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.P,
                "description": "让约会自然地发生，不做太多事先的计划"
              }
            ]
        },
        {
          "ID": 25,
          "description": "你选择的生活充满着：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.J,
                "description": "日程表和组织。"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.P,
                "description": "自然发生和弹性。"
              }
            ]
        },
        {
          "ID": 26,
          "description": "哪一项较常见：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.J,
                "description": "你准时出席而其他人都迟到。"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.P,
                "description": "其他人都准时出席而你迟到。"
              }
            ]
        },
        {
          "ID": 27,
          "description": "你是这种喜欢……的人：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.J,
                "description": "下定决心并且做出最后肯定的结论。"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.P,
                "description": "放宽你的选择面并且持续收集信息。"
              }
            ]
        },
        {
          "ID": 28,
          "description": "你是此类型的人：",
          "choices": 
            [
              {
                "index": CHOICES.A,
                "category": MBTICategories.J,
                "description": "喜欢在一段时间里专心于一件事情直到完成。"
              },
              {
                "index": CHOICES.B,
                "category": MBTICategories.P,
                "description": "享受同时进行好几件事情。"
              }
            ]
        }*/
      ]
    }

export {MBTI}