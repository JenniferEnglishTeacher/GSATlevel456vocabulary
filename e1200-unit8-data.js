// Unit 8 Quiz Data: Time 時間（第08區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U08 - Time",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "time",
    "pos": "n.",
    "cn_def": "時間",
    "en_def": "what we measure in minutes, hours, and days",
    "sentence": "Q: What time is it? — A: It's seven thirty. It's {{BLANK}} to go to school.",
    "cn": "現在幾點？ — 七點半，該去上學了。"
  },
  {
    "word": "clock",
    "pos": "n.",
    "cn_def": "時鐘",
    "en_def": "a thing on the wall or table that shows the time",
    "sentence": "Q: What time is it? — A: Look at the {{BLANK}} on the wall. It's five o'clock.",
    "cn": "現在幾點？ — 看牆上的時鐘，現在五點。"
  },
  {
    "word": "watch",
    "pos": "n.",
    "cn_def": "手錶",
    "en_def": "a small clock that you wear on your arm",
    "sentence": "Q: What time is it, Ben? — A: Let me look at my {{BLANK}}. It's four o'clock.",
    "cn": "班，現在幾點？ — 我看一下我的手錶，現在四點。"
  },
  {
    "word": "o'clock",
    "pos": "adv.",
    "cn_def": "……點鐘",
    "en_def": "a word used after a number to tell the hour",
    "sentence": "Q: What time is it now? — A: It's three {{BLANK}}. Let's go home.",
    "cn": "現在幾點？ — 三點整，我們回家吧。"
  },
  {
    "word": "half",
    "pos": "n.",
    "cn_def": "一半；半小時",
    "en_def": "one of two same-sized parts; thirty minutes",
    "sentence": "Q: What time is it now? — A: It's {{BLANK}} past six. Dinner is ready.",
    "cn": "現在幾點？ — 六點半，晚餐準備好了。"
  },
  {
    "word": "quarter",
    "pos": "n.",
    "cn_def": "十五分鐘；四分之一",
    "en_def": "one of four same-sized parts; fifteen minutes",
    "sentence": "Q: What time is it? — A: It's a {{BLANK}} past two. (2:15)",
    "cn": "現在幾點？ — 兩點十五分。"
  },
  {
    "word": "past",
    "pos": "prep.",
    "cn_def": "（時間）超過；過了",
    "en_def": "after (an hour), as in \"ten past eight\"",
    "sentence": "Q: What time is it? — A: It's ten {{BLANK}} eight. (8:10) We are late!",
    "cn": "現在幾點？ — 八點十分，我們遲到了！"
  },
  {
    "word": "a.m.",
    "pos": "abbr.",
    "cn_def": "上午（用在時間後）",
    "en_def": "in the morning, before twelve noon",
    "sentence": "Q: What time is it in Taipei now? — A: It's 7 {{BLANK}} People are going to work.",
    "cn": "台北現在幾點？ — 上午七點，人們正要去上班。"
  },
  {
    "word": "p.m.",
    "pos": "abbr.",
    "cn_def": "下午（用在時間後）",
    "en_def": "in the afternoon or at night, after twelve noon",
    "sentence": "Q: What time is it? — A: It's 4 {{BLANK}} School is over.",
    "cn": "現在幾點？ — 下午四點，放學了。"
  },
  {
    "word": "noon",
    "pos": "n.",
    "cn_def": "中午",
    "en_def": "twelve o'clock in the middle of the day",
    "sentence": "Q: What time is it? — A: It's twelve. It's {{BLANK}}. Let's have lunch.",
    "cn": "現在幾點？ — 十二點，中午了，我們吃午餐吧。"
  },
  {
    "word": "already",
    "pos": "adv.",
    "cn_def": "已經",
    "en_def": "before now; earlier than you thought",
    "sentence": "Q: What time is it? — A: It's {{BLANK}} ten o'clock! Go to bed now.",
    "cn": "現在幾點？ — 已經十點了！現在去睡覺。"
  },
  {
    "word": "hour",
    "pos": "n.",
    "cn_def": "小時",
    "en_def": "sixty minutes",
    "sentence": "Q: What time is it? — A: It's eleven. We have one {{BLANK}} before lunch.",
    "cn": "現在幾點？ — 十一點，午餐前我們還有一個小時。"
  },
  {
    "word": "minute (minutes)",
    "pos": "n.",
    "cn_def": "分鐘",
    "en_def": "sixty seconds",
    "sentence": "Q: What time is it? — A: It's 7:55. The bus comes in five {{BLANK}}.",
    "cn": "現在幾點？ — 七點五十五分，公車五分鐘後來。"
  },
  {
    "word": "second (seconds)",
    "pos": "n.",
    "cn_def": "秒",
    "en_def": "a very short time; sixty of them make one minute",
    "sentence": "Q: What time is it? — A: It's 11:59:50. Only ten {{BLANK}} to the new year!",
    "cn": "現在幾點？ — 十一點五十九分五十秒，再十秒就新年了！"
  },
  {
    "word": "moment",
    "pos": "n.",
    "cn_def": "片刻；一會兒",
    "en_def": "a very short time",
    "sentence": "Q: What time is it, Mom? — A: Wait a {{BLANK}}. I can't find my phone.",
    "cn": "媽，現在幾點？ — 等一下，我找不到我的手機。"
  },
  {
    "word": "Monday",
    "pos": "n.",
    "cn_def": "星期一",
    "en_def": "the day after Sunday",
    "sentence": "Q: What day is it today? — A: It's {{BLANK}}. A new week starts today.",
    "cn": "今天星期幾？ — 今天星期一，新的一週從今天開始。"
  },
  {
    "word": "Wednesday",
    "pos": "n.",
    "cn_def": "星期三",
    "en_def": "the day after Tuesday",
    "sentence": "Q: What day is it today? — A: It's {{BLANK}}. It's the middle of the week.",
    "cn": "今天星期幾？ — 今天星期三，是一週的中間。"
  },
  {
    "word": "today",
    "pos": "n.",
    "cn_def": "今天",
    "en_def": "this day",
    "sentence": "Q: What day is it today? — A: {{BLANK}} is Friday. We have a test.",
    "cn": "今天星期幾？ — 今天星期五，我們有考試。"
  },
  {
    "word": "tomorrow",
    "pos": "n.",
    "cn_def": "明天",
    "en_def": "the day after today",
    "sentence": "Q: What day is it today? — A: It's Friday. {{BLANK}} is Saturday. No school!",
    "cn": "今天星期幾？ — 今天星期五，明天星期六，不用上學！"
  },
  {
    "word": "yesterday",
    "pos": "n.",
    "cn_def": "昨天",
    "en_def": "the day before today",
    "sentence": "Q: What day is it today? — A: It's Monday. {{BLANK}} was Sunday.",
    "cn": "今天星期幾？ — 今天星期一，昨天是星期日。"
  },
  {
    "word": "day",
    "pos": "n.",
    "cn_def": "日子；天",
    "en_def": "twenty-four hours; the time when it is light",
    "sentence": "Q: What day is it today? — A: It's Sunday. It's my favorite {{BLANK}} of the week.",
    "cn": "今天星期幾？ — 今天星期日，這是我一週中最喜歡的一天。"
  },
  {
    "word": "week",
    "pos": "n.",
    "cn_def": "星期；週",
    "en_def": "seven days",
    "sentence": "Q: What day is it today? — A: It's Sunday. It's the first day of the {{BLANK}}.",
    "cn": "今天星期幾？ — 今天星期日，是一週的第一天。"
  },
  {
    "word": "January",
    "pos": "n.",
    "cn_def": "一月",
    "en_def": "the first month of the year",
    "sentence": "Q: When is New Year's Day? — A: It's on {{BLANK}} 1st.",
    "cn": "元旦是什麼時候？ — 在一月一日。"
  },
  {
    "word": "February",
    "pos": "n.",
    "cn_def": "二月",
    "en_def": "the second month of the year",
    "sentence": "Q: When is Valentine's Day? — A: It's on {{BLANK}} 14th.",
    "cn": "情人節是什麼時候？ — 在二月十四日。"
  },
  {
    "word": "March",
    "pos": "n.",
    "cn_def": "三月",
    "en_def": "the third month of the year",
    "sentence": "Q: When is your sister's sixteenth birthday? — A: It's in {{BLANK}}. She wants a big cake.",
    "cn": "你姊姊的十六歲生日是什麼時候？ — 在三月，她想要一個大蛋糕。"
  },
  {
    "word": "April",
    "pos": "n.",
    "cn_def": "四月",
    "en_def": "the fourth month of the year",
    "sentence": "Q: When is Children's Day in Taiwan? — A: It's on {{BLANK}} 4th.",
    "cn": "台灣的兒童節是什麼時候？ — 在四月四日。"
  },
  {
    "word": "May",
    "pos": "n.",
    "cn_def": "五月",
    "en_def": "the fifth month of the year",
    "sentence": "Q: When is Mother's Day? — A: It's on the second Sunday in {{BLANK}}.",
    "cn": "母親節是什麼時候？ — 在五月的第二個星期日。"
  },
  {
    "word": "June",
    "pos": "n.",
    "cn_def": "六月",
    "en_def": "the sixth month of the year",
    "sentence": "Q: When is the Dragon Boat Festival this year? — A: It's in {{BLANK}}. We eat rice dumplings.",
    "cn": "今年端午節是什麼時候？ — 在六月，我們吃粽子。"
  },
  {
    "word": "July",
    "pos": "n.",
    "cn_def": "七月",
    "en_def": "the seventh month of the year",
    "sentence": "Q: When is your thirteenth birthday? — A: It's in {{BLANK}}, in the summer vacation.",
    "cn": "你的十三歲生日是什麼時候？ — 在七月，在暑假期間。"
  },
  {
    "word": "August",
    "pos": "n.",
    "cn_def": "八月",
    "en_def": "the eighth month of the year",
    "sentence": "Q: When is Father's Day in Taiwan? — A: It's on {{BLANK}} 8th.",
    "cn": "台灣的父親節是什麼時候？ — 在八月八日。"
  },
  {
    "word": "September",
    "pos": "n.",
    "cn_def": "九月",
    "en_def": "the ninth month of the year",
    "sentence": "Q: When is Teacher's Day? — A: It's on {{BLANK}} 28th.",
    "cn": "教師節是什麼時候？ — 在九月二十八日。"
  },
  {
    "word": "October",
    "pos": "n.",
    "cn_def": "十月",
    "en_def": "the tenth month of the year",
    "sentence": "Q: When is Halloween? — A: It's on {{BLANK}} 31st.",
    "cn": "萬聖節是什麼時候？ — 在十月三十一日。"
  },
  {
    "word": "November",
    "pos": "n.",
    "cn_def": "十一月",
    "en_def": "the eleventh month of the year",
    "sentence": "Q: When is Thanksgiving in America? — A: It's in {{BLANK}}. People eat a big dinner.",
    "cn": "美國的感恩節是什麼時候？ — 在十一月，人們吃一頓大餐。"
  },
  {
    "word": "December",
    "pos": "n.",
    "cn_def": "十二月",
    "en_def": "the twelfth and last month of the year",
    "sentence": "Q: When is Christmas? — A: It's on {{BLANK}} 25th.",
    "cn": "聖誕節是什麼時候？ — 在十二月二十五日。"
  },
  {
    "word": "season",
    "pos": "n.",
    "cn_def": "季節",
    "en_def": "one of the four parts of the year, such as spring or winter",
    "sentence": "Q: When is your birthday? — A: It's in summer. Summer is my favorite {{BLANK}}.",
    "cn": "你的生日是什麼時候？ — 在夏天，夏天是我最喜歡的季節。"
  },
  {
    "word": "spring",
    "pos": "n.",
    "cn_def": "春天",
    "en_def": "the season after winter, when flowers start to grow",
    "sentence": "Q: When is Sports Day? — A: It's in {{BLANK}}, in April. The flowers are beautiful.",
    "cn": "運動會是什麼時候？ — 在春天，在四月。花很漂亮。"
  },
  {
    "word": "summer",
    "pos": "n.",
    "cn_def": "夏天",
    "en_def": "the hottest season of the year",
    "sentence": "Q: When is your brother's eighteenth birthday? — A: It's in {{BLANK}}, in August. It's very hot.",
    "cn": "你哥哥的十八歲生日是什麼時候？ — 在夏天，在八月。天氣很熱。"
  },
  {
    "word": "autumn (fall)",
    "pos": "n.",
    "cn_def": "秋天",
    "en_def": "the season after summer, when leaves fall from trees",
    "sentence": "Q: When is the Moon Festival? — A: It's in {{BLANK}}, in September or October.",
    "cn": "中秋節是什麼時候？ — 在秋天，在九月或十月。",
    "alts": [
      "fall"
    ]
  },
  {
    "word": "winter",
    "pos": "n.",
    "cn_def": "冬天",
    "en_def": "the coldest season of the year",
    "sentence": "Q: When is Chinese New Year? — A: It's in {{BLANK}}, in January or February.",
    "cn": "農曆新年是什麼時候？ — 在冬天，在一月或二月。"
  },
  {
    "word": "Saturday",
    "pos": "n.",
    "cn_def": "星期六",
    "en_def": "the day after Friday",
    "sentence": "Q: What does Tom do on weekends? — A: He plays basketball on {{BLANK}} mornings.",
    "cn": "湯姆週末做什麼？ — 他星期六早上打籃球。"
  },
  {
    "word": "Sunday",
    "pos": "n.",
    "cn_def": "星期日",
    "en_def": "the day after Saturday",
    "sentence": "Q: What do you and your family do on weekends? — A: We go to church on {{BLANK}}.",
    "cn": "你和你的家人週末做什麼？ — 我們星期日去教會。"
  },
  {
    "word": "weekend",
    "pos": "n.",
    "cn_def": "週末",
    "en_def": "Saturday and Sunday",
    "sentence": "Q: What does your dad do on Saturdays? — A: He doesn't work on the {{BLANK}}. He sleeps late.",
    "cn": "你爸爸星期六做什麼？ — 他週末不用工作，他睡得很晚。"
  },
  {
    "word": "morning",
    "pos": "n.",
    "cn_def": "早上",
    "en_def": "the early part of the day, before noon",
    "sentence": "Q: What does Amy do on Sundays? — A: She goes jogging in the park in the {{BLANK}}.",
    "cn": "艾美星期日做什麼？ — 她早上去公園慢跑。"
  },
  {
    "word": "afternoon",
    "pos": "n.",
    "cn_def": "下午",
    "en_def": "the part of the day between noon and evening",
    "sentence": "Q: What do your classmates do on Fridays? — A: They play soccer in the {{BLANK}} after class.",
    "cn": "你的同學星期五做什麼？ — 他們下午下課後踢足球。"
  },
  {
    "word": "evening",
    "pos": "n.",
    "cn_def": "傍晚；晚上",
    "en_def": "the part of the day between afternoon and night",
    "sentence": "Q: What does your mom do on Mondays? — A: She takes a cooking class in the {{BLANK}}, after dinner.",
    "cn": "你媽媽星期一做什麼？ — 她傍晚吃完晚餐後去上烹飪課。"
  },
  {
    "word": "night",
    "pos": "n.",
    "cn_def": "夜晚；晚上",
    "en_def": "the time when it is dark and people sleep",
    "sentence": "Q: What do you do on Saturdays? — A: I watch movies with my family at {{BLANK}}.",
    "cn": "你星期六做什麼？ — 我晚上和家人一起看電影。"
  },
  {
    "word": "Tuesday",
    "pos": "n.",
    "cn_def": "星期二",
    "en_def": "the day after Monday",
    "sentence": "Q: When does Lisa have art class? — A: She has art class on {{BLANK}}.",
    "cn": "麗莎什麼時候上美術課？ — 她星期二上美術課。"
  },
  {
    "word": "Thursday",
    "pos": "n.",
    "cn_def": "星期四",
    "en_def": "the day after Wednesday",
    "sentence": "Q: When do you have music class? — A: I have music class on {{BLANK}}.",
    "cn": "你什麼時候上音樂課？ — 我星期四上音樂課。"
  },
  {
    "word": "Friday",
    "pos": "n.",
    "cn_def": "星期五",
    "en_def": "the day after Thursday",
    "sentence": "Q: When do Ben and Tom have PE class? — A: They have PE class on {{BLANK}} afternoon.",
    "cn": "班和湯姆什麼時候上體育課？ — 他們星期五下午上體育課。"
  },
  {
    "word": "now",
    "pos": "adv.",
    "cn_def": "現在",
    "en_def": "at this time",
    "sentence": "Q: When do we have math class? — A: We have it {{BLANK}}! Hurry up!",
    "cn": "我們什麼時候上數學課？ — 現在就是！快點！"
  },
  {
    "word": "soon",
    "pos": "adv.",
    "cn_def": "很快；不久",
    "en_def": "a short time from now",
    "sentence": "Q: When does Tim have science class? — A: He has it {{BLANK}}, in five minutes.",
    "cn": "提姆什麼時候上自然課？ — 很快，再五分鐘就上了。"
  },
  {
    "word": "later",
    "pos": "adv.",
    "cn_def": "稍後；等一下",
    "en_def": "at a time after now",
    "sentence": "Q: When does Amy have social studies class? — A: She has it {{BLANK}} today, after lunch.",
    "cn": "艾美什麼時候上社會課？ — 她今天稍後上，在午餐後。"
  },
  {
    "word": "early",
    "pos": "adv.",
    "cn_def": "早；早的",
    "en_def": "before the usual time; near the start of the day",
    "sentence": "Q: When do the students have Chinese class? — A: They have it {{BLANK}} in the morning, at eight.",
    "cn": "學生們什麼時候上國文課？ — 他們早上很早就上，在八點。"
  },
  {
    "word": "late",
    "pos": "adv.",
    "cn_def": "晚；晚的",
    "en_def": "after the usual time; near the end of the day",
    "sentence": "Q: When does your brother have English class? — A: He has it {{BLANK}} in the afternoon, at four o'clock.",
    "cn": "你弟弟什麼時候上英文課？ — 他下午很晚才上，在四點。"
  },
  {
    "word": "year",
    "pos": "n.",
    "cn_def": "年",
    "en_def": "twelve months",
    "sentence": "Q: When does your family go to Japan? — A: We go there every {{BLANK}}, in July.",
    "cn": "你家什麼時候去日本？ — 我們每年七月去那裡。"
  },
  {
    "word": "month",
    "pos": "n.",
    "cn_def": "月；月份",
    "en_def": "one of the twelve parts of a year",
    "sentence": "Q: When does your aunt visit you? — A: She visits us on the first day of every {{BLANK}}.",
    "cn": "你阿姨什麼時候來看你們？ — 她每個月的第一天來看我們。"
  },
  {
    "word": "once",
    "pos": "adv.",
    "cn_def": "一次",
    "en_def": "one time",
    "sentence": "Q: How often does Grandma call you? — A: She calls me {{BLANK}} a week, on Sunday night.",
    "cn": "奶奶多久打電話給你一次？ — 她一週打一次，在星期日晚上。"
  },
  {
    "word": "tonight",
    "pos": "adv.",
    "cn_def": "今晚",
    "en_def": "the night of today",
    "sentence": "Q: When do we have the party? — A: We have it {{BLANK}}, at seven o'clock.",
    "cn": "我們什麼時候開派對？ — 今晚，七點。"
  },
  {
    "word": "next",
    "pos": "adj.",
    "cn_def": "下一個的",
    "en_def": "coming right after this one",
    "sentence": "Q: When is the English test? — A: It's {{BLANK}} Friday. Let's study together.",
    "cn": "英文考試是什麼時候？ — 下星期五，我們一起讀書吧。"
  },
  {
    "word": "last",
    "pos": "adj.",
    "cn_def": "上一個的；最近的",
    "en_def": "the one before this one; most recent",
    "sentence": "Q: When was Ben's birthday party? — A: It was {{BLANK}} Sunday. It was fun.",
    "cn": "班的生日派對是什麼時候？ — 上星期日，很好玩。"
  },
  {
    "word": "ago",
    "pos": "adv.",
    "cn_def": "……以前",
    "en_def": "before now; in the past",
    "sentence": "Q: When was Tom in Japan? — A: He was there two years {{BLANK}}.",
    "cn": "湯姆什麼時候在日本？ — 他兩年前在那裡。"
  },
  {
    "word": "future",
    "pos": "n.",
    "cn_def": "未來",
    "en_def": "the time that will come after now",
    "sentence": "Q: When can people live on the moon? — A: Maybe in the {{BLANK}}.",
    "cn": "人們什麼時候可以住在月球上？ — 也許在未來。"
  }
];

