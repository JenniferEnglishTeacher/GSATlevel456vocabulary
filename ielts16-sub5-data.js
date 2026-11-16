// Topic 16 Subunit 5 Quiz Data: Biomechanics, Gear & Sports Technology 生物力學、裝備與運動科技
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T16 S05 - Biomechanics, Gear & Sports Technology 生物力學、裝備與運動科技",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "biomechanics",
    "pos": "n.",
    "cn_def": "生物力學",
    "en_def": "the study of how the body moves",
    "sentence": "Scientists used {{BLANK}} to study her throwing action, and small changes to her elbow angle added two metres to her distance.",
    "cn": "科學家用生物力學研究她的投擲動作，而手肘角度的微小改變讓她的距離增加了兩公尺。"
  },
  {
    "word": "gait",
    "pos": "n.",
    "cn_def": "步態",
    "en_def": "the way a person walks or runs",
    "sentence": "The shop filmed my {{BLANK}} on a treadmill, and then the staff recommended shoes that suited the way my feet landed.",
    "cn": "那家店在跑步機上拍下我的步態，然後店員推薦了適合我落地方式的鞋子。"
  },
  {
    "word": "stride length",
    "pos": "n.phr.",
    "cn_def": "步幅",
    "en_def": "the distance covered in one step while running",
    "sentence": "Increasing her {{BLANK}} made her faster at first, but it also tired her legs before the finish line.",
    "cn": "加大步幅起初讓她跑得更快，但也讓她的雙腿在終點線前就疲累了。"
  },
  {
    "word": "footwork",
    "pos": "n.",
    "cn_def": "腳步動作",
    "en_def": "the way a player moves their feet in a sport",
    "sentence": "Good {{BLANK}} matters more than strength in badminton, because you must reach the shuttle before you can hit it well.",
    "cn": "在羽球中好的腳步動作比力量更重要，因為你必須先接近球才能打得好。"
  },
  {
    "word": "drag",
    "pos": "n.",
    "cn_def": "阻力",
    "en_def": "the force of air or water that slows a moving body",
    "sentence": "Cyclists ride close behind each other to reduce {{BLANK}}, so the rider at the front uses far more energy.",
    "cn": "自行車手緊跟在彼此後面以減少阻力，所以最前面的車手消耗的能量多得多。"
  },
  {
    "word": "aerodynamic",
    "pos": "adj.",
    "cn_def": "空氣力學的；流線的",
    "en_def": "shaped so that air passes over it easily",
    "sentence": "Her new helmet is more {{BLANK}} than the old one, and the team says it saves several seconds over forty kilometres.",
    "cn": "她的新頭盔比舊的更符合空氣力學，而車隊表示在四十公里的賽程中能節省好幾秒。"
  },
  {
    "word": "centre of gravity",
    "pos": "n.phr.",
    "cn_def": "重心",
    "en_def": "the point where the weight of a body is balanced",
    "sentence": "Gymnasts keep their {{BLANK}} low when they land, because a low body position helps them stay steady.",
    "cn": "體操選手落地時會保持重心較低，因為低的身體姿勢能幫助他們站穩。"
  },
  {
    "word": "grip",
    "pos": "n.",
    "cn_def": "握法；抓力",
    "en_def": "the way you hold something, or the ability to hold it firmly",
    "sentence": "A looser {{BLANK}} on the bat gives you faster hands, but you must still hold it firmly enough when you swing.",
    "cn": "握球棒時握法放鬆一點能讓你的手更快，但揮棒時你仍必須握得夠緊。"
  },
  {
    "word": "traction",
    "pos": "n.",
    "cn_def": "抓地力",
    "en_def": "the grip of something on a surface",
    "sentence": "My old shoes had no {{BLANK}} on the wet court, so I slipped twice during the first game.",
    "cn": "我的舊鞋在濕滑的球場上沒有抓地力，所以我在第一局就滑倒了兩次。"
  },
  {
    "word": "cushioning",
    "pos": "n.",
    "cn_def": "緩衝；避震",
    "en_def": "soft material that reduces the shock of landing",
    "sentence": "Shoes with thick {{BLANK}} protect your knees on hard roads, although some runners prefer a thinner, lighter sole.",
    "cn": "有厚緩衝的鞋子能在堅硬路面上保護你的膝蓋，雖然有些跑者偏好較薄較輕的鞋底。"
  },
  {
    "word": "spike",
    "pos": "n.",
    "cn_def": "釘鞋釘",
    "en_def": "a sharp point on the bottom of a sports shoe",
    "sentence": "Each {{BLANK}} on a sprinter's shoe digs into the track, so she can push off powerfully at the start.",
    "cn": "短跑選手鞋底的每一根鞋釘都會抓進跑道，所以她在起跑時能強力推進。"
  },
  {
    "word": "stud",
    "pos": "n.",
    "cn_def": "鞋釘；防滑釘",
    "en_def": "a small lump on the bottom of a football boot",
    "sentence": "He changed to longer {{BLANK}} because the pitch was muddy, and after that he stopped sliding on every turn.",
    "cn": "他換上較長的鞋釘，因為球場很泥濘，之後他每次轉身就不再滑了。"
  },
  {
    "word": "helmet",
    "pos": "n.",
    "cn_def": "頭盔；安全帽",
    "en_def": "a hard hat that protects the head",
    "sentence": "Cycling without a {{BLANK}} is dangerous, so our school will not let students join the road race unless they wear one.",
    "cn": "不戴安全帽騎車很危險，所以除非學生戴上，我們學校不會讓他們參加公路賽。"
  },
  {
    "word": "mouthguard",
    "pos": "n.",
    "cn_def": "護齒套",
    "en_def": "a soft plastic shield worn to protect the teeth",
    "sentence": "Every player must wear a {{BLANK}} in rugby, because a knock to the face can easily break a tooth.",
    "cn": "橄欖球比賽中每位球員都必須戴護齒套，因為臉部受到撞擊很容易斷牙。"
  },
  {
    "word": "shin pad",
    "pos": "n.phr.",
    "cn_def": "護脛",
    "en_def": "a hard cover that protects the front of the lower leg",
    "sentence": "He forgot his {{BLANK}} before the game, so a teammate kindly lent him an old pair.",
    "cn": "他比賽前忘了帶護脛，所以一位隊友好心借了他一副舊的。"
  },
  {
    "word": "goggles",
    "pos": "n.",
    "cn_def": "蛙鏡；護目鏡",
    "en_def": "special glasses that protect the eyes",
    "sentence": "My {{BLANK}} leaked during the race, so I could hardly see the lane rope for the last fifty metres.",
    "cn": "比賽中我的蛙鏡漏水，所以最後五十公尺我幾乎看不見水道繩。"
  },
  {
    "word": "heart-rate monitor",
    "pos": "n.phr.",
    "cn_def": "心率監測器",
    "en_def": "a device that measures how fast your heart beats",
    "sentence": "A {{BLANK}} on his chest sends data to his phone, so he can see when he is training too hard.",
    "cn": "他胸前的心率監測器會把資料傳到手機，所以他能看出自己何時訓練過度。"
  },
  {
    "word": "wind tunnel",
    "pos": "n.phr.",
    "cn_def": "風洞",
    "en_def": "a room where air is blown over a person to test their shape",
    "sentence": "The cyclist spent a day in a {{BLANK}}, and the engineers changed her riding position to cut the air resistance.",
    "cn": "那位自行車手在風洞裡待了一天，而工程師調整了她的騎乘姿勢以減少空氣阻力。"
  },
  {
    "word": "force plate",
    "pos": "n.phr.",
    "cn_def": "測力板",
    "en_def": "a board that measures the push of a foot on the ground",
    "sentence": "The jumper landed on a {{BLANK}}, so the scientists could measure exactly how hard she pushed off.",
    "cn": "那位跳躍選手落在測力板上，所以科學家能精確測量她蹬地的力量。"
  },
  {
    "word": "high-speed camera",
    "pos": "n.phr.",
    "cn_def": "高速攝影機",
    "en_def": "a camera that records very fast movement in detail",
    "sentence": "A {{BLANK}} filmed his serve at a thousand frames a second, and the footage showed a small fault in his wrist.",
    "cn": "高速攝影機以每秒一千格拍下他的發球，而影片顯示他手腕有個小瑕疵。"
  },
  {
    "word": "video analysis",
    "pos": "n.phr.",
    "cn_def": "影像分析",
    "en_def": "studying recorded film to improve performance",
    "sentence": "The team does {{BLANK}} every Monday, so the players can see their own mistakes instead of just hearing about them.",
    "cn": "球隊每週一都做影像分析，所以球員能親眼看見自己的錯誤，而不只是聽別人說。"
  },
  {
    "word": "data-driven",
    "pos": "adj.",
    "cn_def": "數據驅動的",
    "en_def": "based on information and numbers",
    "sentence": "Modern coaching has become very {{BLANK}}, but good coaches still trust what they see with their own eyes.",
    "cn": "現代的教練工作已變得非常數據驅動，但好的教練仍然相信自己親眼看到的東西。"
  },
  {
    "word": "pedometer",
    "pos": "n.",
    "cn_def": "計步器",
    "en_def": "a device that counts how many steps you take",
    "sentence": "My grandfather carries a simple {{BLANK}} in his pocket, and he walks around the block again if he has not reached ten thousand steps.",
    "cn": "我爺爺口袋裡帶著一個簡單的計步器，如果還沒走到一萬步，他就會再繞街區走一圈。"
  },
  {
    "word": "timing chip",
    "pos": "n.phr.",
    "cn_def": "計時晶片",
    "en_def": "a small electronic tag that records a runner's race time",
    "sentence": "Each runner wears a {{BLANK}} on one shoe, so the computer records the exact moment they cross the line.",
    "cn": "每位跑者在一隻鞋上戴著計時晶片，所以電腦會記錄他們通過終點線的確切時刻。"
  },
  {
    "word": "lane",
    "pos": "n.",
    "cn_def": "跑道；水道",
    "en_def": "one of the marked paths on a track or in a pool",
    "sentence": "She was given the outside {{BLANK}} for the final, but she still swam a personal best and took the bronze.",
    "cn": "她在決賽被分到最外側的水道，但她仍游出個人最佳成績並拿下銅牌。"
  },
  {
    "word": "artificial turf",
    "pos": "n.phr.",
    "cn_def": "人工草皮",
    "en_def": "a surface of plastic grass used for sports",
    "sentence": "Our school replaced the muddy field with {{BLANK}}, so matches are no longer cancelled when it rains.",
    "cn": "我們學校把泥濘的球場換成人工草皮，所以下雨時比賽不再被取消。"
  },
  {
    "word": "floodlight",
    "pos": "n.",
    "cn_def": "探照燈；照明燈",
    "en_def": "a very bright lamp that lights a sports field at night",
    "sentence": "The new {{BLANK}} let the team train after dark, and local families now come to watch the evening games.",
    "cn": "新的照明燈讓球隊能在天黑後訓練，而當地家庭現在會來觀看晚間的比賽。"
  },
  {
    "word": "technical suit",
    "pos": "n.phr.",
    "cn_def": "競技泳衣",
    "en_def": "a special tight suit worn to swim faster",
    "sentence": "A {{BLANK}} can take twenty minutes to put on, and swimmers usually save it for their most important races.",
    "cn": "一件競技泳衣可能要花二十分鐘才能穿好，而泳者通常把它留到最重要的比賽才用。"
  }
];

