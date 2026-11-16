// Topic 1 Subunit 13 Quiz Data: Academic Words 學術單字 6 (vital – insufficient)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T01 S13 - Academic Words 學術單字 6 (vital – insufficient)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "vital",
    "pos": "adj.",
    "cn_def": "極為重要的",
    "en_def": "extremely important and necessary",
    "sentence": "It is {{BLANK}} to teach children about online safety early, because many of them have phones before they are ten.",
    "cn": "及早教孩子網路安全是極為重要的,因為他們很多人不到十歲就有手機了。"
  },
  {
    "word": "primary",
    "pos": "adj.",
    "cn_def": "主要的",
    "en_def": "main; most important",
    "sentence": "The {{BLANK}} goal of the new law is to protect children, but it also gives adults more control over their data.",
    "cn": "這項新法律的主要目標是保護兒童,但它也讓成人對自己的資料有更多掌控。"
  },
  {
    "word": "secondary",
    "pos": "adj.",
    "cn_def": "次要的",
    "en_def": "less important than something else",
    "sentence": "For our teacher, the final grade is {{BLANK}}, and what matters most is that we learn to think for ourselves.",
    "cn": "對我們的老師來說,最終成績是次要的,最重要的是我們學會獨立思考。"
  },
  {
    "word": "subsequent",
    "pos": "adj.",
    "cn_def": "隨後的;後續的",
    "en_def": "happening after something else",
    "sentence": "The first version of the app had many problems, but {{BLANK}} updates fixed most of them, so users came back.",
    "cn": "這個應用程式的第一版有很多問題,但後續的更新修好了大部分,所以使用者又回來了。"
  },
  {
    "word": "prior",
    "pos": "adj.",
    "cn_def": "先前的;事先的",
    "en_def": "happening before something",
    "sentence": "No {{BLANK}} experience is needed for the coding course, so anyone who is curious about AI can join.",
    "cn": "這門程式課不需要事先的經驗,所以任何對人工智慧好奇的人都可以參加。"
  },
  {
    "word": "previously",
    "pos": "adv.",
    "cn_def": "以前;先前",
    "en_def": "before now or before a particular time",
    "sentence": "The job was {{BLANK}} done by three people, but now one worker and an AI program handle it together.",
    "cn": "這份工作以前是由三個人做的,但現在由一名員工和一套人工智慧程式一起處理。"
  },
  {
    "word": "initially",
    "pos": "adv.",
    "cn_def": "最初;起初",
    "en_def": "at the beginning",
    "sentence": "{{BLANK}}, I thought the AI tutor was boring, but after a few weeks I found that my speaking had improved a lot.",
    "cn": "起初,我覺得人工智慧家教很無聊,但幾週後我發現我的口說進步了很多。"
  },
  {
    "word": "ultimately",
    "pos": "adv.",
    "cn_def": "最終;終究",
    "en_def": "in the end; finally",
    "sentence": "AI can give advice, but {{BLANK}} it is the doctor who must decide on the treatment and explain it to the patient.",
    "cn": "人工智慧能給建議,但最終還是由醫生決定治療方式並向病人說明。"
  },
  {
    "word": "eventually",
    "pos": "adv.",
    "cn_def": "終於;最後",
    "en_def": "after a long time or many problems",
    "sentence": "The robot made many mistakes at first, but it {{BLANK}} learned to fold clothes as well as a person.",
    "cn": "這個機器人一開始犯了很多錯,但它最後學會了像人一樣好地摺衣服。"
  },
  {
    "word": "furthermore",
    "pos": "adv.",
    "cn_def": "此外;而且",
    "en_def": "in addition; also",
    "sentence": "The app is free, and {{BLANK}}, it works without the internet, so it is perfect for students in the countryside.",
    "cn": "這個應用程式是免費的,而且它不需要網路就能使用,所以非常適合鄉下的學生。"
  },
  {
    "word": "moreover",
    "pos": "adv.",
    "cn_def": "此外;再者",
    "en_def": "used to add more information",
    "sentence": "Online classes save travel time; {{BLANK}}, students can watch the recordings again if they miss something.",
    "cn": "線上課程節省通勤時間;此外,學生如果漏掉什麼還可以再看錄影。"
  },
  {
    "word": "nevertheless",
    "pos": "adv.",
    "cn_def": "儘管如此;然而",
    "en_def": "despite what has just been said",
    "sentence": "The AI essay had perfect grammar; {{BLANK}}, the teacher gave it a low mark because it had no personal ideas.",
    "cn": "那篇人工智慧作文文法完美;儘管如此,老師還是給了低分,因為它沒有個人的想法。"
  },
  {
    "word": "whereas",
    "pos": "phr.",
    "cn_def": "然而;反之",
    "en_def": "used to compare two different facts",
    "sentence": "My brother learns best from videos, {{BLANK}} I prefer reading because I can stop and think about each sentence.",
    "cn": "我哥哥看影片學得最好,而我比較喜歡閱讀,因為我可以停下來思考每個句子。"
  },
  {
    "word": "thereby",
    "pos": "adv.",
    "cn_def": "因此;從而",
    "en_def": "as a result of this action",
    "sentence": "The school blocked some websites during tests, {{BLANK}} making it harder for students to search for answers online.",
    "cn": "學校在考試期間封鎖了某些網站,從而讓學生更難上網搜尋答案。"
  },
  {
    "word": "hence",
    "pos": "adv.",
    "cn_def": "因此",
    "en_def": "for this reason",
    "sentence": "The robot cannot climb stairs, {{BLANK}} it is only used on the ground floor, but the company is building a better model.",
    "cn": "這個機器人不能爬樓梯,因此它只用在一樓,但公司正在打造更好的機型。"
  },
  {
    "word": "albeit",
    "pos": "phr.",
    "cn_def": "雖然;儘管",
    "en_def": "although",
    "sentence": "The new translation app is useful, {{BLANK}} a little slow, so I still carry a small dictionary when I travel.",
    "cn": "這個新的翻譯應用程式很有用,雖然有點慢,所以我旅行時還是會帶一本小字典。"
  },
  {
    "word": "alternatively",
    "pos": "adv.",
    "cn_def": "或者;另一個選擇是",
    "en_def": "used to suggest another choice",
    "sentence": "You can hand in your project on paper; {{BLANK}}, you can upload it online, but please do not do both.",
    "cn": "你可以交紙本專題;或者,你也可以上傳到網路,但請不要兩種都交。"
  },
  {
    "word": "alternative",
    "pos": "n.",
    "cn_def": "替代方案;選擇",
    "en_def": "another choice or possibility",
    "sentence": "If the school bans phones, it should offer an {{BLANK}}, such as tablets, so students can still use learning apps.",
    "cn": "如果學校禁止手機,就應該提供替代方案,例如平板,讓學生仍能使用學習應用程式。"
  },
  {
    "word": "equivalent",
    "pos": "n.",
    "cn_def": "相等物;同等的東西",
    "en_def": "something that has the same value or meaning",
    "sentence": "An hour of online tutoring costs the {{BLANK}} of two cups of coffee, so many families can afford it.",
    "cn": "一小時的線上家教費用相當於兩杯咖啡,所以許多家庭都負擔得起。"
  },
  {
    "word": "comparable",
    "pos": "adj.",
    "cn_def": "可比較的;相當的",
    "en_def": "similar enough to be compared",
    "sentence": "The cheaper laptop has {{BLANK}} speed to the expensive one, so I bought it and spent the extra money on books.",
    "cn": "這台較便宜的筆電和貴的那台速度相當,所以我買了它,並把省下的錢拿去買書。"
  },
  {
    "word": "relevant",
    "pos": "adj.",
    "cn_def": "相關的",
    "en_def": "connected to what is being discussed",
    "sentence": "The AI gave me lots of information, but much of it was not {{BLANK}} to my topic, so I had to delete half of it.",
    "cn": "人工智慧給了我很多資訊,但很多都和我的主題不相關,所以我必須刪掉一半。"
  },
  {
    "word": "appropriate",
    "pos": "adj.",
    "cn_def": "適當的;合適的",
    "en_def": "suitable for a situation",
    "sentence": "It is not {{BLANK}} to use a chatbot during a test, but it can be a helpful study partner at home.",
    "cn": "考試時使用聊天機器人是不適當的,但在家裡它可以是有幫助的讀書夥伴。"
  },
  {
    "word": "adequate",
    "pos": "adj.",
    "cn_def": "足夠的;適當的",
    "en_def": "enough or good enough for a purpose",
    "sentence": "Many rural schools do not have {{BLANK}} computers, so students must share one device between three people.",
    "cn": "許多鄉村學校沒有足夠的電腦,所以學生必須三個人共用一台設備。"
  },
  {
    "word": "sufficient",
    "pos": "adj.",
    "cn_def": "充足的;足夠的",
    "en_def": "enough for a particular purpose",
    "sentence": "One week was not {{BLANK}} time to learn the new software, so the manager gave the team another training session.",
    "cn": "一週的時間不足以學會新軟體,所以經理又為團隊安排了一次培訓課程。"
  },
  {
    "word": "insufficient",
    "pos": "adj.",
    "cn_def": "不足的",
    "en_def": "not enough",
    "sentence": "The study used {{BLANK}} data from older people, so its results may not apply to everyone.",
    "cn": "這項研究使用的長者資料不足,所以它的結果可能不適用於每個人。"
  }
];

