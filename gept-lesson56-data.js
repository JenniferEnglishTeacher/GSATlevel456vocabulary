// Lesson 56 Quiz Data: Public Discourse, Media Publications, Reports & Textbook Sections
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 56 - Public Discourse, Media Publications, Reports & Textbook Sections",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "speech",
    "pos": "n.",
    "cn_def": "演講；演說",
    "en_def": "a formal address or discourse delivered to an audience",
    "sentence": "The brave student president delivered an inspiring {{BLANK}} at the graduation ceremony, encouraging everyone to pursue their dreams.",
    "cn": "勇敢的學生會長在畢業典禮上發表了一場振奮人心的______，鼓勵大家勇敢追求夢想。"
  },
  {
    "word": "discuss",
    "pos": "v.",
    "cn_def": "討論；商討",
    "en_def": "to talk about something with another person or in a group",
    "sentence": "The marketing team will gather in the conference room to {{BLANK}} new promotional strategies for our summer campaign.",
    "cn": "行銷團隊將在會議室集合，以______我們夏季活動的新宣傳策略。"
  },
  {
    "word": "discussion",
    "pos": "n.",
    "cn_def": "討論；研討",
    "en_def": "the action or process of talking about something to reach a decision",
    "sentence": "After two hours of lively class {{BLANK}}, students finally reached a consensus on the topic of their science project.",
    "cn": "經過兩小時熱烈的課堂______後，學生們終於就他們的科學專案主題達成了共識。"
  },
  {
    "word": "debate",
    "pos": "n. / v.",
    "cn_def": "辯論；爭辯",
    "en_def": "a formal discussion on a particular matter in a public meeting",
    "sentence": "The two political candidates participated in a televised presidential {{BLANK}}, exchanging opinions on education and taxation.",
    "cn": "兩位政治候選人參加了一場電視轉播的總統大選______，就教育與稅收問題交換意見。"
  },
  {
    "word": "newspaper",
    "pos": "n.",
    "cn_def": "報紙",
    "en_def": "a printed publication containing news, feature articles, and advertisements",
    "sentence": "My grandfather enjoys reading the morning {{BLANK}} over hot tea, checking local sports scores and economic editorials.",
    "cn": "我祖父喜歡邊喝熱茶邊看早______，查看本地體育比分與經濟社論。"
  },
  {
    "word": "magazine",
    "pos": "n.",
    "cn_def": "雜誌；期刊",
    "en_def": "a periodical publication containing articles and illustrations",
    "sentence": "Sarah subscribed to a popular fashion {{BLANK}}, and she eagerly waits for the glossy issue to arrive in the mail every month.",
    "cn": "莎拉訂閱了一本受歡迎的時尚______，每個月都熱切期盼精裝期號寄到信箱。"
  },
  {
    "word": "report",
    "pos": "n. / v.",
    "cn_def": "報告；報導",
    "en_def": "a formal account or statement of the results of an investigation; to state",
    "sentence": "The environmental agency published an alarming {{BLANK}} on river pollution, urging the government to shut down illegal factories.",
    "cn": "環保局發布了一份關於河流污染的令人警惕的______，敦促政府關閉非法工廠。"
  },
  {
    "word": "article",
    "pos": "n.",
    "cn_def": "文章；報導；冠詞",
    "en_def": "a piece of writing included with others in a newspaper or magazine",
    "sentence": "David wrote an insightful {{BLANK}} about artificial intelligence, which was featured prominently on the front page of the journal.",
    "cn": "戴維寫了一篇關於人工智慧的深刻______，該文顯著地刊登在期刊的頭版上。"
  },
  {
    "word": "unit",
    "pos": "n.",
    "cn_def": "單元；單位",
    "en_def": "an individual thing or person regarded as single and complete; book division",
    "sentence": "Our English textbook is divided into twelve thematic {{BLANK}}s, each focusing on practical everyday conversational skills.",
    "cn": "我們的英文教科書分為十二個主題______，每個單元都著重於實用的日常會話技能。"
  },
  {
    "word": "chapter",
    "pos": "n.",
    "cn_def": "章節；篇章",
    "en_def": "a main division of a book, typically with a number or title",
    "sentence": "Before going to sleep, I read the final dramatic {{BLANK}} of the adventure novel to find out if the hero survived.",
    "cn": "在睡覺之前，我讀完了這本冒險小說最後一個引人入勝的______，以查明主人公是否生還。"
  }
];

