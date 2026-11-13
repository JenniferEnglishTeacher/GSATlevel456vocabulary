// Part 1 Quiz Data: awful – dragonfly
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 14-1 - awful – dragonfly",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "awful",
    "pos": "adj.",
    "cn_def": "極糟糕的；可怕的",
    "en_def": "extremely bad, unpleasant, or shocking",
    "sentence": "We had to cancel our family picnic in the park because of the {{BLANK}} weather.",
    "cn": "因為極糟糕的天氣，我們不得不取消在公園的家庭野餐。"
  },
  {
    "word": "bulb",
    "pos": "n.",
    "cn_def": "電燈泡；植物鱗莖（球根）",
    "en_def": "a glass electric light; an underground plant stem",
    "sentence": "The bright light {{BLANK}} in the hallway suddenly burned out and plunged the floor into darkness.",
    "cn": "走廊上明亮的電燈泡突然燒壞，使整個樓層陷入黑暗。"
  },
  {
    "word": "bull",
    "pos": "n.",
    "cn_def": "公牛；雄性大型動物",
    "en_def": "an uncastrated adult male animal of cattle; a large strong beast",
    "sentence": "The brave matador waved a bright red cloth to divert the charging wild {{BLANK}}.",
    "cn": "勇敢的鬥牛士揮舞鮮紅的布以轉移那隻衝鋒的野公牛的注意。"
  },
  {
    "word": "career",
    "pos": "n.",
    "cn_def": "職業生涯；事業",
    "en_def": "an occupation or profession followed for a significant period of life",
    "sentence": "After graduating from college, Emily chose to pursue a rewarding {{BLANK}} in medicine.",
    "cn": "大學畢業後，艾蜜莉選擇追求一份有意義的醫學職業生涯。"
  },
  {
    "word": "conscious",
    "pos": "adj.",
    "cn_def": "清醒的；意識到的；有知覺的",
    "en_def": "aware of and responding to one's surroundings; awake",
    "sentence": "The injured driver remained fully {{BLANK}} while emergency rescue workers lifted him from the vehicle.",
    "cn": "當緊急救援人員將受傷駕駛從車內救出時，他依然保持完全清醒。"
  },
  {
    "word": "unconscious",
    "pos": "adj.",
    "cn_def": "失去知覺的；昏迷的",
    "en_def": "not awake and aware of and responding to one's environment",
    "sentence": "The boxer delivered a powerful punch that knocked his opponent completely {{BLANK}} onto the canvas.",
    "cn": "拳擊手打出了一記重拳，將對手徹底擊昏迷失去知覺在擂台上。"
  },
  {
    "word": "consciousness",
    "pos": "n.",
    "cn_def": "知覺；意識（不可數）",
    "en_def": "the state of being awake and aware of one's surroundings",
    "sentence": "The feverish patient began to lose {{BLANK}} and had to be rushed into the emergency room.",
    "cn": "發高燒的病人開始失去意識知覺，必須緊急送往急診室。"
  },
  {
    "word": "cough",
    "pos": "n.",
    "cn_def": "咳嗽（名詞）",
    "en_def": "an act or sound of expelling air from the lungs abruptly",
    "sentence": "Drinking warm honey water can help soothe a painful throat and relieve a dry {{BLANK}}.",
    "cn": "喝溫蜂蜜水有助於舒緩喉嚨疼痛並緩解乾咳。"
  },
  {
    "word": "cough",
    "pos": "v.",
    "cn_def": "咳嗽（動詞）",
    "en_def": "to expel air from the lungs with a sudden sharp sound",
    "sentence": "Remember to cover your mouth with your elbow whenever you {{BLANK}} in crowded public spaces.",
    "cn": "在擁擠的公共場所咳嗽時，記得用手肘掩住嘴巴。"
  },
  {
    "word": "crown",
    "pos": "n.",
    "cn_def": "皇冠；王冠",
    "en_def": "a circular ornamental headdress worn by a monarch as a symbol of power",
    "sentence": "Sparkling diamonds, rubies, and sapphires were set into the royal queen's golden {{BLANK}}.",
    "cn": "閃閃發光的鑽石、紅寶石和藍寶石鑲嵌在皇家女王的黃金皇冠上。"
  },
  {
    "word": "crowned",
    "pos": "v.",
    "cn_def": "為…加冕；立…為王（動詞）",
    "en_def": "to place a crown on the head of someone to make them monarch",
    "sentence": "The young prince was officially {{BLANK}} king before thousands of cheering citizens at the cathedral.",
    "cn": "年輕的王子在大教堂數千名歡呼的市民面前正式被加冕為國王。"
  },
  {
    "word": "dragonfly",
    "pos": "n.",
    "cn_def": "蜻蜓（可數）",
    "en_def": "a fast-flying insect with two pairs of large transparent wings",
    "sentence": "A bright blue {{BLANK}} hovered gracefully above the quiet pond before landing on a water lily.",
    "cn": "一隻明亮的藍色蜻蜓在安靜的池塘上方優雅盤旋，隨後停在一朵睡蓮上。"
  }
];

