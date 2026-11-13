// Part 1 Quiz Data: aboard – chilly
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 1-1 - aboard – chilly",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "aboard",
    "pos": "prep.",
    "cn_def": "在（船、飛機、車）上；登上",
    "en_def": "on or onto a ship, aircraft, train, or bus",
    "sentence": "Before the international flight took off for London, all passengers were asked to show their boarding passes and step {{BLANK}} the airplane.",
    "cn": "在飛往倫敦的國際航班起飛之前，所有乘客都被要求出示登機證並登上飛機。"
  },
  {
    "word": "aboard",
    "pos": "adv.",
    "cn_def": "在船（車、飛機）上；上車（船）",
    "en_def": "on or into a vehicle",
    "sentence": "The ship was about to leave the harbor, so the tourists quickly climbed {{BLANK}} to begin their vacation.",
    "cn": "船隻即將離開港口，因此遊客們迅速爬上船開始他們的假期。"
  },
  {
    "word": "Welcome aboard",
    "pos": "phr.",
    "cn_def": "歡迎加入；歡迎搭乘",
    "en_def": "a greeting welcoming someone to a team, ship, or company",
    "sentence": "On my very first day at the technology company, the manager shook my hand warmly and said, \"{{BLANK}}, we are glad to have you on our team!\"",
    "cn": "在我到這家科技公司上班的第一天，經理熱情地和我握手並說：「歡迎加入，我們很高興你成為我們團隊的一員！」"
  },
  {
    "word": "advised",
    "pos": "v.",
    "cn_def": "建議；勸告（動詞）",
    "en_def": "to offer suggestions or recommendations about what to do [advise, advised, advised]",
    "sentence": "Because the weather forecast predicted heavy rain tomorrow, our experienced teacher {{BLANK}} all of us to bring an umbrella and a warm raincoat.",
    "cn": "因為天氣預報預測明天會下大雨，我們經驗豐富的老師建議我們所有人帶一把雨傘和一件保暖雨衣。"
  },
  {
    "word": "advise",
    "pos": "v.",
    "cn_def": "正式通知；告知",
    "en_def": "to formally inform or notify someone of a fact [advise, advised, advised]",
    "sentence": "The airline agent promised to {{BLANK}} passengers of any schedule changes as soon as the storm passed.",
    "cn": "航空公司地勤人員承諾，一旦暴風雨過去，就會立即正式告知乘客任何班次變動。"
  },
  {
    "word": "advice",
    "pos": "n.",
    "cn_def": "建議；忠告（不可數名詞）",
    "en_def": "guidance or recommendations offered regarding choices (uncountable)",
    "sentence": "Whenever Mark faces difficult choices about his future career, he always visits his parents because they give him very sensible and helpful {{BLANK}}.",
    "cn": "每當馬克面臨關於未來職業的艱難抉擇時，他總是去拜訪父母，因為他們會給他非常明智且有用的建議。"
  },
  {
    "word": "adviser",
    "pos": "n.",
    "cn_def": "顧問；指導老師",
    "en_def": "an expert who gives formal advice in a specific area",
    "sentence": "During his college years in the United States, Jason regularly met with his academic {{BLANK}} to discuss his graduation requirements and course schedule.",
    "cn": "在美國就讀大學期間，傑森定期與他的學業指導顧問會面，討論他的畢業學分要求和課程表。"
  },
  {
    "word": "advise against",
    "pos": "v.phr.",
    "cn_def": "建議不要做…；勸阻…",
    "en_def": "to recommend that someone avoid a particular action",
    "sentence": "The doctor decided to {{BLANK}} eating raw seafood because it could easily cause severe stomach problems during the long journey.",
    "cn": "醫生決定建議不要吃生海鮮，因為在漫長的旅途中這很容易引起嚴重的腸胃問題。"
  },
  {
    "word": "audience",
    "pos": "n.",
    "cn_def": "觀眾；聽眾（集合名詞）",
    "en_def": "the assembled spectators or listeners at a public performance",
    "sentence": "After the young pianist finished her marvelous performance on stage, the entire {{BLANK}} stood up and clapped their hands enthusiastically.",
    "cn": "在年輕的女鋼琴家於舞台上結束她精彩的演奏後，全體觀眾起立並熱烈鼓掌。"
  },
  {
    "word": "audience",
    "pos": "n.",
    "cn_def": "（正式的）晉見；接見",
    "en_def": "a formal meeting with a monarch, pope, or other ruler",
    "sentence": "The foreign ambassador was extremely honored to have a private {{BLANK}} with the king at the royal palace.",
    "cn": "外交大使非常榮幸能在皇宮獲得國王的私下面對面接見。"
  },
  {
    "word": "basement",
    "pos": "n.",
    "cn_def": "地下室；地庫",
    "en_def": "the floor of a building that is partly or entirely below ground",
    "sentence": "During the heavy summer thunderstorm, water began to leak through the wall and accumulated quickly on the floor of our {{BLANK}}.",
    "cn": "在猛烈的夏季雷陣雨期間，水開始穿透牆壁滲漏，並迅速積聚在我們地下室的地板上。"
  },
  {
    "word": "bay",
    "pos": "n.",
    "cn_def": "海灣",
    "en_def": "a broad inlet of the sea where the land curves inward",
    "sentence": "On sunny weekend mornings, many local residents enjoy jogging along the sandy shore of the {{BLANK}} and watching the boats sail.",
    "cn": "在陽光明媚的週末早晨，許多當地居民喜歡沿著海灣的沙灘慢跑，欣賞船隻航行。"
  },
  {
    "word": "bay",
    "pos": "v.",
    "cn_def": "（獵犬或狼）吠叫；長嗥",
    "en_def": "to bark or howl with a deep, loud voice (esp. wolves/hounds) [bay, bayed, bayed]",
    "sentence": "As the silver full moon rose high in the dark night sky, the hungry wolves began to {{BLANK}} loudly in the woods.",
    "cn": "當銀色滿月高高升起在黑夜的天空中，飢餓的狼群開始在樹林裡大聲長嗥。"
  },
  {
    "word": "keep at bay",
    "pos": "v.phr.",
    "cn_def": "使…無法靠近；牽制；遏阻",
    "en_def": "to prevent someone or something dangerous from approaching",
    "sentence": "Eating a balanced diet and exercising regularly can help you {{BLANK}} many common illnesses during the cold winter season.",
    "cn": "均衡飲食和規律運動可以幫助你在寒冷的冬季牽制／遏阻許多常見疾病。"
  },
  {
    "word": "beast",
    "pos": "n.",
    "cn_def": "野獸；獸類",
    "en_def": "a large, wild, or dangerous four-footed animal",
    "sentence": "In the ancient fairy tale, brave villagers traveled deep into the dark mountain forest to hunt the dangerous and terrifying {{BLANK}}.",
    "cn": "在那則古老的童話故事中，勇敢的村民們深入黑暗的山林，去獵捕那隻危險而可怕的野獸。"
  },
  {
    "word": "beast",
    "pos": "n.",
    "cn_def": "難對付的事物；厲害強者（俚語）",
    "en_def": "an extraordinarily difficult, formidable, or powerful thing/person",
    "sentence": "Preparing for the national medical entrance exam is a whole different {{BLANK}}, demanding endless months of intense discipline.",
    "cn": "準備全國醫學院入學考試完全是另一回事（極具挑戰性的艱難任務），需要長達數月的高度自律。"
  },
  {
    "word": "canyon",
    "pos": "n.",
    "cn_def": "峽谷",
    "en_def": "a deep valley with steep rock sides, carved by a river",
    "sentence": "From the high lookout tower, the tourists admired the breathtaking scenery of the deep {{BLANK}} carved by the rushing river below.",
    "cn": "從高處的觀景台，遊客們讚嘆下方湍急河流所切割出的深邃峽谷的壯麗景色。"
  },
  {
    "word": "carpenter",
    "pos": "n.",
    "cn_def": "木工；木匠",
    "en_def": "a skilled craftsperson who builds and repairs wooden objects",
    "sentence": "Because the old wooden dining table was badly broken, my father hired a skilled {{BLANK}} to repair it and make four matching chairs.",
    "cn": "因為舊的木製餐桌損壞嚴重，我父親聘請了一位技藝精湛的木工來修理它並製作四張配套的椅子。"
  },
  {
    "word": "chill",
    "pos": "v.",
    "cn_def": "使冷卻；冷藏；變涼",
    "en_def": "to cool food or drink down, or to become pleasantly cold [chill, chilled, chilled]",
    "sentence": "Before our guests arrive for dinner tonight, please {{BLANK}} the white wine in the refrigerator so that it will taste refreshing.",
    "cn": "在今晚我們的客人抵達用餐之前，請先將白酒放進冰箱冷卻，這樣喝起來才會清爽。"
  },
  {
    "word": "chill",
    "pos": "n.",
    "cn_def": "寒意；著涼；寒顫",
    "en_def": "an unpleasant sensation of coldness in the air or body",
    "sentence": "As the cold northern wind began to blow through the open window, I suddenly felt an unpleasant {{BLANK}} on my skin.",
    "cn": "當寒冷的北風開始透過開著的窗戶吹進來時，我突然感到皮膚上一陣難受的寒意。"
  },
  {
    "word": "chill out",
    "pos": "v.phr.",
    "cn_def": "放鬆；冷靜下來",
    "en_def": "to relax completely and calm down from stress or anger",
    "sentence": "After working hard on the difficult project all week, Susan just wanted to stay home and {{BLANK}} on the couch.",
    "cn": "在辛苦處理了一整週的棘手專案後，蘇珊只想待在家裡並在沙發上好好放鬆。"
  },
  {
    "word": "chilly",
    "pos": "adj.",
    "cn_def": "寒冷的；冷颼颼的",
    "en_def": "noticeably and uncomfortably cold (of weather) [chilly, chillier, chilliest]",
    "sentence": "Even though the morning sunshine looked bright and inviting, the autumn air was quite {{BLANK}} outside, so remember to wear a jacket.",
    "cn": "雖然早晨的陽光看起來明亮誘人，但戶外的秋天天氣相當寒冷，所以記得穿上一件夾克。"
  },
  {
    "word": "chilly",
    "pos": "adj.",
    "cn_def": "冷淡的；不友善的",
    "en_def": "unfriendly or cold in manner or reception",
    "sentence": "When the uninvited visitor suddenly walked into the private meeting, he received a very {{BLANK}} reception from the company directors.",
    "cn": "當那位不速之客突然走進私人會議時，他遭到了公司董事們非常冷淡的對待與回應。"
  }
];

