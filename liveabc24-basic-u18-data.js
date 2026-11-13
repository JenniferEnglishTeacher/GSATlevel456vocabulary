// Unit 18 Quiz Data: cinema – emerge
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Basic U18 - cinema – emerge",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "cinema",
    "pos": "n.",
    "cn_def": "電影院;戲院",
    "en_def": "a building where people go to watch films",
    "sentence": "They went to the {{BLANK}} to watch the latest blockbuster.",
    "cn": "他們去電影院看最新的大片。"
  },
  {
    "word": "cinematic",
    "pos": "adj.",
    "cn_def": "電影的;電影風格的",
    "en_def": "relating to films or looking like a film",
    "sentence": "The film had a {{BLANK}} quality that captivated the audience.",
    "cn": "這部電影有一種電影風格的質感，吸引了觀眾。"
  },
  {
    "word": "essential",
    "pos": "adj.",
    "cn_def": "關鍵的;重要的;必不可少的",
    "en_def": "completely necessary; very important",
    "sentence": "Exercise is {{BLANK}} for maintaining good health.",
    "cn": "運動對保持健康是必不可少的。"
  },
  {
    "word": "essence",
    "pos": "n.",
    "cn_def": "本質;精華",
    "en_def": "the most important quality or basic nature of something",
    "sentence": "The {{BLANK}} of his argument was clear and persuasive.",
    "cn": "他的論點的精華明確而有說服力。"
  },
  {
    "word": "entertain",
    "pos": "v.",
    "cn_def": "娛樂;使快樂",
    "en_def": "to interest and amuse people",
    "sentence": "The magician will {{BLANK}} the children at the birthday party.",
    "cn": "魔術師將在生日派對上娛樂孩子們。"
  },
  {
    "word": "entertainment",
    "pos": "n.",
    "cn_def": "娛樂;表演",
    "en_def": "films, music, shows and other things that people enjoy watching or doing",
    "sentence": "The theme park offers a variety of {{BLANK}} for visitors.",
    "cn": "這個主題公園為遊客提供各種娛樂活動。"
  },
  {
    "word": "entertaining",
    "pos": "adj.",
    "cn_def": "有趣的;使人愉悅的",
    "en_def": "interesting and amusing",
    "sentence": "The comedian's jokes were {{BLANK}} and made everyone laugh.",
    "cn": "這個喜劇演員的笑話很有趣，讓每個人都笑了起來。"
  },
  {
    "word": "entertainer",
    "pos": "n.",
    "cn_def": "表演者;娛樂家",
    "en_def": "a person whose job is to sing, dance or tell jokes for an audience",
    "sentence": "The singer is a talented {{BLANK}} who performs regularly at the club.",
    "cn": "這位歌手是一位才華橫溢的表演者，經常在俱樂部演出。"
  },
  {
    "word": "direct",
    "pos": "v.",
    "cn_def": "指導;引導",
    "en_def": "to be in charge of or guide people or an activity",
    "sentence": "The coach will {{BLANK}} the team during the match.",
    "cn": "教練將在比賽期間指導球隊。"
  },
  {
    "word": "direct",
    "pos": "adj.",
    "cn_def": "直接的;直率的",
    "en_def": "going straight to a place or person, with nothing in between; honest and clear",
    "sentence": "His {{BLANK}} approach to problem-solving is effective.",
    "cn": "他對解決問題的直接方法是有效的。"
  },
  {
    "word": "indirect",
    "pos": "adj.",
    "cn_def": "間接的",
    "en_def": "not going straight to the point; not immediately caused by something",
    "sentence": "She used an {{BLANK}} route to avoid traffic.",
    "cn": "她走了一條間接路線以避開交通。"
  },
  {
    "word": "director",
    "pos": "n.",
    "cn_def": "導演",
    "en_def": "the person who is in charge of making a film or play",
    "sentence": "The {{BLANK}} of the movie won several awards for his work.",
    "cn": "這部電影的導演因其工作而獲得了幾個獎項。"
  },
  {
    "word": "directions",
    "pos": "n.",
    "cn_def": "方向;指導",
    "en_def": "the way that someone or something is moving or pointing; instructions on how to do something",
    "sentence": "Follow the {{BLANK}} on the map to reach the destination.",
    "cn": "按照地圖上的方向走到目的地。"
  },
  {
    "word": "directly",
    "pos": "adv.",
    "cn_def": "直接地",
    "en_def": "in a straight line; with nothing or no one in between",
    "sentence": "You can {{BLANK}} contact me if you have any questions.",
    "cn": "如果你有任何問題，可以直接與我聯繫。"
  },
  {
    "word": "indirectly",
    "pos": "adv.",
    "cn_def": "間接地",
    "en_def": "in a way that is not straight or not immediate",
    "sentence": "She learned about the news {{BLANK}} from her friend.",
    "cn": "她從朋友那裡間接得知了這則消息。"
  },
  {
    "word": "silence",
    "pos": "n.",
    "cn_def": "寂靜;沉默",
    "en_def": "a complete lack of noise or speech",
    "sentence": "The {{BLANK}} in the room was awkward after the argument.",
    "cn": "爭吵後房間裡的寂靜令人尷尬。"
  },
  {
    "word": "silent",
    "pos": "adj.",
    "cn_def": "沉默的",
    "en_def": "making no sound; not speaking",
    "sentence": "The library was {{BLANK}} except for the sound of pages turning.",
    "cn": "除了書頁翻動聲以外，圖書館裡一片寂靜。"
  },
  {
    "word": "fair",
    "pos": "adj.",
    "cn_def": "公平的;合理的",
    "en_def": "treating everyone equally and in a reasonable way",
    "sentence": "The judge made a {{BLANK}} decision based on the evidence.",
    "cn": "法官根據證據作出了公正的判斷。"
  },
  {
    "word": "fair",
    "pos": "adj.",
    "cn_def": "清楚的;晴朗的",
    "en_def": "(of weather) bright and not raining",
    "sentence": "We had {{BLANK}} weather for our outdoor event.",
    "cn": "我們的戶外活動天氣晴朗。"
  },
  {
    "word": "fair",
    "pos": "n.",
    "cn_def": "展;市集",
    "en_def": "an outdoor event with rides, games and things to buy; a large show of goods",
    "sentence": "We visited the {{BLANK}} to see the local crafts.",
    "cn": "我們參觀了市集看當地的手工藝品。"
  },
  {
    "word": "fairly",
    "pos": "adv.",
    "cn_def": "相當地",
    "en_def": "more than a little, but not very",
    "sentence": "She performed {{BLANK}} well in the competition.",
    "cn": "她在比賽中表現相當好。"
  },
  {
    "word": "stage",
    "pos": "n.",
    "cn_def": "舞台",
    "en_def": "the raised area in a theater where actors perform",
    "sentence": "The actors gathered on {{BLANK}} before the play.",
    "cn": "演員們在劇前聚集在舞台上。"
  },
  {
    "word": "stage",
    "pos": "v.",
    "cn_def": "上演",
    "en_def": "to organize and present a play or event for people to see",
    "sentence": "The theater will {{BLANK}} the new play next month.",
    "cn": "這家劇院將在下個月上演新劇。"
  },
  {
    "word": "inventor",
    "pos": "n.",
    "cn_def": "發明者",
    "en_def": "a person who makes or thinks of something completely new",
    "sentence": "Thomas Edison is a famous {{BLANK}} in history.",
    "cn": "湯瑪斯·愛迪生是歷史上著名的發明者。"
  },
  {
    "word": "invention",
    "pos": "n.",
    "cn_def": "發明",
    "en_def": "something that has been made or designed for the first time",
    "sentence": "The telephone was a groundbreaking {{BLANK}}.",
    "cn": "電話是一項開創性的發明。"
  },
  {
    "word": "invent",
    "pos": "v.",
    "cn_def": "發明",
    "en_def": "to make or design something that did not exist before",
    "sentence": "He tried to {{BLANK}} a new type of engine.",
    "cn": "他試圖發明一種新型引擎。"
  },
  {
    "word": "proper",
    "pos": "adj.",
    "cn_def": "適當的",
    "en_def": "right, correct or suitable for the situation",
    "sentence": "It's important to wear {{BLANK}} attire for the interview.",
    "cn": "面試時穿著適當的服裝很重要。"
  },
  {
    "word": "improper",
    "pos": "adj.",
    "cn_def": "不適當的",
    "en_def": "not right or suitable for the situation",
    "sentence": "It's considered {{BLANK}} to arrive late without notice.",
    "cn": "沒有通知就遲到被視為不適當。"
  },
  {
    "word": "properly",
    "pos": "adv.",
    "cn_def": "正確地",
    "en_def": "in a correct or suitable way",
    "sentence": "Please read the instructions {{BLANK}} before assembling.",
    "cn": "請在組裝前仔細閱讀說明。"
  },
  {
    "word": "decade",
    "pos": "n.",
    "cn_def": "十年",
    "en_def": "a period of ten years",
    "sentence": "He has worked for over a {{BLANK}} in this company.",
    "cn": "他在這家公司工作了十年以上。"
  },
  {
    "word": "nearly",
    "pos": "adv.",
    "cn_def": "幾乎",
    "en_def": "almost but not quite",
    "sentence": "They are {{BLANK}} finished with the project.",
    "cn": "他們幾乎完成了這個項目。"
  },
  {
    "word": "dialogue",
    "pos": "n.",
    "cn_def": "對話",
    "en_def": "the words that characters speak in a book, play or film; a conversation",
    "sentence": "The movie has witty {{BLANK}} between the characters.",
    "cn": "電影中角色之間的對話很機智。"
  },
  {
    "word": "inspires",
    "pos": "v.",
    "cn_def": "激勵",
    "en_def": "to make someone want to do something good or creative",
    "sentence": "Her bravery {{BLANK}} others to take action.",
    "cn": "她的勇敢激勵了其他人採取行動。"
  },
  {
    "word": "inspiring",
    "pos": "adj.",
    "cn_def": "鼓舞人心的",
    "en_def": "making you feel that you want to do something good",
    "sentence": "The speaker gave an {{BLANK}} speech at the conference.",
    "cn": "演講者在會議上發表了一篇鼓舞人心的演講。"
  },
  {
    "word": "inspiration",
    "pos": "n.",
    "cn_def": "靈感",
    "en_def": "something that gives you new ideas or the wish to create",
    "sentence": "The painting was his {{BLANK}} for the new novel.",
    "cn": "這幅畫是他創作新小說的靈感。"
  },
  {
    "word": "creativity",
    "pos": "n.",
    "cn_def": "創造力",
    "en_def": "the ability to produce new and original ideas",
    "sentence": "The company encourages {{BLANK}} among its employees.",
    "cn": "公司鼓勵員工發揮創造力。"
  },
  {
    "word": "create",
    "pos": "v.",
    "cn_def": "創造",
    "en_def": "to make something new or cause something to exist",
    "sentence": "Artists {{BLANK}} works of art that evoke emotions.",
    "cn": "藝術家創造了能唤起情感的藝術品。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創造力的",
    "en_def": "having the ability to produce new and original ideas",
    "sentence": "She has a {{BLANK}} approach to problem-solving.",
    "cn": "她在解決問題時有創造性的方法。"
  },
  {
    "word": "creation",
    "pos": "n.",
    "cn_def": "創作",
    "en_def": "something that someone has made, especially using skill or imagination",
    "sentence": "The museum displayed a new {{BLANK}} by a local artist.",
    "cn": "博物館展示了一位本地藝術家的新作品。"
  },
  {
    "word": "career",
    "pos": "n.",
    "cn_def": "職業",
    "en_def": "the series of jobs that a person has during their working life",
    "sentence": "He has had a successful {{BLANK}} as a lawyer.",
    "cn": "他在律師職業上取得了成功。"
  },
  {
    "word": "fame",
    "pos": "n.",
    "cn_def": "名聲",
    "en_def": "the state of being known by many people",
    "sentence": "Her {{BLANK}} grew after she won the award.",
    "cn": "她在獲獎後名聲大噪。"
  },
  {
    "word": "hardships",
    "pos": "n.",
    "cn_def": "艱難",
    "en_def": "a situation that is difficult and unpleasant, especially because you lack money or food",
    "sentence": "They faced many {{BLANK}} during the war.",
    "cn": "他們在戰爭期間面臨了許多艱難。"
  },
  {
    "word": "dramatically",
    "pos": "adv.",
    "cn_def": "戲劇性地",
    "en_def": "in a sudden, very great or exciting way",
    "sentence": "The company's profits increased {{BLANK}} last year.",
    "cn": "公司去年的利潤戲劇性增長。"
  },
  {
    "word": "drama",
    "pos": "n.",
    "cn_def": "戲劇",
    "en_def": "a play for the theater, television or radio",
    "sentence": "The play is a classic {{BLANK}} of love and betrayal.",
    "cn": "這部戲劇是愛與背叛的經典之作。"
  },
  {
    "word": "dramatic",
    "pos": "adj.",
    "cn_def": "戲劇的",
    "en_def": "sudden and very great; exciting; relating to plays",
    "sentence": "There was a {{BLANK}} change in the weather.",
    "cn": "天氣出現了戲劇性的變化。"
  },
  {
    "word": "overdramatic",
    "pos": "adj.",
    "cn_def": "過分戲劇化的",
    "en_def": "showing much stronger feelings than a situation deserves",
    "sentence": "She tends to be {{BLANK}} about minor issues.",
    "cn": "她對小事情往往過分戲劇化。"
  },
  {
    "word": "switch",
    "pos": "n.",
    "cn_def": "開關",
    "en_def": "a small button or lever that turns a light or machine on and off",
    "sentence": "Please flip the {{BLANK}} to turn on the light.",
    "cn": "請切換開關打開燈。"
  },
  {
    "word": "emergence",
    "pos": "n.",
    "cn_def": "出現",
    "en_def": "the process of appearing or becoming known for the first time",
    "sentence": "The {{BLANK}} of new technologies is changing industries.",
    "cn": "新技術的出現正在改變行業。"
  },
  {
    "word": "emerge",
    "pos": "v.",
    "cn_def": "浮現",
    "en_def": "to come out from a place or situation; to become known",
    "sentence": "He managed to {{BLANK}} from the difficult situation.",
    "cn": "他設法從困境中浮現出來。"
  }
];

