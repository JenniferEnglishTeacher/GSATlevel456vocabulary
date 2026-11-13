// Part 1 Quiz Data: advanced – cast
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 7-1 - advanced – cast",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "advanced",
    "pos": "adj.",
    "cn_def": "先進的高級的；進階的",
    "en_def": "far on or ahead in development or progress; complex or high-level",
    "sentence": "The research laboratory develops {{BLANK}} technology for the national deep-space program.",
    "cn": "該研究實驗室為國家深空計畫開發先進的技術。"
  },
  {
    "word": "advance",
    "pos": "v.",
    "cn_def": "前進；推進；提升（動詞）",
    "en_def": "to move forward in a purposeful way; to make progress",
    "sentence": "The army continued to {{BLANK}} steadily toward the enemy border despite the severe blizzard.",
    "cn": "儘管遭遇嚴重的暴風雪，軍隊仍繼續朝敵國邊界穩定前進。"
  },
  {
    "word": "advance",
    "pos": "n.",
    "cn_def": "進步；發展；預付款（可數）",
    "en_def": "a forward movement; a development or improvement",
    "sentence": "Please book your hotel room weeks in {{BLANK}} to avoid paying exorbitant holiday prices.",
    "cn": "請提前數週事先預訂飯店房間，以避免支付昂貴的假日價格。"
  },
  {
    "word": "anxious",
    "pos": "adj.",
    "cn_def": "焦慮不安的；渴望的；急切的",
    "en_def": "experiencing worry, unease, or nervousness; eagerly wishing",
    "sentence": "Jordan was extremely {{BLANK}} about his son's safety when the severe typhoon hit the coastal town.",
    "cn": "當強烈颱風襲擊沿海城鎮時，喬丹對兒子的安危感到極度焦慮不安。"
  },
  {
    "word": "anxiety",
    "pos": "n.",
    "cn_def": "焦慮；不安；掛念（不可數/可數）",
    "en_def": "a feeling of worry, nervousness, or unease about something",
    "sentence": "Practicing deep breathing exercises every morning can significantly reduce exam {{BLANK}} for students.",
    "cn": "每天早晨進行深呼吸練習可以顯著減輕學生的考試焦慮。"
  },
  {
    "word": "ash",
    "pos": "n.",
    "cn_def": "灰燼；骨灰（常用複數 ashes）",
    "en_def": "the powdery residue left after the burning of any substance",
    "sentence": "After the destructive midnight fire, there was nothing left of the wooden cabin except a pile of {{BLANK}}.",
    "cn": "在破壞性的午夜大火之後，木屋除了留下一堆灰燼外一無所有。"
  },
  {
    "word": "rise from the ashes",
    "pos": "v.phr.",
    "cn_def": "浴火重生；從廢墟中崛起",
    "en_def": "to be renewed or restored after being completely destroyed or ruined",
    "sentence": "The historic city destroyed during the great war managed to {{BLANK}} within two decades.",
    "cn": "這座在世界大戰中被摧毀的歷史名城在二十年內成功從廢墟中重新崛起。"
  },
  {
    "word": "banged",
    "pos": "v.",
    "cn_def": "猛撞；重擊；發出砰然巨響",
    "en_def": "to strike or put down forcefully and noisily",
    "sentence": "Sue cried out loud in pain after she accidentally {{BLANK}} her head on the low ceiling beam.",
    "cn": "蘇在頭部意外猛撞到低矮的天花板橫樑後痛得大聲哭叫。"
  },
  {
    "word": "bang",
    "pos": "n.",
    "cn_def": "砰然巨響；猛擊（可數）",
    "en_def": "a sudden loud, sharp noise",
    "sentence": "As soon as the nervous runners heard the sharp {{BLANK}} of the starter's gun, they took off sprinting.",
    "cn": "緊張的跑者們一聽到發令槍的尖銳砰然巨響，便立即拔腿狂奔。"
  },
  {
    "word": "brass",
    "pos": "n.",
    "cn_def": "黃銅；銅管樂器（不可數）",
    "en_def": "a yellow alloy of copper and zinc, often used for instruments or fittings",
    "sentence": "He is an exceptionally talented trumpeter who performs regularly in the municipal {{BLANK}} band downtown.",
    "cn": "他是一位技藝非凡的長號手，經常在市中心的市立銅管樂團演出。"
  },
  {
    "word": "bury",
    "pos": "v.",
    "cn_def": "埋葬；埋藏；使沉浸",
    "en_def": "to put or hide underground, or to cover completely",
    "sentence": "To overcome his grief after the breakup, David decided to {{BLANK}} himself in his medical research.",
    "cn": "為了克服分手後的悲傷，大衛決定讓自己埋首沉浸於醫學研究之中。"
  },
  {
    "word": "captured",
    "pos": "v.",
    "cn_def": "俘虜；捕獲；生動捕捉（動詞）",
    "en_def": "to take into custody by force; to accurately depict or catch",
    "sentence": "The brave soldiers successfully {{BLANK}} the enemy spies before they could leak confidential defense files.",
    "cn": "英勇的士兵在敵方間諜洩露機密國防文件之前成功將其俘虜捕獲。"
  },
  {
    "word": "captured the imagination",
    "pos": "v.phr.",
    "cn_def": "引起某人的高度興趣；激發某人的想像力",
    "en_def": "to fascinate someone or stimulate their creativity and interest",
    "sentence": "The author's magical fantasy novel has truly {{BLANK}} of young teenage readers worldwide.",
    "cn": "作者這部奇幻魔法小說確實激發了全世界年輕讀者的想像力／引起了高度興趣。"
  },
  {
    "word": "cast",
    "pos": "v.",
    "cn_def": "投擲；投射（光影）；選派角色（動詞）",
    "en_def": "to throw something forcefully; to cause light or shadow to appear",
    "sentence": "Paul stood quietly by the rushing river and {{BLANK}} his fishing line into the deep blue water.",
    "cn": "保羅靜靜站在湍急的河邊，將他的釣魚線拋投進深藍色的水中。"
  },
  {
    "word": "cast",
    "pos": "n.",
    "cn_def": "全體演員；石膏夾板（可數）",
    "en_def": "all the actors in a play or film; a rigid casing for broken bones",
    "sentence": "Several award-winning international superstars are included in the impressive {{BLANK}} of the new science fiction film.",
    "cn": "幾位備受殊榮的國際巨星皆包含在這部新科幻電影令人讚嘆的全體演員陣容中。"
  }
];

