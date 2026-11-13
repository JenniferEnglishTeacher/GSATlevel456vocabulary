// Unit 23 Quiz Data: Weather & Nature 天氣與自然（第24區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U23 - Weather & Nature",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "weather",
    "pos": "n.",
    "cn_def": "天氣",
    "en_def": "",
    "sentence": "Q: How's the {{BLANK}} today? — A: It's nice. Let's go out and play.",
    "cn": "今天天氣如何？ — 天氣很好，我們出去玩吧。"
  },
  {
    "word": "sunny",
    "pos": "adj.",
    "cn_def": "晴朗的",
    "en_def": "",
    "sentence": "Q: How's the weather in Kaohsiung today? — A: It's {{BLANK}}. Let's go to the beach.",
    "cn": "高雄今天天氣如何？ — 天氣晴朗，我們去海邊吧。"
  },
  {
    "word": "clear",
    "pos": "adj.",
    "cn_def": "晴朗的；清澈的",
    "en_def": "",
    "sentence": "Q: How's the weather this morning? — A: It's {{BLANK}}. We can see Taipei 101 from here.",
    "cn": "今天早上天氣如何？ — 天氣晴朗，我們從這裡就看得到台北101。"
  },
  {
    "word": "cloudy",
    "pos": "adj.",
    "cn_def": "多雲的",
    "en_def": "",
    "sentence": "Q: How's the weather in Taichung? — A: It's {{BLANK}} and gray.",
    "cn": "台中天氣如何？ — 多雲、灰灰的。"
  },
  {
    "word": "rainy",
    "pos": "adj.",
    "cn_def": "下雨的",
    "en_def": "",
    "sentence": "Q: How's the weather today, Mom? — A: It's {{BLANK}}. Take your umbrella.",
    "cn": "媽，今天天氣如何？ — 在下雨，帶你的雨傘。"
  },
  {
    "word": "windy",
    "pos": "adj.",
    "cn_def": "多風的",
    "en_def": "",
    "sentence": "Q: How's the weather at the beach? — A: It's {{BLANK}}. Let's fly a kite.",
    "cn": "海邊天氣如何？ — 風很大，我們來放風箏吧。"
  },
  {
    "word": "snowy",
    "pos": "adj.",
    "cn_def": "下雪的",
    "en_def": "",
    "sentence": "Q: How's the weather in Japan today? — A: It's {{BLANK}}. The mountains are all white.",
    "cn": "日本今天天氣如何？ — 在下雪，山都變成白色的了。"
  },
  {
    "word": "hot",
    "pos": "adj.",
    "cn_def": "熱的",
    "en_def": "",
    "sentence": "Q: What's the weather like in Taiwan in summer? — A: It's very {{BLANK}}. We often go swimming.",
    "cn": "台灣夏天的天氣怎麼樣？ — 非常熱，我們常常去游泳。"
  },
  {
    "word": "warm",
    "pos": "adj.",
    "cn_def": "溫暖的",
    "en_def": "",
    "sentence": "Q: What's the weather like in spring? — A: It's {{BLANK}}. Many flowers come out.",
    "cn": "春天的天氣怎麼樣？ — 很溫暖，很多花都開了。"
  },
  {
    "word": "cool",
    "pos": "adj.",
    "cn_def": "涼爽的",
    "en_def": "",
    "sentence": "Q: What's the weather like in fall? — A: It's {{BLANK}}. It's a good time for hiking.",
    "cn": "秋天的天氣怎麼樣？ — 很涼爽，是健行的好時節。"
  },
  {
    "word": "cold",
    "pos": "adj.",
    "cn_def": "寒冷的",
    "en_def": "",
    "sentence": "Q: What's the weather like here in winter? — A: It's {{BLANK}}. Wear your coat.",
    "cn": "這裡冬天的天氣怎麼樣？ — 很冷，穿上你的大衣。"
  },
  {
    "word": "dry",
    "pos": "adj.",
    "cn_def": "乾的；乾燥的",
    "en_def": "",
    "sentence": "Q: What's the weather like in Tainan in fall? — A: It's {{BLANK}}. There isn't much water in the river.",
    "cn": "台南秋天的天氣怎麼樣？ — 很乾燥，河裡沒什麼水。"
  },
  {
    "word": "wet",
    "pos": "adj.",
    "cn_def": "濕的",
    "en_def": "",
    "sentence": "Q: What's the weather like in Keelung in winter? — A: It's very {{BLANK}}. People always carry umbrellas.",
    "cn": "基隆冬天的天氣怎麼樣？ — 很潮濕，人們總是帶著雨傘。"
  },
  {
    "word": "rain",
    "pos": "v.",
    "cn_def": "下雨",
    "en_def": "",
    "sentence": "Q: Does it often {{BLANK}} in Keelung? — A: Yes, it does. Take an umbrella with you.",
    "cn": "基隆常常下雨嗎？ — 是的，常常下。帶把傘吧。"
  },
  {
    "word": "shower",
    "pos": "n.",
    "cn_def": "陣雨；淋浴",
    "en_def": "",
    "sentence": "Q: Is it going to rain today? — A: Yes, it is. There's going to be a {{BLANK}} this afternoon.",
    "cn": "今天會下雨嗎？ — 會，今天下午會有一場陣雨。"
  },
  {
    "word": "cloud (clouds)",
    "pos": "n.",
    "cn_def": "雲",
    "en_def": "",
    "sentence": "Q: Is it going to rain? — A: Maybe. Look at those dark {{BLANK}}.",
    "cn": "會下雨嗎？ — 也許會，看那些烏雲。"
  },
  {
    "word": "rainbow",
    "pos": "n.",
    "cn_def": "彩虹",
    "en_def": "",
    "sentence": "Q: Is it going to rain again? — A: No, it isn't. Look! There is a {{BLANK}} over the mountain.",
    "cn": "又要下雨了嗎？ — 不會。看！山上有一道彩虹。"
  },
  {
    "word": "snow",
    "pos": "v.",
    "cn_def": "下雪",
    "en_def": "",
    "sentence": "Q: Does it {{BLANK}} in Taipei in winter? — A: No, it doesn't. But it sometimes does on high mountains.",
    "cn": "台北冬天會下雪嗎？ — 不會，但是高山上有時候會。"
  },
  {
    "word": "wind",
    "pos": "n.",
    "cn_def": "風",
    "en_def": "",
    "sentence": "Q: Do we need to close the windows? — A: Yes, we do. The {{BLANK}} is very strong.",
    "cn": "我們需要關窗戶嗎？ — 需要，風很強。"
  },
  {
    "word": "blow",
    "pos": "v.",
    "cn_def": "吹",
    "en_def": "",
    "sentence": "Q: Does the wind {{BLANK}} hard here in winter? — A: Yes, it does. Wear your coat.",
    "cn": "這裡冬天風吹得很強嗎？ — 是的，穿上你的大衣。"
  },
  {
    "word": "typhoon",
    "pos": "n.",
    "cn_def": "颱風",
    "en_def": "",
    "sentence": "Q: Is a {{BLANK}} going to come tomorrow? — A: Yes, it is. There is no school tomorrow.",
    "cn": "明天颱風要來嗎？ — 是的，明天停課。"
  },
  {
    "word": "earthquake",
    "pos": "n.",
    "cn_def": "地震",
    "en_def": "",
    "sentence": "Q: Is it an {{BLANK}}? The house is shaking! — A: Yes, it is! Get under the table.",
    "cn": "是地震嗎？房子在搖！ — 是的！躲到桌子底下。"
  },
  {
    "word": "sun",
    "pos": "n.",
    "cn_def": "太陽",
    "en_def": "",
    "sentence": "Q: Where does the {{BLANK}} come up? — A: It comes up in the east.",
    "cn": "太陽從哪裡升起？ — 它從東方升起。"
  },
  {
    "word": "shine (shines)",
    "pos": "v.",
    "cn_def": "照耀",
    "en_def": "",
    "sentence": "Q: What does the sun do in the day? — A: It {{BLANK}} and gives us light.",
    "cn": "太陽白天做什麼？ — 它照耀著，給我們光。"
  },
  {
    "word": "moon",
    "pos": "n.",
    "cn_def": "月亮",
    "en_def": "",
    "sentence": "Q: When do you see the {{BLANK}}? — A: I see it at night. Sometimes it's round.",
    "cn": "你什麼時候看得到月亮？ — 我在晚上看到它，它有時候是圓的。"
  },
  {
    "word": "star (stars)",
    "pos": "n.",
    "cn_def": "星星",
    "en_def": "",
    "sentence": "Q: What do you see in the sky at night? — A: I see many bright {{BLANK}}.",
    "cn": "你晚上在天空看到什麼？ — 我看到很多明亮的星星。"
  },
  {
    "word": "sky",
    "pos": "n.",
    "cn_def": "天空",
    "en_def": "",
    "sentence": "Q: Where do birds fly? — A: They fly in the {{BLANK}}.",
    "cn": "鳥在哪裡飛？ — 牠們在天空飛。"
  },
  {
    "word": "earth",
    "pos": "n.",
    "cn_def": "地球",
    "en_def": "",
    "sentence": "Q: Where do we live? — A: We live on the {{BLANK}}. It is round.",
    "cn": "我們住在哪裡？ — 我們住在地球上，它是圓的。"
  },
  {
    "word": "air",
    "pos": "n.",
    "cn_def": "空氣",
    "en_def": "",
    "sentence": "Q: What do people and animals need? — A: They need {{BLANK}}, water and food.",
    "cn": "人和動物需要什麼？ — 他們需要空氣、水和食物。"
  },
  {
    "word": "plant (plants)",
    "pos": "n.",
    "cn_def": "植物",
    "en_def": "",
    "sentence": "Q: What do {{BLANK}} need? — A: They need water and light.",
    "cn": "植物需要什麼？ — 它們需要水和光。"
  },
  {
    "word": "nature",
    "pos": "n.",
    "cn_def": "自然；大自然",
    "en_def": "",
    "sentence": "Q: Does your father love {{BLANK}}? — A: Yes, he does. He often goes to the mountains.",
    "cn": "你爸爸熱愛大自然嗎？ — 是的，他常常去山上。"
  }
];

