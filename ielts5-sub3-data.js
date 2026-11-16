// Topic 5 Subunit 3 Quiz Data: Coping & Self-Care 調適與自我照顧
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T05 S03 - Coping & Self-Care 調適與自我照顧",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "relaxation",
    "pos": "n.",
    "cn_def": "放鬆",
    "en_def": "the act of resting and becoming calm",
    "sentence": "Listening to soft music is my favourite form of {{BLANK}}, and it helps me fall asleep after a long day at school.",
    "cn": "聽輕音樂是我最喜歡的放鬆方式,它幫助我在學校忙碌一整天後入睡。"
  },
  {
    "word": "meditation",
    "pos": "n.",
    "cn_def": "冥想",
    "en_def": "sitting quietly and focusing your mind to feel calm",
    "sentence": "Our class tried ten minutes of {{BLANK}} before the test, and many students said they felt less nervous afterwards.",
    "cn": "我們班在考試前嘗試了十分鐘的冥想,許多同學說之後覺得比較不緊張了。"
  },
  {
    "word": "yoga",
    "pos": "n.",
    "cn_def": "瑜伽",
    "en_def": "exercises for the body and breathing that help you relax",
    "sentence": "My aunt started doing {{BLANK}} twice a week, and she says her back pain and stress have both improved.",
    "cn": "我阿姨開始每週做兩次瑜伽,她說她的背痛和壓力都改善了。"
  },
  {
    "word": "journaling",
    "pos": "n.",
    "cn_def": "寫日記;寫心情筆記",
    "en_def": "writing about your thoughts and feelings regularly",
    "sentence": "Daily {{BLANK}} helps Amy understand her feelings, because writing them down makes her problems seem smaller.",
    "cn": "每天寫心情日記幫助艾咪了解自己的感受,因為把感受寫下來讓她的問題顯得比較小。"
  },
  {
    "word": "hobby",
    "pos": "n.",
    "cn_def": "嗜好",
    "en_def": "an activity you enjoy in your free time",
    "sentence": "Painting is a relaxing {{BLANK}} for my father, and he often paints on Sunday mornings to forget about work.",
    "cn": "畫畫是我爸爸很放鬆的嗜好,他常在星期天早上畫畫來忘掉工作。"
  },
  {
    "word": "workout",
    "pos": "n.",
    "cn_def": "運動;健身",
    "en_def": "a session of physical exercise",
    "sentence": "A short {{BLANK}} after school gives me more energy, so I can concentrate better when I do my homework.",
    "cn": "放學後短暫的運動給我更多精力,所以我寫作業時能更專心。"
  },
  {
    "word": "nap",
    "pos": "n.",
    "cn_def": "小睡;午睡",
    "en_def": "a short sleep during the day",
    "sentence": "A twenty-minute {{BLANK}} after lunch can refresh your brain, but sleeping too long may make you feel more tired.",
    "cn": "午餐後二十分鐘的小睡可以讓大腦恢復精神,但睡太久可能會讓你更累。"
  },
  {
    "word": "deep breathing",
    "pos": "n.phr.",
    "cn_def": "深呼吸",
    "en_def": "taking slow, full breaths to calm down",
    "sentence": "The nurse taught the children {{BLANK}} before their injections, and most of them stayed calm and did not cry.",
    "cn": "護理師在打針前教孩子們深呼吸,大部分的孩子都保持冷靜沒有哭。"
  },
  {
    "word": "self-care",
    "pos": "n.",
    "cn_def": "自我照顧",
    "en_def": "things you do to protect your own health and happiness",
    "sentence": "Getting enough sleep is an important part of {{BLANK}}, but many busy students ignore it during exam week.",
    "cn": "睡眠充足是自我照顧的重要部分,但許多忙碌的學生在考試週會忽略它。"
  },
  {
    "word": "gratitude",
    "pos": "n.",
    "cn_def": "感恩;感激",
    "en_def": "the feeling of being thankful",
    "sentence": "Writing down three things you feel {{BLANK}} for each night can make you happier, and it only takes two minutes.",
    "cn": "每天晚上寫下三件讓你心懷感恩的事可以讓你更快樂,而且只需要兩分鐘。"
  },
  {
    "word": "positivity",
    "pos": "n.",
    "cn_def": "正面態度;正能量",
    "en_def": "a hopeful and cheerful attitude",
    "sentence": "Our coach is full of {{BLANK}}, so even after a loss, the team leaves practice feeling hopeful.",
    "cn": "我們的教練充滿正能量,所以即使輸了比賽,球隊練習結束時仍然充滿希望。"
  },
  {
    "word": "unwind",
    "pos": "v.",
    "cn_def": "放鬆",
    "en_def": "to relax after work or stress",
    "sentence": "After a busy week, my parents like to {{BLANK}} by watching a movie at home, and they turn off their phones.",
    "cn": "忙碌一週之後,我爸媽喜歡在家看電影來放鬆,而且他們會把手機關掉。",
    "alts": [
      "unwound"
    ]
  },
  {
    "word": "recharge",
    "pos": "v.",
    "cn_def": "恢復精力;充電",
    "en_def": "to get your energy back by resting",
    "sentence": "Weekend trips to the countryside help me {{BLANK}}, so I feel fresh and ready when Monday comes.",
    "cn": "週末到鄉下旅行幫助我恢復精力,所以星期一來臨時我感到神清氣爽、準備就緒。"
  },
  {
    "word": "vent",
    "pos": "v.",
    "cn_def": "發洩",
    "en_def": "to express strong feelings, especially anger",
    "sentence": "It is healthy to {{BLANK}} your feelings to a trusted friend, but shouting at strangers online is not a good idea.",
    "cn": "向信任的朋友發洩情緒是健康的,但在網路上對陌生人大吼並不是好主意。"
  },
  {
    "word": "confide",
    "pos": "v.",
    "cn_def": "吐露;傾訴",
    "en_def": "to tell someone a secret or private feeling",
    "sentence": "Many teenagers {{BLANK}} in their friends rather than their parents, because they worry that adults will not understand.",
    "cn": "許多青少年會向朋友而不是父母傾訴,因為他們擔心大人不會理解。"
  },
  {
    "word": "reassure",
    "pos": "v.",
    "cn_def": "使安心",
    "en_def": "to make someone feel less worried",
    "sentence": "The doctor {{BLANK}} my mother that the operation was simple, and she finally stopped worrying.",
    "cn": "醫生向我媽媽保證手術很簡單,讓她安心,她終於不再擔心了。"
  },
  {
    "word": "comfort",
    "pos": "v.",
    "cn_def": "安慰",
    "en_def": "to make someone feel better when they are sad",
    "sentence": "When Sarah failed her driving test, her friends {{BLANK}} her with ice cream and funny stories.",
    "cn": "莎拉駕照考試沒過時,她的朋友們用冰淇淋和好笑的故事安慰她。"
  },
  {
    "word": "soothe",
    "pos": "v.",
    "cn_def": "撫慰;使平靜",
    "en_def": "to make someone calm or less upset",
    "sentence": "The sound of the rain {{BLANK}} me, and I soon forgot about the argument I had with my brother.",
    "cn": "雨聲撫慰了我,我很快就忘了和哥哥的爭吵。"
  },
  {
    "word": "downtime",
    "pos": "n.",
    "cn_def": "休息時間;空閒時間",
    "en_def": "time when you rest and do not work",
    "sentence": "Students need some {{BLANK}} every day, because studying all the time can lead to stress and poor sleep.",
    "cn": "學生每天都需要一些休息時間,因為一直讀書會導致壓力和睡不好。"
  },
  {
    "word": "getaway",
    "pos": "n.",
    "cn_def": "短暫度假",
    "en_def": "a short holiday away from home",
    "sentence": "After the busy exam period, our family took a weekend {{BLANK}} to the beach, and we all came back relaxed.",
    "cn": "忙碌的考試期過後,我們家去海邊短暫度假了一個週末,大家回來時都很放鬆。"
  },
  {
    "word": "laughter",
    "pos": "n.",
    "cn_def": "笑聲;歡笑",
    "en_def": "the sound or act of laughing",
    "sentence": "They say {{BLANK}} is the best medicine, and watching a funny show with friends really does lower my stress.",
    "cn": "人家說歡笑是最好的良藥,而和朋友一起看搞笑節目真的能降低我的壓力。"
  },
  {
    "word": "socialise",
    "pos": "v.",
    "cn_def": "社交;與人交往",
    "en_def": "to spend time with other people for fun",
    "sentence": "Busy students should still {{BLANK}} with friends sometimes, because spending time with people they like reduces stress.",
    "cn": "忙碌的學生偶爾還是應該和朋友交際往來,因為和喜歡的人相處能減輕壓力。"
  },
  {
    "word": "outlet",
    "pos": "n.",
    "cn_def": "發洩管道;出口",
    "en_def": "a way to express feelings or use energy",
    "sentence": "Playing the drums is a great {{BLANK}} for my anger, and my neighbours are kind enough not to complain.",
    "cn": "打鼓是我宣洩怒氣很好的出口,而且我的鄰居們很好心沒有抱怨。"
  },
  {
    "word": "massage",
    "pos": "n.",
    "cn_def": "按摩",
    "en_def": "rubbing the body to relieve pain or stress",
    "sentence": "My shoulders were stiff after hours at the computer, so my sister gave me a short {{BLANK}}, and I felt much better.",
    "cn": "在電腦前好幾個小時之後我的肩膀很僵硬,所以姊姊幫我做了簡短的按摩,我感覺好多了。"
  },
  {
    "word": "helpline",
    "pos": "n.",
    "cn_def": "求助專線",
    "en_def": "a phone service that gives advice or support",
    "sentence": "If you feel very upset late at night, you can call a {{BLANK}}, and a trained person will listen to you.",
    "cn": "如果你深夜感到非常難過,可以打求助專線,會有受過訓練的人聽你說話。"
  }
];

