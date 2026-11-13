// Unit 17 Quiz Data: specific – scratch
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Basic U17 - specific – scratch",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "specific",
    "pos": "adj.",
    "cn_def": "特定的",
    "en_def": "clearly stated; relating to one particular thing only",
    "sentence": "Can you provide more {{BLANK}} details about the incident?",
    "cn": "你能提供更具體的事件細節嗎？"
  },
  {
    "word": "specify",
    "pos": "v.",
    "cn_def": "具體說明",
    "en_def": "to state something clearly and exactly",
    "sentence": "Please {{BLANK}} which items you need from the list.",
    "cn": "請指明您需要清單上的哪些項目。"
  },
  {
    "word": "analyze",
    "pos": "v.",
    "cn_def": "分析",
    "en_def": "to study something carefully in order to understand it",
    "sentence": "Scientists need to {{BLANK}} the data before drawing conclusions.",
    "cn": "科學家需要分析數據才能得出結論。"
  },
  {
    "word": "analysis",
    "pos": "n.",
    "cn_def": "分析",
    "en_def": "a careful study of something in order to understand it",
    "sentence": "The financial {{BLANK}} showed a decline in profits.",
    "cn": "財務分析顯示利潤下降。"
  },
  {
    "word": "analyst",
    "pos": "n.",
    "cn_def": "分析師",
    "en_def": "a person whose job is to study a subject carefully and give opinions about it",
    "sentence": "The market {{BLANK}} predicted a rise in stock prices.",
    "cn": "市場分析師預測股價上漲。"
  },
  {
    "word": "location",
    "pos": "n.",
    "cn_def": "位置",
    "en_def": "the place where something is or happens",
    "sentence": "The exact {{BLANK}} of the treasure remains unknown.",
    "cn": "寶藏的確切位置仍然未知。"
  },
  {
    "word": "locate",
    "pos": "v.",
    "cn_def": "找出⋯的位置",
    "en_def": "to find the exact position of something",
    "sentence": "We need to {{BLANK}} the source of the problem before we can fix it.",
    "cn": "我們需要找出問題的根源才能解決它。"
  },
  {
    "word": "remote",
    "pos": "adj.",
    "cn_def": "偏遠的",
    "en_def": "far away from where most people live",
    "sentence": "Their village is {{BLANK}} and difficult to reach.",
    "cn": "他們的村莊偏遠且難以到達。"
  },
  {
    "word": "recognize",
    "pos": "v.",
    "cn_def": "認出",
    "en_def": "to know who someone is or what something is because you have seen or heard them before",
    "sentence": "I {{BLANK}} him from the photograph.",
    "cn": "我從照片上認出了他。"
  },
  {
    "word": "recognizable",
    "pos": "adj.",
    "cn_def": "可辨認的",
    "en_def": "easy to know or identify",
    "sentence": "Her voice is {{BLANK}} even in a noisy room.",
    "cn": "她的聲音在嘈雜的房間裡也是可以辨認的。"
  },
  {
    "word": "recognition",
    "pos": "n.",
    "cn_def": "辨認",
    "en_def": "the act of knowing who someone is or what something is",
    "sentence": "His {{BLANK}} of the suspect was crucial to the investigation.",
    "cn": "他對嫌疑人的辨認對調查至關重要。"
  },
  {
    "word": "harmony",
    "pos": "n.",
    "cn_def": "和諧",
    "en_def": "a state of peaceful agreement; a pleasant combination of musical notes",
    "sentence": "The choir sang in perfect {{BLANK}}.",
    "cn": "合唱團的表演聲音和諧無比。"
  },
  {
    "word": "harmonious",
    "pos": "adj.",
    "cn_def": "融洽的",
    "en_def": "friendly and peaceful; going well together",
    "sentence": "They had a {{BLANK}} relationship with their neighbors.",
    "cn": "他們與鄰居之間有著融洽的關係。"
  },
  {
    "word": "determine",
    "pos": "v.",
    "cn_def": "判定",
    "en_def": "to find out or decide something exactly",
    "sentence": "It's difficult to {{BLANK}} the exact cause of the problem.",
    "cn": "很難判定問題的確切原因。"
  },
  {
    "word": "determined",
    "pos": "adj.",
    "cn_def": "堅定的",
    "en_def": "wanting to do something so much that you will not let anything stop you",
    "sentence": "She was {{BLANK}} to finish the marathon despite the rain.",
    "cn": "她下著雨也堅決要完成馬拉松賽。"
  },
  {
    "word": "determination",
    "pos": "n.",
    "cn_def": "決心",
    "en_def": "the quality of continuing to try to do something even when it is difficult",
    "sentence": "His {{BLANK}} to succeed kept him going through difficult times.",
    "cn": "他成功的決心支持他度過了困難時期。"
  },
  {
    "word": "accuracy",
    "pos": "n.",
    "cn_def": "準確",
    "en_def": "the quality of being correct and exact",
    "sentence": "The {{BLANK}} of his predictions surprised everyone.",
    "cn": "他預測的準確性讓所有人都感到驚訝。"
  },
  {
    "word": "accurate",
    "pos": "adj.",
    "cn_def": "準確的",
    "en_def": "correct and exact; without mistakes",
    "sentence": "Her answers were {{BLANK}} and well-researched.",
    "cn": "她的答案準確且經過深入研究。"
  },
  {
    "word": "vary",
    "pos": "v.",
    "cn_def": "有差異",
    "en_def": "to be different from each other; to change according to the situation",
    "sentence": "Prices {{BLANK}} depending on the time of year.",
    "cn": "價格因年份不同而有所不同。"
  },
  {
    "word": "variation",
    "pos": "n.",
    "cn_def": "變化",
    "en_def": "a change or difference in amount, level or form",
    "sentence": "There is a {{BLANK}} in temperature between day and night.",
    "cn": "白天和晚上的溫度有所不同。"
  },
  {
    "word": "various",
    "pos": "adj.",
    "cn_def": "多種的",
    "en_def": "several different",
    "sentence": "The store sells {{BLANK}} types of imported chocolates.",
    "cn": "這家商店出售多種進口巧克力。"
  },
  {
    "word": "varying",
    "pos": "adj.",
    "cn_def": "變化的",
    "en_def": "changing or being different",
    "sentence": "His mood was {{BLANK}}; you never knew how he would react.",
    "cn": "他的心情變化無常，你永遠不知道他會有什麼反應。"
  },
  {
    "word": "rare",
    "pos": "adj.",
    "cn_def": "罕見的",
    "en_def": "not seen or found very often",
    "sentence": "It's {{BLANK}} to find such old books in such good condition.",
    "cn": "在這樣良好的狀況下找到這麼老的書是非常罕見的。"
  },
  {
    "word": "occasions",
    "pos": "n.",
    "cn_def": "場合",
    "en_def": "a special event; a time when something happens",
    "sentence": "On special {{BLANK}}, we go out for dinner.",
    "cn": "在特殊場合，我們出去吃飯。"
  },
  {
    "word": "cooperate",
    "pos": "v.",
    "cn_def": "合作",
    "en_def": "to work together with other people to achieve something",
    "sentence": "The two companies agreed to {{BLANK}} on the new project.",
    "cn": "這兩家公司同意在新項目上進行合作。"
  },
  {
    "word": "Cooperation",
    "pos": "n.",
    "cn_def": "合作",
    "en_def": "the act of working together to achieve something",
    "sentence": "{{BLANK}} between departments is crucial for the project's success.",
    "cn": "各部門之間的合作對項目的成功至關重要。"
  },
  {
    "word": "exchange",
    "pos": "v.",
    "cn_def": "交換",
    "en_def": "to give something to someone and receive something from them",
    "sentence": "We need to {{BLANK}} ideas to improve our strategy.",
    "cn": "我們需要交換意見來改進我們的策略。"
  },
  {
    "word": "ignore",
    "pos": "v.",
    "cn_def": "忽視",
    "en_def": "to pay no attention to someone or something",
    "sentence": "You can't {{BLANK}} the importance of regular exercise.",
    "cn": "你不能忽視定期運動的重要性。"
  },
  {
    "word": "ignorance",
    "pos": "n.",
    "cn_def": "(對某事物)不了解",
    "en_def": "a lack of knowledge about something",
    "sentence": "His {{BLANK}} of the rules led to his disqualification.",
    "cn": "他對規則的無知導致了他的被取消資格。"
  },
  {
    "word": "function",
    "pos": "v.",
    "cn_def": "起作用",
    "en_def": "to work or operate in the correct way",
    "sentence": "The new machine didn't {{BLANK}} properly.",
    "cn": "這台新機器的功能不正常。"
  },
  {
    "word": "functional",
    "pos": "adj.",
    "cn_def": "起作用的",
    "en_def": "working correctly; practical and useful",
    "sentence": "Is the printer {{BLANK}}",
    "cn": "打印機正常工作嗎？"
  },
  {
    "word": "malfunction",
    "pos": "v.",
    "cn_def": "故障",
    "en_def": "(of a machine) to fail to work correctly",
    "sentence": "There was a {{BLANK}} in the system that caused the delay.",
    "cn": "系統出現故障導致了延誤。"
  },
  {
    "word": "territory",
    "pos": "n.",
    "cn_def": "領土",
    "en_def": "land that belongs to a country, person or animal",
    "sentence": "The cats marked their {{BLANK}} with scent.",
    "cn": "貓用氣味標記了他們的領土。"
  },
  {
    "word": "survive",
    "pos": "v.",
    "cn_def": "倖存下來",
    "en_def": "to continue to live after a dangerous event or difficult time",
    "sentence": "He managed to {{BLANK}} the harsh winter with limited resources.",
    "cn": "他設法在資源有限的情況下度過了嚴冬。"
  },
  {
    "word": "Survival",
    "pos": "n.",
    "cn_def": "生存",
    "en_def": "the state of continuing to live in spite of danger or difficulty",
    "sentence": "{{BLANK}} skills are essential for outdoor enthusiasts.",
    "cn": "對於戶外愛好者來說，生存技能至關重要。"
  },
  {
    "word": "identify",
    "pos": "v.",
    "cn_def": "識別",
    "en_def": "to recognize someone or something and say who or what they are",
    "sentence": "Can you {{BLANK}} the person in this photograph?",
    "cn": "你能識別這張照片中的這個人嗎？"
  },
  {
    "word": "identification",
    "pos": "n.",
    "cn_def": "身分證明",
    "en_def": "an official document that proves who you are; the act of recognizing someone",
    "sentence": "The suspect's {{BLANK}} was confirmed by fingerprints.",
    "cn": "嫌疑人的身份被指紋確認了。"
  },
  {
    "word": "identity",
    "pos": "n.",
    "cn_def": "身份",
    "en_def": "who a person is; the qualities that make a person or group different from others",
    "sentence": "She struggled to maintain her cultural {{BLANK}} while living abroad.",
    "cn": "她在國外生活時努力維持她的文化身份。"
  },
  {
    "word": "evidence",
    "pos": "n.",
    "cn_def": "證據",
    "en_def": "facts, signs or objects that make you believe something is true",
    "sentence": "The police found DNA {{BLANK}} linking the suspect to the crime scene.",
    "cn": "警方找到了將嫌疑人與犯罪現場聯繫起來的DNA證據。"
  },
  {
    "word": "capacity",
    "pos": "n.",
    "cn_def": "能力",
    "en_def": "the amount that something can hold or produce; the ability to do something",
    "sentence": "The stadium has a seating {{BLANK}} of 50,000 people.",
    "cn": "這個體育場的容納能力為50,000人。"
  },
  {
    "word": "capable",
    "pos": "adj.",
    "cn_def": "有能力的",
    "en_def": "having the ability or skill needed to do something",
    "sentence": "She's {{BLANK}} of handling the project on her own.",
    "cn": "她有能力獨立完成這個項目。"
  },
  {
    "word": "demonstrate",
    "pos": "v.",
    "cn_def": "示範說明",
    "en_def": "to show clearly how something works or how to do something",
    "sentence": "He will {{BLANK}} the new software to the team tomorrow.",
    "cn": "明天他將向團隊示範這款新軟件。"
  },
  {
    "word": "demonstration",
    "pos": "n.",
    "cn_def": "示範",
    "en_def": "an act of showing how something works or how to do something",
    "sentence": "The scientist gave a {{BLANK}} of the experiment at the conference.",
    "cn": "科學家在會議上對實驗進行了示範。"
  },
  {
    "word": "demonstrators",
    "pos": "n.",
    "cn_def": "示威者",
    "en_def": "a person who takes part in a public protest",
    "sentence": "The {{BLANK}} marched through the streets to protest peacefully.",
    "cn": "示威者在街上遊行以和平抗議。"
  },
  {
    "word": "scratched",
    "pos": "v.",
    "cn_def": "抓;擦傷;刮擦聲",
    "en_def": "to rub or cut a surface or your skin with something sharp",
    "sentence": "I {{BLANK}} my arm on the rough wall.",
    "cn": "我把手臂擦傷在粗糙的牆上。"
  },
  {
    "word": "scratch",
    "pos": "n.",
    "cn_def": "抓;擦傷;刮擦聲",
    "en_def": "a small cut or mark made by something sharp",
    "sentence": "He felt a {{BLANK}} on his arm after climbing the rough wall.",
    "cn": "他爬粗糙的牆後感到手臂上有一處擦傷。"
  }
];