const MCQS = [
  {
    "q": "What ______ is it now? I need to catch the bus at seven thirty.",
    "options": [
      "day",
      "week",
      "season",
      "time"
    ],
    "answer": 3,
    "cn": "現在幾點？ — 七點半，該去上學了。",
    "vocabIndex": 0
  },
  {
    "q": "The ______ on the classroom wall says it is nine. Our English class starts right now.",
    "options": [
      "hour",
      "clock",
      "minute",
      "week"
    ],
    "answer": 1,
    "cn": "現在幾點？ — 看牆上的時鐘，現在五點。",
    "vocabIndex": 1
  },
  {
    "q": "Dad wears a ______ on his left arm. He looks at it when he wants to know the time.",
    "options": [
      "watch",
      "clock",
      "noon",
      "season"
    ],
    "answer": 0,
    "cn": "班，現在幾點？ — 我看一下我的手錶，現在四點。",
    "vocabIndex": 2
  },
  {
    "q": "School starts at eight ______ in the morning. Don't be late, or the teacher will be angry.",
    "options": [
      "already",
      "ago",
      "o'clock",
      "once"
    ],
    "answer": 2,
    "cn": "現在幾點？ — 三點整，我們回家吧。",
    "vocabIndex": 3
  },
  {
    "q": "It is ______ past six now, so it is six thirty. Dinner will be ready in thirty minutes.",
    "options": [
      "noon",
      "hour",
      "minute",
      "half"
    ],
    "answer": 3,
    "cn": "現在幾點？ — 六點半，晚餐準備好了。",
    "vocabIndex": 4
  },
  {
    "q": "It is a ______ past three, so it is three fifteen. The bus will come in fifteen minutes.",
    "options": [
      "quarter",
      "half",
      "minute",
      "moment"
    ],
    "answer": 0,
    "cn": "現在幾點？ — 兩點十五分。",
    "vocabIndex": 5
  },
  {
    "q": "It is ten ______ nine now. In other words, it is 9:10, and we are ten minutes late.",
    "options": [
      "in",
      "on",
      "past",
      "with"
    ],
    "answer": 2,
    "cn": "現在幾點？ — 八點十分，我們遲到了！",
    "vocabIndex": 6
  },
  {
    "q": "I get up at 6 ______ every day. Then I have breakfast and go to school in the morning.",
    "options": [
      "p.m.",
      "a.m.",
      "ago",
      "once"
    ],
    "answer": 1,
    "cn": "台北現在幾點？ — 上午七點，人們正要去上班。",
    "vocabIndex": 7
  },
  {
    "q": "The movie starts at 9 ______ and ends at eleven at night. We will go home very late.",
    "options": [
      "a.m.",
      "ago",
      "p.m.",
      "once"
    ],
    "answer": 2,
    "cn": "現在幾點？ — 下午四點，放學了。",
    "vocabIndex": 8
  },
  {
    "q": "We eat lunch at ______. It is twelve o'clock, and the sun is high in the sky.",
    "options": [
      "noon",
      "night",
      "week",
      "season"
    ],
    "answer": 0,
    "cn": "現在幾點？ — 十二點，中午了，我們吃午餐吧。",
    "vocabIndex": 9
  },
  {
    "q": "It is ______ eleven o'clock at night! Turn off the TV and go to bed right now.",
    "options": [
      "ago",
      "once",
      "tomorrow",
      "already"
    ],
    "answer": 3,
    "cn": "現在幾點？ — 已經十點了！現在去睡覺。",
    "vocabIndex": 10
  },
  {
    "q": "There are sixty minutes in an ______. I do my homework for that long every evening.",
    "options": [
      "minute",
      "hour",
      "week",
      "month"
    ],
    "answer": 1,
    "cn": "現在幾點？ — 十一點，午餐前我們還有一個小時。",
    "vocabIndex": 11
  },
  {
    "q": "The bus will come in five ______. Let's wait here; it won't take long.",
    "options": [
      "years",
      "months",
      "seasons",
      "minutes"
    ],
    "answer": 3,
    "cn": "現在幾點？ — 七點五十五分，公車五分鐘後來。",
    "vocabIndex": 12
  },
  {
    "q": "There are sixty ______ in a minute. A good runner can run 400 meters in that time.",
    "options": [
      "hours",
      "days",
      "seconds",
      "weeks"
    ],
    "answer": 2,
    "cn": "現在幾點？ — 十一點五十九分五十秒，再十秒就新年了！",
    "vocabIndex": 13
  },
  {
    "q": "Please wait a ______. I will be back very soon with your coffee.",
    "options": [
      "moment",
      "year",
      "week",
      "season"
    ],
    "answer": 0,
    "cn": "媽，現在幾點？ — 等一下，我找不到我的手機。",
    "vocabIndex": 14
  },
  {
    "q": "______ is the day after Sunday. Many students feel tired on this first school day of the week.",
    "options": [
      "Tuesday",
      "Monday",
      "Friday",
      "Saturday"
    ],
    "answer": 1,
    "cn": "今天星期幾？ — 今天星期一，新的一週從今天開始。",
    "vocabIndex": 15
  },
  {
    "q": "______ is in the middle of the school week. It comes after Tuesday and before Thursday.",
    "options": [
      "Monday",
      "Friday",
      "Sunday",
      "Wednesday"
    ],
    "answer": 3,
    "cn": "今天星期幾？ — 今天星期三，是一週的中間。",
    "vocabIndex": 16
  },
  {
    "q": "Yesterday was Monday, so ______ is Tuesday. We have music class this afternoon.",
    "options": [
      "tomorrow",
      "yesterday",
      "today",
      "weekend"
    ],
    "answer": 2,
    "cn": "今天星期幾？ — 今天星期五，我們有考試。",
    "vocabIndex": 17
  },
  {
    "q": "Today is Friday, so ______ is Saturday. We don't have to go to school then.",
    "options": [
      "yesterday",
      "tomorrow",
      "today",
      "noon"
    ],
    "answer": 1,
    "cn": "今天星期幾？ — 今天星期五，明天星期六，不用上學！",
    "vocabIndex": 18
  },
  {
    "q": "Today is Sunday, so ______ was Saturday. We went to the zoo and saw the pandas.",
    "options": [
      "yesterday",
      "tomorrow",
      "today",
      "tonight"
    ],
    "answer": 0,
    "cn": "今天星期幾？ — 今天星期一，昨天是星期日。",
    "vocabIndex": 19
  },
  {
    "q": "There are twenty-four hours in a ______. People usually sleep for eight of them.",
    "options": [
      "week",
      "month",
      "year",
      "day"
    ],
    "answer": 3,
    "cn": "今天星期幾？ — 今天星期日，這是我一週中最喜歡的一天。",
    "vocabIndex": 20
  },
  {
    "q": "There are seven days in a ______. Students go to school on five of them.",
    "options": [
      "month",
      "year",
      "week",
      "season"
    ],
    "answer": 2,
    "cn": "今天星期幾？ — 今天星期日，是一週的第一天。",
    "vocabIndex": 21
  },
  {
    "q": "______ is the first month of the year. New Year's Day is on the first day of this month.",
    "options": [
      "March",
      "January",
      "June",
      "December"
    ],
    "answer": 1,
    "cn": "元旦是什麼時候？ — 在一月一日。",
    "vocabIndex": 22
  },
  {
    "q": "______ is the shortest month of the year. It has only twenty-eight or twenty-nine days.",
    "options": [
      "February",
      "January",
      "April",
      "July"
    ],
    "answer": 0,
    "cn": "情人節是什麼時候？ — 在二月十四日。",
    "vocabIndex": 23
  },
  {
    "q": "______ is the third month of the year. It comes after February and before April.",
    "options": [
      "May",
      "August",
      "March",
      "October"
    ],
    "answer": 2,
    "cn": "你姊姊的十六歲生日是什麼時候？ — 在三月，她想要一個大蛋糕。",
    "vocabIndex": 24
  },
  {
    "q": "______ is the fourth month of the year. People play tricks on their friends on its first day.",
    "options": [
      "June",
      "September",
      "November",
      "April"
    ],
    "answer": 3,
    "cn": "台灣的兒童節是什麼時候？ — 在四月四日。",
    "vocabIndex": 25
  },
  {
    "q": "Mother's Day is in ______. It is on the second Sunday of the fifth month of the year.",
    "options": [
      "May",
      "March",
      "July",
      "October"
    ],
    "answer": 0,
    "cn": "母親節是什麼時候？ — 在五月的第二個星期日。",
    "vocabIndex": 26
  },
  {
    "q": "______ is the sixth month of the year. Many students finish school in this month.",
    "options": [
      "April",
      "June",
      "August",
      "December"
    ],
    "answer": 1,
    "cn": "今年端午節是什麼時候？ — 在六月，我們吃粽子。",
    "vocabIndex": 27
  },
  {
    "q": "______ is the seventh month of the year. Students in Taiwan are on summer vacation then.",
    "options": [
      "July",
      "January",
      "March",
      "November"
    ],
    "answer": 0,
    "cn": "你的十三歲生日是什麼時候？ — 在七月，在暑假期間。",
    "vocabIndex": 28
  },
  {
    "q": "Father's Day in Taiwan is on the eighth day of ______. It is the eighth month of the year.",
    "options": [
      "May",
      "June",
      "October",
      "August"
    ],
    "answer": 3,
    "cn": "台灣的父親節是什麼時候？ — 在八月八日。",
    "vocabIndex": 29
  },
  {
    "q": "The new school year in Taiwan begins in ______. It is the ninth month of the year.",
    "options": [
      "February",
      "July",
      "September",
      "December"
    ],
    "answer": 2,
    "cn": "教師節是什麼時候？ — 在九月二十八日。",
    "vocabIndex": 30
  },
  {
    "q": "Halloween is on the last day of ______. It is the tenth month of the year.",
    "options": [
      "April",
      "October",
      "August",
      "December"
    ],
    "answer": 1,
    "cn": "萬聖節是什麼時候？ — 在十月三十一日。",
    "vocabIndex": 31
  },
  {
    "q": "______ is the eleventh month of the year. It comes right before December.",
    "options": [
      "September",
      "October",
      "November",
      "January"
    ],
    "answer": 2,
    "cn": "美國的感恩節是什麼時候？ — 在十一月，人們吃一頓大餐。",
    "vocabIndex": 32
  },
  {
    "q": "Christmas is in ______. It is the twelfth and last month of the year.",
    "options": [
      "December",
      "October",
      "November",
      "February"
    ],
    "answer": 0,
    "cn": "聖誕節是什麼時候？ — 在十二月二十五日。",
    "vocabIndex": 33
  },
  {
    "q": "Summer is my favorite ______. I like it more than spring, fall, or winter.",
    "options": [
      "month",
      "season",
      "weekend",
      "moment"
    ],
    "answer": 1,
    "cn": "你的生日是什麼時候？ — 在夏天，夏天是我最喜歡的季節。",
    "vocabIndex": 34
  },
  {
    "q": "In ______, the weather gets warm after winter, and flowers start to come out.",
    "options": [
      "summer",
      "autumn",
      "night",
      "spring"
    ],
    "answer": 3,
    "cn": "運動會是什麼時候？ — 在春天，在四月。花很漂亮。",
    "vocabIndex": 35
  },
  {
    "q": "______ is the hottest season. Students have a long vacation, and many people go swimming.",
    "options": [
      "Spring",
      "Autumn",
      "summer",
      "Winter"
    ],
    "answer": 2,
    "cn": "你哥哥的十八歲生日是什麼時候？ — 在夏天，在八月。天氣很熱。",
    "vocabIndex": 36
  },
  {
    "q": "In ______, the leaves turn yellow and fall from the trees. The weather gets cooler after the hot summer.",
    "options": [
      "spring",
      "summer",
      "winter",
      "autumn"
    ],
    "answer": 3,
    "cn": "中秋節是什麼時候？ — 在秋天，在九月或十月。",
    "vocabIndex": 37
  },
  {
    "q": "______ is the coldest season. People wear coats and gloves, and it snows in some countries.",
    "options": [
      "Spring",
      "winter",
      "Summer",
      "Autumn"
    ],
    "answer": 1,
    "cn": "農曆新年是什麼時候？ — 在冬天，在一月或二月。",
    "vocabIndex": 38
  },
  {
    "q": "______ is the day after Friday. It is the first day of the weekend.",
    "options": [
      "Saturday",
      "Sunday",
      "Monday",
      "Thursday"
    ],
    "answer": 0,
    "cn": "湯姆週末做什麼？ — 他星期六早上打籃球。",
    "vocabIndex": 39
  },
  {
    "q": "______ is the day after Saturday. It is the last day of the weekend, and Monday comes next.",
    "options": [
      "Friday",
      "Tuesday",
      "Sunday",
      "Wednesday"
    ],
    "answer": 2,
    "cn": "你和你的家人週末做什麼？ — 我們星期日去教會。",
    "vocabIndex": 40
  },
  {
    "q": "We don't go to school on the ______. We can sleep late on Saturday and Sunday.",
    "options": [
      "month",
      "weekend",
      "season",
      "moment"
    ],
    "answer": 1,
    "cn": "你爸爸星期六做什麼？ — 他週末不用工作，他睡得很晚。",
    "vocabIndex": 41
  },
  {
    "q": "I get up at six in the ______. Then I brush my teeth and eat breakfast.",
    "options": [
      "morning",
      "afternoon",
      "evening",
      "night"
    ],
    "answer": 0,
    "cn": "艾美星期日做什麼？ — 她早上去公園慢跑。",
    "vocabIndex": 42
  },
  {
    "q": "School is over at four in the ______. After lunch and three more classes, we can go home.",
    "options": [
      "morning",
      "evening",
      "night",
      "afternoon"
    ],
    "answer": 3,
    "cn": "你的同學星期五做什麼？ — 他們下午下課後踢足球。",
    "vocabIndex": 43
  },
  {
    "q": "We have dinner at six thirty in the ______. After that, I do my homework until nine.",
    "options": [
      "morning",
      "evening",
      "afternoon",
      "noon"
    ],
    "answer": 1,
    "cn": "你媽媽星期一做什麼？ — 她傍晚吃完晚餐後去上烹飪課。",
    "vocabIndex": 44
  },
  {
    "q": "The moon and stars come out at ______. Most people are sleeping then.",
    "options": [
      "noon",
      "spring",
      "night",
      "summer"
    ],
    "answer": 2,
    "cn": "你星期六做什麼？ — 我晚上和家人一起看電影。",
    "vocabIndex": 45
  },
  {
    "q": "______ is the day after Monday. It is the second school day of the week.",
    "options": [
      "Tuesday",
      "Thursday",
      "Friday",
      "Sunday"
    ],
    "answer": 0,
    "cn": "麗莎什麼時候上美術課？ — 她星期二上美術課。",
    "vocabIndex": 46
  },
  {
    "q": "______ is the day before Friday. It comes after Wednesday.",
    "options": [
      "Monday",
      "Tuesday",
      "Saturday",
      "Thursday"
    ],
    "answer": 3,
    "cn": "你什麼時候上音樂課？ — 我星期四上音樂課。",
    "vocabIndex": 47
  },
  {
    "q": "______ is the last school day of the week. The weekend starts after it.",
    "options": [
      "Monday",
      "Wednesday",
      "Friday",
      "Sunday"
    ],
    "answer": 2,
    "cn": "班和湯姆什麼時候上體育課？ — 他們星期五下午上體育課。",
    "vocabIndex": 48
  },
  {
    "q": "I can't talk to you right ______. I am busy cooking dinner, so please call me back in an hour.",
    "options": [
      "ago",
      "now",
      "soon",
      "once"
    ],
    "answer": 1,
    "cn": "我們什麼時候上數學課？ — 現在就是！快點！",
    "vocabIndex": 49
  },
  {
    "q": "Dinner will be ready ______. Please wash your hands and sit at the table in five minutes.",
    "options": [
      "soon",
      "ago",
      "already",
      "yesterday"
    ],
    "answer": 0,
    "cn": "提姆什麼時候上自然課？ — 很快，再五分鐘就上了。",
    "vocabIndex": 50
  },
  {
    "q": "I am busy now. Can I call you back ______, maybe in an hour?",
    "options": [
      "ago",
      "already",
      "early",
      "later"
    ],
    "answer": 3,
    "cn": "艾美什麼時候上社會課？ — 她今天稍後上，在午餐後。",
    "vocabIndex": 51
  },
  {
    "q": "I have to get up ______ tomorrow because the first bus leaves at five thirty in the morning.",
    "options": [
      "late",
      "early",
      "ago",
      "once"
    ],
    "answer": 1,
    "cn": "學生們什麼時候上國文課？ — 他們早上很早就上，在八點。",
    "vocabIndex": 52
  },
  {
    "q": "Tom got up at eight, so he was ______ for school. The teacher was not happy about it.",
    "options": [
      "early",
      "soon",
      "late",
      "already"
    ],
    "answer": 2,
    "cn": "你弟弟什麼時候上英文課？ — 他下午很晚才上，在四點。",
    "vocabIndex": 53
  },
  {
    "q": "There are twelve months in a ______. My birthday comes only once in that time.",
    "options": [
      "week",
      "day",
      "season",
      "year"
    ],
    "answer": 3,
    "cn": "你家什麼時候去日本？ — 我們每年七月去那裡。",
    "vocabIndex": 54
  },
  {
    "q": "There are about four weeks in a ______. February is the shortest one.",
    "options": [
      "month",
      "year",
      "day",
      "weekend"
    ],
    "answer": 0,
    "cn": "你阿姨什麼時候來看你們？ — 她每個月的第一天來看我們。",
    "vocabIndex": 55
  },
  {
    "q": "I visit my grandparents ______ a week, every Sunday. I wish I could see them more often.",
    "options": [
      "already",
      "once",
      "ago",
      "soon"
    ],
    "answer": 1,
    "cn": "奶奶多久打電話給你一次？ — 她一週打一次，在星期日晚上。",
    "vocabIndex": 56
  },
  {
    "q": "There is a good movie on TV ______ at nine. Let's finish our homework before dinner so we can watch it.",
    "options": [
      "yesterday",
      "ago",
      "already",
      "tonight"
    ],
    "answer": 3,
    "cn": "我們什麼時候開派對？ — 今晚，七點。",
    "vocabIndex": 57
  },
  {
    "q": "This bus is full. Let's wait for the ______ one; it will come in ten minutes.",
    "options": [
      "last",
      "early",
      "next",
      "late"
    ],
    "answer": 2,
    "cn": "英文考試是什麼時候？ — 下星期五，我們一起讀書吧。",
    "vocabIndex": 58
  },
  {
    "q": "I didn't see you ______ week. Were you sick, or did you go on a trip?",
    "options": [
      "last",
      "next",
      "early",
      "late"
    ],
    "answer": 0,
    "cn": "班的生日派對是什麼時候？ — 上星期日，很好玩。",
    "vocabIndex": 59
  },
  {
    "q": "My family moved to Taipei five years ______. Before that, we lived in Tainan.",
    "options": [
      "soon",
      "ago",
      "once",
      "already"
    ],
    "answer": 1,
    "cn": "湯姆什麼時候在日本？ — 他兩年前在那裡。",
    "vocabIndex": 60
  },
  {
    "q": "Nobody knows what will happen in the ______. We can only work hard today.",
    "options": [
      "noon",
      "moment",
      "weekend",
      "future"
    ],
    "answer": 3,
    "cn": "人們什麼時候可以住在月球上？ — 也許在未來。",
    "vocabIndex": 61
  }
];

