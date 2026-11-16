// Topic 17 Subunit 11 Quiz Data: Academic Words 學術單字 4 (sophistication – uniqueness)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T17 S11 - Academic Words 學術單字 4 (sophistication – uniqueness)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "sophistication",
    "pos": "n.",
    "cn_def": "精緻;成熟老練",
    "en_def": "a high level of skill and complexity",
    "sentence": "The {{BLANK}} of the young designer's work surprised everyone, because she had never studied at an art school.",
    "cn": "這位年輕設計師作品的成熟老練讓所有人驚訝,因為她從未在藝術學校念過書。"
  },
  {
    "word": "symbolism",
    "pos": "n.",
    "cn_def": "象徵手法",
    "en_def": "the use of objects or colours to represent ideas",
    "sentence": "The painting is full of {{BLANK}}, and the broken clock in the corner represents the end of the artist's youth.",
    "cn": "這幅畫充滿象徵手法,角落那座壞掉的時鐘代表藝術家青春的結束。"
  },
  {
    "word": "vibrancy",
    "pos": "n.",
    "cn_def": "活力;鮮明",
    "en_def": "the quality of being bright, lively and exciting",
    "sentence": "The {{BLANK}} of the night market inspired her photos, because she loved the colours, noise and steam everywhere.",
    "cn": "夜市的活力啟發了她的攝影作品,因為她熱愛那裡無處不在的色彩、喧鬧與蒸氣。"
  },
  {
    "word": "virtuosity",
    "pos": "n.",
    "cn_def": "精湛技藝",
    "en_def": "very great skill in music or art",
    "sentence": "The violinist played with such {{BLANK}} that the audience stood up and cheered before the last note ended.",
    "cn": "這位小提琴家的演奏技藝如此精湛,觀眾在最後一個音結束前就起立歡呼。"
  },
  {
    "word": "audacity",
    "pos": "n.",
    "cn_def": "膽量;大膽",
    "en_def": "brave or rude confidence to do something shocking",
    "sentence": "Critics were shocked by the {{BLANK}} of the young artist, because she hung an ordinary bicycle in the national gallery.",
    "cn": "評論家對這位年輕藝術家的大膽感到震驚,因為她把一輛普通的腳踏車掛在國家美術館裡。"
  },
  {
    "word": "excellence",
    "pos": "n.",
    "cn_def": "卓越",
    "en_def": "the quality of being extremely good",
    "sentence": "The award recognises {{BLANK}} in film-making, and this year it went to a documentary about mountain villages.",
    "cn": "這個獎項表彰電影製作的卓越成就,今年頒給了一部關於山村的紀錄片。"
  },
  {
    "word": "finesse",
    "pos": "n.",
    "cn_def": "精巧;手法細膩",
    "en_def": "great skill and delicate care",
    "sentence": "The chef decorates every cake with {{BLANK}}, so each one looks like a small work of art.",
    "cn": "這位甜點師以細膩的手法裝飾每個蛋糕,所以每個都像一件小小的藝術品。"
  },
  {
    "word": "flamboyance",
    "pos": "n.",
    "cn_def": "浮誇;張揚",
    "en_def": "a very confident, colourful and showy style",
    "sentence": "The singer is famous for his {{BLANK}}, and he often appears on stage in gold suits and huge feathered hats.",
    "cn": "這位歌手以張揚聞名,他常穿著金色西裝、戴著巨大的羽毛帽登台。"
  },
  {
    "word": "grace",
    "pos": "n.",
    "cn_def": "優美;優雅",
    "en_def": "a smooth and attractive way of moving",
    "sentence": "The ballerina crossed the stage with great {{BLANK}}, and she seemed to float above the floor like a feather.",
    "cn": "這位芭蕾舞者以極為優美的姿態穿越舞台,彷彿羽毛般飄浮在地板上方。"
  },
  {
    "word": "humility",
    "pos": "n.",
    "cn_def": "謙遜",
    "en_def": "the quality of not thinking you are better than others",
    "sentence": "Despite his fame, the old master spoke with great {{BLANK}}, and he thanked his students for teaching him new ideas.",
    "cn": "儘管名聞遐邇,這位老大師說話時非常謙遜,還感謝學生教了他新想法。"
  },
  {
    "word": "irony",
    "pos": "n.",
    "cn_def": "諷刺",
    "en_def": "a situation that is the opposite of what you expect",
    "sentence": "The {{BLANK}} is that the painter died poor, while his paintings now sell for millions of dollars.",
    "cn": "諷刺的是,這位畫家死時一貧如洗,而他的畫作如今卻以數百萬美元售出。"
  },
  {
    "word": "legitimacy",
    "pos": "n.",
    "cn_def": "正當性;合法地位",
    "en_def": "the state of being accepted as real or fair",
    "sentence": "Street art has gained more {{BLANK}} in recent years, and some cities now invite artists to paint public walls.",
    "cn": "近年來街頭藝術獲得更多正當性,有些城市現在還邀請藝術家彩繪公共牆面。"
  },
  {
    "word": "mastery",
    "pos": "n.",
    "cn_def": "精通;熟練掌握",
    "en_def": "great skill or knowledge of something",
    "sentence": "His {{BLANK}} of light and shadow makes his paintings look almost real, and visitors often try to touch them.",
    "cn": "他對光影的精通讓他的畫看起來幾乎是真的,參觀者常想伸手去摸。"
  },
  {
    "word": "mediocrity",
    "pos": "n.",
    "cn_def": "平庸",
    "en_def": "the quality of being only average and not very good",
    "sentence": "The director refused to accept {{BLANK}}, so the actors had to repeat each scene until it was perfect.",
    "cn": "導演拒絕接受平庸,所以演員們必須重複每一場戲直到完美為止。"
  },
  {
    "word": "melancholy",
    "pos": "n.",
    "cn_def": "憂鬱;惆悵",
    "en_def": "a feeling of quiet sadness",
    "sentence": "There is a deep {{BLANK}} in his paintings of empty beaches, because he painted them after his wife passed away.",
    "cn": "他筆下空曠海灘的畫作中有一種深沉的憂鬱,因為那是他在妻子過世後畫的。"
  },
  {
    "word": "objectivity",
    "pos": "n.",
    "cn_def": "客觀性",
    "en_def": "judging fairly without personal feelings",
    "sentence": "It is hard to judge art with complete {{BLANK}}, because each person brings different feelings and memories to a painting.",
    "cn": "要完全客觀地評判藝術很難,因為每個人面對畫作時都帶著不同的感受和記憶。"
  },
  {
    "word": "pastiche",
    "pos": "n.",
    "cn_def": "仿作;拼湊模仿之作",
    "en_def": "a work that copies the style of other artists",
    "sentence": "The film is a {{BLANK}} of old Hollywood musicals, so fans of classic movies will recognise many of the scenes.",
    "cn": "這部電影是老好萊塢歌舞片的仿作,所以經典電影迷會認出許多場景。"
  },
  {
    "word": "pluralism",
    "pos": "n.",
    "cn_def": "多元並存",
    "en_def": "the acceptance of many different styles or beliefs",
    "sentence": "Today's art world is marked by {{BLANK}}, because no single style is more important than the others.",
    "cn": "當今藝術界的特色是多元並存,因為沒有任何單一風格比其他風格更重要。"
  },
  {
    "word": "poise",
    "pos": "n.",
    "cn_def": "沉著;泰然自若",
    "en_def": "a calm, confident way of behaving",
    "sentence": "Although she was only twelve, the pianist played with great {{BLANK}}, and she did not seem nervous at all.",
    "cn": "雖然這位鋼琴家只有十二歲,她演奏時卻非常沉著,一點也不顯得緊張。"
  },
  {
    "word": "reinvention",
    "pos": "n.",
    "cn_def": "重新塑造;改頭換面",
    "en_def": "changing yourself or something completely",
    "sentence": "The singer is famous for constant {{BLANK}}, and every new album comes with a different look and sound.",
    "cn": "這位歌手以不斷改頭換面聞名,每張新專輯都有不同的造型和曲風。"
  },
  {
    "word": "reverence",
    "pos": "n.",
    "cn_def": "崇敬",
    "en_def": "deep respect",
    "sentence": "Visitors speak with {{BLANK}} inside the old temple, and they bow before the carved statues of the gods.",
    "cn": "參觀者在古廟內帶著崇敬輕聲說話,並在神明雕像前鞠躬。"
  },
  {
    "word": "solitude",
    "pos": "n.",
    "cn_def": "獨處;孤獨",
    "en_def": "the state of being alone, often happily",
    "sentence": "Many writers need {{BLANK}} to work, so they rent quiet rooms in the mountains far from their families.",
    "cn": "許多作家需要獨處才能工作,所以他們會在遠離家人的山上租安靜的房間。"
  },
  {
    "word": "transcendence",
    "pos": "n.",
    "cn_def": "超越;超凡",
    "en_def": "going beyond ordinary experience",
    "sentence": "Some people feel a sense of {{BLANK}} when they listen to great music, as if their worries suddenly disappear.",
    "cn": "有些人聆聽偉大的音樂時會感到一種超凡的感受,彷彿煩惱突然消失了。"
  },
  {
    "word": "triumph",
    "pos": "n.",
    "cn_def": "巨大成功;勝利",
    "en_def": "a great success",
    "sentence": "The opening night was a {{BLANK}}, and the young director received flowers from the whole cast after the show.",
    "cn": "首演之夜大獲成功,演出後年輕導演收到全體演員送的花。"
  },
  {
    "word": "uniqueness",
    "pos": "n.",
    "cn_def": "獨特性",
    "en_def": "the quality of being the only one of its kind",
    "sentence": "The {{BLANK}} of each handmade cup makes it special, because no two cups have exactly the same shape.",
    "cn": "每個手工杯子的獨特性使它與眾不同,因為沒有兩個杯子的形狀完全相同。"
  }
];