const MCQS = [
  {
    "q": "It is _____ to teach children about online safety early, because many of them have phones before they are ten.",
    "options": [
      "valid",
      "futuristic",
      "vital",
      "dystopian"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The _____ goal of the new law is to protect children, but it also gives adults more control over their data.",
    "options": [
      "biometric",
      "valid",
      "scarce",
      "primary"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "For our teacher, the final grade is _____, and what matters most is that we learn to think for ourselves.",
    "options": [
      "secondary",
      "confidential",
      "ethical",
      "widespread"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The first version of the app had many problems, but _____ updates fixed most of them, so users came back.",
    "options": [
      "objective",
      "subsequent",
      "evident",
      "precise"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "No _____ experience is needed for the coding course, so anyone who is curious about AI can join.",
    "options": [
      "biased",
      "subjective",
      "prior",
      "significant"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The job was _____ done by three people, but now one worker and an AI program handle it together.",
    "options": [
      "previously",
      "nevertheless",
      "furthermore",
      "approximately"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "_____, I thought the AI tutor was boring, but after a few weeks I found that my speaking had improved a lot.",
    "options": [
      "thereby",
      "furthermore",
      "eventually",
      "initially"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "AI can give advice, but _____ it is the doctor who must decide on the treatment and explain it to the patient.",
    "options": [
      "hence",
      "ultimately",
      "alternatively",
      "approximately"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The robot made many mistakes at first, but it _____ learned to fold clothes as well as a person.",
    "options": [
      "dramatically",
      "previously",
      "moreover",
      "eventually"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The app is free, and _____, it works without the internet, so it is perfect for students in the countryside.",
    "options": [
      "furthermore",
      "dramatically",
      "ultimately",
      "alternatively"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Online classes save travel time; _____, students can watch the recordings again if they miss something.",
    "options": [
      "nevertheless",
      "dramatically",
      "moreover",
      "previously"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The AI essay had perfect grammar; _____, the teacher gave it a low mark because it had no personal ideas.",
    "options": [
      "thereby",
      "nevertheless",
      "eventually",
      "previously"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "My brother learns best from videos, _____ I prefer reading because I can stop and think about each sentence.",
    "options": [
      "syllabus",
      "potential",
      "whereas",
      "argue"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The school blocked some websites during tests, _____ making it harder for students to search for answers online.",
    "options": [
      "hence",
      "ultimately",
      "alternatively",
      "thereby"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The robot cannot climb stairs, _____ it is only used on the ground floor, but the company is building a better model.",
    "options": [
      "moreover",
      "hence",
      "previously",
      "initially"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The new translation app is useful, _____ a little slow, so I still carry a small dictionary when I travel.",
    "options": [
      "albeit",
      "customise",
      "revolutionise",
      "authentication"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "You can hand in your project on paper; _____, you can upload it online, but please do not do both.",
    "options": [
      "dramatically",
      "alternatively",
      "moreover",
      "thereby"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "If the school bans phones, it should offer an _____, such as tablets, so students can still use learning apps.",
    "options": [
      "alternative",
      "template",
      "loophole",
      "regulator"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "An hour of online tutoring costs the _____ of two cups of coffee, so many families can afford it.",
    "options": [
      "password",
      "recruiter",
      "potential",
      "equivalent"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The cheaper laptop has _____ speed to the expensive one, so I bought it and spent the extra money on books.",
    "options": [
      "robotic",
      "realistic",
      "comparable",
      "inevitable"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The AI gave me lots of information, but much of it was not _____ to my topic, so I had to delete half of it.",
    "options": [
      "virtual",
      "relevant",
      "gradual",
      "self-paced"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "It is not _____ to use a chatbot during a test, but it can be a helpful study partner at home.",
    "options": [
      "appropriate",
      "fundamental",
      "complex",
      "widespread"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Many rural schools do not have _____ computers, so students must share one device between three people.",
    "options": [
      "biased",
      "objective",
      "adequate",
      "dishonest"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "One week was not _____ time to learn the new software, so the manager gave the team another training session.",
    "options": [
      "artificial",
      "interactive",
      "fundamental",
      "sufficient"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The study used _____ data from older people, so its results may not apply to everyone.",
    "options": [
      "insufficient",
      "substantial",
      "realistic",
      "convenient"
    ],
    "answer": 0,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "vital": {
    "pos": "adj.",
    "en_def": "extremely important and necessary",
    "cn_def": "極為重要的"
  },
  "primary": {
    "pos": "adj.",
    "en_def": "main; most important",
    "cn_def": "主要的"
  },
  "secondary": {
    "pos": "adj.",
    "en_def": "less important than something else",
    "cn_def": "次要的"
  },
  "subsequent": {
    "pos": "adj.",
    "en_def": "happening after something else",
    "cn_def": "隨後的;後續的"
  },
  "prior": {
    "pos": "adj.",
    "en_def": "happening before something",
    "cn_def": "先前的;事先的"
  },
  "previously": {
    "pos": "adv.",
    "en_def": "before now or before a particular time",
    "cn_def": "以前;先前"
  },
  "initially": {
    "pos": "adv.",
    "en_def": "at the beginning",
    "cn_def": "最初;起初"
  },
  "ultimately": {
    "pos": "adv.",
    "en_def": "in the end; finally",
    "cn_def": "最終;終究"
  },
  "eventually": {
    "pos": "adv.",
    "en_def": "after a long time or many problems",
    "cn_def": "終於;最後"
  },
  "furthermore": {
    "pos": "adv.",
    "en_def": "in addition; also",
    "cn_def": "此外;而且"
  },
  "moreover": {
    "pos": "adv.",
    "en_def": "used to add more information",
    "cn_def": "此外;再者"
  },
  "nevertheless": {
    "pos": "adv.",
    "en_def": "despite what has just been said",
    "cn_def": "儘管如此;然而"
  },
  "whereas": {
    "pos": "phr.",
    "en_def": "used to compare two different facts",
    "cn_def": "然而;反之"
  },
  "thereby": {
    "pos": "adv.",
    "en_def": "as a result of this action",
    "cn_def": "因此;從而"
  },
  "hence": {
    "pos": "adv.",
    "en_def": "for this reason",
    "cn_def": "因此"
  },
  "albeit": {
    "pos": "phr.",
    "en_def": "although",
    "cn_def": "雖然;儘管"
  },
  "alternatively": {
    "pos": "adv.",
    "en_def": "used to suggest another choice",
    "cn_def": "或者;另一個選擇是"
  },
  "alternative": {
    "pos": "n.",
    "en_def": "another choice or possibility",
    "cn_def": "替代方案;選擇"
  },
  "equivalent": {
    "pos": "n.",
    "en_def": "something that has the same value or meaning",
    "cn_def": "相等物;同等的東西"
  },
  "comparable": {
    "pos": "adj.",
    "en_def": "similar enough to be compared",
    "cn_def": "可比較的;相當的"
  },
  "relevant": {
    "pos": "adj.",
    "en_def": "connected to what is being discussed",
    "cn_def": "相關的"
  },
  "appropriate": {
    "pos": "adj.",
    "en_def": "suitable for a situation",
    "cn_def": "適當的;合適的"
  },
  "adequate": {
    "pos": "adj.",
    "en_def": "enough or good enough for a purpose",
    "cn_def": "足夠的;適當的"
  },
  "sufficient": {
    "pos": "adj.",
    "en_def": "enough for a particular purpose",
    "cn_def": "充足的;足夠的"
  },
  "insufficient": {
    "pos": "adj.",
    "en_def": "not enough",
    "cn_def": "不足的"
  },
  "valid": {
    "pos": "adj.",
    "en_def": "based on good reasons or facts; acceptable",
    "cn_def": "有效的;站得住腳的"
  },
  "futuristic": {
    "pos": "adj.",
    "en_def": "very modern and seeming to come from the future",
    "cn_def": "未來感的"
  },
  "dystopian": {
    "pos": "adj.",
    "en_def": "describing a frightening imagined future where life is bad",
    "cn_def": "反烏托邦的"
  },
  "biometric": {
    "pos": "adj.",
    "en_def": "using body features like fingerprints or faces to identify people",
    "cn_def": "生物辨識的"
  },
  "scarce": {
    "pos": "adj.",
    "en_def": "not easy to find; not enough",
    "cn_def": "稀少的;缺乏的"
  },
  "confidential": {
    "pos": "adj.",
    "en_def": "meant to be kept secret",
    "cn_def": "機密的"
  },
  "ethical": {
    "pos": "adj.",
    "en_def": "morally right or acceptable",
    "cn_def": "合乎道德的;倫理的"
  },
  "widespread": {
    "pos": "adj.",
    "en_def": "happening in many places or among many people",
    "cn_def": "普遍的;廣泛的"
  },
  "objective": {
    "pos": "adj.",
    "en_def": "based on facts, not personal feelings",
    "cn_def": "客觀的"
  },
  "evident": {
    "pos": "adj.",
    "en_def": "clear and easy to notice",
    "cn_def": "顯而易見的"
  },
  "precise": {
    "pos": "adj.",
    "en_def": "exact and clear in every detail",
    "cn_def": "精確的"
  },
  "biased": {
    "pos": "adj.",
    "en_def": "unfairly favouring one side or group",
    "cn_def": "有偏見的;偏頗的"
  },
  "subjective": {
    "pos": "adj.",
    "en_def": "based on personal feelings or opinions",
    "cn_def": "主觀的"
  },
  "significant": {
    "pos": "adj.",
    "en_def": "large or important enough to notice",
    "cn_def": "顯著的;重大的"
  },
  "approximately": {
    "pos": "adv.",
    "en_def": "close to an exact number, but not exactly",
    "cn_def": "大約"
  },
  "dramatically": {
    "pos": "adv.",
    "en_def": "in a sudden and very noticeable way",
    "cn_def": "大幅地;劇烈地"
  },
  "syllabus": {
    "pos": "n.",
    "en_def": "a list of topics and plans for a course",
    "cn_def": "課程大綱"
  },
  "potential": {
    "pos": "n.",
    "en_def": "the possibility of developing or being useful in the future",
    "cn_def": "潛力;可能性"
  },
  "argue": {
    "pos": "v.",
    "en_def": "to give reasons to support an opinion",
    "cn_def": "主張;論證"
  },
  "customise": {
    "pos": "v.",
    "en_def": "to change something to suit your own needs",
    "cn_def": "客製化;自訂"
  },
  "revolutionise": {
    "pos": "v.",
    "en_def": "to change something completely and in a big way",
    "cn_def": "徹底改變"
  },
  "authentication": {
    "pos": "n.",
    "en_def": "the process of proving who you are to a system",
    "cn_def": "身分驗證"
  },
  "template": {
    "pos": "n.",
    "en_def": "a ready-made pattern you can use and fill in",
    "cn_def": "範本;模板"
  },
  "loophole": {
    "pos": "n.",
    "en_def": "a gap in a rule that lets people avoid it",
    "cn_def": "漏洞"
  },
  "regulator": {
    "pos": "n.",
    "en_def": "an official group that makes sure rules are followed",
    "cn_def": "監管機構"
  },
  "password": {
    "pos": "n.",
    "en_def": "a secret word or set of letters used to enter an account",
    "cn_def": "密碼"
  },
  "recruiter": {
    "pos": "n.",
    "en_def": "a person who finds new workers for companies",
    "cn_def": "招募人員"
  },
  "robotic": {
    "pos": "adj.",
    "en_def": "related to or like a robot",
    "cn_def": "機器人的;機械般的"
  },
  "realistic": {
    "pos": "adj.",
    "en_def": "looking or seeming very real",
    "cn_def": "逼真的;寫實的"
  },
  "inevitable": {
    "pos": "adj.",
    "en_def": "certain to happen and impossible to avoid",
    "cn_def": "不可避免的"
  },
  "virtual": {
    "pos": "adj.",
    "en_def": "existing on a computer, not in the real world",
    "cn_def": "虛擬的"
  },
  "gradual": {
    "pos": "adj.",
    "en_def": "happening slowly over a long time",
    "cn_def": "逐漸的"
  },
  "self-paced": {
    "pos": "adj.",
    "en_def": "letting you learn at your own speed",
    "cn_def": "自主進度的"
  },
  "fundamental": {
    "pos": "adj.",
    "en_def": "basic and very important",
    "cn_def": "基本的;根本的"
  },
  "complex": {
    "pos": "adj.",
    "en_def": "made of many parts and difficult to understand",
    "cn_def": "複雜的"
  },
  "dishonest": {
    "pos": "adj.",
    "en_def": "not telling the truth; likely to cheat",
    "cn_def": "不誠實的"
  },
  "artificial": {
    "pos": "adj.",
    "en_def": "made by people, not natural",
    "cn_def": "人造的;人工的"
  },
  "interactive": {
    "pos": "adj.",
    "en_def": "allowing people and computers to respond to each other",
    "cn_def": "互動式的"
  },
  "substantial": {
    "pos": "adj.",
    "en_def": "large in amount or importance",
    "cn_def": "大量的;可觀的"
  },
  "convenient": {
    "pos": "adj.",
    "en_def": "easy and saving you time or trouble",
    "cn_def": "方便的"
  }
};

const EXTRA_GLOSSES = {};
