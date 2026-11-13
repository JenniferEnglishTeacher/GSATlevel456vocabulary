// Part 1 Quiz Data: ambulance – complaint
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 12-1 - ambulance – complaint",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "ambulance",
    "pos": "n.",
    "cn_def": "救護車（可數）",
    "en_def": "a specialized emergency vehicle equipped to transport sick or injured people to a hospital",
    "sentence": "When the pedestrian was struck by a speeding car, nearby witnesses immediately called for an {{BLANK}} to rush him to the hospital.",
    "cn": "當那名行人被超速汽車撞倒時，附近的目擊者立刻呼叫救護車將他火速送往醫院。"
  },
  {
    "word": "approve",
    "pos": "v.",
    "cn_def": "贊成；同意；批准（動詞）",
    "en_def": "to officially agree to, accept, or have a favorable opinion of something",
    "sentence": "The city council met yesterday to formally {{BLANK}} the construction budget for the modern public library.",
    "cn": "雖然她的父母不完全贊成她出國留學的決定，但他們依然在經濟上支持她。市議會昨天開會正式批准了興建現代化公共圖書館的預算。"
  },
  {
    "word": "disapprove",
    "pos": "v.",
    "cn_def": "不贊成；反對（動詞）",
    "en_def": "to have an unfavorable opinion of someone or something; to consider wrong",
    "sentence": "Many conservative voters openly {{BLANK}} of the new taxation policy proposed by the local government.",
    "cn": "許多保守派選民公開反對地方政府提出的新稅收政策。"
  },
  {
    "word": "approval",
    "pos": "n.",
    "cn_def": "贊同；批准；認可（不可數）",
    "en_def": "official permission, agreement, or a favorable opinion",
    "sentence": "The architect cannot begin constructing the high-rise office tower until he receives final {{BLANK}} from the government.",
    "cn": "在獲得政府的最終核准／批准之前，建築師無法開始建造高層辦公大樓。"
  },
  {
    "word": "attitude",
    "pos": "n.",
    "cn_def": "態度；心態；看法（可數/不可數）",
    "en_def": "a settled way of thinking or feeling about someone or something; posture",
    "sentence": "Maintaining a positive {{BLANK}} in the face of unexpected setbacks is essential for long-term personal success.",
    "cn": "在面對意外挫折時保持積極的態度／心態對於個人的長期成功至關重要。"
  },
  {
    "word": "avenue",
    "pos": "n.",
    "cn_def": "大道；途徑；手段（可數）",
    "en_def": "a broad road in a town or city, or a pathway / method of approach",
    "sentence": "The diplomat promised to explore every possible {{BLANK}} to achieve a peaceful and lasting solution to the border conflict.",
    "cn": "外交官承諾將探尋一切可能的途徑／管道，以達成邊界衝突的和平與持久解決方案。"
  },
  {
    "word": "bravery",
    "pos": "n.",
    "cn_def": "英勇；勇氣；勇敢（不可數）",
    "en_def": "courageous behavior or character; the quality of being brave",
    "sentence": "The fearless firefighter received a prestigious national medal for his exceptional {{BLANK}} during the blazing chemical plant explosion.",
    "cn": "那位無畏的消防員因在猛烈化學工廠爆炸中展現非凡英勇／勇氣而榮獲國家榮譽勳章。"
  },
  {
    "word": "brave",
    "pos": "adj./v.",
    "cn_def": "勇敢的（形容詞）；勇於面對；冒著（動詞）",
    "en_def": "ready to face danger or pain; to endure unpleasant conditions",
    "sentence": "Even though heavy snow paralyzed city transit, dedicated postal workers had to {{BLANK}} the freezing elements to deliver letters.",
    "cn": "雖然大雪癱瘓了城市交通，敬業的郵政員工仍不得不冒著酷寒天氣遞送信件。"
  },
  {
    "word": "campus",
    "pos": "n.",
    "cn_def": "校園；校區（可數/不可數）",
    "en_def": "the grounds and buildings of a university or college",
    "sentence": "Living on {{BLANK}} during your freshman year makes it much easier to participate in student clubs and make new friends.",
    "cn": "大一期間住在校園內讓參與學生社團和結交新朋友變得容易許多。"
  },
  {
    "word": "clinic",
    "pos": "n.",
    "cn_def": "診所；門診部（可數）",
    "en_def": "a medical establishment or hospital department where outpatients are given treatment",
    "sentence": "Whenever our neighbors suffer from a mild cold or headache, they visit the local community {{BLANK}} for immediate treatment.",
    "cn": "每當我們的鄰居患上輕微感冒或頭痛時，他們都會前往當地的社區診所尋求即刻治療。"
  },
  {
    "word": "clinical",
    "pos": "adj.",
    "cn_def": "臨床的；診所的；客觀冷靜的",
    "en_def": "relating to the observation and treatment of actual patients rather than theoretical study",
    "sentence": "Before the new antiviral medication can be sold in pharmacies, it must undergo three rigorous phases of {{BLANK}} trials.",
    "cn": "在新的抗病毒藥物於藥局銷售之前，必須經過三個嚴格階段的臨床試驗。"
  },
  {
    "word": "complain",
    "pos": "v.",
    "cn_def": "抱怨；發牢騷；投訴（動詞）",
    "en_def": "to express dissatisfaction, pain, or annoyance about something",
    "sentence": "The elderly patient visited the clinic to {{BLANK}} of persistent chest tightness and severe shortness of breath.",
    "cn": "那位年邁的病人前往診所訴說／主訴持續的胸悶和嚴重的呼吸急促。"
  },
  {
    "word": "complaint",
    "pos": "n.",
    "cn_def": "抱怨；抗議；疾症（可數/不可數）",
    "en_def": "a statement that something is unsatisfactory; an illness or medical problem",
    "sentence": "The dissatisfied passenger decided to lodge a formal {{BLANK}} with the airline after his luggage was lost for three days.",
    "cn": "那位不滿的乘客在行李遺失三天後，決定向航空公司提出正式投訴／申訴。"
  }
];

