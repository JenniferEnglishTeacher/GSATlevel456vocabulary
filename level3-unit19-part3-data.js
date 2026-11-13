// Part 3 Quiz Data: hairdresser – maid
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 19-3 - hairdresser – maid",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "hairdresser",
    "pos": "n.",
    "cn_def": "美髮師；美髮造型師（可數）",
    "en_def": "a person whose occupation is to cut, style, and care for hair",
    "sentence": "Before attending her sister's grand wedding banquet, Olivia booked an appointment with a talented {{BLANK}} to style her hair.",
    "cn": "在參加姐姐盛大的婚宴之前，奧莉薇亞預約了一位才華洋溢的美髮師為她做造型。"
  },
  {
    "word": "hallway",
    "pos": "n.",
    "cn_def": "走廊；門廳；玄關（可數）",
    "en_def": "an interior passage or corridor onto which rooms open",
    "sentence": "Students are strictly instructed not to run or shout loudly down the narrow {{BLANK}} between classes.",
    "cn": "學生們受到嚴格告誡，下課時間不得在狹窄的走廊上奔跑或大聲喊叫。"
  },
  {
    "word": "hammer",
    "pos": "n.",
    "cn_def": "鐵鎚；槌子（可數）",
    "en_def": "a tool with a heavy metal head used for pounding or driving nails",
    "sentence": "The careful carpenter used a sturdy claw {{BLANK}} and several long nails to repair the broken wooden fence.",
    "cn": "細心的木匠使用堅固的羊角鐵鎚和幾根長釘子修理了損壞的木籬笆。"
  },
  {
    "word": "hammer",
    "pos": "v.",
    "cn_def": "槌打；敲擊；擊敗；歷經艱辛達成（動詞）",
    "en_def": "to hit or beat with a hammer; to work hard to reach an agreement",
    "sentence": "Diplomats from both rival nations worked through the night to successfully {{BLANK}} out a peaceful trade agreement.",
    "cn": "來自兩個競爭國家的外交官徹夜工作，成功艱難達成了和平貿易協議。"
  },
  {
    "word": "heals",
    "pos": "v.",
    "cn_def": "（傷口、情感）癒合；治癒；恢復（動詞）",
    "en_def": "to cause a wound or injury to become healthy again; to cure",
    "sentence": "Although the sudden breakup was deeply painful, her caring grandmother reminded her that time {{BLANK}} all wounds eventually.",
    "cn": "雖然突然的分手極為痛苦，但慈祥的祖母提醒她，時間最終會治癒所有的創傷。"
  },
  {
    "word": "lord",
    "pos": "n.",
    "cn_def": "貴族；領主；統治者；主／上帝（可數）",
    "en_def": "a person of noble rank or high authority; God or Christ (the Lord)",
    "sentence": "During the European Middle Ages, peasants were required to work the land and pay heavy taxes to their local feudal {{BLANK}}.",
    "cn": "在歐洲中世紀，農民被要求耕種土地並向當地的封建領主繳納沉重的賦稅。"
  },
  {
    "word": "loser",
    "pos": "n.",
    "cn_def": "輸家；失敗者（可數）",
    "en_def": "a person or team that loses a contest or game; an unsuccessful person",
    "sentence": "Even though his basketball team was defeated in the finals, Tom shook hands with his opponents like a good {{BLANK}}.",
    "cn": "儘管他的籃球隊在決賽中落敗，提姆依然像個有風度的輸家一樣與對手握手。"
  },
  {
    "word": "lung",
    "pos": "n.",
    "cn_def": "肺；肺臟（可數，常用複數 lungs）",
    "en_def": "either of the two breathing organs situated within the chest cavity",
    "sentence": "Medical doctors around the world strongly emphasize that smoking cigarettes significantly increases the dangerous risk of developing {{BLANK}} cancer.",
    "cn": "世界各地的醫學專家強烈強調，吸菸會顯著增加罹患肺癌的危險性。"
  },
  {
    "word": "maid",
    "pos": "n.",
    "cn_def": "女僕；侍女；飯店客房清潔員（可數）",
    "en_def": "a female domestic servant, especially in a hotel or large house",
    "sentence": "Every morning, the hardworking hotel {{BLANK}} replaces the towels and makes sure the guest rooms are spotless.",
    "cn": "每天早晨，勤奮的飯店客房清潔女僕會更換毛巾並確保客房一塵不染。"
  }
];

