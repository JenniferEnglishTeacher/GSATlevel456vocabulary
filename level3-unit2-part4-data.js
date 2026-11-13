// Part 4 Quiz Data: pat – rectangle
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 2-4 - pat – rectangle",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "pat",
    "pos": "v.",
    "cn_def": "輕拍；撫拍（動詞）",
    "en_def": "to touch someone or something gently and quickly with the flat surface of the hand",
    "sentence": "When Emily stepped out of the bath, she used a soft cotton towel to {{BLANK}} her face dry.",
    "cn": "當艾蜜莉洗完澡出來時，她用一條柔軟的棉毛巾將臉部輕拍吸乾。"
  },
  {
    "word": "pat",
    "pos": "n.",
    "cn_def": "輕拍；輕撫；一小塊（奶油）（可數）",
    "en_def": "a quick, gentle tap with the flat of the hand; a small shaped mass of butter",
    "sentence": "She felt a gentle and comforting {{BLANK}} on her shoulder, and turning around, she saw her best friend smiling.",
    "cn": "她感到肩膀上傳來一記溫柔且安慰的輕拍，轉過身來，看見她最好的朋友正微笑著。"
  },
  {
    "word": "pat yourself on the back",
    "pos": "v.phr.",
    "cn_def": "自我稱讚；為自己感到自豪",
    "en_def": "to praise or congratulate oneself for an achievement or good deed",
    "sentence": "After completing the complicated financial report ahead of the strict deadline, you really should {{BLANK}}.",
    "cn": "在嚴格的截止日前提前完成了這份複雜的財務報告，你真的應該好好稱讚自己／為自己喝采。"
  },
  {
    "word": "pause",
    "pos": "v.",
    "cn_def": "暫停；停頓（動詞）",
    "en_def": "to stop an action, speech, or process temporarily before starting again",
    "sentence": "Please {{BLANK}} the streaming movie for a minute so I can get a glass of water from the kitchen.",
    "cn": "請先將線上串流電影暫停一分鐘，好讓我去廚房倒一杯水喝。"
  },
  {
    "word": "pause",
    "pos": "n.",
    "cn_def": "停頓；暫停；暫停鍵（可數）",
    "en_def": "a temporary stop in action or speech; a button that pauses playback",
    "sentence": "There was an awkward {{BLANK}} in the room while the speaker tried desperately to remember what to say next.",
    "cn": "當演講者拼命試圖想起接下來要講什麼時，整個房間陷入了一陣尷尬的停頓中斷。"
  },
  {
    "word": "peanuts",
    "pos": "n.",
    "cn_def": "花生；花生米（可數）",
    "en_def": "an oval edible seed that develops in pods underground and is used for snacks and oil",
    "sentence": "Because my younger brother is severely allergic to {{BLANK}}, our family never buys cookies containing nuts.",
    "cn": "因為我弟弟對花生嚴重過敏，我們家從不購買含有堅果的餅乾。"
  },
  {
    "word": "pilot",
    "pos": "n.",
    "cn_def": "飛行員；機長；領航員（可數）",
    "en_def": "a person qualified to operate the flying controls of an aircraft or direct a ship",
    "sentence": "Despite the severe typhoon winds, the highly experienced airline {{BLANK}} landed the commercial aircraft safely at the airport.",
    "cn": "儘管遭遇強烈的颱風風力，經驗極其豐富的民航機長／飛行員依然將客機安全降落在機場。"
  },
  {
    "word": "pilot",
    "pos": "v.",
    "cn_def": "駕駛（飛機／船隻）；引導；引領（動詞）",
    "en_def": "to act as a pilot of an aircraft or boat; to guide or lead",
    "sentence": "Debbie has been studying aviation theory and hopes to learn how to {{BLANK}} a light airplane this summer.",
    "cn": "黛比一直在研讀航空理論，並希望今年夏天能學習如何駕駛一架輕型飛機。"
  },
  {
    "word": "pilot",
    "pos": "adj.",
    "cn_def": "試驗性的；試點的；試辦的",
    "en_def": "done as a small-scale trial, test, or experiment before full introduction",
    "sentence": "Before introducing the new cancer medicine nationwide, hospital researchers conducted a careful {{BLANK}} study on fifty volunteer patients.",
    "cn": "在全國推廣這款抗癌新藥之前，醫院研究人員在五十名志願病患身上進行了審慎的試驗性前導研究。"
  },
  {
    "word": "pineapple",
    "pos": "n.",
    "cn_def": "鳳梨；菠蘿（可數/不可數）",
    "en_def": "a large juicy tropical fruit with tough spiky skin and sweet yellow flesh",
    "sentence": "Whenever foreign friends visit Taiwan, they always buy delicious traditional {{BLANK}} cakes as souvenirs for their families.",
    "cn": "每當外國朋友來台灣旅遊時，他們總是會購買美味的傳統鳳梨酥作為伴手禮送給家人。"
  },
  {
    "word": "raw",
    "pos": "adj.",
    "cn_def": "生的；未烹煮的；未加工的；原始的",
    "en_def": "not cooked; in a natural state and not yet processed or treated",
    "sentence": "Because James has a sensitive stomach, he strictly avoids eating {{BLANK}} seafood and never goes to sushi bars.",
    "cn": "因為詹姆斯的胃腸很敏感，他嚴格避免吃生的海鮮，而且從不去壽司店。"
  },
  {
    "word": "receiver",
    "pos": "n.",
    "cn_def": "電話話筒；接收器；收件人（可數）",
    "en_def": "the part of a telephone that you hold to your ear and mouth; an electronic device that receives radio or TV signals; a recipient",
    "sentence": "Felix held the telephone {{BLANK}} between his ear and shoulder so that he could use both hands to type.",
    "cn": "費利克斯將電話話筒／聽筒夾在耳朵和肩膀之間，以便他能用雙手打字。"
  },
  {
    "word": "recorder",
    "pos": "n.",
    "cn_def": "錄音機；記錄器；木笛／直笛（可數）",
    "en_def": "an electronic apparatus for recording sound or video; a woodwind musical instrument with finger holes",
    "sentence": "The investigative reporter placed a compact digital voice {{BLANK}} on the table to record the interview accurately.",
    "cn": "那位調查記者在桌上放置了一台精巧的數位語音錄音機，以便準確記錄訪談內容。"
  },
  {
    "word": "rectangle",
    "pos": "n.",
    "cn_def": "長方形；矩形（可數）",
    "en_def": "a four-sided plane figure with four straight sides and four right angles, especially with unequal adjacent sides",
    "sentence": "The official soccer field is a massive green {{BLANK}} with white boundary lines marked clearly across the grass.",
    "cn": "正式的足球場是一個巨大的綠色長方形，草地上清晰標記著白色邊界線。"
  }
];

