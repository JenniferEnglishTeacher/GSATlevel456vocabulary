// Lesson 54 Quiz Data: Time Units, Academic Scheduling & Educational Subjects
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 54 - Time Units, Academic Scheduling & Educational Subjects",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "daily",
    "pos": "adj. / adv.",
    "cn_def": "每日的；日常的",
    "en_def": "done, produced, or occurring every day or every weekday",
    "sentence": "The city newspaper publishes a {{BLANK}} evening edition, providing commuters with the latest traffic and economic news.",
    "cn": "這家市立報社發行______晚報，為通勤族提供最新的交通與經濟新聞。"
  },
  {
    "word": "weekly",
    "pos": "adj. / adv.",
    "cn_def": "每週的；週報",
    "en_def": "done, produced, or occurring once every week",
    "sentence": "Our English teacher assigned a {{BLANK}} reading journal, and each student must summarize a storybook every Friday.",
    "cn": "我們的英語老師指派了一份______閱讀日誌，每位學生每週五都必須總結一本故事書。"
  },
  {
    "word": "weekday",
    "pos": "n.",
    "cn_def": "平日；工作日",
    "en_def": "any day of the week except Sunday and Saturday",
    "sentence": "The public library is usually very quiet on a {{BLANK}}, but on weekends it fills with noisy children and readers.",
    "cn": "公共圖書館在______通常非常安靜，但一到週末就擠滿了喧鬧的孩子和讀者。"
  },
  {
    "word": "monthly",
    "pos": "adj. / adv.",
    "cn_def": "每月的；月刊",
    "en_def": "done, produced, or occurring once every month",
    "sentence": "My family pays a fixed {{BLANK}} rent for our downtown apartment, which is due on the first day of each calendar month.",
    "cn": "我的家人為我們市中心的公寓支付固定的______租金，該租金在每個曆月的第一天到期。"
  },
  {
    "word": "yearly",
    "pos": "adj. / adv.",
    "cn_def": "每年的；一年一度的",
    "en_def": "done, produced, or occurring once every year; annual",
    "sentence": "The international tech company holds its {{BLANK}} sales convention in Tokyo, inviting top regional branch managers.",
    "cn": "這家跨國科技公司在東京舉辦其______銷售大會，邀請各地的優秀分公司經理。"
  },
  {
    "word": "century",
    "pos": "n.",
    "cn_def": "世紀；一百年",
    "en_def": "a period of one hundred years",
    "sentence": "This majestic Gothic cathedral was built in the twelfth {{BLANK}}, and its stone towers have stood firm for hundreds of years.",
    "cn": "這座宏偉的哥德式大教堂建於十二______，其石塔數百年來一直屹立不搖。"
  },
  {
    "word": "midnight",
    "pos": "n.",
    "cn_def": "午夜；半夜十二點",
    "en_def": "twelve o'clock in the middle of the night",
    "sentence": "The diligent university student stayed up until {{BLANK}} studying chemistry, but she still woke up early the next morning.",
    "cn": "那位勤奮的大學生熬夜研讀化學直到______，但第二天早晨她依然很早就醒來了。"
  },
  {
    "word": "dawn",
    "pos": "n. / v.",
    "cn_def": "黎明；拂曉；破曉",
    "en_def": "the first appearance of light in the sky before sunrise",
    "sentence": "Fishermen launched their wooden boats into the bay at {{BLANK}}, hoping to catch fresh tuna before the morning sun rose high.",
    "cn": "漁民們在______將木船駛入海灣，希望能趕在清晨太陽升起之前捕獲新鮮的鮪魚。"
  },
  {
    "word": "course",
    "pos": "n.",
    "cn_def": "課程；路線；進程",
    "en_def": "a series of lessons or lectures; path or trajectory",
    "sentence": "Mary enrolled in an intensive conversation {{BLANK}} this winter, and her spoken English improved significantly in eight weeks.",
    "cn": "瑪麗今年冬天報名了一門密集會話______，她的英語口說能力在八週內有了顯著進步。"
  },
  {
    "word": "subject",
    "pos": "n.",
    "cn_def": "學科；科目；主題",
    "en_def": "a branch of knowledge studied in a school or college; topic",
    "sentence": "Mathematics is my brother's favorite academic {{BLANK}}, because he loves solving challenging number puzzles and geometry problems.",
    "cn": "數學是我弟弟最喜歡的學術______，因為他熱愛解答具有挑戰性的數字謎題和幾何題目。"
  }
];

