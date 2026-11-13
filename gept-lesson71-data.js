// Lesson 71 Quiz Data: Social Etiquette, Greetings, Body Language & Marriage
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 71 - Social Etiquette, Greetings, Body Language & Marriage",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "partner",
    "pos": "n.",
    "cn_def": "夥伴；搭檔；伴侶",
    "en_def": "a person who takes part in an undertaking with another",
    "sentence": "David and his business {{BLANK}} established an online software company together, and their profits grew rapidly in the first year.",
    "cn": "大衛和他的商業【夥伴】一起創立了一家線上軟體公司，他們的利潤在第一年迅速增長。"
  },
  {
    "word": "friendship",
    "pos": "n.",
    "cn_def": "友誼；交情",
    "en_def": "the state of being friends; a close relationship",
    "sentence": "True {{BLANK}} is built upon trust and mutual respect, and it often grows stronger whenever friends overcome difficulties together.",
    "cn": "真正的【友誼】建立在信任與相互尊重之上，而且每當朋友們一起克服困難時，它往往會變得更加深厚。"
  },
  {
    "word": "marry",
    "pos": "v.",
    "cn_def": "結婚；嫁；娶",
    "en_def": "to become the husband or wife of someone in a legal ceremony",
    "sentence": "After dating happily for six years, Michael decided to {{BLANK}} Sarah, and they planned a beautiful garden ceremony for next spring.",
    "cn": "在愉快交往了六年之後，麥可決定與莎拉【結婚】，他們計畫在明年春天舉行一場美麗的花園典禮。"
  },
  {
    "word": "marriage",
    "pos": "n.",
    "cn_def": "婚姻；婚姻生活",
    "en_def": "the formal state of being married as husband and wife",
    "sentence": "A long and happy {{BLANK}} requires patience and honest communication, so both partners must work together through life challenges.",
    "cn": "一段長久而幸福的【婚姻】需要耐心與坦誠的溝通，因此雙方伴侶都必須共同面對生活中的各項挑戰。"
  },
  {
    "word": "congratulations",
    "pos": "n.",
    "cn_def": "祝賀；恭喜",
    "en_def": "words expressing praise or good wishes on a special occasion",
    "sentence": "The principal offered warm {{BLANK}} to all the graduating students, and the proud parents took memorable photographs outside the auditorium.",
    "cn": "校長向所有畢業生致以熱烈的【祝賀】，驕傲的家長們在大禮堂外拍下了值得留念的照片。"
  },
  {
    "word": "clap",
    "pos": "v.",
    "cn_def": "鼓掌；拍手",
    "en_def": "to strike the palms of the hands together with a sudden sharp sound",
    "sentence": "When the young pianist finished her difficult musical performance, the entire audience stood up to {{BLANK}} enthusiastically.",
    "cn": "當那位年輕的鋼琴家結束她難度極高的音樂演奏時，全體觀眾紛紛起立熱情地【鼓掌】。"
  },
  {
    "word": "bow",
    "pos": "v. / n.",
    "cn_def": "鞠躬；鞠躬致敬",
    "en_def": "to bend the body or head forwards as a sign of respect",
    "sentence": "Before beginning their traditional Japanese tea ceremony, the hosts and their honored guests exchanged a formal polite {{BLANK}}.",
    "cn": "在開始傳統的日本茶道之前，主人與他們尊貴的賓客互相行了一個正式且有禮的【鞠躬】。"
  },
  {
    "word": "shake",
    "pos": "v.",
    "cn_def": "搖動；握手",
    "en_def": "to move with quick, short movements from side to side or up and down",
    "sentence": "When meeting the foreign business executive for the first time, you should smile politely and {{BLANK}} hands firmly.",
    "cn": "第一次與外國企業高層主管見面時，你應該禮貌地微笑並堅定地【握手】。"
  },
  {
    "word": "greet",
    "pos": "v.",
    "cn_def": "問候；迎接；打招呼",
    "en_def": "to welcome or say hello to someone with words or actions",
    "sentence": "Every weekday morning, the friendly hotel manager stands near the front entrance to {{BLANK}} all the international guests with a warm smile.",
    "cn": "每個工作日早晨，這位友善的飯店經理都會站在正門附近，帶著溫暖的微笑【問候】所有國際賓客。"
  },
  {
    "word": "hey",
    "pos": "interj.",
    "cn_def": "嘿（打招呼或引起注意）",
    "en_def": "an informal exclamation used to attract attention or express greeting",
    "sentence": "\"{{BLANK}}, look across the street right now, because your favorite movie star is signing autographs for waiting fans!\" whispered Jerry excitedly.",
    "cn": "「【嘿】，現在快看街道對面，因為你最喜歡的電影明星正在為等候的粉絲簽名！」傑瑞興奮地低語道。"
  }
];