const MCQS = [
  {
    "q": "My wooden chair was broken, so I asked a skilled ______ to fix it for me.",
    "options": [
      "carpenter",
      "audience",
      "basement",
      "beast"
    ],
    "answer": 0,
    "cn": "我的木椅壞掉了，所以我請了一位技藝精湛的木工幫我修理它。",
    "vocabIndex": 17
  },
  {
    "q": "We went down the stairs to the dark ______ to look for the old boxes.",
    "options": [
      "adviser",
      "canyon",
      "bay",
      "basement"
    ],
    "answer": 3,
    "cn": "我們走下樓梯到黑暗的地下室去找舊箱子。",
    "vocabIndex": 10
  },
  {
    "q": "After the singer finished her song, the entire ______ clapped their hands happily.",
    "options": [
      "beast",
      "carpenter",
      "audience",
      "bay"
    ],
    "answer": 2,
    "cn": "在歌手唱完她的歌曲後，全場觀眾高興地拍手鼓掌。",
    "vocabIndex": 8
  },
  {
    "q": "My teacher gave me good ______ on how to study English every day.",
    "options": [
      "canyon",
      "advice",
      "beast",
      "basement"
    ],
    "answer": 1,
    "cn": "我的老師給了我關於如何每天學習英語的良好建議。",
    "vocabIndex": 5
  },
  {
    "q": "Many small fishing boats were resting quietly in the calm waters of the ______.",
    "options": [
      "advice",
      "audience",
      "carpenter",
      "bay"
    ],
    "answer": 3,
    "cn": "許多小型漁船靜靜地停靠在海灣平靜的水域中。",
    "vocabIndex": 11
  },
  {
    "q": "The children were scared because the story was about a large, hairy ______ living in the mountains.",
    "options": [
      "basement",
      "adviser",
      "beast",
      "canyon"
    ],
    "answer": 2,
    "cn": "孩子們很害怕，因為這個故事是關於一隻住在山裡的巨大多毛野獸。",
    "vocabIndex": 14
  },
  {
    "q": "We stood on the high rocks and looked down into the deep ______ below.",
    "options": [
      "canyon",
      "carpenter",
      "adviser",
      "audience"
    ],
    "answer": 0,
    "cn": "我們站在高高的岩石上，俯瞰下方深邃的峽谷。",
    "vocabIndex": 16
  },
  {
    "q": "When the king needed help to make laws, he talked to his trusted ______.",
    "options": [
      "advice",
      "adviser",
      "bay",
      "basement"
    ],
    "answer": 1,
    "cn": "當國王在制定法律需要協助時，他會與他信任的顧問商談。",
    "vocabIndex": 6
  },
  {
    "q": "Please put on a warm coat because there is a cold ______ in the night air.",
    "options": [
      "chill",
      "audience",
      "beast",
      "carpenter"
    ],
    "answer": 0,
    "cn": "請穿上一件保暖的外套，因為夜晚的空氣中有一股冷冽的寒意。",
    "vocabIndex": 18
  },
  {
    "q": "Adam works with wood and hammers all day because he is a professional ______.",
    "options": [
      "canyon",
      "carpenter",
      "bay",
      "basement"
    ],
    "answer": 1,
    "cn": "亞當整天跟木頭與鐵鎚為伍，因為他是一名專業的木匠。",
    "vocabIndex": 17
  },
  {
    "q": "There were more than five hundred people in the ______ watching the funny magic show.",
    "options": [
      "beast",
      "adviser",
      "advice",
      "audience"
    ],
    "answer": 3,
    "cn": "觀眾席上有五百多人正在觀看精彩有趣的魔術表演。",
    "vocabIndex": 8
  },
  {
    "q": "Our house has two floors above the ground and a large ______ under the ground.",
    "options": [
      "advice",
      "carpenter",
      "basement",
      "bay"
    ],
    "answer": 2,
    "cn": "我們的房子在地面上有兩層樓，地下還有一個寬敞的地下室。",
    "vocabIndex": 10
  },
  {
    "q": "We sat on the sand and watched the beautiful sunset over the blue ______.",
    "options": [
      "beast",
      "bay",
      "canyon",
      "audience"
    ],
    "answer": 1,
    "cn": "我們坐在沙灘上，欣賞著藍色海灣上美麗的夕陽。",
    "vocabIndex": 11
  },
  {
    "q": "The hungry ______ attacked the sheep on the farm and ran away into the woods.",
    "options": [
      "adviser",
      "basement",
      "beast",
      "carpenter"
    ],
    "answer": 2,
    "cn": "那隻飢餓的野獸襲擊了農場裡的羊，然後逃進了樹林裡。",
    "vocabIndex": 14
  },
  {
    "q": "If you do not know which computer to buy, you can ask David for some ______.",
    "options": [
      "bay",
      "canyon",
      "audience",
      "advice"
    ],
    "answer": 3,
    "cn": "如果你不知道該買哪台電腦，你可以向大衛尋求一些建議。",
    "vocabIndex": 5
  },
  {
    "q": "A fast river flows through the bottom of the rocky ______.",
    "options": [
      "canyon",
      "basement",
      "carpenter",
      "beast"
    ],
    "answer": 0,
    "cn": "一條湍急的河流流經這座多石峽谷的底部。",
    "vocabIndex": 16
  },
  {
    "q": "My university ______ helped me choose which classes to take this semester.",
    "options": [
      "bay",
      "advice",
      "adviser",
      "audience"
    ],
    "answer": 2,
    "cn": "我的大學導師／顧問協助我選擇這學期該修哪些課程。",
    "vocabIndex": 6
  },
  {
    "q": "When Tom stepped outside into the snow, he felt a sharp ______ across his face.",
    "options": [
      "carpenter",
      "basement",
      "canyon",
      "chill"
    ],
    "answer": 3,
    "cn": "當湯姆踏出戶外走進雪地時，他感到一股刺骨的寒意掠過臉龐。",
    "vocabIndex": 18
  },
  {
    "q": "The movie was so touching that many people in the ______ started to cry.",
    "options": [
      "audience",
      "beast",
      "bay",
      "adviser"
    ],
    "answer": 0,
    "cn": "這部電影非常感人，以至於觀眾席中的許多人都開始流淚。",
    "vocabIndex": 8
  },
  {
    "q": "Dad keeps his old tools and the washing machine down in the ______.",
    "options": [
      "advice",
      "basement",
      "carpenter",
      "canyon"
    ],
    "answer": 1,
    "cn": "爸爸將他的舊工具和洗衣機放在下方的地下室裡。",
    "vocabIndex": 10
  },
  {
    "q": "We need a ______ to make a new bookshelf for our living room.",
    "options": [
      "audience",
      "bay",
      "beast",
      "carpenter"
    ],
    "answer": 3,
    "cn": "我們需要一位木匠來為我們的客廳打造一個新的書架。",
    "vocabIndex": 17
  },
  {
    "q": "The hunter followed the footprints of the wild ______ in the mud.",
    "options": [
      "beast",
      "canyon",
      "advice",
      "basement"
    ],
    "answer": 0,
    "cn": "獵人在泥地中沿著野生野獸的腳印前進追蹤。",
    "vocabIndex": 14
  },
  {
    "q": "On Sundays, I like to stay on the sofa, listen to music, and just ______.",
    "options": [
      "keep at bay",
      "chill out",
      "welcome aboard",
      "advise against"
    ],
    "answer": 1,
    "cn": "在星期天，我喜歡待在沙發上、聽聽音樂，好好放鬆一下。",
    "vocabIndex": 20
  },
  {
    "q": "Because the mountain road is icy and dangerous today, the police ______ driving there.",
    "options": [
      "chill out",
      "keep at bay",
      "advise against",
      "welcome aboard"
    ],
    "answer": 2,
    "cn": "因為今天山路結冰且危險，警方建議不要開車前往該處。",
    "vocabIndex": 7
  },
  {
    "q": "The soldiers built a high fire during the dark night to ______ dangerous animals.",
    "options": [
      "chill out",
      "keep at bay",
      "advise against",
      "welcome aboard"
    ],
    "answer": 1,
    "cn": "士兵們在黑夜中升起大火，以牽制並阻擋危險動物靠近。",
    "vocabIndex": 13
  }
];

