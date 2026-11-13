// Part 3 Quiz Data: envy – handkerchief
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 9-3 - envy – handkerchief",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "envy",
    "pos": "v.",
    "cn_def": "羨慕；嫉妒（動詞）",
    "en_def": "to feel a desire to have a quality, possession, or other desirable attribute belonging to someone else",
    "sentence": "I really {{BLANK}} my sister for her natural talent to speak five foreign languages fluently.",
    "cn": "我真的很羨慕我姐姐擁有能流利說五種外語的天賦。"
  },
  {
    "word": "envy",
    "pos": "n.",
    "cn_def": "羨慕；嫉妒（不可數/可數）",
    "en_def": "a feeling of discontented or resentful longing aroused by someone else's possessions",
    "sentence": "When Jason drove his shiny new sports car to school, his classmates were practically green with {{BLANK}}.",
    "cn": "當傑森開著他閃亮的新跑車到學校時，他的同學們簡直嫉妒得臉都綠了。"
  },
  {
    "word": "envious",
    "pos": "adj.",
    "cn_def": "羨慕的；嫉妒的",
    "en_def": "feeling or showing envy",
    "sentence": "Kelly was genuinely {{BLANK}} of her best friend who had won a full scholarship to Harvard University.",
    "cn": "凱莉由衷地羨慕她最好的朋友，因為她獲得了哈佛大學的全額獎學金。"
  },
  {
    "word": "jealous",
    "pos": "adj.",
    "cn_def": "嫉妒的；吃醋的；用心守護的",
    "en_def": "feeling or showing envy of someone or their achievements and advantages; fiercely protective",
    "sentence": "The little boy became quite {{BLANK}} of his baby sister whenever his mother held her in her arms.",
    "cn": "每當母親把剛出生的小妹妹抱在懷裡時，那個小男孩就變得相當吃醋／嫉妒。"
  },
  {
    "word": "jealousy",
    "pos": "n.",
    "cn_def": "嫉妒；吃醋；戒備（不可數/可數）",
    "en_def": "the state or feeling of being jealous",
    "sentence": "In Shakespeare's famous tragedy Othello, the noble hero was tragically destroyed by blind {{BLANK}} and mistrust.",
    "cn": "在莎士比亞著名的悲劇《奧賽羅》中，高貴的英雄悲劇性地被盲目的嫉妒和不信任所毀滅。"
  },
  {
    "word": "fist",
    "pos": "n.",
    "cn_def": "拳頭；拳（可數）",
    "en_def": "a person's hand when the fingers are bent in towards the palm and held tightly",
    "sentence": "The angry customer clenched his {{BLANK}} tightly as he demanded a full refund from the store manager.",
    "cn": "憤怒的顧客在要求店經理全額退款時緊緊握住了拳頭。"
  },
  {
    "word": "hand over fist",
    "pos": "adv.phr.",
    "cn_def": "迅速大量地（賺錢或賠錢）",
    "en_def": "very rapidly, especially when making or losing money",
    "sentence": "After the innovative mobile app went viral globally, the startup company began making money {{BLANK}}.",
    "cn": "在這款創新的行動應用程式在全球爆紅後，這家新創公司開始迅速大量地賺錢／財源滾滾。"
  },
  {
    "word": "flavour",
    "pos": "n.",
    "cn_def": "風味；味道；特色（可數/不可數）",
    "en_def": "the distinctive taste of a food or drink (UK spelling; US: flavor)",
    "sentence": "The chef added a pinch of fresh herbs and crushed black pepper to enhance the natural {{BLANK}} of the soup.",
    "cn": "主廚加入少許新鮮香草和碎黑胡椒，以增添湯品的天然風味。"
  },
  {
    "word": "flavor",
    "pos": "v.",
    "cn_def": "給…調味；為…增添風味（動詞）",
    "en_def": "to give substance, distinctive taste, or character to food or drink",
    "sentence": "My grandmother likes to {{BLANK}} her famous winter beef stew with cinnamon, star anise, and sweet carrots.",
    "cn": "我祖母喜歡用肉桂、八角和甜胡蘿蔔為她著名的冬季燉牛肉調味。"
  },
  {
    "word": "flavor of the month",
    "pos": "idiom",
    "cn_def": "當紅一時的人事物；曇花一現的風尚",
    "en_def": "someone or something that is temporarily very popular or fashionable",
    "sentence": "Pop boy bands come and go very quickly in the music business, often being the {{BLANK}} for just a year.",
    "cn": "流行男子樂團在音樂界來去匆匆，往往只是紅極一時的當紅炸子雞／曇花一現的人物短短一年。"
  },
  {
    "word": "fountain",
    "pos": "n.",
    "cn_def": "噴水池；噴泉；源泉（可數）",
    "en_def": "an ornamental structure in a pool from which one or more jets of water are pumped",
    "sentence": "After finishing thirty minutes of intense jogging in the sun, Kevin stopped by the park drinking {{BLANK}} for cold water.",
    "cn": "在陽光下完成了三十分鐘的劇烈慢跑後，凱文在公園的飲水機旁停下來喝涼水。"
  },
  {
    "word": "glare",
    "pos": "v.",
    "cn_def": "怒目而視；發出強烈刺眼的光（動詞）",
    "en_def": "to stare in an angry or fierce way; to shine with a strong, dazzling light",
    "sentence": "The strict librarian looked over her glasses to {{BLANK}} angrily at the noisy students talking on their cellphones.",
    "cn": "嚴格的圖書館管理員透過眼鏡怒目而視那些在手機上講話的吵鬧學生。"
  },
  {
    "word": "glare",
    "pos": "n.",
    "cn_def": "怒視；刺眼的強光（可數/不可數）",
    "en_def": "a fierce or angry stare; a strong and dazzling light",
    "sentence": "When Tommy accidentally stepped on his sister's clean white shoes, she gave him a fierce {{BLANK}} of pure annoyance.",
    "cn": "當湯米不小心踩到他姐姐乾淨的白鞋時，她給了他一個完全惱怒的狠狠怒視。"
  },
  {
    "word": "gown",
    "pos": "n.",
    "cn_def": "禮服；長袍；手術袍（可數）",
    "en_def": "a long, elegant dress worn on formal occasions; a protective outer garment",
    "sentence": "The Hollywood actress looked breathtaking on the red carpet wearing an elegant silk evening {{BLANK}} decorated with crystals.",
    "cn": "那位好萊塢女演員在紅地毯上穿著綴有水晶的優雅絲質晚禮服，顯得美艷動人。"
  },
  {
    "word": "handkerchief",
    "pos": "n.",
    "cn_def": "手帕；手絹（可數，複數 handkerchiefs 或 handkerchieves）",
    "en_def": "a square of cotton or other fabric carried in the pocket for wiping one's nose or eyes",
    "sentence": "During the sad ending of the touching romantic movie, Susan pulled a soft {{BLANK}} from her purse to wipe her tears.",
    "cn": "在那部感人浪漫電影的悲傷結局中，蘇珊從皮包裡拿出一條柔軟的手帕擦拭眼淚。"
  }
];

