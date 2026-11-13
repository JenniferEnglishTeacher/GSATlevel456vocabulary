// Group 28 Quiz Data: Town / Streets / Roads (城鎮/街道/道路)
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "Group 28 - Town / Streets / Roads (城鎮/街道/道路)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "downtown",
    "pos": "n.",
    "cn_def": "市區；鬧區",
    "en_def": "the busy center of a city with many shops and offices",
    "sentence": "How do I get to {{BLANK}}? Take the MRT and get off at Taipei Main Station.",
    "cn": "我要怎麼去市中心？ 搭捷運，在台北車站下車。"
  },
  {
    "word": "town",
    "pos": "n.",
    "cn_def": "城鎮",
    "en_def": "a place with houses, shops, and streets, smaller than a city",
    "sentence": "Where is the post office in this {{BLANK}}? It's on Main Street, next to the bank.",
    "cn": "這個鎮上的郵局在哪裡？ 在大街上，銀行旁邊。"
  },
  {
    "word": "village",
    "pos": "n.",
    "cn_def": "村落",
    "en_def": "a very small town in the country",
    "sentence": "How do we get to the {{BLANK}}? Walk along the river for ten minutes.",
    "cn": "我們要怎麼去那個村莊？ 沿著河走十分鐘。"
  },
  {
    "word": "block",
    "pos": "n.",
    "cn_def": "街區",
    "en_def": "the area of a city between two streets",
    "sentence": "Where is the bookstore? Go straight two {{BLANK}}s. It's on your right.",
    "cn": "書店在哪裡？ 直走兩個街區。它在你的右邊。"
  },
  {
    "word": "corner",
    "pos": "n.",
    "cn_def": "轉角；街角",
    "en_def": "the place where two streets or two walls meet",
    "sentence": "Where is the bank? Turn left at the {{BLANK}}. It's next to the park.",
    "cn": "銀行在哪裡？ 在轉角左轉。它在公園旁邊。"
  },
  {
    "word": "street",
    "pos": "n.",
    "cn_def": "街道",
    "en_def": "a road in a town or city with buildings beside it",
    "sentence": "Is it safe to walk across the {{BLANK}} here? No. Use the crosswalk.",
    "cn": "在這裡穿越街道安全嗎？ 不安全。走斑馬線。"
  },
  {
    "word": "road",
    "pos": "n.",
    "cn_def": "道路",
    "en_def": "a hard path that cars, buses, and bikes travel on",
    "sentence": "Don't play on the {{BLANK}}! OK, Mom. We'll play in the park.",
    "cn": "不要在馬路上玩！ 好的，媽媽。我們會去公園玩。"
  },
  {
    "word": "way",
    "pos": "n.",
    "cn_def": "路；方向",
    "en_def": "the road or direction you take to get to a place",
    "sentence": "Excuse me. Which is the {{BLANK}} to the zoo? Go straight and turn right at the second street.",
    "cn": "不好意思，去動物園的路怎麼走？ 直走，在第二條街右轉。"
  },
  {
    "word": "highway",
    "pos": "n.",
    "cn_def": "公路；幹道",
    "en_def": "a big, wide road for fast travel between cities",
    "sentence": "Is the {{BLANK}} busy now? Yes. Don't drive there now. Take the small roads.",
    "cn": "現在公路很塞嗎？ 很塞。現在別走那裡。走小路吧。"
  },
  {
    "word": "sidewalk",
    "pos": "n.",
    "cn_def": "人行道",
    "en_def": "a path beside the street for people to walk on",
    "sentence": "Where should I ride my bike? Don't ride on the {{BLANK}}. People walk there.",
    "cn": "我應該在哪裡騎腳踏車？ 不要在人行道上騎。那裡是給人走的。"
  },
  {
    "word": "underpass",
    "pos": "n.",
    "cn_def": "地下道",
    "en_def": "a path that goes under a road",
    "sentence": "How do I get to the other side of the road? Walk through the {{BLANK}}.",
    "cn": "我要怎麼到馬路對面？ 走過地下道。"
  },
  {
    "word": "path",
    "pos": "n.",
    "cn_def": "小徑；小路",
    "en_def": "a small road for people to walk on",
    "sentence": "How do we get to the top of the hill? Walk along this small {{BLANK}}.",
    "cn": "我們要怎麼到山頂？ 沿著這條小路走。"
  },
  {
    "word": "bridge",
    "pos": "n.",
    "cn_def": "橋",
    "en_def": "something built over a river or road so people can cross it",
    "sentence": "How do we get to the island? Drive across the {{BLANK}}.",
    "cn": "我們要怎麼去那座島？ 開車過橋。"
  },
  {
    "word": "overpass",
    "pos": "n.",
    "cn_def": "天橋",
    "en_def": "a bridge that takes people or cars over a road",
    "sentence": "How can I cross this busy road? Please use the {{BLANK}}.",
    "cn": "我要怎麼過這條繁忙的馬路？ 請走天橋。"
  },
  {
    "word": "tunnel",
    "pos": "n.",
    "cn_def": "隧道",
    "en_def": "a long hole under the ground or through a mountain for cars or trains",
    "sentence": "Why is it dark in the train? We're going through a long {{BLANK}}.",
    "cn": "火車裡為什麼這麼暗？ 我們正在穿過一條長隧道。"
  },
  {
    "word": "entrance",
    "pos": "n.",
    "cn_def": "入口",
    "en_def": "the door or way you use to go into a place",
    "sentence": "Where is the {{BLANK}} of the museum? It's on the left side of the building.",
    "cn": "博物館的入口在哪裡？ 在大樓的左側。"
  },
  {
    "word": "exit",
    "pos": "n.",
    "cn_def": "出口",
    "en_def": "the door or way you use to go out of a place",
    "sentence": "How do I get to the night market from the MRT? Take Exit 1 and go straight. It's the nearest {{BLANK}}.",
    "cn": "從捷運站要怎麼去夜市？ 走一號出口然後直走。那是最近的出口。"
  },
  {
    "word": "ground",
    "pos": "n.",
    "cn_def": "地面",
    "en_def": "the surface of the earth under your feet",
    "sentence": "Don't sit on the {{BLANK}}. It's wet. OK. I'll sit on the bench.",
    "cn": "不要坐在地上。地是濕的。 好。我會坐在長椅上。"
  },
  {
    "word": "platform",
    "pos": "n.",
    "cn_def": "月台；平台",
    "en_def": "the place in a station where you get on and off a train",
    "sentence": "Where can I take the train to Taichung? Go to {{BLANK}} 2. It's on your right.",
    "cn": "我要在哪裡搭往台中的火車？ 到二號月台。在你的右邊。"
  },
  {
    "word": "sign",
    "pos": "n.",
    "cn_def": "標誌；符號",
    "en_def": "a board with words or pictures that tells you something",
    "sentence": "What does that {{BLANK}} say? It says, \"Don't park here.\"",
    "cn": "那個標誌寫什麼？ 上面寫著「這裡不能停車」。"
  },
  {
    "word": "sign",
    "pos": "v.",
    "cn_def": "簽名",
    "en_def": "to write your name on something",
    "sentence": "What should I do with this form? Please {{BLANK}} your name at the bottom.",
    "cn": "我應該怎麼處理這張表格？ 請在最下面簽上你的名字。"
  },
  {
    "word": "stop",
    "pos": "n.",
    "cn_def": "公車站牌；站",
    "en_def": "a place where a bus or train stops for people to get on or off",
    "sentence": "Where is the bus {{BLANK}}? It's across the street from the bank.",
    "cn": "公車站在哪裡？ 在銀行的對面。"
  },
  {
    "word": "stop",
    "pos": "v.",
    "cn_def": "停止",
    "en_def": "to not move or not do something anymore",
    "sentence": "The light is red! Stop! Don't cross the street now. You must {{BLANK}} here.",
    "cn": "紅燈了！ 停！現在別過馬路。你必須在這裡停下來。"
  },
  {
    "word": "traffic",
    "pos": "n.",
    "cn_def": "交通",
    "en_def": "all the cars, buses, and trucks moving on the road",
    "sentence": "Why are we so late? There was a lot of {{BLANK}}. Don't drive at five o'clock.",
    "cn": "我們為什麼這麼晚？ 交通很塞。五點別開車。"
  }
];

