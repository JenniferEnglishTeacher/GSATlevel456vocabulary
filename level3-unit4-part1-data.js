// Part 1 Quiz Data: agriculture – box office
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 4-1 - agriculture – box office",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "agriculture",
    "pos": "n.",
    "cn_def": "農業；農藝（不可數）",
    "en_def": "the science, practice, or occupation of farming and cultivating soil",
    "sentence": "The fertile river valley has always been an ideal region for {{BLANK}} and food production.",
    "cn": "這座肥沃的河谷一直以來都是從事農業與糧食生產的理想地區。"
  },
  {
    "word": "agricultural",
    "pos": "adj.",
    "cn_def": "農業的；農產的",
    "en_def": "relating to farming, crops, or the cultivation of the land",
    "sentence": "The local government built irrigation canals to protect surrounding {{BLANK}} land from severe seasonal drought.",
    "cn": "當地政府修建灌溉運河，以保護周邊的農業用地免受嚴重的季節性乾旱侵害。"
  },
  {
    "word": "beam",
    "pos": "n.",
    "cn_def": "光線；光束；（房屋）橫梁",
    "en_def": "a ray or shaft of light; a long sturdy piece of timber or metal supporting a roof",
    "sentence": "The lighthouse projected a bright {{BLANK}} of light across the stormy waters to guide ships safely.",
    "cn": "燈塔在暴風雨的水面上投射出一道明亮的光線／光束，以引導船隻安全航行。"
  },
  {
    "word": "beam",
    "pos": "v.",
    "cn_def": "照射；發光；眉開眼笑；露出笑容",
    "en_def": "to shine brightly; to smile broadly with radiant joy",
    "sentence": "The proud parents could not help but {{BLANK}} with joy as their daughter received her graduation diploma.",
    "cn": "當看見女兒領取畢業證書時，引以為傲的父母禁不住眉開眼笑／笑逐顏開。"
  },
  {
    "word": "bore",
    "pos": "v.",
    "cn_def": "使厭煩；使感到無聊（動詞）",
    "en_def": "to make someone feel weary, impatient, or unexcited by tedious talk",
    "sentence": "Please stop talking about your daily office gossip because you will only {{BLANK}} everyone at the dinner table.",
    "cn": "請不要再談論你日常的辦公室八卦，因為你只會使餐桌上的所有人感到厭煩。"
  },
  {
    "word": "bore",
    "pos": "n.",
    "cn_def": "令人厭煩的人；討厭無趣的事物",
    "en_def": "a dull, uninteresting, or tiresome person or thing",
    "sentence": "Nobody likes to sit beside him during train rides because he is such a talkative and complaining {{BLANK}}.",
    "cn": "搭火車時沒有人喜歡坐在他旁邊，因為他真是個愛嘮叨抱怨的討厭鬼／悶蛋。"
  },
  {
    "word": "bored",
    "pos": "adj.",
    "cn_def": "感到無聊的；感到厭煩的",
    "en_def": "feeling weary, unexcited, and restless through lack of interest",
    "sentence": "After watching television programs for three straight hours, the young boy became thoroughly {{BLANK}} and went outdoors.",
    "cn": "連續看了三個小時的電視節目後，那個小男孩變得徹底感到無聊並走到了戶外。"
  },
  {
    "word": "boring",
    "pos": "adj.",
    "cn_def": "乏味的；無聊的；令人生厭的",
    "en_def": "not interesting; tedious and tiresome",
    "sentence": "Most of the audience members fell asleep during the third hour of the long and {{BLANK}} political speech.",
    "cn": "在長達三個小時且乏味無趣的政治演講中，大部分的聽眾都睡著了。"
  },
  {
    "word": "bunch",
    "pos": "n.",
    "cn_def": "一束；一串；一群（人）；大量",
    "en_def": "a number of things grouped together; a group of people; a large amount",
    "sentence": "David bought a sweet {{BLANK}} of purple grapes and washed them thoroughly for his little sister.",
    "cn": "大衛買了一串香甜的紫葡萄，並為他妹妹徹底清洗乾淨。"
  },
  {
    "word": "bundle",
    "pos": "n.",
    "cn_def": "一捆；一包；大堆",
    "en_def": "a collection of things tied or wrapped together in a package",
    "sentence": "The diligent volunteer carried a heavy {{BLANK}} of recycled newspapers out to the neighborhood collection truck.",
    "cn": "那位勤奮的志工將一捆沉重的回收報紙搬運到社區回收車上。"
  },
  {
    "word": "bundle",
    "pos": "v.",
    "cn_def": "捆紮；包裝（動詞）",
    "en_def": "to tie, wrap, or package things together into a bundle",
    "sentence": "The workers had to {{BLANK}} all the loose electrical cables together to prevent office tripping hazards.",
    "cn": "工人們必須將所有散落的電線捆紮在一起，以防止辦公室絆倒危險。"
  },
  {
    "word": "bundle up",
    "pos": "v.phr.",
    "cn_def": "穿得暖和；穿厚厚的衣服",
    "en_def": "to dress warmly in many layers of clothing against the cold",
    "sentence": "Before the children ran outside into the freezing blizzard, their loving mother told them to {{BLANK}}.",
    "cn": "在孩子們跑到室外冰凍的暴風雪之前，慈愛的母親囑咐他們要穿得暖和。"
  },
  {
    "word": "bushes",
    "pos": "n.",
    "cn_def": "灌木；灌木叢",
    "en_def": "a woody plant smaller than a tree, with multiple stems growing from the base",
    "sentence": "The gardener used a sharp pair of hedge shears to trim the tall green {{BLANK}} along the driveway.",
    "cn": "園丁使用一把鋒利的綠籬剪修剪車道旁高聳的綠色灌木叢。"
  },
  {
    "word": "beat around the bush",
    "pos": "v.phr.",
    "cn_def": "說話拐彎抹角；旁敲側擊",
    "en_def": "to discuss a matter without coming directly to the main point",
    "sentence": "Please tell me the honest truth about your test results and do not {{BLANK}} anymore.",
    "cn": "請如實告訴我你的考試成績，不要再拐彎抹角了。"
  },
  {
    "word": "cigarette",
    "pos": "n.",
    "cn_def": "香菸；紙菸",
    "en_def": "a small cylinder of finely cut tobacco rolled in paper for smoking",
    "sentence": "Public health laws strictly prohibit people from smoking a {{BLANK}} inside hospitals, train stations, and restaurants.",
    "cn": "公共衛生法嚴格禁止人們在醫院、火車站與餐廳內吸香菸。"
  },
  {
    "word": "tobacco",
    "pos": "n.",
    "cn_def": "菸草；菸草製品（不可數）",
    "en_def": "the prepared dried leaves of a plant used for smoking or chewing",
    "sentence": "The farmer dedicated three large sunny fields to cultivating golden Virginia {{BLANK}} for export.",
    "cn": "那位農民劃出三塊向陽大農田種植金色維吉尼亞菸草以供出口。"
  },
  {
    "word": "cigar",
    "pos": "n.",
    "cn_def": "雪茄",
    "en_def": "a roll of dried tobacco leaves wrapped in another leaf for smoking",
    "sentence": "After finishing the luxurious business dinner, the wealthy investor lit an expensive imported Cuban {{BLANK}}.",
    "cn": "享用完奢華的商務晚宴後，那位富有的投資人點燃了一支昂貴的進口古巴雪茄。"
  },
  {
    "word": "cinema",
    "pos": "n.",
    "cn_def": "電影院；電影藝術；電影業",
    "en_def": "a movie theater, or the production of movies as an art form or industry",
    "sentence": "On rainy Saturday afternoons, Jason and his friends love to go to the local {{BLANK}} to watch the latest films.",
    "cn": "在下雨的星期六下午，傑森和他的朋友們喜歡去當地的電影院觀看最新電影。"
  },
  {
    "word": "box office",
    "pos": "n.phr.",
    "cn_def": "售票處；（電影等）票房",
    "en_def": "the place at a theater where tickets are bought; the commercial success of a movie",
    "sentence": "You can pick up your reserved cinema tickets directly at the {{BLANK}} two hours before the screening starts.",
    "cn": "你可以在放映開始前兩小時直接在售票處領取你預約的電影票。"
  }
];

