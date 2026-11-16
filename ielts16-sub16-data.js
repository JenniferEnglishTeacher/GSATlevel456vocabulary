// Topic 16 Subunit 16 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T16 S16 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "raise the bar",
    "pos": "v.phr.",
    "cn_def": "提高標準",
    "en_def": "to set a higher standard than before",
    "sentence": "Her world record really {{BLANK}} for everyone, and three other runners went faster within a year.",
    "cn": "她的世界紀錄確實為所有人提高了標準，而一年內另外三位跑者都跑得更快了。"
  },
  {
    "word": "move the goalposts",
    "pos": "v.phr.",
    "cn_def": "中途改變規則",
    "en_def": "to unfairly change the rules or aims during something",
    "sentence": "The committee kept changing the entry standard, and the athletes complained that it was trying to {{BLANK}}.",
    "cn": "委員會不斷改變參賽標準，而運動員抱怨它是在中途改變規則。"
  },
  {
    "word": "keep one's eye on the ball",
    "pos": "v.phr.",
    "cn_def": "專注於重點",
    "en_def": "to stay focused on what matters",
    "sentence": "There are many distractions before a big final, so the captain told everyone to {{BLANK}}.",
    "cn": "大賽前有許多令人分心的事，所以隊長叫大家專注於重點。"
  },
  {
    "word": "out of one's league",
    "pos": "adj.phr.",
    "cn_def": "遠超出能力範圍",
    "en_def": "at a much higher level than you can match",
    "sentence": "We were clearly {{BLANK}} in the first half, but we defended bravely and only lost by two goals.",
    "cn": "上半場我們明顯實力不如對手，但我們勇敢防守，只輸了兩球。"
  },
  {
    "word": "ahead of the game",
    "pos": "adj.phr.",
    "cn_def": "領先同業；佔先機",
    "en_def": "in a better position than your rivals",
    "sentence": "The club bought its own data system early, so it stayed {{BLANK}} for several seasons.",
    "cn": "這家俱樂部很早就購入自己的數據系統，所以它好幾個球季都保持領先。"
  },
  {
    "word": "neck and neck",
    "pos": "adj.phr.",
    "cn_def": "不分軒輊",
    "en_def": "exactly equal in a race or competition",
    "sentence": "The two swimmers were {{BLANK}} with ten metres to go, and the crowd rose to its feet.",
    "cn": "剩下十公尺時兩位泳者不分軒輊，而觀眾全體站了起來。"
  },
  {
    "word": "down to the wire",
    "pos": "adj.phr.",
    "cn_def": "直到最後一刻",
    "en_def": "not decided until the very last moment",
    "sentence": "The title race went {{BLANK}}, because both teams won every match until the final weekend.",
    "cn": "冠軍之爭撐到最後一刻，因為兩隊直到最後一個週末前都贏下每場比賽。"
  },
  {
    "word": "throw in the towel",
    "pos": "v.phr.",
    "cn_def": "認輸；放棄",
    "en_def": "to give up",
    "sentence": "He was two sets behind and exhausted, but he refused to {{BLANK}} and somehow won the match.",
    "cn": "他落後兩盤又疲憊不堪，但他拒絕認輸，最後竟然贏下了那場比賽。"
  },
  {
    "word": "jump the gun",
    "pos": "v.phr.",
    "cn_def": "搶跑；過早行動",
    "en_def": "to start too early",
    "sentence": "One sprinter {{BLANK}} in the final, so the officials called the runners back and gave him a warning.",
    "cn": "決賽中一位短跑選手搶跑，所以官員把跑者叫回並給了他一次警告。"
  },
  {
    "word": "par for the course",
    "pos": "adj.phr.",
    "cn_def": "稀鬆平常；在所難免",
    "en_def": "normal and to be expected in that situation",
    "sentence": "Sore legs after a long run are {{BLANK}}, so do not worry unless the pain is sharp.",
    "cn": "長跑後雙腿痠痛是在所難免的，所以除非是劇痛，否則不用擔心。"
  },
  {
    "word": "hit one's stride",
    "pos": "v.phr.",
    "cn_def": "進入狀況；找到節奏",
    "en_def": "to begin doing something confidently and well",
    "sentence": "She started the season slowly, but she {{BLANK}} in March and scored in five matches.",
    "cn": "她本季開季緩慢，但她在三月進入狀況，並在五場比賽中得分。"
  },
  {
    "word": "get a second wind",
    "pos": "v.phr.",
    "cn_def": "重振精神；恢復體力",
    "en_def": "to find new energy after feeling tired",
    "sentence": "I thought I would have to walk, but I {{BLANK}} at the top of the hill and ran the rest.",
    "cn": "我以為我得改成走路，但我在山頂恢復了體力，並跑完了剩下的路程。"
  },
  {
    "word": "go the distance",
    "pos": "v.phr.",
    "cn_def": "堅持到最後",
    "en_def": "to continue until something is finished",
    "sentence": "Many runners start too fast, so only those who pace themselves can really {{BLANK}}.",
    "cn": "許多跑者一開始衝太快，所以只有懂得配速的人才能真正堅持到最後。"
  },
  {
    "word": "in the running",
    "pos": "adj.phr.",
    "cn_def": "仍有機會",
    "en_def": "still having a chance of winning",
    "sentence": "After Saturday's win we are still {{BLANK}} for the title, although we must beat the leaders next month.",
    "cn": "星期六贏球後我們冠軍仍有機會，雖然我們下個月必須擊敗領先者。"
  },
  {
    "word": "bounce back",
    "pos": "v.phr.",
    "cn_def": "迅速復原；重新振作",
    "en_def": "to recover quickly after a defeat or problem",
    "sentence": "The young team lost badly in the opening game, but they {{BLANK}} and won their next four matches.",
    "cn": "這支年輕球隊在開幕戰大敗，但他們重新振作並贏了接下來四場比賽。"
  },
  {
    "word": "no pain, no gain",
    "pos": "phr.",
    "cn_def": "一分耕耘，一分收穫",
    "en_def": "you must work hard and suffer to improve",
    "sentence": "My coach always says \"{{BLANK}}\", but she also reminds us that sharp pain is a warning.",
    "cn": "我的教練總是說「沒有付出就沒有收穫」，但她也提醒我們劇痛是一種警訊。"
  },
  {
    "word": "win hands down",
    "pos": "v.phr.",
    "cn_def": "輕鬆取勝",
    "en_def": "to win very easily",
    "sentence": "They expected a close game, but the visitors {{BLANK}} and led by thirty points at half-time.",
    "cn": "他們預期會是一場勢均力敵的比賽，但客隊輕鬆取勝，中場休息時已領先三十分。"
  },
  {
    "word": "by a whisker",
    "pos": "adv.phr.",
    "cn_def": "以極小的差距",
    "en_def": "by a very small amount",
    "sentence": "She missed the record {{BLANK}}, and she joked that she should have cut her hair that morning.",
    "cn": "她以極小的差距錯失紀錄，而她開玩笑說那天早上應該去剪個頭髮。"
  },
  {
    "word": "the home stretch",
    "pos": "n.phr.",
    "cn_def": "最後階段",
    "en_def": "the last part of a race or task",
    "sentence": "We are on {{BLANK}} of the season now, so the coach wants everyone to stay healthy for three more weeks.",
    "cn": "我們現在正處於本季的最後階段，所以教練希望大家再多保持三週的健康。"
  },
  {
    "word": "give it one's all",
    "pos": "v.phr.",
    "cn_def": "全力以赴",
    "en_def": "to try as hard as you possibly can",
    "sentence": "He did not win a medal, but he {{BLANK}} and his family were proud of him anyway.",
    "cn": "他沒有拿到獎牌，但他全力以赴，而他的家人無論如何都為他感到驕傲。"
  }
];

