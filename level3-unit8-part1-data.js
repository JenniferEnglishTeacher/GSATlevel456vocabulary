// Part 1 Quiz Data: aside – downtown
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 8-1 - aside – downtown",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "aside",
    "pos": "adv.",
    "cn_def": "在旁邊；到一旁",
    "en_def": "to one side; out of the way",
    "sentence": "The polite security guards stood {{BLANK}} to let the famous movie star and her family pass through the crowd.",
    "cn": "禮貌的保全人員站在一旁，好讓那位著名電影明星和她的家人穿過人群。"
  },
  {
    "word": "set aside",
    "pos": "v.phr.",
    "cn_def": "撥出；保留；拋開",
    "en_def": "to save or reserve money, time, or feelings for a special purpose",
    "sentence": "Fred decided to {{BLANK}} his personal fears and walked bravely up to the front of the classroom.",
    "cn": "弗雷德決定拋開個人的恐懼，勇敢地走到教室前台。"
  },
  {
    "word": "Aside from",
    "pos": "prep.phr.",
    "cn_def": "除了…之外",
    "en_def": "in addition to; except for",
    "sentence": "{{BLANK}} making advanced computers, this international technology company also manufactures high-end smartphones.",
    "cn": "除了製造先進的電腦之外，這家國際科技公司還生產高階智慧型手機。"
  },
  {
    "word": "bookcase",
    "pos": "n.",
    "cn_def": "書架；書櫃",
    "en_def": "a piece of furniture with shelves used for storing books",
    "sentence": "These clear printed instructions show the proper step-by-step way to put together the wooden {{BLANK}}.",
    "cn": "這些印製清晰的說明書展示了組裝木製書架／書櫃的正確步驟指南。"
  },
  {
    "word": "boots",
    "pos": "n.",
    "cn_def": "靴子；長靴；（英式）汽車行李廂",
    "en_def": "a sturdy shoe covering the foot and part of the leg; the luggage compartment of a car",
    "sentence": "Tony bought a sturdy new pair of leather {{BLANK}} before embarking on the difficult mountain hiking trip.",
    "cn": "東尼在展開艱難的登山健行之旅前，買了一雙堅固耐用的新皮靴。"
  },
  {
    "word": "boot up",
    "pos": "v.phr.",
    "cn_def": "（電腦）開機；啟動",
    "en_def": "to start up a computer operating system",
    "sentence": "It usually takes two or three minutes for my old laptop to {{BLANK}} completely in the morning.",
    "cn": "早晨我的舊筆記型電腦通常需要兩到三分鐘才能完全開機。"
  },
  {
    "word": "give the dishonest cashier the boot",
    "pos": "v.phr.",
    "cn_def": "解僱某人；開除某人",
    "en_def": "to fire or dismiss someone from their job; to kick someone out",
    "sentence": "The strict store manager decided to {{BLANK}} for stealing cash from the register.",
    "cn": "嚴格的店經理決定開除那位從收銀機偷竊現金的不誠實收銀員。"
  },
  {
    "word": "bowling",
    "pos": "n.",
    "cn_def": "保齡球運動",
    "en_def": "an indoor game in which players roll a heavy ball down a lane to knock down pins",
    "sentence": "In the exciting game of {{BLANK}}, the maximum possible number of points a skilled player can score is 300.",
    "cn": "在刺激的保齡球運動中，技術精湛的選手所能獲得的最高滿分是三百分。"
  },
  {
    "word": "colorful",
    "pos": "adj.",
    "cn_def": "色彩繽紛的；生動精彩的",
    "en_def": "having bright or varied colors; full of interest and vivid character",
    "sentence": "The brightly painted {{BLANK}} buildings along the canal give the historic European neighborhood a great deal of charm.",
    "cn": "運河沿岸粉刷得鮮豔奪目的五彩繽紛建築，賦予了這座歷史悠久的歐洲街區無限魅力。"
  },
  {
    "word": "considerable",
    "pos": "adj.",
    "cn_def": "相當大的；相當多的；重大的",
    "en_def": "notably large in size, amount, or extent; worthy of respect",
    "sentence": "A {{BLANK}} amount of delicious food and dessert was left over after the grand celebration party ended.",
    "cn": "在盛大的慶祝派對結束後，剩下了相當大量的美味食物與甜點。"
  },
  {
    "word": "cooker",
    "pos": "n.",
    "cn_def": "炊具；爐具；電鍋",
    "en_def": "an appliance or utensil used for cooking food",
    "sentence": "This modern multifunctional rice {{BLANK}} is wonderful because you simply push one button and it cooks perfect rice.",
    "cn": "這款現代多功能電子炊具／電鍋棒極了，因為你只需按下一顆按鈕，它就能煮出完美的米飯。"
  },
  {
    "word": "crab",
    "pos": "n.",
    "cn_def": "螃蟹；蟹肉",
    "en_def": "a crustacean with a broad shell, five pairs of legs, and two pincers",
    "sentence": "While walking along the sandy seashore, the excited children spotted a tiny hermit {{BLANK}} moving slowly across the rocks.",
    "cn": "沿著沙灘漫步時，興奮的孩子們看見一隻小巧的寄居蟹在岩石間緩慢移動。"
  },
  {
    "word": "downtown",
    "pos": "adv./n./adj.",
    "cn_def": "在市中心；市中心商業區",
    "en_def": "in or towards the central part or business district of a city",
    "sentence": "If you have free time tomorrow afternoon, we can take the metro {{BLANK}} and go shopping together.",
    "cn": "如果你明天下午有空，我們可以搭捷運去市中心一起逛街購物。"
  }
];

