// Part 5 Quiz Data: strip – warn
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 17-5 - strip – warn",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "strip",
    "pos": "n./v.",
    "cn_def": "長條；帶狀物（名詞）；脫掉衣服；剝奪（動詞）",
    "en_def": "a long narrow piece of cloth, paper, or land; to remove clothing or covering",
    "sentence": "Every Sunday morning, my little brother laughs out loud while reading the funny comic {{BLANK}} in the newspaper.",
    "cn": "每逢週日早晨，我弟弟看報紙上的幽默連環漫畫時總是開懷大笑。"
  },
  {
    "word": "volume",
    "pos": "n.",
    "cn_def": "音量；體積；容量；冊；卷（可數/不可數）",
    "en_def": "the amount of space occupied by a substance, the loudness of sound, or a single book",
    "sentence": "Please turn down the television {{BLANK}} so that your grandfather can take a peaceful nap in the bedroom.",
    "cn": "請調小電視音量，好讓你的祖父能在臥室裡安靜小睡。"
  },
  {
    "word": "wander",
    "pos": "v./n.",
    "cn_def": "漫遊；閒逛；徘徊（動詞/名詞）",
    "en_def": "to walk or move in a leisurely, casual, or aimless way; an aimless stroll",
    "sentence": "While sitting through the long chemistry lecture, David's tired mind began to {{BLANK}} to his upcoming vacation.",
    "cn": "在冗長的化學講座中，大衛疲憊的思緒開始神遊／走神到即將到來的假期。"
  },
  {
    "word": "warned",
    "pos": "v.",
    "cn_def": "警告；告誡；提醒（動詞）",
    "en_def": "to inform someone in advance of an impending danger, problem, or other unpleasant situation",
    "sentence": "The experienced park ranger strictly {{BLANK}} all hikers about the dangerous wild bears living in the mountains.",
    "cn": "經驗豐富的公園巡邏員嚴格告誡所有健行者，山中有危險的野生熊出沒。"
  }
];