const MCQS = [
  {
    "q": "The guest speaker gave an eloquent ______ about wildlife preservation that received a standing ovation from the crowd.",
    "options": [
      "speech",
      "newspaper",
      "unit",
      "chapter"
    ],
    "answer": 0,
    "cn": "特邀演講者發表了一場關於野生動物保育的精彩演講，獲得全場起立鼓掌。 【選項解析】(A) speech 演講 (B) newspaper 報紙 (C) unit 單元 (D) chapter 章節。發表精彩演說為 eloquent speech。",
    "vocabIndex": 0
  },
  {
    "q": "The committee met yesterday to ______ whether the city should invest more tax funds into building public parks.",
    "options": [
      "repair",
      "discuss",
      "report",
      "maintain"
    ],
    "answer": 1,
    "cn": "委員會昨天召開會議，討論市府是否應當投入更多稅收資金來建設公共公園。 【選項解析】(A) discuss 討論 (B) repair 修理 (C) report 報導 (D) maintain 維護。商討議題用 discuss。",
    "vocabIndex": 1
  },
  {
    "q": "Following an open panel ______, university professors answered questions from curious students about their career options.",
    "options": [
      "debate",
      "magazine",
      "discussion",
      "newspaper"
    ],
    "answer": 2,
    "cn": "在公開小組討論結束後，大學教授回答了好奇學生關於其職涯選擇的提問。 【選項解析】(A) debate 辯論 (B) discussion 討論 (C) magazine 雜誌 (D) newspaper 報紙。小組研討為 panel discussion。",
    "vocabIndex": 2
  },
  {
    "q": "High school students joined the inter-school parliamentary ______ to argue whether nuclear energy should be expanded.",
    "options": [
      "magazine",
      "chapter",
      "speech",
      "debate"
    ],
    "answer": 3,
    "cn": "高中生參加了校際議會制辯論賽，辯論核能是否應當予以擴大發展。 【選項解析】(A) magazine 雜誌 (B) chapter 章節 (C) debate 辯論 (D) speech 演講。辯論正反論點為 parliamentary debate。",
    "vocabIndex": 3
  },
  {
    "q": "Dad reads the daily financial ______ while commuting on the subway, keeping track of fluctuations in international stock markets.",
    "options": [
      "chapter",
      "debate",
      "newspaper",
      "speech"
    ],
    "answer": 2,
    "cn": "爸爸在搭地鐵通勤時閱讀每日財經報紙，掌握國際股市的波動動態。 【選項解析】(A) newspaper 報紙 (B) debate 辯論 (C) chapter 章節 (D) speech 演講。財經日報為 financial newspaper。",
    "vocabIndex": 4
  },
  {
    "q": "She bought a monthly design ______ at the airport newsstand to read during her four-hour international flight.",
    "options": [
      "unit",
      "debate",
      "speech",
      "magazine"
    ],
    "answer": 3,
    "cn": "她在機場書報攤買了一本月刊設計雜誌，打算在四小時的國際航班中閱讀。 【選項解析】(A) unit 單元 (B) debate 辯論 (C) magazine 雜誌 (D) speech 演講。機場書報攤販售的月刊為 monthly magazine。",
    "vocabIndex": 5
  },
  {
    "q": "The police chief issued a detailed ______ explaining the measures taken to capture the bank robbery suspects.",
    "options": [
      "report",
      "magazine",
      "chapter",
      "unit"
    ],
    "answer": 0,
    "cn": "警長發布了一份詳細的報告，說明抓捕銀行搶劫嫌犯所採取的各項措施。 【選項解析】(A) magazine 雜誌 (B) report 報告 (C) chapter 章節 (D) unit 單元。警方調查報告為 detailed report。",
    "vocabIndex": 6
  },
  {
    "q": "The health journalist published a warning ______ regarding the dangers of excessive sugar consumption in soft drinks.",
    "options": [
      "speech",
      "article",
      "debate",
      "chapter"
    ],
    "answer": 1,
    "cn": "這位健康線記者發表了一篇警告性報導，闡述汽水中過量糖分攝取的危險性。 【選項解析】(A) speech 演講 (B) article 文章 (C) debate 辯論 (D) chapter 章節。發表專題報導為 published an article。",
    "vocabIndex": 7
  },
  {
    "q": "In our math workbook, each study ______ begins with clear diagnostic questions followed by realistic practice problems.",
    "options": [
      "newspaper",
      "speech",
      "unit",
      "debate"
    ],
    "answer": 2,
    "cn": "在我們的數學練習本中，每個學習單元都以清晰的診斷測驗題開始，隨後是實用的練習題。 【選項解析】(A) unit 單元 (B) speech 演講 (C) newspaper 報紙 (D) debate 辯論。課本章節單元為 study unit。",
    "vocabIndex": 8
  },
  {
    "q": "The suspenseful mystery story ended on a surprising cliffhanger at the very conclusion of the fourth ______.",
    "options": [
      "chapter",
      "debate",
      "speech",
      "unit"
    ],
    "answer": 0,
    "cn": "這本引人入勝的懸疑故事在第四章的結尾處以令人意想不到的懸念告終。 【選項解析】(A) unit 單元 (B) debate 辯論 (C) speech 演講 (D) chapter 章節。小說章節為 chapter。",
    "vocabIndex": 9
  },
  {
    "q": "Winning first place in the citywide English ______ contest gave Emily the confidence to speak comfortably in public.",
    "options": [
      "unit",
      "magazine",
      "chapter",
      "speech"
    ],
    "answer": 3,
    "cn": "在全市英語演講比賽中贏得第一名，賦予了艾蜜莉在公眾面前自在表達的信心。 【選項解析】(A) speech 演講 (B) magazine 雜誌 (C) chapter 章節 (D) unit 單元。英語演講比賽為 English speech contest。",
    "vocabIndex": 0
  },
  {
    "q": "Parents and teachers gathered in the auditorium to ______ practical solutions for reducing bullying at school.",
    "options": [
      "maintain",
      "discuss",
      "repair",
      "produce"
    ],
    "answer": 1,
    "cn": "家長與老師聚集在禮堂，共同商討減少校園霸凌的具體實用對策。 【選項解析】(A) discuss 討論 (B) maintain 維持 (C) repair 修理 (D) produce 生產。商討解決之道為 discuss solutions。",
    "vocabIndex": 1
  },
  {
    "q": "The animated round-table ______ between economists lasted two hours and was broadcast live on national radio.",
    "options": [
      "discussion",
      "magazine",
      "unit",
      "newspaper"
    ],
    "answer": 0,
    "cn": "經濟學家之間熱烈的圓桌研討持續了兩個小時，並在國家廣播電台上現場直播。 【選項解析】(A) magazine 雜誌 (B) discussion 討論 (C) unit 單元 (D) newspaper 報紙。圓桌研討為 round-table discussion。",
    "vocabIndex": 2
  },
  {
    "q": "The presidential candidates held a fierce public ______ over government healthcare reform and social welfare spending.",
    "options": [
      "chapter",
      "unit",
      "debate",
      "speech"
    ],
    "answer": 2,
    "cn": "總統候選人就政府醫療改革與社會福利支出展開了激烈的公開辯論。 【選項解析】(A) chapter 章節 (B) unit 單元 (C) debate 辯論 (D) speech 演講。候選人辯論為 public debate。",
    "vocabIndex": 3
  },
  {
    "q": "Many elderly residents still prefer the feel of a printed ______ over scrolling through brief digital news on smartphones.",
    "options": [
      "speech",
      "chapter",
      "unit",
      "newspaper"
    ],
    "answer": 3,
    "cn": "許多長者依然喜歡實體印刷報紙的手感，而不是在智慧型手機上滑閱簡短的數位新聞。 【選項解析】(A) newspaper 報紙 (B) chapter 章節 (C) unit 單元 (D) speech 演講。印刷報紙為 printed newspaper。",
    "vocabIndex": 4
  },
  {
    "q": "Photography enthusiasts love flipping through the glossy pages of this monthly wildlife ______.",
    "options": [
      "unit",
      "magazine",
      "speech",
      "debate"
    ],
    "answer": 1,
    "cn": "攝影愛好者熱愛翻閱這本月刊野生動物雜誌光鮮亮麗的銅版紙頁。 【選項解析】(A) unit 單元 (B) magazine 雜誌 (C) speech 演講 (D) debate 辯論。月刊雜誌為 monthly magazine。",
    "vocabIndex": 5
  },
  {
    "q": "According to the meteorological bureau's latest weather ______, a tropical depression is rapidly forming in the Pacific.",
    "options": [
      "debate",
      "unit",
      "report",
      "chapter"
    ],
    "answer": 2,
    "cn": "根據氣象局最新的天氣預報，一個熱帶低氣壓正在太平洋上迅速形成。 【選項解析】(A) report 預報 (B) unit 單元 (C) debate 辯論 (D) chapter 章節。天氣報告為 weather report。",
    "vocabIndex": 6
  },
  {
    "q": "I clipped an interesting opinion ______ from the Sunday paper and pinned it to my bedroom bulletin board.",
    "options": [
      "article",
      "unit",
      "speech",
      "debate"
    ],
    "answer": 0,
    "cn": "我從週日報紙上剪下了一篇有趣的評論文章，並用圖釘釘在臥室的布告欄上。 【選項解析】(A) speech 演講 (B) unit 單元 (C) article 文章 (D) debate 辯論。評論文章為 opinion article。",
    "vocabIndex": 7
  },
  {
    "q": "Before our final semester review, we must complete all the grammar exercises in ______ five of our English coursebook.",
    "options": [
      "speech",
      "newspaper",
      "debate",
      "unit"
    ],
    "answer": 3,
    "cn": "在期末複習之前，我們必須完成英語課本第五單元中所有的文法練習。 【選項解析】(A) unit 單元 (B) newspaper 報紙 (C) debate 辯論 (D) speech 演講。課本第幾單元為 unit five。",
    "vocabIndex": 8
  },
  {
    "q": "The history teacher asked everyone to read ______ seven tonight, which covers the causes of the American Revolution.",
    "options": [
      "speech",
      "chapter",
      "debate",
      "newspaper"
    ],
    "answer": 1,
    "cn": "歷史老師請大家今晚閱讀第七章，該章節涵蓋了美國獨立革命的起因。 【選項解析】(A) speech 演講 (B) chapter 章節 (C) debate 辯論 (D) newspaper 報紙。教科書章節為 chapter seven。",
    "vocabIndex": 9
  },
  {
    "q": "The United Nations Secretary delivered an impassioned ______ calling for immediate international humanitarian aid in the famine zone.",
    "options": [
      "newspaper",
      "unit",
      "magazine",
      "speech"
    ],
    "answer": 3,
    "cn": "聯合國秘書長發表了一場慷慨激昂的演說，呼籲國際社會立即向饑荒災區提供人道援助。 【選項解析】(A) speech 演說 (B) unit 單元 (C) magazine 雜誌 (D) newspaper 報紙。發表正式演說為 deliver a speech。",
    "vocabIndex": 0
  },
  {
    "q": "During the staff meeting, the department managers will ______ budget allocations for the upcoming fiscal quarter.",
    "options": [
      "maintain",
      "discuss",
      "produce",
      "repair"
    ],
    "answer": 1,
    "cn": "在員工大會上，部門經理們將商討即將到來的財政季度的預算分配問題。 【選項解析】(A) discuss 討論 (B) maintain 維護 (C) produce 製造 (D) repair 修復。討論預算為 discuss budget allocations。",
    "vocabIndex": 1
  },
  {
    "q": "The editorial board engaged in a serious ______ regarding which front-page photograph would best capture public attention.",
    "options": [
      "discussion",
      "unit",
      "chapter",
      "newspaper"
    ],
    "answer": 0,
    "cn": "編輯委員會進行了認真的討論，探討哪一張頭版照片最能抓住公眾的眼球。 【選項解析】(A) discussion 討論 (B) unit 單元 (C) chapter 章節 (D) newspaper 報紙。進行認真討論為 serious discussion。",
    "vocabIndex": 2
  },
  {
    "q": "The university team won the national collegiate ______ championship after effectively refuting their opponents' legal arguments.",
    "options": [
      "unit",
      "chapter",
      "debate",
      "magazine"
    ],
    "answer": 2,
    "cn": "這支大學隊伍在有力駁斥對手的法律論點後，贏得了全國大專辯論賽冠軍。 【選項解析】(A) unit 單元 (B) chapter 章節 (C) debate 辯論 (D) magazine 雜誌。大專辯論賽為 collegiate debate championship。",
    "vocabIndex": 3
  },
  {
    "q": "A well-researched ______ on renewable solar energy was published in the quarterly scientific journal last week.",
    "options": [
      "article",
      "debate",
      "unit",
      "chapter"
    ],
    "answer": 0,
    "cn": "一篇關於可再生太陽能的經過詳盡調研的專題文章，上週刊登在季刊科學期刊上。 【選項解析】(A) article 文章 (B) debate 辯論 (C) unit 單元 (D) chapter 章節。期刊文章為 well-researched article。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "speech": {
    "pos": "n.",
    "en_def": "a formal address or discourse delivered to an audience",
    "cn_def": "演講；演說",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a formal address or discourse delivered to an audience",
        "cn_def": "演講；演說"
      }
    ]
  },
  "discuss": {
    "pos": "v.",
    "en_def": "to talk about something with another person or in a group",
    "cn_def": "討論；商討",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to talk about something with another person or in a group",
        "cn_def": "討論；商討"
      }
    ]
  },
  "discussion": {
    "pos": "n.",
    "en_def": "the action or process of talking about something to reach a decision",
    "cn_def": "討論；研討",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action or process of talking about something to reach a decision",
        "cn_def": "討論；研討"
      }
    ]
  },
  "debate": {
    "pos": "n. / v.",
    "en_def": "a formal discussion on a particular matter in a public meeting",
    "cn_def": "辯論；爭辯",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a formal discussion on a particular matter in a public meeting",
        "cn_def": "辯論；爭辯"
      }
    ]
  },
  "newspaper": {
    "pos": "n.",
    "en_def": "a printed publication containing news, feature articles, and advertisements",
    "cn_def": "報紙",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a printed publication containing news, feature articles, and advertisements",
        "cn_def": "報紙"
      }
    ]
  },
  "magazine": {
    "pos": "n.",
    "en_def": "a periodical publication containing articles and illustrations",
    "cn_def": "雜誌；期刊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a periodical publication containing articles and illustrations",
        "cn_def": "雜誌；期刊"
      }
    ]
  },
  "report": {
    "pos": "n. / v.",
    "en_def": "a formal account or statement of the results of an investigation; to state",
    "cn_def": "報告；報導",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a formal account or statement of the results of an investigation; to state",
        "cn_def": "報告；報導"
      }
    ]
  },
  "article": {
    "pos": "n.",
    "en_def": "a piece of writing included with others in a newspaper or magazine",
    "cn_def": "文章；報導；冠詞",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of writing included with others in a newspaper or magazine",
        "cn_def": "文章；報導；冠詞"
      }
    ]
  },
  "unit": {
    "pos": "n.",
    "en_def": "an individual thing or person regarded as single and complete; book division",
    "cn_def": "單元；單位",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an individual thing or person regarded as single and complete; book division",
        "cn_def": "單元；單位"
      }
    ]
  },
  "chapter": {
    "pos": "n.",
    "en_def": "a main division of a book, typically with a number or title",
    "cn_def": "章節；篇章",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a main division of a book, typically with a number or title",
        "cn_def": "章節；篇章"
      }
    ]
  },
  "repair": {
    "pos": "",
    "en_def": "",
    "cn_def": "修理",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "修理"
      }
    ]
  },
  "maintain": {
    "pos": "",
    "en_def": "",
    "cn_def": "維護",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "維護"
      }
    ]
  },
  "produce": {
    "pos": "",
    "en_def": "",
    "cn_def": "生產",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "生產"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
