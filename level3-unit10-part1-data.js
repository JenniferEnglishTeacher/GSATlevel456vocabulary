// Part 1 Quiz Data: angel – diver
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 10-1 - angel – diver",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "angel",
    "pos": "n.",
    "cn_def": "天使；大善人（可數）",
    "en_def": "a spiritual being believed to act as an attendant, agent, or messenger of God; a very kind person",
    "sentence": "The kind nurse stayed by the sick child's bed all night like a guardian {{BLANK}} of mercy.",
    "cn": "那位善良的護理師宛如仁慈的守護天使般，整夜陪伴在生病的孩子床邊。"
  },
  {
    "word": "angelic",
    "pos": "adj.",
    "cn_def": "天使般的；純潔美麗的",
    "en_def": "relating to or like an angel; exceptionally beautiful, innocent, or kind",
    "sentence": "The sleeping baby looked completely peaceful with a sweet and {{BLANK}} smile on her face.",
    "cn": "熟睡中的小嬰兒臉上帶著甜美而天使般的微笑，看起來無比祥和。"
  },
  {
    "word": "devil",
    "pos": "n.",
    "cn_def": "魔鬼；惡魔；淘氣鬼（可數）",
    "en_def": "the supreme spirit of evil; an evil or highly mischievous person",
    "sentence": "We were just talking about David when he suddenly walked through the door, so I laughed and said, 'Speak of the {{BLANK}}!'",
    "cn": "我們剛剛正好在談論大衛，他突然就走進門來，於是我笑著說：「說曹操，曹操就到（魔鬼）！」"
  },
  {
    "word": "apron",
    "pos": "n.",
    "cn_def": "圍裙（可數）",
    "en_def": "a protective garment worn over the front of one's clothes and tied at the back",
    "sentence": "Before frying the fresh fish and chopping the garlic, the chef tied a clean white {{BLANK}} around his waist.",
    "cn": "在煎鮮魚與剁大蒜之前，主廚在腰間繫了一件乾淨的白色圍裙。"
  },
  {
    "word": "assume",
    "pos": "v.",
    "cn_def": "假設；假定；承擔（責任/職位）",
    "en_def": "to suppose something to be the case without proof; to take on a role or duty",
    "sentence": "When the senior manager suddenly fell ill, David had to step up and {{BLANK}} full responsibility for the project.",
    "cn": "當高階經理突然病倒時，大衛必須挺身而出承擔該專案的全部責任。"
  },
  {
    "word": "assumption",
    "pos": "n.",
    "cn_def": "假定；假設；臆斷（可數/不可數）",
    "en_def": "a thing that is accepted as true or as certain to happen, without proof",
    "sentence": "The entire budget proposal was prepared on the {{BLANK}} that sales would grow steadily over the next five years.",
    "cn": "整份預算提案是基於未來五年銷售額將穩定成長的假定所編製的。"
  },
  {
    "word": "Besides",
    "pos": "prep.",
    "cn_def": "除…之外（還…）（介系詞）",
    "en_def": "in addition to; apart from",
    "sentence": "{{BLANK}} speaking fluent English and Spanish, the talented translator is currently learning Japanese at the university.",
    "cn": "除了能說流利的英語與西班牙語之外，那位有才華的翻譯家目前正在大學學習日語。"
  },
  {
    "word": "besides",
    "pos": "adv.",
    "cn_def": "此外；而且（副詞）",
    "en_def": "in addition; as well; furthermore",
    "sentence": "I really do not feel like going to the cinema tonight; {{BLANK}}, I have a pile of homework to complete.",
    "cn": "我今晚真的不想去電影院；況且／而且，我還有一大堆作業要完成。"
  },
  {
    "word": "bless",
    "pos": "v.",
    "cn_def": "為…祝福；保佑；賜福（動詞）",
    "en_def": "to pronounce words in a religious rite to confer divine favor; to make happy",
    "sentence": "The elderly priest smiled warmly and raised his hands to {{BLANK}} all the peaceful villagers gathered in the church.",
    "cn": "年長的牧師面帶溫暖的微笑，舉起雙手為聚集在教堂裡的所有平靜村民祈福保佑。"
  },
  {
    "word": "blessing",
    "pos": "n.",
    "cn_def": "祝福；幸事；恩惠（可數/不可數）",
    "en_def": "God's favor and protection; a beneficial thing that one is grateful for",
    "sentence": "Losing that boring office job turned out to be a {{BLANK}} in disguise because it allowed him to start his dream bakery.",
    "cn": "失去那份枯燥的辦公室工作結果成了因禍得福的幸事（隱蔽的祝福），因為這讓他得以開設心目中夢想的烘焙坊。"
  },
  {
    "word": "bumped",
    "pos": "v.",
    "cn_def": "碰；撞；顛簸行進（動詞）",
    "en_def": "to collide with something; to hit against an obstacle",
    "sentence": "While walking through the crowded airport terminal, I accidentally {{BLANK}} into an old high school classmate.",
    "cn": "在穿過擁擠的機場航廈時，我不小心巧遇／撞上了一位高中老同學。"
  },
  {
    "word": "bump",
    "pos": "n.",
    "cn_def": "碰撞；腫塊；隆起處（可數）",
    "en_def": "a light blow or collision; a raised swelling on the skin caused by a blow",
    "sentence": "After falling off his bicycle onto the pavement, the little boy developed a painful red {{BLANK}} on his forehead.",
    "cn": "從自行車上摔落到人行道後，小男孩的前額腫起了一個疼痛的紅色腫塊。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的；原創的；創作的",
    "en_def": "relating to or involving the imagination or original ideas",
    "sentence": "The innovative art school encourages young students to develop their {{BLANK}} thinking through painting and sculpting.",
    "cn": "這所創新的藝術學校鼓勵年輕學子透過繪畫與雕塑來培養他們的創造性思維。"
  },
  {
    "word": "creativity",
    "pos": "n.",
    "cn_def": "創造力；創意（不可數）",
    "en_def": "the use of the imagination or original ideas, especially in an artistic work",
    "sentence": "Playing open-ended building games allows children to unleash their natural {{BLANK}} without any restrictions.",
    "cn": "玩開放式的積木建築遊戲能讓孩童毫無拘束地釋放他們天生的創造力。"
  },
  {
    "word": "dive",
    "pos": "v.",
    "cn_def": "跳水；潛水；暴跌（動詞）",
    "en_def": "to plunge headfirst into water; to steep downward rapidly",
    "sentence": "Instead of hesitating for hours, you should just {{BLANK}} in and start solving the urgent project.",
    "cn": "與其猶豫不決好幾個小時，你應該直接全身心投入（跳進去）開始解決這項緊急專案。"
  },
  {
    "word": "diver",
    "pos": "n.",
    "cn_def": "潛水員；跳水選手（可數）",
    "en_def": "a person who dives underwater, especially using scuba equipment",
    "sentence": "Equipped with oxygen tanks and heavy wet suits, the experienced deep-sea {{BLANK}} explored the ancient sunken ship.",
    "cn": "配備著氧氣瓶與厚重防寒衣，經驗豐富的深海潛水員探索了古老的沉船。"
  }
];

