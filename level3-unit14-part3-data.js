// Part 3 Quiz Data: invitation – palm
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 14-3 - invitation – palm",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "invitation",
    "pos": "n.",
    "cn_def": "邀請；邀請卡（可數/不可數）",
    "en_def": "a written or spoken request inviting someone to attend an event",
    "sentence": "We were delighted to receive an elegant wedding {{BLANK}} to our cousin's banquet next month.",
    "cn": "我們很高興收到下個月表哥婚宴的優雅婚禮喜帖／邀請。"
  },
  {
    "word": "invite",
    "pos": "v.",
    "cn_def": "邀請；招致（動詞）",
    "en_def": "to ask someone politely to go somewhere or do something",
    "sentence": "Our generous new neighbors decided to {{BLANK}} all the families on our street over for dinner.",
    "cn": "我們慷慨的新鄰居決定邀請我們整條街的所有家庭來家裡共進晚餐。"
  },
  {
    "word": "lightning",
    "pos": "n.",
    "cn_def": "閃電（不可數）",
    "en_def": "the naturally occurring electrostatic discharge produced during a thunderstorm",
    "sentence": "A blinding bolt of {{BLANK}} split the pitch-black sky just seconds before a deafening boom of thunder.",
    "cn": "一道耀眼的閃電撕裂漆黑的夜空，幾秒鐘後傳來震耳欲聾的雷聲。"
  },
  {
    "word": "medal",
    "pos": "n.",
    "cn_def": "獎牌；勳章（可數）",
    "en_def": "a metal disc awarded as a distinction for bravery or sporting success",
    "sentence": "After four years of grueling training, the swimmer was overjoyed to win a gold {{BLANK}} at the Olympics.",
    "cn": "經過四年艱苦的訓練，那位游泳選手在奧運會上欣喜若狂地贏得了一枚金牌。"
  },
  {
    "word": "miracle",
    "pos": "n.",
    "cn_def": "奇蹟；不可思議的事（可數）",
    "en_def": "an extraordinary and welcome event attributed to a divine agency or extreme luck",
    "sentence": "It was considered an absolute {{BLANK}} that all passengers survived the plane crash without any serious injuries.",
    "cn": "所有乘客都在飛機失事中生還且未受重傷，這被視為一場名副其實的奇蹟。"
  },
  {
    "word": "miraculous",
    "pos": "adj.",
    "cn_def": "奇蹟般的；不可思議的",
    "en_def": "occurring through divine intervention or bringing wonderful fortune",
    "sentence": "The elderly grandfather made a {{BLANK}} recovery after the complicated twelve-hour heart surgery.",
    "cn": "年邁的祖父在歷經十二個小時的複雜心臟手術後，實現了奇蹟般的康復。"
  },
  {
    "word": "missile",
    "pos": "n.",
    "cn_def": "飛彈；導彈（可數）",
    "en_def": "a weapon or rocket directed by remote control or automatically guided",
    "sentence": "The modern military warship is equipped with an advanced {{BLANK}} defense system to protect naval fleets.",
    "cn": "這艘現代軍事戰艦配備了先進的飛彈防禦系統，以保護海軍艦隊。"
  },
  {
    "word": "motel",
    "pos": "n.",
    "cn_def": "汽車旅館（可數）",
    "en_def": "a roadside hotel designed primarily for motorists, typically with parking outside rooms",
    "sentence": "Exhausted from twelve hours of driving across the desert, we checked into a cheap roadside {{BLANK}} for the night.",
    "cn": "開車穿越沙漠十二個小時而精疲力竭後，我們當晚入住了一家便宜的路邊汽車旅館。"
  },
  {
    "word": "necktie",
    "pos": "n.",
    "cn_def": "領帶（可數）",
    "en_def": "a long piece of cloth worn around the neck and tied in a knot at the front",
    "sentence": "For his high-level job interview at the corporate bank, Alan wore a tailored navy suit and a striped {{BLANK}}.",
    "cn": "為了他在商業銀行的重大工作面試，艾倫穿了一套量身訂製的深藍色西裝並繫了條條紋領帶。"
  },
  {
    "word": "palm",
    "pos": "n.",
    "cn_def": "手掌；棕櫚樹（可數）",
    "en_def": "the inner surface of the hand; an unbranched tropical tree with a crown of large leaves",
    "sentence": "The charming storyteller spoke with such captivating charisma that he held the entire audience in the {{BLANK}} of his hand.",
    "cn": "那位充滿魅力的說書人演講極具吸引力，將全場觀眾牢牢掌握在自己的手掌心／股掌之中。"
  }
];