const LOOKUP = {
  "aboard": {
    "pos": "prep.",
    "en_def": "on or onto a ship, aircraft, train, or bus",
    "cn_def": "在（船、飛機、車）上；登上",
    "combined": [
      {
        "pos": "prep.",
        "en_def": "on or onto a ship, aircraft, train, or bus",
        "cn_def": "在（船、飛機、車）上；登上"
      },
      {
        "pos": "adv.",
        "en_def": "on or into a vehicle",
        "cn_def": "在船（車、飛機）上；上車（船）"
      }
    ]
  },
  "welcome aboard": {
    "pos": "phr.",
    "en_def": "a greeting welcoming someone to a team, ship, or company",
    "cn_def": "歡迎加入；歡迎搭乘",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a greeting welcoming someone to a team, ship, or company",
        "cn_def": "歡迎加入；歡迎搭乘"
      }
    ]
  },
  "advised": {
    "pos": "v.",
    "en_def": "to offer suggestions or recommendations about what to do [advise, advised, advised]",
    "cn_def": "建議；勸告（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to offer suggestions or recommendations about what to do [advise, advised, advised]",
        "cn_def": "建議；勸告（動詞）"
      }
    ]
  },
  "advise": {
    "pos": "v.",
    "en_def": "to offer suggestions or recommendations about what to do [advise, advised, advised]",
    "cn_def": "建議；勸告（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to offer suggestions or recommendations about what to do [advise, advised, advised]",
        "cn_def": "建議；勸告（動詞）"
      },
      {
        "pos": "v.",
        "en_def": "to formally inform or notify someone of a fact [advise, advised, advised]",
        "cn_def": "正式通知；告知"
      }
    ]
  },
  "advice": {
    "pos": "n.",
    "en_def": "guidance or recommendations offered regarding choices (uncountable)",
    "cn_def": "建議；忠告（不可數名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "guidance or recommendations offered regarding choices (uncountable)",
        "cn_def": "建議；忠告（不可數名詞）"
      }
    ]
  },
  "adviser": {
    "pos": "n.",
    "en_def": "an expert who gives formal advice in a specific area",
    "cn_def": "顧問；指導老師",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an expert who gives formal advice in a specific area",
        "cn_def": "顧問；指導老師"
      }
    ]
  },
  "advise against": {
    "pos": "v.phr.",
    "en_def": "to recommend that someone avoid a particular action",
    "cn_def": "建議不要做…；勸阻…",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to recommend that someone avoid a particular action",
        "cn_def": "建議不要做…；勸阻…"
      }
    ]
  },
  "audience": {
    "pos": "n.",
    "en_def": "the assembled spectators or listeners at a public performance",
    "cn_def": "觀眾；聽眾（集合名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the assembled spectators or listeners at a public performance",
        "cn_def": "觀眾；聽眾（集合名詞）"
      },
      {
        "pos": "n.",
        "en_def": "a formal meeting with a monarch, pope, or other ruler",
        "cn_def": "（正式的）晉見；接見"
      }
    ]
  },
  "basement": {
    "pos": "n.",
    "en_def": "the floor of a building that is partly or entirely below ground",
    "cn_def": "地下室；地庫",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the floor of a building that is partly or entirely below ground",
        "cn_def": "地下室；地庫"
      }
    ]
  },
  "bay": {
    "pos": "n.",
    "en_def": "a broad inlet of the sea where the land curves inward",
    "cn_def": "海灣",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a broad inlet of the sea where the land curves inward",
        "cn_def": "海灣"
      },
      {
        "pos": "v.",
        "en_def": "to bark or howl with a deep, loud voice (esp. wolves/hounds) [bay, bayed, bayed]",
        "cn_def": "（獵犬或狼）吠叫；長嗥"
      }
    ]
  },
  "keep at bay": {
    "pos": "v.phr.",
    "en_def": "to prevent someone or something dangerous from approaching",
    "cn_def": "使…無法靠近；牽制；遏阻",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to prevent someone or something dangerous from approaching",
        "cn_def": "使…無法靠近；牽制；遏阻"
      }
    ]
  },
  "beast": {
    "pos": "n.",
    "en_def": "a large, wild, or dangerous four-footed animal",
    "cn_def": "野獸；獸類",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large, wild, or dangerous four-footed animal",
        "cn_def": "野獸；獸類"
      },
      {
        "pos": "n.",
        "en_def": "an extraordinarily difficult, formidable, or powerful thing/person",
        "cn_def": "難對付的事物；厲害強者（俚語）"
      }
    ]
  },
  "canyon": {
    "pos": "n.",
    "en_def": "a deep valley with steep rock sides, carved by a river",
    "cn_def": "峽谷",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a deep valley with steep rock sides, carved by a river",
        "cn_def": "峽谷"
      }
    ]
  },
  "carpenter": {
    "pos": "n.",
    "en_def": "a skilled craftsperson who builds and repairs wooden objects",
    "cn_def": "木工；木匠",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a skilled craftsperson who builds and repairs wooden objects",
        "cn_def": "木工；木匠"
      }
    ]
  },
  "chill": {
    "pos": "v.",
    "en_def": "to cool food or drink down, or to become pleasantly cold [chill, chilled, chilled]",
    "cn_def": "使冷卻；冷藏；變涼",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cool food or drink down, or to become pleasantly cold [chill, chilled, chilled]",
        "cn_def": "使冷卻；冷藏；變涼"
      },
      {
        "pos": "n.",
        "en_def": "an unpleasant sensation of coldness in the air or body",
        "cn_def": "寒意；著涼；寒顫"
      }
    ]
  },
  "chill out": {
    "pos": "v.phr.",
    "en_def": "to relax completely and calm down from stress or anger",
    "cn_def": "放鬆；冷靜下來",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to relax completely and calm down from stress or anger",
        "cn_def": "放鬆；冷靜下來"
      }
    ]
  },
  "chilly": {
    "pos": "adj.",
    "en_def": "noticeably and uncomfortably cold (of weather) [chilly, chillier, chilliest]",
    "cn_def": "寒冷的；冷颼颼的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "noticeably and uncomfortably cold (of weather) [chilly, chillier, chilliest]",
        "cn_def": "寒冷的；冷颼颼的"
      },
      {
        "pos": "adj.",
        "en_def": "unfriendly or cold in manner or reception",
        "cn_def": "冷淡的；不友善的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