const MCQS = [
  {
    "q": "The sweet little girl was so gentle and kind that everyone called her a little ______.",
    "options": [
      "devil",
      "angel",
      "apron",
      "bump"
    ],
    "answer": 1,
    "cn": "那個可愛的小女孩既溫柔又善良，大家都叫她小天使。",
    "vocabIndex": 0
  },
  {
    "q": "The mischievous boy hid his sister's teddy bear and laughed like a little ______.",
    "options": [
      "devil",
      "diver",
      "angel",
      "assumption"
    ],
    "answer": 0,
    "cn": "那個頑皮的男孩藏起妹妹的泰迪熊，像個小惡魔一樣大笑。",
    "vocabIndex": 2
  },
  {
    "q": "Mom tied a blue ______ around her waist before baking sweet apple pies in the kitchen.",
    "options": [
      "bump",
      "diver",
      "apron",
      "blessing"
    ],
    "answer": 2,
    "cn": "媽媽在廚房烤甜蘋果派前，在腰間繫了一件藍色圍裙。",
    "vocabIndex": 3
  },
  {
    "q": "Having good health and loving parents is a wonderful ______ that we should cherish.",
    "options": [
      "apron",
      "devil",
      "diver",
      "blessing"
    ],
    "answer": 3,
    "cn": "擁有健康的身體與關愛自己的父母，是我們應當珍惜的極佳恩惠／幸事。",
    "vocabIndex": 9
  },
  {
    "q": "After falling off the swing and hitting the ground, Tommy got a big red ______ on his knee.",
    "options": [
      "bump",
      "devil",
      "diver",
      "angel"
    ],
    "answer": 0,
    "cn": "從鞦韆上摔落撞擊地面後，湯米膝蓋上腫起了一個紅色的大腫塊。",
    "vocabIndex": 10
  },
  {
    "q": "The brave ______ with an oxygen tank searched the bottom of the lake for the lost watch.",
    "options": [
      "apron",
      "diver",
      "assumption",
      "blessing"
    ],
    "answer": 1,
    "cn": "背著氧氣瓶的勇敢潛水員在湖底搜尋遺失的手錶。",
    "vocabIndex": 15
  },
  {
    "q": "It is a wrong ______ to think that every rich person is happy and satisfied.",
    "options": [
      "bump",
      "apron",
      "diver",
      "assumption"
    ],
    "answer": 3,
    "cn": "認為每位富人都快樂滿足是一種錯誤的假設／臆斷。",
    "vocabIndex": 5
  },
  {
    "q": "Writing funny stories and painting colorful pictures helps students show their ______.",
    "options": [
      "diver",
      "devil",
      "creativity",
      "bump"
    ],
    "answer": 2,
    "cn": "撰寫有趣的故事與繪製色彩斑斕的圖畫，能幫助學生展現他們的創造力。",
    "vocabIndex": 13
  },
  {
    "q": "The baby looked so peaceful with an ______ face while sleeping soundly in her bed.",
    "options": [
      "angry",
      "angelic",
      "awful",
      "awkward"
    ],
    "answer": 1,
    "cn": "小嬰兒在床上熟睡時，帶著如天使般的臉龐，看起來是那麼安詳。",
    "vocabIndex": 1
  },
  {
    "q": "Art teachers love Jane because she always comes up with ______ ideas for her drawings.",
    "options": [
      "cruel",
      "angelic",
      "creative",
      "chilly"
    ],
    "answer": 2,
    "cn": "美術老師很喜愛珍，因為她的畫作總能構思出富有創意的想法。",
    "vocabIndex": 12
  },
  {
    "q": "The mother smiled as her child sang with a pure, ______ tone in the school concert.",
    "options": [
      "awful",
      "cruel",
      "bitter",
      "angelic"
    ],
    "answer": 3,
    "cn": "看著孩子在學校音樂會上以純淨如天使般的音調演唱，母親露出了微笑。",
    "vocabIndex": 1
  },
  {
    "q": "Building a castle out of empty boxes requires a lot of ______ thinking.",
    "options": [
      "creative",
      "chilly",
      "bitter",
      "angelic"
    ],
    "answer": 0,
    "cn": "用空箱子建造城堡需要許多富創意的思考。",
    "vocabIndex": 12
  },
  {
    "q": "I ______ that John will be late again because he missed his usual morning bus.",
    "options": [
      "dive",
      "bless",
      "assume",
      "bump"
    ],
    "answer": 2,
    "cn": "我假定／料想約翰又會遲到，因為他錯過了平時早上的公車。",
    "vocabIndex": 4
  },
  {
    "q": "The kind priest raised his hands to ______ the new baby and its loving parents.",
    "options": [
      "dive",
      "assume",
      "bump",
      "bless"
    ],
    "answer": 3,
    "cn": "仁慈的牧師舉起雙手為新生兒及其充滿關愛的父母祈福保佑。",
    "vocabIndex": 8
  },
  {
    "q": "I was looking at my smartphone and accidentally ______ my head on the wooden shelf.",
    "options": [
      "bumped",
      "assumed",
      "blessed",
      "dived"
    ],
    "answer": 0,
    "cn": "我正看著智慧型手機，頭不小心撞到了木架上。",
    "vocabIndex": 10
  },
  {
    "q": "On a hot summer day, the excited boys jumped off the rock and ______ into the cold lake.",
    "options": [
      "bumped",
      "dived",
      "blessed",
      "assumed"
    ],
    "answer": 1,
    "cn": "在炎熱的夏日裡，興奮的男孩們跳下岩石，跳進冰涼的湖水中。",
    "vocabIndex": 14
  },
  {
    "q": "Never ______ you know everything about a math problem before reading it carefully.",
    "options": [
      "assume",
      "bless",
      "dive",
      "bump"
    ],
    "answer": 0,
    "cn": "在仔細閱讀數學題目之前，絕不要自以為假定自己什麼都知道。",
    "vocabIndex": 4
  },
  {
    "q": "The grandmother prayed every single morning to ______ her family with health and peace.",
    "options": [
      "assume",
      "bump",
      "dive",
      "bless"
    ],
    "answer": 3,
    "cn": "祖母每天早晨祈禱，祈求上天賜福保佑她的家人健康平安。",
    "vocabIndex": 8
  },
  {
    "q": "While walking in the crowded night market, Peter ______ into his favorite teacher.",
    "options": [
      "dived",
      "assumed",
      "bumped",
      "blessed"
    ],
    "answer": 2,
    "cn": "在熱鬧擁擠的夜市走著時，彼得巧遇撞見了他最喜歡的老師。",
    "vocabIndex": 10
  },
  {
    "q": "The sea turtle took a deep breath of air and ______ deep down into the coral reef.",
    "options": [
      "blessed",
      "dived",
      "assumed",
      "bumped"
    ],
    "answer": 1,
    "cn": "海龜深吸了一口氣，然後潛入珊瑚礁深處。",
    "vocabIndex": 14
  },
  {
    "q": "______ French and German, Maria can speak fluent Spanish and English.",
    "options": [
      "Minus",
      "Onto",
      "Besides",
      "Aboard"
    ],
    "answer": 2,
    "cn": "除了法語和德語之外，瑪麗亞還能說流利的西班牙語和英語。",
    "vocabIndex": 6
  },
  {
    "q": "I do not want to go out tonight; ______, it is raining heavily outside.",
    "options": [
      "besides",
      "aboard",
      "onto",
      "minus"
    ],
    "answer": 0,
    "cn": "我今晚不想出門；再說／而且，外面正下著大雨。",
    "vocabIndex": 6
  },
  {
    "q": "We were talking about Lisa when she entered the room, so I said, '______!'",
    "options": [
      "Count your blessings",
      "Tie an apron",
      "A blessing in disguise",
      "Speak of the devil"
    ],
    "answer": 3,
    "cn": "我們正在談論麗莎時她正好走進房間，於是我說：「說曹操，曹操就到！」",
    "vocabIndex": 2
  },
  {
    "q": "Missing the early train was ______ because the bus was faster and cheaper.",
    "options": [
      "speak of the devil",
      "a blessing in disguise",
      "count your blessings",
      "tie an apron"
    ],
    "answer": 1,
    "cn": "錯過早班火車其實是因禍得福，因為公車反而更快且更便宜。",
    "vocabIndex": 9
  },
  {
    "q": "Whenever you feel sad about minor troubles, you should ______ and be thankful.",
    "options": [
      "count your blessings",
      "speak of the devil",
      "bump your head",
      "play the devil's advocate"
    ],
    "answer": 0,
    "cn": "每當你為瑣碎煩惱感到難過時，你應該知足常樂／感念恩惠並心存感激。"
  }
];

