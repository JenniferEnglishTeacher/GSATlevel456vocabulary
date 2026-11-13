// Lesson 100 Quiz Data: Intellectual Curiosity, Reflection, Ethics, Media Promotion & Interpersonal Contact
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 100 - Intellectual Curiosity, Reflection, Ethics, Media Promotion & Interpersonal Contact",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "wonder",
    "pos": "v. / n.",
    "cn_def": "納悶；想知道；奇蹟",
    "en_def": "to want to know something; a feeling of great surprise and admiration",
    "sentence": "Sitting under the starry night sky, the young boy began to {{BLANK}} how many distant galaxies exist.",
    "cn": "坐在繁星點點的夜空下，小男孩開始納悶想知道究竟存在著多少遙遠星系。"
  },
  {
    "word": "actually",
    "pos": "adv.",
    "cn_def": "實際上；事實上",
    "en_def": "in fact or really, especially when stating the truth",
    "sentence": "People assumed the two rivals were unfriendly, but they were {{BLANK}} close childhood friends.",
    "cn": "人們以為這兩位競爭對手關係不睦，但事實上他們是親密的兒時玩伴。"
  },
  {
    "word": "admire",
    "pos": "v.",
    "cn_def": "欽佩；讚賞",
    "en_def": "to respect or approve of someone or their behavior",
    "sentence": "Students around the world deeply {{BLANK}} Mother Teresa for her lifelong selfless dedication to the poor.",
    "cn": "全世界的學生都深深欽佩德蕾莎修女一生對窮人的無私奉獻。"
  },
  {
    "word": "basic",
    "pos": "adj.",
    "cn_def": "基礎的；基本的",
    "en_def": "forming the foundation or most important part; simple",
    "sentence": "Mastering {{BLANK}} grammar rules and everyday vocabulary is the first essential step in learning English.",
    "cn": "掌握基礎文法規則與日常單字是學習英語的第一個重要步驟。"
  },
  {
    "word": "admit",
    "pos": "v.",
    "cn_def": "承認；准許進入",
    "en_def": "to agree that something is true, especially unwillingly",
    "sentence": "The honest student had the moral courage to {{BLANK}} his mistake after accidentally breaking the beaker.",
    "cn": "那位誠實的學生在不小心打碎燒杯後，有道德勇氣承認自己的錯誤。"
  },
  {
    "word": "adopt",
    "pos": "v.",
    "cn_def": "收養；採納；採用",
    "en_def": "to take someone else's child as one's own; to accept a new method or policy",
    "sentence": "The city government decided to {{BLANK}} a modern green transportation policy to reduce urban smog.",
    "cn": "市政府決定採納一項現代綠色交通政策，以減少城市煙霧。"
  },
  {
    "word": "advertisement",
    "pos": "n.",
    "cn_def": "廣告；宣傳",
    "en_def": "a public promotion of a product or service; an ad",
    "sentence": "The local bookstore placed a creative {{BLANK}} in the weekend newspaper to promote its annual book sale.",
    "cn": "那家在地書店在週末報紙上刊登了一則有創意的廣告，以宣傳其年度書展大特賣。"
  },
  {
    "word": "available",
    "pos": "adj.",
    "cn_def": "可取得的；可買到的；有空的",
    "en_def": "ready to be used, bought, or found; not busy",
    "sentence": "Are you {{BLANK}} this Saturday afternoon to meet at the quiet cafe and review our final presentation slides?",
    "cn": "你這個星期六下午有空在安靜的咖啡館碰面，並檢視我們期末簡報的投影片嗎？"
  },
  {
    "word": "certain",
    "pos": "adj.",
    "cn_def": "確定的；確信的；某個",
    "en_def": "having no doubt or knowing for sure; particular",
    "sentence": "The lead detective was completely {{BLANK}} that the fingerprint on the broken glass belonged to the suspect.",
    "cn": "主任偵探完全確定碎玻璃上的指紋屬於該名嫌犯。"
  },
  {
    "word": "contact",
    "pos": "v. / n.",
    "cn_def": "聯絡；聯繫",
    "en_def": "to communicate with someone by phone, email, or letter; communication",
    "sentence": "If you have any further questions regarding the job interview, please {{BLANK}} our human resources department.",
    "cn": "如果您對工作面試有任何進一步的問題，請聯絡我們的人力資源部門。"
  }
];