const MCQS = [
  {
    "q": "How do I get to ______? Take the MRT and get off at Taipei Main Station.",
    "options": [
      "downtown",
      "road",
      "exit",
      "traffic"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Where is the post office in this ______? It's on Main Street, next to the bank.",
    "options": [
      "downtown",
      "town",
      "road",
      "path"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "How do we get to the ______? Walk along the river for ten minutes.",
    "options": [
      "bridge",
      "block",
      "village",
      "highway"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Where is the bookstore? Go straight two ______. It's on your right.",
    "options": [
      "paths",
      "exits",
      "traffics",
      "blocks"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Where is the bank? Turn left at the ______. It's next to the park.",
    "options": [
      "overpass",
      "corner",
      "ground",
      "entrance"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Is it safe to walk across the ______ here? No. Use the crosswalk.",
    "options": [
      "platform",
      "highway",
      "sign",
      "street"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Don't play on the ______! OK, Mom. We'll play in the park.",
    "options": [
      "way",
      "highway",
      "road",
      "stop"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Excuse me. Which is the ______ to the zoo? Go straight and turn right at the second street.",
    "options": [
      "way",
      "town",
      "bridge",
      "stop"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Is the ______ busy now? Yes. Don't drive there now. Take the small roads.",
    "options": [
      "way",
      "town",
      "sidewalk",
      "highway"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Where should I ride my bike? Don't ride on the ______. People walk there.",
    "options": [
      "highway",
      "road",
      "sidewalk",
      "street"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "How do I get to the other side of the road? Walk through the ______.",
    "options": [
      "underpass",
      "sidewalk",
      "way",
      "path"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "How do we get to the top of the hill? Walk along this small ______.",
    "options": [
      "entrance",
      "path",
      "underpass",
      "tunnel"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "How do we get to the island? Drive across the ______.",
    "options": [
      "village",
      "underpass",
      "bridge",
      "corner"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "How can I cross this busy road? Please use the ______.",
    "options": [
      "ground",
      "overpass",
      "tunnel",
      "sidewalk"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Why is it dark in the train? We're going through a long ______.",
    "options": [
      "tunnel",
      "bridge",
      "ground",
      "downtown"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Where is the ______ of the museum? It's on the left side of the building.",
    "options": [
      "way",
      "downtown",
      "village",
      "entrance"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "How do I get to the night market from the MRT? Take Exit 1 and go straight. It's the nearest ______.",
    "options": [
      "traffic",
      "exit",
      "downtown",
      "corner"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Don't sit on the ______. It's wet. OK. I'll sit on the bench.",
    "options": [
      "downtown",
      "corner",
      "ground",
      "underpass"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Where can I take the train to Taichung? Go to ______ 2. It's on your right.",
    "options": [
      "town",
      "exit",
      "downtown",
      "platform"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "What does that ______ say? It says, \"Don't park here.\"",
    "options": [
      "sign",
      "platform",
      "tunnel",
      "block"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "What should I do with this form? Please ______ your name at the bottom.",
    "options": [
      "stop",
      "prepare",
      "break",
      "sign"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Where is the bus ______? It's across the street from the bank.",
    "options": [
      "sidewalk",
      "entrance",
      "stop",
      "exit"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The light is red! Stop! Don't cross the street now. You must ______ here.",
    "options": [
      "sign",
      "stop",
      "obey",
      "hike"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Why are we so late? There was a lot of ______. Don't drive at five o'clock.",
    "options": [
      "traffic",
      "road",
      "highway",
      "stop"
    ],
    "answer": 0,
    "vocabIndex": 23
  }
];

const LOOKUP = {
  "downtown": {
    "pos": "n.",
    "en_def": "the busy center of a city with many shops and offices",
    "cn_def": "市區；鬧區",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the busy center of a city with many shops and offices",
        "cn_def": "市區；鬧區"
      }
    ]
  },
  "town": {
    "pos": "n.",
    "en_def": "a place with houses, shops, and streets, smaller than a city",
    "cn_def": "城鎮",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a place with houses, shops, and streets, smaller than a city",
        "cn_def": "城鎮"
      }
    ]
  },
  "village": {
    "pos": "n.",
    "en_def": "a very small town in the country",
    "cn_def": "村落",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a very small town in the country",
        "cn_def": "村落"
      }
    ]
  },
  "block": {
    "pos": "n.",
    "en_def": "the area of a city between two streets",
    "cn_def": "街區",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the area of a city between two streets",
        "cn_def": "街區"
      }
    ]
  },
  "corner": {
    "pos": "n.",
    "en_def": "the place where two streets or two walls meet",
    "cn_def": "轉角；街角",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the place where two streets or two walls meet",
        "cn_def": "轉角；街角"
      }
    ]
  },
  "street": {
    "pos": "n.",
    "en_def": "a road in a town or city with buildings beside it",
    "cn_def": "街道",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a road in a town or city with buildings beside it",
        "cn_def": "街道"
      }
    ]
  },
  "road": {
    "pos": "n.",
    "en_def": "a hard path that cars, buses, and bikes travel on",
    "cn_def": "道路",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a hard path that cars, buses, and bikes travel on",
        "cn_def": "道路"
      }
    ]
  },
  "way": {
    "pos": "n.",
    "en_def": "the road or direction you take to get to a place",
    "cn_def": "路；方向",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the road or direction you take to get to a place",
        "cn_def": "路；方向"
      }
    ]
  },
  "highway": {
    "pos": "n.",
    "en_def": "a big, wide road for fast travel between cities",
    "cn_def": "公路；幹道",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a big, wide road for fast travel between cities",
        "cn_def": "公路；幹道"
      }
    ]
  },
  "sidewalk": {
    "pos": "n.",
    "en_def": "a path beside the street for people to walk on",
    "cn_def": "人行道",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a path beside the street for people to walk on",
        "cn_def": "人行道"
      }
    ]
  },
  "underpass": {
    "pos": "n.",
    "en_def": "a path that goes under a road",
    "cn_def": "地下道",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a path that goes under a road",
        "cn_def": "地下道"
      }
    ]
  },
  "path": {
    "pos": "n.",
    "en_def": "a small road for people to walk on",
    "cn_def": "小徑；小路",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small road for people to walk on",
        "cn_def": "小徑；小路"
      }
    ]
  },
  "bridge": {
    "pos": "n.",
    "en_def": "something built over a river or road so people can cross it",
    "cn_def": "橋",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something built over a river or road so people can cross it",
        "cn_def": "橋"
      }
    ]
  },
  "overpass": {
    "pos": "n.",
    "en_def": "a bridge that takes people or cars over a road",
    "cn_def": "天橋",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a bridge that takes people or cars over a road",
        "cn_def": "天橋"
      }
    ]
  },
  "tunnel": {
    "pos": "n.",
    "en_def": "a long hole under the ground or through a mountain for cars or trains",
    "cn_def": "隧道",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a long hole under the ground or through a mountain for cars or trains",
        "cn_def": "隧道"
      }
    ]
  },
  "entrance": {
    "pos": "n.",
    "en_def": "the door or way you use to go into a place",
    "cn_def": "入口",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the door or way you use to go into a place",
        "cn_def": "入口"
      }
    ]
  },
  "exit": {
    "pos": "n.",
    "en_def": "the door or way you use to go out of a place",
    "cn_def": "出口",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the door or way you use to go out of a place",
        "cn_def": "出口"
      }
    ]
  },
  "ground": {
    "pos": "n.",
    "en_def": "the surface of the earth under your feet",
    "cn_def": "地面",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the surface of the earth under your feet",
        "cn_def": "地面"
      }
    ]
  },
  "platform": {
    "pos": "n.",
    "en_def": "the place in a station where you get on and off a train",
    "cn_def": "月台；平台",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the place in a station where you get on and off a train",
        "cn_def": "月台；平台"
      }
    ]
  },
  "sign": {
    "pos": "n.",
    "en_def": "a board with words or pictures that tells you something",
    "cn_def": "標誌；符號",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a board with words or pictures that tells you something",
        "cn_def": "標誌；符號"
      },
      {
        "pos": "v.",
        "en_def": "to write your name on something",
        "cn_def": "簽名"
      }
    ]
  },
  "stop": {
    "pos": "n.",
    "en_def": "a place where a bus or train stops for people to get on or off",
    "cn_def": "公車站牌；站",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a place where a bus or train stops for people to get on or off",
        "cn_def": "公車站牌；站"
      },
      {
        "pos": "v.",
        "en_def": "to not move or not do something anymore",
        "cn_def": "停止"
      }
    ]
  },
  "traffic": {
    "pos": "n.",
    "en_def": "all the cars, buses, and trucks moving on the road",
    "cn_def": "交通",
    "combined": [
      {
        "pos": "n.",
        "en_def": "all the cars, buses, and trucks moving on the road",
        "cn_def": "交通"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
