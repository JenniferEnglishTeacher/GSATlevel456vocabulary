// Lesson 79 Quiz Data: Psychological Reactions, Physical Strikes, Communication & Handling
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 79 - Psychological Reactions, Physical Strikes, Communication & Handling",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "compare",
    "pos": "v.",
    "cn_def": "比較；對照；比擬",
    "en_def": "to estimate, measure, or note the similarity or dissimilarity between",
    "sentence": "Consumer advocacy groups advise shoppers to {{BLANK}} prices across several online platforms before making big purchases.",
    "cn": "消費者權益倡導團體建議購物者在進行大宗消費之前，應先在數個網路平台之間【比較】價格。"
  },
  {
    "word": "confuse",
    "pos": "v.",
    "cn_def": "使困惑；使混亂；弄錯",
    "en_def": "to make someone bewildered, perplexed, or unable to think clearly",
    "sentence": "The twin brothers looked remarkably alike in their blue school uniforms, which continued to {{BLANK}} their new math teacher.",
    "cn": "這對雙胞胎兄弟穿著藍色校服時模樣驚人地相似，這讓他們的新數學老師持續感到【困惑】。"
  },
  {
    "word": "excite",
    "pos": "v.",
    "cn_def": "使興奮；激起；刺激",
    "en_def": "to cause strong feelings of enthusiasm, eagerness, or excitement",
    "sentence": "News of the upcoming musical concert featuring famous rock singers will definitely {{BLANK}} thousands of teenagers across the city.",
    "cn": "即將舉辦由著名搖滾歌手主演的音樂演唱會的消息，肯定會【使】全城數千名青少年【興奮】不已。"
  },
  {
    "word": "strike",
    "pos": "v. / n.",
    "cn_def": "打擊；罷工；襲擊",
    "en_def": "to hit forcibly; an organized refusal to work by employees",
    "sentence": "Railway workers decided to go on {{BLANK}} this Monday morning to demand safer working environments and better compensation.",
    "cn": "鐵路工人決定在週一上午發動【罷工】，以爭取更安全的工作環境與更佳的報酬。"
  },
  {
    "word": "effect",
    "pos": "n. / v.",
    "cn_def": "效果；影響；產生",
    "en_def": "a change which is a result or consequence of an action or other cause",
    "sentence": "Scientists warn that excessive screen time before bedtime can have a very negative {{BLANK}} on children's natural sleep cycles.",
    "cn": "科學家警告，睡前過度使用螢幕會對兒童的自然睡眠週期產生極為負面的【影響】。"
  },
  {
    "word": "desire",
    "pos": "n. / v.",
    "cn_def": "渴望；慾望；期望",
    "en_def": "a strong feeling of wanting to have something or wishing for something",
    "sentence": "From a very young age, Maria harbored a passionate {{BLANK}} to become a medical doctor and serve impoverished rural communities.",
    "cn": "從很小的時候起，瑪麗亞就懷著成為一名醫生並為貧困鄉村社區服務的熱切【渴望】。"
  },
  {
    "word": "cancel",
    "pos": "v.",
    "cn_def": "取消；廢止",
    "en_def": "to decide or announce that a planned event will not take place",
    "sentence": "Because an unexpected super typhoon was approaching the island, the airline was forced to {{BLANK}} all domestic flights.",
    "cn": "由於一場出乎意料的強烈颱風正逼近該島，航空公司不得不【取消】所有國內航班。"
  },
  {
    "word": "dial",
    "pos": "v. / n.",
    "cn_def": "撥電話；刻度盤；儀表盤",
    "en_def": "to call a telephone number; a face of a clock or gauge",
    "sentence": "In cases of severe fire emergencies, citizens in Taiwan should immediately {{BLANK}} 119 for immediate rescue assistance.",
    "cn": "在發生嚴重火災緊急情況時，台灣民眾應立即【撥打】119 以尋求即刻的救援協助。"
  },
  {
    "word": "comb",
    "pos": "n. / v.",
    "cn_def": "梳子；梳理頭髮；仔細搜查",
    "en_def": "a toothed strip of plastic or metal used for styling hair; to search",
    "sentence": "Before stepping onto the stage for his graduation speech, Kevin used a wooden {{BLANK}} to arrange his messy hair neatly.",
    "cn": "在步上舞台發表畢業演講之前，凱文用一把木【梳子】將凌亂的頭髮梳理整齊。"
  },
  {
    "word": "handle",
    "pos": "v. / n.",
    "cn_def": "處理；應對；把手；柄",
    "en_def": "to manage or deal with; the part by which a thing is held",
    "sentence": "Experienced hotel managers know how to {{BLANK}} angry customer complaints with calmness, patience, and professional diplomacy.",
    "cn": "經驗豐富的飯店經理懂得如何以冷靜、耐心與專業圓融來【處理】憤怒顧客的抱怨。"
  }
];

