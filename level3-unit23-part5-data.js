// Part 5 Quiz Data: verse – zone
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 23-5 - verse – zone",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "verse",
    "pos": "n.",
    "cn_def": "詩節；韻文；詩篇",
    "en_def": "writing arranged with a metrical rhythm, typically having a rhyme; poetry",
    "sentence": "Shakespeare composed many of his dramatic plays and famous romantic sonnets entirely in rhyming {{BLANK}}.",
    "cn": "莎士比亞完全用韻文詩體創作了他的許多戲劇作品與著名的浪漫十四行詩。"
  },
  {
    "word": "warmth",
    "pos": "n.",
    "cn_def": "溫暖；熱情；親切",
    "en_def": "the quality, state, or sensation of being warm; friendly affection",
    "sentence": "Sitting on the front porch sipping hot cocoa, we thoroughly enjoyed the gentle {{BLANK}} of the midday winter sun.",
    "cn": "坐在前門廊啜飲熱可可時，我們盡情享受著冬季正午陽光的溫和溫暖。"
  },
  {
    "word": "warm",
    "pos": "adj./v.",
    "cn_def": "溫暖的；熱情的 (adj.)；使變暖；加溫 (v.)",
    "en_def": "at a fairly comfortable high temperature; to make or become warm",
    "sentence": "The visiting international exchange students received a remarkably {{BLANK}} and enthusiastic welcome at the airport.",
    "cn": "來訪的國際交換學生在機場受到了極為熱烈且熱情的歡迎。"
  },
  {
    "word": "wed",
    "pos": "v.",
    "cn_def": "娶；嫁；與…結婚",
    "en_def": "to marry; to unite in marriage or close partnership",
    "sentence": "The famous young actors announced their intention to {{BLANK}} in an intimate ceremony overlooking the Italian coast next summer.",
    "cn": "這對知名青年演員宣布打算明年夏天在俯瞰義大利海岸的私密儀式中成婚。"
  },
  {
    "word": "wedding",
    "pos": "n.",
    "cn_def": "婚禮；結婚儀式",
    "en_def": "a marriage ceremony and its associated celebrations",
    "sentence": "My grandparents will celebrate their golden {{BLANK}} anniversary next weekend surrounded by children and grandchildren.",
    "cn": "我祖父母將在下週末於兒孫環繞下慶祝他們的金婚（結婚紀念日）。"
  },
  {
    "word": "weeds",
    "pos": "n./v.",
    "cn_def": "雜草；野草 (n.)；為…除草；淘汰 (v.)",
    "en_def": "a wild plant growing where it is not wanted; to remove unwanted plants",
    "sentence": "The diligent gardener spent Saturday morning on his knees to carefully pull up unwanted {{BLANK}} from the flowerbed.",
    "cn": "勤奮的園丁週六早晨跪在地上，仔細從花壇中拔除惱人的雜草。"
  },
  {
    "word": "wheat",
    "pos": "n.",
    "cn_def": "小麥",
    "en_def": "a cereal plant that yields grain used for making flour and bread",
    "sentence": "Endless undulating fields of golden {{BLANK}} stretched across the horizon under the azure Midwestern summer sky.",
    "cn": "在中西部蔚藍的夏日天空下，一望無際且隨風起伏的金黃色小麥田在平線上延展。"
  },
  {
    "word": "wicked",
    "pos": "adj.",
    "cn_def": "邪惡的；不道德的；淘氣的",
    "en_def": "evil or morally wrong; playfully mischievous",
    "sentence": "In the classic children's fairy tale, the {{BLANK}} witch cast a dark spell to put the sleeping princess into an eternal slumber.",
    "cn": "在經典童話故事中，邪惡的女巫施加了黑暗魔咒，讓沉睡的公主陷入永恆的睡眠。"
  },
  {
    "word": "zone",
    "pos": "n./v.",
    "cn_def": "區域；地帶 (n.)；劃分特定區域 (v.)",
    "en_def": "an area or stretch of land having a particular characteristic or purpose",
    "sentence": "Hospital regulations strictly mandate that all outdoor patient courtyards be designated as a completely non-smoking {{BLANK}}.",
    "cn": "醫院規定嚴格要求所有室外病患中庭均劃定為完全禁菸區。"
  }
];