const MCQS = [
  {
    "q": "Brushing your teeth twice a day should be part of your ______ hygiene routine to keep your teeth healthy.",
    "options": [
      "yearly",
      "monthly",
      "daily",
      "weekly"
    ],
    "answer": 2,
    "cn": "每天刷牙兩次應該成為你日常衛生習慣的一部分，以保持牙齒健康。 【選項解析】(A) daily 每日的 (B) monthly 每月的 (C) yearly 每年的 (D) weekly 每週的。每天刷牙為 daily routine。",
    "vocabIndex": 0
  },
  {
    "q": "The popular cooking magazine is released on a ______ basis, arriving in mailboxes every Tuesday afternoon.",
    "options": [
      "yearly",
      "weekly",
      "daily",
      "monthly"
    ],
    "answer": 1,
    "cn": "這本受歡迎的烹飪雜誌每週發行一次，每週二下午寄送到住家信箱。 【選項解析】(A) yearly 每年的 (B) weekly 每週的 (C) daily 每日的 (D) monthly 每月的。週二送達為 weekly basis。",
    "vocabIndex": 1
  },
  {
    "q": "Highway traffic is extremely congested during morning rush hour on every ______, but roads are quiet on Sunday.",
    "options": [
      "century",
      "dawn",
      "midnight",
      "weekday"
    ],
    "answer": 3,
    "cn": "每個工作日的早晨尖峰時段高速公路交通都極度壅塞，但週日路上很安靜。 【選項解析】(A) century 世紀 (B) weekday 平日 (C) midnight 午夜 (D) dawn 黎明。與週日對比為 weekday。",
    "vocabIndex": 2
  },
  {
    "q": "Many workers receive a ______ salary at the end of the month, which allows them to budget for rent and groceries.",
    "options": [
      "monthly",
      "daily",
      "weekly",
      "yearly"
    ],
    "answer": 0,
    "cn": "許多上班族在月底領取每月薪水，這讓他們能妥善規劃房租與伙食預算。 【選項解析】(A) weekly 每週的 (B) daily 每日的 (C) monthly 每月的 (D) yearly 每年的。月底領薪為 monthly salary。",
    "vocabIndex": 3
  },
  {
    "q": "The school holds a ______ sports day every autumn, where classes compete against each other in track and field.",
    "options": [
      "weekly",
      "monthly",
      "daily",
      "yearly"
    ],
    "answer": 3,
    "cn": "學校每年秋天都會舉辦一年一度的運動會，各班級在田徑項目上一較高下。 【選項解析】(A) yearly 每年的 (B) monthly 每月的 (C) daily 每日的 (D) weekly 每週的。秋季舉辦為 yearly sports day。",
    "vocabIndex": 4
  },
  {
    "q": "Great advancements in medical science occurred during the twentieth ______, dramatically extending human life expectancy.",
    "options": [
      "dawn",
      "century",
      "midnight",
      "weekday"
    ],
    "answer": 1,
    "cn": "二十世紀醫學領域取得了巨大的進步，顯著延長了人類的預期壽命。 【選項解析】(A) dawn 黎明 (B) midnight 午夜 (C) century 世紀 (D) weekday 工作日。二十世紀為 twentieth century。",
    "vocabIndex": 5
  },
  {
    "q": "The Cinderella fairytale tells the story of a girl whose carriage turned back into a pumpkin at ______.",
    "options": [
      "dawn",
      "weekday",
      "midnight",
      "century"
    ],
    "answer": 2,
    "cn": "灰姑娘的童話故事講述了一個女孩的馬車在午夜變回南瓜的故事。 【選項解析】(A) dawn 黎明 (B) weekday 平日 (C) midnight 午夜 (D) century 世紀。童話中十二點變回南瓜為 midnight。",
    "vocabIndex": 6
  },
  {
    "q": "The roosters began crowing loudly just before ______, signaling that the sun was about to rise over the eastern hills.",
    "options": [
      "dawn",
      "midnight",
      "century",
      "weekday"
    ],
    "answer": 0,
    "cn": "公雞就在黎明前大聲啼叫，示意著太陽即將從東邊的山頭升起。 【選項解析】(A) midnight 午夜 (B) dawn 黎明 (C) century 世紀 (D) weekday 工作日。日出前為 dawn。",
    "vocabIndex": 7
  },
  {
    "q": "Our university professor designed a new elective ______ covering the history of international relations in Asia.",
    "options": [
      "century",
      "course",
      "dawn",
      "midnight"
    ],
    "answer": 1,
    "cn": "我們的大學教授設計了一門新的選修課程，涵蓋亞洲國際關係史。 【選項解析】(A) course 課程 (B) century 世紀 (C) dawn 黎明 (D) midnight 午夜。選修課為 elective course。",
    "vocabIndex": 8
  },
  {
    "q": "History has always been David's strongest school ______, and he consistently earns top grades on every exam.",
    "options": [
      "course",
      "century",
      "subject",
      "weekday"
    ],
    "answer": 2,
    "cn": "歷史一直是戴維最強的學校學科，他每次考試都持續取得最高分。 【選項解析】(A) course 課程 (B) subject 科目 (C) century 世紀 (D) weekday 平日。school subject 指學校學科。",
    "vocabIndex": 9
  },
  {
    "q": "Drinking sufficient water and taking a brisk walk are healthy ______ habits that will boost your energy levels.",
    "options": [
      "daily",
      "weekly",
      "monthly",
      "yearly"
    ],
    "answer": 0,
    "cn": "多喝水和快步走是健康的日常習慣，能夠提升你的精神活力。 【選項解析】(A) weekly 每週的 (B) daily 每日的 (C) monthly 每月的 (D) yearly 每年的。日常習慣為 daily habits。",
    "vocabIndex": 0
  },
  {
    "q": "The local community center publishes a ______ newsletter detailing upcoming weekend activities and volunteer opportunities.",
    "options": [
      "monthly",
      "daily",
      "yearly",
      "weekly"
    ],
    "answer": 3,
    "cn": "當地社區中心發行了一份每週通訊，詳細介紹即將到來的週末活動與志工機會。 【選項解析】(A) weekly 每週的 (B) daily 每日的 (C) yearly 每年的 (D) monthly 每月的。介紹週末活動的週刊為 weekly newsletter。",
    "vocabIndex": 1
  },
  {
    "q": "The bank is open for customer transactions from nine to five on every ______, but closed on public holidays.",
    "options": [
      "weekday",
      "dawn",
      "midnight",
      "century"
    ],
    "answer": 0,
    "cn": "銀行在每個平日的上午九點至下午五點對外營業，但國定假日休息。 【選項解析】(A) midnight 午夜 (B) dawn 黎明 (C) weekday 平日 (D) century 世紀。工作日營業為 on every weekday。",
    "vocabIndex": 2
  },
  {
    "q": "Our landlord asked us to transfer the ______ apartment maintenance fee directly to his bank account every month.",
    "options": [
      "daily",
      "weekly",
      "monthly",
      "yearly"
    ],
    "answer": 2,
    "cn": "房東要求我們每個月將每月的公寓管理費直接轉帳到他的銀行帳戶。 【選項解析】(A) daily 每日的 (B) weekly 每週的 (C) yearly 每年的 (D) monthly 每月的。每月管理費為 monthly fee。",
    "vocabIndex": 3
  },
  {
    "q": "Shareholders gathered at the corporate headquarters for the ______ general meeting to review financial performance.",
    "options": [
      "weekly",
      "daily",
      "monthly",
      "yearly"
    ],
    "answer": 3,
    "cn": "股東們聚集在公司總部參加年度股東大會，檢討財務營運表現。 【選項解析】(A) yearly 年度的 (B) daily 每日的 (C) monthly 每月的 (D) weekly 每週的。年度大會為 yearly general meeting。",
    "vocabIndex": 4
  },
  {
    "q": "Shakespeare wrote his famous tragedies during the late sixteenth and early seventeenth ______ in England.",
    "options": [
      "dawn",
      "century",
      "midnight",
      "weekday"
    ],
    "answer": 1,
    "cn": "莎士比亞於十六世紀末至十七世紀初在英格蘭創作了他的著名悲劇。 【選項解析】(A) dawn 黎明 (B) century 世紀 (C) midnight 午夜 (D) weekday 平日。十六、十七世紀為 century。",
    "vocabIndex": 5
  },
  {
    "q": "Loud fireworks lit up the dark sky exactly at ______ to welcome the beginning of the New Year.",
    "options": [
      "midnight",
      "dawn",
      "weekday",
      "century"
    ],
    "answer": 0,
    "cn": "響亮的煙火在午夜整點點亮了漆黑的夜空，迎接新年的到來。 【選項解析】(A) midnight 午夜 (B) dawn 黎明 (C) weekday 平日 (D) century 世紀。跨年倒數整點為 at midnight。",
    "vocabIndex": 6
  },
  {
    "q": "Hiking groups usually start climbing mountain peaks before ______ so that they can witness the sunrise from the summit.",
    "options": [
      "midnight",
      "dawn",
      "century",
      "weekday"
    ],
    "answer": 1,
    "cn": "登山隊通常在拂曉前開始攀登高峰，這樣他們才能在山頂見證日出。 【選項解析】(A) midnight 午夜 (B) century 世紀 (C) dawn 黎明 (D) weekday 工作日。日出破曉為 dawn。",
    "vocabIndex": 7
  },
  {
    "q": "Before you can obtain a valid driver's license, you must complete a formal traffic safety ______ at driving school.",
    "options": [
      "dawn",
      "subject",
      "century",
      "course"
    ],
    "answer": 3,
    "cn": "在取得正式駕照之前，你必須在駕訓班完成一門正式的交通安全課程。 【選項解析】(A) course 課程 (B) subject 科目 (C) century 世紀 (D) dawn 黎明。安全講習課程為 safety course。",
    "vocabIndex": 8
  },
  {
    "q": "Physics is considered a difficult science ______ by many students because it requires both abstract thinking and calculus.",
    "options": [
      "course",
      "midnight",
      "subject",
      "weekday"
    ],
    "answer": 2,
    "cn": "物理被許多學生認為是一門困難的科學學科，因為它需要抽象思維和微積分運算。 【選項解析】(A) course 課程 (B) subject 學科 (C) midnight 午夜 (D) weekday 平日。科學領域科目為 science subject。",
    "vocabIndex": 9
  },
  {
    "q": "Eating fresh green salad can be part of your ______ lunch to ensure you get sufficient fiber and vitamins.",
    "options": [
      "yearly",
      "daily",
      "weekly",
      "monthly"
    ],
    "answer": 1,
    "cn": "吃新鮮綠色沙拉可以成為你每日午餐的一部分，確保你攝取足夠的纖維與維生素。 【選項解析】(A) yearly 每年的 (B) daily 每日的 (C) weekly 每週的 (D) monthly 每月的。每天午餐為 daily lunch。",
    "vocabIndex": 0
  },
  {
    "q": "The supermarket chain offers special ______ discounts on dairy products, changing the sale items every Thursday.",
    "options": [
      "weekly",
      "yearly",
      "daily",
      "monthly"
    ],
    "answer": 0,
    "cn": "這家連鎖超市提供乳製品的每週特價，每週四更換促銷商品品項。 【選項解析】(A) weekly 每週的 (B) yearly 每年的 (C) daily 每日的 (D) monthly 每月的。每週優惠為 weekly discounts。",
    "vocabIndex": 1
  },
  {
    "q": "Parking fees in the downtown commercial district are higher on a ______ than during the quiet weekend.",
    "options": [
      "century",
      "midnight",
      "weekday",
      "dawn"
    ],
    "answer": 2,
    "cn": "市中心商業區工作日的停車費比清閒的週末還要昂貴。 【選項解析】(A) century 世紀 (B) midnight 午夜 (C) weekday 工作日 (D) dawn 黎明。工作日為 on a weekday。",
    "vocabIndex": 2
  },
  {
    "q": "The mobile telephone company sends a detailed ______ invoice listing all long-distance calls and data usage.",
    "options": [
      "weekly",
      "yearly",
      "daily",
      "monthly"
    ],
    "answer": 3,
    "cn": "行動電話公司發送了一份詳細的每月帳單，列出所有長途電話與網路傳輸量。 【選項解析】(A) monthly 每月的 (B) yearly 每年的 (C) daily 每日的 (D) weekly 每週的。電信帳單為 monthly invoice。",
    "vocabIndex": 3
  },
  {
    "q": "In biology class, our teacher introduced the interesting ______ of marine ecosystems and coral reef conservation.",
    "options": [
      "course",
      "subject",
      "century",
      "dawn"
    ],
    "answer": 1,
    "cn": "在生物課上，我們的老師介紹了海洋生態系統與珊瑚礁保育的有趣主題。 【選項解析】(A) course 課程 (B) subject 主題 (C) century 世紀 (D) dawn 黎明。探討主題為 subject of marine ecosystems。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "daily": {
    "pos": "adj. / adv.",
    "en_def": "done, produced, or occurring every day or every weekday",
    "cn_def": "每日的；日常的",
    "combined": [
      {
        "pos": "adj. / adv.",
        "en_def": "done, produced, or occurring every day or every weekday",
        "cn_def": "每日的；日常的"
      }
    ]
  },
  "weekly": {
    "pos": "adj. / adv.",
    "en_def": "done, produced, or occurring once every week",
    "cn_def": "每週的；週報",
    "combined": [
      {
        "pos": "adj. / adv.",
        "en_def": "done, produced, or occurring once every week",
        "cn_def": "每週的；週報"
      }
    ]
  },
  "weekday": {
    "pos": "n.",
    "en_def": "any day of the week except Sunday and Saturday",
    "cn_def": "平日；工作日",
    "combined": [
      {
        "pos": "n.",
        "en_def": "any day of the week except Sunday and Saturday",
        "cn_def": "平日；工作日"
      }
    ]
  },
  "monthly": {
    "pos": "adj. / adv.",
    "en_def": "done, produced, or occurring once every month",
    "cn_def": "每月的；月刊",
    "combined": [
      {
        "pos": "adj. / adv.",
        "en_def": "done, produced, or occurring once every month",
        "cn_def": "每月的；月刊"
      }
    ]
  },
  "yearly": {
    "pos": "adj. / adv.",
    "en_def": "done, produced, or occurring once every year; annual",
    "cn_def": "每年的；一年一度的",
    "combined": [
      {
        "pos": "adj. / adv.",
        "en_def": "done, produced, or occurring once every year; annual",
        "cn_def": "每年的；一年一度的"
      }
    ]
  },
  "century": {
    "pos": "n.",
    "en_def": "a period of one hundred years",
    "cn_def": "世紀；一百年",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a period of one hundred years",
        "cn_def": "世紀；一百年"
      }
    ]
  },
  "midnight": {
    "pos": "n.",
    "en_def": "twelve o'clock in the middle of the night",
    "cn_def": "午夜；半夜十二點",
    "combined": [
      {
        "pos": "n.",
        "en_def": "twelve o'clock in the middle of the night",
        "cn_def": "午夜；半夜十二點"
      }
    ]
  },
  "dawn": {
    "pos": "n. / v.",
    "en_def": "the first appearance of light in the sky before sunrise",
    "cn_def": "黎明；拂曉；破曉",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "the first appearance of light in the sky before sunrise",
        "cn_def": "黎明；拂曉；破曉"
      }
    ]
  },
  "course": {
    "pos": "n.",
    "en_def": "a series of lessons or lectures; path or trajectory",
    "cn_def": "課程；路線；進程",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a series of lessons or lectures; path or trajectory",
        "cn_def": "課程；路線；進程"
      }
    ]
  },
  "subject": {
    "pos": "n.",
    "en_def": "a branch of knowledge studied in a school or college; topic",
    "cn_def": "學科；科目；主題",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a branch of knowledge studied in a school or college; topic",
        "cn_def": "學科；科目；主題"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
