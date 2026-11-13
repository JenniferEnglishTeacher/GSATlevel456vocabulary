// Lesson 70 Quiz Data: Perseverance, Completion, Invention, Design & Creative Excellence
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 70 - Perseverance, Completion, Invention, Design & Creative Excellence",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "continue",
    "pos": "v.",
    "cn_def": "繼續；持續",
    "en_def": "to keep happening or existing without stopping",
    "sentence": "Although heavy snow fell across the highway, the rescue team decided to {{BLANK}} their search for the missing hikers.",
    "cn": "儘管大雪降在公路上，搜救隊仍決定繼續搜尋失蹤的登山客。"
  },
  {
    "word": "complete",
    "pos": "v. / adj.",
    "cn_def": "完成；完整的",
    "en_def": "to finish making or doing; having all parts",
    "sentence": "The architect expects the engineering team to {{BLANK}} the construction of the new community center before December.",
    "cn": "建築師期望工程團隊在十二月前完成新社區中心的建設。"
  },
  {
    "word": "obey",
    "pos": "v.",
    "cn_def": "服從；遵守",
    "en_def": "to submit to the authority of someone or comply with rules",
    "sentence": "Soldiers in military training are taught to {{BLANK}} their commander's orders immediately and without hesitation.",
    "cn": "接受軍事訓練的士兵被教導要毫不猶豫且立即服從指揮官的命令。"
  },
  {
    "word": "bother",
    "pos": "v. / n.",
    "cn_def": "打擾；麻煩；費心",
    "en_def": "to take the trouble to do something; to annoy; trouble",
    "sentence": "I am very sorry to {{BLANK}} you while you are reading, but could you please lend me your English dictionary?",
    "cn": "非常抱歉在你閱讀時打擾你，但能否請你把你的英文詞典借給我？"
  },
  {
    "word": "imagine",
    "pos": "v.",
    "cn_def": "想像",
    "en_def": "to form a mental image or concept of something",
    "sentence": "Can you {{BLANK}} living on a tropical island with turquoise ocean waters, gentle breezes, and no internet access?",
    "cn": "你能想像生活在一個擁有青綠色海水、柔和微風且沒有網路的熱帶島嶼上嗎？"
  },
  {
    "word": "invent",
    "pos": "v.",
    "cn_def": "發明；創造",
    "en_def": "to create or design something that has not existed before",
    "sentence": "Alexander Graham Bell worked for years in his workshop to {{BLANK}} the first practical electrical telephone.",
    "cn": "亞歷山大·格拉漢姆·貝爾在他的工作室中鑽研了多年，發明了第一部實用的電動電話。"
  },
  {
    "word": "create",
    "pos": "v.",
    "cn_def": "創造；建立",
    "en_def": "to bring something into existence through skill or imagination",
    "sentence": "The innovative graphic artist used digital software to {{BLANK}} a series of breathtaking animations for the video game.",
    "cn": "這位極具創新精神的平面藝術家利用數位軟體，為這款電玩遊戲創造了一系列令人驚嘆的動畫。"
  },
  {
    "word": "design",
    "pos": "v. / n.",
    "cn_def": "設計；構思",
    "en_def": "to plan and make artistic drawings for a product; a plan",
    "sentence": "A famous Italian architect was hired to {{BLANK}} the modern glass facade of the international art museum.",
    "cn": "一位著名的義大利建築師受聘為這座國際藝術博物館設計現代化的玻璃外牆。"
  },
  {
    "word": "single",
    "pos": "adj.",
    "cn_def": "單一的；單身的",
    "en_def": "only one; not accompanied by others; unmarried",
    "sentence": "The hotel receptionist politely asked the business traveler whether he needed a {{BLANK}} room or a double suite.",
    "cn": "飯店櫃檯接待員禮貌地詢問這位出差旅客，他是需要單人房還是雙人套房。"
  },
  {
    "word": "perfect",
    "pos": "adj.",
    "cn_def": "完美的；極佳的",
    "en_def": "having all the desirable elements, qualities, or characteristics",
    "sentence": "With a clear blue sky, warm sunshine, and mild breeze, this afternoon is the {{BLANK}} weather for an outdoor picnic.",
    "cn": "藍天晴朗、陽光溫暖、微風輕和，今天下午是進行戶外野餐的完美天氣。"
  }
];