const MCQS = [
  {
    "q": "The poet recited a deeply touching ______ from his latest anthology during the evening literary festival.",
    "options": [
      "wheat",
      "warmth",
      "verse",
      "zone"
    ],
    "answer": 2,
    "cn": "詩人在晚間文學節期間朗誦了他最新詩選中一首感人至深的詩節／詩篇。",
    "vocabIndex": 0
  },
  {
    "q": "The crackling fireplace radiated welcoming ______ throughout the cozy log cabin during the blizzard.",
    "options": [
      "warmth",
      "wheat",
      "zone",
      "wedding"
    ],
    "answer": 0,
    "cn": "暴風雪期間，劈啪作響的壁爐在整座溫馨的木屋中散發出宜人的溫暖。",
    "vocabIndex": 1
  },
  {
    "q": "Athletes are advised to perform gentle stretches to ______ up their muscles before engaging in strenuous workouts.",
    "options": [
      "zone",
      "wed",
      "weed",
      "warm"
    ],
    "answer": 3,
    "cn": "運動員被建議在進行劇烈運動前，先進行溫和的伸展以熱身肌肉。",
    "vocabIndex": 2
  },
  {
    "q": "The famous opera star and her conductor fiancé chose to ______ in an ancient cathedral in Florence.",
    "options": [
      "warm",
      "wed",
      "weed",
      "zone"
    ],
    "answer": 1,
    "cn": "這位著名的歌劇明星與其指揮家未婚夫選擇在佛羅倫斯的一座古老教堂成婚。",
    "vocabIndex": 3
  },
  {
    "q": "Guests were invited to a lavish evening ______ reception following the sacred church ceremony.",
    "options": [
      "warmth",
      "wheat",
      "wedding",
      "verse"
    ],
    "answer": 2,
    "cn": "在神聖的教堂儀式結束後，賓客獲邀參加奢華的晚間婚宴／婚禮招待會。",
    "vocabIndex": 4
  },
  {
    "q": "The gardener spent the entire Sunday morning pulling up invasive ______ that were choking the rosebushes.",
    "options": [
      "zones",
      "wheats",
      "verses",
      "weeds"
    ],
    "answer": 3,
    "cn": "園丁整個週日早晨都在拔除扼殺玫瑰花叢的侵入性雜草。",
    "vocabIndex": 5
  },
  {
    "q": "The expansive golden ______ fields of Kansas supply a substantial portion of the world's grain exports.",
    "options": [
      "warmth",
      "wheat",
      "wedding",
      "verse"
    ],
    "answer": 1,
    "cn": "堪薩斯州遼闊的金黃色小麥田供應了全球糧食出口相當大的比重。",
    "vocabIndex": 6
  },
  {
    "q": "In classic folklore tales, the hero must outsmart a ______ sorcerer who plans to conquer the kingdom.",
    "options": [
      "wicked",
      "warm",
      "steep",
      "thankful"
    ],
    "answer": 0,
    "cn": "在經典民間傳說中，英雄必須智取企圖征服王國的邪惡巫師。",
    "vocabIndex": 7
  },
  {
    "q": "Smoking is strictly forbidden within this hospital perimeter, as it is a designated smoke-free ______.",
    "options": [
      "wheat",
      "zone",
      "verse",
      "warmth"
    ],
    "answer": 1,
    "cn": "這家醫院周圍嚴禁吸菸，因為這是指定的無菸特區。",
    "vocabIndex": 8
  },
  {
    "q": "The host greeted each arriving visitor with heartfelt kindness and genuine personal ______.",
    "options": [
      "warmth",
      "wheat",
      "zone",
      "verse"
    ],
    "answer": 0,
    "cn": "主人以發自內心的親切與真誠的個人溫情迎接每一位到達的訪客。",
    "vocabIndex": 1
  },
  {
    "q": "The couple announced their intention to ______ in an intimate ceremony on a Hawaiian beach.",
    "options": [
      "warm",
      "zone",
      "weed",
      "wed"
    ],
    "answer": 3,
    "cn": "這對情侶宣布他們打算在夏威夷海灘舉行私密儀式結婚。",
    "vocabIndex": 3
  },
  {
    "q": "The demanding interview process was engineered to ______ out candidates who lack emotional resilience under pressure.",
    "options": [
      "warm",
      "wed",
      "weed",
      "zone"
    ],
    "answer": 2,
    "cn": "嚴格的面試流程旨在淘汰／篩除缺乏抗壓心理韌性的應試者。",
    "vocabIndex": 5
  },
  {
    "q": "Health experts advocate eating whole ______ bread instead of refined white bread for superior nutritional value.",
    "options": [
      "wheat",
      "warmth",
      "zone",
      "verse"
    ],
    "answer": 0,
    "cn": "健康專家提倡食用全麥麵包而非精製白麵包，以獲得更優越的營養價值。",
    "vocabIndex": 6
  },
  {
    "q": "Spreading malicious gossip designed to ruin a colleague's professional standing is undeniably ______ behavior.",
    "options": [
      "warm",
      "thankful",
      "wicked",
      "steep"
    ],
    "answer": 2,
    "cn": "散播旨在破壞同事專業聲譽的惡意謠言，無可否認是惡劣邪惡的行為。",
    "vocabIndex": 7
  },
  {
    "q": "Business travelers crossing multiple international ______ often suffer from temporary fatigue and insomnia.",
    "options": [
      "wheats",
      "zones",
      "verses",
      "warmths"
    ],
    "answer": 1,
    "cn": "跨越多個國際時區的商務旅客常常面臨短暫的疲勞與失眠。",
    "vocabIndex": 8
  },
  {
    "q": "Each stanza of the classic epic ballad was written in elegant iambic ______.",
    "options": [
      "wheat",
      "zone",
      "warmth",
      "verse"
    ],
    "answer": 3,
    "cn": "這首經典敘事史詩的每個小節都是以優雅的抑揚格詩體／韻文寫成。",
    "vocabIndex": 0
  },
  {
    "q": "The thick wool thermal sweater provided comforting ______ during our freezing winter ski trip.",
    "options": [
      "warmth",
      "zone",
      "wheat",
      "wedding"
    ],
    "answer": 0,
    "cn": "在我們寒冷的冬季滑雪之旅中，厚羊毛保暖毛衣提供了舒適的溫暖。",
    "vocabIndex": 1
  },
  {
    "q": "The school courtyard erupted into cheers as the newly ______ teachers waved from the chapel steps.",
    "options": [
      "warmed",
      "weeded",
      "wed",
      "zoned"
    ],
    "answer": 2,
    "cn": "當新婚的教師們在教堂階梯上揮手時，學校中庭爆發出熱烈歡呼。",
    "vocabIndex": 3
  },
  {
    "q": "If you fail to ______ the garden frequently, wild nettles will overwhelm the delicate strawberries.",
    "options": [
      "warm",
      "weed",
      "wed",
      "zone"
    ],
    "answer": 1,
    "cn": "如果你不及時常替花園除草，野生蕁麻將壓倒嬌嫩的草莓。",
    "vocabIndex": 5
  },
  {
    "q": "International commodity markets reported a dramatic surge in the benchmark price of export ______.",
    "options": [
      "warmth",
      "zone",
      "verse",
      "wheat"
    ],
    "answer": 3,
    "cn": "國際大宗商品市場報告出口小麥的基準價格出現大幅飆升。",
    "vocabIndex": 6
  },
  {
    "q": "The fairy tale describes a ______ queen who was violently jealous of her stepdaughter's beauty.",
    "options": [
      "warm",
      "thankful",
      "wicked",
      "steep"
    ],
    "answer": 2,
    "cn": "這篇童話故事描述了一位對繼女的美貌強烈嫉妒的邪惡王后。",
    "vocabIndex": 7
  },
  {
    "q": "City authorities officially designated the downtown historic avenue as a pedestrian-only ______.",
    "options": [
      "wheat",
      "warmth",
      "verse",
      "zone"
    ],
    "answer": 3,
    "cn": "市府當局正式將市中心歷史大道指定為純行人專用區。",
    "vocabIndex": 8
  },
  {
    "q": "She smiled with genuine ______ as she embraced her childhood best friend at the airport arrival terminal.",
    "options": [
      "wheat",
      "warmth",
      "verse",
      "zone"
    ],
    "answer": 1,
    "cn": "當她在機場抵達大廳擁抱童年好友時，她帶著由衷的溫情微笑著。",
    "vocabIndex": 1
  },
  {
    "q": "The young prince took his bride's hand and promised to love and honor her until death did them ______.",
    "options": [
      "part",
      "weed",
      "zone",
      "warm"
    ],
    "answer": 0,
    "cn": "年輕的王子牽起新娘的手，承諾愛她、敬重她，直到死亡將他們分開。"
  },
  {
    "q": "The preliminary qualifying round was designed to ______ out participants who had not mastered foundational rules.",
    "options": [
      "warm",
      "wed",
      "zone",
      "weed"
    ],
    "answer": 3,
    "cn": "初賽資格賽旨在篩除／淘汰尚未掌握基本規則的參賽者。",
    "vocabIndex": 5
  }
];

