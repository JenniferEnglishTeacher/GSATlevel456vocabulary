// Topic 5 Subunit 5 Quiz Data: Procrastination & Habits 拖延與習慣
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T05 S05 - Procrastination & Habits 拖延與習慣",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "procrastinate",
    "pos": "v.",
    "cn_def": "拖延",
    "en_def": "to delay doing something you should do",
    "sentence": "I often {{BLANK}} when I have a big essay to write, so I now break it into small parts and do one each day.",
    "cn": "我有一篇大論文要寫時常常會拖延,所以現在我把它分成小部分,每天完成一部分。"
  },
  {
    "word": "procrastination",
    "pos": "n.",
    "cn_def": "拖延(症)",
    "en_def": "the habit of delaying things you should do",
    "sentence": "{{BLANK}} is a common problem among students, and it often leads to stress the night before a deadline.",
    "cn": "拖延是學生常見的問題,它常常導致截止日前一晚壓力很大。"
  },
  {
    "word": "postpone",
    "pos": "v.",
    "cn_def": "延期;延後",
    "en_def": "to move an event to a later time",
    "sentence": "The school decided to {{BLANK}} the sports day because of the typhoon, and students were happy to have an extra week to practise.",
    "cn": "學校因為颱風決定延後運動會,學生們很高興多了一週可以練習。"
  },
  {
    "word": "delay",
    "pos": "v.",
    "cn_def": "延遲;耽擱",
    "en_def": "to make something happen later than planned",
    "sentence": "If you {{BLANK}} starting your project, you will have less time to fix mistakes, and the result may disappoint you.",
    "cn": "如果你延遲開始你的專題,你修正錯誤的時間就會變少,結果可能讓你失望。"
  },
  {
    "word": "habit",
    "pos": "n.",
    "cn_def": "習慣",
    "en_def": "something you do regularly, often without thinking",
    "sentence": "Checking her phone first thing in the morning became a bad {{BLANK}}, so Lucy now keeps it outside her bedroom.",
    "cn": "一早醒來就查看手機成了一個壞習慣,所以露西現在把手機放在臥室外面。"
  },
  {
    "word": "habitual",
    "pos": "adj.",
    "cn_def": "習慣性的",
    "en_def": "done often or regularly as a habit",
    "sentence": "He is a {{BLANK}} late-comer, and his teacher finally called his parents because he missed the first class every Monday.",
    "cn": "他是個習慣性遲到的人,老師最後打電話給他的父母,因為他每週一都錯過第一節課。"
  },
  {
    "word": "temptation",
    "pos": "n.",
    "cn_def": "誘惑",
    "en_def": "a strong wish to do something you should not do",
    "sentence": "The {{BLANK}} to play games was strong, but Kevin finished his maths homework first and then relaxed.",
    "cn": "打電動的誘惑很強,但凱文先完成數學作業,然後才放鬆。"
  },
  {
    "word": "tempt",
    "pos": "v.",
    "cn_def": "引誘;吸引",
    "en_def": "to make someone want to do something, often something wrong",
    "sentence": "The smell of fried chicken {{BLANK}} me to stop at the night market, although I had promised to eat healthily this week.",
    "cn": "炸雞的香味引誘我在夜市停下來,雖然我答應過這週要吃得健康。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "時間表;行程",
    "en_def": "a plan that lists times for activities",
    "sentence": "Making a weekly study {{BLANK}} helped me balance homework and basketball, and I felt much less stressed.",
    "cn": "擬定每週讀書時間表幫助我平衡作業和籃球,我覺得壓力小了很多。"
  },
  {
    "word": "timetable",
    "pos": "n.",
    "cn_def": "課表;時刻表",
    "en_def": "a list of times when classes or events happen",
    "sentence": "Our class {{BLANK}} changed this term, so now we have English first thing on Monday, which everyone finds hard.",
    "cn": "我們班這學期的課表改了,所以現在星期一第一節就是英文,大家都覺得很辛苦。"
  },
  {
    "word": "planner",
    "pos": "n.",
    "cn_def": "計畫本;記事本",
    "en_def": "a small book for writing plans and dates",
    "sentence": "I write all my tests and deadlines in a {{BLANK}}, and checking it every morning keeps me from forgetting anything.",
    "cn": "我把所有的考試和截止日期寫在計畫本裡,每天早上查看它讓我不會忘記任何事。"
  },
  {
    "word": "to-do list",
    "pos": "n.phr.",
    "cn_def": "待辦清單",
    "en_def": "a list of tasks you need to do",
    "sentence": "I make a {{BLANK}} every Sunday night, and crossing off each finished task gives me a nice feeling.",
    "cn": "我每個星期天晚上都會列一張待辦清單,每劃掉一項完成的事就讓我感覺很好。"
  },
  {
    "word": "reminder",
    "pos": "n.",
    "cn_def": "提醒(物)",
    "en_def": "something that helps you remember",
    "sentence": "I set a phone {{BLANK}} for my dentist appointment, because I had forgotten it twice before.",
    "cn": "我在手機上設定了看牙醫的提醒,因為我之前已經忘記過兩次了。"
  },
  {
    "word": "checklist",
    "pos": "n.",
    "cn_def": "檢查清單",
    "en_def": "a list of things to check or do",
    "sentence": "Before every trip, my mother uses a {{BLANK}} to pack, so we never forget passports or phone chargers.",
    "cn": "每次出遊前,我媽媽都用檢查清單打包,所以我們從不會忘記護照或手機充電器。"
  },
  {
    "word": "avoidance",
    "pos": "n.",
    "cn_def": "逃避;迴避",
    "en_def": "staying away from something you do not want to face",
    "sentence": "Playing games all night was just {{BLANK}}, because Tim did not want to think about his poor test result.",
    "cn": "整晚打電動只是一種逃避,因為提姆不想去想他很差的考試成績。"
  },
  {
    "word": "excuse",
    "pos": "n.",
    "cn_def": "藉口",
    "en_def": "a reason you give to explain a mistake or avoid something",
    "sentence": "Andy always has an {{BLANK}} for not doing his homework, but this time his teacher did not believe him.",
    "cn": "安迪總是有不寫作業的藉口,但這次老師不相信他了。"
  },
  {
    "word": "last-minute",
    "pos": "adj.",
    "cn_def": "最後一刻的;臨時的",
    "en_def": "done at the latest possible time",
    "sentence": "{{BLANK}} studying rarely works well, because your brain needs time and sleep to remember new information.",
    "cn": "臨時抱佛腳的讀書很少有好效果,因為大腦需要時間和睡眠來記住新資訊。"
  },
  {
    "word": "cram",
    "pos": "v.",
    "cn_def": "臨時抱佛腳;死記硬背",
    "en_def": "to study a lot in a short time before an exam",
    "sentence": "Many students {{BLANK}} the night before a test, but they often forget most of the information a week later.",
    "cn": "許多學生在考試前一晚死記硬背,但一週後他們往往忘了大部分的內容。"
  },
  {
    "word": "self-control",
    "pos": "n.",
    "cn_def": "自制力",
    "en_def": "the ability to control your feelings and actions",
    "sentence": "It takes {{BLANK}} to stop watching videos after one episode, so I ask my sister to hide the remote control.",
    "cn": "看完一集影片就停下來需要自制力,所以我請姊姊把遙控器藏起來。"
  },
  {
    "word": "streak",
    "pos": "n.",
    "cn_def": "連續紀錄",
    "en_def": "a series of successes or days in a row",
    "sentence": "I have a sixty-day {{BLANK}} on my language app, and I don't want to lose it, so I practise even on holidays.",
    "cn": "我在語言學習應用程式上有六十天的連續紀錄,我不想中斷,所以連假日也練習。"
  },
  {
    "word": "craving",
    "pos": "n.",
    "cn_def": "渴望;癮",
    "en_def": "a very strong wish for something, often food",
    "sentence": "Stress can give people a {{BLANK}} for sweet snacks, so I keep fruit on my desk during exam week.",
    "cn": "壓力會讓人渴望甜食,所以考試週時我在書桌上放水果。"
  },
  {
    "word": "idle",
    "pos": "adj.",
    "cn_def": "閒置的;無所事事的",
    "en_def": "not working or doing anything useful",
    "sentence": "Rather than sitting {{BLANK}} during the long summer holiday, Mia took a part-time job at a bookshop.",
    "cn": "米亞沒有在漫長的暑假裡無所事事,而是在一家書店找了份兼職工作。"
  },
  {
    "word": "dawdle",
    "pos": "v.",
    "cn_def": "磨蹭;拖拖拉拉",
    "en_def": "to move or act very slowly",
    "sentence": "If you {{BLANK}} on the way to school, you will miss the bus, and then you will be late for the test.",
    "cn": "如果你上學途中拖拖拉拉,你會錯過公車,然後考試就會遲到。"
  },
  {
    "word": "perfectionism",
    "pos": "n.",
    "cn_def": "完美主義",
    "en_def": "the need to make everything perfect",
    "sentence": "Her {{BLANK}} made her rewrite the first page ten times, so she never finished the rest of the story.",
    "cn": "她的完美主義讓她把第一頁重寫了十次,所以她一直沒寫完故事的其他部分。"
  },
  {
    "word": "perfectionist",
    "pos": "n.",
    "cn_def": "完美主義者",
    "en_def": "a person who wants everything to be perfect",
    "sentence": "As a {{BLANK}}, Leo spends hours on small details, but he sometimes misses deadlines because of this.",
    "cn": "身為完美主義者,里歐花好幾個小時在小細節上,但他有時因此錯過截止期限。"
  }
];

