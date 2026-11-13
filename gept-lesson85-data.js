// Lesson 85 Quiz Data: Individual Identity, Personal Grooming & Supermarket Sections
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 85 - Individual Identity, Personal Grooming & Supermarket Sections",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "alone",
    "pos": "adj. / adv.",
    "cn_def": "單獨的；獨自地",
    "en_def": "without other people; by yourself",
    "sentence": "Although traveling {{BLANK}} in a foreign country can be exciting, you should always stay alert and keep your phone charged.",
    "cn": "雖然在國外獨自旅行可能令人興奮，但你應隨時保持警惕並確保手機電量充足。"
  },
  {
    "word": "personal",
    "pos": "adj.",
    "cn_def": "個人的；私人的",
    "en_def": "belonging to or relating to a particular person",
    "sentence": "You should never share your {{BLANK}} bank passwords or national identification numbers with strangers on the telephone.",
    "cn": "你絕不應該在電話中與陌生人分享你的個人銀行密碼或身分證字號。"
  },
  {
    "word": "individual",
    "pos": "n. / adj.",
    "cn_def": "個人；個別的",
    "en_def": "a single person considered separately from a group; separate",
    "sentence": "The dedicated teacher respected the {{BLANK}} learning needs of each student and gave extra after-school tutoring patiently.",
    "cn": "這位敬業的老師尊重每位學生的個別學習需求，並耐心地提供額外的課後輔導。"
  },
  {
    "word": "owner",
    "pos": "n.",
    "cn_def": "主人；業主；擁有人",
    "en_def": "someone who possesses or legally owns something",
    "sentence": "The friendly pet dog waited patiently beside the front gate every afternoon until its {{BLANK}} returned home from office work.",
    "cn": "這隻友善的寵物狗每天下午都在大門旁耐心等待，直到牠的主人下班回家。"
  },
  {
    "word": "haircut",
    "pos": "n.",
    "cn_def": "理髮；髮型",
    "en_def": "the act of cutting the hair, or the style in which it is cut",
    "sentence": "Before attending his sister's formal wedding banquet, Jason went to the local barber shop to get a neat {{BLANK}}.",
    "cn": "在參加姊姊隆重的婚宴之前，傑森去當地的理髮店剪了一個俐落的髮型。"
  },
  {
    "word": "toothbrush",
    "pos": "n.",
    "cn_def": "牙刷",
    "en_def": "a small brush used for cleaning teeth",
    "sentence": "Dentists recommend replacing your manual {{BLANK}} every three months, or the worn-out bristles will not clean your teeth properly.",
    "cn": "牙醫建議每三個月更換一次手動牙刷，否則磨損的刷毛將無法適當清潔牙齒。"
  },
  {
    "word": "napkin",
    "pos": "n.",
    "cn_def": "餐巾；餐巾紙",
    "en_def": "a piece of cloth or paper used at meals to wipe fingers or lips",
    "sentence": "After finishing the juicy grilled steak, the dinner guest took a paper {{BLANK}} to wipe sauce stains gently from his lips.",
    "cn": "吃完多汁的烤牛排後，這位晚餐賓客拿了一張餐巾紙輕輕擦拭嘴唇上的醬汁污漬。"
  },
  {
    "word": "part",
    "pos": "n. / v.",
    "cn_def": "部分；零件；分開",
    "en_def": "some but not all of a thing; to separate",
    "sentence": "Reading English storybooks for thirty minutes before sleeping has become an essential {{BLANK}} of Kevin's daily evening routine.",
    "cn": "睡前閱讀三十分鐘英文故事書已經成為凱文每天晚間作息中不可或缺的一部分。"
  },
  {
    "word": "section",
    "pos": "n.",
    "cn_def": "區塊；部門；專區",
    "en_def": "one of the parts into which something is divided",
    "sentence": "Mother walked directly to the fresh seafood {{BLANK}} of the supermarket to buy Atlantic salmon for our family dinner.",
    "cn": "母親直接走到超市的新鮮海鮮專區，為我們的家庭晚餐採買大西洋鮭魚。"
  },
  {
    "word": "event",
    "pos": "n.",
    "cn_def": "事件；大事；活動",
    "en_def": "an important happening or planned public occasion",
    "sentence": "Winning the national science championship was a life-changing {{BLANK}} that opened up many scholarship opportunities for Linda.",
    "cn": "贏得全國科學大賽冠軍是一件改變人生的大事，為琳達開啟了許多獎學金機會。"
  }
];