const MCQS = [
  {
    "q": "During the international conference, the company president stood by the door to ______ each foreign representative warmly.",
    "options": [
      "marry",
      "shake",
      "clap",
      "greet"
    ],
    "answer": 3,
    "cn": "國際會議期間，公司總裁站在門口熱情地問候每位外國代表。 【選項解析】(A) marry 結婚  (B) greet 問候  (C) clap 鼓掌  (D) shake 搖晃。站在門口迎接代表，動詞用 greet。",
    "vocabIndex": 8
  },
  {
    "q": "David and his business ______ established an online software company together, and their profits grew rapidly in the first year.",
    "options": [
      "marriage",
      "partner",
      "friendship",
      "congratulations"
    ],
    "answer": 1,
    "cn": "大衛和他的商業夥伴一起創立了一家線上軟體公司，利潤在第一年迅速增長。 【選項解析】(A) partner 夥伴  (B) marriage 婚姻  (C) friendship 友誼  (D) congratulations 祝賀。business partner 為「商業夥伴」。",
    "vocabIndex": 0
  },
  {
    "q": "When the famous singer walked onto the stage, thousands of excited fans began to ______ their hands loudly.",
    "options": [
      "clap",
      "marry",
      "greet",
      "bow"
    ],
    "answer": 0,
    "cn": "當著名歌手走上舞台時，成千上萬興奮的粉絲開始大聲鼓掌。 【選項解析】(A) greet 問候  (B) marry 結婚  (C) clap 鼓掌  (D) bow 鞠躬。clap one's hands 表「鼓掌拍手」。",
    "vocabIndex": 5
  },
  {
    "q": "Before starting their traditional martial arts match, both competitors paused to ______ deeply to show mutual respect.",
    "options": [
      "marry",
      "shake",
      "bow",
      "greet"
    ],
    "answer": 2,
    "cn": "在開始傳統武術比賽之前，兩名選手都停下來深深鞠躬以示互相尊重。 【選項解析】(A) bow 鞠躬  (B) shake 搖晃  (C) marry 結婚  (D) greet 問候。武術賽前深深鞠躬行禮，用 bow deeply。",
    "vocabIndex": 6
  },
  {
    "q": "True ______ cannot be bought with money, but it is built on mutual honesty, loyalty, and caring through difficult times.",
    "options": [
      "partner",
      "friendship",
      "marriage",
      "congratulations"
    ],
    "answer": 1,
    "cn": "真正的友誼無法用金錢買到，它是建立在患難時期的誠實與相互關懷之上。 【選項解析】(A) partner 夥伴  (B) friendship 友誼  (C) marriage 婚姻  (D) congratulations 祝賀。無法用金錢購買且經得起患難考驗的是 friendship。",
    "vocabIndex": 1
  },
  {
    "q": "After dating happily for seven years, Michael finally asked Jennifer to ______ him during their romantic trip to Paris.",
    "options": [
      "greet",
      "clap",
      "bow",
      "marry"
    ],
    "answer": 3,
    "cn": "交往了七年之後，麥可終於在他們浪漫的巴黎之旅中向珍妮佛求婚並希望能娶她。 【選項解析】(A) greet 問候  (B) clap 鼓掌  (C) marry 結婚  (D) bow 鞠躬。ask someone to marry him 指「向某人求婚/請對方嫁給他」。",
    "vocabIndex": 2
  },
  {
    "q": "The elderly couple recently celebrated their fiftieth wedding anniversary, and their long ______ remained full of love.",
    "options": [
      "partner",
      "friendship",
      "marriage",
      "congratulations"
    ],
    "answer": 2,
    "cn": "這對年邁的夫婦最近慶祝了他們的五十週年金婚，他們長久的婚姻依舊充滿愛意。 【選項解析】(A) partner 夥伴  (B) marriage 婚姻  (C) friendship 友誼  (D) congratulations 祝賀。wedding anniversary 慶祝長久的 marriage。",
    "vocabIndex": 3
  },
  {
    "q": "When entering a professional business meeting, it is customary to ______ hands with the client and maintain eye contact.",
    "options": [
      "shake",
      "bow",
      "clap",
      "marry"
    ],
    "answer": 0,
    "cn": "進入專業商務會議時，與客戶握手並保持眼神接觸是合乎禮節的做法。 【選項解析】(A) marry 結婚  (B) bow 鞠躬  (C) clap 鼓掌  (D) shake 搖動。shake hands with 为固定片語「與…握手」。",
    "vocabIndex": 7
  },
  {
    "q": "The teacher sent sincere ______ to the student council president after she won first place in the national speech contest.",
    "options": [
      "friendship",
      "partner",
      "marriage",
      "congratulations"
    ],
    "answer": 3,
    "cn": "在學生會長獲得全國演講比賽第一名後，老師向她表達了由衷的祝賀。 【選項解析】(A) congratulations 祝賀  (B) partner 夥伴  (C) marriage 婚姻  (D) friendship 友誼。獲獎時給予的表達是 congratulations。",
    "vocabIndex": 4
  },
  {
    "q": "\"______, don't leave your umbrella behind on the restaurant chair, because dark rain clouds are gathering outside!\"",
    "options": [
      "Hey",
      "Partner",
      "Marriage",
      "Friendship"
    ],
    "answer": 0,
    "cn": "「嘿，別把雨傘落在餐廳椅子上了，外面正在凝聚烏雲呢！」 【選項解析】(A) Hey 嘿  (B) Partner 夥伴  (C) Marriage 婚姻  (D) Friendship 友誼。感嘆詞引起對方注意，用 Hey。",
    "vocabIndex": 9
  },
  {
    "q": "Although they often argue about minor domestic matters, both partners are committed to protecting their stable ______.",
    "options": [
      "partner",
      "marriage",
      "congratulations",
      "friendship"
    ],
    "answer": 1,
    "cn": "儘管他們常為瑣事爭吵，但雙方伴侶都致力於維護他們穩定的婚姻生活。 【選項解析】(A) partner 夥伴  (B) congratulations 祝賀  (C) marriage 婚姻  (D) friendship 友誼。由 both partners 可知守護的是 marriage。",
    "vocabIndex": 3
  },
  {
    "q": "Whenever new exchange students arrive on campus, senior volunteers gather at the school gate to ______ them cheerfully.",
    "options": [
      "clap",
      "marry",
      "greet",
      "shake"
    ],
    "answer": 2,
    "cn": "每當新的交換生抵達校園，高年級志工就會聚集在校門口熱情地迎接他們。 【選項解析】(A) greet 迎接  (B) marry 結婚  (C) clap 鼓掌  (D) shake 搖晃。志工在門口熱情迎接新生，動詞用 greet。",
    "vocabIndex": 8
  },
  {
    "q": "At the end of the magic show, all the children in the audience jumped from their seats to ______ enthusiastically.",
    "options": [
      "marry",
      "bow",
      "greet",
      "clap"
    ],
    "answer": 3,
    "cn": "在魔術表演結束時，觀眾席中的所有孩子都從座位上跳起來熱情地鼓掌。 【選項解析】(A) marry 結婚  (B) clap 鼓掌  (C) greet 迎接  (D) bow 鞠躬。表演精采讓孩子起立鼓掌，選 clap。",
    "vocabIndex": 5
  },
  {
    "q": "If you decide to dance in the school talent competition, you will definitely need a skilled and reliable dance ______.",
    "options": [
      "partner",
      "friendship",
      "marriage",
      "congratulations"
    ],
    "answer": 0,
    "cn": "如果你決定參加學校的才藝競賽跳舞，你肯定需要一位技術純熟且可靠的舞伴。 【選項解析】(A) marriage 婚姻  (B) friendship 友誼  (C) partner 搭檔  (D) congratulations 祝賀。dance partner 表「舞伴」。",
    "vocabIndex": 0
  },
  {
    "q": "Traditional cultural customs in East Asia often require younger people to ______ respectfully when greeting family elders.",
    "options": [
      "marry",
      "bow",
      "clap",
      "shake"
    ],
    "answer": 1,
    "cn": "東亞的傳統文化習俗通常要求年輕人在向家族長輩問好時必須恭敬地鞠躬。 【選項解析】(A) bow 鞠躬  (B) marry 結婚  (C) clap 鼓掌  (D) shake 搖動。bow respectfully 表「恭敬地鞠躬」。",
    "vocabIndex": 6
  },
  {
    "q": "Because of the strong earthquake, the tall glass vase on the bookshelf started to ______ violently and almost fell.",
    "options": [
      "greet",
      "marry",
      "shake",
      "bow"
    ],
    "answer": 2,
    "cn": "由於強烈地震，書架上的高玻璃花瓶開始劇烈搖晃，差點摔落下來。 【選項解析】(A) greet 問候  (B) marry 結婚  (C) bow 鞠躬  (D) shake 搖晃。地震導致物品劇烈晃動，用 shake。",
    "vocabIndex": 7
  },
  {
    "q": "Sharing your personal secrets and supporting each other during difficult moments can help strengthen genuine lifelong ______.",
    "options": [
      "partner",
      "marriage",
      "congratulations",
      "friendship"
    ],
    "answer": 3,
    "cn": "在困難時刻分享秘密並互相扶持，有助於鞏固真正長久的終生友誼。 【選項解析】(A) partner 夥伴  (B) marriage 婚姻  (C) congratulations 祝賀  (D) friendship 友誼。lifelong friendship 表「終生友誼」。",
    "vocabIndex": 1
  },
  {
    "q": "The prince announced that he was ready to ______ the kind doctor from the village, which delighted the entire kingdom.",
    "options": [
      "marry",
      "greet",
      "clap",
      "shake"
    ],
    "answer": 0,
    "cn": "王子宣布他準備迎娶村裡那位善良的醫生，這讓整個王國欣喜若狂。 【選項解析】(A) marry 迎娶  (B) greet 迎接  (C) clap 鼓掌  (D) shake 搖動。marry the kind doctor 指迎娶醫生。",
    "vocabIndex": 2
  },
  {
    "q": "After hearing that his cousin had successfully passed the difficult medical entrance exam, Peter immediately texted his ______.",
    "options": [
      "marriage",
      "partner",
      "congratulations",
      "friendship"
    ],
    "answer": 2,
    "cn": "得知堂弟順利通過難度極高的醫學入學考試後，彼得立刻發簡訊表達祝賀。 【選項解析】(A) marriage 婚姻  (B) partner 夥伴  (C) congratulations 祝賀  (D) friendship 友誼。考試通過送出祝賀，用 congratulations。",
    "vocabIndex": 4
  },
  {
    "q": "\"______, be careful with that boiling pot of soup, or you might burn your hands!\" warned grandmother from the dining table.",
    "options": [
      "Partner",
      "Hey",
      "Marriage",
      "Friendship"
    ],
    "answer": 1,
    "cn": "「嘿，小心那鍋滾燙的湯，不然可能會燙傷手！」祖母從餐桌旁提醒道。 【選項解析】(A) Hey 嘿  (B) Partner 夥伴  (C) Marriage 婚姻  (D) Friendship 友誼。語氣詞 Hey 引起他人警戒。",
    "vocabIndex": 9
  },
  {
    "q": "The two laboratory scientists acted as research ______ on the biology project and shared the scientific award equally.",
    "options": [
      "congratulations",
      "marriages",
      "friendships",
      "partners"
    ],
    "answer": 3,
    "cn": "這兩位實驗室科學家在生物專案中擔任研究夥伴，並平分了該項科學獎。 【選項解析】(A) congratulations 祝賀  (B) partners 夥伴  (C) friendships 友誼  (D) marriages 婚姻。research partners 指「研究夥伴」。",
    "vocabIndex": 0
  },
  {
    "q": "Flight attendants stood near the aircraft door to ______ boarding passengers and assist them with finding their assigned seats.",
    "options": [
      "marry",
      "bow",
      "greet",
      "clap"
    ],
    "answer": 2,
    "cn": "空服員站在機艙門口問候登機的乘客，並協助他們找到指定的座位。 【選項解析】(A) marry 結婚  (B) bow 鞠躬  (C) greet 問候  (D) clap 鼓掌。greet boarding passengers 指「迎接入座乘客」。",
    "vocabIndex": 8
  },
  {
    "q": "When the orchestra conductor finished leading the symphony, the concert hall erupted into thunderous cheers and ______.",
    "options": [
      "partner",
      "clapping",
      "marriage",
      "friendship"
    ],
    "answer": 1,
    "cn": "當交響樂團指揮結束演出時，音樂廳裡爆發出雷鳴般的歡呼聲與掌聲。 【選項解析】(A) partner 夥伴  (B) clapping 掌聲  (C) marriage 婚姻  (D) friendship 友誼。thunderous cheers and clapping 表「雷鳴般的掌聲與歡呼」。",
    "vocabIndex": 5
  },
  {
    "q": "The theater actors held hands and took a final synchronized ______ before the heavy red curtains closed slowly.",
    "options": [
      "bow",
      "partner",
      "marriage",
      "friendship"
    ],
    "answer": 0,
    "cn": "在厚重的紅色帷幕緩緩拉上前，話劇演員們牽著手進行最後一次齊步鞠躬謝幕。 【選項解析】(A) bow 鞠躬  (B) partner 夥伴  (C) marriage 婚姻  (D) friendship 友誼。take a bow 表「鞠躬謝幕」。",
    "vocabIndex": 6
  },
  {
    "q": "Both international diplomats smiled warmly, posed for news cameras, and proceeded to ______ hands across the conference table.",
    "options": [
      "marry",
      "shake",
      "clap",
      "greet"
    ],
    "answer": 1,
    "cn": "兩國外交官親切微笑、面對新聞鏡頭擺姿勢，接著隔著會議桌互相握手。 【選項解析】(A) marry 結婚  (B) greet 問候  (C) clap 鼓掌  (D) shake 握手。shake hands 表「握手」。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "partner": {
    "pos": "n.",
    "en_def": "a person who takes part in an undertaking with another",
    "cn_def": "夥伴；搭檔；伴侶",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who takes part in an undertaking with another",
        "cn_def": "夥伴；搭檔；伴侶"
      }
    ]
  },
  "friendship": {
    "pos": "n.",
    "en_def": "the state of being friends; a close relationship",
    "cn_def": "友誼；交情",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being friends; a close relationship",
        "cn_def": "友誼；交情"
      }
    ]
  },
  "marry": {
    "pos": "v.",
    "en_def": "to become the husband or wife of someone in a legal ceremony",
    "cn_def": "結婚；嫁；娶",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to become the husband or wife of someone in a legal ceremony",
        "cn_def": "結婚；嫁；娶"
      }
    ]
  },
  "marriage": {
    "pos": "n.",
    "en_def": "the formal state of being married as husband and wife",
    "cn_def": "婚姻；婚姻生活",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the formal state of being married as husband and wife",
        "cn_def": "婚姻；婚姻生活"
      }
    ]
  },
  "congratulations": {
    "pos": "n.",
    "en_def": "words expressing praise or good wishes on a special occasion",
    "cn_def": "祝賀；恭喜",
    "combined": [
      {
        "pos": "n.",
        "en_def": "words expressing praise or good wishes on a special occasion",
        "cn_def": "祝賀；恭喜"
      }
    ]
  },
  "clap": {
    "pos": "v.",
    "en_def": "to strike the palms of the hands together with a sudden sharp sound",
    "cn_def": "鼓掌；拍手",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to strike the palms of the hands together with a sudden sharp sound",
        "cn_def": "鼓掌；拍手"
      }
    ]
  },
  "bow": {
    "pos": "v. / n.",
    "en_def": "to bend the body or head forwards as a sign of respect",
    "cn_def": "鞠躬；鞠躬致敬",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to bend the body or head forwards as a sign of respect",
        "cn_def": "鞠躬；鞠躬致敬"
      }
    ]
  },
  "shake": {
    "pos": "v.",
    "en_def": "to move with quick, short movements from side to side or up and down",
    "cn_def": "搖動；握手",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to move with quick, short movements from side to side or up and down",
        "cn_def": "搖動；握手"
      }
    ]
  },
  "greet": {
    "pos": "v.",
    "en_def": "to welcome or say hello to someone with words or actions",
    "cn_def": "問候；迎接；打招呼",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to welcome or say hello to someone with words or actions",
        "cn_def": "問候；迎接；打招呼"
      }
    ]
  },
  "hey": {
    "pos": "interj.",
    "en_def": "an informal exclamation used to attract attention or express greeting",
    "cn_def": "嘿（打招呼或引起注意）",
    "combined": [
      {
        "pos": "interj.",
        "en_def": "an informal exclamation used to attract attention or express greeting",
        "cn_def": "嘿（打招呼或引起注意）"
      }
    ]
  },
  "marriages": {
    "pos": "",
    "en_def": "",
    "cn_def": "婚姻",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "婚姻"
      }
    ]
  },
  "friendships": {
    "pos": "",
    "en_def": "",
    "cn_def": "友誼",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "友誼"
      }
    ]
  },
  "partners": {
    "pos": "",
    "en_def": "",
    "cn_def": "夥伴",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "夥伴"
      }
    ]
  },
  "clapping": {
    "pos": "",
    "en_def": "",
    "cn_def": "掌聲",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "掌聲"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
