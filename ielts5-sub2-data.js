// Topic 5 Subunit 2 Quiz Data: Emotions & Mental Health 情緒與心理健康
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T05 S02 - Emotions & Mental Health 情緒與心理健康",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "emotion",
    "pos": "n.",
    "cn_def": "情緒;情感",
    "en_def": "a strong feeling such as love, fear or anger",
    "sentence": "It is normal to feel a mix of {{BLANK}} before graduation, because you are excited about the future but sad to leave your friends.",
    "cn": "畢業前感受到複雜的情緒是正常的,因為你對未來感到興奮,卻又捨不得離開朋友。"
  },
  {
    "word": "frustration",
    "pos": "n.",
    "cn_def": "挫折感",
    "en_def": "the feeling of being upset because you cannot do something",
    "sentence": "Leo shouted in {{BLANK}} when his computer crashed again, and he lost the essay he had been writing all evening.",
    "cn": "里歐的電腦又當機時,他挫折地大叫,而且他弄丟了整個晚上都在寫的文章。"
  },
  {
    "word": "anger",
    "pos": "n.",
    "cn_def": "憤怒",
    "en_def": "a strong feeling when something is wrong or unfair",
    "sentence": "Instead of showing her {{BLANK}} in front of the class, the teacher waited until she was calm and then spoke to the student.",
    "cn": "老師沒有在全班面前表現她的憤怒,而是等到自己冷靜下來才和那位學生談話。"
  },
  {
    "word": "fear",
    "pos": "n.",
    "cn_def": "恐懼",
    "en_def": "the feeling you have when you think something bad will happen",
    "sentence": "Many people have a {{BLANK}} of speaking in public, but regular practice can make it much less frightening.",
    "cn": "許多人對公開演講有恐懼,但經常練習可以讓它變得不那麼可怕。"
  },
  {
    "word": "worry",
    "pos": "v.",
    "cn_def": "擔心",
    "en_def": "to keep thinking about problems or bad things",
    "sentence": "Parents often {{BLANK}} about their children's grades, but too much pressure from home can make students even more stressed.",
    "cn": "父母常常擔心孩子的成績,但來自家裡的太多壓力會讓學生壓力更大。"
  },
  {
    "word": "guilt",
    "pos": "n.",
    "cn_def": "罪惡感",
    "en_def": "a bad feeling because you did something wrong",
    "sentence": "Sam felt a strong sense of {{BLANK}} after he forgot his best friend's birthday, so he bought her a gift the next day.",
    "cn": "山姆忘了最好朋友的生日之後感到強烈的罪惡感,所以他隔天買了一份禮物給她。"
  },
  {
    "word": "shame",
    "pos": "n.",
    "cn_def": "羞愧",
    "en_def": "a painful feeling that you have done something wrong or silly",
    "sentence": "He felt deep {{BLANK}} after cheating on the quiz, and he finally told his teacher the truth.",
    "cn": "他在小考作弊後感到深深的羞愧,最後他向老師說出了實話。"
  },
  {
    "word": "embarrassment",
    "pos": "n.",
    "cn_def": "尷尬",
    "en_def": "the feeling of being shy or uncomfortable in front of others",
    "sentence": "Her face turned red with {{BLANK}} when she called her teacher \"Mum\" by mistake, but everyone laughed kindly.",
    "cn": "她不小心把老師叫成「媽媽」時,臉因為尷尬而漲紅,但大家都善意地笑了。"
  },
  {
    "word": "jealousy",
    "pos": "n.",
    "cn_def": "嫉妒",
    "en_def": "an unhappy feeling when someone has what you want",
    "sentence": "A little {{BLANK}} is natural when your friend wins a prize, but it should not stop you from congratulating her.",
    "cn": "朋友得獎時有一點嫉妒是很自然的,但這不應該阻止你恭喜她。"
  },
  {
    "word": "envy",
    "pos": "v.",
    "cn_def": "羨慕",
    "en_def": "to want something that another person has",
    "sentence": "I sometimes {{BLANK}} students who never seem nervous before exams, but I know they probably work hard too.",
    "cn": "我有時會羨慕那些考試前似乎從不緊張的同學,但我知道他們可能也很努力。"
  },
  {
    "word": "grief",
    "pos": "n.",
    "cn_def": "悲痛",
    "en_def": "great sadness, especially when someone dies",
    "sentence": "After his grandmother died, Ken was full of {{BLANK}}, so his friends visited him often and listened to his stories about her.",
    "cn": "奶奶過世後,肯滿懷悲痛,所以他的朋友們常去探望他,並聽他講關於奶奶的故事。"
  },
  {
    "word": "relief",
    "pos": "n.",
    "cn_def": "鬆了一口氣;寬慰",
    "en_def": "a happy feeling when something worrying ends",
    "sentence": "It was a great {{BLANK}} to hear that the flight was safe, because we had been waiting at the airport for hours.",
    "cn": "聽到班機平安讓我們鬆了一口氣,因為我們已經在機場等了好幾個小時。"
  },
  {
    "word": "contentment",
    "pos": "n.",
    "cn_def": "滿足",
    "en_def": "a quiet feeling of being happy and satisfied",
    "sentence": "My grandfather finds {{BLANK}} in simple things, such as gardening and drinking tea with his old friends.",
    "cn": "我爺爺在簡單的事情中找到滿足,像是種花種菜和跟老朋友喝茶。"
  },
  {
    "word": "satisfaction",
    "pos": "n.",
    "cn_def": "滿意;滿足感",
    "en_def": "a pleased feeling after you do or get what you wanted",
    "sentence": "Finishing a difficult puzzle gives me a sense of {{BLANK}}, and it also helps me forget about my worries.",
    "cn": "完成一個困難的拼圖帶給我一種滿足感,也能幫助我忘掉煩惱。"
  },
  {
    "word": "optimism",
    "pos": "n.",
    "cn_def": "樂觀",
    "en_def": "the feeling that good things will happen",
    "sentence": "Her {{BLANK}} helped the whole team, because she always believed they could win even when they were behind.",
    "cn": "她的樂觀幫助了整個團隊,因為即使落後,她也總是相信他們能贏。"
  },
  {
    "word": "pessimism",
    "pos": "n.",
    "cn_def": "悲觀",
    "en_def": "the feeling that bad things will happen",
    "sentence": "There was a lot of {{BLANK}} among the players after three losses, but the coach reminded them of their past successes.",
    "cn": "輸了三場之後,球員之間瀰漫著悲觀的氣氛,但教練提醒他們過去的成功。"
  },
  {
    "word": "optimistic",
    "pos": "adj.",
    "cn_def": "樂觀的",
    "en_def": "hopeful that things will turn out well",
    "sentence": "Although the test was hard, Jenny felt {{BLANK}} about her score, because she had studied every chapter carefully.",
    "cn": "雖然考試很難,珍妮對她的分數感到樂觀,因為她仔細讀過了每一章。"
  },
  {
    "word": "pessimistic",
    "pos": "adj.",
    "cn_def": "悲觀的",
    "en_def": "expecting things to go badly",
    "sentence": "My brother is always {{BLANK}} about job interviews, so I tell him to focus on his strengths instead.",
    "cn": "我哥哥對工作面試總是很悲觀,所以我叫他改為專注於自己的優點。"
  },
  {
    "word": "gloomy",
    "pos": "adj.",
    "cn_def": "憂鬱的;陰沉的",
    "en_def": "sad and without hope",
    "sentence": "The rainy weather made everyone feel {{BLANK}}, so our teacher played some cheerful music during the break.",
    "cn": "下雨的天氣讓大家都覺得陰沉憂鬱,所以老師在下課時播放了一些輕快的音樂。"
  },
  {
    "word": "cheerful",
    "pos": "adj.",
    "cn_def": "開朗的;愉快的",
    "en_def": "happy and friendly",
    "sentence": "The nurse was always {{BLANK}} with her patients, and her smile made the hospital feel less frightening.",
    "cn": "那位護理師對病人總是很開朗,她的微笑讓醫院顯得不那麼可怕。"
  },
  {
    "word": "calm",
    "pos": "adj.",
    "cn_def": "冷靜的;平靜的",
    "en_def": "relaxed and not worried or excited",
    "sentence": "Try to stay {{BLANK}} during the exam, because panicking will only make you forget what you have learned.",
    "cn": "考試時要盡量保持冷靜,因為驚慌只會讓你忘記學過的東西。"
  },
  {
    "word": "upset",
    "pos": "adj.",
    "cn_def": "難過的;心煩的",
    "en_def": "unhappy or worried because something bad happened",
    "sentence": "Lily was {{BLANK}} when her best friend moved to another city, but they still video-chat every weekend.",
    "cn": "莉莉最好的朋友搬到另一個城市時,她很難過,但她們每個週末仍然視訊聊天。"
  },
  {
    "word": "annoyed",
    "pos": "adj.",
    "cn_def": "惱怒的;不耐煩的",
    "en_def": "a little angry",
    "sentence": "I was {{BLANK}} when my little brother kept talking during my online class, so I asked him to play in another room.",
    "cn": "我上線上課時弟弟一直講話,讓我很惱怒,所以我請他去別的房間玩。"
  },
  {
    "word": "phobia",
    "pos": "n.",
    "cn_def": "恐懼症",
    "en_def": "a very strong fear of something",
    "sentence": "Mark has a {{BLANK}} of heights, so he never goes on the glass bridge, even when his friends try to persuade him.",
    "cn": "馬克有懼高恐懼症,所以即使朋友試著說服他,他也從不走玻璃橋。"
  },
  {
    "word": "counsellor",
    "pos": "n.",
    "cn_def": "輔導員;諮商師",
    "en_def": "a person trained to listen and give advice about problems",
    "sentence": "If you feel stressed about school, you can talk to the school {{BLANK}}, and everything you say will be kept private.",
    "cn": "如果你對學業感到有壓力,可以找學校的輔導老師談談,你說的一切都會被保密。"
  },
  {
    "word": "therapist",
    "pos": "n.",
    "cn_def": "治療師",
    "en_def": "a person who helps people with mental or physical problems",
    "sentence": "After the car accident, Anna saw a {{BLANK}} every week, and slowly she felt brave enough to drive again.",
    "cn": "車禍之後,安娜每週去看治療師,慢慢地她覺得有勇氣再開車了。"
  },
  {
    "word": "therapy",
    "pos": "n.",
    "cn_def": "治療",
    "en_def": "treatment that helps someone feel better",
    "sentence": "Talking {{BLANK}} helped my cousin understand his feelings, and now he handles stress much better than before.",
    "cn": "談話治療幫助我表哥了解自己的感受,現在他處理壓力的能力比以前好多了。"
  },
  {
    "word": "psychologist",
    "pos": "n.",
    "cn_def": "心理學家;心理師",
    "en_def": "a person who studies the mind and behaviour",
    "sentence": "The {{BLANK}} explained that short breaks help the brain rest, so students should not study for hours without stopping.",
    "cn": "那位心理學家解釋說,短暫的休息能讓大腦休息,所以學生不應該連續讀好幾個小時都不停下來。"
  },
  {
    "word": "psychiatrist",
    "pos": "n.",
    "cn_def": "精神科醫師",
    "en_def": "a doctor who treats mental illness",
    "sentence": "Her family doctor sent her to a {{BLANK}}, because her sleeping problems had lasted for many months.",
    "cn": "她的家庭醫師把她轉介給精神科醫師,因為她的睡眠問題已經持續好幾個月了。"
  },
  {
    "word": "self-confidence",
    "pos": "n.",
    "cn_def": "自信心",
    "en_def": "belief in your own abilities",
    "sentence": "Joining the drama club gave Tina more {{BLANK}}, and now she is not afraid to share her ideas in class.",
    "cn": "加入戲劇社讓蒂娜更有自信心,現在她不再害怕在課堂上分享想法。"
  }
];

