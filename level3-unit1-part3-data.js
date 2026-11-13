// Part 3 Quiz Data: fortune – owl
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 1-3 - fortune – owl",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "fortune",
    "pos": "n.",
    "cn_def": "好運；幸運（不可數）",
    "en_def": "chance or luck as an external force affecting human affairs",
    "sentence": "I had the good {{BLANK}} of receiving a scholarship to study in London.",
    "cn": "我有幸獲得獎學金前往倫敦留學。贏得這個獎項肯定會為我們全家帶來好運。"
  },
  {
    "word": "fortune",
    "pos": "n.",
    "cn_def": "鉅款；大筆財富（可數）",
    "en_def": "a large amount of money or valuable assets",
    "sentence": "The author managed to make a {{BLANK}} by writing popular fantasy novels for teenagers.",
    "cn": "那位作家靠著為青少年寫暢銷奇幻小說發了大財／賺得鉅款。"
  },
  {
    "word": "fortune",
    "pos": "n.",
    "cn_def": "命運；命途（可數/不可數）",
    "en_def": "a person's destiny or future condition",
    "sentence": "While visiting the busy night market, Susan decided to have her {{BLANK}} told by a famous palm reader.",
    "cn": "在逛熱鬧的夜市時，蘇珊決定請一位著名的手相師幫她算命。"
  },
  {
    "word": "fortunate",
    "pos": "adj.",
    "cn_def": "幸運的；僥倖的",
    "en_def": "favored by or involving good luck; lucky",
    "sentence": "We were extremely {{BLANK}} to find an open hotel room during the crowded festival.",
    "cn": "在擁擠的節日期間，我們極為幸運地找到了一間空的飯店房間。"
  },
  {
    "word": "misfortune",
    "pos": "n.",
    "cn_def": "不幸；厄運；逆境",
    "en_def": "bad luck, or an unfortunate event",
    "sentence": "He had the {{BLANK}} to lose his passport on the very first day of his trip.",
    "cn": "他非常不幸在旅行的第一天就弄丟了護照。"
  },
  {
    "word": "glory",
    "pos": "n.",
    "cn_def": "光榮；榮耀；壯麗",
    "en_def": "high renown or honor won by notable achievements, or magnificent beauty",
    "sentence": "The brave national athletes fought hard to win {{BLANK}} for their country in the Olympic Games.",
    "cn": "勇敢的國家運動員們奮力拚搏，在奧林匹克運動會上為國家贏得榮耀。"
  },
  {
    "word": "glorious",
    "pos": "adj.",
    "cn_def": "光榮的；輝煌的；極美好的",
    "en_def": "having or deserving fame; magnificent or delightful",
    "sentence": "The football team celebrated their {{BLANK}} victory after winning the intense championship match.",
    "cn": "足球隊在贏得激烈的冠軍賽後慶祝他們光榮的勝利。"
  },
  {
    "word": "hire",
    "pos": "v.",
    "cn_def": "僱用；聘請；租用",
    "en_def": "to employ someone for wages, or to pay for temporary use of something",
    "sentence": "Because the local police were busy, the family decided to {{BLANK}} a private detective to solve the mystery.",
    "cn": "因為當地警方很忙，這家人決定聘請一名私家偵探來解開謎團。"
  },
  {
    "word": "hire",
    "pos": "n.",
    "cn_def": "新進人員；僱用（可數/不可數）",
    "en_def": "a newly recruited employee, or the act of hiring",
    "sentence": "The manager introduced each new {{BLANK}} to all company departments on Monday morning.",
    "cn": "經理在週一早晨向所有公司部門介紹了每一位新進人員。"
  },
  {
    "word": "horns",
    "pos": "n.",
    "cn_def": "（牛、羊等動物的）角",
    "en_def": "a hard permanent pointed outgrowth on the head of cattle, sheep, or goats",
    "sentence": "The aggressive bull lowered its head to display its sharp {{BLANK}} to the warning crowd.",
    "cn": "那隻具攻擊性的公牛低下頭，向示警的人群展示其鋒利的獸角。"
  },
  {
    "word": "horn",
    "pos": "n.",
    "cn_def": "（汽車）喇叭；號角",
    "en_def": "an instrument sounding a warning in a vehicle, or a brass wind instrument",
    "sentence": "The impatient taxi driver began to honk his car {{BLANK}} repeatedly to clear the crowded intersection.",
    "cn": "那名不耐煩的計程車司機開始連續按他的汽車喇叭，以清理擁擠的路口。"
  },
  {
    "word": "take the bull by the horns",
    "pos": "v.phr.",
    "cn_def": "挺身面對困難；當機立斷",
    "en_def": "to deal directly and bravely with a difficult or dangerous situation",
    "sentence": "Instead of running away from his heavy debts, Gary decided to {{BLANK}} and talk to his bank.",
    "cn": "蓋瑞沒有逃避沉重的債務，而是決定挺身面對困難，主動與他的銀行協商。"
  },
  {
    "word": "opposite",
    "pos": "adj.",
    "cn_def": "相反的；對立的",
    "en_def": "completely different in nature, direction, or meaning",
    "sentence": "Even though the two scientists analyzed the same data, they reached completely {{BLANK}} conclusions.",
    "cn": "儘管這兩位科學家分析了相同的數據，他們卻得出了截然相反的結論。"
  },
  {
    "word": "opposite",
    "pos": "adj.",
    "cn_def": "對面的；正相對的",
    "en_def": "facing or situated directly across from something",
    "sentence": "There is a quiet coffee shop on the {{BLANK}} side of the street where students like to study.",
    "cn": "在街道對面的一側有一家安靜的咖啡館，學生們喜歡在那裡讀書。"
  },
  {
    "word": "opposite",
    "pos": "n.",
    "cn_def": "相反的人事物；對立面",
    "en_def": "a person or thing that is totally different from or the reverse of another",
    "sentence": "Many expected him to be nervous on stage, but his relaxed behavior was the exact {{BLANK}}.",
    "cn": "許多人原本以為他在舞台上會緊張，但他輕鬆的表現卻是完全相反的對立面。"
  },
  {
    "word": "opposite",
    "pos": "prep./adv.",
    "cn_def": "在…對面；面對面地",
    "en_def": "in a position facing someone or something but on the other side",
    "sentence": "Mr. Davis lives {{BLANK}} the modern train station, so commuting to work is very convenient.",
    "cn": "戴維斯先生就住在現代化火車站的正對面，因此通勤上班非常方便。"
  },
  {
    "word": "organize",
    "pos": "v.",
    "cn_def": "組織；籌劃；整理",
    "en_def": "to arrange into a structured whole, or to put things into systematic order",
    "sentence": "Kelly spent two hours to {{BLANK}} her class notes carefully before she started studying for the final exam.",
    "cn": "凱莉在開始為期末考溫習之前，花了兩個小時仔細整理她的課堂筆記。"
  },
  {
    "word": "organized",
    "pos": "adj.",
    "cn_def": "有條理的；井然有序的",
    "en_def": "arranged in a neat, systematic way, or able to plan efficiently",
    "sentence": "Jessica is a highly {{BLANK}} secretary who manages complicated meeting schedules without any errors.",
    "cn": "潔西卡是一位極有條理的秘書，處理複雜的會議行程從未出錯。"
  },
  {
    "word": "organization",
    "pos": "n.",
    "cn_def": "組織；機構；體制；條理性",
    "en_def": "an organized body of people with a particular purpose, or systematic arrangement",
    "sentence": "Linda works for an international non-profit {{BLANK}} that provides clean water to developing villages.",
    "cn": "琳達在一所為開發中村落提供乾淨飲用水的國際非營利組織／機構工作。"
  },
  {
    "word": "organizer",
    "pos": "n.",
    "cn_def": "主辦者；籌辦人；萬用記事本",
    "en_def": "a person who arranges an event, or a device/book used for scheduling",
    "sentence": "The event {{BLANK}} announced that the outdoor music festival would be postponed due to the hurricane.",
    "cn": "活動主辦者宣布，由於颶風來襲，戶外音樂節將順延舉行。"
  },
  {
    "word": "original",
    "pos": "adj.",
    "cn_def": "最初的；原先的",
    "en_def": "present or existing from the beginning; initial",
    "sentence": "Our {{BLANK}} plan was to visit Japan in February, but heavy snow forced us to change it to March.",
    "cn": "我們最初的計畫是二月份去日本旅遊，但大雪迫使我們將行程改到了三月。"
  },
  {
    "word": "original",
    "pos": "adj.",
    "cn_def": "具原創性的；新穎獨特的",
    "en_def": "created directly by a person and not copied; completely novel",
    "sentence": "The scientific experiment was based on an {{BLANK}} idea that nobody in the laboratory had ever explored.",
    "cn": "這項科學實驗是基於一個實驗室裡前所未見的原創／新穎想法。"
  },
  {
    "word": "original",
    "pos": "n.",
    "cn_def": "原件；正本；原作",
    "en_def": "an authentic work of art or document, not a copy",
    "sentence": "I brought a photocopy to the office because the museum keeps the precious {{BLANK}} in a safe vault.",
    "cn": "我帶了一份影本到辦公室，因為博物館將珍貴的原件／真跡存放在安全的保險庫中。"
  },
  {
    "word": "originality",
    "pos": "n.",
    "cn_def": "獨創性；創意；新穎",
    "en_def": "the ability to think independently and creatively; novelty",
    "sentence": "The judges praised the young architect's drawing because it showed remarkable {{BLANK}} and elegance.",
    "cn": "評審們讚賞這位年輕建築師的圖紙，因為它展現了非凡的獨創性與優雅。"
  },
  {
    "word": "oven",
    "pos": "n.",
    "cn_def": "烤箱；烤爐",
    "en_def": "an enclosed compartment used for baking, heating, or roasting food",
    "sentence": "The delicious smell of beef roasting slowly in the {{BLANK}} filled every corner of the house.",
    "cn": "在烤箱中慢慢烘烤的牛肉美味香氣瀰漫了屋子的每個角落。"
  },
  {
    "word": "owl",
    "pos": "n.",
    "cn_def": "貓頭鷹",
    "en_def": "a nocturnal bird of prey with large eyes, a facial disc, and silent flight",
    "sentence": "Because an {{BLANK}} is a nocturnal animal, it hunts small mice at night and sleeps during the day.",
    "cn": "因為貓頭鷹是夜行性動物，牠在夜間捕獵小老鼠，白天睡覺。"
  }
];

