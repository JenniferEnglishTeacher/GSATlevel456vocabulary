// Topic 5 Subunit 16 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T05 S16 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "under pressure",
    "pos": "adj.phr.",
    "cn_def": "承受壓力",
    "en_def": "feeling stressed because of demands",
    "sentence": "Many students perform badly {{BLANK}}, so teachers give them practice tests to make the real exam feel familiar.",
    "cn": "許多學生在壓力下表現不佳,所以老師讓他們做模擬考,使正式考試感覺比較熟悉。"
  },
  {
    "word": "stressed out",
    "pos": "adj.phr.",
    "cn_def": "壓力很大的",
    "en_def": "very worried and tense",
    "sentence": "I was so {{BLANK}} before my final exams that I could not sleep, so my mum made me a cup of warm milk.",
    "cn": "期末考前我壓力大到睡不著,所以媽媽幫我泡了一杯熱牛奶。"
  },
  {
    "word": "burn the midnight oil",
    "pos": "v.phr.",
    "cn_def": "熬夜工作或讀書",
    "en_def": "to work or study late at night",
    "sentence": "Jason had to {{BLANK}} to finish his project, and he looked very tired in class the next morning.",
    "cn": "傑森必須熬夜苦讀才能完成他的專題,隔天早上他在課堂上看起來非常疲倦。"
  },
  {
    "word": "keep one's cool",
    "pos": "v.phr.",
    "cn_def": "保持冷靜",
    "en_def": "to stay calm in a difficult situation",
    "sentence": "The pilot {{BLANK}} when the engine failed, and she landed the plane safely in a nearby field.",
    "cn": "引擎故障時那位機長保持冷靜,並把飛機安全降落在附近的田野上。"
  },
  {
    "word": "lose one's temper",
    "pos": "v.phr.",
    "cn_def": "發脾氣",
    "en_def": "to suddenly become very angry",
    "sentence": "My father rarely {{BLANK}}, but he shouted when my brother broke the window for the second time.",
    "cn": "我爸爸很少發脾氣,但我弟弟第二次打破窗戶時他大吼了。"
  },
  {
    "word": "put off",
    "pos": "v.phr.",
    "cn_def": "拖延;延後",
    "en_def": "to delay doing something",
    "sentence": "I always {{BLANK}} cleaning my room until the weekend, and by then it is so messy that it takes hours.",
    "cn": "我總是把打掃房間拖延到週末,到那時房間亂到要花好幾個小時才能整理好。"
  },
  {
    "word": "let off steam",
    "pos": "v.phr.",
    "cn_def": "發洩情緒或精力",
    "en_def": "to release strong feelings or energy",
    "sentence": "After a long day of exams, the students played basketball to {{BLANK}}, and they all felt better afterwards.",
    "cn": "經過一整天的考試,學生們打籃球來發洩情緒,之後大家都覺得好多了。"
  },
  {
    "word": "bite off more than one can chew",
    "pos": "v.phr.",
    "cn_def": "貪多嚼不爛;不自量力",
    "en_def": "to try to do more than you are able to",
    "sentence": "Lucy joined four clubs this term, but she {{BLANK}}, so she quit two of them.",
    "cn": "露西這學期參加了四個社團,但她貪多嚼不爛,所以退出了其中兩個。"
  },
  {
    "word": "sit on the fence",
    "pos": "v.phr.",
    "cn_def": "保持中立;騎牆觀望",
    "en_def": "to avoid choosing between two sides",
    "sentence": "You can't {{BLANK}} forever, because the team needs your vote before we can start the project.",
    "cn": "你不能永遠騎牆觀望,因為我們開始專題之前,團隊需要你投下一票。"
  },
  {
    "word": "make up one's mind",
    "pos": "v.phr.",
    "cn_def": "下定決心;做決定",
    "en_def": "to decide",
    "sentence": "I couldn't {{BLANK}} about which dress to buy, so I asked my sister to choose for me.",
    "cn": "我無法決定要買哪件洋裝,所以我請姊姊幫我選。"
  },
  {
    "word": "sleep on it",
    "pos": "v.phr.",
    "cn_def": "考慮一晚再決定",
    "en_def": "to wait until the next day before deciding",
    "sentence": "The job offer sounded exciting, but my mother told me to {{BLANK}} before I gave the company an answer.",
    "cn": "那份工作邀約聽起來很令人興奮,但媽媽叫我先考慮一晚再給公司答覆。"
  },
  {
    "word": "go with one's gut",
    "pos": "v.phr.",
    "cn_def": "憑直覺行事",
    "en_def": "to make a decision based on feelings",
    "sentence": "When you are not sure of an answer, it is often best to {{BLANK}}, because your first idea is usually right.",
    "cn": "當你不確定答案時,憑直覺通常是最好的,因為你的第一個想法往往是對的。"
  },
  {
    "word": "have second thoughts",
    "pos": "v.phr.",
    "cn_def": "改變主意;猶豫",
    "en_def": "to start to doubt a decision",
    "sentence": "Mark agreed to sing at the concert, but he began to {{BLANK}} when he saw how big the audience was.",
    "cn": "馬克答應在音樂會上唱歌,但當他看到觀眾有多少時,他開始猶豫要不要改變主意。"
  },
  {
    "word": "jump to conclusions",
    "pos": "v.phr.",
    "cn_def": "妄下結論",
    "en_def": "to decide something is true too quickly",
    "sentence": "Don't {{BLANK}} when a friend does not reply quickly, because they may simply be busy with homework.",
    "cn": "朋友沒有很快回覆時不要妄下結論,因為他們可能只是在忙作業。"
  },
  {
    "word": "go the extra mile",
    "pos": "v.phr.",
    "cn_def": "加倍努力;多付出一些",
    "en_def": "to make more effort than is expected",
    "sentence": "Our English teacher always {{BLANK}} for her students, and she even stays after school to answer questions.",
    "cn": "我們的英文老師總是為學生加倍付出,她甚至放學後留下來回答問題。"
  },
  {
    "word": "light at the end of the tunnel",
    "pos": "n.phr.",
    "cn_def": "黑暗盡頭的曙光;苦盡甘來的希望",
    "en_def": "a sign that a difficult time will end soon",
    "sentence": "Exams finish next Friday, so we can finally see the {{BLANK}}, and we are planning a party.",
    "cn": "考試下週五結束,所以我們終於看到了隧道盡頭的曙光,我們正在計畫辦派對。"
  },
  {
    "word": "take it easy",
    "pos": "v.phr.",
    "cn_def": "放輕鬆;別太累",
    "en_def": "to relax and not work too hard",
    "sentence": "The doctor told my mother to {{BLANK}} for a week, so we all helped with the cooking and cleaning.",
    "cn": "醫生叫我媽媽好好休息一週,所以我們大家都幫忙煮飯和打掃。"
  },
  {
    "word": "a weight off one's shoulders",
    "pos": "n.phr.",
    "cn_def": "如釋重負",
    "en_def": "relief from a worry or responsibility",
    "sentence": "Handing in my final report was {{BLANK}}, and I slept for ten hours that night.",
    "cn": "交出期末報告讓我如釋重負,那天晚上我睡了十個小時。"
  },
  {
    "word": "get cold feet",
    "pos": "v.phr.",
    "cn_def": "臨陣退縮",
    "en_def": "to suddenly feel too nervous to do something you planned",
    "sentence": "Tina planned to try out for the school play, but she {{BLANK}} at the last moment and stayed home.",
    "cn": "蒂娜原本打算參加學校話劇的試鏡,但她在最後一刻臨陣退縮,待在家裡。"
  },
  {
    "word": "at the end of one's tether",
    "pos": "adj.phr.",
    "cn_def": "束手無策;忍無可忍",
    "en_def": "so tired or upset that you cannot cope any more",
    "sentence": "After a week of noisy neighbours and little sleep, I was {{BLANK}}, so I asked them politely to be quiet.",
    "cn": "經過一週吵鬧的鄰居和很少的睡眠,我已經忍無可忍,所以我禮貌地請他們安靜一點。"
  }
];

