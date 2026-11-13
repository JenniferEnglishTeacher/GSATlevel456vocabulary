// Unit 18 Quiz Data: Transportation 交通（第18區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U18 - Transportation",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "bicycle (bike)",
    "pos": "n.",
    "cn_def": "腳踏車",
    "en_def": "a thing with two wheels that you ride by moving your legs",
    "sentence": "Q: How does Amy go to school? — A: She goes to school by {{BLANK}}.",
    "cn": "艾美怎麼上學？ — 她騎腳踏車上學。",
    "alts": [
      "bike"
    ]
  },
  {
    "word": "ride",
    "pos": "v.",
    "cn_def": "騎",
    "en_def": "to sit on a bike, a horse, or a scooter and make it go",
    "sentence": "Q: How do you go to the park? — A: I {{BLANK}} my bike there.",
    "cn": "你怎麼去公園？ — 我騎腳踏車去那裡。"
  },
  {
    "word": "scooter",
    "pos": "n.",
    "cn_def": "小型機車",
    "en_def": "a small, light motorcycle",
    "sentence": "Q: How does your mom go to the market? — A: She rides her {{BLANK}} there.",
    "cn": "你媽媽怎麼去市場？ — 她騎她的機車去那裡。"
  },
  {
    "word": "motorcycle",
    "pos": "n.",
    "cn_def": "機車",
    "en_def": "a thing with two wheels and an engine that you ride",
    "sentence": "Q: How do your brothers go to work? — A: They go to work by {{BLANK}}.",
    "cn": "你哥哥們怎麼去上班？ — 他們騎機車去上班。"
  },
  {
    "word": "car",
    "pos": "n.",
    "cn_def": "車子",
    "en_def": "a machine with four wheels that a person drives on the road",
    "sentence": "Q: How does your dad go to work? — A: He goes to work by {{BLANK}}.",
    "cn": "你爸爸怎麼去上班？ — 他開車去上班。"
  },
  {
    "word": "drive",
    "pos": "v.",
    "cn_def": "駕駛；開車",
    "en_def": "to make a car, bus, or truck go where you want",
    "sentence": "Q: How do your parents go to the beach? — A: They {{BLANK}} there in their new car.",
    "cn": "你爸媽怎麼去海灘？ — 他們開新車去那裡。"
  },
  {
    "word": "bus",
    "pos": "n.",
    "cn_def": "公車",
    "en_def": "a big car that carries many people along the road",
    "sentence": "Q: How do you go to school? — A: I go to school by {{BLANK}}.",
    "cn": "你怎麼上學？ — 我搭公車上學。"
  },
  {
    "word": "taxi",
    "pos": "n.",
    "cn_def": "計程車",
    "en_def": "a car with a driver that you pay to take you somewhere",
    "sentence": "Q: How does Mr. Lee go to the hotel? — A: He takes a {{BLANK}}.",
    "cn": "李先生怎麼去旅館？ — 他搭計程車。"
  },
  {
    "word": "train",
    "pos": "n.",
    "cn_def": "火車",
    "en_def": "a line of cars that moves along rails and carries people",
    "sentence": "Q: How do Ben and his sister go to Tainan? — A: They go there by {{BLANK}}.",
    "cn": "班和他妹妹怎麼去臺南？ — 他們搭火車去那裡。"
  },
  {
    "word": "take the MRT",
    "pos": "phr.",
    "cn_def": "搭捷運",
    "en_def": "to travel on the city's fast trains",
    "sentence": "Q: How do you and Tom go to the zoo? — A: We {{BLANK}} there.",
    "cn": "你和湯姆怎麼去動物園？ — 我們搭捷運去那裡。",
    "nblanks": 3
  },
  {
    "word": "fast",
    "pos": "adj.",
    "cn_def": "快的",
    "en_def": "moving or happening in a short time; not slow",
    "sentence": "Q: Do you go to school by MRT? — A: Yes, I do. The MRT is very {{BLANK}}.",
    "cn": "你搭捷運上學嗎？ — 是的，我搭捷運。捷運很快。"
  },
  {
    "word": "quick",
    "pos": "adj.",
    "cn_def": "迅速的",
    "en_def": "taking very little time",
    "sentence": "Q: Does your dad take a taxi to work? — A: Yes, he does. It's a {{BLANK}} way to get there.",
    "cn": "你爸爸搭計程車上班嗎？ — 是的，他搭計程車。那是到那裡的快速方法。"
  },
  {
    "word": "slow",
    "pos": "adj.",
    "cn_def": "慢的",
    "en_def": "not fast; taking a long time",
    "sentence": "Q: Does Lisa go to school by bus? — A: No, she doesn't. The bus is too {{BLANK}}. She rides her bike.",
    "cn": "麗莎搭公車上學嗎？ — 不，她沒有。公車太慢了，她騎腳踏車。"
  },
  {
    "word": "airplane (plane)",
    "pos": "n.",
    "cn_def": "飛機",
    "en_def": "a machine with wings that flies in the sky and carries people",
    "sentence": "Q: How long does it take to go to Japan by {{BLANK}}? — A: It takes about three hours.",
    "cn": "搭飛機去日本要多久？ — 大約要三個小時。",
    "alts": [
      "plane"
    ]
  },
  {
    "word": "fly",
    "pos": "v.",
    "cn_def": "飛",
    "en_def": "to move through the air",
    "sentence": "Q: How long does it take to {{BLANK}} to Hong Kong? — A: It takes about two hours.",
    "cn": "飛到香港要多久？ — 大約要兩個小時。"
  },
  {
    "word": "boat",
    "pos": "n.",
    "cn_def": "船",
    "en_def": "a small thing that carries people on water",
    "sentence": "Q: How long does it take to go to the island by {{BLANK}}? — A: It takes about thirty minutes.",
    "cn": "搭船去那座島要多久？ — 大約要三十分鐘。"
  },
  {
    "word": "ship",
    "pos": "n.",
    "cn_def": "船",
    "en_def": "a big thing that carries people or things across the sea",
    "sentence": "Q: How long does it take to go to Penghu? — A: It takes about four hours by {{BLANK}}.",
    "cn": "去澎湖要多久？ — 搭船大約要四個小時。"
  },
  {
    "word": "sail",
    "pos": "v.",
    "cn_def": "航行",
    "en_def": "to travel on water in a boat or a ship",
    "sentence": "Q: How long do your uncle and his friends stay on the boat? — A: They {{BLANK}} on the sea for two hours.",
    "cn": "你叔叔和他的朋友們在船上待多久？ — 他們在海上航行兩個小時。"
  },
  {
    "word": "arrive",
    "pos": "v.",
    "cn_def": "到達",
    "en_def": "to get to a place",
    "sentence": "Q: When do we {{BLANK}} at the station? — A: In ten minutes. It takes ten minutes from here.",
    "cn": "我們什麼時候到達車站？ — 十分鐘後，從這裡過去要十分鐘。"
  },
  {
    "word": "traffic",
    "pos": "n.",
    "cn_def": "交通",
    "en_def": "all the cars, buses, and motorcycles moving on the roads",
    "sentence": "Q: How long does it take to go to school by car? — A: About forty minutes. There is a lot of {{BLANK}} in the morning.",
    "cn": "開車上學要多久？ — 大約四十分鐘，早上車很多。"
  },
  {
    "word": "turn",
    "pos": "v.",
    "cn_def": "轉彎",
    "en_def": "to change the direction you are going",
    "sentence": "Q: How do I get to the bank? — A: Go straight and {{BLANK}} left at the corner.",
    "cn": "我要怎麼去銀行？ — 直走，然後在轉角左轉。"
  },
  {
    "word": "block (blocks)",
    "pos": "n.",
    "cn_def": "街區",
    "en_def": "the part of a street between two other streets",
    "sentence": "Q: How do I get to the post office? — A: Go straight for two {{BLANK}}. It's on your right.",
    "cn": "我要怎麼去郵局？ — 直走兩個街區，它在你的右邊。"
  },
  {
    "word": "cross (crosses)",
    "pos": "v.",
    "cn_def": "越過",
    "en_def": "to go from one side of a road or river to the other",
    "sentence": "Q: How does Amy get to the park? — A: She {{BLANK}} the street at the traffic light.",
    "cn": "艾美怎麼去公園？ — 她在紅綠燈處過馬路。"
  },
  {
    "word": "bridge",
    "pos": "n.",
    "cn_def": "橋",
    "en_def": "something built over a river or road so people can go across",
    "sentence": "Q: How do we get to the museum? — A: Walk across the {{BLANK}}. The museum is next to the river.",
    "cn": "我們要怎麼去博物館？ — 走過那座橋，博物館就在河邊。"
  },
  {
    "word": "sidewalk",
    "pos": "n.",
    "cn_def": "人行道",
    "en_def": "a path at the side of a street for people to walk on",
    "sentence": "Q: How does Ben get to school safely? — A: He walks on the {{BLANK}}, not on the road.",
    "cn": "班怎麼安全地走到學校？ — 他走在人行道上，不走在馬路上。"
  },
  {
    "word": "airport",
    "pos": "n.",
    "cn_def": "機場",
    "en_def": "a place where planes take off and land",
    "sentence": "Q: Where do we take the plane to Japan? — A: We take it at the {{BLANK}} in Taoyuan.",
    "cn": "我們在哪裡搭去日本的飛機？ — 我們在桃園的機場搭。"
  },
  {
    "word": "land (lands)",
    "pos": "v.",
    "cn_def": "降落",
    "en_def": "to come down from the air onto the ground",
    "sentence": "Q: Where does the plane from Tokyo stop? — A: It {{BLANK}} at the airport in Taoyuan.",
    "cn": "從東京來的飛機停在哪裡？ — 它降落在桃園的機場。"
  },
  {
    "word": "station",
    "pos": "n.",
    "cn_def": "車站",
    "en_def": "a place where trains or buses stop for people to get on and off",
    "sentence": "Q: Where does Tom take the train? — A: He takes it at the train {{BLANK}}.",
    "cn": "湯姆在哪裡搭火車？ — 他在火車站搭車。"
  },
  {
    "word": "truck",
    "pos": "n.",
    "cn_def": "卡車",
    "en_def": "a big car for carrying heavy things",
    "sentence": "Q: What do the workers drive? — A: They drive a big {{BLANK}}. It carries many boxes.",
    "cn": "那些工人開什麼車？ — 他們開一輛大卡車，它載著很多箱子。"
  }
];

