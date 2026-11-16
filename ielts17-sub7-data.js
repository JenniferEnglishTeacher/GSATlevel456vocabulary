// Topic 17 Subunit 7 Quiz Data: Performing Arts & Music 表演藝術與音樂
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T17 S07 - Performing Arts & Music 表演藝術與音樂",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "performance",
    "pos": "n.",
    "cn_def": "表演;演出",
    "en_def": "the act of entertaining an audience",
    "sentence": "Her {{BLANK}} in the school play was so moving that several parents wiped tears from their eyes.",
    "cn": "她在學校話劇中的演出非常感人,好幾位家長都擦了眼淚。"
  },
  {
    "word": "performer",
    "pos": "n.",
    "cn_def": "表演者",
    "en_def": "a person who entertains an audience",
    "sentence": "Each {{BLANK}} at the festival had only ten minutes on stage, so they practised their acts many times.",
    "cn": "節慶上每位表演者只有十分鐘的上台時間,所以他們把表演練習了很多次。"
  },
  {
    "word": "theatre",
    "pos": "n.",
    "cn_def": "劇院",
    "en_def": "a building where plays are performed",
    "sentence": "We went to the {{BLANK}} to see a musical on Saturday, but the tickets were so expensive that we sat in the back row.",
    "cn": "週六我們去劇院看音樂劇,但票價太貴了,所以我們坐在最後一排。"
  },
  {
    "word": "playwright",
    "pos": "n.",
    "cn_def": "劇作家",
    "en_def": "a person who writes plays",
    "sentence": "The young {{BLANK}} wrote a play about her grandmother's life, and it sold out every night for a month.",
    "cn": "這位年輕劇作家寫了一齣關於她奶奶一生的戲,連續一個月每晚都售罄。"
  },
  {
    "word": "rehearse",
    "pos": "v.",
    "cn_def": "排練",
    "en_def": "to practise a play or music before a performance",
    "sentence": "The choir had to {{BLANK}} every evening for a month, because the concert was only a few weeks away.",
    "cn": "合唱團一個月來每晚都得排練,因為音樂會只剩幾週了。"
  },
  {
    "word": "backstage",
    "pos": "adv.",
    "cn_def": "在後台",
    "en_def": "behind the stage in a theatre",
    "sentence": "The dancers waited nervously {{BLANK}} before the show, while the audience slowly found their seats.",
    "cn": "演出前舞者們緊張地在後台等待,而觀眾則慢慢找到座位。"
  },
  {
    "word": "audition",
    "pos": "n.",
    "cn_def": "試鏡;甄選",
    "en_def": "a short performance to get a role in a show",
    "sentence": "She practised the song for weeks before the {{BLANK}}, and she was thrilled when she got the main role.",
    "cn": "她在試鏡前把那首歌練了好幾週,當她拿到主角時非常興奮。"
  },
  {
    "word": "choreographer",
    "pos": "n.",
    "cn_def": "編舞家",
    "en_def": "a person who plans the movements of a dance",
    "sentence": "The {{BLANK}} changed the dance three times in one week, so the dancers felt exhausted and confused.",
    "cn": "編舞家一週內改了三次舞步,所以舞者們感到筋疲力盡又困惑。"
  },
  {
    "word": "choreography",
    "pos": "n.",
    "cn_def": "編舞;舞步設計",
    "en_def": "the planned steps and movements of a dance",
    "sentence": "The {{BLANK}} of the K-pop song is very difficult, but thousands of fans have learned it from online videos.",
    "cn": "這首韓流歌曲的舞步設計非常困難,但數千名粉絲已經透過網路影片學會了。"
  },
  {
    "word": "ballet",
    "pos": "n.",
    "cn_def": "芭蕾舞",
    "en_def": "a graceful type of dance that tells a story",
    "sentence": "My niece has taken {{BLANK}} lessons since she was four, and she dreams of dancing in \"Swan Lake\" one day.",
    "cn": "我姪女從四歲就開始上芭蕾舞課,她夢想有一天能在《天鵝湖》中跳舞。"
  },
  {
    "word": "orchestra",
    "pos": "n.",
    "cn_def": "管弦樂團",
    "en_def": "a large group of musicians who play together",
    "sentence": "The school {{BLANK}} has sixty students, and they play a free concert in the park every spring.",
    "cn": "學校的管弦樂團有六十名學生,他們每年春天都會在公園舉辦免費音樂會。"
  },
  {
    "word": "composer",
    "pos": "n.",
    "cn_def": "作曲家",
    "en_def": "a person who writes music",
    "sentence": "The film's {{BLANK}} wrote the music in only three weeks, but it became one of the most famous soundtracks in the world.",
    "cn": "這部電影的作曲家只花三週就寫完配樂,但它成為世上最著名的電影原聲帶之一。"
  },
  {
    "word": "compose",
    "pos": "v.",
    "cn_def": "作曲",
    "en_def": "to write music",
    "sentence": "Mozart began to {{BLANK}} music when he was five, and he wrote more than six hundred pieces in his short life.",
    "cn": "莫札特五歲就開始作曲,他在短暫的一生中寫了六百多首作品。"
  },
  {
    "word": "melody",
    "pos": "n.",
    "cn_def": "旋律",
    "en_def": "a tune; a series of musical notes",
    "sentence": "The {{BLANK}} of the song is very simple, so even small children can sing it after hearing it once.",
    "cn": "這首歌的旋律非常簡單,所以連小孩子聽一次就會唱。"
  },
  {
    "word": "harmony",
    "pos": "n.",
    "cn_def": "和聲",
    "en_def": "pleasant musical notes sung or played together",
    "sentence": "The four singers practised their {{BLANK}} for hours, and their voices finally sounded like one beautiful voice.",
    "cn": "四位歌手練習和聲好幾個小時,他們的聲音終於聽起來像一個美麗的聲音。"
  },
  {
    "word": "lyrics",
    "pos": "n.",
    "cn_def": "歌詞",
    "en_def": "the words of a song",
    "sentence": "I love the tune, but I cannot understand the {{BLANK}}, so I looked them up online and translated them.",
    "cn": "我喜歡這個曲調,但聽不懂歌詞,所以我上網查了並把它們翻譯出來。"
  },
  {
    "word": "symphony",
    "pos": "n.",
    "cn_def": "交響曲",
    "en_def": "a long piece of music for an orchestra",
    "sentence": "Beethoven wrote his ninth {{BLANK}} when he was almost completely deaf, and it is still played all over the world.",
    "cn": "貝多芬在幾乎全聾時寫下他的第九號交響曲,至今仍在世界各地演奏。"
  },
  {
    "word": "concert",
    "pos": "n.",
    "cn_def": "音樂會;演唱會",
    "en_def": "a musical performance in front of an audience",
    "sentence": "Thousands of fans waited outside the stadium all day, because the {{BLANK}} was the band's last in Taiwan.",
    "cn": "數千名粉絲整天在體育場外等待,因為這場演唱會是樂團在台灣的最後一場。"
  },
  {
    "word": "musician",
    "pos": "n.",
    "cn_def": "音樂家",
    "en_def": "a person who plays or writes music",
    "sentence": "The street {{BLANK}} played the violin every evening near the station, and many commuters stopped to listen on their way home.",
    "cn": "這位街頭音樂家每晚在車站附近拉小提琴,許多通勤族在回家途中停下來聆聽。"
  },
  {
    "word": "instrument",
    "pos": "n.",
    "cn_def": "樂器",
    "en_def": "an object such as a piano or guitar used to make music",
    "sentence": "Learning a musical {{BLANK}} takes years of practice, but it can also improve your memory and patience.",
    "cn": "學習一種樂器需要多年練習,但它也能改善你的記憶力和耐心。"
  },
  {
    "word": "opera",
    "pos": "n.",
    "cn_def": "歌劇",
    "en_def": "a play in which the words are sung with an orchestra",
    "sentence": "Taiwanese {{BLANK}} is performed on outdoor stages near temples, and the actors wear colourful costumes and heavy make-up.",
    "cn": "台灣歌仔戲在廟宇附近的戶外舞台演出,演員穿著色彩繽紛的戲服、畫著濃妝。"
  },
  {
    "word": "musical",
    "pos": "n.",
    "cn_def": "音樂劇",
    "en_def": "a play or film with many songs and dances",
    "sentence": "We saw a Broadway {{BLANK}} in New York, and I could not stop singing its songs for weeks after the trip.",
    "cn": "我們在紐約看了一齣百老匯音樂劇,旅行結束後好幾週我都忍不住哼唱裡面的歌。"
  },
  {
    "word": "applause",
    "pos": "n.",
    "cn_def": "掌聲",
    "en_def": "the sound of people clapping",
    "sentence": "The {{BLANK}} continued for five minutes after the show ended, so the actors came back on stage three times.",
    "cn": "演出結束後掌聲持續了五分鐘,所以演員們回到台上謝幕了三次。"
  },
  {
    "word": "standing ovation",
    "pos": "n.phr.",
    "cn_def": "起立鼓掌",
    "en_def": "when an audience stands up to clap for a long time",
    "sentence": "The old pianist received a {{BLANK}} after her last concert, and she bowed with tears in her eyes.",
    "cn": "這位年邁的鋼琴家在最後一場音樂會後獲得全場起立鼓掌,她眼含淚水鞠躬致意。"
  },
  {
    "word": "encore",
    "pos": "n.",
    "cn_def": "安可曲",
    "en_def": "an extra song performed because the audience asks for it",
    "sentence": "The crowd shouted for an {{BLANK}}, so the band came back and played their most famous song once more.",
    "cn": "觀眾大喊要安可曲,所以樂團回到台上再演奏了一次他們最有名的歌。"
  },
  {
    "word": "premiere",
    "pos": "n.",
    "cn_def": "首映;首演",
    "en_def": "the first public performance of a film or play",
    "sentence": "The actors walked on the red carpet at the film's {{BLANK}}, while fans screamed and took photos behind the barriers.",
    "cn": "演員們在電影首映會上走紅毯,而粉絲們在圍欄後尖叫拍照。"
  },
  {
    "word": "busker",
    "pos": "n.",
    "cn_def": "街頭藝人",
    "en_def": "a person who performs music in the street for money",
    "sentence": "A talented {{BLANK}} was singing outside the department store, and people dropped coins into his guitar case.",
    "cn": "一位有才華的街頭藝人在百貨公司外唱歌,人們把硬幣丟進他的吉他盒裡。"
  },
  {
    "word": "costume",
    "pos": "n.",
    "cn_def": "戲服",
    "en_def": "clothes worn by actors in a show",
    "sentence": "The {{BLANK}} for the queen took two months to make, because every flower on the dress was sewn by hand.",
    "cn": "女王的戲服花了兩個月才完成,因為裙子上的每一朵花都是手工縫製的。"
  }
];

