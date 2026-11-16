// Topic 5 Subunit 1 Quiz Data: Stress & the Body 壓力與身體反應
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T05 S01 - Stress & the Body 壓力與身體反應",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "pressure",
    "pos": "n.",
    "cn_def": "壓力",
    "en_def": "a feeling of worry caused by too much to do",
    "sentence": "Many senior high students feel a lot of {{BLANK}} before the entrance exam, so teachers try to keep the classroom calm and friendly.",
    "cn": "許多高三學生在升學考試前感受到很大的壓力,所以老師們試著讓教室保持平靜和友善。"
  },
  {
    "word": "strain",
    "pos": "n.",
    "cn_def": "負擔;壓力",
    "en_def": "a difficult situation that makes you tired or worried",
    "sentence": "Looking after her sick father and working full-time put a huge {{BLANK}} on Amy, and she started to lose sleep.",
    "cn": "照顧生病的父親又要全職工作,給艾咪帶來了巨大的負擔,她開始失眠。"
  },
  {
    "word": "adrenaline",
    "pos": "n.",
    "cn_def": "腎上腺素",
    "en_def": "a body chemical that gives energy when you are scared or excited",
    "sentence": "When the fire alarm suddenly rang, a rush of {{BLANK}} made my heart race, and I ran down the stairs very quickly.",
    "cn": "火災警報突然響起時,一股腎上腺素讓我心跳加速,我很快地跑下樓梯。"
  },
  {
    "word": "heartbeat",
    "pos": "n.",
    "cn_def": "心跳",
    "en_def": "the sound or movement of your heart",
    "sentence": "I could hear my own {{BLANK}} in my ears as I walked onto the stage, but I took a slow breath and began my speech.",
    "cn": "走上舞台時,我在耳朵裡能聽見自己的心跳,但我慢慢吸了一口氣,然後開始演講。"
  },
  {
    "word": "pulse",
    "pos": "n.",
    "cn_def": "脈搏",
    "en_def": "how fast your heart is beating, felt at the wrist",
    "sentence": "The nurse checked my {{BLANK}} after the long run, and she said it was still high because my body was under stress.",
    "cn": "長跑之後護士檢查了我的脈搏,她說脈搏還是很快,因為我的身體正處於壓力之下。"
  },
  {
    "word": "sweat",
    "pos": "v.",
    "cn_def": "流汗",
    "en_def": "to have water come out of your skin",
    "sentence": "Ben always starts to {{BLANK}} when he has to speak English in front of the class, so he keeps a small towel in his bag.",
    "cn": "班每次要在全班面前說英文時就開始流汗,所以他在書包裡放了一條小毛巾。"
  },
  {
    "word": "tremble",
    "pos": "v.",
    "cn_def": "顫抖",
    "en_def": "to shake slightly because you are afraid or nervous",
    "sentence": "My hands began to {{BLANK}} when I opened the envelope with my test results, but I was relieved to see a good score.",
    "cn": "我打開裝著考試成績的信封時,雙手開始顫抖,但看到好成績我就鬆了一口氣。"
  },
  {
    "word": "panic",
    "pos": "v.",
    "cn_def": "驚慌",
    "en_def": "to suddenly feel so afraid that you cannot think clearly",
    "sentence": "Don't {{BLANK}} if you cannot answer the first question, because you can skip it and come back to it later.",
    "cn": "如果第一題答不出來,不要驚慌,因為你可以先跳過,之後再回來作答。"
  },
  {
    "word": "nervous",
    "pos": "adj.",
    "cn_def": "緊張的",
    "en_def": "worried and a little afraid about something",
    "sentence": "Lisa felt very {{BLANK}} before her job interview, so she practised her answers with her sister the night before.",
    "cn": "麗莎在工作面試前感到非常緊張,所以她前一天晚上和姊姊一起練習回答問題。"
  },
  {
    "word": "tense",
    "pos": "adj.",
    "cn_def": "緊繃的",
    "en_def": "unable to relax because you are worried",
    "sentence": "The atmosphere in the office was {{BLANK}} before the big meeting, and nobody wanted to tell jokes or chat.",
    "cn": "大會議開始前,辦公室裡的氣氛很緊繃,沒有人想說笑或閒聊。"
  },
  {
    "word": "headache",
    "pos": "n.",
    "cn_def": "頭痛",
    "en_def": "a pain in your head",
    "sentence": "I often get a bad {{BLANK}} when I stay up late studying, so I now try to go to bed before midnight.",
    "cn": "我熬夜讀書時常常會頭痛,所以現在我試著在午夜前上床睡覺。"
  },
  {
    "word": "exhaustion",
    "pos": "n.",
    "cn_def": "筋疲力盡",
    "en_def": "the state of being extremely tired",
    "sentence": "After three nights of little sleep, Tom was suffering from {{BLANK}}, and his doctor told him to rest for a few days.",
    "cn": "連續三晚睡得很少之後,湯姆陷入筋疲力盡的狀態,醫生要他休息幾天。"
  },
  {
    "word": "overwork",
    "pos": "v.",
    "cn_def": "過度工作",
    "en_def": "to work too hard or too long",
    "sentence": "If you {{BLANK}} every day without a break, your body will eventually get sick, and your work will not improve either.",
    "cn": "如果你每天都過度工作而不休息,身體最後會生病,你的工作表現也不會變好。"
  },
  {
    "word": "deadline",
    "pos": "n.",
    "cn_def": "截止期限",
    "en_def": "the latest time by which something must be finished",
    "sentence": "The {{BLANK}} for the science report is next Monday, but Kevin has not even started his research yet.",
    "cn": "科學報告的截止期限是下週一,但凱文連研究都還沒開始。"
  },
  {
    "word": "workload",
    "pos": "n.",
    "cn_def": "工作量",
    "en_def": "the amount of work a person has to do",
    "sentence": "Our teacher reduced the homework {{BLANK}} during exam week, because she knew we were already very stressed.",
    "cn": "考試週期間老師減少了作業的工作量,因為她知道我們已經壓力很大了。"
  },
  {
    "word": "stressor",
    "pos": "n.",
    "cn_def": "壓力源",
    "en_def": "something that causes stress",
    "sentence": "Moving to a new school is a common {{BLANK}} for teenagers, but making one good friend can make the change much easier.",
    "cn": "轉學到新學校是青少年常見的壓力源,但交到一個好朋友就能讓這個改變輕鬆許多。"
  },
  {
    "word": "fight-or-flight",
    "pos": "adj.",
    "cn_def": "戰或逃(反應)的",
    "en_def": "describing the body's quick reaction to danger",
    "sentence": "When a dog suddenly barked at me, my {{BLANK}} response kicked in, and I jumped back before I could even think.",
    "cn": "一隻狗突然對我吠叫時,我的戰或逃反應啟動了,我還來不及思考就往後跳開。"
  },
  {
    "word": "immune system",
    "pos": "n.phr.",
    "cn_def": "免疫系統",
    "en_def": "the parts of the body that fight illness",
    "sentence": "Long periods of stress can weaken your {{BLANK}}, so you may catch colds more easily during busy exam seasons.",
    "cn": "長期的壓力會削弱你的免疫系統,所以在忙碌的考試季節你可能更容易感冒。"
  },
  {
    "word": "restless",
    "pos": "adj.",
    "cn_def": "焦躁不安的",
    "en_def": "unable to stay still or relax",
    "sentence": "The children grew {{BLANK}} after sitting in the car for four hours, so their parents stopped at a park to let them run.",
    "cn": "孩子們在車上坐了四個小時後變得焦躁不安,所以父母在一座公園停車讓他們跑一跑。"
  },
  {
    "word": "jittery",
    "pos": "adj.",
    "cn_def": "緊張不安的",
    "en_def": "nervous and shaky",
    "sentence": "I drank too much coffee before the test, and I felt {{BLANK}} for the whole morning, so now I only drink water.",
    "cn": "考試前我喝了太多咖啡,整個早上都覺得緊張不安,所以現在我只喝水。"
  },
  {
    "word": "sleepless",
    "pos": "adj.",
    "cn_def": "失眠的;無眠的",
    "en_def": "without sleep",
    "sentence": "Emma spent a {{BLANK}} night worrying about her presentation, but in the end the audience loved her ideas.",
    "cn": "艾瑪為了她的簡報擔心了一整個無眠的夜晚,但最後聽眾很喜歡她的想法。"
  },
  {
    "word": "migraine",
    "pos": "n.",
    "cn_def": "偏頭痛",
    "en_def": "a very bad headache that can make you feel sick",
    "sentence": "My mother gets a {{BLANK}} when she is under a lot of pressure at work, and she has to lie down in a dark room.",
    "cn": "我媽媽工作壓力很大時會偏頭痛,她必須躺在黑暗的房間裡休息。"
  },
  {
    "word": "blood pressure",
    "pos": "n.phr.",
    "cn_def": "血壓",
    "en_def": "the force of blood moving through your body",
    "sentence": "The doctor said my grandfather's {{BLANK}} was too high, so he should reduce stress and eat less salt.",
    "cn": "醫生說我爺爺的血壓太高,所以他應該減少壓力並少吃鹽。"
  },
  {
    "word": "stomachache",
    "pos": "n.",
    "cn_def": "胃痛;肚子痛",
    "en_def": "a pain in your stomach",
    "sentence": "Some students get a {{BLANK}} on the morning of a big test, although they are not really sick.",
    "cn": "有些學生在大考當天早上會肚子痛,雖然他們並沒有真的生病。"
  },
  {
    "word": "appetite",
    "pos": "n.",
    "cn_def": "食慾",
    "en_def": "the feeling that you want to eat",
    "sentence": "Jason lost his {{BLANK}} during the stressful week of finals, and his mother worried because he barely ate dinner.",
    "cn": "傑森在期末考那個壓力很大的一週失去了食慾,他媽媽很擔心,因為他幾乎不吃晚餐。"
  },
  {
    "word": "breathe",
    "pos": "v.",
    "cn_def": "呼吸",
    "en_def": "to take air into your body and let it out",
    "sentence": "The coach told the players to {{BLANK}} slowly before the penalty kick, and it helped them stay calm and focused.",
    "cn": "教練告訴球員們在罰球前要慢慢呼吸,這幫助他們保持冷靜和專注。"
  },
  {
    "word": "frazzled",
    "pos": "adj.",
    "cn_def": "疲憊不堪的",
    "en_def": "very tired and upset because of too much to do",
    "sentence": "By Friday afternoon, the new teacher felt completely {{BLANK}}, but a quiet weekend helped her recover.",
    "cn": "到了星期五下午,這位新老師覺得完全疲憊不堪,但一個安靜的週末幫助她恢復了精神。"
  },
  {
    "word": "hectic",
    "pos": "adj.",
    "cn_def": "忙亂的",
    "en_def": "very busy and full of activity",
    "sentence": "December is always a {{BLANK}} month for shop workers, so many of them feel tired and stressed before the holidays.",
    "cn": "十二月對店員來說總是忙亂的月份,所以許多人在假期前感到疲累和有壓力。"
  },
  {
    "word": "demanding",
    "pos": "adj.",
    "cn_def": "要求高的;費力的",
    "en_def": "needing a lot of time, effort or skill",
    "sentence": "Nursing is a very {{BLANK}} job, but many nurses say that helping patients makes all the hard work worthwhile.",
    "cn": "護理是一份非常費力的工作,但許多護理師說幫助病人讓所有的辛苦都很值得。"
  },
  {
    "word": "overthinking",
    "pos": "n.",
    "cn_def": "想太多;過度思考",
    "en_def": "thinking about something too much, in a way that is not helpful",
    "sentence": "Too much {{BLANK}} kept Mia awake at night, so her counsellor suggested writing her worries on paper before bed.",
    "cn": "過度思考讓米亞晚上睡不著,所以她的輔導老師建議她睡前把煩惱寫在紙上。"
  }
];

