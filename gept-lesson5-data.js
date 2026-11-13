// Lesson 5 Quiz Data: People, Manners & Human Spirit
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 5 - People, Manners & Human Spirit",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "praise",
    "pos": "v. / n.",
    "cn_def": "稱讚；讚美",
    "en_def": "to express strong approval or admiration for someone",
    "sentence": "The principal gathered the whole school to {{BLANK}} the brave students who rescued an elderly neighbor from the flooded house.",
    "cn": "校長召集了全校師生，稱讚那些從淹水房屋中救出年邁鄰居的英勇學生。"
  },
  {
    "word": "pray",
    "pos": "v.",
    "cn_def": "祈禱；祈求",
    "en_def": "to speak to God or a saint in order to give thanks or ask for help",
    "sentence": "Every night before going to sleep, the little boy kneels beside his bed to {{BLANK}} for his family's continued good health.",
    "cn": "每晚就寢前，小男孩都會跪在床邊祈禱他的家人能夠持續保持身體健康。"
  },
  {
    "word": "spirit",
    "pos": "n.",
    "cn_def": "精神；靈魂；士氣",
    "en_def": "the non-physical part of a person; mood; courage and enthusiasm",
    "sentence": "Although our soccer team lost the final championship match, our coach admired the fighting {{BLANK}} that every player showed.",
    "cn": "雖然我們的足球隊在最後的冠軍爭奪賽中落敗，但教練十分讚賞每位球員所展現的戰鬥精神。"
  },
  {
    "word": "male",
    "pos": "adj. / n.",
    "cn_def": "男性的；雄性的",
    "en_def": "belonging to the sex that does not give birth to young",
    "sentence": "In most bird species, the {{BLANK}} bird displays brightly colored feathers to attract female partners during spring.",
    "cn": "在大多數鳥類物種中，雄鳥在春季會展現出色彩斑斕的羽毛以吸引雌性伴侶。"
  },
  {
    "word": "adult",
    "pos": "n. / adj.",
    "cn_def": "成年人；成熟的",
    "en_def": "a person who is fully grown or legally mature",
    "sentence": "Children under the age of twelve are not permitted to enter the swimming pool unless accompanied by an {{BLANK}}.",
    "cn": "十二歲以下的兒童除非有成年人陪同，否則不允許進入該游泳池。"
  },
  {
    "word": "elder",
    "pos": "adj. / n.",
    "cn_def": "年長的；長者",
    "en_def": "born earlier; senior; older person in a family or tribe",
    "sentence": "Traditional Taiwanese culture teaches children to show high respect and courtesy toward their family {{BLANK}}.",
    "cn": "台灣傳統文化教育孩子們要對家庭中的年長長輩表達崇高的尊敬與禮貌。"
  },
  {
    "word": "youth",
    "pos": "n.",
    "cn_def": "青年時期；青春；年輕人",
    "en_def": "the period between childhood and adult age; young people",
    "sentence": "In his {{BLANK}}, my grandfather worked on a merchant ship and traveled to more than twenty different countries.",
    "cn": "在他年輕的時候，我的祖父曾在一艘商船上工作，並到過二十多個不同的國家旅行。"
  },
  {
    "word": "guy",
    "pos": "n.",
    "cn_def": "傢伙；人；男士",
    "en_def": "a man or boy; an informal word for an individual person",
    "sentence": "Mark is a really friendly and generous {{BLANK}}, and he always volunteers to help his classmates with difficult math homework.",
    "cn": "馬克真是一個非常友善且慷慨的傢伙，他總是自願幫助同學解答困難的數學作業。"
  },
  {
    "word": "lady",
    "pos": "n.",
    "cn_def": "女士；淑女",
    "en_def": "a polite or formal way of referring to a woman",
    "sentence": "The polite young gentleman immediately stood up on the crowded subway train to offer his seat to an elderly {{BLANK}}.",
    "cn": "那位有禮貌的年輕紳士立即在擁擠的捷運列車上站起身來，將座位讓給一位年長的女士。"
  },
  {
    "word": "ma'am",
    "pos": "n.",
    "cn_def": "女士；夫人（尊稱）",
    "en_def": "a polite way of addressing a woman, especially in formal service",
    "sentence": "The flight attendant smiled warmly and asked, 'May I bring you another cup of hot green tea, {{BLANK}}?'",
    "cn": "空服員溫暖地微笑著問道：「女士，我能再為您拿一杯熱綠茶嗎？」"
  }
];

