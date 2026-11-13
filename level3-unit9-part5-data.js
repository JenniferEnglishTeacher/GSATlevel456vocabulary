// Part 5 Quiz Data: peep – presenter
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 9-5 - peep – presenter",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "peep",
    "pos": "v.",
    "cn_def": "偷看；窺視；微微露出；唧唧叫（動詞）",
    "en_def": "to look quickly and furtively at something, especially through a narrow opening; to make a high squeak",
    "sentence": "The curious little boy knelt down quietly on the carpet to {{BLANK}} through the keyhole of the locked playroom.",
    "cn": "好奇的小男孩悄悄跪在地毯上，透過上鎖遊戲室的鑰匙孔偷看。"
  },
  {
    "word": "peep",
    "pos": "n.",
    "cn_def": "偷看；窺視；微弱聲音；嗶嗶聲（可數）",
    "en_def": "a quick or furtive look; a brief high-pitched sound or squeak",
    "sentence": "Before our mother officially opened the birthday gift boxes, my excited sister took a quick {{BLANK}} inside.",
    "cn": "在我們母親正式打開生日禮物盒之前，我興奮的妹妹悄悄往裡面偷看了一看。"
  },
  {
    "word": "peeping Tom",
    "pos": "n.phr.",
    "cn_def": "偷窺狂；偷窺者（源自英國高蒂娃夫人傳說）",
    "en_def": "a person who derives pleasure from secretly watching other people undressing or engaging in private activities",
    "sentence": "The suspicious man was arrested by the local police after residents reported a {{BLANK}} lurking outside ground-floor windows.",
    "cn": "在居民通報有一名偷窺狂潛伏在一樓窗戶外之後，那名可疑男子被當地警察逮捕了。"
  },
  {
    "word": "pipe",
    "pos": "n.",
    "cn_def": "管子；導管；水管；煙斗；管樂器（可數）",
    "en_def": "a tube of metal, plastic, or other material used to convey water, gas, or other substances; a device for smoking tobacco",
    "sentence": "During the freezing winter frost, the underground water {{BLANK}} suddenly burst and flooded the neighborhood street.",
    "cn": "在酷寒的嚴冬霜凍期間，地下水管突然爆裂並淹沒了社區街道。"
  },
  {
    "word": "pipe",
    "pos": "v.",
    "cn_def": "用管道輸送；用尖細聲音說話（動詞）",
    "en_def": "to convey liquid or gas through a pipe; to speak in a high voice",
    "sentence": "Engineers designed a modern pipeline network to {{BLANK}} fresh drinking water from the reservoir to mountain villages.",
    "cn": "工程師設計了一個現代化的管道網絡，將新鮮飲用水從水庫用管線輸送到山區村莊。"
  },
  {
    "word": "pipe dream",
    "pos": "n.phr.",
    "cn_def": "白日夢；不可實現的幻想",
    "en_def": "an unattainable or fanciful hope or scheme",
    "sentence": "Building a luxury space hotel on the moon within five years was dismissed by top scientists as a mere {{BLANK}}.",
    "cn": "頂尖科學家認為，五年內在月球上建造豪華太空飯店純屬不可實現的白日夢。"
  },
  {
    "word": "piping hot",
    "pos": "adj.phr.",
    "cn_def": "滾燙的；熱騰騰的（形容食物或湯）",
    "en_def": "very hot (especially of food or drink)",
    "sentence": "On chilly winter evenings, there is nothing more comforting than enjoying a bowl of {{BLANK}} chicken noodle soup.",
    "cn": "在寒冷的冬日夜晚，沒有什麼比享用一碗熱騰騰滾燙的雞肉麵條湯更令人身心舒暢的了。"
  },
  {
    "word": "potato",
    "pos": "n.",
    "cn_def": "馬鈴薯；洋芋（可數，複數 potatoes）",
    "en_def": "a starchy plant tuber that is one of the most important food crops worldwide",
    "sentence": "The controversial new tax reform bill quickly became a political hot {{BLANK}} that neither party wanted to handle.",
    "cn": "那項極具爭議的新稅制改革法案迅速成為了一個政治上的燙手山芋，雙方政黨都不願意碰。"
  },
  {
    "word": "couch potato",
    "pos": "n.phr.",
    "cn_def": "電視迷；整天窩在沙發看電視的人；懶骨頭",
    "en_def": "a person who takes little or no exercise and watches a lot of television",
    "sentence": "Instead of staying indoors as a lazy {{BLANK}} all weekend, you should go outside to ride your bicycle in the sunshine.",
    "cn": "與其整個週末當個待在室內的懶散沙發馬鈴薯／電視迷懶骨頭，你應該到戶外的陽光下騎自行車。"
  },
  {
    "word": "hot potato",
    "pos": "n.phr.",
    "cn_def": "燙手山芋；難以處理的棘手問題",
    "en_def": "a controversial issue or awkward situation that is difficult to handle",
    "sentence": "The sudden corruption scandal among city council members became a dangerous political {{BLANK}} for the mayor during reelection.",
    "cn": "市議員突然爆發的貪腐醜聞成為了市長連任期間極其危險的政治燙手山芋。"
  },
  {
    "word": "small potatoes",
    "pos": "n.phr.",
    "cn_def": "微不足道的事物；小人物；微小數額",
    "en_def": "something insignificant, trivial, or of little importance",
    "sentence": "Losing ten dollars on a lottery ticket was just {{BLANK}} compared to his massive business profits that quarter.",
    "cn": "在彩券上損失十美元與他那季龐大的商業利潤相比，只是微不足道的小事。"
  },
  {
    "word": "presentation",
    "pos": "n.",
    "cn_def": "簡報；演講；呈現；頒獎典禮（可數/不可數）",
    "en_def": "a speech or talk in which a new idea or product is shown and explained; awarding ceremony",
    "sentence": "The university student spent three sleepless nights preparing colorful slides to give a persuasive {{BLANK}} about renewable solar energy.",
    "cn": "那名大學生熬了三個通宵製作精美的投影片，就可再生太陽能進行了一場極具說服力的簡報／報告。"
  },
  {
    "word": "present",
    "pos": "v.",
    "cn_def": "呈現；發表；贈送；引見（動詞，/prɪˈzent/）",
    "en_def": "to introduce or show formally; to offer or give a gift or award",
    "sentence": "The brilliant young scientist was invited on stage to {{BLANK}} her innovative medical research findings to international doctors.",
    "cn": "那位才華洋溢的年輕科學家受邀上台，向國際醫師們發表／呈現她創新的醫學研究成果。"
  },
  {
    "word": "presenter",
    "pos": "n.",
    "cn_def": "主持人；報告者；簡報者（可數）",
    "en_def": "a person who introduces a television or radio show, or who gives a formal presentation",
    "sentence": "The popular television news {{BLANK}} reported live from the flood area with admirable calm and clear articulation.",
    "cn": "那位受歡迎的電視新聞主播／主持人以令人讚賞的冷靜和清晰的咬字在洪災現場進行了現場直播。"
  }
];

