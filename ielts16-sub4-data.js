// Topic 16 Subunit 4 Quiz Data: Injury, Health & Sports Medicine 運動傷害與運動醫學
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T16 S04 - Injury, Health & Sports Medicine 運動傷害與運動醫學",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "sprain",
    "pos": "n.",
    "cn_def": "扭傷",
    "en_def": "an injury where a joint is twisted and hurt",
    "sentence": "She got a bad {{BLANK}} while playing badminton, so she wore a support on her wrist for three weeks.",
    "cn": "她打羽球時嚴重扭傷，所以她手腕戴了三週的護具。"
  },
  {
    "word": "dislocate",
    "pos": "v.",
    "cn_def": "脫臼",
    "en_def": "to push a bone out of its normal place",
    "sentence": "The rugby player fell heavily and {{BLANK}} his shoulder, so the doctor had to put the joint back in place.",
    "cn": "那位橄欖球員重重跌倒，肩膀脫臼了，所以醫生必須把關節推回原位。"
  },
  {
    "word": "fracture",
    "pos": "n.",
    "cn_def": "骨折；裂傷",
    "en_def": "a crack or break in a bone",
    "sentence": "The scan showed a small {{BLANK}} in his foot, and he had to wear a boot for six weeks.",
    "cn": "掃描顯示他腳部有一處小骨折，而他必須穿護具靴六週。"
  },
  {
    "word": "bruise",
    "pos": "n.",
    "cn_def": "瘀青",
    "en_def": "a dark mark on the skin caused by a knock",
    "sentence": "My knee had a huge purple {{BLANK}} after the match, but luckily nothing was broken.",
    "cn": "比賽後我的膝蓋有一大塊紫色的瘀青，但幸好沒有骨頭斷裂。"
  },
  {
    "word": "swelling",
    "pos": "n.",
    "cn_def": "腫脹",
    "en_def": "the state of a body part becoming larger because of injury",
    "sentence": "Ice and rest reduced the {{BLANK}} around my ankle, so I could put my shoe on again the next morning.",
    "cn": "冰敷和休息減輕了我腳踝周圍的腫脹，所以隔天早上我又能穿上鞋子了。"
  },
  {
    "word": "swollen",
    "pos": "adj.",
    "cn_def": "腫起來的",
    "en_def": "larger than normal because of injury or illness",
    "sentence": "His wrist was still {{BLANK}} on Monday, so the coach told him to miss training until the pain had gone.",
    "cn": "他的手腕星期一還是腫著，所以教練叫他暫停訓練，直到疼痛消失。"
  },
  {
    "word": "tear",
    "pos": "v.",
    "cn_def": "撕裂",
    "en_def": "to pull something apart or damage it by pulling",
    "sentence": "He felt something {{BLANK}} in the back of his leg as he jumped, and the scan later showed a muscle injury.",
    "cn": "他跳起時感覺大腿後側有東西撕裂，而後來的掃描顯示是肌肉受傷。",
    "alts": [
      "tore",
      "torn"
    ]
  },
  {
    "word": "limp",
    "pos": "v.",
    "cn_def": "跛行",
    "en_def": "to walk with difficulty because one leg hurts",
    "sentence": "He had to {{BLANK}} off the field after the tackle, but he was running normally again within ten days.",
    "cn": "那次擒抱後他只能跛著腳離場，但不到十天他又能正常跑步了。"
  },
  {
    "word": "stiff",
    "pos": "adj.",
    "cn_def": "僵硬的",
    "en_def": "hard to move and a little painful",
    "sentence": "My shoulders felt {{BLANK}} after sleeping badly, so I did some gentle stretches before swimming practice.",
    "cn": "睡不好之後我的肩膀感覺僵硬，所以我在游泳練習前做了一些輕柔的伸展。"
  },
  {
    "word": "stiffness",
    "pos": "n.",
    "cn_def": "僵硬",
    "en_def": "the state of being hard to move",
    "sentence": "Morning {{BLANK}} is common in older runners, but a warm shower and slow walking usually make it better.",
    "cn": "早晨的僵硬在年長跑者中很常見，但洗個熱水澡和慢慢走動通常就能改善。"
  },
  {
    "word": "numb",
    "pos": "adj.",
    "cn_def": "麻木的",
    "en_def": "unable to feel anything",
    "sentence": "My fingers went {{BLANK}} during the winter race, so I wore thicker gloves for the next event.",
    "cn": "冬季比賽中我的手指麻掉了，所以下一場比賽我戴了更厚的手套。"
  },
  {
    "word": "blister",
    "pos": "n.",
    "cn_def": "水泡",
    "en_def": "a small painful bubble of skin, often from rubbing",
    "sentence": "New running shoes gave me a painful {{BLANK}} on my heel, so I covered it with a plaster before the race.",
    "cn": "新跑鞋讓我的腳跟長了一個很痛的水泡，所以我在比賽前用膠布把它貼起來。"
  },
  {
    "word": "shin splints",
    "pos": "n.phr.",
    "cn_def": "脛前疼痛",
    "en_def": "pain along the front of the lower leg from running",
    "sentence": "Running on concrete every day gave her {{BLANK}}, so she moved her training onto grass and the pain slowly faded.",
    "cn": "每天在水泥地上跑步讓她得了脛前疼痛，所以她把訓練改到草地上，疼痛就慢慢消退了。"
  },
  {
    "word": "tennis elbow",
    "pos": "n.phr.",
    "cn_def": "網球肘",
    "en_def": "pain in the outside of the elbow from overuse",
    "sentence": "My father got {{BLANK}} from painting the house, and interestingly he had never played tennis in his life.",
    "cn": "我爸爸因為粉刷房子而得了網球肘，而有趣的是他這輩子從沒打過網球。"
  },
  {
    "word": "overuse injury",
    "pos": "n.phr.",
    "cn_def": "過度使用傷害",
    "en_def": "damage caused by repeating the same movement too often",
    "sentence": "Young pitchers often suffer an {{BLANK}} in the shoulder, so leagues now limit how many balls a child may throw.",
    "cn": "年輕投手常常肩膀發生過度使用傷害，所以聯盟現在限制兒童可以投的球數。"
  },
  {
    "word": "sideline",
    "pos": "v.",
    "cn_def": "使無法上場",
    "en_def": "to stop someone from playing because of injury",
    "sentence": "The knee problem {{BLANK}} their best defender for two months, and the team lost four games while he was away.",
    "cn": "膝蓋問題讓他們最好的後衛無法上場兩個月，而他缺席期間球隊輸了四場比賽。"
  },
  {
    "word": "relapse",
    "pos": "n.",
    "cn_def": "復發",
    "en_def": "the return of an illness or injury after it got better",
    "sentence": "He returned to training too early and suffered a {{BLANK}}, so this time he followed the doctor's advice carefully.",
    "cn": "他太早回到訓練而導致傷勢復發，所以這次他仔細遵照醫生的建議。"
  },
  {
    "word": "sports medicine",
    "pos": "n.phr.",
    "cn_def": "運動醫學",
    "en_def": "the area of medicine dealing with exercise and injuries",
    "sentence": "She studied {{BLANK}} at university, and now she treats injured players for a professional basketball team.",
    "cn": "她在大學主修運動醫學，現在她為一支職業籃球隊治療受傷的球員。"
  },
  {
    "word": "team doctor",
    "pos": "n.phr.",
    "cn_def": "隊醫",
    "en_def": "the doctor who looks after a sports team",
    "sentence": "The {{BLANK}} ran onto the pitch within seconds, and she checked the player's head before letting him stand up.",
    "cn": "隊醫在幾秒內就跑進球場，而她在讓那名球員站起來之前先檢查了他的頭部。"
  },
  {
    "word": "first aid",
    "pos": "n.phr.",
    "cn_def": "急救",
    "en_def": "simple medical help given immediately after an injury",
    "sentence": "Every coach at our school must learn {{BLANK}}, so someone can always help quickly if a student collapses.",
    "cn": "我們學校每位教練都必須學會急救，這樣如果有學生倒下，總會有人能迅速幫忙。"
  },
  {
    "word": "defibrillator",
    "pos": "n.",
    "cn_def": "去顫器；電擊器",
    "en_def": "a machine that gives an electric shock to restart the heart",
    "sentence": "A {{BLANK}} on the wall of the sports hall saved a runner's life last year, because a teacher used it within two minutes.",
    "cn": "去年體育館牆上的一台去顫器救了一位跑者的命，因為一位老師在兩分鐘內就使用了它。"
  },
  {
    "word": "painkiller",
    "pos": "n.",
    "cn_def": "止痛藥",
    "en_def": "a medicine that reduces pain",
    "sentence": "Taking a {{BLANK}} before a match can be dangerous, because you may not notice that an injury is getting worse.",
    "cn": "比賽前服用止痛藥可能很危險，因為你可能不會察覺傷勢正在惡化。"
  },
  {
    "word": "anti-inflammatory",
    "pos": "n.",
    "cn_def": "抗發炎藥",
    "en_def": "a medicine that reduces heat and swelling in the body",
    "sentence": "The doctor gave him an {{BLANK}} for his sore knee, but she also warned him not to take it for too long.",
    "cn": "醫生給了他一種抗發炎藥來治療痠痛的膝蓋，但她也警告他不要服用太久。"
  },
  {
    "word": "MRI scan",
    "pos": "n.phr.",
    "cn_def": "磁振造影掃描",
    "en_def": "a detailed picture of the inside of the body made by a machine",
    "sentence": "The club sent him for an {{BLANK}}, because the pain had not improved after ten days of rest.",
    "cn": "俱樂部送他去做磁振造影掃描，因為休息十天後疼痛仍沒有改善。"
  },
  {
    "word": "surgery",
    "pos": "n.",
    "cn_def": "手術",
    "en_def": "a medical operation",
    "sentence": "She needed {{BLANK}} on her shoulder last winter, but she came back stronger and won the national title in June.",
    "cn": "她去年冬天肩膀需要動手術，但她復出後更強，並在六月贏得全國冠軍。"
  },
  {
    "word": "knee brace",
    "pos": "n.phr.",
    "cn_def": "護膝支架",
    "en_def": "a support worn around the knee",
    "sentence": "He played the whole season in a {{BLANK}}, and he said it gave him the confidence to turn quickly again.",
    "cn": "他整個球季都戴著護膝支架比賽，而他說這讓他有信心再次快速轉身。"
  },
  {
    "word": "crutch",
    "pos": "n.",
    "cn_def": "拐杖",
    "en_def": "a stick that helps an injured person walk",
    "sentence": "I used a {{BLANK}} under each arm for two weeks, and my classmates kindly carried my bag to every lesson.",
    "cn": "我兩邊腋下各用一支拐杖撐了兩週，而我的同學們親切地幫我把書包提到每一堂課。"
  },
  {
    "word": "bandage",
    "pos": "n.",
    "cn_def": "繃帶",
    "en_def": "a long strip of cloth used to cover or support an injury",
    "sentence": "The trainer wrapped a tight {{BLANK}} around his ankle, so he could finish the last ten minutes of the game.",
    "cn": "訓練員在他的腳踝上纏了一條緊緊的繃帶，所以他能打完比賽最後的十分鐘。"
  },
  {
    "word": "range of motion",
    "pos": "n.phr.",
    "cn_def": "活動範圍",
    "en_def": "how far a joint can move",
    "sentence": "Gentle exercises slowly improved the {{BLANK}} in his shoulder, and after a month he could raise his arm fully.",
    "cn": "輕緩的運動慢慢改善了他肩膀的活動範圍，而一個月後他能完全舉起手臂。"
  }
];

