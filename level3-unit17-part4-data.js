// Part 4 Quiz Data: plenty – stable
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 17-4 - plenty – stable",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "plenty",
    "pos": "pron./n./adv.",
    "cn_def": "大量；充足（代名詞/名詞）；十分；非常（副詞）",
    "en_def": "a large or sufficient amount or quantity; fully; quite",
    "sentence": "Don't worry about dinner because we already have {{BLANK}} of fresh vegetables and bread in the kitchen.",
    "cn": "別擔心晚餐，因為我們廚房裡已經有許多／大量的新鮮蔬菜和麵包。"
  },
  {
    "word": "pretend",
    "pos": "v.",
    "cn_def": "假裝；裝作；假扮（動詞）",
    "en_def": "to behave so as to make it appear that something is the case when in fact it is not",
    "sentence": "Young children love to {{BLANK}} to be brave astronauts exploring unknown alien planets in outer space.",
    "cn": "小孩子們喜歡假扮／假裝成勇敢的太空人探索外太空未知的奇異星球。"
  },
  {
    "word": "pronounce",
    "pos": "v.",
    "cn_def": "發音；宣判；正式宣佈（動詞）",
    "en_def": "to make the sound of a word or letter with your voice; to declare officially",
    "sentence": "Because French vowels are difficult for foreign beginners, the teacher showed us how to {{BLANK}} them correctly.",
    "cn": "因為法語母音對外國初學者而言很難，老師向我們示範了如何正確發音。"
  },
  {
    "word": "protection",
    "pos": "n.",
    "cn_def": "保護；防護（不可數）",
    "en_def": "the state of being kept safe from harm, damage, or loss",
    "sentence": "All construction workers are legally required to wear sturdy hard hats for head {{BLANK}} on site.",
    "cn": "法律規定所有建築工人在工地上都必須戴上結實的安全帽以提供頭部保護。"
  },
  {
    "word": "reveal",
    "pos": "v.",
    "cn_def": "揭露；洩漏；透露（動詞）",
    "en_def": "to make known to others previously secret or unknown information",
    "sentence": "The investigative journalist promised not to {{BLANK}} the identity of his confidential informant.",
    "cn": "那位調查記者承諾絕不透露／洩漏他機密線人的身分。"
  },
  {
    "word": "savings",
    "pos": "n.",
    "cn_def": "節約；節省（單數）；積蓄；存款（複數 savings）",
    "en_def": "an economy of or reduction in money, time, or resources; money saved in a bank",
    "sentence": "After forty years of hard manual labor, Mr. Turner invested his life {{BLANK}} into a small bookstore.",
    "cn": "辛勤從事體力勞動四十年後，特納先生將他一生的積蓄投資開了一家小書店。"
  },
  {
    "word": "spaghetti",
    "pos": "n.",
    "cn_def": "義大利麵（不可數）",
    "en_def": "pasta made in long, slender, solid strings, typically served with sauce",
    "sentence": "Whenever our Italian grandparents visit us, they cook a delicious meal of homemade {{BLANK}} with meat sauce.",
    "cn": "每當我們義大利籍的祖父母來訪時，他們都會煮一頓美味的自製肉醬義大利麵。"
  },
  {
    "word": "stable",
    "pos": "adj./n.",
    "cn_def": "穩定的；牢固的（形容詞）；馬廄（名詞）",
    "en_def": "not likely to change, fail, or collapse; a building in which horses are kept",
    "sentence": "Following the delicate heart surgery, the hospital nurse announced that the patient was in {{BLANK}} condition.",
    "cn": "在精細的心臟手術之後，醫院護理師宣佈該病患目前情況穩定。"
  }
];

