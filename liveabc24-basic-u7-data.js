// Unit 7 Quiz Data: consider – scented
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Basic U7 - consider – scented",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "consider",
    "pos": "v.",
    "cn_def": "考慮",
    "en_def": "to think carefully about something before making a decision.",
    "sentence": "It is essential to {{BLANK}} both the advantages and disadvantages before making a decision that will impact the entire organization.",
    "cn": "在對整個組織產生影響的決策之前，考慮到利弊是至關重要的。"
  },
  {
    "word": "considerable",
    "pos": "adj.",
    "cn_def": "相當大的",
    "en_def": "large enough in amount, size, or importance to be noticed.",
    "sentence": "The project required a {{BLANK}} amount of time and resources to complete, but the results were worth the effort.",
    "cn": "這個項目需要大量的時間和資源才能完成，但結果是值得的。"
  },
  {
    "word": "considerate",
    "pos": "adj.",
    "cn_def": "體貼的",
    "en_def": "kind and careful not to upset or inconvenience others.",
    "sentence": "Sarah is known for her {{BLANK}} nature, always thinking of others and making sure everyone feels comfortable and cared for.",
    "cn": "莎拉以她的體貼天性而聞名，總是關心他人，確保每個人感到舒適和關愛。"
  },
  {
    "word": "take into consideration",
    "pos": "phr.",
    "cn_def": "考慮到",
    "en_def": "to think about a fact or situation when making a decision.",
    "sentence": "When planning the event, we need to {{BLANK}} all potential challenges and unforeseen circumstances to ensure its success.",
    "cn": "在計劃活動時，我們需要考慮到所有可能的挑戰和意想不到的情況，以確保其成功。"
  },
  {
    "word": "stranger",
    "pos": "n.",
    "cn_def": "陌生人",
    "en_def": "a person whom you do not know.",
    "sentence": "She approached the {{BLANK}} and struck up a conversation, turning a chance encounter into a meaningful connection.",
    "cn": "她走近那個陌生人，開始了一次交談，將一次偶然的相遇變成了一次有意義的聯繫。"
  },
  {
    "word": "parade",
    "pos": "v.",
    "cn_def": "遊行",
    "en_def": "to walk or march in a public celebration or display.",
    "sentence": "The city will {{BLANK}} down the main street to celebrate the national holiday, with colorful floats and marching bands.",
    "cn": "城市將沿主要街道遊行，慶祝國慶日，有多彩的花車和行進樂隊。"
  },
  {
    "word": "parade",
    "pos": "n.",
    "cn_def": "遊行",
    "en_def": "a public celebration in which people, vehicles, or performers move along a street.",
    "sentence": "The annual Thanksgiving {{BLANK}} attracts thousands of spectators who line the streets to enjoy the festive atmosphere.",
    "cn": "每年的感恩節遊行吸引了成千上萬的觀眾，他們在街頭欣賞著節日氛圍。"
  },
  {
    "word": "cheer",
    "pos": "v.",
    "cn_def": "歡呼",
    "en_def": "to shout loudly to show support or happiness.",
    "sentence": "Fans began to {{BLANK}} loudly when their team scored the winning goal in the final minutes of the game.",
    "cn": "當球隊在比賽最後幾分鐘踢進致勝球時，球迷開始大聲歡呼。"
  },
  {
    "word": "cheer",
    "pos": "n.",
    "cn_def": "歡呼",
    "en_def": "a shout of happiness, praise, or encouragement.",
    "sentence": "The {{BLANK}} and applause filled the stadium, creating an electric atmosphere as the athletes crossed the finish line.",
    "cn": "歡呼和掌聲充滿了體育場，當運動員越過終點線時，營造出一種充滿活力的氛圍。"
  },
  {
    "word": "cheer her up",
    "pos": "phr.",
    "cn_def": "高興起來；振作起來",
    "en_def": "to become happier or make someone feel happier.",
    "sentence": "After a tough week, Sarah's friends decided to throw her a surprise party to {{BLANK}} and bring a smile to her face.",
    "cn": "經過艱難的一周後，莎拉的朋友們決定為她舉辦一個驚喜派對，讓她振作起來並露出笑容。"
  },
  {
    "word": "cheerful",
    "pos": "adj.",
    "cn_def": "快樂的",
    "en_def": "happy and positive.",
    "sentence": "Emily's {{BLANK}} disposition brightened the room, and her laughter was contagious, spreading joy to everyone around her.",
    "cn": "艾米莉快樂的性格照亮了整個房間，她的笑聲很有感染力，把快樂傳給周圍的人。"
  },
  {
    "word": "splash",
    "pos": "v.",
    "cn_def": "濺潑",
    "en_def": "to make liquid fly or fall in drops.",
    "sentence": "The kids decided to {{BLANK}} in the puddles after the rain, enjoying the simple pleasure of getting wet and dirty.",
    "cn": "孩子們決定在雨後的水坑裡濺水，享受弄濕和弄髒的簡單樂趣。"
  },
  {
    "word": "good-natured",
    "pos": "adj.",
    "cn_def": "好性格的",
    "en_def": "friendly, patient, and pleasant.",
    "sentence": "John's {{BLANK}} personality made him a favorite among his coworkers, as he was always ready to lend a helping hand and offer a smile.",
    "cn": "約翰的好性格使他成為同事們喜愛的人，因為他總是樂於伸出援手並獻上微笑。"
  },
  {
    "word": "kind-hearted",
    "pos": "adj.",
    "cn_def": "善良的",
    "en_def": "kind and generous toward other people or animals.",
    "sentence": "Maria's {{BLANK}} nature led her to volunteer at the local animal shelter, where she cared for abandoned pets.",
    "cn": "瑪麗亞的善良天性使她成為當地動物收容所的志願者，在那裡照顧被遺棄的寵物。"
  },
  {
    "word": "ill-tempered",
    "pos": "adj.",
    "cn_def": "易怒的",
    "en_def": "easily annoyed or made angry.",
    "sentence": "His {{BLANK}} outbursts often strained his relationships with others, as people found it challenging to be around him when he was in a bad mood.",
    "cn": "他易怒的爆發經常破壞他與他人的關係，因為人們發現他心情不好時很難相處。"
  },
  {
    "word": "old-fashioned",
    "pos": "adj.",
    "cn_def": "過時的",
    "en_def": "not modern; belonging to or typical of the past.",
    "sentence": "Sarah's grandparents had an {{BLANK}} record player that they still used to listen to classic vinyl records.",
    "cn": "莎拉的祖父母有一台過時的唱片機，他們仍用它來聽經典黑膠唱片。"
  },
  {
    "word": "left-handed",
    "pos": "adj.",
    "cn_def": "左撇子的",
    "en_def": "using the left hand more naturally than the right hand.",
    "sentence": "Being {{BLANK}} in a predominantly right-handed world can sometimes present challenges, but many people excel in various fields.",
    "cn": "在主要是右撇子的世界中，左撇子有時可能面臨挑戰，但許多人在各領域都表現出色。"
  },
  {
    "word": "In her spare time",
    "pos": "phr.",
    "cn_def": "在某人的空閒時間",
    "en_def": "during time when one is not working or busy.",
    "sentence": "{{BLANK}}, Jane enjoys reading novels, practicing yoga, and exploring new hiking trails in the mountains.",
    "cn": "在她的空閒時間，珍妮喜歡閱讀小說、練習瑜伽，並探索山區的新徒步步道。"
  },
  {
    "word": "spare you from",
    "pos": "phr.",
    "cn_def": "使免於；使省去",
    "en_def": "to prevent someone from having to experience something unpleasant or unnecessary.",
    "sentence": "This shortcut can {{BLANK}} long delays during the morning commute.",
    "cn": "這條捷徑可以使人免於早晨通勤時的長時間延誤。"
  },
  {
    "word": "spare",
    "pos": "adj.",
    "cn_def": "多餘的；備用的",
    "en_def": "extra and available to use when needed.",
    "sentence": "He had a {{BLANK}} ticket to the concert and offered it to a friend who had missed out on buying one.",
    "cn": "他有一張多餘的音樂會門票，把它提供給一位沒買到票的朋友。"
  },
  {
    "word": "spare",
    "pos": "n.",
    "cn_def": "備用品",
    "en_def": "an extra item kept for use if needed.",
    "sentence": "It is always a good idea to carry a {{BLANK}} umbrella in case of unexpected rain while you are out and about.",
    "cn": "在外出時隨身攜帶一把備用雨傘以應對突然下雨，是一個好主意。"
  },
  {
    "word": "respect",
    "pos": "v.",
    "cn_def": "尊重",
    "en_def": "to treat someone or something as important and valuable.",
    "sentence": "It is important to {{BLANK}} the opinions and beliefs of others, even if they differ from your own.",
    "cn": "尊重他人的意見和信仰很重要，即使它們與你自己的不同。"
  },
  {
    "word": "respect",
    "pos": "n.",
    "cn_def": "尊重",
    "en_def": "admiration or polite treatment for someone or something.",
    "sentence": "Mutual {{BLANK}} in a relationship is the foundation of trust and understanding between partners.",
    "cn": "一段關係中的相互尊重是伴侶之間建立信任和理解的基礎。"
  },
  {
    "word": "respectful",
    "pos": "adj.",
    "cn_def": "尊重的",
    "en_def": "showing politeness and respect.",
    "sentence": "Sarah's {{BLANK}} demeanor toward her colleagues created a harmonious work environment where everyone felt valued.",
    "cn": "莎拉對同事們的尊重態度創造了一個和諧的工作環境，每個人都感到受到重視。"
  },
  {
    "word": "respectable",
    "pos": "adj.",
    "cn_def": "值得尊敬的",
    "en_def": "considered good, proper, or worthy of respect.",
    "sentence": "His dedication to charity work and his contributions to the community earned him a {{BLANK}} reputation.",
    "cn": "他對慈善工作的奉獻以及對社區的貢獻，使他贏得了值得尊敬的聲譽。"
  },
  {
    "word": "respective",
    "pos": "adj.",
    "cn_def": "各自的；分別的",
    "en_def": "belonging separately to each of the people or things already mentioned.",
    "sentence": "The team members presented their {{BLANK}} findings from the research, highlighting their individual contributions.",
    "cn": "團隊成員展示了他們在研究中的各自結果，突出了他們的個別貢獻。"
  },
  {
    "word": "respected",
    "pos": "adj.",
    "cn_def": "受尊敬的",
    "en_def": "admired by many people because of achievements or character.",
    "sentence": "The professor was highly {{BLANK}} in the academic community for his groundbreaking research and contributions to physics.",
    "cn": "這位教授因在物理學領域的開創性研究和貢獻而在學術界受到高度尊敬。"
  },
  {
    "word": "pour",
    "pos": "v.",
    "cn_def": "倒",
    "en_def": "to make a liquid flow from one container into another.",
    "sentence": "She decided to {{BLANK}} a glass of cold water to quench her thirst after spending hours in the scorching sun.",
    "cn": "在烈日下待了幾個小時後，她決定倒一杯冷水解渴。"
  },
  {
    "word": "Tourism",
    "pos": "n.",
    "cn_def": "旅遊",
    "en_def": "the business or activity of people traveling for pleasure.",
    "sentence": "{{BLANK}} plays a significant role in the economy of many countries, attracting visitors from around the world and generating revenue.",
    "cn": "旅遊在許多國家的經濟中扮演重要角色，吸引世界各地的遊客並產生收入。"
  },
  {
    "word": "tourists",
    "pos": "n.",
    "cn_def": "遊客",
    "en_def": "a person who travels to a place for pleasure.",
    "sentence": "The city welcomed a record number of {{BLANK}} last year, with people coming to explore its cultural heritage and natural beauty.",
    "cn": "這座城市去年迎來了創紀錄的遊客數量，人們前來探索它的文化遺產和自然之美。"
  },
  {
    "word": "tourist attraction",
    "pos": "n.",
    "cn_def": "旅遊景點",
    "en_def": "a place that many travelers visit because it is interesting or enjoyable.",
    "sentence": "The ancient castle has become a major {{BLANK}}, drawing visitors from all over the world.",
    "cn": "這座古堡已成為一個主要的旅遊景點，吸引世界各地的遊客。"
  },
  {
    "word": "favorite",
    "pos": "adj.",
    "cn_def": "最喜愛的",
    "en_def": "liked best.",
    "sentence": "Her {{BLANK}} book is a classic novel that she reads every year.",
    "cn": "她最喜愛的書是一部她每年都會讀的經典小說。"
  },
  {
    "word": "target",
    "pos": "n.",
    "cn_def": "目標",
    "en_def": "a goal or result that someone is trying to achieve.",
    "sentence": "The company set a {{BLANK}} of doubling its sales by the end of the year.",
    "cn": "公司設定了在年底前將銷售額增加一倍的目標。"
  },
  {
    "word": "target",
    "pos": "v.",
    "cn_def": "以……為目標",
    "en_def": "to aim an action, product, or message at a particular person or group.",
    "sentence": "The new marketing campaign was designed to {{BLANK}} younger consumers.",
    "cn": "新的營銷活動旨在以年輕消費者為目標。"
  },
  {
    "word": "aimed at",
    "pos": "phr.",
    "cn_def": "以……為目標",
    "en_def": "to be intended for a particular purpose, person, or group.",
    "sentence": "The educational program is {{BLANK}} providing skills training for recent graduates.",
    "cn": "這個教育計劃旨在為新近畢業生提供技能培訓。"
  },
  {
    "word": "aim to",
    "pos": "phr.",
    "cn_def": "旨在",
    "en_def": "to intend or plan to do something.",
    "sentence": "The charity will {{BLANK}} alleviate poverty in rural communities.",
    "cn": "這個慈善機構旨在減輕農村社區的貧困。"
  },
  {
    "word": "reach her goal",
    "pos": "phr.",
    "cn_def": "達成目標",
    "en_def": "to successfully achieve something one has been trying to do.",
    "sentence": "With dedication and hard work, she was able to {{BLANK}} of becoming a doctor.",
    "cn": "通過奉獻和努力工作，她能夠達成成為醫生的目標。"
  },
  {
    "word": "community",
    "pos": "n.",
    "cn_def": "社區",
    "en_def": "a group of people who live in the same area or share something in common.",
    "sentence": "The new park has greatly improved the sense of {{BLANK}} in our neighborhood.",
    "cn": "新公園極大地提升了我們社區的社區感。"
  },
  {
    "word": "a sense of community",
    "pos": "phr.",
    "cn_def": "社區感",
    "en_def": "a feeling of belonging and connection with others in a group or area.",
    "sentence": "Volunteering at the local shelter helped him develop {{BLANK}} with others in the area.",
    "cn": "在當地避難所做義工幫助他與該地區的其他人建立了社區感。"
  },
  {
    "word": "scented",
    "pos": "adj.",
    "cn_def": "有香味的",
    "en_def": "having a pleasant smell.",
    "sentence": "She loves lighting {{BLANK}} candles to create a relaxing atmosphere at home.",
    "cn": "她喜歡點燃有香味的蠟燭，營造家中的放鬆氛圍。"
  }
];

