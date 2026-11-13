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
    "en_def": "",
    "sentence": "Q: What time is it? — A: It's seven thirty. It's {{BLANK}} to go to school.",
    "cn": "現在幾點？ — 七點半，該去上學了。"
  },
  {
    "word": "clock",
    "pos": "n.",
    "cn_def": "時鐘",
    "en_def": "",
    "sentence": "Q: What time is it? — A: Look at the {{BLANK}} on the wall. It's five o'clock.",
    "cn": "現在幾點？ — 看牆上的時鐘，現在五點。"
  },
  {
    "word": "watch",
    "pos": "n.",
    "cn_def": "手錶",
    "en_def": "",
    "sentence": "Q: What time is it, Ben? — A: Let me look at my {{BLANK}}. It's four o'clock.",
    "cn": "班，現在幾點？ — 我看一下我的手錶，現在四點。"
  },
  {
    "word": "o'clock",
    "pos": "adv.",
    "cn_def": "……點鐘",
    "en_def": "",
    "sentence": "Q: What time is it now? — A: It's three {{BLANK}}. Let's go home.",
    "cn": "現在幾點？ — 三點整，我們回家吧。"
  },
  {
    "word": "half",
    "pos": "n.",
    "cn_def": "一半；半小時",
    "en_def": "",
    "sentence": "Q: What time is it now? — A: It's {{BLANK}} past six. Dinner is ready.",
    "cn": "現在幾點？ — 六點半，晚餐準備好了。"
  },
  {
    "word": "quarter",
    "pos": "n.",
    "cn_def": "十五分鐘；四分之一",
    "en_def": "",
    "sentence": "Q: What time is it? — A: It's a {{BLANK}} past two. (2:15)",
    "cn": "現在幾點？ — 兩點十五分。"
  },
  {
    "word": "past",
    "pos": "prep.",
    "cn_def": "（時間）超過；過了",
    "en_def": "",
    "sentence": "Q: What time is it? — A: It's ten {{BLANK}} eight. (8:10) We are late!",
    "cn": "現在幾點？ — 八點十分，我們遲到了！"
  },
  {
    "word": "a.m.",
    "pos": "abbr.",
    "cn_def": "上午（用在時間後）",
    "en_def": "",
    "sentence": "Q: What time is it in Taipei now? — A: It's 7 {{BLANK}} People are going to work.",
    "cn": "台北現在幾點？ — 上午七點，人們正要去上班。"
  },
  {
    "word": "p.m.",
    "pos": "abbr.",
    "cn_def": "下午（用在時間後）",
    "en_def": "",
    "sentence": "Q: What time is it? — A: It's 4 {{BLANK}} School is over.",
    "cn": "現在幾點？ — 下午四點，放學了。"
  },
  {
    "word": "noon",
    "pos": "n.",
    "cn_def": "中午",
    "en_def": "",
    "sentence": "Q: What time is it? — A: It's twelve. It's {{BLANK}}. Let's have lunch.",
    "cn": "現在幾點？ — 十二點，中午了，我們吃午餐吧。"
  },
  {
    "word": "already",
    "pos": "adv.",
    "cn_def": "已經",
    "en_def": "",
    "sentence": "Q: What time is it? — A: It's {{BLANK}} ten o'clock! Go to bed now.",
    "cn": "現在幾點？ — 已經十點了！現在去睡覺。"
  },
  {
    "word": "hour",
    "pos": "n.",
    "cn_def": "小時",
    "en_def": "",
    "sentence": "Q: What time is it? — A: It's eleven. We have one {{BLANK}} before lunch.",
    "cn": "現在幾點？ — 十一點，午餐前我們還有一個小時。"
  },
  {
    "word": "minute (minutes)",
    "pos": "n.",
    "cn_def": "分鐘",
    "en_def": "",
    "sentence": "Q: What time is it? — A: It's 7:55. The bus comes in five {{BLANK}}.",
    "cn": "現在幾點？ — 七點五十五分，公車五分鐘後來。"
  },
  {
    "word": "second (seconds)",
    "pos": "n.",
    "cn_def": "秒",
    "en_def": "",
    "sentence": "Q: What time is it? — A: It's 11:59:50. Only ten {{BLANK}} to the new year!",
    "cn": "現在幾點？ — 十一點五十九分五十秒，再十秒就新年了！"
  },
  {
    "word": "moment",
    "pos": "n.",
    "cn_def": "片刻；一會兒",
    "en_def": "",
    "sentence": "Q: What time is it, Mom? — A: Wait a {{BLANK}}. I can't find my phone.",
    "cn": "媽，現在幾點？ — 等一下，我找不到我的手機。"
  },
  {
    "word": "Monday",
    "pos": "n.",
    "cn_def": "星期一",
    "en_def": "",
    "sentence": "Q: What day is it today? — A: It's {{BLANK}}. A new week starts today.",
    "cn": "今天星期幾？ — 今天星期一，新的一週從今天開始。"
  },
  {
    "word": "Wednesday",
    "pos": "n.",
    "cn_def": "星期三",
    "en_def": "",
    "sentence": "Q: What day is it today? — A: It's {{BLANK}}. It's the middle of the week.",
    "cn": "今天星期幾？ — 今天星期三，是一週的中間。"
  },
  {
    "word": "today",
    "pos": "n.",
    "cn_def": "今天",
    "en_def": "",
    "sentence": "Q: What day is it today? — A: {{BLANK}} is Friday. We have a test.",
    "cn": "今天星期幾？ — 今天星期五，我們有考試。"
  },
  {
    "word": "tomorrow",
    "pos": "n.",
    "cn_def": "明天",
    "en_def": "",
    "sentence": "Q: What day is it today? — A: It's Friday. {{BLANK}} is Saturday. No school!",
    "cn": "今天星期幾？ — 今天星期五，明天星期六，不用上學！"
  },
  {
    "word": "yesterday",
    "pos": "n.",
    "cn_def": "昨天",
    "en_def": "",
    "sentence": "Q: What day is it today? — A: It's Monday. {{BLANK}} was Sunday.",
    "cn": "今天星期幾？ — 今天星期一，昨天是星期日。"
  },
  {
    "word": "day",
    "pos": "n.",
    "cn_def": "日子；天",
    "en_def": "",
    "sentence": "Q: What day is it today? — A: It's Sunday. It's my favorite {{BLANK}} of the week.",
    "cn": "今天星期幾？ — 今天星期日，這是我一週中最喜歡的一天。"
  },
  {
    "word": "week",
    "pos": "n.",
    "cn_def": "星期；週",
    "en_def": "",
    "sentence": "Q: What day is it today? — A: It's Sunday. It's the first day of the {{BLANK}}.",
    "cn": "今天星期幾？ — 今天星期日，是一週的第一天。"
  },
  {
    "word": "January",
    "pos": "n.",
    "cn_def": "一月",
    "en_def": "",
    "sentence": "Q: When is New Year's Day? — A: It's on {{BLANK}} 1st.",
    "cn": "元旦是什麼時候？ — 在一月一日。"
  },
  {
    "word": "February",
    "pos": "n.",
    "cn_def": "二月",
    "en_def": "",
    "sentence": "Q: When is Valentine's Day? — A: It's on {{BLANK}} 14th.",
    "cn": "情人節是什麼時候？ — 在二月十四日。"
  },
  {
    "word": "March",
    "pos": "n.",
    "cn_def": "三月",
    "en_def": "",
    "sentence": "Q: When is your sister's sixteenth birthday? — A: It's in {{BLANK}}. She wants a big cake.",
    "cn": "你姊姊的十六歲生日是什麼時候？ — 在三月，她想要一個大蛋糕。"
  },
  {
    "word": "April",
    "pos": "n.",
    "cn_def": "四月",
    "en_def": "",
    "sentence": "Q: When is Children's Day in Taiwan? — A: It's on {{BLANK}} 4th.",
    "cn": "台灣的兒童節是什麼時候？ — 在四月四日。"
  },
  {
    "word": "May",
    "pos": "n.",
    "cn_def": "五月",
    "en_def": "",
    "sentence": "Q: When is Mother's Day? — A: It's on the second Sunday in {{BLANK}}.",
    "cn": "母親節是什麼時候？ — 在五月的第二個星期日。"
  },
  {
    "word": "June",
    "pos": "n.",
    "cn_def": "六月",
    "en_def": "",
    "sentence": "Q: When is the Dragon Boat Festival this year? — A: It's in {{BLANK}}. We eat rice dumplings.",
    "cn": "今年端午節是什麼時候？ — 在六月，我們吃粽子。"
  },
  {
    "word": "July",
    "pos": "n.",
    "cn_def": "七月",
    "en_def": "",
    "sentence": "Q: When is your thirteenth birthday? — A: It's in {{BLANK}}, in the summer vacation.",
    "cn": "你的十三歲生日是什麼時候？ — 在七月，在暑假期間。"
  },
  {
    "word": "August",
    "pos": "n.",
    "cn_def": "八月",
    "en_def": "",
    "sentence": "Q: When is Father's Day in Taiwan? — A: It's on {{BLANK}} 8th.",
    "cn": "台灣的父親節是什麼時候？ — 在八月八日。"
  },
  {
    "word": "September",
    "pos": "n.",
    "cn_def": "九月",
    "en_def": "",
    "sentence": "Q: When is Teacher's Day? — A: It's on {{BLANK}} 28th.",
    "cn": "教師節是什麼時候？ — 在九月二十八日。"
  },
  {
    "word": "October",
    "pos": "n.",
    "cn_def": "十月",
    "en_def": "",
    "sentence": "Q: When is Halloween? — A: It's on {{BLANK}} 31st.",
    "cn": "萬聖節是什麼時候？ — 在十月三十一日。"
  },
  {
    "word": "November",
    "pos": "n.",
    "cn_def": "十一月",
    "en_def": "",
    "sentence": "Q: When is Thanksgiving in America? — A: It's in {{BLANK}}. People eat a big dinner.",
    "cn": "美國的感恩節是什麼時候？ — 在十一月，人們吃一頓大餐。"
  },
  {
    "word": "December",
    "pos": "n.",
    "cn_def": "十二月",
    "en_def": "",
    "sentence": "Q: When is Christmas? — A: It's on {{BLANK}} 25th.",
    "cn": "聖誕節是什麼時候？ — 在十二月二十五日。"
  },
  {
    "word": "season",
    "pos": "n.",
    "cn_def": "季節",
    "en_def": "",
    "sentence": "Q: When is your birthday? — A: It's in summer. Summer is my favorite {{BLANK}}.",
    "cn": "你的生日是什麼時候？ — 在夏天，夏天是我最喜歡的季節。"
  },
  {
    "word": "spring",
    "pos": "n.",
    "cn_def": "春天",
    "en_def": "",
    "sentence": "Q: When is Sports Day? — A: It's in {{BLANK}}, in April. The flowers are beautiful.",
    "cn": "運動會是什麼時候？ — 在春天，在四月。花很漂亮。"
  },
  {
    "word": "summer",
    "pos": "n.",
    "cn_def": "夏天",
    "en_def": "",
    "sentence": "Q: When is your brother's eighteenth birthday? — A: It's in {{BLANK}}, in August. It's very hot.",
    "cn": "你哥哥的十八歲生日是什麼時候？ — 在夏天，在八月。天氣很熱。"
  },
  {
    "word": "autumn (fall)",
    "pos": "n.",
    "cn_def": "秋天",
    "en_def": "",
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
    "en_def": "",
    "sentence": "Q: When is Chinese New Year? — A: It's in {{BLANK}}, in January or February.",
    "cn": "農曆新年是什麼時候？ — 在冬天，在一月或二月。"
  },
  {
    "word": "Saturday",
    "pos": "n.",
    "cn_def": "星期六",
    "en_def": "",
    "sentence": "Q: What does Tom do on weekends? — A: He plays basketball on {{BLANK}} mornings.",
    "cn": "湯姆週末做什麼？ — 他星期六早上打籃球。"
  },
  {
    "word": "Sunday",
    "pos": "n.",
    "cn_def": "星期日",
    "en_def": "",
    "sentence": "Q: What do you and your family do on weekends? — A: We go to church on {{BLANK}}.",
    "cn": "你和你的家人週末做什麼？ — 我們星期日去教會。"
  },
  {
    "word": "weekend",
    "pos": "n.",
    "cn_def": "週末",
    "en_def": "",
    "sentence": "Q: What does your dad do on Saturdays? — A: He doesn't work on the {{BLANK}}. He sleeps late.",
    "cn": "你爸爸星期六做什麼？ — 他週末不用工作，他睡得很晚。"
  },
  {
    "word": "morning",
    "pos": "n.",
    "cn_def": "早上",
    "en_def": "",
    "sentence": "Q: What does Amy do on Sundays? — A: She goes jogging in the park in the {{BLANK}}.",
    "cn": "艾美星期日做什麼？ — 她早上去公園慢跑。"
  },
  {
    "word": "afternoon",
    "pos": "n.",
    "cn_def": "下午",
    "en_def": "",
    "sentence": "Q: What do your classmates do on Fridays? — A: They play soccer in the {{BLANK}} after class.",
    "cn": "你的同學星期五做什麼？ — 他們下午下課後踢足球。"
  },
  {
    "word": "evening",
    "pos": "n.",
    "cn_def": "傍晚；晚上",
    "en_def": "",
    "sentence": "Q: What does your mom do on Mondays? — A: She takes a cooking class in the {{BLANK}}, after dinner.",
    "cn": "你媽媽星期一做什麼？ — 她傍晚吃完晚餐後去上烹飪課。"
  },
  {
    "word": "night",
    "pos": "n.",
    "cn_def": "夜晚；晚上",
    "en_def": "",
    "sentence": "Q: What do you do on Saturdays? — A: I watch movies with my family at {{BLANK}}.",
    "cn": "你星期六做什麼？ — 我晚上和家人一起看電影。"
  },
  {
    "word": "Tuesday",
    "pos": "n.",
    "cn_def": "星期二",
    "en_def": "",
    "sentence": "Q: When does Lisa have art class? — A: She has art class on {{BLANK}}.",
    "cn": "麗莎什麼時候上美術課？ — 她星期二上美術課。"
  },
  {
    "word": "Thursday",
    "pos": "n.",
    "cn_def": "星期四",
    "en_def": "",
    "sentence": "Q: When do you have music class? — A: I have music class on {{BLANK}}.",
    "cn": "你什麼時候上音樂課？ — 我星期四上音樂課。"
  },
  {
    "word": "Friday",
    "pos": "n.",
    "cn_def": "星期五",
    "en_def": "",
    "sentence": "Q: When do Ben and Tom have PE class? — A: They have PE class on {{BLANK}} afternoon.",
    "cn": "班和湯姆什麼時候上體育課？ — 他們星期五下午上體育課。"
  },
  {
    "word": "now",
    "pos": "adv.",
    "cn_def": "現在",
    "en_def": "",
    "sentence": "Q: When do we have math class? — A: We have it {{BLANK}}! Hurry up!",
    "cn": "我們什麼時候上數學課？ — 現在就是！快點！"
  },
  {
    "word": "soon",
    "pos": "adv.",
    "cn_def": "很快；不久",
    "en_def": "",
    "sentence": "Q: When does Tim have science class? — A: He has it {{BLANK}}, in five minutes.",
    "cn": "提姆什麼時候上自然課？ — 很快，再五分鐘就上了。"
  },
  {
    "word": "later",
    "pos": "adv.",
    "cn_def": "稍後；等一下",
    "en_def": "",
    "sentence": "Q: When does Amy have social studies class? — A: She has it {{BLANK}} today, after lunch.",
    "cn": "艾美什麼時候上社會課？ — 她今天稍後上，在午餐後。"
  },
  {
    "word": "early",
    "pos": "adv.",
    "cn_def": "早；早的",
    "en_def": "",
    "sentence": "Q: When do the students have Chinese class? — A: They have it {{BLANK}} in the morning, at eight.",
    "cn": "學生們什麼時候上國文課？ — 他們早上很早就上，在八點。"
  },
  {
    "word": "late",
    "pos": "adv.",
    "cn_def": "晚；晚的",
    "en_def": "",
    "sentence": "Q: When does your brother have English class? — A: He has it {{BLANK}} in the afternoon, at four o'clock.",
    "cn": "你弟弟什麼時候上英文課？ — 他下午很晚才上，在四點。"
  },
  {
    "word": "year",
    "pos": "n.",
    "cn_def": "年",
    "en_def": "",
    "sentence": "Q: When does your family go to Japan? — A: We go there every {{BLANK}}, in July.",
    "cn": "你家什麼時候去日本？ — 我們每年七月去那裡。"
  },
  {
    "word": "month",
    "pos": "n.",
    "cn_def": "月；月份",
    "en_def": "",
    "sentence": "Q: When does your aunt visit you? — A: She visits us on the first day of every {{BLANK}}.",
    "cn": "你阿姨什麼時候來看你們？ — 她每個月的第一天來看我們。"
  },
  {
    "word": "once",
    "pos": "adv.",
    "cn_def": "一次",
    "en_def": "",
    "sentence": "Q: How often does Grandma call you? — A: She calls me {{BLANK}} a week, on Sunday night.",
    "cn": "奶奶多久打電話給你一次？ — 她一週打一次，在星期日晚上。"
  },
  {
    "word": "tonight",
    "pos": "adv.",
    "cn_def": "今晚",
    "en_def": "",
    "sentence": "Q: When do we have the party? — A: We have it {{BLANK}}, at seven o'clock.",
    "cn": "我們什麼時候開派對？ — 今晚，七點。"
  },
  {
    "word": "next",
    "pos": "adj.",
    "cn_def": "下一個的",
    "en_def": "",
    "sentence": "Q: When is the English test? — A: It's {{BLANK}} Friday. Let's study together.",
    "cn": "英文考試是什麼時候？ — 下星期五，我們一起讀書吧。"
  },
  {
    "word": "last",
    "pos": "adj.",
    "cn_def": "上一個的；最近的",
    "en_def": "",
    "sentence": "Q: When was Ben's birthday party? — A: It was {{BLANK}} Sunday. It was fun.",
    "cn": "班的生日派對是什麼時候？ — 上星期日，很好玩。"
  },
  {
    "word": "ago",
    "pos": "adv.",
    "cn_def": "……以前",
    "en_def": "",
    "sentence": "Q: When was Tom in Japan? — A: He was there two years {{BLANK}}.",
    "cn": "湯姆什麼時候在日本？ — 他兩年前在那裡。"
  },
  {
    "word": "future",
    "pos": "n.",
    "cn_def": "未來",
    "en_def": "",
    "sentence": "Q: When can people live on the moon? — A: Maybe in the {{BLANK}}.",
    "cn": "人們什麼時候可以住在月球上？ — 也許在未來。"
  }
];