const LOOKUP = {
  "day": {
    "pos": "n.",
    "en_def": "twenty-four hours; the time when it is light",
    "cn_def": "日子；天"
  },
  "week": {
    "pos": "n.",
    "en_def": "seven days",
    "cn_def": "星期；週"
  },
  "season": {
    "pos": "n.",
    "en_def": "one of the four parts of the year, such as spring or winter",
    "cn_def": "季節"
  },
  "time": {
    "pos": "n.",
    "en_def": "what we measure in minutes, hours, and days",
    "cn_def": "時間"
  },
  "hour": {
    "pos": "n.",
    "en_def": "sixty minutes",
    "cn_def": "小時"
  },
  "clock": {
    "pos": "n.",
    "en_def": "a thing on the wall or table that shows the time",
    "cn_def": "時鐘"
  },
  "minute": {
    "pos": "n.",
    "en_def": "sixty seconds",
    "cn_def": "分鐘"
  },
  "watch": {
    "pos": "n.",
    "en_def": "a small clock that you wear on your arm",
    "cn_def": "手錶"
  },
  "noon": {
    "pos": "n.",
    "en_def": "twelve o'clock in the middle of the day",
    "cn_def": "中午"
  },
  "already": {
    "pos": "adv.",
    "en_def": "before now; earlier than you thought",
    "cn_def": "已經"
  },
  "ago": {
    "pos": "adv.",
    "en_def": "before now; in the past",
    "cn_def": "……以前"
  },
  "o'clock": {
    "pos": "adv.",
    "en_def": "a word used after a number to tell the hour",
    "cn_def": "……點鐘"
  },
  "once": {
    "pos": "adv.",
    "en_def": "one time",
    "cn_def": "一次"
  },
  "half": {
    "pos": "n.",
    "en_def": "one of two same-sized parts; thirty minutes",
    "cn_def": "一半；半小時"
  },
  "quarter": {
    "pos": "n.",
    "en_def": "one of four same-sized parts; fifteen minutes",
    "cn_def": "十五分鐘；四分之一"
  },
  "moment": {
    "pos": "n.",
    "en_def": "a very short time",
    "cn_def": "片刻；一會兒"
  },
  "in": {
    "pos": "prep.",
    "en_def": "",
    "cn_def": "在…裡面"
  },
  "on": {
    "pos": "prep.",
    "en_def": "",
    "cn_def": "在…上面"
  },
  "past": {
    "pos": "prep.",
    "en_def": "after (an hour), as in \"ten past eight\"",
    "cn_def": "（時間）超過；過了"
  },
  "with": {
    "pos": "prep.",
    "en_def": "",
    "cn_def": "和；用"
  },
  "p.m.": {
    "pos": "abbr.",
    "en_def": "in the afternoon or at night, after twelve noon",
    "cn_def": "下午（用在時間後）"
  },
  "a.m.": {
    "pos": "abbr.",
    "en_def": "in the morning, before twelve noon",
    "cn_def": "上午（用在時間後）"
  },
  "night": {
    "pos": "n.",
    "en_def": "the time when it is dark and people sleep",
    "cn_def": "夜晚；晚上"
  },
  "tomorrow": {
    "pos": "n.",
    "en_def": "the day after today",
    "cn_def": "明天"
  },
  "month": {
    "pos": "n.",
    "en_def": "one of the twelve parts of a year",
    "cn_def": "月；月份"
  },
  "years": {
    "pos": "n.",
    "en_def": "twelve months",
    "cn_def": "年"
  },
  "months": {
    "pos": "n.",
    "en_def": "one of the twelve parts of a year",
    "cn_def": "月；月份"
  },
  "seasons": {
    "pos": "n.",
    "en_def": "one of the four parts of the year, such as spring or winter",
    "cn_def": "季節"
  },
  "minutes": {
    "pos": "n.",
    "en_def": "sixty seconds",
    "cn_def": "分鐘"
  },
  "hours": {
    "pos": "n.",
    "en_def": "sixty minutes",
    "cn_def": "小時"
  },
  "days": {
    "pos": "n.",
    "en_def": "twenty-four hours; the time when it is light",
    "cn_def": "日子；天"
  },
  "seconds": {
    "pos": "n.",
    "en_def": "a very short time; sixty of them make one minute",
    "cn_def": "秒"
  },
  "weeks": {
    "pos": "n.",
    "en_def": "seven days",
    "cn_def": "星期；週"
  },
  "year": {
    "pos": "n.",
    "en_def": "twelve months",
    "cn_def": "年"
  },
  "tuesday": {
    "pos": "n.",
    "en_def": "the day after Monday",
    "cn_def": "星期二"
  },
  "monday": {
    "pos": "n.",
    "en_def": "the day after Sunday",
    "cn_def": "星期一"
  },
  "friday": {
    "pos": "n.",
    "en_def": "the day after Thursday",
    "cn_def": "星期五"
  },
  "saturday": {
    "pos": "n.",
    "en_def": "the day after Friday",
    "cn_def": "星期六"
  },
  "sunday": {
    "pos": "n.",
    "en_def": "the day after Saturday",
    "cn_def": "星期日"
  },
  "wednesday": {
    "pos": "n.",
    "en_def": "the day after Tuesday",
    "cn_def": "星期三"
  },
  "yesterday": {
    "pos": "n.",
    "en_def": "the day before today",
    "cn_def": "昨天"
  },
  "today": {
    "pos": "n.",
    "en_def": "this day",
    "cn_def": "今天"
  },
  "weekend": {
    "pos": "n.",
    "en_def": "Saturday and Sunday",
    "cn_def": "週末"
  },
  "tonight": {
    "pos": "adv.",
    "en_def": "the night of today",
    "cn_def": "今晚"
  },
  "march": {
    "pos": "n.",
    "en_def": "the third month of the year",
    "cn_def": "三月"
  },
  "january": {
    "pos": "n.",
    "en_def": "the first month of the year",
    "cn_def": "一月"
  },
  "june": {
    "pos": "n.",
    "en_def": "the sixth month of the year",
    "cn_def": "六月"
  },
  "december": {
    "pos": "n.",
    "en_def": "the twelfth and last month of the year",
    "cn_def": "十二月"
  },
  "february": {
    "pos": "n.",
    "en_def": "the second month of the year",
    "cn_def": "二月"
  },
  "april": {
    "pos": "n.",
    "en_def": "the fourth month of the year",
    "cn_def": "四月"
  },
  "july": {
    "pos": "n.",
    "en_def": "the seventh month of the year",
    "cn_def": "七月"
  },
  "may": {
    "pos": "n.",
    "en_def": "the fifth month of the year",
    "cn_def": "五月"
  },
  "august": {
    "pos": "n.",
    "en_def": "the eighth month of the year",
    "cn_def": "八月"
  },
  "october": {
    "pos": "n.",
    "en_def": "the tenth month of the year",
    "cn_def": "十月"
  },
  "september": {
    "pos": "n.",
    "en_def": "the ninth month of the year",
    "cn_def": "九月"
  },
  "november": {
    "pos": "n.",
    "en_def": "the eleventh month of the year",
    "cn_def": "十一月"
  },
  "summer": {
    "pos": "n.",
    "en_def": "the hottest season of the year",
    "cn_def": "夏天"
  },
  "autumn": {
    "pos": "n.",
    "en_def": "the season after summer, when leaves fall from trees",
    "cn_def": "秋天"
  },
  "spring": {
    "pos": "n.",
    "en_def": "the season after winter, when flowers start to grow",
    "cn_def": "春天"
  },
  "winter": {
    "pos": "n.",
    "en_def": "the coldest season of the year",
    "cn_def": "冬天"
  },
  "thursday": {
    "pos": "n.",
    "en_def": "the day after Wednesday",
    "cn_def": "星期四"
  },
  "morning": {
    "pos": "n.",
    "en_def": "the early part of the day, before noon",
    "cn_def": "早上"
  },
  "afternoon": {
    "pos": "n.",
    "en_def": "the part of the day between noon and evening",
    "cn_def": "下午"
  },
  "evening": {
    "pos": "n.",
    "en_def": "the part of the day between afternoon and night",
    "cn_def": "傍晚；晚上"
  },
  "now": {
    "pos": "adv.",
    "en_def": "at this time",
    "cn_def": "現在"
  },
  "soon": {
    "pos": "adv.",
    "en_def": "a short time from now",
    "cn_def": "很快；不久"
  },
  "early": {
    "pos": "adv.",
    "en_def": "before the usual time; near the start of the day",
    "cn_def": "早；早的"
  },
  "later": {
    "pos": "adv.",
    "en_def": "at a time after now",
    "cn_def": "稍後；等一下"
  },
  "late": {
    "pos": "adv.",
    "en_def": "after the usual time; near the end of the day",
    "cn_def": "晚；晚的"
  },
  "last": {
    "pos": "adj.",
    "en_def": "coming after all the others",
    "cn_def": "最後的"
  },
  "next": {
    "pos": "adj.",
    "en_def": "coming right after this one",
    "cn_def": "下一個的"
  },
  "future": {
    "pos": "n.",
    "en_def": "the time that will come after now",
    "cn_def": "未來"
  }
};

const EXTRA_GLOSSES = {};