const MCQS = [
  {
    "q": "Despite encountering numerous financial challenges, the young scientist vowed to ______ her cancer research.",
    "options": [
      "obey",
      "bother",
      "continue",
      "invent"
    ],
    "answer": 2,
    "cn": "儘管遇到了無數的財務挑戰，這位年輕的科學家誓言要繼續她的癌症研究。 【選項解析】(A) obey 服從  (B) continue 繼續  (C) bother 打擾  (D) invent 發明。不放棄研究為 continue research。",
    "vocabIndex": 0
  },
  {
    "q": "Students have forty minutes to ______ the reading comprehension section of the English proficiency exam.",
    "options": [
      "obey",
      "bother",
      "imagine",
      "complete"
    ],
    "answer": 3,
    "cn": "學生有四十分鐘的時間完成英語能力測驗的閱讀測驗部分。 【選項解析】(A) complete 完成  (B) bother 打擾  (C) imagine 想像  (D) obey 遵守。做完試題用 complete。",
    "vocabIndex": 1
  },
  {
    "q": "For your own safety, you must strictly ______ the warning signs posted around the deep swimming pool.",
    "options": [
      "create",
      "obey",
      "design",
      "bother"
    ],
    "answer": 1,
    "cn": "為了您自身的安全，您必須嚴格遵守深水泳池周圍張貼的警告標誌。 【選項解析】(A) create 創造  (B) obey 遵守  (C) design 設計  (D) bother 打擾。遵守標示為 obey signs。",
    "vocabIndex": 2
  },
  {
    "q": "I hate to ______ you during your lunch break, but there is an urgent phone call for you from headquarters.",
    "options": [
      "bother",
      "create",
      "invent",
      "complete"
    ],
    "answer": 0,
    "cn": "我不想在你的午休時間打擾你，但總部有一通緊急電話找你。 【選項解析】(A) invent 發明  (B) create 創造  (C) bother 打擾  (D) complete 完成。打擾別人用 bother。",
    "vocabIndex": 3
  },
  {
    "q": "Close your eyes and try to ______ that you are floating peacefully on a calm lake under a starry night sky.",
    "options": [
      "obey",
      "imagine",
      "continue",
      "complete"
    ],
    "answer": 1,
    "cn": "閉上雙眼，試著想像你平靜地漂浮在繁星夜空下一片平靜的湖面上。 【選項解析】(A) obey 服從  (B) imagine 想像  (C) continue 繼續  (D) complete 完成。腦海勾勒畫面為 imagine。",
    "vocabIndex": 4
  },
  {
    "q": "Thomas Edison is widely celebrated for his tireless efforts to ______ the commercial incandescent electric light bulb.",
    "options": [
      "bother",
      "obey",
      "invent",
      "continue"
    ],
    "answer": 2,
    "cn": "湯瑪斯·愛迪生因其為發明商業白熾電燈泡所付出的不懈努力而廣受讚譽。 【選項解析】(A) bother 打擾  (B) obey 服從  (C) invent 發明  (D) continue 繼續。研發新裝置為 invent。",
    "vocabIndex": 5
  },
  {
    "q": "The author's vivid descriptions ______ a magical fantasy world that completely fascinates young readers.",
    "options": [
      "create",
      "obey",
      "bother",
      "continue"
    ],
    "answer": 0,
    "cn": "作者生動的描繪創造了一個深深吸引年輕讀者的神奇奇幻世界。 【選項解析】(A) create 創造  (B) obey 遵守  (C) bother 打擾  (D) continue 繼續。構建虛構世界為 create a fantasy world。",
    "vocabIndex": 6
  },
  {
    "q": "The talented engineering firm was commissioned to ______ an earthquake-resistant suspension bridge across the bay.",
    "options": [
      "obey",
      "bother",
      "continue",
      "design"
    ],
    "answer": 3,
    "cn": "這家才華洋溢的工程公司受託設計一座跨越海灣的抗震懸索橋。 【選項解析】(A) obey 服從  (B) bother 麻煩  (C) design 設計  (D) continue 繼續。規劃繪製橋樑圖紙為 design a bridge。",
    "vocabIndex": 7
  },
  {
    "q": "Not a ______ student in the classroom was able to solve the extraordinarily complicated calculus equation.",
    "options": [
      "perfect",
      "single",
      "broad",
      "direct"
    ],
    "answer": 1,
    "cn": "教室裡沒有任何一位學生能夠解出這道極其複雜的微積分方程式。 【選項解析】(A) single 單一的  (B) perfect 完美的  (C) broad 寬廣的  (D) direct 直接的。not a single student 指「連一個學生都沒有」。",
    "vocabIndex": 8
  },
  {
    "q": "Her English pronunciation and grammatical fluency were so ______ that listeners assumed she grew up in London.",
    "options": [
      "perfect",
      "narrow",
      "wide",
      "single"
    ],
    "answer": 0,
    "cn": "她的英語發音和文法流暢度是如此完美，以至於聽眾以為她是在倫敦長大的。 【選項解析】(A) single 單一的  (B) narrow 狹窄的  (C) wide 寬闊的  (D) perfect 完美的。發音無暇為 perfect。",
    "vocabIndex": 9
  },
  {
    "q": "Even after the bell rang, the enthusiastic debate team requested permission to ______ their discussion.",
    "options": [
      "bother",
      "obey",
      "invent",
      "continue"
    ],
    "answer": 3,
    "cn": "即使下課鐘聲敲響，熱情的辯論隊仍請求允許繼續他們的討論。 【選項解析】(A) bother 打擾  (B) continue 繼續  (C) invent 發明  (D) obey 服從。持續討論用 continue。",
    "vocabIndex": 0
  },
  {
    "q": "It took the construction workers eighteen months of hard labor to ______ the subway line extension.",
    "options": [
      "bother",
      "obey",
      "complete",
      "imagine"
    ],
    "answer": 2,
    "cn": "建築工人花費了十八個月的辛勤勞動才完成了捷運延伸線的工程。 【選項解析】(A) complete 完成  (B) obey 遵守  (C) bother 費心  (D) imagine 想像。完工為 complete the extension。",
    "vocabIndex": 1
  },
  {
    "q": "Well-trained police dogs are taught to ______ every hand gesture and verbal signal given by their handlers.",
    "options": [
      "invent",
      "obey",
      "create",
      "design"
    ],
    "answer": 1,
    "cn": "訓練有素的警犬被教導要服從領犬員給予的每一個手勢和口令訊號。 【選項解析】(A) invent 發明  (B) design 設計  (C) create 創造  (D) obey 服從。聽從指令為 obey signals。",
    "vocabIndex": 2
  },
  {
    "q": "Please do not ______ your father while he is preparing the annual tax reports in his private study.",
    "options": [
      "invent",
      "continue",
      "bother",
      "complete"
    ],
    "answer": 2,
    "cn": "當你父親在私人書房裡準備年度稅務申報表時，請不要打擾他。 【選項解析】(A) bother 打擾  (B) continue 繼續  (C) invent 發明  (D) complete 完成。煩擾他人為 bother。",
    "vocabIndex": 3
  },
  {
    "q": "It is difficult to ______ what human life was like thousands of years ago without modern technology.",
    "options": [
      "obey",
      "bother",
      "complete",
      "imagine"
    ],
    "answer": 3,
    "cn": "很難想像在沒有現代科技的數千年前，人類的生活是什麼樣子。 【選項解析】(A) obey 服從  (B) bother 打擾  (C) imagine 想像  (D) complete 完成。設想過去為 imagine life。",
    "vocabIndex": 4
  },
  {
    "q": "Scientists are working together globally to ______ new medical treatments for rare genetic diseases.",
    "options": [
      "invent",
      "obey",
      "bother",
      "continue"
    ],
    "answer": 0,
    "cn": "全球科學家正攜手合作研發針對罕見遺傳疾病的新療法。 【選項解析】(A) invent 發明  (B) obey 服從  (C) bother 麻煩  (D) continue 繼續。創製新藥物為 invent new treatments。",
    "vocabIndex": 5
  },
  {
    "q": "A team of creative graphic artists gathered in the studio to ______ an eye-catching logo for the brand.",
    "options": [
      "obey",
      "create",
      "bother",
      "continue"
    ],
    "answer": 1,
    "cn": "一組創意平面藝術家聚集在工作室中，為該品牌打造一個吸睛的商標。 【選項解析】(A) obey 遵守  (B) bother 打擾  (C) create 創造；打造  (D) continue 繼續。設計標誌為 create a logo。",
    "vocabIndex": 6
  },
  {
    "q": "The fashion studio will ______ an exclusive collection of evening dresses for the Paris fashion festival.",
    "options": [
      "design",
      "obey",
      "bother",
      "continue"
    ],
    "answer": 0,
    "cn": "這家時裝工作室將為巴黎時裝節設計一系列獨家晚禮服。 【選項解析】(A) design 設計  (B) obey 服從  (C) bother 費心  (D) continue 繼續。設計服飾為 design a collection。",
    "vocabIndex": 7
  },
  {
    "q": "My uncle prefers to live as a ______ man because he enjoys traveling the globe without domestic ties.",
    "options": [
      "broad",
      "wide",
      "perfect",
      "single"
    ],
    "answer": 3,
    "cn": "我叔叔偏好過著單身漢的生活，因為他喜歡毫無家庭牽絆地周遊世界。 【選項解析】(A) broad 寬廣的  (B) single 單身的  (C) perfect 完美的  (D) wide 寬闊的。single man 指單身男子。",
    "vocabIndex": 8
  },
  {
    "q": "The pianist performed Beethoven's Moonlight Sonata with such ______ technique that the audience was mesmerized.",
    "options": [
      "single",
      "narrow",
      "perfect",
      "crowded"
    ],
    "answer": 2,
    "cn": "鋼琴家以如此完美的技巧演奏貝多芬的《月光奏鳴曲》，讓觀眾聽得如癡如醉。 【選項解析】(A) single 單一的  (B) narrow 狹隘的  (C) perfect 完美的  (D) crowded 擁擠的。perfect technique 指無暇技巧。",
    "vocabIndex": 9
  },
  {
    "q": "We will ______ to support this local charity until every underprivileged child receives adequate school meals.",
    "options": [
      "bother",
      "continue",
      "invent",
      "obey"
    ],
    "answer": 1,
    "cn": "我們將繼續支持這個地方慈善機構，直到每位弱勢兒童都能獲得足夠的學校營養午餐。 【選項解析】(A) continue 繼續  (B) bother 打擾  (C) invent 發明  (D) obey 服從。持續支持為 continue to support。",
    "vocabIndex": 0
  },
  {
    "q": "You must ______ the online registration form and submit your personal portfolio before next Friday.",
    "options": [
      "obey",
      "bother",
      "complete",
      "imagine"
    ],
    "answer": 2,
    "cn": "你必須填妥線上報名表，並在下週五之前繳交你的個人作品集。 【選項解析】(A) obey 遵守  (B) bother 打擾  (C) complete 填妥  (D) imagine 想像。填寫表格為 complete the form。",
    "vocabIndex": 1
  },
  {
    "q": "All vehicle operators on the highway must ______ speed limits to prevent dangerous highway accidents.",
    "options": [
      "obey",
      "design",
      "create",
      "invent"
    ],
    "answer": 0,
    "cn": "公路上所有的車輛駕駛人必須遵守速限，以防止危險公路事故。 【選項解析】(A) create 創造  (B) design 設計  (C) obey 遵守  (D) invent 發明。遵守速限為 obey speed limits。",
    "vocabIndex": 2
  },
  {
    "q": "The industrial team managed to ______ a lightweight solar-powered vehicle capable of traveling long distances.",
    "options": [
      "bother",
      "continue",
      "obey",
      "invent"
    ],
    "answer": 3,
    "cn": "工業團隊成功發明了一款能夠進行長途行駛的輕型太陽能汽車。 【選項解析】(A) bother 打擾  (B) invent 發明  (C) obey 遵守  (D) continue 繼續。發明車輛為 invent a vehicle。",
    "vocabIndex": 5
  },
  {
    "q": "This scenic mountain lake is a ______ destination for travelers who want to escape the stressful city life.",
    "options": [
      "perfect",
      "narrow",
      "direct",
      "single"
    ],
    "answer": 0,
    "cn": "這座風景如畫的高山湖泊是想逃離緊張城市生活的旅客的完美目的地。 【選項解析】(A) single 單一的  (B) narrow 狹窄的  (C) direct 直達的  (D) perfect 完美的。perfect destination 為「極佳目的地」。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "continue": {
    "pos": "v.",
    "en_def": "to keep happening or existing without stopping",
    "cn_def": "繼續；持續",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to keep happening or existing without stopping",
        "cn_def": "繼續；持續"
      }
    ]
  },
  "complete": {
    "pos": "v. / adj.",
    "en_def": "to finish making or doing; having all parts",
    "cn_def": "完成；完整的",
    "combined": [
      {
        "pos": "v. / adj.",
        "en_def": "to finish making or doing; having all parts",
        "cn_def": "完成；完整的"
      }
    ]
  },
  "obey": {
    "pos": "v.",
    "en_def": "to submit to the authority of someone or comply with rules",
    "cn_def": "服從；遵守",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to submit to the authority of someone or comply with rules",
        "cn_def": "服從；遵守"
      }
    ]
  },
  "bother": {
    "pos": "v. / n.",
    "en_def": "to take the trouble to do something; to annoy; trouble",
    "cn_def": "打擾；麻煩；費心",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to take the trouble to do something; to annoy; trouble",
        "cn_def": "打擾；麻煩；費心"
      }
    ]
  },
  "imagine": {
    "pos": "v.",
    "en_def": "to form a mental image or concept of something",
    "cn_def": "想像",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to form a mental image or concept of something",
        "cn_def": "想像"
      }
    ]
  },
  "invent": {
    "pos": "v.",
    "en_def": "to create or design something that has not existed before",
    "cn_def": "發明；創造",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to create or design something that has not existed before",
        "cn_def": "發明；創造"
      }
    ]
  },
  "create": {
    "pos": "v.",
    "en_def": "to bring something into existence through skill or imagination",
    "cn_def": "創造；建立",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to bring something into existence through skill or imagination",
        "cn_def": "創造；建立"
      }
    ]
  },
  "design": {
    "pos": "v. / n.",
    "en_def": "to plan and make artistic drawings for a product; a plan",
    "cn_def": "設計；構思",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to plan and make artistic drawings for a product; a plan",
        "cn_def": "設計；構思"
      }
    ]
  },
  "single": {
    "pos": "adj.",
    "en_def": "only one; not accompanied by others; unmarried",
    "cn_def": "單一的；單身的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "only one; not accompanied by others; unmarried",
        "cn_def": "單一的；單身的"
      }
    ]
  },
  "perfect": {
    "pos": "adj.",
    "en_def": "having all the desirable elements, qualities, or characteristics",
    "cn_def": "完美的；極佳的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having all the desirable elements, qualities, or characteristics",
        "cn_def": "完美的；極佳的"
      }
    ]
  },
  "broad": {
    "pos": "",
    "en_def": "",
    "cn_def": "寬廣的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "寬廣的"
      }
    ]
  },
  "direct": {
    "pos": "",
    "en_def": "",
    "cn_def": "直接的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "直接的"
      }
    ]
  },
  "narrow": {
    "pos": "",
    "en_def": "",
    "cn_def": "狹窄的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "狹窄的"
      }
    ]
  },
  "wide": {
    "pos": "",
    "en_def": "",
    "cn_def": "寬闊的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "寬闊的"
      }
    ]
  },
  "crowded": {
    "pos": "",
    "en_def": "",
    "cn_def": "擁擠的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "擁擠的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
