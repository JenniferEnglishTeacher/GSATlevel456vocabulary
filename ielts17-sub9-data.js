// Topic 17 Subunit 9 Quiz Data: Academic Words 學術單字 2 (outshine – craftsmanship)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T17 S09 - Academic Words 學術單字 2 (outshine – craftsmanship)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "outshine",
    "pos": "v.",
    "cn_def": "勝過;比…出色",
    "en_def": "to be much better than others",
    "sentence": "The young actor managed to {{BLANK}} the famous stars in the film, so many critics praised his performance.",
    "cn": "這位年輕演員在片中勝過了那些知名明星,所以許多影評人稱讚他的演出。"
  },
  {
    "word": "redeem",
    "pos": "v.",
    "cn_def": "彌補;挽回",
    "en_def": "to make something seem less bad",
    "sentence": "The film's story is weak, but the beautiful music helps {{BLANK}} it, so I still enjoyed watching it.",
    "cn": "這部電影的劇情很弱,但優美的配樂幫忙彌補了缺點,所以我還是看得很開心。"
  },
  {
    "word": "rekindle",
    "pos": "v.",
    "cn_def": "重新燃起",
    "en_def": "to make a feeling active again",
    "sentence": "Visiting the art museum helped {{BLANK}} my interest in drawing, so I bought a new sketchbook on the way home.",
    "cn": "參觀美術館重新燃起我對畫畫的興趣,所以我在回家路上買了一本新的素描本。"
  },
  {
    "word": "enliven",
    "pos": "v.",
    "cn_def": "使有生氣",
    "en_def": "to make something more lively and interesting",
    "sentence": "Colourful murals {{BLANK}} the grey walls of the old market, and more young people now visit it at weekends.",
    "cn": "色彩繽紛的壁畫讓老市場灰色的牆面有了生氣,現在週末有更多年輕人來逛。"
  },
  {
    "word": "ridicule",
    "pos": "v.",
    "cn_def": "嘲笑",
    "en_def": "to laugh at someone in an unkind way",
    "sentence": "Critics {{BLANK}} the Impressionists at first, but today their paintings are among the most expensive in the world.",
    "cn": "評論家起初嘲笑印象派畫家,但如今他們的畫作是世上最昂貴的作品之一。"
  },
  {
    "word": "scorn",
    "pos": "v.",
    "cn_def": "輕蔑;鄙視",
    "en_def": "to show that you think something is worthless",
    "sentence": "Some traditional painters {{BLANK}} digital art, but young artists believe a tablet is just another kind of brush.",
    "cn": "有些傳統畫家鄙視數位藝術,但年輕藝術家認為平板只是另一種畫筆。"
  },
  {
    "word": "mock",
    "pos": "v.",
    "cn_def": "嘲弄",
    "en_def": "to laugh at someone and make them look silly",
    "sentence": "Classmates used to {{BLANK}} his strange drawings, but now he is a successful illustrator with thousands of fans.",
    "cn": "同學以前常嘲弄他奇怪的畫,但現在他是擁有數千名粉絲的成功插畫家。"
  },
  {
    "word": "satirise",
    "pos": "v.",
    "cn_def": "諷刺",
    "en_def": "to use humour to criticise people or ideas",
    "sentence": "The comedy show likes to {{BLANK}} politicians, so some leaders have tried to stop it from being broadcast.",
    "cn": "這個喜劇節目喜歡諷刺政治人物,所以有些領導人曾試圖阻止它播出。"
  },
  {
    "word": "persevere",
    "pos": "v.",
    "cn_def": "堅持不懈",
    "en_def": "to keep trying although it is difficult",
    "sentence": "Learning the violin was very hard at first, but she decided to {{BLANK}}, and now she plays in a famous orchestra.",
    "cn": "學小提琴一開始非常困難,但她決定堅持不懈,現在她在一個知名管弦樂團演奏。"
  },
  {
    "word": "recreate",
    "pos": "v.",
    "cn_def": "重現",
    "en_def": "to make something exist again or copy it",
    "sentence": "The students tried to {{BLANK}} the famous painting using only coloured rice, and the result looked surprisingly good.",
    "cn": "學生們試著只用彩色米粒重現那幅名畫,結果看起來出奇地好。"
  },
  {
    "word": "unsettle",
    "pos": "v.",
    "cn_def": "使不安",
    "en_def": "to make someone feel worried or uncomfortable",
    "sentence": "The dark film is designed to {{BLANK}} viewers, so the music becomes louder whenever the camera moves slowly.",
    "cn": "這部黑暗電影的設計就是要讓觀眾不安,所以每當鏡頭緩慢移動時音樂就會變大聲。"
  },
  {
    "word": "intrigue",
    "pos": "v.",
    "cn_def": "引起好奇",
    "en_def": "to make someone very interested and curious",
    "sentence": "The strange title of the exhibition {{BLANK}} me, so I went inside although I had planned to go shopping.",
    "cn": "展覽奇特的名稱引起我的好奇,所以雖然我原本打算去逛街,還是走了進去。"
  },
  {
    "word": "enchant",
    "pos": "v.",
    "cn_def": "使陶醉;迷住",
    "en_def": "to charm and delight someone",
    "sentence": "The old fairy-tale illustrations {{BLANK}} readers of every age, and the book has been printed again and again.",
    "cn": "這些古老的童話插畫迷住了各個年齡層的讀者,這本書也一再重印。"
  },
  {
    "word": "dazzle",
    "pos": "v.",
    "cn_def": "使驚豔;使目眩",
    "en_def": "to impress someone greatly with skill or beauty",
    "sentence": "The fireworks show {{BLANK}} the crowd by the river, and everyone looked up at the sky with their mouths open.",
    "cn": "煙火秀讓河邊的人群驚豔不已,每個人都張大嘴巴仰望天空。"
  },
  {
    "word": "transfix",
    "pos": "v.",
    "cn_def": "使呆住",
    "en_def": "to make someone unable to move because of shock or interest",
    "sentence": "The huge whale sculpture seemed to {{BLANK}} the children, and they stood under it without saying a word.",
    "cn": "那座巨大的鯨魚雕塑似乎讓孩子們看呆了,他們一語不發地站在它下面。"
  },
  {
    "word": "underfund",
    "pos": "v.",
    "cn_def": "資金不足",
    "en_def": "to give too little money to something",
    "sentence": "The government continues to {{BLANK}} the arts, so many small theatres have closed in recent years.",
    "cn": "政府持續對藝術投入不足的資金,所以近年來許多小劇場都關門了。"
  },
  {
    "word": "encourage",
    "pos": "v.",
    "cn_def": "鼓勵",
    "en_def": "to give someone confidence or support to do something",
    "sentence": "Good teachers {{BLANK}} students to try new materials, and they do not punish them for messy experiments.",
    "cn": "好老師會鼓勵學生嘗試新素材,而且不會因為實驗弄得亂七八糟而處罰他們。"
  },
  {
    "word": "unlock",
    "pos": "v.",
    "cn_def": "釋放;開啟",
    "en_def": "to release or make something available",
    "sentence": "Music can {{BLANK}} old memories in people with poor memory, so some care homes play songs from the 1960s.",
    "cn": "音樂能為記憶力不好的人開啟舊回憶,所以有些安養院會播放1960年代的歌曲。"
  },
  {
    "word": "polish",
    "pos": "v.",
    "cn_def": "潤飾;改進",
    "en_def": "to improve something by making small changes",
    "sentence": "The singer spent a week trying to {{BLANK}} her performance, but she still felt nervous before the competition.",
    "cn": "這位歌手花了一週試圖潤飾她的演出,但比賽前她仍然感到緊張。"
  },
  {
    "word": "abstraction",
    "pos": "n.",
    "cn_def": "抽象",
    "en_def": "art that does not show real objects",
    "sentence": "Her early paintings show real people, but later she moved towards pure {{BLANK}}, using only lines and colour.",
    "cn": "她早期的畫作描繪真實人物,但後來轉向純粹的抽象,只使用線條和色彩。"
  },
  {
    "word": "admiration",
    "pos": "n.",
    "cn_def": "欽佩;讚賞",
    "en_def": "a feeling of great respect and approval",
    "sentence": "I have great {{BLANK}} for street artists, because they work in the heat and rain but rarely receive any credit.",
    "cn": "我非常欽佩街頭藝術家,因為他們在炎熱和雨中工作,卻很少得到認可。"
  },
  {
    "word": "awe",
    "pos": "n.",
    "cn_def": "敬畏;驚嘆",
    "en_def": "a feeling of great respect mixed with wonder",
    "sentence": "We stood in {{BLANK}} in front of the giant Buddha statue, because it was much larger than we had imagined.",
    "cn": "我們滿懷敬畏地站在巨大的佛像前,因為它比我們想像的大得多。"
  },
  {
    "word": "canon",
    "pos": "n.",
    "cn_def": "經典作品;正典",
    "en_def": "the group of works seen as the most important",
    "sentence": "Women artists were often left out of the art {{BLANK}}, so museums are now trying to show more of their work.",
    "cn": "女性藝術家常被排除在藝術經典作品之外,所以博物館現在正努力展出更多她們的作品。"
  },
  {
    "word": "contemplation",
    "pos": "n.",
    "cn_def": "沉思",
    "en_def": "quiet, careful thinking about something",
    "sentence": "The quiet garden was designed for {{BLANK}}, so visitors are asked to turn off their phones and speak softly.",
    "cn": "這座寧靜的庭園是為沉思而設計的,所以遊客被要求關掉手機並輕聲說話。"
  },
  {
    "word": "craftsmanship",
    "pos": "n.",
    "cn_def": "工藝技術;手藝",
    "en_def": "skill in making things by hand",
    "sentence": "The {{BLANK}} of this wooden temple door is amazing, because no nails were used to hold it together.",
    "cn": "這扇木製廟門的工藝技術令人驚嘆,因為完全沒有使用釘子來固定。"
  }
];

