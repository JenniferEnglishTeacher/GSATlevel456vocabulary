// Lesson 21 Quiz Data: Entertainment, Performing Arts & Musical Instruments
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 21 - Entertainment, Performing Arts & Musical Instruments",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "drama",
    "pos": "n.",
    "cn_def": "戲劇",
    "en_def": "a play for theater, radio, or television; exciting events",
    "sentence": "The high school English club staged a famous Shakespeare {{BLANK}} in the school hall, and parents gave them a standing ovation.",
    "cn": "高中英語社團在學校禮堂上演了一齣著名的莎士比亞戲劇，家長們起立給予他們熱烈鼓掌。"
  },
  {
    "word": "film",
    "pos": "n. / v.",
    "cn_def": "電影；膠卷；拍攝",
    "en_def": "a motion picture; thin layer; to record moving pictures",
    "sentence": "We stayed home on Friday night to watch an award-winning documentary {{BLANK}}, but my younger sister fell asleep on the couch.",
    "cn": "我們週五晚上留在家裡看一部獲獎的紀錄片電影，但我妹妹卻在沙發上睡著了。"
  },
  {
    "word": "cartoon",
    "pos": "n.",
    "cn_def": "卡通；漫畫",
    "en_def": "an animated film or a humorous drawing in a newspaper",
    "sentence": "Children usually wake up very early on Saturday mornings to watch their favorite {{BLANK}} on television while eating cereal.",
    "cn": "孩子們通常在週六早晨很早就起床，一邊吃麥片一邊看電視上他們最喜歡的卡通。"
  },
  {
    "word": "KTV",
    "pos": "n.",
    "cn_def": "KTV；卡拉OK包廂",
    "en_def": "a commercial entertainment venue where people sing karaoke",
    "sentence": "After completing our final semester examinations, our classmates booked a private room at a nearby {{BLANK}} to sing pop songs.",
    "cn": "完成期末考試後，我們同班同學在附近的一家 KTV 預訂了一間包廂唱流行歌曲。"
  },
  {
    "word": "MTV",
    "pos": "n.",
    "cn_def": "音樂電視；音樂錄影帶頻道",
    "en_def": "Music Television; music videos broadcast on screen",
    "sentence": "During the summer holidays, teenagers spent hours watching trendy pop songs and artist interviews on {{BLANK}}, which was very popular.",
    "cn": "在暑假期間，青少年花好幾個小時在 MTV 上觀看熱門流行歌曲和藝人訪談，這在當時非常流行。"
  },
  {
    "word": "jazz",
    "pos": "n.",
    "cn_def": "爵士樂",
    "en_def": "a type of modern music with strong rhythms and improvisation",
    "sentence": "The cozy downtown cafe invited a talented saxophone player to perform live {{BLANK}} every Friday evening, so many customers arrived early.",
    "cn": "市中心那家溫馨的咖啡館邀請了一位才華洋溢的薩克斯風樂手在每週五傍晚現場演奏爵士樂，所以許多顧客很早就抵達了。"
  },
  {
    "word": "drum",
    "pos": "n. / v.",
    "cn_def": "鼓；打鼓",
    "en_def": "a musical percussion instrument; to beat repeatedly",
    "sentence": "Kevin joined the marching band as the main rhythm player, so he practiced beating the bass {{BLANK}} for two hours every afternoon.",
    "cn": "凱文加入行進樂隊擔任主要節奏手，所以他每天下午花兩個小時練習敲擊大鼓。"
  },
  {
    "word": "flute",
    "pos": "n.",
    "cn_def": "長笛",
    "en_def": "a high-pitched wind instrument made of wood or metal",
    "sentence": "Sarah stood under the spotlight on stage and played a sweet melody on her silver {{BLANK}}, which touched everyone in the auditorium.",
    "cn": "莎拉站在舞台的聚光燈下，用她的銀色長笛吹奏出甜美的旋律，感動了禮堂裡的每個人。"
  },
  {
    "word": "guitar",
    "pos": "n.",
    "cn_def": "吉他",
    "en_def": "a musical instrument usually with six strings played by plucking",
    "sentence": "Jason sat beside the warm campfire on the beach and strummed his acoustic {{BLANK}} while his friends sang classic folk songs together.",
    "cn": "傑森坐在海灘溫暖的營火旁撥弄著他的民謠吉他，而他的朋友們則一起哼唱著經典民謠。"
  },
  {
    "word": "trumpet",
    "pos": "n.",
    "cn_def": "小號；喇叭",
    "en_def": "a brass musical instrument with a flared bell and valves",
    "sentence": "The brass band leader raised his hand to start the march, and the loud sound of the golden {{BLANK}} echoed across the athletic field.",
    "cn": "銅管樂隊指揮舉手示意開始進行曲，金黃色小號響亮的聲音隨即在運動場上迴盪。"
  }
];

