// Lesson 78 Quiz Data: Mental Perceptions, Cognitive Thought & Expressive Speech
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 78 - Mental Perceptions, Cognitive Thought & Expressive Speech",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "forgive",
    "pos": "v.",
    "cn_def": "原諒；寬恕",
    "en_def": "to stop feeling angry or resentful towards someone for an offense",
    "sentence": "Although Jack felt deeply hurt by his brother's harsh words, he chose to {{BLANK}} him and restore their family harmony.",
    "cn": "雖然傑克被哥哥嚴厲的話語深深傷害，但他選擇【原諒】他並恢復家庭和睦。"
  },
  {
    "word": "seem",
    "pos": "v.",
    "cn_def": "似乎；看起來好像",
    "en_def": "to give the impression of being something; to appear",
    "sentence": "The difficult math problems {{BLANK}} very complicated at first glance, but they become much easier once you understand the formula.",
    "cn": "這些數學難題乍看之下【似乎】非常複雜，但一旦你理解了公式，它們就會變得簡單許多。"
  },
  {
    "word": "assume",
    "pos": "v.",
    "cn_def": "假定；設想；以為",
    "en_def": "to suppose to be the case without proof",
    "sentence": "You should never {{BLANK}} that a quiet person lacks opinions, because many thoughtful people simply prefer to listen carefully.",
    "cn": "你絕不應該【以為】沉默的人沒有主見，因為許多有思想的人只是更喜歡仔細傾聽。"
  },
  {
    "word": "consider",
    "pos": "v.",
    "cn_def": "考慮；斟酌；認為",
    "en_def": "to think carefully about something, typically before making a decision",
    "sentence": "Before purchasing that expensive sports car, you must carefully {{BLANK}} whether you can afford the monthly maintenance costs.",
    "cn": "在購買那輛昂貴的跑車之前，你必須仔細【考慮】自己是否負擔得起每月的維護保養費用。"
  },
  {
    "word": "expect",
    "pos": "v.",
    "cn_def": "預期；期待；指望",
    "en_def": "to regard something as likely to happen; to anticipate",
    "sentence": "Meteorologists report that cold mountain winds are moving south, so residents should {{BLANK}} heavy snowfall throughout the weekend.",
    "cn": "氣象學家報告指出寒冷的山風正往南移動，因此居民們應【預期】整個週末都會降下大雪。"
  },
  {
    "word": "express",
    "pos": "v. / adj. / adv.",
    "cn_def": "表達；表示；快速的；特快",
    "en_def": "to convey a thought or feeling in words or gestures; rapid",
    "sentence": "Art classes in junior high school provide creative students with an ideal medium to {{BLANK}} their complex inner emotions.",
    "cn": "國中的美術課程為富有創造力的學生提供了一個理想的媒介，以【表達】他們複雜的內心感受。"
  },
  {
    "word": "inspire",
    "pos": "v.",
    "cn_def": "鼓舞；啟發；激勵",
    "en_def": "to fill someone with the urge or ability to do or feel something creative",
    "sentence": "The brave Paralympic athlete's triumphant life story continues to {{BLANK}} millions of young people around the world.",
    "cn": "那位殘奧勇敢運動員輝煌的人生故事，持續在全世界【激勵】著數百萬名年輕人。"
  },
  {
    "word": "promise",
    "pos": "v. / n.",
    "cn_def": "承諾；答應；保證",
    "en_def": "to assure someone that one will definitely do something; an assurance",
    "sentence": "Before leaving for boarding school, the young boy made a sincere {{BLANK}} to write letters to his parents every Sunday.",
    "cn": "在啟程前往寄宿學校之前，那名小男孩鄭重地許下了【承諾】，保證每週日都會寫信給父母。"
  },
  {
    "word": "remind",
    "pos": "v.",
    "cn_def": "提醒；使想起",
    "en_def": "to cause someone to remember someone or something",
    "sentence": "Please set an alarm on your digital phone to {{BLANK}} you to take your heart medication after eating dinner.",
    "cn": "請在你的智慧型手機上設定鬧鐘，以【提醒】你在吃完晚餐後服用心臟藥物。"
  },
  {
    "word": "emphasize",
    "pos": "v.",
    "cn_def": "強調；著重",
    "en_def": "to give special importance or prominence to something in speaking or writing",
    "sentence": "Our English teacher repeatedly uses red markers on the whiteboard to {{BLANK}} the importance of mastering irregular verbs.",
    "cn": "我們的英文老師反覆在白板上使用紅色白板筆，以【強調】掌握不規則動詞的重要性。"
  }
];

