// Part 1 Quiz Data: acceptable – connection
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 3-1 - acceptable – connection",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "acceptable",
    "pos": "adj.",
    "cn_def": "可接受的；令人滿意的",
    "en_def": "able to be agreed on or approved of; satisfactory",
    "sentence": "The boss did not find Connie's late report {{BLANK}} at all, so she had to redo the entire analysis.",
    "cn": "老闆完全不認為康妮遲交的報告是可接受的，因此她必須將整份分析重做。"
  },
  {
    "word": "accept",
    "pos": "v.",
    "cn_def": "接受；答應；承認（動詞）",
    "en_def": "to consent to receive something offered; to believe or come to recognize",
    "sentence": "After thinking about the job offer for several days, Henry decided to {{BLANK}} the attractive position in New York.",
    "cn": "在考慮這份工作機會數天之後，亨利決定接受位於紐約的這個吸引人的職位。"
  },
  {
    "word": "acceptance",
    "pos": "n.",
    "cn_def": "接受；認同；錄取通知（不可數/可數）",
    "en_def": "the action of consenting to receive or undertake something; approval",
    "sentence": "David jumped with immense excitement when he opened the official letter of {{BLANK}} from Harvard University.",
    "cn": "當大衛拆開哈佛大學正式的錄取通知信時，他興奮得跳了起來。"
  },
  {
    "word": "ache",
    "pos": "n.",
    "cn_def": "隱隱作痛；持續鈍痛（可數）",
    "en_def": "a continuous or prolonged dull pain in a part of one's body",
    "sentence": "After working for eight hours without a break, the computer programmer felt a painful {{BLANK}} in his lower back.",
    "cn": "在連續工作八小時沒有休息後，電腦程式設計師感到下背部一陣劇烈的疼痛／酸痛。"
  },
  {
    "word": "ache",
    "pos": "v.",
    "cn_def": "疼痛；酸痛；極度渴望（動詞）",
    "en_def": "to suffer from a continuous dull pain; to feel intense desire or longing",
    "sentence": "My grandmother's joints always begin to {{BLANK}} whenever the winter weather turns very cold and humid.",
    "cn": "每當冬季天氣變得非常寒冷潮濕時，我祖母的關節總是開始隱隱作痛。"
  },
  {
    "word": "breath",
    "pos": "n.",
    "cn_def": "呼吸；氣息；一口氣（不可數/可數）",
    "en_def": "the air inhaled and exhaled in respiration (uncountable/countable)",
    "sentence": "After running all the way to the top of the steep hill, Jim stopped to catch his {{BLANK}}.",
    "cn": "一路狂奔到陡峭山頂之後，吉姆停下來喘口氣／歇歇腳。"
  },
  {
    "word": "breathe",
    "pos": "v.",
    "cn_def": "呼吸；吸入（動詞）",
    "en_def": "to take air into the lungs and expel it; to be alive",
    "sentence": "The frightened audience could hardly {{BLANK}} during the most terrifying climax scene of the horror movie.",
    "cn": "在恐怖電影最驚悚的高潮場景中，嚇壞的觀眾幾乎無法呼吸。"
  },
  {
    "word": "cart",
    "pos": "n.",
    "cn_def": "手推車；採購推車；馬車（可數）",
    "en_def": "a small wheeled vehicle pushed or pulled by hand or beast",
    "sentence": "Patrick filled his shopping {{BLANK}} with fresh fruits, milk, and bread as he walked around the supermarket.",
    "cn": "派翠克在超市逛街時，把新鮮水果、牛奶和麵包裝滿了他的購物推車。"
  },
  {
    "word": "cart",
    "pos": "v.",
    "cn_def": "運送；搬運（動詞）",
    "en_def": "to convey or carry something heavy in a cart or vehicle",
    "sentence": "The strong workers had to {{BLANK}} all the broken wooden furniture out of the old house before the movers arrived.",
    "cn": "在搬家工人到達之前，強壯的工人必須把所有損壞的木製家具從老房子中搬運走。"
  },
  {
    "word": "cattle",
    "pos": "n.",
    "cn_def": "牛群；牲口（集合名詞，複數動詞）",
    "en_def": "large domesticated animals with horns and hooves, kept on farms for meat or milk",
    "sentence": "The hardworking cowboy was responsible for guiding a large herd of {{BLANK}} across the river to green pastures.",
    "cn": "那位勤勞的牛仔負責引導一大群牛群過河前往綠色牧場。"
  },
  {
    "word": "chimney",
    "pos": "n.",
    "cn_def": "煙囪（可數）",
    "en_def": "a vertical channel or pipe that carries smoke up from a fireplace through a roof",
    "sentence": "Thick grey smoke rose high into the winter sky from the stone {{BLANK}} of the mountain cottage.",
    "cn": "濃濃的灰煙從山間小屋的石造煙囪升向高高的冬日天空。"
  },
  {
    "word": "collection",
    "pos": "n.",
    "cn_def": "收藏品；系列商品；募集（可數/不可數）",
    "en_def": "a group of objects collected together, or a fashion season line",
    "sentence": "Brenda is an enthusiastic music lover who owns an impressive CD {{BLANK}} spanning over four decades.",
    "cn": "布蘭達是一位狂熱的音樂愛好者，擁有令人驚嘆、跨越四十年的 CD收藏品。"
  },
  {
    "word": "collect",
    "pos": "v.",
    "cn_def": "收集；聚集；領取（動詞）",
    "en_def": "to bring together things from various places; to accumulate",
    "sentence": "As a passionate hobby, young Timmy loves to {{BLANK}} colorful stamps from countries all around the globe.",
    "cn": "作為一項充滿熱情的嗜好，年輕的提姆喜歡收集來自全球各國的彩色郵票。"
  },
  {
    "word": "collector",
    "pos": "n.",
    "cn_def": "收藏家；收集者；收費員（可數）",
    "en_def": "a person who collects things of a specified type, professionally or as a hobby",
    "sentence": "A wealthy art {{BLANK}} purchased the rare oil painting at the international auction for five million dollars.",
    "cn": "一位富有的藝術收藏家在國際拍賣會上以五百萬美元買下了那幅珍稀油畫。"
  },
  {
    "word": "connect",
    "pos": "v.",
    "cn_def": "連結；接通；聯絡（動詞）",
    "en_def": "to join together so as to provide access or communication",
    "sentence": "You must {{BLANK}} the black power cable to the wall socket before you turn on the computer monitor.",
    "cn": "在打開電腦螢幕之前，你必須先將黑色電源線連接至牆壁插座。"
  },
  {
    "word": "connection",
    "pos": "n.",
    "cn_def": "關聯；人脈；轉乘連線（可數/不可數）",
    "en_def": "a relationship in which a person, thing, or idea is linked with something else",
    "sentence": "The students could not join the online classroom because their rural home suffered from a poor internet {{BLANK}}.",
    "cn": "學生們無法加入線上課堂，因為他們鄉村的家面臨不佳的網際網路連線。"
  }
];