const MCQS = [
  {
    "q": "Jason made a tight ______ with his fingers and knocked loudly on the wooden door.",
    "options": [
      "fist",
      "fountain",
      "gown",
      "handkerchief"
    ],
    "answer": 0,
    "cn": "傑森用手指握成緊緊的拳頭，大聲敲打木門。",
    "vocabIndex": 5
  },
  {
    "q": "The strawberry ice cream has a sweet, fruity ______ that children love very much.",
    "options": [
      "fountain",
      "handkerchief",
      "fist",
      "flavour"
    ],
    "answer": 3,
    "cn": "草莓冰淇淋具有孩子們非常喜愛的甜美果味風味／滋味。",
    "vocabIndex": 7
  },
  {
    "q": "People throw shiny coins into the park ______ to make a wish for good luck.",
    "options": [
      "fist",
      "fountain",
      "gown",
      "handkerchief"
    ],
    "answer": 1,
    "cn": "人們向公園的噴水池裡投擲閃亮的硬幣，以祈求好運。",
    "vocabIndex": 10
  },
  {
    "q": "The bride looked so pretty wearing her long white wedding ______ at the church.",
    "options": [
      "handkerchief",
      "fist",
      "gown",
      "fountain"
    ],
    "answer": 2,
    "cn": "新娘在教堂裡穿著一襲長長的白色婚禮禮服／婚紗，看起來漂亮極了。",
    "vocabIndex": 13
  },
  {
    "q": "Tom pulled a clean paper ______ from his pocket to wipe his wet nose.",
    "options": [
      "gown",
      "fist",
      "fountain",
      "handkerchief"
    ],
    "answer": 3,
    "cn": "湯米從口袋裡拿出一條乾淨的手帕來擦拭他濕濕的鼻子。",
    "vocabIndex": 14
  },
  {
    "q": "The angry driver gave me a fierce ______ through the car window.",
    "options": [
      "glare",
      "gown",
      "fountain",
      "handkerchief"
    ],
    "answer": 0,
    "cn": "憤怒的司機透過車窗狠狠怒視了我一眼。",
    "vocabIndex": 11
  },
  {
    "q": "Their big new house and luxury swimming pool became the ______ of the whole town.",
    "options": [
      "handkerchief",
      "gown",
      "envy",
      "fist"
    ],
    "answer": 2,
    "cn": "他們寬敞的新房子和豪華泳池成為了全鎮人羨慕的對象。",
    "vocabIndex": 0
  },
  {
    "q": "When Mark won the big bike prize, Tommy felt a little burning ______ in his heart.",
    "options": [
      "fountain",
      "jealousy",
      "fist",
      "gown"
    ],
    "answer": 1,
    "cn": "當馬克贏得自行車大獎時，湯米心裡感到一陣陣嫉妒。",
    "vocabIndex": 4
  },
  {
    "q": "The dark sunglasses help reduce the bright ______ of the morning sunshine.",
    "options": [
      "gown",
      "handkerchief",
      "glare",
      "fist"
    ],
    "answer": 2,
    "cn": "深色太陽眼鏡有助於減少早晨陽光刺眼的強光。",
    "vocabIndex": 11
  },
  {
    "q": "Water from the school drinking ______ was very cool and fresh after soccer practice.",
    "options": [
      "gown",
      "fountain",
      "handkerchief",
      "fist"
    ],
    "answer": 1,
    "cn": "足球訓練後，學校飲水機／噴泉流出來的水非常清涼爽口。",
    "vocabIndex": 10
  },
  {
    "q": "Many students ______ George because he gets full marks on every spelling test.",
    "options": [
      "glare",
      "flavor",
      "clench",
      "envy"
    ],
    "answer": 3,
    "cn": "許多學生羨慕喬治，因為他每次拼字測驗都得滿分。",
    "vocabIndex": 0
  },
  {
    "q": "Mom likes to ______ the beef soup with garlic and fresh green onions.",
    "options": [
      "flavor",
      "glare",
      "clench",
      "envy"
    ],
    "answer": 0,
    "cn": "媽媽喜歡用大蒜和鮮青蔥來為牛肉湯調味。",
    "vocabIndex": 8
  },
  {
    "q": "The librarian ______ at the noisy boys who were laughing loudly in the quiet room.",
    "options": [
      "envied",
      "flavored",
      "glared",
      "wiped"
    ],
    "answer": 2,
    "cn": "圖書館員怒視那些在安靜房間裡大聲笑鬧的吵鬧男孩。",
    "vocabIndex": 11
  },
  {
    "q": "I really ______ Jack because he has a kind family and travels around the world.",
    "options": [
      "glare",
      "envy",
      "flavor",
      "clench"
    ],
    "answer": 1,
    "cn": "我真的很羨慕傑克，因為他有一個溫馨的家庭並且環遊世界。",
    "vocabIndex": 0
  },
  {
    "q": "The hot afternoon sun ______ down on the dry sand dunes in the desert.",
    "options": [
      "glared",
      "flavored",
      "envied",
      "clenched"
    ],
    "answer": 0,
    "cn": "午後熾熱的太陽在沙漠乾燥的沙丘上刺眼直射。",
    "vocabIndex": 11
  },
  {
    "q": "Peter was very ______ of his brother who received a new smartphone for Christmas.",
    "options": [
      "glaring",
      "clenched",
      "flavored",
      "envious"
    ],
    "answer": 3,
    "cn": "彼得非常羨慕／嫉妒他的哥哥，因為哥哥在聖誕節收到了一部新智慧型手機。",
    "vocabIndex": 2
  },
  {
    "q": "The little girl felt ______ when her mother carried her younger baby sister all day.",
    "options": [
      "jealous",
      "flavored",
      "envious",
      "glaring"
    ],
    "answer": 0,
    "cn": "當母親整天抱著剛出生的小妹妹時，那個小女孩感到很吃醋／嫉妒。",
    "vocabIndex": 3
  },
  {
    "q": "His classmates cast ______ eyes on his bright new running shoes during gym class.",
    "options": [
      "jealous",
      "envious",
      "glaring",
      "flavored"
    ],
    "answer": 1,
    "cn": "在體育課上，他的同學們向他那雙亮麗的新跑鞋投去了羨慕的目光。",
    "vocabIndex": 2
  },
  {
    "q": "Why are you so ______ of your best friend's good luck in the school game?",
    "options": [
      "glaring",
      "flavored",
      "jealous",
      "envious"
    ],
    "answer": 2,
    "cn": "你為什麼對你最好的朋友在學校比賽中的好運氣如此嫉妒吃醋呢？",
    "vocabIndex": 3
  },
  {
    "q": "The chocolate cookies are naturally ______ with real honey and brown sugar.",
    "options": [
      "glaring",
      "jealous",
      "envious",
      "flavored"
    ],
    "answer": 3,
    "cn": "這款巧克力餅乾是由真正的蜂蜜和紅糖天然調味的。",
    "vocabIndex": 8
  },
  {
    "q": "The young actress wore a stylish black silk ______ to the award party.",
    "options": [
      "gown",
      "handkerchief",
      "fountain",
      "fist"
    ],
    "answer": 0,
    "cn": "那位年輕女演員穿著一件時髦的黑色絲綢晚禮服去參加頒獎派對。",
    "vocabIndex": 13
  },
  {
    "q": "When Sam saw Ken's prize bike, he was totally green with ______.",
    "options": [
      "handkerchief",
      "fountain",
      "gown",
      "envy"
    ],
    "answer": 3,
    "cn": "當山姆看到肯恩獲得的獎品自行車時，他完全嫉妒得臉都綠了。",
    "vocabIndex": 0
  },
  {
    "q": "The popular new toy is selling very fast, so the toy store is making money ______.",
    "options": [
      "right up your alley",
      "biting the bullet",
      "hand over fist",
      "green with envy"
    ],
    "answer": 2,
    "cn": "這款受歡迎的新玩具銷量極快，所以玩具店正迅速大量地賺錢／財源滾滾。",
    "vocabIndex": 6
  },
  {
    "q": "That singer was super popular last year, but now he is no longer the ______.",
    "options": [
      "hand over fist",
      "flavor of the month",
      "green with envy",
      "bullet train"
    ],
    "answer": 1,
    "cn": "那位歌手去年超級受歡迎，但現在他不再是當紅一時的人物／當令風尚了。",
    "vocabIndex": 9
  },
  {
    "q": "The ruthless military general ruled the captured city with an ______.",
    "options": [
      "iron fist",
      "flavor of the month",
      "hand over fist",
      "open handkerchief"
    ],
    "answer": 0,
    "cn": "那位冷酷無情的軍事將軍以鐵腕手段統治了這座被佔領的城市。",
    "vocabIndex": 5
  }
];