const MCQS = [
  {
    "q": "Her _____ in the school play was so moving that several parents wiped tears from their eyes.",
    "options": [
      "reverence",
      "performance",
      "brushstroke",
      "gallery"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Each _____ at the festival had only ten minutes on stage, so they practised their acts many times.",
    "options": [
      "paintbrush",
      "collection",
      "performer",
      "pastel"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "We went to the _____ to see a musical on Saturday, but the tickets were so expensive that we sat in the back row.",
    "options": [
      "theatre",
      "iconography",
      "cartoon",
      "revival"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The young _____ wrote a play about her grandmother's life, and it sold out every night for a month.",
    "options": [
      "biennale",
      "pixel",
      "potter",
      "playwright"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The choir had to _____ every evening for a month, because the concert was only a few weeks away.",
    "options": [
      "rehearse",
      "carve",
      "authenticate",
      "democratise"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The dancers waited nervously _____ before the show, while the audience slowly found their seats.",
    "options": [
      "candidly",
      "spontaneously",
      "backstage",
      "consciously"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "She practised the song for weeks before the _____, and she was thrilled when she got the main role.",
    "options": [
      "mastery",
      "pluralism",
      "illustrator",
      "audition"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The _____ changed the dance three times in one week, so the dancers felt exhausted and confused.",
    "options": [
      "paper-cutting",
      "choreographer",
      "expression",
      "pastel"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The _____ of the K-pop song is very difficult, but thousands of fans have learned it from online videos.",
    "options": [
      "maestro",
      "awe",
      "choreography",
      "audacity"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "My niece has taken _____ lessons since she was four, and she dreams of dancing in \"Swan Lake\" one day.",
    "options": [
      "luminary",
      "enthusiast",
      "heist",
      "ballet"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The school _____ has sixty students, and they play a free concert in the park every spring.",
    "options": [
      "reproduction",
      "orchestra",
      "cartoonist",
      "chisel"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The film's _____ wrote the music in only three weeks, but it became one of the most famous soundtracks in the world.",
    "options": [
      "composer",
      "excellence",
      "transcendence",
      "canvas"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Mozart began to _____ music when he was five, and he wrote more than six hundred pieces in his short life.",
    "options": [
      "delight",
      "cherish",
      "outshine",
      "compose"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The _____ of the song is very simple, so even small children can sing it after hearing it once.",
    "options": [
      "melody",
      "origami",
      "aperture",
      "flair"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The four singers practised their _____ for hours, and their voices finally sounded like one beautiful voice.",
    "options": [
      "style",
      "animation",
      "harmony",
      "devotee"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "I love the tune, but I cannot understand the _____, so I looked them up online and translated them.",
    "options": [
      "expression",
      "lyrics",
      "Impressionism",
      "grace"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Beethoven wrote his ninth _____ when he was almost completely deaf, and it is still played all over the world.",
    "options": [
      "symphony",
      "exclusivity",
      "poise",
      "provocation"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Thousands of fans waited outside the stadium all day, because the _____ was the band's last in Taiwan.",
    "options": [
      "potter",
      "sophistication",
      "concert",
      "origami"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The street _____ played the violin every evening near the station, and many commuters stopped to listen on their way home.",
    "options": [
      "auction",
      "musician",
      "tone",
      "luminary"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Learning a musical _____ takes years of practice, but it can also improve your memory and patience.",
    "options": [
      "abstraction",
      "wax",
      "valuation",
      "instrument"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Taiwanese _____ is performed on outdoor stages near temples, and the actors wear colourful costumes and heavy make-up.",
    "options": [
      "abstraction",
      "opera",
      "metalwork",
      "realism"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "We saw a Broadway _____ in New York, and I could not stop singing its songs for weeks after the trip.",
    "options": [
      "musical",
      "admiration",
      "aficionado",
      "frame"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The _____ continued for five minutes after the show ended, so the actors came back on stage three times.",
    "options": [
      "metalwork",
      "valuation",
      "spontaneity",
      "applause"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The old pianist received a _____ after her last concert, and she bowed with tears in her eyes.",
    "options": [
      "primary colour",
      "art dealer",
      "standing ovation",
      "modern art"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The crowd shouted for an _____, so the band came back and played their most famous song once more.",
    "options": [
      "wax",
      "irony",
      "expression",
      "encore"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The actors walked on the red carpet at the film's _____, while fans screamed and took photos behind the barriers.",
    "options": [
      "grace",
      "maestro",
      "premiere",
      "bust"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "A talented _____ was singing outside the department store, and people dropped coins into his guitar case.",
    "options": [
      "busker",
      "exclusivity",
      "easel",
      "charcoal"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The _____ for the queen took two months to make, because every flower on the dress was sewn by hand.",
    "options": [
      "glaze",
      "costume",
      "font",
      "talent"
    ],
    "answer": 1,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "performance": {
    "pos": "n.",
    "en_def": "the act of entertaining an audience",
    "cn_def": "表演;演出"
  },
  "performer": {
    "pos": "n.",
    "en_def": "a person who entertains an audience",
    "cn_def": "表演者"
  },
  "theatre": {
    "pos": "n.",
    "en_def": "a building where plays are performed",
    "cn_def": "劇院"
  },
  "playwright": {
    "pos": "n.",
    "en_def": "a person who writes plays",
    "cn_def": "劇作家"
  },
  "rehearse": {
    "pos": "v.",
    "en_def": "to practise a play or music before a performance",
    "cn_def": "排練"
  },
  "backstage": {
    "pos": "adv.",
    "en_def": "behind the stage in a theatre",
    "cn_def": "在後台"
  },
  "audition": {
    "pos": "n.",
    "en_def": "a short performance to get a role in a show",
    "cn_def": "試鏡;甄選"
  },
  "choreographer": {
    "pos": "n.",
    "en_def": "a person who plans the movements of a dance",
    "cn_def": "編舞家"
  },
  "choreography": {
    "pos": "n.",
    "en_def": "the planned steps and movements of a dance",
    "cn_def": "編舞;舞步設計"
  },
  "ballet": {
    "pos": "n.",
    "en_def": "a graceful type of dance that tells a story",
    "cn_def": "芭蕾舞"
  },
  "orchestra": {
    "pos": "n.",
    "en_def": "a large group of musicians who play together",
    "cn_def": "管弦樂團"
  },
  "composer": {
    "pos": "n.",
    "en_def": "a person who writes music",
    "cn_def": "作曲家"
  },
  "compose": {
    "pos": "v.",
    "en_def": "to write music",
    "cn_def": "作曲"
  },
  "melody": {
    "pos": "n.",
    "en_def": "a tune; a series of musical notes",
    "cn_def": "旋律"
  },
  "harmony": {
    "pos": "n.",
    "en_def": "pleasant musical notes sung or played together",
    "cn_def": "和聲"
  },
  "lyrics": {
    "pos": "n.",
    "en_def": "the words of a song",
    "cn_def": "歌詞"
  },
  "symphony": {
    "pos": "n.",
    "en_def": "a long piece of music for an orchestra",
    "cn_def": "交響曲"
  },
  "concert": {
    "pos": "n.",
    "en_def": "a musical performance in front of an audience",
    "cn_def": "音樂會;演唱會"
  },
  "musician": {
    "pos": "n.",
    "en_def": "a person who plays or writes music",
    "cn_def": "音樂家"
  },
  "instrument": {
    "pos": "n.",
    "en_def": "an object such as a piano or guitar used to make music",
    "cn_def": "樂器"
  },
  "opera": {
    "pos": "n.",
    "en_def": "a play in which the words are sung with an orchestra",
    "cn_def": "歌劇"
  },
  "musical": {
    "pos": "n.",
    "en_def": "a play or film with many songs and dances",
    "cn_def": "音樂劇"
  },
  "applause": {
    "pos": "n.",
    "en_def": "the sound of people clapping",
    "cn_def": "掌聲"
  },
  "standing ovation": {
    "pos": "n.phr.",
    "en_def": "when an audience stands up to clap for a long time",
    "cn_def": "起立鼓掌"
  },
  "encore": {
    "pos": "n.",
    "en_def": "an extra song performed because the audience asks for it",
    "cn_def": "安可曲"
  },
  "premiere": {
    "pos": "n.",
    "en_def": "the first public performance of a film or play",
    "cn_def": "首映;首演"
  },
  "busker": {
    "pos": "n.",
    "en_def": "a person who performs music in the street for money",
    "cn_def": "街頭藝人"
  },
  "costume": {
    "pos": "n.",
    "en_def": "clothes worn by actors in a show",
    "cn_def": "戲服"
  },
  "reverence": {
    "pos": "n.",
    "en_def": "deep respect",
    "cn_def": "崇敬"
  },
  "brushstroke": {
    "pos": "n.",
    "en_def": "a single mark made by a paintbrush",
    "cn_def": "筆觸"
  },
  "gallery": {
    "pos": "n.",
    "en_def": "a room or building where art is shown or sold",
    "cn_def": "畫廊;美術館"
  },
  "paintbrush": {
    "pos": "n.",
    "en_def": "a brush used for putting paint on a surface",
    "cn_def": "畫筆"
  },
  "collection": {
    "pos": "n.",
    "en_def": "a group of objects gathered together",
    "cn_def": "收藏"
  },
  "pastel": {
    "pos": "n.",
    "en_def": "a soft coloured chalk stick used for drawing",
    "cn_def": "粉彩筆"
  },
  "iconography": {
    "pos": "n.",
    "en_def": "the symbols used in a type of art and their meanings",
    "cn_def": "圖像學;象徵圖像"
  },
  "cartoon": {
    "pos": "n.",
    "en_def": "a funny drawing or animated film",
    "cn_def": "卡通;漫畫"
  },
  "revival": {
    "pos": "n.",
    "en_def": "a time when something becomes popular again",
    "cn_def": "復興;重新流行"
  },
  "biennale": {
    "pos": "n.",
    "en_def": "a large art exhibition held every two years",
    "cn_def": "雙年展"
  },
  "pixel": {
    "pos": "n.",
    "en_def": "one of the tiny dots that make a digital image",
    "cn_def": "像素"
  },
  "potter": {
    "pos": "n.",
    "en_def": "a person who makes pots and dishes from clay",
    "cn_def": "陶藝家"
  },
  "carve": {
    "pos": "v.",
    "en_def": "to cut wood or stone into a shape",
    "cn_def": "雕刻"
  },
  "authenticate": {
    "pos": "v.",
    "en_def": "to prove that something is real and not a copy",
    "cn_def": "鑑定真偽"
  },
  "democratise": {
    "pos": "v.",
    "en_def": "to make something available to everyone",
    "cn_def": "使大眾化"
  },
  "candidly": {
    "pos": "adv.",
    "en_def": "honestly and openly",
    "cn_def": "坦率地"
  },
  "spontaneously": {
    "pos": "adv.",
    "en_def": "suddenly and without planning",
    "cn_def": "自發地;即興地"
  },
  "consciously": {
    "pos": "adv.",
    "en_def": "in a way that is planned and deliberate",
    "cn_def": "有意識地;刻意地"
  },
  "mastery": {
    "pos": "n.",
    "en_def": "great skill or knowledge of something",
    "cn_def": "精通;熟練掌握"
  },
  "pluralism": {
    "pos": "n.",
    "en_def": "the acceptance of many different styles or beliefs",
    "cn_def": "多元並存"
  },
  "illustrator": {
    "pos": "n.",
    "en_def": "an artist who draws pictures for books or magazines",
    "cn_def": "插畫家"
  },
  "paper-cutting": {
    "pos": "n.",
    "en_def": "the art of cutting paper into pretty patterns",
    "cn_def": "剪紙"
  },
  "expression": {
    "pos": "n.",
    "en_def": "showing feelings or ideas through words or art",
    "cn_def": "表達"
  },
  "maestro": {
    "pos": "n.",
    "en_def": "a great musician or conductor",
    "cn_def": "大師;名指揮"
  },
  "awe": {
    "pos": "n.",
    "en_def": "a feeling of great respect mixed with wonder",
    "cn_def": "敬畏;驚嘆"
  },
  "audacity": {
    "pos": "n.",
    "en_def": "brave or rude confidence to do something shocking",
    "cn_def": "膽量;大膽"
  },
  "luminary": {
    "pos": "n.",
    "en_def": "a famous and respected person in a field",
    "cn_def": "傑出人物;泰斗"
  },
  "enthusiast": {
    "pos": "n.",
    "en_def": "a person who is very interested in an activity",
    "cn_def": "愛好者;熱衷者"
  },
  "heist": {
    "pos": "n.",
    "en_def": "a carefully planned robbery",
    "cn_def": "搶劫;竊案"
  },
  "reproduction": {
    "pos": "n.",
    "en_def": "a copy of a work of art",
    "cn_def": "複製品"
  },
  "cartoonist": {
    "pos": "n.",
    "en_def": "a person who draws funny pictures or comic strips",
    "cn_def": "漫畫家"
  },
  "chisel": {
    "pos": "n.",
    "en_def": "a metal tool with a sharp end for cutting wood or stone",
    "cn_def": "鑿子"
  },
  "excellence": {
    "pos": "n.",
    "en_def": "the quality of being extremely good",
    "cn_def": "卓越"
  },
  "transcendence": {
    "pos": "n.",
    "en_def": "going beyond ordinary experience",
    "cn_def": "超越;超凡"
  },
  "canvas": {
    "pos": "n.",
    "en_def": "strong cloth that artists paint on",
    "cn_def": "畫布"
  },
  "delight": {
    "pos": "v.",
    "en_def": "to give someone great pleasure",
    "cn_def": "使高興;使欣喜"
  },
  "cherish": {
    "pos": "v.",
    "en_def": "to love and care for something very much",
    "cn_def": "珍惜;珍愛"
  },
  "outshine": {
    "pos": "v.",
    "en_def": "to be much better than others",
    "cn_def": "勝過;比…出色"
  },
  "origami": {
    "pos": "n.",
    "en_def": "the Japanese art of folding paper into shapes",
    "cn_def": "摺紙"
  },
  "aperture": {
    "pos": "n.",
    "en_def": "the hole in a camera lens that controls light",
    "cn_def": "光圈"
  },
  "flair": {
    "pos": "n.",
    "en_def": "a natural ability to do something well",
    "cn_def": "天分;才華"
  },
  "style": {
    "pos": "n.",
    "en_def": "a particular way of making art",
    "cn_def": "風格"
  },
  "animation": {
    "pos": "n.",
    "en_def": "moving pictures made from drawings or computer images",
    "cn_def": "動畫"
  },
  "devotee": {
    "pos": "n.",
    "en_def": "a person who loves an activity very much",
    "cn_def": "愛好者;熱衷者"
  },
  "impressionism": {
    "pos": "n.",
    "en_def": "a style of painting that shows light and quick impressions",
    "cn_def": "印象派"
  },
  "grace": {
    "pos": "n.",
    "en_def": "a smooth and attractive way of moving",
    "cn_def": "優美;優雅"
  },
  "exclusivity": {
    "pos": "n.",
    "en_def": "the quality of being available only to a few people",
    "cn_def": "獨佔性;排他性"
  },
  "poise": {
    "pos": "n.",
    "en_def": "a calm, confident way of behaving",
    "cn_def": "沉著;泰然自若"
  },
  "provocation": {
    "pos": "n.",
    "en_def": "an action that makes people angry or react",
    "cn_def": "挑釁"
  },
  "sophistication": {
    "pos": "n.",
    "en_def": "a high level of skill and complexity",
    "cn_def": "精緻;成熟老練"
  },
  "auction": {
    "pos": "n.",
    "en_def": "a public sale where things go to the person who pays most",
    "cn_def": "拍賣會"
  },
  "tone": {
    "pos": "n.",
    "en_def": "how light or dark a colour is",
    "cn_def": "色調明暗"
  },
  "abstraction": {
    "pos": "n.",
    "en_def": "art that does not show real objects",
    "cn_def": "抽象"
  },
  "wax": {
    "pos": "n.",
    "en_def": "a soft substance used to make candles and models",
    "cn_def": "蠟"
  },
  "valuation": {
    "pos": "n.",
    "en_def": "a judgement of how much something is worth",
    "cn_def": "估價"
  },
  "metalwork": {
    "pos": "n.",
    "en_def": "objects made from metal by skilled workers",
    "cn_def": "金工"
  },
  "realism": {
    "pos": "n.",
    "en_def": "showing things as they really are",
    "cn_def": "寫實主義"
  },
  "admiration": {
    "pos": "n.",
    "en_def": "a feeling of great respect and approval",
    "cn_def": "欽佩;讚賞"
  },
  "aficionado": {
    "pos": "n.",
    "en_def": "a person who knows and loves a subject well",
    "cn_def": "行家;狂熱愛好者"
  },
  "frame": {
    "pos": "n.",
    "en_def": "the border of wood or metal around a picture",
    "cn_def": "畫框"
  },
  "spontaneity": {
    "pos": "n.",
    "en_def": "the quality of acting naturally without planning",
    "cn_def": "自發性;隨性"
  },
  "primary colour": {
    "pos": "n.phr.",
    "en_def": "red, yellow or blue, which mix to make other colours",
    "cn_def": "原色"
  },
  "art dealer": {
    "pos": "n.phr.",
    "en_def": "a person who buys and sells works of art",
    "cn_def": "藝術經紀商;畫商"
  },
  "modern art": {
    "pos": "n.phr.",
    "en_def": "art from about the 1860s to the 1970s that broke old rules",
    "cn_def": "現代藝術"
  },
  "irony": {
    "pos": "n.",
    "en_def": "a situation that is the opposite of what you expect",
    "cn_def": "諷刺"
  },
  "bust": {
    "pos": "n.",
    "en_def": "a sculpture of a person's head and shoulders",
    "cn_def": "半身像"
  },
  "easel": {
    "pos": "n.",
    "en_def": "a wooden stand that holds a painting while you work",
    "cn_def": "畫架"
  },
  "charcoal": {
    "pos": "n.",
    "en_def": "a black stick of burnt wood used for drawing",
    "cn_def": "炭筆"
  },
  "glaze": {
    "pos": "n.",
    "en_def": "a shiny coating put on pottery before it is fired",
    "cn_def": "釉"
  },
  "font": {
    "pos": "n.",
    "en_def": "a set of letters in one style and size",
    "cn_def": "字型"
  },
  "talent": {
    "pos": "n.",
    "en_def": "a natural ability to do something well",
    "cn_def": "天賦"
  }
};

const EXTRA_GLOSSES = {};