const MCQS = [
  {
    "q": "The curious girl took a quick ______ through the small hole in the wooden fence.",
    "options": [
      "potato",
      "pipe",
      "peep",
      "presenter"
    ],
    "answer": 2,
    "cn": "好奇的女孩透過木柵欄上的小孔快速偷看了一看。",
    "vocabIndex": 0
  },
  {
    "q": "Cold clean water flows through the underground iron ______ to our bathroom sink.",
    "options": [
      "pipe",
      "potato",
      "peep",
      "presentation"
    ],
    "answer": 0,
    "cn": "冰涼乾淨的水透過地下的鐵水管流到我們浴室的洗手台。",
    "vocabIndex": 3
  },
  {
    "q": "Mom baked a sweet yellow ______ in the oven and topped it with creamy butter.",
    "options": [
      "pipe",
      "peep",
      "presenter",
      "potato"
    ],
    "answer": 3,
    "cn": "媽媽在烤箱裡烤了一顆黃馬鈴薯，並在上面塗上濃郁的奶油。",
    "vocabIndex": 7
  },
  {
    "q": "Jack used colorful computer slides to give a short ______ about tigers in class.",
    "options": [
      "pipe",
      "presentation",
      "potato",
      "peep"
    ],
    "answer": 1,
    "cn": "傑克用彩色電腦投影片在課堂上做了一次關於老虎的簡短簡報報告。",
    "vocabIndex": 11
  },
  {
    "q": "The morning television news ______ smiled at the camera and said hello to everyone.",
    "options": [
      "potato",
      "peep",
      "pipe",
      "presenter"
    ],
    "answer": 3,
    "cn": "晨間電視新聞主播／主持人對著鏡頭微笑，向大家問好。",
    "vocabIndex": 13
  },
  {
    "q": "We could not hear a single ______ from the baby after she fell fast asleep.",
    "options": [
      "potato",
      "pipe",
      "peep",
      "presenter"
    ],
    "answer": 2,
    "cn": "在小嬰兒熟睡之後，我們聽不到她發出一丁點聲音。",
    "vocabIndex": 0
  },
  {
    "q": "Grandpa sat outside in his garden chair while smoking his tobacco ______.",
    "options": [
      "pipe",
      "presentation",
      "presenter",
      "potato"
    ],
    "answer": 0,
    "cn": "爺爺坐在花園椅子上抽著他的煙草煙斗。",
    "vocabIndex": 3
  },
  {
    "q": "You can boil and mash these fresh white ______ with a little warm milk.",
    "options": [
      "pipes",
      "potatoes",
      "peeps",
      "presentations"
    ],
    "answer": 1,
    "cn": "你可以將這些新鮮的白馬鈴薯煮熟並加入少許溫牛奶壓成泥。",
    "vocabIndex": 7
  },
  {
    "q": "Tomorrow is the annual award ______ ceremony where top soccer players receive medals.",
    "options": [
      "peep",
      "pipe",
      "presentation",
      "potato"
    ],
    "answer": 2,
    "cn": "明天是一年一度的頒獎典禮，頂尖足球員將獲頒獎牌。",
    "vocabIndex": 11
  },
  {
    "q": "The keynote ______ explained the new science invention clearly to the students.",
    "options": [
      "pipe",
      "potato",
      "peep",
      "presenter"
    ],
    "answer": 3,
    "cn": "主講簡報者／報告人向學生們清楚地解釋了這項新的科學發明。",
    "vocabIndex": 13
  },
  {
    "q": "The baby chick opened its little yellow beak to ______ softly for food.",
    "options": [
      "peep",
      "pipe",
      "present",
      "boil"
    ],
    "answer": 0,
    "cn": "那隻小雞張開黃色的小嘴，輕聲地唧唧叫要食物吃。",
    "vocabIndex": 0
  },
  {
    "q": "The school will ______ music through loud speakers into every classroom at noon.",
    "options": [
      "peep",
      "pipe",
      "present",
      "bake"
    ],
    "answer": 1,
    "cn": "學校中午將透過擴音器把音樂傳送／播送到每個教室裡。",
    "vocabIndex": 3
  },
  {
    "q": "The little boy tried to ______ through the bedroom door to see his gifts.",
    "options": [
      "mash",
      "pipe",
      "present",
      "peep"
    ],
    "answer": 3,
    "cn": "小男孩試圖透過臥室房門偷看／窺視以尋找他的禮物。",
    "vocabIndex": 0
  },
  {
    "q": "Our team will ______ our history project to the class next Tuesday.",
    "options": [
      "peep",
      "present",
      "boil",
      "pipe"
    ],
    "answer": 1,
    "cn": "我們團隊將在下週二向全班報告發表我們的歷史專案。",
    "vocabIndex": 12
  },
  {
    "q": "When the sun rises, bright yellow flowers begin to ______ out from the green grass.",
    "options": [
      "peep",
      "pipe",
      "present",
      "bake"
    ],
    "answer": 0,
    "cn": "當太陽升起時，亮黃色的花朵開始從綠草中探出頭微微露出。",
    "vocabIndex": 0
  },
  {
    "q": "The principal will ______ a golden trophy to the winning basketball team.",
    "options": [
      "peep",
      "pipe",
      "present",
      "mash"
    ],
    "answer": 2,
    "cn": "校長將向獲勝的籃球隊頒發／贈予一座金獎盃。",
    "vocabIndex": 12
  },
  {
    "q": "The angry teacher told the noisy students to ______ down and read quietly.",
    "options": [
      "pipe",
      "present",
      "peep",
      "boil"
    ],
    "answer": 0,
    "cn": "憤怒的老師叫吵鬧的學生安靜下來，安靜地閱讀。",
    "vocabIndex": 3
  },
  {
    "q": "Be careful when drinking this bowl of soup because it is ______.",
    "options": [
      "small potatoes",
      "piping hot",
      "couch potato",
      "hot potato"
    ],
    "answer": 1,
    "cn": "喝這碗湯時要小心，因為它是滾燙熱騰騰的。",
    "vocabIndex": 6
  },
  {
    "q": "Grandma took the apple pie out of the oven and served it ______ to the kids.",
    "options": [
      "small potatoes",
      "couch potato",
      "piping hot",
      "hot potato"
    ],
    "answer": 2,
    "cn": "祖母將蘋果派從烤箱中取出，熱騰騰地端給孩子們吃。",
    "vocabIndex": 6
  },
  {
    "q": "The fresh tea was ______ so Peter had to wait a few minutes before tasting it.",
    "options": [
      "small potatoes",
      "couch potato",
      "hot potato",
      "piping hot"
    ],
    "answer": 3,
    "cn": "剛泡好的茶滾燙無比，所以彼得必須等幾分鐘才能品嚐。",
    "vocabIndex": 6
  },
  {
    "q": "Do not lie on the sofa watching TV all day like a lazy ______.",
    "options": [
      "small potatoes",
      "hot potato",
      "couch potato",
      "pipe dream"
    ],
    "answer": 2,
    "cn": "不要像個懶惰的沙發馬鈴薯／電視迷懶骨頭那樣整天躺在沙發上看電視。",
    "vocabIndex": 8
  },
  {
    "q": "The tax problem was a political ______ that nobody in parliament wanted to discuss.",
    "options": [
      "couch potato",
      "hot potato",
      "small potatoes",
      "pipe dream"
    ],
    "answer": 1,
    "cn": "稅收問題是一個議會裡沒有人想碰的政治燙手山芋。",
    "vocabIndex": 9
  },
  {
    "q": "Losing five cents is just ______ so you should not feel sad about it.",
    "options": [
      "small potatoes",
      "couch potato",
      "hot potato",
      "Peeping Tom"
    ],
    "answer": 0,
    "cn": "弄丟五分錢只是微不足道的小事，所以你不應該為此感到難過。",
    "vocabIndex": 10
  },
  {
    "q": "Flying to Mars next summer is just an impossible ______ that cannot happen.",
    "options": [
      "couch potato",
      "small potatoes",
      "hot potato",
      "pipe dream"
    ],
    "answer": 3,
    "cn": "明年夏天飛往火星純粹是個不可能實現的空想白日夢。",
    "vocabIndex": 5
  },
  {
    "q": "The police caught a creepy ______ who was looking into ground-floor windows at night.",
    "options": [
      "pipe dream",
      "couch potato",
      "Peeping Tom",
      "hot potato"
    ],
    "answer": 2,
    "cn": "警方抓到了一名夜間窺視一樓窗戶的令人發毛的偷窺狂。",
    "vocabIndex": 2
  }
];