const MCQS = [
  {
    "q": "I made an appointment with my favorite ______ to cut my hair before the party.",
    "options": [
      "hairdresser",
      "hallway",
      "hammer",
      "loser"
    ],
    "answer": 0,
    "cn": "在派對前，我跟我最喜歡的美髮師預約了剪頭髮。",
    "vocabIndex": 0
  },
  {
    "q": "The classroom doors open onto a long and bright ______ on the second floor.",
    "options": [
      "loser",
      "hallway",
      "hammer",
      "maid"
    ],
    "answer": 1,
    "cn": "教室的門通向二樓一條寬敞明亮的走廊。",
    "vocabIndex": 1
  },
  {
    "q": "The carpenter used a heavy steel ______ to pound the nails into the wood.",
    "options": [
      "maid",
      "loser",
      "hammer",
      "hairdresser"
    ],
    "answer": 2,
    "cn": "木匠使用一把沉重的鋼製鐵鎚把釘子敲進木頭裡。",
    "vocabIndex": 2
  },
  {
    "q": "In medieval history, the powerful ______ owned all the land around the castle.",
    "options": [
      "lung",
      "hallway",
      "hammer",
      "lord"
    ],
    "answer": 3,
    "cn": "在中世紀歷史中，勢力龐大的領主／貴族擁有城堡周圍的所有土地。",
    "vocabIndex": 5
  },
  {
    "q": "A true sportsman accepts defeat politely and acts as a good ______.",
    "options": [
      "hallway",
      "loser",
      "maid",
      "hammer"
    ],
    "answer": 1,
    "cn": "真正的運動員會禮貌地接受失敗，做一個有風度的輸家。",
    "vocabIndex": 6
  },
  {
    "q": "Smoking tobacco harms your ______ and makes it difficult to breathe deeply.",
    "options": [
      "lungs",
      "hammers",
      "hallways",
      "hairdressers"
    ],
    "answer": 0,
    "cn": "吸食菸草會損害你的肺臟，讓你難以進行深呼吸。",
    "vocabIndex": 7
  },
  {
    "q": "The hotel ______ knocked on the door and brought fresh clean towels for us.",
    "options": [
      "hammer",
      "hallway",
      "maid",
      "loser"
    ],
    "answer": 2,
    "cn": "飯店的客房女僕／清潔員敲了門，為我們帶來乾淨新鮮的毛巾。",
    "vocabIndex": 8
  },
  {
    "q": "Turn left at the end of the ______ and you will see the chemistry laboratory.",
    "options": [
      "maid",
      "hammer",
      "loser",
      "hallway"
    ],
    "answer": 3,
    "cn": "在走廊盡頭左轉，你就會看到化學實驗室。",
    "vocabIndex": 1
  },
  {
    "q": "Take a deep breath and let fresh oxygen fill your ______ completely.",
    "options": [
      "hammers",
      "hallways",
      "lungs",
      "losers"
    ],
    "answer": 2,
    "cn": "深吸一口氣，讓新鮮的氧氣完全充滿你的肺部。",
    "vocabIndex": 7
  },
  {
    "q": "My sister was chosen to be the ______ of honor at our cousin's grand wedding.",
    "options": [
      "hammer",
      "hallway",
      "loser",
      "maid"
    ],
    "answer": 3,
    "cn": "我姐姐被選為我們表姐盛大婚禮上的首席伴娘。",
    "vocabIndex": 8
  },
  {
    "q": "The two countries worked through the night to ______ out a peaceful trade agreement.",
    "options": [
      "hammer",
      "stir",
      "dive",
      "peel"
    ],
    "answer": 0,
    "cn": "這兩個國家徹夜工作，以艱難敲定達成一項和平貿易協定。",
    "vocabIndex": 2
  },
  {
    "q": "With proper medicine and plenty of rest, the deep cut on your arm will ______ quickly.",
    "options": [
      "peel",
      "heal",
      "stir",
      "hammer"
    ],
    "answer": 1,
    "cn": "有了適當的藥物和充分的休息，你手臂上的深傷口很快就會癒合。",
    "vocabIndex": 4
  },
  {
    "q": "The worker used a tool to ______ the nail firmly into the thick wooden board.",
    "options": [
      "peel",
      "heal",
      "stir",
      "hammer"
    ],
    "answer": 3,
    "cn": "工人們使用工具將釘子牢牢地敲打進厚木板中。",
    "vocabIndex": 2
  },
  {
    "q": "It took several months for the injured athlete's broken ankle to ______ completely.",
    "options": [
      "peel",
      "stir",
      "heal",
      "hammer"
    ],
    "answer": 2,
    "cn": "這名受傷運動員骨折的腳踝花了好幾個月才完全癒合。",
    "vocabIndex": 4
  },
  {
    "q": "The business partners met for three hours and finally ______ out a fair contract.",
    "options": [
      "hammered",
      "peeled",
      "stirred",
      "healed"
    ],
    "answer": 0,
    "cn": "商業合夥人們開了三個小時的會，最終敲定達成了一份公平的合約。",
    "vocabIndex": 2
  },
  {
    "q": "Doctors are confident that the patient's skin burn will ______ without leaving a big scar.",
    "options": [
      "peel",
      "heal",
      "hammer",
      "stir"
    ],
    "answer": 1,
    "cn": "醫生們很有信心，該病患皮膚的燙傷將會癒合且不會留下大疤痕。",
    "vocabIndex": 4
  },
  {
    "q": "A person who complains loudly and gets angry whenever they lose a game is a ______.",
    "options": [
      "sore loser",
      "hotel maid",
      "hairdresser",
      "feudal lord"
    ],
    "answer": 0,
    "cn": "每當輸掉比賽就大聲抱怨且生氣的人，是一個輸不起的人。",
    "vocabIndex": 6
  },
  {
    "q": "In ancient castles, soldiers fought bravely to defend their noble ______.",
    "options": [
      "hairdresser",
      "feudal lord",
      "sore loser",
      "hotel maid"
    ],
    "answer": 1,
    "cn": "在古城堡中，士兵們英勇作戰以保衛他們高貴的封建領主。",
    "vocabIndex": 5
  },
  {
    "q": "A talented ______ knows exactly how to dye and style your hair to fit your face.",
    "options": [
      "hotel maid",
      "feudal lord",
      "sore loser",
      "hairdresser"
    ],
    "answer": 3,
    "cn": "一位才華洋溢的美髮師清楚知道如何染髮與剪髮以符合你的臉型。",
    "vocabIndex": 0
  },
  {
    "q": "The guest tipped the hardworking ______ for keeping the hotel room clean every day.",
    "options": [
      "sore loser",
      "feudal lord",
      "hotel maid",
      "hairdresser"
    ],
    "answer": 2,
    "cn": "房客給這位勤奮的飯店女僕／房務員小費，感謝她每天保持房間乾淨。",
    "vocabIndex": 8
  },
  {
    "q": "The boy was so scared by the spider that he screamed ______.",
    "options": [
      "under the hammer",
      "maid of honor",
      "time heals all wounds",
      "at the top of his lungs"
    ],
    "answer": 3,
    "cn": "那個男孩被蜘蛛嚇壞了，以至於他扯開嗓門大聲喊叫。",
    "vocabIndex": 7
  },
  {
    "q": "Grandma comforted the sad girl by telling her that ______.",
    "options": [
      "at the top of one's lungs",
      "a sore loser",
      "time heals all wounds",
      "under the hammer"
    ],
    "answer": 2,
    "cn": "祖母安慰那個傷心的女孩，告訴她時間會治癒一切創傷。",
    "vocabIndex": 4
  },
  {
    "q": "The rare antique vase will go ______ at the international auction house tomorrow.",
    "options": [
      "under the hammer",
      "at the top of one's lungs",
      "time heals all wounds",
      "maid of honor"
    ],
    "answer": 0,
    "cn": "這件罕見的古董花瓶明天將在國際拍賣行正式進行拍賣（在拍賣槌下）。",
    "vocabIndex": 2
  },
  {
    "q": "Lucy asked her best friend to be her ______ and help her choose the wedding flowers.",
    "options": [
      "under the hammer",
      "maid of honor",
      "at the top of her lungs",
      "time heals all wounds"
    ],
    "answer": 1,
    "cn": "露西請她最好的朋友擔任她的首席伴娘，並幫她挑選婚禮花卉。",
    "vocabIndex": 8
  },
  {
    "q": "After weeks of difficult discussions, the union managed to ______ with the company.",
    "options": [
      "scream at the top of its lungs",
      "be a sore loser",
      "heal all wounds",
      "hammer out a new deal"
    ],
    "answer": 3,
    "cn": "經過數週的艱難討論，工會終於成功與公司敲定達成一項新協議。",
    "vocabIndex": 2
  }
];

