// Topic 19 Subunit 15 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T19 S15 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "under the weather",
    "pos": "adj.phr.",
    "cn_def": "身體不適",
    "en_def": "feeling a little ill",
    "sentence": "I felt a bit {{BLANK}} this morning, so I stayed at home and drank lots of warm water.",
    "cn": "我今天早上覺得有點身體不適,所以我待在家裡喝了很多溫水。"
  },
  {
    "word": "as fit as a fiddle",
    "pos": "adj.phr.",
    "cn_def": "非常健康;身體硬朗",
    "en_def": "very healthy and strong",
    "sentence": "My grandfather is eighty-five, but he is still {{BLANK}} because he swims every morning.",
    "cn": "我爺爺八十五歲了,但他仍然身體硬朗,因為他每天早上都去游泳。"
  },
  {
    "word": "an apple a day keeps the doctor away",
    "pos": "phr.",
    "cn_def": "一天一蘋果,醫生遠離我",
    "en_def": "eating healthy food keeps you from getting ill",
    "sentence": "My mother always puts fruit in my lunch box, because she believes that {{BLANK}}.",
    "cn": "我媽媽總是在我的便當盒裡放水果,因為她相信一天一蘋果,醫生遠離我。"
  },
  {
    "word": "prevention is better than cure",
    "pos": "phr.",
    "cn_def": "預防勝於治療",
    "en_def": "it is better to stop a problem than to fix it later",
    "sentence": "The school nurse reminds us that {{BLANK}}, so she teaches us to wash our hands properly.",
    "cn": "學校護理師提醒我們預防勝於治療,所以她教我們正確地洗手。"
  },
  {
    "word": "on the mend",
    "pos": "adj.phr.",
    "cn_def": "逐漸康復",
    "en_def": "getting better after an illness or injury",
    "sentence": "Grandma had a bad fall last month, but she is {{BLANK}} now and can walk around the house again.",
    "cn": "奶奶上個月重重摔了一跤,但她現在正逐漸康復,又能在家裡走動了。"
  },
  {
    "word": "a clean bill of health",
    "pos": "n.phr.",
    "cn_def": "健康證明;一切健康的診斷",
    "en_def": "a report saying that someone is healthy",
    "sentence": "After a full check-up, the doctor gave my father {{BLANK}}, so we celebrated with a family dinner.",
    "cn": "做完全面健康檢查後,醫生說我爸爸一切健康,所以我們全家吃了一頓晚餐慶祝。"
  },
  {
    "word": "back on one's feet",
    "pos": "adj.phr.",
    "cn_def": "恢復健康;重新站起來",
    "en_def": "healthy or active again after an illness",
    "sentence": "It took my aunt three months after the operation, but she is finally {{BLANK}} and has returned to work.",
    "cn": "我阿姨手術後花了三個月,但她終於恢復健康,已經回去上班了。"
  },
  {
    "word": "take a turn for the worse",
    "pos": "v.phr.",
    "cn_def": "病情惡化",
    "en_def": "to suddenly become more ill",
    "sentence": "My grandfather's condition {{BLANK}} last night, so the whole family rushed to the hospital.",
    "cn": "我爺爺的病情昨晚突然惡化,所以全家人急忙趕到醫院。"
  },
  {
    "word": "over the hill",
    "pos": "adj.phr.",
    "cn_def": "過了巔峰;年紀大了",
    "en_def": "too old to do something well (informal)",
    "sentence": "My dad joked that he was {{BLANK}} at fifty, but then he ran his first marathon the next year.",
    "cn": "我爸爸開玩笑說他五十歲就已經過了巔峰,但隔年他就跑完了人生第一場馬拉松。"
  },
  {
    "word": "get on in years",
    "pos": "v.phr.",
    "cn_def": "上了年紀",
    "en_def": "to become old",
    "sentence": "My grandparents are {{BLANK}}, so we moved them to a flat with a lift last summer.",
    "cn": "我的祖父母上了年紀,所以我們去年夏天幫他們搬到一間有電梯的公寓。"
  },
  {
    "word": "age is just a number",
    "pos": "phr.",
    "cn_def": "年齡只是個數字",
    "en_def": "you can be active and happy at any age",
    "sentence": "My seventy-year-old neighbour started learning the guitar, and she says that {{BLANK}}.",
    "cn": "我七十歲的鄰居開始學吉他,她說年齡只是個數字。"
  },
  {
    "word": "come down with",
    "pos": "v.phr.",
    "cn_def": "染上(疾病)",
    "en_def": "to start to have an illness",
    "sentence": "Half of my class {{BLANK}} the flu last week, so the teacher postponed the test.",
    "cn": "我們班上週有一半的人染上了流感,所以老師把考試延期了。"
  },
  {
    "word": "the picture of health",
    "pos": "n.phr.",
    "cn_def": "健康的典範;看起來非常健康",
    "en_def": "a person who looks very healthy",
    "sentence": "After a month in the countryside, my uncle looked like {{BLANK}}, and his skin was brown from the sun.",
    "cn": "在鄉下待了一個月後,我叔叔看起來非常健康,皮膚也被太陽曬成了古銅色。"
  },
  {
    "word": "a bitter pill to swallow",
    "pos": "n.phr.",
    "cn_def": "難以接受的事實",
    "en_def": "an unpleasant fact that you must accept",
    "sentence": "Being told to stop playing football because of his knee was {{BLANK}}, but he became a coach instead.",
    "cn": "因為膝蓋問題被告知不能再踢足球,對他來說是難以接受的事實,但他後來改當教練。"
  },
  {
    "word": "laughter is the best medicine",
    "pos": "phr.",
    "cn_def": "笑是最好的良藥",
    "en_def": "laughing helps you feel better",
    "sentence": "The volunteers tell jokes to the children in hospital, because they believe {{BLANK}}.",
    "cn": "志工們對住院的孩子們講笑話,因為他們相信笑是最好的良藥。"
  },
  {
    "word": "a new lease of life",
    "pos": "n.phr.",
    "cn_def": "重獲新生;煥然一新",
    "en_def": "a chance to be active and happy again",
    "sentence": "The hip operation gave my grandmother {{BLANK}}, and now she goes dancing twice a week.",
    "cn": "髖關節手術讓我奶奶重獲新生,現在她每週去跳舞兩次。"
  },
  {
    "word": "flatten the curve",
    "pos": "v.phr.",
    "cn_def": "使疫情曲線趨緩",
    "en_def": "to slow the spread of a disease so hospitals can cope",
    "sentence": "Everyone stayed at home to help {{BLANK}}, so the hospitals had enough beds for the sickest patients.",
    "cn": "每個人都待在家裡協助讓疫情曲線趨緩,所以醫院有足夠的病床給最嚴重的病人。"
  },
  {
    "word": "kick the habit",
    "pos": "v.phr.",
    "cn_def": "戒掉惡習",
    "en_def": "to stop doing something harmful, such as smoking",
    "sentence": "My uncle smoked for thirty years, but he finally {{BLANK}} when his first grandchild was born.",
    "cn": "我叔叔抽了三十年菸,但在第一個孫子出生時終於戒掉了這個惡習。"
  },
  {
    "word": "pull through",
    "pos": "v.phr.",
    "cn_def": "度過難關;康復",
    "en_def": "to recover from a serious illness",
    "sentence": "The doctors were not sure he would survive the accident, but he {{BLANK}} and left hospital in May.",
    "cn": "醫生們不確定他能否撐過那場車禍,但他度過了難關,並在五月出院。"
  },
  {
    "word": "young at heart",
    "pos": "adj.phr.",
    "cn_def": "心態年輕",
    "en_def": "feeling and acting young although you are old",
    "sentence": "My grandmother is eighty but very {{BLANK}}, so she loves trying new games with her grandchildren.",
    "cn": "我奶奶八十歲了但心態非常年輕,所以她喜歡和孫子們一起嘗試新遊戲。"
  }
];

