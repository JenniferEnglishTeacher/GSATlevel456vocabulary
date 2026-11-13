// Part 3 Quiz Data: leap – paradise
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 11-3 - leap – paradise",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "leaped",
    "pos": "v.",
    "cn_def": "跳躍；躍過；跳入（動詞）",
    "en_def": "to jump or spring a long way, to a great height, or with great force",
    "sentence": "The graceful white horse easily {{BLANK}} over the wooden fence and galloped across the open meadow.",
    "cn": "那匹優雅的白馬輕巧地躍過木柵欄，在開闊的草地上奔馳。"
  },
  {
    "word": "leap",
    "pos": "n.",
    "cn_def": "跳躍；劇增；巨變（可數）",
    "en_def": "a forceful jump or spring; a dramatic increase or transition",
    "sentence": "With a dramatic flying {{BLANK}}, the energetic sheepdog snatched the colorful plastic Frisbee out of the air.",
    "cn": "伴隨著戲劇性的凌空一躍，精力充沛的牧羊犬在半空中咬住了色彩繽紛的塑膠飛盤。"
  },
  {
    "word": "lettuce",
    "pos": "n.",
    "cn_def": "萵苣；生菜（不可數/可數）",
    "en_def": "a cultivated plant with large green leaves, eaten raw in salads",
    "sentence": "The chef served the grilled garlic shrimp beautifully on a fresh bed of crisp green {{BLANK}}.",
    "cn": "主廚將烤蒜香蝦精美地擺放在一層新鮮酥脆的綠色萵苣底鋪上。"
  },
  {
    "word": "lilies",
    "pos": "n.",
    "cn_def": "百合花（可數）",
    "en_def": "a bulbous plant with large, trumpet-shaped, typically fragrant flowers",
    "sentence": "Tourists gathered quietly around the calm pond to admire the beautiful pink water {{BLANK}} floating peacefully.",
    "cn": "遊客們靜靜聚集在平靜的池塘周圍，欣賞安詳漂浮的美麗粉紅睡蓮／百合。"
  },
  {
    "word": "lively",
    "pos": "adj.",
    "cn_def": "活潑的；充滿生氣的；熱烈的",
    "en_def": "full of life and energy; active, enthusiastic, and animated",
    "sentence": "The cheerful accordion music created such a {{BLANK}} atmosphere that all the guests wanted to dance.",
    "cn": "歡快的手風琴音樂營造出了如此充滿生氣且熱鬧的氛圍，以至於所有客人都想跳舞。"
  },
  {
    "word": "loaf",
    "pos": "n.",
    "cn_def": "一條（麵包）；一塊（可數）",
    "en_def": "a shaped mass of bread baked in one piece (pl. loaves)",
    "sentence": "Early every Saturday morning, my father visits the corner bakery to buy a warm {{BLANK}} of sourdough bread.",
    "cn": "每週六清晨，我父親都會去街角的麵包店買一條剛出爐的酸種麵包。"
  },
  {
    "word": "loafing",
    "pos": "v.",
    "cn_def": "虛度光陰；遊手好閒；晃蕩（動詞）",
    "en_def": "to spend time idly; to lounge about doing nothing",
    "sentence": "Instead of completing his homework or tidying his messy bedroom, Sam spent the whole afternoon {{BLANK}} around.",
    "cn": "山姆沒有完成作業或整理凌亂的臥室，而是整個下午都在閒晃虛度光陰。"
  },
  {
    "word": "necessities",
    "pos": "n.",
    "cn_def": "必然性；必要原則；必需品（可數/不可數）",
    "en_def": "the fact of being required or indispensable; an essential thing",
    "sentence": "Clean drinking water, warm shelter, and nutritious food are considered absolute {{BLANK}} for human survival.",
    "cn": "乾淨的飲用水、溫暖的住所與有營養的食物被認為是人類生存的絕對必需品。"
  },
  {
    "word": "occasion",
    "pos": "n.",
    "cn_def": "場合；時刻；重要活動；盛會（可數）",
    "en_def": "a particular time or event; a special or formal event",
    "sentence": "The university graduation ceremony was an {{BLANK}} of tremendous joy and pride for all families.",
    "cn": "大學畢業典禮對所有家庭而言都是一個充滿無比喜悅與自豪的盛大場合／活動。"
  },
  {
    "word": "occasional",
    "pos": "adj.",
    "cn_def": "偶爾的；不常的",
    "en_def": "occurring, appearing, or done seldom and irregularly",
    "sentence": "Apart from an {{BLANK}} heavy rain shower, the autumn weather on the island remained mostly sunny and dry.",
    "cn": "除了一場偶爾的強陣雨之外，島上的秋天天氣大部分時間保持晴朗乾燥。"
  },
  {
    "word": "paradise",
    "pos": "n.",
    "cn_def": "樂園；天堂；樂土（不可數/可數）",
    "en_def": "an ideal or idyllic place; heaven in Christian and religious belief",
    "sentence": "With its turquoise sea waters, white sandy beaches, and swaying palms, the Caribbean island is a tropical {{BLANK}}.",
    "cn": "擁有綠松石般的清澈海水、白沙灘與搖曳棕櫚樹，這座加勒比海島嶼宛如一個熱帶人間仙境／樂園。"
  }
];

