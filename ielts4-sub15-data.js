// Topic 4 Subunit 15 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T04 S15 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "marine protected area",
    "pos": "n.phr.",
    "cn_def": "海洋保護區",
    "en_def": "a part of the sea where human activities are limited to protect nature",
    "sentence": "Fishing is strictly limited inside the {{BLANK}}, so the number of large fish there has doubled in ten years.",
    "cn": "海洋保護區內的捕魚受到嚴格限制,所以那裡的大型魚數量在十年內增加了一倍。"
  },
  {
    "word": "sustainable fishing",
    "pos": "n.phr.",
    "cn_def": "永續漁業",
    "en_def": "catching fish in a way that leaves enough to breed",
    "sentence": "{{BLANK}} means leaving enough fish in the sea to breed, so future generations can still enjoy seafood.",
    "cn": "永續漁業意味著在海中留下足夠的魚來繁殖,這樣後代子孫仍能享用海鮮。"
  },
  {
    "word": "plastic pollution",
    "pos": "n.phr.",
    "cn_def": "塑膠污染",
    "en_def": "harm to nature caused by plastic waste",
    "sentence": "{{BLANK}} is now found even in the deepest trench, so scientists say no part of the ocean is truly untouched.",
    "cn": "現在即使在最深的海溝也發現了塑膠污染,所以科學家說海洋沒有任何地方是真正未受影響的。"
  },
  {
    "word": "food web",
    "pos": "n.phr.",
    "cn_def": "食物網",
    "en_def": "the network of who eats whom in an ecosystem",
    "sentence": "If sharks disappear, the whole {{BLANK}} changes, because the animals they used to eat grow out of control.",
    "cn": "如果鯊魚消失,整個食物網都會改變,因為牠們原本捕食的動物會失控地增加。"
  },
  {
    "word": "wash up",
    "pos": "v.phr.",
    "cn_def": "被沖上岸",
    "en_def": "to be carried onto the shore by the sea",
    "sentence": "Every morning, plastic bottles {{BLANK}} on the beach, and volunteers collect them before the tourists arrive.",
    "cn": "每天早上都有塑膠瓶被沖上海灘,志工們會在遊客到達前把它們撿起來。"
  },
  {
    "word": "in deep water",
    "pos": "adj.phr.",
    "cn_def": "陷入困境;麻煩大了",
    "en_def": "in serious trouble",
    "sentence": "The fishing company is {{BLANK}} after it was caught catching sharks illegally, and it may have to close.",
    "cn": "這家漁業公司被抓到非法捕撈鯊魚後陷入大麻煩,而且可能必須關門。"
  },
  {
    "word": "out of one's depth",
    "pos": "adj.phr.",
    "cn_def": "力不從心;超出能力範圍",
    "en_def": "in a situation that is too difficult for your skills",
    "sentence": "I felt completely {{BLANK}} during the advanced diving course, so I asked the instructor for extra practice.",
    "cn": "在進階潛水課程中我覺得完全力不從心,所以我請教練讓我多練習。"
  },
  {
    "word": "make waves",
    "pos": "v.phr.",
    "cn_def": "引起轟動;興風作浪",
    "en_def": "to cause trouble or attract attention by doing something new",
    "sentence": "The young activist began to {{BLANK}} when her video about ocean plastic went viral, and politicians started to listen.",
    "cn": "當這位年輕行動者關於海洋塑膠的影片爆紅時,她開始引起轟動,而政治人物也開始傾聽。"
  },
  {
    "word": "test the waters",
    "pos": "v.phr.",
    "cn_def": "試水溫;先試探",
    "en_def": "to try something carefully to see how people react",
    "sentence": "The company decided to {{BLANK}} by selling paper straws in one city, and then it planned to expand.",
    "cn": "這家公司決定先在一個城市販售紙吸管來試水溫,然後計畫再擴大。"
  },
  {
    "word": "rock the boat",
    "pos": "v.phr.",
    "cn_def": "搗亂;破壞現狀",
    "en_def": "to cause problems by challenging the way things are",
    "sentence": "Some fishermen did not want to {{BLANK}} by reporting illegal boats, but one brave captain finally spoke up.",
    "cn": "有些漁民不想透過舉報非法船隻來惹麻煩,但一位勇敢的船長終於站了出來。"
  },
  {
    "word": "miss the boat",
    "pos": "v.phr.",
    "cn_def": "錯失良機",
    "en_def": "to lose a chance by being too slow",
    "sentence": "Countries that do not invest in clean ocean energy now may {{BLANK}}, while others lead the new industry.",
    "cn": "現在不投資乾淨海洋能源的國家可能會錯失良機,而其他國家則領導這個新產業。"
  },
  {
    "word": "in the same boat",
    "pos": "adj.phr.",
    "cn_def": "處境相同;同舟共濟",
    "en_def": "in the same difficult situation as others",
    "sentence": "All the fishermen in the village are {{BLANK}}, because the typhoon damaged every boat in the harbour.",
    "cn": "村裡所有的漁民都處境相同,因為颱風損壞了港內的每一艘船。"
  },
  {
    "word": "sink or swim",
    "pos": "phr.",
    "cn_def": "自生自滅;成敗靠自己",
    "en_def": "to succeed or fail without help from others",
    "sentence": "New guides at the diving centre are not left to {{BLANK}}, because experienced divers train them for a month.",
    "cn": "潛水中心的新導遊不會被放著自生自滅,因為有經驗的潛水員會訓練他們一個月。"
  },
  {
    "word": "a fish out of water",
    "pos": "n.phr.",
    "cn_def": "如魚離水;不自在的人",
    "en_def": "a person who feels uncomfortable in an unfamiliar situation",
    "sentence": "I felt like {{BLANK}} at my first diving club meeting, but the other members were very friendly.",
    "cn": "我在第一次參加潛水社聚會時覺得渾身不自在,但其他社員都非常友善。"
  },
  {
    "word": "plenty more fish in the sea",
    "pos": "phr.",
    "cn_def": "天涯何處無芳草;機會多的是",
    "en_def": "there are many other people or chances available",
    "sentence": "My friend was sad after her break-up, so I told her there were {{BLANK}}.",
    "cn": "我朋友分手後很難過,所以我告訴她天涯何處無芳草。"
  },
  {
    "word": "make a splash",
    "pos": "v.phr.",
    "cn_def": "引起轟動",
    "en_def": "to attract a lot of attention",
    "sentence": "The student's invention for catching microplastics {{BLANK}} at the science fair, and a company offered to help develop it.",
    "cn": "那位學生捕捉塑膠微粒的發明在科展上引起轟動,而一家公司提議協助開發它。"
  },
  {
    "word": "all at sea",
    "pos": "adj.phr.",
    "cn_def": "茫然不知所措",
    "en_def": "confused and not knowing what to do",
    "sentence": "I was {{BLANK}} during my first ocean science lecture, but the professor's simple examples helped me understand.",
    "cn": "我在第一堂海洋科學課上感到茫然不知所措,但教授簡單的例子幫助我理解了。"
  },
  {
    "word": "high and dry",
    "pos": "adj.phr.",
    "cn_def": "孤立無援;陷入困境",
    "en_def": "left in a difficult situation without help",
    "sentence": "When the factory closed, hundreds of workers were left {{BLANK}}, and many moved away from the fishing town.",
    "cn": "工廠關閉時,數百名工人被棄之不顧,而許多人搬離了這個漁港小鎮。"
  },
  {
    "word": "learn the ropes",
    "pos": "v.phr.",
    "cn_def": "學會訣竅;熟悉門道",
    "en_def": "to learn how to do a job or activity",
    "sentence": "It took me a whole summer to {{BLANK}} on my uncle's fishing boat, but now I can help him with almost everything.",
    "cn": "我花了一整個夏天才在叔叔的漁船上熟悉門道,但現在幾乎所有事我都能幫他。"
  },
  {
    "word": "a sea change",
    "pos": "n.phr.",
    "cn_def": "徹底的轉變",
    "en_def": "a complete and important change",
    "sentence": "There has been {{BLANK}} in how people see sharks, and many now want to protect them instead of fearing them.",
    "cn": "人們看待鯊魚的方式已經有了徹底的轉變,而許多人現在想保護牠們而不是害怕牠們。"
  }
];

