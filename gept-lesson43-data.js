// Lesson 43 Quiz Data: Physical Appearance, Temperament & Behavior
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 43 - Physical Appearance, Temperament & Behavior",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "sneaky",
    "pos": "adj.",
    "cn_def": "鬼鬼祟祟的；狡猾的",
    "en_def": "doing things in a secret and often dishonest way",
    "sentence": "The cat made a {{BLANK}} approach across the kitchen floor, but the clever mouse escaped into its hole just in time.",
    "cn": "那隻貓在廚房地板上鬼鬼祟祟地靠近，但那隻聰明的老鼠及時逃進了洞裡。"
  },
  {
    "word": "evil",
    "pos": "adj. / n.",
    "cn_def": "邪惡的；罪惡",
    "en_def": "morally bad, cruel, or causing harm; wickedness",
    "sentence": "In many classic fairy tales, a brave knight fights against an {{BLANK}} dragon to protect innocent villagers.",
    "cn": "在許多經典童話故事中，英勇的騎士與邪惡的巨龍搏鬥，以保護無辜的村民。"
  },
  {
    "word": "wild",
    "pos": "adj.",
    "cn_def": "野生的；狂野的",
    "en_def": "living in natural conditions; not tamed; uncontrolled",
    "sentence": "When we walked deep into the mountain national park, we saw several {{BLANK}} horses grazing peacefully on the green slope.",
    "cn": "當我們深入走進高山國家公園時，我們看見幾匹野馬在綠色山坡上平靜地吃草。"
  },
  {
    "word": "gentle",
    "pos": "adj.",
    "cn_def": "溫和的；溫柔的",
    "en_def": "calm, kind, and soft; not rough or violent",
    "sentence": "The nurse had a very {{BLANK}} touch when she cleaned the little baby's wound, so the child never cried at all.",
    "cn": "護士在清理小嬰兒的傷口時動作非常溫柔，所以孩子一點也沒有哭泣。"
  },
  {
    "word": "gentleman",
    "pos": "n.",
    "cn_def": "紳士；有教養的男士",
    "en_def": "a polite, gracious, and honorable man",
    "sentence": "Mr. White is a true {{BLANK}} who always holds the elevator door open for elderly neighbors and speaks respectfully.",
    "cn": "懷特先生是一位真正的紳士，他總是為年長的鄰居按住電梯門並恭敬地說話。"
  },
  {
    "word": "talkative",
    "pos": "adj.",
    "cn_def": "健談的；愛說話的",
    "en_def": "tending to talk a lot in social situations",
    "sentence": "My cousin is extremely {{BLANK}} whenever we meet at family reunions, and she can talk about fashion for hours.",
    "cn": "每當我們在家族聚會上見面時，我的表妹都極其健談，她可以聊時尚聊上好幾個小時。"
  },
  {
    "word": "chubby",
    "pos": "adj.",
    "cn_def": "圓胖的；豐滿可愛的",
    "en_def": "pleasantly fat and rounded, especially of children",
    "sentence": "The six-month-old baby had {{BLANK}} cheeks and bright sparkling eyes, so everyone in the room wanted to hug him.",
    "cn": "那個六個月大的嬰兒有著胖嘟嘟的臉頰和明亮的大眼睛，所以房間裡的每個人都想抱他。"
  },
  {
    "word": "skinny",
    "pos": "adj.",
    "cn_def": "消瘦的；骨瘦如柴的",
    "en_def": "very thin, often too thin or bony",
    "sentence": "After suffering from a high fever for two whole weeks, the poor boy looked pale and remarkably {{BLANK}}.",
    "cn": "在連續發高燒整整兩週之後，那個可憐的男孩看起來臉色蒼白且非常消瘦。"
  },
  {
    "word": "slender",
    "pos": "adj.",
    "cn_def": "修長的；苗條優雅的",
    "en_def": "gracefully thin, slim, and attractive",
    "sentence": "The talented pianist has long, {{BLANK}} fingers that glide smoothly across the black and white piano keys.",
    "cn": "那位天才鋼琴家具備修長而優雅的手指，在黑白琴鍵上流暢地滑動。"
  },
  {
    "word": "slim",
    "pos": "adj.",
    "cn_def": "苗條的；纖細的",
    "en_def": "attractively thin; slender in build; slight",
    "sentence": "By exercising regularly and following a balanced diet, Amanda managed to maintain a healthy and {{BLANK}} figure.",
    "cn": "透過定期運動與均衡飲食，阿曼達成功保持了健康且苗條的身材。"
  }
];

