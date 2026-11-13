// Group 29 Quiz Data: Transportation (交通工具)
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "Group 29 - Transportation (交通工具)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "airplane",
    "pos": "n.",
    "cn_def": "飛機",
    "en_def": "a machine with wings that flies in the sky",
    "sentence": "How will you go to Japan? We'll go there by {{BLANK}}.",
    "cn": "你們要怎麼去日本？ 我們要搭飛機去。"
  },
  {
    "word": "airlines",
    "pos": "n.",
    "cn_def": "航空公司；航線",
    "en_def": "a company that carries people by airplane",
    "sentence": "Which {{BLANK}} will you fly with? EVA Air. It takes three hours to get to Tokyo.",
    "cn": "你要搭哪一家航空公司？ 長榮航空。到東京要三個小時。"
  },
  {
    "word": "flight",
    "pos": "n.",
    "cn_def": "飛機班次",
    "en_def": "a trip on an airplane",
    "sentence": "How long does the {{BLANK}} to Bangkok take? It takes about four hours.",
    "cn": "飛往曼谷的班機要多久？ 大約四個小時。"
  },
  {
    "word": "helicopter",
    "pos": "n.",
    "cn_def": "直昇機",
    "en_def": "a flying machine with big blades that turn on top",
    "sentence": "How did they get the sick man to the hospital? They took him there by {{BLANK}}.",
    "cn": "他們怎麼把病人送到醫院？ 他們用直升機送他去。"
  },
  {
    "word": "ship",
    "pos": "n.",
    "cn_def": "大船",
    "en_def": "a very big boat that travels on the sea",
    "sentence": "How long does it take to go to Penghu by {{BLANK}}? It takes about four hours.",
    "cn": "搭船去澎湖要多久？ 大約四個小時。"
  },
  {
    "word": "boat",
    "pos": "n.",
    "cn_def": "小船",
    "en_def": "a small thing that carries people on water",
    "sentence": "How do we get to Green Island? Get on the {{BLANK}} at Taitung.",
    "cn": "我們要怎麼去綠島？ 在台東上船。"
  },
  {
    "word": "train",
    "pos": "n.",
    "cn_def": "火車",
    "en_def": "a line of cars that runs on rails",
    "sentence": "How do you go to Taichung? I go there by {{BLANK}}.",
    "cn": "你怎麼去台中？ 我搭火車去。"
  },
  {
    "word": "railroad",
    "pos": "n.",
    "cn_def": "鐵路",
    "en_def": "the metal tracks that trains run on",
    "sentence": "How long does it take to build a new {{BLANK}}? It takes many years.",
    "cn": "蓋一條新鐵路要多久？ 要很多年。"
  },
  {
    "word": "railway",
    "pos": "n.",
    "cn_def": "鐵路",
    "en_def": "the tracks and system that trains use",
    "sentence": "How do you go to Hualien? I take the train. The {{BLANK}} goes along the coast.",
    "cn": "你怎麼去花蓮？ 我搭火車。鐵路沿著海岸走。"
  },
  {
    "word": "subway",
    "pos": "n.",
    "cn_def": "地鐵；地下道",
    "en_def": "a train that runs under the ground in a city",
    "sentence": "How do people go to work in New York? Many people go by {{BLANK}}.",
    "cn": "紐約人怎麼去上班？ 很多人搭地鐵。"
  },
  {
    "word": "metro",
    "pos": "n.",
    "cn_def": "地鐵",
    "en_def": "a city train system, often under the ground",
    "sentence": "How long does it take to get to the museum by {{BLANK}}? It takes fifteen minutes.",
    "cn": "搭地鐵到博物館要多久？ 要十五分鐘。"
  },
  {
    "word": "MRT",
    "pos": "n.",
    "cn_def": "捷運",
    "en_def": "the fast city train system in places like Taipei",
    "sentence": "Where should I get off the {{BLANK}}? Get off at Taipei 101 Station.",
    "cn": "我應該在哪裡下捷運？ 在台北 101 站下車。"
  },
  {
    "word": "bus",
    "pos": "n.",
    "cn_def": "公車",
    "en_def": "a big car that carries many people along a road",
    "sentence": "Where do I get on the {{BLANK}} to the zoo? At the stop across the street.",
    "cn": "我要在哪裡搭往動物園的公車？ 在對街的站牌。"
  },
  {
    "word": "truck",
    "pos": "n.",
    "cn_def": "卡車",
    "en_def": "a big, strong car for carrying heavy things",
    "sentence": "What is the man doing? He's getting out of his {{BLANK}}.",
    "cn": "那個男人在做什麼？ 他正從他的卡車下來。"
  },
  {
    "word": "jeep",
    "pos": "n.",
    "cn_def": "吉普車",
    "en_def": "a small, strong car that can drive on rough roads",
    "sentence": "How did you go up the mountain? We went by {{BLANK}}. The road was rough.",
    "cn": "你們怎麼上山的？ 我們搭吉普車上山。路很顛簸。"
  },
  {
    "word": "ambulance",
    "pos": "n.",
    "cn_def": "救護車",
    "en_def": "a special car that takes sick or hurt people to the hospital",
    "sentence": "How long did it take the {{BLANK}} to come? It took only five minutes.",
    "cn": "救護車花了多久才來？ 只花了五分鐘。"
  },
  {
    "word": "car",
    "pos": "n.",
    "cn_def": "汽車",
    "en_def": "a machine with four wheels that people drive",
    "sentence": "Can you help Grandma get out of the {{BLANK}}? Sure. Be careful, Grandma.",
    "cn": "你可以幫奶奶下車嗎？ 當然。奶奶小心。"
  },
  {
    "word": "taxi",
    "pos": "n.",
    "cn_def": "計程車",
    "en_def": "a car with a driver that you pay to take you somewhere",
    "sentence": "How do I get to the airport fast? Get in a {{BLANK}}. It's the fastest way.",
    "cn": "我要怎麼快速到機場？ 上一輛計程車。那是最快的方法。"
  },
  {
    "word": "motorcycle",
    "pos": "n.",
    "cn_def": "摩托車",
    "en_def": "a fast machine with two wheels and an engine",
    "sentence": "How does your uncle go to work? He goes to work by {{BLANK}}.",
    "cn": "你叔叔怎麼去上班？ 他騎摩托車去上班。"
  },
  {
    "word": "scooter",
    "pos": "n.",
    "cn_def": "機車",
    "en_def": "a small, light motorcycle",
    "sentence": "How long does it take Mom to get to work by {{BLANK}}? It takes her ten minutes.",
    "cn": "媽媽騎機車去上班要多久？ 要十分鐘。"
  },
  {
    "word": "bicycle",
    "pos": "n.",
    "cn_def": "單車；腳踏車",
    "en_def": "a machine with two wheels that you ride by pushing with your feet",
    "sentence": "How does Amy go to school? She rides her {{BLANK}} to school.",
    "cn": "艾咪怎麼去上學？ 她騎腳踏車上學。"
  },
  {
    "word": "board",
    "pos": "v.",
    "cn_def": "上(交通工具)",
    "en_def": "to get on a plane, ship, train, or bus",
    "sentence": "When can we {{BLANK}} the plane? In ten minutes. Please get on the plane at Gate 5.",
    "cn": "我們什麼時候可以登機？ 十分鐘後。請在五號登機門上飛機。"
  },
  {
    "word": "board",
    "pos": "n.",
    "cn_def": "木板；告示板",
    "en_def": "a flat piece of wood, or a flat thing on a wall that shows information",
    "sentence": "Where can I see the train times? Look at the {{BLANK}} on the wall.",
    "cn": "我在哪裡可以看到火車時刻？ 看牆上的看板。"
  },
  {
    "word": "drive",
    "pos": "v.",
    "cn_def": "駕駛",
    "en_def": "to make a car or bus move and go where you want",
    "sentence": "How long does it take to {{BLANK}} to Hsinchu? It takes about one hour.",
    "cn": "開車到新竹要多久？ 大約一個小時。"
  },
  {
    "word": "ride",
    "pos": "v.",
    "cn_def": "騎",
    "en_def": "to sit on a bike, horse, or motorcycle and make it go",
    "sentence": "How do you go to the park? I {{BLANK}} my bike there. It's faster than walking.",
    "cn": "你怎麼去公園？ 我騎腳踏車去。比走路快。"
  },
  {
    "word": "row",
    "pos": "v.",
    "cn_def": "划(船)",
    "en_def": "to move a boat through water with long sticks",
    "sentence": "How long did it take to {{BLANK}} across the lake? It took us thirty minutes.",
    "cn": "划船橫越湖面花了多久？ 花了我們三十分鐘。"
  },
  {
    "word": "row",
    "pos": "n.",
    "cn_def": "排；列",
    "en_def": "a line of people or things next to each other",
    "sentence": "Where should we sit on the bus? Get on and sit in the back {{BLANK}}.",
    "cn": "我們在公車上應該坐哪裡？ 上車後坐最後一排。"
  },
  {
    "word": "sail",
    "pos": "v.",
    "cn_def": "揚帆；航行",
    "en_def": "to travel on water in a boat or ship",
    "sentence": "How long does it take to {{BLANK}} to the island? It takes about two hours by boat.",
    "cn": "航行到那座島要多久？ 搭船大約兩個小時。"
  }
];

