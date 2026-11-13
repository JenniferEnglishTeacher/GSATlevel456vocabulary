// Part 2 Quiz Data: experiment – majority
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 15-2 - experiment – majority",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "experiment",
    "pos": "n.",
    "cn_def": "實驗；試驗（可數）",
    "en_def": "a scientific procedure undertaken to make a discovery, test a hypothesis, or demonstrate a known fact",
    "sentence": "University chemistry students put on safety goggles and began to conduct a delicate laboratory {{BLANK}} with acids.",
    "cn": "大學化學系的學生們戴上護目鏡，開始用酸性物質進行一項精密的實驗室實驗。"
  },
  {
    "word": "experiment",
    "pos": "v.",
    "cn_def": "進行實驗；嘗試（動詞）",
    "en_def": "to perform a scientific procedure, or to try out new ideas or methods",
    "sentence": "Medical researchers decided to {{BLANK}} on laboratory mice to discover whether the new vaccine produced side effects.",
    "cn": "醫學研究人員決定在實驗室小鼠身上做實驗，以發現這款新疫苗是否會產生副作用。"
  },
  {
    "word": "experimental",
    "pos": "adj.",
    "cn_def": "實驗性的；試驗階段的",
    "en_def": "based on untested ideas or not yet fully developed or approved",
    "sentence": "The brave patient agreed to receive an {{BLANK}} drug treatment that had shown promising laboratory results.",
    "cn": "那位勇敢的病人同意接受一種在實驗室結果中顯示出良好前景的試驗性藥物治療。"
  },
  {
    "word": "faded",
    "pos": "v.",
    "cn_def": "褪色；漸漸消逝；變微弱（動詞）",
    "en_def": "to gradually grow faint and disappear, or to lose brightness, vivid color, or vitality",
    "sentence": "Rachel still cherishes her favorite cotton band shirt even though its bright colors have noticeably {{BLANK}} over the years.",
    "cn": "瑞秋仍然珍愛她最喜愛的純棉樂團T恤，儘管其鮮豔的色彩多年來已經明顯褪色。"
  },
  {
    "word": "fearful",
    "pos": "adj.",
    "cn_def": "害怕的；擔憂的；恐懼的",
    "en_def": "feeling afraid, anxious, or showing fear; terrifying",
    "sentence": "Residents living near the swelling river were extremely {{BLANK}} that heavy rain would cause severe flooding tonight.",
    "cn": "住在暴漲河水附近的居民極度擔憂害怕今晚的大雨會造成嚴重的洪患。"
  },
  {
    "word": "folded",
    "pos": "v.",
    "cn_def": "摺疊；對摺；交叉雙臂（動詞）",
    "en_def": "to bend something over on itself so that one part of it covers another",
    "sentence": "The stubborn supervisor stood silently by the door and {{BLANK}} his arms across his broad chest during the meeting.",
    "cn": "在會議期間，那位固執的主管靜靜地站在門邊，雙臂交叉抱於寬闊的胸前。"
  },
  {
    "word": "fold",
    "pos": "n.",
    "cn_def": "摺痕；摺層；起伏（可數）",
    "en_def": "a form or shape produced by the turning over of a layer of a material on itself",
    "sentence": "A frightened little gray mouse hid quietly behind a thick {{BLANK}} of the heavy velvet curtain in the living room.",
    "cn": "一隻受驚嚇的灰色小老鼠悄悄躲在客廳厚重天鵝絨窗簾的厚實摺層後面。"
  },
  {
    "word": "indoor",
    "pos": "adj.",
    "cn_def": "室內的；戶內的（形容詞，置於名詞前）",
    "en_def": "situated, conducted, or suitable for use inside a building",
    "sentence": "The luxurious modern fitness center features a heated {{BLANK}} swimming pool that members can enjoy throughout the chilly winter.",
    "cn": "這家豪華現代健身中心設有溫水室內游泳池，會員在寒冷的整個冬天都可以盡情享受。"
  },
  {
    "word": "indoors",
    "pos": "adv.",
    "cn_def": "在室內；向室內（副詞）",
    "en_def": "into or within a building; not outside",
    "sentence": "Because a violent typhoon was approaching the island, local authorities advised all citizens to stay {{BLANK}} until the storm passed.",
    "cn": "因為強烈颱風正在逼近該島，當地政府建議所有市民留在室內，直到暴風雨過去。"
  },
  {
    "word": "leak",
    "pos": "v.",
    "cn_def": "滲漏；漏出；洩漏（動詞）",
    "en_def": "to accidentally lose or admit contents, especially liquid or gas, through a hole or crack",
    "sentence": "During the torrential midnight downpour, dirty rainwater began to {{BLANK}} through the old roof and damaged the ceiling.",
    "cn": "在午夜的傾盆大雨中，骯髒的雨水開始從老舊屋頂滲漏下來，損壞了天花板。"
  },
  {
    "word": "leak",
    "pos": "n.",
    "cn_def": "漏洞；滲漏處；洩密（可數）",
    "en_def": "a hole or crack through which liquid or gas can enter or escape, or an unauthorized disclosure",
    "sentence": "The experienced plumber arrived with his heavy tool bag to inspect the bathroom pipes and fix a serious water {{BLANK}}.",
    "cn": "經驗豐富的水電工帶著沉重的工具袋抵達，檢查浴室管線並修補嚴重的漏水滲漏處。"
  },
  {
    "word": "limbs",
    "pos": "n.",
    "cn_def": "肢體；手足；大樹枝（可數）",
    "en_def": "an arm or leg of a person or four-legged animal, or a large branch of a tree",
    "sentence": "After hiking up the steep rocky mountain trail for seven continuous hours, Mary sat on a boulder to rest her aching {{BLANK}}.",
    "cn": "在陡峭的岩石山徑上連續健行七個小時後，瑪麗坐在巨石上休息她痠痛的四肢。"
  },
  {
    "word": "majority",
    "pos": "n.",
    "cn_def": "大多數；過半數（通常單數）",
    "en_def": "the greater number or part; more than half of a total",
    "sentence": "The recent nationwide survey revealed that the vast {{BLANK}} of high school students prefer digital textbooks over paper ones.",
    "cn": "最近的全國性調查顯示，絕大多數高中生偏好數位電子教科書更甚於紙本書籍。"
  }
];

