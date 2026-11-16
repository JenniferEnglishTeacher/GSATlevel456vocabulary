// Topic 16 Subunit 2 Quiz Data: Training & Exercise 訓練與運動
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T16 S02 - Training & Exercise 訓練與運動",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "warm-up",
    "pos": "n.",
    "cn_def": "熱身",
    "en_def": "gentle exercise you do before hard exercise",
    "sentence": "Never skip the {{BLANK}} before a match, because cold muscles are much more likely to get injured when you suddenly sprint.",
    "cn": "比賽前千萬不要省略熱身，因為冰冷的肌肉在你突然衝刺時更容易受傷。"
  },
  {
    "word": "cool-down",
    "pos": "n.",
    "cn_def": "緩和運動；收操",
    "en_def": "easy exercise you do after hard exercise to relax the body",
    "sentence": "After the race we did a ten-minute {{BLANK}} of slow jogging and stretching, so our legs felt less stiff the next day.",
    "cn": "比賽後我們做了十分鐘慢跑和伸展的緩和運動，所以第二天我們的腿比較不僵硬。"
  },
  {
    "word": "stretch",
    "pos": "v.",
    "cn_def": "伸展；拉筋",
    "en_def": "to make your muscles longer by reaching or bending",
    "sentence": "You should {{BLANK}} your legs gently after running, but you should never bounce, because that can damage the muscle.",
    "cn": "跑步後你應該輕柔地伸展雙腿，但絕對不要彈跳，因為那可能傷害肌肉。"
  },
  {
    "word": "endurance",
    "pos": "n.",
    "cn_def": "耐力",
    "en_def": "the ability to keep doing a hard activity for a long time",
    "sentence": "Cycling to school every day built up my {{BLANK}}, so I finished the five-kilometre fun run without stopping once.",
    "cn": "每天騎腳踏車上學增強了我的耐力，所以我一次都沒停就跑完了五公里的趣味路跑。"
  },
  {
    "word": "strength training",
    "pos": "n.phr.",
    "cn_def": "肌力訓練",
    "en_def": "exercise that uses weights to make muscles stronger",
    "sentence": "My grandmother started {{BLANK}} at seventy, and now she can carry her own shopping bags up the stairs again.",
    "cn": "我奶奶七十歲才開始做肌力訓練，而現在她又能自己提著購物袋上樓了。"
  },
  {
    "word": "interval training",
    "pos": "n.phr.",
    "cn_def": "間歇訓練",
    "en_def": "exercise that mixes very hard periods with easy rest periods",
    "sentence": "{{BLANK}} is popular with busy people, because thirty minutes of fast and slow running can be as useful as a longer jog.",
    "cn": "間歇訓練很受忙碌的人歡迎，因為三十分鐘快慢交替的跑步可能和較長時間的慢跑一樣有效。"
  },
  {
    "word": "weightlifting",
    "pos": "n.",
    "cn_def": "舉重",
    "en_def": "the sport or activity of lifting heavy weights",
    "sentence": "Taiwan has won several Olympic medals in {{BLANK}}, and many young athletes now train hard to lift even heavier weights.",
    "cn": "台灣已在舉重項目贏得數面奧運獎牌，而現在許多年輕運動員努力訓練，想舉起更重的重量。"
  },
  {
    "word": "dumbbell",
    "pos": "n.",
    "cn_def": "啞鈴",
    "en_def": "a short bar with a weight at each end, held in one hand",
    "sentence": "I keep a pair of {{BLANK}} under my bed, so I can do a few arm exercises while I watch videos at night.",
    "cn": "我在床底下放了一對啞鈴，所以晚上看影片時可以做幾組手臂運動。"
  },
  {
    "word": "barbell",
    "pos": "n.",
    "cn_def": "槓鈴",
    "en_def": "a long bar with heavy weights on both ends",
    "sentence": "The coach added more plates to the {{BLANK}} slowly, because lifting too much too soon can injure a young athlete's back.",
    "cn": "教練慢慢地在槓鈴上加更多槓片，因為太快舉太重可能傷害年輕運動員的背部。"
  },
  {
    "word": "treadmill",
    "pos": "n.",
    "cn_def": "跑步機",
    "en_def": "a machine with a moving belt that you walk or run on",
    "sentence": "It was raining heavily outside, so I ran on the {{BLANK}} at the gym, although I find indoor running quite boring.",
    "cn": "外面下著大雨，所以我在健身房的跑步機上跑步，雖然我覺得室內跑步相當無聊。"
  },
  {
    "word": "push-up",
    "pos": "n.",
    "cn_def": "伏地挺身",
    "en_def": "an exercise where you push your body up from the floor with your arms",
    "sentence": "Our PE teacher asked everyone to do twenty {{BLANK}}, but most of us could only manage ten before our arms started shaking.",
    "cn": "我們的體育老師要求每個人做二十下伏地挺身，但我們大多數人只做了十下手臂就開始發抖。"
  },
  {
    "word": "squat",
    "pos": "n.",
    "cn_def": "深蹲",
    "en_def": "an exercise where you bend your knees and lower your body",
    "sentence": "A deep {{BLANK}} works almost every muscle in your legs, so many coaches call it the king of all exercises.",
    "cn": "一個標準的深蹲幾乎能鍛鍊到你腿部的每一塊肌肉，所以許多教練稱它為所有運動之王。"
  },
  {
    "word": "lunge",
    "pos": "n.",
    "cn_def": "弓箭步",
    "en_def": "an exercise where you step forward and bend both knees",
    "sentence": "Do ten {{BLANK}} on each leg slowly, and keep your back straight so that your knees do not hurt.",
    "cn": "每條腿慢慢做十下弓箭步，並保持背部挺直，這樣你的膝蓋才不會痛。"
  },
  {
    "word": "plank",
    "pos": "n.",
    "cn_def": "棒式",
    "en_def": "an exercise where you hold your body straight like a board",
    "sentence": "I can hold a {{BLANK}} for two minutes now, but at the beginning of the year I collapsed after only thirty seconds.",
    "cn": "我現在能撐棒式兩分鐘，但年初時我只撐了三十秒就垮了。"
  },
  {
    "word": "repetition",
    "pos": "n.",
    "cn_def": "重複次數；一下",
    "en_def": "one complete movement of an exercise",
    "sentence": "Do twelve {{BLANK}} of each exercise, and rest for one minute before you start the next set.",
    "cn": "每個動作做十二下，並在開始下一組之前休息一分鐘。"
  },
  {
    "word": "cardio",
    "pos": "n.",
    "cn_def": "有氧運動",
    "en_def": "exercise that makes your heart and lungs work harder",
    "sentence": "I do thirty minutes of {{BLANK}} three times a week, so I can run up the stairs at the MRT station without feeling tired.",
    "cn": "我每週做三次、每次三十分鐘的有氧運動，所以我能跑上捷運站的樓梯而不覺得累。"
  },
  {
    "word": "jog",
    "pos": "v.",
    "cn_def": "慢跑",
    "en_def": "to run slowly and steadily for exercise",
    "sentence": "My parents {{BLANK}} along the riverside park every evening, and they say it helps them sleep better at night.",
    "cn": "我爸媽每天傍晚沿著河濱公園慢跑，而他們說這有助於他們晚上睡得更好。"
  },
  {
    "word": "sprint",
    "pos": "v.",
    "cn_def": "衝刺；全速奔跑",
    "en_def": "to run as fast as you can for a short distance",
    "sentence": "The winger {{BLANK}} down the left side of the field, and then he passed the ball to the striker in front of the goal.",
    "cn": "那名邊鋒沿著球場左側全速衝刺，然後把球傳給球門前的前鋒。"
  },
  {
    "word": "marathon",
    "pos": "n.",
    "cn_def": "馬拉松",
    "en_def": "a running race of about 42 kilometres",
    "sentence": "My aunt trained for six months before her first {{BLANK}}, and she finished the 42-kilometre race in just under five hours.",
    "cn": "我阿姨在第一次馬拉松前訓練了六個月，而她以不到五小時的成績完成了這場42公里的賽跑。"
  },
  {
    "word": "cross-training",
    "pos": "n.",
    "cn_def": "交叉訓練",
    "en_def": "doing different types of exercise to stay fit",
    "sentence": "Runners often add swimming as {{BLANK}}, because it builds fitness without putting stress on their knees and ankles.",
    "cn": "跑者常常加入游泳作為交叉訓練，因為它能增進體能而不會對膝蓋和腳踝造成壓力。"
  },
  {
    "word": "resistance band",
    "pos": "n.phr.",
    "cn_def": "彈力帶",
    "en_def": "a stretchy elastic band used for exercise",
    "sentence": "A {{BLANK}} is cheap and light, so I pack one in my suitcase and keep exercising in my hotel room.",
    "cn": "彈力帶便宜又輕巧，所以我把一條放進行李箱，在飯店房間裡繼續運動。"
  },
  {
    "word": "personal trainer",
    "pos": "n.phr.",
    "cn_def": "私人教練",
    "en_def": "a professional who plans exercise for one client",
    "sentence": "My dad hired a {{BLANK}} after his health check, and she designed a safe workout plan for his bad back.",
    "cn": "我爸爸在健康檢查後請了一位私人教練，而她為他不好的背部設計了一套安全的運動計畫。"
  },
  {
    "word": "gym",
    "pos": "n.",
    "cn_def": "健身房",
    "en_def": "a room or building with equipment for exercise",
    "sentence": "The new {{BLANK}} near our school is open twenty-four hours, so my brother often goes there after his part-time job.",
    "cn": "我們學校附近新開的健身房二十四小時營業，所以我哥哥常在打工後去那裡。"
  },
  {
    "word": "overtraining",
    "pos": "n.",
    "cn_def": "過度訓練",
    "en_def": "training too much without enough rest, which harms performance",
    "sentence": "Her times got slower every week because of {{BLANK}}, so her coach told her to take five full days off.",
    "cn": "由於過度訓練，她的成績每週都變慢，所以教練要她休息整整五天。"
  },
  {
    "word": "regimen",
    "pos": "n.",
    "cn_def": "（嚴格的）養生法；訓練計畫",
    "en_def": "a strict plan for training, diet or health",
    "sentence": "The boxer follows a strict daily {{BLANK}} of running, sparring and healthy meals, but he always rests on Sundays.",
    "cn": "那位拳擊手遵循每日嚴格的訓練計畫，包括跑步、對打練習和健康飲食，但他星期天總是休息。"
  },
  {
    "word": "anaerobic",
    "pos": "adj.",
    "cn_def": "無氧的",
    "en_def": "describing short, intense exercise that does not use much oxygen",
    "sentence": "Sprinting and heavy lifting are {{BLANK}} activities, so you can only keep them up for a few seconds before you need a break.",
    "cn": "衝刺和大重量訓練是無氧運動，所以你只能維持幾秒鐘就需要休息。"
  },
  {
    "word": "high-intensity",
    "pos": "adj.",
    "cn_def": "高強度的",
    "en_def": "very hard and fast",
    "sentence": "The {{BLANK}} class at my gym lasts only twenty minutes, but everyone is soaked in sweat by the end.",
    "cn": "我健身房的高強度課程只有二十分鐘，但到最後每個人都汗流浹背。"
  },
  {
    "word": "low-impact",
    "pos": "adj.",
    "cn_def": "低衝擊的",
    "en_def": "gentle and not putting much stress on the joints",
    "sentence": "Swimming is a {{BLANK}} sport, so doctors often recommend it for older people and for anyone with knee problems.",
    "cn": "游泳是一種低衝擊的運動，所以醫生常常推薦給年長者以及任何有膝蓋問題的人。"
  },
  {
    "word": "fitness tracker",
    "pos": "n.phr.",
    "cn_def": "健身追蹤器；運動手環",
    "en_def": "a wristband that records steps, sleep and heart rate",
    "sentence": "My {{BLANK}} reminds me to stand up every hour, because I often sit at my desk for too long while I study.",
    "cn": "我的運動手環每小時提醒我站起來，因為我讀書時常常在書桌前坐太久。"
  }
];