const MCQS = [
  {
    "q": "I often _____ when I have a big essay to write, so I now break it into small parts and do one each day.",
    "options": [
      "alienate",
      "reconsider",
      "reckon",
      "procrastinate"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "_____ is a common problem among students, and it often leads to stress the night before a deadline.",
    "options": [
      "psychiatrist",
      "procrastination",
      "proponent",
      "journaling"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The school decided to _____ the sports day because of the typhoon, and students were happy to have an extra week to practise.",
    "options": [
      "tremble",
      "refrain",
      "postpone",
      "accentuate"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "If you _____ starting your project, you will have less time to fix mistakes, and the result may disappoint you.",
    "options": [
      "delay",
      "persuade",
      "heed",
      "subdue"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Checking her phone first thing in the morning became a bad _____, so Lucy now keeps it outside her bedroom.",
    "options": [
      "self-care",
      "habit",
      "caution",
      "stomachache"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "He is a _____ late-comer, and his teacher finally called his parents because he missed the first class every Monday.",
    "options": [
      "palpable",
      "constructive",
      "dubious",
      "habitual"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The _____ to play games was strong, but Kevin finished his maths homework first and then relaxed.",
    "options": [
      "temptation",
      "mentality",
      "journaling",
      "determination"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The smell of fried chicken _____ me to stop at the night market, although I had promised to eat healthily this week.",
    "options": [
      "discourage",
      "ascertain",
      "tempt",
      "intervene"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Making a weekly study _____ helped me balance homework and basketball, and I felt much less stressed.",
    "options": [
      "heuristic",
      "contentment",
      "goal",
      "schedule"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Our class _____ changed this term, so now we have English first thing on Monday, which everyone finds hard.",
    "options": [
      "progress",
      "timetable",
      "positivity",
      "trade-off"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "I write all my tests and deadlines in a _____, and checking it every morning keeps me from forgetting anything.",
    "options": [
      "variance",
      "misconception",
      "planner",
      "reasoning"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "I make a _____ every Sunday night, and crossing off each finished task gives me a nice feeling.",
    "options": [
      "to-do list",
      "deep breathing",
      "confirmation bias",
      "immune system"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "I set a phone _____ for my dentist appointment, because I had forgotten it twice before.",
    "options": [
      "therapy",
      "positivity",
      "reminder",
      "effort"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Before every trip, my mother uses a _____ to pack, so we never forget passports or phone chargers.",
    "options": [
      "counsellor",
      "plight",
      "adversity",
      "checklist"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Playing games all night was just _____, because Tim did not want to think about his poor test result.",
    "options": [
      "avoidance",
      "grief",
      "psychiatrist",
      "pulse"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Andy always has an _____ for not doing his homework, but this time his teacher did not believe him.",
    "options": [
      "judgement",
      "excuse",
      "stomachache",
      "inspiration"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "_____ studying rarely works well, because your brain needs time and sleep to remember new information.",
    "options": [
      "lucid",
      "intuitive",
      "last-minute",
      "compulsory"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Many students _____ the night before a test, but they often forget most of the information a week later.",
    "options": [
      "forgo",
      "cram",
      "persuade",
      "overestimate"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "It takes _____ to stop watching videos after one episode, so I ask my sister to hide the remote control.",
    "options": [
      "adrenaline",
      "headache",
      "self-confidence",
      "self-control"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "I have a sixty-day _____ on my language app, and I don't want to lose it, so I practise even on holidays.",
    "options": [
      "streak",
      "self-confidence",
      "toll",
      "exhaustion"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Stress can give people a _____ for sweet snacks, so I keep fruit on my desk during exam week.",
    "options": [
      "pressure",
      "shame",
      "migraine",
      "craving"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Rather than sitting _____ during the long summer holiday, Mia took a part-time job at a bookshop.",
    "options": [
      "pronounced",
      "idle",
      "mediocre",
      "dependable"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "If you _____ on the way to school, you will miss the bus, and then you will be late for the test.",
    "options": [
      "alienate",
      "deprive",
      "dawdle",
      "revert"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Her _____ made her rewrite the first page ten times, so she never finished the rest of the story.",
    "options": [
      "perfectionism",
      "workout",
      "counsellor",
      "frustration"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "As a _____, Leo spends hours on small details, but he sometimes misses deadlines because of this.",
    "options": [
      "groupthink",
      "perfectionist",
      "determination",
      "mindset"
    ],
    "answer": 1,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "procrastinate": {
    "pos": "v.",
    "en_def": "to delay doing something you should do",
    "cn_def": "拖延"
  },
  "procrastination": {
    "pos": "n.",
    "en_def": "the habit of delaying things you should do",
    "cn_def": "拖延(症)"
  },
  "postpone": {
    "pos": "v.",
    "en_def": "to move an event to a later time",
    "cn_def": "延期;延後"
  },
  "delay": {
    "pos": "v.",
    "en_def": "to make something happen later than planned",
    "cn_def": "延遲;耽擱"
  },
  "habit": {
    "pos": "n.",
    "en_def": "something you do regularly, often without thinking",
    "cn_def": "習慣"
  },
  "habitual": {
    "pos": "adj.",
    "en_def": "done often or regularly as a habit",
    "cn_def": "習慣性的"
  },
  "temptation": {
    "pos": "n.",
    "en_def": "a strong wish to do something you should not do",
    "cn_def": "誘惑"
  },
  "tempt": {
    "pos": "v.",
    "en_def": "to make someone want to do something, often something wrong",
    "cn_def": "引誘;吸引"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a plan that lists times for activities",
    "cn_def": "時間表;行程"
  },
  "timetable": {
    "pos": "n.",
    "en_def": "a list of times when classes or events happen",
    "cn_def": "課表;時刻表"
  },
  "planner": {
    "pos": "n.",
    "en_def": "a small book for writing plans and dates",
    "cn_def": "計畫本;記事本"
  },
  "to-do list": {
    "pos": "n.phr.",
    "en_def": "a list of tasks you need to do",
    "cn_def": "待辦清單"
  },
  "reminder": {
    "pos": "n.",
    "en_def": "something that helps you remember",
    "cn_def": "提醒(物)"
  },
  "checklist": {
    "pos": "n.",
    "en_def": "a list of things to check or do",
    "cn_def": "檢查清單"
  },
  "avoidance": {
    "pos": "n.",
    "en_def": "staying away from something you do not want to face",
    "cn_def": "逃避;迴避"
  },
  "excuse": {
    "pos": "n.",
    "en_def": "a reason you give to explain a mistake or avoid something",
    "cn_def": "藉口"
  },
  "last-minute": {
    "pos": "adj.",
    "en_def": "done at the latest possible time",
    "cn_def": "最後一刻的;臨時的"
  },
  "cram": {
    "pos": "v.",
    "en_def": "to study a lot in a short time before an exam",
    "cn_def": "臨時抱佛腳;死記硬背"
  },
  "self-control": {
    "pos": "n.",
    "en_def": "the ability to control your feelings and actions",
    "cn_def": "自制力"
  },
  "streak": {
    "pos": "n.",
    "en_def": "a series of successes or days in a row",
    "cn_def": "連續紀錄"
  },
  "craving": {
    "pos": "n.",
    "en_def": "a very strong wish for something, often food",
    "cn_def": "渴望;癮"
  },
  "idle": {
    "pos": "adj.",
    "en_def": "not working or doing anything useful",
    "cn_def": "閒置的;無所事事的"
  },
  "dawdle": {
    "pos": "v.",
    "en_def": "to move or act very slowly",
    "cn_def": "磨蹭;拖拖拉拉"
  },
  "perfectionism": {
    "pos": "n.",
    "en_def": "the need to make everything perfect",
    "cn_def": "完美主義"
  },
  "perfectionist": {
    "pos": "n.",
    "en_def": "a person who wants everything to be perfect",
    "cn_def": "完美主義者"
  },
  "alienate": {
    "pos": "v.",
    "en_def": "to make someone feel unfriendly or not part of a group",
    "cn_def": "使疏遠"
  },
  "reconsider": {
    "pos": "v.",
    "en_def": "to think again about a decision",
    "cn_def": "重新考慮"
  },
  "reckon": {
    "pos": "v.",
    "en_def": "to think or believe",
    "cn_def": "認為;估計"
  },
  "psychiatrist": {
    "pos": "n.",
    "en_def": "a doctor who treats mental illness",
    "cn_def": "精神科醫師"
  },
  "proponent": {
    "pos": "n.",
    "en_def": "a person who supports an idea",
    "cn_def": "支持者;擁護者"
  },
  "journaling": {
    "pos": "n.",
    "en_def": "writing about your thoughts and feelings regularly",
    "cn_def": "寫日記;寫心情筆記"
  },
  "tremble": {
    "pos": "v.",
    "en_def": "to shake slightly because you are afraid or nervous",
    "cn_def": "顫抖"
  },
  "refrain": {
    "pos": "v.",
    "en_def": "to stop yourself from doing something",
    "cn_def": "克制;避免"
  },
  "accentuate": {
    "pos": "v.",
    "en_def": "to make something more noticeable",
    "cn_def": "強調;使突出"
  },
  "persuade": {
    "pos": "v.",
    "en_def": "to make someone agree to do something by giving reasons",
    "cn_def": "說服"
  },
  "heed": {
    "pos": "v.",
    "en_def": "to pay attention to advice or a warning",
    "cn_def": "聽從;留意"
  },
  "subdue": {
    "pos": "v.",
    "en_def": "to bring a strong feeling under control",
    "cn_def": "抑制;克制"
  },
  "self-care": {
    "pos": "n.",
    "en_def": "things you do to protect your own health and happiness",
    "cn_def": "自我照顧"
  },
  "caution": {
    "pos": "n.",
    "en_def": "care to avoid danger or mistakes",
    "cn_def": "謹慎;小心"
  },
  "stomachache": {
    "pos": "n.",
    "en_def": "a pain in your stomach",
    "cn_def": "胃痛;肚子痛"
  },
  "palpable": {
    "pos": "adj.",
    "en_def": "so strong that it can almost be felt",
    "cn_def": "明顯的;可感覺到的"
  },
  "constructive": {
    "pos": "adj.",
    "en_def": "helpful and useful, meant to improve something",
    "cn_def": "建設性的"
  },
  "dubious": {
    "pos": "adj.",
    "en_def": "not sure; probably not true or honest",
    "cn_def": "可疑的;半信半疑的"
  },
  "mentality": {
    "pos": "n.",
    "en_def": "a typical way of thinking",
    "cn_def": "心態;思維模式"
  },
  "determination": {
    "pos": "n.",
    "en_def": "not giving up even when something is difficult",
    "cn_def": "決心"
  },
  "discourage": {
    "pos": "v.",
    "en_def": "to make someone lose confidence or not want to do something",
    "cn_def": "使灰心;勸阻"
  },
  "ascertain": {
    "pos": "v.",
    "en_def": "to find out the truth about something",
    "cn_def": "查明;確定"
  },
  "intervene": {
    "pos": "v.",
    "en_def": "to get involved to stop or change a situation",
    "cn_def": "介入;干預"
  },
  "heuristic": {
    "pos": "n.",
    "en_def": "a simple rule that helps you decide quickly",
    "cn_def": "捷思法;經驗法則"
  },
  "contentment": {
    "pos": "n.",
    "en_def": "a quiet feeling of being happy and satisfied",
    "cn_def": "滿足"
  },
  "goal": {
    "pos": "n.",
    "en_def": "something you want to achieve",
    "cn_def": "目標"
  },
  "progress": {
    "pos": "n.",
    "en_def": "movement towards a goal or improvement",
    "cn_def": "進步;進展"
  },
  "positivity": {
    "pos": "n.",
    "en_def": "a hopeful and cheerful attitude",
    "cn_def": "正面態度;正能量"
  },
  "trade-off": {
    "pos": "n.",
    "en_def": "a balance between two things you cannot have together",
    "cn_def": "權衡;取捨"
  },
  "variance": {
    "pos": "n.",
    "en_def": "the amount by which things differ",
    "cn_def": "差異;變異"
  },
  "misconception": {
    "pos": "n.",
    "en_def": "a wrong idea or belief",
    "cn_def": "誤解;錯誤觀念"
  },
  "reasoning": {
    "pos": "n.",
    "en_def": "the process of thinking about something in a logical way",
    "cn_def": "推理;論證"
  },
  "deep breathing": {
    "pos": "n.phr.",
    "en_def": "taking slow, full breaths to calm down",
    "cn_def": "深呼吸"
  },
  "confirmation bias": {
    "pos": "n.phr.",
    "en_def": "the habit of only noticing facts that agree with what you already believe",
    "cn_def": "確認偏誤"
  },
  "immune system": {
    "pos": "n.phr.",
    "en_def": "the parts of the body that fight illness",
    "cn_def": "免疫系統"
  },
  "therapy": {
    "pos": "n.",
    "en_def": "treatment that helps someone feel better",
    "cn_def": "治療"
  },
  "effort": {
    "pos": "n.",
    "en_def": "the hard work you use to do something",
    "cn_def": "努力"
  },
  "counsellor": {
    "pos": "n.",
    "en_def": "a person trained to listen and give advice about problems",
    "cn_def": "輔導員;諮商師"
  },
  "plight": {
    "pos": "n.",
    "en_def": "a difficult or sad situation",
    "cn_def": "困境"
  },
  "adversity": {
    "pos": "n.",
    "en_def": "a very difficult situation",
    "cn_def": "逆境"
  },
  "grief": {
    "pos": "n.",
    "en_def": "great sadness, especially when someone dies",
    "cn_def": "悲痛"
  },
  "pulse": {
    "pos": "n.",
    "en_def": "how fast your heart is beating, felt at the wrist",
    "cn_def": "脈搏"
  },
  "judgement": {
    "pos": "n.",
    "en_def": "the ability to make good decisions",
    "cn_def": "判斷(力)"
  },
  "inspiration": {
    "pos": "n.",
    "en_def": "something that gives you new ideas or makes you want to do something",
    "cn_def": "靈感;鼓舞"
  },
  "lucid": {
    "pos": "adj.",
    "en_def": "clear and easy to understand",
    "cn_def": "清晰易懂的"
  },
  "intuitive": {
    "pos": "adj.",
    "en_def": "based on feelings rather than facts; easy to understand",
    "cn_def": "直覺的;直觀的"
  },
  "compulsory": {
    "pos": "adj.",
    "en_def": "required by law or rules",
    "cn_def": "義務的;強制的"
  },
  "forgo": {
    "pos": "v.",
    "en_def": "to choose not to have something you would like",
    "cn_def": "放棄;摒棄"
  },
  "overestimate": {
    "pos": "v.",
    "en_def": "to think something is bigger or better than it is",
    "cn_def": "高估"
  },
  "adrenaline": {
    "pos": "n.",
    "en_def": "a body chemical that gives energy when you are scared or excited",
    "cn_def": "腎上腺素"
  },
  "headache": {
    "pos": "n.",
    "en_def": "a pain in your head",
    "cn_def": "頭痛"
  },
  "self-confidence": {
    "pos": "n.",
    "en_def": "belief in your own abilities",
    "cn_def": "自信心"
  },
  "toll": {
    "pos": "n.",
    "en_def": "the bad effect that something has over time",
    "cn_def": "損害;代價"
  },
  "exhaustion": {
    "pos": "n.",
    "en_def": "the state of being extremely tired",
    "cn_def": "筋疲力盡"
  },
  "pressure": {
    "pos": "n.",
    "en_def": "a feeling of worry caused by too much to do",
    "cn_def": "壓力"
  },
  "shame": {
    "pos": "n.",
    "en_def": "a painful feeling that you have done something wrong or silly",
    "cn_def": "羞愧"
  },
  "migraine": {
    "pos": "n.",
    "en_def": "a very bad headache that can make you feel sick",
    "cn_def": "偏頭痛"
  },
  "pronounced": {
    "pos": "adj.",
    "en_def": "very noticeable",
    "cn_def": "明顯的"
  },
  "mediocre": {
    "pos": "adj.",
    "en_def": "not very good; only average",
    "cn_def": "平庸的;普通的"
  },
  "dependable": {
    "pos": "adj.",
    "en_def": "able to be trusted",
    "cn_def": "可靠的"
  },
  "deprive": {
    "pos": "v.",
    "en_def": "to take something important away from someone",
    "cn_def": "剝奪"
  },
  "revert": {
    "pos": "v.",
    "en_def": "to go back to a previous state or habit",
    "cn_def": "恢復;回到(原狀)"
  },
  "workout": {
    "pos": "n.",
    "en_def": "a session of physical exercise",
    "cn_def": "運動;健身"
  },
  "frustration": {
    "pos": "n.",
    "en_def": "the feeling of being upset because you cannot do something",
    "cn_def": "挫折感"
  },
  "groupthink": {
    "pos": "n.",
    "en_def": "when a group agrees too quickly and ignores other ideas",
    "cn_def": "團體迷思"
  },
  "mindset": {
    "pos": "n.",
    "en_def": "a person's usual way of thinking",
    "cn_def": "心態;思維方式"
  }
};

const EXTRA_GLOSSES = {};