const MCQS = [
  {
    "q": "Mom baked delicious chocolate cookies in the hot ______ and they smelled wonderful.",
    "options": [
      "oven",
      "glory",
      "fortune",
      "horn"
    ],
    "answer": 0,
    "cn": "媽媽在熱騰騰的烤箱裡烤了美味的巧克力餅乾，聞起來香極了。",
    "vocabIndex": 24
  },
  {
    "q": "A quiet ______ sat on the tree branch in the dark night, watching the forest with its big round eyes.",
    "options": [
      "horn",
      "owl",
      "organizer",
      "fortune"
    ],
    "answer": 1,
    "cn": "一隻安靜的貓頭鷹在黑夜中坐在樹枝上，用牠圓滾滾的大眼睛注視著森林。",
    "vocabIndex": 25
  },
  {
    "q": "The driver pressed the car ______ loudly because a stray dog was sleeping in the middle of the street.",
    "options": [
      "oven",
      "glory",
      "horn",
      "fortune"
    ],
    "answer": 2,
    "cn": "司機大聲按響汽車喇叭，因為有一隻流浪狗正睡在馬路中央。",
    "vocabIndex": 9
  },
  {
    "q": "The businessman made a huge ______ by selling fresh fruits, so he bought a large house for his family.",
    "options": [
      "oven",
      "owl",
      "glory",
      "fortune"
    ],
    "answer": 3,
    "cn": "那位商人靠著販賣新鮮水果賺得了一大筆財富／鉅款，因此他為家人買了一棟大房子。",
    "vocabIndex": 0
  },
  {
    "q": "The soldiers returned home happily after winning the battle and brought great ______ to their country.",
    "options": [
      "glory",
      "horn",
      "oven",
      "organization"
    ],
    "answer": 0,
    "cn": "士兵們在打贏戰役後高興地返鄉，為他們的國家帶來了無上的榮耀／光榮。",
    "vocabIndex": 5
  },
  {
    "q": "It was her bad ______ that heavy rain began to fall right when she left home without an umbrella.",
    "options": [
      "organizer",
      "originality",
      "hire",
      "misfortune"
    ],
    "answer": 3,
    "cn": "就在她沒帶雨傘出門的那一刻大雨開始落下，這真是她的不幸／倒楣。",
    "vocabIndex": 4
  },
  {
    "q": "Kelly volunteers every Saturday for a charity ______ that gives free food to homeless people.",
    "options": [
      "horn",
      "organization",
      "owl",
      "original"
    ],
    "answer": 1,
    "cn": "凱莉每週六在一所為無家可歸者提供免費食物的慈善機構／組織當志工。",
    "vocabIndex": 18
  },
  {
    "q": "If you want to know the schedule of the basketball game, you can ask the event ______ over there.",
    "options": [
      "fortune",
      "oven",
      "organizer",
      "glory"
    ],
    "answer": 2,
    "cn": "如果你想知道籃球比賽的賽程，你可以去問那邊的活動籌辦人／主辦者。",
    "vocabIndex": 19
  },
  {
    "q": "Please keep this paper copy safely on your desk because the museum keeps the precious ______ in a safe.",
    "options": [
      "original",
      "horn",
      "hire",
      "owl"
    ],
    "answer": 0,
    "cn": "請將這份紙本影本安全存放在書桌上，因為博物館將珍貴的原件／真跡存放在保險箱中。",
    "vocabIndex": 20
  },
  {
    "q": "Today is the first workday for the new ______, and everyone in the office smiled to welcome him.",
    "options": [
      "oven",
      "fortune",
      "hire",
      "originality"
    ],
    "answer": 2,
    "cn": "今天是由於新進人員／員工的第一個工作日，辦公室裡的每個人都微笑歡迎他。",
    "vocabIndex": 7
  },
  {
    "q": "The art teacher gave Peter first prize because his funny drawing showed wonderful imagination and ______.",
    "options": [
      "horn",
      "originality",
      "owl",
      "opposite"
    ],
    "answer": 1,
    "cn": "美術老師給了彼得第一名，因為他有趣的畫作展現了極佳的想像力與獨創性／原創性。",
    "vocabIndex": 23
  },
  {
    "q": "Jack is very tall and talks all day, but his younger brother is the exact ______.",
    "options": [
      "oven",
      "glory",
      "fortune",
      "opposite"
    ],
    "answer": 3,
    "cn": "傑克非常高而且整天說話，但他的弟弟卻是完全相反的對立面。",
    "vocabIndex": 12
  },
  {
    "q": "We were very ______ that the last bus had not left yet when we ran quickly into the station.",
    "options": [
      "fortunate",
      "opposite",
      "glorious",
      "original"
    ],
    "answer": 0,
    "cn": "當我們快步跑進車站時最後一班公車尚未離站，我們真的很幸運。",
    "vocabIndex": 3
  },
  {
    "q": "The warm morning was ______ with clear blue skies and bright sunshine, so we decided to have a picnic.",
    "options": [
      "original",
      "organized",
      "glorious",
      "fortunate"
    ],
    "answer": 2,
    "cn": "那溫暖的早晨燦爛極好，天空晴朗蔚藍且陽光明媚，因此我們決定去野餐。",
    "vocabIndex": 6
  },
  {
    "q": "Tom and his friend had completely ______ ideas about what game to play, so they could not agree.",
    "options": [
      "glorious",
      "organized",
      "fortunate",
      "opposite"
    ],
    "answer": 3,
    "cn": "湯姆和他的朋友對於要玩什麼遊戲有著完全相反截然不同的想法，因此他們無法達成共識。",
    "vocabIndex": 12
  },
  {
    "q": "Our ______ plan was to go swimming at the beach, but we had to stay indoors because of the storm.",
    "options": [
      "glorious",
      "original",
      "opposite",
      "organized"
    ],
    "answer": 1,
    "cn": "我們最初原先的計畫是去海灘游泳，但由於暴風雨我們不得不待在室內。",
    "vocabIndex": 20
  },
  {
    "q": "Lisa's study room is always neat and ______ because she puts all her books into proper drawers.",
    "options": [
      "organized",
      "glorious",
      "fortunate",
      "original"
    ],
    "answer": 0,
    "cn": "麗莎的書房總是整潔且井井有條，因為她把所有的書本都放進合適的抽屜裡。",
    "vocabIndex": 17
  },
  {
    "q": "Because my parents are very busy moving to a new apartment, they plan to ______ workers to carry the sofa.",
    "options": [
      "organize",
      "roast",
      "tell",
      "hire"
    ],
    "answer": 3,
    "cn": "因為我父母忙於搬到新公寓，他們打算僱用／聘請工人來搬運沙發。",
    "vocabIndex": 7
  },
  {
    "q": "Every Sunday afternoon, Sam likes to ______ his desk and put his pencils neatly into the box.",
    "options": [
      "hire",
      "roast",
      "organize",
      "bake"
    ],
    "answer": 2,
    "cn": "每個星期天下午，山姆喜歡整理他的書桌並將鉛筆整齊地放入盒中。",
    "vocabIndex": 16
  },
  {
    "q": "There is a fresh bakery right ______ the post office across the street, so you can easily smell the bread.",
    "options": [
      "across",
      "opposite",
      "between",
      "into"
    ],
    "answer": 1,
    "cn": "在穿過街道的郵局正對面就有一家新鮮烘焙坊，所以你可以很容易聞到麵包香。",
    "vocabIndex": 12
  },
  {
    "q": "Ben is a real ______ who never goes to bed before two in the morning because he loves reading at night.",
    "options": [
      "good fortune",
      "oven mitt",
      "night owl",
      "take the bull by the horns"
    ],
    "answer": 2,
    "cn": "班是個道地的夜貓子，他從不在凌晨兩點前睡覺，因為他喜歡在夜間閱讀。",
    "vocabIndex": 25
  },
  {
    "q": "Always put on a thick ______ before touching the hot metal tray from the baking stove.",
    "options": [
      "good fortune",
      "oven mitt",
      "night owl",
      "take the bull by the horns"
    ],
    "answer": 1,
    "cn": "在觸碰來自烤爐的滾燙金屬盤之前，務必戴上厚實的烤箱隔熱手套。",
    "vocabIndex": 24
  },
  {
    "q": "When you face a tough problem at school, you should ______ and speak honestly with your teacher.",
    "options": [
      "take the bull by the horns",
      "oven mitt",
      "night owl",
      "good fortune"
    ],
    "answer": 0,
    "cn": "當你在學校面臨棘手問題時，你應該挺身面對困難／果斷行動，坦誠地與老師溝通。",
    "vocabIndex": 11
  },
  {
    "q": "We had the ______ to meet our favorite singer at the airport and take a lovely picture with him.",
    "options": [
      "oven mitt",
      "night owl",
      "take the bull by the horns",
      "good fortune"
    ],
    "answer": 3,
    "cn": "我們有幸／好運在機場遇見我們最喜歡的歌手，並與他拍了一張可愛的合照。",
    "vocabIndex": 0
  },
  {
    "q": "The old woman said she was a ______ who could look at your hands and predict your future life.",
    "options": [
      "night owl",
      "new hire",
      "fortune teller",
      "French horn"
    ],
    "answer": 2,
    "cn": "那位老婦人說她是一名算命師，可以看著你的手相並預測你未來的人生。",
    "vocabIndex": 0
  }
];