const MCQS = [
  {
    "q": "I ride my ______ to school every day. It has two wheels and no engine, so it is good exercise.",
    "options": [
      "taxi",
      "bicycle",
      "train",
      "truck"
    ],
    "answer": 1,
    "cn": "艾美怎麼上學？ — 她騎腳踏車上學。",
    "vocabIndex": 0
  },
  {
    "q": "Can you ______ a horse? I tried it once, but I fell off.",
    "options": [
      "drive",
      "fly",
      "ride",
      "sail"
    ],
    "answer": 2,
    "cn": "你怎麼去公園？ — 我騎腳踏車去那裡。",
    "vocabIndex": 1
  },
  {
    "q": "Many people in Taiwan ride a ______ to work. This small motorcycle is easy to park.",
    "options": [
      "scooter",
      "taxi",
      "truck",
      "ship"
    ],
    "answer": 0,
    "cn": "你媽媽怎麼去市場？ — 她騎她的機車去那裡。",
    "vocabIndex": 2
  },
  {
    "q": "My uncle rides a big ______. It has two wheels and a strong engine, and it is very fast.",
    "options": [
      "truck",
      "taxi",
      "boat",
      "motorcycle"
    ],
    "answer": 3,
    "cn": "你哥哥們怎麼去上班？ — 他們騎機車去上班。",
    "vocabIndex": 3
  },
  {
    "q": "My father drives his ______ to work. Our family of five can all sit in it.",
    "options": [
      "car",
      "train",
      "boat",
      "bicycle"
    ],
    "answer": 0,
    "cn": "你爸爸怎麼去上班？ — 他開車去上班。",
    "vocabIndex": 4
  },
  {
    "q": "You have to be eighteen years old to ______ a car in Taiwan.",
    "options": [
      "ride",
      "fly",
      "sail",
      "drive"
    ],
    "answer": 3,
    "cn": "你爸媽怎麼去海灘？ — 他們開新車去那裡。",
    "vocabIndex": 5
  },
  {
    "q": "I take the school ______ every morning. About forty students ride on it together.",
    "options": [
      "taxi",
      "bus",
      "bicycle",
      "scooter"
    ],
    "answer": 1,
    "cn": "你怎麼上學？ — 我搭公車上學。",
    "vocabIndex": 6
  },
  {
    "q": "We were late, so we took a ______ to the airport. The driver got us there fast, and we paid him 500 dollars.",
    "options": [
      "bicycle",
      "ship",
      "taxi",
      "bridge"
    ],
    "answer": 2,
    "cn": "李先生怎麼去旅館？ — 他搭計程車。",
    "vocabIndex": 7
  },
  {
    "q": "We took the ______ from Taipei to Kaohsiung. It ran on rails and stopped at many stations.",
    "options": [
      "train",
      "taxi",
      "ship",
      "truck"
    ],
    "answer": 0,
    "cn": "班和他妹妹怎麼去臺南？ — 他們搭火車去那裡。",
    "vocabIndex": 8
  },
  {
    "q": "Many people in Taipei ______ to work. The trains run under the city and come every few minutes.",
    "options": [
      "ride a horse",
      "sail a boat",
      "fly a kite",
      "take the MRT"
    ],
    "answer": 3,
    "cn": "你和湯姆怎麼去動物園？ — 我們搭捷運去那裡。",
    "vocabIndex": 9
  },
  {
    "q": "The high speed rail is very ______. It takes only ninety minutes to go from Taipei to Kaohsiung.",
    "options": [
      "slow",
      "heavy",
      "fast",
      "short"
    ],
    "answer": 2,
    "cn": "你搭捷運上學嗎？ — 是的，我搭捷運。捷運很快。",
    "vocabIndex": 10
  },
  {
    "q": "Let's have a ______ lunch. We only have fifteen minutes before the next class.",
    "options": [
      "slow",
      "quick",
      "tall",
      "young"
    ],
    "answer": 1,
    "cn": "你爸爸搭計程車上班嗎？ — 是的，他搭計程車。那是到那裡的快速方法。",
    "vocabIndex": 11
  },
  {
    "q": "This bus is too ______. We have been on it for an hour, and we are still not there.",
    "options": [
      "slow",
      "fast",
      "quick",
      "short"
    ],
    "answer": 0,
    "cn": "麗莎搭公車上學嗎？ — 不，她沒有。公車太慢了，她騎腳踏車。",
    "vocabIndex": 12
  },
  {
    "q": "We flew to Japan on a big ______. It took off at nine and landed at one.",
    "options": [
      "ship",
      "train",
      "truck",
      "airplane"
    ],
    "answer": 3,
    "cn": "搭飛機去日本要多久？ — 大約要三個小時。",
    "vocabIndex": 13
  },
  {
    "q": "Birds can ______ because they have wings. People need planes to do it.",
    "options": [
      "drive",
      "fly",
      "ride",
      "sail"
    ],
    "answer": 1,
    "cn": "飛到香港要多久？ — 大約要兩個小時。",
    "vocabIndex": 14
  },
  {
    "q": "We sat in a small ______ and fished in the middle of the lake.",
    "options": [
      "truck",
      "train",
      "boat",
      "taxi"
    ],
    "answer": 2,
    "cn": "搭船去那座島要多久？ — 大約要三十分鐘。",
    "vocabIndex": 15
  },
  {
    "q": "A big ______ carries thousands of people across the sea. It is like a hotel on the water.",
    "options": [
      "ship",
      "truck",
      "train",
      "taxi"
    ],
    "answer": 0,
    "cn": "去澎湖要多久？ — 搭船大約要四個小時。",
    "vocabIndex": 16
  },
  {
    "q": "The ship will ______ from Keelung to Japan tomorrow morning. It will be at sea for two days.",
    "options": [
      "drive",
      "ride",
      "sail",
      "fly"
    ],
    "answer": 2,
    "cn": "你叔叔和他的朋友們在船上待多久？ — 他們在海上航行兩個小時。",
    "vocabIndex": 17
  },
  {
    "q": "The train will ______ at Taipei Station at ten o'clock. Please wait for me there.",
    "options": [
      "turn",
      "cross",
      "land",
      "arrive"
    ],
    "answer": 3,
    "cn": "我們什麼時候到達車站？ — 十分鐘後，從這裡過去要十分鐘。",
    "vocabIndex": 18
  },
  {
    "q": "There is a lot of ______ in the morning. The roads are full of cars, buses, and motorcycles.",
    "options": [
      "bridge",
      "traffic",
      "sidewalk",
      "block"
    ],
    "answer": 1,
    "cn": "開車上學要多久？ — 大約四十分鐘，早上車很多。",
    "vocabIndex": 19
  },
  {
    "q": "Go straight for two blocks and ______ left at the bank. The post office is on your right.",
    "options": [
      "cross",
      "arrive",
      "turn",
      "land"
    ],
    "answer": 2,
    "cn": "我要怎麼去銀行？ — 直走，然後在轉角左轉。",
    "vocabIndex": 20
  },
  {
    "q": "The library is not far. Walk three ______ down this street, and you will see it.",
    "options": [
      "bridges",
      "stations",
      "sidewalks",
      "blocks"
    ],
    "answer": 3,
    "cn": "我要怎麼去郵局？ — 直走兩個街區，它在你的右邊。",
    "vocabIndex": 21
  },
  {
    "q": "The old woman ______ the street slowly. A kind boy helps her get to the other side.",
    "options": [
      "turns",
      "crosses",
      "arrives",
      "lands"
    ],
    "answer": 1,
    "cn": "艾美怎麼去公園？ — 她在紅綠燈處過馬路。",
    "vocabIndex": 22
  },
  {
    "q": "We drove over a long ______ to cross the river. It was built two years ago.",
    "options": [
      "bridge",
      "station",
      "sidewalk",
      "airport"
    ],
    "answer": 0,
    "cn": "我們要怎麼去博物館？ — 走過那座橋，博物館就在河邊。",
    "vocabIndex": 23
  },
  {
    "q": "Please walk on the ______, not in the street. The cars are very fast here.",
    "options": [
      "airport",
      "station",
      "traffic",
      "sidewalk"
    ],
    "answer": 3,
    "cn": "班怎麼安全地走到學校？ — 他走在人行道上，不走在馬路上。",
    "vocabIndex": 24
  },
  {
    "q": "We went to the ______ two hours early to catch our plane to Japan.",
    "options": [
      "airport",
      "station",
      "bridge",
      "sidewalk"
    ],
    "answer": 0,
    "cn": "我們在哪裡搭去日本的飛機？ — 我們在桃園的機場搭。",
    "vocabIndex": 25
  },
  {
    "q": "The plane from Tokyo ______ at Taoyuan at three o'clock. We will meet Grandma there.",
    "options": [
      "sails",
      "turns",
      "lands",
      "crosses"
    ],
    "answer": 2,
    "cn": "從東京來的飛機停在哪裡？ — 它降落在桃園的機場。",
    "vocabIndex": 26
  },
  {
    "q": "I will meet you at the train ______ at eight. Our train leaves at eight twenty.",
    "options": [
      "airport",
      "station",
      "bridge",
      "sidewalk"
    ],
    "answer": 1,
    "cn": "湯姆在哪裡搭火車？ — 他在火車站搭車。",
    "vocabIndex": 27
  },
  {
    "q": "The workers put all our furniture in a big ______ and drove it to our new house.",
    "options": [
      "taxi",
      "bicycle",
      "scooter",
      "truck"
    ],
    "answer": 3,
    "cn": "那些工人開什麼車？ — 他們開一輛大卡車，它載著很多箱子。",
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "taxi": {
    "pos": "n.",
    "en_def": "a car with a driver that you pay to take you somewhere",
    "cn_def": "計程車"
  },
  "bicycle": {
    "pos": "n.",
    "en_def": "a thing with two wheels that you ride by moving your legs",
    "cn_def": "腳踏車"
  },
  "train": {
    "pos": "n.",
    "en_def": "a line of cars that moves along rails and carries people",
    "cn_def": "火車"
  },
  "truck": {
    "pos": "n.",
    "en_def": "a big car for carrying heavy things",
    "cn_def": "卡車"
  },
  "drive": {
    "pos": "v.",
    "en_def": "to make a car, bus, or truck go where you want",
    "cn_def": "駕駛；開車"
  },
  "fly": {
    "pos": "v.",
    "en_def": "to move through the air",
    "cn_def": "飛"
  },
  "ride": {
    "pos": "v.",
    "en_def": "to sit on a bike, a horse, or a scooter and make it go",
    "cn_def": "騎"
  },
  "sail": {
    "pos": "v.",
    "en_def": "to travel on water in a boat",
    "cn_def": "航行；駕船"
  },
  "scooter": {
    "pos": "n.",
    "en_def": "a small, light motorcycle",
    "cn_def": "小型機車"
  },
  "ship": {
    "pos": "n.",
    "en_def": "a big thing that carries people or things across the sea",
    "cn_def": "船"
  },
  "boat": {
    "pos": "n.",
    "en_def": "a small thing that carries people on water",
    "cn_def": "船"
  },
  "motorcycle": {
    "pos": "n.",
    "en_def": "a thing with two wheels and an engine that you ride",
    "cn_def": "機車"
  },
  "car": {
    "pos": "n.",
    "en_def": "a machine with four wheels that a person drives on the road",
    "cn_def": "車子"
  },
  "bus": {
    "pos": "n.",
    "en_def": "a big car that carries many people along the road",
    "cn_def": "公車"
  },
  "bridge": {
    "pos": "n.",
    "en_def": "something built over a river or road so people can go across",
    "cn_def": "橋"
  },
  "ride a horse": {
    "pos": "phr.",
    "en_def": "",
    "cn_def": "騎馬"
  },
  "sail a boat": {
    "pos": "phr.",
    "en_def": "",
    "cn_def": "駕船"
  },
  "fly a kite": {
    "pos": "phr.",
    "en_def": "",
    "cn_def": "放風箏"
  },
  "take the mrt": {
    "pos": "phr.",
    "en_def": "to travel on the city's fast trains",
    "cn_def": "搭捷運"
  },
  "slow": {
    "pos": "adj.",
    "en_def": "not fast; taking a long time",
    "cn_def": "慢的"
  },
  "heavy": {
    "pos": "adj.",
    "en_def": "weighing a lot",
    "cn_def": "重的"
  },
  "fast": {
    "pos": "adj.",
    "en_def": "moving or happening in a short time; not slow",
    "cn_def": "快的"
  },
  "short": {
    "pos": "adj.",
    "en_def": "not tall; not long",
    "cn_def": "矮的；短的"
  },
  "quick": {
    "pos": "adj.",
    "en_def": "taking very little time",
    "cn_def": "迅速的"
  },
  "tall": {
    "pos": "adj.",
    "en_def": "high from head to foot",
    "cn_def": "高的"
  },
  "young": {
    "pos": "adj.",
    "en_def": "having lived for only a few years; not old",
    "cn_def": "年輕的"
  },
  "airplane": {
    "pos": "n.",
    "en_def": "a machine with wings that flies in the sky and carries people",
    "cn_def": "飛機"
  },
  "turn": {
    "pos": "v.",
    "en_def": "to change the direction you are going",
    "cn_def": "轉彎"
  },
  "cross": {
    "pos": "v.",
    "en_def": "to go from one side of a road or river to the other",
    "cn_def": "越過"
  },
  "land": {
    "pos": "v.",
    "en_def": "to come down from the air onto the ground",
    "cn_def": "降落"
  },
  "arrive": {
    "pos": "v.",
    "en_def": "to get to a place",
    "cn_def": "到達"
  },
  "traffic": {
    "pos": "n.",
    "en_def": "all the cars, buses, and motorcycles moving on the roads",
    "cn_def": "交通"
  },
  "sidewalk": {
    "pos": "n.",
    "en_def": "a path at the side of a street for people to walk on",
    "cn_def": "人行道"
  },
  "block": {
    "pos": "n.",
    "en_def": "the part of a street between two other streets",
    "cn_def": "街區"
  },
  "bridges": {
    "pos": "n.",
    "en_def": "something built over a river or road so people can go across",
    "cn_def": "橋"
  },
  "stations": {
    "pos": "n.",
    "en_def": "a place where trains or buses stop for people to get on and off",
    "cn_def": "車站"
  },
  "sidewalks": {
    "pos": "n.",
    "en_def": "a path at the side of a street for people to walk on",
    "cn_def": "人行道"
  },
  "blocks": {
    "pos": "n.",
    "en_def": "the part of a street between two other streets",
    "cn_def": "街區"
  },
  "turns": {
    "pos": "v.",
    "en_def": "to change the direction you are going",
    "cn_def": "轉彎"
  },
  "crosses": {
    "pos": "v.",
    "en_def": "to go from one side of a road or river to the other",
    "cn_def": "越過"
  },
  "arrives": {
    "pos": "v.",
    "en_def": "to get to a place",
    "cn_def": "到達"
  },
  "lands": {
    "pos": "v.",
    "en_def": "to come down from the air onto the ground",
    "cn_def": "降落"
  },
  "station": {
    "pos": "n.",
    "en_def": "a place where trains or buses stop for people to get on and off",
    "cn_def": "車站"
  },
  "airport": {
    "pos": "n.",
    "en_def": "a place where planes take off and land",
    "cn_def": "機場"
  },
  "sails": {
    "pos": "v.",
    "en_def": "to travel on water in a boat",
    "cn_def": "航行；駕船"
  }
};

const EXTRA_GLOSSES = {};