const MCQS = [
  {
    "q": "The strong wooden ______ above our heads held up the roof of the old barn.",
    "options": [
      "bush",
      "beam",
      "cinema",
      "bunch"
    ],
    "answer": 1,
    "cn": "在我們頭頂上堅固的木梁支撐著這座古老穀倉的屋頂。",
    "vocabIndex": 2
  },
  {
    "q": "My father gave my mother a fragrant ______ of red roses for their wedding anniversary.",
    "options": [
      "bush",
      "cigar",
      "cinema",
      "bunch"
    ],
    "answer": 3,
    "cn": "我父親在結婚紀念日送給我母親一束芳香的紅玫瑰。",
    "vocabIndex": 8
  },
  {
    "q": "The mail carrier delivered a heavy ______ of old magazines tied with brown string.",
    "options": [
      "bundle",
      "cinema",
      "cigar",
      "beam"
    ],
    "answer": 0,
    "cn": "郵差送來了一捆用棕色繩子綁著的沉重舊雜誌。",
    "vocabIndex": 9
  },
  {
    "q": "A green ______ with sweet-smelling yellow flowers grew beside the front porch.",
    "options": [
      "beam",
      "bunch",
      "bush",
      "cinema"
    ],
    "answer": 2,
    "cn": "前門廊旁邊長著一叢開著芳香黃花的綠色灌木。",
    "vocabIndex": 12
  },
  {
    "q": "Smoking a ______ is harmful to your heart and makes your clothes smell bad.",
    "options": [
      "cinema",
      "beam",
      "bundle",
      "cigarette"
    ],
    "answer": 3,
    "cn": "抽香菸有害心臟，而且會讓你的衣服產生難聞氣味。",
    "vocabIndex": 14
  },
  {
    "q": "The wealthy old gentleman sat on the porch and smoked an expensive brown ______.",
    "options": [
      "bunch",
      "cigar",
      "beam",
      "bush"
    ],
    "answer": 1,
    "cn": "那位富有的老紳士坐在門廊上，抽著一支昂貴的棕色雪茄。",
    "vocabIndex": 16
  },
  {
    "q": "We bought our popcorn and walked into the dark ______ to watch the animated cartoon.",
    "options": [
      "cinema",
      "cigar",
      "bundle",
      "beam"
    ],
    "answer": 0,
    "cn": "我們買了爆米花，走進黑暗的電影院觀看動畫卡通。",
    "vocabIndex": 17
  },
  {
    "q": "Most of the valley land is used for ______ because the soil is very rich and wet.",
    "options": [
      "bunch",
      "cigar",
      "agriculture",
      "bush"
    ],
    "answer": 2,
    "cn": "這個山谷大部分土地被用於農業，因為土壤非常肥沃且濕潤。",
    "vocabIndex": 0
  },
  {
    "q": "The factory uses dried ______ leaves to manufacture various smoking products.",
    "options": [
      "bundle",
      "tobacco",
      "beam",
      "cinema"
    ],
    "answer": 1,
    "cn": "這家工廠使用乾燥的菸草葉來製造各種吸菸製品。",
    "vocabIndex": 15
  },
  {
    "q": "Jack complains all the time about minor problems, making him a total ______ to talk to.",
    "options": [
      "bush",
      "cigar",
      "bunch",
      "bore"
    ],
    "answer": 3,
    "cn": "傑克整天為了小事抱怨不休，跟他講話真是個徹頭徹尾的討厭悶蛋。",
    "vocabIndex": 4
  },
  {
    "q": "You can pick up your reserved show tickets directly at the ______ before five o'clock.",
    "options": [
      "box office",
      "laser beam",
      "Cuban cigar",
      "flower bunch"
    ],
    "answer": 0,
    "cn": "你可以在五點之前直接在售票處領取你預約的表演門票。",
    "vocabIndex": 18
  },
  {
    "q": "The modern scientific lab uses a thin red ______ to measure distances precisely.",
    "options": [
      "box office",
      "flower bunch",
      "laser beam",
      "Cuban cigar"
    ],
    "answer": 2,
    "cn": "這座現代科學實驗室使用一道細長的紅色雷射光束來精確測量距離。",
    "vocabIndex": 2
  },
  {
    "q": "This flat rural plain is an important ______ area that produces tons of wheat every year.",
    "options": [
      "bored",
      "agricultural",
      "boring",
      "bright"
    ],
    "answer": 1,
    "cn": "這片平坦的鄉村平原是一個重要的農業區域，每年生產數噸小麥。",
    "vocabIndex": 1
  },
  {
    "q": "The story was so slow and ______ that several people in the audience fell asleep.",
    "options": [
      "boring",
      "agricultural",
      "bored",
      "beam"
    ],
    "answer": 0,
    "cn": "那個故事太慢且乏味無聊，以至於觀眾席中的好幾個人都睡著了。",
    "vocabIndex": 7
  },
  {
    "q": "After staying indoors all afternoon with nothing to play, the children were very ______.",
    "options": [
      "boring",
      "agricultural",
      "bored",
      "bright"
    ],
    "answer": 2,
    "cn": "整個下午待在室內沒東西可玩之後，孩子們感到非常無聊。",
    "vocabIndex": 6
  },
  {
    "q": "This vast region sells valuable ______ crops like corn, potatoes, and beans to cities.",
    "options": [
      "boring",
      "bored",
      "bright",
      "agricultural"
    ],
    "answer": 3,
    "cn": "這個廣大地區向城市銷售玉米、馬鈴薯和大豆等珍貴的農作物。",
    "vocabIndex": 1
  },
  {
    "q": "The teacher told the boy not to ______ his classmates with silly questions during math class.",
    "options": [
      "beam",
      "bore",
      "bundle",
      "smoke"
    ],
    "answer": 1,
    "cn": "老師告訴那個男孩在數學課上不要用傻問題去使同學感到厭煩。",
    "vocabIndex": 4
  },
  {
    "q": "The proud runner ______ happily as the referee handed him the gold medal.",
    "options": [
      "beamed",
      "smoked",
      "bored",
      "bundled"
    ],
    "answer": 0,
    "cn": "當裁判將金牌遞給那位自豪的跑者時，他開心地露出燦爛笑容。",
    "vocabIndex": 2
  },
  {
    "q": "Can you help me ______ these dry branches so we can carry them easily to the campfire?",
    "options": [
      "beam",
      "bore",
      "bundle",
      "smoke"
    ],
    "answer": 2,
    "cn": "你能幫我把這些乾樹枝捆紮起來，以便我們輕鬆搬去營火那裡嗎？",
    "vocabIndex": 9
  },
  {
    "q": "Doctors advise people never to ______ because it seriously harms their lungs.",
    "options": [
      "beam",
      "bundle",
      "bore",
      "smoke"
    ],
    "answer": 3,
    "cn": "醫生建議人們絕對不要抽菸，因為這會嚴重危害肺部。"
  },
  {
    "q": "The midday sun ______ down warmly through the glass windows into the library.",
    "options": [
      "bundled",
      "bored",
      "beamed",
      "smoked"
    ],
    "answer": 2,
    "cn": "正午的陽光穿透玻璃窗溫暖地照射進圖書館裡。",
    "vocabIndex": 2
  },
  {
    "q": "When going out into the freezing winter snow, remember to ______ so you won't catch a cold.",
    "options": [
      "bundle up",
      "beat around the bush",
      "take a risk",
      "lose one's temper"
    ],
    "answer": 0,
    "cn": "當走進酷寒的冬雪中時，切記要穿得暖和，這樣才不會感冒。",
    "vocabIndex": 11
  },
  {
    "q": "Please tell me directly what went wrong and stop ______ about the problem.",
    "options": [
      "bundling up",
      "taking a risk",
      "losing your temper",
      "beating around the bush"
    ],
    "answer": 3,
    "cn": "請直接告訴我出了什麼問題，別再針對問題拐彎抹角了。",
    "vocabIndex": 13
  },
  {
    "q": "If you don't like the new plan, please say it clearly and don't ______.",
    "options": [
      "bundle up",
      "beat around the bush",
      "take a risk",
      "lose your temper"
    ],
    "answer": 1,
    "cn": "如果你不喜歡這項新計畫，請明白說出來，不要說話拐彎抹角。",
    "vocabIndex": 13
  },
  {
    "q": "Mom always tells us to ______ in warm coats and woolen gloves before we go skiing.",
    "options": [
      "bundle up",
      "take a risk",
      "lose our temper",
      "beat around the bush"
    ],
    "answer": 0,
    "cn": "在我們去滑雪之前，媽媽總是吩咐我們要穿著厚大衣與羊毛手套裹得暖暖的。",
    "vocabIndex": 11
  }
];

