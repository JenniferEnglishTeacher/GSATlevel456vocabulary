// Topic 16 Subunit 3 Quiz Data: Sports Nutrition & Recovery 運動營養與恢復
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T16 S03 - Sports Nutrition & Recovery 運動營養與恢復",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "hydration",
    "pos": "n.",
    "cn_def": "補水；水分充足",
    "en_def": "having enough water in your body",
    "sentence": "Good {{BLANK}} is important during summer training, so the coach puts cold water bottles beside the field every afternoon.",
    "cn": "夏季訓練時良好的補水很重要，所以教練每天下午都在球場旁放冰水。"
  },
  {
    "word": "hydrate",
    "pos": "v.",
    "cn_def": "補充水分",
    "en_def": "to drink enough water for your body",
    "sentence": "Remember to {{BLANK}} before the race starts, because you may not find a water station until the fifth kilometre.",
    "cn": "記得在比賽開始前補充水分，因為你可能要到第五公里才會找到補給站。"
  },
  {
    "word": "rehydrate",
    "pos": "v.",
    "cn_def": "重新補水",
    "en_def": "to drink water again after losing a lot of it",
    "sentence": "The tennis players {{BLANK}} with water and fruit between sets, because the court was over thirty-five degrees.",
    "cn": "網球選手在局與局之間用水和水果補充水分，因為球場溫度超過三十五度。"
  },
  {
    "word": "electrolyte",
    "pos": "n.",
    "cn_def": "電解質",
    "en_def": "a salt in the body, like sodium, that helps muscles work",
    "sentence": "You lose {{BLANK}} when you sweat a lot, so a pinch of salt in your water can help prevent cramps.",
    "cn": "你大量流汗時會流失電解質，所以在水裡加一小撮鹽有助於預防抽筋。"
  },
  {
    "word": "sports drink",
    "pos": "n.phr.",
    "cn_def": "運動飲料",
    "en_def": "a drink with sugar and salts for people who exercise",
    "sentence": "A {{BLANK}} can help during a long match, but for a short walk ordinary water is cheaper and healthier.",
    "cn": "運動飲料在長時間的比賽中可能有幫助，但如果只是短程散步，一般的水更便宜也更健康。"
  },
  {
    "word": "protein shake",
    "pos": "n.phr.",
    "cn_def": "蛋白飲；高蛋白奶昔",
    "en_def": "a drink with a lot of protein, often taken after exercise",
    "sentence": "My brother drinks a {{BLANK}} after every gym session, because he believes it helps his muscles recover faster.",
    "cn": "我哥哥每次健身後都會喝一杯高蛋白飲，因為他相信這能幫助肌肉更快恢復。"
  },
  {
    "word": "energy bar",
    "pos": "n.phr.",
    "cn_def": "能量棒",
    "en_def": "a small snack bar that gives quick energy",
    "sentence": "I always pack an {{BLANK}} for long hikes, because it is light and gives me energy when I feel weak.",
    "cn": "我長途健行時總會帶一根能量棒，因為它很輕，而且在我感到無力時能補充能量。"
  },
  {
    "word": "carb-loading",
    "pos": "n.",
    "cn_def": "肝醣超補；賽前補碳水",
    "en_def": "eating lots of carbohydrates before a long race",
    "sentence": "Many runners try {{BLANK}} the night before a marathon, so pasta restaurants near the start line are always crowded.",
    "cn": "許多跑者在馬拉松前一晚會嘗試賽前補碳水，所以起跑線附近的義大利麵餐廳總是擠滿了人。"
  },
  {
    "word": "rest day",
    "pos": "n.phr.",
    "cn_def": "休息日",
    "en_def": "a day with no hard training, used to recover",
    "sentence": "Even top athletes take a {{BLANK}} every week, because muscles actually get stronger while the body is resting.",
    "cn": "即使是頂尖運動員每週也會安排一天休息日，因為肌肉其實是在身體休息時變強壯的。"
  },
  {
    "word": "ice bath",
    "pos": "n.phr.",
    "cn_def": "冰浴",
    "en_def": "sitting in very cold water to reduce muscle pain",
    "sentence": "After the final the players sat in an {{BLANK}} for ten minutes, and they screamed because the water was so cold.",
    "cn": "決賽後球員們坐在冰浴裡十分鐘，而他們都尖叫了起來，因為水實在太冰了。"
  },
  {
    "word": "ice pack",
    "pos": "n.phr.",
    "cn_def": "冰敷袋",
    "en_def": "a cold bag put on an injury to reduce swelling",
    "sentence": "The nurse put an {{BLANK}} on my swollen ankle, and she told me to keep my foot raised for an hour.",
    "cn": "護理師在我腫起來的腳踝上放了一個冰敷袋，並叫我把腳抬高一個小時。"
  },
  {
    "word": "foam roller",
    "pos": "n.phr.",
    "cn_def": "滾筒；泡沫軸",
    "en_def": "a tube of hard foam you roll on to relax tight muscles",
    "sentence": "I use a {{BLANK}} on my legs after running, and although it hurts a little, my muscles feel much looser afterwards.",
    "cn": "我跑步後會用滾筒按摩雙腿，雖然有點痛，但之後肌肉感覺放鬆多了。"
  },
  {
    "word": "physiotherapy",
    "pos": "n.",
    "cn_def": "物理治療",
    "en_def": "treatment of injuries with exercise and massage",
    "sentence": "He needed three months of {{BLANK}} after his knee operation, but he was back on the football field by spring.",
    "cn": "他膝蓋手術後需要三個月的物理治療，但到了春天他已經回到足球場上。"
  },
  {
    "word": "physiotherapist",
    "pos": "n.",
    "cn_def": "物理治療師",
    "en_def": "a person trained to treat injuries with exercise and massage",
    "sentence": "The team {{BLANK}} showed me some simple exercises for my shoulder, so I do them every morning before school.",
    "cn": "球隊的物理治療師教了我一些簡單的肩膀運動，所以我每天早上上學前都會做。"
  },
  {
    "word": "sore",
    "pos": "adj.",
    "cn_def": "痠痛的",
    "en_def": "painful, especially after exercise",
    "sentence": "My legs were very {{BLANK}} after my first yoga class, so I walked down the stairs slowly for two days.",
    "cn": "第一次上瑜伽課後我的雙腿非常痠痛，所以我兩天都慢慢地走下樓梯。"
  },
  {
    "word": "soreness",
    "pos": "n.",
    "cn_def": "痠痛感",
    "en_def": "a feeling of pain in the muscles",
    "sentence": "Muscle {{BLANK}} usually peaks two days after a hard workout, so don't worry if you feel worse on the second morning.",
    "cn": "肌肉痠痛通常在激烈運動後兩天達到高峰，所以如果你第二天早上覺得更糟也不用擔心。"
  },
  {
    "word": "cramp",
    "pos": "n.",
    "cn_def": "抽筋",
    "en_def": "a sudden painful tightening of a muscle",
    "sentence": "The swimmer got a {{BLANK}} in his leg halfway across the lake, but a lifeguard reached him quickly and helped him to the shore.",
    "cn": "那位泳者游到湖中央時腿抽筋了，但救生員很快游到他身邊，幫助他上岸。"
  },
  {
    "word": "caffeine",
    "pos": "n.",
    "cn_def": "咖啡因",
    "en_def": "a substance in coffee and tea that makes you feel awake",
    "sentence": "Some cyclists drink coffee before a race, because {{BLANK}} can make them feel more alert and less tired.",
    "cn": "有些自行車選手在比賽前喝咖啡，因為咖啡因能讓他們感覺更警覺、更不疲倦。"
  },
  {
    "word": "creatine",
    "pos": "n.",
    "cn_def": "肌酸",
    "en_def": "a natural substance taken to help with short, powerful exercise",
    "sentence": "Many weightlifters take {{BLANK}} powder, but doctors say teenagers should talk to an expert before using any supplement.",
    "cn": "許多舉重選手會服用肌酸粉，但醫生說青少年在使用任何補充品之前應該先諮詢專家。"
  },
  {
    "word": "glucose",
    "pos": "n.",
    "cn_def": "葡萄糖",
    "en_def": "a simple sugar that the body uses for energy",
    "sentence": "Your brain and muscles both use {{BLANK}} for fuel, so skipping breakfast can make you feel weak during morning PE class.",
    "cn": "你的大腦和肌肉都以葡萄糖為燃料，所以不吃早餐可能讓你在早上的體育課感到無力。"
  },
  {
    "word": "macronutrient",
    "pos": "n.",
    "cn_def": "巨量營養素",
    "en_def": "a nutrient we need in large amounts: protein, fat or carbohydrate",
    "sentence": "Every {{BLANK}} has a different job, because carbohydrates give quick energy while protein helps to repair muscles.",
    "cn": "每一種巨量營養素都有不同的作用，因為碳水化合物提供快速能量，而蛋白質幫助修復肌肉。"
  },
  {
    "word": "power nap",
    "pos": "n.phr.",
    "cn_def": "能量小睡",
    "en_def": "a short sleep of about 20 minutes to get energy back",
    "sentence": "I take a {{BLANK}} after lunch on training days, and I feel much sharper during evening practice.",
    "cn": "我在訓練日的午餐後會小睡片刻，而我在晚上練習時感覺精神好多了。"
  },
  {
    "word": "compression garment",
    "pos": "n.phr.",
    "cn_def": "壓縮衣",
    "en_def": "tight clothing that presses on muscles to help blood flow",
    "sentence": "Many runners wear a {{BLANK}} on their legs after a race, because they believe it reduces swelling and pain.",
    "cn": "許多跑者在比賽後會在腿上穿壓縮衣，因為他們相信這能減少腫脹和疼痛。"
  },
  {
    "word": "taper",
    "pos": "v.",
    "cn_def": "（賽前）減量訓練",
    "en_def": "to train less in the days before an important race",
    "sentence": "Swimmers usually {{BLANK}} for two weeks before the national championships, so their bodies are fresh on race day.",
    "cn": "游泳選手通常在全國錦標賽前兩週減量訓練，所以他們在比賽當天身體狀態充沛。"
  },
  {
    "word": "bloodstream",
    "pos": "n.",
    "cn_def": "血液循環；血流",
    "en_def": "the blood flowing around the body",
    "sentence": "Sugar from a sports drink enters your {{BLANK}} quickly, so you get energy within a few minutes.",
    "cn": "運動飲料中的糖分很快進入你的血液，所以你在幾分鐘內就能獲得能量。"
  },
  {
    "word": "dietitian",
    "pos": "n.",
    "cn_def": "營養師",
    "en_def": "an expert who gives advice about food and diet",
    "sentence": "The team {{BLANK}} planned our meals for the tournament, so we ate rice, fish and vegetables instead of fried chicken.",
    "cn": "球隊的營養師規劃了我們比賽期間的餐點，所以我們吃米飯、魚和蔬菜，而不是炸雞。"
  },
  {
    "word": "body fat",
    "pos": "n.phr.",
    "cn_def": "體脂肪",
    "en_def": "the amount of fat in the body",
    "sentence": "The gym machine measured my {{BLANK}}, and the trainer said the number was healthy for someone my age.",
    "cn": "健身房的機器測量了我的體脂肪，而教練說這個數字以我的年齡來說是健康的。"
  },
  {
    "word": "lean",
    "pos": "adj.",
    "cn_def": "精瘦的",
    "en_def": "thin and healthy, with little fat",
    "sentence": "Long-distance runners are usually very {{BLANK}}, because they burn a huge amount of energy during training every week.",
    "cn": "長跑選手通常非常精瘦，因為他們每週訓練時都會燃燒大量的能量。"
  },
  {
    "word": "whey protein",
    "pos": "n.phr.",
    "cn_def": "乳清蛋白",
    "en_def": "a milk protein powder used to help muscles recover",
    "sentence": "He mixes {{BLANK}} with milk after training, although a dietitian told him that ordinary food works just as well.",
    "cn": "他訓練後把乳清蛋白和牛奶混在一起喝，雖然營養師告訴他普通食物效果一樣好。"
  }
];

