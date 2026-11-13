// Unit 1 Quiz Data: credit – worm
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Basic U1 - credit – worm",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "credit",
    "pos": "n.",
    "cn_def": "信用、信貸",
    "en_def": "the trust that lets you borrow money or buy something now and pay for it later",
    "sentence": "If you don't pay your bills on time, it will damage your {{BLANK}} and make it hard to get a loan.",
    "cn": "如果你不準時付帳單，會損害你的信用，讓你很難獲得貸款。"
  },
  {
    "word": "credit card",
    "pos": "phr.",
    "cn_def": "信用卡",
    "en_def": "a small plastic card used to buy things now and pay later",
    "sentence": "He prefers using a {{BLANK}} instead of cash because it is more convenient and he can earn reward points.",
    "cn": "他比起現金更喜歡使用信用卡，因為更方便且能賺取獎勵點數。"
  },
  {
    "word": "credit",
    "pos": "n.",
    "cn_def": "功勞、讚揚",
    "en_def": "praise or approval for something good you have done",
    "sentence": "Although many people worked on the project, the manager took all the {{BLANK}} for its success.",
    "cn": "儘管許多人參與了這個專案，經理卻把成功的功勞全攬在自己身上。"
  },
  {
    "word": "take credit",
    "pos": "phr.",
    "cn_def": "邀功、歸功於",
    "en_def": "to accept praise for something, often something others did",
    "sentence": "A good leader should never {{BLANK}} for the hard work of their team members.",
    "cn": "一位好的領導者不應該把團隊成員的努力歸功於自己。"
  },
  {
    "word": "credits",
    "pos": "n.",
    "cn_def": "學分",
    "en_def": "a unit that shows you have completed part of a college course",
    "sentence": "You need to complete at least 120 {{BLANK}} in order to graduate from this university.",
    "cn": "你需要修滿至少 120 個學分才能從這間大學畢業。"
  },
  {
    "word": "incredible",
    "pos": "adj.",
    "cn_def": "難以置信的",
    "en_def": "so surprising or good that it is hard to believe",
    "sentence": "The magician's tricks were so {{BLANK}} that the audience couldn't believe their eyes.",
    "cn": "這位魔術師的把戲太難以置信，觀眾無法相信自己的眼睛。"
  },
  {
    "word": "natural",
    "pos": "adj.",
    "cn_def": "自然的",
    "en_def": "existing in nature; not made or caused by people",
    "sentence": "The park's beauty lies in its {{BLANK}} landscape, with untouched forests and serene lakes.",
    "cn": "這個公園之美在於其自然景觀，擁有原始的森林和寧靜的湖泊。"
  },
  {
    "word": "nature",
    "pos": "n.",
    "cn_def": "大自然",
    "en_def": "the physical world of plants, animals, land and weather, not made by people",
    "sentence": "Spending time in {{BLANK}} can have a calming and rejuvenating effect on people.",
    "cn": "在大自然中度過時間可以對人們產生平靜和振奮的效果。"
  },
  {
    "word": "naturally",
    "pos": "adv.",
    "cn_def": "自然地",
    "en_def": "in a normal way that is not forced; as you would expect",
    "sentence": "Cats are {{BLANK}} curious creatures, often exploring their surroundings with great interest.",
    "cn": "貓是天生好奇的生物，通常以極大的興趣探索著周圍的環境。"
  },
  {
    "word": "be curious about",
    "pos": "phr.",
    "cn_def": "對⋯⋯好奇",
    "en_def": "to want to know or learn about something",
    "sentence": "Children tend to {{BLANK}} the world around them.",
    "cn": "孩子們往往對他們周圍的世界充滿好奇心。"
  },
  {
    "word": "curiosity",
    "pos": "n.",
    "cn_def": "好奇心",
    "en_def": "a strong wish to know or learn about something",
    "sentence": "The scientist's {{BLANK}} led to groundbreaking discoveries in the field of astronomy.",
    "cn": "這位科學家的好奇心在天文學領域帶來了突破性的發現。"
  },
  {
    "word": "nevertheless",
    "pos": "adv.",
    "cn_def": "然而；不過",
    "en_def": "in spite of what has just been said; however",
    "sentence": "The weather was gloomy; {{BLANK}}, we decided to go for a hike.",
    "cn": "天氣陰沉；然而，我們決定去遠足。"
  },
  {
    "word": "impress",
    "pos": "v.",
    "cn_def": "使...留下深刻印象",
    "en_def": "to make someone admire or respect you",
    "sentence": "He tried to {{BLANK}} his new boss by staying late at the office and finishing all his reports ahead of schedule.",
    "cn": "他試圖透過加班和提前完成所有報告來給新老闆留下深刻印象。"
  },
  {
    "word": "impressive",
    "pos": "adj.",
    "cn_def": "令人印象深刻的",
    "en_def": "making you admire it because it is very good, large or skillful",
    "sentence": "The young athlete's performance was truly {{BLANK}}, as she broke three school records in a single day.",
    "cn": "那位年輕運動員的表現確實令人印象深刻，她在一天內打破了三項學校紀錄。"
  },
  {
    "word": "impressed",
    "pos": "adj.",
    "cn_def": "感到印象深刻的",
    "en_def": "feeling admiration for someone or something",
    "sentence": "The judges were deeply {{BLANK}} with the student's creative solution to the environmental problem.",
    "cn": "評審對該學生解決環境問題的創意方案感到印象深刻。"
  },
  {
    "word": "left a lasting impression on",
    "pos": "phr.",
    "cn_def": "給...留下...的印象",
    "en_def": "to cause someone to have a particular feeling or opinion about you that stays with them",
    "sentence": "His kindness and patience {{BLANK}} the children he taught during the summer camp.",
    "cn": "他的善良與耐心給他在夏令營教過的孩子們留下了持久的印象。"
  },
  {
    "word": "make a good impression on",
    "pos": "phr.",
    "cn_def": "對...產生...的印象",
    "en_def": "to cause someone to form a particular opinion of you",
    "sentence": "It is important to {{BLANK}} the interviewer if you want to get the job.",
    "cn": "如果你想得到這份工作，給面試官留下好印象是很重要的。"
  },
  {
    "word": "distinct",
    "pos": "adj.",
    "cn_def": "有區別的；明顯的",
    "en_def": "clearly different or separate; easy to see, hear or notice",
    "sentence": "The two species have {{BLANK}} characteristics that set them apart from each other.",
    "cn": "這兩個物種具有明顯的特徵，使它們彼此區別開來。"
  },
  {
    "word": "distinct",
    "pos": "adj.",
    "cn_def": "截然不同的",
    "en_def": "completely different from something else",
    "sentence": "There is a {{BLANK}} difference between the two products, even though they look similar at first glance.",
    "cn": "雖然這兩款產品乍看之下很像，但它們之間有著截然不同的區別。"
  },
  {
    "word": "distinctive",
    "pos": "adj.",
    "cn_def": "獨特的、有特色的",
    "en_def": "having a special quality that makes something easy to recognize",
    "sentence": "The male peacock is known for its {{BLANK}} tail feathers, which it uses to attract mates.",
    "cn": "雄孔雀以其獨特的尾羽聞名，牠用尾羽來吸引配偶。"
  },
  {
    "word": "distinction",
    "pos": "n.",
    "cn_def": "區別；卓越、殊榮",
    "en_def": "a clear difference between things; a special honor or excellent quality",
    "sentence": "She passed the bar exam with {{BLANK}}, earning one of the highest scores in the country.",
    "cn": "她以優異的成績通過了律師執照考試，獲得了全國最高分之一的殊榮。"
  },
  {
    "word": "phenomenon",
    "pos": "n.",
    "cn_def": "現象",
    "en_def": "something that happens or exists and can be seen or studied",
    "sentence": "The Northern Lights are a natural {{BLANK}} that attracts tourists from around the world.",
    "cn": "北極光是一個吸引來自世界各地的遊客的自然現象。"
  },
  {
    "word": "natural phenomenon",
    "pos": "phr.",
    "cn_def": "自然現象",
    "en_def": "an event in nature, such as lightning or an earthquake",
    "sentence": "The Northern Lights are a spectacular {{BLANK}} that attracts thousands of tourists to the Arctic every year.",
    "cn": "北極光是一種壯觀的自然現象，每年吸引數千名遊客前往北極。"
  },
  {
    "word": "phenomenal",
    "pos": "adj.",
    "cn_def": "非凡的、驚人的",
    "en_def": "very great or impressive; extraordinary",
    "sentence": "The company has seen {{BLANK}} growth over the past year, with its stock price nearly doubling.",
    "cn": "該公司在過去一年中取得了驚人的增長，其股價幾乎翻了一倍。"
  },
  {
    "word": "trend",
    "pos": "n.",
    "cn_def": "趨勢、傾向",
    "en_def": "a general direction in which something is changing or developing",
    "sentence": "There is a growing {{BLANK}} toward remote work as more companies realize the benefits of flexibility.",
    "cn": "隨著越來越多公司意識到靈活性的好處，遠距辦公的趨勢正日益增長。"
  },
  {
    "word": "trendy",
    "pos": "adj.",
    "cn_def": "時髦的、流行的",
    "en_def": "very fashionable and modern",
    "sentence": "This neighborhood is famous for its {{BLANK}} cafes and boutiques that attract many young people.",
    "cn": "這個社區以其時髦的咖啡館和精品店聞名，吸引了許多青年。"
  },
  {
    "word": "science",
    "pos": "n.",
    "cn_def": "科學",
    "en_def": "the study of the natural world through observation and experiments",
    "sentence": "Advancements in {{BLANK}} have allowed us to explore deep space and develop cures for many diseases.",
    "cn": "科學的進步使我們能夠探索深太空並開發出許多疾病的療法。"
  },
  {
    "word": "scientist",
    "pos": "n.",
    "cn_def": "科學家",
    "en_def": "a person who studies or works in science",
    "sentence": "The {{BLANK}} spent years in the laboratory conducting experiments to test her new hypothesis.",
    "cn": "這位科學家在實驗室裡花了數年時間進行實驗，以測試她的新假設。"
  },
  {
    "word": "scientific",
    "pos": "adj.",
    "cn_def": "科學的",
    "en_def": "relating to science or using its careful methods",
    "sentence": "The experiment was conducted following strict {{BLANK}} methods to ensure accurate results.",
    "cn": "實驗是按照嚴格的科學方法進行的，以確保準確的結果。"
  },
  {
    "word": "scientifically",
    "pos": "adv.",
    "cn_def": "科學地、合乎科學地",
    "en_def": "in a way that follows the methods of science",
    "sentence": "It has been {{BLANK}} proven that regular exercise can significantly improve mental health and reduce stress.",
    "cn": "定期運動已被科學證明可以顯著改善心理健康並減輕壓力。"
  },
  {
    "word": "puzzle",
    "pos": "n.",
    "cn_def": "謎題；難題",
    "en_def": "a game or problem that you have to think hard to solve",
    "sentence": "The crossword {{BLANK}} in today's newspaper was quite challenging.",
    "cn": "今天的報紙上的填字遊戲謎題非常具有挑戰性。"
  },
  {
    "word": "puzzled",
    "pos": "v.",
    "cn_def": "使困惑；使感到困惑",
    "en_def": "to make someone feel confused because they cannot understand something",
    "sentence": "The complex instructions {{BLANK}} many participants, causing them to seek help.",
    "cn": "複雜的說明讓許多參與者感到困惑，迫使他們尋求幫助。"
  },
  {
    "word": "puzzled",
    "pos": "adj.",
    "cn_def": "感到困惑的",
    "en_def": "confused because you cannot understand something",
    "sentence": "The detective had a {{BLANK}} look on his face because the evidence at the crime scene didn't make sense.",
    "cn": "偵探臉上帶著困惑的神情，因為犯罪現場的證據並不合理。"
  },
  {
    "word": "puzzling",
    "pos": "adj.",
    "cn_def": "令人費解的、撲朔迷離的",
    "en_def": "difficult to understand or explain",
    "sentence": "It was a {{BLANK}} mystery why all the lights in the building suddenly went out at the same time.",
    "cn": "建築物內所有的燈為何突然同時熄滅，是一個令人費解的謎團。"
  },
  {
    "word": "perfect",
    "pos": "adj.",
    "cn_def": "完美的",
    "en_def": "having no mistakes or faults; as good as possible",
    "sentence": "Her dance performance was flawless and truly {{BLANK}}.",
    "cn": "她的舞蹈表演無懈可擊，真的很完美。"
  },
  {
    "word": "perfection",
    "pos": "n.",
    "cn_def": "完美",
    "en_def": "the state of being perfect",
    "sentence": "The artist was a perfectionist, always striving for {{BLANK}} in every brushstroke.",
    "cn": "這位藝術家是個完美主義者，總是在每一筆畫中追求完美。"
  },
  {
    "word": "therefore",
    "pos": "adv.",
    "cn_def": "因此",
    "en_def": "for that reason; as a result",
    "sentence": "The weather forecast predicted rain; {{BLANK}}, we decided to reschedule our picnic.",
    "cn": "天氣預報預測會下雨，因此我們決定重新安排我們的野餐。"
  },
  {
    "word": "lay",
    "pos": "v.",
    "cn_def": "下蛋",
    "en_def": "(of a bird, insect or reptile) to produce eggs",
    "sentence": "Most reptiles {{BLANK}} eggs rather than giving birth to live young.",
    "cn": "大多數爬行動物會下蛋，而不是生下活體幼崽。"
  },
  {
    "word": "lay",
    "pos": "v.",
    "cn_def": "放置物品",
    "en_def": "to put something down carefully in a flat position",
    "sentence": "She asked her son to {{BLANK}} his toys before dinner.",
    "cn": "她叫兒子在晚餐前將玩具放好。"
  },
  {
    "word": "lied",
    "pos": "v.",
    "cn_def": "說謊",
    "en_def": "to say something that you know is not true",
    "sentence": "He {{BLANK}} to his parents about where he was last night, and now he feels guilty about it.",
    "cn": "他對父母謊報了昨天晚上他在哪裡，現在他對此感到內疚。"
  },
  {
    "word": "lay",
    "pos": "v.",
    "cn_def": "躺；坐落於",
    "en_def": "to be in a flat position on a surface; to be located in a place",
    "sentence": "After a long day of hiking, the exhausted travelers {{BLANK}} down on the grass to rest.",
    "cn": "經過一整天的健行後，疲憊的旅人躺在草地上休息。"
  },
  {
    "word": "categories",
    "pos": "n.",
    "cn_def": "類別；種類",
    "en_def": "a group of people or things that are similar in some way",
    "sentence": "The products are divided into different {{BLANK}} based on their features.",
    "cn": "這些產品根據其特點被分成不同的類別。"
  },
  {
    "word": "categorize",
    "pos": "v.",
    "cn_def": "分類",
    "en_def": "to put people or things into groups according to their type",
    "sentence": "The library staff had to {{BLANK}} the books according to their genres.",
    "cn": "圖書館工作人員需要根據書籍的類型對其進行分類。"
  },
  {
    "word": "worm",
    "pos": "n.",
    "cn_def": "蟲子；蠕蟲",
    "en_def": "a small, long, thin animal with a soft body and no legs",
    "sentence": "The child was fascinated by the tiny {{BLANK}} crawling in the garden.",
    "cn": "孩子對在花園裡爬行的小蟲子非常著迷。"
  }
];

