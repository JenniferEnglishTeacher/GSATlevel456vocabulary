// Part 4 Quiz Data: hike – participant
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 9-4 - hike – participant",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "hike",
    "pos": "v.",
    "cn_def": "徒步健行；大幅提高（價格等）（動詞）",
    "en_def": "to go for a long walk, especially across country or along trails; to increase sharply",
    "sentence": "Every autumn, our outdoor adventure club loves to {{BLANK}} along scenic mountain trails to admire the colorful red maple leaves.",
    "cn": "每年秋天，我們的戶外探險俱樂部都喜歡沿著風景秀麗的山間小徑徒步健行，欣賞五彩繽紛的紅楓葉。"
  },
  {
    "word": "hike",
    "pos": "n.",
    "cn_def": "健行；徒步旅行；大幅上漲（可數）",
    "en_def": "a long walk or walking tour; a sharp increase in price or tax",
    "sentence": "Local commuters expressed anger over the recent subway fare {{BLANK}}, arguing that public transportation should remain affordable.",
    "cn": "當地通勤者對最近的地鐵票價大幅上漲表示憤怒，認為大眾運輸應該保持平價實惠。"
  },
  {
    "word": "hiker",
    "pos": "n.",
    "cn_def": "健行者；遠足登山客（可數）",
    "en_def": "a person who goes on long walks in the countryside or mountains",
    "sentence": "The park ranger reminded every enthusiastic {{BLANK}} to stay on designated marked trails to prevent damaging fragile wilderness plants.",
    "cn": "國家公園巡邏員提醒每一位熱情的健行登山客留在指定的標記路徑上，以防止破壞脆弱的荒野植物。"
  },
  {
    "word": "take a hike",
    "pos": "idiom",
    "cn_def": "滾開；走開；別來煩我（俚語）",
    "en_def": "a rude expression used to tell someone to go away and stop bothering you",
    "sentence": "When the rude stranger kept making inappropriate remarks at the bus stop, Kelly angrily told him to {{BLANK}}.",
    "cn": "當那個粗魯的陌生人在公車站不斷說出不恰當的話時，凱莉憤怒地叫他滾開／走開別來煩。"
  },
  {
    "word": "historic",
    "pos": "adj.",
    "cn_def": "歷史上著名的；具有重大歷史意義的",
    "en_def": "famous or important in history, or likely to be remembered as significant",
    "sentence": "The signing of the international peace treaty was truly a {{BLANK}} moment that ended decades of devastating civil war.",
    "cn": "國際和平條約的簽署確實是一個具有重大歷史意義的時刻，結束了數十年破壞性的內戰。"
  },
  {
    "word": "historical",
    "pos": "adj.",
    "cn_def": "歷史的；史學的；基於歷史事實的",
    "en_def": "belonging to the past, of or concerning the study of history",
    "sentence": "Professor Adams dedicated twenty years of rigorous {{BLANK}} research to examining trade routes during the Roman Empire.",
    "cn": "亞當斯教授投入了二十年嚴謹的歷史研究，深入考察羅馬帝國時期的貿易路線。"
  },
  {
    "word": "historian",
    "pos": "n.",
    "cn_def": "歷史學家；史學專家（可數）",
    "en_def": "an expert in or student of history, especially that of a particular period",
    "sentence": "A prominent European {{BLANK}} gave an insightful public lecture about the underlying economic causes of the French Revolution.",
    "cn": "一位著名的歐洲歷史學家就法國大革命的潛在經濟起因發表了一場深刻的公開演講。"
  },
  {
    "word": "maid",
    "pos": "n.",
    "cn_def": "女僕；侍女；飯店客房清潔人員（可數）",
    "en_def": "a female domestic servant; a hotel room attendant",
    "sentence": "Every afternoon while guests are out sightseeing, the efficient hotel {{BLANK}} changes bedsheets and replenishes fresh towels.",
    "cn": "每天下午當房客外出觀光時，手腳俐落的飯店女房務員都會更換床單並補充乾淨的毛巾。"
  },
  {
    "word": "old maid",
    "pos": "n.phr.",
    "cn_def": "老姑娘；抽鬼牌遊戲",
    "en_def": "an unmarried woman regarded as beyond the age of marriage (old-fashioned/derogatory); a card game",
    "sentence": "During the rainy afternoon at the cabin, the excited grandchildren sat in a cozy circle to play {{BLANK}}.",
    "cn": "在木屋度過下雨午後時，興奮的孫子孫女們圍成一個溫馨的小圈子玩抽鬼牌遊戲。"
  },
  {
    "word": "mineral",
    "pos": "n.",
    "cn_def": "礦物；礦物質（可數/不可數）",
    "en_def": "a solid, naturally occurring inorganic substance; essential dietary element",
    "sentence": "Drinking a refreshing bottle of chilled {{BLANK}} water helps replenish vital electrolytes after running ten kilometers.",
    "cn": "跑完十公里後，喝一瓶冰鎮清爽的礦泉水有助於補充重要的電解質。"
  },
  {
    "word": "mineral",
    "pos": "adj.",
    "cn_def": "礦物的；含礦物的",
    "en_def": "of, concerning, or containing minerals",
    "sentence": "The developing country achieved rapid economic growth after discovering vast underground {{BLANK}} deposits of iron ore.",
    "cn": "在發現地下蘊藏龐大的鐵礦礦藏後，這個開發中國家實現了快速的經濟增長。"
  },
  {
    "word": "participate",
    "pos": "v.",
    "cn_def": "參加；參與（動詞）",
    "en_def": "to take part in an action or event",
    "sentence": "High school teachers warmly encourage all students to actively {{BLANK}} in after-school sports clubs and volunteer work.",
    "cn": "高中老師熱情鼓勵所有學生積極參與課後體育社團和志工服務。"
  },
  {
    "word": "participation",
    "pos": "n.",
    "cn_def": "參加；參與（不可數）",
    "en_def": "the action of taking part in something",
    "sentence": "The university professor grades students based on their final research papers and active classroom {{BLANK}} in discussions.",
    "cn": "大學教授根據學生的期末研究報告以及在課堂討論中的積極參與來評定成績。"
  },
  {
    "word": "participant",
    "pos": "n.",
    "cn_def": "參與者；參加者（可數）",
    "en_def": "a person who takes part in something",
    "sentence": "Each registered {{BLANK}} at the international academic conference received a badge, a program booklet, and a tote bag.",
    "cn": "國際學術會議的每一位註冊參加者都收到了一枚名牌胸章、一本議程手冊和一個帆布提袋。"
  }
];