const MCQS = [
  {
    "q": "Consumer advocacy groups advise shoppers to ______ prices across several online platforms before making big purchases.",
    "options": [
      "confuse",
      "excite",
      "cancel",
      "compare"
    ],
    "answer": 3,
    "cn": "消保團體建議購物者在大額消費前，應先在數個網路平台之間比較價格。 【選項解析】(A) confuse 困惑  (B) compare 比較  (C) cancel 取消  (D) excite 興奮。compare prices 表比價。",
    "vocabIndex": 0
  },
  {
    "q": "The complex scientific terminology in the medical report only served to ______ the anxious patient even more.",
    "options": [
      "compare",
      "cancel",
      "confuse",
      "dial"
    ],
    "answer": 2,
    "cn": "醫療報告中複雜的科學術語，只會讓焦慮的病患更加困惑不解。 【選項解析】(A) compare 比較  (B) confuse 使困惑  (C) cancel 取消  (D) dial 撥號。專業術語讓人混淆用 confuse the patient。",
    "vocabIndex": 1
  },
  {
    "q": "The announcement that tomorrow would be a snow holiday will surely ______ every student in the elementary school.",
    "options": [
      "cancel",
      "excite",
      "dial",
      "compare"
    ],
    "answer": 1,
    "cn": "宣布明天放雪假的公告，肯定會讓小學裡的每位學生都興奮雀躍。 【選項解析】(A) cancel 取消  (B) dial 撥號  (C) excite 使興奮  (D) compare 比較。excite students 表讓學生感到興奮。",
    "vocabIndex": 2
  },
  {
    "q": "Union members voted overwhelmingly to go on ______ until factory management agreed to negotiate fair wages.",
    "options": [
      "strike",
      "effect",
      "desire",
      "handle"
    ],
    "answer": 0,
    "cn": "工會成員以壓倒性多數投票決定發動罷工，直到工廠資方同意協商公平工資為止。 【選項解析】(A) strike 罷工  (B) effect 效果  (C) desire 渴望  (D) handle 把手。go on strike 為固定搭配「舉行罷工」。",
    "vocabIndex": 3
  },
  {
    "q": "Regular cardiovascular exercise produces a noticeable positive ______ on long-term heart health and stamina.",
    "options": [
      "handle",
      "strike",
      "effect",
      "desire"
    ],
    "answer": 2,
    "cn": "規律的有氧運動對長期的心臟健康與體能耐力產生顯著的正向影響。 【選項解析】(A) handle 把手  (B) effect 效果  (C) strike 罷工  (D) desire 渴望。positive effect on 表對…的良好效果。",
    "vocabIndex": 4
  },
  {
    "q": "The passionate young musician felt an overwhelming ______ to compose symphonies that would touch listeners' souls.",
    "options": [
      "desire",
      "effect",
      "strike",
      "handle"
    ],
    "answer": 0,
    "cn": "充滿熱忱的年輕音樂家內心湧起強烈的渴望，想創作觸動聽眾心靈的交響樂。 【選項解析】(A) desire 渴望  (B) effect 影響  (C) strike 罷工  (D) handle 處置。an overwhelming desire 表強烈渴望。",
    "vocabIndex": 5
  },
  {
    "q": "Due to heavy thunderstorms and dangerous lightning, the athletic committee had to ______ the outdoor track meet.",
    "options": [
      "compare",
      "cancel",
      "dial",
      "excite"
    ],
    "answer": 1,
    "cn": "由於強烈雷陣雨與危險閃電，體育委員會不得不取消戶外田徑比賽。 【選項解析】(A) compare 比較  (B) dial 撥號  (C) cancel 取消  (D) excite 激勵。取消戶外活動用 cancel meet。",
    "vocabIndex": 6
  },
  {
    "q": "If you suspect an intruder is trying to enter your home, you must immediately ______ the local emergency police number.",
    "options": [
      "confuse",
      "compare",
      "cancel",
      "dial"
    ],
    "answer": 3,
    "cn": "如果你懷疑有闖入者試圖進入家門，必須立即撥打當地緊急報警電話。 【選項解析】(A) dial 撥號  (B) compare 比較  (C) cancel 取消  (D) confuse 使困惑。撥打電話動詞用 dial。",
    "vocabIndex": 7
  },
  {
    "q": "The little girl reached into her backpack to retrieve a small plastic ______ so she could fix her ponytail.",
    "options": [
      "effect",
      "comb",
      "desire",
      "strike"
    ],
    "answer": 1,
    "cn": "小女孩把手伸進背包拿出一把小塑膠梳子，以便重新整理她的馬尾辮。 【選項解析】(A) effect 效果  (B) comb 梳子  (C) desire 慾望  (D) strike 罷工。整理頭髮的工具為 comb。",
    "vocabIndex": 8
  },
  {
    "q": "It takes extraordinary emotional maturity and tact to ______ intense diplomatic conflicts between foreign nations.",
    "options": [
      "handle",
      "dial",
      "cancel",
      "confuse"
    ],
    "answer": 0,
    "cn": "妥善處理外國之間的激烈外交衝突，需要極高的情緒成熟度與圓融手腕。 【選項解析】(A) cancel 取消  (B) dial 撥號  (C) handle 處理  (D) confuse 困惑。處理衝突危機用 handle conflicts。",
    "vocabIndex": 9
  },
  {
    "q": "Financial advisors suggest that investors ______ the historical performance of various mutual funds before investing.",
    "options": [
      "dial",
      "cancel",
      "excite",
      "compare"
    ],
    "answer": 3,
    "cn": "理財顧問建議投資人在投資前，應先比較各檔共同基金的歷史績效。 【選項解析】(A) compare 比較  (B) cancel 取消  (C) excite 興奮  (D) dial 撥號。compare performance 表比較表現。",
    "vocabIndex": 0
  },
  {
    "q": "Using two completely different names for the same software feature will easily ______ new users.",
    "options": [
      "compare",
      "cancel",
      "confuse",
      "dial"
    ],
    "answer": 2,
    "cn": "對同一個軟體功能使用兩種截然不同的名稱，很容易讓新用戶感到混淆。 【選項解析】(A) compare 比較  (B) confuse 混淆  (C) cancel 取消  (D) dial 撥打。confuse new users 表使新用戶混淆。",
    "vocabIndex": 1
  },
  {
    "q": "The thrilling soccer match in the international tournament will undoubtedly ______ sports fans across the nation.",
    "options": [
      "cancel",
      "excite",
      "compare",
      "dial"
    ],
    "answer": 1,
    "cn": "這場國際錦標賽中的刺激足球對決，無疑將點燃全國體育迷的熱情。 【選項解析】(A) cancel 取消  (B) excite 激發  (C) compare 比較  (D) dial 撥號。excite sports fans 表讓球迷熱血沸騰。",
    "vocabIndex": 2
  },
  {
    "q": "A sudden lightning ______ struck the ancient oak tree in the town square, splitting its heavy trunk in half.",
    "options": [
      "handle",
      "effect",
      "strike",
      "desire"
    ],
    "answer": 2,
    "cn": "城鎮廣場上的古老橡樹遭到突如其來的雷擊，將粗壯的樹幹劈成兩半。 【選項解析】(A) strike 雷擊  (B) effect 效果  (C) handle 把手  (D) desire 慾望。lightning strike 表雷擊。",
    "vocabIndex": 3
  },
  {
    "q": "The immediate side ______ of the allergy medication made the patient feel unusually drowsy during afternoon classes.",
    "options": [
      "effect",
      "strike",
      "handle",
      "desire"
    ],
    "answer": 0,
    "cn": "過敏藥物的即時副作用，使病患在下午的課堂上感到異常昏昏欲睡。 【選項解析】(A) strike 罷工  (B) effect 效果/副作用  (C) handle 把手  (D) desire 渴望。side effect 表副作用。",
    "vocabIndex": 4
  },
  {
    "q": "Having lived in a cold climate all his life, Robert had a strong ______ to relocate to a warm tropical beach town.",
    "options": [
      "handle",
      "effect",
      "strike",
      "desire"
    ],
    "answer": 3,
    "cn": "一生都住在寒冷氣候地區的羅伯特，強烈渴望能搬到溫暖的熱帶海濱小鎮。 【選項解析】(A) desire 渴望  (B) effect 效果  (C) strike 襲擊  (D) handle 握柄。strong desire 表強烈渴望。",
    "vocabIndex": 5
  },
  {
    "q": "If your business meeting is delayed, please notify the hotel front desk immediately so they can ______ your reservation.",
    "options": [
      "cancel",
      "excite",
      "compare",
      "confuse"
    ],
    "answer": 0,
    "cn": "如果你的商務會議延期，請立即通知飯店櫃檯以便取消你的訂房預約。 【選項解析】(A) cancel 取消  (B) excite 興奮  (C) compare 比較  (D) confuse 混淆。cancel reservation 表取消預約。",
    "vocabIndex": 6
  },
  {
    "q": "In the 1980s, people had to turn a circular mechanical wheel to ______ telephone numbers on landline phones.",
    "options": [
      "excite",
      "cancel",
      "compare",
      "dial"
    ],
    "answer": 3,
    "cn": "在1980年代，人們在室內電話上必須轉動機械旋轉盤來撥打電話號碼。 【選項解析】(A) dial 撥打  (B) cancel 取消  (C) compare 比較  (D) excite 興奮。撥號電話為 dial telephone numbers。",
    "vocabIndex": 7
  },
  {
    "q": "Grandfather took a tortoiseshell ______ from his vest pocket and smoothed his gray mustache before taking the family photo.",
    "options": [
      "handle",
      "comb",
      "strike",
      "effect"
    ],
    "answer": 1,
    "cn": "祖父從背心口袋拿出一把玳瑁梳子，在拍全家福前理了理花白的鬍子。 【選項解析】(A) comb 梳子  (B) handle 把手  (C) strike 罷工  (D) effect 效果。梳理鬍鬚的梳子為 comb。",
    "vocabIndex": 8
  },
  {
    "q": "The airline customer service agent was praised for her ability to ______ difficult flight delays with exceptional grace.",
    "options": [
      "compare",
      "cancel",
      "handle",
      "dial"
    ],
    "answer": 2,
    "cn": "航空公司客服人員因以非凡的優雅應對處理棘手的航班延誤而受到稱讚。 【選項解析】(A) handle 處置  (B) cancel 取消  (C) compare 比較  (D) dial 撥號。應對處理延誤用 handle delays。",
    "vocabIndex": 9
  },
  {
    "q": "Scientists ______ satellite images from five years ago with current maps to measure the alarming rate of polar ice melting.",
    "options": [
      "cancel",
      "compare",
      "confuse",
      "dial"
    ],
    "answer": 1,
    "cn": "科學家將五年前的衛星影像與現行地圖進行比對，以衡量極地冰川融化的驚人速度。 【選項解析】(A) compare 比對  (B) cancel 取消  (C) confuse 弄亂  (D) dial 撥號。比對圖像用 compare images。",
    "vocabIndex": 0
  },
  {
    "q": "Don't ______ me with conflicting directions when I am already nervous driving through unfamiliar city traffic.",
    "options": [
      "excite",
      "compare",
      "cancel",
      "confuse"
    ],
    "answer": 3,
    "cn": "當我開車穿過陌生的城市交通本已緊張時，別再用互相矛盾的方向指示搞得我一頭霧水了。 【選項解析】(A) confuse 使混亂  (B) compare 比較  (C) cancel 取消  (D) excite 激動。搞得人混淆用 confuse me。",
    "vocabIndex": 1
  },
  {
    "q": "The brass door ______ was polished to a bright shine and felt cold to the touch on winter mornings.",
    "options": [
      "effect",
      "strike",
      "handle",
      "desire"
    ],
    "answer": 2,
    "cn": "黃銅門把手被擦得閃閃發亮，在冬天的早晨摸起來冰涼刺骨。 【選項解析】(A) handle 門把  (B) strike 罷工  (C) effect 效果  (D) desire 渴望。door handle 表門把手。",
    "vocabIndex": 9
  },
  {
    "q": "A devastating clock tower ______ damaged the historic building during the midnight aerial bombardment.",
    "options": [
      "strike",
      "handle",
      "effect",
      "desire"
    ],
    "answer": 0,
    "cn": "午夜空襲轟炸期間，鐘樓遭遇了毀滅性的空襲打擊，損壞了這座歷史古蹟。 【選項解析】(A) strike 空襲/打擊  (B) handle 把手  (C) effect 效果  (D) desire 渴望。aerial strike 表空中襲擊。",
    "vocabIndex": 3
  },
  {
    "q": "The positive psychological ______ of volunteer community service on adolescent self-confidence is well documented.",
    "options": [
      "strike",
      "handle",
      "effect",
      "desire"
    ],
    "answer": 2,
    "cn": "志工社區服務對青少年自信心產生的正面心理效果，在文獻中已有充分記載。 【選項解析】(A) effect 效果  (B) handle 把手  (C) strike 罷工  (D) desire 渴望。psychological effect 表心理效果。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "compare": {
    "pos": "v.",
    "en_def": "to estimate, measure, or note the similarity or dissimilarity between",
    "cn_def": "比較；對照；比擬",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to estimate, measure, or note the similarity or dissimilarity between",
        "cn_def": "比較；對照；比擬"
      }
    ]
  },
  "confuse": {
    "pos": "v.",
    "en_def": "to make someone bewildered, perplexed, or unable to think clearly",
    "cn_def": "使困惑；使混亂；弄錯",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make someone bewildered, perplexed, or unable to think clearly",
        "cn_def": "使困惑；使混亂；弄錯"
      }
    ]
  },
  "excite": {
    "pos": "v.",
    "en_def": "to cause strong feelings of enthusiasm, eagerness, or excitement",
    "cn_def": "使興奮；激起；刺激",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause strong feelings of enthusiasm, eagerness, or excitement",
        "cn_def": "使興奮；激起；刺激"
      }
    ]
  },
  "strike": {
    "pos": "v. / n.",
    "en_def": "to hit forcibly; an organized refusal to work by employees",
    "cn_def": "打擊；罷工；襲擊",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to hit forcibly; an organized refusal to work by employees",
        "cn_def": "打擊；罷工；襲擊"
      }
    ]
  },
  "effect": {
    "pos": "n. / v.",
    "en_def": "a change which is a result or consequence of an action or other cause",
    "cn_def": "效果；影響；產生",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a change which is a result or consequence of an action or other cause",
        "cn_def": "效果；影響；產生"
      }
    ]
  },
  "desire": {
    "pos": "n. / v.",
    "en_def": "a strong feeling of wanting to have something or wishing for something",
    "cn_def": "渴望；慾望；期望",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a strong feeling of wanting to have something or wishing for something",
        "cn_def": "渴望；慾望；期望"
      }
    ]
  },
  "cancel": {
    "pos": "v.",
    "en_def": "to decide or announce that a planned event will not take place",
    "cn_def": "取消；廢止",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to decide or announce that a planned event will not take place",
        "cn_def": "取消；廢止"
      }
    ]
  },
  "dial": {
    "pos": "v. / n.",
    "en_def": "to call a telephone number; a face of a clock or gauge",
    "cn_def": "撥電話；刻度盤；儀表盤",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to call a telephone number; a face of a clock or gauge",
        "cn_def": "撥電話；刻度盤；儀表盤"
      }
    ]
  },
  "comb": {
    "pos": "n. / v.",
    "en_def": "a toothed strip of plastic or metal used for styling hair; to search",
    "cn_def": "梳子；梳理頭髮；仔細搜查",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a toothed strip of plastic or metal used for styling hair; to search",
        "cn_def": "梳子；梳理頭髮；仔細搜查"
      }
    ]
  },
  "handle": {
    "pos": "v. / n.",
    "en_def": "to manage or deal with; the part by which a thing is held",
    "cn_def": "處理；應對；把手；柄",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to manage or deal with; the part by which a thing is held",
        "cn_def": "處理；應對；把手；柄"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