const MCQS = [
  {
    "q": "The _____ of the young designer's work surprised everyone, because she had never studied at an art school.",
    "options": [
      "discernment",
      "palette",
      "sophistication",
      "tripod"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The painting is full of _____, and the broken clock in the corner represents the end of the artist's youth.",
    "options": [
      "symbolism",
      "exclusivity",
      "collector",
      "performer"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The _____ of the night market inspired her photos, because she loved the colours, noise and steam everywhere.",
    "options": [
      "appropriation",
      "vibrancy",
      "Romanticism",
      "lacquer"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The violinist played with such _____ that the audience stood up and cheered before the last note ended.",
    "options": [
      "busker",
      "typography",
      "spontaneity",
      "virtuosity"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Critics were shocked by the _____ of the young artist, because she hung an ordinary bicycle in the national gallery.",
    "options": [
      "bust",
      "melody",
      "audacity",
      "maestro"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The award recognises _____ in film-making, and this year it went to a documentary about mountain villages.",
    "options": [
      "excellence",
      "workmanship",
      "pastel",
      "pixel"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The chef decorates every cake with _____, so each one looks like a small work of art.",
    "options": [
      "animator",
      "ideal",
      "stencil",
      "finesse"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The singer is famous for his _____, and he often appears on stage in gold suits and huge feathered hats.",
    "options": [
      "instrument",
      "flamboyance",
      "ideal",
      "chisel"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The ballerina crossed the stage with great _____, and she seemed to float above the floor like a feather.",
    "options": [
      "installation",
      "busker",
      "grace",
      "Cubism"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Despite his fame, the old master spoke with great _____, and he thanked his students for teaching him new ideas.",
    "options": [
      "close-up",
      "humility",
      "pixel",
      "philanthropy"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The _____ is that the painter died poor, while his paintings now sell for millions of dollars.",
    "options": [
      "style",
      "frame",
      "orchestra",
      "irony"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Street art has gained more _____ in recent years, and some cities now invite artists to paint public walls.",
    "options": [
      "legitimacy",
      "fascination",
      "lyrics",
      "Surrealism"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "His _____ of light and shadow makes his paintings look almost real, and visitors often try to touch them.",
    "options": [
      "museum",
      "charcoal",
      "stylus",
      "mastery"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The director refused to accept _____, so the actors had to repeat each scene until it was perfect.",
    "options": [
      "exclusivity",
      "snapshot",
      "mediocrity",
      "embroidery"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "There is a deep _____ in his paintings of empty beaches, because he painted them after his wife passed away.",
    "options": [
      "melancholy",
      "costume",
      "snapshot",
      "pixel"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "It is hard to judge art with complete _____, because each person brings different feelings and memories to a painting.",
    "options": [
      "NFT",
      "objectivity",
      "canvas",
      "heist"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The film is a _____ of old Hollywood musicals, so fans of classic movies will recognise many of the scenes.",
    "options": [
      "photography",
      "renown",
      "pastiche",
      "revival"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Today's art world is marked by _____, because no single style is more important than the others.",
    "options": [
      "risk-taking",
      "snapshot",
      "stylus",
      "pluralism"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Although she was only twelve, the pianist played with great _____, and she did not seem nervous at all.",
    "options": [
      "hue",
      "poise",
      "melody",
      "museum"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The singer is famous for constant _____, and every new album comes with a different look and sound.",
    "options": [
      "reinvention",
      "instrument",
      "renown",
      "symphony"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Visitors speak with _____ inside the old temple, and they bow before the carved statues of the gods.",
    "options": [
      "paintbrush",
      "funding",
      "inclusivity",
      "reverence"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Many writers need _____ to work, so they rent quiet rooms in the mountains far from their families.",
    "options": [
      "portrayal",
      "canon",
      "solitude",
      "frame"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Some people feel a sense of _____ when they listen to great music, as if their worries suddenly disappear.",
    "options": [
      "transcendence",
      "juxtaposition",
      "tone",
      "canon"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The opening night was a _____, and the young director received flowers from the whole cast after the show.",
    "options": [
      "bust",
      "triumph",
      "musical",
      "shading"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The _____ of each handmade cup makes it special, because no two cups have exactly the same shape.",
    "options": [
      "uniqueness",
      "NFT",
      "philanthropy",
      "tripod"
    ],
    "answer": 0,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "sophistication": {
    "pos": "n.",
    "en_def": "a high level of skill and complexity",
    "cn_def": "精緻;成熟老練"
  },
  "symbolism": {
    "pos": "n.",
    "en_def": "the use of objects or colours to represent ideas",
    "cn_def": "象徵手法"
  },
  "vibrancy": {
    "pos": "n.",
    "en_def": "the quality of being bright, lively and exciting",
    "cn_def": "活力;鮮明"
  },
  "virtuosity": {
    "pos": "n.",
    "en_def": "very great skill in music or art",
    "cn_def": "精湛技藝"
  },
  "audacity": {
    "pos": "n.",
    "en_def": "brave or rude confidence to do something shocking",
    "cn_def": "膽量;大膽"
  },
  "excellence": {
    "pos": "n.",
    "en_def": "the quality of being extremely good",
    "cn_def": "卓越"
  },
  "finesse": {
    "pos": "n.",
    "en_def": "great skill and delicate care",
    "cn_def": "精巧;手法細膩"
  },
  "flamboyance": {
    "pos": "n.",
    "en_def": "a very confident, colourful and showy style",
    "cn_def": "浮誇;張揚"
  },
  "grace": {
    "pos": "n.",
    "en_def": "a smooth and attractive way of moving",
    "cn_def": "優美;優雅"
  },
  "humility": {
    "pos": "n.",
    "en_def": "the quality of not thinking you are better than others",
    "cn_def": "謙遜"
  },
  "irony": {
    "pos": "n.",
    "en_def": "a situation that is the opposite of what you expect",
    "cn_def": "諷刺"
  },
  "legitimacy": {
    "pos": "n.",
    "en_def": "the state of being accepted as real or fair",
    "cn_def": "正當性;合法地位"
  },
  "mastery": {
    "pos": "n.",
    "en_def": "great skill or knowledge of something",
    "cn_def": "精通;熟練掌握"
  },
  "mediocrity": {
    "pos": "n.",
    "en_def": "the quality of being only average and not very good",
    "cn_def": "平庸"
  },
  "melancholy": {
    "pos": "n.",
    "en_def": "a feeling of quiet sadness",
    "cn_def": "憂鬱;惆悵"
  },
  "objectivity": {
    "pos": "n.",
    "en_def": "judging fairly without personal feelings",
    "cn_def": "客觀性"
  },
  "pastiche": {
    "pos": "n.",
    "en_def": "a work that copies the style of other artists",
    "cn_def": "仿作;拼湊模仿之作"
  },
  "pluralism": {
    "pos": "n.",
    "en_def": "the acceptance of many different styles or beliefs",
    "cn_def": "多元並存"
  },
  "poise": {
    "pos": "n.",
    "en_def": "a calm, confident way of behaving",
    "cn_def": "沉著;泰然自若"
  },
  "reinvention": {
    "pos": "n.",
    "en_def": "changing yourself or something completely",
    "cn_def": "重新塑造;改頭換面"
  },
  "reverence": {
    "pos": "n.",
    "en_def": "deep respect",
    "cn_def": "崇敬"
  },
  "solitude": {
    "pos": "n.",
    "en_def": "the state of being alone, often happily",
    "cn_def": "獨處;孤獨"
  },
  "transcendence": {
    "pos": "n.",
    "en_def": "going beyond ordinary experience",
    "cn_def": "超越;超凡"
  },
  "triumph": {
    "pos": "n.",
    "en_def": "a great success",
    "cn_def": "巨大成功;勝利"
  },
  "uniqueness": {
    "pos": "n.",
    "en_def": "the quality of being the only one of its kind",
    "cn_def": "獨特性"
  },
  "discernment": {
    "pos": "n.",
    "en_def": "the ability to judge what is good",
    "cn_def": "鑑賞力;辨別力"
  },
  "palette": {
    "pos": "n.",
    "en_def": "a flat board for mixing paint colours",
    "cn_def": "調色盤"
  },
  "tripod": {
    "pos": "n.",
    "en_def": "a three-legged stand that holds a camera steady",
    "cn_def": "三腳架"
  },
  "exclusivity": {
    "pos": "n.",
    "en_def": "the quality of being available only to a few people",
    "cn_def": "獨佔性;排他性"
  },
  "collector": {
    "pos": "n.",
    "en_def": "a person who gathers valuable objects as a hobby",
    "cn_def": "收藏家"
  },
  "performer": {
    "pos": "n.",
    "en_def": "a person who entertains an audience",
    "cn_def": "表演者"
  },
  "appropriation": {
    "pos": "n.",
    "en_def": "taking something from another person or culture and using it",
    "cn_def": "挪用"
  },
  "romanticism": {
    "pos": "n.",
    "en_def": "an art movement that valued emotion, nature and imagination",
    "cn_def": "浪漫主義"
  },
  "lacquer": {
    "pos": "n.",
    "en_def": "a shiny liquid painted on wood to protect and decorate it",
    "cn_def": "漆"
  },
  "busker": {
    "pos": "n.",
    "en_def": "a person who performs music in the street for money",
    "cn_def": "街頭藝人"
  },
  "typography": {
    "pos": "n.",
    "en_def": "the style and arrangement of printed letters",
    "cn_def": "字體排印"
  },
  "spontaneity": {
    "pos": "n.",
    "en_def": "the quality of acting naturally without planning",
    "cn_def": "自發性;隨性"
  },
  "bust": {
    "pos": "n.",
    "en_def": "a sculpture of a person's head and shoulders",
    "cn_def": "半身像"
  },
  "melody": {
    "pos": "n.",
    "en_def": "a tune; a series of musical notes",
    "cn_def": "旋律"
  },
  "maestro": {
    "pos": "n.",
    "en_def": "a great musician or conductor",
    "cn_def": "大師;名指揮"
  },
  "workmanship": {
    "pos": "n.",
    "en_def": "the skill with which something is made",
    "cn_def": "做工;手藝"
  },
  "pastel": {
    "pos": "n.",
    "en_def": "a soft coloured chalk stick used for drawing",
    "cn_def": "粉彩筆"
  },
  "pixel": {
    "pos": "n.",
    "en_def": "one of the tiny dots that make a digital image",
    "cn_def": "像素"
  },
  "animator": {
    "pos": "n.",
    "en_def": "a person who makes animated films",
    "cn_def": "動畫師"
  },
  "ideal": {
    "pos": "n.",
    "en_def": "a perfect idea or standard you want to reach",
    "cn_def": "理想"
  },
  "stencil": {
    "pos": "n.",
    "en_def": "a sheet with a shape cut out, used to paint the same shape",
    "cn_def": "鏤空模板"
  },
  "instrument": {
    "pos": "n.",
    "en_def": "an object such as a piano or guitar used to make music",
    "cn_def": "樂器"
  },
  "chisel": {
    "pos": "n.",
    "en_def": "a metal tool with a sharp end for cutting wood or stone",
    "cn_def": "鑿子"
  },
  "installation": {
    "pos": "n.",
    "en_def": "a large artwork that fills a room or space",
    "cn_def": "裝置藝術"
  },
  "cubism": {
    "pos": "n.",
    "en_def": "an art style that shows objects as many geometric shapes",
    "cn_def": "立體派"
  },
  "close-up": {
    "pos": "n.",
    "en_def": "a photo taken from very near",
    "cn_def": "特寫"
  },
  "philanthropy": {
    "pos": "n.",
    "en_def": "giving money to help others",
    "cn_def": "慈善事業"
  },
  "style": {
    "pos": "n.",
    "en_def": "a particular way of making art",
    "cn_def": "風格"
  },
  "frame": {
    "pos": "n.",
    "en_def": "the border of wood or metal around a picture",
    "cn_def": "畫框"
  },
  "orchestra": {
    "pos": "n.",
    "en_def": "a large group of musicians who play together",
    "cn_def": "管弦樂團"
  },
  "fascination": {
    "pos": "n.",
    "en_def": "a very strong interest",
    "cn_def": "著迷"
  },
  "lyrics": {
    "pos": "n.",
    "en_def": "the words of a song",
    "cn_def": "歌詞"
  },
  "surrealism": {
    "pos": "n.",
    "en_def": "an art style that shows strange, dreamlike scenes",
    "cn_def": "超現實主義"
  },
  "museum": {
    "pos": "n.",
    "en_def": "a building where valuable objects are kept and shown",
    "cn_def": "博物館"
  },
  "charcoal": {
    "pos": "n.",
    "en_def": "a black stick of burnt wood used for drawing",
    "cn_def": "炭筆"
  },
  "stylus": {
    "pos": "n.",
    "en_def": "a pen-shaped tool for drawing on a screen",
    "cn_def": "觸控筆"
  },
  "snapshot": {
    "pos": "n.",
    "en_def": "a quick, informal photo",
    "cn_def": "快照;隨手拍"
  },
  "embroidery": {
    "pos": "n.",
    "en_def": "pictures sewn onto cloth with coloured thread",
    "cn_def": "刺繡"
  },
  "costume": {
    "pos": "n.",
    "en_def": "clothes worn by actors in a show",
    "cn_def": "戲服"
  },
  "nft": {
    "pos": "n.",
    "en_def": "a digital certificate that shows who owns a digital artwork",
    "cn_def": "非同質化代幣"
  },
  "canvas": {
    "pos": "n.",
    "en_def": "strong cloth that artists paint on",
    "cn_def": "畫布"
  },
  "heist": {
    "pos": "n.",
    "en_def": "a carefully planned robbery",
    "cn_def": "搶劫;竊案"
  },
  "photography": {
    "pos": "n.",
    "en_def": "the art or job of taking photos",
    "cn_def": "攝影"
  },
  "renown": {
    "pos": "n.",
    "en_def": "the state of being famous",
    "cn_def": "名聲;聲望"
  },
  "revival": {
    "pos": "n.",
    "en_def": "a time when something becomes popular again",
    "cn_def": "復興;重新流行"
  },
  "risk-taking": {
    "pos": "n.",
    "en_def": "doing things that might fail in order to achieve something",
    "cn_def": "冒險"
  },
  "hue": {
    "pos": "n.",
    "en_def": "a colour or shade of a colour",
    "cn_def": "色調;色相"
  },
  "symphony": {
    "pos": "n.",
    "en_def": "a long piece of music for an orchestra",
    "cn_def": "交響曲"
  },
  "paintbrush": {
    "pos": "n.",
    "en_def": "a brush used for putting paint on a surface",
    "cn_def": "畫筆"
  },
  "funding": {
    "pos": "n.",
    "en_def": "money given for a particular purpose",
    "cn_def": "資金;經費"
  },
  "inclusivity": {
    "pos": "n.",
    "en_def": "including all kinds of people",
    "cn_def": "包容性"
  },
  "portrayal": {
    "pos": "n.",
    "en_def": "the way someone or something is shown in art",
    "cn_def": "描繪;刻畫"
  },
  "canon": {
    "pos": "n.",
    "en_def": "the group of works seen as the most important",
    "cn_def": "經典作品;正典"
  },
  "juxtaposition": {
    "pos": "n.",
    "en_def": "placing two different things side by side",
    "cn_def": "並置;對比"
  },
  "tone": {
    "pos": "n.",
    "en_def": "how light or dark a colour is",
    "cn_def": "色調明暗"
  },
  "musical": {
    "pos": "n.",
    "en_def": "a play or film with many songs and dances",
    "cn_def": "音樂劇"
  },
  "shading": {
    "pos": "n.",
    "en_def": "darker areas in a drawing that show shadow and shape",
    "cn_def": "陰影明暗"
  }
};

const EXTRA_GLOSSES = {};