const MCQS = [
  {
    "q": "We wore thick boots and packed water before going on a four-hour ______ in the green hills.",
    "options": [
      "maid",
      "hike",
      "mineral",
      "participant"
    ],
    "answer": 1,
    "cn": "我們在綠色山丘中進行四小時的徒步健行之前，穿上了厚靴子並帶了水。",
    "vocabIndex": 0
  },
  {
    "q": "The experienced mountain ______ reached the windy summit before sunrise.",
    "options": [
      "hiker",
      "mineral",
      "participation",
      "alley"
    ],
    "answer": 0,
    "cn": "那位經驗豐富的登山健行者在日出前登上了風很大的山頂。",
    "vocabIndex": 2
  },
  {
    "q": "The hotel ______ knocks softly on the door before bringing clean towels into the room.",
    "options": [
      "mineral",
      "participant",
      "maid",
      "hike"
    ],
    "answer": 2,
    "cn": "飯店女房務員在將乾淨毛巾送入房間之前輕輕敲門。",
    "vocabIndex": 7
  },
  {
    "q": "Fresh milk contains calcium, which is an important ______ for growing strong bones.",
    "options": [
      "hiker",
      "maid",
      "participation",
      "mineral"
    ],
    "answer": 3,
    "cn": "鮮奶含有鈣質，這是骨骼成長強壯的重要礦物質。",
    "vocabIndex": 9
  },
  {
    "q": "Active classroom ______ will help students learn English words much faster.",
    "options": [
      "mineral",
      "maid",
      "participation",
      "hiker"
    ],
    "answer": 2,
    "cn": "積極的課堂參與將有助於學生更快學好英語單字。",
    "vocabIndex": 12
  },
  {
    "q": "Every ______ in the 100-meter race received a silver medal from the principal.",
    "options": [
      "participant",
      "mineral",
      "maid",
      "hike"
    ],
    "answer": 0,
    "cn": "百米賽跑的每位參加者都從校長手中獲得了一枚銀牌。",
    "vocabIndex": 13
  },
  {
    "q": "A famous ______ gave a talk about how ancient people lived thousands of years ago.",
    "options": [
      "maid",
      "mineral",
      "hiker",
      "historian"
    ],
    "answer": 3,
    "cn": "一位著名的歷史學家發表了關於數千年前古代人如何生活的演講。",
    "vocabIndex": 6
  },
  {
    "q": "Because of rising oil costs, the bus company announced a ten-dollar fare ______.",
    "options": [
      "maid",
      "hike",
      "participant",
      "mineral"
    ],
    "answer": 1,
    "cn": "由於石油成本上升，公車客運公司宣布票價大幅調漲十元。",
    "vocabIndex": 0
  },
  {
    "q": "Drinking cool ______ water on a hot day is very refreshing for tired runners.",
    "options": [
      "participant",
      "maid",
      "hiker",
      "mineral"
    ],
    "answer": 3,
    "cn": "在炎熱的日子裡喝清涼的礦泉水對疲倦的跑者來說非常提神。",
    "vocabIndex": 9
  },
  {
    "q": "The young girl was chosen as the ______ of honor at her big sister's wedding party.",
    "options": [
      "mineral",
      "hike",
      "maid",
      "participant"
    ],
    "answer": 2,
    "cn": "那個年輕女孩在她姐姐的婚宴派對上被選為首席伴娘。",
    "vocabIndex": 7
  },
  {
    "q": "On weekends, our family loves to ______ along the mountain paths near Yangmingshan.",
    "options": [
      "participate",
      "hike",
      "historic",
      "historical"
    ],
    "answer": 1,
    "cn": "週末時，我們全家喜歡沿著陽明山附近的山間小徑徒步健行。",
    "vocabIndex": 0
  },
  {
    "q": "All students are warmly invited to ______ in the school music and art festival.",
    "options": [
      "participate",
      "hike",
      "historic",
      "historical"
    ],
    "answer": 0,
    "cn": "熱情邀請所有學生參加學校的音樂與藝術節活動。",
    "vocabIndex": 11
  },
  {
    "q": "The government decided to ______ gasoline prices by two dollars next Monday.",
    "options": [
      "participate",
      "historical",
      "historic",
      "hike"
    ],
    "answer": 3,
    "cn": "政府決定在下週一將汽油價格大幅調漲兩元。",
    "vocabIndex": 0
  },
  {
    "q": "More than twenty talented runners will ______ in tomorrow morning's race.",
    "options": [
      "hike",
      "participate",
      "historical",
      "historic"
    ],
    "answer": 1,
    "cn": "二十多名才華洋溢的跑者將參加明天早晨的比賽。",
    "vocabIndex": 11
  },
  {
    "q": "Walking on the moon in 1969 was a truly ______ event for all human beings.",
    "options": [
      "hiking",
      "historical",
      "historic",
      "participating"
    ],
    "answer": 2,
    "cn": "1969年在月球上漫步對全人類來說確實是一個具重大歷史意義的事件。",
    "vocabIndex": 4
  },
  {
    "q": "The teacher showed us old ______ photos of what our city looked like eighty years ago.",
    "options": [
      "historical",
      "historic",
      "hiking",
      "participating"
    ],
    "answer": 0,
    "cn": "老師向我們展示了八十年前我們城市風貌的老歷史照片。",
    "vocabIndex": 5
  },
  {
    "q": "This red brick building is a protected ______ site built during the nineteenth century.",
    "options": [
      "historical",
      "participating",
      "historic",
      "hiking"
    ],
    "answer": 2,
    "cn": "這棟紅磚建築是建於十九世紀、受到保護的歷史古蹟遺址。",
    "vocabIndex": 4
  },
  {
    "q": "The students read a popular ______ novel about kings and queens in ancient England.",
    "options": [
      "historical",
      "hiking",
      "participating",
      "historic"
    ],
    "answer": 0,
    "cn": "學生們讀了一本關於古代英國國王和皇后的暢銷歷史小說。",
    "vocabIndex": 5
  },
  {
    "q": "Drinking pure ______ water keeps athletes hydrated during intense training.",
    "options": [
      "hiking",
      "historic",
      "historical",
      "mineral"
    ],
    "answer": 3,
    "cn": "在劇烈訓練中飲用純淨的礦泉水能使運動員保持水分。",
    "vocabIndex": 9
  },
  {
    "q": "The signing of the peace agreement was a ______ moment celebrated across the nation.",
    "options": [
      "historical",
      "historic",
      "mineral",
      "hiking"
    ],
    "answer": 1,
    "cn": "和平協議的簽署是一個舉國慶祝的歷史性重大的時刻。",
    "vocabIndex": 4
  },
  {
    "q": "The country has rich ______ resources buried deep under its rocky mountains.",
    "options": [
      "mineral",
      "historical",
      "historic",
      "hiking"
    ],
    "answer": 0,
    "cn": "該國在其岩石山脈深處蘊藏著豐富的礦產資源。",
    "vocabIndex": 9
  },
  {
    "q": "Our school library has a large collection of ______ documents from the Second World War.",
    "options": [
      "mineral",
      "historical",
      "hiking",
      "historic"
    ],
    "answer": 1,
    "cn": "我們學校圖書館收藏了大量關於第二次世界大戰的歷史文獻文檔。",
    "vocabIndex": 5
  },
  {
    "q": "When the annoying boy kept pulling her hair, Mary got mad and told him to ______.",
    "options": [
      "right up his alley",
      "play Old Maid",
      "bite the bullet",
      "take a hike"
    ],
    "answer": 3,
    "cn": "當那個惱人的男孩一直拉她的頭髮時，瑪麗生氣並叫他滾開／走開別來煩。",
    "vocabIndex": 3
  },
  {
    "q": "The rainy day was boring, so the grandchildren gathered around the rug to ______.",
    "options": [
      "take a hike",
      "bite the bullet",
      "play Old Maid",
      "right up their alley"
    ],
    "answer": 2,
    "cn": "下雨天很無聊，所以孫子孫女們圍坐在小地毯周圍玩抽鬼牌。",
    "vocabIndex": 8
  },
  {
    "q": "If someone is being mean and unkind to you, it is best to walk away and tell them to ______.",
    "options": [
      "play Old Maid",
      "take a hike",
      "bite the bullet",
      "hand over fist"
    ],
    "answer": 1,
    "cn": "如果有人對你很壞、很不友善，最好的辦法是走開並叫他們走開別來煩。",
    "vocabIndex": 3
  }
];

