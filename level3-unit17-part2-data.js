// Part 2 Quiz Data: flavor – jewel
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 17-2 - flavor – jewel",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "flavor",
    "pos": "n./v.",
    "cn_def": "風味；口味（名詞）；給…調味（動詞）",
    "en_def": "the distinctive taste of a food or drink; to impart flavor to",
    "sentence": "The experienced Italian chef likes to {{BLANK}} his tomato pasta sauce with fresh basil and garlic.",
    "cn": "那位經驗豐富的義大利主廚喜歡用新鮮羅勒和大蒜為他的番茄義大利麵醬調味。"
  },
  {
    "word": "gap",
    "pos": "n.",
    "cn_def": "缺口；間隔；分歧；差距（可數）",
    "en_def": "a break or hole in an object, or a wide difference in views or age",
    "sentence": "There is a noticeable generation {{BLANK}} between elderly grandparents and tech-savvy teenagers.",
    "cn": "在年邁的祖父母與精通科技的青少年之間存在著明顯的代溝／差距。"
  },
  {
    "word": "handkerchief",
    "pos": "n.",
    "cn_def": "手帕；手絹（可數）",
    "en_def": "a small square piece of linen or silk carried in one's pocket for wiping the face",
    "sentence": "Marvin always carries a clean cotton {{BLANK}} in his pocket to wipe his brow on humid days.",
    "cn": "馬文總是在口袋裡帶著一條乾淨的棉質手帕，以便在潮濕悶熱的天氣擦拭額頭。"
  },
  {
    "word": "handy",
    "pos": "adj.",
    "cn_def": "便利的；手巧的；近便手邊的",
    "en_def": "convenient to handle or use, or placed within easy reach",
    "sentence": "Carrying an umbrella in your backpack will definitely come in {{BLANK}} if sudden afternoon showers occur.",
    "cn": "如果午後突然下起陣雨，背包裡帶著一把雨傘肯定會派上用場。"
  },
  {
    "word": "hanger",
    "pos": "n.",
    "cn_def": "衣架（可數）",
    "en_def": "a curved piece of wood, plastic, or wire with a hook, used for hanging clothes",
    "sentence": "I ran completely out of plastic clothes {{BLANK}} after doing three large loads of weekend laundry.",
    "cn": "洗完週末的三大籃衣服後，我的塑膠衣架完全用光了。"
  },
  {
    "word": "honesty",
    "pos": "n.",
    "cn_def": "誠實；正直；率直（不可數）",
    "en_def": "the quality of being fair, truthful, and morally upright",
    "sentence": "Darren confessed that he had broken the valuable vase, and the teacher truly appreciated his {{BLANK}}.",
    "cn": "達倫坦白是他打破了那只昂貴的花瓶，老師由衷地欣賞他的誠實。"
  },
  {
    "word": "inferior",
    "pos": "adj./n.",
    "cn_def": "較差的；次等的（形容詞）；下級／部屬（名詞）",
    "en_def": "lower in rank, status, or quality; a person lower in rank or status",
    "sentence": "These imported counterfeit handbags are sold at low prices because they are made of {{BLANK}} leather.",
    "cn": "這些進口仿冒手提包之所以廉價出售，是因為它們是用劣質／次等皮革製成的。"
  },
  {
    "word": "jewels",
    "pos": "n.",
    "cn_def": "寶石；珠寶；珍貴之物（可數）",
    "en_def": "a precious stone, typically a single crystal, or a highly valued thing",
    "sentence": "The royal exhibition displayed sparkling golden crowns set with dazzling rubies and precious {{BLANK}}.",
    "cn": "皇家展覽展示了鑲嵌著耀眼紅寶石與珍貴寶石的閃爍金冠。"
  }
];

