// Unit 11 Quiz Data: assess – terminal
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "4000 Essential Words Book 4 U11 - assess – terminal",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "assess",
    "pos": "v.",
    "cn_def": "評估",
    "en_def": "to judge the quality or amount of something",
    "sentence": "Teachers use tests to {{BLANK}} how much their students have learned.",
    "cn": "老師用測驗來評估學生學了多少。"
  },
  {
    "word": "astonish",
    "pos": "v.",
    "cn_def": "使驚訝",
    "en_def": "to surprise someone very much",
    "sentence": "The young girl's piano skills never fail to {{BLANK}} her audience.",
    "cn": "那個小女孩的鋼琴技巧總是讓觀眾驚嘆。"
  },
  {
    "word": "commence",
    "pos": "v.",
    "cn_def": "開始",
    "en_def": "to begin",
    "sentence": "The ceremony will {{BLANK}} at nine o'clock with a short speech.",
    "cn": "典禮將於九點以一段簡短致詞開始。"
  },
  {
    "word": "essence",
    "pos": "n.",
    "cn_def": "本質；精髓",
    "en_def": "the most important quality of something",
    "sentence": "The {{BLANK}} of good teaching is caring about every student.",
    "cn": "良好教學的本質是關心每一位學生。"
  },
  {
    "word": "extract",
    "pos": "v.",
    "cn_def": "提取；拔出",
    "en_def": "to take something out of something else",
    "sentence": "Workers {{BLANK}} oil from deep under the sea.",
    "cn": "工人從深海底下開採石油。"
  },
  {
    "word": "fabulous",
    "pos": "adj.",
    "cn_def": "極好的",
    "en_def": "very good; wonderful",
    "sentence": "We had a {{BLANK}} time at the beach and did not want to go home.",
    "cn": "我們在海邊玩得非常開心，都不想回家。"
  },
  {
    "word": "haste",
    "pos": "n.",
    "cn_def": "匆忙",
    "en_def": "great speed in doing something because you have little time",
    "sentence": "In his {{BLANK}} to catch the bus, he left his wallet at home.",
    "cn": "他匆忙趕公車，把皮夾忘在家裡。"
  },
  {
    "word": "impulse",
    "pos": "n.",
    "cn_def": "衝動",
    "en_def": "a sudden strong wish to do something",
    "sentence": "I bought the shoes on {{BLANK}} and later felt sorry about it.",
    "cn": "我一時衝動買了那雙鞋，後來很後悔。"
  },
  {
    "word": "inhibit",
    "pos": "v.",
    "cn_def": "抑制；阻礙",
    "en_def": "to prevent something from growing or happening",
    "sentence": "Cold weather can {{BLANK}} the growth of young plants.",
    "cn": "寒冷的天氣會抑制幼苗的生長。"
  },
  {
    "word": "latter",
    "pos": "adj.",
    "cn_def": "後半的；後者的",
    "en_def": "nearer to the end of a period",
    "sentence": "In the {{BLANK}} part of the year, the weather turns cool.",
    "cn": "下半年天氣會轉涼。"
  },
  {
    "word": "molecule",
    "pos": "n.",
    "cn_def": "分子",
    "en_def": "the smallest unit of a substance, made of two or more atoms",
    "sentence": "A water {{BLANK}} is made of two hydrogen atoms and one oxygen atom.",
    "cn": "一個水分子由兩個氫原子和一個氧原子組成。"
  },
  {
    "word": "ongoing",
    "pos": "adj.",
    "cn_def": "持續進行的",
    "en_def": "continuing to happen",
    "sentence": "The police said that the search for the missing boy is still {{BLANK}}.",
    "cn": "警方表示搜尋失蹤男孩的行動仍在持續進行。"
  },
  {
    "word": "precise",
    "pos": "adj.",
    "cn_def": "精確的",
    "en_def": "exact and correct",
    "sentence": "Can you give me the {{BLANK}} time when the train arrives?",
    "cn": "你能告訴我火車到站的精確時間嗎？"
  },
  {
    "word": "proximity",
    "pos": "n.",
    "cn_def": "鄰近；接近",
    "en_def": "the state of being near something",
    "sentence": "We chose this house because of its {{BLANK}} to the school.",
    "cn": "我們選這棟房子是因為它離學校近。"
  },
  {
    "word": "publicity",
    "pos": "n.",
    "cn_def": "宣傳；關注",
    "en_def": "attention from newspapers and television",
    "sentence": "The new movie got a lot of {{BLANK}} before it opened.",
    "cn": "這部新電影上映前獲得大量宣傳。"
  },
  {
    "word": "remedy",
    "pos": "n.",
    "cn_def": "療法；補救方法",
    "en_def": "something that makes an illness or problem better",
    "sentence": "Hot tea with honey is an old {{BLANK}} for a sore throat.",
    "cn": "加蜂蜜的熱茶是治療喉嚨痛的老偏方。"
  },
  {
    "word": "significance",
    "pos": "n.",
    "cn_def": "重要性；意義",
    "en_def": "the importance or meaning of something",
    "sentence": "Nobody understood the {{BLANK}} of the discovery until years later.",
    "cn": "多年後才有人了解這項發現的重要性。"
  },
  {
    "word": "subsequent",
    "pos": "adj.",
    "cn_def": "隨後的",
    "en_def": "happening after something else",
    "sentence": "The first test was easy, but the {{BLANK}} ones were much harder.",
    "cn": "第一次考試很簡單，但隨後幾次難多了。"
  },
  {
    "word": "synthetic",
    "pos": "adj.",
    "cn_def": "合成的；人造的",
    "en_def": "made by people from chemicals, not natural",
    "sentence": "This jacket is made of {{BLANK}} material, not real leather.",
    "cn": "這件夾克是合成材質做的，不是真皮。"
  },
  {
    "word": "terminal",
    "pos": "adj.",
    "cn_def": "末期的；不治的",
    "en_def": "(of an illness) that cannot be cured and will cause death",
    "sentence": "The doctors told him that his illness was {{BLANK}} and he had six months to live.",
    "cn": "醫生告訴他病情已到末期，只剩六個月的生命。"
  }
];

