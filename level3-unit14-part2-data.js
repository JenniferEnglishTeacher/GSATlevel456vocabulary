// Part 2 Quiz Data: excellence – investigation
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 14-2 - excellence – investigation",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "excellence",
    "pos": "n.",
    "cn_def": "卓越；傑出；優秀（不可數）",
    "en_def": "the quality of being outstanding or extremely good",
    "sentence": "The world-famous French restaurant constantly aims for culinary {{BLANK}} in every delicate dish it serves.",
    "cn": "這家世界著名的法國餐廳在提供的每道精緻菜餚中持續追求烹飪的卓越。"
  },
  {
    "word": "excellent",
    "pos": "adj.",
    "cn_def": "極好的；優秀的；傑出的",
    "en_def": "extremely good; of the highest quality",
    "sentence": "After ten years of careful maintenance, my grandfather's vintage car remains in {{BLANK}} condition.",
    "cn": "經過十年的悉心保養，我祖父的古董車依然保持在極好的狀態。"
  },
  {
    "word": "flashed",
    "pos": "v.",
    "cn_def": "閃爍；閃光；掠過（動詞）",
    "en_def": "to shine with a sudden bright light, or to move very quickly",
    "sentence": "A jagged bolt of white lightning {{BLANK}} across the stormy night sky before thunder shook the hills.",
    "cn": "在雷聲震動山丘之前，一道鋸齒狀的白色閃電在暴風雨的夜空中閃過。"
  },
  {
    "word": "flash",
    "pos": "n.",
    "cn_def": "閃光；一瞬間（名詞）",
    "en_def": "a sudden brief burst of bright light or a very short time",
    "sentence": "The bright {{BLANK}} from the tourist's camera startled the shy kitten resting beneath the garden bench.",
    "cn": "遊客相機發出的明亮閃光驚嚇到了花園長椅下休息的害羞小貓。"
  },
  {
    "word": "flashy",
    "pos": "adj.",
    "cn_def": "炫目的；俗麗招搖的",
    "en_def": "ostentatiously attractive or bright in a cheap or vulgar way",
    "sentence": "The wealthy lottery winner loved driving his bright orange and {{BLANK}} sports car around the quiet town.",
    "cn": "那位富有的樂透得主喜歡開著他亮橘色且招搖炫目的跑車在安靜的小鎮周圍兜風。"
  },
  {
    "word": "flashlight",
    "pos": "n.",
    "cn_def": "手電筒（可數）",
    "en_def": "a portable battery-powered electric lamp",
    "sentence": "When the city power grid suddenly failed during the blizzard, dad used a bright {{BLANK}} to guide us downstairs.",
    "cn": "當暴風雪期間城市電網突然斷電時，爸爸用一支明亮的手電筒引導我們下樓。"
  },
  {
    "word": "global",
    "pos": "adj.",
    "cn_def": "全球的；全世界的",
    "en_def": "relating to the whole world; worldwide",
    "sentence": "Scientists around the world emphasize that combatting {{BLANK}} warming requires strong international cooperation.",
    "cn": "世界各地的科學家強調，對抗全球暖化需要強有力的國際合作。"
  },
  {
    "word": "globe",
    "pos": "n.",
    "cn_def": "地球；地球儀（可數）",
    "en_def": "the earth, or a spherical model of the earth",
    "sentence": "Millions of passionate soccer fans across the {{BLANK}} tuned in live to watch the World Cup final.",
    "cn": "全球各地數百萬熱情的足球迷在線上即時收看世界盃決賽。"
  },
  {
    "word": "grab",
    "pos": "v.",
    "cn_def": "抓取；趕緊吃／拿（動詞）",
    "en_def": "to take hold of something suddenly and roughly; to obtain quickly",
    "sentence": "Let's {{BLANK}} a quick bite at the nearby diner before the evening movie screening begins.",
    "cn": "在傍晚電影放映開始之前，我們去附近的餐館隨便吃點東西吧。"
  },
  {
    "word": "handful",
    "pos": "n.",
    "cn_def": "一把；少數幾個人事物；棘手難管的人",
    "en_def": "a small number of people or things, or a quantity that fills the hand",
    "sentence": "The kind little girl scattered a generous {{BLANK}} of sunflower seeds on the ground for the wild birds.",
    "cn": "那位善良的小女孩在地上撒了滿滿一把葵花籽餵野生鳥兒。"
  },
  {
    "word": "honor",
    "pos": "n.",
    "cn_def": "榮譽；光榮；敬意（不可數/可數）",
    "en_def": "high respect, esteem, or a privilege that brings pride",
    "sentence": "The university hosted a formal graduation dinner in {{BLANK}} of the visiting foreign scholars.",
    "cn": "大學舉辦了正式的畢業晚宴，以向…表達敬意到訪的外國學者。"
  },
  {
    "word": "honor",
    "pos": "v.",
    "cn_def": "表彰；兌現（承諾）；向…致敬",
    "en_def": "to regard with great respect, or to fulfill a promise or agreement",
    "sentence": "A trustworthy company will always {{BLANK}} its warranty promises and provide free repairs to customers.",
    "cn": "一家值得信賴的公司總是會履行兌現其保固承諾，並為顧客提供免費維修。"
  },
  {
    "word": "humor",
    "pos": "n.",
    "cn_def": "幽默；幽默感（不可數）",
    "en_def": "the quality of being amusing or comical, or an appreciative mood",
    "sentence": "Mr. Davies is widely loved by his high school students because he possesses a wonderful sense of {{BLANK}}.",
    "cn": "戴維斯先生深受他的高中學生喜愛，因為他擁有絕佳的幽默感。"
  },
  {
    "word": "humorous",
    "pos": "adj.",
    "cn_def": "幽默的；詼諧風趣的",
    "en_def": "causing laughter and amusement; funny",
    "sentence": "Uncle Bob entertained the excited children all evening by recounting {{BLANK}} stories about his travels.",
    "cn": "鮑伯叔叔整晚藉由講述他旅行中的幽默風趣故事逗得孩子們很開心。"
  },
  {
    "word": "investigate",
    "pos": "v.",
    "cn_def": "調查；偵查；審查（動詞）",
    "en_def": "to carry out a systematic or formal inquiry to discover the truth",
    "sentence": "The police assigned two experienced senior detectives to thoroughly {{BLANK}} the armed bank robbery.",
    "cn": "警方指派了兩位經驗豐富的資深刑警來徹底調查該起武裝銀行搶案。"
  },
  {
    "word": "investigation",
    "pos": "n.",
    "cn_def": "調查；調查研究（可數/不可數）",
    "en_def": "a formal inquiry or systematic examination of facts",
    "sentence": "The city authorities promised to launch an immediate {{BLANK}} into the causes of the building collapse.",
    "cn": "市府當局承諾對大樓倒塌的原因立即展開調查。"
  }
];