const MCQS = [
  {
    "q": "The students put their English dictionaries and storybooks neatly into the wooden ______.",
    "options": [
      "bookcase",
      "boot",
      "cooker",
      "crab"
    ],
    "answer": 0,
    "cn": "學生們將他們的英語字典和故事書整齊地放進木製書架／書櫃中。",
    "vocabIndex": 3
  },
  {
    "q": "Before going on the snowy hike, Mark wore a thick pair of leather ______ to protect his feet.",
    "options": [
      "bookcases",
      "cookers",
      "crabs",
      "boots"
    ],
    "answer": 3,
    "cn": "在去雪地健行之前，馬克穿了一雙厚皮長靴來保護雙腳。",
    "vocabIndex": 4
  },
  {
    "q": "Mom bought an electric rice ______ so that we could make warm, fresh rice easily every day.",
    "options": [
      "boot",
      "cooker",
      "bookcase",
      "crab"
    ],
    "answer": 1,
    "cn": "媽媽買了一個電子米電鍋／炊具，這樣我們每天都能輕鬆煮出溫熱新鮮的米飯。",
    "vocabIndex": 10
  },
  {
    "q": "We walked along the sandy beach and watched a small ______ walk sideways into the water.",
    "options": [
      "bookcase",
      "boot",
      "crab",
      "cooker"
    ],
    "answer": 2,
    "cn": "我們沿著沙灘散步，看著一隻小螃蟹橫著爬進水裡。",
    "vocabIndex": 11
  },
  {
    "q": "On rainy Saturday afternoons, my brother and I like to play ______ and roll the heavy ball at the pins.",
    "options": [
      "bowling",
      "cooker",
      "bookcase",
      "boot"
    ],
    "answer": 0,
    "cn": "在下雨的週六下午，我弟弟和我喜歡打保齡球，將沉重的球滾向球瓶。",
    "vocabIndex": 7
  },
  {
    "q": "There are many tall bank buildings and busy department stores located in ______.",
    "options": [
      "cooker",
      "boot",
      "crab",
      "downtown"
    ],
    "answer": 3,
    "cn": "有許多高聳的銀行大樓和熱鬧的百貨公司坐落在市中心商業區。",
    "vocabIndex": 12
  },
  {
    "q": "The store put all the boxes of shoes on a low ______ near the counter.",
    "options": [
      "crab",
      "cooker",
      "bookcase",
      "bowling"
    ],
    "answer": 2,
    "cn": "店家把所有的鞋盒放在櫃檯附近的一個低矮書架／層架上。",
    "vocabIndex": 3
  },
  {
    "q": "The fisherman caught five large ______ in his net and sold them at the seafood market.",
    "options": [
      "bookcases",
      "crabs",
      "cookers",
      "boots"
    ],
    "answer": 1,
    "cn": "漁夫在漁網裡捕獲了五隻大螃蟹，並將牠們在海鮮市場賣出。",
    "vocabIndex": 11
  },
  {
    "q": "The garden was filled with ______ butterflies of red, yellow, and blue colors.",
    "options": [
      "colorful",
      "considerable",
      "aside",
      "downtown"
    ],
    "answer": 0,
    "cn": "花園裡飛滿了紅色、黃色與藍色等色彩繽紛的蝴蝶。",
    "vocabIndex": 8
  },
  {
    "q": "Because it rained heavily for three days, a ______ amount of water filled the pond.",
    "options": [
      "colorful",
      "crab",
      "boot",
      "considerable"
    ],
    "answer": 3,
    "cn": "因為連續下了三天大雨，相當大量的雨水填滿了池塘。",
    "vocabIndex": 9
  },
  {
    "q": "The children painted ______ pictures with bright green grass and bright sunshine.",
    "options": [
      "considerable",
      "boot",
      "colorful",
      "aside"
    ],
    "answer": 2,
    "cn": "孩子們畫了許多帶有翠綠草地與明媚陽光的五彩繽紛的圖畫。",
    "vocabIndex": 8
  },
  {
    "q": "Mr. White spent a ______ sum of money to fix his broken car engine.",
    "options": [
      "colorful",
      "considerable",
      "boot",
      "crab"
    ],
    "answer": 1,
    "cn": "懷特先生花了一筆相當多的錢來修理他損壞的汽車發動機。",
    "vocabIndex": 9
  },
  {
    "q": "We bought fresh fruits from a famous ______ market near the main train station.",
    "options": [
      "colorful",
      "considerable",
      "aside",
      "downtown"
    ],
    "answer": 3,
    "cn": "我們在主火車站附近著名的市中心市場買了新鮮水果。",
    "vocabIndex": 12
  },
  {
    "q": "The dancers wore ______ silk dresses that looked wonderful under the stage lights.",
    "options": [
      "considerable",
      "colorful",
      "downtown",
      "aside"
    ],
    "answer": 1,
    "cn": "舞者們穿著在舞台燈光下顯得美麗動人的色彩繽紛的絲質洋裝。",
    "vocabIndex": 8
  },
  {
    "q": "The bus arrived and everyone stepped ______ so the elderly lady could get off safely.",
    "options": [
      "aside",
      "considerable",
      "colorful",
      "bowling"
    ],
    "answer": 0,
    "cn": "公車抵達了，每個人都站到一旁，以便老太太能安全下車。",
    "vocabIndex": 0
  },
  {
    "q": "On weekends, many young people like to travel ______ to watch movies and eat dinner.",
    "options": [
      "aside",
      "colorful",
      "downtown",
      "considerable"
    ],
    "answer": 2,
    "cn": "在週末，許多年輕人喜歡去市中心看電影和吃晚餐。",
    "vocabIndex": 12
  },
  {
    "q": "Please push these heavy boxes ______ so we have room to open the front door.",
    "options": [
      "aside",
      "downtown",
      "colorful",
      "considerable"
    ],
    "answer": 0,
    "cn": "請將這些沉重的箱子推到一邊，這樣我們才有空間打開前門。",
    "vocabIndex": 0
  },
  {
    "q": "My father usually takes the subway when he travels ______ for business meetings.",
    "options": [
      "aside",
      "colorful",
      "considerable",
      "downtown"
    ],
    "answer": 3,
    "cn": "我父親去市中心開商務會議時通常搭乘地鐵。",
    "vocabIndex": 12
  },
  {
    "q": "The nurse moved the medical table ______ to make space for the wheelchair.",
    "options": [
      "downtown",
      "aside",
      "colorful",
      "considerable"
    ],
    "answer": 1,
    "cn": "護理師把醫療桌移到一旁，為輪椅騰出空間。",
    "vocabIndex": 0
  },
  {
    "q": "Turn on the computer and wait one minute for it to ______ completely.",
    "options": [
      "set aside",
      "aside from",
      "boot up",
      "give the boot"
    ],
    "answer": 2,
    "cn": "打開電腦電源並稍等一分鐘，讓它完全開機。",
    "vocabIndex": 5
  },
  {
    "q": "You should ______ some time every afternoon to review what the teacher taught.",
    "options": [
      "set aside",
      "boot up",
      "aside from",
      "give the boot"
    ],
    "answer": 0,
    "cn": "你每天下午應該撥出一些時間，來溫習老師所教的內容。",
    "vocabIndex": 1
  },
  {
    "q": "The dishonest worker was caught lying, so the manager decided to ______ him ______.",
    "options": [
      "set aside",
      "give the boot",
      "boot up",
      "aside from"
    ],
    "answer": 1,
    "cn": "那個不誠實的員工被抓到說謊，所以經理決定開除他。",
    "vocabIndex": 6
  },
  {
    "q": "______ eating vegetables, Jenny also exercises thirty minutes every day to stay fit.",
    "options": [
      "Boot up",
      "Set aside",
      "Give the boot",
      "Aside from"
    ],
    "answer": 3,
    "cn": "除了吃蔬菜之外，珍妮每天還運動三十分鐘以保持健康。",
    "vocabIndex": 2
  },
  {
    "q": "My brother tries to ______ ten dollars every week to buy a gift for mom's birthday.",
    "options": [
      "boot up",
      "give the boot",
      "set aside",
      "aside from"
    ],
    "answer": 2,
    "cn": "我哥哥每週努力存下／撥出十美元，準備給媽媽買生日禮物。",
    "vocabIndex": 1
  },
  {
    "q": "______ a little rain in the morning, our school picnic was fun and exciting.",
    "options": [
      "Boot up",
      "Give the boot",
      "Set aside",
      "Aside from"
    ],
    "answer": 3,
    "cn": "除了早上下了一點雨之外，我們的學校野餐非常有趣刺激。",
    "vocabIndex": 2
  }
];