const MCQS = [
  {
    "q": "Teachers use tests to ______ how much their students have learned.",
    "options": [
      "inhibit",
      "astonish",
      "assess",
      "extract"
    ],
    "answer": 2,
    "cn": "老師用測驗來評估學生學了多少。",
    "vocabIndex": 0
  },
  {
    "q": "The young girl's piano skills never fail to ______ her audience.",
    "options": [
      "inhibit",
      "astonish",
      "commence",
      "assess"
    ],
    "answer": 1,
    "cn": "那個小女孩的鋼琴技巧總是讓觀眾驚嘆。",
    "vocabIndex": 1
  },
  {
    "q": "The ceremony will ______ at nine o'clock with a short speech.",
    "options": [
      "commence",
      "astonish",
      "extract",
      "assess"
    ],
    "answer": 0,
    "cn": "典禮將於九點以一段簡短致詞開始。",
    "vocabIndex": 2
  },
  {
    "q": "The ______ of good teaching is caring about every student.",
    "options": [
      "molecule",
      "impulse",
      "proximity",
      "essence"
    ],
    "answer": 3,
    "cn": "良好教學的本質是關心每一位學生。",
    "vocabIndex": 3
  },
  {
    "q": "Workers ______ oil from deep under the sea.",
    "options": [
      "assess",
      "extract",
      "commence",
      "inhibit"
    ],
    "answer": 1,
    "cn": "工人從深海底下開採石油。",
    "vocabIndex": 4
  },
  {
    "q": "We had a ______ time at the beach and did not want to go home.",
    "options": [
      "fabulous",
      "terminal",
      "precise",
      "ongoing"
    ],
    "answer": 0,
    "cn": "我們在海邊玩得非常開心，都不想回家。",
    "vocabIndex": 5
  },
  {
    "q": "In his ______ to catch the bus, he left his wallet at home.",
    "options": [
      "significance",
      "remedy",
      "haste",
      "essence"
    ],
    "answer": 2,
    "cn": "他匆忙趕公車，把皮夾忘在家裡。",
    "vocabIndex": 6
  },
  {
    "q": "I bought the shoes on ______ and later felt sorry about it.",
    "options": [
      "significance",
      "proximity",
      "molecule",
      "impulse"
    ],
    "answer": 3,
    "cn": "我一時衝動買了那雙鞋，後來很後悔。",
    "vocabIndex": 7
  },
  {
    "q": "Cold weather can ______ the growth of young plants.",
    "options": [
      "commence",
      "inhibit",
      "astonish",
      "assess"
    ],
    "answer": 1,
    "cn": "寒冷的天氣會抑制幼苗的生長。",
    "vocabIndex": 8
  },
  {
    "q": "In the ______ part of the year, the weather turns cool.",
    "options": [
      "precise",
      "terminal",
      "latter",
      "synthetic"
    ],
    "answer": 2,
    "cn": "下半年天氣會轉涼。",
    "vocabIndex": 9
  },
  {
    "q": "A water ______ is made of two hydrogen atoms and one oxygen atom.",
    "options": [
      "publicity",
      "impulse",
      "essence",
      "molecule"
    ],
    "answer": 3,
    "cn": "一個水分子由兩個氫原子和一個氧原子組成。",
    "vocabIndex": 10
  },
  {
    "q": "The police said that the search for the missing boy is still ______.",
    "options": [
      "ongoing",
      "fabulous",
      "terminal",
      "synthetic"
    ],
    "answer": 0,
    "cn": "警方表示搜尋失蹤男孩的行動仍在持續進行。",
    "vocabIndex": 11
  },
  {
    "q": "Can you give me the ______ time when the train arrives?",
    "options": [
      "terminal",
      "ongoing",
      "subsequent",
      "precise"
    ],
    "answer": 3,
    "cn": "你能告訴我火車到站的精確時間嗎？",
    "vocabIndex": 12
  },
  {
    "q": "We chose this house because of its ______ to the school.",
    "options": [
      "impulse",
      "haste",
      "proximity",
      "significance"
    ],
    "answer": 2,
    "cn": "我們選這棟房子是因為它離學校近。",
    "vocabIndex": 13
  },
  {
    "q": "The new movie got a lot of ______ before it opened.",
    "options": [
      "publicity",
      "significance",
      "impulse",
      "haste"
    ],
    "answer": 0,
    "cn": "這部新電影上映前獲得大量宣傳。",
    "vocabIndex": 14
  },
  {
    "q": "Hot tea with honey is an old ______ for a sore throat.",
    "options": [
      "impulse",
      "remedy",
      "essence",
      "proximity"
    ],
    "answer": 1,
    "cn": "加蜂蜜的熱茶是治療喉嚨痛的老偏方。",
    "vocabIndex": 15
  },
  {
    "q": "Nobody understood the ______ of the discovery until years later.",
    "options": [
      "proximity",
      "haste",
      "significance",
      "impulse"
    ],
    "answer": 2,
    "cn": "多年後才有人了解這項發現的重要性。",
    "vocabIndex": 16
  },
  {
    "q": "The first test was easy, but the ______ ones were much harder.",
    "options": [
      "terminal",
      "subsequent",
      "precise",
      "fabulous"
    ],
    "answer": 1,
    "cn": "第一次考試很簡單，但隨後幾次難多了。",
    "vocabIndex": 17
  },
  {
    "q": "This jacket is made of ______ material, not real leather.",
    "options": [
      "synthetic",
      "precise",
      "fabulous",
      "latter"
    ],
    "answer": 0,
    "cn": "這件夾克是合成材質做的，不是真皮。",
    "vocabIndex": 18
  },
  {
    "q": "The doctors told him that his illness was ______ and he had six months to live.",
    "options": [
      "ongoing",
      "precise",
      "subsequent",
      "terminal"
    ],
    "answer": 3,
    "cn": "醫生告訴他病情已到末期，只剩六個月的生命。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "assess": {
    "pos": "v.",
    "en_def": "to judge the quality or amount of something",
    "cn_def": "評估"
  },
  "astonish": {
    "pos": "v.",
    "en_def": "to surprise someone very much",
    "cn_def": "使驚訝"
  },
  "commence": {
    "pos": "v.",
    "en_def": "to begin",
    "cn_def": "開始"
  },
  "essence": {
    "pos": "n.",
    "en_def": "the most important quality of something",
    "cn_def": "本質；精髓"
  },
  "extract": {
    "pos": "v.",
    "en_def": "to take something out of something else",
    "cn_def": "提取；拔出"
  },
  "fabulous": {
    "pos": "adj.",
    "en_def": "very good; wonderful",
    "cn_def": "極好的"
  },
  "haste": {
    "pos": "n.",
    "en_def": "great speed in doing something because you have little time",
    "cn_def": "匆忙"
  },
  "impulse": {
    "pos": "n.",
    "en_def": "a sudden strong wish to do something",
    "cn_def": "衝動"
  },
  "inhibit": {
    "pos": "v.",
    "en_def": "to prevent something from growing or happening",
    "cn_def": "抑制；阻礙"
  },
  "latter": {
    "pos": "adj.",
    "en_def": "nearer to the end of a period",
    "cn_def": "後半的；後者的"
  },
  "molecule": {
    "pos": "n.",
    "en_def": "the smallest unit of a substance, made of two or more atoms",
    "cn_def": "分子"
  },
  "ongoing": {
    "pos": "adj.",
    "en_def": "continuing to happen",
    "cn_def": "持續進行的"
  },
  "precise": {
    "pos": "adj.",
    "en_def": "exact and correct",
    "cn_def": "精確的"
  },
  "proximity": {
    "pos": "n.",
    "en_def": "the state of being near something",
    "cn_def": "鄰近；接近"
  },
  "publicity": {
    "pos": "n.",
    "en_def": "attention from newspapers and television",
    "cn_def": "宣傳；關注"
  },
  "remedy": {
    "pos": "n.",
    "en_def": "something that makes an illness or problem better",
    "cn_def": "療法；補救方法"
  },
  "significance": {
    "pos": "n.",
    "en_def": "the importance or meaning of something",
    "cn_def": "重要性；意義"
  },
  "subsequent": {
    "pos": "adj.",
    "en_def": "happening after something else",
    "cn_def": "隨後的"
  },
  "synthetic": {
    "pos": "adj.",
    "en_def": "made by people from chemicals, not natural",
    "cn_def": "合成的；人造的"
  },
  "terminal": {
    "pos": "adj.",
    "en_def": "(of an illness) that cannot be cured and will cause death",
    "cn_def": "末期的；不治的"
  }
};

const EXTRA_GLOSSES = {};
