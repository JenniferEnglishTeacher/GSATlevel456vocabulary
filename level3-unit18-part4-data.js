// Part 4 Quiz Data: novelist – stare
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 18-4 - novelist – stare",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "novelist",
    "pos": "n.",
    "cn_def": "小說家（可數）",
    "en_def": "a person who writes novels",
    "sentence": "The famous {{BLANK}} spent three full years conducting historical research before publishing her bestselling mystery book.",
    "cn": "那位著名小說家在出版她暢銷的懸疑著作之前，花了整整三年進行歷史研究。"
  },
  {
    "word": "onto",
    "pos": "prep.",
    "cn_def": "到…之上；向…之上",
    "en_def": "moving to a position on the surface of",
    "sentence": "The energetic young boy managed to climb {{BLANK}} the sturdy wooden fence to watch the soccer game.",
    "cn": "那個精力充沛的小男孩成功爬到了結實的木柵欄之上看足球賽。"
  },
  {
    "word": "passion",
    "pos": "n.",
    "cn_def": "熱情；熱愛；激情（不可數/可數）",
    "en_def": "strong and barely controllable emotion; intense enthusiasm for something",
    "sentence": "From a very young age, Maria had a deep {{BLANK}} for playing classical piano and composing original melodies.",
    "cn": "瑪麗亞從很小的時候就對彈奏古典鋼琴與創作原創旋律充滿了深刻的熱情。"
  },
  {
    "word": "passionate",
    "pos": "adj.",
    "cn_def": "熱情的；熱烈的；激昂的",
    "en_def": "showing or caused by strong feelings or a strong belief",
    "sentence": "The environmental activist gave a {{BLANK}} speech that inspired hundreds of listeners to protect endangered wildlife.",
    "cn": "那位環保倡議者發表了一場熱情激昂的演說，激勵了數百名聽眾保護瀕危野生動物。"
  },
  {
    "word": "react",
    "pos": "v.",
    "cn_def": "作出反應；起化學反應；產生反響（動詞）",
    "en_def": "to act in response to something; to undergo a chemical reaction",
    "sentence": "How did the company employees {{BLANK}} when the chief executive announced the unexpected holiday bonus?",
    "cn": "當執行長宣布發放意想不到的節日獎金時，公司員工作何反應？"
  },
  {
    "word": "reaction",
    "pos": "n.",
    "cn_def": "反應；回應；反作用（可數/不可數）",
    "en_def": "an action performed or a feeling experienced in response to a situation or event",
    "sentence": "When the alarm suddenly rang loudly in the dark hallway, my immediate {{BLANK}} was to run toward the door.",
    "cn": "當走廊黑暗中警報突然響起時，我的第一直覺反應是衝向大門。"
  },
  {
    "word": "reasonable",
    "pos": "adj.",
    "cn_def": "合理的；公道的；明理通達的",
    "en_def": "having sound judgment; fair and sensible; not too expensive",
    "sentence": "The small family restaurant serves delicious homemade pasta and fresh garden salads at a very {{BLANK}} price.",
    "cn": "這家家庭小餐館以非常公道的價格提供美味的自製義大利麵與新鮮田園沙拉。"
  },
  {
    "word": "salary",
    "pos": "n.",
    "cn_def": "薪水；月薪（固定薪資，可數/不可數）",
    "en_def": "a fixed regular payment, typically paid on a monthly or annual basis",
    "sentence": "Although the startup offers a slightly lower initial {{BLANK}}, it provides wonderful health benefits and flexible working hours.",
    "cn": "雖然這家新創公司起初提供的薪水略低，但它提供了絕佳的健保福利與彈性工時。"
  },
  {
    "word": "significant",
    "pos": "adj.",
    "cn_def": "顯著重大的；意義深遠的",
    "en_def": "sufficiently great or important to be worthy of attention; noteworthy",
    "sentence": "Modern medical research has achieved {{BLANK}} progress in developing effective treatments for heart disease.",
    "cn": "現代醫學研究在開發心臟病有效治療方法方面取得了顯著重大的進展。"
  },
  {
    "word": "stare",
    "pos": "v./n.",
    "cn_def": "凝視；盯著看（動詞/名詞）",
    "en_def": "to look fixedly or vacantly at someone or something with one's eyes wide open",
    "sentence": "It is considered impolite to {{BLANK}} at people in public places, so try to avoid looking directly at strangers.",
    "cn": "在公共場所盯著他人看被認為是不禮貌的，因此盡量避免直視陌生人。"
  }
];

