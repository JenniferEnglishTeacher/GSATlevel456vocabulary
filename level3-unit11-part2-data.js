// Part 2 Quiz Data: eager – holy
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 11-2 - eager – holy",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "eager",
    "pos": "adj.",
    "cn_def": "渴望的；熱切的；熱心的",
    "en_def": "wanting very much to do or have something; enthusiastic",
    "sentence": "Aaron was extremely {{BLANK}} to begin his new job at the technology firm as soon as possible.",
    "cn": "亞倫非常熱切渴望盡快在科技公司開始他的新工作。"
  },
  {
    "word": "envy",
    "pos": "v.",
    "cn_def": "羨慕；嫉妒（動詞）",
    "en_def": "to feel discontented at someone's luck, success, or possessions",
    "sentence": "I am completely content with my modest life and do not {{BLANK}} wealthy celebrities their mansions.",
    "cn": "我對自己簡樸的生活感到非常滿足，一點也不羨慕富有名人的豪宅。"
  },
  {
    "word": "envy",
    "pos": "n.",
    "cn_def": "羨慕；嫉妒；令人羨慕的人事物（不可數）",
    "en_def": "a feeling of discontented longing aroused by someone else's possessions",
    "sentence": "Julia's glossy black hair and glowing complexion were the {{BLANK}} of all the girls in her school.",
    "cn": "茱莉亞烏黑光亮的秀髮與紅潤的氣色是全校女孩羨慕的焦點。"
  },
  {
    "word": "envious",
    "pos": "adj.",
    "cn_def": "羨慕的；嫉妒的",
    "en_def": "feeling or showing envy; jealous of someone's advantages",
    "sentence": "Although Cindy felt happy for her best friend's promotion, she could not help feeling a little {{BLANK}}.",
    "cn": "雖然辛蒂為好友的晉升感到高興，但她忍不住感到有些羨慕。"
  },
  {
    "word": "expressive",
    "pos": "adj.",
    "cn_def": "富於表情的；意味深長的；善於表達的",
    "en_def": "effectively conveying thought, feeling, or meaning",
    "sentence": "Kelly has such an {{BLANK}} face that it conveys all her inner emotions vividly without saying a single word.",
    "cn": "凱莉擁有一張表情極為豐富的臉龐，無須一言一語便能生動傳達所有內心情感。"
  },
  {
    "word": "fancy",
    "pos": "adj.",
    "cn_def": "精緻奢華的；華麗的；高級的",
    "en_def": "elaborate in structure or decoration; expensive and sophisticated",
    "sentence": "Bill took Martha to a very {{BLANK}} French restaurant downtown and asked her to marry him.",
    "cn": "比爾帶瑪莎去市中心一家非常高級奢華的法國餐廳向她求婚。"
  },
  {
    "word": "fancy",
    "pos": "v.",
    "cn_def": "想要；愛慕；自詡為（動詞）",
    "en_def": "to feel a desire for; to want or like; to imagine",
    "sentence": "Do you {{BLANK}} having a warm cup of herbal tea with a slice of chocolate cake this afternoon?",
    "cn": "你今天下午想要來杯溫熱的草本茶配上一塊巧克力蛋糕嗎？"
  },
  {
    "word": "fancy",
    "pos": "v.phr.",
    "cn_def": "喜歡上；看中；對…產生好感",
    "en_def": "to develop a sudden liking or affection for someone or something",
    "sentence": "During her summer trip to Tokyo, Donna suddenly took a {{BLANK}} to Japanese noodles and ramen.",
    "cn": "在東京的夏季旅行中，唐娜突然喜歡上了日本麵條與拉麵。"
  },
  {
    "word": "gesture",
    "pos": "n.",
    "cn_def": "手勢；姿勢；表示；姿態（可數）",
    "en_def": "a movement of part of the body to express an idea or meaning; an action performed for effect",
    "sentence": "Dustin offered to help me wash the dirty dishes after dinner, which was a very thoughtful {{BLANK}}.",
    "cn": "達斯汀在晚餐後主動幫我清洗髒盤子，這是一個非常貼心的舉動／心意表示。"
  },
  {
    "word": "gestured",
    "pos": "v.",
    "cn_def": "做手勢；用手勢示意（動詞）",
    "en_def": "to make a movement of the hands or body to express meaning",
    "sentence": "Because the restaurant was noisy, Tina {{BLANK}} to the busy waiter that she was ready to pay her bill.",
    "cn": "因為餐廳很吵鬧，蒂娜用手勢向忙碌的服務生示意她準備要結帳了。"
  },
  {
    "word": "heap",
    "pos": "n.",
    "cn_def": "一堆；許多（可數）",
    "en_def": "an untidy collection of things piled up together",
    "sentence": "The gardener raked the backyard and left a large {{BLANK}} of dry leaves under the old oak tree.",
    "cn": "園丁耙掃了後院，在老橡樹下留下了大一堆乾樹葉。"
  },
  {
    "word": "heaped",
    "pos": "v.",
    "cn_def": "堆積；大量給予（讚美、責備）（動詞）",
    "en_def": "to put things into a large pile; to give a great deal of praise or blame",
    "sentence": "The proud dinner table was {{BLANK}} high with roasted turkey, fresh mashed potatoes, and sweet corn.",
    "cn": "豐盛的餐桌上堆滿了烤火雞、新鮮馬鈴薯泥與甜玉米。"
  },
  {
    "word": "heater",
    "pos": "n.",
    "cn_def": "暖氣機；暖爐；加熱器（可數）",
    "en_def": "a device for warming the air or water in a room or building",
    "sentence": "Because the winter night was turning chilly, my mother decided to turn on the electric {{BLANK}} in the living room.",
    "cn": "因為冬夜逐漸變冷，我母親決定打開客廳裡的電暖氣機。"
  },
  {
    "word": "holy",
    "pos": "adj.",
    "cn_def": "神聖的；聖潔的",
    "en_def": "dedicated or consecrated to God or a religious purpose; sacred",
    "sentence": "Thousands of faithful pilgrims travel across high mountains to visit this {{BLANK}} temple every single year.",
    "cn": "數千名虔誠的朝聖者每年跋山涉水前來參拜這座神聖的寺廟。"
  }
];