const LOOKUP = {
  "aside": {
    "pos": "adv.",
    "en_def": "to one side; out of the way",
    "cn_def": "在旁邊；到一旁",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "to one side; out of the way",
        "cn_def": "在旁邊；到一旁"
      }
    ]
  },
  "set aside": {
    "pos": "v.phr.",
    "en_def": "to save or reserve money, time, or feelings for a special purpose",
    "cn_def": "撥出；保留；拋開",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to save or reserve money, time, or feelings for a special purpose",
        "cn_def": "撥出；保留；拋開"
      }
    ]
  },
  "aside from": {
    "pos": "prep.phr.",
    "en_def": "in addition to; except for",
    "cn_def": "除了…之外",
    "combined": [
      {
        "pos": "prep.phr.",
        "en_def": "in addition to; except for",
        "cn_def": "除了…之外"
      }
    ]
  },
  "bookcase": {
    "pos": "n.",
    "en_def": "a piece of furniture with shelves used for storing books",
    "cn_def": "書架；書櫃",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of furniture with shelves used for storing books",
        "cn_def": "書架；書櫃"
      }
    ]
  },
  "boot": {
    "pos": "n.",
    "en_def": "a sturdy shoe covering the foot and part of the leg; the luggage compartment of a car",
    "cn_def": "靴子；長靴；（英式）汽車行李廂",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sturdy shoe covering the foot and part of the leg; the luggage compartment of a car",
        "cn_def": "靴子；長靴；（英式）汽車行李廂"
      }
    ]
  },
  "boots": {
    "pos": "n.",
    "en_def": "a sturdy shoe covering the foot and part of the leg; the luggage compartment of a car",
    "cn_def": "靴子；長靴；（英式）汽車行李廂",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sturdy shoe covering the foot and part of the leg; the luggage compartment of a car",
        "cn_def": "靴子；長靴；（英式）汽車行李廂"
      }
    ]
  },
  "boot up": {
    "pos": "v.phr.",
    "en_def": "to start up a computer operating system",
    "cn_def": "（電腦）開機；啟動",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to start up a computer operating system",
        "cn_def": "（電腦）開機；啟動"
      }
    ]
  },
  "give the dishonest cashier the boot": {
    "pos": "v.phr.",
    "en_def": "to fire or dismiss someone from their job; to kick someone out",
    "cn_def": "解僱某人；開除某人",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to fire or dismiss someone from their job; to kick someone out",
        "cn_def": "解僱某人；開除某人"
      }
    ]
  },
  "give sb. the boot": {
    "pos": "v.phr.",
    "en_def": "to fire or dismiss someone from their job; to kick someone out",
    "cn_def": "解僱某人；開除某人",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to fire or dismiss someone from their job; to kick someone out",
        "cn_def": "解僱某人；開除某人"
      }
    ]
  },
  "bowling": {
    "pos": "n.",
    "en_def": "an indoor game in which players roll a heavy ball down a lane to knock down pins",
    "cn_def": "保齡球運動",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an indoor game in which players roll a heavy ball down a lane to knock down pins",
        "cn_def": "保齡球運動"
      }
    ]
  },
  "colorful": {
    "pos": "adj.",
    "en_def": "having bright or varied colors; full of interest and vivid character",
    "cn_def": "色彩繽紛的；生動精彩的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having bright or varied colors; full of interest and vivid character",
        "cn_def": "色彩繽紛的；生動精彩的"
      }
    ]
  },
  "considerable": {
    "pos": "adj.",
    "en_def": "notably large in size, amount, or extent; worthy of respect",
    "cn_def": "相當大的；相當多的；重大的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "notably large in size, amount, or extent; worthy of respect",
        "cn_def": "相當大的；相當多的；重大的"
      }
    ]
  },
  "cooker": {
    "pos": "n.",
    "en_def": "an appliance or utensil used for cooking food",
    "cn_def": "炊具；爐具；電鍋",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an appliance or utensil used for cooking food",
        "cn_def": "炊具；爐具；電鍋"
      }
    ]
  },
  "crab": {
    "pos": "n.",
    "en_def": "a crustacean with a broad shell, five pairs of legs, and two pincers",
    "cn_def": "螃蟹；蟹肉",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a crustacean with a broad shell, five pairs of legs, and two pincers",
        "cn_def": "螃蟹；蟹肉"
      }
    ]
  },
  "downtown": {
    "pos": "adv./n./adj.",
    "en_def": "in or towards the central part or business district of a city",
    "cn_def": "在市中心；市中心商業區",
    "combined": [
      {
        "pos": "adv./n./adj.",
        "en_def": "in or towards the central part or business district of a city",
        "cn_def": "在市中心；市中心商業區"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