const MCQS = [
  {
    "q": "The school music department formed a brass ensemble, and Mark was chosen to play the shiny golden ______.",
    "options": [
      "flute",
      "trumpet",
      "drum",
      "guitar"
    ],
    "answer": 1,
    "cn": "學校音樂系組建了一個銅管樂隊，馬克被選中演奏閃亮的金色小號。 【選項解析】(A) flute 長笛 (B) drum 鼓 (C) trumpet 小號 (D) guitar 吉他。由 brass ensemble（銅管樂團）與 shiny golden 可知選 trumpet。",
    "vocabIndex": 9
  },
  {
    "q": "Every Sunday morning, little kids sit in front of the screen laughing happily at an entertaining animal ______.",
    "options": [
      "cartoon",
      "drama",
      "film",
      "KTV"
    ],
    "answer": 0,
    "cn": "每逢週日早晨，小孩子們坐在螢幕前開心地看著逗趣的動物卡通大笑。 【選項解析】(A) cartoon 卡通 (B) drama 戲劇 (C) film 電影 (D) KTV 卡拉OK包廂。由 little kids 與 laughing at entertaining animal 可知選 cartoon。",
    "vocabIndex": 2
  },
  {
    "q": "When we camped on the mountain top last weekend, our music teacher brought his wooden ______ and taught us folk tunes.",
    "options": [
      "trumpet",
      "flute",
      "drum",
      "guitar"
    ],
    "answer": 3,
    "cn": "上週末我們在山頂露營時，音樂老師帶了他的木吉他教我們民謠曲調。 【選項解析】(A) trumpet 小號 (B) flute 長笛 (C) guitar 吉他 (D) drum 鼓。露營彈唱民謠最常使用 wooden acoustic guitar。",
    "vocabIndex": 8
  },
  {
    "q": "The director spent over three years in the rainforest to shoot a breathtaking nature ______ about endangered animals.",
    "options": [
      "MTV",
      "KTV",
      "film",
      "jazz"
    ],
    "answer": 2,
    "cn": "導演在雨林中花了三年多時間拍攝了一部關於瀕危動物的令人驚嘆的自然電影。 【選項解析】(A) film 電影 (B) KTV (C) MTV (D) jazz 爵士樂。由 shoot a breathtaking nature... 可知此處指電影/紀錄片 film。",
    "vocabIndex": 1
  },
  {
    "q": "The rock concert was so energetic that the sound of the loud bass ______ could be felt vibrating through the arena floor.",
    "options": [
      "drum",
      "flute",
      "trumpet",
      "guitar"
    ],
    "answer": 0,
    "cn": "搖滾音樂會活力十足，以至於大低音鼓的響亮聲音在體育場地板上震動。 【選項解析】(A) flute 長笛 (B) drum 鼓 (C) trumpet 小號 (D) guitar 吉他。由 bass drum（低音大鼓）與 vibrating the floor 可知選 drum。",
    "vocabIndex": 6
  },
  {
    "q": "Linda took deep breaths and placed her lips on the mouth hole of the silver ______ to play a calm classical tune.",
    "options": [
      "drum",
      "trumpet",
      "guitar",
      "flute"
    ],
    "answer": 3,
    "cn": "琳達深吸一口氣，將嘴唇貼在銀色長笛的吹孔上吹出平靜的古典曲調。 【選項解析】(A) drum 鼓 (B) trumpet 小號 (C) flute 長笛 (D) guitar 吉他。由 mouth hole（吹孔）與 silver 可知為長笛 flute。",
    "vocabIndex": 7
  },
  {
    "q": "The theatrical troupe performed an intense historical ______ about ancient emperors that received rave reviews from critics.",
    "options": [
      "cartoon",
      "drama",
      "MTV",
      "KTV"
    ],
    "answer": 1,
    "cn": "該劇團演出了一齣關於古代帝王的緊張歷史劇，獲得評論家的一致好評。 【選項解析】(A) drama 戲劇 (B) cartoon 卡通 (C) MTV (D) KTV。劇團（theatrical troupe）演出歷史戲劇 drama。",
    "vocabIndex": 0
  },
  {
    "q": "In the 1990s, almost every teenager tuned their home television to ______ to discover the latest international music hits.",
    "options": [
      "film",
      "drama",
      "MTV",
      "cartoon"
    ],
    "answer": 2,
    "cn": "在 1990 年代，幾乎所有青少年都將家裡的電視轉到 MTV 來發現最新的國際流行歌曲。 【選項解析】(A) film 電影 (B) MTV 音樂電視 (C) drama 戲劇 (D) cartoon 卡通。電視音樂頻道指 MTV。",
    "vocabIndex": 4
  },
  {
    "q": "For Amy's eighteenth birthday celebration, her best friends rented a soundproof room at a popular ______ downtown.",
    "options": [
      "KTV",
      "cartoon",
      "jazz",
      "film"
    ],
    "answer": 0,
    "cn": "為了慶祝艾米的十八歲生日，她最好的朋友們在市中心一家熱門的 KTV 租了一間隔音包廂。 【選項解析】(A) cartoon 卡通 (B) KTV (C) jazz 爵士樂 (D) film 電影。包廂唱歌娛樂場所為 KTV。",
    "vocabIndex": 3
  },
  {
    "q": "The cozy lounge near the river is famous for playing relaxing smooth ______ while guests chat softly over coffee.",
    "options": [
      "cartoon",
      "drama",
      "jazz",
      "film"
    ],
    "answer": 2,
    "cn": "河畔這家溫馨的休閒酒吧以播放令人放鬆的輕爵士樂聞名，客人們在喝咖啡時輕聲交談。 【選項解析】(A) jazz 爵士樂 (B) drama 戲劇 (C) cartoon 卡通 (D) film 電影。smooth jazz（流暢爵士樂）為經典音樂類型。",
    "vocabIndex": 5
  },
  {
    "q": "You need to replace the third nylon string on your acoustic ______ because it broke during yesterday's rehearsal.",
    "options": [
      "flute",
      "guitar",
      "drum",
      "trumpet"
    ],
    "answer": 1,
    "cn": "你需要更換原聲吉他上的第三根尼龍弦，因為它在昨天的排練中斷了。 【選項解析】(A) flute 長笛 (B) drum 鼓 (C) guitar 吉他 (D) trumpet 小號。弦樂器有 strings（琴弦），此處為 guitar。",
    "vocabIndex": 8
  },
  {
    "q": "The royal herald blew a clear signal on his brass ______ to announce the arrival of the queen at the ceremony.",
    "options": [
      "drum",
      "guitar",
      "flute",
      "trumpet"
    ],
    "answer": 3,
    "cn": "皇家傳令官吹響了他的銅號角發出清晰信號，在儀式上宣布女王的到來。 【選項解析】(A) trumpet 小號 (B) guitar 吉他 (C) flute 長笛 (D) drum 鼓。傳令官吹號（blew a signal on brass trumpet）。",
    "vocabIndex": 9
  },
  {
    "q": "The animated short ______ won an Oscar award because its hand-drawn pictures and humorous storyline were magnificent.",
    "options": [
      "drama",
      "cartoon",
      "MTV",
      "KTV"
    ],
    "answer": 1,
    "cn": "這部動畫短片獲得了奧斯卡獎，因為其手繪畫面和幽默故事情節非常壯麗。 【選項解析】(A) drama 戲劇 (B) KTV (C) MTV (D) cartoon 卡通。animated short cartoon（動畫短片）。",
    "vocabIndex": 2
  },
  {
    "q": "Peter wanted to learn percussion, so his parents bought him a pair of wooden sticks and a snare ______.",
    "options": [
      "drum",
      "trumpet",
      "guitar",
      "flute"
    ],
    "answer": 0,
    "cn": "彼得想學打擊樂，所以他的父母給他買了一對鼓棒和小軍鼓。 【選項解析】(A) guitar 吉他 (B) trumpet 小號 (C) drum 鼓 (D) flute 長笛。percussion（打擊樂）與 sticks、snare drum 相對應。",
    "vocabIndex": 6
  },
  {
    "q": "Many local actors auditioned for the leading role in the new television ______ produced by the public network.",
    "options": [
      "jazz",
      "MTV",
      "KTV",
      "drama"
    ],
    "answer": 3,
    "cn": "許多當地演員參加了公共電視網製作的新電視劇主角的試鏡。 【選項解析】(A) drama 戲劇 (B) MTV (C) KTV (D) jazz 爵士樂。television drama（電視劇）。",
    "vocabIndex": 0
  },
  {
    "q": "Because the movie tickets were completely sold out, we decided to stream a classic detective ______ on our laptop instead.",
    "options": [
      "KTV",
      "cartoon",
      "film",
      "jazz"
    ],
    "answer": 2,
    "cn": "因為電影票完全賣光了，我們決定改在筆記型電腦上看一部經典偵探電影。 【選項解析】(A) KTV (B) film 電影 (C) cartoon 卡通 (D) jazz 爵士樂。movie tickets 售罄改看 classic detective film。",
    "vocabIndex": 1
  },
  {
    "q": "Her fingers moved gracefully over the silver keys of the wind ______, producing high and airy notes in the quiet hall.",
    "options": [
      "drum",
      "flute",
      "trumpet",
      "guitar"
    ],
    "answer": 1,
    "cn": "她的手指優雅地在管樂長笛的銀鍵上移動，在安靜的禮堂吹出高亢空靈的音符。 【選項解析】(A) drum 鼓 (B) guitar 吉他 (C) trumpet 小號 (D) flute 長笛。wind instrument 與 silver keys 表長笛 flute。",
    "vocabIndex": 7
  },
  {
    "q": "The international youth hostel organized a Friday night session where guests sang karaoke just like in a private ______.",
    "options": [
      "KTV",
      "drama",
      "cartoon",
      "film"
    ],
    "answer": 0,
    "cn": "國際青年旅舍舉辦了週五晚會，讓房客像在私人 KTV 一樣引吭高歌。 【選項解析】(A) KTV (B) drama 戲劇 (C) cartoon 卡通 (D) film 電影。sang karaoke just like in a private KTV。",
    "vocabIndex": 3
  },
  {
    "q": "New Orleans is globally recognized as the historic birthplace of ______, attracting millions of music lovers each year.",
    "options": [
      "cartoon",
      "drama",
      "jazz",
      "film"
    ],
    "answer": 2,
    "cn": "紐奧良被公認為爵士樂的歷史發源地，每年吸引數百萬音樂愛好者。 【選項解析】(A) cartoon 卡通 (B) jazz 爵士樂 (C) drama 戲劇 (D) film 電影。New Orleans is the birthplace of jazz。",
    "vocabIndex": 5
  },
  {
    "q": "Before music streaming websites were created, music video clips broadcast on ______ were the primary way to promote albums.",
    "options": [
      "KTV",
      "drama",
      "cartoon",
      "MTV"
    ],
    "answer": 3,
    "cn": "在音樂串流網站出現之前，MTV 播放的音樂錄影帶是宣傳專輯的主要方式。 【選項解析】(A) MTV (B) drama 戲劇 (C) cartoon 卡通 (D) KTV。music video clips broadcast on MTV。",
    "vocabIndex": 4
  },
  {
    "q": "The street performer tapped his foot to the rhythm while plucking the steel strings of his six-string ______.",
    "options": [
      "drum",
      "flute",
      "guitar",
      "trumpet"
    ],
    "answer": 2,
    "cn": "街頭藝人一邊隨著節奏踏腳，一邊撥動他的六弦吉他的鋼弦。 【選項解析】(A) drum 鼓 (B) flute 長笛 (C) guitar 吉他 (D) trumpet 小號。plucking the steel strings of a six-string guitar。",
    "vocabIndex": 8
  },
  {
    "q": "The military ceremony began with a solemn salute accompanied by a single soldier playing the ______ in the distance.",
    "options": [
      "trumpet",
      "flute",
      "guitar",
      "drum"
    ],
    "answer": 0,
    "cn": "軍事儀式在莊嚴的敬禮中開始，遠處傳來一名士兵吹奏號角的小號聲。 【選項解析】(A) flute 長笛 (B) trumpet 小號 (C) guitar 吉他 (D) drum 鼓。軍事號角演奏通常為 trumpet。",
    "vocabIndex": 9
  },
  {
    "q": "On Sunday afternoons, newspapers often include a colorful comic section filled with short strips and funny ______.",
    "options": [
      "films",
      "MTVs",
      "dramas",
      "cartoons"
    ],
    "answer": 3,
    "cn": "在週日下午，報紙通常會附帶一個彩色的漫畫版面，上面有短篇連環畫和有趣的漫畫。 【選項解析】(A) films (B) cartoons (C) dramas (D) MTVs。comic section of newspapers filled with cartoons。",
    "vocabIndex": 2
  },
  {
    "q": "The theater company specializes in staging classical Greek ______ that explore human struggles and moral choices.",
    "options": [
      "KTV",
      "drama",
      "jazz",
      "MTV"
    ],
    "answer": 1,
    "cn": "該劇團專門上演探索人類奮鬥與道德抉擇的古典希臘戲劇。 【選項解析】(A) drama 戲劇 (B) KTV (C) jazz 爵士樂 (D) MTV。classical Greek drama（古希臘戲劇）。",
    "vocabIndex": 0
  },
  {
    "q": "The energetic marching band marched onto the football field, led by the rhythmic beats of the big tenor ______.",
    "options": [
      "drum",
      "flute",
      "trumpet",
      "guitar"
    ],
    "answer": 0,
    "cn": "充滿活力的行進樂隊走進美式足球場，由中音大鼓有節奏的敲擊聲引領著前進。 【選項解析】(A) guitar 吉他 (B) flute 長笛 (C) trumpet 小號 (D) drum 鼓。rhythmic beats of the tenor drum。",
    "vocabIndex": 6
  }
];