const LOOKUP = {
  "verse": {
    "pos": "n.",
    "en_def": "writing arranged with a metrical rhythm, typically having a rhyme; poetry",
    "cn_def": "詩節；韻文；詩篇",
    "combined": [
      {
        "pos": "n.",
        "en_def": "writing arranged with a metrical rhythm, typically having a rhyme; poetry",
        "cn_def": "詩節；韻文；詩篇"
      }
    ]
  },
  "warmth": {
    "pos": "n.",
    "en_def": "the quality, state, or sensation of being warm; friendly affection",
    "cn_def": "溫暖；熱情；親切",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality, state, or sensation of being warm; friendly affection",
        "cn_def": "溫暖；熱情；親切"
      }
    ]
  },
  "warm": {
    "pos": "adj./v.",
    "en_def": "at a fairly comfortable high temperature; to make or become warm",
    "cn_def": "溫暖的；熱情的 (adj.)；使變暖；加溫 (v.)",
    "combined": [
      {
        "pos": "adj./v.",
        "en_def": "at a fairly comfortable high temperature; to make or become warm",
        "cn_def": "溫暖的；熱情的 (adj.)；使變暖；加溫 (v.)"
      }
    ]
  },
  "wed": {
    "pos": "v.",
    "en_def": "to marry; to unite in marriage or close partnership",
    "cn_def": "娶；嫁；與…結婚",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to marry; to unite in marriage or close partnership",
        "cn_def": "娶；嫁；與…結婚"
      }
    ]
  },
  "wedding": {
    "pos": "n.",
    "en_def": "a marriage ceremony and its associated celebrations",
    "cn_def": "婚禮；結婚儀式",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a marriage ceremony and its associated celebrations",
        "cn_def": "婚禮；結婚儀式"
      }
    ]
  },
  "weed": {
    "pos": "n./v.",
    "en_def": "a wild plant growing where it is not wanted; to remove unwanted plants",
    "cn_def": "雜草；野草 (n.)；為…除草；淘汰 (v.)",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a wild plant growing where it is not wanted; to remove unwanted plants",
        "cn_def": "雜草；野草 (n.)；為…除草；淘汰 (v.)"
      }
    ]
  },
  "weeds": {
    "pos": "n./v.",
    "en_def": "a wild plant growing where it is not wanted; to remove unwanted plants",
    "cn_def": "雜草；野草 (n.)；為…除草；淘汰 (v.)",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a wild plant growing where it is not wanted; to remove unwanted plants",
        "cn_def": "雜草；野草 (n.)；為…除草；淘汰 (v.)"
      }
    ]
  },
  "wheat": {
    "pos": "n.",
    "en_def": "a cereal plant that yields grain used for making flour and bread",
    "cn_def": "小麥",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a cereal plant that yields grain used for making flour and bread",
        "cn_def": "小麥"
      }
    ]
  },
  "wicked": {
    "pos": "adj.",
    "en_def": "evil or morally wrong; playfully mischievous",
    "cn_def": "邪惡的；不道德的；淘氣的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "evil or morally wrong; playfully mischievous",
        "cn_def": "邪惡的；不道德的；淘氣的"
      }
    ]
  },
  "zone": {
    "pos": "n./v.",
    "en_def": "an area or stretch of land having a particular characteristic or purpose",
    "cn_def": "區域；地帶 (n.)；劃分特定區域 (v.)",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "an area or stretch of land having a particular characteristic or purpose",
        "cn_def": "區域；地帶 (n.)；劃分特定區域 (v.)"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