const MCQS = [
  {
    "q": "The soccer field is a large green ______ marked with white boundary lines.",
    "options": [
      "peanut",
      "rectangle",
      "pineapple",
      "pilot"
    ],
    "answer": 1,
    "cn": "足球場是一個用白色邊界線標記的大型綠色長方形。",
    "vocabIndex": 13
  },
  {
    "q": "The airline ______ was able to land the big passenger airplane safely in the wind.",
    "options": [
      "receiver",
      "rectangle",
      "peanut",
      "pilot"
    ],
    "answer": 3,
    "cn": "民航機長／飛行員能夠在狂風中將大型客機安全著陸。",
    "vocabIndex": 6
  },
  {
    "q": "My little brother loves eating bread with sweet and creamy ______ butter every morning.",
    "options": [
      "rectangle",
      "pilot",
      "peanut",
      "receiver"
    ],
    "answer": 2,
    "cn": "我弟弟每天早上喜歡吃塗滿香甜濃郁花生醬的麵包。",
    "vocabIndex": 5
  },
  {
    "q": "Taiwan is very famous for its sweet tropical fruits like mangoes and juicy ______.",
    "options": [
      "pineapples",
      "rectangles",
      "pilots",
      "receivers"
    ],
    "answer": 0,
    "cn": "台灣以其甜美的熱帶水果聞名，例如芒果和多汁的鳳梨。",
    "vocabIndex": 9
  },
  {
    "q": "When the telephone rang, dad picked up the ______ and answered politely.",
    "options": [
      "pineapple",
      "peanut",
      "receiver",
      "rectangle"
    ],
    "answer": 2,
    "cn": "當電話鈴響時，爸爸拿起話筒／聽筒並有禮貌地接聽。",
    "vocabIndex": 11
  },
  {
    "q": "In our music class today, we learned how to play a song on a wooden ______.",
    "options": [
      "peanut",
      "recorder",
      "pineapple",
      "pilot"
    ],
    "answer": 1,
    "cn": "在我們今天的音樂課上，我們學習了如何用木製直笛／木笛吹奏一首歌曲。",
    "vocabIndex": 12
  },
  {
    "q": "The package could not be delivered because the ______'s name was not written on it.",
    "options": [
      "rectangle",
      "peanut",
      "pineapple",
      "receiver"
    ],
    "answer": 3,
    "cn": "這個包裹無法投遞，因為上面沒有寫上收件人的姓名。",
    "vocabIndex": 11
  },
  {
    "q": "The grandfather gave the little puppy a warm and gentle ______ on its head.",
    "options": [
      "pat",
      "pineapple",
      "peanut",
      "rectangle"
    ],
    "answer": 0,
    "cn": "爺爺在小幼犬的頭上給了一記溫柔親切的輕拍／撫拍。",
    "vocabIndex": 0
  },
  {
    "q": "There was a long ______ in the room while the speaker looked for his missing papers.",
    "options": [
      "peanut",
      "pineapple",
      "pause",
      "rectangle"
    ],
    "answer": 2,
    "cn": "當演講者尋找遺失的文件時，房間裡出現了很長一段停頓中斷。",
    "vocabIndex": 3
  },
  {
    "q": "The journalist used a small voice ______ to record the president's speech word for word.",
    "options": [
      "rectangle",
      "pineapple",
      "peanut",
      "recorder"
    ],
    "answer": 3,
    "cn": "記者使用了一台小語音錄音機將總統的演說一字不漏地錄了下來。",
    "vocabIndex": 12
  },
  {
    "q": "Mom ______ the friendly dog gently while we walked through the sunny park.",
    "options": [
      "patted",
      "rawed",
      "paused",
      "piloted"
    ],
    "answer": 0,
    "cn": "當我們走過陽光明媚的公園時，媽媽溫柔地撫拍／輕撫了那隻友善的狗。",
    "vocabIndex": 0
  },
  {
    "q": "Please ______ the video for a minute so I can answer this urgent telephone call.",
    "options": [
      "pat",
      "pause",
      "pilot",
      "raw"
    ],
    "answer": 1,
    "cn": "請先將影片暫停一分鐘，好讓我接聽這通緊急電話。",
    "vocabIndex": 3
  },
  {
    "q": "Debbie is taking flying lessons because she wants to ______ an airplane someday.",
    "options": [
      "pause",
      "pat",
      "pilot",
      "raw"
    ],
    "answer": 2,
    "cn": "黛比正在上飛行課程，因為她希望有一天能駕駛飛機。",
    "vocabIndex": 6
  },
  {
    "q": "The teacher ______ for a few seconds before answering the difficult question.",
    "options": [
      "patted",
      "paused",
      "piloted",
      "recorded"
    ],
    "answer": 1,
    "cn": "老師在回答那個困難問題之前停頓了幾秒鐘。",
    "vocabIndex": 3
  },
  {
    "q": "The coach smiled and ______ Tom on the back for scoring the winning goal.",
    "options": [
      "patted",
      "paused",
      "piloted",
      "recorded"
    ],
    "answer": 0,
    "cn": "教練微笑並輕拍提姆的後背，稱讚他踢進了致勝球。",
    "vocabIndex": 0
  },
  {
    "q": "James does not eat ______ fish or meat because he prefers cooked meals.",
    "options": [
      "pat",
      "pause",
      "pilot",
      "raw"
    ],
    "answer": 3,
    "cn": "詹姆斯不吃生的魚或肉，因為他比較喜歡煮熟的餐點。",
    "vocabIndex": 10
  },
  {
    "q": "The school is running a ______ program to see if tablet computers help students learn faster.",
    "options": [
      "pilot",
      "raw",
      "pat",
      "rectangle"
    ],
    "answer": 0,
    "cn": "學校正在開展一項試驗性試辦計畫，看看平板電腦是否能幫助學生學得更快。",
    "vocabIndex": 6
  },
  {
    "q": "Factories import ______ materials like oil and wood to make daily consumer products.",
    "options": [
      "pilot",
      "raw",
      "pat",
      "rectangle"
    ],
    "answer": 1,
    "cn": "工廠進口石油和木材等原始未加工原料來製造日常消費品。",
    "vocabIndex": 10
  },
  {
    "q": "Doctors conducted a small ______ study on thirty volunteers before selling the new drug.",
    "options": [
      "raw",
      "pat",
      "pilot",
      "rectangle"
    ],
    "answer": 2,
    "cn": "醫生在銷售新藥之前，在三十名志願者身上進行了一項小型試驗性研究。",
    "vocabIndex": 6
  },
  {
    "q": "Be careful when handling ______ chicken in the kitchen because it can carry bacteria.",
    "options": [
      "paused",
      "pilot",
      "pat",
      "raw"
    ],
    "answer": 3,
    "cn": "在廚房處理生雞肉時要小心，因為它可能帶有細菌。",
    "vocabIndex": 10
  },
  {
    "q": "After studying hard and getting the best test grade, you should ______.",
    "options": [
      "birds of a feather flock together",
      "pat yourself on the back",
      "sink or swim",
      "bleed them dry"
    ],
    "answer": 1,
    "cn": "在刻苦學習並取得最高考成績後，你真應該為自己感到自豪／稱讚自己。",
    "vocabIndex": 2
  },
  {
    "q": "Many tourists visiting Taiwan love to buy boxes of sweet ______ for their friends.",
    "options": [
      "pineapple cake",
      "raw meat",
      "telephone receiver",
      "voice recorder"
    ],
    "answer": 0,
    "cn": "許多來台灣旅遊的遊客喜歡購買幾盒甜美可口的鳳梨酥送給朋友。",
    "vocabIndex": 9
  },
  {
    "q": "I like to eat whole wheat toast spread with delicious and creamy ______ for breakfast.",
    "options": [
      "raw meat",
      "telephone receiver",
      "voice recorder",
      "peanut butter"
    ],
    "answer": 3,
    "cn": "我早餐喜歡吃塗抹了美味濃郁花生醬的全麥吐司。",
    "vocabIndex": 5
  },
  {
    "q": "The hospital did a quick ______ to see if the new medicine helped sick patients.",
    "options": [
      "peanut butter",
      "raw meat",
      "pilot study",
      "pineapple cake"
    ],
    "answer": 2,
    "cn": "醫院進行了一項快速的前導試驗性研究，看看新藥是否有助於患病病患。",
    "vocabIndex": 6
  },
  {
    "q": "Eating ______ can cause stomach trouble, so please make sure the food is cooked well.",
    "options": [
      "raw meat",
      "peanut butter",
      "pineapple cake",
      "pilot study"
    ],
    "answer": 0,
    "cn": "吃生肉會引起腸胃問題，因此請確保食物徹底煮熟。",
    "vocabIndex": 10
  }
];

