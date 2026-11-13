// Unit 3 Quiz Data: Parts of body 身體部位（第03區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U03 - Parts of body",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "head",
    "pos": "n.",
    "cn_def": "頭",
    "en_def": "",
    "sentence": "Q: What's wrong, Tom? — A: My {{BLANK}} hurts. I didn't sleep well.",
    "cn": "湯姆，怎麼了？ — 我的頭好痛，我沒睡好。"
  },
  {
    "word": "eye",
    "pos": "n.",
    "cn_def": "眼睛",
    "en_def": "",
    "sentence": "Q: What's wrong? — A: My {{BLANK}} hurt. I played games too long.",
    "cn": "怎麼了？ — 我的眼睛好痛，我玩遊戲玩太久了。"
  },
  {
    "word": "ear",
    "pos": "n.",
    "cn_def": "耳朵",
    "en_def": "",
    "sentence": "Q: What's wrong, Amy? — A: My {{BLANK}} hurts. The music is too loud.",
    "cn": "艾美，怎麼了？ — 我的耳朵好痛，音樂太大聲了。"
  },
  {
    "word": "tooth (teeth)",
    "pos": "n.",
    "cn_def": "牙齒",
    "en_def": "",
    "sentence": "Q: What's wrong? — A: My {{BLANK}} hurt. I ate too much candy.",
    "cn": "怎麼了？ — 我的牙齒好痛，我吃太多糖果了。"
  },
  {
    "word": "throat",
    "pos": "n.",
    "cn_def": "喉嚨",
    "en_def": "",
    "sentence": "Q: What's wrong with Lisa? — A: Her {{BLANK}} hurts. She can't sing today.",
    "cn": "麗莎怎麼了？ — 她的喉嚨痛，她今天不能唱歌。"
  },
  {
    "word": "neck",
    "pos": "n.",
    "cn_def": "脖子",
    "en_def": "",
    "sentence": "Q: What's wrong, Dad? — A: My {{BLANK}} hurts. I can't turn my head.",
    "cn": "爸爸，怎麼了？ — 我的脖子好痛，我不能轉頭。"
  },
  {
    "word": "shoulder",
    "pos": "n.",
    "cn_def": "肩膀",
    "en_def": "",
    "sentence": "Q: What's wrong? — A: My {{BLANK}} hurt. My schoolbag is too heavy.",
    "cn": "怎麼了？ — 我的肩膀好痛，我的書包太重了。"
  },
  {
    "word": "arm",
    "pos": "n.",
    "cn_def": "手臂",
    "en_def": "",
    "sentence": "Q: What's wrong with Ben? — A: His {{BLANK}} hurts. He fell off his bike.",
    "cn": "班怎麼了？ — 他的手臂受傷了，他從腳踏車上摔下來。"
  },
  {
    "word": "back",
    "pos": "n.",
    "cn_def": "背",
    "en_def": "",
    "sentence": "Q: What's wrong, Grandpa? — A: My {{BLANK}} hurts. I carried a big box.",
    "cn": "爺爺，怎麼了？ — 我的背好痛，我搬了一個大箱子。"
  },
  {
    "word": "stomach",
    "pos": "n.",
    "cn_def": "胃",
    "en_def": "",
    "sentence": "Q: What's wrong? — A: My {{BLANK}} hurts. I ate too much ice cream.",
    "cn": "怎麼了？ — 我的胃好痛，我吃了太多冰淇淋。"
  },
  {
    "word": "leg",
    "pos": "n.",
    "cn_def": "腿",
    "en_def": "",
    "sentence": "Q: What's wrong, Mom? — A: My {{BLANK}} hurt. I walked for three hours.",
    "cn": "媽媽，怎麼了？ — 我的腿好痛，我走了三個小時。"
  },
  {
    "word": "knee",
    "pos": "n.",
    "cn_def": "膝蓋",
    "en_def": "",
    "sentence": "Q: What's wrong with Tom? — A: His {{BLANK}} hurts. He fell down in the park.",
    "cn": "湯姆怎麼了？ — 他的膝蓋受傷了，他在公園跌倒了。"
  },
  {
    "word": "foot (feet)",
    "pos": "n.",
    "cn_def": "腳",
    "en_def": "",
    "sentence": "Q: What's wrong? — A: My {{BLANK}} hurt. My new shoes are too small.",
    "cn": "怎麼了？ — 我的腳好痛，我的新鞋太小了。"
  },
  {
    "word": "toe",
    "pos": "n.",
    "cn_def": "腳趾",
    "en_def": "",
    "sentence": "Q: What's wrong, Ken? — A: My {{BLANK}} hurts. I kicked the door.",
    "cn": "肯，怎麼了？ — 我的腳趾好痛，我踢到門了。"
  },
  {
    "word": "hand",
    "pos": "n.",
    "cn_def": "手",
    "en_def": "",
    "sentence": "Q: Mom, can I eat now? — A: Wash your {{BLANK}} first, or you will get sick.",
    "cn": "媽媽，我現在可以吃了嗎？ — 先洗手，不然你會生病。"
  },
  {
    "word": "finger",
    "pos": "n.",
    "cn_def": "手指",
    "en_def": "",
    "sentence": "Q: I just played with the dog. — A: Wash your {{BLANK}}, and they will be clean again.",
    "cn": "我剛剛跟狗玩。 — 洗洗你的手指，這樣它們就會再變乾淨。"
  },
  {
    "word": "nail",
    "pos": "n.",
    "cn_def": "指甲",
    "en_def": "",
    "sentence": "Q: Are my hands dirty? — A: Yes. Cut your {{BLANK}}, and your hands will look clean.",
    "cn": "我的手很髒嗎？ — 是的。剪剪指甲，這樣你的手看起來就會很乾淨。"
  },
  {
    "word": "face",
    "pos": "n.",
    "cn_def": "臉",
    "en_def": "",
    "sentence": "Q: I just got up. I am still tired. — A: Wash your {{BLANK}}, and you will wake up.",
    "cn": "我剛起床，還很睏。 — 洗把臉，這樣你就會清醒了。"
  },
  {
    "word": "hair",
    "pos": "n.",
    "cn_def": "頭髮",
    "en_def": "",
    "sentence": "Q: I played soccer all afternoon. — A: Wash your {{BLANK}} tonight, or it will smell bad.",
    "cn": "我踢了一整個下午的足球。 — 今晚要洗頭髮，不然會很臭。"
  },
  {
    "word": "mouth",
    "pos": "n.",
    "cn_def": "嘴巴",
    "en_def": "",
    "sentence": "Q: My hands are dirty. Can I eat this cookie? — A: Don't touch your {{BLANK}} with dirty hands, or you will get sick.",
    "cn": "我的手很髒，我可以吃這塊餅乾嗎？ — 不要用髒手碰嘴巴，不然你會生病。"
  },
  {
    "word": "lip",
    "pos": "n.",
    "cn_def": "嘴唇",
    "en_def": "",
    "sentence": "Q: Ouch! My mouth hurts. — A: Don't bite your {{BLANK}}, or they will hurt more.",
    "cn": "哎唷！我的嘴巴好痛。 — 不要咬嘴唇，不然會更痛。"
  },
  {
    "word": "nose",
    "pos": "n.",
    "cn_def": "鼻子",
    "en_def": "",
    "sentence": "Q: Mr. Lee, Ken is doing something bad! — A: Ken, don't pick your {{BLANK}} in class, or your classmates will laugh at you.",
    "cn": "李老師，肯在做壞事！ — 肯，上課不要挖鼻孔，不然同學會笑你。"
  },
  {
    "word": "body",
    "pos": "n.",
    "cn_def": "身體",
    "en_def": "",
    "sentence": "Q: I'm so tired after the game. — A: Wash your {{BLANK}}, and you will sleep well tonight.",
    "cn": "比賽完我好累。 — 洗個澡，這樣你今晚就會睡得好。"
  },
  {
    "word": "heart",
    "pos": "n.",
    "cn_def": "心",
    "en_def": "",
    "sentence": "Q: I just ran for ten minutes. — A: Touch your {{BLANK}}, and you can feel it beating fast.",
    "cn": "我剛剛跑了十分鐘。 — 摸摸你的心臟，這樣你就能感覺到它跳得很快。"
  }
];