const MCQS = [
  {
    "q": "Many senior high students feel a lot of _____ before the entrance exam, so teachers try to keep the classroom calm and friendly.",
    "options": [
      "framing",
      "altruism",
      "cohesion",
      "pressure"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Looking after her sick father and working full-time put a huge _____ on Amy, and she started to lose sleep.",
    "options": [
      "therapy",
      "caution",
      "strain",
      "perfectionism"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "When the fire alarm suddenly rang, a rush of _____ made my heart race, and I ran down the stairs very quickly.",
    "options": [
      "adrenaline",
      "nap",
      "extrovert",
      "perfectionism"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "I could hear my own _____ in my ears as I walked onto the stage, but I took a slow breath and began my speech.",
    "options": [
      "shortcoming",
      "heartbeat",
      "frustration",
      "psychologist"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The nurse checked my _____ after the long run, and she said it was still high because my body was under stress.",
    "options": [
      "pulse",
      "altruism",
      "conjecture",
      "preference"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Ben always starts to _____ when he has to speak English in front of the class, so he keeps a small towel in his bag.",
    "options": [
      "dither",
      "sweat",
      "commend",
      "postpone"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "My hands began to _____ when I opened the envelope with my test results, but I was relieved to see a good score.",
    "options": [
      "cultivate",
      "tempt",
      "tremble",
      "reckon"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Don't _____ if you cannot answer the first question, because you can skip it and come back to it later.",
    "options": [
      "disregard",
      "alienate",
      "entitle",
      "panic"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Lisa felt very _____ before her job interview, so she practised her answers with her sister the night before.",
    "options": [
      "rudimentary",
      "perpetual",
      "nervous",
      "pessimistic"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The atmosphere in the office was _____ before the big meeting, and nobody wanted to tell jokes or chat.",
    "options": [
      "ingrained",
      "tense",
      "burdensome",
      "ambivalent"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "I often get a bad _____ when I stay up late studying, so I now try to go to bed before midnight.",
    "options": [
      "relief",
      "inspiration",
      "embarrassment",
      "headache"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "After three nights of little sleep, Tom was suffering from _____, and his doctor told him to rest for a few days.",
    "options": [
      "exhaustion",
      "frustration",
      "passion",
      "curiosity"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "If you _____ every day without a break, your body will eventually get sick, and your work will not improve either.",
    "options": [
      "envy",
      "overwork",
      "exaggerate",
      "soothe"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The _____ for the science report is next Monday, but Kevin has not even started his research yet.",
    "options": [
      "deadline",
      "willpower",
      "trade-off",
      "judgement"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Our teacher reduced the homework _____ during exam week, because she knew we were already very stressed.",
    "options": [
      "self-belief",
      "reasoning",
      "psychiatrist",
      "workload"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Moving to a new school is a common _____ for teenagers, but making one good friend can make the change much easier.",
    "options": [
      "contentment",
      "dismay",
      "stressor",
      "checklist"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "When a dog suddenly barked at me, my _____ response kicked in, and I jumped back before I could even think.",
    "options": [
      "unwavering",
      "oblivious",
      "sensible",
      "fight-or-flight"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Long periods of stress can weaken your _____, so you may catch colds more easily during busy exam seasons.",
    "options": [
      "deep breathing",
      "peer pressure",
      "immune system",
      "loss aversion"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The children grew _____ after sitting in the car for four hours, so their parents stopped at a park to let them run.",
    "options": [
      "self-motivated",
      "restless",
      "shy",
      "apprehensive"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "I drank too much coffee before the test, and I felt _____ for the whole morning, so now I only drink water.",
    "options": [
      "jittery",
      "indecisive",
      "justifiable",
      "reckless"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Emma spent a _____ night worrying about her presentation, but in the end the audience loved her ideas.",
    "options": [
      "burdensome",
      "sleepless",
      "foremost",
      "succinct"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "My mother gets a _____ when she is under a lot of pressure at work, and she has to lie down in a dark room.",
    "options": [
      "relief",
      "dichotomy",
      "restraint",
      "migraine"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The doctor said my grandfather's _____ was too high, so he should reduce stress and eat less salt.",
    "options": [
      "blood pressure",
      "confirmation bias",
      "to-do list",
      "loss aversion"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Some students get a _____ on the morning of a big test, although they are not really sick.",
    "options": [
      "merit",
      "psychiatrist",
      "stomachache",
      "progress"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Jason lost his _____ during the stressful week of finals, and his mother worried because he barely ate dinner.",
    "options": [
      "introspection",
      "laughter",
      "stamina",
      "appetite"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The coach told the players to _____ slowly before the penalty kick, and it helped them stay calm and focused.",
    "options": [
      "dawdle",
      "recharge",
      "breathe",
      "synthesise"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "By Friday afternoon, the new teacher felt completely _____, but a quiet weekend helped her recover.",
    "options": [
      "frazzled",
      "gloomy",
      "incessant",
      "foremost"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "December is always a _____ month for shop workers, so many of them feel tired and stressed before the holidays.",
    "options": [
      "assertive",
      "hectic",
      "annoyed",
      "lazy"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Nursing is a very _____ job, but many nurses say that helping patients makes all the hard work worthwhile.",
    "options": [
      "competitive",
      "cheerful",
      "demanding",
      "cognisant"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Too much _____ kept Mia awake at night, so her counsellor suggested writing her worries on paper before bed.",
    "options": [
      "restraint",
      "aversion",
      "checklist",
      "overthinking"
    ],
    "answer": 3,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "pressure": {
    "pos": "n.",
    "en_def": "a feeling of worry caused by too much to do",
    "cn_def": "壓力"
  },
  "strain": {
    "pos": "n.",
    "en_def": "a difficult situation that makes you tired or worried",
    "cn_def": "負擔;壓力"
  },
  "adrenaline": {
    "pos": "n.",
    "en_def": "a body chemical that gives energy when you are scared or excited",
    "cn_def": "腎上腺素"
  },
  "heartbeat": {
    "pos": "n.",
    "en_def": "the sound or movement of your heart",
    "cn_def": "心跳"
  },
  "pulse": {
    "pos": "n.",
    "en_def": "how fast your heart is beating, felt at the wrist",
    "cn_def": "脈搏"
  },
  "sweat": {
    "pos": "v.",
    "en_def": "to have water come out of your skin",
    "cn_def": "流汗"
  },
  "tremble": {
    "pos": "v.",
    "en_def": "to shake slightly because you are afraid or nervous",
    "cn_def": "顫抖"
  },
  "panic": {
    "pos": "v.",
    "en_def": "to suddenly feel so afraid that you cannot think clearly",
    "cn_def": "驚慌"
  },
  "nervous": {
    "pos": "adj.",
    "en_def": "worried and a little afraid about something",
    "cn_def": "緊張的"
  },
  "tense": {
    "pos": "adj.",
    "en_def": "unable to relax because you are worried",
    "cn_def": "緊繃的"
  },
  "headache": {
    "pos": "n.",
    "en_def": "a pain in your head",
    "cn_def": "頭痛"
  },
  "exhaustion": {
    "pos": "n.",
    "en_def": "the state of being extremely tired",
    "cn_def": "筋疲力盡"
  },
  "overwork": {
    "pos": "v.",
    "en_def": "to work too hard or too long",
    "cn_def": "過度工作"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "the latest time by which something must be finished",
    "cn_def": "截止期限"
  },
  "workload": {
    "pos": "n.",
    "en_def": "the amount of work a person has to do",
    "cn_def": "工作量"
  },
  "stressor": {
    "pos": "n.",
    "en_def": "something that causes stress",
    "cn_def": "壓力源"
  },
  "fight-or-flight": {
    "pos": "adj.",
    "en_def": "describing the body's quick reaction to danger",
    "cn_def": "戰或逃(反應)的"
  },
  "immune system": {
    "pos": "n.phr.",
    "en_def": "the parts of the body that fight illness",
    "cn_def": "免疫系統"
  },
  "restless": {
    "pos": "adj.",
    "en_def": "unable to stay still or relax",
    "cn_def": "焦躁不安的"
  },
  "jittery": {
    "pos": "adj.",
    "en_def": "nervous and shaky",
    "cn_def": "緊張不安的"
  },
  "sleepless": {
    "pos": "adj.",
    "en_def": "without sleep",
    "cn_def": "失眠的;無眠的"
  },
  "migraine": {
    "pos": "n.",
    "en_def": "a very bad headache that can make you feel sick",
    "cn_def": "偏頭痛"
  },
  "blood pressure": {
    "pos": "n.phr.",
    "en_def": "the force of blood moving through your body",
    "cn_def": "血壓"
  },
  "stomachache": {
    "pos": "n.",
    "en_def": "a pain in your stomach",
    "cn_def": "胃痛;肚子痛"
  },
  "appetite": {
    "pos": "n.",
    "en_def": "the feeling that you want to eat",
    "cn_def": "食慾"
  },
  "breathe": {
    "pos": "v.",
    "en_def": "to take air into your body and let it out",
    "cn_def": "呼吸"
  },
  "frazzled": {
    "pos": "adj.",
    "en_def": "very tired and upset because of too much to do",
    "cn_def": "疲憊不堪的"
  },
  "hectic": {
    "pos": "adj.",
    "en_def": "very busy and full of activity",
    "cn_def": "忙亂的"
  },
  "demanding": {
    "pos": "adj.",
    "en_def": "needing a lot of time, effort or skill",
    "cn_def": "要求高的;費力的"
  },
  "overthinking": {
    "pos": "n.",
    "en_def": "thinking about something too much, in a way that is not helpful",
    "cn_def": "想太多;過度思考"
  },
  "framing": {
    "pos": "n.",
    "en_def": "the way information is presented, which can change choices",
    "cn_def": "框架效應;表述方式"
  },
  "altruism": {
    "pos": "n.",
    "en_def": "caring about others more than yourself",
    "cn_def": "利他主義;無私"
  },
  "cohesion": {
    "pos": "n.",
    "en_def": "the state of a group being united",
    "cn_def": "凝聚力"
  },
  "therapy": {
    "pos": "n.",
    "en_def": "treatment that helps someone feel better",
    "cn_def": "治療"
  },
  "caution": {
    "pos": "n.",
    "en_def": "care to avoid danger or mistakes",
    "cn_def": "謹慎;小心"
  },
  "perfectionism": {
    "pos": "n.",
    "en_def": "the need to make everything perfect",
    "cn_def": "完美主義"
  },
  "nap": {
    "pos": "n.",
    "en_def": "a short sleep during the day",
    "cn_def": "小睡;午睡"
  },
  "extrovert": {
    "pos": "n.",
    "en_def": "a lively person who gets energy from being with others",
    "cn_def": "外向的人"
  },
  "shortcoming": {
    "pos": "n.",
    "en_def": "a weakness or fault",
    "cn_def": "缺點;短處"
  },
  "frustration": {
    "pos": "n.",
    "en_def": "the feeling of being upset because you cannot do something",
    "cn_def": "挫折感"
  },
  "psychologist": {
    "pos": "n.",
    "en_def": "a person who studies the mind and behaviour",
    "cn_def": "心理學家;心理師"
  },
  "conjecture": {
    "pos": "n.",
    "en_def": "an opinion based on incomplete information",
    "cn_def": "推測;猜想"
  },
  "preference": {
    "pos": "n.",
    "en_def": "liking one thing more than another",
    "cn_def": "偏好"
  },
  "dither": {
    "pos": "v.",
    "en_def": "to be unable to decide what to do",
    "cn_def": "猶豫不決"
  },
  "commend": {
    "pos": "v.",
    "en_def": "to praise someone formally",
    "cn_def": "表揚;稱讚"
  },
  "postpone": {
    "pos": "v.",
    "en_def": "to move an event to a later time",
    "cn_def": "延期;延後"
  },
  "cultivate": {
    "pos": "v.",
    "en_def": "to develop a skill, quality or habit",
    "cn_def": "培養"
  },
  "tempt": {
    "pos": "v.",
    "en_def": "to make someone want to do something, often something wrong",
    "cn_def": "引誘;吸引"
  },
  "reckon": {
    "pos": "v.",
    "en_def": "to think or believe",
    "cn_def": "認為;估計"
  },
  "disregard": {
    "pos": "v.",
    "en_def": "to ignore something",
    "cn_def": "忽視;不理會"
  },
  "alienate": {
    "pos": "v.",
    "en_def": "to make someone feel unfriendly or not part of a group",
    "cn_def": "使疏遠"
  },
  "entitle": {
    "pos": "v.",
    "en_def": "to give someone the right to do or have something",
    "cn_def": "使有權利"
  },
  "rudimentary": {
    "pos": "adj.",
    "en_def": "very basic",
    "cn_def": "基本的;初步的"
  },
  "perpetual": {
    "pos": "adj.",
    "en_def": "never ending; happening again and again",
    "cn_def": "永久的;不斷的"
  },
  "pessimistic": {
    "pos": "adj.",
    "en_def": "expecting things to go badly",
    "cn_def": "悲觀的"
  },
  "ingrained": {
    "pos": "adj.",
    "en_def": "so fixed that it is hard to change",
    "cn_def": "根深蒂固的"
  },
  "burdensome": {
    "pos": "adj.",
    "en_def": "difficult to deal with; heavy",
    "cn_def": "繁重的;累贅的"
  },
  "ambivalent": {
    "pos": "adj.",
    "en_def": "having mixed feelings about something",
    "cn_def": "矛盾的;心情複雜的"
  },
  "relief": {
    "pos": "n.",
    "en_def": "a happy feeling when something worrying ends",
    "cn_def": "鬆了一口氣;寬慰"
  },
  "inspiration": {
    "pos": "n.",
    "en_def": "something that gives you new ideas or makes you want to do something",
    "cn_def": "靈感;鼓舞"
  },
  "embarrassment": {
    "pos": "n.",
    "en_def": "the feeling of being shy or uncomfortable in front of others",
    "cn_def": "尷尬"
  },
  "passion": {
    "pos": "n.",
    "en_def": "a very strong interest or love for something",
    "cn_def": "熱情;熱愛"
  },
  "curiosity": {
    "pos": "n.",
    "en_def": "a strong wish to know or learn something",
    "cn_def": "好奇心"
  },
  "envy": {
    "pos": "v.",
    "en_def": "to want something that another person has",
    "cn_def": "羨慕"
  },
  "exaggerate": {
    "pos": "v.",
    "en_def": "to describe something as bigger or worse than it is",
    "cn_def": "誇大"
  },
  "soothe": {
    "pos": "v.",
    "en_def": "to make someone calm or less upset",
    "cn_def": "撫慰;使平靜"
  },
  "willpower": {
    "pos": "n.",
    "en_def": "the ability to control what you do and resist temptation",
    "cn_def": "意志力"
  },
  "trade-off": {
    "pos": "n.",
    "en_def": "a balance between two things you cannot have together",
    "cn_def": "權衡;取捨"
  },
  "judgement": {
    "pos": "n.",
    "en_def": "the ability to make good decisions",
    "cn_def": "判斷(力)"
  },
  "self-belief": {
    "pos": "n.",
    "en_def": "confidence in your own abilities",
    "cn_def": "自信;相信自己"
  },
  "reasoning": {
    "pos": "n.",
    "en_def": "the process of thinking about something in a logical way",
    "cn_def": "推理;論證"
  },
  "psychiatrist": {
    "pos": "n.",
    "en_def": "a doctor who treats mental illness",
    "cn_def": "精神科醫師"
  },
  "contentment": {
    "pos": "n.",
    "en_def": "a quiet feeling of being happy and satisfied",
    "cn_def": "滿足"
  },
  "dismay": {
    "pos": "n.",
    "en_def": "a feeling of shock and disappointment",
    "cn_def": "驚愕;沮喪"
  },
  "checklist": {
    "pos": "n.",
    "en_def": "a list of things to check or do",
    "cn_def": "檢查清單"
  },
  "unwavering": {
    "pos": "adj.",
    "en_def": "not changing or becoming weaker",
    "cn_def": "堅定不移的"
  },
  "oblivious": {
    "pos": "adj.",
    "en_def": "not aware of something",
    "cn_def": "未察覺的;渾然不覺的"
  },
  "sensible": {
    "pos": "adj.",
    "en_def": "reasonable and practical",
    "cn_def": "明智的;合理的"
  },
  "deep breathing": {
    "pos": "n.phr.",
    "en_def": "taking slow, full breaths to calm down",
    "cn_def": "深呼吸"
  },
  "peer pressure": {
    "pos": "n.phr.",
    "en_def": "influence from friends to act like them",
    "cn_def": "同儕壓力"
  },
  "loss aversion": {
    "pos": "n.phr.",
    "en_def": "the tendency to fear losing more than you enjoy winning",
    "cn_def": "損失規避"
  },
  "self-motivated": {
    "pos": "adj.",
    "en_def": "able to work hard without others pushing you",
    "cn_def": "自動自發的"
  },
  "shy": {
    "pos": "adj.",
    "en_def": "nervous about talking to people you don't know",
    "cn_def": "害羞的"
  },
  "apprehensive": {
    "pos": "adj.",
    "en_def": "worried that something bad may happen",
    "cn_def": "憂慮的;擔心的"
  },
  "indecisive": {
    "pos": "adj.",
    "en_def": "unable to make decisions quickly",
    "cn_def": "優柔寡斷的"
  },
  "justifiable": {
    "pos": "adj.",
    "en_def": "having a good reason",
    "cn_def": "合理的;情有可原的"
  },
  "reckless": {
    "pos": "adj.",
    "en_def": "doing dangerous things without thinking about the results",
    "cn_def": "魯莽的"
  },
  "foremost": {
    "pos": "adj.",
    "en_def": "most important",
    "cn_def": "最重要的;首要的"
  },
  "succinct": {
    "pos": "adj.",
    "en_def": "clear and short",
    "cn_def": "簡潔的"
  },
  "dichotomy": {
    "pos": "n.",
    "en_def": "a division between two opposite things",
    "cn_def": "二分法;對立"
  },
  "restraint": {
    "pos": "n.",
    "en_def": "calm control over your feelings or actions",
    "cn_def": "克制;自制"
  },
  "confirmation bias": {
    "pos": "n.phr.",
    "en_def": "the habit of only noticing facts that agree with what you already believe",
    "cn_def": "確認偏誤"
  },
  "to-do list": {
    "pos": "n.phr.",
    "en_def": "a list of tasks you need to do",
    "cn_def": "待辦清單"
  },
  "merit": {
    "pos": "n.",
    "en_def": "a good quality that deserves praise",
    "cn_def": "優點;價值"
  },
  "progress": {
    "pos": "n.",
    "en_def": "movement towards a goal or improvement",
    "cn_def": "進步;進展"
  },
  "introspection": {
    "pos": "n.",
    "en_def": "careful thinking about your own thoughts and feelings",
    "cn_def": "內省;自我反省"
  },
  "laughter": {
    "pos": "n.",
    "en_def": "the sound or act of laughing",
    "cn_def": "笑聲;歡笑"
  },
  "stamina": {
    "pos": "n.",
    "en_def": "the energy to keep doing something for a long time",
    "cn_def": "耐力;精力"
  },
  "dawdle": {
    "pos": "v.",
    "en_def": "to move or act very slowly",
    "cn_def": "磨蹭;拖拖拉拉"
  },
  "recharge": {
    "pos": "v.",
    "en_def": "to get your energy back by resting",
    "cn_def": "恢復精力;充電"
  },
  "synthesise": {
    "pos": "v.",
    "en_def": "to combine ideas or information into one",
    "cn_def": "綜合;整合"
  },
  "gloomy": {
    "pos": "adj.",
    "en_def": "sad and without hope",
    "cn_def": "憂鬱的;陰沉的"
  },
  "incessant": {
    "pos": "adj.",
    "en_def": "never stopping",
    "cn_def": "不停的;持續不斷的"
  },
  "assertive": {
    "pos": "adj.",
    "en_def": "expressing your opinions clearly and confidently",
    "cn_def": "有主見的;果斷自信的"
  },
  "annoyed": {
    "pos": "adj.",
    "en_def": "a little angry",
    "cn_def": "惱怒的;不耐煩的"
  },
  "lazy": {
    "pos": "adj.",
    "en_def": "not wanting to work or make an effort",
    "cn_def": "懶惰的"
  },
  "competitive": {
    "pos": "adj.",
    "en_def": "wanting very much to win or be better than others",
    "cn_def": "好勝的;競爭的"
  },
  "cheerful": {
    "pos": "adj.",
    "en_def": "happy and friendly",
    "cn_def": "開朗的;愉快的"
  },
  "cognisant": {
    "pos": "adj.",
    "en_def": "aware of something",
    "cn_def": "意識到的;認知到的"
  },
  "aversion": {
    "pos": "n.",
    "en_def": "a strong dislike of something",
    "cn_def": "厭惡;反感"
  }
};

const EXTRA_GLOSSES = {};