const LOOKUP = {
  "hairdresser": {
    "pos": "n.",
    "en_def": "a person whose occupation is to cut, style, and care for hair",
    "cn_def": "美髮師；美髮造型師（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person whose occupation is to cut, style, and care for hair",
        "cn_def": "美髮師；美髮造型師（可數）"
      }
    ]
  },
  "hallway": {
    "pos": "n.",
    "en_def": "an interior passage or corridor onto which rooms open",
    "cn_def": "走廊；門廳；玄關（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an interior passage or corridor onto which rooms open",
        "cn_def": "走廊；門廳；玄關（可數）"
      }
    ]
  },
  "hammer": {
    "pos": "n.",
    "en_def": "a tool with a heavy metal head used for pounding or driving nails",
    "cn_def": "鐵鎚；槌子（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a tool with a heavy metal head used for pounding or driving nails",
        "cn_def": "鐵鎚；槌子（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to hit or beat with a hammer; to work hard to reach an agreement",
        "cn_def": "槌打；敲擊；擊敗；歷經艱辛達成（動詞）"
      }
    ]
  },
  "heal": {
    "pos": "v.",
    "en_def": "to cause a wound or injury to become healthy again; to cure",
    "cn_def": "（傷口、情感）癒合；治癒；恢復（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause a wound or injury to become healthy again; to cure",
        "cn_def": "（傷口、情感）癒合；治癒；恢復（動詞）"
      }
    ]
  },
  "heals": {
    "pos": "v.",
    "en_def": "to cause a wound or injury to become healthy again; to cure",
    "cn_def": "（傷口、情感）癒合；治癒；恢復（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause a wound or injury to become healthy again; to cure",
        "cn_def": "（傷口、情感）癒合；治癒；恢復（動詞）"
      }
    ]
  },
  "lord": {
    "pos": "n.",
    "en_def": "a person of noble rank or high authority; God or Christ (the Lord)",
    "cn_def": "貴族；領主；統治者；主／上帝（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person of noble rank or high authority; God or Christ (the Lord)",
        "cn_def": "貴族；領主；統治者；主／上帝（可數）"
      }
    ]
  },
  "loser": {
    "pos": "n.",
    "en_def": "a person or team that loses a contest or game; an unsuccessful person",
    "cn_def": "輸家；失敗者（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or team that loses a contest or game; an unsuccessful person",
        "cn_def": "輸家；失敗者（可數）"
      }
    ]
  },
  "lung": {
    "pos": "n.",
    "en_def": "either of the two breathing organs situated within the chest cavity",
    "cn_def": "肺；肺臟（可數，常用複數 lungs）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "either of the two breathing organs situated within the chest cavity",
        "cn_def": "肺；肺臟（可數，常用複數 lungs）"
      }
    ]
  },
  "maid": {
    "pos": "n.",
    "en_def": "a female domestic servant, especially in a hotel or large house",
    "cn_def": "女僕；侍女；飯店客房清潔員（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a female domestic servant, especially in a hotel or large house",
        "cn_def": "女僕；侍女；飯店客房清潔員（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
