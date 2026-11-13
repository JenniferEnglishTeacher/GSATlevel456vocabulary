// Lesson 58 Quiz Data: Early Childhood Education, Exams, Playground Equipment & Scoring
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 58 - Early Childhood Education, Exams, Playground Equipment & Scoring",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "instance",
    "pos": "n.",
    "cn_def": "例子；實例",
    "en_def": "an example or single occurrence of something",
    "sentence": "The science teacher cited several clear {{BLANK}}ss of global warming melting polar ice sheets, convincing the entire class.",
    "cn": "自然老師舉出了全球暖化融化極地冰原的幾個明確______，使全班同學心服口服。"
  },
  {
    "word": "quiz",
    "pos": "n. / v.",
    "cn_def": "隨堂測驗；小考",
    "en_def": "a quick or informal test of knowledge or comprehension; to test",
    "sentence": "Our geography teacher gave us an unannounced pop {{BLANK}} on world capitals, but most students answered all questions correctly.",
    "cn": "我們的地理老師對世界各國首都進行了一次突擊隨堂______，但大多數學生都正確回答了所有問題。"
  },
  {
    "word": "exam",
    "pos": "n.",
    "cn_def": "考試；測驗",
    "en_def": "a formal test of a person's knowledge or proficiency in a subject",
    "sentence": "University students spent two weeks in the quiet library preparing for their final chemistry {{BLANK}}, studying late into the night.",
    "cn": "大學生們在安靜的圖書館度過了兩週時間，準備期末化學______，每天都讀書研習到深夜。"
  },
  {
    "word": "score",
    "pos": "n. / v.",
    "cn_def": "分數；得分；成績",
    "en_def": "the number of points, goals, or runs achieved in a game; to gain points",
    "sentence": "Kevin achieved a perfect {{BLANK}} on his mathematics midterm, earning praise from both his proud parents and his teacher.",
    "cn": "凱文在數學期中考中獲得了滿分______，贏得了自豪的父母和老師的一致讚揚。"
  },
  {
    "word": "record",
    "pos": "n. / v.",
    "cn_def": "紀錄；記錄；唱片",
    "en_def": "the best performance achieved; an account kept in writing; audio",
    "sentence": "The Jamaican sprinter broke the world 100-meter running {{BLANK}} yesterday, crossing the finish line in under ten seconds.",
    "cn": "牙買加短跑選手昨天打破了世界百公尺賽跑______，在十秒以內衝過了終點線。"
  },
  {
    "word": "kindergarten",
    "pos": "n.",
    "cn_def": "幼兒園",
    "en_def": "a school or class for young children, usually aged five to six",
    "sentence": "The excited five-year-old boy carried his colorful lunchbox into {{BLANK}} this morning, meeting his new classmates cheerfully.",
    "cn": "興奮的五歲小男孩今天早上帶著色彩繽紛的便當盒走進______，開心地與新同學們見面。"
  },
  {
    "word": "seesaw",
    "pos": "n.",
    "cn_def": "翹翹板",
    "en_def": "a long wooden plank balanced on a central point for children to play on",
    "sentence": "Two happy little girls sat on opposite ends of the park {{BLANK}}, giggling loudly as they pushed themselves up and down.",
    "cn": "兩個快樂的小女孩坐在公園______的兩端，一邊上下擺動一邊大聲咯咯笑著。"
  },
  {
    "word": "swing",
    "pos": "n. / v.",
    "cn_def": "鞦韆；擺動",
    "en_def": "a seat suspended by ropes or chains for swinging back and forth",
    "sentence": "Children rushed toward the playground {{BLANK}} as soon as the afternoon school bell rang, eager to soar high into the air.",
    "cn": "下午放學鐘聲一響，孩子們便奔向操場上的______，渴望高高盪向空中。"
  },
  {
    "word": "balloon",
    "pos": "n.",
    "cn_def": "氣球",
    "en_def": "a small rubber bag filled with air or helium, used as a child's toy",
    "sentence": "The birthday clown handed each cheerful child a colorful helium {{BLANK}} shaped like a funny cartoon animal.",
    "cn": "生日派對上的小丑遞給每個開心的小孩一個形狀像搞笑卡通動物的彩色氦氣______。"
  },
  {
    "word": "education",
    "pos": "n.",
    "cn_def": "教育",
    "en_def": "the process of receiving or giving systematic instruction, especially at school",
    "sentence": "The government invested millions of tax dollars into public {{BLANK}}, ensuring that every rural school has modern computers.",
    "cn": "政府在公共______方面投入了數百萬稅收，確保每所偏鄉學校都能擁有現代化的電腦。"
  }
];

