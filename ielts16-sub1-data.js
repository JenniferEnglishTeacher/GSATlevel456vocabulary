// Topic 16 Subunit 1 Quiz Data: The Human Body & Anatomy 人體與解剖
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T16 S01 - The Human Body & Anatomy 人體與解剖",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "muscle",
    "pos": "n.",
    "cn_def": "肌肉",
    "en_def": "body tissue that tightens and relaxes to make you move",
    "sentence": "Lifting heavy boxes every day made my uncle's arm {{BLANK}} very strong, but he still hurt his back last month.",
    "cn": "每天搬重箱子讓我叔叔的手臂肌肉非常強壯，但他上個月還是傷了背。"
  },
  {
    "word": "muscular",
    "pos": "adj.",
    "cn_def": "肌肉發達的",
    "en_def": "having big, strong muscles",
    "sentence": "The swimmer has a very {{BLANK}} back and shoulders, because she trains in the pool for four hours every morning.",
    "cn": "這位泳者的背部和肩膀肌肉非常發達，因為她每天早上在泳池訓練四個小時。"
  },
  {
    "word": "tendon",
    "pos": "n.",
    "cn_def": "肌腱",
    "en_def": "a strong band that joins a muscle to a bone",
    "sentence": "The runner felt sharp pain above his heel, so the doctor checked the {{BLANK}} and told him to rest for two weeks.",
    "cn": "那位跑者感到腳跟上方一陣刺痛，所以醫生檢查了他的肌腱，並叫他休息兩週。"
  },
  {
    "word": "ligament",
    "pos": "n.",
    "cn_def": "韌帶",
    "en_def": "a strong band that holds bones together at a joint",
    "sentence": "She twisted her knee badly during the basketball game, and the scan showed that one {{BLANK}} was partly damaged.",
    "cn": "她在籃球比賽中嚴重扭傷膝蓋，而掃描顯示有一條韌帶部分受損。"
  },
  {
    "word": "cartilage",
    "pos": "n.",
    "cn_def": "軟骨",
    "en_def": "smooth, soft tissue that protects the ends of bones",
    "sentence": "Years of running on hard roads wore down the {{BLANK}} in his knees, so now he cycles instead of jogging.",
    "cn": "多年在堅硬路面上跑步磨損了他膝蓋的軟骨，所以他現在改騎自行車而不慢跑了。"
  },
  {
    "word": "bone density",
    "pos": "n.phr.",
    "cn_def": "骨質密度",
    "en_def": "how strong and thick your bones are",
    "sentence": "Jumping and weight training can improve your {{BLANK}}, so teenagers who exercise often have stronger bones later in life.",
    "cn": "跳躍和重量訓練能提升你的骨質密度，所以常運動的青少年日後通常擁有更強壯的骨骼。"
  },
  {
    "word": "hamstring",
    "pos": "n.",
    "cn_def": "大腿後肌；膕繩肌",
    "en_def": "a muscle at the back of the upper leg",
    "sentence": "The striker grabbed the back of his leg after a fast sprint, and the coach said he had probably pulled a {{BLANK}}.",
    "cn": "那位前鋒在快速衝刺後抓住大腿後側，而教練說他可能拉傷了大腿後肌。"
  },
  {
    "word": "quadriceps",
    "pos": "n.",
    "cn_def": "股四頭肌",
    "en_def": "the large muscle at the front of the upper leg",
    "sentence": "Squats build the {{BLANK}} at the front of your thighs, and strong thighs help protect your knees when you land.",
    "cn": "深蹲能鍛鍊大腿前側的股四頭肌，而強壯的大腿能在你落地時保護膝蓋。"
  },
  {
    "word": "biceps",
    "pos": "n.",
    "cn_def": "二頭肌",
    "en_def": "the muscle at the front of the upper arm",
    "sentence": "My brother lifts dumbbells every night to make his {{BLANK}} bigger, but his coach says he should train his legs too.",
    "cn": "我哥哥每晚舉啞鈴想讓他的二頭肌變大，但他的教練說他也應該練腿。"
  },
  {
    "word": "abdominal",
    "pos": "adj.",
    "cn_def": "腹部的",
    "en_def": "relating to the stomach area",
    "sentence": "Planks strengthen your {{BLANK}} muscles, and a strong middle helps you keep good posture when you sit at a desk.",
    "cn": "棒式能強化你的腹部肌肉，而強壯的核心能幫助你坐在書桌前時保持良好姿勢。"
  },
  {
    "word": "pelvis",
    "pos": "n.",
    "cn_def": "骨盆",
    "en_def": "the large bone structure at the base of the spine",
    "sentence": "The dancer fell awkwardly during practice, and an X-ray showed a small crack in her {{BLANK}}, so she missed the show.",
    "cn": "那位舞者在練習時摔得很不順，X光顯示她的骨盆有一道小裂痕，所以她錯過了演出。"
  },
  {
    "word": "ankle",
    "pos": "n.",
    "cn_def": "腳踝",
    "en_def": "the joint between the foot and the leg",
    "sentence": "I landed on another player's foot and twisted my {{BLANK}}, so I had to watch the rest of the match from the bench.",
    "cn": "我落地時踩到另一名球員的腳而扭傷了腳踝，所以我只能坐在板凳上看完剩下的比賽。"
  },
  {
    "word": "kneecap",
    "pos": "n.",
    "cn_def": "膝蓋骨；髕骨",
    "en_def": "the small round bone at the front of the knee",
    "sentence": "The goalkeeper wore thick pads to protect his {{BLANK}}, because he often dives onto the hard ground during training.",
    "cn": "那位守門員戴著厚護墊來保護他的膝蓋骨，因為他在訓練中常常撲倒在堅硬的地面上。"
  },
  {
    "word": "rib cage",
    "pos": "n.phr.",
    "cn_def": "胸腔；肋骨",
    "en_def": "the bones that curve around your chest",
    "sentence": "Boxers train their stomach muscles to protect their {{BLANK}}, because a hard punch to the chest can break a bone.",
    "cn": "拳擊手會訓練腹肌來保護胸腔，因為胸口挨一記重拳可能會打斷骨頭。"
  },
  {
    "word": "lung",
    "pos": "n.",
    "cn_def": "肺",
    "en_def": "one of the two organs in your chest used for breathing",
    "sentence": "Swimmers usually have strong {{BLANK}}, because they must hold their breath underwater and breathe quickly between strokes.",
    "cn": "游泳選手通常擁有強壯的肺，因為他們必須在水下憋氣，並在划水之間快速換氣。"
  },
  {
    "word": "heart rate",
    "pos": "n.phr.",
    "cn_def": "心率；心跳速率",
    "en_def": "how many times your heart beats in one minute",
    "sentence": "My smartwatch shows my {{BLANK}} while I run, so I slow down when the number gets too high.",
    "cn": "我的智慧手錶會在我跑步時顯示我的心率，所以當數字太高時我就放慢速度。"
  },
  {
    "word": "artery",
    "pos": "n.",
    "cn_def": "動脈",
    "en_def": "a tube that carries blood away from the heart",
    "sentence": "Regular exercise keeps every {{BLANK}} in your body flexible, while smoking and junk food can make them hard and narrow.",
    "cn": "規律運動能讓你體內的每一條動脈保持彈性，而抽菸和垃圾食物會讓它們變硬變窄。"
  },
  {
    "word": "vein",
    "pos": "n.",
    "cn_def": "靜脈",
    "en_def": "a tube that carries blood back to the heart",
    "sentence": "After a hard workout the {{BLANK}} in his arms stood out clearly, because more blood was flowing through his muscles.",
    "cn": "激烈運動後他手臂上的靜脈清楚浮現，因為有更多血液流經他的肌肉。"
  },
  {
    "word": "capillary",
    "pos": "n.",
    "cn_def": "微血管",
    "en_def": "a very thin blood tube in the body",
    "sentence": "Endurance training creates more {{BLANK}} around the muscles, so oxygen can reach the working cells more easily.",
    "cn": "耐力訓練會在肌肉周圍形成更多微血管，所以氧氣能更容易抵達運作中的細胞。"
  },
  {
    "word": "oxygen",
    "pos": "n.",
    "cn_def": "氧氣",
    "en_def": "the gas in the air that our bodies need",
    "sentence": "Climbers on Mount Everest often carry extra {{BLANK}}, because the air at the top is very thin and breathing becomes difficult.",
    "cn": "攀登聖母峰的登山者常常攜帶額外的氧氣，因為山頂的空氣非常稀薄，呼吸會變得困難。"
  },
  {
    "word": "haemoglobin",
    "pos": "n.",
    "cn_def": "血紅素",
    "en_def": "the substance in red blood cells that carries oxygen",
    "sentence": "Athletes who train in the mountains produce more {{BLANK}}, so their blood can carry extra oxygen when they race at sea level.",
    "cn": "在山區訓練的運動員會產生更多血紅素，所以他們在海平面比賽時血液能攜帶更多氧氣。"
  },
  {
    "word": "red blood cell",
    "pos": "n.phr.",
    "cn_def": "紅血球",
    "en_def": "a tiny cell in the blood that carries oxygen",
    "sentence": "Each {{BLANK}} carries oxygen from the lungs to the muscles, and low iron can reduce how many your body makes.",
    "cn": "每一個紅血球都會把氧氣從肺部運送到肌肉，而缺鐵會減少你身體製造紅血球的數量。"
  },
  {
    "word": "lactic acid",
    "pos": "n.phr.",
    "cn_def": "乳酸",
    "en_def": "a substance made in muscles during very hard exercise",
    "sentence": "Her legs burned at the end of the 400-metre race, and her coach said {{BLANK}} was building up in her muscles.",
    "cn": "400公尺賽跑到最後她的雙腿灼熱，而教練說是乳酸正在她的肌肉中累積。"
  },
  {
    "word": "glycogen",
    "pos": "n.",
    "cn_def": "肝醣",
    "en_def": "the form in which the body stores sugar for energy",
    "sentence": "Marathon runners eat lots of pasta before a race, because their muscles need full stores of {{BLANK}} for the long distance.",
    "cn": "馬拉松跑者在賽前會吃很多義大利麵，因為他們的肌肉需要儲滿肝醣來應付長距離。"
  },
  {
    "word": "metabolism",
    "pos": "n.",
    "cn_def": "新陳代謝",
    "en_def": "the chemical processes that turn food into energy",
    "sentence": "My {{BLANK}} seems to slow down in winter, so I try to walk more and eat lighter meals when the weather gets cold.",
    "cn": "我的新陳代謝似乎在冬天變慢，所以天氣變冷時我會試著多走路，並吃得清淡一點。"
  },
  {
    "word": "metabolic",
    "pos": "adj.",
    "cn_def": "新陳代謝的",
    "en_def": "relating to how the body uses energy",
    "sentence": "Short, intense workouts raise your {{BLANK}} rate for hours afterwards, so your body keeps burning extra energy while you rest.",
    "cn": "短時間高強度的運動會讓你的代謝率在之後數小時保持升高，所以你的身體在休息時仍持續燃燒額外的能量。"
  },
  {
    "word": "muscle fibre",
    "pos": "n.phr.",
    "cn_def": "肌纖維",
    "en_def": "one of the long thin cells that form a muscle",
    "sentence": "Every {{BLANK}} gets tiny tears during heavy lifting, but the body repairs them and makes the muscle stronger.",
    "cn": "每一條肌纖維在大重量訓練時都會產生微小撕裂，但身體會修復它們，讓肌肉變得更強壯。"
  },
  {
    "word": "fast-twitch",
    "pos": "adj.",
    "cn_def": "快縮型的",
    "en_def": "describing muscle fibres that work quickly for short bursts",
    "sentence": "Sprinters have many {{BLANK}} muscle fibres, so they can explode out of the blocks, although they tire more quickly than distance runners.",
    "cn": "短跑選手擁有許多快縮型肌纖維，所以他們能從起跑架爆發衝出，雖然他們比長跑選手更容易疲勞。"
  },
  {
    "word": "slow-twitch",
    "pos": "adj.",
    "cn_def": "慢縮型的",
    "en_def": "describing muscle fibres that work for a long time without tiring",
    "sentence": "Long-distance cyclists rely on {{BLANK}} fibres, because these muscles can keep working for hours while using oxygen efficiently.",
    "cn": "長途自行車選手依賴慢縮型肌纖維，因為這些肌肉能在有效利用氧氣的同時持續運作好幾個小時。"
  }
];