const MCQS = [
  {
    "q": "Q: How's the ______ today? — A: It's nice. Let's go out and play.【天氣】",
    "options": [
      "weather",
      "nature",
      "moon",
      "rainbow"
    ],
    "answer": 0,
    "cn": "今天天氣如何？ — 天氣很好，我們出去玩吧。",
    "vocabIndex": 0
  },
  {
    "q": "Q: How's the weather in Kaohsiung today? — A: It's ______. Let's go to the beach.【晴朗的】",
    "options": [
      "windy",
      "sunny",
      "cool",
      "warm"
    ],
    "answer": 1,
    "cn": "高雄今天天氣如何？ — 天氣晴朗，我們去海邊吧。",
    "vocabIndex": 1
  },
  {
    "q": "Q: How's the weather this morning? — A: It's ______. We can see Taipei 101 from here.【晴朗的；清澈的】",
    "options": [
      "rainy",
      "warm",
      "clear",
      "sunny"
    ],
    "answer": 2,
    "cn": "今天早上天氣如何？ — 天氣晴朗，我們從這裡就看得到台北101。",
    "vocabIndex": 2
  },
  {
    "q": "Q: How's the weather in Taichung? — A: It's ______ and gray.【多雲的】",
    "options": [
      "cold",
      "windy",
      "wet",
      "cloudy"
    ],
    "answer": 3,
    "cn": "台中天氣如何？ — 多雲、灰灰的。",
    "vocabIndex": 3
  },
  {
    "q": "Q: How's the weather today, Mom? — A: It's ______. Take your umbrella.【下雨的】",
    "options": [
      "snowy",
      "hot",
      "rainy",
      "clear"
    ],
    "answer": 2,
    "cn": "媽，今天天氣如何？ — 在下雨，帶你的雨傘。",
    "vocabIndex": 4
  },
  {
    "q": "Q: How's the weather at the beach? — A: It's ______. Let's fly a kite.【多風的】",
    "options": [
      "windy",
      "cloudy",
      "rainy",
      "dry"
    ],
    "answer": 0,
    "cn": "海邊天氣如何？ — 風很大，我們來放風箏吧。",
    "vocabIndex": 5
  },
  {
    "q": "Q: How's the weather in Japan today? — A: It's ______. The mountains are all white.【下雪的】",
    "options": [
      "sunny",
      "cool",
      "cloudy",
      "snowy"
    ],
    "answer": 3,
    "cn": "日本今天天氣如何？ — 在下雪，山都變成白色的了。",
    "vocabIndex": 6
  },
  {
    "q": "Q: What's the weather like in Taiwan in summer? — A: It's very ______. We often go swimming.【熱的】",
    "options": [
      "wet",
      "hot",
      "sunny",
      "warm"
    ],
    "answer": 1,
    "cn": "台灣夏天的天氣怎麼樣？ — 非常熱，我們常常去游泳。",
    "vocabIndex": 7
  },
  {
    "q": "Q: What's the weather like in spring? — A: It's ______. Many flowers come out.【溫暖的】",
    "options": [
      "warm",
      "dry",
      "wet",
      "cloudy"
    ],
    "answer": 0,
    "cn": "春天的天氣怎麼樣？ — 很溫暖，很多花都開了。",
    "vocabIndex": 8
  },
  {
    "q": "Q: What's the weather like in fall? — A: It's ______. It's a good time for hiking.【涼爽的】",
    "options": [
      "windy",
      "cool",
      "clear",
      "sunny"
    ],
    "answer": 1,
    "cn": "秋天的天氣怎麼樣？ — 很涼爽，是健行的好時節。",
    "vocabIndex": 9
  },
  {
    "q": "Q: What's the weather like here in winter? — A: It's ______. Wear your coat.【寒冷的】",
    "options": [
      "warm",
      "snowy",
      "wet",
      "cold"
    ],
    "answer": 3,
    "cn": "這裡冬天的天氣怎麼樣？ — 很冷，穿上你的大衣。",
    "vocabIndex": 10
  },
  {
    "q": "Q: What's the weather like in Tainan in fall? — A: It's ______. There isn't much water in the river.【乾的；乾燥的】",
    "options": [
      "windy",
      "sunny",
      "dry",
      "rainy"
    ],
    "answer": 2,
    "cn": "台南秋天的天氣怎麼樣？ — 很乾燥，河裡沒什麼水。",
    "vocabIndex": 11
  },
  {
    "q": "Q: What's the weather like in Keelung in winter? — A: It's very ______. People always carry umbrellas.【濕的】",
    "options": [
      "warm",
      "clear",
      "cool",
      "wet"
    ],
    "answer": 3,
    "cn": "基隆冬天的天氣怎麼樣？ — 很潮濕，人們總是帶著雨傘。",
    "vocabIndex": 12
  },
  {
    "q": "Q: Does it often ______ in Keelung? — A: Yes, it does. Take an umbrella with you.【下雨】",
    "options": [
      "snow",
      "blow",
      "rain",
      "shines"
    ],
    "answer": 2,
    "cn": "基隆常常下雨嗎？ — 是的，常常下。帶把傘吧。",
    "vocabIndex": 13
  },
  {
    "q": "Q: Is it going to rain today? — A: Yes, it is. There's going to be a ______ this afternoon.【陣雨；淋浴】",
    "options": [
      "shower",
      "sky",
      "air",
      "earthquake"
    ],
    "answer": 0,
    "cn": "今天會下雨嗎？ — 會，今天下午會有一場陣雨。",
    "vocabIndex": 14
  },
  {
    "q": "Q: Is it going to rain? — A: Maybe. Look at those dark ______.【雲】",
    "options": [
      "stars",
      "clouds",
      "plants",
      "earth"
    ],
    "answer": 1,
    "cn": "會下雨嗎？ — 也許會，看那些烏雲。",
    "vocabIndex": 15
  },
  {
    "q": "Q: Is it going to rain again? — A: No, it isn't. Look! There is a ______ over the mountain.【彩虹】",
    "options": [
      "moon",
      "typhoon",
      "rainbow",
      "nature"
    ],
    "answer": 2,
    "cn": "又要下雨了嗎？ — 不會。看！山上有一道彩虹。",
    "vocabIndex": 16
  },
  {
    "q": "Q: Does it ______ in Taipei in winter? — A: No, it doesn't. But it sometimes does on high mountains.【下雪】",
    "options": [
      "blow",
      "rain",
      "shines",
      "snow"
    ],
    "answer": 3,
    "cn": "台北冬天會下雪嗎？ — 不會，但是高山上有時候會。",
    "vocabIndex": 17
  },
  {
    "q": "Q: Do we need to close the windows? — A: Yes, we do. The ______ is very strong.【風】",
    "options": [
      "wind",
      "sky",
      "typhoon",
      "shower"
    ],
    "answer": 0,
    "cn": "我們需要關窗戶嗎？ — 需要，風很強。",
    "vocabIndex": 18
  },
  {
    "q": "Q: Does the wind ______ hard here in winter? — A: Yes, it does. Wear your coat.【吹】",
    "options": [
      "snow",
      "blow",
      "rain",
      "shines"
    ],
    "answer": 1,
    "cn": "這裡冬天風吹得很強嗎？ — 是的，穿上你的大衣。",
    "vocabIndex": 19
  },
  {
    "q": "Q: Is a ______ going to come tomorrow? — A: Yes, it is. There is no school tomorrow.【颱風】",
    "options": [
      "earth",
      "air",
      "typhoon",
      "earthquake"
    ],
    "answer": 2,
    "cn": "明天颱風要來嗎？ — 是的，明天停課。",
    "vocabIndex": 20
  },
  {
    "q": "Q: Is it an ______? The house is shaking! — A: Yes, it is! Get under the table.【地震】",
    "options": [
      "shower",
      "weather",
      "moon",
      "earthquake"
    ],
    "answer": 3,
    "cn": "是地震嗎？房子在搖！ — 是的！躲到桌子底下。",
    "vocabIndex": 21
  },
  {
    "q": "Q: Where does the ______ come up? — A: It comes up in the east.【太陽】",
    "options": [
      "sun",
      "typhoon",
      "air",
      "rainbow"
    ],
    "answer": 0,
    "cn": "太陽從哪裡升起？ — 它從東方升起。",
    "vocabIndex": 22
  },
  {
    "q": "Q: What does the sun do in the day? — A: It ______ and gives us light.【照耀】",
    "options": [
      "blow",
      "shines",
      "rain",
      "snow"
    ],
    "answer": 1,
    "cn": "太陽白天做什麼？ — 它照耀著，給我們光。",
    "vocabIndex": 23
  },
  {
    "q": "Q: When do you see the ______? — A: I see it at night. Sometimes it's round.【月亮】",
    "options": [
      "rainbow",
      "air",
      "moon",
      "earthquake"
    ],
    "answer": 2,
    "cn": "你什麼時候看得到月亮？ — 我在晚上看到它，它有時候是圓的。",
    "vocabIndex": 24
  },
  {
    "q": "Q: What do you see in the sky at night? — A: I see many bright ______.【星星】",
    "options": [
      "clouds",
      "stars",
      "plants",
      "typhoon"
    ],
    "answer": 1,
    "cn": "你晚上在天空看到什麼？ — 我看到很多明亮的星星。",
    "vocabIndex": 25
  },
  {
    "q": "Q: Where do birds fly? — A: They fly in the ______.【天空】",
    "options": [
      "sky",
      "rainbow",
      "earthquake",
      "wind"
    ],
    "answer": 0,
    "cn": "鳥在哪裡飛？ — 牠們在天空飛。",
    "vocabIndex": 26
  },
  {
    "q": "Q: Where do we live? — A: We live on the ______. It is round.【地球】",
    "options": [
      "moon",
      "wind",
      "earthquake",
      "earth"
    ],
    "answer": 3,
    "cn": "我們住在哪裡？ — 我們住在地球上，它是圓的。",
    "vocabIndex": 27
  },
  {
    "q": "Q: What do people and animals need? — A: They need ______, water and food.【空氣】",
    "options": [
      "air",
      "nature",
      "moon",
      "earthquake"
    ],
    "answer": 0,
    "cn": "人和動物需要什麼？ — 他們需要空氣、水和食物。",
    "vocabIndex": 28
  },
  {
    "q": "Q: What do ______ need? — A: They need water and light.【植物】",
    "options": [
      "stars",
      "clouds",
      "plants",
      "weather"
    ],
    "answer": 2,
    "cn": "植物需要什麼？ — 它們需要水和光。",
    "vocabIndex": 29
  },
  {
    "q": "Q: Does your father love ______? — A: Yes, he does. He often goes to the mountains.【自然；大自然】",
    "options": [
      "shower",
      "nature",
      "moon",
      "sun"
    ],
    "answer": 1,
    "cn": "你爸爸熱愛大自然嗎？ — 是的，他常常去山上。",
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "cool": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "涼爽的"
  },
  "cold": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "感冒"
  },
  "hot": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "熱的；燙的；辣的"
  },
  "weather": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "天氣"
  },
  "sunny": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "晴朗的"
  },
  "clear": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "晴朗的；清澈的"
  },
  "cloudy": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "多雲的"
  },
  "rainy": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "下雨的"
  },
  "windy": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "多風的"
  },
  "snowy": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "下雪的"
  },
  "warm": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "溫暖的"
  },
  "dry": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "乾的；乾燥的"
  },
  "wet": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "濕的"
  },
  "rain": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "下雨"
  },
  "shower": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "陣雨；淋浴"
  },
  "clouds": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "雲"
  },
  "rainbow": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "彩虹"
  },
  "snow": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "下雪"
  },
  "wind": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "風"
  },
  "blow": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "吹"
  },
  "typhoon": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "颱風"
  },
  "earthquake": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "地震"
  },
  "sun": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "太陽"
  },
  "shines": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "照耀"
  },
  "moon": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "月亮"
  },
  "stars": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "星星"
  },
  "sky": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "天空"
  },
  "earth": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "地球"
  },
  "air": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "空氣"
  },
  "plants": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "植物"
  },
  "nature": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "自然；大自然"
  }
};

const EXTRA_GLOSSES = {};