const LOOKUP = {
  "peep": {
    "pos": "v.",
    "en_def": "to look quickly and furtively at something, especially through a narrow opening; to make a high squeak",
    "cn_def": "偷看；窺視；微微露出；唧唧叫（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to look quickly and furtively at something, especially through a narrow opening; to make a high squeak",
        "cn_def": "偷看；窺視；微微露出；唧唧叫（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a quick or furtive look; a brief high-pitched sound or squeak",
        "cn_def": "偷看；窺視；微弱聲音；嗶嗶聲（可數）"
      }
    ]
  },
  "peeping tom": {
    "pos": "n.phr.",
    "en_def": "a person who derives pleasure from secretly watching other people undressing or engaging in private activities",
    "cn_def": "偷窺狂；偷窺者（源自英國高蒂娃夫人傳說）",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "a person who derives pleasure from secretly watching other people undressing or engaging in private activities",
        "cn_def": "偷窺狂；偷窺者（源自英國高蒂娃夫人傳說）"
      }
    ]
  },
  "pipe": {
    "pos": "n.",
    "en_def": "a tube of metal, plastic, or other material used to convey water, gas, or other substances; a device for smoking tobacco",
    "cn_def": "管子；導管；水管；煙斗；管樂器（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a tube of metal, plastic, or other material used to convey water, gas, or other substances; a device for smoking tobacco",
        "cn_def": "管子；導管；水管；煙斗；管樂器（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to convey liquid or gas through a pipe; to speak in a high voice",
        "cn_def": "用管道輸送；用尖細聲音說話（動詞）"
      }
    ]
  },
  "pipe dream": {
    "pos": "n.phr.",
    "en_def": "an unattainable or fanciful hope or scheme",
    "cn_def": "白日夢；不可實現的幻想",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "an unattainable or fanciful hope or scheme",
        "cn_def": "白日夢；不可實現的幻想"
      }
    ]
  },
  "piping hot": {
    "pos": "adj.phr.",
    "en_def": "very hot (especially of food or drink)",
    "cn_def": "滾燙的；熱騰騰的（形容食物或湯）",
    "combined": [
      {
        "pos": "adj.phr.",
        "en_def": "very hot (especially of food or drink)",
        "cn_def": "滾燙的；熱騰騰的（形容食物或湯）"
      }
    ]
  },
  "potato": {
    "pos": "n.",
    "en_def": "a starchy plant tuber that is one of the most important food crops worldwide",
    "cn_def": "馬鈴薯；洋芋（可數，複數 potatoes）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a starchy plant tuber that is one of the most important food crops worldwide",
        "cn_def": "馬鈴薯；洋芋（可數，複數 potatoes）"
      }
    ]
  },
  "couch potato": {
    "pos": "n.phr.",
    "en_def": "a person who takes little or no exercise and watches a lot of television",
    "cn_def": "電視迷；整天窩在沙發看電視的人；懶骨頭",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "a person who takes little or no exercise and watches a lot of television",
        "cn_def": "電視迷；整天窩在沙發看電視的人；懶骨頭"
      }
    ]
  },
  "hot potato": {
    "pos": "n.phr.",
    "en_def": "a controversial issue or awkward situation that is difficult to handle",
    "cn_def": "燙手山芋；難以處理的棘手問題",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "a controversial issue or awkward situation that is difficult to handle",
        "cn_def": "燙手山芋；難以處理的棘手問題"
      }
    ]
  },
  "small potatoes": {
    "pos": "n.phr.",
    "en_def": "something insignificant, trivial, or of little importance",
    "cn_def": "微不足道的事物；小人物；微小數額",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "something insignificant, trivial, or of little importance",
        "cn_def": "微不足道的事物；小人物；微小數額"
      }
    ]
  },
  "presentation": {
    "pos": "n.",
    "en_def": "a speech or talk in which a new idea or product is shown and explained; awarding ceremony",
    "cn_def": "簡報；演講；呈現；頒獎典禮（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a speech or talk in which a new idea or product is shown and explained; awarding ceremony",
        "cn_def": "簡報；演講；呈現；頒獎典禮（可數/不可數）"
      }
    ]
  },
  "present": {
    "pos": "v.",
    "en_def": "to introduce or show formally; to offer or give a gift or award",
    "cn_def": "呈現；發表；贈送；引見（動詞，/prɪˈzent/）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to introduce or show formally; to offer or give a gift or award",
        "cn_def": "呈現；發表；贈送；引見（動詞，/prɪˈzent/）"
      }
    ]
  },
  "presenter": {
    "pos": "n.",
    "en_def": "a person who introduces a television or radio show, or who gives a formal presentation",
    "cn_def": "主持人；報告者；簡報者（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who introduces a television or radio show, or who gives a formal presentation",
        "cn_def": "主持人；報告者；簡報者（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