const LOOKUP = {
  "agriculture": {
    "pos": "n.",
    "en_def": "the science, practice, or occupation of farming and cultivating soil",
    "cn_def": "農業；農藝（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the science, practice, or occupation of farming and cultivating soil",
        "cn_def": "農業；農藝（不可數）"
      }
    ]
  },
  "agricultural": {
    "pos": "adj.",
    "en_def": "relating to farming, crops, or the cultivation of the land",
    "cn_def": "農業的；農產的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to farming, crops, or the cultivation of the land",
        "cn_def": "農業的；農產的"
      }
    ]
  },
  "beam": {
    "pos": "n.",
    "en_def": "a ray or shaft of light; a long sturdy piece of timber or metal supporting a roof",
    "cn_def": "光線；光束；（房屋）橫梁",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a ray or shaft of light; a long sturdy piece of timber or metal supporting a roof",
        "cn_def": "光線；光束；（房屋）橫梁"
      },
      {
        "pos": "v.",
        "en_def": "to shine brightly; to smile broadly with radiant joy",
        "cn_def": "照射；發光；眉開眼笑；露出笑容"
      }
    ]
  },
  "bore": {
    "pos": "v.",
    "en_def": "to make someone feel weary, impatient, or unexcited by tedious talk",
    "cn_def": "使厭煩；使感到無聊（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make someone feel weary, impatient, or unexcited by tedious talk",
        "cn_def": "使厭煩；使感到無聊（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a dull, uninteresting, or tiresome person or thing",
        "cn_def": "令人厭煩的人；討厭無趣的事物"
      }
    ]
  },
  "bored": {
    "pos": "adj.",
    "en_def": "feeling weary, unexcited, and restless through lack of interest",
    "cn_def": "感到無聊的；感到厭煩的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling weary, unexcited, and restless through lack of interest",
        "cn_def": "感到無聊的；感到厭煩的"
      }
    ]
  },
  "boring": {
    "pos": "adj.",
    "en_def": "not interesting; tedious and tiresome",
    "cn_def": "乏味的；無聊的；令人生厭的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not interesting; tedious and tiresome",
        "cn_def": "乏味的；無聊的；令人生厭的"
      }
    ]
  },
  "bunch": {
    "pos": "n.",
    "en_def": "a number of things grouped together; a group of people; a large amount",
    "cn_def": "一束；一串；一群（人）；大量",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a number of things grouped together; a group of people; a large amount",
        "cn_def": "一束；一串；一群（人）；大量"
      }
    ]
  },
  "bundle": {
    "pos": "n.",
    "en_def": "a collection of things tied or wrapped together in a package",
    "cn_def": "一捆；一包；大堆",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a collection of things tied or wrapped together in a package",
        "cn_def": "一捆；一包；大堆"
      },
      {
        "pos": "v.",
        "en_def": "to tie, wrap, or package things together into a bundle",
        "cn_def": "捆紮；包裝（動詞）"
      }
    ]
  },
  "bundle up": {
    "pos": "v.phr.",
    "en_def": "to dress warmly in many layers of clothing against the cold",
    "cn_def": "穿得暖和；穿厚厚的衣服",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to dress warmly in many layers of clothing against the cold",
        "cn_def": "穿得暖和；穿厚厚的衣服"
      }
    ]
  },
  "bushes": {
    "pos": "n.",
    "en_def": "a woody plant smaller than a tree, with multiple stems growing from the base",
    "cn_def": "灌木；灌木叢",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a woody plant smaller than a tree, with multiple stems growing from the base",
        "cn_def": "灌木；灌木叢"
      }
    ]
  },
  "bush": {
    "pos": "n.",
    "en_def": "a woody plant smaller than a tree, with multiple stems growing from the base",
    "cn_def": "灌木；灌木叢",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a woody plant smaller than a tree, with multiple stems growing from the base",
        "cn_def": "灌木；灌木叢"
      }
    ]
  },
  "beat around the bush": {
    "pos": "v.phr.",
    "en_def": "to discuss a matter without coming directly to the main point",
    "cn_def": "說話拐彎抹角；旁敲側擊",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to discuss a matter without coming directly to the main point",
        "cn_def": "說話拐彎抹角；旁敲側擊"
      }
    ]
  },
  "cigarette": {
    "pos": "n.",
    "en_def": "a small cylinder of finely cut tobacco rolled in paper for smoking",
    "cn_def": "香菸；紙菸",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small cylinder of finely cut tobacco rolled in paper for smoking",
        "cn_def": "香菸；紙菸"
      }
    ]
  },
  "tobacco": {
    "pos": "n.",
    "en_def": "the prepared dried leaves of a plant used for smoking or chewing",
    "cn_def": "菸草；菸草製品（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the prepared dried leaves of a plant used for smoking or chewing",
        "cn_def": "菸草；菸草製品（不可數）"
      }
    ]
  },
  "cigar": {
    "pos": "n.",
    "en_def": "a roll of dried tobacco leaves wrapped in another leaf for smoking",
    "cn_def": "雪茄",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a roll of dried tobacco leaves wrapped in another leaf for smoking",
        "cn_def": "雪茄"
      }
    ]
  },
  "cinema": {
    "pos": "n.",
    "en_def": "a movie theater, or the production of movies as an art form or industry",
    "cn_def": "電影院；電影藝術；電影業",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a movie theater, or the production of movies as an art form or industry",
        "cn_def": "電影院；電影藝術；電影業"
      }
    ]
  },
  "box office": {
    "pos": "n.phr.",
    "en_def": "the place at a theater where tickets are bought; the commercial success of a movie",
    "cn_def": "售票處；（電影等）票房",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "the place at a theater where tickets are bought; the commercial success of a movie",
        "cn_def": "售票處；（電影等）票房"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