const MCQS = [
  {
    "q": "Scientists used _____ to study her throwing action, and small changes to her elbow angle added two metres to her distance.",
    "options": [
      "steroid",
      "runner-up",
      "deterrence",
      "biomechanics"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The shop filmed my _____ on a treadmill, and then the staff recommended shoes that suited the way my feet landed.",
    "options": [
      "underdog",
      "podium",
      "gait",
      "vein"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Increasing her _____ made her faster at first, but it also tired her legs before the finish line.",
    "options": [
      "talent identification",
      "stride length",
      "energy bar",
      "banned substance"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Good _____ matters more than strength in badminton, because you must reach the shuttle before you can hit it well.",
    "options": [
      "footwork",
      "steroid",
      "implementation",
      "relapse"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Cyclists ride close behind each other to reduce _____, so the rider at the front uses far more energy.",
    "options": [
      "imposition",
      "conduit",
      "drag",
      "surgery"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Her new helmet is more _____ than the old one, and the team says it saves several seconds over forty kilometres.",
    "options": [
      "permissible",
      "aerodynamic",
      "high-intensity",
      "fast-twitch"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Gymnasts keep their _____ low when they land, because a low body position helps them stay steady.",
    "options": [
      "centre of gravity",
      "time frame",
      "world record",
      "tennis elbow"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "A looser _____ on the bat gives you faster hands, but you must still hold it firmly enough when you swing.",
    "options": [
      "lung",
      "debut",
      "supervision",
      "grip"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "My old shoes had no _____ on the wet court, so I slipped twice during the first game.",
    "options": [
      "cross-training",
      "endowment",
      "traction",
      "medallist"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Shoes with thick _____ protect your knees on hard roads, although some runners prefer a thinner, lighter sole.",
    "options": [
      "cushioning",
      "kneecap",
      "bandage",
      "inversion"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Each _____ on a sprinter's shoe digs into the track, so she can push off powerfully at the start.",
    "options": [
      "underdog",
      "marathon",
      "bloodstream",
      "spike"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "He changed to longer _____ because the pitch was muddy, and after that he stopped sliding on every turn.",
    "options": [
      "ankle",
      "stud",
      "caffeine",
      "sprain"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Cycling without a _____ is dangerous, so our school will not let students join the road race unless they wear one.",
    "options": [
      "ligament",
      "surgery",
      "typology",
      "helmet"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Every player must wear a _____ in rugby, because a knock to the face can easily break a tooth.",
    "options": [
      "artery",
      "mouthguard",
      "sprain",
      "metabolism"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "He forgot his _____ before the game, so a teammate kindly lent him an old pair.",
    "options": [
      "red blood cell",
      "body of evidence",
      "shin pad",
      "muscle fibre"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "My _____ leaked during the race, so I could hardly see the lane rope for the last fifty metres.",
    "options": [
      "goggles",
      "substitution",
      "gamesmanship",
      "equivalence"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "A _____ on his chest sends data to his phone, so he can see when he is training too hard.",
    "options": [
      "energy bar",
      "heart rate",
      "heart-rate monitor",
      "gender gap"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The cyclist spent a day in a _____, and the engineers changed her riding position to cut the air resistance.",
    "options": [
      "control group",
      "sports drink",
      "interval training",
      "wind tunnel"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The jumper landed on a _____, so the scientists could measure exactly how hard she pushed off.",
    "options": [
      "MRI scan",
      "force plate",
      "world record",
      "tennis elbow"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "A _____ filmed his serve at a thousand frames a second, and the footage showed a small fault in his wrist.",
    "options": [
      "high-speed camera",
      "strength training",
      "best practice",
      "heart rate"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The team does _____ every Monday, so the players can see their own mistakes instead of just hearing about them.",
    "options": [
      "extra time",
      "lactic acid",
      "video analysis",
      "red blood cell"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Modern coaching has become very _____, but good coaches still trust what they see with their own eyes.",
    "options": [
      "abdominal",
      "proportionate",
      "requisite",
      "data-driven"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "My grandfather carries a simple _____ in his pocket, and he walks around the block again if he has not reached ten thousand steps.",
    "options": [
      "pedometer",
      "macronutrient",
      "average",
      "glycogen"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Each runner wears a _____ on one shoe, so the computer records the exact moment they cross the line.",
    "options": [
      "rib cage",
      "timing chip",
      "ice pack",
      "whey protein"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "She was given the outside _____ for the final, but she still swam a personal best and took the bronze.",
    "options": [
      "lane",
      "semi-final",
      "exemption",
      "ankle"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Our school replaced the muddy field with _____, so matches are no longer cancelled when it rains.",
    "options": [
      "sports science",
      "case study",
      "pep talk",
      "artificial turf"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The new _____ let the team train after dark, and local families now come to watch the evening games.",
    "options": [
      "sprain",
      "floodlight",
      "tendon",
      "glycogen"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "A _____ can take twenty minutes to put on, and swimmers usually save it for their most important races.",
    "options": [
      "away game",
      "gender gap",
      "technical suit",
      "fair play"
    ],
    "answer": 2,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "biomechanics": {
    "pos": "n.",
    "en_def": "the study of how the body moves",
    "cn_def": "生物力學"
  },
  "gait": {
    "pos": "n.",
    "en_def": "the way a person walks or runs",
    "cn_def": "步態"
  },
  "stride length": {
    "pos": "n.phr.",
    "en_def": "the distance covered in one step while running",
    "cn_def": "步幅"
  },
  "footwork": {
    "pos": "n.",
    "en_def": "the way a player moves their feet in a sport",
    "cn_def": "腳步動作"
  },
  "drag": {
    "pos": "n.",
    "en_def": "the force of air or water that slows a moving body",
    "cn_def": "阻力"
  },
  "aerodynamic": {
    "pos": "adj.",
    "en_def": "shaped so that air passes over it easily",
    "cn_def": "空氣力學的；流線的"
  },
  "centre of gravity": {
    "pos": "n.phr.",
    "en_def": "the point where the weight of a body is balanced",
    "cn_def": "重心"
  },
  "grip": {
    "pos": "n.",
    "en_def": "the way you hold something, or the ability to hold it firmly",
    "cn_def": "握法；抓力"
  },
  "traction": {
    "pos": "n.",
    "en_def": "the grip of something on a surface",
    "cn_def": "抓地力"
  },
  "cushioning": {
    "pos": "n.",
    "en_def": "soft material that reduces the shock of landing",
    "cn_def": "緩衝；避震"
  },
  "spike": {
    "pos": "n.",
    "en_def": "a sharp point on the bottom of a sports shoe",
    "cn_def": "釘鞋釘"
  },
  "stud": {
    "pos": "n.",
    "en_def": "a small lump on the bottom of a football boot",
    "cn_def": "鞋釘；防滑釘"
  },
  "helmet": {
    "pos": "n.",
    "en_def": "a hard hat that protects the head",
    "cn_def": "頭盔；安全帽"
  },
  "mouthguard": {
    "pos": "n.",
    "en_def": "a soft plastic shield worn to protect the teeth",
    "cn_def": "護齒套"
  },
  "shin pad": {
    "pos": "n.phr.",
    "en_def": "a hard cover that protects the front of the lower leg",
    "cn_def": "護脛"
  },
  "goggles": {
    "pos": "n.",
    "en_def": "special glasses that protect the eyes",
    "cn_def": "蛙鏡；護目鏡"
  },
  "heart-rate monitor": {
    "pos": "n.phr.",
    "en_def": "a device that measures how fast your heart beats",
    "cn_def": "心率監測器"
  },
  "wind tunnel": {
    "pos": "n.phr.",
    "en_def": "a room where air is blown over a person to test their shape",
    "cn_def": "風洞"
  },
  "force plate": {
    "pos": "n.phr.",
    "en_def": "a board that measures the push of a foot on the ground",
    "cn_def": "測力板"
  },
  "high-speed camera": {
    "pos": "n.phr.",
    "en_def": "a camera that records very fast movement in detail",
    "cn_def": "高速攝影機"
  },
  "video analysis": {
    "pos": "n.phr.",
    "en_def": "studying recorded film to improve performance",
    "cn_def": "影像分析"
  },
  "data-driven": {
    "pos": "adj.",
    "en_def": "based on information and numbers",
    "cn_def": "數據驅動的"
  },
  "pedometer": {
    "pos": "n.",
    "en_def": "a device that counts how many steps you take",
    "cn_def": "計步器"
  },
  "timing chip": {
    "pos": "n.phr.",
    "en_def": "a small electronic tag that records a runner's race time",
    "cn_def": "計時晶片"
  },
  "lane": {
    "pos": "n.",
    "en_def": "one of the marked paths on a track or in a pool",
    "cn_def": "跑道；水道"
  },
  "artificial turf": {
    "pos": "n.phr.",
    "en_def": "a surface of plastic grass used for sports",
    "cn_def": "人工草皮"
  },
  "floodlight": {
    "pos": "n.",
    "en_def": "a very bright lamp that lights a sports field at night",
    "cn_def": "探照燈；照明燈"
  },
  "technical suit": {
    "pos": "n.phr.",
    "en_def": "a special tight suit worn to swim faster",
    "cn_def": "競技泳衣"
  },
  "steroid": {
    "pos": "n.",
    "en_def": "a drug that builds muscle quickly but harms health",
    "cn_def": "類固醇"
  },
  "runner-up": {
    "pos": "n.",
    "en_def": "the person or team that finishes second",
    "cn_def": "第二名"
  },
  "deterrence": {
    "pos": "n.",
    "en_def": "the act of stopping people from doing something by frightening them",
    "cn_def": "嚇阻"
  },
  "underdog": {
    "pos": "n.",
    "en_def": "a player or team not expected to win",
    "cn_def": "弱隊；不被看好的一方"
  },
  "podium": {
    "pos": "n.",
    "en_def": "the raised platform where the top three athletes stand",
    "cn_def": "頒獎台"
  },
  "vein": {
    "pos": "n.",
    "en_def": "a tube that carries blood back to the heart",
    "cn_def": "靜脈"
  },
  "talent identification": {
    "pos": "n.phr.",
    "en_def": "the process of finding young people with ability",
    "cn_def": "選才；人才發掘"
  },
  "energy bar": {
    "pos": "n.phr.",
    "en_def": "a small snack bar that gives quick energy",
    "cn_def": "能量棒"
  },
  "banned substance": {
    "pos": "n.phr.",
    "en_def": "a drug that athletes are not allowed to use",
    "cn_def": "禁用物質"
  },
  "implementation": {
    "pos": "n.",
    "en_def": "the act of putting a plan into action",
    "cn_def": "實施；執行"
  },
  "relapse": {
    "pos": "n.",
    "en_def": "the return of an illness or injury after it got better",
    "cn_def": "復發"
  },
  "imposition": {
    "pos": "n.",
    "en_def": "the act of forcing a rule or burden on people",
    "cn_def": "強加；施加"
  },
  "conduit": {
    "pos": "n.",
    "en_def": "a channel through which something passes",
    "cn_def": "管道；通道"
  },
  "surgery": {
    "pos": "n.",
    "en_def": "a medical operation",
    "cn_def": "手術"
  },
  "permissible": {
    "pos": "adj.",
    "en_def": "allowed by the rules",
    "cn_def": "允許的"
  },
  "high-intensity": {
    "pos": "adj.",
    "en_def": "very hard and fast",
    "cn_def": "高強度的"
  },
  "fast-twitch": {
    "pos": "adj.",
    "en_def": "describing muscle fibres that work quickly for short bursts",
    "cn_def": "快縮型的"
  },
  "time frame": {
    "pos": "n.phr.",
    "en_def": "the period during which something happens",
    "cn_def": "時程；時間範圍"
  },
  "world record": {
    "pos": "n.phr.",
    "en_def": "the best result ever achieved in the world",
    "cn_def": "世界紀錄"
  },
  "tennis elbow": {
    "pos": "n.phr.",
    "en_def": "pain in the outside of the elbow from overuse",
    "cn_def": "網球肘"
  },
  "lung": {
    "pos": "n.",
    "en_def": "one of the two organs in your chest used for breathing",
    "cn_def": "肺"
  },
  "debut": {
    "pos": "n.",
    "en_def": "a player's first appearance for a team",
    "cn_def": "初次登場"
  },
  "supervision": {
    "pos": "n.",
    "en_def": "the act of watching and directing an activity",
    "cn_def": "監督；指導"
  },
  "cross-training": {
    "pos": "n.",
    "en_def": "doing different types of exercise to stay fit",
    "cn_def": "交叉訓練"
  },
  "endowment": {
    "pos": "n.",
    "en_def": "a large gift of money given to an institution",
    "cn_def": "捐贈基金"
  },
  "medallist": {
    "pos": "n.",
    "en_def": "a person who has won a medal",
    "cn_def": "獎牌得主"
  },
  "kneecap": {
    "pos": "n.",
    "en_def": "the small round bone at the front of the knee",
    "cn_def": "膝蓋骨；髕骨"
  },
  "bandage": {
    "pos": "n.",
    "en_def": "a long strip of cloth used to cover or support an injury",
    "cn_def": "繃帶"
  },
  "inversion": {
    "pos": "n.",
    "en_def": "a change that puts something the opposite way round",
    "cn_def": "顛倒；倒轉"
  },
  "marathon": {
    "pos": "n.",
    "en_def": "a running race of about 42 kilometres",
    "cn_def": "馬拉松"
  },
  "bloodstream": {
    "pos": "n.",
    "en_def": "the blood flowing around the body",
    "cn_def": "血液循環；血流"
  },
  "ankle": {
    "pos": "n.",
    "en_def": "the joint between the foot and the leg",
    "cn_def": "腳踝"
  },
  "caffeine": {
    "pos": "n.",
    "en_def": "a substance in coffee and tea that makes you feel awake",
    "cn_def": "咖啡因"
  },
  "sprain": {
    "pos": "n.",
    "en_def": "an injury where a joint is twisted and hurt",
    "cn_def": "扭傷"
  },
  "ligament": {
    "pos": "n.",
    "en_def": "a strong band that holds bones together at a joint",
    "cn_def": "韌帶"
  },
  "typology": {
    "pos": "n.",
    "en_def": "a system of grouping things by type",
    "cn_def": "類型學；分類系統"
  },
  "artery": {
    "pos": "n.",
    "en_def": "a tube that carries blood away from the heart",
    "cn_def": "動脈"
  },
  "metabolism": {
    "pos": "n.",
    "en_def": "the chemical processes that turn food into energy",
    "cn_def": "新陳代謝"
  },
  "red blood cell": {
    "pos": "n.phr.",
    "en_def": "a tiny cell in the blood that carries oxygen",
    "cn_def": "紅血球"
  },
  "body of evidence": {
    "pos": "n.phr.",
    "en_def": "all the information that supports an idea",
    "cn_def": "眾多證據"
  },
  "muscle fibre": {
    "pos": "n.phr.",
    "en_def": "one of the long thin cells that form a muscle",
    "cn_def": "肌纖維"
  },
  "substitution": {
    "pos": "n.",
    "en_def": "the act of replacing one thing with another",
    "cn_def": "替換；代換"
  },
  "gamesmanship": {
    "pos": "n.",
    "en_def": "the use of unfair tricks that are not quite against the rules",
    "cn_def": "耍小手段"
  },
  "equivalence": {
    "pos": "n.",
    "en_def": "the state of being equal in value or meaning",
    "cn_def": "等同；相等"
  },
  "heart rate": {
    "pos": "n.phr.",
    "en_def": "how many times your heart beats in one minute",
    "cn_def": "心率；心跳速率"
  },
  "gender gap": {
    "pos": "n.phr.",
    "en_def": "an unfair difference between men and women",
    "cn_def": "性別差距"
  },
  "control group": {
    "pos": "n.phr.",
    "en_def": "a group that does not receive the treatment being tested",
    "cn_def": "對照組"
  },
  "sports drink": {
    "pos": "n.phr.",
    "en_def": "a drink with sugar and salts for people who exercise",
    "cn_def": "運動飲料"
  },
  "interval training": {
    "pos": "n.phr.",
    "en_def": "exercise that mixes very hard periods with easy rest periods",
    "cn_def": "間歇訓練"
  },
  "mri scan": {
    "pos": "n.phr.",
    "en_def": "a detailed picture of the inside of the body made by a machine",
    "cn_def": "磁振造影掃描"
  },
  "strength training": {
    "pos": "n.phr.",
    "en_def": "exercise that uses weights to make muscles stronger",
    "cn_def": "肌力訓練"
  },
  "best practice": {
    "pos": "n.phr.",
    "en_def": "the methods accepted as the most effective",
    "cn_def": "最佳做法"
  },
  "extra time": {
    "pos": "n.phr.",
    "en_def": "additional playing time when the scores are equal",
    "cn_def": "延長賽"
  },
  "lactic acid": {
    "pos": "n.phr.",
    "en_def": "a substance made in muscles during very hard exercise",
    "cn_def": "乳酸"
  },
  "abdominal": {
    "pos": "adj.",
    "en_def": "relating to the stomach area",
    "cn_def": "腹部的"
  },
  "proportionate": {
    "pos": "adj.",
    "en_def": "matching something else in size or importance",
    "cn_def": "相稱的；成比例的"
  },
  "requisite": {
    "pos": "adj.",
    "en_def": "needed for a particular purpose",
    "cn_def": "必要的"
  },
  "macronutrient": {
    "pos": "n.",
    "en_def": "a nutrient we need in large amounts: protein, fat or carbohydrate",
    "cn_def": "巨量營養素"
  },
  "average": {
    "pos": "n.",
    "en_def": "the usual amount, found by adding and dividing",
    "cn_def": "平均值"
  },
  "glycogen": {
    "pos": "n.",
    "en_def": "the form in which the body stores sugar for energy",
    "cn_def": "肝醣"
  },
  "rib cage": {
    "pos": "n.phr.",
    "en_def": "the bones that curve around your chest",
    "cn_def": "胸腔；肋骨"
  },
  "ice pack": {
    "pos": "n.phr.",
    "en_def": "a cold bag put on an injury to reduce swelling",
    "cn_def": "冰敷袋"
  },
  "whey protein": {
    "pos": "n.phr.",
    "en_def": "a milk protein powder used to help muscles recover",
    "cn_def": "乳清蛋白"
  },
  "semi-final": {
    "pos": "n.",
    "en_def": "the match before the final",
    "cn_def": "準決賽"
  },
  "exemption": {
    "pos": "n.",
    "en_def": "permission not to do or pay something",
    "cn_def": "豁免；免除"
  },
  "sports science": {
    "pos": "n.phr.",
    "en_def": "the study of the body and mind in sport",
    "cn_def": "運動科學"
  },
  "case study": {
    "pos": "n.phr.",
    "en_def": "a detailed study of one person or situation",
    "cn_def": "個案研究"
  },
  "pep talk": {
    "pos": "n.phr.",
    "en_def": "a short encouraging speech before or during a match",
    "cn_def": "激勵講話"
  },
  "tendon": {
    "pos": "n.",
    "en_def": "a strong band that joins a muscle to a bone",
    "cn_def": "肌腱"
  },
  "away game": {
    "pos": "n.phr.",
    "en_def": "a match played at the opponent's ground",
    "cn_def": "客場比賽"
  },
  "fair play": {
    "pos": "n.phr.",
    "en_def": "honest and respectful behaviour in sport",
    "cn_def": "公平競賽；運動家精神"
  }
};

const EXTRA_GLOSSES = {};