const MCQS = [
  {
    "q": "It is normal to feel a mix of _____ before graduation, because you are excited about the future but sad to leave your friends.",
    "options": [
      "tactic",
      "ambition",
      "emotion",
      "adversity"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Leo shouted in _____ when his computer crashed again, and he lost the essay he had been writing all evening.",
    "options": [
      "strain",
      "stomachache",
      "excuse",
      "frustration"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Instead of showing her _____ in front of the class, the teacher waited until she was calm and then spoke to the student.",
    "options": [
      "mentality",
      "anger",
      "decision",
      "achievement"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Many people have a _____ of speaking in public, but regular practice can make it much less frightening.",
    "options": [
      "fear",
      "procrastination",
      "volition",
      "trade-off"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Parents often _____ about their children's grades, but too much pressure from home can make students even more stressed.",
    "options": [
      "reconsider",
      "worry",
      "postpone",
      "focus"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Sam felt a strong sense of _____ after he forgot his best friend's birthday, so he bought her a gift the next day.",
    "options": [
      "guilt",
      "misconception",
      "setback",
      "volition"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "He felt deep _____ after cheating on the quiz, and he finally told his teacher the truth.",
    "options": [
      "analogy",
      "hobby",
      "shame",
      "temptation"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Her face turned red with _____ when she called her teacher \"Mum\" by mistake, but everyone laughed kindly.",
    "options": [
      "effort",
      "progress",
      "purpose",
      "embarrassment"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "A little _____ is natural when your friend wins a prize, but it should not stop you from congratulating her.",
    "options": [
      "jealousy",
      "setback",
      "comprehension",
      "adversity"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "I sometimes _____ students who never seem nervous before exams, but I know they probably work hard too.",
    "options": [
      "evoke",
      "dawdle",
      "subdue",
      "envy"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "After his grandmother died, Ken was full of _____, so his friends visited him often and listened to his stories about her.",
    "options": [
      "contention",
      "grief",
      "habit",
      "progress"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "It was a great _____ to hear that the flight was safe, because we had been waiting at the airport for hours.",
    "options": [
      "curiosity",
      "willpower",
      "relief",
      "disposition"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "My grandfather finds _____ in simple things, such as gardening and drinking tea with his old friends.",
    "options": [
      "purpose",
      "contentment",
      "failure",
      "misconception"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Finishing a difficult puzzle gives me a sense of _____, and it also helps me forget about my worries.",
    "options": [
      "satisfaction",
      "inspiration",
      "checklist",
      "perseverance"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Her _____ helped the whole team, because she always believed they could win even when they were behind.",
    "options": [
      "proponent",
      "downtime",
      "temptation",
      "optimism"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "There was a lot of _____ among the players after three losses, but the coach reminded them of their past successes.",
    "options": [
      "timetable",
      "gamble",
      "pessimism",
      "judgement"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Although the test was hard, Jenny felt _____ about her score, because she had studied every chapter carefully.",
    "options": [
      "irrational",
      "optimistic",
      "palpable",
      "optimum"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "My brother is always _____ about job interviews, so I tell him to focus on his strengths instead.",
    "options": [
      "pessimistic",
      "stubborn",
      "attentive",
      "monotonous"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The rainy weather made everyone feel _____, so our teacher played some cheerful music during the break.",
    "options": [
      "impetuous",
      "attentive",
      "lethargic",
      "gloomy"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The nurse was always _____ with her patients, and her smile made the hospital feel less frightening.",
    "options": [
      "peripheral",
      "last-minute",
      "cheerful",
      "weary"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Try to stay _____ during the exam, because panicking will only make you forget what you have learned.",
    "options": [
      "restless",
      "hectic",
      "stubborn",
      "calm"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Lily was _____ when her best friend moved to another city, but they still video-chat every weekend.",
    "options": [
      "perpetual",
      "hectic",
      "upset",
      "frazzled"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "I was _____ when my little brother kept talking during my online class, so I asked him to play in another room.",
    "options": [
      "burdensome",
      "annoyed",
      "devoid",
      "compulsory"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Mark has a _____ of heights, so he never goes on the glass bridge, even when his friends try to persuade him.",
    "options": [
      "phobia",
      "respite",
      "dismay",
      "downtime"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "If you feel stressed about school, you can talk to the school _____, and everything you say will be kept private.",
    "options": [
      "dismay",
      "counsellor",
      "avoidance",
      "gratitude"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "After the car accident, Anna saw a _____ every week, and slowly she felt brave enough to drive again.",
    "options": [
      "encouragement",
      "dismay",
      "headache",
      "therapist"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Talking _____ helped my cousin understand his feelings, and now he handles stress much better than before.",
    "options": [
      "therapy",
      "adversity",
      "choice",
      "shortcoming"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The _____ explained that short breaks help the brain rest, so students should not study for hours without stopping.",
    "options": [
      "encouragement",
      "exhaustion",
      "psychologist",
      "stomachache"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Her family doctor sent her to a _____, because her sleeping problems had lasted for many months.",
    "options": [
      "psychiatrist",
      "compulsion",
      "self-control",
      "trait"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Joining the drama club gave Tina more _____, and now she is not afraid to share her ideas in class.",
    "options": [
      "pressure",
      "self-confidence",
      "propensity",
      "overconfidence"
    ],
    "answer": 1,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "emotion": {
    "pos": "n.",
    "en_def": "a strong feeling such as love, fear or anger",
    "cn_def": "情緒;情感"
  },
  "frustration": {
    "pos": "n.",
    "en_def": "the feeling of being upset because you cannot do something",
    "cn_def": "挫折感"
  },
  "anger": {
    "pos": "n.",
    "en_def": "a strong feeling when something is wrong or unfair",
    "cn_def": "憤怒"
  },
  "fear": {
    "pos": "n.",
    "en_def": "the feeling you have when you think something bad will happen",
    "cn_def": "恐懼"
  },
  "worry": {
    "pos": "v.",
    "en_def": "to keep thinking about problems or bad things",
    "cn_def": "擔心"
  },
  "guilt": {
    "pos": "n.",
    "en_def": "a bad feeling because you did something wrong",
    "cn_def": "罪惡感"
  },
  "shame": {
    "pos": "n.",
    "en_def": "a painful feeling that you have done something wrong or silly",
    "cn_def": "羞愧"
  },
  "embarrassment": {
    "pos": "n.",
    "en_def": "the feeling of being shy or uncomfortable in front of others",
    "cn_def": "尷尬"
  },
  "jealousy": {
    "pos": "n.",
    "en_def": "an unhappy feeling when someone has what you want",
    "cn_def": "嫉妒"
  },
  "envy": {
    "pos": "v.",
    "en_def": "to want something that another person has",
    "cn_def": "羨慕"
  },
  "grief": {
    "pos": "n.",
    "en_def": "great sadness, especially when someone dies",
    "cn_def": "悲痛"
  },
  "relief": {
    "pos": "n.",
    "en_def": "a happy feeling when something worrying ends",
    "cn_def": "鬆了一口氣;寬慰"
  },
  "contentment": {
    "pos": "n.",
    "en_def": "a quiet feeling of being happy and satisfied",
    "cn_def": "滿足"
  },
  "satisfaction": {
    "pos": "n.",
    "en_def": "a pleased feeling after you do or get what you wanted",
    "cn_def": "滿意;滿足感"
  },
  "optimism": {
    "pos": "n.",
    "en_def": "the feeling that good things will happen",
    "cn_def": "樂觀"
  },
  "pessimism": {
    "pos": "n.",
    "en_def": "the feeling that bad things will happen",
    "cn_def": "悲觀"
  },
  "optimistic": {
    "pos": "adj.",
    "en_def": "hopeful that things will turn out well",
    "cn_def": "樂觀的"
  },
  "pessimistic": {
    "pos": "adj.",
    "en_def": "expecting things to go badly",
    "cn_def": "悲觀的"
  },
  "gloomy": {
    "pos": "adj.",
    "en_def": "sad and without hope",
    "cn_def": "憂鬱的;陰沉的"
  },
  "cheerful": {
    "pos": "adj.",
    "en_def": "happy and friendly",
    "cn_def": "開朗的;愉快的"
  },
  "calm": {
    "pos": "adj.",
    "en_def": "relaxed and not worried or excited",
    "cn_def": "冷靜的;平靜的"
  },
  "upset": {
    "pos": "adj.",
    "en_def": "unhappy or worried because something bad happened",
    "cn_def": "難過的;心煩的"
  },
  "annoyed": {
    "pos": "adj.",
    "en_def": "a little angry",
    "cn_def": "惱怒的;不耐煩的"
  },
  "phobia": {
    "pos": "n.",
    "en_def": "a very strong fear of something",
    "cn_def": "恐懼症"
  },
  "counsellor": {
    "pos": "n.",
    "en_def": "a person trained to listen and give advice about problems",
    "cn_def": "輔導員;諮商師"
  },
  "therapist": {
    "pos": "n.",
    "en_def": "a person who helps people with mental or physical problems",
    "cn_def": "治療師"
  },
  "therapy": {
    "pos": "n.",
    "en_def": "treatment that helps someone feel better",
    "cn_def": "治療"
  },
  "psychologist": {
    "pos": "n.",
    "en_def": "a person who studies the mind and behaviour",
    "cn_def": "心理學家;心理師"
  },
  "psychiatrist": {
    "pos": "n.",
    "en_def": "a doctor who treats mental illness",
    "cn_def": "精神科醫師"
  },
  "self-confidence": {
    "pos": "n.",
    "en_def": "belief in your own abilities",
    "cn_def": "自信心"
  },
  "tactic": {
    "pos": "n.",
    "en_def": "a method used to achieve something",
    "cn_def": "策略;手法"
  },
  "ambition": {
    "pos": "n.",
    "en_def": "a strong wish to be successful",
    "cn_def": "抱負;雄心"
  },
  "adversity": {
    "pos": "n.",
    "en_def": "a very difficult situation",
    "cn_def": "逆境"
  },
  "strain": {
    "pos": "n.",
    "en_def": "a difficult situation that makes you tired or worried",
    "cn_def": "負擔;壓力"
  },
  "stomachache": {
    "pos": "n.",
    "en_def": "a pain in your stomach",
    "cn_def": "胃痛;肚子痛"
  },
  "excuse": {
    "pos": "n.",
    "en_def": "a reason you give to explain a mistake or avoid something",
    "cn_def": "藉口"
  },
  "mentality": {
    "pos": "n.",
    "en_def": "a typical way of thinking",
    "cn_def": "心態;思維模式"
  },
  "decision": {
    "pos": "n.",
    "en_def": "a choice you make after thinking",
    "cn_def": "決定"
  },
  "achievement": {
    "pos": "n.",
    "en_def": "something good you have done through hard work",
    "cn_def": "成就"
  },
  "procrastination": {
    "pos": "n.",
    "en_def": "the habit of delaying things you should do",
    "cn_def": "拖延(症)"
  },
  "volition": {
    "pos": "n.",
    "en_def": "the power to choose for yourself",
    "cn_def": "自願;意志"
  },
  "trade-off": {
    "pos": "n.",
    "en_def": "a balance between two things you cannot have together",
    "cn_def": "權衡;取捨"
  },
  "reconsider": {
    "pos": "v.",
    "en_def": "to think again about a decision",
    "cn_def": "重新考慮"
  },
  "postpone": {
    "pos": "v.",
    "en_def": "to move an event to a later time",
    "cn_def": "延期;延後"
  },
  "focus": {
    "pos": "v.",
    "en_def": "to give all your attention to one thing",
    "cn_def": "專注"
  },
  "misconception": {
    "pos": "n.",
    "en_def": "a wrong idea or belief",
    "cn_def": "誤解;錯誤觀念"
  },
  "setback": {
    "pos": "n.",
    "en_def": "a problem that delays your progress",
    "cn_def": "挫折;阻礙"
  },
  "analogy": {
    "pos": "n.",
    "en_def": "a comparison that explains one thing by showing how it is like another",
    "cn_def": "類比"
  },
  "hobby": {
    "pos": "n.",
    "en_def": "an activity you enjoy in your free time",
    "cn_def": "嗜好"
  },
  "temptation": {
    "pos": "n.",
    "en_def": "a strong wish to do something you should not do",
    "cn_def": "誘惑"
  },
  "effort": {
    "pos": "n.",
    "en_def": "the hard work you use to do something",
    "cn_def": "努力"
  },
  "progress": {
    "pos": "n.",
    "en_def": "movement towards a goal or improvement",
    "cn_def": "進步;進展"
  },
  "purpose": {
    "pos": "n.",
    "en_def": "a reason that gives your life or work meaning",
    "cn_def": "目的;意義"
  },
  "comprehension": {
    "pos": "n.",
    "en_def": "the ability to understand something",
    "cn_def": "理解(力)"
  },
  "evoke": {
    "pos": "v.",
    "en_def": "to bring a feeling or memory into your mind",
    "cn_def": "喚起;引起"
  },
  "dawdle": {
    "pos": "v.",
    "en_def": "to move or act very slowly",
    "cn_def": "磨蹭;拖拖拉拉"
  },
  "subdue": {
    "pos": "v.",
    "en_def": "to bring a strong feeling under control",
    "cn_def": "抑制;克制"
  },
  "contention": {
    "pos": "n.",
    "en_def": "an opinion that someone argues for",
    "cn_def": "論點;主張"
  },
  "habit": {
    "pos": "n.",
    "en_def": "something you do regularly, often without thinking",
    "cn_def": "習慣"
  },
  "curiosity": {
    "pos": "n.",
    "en_def": "a strong wish to know or learn something",
    "cn_def": "好奇心"
  },
  "willpower": {
    "pos": "n.",
    "en_def": "the ability to control what you do and resist temptation",
    "cn_def": "意志力"
  },
  "disposition": {
    "pos": "n.",
    "en_def": "a person's natural character",
    "cn_def": "性情;氣質"
  },
  "failure": {
    "pos": "n.",
    "en_def": "a lack of success",
    "cn_def": "失敗"
  },
  "inspiration": {
    "pos": "n.",
    "en_def": "something that gives you new ideas or makes you want to do something",
    "cn_def": "靈感;鼓舞"
  },
  "checklist": {
    "pos": "n.",
    "en_def": "a list of things to check or do",
    "cn_def": "檢查清單"
  },
  "perseverance": {
    "pos": "n.",
    "en_def": "continuing to try even when progress is slow",
    "cn_def": "毅力;堅持不懈"
  },
  "proponent": {
    "pos": "n.",
    "en_def": "a person who supports an idea",
    "cn_def": "支持者;擁護者"
  },
  "downtime": {
    "pos": "n.",
    "en_def": "time when you rest and do not work",
    "cn_def": "休息時間;空閒時間"
  },
  "timetable": {
    "pos": "n.",
    "en_def": "a list of times when classes or events happen",
    "cn_def": "課表;時刻表"
  },
  "gamble": {
    "pos": "n.",
    "en_def": "a risky action that may succeed or fail",
    "cn_def": "冒險;賭注"
  },
  "judgement": {
    "pos": "n.",
    "en_def": "the ability to make good decisions",
    "cn_def": "判斷(力)"
  },
  "irrational": {
    "pos": "adj.",
    "en_def": "not based on clear thinking",
    "cn_def": "不理性的"
  },
  "palpable": {
    "pos": "adj.",
    "en_def": "so strong that it can almost be felt",
    "cn_def": "明顯的;可感覺到的"
  },
  "optimum": {
    "pos": "adj.",
    "en_def": "best; most suitable",
    "cn_def": "最佳的;最適宜的"
  },
  "stubborn": {
    "pos": "adj.",
    "en_def": "not willing to change your mind",
    "cn_def": "固執的"
  },
  "attentive": {
    "pos": "adj.",
    "en_def": "listening or watching carefully",
    "cn_def": "專心的;留意的"
  },
  "monotonous": {
    "pos": "adj.",
    "en_def": "boring because it never changes",
    "cn_def": "單調乏味的"
  },
  "impetuous": {
    "pos": "adj.",
    "en_def": "acting quickly without thinking carefully",
    "cn_def": "衝動的;魯莽的"
  },
  "lethargic": {
    "pos": "adj.",
    "en_def": "tired and without energy",
    "cn_def": "無精打采的;懶洋洋的"
  },
  "peripheral": {
    "pos": "adj.",
    "en_def": "not as important as the main part",
    "cn_def": "次要的;周邊的"
  },
  "last-minute": {
    "pos": "adj.",
    "en_def": "done at the latest possible time",
    "cn_def": "最後一刻的;臨時的"
  },
  "weary": {
    "pos": "adj.",
    "en_def": "very tired",
    "cn_def": "疲倦的;厭倦的"
  },
  "restless": {
    "pos": "adj.",
    "en_def": "unable to stay still or relax",
    "cn_def": "焦躁不安的"
  },
  "hectic": {
    "pos": "adj.",
    "en_def": "very busy and full of activity",
    "cn_def": "忙亂的"
  },
  "perpetual": {
    "pos": "adj.",
    "en_def": "never ending; happening again and again",
    "cn_def": "永久的;不斷的"
  },
  "frazzled": {
    "pos": "adj.",
    "en_def": "very tired and upset because of too much to do",
    "cn_def": "疲憊不堪的"
  },
  "burdensome": {
    "pos": "adj.",
    "en_def": "difficult to deal with; heavy",
    "cn_def": "繁重的;累贅的"
  },
  "devoid": {
    "pos": "adj.",
    "en_def": "completely without something",
    "cn_def": "完全沒有的"
  },
  "compulsory": {
    "pos": "adj.",
    "en_def": "required by law or rules",
    "cn_def": "義務的;強制的"
  },
  "respite": {
    "pos": "n.",
    "en_def": "a short rest from something difficult",
    "cn_def": "暫緩;喘息"
  },
  "dismay": {
    "pos": "n.",
    "en_def": "a feeling of shock and disappointment",
    "cn_def": "驚愕;沮喪"
  },
  "avoidance": {
    "pos": "n.",
    "en_def": "staying away from something you do not want to face",
    "cn_def": "逃避;迴避"
  },
  "gratitude": {
    "pos": "n.",
    "en_def": "the feeling of being thankful",
    "cn_def": "感恩;感激"
  },
  "encouragement": {
    "pos": "n.",
    "en_def": "words or actions that give someone confidence",
    "cn_def": "鼓勵"
  },
  "headache": {
    "pos": "n.",
    "en_def": "a pain in your head",
    "cn_def": "頭痛"
  },
  "choice": {
    "pos": "n.",
    "en_def": "the act of picking one thing from several",
    "cn_def": "選擇"
  },
  "shortcoming": {
    "pos": "n.",
    "en_def": "a weakness or fault",
    "cn_def": "缺點;短處"
  },
  "exhaustion": {
    "pos": "n.",
    "en_def": "the state of being extremely tired",
    "cn_def": "筋疲力盡"
  },
  "compulsion": {
    "pos": "n.",
    "en_def": "a strong feeling that you must do something",
    "cn_def": "強迫;衝動"
  },
  "self-control": {
    "pos": "n.",
    "en_def": "the ability to control your feelings and actions",
    "cn_def": "自制力"
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
  "propensity": {
    "pos": "n.",
    "en_def": "a natural tendency to behave in a certain way",
    "cn_def": "傾向;習性"
  },
  "overconfidence": {
    "pos": "n.",
    "en_def": "too much belief in your own ability",
    "cn_def": "過度自信"
  }
};

const EXTRA_GLOSSES = {};