const LOOKUP = {
  "drama": {
    "pos": "n.",
    "en_def": "a play for theater, radio, or television; exciting events",
    "cn_def": "戲劇",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a play for theater, radio, or television; exciting events",
        "cn_def": "戲劇"
      }
    ]
  },
  "film": {
    "pos": "n. / v.",
    "en_def": "a motion picture; thin layer; to record moving pictures",
    "cn_def": "電影；膠卷；拍攝",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a motion picture; thin layer; to record moving pictures",
        "cn_def": "電影；膠卷；拍攝"
      }
    ]
  },
  "cartoon": {
    "pos": "n.",
    "en_def": "an animated film or a humorous drawing in a newspaper",
    "cn_def": "卡通；漫畫",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an animated film or a humorous drawing in a newspaper",
        "cn_def": "卡通；漫畫"
      }
    ]
  },
  "ktv": {
    "pos": "n.",
    "en_def": "a commercial entertainment venue where people sing karaoke",
    "cn_def": "KTV；卡拉OK包廂",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a commercial entertainment venue where people sing karaoke",
        "cn_def": "KTV；卡拉OK包廂"
      }
    ]
  },
  "mtv": {
    "pos": "n.",
    "en_def": "Music Television; music videos broadcast on screen",
    "cn_def": "音樂電視；音樂錄影帶頻道",
    "combined": [
      {
        "pos": "n.",
        "en_def": "Music Television; music videos broadcast on screen",
        "cn_def": "音樂電視；音樂錄影帶頻道"
      }
    ]
  },
  "jazz": {
    "pos": "n.",
    "en_def": "a type of modern music with strong rhythms and improvisation",
    "cn_def": "爵士樂",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a type of modern music with strong rhythms and improvisation",
        "cn_def": "爵士樂"
      }
    ]
  },
  "drum": {
    "pos": "n. / v.",
    "en_def": "a musical percussion instrument; to beat repeatedly",
    "cn_def": "鼓；打鼓",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a musical percussion instrument; to beat repeatedly",
        "cn_def": "鼓；打鼓"
      }
    ]
  },
  "flute": {
    "pos": "n.",
    "en_def": "a high-pitched wind instrument made of wood or metal",
    "cn_def": "長笛",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a high-pitched wind instrument made of wood or metal",
        "cn_def": "長笛"
      }
    ]
  },
  "guitar": {
    "pos": "n.",
    "en_def": "a musical instrument usually with six strings played by plucking",
    "cn_def": "吉他",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a musical instrument usually with six strings played by plucking",
        "cn_def": "吉他"
      }
    ]
  },
  "trumpet": {
    "pos": "n.",
    "en_def": "a brass musical instrument with a flared bell and valves",
    "cn_def": "小號；喇叭",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a brass musical instrument with a flared bell and valves",
        "cn_def": "小號；喇叭"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