const MCQS = [
  {
    "q": "Listening to soft music is my favourite form of _____, and it helps me fall asleep after a long day at school.",
    "options": [
      "avoidance",
      "therapist",
      "deadline",
      "relaxation"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Our class tried ten minutes of _____ before the test, and many students said they felt less nervous afterwards.",
    "options": [
      "meditation",
      "satisfaction",
      "shortcoming",
      "outlook"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "My aunt started doing _____ twice a week, and she says her back pain and stress have both improved.",
    "options": [
      "avoidance",
      "yoga",
      "overthinking",
      "embarrassment"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Daily _____ helps Amy understand her feelings, because writing them down makes her problems seem smaller.",
    "options": [
      "planner",
      "heartbeat",
      "journaling",
      "introvert"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Painting is a relaxing _____ for my father, and he often paints on Sunday mornings to forget about work.",
    "options": [
      "perfectionist",
      "outset",
      "dichotomy",
      "hobby"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "A short _____ after school gives me more energy, so I can concentrate better when I do my homework.",
    "options": [
      "workout",
      "embarrassment",
      "trade-off",
      "praise"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "A twenty-minute _____ after lunch can refresh your brain, but sleeping too long may make you feel more tired.",
    "options": [
      "variance",
      "nap",
      "encouragement",
      "satisfaction"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The nurse taught the children _____ before their injections, and most of them stayed calm and did not cry.",
    "options": [
      "loss aversion",
      "blood pressure",
      "deep breathing",
      "light at the end of the tunnel"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Getting enough sleep is an important part of _____, but many busy students ignore it during exam week.",
    "options": [
      "determination",
      "self-care",
      "fortitude",
      "checklist"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Writing down three things you feel _____ for each night can make you happier, and it only takes two minutes.",
    "options": [
      "self-belief",
      "tactic",
      "strain",
      "gratitude"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Our coach is full of _____, so even after a loss, the team leaves practice feeling hopeful.",
    "options": [
      "merit",
      "foresight",
      "positivity",
      "reasoning"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "After a busy week, my parents like to _____ by watching a movie at home, and they turn off their phones.",
    "options": [
      "unwind",
      "revert",
      "overrate",
      "enlighten"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Weekend trips to the countryside help me _____, so I feel fresh and ready when Monday comes.",
    "options": [
      "defer",
      "reproach",
      "dither",
      "recharge"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "It is healthy to _____ your feelings to a trusted friend, but shouting at strangers online is not a good idea.",
    "options": [
      "persuade",
      "subdue",
      "vent",
      "enlighten"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Many teenagers _____ in their friends rather than their parents, because they worry that adults will not understand.",
    "options": [
      "confide",
      "synthesise",
      "affirm",
      "expedite"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The doctor _____ my mother that the operation was simple, and she finally stopped worrying.",
    "options": [
      "relish",
      "reassure",
      "allude",
      "overwork"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "When Sarah failed her driving test, her friends _____ her with ice cream and funny stories.",
    "options": [
      "comfort",
      "ponder",
      "surmount",
      "regret"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The sound of the rain _____ me, and I soon forgot about the argument I had with my brother.",
    "options": [
      "commend",
      "reckon",
      "discourage",
      "soothe"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Students need some _____ every day, because studying all the time can lead to stress and poor sleep.",
    "options": [
      "strain",
      "encouragement",
      "downtime",
      "ambition"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "After the busy exam period, our family took a weekend _____ to the beach, and we all came back relaxed.",
    "options": [
      "cohesion",
      "getaway",
      "headache",
      "compulsion"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "They say _____ is the best medicine, and watching a funny show with friends really does lower my stress.",
    "options": [
      "decision",
      "groupthink",
      "laughter",
      "adversity"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Busy students should still _____ with friends sometimes, because spending time with people they like reduces stress.",
    "options": [
      "discourage",
      "embrace",
      "condone",
      "socialise"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Playing the drums is a great _____ for my anger, and my neighbours are kind enough not to complain.",
    "options": [
      "outlet",
      "intuition",
      "excuse",
      "tenacity"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "My shoulders were stiff after hours at the computer, so my sister gave me a short _____, and I felt much better.",
    "options": [
      "craving",
      "massage",
      "workload",
      "pulse"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "If you feel very upset late at night, you can call a _____, and a trained person will listen to you.",
    "options": [
      "migraine",
      "preference",
      "overthinking",
      "helpline"
    ],
    "answer": 3,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "relaxation": {
    "pos": "n.",
    "en_def": "the act of resting and becoming calm",
    "cn_def": "放鬆"
  },
  "meditation": {
    "pos": "n.",
    "en_def": "sitting quietly and focusing your mind to feel calm",
    "cn_def": "冥想"
  },
  "yoga": {
    "pos": "n.",
    "en_def": "exercises for the body and breathing that help you relax",
    "cn_def": "瑜伽"
  },
  "journaling": {
    "pos": "n.",
    "en_def": "writing about your thoughts and feelings regularly",
    "cn_def": "寫日記;寫心情筆記"
  },
  "hobby": {
    "pos": "n.",
    "en_def": "an activity you enjoy in your free time",
    "cn_def": "嗜好"
  },
  "workout": {
    "pos": "n.",
    "en_def": "a session of physical exercise",
    "cn_def": "運動;健身"
  },
  "nap": {
    "pos": "n.",
    "en_def": "a short sleep during the day",
    "cn_def": "小睡;午睡"
  },
  "deep breathing": {
    "pos": "n.phr.",
    "en_def": "taking slow, full breaths to calm down",
    "cn_def": "深呼吸"
  },
  "self-care": {
    "pos": "n.",
    "en_def": "things you do to protect your own health and happiness",
    "cn_def": "自我照顧"
  },
  "gratitude": {
    "pos": "n.",
    "en_def": "the feeling of being thankful",
    "cn_def": "感恩;感激"
  },
  "positivity": {
    "pos": "n.",
    "en_def": "a hopeful and cheerful attitude",
    "cn_def": "正面態度;正能量"
  },
  "unwind": {
    "pos": "v.",
    "en_def": "to relax after work or stress",
    "cn_def": "放鬆"
  },
  "recharge": {
    "pos": "v.",
    "en_def": "to get your energy back by resting",
    "cn_def": "恢復精力;充電"
  },
  "vent": {
    "pos": "v.",
    "en_def": "to express strong feelings, especially anger",
    "cn_def": "發洩"
  },
  "confide": {
    "pos": "v.",
    "en_def": "to tell someone a secret or private feeling",
    "cn_def": "吐露;傾訴"
  },
  "reassure": {
    "pos": "v.",
    "en_def": "to make someone feel less worried",
    "cn_def": "使安心"
  },
  "comfort": {
    "pos": "v.",
    "en_def": "to make someone feel better when they are sad",
    "cn_def": "安慰"
  },
  "soothe": {
    "pos": "v.",
    "en_def": "to make someone calm or less upset",
    "cn_def": "撫慰;使平靜"
  },
  "downtime": {
    "pos": "n.",
    "en_def": "time when you rest and do not work",
    "cn_def": "休息時間;空閒時間"
  },
  "getaway": {
    "pos": "n.",
    "en_def": "a short holiday away from home",
    "cn_def": "短暫度假"
  },
  "laughter": {
    "pos": "n.",
    "en_def": "the sound or act of laughing",
    "cn_def": "笑聲;歡笑"
  },
  "socialise": {
    "pos": "v.",
    "en_def": "to spend time with other people for fun",
    "cn_def": "社交;與人交往"
  },
  "outlet": {
    "pos": "n.",
    "en_def": "a way to express feelings or use energy",
    "cn_def": "發洩管道;出口"
  },
  "massage": {
    "pos": "n.",
    "en_def": "rubbing the body to relieve pain or stress",
    "cn_def": "按摩"
  },
  "helpline": {
    "pos": "n.",
    "en_def": "a phone service that gives advice or support",
    "cn_def": "求助專線"
  },
  "avoidance": {
    "pos": "n.",
    "en_def": "staying away from something you do not want to face",
    "cn_def": "逃避;迴避"
  },
  "therapist": {
    "pos": "n.",
    "en_def": "a person who helps people with mental or physical problems",
    "cn_def": "治療師"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "the latest time by which something must be finished",
    "cn_def": "截止期限"
  },
  "satisfaction": {
    "pos": "n.",
    "en_def": "a pleased feeling after you do or get what you wanted",
    "cn_def": "滿意;滿足感"
  },
  "shortcoming": {
    "pos": "n.",
    "en_def": "a weakness or fault",
    "cn_def": "缺點;短處"
  },
  "outlook": {
    "pos": "n.",
    "en_def": "a person's general attitude to life",
    "cn_def": "觀點;人生觀"
  },
  "overthinking": {
    "pos": "n.",
    "en_def": "thinking about something too much, in a way that is not helpful",
    "cn_def": "想太多;過度思考"
  },
  "embarrassment": {
    "pos": "n.",
    "en_def": "the feeling of being shy or uncomfortable in front of others",
    "cn_def": "尷尬"
  },
  "planner": {
    "pos": "n.",
    "en_def": "a small book for writing plans and dates",
    "cn_def": "計畫本;記事本"
  },
  "heartbeat": {
    "pos": "n.",
    "en_def": "the sound or movement of your heart",
    "cn_def": "心跳"
  },
  "introvert": {
    "pos": "n.",
    "en_def": "a quiet person who gets energy from being alone",
    "cn_def": "內向的人"
  },
  "perfectionist": {
    "pos": "n.",
    "en_def": "a person who wants everything to be perfect",
    "cn_def": "完美主義者"
  },
  "outset": {
    "pos": "n.",
    "en_def": "the start of something",
    "cn_def": "開始;開端"
  },
  "dichotomy": {
    "pos": "n.",
    "en_def": "a division between two opposite things",
    "cn_def": "二分法;對立"
  },
  "trade-off": {
    "pos": "n.",
    "en_def": "a balance between two things you cannot have together",
    "cn_def": "權衡;取捨"
  },
  "praise": {
    "pos": "n.",
    "en_def": "words that show you think someone did well",
    "cn_def": "讚美;稱讚"
  },
  "variance": {
    "pos": "n.",
    "en_def": "the amount by which things differ",
    "cn_def": "差異;變異"
  },
  "encouragement": {
    "pos": "n.",
    "en_def": "words or actions that give someone confidence",
    "cn_def": "鼓勵"
  },
  "loss aversion": {
    "pos": "n.phr.",
    "en_def": "the tendency to fear losing more than you enjoy winning",
    "cn_def": "損失規避"
  },
  "blood pressure": {
    "pos": "n.phr.",
    "en_def": "the force of blood moving through your body",
    "cn_def": "血壓"
  },
  "light at the end of the tunnel": {
    "pos": "n.phr.",
    "en_def": "a sign that a difficult time will end soon",
    "cn_def": "黑暗盡頭的曙光;苦盡甘來的希望"
  },
  "determination": {
    "pos": "n.",
    "en_def": "not giving up even when something is difficult",
    "cn_def": "決心"
  },
  "fortitude": {
    "pos": "n.",
    "en_def": "courage in pain or difficulty",
    "cn_def": "堅毅;剛毅"
  },
  "checklist": {
    "pos": "n.",
    "en_def": "a list of things to check or do",
    "cn_def": "檢查清單"
  },
  "self-belief": {
    "pos": "n.",
    "en_def": "confidence in your own abilities",
    "cn_def": "自信;相信自己"
  },
  "tactic": {
    "pos": "n.",
    "en_def": "a method used to achieve something",
    "cn_def": "策略;手法"
  },
  "strain": {
    "pos": "n.",
    "en_def": "a difficult situation that makes you tired or worried",
    "cn_def": "負擔;壓力"
  },
  "merit": {
    "pos": "n.",
    "en_def": "a good quality that deserves praise",
    "cn_def": "優點;價值"
  },
  "foresight": {
    "pos": "n.",
    "en_def": "the ability to plan for what will happen in the future",
    "cn_def": "先見之明;遠見"
  },
  "reasoning": {
    "pos": "n.",
    "en_def": "the process of thinking about something in a logical way",
    "cn_def": "推理;論證"
  },
  "revert": {
    "pos": "v.",
    "en_def": "to go back to a previous state or habit",
    "cn_def": "恢復;回到(原狀)"
  },
  "overrate": {
    "pos": "v.",
    "en_def": "to think something is better than it really is",
    "cn_def": "高估;評價過高"
  },
  "enlighten": {
    "pos": "v.",
    "en_def": "to give someone more knowledge or understanding",
    "cn_def": "啟發;使明白"
  },
  "defer": {
    "pos": "v.",
    "en_def": "to delay something until later",
    "cn_def": "延後;推遲"
  },
  "reproach": {
    "pos": "v.",
    "en_def": "to criticise someone, often gently",
    "cn_def": "責備"
  },
  "dither": {
    "pos": "v.",
    "en_def": "to be unable to decide what to do",
    "cn_def": "猶豫不決"
  },
  "persuade": {
    "pos": "v.",
    "en_def": "to make someone agree to do something by giving reasons",
    "cn_def": "說服"
  },
  "subdue": {
    "pos": "v.",
    "en_def": "to bring a strong feeling under control",
    "cn_def": "抑制;克制"
  },
  "synthesise": {
    "pos": "v.",
    "en_def": "to combine ideas or information into one",
    "cn_def": "綜合;整合"
  },
  "affirm": {
    "pos": "v.",
    "en_def": "to state that something is true; to support",
    "cn_def": "肯定;確認"
  },
  "expedite": {
    "pos": "v.",
    "en_def": "to make a process happen faster",
    "cn_def": "加快;促進"
  },
  "relish": {
    "pos": "v.",
    "en_def": "to enjoy something very much",
    "cn_def": "享受;喜愛"
  },
  "allude": {
    "pos": "v.",
    "en_def": "to mention something in an indirect way",
    "cn_def": "暗指;間接提到"
  },
  "overwork": {
    "pos": "v.",
    "en_def": "to work too hard or too long",
    "cn_def": "過度工作"
  },
  "ponder": {
    "pos": "v.",
    "en_def": "to think carefully about something for a long time",
    "cn_def": "沉思;仔細考慮"
  },
  "surmount": {
    "pos": "v.",
    "en_def": "to deal with a difficulty successfully",
    "cn_def": "克服"
  },
  "regret": {
    "pos": "v.",
    "en_def": "to feel sorry about something you did or did not do",
    "cn_def": "後悔"
  },
  "commend": {
    "pos": "v.",
    "en_def": "to praise someone formally",
    "cn_def": "表揚;稱讚"
  },
  "reckon": {
    "pos": "v.",
    "en_def": "to think or believe",
    "cn_def": "認為;估計"
  },
  "discourage": {
    "pos": "v.",
    "en_def": "to make someone lose confidence or not want to do something",
    "cn_def": "使灰心;勸阻"
  },
  "ambition": {
    "pos": "n.",
    "en_def": "a strong wish to be successful",
    "cn_def": "抱負;雄心"
  },
  "cohesion": {
    "pos": "n.",
    "en_def": "the state of a group being united",
    "cn_def": "凝聚力"
  },
  "headache": {
    "pos": "n.",
    "en_def": "a pain in your head",
    "cn_def": "頭痛"
  },
  "compulsion": {
    "pos": "n.",
    "en_def": "a strong feeling that you must do something",
    "cn_def": "強迫;衝動"
  },
  "decision": {
    "pos": "n.",
    "en_def": "a choice you make after thinking",
    "cn_def": "決定"
  },
  "groupthink": {
    "pos": "n.",
    "en_def": "when a group agrees too quickly and ignores other ideas",
    "cn_def": "團體迷思"
  },
  "adversity": {
    "pos": "n.",
    "en_def": "a very difficult situation",
    "cn_def": "逆境"
  },
  "embrace": {
    "pos": "v.",
    "en_def": "to accept something new with enthusiasm",
    "cn_def": "欣然接受"
  },
  "condone": {
    "pos": "v.",
    "en_def": "to accept bad behaviour as acceptable",
    "cn_def": "縱容;寬恕"
  },
  "intuition": {
    "pos": "n.",
    "en_def": "knowing something from feeling, not from thinking it through",
    "cn_def": "直覺"
  },
  "excuse": {
    "pos": "n.",
    "en_def": "a reason you give to explain a mistake or avoid something",
    "cn_def": "藉口"
  },
  "tenacity": {
    "pos": "n.",
    "en_def": "the quality of not giving up easily",
    "cn_def": "堅韌;頑強"
  },
  "craving": {
    "pos": "n.",
    "en_def": "a very strong wish for something, often food",
    "cn_def": "渴望;癮"
  },
  "workload": {
    "pos": "n.",
    "en_def": "the amount of work a person has to do",
    "cn_def": "工作量"
  },
  "pulse": {
    "pos": "n.",
    "en_def": "how fast your heart is beating, felt at the wrist",
    "cn_def": "脈搏"
  },
  "migraine": {
    "pos": "n.",
    "en_def": "a very bad headache that can make you feel sick",
    "cn_def": "偏頭痛"
  },
  "preference": {
    "pos": "n.",
    "en_def": "liking one thing more than another",
    "cn_def": "偏好"
  }
};

const EXTRA_GLOSSES = {};
