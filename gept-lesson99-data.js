// Lesson 99 Quiz Data: Information Resources, Organization, Aid Supplies, Infrastructure & Willingness
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 99 - Information Resources, Organization, Aid Supplies, Infrastructure & Willingness",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "source",
    "pos": "n.",
    "cn_def": "來源；出處",
    "en_def": "the place or thing where something comes from; an information provider",
    "sentence": "The internet has become the primary {{BLANK}} of international news for university students today.",
    "cn": "網際網路已成為當今大學生獲取國際新聞的主要來源。"
  },
  {
    "word": "stamp",
    "pos": "n. / v.",
    "cn_def": "郵票；印章；蓋章；踩踏",
    "en_def": "a small piece of paper stuck on a letter; to put a foot down hard",
    "sentence": "Don't forget to affix an airmail {{BLANK}} to the envelope before dropping it into the postbox.",
    "cn": "在將信封投入郵筒之前，別忘了在信封上貼上一枚航空郵票。"
  },
  {
    "word": "step",
    "pos": "n. / v.",
    "cn_def": "步伐；步驟；踏步",
    "en_def": "the movement of lifting foot; a stage in a process",
    "sentence": "The government took a decisive {{BLANK}} forward by investing heavily in renewable solar energy systems.",
    "cn": "政府藉由大力投資可再生太陽能系統，向前邁出了決定性的一步（步驟）。"
  },
  {
    "word": "stick",
    "pos": "n. / v.",
    "cn_def": "枝條；棍棒；黏貼；卡住",
    "en_def": "a thin piece of wood; to attach with glue; to push into",
    "sentence": "The campers collected dry wooden {{BLANK}}s in the pine forest to build a warm fire for the evening.",
    "cn": "露營者在松樹林裡收集乾燥木枝條，以便為夜晚生起溫暖的營火。"
  },
  {
    "word": "support",
    "pos": "v. / n.",
    "cn_def": "支持；支撐；擁護",
    "en_def": "to help someone emotionally or practically; to hold up physically",
    "sentence": "Parents should always provide loving {{BLANK}} and encouragement when their children face difficult challenges.",
    "cn": "當孩子面臨艱難挑戰時，父母應始終給予充滿愛意的支持與鼓勵。"
  },
  {
    "word": "supply",
    "pos": "n. / v.",
    "cn_def": "供應；補給；物資；提供",
    "en_def": "an amount of something available for use; to provide",
    "sentence": "The international charity delivered an urgent {{BLANK}} of clean drinking water and canned food to the disaster zone.",
    "cn": "國際慈善機構向災區運送了緊急的純淨飲用水與罐頭食品物資（供應）。"
  },
  {
    "word": "system",
    "pos": "n.",
    "cn_def": "系統；體系；體制",
    "en_def": "a set of connected things or rules working together",
    "sentence": "Taipei boasts an efficient underground metro {{BLANK}} that transports millions of daily commuters quickly and safely.",
    "cn": "台北擁有高效的地下捷運系統，能迅速且安全地運送數百萬名每日通勤族。"
  },
  {
    "word": "task",
    "pos": "n.",
    "cn_def": "任務；差事；工作",
    "en_def": "a piece of work to be done, especially one that is difficult",
    "sentence": "Completing the complicated science project before Friday was a challenging {{BLANK}} for the high school group.",
    "cn": "在星期五之前完成這項複雜的自然科學專案，對該高中組別而言是一項具挑戰性的任務。"
  },
  {
    "word": "track",
    "pos": "n. / v.",
    "cn_def": "軌道；跑道；行蹤；追蹤",
    "en_def": "a path or rough road; railway rails; to follow movement",
    "sentence": "Meteorologists use modern satellites to {{BLANK}} the exact path of the powerful tropical typhoon approaching Taiwan.",
    "cn": "氣象學家利用現代人造衛星來追蹤逼近台灣的強烈熱帶颱風的確切路徑（軌跡）。"
  },
  {
    "word": "willing",
    "pos": "adj.",
    "cn_def": "樂意的；情願的",
    "en_def": "ready, eager, or prepared to do something without complaining",
    "sentence": "Many kindhearted community volunteers were {{BLANK}} to help rebuild homes damaged by the mountain earthquake.",
    "cn": "許多熱心的社區志願者樂意協助重建被山區地震損毀的家園。"
  }
];

