// Topic 8 Subunit 16 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T08 S16 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "date back to",
    "pos": "v.phr.",
    "cn_def": "追溯到;始於",
    "en_def": "to have existed since a particular time in the past",
    "sentence": "The oldest part of the castle seems to {{BLANK}} the twelfth century, but the towers were added much later.",
    "cn": "這座城堡最古老的部分似乎可追溯到十二世紀,但塔樓是很久以後才加上去的。"
  },
  {
    "word": "set in stone",
    "pos": "adj.phr.",
    "cn_def": "一成不變的;不可更改的",
    "en_def": "fixed and impossible to change",
    "sentence": "Our plans for the museum trip are not {{BLANK}}, so we can change the date if it rains.",
    "cn": "我們參觀博物館的計畫並不是一成不變的,所以如果下雨我們可以改日期。"
  },
  {
    "word": "leave no stone unturned",
    "pos": "v.phr.",
    "cn_def": "千方百計;不遺餘力",
    "en_def": "to try every possible way to find something",
    "sentence": "The archaeologists promised to {{BLANK}} in their search for the lost tomb, so they checked every hill in the valley.",
    "cn": "考古學家承諾在尋找失落墳墓時會不遺餘力,所以他們檢查了山谷中的每一座山丘。"
  },
  {
    "word": "a stone's throw",
    "pos": "n.phr.",
    "cn_def": "一箭之遙;很近的距離",
    "en_def": "a very short distance",
    "sentence": "Our hotel was just {{BLANK}} from the ancient amphitheatre, so we walked there every evening.",
    "cn": "我們的飯店離古代圓形劇場只有一箭之遙,所以我們每天晚上都走路過去。"
  },
  {
    "word": "piece together",
    "pos": "v.phr.",
    "cn_def": "拼湊出;理清",
    "en_def": "to understand a situation by putting separate facts together",
    "sentence": "Historians used letters and coins to {{BLANK}} the story of the city, although many records were lost.",
    "cn": "歷史學家利用信件和錢幣拼湊出這座城市的故事,雖然許多紀錄已經遺失。"
  },
  {
    "word": "come to light",
    "pos": "v.phr.",
    "cn_def": "被發現;暴露出來",
    "en_def": "to become known",
    "sentence": "New facts about the ancient king {{BLANK}} last year, when workers found his letters in a library basement.",
    "cn": "關於這位古代國王的新事實在去年被發現,當時工人在圖書館地下室找到了他的信件。"
  },
  {
    "word": "stand the test of time",
    "pos": "v.phr.",
    "cn_def": "經得起時間的考驗",
    "en_def": "to stay strong or popular for a very long time",
    "sentence": "Roman roads have {{BLANK}}, and some of them are still used by cars today.",
    "cn": "羅馬道路經得起時間的考驗,其中一些至今仍有汽車行駛。"
  },
  {
    "word": "lay the foundations for",
    "pos": "v.phr.",
    "cn_def": "為…奠定基礎",
    "en_def": "to create the basic conditions for something to develop",
    "sentence": "Greek thinkers helped {{BLANK}} modern science, because they tried to explain nature through reason.",
    "cn": "希臘思想家幫助為現代科學奠定基礎,因為他們試圖用理性解釋自然。"
  },
  {
    "word": "rise and fall",
    "pos": "n.phr.",
    "cn_def": "興衰;盛衰",
    "en_def": "the growth and later decline of something",
    "sentence": "The book describes the {{BLANK}} of the Roman Empire, and it explains why such a powerful state collapsed.",
    "cn": "這本書描述了羅馬帝國的興衰,並解釋了為什麼這麼強大的國家會崩潰。"
  },
  {
    "word": "the cradle of civilisation",
    "pos": "n.phr.",
    "cn_def": "文明的搖籃",
    "en_def": "the place where an early civilisation first developed",
    "sentence": "Mesopotamia is often called {{BLANK}}, because the first cities and writing appeared there.",
    "cn": "美索不達米亞常被稱為文明的搖籃,因為最早的城市和文字出現在那裡。"
  },
  {
    "word": "go down in history",
    "pos": "v.phr.",
    "cn_def": "載入史冊;名留青史",
    "en_def": "to be remembered for a long time because of something important",
    "sentence": "The discovery of the young king's tomb will {{BLANK}} as one of the greatest finds ever.",
    "cn": "這位年輕國王陵墓的發現將作為有史以來最偉大的發現之一而載入史冊。"
  },
  {
    "word": "pass down",
    "pos": "v.phr.",
    "cn_def": "傳承;流傳下來",
    "en_def": "to give knowledge or objects to younger generations",
    "sentence": "Families used to {{BLANK}} old stories from parents to children, because most people could not read or write.",
    "cn": "家族過去會把古老的故事從父母傳給孩子,因為大多數人不會讀寫。"
  },
  {
    "word": "time will tell",
    "pos": "phr.",
    "cn_def": "時間會證明一切",
    "en_def": "the truth will become clear in the future",
    "sentence": "Nobody knows if the new theory about the pyramids is correct, but {{BLANK}} as more evidence is found.",
    "cn": "沒有人知道關於金字塔的新理論是否正確,但隨著更多證據被發現,時間會證明一切。"
  },
  {
    "word": "turn back the clock",
    "pos": "v.phr.",
    "cn_def": "讓時光倒流;回到過去",
    "en_def": "to return to an earlier time or situation",
    "sentence": "Visiting the old village feels like a way to {{BLANK}}, because people still farm without machines there.",
    "cn": "參觀這個古老村莊感覺像是讓時光倒流,因為那裡的人們仍然不用機器耕種。"
  },
  {
    "word": "Rome wasn't built in a day",
    "pos": "phr.",
    "cn_def": "羅馬不是一天造成的",
    "en_def": "important things take a long time to achieve",
    "sentence": "Learning to read ancient languages is slow, but {{BLANK}}, so keep practising every day.",
    "cn": "學習閱讀古代語言很慢,但羅馬不是一天造成的,所以每天持續練習吧。"
  },
  {
    "word": "all roads lead to Rome",
    "pos": "phr.",
    "cn_def": "條條大路通羅馬",
    "en_def": "there are many ways to reach the same goal",
    "sentence": "You can study history at university or in a museum job, because {{BLANK}} if you are passionate.",
    "cn": "你可以在大學或博物館工作中學習歷史,因為只要你有熱情,條條大路通羅馬。"
  },
  {
    "word": "hidden in plain sight",
    "pos": "adj.phr.",
    "cn_def": "藏在顯眼處;近在眼前卻未被注意",
    "en_def": "easy to see but not noticed",
    "sentence": "The ancient carving was {{BLANK}} on the church wall, but nobody noticed it until a student took a photo.",
    "cn": "那幅古代雕刻就近在眼前地刻在教堂牆上,但直到一名學生拍了照片才有人注意到。"
  },
  {
    "word": "scratch the surface",
    "pos": "v.phr.",
    "cn_def": "只觸及皮毛",
    "en_def": "to deal with only a small part of a subject",
    "sentence": "After ten years of digging, the team has only {{BLANK}} of the huge ancient city, so there is much more to find.",
    "cn": "經過十年的挖掘,團隊對這座巨大的古城只觸及皮毛,所以還有更多東西等待發現。"
  },
  {
    "word": "bury the hatchet",
    "pos": "v.phr.",
    "cn_def": "言歸於好;握手言和",
    "en_def": "to stop arguing and become friends again",
    "sentence": "The two kings finally decided to {{BLANK}}, and they signed a peace treaty after years of war.",
    "cn": "兩位國王終於決定握手言和,他們在多年戰爭之後簽署了和平條約。"
  },
  {
    "word": "lost in the mists of time",
    "pos": "adj.phr.",
    "cn_def": "湮沒在歷史長河中",
    "en_def": "forgotten because it happened very long ago",
    "sentence": "The name of the person who built the stone circle is {{BLANK}}, so we may never know it.",
    "cn": "建造這個石圈的人的名字已經湮沒在歷史長河中,所以我們可能永遠無法知道。"
  }
];

