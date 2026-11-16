// Topic 5 Subunit 4 Quiz Data: Motivation & Goals 動機與目標
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T05 S04 - Motivation & Goals 動機與目標",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "goal",
    "pos": "n.",
    "cn_def": "目標",
    "en_def": "something you want to achieve",
    "sentence": "My {{BLANK}} this year is to read twenty English books, so I read for half an hour every night before bed.",
    "cn": "我今年的目標是讀二十本英文書,所以我每晚睡前閱讀半小時。"
  },
  {
    "word": "ambition",
    "pos": "n.",
    "cn_def": "抱負;雄心",
    "en_def": "a strong wish to be successful",
    "sentence": "Her {{BLANK}} is to become a doctor, but she knows she must study very hard to reach that dream.",
    "cn": "她的抱負是成為醫生,但她知道必須非常努力讀書才能實現那個夢想。"
  },
  {
    "word": "drive",
    "pos": "n.",
    "cn_def": "幹勁;動力",
    "en_def": "strong energy and wish to achieve something",
    "sentence": "Jack has the {{BLANK}} to succeed, so he practises the piano every day even when his friends go out to play.",
    "cn": "傑克有成功的幹勁,所以即使朋友們出去玩,他還是每天練琴。"
  },
  {
    "word": "determination",
    "pos": "n.",
    "cn_def": "決心",
    "en_def": "not giving up even when something is difficult",
    "sentence": "With great {{BLANK}}, the runner finished the marathon, although she had hurt her ankle halfway through the race.",
    "cn": "這位跑者憑著極大的決心跑完了馬拉松,雖然她在比賽途中扭傷了腳踝。"
  },
  {
    "word": "perseverance",
    "pos": "n.",
    "cn_def": "毅力;堅持不懈",
    "en_def": "continuing to try even when progress is slow",
    "sentence": "Learning a language takes {{BLANK}}, because you will make many mistakes before you speak it well.",
    "cn": "學習語言需要毅力,因為在說得流利之前你會犯很多錯。"
  },
  {
    "word": "willpower",
    "pos": "n.",
    "cn_def": "意志力",
    "en_def": "the ability to control what you do and resist temptation",
    "sentence": "It takes {{BLANK}} to put your phone away while studying, but your grades will thank you later.",
    "cn": "讀書時把手機收起來需要意志力,但你的成績之後會感謝你。"
  },
  {
    "word": "self-discipline",
    "pos": "n.",
    "cn_def": "自律",
    "en_def": "the ability to make yourself do things you should do",
    "sentence": "Online learning requires a lot of {{BLANK}}, because nobody checks whether you are really watching the lessons.",
    "cn": "線上學習需要很強的自律,因為沒有人會檢查你是否真的在看課程。"
  },
  {
    "word": "passion",
    "pos": "n.",
    "cn_def": "熱情;熱愛",
    "en_def": "a very strong interest or love for something",
    "sentence": "Daniel has a {{BLANK}} for cooking, and he dreams of opening his own small restaurant one day.",
    "cn": "丹尼爾對烹飪充滿熱情,他夢想有一天開一家屬於自己的小餐廳。"
  },
  {
    "word": "enthusiasm",
    "pos": "n.",
    "cn_def": "熱忱;熱衷",
    "en_def": "a feeling of being very excited and interested",
    "sentence": "The students showed great {{BLANK}} for the science fair, so they stayed after school to build their projects.",
    "cn": "學生們對科展展現極大的熱忱,所以他們放學後留下來製作作品。"
  },
  {
    "word": "effort",
    "pos": "n.",
    "cn_def": "努力",
    "en_def": "the hard work you use to do something",
    "sentence": "Our teacher praises {{BLANK}} more than results, because she believes hard work matters more than talent.",
    "cn": "我們老師稱讚努力多過稱讚結果,因為她相信努力比天分更重要。"
  },
  {
    "word": "achievement",
    "pos": "n.",
    "cn_def": "成就",
    "en_def": "something good you have done through hard work",
    "sentence": "Passing the advanced English test was a big {{BLANK}} for Kelly, and her parents took her out to celebrate.",
    "cn": "通過高級英語檢定對凱莉來說是很大的成就,她爸媽帶她出去慶祝。"
  },
  {
    "word": "purpose",
    "pos": "n.",
    "cn_def": "目的;意義",
    "en_def": "a reason that gives your life or work meaning",
    "sentence": "Volunteering at the animal shelter gave Tom a sense of {{BLANK}}, and he stopped feeling bored on weekends.",
    "cn": "在動物收容所當志工讓湯姆有了意義感,他週末不再覺得無聊。"
  },
  {
    "word": "curiosity",
    "pos": "n.",
    "cn_def": "好奇心",
    "en_def": "a strong wish to know or learn something",
    "sentence": "Young children are full of {{BLANK}}, and they ask \"why\" so many times that parents sometimes run out of answers.",
    "cn": "小孩子充滿好奇心,他們問好多次「為什麼」,讓父母有時都答不出來了。"
  },
  {
    "word": "inspiration",
    "pos": "n.",
    "cn_def": "靈感;鼓舞",
    "en_def": "something that gives you new ideas or makes you want to do something",
    "sentence": "The athlete's story was a great {{BLANK}} to the students, and many of them joined the school running team.",
    "cn": "那位運動員的故事對學生們是很大的鼓舞,許多人加入了學校的跑步隊。"
  },
  {
    "word": "praise",
    "pos": "n.",
    "cn_def": "讚美;稱讚",
    "en_def": "words that show you think someone did well",
    "sentence": "A little {{BLANK}} from a teacher can make a big difference, because students work harder when they feel noticed.",
    "cn": "老師的一點稱讚就能帶來很大的不同,因為學生覺得被注意到時會更努力。"
  },
  {
    "word": "encouragement",
    "pos": "n.",
    "cn_def": "鼓勵",
    "en_def": "words or actions that give someone confidence",
    "sentence": "With her parents' {{BLANK}}, Grace entered the singing contest, and she was surprised to reach the final round.",
    "cn": "在父母的鼓勵下,葛蕾絲參加了歌唱比賽,而她很驚訝自己進入了決賽。"
  },
  {
    "word": "grit",
    "pos": "n.",
    "cn_def": "毅力;堅韌",
    "en_def": "courage and the will to keep going",
    "sentence": "Research suggests that {{BLANK}} matters as much as talent, because people who keep trying often achieve more.",
    "cn": "研究顯示堅韌的毅力和天分一樣重要,因為持續嘗試的人往往成就更多。"
  },
  {
    "word": "setback",
    "pos": "n.",
    "cn_def": "挫折;阻礙",
    "en_def": "a problem that delays your progress",
    "sentence": "Failing the first driving test was a {{BLANK}}, but Eric practised more and passed easily the second time.",
    "cn": "第一次駕照考試沒過是個挫折,但艾瑞克多加練習,第二次就輕鬆通過了。"
  },
  {
    "word": "failure",
    "pos": "n.",
    "cn_def": "失敗",
    "en_def": "a lack of success",
    "sentence": "Don't see {{BLANK}} as the end, because every mistake teaches you something useful for next time.",
    "cn": "不要把失敗看作終點,因為每個錯誤都會教你一些下次有用的東西。"
  },
  {
    "word": "progress",
    "pos": "n.",
    "cn_def": "進步;進展",
    "en_def": "movement towards a goal or improvement",
    "sentence": "Keep a list of new words you learn each week, and you will see how much {{BLANK}} you have made by the end of the term.",
    "cn": "把每週學到的新單字列成清單,到學期末你就會看到自己有多大的進步。"
  },
  {
    "word": "mindset",
    "pos": "n.",
    "cn_def": "心態;思維方式",
    "en_def": "a person's usual way of thinking",
    "sentence": "Students with a positive {{BLANK}} see hard problems as chances to learn, while others may give up too quickly.",
    "cn": "擁有正向心態的學生把難題看作學習的機會,而其他人可能太快放棄。"
  },
  {
    "word": "self-belief",
    "pos": "n.",
    "cn_def": "自信;相信自己",
    "en_def": "confidence in your own abilities",
    "sentence": "Winning the speech contest gave Ivy more {{BLANK}}, and she began to answer questions in class without fear.",
    "cn": "贏得演講比賽讓艾薇更相信自己,她開始毫不畏懼地在課堂上回答問題。"
  },
  {
    "word": "competitive",
    "pos": "adj.",
    "cn_def": "好勝的;競爭的",
    "en_def": "wanting very much to win or be better than others",
    "sentence": "My brother is very {{BLANK}}, so he gets upset when he loses even a simple card game with the family.",
    "cn": "我弟弟非常好勝,所以連跟家人玩簡單的紙牌遊戲輸了他都會不高興。"
  },
  {
    "word": "eager",
    "pos": "adj.",
    "cn_def": "渴望的;熱切的",
    "en_def": "wanting to do something very much",
    "sentence": "The new students were {{BLANK}} to make friends, so they joined several clubs during the first week of school.",
    "cn": "新生們渴望交朋友,所以他們在開學第一週就加入了好幾個社團。"
  },
  {
    "word": "keen",
    "pos": "adj.",
    "cn_def": "熱衷的;渴望的",
    "en_def": "very interested and enthusiastic",
    "sentence": "Tom is {{BLANK}} on basketball, and he practises shooting every evening, even when it is cold outside.",
    "cn": "湯姆熱衷於籃球,他每天傍晚都練習投籃,即使外面很冷也一樣。"
  },
  {
    "word": "hardworking",
    "pos": "adj.",
    "cn_def": "勤奮的",
    "en_def": "putting a lot of effort into work",
    "sentence": "My classmate is so {{BLANK}} that she reviews her notes on the bus, so she rarely needs to study late at night.",
    "cn": "我的同學非常勤奮,她在公車上複習筆記,所以她很少需要熬夜讀書。"
  },
  {
    "word": "lazy",
    "pos": "adj.",
    "cn_def": "懶惰的",
    "en_def": "not wanting to work or make an effort",
    "sentence": "I felt {{BLANK}} on Sunday morning and stayed in bed, but then I had to rush to finish my homework at night.",
    "cn": "星期天早上我覺得很懶,一直賴在床上,結果晚上必須趕著完成作業。"
  },
  {
    "word": "boredom",
    "pos": "n.",
    "cn_def": "無聊;厭倦",
    "en_def": "the feeling of being tired because nothing is interesting",
    "sentence": "Some students check their phones out of {{BLANK}}, but this habit can make it hard to concentrate in class.",
    "cn": "有些學生出於無聊而查看手機,但這個習慣會讓上課難以專心。"
  },
  {
    "word": "self-motivated",
    "pos": "adj.",
    "cn_def": "自動自發的",
    "en_def": "able to work hard without others pushing you",
    "sentence": "Ken is very {{BLANK}}, so he studies English online every day even though nobody tells him to.",
    "cn": "肯非常自動自發,所以即使沒有人要求,他每天都在線上學英文。"
  },
  {
    "word": "focus",
    "pos": "v.",
    "cn_def": "專注",
    "en_def": "to give all your attention to one thing",
    "sentence": "It is hard to {{BLANK}} on your homework when the TV is on, so find a quiet place and turn off your phone.",
    "cn": "電視開著的時候很難專注在作業上,所以找個安靜的地方並把手機關掉。"
  }
];