const MCQS = [
  {
    "q": "If you don't pay your bills on time, it will damage your ______ and make it hard to get a loan.",
    "options": [
      "credit",
      "science",
      "categories",
      "worm"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "He prefers using a ______ instead of cash because it is more convenient and he can earn reward points.",
    "options": [
      "left a lasting impression on",
      "take credit",
      "credit card",
      "natural phenomenon"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Although many people worked on the project, the manager took all the ______ for its success.",
    "options": [
      "worm",
      "perfection",
      "distinction",
      "credit"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "A good leader should never ______ for the hard work of their team members.",
    "options": [
      "natural phenomenon",
      "take credit",
      "make a good impression on",
      "be curious about"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "You need to complete at least 120 ______ in order to graduate from this university.",
    "options": [
      "curiosity",
      "scientist",
      "perfection",
      "credits"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The magician's tricks were so ______ that the audience couldn't believe their eyes.",
    "options": [
      "distinctive",
      "incredible",
      "impressive",
      "phenomenal"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The park's beauty lies in its ______ landscape, with untouched forests and serene lakes.",
    "options": [
      "natural",
      "impressed",
      "puzzled",
      "phenomenal"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Spending time in ______ can have a calming and rejuvenating effect on people.",
    "options": [
      "science",
      "puzzle",
      "nature",
      "categories"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Cats are ______ curious creatures, often exploring their surroundings with great interest.",
    "options": [
      "naturally",
      "therefore",
      "scientifically",
      "nevertheless"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Children tend to ______ the world around them.",
    "options": [
      "make a good impression on",
      "take credit",
      "left a lasting impression on",
      "be curious about"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The scientist's ______ led to groundbreaking discoveries in the field of astronomy.",
    "options": [
      "worm",
      "puzzle",
      "curiosity",
      "distinction"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The weather was gloomy; ______, we decided to go for a hike.",
    "options": [
      "therefore",
      "nevertheless",
      "scientifically",
      "naturally"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "He tried to ______ his new boss by staying late at the office and finishing all his reports ahead of schedule.",
    "options": [
      "categorize",
      "puzzled",
      "lay",
      "impress"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The young athlete's performance was truly ______, as she broke three school records in a single day.",
    "options": [
      "natural",
      "impressive",
      "puzzled",
      "incredible"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The judges were deeply ______ with the student's creative solution to the environmental problem.",
    "options": [
      "puzzled",
      "scientific",
      "impressed",
      "incredible"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "His kindness and patience ______ the children he taught during the summer camp.",
    "options": [
      "left a lasting impression on",
      "credit card",
      "natural phenomenon",
      "make a good impression on"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "It is important to ______ the interviewer if you want to get the job.",
    "options": [
      "be curious about",
      "natural phenomenon",
      "take credit",
      "make a good impression on"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The two species have ______ characteristics that set them apart from each other.",
    "options": [
      "distinct",
      "distinctive",
      "puzzled",
      "puzzling"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "There is a ______ difference between the two products, even though they look similar at first glance.",
    "options": [
      "scientific",
      "puzzled",
      "distinct",
      "perfect"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The male peacock is known for its ______ tail feathers, which it uses to attract mates.",
    "options": [
      "trendy",
      "distinctive",
      "scientific",
      "puzzled"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "She passed the bar exam with ______, earning one of the highest scores in the country.",
    "options": [
      "phenomenon",
      "trend",
      "distinction",
      "puzzle"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The Northern Lights are a natural ______ that attracts tourists from around the world.",
    "options": [
      "phenomenon",
      "nature",
      "perfection",
      "puzzle"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The Northern Lights are a spectacular ______ that attracts thousands of tourists to the Arctic every year.",
    "options": [
      "take credit",
      "natural phenomenon",
      "left a lasting impression on",
      "be curious about"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The company has seen ______ growth over the past year, with its stock price nearly doubling.",
    "options": [
      "distinctive",
      "impressive",
      "impressed",
      "phenomenal"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "There is a growing ______ toward remote work as more companies realize the benefits of flexibility.",
    "options": [
      "scientist",
      "categories",
      "trend",
      "distinction"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "This neighborhood is famous for its ______ cafes and boutiques that attract many young people.",
    "options": [
      "trendy",
      "incredible",
      "puzzled",
      "phenomenal"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Advancements in ______ have allowed us to explore deep space and develop cures for many diseases.",
    "options": [
      "nature",
      "phenomenon",
      "trend",
      "science"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The ______ spent years in the laboratory conducting experiments to test her new hypothesis.",
    "options": [
      "puzzle",
      "scientist",
      "credit",
      "worm"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The experiment was conducted following strict ______ methods to ensure accurate results.",
    "options": [
      "puzzling",
      "impressed",
      "trendy",
      "scientific"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "It has been ______ proven that regular exercise can significantly improve mental health and reduce stress.",
    "options": [
      "nevertheless",
      "scientifically",
      "therefore",
      "naturally"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The crossword ______ in today's newspaper was quite challenging.",
    "options": [
      "puzzle",
      "trend",
      "science",
      "curiosity"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The complex instructions ______ many participants, causing them to seek help.",
    "options": [
      "lay",
      "impress",
      "puzzled",
      "lied"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The detective had a ______ look on his face because the evidence at the crime scene didn't make sense.",
    "options": [
      "puzzled",
      "distinct",
      "natural",
      "incredible"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "It was a ______ mystery why all the lights in the building suddenly went out at the same time.",
    "options": [
      "scientific",
      "puzzling",
      "puzzled",
      "impressive"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "Her dance performance was flawless and truly ______.",
    "options": [
      "trendy",
      "distinct",
      "perfect",
      "puzzling"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "The artist was a perfectionist, always striving for ______ in every brushstroke.",
    "options": [
      "trend",
      "puzzle",
      "scientist",
      "perfection"
    ],
    "answer": 3,
    "vocabIndex": 35
  },
  {
    "q": "The weather forecast predicted rain; ______, we decided to reschedule our picnic.",
    "options": [
      "nevertheless",
      "therefore",
      "scientifically",
      "naturally"
    ],
    "answer": 1,
    "vocabIndex": 36
  },
  {
    "q": "Most reptiles ______ eggs rather than giving birth to live young.",
    "options": [
      "lay",
      "impress",
      "lied",
      "categorize"
    ],
    "answer": 0,
    "vocabIndex": 37
  },
  {
    "q": "She asked her son to ______ his toys before dinner.",
    "options": [
      "categorize",
      "puzzled",
      "lied",
      "lay"
    ],
    "answer": 3,
    "vocabIndex": 38
  },
  {
    "q": "He ______ to his parents about where he was last night, and now he feels guilty about it.",
    "options": [
      "impress",
      "categorize",
      "lied",
      "lay"
    ],
    "answer": 2,
    "vocabIndex": 39
  },
  {
    "q": "After a long day of hiking, the exhausted travelers ______ down on the grass to rest.",
    "options": [
      "lay",
      "puzzled",
      "categorize",
      "impress"
    ],
    "answer": 0,
    "vocabIndex": 40
  },
  {
    "q": "The products are divided into different ______ based on their features.",
    "options": [
      "scientist",
      "categories",
      "phenomenon",
      "credits"
    ],
    "answer": 1,
    "vocabIndex": 41
  },
  {
    "q": "The library staff had to ______ the books according to their genres.",
    "options": [
      "lay",
      "impress",
      "lied",
      "categorize"
    ],
    "answer": 3,
    "vocabIndex": 42
  },
  {
    "q": "The child was fascinated by the tiny ______ crawling in the garden.",
    "options": [
      "categories",
      "distinction",
      "worm",
      "curiosity"
    ],
    "answer": 2,
    "vocabIndex": 43
  }
];

const LOOKUP = {
  "credit": {
    "pos": "n.",
    "en_def": "the trust that lets you borrow money or buy something now and pay for it later",
    "cn_def": "信用、信貸",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the trust that lets you borrow money or buy something now and pay for it later",
        "cn_def": "信用、信貸"
      },
      {
        "pos": "n.",
        "en_def": "praise or approval for something good you have done",
        "cn_def": "功勞、讚揚"
      },
      {
        "pos": "n.",
        "en_def": "a unit that shows you have completed part of a college course",
        "cn_def": "學分"
      }
    ]
  },
  "credit card": {
    "pos": "phr.",
    "en_def": "a small plastic card used to buy things now and pay later",
    "cn_def": "信用卡",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a small plastic card used to buy things now and pay later",
        "cn_def": "信用卡"
      }
    ]
  },
  "take credit": {
    "pos": "phr.",
    "en_def": "to accept praise for something, often something others did",
    "cn_def": "邀功、歸功於",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to accept praise for something, often something others did",
        "cn_def": "邀功、歸功於"
      }
    ]
  },
  "credits": {
    "pos": "n.",
    "en_def": "a unit that shows you have completed part of a college course",
    "cn_def": "學分",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a unit that shows you have completed part of a college course",
        "cn_def": "學分"
      }
    ]
  },
  "incredible": {
    "pos": "adj.",
    "en_def": "so surprising or good that it is hard to believe",
    "cn_def": "難以置信的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "so surprising or good that it is hard to believe",
        "cn_def": "難以置信的"
      }
    ]
  },
  "natural": {
    "pos": "adj.",
    "en_def": "existing in nature; not made or caused by people",
    "cn_def": "自然的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "existing in nature; not made or caused by people",
        "cn_def": "自然的"
      }
    ]
  },
  "nature": {
    "pos": "n.",
    "en_def": "the physical world of plants, animals, land and weather, not made by people",
    "cn_def": "大自然",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the physical world of plants, animals, land and weather, not made by people",
        "cn_def": "大自然"
      }
    ]
  },
  "naturally": {
    "pos": "adv.",
    "en_def": "in a normal way that is not forced; as you would expect",
    "cn_def": "自然地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a normal way that is not forced; as you would expect",
        "cn_def": "自然地"
      }
    ]
  },
  "be curious about": {
    "pos": "phr.",
    "en_def": "to want to know or learn about something",
    "cn_def": "對⋯⋯好奇",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to want to know or learn about something",
        "cn_def": "對⋯⋯好奇"
      }
    ]
  },
  "curiosity": {
    "pos": "n.",
    "en_def": "a strong wish to know or learn about something",
    "cn_def": "好奇心",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a strong wish to know or learn about something",
        "cn_def": "好奇心"
      }
    ]
  },
  "nevertheless": {
    "pos": "adv.",
    "en_def": "in spite of what has just been said; however",
    "cn_def": "然而；不過",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in spite of what has just been said; however",
        "cn_def": "然而；不過"
      }
    ]
  },
  "impress": {
    "pos": "v.",
    "en_def": "to make someone admire or respect you",
    "cn_def": "使...留下深刻印象",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make someone admire or respect you",
        "cn_def": "使...留下深刻印象"
      }
    ]
  },
  "impressive": {
    "pos": "adj.",
    "en_def": "making you admire it because it is very good, large or skillful",
    "cn_def": "令人印象深刻的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "making you admire it because it is very good, large or skillful",
        "cn_def": "令人印象深刻的"
      }
    ]
  },
  "impressed": {
    "pos": "adj.",
    "en_def": "feeling admiration for someone or something",
    "cn_def": "感到印象深刻的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling admiration for someone or something",
        "cn_def": "感到印象深刻的"
      }
    ]
  },
  "leave a... impression on": {
    "pos": "phr.",
    "en_def": "to cause someone to have a particular feeling or opinion about you that stays with them",
    "cn_def": "給...留下...的印象",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to cause someone to have a particular feeling or opinion about you that stays with them",
        "cn_def": "給...留下...的印象"
      }
    ]
  },
  "left a lasting impression on": {
    "pos": "phr.",
    "en_def": "to cause someone to have a particular feeling or opinion about you that stays with them",
    "cn_def": "給...留下...的印象",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to cause someone to have a particular feeling or opinion about you that stays with them",
        "cn_def": "給...留下...的印象"
      }
    ]
  },
  "make a... impression on": {
    "pos": "phr.",
    "en_def": "to cause someone to form a particular opinion of you",
    "cn_def": "對...產生...的印象",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to cause someone to form a particular opinion of you",
        "cn_def": "對...產生...的印象"
      }
    ]
  },
  "make a good impression on": {
    "pos": "phr.",
    "en_def": "to cause someone to form a particular opinion of you",
    "cn_def": "對...產生...的印象",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to cause someone to form a particular opinion of you",
        "cn_def": "對...產生...的印象"
      }
    ]
  },
  "distinct": {
    "pos": "adj.",
    "en_def": "clearly different or separate; easy to see, hear or notice",
    "cn_def": "有區別的；明顯的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "clearly different or separate; easy to see, hear or notice",
        "cn_def": "有區別的；明顯的"
      },
      {
        "pos": "adj.",
        "en_def": "completely different from something else",
        "cn_def": "截然不同的"
      }
    ]
  },
  "distinctive": {
    "pos": "adj.",
    "en_def": "having a special quality that makes something easy to recognize",
    "cn_def": "獨特的、有特色的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a special quality that makes something easy to recognize",
        "cn_def": "獨特的、有特色的"
      }
    ]
  },
  "distinction": {
    "pos": "n.",
    "en_def": "a clear difference between things; a special honor or excellent quality",
    "cn_def": "區別；卓越、殊榮",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a clear difference between things; a special honor or excellent quality",
        "cn_def": "區別；卓越、殊榮"
      }
    ]
  },
  "phenomenon": {
    "pos": "n.",
    "en_def": "something that happens or exists and can be seen or studied",
    "cn_def": "現象",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that happens or exists and can be seen or studied",
        "cn_def": "現象"
      }
    ]
  },
  "natural phenomenon": {
    "pos": "phr.",
    "en_def": "an event in nature, such as lightning or an earthquake",
    "cn_def": "自然現象",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an event in nature, such as lightning or an earthquake",
        "cn_def": "自然現象"
      }
    ]
  },
  "phenomenal": {
    "pos": "adj.",
    "en_def": "very great or impressive; extraordinary",
    "cn_def": "非凡的、驚人的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very great or impressive; extraordinary",
        "cn_def": "非凡的、驚人的"
      }
    ]
  },
  "trend": {
    "pos": "n.",
    "en_def": "a general direction in which something is changing or developing",
    "cn_def": "趨勢、傾向",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a general direction in which something is changing or developing",
        "cn_def": "趨勢、傾向"
      }
    ]
  },
  "trendy": {
    "pos": "adj.",
    "en_def": "very fashionable and modern",
    "cn_def": "時髦的、流行的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very fashionable and modern",
        "cn_def": "時髦的、流行的"
      }
    ]
  },
  "science": {
    "pos": "n.",
    "en_def": "the study of the natural world through observation and experiments",
    "cn_def": "科學",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the study of the natural world through observation and experiments",
        "cn_def": "科學"
      }
    ]
  },
  "scientist": {
    "pos": "n.",
    "en_def": "a person who studies or works in science",
    "cn_def": "科學家",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who studies or works in science",
        "cn_def": "科學家"
      }
    ]
  },
  "scientific": {
    "pos": "adj.",
    "en_def": "relating to science or using its careful methods",
    "cn_def": "科學的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to science or using its careful methods",
        "cn_def": "科學的"
      }
    ]
  },
  "scientifically": {
    "pos": "adv.",
    "en_def": "in a way that follows the methods of science",
    "cn_def": "科學地、合乎科學地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that follows the methods of science",
        "cn_def": "科學地、合乎科學地"
      }
    ]
  },
  "puzzle": {
    "pos": "n.",
    "en_def": "a game or problem that you have to think hard to solve",
    "cn_def": "謎題；難題",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a game or problem that you have to think hard to solve",
        "cn_def": "謎題；難題"
      },
      {
        "pos": "v.",
        "en_def": "to make someone feel confused because they cannot understand something",
        "cn_def": "使困惑；使感到困惑"
      }
    ]
  },
  "puzzled": {
    "pos": "v.",
    "en_def": "to make someone feel confused because they cannot understand something",
    "cn_def": "使困惑；使感到困惑",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make someone feel confused because they cannot understand something",
        "cn_def": "使困惑；使感到困惑"
      },
      {
        "pos": "adj.",
        "en_def": "confused because you cannot understand something",
        "cn_def": "感到困惑的"
      }
    ]
  },
  "puzzling": {
    "pos": "adj.",
    "en_def": "difficult to understand or explain",
    "cn_def": "令人費解的、撲朔迷離的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "difficult to understand or explain",
        "cn_def": "令人費解的、撲朔迷離的"
      }
    ]
  },
  "perfect": {
    "pos": "adj.",
    "en_def": "having no mistakes or faults; as good as possible",
    "cn_def": "完美的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having no mistakes or faults; as good as possible",
        "cn_def": "完美的"
      }
    ]
  },
  "perfection": {
    "pos": "n.",
    "en_def": "the state of being perfect",
    "cn_def": "完美",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being perfect",
        "cn_def": "完美"
      }
    ]
  },
  "therefore": {
    "pos": "adv.",
    "en_def": "for that reason; as a result",
    "cn_def": "因此",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "for that reason; as a result",
        "cn_def": "因此"
      }
    ]
  },
  "lay": {
    "pos": "v.",
    "en_def": "(of a bird, insect or reptile) to produce eggs",
    "cn_def": "下蛋",
    "combined": [
      {
        "pos": "v.",
        "en_def": "(of a bird, insect or reptile) to produce eggs",
        "cn_def": "下蛋"
      },
      {
        "pos": "v.",
        "en_def": "to put something down carefully in a flat position",
        "cn_def": "放置物品"
      },
      {
        "pos": "v.",
        "en_def": "to be in a flat position on a surface; to be located in a place",
        "cn_def": "躺；坐落於"
      }
    ]
  },
  "lied": {
    "pos": "v.",
    "en_def": "to say something that you know is not true",
    "cn_def": "說謊",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to say something that you know is not true",
        "cn_def": "說謊"
      }
    ]
  },
  "lie": {
    "pos": "v.",
    "en_def": "to say something that you know is not true",
    "cn_def": "說謊",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to say something that you know is not true",
        "cn_def": "說謊"
      },
      {
        "pos": "v.",
        "en_def": "to be in a flat position on a surface; to be located in a place",
        "cn_def": "躺；坐落於"
      }
    ]
  },
  "category": {
    "pos": "n.",
    "en_def": "a group of people or things that are similar in some way",
    "cn_def": "類別；種類",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a group of people or things that are similar in some way",
        "cn_def": "類別；種類"
      }
    ]
  },
  "categories": {
    "pos": "n.",
    "en_def": "a group of people or things that are similar in some way",
    "cn_def": "類別；種類",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a group of people or things that are similar in some way",
        "cn_def": "類別；種類"
      }
    ]
  },
  "categorize": {
    "pos": "v.",
    "en_def": "to put people or things into groups according to their type",
    "cn_def": "分類",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to put people or things into groups according to their type",
        "cn_def": "分類"
      }
    ]
  },
  "worm": {
    "pos": "n.",
    "en_def": "a small, long, thin animal with a soft body and no legs",
    "cn_def": "蟲子；蠕蟲",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small, long, thin animal with a soft body and no legs",
        "cn_def": "蟲子；蠕蟲"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