const LOOKUP = {
  "pat": {
    "pos": "v.",
    "en_def": "to touch someone or something gently and quickly with the flat surface of the hand",
    "cn_def": "輕拍；撫拍（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to touch someone or something gently and quickly with the flat surface of the hand",
        "cn_def": "輕拍；撫拍（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a quick, gentle tap with the flat of the hand; a small shaped mass of butter",
        "cn_def": "輕拍；輕撫；一小塊（奶油）（可數）"
      }
    ]
  },
  "pat oneself on the back": {
    "pos": "v.phr.",
    "en_def": "to praise or congratulate oneself for an achievement or good deed",
    "cn_def": "自我稱讚；為自己感到自豪",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to praise or congratulate oneself for an achievement or good deed",
        "cn_def": "自我稱讚；為自己感到自豪"
      }
    ]
  },
  "pat yourself on the back": {
    "pos": "v.phr.",
    "en_def": "to praise or congratulate oneself for an achievement or good deed",
    "cn_def": "自我稱讚；為自己感到自豪",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to praise or congratulate oneself for an achievement or good deed",
        "cn_def": "自我稱讚；為自己感到自豪"
      }
    ]
  },
  "pause": {
    "pos": "v.",
    "en_def": "to stop an action, speech, or process temporarily before starting again",
    "cn_def": "暫停；停頓（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to stop an action, speech, or process temporarily before starting again",
        "cn_def": "暫停；停頓（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a temporary stop in action or speech; a button that pauses playback",
        "cn_def": "停頓；暫停；暫停鍵（可數）"
      }
    ]
  },
  "peanuts": {
    "pos": "n.",
    "en_def": "an oval edible seed that develops in pods underground and is used for snacks and oil",
    "cn_def": "花生；花生米（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an oval edible seed that develops in pods underground and is used for snacks and oil",
        "cn_def": "花生；花生米（可數）"
      }
    ]
  },
  "peanut": {
    "pos": "n.",
    "en_def": "an oval edible seed that develops in pods underground and is used for snacks and oil",
    "cn_def": "花生；花生米（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an oval edible seed that develops in pods underground and is used for snacks and oil",
        "cn_def": "花生；花生米（可數）"
      }
    ]
  },
  "pilot": {
    "pos": "n.",
    "en_def": "a person qualified to operate the flying controls of an aircraft or direct a ship",
    "cn_def": "飛行員；機長；領航員（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person qualified to operate the flying controls of an aircraft or direct a ship",
        "cn_def": "飛行員；機長；領航員（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to act as a pilot of an aircraft or boat; to guide or lead",
        "cn_def": "駕駛（飛機／船隻）；引導；引領（動詞）"
      },
      {
        "pos": "adj.",
        "en_def": "done as a small-scale trial, test, or experiment before full introduction",
        "cn_def": "試驗性的；試點的；試辦的"
      }
    ]
  },
  "pineapple": {
    "pos": "n.",
    "en_def": "a large juicy tropical fruit with tough spiky skin and sweet yellow flesh",
    "cn_def": "鳳梨；菠蘿（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large juicy tropical fruit with tough spiky skin and sweet yellow flesh",
        "cn_def": "鳳梨；菠蘿（可數/不可數）"
      }
    ]
  },
  "raw": {
    "pos": "adj.",
    "en_def": "not cooked; in a natural state and not yet processed or treated",
    "cn_def": "生的；未烹煮的；未加工的；原始的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not cooked; in a natural state and not yet processed or treated",
        "cn_def": "生的；未烹煮的；未加工的；原始的"
      }
    ]
  },
  "receiver": {
    "pos": "n.",
    "en_def": "the part of a telephone that you hold to your ear and mouth; an electronic device that receives radio or TV signals; a recipient",
    "cn_def": "電話話筒；接收器；收件人（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the part of a telephone that you hold to your ear and mouth; an electronic device that receives radio or TV signals; a recipient",
        "cn_def": "電話話筒；接收器；收件人（可數）"
      }
    ]
  },
  "recorder": {
    "pos": "n.",
    "en_def": "an electronic apparatus for recording sound or video; a woodwind musical instrument with finger holes",
    "cn_def": "錄音機；記錄器；木笛／直笛（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an electronic apparatus for recording sound or video; a woodwind musical instrument with finger holes",
        "cn_def": "錄音機；記錄器；木笛／直笛（可數）"
      }
    ]
  },
  "rectangle": {
    "pos": "n.",
    "en_def": "a four-sided plane figure with four straight sides and four right angles, especially with unequal adjacent sides",
    "cn_def": "長方形；矩形（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a four-sided plane figure with four straight sides and four right angles, especially with unequal adjacent sides",
        "cn_def": "長方形；矩形（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
