// Group 50 Quiz Data: Common Nouns, Part 1 (常見名詞 一)
// Converted from the grammar-pattern quiz for this group (tools/convert_g.py).
const QUIZ_CONFIG = {
  "groupName": "Group 50 - Common Nouns, Part 1 (常見名詞 一)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "top",
    "pos": "n.",
    "cn_def": "頂部；頭頂",
    "en_def": "the highest part of something",
    "sentence": "What was at the {{BLANK}} of the mountain? There was a small temple.",
    "cn": "山頂上有什麼？ 有一座小廟。"
  },
  {
    "word": "bottom",
    "pos": "n.",
    "cn_def": "底部",
    "en_def": "the lowest part of something",
    "sentence": "What was at the {{BLANK}} of the box? There were some old photos.",
    "cn": "箱子底部有什麼？ 有一些舊照片。"
  },
  {
    "word": "accident",
    "pos": "n.",
    "cn_def": "車禍；意外事件",
    "en_def": "something bad that happens when nobody plans it",
    "sentence": "Why were you late? There was a car {{BLANK}} on the road.",
    "cn": "你為什麼遲到？ 路上發生了一場車禍。"
  },
  {
    "word": "action",
    "pos": "n.",
    "cn_def": "行動；活動",
    "en_def": "something that you do",
    "sentence": "What should we do about the trash on the beach? We should take {{BLANK}} and pay attention to the problem.",
    "cn": "海灘上的垃圾我們該怎麼辦？ 我們應該採取行動並關注這個問題。"
  },
  {
    "word": "activity",
    "pos": "n.",
    "cn_def": "活動",
    "en_def": "something you do for fun or to learn",
    "sentence": "What was your favorite {{BLANK}} at camp? There were many, but I liked swimming best.",
    "cn": "夏令營裡你最喜歡的活動是什麼？ 活動很多，但我最喜歡游泳。"
  },
  {
    "word": "address",
    "pos": "n.",
    "cn_def": "地址；演講",
    "en_def": "the number and street name of the place where someone lives",
    "sentence": "Did you write the {{BLANK}} on the envelope? Yes. I paid attention to every word.",
    "cn": "你在信封上寫地址了嗎？ 寫了。我每個字都很注意。"
  },
  {
    "word": "advice",
    "pos": "n.",
    "cn_def": "忠告；勸告",
    "en_def": "words that tell someone what they should do",
    "sentence": "Can you give me some {{BLANK}}? Sure. Here's a piece of advice: study a little every day.",
    "cn": "你可以給我一些建議嗎？ 當然。給你一個建議：每天念一點書。"
  },
  {
    "word": "age",
    "pos": "n.",
    "cn_def": "年齡",
    "en_def": "how old a person or thing is",
    "sentence": "What was the {{BLANK}} of the oldest person at the party? There was a man who was ninety-five.",
    "cn": "派對上年紀最大的人幾歲？ 有一位九十五歲的男士。"
  },
  {
    "word": "all",
    "pos": "n.",
    "cn_def": "全部",
    "en_def": "every one, or the whole amount",
    "sentence": "Did you eat the cake? Yes, I ate it {{BLANK}}. There isn't any left.",
    "cn": "你吃了蛋糕嗎？ 對，我全部吃完了。一點都不剩。"
  },
  {
    "word": "all",
    "pos": "adj.",
    "cn_def": "全部的",
    "en_def": "every one of; the whole of",
    "sentence": "Were there many students at the meeting? Yes. {{BLANK}} the students were there.",
    "cn": "會議上有很多學生嗎？ 有。所有的學生都在。"
  },
  {
    "word": "alphabet",
    "pos": "n.",
    "cn_def": "字母",
    "en_def": "all the letters of a language in order, like A to Z",
    "sentence": "How many letters are there in the English {{BLANK}}? There are twenty-six.",
    "cn": "英文字母有幾個字母？ 有二十六個。"
  },
  {
    "word": "answer",
    "pos": "n.",
    "cn_def": "回答；答案",
    "en_def": "what you say or write when someone asks a question",
    "sentence": "Do you know the {{BLANK}}? Yes. I paid attention to the teacher.",
    "cn": "你知道答案嗎？ 知道。我有專心聽老師說話。"
  },
  {
    "word": "area",
    "pos": "n.",
    "cn_def": "區域",
    "en_def": "a part of a place",
    "sentence": "What was in this {{BLANK}} before? There was a big farm here.",
    "cn": "這個區域以前有什麼？ 這裡以前有一座大農場。"
  },
  {
    "word": "army",
    "pos": "n.",
    "cn_def": "軍隊；大群",
    "en_def": "a large group of soldiers who fight on land",
    "sentence": "Were there many soldiers in the {{BLANK}}? Yes. There were thousands of them.",
    "cn": "那支軍隊裡有很多士兵嗎？ 有。有好幾千人。"
  },
  {
    "word": "attention",
    "pos": "n.",
    "cn_def": "注意；專心",
    "en_def": "the act of watching or listening carefully",
    "sentence": "Why did the teacher stop the class? Nobody was paying {{BLANK}}. She needed some quiet.",
    "cn": "老師為什麼停課？ 沒有人在注意聽。她需要一點安靜。"
  },
  {
    "word": "bomb",
    "pos": "n.",
    "cn_def": "炸彈",
    "en_def": "a thing that blows up and can hurt people",
    "sentence": "What happened at the airport? There was a {{BLANK}} in a bag, but the police found it.",
    "cn": "機場發生了什麼事？ 有一個包包裡有炸彈，但警察發現了。"
  },
  {
    "word": "both",
    "pos": "n.",
    "cn_def": "兩方；兩者",
    "en_def": "the two; one and also the other",
    "sentence": "Do you want tea or coffee? {{BLANK}}, please. I want some tea and some coffee.",
    "cn": "你要茶還是咖啡？ 兩個都要，謝謝。我要一些茶和一些咖啡。"
  },
  {
    "word": "branch",
    "pos": "n.",
    "cn_def": "樹枝；分店",
    "en_def": "a part of a tree that grows out from the main part",
    "sentence": "What was on the {{BLANK}} of the tree? There was a bird's nest.",
    "cn": "樹枝上有什麼？ 有一個鳥巢。"
  },
  {
    "word": "brick",
    "pos": "n.",
    "cn_def": "磚頭",
    "en_def": "a hard block used to build walls and houses",
    "sentence": "What were the old houses made of? They were made of {{BLANK}}s.",
    "cn": "那些老房子是用什麼做的？ 是用磚頭蓋的。"
  },
  {
    "word": "care",
    "pos": "n.",
    "cn_def": "關心；照顧",
    "en_def": "the act of looking after someone or something",
    "sentence": "Who will take {{BLANK}} of your dog? My neighbor will.",
    "cn": "誰會照顧你的狗？ 我的鄰居會。"
  },
  {
    "word": "case",
    "pos": "n.",
    "cn_def": "案件",
    "en_def": "a problem or crime that the police try to solve",
    "sentence": "What did the police find in the {{BLANK}}? There were many clues.",
    "cn": "警察在這個案件中發現了什麼？ 有很多線索。"
  },
  {
    "word": "center",
    "pos": "n.",
    "cn_def": "中心；中央",
    "en_def": "the middle of something",
    "sentence": "What was in the {{BLANK}} of the park? There was a big fountain.",
    "cn": "公園的中央有什麼？ 有一座大噴水池。"
  },
  {
    "word": "chance",
    "pos": "n.",
    "cn_def": "運氣；機會",
    "en_def": "a time when you can do something; luck",
    "sentence": "Did you have a {{BLANK}} to meet the singer? Yes. I had a chance to take a photo with her.",
    "cn": "你有機會見到那位歌手嗎？ 有。我有機會和她合照。"
  },
  {
    "word": "choice",
    "pos": "n.",
    "cn_def": "抉擇；選擇",
    "en_def": "the thing you pick from two or more things",
    "sentence": "Which school will you go to? It's a hard {{BLANK}}. I have to make a choice soon.",
    "cn": "你會去哪一所學校？ 這是個困難的選擇。我很快就得做選擇。"
  },
  {
    "word": "conversation",
    "pos": "n.",
    "cn_def": "對話",
    "en_def": "a talk between two or more people",
    "sentence": "Was there a long {{BLANK}} at dinner? Yes. There was lots of laughing, too.",
    "cn": "晚餐時有很長的對話嗎？ 有。也有很多笑聲。"
  },
  {
    "word": "courage",
    "pos": "n.",
    "cn_def": "勇氣",
    "en_def": "the feeling that lets you do something even when you are afraid",
    "sentence": "Why is the firefighter a hero? He has a lot of {{BLANK}}. He isn't afraid of fire.",
    "cn": "那位消防員為什麼是英雄？ 他很有勇氣。他不怕火。"
  },
  {
    "word": "crime",
    "pos": "n.",
    "cn_def": "罪；犯罪行為",
    "en_def": "something bad that is against the law",
    "sentence": "Was there a {{BLANK}} in the town last night? Yes. There was a robbery at the bank.",
    "cn": "昨晚鎮上發生了犯罪事件嗎？ 有。銀行發生了搶案。"
  },
  {
    "word": "crowd",
    "pos": "n.",
    "cn_def": "群眾",
    "en_def": "a large group of people in one place",
    "sentence": "Why couldn't you see the show? There was a big {{BLANK}} in front of me.",
    "cn": "你為什麼看不到表演？ 我前面有一大群人。"
  },
  {
    "word": "culture",
    "pos": "n.",
    "cn_def": "文化",
    "en_def": "the way of life, ideas, and art of a group of people",
    "sentence": "What do you like about Japanese {{BLANK}}? I like the food and the festivals.",
    "cn": "你喜歡日本文化的什麼？ 我喜歡那裡的食物和節慶。"
  },
  {
    "word": "curve",
    "pos": "n.",
    "cn_def": "曲線；彎道",
    "en_def": "a line or road that bends",
    "sentence": "Why should we drive slowly here? There's a sharp {{BLANK}}. Pay attention to the road.",
    "cn": "我們為什麼要在這裡開慢一點？ 這裡有個急彎。注意路況。"
  },
  {
    "word": "custom",
    "pos": "n.",
    "cn_def": "習俗",
    "en_def": "something people in a place have done for a long time",
    "sentence": "What is a Taiwanese New Year {{BLANK}}? Children get some lucky money in red envelopes.",
    "cn": "台灣過年有什麼習俗？ 小孩會拿到裝在紅包裡的壓歲錢。"
  },
  {
    "word": "danger",
    "pos": "n.",
    "cn_def": "危險",
    "en_def": "something that may hurt you",
    "sentence": "Was there any {{BLANK}} on the hike? Yes. There were some snakes on the path.",
    "cn": "健行時有任何危險嗎？ 有。路上有一些蛇。"
  }
];

