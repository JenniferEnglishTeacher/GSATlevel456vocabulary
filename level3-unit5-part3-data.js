// Part 3 Quiz Data: fur – location
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 5-3 - fur – location",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "fur",
    "pos": "n.",
    "cn_def": "毛皮；軟毛（不可數/可數）",
    "en_def": "the short, fine, soft hair covering the skin of animals (uncountable/countable)",
    "sentence": "I would never buy an expensive genuine {{BLANK}} coat because killing innocent wild animals for luxury fashion is extremely cruel.",
    "cn": "我絕不會購買昂貴的真毛皮大衣，因為為了奢華時尚而殺害無辜的野生動物是極其殘忍的。"
  },
  {
    "word": "hunger",
    "pos": "n.",
    "cn_def": "飢餓；飢荒；渴望（不可數）",
    "en_def": "a severe lack of food; the feeling or state of wanting to eat (uncountable)",
    "sentence": "The inspiring university student had an insatiable {{BLANK}} for scientific knowledge and read hundreds of physics books.",
    "cn": "那位積極進取的大學生對科學知識有著永不滿足的渴望，閱讀了數百本物理書籍。"
  },
  {
    "word": "hut",
    "pos": "n.",
    "cn_def": "小屋；棚屋；茅舍（可數名詞）",
    "en_def": "a small, simple, single-story house or shelter",
    "sentence": "During the unexpected blizzard on the mountain peak, the exhausted climbers found safety inside a sturdy rescue {{BLANK}}.",
    "cn": "在高山頂遭遇突如其來的暴風雪時，筋疲力盡的登山者在一座堅固的救援避難小屋內找到了安全庇護。"
  },
  {
    "word": "imagination",
    "pos": "n.",
    "cn_def": "想像力；想像（可數/不可數）",
    "en_def": "the faculty or action of forming new ideas, images, or concepts not present to the senses",
    "sentence": "Children naturally possess a rich and playful {{BLANK}} that allows them to invent fascinating games out of ordinary cardboard boxes.",
    "cn": "孩童天生具備豐富且童趣的想像力，使他們能用普通的紙箱創造出迷人的遊戲。"
  },
  {
    "word": "imagine",
    "pos": "v.",
    "cn_def": "想像；料想；猜想（動詞）",
    "en_def": "to form a mental image or concept of; to suppose or assume",
    "sentence": "I can hardly {{BLANK}} living in a remote polar station where winter temperatures frequently drop below minus forty degrees Celsius.",
    "cn": "我幾乎難以想像生活在冬季氣溫常降至攝氏零下四十度以下的偏遠極地科考站。"
  },
  {
    "word": "imaginative",
    "pos": "adj.",
    "cn_def": "富有想像力的；創新的",
    "en_def": "having or showing creativity or inventiveness",
    "sentence": "The art teacher gave first prize to the {{BLANK}} student whose painting featured fantastical flying creatures and glowing crystal cities.",
    "cn": "美術老師將第一名頒給了那位富有想像力的學生，其畫作以奇幻的飛行生物和發光水晶城市為特色。"
  },
  {
    "word": "inn",
    "pos": "n.",
    "cn_def": "小旅館；鄉間客棧；旅店（可數）",
    "en_def": "a small hotel or pub, typically one in the country providing accommodation and food",
    "sentence": "After driving along the quiet coastal highway for six hours, the tired travelers spent a restful night at a charming country {{BLANK}}.",
    "cn": "沿著幽靜的沿海公路開車六小時後，疲憊的旅客在一家迷人的鄉村小客棧／旅館度過了寧靜的一晚。"
  },
  {
    "word": "kit",
    "pos": "n.",
    "cn_def": "成套工具；配套用具；工具箱（可數）",
    "en_def": "a set of articles or equipment needed for a specific purpose",
    "sentence": "Winnie bought a convenient travel makeup {{BLANK}} at the duty-free shop and carries it with her on all overseas business trips.",
    "cn": "溫妮在免稅店買了一套便攜的旅行化妝用具組／包，每次出國出差都隨身攜帶。"
  },
  {
    "word": "leather",
    "pos": "n.",
    "cn_def": "皮革；皮料（不可數名詞）",
    "en_def": "material made from the skin of an animal by tanning or a similar process (uncountable)",
    "sentence": "Vincent proudly wore his stylish new brown {{BLANK}} jacket when he arrived at the outdoor barbecue party on his motorcycle.",
    "cn": "文森騎著重型機車抵達戶外烤肉派對時，驕傲地穿著他時髦的全新棕色皮夾克。"
  },
  {
    "word": "locate",
    "pos": "v.",
    "cn_def": "找出位置；坐落於；設於（動詞）",
    "en_def": "to discover the exact place or position of; to establish in a particular place",
    "sentence": "The experienced IT engineer spent nearly two hours examining the computer server system to {{BLANK}} the technical bug.",
    "cn": "經驗豐富的資訊工程師花了將近兩個小時檢查伺服器系統，以找出技術漏洞所在。"
  },
  {
    "word": "location",
    "pos": "n.",
    "cn_def": "地點；位置；所在地（可數名詞）",
    "en_def": "a particular place or position",
    "sentence": "The seaside resort hotel is situated in an ideal {{BLANK}} with sandy beaches and crystal clear ocean waters within easy walking distance.",
    "cn": "該海濱渡假酒店坐落於理想的地點，沙灘與清澈碧藍的海水都在輕鬆步行的距離之內。"
  }
];

