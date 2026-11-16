// Topic 9 Subunit 16 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T09 S16 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "full steam ahead",
    "pos": "phr.",
    "cn_def": "全速前進",
    "en_def": "moving forward with full energy and speed",
    "sentence": "Once the bank gave us the loan, it was {{BLANK}} with the project, and we finished it in six months.",
    "cn": "銀行一借給我們貸款,這個計畫就全速前進,而我們在六個月內就完成了。"
  },
  {
    "word": "run out of steam",
    "pos": "v.phr.",
    "cn_def": "失去動力;精疲力盡",
    "en_def": "to lose energy or enthusiasm",
    "sentence": "I started my essay with lots of ideas, but I {{BLANK}} after the first page and had to take a break.",
    "cn": "我一開始寫文章時有很多點子,但寫完第一頁後我就失去動力,只好休息一下。"
  },
  {
    "word": "pick up steam",
    "pos": "v.phr.",
    "cn_def": "逐漸加速;勢頭增強",
    "en_def": "to become stronger, faster or more popular",
    "sentence": "The campaign for shorter working hours began slowly, but it {{BLANK}} when newspapers reported on child workers.",
    "cn": "爭取縮短工時的運動起初進展緩慢,但在報紙報導童工之後就聲勢漸增。"
  },
  {
    "word": "reinvent the wheel",
    "pos": "v.phr.",
    "cn_def": "重複發明輪子;做白工",
    "en_def": "to waste time making something that already exists",
    "sentence": "We do not need to {{BLANK}}, because there is already a good app for planning group projects.",
    "cn": "我們不需要重複發明輪子,因為已經有一個很好的應用程式可以規劃小組作業。"
  },
  {
    "word": "necessity is the mother of invention",
    "pos": "phr.",
    "cn_def": "需要為發明之母",
    "en_def": "people invent things when they really need them",
    "sentence": "The campers had no pot, so they cooked rice in a bamboo tube, which shows that {{BLANK}}.",
    "cn": "露營的人沒有鍋子,所以他們用竹筒煮飯,這說明了需要為發明之母。"
  },
  {
    "word": "back to the drawing board",
    "pos": "phr.",
    "cn_def": "從頭再來;重新規劃",
    "en_def": "time to start planning again after a failure",
    "sentence": "Our paper bridge collapsed under the first book, so it was {{BLANK}} for our team.",
    "cn": "我們的紙橋在放上第一本書時就垮了,所以我們這組只好從頭再來。"
  },
  {
    "word": "ahead of one's time",
    "pos": "adj.phr.",
    "cn_def": "超越時代的",
    "en_def": "having ideas too new for the people of that time",
    "sentence": "Da Vinci was {{BLANK}}, because he drew helicopters and tanks hundreds of years before they were built.",
    "cn": "達文西是超越他那個時代的人,因為他在直升機和坦克被造出來的數百年前就畫出了它們。"
  },
  {
    "word": "turning point",
    "pos": "n.phr.",
    "cn_def": "轉捩點",
    "en_def": "a moment when a big change happens",
    "sentence": "Winning the science fair was a {{BLANK}} in her life, and she decided to become an engineer.",
    "cn": "贏得科展是她人生的轉捩點,而她決定要成為一名工程師。"
  },
  {
    "word": "the daily grind",
    "pos": "n.phr.",
    "cn_def": "日復一日的苦差事",
    "en_def": "boring and tiring work that you do every day",
    "sentence": "Factory workers faced {{BLANK}} of twelve-hour shifts, and they rarely had time to rest.",
    "cn": "工廠工人面對著每天十二小時輪班的日常苦差事,而他們很少有時間休息。"
  },
  {
    "word": "come up with",
    "pos": "v.phr.",
    "cn_def": "想出",
    "en_def": "to think of an idea or plan",
    "sentence": "Our team had to {{BLANK}} a way to clean the beach, and we designed a simple floating net.",
    "cn": "我們這組必須想出一個清理海灘的方法,而我們設計了一個簡單的浮動網子。"
  },
  {
    "word": "put into practice",
    "pos": "v.phr.",
    "cn_def": "付諸實行",
    "en_def": "to start using an idea or plan in real life",
    "sentence": "The school {{BLANK}} the new recycling plan last month, and the amount of rubbish has already dropped.",
    "cn": "學校上個月把新的回收計畫付諸實行,而垃圾量已經減少了。"
  },
  {
    "word": "in the pipeline",
    "pos": "adj.phr.",
    "cn_def": "籌備中;即將推出",
    "en_def": "being planned or developed and coming soon",
    "sentence": "A new train line to the airport is {{BLANK}}, but it will not open until 2030.",
    "cn": "一條通往機場的新鐵路線正在籌備中,但它要到2030年才會通車。"
  },
  {
    "word": "on the right track",
    "pos": "adj.phr.",
    "cn_def": "方向正確",
    "en_def": "doing something in a way that will lead to success",
    "sentence": "My teacher said my project was {{BLANK}}, so I just need to add more data.",
    "cn": "老師說我的專題方向正確,所以我只需要再加入更多數據。"
  },
  {
    "word": "go off the rails",
    "pos": "v.phr.",
    "cn_def": "出軌;失控",
    "en_def": "to start behaving badly or failing",
    "sentence": "The project began to {{BLANK}} when the leader left, and nobody knew what to do next.",
    "cn": "領導者離開後這個計畫開始失控,而沒有人知道接下來該做什麼。"
  },
  {
    "word": "run like clockwork",
    "pos": "v.phr.",
    "cn_def": "運作順暢;井然有序",
    "en_def": "to happen exactly as planned without problems",
    "sentence": "The school sports day {{BLANK}}, because the teachers had planned every detail weeks before.",
    "cn": "學校運動會進行得井然有序,因為老師們好幾週前就規劃好了每個細節。"
  },
  {
    "word": "the best thing since sliced bread",
    "pos": "n.phr.",
    "cn_def": "最棒的新發明",
    "en_def": "an excellent new invention or idea (humorous)",
    "sentence": "My grandma thinks video calls are {{BLANK}}, because she can see her grandchildren every day.",
    "cn": "我奶奶覺得視訊通話是有史以來最棒的發明,因為她每天都能看到孫子們。"
  },
  {
    "word": "the brainchild of",
    "pos": "n.phr.",
    "cn_def": "……的心血結晶",
    "en_def": "an idea or invention created by a particular person",
    "sentence": "The underground railway was {{BLANK}} a lawyer named Charles Pearson, but he died before it opened.",
    "cn": "地下鐵路是一位名叫查爾斯·皮爾森的律師的心血結晶,但他在通車前就去世了。"
  },
  {
    "word": "make ends meet",
    "pos": "v.phr.",
    "cn_def": "勉強維持生計",
    "en_def": "to have just enough money to live",
    "sentence": "Many families could not {{BLANK}} on one wage, so the children also had to work in the mills.",
    "cn": "許多家庭靠一份工資無法維持生計,所以孩子們也必須到工廠工作。"
  },
  {
    "word": "think outside the box",
    "pos": "v.phr.",
    "cn_def": "跳脫框架思考",
    "en_def": "to think in a new and creative way",
    "sentence": "To solve the problem, we had to {{BLANK}}, so we used old bottles to build a greenhouse.",
    "cn": "為了解決問題,我們必須跳脫框架思考,所以我們用舊瓶子蓋了一座溫室。"
  },
  {
    "word": "set the wheels in motion",
    "pos": "v.phr.",
    "cn_def": "啟動;開始進行",
    "en_def": "to start a process",
    "sentence": "The mayor {{BLANK}} for a new bike lane, and work will start next spring.",
    "cn": "市長啟動了新自行車道的計畫,而工程將在明年春天開始。"
  }
];