const MCQS = [
  {
    "q": "The school rewarded Tim with a book prize because of his academic ______ in mathematics.",
    "options": [
      "globe",
      "excellence",
      "handful",
      "flashlight"
    ],
    "answer": 1,
    "cn": "學校因為提姆在數學領域的學術卓越表現而頒發圖書獎勵給他。",
    "vocabIndex": 0
  },
  {
    "q": "When the power went out at night, Dad used a bright ______ to find the candles.",
    "options": [
      "globe",
      "flashlight",
      "humor",
      "handful"
    ],
    "answer": 3,
    "cn": "晚上停電時，爸爸使用一支明亮的手電筒來尋找蠟燭。",
    "vocabIndex": 9
  },
  {
    "q": "The teacher rotated the round ______ on the desk to show us where Australia is.",
    "options": [
      "globe",
      "excellence",
      "handful",
      "honor"
    ],
    "answer": 0,
    "cn": "老師旋轉書桌上的圓形地球儀，向我們指出澳洲在哪裡。",
    "vocabIndex": 7
  },
  {
    "q": "Only a small ______ of students came to the Saturday morning clean-up activity.",
    "options": [
      "flashlight",
      "globe",
      "handful",
      "excellence"
    ],
    "answer": 2,
    "cn": "只有少數一把／少數幾個學生來參加週六早晨的打掃活動。",
    "vocabIndex": 9
  },
  {
    "q": "It was a great ______ for the young soldier to meet the friendly president in person.",
    "options": [
      "honor",
      "globe",
      "handful",
      "flashlight"
    ],
    "answer": 0,
    "cn": "對於那位年輕士兵而言，能親自見到親切的總統是一件莫大的榮幸／榮譽。",
    "vocabIndex": 10
  },
  {
    "q": "Mr. White has a warm sense of ______ and always makes his students laugh in class.",
    "options": [
      "globe",
      "flashlight",
      "handful",
      "humor"
    ],
    "answer": 3,
    "cn": "懷特老師擁有溫暖的幽默感，總是在課堂上逗得學生哈哈大笑。",
    "vocabIndex": 12
  },
  {
    "q": "The police department started an ______ to find out how the fire started in the shop.",
    "options": [
      "globe",
      "investigation",
      "excellence",
      "handful"
    ],
    "answer": 1,
    "cn": "警察局展開了一場調查，以查明該商店的火災是如何引發的。",
    "vocabIndex": 15
  },
  {
    "q": "The bright yellow lights ______ on and off along the busy street at night.",
    "options": [
      "investigated",
      "honored",
      "flashed",
      "grabbed"
    ],
    "answer": 2,
    "cn": "夜間繁忙街道上的明亮黃色燈光一開一關地閃爍著。",
    "vocabIndex": 4
  },
  {
    "q": "He ______ his backpack and ran quickly out the door to catch the school bus.",
    "options": [
      "flashed",
      "grabbed",
      "investigated",
      "honored"
    ],
    "answer": 1,
    "cn": "他抓起他的背包，快速跑出大門去趕校車。",
    "vocabIndex": 8
  },
  {
    "q": "The city will ______ the brave doctor with a special medal for his service.",
    "options": [
      "flash",
      "grab",
      "honor",
      "investigate"
    ],
    "answer": 2,
    "cn": "該市將用一枚特別獎章來表彰／向…致敬那位勇敢醫生的奉獻。",
    "vocabIndex": 10
  },
  {
    "q": "Two police officers came to our neighborhood to ______ the stolen bicycle.",
    "options": [
      "investigate",
      "flash",
      "honor",
      "grab"
    ],
    "answer": 0,
    "cn": "兩名警員來到我們社區調查那輛失竊的自行車。",
    "vocabIndex": 14
  },
  {
    "q": "The young girl wore bright, ______ clothes that made everyone look at her.",
    "options": [
      "excellent",
      "global",
      "humorous",
      "flashy"
    ],
    "answer": 3,
    "cn": "小女孩穿著鮮豔且俗麗招搖的衣服，讓每個人都看著她。",
    "vocabIndex": 4
  },
  {
    "q": "Climate change is a ______ problem that affects countries all over the world.",
    "options": [
      "flashy",
      "global",
      "humorous",
      "handful"
    ],
    "answer": 2,
    "cn": "氣候變遷是一個影響全世界各國的全球性問題。",
    "vocabIndex": 13
  },
  {
    "q": "Uncle George told a very ______ story that made all the children laugh out loud.",
    "options": [
      "flashy",
      "global",
      "excellent",
      "humorous"
    ],
    "answer": 3,
    "cn": "喬治叔叔講了一個非常幽默詼諧的故事，逗得所有孩子大聲歡笑。",
    "vocabIndex": 13
  },
  {
    "q": "Lucy received an ______ grade on her English essay because she wrote it carefully.",
    "options": [
      "excellent",
      "flashy",
      "global",
      "handful"
    ],
    "answer": 0,
    "cn": "露西在英語作文中獲得了極佳優秀的成績，因為她寫得非常認真。",
    "vocabIndex": 1
  },
  {
    "q": "The kitten disappeared ______ when it got scared by the barking dog.",
    "options": [
      "global",
      "in a flash",
      "grab a bite",
      "in honor of"
    ],
    "answer": 1,
    "cn": "當小貓被吠叫的狗驚嚇時，它轉瞬間一閃就消失了。",
    "vocabIndex": 4
  },
  {
    "q": "We have twenty minutes before the train leaves, so let us ______ at the bakery.",
    "options": [
      "grab a bite",
      "in a flash",
      "in honor of",
      "global warming"
    ],
    "answer": 0,
    "cn": "火車出發前我們還有二十分鐘，我們在麵包店隨便吃點東西吧。",
    "vocabIndex": 8
  },
  {
    "q": "The village held a party ______ the retired teacher who taught there for forty years.",
    "options": [
      "grab a bite",
      "in a flash",
      "sense of humor",
      "in honor of"
    ],
    "answer": 3,
    "cn": "村子舉辦了一場慶祝活動，為了向…表達敬意在那裡任教四十年的退休老師。",
    "vocabIndex": 10
  },
  {
    "q": "My father has a great ______ and can always find something funny even in hard times.",
    "options": [
      "grab a bite",
      "in a flash",
      "sense of humor",
      "in honor of"
    ],
    "answer": 2,
    "cn": "我父親擁有很棒的幽默感，即使在艱難時刻也能找到有趣的事物。",
    "vocabIndex": 12
  },
  {
    "q": "Rising sea levels are one of the most dangerous results of ______ across our planet.",
    "options": [
      "sense of humor",
      "global warming",
      "in a flash",
      "grab a bite"
    ],
    "answer": 1,
    "cn": "海平面上升是我們星球上全球暖化最危險的後果之一。",
    "vocabIndex": 6
  },
  {
    "q": "The company strives for continuous ______ in every product it manufactures.",
    "options": [
      "flashlight",
      "globe",
      "handful",
      "excellence"
    ],
    "answer": 3,
    "cn": "這家公司在其製造的每件產品中力求持續的卓越優秀。",
    "vocabIndex": 0
  },
  {
    "q": "A sudden bright ______ of lightning illuminated the dark living room for a second.",
    "options": [
      "flash",
      "globe",
      "handful",
      "honor"
    ],
    "answer": 0,
    "cn": "一陣突如其來的明亮閃電閃光照亮了黑暗的客廳一秒鐘。",
    "vocabIndex": 2
  },
  {
    "q": "Mom gave me a small ______ of sweet raisins to enjoy with my afternoon snack.",
    "options": [
      "globe",
      "handful",
      "excellence",
      "flashlight"
    ],
    "answer": 1,
    "cn": "媽媽給了我小小的一把甜葡萄乾，讓我配著下午茶點心享用。",
    "vocabIndex": 9
  },
  {
    "q": "The brave firefighter was ______ by the mayor for saving three puppies from the smoke.",
    "options": [
      "flashed",
      "grabbed",
      "honored",
      "investigated"
    ],
    "answer": 2,
    "cn": "那位勇敢的消防隊員因為從濃煙中救出三隻小狗而受到市長的表彰與嘉獎。",
    "vocabIndex": 10
  },
  {
    "q": "Scientists travel to remote islands to ______ how rare birds build their nests.",
    "options": [
      "investigate",
      "flash",
      "grab",
      "honor"
    ],
    "answer": 0,
    "cn": "科學家前往偏遠島嶼，以調查探究稀有鳥類是如何築巢的。",
    "vocabIndex": 14
  }
];