const MCQS = [
  {
    "q": "They went to the ______ to watch the latest blockbuster.",
    "options": [
      "cinema",
      "fame",
      "drama",
      "decade"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The film had a ______ quality that captivated the audience.",
    "options": [
      "indirect",
      "overdramatic",
      "improper",
      "cinematic"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Exercise is ______ for maintaining good health.",
    "options": [
      "fair",
      "cinematic",
      "essential",
      "entertaining"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The ______ of his argument was clear and persuasive.",
    "options": [
      "entertainment",
      "essence",
      "director",
      "fair"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The magician will ______ the children at the birthday party.",
    "options": [
      "stage",
      "emerge",
      "create",
      "entertain"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The theme park offers a variety of ______ for visitors.",
    "options": [
      "inspiration",
      "entertainment",
      "switch",
      "entertainer"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The comedian's jokes were ______ and made everyone laugh.",
    "options": [
      "indirect",
      "inspiring",
      "entertaining",
      "dramatic"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The singer is a talented ______ who performs regularly at the club.",
    "options": [
      "entertainer",
      "director",
      "creation",
      "directions"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The coach will ______ the team during the match.",
    "options": [
      "stage",
      "inspires",
      "direct",
      "create"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "His ______ approach to problem-solving is effective.",
    "options": [
      "indirect",
      "inspiring",
      "proper",
      "direct"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "She used an ______ route to avoid traffic.",
    "options": [
      "indirect",
      "improper",
      "fair",
      "entertaining"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The ______ of the movie won several awards for his work.",
    "options": [
      "creation",
      "director",
      "invention",
      "inventor"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Follow the ______ on the map to reach the destination.",
    "options": [
      "directions",
      "director",
      "invention",
      "hardships"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "You can ______ contact me if you have any questions.",
    "options": [
      "fairly",
      "dramatically",
      "indirectly",
      "directly"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "She learned about the news ______ from her friend.",
    "options": [
      "dramatically",
      "fairly",
      "indirectly",
      "nearly"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The ______ in the room was awkward after the argument.",
    "options": [
      "hardships",
      "silence",
      "stage",
      "career"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The library was ______ except for the sound of pages turning.",
    "options": [
      "inspiring",
      "entertaining",
      "silent",
      "overdramatic"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The judge made a ______ decision based on the evidence.",
    "options": [
      "fair",
      "indirect",
      "proper",
      "silent"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "We had ______ weather for our outdoor event.",
    "options": [
      "cinematic",
      "fair",
      "dramatic",
      "essential"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "We visited the ______ to see the local crafts.",
    "options": [
      "directions",
      "essence",
      "creation",
      "fair"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "She performed ______ well in the competition.",
    "options": [
      "directly",
      "fairly",
      "indirectly",
      "dramatically"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The actors gathered on ______ before the play.",
    "options": [
      "emergence",
      "invention",
      "dialogue",
      "stage"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The theater will ______ the new play next month.",
    "options": [
      "invent",
      "inspires",
      "stage",
      "create"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Thomas Edison is a famous ______ in history.",
    "options": [
      "inventor",
      "inspiration",
      "creation",
      "fame"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The telephone was a groundbreaking ______.",
    "options": [
      "silence",
      "directions",
      "invention",
      "drama"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "He tried to ______ a new type of engine.",
    "options": [
      "inspires",
      "invent",
      "emerge",
      "direct"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "It's important to wear ______ attire for the interview.",
    "options": [
      "inspiring",
      "essential",
      "entertaining",
      "proper"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "It's considered ______ to arrive late without notice.",
    "options": [
      "improper",
      "indirect",
      "inspiring",
      "silent"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Please read the instructions ______ before assembling.",
    "options": [
      "dramatically",
      "properly",
      "nearly",
      "indirectly"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "He has worked for over a ______ in this company.",
    "options": [
      "switch",
      "fair",
      "emergence",
      "decade"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "They are ______ finished with the project.",
    "options": [
      "directly",
      "properly",
      "nearly",
      "indirectly"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The movie has witty ______ between the characters.",
    "options": [
      "dialogue",
      "fame",
      "creativity",
      "decade"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "Her bravery ______ others to take action.",
    "options": [
      "create",
      "direct",
      "entertain",
      "inspires"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The speaker gave an ______ speech at the conference.",
    "options": [
      "creative",
      "overdramatic",
      "inspiring",
      "cinematic"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The painting was his ______ for the new novel.",
    "options": [
      "career",
      "inspiration",
      "directions",
      "decade"
    ],
    "answer": 1,
    "vocabIndex": 34
  },
  {
    "q": "The company encourages ______ among its employees.",
    "options": [
      "creativity",
      "fair",
      "drama",
      "invention"
    ],
    "answer": 0,
    "vocabIndex": 35
  },
  {
    "q": "Artists ______ works of art that evoke emotions.",
    "options": [
      "entertain",
      "create",
      "direct",
      "emerge"
    ],
    "answer": 1,
    "vocabIndex": 36
  },
  {
    "q": "She has a ______ approach to problem-solving.",
    "options": [
      "dramatic",
      "direct",
      "fair",
      "creative"
    ],
    "answer": 3,
    "vocabIndex": 37
  },
  {
    "q": "The museum displayed a new ______ by a local artist.",
    "options": [
      "creation",
      "inventor",
      "silence",
      "entertainment"
    ],
    "answer": 0,
    "vocabIndex": 38
  },
  {
    "q": "He has had a successful ______ as a lawyer.",
    "options": [
      "fame",
      "silence",
      "career",
      "dialogue"
    ],
    "answer": 2,
    "vocabIndex": 39
  },
  {
    "q": "Her ______ grew after she won the award.",
    "options": [
      "fame",
      "creativity",
      "career",
      "inspiration"
    ],
    "answer": 0,
    "vocabIndex": 40
  },
  {
    "q": "They faced many ______ during the war.",
    "options": [
      "emergence",
      "invention",
      "silence",
      "hardships"
    ],
    "answer": 3,
    "vocabIndex": 41
  },
  {
    "q": "The company's profits increased ______ last year.",
    "options": [
      "directly",
      "fairly",
      "dramatically",
      "nearly"
    ],
    "answer": 2,
    "vocabIndex": 42
  },
  {
    "q": "The play is a classic ______ of love and betrayal.",
    "options": [
      "entertainer",
      "drama",
      "hardships",
      "essence"
    ],
    "answer": 1,
    "vocabIndex": 43
  },
  {
    "q": "There was a ______ change in the weather.",
    "options": [
      "indirect",
      "creative",
      "fair",
      "dramatic"
    ],
    "answer": 3,
    "vocabIndex": 44
  },
  {
    "q": "She tends to be ______ about minor issues.",
    "options": [
      "creative",
      "cinematic",
      "overdramatic",
      "direct"
    ],
    "answer": 2,
    "vocabIndex": 45
  },
  {
    "q": "Please flip the ______ to turn on the light.",
    "options": [
      "inspiration",
      "switch",
      "entertainment",
      "inventor"
    ],
    "answer": 1,
    "vocabIndex": 46
  },
  {
    "q": "The ______ of new technologies is changing industries.",
    "options": [
      "emergence",
      "entertainer",
      "fair",
      "inventor"
    ],
    "answer": 0,
    "vocabIndex": 47
  },
  {
    "q": "He managed to ______ from the difficult situation.",
    "options": [
      "invent",
      "direct",
      "emerge",
      "entertain"
    ],
    "answer": 2,
    "vocabIndex": 48
  }
];

const LOOKUP = {
  "cinema": {
    "pos": "n.",
    "en_def": "a building where people go to watch films",
    "cn_def": "電影院;戲院",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a building where people go to watch films",
        "cn_def": "電影院;戲院"
      }
    ]
  },
  "cinematic": {
    "pos": "adj.",
    "en_def": "relating to films or looking like a film",
    "cn_def": "電影的;電影風格的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to films or looking like a film",
        "cn_def": "電影的;電影風格的"
      }
    ]
  },
  "essential": {
    "pos": "adj.",
    "en_def": "completely necessary; very important",
    "cn_def": "關鍵的;重要的;必不可少的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "completely necessary; very important",
        "cn_def": "關鍵的;重要的;必不可少的"
      }
    ]
  },
  "essence": {
    "pos": "n.",
    "en_def": "the most important quality or basic nature of something",
    "cn_def": "本質;精華",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the most important quality or basic nature of something",
        "cn_def": "本質;精華"
      }
    ]
  },
  "entertain": {
    "pos": "v.",
    "en_def": "to interest and amuse people",
    "cn_def": "娛樂;使快樂",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to interest and amuse people",
        "cn_def": "娛樂;使快樂"
      }
    ]
  },
  "entertainment": {
    "pos": "n.",
    "en_def": "films, music, shows and other things that people enjoy watching or doing",
    "cn_def": "娛樂;表演",
    "combined": [
      {
        "pos": "n.",
        "en_def": "films, music, shows and other things that people enjoy watching or doing",
        "cn_def": "娛樂;表演"
      }
    ]
  },
  "entertaining": {
    "pos": "adj.",
    "en_def": "interesting and amusing",
    "cn_def": "有趣的;使人愉悅的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "interesting and amusing",
        "cn_def": "有趣的;使人愉悅的"
      }
    ]
  },
  "entertainer": {
    "pos": "n.",
    "en_def": "a person whose job is to sing, dance or tell jokes for an audience",
    "cn_def": "表演者;娛樂家",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person whose job is to sing, dance or tell jokes for an audience",
        "cn_def": "表演者;娛樂家"
      }
    ]
  },
  "direct": {
    "pos": "v.",
    "en_def": "to be in charge of or guide people or an activity",
    "cn_def": "指導;引導",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to be in charge of or guide people or an activity",
        "cn_def": "指導;引導"
      },
      {
        "pos": "adj.",
        "en_def": "going straight to a place or person, with nothing in between; honest and clear",
        "cn_def": "直接的;直率的"
      }
    ]
  },
  "indirect": {
    "pos": "adj.",
    "en_def": "not going straight to the point; not immediately caused by something",
    "cn_def": "間接的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not going straight to the point; not immediately caused by something",
        "cn_def": "間接的"
      }
    ]
  },
  "director": {
    "pos": "n.",
    "en_def": "the person who is in charge of making a film or play",
    "cn_def": "導演",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the person who is in charge of making a film or play",
        "cn_def": "導演"
      }
    ]
  },
  "directions": {
    "pos": "n.",
    "en_def": "the way that someone or something is moving or pointing; instructions on how to do something",
    "cn_def": "方向;指導",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the way that someone or something is moving or pointing; instructions on how to do something",
        "cn_def": "方向;指導"
      }
    ]
  },
  "direction": {
    "pos": "n.",
    "en_def": "the way that someone or something is moving or pointing; instructions on how to do something",
    "cn_def": "方向;指導",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the way that someone or something is moving or pointing; instructions on how to do something",
        "cn_def": "方向;指導"
      }
    ]
  },
  "directly": {
    "pos": "adv.",
    "en_def": "in a straight line; with nothing or no one in between",
    "cn_def": "直接地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a straight line; with nothing or no one in between",
        "cn_def": "直接地"
      }
    ]
  },
  "indirectly": {
    "pos": "adv.",
    "en_def": "in a way that is not straight or not immediate",
    "cn_def": "間接地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that is not straight or not immediate",
        "cn_def": "間接地"
      }
    ]
  },
  "silence": {
    "pos": "n.",
    "en_def": "a complete lack of noise or speech",
    "cn_def": "寂靜;沉默",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a complete lack of noise or speech",
        "cn_def": "寂靜;沉默"
      }
    ]
  },
  "silent": {
    "pos": "adj.",
    "en_def": "making no sound; not speaking",
    "cn_def": "沉默的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "making no sound; not speaking",
        "cn_def": "沉默的"
      }
    ]
  },
  "fair": {
    "pos": "adj.",
    "en_def": "treating everyone equally and in a reasonable way",
    "cn_def": "公平的;合理的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "treating everyone equally and in a reasonable way",
        "cn_def": "公平的;合理的"
      },
      {
        "pos": "adj.",
        "en_def": "(of weather) bright and not raining",
        "cn_def": "清楚的;晴朗的"
      },
      {
        "pos": "n.",
        "en_def": "an outdoor event with rides, games and things to buy; a large show of goods",
        "cn_def": "展;市集"
      }
    ]
  },
  "fairly": {
    "pos": "adv.",
    "en_def": "more than a little, but not very",
    "cn_def": "相當地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "more than a little, but not very",
        "cn_def": "相當地"
      }
    ]
  },
  "stage": {
    "pos": "n.",
    "en_def": "the raised area in a theater where actors perform",
    "cn_def": "舞台",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the raised area in a theater where actors perform",
        "cn_def": "舞台"
      },
      {
        "pos": "v.",
        "en_def": "to organize and present a play or event for people to see",
        "cn_def": "上演"
      }
    ]
  },
  "inventor": {
    "pos": "n.",
    "en_def": "a person who makes or thinks of something completely new",
    "cn_def": "發明者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who makes or thinks of something completely new",
        "cn_def": "發明者"
      }
    ]
  },
  "invention": {
    "pos": "n.",
    "en_def": "something that has been made or designed for the first time",
    "cn_def": "發明",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that has been made or designed for the first time",
        "cn_def": "發明"
      }
    ]
  },
  "invent": {
    "pos": "v.",
    "en_def": "to make or design something that did not exist before",
    "cn_def": "發明",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make or design something that did not exist before",
        "cn_def": "發明"
      }
    ]
  },
  "proper": {
    "pos": "adj.",
    "en_def": "right, correct or suitable for the situation",
    "cn_def": "適當的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "right, correct or suitable for the situation",
        "cn_def": "適當的"
      }
    ]
  },
  "improper": {
    "pos": "adj.",
    "en_def": "not right or suitable for the situation",
    "cn_def": "不適當的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not right or suitable for the situation",
        "cn_def": "不適當的"
      }
    ]
  },
  "properly": {
    "pos": "adv.",
    "en_def": "in a correct or suitable way",
    "cn_def": "正確地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a correct or suitable way",
        "cn_def": "正確地"
      }
    ]
  },
  "decade": {
    "pos": "n.",
    "en_def": "a period of ten years",
    "cn_def": "十年",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a period of ten years",
        "cn_def": "十年"
      }
    ]
  },
  "nearly": {
    "pos": "adv.",
    "en_def": "almost but not quite",
    "cn_def": "幾乎",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "almost but not quite",
        "cn_def": "幾乎"
      }
    ]
  },
  "dialogue": {
    "pos": "n.",
    "en_def": "the words that characters speak in a book, play or film; a conversation",
    "cn_def": "對話",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the words that characters speak in a book, play or film; a conversation",
        "cn_def": "對話"
      }
    ]
  },
  "inspire": {
    "pos": "v.",
    "en_def": "to make someone want to do something good or creative",
    "cn_def": "激勵",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make someone want to do something good or creative",
        "cn_def": "激勵"
      }
    ]
  },
  "inspires": {
    "pos": "v.",
    "en_def": "to make someone want to do something good or creative",
    "cn_def": "激勵",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make someone want to do something good or creative",
        "cn_def": "激勵"
      }
    ]
  },
  "inspiring": {
    "pos": "adj.",
    "en_def": "making you feel that you want to do something good",
    "cn_def": "鼓舞人心的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "making you feel that you want to do something good",
        "cn_def": "鼓舞人心的"
      }
    ]
  },
  "inspiration": {
    "pos": "n.",
    "en_def": "something that gives you new ideas or the wish to create",
    "cn_def": "靈感",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that gives you new ideas or the wish to create",
        "cn_def": "靈感"
      }
    ]
  },
  "creativity": {
    "pos": "n.",
    "en_def": "the ability to produce new and original ideas",
    "cn_def": "創造力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability to produce new and original ideas",
        "cn_def": "創造力"
      }
    ]
  },
  "create": {
    "pos": "v.",
    "en_def": "to make something new or cause something to exist",
    "cn_def": "創造",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make something new or cause something to exist",
        "cn_def": "創造"
      }
    ]
  },
  "creative": {
    "pos": "adj.",
    "en_def": "having the ability to produce new and original ideas",
    "cn_def": "有創造力的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having the ability to produce new and original ideas",
        "cn_def": "有創造力的"
      }
    ]
  },
  "creation": {
    "pos": "n.",
    "en_def": "something that someone has made, especially using skill or imagination",
    "cn_def": "創作",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that someone has made, especially using skill or imagination",
        "cn_def": "創作"
      }
    ]
  },
  "career": {
    "pos": "n.",
    "en_def": "the series of jobs that a person has during their working life",
    "cn_def": "職業",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the series of jobs that a person has during their working life",
        "cn_def": "職業"
      }
    ]
  },
  "fame": {
    "pos": "n.",
    "en_def": "the state of being known by many people",
    "cn_def": "名聲",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being known by many people",
        "cn_def": "名聲"
      }
    ]
  },
  "hardships": {
    "pos": "n.",
    "en_def": "a situation that is difficult and unpleasant, especially because you lack money or food",
    "cn_def": "艱難",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a situation that is difficult and unpleasant, especially because you lack money or food",
        "cn_def": "艱難"
      }
    ]
  },
  "hardship": {
    "pos": "n.",
    "en_def": "a situation that is difficult and unpleasant, especially because you lack money or food",
    "cn_def": "艱難",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a situation that is difficult and unpleasant, especially because you lack money or food",
        "cn_def": "艱難"
      }
    ]
  },
  "dramatically": {
    "pos": "adv.",
    "en_def": "in a sudden, very great or exciting way",
    "cn_def": "戲劇性地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a sudden, very great or exciting way",
        "cn_def": "戲劇性地"
      }
    ]
  },
  "drama": {
    "pos": "n.",
    "en_def": "a play for the theater, television or radio",
    "cn_def": "戲劇",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a play for the theater, television or radio",
        "cn_def": "戲劇"
      }
    ]
  },
  "dramatic": {
    "pos": "adj.",
    "en_def": "sudden and very great; exciting; relating to plays",
    "cn_def": "戲劇的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "sudden and very great; exciting; relating to plays",
        "cn_def": "戲劇的"
      }
    ]
  },
  "overdramatic": {
    "pos": "adj.",
    "en_def": "showing much stronger feelings than a situation deserves",
    "cn_def": "過分戲劇化的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing much stronger feelings than a situation deserves",
        "cn_def": "過分戲劇化的"
      }
    ]
  },
  "switch": {
    "pos": "n.",
    "en_def": "a small button or lever that turns a light or machine on and off",
    "cn_def": "開關",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small button or lever that turns a light or machine on and off",
        "cn_def": "開關"
      }
    ]
  },
  "emergence": {
    "pos": "n.",
    "en_def": "the process of appearing or becoming known for the first time",
    "cn_def": "出現",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the process of appearing or becoming known for the first time",
        "cn_def": "出現"
      }
    ]
  },
  "emerge": {
    "pos": "v.",
    "en_def": "to come out from a place or situation; to become known",
    "cn_def": "浮現",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to come out from a place or situation; to become known",
        "cn_def": "浮現"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