const MCQS = [
  {
    "q": "Lifting heavy boxes every day made my uncle's arm _____ very strong, but he still hurt his back last month.",
    "options": [
      "muscle",
      "saturation",
      "bloodstream",
      "derivation"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The swimmer has a very _____ back and shoulders, because she trains in the pool for four hours every morning.",
    "options": [
      "undesirable",
      "unproven",
      "unilateral",
      "muscular"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The runner felt sharp pain above his heel, so the doctor checked the _____ and told him to rest for two weeks.",
    "options": [
      "hydration",
      "tendon",
      "lane",
      "formulation"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "She twisted her knee badly during the basketball game, and the scan showed that one _____ was partly damaged.",
    "options": [
      "stiffness",
      "dissemination",
      "ligament",
      "creatine"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Years of running on hard roads wore down the _____ in his knees, so now he cycles instead of jogging.",
    "options": [
      "stipulation",
      "weightlifting",
      "utilisation",
      "cartilage"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Jumping and weight training can improve your _____, so teenagers who exercise often have stronger bones later in life.",
    "options": [
      "pilot study",
      "bone density",
      "margin of error",
      "banned substance"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The striker grabbed the back of his leg after a fast sprint, and the coach said he had probably pulled a _____.",
    "options": [
      "hamstring",
      "stud",
      "biomechanics",
      "mediation"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Squats build the _____ at the front of your thighs, and strong thighs help protect your knees when you land.",
    "options": [
      "athleticism",
      "average",
      "quadriceps",
      "scout"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "My brother lifts dumbbells every night to make his _____ bigger, but his coach says he should train his legs too.",
    "options": [
      "differentiation",
      "biceps",
      "semi-final",
      "formulation"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Planks strengthen your _____ muscles, and a strong middle helps you keep good posture when you sit at a desk.",
    "options": [
      "equivocal",
      "short-term",
      "sore",
      "abdominal"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The dancer fell awkwardly during practice, and an X-ray showed a small crack in her _____, so she missed the show.",
    "options": [
      "gamesmanship",
      "dissemination",
      "pelvis",
      "synthesis"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "I landed on another player's foot and twisted my _____, so I had to watch the rest of the match from the bench.",
    "options": [
      "ankle",
      "drag",
      "carb-loading",
      "barbell"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The goalkeeper wore thick pads to protect his _____, because he often dives onto the hard ground during training.",
    "options": [
      "replication",
      "swelling",
      "upside",
      "kneecap"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Boxers train their stomach muscles to protect their _____, because a hard punch to the chest can break a bone.",
    "options": [
      "margin of error",
      "first aid",
      "rib cage",
      "heart-rate monitor"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Swimmers usually have strong _____, because they must hold their breath underwater and breathe quickly between strokes.",
    "options": [
      "lung",
      "inversion",
      "blister",
      "optimisation"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "My smartwatch shows my _____ while I run, so I slow down when the number gets too high.",
    "options": [
      "whey protein",
      "heart rate",
      "home crowd",
      "spectator sport"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Regular exercise keeps every _____ in your body flexible, while smoking and junk food can make them hard and narrow.",
    "options": [
      "artery",
      "subtlety",
      "gait",
      "hydration"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "After a hard workout the _____ in his arms stood out clearly, because more blood was flowing through his muscles.",
    "options": [
      "spike",
      "soreness",
      "vein",
      "helmet"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Endurance training creates more _____ around the muscles, so oxygen can reach the working cells more easily.",
    "options": [
      "runner-up",
      "capillary",
      "enactment",
      "barbell"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Climbers on Mount Everest often carry extra _____, because the air at the top is very thin and breathing becomes difficult.",
    "options": [
      "Paralympics",
      "imposition",
      "stiffness",
      "oxygen"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Athletes who train in the mountains produce more _____, so their blood can carry extra oxygen when they race at sea level.",
    "options": [
      "barbell",
      "haemoglobin",
      "synthesis",
      "enactment"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Each _____ carries oxygen from the lungs to the muscles, and low iron can reduce how many your body makes.",
    "options": [
      "knockout stage",
      "whey protein",
      "pep talk",
      "red blood cell"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Her legs burned at the end of the 400-metre race, and her coach said _____ was building up in her muscles.",
    "options": [
      "lactic acid",
      "causal link",
      "strength training",
      "mental toughness"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Marathon runners eat lots of pasta before a race, because their muscles need full stores of _____ for the long distance.",
    "options": [
      "captain",
      "saturation",
      "glycogen",
      "grip"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "My _____ seems to slow down in winter, so I try to walk more and eat lighter meals when the weather gets cold.",
    "options": [
      "metabolism",
      "dumbbell",
      "touchstone",
      "equivalence"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Short, intense workouts raise your _____ rate for hours afterwards, so your body keeps burning extra energy while you rest.",
    "options": [
      "anaerobic",
      "seeded",
      "underrated",
      "metabolic"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Every _____ gets tiny tears during heavy lifting, but the body repairs them and makes the muscle stronger.",
    "options": [
      "overuse injury",
      "muscle fibre",
      "personal trainer",
      "follow-up study"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Sprinters have many _____ muscle fibres, so they can explode out of the blocks, although they tire more quickly than distance runners.",
    "options": [
      "low-impact",
      "long-term",
      "fast-twitch",
      "aerodynamic"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Long-distance cyclists rely on _____ fibres, because these muscles can keep working for hours while using oxygen efficiently.",
    "options": [
      "slow-twitch",
      "age-appropriate",
      "debilitating",
      "illustrative"
    ],
    "answer": 0,
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "muscle": {
    "pos": "n.",
    "en_def": "body tissue that tightens and relaxes to make you move",
    "cn_def": "肌肉"
  },
  "muscular": {
    "pos": "adj.",
    "en_def": "having big, strong muscles",
    "cn_def": "肌肉發達的"
  },
  "tendon": {
    "pos": "n.",
    "en_def": "a strong band that joins a muscle to a bone",
    "cn_def": "肌腱"
  },
  "ligament": {
    "pos": "n.",
    "en_def": "a strong band that holds bones together at a joint",
    "cn_def": "韌帶"
  },
  "cartilage": {
    "pos": "n.",
    "en_def": "smooth, soft tissue that protects the ends of bones",
    "cn_def": "軟骨"
  },
  "bone density": {
    "pos": "n.phr.",
    "en_def": "how strong and thick your bones are",
    "cn_def": "骨質密度"
  },
  "hamstring": {
    "pos": "n.",
    "en_def": "a muscle at the back of the upper leg",
    "cn_def": "大腿後肌；膕繩肌"
  },
  "quadriceps": {
    "pos": "n.",
    "en_def": "the large muscle at the front of the upper leg",
    "cn_def": "股四頭肌"
  },
  "biceps": {
    "pos": "n.",
    "en_def": "the muscle at the front of the upper arm",
    "cn_def": "二頭肌"
  },
  "abdominal": {
    "pos": "adj.",
    "en_def": "relating to the stomach area",
    "cn_def": "腹部的"
  },
  "pelvis": {
    "pos": "n.",
    "en_def": "the large bone structure at the base of the spine",
    "cn_def": "骨盆"
  },
  "ankle": {
    "pos": "n.",
    "en_def": "the joint between the foot and the leg",
    "cn_def": "腳踝"
  },
  "kneecap": {
    "pos": "n.",
    "en_def": "the small round bone at the front of the knee",
    "cn_def": "膝蓋骨；髕骨"
  },
  "rib cage": {
    "pos": "n.phr.",
    "en_def": "the bones that curve around your chest",
    "cn_def": "胸腔；肋骨"
  },
  "lung": {
    "pos": "n.",
    "en_def": "one of the two organs in your chest used for breathing",
    "cn_def": "肺"
  },
  "heart rate": {
    "pos": "n.phr.",
    "en_def": "how many times your heart beats in one minute",
    "cn_def": "心率；心跳速率"
  },
  "artery": {
    "pos": "n.",
    "en_def": "a tube that carries blood away from the heart",
    "cn_def": "動脈"
  },
  "vein": {
    "pos": "n.",
    "en_def": "a tube that carries blood back to the heart",
    "cn_def": "靜脈"
  },
  "capillary": {
    "pos": "n.",
    "en_def": "a very thin blood tube in the body",
    "cn_def": "微血管"
  },
  "oxygen": {
    "pos": "n.",
    "en_def": "the gas in the air that our bodies need",
    "cn_def": "氧氣"
  },
  "haemoglobin": {
    "pos": "n.",
    "en_def": "the substance in red blood cells that carries oxygen",
    "cn_def": "血紅素"
  },
  "red blood cell": {
    "pos": "n.phr.",
    "en_def": "a tiny cell in the blood that carries oxygen",
    "cn_def": "紅血球"
  },
  "lactic acid": {
    "pos": "n.phr.",
    "en_def": "a substance made in muscles during very hard exercise",
    "cn_def": "乳酸"
  },
  "glycogen": {
    "pos": "n.",
    "en_def": "the form in which the body stores sugar for energy",
    "cn_def": "肝醣"
  },
  "metabolism": {
    "pos": "n.",
    "en_def": "the chemical processes that turn food into energy",
    "cn_def": "新陳代謝"
  },
  "metabolic": {
    "pos": "adj.",
    "en_def": "relating to how the body uses energy",
    "cn_def": "新陳代謝的"
  },
  "muscle fibre": {
    "pos": "n.phr.",
    "en_def": "one of the long thin cells that form a muscle",
    "cn_def": "肌纖維"
  },
  "fast-twitch": {
    "pos": "adj.",
    "en_def": "describing muscle fibres that work quickly for short bursts",
    "cn_def": "快縮型的"
  },
  "slow-twitch": {
    "pos": "adj.",
    "en_def": "describing muscle fibres that work for a long time without tiring",
    "cn_def": "慢縮型的"
  },
  "saturation": {
    "pos": "n.",
    "en_def": "the state of being completely full",
    "cn_def": "飽和"
  },
  "bloodstream": {
    "pos": "n.",
    "en_def": "the blood flowing around the body",
    "cn_def": "血液循環；血流"
  },
  "derivation": {
    "pos": "n.",
    "en_def": "the origin of something, or where it comes from",
    "cn_def": "由來；起源"
  },
  "undesirable": {
    "pos": "adj.",
    "en_def": "not wanted because it causes problems",
    "cn_def": "不良的；不受歡迎的"
  },
  "unproven": {
    "pos": "adj.",
    "en_def": "not yet shown to be true or effective",
    "cn_def": "未經證實的"
  },
  "unilateral": {
    "pos": "adj.",
    "en_def": "done by one side only",
    "cn_def": "單方面的"
  },
  "hydration": {
    "pos": "n.",
    "en_def": "having enough water in your body",
    "cn_def": "補水；水分充足"
  },
  "lane": {
    "pos": "n.",
    "en_def": "one of the marked paths on a track or in a pool",
    "cn_def": "跑道；水道"
  },
  "formulation": {
    "pos": "n.",
    "en_def": "the careful making of a plan, rule or product",
    "cn_def": "制定；配方"
  },
  "stiffness": {
    "pos": "n.",
    "en_def": "the state of being hard to move",
    "cn_def": "僵硬"
  },
  "dissemination": {
    "pos": "n.",
    "en_def": "the spreading of information to many people",
    "cn_def": "傳播；散布"
  },
  "creatine": {
    "pos": "n.",
    "en_def": "a natural substance taken to help with short, powerful exercise",
    "cn_def": "肌酸"
  },
  "stipulation": {
    "pos": "n.",
    "en_def": "a condition that must be accepted",
    "cn_def": "規定；條件"
  },
  "weightlifting": {
    "pos": "n.",
    "en_def": "the sport or activity of lifting heavy weights",
    "cn_def": "舉重"
  },
  "utilisation": {
    "pos": "n.",
    "en_def": "the act of using something effectively",
    "cn_def": "利用；運用"
  },
  "pilot study": {
    "pos": "n.phr.",
    "en_def": "a small study done before a larger one",
    "cn_def": "先導研究"
  },
  "margin of error": {
    "pos": "n.phr.",
    "en_def": "the amount by which a result may be wrong",
    "cn_def": "誤差範圍"
  },
  "banned substance": {
    "pos": "n.phr.",
    "en_def": "a drug that athletes are not allowed to use",
    "cn_def": "禁用物質"
  },
  "stud": {
    "pos": "n.",
    "en_def": "a small lump on the bottom of a football boot",
    "cn_def": "鞋釘；防滑釘"
  },
  "biomechanics": {
    "pos": "n.",
    "en_def": "the study of how the body moves",
    "cn_def": "生物力學"
  },
  "mediation": {
    "pos": "n.",
    "en_def": "the act of helping two sides reach an agreement",
    "cn_def": "調解；居中協調"
  },
  "athleticism": {
    "pos": "n.",
    "en_def": "natural physical skill, strength and speed",
    "cn_def": "運動能力"
  },
  "average": {
    "pos": "n.",
    "en_def": "the usual amount, found by adding and dividing",
    "cn_def": "平均值"
  },
  "scout": {
    "pos": "n.",
    "en_def": "a person who looks for talented young players",
    "cn_def": "球探"
  },
  "differentiation": {
    "pos": "n.",
    "en_def": "the process of showing or finding differences",
    "cn_def": "區別；差異化"
  },
  "semi-final": {
    "pos": "n.",
    "en_def": "the match before the final",
    "cn_def": "準決賽"
  },
  "equivocal": {
    "pos": "adj.",
    "en_def": "unclear and open to more than one meaning",
    "cn_def": "含糊的；模稜兩可的"
  },
  "short-term": {
    "pos": "adj.",
    "en_def": "lasting only a short period",
    "cn_def": "短期的"
  },
  "sore": {
    "pos": "adj.",
    "en_def": "painful, especially after exercise",
    "cn_def": "痠痛的"
  },
  "gamesmanship": {
    "pos": "n.",
    "en_def": "the use of unfair tricks that are not quite against the rules",
    "cn_def": "耍小手段"
  },
  "synthesis": {
    "pos": "n.",
    "en_def": "the combining of different ideas into one whole",
    "cn_def": "綜合；整合"
  },
  "drag": {
    "pos": "n.",
    "en_def": "the force of air or water that slows a moving body",
    "cn_def": "阻力"
  },
  "carb-loading": {
    "pos": "n.",
    "en_def": "eating lots of carbohydrates before a long race",
    "cn_def": "肝醣超補；賽前補碳水"
  },
  "barbell": {
    "pos": "n.",
    "en_def": "a long bar with heavy weights on both ends",
    "cn_def": "槓鈴"
  },
  "replication": {
    "pos": "n.",
    "en_def": "the act of repeating a study to check its results",
    "cn_def": "重複驗證"
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
  "first aid": {
    "pos": "n.phr.",
    "en_def": "simple medical help given immediately after an injury",
    "cn_def": "急救"
  },
  "heart-rate monitor": {
    "pos": "n.phr.",
    "en_def": "a device that measures how fast your heart beats",
    "cn_def": "心率監測器"
  },
  "inversion": {
    "pos": "n.",
    "en_def": "a change that puts something the opposite way round",
    "cn_def": "顛倒；倒轉"
  },
  "blister": {
    "pos": "n.",
    "en_def": "a small painful bubble of skin, often from rubbing",
    "cn_def": "水泡"
  },
  "optimisation": {
    "pos": "n.",
    "en_def": "the act of making something as good as possible",
    "cn_def": "最佳化"
  },
  "whey protein": {
    "pos": "n.phr.",
    "en_def": "a milk protein powder used to help muscles recover",
    "cn_def": "乳清蛋白"
  },
  "home crowd": {
    "pos": "n.phr.",
    "en_def": "the supporters watching in their own stadium",
    "cn_def": "主場觀眾"
  },
  "spectator sport": {
    "pos": "n.phr.",
    "en_def": "a sport that many people enjoy watching",
    "cn_def": "觀賞性運動"
  },
  "subtlety": {
    "pos": "n.",
    "en_def": "a small detail that is not easy to notice",
    "cn_def": "細微之處"
  },
  "gait": {
    "pos": "n.",
    "en_def": "the way a person walks or runs",
    "cn_def": "步態"
  },
  "spike": {
    "pos": "n.",
    "en_def": "a sharp point on the bottom of a sports shoe",
    "cn_def": "釘鞋釘"
  },
  "soreness": {
    "pos": "n.",
    "en_def": "a feeling of pain in the muscles",
    "cn_def": "痠痛感"
  },
  "helmet": {
    "pos": "n.",
    "en_def": "a hard hat that protects the head",
    "cn_def": "頭盔；安全帽"
  },
  "runner-up": {
    "pos": "n.",
    "en_def": "the person or team that finishes second",
    "cn_def": "第二名"
  },
  "enactment": {
    "pos": "n.",
    "en_def": "the act of making something into law",
    "cn_def": "制定（法律）"
  },
  "paralympics": {
    "pos": "n.",
    "en_def": "the international sports competition for athletes with disabilities",
    "cn_def": "帕拉林匹克運動會"
  },
  "imposition": {
    "pos": "n.",
    "en_def": "the act of forcing a rule or burden on people",
    "cn_def": "強加；施加"
  },
  "knockout stage": {
    "pos": "n.phr.",
    "en_def": "the part of a competition where the loser goes out",
    "cn_def": "淘汰賽階段"
  },
  "pep talk": {
    "pos": "n.phr.",
    "en_def": "a short encouraging speech before or during a match",
    "cn_def": "激勵講話"
  },
  "causal link": {
    "pos": "n.phr.",
    "en_def": "a connection in which one thing makes another happen",
    "cn_def": "因果關聯"
  },
  "strength training": {
    "pos": "n.phr.",
    "en_def": "exercise that uses weights to make muscles stronger",
    "cn_def": "肌力訓練"
  },
  "mental toughness": {
    "pos": "n.phr.",
    "en_def": "the ability to stay strong when things get hard",
    "cn_def": "心理韌性"
  },
  "captain": {
    "pos": "n.",
    "en_def": "the player who leads a team",
    "cn_def": "隊長"
  },
  "grip": {
    "pos": "n.",
    "en_def": "the way you hold something, or the ability to hold it firmly",
    "cn_def": "握法；抓力"
  },
  "dumbbell": {
    "pos": "n.",
    "en_def": "a short bar with a weight at each end, held in one hand",
    "cn_def": "啞鈴"
  },
  "touchstone": {
    "pos": "n.",
    "en_def": "a standard used for judging other things",
    "cn_def": "判斷標準；試金石"
  },
  "equivalence": {
    "pos": "n.",
    "en_def": "the state of being equal in value or meaning",
    "cn_def": "等同；相等"
  },
  "anaerobic": {
    "pos": "adj.",
    "en_def": "describing short, intense exercise that does not use much oxygen",
    "cn_def": "無氧的"
  },
  "seeded": {
    "pos": "adj.",
    "en_def": "ranked as one of the best players before a competition",
    "cn_def": "種子的；排名的"
  },
  "underrated": {
    "pos": "adj.",
    "en_def": "not valued as highly as it should be",
    "cn_def": "被低估的"
  },
  "overuse injury": {
    "pos": "n.phr.",
    "en_def": "damage caused by repeating the same movement too often",
    "cn_def": "過度使用傷害"
  },
  "personal trainer": {
    "pos": "n.phr.",
    "en_def": "a professional who plans exercise for one client",
    "cn_def": "私人教練"
  },
  "follow-up study": {
    "pos": "n.phr.",
    "en_def": "a later study that checks earlier results",
    "cn_def": "後續研究"
  },
  "low-impact": {
    "pos": "adj.",
    "en_def": "gentle and not putting much stress on the joints",
    "cn_def": "低衝擊的"
  },
  "long-term": {
    "pos": "adj.",
    "en_def": "continuing for a long period",
    "cn_def": "長期的"
  },
  "aerodynamic": {
    "pos": "adj.",
    "en_def": "shaped so that air passes over it easily",
    "cn_def": "空氣力學的；流線的"
  },
  "age-appropriate": {
    "pos": "adj.",
    "en_def": "suitable for a person's age",
    "cn_def": "適齡的"
  },
  "debilitating": {
    "pos": "adj.",
    "en_def": "making someone very weak",
    "cn_def": "使人虛弱的"
  },
  "illustrative": {
    "pos": "adj.",
    "en_def": "useful as an example",
    "cn_def": "具說明性的"
  }
};

const EXTRA_GLOSSES = {};
