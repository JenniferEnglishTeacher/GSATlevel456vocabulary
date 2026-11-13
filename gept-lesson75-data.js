// Lesson 75 Quiz Data: Interpersonal Communication, Secrets, Humor & Decision Making
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 75 - Interpersonal Communication, Secrets, Humor & Decision Making",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "rush",
    "pos": "v. / n.",
    "cn_def": "匆忙；急速前進；匆促",
    "en_def": "to move or act with urgent haste; a sudden rapid movement",
    "sentence": "Because the airport express train was departing in ten minutes, the travelers had to {{BLANK}} through the busy station hall.",
    "cn": "因為機場快線列車在十分鐘內就要發車，旅客們不得不【匆忙】穿過繁忙的車站大廳。"
  },
  {
    "word": "interrupt",
    "pos": "v.",
    "cn_def": "打斷；中斷；打擾",
    "en_def": "to stop the continuous progress of an activity or speaker",
    "sentence": "It is considered very impolite to {{BLANK}} the teacher while she is explaining an important math concept to the class.",
    "cn": "在老師向全班講解重要數學觀念時【打斷】她，被認為是非常不禮貌的行為。"
  },
  {
    "word": "conversation",
    "pos": "n.",
    "cn_def": "談話；對話；交談",
    "en_def": "a talk, especially an informal one, between two or more people",
    "sentence": "While waiting for their flight at the departure gate, the two tourists had an enjoyable {{BLANK}} about cultural traditions.",
    "cn": "在登機門等候班機時，兩位遊客就文化傳統進行了一場愉快的【交談】。"
  },
  {
    "word": "joke",
    "pos": "n. / v.",
    "cn_def": "笑話；開玩笑",
    "en_def": "a thing that someone says to cause amusement or laughter",
    "sentence": "The cheerful uncle loved to tell a funny {{BLANK}} at the dinner table, making all his young nephews laugh out loud.",
    "cn": "那位開朗的叔叔喜歡在餐桌上講有趣的【笑話】，把他所有的小侄子們逗得哈哈大笑。"
  },
  {
    "word": "trick",
    "pos": "n. / v.",
    "cn_def": "把戲；惡作劇；騙局；欺騙",
    "en_def": "a cunning act intended to deceive; to deceive someone",
    "sentence": "The clever street magician performed an amazing coin {{BLANK}}, and none of the spectators could figure out how he did it.",
    "cn": "那位聰明的街頭魔術師表演了一套神奇的硬幣【把戲】，現場沒有任何觀眾能看穿他是如何辦到的。"
  },
  {
    "word": "secret",
    "pos": "n. / adj.",
    "cn_def": "秘密；保密的",
    "en_def": "something that is kept unknown or unseen by others",
    "sentence": "Emma promised her best friend that she would keep the surprise party a strict {{BLANK}} until Saturday evening arrived.",
    "cn": "艾瑪向她最好的朋友保證，在週六傍晚到來之前，她一定會對這場驚喜派對嚴加【保密】。"
  },
  {
    "word": "silence",
    "pos": "n. / v.",
    "cn_def": "寂靜；沉默；使安靜",
    "en_def": "complete absence of sound; to make someone stop speaking",
    "sentence": "When the stern judge entered the courtroom and sat down, a sudden respectful {{BLANK}} fell over the entire audience.",
    "cn": "當神情嚴肅的法官走進法庭並坐下時，全場旁聽群眾頓時陷入一片恭敬的【寂靜】。"
  },
  {
    "word": "message",
    "pos": "n.",
    "cn_def": "訊息；留言",
    "en_def": "a verbal, written, or recorded communication sent to someone",
    "sentence": "Since Dr. Lin was performing surgery in the operating room, his assistant asked the caller to leave a brief {{BLANK}}.",
    "cn": "由於林醫生正在手術室進行手術，他的助理請打電話的人留下一則簡短的【留言】。"
  },
  {
    "word": "choose",
    "pos": "v.",
    "cn_def": "選擇；挑選",
    "en_def": "to pick out or select as being the best or most appropriate",
    "sentence": "Students in the language department are allowed to {{BLANK}} between French, German, and Spanish for their second foreign language.",
    "cn": "語言學系的學生被允許在法語、德語和西班牙語之間【選擇】作為他們的第二外語。"
  },
  {
    "word": "choice",
    "pos": "n.",
    "cn_def": "選擇；抉擇",
    "en_def": "an act of selecting or making a decision when faced with possibilities",
    "sentence": "Having a diverse menu with vegetarian options gives restaurant customers a much wider {{BLANK}} for their daily lunch.",
    "cn": "擁有包含素食選項的豐富菜單，為餐廳顧客的每日午餐提供了更廣泛的【選擇】。"
  }
];