const MCQS = [
  {
    "q": "Reputable journalists always verify information with a reliable ______ before publishing breaking news.",
    "options": [
      "stamp",
      "source",
      "stick",
      "task"
    ],
    "answer": 1,
    "cn": "信譽卓著的記者在發布突發新聞之前，總是會向可靠的來源查證資訊。 【選項解析】(A) stamp 郵票  (B) source 來源  (C) stick 枝條  (D) task 任務。reliable source 表「可靠消息來源」。",
    "vocabIndex": 0
  },
  {
    "q": "When entering a foreign country, the immigration officer will examine your passport and ______ an official visa entry.",
    "options": [
      "track",
      "source",
      "supply",
      "stamp"
    ],
    "answer": 3,
    "cn": "入境國外時，移民官會檢查你的護照並蓋上官方簽證入境章。 【選項解析】(A) stamp 蓋章  (B) source 來源  (C) supply 供應  (D) track 追蹤。stamp an entry 表「蓋上入境章」。",
    "vocabIndex": 1
  },
  {
    "q": "Following every safety ______ outlined in the laboratory manual will prevent dangerous chemical accidents.",
    "options": [
      "step",
      "source",
      "stick",
      "task"
    ],
    "answer": 0,
    "cn": "遵循實驗室手冊中列出的每一步安全步驟，將能防止危險化學事故。 【選項解析】(A) stick 枝條  (B) source 來源  (C) step 步驟  (D) task 任務。safety step 表「安全步驟」。",
    "vocabIndex": 2
  },
  {
    "q": "The little boy used paste to ______ colorful pictures of wild animals into his school scrapbook.",
    "options": [
      "support",
      "supply",
      "stick",
      "track"
    ],
    "answer": 2,
    "cn": "小男孩用漿糊把色彩繽紛的野生動物圖片黏貼到他的學校剪貼簿裡。 【選項解析】(A) support 支持  (B) stick 黏貼  (C) supply 提供  (D) track 追蹤。stick pictures into 表「把圖片貼入」。",
    "vocabIndex": 3
  },
  {
    "q": "Teachers always ______ students who actively participate in class discussions and ask thoughtful questions.",
    "options": [
      "stamp",
      "support",
      "track",
      "stick"
    ],
    "answer": 1,
    "cn": "老師總是支持並鼓勵積極參與課堂討論並提出深刻問題的學生。 【選項解析】(A) stamp 蓋印  (B) track 追蹤  (C) support 支持  (D) stick 黏貼。support students 表「支持學生」。",
    "vocabIndex": 4
  },
  {
    "q": "Severe winter blizzards disrupted the local electricity ______, leaving thousands of suburban households in the dark.",
    "options": [
      "stamp",
      "source",
      "supply",
      "task"
    ],
    "answer": 2,
    "cn": "嚴重的冬季暴風雪中斷了當地的電力供應，使數千戶郊區家庭陷入黑暗。 【選項解析】(A) supply 供應  (B) source 來源  (C) stamp 郵票  (D) task 任務。electricity supply 表「電力供應」。",
    "vocabIndex": 5
  },
  {
    "q": "The hospital upgraded its computerized medical record ______ to improve patient care efficiency.",
    "options": [
      "system",
      "stick",
      "stamp",
      "task"
    ],
    "answer": 0,
    "cn": "醫院升級了電腦化病歷系統，以提高病患照護的效率。 【選項解析】(A) system 系統  (B) stick 枝條  (C) stamp 印章  (D) task 任務。record system 表「紀錄系統」。",
    "vocabIndex": 6
  },
  {
    "q": "Organizing all the company financial records for the annual tax audit was an exhausting ______ for the accountant.",
    "options": [
      "stamp",
      "source",
      "system",
      "task"
    ],
    "answer": 3,
    "cn": "為年度稅務審計整理公司所有財務紀錄，對會計師而言是一項筋疲力竭的任務。 【選項解析】(A) stamp 郵票  (B) source 來源  (C) task 任務  (D) system 系統。exhausting task 表「累人的任務」。",
    "vocabIndex": 7
  },
  {
    "q": "The high-speed train glided smoothly along the steel ______ through the green countryside.",
    "options": [
      "track",
      "stamp",
      "source",
      "stick"
    ],
    "answer": 0,
    "cn": "高速火車沿著鋼鐵軌道在綠色鄉間平穩滑行馳騁。 【選項解析】(A) stamp 郵票  (B) track 鐵軌  (C) source 來源  (D) stick 棍棒。steel track 表「鋼鐵軌道」。",
    "vocabIndex": 8
  },
  {
    "q": "Are you ______ to work overtime this weekend to help the marketing team meet the project deadline?",
    "options": [
      "track",
      "system",
      "willing",
      "task"
    ],
    "answer": 2,
    "cn": "你這週末願意加班以協助行銷團隊趕上專案截止期限嗎？ 【選項解析】(A) willing 樂意的  (B) system 系統  (C) track 追蹤  (D) task 任務。willing to work overtime 表「願意加班」。",
    "vocabIndex": 9
  },
  {
    "q": "Fresh mountain springs provide a clean, natural ______ of drinking water for the remote valley village.",
    "options": [
      "stamp",
      "source",
      "task",
      "stick"
    ],
    "answer": 1,
    "cn": "新鮮高山泉水為偏遠山谷村莊提供了乾淨、天然的飲用水來源。 【選項解析】(A) source 來源  (B) stamp 郵票  (C) task 任務  (D) stick 枝條。natural source of water 表「天然水源」。",
    "vocabIndex": 0
  },
  {
    "q": "The postal clerk handed me an anniversary postage ______ featuring rare Taiwanese wildlife.",
    "options": [
      "stick",
      "track",
      "source",
      "stamp"
    ],
    "answer": 3,
    "cn": "郵局職員遞給我一枚印有稀有台灣野生動物圖案的紀念郵票。 【選項解析】(A) stick 枝條  (B) stamp 郵票  (C) source 來源  (D) track 跑道。postage stamp 表「郵票」。",
    "vocabIndex": 1
  },
  {
    "q": "Taking the first ______ toward learning a new foreign language can feel intimidating, but practice brings confidence.",
    "options": [
      "track",
      "step",
      "stick",
      "system"
    ],
    "answer": 1,
    "cn": "邁出學習一門新外語的第一步可能會感到令人卻步，但練習會帶來信心。 【選項解析】(A) track 軌道  (B) stick 棍棒  (C) step 腳步  (D) system 系統。first step 表「第一步」。",
    "vocabIndex": 2
  },
  {
    "q": "We gathered dry pine ______ from the forest floor to roast marshmallows over the evening campfire.",
    "options": [
      "stamps",
      "tasks",
      "sources",
      "sticks"
    ],
    "answer": 3,
    "cn": "我們從森林地面收集乾燥松樹枝，以便在夜晚營火上烤棉花糖。 【選項解析】(A) stamps 郵票  (B) sticks 枝條  (C) sources 來源  (D) tasks 任務。pine sticks 表「松樹小枝條」。",
    "vocabIndex": 3
  },
  {
    "q": "The government introduced special tax subsidies to ______ farmers affected by the prolonged summer drought.",
    "options": [
      "support",
      "stick",
      "track",
      "stamp"
    ],
    "answer": 0,
    "cn": "政府推出特別稅收補貼，以扶助支持受到漫長夏日乾旱影響的農民。 【選項解析】(A) track 追蹤  (B) stick 黏貼  (C) support 扶助支持  (D) stamp 踩踏。support farmers 表「扶助農民」。",
    "vocabIndex": 4
  },
  {
    "q": "Emergency relief planes will air-drop a fresh ______ of medical kits to the cut-off mountain villages.",
    "options": [
      "stamp",
      "source",
      "supply",
      "system"
    ],
    "answer": 2,
    "cn": "緊急救援飛機將向受困隔絕的山區村莊空投一批新鮮的醫療急救包補給物資。 【選項解析】(A) stamp 郵票  (B) source 來源  (C) supply 補給物資  (D) system 系統。supply of medical kits 表「醫療物資補給」。",
    "vocabIndex": 5
  },
  {
    "q": "Taiwan's national healthcare ______ is internationally praised for its high quality and affordable accessibility.",
    "options": [
      "stick",
      "system",
      "stamp",
      "task"
    ],
    "answer": 1,
    "cn": "台灣的全民健保體制因其高品質與平價便利性而在國際上廣受讚譽。 【選項解析】(A) system 體制系統  (B) stick 枝條  (C) stamp 郵票  (D) task 任務。healthcare system 表「健保醫療體系」。",
    "vocabIndex": 6
  },
  {
    "q": "Cleaning out the garage on a sunny Saturday afternoon was an arduous ______ that took our entire family four hours.",
    "options": [
      "system",
      "stamp",
      "task",
      "source"
    ],
    "answer": 2,
    "cn": "在晴朗週六下午清理車庫是一件費力的苦差事，花費了我們全家四個小時。 【選項解析】(A) system 系統  (B) stamp 郵票  (C) task 差事任務  (D) source 來源。arduous task 表「費力任務」。",
    "vocabIndex": 7
  },
  {
    "q": "Wildlife biologists placed GPS collars on mountain deer to ______ their seasonal migration patterns.",
    "options": [
      "stamp",
      "support",
      "supply",
      "track"
    ],
    "answer": 3,
    "cn": "野生動物生物學家在山鹿身上安裝 GPS 項圈，以追蹤其季節性遷徙模式。 【選項解析】(A) track 追蹤  (B) support 支持  (C) supply 供應  (D) stamp 蓋印。track migration patterns 表「追蹤遷徙模式」。",
    "vocabIndex": 8
  },
  {
    "q": "The generous philanthropist was ______ to donate half of his wealth to establish educational scholarships.",
    "options": [
      "willing",
      "system",
      "track",
      "source"
    ],
    "answer": 0,
    "cn": "這位慷慨的慈善家樂意捐出自己一半的財富來設立教育獎學金。 【選項解析】(A) system 系統  (B) willing 樂意的  (C) track 軌道  (D) source 來源。willing to donate 表「樂意捐贈」。",
    "vocabIndex": 9
  },
  {
    "q": "The sun is the ultimate renewable energy ______ that sustains plant life and powers solar panels across Earth.",
    "options": [
      "stamp",
      "task",
      "stick",
      "source"
    ],
    "answer": 3,
    "cn": "太陽是維持植物生命並為全地球太陽能板提供動力的終極可再生能源來源。 【選項解析】(A) stamp 郵票  (B) source 來源  (C) stick 枝條  (D) task 任務。energy source 表「能源來源」。",
    "vocabIndex": 0
  },
  {
    "q": "Don't forget to affix an official postal ______ in the top right corner of the envelope before mailing.",
    "options": [
      "task",
      "source",
      "stamp",
      "track"
    ],
    "answer": 2,
    "cn": "在寄出信件前，別忘了在信封右上角貼上一枚官方郵票。 【選項解析】(A) stamp 郵票  (B) source 來源  (C) task 任務  (D) track 軌道。postal stamp 表「郵票」。",
    "vocabIndex": 1
  },
  {
    "q": "The school principal outlined three practical ______ that students can take to reduce plastic waste on campus.",
    "options": [
      "sticks",
      "steps",
      "sources",
      "tasks"
    ],
    "answer": 1,
    "cn": "校長列出了學生在校園內減少塑膠垃圾可以採取的項實用步驟措施。 【選項解析】(A) sticks 枝條  (B) steps 步驟  (C) sources 來源  (D) tasks 任務。practical steps 表「實用步驟措施」。",
    "vocabIndex": 2
  },
  {
    "q": "Use adhesive tape to ______ the informational announcement firmly onto the bulletin board glass.",
    "options": [
      "stick",
      "support",
      "track",
      "stamp"
    ],
    "answer": 0,
    "cn": "使用膠帶將這張通知公告牢牢黏貼在公佈欄玻璃上。 【選項解析】(A) stick 黏貼  (B) support 支持  (C) track 追蹤  (D) stamp 蓋印。stick announcement 表「黏貼公告」。",
    "vocabIndex": 3
  },
  {
    "q": "When the student felt discouraged about her test score, her tutor offered heartfelt words of ______.",
    "options": [
      "source",
      "support",
      "stamp",
      "task"
    ],
    "answer": 1,
    "cn": "當學生對自己的測驗成績感到沮喪時，她的家教老師給予了由衷的支持與鼓勵。 【選項解析】(A) source 來源  (B) stamp 郵票  (C) support 支持  (D) task 任務。words of support 表「支持與鼓勵的話語」。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "source": {
    "pos": "n.",
    "en_def": "the place or thing where something comes from; an information provider",
    "cn_def": "來源；出處",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the place or thing where something comes from; an information provider",
        "cn_def": "來源；出處"
      }
    ]
  },
  "stamp": {
    "pos": "n. / v.",
    "en_def": "a small piece of paper stuck on a letter; to put a foot down hard",
    "cn_def": "郵票；印章；蓋章；踩踏",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a small piece of paper stuck on a letter; to put a foot down hard",
        "cn_def": "郵票；印章；蓋章；踩踏"
      }
    ]
  },
  "step": {
    "pos": "n. / v.",
    "en_def": "the movement of lifting foot; a stage in a process",
    "cn_def": "步伐；步驟；踏步",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "the movement of lifting foot; a stage in a process",
        "cn_def": "步伐；步驟；踏步"
      }
    ]
  },
  "stick": {
    "pos": "n. / v.",
    "en_def": "a thin piece of wood; to attach with glue; to push into",
    "cn_def": "枝條；棍棒；黏貼；卡住",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a thin piece of wood; to attach with glue; to push into",
        "cn_def": "枝條；棍棒；黏貼；卡住"
      }
    ]
  },
  "support": {
    "pos": "v. / n.",
    "en_def": "to help someone emotionally or practically; to hold up physically",
    "cn_def": "支持；支撐；擁護",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to help someone emotionally or practically; to hold up physically",
        "cn_def": "支持；支撐；擁護"
      }
    ]
  },
  "supply": {
    "pos": "n. / v.",
    "en_def": "an amount of something available for use; to provide",
    "cn_def": "供應；補給；物資；提供",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "an amount of something available for use; to provide",
        "cn_def": "供應；補給；物資；提供"
      }
    ]
  },
  "system": {
    "pos": "n.",
    "en_def": "a set of connected things or rules working together",
    "cn_def": "系統；體系；體制",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a set of connected things or rules working together",
        "cn_def": "系統；體系；體制"
      }
    ]
  },
  "task": {
    "pos": "n.",
    "en_def": "a piece of work to be done, especially one that is difficult",
    "cn_def": "任務；差事；工作",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of work to be done, especially one that is difficult",
        "cn_def": "任務；差事；工作"
      }
    ]
  },
  "track": {
    "pos": "n. / v.",
    "en_def": "a path or rough road; railway rails; to follow movement",
    "cn_def": "軌道；跑道；行蹤；追蹤",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a path or rough road; railway rails; to follow movement",
        "cn_def": "軌道；跑道；行蹤；追蹤"
      }
    ]
  },
  "willing": {
    "pos": "adj.",
    "en_def": "ready, eager, or prepared to do something without complaining",
    "cn_def": "樂意的；情願的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "ready, eager, or prepared to do something without complaining",
        "cn_def": "樂意的；情願的"
      }
    ]
  },
  "stamps": {
    "pos": "",
    "en_def": "",
    "cn_def": "郵票",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "郵票"
      }
    ]
  },
  "tasks": {
    "pos": "",
    "en_def": "",
    "cn_def": "任務",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "任務"
      }
    ]
  },
  "sources": {
    "pos": "",
    "en_def": "",
    "cn_def": "來源",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "來源"
      }
    ]
  },
  "sticks": {
    "pos": "",
    "en_def": "",
    "cn_def": "枝條",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "枝條"
      }
    ]
  },
  "steps": {
    "pos": "",
    "en_def": "",
    "cn_def": "步驟",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "步驟"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