const MCQS = [
  {
    "q": "Walking ______ in the dark forest after midnight can be dangerous, so tourists are advised to stay together in groups.",
    "options": [
      "alone",
      "personal",
      "individual",
      "owner"
    ],
    "answer": 0,
    "cn": "午夜過後在黑暗的森林裡獨自漫步可能很危險，因此建議遊客成群結伴同行。 【選項解析】(A) alone 獨自地  (B) personal 個人的  (C) individual 個別的  (D) owner 主人。獨自走路為 walk alone。",
    "vocabIndex": 0
  },
  {
    "q": "Please respect my ______ privacy and do not read through the private diary entries stored in my bedroom desk drawer.",
    "options": [
      "alone",
      "owner",
      "individual",
      "personal"
    ],
    "answer": 3,
    "cn": "請尊重我的個人隱私，不要翻看存放在我臥室書桌抽屜裡的私人日記。 【選項解析】(A) alone 單獨的  (B) personal 個人的  (C) individual 個別的  (D) owner 主人。個人隱私為 personal privacy。",
    "vocabIndex": 1
  },
  {
    "q": "In a democratic society, the basic human rights and legal freedoms of every single ______ must be protected by law.",
    "options": [
      "haircut",
      "owner",
      "individual",
      "toothbrush"
    ],
    "answer": 2,
    "cn": "在民主社會中，每位個人的基本人權與法定自由都必須受到法律保障。 【選項解析】(A) haircut 理髮  (B) owner 主人  (C) individual 個人  (D) toothbrush 牙刷。每位單獨之個人為 every single individual。",
    "vocabIndex": 2
  },
  {
    "q": "The police officer verified the registration documents to confirm that Mr. Davis was the legal ______ of the stolen vehicle.",
    "options": [
      "haircut",
      "owner",
      "toothbrush",
      "napkin"
    ],
    "answer": 1,
    "cn": "警官核對了登記文件，以確認戴維斯先生是這輛被盜車輛的合法車主。 【選項解析】(A) owner 車主/主人  (B) haircut 理髮  (C) toothbrush 牙刷  (D) napkin 餐巾。合法車主為 legal owner。",
    "vocabIndex": 3
  },
  {
    "q": "Tommy's hair had grown much too long over the summer vacation, so his mother took him to the salon for a clean ______.",
    "options": [
      "napkin",
      "owner",
      "haircut",
      "toothbrush"
    ],
    "answer": 2,
    "cn": "湯米的頭髮在暑假期間長得太長了，所以他媽媽帶他去沙龍理了一個俐落的髮型。 【選項解析】(A) napkin 餐巾  (B) owner 主人  (C) toothbrush 牙刷  (D) haircut 理髮。修剪頭髮髮型為 get a haircut。",
    "vocabIndex": 4
  },
  {
    "q": "Don't forget to pack your toothpaste and ______ in your travel bag before leaving for the school camping trip.",
    "options": [
      "haircut",
      "toothbrush",
      "owner",
      "napkin"
    ],
    "answer": 1,
    "cn": "出發參加學校露營旅行前，別忘了在旅行包裡裝上你的牙膏和牙刷。 【選項解析】(A) toothbrush 牙刷  (B) haircut 理髮  (C) owner 主人  (D) napkin 餐巾。個人清潔牙刷為 toothbrush。",
    "vocabIndex": 5
  },
  {
    "q": "The polite waiter placed a folded cloth ______ on my lap as soon as I sat down at the table in the French restaurant.",
    "options": [
      "napkin",
      "toothbrush",
      "haircut",
      "owner"
    ],
    "answer": 0,
    "cn": "在法國餐廳的餐桌旁一坐下，有禮貌的服務生就把一張摺疊好的布餐巾鋪在我的腿上。 【選項解析】(A) toothbrush 牙刷  (B) napkin 餐巾  (C) haircut 理髮  (D) owner 主人。用餐鋪在腿上的餐巾為 cloth napkin。",
    "vocabIndex": 6
  },
  {
    "q": "Regular physical exercise is a vital ______ of maintaining cardiovascular fitness and reducing daily mental stress.",
    "options": [
      "owner",
      "section",
      "event",
      "part"
    ],
    "answer": 3,
    "cn": "規律的體能鍛鍊是保持心血管健康和減輕日常精神壓力的重要部分。 【選項解析】(A) part 部分  (B) section 專區  (C) event 事件  (D) owner 主人。重要組成部分為 vital part。",
    "vocabIndex": 7
  },
  {
    "q": "You can find canned peaches, strawberry jam, and tomato paste in the packaged food ______ on the second floor.",
    "options": [
      "section",
      "part",
      "event",
      "owner"
    ],
    "answer": 0,
    "cn": "你可以在二樓的包裝食品專區找到桃子罐頭、草莓醬和番茄醬。 【選項解析】(A) event 事件  (B) part 部分  (C) section 專區  (D) owner 主人。超市特定商品陳列區為 section。",
    "vocabIndex": 8
  },
  {
    "q": "The international sports competition was a grand community ______ that brought together athletic teams from twenty countries.",
    "options": [
      "part",
      "section",
      "event",
      "toothbrush"
    ],
    "answer": 2,
    "cn": "這場國際體育賽事是一場盛大的社區盛事，匯集了來自二十個國家的運動團隊。 【選項解析】(A) part 部分  (B) event 盛事  (C) section 專區  (D) toothbrush 牙刷。重大公共活動為 grand event。",
    "vocabIndex": 9
  },
  {
    "q": "Living ______ in a tiny studio apartment taught the young college student how to cook meals and manage her monthly budget.",
    "options": [
      "personal",
      "alone",
      "individual",
      "owner"
    ],
    "answer": 1,
    "cn": "獨自住在狹小的套房裡教會了這位年輕的大學生如何做飯和管理她的每月預算。 【選項解析】(A) personal 個人的  (B) individual 個別的  (C) alone 獨自  (D) owner 主人。獨自一人居住為 live alone。",
    "vocabIndex": 0
  },
  {
    "q": "Writing down your ______ feelings in a journal every evening is an effective way to reflect on daily personal experiences.",
    "options": [
      "alone",
      "owner",
      "individual",
      "personal"
    ],
    "answer": 3,
    "cn": "每天晚上在日記裡寫下你的個人感受，是反思日常個人經歷的有效方式。 【選項解析】(A) alone 單獨的  (B) personal 個人的  (C) individual 個別的  (D) owner 主人。個人內在感受為 personal feelings。",
    "vocabIndex": 1
  },
  {
    "q": "The sports coach praised the remarkable ______ performance of each basketball player after their hard-fought tournament victory.",
    "options": [
      "alone",
      "personal",
      "individual",
      "owner"
    ],
    "answer": 2,
    "cn": "體育教練在籃球隊歷經艱苦奮戰贏得錦標賽勝利後，讚揚了每位球員卓越的個人表現。 【選項解析】(A) alone 單獨的  (B) personal 私人的  (C) individual 個人的  (D) owner 主人。個人技術發揮為 individual performance。",
    "vocabIndex": 2
  },
  {
    "q": "The shop ______ unlocked the glass front doors at nine o'clock sharp and warmly welcomed the waiting shoppers.",
    "options": [
      "haircut",
      "owner",
      "napkin",
      "toothbrush"
    ],
    "answer": 1,
    "cn": "店老闆在九點整準時打開玻璃前門，熱情地歡迎等候的購物民眾。 【選項解析】(A) owner 店主  (B) haircut 理髮  (C) napkin 餐巾  (D) toothbrush 牙刷。店家老闆為 shop owner。",
    "vocabIndex": 3
  },
  {
    "q": "Uncle George looks much younger and more energetic after getting a stylish short ______ from the downtown barber.",
    "options": [
      "haircut",
      "toothbrush",
      "napkin",
      "owner"
    ],
    "answer": 0,
    "cn": "喬治叔叔在市中心的理髮店剪了一個時尚的短髮後，看起來年輕且更有活力多了。 【選項解析】(A) napkin 餐巾  (B) toothbrush 牙刷  (C) haircut 髮型  (D) owner 主人。俐落短髮為 short haircut。",
    "vocabIndex": 4
  },
  {
    "q": "Brushing with a soft-bristled ______ twice daily is essential to prevent tooth decay and maintain healthy gums.",
    "options": [
      "owner",
      "haircut",
      "napkin",
      "toothbrush"
    ],
    "answer": 3,
    "cn": "每天用軟毛牙刷刷牙兩次，對於預防蛀牙和保持牙齦健康至關重要。 【選項解析】(A) toothbrush 牙刷  (B) haircut 理髮  (C) napkin 餐巾  (D) owner 主人。軟毛牙刷為 soft-bristled toothbrush。",
    "vocabIndex": 5
  },
  {
    "q": "Little Betty accidentally spilled milk onto the table and quickly reached for a paper ______ to wipe up the puddle.",
    "options": [
      "napkin",
      "haircut",
      "toothbrush",
      "owner"
    ],
    "answer": 0,
    "cn": "小貝蒂不小心把牛奶灑在桌上，連忙伸手抓起一張餐巾紙把水漬擦乾淨。 【選項解析】(A) toothbrush 牙刷  (B) haircut 理髮  (C) napkin 餐巾紙  (D) owner 主人。擦桌子之紙巾為 paper napkin。",
    "vocabIndex": 6
  },
  {
    "q": "Overcoming severe financial hardship was an unforgettable ______ of my grandfather's life story during his early twenties.",
    "options": [
      "section",
      "part",
      "event",
      "owner"
    ],
    "answer": 1,
    "cn": "克服嚴重的經濟困難是我祖父二十歲出頭人生故事中難忘的一部分。 【選項解析】(A) section 專區  (B) part 一部分  (C) event 事件  (D) owner 主人。人生難忘的部分為 an unforgettable part。",
    "vocabIndex": 7
  },
  {
    "q": "Let's meet outside the frozen food ______ of the department store after you finish picking up your groceries.",
    "options": [
      "event",
      "part",
      "section",
      "owner"
    ],
    "answer": 2,
    "cn": "等你在百貨公司買完日常用品後，我們在冷凍食品專區外面碰面吧。 【選項解析】(A) event 事件  (B) part 部分  (C) section 專區  (D) owner 主人。冷凍食品區為 frozen food section。",
    "vocabIndex": 8
  },
  {
    "q": "Hosting the annual cultural festival was an exciting ______ that attracted thousands of local residents and foreign tourists.",
    "options": [
      "part",
      "section",
      "toothbrush",
      "event"
    ],
    "answer": 3,
    "cn": "舉辦一年一度的文化節是一項令人興奮的盛事，吸引了數千名當地居民和外國遊客。 【選項解析】(A) part 部分  (B) section 專區  (C) event 盛事  (D) toothbrush 牙刷。令人興奮的大活動為 an exciting event。",
    "vocabIndex": 9
  },
  {
    "q": "The elderly lady sat peacefully ______ on the wooden park bench, feeding small breadcrumbs to the gentle pigeons.",
    "options": [
      "alone",
      "personal",
      "individual",
      "owner"
    ],
    "answer": 0,
    "cn": "年邁的女士平靜地獨自坐在木製公園長椅上，向溫順的鴿子投餵小麵包屑。 【選項解析】(A) alone 獨自地  (B) personal 個人的  (C) individual 個別的  (D) owner 主人。獨自坐在長椅上為 sit alone。",
    "vocabIndex": 0
  },
  {
    "q": "Job applicants should highlight their relevant work qualifications rather than focusing on irrelevant ______ matters.",
    "options": [
      "alone",
      "individual",
      "personal",
      "owner"
    ],
    "answer": 2,
    "cn": "求職者應著重強調自己相關的工作資格，而不是專注於無關緊要的私人事務。 【選項解析】(A) alone 單獨的  (B) personal 私人的  (C) individual 個別的  (D) owner 主人。私人事務為 personal matters。",
    "vocabIndex": 1
  },
  {
    "q": "When working on a collaborative group project, the ______ contributions of every team member are equally important.",
    "options": [
      "alone",
      "individual",
      "personal",
      "owner"
    ],
    "answer": 1,
    "cn": "在進行合作團隊專案時，每位團隊成員的個人貢獻都同樣重要。 【選項解析】(A) alone 單獨的  (B) personal 私人的  (C) individual 個人的  (D) owner 主人。個人貢獻為 individual contributions。",
    "vocabIndex": 2
  },
  {
    "q": "The proud ______ of the champion racehorse smiled happily as photographers took pictures of him holding the gold trophy.",
    "options": [
      "toothbrush",
      "haircut",
      "napkin",
      "owner"
    ],
    "answer": 3,
    "cn": "當攝影師給手捧金盃的冠軍賽馬主人拍照時，他露出了燦爛的笑容。 【選項解析】(A) owner 馬主/主人  (B) haircut 理髮  (C) napkin 餐巾  (D) toothbrush 牙刷。賽馬的所有者為 racehorse owner。",
    "vocabIndex": 3
  },
  {
    "q": "Which ______ of the morning newspaper do you usually read first: the international business news or the entertainment headlines?",
    "options": [
      "event",
      "part",
      "section",
      "toothbrush"
    ],
    "answer": 2,
    "cn": "你通常先閱讀早報的哪一個版塊：國際商業新聞還是娛樂頭條？ 【選項解析】(A) event 事件  (B) part 部分  (C) section 版塊/專區  (D) toothbrush 牙刷。報紙版面為 newspaper section。",
    "vocabIndex": 8
  }
];

