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
    "en_def": "the top part of your body with your eyes, nose, and mouth",
    "sentence": "Q: What's wrong, Tom? — A: My {{BLANK}} hurts. I didn't sleep well.",
    "cn": "湯姆，怎麼了？ — 我的頭好痛，我沒睡好。"
  },
  {
    "word": "eye",
    "pos": "n.",
    "cn_def": "眼睛",
    "en_def": "the part of your face that you see with",
    "sentence": "Q: What's wrong? — A: My {{BLANK}} hurt. I played games too long.",
    "cn": "怎麼了？ — 我的眼睛好痛，我玩遊戲玩太久了。"
  },
  {
    "word": "ear",
    "pos": "n.",
    "cn_def": "耳朵",
    "en_def": "the part of your head that you hear with",
    "sentence": "Q: What's wrong, Amy? — A: My {{BLANK}} hurts. The music is too loud.",
    "cn": "艾美，怎麼了？ — 我的耳朵好痛，音樂太大聲了。"
  },
  {
    "word": "tooth (teeth)",
    "pos": "n.",
    "cn_def": "牙齒",
    "en_def": "one of the hard white things in your mouth for biting food",
    "sentence": "Q: What's wrong? — A: My {{BLANK}} hurt. I ate too much candy.",
    "cn": "怎麼了？ — 我的牙齒好痛，我吃太多糖果了。"
  },
  {
    "word": "throat",
    "pos": "n.",
    "cn_def": "喉嚨",
    "en_def": "the part inside your neck that food and air go down",
    "sentence": "Q: What's wrong with Lisa? — A: Her {{BLANK}} hurts. She can't sing today.",
    "cn": "麗莎怎麼了？ — 她的喉嚨痛，她今天不能唱歌。"
  },
  {
    "word": "neck",
    "pos": "n.",
    "cn_def": "脖子",
    "en_def": "the part of your body between your head and shoulders",
    "sentence": "Q: What's wrong, Dad? — A: My {{BLANK}} hurts. I can't turn my head.",
    "cn": "爸爸，怎麼了？ — 我的脖子好痛，我不能轉頭。"
  },
  {
    "word": "shoulder",
    "pos": "n.",
    "cn_def": "肩膀",
    "en_def": "the part of your body between your neck and your arm",
    "sentence": "Q: What's wrong? — A: My {{BLANK}} hurt. My schoolbag is too heavy.",
    "cn": "怎麼了？ — 我的肩膀好痛，我的書包太重了。"
  },
  {
    "word": "arm",
    "pos": "n.",
    "cn_def": "手臂",
    "en_def": "the long part of your body between your shoulder and hand",
    "sentence": "Q: What's wrong with Ben? — A: His {{BLANK}} hurts. He fell off his bike.",
    "cn": "班怎麼了？ — 他的手臂受傷了，他從腳踏車上摔下來。"
  },
  {
    "word": "back",
    "pos": "n.",
    "cn_def": "背",
    "en_def": "the part of your body opposite your chest and stomach",
    "sentence": "Q: What's wrong, Grandpa? — A: My {{BLANK}} hurts. I carried a big box.",
    "cn": "爺爺，怎麼了？ — 我的背好痛，我搬了一個大箱子。"
  },
  {
    "word": "stomach",
    "pos": "n.",
    "cn_def": "胃",
    "en_def": "the part of your body where food goes after you eat it",
    "sentence": "Q: What's wrong? — A: My {{BLANK}} hurts. I ate too much ice cream.",
    "cn": "怎麼了？ — 我的胃好痛，我吃了太多冰淇淋。"
  },
  {
    "word": "leg",
    "pos": "n.",
    "cn_def": "腿",
    "en_def": "the long part of your body that you stand and walk on",
    "sentence": "Q: What's wrong, Mom? — A: My {{BLANK}} hurt. I walked for three hours.",
    "cn": "媽媽，怎麼了？ — 我的腿好痛，我走了三個小時。"
  },
  {
    "word": "knee",
    "pos": "n.",
    "cn_def": "膝蓋",
    "en_def": "the middle part of your leg where it bends",
    "sentence": "Q: What's wrong with Tom? — A: His {{BLANK}} hurts. He fell down in the park.",
    "cn": "湯姆怎麼了？ — 他的膝蓋受傷了，他在公園跌倒了。"
  },
  {
    "word": "foot (feet)",
    "pos": "n.",
    "cn_def": "腳",
    "en_def": "the part at the end of your leg that you stand on",
    "sentence": "Q: What's wrong? — A: My {{BLANK}} hurt. My new shoes are too small.",
    "cn": "怎麼了？ — 我的腳好痛，我的新鞋太小了。"
  },
  {
    "word": "toe",
    "pos": "n.",
    "cn_def": "腳趾",
    "en_def": "one of the five small parts at the end of your foot",
    "sentence": "Q: What's wrong, Ken? — A: My {{BLANK}} hurts. I kicked the door.",
    "cn": "肯，怎麼了？ — 我的腳趾好痛，我踢到門了。"
  },
  {
    "word": "hand",
    "pos": "n.",
    "cn_def": "手",
    "en_def": "the part at the end of your arm that you hold things with",
    "sentence": "Q: Mom, can I eat now? — A: Wash your {{BLANK}} first, or you will get sick.",
    "cn": "媽媽，我現在可以吃了嗎？ — 先洗手，不然你會生病。"
  },
  {
    "word": "finger",
    "pos": "n.",
    "cn_def": "手指",
    "en_def": "one of the five long parts of your hand",
    "sentence": "Q: I just played with the dog. — A: Wash your {{BLANK}}, and they will be clean again.",
    "cn": "我剛剛跟狗玩。 — 洗洗你的手指，這樣它們就會再變乾淨。"
  },
  {
    "word": "nail",
    "pos": "n.",
    "cn_def": "指甲",
    "en_def": "the hard part at the end of a finger or toe",
    "sentence": "Q: Are my hands dirty? — A: Yes. Cut your {{BLANK}}, and your hands will look clean.",
    "cn": "我的手很髒嗎？ — 是的。剪剪指甲，這樣你的手看起來就會很乾淨。"
  },
  {
    "word": "face",
    "pos": "n.",
    "cn_def": "臉",
    "en_def": "the front part of your head",
    "sentence": "Q: I just got up. I am still tired. — A: Wash your {{BLANK}}, and you will wake up.",
    "cn": "我剛起床，還很睏。 — 洗把臉，這樣你就會清醒了。"
  },
  {
    "word": "hair",
    "pos": "n.",
    "cn_def": "頭髮",
    "en_def": "the thin soft things that grow on your head",
    "sentence": "Q: I played soccer all afternoon. — A: Wash your {{BLANK}} tonight, or it will smell bad.",
    "cn": "我踢了一整個下午的足球。 — 今晚要洗頭髮，不然會很臭。"
  },
  {
    "word": "mouth",
    "pos": "n.",
    "cn_def": "嘴巴",
    "en_def": "the part of your face that you eat and speak with",
    "sentence": "Q: My hands are dirty. Can I eat this cookie? — A: Don't touch your {{BLANK}} with dirty hands, or you will get sick.",
    "cn": "我的手很髒，我可以吃這塊餅乾嗎？ — 不要用髒手碰嘴巴，不然你會生病。"
  },
  {
    "word": "lip",
    "pos": "n.",
    "cn_def": "嘴唇",
    "en_def": "one of the two soft edges of your mouth",
    "sentence": "Q: Ouch! My mouth hurts. — A: Don't bite your {{BLANK}}, or they will hurt more.",
    "cn": "哎唷！我的嘴巴好痛。 — 不要咬嘴唇，不然會更痛。"
  },
  {
    "word": "nose",
    "pos": "n.",
    "cn_def": "鼻子",
    "en_def": "the part of your face that you smell and breathe with",
    "sentence": "Q: Mr. Lee, Ken is doing something bad! — A: Ken, don't pick your {{BLANK}} in class, or your classmates will laugh at you.",
    "cn": "李老師，肯在做壞事！ — 肯，上課不要挖鼻孔，不然同學會笑你。"
  },
  {
    "word": "body",
    "pos": "n.",
    "cn_def": "身體",
    "en_def": "all the parts of a person or an animal",
    "sentence": "Q: I'm so tired after the game. — A: Wash your {{BLANK}}, and you will sleep well tonight.",
    "cn": "比賽完我好累。 — 洗個澡，這樣你今晚就會睡得好。"
  },
  {
    "word": "heart",
    "pos": "n.",
    "cn_def": "心",
    "en_def": "the part inside your chest that sends blood around your body",
    "sentence": "Q: I just ran for ten minutes. — A: Touch your {{BLANK}}, and you can feel it beating fast.",
    "cn": "我剛剛跑了十分鐘。 — 摸摸你的心臟，這樣你就能感覺到它跳得很快。"
  }
];