const MCQS = [
  {
    "q": "For ______, eating excessive amounts of fast food can easily lead to serious long-term cardiovascular health issues.",
    "options": [
      "exam",
      "instance",
      "quiz",
      "score"
    ],
    "answer": 1,
    "cn": "例如，食用過量的速食很容易引發嚴重的長期心血管健康問題。 【選項解析】(A) instance 例子 (B) exam 考試 (C) quiz 小考 (D) score 分數。for instance 為固定片語「例如」。",
    "vocabIndex": 0
  },
  {
    "q": "Every Friday afternoon, our English teacher gives us a short vocabulary ______ to review spelling and word definitions.",
    "options": [
      "record",
      "seesaw",
      "education",
      "quiz"
    ],
    "answer": 3,
    "cn": "每週五下午，我們的英文老師都會給我們做一次簡短的單字小考，以複習拼字與字義。 【選項解析】(A) record 紀錄 (B) quiz 小考 (C) education 教育 (D) seesaw 翹翹板。短測驗為 short vocabulary quiz。",
    "vocabIndex": 1
  },
  {
    "q": "High school seniors must study diligently every weekend if they want to pass the rigorous national college entrance ______.",
    "options": [
      "seesaw",
      "balloon",
      "exam",
      "swing"
    ],
    "answer": 2,
    "cn": "高中三年級學生若想通過嚴格的全國大學入學測驗，每個週末都必須勤勉讀書。 【選項解析】(A) exam 考試 (B) balloon 氣球 (C) seesaw 翹翹板 (D) swing 鞦韆。升學大考為 college entrance exam。",
    "vocabIndex": 2
  },
  {
    "q": "The soccer match ended with an exciting final ______ of three to two, delighting the passionate hometown supporters.",
    "options": [
      "score",
      "swing",
      "balloon",
      "kindergarten"
    ],
    "answer": 0,
    "cn": "足球比賽以三比二的刺激終場比分結束，讓主場熱情的支持者們欣喜若狂。 【選項解析】(A) swing 鞦韆 (B) score 比分 (C) balloon 氣球 (D) kindergarten 幼兒園。最終比分為 final score。",
    "vocabIndex": 3
  },
  {
    "q": "The hospital maintains a complete medical ______ of each patient's allergy history and previous surgical procedures.",
    "options": [
      "balloon",
      "record",
      "seesaw",
      "swing"
    ],
    "answer": 1,
    "cn": "醫院保存每位病患過敏史與先前手術程序的完整醫療紀錄。 【選項解析】(A) balloon 氣球 (B) seesaw 翹翹板 (C) record 紀錄 (D) swing 鞦韆。病歷紀錄為 medical record。",
    "vocabIndex": 4
  },
  {
    "q": "Children learn basic social interaction and creative finger-painting while attending morning classes at ______.",
    "options": [
      "kindergarten",
      "score",
      "quiz",
      "exam"
    ],
    "answer": 0,
    "cn": "孩子們在幼兒園上晨間課程時，學習基本的人際社交互動與創意手指畫。 【選項解析】(A) exam 考試 (B) score 分數 (C) quiz 小考 (D) kindergarten 幼兒園。學齡前幼兒園為 kindergarten。",
    "vocabIndex": 5
  },
  {
    "q": "The brother and sister sat at opposite sides of the wooden ______ and took turns pushing their feet off the ground.",
    "options": [
      "exam",
      "balloon",
      "score",
      "seesaw"
    ],
    "answer": 3,
    "cn": "兄妹倆分別坐在木質翹翹板的兩端，輪流用雙腳蹬地上下起伏。 【選項解析】(A) seesaw 翹翹板 (B) balloon 氣球 (C) score 得分 (D) exam 考試。坐在兩端上下擺動為 seesaw。",
    "vocabIndex": 6
  },
  {
    "q": "The little boy laughed with joy as his older sister pushed him higher and higher on the park ______.",
    "options": [
      "exam",
      "score",
      "swing",
      "record"
    ],
    "answer": 2,
    "cn": "當姊姊在公園鞦韆上把小男孩推得越來越高時，他開心地大笑起來。 【選項解析】(A) exam 考試 (B) swing 鞦韆 (C) score 得分 (D) record 紀錄。推盪得更高是在 swing。",
    "vocabIndex": 7
  },
  {
    "q": "The little girl cried when her red helium ______ slipped from her tiny fingers and floated high up into the clouds.",
    "options": [
      "record",
      "exam",
      "score",
      "balloon"
    ],
    "answer": 3,
    "cn": "當紅色氦氣球從小女孩小小的手指間滑脫並高高飄入雲霄時，她哭了起來。 【選項解析】(A) record 紀錄 (B) exam 考試 (C) balloon 氣球 (D) score 分數。飄上天空的玩具為 helium balloon。",
    "vocabIndex": 8
  },
  {
    "q": "Providing high-quality free public ______ to all citizens is considered an essential duty of modern democratic governments.",
    "options": [
      "education",
      "seesaw",
      "swing",
      "balloon"
    ],
    "answer": 0,
    "cn": "向所有公民提供優質的免費公共教育，被視為現代民主政府的基本職責。 【選項解析】(A) education 教育 (B) seesaw 翹翹板 (C) swing 鞦韆 (D) balloon 氣球。國民義務教育為 public education。",
    "vocabIndex": 9
  },
  {
    "q": "Can you give me a specific ______ where following your proposed business plan actually produced a financial profit?",
    "options": [
      "score",
      "exam",
      "instance",
      "balloon"
    ],
    "answer": 2,
    "cn": "你能給我一個具體的例子，說明採納你提議的商業計畫確實帶來了財務利潤嗎？ 【選項解析】(A) score 分數 (B) exam 考試 (C) instance 實例 (D) balloon 氣球。具體例子為 specific instance。",
    "vocabIndex": 0
  },
  {
    "q": "Students who failed the pop ______ were required to write out the misspelled vocabulary words ten times each.",
    "options": [
      "seesaw",
      "quiz",
      "record",
      "education"
    ],
    "answer": 1,
    "cn": "突擊小考不及格的學生被罰將拼錯的單字每個抄寫十遍。 【選項解析】(A) quiz 小考 (B) seesaw 翹翹板 (C) record 紀錄 (D) education 教育。突擊測驗為 pop quiz。",
    "vocabIndex": 1
  },
  {
    "q": "Before receiving his medical license, the young doctor had to pass a comprehensive four-hour written ______.",
    "options": [
      "swing",
      "balloon",
      "exam",
      "seesaw"
    ],
    "answer": 2,
    "cn": "在取得醫師執照之前，這位年輕醫生必須通過長達四小時的綜合筆試考試。 【選項解析】(A) swing 鞦韆 (B) balloon 氣球 (C) exam 考試 (D) seesaw 翹翹板。執照筆試為 written exam。",
    "vocabIndex": 2
  },
  {
    "q": "Despite missing the first basket, the basketball player managed to ______ twenty-five points in the second half.",
    "options": [
      "exam",
      "balloon",
      "swing",
      "score"
    ],
    "answer": 3,
    "cn": "儘管投丟了第一球，這位籃球選手還是在下半場成功獲得了二十五分。 【選項解析】(A) exam 考試 (B) score 得分 (C) swing 擺動 (D) balloon 氣球。比賽得二十五分為 score twenty-five points。",
    "vocabIndex": 3
  },
  {
    "q": "The athlete set a new Olympic ______ in the high jump, clearing the bar at an astounding height of two meters.",
    "options": [
      "record",
      "seesaw",
      "balloon",
      "swing"
    ],
    "answer": 0,
    "cn": "該運動員在跳高項目中創下了新的奧運紀錄，以兩公尺令人震驚的高度越過橫桿。 【選項解析】(A) seesaw 翹翹板 (B) record 紀錄 (C) balloon 氣球 (D) swing 鞦韆。締造奧運紀錄為 set a new Olympic record。",
    "vocabIndex": 4
  },
  {
    "q": "Young toddlers sing cheerful nursery rhymes and build wooden block castles throughout their fun day in ______.",
    "options": [
      "exam",
      "kindergarten",
      "score",
      "quiz"
    ],
    "answer": 1,
    "cn": "幼童在幼兒園歡樂的一天中，唱著歡快的童謠，並搭建積木城堡。 【選項解析】(A) kindergarten 幼兒園 (B) exam 考試 (C) score 分數 (D) quiz 小考。幼兒唱歌玩積木的場所為 kindergarten。",
    "vocabIndex": 5
  },
  {
    "q": "A playground ______ requires two children of comparable weight in order to balance and move up and down smoothly.",
    "options": [
      "exam",
      "balloon",
      "score",
      "seesaw"
    ],
    "answer": 3,
    "cn": "遊樂場上的翹翹板需要兩個體重相仿的孩子才能維持平衡並平穩上下起伏。 【選項解析】(A) exam 考試 (B) balloon 氣球 (C) seesaw 翹翹板 (D) score 分數。需兩人平衡玩耍為 playground seesaw。",
    "vocabIndex": 6
  },
  {
    "q": "During recess, there was always a long line of elementary school students waiting for their turn on the tire ______.",
    "options": [
      "exam",
      "record",
      "swing",
      "score"
    ],
    "answer": 2,
    "cn": "在下課休息時間，輪候玩輪胎鞦韆的小學生總是排成一條長長的隊伍。 【選項解析】(A) swing 鞦韆 (B) record 紀錄 (C) exam 考試 (D) score 分數。輪胎鞦韆為 tire swing。",
    "vocabIndex": 7
  },
  {
    "q": "Party planners decorated the banquet hall with hundreds of shiny silver and gold ______s for the anniversary ball.",
    "options": [
      "balloon",
      "exam",
      "score",
      "record"
    ],
    "answer": 0,
    "cn": "派對策劃人員用數百個閃亮的金銀氣球裝飾了宴會廳，以迎接週年舞會的到來。 【選項解析】(A) records 紀錄 (B) exams 考試 (C) scores 分數 (D) balloons 氣球。裝飾宴會用 balloons。",
    "vocabIndex": 8
  },
  {
    "q": "Higher ______ equips young adults with critical thinking skills and prepares them for competitive global employment markets.",
    "options": [
      "seesaw",
      "education",
      "swing",
      "balloon"
    ],
    "answer": 1,
    "cn": "高等教育賦予年輕人批判性思考能力，並使他們為競爭激烈的全球就業市場做好準備。 【選項解析】(A) education 教育 (B) seesaw 翹翹板 (C) swing 鞦韆 (D) balloon 氣球。高等教育為 higher education。",
    "vocabIndex": 9
  },
  {
    "q": "The researcher documented thirty ______s where the medication alleviated headaches within twenty minutes of ingestion.",
    "options": [
      "instances",
      "exams",
      "balloons",
      "swings"
    ],
    "answer": 0,
    "cn": "研究人員記錄了三十個案例，在這些案例中藥物在服用二十分鐘內緩解了頭痛。 【選項解析】(A) instances 案例 (B) exams 考試 (C) balloons 氣球 (D) swings 鞦韆。三十個實例為 thirty instances。",
    "vocabIndex": 0
  },
  {
    "q": "Tomorrow morning we have an online grammar ______ containing twenty multiple-choice questions on modal auxiliary verbs.",
    "options": [
      "seesaw",
      "education",
      "quiz",
      "record"
    ],
    "answer": 2,
    "cn": "明天早上我們有一場線上文法小測驗，包含二十題關於情態助動詞的選擇題。 【選項解析】(A) seesaw 翹翹板 (B) quiz 測驗 (C) education 教育 (D) record 紀錄。線上測驗為 online grammar quiz。",
    "vocabIndex": 1
  },
  {
    "q": "The university library remains open twenty-four hours a day during final ______ week to accommodate cramming students.",
    "options": [
      "swing",
      "exam",
      "balloon",
      "seesaw"
    ],
    "answer": 1,
    "cn": "在期末考試週期間，大學圖書館全天二十四小時開放，以方便臨時抱佛腳的學生讀書。 【選項解析】(A) swing 鞦韆 (B) exam 考試 (C) balloon 氣球 (D) seesaw 翹翹板。期末考週為 final exam week。",
    "vocabIndex": 2
  },
  {
    "q": "The gymnast earned a near-perfect ______ on the uneven bars after executing a flawless dismount onto the mat.",
    "options": [
      "record",
      "swing",
      "balloon",
      "score"
    ],
    "answer": 3,
    "cn": "體操選手在高低槓項目中完成近乎完美的落地後，獲得了接近滿分的分數。 【選項解析】(A) score 分數 (B) swing 擺動 (C) balloon 氣球 (D) record 紀錄。獲得高分為 earned a near-perfect score。",
    "vocabIndex": 3
  },
  {
    "q": "The medical clinic keeps an electronic health ______ for every neighborhood resident who has received seasonal flu shots.",
    "options": [
      "seesaw",
      "balloon",
      "record",
      "swing"
    ],
    "answer": 2,
    "cn": "醫療診所為每位接種過季節性流感疫苗的社區居民保存著電子健康檔案紀錄。 【選項解析】(A) seesaw 翹翹板 (B) balloon 氣球 (C) record 紀錄 (D) swing 鞦韆。電子健康紀錄為 electronic health record。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "instance": {
    "pos": "n.",
    "en_def": "an example or single occurrence of something",
    "cn_def": "例子；實例",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an example or single occurrence of something",
        "cn_def": "例子；實例"
      }
    ]
  },
  "quiz": {
    "pos": "n. / v.",
    "en_def": "a quick or informal test of knowledge or comprehension; to test",
    "cn_def": "隨堂測驗；小考",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a quick or informal test of knowledge or comprehension; to test",
        "cn_def": "隨堂測驗；小考"
      }
    ]
  },
  "exam": {
    "pos": "n.",
    "en_def": "a formal test of a person's knowledge or proficiency in a subject",
    "cn_def": "考試；測驗",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a formal test of a person's knowledge or proficiency in a subject",
        "cn_def": "考試；測驗"
      }
    ]
  },
  "score": {
    "pos": "n. / v.",
    "en_def": "the number of points, goals, or runs achieved in a game; to gain points",
    "cn_def": "分數；得分；成績",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "the number of points, goals, or runs achieved in a game; to gain points",
        "cn_def": "分數；得分；成績"
      }
    ]
  },
  "record": {
    "pos": "n. / v.",
    "en_def": "the best performance achieved; an account kept in writing; audio",
    "cn_def": "紀錄；記錄；唱片",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "the best performance achieved; an account kept in writing; audio",
        "cn_def": "紀錄；記錄；唱片"
      }
    ]
  },
  "kindergarten": {
    "pos": "n.",
    "en_def": "a school or class for young children, usually aged five to six",
    "cn_def": "幼兒園",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a school or class for young children, usually aged five to six",
        "cn_def": "幼兒園"
      }
    ]
  },
  "seesaw": {
    "pos": "n.",
    "en_def": "a long wooden plank balanced on a central point for children to play on",
    "cn_def": "翹翹板",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a long wooden plank balanced on a central point for children to play on",
        "cn_def": "翹翹板"
      }
    ]
  },
  "swing": {
    "pos": "n. / v.",
    "en_def": "a seat suspended by ropes or chains for swinging back and forth",
    "cn_def": "鞦韆；擺動",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a seat suspended by ropes or chains for swinging back and forth",
        "cn_def": "鞦韆；擺動"
      }
    ]
  },
  "balloon": {
    "pos": "n.",
    "en_def": "a small rubber bag filled with air or helium, used as a child's toy",
    "cn_def": "氣球",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small rubber bag filled with air or helium, used as a child's toy",
        "cn_def": "氣球"
      }
    ]
  },
  "education": {
    "pos": "n.",
    "en_def": "the process of receiving or giving systematic instruction, especially at school",
    "cn_def": "教育",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the process of receiving or giving systematic instruction, especially at school",
        "cn_def": "教育"
      }
    ]
  },
  "instances": {
    "pos": "",
    "en_def": "",
    "cn_def": "案例",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "案例"
      }
    ]
  },
  "exams": {
    "pos": "",
    "en_def": "",
    "cn_def": "考試",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "考試"
      }
    ]
  },
  "balloons": {
    "pos": "",
    "en_def": "",
    "cn_def": "氣球",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "氣球"
      }
    ]
  },
  "swings": {
    "pos": "",
    "en_def": "",
    "cn_def": "鞦韆",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "鞦韆"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