const MCQS = [
  {
    "q": "What was at the ______ of the mountain? There was a small temple.",
    "options": [
      "branch",
      "age",
      "curve",
      "top"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "What was at the ______ of the box? There were some old photos.",
    "options": [
      "culture",
      "top",
      "bottom",
      "area"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Why were you late? There was a car ______ on the road.",
    "options": [
      "accident",
      "alphabet",
      "custom",
      "both"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "What should we do about the trash on the beach? We should take ______ and pay attention to the problem.",
    "options": [
      "courage",
      "action",
      "bomb",
      "area"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "What was your favorite ______ at camp? There were many, but I liked swimming best.",
    "options": [
      "all",
      "choice",
      "activity",
      "crime"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Did you write the ______ on the envelope? Yes. I paid attention to every word.",
    "options": [
      "address",
      "crowd",
      "attention",
      "alphabet"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Can you give me some ______? Sure. Here's a piece of advice: study a little every day.",
    "options": [
      "answer",
      "advice",
      "action",
      "alphabet"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "What was the ______ of the oldest person at the party? There was a man who was ninety-five.",
    "options": [
      "curve",
      "culture",
      "conversation",
      "age"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Did you eat the cake? Yes, I ate it ______. There isn't any left.",
    "options": [
      "accident",
      "crime",
      "all",
      "advice"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Were there many students at the meeting? Yes. ______ the students were there.",
    "options": [
      "All",
      "Late",
      "Impolite",
      "Asleep"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "How many letters are there in the English ______? There are twenty-six.",
    "options": [
      "chance",
      "alphabet",
      "area",
      "top"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Do you know the ______? Yes. I paid attention to the teacher.",
    "options": [
      "alphabet",
      "bomb",
      "custom",
      "answer"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "What was in this ______ before? There was a big farm here.",
    "options": [
      "area",
      "address",
      "activity",
      "care"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Were there many soldiers in the ______? Yes. There were thousands of them.",
    "options": [
      "case",
      "army",
      "area",
      "top"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Why did the teacher stop the class? Nobody was paying ______. She needed some quiet.",
    "options": [
      "danger",
      "bottom",
      "attention",
      "all"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "What happened at the airport? There was a ______ in a bag, but the police found it.",
    "options": [
      "center",
      "all",
      "attention",
      "bomb"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Do you want tea or coffee? ______, please. I want some tea and some coffee.",
    "options": [
      "Action",
      "Both",
      "Attention",
      "Case"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "What was on the ______ of the tree? There was a bird's nest.",
    "options": [
      "age",
      "all",
      "branch",
      "crowd"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "What were the old houses made of? They were made of ______.",
    "options": [
      "accidents",
      "ages",
      "branches",
      "bricks"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Who will take ______ of your dog? My neighbor will.",
    "options": [
      "care",
      "address",
      "conversation",
      "crime"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "What did the police find in the ______? There were many clues.",
    "options": [
      "area",
      "bomb",
      "advice",
      "case"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "What was in the ______ of the park? There was a big fountain.",
    "options": [
      "answer",
      "all",
      "center",
      "both"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Did you have a ______ to meet the singer? Yes. I had a chance to take a photo with her.",
    "options": [
      "chance",
      "address",
      "alphabet",
      "brick"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Which school will you go to? It's a hard ______. I have to make a choice soon.",
    "options": [
      "care",
      "choice",
      "center",
      "case"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Was there a long ______ at dinner? Yes. There was lots of laughing, too.",
    "options": [
      "conversation",
      "case",
      "bomb",
      "courage"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Why is the firefighter a hero? He has a lot of ______. He isn't afraid of fire.",
    "options": [
      "all",
      "center",
      "curve",
      "courage"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Was there a ______ in the town last night? Yes. There was a robbery at the bank.",
    "options": [
      "crowd",
      "chance",
      "crime",
      "courage"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Why couldn't you see the show? There was a big ______ in front of me.",
    "options": [
      "curve",
      "crowd",
      "attention",
      "activity"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "What do you like about Japanese ______? I like the food and the festivals.",
    "options": [
      "choice",
      "activity",
      "all",
      "culture"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Why should we drive slowly here? There's a sharp ______. Pay attention to the road.",
    "options": [
      "curve",
      "army",
      "care",
      "age"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "What is a Taiwanese New Year ______? Children get some lucky money in red envelopes.",
    "options": [
      "all",
      "alphabet",
      "custom",
      "conversation"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Was there any ______ on the hike? Yes. There were some snakes on the path.",
    "options": [
      "brick",
      "danger",
      "crowd",
      "attention"
    ],
    "answer": 1,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "top": {
    "pos": "n.",
    "en_def": "the highest part of something",
    "cn_def": "頂部；頭頂",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the highest part of something",
        "cn_def": "頂部；頭頂"
      }
    ]
  },
  "bottom": {
    "pos": "n.",
    "en_def": "the lowest part of something",
    "cn_def": "底部",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the lowest part of something",
        "cn_def": "底部"
      }
    ]
  },
  "accident": {
    "pos": "n.",
    "en_def": "something bad that happens when nobody plans it",
    "cn_def": "車禍；意外事件",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something bad that happens when nobody plans it",
        "cn_def": "車禍；意外事件"
      }
    ]
  },
  "action": {
    "pos": "n.",
    "en_def": "something that you do",
    "cn_def": "行動；活動",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that you do",
        "cn_def": "行動；活動"
      }
    ]
  },
  "activity": {
    "pos": "n.",
    "en_def": "something you do for fun or to learn",
    "cn_def": "活動",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something you do for fun or to learn",
        "cn_def": "活動"
      }
    ]
  },
  "address": {
    "pos": "n.",
    "en_def": "the number and street name of the place where someone lives",
    "cn_def": "地址；演講",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the number and street name of the place where someone lives",
        "cn_def": "地址；演講"
      }
    ]
  },
  "advice": {
    "pos": "n.",
    "en_def": "words that tell someone what they should do",
    "cn_def": "忠告；勸告",
    "combined": [
      {
        "pos": "n.",
        "en_def": "words that tell someone what they should do",
        "cn_def": "忠告；勸告"
      }
    ]
  },
  "age": {
    "pos": "n.",
    "en_def": "how old a person or thing is",
    "cn_def": "年齡",
    "combined": [
      {
        "pos": "n.",
        "en_def": "how old a person or thing is",
        "cn_def": "年齡"
      }
    ]
  },
  "all": {
    "pos": "n.",
    "en_def": "every one, or the whole amount",
    "cn_def": "全部",
    "combined": [
      {
        "pos": "n.",
        "en_def": "every one, or the whole amount",
        "cn_def": "全部"
      },
      {
        "pos": "adj.",
        "en_def": "every one of; the whole of",
        "cn_def": "全部的"
      }
    ]
  },
  "alphabet": {
    "pos": "n.",
    "en_def": "all the letters of a language in order, like A to Z",
    "cn_def": "字母",
    "combined": [
      {
        "pos": "n.",
        "en_def": "all the letters of a language in order, like A to Z",
        "cn_def": "字母"
      }
    ]
  },
  "answer": {
    "pos": "n.",
    "en_def": "what you say or write when someone asks a question",
    "cn_def": "回答；答案",
    "combined": [
      {
        "pos": "n.",
        "en_def": "what you say or write when someone asks a question",
        "cn_def": "回答；答案"
      }
    ]
  },
  "area": {
    "pos": "n.",
    "en_def": "a part of a place",
    "cn_def": "區域",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a part of a place",
        "cn_def": "區域"
      }
    ]
  },
  "army": {
    "pos": "n.",
    "en_def": "a large group of soldiers who fight on land",
    "cn_def": "軍隊；大群",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large group of soldiers who fight on land",
        "cn_def": "軍隊；大群"
      }
    ]
  },
  "attention": {
    "pos": "n.",
    "en_def": "the act of watching or listening carefully",
    "cn_def": "注意；專心",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of watching or listening carefully",
        "cn_def": "注意；專心"
      }
    ]
  },
  "bomb": {
    "pos": "n.",
    "en_def": "a thing that blows up and can hurt people",
    "cn_def": "炸彈",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thing that blows up and can hurt people",
        "cn_def": "炸彈"
      }
    ]
  },
  "both": {
    "pos": "n.",
    "en_def": "the two; one and also the other",
    "cn_def": "兩方；兩者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the two; one and also the other",
        "cn_def": "兩方；兩者"
      }
    ]
  },
  "branch": {
    "pos": "n.",
    "en_def": "a part of a tree that grows out from the main part",
    "cn_def": "樹枝；分店",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a part of a tree that grows out from the main part",
        "cn_def": "樹枝；分店"
      }
    ]
  },
  "brick": {
    "pos": "n.",
    "en_def": "a hard block used to build walls and houses",
    "cn_def": "磚頭",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a hard block used to build walls and houses",
        "cn_def": "磚頭"
      }
    ]
  },
  "care": {
    "pos": "n.",
    "en_def": "the act of looking after someone or something",
    "cn_def": "關心；照顧",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of looking after someone or something",
        "cn_def": "關心；照顧"
      }
    ]
  },
  "case": {
    "pos": "n.",
    "en_def": "a problem or crime that the police try to solve",
    "cn_def": "案件",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a problem or crime that the police try to solve",
        "cn_def": "案件"
      }
    ]
  },
  "center": {
    "pos": "n.",
    "en_def": "the middle of something",
    "cn_def": "中心；中央",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the middle of something",
        "cn_def": "中心；中央"
      }
    ]
  },
  "chance": {
    "pos": "n.",
    "en_def": "a time when you can do something; luck",
    "cn_def": "運氣；機會",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a time when you can do something; luck",
        "cn_def": "運氣；機會"
      }
    ]
  },
  "choice": {
    "pos": "n.",
    "en_def": "the thing you pick from two or more things",
    "cn_def": "抉擇；選擇",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the thing you pick from two or more things",
        "cn_def": "抉擇；選擇"
      }
    ]
  },
  "conversation": {
    "pos": "n.",
    "en_def": "a talk between two or more people",
    "cn_def": "對話",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a talk between two or more people",
        "cn_def": "對話"
      }
    ]
  },
  "courage": {
    "pos": "n.",
    "en_def": "the feeling that lets you do something even when you are afraid",
    "cn_def": "勇氣",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the feeling that lets you do something even when you are afraid",
        "cn_def": "勇氣"
      }
    ]
  },
  "crime": {
    "pos": "n.",
    "en_def": "something bad that is against the law",
    "cn_def": "罪；犯罪行為",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something bad that is against the law",
        "cn_def": "罪；犯罪行為"
      }
    ]
  },
  "crowd": {
    "pos": "n.",
    "en_def": "a large group of people in one place",
    "cn_def": "群眾",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large group of people in one place",
        "cn_def": "群眾"
      }
    ]
  },
  "culture": {
    "pos": "n.",
    "en_def": "the way of life, ideas, and art of a group of people",
    "cn_def": "文化",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the way of life, ideas, and art of a group of people",
        "cn_def": "文化"
      }
    ]
  },
  "curve": {
    "pos": "n.",
    "en_def": "a line or road that bends",
    "cn_def": "曲線；彎道",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a line or road that bends",
        "cn_def": "曲線；彎道"
      }
    ]
  },
  "custom": {
    "pos": "n.",
    "en_def": "something people in a place have done for a long time",
    "cn_def": "習俗",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something people in a place have done for a long time",
        "cn_def": "習俗"
      }
    ]
  },
  "danger": {
    "pos": "n.",
    "en_def": "something that may hurt you",
    "cn_def": "危險",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that may hurt you",
        "cn_def": "危險"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
