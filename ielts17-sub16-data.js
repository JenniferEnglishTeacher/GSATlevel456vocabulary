// Topic 17 Subunit 16 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T17 S16 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "art for art's sake",
    "pos": "n.phr.",
    "cn_def": "為藝術而藝術",
    "en_def": "art made only for beauty, not for any other purpose",
    "sentence": "He does not paint to make money or teach lessons, because he believes in {{BLANK}}.",
    "cn": "他畫畫不是為了賺錢或說教,因為他信奉為藝術而藝術。"
  },
  {
    "word": "a picture is worth a thousand words",
    "pos": "n.phr.",
    "cn_def": "一圖勝千言",
    "en_def": "an image can explain more than a long description",
    "sentence": "Our teacher showed us one photo of the flood instead of reading the report, because {{BLANK}}.",
    "cn": "老師給我們看一張水災的照片而不是念報告,因為一圖勝千言。"
  },
  {
    "word": "beauty is in the eye of the beholder",
    "pos": "n.phr.",
    "cn_def": "情人眼裡出西施;美因人而異",
    "en_def": "different people have different ideas of what is beautiful",
    "sentence": "My brother thinks the strange sculpture is ugly, but I love it, so I guess {{BLANK}}.",
    "cn": "我哥覺得那座怪雕塑很醜,但我很喜歡,所以我想美是因人而異的。"
  },
  {
    "word": "the bigger picture",
    "pos": "n.phr.",
    "cn_def": "大局;全貌",
    "en_def": "the whole situation, not just small details",
    "sentence": "Do not worry too much about one small mistake in your drawing, and try to look at {{BLANK}}.",
    "cn": "不要太擔心畫中的一個小錯誤,試著看看整體大局。"
  },
  {
    "word": "paint a picture of",
    "pos": "v.phr.",
    "cn_def": "描繪出…的樣貌",
    "en_def": "to describe something in a particular way",
    "sentence": "The documentary {{BLANK}} life in a poor fishing village, and many viewers decided to donate money.",
    "cn": "這部紀錄片描繪出一個貧窮漁村的生活樣貌,許多觀眾因此決定捐款。"
  },
  {
    "word": "draw inspiration from",
    "pos": "v.phr.",
    "cn_def": "從…汲取靈感",
    "en_def": "to get ideas for your work from something",
    "sentence": "Many fashion designers {{BLANK}} old movies, so you can see styles from the 1950s in their new collections.",
    "cn": "許多時裝設計師從老電影汲取靈感,所以你能在他們的新系列中看到1950年代的風格。"
  },
  {
    "word": "a work of art",
    "pos": "n.phr.",
    "cn_def": "藝術品",
    "en_def": "a painting, sculpture or other piece of art; something very beautiful",
    "sentence": "The birthday cake was {{BLANK}}, and nobody wanted to cut it because it looked like a small castle.",
    "cn": "那個生日蛋糕簡直是一件藝術品,沒有人捨得切,因為它看起來像一座小城堡。"
  },
  {
    "word": "a labour of love",
    "pos": "n.phr.",
    "cn_def": "出於熱愛而做的辛苦工作",
    "en_def": "hard work done because you love it, not for money",
    "sentence": "Restoring the old temple paintings was {{BLANK}} for the artist, because she received almost no money for her years of work.",
    "cn": "修復這些古廟畫作對這位藝術家來說是一項出於熱愛的辛苦工作,因為她多年的付出幾乎沒有報酬。"
  },
  {
    "word": "get the creative juices flowing",
    "pos": "v.phr.",
    "cn_def": "激發創意",
    "en_def": "to help yourself start having ideas",
    "sentence": "I always listen to music before I write, because it helps me {{BLANK}}.",
    "cn": "我寫作前總是聽音樂,因為它幫助我激發創意。"
  },
  {
    "word": "push the boundaries",
    "pos": "v.phr.",
    "cn_def": "突破界限",
    "en_def": "to try to do more than what is usual or accepted",
    "sentence": "The young dancers want to {{BLANK}} of traditional dance, so they mix Taiwanese folk steps with hip-hop.",
    "cn": "這群年輕舞者想要突破傳統舞蹈的界限,所以他們把台灣民俗舞步和嘻哈混搭。"
  },
  {
    "word": "express oneself",
    "pos": "v.phr.",
    "cn_def": "表達自己",
    "en_def": "to show your feelings and ideas",
    "sentence": "Shy students often find it easier to {{BLANK}} through drawing, because they do not need to speak in front of others.",
    "cn": "害羞的學生常覺得透過畫畫表達自己比較容易,因為他們不需要在別人面前說話。"
  },
  {
    "word": "steal the show",
    "pos": "v.phr.",
    "cn_def": "搶盡風頭",
    "en_def": "to attract the most attention in a performance",
    "sentence": "The little girl only had one line in the play, but she {{BLANK}} when she started to dance.",
    "cn": "那個小女孩在劇中只有一句台詞,但她開始跳舞時就搶盡了風頭。"
  },
  {
    "word": "take centre stage",
    "pos": "v.phr.",
    "cn_def": "成為焦點",
    "en_def": "to become the most important or noticed thing",
    "sentence": "Local artists will {{BLANK}} at this year's festival, while international stars will perform only on the last night.",
    "cn": "在今年的藝術節中,在地藝術家將成為焦點,而國際明星只會在最後一晚演出。"
  },
  {
    "word": "a hard act to follow",
    "pos": "n.phr.",
    "cn_def": "難以超越的榜樣",
    "en_def": "someone so good that the next person will seem worse",
    "sentence": "The last art teacher was very popular, so she will be {{BLANK}} for the new teacher.",
    "cn": "上一位美術老師非常受歡迎,所以對新老師來說,她會是難以超越的榜樣。"
  },
  {
    "word": "bring something to life",
    "pos": "v.phr.",
    "cn_def": "使…栩栩如生",
    "en_def": "to make something seem real and exciting",
    "sentence": "The talented actors brought the old story {{BLANK}}, and even students who hated history enjoyed the play.",
    "cn": "才華洋溢的演員們讓那個老故事栩栩如生,就連討厭歷史的學生都很喜歡這齣戲。",
    "answer": "to life"
  },
  {
    "word": "not one's cup of tea",
    "pos": "adj.phr.",
    "cn_def": "不是某人的菜",
    "en_def": "not something a person likes",
    "sentence": "Opera is {{BLANK}}, but I still went with my grandmother because she really wanted company.",
    "cn": "歌劇不是我的菜,但我還是陪奶奶去了,因為她真的很想要人作伴。"
  },
  {
    "word": "strike a chord",
    "pos": "v.phr.",
    "cn_def": "引起共鳴",
    "en_def": "to make people feel sympathy or connection",
    "sentence": "The song about leaving home {{BLANK}} with many young workers, because they also live far from their families.",
    "cn": "那首關於離鄉的歌引起許多年輕上班族的共鳴,因為他們也住得離家人很遠。"
  },
  {
    "word": "behind the scenes",
    "pos": "phr.",
    "cn_def": "在幕後",
    "en_def": "secretly or in a way the public does not see",
    "sentence": "Many people work {{BLANK}} at a concert, and without them the singers could not perform.",
    "cn": "許多人在演唱會幕後工作,沒有他們,歌手就無法演出。"
  },
  {
    "word": "one of a kind",
    "pos": "adj.phr.",
    "cn_def": "獨一無二的",
    "en_def": "completely unique",
    "sentence": "Each handmade lamp is {{BLANK}}, so you will never see the same one in another person's house.",
    "cn": "每盞手工燈都是獨一無二的,所以你絕不會在別人家看到一模一樣的。"
  },
  {
    "word": "make one's mark",
    "pos": "v.phr.",
    "cn_def": "嶄露頭角;留下印記",
    "en_def": "to become successful and noticed",
    "sentence": "The young director quickly {{BLANK}} in the film industry, and her first movie won three awards.",
    "cn": "這位年輕導演很快就在電影界嶄露頭角,她的第一部電影就贏得了三個獎項。"
  }
];