const MCQS = [
  {
    "q": "How will you go to Japan? We'll go there by ______.",
    "options": [
      "helicopter",
      "bus",
      "ambulance",
      "airplane"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Which ______ will you fly with? EVA Air. It takes three hours to get to Tokyo.",
    "options": [
      "motorcycle",
      "airlines",
      "MRT",
      "flight"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "How long does the ______ to Bangkok take? It takes about four hours.",
    "options": [
      "bus",
      "helicopter",
      "flight",
      "jeep"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "How did they get the sick man to the hospital? They took him there by ______.",
    "options": [
      "helicopter",
      "boat",
      "row",
      "railroad"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "How long does it take to go to Penghu by ______? It takes about four hours.",
    "options": [
      "bus",
      "ship",
      "ambulance",
      "airlines"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "How do we get to Green Island? Get on the ______ at Taitung.",
    "options": [
      "subway",
      "ambulance",
      "helicopter",
      "boat"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "How do you go to Taichung? I go there by ______.",
    "options": [
      "train",
      "bus",
      "railroad",
      "ambulance"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "How long does it take to build a new ______? It takes many years.",
    "options": [
      "airplane",
      "metro",
      "railroad",
      "bicycle"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "How do you go to Hualien? I take the train. The ______ goes along the coast.",
    "options": [
      "motorcycle",
      "airplane",
      "airlines",
      "railway"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "How do people go to work in New York? Many people go by ______.",
    "options": [
      "subway",
      "train",
      "car",
      "boat"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "How long does it take to get to the museum by ______? It takes fifteen minutes.",
    "options": [
      "ambulance",
      "metro",
      "jeep",
      "car"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Where should I get off the ______? Get off at Taipei 101 Station.",
    "options": [
      "flight",
      "train",
      "MRT",
      "truck"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Where do I get on the ______ to the zoo? At the stop across the street.",
    "options": [
      "boat",
      "bus",
      "ambulance",
      "MRT"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "What is the man doing? He's getting out of his ______.",
    "options": [
      "railway",
      "airplane",
      "truck",
      "metro"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "How did you go up the mountain? We went by ______. The road was rough.",
    "options": [
      "jeep",
      "subway",
      "ship",
      "metro"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "How long did it take the ______ to come? It took only five minutes.",
    "options": [
      "motorcycle",
      "railway",
      "helicopter",
      "ambulance"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Can you help Grandma get out of the ______? Sure. Be careful, Grandma.",
    "options": [
      "boat",
      "jeep",
      "car",
      "ambulance"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "How do I get to the airport fast? Get in a ______. It's the fastest way.",
    "options": [
      "train",
      "taxi",
      "motorcycle",
      "airplane"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "How does your uncle go to work? He goes to work by ______.",
    "options": [
      "flight",
      "airlines",
      "airplane",
      "motorcycle"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "How long does it take Mom to get to work by ______? It takes her ten minutes.",
    "options": [
      "scooter",
      "truck",
      "car",
      "MRT"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "How does Amy go to school? She rides her ______ to school.",
    "options": [
      "ship",
      "board",
      "truck",
      "bicycle"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "When can we ______ the plane? In ten minutes. Please get on the plane at Gate 5.",
    "options": [
      "board",
      "sail",
      "ride",
      "drive"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Where can I see the train times? Look at the ______ on the wall.",
    "options": [
      "bicycle",
      "bus",
      "board",
      "truck"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "How long does it take to ______ to Hsinchu? It takes about one hour.",
    "options": [
      "ride",
      "drive",
      "row",
      "sail"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "How do you go to the park? I ______ my bike there. It's faster than walking.",
    "options": [
      "board",
      "row",
      "sail",
      "ride"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "How long did it take to ______ across the lake? It took us thirty minutes.",
    "options": [
      "row",
      "sail",
      "drive",
      "ride"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Where should we sit on the bus? Get on and sit in the back ______.",
    "options": [
      "motorcycle",
      "airplane",
      "row",
      "bus"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "How long does it take to ______ to the island? It takes about two hours by boat.",
    "options": [
      "ride",
      "sail",
      "row",
      "drive"
    ],
    "answer": 1,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "airplane": {
    "pos": "n.",
    "en_def": "a machine with wings that flies in the sky",
    "cn_def": "飛機",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a machine with wings that flies in the sky",
        "cn_def": "飛機"
      }
    ]
  },
  "airlines": {
    "pos": "n.",
    "en_def": "a company that carries people by airplane",
    "cn_def": "航空公司；航線",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a company that carries people by airplane",
        "cn_def": "航空公司；航線"
      }
    ]
  },
  "flight": {
    "pos": "n.",
    "en_def": "a trip on an airplane",
    "cn_def": "飛機班次",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a trip on an airplane",
        "cn_def": "飛機班次"
      }
    ]
  },
  "helicopter": {
    "pos": "n.",
    "en_def": "a flying machine with big blades that turn on top",
    "cn_def": "直昇機",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a flying machine with big blades that turn on top",
        "cn_def": "直昇機"
      }
    ]
  },
  "ship": {
    "pos": "n.",
    "en_def": "a very big boat that travels on the sea",
    "cn_def": "大船",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a very big boat that travels on the sea",
        "cn_def": "大船"
      }
    ]
  },
  "boat": {
    "pos": "n.",
    "en_def": "a small thing that carries people on water",
    "cn_def": "小船",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small thing that carries people on water",
        "cn_def": "小船"
      }
    ]
  },
  "train": {
    "pos": "n.",
    "en_def": "a line of cars that runs on rails",
    "cn_def": "火車",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a line of cars that runs on rails",
        "cn_def": "火車"
      }
    ]
  },
  "railroad": {
    "pos": "n.",
    "en_def": "the metal tracks that trains run on",
    "cn_def": "鐵路",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the metal tracks that trains run on",
        "cn_def": "鐵路"
      }
    ]
  },
  "railway": {
    "pos": "n.",
    "en_def": "the tracks and system that trains use",
    "cn_def": "鐵路",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the tracks and system that trains use",
        "cn_def": "鐵路"
      }
    ]
  },
  "subway": {
    "pos": "n.",
    "en_def": "a train that runs under the ground in a city",
    "cn_def": "地鐵；地下道",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a train that runs under the ground in a city",
        "cn_def": "地鐵；地下道"
      }
    ]
  },
  "metro": {
    "pos": "n.",
    "en_def": "a city train system, often under the ground",
    "cn_def": "地鐵",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a city train system, often under the ground",
        "cn_def": "地鐵"
      }
    ]
  },
  "mrt": {
    "pos": "n.",
    "en_def": "the fast city train system in places like Taipei",
    "cn_def": "捷運",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the fast city train system in places like Taipei",
        "cn_def": "捷運"
      }
    ]
  },
  "bus": {
    "pos": "n.",
    "en_def": "a big car that carries many people along a road",
    "cn_def": "公車",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a big car that carries many people along a road",
        "cn_def": "公車"
      }
    ]
  },
  "truck": {
    "pos": "n.",
    "en_def": "a big, strong car for carrying heavy things",
    "cn_def": "卡車",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a big, strong car for carrying heavy things",
        "cn_def": "卡車"
      }
    ]
  },
  "jeep": {
    "pos": "n.",
    "en_def": "a small, strong car that can drive on rough roads",
    "cn_def": "吉普車",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small, strong car that can drive on rough roads",
        "cn_def": "吉普車"
      }
    ]
  },
  "ambulance": {
    "pos": "n.",
    "en_def": "a special car that takes sick or hurt people to the hospital",
    "cn_def": "救護車",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a special car that takes sick or hurt people to the hospital",
        "cn_def": "救護車"
      }
    ]
  },
  "car": {
    "pos": "n.",
    "en_def": "a machine with four wheels that people drive",
    "cn_def": "汽車",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a machine with four wheels that people drive",
        "cn_def": "汽車"
      }
    ]
  },
  "taxi": {
    "pos": "n.",
    "en_def": "a car with a driver that you pay to take you somewhere",
    "cn_def": "計程車",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a car with a driver that you pay to take you somewhere",
        "cn_def": "計程車"
      }
    ]
  },
  "motorcycle": {
    "pos": "n.",
    "en_def": "a fast machine with two wheels and an engine",
    "cn_def": "摩托車",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a fast machine with two wheels and an engine",
        "cn_def": "摩托車"
      }
    ]
  },
  "scooter": {
    "pos": "n.",
    "en_def": "a small, light motorcycle",
    "cn_def": "機車",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small, light motorcycle",
        "cn_def": "機車"
      }
    ]
  },
  "bicycle": {
    "pos": "n.",
    "en_def": "a machine with two wheels that you ride by pushing with your feet",
    "cn_def": "單車；腳踏車",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a machine with two wheels that you ride by pushing with your feet",
        "cn_def": "單車；腳踏車"
      }
    ]
  },
  "board": {
    "pos": "v.",
    "en_def": "to get on a plane, ship, train, or bus",
    "cn_def": "上(交通工具)",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to get on a plane, ship, train, or bus",
        "cn_def": "上(交通工具)"
      },
      {
        "pos": "n.",
        "en_def": "a flat piece of wood, or a flat thing on a wall that shows information",
        "cn_def": "木板；告示板"
      }
    ]
  },
  "drive": {
    "pos": "v.",
    "en_def": "to make a car or bus move and go where you want",
    "cn_def": "駕駛",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make a car or bus move and go where you want",
        "cn_def": "駕駛"
      }
    ]
  },
  "ride": {
    "pos": "v.",
    "en_def": "to sit on a bike, horse, or motorcycle and make it go",
    "cn_def": "騎",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to sit on a bike, horse, or motorcycle and make it go",
        "cn_def": "騎"
      }
    ]
  },
  "row": {
    "pos": "v.",
    "en_def": "to move a boat through water with long sticks",
    "cn_def": "划(船)",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to move a boat through water with long sticks",
        "cn_def": "划(船)"
      },
      {
        "pos": "n.",
        "en_def": "a line of people or things next to each other",
        "cn_def": "排；列"
      }
    ]
  },
  "sail": {
    "pos": "v.",
    "en_def": "to travel on water in a boat or ship",
    "cn_def": "揚帆；航行",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to travel on water in a boat or ship",
        "cn_def": "揚帆；航行"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