const MCQS = [
  {
    "q": "The kids like to read the funny comic ______ in the Sunday newspaper every week.",
    "options": [
      "lawn",
      "volume",
      "stable",
      "strip"
    ],
    "answer": 3,
    "cn": "孩子們喜歡每週閱讀週日報紙上的幽默連環漫畫條。",
    "vocabIndex": 0
  },
  {
    "q": "Please turn down the radio ______ because the baby is sleeping peacefully.",
    "options": [
      "strip",
      "lock",
      "volume",
      "mist"
    ],
    "answer": 2,
    "cn": "請調低收音機的音量，因為小寶寶正在安詳地睡覺。",
    "vocabIndex": 1
  },
  {
    "q": "We spent Sunday afternoon ______ through the historic old streets of Tainan.",
    "options": [
      "wandering",
      "warning",
      "stripping",
      "pronouncing"
    ],
    "answer": 0,
    "cn": "我們週日下午在台南充滿歷史感的老街上漫步閒逛。",
    "vocabIndex": 2
  },
  {
    "q": "The lifeguard ______ the young swimmers not to go beyond the safety buoys.",
    "options": [
      "stripped",
      "warned",
      "wandered",
      "knitted"
    ],
    "answer": 1,
    "cn": "救生員警告／告誡年輕的游泳者不要越過安全浮標。",
    "vocabIndex": 3
  },
  {
    "q": "The nurse applied a narrow adhesive ______ of bandage across the small cut.",
    "options": [
      "strip",
      "volume",
      "lawn",
      "koala"
    ],
    "answer": 0,
    "cn": "護理師在小傷口上貼了一條狹窄的透氣膠帶。",
    "vocabIndex": 0
  },
  {
    "q": "This encyclopedia set contains twenty thick ______ of world geography knowledge.",
    "options": [
      "strips",
      "mists",
      "locks",
      "volumes"
    ],
    "answer": 3,
    "cn": "這套百科全書包含了二十大厚冊／卷的世界地理知識。",
    "vocabIndex": 1
  },
  {
    "q": "While sitting through the boring lecture, Sam's tired mind began to ______.",
    "options": [
      "warn",
      "wander",
      "strip",
      "reveal"
    ],
    "answer": 1,
    "cn": "在無聊的演講中，山姆疲憊的思緒開始神遊／走神。",
    "vocabIndex": 2
  },
  {
    "q": "The sign on the beach ______ swimmers about sudden strong ocean currents.",
    "options": [
      "strips",
      "wanders",
      "warns",
      "knits"
    ],
    "answer": 2,
    "cn": "海灘上的警示牌提醒／警告游泳者當心突發的強大洋流。",
    "vocabIndex": 3
  },
  {
    "q": "After taking off their shoes, the children ______ down to their shorts to swim.",
    "options": [
      "revealed",
      "warned",
      "wandered",
      "stripped"
    ],
    "answer": 3,
    "cn": "脫掉鞋子後，孩子們脫到只剩短褲跳進水裡游泳。",
    "vocabIndex": 0
  },
  {
    "q": "The sports stadium has a huge ______ of spectators attending the final match.",
    "options": [
      "strip",
      "lace",
      "volume",
      "koala"
    ],
    "answer": 2,
    "cn": "這座體育場有著人數龐大總量／體量的觀眾前來觀看決賽。",
    "vocabIndex": 1
  },
  {
    "q": "A stray dog ______ into our schoolyard during the morning recess break.",
    "options": [
      "wandered",
      "warned",
      "stripped",
      "locked"
    ],
    "answer": 0,
    "cn": "一隻流浪狗在早晨下課時間漫步走進了我們的校園操場。",
    "vocabIndex": 2
  },
  {
    "q": "The mother strictly ______ her daughter against walking alone in the dark alley.",
    "options": [
      "stripped",
      "warned",
      "wandered",
      "pretended"
    ],
    "answer": 1,
    "cn": "母親嚴厲告誡女兒切勿獨自走在黑暗的小巷中。",
    "vocabIndex": 3
  },
  {
    "q": "The sudden heavy rain arrived completely ______ and soaked everyone on the street.",
    "options": [
      "without warning",
      "in large volume",
      "along the strip",
      "under lock and key"
    ],
    "answer": 0,
    "cn": "突如其來的暴雨毫無預警地降臨，將街上的每個人都淋成了落湯雞。",
    "vocabIndex": 3
  },
  {
    "q": "The athlete's proud smile and bright tears ______ about her long hard journey.",
    "options": [
      "stripped off",
      "warned against",
      "wandered around",
      "spoke volumes"
    ],
    "answer": 3,
    "cn": "那位運動員驕傲的微笑與欣喜的淚水，充分說明了／意味深長地道盡了她漫長艱辛的奮鬥歷程。",
    "vocabIndex": 1
  },
  {
    "q": "Please keep an eye on the children so they don't ______ in the crowded department store.",
    "options": [
      "strip off",
      "speak volumes",
      "wander off",
      "turn up volume"
    ],
    "answer": 2,
    "cn": "請照看好孩子們，免得他們在擁擠的百貨公司裡走失／走散。",
    "vocabIndex": 2
  },
  {
    "q": "After being found guilty of serious crimes, the corrupt general was ______ of his rank.",
    "options": [
      "warned",
      "stripped",
      "wandered",
      "locked"
    ],
    "answer": 1,
    "cn": "在被判定犯下嚴重罪行後，那位貪腐的將軍被剝奪了軍階。",
    "vocabIndex": 0
  },
  {
    "q": "Can you please ______ so we can hear what the television news anchor is saying?",
    "options": [
      "turn up the volume",
      "wander off",
      "strip of office",
      "keep off lawn"
    ],
    "answer": 0,
    "cn": "你能把音量調大嗎？這樣我們才能聽清楚電視新聞主播在說什麼。",
    "vocabIndex": 1
  },
  {
    "q": "The tourist enjoyed a quiet ______ along the scenic riverbank before sunset.",
    "options": [
      "warning",
      "strip",
      "volume",
      "wander"
    ],
    "answer": 3,
    "cn": "那位遊客在日落前沿著風景如畫的河岸享受了一趟寧靜的漫步閒逛。",
    "vocabIndex": 2
  },
  {
    "q": "The factory manager gave a formal written ______ to the careless worker.",
    "options": [
      "volume",
      "strip",
      "warning",
      "lawn"
    ],
    "answer": 2,
    "cn": "工廠經理向那位粗心大意的工人發出了正式的書面警告。",
    "vocabIndex": 3
  },
  {
    "q": "The farmer owns a narrow ______ that stretches all the way down to the stream.",
    "options": [
      "volume of water",
      "strip of land",
      "warning sign",
      "sudden wander"
    ],
    "answer": 1,
    "cn": "農夫擁有一塊一直延伸到溪流邊的狹長土地／地帶。",
    "vocabIndex": 0
  },
  {
    "q": "My little sister read the daily newspaper just to look at the colored ______.",
    "options": [
      "sudden wander",
      "warning sign",
      "high volume",
      "comic strip"
    ],
    "answer": 3,
    "cn": "我妹妹看每日報紙只是為了看彩色的連環漫畫。",
    "vocabIndex": 0
  },
  {
    "q": "The sudden loud thunder gave the resting puppy a terrible ______.",
    "options": [
      "strip",
      "fright",
      "volume",
      "wander"
    ],
    "answer": 1,
    "cn": "突然響起的巨大雷聲把正在休息的小狗嚇了一大跳／驚嚇。"
  },
  {
    "q": "We heard an urgent weather ______ on the radio about the approaching typhoon.",
    "options": [
      "warning",
      "strip",
      "volume",
      "wander"
    ],
    "answer": 0,
    "cn": "我們在收音機裡聽到了關於颱風即將來襲的緊急天氣警報／警告。",
    "vocabIndex": 3
  },
  {
    "q": "He closed his eyes and let his thoughts ______ peacefully across happy memories.",
    "options": [
      "warn",
      "strip",
      "wander",
      "reveal"
    ],
    "answer": 2,
    "cn": "他閉上眼睛，任由思緒平靜地漫遊／徜徉在美好的回憶中。",
    "vocabIndex": 2
  },
  {
    "q": "Due to the holiday shopping season, a high ______ of packages passed through the airport.",
    "options": [
      "strip",
      "warning",
      "wander",
      "volume"
    ],
    "answer": 3,
    "cn": "由於假期購物旺季，有極大數量／總量的包裹通過機場運送。",
    "vocabIndex": 1
  }
];