const MCQS = [
  {
    "q": "The smoke from the warm wood fire rose straight up through the red brick ______.",
    "options": [
      "cart",
      "ache",
      "collection",
      "chimney"
    ],
    "answer": 3,
    "cn": "柴火升起的煙霧直接穿過紅磚煙囪升上天空。",
    "vocabIndex": 10
  },
  {
    "q": "The farmer walked across the green field to feed water to his hungry ______.",
    "options": [
      "cart",
      "chimney",
      "cattle",
      "ache"
    ],
    "answer": 2,
    "cn": "農民走過綠色田野去給他飢餓的牛群餵水。",
    "vocabIndex": 9
  },
  {
    "q": "Mom put apples, bananas, and a bottle of milk into our supermarket shopping ______.",
    "options": [
      "chimney",
      "cart",
      "connection",
      "ache"
    ],
    "answer": 1,
    "cn": "媽媽把蘋果、香蕉和一瓶牛奶放進我們的超市購物推車裡。",
    "vocabIndex": 7
  },
  {
    "q": "After studying on the computer for five hours, Ken felt a dull ______ in his neck.",
    "options": [
      "ache",
      "chimney",
      "cart",
      "cattle"
    ],
    "answer": 0,
    "cn": "在電腦前研讀五小時後，肯恩感到脖子一陣隱隱的鈍痛／酸痛。",
    "vocabIndex": 3
  },
  {
    "q": "Take a deep ______ and relax your body before you start to sing your song.",
    "options": [
      "cart",
      "breath",
      "chimney",
      "cattle"
    ],
    "answer": 1,
    "cn": "在開始唱歌之前，深深吸一口氣並放鬆你的身體。",
    "vocabIndex": 5
  },
  {
    "q": "Uncle John has a huge stamp ______ with stamps from more than thirty different countries.",
    "options": [
      "chimney",
      "ache",
      "cart",
      "collection"
    ],
    "answer": 3,
    "cn": "約翰叔叔擁有龐大的集郵收藏，收藏了來自三十多個不同國家的郵票。",
    "vocabIndex": 11
  },
  {
    "q": "The rich art ______ bought the famous drawing and put it in his private museum.",
    "options": [
      "collector",
      "chimney",
      "cattle",
      "cart"
    ],
    "answer": 0,
    "cn": "那位富有的藝術收藏家買下了那幅名畫，並存放在他的私人博物館中。",
    "vocabIndex": 13
  },
  {
    "q": "David was very happy to receive an official letter of ______ from the high school.",
    "options": [
      "cattle",
      "chimney",
      "acceptance",
      "cart"
    ],
    "answer": 2,
    "cn": "大衛非常高興收到那所高中的正式錄取通知信。",
    "vocabIndex": 2
  },
  {
    "q": "We could not watch the video because our house had a very weak internet ______.",
    "options": [
      "connection",
      "cattle",
      "chimney",
      "cart"
    ],
    "answer": 0,
    "cn": "我們無法觀看影片，因為我們家的網際網路連線非常微弱。",
    "vocabIndex": 15
  },
  {
    "q": "Grandpa's legs always ______ and feel stiff when winter brings freezing rain.",
    "options": [
      "cart",
      "ache",
      "connect",
      "breathe"
    ],
    "answer": 1,
    "cn": "每當冬天帶來凍雨時，爺爺的雙腿總是隱隱作痛且感到僵硬。",
    "vocabIndex": 3
  },
  {
    "q": "The air was so dusty inside the old room that it was hard to ______ normally.",
    "options": [
      "ache",
      "cart",
      "accept",
      "breathe"
    ],
    "answer": 3,
    "cn": "舊房間裡的空氣灰塵很多，以至於很難正常呼吸。",
    "vocabIndex": 6
  },
  {
    "q": "Please ______ the black wire to the computer so the screen will show the picture.",
    "options": [
      "breathe",
      "ache",
      "connect",
      "cart"
    ],
    "answer": 2,
    "cn": "請將黑線連接到電腦上，這樣螢幕才會顯示畫面。",
    "vocabIndex": 14
  },
  {
    "q": "After thinking about it, Kelly was pleased to ______ the nice birthday gift from Mark.",
    "options": [
      "breathe",
      "accept",
      "ache",
      "connect"
    ],
    "answer": 1,
    "cn": "經過考慮後，凱莉高興地接受了馬克送的精美生日禮物。",
    "vocabIndex": 1
  },
  {
    "q": "On weekends, the little boy likes to go to the beach and ______ pretty seashells.",
    "options": [
      "collect",
      "breathe",
      "ache",
      "connect"
    ],
    "answer": 0,
    "cn": "在週末，小男孩喜歡去海灘收集美麗的貝殼。",
    "vocabIndex": 12
  },
  {
    "q": "The workers had to ______ the heavy boxes down the street to the new shop.",
    "options": [
      "breathe",
      "ache",
      "cart",
      "accept"
    ],
    "answer": 2,
    "cn": "工人們不得不把沉重的箱子沿著街道搬運／用車運送到新商店。",
    "vocabIndex": 7
  },
  {
    "q": "His test score was quite good and easily ______ for entering the advanced class.",
    "options": [
      "bloody",
      "cruel",
      "crispy",
      "acceptable"
    ],
    "answer": 3,
    "cn": "他的考試成績相當不錯，要進入進階班是完全可被接受認可的。",
    "vocabIndex": 0
  },
  {
    "q": "Shouting loudly in the quiet study room is not ______ behavior for students.",
    "options": [
      "aged",
      "acceptable",
      "ancient",
      "chilly"
    ],
    "answer": 1,
    "cn": "在安靜的自修室裡大聲喊叫對學生而言並非合宜可被接受的行為。",
    "vocabIndex": 0
  },
  {
    "q": "The manager said the price was fair and ______ to both the buyer and seller.",
    "options": [
      "cruel",
      "bloody",
      "chipped",
      "acceptable"
    ],
    "answer": 3,
    "cn": "經理表示這個價格很公道，買賣雙方都能接受。",
    "vocabIndex": 0
  },
  {
    "q": "The sunrise view from the top of the mountain was so pretty that it ______.",
    "options": [
      "took our breath away",
      "hit a brick wall",
      "bled them dry",
      "kicked the bucket"
    ],
    "answer": 0,
    "cn": "山頂上的日出美景漂亮得令我們屏息驚嘆。",
    "vocabIndex": 6
  },
  {
    "q": "Buying expensive baby clothes before the baby is even on the way is like ______.",
    "options": [
      "having a dull ache",
      "taking a deep breath",
      "putting the cart before the horse",
      "keeping at bay"
    ],
    "answer": 2,
    "cn": "在懷孕前就先買昂貴的嬰兒衣服簡直是本末倒置。",
    "vocabIndex": 7
  },
  {
    "q": "After sprinting fast across the playground, the tired boy sat down to ______.",
    "options": [
      "put the cart before the horse",
      "catch his breath",
      "chill out",
      "bleed them dry"
    ],
    "answer": 1,
    "cn": "在操場上快步衝刺後，疲倦的男孩坐下來喘口氣／歇歇腳。",
    "vocabIndex": 6
  },
  {
    "q": "The excited swimmers held their breath and ______ before jumping into the pool.",
    "options": [
      "kicked the bucket",
      "hit a brick wall",
      "put the cart before the horse",
      "took a deep breath"
    ],
    "answer": 3,
    "cn": "興奮的泳客們在跳入泳池前屏住呼吸並深深吸了一口氣。",
    "vocabIndex": 6
  },
  {
    "q": "The sweet little girl ran around the house pushing her mini toy ______ with dolls.",
    "options": [
      "chimney",
      "cattle",
      "shopping cart",
      "ache"
    ],
    "answer": 2,
    "cn": "可愛的小女孩推著裝滿洋娃娃的迷你玩具購物手推車在房子裡跑來跑去。",
    "vocabIndex": 7
  },
  {
    "q": "During the scary part of the ghost story, every child in the room ______.",
    "options": [
      "held their breath",
      "put the cart before the horse",
      "bled them dry",
      "caught a chill"
    ],
    "answer": 0,
    "cn": "在鬼故事最可怕的情節時，房間裡的每個孩子都屏住了呼吸。",
    "vocabIndex": 6
  },
  {
    "q": "Painting the classroom with bright yellow and blue can ______ into the old school.",
    "options": [
      "put the cart before the horse",
      "hit a brick wall",
      "breathe new life",
      "bleed dry"
    ],
    "answer": 2,
    "cn": "用明亮的黃色和藍色粉刷教室，能為這所老舊的學校注入嶄新活力。",
    "vocabIndex": 6
  }
];