const MCQS = [
  {
    "q": "Q: What time is it? — A: It's seven thirty. It's ______ to go to school.【時間】",
    "options": [
      "half",
      "August",
      "time",
      "May"
    ],
    "answer": 2,
    "cn": "現在幾點？ — 七點半，該去上學了。",
    "vocabIndex": 0
  },
  {
    "q": "Q: What time is it? — A: Look at the ______ on the wall. It's five o'clock.【時鐘】",
    "options": [
      "tomorrow",
      "clock",
      "moment",
      "watch"
    ],
    "answer": 1,
    "cn": "現在幾點？ — 看牆上的時鐘，現在五點。",
    "vocabIndex": 1
  },
  {
    "q": "Q: What time is it, Ben? — A: Let me look at my ______. It's four o'clock.【手錶】",
    "options": [
      "hour",
      "today",
      "winter",
      "watch"
    ],
    "answer": 3,
    "cn": "班，現在幾點？ — 我看一下我的手錶，現在四點。",
    "vocabIndex": 2
  },
  {
    "q": "Q: What time is it now? — A: It's three ______. Let's go home.【……點鐘】",
    "options": [
      "o'clock",
      "once",
      "now",
      "late"
    ],
    "answer": 0,
    "cn": "現在幾點？ — 三點整，我們回家吧。",
    "vocabIndex": 3
  },
  {
    "q": "Q: What time is it now? — A: It's ______ past six. Dinner is ready.【一半；半小時】",
    "options": [
      "yesterday",
      "July",
      "half",
      "day"
    ],
    "answer": 2,
    "cn": "現在幾點？ — 六點半，晚餐準備好了。",
    "vocabIndex": 4
  },
  {
    "q": "Q: What time is it? — A: It's a ______ past two. (2:15)【十五分鐘；四分之一】",
    "options": [
      "August",
      "quarter",
      "noon",
      "day"
    ],
    "answer": 1,
    "cn": "現在幾點？ — 兩點十五分。",
    "vocabIndex": 5
  },
  {
    "q": "Q: What time is it? — A: It's ten ______ eight. (8:10) We are late!【（時間）超過；過了】",
    "options": [
      "behind",
      "around",
      "inside",
      "past"
    ],
    "answer": 3,
    "cn": "現在幾點？ — 八點十分，我們遲到了！",
    "vocabIndex": 6
  },
  {
    "q": "Q: What time is it in Taipei now? — A: It's 7 ______ People are going to work.【上午（用在時間後）】",
    "options": [
      "a.m.",
      "p.m.",
      "Mrs.",
      "Mr."
    ],
    "answer": 0,
    "cn": "台北現在幾點？ — 上午七點，人們正要去上班。",
    "vocabIndex": 7
  },
  {
    "q": "Q: What time is it? — A: It's 4 ______ School is over.【下午（用在時間後）】",
    "options": [
      "a.m.",
      "Mrs.",
      "p.m.",
      "Mr."
    ],
    "answer": 2,
    "cn": "現在幾點？ — 下午四點，放學了。",
    "vocabIndex": 8
  },
  {
    "q": "Q: What time is it? — A: It's twelve. It's ______. Let's have lunch.【中午】",
    "options": [
      "noon",
      "quarter",
      "December",
      "January"
    ],
    "answer": 0,
    "cn": "現在幾點？ — 十二點，中午了，我們吃午餐吧。",
    "vocabIndex": 9
  },
  {
    "q": "Q: What time is it? — A: It's ______ ten o'clock! Go to bed now.【已經】",
    "options": [
      "ago",
      "already",
      "early",
      "tonight"
    ],
    "answer": 1,
    "cn": "現在幾點？ — 已經十點了！現在去睡覺。",
    "vocabIndex": 10
  },
  {
    "q": "Q: What time is it? — A: It's eleven. We have one ______ before lunch.【小時】",
    "options": [
      "November",
      "December",
      "day",
      "hour"
    ],
    "answer": 3,
    "cn": "現在幾點？ — 十一點，午餐前我們還有一個小時。",
    "vocabIndex": 11
  },
  {
    "q": "Q: What time is it? — A: It's 7:55. The bus comes in five ______.【分鐘】",
    "options": [
      "minutes",
      "seconds",
      "February",
      "December"
    ],
    "answer": 0,
    "cn": "現在幾點？ — 七點五十五分，公車五分鐘後來。",
    "vocabIndex": 12
  },
  {
    "q": "Q: What time is it? — A: It's 11:59:50. Only ten ______ to the new year!【秒】",
    "options": [
      "minutes",
      "seconds",
      "morning",
      "Monday"
    ],
    "answer": 1,
    "cn": "現在幾點？ — 十一點五十九分五十秒，再十秒就新年了！",
    "vocabIndex": 13
  },
  {
    "q": "Q: What time is it, Mom? — A: Wait a ______. I can't find my phone.【片刻；一會兒】",
    "options": [
      "June",
      "September",
      "moment",
      "August"
    ],
    "answer": 2,
    "cn": "媽，現在幾點？ — 等一下，我找不到我的手機。",
    "vocabIndex": 14
  },
  {
    "q": "Q: What day is it today? — A: It's ______. A new week starts today.【星期一】",
    "options": [
      "Friday",
      "Tomorrow",
      "Clock",
      "Monday"
    ],
    "answer": 3,
    "cn": "今天星期幾？ — 今天星期一，新的一週從今天開始。",
    "vocabIndex": 15
  },
  {
    "q": "Q: What day is it today? — A: It's ______. It's the middle of the week.【星期三】",
    "options": [
      "July",
      "Winter",
      "Wednesday",
      "Year"
    ],
    "answer": 2,
    "cn": "今天星期幾？ — 今天星期三，是一週的中間。",
    "vocabIndex": 16
  },
  {
    "q": "Q: What day is it today? — A: ______ is Friday. We have a test.【今天】",
    "options": [
      "Season",
      "Today",
      "Month",
      "January"
    ],
    "answer": 1,
    "cn": "今天星期幾？ — 今天星期五，我們有考試。",
    "vocabIndex": 17
  },
  {
    "q": "Q: What day is it today? — A: It's Friday. ______ is Saturday. No school!【明天】",
    "options": [
      "Tomorrow",
      "Year",
      "Time",
      "Winter"
    ],
    "answer": 0,
    "cn": "今天星期幾？ — 今天星期五，明天星期六，不用上學！",
    "vocabIndex": 18
  },
  {
    "q": "Q: What day is it today? — A: It's Monday. ______ was Sunday.【昨天】",
    "options": [
      "June",
      "August",
      "Week",
      "Yesterday"
    ],
    "answer": 3,
    "cn": "今天星期幾？ — 今天星期一，昨天是星期日。",
    "vocabIndex": 19
  },
  {
    "q": "Q: What day is it today? — A: It's Sunday. It's my favorite ______ of the week.【日子；天】",
    "options": [
      "moment",
      "weekend",
      "day",
      "May"
    ],
    "answer": 2,
    "cn": "今天星期幾？ — 今天星期日，這是我一週中最喜歡的一天。",
    "vocabIndex": 20
  },
  {
    "q": "Q: What day is it today? — A: It's Sunday. It's the first day of the ______.【星期；週】",
    "options": [
      "Friday",
      "clock",
      "Wednesday",
      "week"
    ],
    "answer": 3,
    "cn": "今天星期幾？ — 今天星期日，是一週的第一天。",
    "vocabIndex": 21
  },
  {
    "q": "Q: When is New Year's Day? — A: It's on ______ 1st.【一月】",
    "options": [
      "January",
      "Thursday",
      "Moment",
      "Autumn"
    ],
    "answer": 0,
    "cn": "元旦是什麼時候？ — 在一月一日。",
    "vocabIndex": 22
  },
  {
    "q": "Q: When is Valentine's Day? — A: It's on ______ 14th.【二月】",
    "options": [
      "Autumn",
      "February",
      "January",
      "Night"
    ],
    "answer": 1,
    "cn": "情人節是什麼時候？ — 在二月十四日。",
    "vocabIndex": 23
  },
  {
    "q": "Q: When is your sister's sixteenth birthday? — A: It's in ______. She wants a big cake.【三月】",
    "options": [
      "March",
      "April",
      "Friday",
      "Season"
    ],
    "answer": 0,
    "cn": "你姊姊的十六歲生日是什麼時候？ — 在三月，她想要一個大蛋糕。",
    "vocabIndex": 24
  },
  {
    "q": "Q: When is Children's Day in Taiwan? — A: It's on ______ 4th.【四月】",
    "options": [
      "Noon",
      "Night",
      "October",
      "April"
    ],
    "answer": 3,
    "cn": "台灣的兒童節是什麼時候？ — 在四月四日。",
    "vocabIndex": 25
  },
  {
    "q": "Q: When is Mother's Day? — A: It's on the second Sunday in ______.【五月】",
    "options": [
      "Half",
      "Noon",
      "May",
      "July"
    ],
    "answer": 2,
    "cn": "母親節是什麼時候？ — 在五月的第二個星期日。",
    "vocabIndex": 26
  },
  {
    "q": "Q: When is the Dragon Boat Festival this year? — A: It's in ______. We eat rice dumplings.【六月】",
    "options": [
      "Night",
      "June",
      "Noon",
      "April"
    ],
    "answer": 1,
    "cn": "今年端午節是什麼時候？ — 在六月，我們吃粽子。",
    "vocabIndex": 27
  },
  {
    "q": "Q: When is your thirteenth birthday? — A: It's in ______, in the summer vacation.【七月】",
    "options": [
      "July",
      "September",
      "Tuesday",
      "Monday"
    ],
    "answer": 0,
    "cn": "你的十三歲生日是什麼時候？ — 在七月，在暑假期間。",
    "vocabIndex": 28
  },
  {
    "q": "Q: When is Father's Day in Taiwan? — A: It's on ______ 8th.【八月】",
    "options": [
      "March",
      "August",
      "Yesterday",
      "Wednesday"
    ],
    "answer": 1,
    "cn": "台灣的父親節是什麼時候？ — 在八月八日。",
    "vocabIndex": 29
  },
  {
    "q": "Q: When is Teacher's Day? — A: It's on ______ 28th.【九月】",
    "options": [
      "January",
      "Thursday",
      "Weekend",
      "September"
    ],
    "answer": 3,
    "cn": "教師節是什麼時候？ — 在九月二十八日。",
    "vocabIndex": 30
  },
  {
    "q": "Q: When is Halloween? — A: It's on ______ 31st.【十月】",
    "options": [
      "Weekend",
      "July",
      "October",
      "Wednesday"
    ],
    "answer": 2,
    "cn": "萬聖節是什麼時候？ — 在十月三十一日。",
    "vocabIndex": 31
  },
  {
    "q": "Q: When is Thanksgiving in America? — A: It's in ______. People eat a big dinner.【十一月】",
    "options": [
      "October",
      "November",
      "March",
      "September"
    ],
    "answer": 1,
    "cn": "美國的感恩節是什麼時候？ — 在十一月，人們吃一頓大餐。",
    "vocabIndex": 32
  },
  {
    "q": "Q: When is Christmas? — A: It's on ______ 25th.【十二月】",
    "options": [
      "Noon",
      "July",
      "December",
      "Sunday"
    ],
    "answer": 2,
    "cn": "聖誕節是什麼時候？ — 在十二月二十五日。",
    "vocabIndex": 33
  },
  {
    "q": "Q: When is your birthday? — A: It's in summer. Summer is my favorite ______.【季節】",
    "options": [
      "June",
      "moment",
      "September",
      "season"
    ],
    "answer": 3,
    "cn": "你的生日是什麼時候？ — 在夏天，夏天是我最喜歡的季節。",
    "vocabIndex": 34
  },
  {
    "q": "Q: When is Sports Day? — A: It's in ______, in April. The flowers are beautiful.【春天】",
    "options": [
      "spring",
      "morning",
      "evening",
      "Tuesday"
    ],
    "answer": 0,
    "cn": "運動會是什麼時候？ — 在春天，在四月。花很漂亮。",
    "vocabIndex": 35
  },
  {
    "q": "Q: When is your brother's eighteenth birthday? — A: It's in ______, in August. It's very hot.【夏天】",
    "options": [
      "afternoon",
      "summer",
      "clock",
      "August"
    ],
    "answer": 1,
    "cn": "你哥哥的十八歲生日是什麼時候？ — 在夏天，在八月。天氣很熱。",
    "vocabIndex": 36
  },
  {
    "q": "Q: When is the Moon Festival? — A: It's in ______, in September or October.【秋天】",
    "options": [
      "Tuesday",
      "season",
      "January",
      "autumn"
    ],
    "answer": 3,
    "cn": "中秋節是什麼時候？ — 在秋天，在九月或十月。",
    "vocabIndex": 37
  },
  {
    "q": "Q: When is Chinese New Year? — A: It's in ______, in January or February.【冬天】",
    "options": [
      "today",
      "week",
      "winter",
      "night"
    ],
    "answer": 2,
    "cn": "農曆新年是什麼時候？ — 在冬天，在一月或二月。",
    "vocabIndex": 38
  },
  {
    "q": "Q: What does Tom do on weekends? — A: He plays basketball on ______ mornings.【星期六】",
    "options": [
      "Saturday",
      "October",
      "January",
      "Moment"
    ],
    "answer": 0,
    "cn": "湯姆週末做什麼？ — 他星期六早上打籃球。",
    "vocabIndex": 39
  },
  {
    "q": "Q: What do you and your family do on weekends? — A: We go to church on ______.【星期日】",
    "options": [
      "Half",
      "Yesterday",
      "September",
      "Sunday"
    ],
    "answer": 3,
    "cn": "你和你的家人週末做什麼？ — 我們星期日去教會。",
    "vocabIndex": 40
  },
  {
    "q": "Q: What does your dad do on Saturdays? — A: He doesn't work on the ______. He sleeps late.【週末】",
    "options": [
      "day",
      "afternoon",
      "weekend",
      "hour"
    ],
    "answer": 2,
    "cn": "你爸爸星期六做什麼？ — 他週末不用工作，他睡得很晚。",
    "vocabIndex": 41
  },
  {
    "q": "Q: What does Amy do on Sundays? — A: She goes jogging in the park in the ______.【早上】",
    "options": [
      "evening",
      "morning",
      "spring",
      "February"
    ],
    "answer": 1,
    "cn": "艾美星期日做什麼？ — 她早上去公園慢跑。",
    "vocabIndex": 42
  },
  {
    "q": "Q: What do your classmates do on Fridays? — A: They play soccer in the ______ after class.【下午】",
    "options": [
      "afternoon",
      "half",
      "month",
      "yesterday"
    ],
    "answer": 0,
    "cn": "你的同學星期五做什麼？ — 他們下午下課後踢足球。",
    "vocabIndex": 43
  },
  {
    "q": "Q: What does your mom do on Mondays? — A: She takes a cooking class in the ______, after dinner.【傍晚；晚上】",
    "options": [
      "morning",
      "spring",
      "hour",
      "evening"
    ],
    "answer": 3,
    "cn": "你媽媽星期一做什麼？ — 她傍晚吃完晚餐後去上烹飪課。",
    "vocabIndex": 44
  },
  {
    "q": "Q: What do you do on Saturdays? — A: I watch movies with my family at ______.【夜晚；晚上】",
    "options": [
      "week",
      "September",
      "night",
      "season"
    ],
    "answer": 2,
    "cn": "你星期六做什麼？ — 我晚上和家人一起看電影。",
    "vocabIndex": 45
  },
  {
    "q": "Q: When does Lisa have art class? — A: She has art class on ______.【星期二】",
    "options": [
      "Tuesday",
      "Quarter",
      "October",
      "Day"
    ],
    "answer": 0,
    "cn": "麗莎什麼時候上美術課？ — 她星期二上美術課。",
    "vocabIndex": 46
  },
  {
    "q": "Q: When do you have music class? — A: I have music class on ______.【星期四】",
    "options": [
      "Weekend",
      "Thursday",
      "Afternoon",
      "July"
    ],
    "answer": 1,
    "cn": "你什麼時候上音樂課？ — 我星期四上音樂課。",
    "vocabIndex": 47
  },
  {
    "q": "Q: When do Ben and Tom have PE class? — A: They have PE class on ______ afternoon.【星期五】",
    "options": [
      "Friday",
      "Weekend",
      "Tomorrow",
      "Yesterday"
    ],
    "answer": 0,
    "cn": "班和湯姆什麼時候上體育課？ — 他們星期五下午上體育課。",
    "vocabIndex": 48
  },
  {
    "q": "Q: When do we have math class? — A: We have it ______! Hurry up!【現在】",
    "options": [
      "later",
      "early",
      "o'clock",
      "now"
    ],
    "answer": 3,
    "cn": "我們什麼時候上數學課？ — 現在就是！快點！",
    "vocabIndex": 49
  },
  {
    "q": "Q: When does Tim have science class? — A: He has it ______, in five minutes.【很快；不久】",
    "options": [
      "ago",
      "soon",
      "tonight",
      "early"
    ],
    "answer": 1,
    "cn": "提姆什麼時候上自然課？ — 很快，再五分鐘就上了。",
    "vocabIndex": 50
  },
  {
    "q": "Q: When does Amy have social studies class? — A: She has it ______ today, after lunch.【稍後；等一下】",
    "options": [
      "late",
      "o'clock",
      "later",
      "now"
    ],
    "answer": 2,
    "cn": "艾美什麼時候上社會課？ — 她今天稍後上，在午餐後。",
    "vocabIndex": 51
  },
  {
    "q": "Q: When do the students have Chinese class? — A: They have it ______ in the morning, at eight.【早；早的】",
    "options": [
      "soon",
      "early",
      "ago",
      "o'clock"
    ],
    "answer": 1,
    "cn": "學生們什麼時候上國文課？ — 他們早上很早就上，在八點。",
    "vocabIndex": 52
  },
  {
    "q": "Q: When does your brother have English class? — A: He has it ______ in the afternoon, at four o'clock.【晚；晚的】",
    "options": [
      "early",
      "now",
      "o'clock",
      "late"
    ],
    "answer": 3,
    "cn": "你弟弟什麼時候上英文課？ — 他下午很晚才上，在四點。",
    "vocabIndex": 53
  },
  {
    "q": "Q: When does your family go to Japan? — A: We go there every ______, in July.【年】",
    "options": [
      "year",
      "season",
      "yesterday",
      "June"
    ],
    "answer": 0,
    "cn": "你家什麼時候去日本？ — 我們每年七月去那裡。",
    "vocabIndex": 54
  },
  {
    "q": "Q: When does your aunt visit you? — A: She visits us on the first day of every ______.【月；月份】",
    "options": [
      "season",
      "hour",
      "month",
      "May"
    ],
    "answer": 2,
    "cn": "你阿姨什麼時候來看你們？ — 她每個月的第一天來看我們。",
    "vocabIndex": 55
  },
  {
    "q": "Q: How often does Grandma call you? — A: She calls me ______ a week, on Sunday night.【一次】",
    "options": [
      "later",
      "early",
      "now",
      "once"
    ],
    "answer": 3,
    "cn": "奶奶多久打電話給你一次？ — 她一週打一次，在星期日晚上。",
    "vocabIndex": 56
  },
  {
    "q": "Q: When do we have the party? — A: We have it ______, at seven o'clock.【今晚】",
    "options": [
      "later",
      "tonight",
      "already",
      "o'clock"
    ],
    "answer": 1,
    "cn": "我們什麼時候開派對？ — 今晚，七點。",
    "vocabIndex": 57
  },
  {
    "q": "Q: When is the English test? — A: It's ______ Friday. Let's study together.【下一個的】",
    "options": [
      "next",
      "last",
      "thirsty",
      "sure"
    ],
    "answer": 0,
    "cn": "英文考試是什麼時候？ — 下星期五，我們一起讀書吧。",
    "vocabIndex": 58
  },
  {
    "q": "Q: When was Ben's birthday party? — A: It was ______ Sunday. It was fun.【上一個的；最近的】",
    "options": [
      "next",
      "brown",
      "last",
      "clear"
    ],
    "answer": 2,
    "cn": "班的生日派對是什麼時候？ — 上星期日，很好玩。",
    "vocabIndex": 59
  },
  {
    "q": "Q: When was Tom in Japan? — A: He was there two years ______.【……以前】",
    "options": [
      "now",
      "ago",
      "already",
      "late"
    ],
    "answer": 1,
    "cn": "湯姆什麼時候在日本？ — 他兩年前在那裡。",
    "vocabIndex": 60
  },
  {
    "q": "Q: When can people live on the moon? — A: Maybe in the ______.【未來】",
    "options": [
      "noon",
      "tomorrow",
      "today",
      "future"
    ],
    "answer": 3,
    "cn": "人們什麼時候可以住在月球上？ — 也許在未來。",
    "vocabIndex": 61
  }
];