const MCQS = [
  {
    "q": "The oldest part of the castle seems to _____ the twelfth century, but the towers were added much later.",
    "options": [
      "date back to",
      "go down in history",
      "pass down",
      "stand the test of time"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our plans for the museum trip are not _____, so we can change the date if it rains.",
    "options": [
      "rise and fall",
      "set in stone",
      "all roads lead to Rome",
      "leave no stone unturned"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The archaeologists promised to _____ in their search for the lost tomb, so they checked every hill in the valley.",
    "options": [
      "stand the test of time",
      "lay the foundations for",
      "leave no stone unturned",
      "turn back the clock"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Our hotel was just _____ from the ancient amphitheatre, so we walked there every evening.",
    "options": [
      "ground-penetrating radar",
      "Stone Age",
      "grave goods",
      "a stone's throw"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Historians used letters and coins to _____ the story of the city, although many records were lost.",
    "options": [
      "piece together",
      "go down in history",
      "come to light",
      "bury the hatchet"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "New facts about the ancient king _____ last year, when workers found his letters in a library basement.",
    "options": [
      "date back to",
      "come to light",
      "go down in history",
      "turn back the clock"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Roman roads have _____, and some of them are still used by cars today.",
    "options": [
      "come to light",
      "go down in history",
      "stand the test of time",
      "piece together"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Greek thinkers helped _____ modern science, because they tried to explain nature through reason.",
    "options": [
      "piece together",
      "pass down",
      "bury the hatchet",
      "lay the foundations for"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The book describes the _____ of the Roman Empire, and it explains why such a powerful state collapsed.",
    "options": [
      "cave painting",
      "rise and fall",
      "ground-penetrating radar",
      "radiocarbon dating"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Mesopotamia is often called _____, because the first cities and writing appeared there.",
    "options": [
      "ground-penetrating radar",
      "Ice Age",
      "Stone Age",
      "the cradle of civilisation"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The discovery of the young king's tomb will _____ as one of the greatest finds ever.",
    "options": [
      "leave no stone unturned",
      "pass down",
      "go down in history",
      "bury the hatchet"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Families used to _____ old stories from parents to children, because most people could not read or write.",
    "options": [
      "pass down",
      "bury the hatchet",
      "come to light",
      "piece together"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Nobody knows if the new theory about the pyramids is correct, but _____ as more evidence is found.",
    "options": [
      "cave painting",
      "time will tell",
      "a stone's throw",
      "bury the hatchet"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Visiting the old village feels like a way to _____, because people still farm without machines there.",
    "options": [
      "lay the foundations for",
      "bury the hatchet",
      "come to light",
      "turn back the clock"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Learning to read ancient languages is slow, but _____, so keep practising every day.",
    "options": [
      "Rome wasn't built in a day",
      "turn back the clock",
      "the cradle of civilisation",
      "Ice Age"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "You can study history at university or in a museum job, because _____ if you are passionate.",
    "options": [
      "grave goods",
      "go down in history",
      "all roads lead to Rome",
      "Stone Age"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The ancient carving was _____ on the church wall, but nobody noticed it until a student took a photo.",
    "options": [
      "scratch the surface",
      "hidden in plain sight",
      "radiocarbon dating",
      "bury the hatchet"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "After ten years of digging, the team has only _____ of the huge ancient city, so there is much more to find.",
    "options": [
      "scratch the surface",
      "bury the hatchet",
      "piece together",
      "lay the foundations for"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The two kings finally decided to _____, and they signed a peace treaty after years of war.",
    "options": [
      "scratch the surface",
      "turn back the clock",
      "go down in history",
      "bury the hatchet"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The name of the person who built the stone circle is _____, so we may never know it.",
    "options": [
      "the cradle of civilisation",
      "rise and fall",
      "lost in the mists of time",
      "leave no stone unturned"
    ],
    "answer": 2,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "date back to": {
    "pos": "v.phr.",
    "en_def": "to have existed since a particular time in the past",
    "cn_def": "追溯到;始於"
  },
  "set in stone": {
    "pos": "adj.phr.",
    "en_def": "fixed and impossible to change",
    "cn_def": "一成不變的;不可更改的"
  },
  "leave no stone unturned": {
    "pos": "v.phr.",
    "en_def": "to try every possible way to find something",
    "cn_def": "千方百計;不遺餘力"
  },
  "a stone's throw": {
    "pos": "n.phr.",
    "en_def": "a very short distance",
    "cn_def": "一箭之遙;很近的距離"
  },
  "piece together": {
    "pos": "v.phr.",
    "en_def": "to understand a situation by putting separate facts together",
    "cn_def": "拼湊出;理清"
  },
  "come to light": {
    "pos": "v.phr.",
    "en_def": "to become known",
    "cn_def": "被發現;暴露出來"
  },
  "stand the test of time": {
    "pos": "v.phr.",
    "en_def": "to stay strong or popular for a very long time",
    "cn_def": "經得起時間的考驗"
  },
  "lay the foundations for": {
    "pos": "v.phr.",
    "en_def": "to create the basic conditions for something to develop",
    "cn_def": "為…奠定基礎"
  },
  "rise and fall": {
    "pos": "n.phr.",
    "en_def": "the growth and later decline of something",
    "cn_def": "興衰;盛衰"
  },
  "the cradle of civilisation": {
    "pos": "n.phr.",
    "en_def": "the place where an early civilisation first developed",
    "cn_def": "文明的搖籃"
  },
  "go down in history": {
    "pos": "v.phr.",
    "en_def": "to be remembered for a long time because of something important",
    "cn_def": "載入史冊;名留青史"
  },
  "pass down": {
    "pos": "v.phr.",
    "en_def": "to give knowledge or objects to younger generations",
    "cn_def": "傳承;流傳下來"
  },
  "time will tell": {
    "pos": "phr.",
    "en_def": "the truth will become clear in the future",
    "cn_def": "時間會證明一切"
  },
  "turn back the clock": {
    "pos": "v.phr.",
    "en_def": "to return to an earlier time or situation",
    "cn_def": "讓時光倒流;回到過去"
  },
  "rome wasn't built in a day": {
    "pos": "phr.",
    "en_def": "important things take a long time to achieve",
    "cn_def": "羅馬不是一天造成的"
  },
  "all roads lead to rome": {
    "pos": "phr.",
    "en_def": "there are many ways to reach the same goal",
    "cn_def": "條條大路通羅馬"
  },
  "hidden in plain sight": {
    "pos": "adj.phr.",
    "en_def": "easy to see but not noticed",
    "cn_def": "藏在顯眼處;近在眼前卻未被注意"
  },
  "scratch the surface": {
    "pos": "v.phr.",
    "en_def": "to deal with only a small part of a subject",
    "cn_def": "只觸及皮毛"
  },
  "bury the hatchet": {
    "pos": "v.phr.",
    "en_def": "to stop arguing and become friends again",
    "cn_def": "言歸於好;握手言和"
  },
  "lost in the mists of time": {
    "pos": "adj.phr.",
    "en_def": "forgotten because it happened very long ago",
    "cn_def": "湮沒在歷史長河中"
  },
  "ground-penetrating radar": {
    "pos": "n.phr.",
    "en_def": "a machine that uses radio waves to see under the ground",
    "cn_def": "透地雷達"
  },
  "stone age": {
    "pos": "n.phr.",
    "en_def": "the early period when people used stone tools",
    "cn_def": "石器時代"
  },
  "grave goods": {
    "pos": "n.phr.",
    "en_def": "objects buried with a dead person",
    "cn_def": "陪葬品"
  },
  "cave painting": {
    "pos": "n.phr.",
    "en_def": "an ancient picture painted on the wall of a cave",
    "cn_def": "洞穴壁畫"
  },
  "radiocarbon dating": {
    "pos": "n.phr.",
    "en_def": "a method of finding the age of old organic material",
    "cn_def": "放射性碳定年法"
  },
  "ice age": {
    "pos": "n.phr.",
    "en_def": "a long period when ice covered much of the Earth",
    "cn_def": "冰河時期"
  }
};

const EXTRA_GLOSSES = {};