const MCQS = [
  {
    "q": "J.K. Rowling is a world-famous ______ who wrote the exciting Harry Potter fantasy books.",
    "options": [
      "passion",
      "novelist",
      "salary",
      "reaction"
    ],
    "answer": 1,
    "cn": "J·K·羅琳是撰寫精彩《哈利波特》奇幻書籍的舉世聞名小說家。",
    "vocabIndex": 0
  },
  {
    "q": "From an early age, Linda showed a great ______ for learning foreign languages and playing piano.",
    "options": [
      "reaction",
      "salary",
      "novelist",
      "passion"
    ],
    "answer": 3,
    "cn": "從很小的時候起，琳達就展現出對學習外語和彈鋼琴的強烈熱情／熱愛。",
    "vocabIndex": 2
  },
  {
    "q": "Eating seafood gave the young boy an itchy skin ______ with many small red spots.",
    "options": [
      "reaction",
      "novelist",
      "passion",
      "salary"
    ],
    "answer": 0,
    "cn": "吃海鮮讓這個小男孩出現發癢的皮膚過敏反應，長了許多紅色小疹子。",
    "vocabIndex": 5
  },
  {
    "q": "After working hard at the hospital for one year, the kind nurse received a ten-percent ______ rise.",
    "options": [
      "novelist",
      "passion",
      "salary",
      "reaction"
    ],
    "answer": 2,
    "cn": "在醫院辛勤工作一年後，那位仁慈的護理師獲得了百分之十的加薪。",
    "vocabIndex": 7
  },
  {
    "q": "The curious little boy climbed ______ the table to reach the sweet strawberry jam.",
    "options": [
      "onto",
      "apart",
      "bare",
      "bold"
    ],
    "answer": 0,
    "cn": "好奇的小男孩爬到桌子上面去拿甜草莓醬。",
    "vocabIndex": 1
  },
  {
    "q": "The energetic gym teacher is very ______ about helping young students stay healthy and fit.",
    "options": [
      "reasonable",
      "passionate",
      "significant",
      "onto"
    ],
    "answer": 1,
    "cn": "那位精力充沛的體育老師對於幫助年幼學生保持健康與體魄充滿熱忱。",
    "vocabIndex": 3
  },
  {
    "q": "Ten dollars is a very ______ price to pay for such a delicious and healthy lunch.",
    "options": [
      "passionate",
      "significant",
      "reasonable",
      "onto"
    ],
    "answer": 2,
    "cn": "買一份如此美味且健康的午餐，十美元是一個非常公道合理的價格。",
    "vocabIndex": 6
  },
  {
    "q": "Scientists made a ______ discovery that will help doctors treat serious lung diseases.",
    "options": [
      "onto",
      "reasonable",
      "passionate",
      "significant"
    ],
    "answer": 3,
    "cn": "科學家們做出了顯著重大的發現，這將有助於醫生治療嚴重的肺部疾病。",
    "vocabIndex": 8
  },
  {
    "q": "When dad told the funny joke, everyone in the living room ______ by laughing loudly.",
    "options": [
      "reacted",
      "stared",
      "salaried",
      "novelized"
    ],
    "answer": 0,
    "cn": "當爸爸講那個有趣的笑話時，客廳裡的每個人都以大笑來回應反應。",
    "vocabIndex": 4
  },
  {
    "q": "It is impolite to ______ at strangers on the bus, so you should look out the window instead.",
    "options": [
      "react",
      "stare",
      "salary",
      "novelize"
    ],
    "answer": 1,
    "cn": "在公車上盯著陌生人看是不禮貌的，所以你應該看向窗外。",
    "vocabIndex": 9
  },
  {
    "q": "The tired student sat by the library window and ______ blankly into space for ten minutes.",
    "options": [
      "reacted",
      "salaried",
      "passionate",
      "stared"
    ],
    "answer": 3,
    "cn": "疲憊的學生坐在圖書館窗邊，茫然地望著天空發呆了十分鐘。",
    "vocabIndex": 9
  },
  {
    "q": "How did the school principal ______ to the bad news about the broken water pipe?",
    "options": [
      "salary",
      "stare",
      "react",
      "onto"
    ],
    "answer": 2,
    "cn": "校長對水管破裂的壞消息作何反應？",
    "vocabIndex": 4
  },
  {
    "q": "The puppy jumped ______ the soft sofa as soon as mom turned her back.",
    "options": [
      "bare",
      "apart",
      "bold",
      "onto"
    ],
    "answer": 3,
    "cn": "媽媽一轉身，小狗立刻跳到柔軟的沙發上。",
    "vocabIndex": 1
  },
  {
    "q": "The speaker gave a ______ speech about environmental protection that moved many listeners to tears.",
    "options": [
      "reasonable",
      "significant",
      "passionate",
      "bare"
    ],
    "answer": 2,
    "cn": "演講者發表了一場關於環境保護的熱情激昂演說，讓許多聽眾感動落淚。",
    "vocabIndex": 3
  },
  {
    "q": "It is completely ______ to ask for a warm jacket when you are walking outside in the snow.",
    "options": [
      "passionate",
      "reasonable",
      "significant",
      "bold"
    ],
    "answer": 1,
    "cn": "當你在雪地裡行走時，要求穿一件暖和的外套是完全合情合理的。",
    "vocabIndex": 6
  },
  {
    "q": "Regular exercise plays a ______ part in keeping your heart strong and healthy as you grow older.",
    "options": [
      "significant",
      "reasonable",
      "passionate",
      "bare"
    ],
    "answer": 0,
    "cn": "隨著年齡增長，規律運動在保持心臟強壯健康方面扮演著極其重要的角色。",
    "vocabIndex": 8
  },
  {
    "q": "The young girl stepped ______ the stage and smiled warmly at the large audience.",
    "options": [
      "bare",
      "apart",
      "bold",
      "onto"
    ],
    "answer": 3,
    "cn": "小女孩走上舞台，向台下廣大的觀眾熱情微笑。",
    "vocabIndex": 1
  },
  {
    "q": "My uncle is a talented ______ whose mystery books are loved by thousands of readers.",
    "options": [
      "novelist",
      "salary",
      "passion",
      "reaction"
    ],
    "answer": 0,
    "cn": "我叔叔是一位才華洋溢的小說家，他的懸疑小說受到數千名讀者的喜愛。",
    "vocabIndex": 0
  },
  {
    "q": "The teacher told the students that they should always ______ and follow their dreams.",
    "options": [
      "stare blankly",
      "react violently",
      "pursue their passion",
      "jump onto"
    ],
    "answer": 2,
    "cn": "老師告訴學生們，他們應該始終追求自己的熱愛並堅持自己的夢想。",
    "vocabIndex": 2
  },
  {
    "q": "When the fire alarm rang, the firefighters' ______ was to put on their protective gear immediately.",
    "options": [
      "famous novelist",
      "immediate reaction",
      "monthly salary",
      "reasonable price"
    ],
    "answer": 1,
    "cn": "當火警警報響起時，消防隊員的第一時間反應是立即穿上防護裝備。",
    "vocabIndex": 5
  },
  {
    "q": "The market stall sells fresh organic apples at a very ______ that everyone can afford.",
    "options": [
      "reasonable price",
      "immediate reaction",
      "famous novelist",
      "monthly salary"
    ],
    "answer": 0,
    "cn": "市場攤位以每個人都負擔得起的公道合理價格販售新鮮有機蘋果。",
    "vocabIndex": 6
  },
  {
    "q": "After one year of good service, the office manager was happy to get a ten-percent ______.",
    "options": [
      "famous novelist",
      "reasonable price",
      "immediate reaction",
      "salary increase"
    ],
    "answer": 3,
    "cn": "在表現良好的一年後，辦公室經理很高興獲得了百分之十的加薪。",
    "vocabIndex": 7
  },
  {
    "q": "Eating healthy food and exercising daily plays a ______ in preventing illnesses.",
    "options": [
      "salary increase",
      "reasonable price",
      "significant role",
      "famous novelist"
    ],
    "answer": 2,
    "cn": "每天健康飲食和運動在預防疾病方面扮演著極其重要的角色。",
    "vocabIndex": 8
  },
  {
    "q": "The daydreaming boy sat at his desk and began to ______ through the classroom window.",
    "options": [
      "salary increase",
      "stare blankly",
      "pursue passion",
      "react quickly"
    ],
    "answer": 1,
    "cn": "正在做白日夢的小男孩坐在書桌前，透過教室窗戶茫然地凝視發呆。",
    "vocabIndex": 9
  },
  {
    "q": "She was so allergic to cats that touching the fur caused a serious ______ with red spots.",
    "options": [
      "reasonable price",
      "famous novelist",
      "allergic reaction",
      "salary increase"
    ],
    "answer": 2,
    "cn": "她對貓極度過敏，摸了貓毛引發了帶有紅疹的嚴重過敏反應。",
    "vocabIndex": 5
  }
];