const MCQS = [
  {
    "q": "The science students wore protective white coats to perform a chemistry ______ in the laboratory.",
    "options": [
      "majority",
      "experiment",
      "fold",
      "limb"
    ],
    "answer": 1,
    "cn": "理科學生們穿著白色防護袍，在實驗室裡進行一項化學實驗。",
    "vocabIndex": 0
  },
  {
    "q": "A strong gust of wind blew a heavy wooden ______ off the tree and dropped it on the grass.",
    "options": [
      "fold",
      "leak",
      "limb",
      "majority"
    ],
    "answer": 2,
    "cn": "一陣強風從樹上吹斷了一根沉重的木質大樹枝，並將它掉落在草地上。",
    "vocabIndex": 11
  },
  {
    "q": "The vast ______ of students in our class voted to go camping for the graduation trip.",
    "options": [
      "majority",
      "fold",
      "leak",
      "limb"
    ],
    "answer": 0,
    "cn": "我們班上的絕大多數學生投票贊成去露營作為畢業旅行。",
    "vocabIndex": 12
  },
  {
    "q": "The plumber used a wrench to tighten the pipe under the sink and stop the water ______.",
    "options": [
      "limb",
      "majority",
      "fold",
      "leak"
    ],
    "answer": 3,
    "cn": "水電工用扳手鎖緊水槽底下的水管，以阻止漏水滲漏處。",
    "vocabIndex": 9
  },
  {
    "q": "A tiny gray mouse hid quietly behind a thick ______ of the velvet curtain in the dining room.",
    "options": [
      "majority",
      "fold",
      "limb",
      "leak"
    ],
    "answer": 1,
    "cn": "一隻灰色小老鼠悄悄躲在飯廳天鵝絨窗簾厚實的摺層後面。",
    "vocabIndex": 5
  },
  {
    "q": "The doctor decided to ______ with new herbal treatments to help patients with persistent coughs.",
    "options": [
      "limb",
      "fearful",
      "experiment",
      "indoor"
    ],
    "answer": 2,
    "cn": "醫生決定嘗試實驗新的草藥療法，以幫助持續咳嗽的病人。",
    "vocabIndex": 0
  },
  {
    "q": "The soccer team celebrated because the ______ of points came from their star striker.",
    "options": [
      "majority",
      "limb",
      "fold",
      "leak"
    ],
    "answer": 0,
    "cn": "足球隊進行了慶祝，因為過半數／大多數的分數都來自他們的明星前鋒。",
    "vocabIndex": 12
  },
  {
    "q": "After a day of heavy work, the farmer sat on the porch to rest his weary ______.",
    "options": [
      "experiments",
      "leaks",
      "folds",
      "limbs"
    ],
    "answer": 3,
    "cn": "經過一整天的繁重勞動，農民坐在門廊上休息他疲倦的四肢。",
    "vocabIndex": 11
  },
  {
    "q": "A small crack in the fuel tank caused a slow gas ______ that was detected by the mechanic.",
    "options": [
      "fold",
      "majority",
      "leak",
      "limb"
    ],
    "answer": 2,
    "cn": "油箱上的一道小裂縫造成了緩慢的汽油滲漏，被技工檢測了出來。",
    "vocabIndex": 9
  },
  {
    "q": "The hotel has a wonderful ______ swimming pool, so guests can swim even on freezing winter days.",
    "options": [
      "indoor",
      "experimental",
      "fearful",
      "leaked"
    ],
    "answer": 0,
    "cn": "這家飯店擁有極佳的室內游泳池，因此賓客即使在酷寒的冬日也能游泳。",
    "vocabIndex": 7
  },
  {
    "q": "The old woman was ______ of walking home alone in the dark alley at midnight.",
    "options": [
      "indoor",
      "fearful",
      "folded",
      "experimental"
    ],
    "answer": 1,
    "cn": "那位老婦人對半夜獨自走在黑暗的小巷中回家感到害怕恐懼。",
    "vocabIndex": 4
  },
  {
    "q": "The hospital is testing an ______ treatment on volunteer patients suffering from severe knee pain.",
    "options": [
      "indoor",
      "folded",
      "fearful",
      "experimental"
    ],
    "answer": 3,
    "cn": "該醫院正在患有嚴重膝蓋疼痛的志願病人身上測試一種試驗性／實驗性療法。",
    "vocabIndex": 2
  },
  {
    "q": "Playing ______ basketball in the gym protects the players from extreme summer heat.",
    "options": [
      "indoor",
      "experimental",
      "fearful",
      "fading"
    ],
    "answer": 0,
    "cn": "在體育館內打室內籃球能保護球員免受夏季酷熱之苦。",
    "vocabIndex": 7
  },
  {
    "q": "The little boy looked ______ when a loud thunderstorm shook the windows of his bedroom.",
    "options": [
      "indoor",
      "fearful",
      "folded",
      "experimental"
    ],
    "answer": 1,
    "cn": "當一場巨大的雷陣雨震動了他臥室的窗戶時，那個小男孩顯得十分害怕。",
    "vocabIndex": 4
  },
  {
    "q": "The bright yellow paint on the wooden garden fence began to ______ after months of sun and rain.",
    "options": [
      "leak",
      "fold",
      "fade",
      "experiment"
    ],
    "answer": 2,
    "cn": "在經歷數月的日曬雨淋之後，木質花園圍欄上的亮黃色油漆開始褪色。",
    "vocabIndex": 3
  },
  {
    "q": "Please ______ your blanket neatly and put it on the shelf before leaving the bedroom.",
    "options": [
      "fade",
      "experiment",
      "leak",
      "fold"
    ],
    "answer": 3,
    "cn": "離開臥室前，請將毛毯摺疊整齊並放在架子上。",
    "vocabIndex": 5
  },
  {
    "q": "Cold rainwater started to ______ through the damaged ceiling and dripped onto the floor.",
    "options": [
      "leak",
      "fade",
      "fold",
      "experiment"
    ],
    "answer": 0,
    "cn": "冰冷的雨水開始從受損的天花板滲漏出來，滴到了地板上。",
    "vocabIndex": 9
  },
  {
    "q": "As the train traveled farther into the tunnel, the loud noise slowly ______ into silence.",
    "options": [
      "folded",
      "faded",
      "experimented",
      "leaked"
    ],
    "answer": 1,
    "cn": "隨著火車進一步駛入隧道，巨大的聲響漸漸消逝進入寂靜之中。",
    "vocabIndex": 3
  },
  {
    "q": "The teacher stood in front of the classroom and ______ his arms while waiting for silence.",
    "options": [
      "faded",
      "leaked",
      "folded",
      "experimented"
    ],
    "answer": 2,
    "cn": "老師站在教室前面，交叉抱著雙臂，等待大家安靜下來。"
  },
  {
    "q": "An unknown office worker secretly ______ the test answers to the students before the examination.",
    "options": [
      "faded",
      "folded",
      "experimented",
      "leaked"
    ],
    "answer": 3,
    "cn": "一位不知名的辦公室員工在考試前偷偷將測驗答案洩漏給了學生。",
    "vocabIndex": 9
  },
  {
    "q": "Because it was raining cats and dogs outside, the children had to spend the day playing ______.",
    "options": [
      "indoors",
      "indoor",
      "fading",
      "fearful"
    ],
    "answer": 0,
    "cn": "因為外面下著傾盆大雨，孩子們不得不整天待在室內玩耍。",
    "vocabIndex": 8
  },
  {
    "q": "The city library asked citizens to stay ______ during the severe typhoon warning.",
    "options": [
      "indoor",
      "indoors",
      "fearful",
      "faded"
    ],
    "answer": 1,
    "cn": "市立圖書館在強烈颱風警報期間要求市民留在室內。",
    "vocabIndex": 8
  },
  {
    "q": "The courageous firefighter was willing to ______ to save the trapped puppy from the deep well.",
    "options": [
      "stay indoors",
      "fade away",
      "risk life and limb",
      "conduct an experiment"
    ],
    "answer": 2,
    "cn": "那位勇敢的消防員願意冒著生命與傷殘危險，從深井中救出受困的小狗。",
    "vocabIndex": 11
  },
  {
    "q": "The young scientist decided to ______ in the laboratory to test the strength of the new plastic.",
    "options": [
      "fold one's arms",
      "risk life and limb",
      "stay indoors",
      "conduct an experiment"
    ],
    "answer": 3,
    "cn": "那位年輕科學家決定在實驗室裡進行一項實驗，以測試新型塑膠的強度。",
    "vocabIndex": 0
  },
  {
    "q": "As the evening sky grew completely dark, the bright orange light of the sunset began to ______.",
    "options": [
      "risk life and limb",
      "fade away",
      "conduct an experiment",
      "stay indoors"
    ],
    "answer": 1,
    "cn": "隨著夜空完全變暗，夕陽明亮的橘色光芒開始漸漸消逝。",
    "vocabIndex": 3
  }
];