const MCQS = [
  {
    "q": "The witness dialed the emergency number and called for an ______ to take the injured driver away.",
    "options": [
      "avenue",
      "attitude",
      "approval",
      "ambulance"
    ],
    "answer": 3,
    "cn": "目擊者撥打了緊急電話號碼，並呼叫了一輛救護車將受傷的駕駛人送走。",
    "vocabIndex": 0
  },
  {
    "q": "Having a positive ______ toward learning will help students overcome difficult homework challenges.",
    "options": [
      "ambulance",
      "clinic",
      "attitude",
      "campus"
    ],
    "answer": 2,
    "cn": "對學習抱持積極的態度，將有助於學生克服困難的作業挑戰。",
    "vocabIndex": 4
  },
  {
    "q": "The city council voted unanimously to grant official ______ for the construction of a new hospital.",
    "options": [
      "avenue",
      "approval",
      "bravery",
      "ambulance"
    ],
    "answer": 1,
    "cn": "市議會一致投票同意，對興建新醫院給予正式批准／認可。",
    "vocabIndex": 3
  },
  {
    "q": "Fifth ______ is one of the most famous and expensive shopping streets in New York City.",
    "options": [
      "Avenue",
      "Campus",
      "Bravery",
      "Clinic"
    ],
    "answer": 0,
    "cn": "第五大道是紐約市最著名且昂貴的購物街之一。",
    "vocabIndex": 5
  },
  {
    "q": "The firefighter received a golden medal for his great ______ in saving three children from the fire.",
    "options": [
      "clinic",
      "bravery",
      "avenue",
      "ambulance"
    ],
    "answer": 1,
    "cn": "消防員因在火災中拯救三名孩童所展現的偉大英勇／勇氣而獲得了一枚金牌。",
    "vocabIndex": 6
  },
  {
    "q": "During her first year of college, Lisa lived in a dormitory on ______ so she could walk to class.",
    "options": [
      "attitude",
      "approval",
      "campus",
      "bravery"
    ],
    "answer": 2,
    "cn": "在大學一年級期間，麗莎住在校園內的宿舍，以便她能步行去上課。",
    "vocabIndex": 8
  },
  {
    "q": "When grandfather had a toothache, mom took him to the dental ______ down the street.",
    "options": [
      "clinic",
      "ambulance",
      "attitude",
      "avenue"
    ],
    "answer": 0,
    "cn": "當爺爺牙痛時，媽媽帶他去了街角那家牙科診所。",
    "vocabIndex": 9
  },
  {
    "q": "The customer wrote an angry letter of ______ because the restaurant served cold food.",
    "options": [
      "avenue",
      "bravery",
      "campus",
      "complaint"
    ],
    "answer": 3,
    "cn": "這位顧客寫了一封憤怒的投訴／抱怨信，因為餐廳送上了冷掉的食物。",
    "vocabIndex": 12
  },
  {
    "q": "The police officer was praised because his act of ______ stopped an armed bank robber.",
    "options": [
      "clinic",
      "bravery",
      "approval",
      "avenue"
    ],
    "answer": 1,
    "cn": "警官受到讚揚，因為他的英勇之舉阻止了一名持械的銀行搶匪。",
    "vocabIndex": 6
  },
  {
    "q": "The young doctor opened a private medical ______ in the countryside to help poor families.",
    "options": [
      "attitude",
      "bravery",
      "approval",
      "clinic"
    ],
    "answer": 3,
    "cn": "那位年輕醫生在鄉村開設了一家私人醫療診所，以幫助貧困家庭。",
    "vocabIndex": 9
  },
  {
    "q": "The teacher hopes that all parents will ______ of the class field trip to the science museum.",
    "options": [
      "approve",
      "complain",
      "brave",
      "disapprove"
    ],
    "answer": 0,
    "cn": "老師希望所有家長都能贊同／批准班級前往科學博物館的校外教學。",
    "vocabIndex": 1
  },
  {
    "q": "Many health experts strongly ______ of drinking too many sugary sodas every day.",
    "options": [
      "approve",
      "brave",
      "disapprove",
      "complain"
    ],
    "answer": 2,
    "cn": "許多健康專家強烈不贊成／反對每天喝過多含糖汽水。",
    "vocabIndex": 2
  },
  {
    "q": "Travelers often ______ about long waiting times and delayed flights at the busy airport.",
    "options": [
      "approve",
      "complain",
      "brave",
      "disapprove"
    ],
    "answer": 1,
    "cn": "旅客們經常在繁忙的機場抱怨漫長的等待時間和班機延誤。",
    "vocabIndex": 11
  },
  {
    "q": "The school board met yesterday afternoon to officially ______ the new science laboratory budget.",
    "options": [
      "complain",
      "disapprove",
      "brave",
      "approve"
    ],
    "answer": 3,
    "cn": "學校董事會昨天下午開會，正式批准了新科學實驗室的預算。",
    "vocabIndex": 1
  },
  {
    "q": "The hikers had to ______ the cold wind and rain to reach the mountain shelter before sunset.",
    "options": [
      "brave",
      "approve",
      "complain",
      "disapprove"
    ],
    "answer": 0,
    "cn": "登山客不得不冒著／勇敢面對寒風大雨，在日落前抵達山間避難所。",
    "vocabIndex": 7
  },
  {
    "q": "My little brother always ______ about having to eat green broccoli and carrots at dinner.",
    "options": [
      "braves",
      "approves",
      "complains",
      "disapproves"
    ],
    "answer": 2,
    "cn": "我弟弟在吃晚餐時總是抱怨不得不吃綠色花椰菜和胡蘿蔔。",
    "vocabIndex": 11
  },
  {
    "q": "Conservative parents openly ______ of their teenagers staying out past midnight with friends.",
    "options": [
      "approve",
      "disapprove",
      "brave",
      "complain"
    ],
    "answer": 1,
    "cn": "保守的父母公開不贊成／反對他們十幾歲的孩子與朋友在外逗留超過午夜。",
    "vocabIndex": 2
  },
  {
    "q": "The little boy showed a ______ heart when he rescued the puppy from the deep ditch.",
    "options": [
      "clinical",
      "complaint",
      "disapproving",
      "brave"
    ],
    "answer": 3,
    "cn": "小男孩從深水溝中救出小狗時，展現了一顆勇敢的心。",
    "vocabIndex": 7
  },
  {
    "q": "Scientists conducted several ______ tests on the new medicine before it was sold in stores.",
    "options": [
      "brave",
      "approving",
      "clinical",
      "complained"
    ],
    "answer": 2,
    "cn": "科學家在這種新藥於商店銷售前，對其進行了數次臨床的測試。",
    "vocabIndex": 10
  },
  {
    "q": "Even though he was scared of speaking in public, Tim remained ______ and gave his speech.",
    "options": [
      "brave",
      "complaining",
      "disapproved",
      "clinical"
    ],
    "answer": 0,
    "cn": "雖然提姆害怕公開演講，但他依然表現勇敢，發表了他的演說。",
    "vocabIndex": 7
  },
  {
    "q": "The postal workers had to ______ to deliver important letters during the snowstorm.",
    "options": [
      "live on campus",
      "call for an ambulance",
      "brave the elements",
      "file a complaint"
    ],
    "answer": 2,
    "cn": "郵政員工在暴風雪期間必須冒著嚴酷天氣／風雨無阻遞送重要信件。",
    "vocabIndex": 7
  },
  {
    "q": "When the old man collapsed on the street, people nearby immediately ______ to get medical help.",
    "options": [
      "explored every avenue",
      "called for an ambulance",
      "lived on campus",
      "braved the elements"
    ],
    "answer": 1,
    "cn": "當老人倒在街道上時，附近的人們立刻呼叫了救護車以獲取醫療協助。",
    "vocabIndex": 0
  },
  {
    "q": "To solve this serious water problem, the mayor promised to ______ until a good plan is found.",
    "options": [
      "live on campus",
      "brave the elements",
      "call for an ambulance",
      "explore every avenue"
    ],
    "answer": 3,
    "cn": "為了解決這個嚴重的供水問題，市長承諾將探尋一切途徑，直到找到好方案。",
    "vocabIndex": 5
  },
  {
    "q": "Many students enjoy ______ because it takes only five minutes to walk to the library.",
    "options": [
      "living on campus",
      "filing a complaint",
      "exploring every avenue",
      "braving the elements"
    ],
    "answer": 0,
    "cn": "許多學生喜歡住在校園內，因為步行到圖書館只需五分鐘。",
    "vocabIndex": 8
  },
  {
    "q": "If you are unhappy with the damaged product, you can ______ with customer service.",
    "options": [
      "brave the elements",
      "call for an ambulance",
      "explore every avenue",
      "lodge a complaint"
    ],
    "answer": 3,
    "cn": "如果你對損壞的產品不滿意，可以向客戶服務部提出投訴／申訴。",
    "vocabIndex": 12
  }
];