const MCQS = [
  {
    "q": "You must wear a hat on your ______ when the sun is strong. If you don't, you may feel sick after an hour outside.",
    "options": [
      "knee",
      "stomach",
      "finger",
      "head"
    ],
    "answer": 3,
    "cn": "湯姆，怎麼了？ — 我的頭好痛，我沒睡好。",
    "vocabIndex": 0
  },
  {
    "q": "Close your ______ and don't look. I have a birthday present for you, and I want it to be a surprise.",
    "options": [
      "ears",
      "eyes",
      "knees",
      "toes"
    ],
    "answer": 1,
    "cn": "怎麼了？ — 我的眼睛好痛，我玩遊戲玩太久了。",
    "vocabIndex": 1
  },
  {
    "q": "The music is too loud, and it hurts my ______. Please turn it down, or I won't hear anything tomorrow.",
    "options": [
      "knees",
      "toes",
      "ears",
      "nails"
    ],
    "answer": 2,
    "cn": "艾美，怎麼了？ — 我的耳朵好痛，音樂太大聲了。",
    "vocabIndex": 2
  },
  {
    "q": "You should brush your ______ after every meal. If you don't, you will have to see the dentist very soon.",
    "options": [
      "teeth",
      "eyes",
      "shoulders",
      "knees"
    ],
    "answer": 0,
    "cn": "怎麼了？ — 我的牙齒好痛，我吃太多糖果了。",
    "vocabIndex": 3
  },
  {
    "q": "I have a sore ______, so it hurts when I eat or drink. I can't sing or talk loudly today.",
    "options": [
      "knee",
      "finger",
      "toe",
      "throat"
    ],
    "answer": 3,
    "cn": "麗莎怎麼了？ — 她的喉嚨痛，她今天不能唱歌。",
    "vocabIndex": 4
  },
  {
    "q": "The goose has a long ______, so it can find food under the water. Its head goes down, and its tail goes up.",
    "options": [
      "finger",
      "knee",
      "neck",
      "nail"
    ],
    "answer": 2,
    "cn": "爸爸，怎麼了？ — 我的脖子好痛，我不能轉頭。",
    "vocabIndex": 5
  },
  {
    "q": "The little boy can't see the show, so his dad puts him on his ______. Now the boy is higher than everyone.",
    "options": [
      "shoulders",
      "toes",
      "fingers",
      "lips"
    ],
    "answer": 0,
    "cn": "怎麼了？ — 我的肩膀好痛，我的書包太重了。",
    "vocabIndex": 6
  },
  {
    "q": "Tom fell off his bike and broke his left ______. Now he can't write or carry his schoolbag with that hand.",
    "options": [
      "ear",
      "arm",
      "lip",
      "toe"
    ],
    "answer": 1,
    "cn": "班怎麼了？ — 他的手臂受傷了，他從腳踏車上摔下來。",
    "vocabIndex": 7
  },
  {
    "q": "Grandpa carried heavy boxes all day, and now his ______ hurts. He can't stand up straight, so he is lying in bed.",
    "options": [
      "ear",
      "nose",
      "back",
      "hair"
    ],
    "answer": 2,
    "cn": "爺爺，怎麼了？ — 我的背好痛，我搬了一個大箱子。",
    "vocabIndex": 8
  },
  {
    "q": "I ate too much ice cream, and now my ______ hurts. I don't want any dinner tonight. I just want to lie down.",
    "options": [
      "stomach",
      "knee",
      "shoulder",
      "ear"
    ],
    "answer": 0,
    "cn": "怎麼了？ — 我的胃好痛，我吃了太多冰淇淋。",
    "vocabIndex": 9
  },
  {
    "q": "A spider has eight ______, but an ant has only six. They both walk very fast on them.",
    "options": [
      "heads",
      "noses",
      "mouths",
      "legs"
    ],
    "answer": 3,
    "cn": "媽媽，怎麼了？ — 我的腿好痛，我走了三個小時。",
    "vocabIndex": 10
  },
  {
    "q": "Ben fell down on the playground and hurt his ______. Now he can't bend his leg, and it is hard for him to walk.",
    "options": [
      "ear",
      "knee",
      "lip",
      "finger"
    ],
    "answer": 1,
    "cn": "湯姆怎麼了？ — 他的膝蓋受傷了，他在公園跌倒了。",
    "vocabIndex": 11
  },
  {
    "q": "These shoes are too small for my ______. My toes hurt when I walk, so I need a bigger size.",
    "options": [
      "hands",
      "ears",
      "knees",
      "feet"
    ],
    "answer": 3,
    "cn": "怎麼了？ — 我的腳好痛，我的新鞋太小了。",
    "vocabIndex": 12
  },
  {
    "q": "You have five ______ on each foot. Can you move them inside your shoes? Mine always feel cold in winter.",
    "options": [
      "fingers",
      "ears",
      "toes",
      "teeth"
    ],
    "answer": 2,
    "cn": "肯，怎麼了？ — 我的腳趾好痛，我踢到門了。",
    "vocabIndex": 13
  },
  {
    "q": "Wash your ______ with soap before you eat. They touch many dirty things, like doors and money, every day.",
    "options": [
      "hands",
      "knees",
      "ears",
      "shoulders"
    ],
    "answer": 0,
    "cn": "媽媽，我現在可以吃了嗎？ — 先洗手，不然你會生病。",
    "vocabIndex": 14
  },
  {
    "q": "Lisa wears a gold ring on her ______. Her husband gave it to her on the day they got married.",
    "options": [
      "knee",
      "finger",
      "tooth",
      "shoulder"
    ],
    "answer": 1,
    "cn": "我剛剛跟狗玩。 — 洗洗你的手指，這樣它們就會再變乾淨。",
    "vocabIndex": 15
  },
  {
    "q": "Your ______ are too long. Please cut them tonight, or you may hurt someone when you play basketball.",
    "options": [
      "ears",
      "legs",
      "nails",
      "lips"
    ],
    "answer": 2,
    "cn": "我的手很髒嗎？ — 是的。剪剪指甲，這樣你的手看起來就會很乾淨。",
    "vocabIndex": 16
  },
  {
    "q": "Wash your ______ every morning when you get up. Then your eyes will open, and you will not feel sleepy.",
    "options": [
      "back",
      "heart",
      "throat",
      "face"
    ],
    "answer": 3,
    "cn": "我剛起床，還很睏。 — 洗把臉，這樣你就會清醒了。",
    "vocabIndex": 17
  },
  {
    "q": "My sister has long black ______. She brushes it every morning, and she washes it every two days.",
    "options": [
      "teeth",
      "hair",
      "nails",
      "legs"
    ],
    "answer": 1,
    "cn": "我踢了一整個下午的足球。 — 今晚要洗頭髮，不然會很臭。",
    "vocabIndex": 18
  },
  {
    "q": "Don't talk with food in your ______. It is not polite, and nobody can understand what you are saying.",
    "options": [
      "mouth",
      "ear",
      "nose",
      "hand"
    ],
    "answer": 0,
    "cn": "我的手很髒，我可以吃這塊餅乾嗎？ — 不要用髒手碰嘴巴，不然你會生病。",
    "vocabIndex": 19
  },
  {
    "q": "In winter, the cold wind makes my ______ dry. It hurts when I smile or eat, so I drink a lot of water.",
    "options": [
      "teeth",
      "nails",
      "lips",
      "knees"
    ],
    "answer": 2,
    "cn": "哎唷！我的嘴巴好痛。 — 不要咬嘴唇，不然會更痛。",
    "vocabIndex": 20
  },
  {
    "q": "I have a cold, so I can't smell anything with my ______. Even this delicious pizza smells like nothing to me.",
    "options": [
      "nose",
      "ear",
      "knee",
      "finger"
    ],
    "answer": 0,
    "cn": "李老師，肯在做壞事！ — 肯，上課不要挖鼻孔，不然同學會笑你。",
    "vocabIndex": 21
  },
  {
    "q": "Swimming is good for your whole ______. It makes your arms, legs, back, and heart strong.",
    "options": [
      "finger",
      "body",
      "nose",
      "hair"
    ],
    "answer": 1,
    "cn": "比賽完我好累。 — 洗個澡，這樣你今晚就會睡得好。",
    "vocabIndex": 22
  },
  {
    "q": "After running for thirty minutes, I can feel my ______ beating very fast. I need to sit down and rest.",
    "options": [
      "hair",
      "nail",
      "nose",
      "heart"
    ],
    "answer": 3,
    "cn": "我剛剛跑了十分鐘。 — 摸摸你的心臟，這樣你就能感覺到它跳得很快。",
    "vocabIndex": 23
  }
];