const MCQS = [
  {
    "q": "She got a bad _____ while playing badminton, so she wore a support on her wrist for three weeks.",
    "options": [
      "sprain",
      "subjectivity",
      "compliance",
      "pelvis"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The rugby player fell heavily and _____ his shoulder, so the doctor had to put the joint back in place.",
    "options": [
      "desist",
      "shortlist",
      "dislocate",
      "destabilise"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The scan showed a small _____ in his foot, and he had to wear a boot for six weeks.",
    "options": [
      "barbell",
      "fracture",
      "steroid",
      "conduit"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "My knee had a huge purple _____ after the match, but luckily nothing was broken.",
    "options": [
      "footwork",
      "soreness",
      "ankle",
      "bruise"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Ice and rest reduced the _____ around my ankle, so I could put my shoe on again the next morning.",
    "options": [
      "physiotherapy",
      "swelling",
      "typology",
      "match-fixing"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "His wrist was still _____ on Monday, so the coach told him to miss training until the pain had gone.",
    "options": [
      "swollen",
      "record-breaking",
      "replicable",
      "anaerobic"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "He felt something _____ in the back of his leg as he jumped, and the scan later showed a muscle injury.",
    "options": [
      "recalibrate",
      "contextualise",
      "vet",
      "tear"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "He had to _____ off the field after the tackle, but he was running normally again within ten days.",
    "options": [
      "recalibrate",
      "pre-empt",
      "limp",
      "vet"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "My shoulders felt _____ after sleeping badly, so I did some gentle stretches before swimming practice.",
    "options": [
      "collaborative",
      "stiff",
      "fast-twitch",
      "normative"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Morning _____ is common in older runners, but a warm shower and slow walking usually make it better.",
    "options": [
      "footwork",
      "supervision",
      "compliance",
      "stiffness"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "My fingers went _____ during the winter race, so I wore thicker gloves for the next event.",
    "options": [
      "numb",
      "normative",
      "recurring",
      "unproven"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "New running shoes gave me a painful _____ on my heel, so I covered it with a plaster before the race.",
    "options": [
      "supervision",
      "formulation",
      "blister",
      "push-up"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Running on concrete every day gave her _____, so she moved her training onto grass and the pain slowly faded.",
    "options": [
      "foam roller",
      "shin splints",
      "best practice",
      "trend line"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "My father got _____ from painting the house, and interestingly he had never played tennis in his life.",
    "options": [
      "interval training",
      "fitness tracker",
      "force plate",
      "tennis elbow"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Young pitchers often suffer an _____ in the shoulder, so leagues now limit how many balls a child may throw.",
    "options": [
      "time frame",
      "shin pad",
      "overuse injury",
      "follow-up study"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The knee problem _____ their best defender for two months, and the team lost four games while he was away.",
    "options": [
      "sideline",
      "shortlist",
      "broach",
      "stretch"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "He returned to training too early and suffered a _____, so this time he followed the doctor's advice carefully.",
    "options": [
      "endowment",
      "exemption",
      "relapse",
      "electrolyte"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "She studied _____ at university, and now she treats injured players for a professional basketball team.",
    "options": [
      "youth academy",
      "knockout stage",
      "home advantage",
      "sports medicine"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The _____ ran onto the pitch within seconds, and she checked the player's head before letting him stand up.",
    "options": [
      "team doctor",
      "power nap",
      "trend line",
      "time frame"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Every coach at our school must learn _____, so someone can always help quickly if a student collapses.",
    "options": [
      "world record",
      "first aid",
      "centre of gravity",
      "timing chip"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "A _____ on the wall of the sports hall saved a runner's life last year, because a teacher used it within two minutes.",
    "options": [
      "defibrillator",
      "gym",
      "periphery",
      "underdog"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Taking a _____ before a match can be dangerous, because you may not notice that an injury is getting worse.",
    "options": [
      "kneecap",
      "enactment",
      "painkiller",
      "creatine"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The doctor gave him an _____ for his sore knee, but she also warned him not to take it for too long.",
    "options": [
      "equivalence",
      "marathon",
      "self-talk",
      "anti-inflammatory"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The club sent him for an _____, because the pain had not improved after ten days of rest.",
    "options": [
      "protein shake",
      "MRI scan",
      "muscle fibre",
      "false positive"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "She needed _____ on her shoulder last winter, but she came back stronger and won the national title in June.",
    "options": [
      "bloodstream",
      "regression",
      "saturation",
      "surgery"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "He played the whole season in a _____, and he said it gave him the confidence to turn quickly again.",
    "options": [
      "knee brace",
      "mental toughness",
      "working hypothesis",
      "contributing factor"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "I used a _____ under each arm for two weeks, and my classmates kindly carried my bag to every lesson.",
    "options": [
      "muscle",
      "crutch",
      "segregation",
      "helmet"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The trainer wrapped a tight _____ around his ankle, so he could finish the last ten minutes of the game.",
    "options": [
      "grip",
      "spike",
      "bandage",
      "helmet"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Gentle exercises slowly improved the _____ in his shoulder, and after a month he could raise his arm fully.",
    "options": [
      "causal link",
      "penalty shoot-out",
      "pep talk",
      "range of motion"
    ],
    "answer": 3,
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "sprain": {
    "pos": "n.",
    "en_def": "an injury where a joint is twisted and hurt",
    "cn_def": "扭傷"
  },
  "dislocate": {
    "pos": "v.",
    "en_def": "to push a bone out of its normal place",
    "cn_def": "脫臼"
  },
  "fracture": {
    "pos": "n.",
    "en_def": "a crack or break in a bone",
    "cn_def": "骨折；裂傷"
  },
  "bruise": {
    "pos": "n.",
    "en_def": "a dark mark on the skin caused by a knock",
    "cn_def": "瘀青"
  },
  "swelling": {
    "pos": "n.",
    "en_def": "the state of a body part becoming larger because of injury",
    "cn_def": "腫脹"
  },
  "swollen": {
    "pos": "adj.",
    "en_def": "larger than normal because of injury or illness",
    "cn_def": "腫起來的"
  },
  "tear": {
    "pos": "v.",
    "en_def": "to pull something apart or damage it by pulling",
    "cn_def": "撕裂"
  },
  "limp": {
    "pos": "v.",
    "en_def": "to walk with difficulty because one leg hurts",
    "cn_def": "跛行"
  },
  "stiff": {
    "pos": "adj.",
    "en_def": "hard to move and a little painful",
    "cn_def": "僵硬的"
  },
  "stiffness": {
    "pos": "n.",
    "en_def": "the state of being hard to move",
    "cn_def": "僵硬"
  },
  "numb": {
    "pos": "adj.",
    "en_def": "unable to feel anything",
    "cn_def": "麻木的"
  },
  "blister": {
    "pos": "n.",
    "en_def": "a small painful bubble of skin, often from rubbing",
    "cn_def": "水泡"
  },
  "shin splints": {
    "pos": "n.phr.",
    "en_def": "pain along the front of the lower leg from running",
    "cn_def": "脛前疼痛"
  },
  "tennis elbow": {
    "pos": "n.phr.",
    "en_def": "pain in the outside of the elbow from overuse",
    "cn_def": "網球肘"
  },
  "overuse injury": {
    "pos": "n.phr.",
    "en_def": "damage caused by repeating the same movement too often",
    "cn_def": "過度使用傷害"
  },
  "sideline": {
    "pos": "v.",
    "en_def": "to stop someone from playing because of injury",
    "cn_def": "使無法上場"
  },
  "relapse": {
    "pos": "n.",
    "en_def": "the return of an illness or injury after it got better",
    "cn_def": "復發"
  },
  "sports medicine": {
    "pos": "n.phr.",
    "en_def": "the area of medicine dealing with exercise and injuries",
    "cn_def": "運動醫學"
  },
  "team doctor": {
    "pos": "n.phr.",
    "en_def": "the doctor who looks after a sports team",
    "cn_def": "隊醫"
  },
  "first aid": {
    "pos": "n.phr.",
    "en_def": "simple medical help given immediately after an injury",
    "cn_def": "急救"
  },
  "defibrillator": {
    "pos": "n.",
    "en_def": "a machine that gives an electric shock to restart the heart",
    "cn_def": "去顫器；電擊器"
  },
  "painkiller": {
    "pos": "n.",
    "en_def": "a medicine that reduces pain",
    "cn_def": "止痛藥"
  },
  "anti-inflammatory": {
    "pos": "n.",
    "en_def": "a medicine that reduces heat and swelling in the body",
    "cn_def": "抗發炎藥"
  },
  "mri scan": {
    "pos": "n.phr.",
    "en_def": "a detailed picture of the inside of the body made by a machine",
    "cn_def": "磁振造影掃描"
  },
  "surgery": {
    "pos": "n.",
    "en_def": "a medical operation",
    "cn_def": "手術"
  },
  "knee brace": {
    "pos": "n.phr.",
    "en_def": "a support worn around the knee",
    "cn_def": "護膝支架"
  },
  "crutch": {
    "pos": "n.",
    "en_def": "a stick that helps an injured person walk",
    "cn_def": "拐杖"
  },
  "bandage": {
    "pos": "n.",
    "en_def": "a long strip of cloth used to cover or support an injury",
    "cn_def": "繃帶"
  },
  "range of motion": {
    "pos": "n.phr.",
    "en_def": "how far a joint can move",
    "cn_def": "活動範圍"
  },
  "subjectivity": {
    "pos": "n.",
    "en_def": "the state of being based on personal feelings",
    "cn_def": "主觀性"
  },
  "compliance": {
    "pos": "n.",
    "en_def": "the act of obeying a rule or request",
    "cn_def": "遵守；合規"
  },
  "pelvis": {
    "pos": "n.",
    "en_def": "the large bone structure at the base of the spine",
    "cn_def": "骨盆"
  },
  "desist": {
    "pos": "v.",
    "en_def": "to stop doing something",
    "cn_def": "停止"
  },
  "shortlist": {
    "pos": "v.",
    "en_def": "to choose a small group from many applicants",
    "cn_def": "列入最終名單"
  },
  "destabilise": {
    "pos": "v.",
    "en_def": "to make something less steady or secure",
    "cn_def": "使不穩定"
  },
  "barbell": {
    "pos": "n.",
    "en_def": "a long bar with heavy weights on both ends",
    "cn_def": "槓鈴"
  },
  "steroid": {
    "pos": "n.",
    "en_def": "a drug that builds muscle quickly but harms health",
    "cn_def": "類固醇"
  },
  "conduit": {
    "pos": "n.",
    "en_def": "a channel through which something passes",
    "cn_def": "管道；通道"
  },
  "footwork": {
    "pos": "n.",
    "en_def": "the way a player moves their feet in a sport",
    "cn_def": "腳步動作"
  },
  "soreness": {
    "pos": "n.",
    "en_def": "a feeling of pain in the muscles",
    "cn_def": "痠痛感"
  },
  "ankle": {
    "pos": "n.",
    "en_def": "the joint between the foot and the leg",
    "cn_def": "腳踝"
  },
  "physiotherapy": {
    "pos": "n.",
    "en_def": "treatment of injuries with exercise and massage",
    "cn_def": "物理治療"
  },
  "typology": {
    "pos": "n.",
    "en_def": "a system of grouping things by type",
    "cn_def": "類型學；分類系統"
  },
  "match-fixing": {
    "pos": "n.",
    "en_def": "arranging the result of a game dishonestly",
    "cn_def": "作假比賽；打假球"
  },
  "record-breaking": {
    "pos": "adj.",
    "en_def": "better than anything done before",
    "cn_def": "破紀錄的"
  },
  "replicable": {
    "pos": "adj.",
    "en_def": "able to be copied exactly by other researchers",
    "cn_def": "可複製的"
  },
  "anaerobic": {
    "pos": "adj.",
    "en_def": "describing short, intense exercise that does not use much oxygen",
    "cn_def": "無氧的"
  },
  "recalibrate": {
    "pos": "v.",
    "en_def": "to adjust a measuring device or a plan",
    "cn_def": "重新校準"
  },
  "contextualise": {
    "pos": "v.",
    "en_def": "to explain something by describing its situation",
    "cn_def": "置於脈絡中解釋"
  },
  "vet": {
    "pos": "v.",
    "en_def": "to check someone or something carefully before accepting them",
    "cn_def": "審查"
  },
  "pre-empt": {
    "pos": "v.",
    "en_def": "to act first in order to prevent something",
    "cn_def": "先行阻止；搶先"
  },
  "collaborative": {
    "pos": "adj.",
    "en_def": "involving people working together",
    "cn_def": "合作的"
  },
  "fast-twitch": {
    "pos": "adj.",
    "en_def": "describing muscle fibres that work quickly for short bursts",
    "cn_def": "快縮型的"
  },
  "normative": {
    "pos": "adj.",
    "en_def": "describing what is considered normal or correct",
    "cn_def": "規範性的"
  },
  "supervision": {
    "pos": "n.",
    "en_def": "the act of watching and directing an activity",
    "cn_def": "監督；指導"
  },
  "recurring": {
    "pos": "adj.",
    "en_def": "happening again and again",
    "cn_def": "反覆出現的"
  },
  "unproven": {
    "pos": "adj.",
    "en_def": "not yet shown to be true or effective",
    "cn_def": "未經證實的"
  },
  "formulation": {
    "pos": "n.",
    "en_def": "the careful making of a plan, rule or product",
    "cn_def": "制定；配方"
  },
  "push-up": {
    "pos": "n.",
    "en_def": "an exercise where you push your body up from the floor with your arms",
    "cn_def": "伏地挺身"
  },
  "foam roller": {
    "pos": "n.phr.",
    "en_def": "a tube of hard foam you roll on to relax tight muscles",
    "cn_def": "滾筒；泡沫軸"
  },
  "best practice": {
    "pos": "n.phr.",
    "en_def": "the methods accepted as the most effective",
    "cn_def": "最佳做法"
  },
  "trend line": {
    "pos": "n.phr.",
    "en_def": "a line on a graph showing the general direction of change",
    "cn_def": "趨勢線"
  },
  "interval training": {
    "pos": "n.phr.",
    "en_def": "exercise that mixes very hard periods with easy rest periods",
    "cn_def": "間歇訓練"
  },
  "fitness tracker": {
    "pos": "n.phr.",
    "en_def": "a wristband that records steps, sleep and heart rate",
    "cn_def": "健身追蹤器；運動手環"
  },
  "force plate": {
    "pos": "n.phr.",
    "en_def": "a board that measures the push of a foot on the ground",
    "cn_def": "測力板"
  },
  "time frame": {
    "pos": "n.phr.",
    "en_def": "the period during which something happens",
    "cn_def": "時程；時間範圍"
  },
  "shin pad": {
    "pos": "n.phr.",
    "en_def": "a hard cover that protects the front of the lower leg",
    "cn_def": "護脛"
  },
  "follow-up study": {
    "pos": "n.phr.",
    "en_def": "a later study that checks earlier results",
    "cn_def": "後續研究"
  },
  "broach": {
    "pos": "v.",
    "en_def": "to begin talking about a difficult subject",
    "cn_def": "開始談論（難題）"
  },
  "stretch": {
    "pos": "v.",
    "en_def": "to make your muscles longer by reaching or bending",
    "cn_def": "伸展；拉筋"
  },
  "endowment": {
    "pos": "n.",
    "en_def": "a large gift of money given to an institution",
    "cn_def": "捐贈基金"
  },
  "exemption": {
    "pos": "n.",
    "en_def": "permission not to do or pay something",
    "cn_def": "豁免；免除"
  },
  "electrolyte": {
    "pos": "n.",
    "en_def": "a salt in the body, like sodium, that helps muscles work",
    "cn_def": "電解質"
  },
  "youth academy": {
    "pos": "n.phr.",
    "en_def": "a school run by a club to train young players",
    "cn_def": "青訓學院"
  },
  "knockout stage": {
    "pos": "n.phr.",
    "en_def": "the part of a competition where the loser goes out",
    "cn_def": "淘汰賽階段"
  },
  "home advantage": {
    "pos": "n.phr.",
    "en_def": "the benefit of playing in your own stadium",
    "cn_def": "主場優勢"
  },
  "power nap": {
    "pos": "n.phr.",
    "en_def": "a short sleep of about 20 minutes to get energy back",
    "cn_def": "能量小睡"
  },
  "world record": {
    "pos": "n.phr.",
    "en_def": "the best result ever achieved in the world",
    "cn_def": "世界紀錄"
  },
  "centre of gravity": {
    "pos": "n.phr.",
    "en_def": "the point where the weight of a body is balanced",
    "cn_def": "重心"
  },
  "timing chip": {
    "pos": "n.phr.",
    "en_def": "a small electronic tag that records a runner's race time",
    "cn_def": "計時晶片"
  },
  "gym": {
    "pos": "n.",
    "en_def": "a room or building with equipment for exercise",
    "cn_def": "健身房"
  },
  "periphery": {
    "pos": "n.",
    "en_def": "the outer edge of an area",
    "cn_def": "周邊；邊緣"
  },
  "underdog": {
    "pos": "n.",
    "en_def": "a player or team not expected to win",
    "cn_def": "弱隊；不被看好的一方"
  },
  "kneecap": {
    "pos": "n.",
    "en_def": "the small round bone at the front of the knee",
    "cn_def": "膝蓋骨；髕骨"
  },
  "enactment": {
    "pos": "n.",
    "en_def": "the act of making something into law",
    "cn_def": "制定（法律）"
  },
  "creatine": {
    "pos": "n.",
    "en_def": "a natural substance taken to help with short, powerful exercise",
    "cn_def": "肌酸"
  },
  "equivalence": {
    "pos": "n.",
    "en_def": "the state of being equal in value or meaning",
    "cn_def": "等同；相等"
  },
  "marathon": {
    "pos": "n.",
    "en_def": "a running race of about 42 kilometres",
    "cn_def": "馬拉松"
  },
  "self-talk": {
    "pos": "n.",
    "en_def": "the words you say to yourself in your head",
    "cn_def": "自我對話"
  },
  "protein shake": {
    "pos": "n.phr.",
    "en_def": "a drink with a lot of protein, often taken after exercise",
    "cn_def": "蛋白飲；高蛋白奶昔"
  },
  "muscle fibre": {
    "pos": "n.phr.",
    "en_def": "one of the long thin cells that form a muscle",
    "cn_def": "肌纖維"
  },
  "false positive": {
    "pos": "n.phr.",
    "en_def": "a test result that wrongly shows something is there",
    "cn_def": "偽陽性"
  },
  "bloodstream": {
    "pos": "n.",
    "en_def": "the blood flowing around the body",
    "cn_def": "血液循環；血流"
  },
  "regression": {
    "pos": "n.",
    "en_def": "a return to a worse or earlier state",
    "cn_def": "退步；倒退"
  },
  "saturation": {
    "pos": "n.",
    "en_def": "the state of being completely full",
    "cn_def": "飽和"
  },
  "mental toughness": {
    "pos": "n.phr.",
    "en_def": "the ability to stay strong when things get hard",
    "cn_def": "心理韌性"
  },
  "working hypothesis": {
    "pos": "n.phr.",
    "en_def": "an idea used as a starting point for research",
    "cn_def": "工作假設"
  },
  "contributing factor": {
    "pos": "n.phr.",
    "en_def": "one of several causes of a result",
    "cn_def": "促成因素"
  },
  "muscle": {
    "pos": "n.",
    "en_def": "body tissue that tightens and relaxes to make you move",
    "cn_def": "肌肉"
  },
  "segregation": {
    "pos": "n.",
    "en_def": "the act of keeping groups separate",
    "cn_def": "隔離；區隔"
  },
  "helmet": {
    "pos": "n.",
    "en_def": "a hard hat that protects the head",
    "cn_def": "頭盔；安全帽"
  },
  "grip": {
    "pos": "n.",
    "en_def": "the way you hold something, or the ability to hold it firmly",
    "cn_def": "握法；抓力"
  },
  "spike": {
    "pos": "n.",
    "en_def": "a sharp point on the bottom of a sports shoe",
    "cn_def": "釘鞋釘"
  },
  "causal link": {
    "pos": "n.phr.",
    "en_def": "a connection in which one thing makes another happen",
    "cn_def": "因果關聯"
  },
  "penalty shoot-out": {
    "pos": "n.phr.",
    "en_def": "a way of deciding a drawn match by single kicks at goal",
    "cn_def": "十二碼大戰"
  },
  "pep talk": {
    "pos": "n.phr.",
    "en_def": "a short encouraging speech before or during a match",
    "cn_def": "激勵講話"
  }
};

const EXTRA_GLOSSES = {};