const MCQS = [
  {
    "q": "The handsome prince bowed gracefully and offered his coat to the shivering lady, acting like a perfect ______.",
    "options": [
      "monster",
      "gentleman",
      "loser",
      "enemy"
    ],
    "answer": 1,
    "cn": "英俊的王子優雅地鞠躬並將外套給了發抖的女士，舉止就像一位完美的紳士。 【選項解析】(A) gentleman 紳士  (B) monster 怪物  (C) loser 失敗者  (D) enemy 敵人。彬彬有禮的男士為 gentleman。",
    "vocabIndex": 4
  },
  {
    "q": "The stray puppy had been starving on the streets for weeks, so its legs were painfully ______ when rescuers found it.",
    "options": [
      "chubby",
      "talkative",
      "skinny",
      "gentle"
    ],
    "answer": 2,
    "cn": "那隻流浪小狗在街上挨餓了好幾個星期，救援人員發現它時，它的雙腿瘦得令人心痛。 【選項解析】(A) chubby 胖嘟嘟的  (B) talkative 健談的  (C) skinny 消瘦的  (D) gentle 溫柔的。長期挨餓導致 skinny。",
    "vocabIndex": 7
  },
  {
    "q": "The mother used a soft towel and a ______ voice to soothe her frightened toddler back to sleep.",
    "options": [
      "sneaky",
      "chubby",
      "wild",
      "gentle"
    ],
    "answer": 3,
    "cn": "母親用柔軟的毛巾與溫柔的聲音安撫受驚嚇的幼童重新入睡。 【選項解析】(A) sneaky 鬼祟的  (B) gentle 溫和的  (C) wild 狂野的  (D) chubby 豐滿的。安撫孩子用 gentle voice。",
    "vocabIndex": 3
  },
  {
    "q": "Taking money secretly out of your mother's purse while she is cooking dinner is a very ______ and unacceptable deed.",
    "options": [
      "sneaky",
      "slender",
      "chubby",
      "gentle"
    ],
    "answer": 0,
    "cn": "趁母親在煮晚餐時偷偷從她皮包裡拿錢，是一種非常狡猾且不可接受的行為。 【選項解析】(A) slender 苗條的  (B) sneaky 狡詐鬼祟的  (C) chubby 圓胖的  (D) gentle 溫和的。偷竊摸索屬於 sneaky。",
    "vocabIndex": 0
  },
  {
    "q": "The baby smiled happily at his grandmother and waved his cute, ______ little hands in the air.",
    "options": [
      "wild",
      "talkative",
      "sneaky",
      "chubby"
    ],
    "answer": 3,
    "cn": "小嬰兒對祖母開心地微笑，並在空中揮舞著他可愛、胖嘟嘟的小手。 【選項解析】(A) chubby 胖乎乎的  (B) talkative 愛說話的  (C) sneaky 鬼祟的  (D) wild 野性的。嬰兒可愛肉嘟嘟為 chubby。",
    "vocabIndex": 6
  },
  {
    "q": "In the dramatic comic book, the superhero spent years trying to stop the ______ villain from destroying the metropolis.",
    "options": [
      "gentle",
      "evil",
      "slender",
      "chubby"
    ],
    "answer": 1,
    "cn": "在扣人心弦的漫畫中，超級英雄耗費數年試圖阻止邪惡的反派毀滅這座大都會。 【選項解析】(A) gentle 溫柔的  (B) evil 邪惡的  (C) slender 修長的  (D) chubby 圓胖的。毀滅城市的大反派為 evil villain。",
    "vocabIndex": 1
  },
  {
    "q": "Maria was so ______ during the bus ride that she told three funny stories before we even arrived at the station.",
    "options": [
      "sneaky",
      "skinny",
      "talkative",
      "evil"
    ],
    "answer": 2,
    "cn": "瑪麗亞在搭公車期間非常健談，我們甚至還沒到站她就講了三個有趣的故事。 【選項解析】(A) talkative 健談的  (B) skinny 瘦弱的  (C) sneaky 狡猾的  (D) evil 邪惡的。滔滔不絕講故事為 talkative。",
    "vocabIndex": 5
  },
  {
    "q": "The professional fashion model kept herself in excellent shape and wore a gorgeous dress that accentuated her ______ waist.",
    "options": [
      "slim",
      "wild",
      "chubby",
      "talkative"
    ],
    "answer": 0,
    "cn": "專業時裝模特兒保持著絕佳的身材，身穿一襲凸顯她苗條腰身的華美禮服。 【選項解析】(A) wild 狂野的  (B) slim 苗條的  (C) chubby 圓潤的  (D) talkative 健談的。身材勻稱窈窕為 slim。",
    "vocabIndex": 9
  },
  {
    "q": "The violinist possessed extraordinarily long and ______ fingers, allowing her to reach difficult musical notes effortlessly.",
    "options": [
      "evil",
      "sneaky",
      "chubby",
      "slender"
    ],
    "answer": 3,
    "cn": "小提琴家擁有特別修長的手指，使她能夠毫不費力地按到難度極高的音符。 【選項解析】(A) evil 邪惡的  (B) slender 修長的  (C) chubby 圓胖的  (D) sneaky 鬼祟的。鋼琴家/提琴家的手指常形容為 slender。",
    "vocabIndex": 8
  },
  {
    "q": "Kangaroos and koalas are famous ______ animals that roam freely across vast Australian grasslands and forests.",
    "options": [
      "chubby",
      "talkative",
      "wild",
      "gentle"
    ],
    "answer": 2,
    "cn": "袋鼠與無尾熊是著名的野生動物，在澳洲廣袤的草原與森林中自由漫步。 【選項解析】(A) wild 野生的  (B) talkative 健談的  (C) chubby 肥胖的  (D) gentle 溫順的。野生動物為 wild animals。",
    "vocabIndex": 2
  },
  {
    "q": "Don't be so ______; if you want to borrow my camera, just ask me directly instead of taking it quietly.",
    "options": [
      "sneaky",
      "slender",
      "chubby",
      "gentle"
    ],
    "answer": 0,
    "cn": "別那麼鬼鬼祟祟；如果你想借我的相機，直接開口問我就好，不要悄悄拿走。 【選項解析】(A) slender 苗條的  (B) sneaky 鬼祟的  (C) chubby 圓胖的  (D) gentle 溫柔的。偷拿東西的行徑為 sneaky。",
    "vocabIndex": 0
  },
  {
    "q": "Everyone loves spending time with Uncle Ben because he is a courteous ______ who treats all guests with great dignity.",
    "options": [
      "monster",
      "gentleman",
      "loser",
      "soldier"
    ],
    "answer": 1,
    "cn": "大家都喜歡與班叔叔相處，因為他是一位謙恭有禮的紳士，非常尊重地對待所有客人。 【選項解析】(A) gentleman 紳士  (B) monster 怪物  (C) loser 失敗者  (D) soldier 士兵。禮遇客人的男士為 gentleman。",
    "vocabIndex": 4
  },
  {
    "q": "The summer storm blew through the valley with ______ winds that knocked down several trees along the road.",
    "options": [
      "wild",
      "chubby",
      "talkative",
      "slender"
    ],
    "answer": 0,
    "cn": "夏日風暴夾帶著狂暴的強風掠過山谷，吹倒了沿路的好幾棵大樹。 【選項解析】(A) wild 狂野狂暴的  (B) chubby 圓潤的  (C) talkative 多話的  (D) slender 纖細的。強勁風暴為 wild winds。",
    "vocabIndex": 2
  },
  {
    "q": "The kindergarten teacher spoke in a ______ tone so that the nervous children would not feel frightened on their first day.",
    "options": [
      "skinny",
      "sneaky",
      "wild",
      "gentle"
    ],
    "answer": 3,
    "cn": "幼兒園老師用溫和的語調說話，好讓緊張的孩子們在第一天上學時不會感到害怕。 【選項解析】(A) gentle 溫和的  (B) sneaky 鬼祟的  (C) wild 狂野的  (D) skinny 瘦削的。安撫幼兒的語氣為 gentle tone。",
    "vocabIndex": 3
  },
  {
    "q": "Little Tommy ate hearty meals every single day, so his smiling face and ______ cheeks made him look adorable.",
    "options": [
      "evil",
      "sneaky",
      "chubby",
      "talkative"
    ],
    "answer": 2,
    "cn": "小湯米每天都吃豐盛的正餐，所以他笑嘻嘻的臉龐與胖嘟嘟的臉頰讓他看起來十分可愛。 【選項解析】(A) chubby 胖嘟嘟的  (B) sneaky 狡猾的  (C) evil 邪惡的  (D) talkative 健談的。可愛肉臉頰為 chubby cheeks。",
    "vocabIndex": 6
  },
  {
    "q": "Although he eats large bowls of noodles three times a day, Kevin remains quite ______ because he plays soccer daily.",
    "options": [
      "talkative",
      "skinny",
      "chubby",
      "evil"
    ],
    "answer": 1,
    "cn": "雖然凱文每天吃三大碗麵，但他依然相當瘦，因為他每天都在踢足球。 【選項解析】(A) talkative 健談的  (B) chubby 胖的  (C) skinny 骨瘦的  (D) evil 壞的。怎麼吃都不長肉為 skinny。",
    "vocabIndex": 7
  },
  {
    "q": "Ballet dancers usually maintain a ______ body through strict training, enabling them to leap gracefully across the stage.",
    "options": [
      "sneaky",
      "chubby",
      "slim",
      "talkative"
    ],
    "answer": 2,
    "cn": "芭蕾舞者通常透過嚴格的訓練保持苗條的身形，使她們能夠在舞台上優雅地躍起。 【選項解析】(A) slim 苗條的  (B) chubby 圓胖的  (C) sneaky 鬼祟的  (D) talkative 多話的。維持舞者體態為 slim body。",
    "vocabIndex": 9
  },
  {
    "q": "The tall young woman walked with graceful posture, and her ______ silhouette caught the attention of everyone in the hall.",
    "options": [
      "chubby",
      "slender",
      "talkative",
      "sneaky"
    ],
    "answer": 1,
    "cn": "身材高挑的年輕女子步態優雅，她修長的剪影吸引了大廳裡所有人的目光。 【選項解析】(A) slender 修長的  (B) chubby 圓胖的  (C) talkative 多話的  (D) sneaky 偷偷摸摸的。婀娜修長身形為 slender silhouette。",
    "vocabIndex": 8
  },
  {
    "q": "Ancient legends tell stories of an ______ witch who lived in the dark woods and turned greedy travelers into frogs.",
    "options": [
      "evil",
      "gentle",
      "chubby",
      "talkative"
    ],
    "answer": 0,
    "cn": "古老傳說講述了一位住在黑森林裡的邪惡巫婆的故事，她把貪婪的旅人變成了青蛙。 【選項解析】(A) evil 邪惡的  (B) gentle 溫柔的  (C) chubby 胖乎乎的  (D) talkative 健談的。童話巫婆為 evil witch。",
    "vocabIndex": 1
  },
  {
    "q": "My seatmate on the long train trip was very ______, telling me all about his university life in Canada.",
    "options": [
      "wild",
      "chubby",
      "skinny",
      "talkative"
    ],
    "answer": 3,
    "cn": "我在漫長火車旅途中的鄰座非常健談，跟我聊了許多他在加拿大的大學生活。 【選項解析】(A) talkative 健談的  (B) chubby 胖的  (C) skinny 骨瘦的  (D) wild 野蠻的。旅途中愛聊天的伴侶為 talkative。",
    "vocabIndex": 5
  },
  {
    "q": "A polite ______ will always offer his seat to pregnant women or elderly citizens on a crowded bus.",
    "options": [
      "gentleman",
      "monster",
      "thief",
      "enemy"
    ],
    "answer": 0,
    "cn": "一位有禮貌的紳士在擁擠的公車上總是會主動給孕婦或年長市民讓座。 【選項解析】(A) gentleman 紳士  (B) monster 怪物  (C) thief 竊賊  (D) enemy 敵人。主動讓座之男士為 gentleman。",
    "vocabIndex": 4
  },
  {
    "q": "The fox made a ______ maneuver through the tall grass, attempting to snatch a chicken from the coop.",
    "options": [
      "talkative",
      "chubby",
      "gentle",
      "sneaky"
    ],
    "answer": 3,
    "cn": "狐狸在茂密的草叢中進行了一次鬼鬼祟祟的走位，試圖從雞舍裡抓走一隻雞。 【選項解析】(A) sneaky 鬼祟狡詐的  (B) chubby 圓胖的  (C) gentle 溫柔的  (D) talkative 健談的。捕獵隱匿動作為 sneaky maneuver。",
    "vocabIndex": 0
  },
  {
    "q": "The wild rose that grew near the river had small pink blossoms and gave off a light, ______ scent in the evening.",
    "options": [
      "chubby",
      "sneaky",
      "gentle",
      "evil"
    ],
    "answer": 2,
    "cn": "生長在河邊的野玫瑰開著粉紅色的花朵，在傍晚散發出淡淡柔和的清香。 【選項解析】(A) gentle 柔和清淡的  (B) sneaky 鬼祟的  (C) chubby 圓胖的  (D) evil 罪惡的。淡雅清香為 gentle scent。",
    "vocabIndex": 3
  },
  {
    "q": "After months of intense running practice, David's body became remarkably ______ and fit for the marathon.",
    "options": [
      "chubby",
      "slim",
      "talkative",
      "sneaky"
    ],
    "answer": 1,
    "cn": "經過數月高強度的跑步訓練後，戴維的身材變得非常苗條勻稱且適合跑馬拉松。 【選項解析】(A) slim 苗條健康的  (B) chubby 胖胖的  (C) talkative 愛說話的  (D) sneaky 狡猾的。長跑訓練打造 slim figure。",
    "vocabIndex": 9
  },
  {
    "q": "The medical doctor warned the teenager that being dangerously ______ could harm her immune system.",
    "options": [
      "wild",
      "talkative",
      "gentle",
      "skinny"
    ],
    "answer": 3,
    "cn": "醫生警告這名年輕女孩，危險的過度消瘦可能會損害她的免疫系統機能。 【選項解析】(A) skinny 皮包骨的  (B) talkative 健談的  (C) gentle 溫順的  (D) wild 野蠻的。dangerously skinny 指病態消瘦。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "sneaky": {
    "pos": "adj.",
    "en_def": "doing things in a secret and often dishonest way",
    "cn_def": "鬼鬼祟祟的；狡猾的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "doing things in a secret and often dishonest way",
        "cn_def": "鬼鬼祟祟的；狡猾的"
      }
    ]
  },
  "evil": {
    "pos": "adj. / n.",
    "en_def": "morally bad, cruel, or causing harm; wickedness",
    "cn_def": "邪惡的；罪惡",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "morally bad, cruel, or causing harm; wickedness",
        "cn_def": "邪惡的；罪惡"
      }
    ]
  },
  "wild": {
    "pos": "adj.",
    "en_def": "living in natural conditions; not tamed; uncontrolled",
    "cn_def": "野生的；狂野的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "living in natural conditions; not tamed; uncontrolled",
        "cn_def": "野生的；狂野的"
      }
    ]
  },
  "gentle": {
    "pos": "adj.",
    "en_def": "calm, kind, and soft; not rough or violent",
    "cn_def": "溫和的；溫柔的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "calm, kind, and soft; not rough or violent",
        "cn_def": "溫和的；溫柔的"
      }
    ]
  },
  "gentleman": {
    "pos": "n.",
    "en_def": "a polite, gracious, and honorable man",
    "cn_def": "紳士；有教養的男士",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a polite, gracious, and honorable man",
        "cn_def": "紳士；有教養的男士"
      }
    ]
  },
  "talkative": {
    "pos": "adj.",
    "en_def": "tending to talk a lot in social situations",
    "cn_def": "健談的；愛說話的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "tending to talk a lot in social situations",
        "cn_def": "健談的；愛說話的"
      }
    ]
  },
  "chubby": {
    "pos": "adj.",
    "en_def": "pleasantly fat and rounded, especially of children",
    "cn_def": "圓胖的；豐滿可愛的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "pleasantly fat and rounded, especially of children",
        "cn_def": "圓胖的；豐滿可愛的"
      }
    ]
  },
  "skinny": {
    "pos": "adj.",
    "en_def": "very thin, often too thin or bony",
    "cn_def": "消瘦的；骨瘦如柴的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very thin, often too thin or bony",
        "cn_def": "消瘦的；骨瘦如柴的"
      }
    ]
  },
  "slender": {
    "pos": "adj.",
    "en_def": "gracefully thin, slim, and attractive",
    "cn_def": "修長的；苗條優雅的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "gracefully thin, slim, and attractive",
        "cn_def": "修長的；苗條優雅的"
      }
    ]
  },
  "slim": {
    "pos": "adj.",
    "en_def": "attractively thin; slender in build; slight",
    "cn_def": "苗條的；纖細的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "attractively thin; slender in build; slight",
        "cn_def": "苗條的；纖細的"
      }
    ]
  },
  "monster": {
    "pos": "",
    "en_def": "",
    "cn_def": "怪物",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "怪物"
      }
    ]
  },
  "loser": {
    "pos": "",
    "en_def": "",
    "cn_def": "失敗者",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "失敗者"
      }
    ]
  },
  "enemy": {
    "pos": "",
    "en_def": "",
    "cn_def": "敵人",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "敵人"
      }
    ]
  },
  "soldier": {
    "pos": "",
    "en_def": "",
    "cn_def": "士兵",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "士兵"
      }
    ]
  },
  "thief": {
    "pos": "",
    "en_def": "",
    "cn_def": "竊賊",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "竊賊"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