const MCQS = [
  {
    "q": "Once the bank gave us the loan, it was _____ with the project, and we finished it in six months.",
    "options": [
      "reinvent the wheel",
      "go off the rails",
      "full steam ahead",
      "engine driver"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "I started my essay with lots of ideas, but I _____ after the first page and had to take a break.",
    "options": [
      "reinvent the wheel",
      "run out of steam",
      "pick up steam",
      "make ends meet"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The campaign for shorter working hours began slowly, but it _____ when newspapers reported on child workers.",
    "options": [
      "pick up steam",
      "set the wheels in motion",
      "go off the rails",
      "make ends meet"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "We do not need to _____, because there is already a good app for planning group projects.",
    "options": [
      "go off the rails",
      "set the wheels in motion",
      "make ends meet",
      "reinvent the wheel"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The campers had no pot, so they cooked rice in a bamboo tube, which shows that _____.",
    "options": [
      "standard of living",
      "necessity is the mother of invention",
      "raw material",
      "consumer goods"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Our paper bridge collapsed under the first book, so it was _____ for our team.",
    "options": [
      "back to the drawing board",
      "blast furnace",
      "spinning jenny",
      "safety lamp"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Da Vinci was _____, because he drew helicopters and tanks hundreds of years before they were built.",
    "options": [
      "Morse code",
      "reinvent the wheel",
      "mine shaft",
      "ahead of one's time"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Winning the science fair was a _____ in her life, and she decided to become an engineer.",
    "options": [
      "finished goods",
      "coal mine",
      "turning point",
      "water wheel"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Factory workers faced _____ of twelve-hour shifts, and they rarely had time to rest.",
    "options": [
      "blast furnace",
      "Bessemer process",
      "working conditions",
      "the daily grind"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Our team had to _____ a way to clean the beach, and we designed a simple floating net.",
    "options": [
      "pick up steam",
      "run like clockwork",
      "come up with",
      "run out of steam"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The school _____ the new recycling plan last month, and the amount of rubbish has already dropped.",
    "options": [
      "put into practice",
      "think outside the box",
      "come up with",
      "run like clockwork"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "A new train line to the airport is _____, but it will not open until 2030.",
    "options": [
      "the brainchild of",
      "in the pipeline",
      "set the wheels in motion",
      "iron ore"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "My teacher said my project was _____, so I just need to add more data.",
    "options": [
      "ahead of one's time",
      "factory worker",
      "population growth",
      "on the right track"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The project began to _____ when the leader left, and nobody knew what to do next.",
    "options": [
      "go off the rails",
      "reinvent the wheel",
      "run like clockwork",
      "put into practice"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The school sports day _____, because the teachers had planned every detail weeks before.",
    "options": [
      "set the wheels in motion",
      "run like clockwork",
      "think outside the box",
      "make ends meet"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "My grandma thinks video calls are _____, because she can see her grandchildren every day.",
    "options": [
      "cottage industry",
      "steam train",
      "the best thing since sliced bread",
      "safety lamp"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The underground railway was _____ a lawyer named Charles Pearson, but he died before it opened.",
    "options": [
      "power station",
      "coal mine",
      "water wheel",
      "the brainchild of"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Many families could not _____ on one wage, so the children also had to work in the mills.",
    "options": [
      "make ends meet",
      "run like clockwork",
      "reinvent the wheel",
      "run out of steam"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "To solve the problem, we had to _____, so we used old bottles to build a greenhouse.",
    "options": [
      "run out of steam",
      "pick up steam",
      "think outside the box",
      "come up with"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The mayor _____ for a new bike lane, and work will start next spring.",
    "options": [
      "think outside the box",
      "set the wheels in motion",
      "put into practice",
      "make ends meet"
    ],
    "answer": 1,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "full steam ahead": {
    "pos": "phr.",
    "en_def": "moving forward with full energy and speed",
    "cn_def": "全速前進"
  },
  "run out of steam": {
    "pos": "v.phr.",
    "en_def": "to lose energy or enthusiasm",
    "cn_def": "失去動力;精疲力盡"
  },
  "pick up steam": {
    "pos": "v.phr.",
    "en_def": "to become stronger, faster or more popular",
    "cn_def": "逐漸加速;勢頭增強"
  },
  "reinvent the wheel": {
    "pos": "v.phr.",
    "en_def": "to waste time making something that already exists",
    "cn_def": "重複發明輪子;做白工"
  },
  "necessity is the mother of invention": {
    "pos": "phr.",
    "en_def": "people invent things when they really need them",
    "cn_def": "需要為發明之母"
  },
  "back to the drawing board": {
    "pos": "phr.",
    "en_def": "time to start planning again after a failure",
    "cn_def": "從頭再來;重新規劃"
  },
  "ahead of one's time": {
    "pos": "adj.phr.",
    "en_def": "having ideas too new for the people of that time",
    "cn_def": "超越時代的"
  },
  "turning point": {
    "pos": "n.phr.",
    "en_def": "a moment when a big change happens",
    "cn_def": "轉捩點"
  },
  "the daily grind": {
    "pos": "n.phr.",
    "en_def": "boring and tiring work that you do every day",
    "cn_def": "日復一日的苦差事"
  },
  "come up with": {
    "pos": "v.phr.",
    "en_def": "to think of an idea or plan",
    "cn_def": "想出"
  },
  "put into practice": {
    "pos": "v.phr.",
    "en_def": "to start using an idea or plan in real life",
    "cn_def": "付諸實行"
  },
  "in the pipeline": {
    "pos": "adj.phr.",
    "en_def": "being planned or developed and coming soon",
    "cn_def": "籌備中;即將推出"
  },
  "on the right track": {
    "pos": "adj.phr.",
    "en_def": "doing something in a way that will lead to success",
    "cn_def": "方向正確"
  },
  "go off the rails": {
    "pos": "v.phr.",
    "en_def": "to start behaving badly or failing",
    "cn_def": "出軌;失控"
  },
  "run like clockwork": {
    "pos": "v.phr.",
    "en_def": "to happen exactly as planned without problems",
    "cn_def": "運作順暢;井然有序"
  },
  "the best thing since sliced bread": {
    "pos": "n.phr.",
    "en_def": "an excellent new invention or idea (humorous)",
    "cn_def": "最棒的新發明"
  },
  "the brainchild of": {
    "pos": "n.phr.",
    "en_def": "an idea or invention created by a particular person",
    "cn_def": "……的心血結晶"
  },
  "make ends meet": {
    "pos": "v.phr.",
    "en_def": "to have just enough money to live",
    "cn_def": "勉強維持生計"
  },
  "think outside the box": {
    "pos": "v.phr.",
    "en_def": "to think in a new and creative way",
    "cn_def": "跳脫框架思考"
  },
  "set the wheels in motion": {
    "pos": "v.phr.",
    "en_def": "to start a process",
    "cn_def": "啟動;開始進行"
  },
  "engine driver": {
    "pos": "n.",
    "en_def": "a person who drives a train",
    "cn_def": "火車司機"
  },
  "standard of living": {
    "pos": "n.phr.",
    "en_def": "how comfortable and wealthy people's lives are",
    "cn_def": "生活水準"
  },
  "raw material": {
    "pos": "n.",
    "en_def": "a natural substance used to make products",
    "cn_def": "原料"
  },
  "consumer goods": {
    "pos": "n.",
    "en_def": "products that people buy for their own use",
    "cn_def": "消費品"
  },
  "blast furnace": {
    "pos": "n.",
    "en_def": "a huge furnace where hot air helps melt iron from rock",
    "cn_def": "高爐;鼓風爐"
  },
  "spinning jenny": {
    "pos": "n.",
    "en_def": "an early machine that spun many threads at once",
    "cn_def": "珍妮紡紗機"
  },
  "safety lamp": {
    "pos": "n.",
    "en_def": "a special lamp that will not light gas in a mine",
    "cn_def": "安全燈"
  },
  "morse code": {
    "pos": "n.",
    "en_def": "a code of short and long signals for letters",
    "cn_def": "摩斯密碼"
  },
  "mine shaft": {
    "pos": "n.",
    "en_def": "a deep hole going down into a mine",
    "cn_def": "礦井"
  },
  "finished goods": {
    "pos": "n.",
    "en_def": "products that are ready to be sold",
    "cn_def": "成品"
  },
  "coal mine": {
    "pos": "n.",
    "en_def": "a place underground where coal is dug out",
    "cn_def": "煤礦"
  },
  "water wheel": {
    "pos": "n.",
    "en_def": "a large wheel turned by flowing water to power machines",
    "cn_def": "水車"
  },
  "bessemer process": {
    "pos": "n.phr.",
    "en_def": "a cheap way to make steel by blowing air through iron",
    "cn_def": "貝塞麥煉鋼法"
  },
  "working conditions": {
    "pos": "n.",
    "en_def": "the hours, safety and environment of a job",
    "cn_def": "工作環境;勞動條件"
  },
  "iron ore": {
    "pos": "n.",
    "en_def": "rock that contains iron",
    "cn_def": "鐵礦石"
  },
  "factory worker": {
    "pos": "n.",
    "en_def": "a person who works in a factory",
    "cn_def": "工廠工人"
  },
  "population growth": {
    "pos": "n.",
    "en_def": "an increase in the number of people",
    "cn_def": "人口成長"
  },
  "cottage industry": {
    "pos": "n.phr.",
    "en_def": "work done by people in their own homes",
    "cn_def": "家庭手工業"
  },
  "steam train": {
    "pos": "n.",
    "en_def": "a train pulled by an engine that uses steam",
    "cn_def": "蒸汽火車"
  },
  "power station": {
    "pos": "n.",
    "en_def": "a place where electricity is produced",
    "cn_def": "發電廠"
  }
};

const EXTRA_GLOSSES = {};