const MCQS = [
  {
    "q": "The teacher did not hesitate to ______ Alice in front of the entire class for achieving the highest score on the exam.",
    "options": [
      "praise",
      "pray",
      "recover",
      "wound"
    ],
    "answer": 0,
    "cn": "老師毫不猶豫地在全班同學面前稱讚愛麗絲，因為她在考試中獲得了最高分。 【選項解析】(A) praise 稱讚  (B) pray 祈禱  (C) recover 康復  (D) wound 傷害。考最高分值得在全班面前 praise。",
    "vocabIndex": 0
  },
  {
    "q": "Whenever our village faces severe droughts in summer, farmers gather at the chapel to ______ for rain.",
    "options": [
      "praise",
      "cough",
      "tear",
      "pray"
    ],
    "answer": 3,
    "cn": "每當我們的村莊在夏季面臨嚴重的乾旱時，農民們就會聚集在小教堂祈求降雨。 【選項解析】(A) praise 讚美  (B) pray 祈禱  (C) tear 撕裂  (D) cough 咳嗽。pray for rain（祈雨）為固定用法。",
    "vocabIndex": 1
  },
  {
    "q": "The marathon runner was exhausted after thirty miles, but her indomitable ______ kept her pushing forward until the finish line.",
    "options": [
      "youth",
      "spirit",
      "guy",
      "adult"
    ],
    "answer": 1,
    "cn": "馬拉松跑者在跑了三十英里後精疲力竭，但她不屈不撓的精神讓她繼續向前推進直到終點線。 【選項解析】(A) youth 青春  (B) spirit 精神  (C) guy 傢伙  (D) adult 成年人。indomitable spirit 指「不屈不撓的精神」。",
    "vocabIndex": 2
  },
  {
    "q": "While female lions do most of the hunting for the pride, the strong ______ lion defends their vast territory from intruders.",
    "options": [
      "elder",
      "homesick",
      "male",
      "patient"
    ],
    "answer": 2,
    "cn": "雖然母獅負責獅群的大部分狩獵，但強壯的公獅則保衛著牠們龐大的領地免受入侵者侵擾。 【選項解析】(A) elder 年長的  (B) male 雄性的  (C) homesick 想家的  (D) patient 有耐心的。與 female 雌性相對應的是 male。",
    "vocabIndex": 3
  },
  {
    "q": "Movie tickets cost ten dollars for children, but every ______ must pay fifteen dollars at the ticket booth.",
    "options": [
      "guy",
      "spirit",
      "youth",
      "adult"
    ],
    "answer": 3,
    "cn": "兒童電影票價為十美元，但在售票亭每位成年人必須支付十五美元。 【選項解析】(A) guy 傢伙  (B) adult 成年人  (C) youth 青年  (D) spirit 精神。與 children 相對應的票價類別為 adult。",
    "vocabIndex": 4
  },
  {
    "q": "In many indigenous communities, young people listen attentively to the wisdom shared by the village ______.",
    "options": [
      "guys",
      "spirits",
      "elders",
      "wounds"
    ],
    "answer": 2,
    "cn": "在許多原住民社區中，年輕人都專注傾聽村莊長輩們所分享的智慧。 【選項解析】(A) elders 長者  (B) spirits 靈魂  (C) guys 傢伙  (D) wounds 傷口。village elders 指「村莊長輩」。",
    "vocabIndex": 5
  },
  {
    "q": "During the energetic days of his ______, Uncle Frank spent entire summers backpacking across the rugged European mountains.",
    "options": [
      "youth",
      "spirit",
      "adult",
      "lady"
    ],
    "answer": 0,
    "cn": "在活力充沛的青年時期，法蘭克叔叔花了一整個夏天背著背包徒步穿越崎嶇的歐洲山脈。 【選項解析】(A) spirit 精神  (B) youth 青年時期  (C) adult 成年人  (D) lady 女士。in the days of his youth 指青年歲月。",
    "vocabIndex": 6
  },
  {
    "q": "That tall ______ wearing the leather jacket is my older brother, and he plays lead guitar in a university rock band.",
    "options": [
      "adult",
      "guy",
      "spirit",
      "ma'am"
    ],
    "answer": 1,
    "cn": "那個穿皮夾克的高個子傢伙是我哥哥，他在大學搖滾樂團裡擔任主奏吉他手。 【選項解析】(A) adult 成年人  (B) guy 傢伙  (C) spirit 精神  (D) ma'am 女士。that tall guy（那個高個子傢伙）為常見口語。",
    "vocabIndex": 7
  },
  {
    "q": "The courteous waiter bowed gently and pulled out the wooden chair for the elegant ______ wearing the black evening gown.",
    "options": [
      "guy",
      "spirit",
      "lady",
      "youth"
    ],
    "answer": 2,
    "cn": "有禮貌的服務生溫柔地鞠躬，並為身穿黑色晚禮服的高雅女士拉開木椅。 【選項解析】(A) guy 男士  (B) lady 女士  (C) spirit 精神  (D) youth 青年。穿著晚禮服的高雅女性稱為 lady。",
    "vocabIndex": 8
  },
  {
    "q": "'Excuse me, ______, you dropped your leather purse on the pavement,' the honest schoolboy shouted across the street.",
    "options": [
      "guy",
      "youth",
      "spirit",
      "ma'am"
    ],
    "answer": 3,
    "cn": "「不好意思，女士，您的皮夾掉在人行道上了，」誠實的男學童隔著街道大聲呼喊。 【選項解析】(A) guy 傢伙  (B) ma'am 女士尊稱  (C) spirit 精神  (D) youth 青年。對陌生女性的有禮尊稱為 ma'am。",
    "vocabIndex": 9
  },
  {
    "q": "Parents should frequently ______ their children when they show kindness and helpfulness toward other people.",
    "options": [
      "pray",
      "praise",
      "skin",
      "hurt"
    ],
    "answer": 1,
    "cn": "當孩子們對他人展現出善良與樂於助人時，父母應當經常給予稱讚。 【選項解析】(A) praise 稱讚  (B) pray 祈禱  (C) skin 擦傷  (D) hurt 傷害。肯定良好行為應給予 praise。",
    "vocabIndex": 0
  },
  {
    "q": "When the sailor was lost in the stormy ocean, he could only ______ for a rescue ship to appear before sunset.",
    "options": [
      "pray",
      "praise",
      "cough",
      "tear"
    ],
    "answer": 0,
    "cn": "當水手迷失在暴風雨的大海中時，他只能祈求搜救船能在日落前出現。 【選項解析】(A) praise 稱讚  (B) pray 祈禱  (C) cough 咳嗽  (D) tear 撕破。身陷絕境向天祈求，選 pray。",
    "vocabIndex": 1
  },
  {
    "q": "Even after losing their homes in the earthquake, the survivors showed remarkable community ______ by sharing food.",
    "options": [
      "youth",
      "spirit",
      "guy",
      "adult"
    ],
    "answer": 1,
    "cn": "即使在地震中失去了家園，倖存者們依然透過分享食物展現了非凡的社區團結精神。 【選項解析】(A) spirit 精神  (B) youth 青年  (C) guy 傢伙  (D) adult 成年人。community spirit 指「社區團隊凝聚精神」。",
    "vocabIndex": 2
  },
  {
    "q": "Scientists observed that only the ______ peacocks have magnificent fan-shaped tails with brilliant eye patterns.",
    "options": [
      "elder",
      "deaf",
      "patient",
      "male"
    ],
    "answer": 3,
    "cn": "科學家觀察到，只有雄孔雀才擁有絢麗眼狀斑紋的壯觀扇形尾羽。 【選項解析】(A) elder 年長的  (B) male 雄性的  (C) patient 有耐心的  (D) deaf 聾的。male peacocks 指「雄孔雀」。",
    "vocabIndex": 3
  },
  {
    "q": "The amusement park ride is too dangerous for toddlers, so an accompanying ______ must supervise each seat.",
    "options": [
      "adult",
      "youth",
      "spirit",
      "guy"
    ],
    "answer": 0,
    "cn": "遊樂園的設施對幼童來說太危險了，因此每個座位都必須有一名陪同的成年人監護。 【選項解析】(A) youth 青年  (B) adult 成年人  (C) spirit 精神  (D) guy 男士。accompanying adult 指「陪同的成年人」。",
    "vocabIndex": 4
  },
  {
    "q": "It is an honorable custom in our family to consult our ______ sister whenever an important household decision arises.",
    "options": [
      "pale",
      "male",
      "elder",
      "dizzy"
    ],
    "answer": 2,
    "cn": "每當家中有重大決定時，先向我們年長的姐姐請教是我們家族的一項光榮傳統。 【選項解析】(A) elder 年長的  (B) male 男性的  (C) pale 蒼白的  (D) dizzy 頭暈的。elder sister 指「年長的姐姐」。",
    "vocabIndex": 5
  },
  {
    "q": "Spending one's precious ______ playing video games all day without learning useful skills is something many regret later.",
    "options": [
      "youth",
      "adult",
      "spirit",
      "lady"
    ],
    "answer": 0,
    "cn": "整天玩電子遊戲而沒有學習實用技能來耗費寶貴的青春，是許多人後來會後悔的事。 【選項解析】(A) adult 成年人  (B) youth 青春  (C) spirit 精神  (D) lady 女士。precious youth 指「寶貴的青春」。",
    "vocabIndex": 6
  },
  {
    "q": "Samuel is the kind of reliable ______ who will drop whatever he is doing to come and help fix your broken car.",
    "options": [
      "spirit",
      "guy",
      "ma'am",
      "lady"
    ],
    "answer": 1,
    "cn": "塞繆爾是那種值得信賴的人，他會放下手頭正在做的事來幫你修好故障的汽車。 【選項解析】(A) spirit 精神  (B) guy 傢伙/人  (C) ma'am 女士  (D) lady 女士。reliable guy 指「靠得住的人」。",
    "vocabIndex": 7
  },
  {
    "q": "The dignified old ______ donated millions of dollars to the children's hospital to build a modern cancer center.",
    "options": [
      "guy",
      "spirit",
      "youth",
      "lady"
    ],
    "answer": 3,
    "cn": "那位尊貴的老婦人向兒童醫院捐贈了數百萬美元，以建立一座現代化的癌症中心。 【選項解析】(A) guy 傢伙  (B) lady 女士  (C) youth 青年  (D) spirit 精神。dignified old lady 指「尊貴的高齡女士」。",
    "vocabIndex": 8
  },
  {
    "q": "'Here is your receipt and change, ______; thank you for shopping at our department store today,' the cashier said politely.",
    "options": [
      "guy",
      "spirit",
      "ma'am",
      "youth"
    ],
    "answer": 2,
    "cn": "「這是您的收據和零錢，女士；謝謝您今天光臨我們的百貨公司，」收銀員有禮貌地說道。 【選項解析】(A) guy 男士  (B) ma'am 女士尊稱  (C) spirit 精神  (D) youth 青年。商業服務中禮貌稱呼顧客為 ma'am。",
    "vocabIndex": 9
  },
  {
    "q": "The sports coach offered warm words of ______ to the young goalkeeper after he blocked three decisive penalty kicks.",
    "options": [
      "spirit",
      "praise",
      "youth",
      "adult"
    ],
    "answer": 1,
    "cn": "在年輕守門員撲下了三個決定性的十二碼罰球後，體育教練對他表達了熱烈的讚美。 【選項解析】(A) spirit 精神  (B) praise 讚美  (C) youth 青春  (D) adult 成年人。words of praise 指「讚許的話語」。",
    "vocabIndex": 0
  },
  {
    "q": "Millions of peaceful citizens went to their local churches and mosques to ______ for an end to the brutal war.",
    "options": [
      "pray",
      "praise",
      "recover",
      "wound"
    ],
    "answer": 0,
    "cn": "數百萬和平的公民前往當地的教堂和清真寺，祈求殘酷的戰爭早日結束。 【選項解析】(A) praise 讚美  (B) pray 祈求  (C) recover 康復  (D) wound 傷害。pray for an end to war 指「祈求戰爭終結」。",
    "vocabIndex": 1
  },
  {
    "q": "The school festival was full of joyful laughter, and the festive ______ of the students spread throughout the neighborhood.",
    "options": [
      "adult",
      "youth",
      "spirit",
      "guy"
    ],
    "answer": 2,
    "cn": "學校園遊會充滿了歡樂的笑聲，學生們節日的歡樂氛圍感染了整個社區街坊。 【選項解析】(A) spirit 精神/氣氛  (B) youth 青春  (C) adult 成年人  (D) guy 傢伙。festive spirit 指「節日慶祝氣氛」。",
    "vocabIndex": 2
  },
  {
    "q": "The university established a generous scholarship foundation to support motivated ______ from underprivileged rural backgrounds.",
    "options": [
      "adults",
      "spirits",
      "ladies",
      "youth"
    ],
    "answer": 3,
    "cn": "這所大學設立了慷慨的獎學金基金會，以資助來自弱勢農村背景且積極向上的青年人。 【選項解析】(A) adults 成年人  (B) youth 青年群體  (C) ladies 女士  (D) spirits 靈魂。motivated youth 指「有志青年」。",
    "vocabIndex": 6
  },
  {
    "q": "When the polite young man offered his umbrella to the wet ______, she thanked him warmly and shared her cab.",
    "options": [
      "guy",
      "youth",
      "lady",
      "spirit"
    ],
    "answer": 2,
    "cn": "當那位有禮貌的年輕人把雨傘讓給被雨淋濕的女士時，她熱情地感謝他並與他共乘計程車。 【選項解析】(A) guy 傢伙  (B) lady 女士  (C) youth 青春  (D) spirit 精神。wet lady 指被淋濕的女士。",
    "vocabIndex": 8
  }
];