const MCQS = [
  {
    "q": "The farmer bought a warm ______ of fresh bread from the bakery for breakfast.",
    "options": [
      "loaf",
      "lily",
      "lettuce",
      "paradise"
    ],
    "answer": 0,
    "cn": "農夫從麵包店買了一條新鮮溫熱的麵包當早餐。",
    "vocabIndex": 5
  },
  {
    "q": "In the pond, a beautiful white water ______ was floating peacefully on the water.",
    "options": [
      "loaf",
      "lily",
      "necessity",
      "occasion"
    ],
    "answer": 1,
    "cn": "池塘裡，一朵美麗的白色睡蓮／百合安詳地漂浮在水面上。",
    "vocabIndex": 3
  },
  {
    "q": "Mom washed the green leaves of the fresh ______ to make a healthy dinner salad.",
    "options": [
      "paradise",
      "loaf",
      "lettuce",
      "occasion"
    ],
    "answer": 2,
    "cn": "媽媽清洗了新鮮萵苣／生菜的綠葉，準備做一道健康的晚餐沙拉。",
    "vocabIndex": 2
  },
  {
    "q": "Having clean water and warm clothes is a basic ______ for every human being.",
    "options": [
      "loaf",
      "lily",
      "lettuce",
      "necessity"
    ],
    "answer": 3,
    "cn": "擁有乾淨的水與保暖的衣物是每個人基本的生活必需品／必要條件。",
    "vocabIndex": 7
  },
  {
    "q": "The sunny island with blue seas and white beaches was a true tropical ______.",
    "options": [
      "paradise",
      "loaf",
      "lily",
      "lettuce"
    ],
    "answer": 0,
    "cn": "那座擁有蔚藍海洋與白色沙灘的晴朗島嶼是個真正的熱帶天堂／樂園。",
    "vocabIndex": 10
  },
  {
    "q": "My grandparents' fiftieth wedding anniversary was a joyful and memorable ______.",
    "options": [
      "loaf",
      "lettuce",
      "occasion",
      "lily"
    ],
    "answer": 2,
    "cn": "我祖父母的五十週年結婚紀念日是一個充滿喜悅且難忘的盛大場合／慶典。",
    "vocabIndex": 8
  },
  {
    "q": "With one big ______, the little brown frog jumped across the muddy puddle.",
    "options": [
      "loaf",
      "leap",
      "lily",
      "paradise"
    ],
    "answer": 1,
    "cn": "大大的一躍，褐色小青蛙跳過了泥濘的水坑。",
    "vocabIndex": 0
  },
  {
    "q": "We bought a long ______ of French bread and cut it into small slices.",
    "options": [
      "paradise",
      "lettuce",
      "lily",
      "loaf"
    ],
    "answer": 3,
    "cn": "我們買了一長條法國麵包，並將它切成小片。",
    "vocabIndex": 5
  },
  {
    "q": "The flower shop sold pots of sweet-smelling white ______ for the holiday.",
    "options": [
      "lilies",
      "loaves",
      "paradises",
      "leaps"
    ],
    "answer": 0,
    "cn": "花店為了節日販賣盆裝芳香怡人的白色百合花。",
    "vocabIndex": 3
  },
  {
    "q": "Put some fresh green ______ and tomatoes inside the sandwich to make it delicious.",
    "options": [
      "loaf",
      "leap",
      "paradise",
      "lettuce"
    ],
    "answer": 3,
    "cn": "在三明治裡放一些新鮮綠色的生菜／萵苣與番茄，讓它更美味。",
    "vocabIndex": 2
  },
  {
    "q": "Because food was a strict ______ during the cold winter, families shared everything.",
    "options": [
      "loaf",
      "necessity",
      "lily",
      "leap"
    ],
    "answer": 1,
    "cn": "因為在寒冬中食物是嚴格的必需品，各家各戶共享了一切。",
    "vocabIndex": 7
  },
  {
    "q": "Going to Disneyland was like stepping into a magical and colorful children's ______.",
    "options": [
      "loaf",
      "lettuce",
      "paradise",
      "lily"
    ],
    "answer": 2,
    "cn": "去迪士尼樂園就像步入了一個神奇且多彩的兒童樂園／天堂。",
    "vocabIndex": 10
  },
  {
    "q": "The black cat took a big running ______ and landed safely on top of the wall.",
    "options": [
      "loaf",
      "leap",
      "lettuce",
      "lily"
    ],
    "answer": 1,
    "cn": "黑貓助跑奮力一跳，安全降落在牆頭上。",
    "vocabIndex": 0
  },
  {
    "q": "Wearing a formal black suit is very important for this special ______, so dress neatly.",
    "options": [
      "loaf",
      "lettuce",
      "occasion",
      "lily"
    ],
    "answer": 2,
    "cn": "穿著正式黑西裝對於這個特殊場合非常重要，因此要穿戴整齊。",
    "vocabIndex": 8
  },
  {
    "q": "The energetic horse ______ over the wide creek and ran freely across the field.",
    "options": [
      "dosed",
      "envied",
      "arrested",
      "leapt"
    ],
    "answer": 3,
    "cn": "那匹精力充沛的馬躍過了寬闊的小溪，在田野中自由奔馳。",
    "vocabIndex": 0
  },
  {
    "q": "Lazy Ben just ______ around the living room sofa all weekend watching TV.",
    "options": [
      "loafed",
      "envied",
      "dosed",
      "arrested"
    ],
    "answer": 0,
    "cn": "懶惰的班整個週末都在客廳沙發邊閒晃遊蕩，看著電視。",
    "vocabIndex": 5
  },
  {
    "q": "The funny clown made everyone in the room smile and ______ with joy.",
    "options": [
      "arrest",
      "loaf",
      "dose",
      "leap"
    ],
    "answer": 3,
    "cn": "滑稽的小丑讓房間裡的每個人都微笑並高興得跳躍起來。",
    "vocabIndex": 0
  },
  {
    "q": "Stop ______ about and help your father carry these heavy wooden boxes inside.",
    "options": [
      "loafing",
      "arresting",
      "envying",
      "dosing"
    ],
    "answer": 0,
    "cn": "別再閒混偷懶了，快幫你父親把這些沉重的木箱搬進屋裡。",
    "vocabIndex": 5
  },
  {
    "q": "The upbeat party music was very ______ and made all the children start dancing.",
    "options": [
      "holy",
      "eager",
      "lively",
      "occasional"
    ],
    "answer": 2,
    "cn": "歡快節奏的派對音樂非常充滿生氣活力，讓所有孩子都跳起舞來。",
    "vocabIndex": 4
  },
  {
    "q": "We enjoy a sunny day in the park, with an ______ gentle breeze keeping us cool.",
    "options": [
      "holy",
      "occasional",
      "athletic",
      "eager"
    ],
    "answer": 1,
    "cn": "我們在公園享受晴朗的一天，偶爾拂過的微風讓我們感到涼爽舒適。",
    "vocabIndex": 9
  },
  {
    "q": "Puppies are naturally very playful and ______, running around the house all day.",
    "options": [
      "eager",
      "holy",
      "occasional",
      "lively"
    ],
    "answer": 3,
    "cn": "小狗天生非常愛玩且生氣勃勃，整天在屋子裡跑來跑去。",
    "vocabIndex": 4
  },
  {
    "q": "Although he lives far away, Uncle David pays us an ______ visit on holidays.",
    "options": [
      "occasional",
      "eager",
      "lively",
      "holy"
    ],
    "answer": 0,
    "cn": "雖然住得很遠，大衛叔叔在節假日會來偶爾探望我們一下。",
    "vocabIndex": 9
  },
  {
    "q": "After reading lots of English storybooks, Lily's vocabulary grew ______.",
    "options": [
      "under arrest",
      "in leaps and bounds",
      "green with envy",
      "on thin ice"
    ],
    "answer": 1,
    "cn": "在閱讀了許多英語故事書之後，莉莉的字彙量突飛猛進地增長。",
    "vocabIndex": 0
  },
  {
    "q": "When asked who wrote the famous play Romeo and Juliet, Shakespeare immediately ______.",
    "options": [
      "hit a brick wall",
      "took a fancy",
      "leapt to mind",
      "rained in buckets"
    ],
    "answer": 2,
    "cn": "當被問及是誰寫了著名的《羅密歐與茱麗葉》時，莎士比亞的名字立刻浮現在腦海中。",
    "vocabIndex": 0
  },
  {
    "q": "Because their family had no money for electricity, they had to cook ______.",
    "options": [
      "under arrest",
      "out of necessity",
      "in leaps and bounds",
      "all thumbs"
    ],
    "answer": 1,
    "cn": "因為他們家沒有繳電費的錢，他們出於迫不得已只好用柴火做飯。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "leap": {
    "pos": "v.",
    "en_def": "to jump or spring a long way, to a great height, or with great force",
    "cn_def": "跳躍；躍過；跳入（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to jump or spring a long way, to a great height, or with great force",
        "cn_def": "跳躍；躍過；跳入（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a forceful jump or spring; a dramatic increase or transition",
        "cn_def": "跳躍；劇增；巨變（可數）"
      }
    ]
  },
  "leaped": {
    "pos": "v.",
    "en_def": "to jump or spring a long way, to a great height, or with great force",
    "cn_def": "跳躍；躍過；跳入（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to jump or spring a long way, to a great height, or with great force",
        "cn_def": "跳躍；躍過；跳入（動詞）"
      }
    ]
  },
  "lettuce": {
    "pos": "n.",
    "en_def": "a cultivated plant with large green leaves, eaten raw in salads",
    "cn_def": "萵苣；生菜（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a cultivated plant with large green leaves, eaten raw in salads",
        "cn_def": "萵苣；生菜（不可數/可數）"
      }
    ]
  },
  "lilies": {
    "pos": "n.",
    "en_def": "a bulbous plant with large, trumpet-shaped, typically fragrant flowers",
    "cn_def": "百合花（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a bulbous plant with large, trumpet-shaped, typically fragrant flowers",
        "cn_def": "百合花（可數）"
      }
    ]
  },
  "lily": {
    "pos": "n.",
    "en_def": "a bulbous plant with large, trumpet-shaped, typically fragrant flowers",
    "cn_def": "百合花（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a bulbous plant with large, trumpet-shaped, typically fragrant flowers",
        "cn_def": "百合花（可數）"
      }
    ]
  },
  "lively": {
    "pos": "adj.",
    "en_def": "full of life and energy; active, enthusiastic, and animated",
    "cn_def": "活潑的；充滿生氣的；熱烈的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "full of life and energy; active, enthusiastic, and animated",
        "cn_def": "活潑的；充滿生氣的；熱烈的"
      }
    ]
  },
  "loaf": {
    "pos": "n.",
    "en_def": "a shaped mass of bread baked in one piece (pl. loaves)",
    "cn_def": "一條（麵包）；一塊（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a shaped mass of bread baked in one piece (pl. loaves)",
        "cn_def": "一條（麵包）；一塊（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to spend time idly; to lounge about doing nothing",
        "cn_def": "虛度光陰；遊手好閒；晃蕩（動詞）"
      }
    ]
  },
  "loafing": {
    "pos": "v.",
    "en_def": "to spend time idly; to lounge about doing nothing",
    "cn_def": "虛度光陰；遊手好閒；晃蕩（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to spend time idly; to lounge about doing nothing",
        "cn_def": "虛度光陰；遊手好閒；晃蕩（動詞）"
      }
    ]
  },
  "necessity": {
    "pos": "n.",
    "en_def": "the fact of being required or indispensable; an essential thing",
    "cn_def": "必然性；必要原則；必需品（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the fact of being required or indispensable; an essential thing",
        "cn_def": "必然性；必要原則；必需品（可數/不可數）"
      }
    ]
  },
  "necessities": {
    "pos": "n.",
    "en_def": "the fact of being required or indispensable; an essential thing",
    "cn_def": "必然性；必要原則；必需品（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the fact of being required or indispensable; an essential thing",
        "cn_def": "必然性；必要原則；必需品（可數/不可數）"
      }
    ]
  },
  "occasion": {
    "pos": "n.",
    "en_def": "a particular time or event; a special or formal event",
    "cn_def": "場合；時刻；重要活動；盛會（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a particular time or event; a special or formal event",
        "cn_def": "場合；時刻；重要活動；盛會（可數）"
      }
    ]
  },
  "occasional": {
    "pos": "adj.",
    "en_def": "occurring, appearing, or done seldom and irregularly",
    "cn_def": "偶爾的；不常的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "occurring, appearing, or done seldom and irregularly",
        "cn_def": "偶爾的；不常的"
      }
    ]
  },
  "paradise": {
    "pos": "n.",
    "en_def": "an ideal or idyllic place; heaven in Christian and religious belief",
    "cn_def": "樂園；天堂；樂土（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an ideal or idyllic place; heaven in Christian and religious belief",
        "cn_def": "樂園；天堂；樂土（不可數/可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