const MCQS = [
  {
    "q": "I felt a bit _____ this morning, so I stayed at home and drank lots of warm water.",
    "options": [
      "back on one's feet",
      "under the weather",
      "on the mend",
      "as fit as a fiddle"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "My grandfather is eighty-five, but he is still _____ because he swims every morning.",
    "options": [
      "over the hill",
      "young at heart",
      "under the weather",
      "as fit as a fiddle"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "My mother always puts fruit in my lunch box, because she believes that _____.",
    "options": [
      "an apple a day keeps the doctor away",
      "prevention is better than cure",
      "age is just a number",
      "laughter is the best medicine"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The school nurse reminds us that _____, so she teaches us to wash our hands properly.",
    "options": [
      "laughter is the best medicine",
      "age is just a number",
      "prevention is better than cure",
      "an apple a day keeps the doctor away"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Grandma had a bad fall last month, but she is _____ now and can walk around the house again.",
    "options": [
      "over the hill",
      "on the mend",
      "as fit as a fiddle",
      "back on one's feet"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "After a full check-up, the doctor gave my father _____, so we celebrated with a family dinner.",
    "options": [
      "home care",
      "hand sanitiser",
      "a clean bill of health",
      "runny nose"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "It took my aunt three months after the operation, but she is finally _____ and has returned to work.",
    "options": [
      "back on one's feet",
      "on the mend",
      "over the hill",
      "young at heart"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "My grandfather's condition _____ last night, so the whole family rushed to the hospital.",
    "options": [
      "get on in years",
      "pull through",
      "flatten the curve",
      "take a turn for the worse"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "My dad joked that he was _____ at fifty, but then he ran his first marathon the next year.",
    "options": [
      "young at heart",
      "over the hill",
      "back on one's feet",
      "under the weather"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "My grandparents are _____, so we moved them to a flat with a lift last summer.",
    "options": [
      "get on in years",
      "flatten the curve",
      "kick the habit",
      "come down with"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "My seventy-year-old neighbour started learning the guitar, and she says that _____.",
    "options": [
      "an apple a day keeps the doctor away",
      "laughter is the best medicine",
      "prevention is better than cure",
      "age is just a number"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Half of my class _____ the flu last week, so the teacher postponed the test.",
    "options": [
      "get on in years",
      "flatten the curve",
      "come down with",
      "take a turn for the worse"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "After a month in the countryside, my uncle looked like _____, and his skin was brown from the sun.",
    "options": [
      "the picture of health",
      "step count",
      "heart attack",
      "eye drops"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Being told to stop playing football because of his knee was _____, but he became a coach instead.",
    "options": [
      "grey hair",
      "a bitter pill to swallow",
      "health insurance",
      "vaccine hesitancy"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The volunteers tell jokes to the children in hospital, because they believe _____.",
    "options": [
      "an apple a day keeps the doctor away",
      "prevention is better than cure",
      "laughter is the best medicine",
      "age is just a number"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The hip operation gave my grandmother _____, and now she goes dancing twice a week.",
    "options": [
      "sleep deprivation",
      "health inequality",
      "healthy eating",
      "a new lease of life"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Everyone stayed at home to help _____, so the hospitals had enough beds for the sickest patients.",
    "options": [
      "take a turn for the worse",
      "get on in years",
      "flatten the curve",
      "kick the habit"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "My uncle smoked for thirty years, but he finally _____ when his first grandchild was born.",
    "options": [
      "come down with",
      "kick the habit",
      "flatten the curve",
      "pull through"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The doctors were not sure he would survive the accident, but he _____ and left hospital in May.",
    "options": [
      "take a turn for the worse",
      "flatten the curve",
      "come down with",
      "pull through"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "My grandmother is eighty but very _____, so she loves trying new games with her grandchildren.",
    "options": [
      "young at heart",
      "under the weather",
      "over the hill",
      "as fit as a fiddle"
    ],
    "answer": 0,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "under the weather": {
    "pos": "adj.phr.",
    "en_def": "feeling a little ill",
    "cn_def": "身體不適"
  },
  "as fit as a fiddle": {
    "pos": "adj.phr.",
    "en_def": "very healthy and strong",
    "cn_def": "非常健康;身體硬朗"
  },
  "an apple a day keeps the doctor away": {
    "pos": "phr.",
    "en_def": "eating healthy food keeps you from getting ill",
    "cn_def": "一天一蘋果,醫生遠離我"
  },
  "prevention is better than cure": {
    "pos": "phr.",
    "en_def": "it is better to stop a problem than to fix it later",
    "cn_def": "預防勝於治療"
  },
  "on the mend": {
    "pos": "adj.phr.",
    "en_def": "getting better after an illness or injury",
    "cn_def": "逐漸康復"
  },
  "a clean bill of health": {
    "pos": "n.phr.",
    "en_def": "a report saying that someone is healthy",
    "cn_def": "健康證明;一切健康的診斷"
  },
  "back on one's feet": {
    "pos": "adj.phr.",
    "en_def": "healthy or active again after an illness",
    "cn_def": "恢復健康;重新站起來"
  },
  "take a turn for the worse": {
    "pos": "v.phr.",
    "en_def": "to suddenly become more ill",
    "cn_def": "病情惡化"
  },
  "over the hill": {
    "pos": "adj.phr.",
    "en_def": "too old to do something well (informal)",
    "cn_def": "過了巔峰;年紀大了"
  },
  "get on in years": {
    "pos": "v.phr.",
    "en_def": "to become old",
    "cn_def": "上了年紀"
  },
  "age is just a number": {
    "pos": "phr.",
    "en_def": "you can be active and happy at any age",
    "cn_def": "年齡只是個數字"
  },
  "come down with": {
    "pos": "v.phr.",
    "en_def": "to start to have an illness",
    "cn_def": "染上(疾病)"
  },
  "the picture of health": {
    "pos": "n.phr.",
    "en_def": "a person who looks very healthy",
    "cn_def": "健康的典範;看起來非常健康"
  },
  "a bitter pill to swallow": {
    "pos": "n.phr.",
    "en_def": "an unpleasant fact that you must accept",
    "cn_def": "難以接受的事實"
  },
  "laughter is the best medicine": {
    "pos": "phr.",
    "en_def": "laughing helps you feel better",
    "cn_def": "笑是最好的良藥"
  },
  "a new lease of life": {
    "pos": "n.phr.",
    "en_def": "a chance to be active and happy again",
    "cn_def": "重獲新生;煥然一新"
  },
  "flatten the curve": {
    "pos": "v.phr.",
    "en_def": "to slow the spread of a disease so hospitals can cope",
    "cn_def": "使疫情曲線趨緩"
  },
  "kick the habit": {
    "pos": "v.phr.",
    "en_def": "to stop doing something harmful, such as smoking",
    "cn_def": "戒掉惡習"
  },
  "pull through": {
    "pos": "v.phr.",
    "en_def": "to recover from a serious illness",
    "cn_def": "度過難關;康復"
  },
  "young at heart": {
    "pos": "adj.phr.",
    "en_def": "feeling and acting young although you are old",
    "cn_def": "心態年輕"
  },
  "home care": {
    "pos": "n.phr.",
    "en_def": "care given to people in their own homes",
    "cn_def": "居家照護"
  },
  "hand sanitiser": {
    "pos": "n.phr.",
    "en_def": "a liquid that kills germs on your hands without water",
    "cn_def": "乾洗手液"
  },
  "runny nose": {
    "pos": "n.phr.",
    "en_def": "a nose with liquid coming out because of a cold",
    "cn_def": "流鼻水"
  },
  "step count": {
    "pos": "n.phr.",
    "en_def": "the number of steps you walk in a day",
    "cn_def": "步數"
  },
  "heart attack": {
    "pos": "n.phr.",
    "en_def": "a sudden serious problem when blood stops reaching the heart",
    "cn_def": "心臟病發作"
  },
  "eye drops": {
    "pos": "n.phr.",
    "en_def": "liquid medicine that you put into your eyes",
    "cn_def": "眼藥水"
  },
  "grey hair": {
    "pos": "n.phr.",
    "en_def": "hair that has lost its colour with age",
    "cn_def": "白髮"
  },
  "health insurance": {
    "pos": "n.phr.",
    "en_def": "a system that pays for medical care",
    "cn_def": "健康保險"
  },
  "vaccine hesitancy": {
    "pos": "n.phr.",
    "en_def": "unwillingness or delay in getting vaccinated",
    "cn_def": "疫苗猶豫"
  },
  "sleep deprivation": {
    "pos": "n.phr.",
    "en_def": "not getting enough sleep",
    "cn_def": "睡眠不足"
  },
  "health inequality": {
    "pos": "n.phr.",
    "en_def": "unfair differences in health between groups of people",
    "cn_def": "健康不平等"
  },
  "healthy eating": {
    "pos": "n.phr.",
    "en_def": "choosing food that is good for your body",
    "cn_def": "健康飲食"
  }
};

const EXTRA_GLOSSES = {};