const MCQS = [
  {
    "q": "Never skip the _____ before a match, because cold muscles are much more likely to get injured when you suddenly sprint.",
    "options": [
      "subjectivity",
      "para-athlete",
      "specification",
      "warm-up"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "After the race we did a ten-minute _____ of slow jogging and stretching, so our legs felt less stiff the next day.",
    "options": [
      "cool-down",
      "substitution",
      "floodlight",
      "attainment"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "You should _____ your legs gently after running, but you should never bounce, because that can damage the muscle.",
    "options": [
      "overcompensate",
      "stretch",
      "qualify",
      "pre-empt"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Cycling to school every day built up my _____, so I finished the five-kilometre fun run without stopping once.",
    "options": [
      "empowerment",
      "muscle",
      "endurance",
      "pedometer"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "My grandmother started _____ at seventy, and now she can carry her own shopping bags up the stairs again.",
    "options": [
      "strength training",
      "ice pack",
      "knee brace",
      "rib cage"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "_____ is popular with busy people, because thirty minutes of fast and slow running can be as useful as a longer jog.",
    "options": [
      "youth academy",
      "interval training",
      "whey protein",
      "sports science"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Taiwan has won several Olympic medals in _____, and many young athletes now train hard to lift even heavier weights.",
    "options": [
      "enhancement",
      "heat",
      "weightlifting",
      "swelling"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "I keep a pair of _____ under my bed, so I can do a few arm exercises while I watch videos at night.",
    "options": [
      "upside",
      "helmet",
      "kneecap",
      "dumbbell"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The coach added more plates to the _____ slowly, because lifting too much too soon can injure a young athlete's back.",
    "options": [
      "barbell",
      "exertion",
      "compliance",
      "rejection"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "It was raining heavily outside, so I ran on the _____ at the gym, although I find indoor running quite boring.",
    "options": [
      "simplification",
      "treadmill",
      "supervision",
      "electrolyte"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Our PE teacher asked everyone to do twenty _____, but most of us could only manage ten before our arms started shaking.",
    "options": [
      "exertion",
      "antipathy",
      "push-up",
      "cushioning"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "A deep _____ works almost every muscle in your legs, so many coaches call it the king of all exercises.",
    "options": [
      "replication",
      "defibrillator",
      "surgery",
      "squat"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Do ten _____ on each leg slowly, and keep your back straight so that your knees do not hurt.",
    "options": [
      "physiotherapy",
      "swelling",
      "lunge",
      "bruise"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "I can hold a _____ for two minutes now, but at the beginning of the year I collapsed after only thirty seconds.",
    "options": [
      "plank",
      "stewardship",
      "endowment",
      "upside"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Do twelve _____ of each exercise, and rest for one minute before you start the next set.",
    "options": [
      "bandage",
      "stud",
      "regression",
      "repetition"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "I do thirty minutes of _____ three times a week, so I can run up the stairs at the MRT station without feeling tired.",
    "options": [
      "implementation",
      "cardio",
      "surgery",
      "debut"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "My parents _____ along the riverside park every evening, and they say it helps them sleep better at night.",
    "options": [
      "jog",
      "vet",
      "broach",
      "disentangle"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The winger _____ down the left side of the field, and then he passed the ball to the striker in front of the goal.",
    "options": [
      "rebalance",
      "sprint",
      "itemise",
      "vanquish"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "My aunt trained for six months before her first _____, and she finished the 42-kilometre race in just under five hours.",
    "options": [
      "athleticism",
      "groundswell",
      "biomechanics",
      "marathon"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Runners often add swimming as _____, because it builds fitness without putting stress on their knees and ankles.",
    "options": [
      "enhancement",
      "imposition",
      "cross-training",
      "half-time"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "A _____ is cheap and light, so I pack one in my suitcase and keep exercising in my hotel room.",
    "options": [
      "muscle fibre",
      "resistance band",
      "body of evidence",
      "timing chip"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "My dad hired a _____ after his health check, and she designed a safe workout plan for his bad back.",
    "options": [
      "trend line",
      "false positive",
      "ice bath",
      "personal trainer"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The new _____ near our school is open twenty-four hours, so my brother often goes there after his part-time job.",
    "options": [
      "gym",
      "relapse",
      "fracture",
      "compliance"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Her times got slower every week because of _____, so her coach told her to take five full days off.",
    "options": [
      "stewardship",
      "dissemination",
      "overtraining",
      "capillary"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The boxer follows a strict daily _____ of running, sparring and healthy meals, but he always rests on Sundays.",
    "options": [
      "mediation",
      "cramp",
      "hydration",
      "regimen"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Sprinting and heavy lifting are _____ activities, so you can only keep them up for a few seconds before you need a break.",
    "options": [
      "collaborative",
      "anaerobic",
      "lean",
      "wide-ranging"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The _____ class at my gym lasts only twenty minutes, but everyone is soaked in sweat by the end.",
    "options": [
      "high-intensity",
      "age-appropriate",
      "sore",
      "undesirable"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Swimming is a _____ sport, so doctors often recommend it for older people and for anyone with knee problems.",
    "options": [
      "marked",
      "perceptive",
      "low-impact",
      "illustrative"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "My _____ reminds me to stand up every hour, because I often sit at my desk for too long while I study.",
    "options": [
      "margin of error",
      "pep talk",
      "energy bar",
      "fitness tracker"
    ],
    "answer": 3,
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "warm-up": {
    "pos": "n.",
    "en_def": "gentle exercise you do before hard exercise",
    "cn_def": "熱身"
  },
  "cool-down": {
    "pos": "n.",
    "en_def": "easy exercise you do after hard exercise to relax the body",
    "cn_def": "緩和運動；收操"
  },
  "stretch": {
    "pos": "v.",
    "en_def": "to make your muscles longer by reaching or bending",
    "cn_def": "伸展；拉筋"
  },
  "endurance": {
    "pos": "n.",
    "en_def": "the ability to keep doing a hard activity for a long time",
    "cn_def": "耐力"
  },
  "strength training": {
    "pos": "n.phr.",
    "en_def": "exercise that uses weights to make muscles stronger",
    "cn_def": "肌力訓練"
  },
  "interval training": {
    "pos": "n.phr.",
    "en_def": "exercise that mixes very hard periods with easy rest periods",
    "cn_def": "間歇訓練"
  },
  "weightlifting": {
    "pos": "n.",
    "en_def": "the sport or activity of lifting heavy weights",
    "cn_def": "舉重"
  },
  "dumbbell": {
    "pos": "n.",
    "en_def": "a short bar with a weight at each end, held in one hand",
    "cn_def": "啞鈴"
  },
  "barbell": {
    "pos": "n.",
    "en_def": "a long bar with heavy weights on both ends",
    "cn_def": "槓鈴"
  },
  "treadmill": {
    "pos": "n.",
    "en_def": "a machine with a moving belt that you walk or run on",
    "cn_def": "跑步機"
  },
  "push-up": {
    "pos": "n.",
    "en_def": "an exercise where you push your body up from the floor with your arms",
    "cn_def": "伏地挺身"
  },
  "squat": {
    "pos": "n.",
    "en_def": "an exercise where you bend your knees and lower your body",
    "cn_def": "深蹲"
  },
  "lunge": {
    "pos": "n.",
    "en_def": "an exercise where you step forward and bend both knees",
    "cn_def": "弓箭步"
  },
  "plank": {
    "pos": "n.",
    "en_def": "an exercise where you hold your body straight like a board",
    "cn_def": "棒式"
  },
  "repetition": {
    "pos": "n.",
    "en_def": "one complete movement of an exercise",
    "cn_def": "重複次數；一下"
  },
  "cardio": {
    "pos": "n.",
    "en_def": "exercise that makes your heart and lungs work harder",
    "cn_def": "有氧運動"
  },
  "jog": {
    "pos": "v.",
    "en_def": "to run slowly and steadily for exercise",
    "cn_def": "慢跑"
  },
  "sprint": {
    "pos": "v.",
    "en_def": "to run as fast as you can for a short distance",
    "cn_def": "衝刺；全速奔跑"
  },
  "marathon": {
    "pos": "n.",
    "en_def": "a running race of about 42 kilometres",
    "cn_def": "馬拉松"
  },
  "cross-training": {
    "pos": "n.",
    "en_def": "doing different types of exercise to stay fit",
    "cn_def": "交叉訓練"
  },
  "resistance band": {
    "pos": "n.phr.",
    "en_def": "a stretchy elastic band used for exercise",
    "cn_def": "彈力帶"
  },
  "personal trainer": {
    "pos": "n.phr.",
    "en_def": "a professional who plans exercise for one client",
    "cn_def": "私人教練"
  },
  "gym": {
    "pos": "n.",
    "en_def": "a room or building with equipment for exercise",
    "cn_def": "健身房"
  },
  "overtraining": {
    "pos": "n.",
    "en_def": "training too much without enough rest, which harms performance",
    "cn_def": "過度訓練"
  },
  "regimen": {
    "pos": "n.",
    "en_def": "a strict plan for training, diet or health",
    "cn_def": "（嚴格的）養生法；訓練計畫"
  },
  "anaerobic": {
    "pos": "adj.",
    "en_def": "describing short, intense exercise that does not use much oxygen",
    "cn_def": "無氧的"
  },
  "high-intensity": {
    "pos": "adj.",
    "en_def": "very hard and fast",
    "cn_def": "高強度的"
  },
  "low-impact": {
    "pos": "adj.",
    "en_def": "gentle and not putting much stress on the joints",
    "cn_def": "低衝擊的"
  },
  "fitness tracker": {
    "pos": "n.phr.",
    "en_def": "a wristband that records steps, sleep and heart rate",
    "cn_def": "健身追蹤器；運動手環"
  },
  "subjectivity": {
    "pos": "n.",
    "en_def": "the state of being based on personal feelings",
    "cn_def": "主觀性"
  },
  "para-athlete": {
    "pos": "n.",
    "en_def": "an athlete with a disability who competes in adapted sport",
    "cn_def": "帕拉運動員"
  },
  "specification": {
    "pos": "n.",
    "en_def": "a detailed description of how something should be made",
    "cn_def": "規格；規範"
  },
  "substitution": {
    "pos": "n.",
    "en_def": "the act of replacing one thing with another",
    "cn_def": "替換；代換"
  },
  "floodlight": {
    "pos": "n.",
    "en_def": "a very bright lamp that lights a sports field at night",
    "cn_def": "探照燈；照明燈"
  },
  "attainment": {
    "pos": "n.",
    "en_def": "the act of reaching a goal or level",
    "cn_def": "達成；成就"
  },
  "overcompensate": {
    "pos": "v.",
    "en_def": "to do too much to make up for a problem",
    "cn_def": "過度補償"
  },
  "qualify": {
    "pos": "v.",
    "en_def": "to reach the standard needed to enter a competition",
    "cn_def": "取得資格；晉級"
  },
  "pre-empt": {
    "pos": "v.",
    "en_def": "to act first in order to prevent something",
    "cn_def": "先行阻止；搶先"
  },
  "empowerment": {
    "pos": "n.",
    "en_def": "the giving of power or confidence to people",
    "cn_def": "賦權；增能"
  },
  "muscle": {
    "pos": "n.",
    "en_def": "body tissue that tightens and relaxes to make you move",
    "cn_def": "肌肉"
  },
  "pedometer": {
    "pos": "n.",
    "en_def": "a device that counts how many steps you take",
    "cn_def": "計步器"
  },
  "ice pack": {
    "pos": "n.phr.",
    "en_def": "a cold bag put on an injury to reduce swelling",
    "cn_def": "冰敷袋"
  },
  "knee brace": {
    "pos": "n.phr.",
    "en_def": "a support worn around the knee",
    "cn_def": "護膝支架"
  },
  "rib cage": {
    "pos": "n.phr.",
    "en_def": "the bones that curve around your chest",
    "cn_def": "胸腔；肋骨"
  },
  "youth academy": {
    "pos": "n.phr.",
    "en_def": "a school run by a club to train young players",
    "cn_def": "青訓學院"
  },
  "whey protein": {
    "pos": "n.phr.",
    "en_def": "a milk protein powder used to help muscles recover",
    "cn_def": "乳清蛋白"
  },
  "sports science": {
    "pos": "n.phr.",
    "en_def": "the study of the body and mind in sport",
    "cn_def": "運動科學"
  },
  "enhancement": {
    "pos": "n.",
    "en_def": "an improvement that makes something better",
    "cn_def": "提升；增強"
  },
  "heat": {
    "pos": "n.",
    "en_def": "one of several early races used to choose the finalists",
    "cn_def": "預賽"
  },
  "swelling": {
    "pos": "n.",
    "en_def": "the state of a body part becoming larger because of injury",
    "cn_def": "腫脹"
  },
  "upside": {
    "pos": "n.",
    "en_def": "the positive side of a situation",
    "cn_def": "好的一面；優點"
  },
  "helmet": {
    "pos": "n.",
    "en_def": "a hard hat that protects the head",
    "cn_def": "頭盔；安全帽"
  },
  "kneecap": {
    "pos": "n.",
    "en_def": "the small round bone at the front of the knee",
    "cn_def": "膝蓋骨；髕骨"
  },
  "exertion": {
    "pos": "n.",
    "en_def": "great physical or mental effort",
    "cn_def": "費力；用力"
  },
  "compliance": {
    "pos": "n.",
    "en_def": "the act of obeying a rule or request",
    "cn_def": "遵守；合規"
  },
  "rejection": {
    "pos": "n.",
    "en_def": "the act of refusing to accept something",
    "cn_def": "拒絕"
  },
  "simplification": {
    "pos": "n.",
    "en_def": "the act of making something easier to understand",
    "cn_def": "簡化"
  },
  "supervision": {
    "pos": "n.",
    "en_def": "the act of watching and directing an activity",
    "cn_def": "監督；指導"
  },
  "electrolyte": {
    "pos": "n.",
    "en_def": "a salt in the body, like sodium, that helps muscles work",
    "cn_def": "電解質"
  },
  "antipathy": {
    "pos": "n.",
    "en_def": "a strong feeling of dislike",
    "cn_def": "反感；厭惡"
  },
  "cushioning": {
    "pos": "n.",
    "en_def": "soft material that reduces the shock of landing",
    "cn_def": "緩衝；避震"
  },
  "replication": {
    "pos": "n.",
    "en_def": "the act of repeating a study to check its results",
    "cn_def": "重複驗證"
  },
  "defibrillator": {
    "pos": "n.",
    "en_def": "a machine that gives an electric shock to restart the heart",
    "cn_def": "去顫器；電擊器"
  },
  "surgery": {
    "pos": "n.",
    "en_def": "a medical operation",
    "cn_def": "手術"
  },
  "physiotherapy": {
    "pos": "n.",
    "en_def": "treatment of injuries with exercise and massage",
    "cn_def": "物理治療"
  },
  "bruise": {
    "pos": "n.",
    "en_def": "a dark mark on the skin caused by a knock",
    "cn_def": "瘀青"
  },
  "stewardship": {
    "pos": "n.",
    "en_def": "the careful management of something you are responsible for",
    "cn_def": "管理責任；監管"
  },
  "endowment": {
    "pos": "n.",
    "en_def": "a large gift of money given to an institution",
    "cn_def": "捐贈基金"
  },
  "bandage": {
    "pos": "n.",
    "en_def": "a long strip of cloth used to cover or support an injury",
    "cn_def": "繃帶"
  },
  "stud": {
    "pos": "n.",
    "en_def": "a small lump on the bottom of a football boot",
    "cn_def": "鞋釘；防滑釘"
  },
  "regression": {
    "pos": "n.",
    "en_def": "a return to a worse or earlier state",
    "cn_def": "退步；倒退"
  },
  "implementation": {
    "pos": "n.",
    "en_def": "the act of putting a plan into action",
    "cn_def": "實施；執行"
  },
  "debut": {
    "pos": "n.",
    "en_def": "a player's first appearance for a team",
    "cn_def": "初次登場"
  },
  "vet": {
    "pos": "v.",
    "en_def": "to check someone or something carefully before accepting them",
    "cn_def": "審查"
  },
  "broach": {
    "pos": "v.",
    "en_def": "to begin talking about a difficult subject",
    "cn_def": "開始談論（難題）"
  },
  "disentangle": {
    "pos": "v.",
    "en_def": "to separate things that are mixed together",
    "cn_def": "釐清；解開"
  },
  "rebalance": {
    "pos": "v.",
    "en_def": "to change the proportions of something",
    "cn_def": "重新平衡"
  },
  "itemise": {
    "pos": "v.",
    "en_def": "to list things separately",
    "cn_def": "逐項列出"
  },
  "vanquish": {
    "pos": "v.",
    "en_def": "to defeat someone completely",
    "cn_def": "徹底擊敗"
  },
  "athleticism": {
    "pos": "n.",
    "en_def": "natural physical skill, strength and speed",
    "cn_def": "運動能力"
  },
  "groundswell": {
    "pos": "n.",
    "en_def": "a growing feeling or movement among many people",
    "cn_def": "風潮；浪潮"
  },
  "biomechanics": {
    "pos": "n.",
    "en_def": "the study of how the body moves",
    "cn_def": "生物力學"
  },
  "imposition": {
    "pos": "n.",
    "en_def": "the act of forcing a rule or burden on people",
    "cn_def": "強加；施加"
  },
  "half-time": {
    "pos": "n.",
    "en_def": "the break in the middle of a match",
    "cn_def": "中場休息"
  },
  "muscle fibre": {
    "pos": "n.phr.",
    "en_def": "one of the long thin cells that form a muscle",
    "cn_def": "肌纖維"
  },
  "body of evidence": {
    "pos": "n.phr.",
    "en_def": "all the information that supports an idea",
    "cn_def": "眾多證據"
  },
  "timing chip": {
    "pos": "n.phr.",
    "en_def": "a small electronic tag that records a runner's race time",
    "cn_def": "計時晶片"
  },
  "trend line": {
    "pos": "n.phr.",
    "en_def": "a line on a graph showing the general direction of change",
    "cn_def": "趨勢線"
  },
  "false positive": {
    "pos": "n.phr.",
    "en_def": "a test result that wrongly shows something is there",
    "cn_def": "偽陽性"
  },
  "ice bath": {
    "pos": "n.phr.",
    "en_def": "sitting in very cold water to reduce muscle pain",
    "cn_def": "冰浴"
  },
  "relapse": {
    "pos": "n.",
    "en_def": "the return of an illness or injury after it got better",
    "cn_def": "復發"
  },
  "fracture": {
    "pos": "n.",
    "en_def": "a crack or break in a bone",
    "cn_def": "骨折；裂傷"
  },
  "dissemination": {
    "pos": "n.",
    "en_def": "the spreading of information to many people",
    "cn_def": "傳播；散布"
  },
  "capillary": {
    "pos": "n.",
    "en_def": "a very thin blood tube in the body",
    "cn_def": "微血管"
  },
  "mediation": {
    "pos": "n.",
    "en_def": "the act of helping two sides reach an agreement",
    "cn_def": "調解；居中協調"
  },
  "cramp": {
    "pos": "n.",
    "en_def": "a sudden painful tightening of a muscle",
    "cn_def": "抽筋"
  },
  "hydration": {
    "pos": "n.",
    "en_def": "having enough water in your body",
    "cn_def": "補水；水分充足"
  },
  "collaborative": {
    "pos": "adj.",
    "en_def": "involving people working together",
    "cn_def": "合作的"
  },
  "lean": {
    "pos": "adj.",
    "en_def": "thin and healthy, with little fat",
    "cn_def": "精瘦的"
  },
  "wide-ranging": {
    "pos": "adj.",
    "en_def": "covering many different subjects",
    "cn_def": "範圍廣泛的"
  },
  "age-appropriate": {
    "pos": "adj.",
    "en_def": "suitable for a person's age",
    "cn_def": "適齡的"
  },
  "sore": {
    "pos": "adj.",
    "en_def": "painful, especially after exercise",
    "cn_def": "痠痛的"
  },
  "undesirable": {
    "pos": "adj.",
    "en_def": "not wanted because it causes problems",
    "cn_def": "不良的；不受歡迎的"
  },
  "marked": {
    "pos": "adj.",
    "en_def": "clear and easy to notice",
    "cn_def": "明顯的"
  },
  "perceptive": {
    "pos": "adj.",
    "en_def": "quick to notice and understand things",
    "cn_def": "敏銳的"
  },
  "illustrative": {
    "pos": "adj.",
    "en_def": "useful as an example",
    "cn_def": "具說明性的"
  },
  "margin of error": {
    "pos": "n.phr.",
    "en_def": "the amount by which a result may be wrong",
    "cn_def": "誤差範圍"
  },
  "pep talk": {
    "pos": "n.phr.",
    "en_def": "a short encouraging speech before or during a match",
    "cn_def": "激勵講話"
  },
  "energy bar": {
    "pos": "n.phr.",
    "en_def": "a small snack bar that gives quick energy",
    "cn_def": "能量棒"
  }
};

const EXTRA_GLOSSES = {};