const MCQS = [
  {
    "q": "Although Jack felt deeply hurt by his brother's harsh words, he chose to ______ him and restore their family harmony.",
    "options": [
      "seem",
      "expect",
      "assume",
      "forgive"
    ],
    "answer": 3,
    "cn": "雖然傑克被哥哥嚴厲的話語深深傷害，但他選擇原諒他並恢復家庭和睦。 【選項解析】(A) seem 似乎  (B) forgive 原諒  (C) assume 假設  (D) expect 期望。原諒傷人者用 forgive him。",
    "vocabIndex": 0
  },
  {
    "q": "The dark storm clouds gathered over the city, and the weather ______ to turn colder by the hour.",
    "options": [
      "forgave",
      "seemed",
      "assumed",
      "inspired"
    ],
    "answer": 1,
    "cn": "烏黑的暴風雲籠罩著城市，天氣看起來似乎一小時比一小時更加寒冷。 【選項解析】(A) seemed 似乎  (B) forgave 原諒  (C) assumed 假定  (D) inspired 鼓舞。seemed to turn colder 表似乎變冷。",
    "vocabIndex": 1
  },
  {
    "q": "You should never ______ that everyone understands the project rules without checking with them directly.",
    "options": [
      "assume",
      "forgive",
      "seem",
      "inspire"
    ],
    "answer": 0,
    "cn": "在未直接向大家確認前，你絕不應該主觀以為每個人都理解專案規則。 【選項解析】(A) forgive 原諒  (B) assume 假設/自以為  (C) seem 似乎  (D) inspire 激勵。自作主張假定用 assume that。",
    "vocabIndex": 2
  },
  {
    "q": "Before signing the long-term commercial lease, business owners must carefully ______ all potential financial risks.",
    "options": [
      "seem",
      "forgive",
      "consider",
      "remind"
    ],
    "answer": 2,
    "cn": "在簽訂長期商業租約前，企業主必須仔細考慮評估所有潛在的財務風險。 【選項解析】(A) consider 考慮  (B) forgive 原諒  (C) seem 似乎  (D) remind 提醒。評估風險動詞用 consider risks。",
    "vocabIndex": 3
  },
  {
    "q": "Because of severe airport traffic delays during holidays, travelers should ______ longer waiting lines at security checkpoints.",
    "options": [
      "forgive",
      "expect",
      "seem",
      "assume"
    ],
    "answer": 1,
    "cn": "由於假期的嚴重航班延誤，旅客應該預期安檢處會有更長的等候隊伍。 【選項解析】(A) forgive 原諒  (B) expect 預料  (C) seem 似乎  (D) assume 假設。預期有排隊人潮用 expect waiting lines。",
    "vocabIndex": 4
  },
  {
    "q": "The shy poet found it much easier to ______ her deepest personal feelings through writing verses than through speaking.",
    "options": [
      "seem",
      "assume",
      "expect",
      "express"
    ],
    "answer": 3,
    "cn": "害羞的詩人發現，透過寫詩來表達自己深層的個人感受，比開口說話容易得多。 【選項解析】(A) seem 似乎  (B) assume 設想  (C) express 表達  (D) expect 期待。express feelings 表表達感情。",
    "vocabIndex": 5
  },
  {
    "q": "The teacher's passionate dedication to science managed to ______ generations of students to pursue medical careers.",
    "options": [
      "forgive",
      "assume",
      "inspire",
      "seem"
    ],
    "answer": 2,
    "cn": "老師對科學的熱情奉獻，成功激勵了數代學生走上行醫之路。 【選項解析】(A) forgive 原諒  (B) inspire 激勵  (C) assume 假定  (D) seem 似乎。激勵學生用 inspire students。",
    "vocabIndex": 6
  },
  {
    "q": "If you give your word to a trusted friend, you must always keep your sacred ______ no matter what happens.",
    "options": [
      "promise",
      "express",
      "consider",
      "remind"
    ],
    "answer": 0,
    "cn": "如果你向值得信賴的朋友許下承諾，無論發生什麼事都必須信守諾言。 【選項解析】(A) promise 承諾  (B) express 表達  (C) consider 考慮  (D) remind 提醒。keep one's promise 為固定搭配「信守承諾」。",
    "vocabIndex": 7
  },
  {
    "q": "The secretary sent an email to all department heads to ______ them about the emergency board meeting tomorrow.",
    "options": [
      "forgive",
      "assume",
      "seem",
      "remind"
    ],
    "answer": 3,
    "cn": "秘書寄電子郵件給所有部門主管，提醒他們明天召開緊急董事會會議。 【選項解析】(A) forgive 原諒  (B) remind 提醒  (C) seem 似乎  (D) assume 假定。remind someone about 表提醒某人某事。",
    "vocabIndex": 8
  },
  {
    "q": "Health guidelines consistently ______ that washing hands regularly with soap is the most effective defense against viruses.",
    "options": [
      "emphasize",
      "forgive",
      "seem",
      "assume"
    ],
    "answer": 0,
    "cn": "健康指引始終強調，經常用肥皂洗手是對抗病毒最有效的防禦手段。 【選項解析】(A) emphasize 強調  (B) forgive 原諒  (C) seem 似乎  (D) assume 假定。強調某項事實用 emphasize that。",
    "vocabIndex": 9
  },
  {
    "q": "True spiritual peace comes when a person learns to ______ past wrongs and let go of bitter resentment.",
    "options": [
      "seem",
      "forgive",
      "assume",
      "expect"
    ],
    "answer": 1,
    "cn": "當一個人學會寬恕過去的錯誤並放下心中的痛苦怨恨時，真正的平靜才會降臨。 【選項解析】(A) forgive 寬恕  (B) seem 似乎  (C) assume 假設  (D) expect 期望。寬恕過錯用 forgive past wrongs。",
    "vocabIndex": 0
  },
  {
    "q": "To outside observers, the grand Victorian mansion ______ completely abandoned, yet a gentle light shone in the attic.",
    "options": [
      "assumed",
      "forgave",
      "seemed",
      "expected"
    ],
    "answer": 2,
    "cn": "對外來觀察者而言，這棟宏偉的維多利亞式宅邸看似完全荒廢，但閣樓裡卻亮著微光。 【選項解析】(A) assumed 假設  (B) seemed 似乎  (C) forgave 原諒  (D) expected 預期。外表看似用 seemed abandoned。",
    "vocabIndex": 1
  },
  {
    "q": "It is dangerous to ______ that a medication is safe simply because you can purchase it without a prescription.",
    "options": [
      "forgive",
      "assume",
      "seem",
      "inspire"
    ],
    "answer": 1,
    "cn": "僅僅因為無須處方箋就能買到，就貿然以為某種藥物是安全的，這是非常危險的。 【選項解析】(A) assume 貿然假定  (B) forgive 原諒  (C) seem 似乎  (D) inspire 激發。assume that a medication is safe 表貿然以為藥物安全。",
    "vocabIndex": 2
  },
  {
    "q": "The university admissions board will ______ applicants who demonstrate unique leadership outside of classroom studies.",
    "options": [
      "remind",
      "forgive",
      "seem",
      "consider"
    ],
    "answer": 3,
    "cn": "大學招生委員會將優先考量那些在課堂之外展現出獨特領導才能的申請者。 【選項解析】(A) consider 考量  (B) forgive 寬恕  (C) seem 似乎  (D) remind 提醒。審核考量候選人用 consider applicants。",
    "vocabIndex": 3
  },
  {
    "q": "With the economy growing steadily, financial analysts ______ consumer spending to rise during the fourth quarter.",
    "options": [
      "forgive",
      "seem",
      "expect",
      "assume"
    ],
    "answer": 2,
    "cn": "隨著經濟穩定增長，金融分析師預期消費者支出將在第四季攀升。 【選項解析】(A) forgive 原諒  (B) expect 預期  (C) seem 似乎  (D) assume 假定。expect spending to rise 表預期支出增加。",
    "vocabIndex": 4
  },
  {
    "q": "Protesters gathered peacefully in front of city hall to ______ their dissatisfaction with rising public transit fares.",
    "options": [
      "express",
      "seem",
      "assume",
      "forgive"
    ],
    "answer": 0,
    "cn": "抗議民眾和平地聚集在市政府大樓前，表達他們對大眾運輸票價調漲的不滿。 【選項解析】(A) express 表達  (B) seem 似乎  (C) assume 假設  (D) forgive 寬恕。express dissatisfaction 表表達不滿。",
    "vocabIndex": 5
  },
  {
    "q": "Visiting the ancient historical temples of Kyoto never fails to ______ artists with creative architectural ideas.",
    "options": [
      "forgive",
      "assume",
      "seem",
      "inspire"
    ],
    "answer": 3,
    "cn": "參觀京都古老的歷史寺廟，總能為藝術家帶來豐富的創意建築靈感。 【選項解析】(A) forgive 寬恕  (B) inspire 啟發  (C) seem 似乎  (D) assume 假定。啟發藝術家靈感用 inspire artists。",
    "vocabIndex": 6
  },
  {
    "q": "The politician made a public ______ to lower middle-class taxes if his political party won the majority vote.",
    "options": [
      "remind",
      "promise",
      "consider",
      "express"
    ],
    "answer": 1,
    "cn": "這位政客公開許下承諾，如果他的政黨贏得多數選票，將降低中產階級的稅收。 【選項解析】(A) promise 承諾  (B) remind 提醒  (C) consider 考慮  (D) express 表達。make a public promise 表做出公開承諾。",
    "vocabIndex": 7
  },
  {
    "q": "Looking at the yellowed photograph on the mantelpiece never failed to ______ grandfather of his youthful days.",
    "options": [
      "remind",
      "forgive",
      "seem",
      "assume"
    ],
    "answer": 0,
    "cn": "看著壁爐架上泛黃的老照片，總會讓祖父想起自己年輕時的歲月。 【選項解析】(A) remind 使想起  (B) forgive 原諒  (C) seem 似乎  (D) assume 假定。remind someone of 表使某人想起。",
    "vocabIndex": 8
  },
  {
    "q": "Speech coaches repeatedly ______ that maintaining consistent eye contact with listeners builds immediate credibility.",
    "options": [
      "seem",
      "forgive",
      "emphasize",
      "assume"
    ],
    "answer": 2,
    "cn": "演說教練再三強調，與聽眾保持持續的眼神接觸能迅速建立公信力。 【選項解析】(A) emphasize 強調  (B) forgive 原諒  (C) seem 似乎  (D) assume 假定。強調重點用 emphasize that。",
    "vocabIndex": 9
  },
  {
    "q": "It took immense emotional courage for the victim to ______ the reckless driver who caused the car accident.",
    "options": [
      "seem",
      "forgive",
      "assume",
      "expect"
    ],
    "answer": 1,
    "cn": "受害者展現了極大的心理勇氣，才原諒了造成這場車禍的魯莽駕駛。 【選項解析】(A) forgive 寬恕  (B) seem 似乎  (C) assume 假設  (D) expect 預料。寬恕過失者用 forgive the driver。",
    "vocabIndex": 0
  },
  {
    "q": "The complex computer coding problem ______ nearly impossible to solve until the programmer noticed a tiny syntax error.",
    "options": [
      "assumed",
      "reminded",
      "forgave",
      "seemed"
    ],
    "answer": 3,
    "cn": "這個複雜的電腦程式問題看似幾乎不可能解決，直到程式設計師發現了一個微小的語法錯誤。 【選項解析】(A) assumed 假設  (B) seemed 似乎  (C) forgave 原諒  (D) reminded 提醒。seemed nearly impossible 表看似近乎不可能。",
    "vocabIndex": 1
  },
  {
    "q": "Never ______ that someone is angry just because their text message was short and did not include emojis.",
    "options": [
      "seem",
      "forgive",
      "assume",
      "inspire"
    ],
    "answer": 2,
    "cn": "千萬不要僅因別人的簡訊很短且沒加表情符號，就武斷地以為對方在生氣。 【選項解析】(A) assume 妄斷/臆測  (B) forgive 原諒  (C) seem 似乎  (D) inspire 激發。assume someone is angry 表妄斷某人生氣。",
    "vocabIndex": 2
  },
  {
    "q": "We must ______ the environmental impact of industrial development before approving the new chemical refinery.",
    "options": [
      "consider",
      "forgive",
      "seem",
      "remind"
    ],
    "answer": 0,
    "cn": "在核准新的化學煉油廠之前，我們必須審慎評估工業發展對環境的衝擊。 【選項解析】(A) consider 審慎考慮  (B) forgive 寬恕  (C) seem 似乎  (D) remind 提醒。consider the impact 表評估衝擊。",
    "vocabIndex": 3
  },
  {
    "q": "School principals always ______ teachers to dress professionally and maintain high moral standards in the community.",
    "options": [
      "seem",
      "forgive",
      "expect",
      "assume"
    ],
    "answer": 2,
    "cn": "校長總是期望老師們穿著得體專業，並在社區中維持崇高的道德標準。 【選項解析】(A) expect 期望  (B) forgive 原諒  (C) seem 似乎  (D) assume 假定。expect someone to do something 表期望某人做到某事。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "forgive": {
    "pos": "v.",
    "en_def": "to stop feeling angry or resentful towards someone for an offense",
    "cn_def": "原諒；寬恕",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to stop feeling angry or resentful towards someone for an offense",
        "cn_def": "原諒；寬恕"
      }
    ]
  },
  "seem": {
    "pos": "v.",
    "en_def": "to give the impression of being something; to appear",
    "cn_def": "似乎；看起來好像",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give the impression of being something; to appear",
        "cn_def": "似乎；看起來好像"
      }
    ]
  },
  "assume": {
    "pos": "v.",
    "en_def": "to suppose to be the case without proof",
    "cn_def": "假定；設想；以為",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to suppose to be the case without proof",
        "cn_def": "假定；設想；以為"
      }
    ]
  },
  "consider": {
    "pos": "v.",
    "en_def": "to think carefully about something, typically before making a decision",
    "cn_def": "考慮；斟酌；認為",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to think carefully about something, typically before making a decision",
        "cn_def": "考慮；斟酌；認為"
      }
    ]
  },
  "expect": {
    "pos": "v.",
    "en_def": "to regard something as likely to happen; to anticipate",
    "cn_def": "預期；期待；指望",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to regard something as likely to happen; to anticipate",
        "cn_def": "預期；期待；指望"
      }
    ]
  },
  "express": {
    "pos": "v. / adj. / adv.",
    "en_def": "to convey a thought or feeling in words or gestures; rapid",
    "cn_def": "表達；表示；快速的；特快",
    "combined": [
      {
        "pos": "v. / adj. / adv.",
        "en_def": "to convey a thought or feeling in words or gestures; rapid",
        "cn_def": "表達；表示；快速的；特快"
      }
    ]
  },
  "inspire": {
    "pos": "v.",
    "en_def": "to fill someone with the urge or ability to do or feel something creative",
    "cn_def": "鼓舞；啟發；激勵",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to fill someone with the urge or ability to do or feel something creative",
        "cn_def": "鼓舞；啟發；激勵"
      }
    ]
  },
  "promise": {
    "pos": "v. / n.",
    "en_def": "to assure someone that one will definitely do something; an assurance",
    "cn_def": "承諾；答應；保證",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to assure someone that one will definitely do something; an assurance",
        "cn_def": "承諾；答應；保證"
      }
    ]
  },
  "remind": {
    "pos": "v.",
    "en_def": "to cause someone to remember someone or something",
    "cn_def": "提醒；使想起",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause someone to remember someone or something",
        "cn_def": "提醒；使想起"
      }
    ]
  },
  "emphasize": {
    "pos": "v.",
    "en_def": "to give special importance or prominence to something in speaking or writing",
    "cn_def": "強調；著重",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give special importance or prominence to something in speaking or writing",
        "cn_def": "強調；著重"
      }
    ]
  },
  "forgave": {
    "pos": "",
    "en_def": "",
    "cn_def": "原諒",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "原諒"
      }
    ]
  },
  "seemed": {
    "pos": "",
    "en_def": "",
    "cn_def": "似乎",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "似乎"
      }
    ]
  },
  "assumed": {
    "pos": "",
    "en_def": "",
    "cn_def": "假定",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "假定"
      }
    ]
  },
  "inspired": {
    "pos": "",
    "en_def": "",
    "cn_def": "鼓舞",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "鼓舞"
      }
    ]
  },
  "expected": {
    "pos": "",
    "en_def": "",
    "cn_def": "預期",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "預期"
      }
    ]
  },
  "reminded": {
    "pos": "",
    "en_def": "",
    "cn_def": "提醒",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "提醒"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
