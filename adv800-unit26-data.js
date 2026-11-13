// Unit 26 Quiz Data: personal – potato
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U26 - personal – potato",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "personal",
    "pos": "adj.",
    "cn_def": "個人的，私人的",
    "en_def": "belonging to you; your own",
    "sentence": "This is my {{BLANK}} opinion.",
    "cn": "這是我的個人意見。"
  },
  {
    "word": "physics",
    "pos": "n.",
    "cn_def": "物理學",
    "en_def": "the study of heat, light, sound, and how things move",
    "sentence": "He is studying {{BLANK}}.",
    "cn": "他在學習物理。"
  },
  {
    "word": "pigeon",
    "pos": "n.",
    "cn_def": "鴿子",
    "en_def": "a gray bird that often lives in cities",
    "sentence": "The {{BLANK}} flew away.",
    "cn": "鴿子飛走了。"
  },
  {
    "word": "pile",
    "pos": "n.",
    "cn_def": "堆，堆積",
    "en_def": "many things lying one on top of another",
    "sentence": "There is a {{BLANK}} of books on the table.",
    "cn": "桌上有一堆書。"
  },
  {
    "word": "pillow",
    "pos": "n.",
    "cn_def": "枕頭",
    "en_def": "a soft thing that you put your head on in bed",
    "sentence": "She lay her head on the {{BLANK}}.",
    "cn": "她把頭放在枕頭上。"
  },
  {
    "word": "pineapple",
    "pos": "n.",
    "cn_def": "鳳梨，菠蘿",
    "en_def": "a big, sweet tropical fruit that is yellow inside and has a rough skin",
    "sentence": "She likes to eat fresh {{BLANK}}.",
    "cn": "她喜歡吃新鮮的鳳梨。"
  },
  {
    "word": "plain",
    "pos": "adj.",
    "cn_def": "樸素的，平凡的",
    "en_def": "simple, with no pattern or decoration",
    "sentence": "She wore a {{BLANK}} dress.",
    "cn": "她穿了一件樸素的連衣裙。"
  },
  {
    "word": "platform",
    "pos": "n.",
    "cn_def": "平台，月台",
    "en_def": "the place in a station where you get on and off trains",
    "sentence": "The train arrived at the {{BLANK}}.",
    "cn": "火車到達了月台。"
  },
  {
    "word": "pleasant",
    "pos": "adj.",
    "cn_def": "愉快的，令人愉快的",
    "en_def": "nice and enjoyable",
    "sentence": "They had a {{BLANK}} evening together.",
    "cn": "他們度過了一個愉快的晚上。"
  },
  {
    "word": "pleased",
    "pos": "adj.",
    "cn_def": "高興的，滿意的",
    "en_def": "happy about something",
    "sentence": "She was {{BLANK}} with the results.",
    "cn": "她對結果感到滿意。"
  },
  {
    "word": "plus",
    "pos": "prep.",
    "cn_def": "加上，此外",
    "en_def": "and also; added to",
    "sentence": "He bought a book {{BLANK}} a pen.",
    "cn": "他買了一本書加上一支筆。"
  },
  {
    "word": "poem",
    "pos": "n.",
    "cn_def": "詩",
    "en_def": "a piece of writing in short lines, often with words that rhyme",
    "sentence": "She wrote a beautiful {{BLANK}}.",
    "cn": "她寫了一首美麗的詩。"
  },
  {
    "word": "poison",
    "pos": "n.",
    "cn_def": "毒藥，毒素",
    "en_def": "something that can kill you or make you very sick if you eat or drink it",
    "sentence": "The mushrooms contain a deadly {{BLANK}}.",
    "cn": "這些蘑菇含有致命的毒素。"
  },
  {
    "word": "pollute",
    "pos": "v.",
    "cn_def": "污染",
    "en_def": "to make air, water, or land dirty",
    "sentence": "Factories {{BLANK}} the air with smoke.",
    "cn": "工廠用煙霧污染空氣。"
  },
  {
    "word": "pollution",
    "pos": "n.",
    "cn_def": "污染",
    "en_def": "dirty air, water, or land",
    "sentence": "The city is facing severe air {{BLANK}}.",
    "cn": "這個城市正面臨嚴重的空氣污染。"
  },
  {
    "word": "pop music",
    "pos": "n.",
    "cn_def": "流行音樂",
    "en_def": "modern music that many young people like",
    "sentence": "She loves listening to {{BLANK}}.",
    "cn": "她喜歡聽流行音樂。",
    "nblanks": 2
  },
  {
    "word": "population",
    "pos": "n.",
    "cn_def": "人口",
    "en_def": "the number of people who live in a place",
    "sentence": "The {{BLANK}} of the city is growing rapidly.",
    "cn": "這個城市的人口正在迅速增長。"
  },
  {
    "word": "position",
    "pos": "n.",
    "cn_def": "位置，職位",
    "en_def": "a job in a company",
    "sentence": "He applied for a management {{BLANK}}.",
    "cn": "他申請了一個管理職位。"
  },
  {
    "word": "positive",
    "pos": "adj.",
    "cn_def": "積極的，正面的",
    "en_def": "thinking about the good side of things",
    "sentence": "She has a {{BLANK}} outlook on life.",
    "cn": "她對生活持積極的態度。"
  },
  {
    "word": "potato",
    "pos": "n.",
    "cn_def": "馬鈴薯，土豆",
    "en_def": "a round brown or yellow vegetable that grows under the ground",
    "sentence": "She made a {{BLANK}} salad.",
    "cn": "她做了一份馬鈴薯沙拉。"
  }
];