const MCQS = [
  {
    "q": "Fishing is strictly limited inside the _____, so the number of large fish there has doubled in ten years.",
    "options": [
      "tide pool",
      "ballast water",
      "marine protected area",
      "hydrothermal vent"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "_____ means leaving enough fish in the sea to breed, so future generations can still enjoy seafood.",
    "options": [
      "sustainable fishing",
      "marine biologist",
      "dead zone",
      "twilight zone"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "_____ is now found even in the deepest trench, so scientists say no part of the ocean is truly untouched.",
    "options": [
      "ballast water",
      "plastic pollution",
      "fish stock",
      "water pressure"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "If sharks disappear, the whole _____ changes, because the animals they used to eat grow out of control.",
    "options": [
      "water pressure",
      "salt marsh",
      "sea cucumber",
      "food web"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Every morning, plastic bottles _____ on the beach, and volunteers collect them before the tourists arrive.",
    "options": [
      "test the waters",
      "make waves",
      "wash up",
      "make a splash"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The fishing company is _____ after it was caught catching sharks illegally, and it may have to close.",
    "options": [
      "out of one's depth",
      "high and dry",
      "all at sea",
      "in deep water"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "I felt completely _____ during the advanced diving course, so I asked the instructor for extra practice.",
    "options": [
      "out of one's depth",
      "in deep water",
      "high and dry",
      "in the same boat"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The young activist began to _____ when her video about ocean plastic went viral, and politicians started to listen.",
    "options": [
      "test the waters",
      "make waves",
      "rock the boat",
      "learn the ropes"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The company decided to _____ by selling paper straws in one city, and then it planned to expand.",
    "options": [
      "wash up",
      "learn the ropes",
      "test the waters",
      "rock the boat"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Some fishermen did not want to _____ by reporting illegal boats, but one brave captain finally spoke up.",
    "options": [
      "rock the boat",
      "test the waters",
      "wash up",
      "make a splash"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Countries that do not invest in clean ocean energy now may _____, while others lead the new industry.",
    "options": [
      "make waves",
      "wash up",
      "make a splash",
      "miss the boat"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "All the fishermen in the village are _____, because the typhoon damaged every boat in the harbour.",
    "options": [
      "out of one's depth",
      "in the same boat",
      "high and dry",
      "in deep water"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "New guides at the diving centre are not left to _____, because experienced divers train them for a month.",
    "options": [
      "filter feeder",
      "algal bloom",
      "sink or swim",
      "out of one's depth"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "I felt like _____ at my first diving club meeting, but the other members were very friendly.",
    "options": [
      "ghost net",
      "a fish out of water",
      "marine biologist",
      "algal bloom"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "My friend was sad after her break-up, so I told her there were _____.",
    "options": [
      "no-take zone",
      "all at sea",
      "make a splash",
      "plenty more fish in the sea"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The student's invention for catching microplastics _____ at the science fair, and a company offered to help develop it.",
    "options": [
      "make a splash",
      "test the waters",
      "make waves",
      "miss the boat"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "I was _____ during my first ocean science lecture, but the professor's simple examples helped me understand.",
    "options": [
      "out of one's depth",
      "in deep water",
      "high and dry",
      "all at sea"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "When the factory closed, hundreds of workers were left _____, and many moved away from the fishing town.",
    "options": [
      "out of one's depth",
      "in deep water",
      "high and dry",
      "all at sea"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "It took me a whole summer to _____ on my uncle's fishing boat, but now I can help him with almost everything.",
    "options": [
      "test the waters",
      "learn the ropes",
      "make waves",
      "make a splash"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "There has been _____ in how people see sharks, and many now want to protect them instead of fearing them.",
    "options": [
      "a sea change",
      "garbage patch",
      "scuba diving",
      "marine biologist"
    ],
    "answer": 0,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "marine protected area": {
    "pos": "n.phr.",
    "en_def": "a part of the sea where human activities are limited to protect nature",
    "cn_def": "海洋保護區"
  },
  "sustainable fishing": {
    "pos": "n.phr.",
    "en_def": "catching fish in a way that leaves enough to breed",
    "cn_def": "永續漁業"
  },
  "plastic pollution": {
    "pos": "n.phr.",
    "en_def": "harm to nature caused by plastic waste",
    "cn_def": "塑膠污染"
  },
  "food web": {
    "pos": "n.phr.",
    "en_def": "the network of who eats whom in an ecosystem",
    "cn_def": "食物網"
  },
  "wash up": {
    "pos": "v.phr.",
    "en_def": "to be carried onto the shore by the sea",
    "cn_def": "被沖上岸"
  },
  "in deep water": {
    "pos": "adj.phr.",
    "en_def": "in serious trouble",
    "cn_def": "陷入困境;麻煩大了"
  },
  "out of one's depth": {
    "pos": "adj.phr.",
    "en_def": "in a situation that is too difficult for your skills",
    "cn_def": "力不從心;超出能力範圍"
  },
  "make waves": {
    "pos": "v.phr.",
    "en_def": "to cause trouble or attract attention by doing something new",
    "cn_def": "引起轟動;興風作浪"
  },
  "test the waters": {
    "pos": "v.phr.",
    "en_def": "to try something carefully to see how people react",
    "cn_def": "試水溫;先試探"
  },
  "rock the boat": {
    "pos": "v.phr.",
    "en_def": "to cause problems by challenging the way things are",
    "cn_def": "搗亂;破壞現狀"
  },
  "miss the boat": {
    "pos": "v.phr.",
    "en_def": "to lose a chance by being too slow",
    "cn_def": "錯失良機"
  },
  "in the same boat": {
    "pos": "adj.phr.",
    "en_def": "in the same difficult situation as others",
    "cn_def": "處境相同;同舟共濟"
  },
  "sink or swim": {
    "pos": "phr.",
    "en_def": "to succeed or fail without help from others",
    "cn_def": "自生自滅;成敗靠自己"
  },
  "a fish out of water": {
    "pos": "n.phr.",
    "en_def": "a person who feels uncomfortable in an unfamiliar situation",
    "cn_def": "如魚離水;不自在的人"
  },
  "plenty more fish in the sea": {
    "pos": "phr.",
    "en_def": "there are many other people or chances available",
    "cn_def": "天涯何處無芳草;機會多的是"
  },
  "make a splash": {
    "pos": "v.phr.",
    "en_def": "to attract a lot of attention",
    "cn_def": "引起轟動"
  },
  "all at sea": {
    "pos": "adj.phr.",
    "en_def": "confused and not knowing what to do",
    "cn_def": "茫然不知所措"
  },
  "high and dry": {
    "pos": "adj.phr.",
    "en_def": "left in a difficult situation without help",
    "cn_def": "孤立無援;陷入困境"
  },
  "learn the ropes": {
    "pos": "v.phr.",
    "en_def": "to learn how to do a job or activity",
    "cn_def": "學會訣竅;熟悉門道"
  },
  "a sea change": {
    "pos": "n.phr.",
    "en_def": "a complete and important change",
    "cn_def": "徹底的轉變"
  },
  "tide pool": {
    "pos": "n.phr.",
    "en_def": "a small pool of sea water left among rocks at low tide",
    "cn_def": "潮池"
  },
  "ballast water": {
    "pos": "n.phr.",
    "en_def": "sea water carried in a ship to keep it steady",
    "cn_def": "壓艙水"
  },
  "hydrothermal vent": {
    "pos": "n.phr.",
    "en_def": "a crack in the sea floor that lets out very hot water",
    "cn_def": "熱泉噴口"
  },
  "marine biologist": {
    "pos": "n.phr.",
    "en_def": "a scientist who studies living things in the sea",
    "cn_def": "海洋生物學家"
  },
  "dead zone": {
    "pos": "n.phr.",
    "en_def": "an area of sea with too little oxygen for most life",
    "cn_def": "死區;缺氧區"
  },
  "twilight zone": {
    "pos": "n.phr.",
    "en_def": "the dim ocean layer between about 200 and 1,000 metres deep",
    "cn_def": "中層帶;暮光帶"
  },
  "fish stock": {
    "pos": "n.phr.",
    "en_def": "the amount of fish of one kind in an area",
    "cn_def": "魚類資源;魚群存量"
  },
  "water pressure": {
    "pos": "n.phr.",
    "en_def": "the force of water pushing on something",
    "cn_def": "水壓"
  },
  "salt marsh": {
    "pos": "n.phr.",
    "en_def": "wet coastal land covered with grass and flooded by the tide",
    "cn_def": "鹽沼"
  },
  "sea cucumber": {
    "pos": "n.phr.",
    "en_def": "a soft sea animal shaped like a cucumber that lives on the sea floor",
    "cn_def": "海參"
  },
  "filter feeder": {
    "pos": "n.phr.",
    "en_def": "an animal that eats by straining tiny food from water",
    "cn_def": "濾食動物"
  },
  "algal bloom": {
    "pos": "n.phr.",
    "en_def": "a fast increase of algae in water",
    "cn_def": "藻華"
  },
  "ghost net": {
    "pos": "n.phr.",
    "en_def": "a fishing net that has been lost or left in the sea",
    "cn_def": "幽靈漁網"
  },
  "no-take zone": {
    "pos": "n.phr.",
    "en_def": "a sea area where all fishing and collecting are banned",
    "cn_def": "禁漁區"
  },
  "garbage patch": {
    "pos": "n.phr.",
    "en_def": "a large area of the ocean where floating rubbish collects",
    "cn_def": "垃圾帶"
  },
  "scuba diving": {
    "pos": "n.phr.",
    "en_def": "swimming deep underwater with an air tank",
    "cn_def": "水肺潛水"
  }
};

const EXTRA_GLOSSES = {};
