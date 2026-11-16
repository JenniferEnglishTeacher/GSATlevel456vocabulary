// Topic 5 Subunit 9 Quiz Data: Academic Words 學術單字 2 (dubious – subconscious)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T05 S09 - Academic Words 學術單字 2 (dubious – subconscious)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "dubious",
    "pos": "adj.",
    "cn_def": "可疑的;半信半疑的",
    "en_def": "not sure; probably not true or honest",
    "sentence": "I was {{BLANK}} about the advert that promised to cure stress in one day, so I did not buy the expensive pills.",
    "cn": "我對那個保證一天就能消除壓力的廣告感到半信半疑,所以我沒有買那昂貴的藥丸。"
  },
  {
    "word": "erroneous",
    "pos": "adj.",
    "cn_def": "錯誤的",
    "en_def": "wrong; not correct",
    "sentence": "It is an {{BLANK}} belief that stress is always bad, because a small amount can help people perform better.",
    "cn": "認為壓力總是不好的是一種錯誤的觀念,因為少量的壓力能幫助人表現得更好。"
  },
  {
    "word": "evoke",
    "pos": "v.",
    "cn_def": "喚起;引起",
    "en_def": "to bring a feeling or memory into your mind",
    "sentence": "The smell of my grandmother's soup {{BLANK}} happy memories, and it always makes me feel calm and safe.",
    "cn": "奶奶煮的湯的味道喚起美好的回憶,它總是讓我感到平靜和安心。"
  },
  {
    "word": "exaggerate",
    "pos": "v.",
    "cn_def": "誇大",
    "en_def": "to describe something as bigger or worse than it is",
    "sentence": "People under stress often {{BLANK}} their problems, so talking to a friend can help them see things more clearly.",
    "cn": "處於壓力下的人常常誇大自己的問題,所以和朋友聊聊可以幫助他們看得更清楚。"
  },
  {
    "word": "excel",
    "pos": "v.",
    "cn_def": "擅長;表現優異",
    "en_def": "to be very good at something",
    "sentence": "Some students {{BLANK}} in exams, while others perform better in projects, so teachers should use different kinds of tests.",
    "cn": "有些學生在考試中表現優異,而有些人在專題中表現更好,所以老師應該使用不同類型的評量。"
  },
  {
    "word": "fulfil",
    "pos": "v.",
    "cn_def": "實現;履行",
    "en_def": "to do what you hoped or promised",
    "sentence": "He worked hard for three years, and he finally {{BLANK}} his dream of studying music in Vienna.",
    "cn": "他努力了三年,終於實現了到維也納學音樂的夢想。"
  },
  {
    "word": "indifferent",
    "pos": "adj.",
    "cn_def": "漠不關心的",
    "en_def": "not interested or caring",
    "sentence": "Some students seem {{BLANK}} to their grades, but they may simply be hiding their worries from others.",
    "cn": "有些學生對成績似乎漠不關心,但他們可能只是向別人隱藏自己的擔憂。"
  },
  {
    "word": "ingrained",
    "pos": "adj.",
    "cn_def": "根深蒂固的",
    "en_def": "so fixed that it is hard to change",
    "sentence": "Her habit of checking messages at night was so {{BLANK}} that it took months to break, but she now sleeps much better.",
    "cn": "她晚上查看訊息的習慣是如此根深蒂固,花了好幾個月才戒掉,但現在她睡得好多了。"
  },
  {
    "word": "instil",
    "pos": "v.",
    "cn_def": "灌輸;逐漸培養",
    "en_def": "to slowly make someone have a feeling or idea",
    "sentence": "Good coaches {{BLANK}} confidence in young players, and this belief helps them stay calm in difficult games.",
    "cn": "好教練會在年輕球員心中逐漸培養自信,而這份信念幫助他們在艱難的比賽中保持冷靜。"
  },
  {
    "word": "intervene",
    "pos": "v.",
    "cn_def": "介入;干預",
    "en_def": "to get involved to stop or change a situation",
    "sentence": "When two students started arguing loudly, the teacher had to {{BLANK}}, and she helped them talk about the problem calmly.",
    "cn": "兩個學生開始大聲爭吵時,老師必須介入,她幫助他們冷靜地討論問題。"
  },
  {
    "word": "intimidate",
    "pos": "v.",
    "cn_def": "使害怕;威嚇",
    "en_def": "to make someone feel frightened or less confident",
    "sentence": "Large crowds {{BLANK}} some speakers, so they practise in front of small groups first and slowly build their confidence.",
    "cn": "大批群眾會讓一些講者感到畏懼,所以他們先在小團體面前練習,慢慢建立自信。"
  },
  {
    "word": "lapse",
    "pos": "n.",
    "cn_def": "失誤;疏忽",
    "en_def": "a short time when you fail to do something well",
    "sentence": "A brief {{BLANK}} in concentration caused the driver to miss the red light, but luckily nobody was hurt.",
    "cn": "一時注意力疏失讓駕駛人沒注意到紅燈,但幸好沒有人受傷。"
  },
  {
    "word": "obsession",
    "pos": "n.",
    "cn_def": "著迷;執念",
    "en_def": "thinking about something all the time",
    "sentence": "His {{BLANK}} with perfect grades made him unhappy, so his parents told him that effort mattered more than scores.",
    "cn": "他對完美成績的執念讓他不快樂,所以他的父母告訴他努力比分數更重要。"
  },
  {
    "word": "overestimate",
    "pos": "v.",
    "cn_def": "高估",
    "en_def": "to think something is bigger or better than it is",
    "sentence": "Students often {{BLANK}} how much they can study in one night, and then they feel disappointed when they cannot finish.",
    "cn": "學生常常高估自己一個晚上能讀多少,結果讀不完時就感到失望。"
  },
  {
    "word": "ponder",
    "pos": "v.",
    "cn_def": "沉思;仔細考慮",
    "en_def": "to think carefully about something for a long time",
    "sentence": "She {{BLANK}} the job offer for a whole week, because it meant moving to a city where she knew nobody.",
    "cn": "她仔細考慮那份工作邀約整整一週,因為那代表她要搬到一個一個人都不認識的城市。"
  },
  {
    "word": "precipitate",
    "pos": "v.",
    "cn_def": "促成;使突然發生",
    "en_def": "to make something bad happen suddenly or sooner",
    "sentence": "Losing his job {{BLANK}} a difficult period in his life, but the support of his family helped him recover.",
    "cn": "失業促成了他人生中一段艱難的時期,但家人的支持幫助他重新振作。"
  },
  {
    "word": "preoccupied",
    "pos": "adj.",
    "cn_def": "心事重重的;全神貫注於",
    "en_def": "thinking so much about something that you ignore other things",
    "sentence": "Dad was {{BLANK}} with work problems during dinner, so he did not hear my news about the school prize.",
    "cn": "爸爸晚餐時滿腦子都是工作上的問題,所以沒聽到我得到學校獎項的消息。"
  },
  {
    "word": "presumption",
    "pos": "n.",
    "cn_def": "推定;假設",
    "en_def": "something you believe is true without proof",
    "sentence": "The {{BLANK}} that boys are better at maths is wrong, and it can discourage many talented girls.",
    "cn": "認為男生數學比較好的假設是錯的,而且會使許多有天分的女生灰心。"
  },
  {
    "word": "propensity",
    "pos": "n.",
    "cn_def": "傾向;習性",
    "en_def": "a natural tendency to behave in a certain way",
    "sentence": "Some people have a {{BLANK}} to worry, so they need to practise calming techniques more than others do.",
    "cn": "有些人天生有愛擔心的傾向,所以他們比別人更需要練習放鬆的技巧。"
  },
  {
    "word": "proponent",
    "pos": "n.",
    "cn_def": "支持者;擁護者",
    "en_def": "a person who supports an idea",
    "sentence": "Dr Chen is a strong {{BLANK}} of short daily exercise, and she says it can improve both mood and memory.",
    "cn": "陳醫師是每天短時間運動的堅定支持者,她說這可以改善情緒和記憶力。"
  },
  {
    "word": "reassess",
    "pos": "v.",
    "cn_def": "重新評估",
    "en_def": "to think about something again and maybe change your opinion",
    "sentence": "After failing the first test, Leo {{BLANK}} his study methods, and he started using flashcards and practice questions.",
    "cn": "第一次考試不及格之後,里歐重新評估他的讀書方法,並開始使用單字卡和練習題。"
  },
  {
    "word": "retrospect",
    "pos": "n.",
    "cn_def": "回顧;回想",
    "en_def": "thinking about a past event",
    "sentence": "In {{BLANK}}, the stressful exam year taught me how to manage my time, so I am grateful for it now.",
    "cn": "回想起來,那壓力很大的考試年教會我如何管理時間,所以現在我很感謝那段日子。"
  },
  {
    "word": "spontaneous",
    "pos": "adj.",
    "cn_def": "自發的;即興的",
    "en_def": "done suddenly without planning",
    "sentence": "We made a {{BLANK}} decision to go hiking on Saturday, and the fresh air helped us forget about our exams.",
    "cn": "我們臨時起意決定星期六去爬山,新鮮的空氣幫助我們忘掉考試。"
  },
  {
    "word": "stagnant",
    "pos": "adj.",
    "cn_def": "停滯的",
    "en_def": "not moving, changing or developing",
    "sentence": "His English felt {{BLANK}} after months of using the same textbook, so he started watching English videos every day.",
    "cn": "用同一本課本好幾個月後,他覺得自己的英文停滯不前,所以他開始每天看英文影片。"
  },
  {
    "word": "subconscious",
    "pos": "adj.",
    "cn_def": "潛意識的",
    "en_def": "happening in your mind without you knowing",
    "sentence": "Our {{BLANK}} worries can appear in our dreams, so stressful weeks often bring strange dreams at night.",
    "cn": "我們潛意識裡的擔憂會出現在夢中,所以壓力大的那幾週晚上常會做奇怪的夢。"
  }
];