const LOOKUP = {
  "hike": {
    "pos": "v.",
    "en_def": "to go for a long walk, especially across country or along trails; to increase sharply",
    "cn_def": "徒步健行；大幅提高（價格等）（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to go for a long walk, especially across country or along trails; to increase sharply",
        "cn_def": "徒步健行；大幅提高（價格等）（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a long walk or walking tour; a sharp increase in price or tax",
        "cn_def": "健行；徒步旅行；大幅上漲（可數）"
      }
    ]
  },
  "hiker": {
    "pos": "n.",
    "en_def": "a person who goes on long walks in the countryside or mountains",
    "cn_def": "健行者；遠足登山客（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who goes on long walks in the countryside or mountains",
        "cn_def": "健行者；遠足登山客（可數）"
      }
    ]
  },
  "take a hike": {
    "pos": "idiom",
    "en_def": "a rude expression used to tell someone to go away and stop bothering you",
    "cn_def": "滾開；走開；別來煩我（俚語）",
    "combined": [
      {
        "pos": "idiom",
        "en_def": "a rude expression used to tell someone to go away and stop bothering you",
        "cn_def": "滾開；走開；別來煩我（俚語）"
      }
    ]
  },
  "historic": {
    "pos": "adj.",
    "en_def": "famous or important in history, or likely to be remembered as significant",
    "cn_def": "歷史上著名的；具有重大歷史意義的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "famous or important in history, or likely to be remembered as significant",
        "cn_def": "歷史上著名的；具有重大歷史意義的"
      }
    ]
  },
  "historical": {
    "pos": "adj.",
    "en_def": "belonging to the past, of or concerning the study of history",
    "cn_def": "歷史的；史學的；基於歷史事實的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "belonging to the past, of or concerning the study of history",
        "cn_def": "歷史的；史學的；基於歷史事實的"
      }
    ]
  },
  "historian": {
    "pos": "n.",
    "en_def": "an expert in or student of history, especially that of a particular period",
    "cn_def": "歷史學家；史學專家（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an expert in or student of history, especially that of a particular period",
        "cn_def": "歷史學家；史學專家（可數）"
      }
    ]
  },
  "maid": {
    "pos": "n.",
    "en_def": "a female domestic servant; a hotel room attendant",
    "cn_def": "女僕；侍女；飯店客房清潔人員（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a female domestic servant; a hotel room attendant",
        "cn_def": "女僕；侍女；飯店客房清潔人員（可數）"
      }
    ]
  },
  "old maid": {
    "pos": "n.phr.",
    "en_def": "an unmarried woman regarded as beyond the age of marriage (old-fashioned/derogatory); a card game",
    "cn_def": "老姑娘；抽鬼牌遊戲",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "an unmarried woman regarded as beyond the age of marriage (old-fashioned/derogatory); a card game",
        "cn_def": "老姑娘；抽鬼牌遊戲"
      }
    ]
  },
  "mineral": {
    "pos": "n.",
    "en_def": "a solid, naturally occurring inorganic substance; essential dietary element",
    "cn_def": "礦物；礦物質（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a solid, naturally occurring inorganic substance; essential dietary element",
        "cn_def": "礦物；礦物質（可數/不可數）"
      },
      {
        "pos": "adj.",
        "en_def": "of, concerning, or containing minerals",
        "cn_def": "礦物的；含礦物的"
      }
    ]
  },
  "participate": {
    "pos": "v.",
    "en_def": "to take part in an action or event",
    "cn_def": "參加；參與（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take part in an action or event",
        "cn_def": "參加；參與（動詞）"
      }
    ]
  },
  "participation": {
    "pos": "n.",
    "en_def": "the action of taking part in something",
    "cn_def": "參加；參與（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of taking part in something",
        "cn_def": "參加；參與（不可數）"
      }
    ]
  },
  "participant": {
    "pos": "n.",
    "en_def": "a person who takes part in something",
    "cn_def": "參與者；參加者（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who takes part in something",
        "cn_def": "參與者；參加者（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