const MCQS = [
  {
    "q": "Because the airport express train was departing in ten minutes, the travelers had to ______ through the busy station hall.",
    "options": [
      "interrupt",
      "choose",
      "rush",
      "silence"
    ],
    "answer": 2,
    "cn": "因為機場快線十分鐘後發車，旅客們只得匆忙穿過繁忙的車站大廳。 【選項解析】(A) interrupt 打斷  (B) rush 匆忙  (C) choose 選擇  (D) silence 使安靜。趕車匆忙用 rush through。",
    "vocabIndex": 0
  },
  {
    "q": "Polite children are taught never to ______ adults whenever they are discussing serious family matters.",
    "options": [
      "choose",
      "rush",
      "joke",
      "interrupt"
    ],
    "answer": 3,
    "cn": "有禮貌的孩子從小被教育，在大人討論嚴肅家族事務時絕不能打斷他們。 【選項解析】(A) interrupt 打斷  (B) rush 匆忙  (C) joke 開玩笑  (D) choose 挑選。打斷別人說話用 interrupt adults。",
    "vocabIndex": 1
  },
  {
    "q": "During the long train ride to Hualien, Samuel and his seatmate had a fascinating ______ about mountain climbing.",
    "options": [
      "conversation",
      "silence",
      "message",
      "secret"
    ],
    "answer": 0,
    "cn": "在開往花蓮的長途火車上，塞繆爾和他的鄰座進行了一場有關登山的精彩交談。 【選項解析】(A) message 訊息  (B) silence 寂靜  (C) conversation 對話  (D) secret 秘密。進行談話為 have a conversation。",
    "vocabIndex": 2
  },
  {
    "q": "Grandfather told such a humorous ______ at dinner that everyone burst into uncontrollable laughter.",
    "options": [
      "secret",
      "joke",
      "silence",
      "message"
    ],
    "answer": 1,
    "cn": "祖父在晚餐時講了一個非常幽默的笑話，逗得大家忍不住大笑起來。 【選項解析】(A) secret 秘密  (B) joke 笑話  (C) silence 寂靜  (D) message 訊息。tell a humorous joke 表講笑話。",
    "vocabIndex": 3
  },
  {
    "q": "The clever street performer demonstrated a fascinating card ______ that completely baffled the watching crowd.",
    "options": [
      "choice",
      "silence",
      "message",
      "trick"
    ],
    "answer": 3,
    "cn": "聰明的街頭藝人展示了一套神奇的紙牌把戲，把圍觀人群完全迷住了。 【選項解析】(A) choice 選擇  (B) trick 把戲  (C) message 訊息  (D) silence 寂靜。card trick 表紙牌魔術把戲。",
    "vocabIndex": 4
  },
  {
    "q": "Sophia promised her sister that she would never reveal her personal ______ to any classmates at school.",
    "options": [
      "secret",
      "joke",
      "silence",
      "message"
    ],
    "answer": 0,
    "cn": "蘇菲亞向妹妹保證，她絕不會把她的個人秘密透露給學校裡的任何同學。 【選項解析】(A) secret 秘密  (B) joke 笑話  (C) silence 沉默  (D) message 訊息。personal secret 表個人秘密。",
    "vocabIndex": 5
  },
  {
    "q": "When the music stopped and the lights dimmed, an uneasy ______ enveloped the entire auditorium.",
    "options": [
      "message",
      "silence",
      "trick",
      "joke"
    ],
    "answer": 1,
    "cn": "當音樂停止且燈光變暗時，一陣令人不安的寂靜籠罩了整個大禮堂。 【選項解析】(A) message 訊息  (B) joke 笑話  (C) trick 把戲  (D) silence 寂靜。全場寂靜用 silence enveloped the auditorium。",
    "vocabIndex": 6
  },
  {
    "q": "If the doctor is busy consulting with another patient, you can simply leave a written ______ with the receptionist.",
    "options": [
      "joke",
      "silence",
      "message",
      "secret"
    ],
    "answer": 2,
    "cn": "如果醫生正忙著為其他病人看診，你可以直接向櫃檯接待員留下一張書面留言。 【選項解析】(A) joke 笑話  (B) message 留言  (C) silence 寂靜  (D) secret 秘密。leave a message 為固定搭配「留言」。",
    "vocabIndex": 7
  },
  {
    "q": "In tomorrow's voting session, university students will ______ their new student council president for the coming year.",
    "options": [
      "rush",
      "interrupt",
      "silence",
      "choose"
    ],
    "answer": 3,
    "cn": "在明天的投票會議上，大學生們將選出他們下一年度的新學生會會長。 【選項解析】(A) rush 匆忙  (B) interrupt 打斷  (C) choose 選拔/挑選  (D) silence 使安靜。投票選出代表用 choose。",
    "vocabIndex": 8
  },
  {
    "q": "When dining at this Italian restaurant, you have an excellent ______ between homemade pasta and wood-fired pizza.",
    "options": [
      "trick",
      "choice",
      "silence",
      "message"
    ],
    "answer": 1,
    "cn": "在這家義大利餐廳用餐時，你在手工義大利麵與窯烤披薩之間擁有極佳的選擇。 【選項解析】(A) choice 選擇  (B) trick 詭計  (C) silence 寂靜  (D) message 訊息。have an excellent choice 表有良好選擇。",
    "vocabIndex": 9
  },
  {
    "q": "You should plan your schedule carefully so you do not have to ______ through breakfast every morning.",
    "options": [
      "choose",
      "interrupt",
      "rush",
      "joke"
    ],
    "answer": 2,
    "cn": "你應該仔細規劃行程，這樣每天早晨就不必匆忙吞完早餐了。 【選項解析】(A) choose 挑選  (B) interrupt 打擾  (C) rush 匆忙  (D) joke 玩笑。rush through breakfast 指匆忙吃早餐。",
    "vocabIndex": 0
  },
  {
    "q": "Please do not ______ the speaker during the presentation, but save your questions for the discussion period.",
    "options": [
      "interrupt",
      "rush",
      "choose",
      "silence"
    ],
    "answer": 0,
    "cn": "演講進行期間請不要打斷講者，請把問題留到討論時間提出。 【選項解析】(A) rush 匆忙  (B) interrupt 打斷  (C) choose 選擇  (D) silence 使沉默。打斷演講者用 interrupt the speaker。",
    "vocabIndex": 1
  },
  {
    "q": "The diplomat engaged in a confidential diplomatic ______ with foreign officials regarding international trade agreements.",
    "options": [
      "joke",
      "silence",
      "trick",
      "conversation"
    ],
    "answer": 3,
    "cn": "這位外交官與外國官員就國際貿易協議進行了機密的對話。 【選項解析】(A) conversation 對話  (B) silence 沉默  (C) trick 把戲  (D) joke 笑話。外交對話為 diplomatic conversation。",
    "vocabIndex": 2
  },
  {
    "q": "Although Tom likes to play the clown, this serious medical situation is certainly no time to ______.",
    "options": [
      "joke",
      "rush",
      "interrupt",
      "choose"
    ],
    "answer": 0,
    "cn": "雖然湯姆喜歡扮小丑搞笑，但這個嚴肅的醫療狀況絕非開玩笑的時刻。 【選項解析】(A) rush 匆忙  (B) joke 開玩笑  (C) interrupt 打斷  (D) choose 選擇。no time to joke 表「不是開玩笑的時候」。",
    "vocabIndex": 3
  },
  {
    "q": "Fraudulent telephone scammers often use an elaborate psychological ______ to steal money from unsuspecting seniors.",
    "options": [
      "message",
      "silence",
      "trick",
      "choice"
    ],
    "answer": 2,
    "cn": "電話詐騙犯經常使用精密的心理騙局，從毫無戒備的長輩手中詐取金錢。 【選項解析】(A) message 訊息  (B) trick 騙術  (C) silence 沉默  (D) choice 選擇。psychological trick 表心理騙術。",
    "vocabIndex": 4
  },
  {
    "q": "Military officers are legally sworn to protect government ______ from foreign spies and unauthorized leaks.",
    "options": [
      "jokes",
      "secrets",
      "choices",
      "silences"
    ],
    "answer": 1,
    "cn": "軍官宣誓依法保守政府機密，防止外國間諜刺探與未經授權的洩漏。 【選項解析】(A) secrets 機密  (B) jokes 笑話  (C) choices 選擇  (D) silences 沉默。protect government secrets 表保守政府機密。",
    "vocabIndex": 5
  },
  {
    "q": "After the explosive announcement, the stunned room sat in complete ______ for several long seconds.",
    "options": [
      "message",
      "trick",
      "silence",
      "joke"
    ],
    "answer": 2,
    "cn": "在震撼性的公告發表後，震驚的會議室陷入了長達數秒鐘的完全沉寂。 【選項解析】(A) message 訊息  (B) silence 沉寂  (C) trick 騙局  (D) joke 笑話。sat in complete silence 指陷入完全肅靜。",
    "vocabIndex": 6
  },
  {
    "q": "An urgent text ______ arrived on my mobile phone, warning all citizens about the approaching tropical typhoon.",
    "options": [
      "silence",
      "message",
      "joke",
      "trick"
    ],
    "answer": 1,
    "cn": "手機上收到了一則緊急簡訊，警告所有市民防範即將來襲的熱帶颱風。 【選項解析】(A) message 訊息  (B) silence 寂靜  (C) joke 笑話  (D) trick 伎倆。text message 表手機簡訊。",
    "vocabIndex": 7
  },
  {
    "q": "High school seniors must carefully ______ which university major aligns best with their future career interests.",
    "options": [
      "silence",
      "rush",
      "interrupt",
      "choose"
    ],
    "answer": 3,
    "cn": "高三學生必須謹慎挑選哪一個大學主修最符合自己未來的職業志向。 【選項解析】(A) choose 挑選  (B) rush 匆忙  (C) interrupt 打斷  (D) silence 壓制。choose major 表挑選主修。",
    "vocabIndex": 8
  },
  {
    "q": "Making a wise career ______ during youth can pave the way for long-term personal happiness and stability.",
    "options": [
      "choice",
      "joke",
      "trick",
      "silence"
    ],
    "answer": 0,
    "cn": "年輕時做出明智的職業抉擇，能為長期的個人幸福與穩定鋪平道路。 【選項解析】(A) joke 笑話  (B) choice 抉擇  (C) trick 詭計  (D) silence 沉默。career choice 表生涯抉擇。",
    "vocabIndex": 9
  },
  {
    "q": "Morning commuters often have to ______ onto crowded subway cars to avoid arriving late for corporate meetings.",
    "options": [
      "silence",
      "interrupt",
      "choose",
      "rush"
    ],
    "answer": 3,
    "cn": "早晨通勤族經常不得不擠上擁擠的地鐵車廂，以避免在公司會議上遲到。 【選項解析】(A) rush 湧入/奔趕  (B) interrupt 打斷  (C) choose 選擇  (D) silence 使安靜。rush onto subway 表匆忙擠上地鐵。",
    "vocabIndex": 0
  },
  {
    "q": "The telephone operator stated that Dr. Harrison received your urgent ______ and will return your call soon.",
    "options": [
      "message",
      "silence",
      "joke",
      "trick"
    ],
    "answer": 0,
    "cn": "電話總機表示哈里森醫生已收到您的緊急留言，並將很快給您回電。 【選項解析】(A) message 留言  (B) silence 寂靜  (C) joke 笑話  (D) trick 把戲。receive urgent message 表收到緊急留言。",
    "vocabIndex": 7
  },
  {
    "q": "The naughty child tried to play a mischievous April Fools' ______ on his elder sister, but she was not fooled.",
    "options": [
      "choice",
      "trick",
      "message",
      "silence"
    ],
    "answer": 1,
    "cn": "那個淘氣的孩子試圖在他姐姐身上玩愚人節惡作劇，但姐姐並未上當。 【選項解析】(A) choice 選擇  (B) trick 惡作劇  (C) message 訊息  (D) silence 沉默。April Fools' trick 表愚人節惡作劇。",
    "vocabIndex": 4
  },
  {
    "q": "The forest at midnight was peaceful, and the profound ______ was interrupted only by the distant call of an owl.",
    "options": [
      "joke",
      "message",
      "silence",
      "choice"
    ],
    "answer": 2,
    "cn": "午夜的森林一片安詳，深沉的寂靜只被遠處貓頭鷹的叫聲所打破。 【選項解析】(A) silence 寂靜  (B) message 訊息  (C) joke 笑話  (D) choice 選擇。profound silence 表深沉的寂靜。",
    "vocabIndex": 6
  },
  {
    "q": "Between attending Harvard University and Oxford University, the brilliant scholar faced an enviable difficult ______.",
    "options": [
      "choice",
      "joke",
      "trick",
      "silence"
    ],
    "answer": 0,
    "cn": "在就讀哈佛大學與牛津大學之間，這位優秀的學者面臨著令人羨慕的艱難抉擇。 【選項解析】(A) choice 抉擇  (B) joke 笑話  (C) trick 詭計  (D) silence 沉默。difficult choice 表艱難抉擇。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "rush": {
    "pos": "v. / n.",
    "en_def": "to move or act with urgent haste; a sudden rapid movement",
    "cn_def": "匆忙；急速前進；匆促",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to move or act with urgent haste; a sudden rapid movement",
        "cn_def": "匆忙；急速前進；匆促"
      }
    ]
  },
  "interrupt": {
    "pos": "v.",
    "en_def": "to stop the continuous progress of an activity or speaker",
    "cn_def": "打斷；中斷；打擾",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to stop the continuous progress of an activity or speaker",
        "cn_def": "打斷；中斷；打擾"
      }
    ]
  },
  "conversation": {
    "pos": "n.",
    "en_def": "a talk, especially an informal one, between two or more people",
    "cn_def": "談話；對話；交談",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a talk, especially an informal one, between two or more people",
        "cn_def": "談話；對話；交談"
      }
    ]
  },
  "joke": {
    "pos": "n. / v.",
    "en_def": "a thing that someone says to cause amusement or laughter",
    "cn_def": "笑話；開玩笑",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a thing that someone says to cause amusement or laughter",
        "cn_def": "笑話；開玩笑"
      }
    ]
  },
  "trick": {
    "pos": "n. / v.",
    "en_def": "a cunning act intended to deceive; to deceive someone",
    "cn_def": "把戲；惡作劇；騙局；欺騙",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a cunning act intended to deceive; to deceive someone",
        "cn_def": "把戲；惡作劇；騙局；欺騙"
      }
    ]
  },
  "secret": {
    "pos": "n. / adj.",
    "en_def": "something that is kept unknown or unseen by others",
    "cn_def": "秘密；保密的",
    "combined": [
      {
        "pos": "n. / adj.",
        "en_def": "something that is kept unknown or unseen by others",
        "cn_def": "秘密；保密的"
      }
    ]
  },
  "silence": {
    "pos": "n. / v.",
    "en_def": "complete absence of sound; to make someone stop speaking",
    "cn_def": "寂靜；沉默；使安靜",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "complete absence of sound; to make someone stop speaking",
        "cn_def": "寂靜；沉默；使安靜"
      }
    ]
  },
  "message": {
    "pos": "n.",
    "en_def": "a verbal, written, or recorded communication sent to someone",
    "cn_def": "訊息；留言",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a verbal, written, or recorded communication sent to someone",
        "cn_def": "訊息；留言"
      }
    ]
  },
  "choose": {
    "pos": "v.",
    "en_def": "to pick out or select as being the best or most appropriate",
    "cn_def": "選擇；挑選",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to pick out or select as being the best or most appropriate",
        "cn_def": "選擇；挑選"
      }
    ]
  },
  "choice": {
    "pos": "n.",
    "en_def": "an act of selecting or making a decision when faced with possibilities",
    "cn_def": "選擇；抉擇",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an act of selecting or making a decision when faced with possibilities",
        "cn_def": "選擇；抉擇"
      }
    ]
  },
  "jokes": {
    "pos": "",
    "en_def": "",
    "cn_def": "笑話",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "笑話"
      }
    ]
  },
  "secrets": {
    "pos": "",
    "en_def": "",
    "cn_def": "機密",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "機密"
      }
    ]
  },
  "choices": {
    "pos": "",
    "en_def": "",
    "cn_def": "選擇",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "選擇"
      }
    ]
  },
  "silences": {
    "pos": "",
    "en_def": "",
    "cn_def": "沉默",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "沉默"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