const LOOKUP = {
  "envy": {
    "pos": "v.",
    "en_def": "to feel a desire to have a quality, possession, or other desirable attribute belonging to someone else",
    "cn_def": "羨慕；嫉妒（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to feel a desire to have a quality, possession, or other desirable attribute belonging to someone else",
        "cn_def": "羨慕；嫉妒（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a feeling of discontented or resentful longing aroused by someone else's possessions",
        "cn_def": "羨慕；嫉妒（不可數/可數）"
      }
    ]
  },
  "envious": {
    "pos": "adj.",
    "en_def": "feeling or showing envy",
    "cn_def": "羨慕的；嫉妒的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling or showing envy",
        "cn_def": "羨慕的；嫉妒的"
      }
    ]
  },
  "jealous": {
    "pos": "adj.",
    "en_def": "feeling or showing envy of someone or their achievements and advantages; fiercely protective",
    "cn_def": "嫉妒的；吃醋的；用心守護的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling or showing envy of someone or their achievements and advantages; fiercely protective",
        "cn_def": "嫉妒的；吃醋的；用心守護的"
      }
    ]
  },
  "jealousy": {
    "pos": "n.",
    "en_def": "the state or feeling of being jealous",
    "cn_def": "嫉妒；吃醋；戒備（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state or feeling of being jealous",
        "cn_def": "嫉妒；吃醋；戒備（不可數/可數）"
      }
    ]
  },
  "fist": {
    "pos": "n.",
    "en_def": "a person's hand when the fingers are bent in towards the palm and held tightly",
    "cn_def": "拳頭；拳（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person's hand when the fingers are bent in towards the palm and held tightly",
        "cn_def": "拳頭；拳（可數）"
      }
    ]
  },
  "hand over fist": {
    "pos": "adv.phr.",
    "en_def": "very rapidly, especially when making or losing money",
    "cn_def": "迅速大量地（賺錢或賠錢）",
    "combined": [
      {
        "pos": "adv.phr.",
        "en_def": "very rapidly, especially when making or losing money",
        "cn_def": "迅速大量地（賺錢或賠錢）"
      }
    ]
  },
  "flavour": {
    "pos": "n.",
    "en_def": "the distinctive taste of a food or drink (UK spelling; US: flavor)",
    "cn_def": "風味；味道；特色（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the distinctive taste of a food or drink (UK spelling; US: flavor)",
        "cn_def": "風味；味道；特色（可數/不可數）"
      }
    ]
  },
  "flavor": {
    "pos": "v.",
    "en_def": "to give substance, distinctive taste, or character to food or drink",
    "cn_def": "給…調味；為…增添風味（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give substance, distinctive taste, or character to food or drink",
        "cn_def": "給…調味；為…增添風味（動詞）"
      }
    ]
  },
  "flavor of the month": {
    "pos": "idiom",
    "en_def": "someone or something that is temporarily very popular or fashionable",
    "cn_def": "當紅一時的人事物；曇花一現的風尚",
    "combined": [
      {
        "pos": "idiom",
        "en_def": "someone or something that is temporarily very popular or fashionable",
        "cn_def": "當紅一時的人事物；曇花一現的風尚"
      }
    ]
  },
  "fountain": {
    "pos": "n.",
    "en_def": "an ornamental structure in a pool from which one or more jets of water are pumped",
    "cn_def": "噴水池；噴泉；源泉（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an ornamental structure in a pool from which one or more jets of water are pumped",
        "cn_def": "噴水池；噴泉；源泉（可數）"
      }
    ]
  },
  "glare": {
    "pos": "v.",
    "en_def": "to stare in an angry or fierce way; to shine with a strong, dazzling light",
    "cn_def": "怒目而視；發出強烈刺眼的光（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to stare in an angry or fierce way; to shine with a strong, dazzling light",
        "cn_def": "怒目而視；發出強烈刺眼的光（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a fierce or angry stare; a strong and dazzling light",
        "cn_def": "怒視；刺眼的強光（可數/不可數）"
      }
    ]
  },
  "gown": {
    "pos": "n.",
    "en_def": "a long, elegant dress worn on formal occasions; a protective outer garment",
    "cn_def": "禮服；長袍；手術袍（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a long, elegant dress worn on formal occasions; a protective outer garment",
        "cn_def": "禮服；長袍；手術袍（可數）"
      }
    ]
  },
  "handkerchief": {
    "pos": "n.",
    "en_def": "a square of cotton or other fabric carried in the pocket for wiping one's nose or eyes",
    "cn_def": "手帕；手絹（可數，複數 handkerchiefs 或 handkerchieves）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a square of cotton or other fabric carried in the pocket for wiping one's nose or eyes",
        "cn_def": "手帕；手絹（可數，複數 handkerchiefs 或 handkerchieves）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