const MCQS = [
  {
    "q": "The family received a formal wedding ______ in the mail inviting them to dinner.",
    "options": [
      "invitation",
      "motel",
      "missile",
      "palm"
    ],
    "answer": 0,
    "cn": "這家人在郵件中收到了一封正式的婚禮邀請函／喜帖，邀請他們共進晚餐。",
    "vocabIndex": 0
  },
  {
    "q": "The brilliant flash of ______ lit up the dark mountain during the heavy thunder storm.",
    "options": [
      "necktie",
      "lightning",
      "medal",
      "motel"
    ],
    "answer": 1,
    "cn": "在猛烈的雷雨期間，明亮的閃電照亮了黑暗的山峰。",
    "vocabIndex": 2
  },
  {
    "q": "The fast runner won a shiny gold ______ for finishing first in the school race.",
    "options": [
      "motel",
      "palm",
      "missile",
      "medal"
    ],
    "answer": 3,
    "cn": "那位跑得很快的跑者因在學校賽跑中榮獲第一名而贏得了一枚光亮的金牌。",
    "vocabIndex": 3
  },
  {
    "q": "It was a true ______ that the little girl found her lost puppy after two weeks.",
    "options": [
      "missile",
      "necktie",
      "miracle",
      "palm"
    ],
    "answer": 2,
    "cn": "小女孩在兩週後找到了失蹤的小狗，這真是一個真正的奇蹟。",
    "vocabIndex": 4
  },
  {
    "q": "The military ship can launch a powerful ______ to defend itself from enemy airplanes.",
    "options": [
      "motel",
      "missile",
      "necktie",
      "palm"
    ],
    "answer": 1,
    "cn": "軍艦可以發射強大的飛彈／導彈以防禦敵軍飛機。",
    "vocabIndex": 6
  },
  {
    "q": "Tired after driving for eight hours, the travelers stopped at a roadside ______ to sleep.",
    "options": [
      "medal",
      "palm",
      "missile",
      "motel"
    ],
    "answer": 3,
    "cn": "連續開車八小時感到疲憊後，旅客們在路邊一家汽車旅館停下來睡覺。",
    "vocabIndex": 7
  },
  {
    "q": "Mr. Brown wore a clean white shirt and a blue silk ______ for the meeting.",
    "options": [
      "motel",
      "missile",
      "necktie",
      "palm"
    ],
    "answer": 2,
    "cn": "布朗先生穿了一件乾淨的白襯衫並繫了一條藍色絲質領帶參加會議。",
    "vocabIndex": 8
  },
  {
    "q": "Tall green ______ trees grow along the sandy tropical beaches of the island.",
    "options": [
      "palm",
      "medal",
      "missile",
      "motel"
    ],
    "answer": 0,
    "cn": "高大的綠色棕櫚樹生長在該島嶼沙質熱帶海灘沿線。",
    "vocabIndex": 9
  },
  {
    "q": "We would like to ______ our favorite teacher to join our graduation picnic.",
    "options": [
      "palm",
      "motel",
      "necktie",
      "invite"
    ],
    "answer": 3,
    "cn": "我們想要邀請我們最喜歡的老師來參加我們的畢業野餐。",
    "vocabIndex": 1
  },
  {
    "q": "The sick grandfather made a ______ recovery and was able to walk again.",
    "options": [
      "lightning",
      "necktie",
      "miraculous",
      "motel"
    ],
    "answer": 2,
    "cn": "生病的祖父實現了奇蹟般的康復，並且能夠再次行走了。",
    "vocabIndex": 5
  },
  {
    "q": "The old woman held out her open ______ to catch the falling rain drops.",
    "options": [
      "palm",
      "motel",
      "missile",
      "medal"
    ],
    "answer": 0,
    "cn": "老婦人伸出她展開的手掌去接落下的雨滴。",
    "vocabIndex": 9
  },
  {
    "q": "My father put on a suit and fastened his red ______ before going to work.",
    "options": [
      "motel",
      "necktie",
      "missile",
      "palm"
    ],
    "answer": 1,
    "cn": "我父親在上班前穿上西裝並繫好他的紅色領帶。",
    "vocabIndex": 8
  },
  {
    "q": "The soldiers in the war received a bronze ______ for their great courage.",
    "options": [
      "motel",
      "necktie",
      "medal",
      "missile"
    ],
    "answer": 2,
    "cn": "戰爭中的士兵們因其巨大的勇氣而獲得了一枚銅質勳章／獎牌。",
    "vocabIndex": 3
  },
  {
    "q": "A bright bolt of ______ struck the tall tree and split its branches in half.",
    "options": [
      "motel",
      "lightning",
      "necktie",
      "medal"
    ],
    "answer": 1,
    "cn": "一道耀眼的閃電擊中了那棵大樹，將它的樹枝劈成兩半。",
    "vocabIndex": 2
  },
  {
    "q": "The army fired a test ______ over the sea to practice target shooting.",
    "options": [
      "palm",
      "motel",
      "necktie",
      "missile"
    ],
    "answer": 3,
    "cn": "軍隊在海上發射了一枚測試飛彈，以練習打靶射擊。",
    "vocabIndex": 6
  },
  {
    "q": "During our summer trip across America, we slept in a small highway ______ every night.",
    "options": [
      "motel",
      "medal",
      "missile",
      "palm"
    ],
    "answer": 0,
    "cn": "在我們橫跨美國的夏季旅行中，我們每晚都睡在小型公路汽車旅館裡。",
    "vocabIndex": 7
  },
  {
    "q": "We sent a birthday party ______ to thirty of our classmates yesterday.",
    "options": [
      "motel",
      "invitation",
      "medal",
      "missile"
    ],
    "answer": 1,
    "cn": "我們昨天向三十位同學寄發了生日派對邀請卡。",
    "vocabIndex": 0
  },
  {
    "q": "The swimmer trained every morning and hoped to become an Olympic ______.",
    "options": [
      "medal",
      "missile",
      "motel",
      "medalist"
    ],
    "answer": 3,
    "cn": "那位游泳選手每天清晨訓練，期望能成為一名奧運獎牌得主。"
  },
  {
    "q": "It would be an absolute ______ if the broken car can start again without new parts.",
    "options": [
      "missile",
      "necktie",
      "miracle",
      "motel"
    ],
    "answer": 2,
    "cn": "如果那輛壞掉的車在沒有新零件的情況下能再次發動，那絕對是一場奇蹟。",
    "vocabIndex": 4
  },
  {
    "q": "The young girl showed her ______ to the fortune teller to hear about her future.",
    "options": [
      "palm",
      "motel",
      "missile",
      "medal"
    ],
    "answer": 0,
    "cn": "小女孩將她的手掌展示給算命師看，以聽取關於她未來的預測。",
    "vocabIndex": 9
  },
  {
    "q": "During the thunderstorm, hikers ran to the shelter because a tree was ______.",
    "options": [
      "in a cheap motel",
      "dressed in a necktie",
      "struck by lightning",
      "in the palm of one's hand"
    ],
    "answer": 2,
    "cn": "在雷陣雨期間登山客跑向避難所，因為有一棵樹被閃電擊中了。",
    "vocabIndex": 2
  },
  {
    "q": "The spoiled little boy had his grandparents completely ______.",
    "options": [
      "struck by lightning",
      "in the palm of his hand",
      "with a gold medal",
      "in a guided missile"
    ],
    "answer": 1,
    "cn": "那個被寵壞的小男孩把他的祖父母完全掌握在手掌心／股掌之中。",
    "vocabIndex": 9
  },
  {
    "q": "For the formal wedding dinner, all male guests were asked to ______.",
    "options": [
      "launch a missile",
      "stay at a motel",
      "strike by lightning",
      "wear a necktie"
    ],
    "answer": 3,
    "cn": "為了這場正式的婚宴，所有男性賓客都被要求配戴領帶。",
    "vocabIndex": 8
  },
  {
    "q": "The swimmer stood proudly on the podium after winning a ______ in the 100-meter race.",
    "options": [
      "gold medal",
      "roadside motel",
      "guided missile",
      "palm tree"
    ],
    "answer": 0,
    "cn": "在百米賽跑中贏得一枚金牌後，游泳選手自豪地站在頒獎台上。",
    "vocabIndex": 3
  },
  {
    "q": "Drinking plenty of warm water and sleeping for ten hours can ______ for your cold.",
    "options": [
      "launch a missile",
      "stay at a motel",
      "work miracles",
      "wear a necktie"
    ],
    "answer": 2,
    "cn": "多喝溫水並睡眠十個小時可以對你的感冒產生奇效／創造奇蹟。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "invitation": {
    "pos": "n.",
    "en_def": "a written or spoken request inviting someone to attend an event",
    "cn_def": "邀請；邀請卡（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a written or spoken request inviting someone to attend an event",
        "cn_def": "邀請；邀請卡（可數/不可數）"
      }
    ]
  },
  "invite": {
    "pos": "v.",
    "en_def": "to ask someone politely to go somewhere or do something",
    "cn_def": "邀請；招致（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to ask someone politely to go somewhere or do something",
        "cn_def": "邀請；招致（動詞）"
      }
    ]
  },
  "lightning": {
    "pos": "n.",
    "en_def": "the naturally occurring electrostatic discharge produced during a thunderstorm",
    "cn_def": "閃電（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the naturally occurring electrostatic discharge produced during a thunderstorm",
        "cn_def": "閃電（不可數）"
      }
    ]
  },
  "medal": {
    "pos": "n.",
    "en_def": "a metal disc awarded as a distinction for bravery or sporting success",
    "cn_def": "獎牌；勳章（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a metal disc awarded as a distinction for bravery or sporting success",
        "cn_def": "獎牌；勳章（可數）"
      }
    ]
  },
  "miracle": {
    "pos": "n.",
    "en_def": "an extraordinary and welcome event attributed to a divine agency or extreme luck",
    "cn_def": "奇蹟；不可思議的事（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an extraordinary and welcome event attributed to a divine agency or extreme luck",
        "cn_def": "奇蹟；不可思議的事（可數）"
      }
    ]
  },
  "miraculous": {
    "pos": "adj.",
    "en_def": "occurring through divine intervention or bringing wonderful fortune",
    "cn_def": "奇蹟般的；不可思議的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "occurring through divine intervention or bringing wonderful fortune",
        "cn_def": "奇蹟般的；不可思議的"
      }
    ]
  },
  "missile": {
    "pos": "n.",
    "en_def": "a weapon or rocket directed by remote control or automatically guided",
    "cn_def": "飛彈；導彈（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a weapon or rocket directed by remote control or automatically guided",
        "cn_def": "飛彈；導彈（可數）"
      }
    ]
  },
  "motel": {
    "pos": "n.",
    "en_def": "a roadside hotel designed primarily for motorists, typically with parking outside rooms",
    "cn_def": "汽車旅館（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a roadside hotel designed primarily for motorists, typically with parking outside rooms",
        "cn_def": "汽車旅館（可數）"
      }
    ]
  },
  "necktie": {
    "pos": "n.",
    "en_def": "a long piece of cloth worn around the neck and tied in a knot at the front",
    "cn_def": "領帶（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a long piece of cloth worn around the neck and tied in a knot at the front",
        "cn_def": "領帶（可數）"
      }
    ]
  },
  "palm": {
    "pos": "n.",
    "en_def": "the inner surface of the hand; an unbranched tropical tree with a crown of large leaves",
    "cn_def": "手掌；棕櫚樹（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the inner surface of the hand; an unbranched tropical tree with a crown of large leaves",
        "cn_def": "手掌；棕櫚樹（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