const LOOKUP = {
  "praise": {
    "pos": "v. / n.",
    "en_def": "to express strong approval or admiration for someone",
    "cn_def": "稱讚；讚美",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to express strong approval or admiration for someone",
        "cn_def": "稱讚；讚美"
      }
    ]
  },
  "pray": {
    "pos": "v.",
    "en_def": "to speak to God or a saint in order to give thanks or ask for help",
    "cn_def": "祈禱；祈求",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to speak to God or a saint in order to give thanks or ask for help",
        "cn_def": "祈禱；祈求"
      }
    ]
  },
  "spirit": {
    "pos": "n.",
    "en_def": "the non-physical part of a person; mood; courage and enthusiasm",
    "cn_def": "精神；靈魂；士氣",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the non-physical part of a person; mood; courage and enthusiasm",
        "cn_def": "精神；靈魂；士氣"
      }
    ]
  },
  "male": {
    "pos": "adj. / n.",
    "en_def": "belonging to the sex that does not give birth to young",
    "cn_def": "男性的；雄性的",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "belonging to the sex that does not give birth to young",
        "cn_def": "男性的；雄性的"
      }
    ]
  },
  "adult": {
    "pos": "n. / adj.",
    "en_def": "a person who is fully grown or legally mature",
    "cn_def": "成年人；成熟的",
    "combined": [
      {
        "pos": "n. / adj.",
        "en_def": "a person who is fully grown or legally mature",
        "cn_def": "成年人；成熟的"
      }
    ]
  },
  "elder": {
    "pos": "adj. / n.",
    "en_def": "born earlier; senior; older person in a family or tribe",
    "cn_def": "年長的；長者",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "born earlier; senior; older person in a family or tribe",
        "cn_def": "年長的；長者"
      }
    ]
  },
  "youth": {
    "pos": "n.",
    "en_def": "the period between childhood and adult age; young people",
    "cn_def": "青年時期；青春；年輕人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the period between childhood and adult age; young people",
        "cn_def": "青年時期；青春；年輕人"
      }
    ]
  },
  "guy": {
    "pos": "n.",
    "en_def": "a man or boy; an informal word for an individual person",
    "cn_def": "傢伙；人；男士",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a man or boy; an informal word for an individual person",
        "cn_def": "傢伙；人；男士"
      }
    ]
  },
  "lady": {
    "pos": "n.",
    "en_def": "a polite or formal way of referring to a woman",
    "cn_def": "女士；淑女",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a polite or formal way of referring to a woman",
        "cn_def": "女士；淑女"
      }
    ]
  },
  "ma'am": {
    "pos": "n.",
    "en_def": "a polite way of addressing a woman, especially in formal service",
    "cn_def": "女士；夫人（尊稱）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a polite way of addressing a woman, especially in formal service",
        "cn_def": "女士；夫人（尊稱）"
      }
    ]
  },
  "recover": {
    "pos": "",
    "en_def": "",
    "cn_def": "康復",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "康復"
      }
    ]
  },
  "wound": {
    "pos": "",
    "en_def": "",
    "cn_def": "傷害",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "傷害"
      }
    ]
  },
  "cough": {
    "pos": "",
    "en_def": "",
    "cn_def": "咳嗽",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "咳嗽"
      }
    ]
  },
  "tear": {
    "pos": "",
    "en_def": "",
    "cn_def": "撕裂",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "撕裂"
      }
    ]
  },
  "homesick": {
    "pos": "",
    "en_def": "",
    "cn_def": "想家的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "想家的"
      }
    ]
  },
  "patient": {
    "pos": "",
    "en_def": "",
    "cn_def": "有耐心的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "有耐心的"
      }
    ]
  },
  "guys": {
    "pos": "",
    "en_def": "",
    "cn_def": "傢伙",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "傢伙"
      }
    ]
  },
  "spirits": {
    "pos": "",
    "en_def": "",
    "cn_def": "靈魂",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "靈魂"
      }
    ]
  },
  "elders": {
    "pos": "",
    "en_def": "",
    "cn_def": "長者",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "長者"
      }
    ]
  },
  "wounds": {
    "pos": "",
    "en_def": "",
    "cn_def": "傷口",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "傷口"
      }
    ]
  },
  "skin": {
    "pos": "",
    "en_def": "",
    "cn_def": "擦傷",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "擦傷"
      }
    ]
  },
  "hurt": {
    "pos": "",
    "en_def": "",
    "cn_def": "傷害",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "傷害"
      }
    ]
  },
  "deaf": {
    "pos": "",
    "en_def": "",
    "cn_def": "聾的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "聾的"
      }
    ]
  },
  "pale": {
    "pos": "",
    "en_def": "",
    "cn_def": "蒼白的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "蒼白的"
      }
    ]
  },
  "dizzy": {
    "pos": "",
    "en_def": "",
    "cn_def": "頭暈的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "頭暈的"
      }
    ]
  },
  "adults": {
    "pos": "",
    "en_def": "",
    "cn_def": "成年人",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "成年人"
      }
    ]
  },
  "ladies": {
    "pos": "",
    "en_def": "",
    "cn_def": "女士",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "女士"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