const MCQS = [
  {
    "q": "The laboratory uses ______ computers that can calculate complex formulas in seconds.",
    "options": [
      "advanced",
      "brass",
      "buried",
      "anxious"
    ],
    "answer": 0,
    "cn": "該實驗室使用能在數秒內計算複雜公式的先進電腦。",
    "vocabIndex": 0
  },
  {
    "q": "The mother felt very ______ when her little boy did not return home after dark.",
    "options": [
      "brass",
      "advanced",
      "anxious",
      "cast"
    ],
    "answer": 2,
    "cn": "當小男孩天黑後還沒回家時，母親感到非常焦慮不安。",
    "vocabIndex": 3
  },
  {
    "q": "After the campfire went out, only grey ______ remained in the stone pit.",
    "options": [
      "cast",
      "advance",
      "bang",
      "ash"
    ],
    "answer": 3,
    "cn": "營火熄滅後，石坑裡只剩下灰色的灰燼。",
    "vocabIndex": 5
  },
  {
    "q": "There was a sudden loud ______ outside when the car hit the wooden pole.",
    "options": [
      "ash",
      "bang",
      "anxiety",
      "brass"
    ],
    "answer": 1,
    "cn": "當車子撞上木桿時，外面傳來一聲突然的砰然巨響。",
    "vocabIndex": 7
  },
  {
    "q": "The trumpet and the French horn are both popular ______ instruments in the orchestra.",
    "options": [
      "advanced",
      "anxious",
      "brass",
      "buried"
    ],
    "answer": 2,
    "cn": "小號與法國號都是管弦樂團中受歡迎的銅管樂器。",
    "vocabIndex": 9
  },
  {
    "q": "The pirate decided to ______ his gold coins deep under the sandy beach.",
    "options": [
      "cast",
      "advance",
      "bang",
      "bury"
    ],
    "answer": 3,
    "cn": "海盜決定將他的金幣埋藏在沙灘深處。",
    "vocabIndex": 10
  },
  {
    "q": "The wildlife photographer managed to ______ a wonderful picture of the running lion.",
    "options": [
      "bury",
      "capture",
      "bang",
      "cast"
    ],
    "answer": 1,
    "cn": "這位野生動物攝影師成功捕捉到奔跑中獅子的精彩照片。",
    "vocabIndex": 11
  },
  {
    "q": "The fisherman stood on the boat and ______ his net into the calm river.",
    "options": [
      "cast",
      "banged",
      "captured",
      "buried"
    ],
    "answer": 0,
    "cn": "漁夫站在船上，將他的網拋灑進平靜的河中。",
    "vocabIndex": 13
  },
  {
    "q": "All the talented actors in the ______ came on stage together to bow at the end.",
    "options": [
      "ash",
      "cast",
      "bang",
      "brass"
    ],
    "answer": 1,
    "cn": "劇中全體演員陣容在結束時一同走上舞台向觀眾鞠躬。",
    "vocabIndex": 13
  },
  {
    "q": "The doctor put a hard white ______ on Peter's broken leg so the bone would heal.",
    "options": [
      "ash",
      "advance",
      "cast",
      "bang"
    ],
    "answer": 2,
    "cn": "醫生在彼得骨折的腿上打上了堅硬的白色石膏，以便骨頭癒合。",
    "vocabIndex": 13
  },
  {
    "q": "The soldiers began to ______ slowly across the muddy valley toward the hill.",
    "options": [
      "advance",
      "bang",
      "bury",
      "capture"
    ],
    "answer": 0,
    "cn": "士兵們開始緩慢地穿過泥濘的山谷朝山丘前進推進。",
    "vocabIndex": 1
  },
  {
    "q": "Tom accidentally ______ his knee on the wooden desk corner and cried out in pain.",
    "options": [
      "cast",
      "advanced",
      "captured",
      "banged"
    ],
    "answer": 3,
    "cn": "湯姆不小心把膝蓋重重撞在木桌角落上，痛得大叫。",
    "vocabIndex": 7
  },
  {
    "q": "The soldiers were ordered to ______ the enemy leader alive for interrogation.",
    "options": [
      "bury",
      "capture",
      "bang",
      "advance"
    ],
    "answer": 1,
    "cn": "士兵們接獲命令要生擒俘虜敵方首領以便進行審問。",
    "vocabIndex": 11
  },
  {
    "q": "The tall oak trees ______ a dark shadow over the garden in the afternoon.",
    "options": [
      "buried",
      "advanced",
      "cast",
      "banged"
    ],
    "answer": 2,
    "cn": "高大的橡樹在下午時分於花園上方投射出一道黑影。",
    "vocabIndex": 13
  },
  {
    "q": "Listening to soft violin music can help people overcome stress and inner ______.",
    "options": [
      "anxiety",
      "brass",
      "ash",
      "cast"
    ],
    "answer": 0,
    "cn": "聆聽輕柔的小提琴音樂可以幫助人們克服壓力和內心的焦慮。",
    "vocabIndex": 4
  },
  {
    "q": "The doorknobs of the old palace were made of shiny golden ______.",
    "options": [
      "anxiety",
      "ash",
      "bang",
      "brass"
    ],
    "answer": 3,
    "cn": "古老宮殿的門把是用光亮的金色黃銅製成的。",
    "vocabIndex": 9
  },
  {
    "q": "Volcanic ______ from the mountain covered the nearby fields and blocked the sun.",
    "options": [
      "brass",
      "cast",
      "ash",
      "bang"
    ],
    "answer": 2,
    "cn": "來自山上的火山灰覆蓋了附近的田野並遮擋了陽光。",
    "vocabIndex": 5
  },
  {
    "q": "The dog ran across the garden and ______ its bone under the big oak tree.",
    "options": [
      "advanced",
      "cast",
      "banged",
      "buried"
    ],
    "answer": 3,
    "cn": "小狗跑過花園，將牠的骨頭埋在大橡樹底下。",
    "vocabIndex": 10
  },
  {
    "q": "The nervous students were ______ to find out their test scores from the teacher.",
    "options": [
      "brass",
      "anxious",
      "advanced",
      "buried"
    ],
    "answer": 1,
    "cn": "緊張的學生們急切渴望想從老師那裡得知他們的考試成績。",
    "vocabIndex": 3
  },
  {
    "q": "We bought our train tickets two weeks ______ to make sure we had good seats.",
    "options": [
      "in advance",
      "with a bang",
      "from the ashes",
      "in a cast"
    ],
    "answer": 0,
    "cn": "我們提前兩週事先購買了火車票，以確保有良好的座位。",
    "vocabIndex": 0
  },
  {
    "q": "The popular new superhero movie ended ______ that excited all the fans.",
    "options": [
      "in advance",
      "with a bang",
      "from the ashes",
      "in a cast"
    ],
    "answer": 1,
    "cn": "這部大受歡迎的新超級英雄電影以轟轟烈烈大獲成功的方式收尾，讓所有影迷為之振奮。",
    "vocabIndex": 7
  },
  {
    "q": "After the great disaster, the resilient town was able to ______ and rebuild quickly.",
    "options": [
      "rise from the ashes",
      "bang on the drum",
      "cast a shadow",
      "buy in advance"
    ],
    "answer": 0,
    "cn": "重大災難發生後，這座堅韌的城鎮得以浴火重生並迅速重建。",
    "vocabIndex": 6
  },
  {
    "q": "The magical children's adventure story will easily ______ of young readers.",
    "options": [
      "rise from the ashes",
      "bang the door",
      "buy in advance",
      "capture the imagination"
    ],
    "answer": 3,
    "cn": "這部奇幻的兒童冒險故事將會輕易激發年輕讀者的想像力。",
    "vocabIndex": 12
  },
  {
    "q": "The smart student signed up for the ______ course to prepare for university.",
    "options": [
      "brass",
      "anxious",
      "advanced",
      "buried"
    ],
    "answer": 2,
    "cn": "那位聰明的學生報名了高級進階課程以為大學做準備。",
    "vocabIndex": 0
  },
  {
    "q": "The sudden news of the war caused a great deal of ______ among the citizens.",
    "options": [
      "anxiety",
      "ash",
      "bang",
      "brass"
    ],
    "answer": 0,
    "cn": "開戰的突發消息在市民之間引發了極大的焦慮不安。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "advanced": {
    "pos": "adj.",
    "en_def": "far on or ahead in development or progress; complex or high-level",
    "cn_def": "先進的高級的；進階的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "far on or ahead in development or progress; complex or high-level",
        "cn_def": "先進的高級的；進階的"
      }
    ]
  },
  "advance": {
    "pos": "v.",
    "en_def": "to move forward in a purposeful way; to make progress",
    "cn_def": "前進；推進；提升（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to move forward in a purposeful way; to make progress",
        "cn_def": "前進；推進；提升（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a forward movement; a development or improvement",
        "cn_def": "進步；發展；預付款（可數）"
      }
    ]
  },
  "anxious": {
    "pos": "adj.",
    "en_def": "experiencing worry, unease, or nervousness; eagerly wishing",
    "cn_def": "焦慮不安的；渴望的；急切的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "experiencing worry, unease, or nervousness; eagerly wishing",
        "cn_def": "焦慮不安的；渴望的；急切的"
      }
    ]
  },
  "anxiety": {
    "pos": "n.",
    "en_def": "a feeling of worry, nervousness, or unease about something",
    "cn_def": "焦慮；不安；掛念（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling of worry, nervousness, or unease about something",
        "cn_def": "焦慮；不安；掛念（不可數/可數）"
      }
    ]
  },
  "ash": {
    "pos": "n.",
    "en_def": "the powdery residue left after the burning of any substance",
    "cn_def": "灰燼；骨灰（常用複數 ashes）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the powdery residue left after the burning of any substance",
        "cn_def": "灰燼；骨灰（常用複數 ashes）"
      }
    ]
  },
  "rise from the ashes": {
    "pos": "v.phr.",
    "en_def": "to be renewed or restored after being completely destroyed or ruined",
    "cn_def": "浴火重生；從廢墟中崛起",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to be renewed or restored after being completely destroyed or ruined",
        "cn_def": "浴火重生；從廢墟中崛起"
      }
    ]
  },
  "banged": {
    "pos": "v.",
    "en_def": "to strike or put down forcefully and noisily",
    "cn_def": "猛撞；重擊；發出砰然巨響",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to strike or put down forcefully and noisily",
        "cn_def": "猛撞；重擊；發出砰然巨響"
      }
    ]
  },
  "bang": {
    "pos": "v.",
    "en_def": "to strike or put down forcefully and noisily",
    "cn_def": "猛撞；重擊；發出砰然巨響",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to strike or put down forcefully and noisily",
        "cn_def": "猛撞；重擊；發出砰然巨響"
      },
      {
        "pos": "n.",
        "en_def": "a sudden loud, sharp noise",
        "cn_def": "砰然巨響；猛擊（可數）"
      }
    ]
  },
  "brass": {
    "pos": "n.",
    "en_def": "a yellow alloy of copper and zinc, often used for instruments or fittings",
    "cn_def": "黃銅；銅管樂器（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a yellow alloy of copper and zinc, often used for instruments or fittings",
        "cn_def": "黃銅；銅管樂器（不可數）"
      }
    ]
  },
  "bury": {
    "pos": "v.",
    "en_def": "to put or hide underground, or to cover completely",
    "cn_def": "埋葬；埋藏；使沉浸",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to put or hide underground, or to cover completely",
        "cn_def": "埋葬；埋藏；使沉浸"
      }
    ]
  },
  "capture": {
    "pos": "v.",
    "en_def": "to take into custody by force; to accurately depict or catch",
    "cn_def": "俘虜；捕獲；生動捕捉（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take into custody by force; to accurately depict or catch",
        "cn_def": "俘虜；捕獲；生動捕捉（動詞）"
      }
    ]
  },
  "captured": {
    "pos": "v.",
    "en_def": "to take into custody by force; to accurately depict or catch",
    "cn_def": "俘虜；捕獲；生動捕捉（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take into custody by force; to accurately depict or catch",
        "cn_def": "俘虜；捕獲；生動捕捉（動詞）"
      }
    ]
  },
  "captured the imagination": {
    "pos": "v.phr.",
    "en_def": "to fascinate someone or stimulate their creativity and interest",
    "cn_def": "引起某人的高度興趣；激發某人的想像力",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to fascinate someone or stimulate their creativity and interest",
        "cn_def": "引起某人的高度興趣；激發某人的想像力"
      }
    ]
  },
  "capture one's imagination": {
    "pos": "v.phr.",
    "en_def": "to fascinate someone or stimulate their creativity and interest",
    "cn_def": "引起某人的高度興趣；激發某人的想像力",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to fascinate someone or stimulate their creativity and interest",
        "cn_def": "引起某人的高度興趣；激發某人的想像力"
      }
    ]
  },
  "cast": {
    "pos": "v.",
    "en_def": "to throw something forcefully; to cause light or shadow to appear",
    "cn_def": "投擲；投射（光影）；選派角色（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to throw something forcefully; to cause light or shadow to appear",
        "cn_def": "投擲；投射（光影）；選派角色（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "all the actors in a play or film; a rigid casing for broken bones",
        "cn_def": "全體演員；石膏夾板（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