const MCQS = [
  {
    "q": "The farmer warned the curious children not to enter the field because the huge ______ was aggressive.",
    "options": [
      "dragonfly",
      "bulb",
      "career",
      "bull"
    ],
    "answer": 3,
    "cn": "農夫警告好奇的孩子們不要進入田地，因為那隻巨大的公牛極具攻擊性。",
    "vocabIndex": 2
  },
  {
    "q": "Dr. Watson spent his entire ______ working as a surgeon in international children's hospitals.",
    "options": [
      "career",
      "bull",
      "bulb",
      "crown"
    ],
    "answer": 0,
    "cn": "華生醫生將他的整個職業生涯奉獻在國際兒童醫院擔任外科醫師。",
    "vocabIndex": 3
  },
  {
    "q": "The desk lamp stopped working because the light ______ burned out and needs replacement.",
    "options": [
      "dragonfly",
      "bull",
      "bulb",
      "career"
    ],
    "answer": 2,
    "cn": "檯燈停止發光了，因為裡面的電燈泡燒壞了且需要更換。",
    "vocabIndex": 1
  },
  {
    "q": "A beautiful green ______ hovered over the surface of the pond on the sunny afternoon.",
    "options": [
      "career",
      "dragonfly",
      "crown",
      "bull"
    ],
    "answer": 1,
    "cn": "在陽光明媚的下午，一隻美麗的綠色蜻蜓在池塘表面上空盤旋。",
    "vocabIndex": 11
  },
  {
    "q": "The golden ______ of the ancient king was decorated with precious red jewels.",
    "options": [
      "bulb",
      "bull",
      "crown",
      "dragonfly"
    ],
    "answer": 2,
    "cn": "古代國王的黃金皇冠上裝飾著珍貴的紅寶石。",
    "vocabIndex": 9
  },
  {
    "q": "The doctor listened to the boy's chest because he had a bad ______ that lasted for a week.",
    "options": [
      "bulb",
      "bull",
      "crown",
      "cough"
    ],
    "answer": 3,
    "cn": "醫生聽診了男孩的胸口，因為他患有持續了一整週的嚴重咳嗽。",
    "vocabIndex": 7
  },
  {
    "q": "The injured runner slowly regained ______ after resting in the shade and drinking water.",
    "options": [
      "bulb",
      "consciousness",
      "dragonfly",
      "bull"
    ],
    "answer": 1,
    "cn": "受傷的跑者在陰涼處休息並喝水後，慢慢恢復了意識知覺。",
    "vocabIndex": 6
  },
  {
    "q": "The soup tasted so ______ that nobody at the dinner table wanted to take a second bite.",
    "options": [
      "awful",
      "conscious",
      "crowned",
      "coughing"
    ],
    "answer": 0,
    "cn": "這碗湯的味道非常糟糕差勁，餐桌上沒有人願意再喝第二口。",
    "vocabIndex": 0
  },
  {
    "q": "The patient was still ______ during the minor tooth surgery and could hear the dentist speak.",
    "options": [
      "awful",
      "crowned",
      "conscious",
      "unconscious"
    ],
    "answer": 2,
    "cn": "在微型牙科手術期間病人依然是清醒有知覺的，能聽見牙醫說話。",
    "vocabIndex": 4
  },
  {
    "q": "The boxer fell ______ to the floor after taking a hard hit to his head.",
    "options": [
      "unconscious",
      "conscious",
      "crowned",
      "awful"
    ],
    "answer": 0,
    "cn": "在頭部遭到重擊後，拳擊手失去知覺昏迷地倒在地板上。",
    "vocabIndex": 5
  },
  {
    "q": "Dust from the old blankets made the housekeeper ______ several times while cleaning.",
    "options": [
      "crown",
      "bulb",
      "bull",
      "cough"
    ],
    "answer": 3,
    "cn": "舊毛毯上的灰塵讓管家在打掃時咳嗽了好幾聲。",
    "vocabIndex": 7
  },
  {
    "q": "The bishop will ______ the prince as the new king in the grand church tomorrow.",
    "options": [
      "cough",
      "crown",
      "conscious",
      "bulb"
    ],
    "answer": 1,
    "cn": "主教明天將在雄偉的教堂裡為王子加冕為新任國王。",
    "vocabIndex": 9
  },
  {
    "q": "The food served at the festival was absolutely ______, so we threw it into the bin.",
    "options": [
      "conscious",
      "crowned",
      "awful",
      "coughing"
    ],
    "answer": 2,
    "cn": "園遊會上提供的食物簡直糟糕透頂，所以我們把它扔進了垃圾桶。",
    "vocabIndex": 0
  },
  {
    "q": "He is very ______ of his health, so he exercises every day and never eats junk food.",
    "options": [
      "awful",
      "crowned",
      "unconscious",
      "conscious"
    ],
    "answer": 3,
    "cn": "他非常注重／意識到自己的健康，因此他每天運動且從不吃垃圾食物。",
    "vocabIndex": 4
  },
  {
    "q": "After the bicycle accident, Tommy lay ______ on the grass until the ambulance arrived.",
    "options": [
      "awful",
      "unconscious",
      "conscious",
      "crowned"
    ],
    "answer": 1,
    "cn": "自行車事故後，湯米昏迷不醒地躺在草地上，直到救護車趕到。",
    "vocabIndex": 5
  },
  {
    "q": "When grandfather was ill with the flu, he would ______ day and night in bed.",
    "options": [
      "cough",
      "bulb",
      "crown",
      "career"
    ],
    "answer": 0,
    "cn": "當祖父患流行性感冒生病時，他整日整夜在床上咳嗽。",
    "vocabIndex": 7
  },
  {
    "q": "The team celebrated their final victory, which ______ an undefeated season.",
    "options": [
      "coughed",
      "crowned",
      "bulbed",
      "conscious"
    ],
    "answer": 1,
    "cn": "該隊慶祝了他們的最後勝利，這使他們的全勝賽季圓滿登頂／獲得加冕。",
    "vocabIndex": 9
  },
  {
    "q": "In spring, you can plant tulip ______ in the garden to grow beautiful flowers.",
    "options": [
      "bulls",
      "crowns",
      "careers",
      "bulbs"
    ],
    "answer": 3,
    "cn": "春天時，你可以在花園裡種植鬱金香球根／鱗莖以長出美麗花朵。",
    "vocabIndex": 1
  },
  {
    "q": "A strong male ______ stood in the center of the muddy pen, chewing on dry grass.",
    "options": [
      "bull",
      "bulb",
      "career",
      "crown"
    ],
    "answer": 0,
    "cn": "一隻強壯的雄性公牛站在泥濘的圍欄中央，咀嚼著乾草。",
    "vocabIndex": 2
  },
  {
    "q": "Teaching children how to read was the most satisfying part of her thirty-year ______.",
    "options": [
      "bulb",
      "bull",
      "career",
      "dragonfly"
    ],
    "answer": 2,
    "cn": "教導孩童如何閱讀是她三十年教學生涯中最令人滿足的部分。",
    "vocabIndex": 3
  },
  {
    "q": "During the science test, ______ suddenly in David's head, and he solved the question.",
    "options": [
      "a crowning achievement",
      "a bull in a china shop",
      "a dragonfly hovered",
      "a light bulb went on"
    ],
    "answer": 3,
    "cn": "在自然科學測驗期間，大衛腦中突然靈光一閃開竅，解開了那道題目。",
    "vocabIndex": 1
  },
  {
    "q": "Whenever Kevin enters a quiet room, he knocks things over and behaves ______.",
    "options": [
      "with a light bulb",
      "like a bull in a china shop",
      "like a golden crown",
      "with an awful cough"
    ],
    "answer": 1,
    "cn": "每當凱文走進安靜的房間，他總是撞倒物品且舉止像闖進瓷器店的公牛一樣笨拙闖禍。",
    "vocabIndex": 2
  },
  {
    "q": "Winning first prize in the national piano contest was the ______ of her young musical life.",
    "options": [
      "crowning achievement",
      "awful cough",
      "light bulb",
      "bull in a china shop"
    ],
    "answer": 0,
    "cn": "在全國鋼琴大賽中榮獲第一名，是她年輕音樂生涯中最光輝的頂峰成就。",
    "vocabIndex": 9
  },
  {
    "q": "Taking a spoonful of sweet ______ can ease your throat before going to sleep at night.",
    "options": [
      "crowning achievement",
      "light bulb",
      "cough medicine",
      "dragonfly wing"
    ],
    "answer": 2,
    "cn": "在晚上就寢前喝一匙甜甜的止咳藥水可以舒緩你的喉嚨。",
    "vocabIndex": 7
  },
  {
    "q": "The small child was afraid of the dark, so mom left a soft ______ on in his bedroom.",
    "options": [
      "career path",
      "night light bulb",
      "bull in a china shop",
      "dry cough"
    ],
    "answer": 1,
    "cn": "小孩子害怕黑暗，所以媽媽在他臥室裡留著一顆柔和的小夜燈泡亮著。",
    "vocabIndex": 1
  }
];