const MCQS = [
  {
    "q": "The hunters built a small wooden ______ in the forest to sleep in during the cold night.",
    "options": [
      "kit",
      "inn",
      "fur",
      "hut"
    ],
    "answer": 3,
    "cn": "獵人們在森林裡建造了一座小木造棚屋／茅舍，以便在寒夜裡睡覺。",
    "vocabIndex": 2
  },
  {
    "q": "We drove down the quiet mountain road and found a cozy country ______ to rest for the night.",
    "options": [
      "fur",
      "inn",
      "hunger",
      "kit"
    ],
    "answer": 1,
    "cn": "我們沿著幽靜的山路行駛，找到了一家舒適的鄉間小客棧／旅店過夜休息。",
    "vocabIndex": 6
  },
  {
    "q": "The kitten has very thick and soft white ______ that feels lovely when you touch it.",
    "options": [
      "fur",
      "inn",
      "kit",
      "hut"
    ],
    "answer": 0,
    "cn": "這隻小貓有著非常厚實且柔軟的白毛皮，摸起來非常舒服。",
    "vocabIndex": 0
  },
  {
    "q": "After not eating all day, the poor boy felt sharp pains of ______ in his stomach.",
    "options": [
      "fur",
      "hut",
      "hunger",
      "inn"
    ],
    "answer": 2,
    "cn": "整天沒吃東西之後，那個可憐的男孩感到肚子裡一陣劇烈的飢餓感。",
    "vocabIndex": 1
  },
  {
    "q": "Dad keeps a car repair ______ in the back of the car with tools, tape, and a flashlight.",
    "options": [
      "kit",
      "fur",
      "hut",
      "inn"
    ],
    "answer": 0,
    "cn": "爸爸在車子後方放了一套汽車修理工具包，裡面有工具、膠帶與手電筒。",
    "vocabIndex": 7
  },
  {
    "q": "This pair of brown winter boots is made of strong animal ______ to keep feet dry.",
    "options": [
      "inn",
      "hunger",
      "hut",
      "leather"
    ],
    "answer": 3,
    "cn": "這雙棕色雪靴是由結實的動物皮革製成，以保持雙腳乾爽。",
    "vocabIndex": 8
  },
  {
    "q": "The young girl has a wonderful ______ and loves writing fairy tales about magic stars.",
    "options": [
      "hut",
      "imagination",
      "leather",
      "fur"
    ],
    "answer": 1,
    "cn": "那個小女孩有著絕妙的想像力，喜歡寫關於魔法星星的童話故事。",
    "vocabIndex": 3
  },
  {
    "q": "Our new family house is in a great ______ that is very close to schools and parks.",
    "options": [
      "hut",
      "fur",
      "location",
      "kit"
    ],
    "answer": 2,
    "cn": "我們全家的新房子處於極佳的地理位置／地點，離學校與公園非常近。",
    "vocabIndex": 10
  },
  {
    "q": "Can you ______ living on a spaceship flying toward Mars for an entire year?",
    "options": [
      "imagine",
      "locate",
      "hut",
      "fur"
    ],
    "answer": 0,
    "cn": "你能想像在一艘飛往火星的太空船上生活整整一年嗎？",
    "vocabIndex": 4
  },
  {
    "q": "The police used a map and GPS to ______ the lost hikers in the dark mountains.",
    "options": [
      "imagine",
      "locate",
      "fur",
      "hut"
    ],
    "answer": 1,
    "cn": "警方使用地圖與 GPS 在黑暗的山區中找出…的位置那幾位迷路的登山客。",
    "vocabIndex": 9
  },
  {
    "q": "The famous library is ______ right in the city center across from the train station.",
    "options": [
      "imagined",
      "furred",
      "located",
      "hutted"
    ],
    "answer": 2,
    "cn": "這座著名的圖書館正坐落於／位於火車站對面的市中心。",
    "vocabIndex": 9
  },
  {
    "q": "The story was so creative because Peter is a very ______ writer with great ideas.",
    "options": [
      "wooden",
      "hungry",
      "furry",
      "imaginative"
    ],
    "answer": 3,
    "cn": "這個故事非常富創意，因為彼得是一位非常有想像力且點子很多的作家。",
    "vocabIndex": 5
  },
  {
    "q": "We brought a green ______ box containing bandages and medicine on our picnic.",
    "options": [
      "mud hut",
      "fur coat",
      "first aid kit",
      "country inn"
    ],
    "answer": 2,
    "cn": "我們去野餐時帶了一個裝有繃帶與藥品的綠色急救箱／急救包。",
    "vocabIndex": 7
  },
  {
    "q": "Uncle David wears a cool black ______ when he rides his motorcycle on weekends.",
    "options": [
      "first aid kit",
      "country inn",
      "mud hut",
      "leather jacket"
    ],
    "answer": 3,
    "cn": "戴維叔叔週末騎重型機車時，總會穿上一件帥氣的黑色皮夾克。",
    "vocabIndex": 8
  },
  {
    "q": "In the cold weather, the wealthy lady put on a warm, thick ______ before going out.",
    "options": [
      "first aid kit",
      "fur coat",
      "mud hut",
      "tool kit"
    ],
    "answer": 1,
    "cn": "在寒冷的天氣裡，那位富有的女士在出門前穿上了一件保暖厚實的毛皮大衣。",
    "vocabIndex": 0
  },
  {
    "q": "The kind ______ welcomed the cold travelers with hot tea and warm soup by the fire.",
    "options": [
      "innkeeper",
      "tool kit",
      "leather jacket",
      "first aid kit"
    ],
    "answer": 0,
    "cn": "那位仁慈的客棧／旅館老闆在壁爐旁用熱茶與熱湯迎接寒冷的旅客。"
  },
  {
    "q": "The movie about spaceships and alien worlds completely ______ of young audiences.",
    "options": [
      "satisfied hunger",
      "captured the imagination",
      "built a hut",
      "located the hotel"
    ],
    "answer": 1,
    "cn": "那部關於太空船與外星世界的電影完全吸引了年輕觀眾的想像力。",
    "vocabIndex": 3
  },
  {
    "q": "A hot bowl of chicken noodle soup quickly ______ after our long morning walk in the snow.",
    "options": [
      "captured the imagination",
      "stayed at an inn",
      "built a hut",
      "satisfied our hunger"
    ],
    "answer": 3,
    "cn": "在雪地裡漫步了一個上午之後，一碗熱騰騰的雞肉麵迅速充飢／滿足了我們的飢餓。",
    "vocabIndex": 1
  },
  {
    "q": "The old house was situated in a quiet country ______ surrounded by tall pine trees.",
    "options": [
      "location",
      "leather jacket",
      "first aid kit",
      "fur coat"
    ],
    "answer": 0,
    "cn": "那座老房子坐落於一個被高大松樹環繞的幽靜鄉村地點／位置。",
    "vocabIndex": 10
  },
  {
    "q": "The detective asked the man to help ______ the missing car on the city street.",
    "options": [
      "imagine",
      "fur",
      "locate",
      "hut"
    ],
    "answer": 2,
    "cn": "偵探請該名男子協助在城市街道上找出位置／定位那輛失竊的汽車。",
    "vocabIndex": 9
  },
  {
    "q": "The local hospital is ______ next to the central railway station for quick access.",
    "options": [
      "hutted",
      "imagined",
      "furred",
      "located"
    ],
    "answer": 3,
    "cn": "這家當地醫院坐落於／位於中央火車站旁，交通十分便捷。",
    "vocabIndex": 9
  },
  {
    "q": "The children stayed inside the wooden ______ while the rain fell heavily outside.",
    "options": [
      "kit",
      "hut",
      "fur",
      "leather"
    ],
    "answer": 1,
    "cn": "外面下大雨時，孩子們待在木造小木屋／棚屋裡面。",
    "vocabIndex": 2
  },
  {
    "q": "The friendly old ______ gave us extra pillows and blankets during our stay.",
    "options": [
      "innkeeper",
      "first aid kit",
      "leather jacket",
      "fur coat"
    ],
    "answer": 0,
    "cn": "那位友善的老旅館老闆在我們住宿期間給了我們額外的枕頭和毯子。"
  },
  {
    "q": "She carries a small travel ______ with combs, brushes, and makeup in her bag.",
    "options": [
      "hut",
      "fur",
      "kit",
      "hunger"
    ],
    "answer": 2,
    "cn": "她在包包裡隨身攜帶了一個裝有梳子、毛刷和化妝品的小旅行配套用具組／包。",
    "vocabIndex": 7
  },
  {
    "q": "It is hard to ______ what life was like hundreds of years ago before electricity.",
    "options": [
      "locate",
      "imagine",
      "hut",
      "fur"
    ],
    "answer": 1,
    "cn": "很難想像數百年前電力發明之前的生活是什麼樣子。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "fur": {
    "pos": "n.",
    "en_def": "the short, fine, soft hair covering the skin of animals (uncountable/countable)",
    "cn_def": "毛皮；軟毛（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the short, fine, soft hair covering the skin of animals (uncountable/countable)",
        "cn_def": "毛皮；軟毛（不可數/可數）"
      }
    ]
  },
  "hunger": {
    "pos": "n.",
    "en_def": "a severe lack of food; the feeling or state of wanting to eat (uncountable)",
    "cn_def": "飢餓；飢荒；渴望（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a severe lack of food; the feeling or state of wanting to eat (uncountable)",
        "cn_def": "飢餓；飢荒；渴望（不可數）"
      }
    ]
  },
  "hut": {
    "pos": "n.",
    "en_def": "a small, simple, single-story house or shelter",
    "cn_def": "小屋；棚屋；茅舍（可數名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small, simple, single-story house or shelter",
        "cn_def": "小屋；棚屋；茅舍（可數名詞）"
      }
    ]
  },
  "imagination": {
    "pos": "n.",
    "en_def": "the faculty or action of forming new ideas, images, or concepts not present to the senses",
    "cn_def": "想像力；想像（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the faculty or action of forming new ideas, images, or concepts not present to the senses",
        "cn_def": "想像力；想像（可數/不可數）"
      }
    ]
  },
  "imagine": {
    "pos": "v.",
    "en_def": "to form a mental image or concept of; to suppose or assume",
    "cn_def": "想像；料想；猜想（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to form a mental image or concept of; to suppose or assume",
        "cn_def": "想像；料想；猜想（動詞）"
      }
    ]
  },
  "imaginative": {
    "pos": "adj.",
    "en_def": "having or showing creativity or inventiveness",
    "cn_def": "富有想像力的；創新的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having or showing creativity or inventiveness",
        "cn_def": "富有想像力的；創新的"
      }
    ]
  },
  "inn": {
    "pos": "n.",
    "en_def": "a small hotel or pub, typically one in the country providing accommodation and food",
    "cn_def": "小旅館；鄉間客棧；旅店（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small hotel or pub, typically one in the country providing accommodation and food",
        "cn_def": "小旅館；鄉間客棧；旅店（可數）"
      }
    ]
  },
  "kit": {
    "pos": "n.",
    "en_def": "a set of articles or equipment needed for a specific purpose",
    "cn_def": "成套工具；配套用具；工具箱（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a set of articles or equipment needed for a specific purpose",
        "cn_def": "成套工具；配套用具；工具箱（可數）"
      }
    ]
  },
  "leather": {
    "pos": "n.",
    "en_def": "material made from the skin of an animal by tanning or a similar process (uncountable)",
    "cn_def": "皮革；皮料（不可數名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "material made from the skin of an animal by tanning or a similar process (uncountable)",
        "cn_def": "皮革；皮料（不可數名詞）"
      }
    ]
  },
  "locate": {
    "pos": "v.",
    "en_def": "to discover the exact place or position of; to establish in a particular place",
    "cn_def": "找出位置；坐落於；設於（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to discover the exact place or position of; to establish in a particular place",
        "cn_def": "找出位置；坐落於；設於（動詞）"
      }
    ]
  },
  "location": {
    "pos": "n.",
    "en_def": "a particular place or position",
    "cn_def": "地點；位置；所在地（可數名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a particular place or position",
        "cn_def": "地點；位置；所在地（可數名詞）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