const MCQS = [
  {
    "q": "Can you provide more ______ details about the incident?",
    "options": [
      "harmonious",
      "specific",
      "varying",
      "various"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Please ______ which items you need from the list.",
    "options": [
      "cooperate",
      "ignore",
      "malfunction",
      "specify"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Scientists need to ______ the data before drawing conclusions.",
    "options": [
      "analyze",
      "scratched",
      "identify",
      "cooperate"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The financial ______ showed a decline in profits.",
    "options": [
      "harmony",
      "scratch",
      "analysis",
      "analyst"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The market ______ predicted a rise in stock prices.",
    "options": [
      "capacity",
      "analyst",
      "evidence",
      "accuracy"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The exact ______ of the treasure remains unknown.",
    "options": [
      "analyst",
      "recognition",
      "territory",
      "location"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "We need to ______ the source of the problem before we can fix it.",
    "options": [
      "locate",
      "determine",
      "ignore",
      "exchange"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Their village is ______ and difficult to reach.",
    "options": [
      "harmonious",
      "accurate",
      "remote",
      "various"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "I ______ him from the photograph.",
    "options": [
      "recognize",
      "function",
      "determine",
      "ignore"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Her voice is ______ even in a noisy room.",
    "options": [
      "varying",
      "recognizable",
      "harmonious",
      "various"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "His ______ of the suspect was crucial to the investigation.",
    "options": [
      "Cooperation",
      "scratch",
      "recognition",
      "Survival"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The choir sang in perfect ______.",
    "options": [
      "analyst",
      "recognition",
      "demonstration",
      "harmony"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "They had a ______ relationship with their neighbors.",
    "options": [
      "capable",
      "varying",
      "harmonious",
      "recognizable"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "It's difficult to ______ the exact cause of the problem.",
    "options": [
      "vary",
      "exchange",
      "specify",
      "determine"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "She was ______ to finish the marathon despite the rain.",
    "options": [
      "determined",
      "harmonious",
      "capable",
      "accurate"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "His ______ to succeed kept him going through difficult times.",
    "options": [
      "identification",
      "determination",
      "scratch",
      "capacity"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The ______ of his predictions surprised everyone.",
    "options": [
      "accuracy",
      "recognition",
      "scratch",
      "variation"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Her answers were ______ and well-researched.",
    "options": [
      "recognizable",
      "accurate",
      "harmonious",
      "varying"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Prices ______ depending on the time of year.",
    "options": [
      "demonstrate",
      "function",
      "vary",
      "survive"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "There is a ______ in temperature between day and night.",
    "options": [
      "demonstration",
      "occasions",
      "analyst",
      "variation"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The store sells ______ types of imported chocolates.",
    "options": [
      "recognizable",
      "remote",
      "various",
      "rare"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "His mood was ______; you never knew how he would react.",
    "options": [
      "varying",
      "harmonious",
      "accurate",
      "determined"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "It's ______ to find such old books in such good condition.",
    "options": [
      "functional",
      "determined",
      "accurate",
      "rare"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "On special ______, we go out for dinner.",
    "options": [
      "demonstrators",
      "occasions",
      "accuracy",
      "ignorance"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The two companies agreed to ______ on the new project.",
    "options": [
      "cooperate",
      "exchange",
      "ignore",
      "analyze"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "______ between departments is crucial for the project's success.",
    "options": [
      "demonstrators",
      "Cooperation",
      "analysis",
      "occasions"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "We need to ______ ideas to improve our strategy.",
    "options": [
      "locate",
      "scratched",
      "exchange",
      "vary"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "You can't ______ the importance of regular exercise.",
    "options": [
      "identify",
      "analyze",
      "scratched",
      "ignore"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "His ______ of the rules led to his disqualification.",
    "options": [
      "territory",
      "determination",
      "ignorance",
      "location"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The new machine didn't ______ properly.",
    "options": [
      "demonstrate",
      "survive",
      "locate",
      "function"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Is the printer ______",
    "options": [
      "functional",
      "determined",
      "specific",
      "rare"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "There was a ______ in the system that caused the delay.",
    "options": [
      "vary",
      "malfunction",
      "demonstrate",
      "ignore"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The cats marked their ______ with scent.",
    "options": [
      "identification",
      "analyst",
      "territory",
      "scratch"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "He managed to ______ the harsh winter with limited resources.",
    "options": [
      "analyze",
      "survive",
      "function",
      "locate"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "______ skills are essential for outdoor enthusiasts.",
    "options": [
      "territory",
      "identification",
      "occasions",
      "Survival"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "Can you ______ the person in this photograph?",
    "options": [
      "identify",
      "survive",
      "cooperate",
      "exchange"
    ],
    "answer": 0,
    "vocabIndex": 35
  },
  {
    "q": "The suspect's ______ was confirmed by fingerprints.",
    "options": [
      "territory",
      "identification",
      "determination",
      "analysis"
    ],
    "answer": 1,
    "vocabIndex": 36
  },
  {
    "q": "She struggled to maintain her cultural ______ while living abroad.",
    "options": [
      "identity",
      "Cooperation",
      "location",
      "territory"
    ],
    "answer": 0,
    "vocabIndex": 37
  },
  {
    "q": "The police found DNA ______ linking the suspect to the crime scene.",
    "options": [
      "analysis",
      "variation",
      "accuracy",
      "evidence"
    ],
    "answer": 3,
    "vocabIndex": 38
  },
  {
    "q": "The stadium has a seating ______ of 50,000 people.",
    "options": [
      "determination",
      "location",
      "capacity",
      "identity"
    ],
    "answer": 2,
    "vocabIndex": 39
  },
  {
    "q": "She's ______ of handling the project on her own.",
    "options": [
      "recognizable",
      "determined",
      "rare",
      "capable"
    ],
    "answer": 3,
    "vocabIndex": 40
  },
  {
    "q": "He will ______ the new software to the team tomorrow.",
    "options": [
      "identify",
      "locate",
      "demonstrate",
      "determine"
    ],
    "answer": 2,
    "vocabIndex": 41
  },
  {
    "q": "The scientist gave a ______ of the experiment at the conference.",
    "options": [
      "scratch",
      "demonstration",
      "identification",
      "analyst"
    ],
    "answer": 1,
    "vocabIndex": 42
  },
  {
    "q": "The ______ marched through the streets to protest peacefully.",
    "options": [
      "demonstrators",
      "scratch",
      "determination",
      "analysis"
    ],
    "answer": 0,
    "vocabIndex": 43
  },
  {
    "q": "I ______ my arm on the rough wall.",
    "options": [
      "malfunction",
      "scratched",
      "specify",
      "cooperate"
    ],
    "answer": 1,
    "vocabIndex": 44
  },
  {
    "q": "He felt a ______ on his arm after climbing the rough wall.",
    "options": [
      "identification",
      "demonstrators",
      "Cooperation",
      "scratch"
    ],
    "answer": 3,
    "vocabIndex": 45
  }
];

const LOOKUP = {
  "specific": {
    "pos": "adj.",
    "en_def": "clearly stated; relating to one particular thing only",
    "cn_def": "特定的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "clearly stated; relating to one particular thing only",
        "cn_def": "特定的"
      }
    ]
  },
  "specify": {
    "pos": "v.",
    "en_def": "to state something clearly and exactly",
    "cn_def": "具體說明",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to state something clearly and exactly",
        "cn_def": "具體說明"
      }
    ]
  },
  "analyze": {
    "pos": "v.",
    "en_def": "to study something carefully in order to understand it",
    "cn_def": "分析",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to study something carefully in order to understand it",
        "cn_def": "分析"
      }
    ]
  },
  "analysis": {
    "pos": "n.",
    "en_def": "a careful study of something in order to understand it",
    "cn_def": "分析",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a careful study of something in order to understand it",
        "cn_def": "分析"
      }
    ]
  },
  "analyst": {
    "pos": "n.",
    "en_def": "a person whose job is to study a subject carefully and give opinions about it",
    "cn_def": "分析師",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person whose job is to study a subject carefully and give opinions about it",
        "cn_def": "分析師"
      }
    ]
  },
  "location": {
    "pos": "n.",
    "en_def": "the place where something is or happens",
    "cn_def": "位置",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the place where something is or happens",
        "cn_def": "位置"
      }
    ]
  },
  "locate": {
    "pos": "v.",
    "en_def": "to find the exact position of something",
    "cn_def": "找出⋯的位置",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to find the exact position of something",
        "cn_def": "找出⋯的位置"
      }
    ]
  },
  "remote": {
    "pos": "adj.",
    "en_def": "far away from where most people live",
    "cn_def": "偏遠的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "far away from where most people live",
        "cn_def": "偏遠的"
      }
    ]
  },
  "recognize": {
    "pos": "v.",
    "en_def": "to know who someone is or what something is because you have seen or heard them before",
    "cn_def": "認出",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to know who someone is or what something is because you have seen or heard them before",
        "cn_def": "認出"
      }
    ]
  },
  "recognizable": {
    "pos": "adj.",
    "en_def": "easy to know or identify",
    "cn_def": "可辨認的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "easy to know or identify",
        "cn_def": "可辨認的"
      }
    ]
  },
  "recognition": {
    "pos": "n.",
    "en_def": "the act of knowing who someone is or what something is",
    "cn_def": "辨認",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of knowing who someone is or what something is",
        "cn_def": "辨認"
      }
    ]
  },
  "harmony": {
    "pos": "n.",
    "en_def": "a state of peaceful agreement; a pleasant combination of musical notes",
    "cn_def": "和諧",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a state of peaceful agreement; a pleasant combination of musical notes",
        "cn_def": "和諧"
      }
    ]
  },
  "harmonious": {
    "pos": "adj.",
    "en_def": "friendly and peaceful; going well together",
    "cn_def": "融洽的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "friendly and peaceful; going well together",
        "cn_def": "融洽的"
      }
    ]
  },
  "determine": {
    "pos": "v.",
    "en_def": "to find out or decide something exactly",
    "cn_def": "判定",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to find out or decide something exactly",
        "cn_def": "判定"
      }
    ]
  },
  "determined": {
    "pos": "adj.",
    "en_def": "wanting to do something so much that you will not let anything stop you",
    "cn_def": "堅定的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "wanting to do something so much that you will not let anything stop you",
        "cn_def": "堅定的"
      }
    ]
  },
  "determination": {
    "pos": "n.",
    "en_def": "the quality of continuing to try to do something even when it is difficult",
    "cn_def": "決心",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of continuing to try to do something even when it is difficult",
        "cn_def": "決心"
      }
    ]
  },
  "accuracy": {
    "pos": "n.",
    "en_def": "the quality of being correct and exact",
    "cn_def": "準確",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of being correct and exact",
        "cn_def": "準確"
      }
    ]
  },
  "accurate": {
    "pos": "adj.",
    "en_def": "correct and exact; without mistakes",
    "cn_def": "準確的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "correct and exact; without mistakes",
        "cn_def": "準確的"
      }
    ]
  },
  "vary": {
    "pos": "v.",
    "en_def": "to be different from each other; to change according to the situation",
    "cn_def": "有差異",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to be different from each other; to change according to the situation",
        "cn_def": "有差異"
      }
    ]
  },
  "variation": {
    "pos": "n.",
    "en_def": "a change or difference in amount, level or form",
    "cn_def": "變化",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a change or difference in amount, level or form",
        "cn_def": "變化"
      }
    ]
  },
  "various": {
    "pos": "adj.",
    "en_def": "several different",
    "cn_def": "多種的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "several different",
        "cn_def": "多種的"
      }
    ]
  },
  "varying": {
    "pos": "adj.",
    "en_def": "changing or being different",
    "cn_def": "變化的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "changing or being different",
        "cn_def": "變化的"
      }
    ]
  },
  "rare": {
    "pos": "adj.",
    "en_def": "not seen or found very often",
    "cn_def": "罕見的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not seen or found very often",
        "cn_def": "罕見的"
      }
    ]
  },
  "occasion": {
    "pos": "n.",
    "en_def": "a special event; a time when something happens",
    "cn_def": "場合",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a special event; a time when something happens",
        "cn_def": "場合"
      }
    ]
  },
  "occasions": {
    "pos": "n.",
    "en_def": "a special event; a time when something happens",
    "cn_def": "場合",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a special event; a time when something happens",
        "cn_def": "場合"
      }
    ]
  },
  "cooperate": {
    "pos": "v.",
    "en_def": "to work together with other people to achieve something",
    "cn_def": "合作",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to work together with other people to achieve something",
        "cn_def": "合作"
      }
    ]
  },
  "cooperation": {
    "pos": "n.",
    "en_def": "the act of working together to achieve something",
    "cn_def": "合作",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of working together to achieve something",
        "cn_def": "合作"
      }
    ]
  },
  "exchange": {
    "pos": "v.",
    "en_def": "to give something to someone and receive something from them",
    "cn_def": "交換",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give something to someone and receive something from them",
        "cn_def": "交換"
      }
    ]
  },
  "ignore": {
    "pos": "v.",
    "en_def": "to pay no attention to someone or something",
    "cn_def": "忽視",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to pay no attention to someone or something",
        "cn_def": "忽視"
      }
    ]
  },
  "ignorance": {
    "pos": "n.",
    "en_def": "a lack of knowledge about something",
    "cn_def": "(對某事物)不了解",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a lack of knowledge about something",
        "cn_def": "(對某事物)不了解"
      }
    ]
  },
  "function": {
    "pos": "v.",
    "en_def": "to work or operate in the correct way",
    "cn_def": "起作用",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to work or operate in the correct way",
        "cn_def": "起作用"
      }
    ]
  },
  "functional": {
    "pos": "adj.",
    "en_def": "working correctly; practical and useful",
    "cn_def": "起作用的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "working correctly; practical and useful",
        "cn_def": "起作用的"
      }
    ]
  },
  "malfunction": {
    "pos": "v.",
    "en_def": "(of a machine) to fail to work correctly",
    "cn_def": "故障",
    "combined": [
      {
        "pos": "v.",
        "en_def": "(of a machine) to fail to work correctly",
        "cn_def": "故障"
      }
    ]
  },
  "territory": {
    "pos": "n.",
    "en_def": "land that belongs to a country, person or animal",
    "cn_def": "領土",
    "combined": [
      {
        "pos": "n.",
        "en_def": "land that belongs to a country, person or animal",
        "cn_def": "領土"
      }
    ]
  },
  "survive": {
    "pos": "v.",
    "en_def": "to continue to live after a dangerous event or difficult time",
    "cn_def": "倖存下來",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to continue to live after a dangerous event or difficult time",
        "cn_def": "倖存下來"
      }
    ]
  },
  "survival": {
    "pos": "n.",
    "en_def": "the state of continuing to live in spite of danger or difficulty",
    "cn_def": "生存",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of continuing to live in spite of danger or difficulty",
        "cn_def": "生存"
      }
    ]
  },
  "identify": {
    "pos": "v.",
    "en_def": "to recognize someone or something and say who or what they are",
    "cn_def": "識別",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to recognize someone or something and say who or what they are",
        "cn_def": "識別"
      }
    ]
  },
  "identification": {
    "pos": "n.",
    "en_def": "an official document that proves who you are; the act of recognizing someone",
    "cn_def": "身分證明",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an official document that proves who you are; the act of recognizing someone",
        "cn_def": "身分證明"
      }
    ]
  },
  "identity": {
    "pos": "n.",
    "en_def": "who a person is; the qualities that make a person or group different from others",
    "cn_def": "身份",
    "combined": [
      {
        "pos": "n.",
        "en_def": "who a person is; the qualities that make a person or group different from others",
        "cn_def": "身份"
      }
    ]
  },
  "evidence": {
    "pos": "n.",
    "en_def": "facts, signs or objects that make you believe something is true",
    "cn_def": "證據",
    "combined": [
      {
        "pos": "n.",
        "en_def": "facts, signs or objects that make you believe something is true",
        "cn_def": "證據"
      }
    ]
  },
  "capacity": {
    "pos": "n.",
    "en_def": "the amount that something can hold or produce; the ability to do something",
    "cn_def": "能力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the amount that something can hold or produce; the ability to do something",
        "cn_def": "能力"
      }
    ]
  },
  "capable": {
    "pos": "adj.",
    "en_def": "having the ability or skill needed to do something",
    "cn_def": "有能力的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having the ability or skill needed to do something",
        "cn_def": "有能力的"
      }
    ]
  },
  "demonstrate": {
    "pos": "v.",
    "en_def": "to show clearly how something works or how to do something",
    "cn_def": "示範說明",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to show clearly how something works or how to do something",
        "cn_def": "示範說明"
      }
    ]
  },
  "demonstration": {
    "pos": "n.",
    "en_def": "an act of showing how something works or how to do something",
    "cn_def": "示範",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an act of showing how something works or how to do something",
        "cn_def": "示範"
      }
    ]
  },
  "demonstrator": {
    "pos": "n.",
    "en_def": "a person who takes part in a public protest",
    "cn_def": "示威者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who takes part in a public protest",
        "cn_def": "示威者"
      }
    ]
  },
  "demonstrators": {
    "pos": "n.",
    "en_def": "a person who takes part in a public protest",
    "cn_def": "示威者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who takes part in a public protest",
        "cn_def": "示威者"
      }
    ]
  },
  "scratch": {
    "pos": "v.",
    "en_def": "to rub or cut a surface or your skin with something sharp",
    "cn_def": "抓;擦傷;刮擦聲",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to rub or cut a surface or your skin with something sharp",
        "cn_def": "抓;擦傷;刮擦聲"
      },
      {
        "pos": "n.",
        "en_def": "a small cut or mark made by something sharp",
        "cn_def": "抓;擦傷;刮擦聲"
      }
    ]
  },
  "scratched": {
    "pos": "v.",
    "en_def": "to rub or cut a surface or your skin with something sharp",
    "cn_def": "抓;擦傷;刮擦聲",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to rub or cut a surface or your skin with something sharp",
        "cn_def": "抓;擦傷;刮擦聲"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