const LOOKUP = {
  "novelist": {
    "pos": "n.",
    "en_def": "a person who writes novels",
    "cn_def": "小說家（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who writes novels",
        "cn_def": "小說家（可數）"
      }
    ]
  },
  "onto": {
    "pos": "prep.",
    "en_def": "moving to a position on the surface of",
    "cn_def": "到…之上；向…之上",
    "combined": [
      {
        "pos": "prep.",
        "en_def": "moving to a position on the surface of",
        "cn_def": "到…之上；向…之上"
      }
    ]
  },
  "passion": {
    "pos": "n.",
    "en_def": "strong and barely controllable emotion; intense enthusiasm for something",
    "cn_def": "熱情；熱愛；激情（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "strong and barely controllable emotion; intense enthusiasm for something",
        "cn_def": "熱情；熱愛；激情（不可數/可數）"
      }
    ]
  },
  "passionate": {
    "pos": "adj.",
    "en_def": "showing or caused by strong feelings or a strong belief",
    "cn_def": "熱情的；熱烈的；激昂的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing or caused by strong feelings or a strong belief",
        "cn_def": "熱情的；熱烈的；激昂的"
      }
    ]
  },
  "react": {
    "pos": "v.",
    "en_def": "to act in response to something; to undergo a chemical reaction",
    "cn_def": "作出反應；起化學反應；產生反響（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to act in response to something; to undergo a chemical reaction",
        "cn_def": "作出反應；起化學反應；產生反響（動詞）"
      }
    ]
  },
  "reaction": {
    "pos": "n.",
    "en_def": "an action performed or a feeling experienced in response to a situation or event",
    "cn_def": "反應；回應；反作用（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an action performed or a feeling experienced in response to a situation or event",
        "cn_def": "反應；回應；反作用（可數/不可數）"
      }
    ]
  },
  "reasonable": {
    "pos": "adj.",
    "en_def": "having sound judgment; fair and sensible; not too expensive",
    "cn_def": "合理的；公道的；明理通達的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having sound judgment; fair and sensible; not too expensive",
        "cn_def": "合理的；公道的；明理通達的"
      }
    ]
  },
  "salary": {
    "pos": "n.",
    "en_def": "a fixed regular payment, typically paid on a monthly or annual basis",
    "cn_def": "薪水；月薪（固定薪資，可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a fixed regular payment, typically paid on a monthly or annual basis",
        "cn_def": "薪水；月薪（固定薪資，可數/不可數）"
      }
    ]
  },
  "significant": {
    "pos": "adj.",
    "en_def": "sufficiently great or important to be worthy of attention; noteworthy",
    "cn_def": "顯著重大的；意義深遠的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "sufficiently great or important to be worthy of attention; noteworthy",
        "cn_def": "顯著重大的；意義深遠的"
      }
    ]
  },
  "stare": {
    "pos": "v./n.",
    "en_def": "to look fixedly or vacantly at someone or something with one's eyes wide open",
    "cn_def": "凝視；盯著看（動詞/名詞）",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "to look fixedly or vacantly at someone or something with one's eyes wide open",
        "cn_def": "凝視；盯著看（動詞/名詞）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