const LOOKUP = {
  "angel": {
    "pos": "n.",
    "en_def": "a spiritual being believed to act as an attendant, agent, or messenger of God; a very kind person",
    "cn_def": "天使；大善人（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a spiritual being believed to act as an attendant, agent, or messenger of God; a very kind person",
        "cn_def": "天使；大善人（可數）"
      }
    ]
  },
  "angelic": {
    "pos": "adj.",
    "en_def": "relating to or like an angel; exceptionally beautiful, innocent, or kind",
    "cn_def": "天使般的；純潔美麗的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to or like an angel; exceptionally beautiful, innocent, or kind",
        "cn_def": "天使般的；純潔美麗的"
      }
    ]
  },
  "devil": {
    "pos": "n.",
    "en_def": "the supreme spirit of evil; an evil or highly mischievous person",
    "cn_def": "魔鬼；惡魔；淘氣鬼（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the supreme spirit of evil; an evil or highly mischievous person",
        "cn_def": "魔鬼；惡魔；淘氣鬼（可數）"
      }
    ]
  },
  "apron": {
    "pos": "n.",
    "en_def": "a protective garment worn over the front of one's clothes and tied at the back",
    "cn_def": "圍裙（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a protective garment worn over the front of one's clothes and tied at the back",
        "cn_def": "圍裙（可數）"
      }
    ]
  },
  "assume": {
    "pos": "v.",
    "en_def": "to suppose something to be the case without proof; to take on a role or duty",
    "cn_def": "假設；假定；承擔（責任/職位）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to suppose something to be the case without proof; to take on a role or duty",
        "cn_def": "假設；假定；承擔（責任/職位）"
      }
    ]
  },
  "assumption": {
    "pos": "n.",
    "en_def": "a thing that is accepted as true or as certain to happen, without proof",
    "cn_def": "假定；假設；臆斷（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thing that is accepted as true or as certain to happen, without proof",
        "cn_def": "假定；假設；臆斷（可數/不可數）"
      }
    ]
  },
  "besides": {
    "pos": "prep.",
    "en_def": "in addition to; apart from",
    "cn_def": "除…之外（還…）（介系詞）",
    "combined": [
      {
        "pos": "prep.",
        "en_def": "in addition to; apart from",
        "cn_def": "除…之外（還…）（介系詞）"
      },
      {
        "pos": "adv.",
        "en_def": "in addition; as well; furthermore",
        "cn_def": "此外；而且（副詞）"
      }
    ]
  },
  "bless": {
    "pos": "v.",
    "en_def": "to pronounce words in a religious rite to confer divine favor; to make happy",
    "cn_def": "為…祝福；保佑；賜福（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to pronounce words in a religious rite to confer divine favor; to make happy",
        "cn_def": "為…祝福；保佑；賜福（動詞）"
      }
    ]
  },
  "blessing": {
    "pos": "n.",
    "en_def": "God's favor and protection; a beneficial thing that one is grateful for",
    "cn_def": "祝福；幸事；恩惠（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "God's favor and protection; a beneficial thing that one is grateful for",
        "cn_def": "祝福；幸事；恩惠（可數/不可數）"
      }
    ]
  },
  "bumped": {
    "pos": "v.",
    "en_def": "to collide with something; to hit against an obstacle",
    "cn_def": "碰；撞；顛簸行進（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to collide with something; to hit against an obstacle",
        "cn_def": "碰；撞；顛簸行進（動詞）"
      }
    ]
  },
  "bump": {
    "pos": "v.",
    "en_def": "to collide with something; to hit against an obstacle",
    "cn_def": "碰；撞；顛簸行進（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to collide with something; to hit against an obstacle",
        "cn_def": "碰；撞；顛簸行進（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a light blow or collision; a raised swelling on the skin caused by a blow",
        "cn_def": "碰撞；腫塊；隆起處（可數）"
      }
    ]
  },
  "creative": {
    "pos": "adj.",
    "en_def": "relating to or involving the imagination or original ideas",
    "cn_def": "有創意的；原創的；創作的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to or involving the imagination or original ideas",
        "cn_def": "有創意的；原創的；創作的"
      }
    ]
  },
  "creativity": {
    "pos": "n.",
    "en_def": "the use of the imagination or original ideas, especially in an artistic work",
    "cn_def": "創造力；創意（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the use of the imagination or original ideas, especially in an artistic work",
        "cn_def": "創造力；創意（不可數）"
      }
    ]
  },
  "dive": {
    "pos": "v.",
    "en_def": "to plunge headfirst into water; to steep downward rapidly",
    "cn_def": "跳水；潛水；暴跌（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to plunge headfirst into water; to steep downward rapidly",
        "cn_def": "跳水；潛水；暴跌（動詞）"
      }
    ]
  },
  "diver": {
    "pos": "n.",
    "en_def": "a person who dives underwater, especially using scuba equipment",
    "cn_def": "潛水員；跳水選手（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who dives underwater, especially using scuba equipment",
        "cn_def": "潛水員；跳水選手（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