const LOOKUP = {
  "mr.": {
    "pos": "abbr.",
    "en_def": "",
    "cn_def": "先生（加姓）"
  },
  "mrs.": {
    "pos": "abbr.",
    "en_def": "",
    "cn_def": "太太"
  },
  "last": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "最後的"
  },
  "time": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "時間"
  },
  "clock": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "時鐘"
  },
  "watch": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "手錶"
  },
  "o'clock": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "……點鐘"
  },
  "half": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "一半；半小時"
  },
  "quarter": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "十五分鐘；四分之一"
  },
  "past": {
    "pos": "prep.",
    "en_def": "",
    "cn_def": "（時間）超過；過了"
  },
  "a.m.": {
    "pos": "abbr.",
    "en_def": "",
    "cn_def": "上午（用在時間後）"
  },
  "p.m.": {
    "pos": "abbr.",
    "en_def": "",
    "cn_def": "下午（用在時間後）"
  },
  "noon": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "中午"
  },
  "already": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "已經"
  },
  "hour": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "小時"
  },
  "minutes": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "分鐘"
  },
  "seconds": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "秒"
  },
  "moment": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "片刻；一會兒"
  },
  "monday": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "星期一"
  },
  "wednesday": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "星期三"
  },
  "today": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "今天"
  },
  "tomorrow": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "明天"
  },
  "yesterday": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "昨天"
  },
  "day": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "日子；天"
  },
  "week": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "星期；週"
  },
  "january": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "一月"
  },
  "february": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "二月"
  },
  "march": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "三月"
  },
  "april": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "四月"
  },
  "may": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "五月"
  },
  "june": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "六月"
  },
  "july": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "七月"
  },
  "august": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "八月"
  },
  "september": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "九月"
  },
  "october": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "十月"
  },
  "november": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "十一月"
  },
  "december": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "十二月"
  },
  "season": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "季節"
  },
  "spring": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "春天"
  },
  "summer": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "夏天"
  },
  "autumn": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "秋天"
  },
  "winter": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "冬天"
  },
  "saturday": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "星期六"
  },
  "sunday": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "星期日"
  },
  "weekend": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "週末"
  },
  "morning": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "早上"
  },
  "afternoon": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "下午"
  },
  "evening": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "傍晚；晚上"
  },
  "night": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "夜晚；晚上"
  },
  "tuesday": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "星期二"
  },
  "thursday": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "星期四"
  },
  "friday": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "星期五"
  },
  "now": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "現在"
  },
  "soon": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "很快；不久"
  },
  "later": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "稍後；等一下"
  },
  "early": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "早；早的"
  },
  "late": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "晚；晚的"
  },
  "year": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "年"
  },
  "month": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "月；月份"
  },
  "once": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "一次"
  },
  "tonight": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "今晚"
  },
  "next": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "下一個的"
  },
  "ago": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "……以前"
  },
  "future": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "未來"
  },
  "thirsty": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "口渴的"
  },
  "brown": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "棕色（的）"
  },
  "clear": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "晴朗的；清澈的"
  },
  "inside": {
    "pos": "prep.",
    "en_def": "",
    "cn_def": "在…內部"
  },
  "behind": {
    "pos": "prep.",
    "en_def": "",
    "cn_def": "在…後面"
  },
  "around": {
    "pos": "prep.",
    "en_def": "",
    "cn_def": "在…四周"
  },
  "sure": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "確定的"
  }
};

const EXTRA_GLOSSES = {};