const MCQS = [
  {
    "q": "My _____ this year is to read twenty English books, so I read for half an hour every night before bed.",
    "options": [
      "goal",
      "trade-off",
      "bystander",
      "hindsight"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Her _____ is to become a doctor, but she knows she must study very hard to reach that dream.",
    "options": [
      "habit",
      "adversity",
      "personality",
      "ambition"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Jack has the _____ to succeed, so he practises the piano every day even when his friends go out to play.",
    "options": [
      "procrastination",
      "disposition",
      "drive",
      "anchoring"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "With great _____, the runner finished the marathon, although she had hurt her ankle halfway through the race.",
    "options": [
      "fortitude",
      "determination",
      "vitality",
      "volition"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Learning a language takes _____, because you will make many mistakes before you speak it well.",
    "options": [
      "hobby",
      "therapist",
      "perseverance",
      "caution"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "It takes _____ to put your phone away while studying, but your grades will thank you later.",
    "options": [
      "grief",
      "willpower",
      "craving",
      "self-care"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Online learning requires a lot of _____, because nobody checks whether you are really watching the lessons.",
    "options": [
      "self-discipline",
      "tenacity",
      "checklist",
      "excuse"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Daniel has a _____ for cooking, and he dreams of opening his own small restaurant one day.",
    "options": [
      "conviction",
      "fortitude",
      "introvert",
      "passion"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The students showed great _____ for the science fair, so they stayed after school to build their projects.",
    "options": [
      "ego",
      "enthusiasm",
      "gratitude",
      "caution"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Our teacher praises _____ more than results, because she believes hard work matters more than talent.",
    "options": [
      "bystander",
      "jealousy",
      "effort",
      "merit"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Passing the advanced English test was a big _____ for Kelly, and her parents took her out to celebrate.",
    "options": [
      "achievement",
      "workload",
      "preference",
      "vitality"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Volunteering at the animal shelter gave Tom a sense of _____, and he stopped feeling bored on weekends.",
    "options": [
      "workout",
      "phobia",
      "craving",
      "purpose"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Young children are full of _____, and they ask \"why\" so many times that parents sometimes run out of answers.",
    "options": [
      "disposition",
      "appetite",
      "curiosity",
      "planner"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The athlete's story was a great _____ to the students, and many of them joined the school running team.",
    "options": [
      "analogy",
      "inspiration",
      "coincidence",
      "frustration"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "A little _____ from a teacher can make a big difference, because students work harder when they feel noticed.",
    "options": [
      "praise",
      "conviction",
      "sympathy",
      "groupthink"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "With her parents' _____, Grace entered the singing contest, and she was surprised to reach the final round.",
    "options": [
      "emotion",
      "compassion",
      "framing",
      "encouragement"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Research suggests that _____ matters as much as talent, because people who keep trying often achieve more.",
    "options": [
      "proponent",
      "grit",
      "introspection",
      "anger"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Failing the first driving test was a _____, but Eric practised more and passed easily the second time.",
    "options": [
      "setback",
      "groupthink",
      "optimism",
      "trade-off"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Don't see _____ as the end, because every mistake teaches you something useful for next time.",
    "options": [
      "discretion",
      "helpline",
      "failure",
      "contentment"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Keep a list of new words you learn each week, and you will see how much _____ you have made by the end of the term.",
    "options": [
      "hindsight",
      "stomachache",
      "introvert",
      "progress"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Students with a positive _____ see hard problems as chances to learn, while others may give up too quickly.",
    "options": [
      "mindset",
      "adversity",
      "anchoring",
      "ego"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Winning the speech contest gave Ivy more _____, and she began to answer questions in class without fear.",
    "options": [
      "comprehension",
      "self-belief",
      "anger",
      "mentality"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "My brother is very _____, so he gets upset when he loses even a simple card game with the family.",
    "options": [
      "notorious",
      "easy-going",
      "undue",
      "competitive"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The new students were _____ to make friends, so they joined several clubs during the first week of school.",
    "options": [
      "easy-going",
      "quantifiable",
      "eager",
      "tenuous"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Tom is _____ on basketball, and he practises shooting every evening, even when it is cold outside.",
    "options": [
      "obligatory",
      "keen",
      "cognisant",
      "exemplary"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "My classmate is so _____ that she reviews her notes on the bus, so she rarely needs to study late at night.",
    "options": [
      "last-minute",
      "steadfast",
      "optimistic",
      "hardworking"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "I felt _____ on Sunday morning and stayed in bed, but then I had to rush to finish my homework at night.",
    "options": [
      "lazy",
      "devoid",
      "unequivocal",
      "paradoxical"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Some students check their phones out of _____, but this habit can make it hard to concentrate in class.",
    "options": [
      "grief",
      "compassion",
      "boredom",
      "decision"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Ken is very _____, so he studies English online every day even though nobody tells him to.",
    "options": [
      "self-motivated",
      "assertive",
      "stubborn",
      "subconscious"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "It is hard to _____ on your homework when the TV is on, so find a quiet place and turn off your phone.",
    "options": [
      "tempt",
      "focus",
      "expedite",
      "reflect"
    ],
    "answer": 1,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "goal": {
    "pos": "n.",
    "en_def": "something you want to achieve",
    "cn_def": "目標"
  },
  "ambition": {
    "pos": "n.",
    "en_def": "a strong wish to be successful",
    "cn_def": "抱負;雄心"
  },
  "drive": {
    "pos": "n.",
    "en_def": "strong energy and wish to achieve something",
    "cn_def": "幹勁;動力"
  },
  "determination": {
    "pos": "n.",
    "en_def": "not giving up even when something is difficult",
    "cn_def": "決心"
  },
  "perseverance": {
    "pos": "n.",
    "en_def": "continuing to try even when progress is slow",
    "cn_def": "毅力;堅持不懈"
  },
  "willpower": {
    "pos": "n.",
    "en_def": "the ability to control what you do and resist temptation",
    "cn_def": "意志力"
  },
  "self-discipline": {
    "pos": "n.",
    "en_def": "the ability to make yourself do things you should do",
    "cn_def": "自律"
  },
  "passion": {
    "pos": "n.",
    "en_def": "a very strong interest or love for something",
    "cn_def": "熱情;熱愛"
  },
  "enthusiasm": {
    "pos": "n.",
    "en_def": "a feeling of being very excited and interested",
    "cn_def": "熱忱;熱衷"
  },
  "effort": {
    "pos": "n.",
    "en_def": "the hard work you use to do something",
    "cn_def": "努力"
  },
  "achievement": {
    "pos": "n.",
    "en_def": "something good you have done through hard work",
    "cn_def": "成就"
  },
  "purpose": {
    "pos": "n.",
    "en_def": "a reason that gives your life or work meaning",
    "cn_def": "目的;意義"
  },
  "curiosity": {
    "pos": "n.",
    "en_def": "a strong wish to know or learn something",
    "cn_def": "好奇心"
  },
  "inspiration": {
    "pos": "n.",
    "en_def": "something that gives you new ideas or makes you want to do something",
    "cn_def": "靈感;鼓舞"
  },
  "praise": {
    "pos": "n.",
    "en_def": "words that show you think someone did well",
    "cn_def": "讚美;稱讚"
  },
  "encouragement": {
    "pos": "n.",
    "en_def": "words or actions that give someone confidence",
    "cn_def": "鼓勵"
  },
  "grit": {
    "pos": "n.",
    "en_def": "courage and the will to keep going",
    "cn_def": "毅力;堅韌"
  },
  "setback": {
    "pos": "n.",
    "en_def": "a problem that delays your progress",
    "cn_def": "挫折;阻礙"
  },
  "failure": {
    "pos": "n.",
    "en_def": "a lack of success",
    "cn_def": "失敗"
  },
  "progress": {
    "pos": "n.",
    "en_def": "movement towards a goal or improvement",
    "cn_def": "進步;進展"
  },
  "mindset": {
    "pos": "n.",
    "en_def": "a person's usual way of thinking",
    "cn_def": "心態;思維方式"
  },
  "self-belief": {
    "pos": "n.",
    "en_def": "confidence in your own abilities",
    "cn_def": "自信;相信自己"
  },
  "competitive": {
    "pos": "adj.",
    "en_def": "wanting very much to win or be better than others",
    "cn_def": "好勝的;競爭的"
  },
  "eager": {
    "pos": "adj.",
    "en_def": "wanting to do something very much",
    "cn_def": "渴望的;熱切的"
  },
  "keen": {
    "pos": "adj.",
    "en_def": "very interested and enthusiastic",
    "cn_def": "熱衷的;渴望的"
  },
  "hardworking": {
    "pos": "adj.",
    "en_def": "putting a lot of effort into work",
    "cn_def": "勤奮的"
  },
  "lazy": {
    "pos": "adj.",
    "en_def": "not wanting to work or make an effort",
    "cn_def": "懶惰的"
  },
  "boredom": {
    "pos": "n.",
    "en_def": "the feeling of being tired because nothing is interesting",
    "cn_def": "無聊;厭倦"
  },
  "self-motivated": {
    "pos": "adj.",
    "en_def": "able to work hard without others pushing you",
    "cn_def": "自動自發的"
  },
  "focus": {
    "pos": "v.",
    "en_def": "to give all your attention to one thing",
    "cn_def": "專注"
  },
  "trade-off": {
    "pos": "n.",
    "en_def": "a balance between two things you cannot have together",
    "cn_def": "權衡;取捨"
  },
  "bystander": {
    "pos": "n.",
    "en_def": "a person who sees something happen but is not involved",
    "cn_def": "旁觀者"
  },
  "hindsight": {
    "pos": "n.",
    "en_def": "understanding a situation only after it has happened",
    "cn_def": "事後的領悟;後見之明"
  },
  "habit": {
    "pos": "n.",
    "en_def": "something you do regularly, often without thinking",
    "cn_def": "習慣"
  },
  "adversity": {
    "pos": "n.",
    "en_def": "a very difficult situation",
    "cn_def": "逆境"
  },
  "personality": {
    "pos": "n.",
    "en_def": "the type of person you are, shown by how you behave",
    "cn_def": "個性;人格"
  },
  "procrastination": {
    "pos": "n.",
    "en_def": "the habit of delaying things you should do",
    "cn_def": "拖延(症)"
  },
  "disposition": {
    "pos": "n.",
    "en_def": "a person's natural character",
    "cn_def": "性情;氣質"
  },
  "anchoring": {
    "pos": "n.",
    "en_def": "relying too much on the first number or fact you hear",
    "cn_def": "錨定效應"
  },
  "fortitude": {
    "pos": "n.",
    "en_def": "courage in pain or difficulty",
    "cn_def": "堅毅;剛毅"
  },
  "vitality": {
    "pos": "n.",
    "en_def": "energy and liveliness",
    "cn_def": "活力"
  },
  "volition": {
    "pos": "n.",
    "en_def": "the power to choose for yourself",
    "cn_def": "自願;意志"
  },
  "hobby": {
    "pos": "n.",
    "en_def": "an activity you enjoy in your free time",
    "cn_def": "嗜好"
  },
  "therapist": {
    "pos": "n.",
    "en_def": "a person who helps people with mental or physical problems",
    "cn_def": "治療師"
  },
  "caution": {
    "pos": "n.",
    "en_def": "care to avoid danger or mistakes",
    "cn_def": "謹慎;小心"
  },
  "grief": {
    "pos": "n.",
    "en_def": "great sadness, especially when someone dies",
    "cn_def": "悲痛"
  },
  "craving": {
    "pos": "n.",
    "en_def": "a very strong wish for something, often food",
    "cn_def": "渴望;癮"
  },
  "self-care": {
    "pos": "n.",
    "en_def": "things you do to protect your own health and happiness",
    "cn_def": "自我照顧"
  },
  "tenacity": {
    "pos": "n.",
    "en_def": "the quality of not giving up easily",
    "cn_def": "堅韌;頑強"
  },
  "checklist": {
    "pos": "n.",
    "en_def": "a list of things to check or do",
    "cn_def": "檢查清單"
  },
  "excuse": {
    "pos": "n.",
    "en_def": "a reason you give to explain a mistake or avoid something",
    "cn_def": "藉口"
  },
  "conviction": {
    "pos": "n.",
    "en_def": "a strong belief",
    "cn_def": "堅定的信念;確信"
  },
  "introvert": {
    "pos": "n.",
    "en_def": "a quiet person who gets energy from being alone",
    "cn_def": "內向的人"
  },
  "ego": {
    "pos": "n.",
    "en_def": "your sense of your own importance",
    "cn_def": "自我;自尊心"
  },
  "gratitude": {
    "pos": "n.",
    "en_def": "the feeling of being thankful",
    "cn_def": "感恩;感激"
  },
  "jealousy": {
    "pos": "n.",
    "en_def": "an unhappy feeling when someone has what you want",
    "cn_def": "嫉妒"
  },
  "merit": {
    "pos": "n.",
    "en_def": "a good quality that deserves praise",
    "cn_def": "優點;價值"
  },
  "workload": {
    "pos": "n.",
    "en_def": "the amount of work a person has to do",
    "cn_def": "工作量"
  },
  "preference": {
    "pos": "n.",
    "en_def": "liking one thing more than another",
    "cn_def": "偏好"
  },
  "workout": {
    "pos": "n.",
    "en_def": "a session of physical exercise",
    "cn_def": "運動;健身"
  },
  "phobia": {
    "pos": "n.",
    "en_def": "a very strong fear of something",
    "cn_def": "恐懼症"
  },
  "appetite": {
    "pos": "n.",
    "en_def": "the feeling that you want to eat",
    "cn_def": "食慾"
  },
  "planner": {
    "pos": "n.",
    "en_def": "a small book for writing plans and dates",
    "cn_def": "計畫本;記事本"
  },
  "analogy": {
    "pos": "n.",
    "en_def": "a comparison that explains one thing by showing how it is like another",
    "cn_def": "類比"
  },
  "coincidence": {
    "pos": "n.",
    "en_def": "when two things happen together by chance",
    "cn_def": "巧合"
  },
  "frustration": {
    "pos": "n.",
    "en_def": "the feeling of being upset because you cannot do something",
    "cn_def": "挫折感"
  },
  "sympathy": {
    "pos": "n.",
    "en_def": "feeling sorry for someone who is in trouble",
    "cn_def": "同情"
  },
  "groupthink": {
    "pos": "n.",
    "en_def": "when a group agrees too quickly and ignores other ideas",
    "cn_def": "團體迷思"
  },
  "emotion": {
    "pos": "n.",
    "en_def": "a strong feeling such as love, fear or anger",
    "cn_def": "情緒;情感"
  },
  "compassion": {
    "pos": "n.",
    "en_def": "a strong wish to help people who are suffering",
    "cn_def": "憐憫;同情心"
  },
  "framing": {
    "pos": "n.",
    "en_def": "the way information is presented, which can change choices",
    "cn_def": "框架效應;表述方式"
  },
  "proponent": {
    "pos": "n.",
    "en_def": "a person who supports an idea",
    "cn_def": "支持者;擁護者"
  },
  "introspection": {
    "pos": "n.",
    "en_def": "careful thinking about your own thoughts and feelings",
    "cn_def": "內省;自我反省"
  },
  "anger": {
    "pos": "n.",
    "en_def": "a strong feeling when something is wrong or unfair",
    "cn_def": "憤怒"
  },
  "optimism": {
    "pos": "n.",
    "en_def": "the feeling that good things will happen",
    "cn_def": "樂觀"
  },
  "discretion": {
    "pos": "n.",
    "en_def": "the right to decide something; care in what you say",
    "cn_def": "斟酌決定權;謹慎"
  },
  "helpline": {
    "pos": "n.",
    "en_def": "a phone service that gives advice or support",
    "cn_def": "求助專線"
  },
  "contentment": {
    "pos": "n.",
    "en_def": "a quiet feeling of being happy and satisfied",
    "cn_def": "滿足"
  },
  "stomachache": {
    "pos": "n.",
    "en_def": "a pain in your stomach",
    "cn_def": "胃痛;肚子痛"
  },
  "comprehension": {
    "pos": "n.",
    "en_def": "the ability to understand something",
    "cn_def": "理解(力)"
  },
  "mentality": {
    "pos": "n.",
    "en_def": "a typical way of thinking",
    "cn_def": "心態;思維模式"
  },
  "notorious": {
    "pos": "adj.",
    "en_def": "famous for something bad",
    "cn_def": "惡名昭彰的;出了名(不好)的"
  },
  "easy-going": {
    "pos": "adj.",
    "en_def": "relaxed and not easily worried or annoyed",
    "cn_def": "隨和的"
  },
  "undue": {
    "pos": "adj.",
    "en_def": "more than is reasonable or necessary",
    "cn_def": "過度的;不適當的"
  },
  "quantifiable": {
    "pos": "adj.",
    "en_def": "able to be measured with numbers",
    "cn_def": "可量化的"
  },
  "tenuous": {
    "pos": "adj.",
    "en_def": "very weak or uncertain",
    "cn_def": "薄弱的;站不住腳的"
  },
  "obligatory": {
    "pos": "adj.",
    "en_def": "required by a rule",
    "cn_def": "必須的;義務的"
  },
  "cognisant": {
    "pos": "adj.",
    "en_def": "aware of something",
    "cn_def": "意識到的;認知到的"
  },
  "exemplary": {
    "pos": "adj.",
    "en_def": "so good that others should copy it",
    "cn_def": "模範的;可作為榜樣的"
  },
  "last-minute": {
    "pos": "adj.",
    "en_def": "done at the latest possible time",
    "cn_def": "最後一刻的;臨時的"
  },
  "steadfast": {
    "pos": "adj.",
    "en_def": "staying firm and loyal",
    "cn_def": "堅定的;不動搖的"
  },
  "optimistic": {
    "pos": "adj.",
    "en_def": "hopeful that things will turn out well",
    "cn_def": "樂觀的"
  },
  "devoid": {
    "pos": "adj.",
    "en_def": "completely without something",
    "cn_def": "完全沒有的"
  },
  "unequivocal": {
    "pos": "adj.",
    "en_def": "completely clear, with no doubt",
    "cn_def": "明確的;毫不含糊的"
  },
  "paradoxical": {
    "pos": "adj.",
    "en_def": "seeming impossible because it combines opposite ideas",
    "cn_def": "矛盾的;似非而是的"
  },
  "decision": {
    "pos": "n.",
    "en_def": "a choice you make after thinking",
    "cn_def": "決定"
  },
  "assertive": {
    "pos": "adj.",
    "en_def": "expressing your opinions clearly and confidently",
    "cn_def": "有主見的;果斷自信的"
  },
  "stubborn": {
    "pos": "adj.",
    "en_def": "not willing to change your mind",
    "cn_def": "固執的"
  },
  "subconscious": {
    "pos": "adj.",
    "en_def": "happening in your mind without you knowing",
    "cn_def": "潛意識的"
  },
  "tempt": {
    "pos": "v.",
    "en_def": "to make someone want to do something, often something wrong",
    "cn_def": "引誘;吸引"
  },
  "expedite": {
    "pos": "v.",
    "en_def": "to make a process happen faster",
    "cn_def": "加快;促進"
  },
  "reflect": {
    "pos": "v.",
    "en_def": "to think carefully about something you did",
    "cn_def": "反思;深思"
  }
};

const EXTRA_GLOSSES = {};