const MCQS = [
  {
    "q": "Her world record really _____ for everyone, and three other runners went faster within a year.",
    "options": [
      "keep one's eye on the ball",
      "raise the bar",
      "go the distance",
      "scale up"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The committee kept changing the entry standard, and the athletes complained that it was trying to _____.",
    "options": [
      "bounce back",
      "go the distance",
      "raise the bar",
      "move the goalposts"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "There are many distractions before a big final, so the captain told everyone to _____.",
    "options": [
      "keep one's eye on the ball",
      "go the distance",
      "roll out",
      "move the goalposts"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "We were clearly _____ in the first half, but we defended bravely and only lost by two goals.",
    "options": [
      "ahead of the game",
      "down to the wire",
      "out of one's league",
      "in the running"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The club bought its own data system early, so it stayed _____ for several seasons.",
    "options": [
      "ahead of the game",
      "par for the course",
      "neck and neck",
      "out of one's league"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The two swimmers were _____ with ten metres to go, and the crowd rose to its feet.",
    "options": [
      "in the running",
      "neck and neck",
      "ahead of the game",
      "down to the wire"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The title race went _____, because both teams won every match until the final weekend.",
    "options": [
      "ahead of the game",
      "out of one's league",
      "in the running",
      "down to the wire"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "He was two sets behind and exhausted, but he refused to _____ and somehow won the match.",
    "options": [
      "bounce back",
      "raise the bar",
      "throw in the towel",
      "jump the gun"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "One sprinter _____ in the final, so the officials called the runners back and gave him a warning.",
    "options": [
      "keep one's eye on the ball",
      "throw in the towel",
      "scale up",
      "jump the gun"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Sore legs after a long run are _____, so do not worry unless the pain is sharp.",
    "options": [
      "out of one's league",
      "neck and neck",
      "par for the course",
      "in the running"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "She started the season slowly, but she _____ in March and scored in five matches.",
    "options": [
      "hit one's stride",
      "give it one's all",
      "scale up",
      "bounce back"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "I thought I would have to walk, but I _____ at the top of the hill and ran the rest.",
    "options": [
      "roll out",
      "get a second wind",
      "scale up",
      "give it one's all"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Many runners start too fast, so only those who pace themselves can really _____.",
    "options": [
      "go the distance",
      "scale up",
      "throw in the towel",
      "hit one's stride"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "After Saturday's win we are still _____ for the title, although we must beat the leaders next month.",
    "options": [
      "down to the wire",
      "neck and neck",
      "in the running",
      "ahead of the game"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The young team lost badly in the opening game, but they _____ and won their next four matches.",
    "options": [
      "go the distance",
      "bounce back",
      "move the goalposts",
      "raise the bar"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "My coach always says \"_____\", but she also reminds us that sharp pain is a warning.",
    "options": [
      "stride length",
      "fitness tracker",
      "line of reasoning",
      "no pain, no gain"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "They expected a close game, but the visitors _____ and led by thirty points at half-time.",
    "options": [
      "raise the bar",
      "go the distance",
      "win hands down",
      "scale up"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "She missed the record _____, and she joked that she should have cut her hair that morning.",
    "options": [
      "team doctor",
      "knock-on effect",
      "technical suit",
      "by a whisker"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "We are on _____ of the season now, so the coach wants everyone to stay healthy for three more weeks.",
    "options": [
      "knock-on effect",
      "the home stretch",
      "rib cage",
      "knee brace"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "He did not win a medal, but he _____ and his family were proud of him anyway.",
    "options": [
      "give it one's all",
      "move the goalposts",
      "throw in the towel",
      "keep one's eye on the ball"
    ],
    "answer": 0,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "raise the bar": {
    "pos": "v.phr.",
    "en_def": "to set a higher standard than before",
    "cn_def": "提高標準"
  },
  "move the goalposts": {
    "pos": "v.phr.",
    "en_def": "to unfairly change the rules or aims during something",
    "cn_def": "中途改變規則"
  },
  "keep one's eye on the ball": {
    "pos": "v.phr.",
    "en_def": "to stay focused on what matters",
    "cn_def": "專注於重點"
  },
  "out of one's league": {
    "pos": "adj.phr.",
    "en_def": "at a much higher level than you can match",
    "cn_def": "遠超出能力範圍"
  },
  "ahead of the game": {
    "pos": "adj.phr.",
    "en_def": "in a better position than your rivals",
    "cn_def": "領先同業；佔先機"
  },
  "neck and neck": {
    "pos": "adj.phr.",
    "en_def": "exactly equal in a race or competition",
    "cn_def": "不分軒輊"
  },
  "down to the wire": {
    "pos": "adj.phr.",
    "en_def": "not decided until the very last moment",
    "cn_def": "直到最後一刻"
  },
  "throw in the towel": {
    "pos": "v.phr.",
    "en_def": "to give up",
    "cn_def": "認輸；放棄"
  },
  "jump the gun": {
    "pos": "v.phr.",
    "en_def": "to start too early",
    "cn_def": "搶跑；過早行動"
  },
  "par for the course": {
    "pos": "adj.phr.",
    "en_def": "normal and to be expected in that situation",
    "cn_def": "稀鬆平常；在所難免"
  },
  "hit one's stride": {
    "pos": "v.phr.",
    "en_def": "to begin doing something confidently and well",
    "cn_def": "進入狀況；找到節奏"
  },
  "get a second wind": {
    "pos": "v.phr.",
    "en_def": "to find new energy after feeling tired",
    "cn_def": "重振精神；恢復體力"
  },
  "go the distance": {
    "pos": "v.phr.",
    "en_def": "to continue until something is finished",
    "cn_def": "堅持到最後"
  },
  "in the running": {
    "pos": "adj.phr.",
    "en_def": "still having a chance of winning",
    "cn_def": "仍有機會"
  },
  "bounce back": {
    "pos": "v.phr.",
    "en_def": "to recover quickly after a defeat or problem",
    "cn_def": "迅速復原；重新振作"
  },
  "no pain, no gain": {
    "pos": "phr.",
    "en_def": "you must work hard and suffer to improve",
    "cn_def": "一分耕耘，一分收穫"
  },
  "win hands down": {
    "pos": "v.phr.",
    "en_def": "to win very easily",
    "cn_def": "輕鬆取勝"
  },
  "by a whisker": {
    "pos": "adv.phr.",
    "en_def": "by a very small amount",
    "cn_def": "以極小的差距"
  },
  "the home stretch": {
    "pos": "n.phr.",
    "en_def": "the last part of a race or task",
    "cn_def": "最後階段"
  },
  "give it one's all": {
    "pos": "v.phr.",
    "en_def": "to try as hard as you possibly can",
    "cn_def": "全力以赴"
  },
  "scale up": {
    "pos": "v.phr.",
    "en_def": "to make something bigger or available to more people",
    "cn_def": "擴大規模"
  },
  "roll out": {
    "pos": "v.phr.",
    "en_def": "to introduce a new plan or product widely",
    "cn_def": "推出；全面實施"
  },
  "stride length": {
    "pos": "n.phr.",
    "en_def": "the distance covered in one step while running",
    "cn_def": "步幅"
  },
  "fitness tracker": {
    "pos": "n.phr.",
    "en_def": "a wristband that records steps, sleep and heart rate",
    "cn_def": "健身追蹤器；運動手環"
  },
  "line of reasoning": {
    "pos": "n.phr.",
    "en_def": "the series of steps in an argument",
    "cn_def": "推理思路"
  },
  "team doctor": {
    "pos": "n.phr.",
    "en_def": "the doctor who looks after a sports team",
    "cn_def": "隊醫"
  },
  "knock-on effect": {
    "pos": "n.phr.",
    "en_def": "an indirect result that follows something else",
    "cn_def": "連帶影響"
  },
  "technical suit": {
    "pos": "n.phr.",
    "en_def": "a special tight suit worn to swim faster",
    "cn_def": "競技泳衣"
  },
  "rib cage": {
    "pos": "n.phr.",
    "en_def": "the bones that curve around your chest",
    "cn_def": "胸腔；肋骨"
  },
  "knee brace": {
    "pos": "n.phr.",
    "en_def": "a support worn around the knee",
    "cn_def": "護膝支架"
  }
};

const EXTRA_GLOSSES = {};