const LOOKUP = {
  "knee": {
    "pos": "n.",
    "en_def": "the middle part of your leg where it bends",
    "cn_def": "膝蓋"
  },
  "stomach": {
    "pos": "n.",
    "en_def": "the part of your body where food goes after you eat it",
    "cn_def": "胃"
  },
  "finger": {
    "pos": "n.",
    "en_def": "one of the five long parts of your hand",
    "cn_def": "手指"
  },
  "head": {
    "pos": "n.",
    "en_def": "the top part of your body with your eyes, nose, and mouth",
    "cn_def": "頭"
  },
  "ears": {
    "pos": "n.",
    "en_def": "the part of your head that you hear with",
    "cn_def": "耳朵"
  },
  "eyes": {
    "pos": "n.",
    "en_def": "the part of your face that you see with",
    "cn_def": "眼睛"
  },
  "knees": {
    "pos": "n.",
    "en_def": "the middle part of your leg where it bends",
    "cn_def": "膝蓋"
  },
  "toes": {
    "pos": "prep.",
    "en_def": "in the direction of a place",
    "cn_def": "到；往"
  },
  "nails": {
    "pos": "n.",
    "en_def": "the hard part at the end of a finger or toe",
    "cn_def": "指甲"
  },
  "teeth": {
    "pos": "n.",
    "en_def": "one of the hard white things in your mouth for biting food",
    "cn_def": "牙齒"
  },
  "shoulders": {
    "pos": "n.",
    "en_def": "the part of your body between your neck and your arm",
    "cn_def": "肩膀"
  },
  "toe": {
    "pos": "n.",
    "en_def": "one of the five small parts at the end of your foot",
    "cn_def": "腳趾"
  },
  "throat": {
    "pos": "n.",
    "en_def": "the part inside your neck that food and air go down",
    "cn_def": "喉嚨"
  },
  "neck": {
    "pos": "n.",
    "en_def": "the part of your body between your head and shoulders",
    "cn_def": "脖子"
  },
  "nail": {
    "pos": "n.",
    "en_def": "the hard part at the end of a finger or toe",
    "cn_def": "指甲"
  },
  "fingers": {
    "pos": "n.",
    "en_def": "one of the five long parts of your hand",
    "cn_def": "手指"
  },
  "lips": {
    "pos": "n.",
    "en_def": "one of the two soft edges of your mouth",
    "cn_def": "嘴唇"
  },
  "ear": {
    "pos": "n.",
    "en_def": "the part of your head that you hear with",
    "cn_def": "耳朵"
  },
  "arm": {
    "pos": "n.",
    "en_def": "the long part of your body between your shoulder and hand",
    "cn_def": "手臂"
  },
  "lip": {
    "pos": "n.",
    "en_def": "one of the two soft edges of your mouth",
    "cn_def": "嘴唇"
  },
  "nose": {
    "pos": "n.",
    "en_def": "the part of your face that you smell and breathe with",
    "cn_def": "鼻子"
  },
  "back": {
    "pos": "n.",
    "en_def": "the part of your body opposite your chest and stomach",
    "cn_def": "背"
  },
  "hair": {
    "pos": "n.",
    "en_def": "the thin soft things that grow on your head",
    "cn_def": "頭髮"
  },
  "shoulder": {
    "pos": "n.",
    "en_def": "the part of your body between your neck and your arm",
    "cn_def": "肩膀"
  },
  "heads": {
    "pos": "n.",
    "en_def": "the top part of your body with your eyes, nose, and mouth",
    "cn_def": "頭"
  },
  "noses": {
    "pos": "n.",
    "en_def": "the part of your face that you smell and breathe with",
    "cn_def": "鼻子"
  },
  "mouths": {
    "pos": "n.",
    "en_def": "the part of your face that you eat and speak with",
    "cn_def": "嘴巴"
  },
  "legs": {
    "pos": "n.",
    "en_def": "the long part of your body that you stand and walk on",
    "cn_def": "腿"
  },
  "hands": {
    "pos": "n.",
    "en_def": "the part at the end of your arm that you hold things with",
    "cn_def": "手"
  },
  "feet": {
    "pos": "n.",
    "en_def": "the part at the end of your leg that you stand on",
    "cn_def": "腳"
  },
  "tooth": {
    "pos": "n.",
    "en_def": "one of the hard white things in your mouth for biting food",
    "cn_def": "牙齒"
  },
  "heart": {
    "pos": "n.",
    "en_def": "the part inside your chest that sends blood around your body",
    "cn_def": "心"
  },
  "face": {
    "pos": "n.",
    "en_def": "the front part of your head",
    "cn_def": "臉"
  },
  "mouth": {
    "pos": "n.",
    "en_def": "the part of your face that you eat and speak with",
    "cn_def": "嘴巴"
  },
  "hand": {
    "pos": "n.",
    "en_def": "the part at the end of your arm that you hold things with",
    "cn_def": "手"
  },
  "body": {
    "pos": "n.",
    "en_def": "all the parts of a person or an animal",
    "cn_def": "身體"
  }
};

const EXTRA_GLOSSES = {};