const LOOKUP = {
  "awful": {
    "pos": "adj.",
    "en_def": "extremely bad, unpleasant, or shocking",
    "cn_def": "極糟糕的；可怕的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "extremely bad, unpleasant, or shocking",
        "cn_def": "極糟糕的；可怕的"
      }
    ]
  },
  "bulb": {
    "pos": "n.",
    "en_def": "a glass electric light; an underground plant stem",
    "cn_def": "電燈泡；植物鱗莖（球根）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a glass electric light; an underground plant stem",
        "cn_def": "電燈泡；植物鱗莖（球根）"
      }
    ]
  },
  "bull": {
    "pos": "n.",
    "en_def": "an uncastrated adult male animal of cattle; a large strong beast",
    "cn_def": "公牛；雄性大型動物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an uncastrated adult male animal of cattle; a large strong beast",
        "cn_def": "公牛；雄性大型動物"
      }
    ]
  },
  "career": {
    "pos": "n.",
    "en_def": "an occupation or profession followed for a significant period of life",
    "cn_def": "職業生涯；事業",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an occupation or profession followed for a significant period of life",
        "cn_def": "職業生涯；事業"
      }
    ]
  },
  "conscious": {
    "pos": "adj.",
    "en_def": "aware of and responding to one's surroundings; awake",
    "cn_def": "清醒的；意識到的；有知覺的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "aware of and responding to one's surroundings; awake",
        "cn_def": "清醒的；意識到的；有知覺的"
      }
    ]
  },
  "unconscious": {
    "pos": "adj.",
    "en_def": "not awake and aware of and responding to one's environment",
    "cn_def": "失去知覺的；昏迷的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not awake and aware of and responding to one's environment",
        "cn_def": "失去知覺的；昏迷的"
      }
    ]
  },
  "consciousness": {
    "pos": "n.",
    "en_def": "the state of being awake and aware of one's surroundings",
    "cn_def": "知覺；意識（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being awake and aware of one's surroundings",
        "cn_def": "知覺；意識（不可數）"
      }
    ]
  },
  "cough": {
    "pos": "n.",
    "en_def": "an act or sound of expelling air from the lungs abruptly",
    "cn_def": "咳嗽（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an act or sound of expelling air from the lungs abruptly",
        "cn_def": "咳嗽（名詞）"
      },
      {
        "pos": "v.",
        "en_def": "to expel air from the lungs with a sudden sharp sound",
        "cn_def": "咳嗽（動詞）"
      }
    ]
  },
  "crown": {
    "pos": "n.",
    "en_def": "a circular ornamental headdress worn by a monarch as a symbol of power",
    "cn_def": "皇冠；王冠",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a circular ornamental headdress worn by a monarch as a symbol of power",
        "cn_def": "皇冠；王冠"
      },
      {
        "pos": "v.",
        "en_def": "to place a crown on the head of someone to make them monarch",
        "cn_def": "為…加冕；立…為王（動詞）"
      }
    ]
  },
  "crowned": {
    "pos": "v.",
    "en_def": "to place a crown on the head of someone to make them monarch",
    "cn_def": "為…加冕；立…為王（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to place a crown on the head of someone to make them monarch",
        "cn_def": "為…加冕；立…為王（動詞）"
      }
    ]
  },
  "dragonfly": {
    "pos": "n.",
    "en_def": "a fast-flying insect with two pairs of large transparent wings",
    "cn_def": "蜻蜓（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a fast-flying insect with two pairs of large transparent wings",
        "cn_def": "蜻蜓（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