const MCQS = [
  {
    "q": "There is ______ of delicious food left over from the party, so please help yourself.",
    "options": [
      "plenty",
      "protection",
      "spaghetti",
      "stable"
    ],
    "answer": 0,
    "cn": "派對上留下了大量／豐富的美味食物，請隨意享用。",
    "vocabIndex": 0
  },
  {
    "q": "The kids like to ______ that the sofa is a giant ship sailing across the ocean.",
    "options": [
      "reveal",
      "lock",
      "pronounce",
      "pretend"
    ],
    "answer": 3,
    "cn": "孩子們喜歡假裝沙發是一艘航行在大洋中的巨輪。",
    "vocabIndex": 1
  },
  {
    "q": "Can you show me how to ______ this French word correctly?",
    "options": [
      "reveal",
      "pronounce",
      "pretend",
      "knit"
    ],
    "answer": 1,
    "cn": "你能向我示範一下如何正確地對這個法語單字發音嗎？",
    "vocabIndex": 2
  },
  {
    "q": "Wear sunglasses to provide good ______ for your eyes on sunny beach days.",
    "options": [
      "spaghetti",
      "saving",
      "protection",
      "lawn"
    ],
    "answer": 2,
    "cn": "在陽光明媚的海灘日子裡戴上太陽眼鏡，能為眼睛提供良好的保護。",
    "vocabIndex": 3
  },
  {
    "q": "The magician refused to ______ the secret behind his famous disappearing trick.",
    "options": [
      "reveal",
      "pronounce",
      "pretend",
      "lock"
    ],
    "answer": 0,
    "cn": "那位魔術師拒絕透露／洩漏他著名大變活人魔術背後的秘密。",
    "vocabIndex": 4
  },
  {
    "q": "Grandpa deposited all his life ______ into a safe government bank account.",
    "options": [
      "spaghettis",
      "protections",
      "savings",
      "liberties"
    ],
    "answer": 2,
    "cn": "爺爺將他一生的積蓄／存款存入了一個安全的政府銀行帳戶。"
  },
  {
    "q": "We ordered a big plate of Italian ______ with meatballs and garlic bread.",
    "options": [
      "protection",
      "spaghetti",
      "saving",
      "koala"
    ],
    "answer": 1,
    "cn": "我們點了一大盤配有肉丸和大蒜麵包的義大利細麵／義大利麵。",
    "vocabIndex": 6
  },
  {
    "q": "After the emergency surgery, the doctor reported that the patient was in ______ condition.",
    "options": [
      "plenty",
      "handy",
      "misty",
      "stable"
    ],
    "answer": 3,
    "cn": "急診手術後，醫生報告說病患目前情況穩定。",
    "vocabIndex": 7
  },
  {
    "q": "The farmer led his tired white horse back into the warm wooden ______.",
    "options": [
      "lawn",
      "stable",
      "spaghetti",
      "saving"
    ],
    "answer": 1,
    "cn": "農夫將他疲憊的白馬牽回溫暖的木造馬廄中。",
    "vocabIndex": 7
  },
  {
    "q": "Although she was disappointed by the test score, she ______ to be cheerful.",
    "options": [
      "pronounced",
      "revealed",
      "pretended",
      "knitted"
    ],
    "answer": 2,
    "cn": "儘管對考試成績感到失望，她依然假裝開朗快樂。",
    "vocabIndex": 1
  },
  {
    "q": "The police report ______ that the fire had been started intentionally by a criminal.",
    "options": [
      "revealed",
      "pretended",
      "pronounced",
      "locked"
    ],
    "answer": 0,
    "cn": "警方報告揭露該起火災是由一名罪犯蓄意縱火所引起的。",
    "vocabIndex": 4
  },
  {
    "q": "Foreign students often find the English word 'thorough' quite hard to ______.",
    "options": [
      "reveal",
      "pretend",
      "lace",
      "pronounce"
    ],
    "answer": 3,
    "cn": "外國學生常常發現英語單字 'thorough' 相當難以發音。",
    "vocabIndex": 2
  },
  {
    "q": "You should drink ______ during the hot summer to avoid becoming dehydrated.",
    "options": [
      "plenty of water",
      "stable condition",
      "life savings",
      "Statue of Liberty"
    ],
    "answer": 0,
    "cn": "在炎熱的夏天你應該喝大量的水以避免脫水。",
    "vocabIndex": 0
  },
  {
    "q": "The bank robbery report was finally ______ to the public after months of investigation.",
    "options": [
      "locked",
      "pretended",
      "pronounced",
      "revealed"
    ],
    "answer": 3,
    "cn": "在經過數月的調查後，銀行搶案報告終於向公眾公開／揭曉。",
    "vocabIndex": 4
  },
  {
    "q": "Children in the park love to ______ they are flying airplanes in the sky.",
    "options": [
      "reveal",
      "pronounce that",
      "pretend that",
      "lock up"
    ],
    "answer": 2,
    "cn": "公園裡的孩子們喜歡假裝／幻想他們是在天空中飛行的飛機。",
    "vocabIndex": 1
  },
  {
    "q": "You must put on a sturdy helmet for head ______ before entering the dark cave.",
    "options": [
      "spaghetti",
      "protection",
      "saving",
      "koala"
    ],
    "answer": 1,
    "cn": "在進入黑暗的洞穴之前，你必須戴上一頂結實的安全帽以求頭部防護。",
    "vocabIndex": 3
  },
  {
    "q": "Turning off the computers overnight will lead to a big ______ of energy costs.",
    "options": [
      "saving",
      "protection",
      "spaghetti",
      "lawn"
    ],
    "answer": 0,
    "cn": "夜間關閉電腦將大幅節省能源費用。",
    "vocabIndex": 5
  },
  {
    "q": "My Italian friend cooked a delicious pot of tomato sauce to go with the ______.",
    "options": [
      "protection",
      "saving",
      "spaghetti",
      "liberty"
    ],
    "answer": 2,
    "cn": "我的義大利朋友煮了一鍋美味的番茄醬來搭配義大利麵。",
    "vocabIndex": 6
  },
  {
    "q": "Despite the storm outside, the heavy stone house remained completely ______.",
    "options": [
      "additional",
      "handy",
      "dishonest",
      "stable"
    ],
    "answer": 3,
    "cn": "儘管外面暴風雨肆虐，這座沉重的石造房屋依然完全穩固牢靠。",
    "vocabIndex": 7
  },
  {
    "q": "The nurse announced to the anxious family that the patient is now in ______.",
    "options": [
      "plenty of water",
      "a stable condition",
      "a savings account",
      "a plate of spaghetti"
    ],
    "answer": 1,
    "cn": "護理師向焦慮的家屬宣佈，該病患目前情況穩定。",
    "vocabIndex": 7
  },
  {
    "q": "The night view of the illuminated city from the mountaintop is ______ stunning.",
    "options": [
      "dishonest",
      "stably",
      "protectively",
      "plenty"
    ],
    "answer": 3,
    "cn": "從山頂俯瞰燈火通明的城市夜景十分／非常震撼動人。",
    "vocabIndex": 0
  },
  {
    "q": "He decided to open a ______ at the local post office to deposit his salary.",
    "options": [
      "generation gap",
      "stable condition",
      "savings account",
      "plate of spaghetti"
    ],
    "answer": 2,
    "cn": "他決定在當地郵局開立一個儲蓄帳戶以存放薪水。"
  },
  {
    "q": "The scientific paper ______ surprising facts about deep ocean creatures.",
    "options": [
      "pretended",
      "revealed",
      "locked",
      "knitted"
    ],
    "answer": 1,
    "cn": "這篇科學論文揭示／透露了關於深海生物令人驚訝的真相。",
    "vocabIndex": 4
  },
  {
    "q": "Be careful when you ______ names from other languages so you don't offend anyone.",
    "options": [
      "pronounce",
      "pretend",
      "reveal",
      "lock"
    ],
    "answer": 0,
    "cn": "當你為其他語言的名字發音時要小心，以免冒犯他人。",
    "vocabIndex": 2
  },
  {
    "q": "The farmer walked across the yard to feed the horses in the wooden ______.",
    "options": [
      "protection",
      "stable",
      "saving",
      "spaghetti"
    ],
    "answer": 1,
    "cn": "農夫走過院子，去木造馬廄裡餵馬。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "plenty": {
    "pos": "pron./n./adv.",
    "en_def": "a large or sufficient amount or quantity; fully; quite",
    "cn_def": "大量；充足（代名詞/名詞）；十分；非常（副詞）",
    "combined": [
      {
        "pos": "pron./n./adv.",
        "en_def": "a large or sufficient amount or quantity; fully; quite",
        "cn_def": "大量；充足（代名詞/名詞）；十分；非常（副詞）"
      }
    ]
  },
  "pretend": {
    "pos": "v.",
    "en_def": "to behave so as to make it appear that something is the case when in fact it is not",
    "cn_def": "假裝；裝作；假扮（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to behave so as to make it appear that something is the case when in fact it is not",
        "cn_def": "假裝；裝作；假扮（動詞）"
      }
    ]
  },
  "pronounce": {
    "pos": "v.",
    "en_def": "to make the sound of a word or letter with your voice; to declare officially",
    "cn_def": "發音；宣判；正式宣佈（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make the sound of a word or letter with your voice; to declare officially",
        "cn_def": "發音；宣判；正式宣佈（動詞）"
      }
    ]
  },
  "protection": {
    "pos": "n.",
    "en_def": "the state of being kept safe from harm, damage, or loss",
    "cn_def": "保護；防護（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being kept safe from harm, damage, or loss",
        "cn_def": "保護；防護（不可數）"
      }
    ]
  },
  "reveal": {
    "pos": "v.",
    "en_def": "to make known to others previously secret or unknown information",
    "cn_def": "揭露；洩漏；透露（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make known to others previously secret or unknown information",
        "cn_def": "揭露；洩漏；透露（動詞）"
      }
    ]
  },
  "saving": {
    "pos": "n.",
    "en_def": "an economy of or reduction in money, time, or resources; money saved in a bank",
    "cn_def": "節約；節省（單數）；積蓄；存款（複數 savings）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an economy of or reduction in money, time, or resources; money saved in a bank",
        "cn_def": "節約；節省（單數）；積蓄；存款（複數 savings）"
      }
    ]
  },
  "savings": {
    "pos": "n.",
    "en_def": "an economy of or reduction in money, time, or resources; money saved in a bank",
    "cn_def": "節約；節省（單數）；積蓄；存款（複數 savings）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an economy of or reduction in money, time, or resources; money saved in a bank",
        "cn_def": "節約；節省（單數）；積蓄；存款（複數 savings）"
      }
    ]
  },
  "spaghetti": {
    "pos": "n.",
    "en_def": "pasta made in long, slender, solid strings, typically served with sauce",
    "cn_def": "義大利麵（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "pasta made in long, slender, solid strings, typically served with sauce",
        "cn_def": "義大利麵（不可數）"
      }
    ]
  },
  "stable": {
    "pos": "adj./n.",
    "en_def": "not likely to change, fail, or collapse; a building in which horses are kept",
    "cn_def": "穩定的；牢固的（形容詞）；馬廄（名詞）",
    "combined": [
      {
        "pos": "adj./n.",
        "en_def": "not likely to change, fail, or collapse; a building in which horses are kept",
        "cn_def": "穩定的；牢固的（形容詞）；馬廄（名詞）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