const MCQS = [
  {
    "q": "Looking out at the vast ocean, the poet began to ______ what miraculous creatures dwell beneath the waves.",
    "options": [
      "admit",
      "adopt",
      "wonder",
      "contact"
    ],
    "answer": 2,
    "cn": "望著遼闊的大海，詩人開始納悶想知道浪濤之下究竟棲息著怎樣神奇的生物。 【選項解析】(A) admit 承認  (B) wonder 想知道  (C) adopt 採納  (D) contact 聯絡。began to wonder 表「開始想知道」。",
    "vocabIndex": 0
  },
  {
    "q": "He seemed very calm during the speech, but ______ his hands were trembling with nervousness inside his pockets.",
    "options": [
      "basic",
      "actually",
      "available",
      "certain"
    ],
    "answer": 1,
    "cn": "他在演講時表面上看起來非常冷靜，但事實上他的雙手在口袋裡因緊張而顫抖。 【選項解析】(A) basic 基礎的  (B) certain 確信的  (C) available 可取得的  (D) actually 事實上。actually 表轉折「事實上」。",
    "vocabIndex": 1
  },
  {
    "q": "Teachers and classmates ______ Sarah for her unwavering persistence in winning the national science fair.",
    "options": [
      "admire",
      "admit",
      "adopt",
      "wonder"
    ],
    "answer": 0,
    "cn": "老師與同學們都欽佩莎拉在贏得全國科展方面所展現的堅定不移毅力。 【選項解析】(A) admire 欽佩  (B) admit 承認  (C) adopt 收養  (D) wonder 納悶。admire Sarah for persistence 表「欽佩其毅力」。",
    "vocabIndex": 2
  },
  {
    "q": "Knowing how to read a map and use a compass are ______ wilderness survival skills for every scout.",
    "options": [
      "available",
      "actually",
      "certain",
      "basic"
    ],
    "answer": 3,
    "cn": "懂得如何看地圖和使用指南針是每位童軍必備的荒野求生基礎技能。 【選項解析】(A) basic 基礎的  (B) actually 事實上  (C) certain 確信的  (D) available 可取得的。basic survival skills 表「基礎求生技能」。",
    "vocabIndex": 3
  },
  {
    "q": "It takes genuine maturity and humility to ______ when you have made a serious judgment error.",
    "options": [
      "adopt",
      "wonder",
      "admit",
      "admire"
    ],
    "answer": 2,
    "cn": "當你犯了嚴重的判斷錯誤時，坦承承認需要真正的成熟與謙遜。 【選項解析】(A) adopt 採納  (B) wonder 想知道  (C) admit 承認  (D) admire 欽佩。admit error 表「承認錯誤」。",
    "vocabIndex": 4
  },
  {
    "q": "After years of careful thought, the loving couple made the heartwarming decision to ______ an orphaned girl.",
    "options": [
      "adopt",
      "admit",
      "wonder",
      "admire"
    ],
    "answer": 0,
    "cn": "經過多年的深思熟慮，這對有愛心的夫婦做出了令人暖心的決定，收養了一名孤兒女童。 【選項解析】(A) adopt 收養  (B) admit 承認  (C) wonder 納悶  (D) admire 欽佩。adopt a girl 表「收養一名女孩」。",
    "vocabIndex": 5
  },
  {
    "q": "The technology corporation launched a multimillion-dollar television ______ to introduce its new electric car.",
    "options": [
      "wonder",
      "basic",
      "contact",
      "advertisement"
    ],
    "answer": 3,
    "cn": "這家科技大企業推出了一則耗資數百萬美元的電視廣告，以介紹其新款電動車。 【選項解析】(A) wonder 奇蹟  (B) advertisement 廣告  (C) contact 聯絡  (D) basic 基本。television advertisement 表「電視廣告」。",
    "vocabIndex": 6
  },
  {
    "q": "Free parking spaces are seldom ______ in downtown Taipei during busy holiday shopping weekends.",
    "options": [
      "certain",
      "available",
      "basic",
      "actually"
    ],
    "answer": 1,
    "cn": "在繁忙的假日購物週末，台北市中心鮮少有空的免費停車位。 【選項解析】(A) certain 確信的  (B) available 可用的；空的  (C) basic 基本的  (D) actually 事實上。free spaces are seldom available 表「車位很少是有空的」。",
    "vocabIndex": 7
  },
  {
    "q": "The doctor felt ______ that the prescribed antibiotics would cure the throat infection within five days.",
    "options": [
      "basic",
      "available",
      "certain",
      "actually"
    ],
    "answer": 2,
    "cn": "醫生確信處方的抗生素將在五天內治癒喉嚨感染。 【選項解析】(A) basic 基礎的  (B) available 可取得的  (C) certain 確信的  (D) actually 事實上。felt certain that 表「確信…」。",
    "vocabIndex": 8
  },
  {
    "q": "Please feel free to ______ our customer support hotline if you experience any technical difficulties.",
    "options": [
      "adopt",
      "admit",
      "wonder",
      "contact"
    ],
    "answer": 3,
    "cn": "如果您遇到任何技術問題，請隨時聯繫聯絡我們的客戶支援服務專線。 【選項解析】(A) adopt 採納  (B) admit 承認  (C) wonder 納悶  (D) contact 聯絡。contact support hotline 表「聯絡支援專線」。",
    "vocabIndex": 9
  },
  {
    "q": "I often ______ how ancient Egyptians managed to construct the magnificent pyramids with simple tools.",
    "options": [
      "wonder",
      "admit",
      "adopt",
      "contact"
    ],
    "answer": 0,
    "cn": "我常常納悶想知道古埃及人是如何使用簡單工具建造出如此宏偉的金字塔的。 【選項解析】(A) wonder 想知道  (B) admit 承認  (C) adopt 採納  (D) contact 聯絡。wonder how 表「想知道如何…」。",
    "vocabIndex": 0
  },
  {
    "q": "She sounded like a native speaker of English, but she was ______ born and raised in central Tainan.",
    "options": [
      "basic",
      "actually",
      "certain",
      "available"
    ],
    "answer": 1,
    "cn": "她英語聽起來像母語人士，但她實際上是在台南土生長大的。 【選項解析】(A) basic 基本的  (B) actually 實際上  (C) certain 確定的  (D) available 有空的。actually born and raised 表「實際上出生長大於」。",
    "vocabIndex": 1
  },
  {
    "q": "We all ______ uncle Robert for his generous philanthropy and dedication to helping disadvantaged children.",
    "options": [
      "adopt",
      "admit",
      "admire",
      "wonder"
    ],
    "answer": 2,
    "cn": "我們大家都欽佩羅伯特叔叔慷慨的慈善事業，以及他致力於救助弱勢兒童的奉獻精神。 【選項解析】(A) adopt 收養  (B) admit 承認  (C) admire 欽佩  (D) wonder 納悶。admire him for dedication 表「欽佩其奉獻」。",
    "vocabIndex": 2
  },
  {
    "q": "The course syllabus covers ______ computer skills, such as word processing, spreadsheets, and sending emails.",
    "options": [
      "certain",
      "actually",
      "available",
      "basic"
    ],
    "answer": 3,
    "cn": "該課程教學大綱涵蓋了基礎電腦技能，例如文書處理、試算表與寄發電子郵件。 【選項解析】(A) certain 確定的  (B) basic 基礎的  (C) available 可用的  (D) actually 實際上。basic computer skills 表「基礎電腦技能」。",
    "vocabIndex": 3
  },
  {
    "q": "The suspect refused to ______ any involvement in the bank robbery, claiming he was out of town.",
    "options": [
      "wonder",
      "admit",
      "adopt",
      "admire"
    ],
    "answer": 1,
    "cn": "該嫌犯拒絕承認參與銀行搶案，堅稱自己當時不在城裡。 【選項解析】(A) wonder 納悶  (B) adopt 採用  (C) admit 承認  (D) admire 欽佩。refused to admit 表「拒絕承認」。",
    "vocabIndex": 4
  },
  {
    "q": "School administrators voted to ______ a new digital attendance tracking software to streamline records.",
    "options": [
      "adopt",
      "wonder",
      "admit",
      "contact"
    ],
    "answer": 0,
    "cn": "學校行政人員投票贊成採用一款新的數位出缺勤追蹤軟體，以簡化紀錄作業。 【選項解析】(A) adopt 採用  (B) wonder 納悶  (C) admit 承認  (D) contact 聯絡。adopt new software 表「採用新軟體」。",
    "vocabIndex": 5
  },
  {
    "q": "Posting an online job ______ attracted hundreds of qualified candidates from universities across the island.",
    "options": [
      "wonder",
      "contact",
      "basic",
      "advertisement"
    ],
    "answer": 3,
    "cn": "在網路上刊登徵才廣告吸引了來自全島各大學的數百名合格應徵者。 【選項解析】(A) wonder 奇蹟  (B) contact 聯繫  (C) advertisement 廣告  (D) basic 基本。job advertisement 表「求職/徵才廣告」。",
    "vocabIndex": 6
  },
  {
    "q": "Fresh seasonal strawberries are now widely ______ at local fruit markets as harvest season begins.",
    "options": [
      "certain",
      "available",
      "basic",
      "actually"
    ],
    "answer": 1,
    "cn": "隨著採收季節展開，新鮮當季草莓現在在各地水果市場上都隨處可買到。 【選項解析】(A) certain 確定的  (B) available 可買到的  (C) basic 基本的  (D) actually 實際上。widely available 表「普遍可取得/買到」。",
    "vocabIndex": 7
  },
  {
    "q": "Are you entirely ______ that you locked the front door securely before we left the house this morning?",
    "options": [
      "basic",
      "available",
      "certain",
      "actually"
    ],
    "answer": 2,
    "cn": "你完全確定今早我們出門前你把大門鎖好了嗎？ 【選項解析】(A) basic 基本的  (B) available 有空的  (C) certain 確定的  (D) actually 實際上。entirely certain 表「完全確定」。",
    "vocabIndex": 8
  },
  {
    "q": "You can ______ me via text message or telephone if our train schedule changes unexpectedly.",
    "options": [
      "contact",
      "admit",
      "wonder",
      "adopt"
    ],
    "answer": 0,
    "cn": "如果我們的火車時刻表意外發生變更，你可以透過簡訊或電話聯絡我。 【選項解析】(A) adopt 採納  (B) admit 承認  (C) wonder 納悶  (D) contact 聯絡。contact me via text 表「透過簡訊聯絡我」。",
    "vocabIndex": 9
  },
  {
    "q": "Scientists still ______ about the mysteries of dark matter and how the universe initially came into being.",
    "options": [
      "adopt",
      "admit",
      "wonder",
      "contact"
    ],
    "answer": 2,
    "cn": "科學家們依然對暗物質的奧秘以及宇宙最初是如何形成的感到好奇探索（納悶）。 【選項解析】(A) adopt 採用  (B) wonder 納悶好奇  (C) admit 承認  (D) contact 聯繫。wonder about mysteries 表「對奧秘感到好奇想探究」。",
    "vocabIndex": 0
  },
  {
    "q": "The small antique bookstore looked closed, but it was ______ open and welcoming readers inside.",
    "options": [
      "available",
      "basic",
      "certain",
      "actually"
    ],
    "answer": 3,
    "cn": "那家古樸的舊書店看起來像打烊了，但它實際上開著，並歡迎讀者進入。 【選項解析】(A) actually 實際上  (B) basic 基本的  (C) certain 確定的  (D) available 可用的。actually open 表「實際上開著」。",
    "vocabIndex": 1
  },
  {
    "q": "Young artists deeply ______ Picasso for his revolutionary cubist style that transformed modern visual art.",
    "options": [
      "adopt",
      "admire",
      "admit",
      "wonder"
    ],
    "answer": 1,
    "cn": "年輕藝術家們深為欽佩畢卡索，因其革命性的立體派風格改變了現代視覺藝術。 【選項解析】(A) adopt 採納  (B) admire 欽佩  (C) admit 承認  (D) wonder 納悶。deeply admire Picasso 表「深為欽佩畢卡索」。",
    "vocabIndex": 2
  },
  {
    "q": "Clean drinking water, nutritious food, and safe shelter are ______ human rights that belong to everyone.",
    "options": [
      "basic",
      "actually",
      "certain",
      "available"
    ],
    "answer": 0,
    "cn": "乾淨飲用水、營養食物與安全住所是屬於每個人的基本人權。 【選項解析】(A) basic 基本的  (B) actually 實際上  (C) certain 確定的  (D) available 可用的。basic human rights 表「基本人權」。",
    "vocabIndex": 3
  },
  {
    "q": "Although he felt embarrassed, the student was brave enough to ______ that he did not finish his homework.",
    "options": [
      "adopt",
      "admit",
      "wonder",
      "contact"
    ],
    "answer": 1,
    "cn": "雖然他感到尷尬，那位學生還是勇敢地承認自己沒有完成家庭作業。 【選項解析】(A) adopt 採納  (B) wonder 納悶  (C) admit 承認  (D) contact 聯絡。brave enough to admit 表「勇敢承認」。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "wonder": {
    "pos": "v. / n.",
    "en_def": "to want to know something; a feeling of great surprise and admiration",
    "cn_def": "納悶；想知道；奇蹟",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to want to know something; a feeling of great surprise and admiration",
        "cn_def": "納悶；想知道；奇蹟"
      }
    ]
  },
  "actually": {
    "pos": "adv.",
    "en_def": "in fact or really, especially when stating the truth",
    "cn_def": "實際上；事實上",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in fact or really, especially when stating the truth",
        "cn_def": "實際上；事實上"
      }
    ]
  },
  "admire": {
    "pos": "v.",
    "en_def": "to respect or approve of someone or their behavior",
    "cn_def": "欽佩；讚賞",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to respect or approve of someone or their behavior",
        "cn_def": "欽佩；讚賞"
      }
    ]
  },
  "basic": {
    "pos": "adj.",
    "en_def": "forming the foundation or most important part; simple",
    "cn_def": "基礎的；基本的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "forming the foundation or most important part; simple",
        "cn_def": "基礎的；基本的"
      }
    ]
  },
  "admit": {
    "pos": "v.",
    "en_def": "to agree that something is true, especially unwillingly",
    "cn_def": "承認；准許進入",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to agree that something is true, especially unwillingly",
        "cn_def": "承認；准許進入"
      }
    ]
  },
  "adopt": {
    "pos": "v.",
    "en_def": "to take someone else's child as one's own; to accept a new method or policy",
    "cn_def": "收養；採納；採用",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take someone else's child as one's own; to accept a new method or policy",
        "cn_def": "收養；採納；採用"
      }
    ]
  },
  "advertisement": {
    "pos": "n.",
    "en_def": "a public promotion of a product or service; an ad",
    "cn_def": "廣告；宣傳",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a public promotion of a product or service; an ad",
        "cn_def": "廣告；宣傳"
      }
    ]
  },
  "available": {
    "pos": "adj.",
    "en_def": "ready to be used, bought, or found; not busy",
    "cn_def": "可取得的；可買到的；有空的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "ready to be used, bought, or found; not busy",
        "cn_def": "可取得的；可買到的；有空的"
      }
    ]
  },
  "certain": {
    "pos": "adj.",
    "en_def": "having no doubt or knowing for sure; particular",
    "cn_def": "確定的；確信的；某個",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having no doubt or knowing for sure; particular",
        "cn_def": "確定的；確信的；某個"
      }
    ]
  },
  "contact": {
    "pos": "v. / n.",
    "en_def": "to communicate with someone by phone, email, or letter; communication",
    "cn_def": "聯絡；聯繫",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to communicate with someone by phone, email, or letter; communication",
        "cn_def": "聯絡；聯繫"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