const LOOKUP = {
  "fortune": {
    "pos": "n.",
    "en_def": "chance or luck as an external force affecting human affairs",
    "cn_def": "好運；幸運（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "chance or luck as an external force affecting human affairs",
        "cn_def": "好運；幸運（不可數）"
      },
      {
        "pos": "n.",
        "en_def": "a large amount of money or valuable assets",
        "cn_def": "鉅款；大筆財富（可數）"
      },
      {
        "pos": "n.",
        "en_def": "a person's destiny or future condition",
        "cn_def": "命運；命途（可數/不可數）"
      }
    ]
  },
  "fortunate": {
    "pos": "adj.",
    "en_def": "favored by or involving good luck; lucky",
    "cn_def": "幸運的；僥倖的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "favored by or involving good luck; lucky",
        "cn_def": "幸運的；僥倖的"
      }
    ]
  },
  "misfortune": {
    "pos": "n.",
    "en_def": "bad luck, or an unfortunate event",
    "cn_def": "不幸；厄運；逆境",
    "combined": [
      {
        "pos": "n.",
        "en_def": "bad luck, or an unfortunate event",
        "cn_def": "不幸；厄運；逆境"
      }
    ]
  },
  "glory": {
    "pos": "n.",
    "en_def": "high renown or honor won by notable achievements, or magnificent beauty",
    "cn_def": "光榮；榮耀；壯麗",
    "combined": [
      {
        "pos": "n.",
        "en_def": "high renown or honor won by notable achievements, or magnificent beauty",
        "cn_def": "光榮；榮耀；壯麗"
      }
    ]
  },
  "glorious": {
    "pos": "adj.",
    "en_def": "having or deserving fame; magnificent or delightful",
    "cn_def": "光榮的；輝煌的；極美好的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having or deserving fame; magnificent or delightful",
        "cn_def": "光榮的；輝煌的；極美好的"
      }
    ]
  },
  "hire": {
    "pos": "v.",
    "en_def": "to employ someone for wages, or to pay for temporary use of something",
    "cn_def": "僱用；聘請；租用",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to employ someone for wages, or to pay for temporary use of something",
        "cn_def": "僱用；聘請；租用"
      },
      {
        "pos": "n.",
        "en_def": "a newly recruited employee, or the act of hiring",
        "cn_def": "新進人員；僱用（可數/不可數）"
      }
    ]
  },
  "horns": {
    "pos": "n.",
    "en_def": "a hard permanent pointed outgrowth on the head of cattle, sheep, or goats",
    "cn_def": "（牛、羊等動物的）角",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a hard permanent pointed outgrowth on the head of cattle, sheep, or goats",
        "cn_def": "（牛、羊等動物的）角"
      }
    ]
  },
  "horn": {
    "pos": "n.",
    "en_def": "a hard permanent pointed outgrowth on the head of cattle, sheep, or goats",
    "cn_def": "（牛、羊等動物的）角",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a hard permanent pointed outgrowth on the head of cattle, sheep, or goats",
        "cn_def": "（牛、羊等動物的）角"
      },
      {
        "pos": "n.",
        "en_def": "an instrument sounding a warning in a vehicle, or a brass wind instrument",
        "cn_def": "（汽車）喇叭；號角"
      }
    ]
  },
  "take the bull by the horns": {
    "pos": "v.phr.",
    "en_def": "to deal directly and bravely with a difficult or dangerous situation",
    "cn_def": "挺身面對困難；當機立斷",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to deal directly and bravely with a difficult or dangerous situation",
        "cn_def": "挺身面對困難；當機立斷"
      }
    ]
  },
  "opposite": {
    "pos": "adj.",
    "en_def": "completely different in nature, direction, or meaning",
    "cn_def": "相反的；對立的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "completely different in nature, direction, or meaning",
        "cn_def": "相反的；對立的"
      },
      {
        "pos": "adj.",
        "en_def": "facing or situated directly across from something",
        "cn_def": "對面的；正相對的"
      },
      {
        "pos": "n.",
        "en_def": "a person or thing that is totally different from or the reverse of another",
        "cn_def": "相反的人事物；對立面"
      },
      {
        "pos": "prep./adv.",
        "en_def": "in a position facing someone or something but on the other side",
        "cn_def": "在…對面；面對面地"
      }
    ]
  },
  "organize": {
    "pos": "v.",
    "en_def": "to arrange into a structured whole, or to put things into systematic order",
    "cn_def": "組織；籌劃；整理",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to arrange into a structured whole, or to put things into systematic order",
        "cn_def": "組織；籌劃；整理"
      }
    ]
  },
  "organized": {
    "pos": "adj.",
    "en_def": "arranged in a neat, systematic way, or able to plan efficiently",
    "cn_def": "有條理的；井然有序的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "arranged in a neat, systematic way, or able to plan efficiently",
        "cn_def": "有條理的；井然有序的"
      }
    ]
  },
  "organization": {
    "pos": "n.",
    "en_def": "an organized body of people with a particular purpose, or systematic arrangement",
    "cn_def": "組織；機構；體制；條理性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an organized body of people with a particular purpose, or systematic arrangement",
        "cn_def": "組織；機構；體制；條理性"
      }
    ]
  },
  "organizer": {
    "pos": "n.",
    "en_def": "a person who arranges an event, or a device/book used for scheduling",
    "cn_def": "主辦者；籌辦人；萬用記事本",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who arranges an event, or a device/book used for scheduling",
        "cn_def": "主辦者；籌辦人；萬用記事本"
      }
    ]
  },
  "original": {
    "pos": "adj.",
    "en_def": "present or existing from the beginning; initial",
    "cn_def": "最初的；原先的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "present or existing from the beginning; initial",
        "cn_def": "最初的；原先的"
      },
      {
        "pos": "adj.",
        "en_def": "created directly by a person and not copied; completely novel",
        "cn_def": "具原創性的；新穎獨特的"
      },
      {
        "pos": "n.",
        "en_def": "an authentic work of art or document, not a copy",
        "cn_def": "原件；正本；原作"
      }
    ]
  },
  "originality": {
    "pos": "n.",
    "en_def": "the ability to think independently and creatively; novelty",
    "cn_def": "獨創性；創意；新穎",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability to think independently and creatively; novelty",
        "cn_def": "獨創性；創意；新穎"
      }
    ]
  },
  "oven": {
    "pos": "n.",
    "en_def": "an enclosed compartment used for baking, heating, or roasting food",
    "cn_def": "烤箱；烤爐",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an enclosed compartment used for baking, heating, or roasting food",
        "cn_def": "烤箱；烤爐"
      }
    ]
  },
  "owl": {
    "pos": "n.",
    "en_def": "a nocturnal bird of prey with large eyes, a facial disc, and silent flight",
    "cn_def": "貓頭鷹",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a nocturnal bird of prey with large eyes, a facial disc, and silent flight",
        "cn_def": "貓頭鷹"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