const LOOKUP = {
  "alone": {
    "pos": "adj. / adv.",
    "en_def": "without other people; by yourself",
    "cn_def": "單獨的；獨自地",
    "combined": [
      {
        "pos": "adj. / adv.",
        "en_def": "without other people; by yourself",
        "cn_def": "單獨的；獨自地"
      }
    ]
  },
  "personal": {
    "pos": "adj.",
    "en_def": "belonging to or relating to a particular person",
    "cn_def": "個人的；私人的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "belonging to or relating to a particular person",
        "cn_def": "個人的；私人的"
      }
    ]
  },
  "individual": {
    "pos": "n. / adj.",
    "en_def": "a single person considered separately from a group; separate",
    "cn_def": "個人；個別的",
    "combined": [
      {
        "pos": "n. / adj.",
        "en_def": "a single person considered separately from a group; separate",
        "cn_def": "個人；個別的"
      }
    ]
  },
  "owner": {
    "pos": "n.",
    "en_def": "someone who possesses or legally owns something",
    "cn_def": "主人；業主；擁有人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "someone who possesses or legally owns something",
        "cn_def": "主人；業主；擁有人"
      }
    ]
  },
  "haircut": {
    "pos": "n.",
    "en_def": "the act of cutting the hair, or the style in which it is cut",
    "cn_def": "理髮；髮型",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of cutting the hair, or the style in which it is cut",
        "cn_def": "理髮；髮型"
      }
    ]
  },
  "toothbrush": {
    "pos": "n.",
    "en_def": "a small brush used for cleaning teeth",
    "cn_def": "牙刷",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small brush used for cleaning teeth",
        "cn_def": "牙刷"
      }
    ]
  },
  "napkin": {
    "pos": "n.",
    "en_def": "a piece of cloth or paper used at meals to wipe fingers or lips",
    "cn_def": "餐巾；餐巾紙",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of cloth or paper used at meals to wipe fingers or lips",
        "cn_def": "餐巾；餐巾紙"
      }
    ]
  },
  "part": {
    "pos": "n. / v.",
    "en_def": "some but not all of a thing; to separate",
    "cn_def": "部分；零件；分開",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "some but not all of a thing; to separate",
        "cn_def": "部分；零件；分開"
      }
    ]
  },
  "section": {
    "pos": "n.",
    "en_def": "one of the parts into which something is divided",
    "cn_def": "區塊；部門；專區",
    "combined": [
      {
        "pos": "n.",
        "en_def": "one of the parts into which something is divided",
        "cn_def": "區塊；部門；專區"
      }
    ]
  },
  "event": {
    "pos": "n.",
    "en_def": "an important happening or planned public occasion",
    "cn_def": "事件；大事；活動",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an important happening or planned public occasion",
        "cn_def": "事件；大事；活動"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