const MCQS = [
  {
    "q": "Please don't read my diary. It is very ______.",
    "options": [
      "personal",
      "plain",
      "pleasant",
      "positive"
    ],
    "answer": 0,
    "cn": "這是我的個人意見。",
    "vocabIndex": 0
  },
  {
    "q": "In ______ class, we learn about light, sound, and how things move.",
    "options": [
      "pollution",
      "population",
      "physics",
      "poison"
    ],
    "answer": 2,
    "cn": "他在學習物理。",
    "vocabIndex": 1
  },
  {
    "q": "There are many ______ in the park. These gray birds eat bread from people's hands.",
    "options": [
      "pillows",
      "poems",
      "piles",
      "pigeons"
    ],
    "answer": 3,
    "cn": "鴿子飛走了。",
    "vocabIndex": 2
  },
  {
    "q": "There is a ______ of dirty clothes on the floor. Please put them in the washing machine.",
    "options": [
      "pillow",
      "pile",
      "poem",
      "potato"
    ],
    "answer": 1,
    "cn": "桌上有一堆書。",
    "vocabIndex": 3
  },
  {
    "q": "I can't sleep without a soft ______ under my head.",
    "options": [
      "pile",
      "poem",
      "platform",
      "pillow"
    ],
    "answer": 3,
    "cn": "她把頭放在枕頭上。",
    "vocabIndex": 4
  },
  {
    "q": "A ______ is a sweet yellow fruit with rough skin. Taiwan grows a lot of them.",
    "options": [
      "pineapple",
      "potato",
      "pillow",
      "pigeon"
    ],
    "answer": 0,
    "cn": "她喜歡吃新鮮的鳳梨。",
    "vocabIndex": 5
  },
  {
    "q": "She wore a ______ white shirt. It had no pictures or words on it.",
    "options": [
      "personal",
      "plain",
      "pleased",
      "positive"
    ],
    "answer": 1,
    "cn": "她穿了一件樸素的連衣裙。",
    "vocabIndex": 6
  },
  {
    "q": "The train to Kaohsiung leaves from ______ two. Please wait behind the yellow line.",
    "options": [
      "pillow",
      "poison",
      "platform",
      "position"
    ],
    "answer": 2,
    "cn": "火車到達了月台。",
    "vocabIndex": 7
  },
  {
    "q": "It was a ______ day. The weather was nice, and we enjoyed our picnic.",
    "options": [
      "pleased",
      "personal",
      "plain",
      "pleasant"
    ],
    "answer": 3,
    "cn": "他們度過了一個愉快的晚上。",
    "vocabIndex": 8
  },
  {
    "q": "The teacher was ______ with our work. She gave everyone a good grade.",
    "options": [
      "pleasant",
      "pleased",
      "plain",
      "personal"
    ],
    "answer": 1,
    "cn": "她對結果感到滿意。",
    "vocabIndex": 9
  },
  {
    "q": "Three ______ four is seven.",
    "options": [
      "plus",
      "minus",
      "against",
      "beyond"
    ],
    "answer": 0,
    "cn": "他買了一本書加上一支筆。",
    "vocabIndex": 10
  },
  {
    "q": "The student wrote a short ______ about love. It has only four lines.",
    "options": [
      "pile",
      "pillow",
      "poem",
      "potato"
    ],
    "answer": 2,
    "cn": "她寫了一首美麗的詩。",
    "vocabIndex": 11
  },
  {
    "q": "Don't eat that mushroom. It has ______ in it and can kill you.",
    "options": [
      "physics",
      "pollution",
      "position",
      "poison"
    ],
    "answer": 3,
    "cn": "這些蘑菇含有致命的毒素。",
    "vocabIndex": 12
  },
  {
    "q": "Cars and factories ______ the air. That is why the sky is gray.",
    "options": [
      "pardon",
      "pause",
      "pollute",
      "obey"
    ],
    "answer": 2,
    "cn": "工廠用煙霧污染空氣。",
    "vocabIndex": 13
  },
  {
    "q": "Air ______ is a big problem in this city. Many people wear masks outside.",
    "options": [
      "pollution",
      "population",
      "position",
      "physics"
    ],
    "answer": 0,
    "cn": "這個城市正面臨嚴重的空氣污染。",
    "vocabIndex": 14
  },
  {
    "q": "My sister loves ______. She listens to the newest songs every day.",
    "options": [
      "pollution",
      "pop music",
      "population",
      "physics"
    ],
    "answer": 1,
    "cn": "她喜歡聽流行音樂。",
    "vocabIndex": 15
  },
  {
    "q": "The ______ of Taiwan is about twenty-three million.",
    "options": [
      "population",
      "pollution",
      "position",
      "poison"
    ],
    "answer": 0,
    "cn": "這個城市的人口正在迅速增長。",
    "vocabIndex": 16
  },
  {
    "q": "He got a ______ as a manager at the bank. He starts his new job next month.",
    "options": [
      "pollution",
      "population",
      "poison",
      "position"
    ],
    "answer": 3,
    "cn": "他申請了一個管理職位。",
    "vocabIndex": 17
  },
  {
    "q": "Stay ______. Things will get better soon.",
    "options": [
      "personal",
      "plain",
      "positive",
      "pleased"
    ],
    "answer": 2,
    "cn": "她對生活持積極的態度。",
    "vocabIndex": 18
  },
  {
    "q": "French fries are made from ______.",
    "options": [
      "pineapples",
      "potatoes",
      "pillows",
      "poems"
    ],
    "answer": 1,
    "cn": "她做了一份馬鈴薯沙拉。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "personal": {
    "pos": "adj.",
    "en_def": "belonging to you; your own",
    "cn_def": "個人的，私人的"
  },
  "plain": {
    "pos": "adj.",
    "en_def": "simple, with no pattern or decoration",
    "cn_def": "樸素的，平凡的"
  },
  "pleasant": {
    "pos": "adj.",
    "en_def": "nice and enjoyable",
    "cn_def": "愉快的，令人愉快的"
  },
  "positive": {
    "pos": "adj.",
    "en_def": "thinking about the good side of things",
    "cn_def": "積極的，正面的"
  },
  "pollution": {
    "pos": "n.",
    "en_def": "dirty air, water, or land",
    "cn_def": "污染"
  },
  "population": {
    "pos": "n.",
    "en_def": "the number of people who live in a place",
    "cn_def": "人口"
  },
  "physics": {
    "pos": "n.",
    "en_def": "the study of heat, light, sound, and how things move",
    "cn_def": "物理學"
  },
  "poison": {
    "pos": "n.",
    "en_def": "something that can kill you or make you very sick if you eat or drink it",
    "cn_def": "毒藥，毒素"
  },
  "pillows": {
    "pos": "n.",
    "en_def": "a soft thing that you put your head on in bed",
    "cn_def": "枕頭"
  },
  "poems": {
    "pos": "n.",
    "en_def": "a piece of writing in short lines, often with words that rhyme",
    "cn_def": "詩"
  },
  "piles": {
    "pos": "n.",
    "en_def": "many things lying one on top of another",
    "cn_def": "堆，堆積"
  },
  "pigeons": {
    "pos": "n.",
    "en_def": "a gray bird that often lives in cities",
    "cn_def": "鴿子"
  },
  "pillow": {
    "pos": "n.",
    "en_def": "a soft thing that you put your head on in bed",
    "cn_def": "枕頭"
  },
  "pile": {
    "pos": "n.",
    "en_def": "many things lying one on top of another",
    "cn_def": "堆，堆積"
  },
  "poem": {
    "pos": "n.",
    "en_def": "a piece of writing in short lines, often with words that rhyme",
    "cn_def": "詩"
  },
  "potato": {
    "pos": "n.",
    "en_def": "a round brown or yellow vegetable that grows under the ground",
    "cn_def": "馬鈴薯，土豆"
  },
  "platform": {
    "pos": "n.",
    "en_def": "the place in a station where you get on and off trains",
    "cn_def": "平台，月台"
  },
  "pineapple": {
    "pos": "n.",
    "en_def": "a big, sweet tropical fruit that is yellow inside and has a rough skin",
    "cn_def": "鳳梨，菠蘿"
  },
  "pigeon": {
    "pos": "n.",
    "en_def": "a gray bird that often lives in cities",
    "cn_def": "鴿子"
  },
  "pleased": {
    "pos": "adj.",
    "en_def": "happy about something",
    "cn_def": "高興的，滿意的"
  },
  "position": {
    "pos": "n.",
    "en_def": "a job in a company",
    "cn_def": "位置，職位"
  },
  "plus": {
    "pos": "prep.",
    "en_def": "and also; added to",
    "cn_def": "加上，此外"
  },
  "minus": {
    "pos": "prep.",
    "en_def": "below zero; made smaller by a number",
    "cn_def": "減，負的"
  },
  "against": {
    "pos": "prep.",
    "en_def": "not agreeing with something",
    "cn_def": "反對，對抗"
  },
  "beyond": {
    "pos": "prep.",
    "en_def": "on the far side of something",
    "cn_def": "超過，在...之外"
  },
  "pardon": {
    "pos": "v.",
    "en_def": "to forgive someone",
    "cn_def": "原諒，寬恕"
  },
  "pause": {
    "pos": "v.",
    "en_def": "to stop for a short time",
    "cn_def": "暫停，中止"
  },
  "pollute": {
    "pos": "v.",
    "en_def": "to make air, water, or land dirty",
    "cn_def": "污染"
  },
  "obey": {
    "pos": "v.",
    "en_def": "to do what someone tells you to do",
    "cn_def": "服從，遵守"
  },
  "pop music": {
    "pos": "n.",
    "en_def": "modern music that many young people like",
    "cn_def": "流行音樂"
  },
  "pineapples": {
    "pos": "n.",
    "en_def": "a big, sweet tropical fruit that is yellow inside and has a rough skin",
    "cn_def": "鳳梨，菠蘿"
  },
  "potatoes": {
    "pos": "n.",
    "en_def": "a round brown or yellow vegetable that grows under the ground",
    "cn_def": "馬鈴薯，土豆"
  }
};

const EXTRA_GLOSSES = {};
