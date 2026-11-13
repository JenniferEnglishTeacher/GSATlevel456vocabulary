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
    "en_def": "how hot, cold, wet, or dry it is outside",
    "sentence": "Q: How's the {{BLANK}} today? — A: It's nice. Let's go out and play.",
    "cn": "今天天氣如何？ — 天氣很好，我們出去玩吧。"
  },
  {
    "word": "sunny",
    "pos": "adj.",
    "cn_def": "晴朗的",
    "en_def": "bright with a lot of sun",
    "sentence": "Q: How's the weather in Kaohsiung today? — A: It's {{BLANK}}. Let's go to the beach.",
    "cn": "高雄今天天氣如何？ — 天氣晴朗，我們去海邊吧。"
  },
  {
    "word": "clear",
    "pos": "adj.",
    "cn_def": "晴朗的；清澈的",
    "en_def": "with no clouds; easy to see through",
    "sentence": "Q: How's the weather this morning? — A: It's {{BLANK}}. We can see Taipei 101 from here.",
    "cn": "今天早上天氣如何？ — 天氣晴朗，我們從這裡就看得到台北101。"
  },
  {
    "word": "cloudy",
    "pos": "adj.",
    "cn_def": "多雲的",
    "en_def": "with many clouds in the sky",
    "sentence": "Q: How's the weather in Taichung? — A: It's {{BLANK}} and gray.",
    "cn": "台中天氣如何？ — 多雲、灰灰的。"
  },
  {
    "word": "rainy",
    "pos": "adj.",
    "cn_def": "下雨的",
    "en_def": "with a lot of rain",
    "sentence": "Q: How's the weather today, Mom? — A: It's {{BLANK}}. Take your umbrella.",
    "cn": "媽，今天天氣如何？ — 在下雨，帶你的雨傘。"
  },
  {
    "word": "windy",
    "pos": "adj.",
    "cn_def": "多風的",
    "en_def": "with a lot of wind",
    "sentence": "Q: How's the weather at the beach? — A: It's {{BLANK}}. Let's fly a kite.",
    "cn": "海邊天氣如何？ — 風很大，我們來放風箏吧。"
  },
  {
    "word": "snowy",
    "pos": "adj.",
    "cn_def": "下雪的",
    "en_def": "with a lot of snow",
    "sentence": "Q: How's the weather in Japan today? — A: It's {{BLANK}}. The mountains are all white.",
    "cn": "日本今天天氣如何？ — 在下雪，山都變成白色的了。"
  },
  {
    "word": "hot",
    "pos": "adj.",
    "cn_def": "熱的",
    "en_def": "having a high temperature; not cold",
    "sentence": "Q: What's the weather like in Taiwan in summer? — A: It's very {{BLANK}}. We often go swimming.",
    "cn": "台灣夏天的天氣怎麼樣？ — 非常熱，我們常常去游泳。"
  },
  {
    "word": "warm",
    "pos": "adj.",
    "cn_def": "溫暖的",
    "en_def": "a little hot, in a nice way",
    "sentence": "Q: What's the weather like in spring? — A: It's {{BLANK}}. Many flowers come out.",
    "cn": "春天的天氣怎麼樣？ — 很溫暖，很多花都開了。"
  },
  {
    "word": "cool",
    "pos": "adj.",
    "cn_def": "涼爽的",
    "en_def": "a little cold, in a nice way",
    "sentence": "Q: What's the weather like in fall? — A: It's {{BLANK}}. It's a good time for hiking.",
    "cn": "秋天的天氣怎麼樣？ — 很涼爽，是健行的好時節。"
  },
  {
    "word": "cold",
    "pos": "adj.",
    "cn_def": "寒冷的",
    "en_def": "having a low temperature; not hot",
    "sentence": "Q: What's the weather like here in winter? — A: It's {{BLANK}}. Wear your coat.",
    "cn": "這裡冬天的天氣怎麼樣？ — 很冷，穿上你的大衣。"
  },
  {
    "word": "dry",
    "pos": "adj.",
    "cn_def": "乾的；乾燥的",
    "en_def": "with no water or rain; not wet",
    "sentence": "Q: What's the weather like in Tainan in fall? — A: It's {{BLANK}}. There isn't much water in the river.",
    "cn": "台南秋天的天氣怎麼樣？ — 很乾燥，河裡沒什麼水。"
  },
  {
    "word": "wet",
    "pos": "adj.",
    "cn_def": "濕的",
    "en_def": "covered with water; not dry",
    "sentence": "Q: What's the weather like in Keelung in winter? — A: It's very {{BLANK}}. People always carry umbrellas.",
    "cn": "基隆冬天的天氣怎麼樣？ — 很潮濕，人們總是帶著雨傘。"
  },
  {
    "word": "rain",
    "pos": "v.",
    "cn_def": "下雨",
    "en_def": "when water falls from the clouds",
    "sentence": "Q: Does it often {{BLANK}} in Keelung? — A: Yes, it does. Take an umbrella with you.",
    "cn": "基隆常常下雨嗎？ — 是的，常常下。帶把傘吧。"
  },
  {
    "word": "shower",
    "pos": "n.",
    "cn_def": "陣雨；淋浴",
    "en_def": "a short rain; washing your body under falling water",
    "sentence": "Q: Is it going to rain today? — A: Yes, it is. There's going to be a {{BLANK}} this afternoon.",
    "cn": "今天會下雨嗎？ — 會，今天下午會有一場陣雨。"
  },
  {
    "word": "cloud (clouds)",
    "pos": "n.",
    "cn_def": "雲",
    "en_def": "a white or gray thing in the sky that rain falls from",
    "sentence": "Q: Is it going to rain? — A: Maybe. Look at those dark {{BLANK}}.",
    "cn": "會下雨嗎？ — 也許會，看那些烏雲。"
  },
  {
    "word": "rainbow",
    "pos": "n.",
    "cn_def": "彩虹",
    "en_def": "a curve of many colors in the sky after rain",
    "sentence": "Q: Is it going to rain again? — A: No, it isn't. Look! There is a {{BLANK}} over the mountain.",
    "cn": "又要下雨了嗎？ — 不會。看！山上有一道彩虹。"
  },
  {
    "word": "snow",
    "pos": "v.",
    "cn_def": "下雪",
    "en_def": "when soft white ice falls from the sky",
    "sentence": "Q: Does it {{BLANK}} in Taipei in winter? — A: No, it doesn't. But it sometimes does on high mountains.",
    "cn": "台北冬天會下雪嗎？ — 不會，但是高山上有時候會。"
  },
  {
    "word": "wind",
    "pos": "n.",
    "cn_def": "風",
    "en_def": "air that moves outside",
    "sentence": "Q: Do we need to close the windows? — A: Yes, we do. The {{BLANK}} is very strong.",
    "cn": "我們需要關窗戶嗎？ — 需要，風很強。"
  },
  {
    "word": "blow",
    "pos": "v.",
    "cn_def": "吹",
    "en_def": "(of wind or air) to move; to send air out of your mouth",
    "sentence": "Q: Does the wind {{BLANK}} hard here in winter? — A: Yes, it does. Wear your coat.",
    "cn": "這裡冬天風吹得很強嗎？ — 是的，穿上你的大衣。"
  },
  {
    "word": "typhoon",
    "pos": "n.",
    "cn_def": "颱風",
    "en_def": "a very strong storm with heavy wind and rain",
    "sentence": "Q: Is a {{BLANK}} going to come tomorrow? — A: Yes, it is. There is no school tomorrow.",
    "cn": "明天颱風要來嗎？ — 是的，明天停課。"
  },
  {
    "word": "earthquake",
    "pos": "n.",
    "cn_def": "地震",
    "en_def": "a time when the ground shakes suddenly",
    "sentence": "Q: Is it an {{BLANK}}? The house is shaking! — A: Yes, it is! Get under the table.",
    "cn": "是地震嗎？房子在搖！ — 是的！躲到桌子底下。"
  },
  {
    "word": "sun",
    "pos": "n.",
    "cn_def": "太陽",
    "en_def": "the big bright thing in the sky that gives us light and heat in the day",
    "sentence": "Q: Where does the {{BLANK}} come up? — A: It comes up in the east.",
    "cn": "太陽從哪裡升起？ — 它從東方升起。"
  },
  {
    "word": "shine (shines)",
    "pos": "v.",
    "cn_def": "照耀",
    "en_def": "to give out bright light",
    "sentence": "Q: What does the sun do in the day? — A: It {{BLANK}} and gives us light.",
    "cn": "太陽白天做什麼？ — 它照耀著，給我們光。"
  },
  {
    "word": "moon",
    "pos": "n.",
    "cn_def": "月亮",
    "en_def": "the big round thing that shines in the sky at night",
    "sentence": "Q: When do you see the {{BLANK}}? — A: I see it at night. Sometimes it's round.",
    "cn": "你什麼時候看得到月亮？ — 我在晚上看到它，它有時候是圓的。"
  },
  {
    "word": "star (stars)",
    "pos": "n.",
    "cn_def": "星星",
    "en_def": "a small bright point of light in the sky at night",
    "sentence": "Q: What do you see in the sky at night? — A: I see many bright {{BLANK}}.",
    "cn": "你晚上在天空看到什麼？ — 我看到很多明亮的星星。"
  },
  {
    "word": "sky",
    "pos": "n.",
    "cn_def": "天空",
    "en_def": "the space above us where we see clouds, the sun, and stars",
    "sentence": "Q: Where do birds fly? — A: They fly in the {{BLANK}}.",
    "cn": "鳥在哪裡飛？ — 牠們在天空飛。"
  },
  {
    "word": "earth",
    "pos": "n.",
    "cn_def": "地球",
    "en_def": "the planet that we live on",
    "sentence": "Q: Where do we live? — A: We live on the {{BLANK}}. It is round.",
    "cn": "我們住在哪裡？ — 我們住在地球上，它是圓的。"
  },
  {
    "word": "air",
    "pos": "n.",
    "cn_def": "空氣",
    "en_def": "what we breathe; it is all around us",
    "sentence": "Q: What do people and animals need? — A: They need {{BLANK}}, water and food.",
    "cn": "人和動物需要什麼？ — 他們需要空氣、水和食物。"
  },
  {
    "word": "plant (plants)",
    "pos": "n.",
    "cn_def": "植物",
    "en_def": "a living thing with leaves and roots, like a tree or a flower",
    "sentence": "Q: What do {{BLANK}} need? — A: They need water and light.",
    "cn": "植物需要什麼？ — 它們需要水和光。"
  },
  {
    "word": "nature",
    "pos": "n.",
    "cn_def": "自然；大自然",
    "en_def": "trees, animals, rivers, and everything not made by people",
    "sentence": "Q: Does your father love {{BLANK}}? — A: Yes, he does. He often goes to the mountains.",
    "cn": "你爸爸熱愛大自然嗎？ — 是的，他常常去山上。"
  }
];