const MCQS = [
  {
    "q": "Good _____ is important during summer training, so the coach puts cold water bottles beside the field every afternoon.",
    "options": [
      "enactment",
      "hydration",
      "helmet",
      "squat"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Remember to _____ before the race starts, because you may not find a water station until the fifth kilometre.",
    "options": [
      "hydrate",
      "rank",
      "jog",
      "contextualise"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The tennis players _____ with water and fruit between sets, because the court was over thirty-five degrees.",
    "options": [
      "cross-reference",
      "broach",
      "reformulate",
      "rehydrate"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "You lose _____ when you sweat a lot, so a pinch of salt in your water can help prevent cramps.",
    "options": [
      "match-fixing",
      "warm-up",
      "electrolyte",
      "bruise"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "A _____ can help during a long match, but for a short walk ordinary water is cheaper and healthier.",
    "options": [
      "bone density",
      "artificial turf",
      "line of reasoning",
      "sports drink"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "My brother drinks a _____ after every gym session, because he believes it helps his muscles recover faster.",
    "options": [
      "protein shake",
      "work ethic",
      "ripple effect",
      "range of motion"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "I always pack an _____ for long hikes, because it is light and gives me energy when I feel weak.",
    "options": [
      "home advantage",
      "technical suit",
      "energy bar",
      "prize money"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Many runners try _____ the night before a marathon, so pasta restaurants near the start line are always crowded.",
    "options": [
      "extremity",
      "carb-loading",
      "line-up",
      "simplification"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Even top athletes take a _____ every week, because muscles actually get stronger while the body is resting.",
    "options": [
      "rest day",
      "team doctor",
      "artificial turf",
      "world record"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "After the final the players sat in an _____ for ten minutes, and they screamed because the water was so cold.",
    "options": [
      "artificial turf",
      "knee brace",
      "ice bath",
      "ripple effect"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The nurse put an _____ on my swollen ankle, and she told me to keep my foot raised for an hour.",
    "options": [
      "away game",
      "ice pack",
      "trend line",
      "pep talk"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "I use a _____ on my legs after running, and although it hurts a little, my muscles feel much looser afterwards.",
    "options": [
      "pep talk",
      "personal trainer",
      "shin splints",
      "foam roller"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "He needed three months of _____ after his knee operation, but he was back on the football field by spring.",
    "options": [
      "surgery",
      "physiotherapy",
      "saturation",
      "regression"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The team _____ showed me some simple exercises for my shoulder, so I do them every morning before school.",
    "options": [
      "physiotherapist",
      "hamstring",
      "implementation",
      "regimen"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "My legs were very _____ after my first yoga class, so I walked down the stairs slowly for two days.",
    "options": [
      "small-scale",
      "short-term",
      "sore",
      "hazardous"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Muscle _____ usually peaks two days after a hard workout, so don't worry if you feel worse on the second morning.",
    "options": [
      "compliance",
      "podium",
      "anti-inflammatory",
      "soreness"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The swimmer got a _____ in his leg halfway across the lake, but a lifeguard reached him quickly and helped him to the shore.",
    "options": [
      "tendon",
      "cramp",
      "stipulation",
      "doping"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Some cyclists drink coffee before a race, because _____ can make them feel more alert and less tired.",
    "options": [
      "caffeine",
      "segregation",
      "plank",
      "steroid"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Many weightlifters take _____ powder, but doctors say teenagers should talk to an expert before using any supplement.",
    "options": [
      "line-up",
      "medallist",
      "blister",
      "creatine"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Your brain and muscles both use _____ for fuel, so skipping breakfast can make you feel weak during morning PE class.",
    "options": [
      "uniformity",
      "inversion",
      "glucose",
      "cartilage"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Every _____ has a different job, because carbohydrates give quick energy while protein helps to repair muscles.",
    "options": [
      "cardio",
      "typology",
      "stewardship",
      "macronutrient"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "I take a _____ after lunch on training days, and I feel much sharper during evening practice.",
    "options": [
      "power nap",
      "strength training",
      "ripple effect",
      "overuse injury"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Many runners wear a _____ on their legs after a race, because they believe it reduces swelling and pain.",
    "options": [
      "placebo effect",
      "compression garment",
      "personal trainer",
      "key finding"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Swimmers usually _____ for two weeks before the national championships, so their bodies are fresh on race day.",
    "options": [
      "fine-tune",
      "castigate",
      "taper",
      "shortlist"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Sugar from a sports drink enters your _____ quickly, so you get energy within a few minutes.",
    "options": [
      "bloodstream",
      "line-up",
      "sprain",
      "derivation"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The team _____ planned our meals for the tournament, so we ate rice, fish and vegetables instead of fried chicken.",
    "options": [
      "cushioning",
      "typology",
      "periphery",
      "dietitian"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The gym machine measured my _____, and the trainer said the number was healthy for someone my age.",
    "options": [
      "physical education",
      "body fat",
      "sports medicine",
      "raw data"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Long-distance runners are usually very _____, because they burn a huge amount of energy during training every week.",
    "options": [
      "low-impact",
      "hazardous",
      "lean",
      "avoidable"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "He mixes _____ with milk after training, although a dietitian told him that ordinary food works just as well.",
    "options": [
      "lactic acid",
      "whey protein",
      "physical education",
      "artificial turf"
    ],
    "answer": 1,
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "hydration": {
    "pos": "n.",
    "en_def": "having enough water in your body",
    "cn_def": "補水；水分充足"
  },
  "hydrate": {
    "pos": "v.",
    "en_def": "to drink enough water for your body",
    "cn_def": "補充水分"
  },
  "rehydrate": {
    "pos": "v.",
    "en_def": "to drink water again after losing a lot of it",
    "cn_def": "重新補水"
  },
  "electrolyte": {
    "pos": "n.",
    "en_def": "a salt in the body, like sodium, that helps muscles work",
    "cn_def": "電解質"
  },
  "sports drink": {
    "pos": "n.phr.",
    "en_def": "a drink with sugar and salts for people who exercise",
    "cn_def": "運動飲料"
  },
  "protein shake": {
    "pos": "n.phr.",
    "en_def": "a drink with a lot of protein, often taken after exercise",
    "cn_def": "蛋白飲；高蛋白奶昔"
  },
  "energy bar": {
    "pos": "n.phr.",
    "en_def": "a small snack bar that gives quick energy",
    "cn_def": "能量棒"
  },
  "carb-loading": {
    "pos": "n.",
    "en_def": "eating lots of carbohydrates before a long race",
    "cn_def": "肝醣超補；賽前補碳水"
  },
  "rest day": {
    "pos": "n.phr.",
    "en_def": "a day with no hard training, used to recover",
    "cn_def": "休息日"
  },
  "ice bath": {
    "pos": "n.phr.",
    "en_def": "sitting in very cold water to reduce muscle pain",
    "cn_def": "冰浴"
  },
  "ice pack": {
    "pos": "n.phr.",
    "en_def": "a cold bag put on an injury to reduce swelling",
    "cn_def": "冰敷袋"
  },
  "foam roller": {
    "pos": "n.phr.",
    "en_def": "a tube of hard foam you roll on to relax tight muscles",
    "cn_def": "滾筒；泡沫軸"
  },
  "physiotherapy": {
    "pos": "n.",
    "en_def": "treatment of injuries with exercise and massage",
    "cn_def": "物理治療"
  },
  "physiotherapist": {
    "pos": "n.",
    "en_def": "a person trained to treat injuries with exercise and massage",
    "cn_def": "物理治療師"
  },
  "sore": {
    "pos": "adj.",
    "en_def": "painful, especially after exercise",
    "cn_def": "痠痛的"
  },
  "soreness": {
    "pos": "n.",
    "en_def": "a feeling of pain in the muscles",
    "cn_def": "痠痛感"
  },
  "cramp": {
    "pos": "n.",
    "en_def": "a sudden painful tightening of a muscle",
    "cn_def": "抽筋"
  },
  "caffeine": {
    "pos": "n.",
    "en_def": "a substance in coffee and tea that makes you feel awake",
    "cn_def": "咖啡因"
  },
  "creatine": {
    "pos": "n.",
    "en_def": "a natural substance taken to help with short, powerful exercise",
    "cn_def": "肌酸"
  },
  "glucose": {
    "pos": "n.",
    "en_def": "a simple sugar that the body uses for energy",
    "cn_def": "葡萄糖"
  },
  "macronutrient": {
    "pos": "n.",
    "en_def": "a nutrient we need in large amounts: protein, fat or carbohydrate",
    "cn_def": "巨量營養素"
  },
  "power nap": {
    "pos": "n.phr.",
    "en_def": "a short sleep of about 20 minutes to get energy back",
    "cn_def": "能量小睡"
  },
  "compression garment": {
    "pos": "n.phr.",
    "en_def": "tight clothing that presses on muscles to help blood flow",
    "cn_def": "壓縮衣"
  },
  "taper": {
    "pos": "v.",
    "en_def": "to train less in the days before an important race",
    "cn_def": "（賽前）減量訓練"
  },
  "bloodstream": {
    "pos": "n.",
    "en_def": "the blood flowing around the body",
    "cn_def": "血液循環；血流"
  },
  "dietitian": {
    "pos": "n.",
    "en_def": "an expert who gives advice about food and diet",
    "cn_def": "營養師"
  },
  "body fat": {
    "pos": "n.phr.",
    "en_def": "the amount of fat in the body",
    "cn_def": "體脂肪"
  },
  "lean": {
    "pos": "adj.",
    "en_def": "thin and healthy, with little fat",
    "cn_def": "精瘦的"
  },
  "whey protein": {
    "pos": "n.phr.",
    "en_def": "a milk protein powder used to help muscles recover",
    "cn_def": "乳清蛋白"
  },
  "enactment": {
    "pos": "n.",
    "en_def": "the act of making something into law",
    "cn_def": "制定（法律）"
  },
  "helmet": {
    "pos": "n.",
    "en_def": "a hard hat that protects the head",
    "cn_def": "頭盔；安全帽"
  },
  "squat": {
    "pos": "n.",
    "en_def": "an exercise where you bend your knees and lower your body",
    "cn_def": "深蹲"
  },
  "rank": {
    "pos": "v.",
    "en_def": "to put things in order of quality or importance",
    "cn_def": "排名"
  },
  "jog": {
    "pos": "v.",
    "en_def": "to run slowly and steadily for exercise",
    "cn_def": "慢跑"
  },
  "contextualise": {
    "pos": "v.",
    "en_def": "to explain something by describing its situation",
    "cn_def": "置於脈絡中解釋"
  },
  "cross-reference": {
    "pos": "v.",
    "en_def": "to compare information from two different sources",
    "cn_def": "交叉比對"
  },
  "broach": {
    "pos": "v.",
    "en_def": "to begin talking about a difficult subject",
    "cn_def": "開始談論（難題）"
  },
  "reformulate": {
    "pos": "v.",
    "en_def": "to express or make something in a new form",
    "cn_def": "重新擬定；重新調配"
  },
  "match-fixing": {
    "pos": "n.",
    "en_def": "arranging the result of a game dishonestly",
    "cn_def": "作假比賽；打假球"
  },
  "warm-up": {
    "pos": "n.",
    "en_def": "gentle exercise you do before hard exercise",
    "cn_def": "熱身"
  },
  "bruise": {
    "pos": "n.",
    "en_def": "a dark mark on the skin caused by a knock",
    "cn_def": "瘀青"
  },
  "bone density": {
    "pos": "n.phr.",
    "en_def": "how strong and thick your bones are",
    "cn_def": "骨質密度"
  },
  "artificial turf": {
    "pos": "n.phr.",
    "en_def": "a surface of plastic grass used for sports",
    "cn_def": "人工草皮"
  },
  "line of reasoning": {
    "pos": "n.phr.",
    "en_def": "the series of steps in an argument",
    "cn_def": "推理思路"
  },
  "work ethic": {
    "pos": "n.phr.",
    "en_def": "the habit of working hard and seriously",
    "cn_def": "工作態度；努力的習慣"
  },
  "ripple effect": {
    "pos": "n.phr.",
    "en_def": "a spreading series of results from one event",
    "cn_def": "漣漪效應"
  },
  "range of motion": {
    "pos": "n.phr.",
    "en_def": "how far a joint can move",
    "cn_def": "活動範圍"
  },
  "home advantage": {
    "pos": "n.phr.",
    "en_def": "the benefit of playing in your own stadium",
    "cn_def": "主場優勢"
  },
  "technical suit": {
    "pos": "n.phr.",
    "en_def": "a special tight suit worn to swim faster",
    "cn_def": "競技泳衣"
  },
  "prize money": {
    "pos": "n.phr.",
    "en_def": "money given to the winners of a competition",
    "cn_def": "獎金"
  },
  "extremity": {
    "pos": "n.",
    "en_def": "the furthest part of something, such as a hand or foot",
    "cn_def": "末端；肢端"
  },
  "line-up": {
    "pos": "n.",
    "en_def": "the list of players chosen to start a match",
    "cn_def": "先發陣容"
  },
  "simplification": {
    "pos": "n.",
    "en_def": "the act of making something easier to understand",
    "cn_def": "簡化"
  },
  "team doctor": {
    "pos": "n.phr.",
    "en_def": "the doctor who looks after a sports team",
    "cn_def": "隊醫"
  },
  "world record": {
    "pos": "n.phr.",
    "en_def": "the best result ever achieved in the world",
    "cn_def": "世界紀錄"
  },
  "knee brace": {
    "pos": "n.phr.",
    "en_def": "a support worn around the knee",
    "cn_def": "護膝支架"
  },
  "away game": {
    "pos": "n.phr.",
    "en_def": "a match played at the opponent's ground",
    "cn_def": "客場比賽"
  },
  "trend line": {
    "pos": "n.phr.",
    "en_def": "a line on a graph showing the general direction of change",
    "cn_def": "趨勢線"
  },
  "pep talk": {
    "pos": "n.phr.",
    "en_def": "a short encouraging speech before or during a match",
    "cn_def": "激勵講話"
  },
  "personal trainer": {
    "pos": "n.phr.",
    "en_def": "a professional who plans exercise for one client",
    "cn_def": "私人教練"
  },
  "shin splints": {
    "pos": "n.phr.",
    "en_def": "pain along the front of the lower leg from running",
    "cn_def": "脛前疼痛"
  },
  "surgery": {
    "pos": "n.",
    "en_def": "a medical operation",
    "cn_def": "手術"
  },
  "saturation": {
    "pos": "n.",
    "en_def": "the state of being completely full",
    "cn_def": "飽和"
  },
  "regression": {
    "pos": "n.",
    "en_def": "a return to a worse or earlier state",
    "cn_def": "退步；倒退"
  },
  "hamstring": {
    "pos": "n.",
    "en_def": "a muscle at the back of the upper leg",
    "cn_def": "大腿後肌；膕繩肌"
  },
  "implementation": {
    "pos": "n.",
    "en_def": "the act of putting a plan into action",
    "cn_def": "實施；執行"
  },
  "regimen": {
    "pos": "n.",
    "en_def": "a strict plan for training, diet or health",
    "cn_def": "（嚴格的）養生法；訓練計畫"
  },
  "small-scale": {
    "pos": "adj.",
    "en_def": "limited in size or number",
    "cn_def": "小規模的"
  },
  "short-term": {
    "pos": "adj.",
    "en_def": "lasting only a short period",
    "cn_def": "短期的"
  },
  "hazardous": {
    "pos": "adj.",
    "en_def": "dangerous",
    "cn_def": "危險的"
  },
  "compliance": {
    "pos": "n.",
    "en_def": "the act of obeying a rule or request",
    "cn_def": "遵守；合規"
  },
  "podium": {
    "pos": "n.",
    "en_def": "the raised platform where the top three athletes stand",
    "cn_def": "頒獎台"
  },
  "anti-inflammatory": {
    "pos": "n.",
    "en_def": "a medicine that reduces heat and swelling in the body",
    "cn_def": "抗發炎藥"
  },
  "tendon": {
    "pos": "n.",
    "en_def": "a strong band that joins a muscle to a bone",
    "cn_def": "肌腱"
  },
  "stipulation": {
    "pos": "n.",
    "en_def": "a condition that must be accepted",
    "cn_def": "規定；條件"
  },
  "doping": {
    "pos": "n.",
    "en_def": "the illegal use of drugs to improve sports performance",
    "cn_def": "使用禁藥"
  },
  "segregation": {
    "pos": "n.",
    "en_def": "the act of keeping groups separate",
    "cn_def": "隔離；區隔"
  },
  "plank": {
    "pos": "n.",
    "en_def": "an exercise where you hold your body straight like a board",
    "cn_def": "棒式"
  },
  "steroid": {
    "pos": "n.",
    "en_def": "a drug that builds muscle quickly but harms health",
    "cn_def": "類固醇"
  },
  "medallist": {
    "pos": "n.",
    "en_def": "a person who has won a medal",
    "cn_def": "獎牌得主"
  },
  "blister": {
    "pos": "n.",
    "en_def": "a small painful bubble of skin, often from rubbing",
    "cn_def": "水泡"
  },
  "uniformity": {
    "pos": "n.",
    "en_def": "the state of being the same everywhere",
    "cn_def": "一致性；統一"
  },
  "inversion": {
    "pos": "n.",
    "en_def": "a change that puts something the opposite way round",
    "cn_def": "顛倒；倒轉"
  },
  "cartilage": {
    "pos": "n.",
    "en_def": "smooth, soft tissue that protects the ends of bones",
    "cn_def": "軟骨"
  },
  "cardio": {
    "pos": "n.",
    "en_def": "exercise that makes your heart and lungs work harder",
    "cn_def": "有氧運動"
  },
  "typology": {
    "pos": "n.",
    "en_def": "a system of grouping things by type",
    "cn_def": "類型學；分類系統"
  },
  "stewardship": {
    "pos": "n.",
    "en_def": "the careful management of something you are responsible for",
    "cn_def": "管理責任；監管"
  },
  "strength training": {
    "pos": "n.phr.",
    "en_def": "exercise that uses weights to make muscles stronger",
    "cn_def": "肌力訓練"
  },
  "overuse injury": {
    "pos": "n.phr.",
    "en_def": "damage caused by repeating the same movement too often",
    "cn_def": "過度使用傷害"
  },
  "placebo effect": {
    "pos": "n.phr.",
    "en_def": "an improvement caused by belief rather than real treatment",
    "cn_def": "安慰劑效應"
  },
  "key finding": {
    "pos": "n.phr.",
    "en_def": "the most important result of a study",
    "cn_def": "主要發現"
  },
  "fine-tune": {
    "pos": "v.",
    "en_def": "to make small changes that improve something",
    "cn_def": "微調"
  },
  "castigate": {
    "pos": "v.",
    "en_def": "to criticise someone severely",
    "cn_def": "嚴厲批評"
  },
  "shortlist": {
    "pos": "v.",
    "en_def": "to choose a small group from many applicants",
    "cn_def": "列入最終名單"
  },
  "sprain": {
    "pos": "n.",
    "en_def": "an injury where a joint is twisted and hurt",
    "cn_def": "扭傷"
  },
  "derivation": {
    "pos": "n.",
    "en_def": "the origin of something, or where it comes from",
    "cn_def": "由來；起源"
  },
  "cushioning": {
    "pos": "n.",
    "en_def": "soft material that reduces the shock of landing",
    "cn_def": "緩衝；避震"
  },
  "periphery": {
    "pos": "n.",
    "en_def": "the outer edge of an area",
    "cn_def": "周邊；邊緣"
  },
  "physical education": {
    "pos": "n.phr.",
    "en_def": "the school subject in which students exercise and play sport",
    "cn_def": "體育（課）"
  },
  "sports medicine": {
    "pos": "n.phr.",
    "en_def": "the area of medicine dealing with exercise and injuries",
    "cn_def": "運動醫學"
  },
  "raw data": {
    "pos": "n.phr.",
    "en_def": "information collected before it has been organised",
    "cn_def": "原始資料"
  },
  "low-impact": {
    "pos": "adj.",
    "en_def": "gentle and not putting much stress on the joints",
    "cn_def": "低衝擊的"
  },
  "avoidable": {
    "pos": "adj.",
    "en_def": "able to be prevented",
    "cn_def": "可避免的"
  },
  "lactic acid": {
    "pos": "n.phr.",
    "en_def": "a substance made in muscles during very hard exercise",
    "cn_def": "乳酸"
  }
};

const EXTRA_GLOSSES = {};