const LOOKUP = {
  "ambulance": {
    "pos": "n.",
    "en_def": "a specialized emergency vehicle equipped to transport sick or injured people to a hospital",
    "cn_def": "救護車（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a specialized emergency vehicle equipped to transport sick or injured people to a hospital",
        "cn_def": "救護車（可數）"
      }
    ]
  },
  "approve": {
    "pos": "v.",
    "en_def": "to officially agree to, accept, or have a favorable opinion of something",
    "cn_def": "贊成；同意；批准（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to officially agree to, accept, or have a favorable opinion of something",
        "cn_def": "贊成；同意；批准（動詞）"
      }
    ]
  },
  "disapprove": {
    "pos": "v.",
    "en_def": "to have an unfavorable opinion of someone or something; to consider wrong",
    "cn_def": "不贊成；反對（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to have an unfavorable opinion of someone or something; to consider wrong",
        "cn_def": "不贊成；反對（動詞）"
      }
    ]
  },
  "approval": {
    "pos": "n.",
    "en_def": "official permission, agreement, or a favorable opinion",
    "cn_def": "贊同；批准；認可（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "official permission, agreement, or a favorable opinion",
        "cn_def": "贊同；批准；認可（不可數）"
      }
    ]
  },
  "attitude": {
    "pos": "n.",
    "en_def": "a settled way of thinking or feeling about someone or something; posture",
    "cn_def": "態度；心態；看法（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a settled way of thinking or feeling about someone or something; posture",
        "cn_def": "態度；心態；看法（可數/不可數）"
      }
    ]
  },
  "avenue": {
    "pos": "n.",
    "en_def": "a broad road in a town or city, or a pathway / method of approach",
    "cn_def": "大道；途徑；手段（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a broad road in a town or city, or a pathway / method of approach",
        "cn_def": "大道；途徑；手段（可數）"
      }
    ]
  },
  "bravery": {
    "pos": "n.",
    "en_def": "courageous behavior or character; the quality of being brave",
    "cn_def": "英勇；勇氣；勇敢（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "courageous behavior or character; the quality of being brave",
        "cn_def": "英勇；勇氣；勇敢（不可數）"
      }
    ]
  },
  "brave": {
    "pos": "adj./v.",
    "en_def": "ready to face danger or pain; to endure unpleasant conditions",
    "cn_def": "勇敢的（形容詞）；勇於面對；冒著（動詞）",
    "combined": [
      {
        "pos": "adj./v.",
        "en_def": "ready to face danger or pain; to endure unpleasant conditions",
        "cn_def": "勇敢的（形容詞）；勇於面對；冒著（動詞）"
      }
    ]
  },
  "campus": {
    "pos": "n.",
    "en_def": "the grounds and buildings of a university or college",
    "cn_def": "校園；校區（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the grounds and buildings of a university or college",
        "cn_def": "校園；校區（可數/不可數）"
      }
    ]
  },
  "clinic": {
    "pos": "n.",
    "en_def": "a medical establishment or hospital department where outpatients are given treatment",
    "cn_def": "診所；門診部（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a medical establishment or hospital department where outpatients are given treatment",
        "cn_def": "診所；門診部（可數）"
      }
    ]
  },
  "clinical": {
    "pos": "adj.",
    "en_def": "relating to the observation and treatment of actual patients rather than theoretical study",
    "cn_def": "臨床的；診所的；客觀冷靜的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to the observation and treatment of actual patients rather than theoretical study",
        "cn_def": "臨床的；診所的；客觀冷靜的"
      }
    ]
  },
  "complain": {
    "pos": "v.",
    "en_def": "to express dissatisfaction, pain, or annoyance about something",
    "cn_def": "抱怨；發牢騷；投訴（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to express dissatisfaction, pain, or annoyance about something",
        "cn_def": "抱怨；發牢騷；投訴（動詞）"
      }
    ]
  },
  "complaint": {
    "pos": "n.",
    "en_def": "a statement that something is unsatisfactory; an illness or medical problem",
    "cn_def": "抱怨；抗議；疾症（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a statement that something is unsatisfactory; an illness or medical problem",
        "cn_def": "抱怨；抗議；疾症（可數/不可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