const MCQS = [
  {
    "q": "How is the ______ today? Is it sunny or rainy?",
    "options": [
      "nature",
      "earth",
      "weather",
      "moon"
    ],
    "answer": 2,
    "cn": "今天天氣如何？ — 天氣很好，我們出去玩吧。",
    "vocabIndex": 0
  },
  {
    "q": "It is ______ today. There are no clouds, and the sun is very bright, so wear a hat.",
    "options": [
      "rainy",
      "sunny",
      "snowy",
      "cloudy"
    ],
    "answer": 1,
    "cn": "高雄今天天氣如何？ — 天氣晴朗，我們去海邊吧。",
    "vocabIndex": 1
  },
  {
    "q": "The sky is ______ tonight. There are no clouds, so we can see many stars.",
    "options": [
      "clear",
      "cloudy",
      "rainy",
      "wet"
    ],
    "answer": 0,
    "cn": "今天早上天氣如何？ — 天氣晴朗，我們從這裡就看得到台北101。",
    "vocabIndex": 2
  },
  {
    "q": "It is ______ today. The sky is gray, and we can't see the sun, but it is not raining.",
    "options": [
      "sunny",
      "clear",
      "snowy",
      "cloudy"
    ],
    "answer": 3,
    "cn": "台中天氣如何？ — 多雲、灰灰的。",
    "vocabIndex": 3
  },
  {
    "q": "It is a ______ day. Take your umbrella, or you will get wet.",
    "options": [
      "sunny",
      "rainy",
      "dry",
      "clear"
    ],
    "answer": 1,
    "cn": "媽，今天天氣如何？ — 在下雨，帶你的雨傘。",
    "vocabIndex": 4
  },
  {
    "q": "It is very ______ today. My hat flew away, and the trees are moving a lot.",
    "options": [
      "windy",
      "sunny",
      "dry",
      "warm"
    ],
    "answer": 0,
    "cn": "海邊天氣如何？ — 風很大，我們來放風箏吧。",
    "vocabIndex": 5
  },
  {
    "q": "It is ______ in Hokkaido in winter. Everything is white, and children make snowmen.",
    "options": [
      "sunny",
      "hot",
      "dry",
      "snowy"
    ],
    "answer": 3,
    "cn": "日本今天天氣如何？ — 在下雪，山都變成白色的了。",
    "vocabIndex": 6
  },
  {
    "q": "It is very ______ in Taiwan in summer. It is often thirty-five degrees in the afternoon.",
    "options": [
      "cold",
      "cool",
      "hot",
      "snowy"
    ],
    "answer": 2,
    "cn": "台灣夏天的天氣怎麼樣？ — 非常熱，我們常常去游泳。",
    "vocabIndex": 7
  },
  {
    "q": "In spring, the weather gets ______. It is not cold anymore, but it is not hot yet.",
    "options": [
      "snowy",
      "cold",
      "windy",
      "warm"
    ],
    "answer": 3,
    "cn": "春天的天氣怎麼樣？ — 很溫暖，很多花都開了。",
    "vocabIndex": 8
  },
  {
    "q": "It is ______ in fall. It is not hot or cold, so a light jacket is enough.",
    "options": [
      "snowy",
      "cool",
      "hot",
      "wet"
    ],
    "answer": 1,
    "cn": "秋天的天氣怎麼樣？ — 很涼爽，是健行的好時節。",
    "vocabIndex": 9
  },
  {
    "q": "It is very ______ in winter. Wear a coat, a hat, and gloves when you go out.",
    "options": [
      "cold",
      "hot",
      "warm",
      "dry"
    ],
    "answer": 0,
    "cn": "這裡冬天的天氣怎麼樣？ — 很冷，穿上你的大衣。",
    "vocabIndex": 10
  },
  {
    "q": "It hasn't rained for three months, so the ground is very ______. The plants need water.",
    "options": [
      "wet",
      "cool",
      "dry",
      "cloudy"
    ],
    "answer": 2,
    "cn": "台南秋天的天氣怎麼樣？ — 很乾燥，河裡沒什麼水。",
    "vocabIndex": 11
  },
  {
    "q": "I forgot my umbrella, and it rained hard. My hair and clothes are all ______.",
    "options": [
      "wet",
      "dry",
      "warm",
      "sunny"
    ],
    "answer": 0,
    "cn": "基隆冬天的天氣怎麼樣？ — 很潮濕，人們總是帶著雨傘。",
    "vocabIndex": 12
  },
  {
    "q": "It will ______ this afternoon, so take an umbrella with you.",
    "options": [
      "shine",
      "blow",
      "rain",
      "plant"
    ],
    "answer": 2,
    "cn": "基隆常常下雨嗎？ — 是的，常常下。帶把傘吧。",
    "vocabIndex": 13
  },
  {
    "q": "There was a short ______ this afternoon. It rained for only ten minutes, and then the sun came out.",
    "options": [
      "rainbow",
      "shower",
      "earthquake",
      "star"
    ],
    "answer": 1,
    "cn": "今天會下雨嗎？ — 會，今天下午會有一場陣雨。",
    "vocabIndex": 14
  },
  {
    "q": "Look at those dark ______ in the sky. I think it is going to rain soon.",
    "options": [
      "stars",
      "plants",
      "rainbows",
      "clouds"
    ],
    "answer": 3,
    "cn": "會下雨嗎？ — 也許會，看那些烏雲。",
    "vocabIndex": 15
  },
  {
    "q": "After the rain, we saw a beautiful ______ in the sky. It had seven colors.",
    "options": [
      "rainbow",
      "typhoon",
      "earthquake",
      "wind"
    ],
    "answer": 0,
    "cn": "又要下雨了嗎？ — 不會。看！山上有一道彩虹。",
    "vocabIndex": 16
  },
  {
    "q": "It doesn't ______ in Taipei, but you can sometimes see white mountains in the middle of Taiwan in winter.",
    "options": [
      "shine",
      "snow",
      "blow",
      "plant"
    ],
    "answer": 1,
    "cn": "台北冬天會下雪嗎？ — 不會，但是高山上有時候會。",
    "vocabIndex": 17
  },
  {
    "q": "The ______ is very strong today. It blew my umbrella away.",
    "options": [
      "sun",
      "moon",
      "wind",
      "rainbow"
    ],
    "answer": 2,
    "cn": "我們需要關窗戶嗎？ — 需要，風很強。",
    "vocabIndex": 18
  },
  {
    "q": "A cold wind ______ from the north in winter. It makes my face and ears hurt.",
    "options": [
      "shines",
      "rains",
      "snows",
      "blows"
    ],
    "answer": 3,
    "cn": "這裡冬天風吹得很強嗎？ — 是的，穿上你的大衣。",
    "vocabIndex": 19
  },
  {
    "q": "A strong ______ is coming to Taiwan tomorrow. There will be heavy rain and wind, so there will be no school.",
    "options": [
      "rainbow",
      "star",
      "typhoon",
      "moon"
    ],
    "answer": 2,
    "cn": "明天颱風要來嗎？ — 是的，明天停課。",
    "vocabIndex": 20
  },
  {
    "q": "There was a big ______ last night. The ground shook, and some buildings fell down.",
    "options": [
      "typhoon",
      "rainbow",
      "shower",
      "earthquake"
    ],
    "answer": 3,
    "cn": "是地震嗎？房子在搖！ — 是的！躲到桌子底下。",
    "vocabIndex": 21
  },
  {
    "q": "The ______ comes up in the east every morning. It gives us light and heat.",
    "options": [
      "sun",
      "moon",
      "star",
      "wind"
    ],
    "answer": 0,
    "cn": "太陽從哪裡升起？ — 它從東方升起。",
    "vocabIndex": 22
  },
  {
    "q": "The sun ______ in the day, and the moon comes out at night.",
    "options": [
      "blows",
      "shines",
      "rains",
      "snows"
    ],
    "answer": 1,
    "cn": "太陽白天做什麼？ — 它照耀著，給我們光。",
    "vocabIndex": 23
  },
  {
    "q": "The ______ is round and bright tonight. We can see it best on Moon Festival night.",
    "options": [
      "sun",
      "wind",
      "moon",
      "cloud"
    ],
    "answer": 2,
    "cn": "你什麼時候看得到月亮？ — 我在晚上看到它，它有時候是圓的。",
    "vocabIndex": 24
  },
  {
    "q": "On a clear night, you can see thousands of ______ in the sky. They look like tiny lights.",
    "options": [
      "clouds",
      "rainbows",
      "plants",
      "stars"
    ],
    "answer": 3,
    "cn": "你晚上在天空看到什麼？ — 我看到很多明亮的星星。",
    "vocabIndex": 25
  },
  {
    "q": "Look up at the ______! It is blue, and there are no clouds today.",
    "options": [
      "sky",
      "earth",
      "air",
      "wind"
    ],
    "answer": 0,
    "cn": "鳥在哪裡飛？ — 牠們在天空飛。",
    "vocabIndex": 26
  },
  {
    "q": "We live on the ______. This planet goes around the sun once a year.",
    "options": [
      "moon",
      "earth",
      "sky",
      "star"
    ],
    "answer": 1,
    "cn": "我們住在哪裡？ — 我們住在地球上，它是圓的。",
    "vocabIndex": 27
  },
  {
    "q": "We can't see ______, but we need it to live. People and animals breathe it.",
    "options": [
      "sky",
      "sun",
      "cloud",
      "air"
    ],
    "answer": 3,
    "cn": "人和動物需要什麼？ — 他們需要空氣、水和食物。",
    "vocabIndex": 28
  },
  {
    "q": "______ need water and light to grow. Trees and flowers are two kinds of them.",
    "options": [
      "Stars",
      "plants",
      "Clouds",
      "Winds"
    ],
    "answer": 1,
    "cn": "植物需要什麼？ — 它們需要水和光。",
    "vocabIndex": 29
  },
  {
    "q": "I love ______. I enjoy looking at mountains, rivers, trees, and wild animals.",
    "options": [
      "weather",
      "air",
      "nature",
      "typhoon"
    ],
    "answer": 2,
    "cn": "你爸爸熱愛大自然嗎？ — 是的，他常常去山上。",
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "nature": {
    "pos": "n.",
    "en_def": "trees, animals, rivers, and everything not made by people",
    "cn_def": "自然；大自然"
  },
  "earth": {
    "pos": "n.",
    "en_def": "the planet that we live on",
    "cn_def": "地球"
  },
  "weather": {
    "pos": "n.",
    "en_def": "how hot, cold, wet, or dry it is outside",
    "cn_def": "天氣"
  },
  "moon": {
    "pos": "n.",
    "en_def": "the big round thing that shines in the sky at night",
    "cn_def": "月亮"
  },
  "rainy": {
    "pos": "adj.",
    "en_def": "with a lot of rain",
    "cn_def": "下雨的"
  },
  "sunny": {
    "pos": "adj.",
    "en_def": "bright with a lot of sun",
    "cn_def": "晴朗的"
  },
  "snowy": {
    "pos": "adj.",
    "en_def": "with a lot of snow",
    "cn_def": "下雪的"
  },
  "cloudy": {
    "pos": "adj.",
    "en_def": "with many clouds in the sky",
    "cn_def": "多雲的"
  },
  "clear": {
    "pos": "adj.",
    "en_def": "with no clouds; easy to see through",
    "cn_def": "晴朗的；清澈的"
  },
  "wet": {
    "pos": "adj.",
    "en_def": "covered with water; not dry",
    "cn_def": "濕的"
  },
  "dry": {
    "pos": "adj.",
    "en_def": "with no water or rain; not wet",
    "cn_def": "乾的；乾燥的"
  },
  "windy": {
    "pos": "adj.",
    "en_def": "with a lot of wind",
    "cn_def": "多風的"
  },
  "warm": {
    "pos": "adj.",
    "en_def": "a little hot, in a nice way",
    "cn_def": "溫暖的"
  },
  "hot": {
    "pos": "adj.",
    "en_def": "having a high temperature; not cold; also spicy",
    "cn_def": "熱的；燙的；辣的"
  },
  "cold": {
    "pos": "n.",
    "en_def": "a common sickness that makes you cough and sneeze",
    "cn_def": "感冒"
  },
  "cool": {
    "pos": "adj.",
    "en_def": "a little cold; also very good and fun",
    "cn_def": "涼爽的"
  },
  "shine": {
    "pos": "v.",
    "en_def": "to give out bright light",
    "cn_def": "照耀"
  },
  "blow": {
    "pos": "v.",
    "en_def": "(of wind or air) to move; to send air out of your mouth",
    "cn_def": "吹"
  },
  "rain": {
    "pos": "v.",
    "en_def": "when water falls from the clouds",
    "cn_def": "下雨"
  },
  "plant": {
    "pos": "n.",
    "en_def": "a living thing with leaves and roots, like a tree or a flower",
    "cn_def": "植物"
  },
  "rainbow": {
    "pos": "n.",
    "en_def": "a curve of many colors in the sky after rain",
    "cn_def": "彩虹"
  },
  "shower": {
    "pos": "n.",
    "en_def": "a short rain; washing your body under falling water",
    "cn_def": "陣雨；淋浴"
  },
  "earthquake": {
    "pos": "n.",
    "en_def": "a time when the ground shakes suddenly",
    "cn_def": "地震"
  },
  "star": {
    "pos": "n.",
    "en_def": "a small bright point of light in the sky at night",
    "cn_def": "星星"
  },
  "stars": {
    "pos": "n.",
    "en_def": "a small bright point of light in the sky at night",
    "cn_def": "星星"
  },
  "plants": {
    "pos": "n.",
    "en_def": "a living thing with leaves and roots, like a tree or a flower",
    "cn_def": "植物"
  },
  "rainbows": {
    "pos": "n.",
    "en_def": "a curve of many colors in the sky after rain",
    "cn_def": "彩虹"
  },
  "clouds": {
    "pos": "n.",
    "en_def": "a white or gray thing in the sky that rain falls from",
    "cn_def": "雲"
  },
  "typhoon": {
    "pos": "n.",
    "en_def": "a very strong storm with heavy wind and rain",
    "cn_def": "颱風"
  },
  "wind": {
    "pos": "n.",
    "en_def": "air that moves outside",
    "cn_def": "風"
  },
  "snow": {
    "pos": "v.",
    "en_def": "when soft white ice falls from the sky",
    "cn_def": "下雪"
  },
  "sun": {
    "pos": "n.",
    "en_def": "the big bright thing in the sky that gives us light and heat in the day",
    "cn_def": "太陽"
  },
  "shines": {
    "pos": "v.",
    "en_def": "to give out bright light",
    "cn_def": "照耀"
  },
  "rains": {
    "pos": "v.",
    "en_def": "when water falls from the clouds",
    "cn_def": "下雨"
  },
  "snows": {
    "pos": "v.",
    "en_def": "when soft white ice falls from the sky",
    "cn_def": "下雪"
  },
  "blows": {
    "pos": "v.",
    "en_def": "(of wind or air) to move; to send air out of your mouth",
    "cn_def": "吹"
  },
  "cloud": {
    "pos": "n.",
    "en_def": "a white or gray thing in the sky that rain falls from",
    "cn_def": "雲"
  },
  "sky": {
    "pos": "n.",
    "en_def": "the space above us where we see clouds, the sun, and stars",
    "cn_def": "天空"
  },
  "air": {
    "pos": "n.",
    "en_def": "what we breathe; it is all around us",
    "cn_def": "空氣"
  },
  "winds": {
    "pos": "n.",
    "en_def": "air that moves outside",
    "cn_def": "風"
  }
};

const EXTRA_GLOSSES = {};