const MCQS = [
  {
    "q": "The kind boy helped the old woman carry her bags, which was a very sweet ______.",
    "options": [
      "gesture",
      "heater",
      "heap",
      "envy"
    ],
    "answer": 0,
    "cn": "那個善良的男孩幫老婦人提提袋，這是一個非常貼心的舉動／心意。",
    "vocabIndex": 8
  },
  {
    "q": "In the chilly winter, we turned on the electric ______ to keep the bedroom warm.",
    "options": [
      "heap",
      "gesture",
      "heater",
      "envy"
    ],
    "answer": 2,
    "cn": "在寒冷的冬天，我們打開電暖氣機使臥室保持溫暖。",
    "vocabIndex": 12
  },
  {
    "q": "There was a big ______ of dirty clothes on the floor that needed to be washed.",
    "options": [
      "heater",
      "heap",
      "envy",
      "gesture"
    ],
    "answer": 1,
    "cn": "地板上有大一堆需要清洗的髒衣服。",
    "vocabIndex": 10
  },
  {
    "q": "When Kevin won the golden trophy, his classmates looked at him with great ______.",
    "options": [
      "heater",
      "gesture",
      "heap",
      "envy"
    ],
    "answer": 3,
    "cn": "當肯恩贏得金獎盃時，他的同學們帶著極大的羨慕看著他。",
    "vocabIndex": 1
  },
  {
    "q": "The policeman made a clear hand ______ to tell the cars to stop at the crossing.",
    "options": [
      "gesture",
      "heap",
      "heater",
      "envy"
    ],
    "answer": 0,
    "cn": "警察做了一個明確的手部姿勢／手勢，示意車輛在路口停下。",
    "vocabIndex": 8
  },
  {
    "q": "The bathroom was freezing because someone forgot to turn on the water ______.",
    "options": [
      "gesture",
      "heap",
      "heater",
      "envy"
    ],
    "answer": 2,
    "cn": "浴室冰冷無比，因為有人忘記打開熱水加熱器／熱水器。",
    "vocabIndex": 12
  },
  {
    "q": "The children raked all the dry garden leaves into a giant ______ in the yard.",
    "options": [
      "gesture",
      "heap",
      "heater",
      "envy"
    ],
    "answer": 1,
    "cn": "孩子們將所有乾燥的花園落葉在院子裡耙成了巨大的一堆。",
    "vocabIndex": 10
  },
  {
    "q": "Her beautiful singing voice was the ______ of every music student in the school.",
    "options": [
      "heap",
      "heater",
      "gesture",
      "envy"
    ],
    "answer": 3,
    "cn": "她優美的歌聲是學校裡每位音樂學生羨慕的對象。",
    "vocabIndex": 1
  },
  {
    "q": "The little puppy was so ______ to eat dinner that it ran straight to its bowl.",
    "options": [
      "holy",
      "eager",
      "fancy",
      "athletic"
    ],
    "answer": 1,
    "cn": "那隻小狗太急切渴望吃晚餐了，以至於直奔向牠的飯碗。",
    "vocabIndex": 0
  },
  {
    "q": "Many religious pilgrims traveled across the mountains to visit the ______ city.",
    "options": [
      "eager",
      "expressive",
      "fancy",
      "holy"
    ],
    "answer": 3,
    "cn": "許多宗教朝聖者翻山越嶺前來參觀這座神聖的城市。",
    "vocabIndex": 13
  },
  {
    "q": "Dad wore a very ______ black suit with shiny buttons to the annual company party.",
    "options": [
      "eager",
      "holy",
      "fancy",
      "expressive"
    ],
    "answer": 2,
    "cn": "爸爸穿了一套帶有光亮鈕扣的非常華麗精緻的黑色西裝去參加公司年會。",
    "vocabIndex": 5
  },
  {
    "q": "The cartoon character has very ______ big eyes that show when he is surprised.",
    "options": [
      "expressive",
      "holy",
      "fancy",
      "eager"
    ],
    "answer": 0,
    "cn": "那個卡通人物有一雙非常生動傳神／富有表現力的大眼睛，能顯露他的驚訝。",
    "vocabIndex": 4
  },
  {
    "q": "All the players on the field were ______ to score a goal and win the game.",
    "options": [
      "expressive",
      "fancy",
      "holy",
      "eager"
    ],
    "answer": 3,
    "cn": "球場上的所有球員都熱切渴望進球並贏得比賽。",
    "vocabIndex": 0
  },
  {
    "q": "People removed their shoes before entering the quiet and ______ temple.",
    "options": [
      "holy",
      "eager",
      "fancy",
      "expressive"
    ],
    "answer": 0,
    "cn": "人們在進入這座安靜而神聖的寺廟之前脫下了鞋子。",
    "vocabIndex": 13
  },
  {
    "q": "We ate dinner at a ______ Italian restaurant where waiters wore white gloves.",
    "options": [
      "holy",
      "fancy",
      "eager",
      "expressive"
    ],
    "answer": 1,
    "cn": "我們在一間服務生戴著白手套的高級精緻義大利餐廳享用晚餐。",
    "vocabIndex": 5
  },
  {
    "q": "The dancer used ______ hand movements to tell a touching story without speaking.",
    "options": [
      "holy",
      "fancy",
      "expressive",
      "eager"
    ],
    "answer": 2,
    "cn": "舞者用富於表現力的手部動作，在不發一言的情況下講述了一個感人的故事。",
    "vocabIndex": 4
  },
  {
    "q": "Jack was very ______ of his brother's shiny new bicycle and wished he had one.",
    "options": [
      "envious",
      "holy",
      "athletic",
      "desirable"
    ],
    "answer": 0,
    "cn": "傑克非常羨慕他弟弟那輛閃亮的新自行車，多希望自己也有一輛。",
    "vocabIndex": 3
  },
  {
    "q": "Seeing her classmate get the highest score made Lucy feel slightly ______.",
    "options": [
      "holy",
      "desirable",
      "fancy",
      "envious"
    ],
    "answer": 3,
    "cn": "看到同班同學拿到最高分，讓露西感到有些羨慕嫉妒。",
    "vocabIndex": 3
  },
  {
    "q": "I am very happy with my life, so I do not ______ anyone their fortune.",
    "options": [
      "gesture",
      "heap",
      "envy",
      "fancy"
    ],
    "answer": 2,
    "cn": "我對自己的生活非常滿意，因此我一點也不羨慕任何人的財富。",
    "vocabIndex": 1
  },
  {
    "q": "Do you ______ going for a walk in the park while the sun is still shining?",
    "options": [
      "gesture",
      "fancy",
      "arrest",
      "heap"
    ],
    "answer": 1,
    "cn": "趁著陽光依然普照，你想要去公園散散步嗎？",
    "vocabIndex": 5
  },
  {
    "q": "The guide ______ toward the mountain peak to show the tourists where to hike.",
    "options": [
      "fancied",
      "heaped",
      "envied",
      "gestured"
    ],
    "answer": 3,
    "cn": "導遊朝山峰比了手勢，向遊客指出該去哪裡健行。",
    "vocabIndex": 8
  },
  {
    "q": "The generous host ______ plates with fresh fruit, cakes, and sandwiches for guests.",
    "options": [
      "gestured",
      "heaped",
      "envied",
      "fancied"
    ],
    "answer": 1,
    "cn": "慷慨的主人為客人們在盤子裡堆滿了新鮮水果、蛋糕和三明治。",
    "vocabIndex": 10
  },
  {
    "q": "When Ken saw Tom's expensive new computer, he was completely ______.",
    "options": [
      "all thumbs",
      "under arrest",
      "green with envy",
      "on thin ice"
    ],
    "answer": 2,
    "cn": "當肯恩看到湯姆昂貴的新電腦時，他嫉妒得眼紅／面色發青。",
    "vocabIndex": 1
  },
  {
    "q": "That cute puppy at the pet shop really ______ and I decided to bring it home.",
    "options": [
      "struck my fancy",
      "hit a brick wall",
      "rained in buckets",
      "made a dash"
    ],
    "answer": 0,
    "cn": "寵物店裡那隻可愛的小狗真的合了我的心意／深深吸引了我，我決定把它帶回家。",
    "vocabIndex": 5
  },
  {
    "q": "During her trip to Italy, Amanda suddenly ______ drinking espresso every morning.",
    "options": [
      "gave the boot",
      "hit the sack",
      "took a fancy to",
      "bled them dry"
    ],
    "answer": 2,
    "cn": "在義大利旅行期間，阿曼達突然喜歡上了每天早晨喝濃縮咖啡。",
    "vocabIndex": 5
  }
];