const LOOKUP = {
  "acceptable": {
    "pos": "adj.",
    "en_def": "able to be agreed on or approved of; satisfactory",
    "cn_def": "可接受的；令人滿意的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to be agreed on or approved of; satisfactory",
        "cn_def": "可接受的；令人滿意的"
      }
    ]
  },
  "accept": {
    "pos": "v.",
    "en_def": "to consent to receive something offered; to believe or come to recognize",
    "cn_def": "接受；答應；承認（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to consent to receive something offered; to believe or come to recognize",
        "cn_def": "接受；答應；承認（動詞）"
      }
    ]
  },
  "acceptance": {
    "pos": "n.",
    "en_def": "the action of consenting to receive or undertake something; approval",
    "cn_def": "接受；認同；錄取通知（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of consenting to receive or undertake something; approval",
        "cn_def": "接受；認同；錄取通知（不可數/可數）"
      }
    ]
  },
  "ache": {
    "pos": "n.",
    "en_def": "a continuous or prolonged dull pain in a part of one's body",
    "cn_def": "隱隱作痛；持續鈍痛（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a continuous or prolonged dull pain in a part of one's body",
        "cn_def": "隱隱作痛；持續鈍痛（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to suffer from a continuous dull pain; to feel intense desire or longing",
        "cn_def": "疼痛；酸痛；極度渴望（動詞）"
      }
    ]
  },
  "breath": {
    "pos": "n.",
    "en_def": "the air inhaled and exhaled in respiration (uncountable/countable)",
    "cn_def": "呼吸；氣息；一口氣（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the air inhaled and exhaled in respiration (uncountable/countable)",
        "cn_def": "呼吸；氣息；一口氣（不可數/可數）"
      }
    ]
  },
  "breathe": {
    "pos": "v.",
    "en_def": "to take air into the lungs and expel it; to be alive",
    "cn_def": "呼吸；吸入（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take air into the lungs and expel it; to be alive",
        "cn_def": "呼吸；吸入（動詞）"
      }
    ]
  },
  "cart": {
    "pos": "n.",
    "en_def": "a small wheeled vehicle pushed or pulled by hand or beast",
    "cn_def": "手推車；採購推車；馬車（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small wheeled vehicle pushed or pulled by hand or beast",
        "cn_def": "手推車；採購推車；馬車（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to convey or carry something heavy in a cart or vehicle",
        "cn_def": "運送；搬運（動詞）"
      }
    ]
  },
  "cattle": {
    "pos": "n.",
    "en_def": "large domesticated animals with horns and hooves, kept on farms for meat or milk",
    "cn_def": "牛群；牲口（集合名詞，複數動詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "large domesticated animals with horns and hooves, kept on farms for meat or milk",
        "cn_def": "牛群；牲口（集合名詞，複數動詞）"
      }
    ]
  },
  "chimney": {
    "pos": "n.",
    "en_def": "a vertical channel or pipe that carries smoke up from a fireplace through a roof",
    "cn_def": "煙囪（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a vertical channel or pipe that carries smoke up from a fireplace through a roof",
        "cn_def": "煙囪（可數）"
      }
    ]
  },
  "collection": {
    "pos": "n.",
    "en_def": "a group of objects collected together, or a fashion season line",
    "cn_def": "收藏品；系列商品；募集（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a group of objects collected together, or a fashion season line",
        "cn_def": "收藏品；系列商品；募集（可數/不可數）"
      }
    ]
  },
  "collect": {
    "pos": "v.",
    "en_def": "to bring together things from various places; to accumulate",
    "cn_def": "收集；聚集；領取（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to bring together things from various places; to accumulate",
        "cn_def": "收集；聚集；領取（動詞）"
      }
    ]
  },
  "collector": {
    "pos": "n.",
    "en_def": "a person who collects things of a specified type, professionally or as a hobby",
    "cn_def": "收藏家；收集者；收費員（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who collects things of a specified type, professionally or as a hobby",
        "cn_def": "收藏家；收集者；收費員（可數）"
      }
    ]
  },
  "connect": {
    "pos": "v.",
    "en_def": "to join together so as to provide access or communication",
    "cn_def": "連結；接通；聯絡（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to join together so as to provide access or communication",
        "cn_def": "連結；接通；聯絡（動詞）"
      }
    ]
  },
  "connection": {
    "pos": "n.",
    "en_def": "a relationship in which a person, thing, or idea is linked with something else",
    "cn_def": "關聯；人脈；轉乘連線（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a relationship in which a person, thing, or idea is linked with something else",
        "cn_def": "關聯；人脈；轉乘連線（可數/不可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