const MCQS = [
  {
    "q": "The young actor managed to _____ the famous stars in the film, so many critics praised his performance.",
    "options": [
      "outshine",
      "astonish",
      "popularise",
      "crystallise"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The film's story is weak, but the beautiful music helps _____ it, so I still enjoyed watching it.",
    "options": [
      "carve",
      "doodle",
      "redeem",
      "captivate"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Visiting the art museum helped _____ my interest in drawing, so I bought a new sketchbook on the way home.",
    "options": [
      "cherish",
      "personify",
      "bid",
      "rekindle"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Colourful murals _____ the grey walls of the old market, and more young people now visit it at weekends.",
    "options": [
      "inspire",
      "enliven",
      "doodle",
      "captivate"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Critics _____ the Impressionists at first, but today their paintings are among the most expensive in the world.",
    "options": [
      "knit",
      "liberate",
      "daydream",
      "ridicule"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Some traditional painters _____ digital art, but young artists believe a tablet is just another kind of brush.",
    "options": [
      "celebrate",
      "democratise",
      "scorn",
      "daydream"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Classmates used to _____ his strange drawings, but now he is a successful illustrator with thousands of fans.",
    "options": [
      "mesmerise",
      "mock",
      "democratise",
      "rework"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The comedy show likes to _____ politicians, so some leaders have tried to stop it from being broadcast.",
    "options": [
      "satirise",
      "reimagine",
      "idolise",
      "zoom"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Learning the violin was very hard at first, but she decided to _____, and now she plays in a famous orchestra.",
    "options": [
      "bid",
      "craft",
      "zoom",
      "persevere"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The students tried to _____ the famous painting using only coloured rice, and the result looked surprisingly good.",
    "options": [
      "authenticate",
      "recreate",
      "democratise",
      "vandalise"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The dark film is designed to _____ viewers, so the music becomes louder whenever the camera moves slowly.",
    "options": [
      "borrow",
      "personify",
      "unsettle",
      "zoom"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The strange title of the exhibition _____ me, so I went inside although I had planned to go shopping.",
    "options": [
      "intrigue",
      "reinterpret",
      "borrow",
      "deconstruct"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The old fairy-tale illustrations _____ readers of every age, and the book has been printed again and again.",
    "options": [
      "retouch",
      "enchant",
      "delight",
      "reimagine"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The fireworks show _____ the crowd by the river, and everyone looked up at the sky with their mouths open.",
    "options": [
      "dazzle",
      "fascinate",
      "dabble",
      "zoom"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The huge whale sculpture seemed to _____ the children, and they stood under it without saying a word.",
    "options": [
      "reimagine",
      "captivate",
      "carve",
      "transfix"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The government continues to _____ the arts, so many small theatres have closed in recent years.",
    "options": [
      "bid",
      "imagine",
      "underfund",
      "disapprove"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Good teachers _____ students to try new materials, and they do not punish them for messy experiments.",
    "options": [
      "reinterpret",
      "encourage",
      "immerse",
      "cast"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Music can _____ old memories in people with poor memory, so some care homes play songs from the 1960s.",
    "options": [
      "unlock",
      "fascinate",
      "innovate",
      "inspire"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The singer spent a week trying to _____ her performance, but she still felt nervous before the competition.",
    "options": [
      "retouch",
      "explore",
      "imagine",
      "polish"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Her early paintings show real people, but later she moved towards pure _____, using only lines and colour.",
    "options": [
      "appropriation",
      "docent",
      "abstraction",
      "sketchbook"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "I have great _____ for street artists, because they work in the heat and rain but rarely receive any credit.",
    "options": [
      "collection",
      "musician",
      "palette",
      "admiration"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "We stood in _____ in front of the giant Buddha statue, because it was much larger than we had imagined.",
    "options": [
      "rendition",
      "awe",
      "portrait",
      "enthusiast"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Women artists were often left out of the art _____, so museums are now trying to show more of their work.",
    "options": [
      "canon",
      "audacity",
      "composer",
      "Expressionism"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The quiet garden was designed for _____, so visitors are asked to turn off their phones and speak softly.",
    "options": [
      "canvas",
      "creativity",
      "contemplation",
      "flamboyance"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The _____ of this wooden temple door is amazing, because no nails were used to hold it together.",
    "options": [
      "triumph",
      "expression",
      "self-portrait",
      "craftsmanship"
    ],
    "answer": 3,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "outshine": {
    "pos": "v.",
    "en_def": "to be much better than others",
    "cn_def": "勝過;比…出色"
  },
  "redeem": {
    "pos": "v.",
    "en_def": "to make something seem less bad",
    "cn_def": "彌補;挽回"
  },
  "rekindle": {
    "pos": "v.",
    "en_def": "to make a feeling active again",
    "cn_def": "重新燃起"
  },
  "enliven": {
    "pos": "v.",
    "en_def": "to make something more lively and interesting",
    "cn_def": "使有生氣"
  },
  "ridicule": {
    "pos": "v.",
    "en_def": "to laugh at someone in an unkind way",
    "cn_def": "嘲笑"
  },
  "scorn": {
    "pos": "v.",
    "en_def": "to show that you think something is worthless",
    "cn_def": "輕蔑;鄙視"
  },
  "mock": {
    "pos": "v.",
    "en_def": "to laugh at someone and make them look silly",
    "cn_def": "嘲弄"
  },
  "satirise": {
    "pos": "v.",
    "en_def": "to use humour to criticise people or ideas",
    "cn_def": "諷刺"
  },
  "persevere": {
    "pos": "v.",
    "en_def": "to keep trying although it is difficult",
    "cn_def": "堅持不懈"
  },
  "recreate": {
    "pos": "v.",
    "en_def": "to make something exist again or copy it",
    "cn_def": "重現"
  },
  "unsettle": {
    "pos": "v.",
    "en_def": "to make someone feel worried or uncomfortable",
    "cn_def": "使不安"
  },
  "intrigue": {
    "pos": "v.",
    "en_def": "to make someone very interested and curious",
    "cn_def": "引起好奇"
  },
  "enchant": {
    "pos": "v.",
    "en_def": "to charm and delight someone",
    "cn_def": "使陶醉;迷住"
  },
  "dazzle": {
    "pos": "v.",
    "en_def": "to impress someone greatly with skill or beauty",
    "cn_def": "使驚豔;使目眩"
  },
  "transfix": {
    "pos": "v.",
    "en_def": "to make someone unable to move because of shock or interest",
    "cn_def": "使呆住"
  },
  "underfund": {
    "pos": "v.",
    "en_def": "to give too little money to something",
    "cn_def": "資金不足"
  },
  "encourage": {
    "pos": "v.",
    "en_def": "to give someone confidence or support to do something",
    "cn_def": "鼓勵"
  },
  "unlock": {
    "pos": "v.",
    "en_def": "to release or make something available",
    "cn_def": "釋放;開啟"
  },
  "polish": {
    "pos": "v.",
    "en_def": "to improve something by making small changes",
    "cn_def": "潤飾;改進"
  },
  "abstraction": {
    "pos": "n.",
    "en_def": "art that does not show real objects",
    "cn_def": "抽象"
  },
  "admiration": {
    "pos": "n.",
    "en_def": "a feeling of great respect and approval",
    "cn_def": "欽佩;讚賞"
  },
  "awe": {
    "pos": "n.",
    "en_def": "a feeling of great respect mixed with wonder",
    "cn_def": "敬畏;驚嘆"
  },
  "canon": {
    "pos": "n.",
    "en_def": "the group of works seen as the most important",
    "cn_def": "經典作品;正典"
  },
  "contemplation": {
    "pos": "n.",
    "en_def": "quiet, careful thinking about something",
    "cn_def": "沉思"
  },
  "craftsmanship": {
    "pos": "n.",
    "en_def": "skill in making things by hand",
    "cn_def": "工藝技術;手藝"
  },
  "astonish": {
    "pos": "v.",
    "en_def": "to surprise someone very much",
    "cn_def": "使驚訝"
  },
  "popularise": {
    "pos": "v.",
    "en_def": "to make something liked by many people",
    "cn_def": "使普及"
  },
  "crystallise": {
    "pos": "v.",
    "en_def": "to make an idea clear and definite",
    "cn_def": "使具體化;使明確"
  },
  "carve": {
    "pos": "v.",
    "en_def": "to cut wood or stone into a shape",
    "cn_def": "雕刻"
  },
  "doodle": {
    "pos": "v.",
    "en_def": "to draw small pictures without thinking carefully",
    "cn_def": "隨手塗鴉"
  },
  "captivate": {
    "pos": "v.",
    "en_def": "to hold someone's attention completely",
    "cn_def": "吸引;迷住"
  },
  "cherish": {
    "pos": "v.",
    "en_def": "to love and care for something very much",
    "cn_def": "珍惜;珍愛"
  },
  "personify": {
    "pos": "v.",
    "en_def": "to give human qualities to an object or idea",
    "cn_def": "擬人化"
  },
  "bid": {
    "pos": "v.",
    "en_def": "to offer a price for something at an auction",
    "cn_def": "出價;競標"
  },
  "inspire": {
    "pos": "v.",
    "en_def": "to give someone the wish or idea to do something",
    "cn_def": "啟發;激勵"
  },
  "knit": {
    "pos": "v.",
    "en_def": "to make clothes from wool using two long needles",
    "cn_def": "編織;打毛線"
  },
  "liberate": {
    "pos": "v.",
    "en_def": "to make someone free",
    "cn_def": "解放"
  },
  "daydream": {
    "pos": "v.",
    "en_def": "to think pleasant thoughts that take you away from the present",
    "cn_def": "做白日夢"
  },
  "celebrate": {
    "pos": "v.",
    "en_def": "to show that an event or person is important",
    "cn_def": "頌揚;慶祝"
  },
  "democratise": {
    "pos": "v.",
    "en_def": "to make something available to everyone",
    "cn_def": "使大眾化"
  },
  "mesmerise": {
    "pos": "v.",
    "en_def": "to hold someone's attention so they cannot look away",
    "cn_def": "使入迷"
  },
  "rework": {
    "pos": "v.",
    "en_def": "to change something in order to improve it",
    "cn_def": "修改;重做"
  },
  "reimagine": {
    "pos": "v.",
    "en_def": "to think about something again in a new way",
    "cn_def": "重新構想"
  },
  "idolise": {
    "pos": "v.",
    "en_def": "to admire someone too much",
    "cn_def": "崇拜;偶像化"
  },
  "zoom": {
    "pos": "v.",
    "en_def": "to make something look closer with a camera",
    "cn_def": "拉近;放大"
  },
  "craft": {
    "pos": "v.",
    "en_def": "to make something skilfully",
    "cn_def": "精心製作"
  },
  "authenticate": {
    "pos": "v.",
    "en_def": "to prove that something is real and not a copy",
    "cn_def": "鑑定真偽"
  },
  "vandalise": {
    "pos": "v.",
    "en_def": "to damage property on purpose",
    "cn_def": "蓄意破壞"
  },
  "borrow": {
    "pos": "v.",
    "en_def": "to take and use an idea from another person or culture",
    "cn_def": "借用"
  },
  "reinterpret": {
    "pos": "v.",
    "en_def": "to explain or perform something in a new way",
    "cn_def": "重新詮釋"
  },
  "deconstruct": {
    "pos": "v.",
    "en_def": "to break an idea or object into parts to understand it",
    "cn_def": "解構"
  },
  "retouch": {
    "pos": "v.",
    "en_def": "to improve a photo by making small changes",
    "cn_def": "修圖"
  },
  "delight": {
    "pos": "v.",
    "en_def": "to give someone great pleasure",
    "cn_def": "使高興;使欣喜"
  },
  "fascinate": {
    "pos": "v.",
    "en_def": "to interest someone very much",
    "cn_def": "使著迷"
  },
  "dabble": {
    "pos": "v.",
    "en_def": "to try an activity without being serious about it",
    "cn_def": "涉獵;玩票"
  },
  "imagine": {
    "pos": "v.",
    "en_def": "to form a picture of something in your mind",
    "cn_def": "想像"
  },
  "disapprove": {
    "pos": "v.",
    "en_def": "to think something is bad or wrong",
    "cn_def": "不贊成"
  },
  "immerse": {
    "pos": "v.",
    "en_def": "to become completely involved in something",
    "cn_def": "沉浸"
  },
  "cast": {
    "pos": "v.",
    "en_def": "to make an object by pouring hot metal into a shape",
    "cn_def": "鑄造"
  },
  "innovate": {
    "pos": "v.",
    "en_def": "to introduce new ideas or methods",
    "cn_def": "創新"
  },
  "explore": {
    "pos": "v.",
    "en_def": "to examine or try out something in order to learn about it",
    "cn_def": "探索"
  },
  "appropriation": {
    "pos": "n.",
    "en_def": "taking something from another person or culture and using it",
    "cn_def": "挪用"
  },
  "docent": {
    "pos": "n.",
    "en_def": "a trained guide who explains art in a museum",
    "cn_def": "導覽員"
  },
  "sketchbook": {
    "pos": "n.",
    "en_def": "a book of blank pages for drawing",
    "cn_def": "素描本"
  },
  "collection": {
    "pos": "n.",
    "en_def": "a group of objects gathered together",
    "cn_def": "收藏"
  },
  "musician": {
    "pos": "n.",
    "en_def": "a person who plays or writes music",
    "cn_def": "音樂家"
  },
  "palette": {
    "pos": "n.",
    "en_def": "a flat board for mixing paint colours",
    "cn_def": "調色盤"
  },
  "rendition": {
    "pos": "n.",
    "en_def": "a performance of a song or piece of music",
    "cn_def": "演繹;演唱"
  },
  "portrait": {
    "pos": "n.",
    "en_def": "a painting, drawing or photo of a person",
    "cn_def": "肖像畫"
  },
  "enthusiast": {
    "pos": "n.",
    "en_def": "a person who is very interested in an activity",
    "cn_def": "愛好者;熱衷者"
  },
  "audacity": {
    "pos": "n.",
    "en_def": "brave or rude confidence to do something shocking",
    "cn_def": "膽量;大膽"
  },
  "composer": {
    "pos": "n.",
    "en_def": "a person who writes music",
    "cn_def": "作曲家"
  },
  "expressionism": {
    "pos": "n.",
    "en_def": "an art style that shows strong feelings rather than real appearance",
    "cn_def": "表現主義"
  },
  "canvas": {
    "pos": "n.",
    "en_def": "strong cloth that artists paint on",
    "cn_def": "畫布"
  },
  "creativity": {
    "pos": "n.",
    "en_def": "the ability to make new and original things",
    "cn_def": "創造力"
  },
  "flamboyance": {
    "pos": "n.",
    "en_def": "a very confident, colourful and showy style",
    "cn_def": "浮誇;張揚"
  },
  "triumph": {
    "pos": "n.",
    "en_def": "a great success",
    "cn_def": "巨大成功;勝利"
  },
  "expression": {
    "pos": "n.",
    "en_def": "showing feelings or ideas through words or art",
    "cn_def": "表達"
  },
  "self-portrait": {
    "pos": "n.",
    "en_def": "a picture an artist makes of himself or herself",
    "cn_def": "自畫像"
  }
};

const EXTRA_GLOSSES = {};