const MCQS = [
  {
    "q": "The bakery offers ice cream in twelve delicious ______ including mango and matcha.",
    "options": [
      "hangers",
      "jewels",
      "flavors",
      "gaps"
    ],
    "answer": 2,
    "cn": "這家烘焙坊提供包括芒果與抹茶在內的十二種美味口味／風味冰淇淋。",
    "vocabIndex": 0
  },
  {
    "q": "There is a wide generation ______ between the retired grandfather and his grandchild.",
    "options": [
      "gap",
      "jewel",
      "flavor",
      "hanger"
    ],
    "answer": 0,
    "cn": "在退休的祖父與他的孫子之間存在著巨大的世代代溝／差距。",
    "vocabIndex": 1
  },
  {
    "q": "The gentleman wiped the sweat from his forehead with a clean cotton ______.",
    "options": [
      "jewel",
      "flavor",
      "hanger",
      "handkerchief"
    ],
    "answer": 3,
    "cn": "那位紳士用一條乾淨的棉質手帕擦拭額頭上的汗水。",
    "vocabIndex": 2
  },
  {
    "q": "Please hang your clean shirts neatly on a wooden ______ inside the closet.",
    "options": [
      "gap",
      "hanger",
      "jewel",
      "flavor"
    ],
    "answer": 1,
    "cn": "請將乾淨的襯衫整齊地掛在衣櫥內的木質衣架上。",
    "vocabIndex": 4
  },
  {
    "q": "The queen wore a golden necklace sparkling with many precious red ______.",
    "options": [
      "flavors",
      "hangers",
      "jewels",
      "gaps"
    ],
    "answer": 2,
    "cn": "女王戴著一條閃爍著許多珍貴紅寶石的黃金項鍊。",
    "vocabIndex": 7
  },
  {
    "q": "We admire George because his complete ______ makes him a trustworthy friend.",
    "options": [
      "honesty",
      "hanger",
      "jewel",
      "gap"
    ],
    "answer": 0,
    "cn": "我們敬佩喬治，因為他的完全誠實使他成為一位值得信賴的朋友。",
    "vocabIndex": 5
  },
  {
    "q": "Cheap plastic toys are often of ______ quality compared to wooden ones.",
    "options": [
      "handy",
      "inferior",
      "honest",
      "flavorful"
    ],
    "answer": 1,
    "cn": "廉價塑膠玩具與木質玩具相比，品質往往較次等／劣質。",
    "vocabIndex": 6
  },
  {
    "q": "A Swiss army knife is a very ______ tool when you are camping outdoors.",
    "options": [
      "additional",
      "inferior",
      "dishonest",
      "handy"
    ],
    "answer": 3,
    "cn": "在戶外露營時，瑞士刀是一件非常便利手邊實用的工具。",
    "vocabIndex": 3
  },
  {
    "q": "Tell me the truth because being ______ is always the best way to earn trust.",
    "options": [
      "inferior",
      "handy",
      "honest",
      "competitive"
    ],
    "answer": 2,
    "cn": "告訴我實情，因為做人誠實永遠是贏得信任的最佳途徑。",
    "vocabIndex": 5
  },
  {
    "q": "The shop assistant was ______ and tried to cheat tourists by overcharging.",
    "options": [
      "handy",
      "flavorful",
      "additional",
      "dishonest"
    ],
    "answer": 3,
    "cn": "那位店員很不誠實，試圖透過超額收費來欺騙遊客。"
  },
  {
    "q": "The chef decided to ______ the chicken soup with fresh rosemary and black pepper.",
    "options": [
      "gap",
      "flavor",
      "jewel",
      "hang"
    ],
    "answer": 1,
    "cn": "主廚決定用新鮮迷迭香與黑胡椒來為雞湯調味。",
    "vocabIndex": 0
  },
  {
    "q": "A good manager knows how to treat his ______ with kindness and respect.",
    "options": [
      "inferiors",
      "flavors",
      "hangers",
      "jewels"
    ],
    "answer": 0,
    "cn": "一位優秀的經理懂得如何以仁慈與尊重對待他的部屬／下級。",
    "vocabIndex": 6
  },
  {
    "q": "Grandma keeps her diamond rings safely locked in a wooden ______ box.",
    "options": [
      "hanger",
      "gap",
      "flavor",
      "jewel"
    ],
    "answer": 3,
    "cn": "奶奶將她的鑽戒安全鎖在一個木製珠寶／首飾盒裡。",
    "vocabIndex": 7
  },
  {
    "q": "We brought a flashlight on the hike, which really ______ when it grew dark.",
    "options": [
      "bridged the gap",
      "told a lie",
      "came in handy",
      "fell inferior"
    ],
    "answer": 2,
    "cn": "我們健行時帶了手電筒，在天色變暗時真的大大派上用場。",
    "vocabIndex": 3
  },
  {
    "q": "The elderly teacher believes that ______ in every situation in life.",
    "options": [
      "generation gap",
      "honesty is the best policy",
      "artificial flavor",
      "red carpet"
    ],
    "answer": 1,
    "cn": "那位老教師深信在生活中的任何情境下誠實為上策。",
    "vocabIndex": 5
  },
  {
    "q": "The government launched new free courses to ______ between urban and rural schools.",
    "options": [
      "bridge the gap",
      "come in handy",
      "roll out the red carpet",
      "cut off electricity"
    ],
    "answer": 0,
    "cn": "政府推出了新的免費課程以縮小城鄉學校之間的差距。",
    "vocabIndex": 1
  },
  {
    "q": "Please ______ so you can use it whenever you need to take quick notes.",
    "options": [
      "bridge the gap",
      "keep a pen handy",
      "roll out the carpet",
      "feel inferior to"
    ],
    "answer": 1,
    "cn": "請隨手把筆放在手邊，這樣當你需要快速做筆記時就可以隨時使用。",
    "vocabIndex": 3
  },
  {
    "q": "This soft drink contains no ______ and is sweetened only with real fruit juice.",
    "options": [
      "clothes hanger",
      "generation gap",
      "artificial flavor",
      "silk handkerchief"
    ],
    "answer": 2,
    "cn": "這款汽水不含人工香料，僅使用純天然果汁調味。",
    "vocabIndex": 0
  },
  {
    "q": "The newly discovered ancient temple is the true ______ of the national park.",
    "options": [
      "generation gap",
      "clothes hanger",
      "additional cost",
      "jewel in the crown"
    ],
    "answer": 3,
    "cn": "新發現的古老神廟正是這座國家公園真正的皇冠上的明珠。",
    "vocabIndex": 7
  },
  {
    "q": "My brother felt that his old car was ______ in comfort and safety to modern models.",
    "options": [
      "inferior",
      "honest",
      "additional",
      "handy"
    ],
    "answer": 0,
    "cn": "我弟弟覺得他的老爺車在舒適度與安全性方面不如／次於現代車款。",
    "vocabIndex": 6
  },
  {
    "q": "The girl tied her hair back with a piece of ribbon and pulled out a soft ______.",
    "options": [
      "advantage",
      "handkerchief",
      "generator",
      "competition"
    ],
    "answer": 1,
    "cn": "女孩用一根絲帶將頭髮綁在腦後，並拿出一條柔軟的手帕。",
    "vocabIndex": 2
  },
  {
    "q": "Good leaders always listen to their staff and never act as if employees are ______.",
    "options": [
      "handy",
      "competitive",
      "decorative",
      "inferior"
    ],
    "answer": 3,
    "cn": "優秀的領導者總是傾聽員工心聲，從不表現得好像員工低人一等。",
    "vocabIndex": 6
  },
  {
    "q": "This small pocket flashlight will ______ during the sudden electric blackout.",
    "options": [
      "bridge the gap",
      "roll out the carpet",
      "come in handy",
      "take a dislike to"
    ],
    "answer": 2,
    "cn": "在突然停電時，這支小口袋手電筒將會派上用場。",
    "vocabIndex": 3
  },
  {
    "q": "We bought five sturdy wooden ______ for our heavy winter overcoats.",
    "options": [
      "hangers",
      "jewels",
      "flavors",
      "gaps"
    ],
    "answer": 0,
    "cn": "我們買了五個結實的木質衣架來掛厚重的冬季大衣。",
    "vocabIndex": 4
  },
  {
    "q": "The museum guards protected the historic golden crown and its precious ______.",
    "options": [
      "gaps",
      "hangers",
      "flavors",
      "jewels"
    ],
    "answer": 3,
    "cn": "博物館警衛守護著具有歷史意義的金冠及其珍貴的寶石。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "flavor": {
    "pos": "n./v.",
    "en_def": "the distinctive taste of a food or drink; to impart flavor to",
    "cn_def": "風味；口味（名詞）；給…調味（動詞）",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "the distinctive taste of a food or drink; to impart flavor to",
        "cn_def": "風味；口味（名詞）；給…調味（動詞）"
      }
    ]
  },
  "gap": {
    "pos": "n.",
    "en_def": "a break or hole in an object, or a wide difference in views or age",
    "cn_def": "缺口；間隔；分歧；差距（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a break or hole in an object, or a wide difference in views or age",
        "cn_def": "缺口；間隔；分歧；差距（可數）"
      }
    ]
  },
  "handkerchief": {
    "pos": "n.",
    "en_def": "a small square piece of linen or silk carried in one's pocket for wiping the face",
    "cn_def": "手帕；手絹（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small square piece of linen or silk carried in one's pocket for wiping the face",
        "cn_def": "手帕；手絹（可數）"
      }
    ]
  },
  "handy": {
    "pos": "adj.",
    "en_def": "convenient to handle or use, or placed within easy reach",
    "cn_def": "便利的；手巧的；近便手邊的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "convenient to handle or use, or placed within easy reach",
        "cn_def": "便利的；手巧的；近便手邊的"
      }
    ]
  },
  "hanger": {
    "pos": "n.",
    "en_def": "a curved piece of wood, plastic, or wire with a hook, used for hanging clothes",
    "cn_def": "衣架（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a curved piece of wood, plastic, or wire with a hook, used for hanging clothes",
        "cn_def": "衣架（可數）"
      }
    ]
  },
  "honesty": {
    "pos": "n.",
    "en_def": "the quality of being fair, truthful, and morally upright",
    "cn_def": "誠實；正直；率直（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of being fair, truthful, and morally upright",
        "cn_def": "誠實；正直；率直（不可數）"
      }
    ]
  },
  "inferior": {
    "pos": "adj./n.",
    "en_def": "lower in rank, status, or quality; a person lower in rank or status",
    "cn_def": "較差的；次等的（形容詞）；下級／部屬（名詞）",
    "combined": [
      {
        "pos": "adj./n.",
        "en_def": "lower in rank, status, or quality; a person lower in rank or status",
        "cn_def": "較差的；次等的（形容詞）；下級／部屬（名詞）"
      }
    ]
  },
  "jewels": {
    "pos": "n.",
    "en_def": "a precious stone, typically a single crystal, or a highly valued thing",
    "cn_def": "寶石；珠寶；珍貴之物（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a precious stone, typically a single crystal, or a highly valued thing",
        "cn_def": "寶石；珠寶；珍貴之物（可數）"
      }
    ]
  },
  "jewel": {
    "pos": "n.",
    "en_def": "a precious stone, typically a single crystal, or a highly valued thing",
    "cn_def": "寶石；珠寶；珍貴之物（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a precious stone, typically a single crystal, or a highly valued thing",
        "cn_def": "寶石；珠寶；珍貴之物（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