const LOOKUP = {
  "excellence": {
    "pos": "n.",
    "en_def": "the quality of being outstanding or extremely good",
    "cn_def": "卓越；傑出；優秀（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of being outstanding or extremely good",
        "cn_def": "卓越；傑出；優秀（不可數）"
      }
    ]
  },
  "excellent": {
    "pos": "adj.",
    "en_def": "extremely good; of the highest quality",
    "cn_def": "極好的；優秀的；傑出的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "extremely good; of the highest quality",
        "cn_def": "極好的；優秀的；傑出的"
      }
    ]
  },
  "flashed": {
    "pos": "v.",
    "en_def": "to shine with a sudden bright light, or to move very quickly",
    "cn_def": "閃爍；閃光；掠過（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to shine with a sudden bright light, or to move very quickly",
        "cn_def": "閃爍；閃光；掠過（動詞）"
      }
    ]
  },
  "flash": {
    "pos": "v.",
    "en_def": "to shine with a sudden bright light, or to move very quickly",
    "cn_def": "閃爍；閃光；掠過（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to shine with a sudden bright light, or to move very quickly",
        "cn_def": "閃爍；閃光；掠過（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a sudden brief burst of bright light or a very short time",
        "cn_def": "閃光；一瞬間（名詞）"
      }
    ]
  },
  "flashy": {
    "pos": "adj.",
    "en_def": "ostentatiously attractive or bright in a cheap or vulgar way",
    "cn_def": "炫目的；俗麗招搖的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "ostentatiously attractive or bright in a cheap or vulgar way",
        "cn_def": "炫目的；俗麗招搖的"
      }
    ]
  },
  "flashlight": {
    "pos": "n.",
    "en_def": "a portable battery-powered electric lamp",
    "cn_def": "手電筒（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a portable battery-powered electric lamp",
        "cn_def": "手電筒（可數）"
      }
    ]
  },
  "global": {
    "pos": "adj.",
    "en_def": "relating to the whole world; worldwide",
    "cn_def": "全球的；全世界的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to the whole world; worldwide",
        "cn_def": "全球的；全世界的"
      }
    ]
  },
  "globe": {
    "pos": "n.",
    "en_def": "the earth, or a spherical model of the earth",
    "cn_def": "地球；地球儀（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the earth, or a spherical model of the earth",
        "cn_def": "地球；地球儀（可數）"
      }
    ]
  },
  "grab": {
    "pos": "v.",
    "en_def": "to take hold of something suddenly and roughly; to obtain quickly",
    "cn_def": "抓取；趕緊吃／拿（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take hold of something suddenly and roughly; to obtain quickly",
        "cn_def": "抓取；趕緊吃／拿（動詞）"
      }
    ]
  },
  "handful": {
    "pos": "n.",
    "en_def": "a small number of people or things, or a quantity that fills the hand",
    "cn_def": "一把；少數幾個人事物；棘手難管的人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small number of people or things, or a quantity that fills the hand",
        "cn_def": "一把；少數幾個人事物；棘手難管的人"
      }
    ]
  },
  "honor": {
    "pos": "n.",
    "en_def": "high respect, esteem, or a privilege that brings pride",
    "cn_def": "榮譽；光榮；敬意（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "high respect, esteem, or a privilege that brings pride",
        "cn_def": "榮譽；光榮；敬意（不可數/可數）"
      },
      {
        "pos": "v.",
        "en_def": "to regard with great respect, or to fulfill a promise or agreement",
        "cn_def": "表彰；兌現（承諾）；向…致敬"
      }
    ]
  },
  "humor": {
    "pos": "n.",
    "en_def": "the quality of being amusing or comical, or an appreciative mood",
    "cn_def": "幽默；幽默感（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of being amusing or comical, or an appreciative mood",
        "cn_def": "幽默；幽默感（不可數）"
      }
    ]
  },
  "humorous": {
    "pos": "adj.",
    "en_def": "causing laughter and amusement; funny",
    "cn_def": "幽默的；詼諧風趣的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing laughter and amusement; funny",
        "cn_def": "幽默的；詼諧風趣的"
      }
    ]
  },
  "investigate": {
    "pos": "v.",
    "en_def": "to carry out a systematic or formal inquiry to discover the truth",
    "cn_def": "調查；偵查；審查（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to carry out a systematic or formal inquiry to discover the truth",
        "cn_def": "調查；偵查；審查（動詞）"
      }
    ]
  },
  "investigation": {
    "pos": "n.",
    "en_def": "a formal inquiry or systematic examination of facts",
    "cn_def": "調查；調查研究（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a formal inquiry or systematic examination of facts",
        "cn_def": "調查；調查研究（可數/不可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