const LOOKUP = {
  "experiment": {
    "pos": "n.",
    "en_def": "a scientific procedure undertaken to make a discovery, test a hypothesis, or demonstrate a known fact",
    "cn_def": "實驗；試驗（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a scientific procedure undertaken to make a discovery, test a hypothesis, or demonstrate a known fact",
        "cn_def": "實驗；試驗（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to perform a scientific procedure, or to try out new ideas or methods",
        "cn_def": "進行實驗；嘗試（動詞）"
      }
    ]
  },
  "experimental": {
    "pos": "adj.",
    "en_def": "based on untested ideas or not yet fully developed or approved",
    "cn_def": "實驗性的；試驗階段的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "based on untested ideas or not yet fully developed or approved",
        "cn_def": "實驗性的；試驗階段的"
      }
    ]
  },
  "fade": {
    "pos": "v.",
    "en_def": "to gradually grow faint and disappear, or to lose brightness, vivid color, or vitality",
    "cn_def": "褪色；漸漸消逝；變微弱（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to gradually grow faint and disappear, or to lose brightness, vivid color, or vitality",
        "cn_def": "褪色；漸漸消逝；變微弱（動詞）"
      }
    ]
  },
  "faded": {
    "pos": "v.",
    "en_def": "to gradually grow faint and disappear, or to lose brightness, vivid color, or vitality",
    "cn_def": "褪色；漸漸消逝；變微弱（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to gradually grow faint and disappear, or to lose brightness, vivid color, or vitality",
        "cn_def": "褪色；漸漸消逝；變微弱（動詞）"
      }
    ]
  },
  "fearful": {
    "pos": "adj.",
    "en_def": "feeling afraid, anxious, or showing fear; terrifying",
    "cn_def": "害怕的；擔憂的；恐懼的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling afraid, anxious, or showing fear; terrifying",
        "cn_def": "害怕的；擔憂的；恐懼的"
      }
    ]
  },
  "fold": {
    "pos": "v.",
    "en_def": "to bend something over on itself so that one part of it covers another",
    "cn_def": "摺疊；對摺；交叉雙臂（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to bend something over on itself so that one part of it covers another",
        "cn_def": "摺疊；對摺；交叉雙臂（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a form or shape produced by the turning over of a layer of a material on itself",
        "cn_def": "摺痕；摺層；起伏（可數）"
      }
    ]
  },
  "folded": {
    "pos": "v.",
    "en_def": "to bend something over on itself so that one part of it covers another",
    "cn_def": "摺疊；對摺；交叉雙臂（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to bend something over on itself so that one part of it covers another",
        "cn_def": "摺疊；對摺；交叉雙臂（動詞）"
      }
    ]
  },
  "indoor": {
    "pos": "adj.",
    "en_def": "situated, conducted, or suitable for use inside a building",
    "cn_def": "室內的；戶內的（形容詞，置於名詞前）",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "situated, conducted, or suitable for use inside a building",
        "cn_def": "室內的；戶內的（形容詞，置於名詞前）"
      }
    ]
  },
  "indoors": {
    "pos": "adv.",
    "en_def": "into or within a building; not outside",
    "cn_def": "在室內；向室內（副詞）",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "into or within a building; not outside",
        "cn_def": "在室內；向室內（副詞）"
      }
    ]
  },
  "leak": {
    "pos": "v.",
    "en_def": "to accidentally lose or admit contents, especially liquid or gas, through a hole or crack",
    "cn_def": "滲漏；漏出；洩漏（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to accidentally lose or admit contents, especially liquid or gas, through a hole or crack",
        "cn_def": "滲漏；漏出；洩漏（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a hole or crack through which liquid or gas can enter or escape, or an unauthorized disclosure",
        "cn_def": "漏洞；滲漏處；洩密（可數）"
      }
    ]
  },
  "limbs": {
    "pos": "n.",
    "en_def": "an arm or leg of a person or four-legged animal, or a large branch of a tree",
    "cn_def": "肢體；手足；大樹枝（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an arm or leg of a person or four-legged animal, or a large branch of a tree",
        "cn_def": "肢體；手足；大樹枝（可數）"
      }
    ]
  },
  "limb": {
    "pos": "n.",
    "en_def": "an arm or leg of a person or four-legged animal, or a large branch of a tree",
    "cn_def": "肢體；手足；大樹枝（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an arm or leg of a person or four-legged animal, or a large branch of a tree",
        "cn_def": "肢體；手足；大樹枝（可數）"
      }
    ]
  },
  "majority": {
    "pos": "n.",
    "en_def": "the greater number or part; more than half of a total",
    "cn_def": "大多數；過半數（通常單數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the greater number or part; more than half of a total",
        "cn_def": "大多數；過半數（通常單數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