const MCQS = [
  {
    "q": "I was _____ about the advert that promised to cure stress in one day, so I did not buy the expensive pills.",
    "options": [
      "foremost",
      "dubious",
      "lethargic",
      "tenuous"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "It is an _____ belief that stress is always bad, because a small amount can help people perform better.",
    "options": [
      "erroneous",
      "peripheral",
      "tedious",
      "insecure"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The smell of my grandmother's soup _____ happy memories, and it always makes me feel calm and safe.",
    "options": [
      "expedite",
      "breathe",
      "scrutinise",
      "evoke"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "People under stress often _____ their problems, so talking to a friend can help them see things more clearly.",
    "options": [
      "disregard",
      "breathe",
      "exaggerate",
      "weigh"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Some students _____ in exams, while others perform better in projects, so teachers should use different kinds of tests.",
    "options": [
      "tempt",
      "reckon",
      "disregard",
      "excel"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "He worked hard for three years, and he finally _____ his dream of studying music in Vienna.",
    "options": [
      "baffle",
      "tempt",
      "fulfil",
      "withstand"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Some students seem _____ to their grades, but they may simply be hiding their worries from others.",
    "options": [
      "indifferent",
      "unpredictable",
      "obligatory",
      "succinct"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Her habit of checking messages at night was so _____ that it took months to break, but she now sleeps much better.",
    "options": [
      "frazzled",
      "ingrained",
      "insecure",
      "inadvertent"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Good coaches _____ confidence in young players, and this belief helps them stay calm in difficult games.",
    "options": [
      "instil",
      "alienate",
      "envision",
      "reckon"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "When two students started arguing loudly, the teacher had to _____, and she helped them talk about the problem calmly.",
    "options": [
      "expedite",
      "worry",
      "comfort",
      "intervene"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Large crowds _____ some speakers, so they practise in front of small groups first and slowly build their confidence.",
    "options": [
      "relinquish",
      "embrace",
      "intimidate",
      "concur"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "A brief _____ in concentration caused the driver to miss the red light, but luckily nobody was hurt.",
    "options": [
      "phobia",
      "lapse",
      "cohesion",
      "guilt"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "His _____ with perfect grades made him unhappy, so his parents told him that effort mattered more than scores.",
    "options": [
      "migraine",
      "trait",
      "pressure",
      "obsession"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Students often _____ how much they can study in one night, and then they feel disappointed when they cannot finish.",
    "options": [
      "worry",
      "overestimate",
      "disregard",
      "scrutinise"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "She _____ the job offer for a whole week, because it meant moving to a city where she knew nobody.",
    "options": [
      "recharge",
      "alienate",
      "ponder",
      "regret"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Losing his job _____ a difficult period in his life, but the support of his family helped him recover.",
    "options": [
      "precipitate",
      "dither",
      "alienate",
      "accentuate"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Dad was _____ with work problems during dinner, so he did not hear my news about the school prize.",
    "options": [
      "insecure",
      "scrupulous",
      "logical",
      "preoccupied"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The _____ that boys are better at maths is wrong, and it can discourage many talented girls.",
    "options": [
      "adversity",
      "helpline",
      "presumption",
      "psychiatrist"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Some people have a _____ to worry, so they need to practise calming techniques more than others do.",
    "options": [
      "strain",
      "propensity",
      "avoidance",
      "conviction"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Dr Chen is a strong _____ of short daily exercise, and she says it can improve both mood and memory.",
    "options": [
      "proponent",
      "purpose",
      "streak",
      "embarrassment"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "After failing the first test, Leo _____ his study methods, and he started using flashcards and practice questions.",
    "options": [
      "allude",
      "unwind",
      "reassess",
      "subdue"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "In _____, the stressful exam year taught me how to manage my time, so I am grateful for it now.",
    "options": [
      "retrospect",
      "shame",
      "decision",
      "discretion"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "We made a _____ decision to go hiking on Saturday, and the fresh air helped us forget about our exams.",
    "options": [
      "overdue",
      "spontaneous",
      "fight-or-flight",
      "succinct"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "His English felt _____ after months of using the same textbook, so he started watching English videos every day.",
    "options": [
      "tedious",
      "mediocre",
      "foremost",
      "stagnant"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Our _____ worries can appear in our dreams, so stressful weeks often bring strange dreams at night.",
    "options": [
      "idle",
      "annoyed",
      "subconscious",
      "conceivable"
    ],
    "answer": 2,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "dubious": {
    "pos": "adj.",
    "en_def": "not sure; probably not true or honest",
    "cn_def": "可疑的;半信半疑的"
  },
  "erroneous": {
    "pos": "adj.",
    "en_def": "wrong; not correct",
    "cn_def": "錯誤的"
  },
  "evoke": {
    "pos": "v.",
    "en_def": "to bring a feeling or memory into your mind",
    "cn_def": "喚起;引起"
  },
  "exaggerate": {
    "pos": "v.",
    "en_def": "to describe something as bigger or worse than it is",
    "cn_def": "誇大"
  },
  "excel": {
    "pos": "v.",
    "en_def": "to be very good at something",
    "cn_def": "擅長;表現優異"
  },
  "fulfil": {
    "pos": "v.",
    "en_def": "to do what you hoped or promised",
    "cn_def": "實現;履行"
  },
  "indifferent": {
    "pos": "adj.",
    "en_def": "not interested or caring",
    "cn_def": "漠不關心的"
  },
  "ingrained": {
    "pos": "adj.",
    "en_def": "so fixed that it is hard to change",
    "cn_def": "根深蒂固的"
  },
  "instil": {
    "pos": "v.",
    "en_def": "to slowly make someone have a feeling or idea",
    "cn_def": "灌輸;逐漸培養"
  },
  "intervene": {
    "pos": "v.",
    "en_def": "to get involved to stop or change a situation",
    "cn_def": "介入;干預"
  },
  "intimidate": {
    "pos": "v.",
    "en_def": "to make someone feel frightened or less confident",
    "cn_def": "使害怕;威嚇"
  },
  "lapse": {
    "pos": "n.",
    "en_def": "a short time when you fail to do something well",
    "cn_def": "失誤;疏忽"
  },
  "obsession": {
    "pos": "n.",
    "en_def": "thinking about something all the time",
    "cn_def": "著迷;執念"
  },
  "overestimate": {
    "pos": "v.",
    "en_def": "to think something is bigger or better than it is",
    "cn_def": "高估"
  },
  "ponder": {
    "pos": "v.",
    "en_def": "to think carefully about something for a long time",
    "cn_def": "沉思;仔細考慮"
  },
  "precipitate": {
    "pos": "v.",
    "en_def": "to make something bad happen suddenly or sooner",
    "cn_def": "促成;使突然發生"
  },
  "preoccupied": {
    "pos": "adj.",
    "en_def": "thinking so much about something that you ignore other things",
    "cn_def": "心事重重的;全神貫注於"
  },
  "presumption": {
    "pos": "n.",
    "en_def": "something you believe is true without proof",
    "cn_def": "推定;假設"
  },
  "propensity": {
    "pos": "n.",
    "en_def": "a natural tendency to behave in a certain way",
    "cn_def": "傾向;習性"
  },
  "proponent": {
    "pos": "n.",
    "en_def": "a person who supports an idea",
    "cn_def": "支持者;擁護者"
  },
  "reassess": {
    "pos": "v.",
    "en_def": "to think about something again and maybe change your opinion",
    "cn_def": "重新評估"
  },
  "retrospect": {
    "pos": "n.",
    "en_def": "thinking about a past event",
    "cn_def": "回顧;回想"
  },
  "spontaneous": {
    "pos": "adj.",
    "en_def": "done suddenly without planning",
    "cn_def": "自發的;即興的"
  },
  "stagnant": {
    "pos": "adj.",
    "en_def": "not moving, changing or developing",
    "cn_def": "停滯的"
  },
  "subconscious": {
    "pos": "adj.",
    "en_def": "happening in your mind without you knowing",
    "cn_def": "潛意識的"
  },
  "foremost": {
    "pos": "adj.",
    "en_def": "most important",
    "cn_def": "最重要的;首要的"
  },
  "lethargic": {
    "pos": "adj.",
    "en_def": "tired and without energy",
    "cn_def": "無精打采的;懶洋洋的"
  },
  "tenuous": {
    "pos": "adj.",
    "en_def": "very weak or uncertain",
    "cn_def": "薄弱的;站不住腳的"
  },
  "peripheral": {
    "pos": "adj.",
    "en_def": "not as important as the main part",
    "cn_def": "次要的;周邊的"
  },
  "tedious": {
    "pos": "adj.",
    "en_def": "long and boring",
    "cn_def": "冗長乏味的"
  },
  "insecure": {
    "pos": "adj.",
    "en_def": "not confident about yourself",
    "cn_def": "沒有安全感的;不自信的"
  },
  "expedite": {
    "pos": "v.",
    "en_def": "to make a process happen faster",
    "cn_def": "加快;促進"
  },
  "breathe": {
    "pos": "v.",
    "en_def": "to take air into your body and let it out",
    "cn_def": "呼吸"
  },
  "scrutinise": {
    "pos": "v.",
    "en_def": "to examine something very carefully",
    "cn_def": "仔細檢查;審視"
  },
  "disregard": {
    "pos": "v.",
    "en_def": "to ignore something",
    "cn_def": "忽視;不理會"
  },
  "weigh": {
    "pos": "v.",
    "en_def": "to think carefully about something before deciding",
    "cn_def": "權衡;考慮"
  },
  "tempt": {
    "pos": "v.",
    "en_def": "to make someone want to do something, often something wrong",
    "cn_def": "引誘;吸引"
  },
  "reckon": {
    "pos": "v.",
    "en_def": "to think or believe",
    "cn_def": "認為;估計"
  },
  "baffle": {
    "pos": "v.",
    "en_def": "to confuse someone completely",
    "cn_def": "使困惑"
  },
  "withstand": {
    "pos": "v.",
    "en_def": "to deal with something difficult without being harmed",
    "cn_def": "承受;抵擋"
  },
  "unpredictable": {
    "pos": "adj.",
    "en_def": "changing in a way that is hard to guess",
    "cn_def": "難以預測的"
  },
  "obligatory": {
    "pos": "adj.",
    "en_def": "required by a rule",
    "cn_def": "必須的;義務的"
  },
  "succinct": {
    "pos": "adj.",
    "en_def": "clear and short",
    "cn_def": "簡潔的"
  },
  "frazzled": {
    "pos": "adj.",
    "en_def": "very tired and upset because of too much to do",
    "cn_def": "疲憊不堪的"
  },
  "inadvertent": {
    "pos": "adj.",
    "en_def": "done without meaning to",
    "cn_def": "無心的;不經意的"
  },
  "alienate": {
    "pos": "v.",
    "en_def": "to make someone feel unfriendly or not part of a group",
    "cn_def": "使疏遠"
  },
  "envision": {
    "pos": "v.",
    "en_def": "to imagine something that may happen in the future",
    "cn_def": "設想;展望"
  },
  "worry": {
    "pos": "v.",
    "en_def": "to keep thinking about problems or bad things",
    "cn_def": "擔心"
  },
  "comfort": {
    "pos": "v.",
    "en_def": "to make someone feel better when they are sad",
    "cn_def": "安慰"
  },
  "relinquish": {
    "pos": "v.",
    "en_def": "to give up control or a position",
    "cn_def": "放棄;讓出"
  },
  "embrace": {
    "pos": "v.",
    "en_def": "to accept something new with enthusiasm",
    "cn_def": "欣然接受"
  },
  "concur": {
    "pos": "v.",
    "en_def": "to agree",
    "cn_def": "同意"
  },
  "phobia": {
    "pos": "n.",
    "en_def": "a very strong fear of something",
    "cn_def": "恐懼症"
  },
  "cohesion": {
    "pos": "n.",
    "en_def": "the state of a group being united",
    "cn_def": "凝聚力"
  },
  "guilt": {
    "pos": "n.",
    "en_def": "a bad feeling because you did something wrong",
    "cn_def": "罪惡感"
  },
  "migraine": {
    "pos": "n.",
    "en_def": "a very bad headache that can make you feel sick",
    "cn_def": "偏頭痛"
  },
  "trait": {
    "pos": "n.",
    "en_def": "a quality that is part of someone's character",
    "cn_def": "特質;特徵"
  },
  "pressure": {
    "pos": "n.",
    "en_def": "a feeling of worry caused by too much to do",
    "cn_def": "壓力"
  },
  "recharge": {
    "pos": "v.",
    "en_def": "to get your energy back by resting",
    "cn_def": "恢復精力;充電"
  },
  "regret": {
    "pos": "v.",
    "en_def": "to feel sorry about something you did or did not do",
    "cn_def": "後悔"
  },
  "dither": {
    "pos": "v.",
    "en_def": "to be unable to decide what to do",
    "cn_def": "猶豫不決"
  },
  "accentuate": {
    "pos": "v.",
    "en_def": "to make something more noticeable",
    "cn_def": "強調;使突出"
  },
  "scrupulous": {
    "pos": "adj.",
    "en_def": "very careful to be honest and correct",
    "cn_def": "一絲不苟的;嚴謹的"
  },
  "logical": {
    "pos": "adj.",
    "en_def": "following clear and sensible thinking",
    "cn_def": "合乎邏輯的"
  },
  "adversity": {
    "pos": "n.",
    "en_def": "a very difficult situation",
    "cn_def": "逆境"
  },
  "helpline": {
    "pos": "n.",
    "en_def": "a phone service that gives advice or support",
    "cn_def": "求助專線"
  },
  "psychiatrist": {
    "pos": "n.",
    "en_def": "a doctor who treats mental illness",
    "cn_def": "精神科醫師"
  },
  "strain": {
    "pos": "n.",
    "en_def": "a difficult situation that makes you tired or worried",
    "cn_def": "負擔;壓力"
  },
  "avoidance": {
    "pos": "n.",
    "en_def": "staying away from something you do not want to face",
    "cn_def": "逃避;迴避"
  },
  "conviction": {
    "pos": "n.",
    "en_def": "a strong belief",
    "cn_def": "堅定的信念;確信"
  },
  "purpose": {
    "pos": "n.",
    "en_def": "a reason that gives your life or work meaning",
    "cn_def": "目的;意義"
  },
  "streak": {
    "pos": "n.",
    "en_def": "a series of successes or days in a row",
    "cn_def": "連續紀錄"
  },
  "embarrassment": {
    "pos": "n.",
    "en_def": "the feeling of being shy or uncomfortable in front of others",
    "cn_def": "尷尬"
  },
  "allude": {
    "pos": "v.",
    "en_def": "to mention something in an indirect way",
    "cn_def": "暗指;間接提到"
  },
  "unwind": {
    "pos": "v.",
    "en_def": "to relax after work or stress",
    "cn_def": "放鬆"
  },
  "subdue": {
    "pos": "v.",
    "en_def": "to bring a strong feeling under control",
    "cn_def": "抑制;克制"
  },
  "shame": {
    "pos": "n.",
    "en_def": "a painful feeling that you have done something wrong or silly",
    "cn_def": "羞愧"
  },
  "decision": {
    "pos": "n.",
    "en_def": "a choice you make after thinking",
    "cn_def": "決定"
  },
  "discretion": {
    "pos": "n.",
    "en_def": "the right to decide something; care in what you say",
    "cn_def": "斟酌決定權;謹慎"
  },
  "overdue": {
    "pos": "adj.",
    "en_def": "late; should have happened before now",
    "cn_def": "過期的;早該發生的"
  },
  "fight-or-flight": {
    "pos": "adj.",
    "en_def": "describing the body's quick reaction to danger",
    "cn_def": "戰或逃(反應)的"
  },
  "mediocre": {
    "pos": "adj.",
    "en_def": "not very good; only average",
    "cn_def": "平庸的;普通的"
  },
  "idle": {
    "pos": "adj.",
    "en_def": "not working or doing anything useful",
    "cn_def": "閒置的;無所事事的"
  },
  "annoyed": {
    "pos": "adj.",
    "en_def": "a little angry",
    "cn_def": "惱怒的;不耐煩的"
  },
  "conceivable": {
    "pos": "adj.",
    "en_def": "possible to imagine or believe",
    "cn_def": "可想像的;可能的"
  }
};

const EXTRA_GLOSSES = {};