const MCQS = [
  {
    "q": "It is essential to ______ both the advantages and disadvantages before making a decision that will impact the entire organization.",
    "options": [
      "consider",
      "pour",
      "cheer",
      "respect"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The project required a ______ amount of time and resources to complete, but the results were worth the effort.",
    "options": [
      "scented",
      "cheerful",
      "considerable",
      "respectful"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Sarah is known for her ______ nature, always thinking of others and making sure everyone feels comfortable and cared for.",
    "options": [
      "ill-tempered",
      "left-handed",
      "cheerful",
      "considerate"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "When planning the event, we need to ______ all potential challenges and unforeseen circumstances to ensure its success.",
    "options": [
      "In her spare time",
      "take into consideration",
      "cheer her up",
      "reach her goal"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "She approached the ______ and struck up a conversation, turning a chance encounter into a meaningful connection.",
    "options": [
      "stranger",
      "Tourism",
      "parade",
      "spare"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The city will ______ down the main street to celebrate the national holiday, with colorful floats and marching bands.",
    "options": [
      "respect",
      "parade",
      "target",
      "consider"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The annual Thanksgiving ______ attracts thousands of spectators who line the streets to enjoy the festive atmosphere.",
    "options": [
      "Tourism",
      "community",
      "cheer",
      "parade"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Fans began to ______ loudly when their team scored the winning goal in the final minutes of the game.",
    "options": [
      "target",
      "respect",
      "cheer",
      "parade"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The ______ and applause filled the stadium, creating an electric atmosphere as the athletes crossed the finish line.",
    "options": [
      "cheer",
      "stranger",
      "respect",
      "parade"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "After a tough week, Sarah's friends decided to throw her a surprise party to ______ and bring a smile to her face.",
    "options": [
      "reach her goal",
      "In her spare time",
      "a sense of community",
      "cheer her up"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Emily's ______ disposition brightened the room, and her laughter was contagious, spreading joy to everyone around her.",
    "options": [
      "favorite",
      "considerate",
      "cheerful",
      "respected"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The kids decided to ______ in the puddles after the rain, enjoying the simple pleasure of getting wet and dirty.",
    "options": [
      "target",
      "splash",
      "pour",
      "parade"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "John's ______ personality made him a favorite among his coworkers, as he was always ready to lend a helping hand and offer a smile.",
    "options": [
      "respective",
      "considerate",
      "good-natured",
      "respected"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Maria's ______ nature led her to volunteer at the local animal shelter, where she cared for abandoned pets.",
    "options": [
      "considerable",
      "respectable",
      "old-fashioned",
      "kind-hearted"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "His ______ outbursts often strained his relationships with others, as people found it challenging to be around him when he was in a bad mood.",
    "options": [
      "ill-tempered",
      "respectful",
      "old-fashioned",
      "respective"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Sarah's grandparents had an ______ record player that they still used to listen to classic vinyl records.",
    "options": [
      "good-natured",
      "old-fashioned",
      "ill-tempered",
      "respective"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Being ______ in a predominantly right-handed world can sometimes present challenges, but many people excel in various fields.",
    "options": [
      "left-handed",
      "good-natured",
      "respectful",
      "considerable"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "______, Jane enjoys reading novels, practicing yoga, and exploring new hiking trails in the mountains.",
    "options": [
      "aimed at",
      "spare you from",
      "In her spare time",
      "a sense of community"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "This shortcut can ______ long delays during the morning commute.",
    "options": [
      "cheer her up",
      "reach her goal",
      "In her spare time",
      "spare you from"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "He had a ______ ticket to the concert and offered it to a friend who had missed out on buying one.",
    "options": [
      "left-handed",
      "spare",
      "ill-tempered",
      "respected"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "It is always a good idea to carry a ______ umbrella in case of unexpected rain while you are out and about.",
    "options": [
      "spare",
      "tourist attraction",
      "target",
      "stranger"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "It is important to ______ the opinions and beliefs of others, even if they differ from your own.",
    "options": [
      "target",
      "parade",
      "splash",
      "respect"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Mutual ______ in a relationship is the foundation of trust and understanding between partners.",
    "options": [
      "spare",
      "respect",
      "tourists",
      "stranger"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Sarah's ______ demeanor toward her colleagues created a harmonious work environment where everyone felt valued.",
    "options": [
      "spare",
      "favorite",
      "respectful",
      "respected"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "His dedication to charity work and his contributions to the community earned him a ______ reputation.",
    "options": [
      "scented",
      "old-fashioned",
      "considerable",
      "respectable"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The team members presented their ______ findings from the research, highlighting their individual contributions.",
    "options": [
      "left-handed",
      "cheerful",
      "respective",
      "ill-tempered"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The professor was highly ______ in the academic community for his groundbreaking research and contributions to physics.",
    "options": [
      "respected",
      "ill-tempered",
      "left-handed",
      "good-natured"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "She decided to ______ a glass of cold water to quench her thirst after spending hours in the scorching sun.",
    "options": [
      "splash",
      "pour",
      "cheer",
      "target"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "______ plays a significant role in the economy of many countries, attracting visitors from around the world and generating revenue.",
    "options": [
      "Tourism",
      "cheer",
      "respect",
      "target"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The city welcomed a record number of ______ last year, with people coming to explore its cultural heritage and natural beauty.",
    "options": [
      "cheer",
      "tourists",
      "parade",
      "target"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The ancient castle has become a major ______, drawing visitors from all over the world.",
    "options": [
      "stranger",
      "tourists",
      "tourist attraction",
      "target"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Her ______ book is a classic novel that she reads every year.",
    "options": [
      "cheerful",
      "spare",
      "respectable",
      "favorite"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The company set a ______ of doubling its sales by the end of the year.",
    "options": [
      "cheer",
      "target",
      "community",
      "tourist attraction"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The new marketing campaign was designed to ______ younger consumers.",
    "options": [
      "target",
      "pour",
      "cheer",
      "splash"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "The educational program is ______ providing skills training for recent graduates.",
    "options": [
      "a sense of community",
      "reach her goal",
      "spare you from",
      "aimed at"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "The charity will ______ alleviate poverty in rural communities.",
    "options": [
      "aimed at",
      "spare you from",
      "aim to",
      "In her spare time"
    ],
    "answer": 2,
    "vocabIndex": 35
  },
  {
    "q": "With dedication and hard work, she was able to ______ of becoming a doctor.",
    "options": [
      "take into consideration",
      "aimed at",
      "spare you from",
      "reach her goal"
    ],
    "answer": 3,
    "vocabIndex": 36
  },
  {
    "q": "The new park has greatly improved the sense of ______ in our neighborhood.",
    "options": [
      "target",
      "community",
      "spare",
      "Tourism"
    ],
    "answer": 1,
    "vocabIndex": 37
  },
  {
    "q": "Volunteering at the local shelter helped him develop ______ with others in the area.",
    "options": [
      "a sense of community",
      "take into consideration",
      "aim to",
      "cheer her up"
    ],
    "answer": 0,
    "vocabIndex": 38
  },
  {
    "q": "She loves lighting ______ candles to create a relaxing atmosphere at home.",
    "options": [
      "respected",
      "respectful",
      "scented",
      "respectable"
    ],
    "answer": 2,
    "vocabIndex": 39
  }
];

const LOOKUP = {
  "consider": {
    "pos": "v.",
    "en_def": "to think carefully about something before making a decision.",
    "cn_def": "考慮",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to think carefully about something before making a decision.",
        "cn_def": "考慮"
      }
    ]
  },
  "considerable": {
    "pos": "adj.",
    "en_def": "large enough in amount, size, or importance to be noticed.",
    "cn_def": "相當大的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "large enough in amount, size, or importance to be noticed.",
        "cn_def": "相當大的"
      }
    ]
  },
  "considerate": {
    "pos": "adj.",
    "en_def": "kind and careful not to upset or inconvenience others.",
    "cn_def": "體貼的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "kind and careful not to upset or inconvenience others.",
        "cn_def": "體貼的"
      }
    ]
  },
  "take into consideration": {
    "pos": "phr.",
    "en_def": "to think about a fact or situation when making a decision.",
    "cn_def": "考慮到",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to think about a fact or situation when making a decision.",
        "cn_def": "考慮到"
      }
    ]
  },
  "stranger": {
    "pos": "n.",
    "en_def": "a person whom you do not know.",
    "cn_def": "陌生人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person whom you do not know.",
        "cn_def": "陌生人"
      }
    ]
  },
  "parade": {
    "pos": "v.",
    "en_def": "to walk or march in a public celebration or display.",
    "cn_def": "遊行",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to walk or march in a public celebration or display.",
        "cn_def": "遊行"
      },
      {
        "pos": "n.",
        "en_def": "a public celebration in which people, vehicles, or performers move along a street.",
        "cn_def": "遊行"
      }
    ]
  },
  "cheer": {
    "pos": "v.",
    "en_def": "to shout loudly to show support or happiness.",
    "cn_def": "歡呼",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to shout loudly to show support or happiness.",
        "cn_def": "歡呼"
      },
      {
        "pos": "n.",
        "en_def": "a shout of happiness, praise, or encouragement.",
        "cn_def": "歡呼"
      }
    ]
  },
  "cheer her up": {
    "pos": "phr.",
    "en_def": "to become happier or make someone feel happier.",
    "cn_def": "高興起來；振作起來",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to become happier or make someone feel happier.",
        "cn_def": "高興起來；振作起來"
      }
    ]
  },
  "cheer up": {
    "pos": "phr.",
    "en_def": "to become happier or make someone feel happier.",
    "cn_def": "高興起來；振作起來",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to become happier or make someone feel happier.",
        "cn_def": "高興起來；振作起來"
      }
    ]
  },
  "cheerful": {
    "pos": "adj.",
    "en_def": "happy and positive.",
    "cn_def": "快樂的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "happy and positive.",
        "cn_def": "快樂的"
      }
    ]
  },
  "splash": {
    "pos": "v.",
    "en_def": "to make liquid fly or fall in drops.",
    "cn_def": "濺潑",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make liquid fly or fall in drops.",
        "cn_def": "濺潑"
      }
    ]
  },
  "good-natured": {
    "pos": "adj.",
    "en_def": "friendly, patient, and pleasant.",
    "cn_def": "好性格的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "friendly, patient, and pleasant.",
        "cn_def": "好性格的"
      }
    ]
  },
  "kind-hearted": {
    "pos": "adj.",
    "en_def": "kind and generous toward other people or animals.",
    "cn_def": "善良的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "kind and generous toward other people or animals.",
        "cn_def": "善良的"
      }
    ]
  },
  "ill-tempered": {
    "pos": "adj.",
    "en_def": "easily annoyed or made angry.",
    "cn_def": "易怒的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "easily annoyed or made angry.",
        "cn_def": "易怒的"
      }
    ]
  },
  "old-fashioned": {
    "pos": "adj.",
    "en_def": "not modern; belonging to or typical of the past.",
    "cn_def": "過時的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not modern; belonging to or typical of the past.",
        "cn_def": "過時的"
      }
    ]
  },
  "left-handed": {
    "pos": "adj.",
    "en_def": "using the left hand more naturally than the right hand.",
    "cn_def": "左撇子的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "using the left hand more naturally than the right hand.",
        "cn_def": "左撇子的"
      }
    ]
  },
  "in her spare time": {
    "pos": "phr.",
    "en_def": "during time when one is not working or busy.",
    "cn_def": "在某人的空閒時間",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "during time when one is not working or busy.",
        "cn_def": "在某人的空閒時間"
      }
    ]
  },
  "in one's spare time": {
    "pos": "phr.",
    "en_def": "during time when one is not working or busy.",
    "cn_def": "在某人的空閒時間",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "during time when one is not working or busy.",
        "cn_def": "在某人的空閒時間"
      }
    ]
  },
  "spare from": {
    "pos": "phr.",
    "en_def": "to prevent someone from having to experience something unpleasant or unnecessary.",
    "cn_def": "使免於；使省去",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to prevent someone from having to experience something unpleasant or unnecessary.",
        "cn_def": "使免於；使省去"
      }
    ]
  },
  "spare you from": {
    "pos": "phr.",
    "en_def": "to prevent someone from having to experience something unpleasant or unnecessary.",
    "cn_def": "使免於；使省去",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to prevent someone from having to experience something unpleasant or unnecessary.",
        "cn_def": "使免於；使省去"
      }
    ]
  },
  "spare": {
    "pos": "adj.",
    "en_def": "extra and available to use when needed.",
    "cn_def": "多餘的；備用的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "extra and available to use when needed.",
        "cn_def": "多餘的；備用的"
      },
      {
        "pos": "n.",
        "en_def": "an extra item kept for use if needed.",
        "cn_def": "備用品"
      }
    ]
  },
  "respect": {
    "pos": "v.",
    "en_def": "to treat someone or something as important and valuable.",
    "cn_def": "尊重",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to treat someone or something as important and valuable.",
        "cn_def": "尊重"
      },
      {
        "pos": "n.",
        "en_def": "admiration or polite treatment for someone or something.",
        "cn_def": "尊重"
      }
    ]
  },
  "respectful": {
    "pos": "adj.",
    "en_def": "showing politeness and respect.",
    "cn_def": "尊重的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing politeness and respect.",
        "cn_def": "尊重的"
      }
    ]
  },
  "respectable": {
    "pos": "adj.",
    "en_def": "considered good, proper, or worthy of respect.",
    "cn_def": "值得尊敬的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "considered good, proper, or worthy of respect.",
        "cn_def": "值得尊敬的"
      }
    ]
  },
  "respective": {
    "pos": "adj.",
    "en_def": "belonging separately to each of the people or things already mentioned.",
    "cn_def": "各自的；分別的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "belonging separately to each of the people or things already mentioned.",
        "cn_def": "各自的；分別的"
      }
    ]
  },
  "respected": {
    "pos": "adj.",
    "en_def": "admired by many people because of achievements or character.",
    "cn_def": "受尊敬的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "admired by many people because of achievements or character.",
        "cn_def": "受尊敬的"
      }
    ]
  },
  "pour": {
    "pos": "v.",
    "en_def": "to make a liquid flow from one container into another.",
    "cn_def": "倒",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make a liquid flow from one container into another.",
        "cn_def": "倒"
      }
    ]
  },
  "tourism": {
    "pos": "n.",
    "en_def": "the business or activity of people traveling for pleasure.",
    "cn_def": "旅遊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the business or activity of people traveling for pleasure.",
        "cn_def": "旅遊"
      }
    ]
  },
  "tourists": {
    "pos": "n.",
    "en_def": "a person who travels to a place for pleasure.",
    "cn_def": "遊客",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who travels to a place for pleasure.",
        "cn_def": "遊客"
      }
    ]
  },
  "tourist": {
    "pos": "n.",
    "en_def": "a person who travels to a place for pleasure.",
    "cn_def": "遊客",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who travels to a place for pleasure.",
        "cn_def": "遊客"
      }
    ]
  },
  "tourist attraction": {
    "pos": "n.",
    "en_def": "a place that many travelers visit because it is interesting or enjoyable.",
    "cn_def": "旅遊景點",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a place that many travelers visit because it is interesting or enjoyable.",
        "cn_def": "旅遊景點"
      }
    ]
  },
  "favorite": {
    "pos": "adj.",
    "en_def": "liked best.",
    "cn_def": "最喜愛的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "liked best.",
        "cn_def": "最喜愛的"
      }
    ]
  },
  "target": {
    "pos": "n.",
    "en_def": "a goal or result that someone is trying to achieve.",
    "cn_def": "目標",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a goal or result that someone is trying to achieve.",
        "cn_def": "目標"
      },
      {
        "pos": "v.",
        "en_def": "to aim an action, product, or message at a particular person or group.",
        "cn_def": "以……為目標"
      }
    ]
  },
  "aimed at": {
    "pos": "phr.",
    "en_def": "to be intended for a particular purpose, person, or group.",
    "cn_def": "以……為目標",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be intended for a particular purpose, person, or group.",
        "cn_def": "以……為目標"
      }
    ]
  },
  "aim at": {
    "pos": "phr.",
    "en_def": "to be intended for a particular purpose, person, or group.",
    "cn_def": "以……為目標",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be intended for a particular purpose, person, or group.",
        "cn_def": "以……為目標"
      }
    ]
  },
  "aim to": {
    "pos": "phr.",
    "en_def": "to intend or plan to do something.",
    "cn_def": "旨在",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to intend or plan to do something.",
        "cn_def": "旨在"
      }
    ]
  },
  "reach a goal": {
    "pos": "phr.",
    "en_def": "to successfully achieve something one has been trying to do.",
    "cn_def": "達成目標",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to successfully achieve something one has been trying to do.",
        "cn_def": "達成目標"
      }
    ]
  },
  "reach her goal": {
    "pos": "phr.",
    "en_def": "to successfully achieve something one has been trying to do.",
    "cn_def": "達成目標",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to successfully achieve something one has been trying to do.",
        "cn_def": "達成目標"
      }
    ]
  },
  "community": {
    "pos": "n.",
    "en_def": "a group of people who live in the same area or share something in common.",
    "cn_def": "社區",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a group of people who live in the same area or share something in common.",
        "cn_def": "社區"
      }
    ]
  },
  "a sense of community": {
    "pos": "phr.",
    "en_def": "a feeling of belonging and connection with others in a group or area.",
    "cn_def": "社區感",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a feeling of belonging and connection with others in a group or area.",
        "cn_def": "社區感"
      }
    ]
  },
  "scented": {
    "pos": "adj.",
    "en_def": "having a pleasant smell.",
    "cn_def": "有香味的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a pleasant smell.",
        "cn_def": "有香味的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