const MCQS = [
  {
    "q": "Q: What's wrong, Tom? — A: My ______ hurts. I didn't sleep well.【頭】",
    "options": [
      "hair",
      "body",
      "head",
      "ear"
    ],
    "answer": 2,
    "cn": "湯姆，怎麼了？ — 我的頭好痛，我沒睡好。",
    "vocabIndex": 0
  },
  {
    "q": "Q: What's wrong? — A: My ______ hurt. I played games too long.【眼睛】",
    "options": [
      "eyes",
      "nails",
      "shoulders",
      "hands"
    ],
    "answer": 0,
    "cn": "怎麼了？ — 我的眼睛好痛，我玩遊戲玩太久了。",
    "vocabIndex": 1
  },
  {
    "q": "Q: What's wrong, Amy? — A: My ______ hurts. The music is too loud.【耳朵】",
    "options": [
      "feet",
      "toe",
      "stomach",
      "ear"
    ],
    "answer": 3,
    "cn": "艾美，怎麼了？ — 我的耳朵好痛，音樂太大聲了。",
    "vocabIndex": 2
  },
  {
    "q": "Q: What's wrong? — A: My ______ hurt. I ate too much candy.【牙齒】",
    "options": [
      "mouth",
      "teeth",
      "face",
      "nose"
    ],
    "answer": 1,
    "cn": "怎麼了？ — 我的牙齒好痛，我吃太多糖果了。",
    "vocabIndex": 3
  },
  {
    "q": "Q: What's wrong with Lisa? — A: Her ______ hurts. She can't sing today.【喉嚨】",
    "options": [
      "throat",
      "knee",
      "body",
      "toe"
    ],
    "answer": 0,
    "cn": "麗莎怎麼了？ — 她的喉嚨痛，她今天不能唱歌。",
    "vocabIndex": 4
  },
  {
    "q": "Q: What's wrong, Dad? — A: My ______ hurts. I can't turn my head.【脖子】",
    "options": [
      "feet",
      "body",
      "knee",
      "neck"
    ],
    "answer": 3,
    "cn": "爸爸，怎麼了？ — 我的脖子好痛，我不能轉頭。",
    "vocabIndex": 5
  },
  {
    "q": "Q: What's wrong? — A: My ______ hurt. My schoolbag is too heavy.【肩膀】",
    "options": [
      "fingers",
      "shoulders",
      "hands",
      "eyes"
    ],
    "answer": 1,
    "cn": "怎麼了？ — 我的肩膀好痛，我的書包太重了。",
    "vocabIndex": 6
  },
  {
    "q": "Q: What's wrong with Ben? — A: His ______ hurts. He fell off his bike.【手臂】",
    "options": [
      "mouth",
      "neck",
      "arm",
      "ear"
    ],
    "answer": 2,
    "cn": "班怎麼了？ — 他的手臂受傷了，他從腳踏車上摔下來。",
    "vocabIndex": 7
  },
  {
    "q": "Q: What's wrong, Grandpa? — A: My ______ hurts. I carried a big box.【背】",
    "options": [
      "back",
      "teeth",
      "face",
      "hair"
    ],
    "answer": 0,
    "cn": "爺爺，怎麼了？ — 我的背好痛，我搬了一個大箱子。",
    "vocabIndex": 8
  },
  {
    "q": "Q: What's wrong? — A: My ______ hurts. I ate too much ice cream.【胃】",
    "options": [
      "back",
      "stomach",
      "nose",
      "throat"
    ],
    "answer": 1,
    "cn": "怎麼了？ — 我的胃好痛，我吃了太多冰淇淋。",
    "vocabIndex": 9
  },
  {
    "q": "Q: What's wrong, Mom? — A: My ______ hurt. I walked for three hours.【腿】",
    "options": [
      "lips",
      "fingers",
      "legs",
      "hands"
    ],
    "answer": 2,
    "cn": "媽媽，怎麼了？ — 我的腿好痛，我走了三個小時。",
    "vocabIndex": 10
  },
  {
    "q": "Q: What's wrong with Tom? — A: His ______ hurts. He fell down in the park.【膝蓋】",
    "options": [
      "arm",
      "body",
      "throat",
      "knee"
    ],
    "answer": 3,
    "cn": "湯姆怎麼了？ — 他的膝蓋受傷了，他在公園跌倒了。",
    "vocabIndex": 11
  },
  {
    "q": "Q: What's wrong? — A: My ______ hurt. My new shoes are too small.【腳】",
    "options": [
      "feet",
      "throat",
      "arm",
      "body"
    ],
    "answer": 0,
    "cn": "怎麼了？ — 我的腳好痛，我的新鞋太小了。",
    "vocabIndex": 12
  },
  {
    "q": "Q: What's wrong, Ken? — A: My ______ hurts. I kicked the door.【腳趾】",
    "options": [
      "neck",
      "head",
      "toe",
      "back"
    ],
    "answer": 2,
    "cn": "肯，怎麼了？ — 我的腳趾好痛，我踢到門了。",
    "vocabIndex": 13
  },
  {
    "q": "Q: Mom, can I eat now? — A: Wash your ______ first, or you will get sick.【手】",
    "options": [
      "nails",
      "eyes",
      "shoulders",
      "hands"
    ],
    "answer": 3,
    "cn": "媽媽，我現在可以吃了嗎？ — 先洗手，不然你會生病。",
    "vocabIndex": 14
  },
  {
    "q": "Q: I just played with the dog. — A: Wash your ______, and they will be clean again.【手指】",
    "options": [
      "legs",
      "fingers",
      "hands",
      "shoulders"
    ],
    "answer": 1,
    "cn": "我剛剛跟狗玩。 — 洗洗你的手指，這樣它們就會再變乾淨。",
    "vocabIndex": 15
  },
  {
    "q": "Q: Are my hands dirty? — A: Yes. Cut your ______, and your hands will look clean.【指甲】",
    "options": [
      "lips",
      "legs",
      "shoulders",
      "nails"
    ],
    "answer": 3,
    "cn": "我的手很髒嗎？ — 是的。剪剪指甲，這樣你的手看起來就會很乾淨。",
    "vocabIndex": 16
  },
  {
    "q": "Q: I just got up. I am still tired. — A: Wash your ______, and you will wake up.【臉】",
    "options": [
      "face",
      "heart",
      "neck",
      "mouth"
    ],
    "answer": 0,
    "cn": "我剛起床，還很睏。 — 洗把臉，這樣你就會清醒了。",
    "vocabIndex": 17
  },
  {
    "q": "Q: I played soccer all afternoon. — A: Wash your ______ tonight, or it will smell bad.【頭髮】",
    "options": [
      "face",
      "mouth",
      "hair",
      "stomach"
    ],
    "answer": 2,
    "cn": "我踢了一整個下午的足球。 — 今晚要洗頭髮，不然會很臭。",
    "vocabIndex": 18
  },
  {
    "q": "Q: My hands are dirty. Can I eat this cookie? — A: Don't touch your ______ with dirty hands, or you will get sick.【嘴巴】",
    "options": [
      "back",
      "mouth",
      "arm",
      "stomach"
    ],
    "answer": 1,
    "cn": "我的手很髒，我可以吃這塊餅乾嗎？ — 不要用髒手碰嘴巴，不然你會生病。",
    "vocabIndex": 19
  },
  {
    "q": "Q: Ouch! My mouth hurts. — A: Don't bite your ______, or they will hurt more.【嘴唇】",
    "options": [
      "fingers",
      "eyes",
      "lips",
      "hands"
    ],
    "answer": 2,
    "cn": "哎唷！我的嘴巴好痛。 — 不要咬嘴唇，不然會更痛。",
    "vocabIndex": 20
  },
  {
    "q": "Q: Mr. Lee, Ken is doing something bad! — A: Ken, don't pick your ______ in class, or your classmates will laugh at you.【鼻子】",
    "options": [
      "body",
      "nose",
      "ear",
      "throat"
    ],
    "answer": 1,
    "cn": "李老師，肯在做壞事！ — 肯，上課不要挖鼻孔，不然同學會笑你。",
    "vocabIndex": 21
  },
  {
    "q": "Q: I'm so tired after the game. — A: Wash your ______, and you will sleep well tonight.【身體】",
    "options": [
      "body",
      "neck",
      "toe",
      "knee"
    ],
    "answer": 0,
    "cn": "比賽完我好累。 — 洗個澡，這樣你今晚就會睡得好。",
    "vocabIndex": 22
  },
  {
    "q": "Q: I just ran for ten minutes. — A: Touch your ______, and you can feel it beating fast.【心】",
    "options": [
      "ear",
      "arm",
      "toe",
      "heart"
    ],
    "answer": 3,
    "cn": "我剛剛跑了十分鐘。 — 摸摸你的心臟，這樣你就能感覺到它跳得很快。",
    "vocabIndex": 23
  }
];

const LOOKUP = {
  "head": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "頭"
  },
  "eyes": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "眼睛"
  },
  "ear": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "耳朵"
  },
  "teeth": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "牙齒"
  },
  "throat": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "喉嚨"
  },
  "neck": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "脖子"
  },
  "shoulders": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "肩膀"
  },
  "arm": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "手臂"
  },
  "back": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "背"
  },
  "stomach": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "胃"
  },
  "legs": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "腿"
  },
  "knee": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "膝蓋"
  },
  "feet": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "腳"
  },
  "toe": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "腳趾"
  },
  "hands": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "手"
  },
  "fingers": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "手指"
  },
  "nails": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "指甲"
  },
  "face": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "臉"
  },
  "hair": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "頭髮"
  },
  "mouth": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "嘴巴"
  },
  "lips": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "嘴唇"
  },
  "nose": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "鼻子"
  },
  "body": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "身體"
  },
  "heart": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "心"
  }
};

const EXTRA_GLOSSES = {};