const LOOKUP = {
  "strip": {
    "pos": "n./v.",
    "en_def": "a long narrow piece of cloth, paper, or land; to remove clothing or covering",
    "cn_def": "長條；帶狀物（名詞）；脫掉衣服；剝奪（動詞）",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a long narrow piece of cloth, paper, or land; to remove clothing or covering",
        "cn_def": "長條；帶狀物（名詞）；脫掉衣服；剝奪（動詞）"
      }
    ]
  },
  "volume": {
    "pos": "n.",
    "en_def": "the amount of space occupied by a substance, the loudness of sound, or a single book",
    "cn_def": "音量；體積；容量；冊；卷（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the amount of space occupied by a substance, the loudness of sound, or a single book",
        "cn_def": "音量；體積；容量；冊；卷（可數/不可數）"
      }
    ]
  },
  "wander": {
    "pos": "v./n.",
    "en_def": "to walk or move in a leisurely, casual, or aimless way; an aimless stroll",
    "cn_def": "漫遊；閒逛；徘徊（動詞/名詞）",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "to walk or move in a leisurely, casual, or aimless way; an aimless stroll",
        "cn_def": "漫遊；閒逛；徘徊（動詞/名詞）"
      }
    ]
  },
  "warned": {
    "pos": "v.",
    "en_def": "to inform someone in advance of an impending danger, problem, or other unpleasant situation",
    "cn_def": "警告；告誡；提醒（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to inform someone in advance of an impending danger, problem, or other unpleasant situation",
        "cn_def": "警告；告誡；提醒（動詞）"
      }
    ]
  },
  "warn": {
    "pos": "v.",
    "en_def": "to inform someone in advance of an impending danger, problem, or other unpleasant situation",
    "cn_def": "警告；告誡；提醒（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to inform someone in advance of an impending danger, problem, or other unpleasant situation",
        "cn_def": "警告；告誡；提醒（動詞）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
