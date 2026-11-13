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
    "q": "Q: How does Amy go to school? — A: She goes to school by ______.【腳踏車】",
    "options": [
      "motorcycle",
      "bridge",
      "truck",
      "bicycle"
    ],
    "answer": 3,
    "cn": "艾美怎麼上學？ — 她騎腳踏車上學。",
    "vocabIndex": 0
  },
  {
    "q": "Q: How do you go to the park? — A: I ______ my bike there.【騎】",
    "options": [
      "drive",
      "arrive",
      "ride",
      "fly"
    ],
    "answer": 2,
    "cn": "你怎麼去公園？ — 我騎腳踏車去那裡。",
    "vocabIndex": 1
  },
  {
    "q": "Q: How does your mom go to the market? — A: She rides her ______ there.【小型機車】",
    "options": [
      "scooter",
      "motorcycle",
      "truck",
      "sidewalk"
    ],
    "answer": 0,
    "cn": "你媽媽怎麼去市場？ — 她騎她的機車去那裡。",
    "vocabIndex": 2
  },
  {
    "q": "Q: How do your brothers go to work? — A: They go to work by ______.【機車】",
    "options": [
      "airplane",
      "motorcycle",
      "ship",
      "sidewalk"
    ],
    "answer": 1,
    "cn": "你哥哥們怎麼去上班？ — 他們騎機車去上班。",
    "vocabIndex": 3
  },
  {
    "q": "Q: How does your dad go to work? — A: He goes to work by ______.【車子】",
    "options": [
      "truck",
      "train",
      "boat",
      "car"
    ],
    "answer": 3,
    "cn": "你爸爸怎麼去上班？ — 他開車去上班。",
    "vocabIndex": 4
  },
  {
    "q": "Q: How do your parents go to the beach? — A: They ______ there in their new car.【駕駛；開車】",
    "options": [
      "drive",
      "arrive",
      "ride",
      "sail"
    ],
    "answer": 0,
    "cn": "你爸媽怎麼去海灘？ — 他們開新車去那裡。",
    "vocabIndex": 5
  },
  {
    "q": "Q: How do you go to school? — A: I go to school by ______.【公車】",
    "options": [
      "blocks",
      "truck",
      "bus",
      "bicycle"
    ],
    "answer": 2,
    "cn": "你怎麼上學？ — 我搭公車上學。",
    "vocabIndex": 6
  },
  {
    "q": "Q: How does Mr. Lee go to the hotel? — A: He takes a ______.【計程車】",
    "options": [
      "ship",
      "taxi",
      "airport",
      "train"
    ],
    "answer": 1,
    "cn": "李先生怎麼去旅館？ — 他搭計程車。",
    "vocabIndex": 7
  },
  {
    "q": "Q: How do Ben and his sister go to Tainan? — A: They go there by ______.【火車】",
    "options": [
      "car",
      "boat",
      "train",
      "airplane"
    ],
    "answer": 2,
    "cn": "班和他妹妹怎麼去臺南？ — 他們搭火車去那裡。",
    "vocabIndex": 8
  },
  {
    "q": "Q: How do you and Tom go to the zoo? — A: We ______ there.【搭捷運】",
    "options": [
      "a lot of",
      "cheer up",
      "a little",
      "take the MRT"
    ],
    "answer": 3,
    "cn": "你和湯姆怎麼去動物園？ — 我們搭捷運去那裡。",
    "vocabIndex": 9
  },
  {
    "q": "Q: Do you go to school by MRT? — A: Yes, I do. The MRT is very ______.【快的】",
    "options": [
      "fast",
      "slow",
      "quick",
      "favorite"
    ],
    "answer": 0,
    "cn": "你搭捷運上學嗎？ — 是的，我搭捷運。捷運很快。",
    "vocabIndex": 10
  },
  {
    "q": "Q: Does your dad take a taxi to work? — A: Yes, he does. It's a ______ way to get there.【迅速的】",
    "options": [
      "slow",
      "quick",
      "fast",
      "honest"
    ],
    "answer": 1,
    "cn": "你爸爸搭計程車上班嗎？ — 是的，他搭計程車。那是到那裡的快速方法。",
    "vocabIndex": 11
  },
  {
    "q": "Q: Does Lisa go to school by bus? — A: No, she doesn't. The bus is too ______. She rides her bike.【慢的】",
    "options": [
      "quick",
      "fast",
      "slow",
      "safe"
    ],
    "answer": 2,
    "cn": "麗莎搭公車上學嗎？ — 不，她沒有。公車太慢了，她騎腳踏車。",
    "vocabIndex": 12
  },
  {
    "q": "Q: How long does it take to go to Japan by ______? — A: It takes about three hours.【飛機】",
    "options": [
      "airplane",
      "sidewalk",
      "bicycle",
      "motorcycle"
    ],
    "answer": 0,
    "cn": "搭飛機去日本要多久？ — 大約要三個小時。",
    "vocabIndex": 13
  },
  {
    "q": "Q: How long does it take to ______ to Hong Kong? — A: It takes about two hours.【飛】",
    "options": [
      "ride",
      "fly",
      "turn",
      "sail"
    ],
    "answer": 1,
    "cn": "飛到香港要多久？ — 大約要兩個小時。",
    "vocabIndex": 14
  },
  {
    "q": "Q: How long does it take to go to the island by ______? — A: It takes about thirty minutes.【船】",
    "options": [
      "scooter",
      "car",
      "truck",
      "boat"
    ],
    "answer": 3,
    "cn": "搭船去那座島要多久？ — 大約要三十分鐘。",
    "vocabIndex": 15
  },
  {
    "q": "Q: How long does it take to go to Penghu? — A: It takes about four hours by ______.【船】",
    "options": [
      "sidewalk",
      "traffic",
      "ship",
      "bridge"
    ],
    "answer": 2,
    "cn": "去澎湖要多久？ — 搭船大約要四個小時。",
    "vocabIndex": 16
  },
  {
    "q": "Q: How long do your uncle and his friends stay on the boat? — A: They ______ on the sea for two hours.【航行】",
    "options": [
      "ride",
      "sail",
      "drive",
      "arrive"
    ],
    "answer": 1,
    "cn": "你叔叔和他的朋友們在船上待多久？ — 他們在海上航行兩個小時。",
    "vocabIndex": 17
  },
  {
    "q": "Q: When do we ______ at the station? — A: In ten minutes. It takes ten minutes from here.【到達】",
    "options": [
      "turn",
      "fly",
      "ride",
      "arrive"
    ],
    "answer": 3,
    "cn": "我們什麼時候到達車站？ — 十分鐘後，從這裡過去要十分鐘。",
    "vocabIndex": 18
  },
  {
    "q": "Q: How long does it take to go to school by car? — A: About forty minutes. There is a lot of ______ in the morning.【交通】",
    "options": [
      "traffic",
      "truck",
      "bicycle",
      "airport"
    ],
    "answer": 0,
    "cn": "開車上學要多久？ — 大約四十分鐘，早上車很多。",
    "vocabIndex": 19
  },
  {
    "q": "Q: How do I get to the bank? — A: Go straight and ______ left at the corner.【轉彎】",
    "options": [
      "fly",
      "ride",
      "drive",
      "turn"
    ],
    "answer": 3,
    "cn": "我要怎麼去銀行？ — 直走，然後在轉角左轉。",
    "vocabIndex": 20
  },
  {
    "q": "Q: How do I get to the post office? — A: Go straight for two ______. It's on your right.【街區】",
    "options": [
      "bus",
      "car",
      "blocks",
      "bicycle"
    ],
    "answer": 2,
    "cn": "我要怎麼去郵局？ — 直走兩個街區，它在你的右邊。",
    "vocabIndex": 21
  },
  {
    "q": "Q: How does Amy get to the park? — A: She ______ the street at the traffic light.【越過】",
    "options": [
      "lands",
      "crosses",
      "fly",
      "sail"
    ],
    "answer": 1,
    "cn": "艾美怎麼去公園？ — 她在紅綠燈處過馬路。",
    "vocabIndex": 22
  },
  {
    "q": "Q: How do we get to the museum? — A: Walk across the ______. The museum is next to the river.【橋】",
    "options": [
      "bridge",
      "airport",
      "ship",
      "traffic"
    ],
    "answer": 0,
    "cn": "我們要怎麼去博物館？ — 走過那座橋，博物館就在河邊。",
    "vocabIndex": 23
  },
  {
    "q": "Q: How does Ben get to school safely? — A: He walks on the ______, not on the road.【人行道】",
    "options": [
      "ship",
      "sidewalk",
      "bridge",
      "traffic"
    ],
    "answer": 1,
    "cn": "班怎麼安全地走到學校？ — 他走在人行道上，不走在馬路上。",
    "vocabIndex": 24
  },
  {
    "q": "Q: Where do we take the plane to Japan? — A: We take it at the ______ in Taoyuan.【機場】",
    "options": [
      "train",
      "sidewalk",
      "airport",
      "bicycle"
    ],
    "answer": 2,
    "cn": "我們在哪裡搭去日本的飛機？ — 我們在桃園的機場搭。",
    "vocabIndex": 25
  },
  {
    "q": "Q: Where does the plane from Tokyo stop? — A: It ______ at the airport in Taoyuan.【降落】",
    "options": [
      "lands",
      "crosses",
      "ride",
      "drive"
    ],
    "answer": 0,
    "cn": "從東京來的飛機停在哪裡？ — 它降落在桃園的機場。",
    "vocabIndex": 26
  },
  {
    "q": "Q: Where does Tom take the train? — A: He takes it at the train ______.【車站】",
    "options": [
      "airport",
      "traffic",
      "boat",
      "station"
    ],
    "answer": 3,
    "cn": "湯姆在哪裡搭火車？ — 他在火車站搭車。",
    "vocabIndex": 27
  },
  {
    "q": "Q: What do the workers drive? — A: They drive a big ______. It carries many boxes.【卡車】",
    "options": [
      "truck",
      "airport",
      "airplane",
      "motorcycle"
    ],
    "answer": 0,
    "cn": "那些工人開什麼車？ — 他們開一輛大卡車，它載著很多箱子。",
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "honest": {
    "pos": "adj.",
    "en_def": "always telling the truth",
    "cn_def": "誠實的"
  },
  "a lot of": {
    "pos": "phr.",
    "en_def": "a large number or amount of",
    "cn_def": "許多的"
  },
  "a little": {
    "pos": "phr.",
    "en_def": "a small amount of (something you cannot count)",
    "cn_def": "一點點（不可數）"
  },
  "sail": {
    "pos": "v.",
    "en_def": "to travel on water in a boat",
    "cn_def": "航行；駕船"
  },
  "bicycle": {
    "pos": "n.",
    "en_def": "a thing with two wheels that you ride by moving your legs",
    "cn_def": "腳踏車"
  },
  "ride": {
    "pos": "v.",
    "en_def": "to sit on a bike, a horse, or a scooter and make it go",
    "cn_def": "騎"
  },
  "scooter": {
    "pos": "n.",
    "en_def": "a small, light motorcycle",
    "cn_def": "小型機車"
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
  "drive": {
    "pos": "v.",
    "en_def": "to make a car, bus, or truck go where you want",
    "cn_def": "駕駛；開車"
  },
  "bus": {
    "pos": "n.",
    "en_def": "a big car that carries many people along the road",
    "cn_def": "公車"
  },
  "taxi": {
    "pos": "n.",
    "en_def": "a car with a driver that you pay to take you somewhere",
    "cn_def": "計程車"
  },
  "train": {
    "pos": "n.",
    "en_def": "a line of cars that moves along rails and carries people",
    "cn_def": "火車"
  },
  "take the mrt": {
    "pos": "phr.",
    "en_def": "to travel on the city's fast trains",
    "cn_def": "搭捷運"
  },
  "fast": {
    "pos": "adj.",
    "en_def": "moving or happening in a short time; not slow",
    "cn_def": "快的"
  },
  "quick": {
    "pos": "adj.",
    "en_def": "taking very little time",
    "cn_def": "迅速的"
  },
  "slow": {
    "pos": "adj.",
    "en_def": "not fast; taking a long time",
    "cn_def": "慢的"
  },
  "airplane": {
    "pos": "n.",
    "en_def": "a machine with wings that flies in the sky and carries people",
    "cn_def": "飛機"
  },
  "fly": {
    "pos": "v.",
    "en_def": "to move through the air",
    "cn_def": "飛"
  },
  "boat": {
    "pos": "n.",
    "en_def": "a small thing that carries people on water",
    "cn_def": "船"
  },
  "ship": {
    "pos": "n.",
    "en_def": "a big thing that carries people or things across the sea",
    "cn_def": "船"
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
  "turn": {
    "pos": "v.",
    "en_def": "to change the direction you are going",
    "cn_def": "轉彎"
  },
  "blocks": {
    "pos": "n.",
    "en_def": "the part of a street between two other streets",
    "cn_def": "街區"
  },
  "crosses": {
    "pos": "v.",
    "en_def": "to go from one side of a road or river to the other",
    "cn_def": "越過"
  },
  "bridge": {
    "pos": "n.",
    "en_def": "something built over a river or road so people can go across",
    "cn_def": "橋"
  },
  "sidewalk": {
    "pos": "n.",
    "en_def": "a path at the side of a street for people to walk on",
    "cn_def": "人行道"
  },
  "airport": {
    "pos": "n.",
    "en_def": "a place where planes take off and land",
    "cn_def": "機場"
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
  "truck": {
    "pos": "n.",
    "en_def": "a big car for carrying heavy things",
    "cn_def": "卡車"
  },
  "cheer up": {
    "pos": "phr.",
    "en_def": "to become happier; to stop feeling sad",
    "cn_def": "打起精神；振作"
  },
  "safe": {
    "pos": "adj.",
    "en_def": "not in danger",
    "cn_def": "安全的"
  },
  "favorite": {
    "pos": "adj.",
    "en_def": "liked the most",
    "cn_def": "最喜愛的"
  }
};

const EXTRA_GLOSSES = {};