const LOOKUP = {
  "eager": {
    "pos": "adj.",
    "en_def": "wanting very much to do or have something; enthusiastic",
    "cn_def": "渴望的；熱切的；熱心的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "wanting very much to do or have something; enthusiastic",
        "cn_def": "渴望的；熱切的；熱心的"
      }
    ]
  },
  "envy": {
    "pos": "v.",
    "en_def": "to feel discontented at someone's luck, success, or possessions",
    "cn_def": "羨慕；嫉妒（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to feel discontented at someone's luck, success, or possessions",
        "cn_def": "羨慕；嫉妒（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a feeling of discontented longing aroused by someone else's possessions",
        "cn_def": "羨慕；嫉妒；令人羨慕的人事物（不可數）"
      }
    ]
  },
  "envious": {
    "pos": "adj.",
    "en_def": "feeling or showing envy; jealous of someone's advantages",
    "cn_def": "羨慕的；嫉妒的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling or showing envy; jealous of someone's advantages",
        "cn_def": "羨慕的；嫉妒的"
      }
    ]
  },
  "expressive": {
    "pos": "adj.",
    "en_def": "effectively conveying thought, feeling, or meaning",
    "cn_def": "富於表情的；意味深長的；善於表達的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "effectively conveying thought, feeling, or meaning",
        "cn_def": "富於表情的；意味深長的；善於表達的"
      }
    ]
  },
  "fancy": {
    "pos": "adj.",
    "en_def": "elaborate in structure or decoration; expensive and sophisticated",
    "cn_def": "精緻奢華的；華麗的；高級的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "elaborate in structure or decoration; expensive and sophisticated",
        "cn_def": "精緻奢華的；華麗的；高級的"
      },
      {
        "pos": "v.",
        "en_def": "to feel a desire for; to want or like; to imagine",
        "cn_def": "想要；愛慕；自詡為（動詞）"
      },
      {
        "pos": "v.phr.",
        "en_def": "to develop a sudden liking or affection for someone or something",
        "cn_def": "喜歡上；看中；對…產生好感"
      }
    ]
  },
  "take a fancy to": {
    "pos": "v.phr.",
    "en_def": "to develop a sudden liking or affection for someone or something",
    "cn_def": "喜歡上；看中；對…產生好感",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to develop a sudden liking or affection for someone or something",
        "cn_def": "喜歡上；看中；對…產生好感"
      }
    ]
  },
  "gesture": {
    "pos": "n.",
    "en_def": "a movement of part of the body to express an idea or meaning; an action performed for effect",
    "cn_def": "手勢；姿勢；表示；姿態（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a movement of part of the body to express an idea or meaning; an action performed for effect",
        "cn_def": "手勢；姿勢；表示；姿態（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to make a movement of the hands or body to express meaning",
        "cn_def": "做手勢；用手勢示意（動詞）"
      }
    ]
  },
  "gestured": {
    "pos": "v.",
    "en_def": "to make a movement of the hands or body to express meaning",
    "cn_def": "做手勢；用手勢示意（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make a movement of the hands or body to express meaning",
        "cn_def": "做手勢；用手勢示意（動詞）"
      }
    ]
  },
  "heap": {
    "pos": "n.",
    "en_def": "an untidy collection of things piled up together",
    "cn_def": "一堆；許多（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an untidy collection of things piled up together",
        "cn_def": "一堆；許多（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to put things into a large pile; to give a great deal of praise or blame",
        "cn_def": "堆積；大量給予（讚美、責備）（動詞）"
      }
    ]
  },
  "heaped": {
    "pos": "v.",
    "en_def": "to put things into a large pile; to give a great deal of praise or blame",
    "cn_def": "堆積；大量給予（讚美、責備）（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to put things into a large pile; to give a great deal of praise or blame",
        "cn_def": "堆積；大量給予（讚美、責備）（動詞）"
      }
    ]
  },
  "heater": {
    "pos": "n.",
    "en_def": "a device for warming the air or water in a room or building",
    "cn_def": "暖氣機；暖爐；加熱器（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a device for warming the air or water in a room or building",
        "cn_def": "暖氣機；暖爐；加熱器（可數）"
      }
    ]
  },
  "holy": {
    "pos": "adj.",
    "en_def": "dedicated or consecrated to God or a religious purpose; sacred",
    "cn_def": "神聖的；聖潔的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "dedicated or consecrated to God or a religious purpose; sacred",
        "cn_def": "神聖的；聖潔的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