const MCQS = [
  {
    "q": "Many students perform badly _____, so teachers give them practice tests to make the real exam feel familiar.",
    "options": [
      "to-do list",
      "under pressure",
      "light at the end of the tunnel",
      "take it easy"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "I was so _____ before my final exams that I could not sleep, so my mum made me a cup of warm milk.",
    "options": [
      "peer pressure",
      "get cold feet",
      "stressed out",
      "make up one's mind"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Jason had to _____ to finish his project, and he looked very tired in class the next morning.",
    "options": [
      "burn the midnight oil",
      "keep one's cool",
      "bite off more than one can chew",
      "let off steam"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The pilot _____ when the engine failed, and she landed the plane safely in a nearby field.",
    "options": [
      "burn the midnight oil",
      "bite off more than one can chew",
      "put off",
      "keep one's cool"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "My father rarely _____, but he shouted when my brother broke the window for the second time.",
    "options": [
      "let off steam",
      "lose one's temper",
      "get cold feet",
      "jump to conclusions"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "I always _____ cleaning my room until the weekend, and by then it is so messy that it takes hours.",
    "options": [
      "put off",
      "let off steam",
      "sleep on it",
      "bite off more than one can chew"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "After a long day of exams, the students played basketball to _____, and they all felt better afterwards.",
    "options": [
      "keep one's cool",
      "go the extra mile",
      "go with one's gut",
      "let off steam"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Lucy joined four clubs this term, but she _____, so she quit two of them.",
    "options": [
      "make up one's mind",
      "go the extra mile",
      "bite off more than one can chew",
      "have second thoughts"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "You can't _____ forever, because the team needs your vote before we can start the project.",
    "options": [
      "lose one's temper",
      "sit on the fence",
      "put off",
      "sleep on it"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "I couldn't _____ about which dress to buy, so I asked my sister to choose for me.",
    "options": [
      "take it easy",
      "bite off more than one can chew",
      "make up one's mind",
      "go the extra mile"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The job offer sounded exciting, but my mother told me to _____ before I gave the company an answer.",
    "options": [
      "sleep on it",
      "have second thoughts",
      "get cold feet",
      "burn the midnight oil"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "When you are not sure of an answer, it is often best to _____, because your first idea is usually right.",
    "options": [
      "sit on the fence",
      "have second thoughts",
      "lose one's temper",
      "go with one's gut"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Mark agreed to sing at the concert, but he began to _____ when he saw how big the audience was.",
    "options": [
      "lose one's temper",
      "go the extra mile",
      "have second thoughts",
      "keep one's cool"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Don't _____ when a friend does not reply quickly, because they may simply be busy with homework.",
    "options": [
      "get cold feet",
      "jump to conclusions",
      "bite off more than one can chew",
      "let off steam"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Our English teacher always _____ for her students, and she even stays after school to answer questions.",
    "options": [
      "go the extra mile",
      "make up one's mind",
      "burn the midnight oil",
      "sit on the fence"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Exams finish next Friday, so we can finally see the _____, and we are planning a party.",
    "options": [
      "deep breathing",
      "blood pressure",
      "immune system",
      "light at the end of the tunnel"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The doctor told my mother to _____ for a week, so we all helped with the cooking and cleaning.",
    "options": [
      "keep one's cool",
      "take it easy",
      "sit on the fence",
      "have second thoughts"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Handing in my final report was _____, and I slept for ten hours that night.",
    "options": [
      "blood pressure",
      "deep breathing",
      "peer pressure",
      "a weight off one's shoulders"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Tina planned to try out for the school play, but she _____ at the last moment and stayed home.",
    "options": [
      "keep one's cool",
      "sit on the fence",
      "get cold feet",
      "burn the midnight oil"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "After a week of noisy neighbours and little sleep, I was _____, so I asked them politely to be quiet.",
    "options": [
      "at the end of one's tether",
      "sunk cost",
      "make up one's mind",
      "under pressure"
    ],
    "answer": 0,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "under pressure": {
    "pos": "adj.phr.",
    "en_def": "feeling stressed because of demands",
    "cn_def": "承受壓力"
  },
  "stressed out": {
    "pos": "adj.phr.",
    "en_def": "very worried and tense",
    "cn_def": "壓力很大的"
  },
  "burn the midnight oil": {
    "pos": "v.phr.",
    "en_def": "to work or study late at night",
    "cn_def": "熬夜工作或讀書"
  },
  "keep one's cool": {
    "pos": "v.phr.",
    "en_def": "to stay calm in a difficult situation",
    "cn_def": "保持冷靜"
  },
  "lose one's temper": {
    "pos": "v.phr.",
    "en_def": "to suddenly become very angry",
    "cn_def": "發脾氣"
  },
  "put off": {
    "pos": "v.phr.",
    "en_def": "to delay doing something",
    "cn_def": "拖延;延後"
  },
  "let off steam": {
    "pos": "v.phr.",
    "en_def": "to release strong feelings or energy",
    "cn_def": "發洩情緒或精力"
  },
  "bite off more than one can chew": {
    "pos": "v.phr.",
    "en_def": "to try to do more than you are able to",
    "cn_def": "貪多嚼不爛;不自量力"
  },
  "sit on the fence": {
    "pos": "v.phr.",
    "en_def": "to avoid choosing between two sides",
    "cn_def": "保持中立;騎牆觀望"
  },
  "make up one's mind": {
    "pos": "v.phr.",
    "en_def": "to decide",
    "cn_def": "下定決心;做決定"
  },
  "sleep on it": {
    "pos": "v.phr.",
    "en_def": "to wait until the next day before deciding",
    "cn_def": "考慮一晚再決定"
  },
  "go with one's gut": {
    "pos": "v.phr.",
    "en_def": "to make a decision based on feelings",
    "cn_def": "憑直覺行事"
  },
  "have second thoughts": {
    "pos": "v.phr.",
    "en_def": "to start to doubt a decision",
    "cn_def": "改變主意;猶豫"
  },
  "jump to conclusions": {
    "pos": "v.phr.",
    "en_def": "to decide something is true too quickly",
    "cn_def": "妄下結論"
  },
  "go the extra mile": {
    "pos": "v.phr.",
    "en_def": "to make more effort than is expected",
    "cn_def": "加倍努力;多付出一些"
  },
  "light at the end of the tunnel": {
    "pos": "n.phr.",
    "en_def": "a sign that a difficult time will end soon",
    "cn_def": "黑暗盡頭的曙光;苦盡甘來的希望"
  },
  "take it easy": {
    "pos": "v.phr.",
    "en_def": "to relax and not work too hard",
    "cn_def": "放輕鬆;別太累"
  },
  "a weight off one's shoulders": {
    "pos": "n.phr.",
    "en_def": "relief from a worry or responsibility",
    "cn_def": "如釋重負"
  },
  "get cold feet": {
    "pos": "v.phr.",
    "en_def": "to suddenly feel too nervous to do something you planned",
    "cn_def": "臨陣退縮"
  },
  "at the end of one's tether": {
    "pos": "adj.phr.",
    "en_def": "so tired or upset that you cannot cope any more",
    "cn_def": "束手無策;忍無可忍"
  },
  "to-do list": {
    "pos": "n.phr.",
    "en_def": "a list of tasks you need to do",
    "cn_def": "待辦清單"
  },
  "peer pressure": {
    "pos": "n.phr.",
    "en_def": "influence from friends to act like them",
    "cn_def": "同儕壓力"
  },
  "deep breathing": {
    "pos": "n.phr.",
    "en_def": "taking slow, full breaths to calm down",
    "cn_def": "深呼吸"
  },
  "blood pressure": {
    "pos": "n.phr.",
    "en_def": "the force of blood moving through your body",
    "cn_def": "血壓"
  },
  "immune system": {
    "pos": "n.phr.",
    "en_def": "the parts of the body that fight illness",
    "cn_def": "免疫系統"
  },
  "sunk cost": {
    "pos": "n.phr.",
    "en_def": "money or time already spent that cannot be recovered",
    "cn_def": "沉沒成本"
  }
};

const EXTRA_GLOSSES = {};