const MCQS = [
  {
    "q": "He does not paint to make money or teach lessons, because he believes in _____.",
    "options": [
      "pop art",
      "still life",
      "art for art's sake",
      "digital art"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Our teacher showed us one photo of the flood instead of reading the report, because _____.",
    "options": [
      "price tag",
      "a picture is worth a thousand words",
      "conceptual art",
      "art critic"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "My brother thinks the strange sculpture is ugly, but I love it, so I guess _____.",
    "options": [
      "beauty is in the eye of the beholder",
      "art market",
      "digital art",
      "visual effects"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Do not worry too much about one small mistake in your drawing, and try to look at _____.",
    "options": [
      "lateral thinking",
      "contemporary art",
      "art movement",
      "the bigger picture"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The documentary _____ life in a poor fishing village, and many viewers decided to donate money.",
    "options": [
      "draw inspiration from",
      "paint a picture of",
      "express oneself",
      "strike a chord"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Many fashion designers _____ old movies, so you can see styles from the 1950s in their new collections.",
    "options": [
      "take centre stage",
      "paint a picture of",
      "draw inspiration from",
      "express oneself"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The birthday cake was _____, and nobody wanted to cut it because it looked like a small castle.",
    "options": [
      "creative process",
      "art dealer",
      "lateral thinking",
      "a work of art"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Restoring the old temple paintings was _____ for the artist, because she received almost no money for her years of work.",
    "options": [
      "a labour of love",
      "potter's wheel",
      "digital art",
      "art fair"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "I always listen to music before I write, because it helps me _____.",
    "options": [
      "strike a chord",
      "get the creative juices flowing",
      "steal the show",
      "make one's mark"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The young dancers want to _____ of traditional dance, so they mix Taiwanese folk steps with hip-hop.",
    "options": [
      "push the boundaries",
      "make one's mark",
      "paint a picture of",
      "steal the show"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Shy students often find it easier to _____ through drawing, because they do not need to speak in front of others.",
    "options": [
      "draw inspiration from",
      "push the boundaries",
      "express oneself",
      "take centre stage"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The little girl only had one line in the play, but she _____ when she started to dance.",
    "options": [
      "take centre stage",
      "express oneself",
      "get the creative juices flowing",
      "steal the show"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Local artists will _____ at this year's festival, while international stars will perform only on the last night.",
    "options": [
      "push the boundaries",
      "take centre stage",
      "draw inspiration from",
      "to life"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The last art teacher was very popular, so she will be _____ for the new teacher.",
    "options": [
      "audio guide",
      "conceptual art",
      "still life",
      "a hard act to follow"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The talented actors brought the old story _____, and even students who hated history enjoyed the play.",
    "options": [
      "to life",
      "take centre stage",
      "push the boundaries",
      "steal the show"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Opera is _____, but I still went with my grandmother because she really wanted company.",
    "options": [
      "potter's wheel",
      "a picture is worth a thousand words",
      "not one's cup of tea",
      "the bigger picture"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The song about leaving home _____ with many young workers, because they also live far from their families.",
    "options": [
      "take centre stage",
      "make one's mark",
      "push the boundaries",
      "strike a chord"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Many people work _____ at a concert, and without them the singers could not perform.",
    "options": [
      "graphic designer",
      "behind the scenes",
      "eureka moment",
      "folk art"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Each handmade lamp is _____, so you will never see the same one in another person's house.",
    "options": [
      "one of a kind",
      "price tag",
      "primary colour",
      "divergent thinking"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The young director quickly _____ in the film industry, and her first movie won three awards.",
    "options": [
      "take centre stage",
      "push the boundaries",
      "make one's mark",
      "to life"
    ],
    "answer": 2,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "art for art's sake": {
    "pos": "n.phr.",
    "en_def": "art made only for beauty, not for any other purpose",
    "cn_def": "為藝術而藝術"
  },
  "a picture is worth a thousand words": {
    "pos": "n.phr.",
    "en_def": "an image can explain more than a long description",
    "cn_def": "一圖勝千言"
  },
  "beauty is in the eye of the beholder": {
    "pos": "n.phr.",
    "en_def": "different people have different ideas of what is beautiful",
    "cn_def": "情人眼裡出西施;美因人而異"
  },
  "the bigger picture": {
    "pos": "n.phr.",
    "en_def": "the whole situation, not just small details",
    "cn_def": "大局;全貌"
  },
  "paint a picture of": {
    "pos": "v.phr.",
    "en_def": "to describe something in a particular way",
    "cn_def": "描繪出…的樣貌"
  },
  "draw inspiration from": {
    "pos": "v.phr.",
    "en_def": "to get ideas for your work from something",
    "cn_def": "從…汲取靈感"
  },
  "a work of art": {
    "pos": "n.phr.",
    "en_def": "a painting, sculpture or other piece of art; something very beautiful",
    "cn_def": "藝術品"
  },
  "a labour of love": {
    "pos": "n.phr.",
    "en_def": "hard work done because you love it, not for money",
    "cn_def": "出於熱愛而做的辛苦工作"
  },
  "get the creative juices flowing": {
    "pos": "v.phr.",
    "en_def": "to help yourself start having ideas",
    "cn_def": "激發創意"
  },
  "push the boundaries": {
    "pos": "v.phr.",
    "en_def": "to try to do more than what is usual or accepted",
    "cn_def": "突破界限"
  },
  "express oneself": {
    "pos": "v.phr.",
    "en_def": "to show your feelings and ideas",
    "cn_def": "表達自己"
  },
  "steal the show": {
    "pos": "v.phr.",
    "en_def": "to attract the most attention in a performance",
    "cn_def": "搶盡風頭"
  },
  "take centre stage": {
    "pos": "v.phr.",
    "en_def": "to become the most important or noticed thing",
    "cn_def": "成為焦點"
  },
  "a hard act to follow": {
    "pos": "n.phr.",
    "en_def": "someone so good that the next person will seem worse",
    "cn_def": "難以超越的榜樣"
  },
  "bring something to life": {
    "pos": "v.phr.",
    "en_def": "to make something seem real and exciting",
    "cn_def": "使…栩栩如生"
  },
  "to life": {
    "pos": "v.phr.",
    "en_def": "to make something seem real and exciting",
    "cn_def": "使…栩栩如生"
  },
  "not one's cup of tea": {
    "pos": "adj.phr.",
    "en_def": "not something a person likes",
    "cn_def": "不是某人的菜"
  },
  "strike a chord": {
    "pos": "v.phr.",
    "en_def": "to make people feel sympathy or connection",
    "cn_def": "引起共鳴"
  },
  "behind the scenes": {
    "pos": "phr.",
    "en_def": "secretly or in a way the public does not see",
    "cn_def": "在幕後"
  },
  "one of a kind": {
    "pos": "adj.phr.",
    "en_def": "completely unique",
    "cn_def": "獨一無二的"
  },
  "make one's mark": {
    "pos": "v.phr.",
    "en_def": "to become successful and noticed",
    "cn_def": "嶄露頭角;留下印記"
  },
  "pop art": {
    "pos": "n.phr.",
    "en_def": "art that uses images from advertising and popular culture",
    "cn_def": "普普藝術"
  },
  "still life": {
    "pos": "n.phr.",
    "en_def": "a picture of objects such as fruit, flowers or bottles",
    "cn_def": "靜物畫"
  },
  "digital art": {
    "pos": "n.phr.",
    "en_def": "art made with computers or tablets",
    "cn_def": "數位藝術"
  },
  "price tag": {
    "pos": "n.phr.",
    "en_def": "the cost of something",
    "cn_def": "價格;標價"
  },
  "conceptual art": {
    "pos": "n.phr.",
    "en_def": "art in which the idea matters more than the object",
    "cn_def": "觀念藝術"
  },
  "art critic": {
    "pos": "n.phr.",
    "en_def": "a person who writes opinions about art",
    "cn_def": "藝評家"
  },
  "art market": {
    "pos": "n.phr.",
    "en_def": "the buying and selling of art",
    "cn_def": "藝術市場"
  },
  "visual effects": {
    "pos": "n.phr.",
    "en_def": "images added to films by computer",
    "cn_def": "視覺特效"
  },
  "lateral thinking": {
    "pos": "n.phr.",
    "en_def": "solving problems in unusual and creative ways",
    "cn_def": "水平思考"
  },
  "contemporary art": {
    "pos": "n.phr.",
    "en_def": "art made in recent times",
    "cn_def": "當代藝術"
  },
  "art movement": {
    "pos": "n.phr.",
    "en_def": "a group of artists who share ideas and a style for a period",
    "cn_def": "藝術運動;流派"
  },
  "creative process": {
    "pos": "n.phr.",
    "en_def": "the steps people follow to make something new",
    "cn_def": "創作過程"
  },
  "art dealer": {
    "pos": "n.phr.",
    "en_def": "a person who buys and sells works of art",
    "cn_def": "藝術經紀商;畫商"
  },
  "potter's wheel": {
    "pos": "n.phr.",
    "en_def": "a turning round plate used to shape clay",
    "cn_def": "拉坯轉盤"
  },
  "art fair": {
    "pos": "n.phr.",
    "en_def": "a large event where galleries show and sell art",
    "cn_def": "藝術博覽會"
  },
  "audio guide": {
    "pos": "n.phr.",
    "en_def": "a recorded talk you listen to as you walk round a museum",
    "cn_def": "語音導覽"
  },
  "graphic designer": {
    "pos": "n.phr.",
    "en_def": "a person who designs posters, books or websites",
    "cn_def": "平面設計師"
  },
  "eureka moment": {
    "pos": "n.phr.",
    "en_def": "a sudden moment when you find a great idea",
    "cn_def": "靈光乍現的時刻"
  },
  "folk art": {
    "pos": "n.phr.",
    "en_def": "traditional art made by ordinary people in a region",
    "cn_def": "民俗藝術"
  },
  "primary colour": {
    "pos": "n.phr.",
    "en_def": "red, yellow or blue, which mix to make other colours",
    "cn_def": "原色"
  },
  "divergent thinking": {
    "pos": "n.phr.",
    "en_def": "thinking of many different answers to one problem",
    "cn_def": "擴散性思考"
  }
};

const EXTRA_GLOSSES = {};
