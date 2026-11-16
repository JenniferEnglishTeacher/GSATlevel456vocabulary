// Topic 4 Subunit 11 Quiz Data: Academic Words 學術單字 5 (amenity – discourse)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T04 S11 - Academic Words 學術單字 5 (amenity – discourse)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "amenity",
    "pos": "n.",
    "cn_def": "便利設施",
    "en_def": "something that makes a place comfortable or easy to use",
    "sentence": "The new beach park has every {{BLANK}} visitors need, such as showers and toilets, but it also has strict rules about rubbish.",
    "cn": "新的海灘公園有遊客需要的各種便利設施,例如淋浴間和廁所,但它對垃圾也有嚴格的規定。"
  },
  {
    "word": "anecdotal",
    "pos": "adj.",
    "cn_def": "傳聞的;軼事的",
    "en_def": "based on personal stories, not careful research",
    "sentence": "Fishermen have {{BLANK}} evidence that fish are getting smaller, but scientists want more data before they agree.",
    "cn": "漁民有魚越來越小的傳聞證據,但科學家在同意之前想要更多數據。"
  },
  {
    "word": "apathy",
    "pos": "n.",
    "cn_def": "冷漠;漠不關心",
    "en_def": "a lack of interest or concern",
    "sentence": "Public {{BLANK}} about ocean pollution is a big problem, because people rarely see what happens under the waves.",
    "cn": "大眾對海洋污染的冷漠是個大問題,因為人們很少看到海浪下發生的事。"
  },
  {
    "word": "arduous",
    "pos": "adj.",
    "cn_def": "艱鉅的;費力的",
    "en_def": "very difficult and tiring",
    "sentence": "Rowing across the Atlantic is an {{BLANK}} journey, and the young woman spent ninety days alone on the ocean.",
    "cn": "划船橫越大西洋是一段艱辛的旅程,而那位年輕女子獨自在海上度過了九十天。"
  },
  {
    "word": "attest",
    "pos": "v.",
    "cn_def": "證明;證實",
    "en_def": "to show or prove that something is true",
    "sentence": "Local divers can {{BLANK}} to the reef's recovery, because they have seen the fish return over the past few years.",
    "cn": "當地潛水員能證明珊瑚礁的恢復,因為他們這幾年親眼看到魚群回來。"
  },
  {
    "word": "authorise",
    "pos": "v.",
    "cn_def": "授權;批准",
    "en_def": "to give official permission for something",
    "sentence": "Only the government can {{BLANK}} fishing in the marine park, and boats without permits will be stopped.",
    "cn": "只有政府能批准在海洋公園內捕魚,而沒有許可證的船隻將被攔下。"
  },
  {
    "word": "avert",
    "pos": "v.",
    "cn_def": "避免;防止",
    "en_def": "to prevent something bad from happening",
    "sentence": "Quick action by the crew helped {{BLANK}} a disaster, because they fixed the leak before the ship began to sink.",
    "cn": "船員的迅速行動幫助避免了一場災難,因為他們在船開始下沉前修好了漏洞。"
  },
  {
    "word": "bleak",
    "pos": "adj.",
    "cn_def": "黯淡的;無望的",
    "en_def": "without hope or encouragement",
    "sentence": "The future of the reef looks {{BLANK}} if sea temperatures keep rising, but scientists say it is not too late to act.",
    "cn": "如果海水溫度持續上升,珊瑚礁的前景看起來很黯淡,但科學家說現在採取行動還不算太遲。"
  },
  {
    "word": "breakthrough",
    "pos": "n.",
    "cn_def": "突破",
    "en_def": "an important new discovery",
    "sentence": "Scientists made a {{BLANK}} in growing coral in labs, so damaged reefs may be repaired faster in the future.",
    "cn": "科學家在實驗室培育珊瑚方面取得了突破,所以受損的珊瑚礁未來可能會更快被修復。"
  },
  {
    "word": "burgeoning",
    "pos": "adj.",
    "cn_def": "迅速發展的",
    "en_def": "growing quickly",
    "sentence": "The island's {{BLANK}} diving industry has created many jobs, but it also puts more pressure on the reefs.",
    "cn": "這座島迅速發展的潛水產業創造了許多工作機會,但它也對珊瑚礁造成更大的壓力。"
  },
  {
    "word": "capitalise",
    "pos": "v.",
    "cn_def": "利用;從中獲利",
    "en_def": "to use a situation to gain an advantage",
    "sentence": "The town decided to {{BLANK}} on its whale-watching tours, and tourism has now replaced fishing as its main business.",
    "cn": "這個小鎮決定利用賞鯨行程,而觀光業現在已經取代捕魚成為它的主要產業。"
  },
  {
    "word": "catalyst",
    "pos": "n.",
    "cn_def": "催化劑;促成因素",
    "en_def": "something that causes an important change",
    "sentence": "The oil spill was a {{BLANK}} for change, because it made the public demand stricter safety laws for ships.",
    "cn": "這起漏油事件是改變的催化劑,因為它讓大眾要求更嚴格的船舶安全法規。"
  },
  {
    "word": "cautious",
    "pos": "adj.",
    "cn_def": "謹慎的;小心的",
    "en_def": "careful to avoid danger",
    "sentence": "New divers should be {{BLANK}} near strong currents, so they should always stay close to their guide.",
    "cn": "新手潛水員在強勁海流附近應該謹慎,所以他們應該總是待在導遊身邊。"
  },
  {
    "word": "complacent",
    "pos": "adj.",
    "cn_def": "自滿的;掉以輕心的",
    "en_def": "too satisfied and not worried about possible danger",
    "sentence": "We cannot become {{BLANK}} after one good year, because fish numbers can fall again very quickly.",
    "cn": "我們不能在一個好年之後就掉以輕心,因為魚群數量可能會很快再次下降。"
  },
  {
    "word": "concise",
    "pos": "adj.",
    "cn_def": "簡潔的",
    "en_def": "short and clear",
    "sentence": "The guide gave a {{BLANK}} safety talk before the dive, and everyone understood the rules in just five minutes.",
    "cn": "導遊在潛水前做了一段簡潔的安全說明,而每個人只花五分鐘就了解規則。"
  },
  {
    "word": "condemn",
    "pos": "v.",
    "cn_def": "譴責",
    "en_def": "to say strongly that something is wrong",
    "sentence": "Environmental groups {{BLANK}} the plan to dump waste at sea, and they asked the government to stop it immediately.",
    "cn": "環保團體譴責在海上傾倒廢棄物的計畫,並要求政府立即停止。"
  },
  {
    "word": "conscientious",
    "pos": "adj.",
    "cn_def": "認真的;盡責的",
    "en_def": "careful to do things well and correctly",
    "sentence": "She is a {{BLANK}} diver who always picks up rubbish underwater, so her friends call her the reef's guardian.",
    "cn": "她是一位盡責的潛水員,總是在水下撿垃圾,所以朋友們稱她為珊瑚礁守護者。"
  },
  {
    "word": "counterpart",
    "pos": "n.",
    "cn_def": "對應的人或物;同行",
    "en_def": "a person or thing with the same role in a different place",
    "sentence": "Taiwan's coastguard met its Japanese {{BLANK}} to discuss illegal fishing, and they agreed to share information.",
    "cn": "台灣海巡與日本的對口單位會面討論非法捕魚,而且雙方同意分享資訊。"
  },
  {
    "word": "cynical",
    "pos": "adj.",
    "cn_def": "憤世嫉俗的;懷疑的",
    "en_def": "believing people only act for their own benefit",
    "sentence": "Some people are {{BLANK}} about the company's green promises, because it still sells huge amounts of plastic.",
    "cn": "有些人對這家公司的環保承諾抱持懷疑的態度,因為它仍然販售大量塑膠。"
  },
  {
    "word": "daunting",
    "pos": "adj.",
    "cn_def": "令人卻步的",
    "en_def": "making you feel worried about whether you can succeed",
    "sentence": "Cleaning the whole coastline seemed {{BLANK}} at first, but hundreds of volunteers finished the job in one weekend.",
    "cn": "清理整條海岸線起初看起來令人卻步,但數百名志工在一個週末就完成了工作。"
  },
  {
    "word": "dearth",
    "pos": "n.",
    "cn_def": "缺乏;不足",
    "en_def": "a lack of something",
    "sentence": "There is a {{BLANK}} of data about the deep sea, so scientists cannot predict how mining will affect it.",
    "cn": "關於深海的數據缺乏,所以科學家無法預測採礦會對它造成什麼影響。"
  },
  {
    "word": "decimate",
    "pos": "v.",
    "cn_def": "大量毀滅;大幅減少",
    "en_def": "to destroy or kill a large part of something",
    "sentence": "Disease has {{BLANK}} the starfish population along the coast, and the number of sea urchins has grown quickly as a result.",
    "cn": "疾病大幅減少了沿岸的海星數量,而海膽的數量因此迅速增加。"
  },
  {
    "word": "demographic",
    "pos": "adj.",
    "cn_def": "人口統計的",
    "en_def": "relating to the age, size and structure of a population",
    "sentence": "{{BLANK}} changes in fishing villages are worrying, because most young people have moved to the cities for work.",
    "cn": "漁村的人口結構變化令人擔憂,因為大部分年輕人都已經搬到城市工作。"
  },
  {
    "word": "diligent",
    "pos": "adj.",
    "cn_def": "勤奮的;用功的",
    "en_def": "working hard and carefully",
    "sentence": "The {{BLANK}} students recorded the water temperature every day for a year, and their data helped a university project.",
    "cn": "那些勤奮的學生一整年每天記錄水溫,而他們的數據幫助了一項大學研究計畫。"
  },
  {
    "word": "discourse",
    "pos": "n.",
    "cn_def": "論述;討論",
    "en_def": "serious discussion about a subject",
    "sentence": "Public {{BLANK}} about the ocean has changed, because more people now see plastic as a serious problem.",
    "cn": "關於海洋的公眾討論已經改變,因為現在更多人把塑膠視為嚴重的問題。"
  }
];

const MCQS = [
  {
    "q": "The new beach park has every _____ visitors need, such as showers and toilets, but it also has strict rules about rubbish.",
    "options": [
      "pier",
      "amenity",
      "pearl",
      "abundance"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Fishermen have _____ evidence that fish are getting smaller, but scientists want more data before they agree.",
    "options": [
      "precarious",
      "optimal",
      "single-use",
      "anecdotal"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Public _____ about ocean pollution is a big problem, because people rarely see what happens under the waves.",
    "options": [
      "apathy",
      "ridge",
      "navigation",
      "jellyfish"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Rowing across the Atlantic is an _____ journey, and the young woman spent ninety days alone on the ocean.",
    "options": [
      "pristine",
      "disposable",
      "arduous",
      "uncharted"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Local divers can _____ to the reef's recovery, because they have seen the fish return over the past few years.",
    "options": [
      "inhabit",
      "attest",
      "sink",
      "render"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Only the government can _____ fishing in the marine park, and boats without permits will be stopped.",
    "options": [
      "dump",
      "recede",
      "eradicate",
      "authorise"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Quick action by the crew helped _____ a disaster, because they fixed the leak before the ship began to sink.",
    "options": [
      "avert",
      "degrade",
      "align",
      "orient"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The future of the reef looks _____ if sea temperatures keep rising, but scientists say it is not too late to act.",
    "options": [
      "reciprocal",
      "rampant",
      "bleak",
      "lucrative"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Scientists made a _____ in growing coral in labs, so damaged reefs may be repaired faster in the future.",
    "options": [
      "breakthrough",
      "trawler",
      "calcium",
      "cargo"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The island's _____ diving industry has created many jobs, but it also puts more pressure on the reefs.",
    "options": [
      "subtle",
      "decisive",
      "burgeoning",
      "vast"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The town decided to _____ on its whale-watching tours, and tourism has now replaced fishing as its main business.",
    "options": [
      "catch",
      "capitalise",
      "incur",
      "orient"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The oil spill was a _____ for change, because it made the public demand stricter safety laws for ships.",
    "options": [
      "anchor",
      "trawler",
      "sonar",
      "catalyst"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "New divers should be _____ near strong currents, so they should always stay close to their guide.",
    "options": [
      "relentless",
      "turbulent",
      "cautious",
      "precarious"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "We cannot become _____ after one good year, because fish numbers can fall again very quickly.",
    "options": [
      "complacent",
      "interdependent",
      "contingent",
      "enduring"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The guide gave a _____ safety talk before the dive, and everyone understood the rules in just five minutes.",
    "options": [
      "bioluminescent",
      "offshore",
      "precarious",
      "concise"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Environmental groups _____ the plan to dump waste at sea, and they asked the government to stop it immediately.",
    "options": [
      "dive",
      "condemn",
      "outweigh",
      "ingest"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "She is a _____ diver who always picks up rubbish underwater, so her friends call her the reef's guardian.",
    "options": [
      "impending",
      "imperative",
      "aesthetic",
      "conscientious"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Taiwan's coastguard met its Japanese _____ to discuss illegal fishing, and they agreed to share information.",
    "options": [
      "nursery",
      "oceanographer",
      "counterpart",
      "fallacy"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Some people are _____ about the company's green promises, because it still sells huge amounts of plastic.",
    "options": [
      "cynical",
      "meagre",
      "futile",
      "elusive"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Cleaning the whole coastline seemed _____ at first, but hundreds of volunteers finished the job in one weekend.",
    "options": [
      "aquatic",
      "daunting",
      "prolific",
      "contingent"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "There is a _____ of data about the deep sea, so scientists cannot predict how mining will affect it.",
    "options": [
      "squid",
      "basin",
      "satellite",
      "dearth"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Disease has _____ the starfish population along the coast, and the number of sea urchins has grown quickly as a result.",
    "options": [
      "decimate",
      "prosper",
      "opt",
      "orient"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "_____ changes in fishing villages are worrying, because most young people have moved to the cities for work.",
    "options": [
      "myriad",
      "demographic",
      "oceanic",
      "underwater"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The _____ students recorded the water temperature every day for a year, and their data helped a university project.",
    "options": [
      "contingent",
      "conducive",
      "diligent",
      "underwater"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Public _____ about the ocean has changed, because more people now see plastic as a serious problem.",
    "options": [
      "discourse",
      "harpoon",
      "lagoon",
      "port"
    ],
    "answer": 0,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "amenity": {
    "pos": "n.",
    "en_def": "something that makes a place comfortable or easy to use",
    "cn_def": "便利設施"
  },
  "anecdotal": {
    "pos": "adj.",
    "en_def": "based on personal stories, not careful research",
    "cn_def": "傳聞的;軼事的"
  },
  "apathy": {
    "pos": "n.",
    "en_def": "a lack of interest or concern",
    "cn_def": "冷漠;漠不關心"
  },
  "arduous": {
    "pos": "adj.",
    "en_def": "very difficult and tiring",
    "cn_def": "艱鉅的;費力的"
  },
  "attest": {
    "pos": "v.",
    "en_def": "to show or prove that something is true",
    "cn_def": "證明;證實"
  },
  "authorise": {
    "pos": "v.",
    "en_def": "to give official permission for something",
    "cn_def": "授權;批准"
  },
  "avert": {
    "pos": "v.",
    "en_def": "to prevent something bad from happening",
    "cn_def": "避免;防止"
  },
  "bleak": {
    "pos": "adj.",
    "en_def": "without hope or encouragement",
    "cn_def": "黯淡的;無望的"
  },
  "breakthrough": {
    "pos": "n.",
    "en_def": "an important new discovery",
    "cn_def": "突破"
  },
  "burgeoning": {
    "pos": "adj.",
    "en_def": "growing quickly",
    "cn_def": "迅速發展的"
  },
  "capitalise": {
    "pos": "v.",
    "en_def": "to use a situation to gain an advantage",
    "cn_def": "利用;從中獲利"
  },
  "catalyst": {
    "pos": "n.",
    "en_def": "something that causes an important change",
    "cn_def": "催化劑;促成因素"
  },
  "cautious": {
    "pos": "adj.",
    "en_def": "careful to avoid danger",
    "cn_def": "謹慎的;小心的"
  },
  "complacent": {
    "pos": "adj.",
    "en_def": "too satisfied and not worried about possible danger",
    "cn_def": "自滿的;掉以輕心的"
  },
  "concise": {
    "pos": "adj.",
    "en_def": "short and clear",
    "cn_def": "簡潔的"
  },
  "condemn": {
    "pos": "v.",
    "en_def": "to say strongly that something is wrong",
    "cn_def": "譴責"
  },
  "conscientious": {
    "pos": "adj.",
    "en_def": "careful to do things well and correctly",
    "cn_def": "認真的;盡責的"
  },
  "counterpart": {
    "pos": "n.",
    "en_def": "a person or thing with the same role in a different place",
    "cn_def": "對應的人或物;同行"
  },
  "cynical": {
    "pos": "adj.",
    "en_def": "believing people only act for their own benefit",
    "cn_def": "憤世嫉俗的;懷疑的"
  },
  "daunting": {
    "pos": "adj.",
    "en_def": "making you feel worried about whether you can succeed",
    "cn_def": "令人卻步的"
  },
  "dearth": {
    "pos": "n.",
    "en_def": "a lack of something",
    "cn_def": "缺乏;不足"
  },
  "decimate": {
    "pos": "v.",
    "en_def": "to destroy or kill a large part of something",
    "cn_def": "大量毀滅;大幅減少"
  },
  "demographic": {
    "pos": "adj.",
    "en_def": "relating to the age, size and structure of a population",
    "cn_def": "人口統計的"
  },
  "diligent": {
    "pos": "adj.",
    "en_def": "working hard and carefully",
    "cn_def": "勤奮的;用功的"
  },
  "discourse": {
    "pos": "n.",
    "en_def": "serious discussion about a subject",
    "cn_def": "論述;討論"
  },
  "pier": {
    "pos": "n.",
    "en_def": "a long structure built from the land out over the sea",
    "cn_def": "碼頭;突堤"
  },
  "pearl": {
    "pos": "n.",
    "en_def": "a small, shiny white ball that grows inside an oyster",
    "cn_def": "珍珠"
  },
  "abundance": {
    "pos": "n.",
    "en_def": "a very large amount of something",
    "cn_def": "豐富;大量"
  },
  "precarious": {
    "pos": "adj.",
    "en_def": "not safe or secure; likely to get worse",
    "cn_def": "不穩定的;岌岌可危的"
  },
  "optimal": {
    "pos": "adj.",
    "en_def": "best or most suitable",
    "cn_def": "最佳的"
  },
  "single-use": {
    "pos": "adj.",
    "en_def": "made to be used once and then thrown away",
    "cn_def": "一次性的"
  },
  "ridge": {
    "pos": "n.",
    "en_def": "a long, narrow line of high land or mountains",
    "cn_def": "海脊;山脊"
  },
  "navigation": {
    "pos": "n.",
    "en_def": "the skill of planning and following a route",
    "cn_def": "導航;航海術"
  },
  "jellyfish": {
    "pos": "n.",
    "en_def": "a soft sea animal with long parts that can sting",
    "cn_def": "水母"
  },
  "pristine": {
    "pos": "adj.",
    "en_def": "completely clean and untouched",
    "cn_def": "原始的;未受污染的"
  },
  "disposable": {
    "pos": "adj.",
    "en_def": "made to be thrown away after use",
    "cn_def": "拋棄式的;用完即丟的"
  },
  "uncharted": {
    "pos": "adj.",
    "en_def": "not yet mapped or explored",
    "cn_def": "未知的;海圖上未標明的"
  },
  "inhabit": {
    "pos": "v.",
    "en_def": "to live in a place",
    "cn_def": "居住於;棲息於"
  },
  "sink": {
    "pos": "v.",
    "en_def": "to go down below the surface of water",
    "cn_def": "下沉;沉沒"
  },
  "render": {
    "pos": "v.",
    "en_def": "to cause something to be in a certain condition",
    "cn_def": "使成為;使變得"
  },
  "dump": {
    "pos": "v.",
    "en_def": "to throw away waste in a careless or illegal way",
    "cn_def": "傾倒;丟棄"
  },
  "recede": {
    "pos": "v.",
    "en_def": "to move back from a higher point",
    "cn_def": "退去;後退"
  },
  "eradicate": {
    "pos": "v.",
    "en_def": "to get rid of something completely",
    "cn_def": "根除;消滅"
  },
  "degrade": {
    "pos": "v.",
    "en_def": "to break down slowly into smaller parts",
    "cn_def": "分解;降解"
  },
  "align": {
    "pos": "v.",
    "en_def": "to arrange things so they agree or match",
    "cn_def": "使一致;使對齊"
  },
  "orient": {
    "pos": "v.",
    "en_def": "to find your position or direction",
    "cn_def": "定向;確定方位"
  },
  "reciprocal": {
    "pos": "adj.",
    "en_def": "given or done in return by both sides",
    "cn_def": "互惠的;相互的"
  },
  "rampant": {
    "pos": "adj.",
    "en_def": "growing or spreading in an uncontrolled way",
    "cn_def": "猖獗的;蔓延的"
  },
  "lucrative": {
    "pos": "adj.",
    "en_def": "producing a lot of money",
    "cn_def": "有利可圖的;賺錢的"
  },
  "trawler": {
    "pos": "n.",
    "en_def": "a large fishing boat that pulls a big net",
    "cn_def": "拖網漁船"
  },
  "calcium": {
    "pos": "n.",
    "en_def": "a chemical element found in bones, shells and coral",
    "cn_def": "鈣"
  },
  "cargo": {
    "pos": "n.",
    "en_def": "goods carried by a ship, plane or truck",
    "cn_def": "貨物"
  },
  "subtle": {
    "pos": "adj.",
    "en_def": "small and not easy to notice",
    "cn_def": "細微的;微妙的"
  },
  "decisive": {
    "pos": "adj.",
    "en_def": "having a very important effect on the result",
    "cn_def": "決定性的"
  },
  "vast": {
    "pos": "adj.",
    "en_def": "extremely large",
    "cn_def": "廣大的;巨大的"
  },
  "catch": {
    "pos": "v.",
    "en_def": "to get hold of a fish or animal",
    "cn_def": "捕捉;抓到"
  },
  "incur": {
    "pos": "v.",
    "en_def": "to experience something unpleasant, such as a cost, as a result of an action",
    "cn_def": "招致;承擔"
  },
  "anchor": {
    "pos": "n.",
    "en_def": "a heavy metal object dropped to stop a boat from moving",
    "cn_def": "錨"
  },
  "sonar": {
    "pos": "n.",
    "en_def": "a system that uses sound to find objects underwater",
    "cn_def": "聲納"
  },
  "relentless": {
    "pos": "adj.",
    "en_def": "continuing strongly without stopping",
    "cn_def": "持續不斷的;無情的"
  },
  "turbulent": {
    "pos": "adj.",
    "en_def": "moving in a strong and uneven way",
    "cn_def": "洶湧的;動盪的"
  },
  "interdependent": {
    "pos": "adj.",
    "en_def": "depending on each other",
    "cn_def": "相互依賴的"
  },
  "contingent": {
    "pos": "adj.",
    "en_def": "depending on something else",
    "cn_def": "取決於……的"
  },
  "enduring": {
    "pos": "adj.",
    "en_def": "lasting for a long time",
    "cn_def": "持久的;長久的"
  },
  "bioluminescent": {
    "pos": "adj.",
    "en_def": "able to produce its own light",
    "cn_def": "生物發光的"
  },
  "offshore": {
    "pos": "adj.",
    "en_def": "located in the sea, away from the coast",
    "cn_def": "離岸的;近海的"
  },
  "dive": {
    "pos": "v.",
    "en_def": "to go under water, often with special equipment",
    "cn_def": "潛水"
  },
  "outweigh": {
    "pos": "v.",
    "en_def": "to be greater or more important than something else",
    "cn_def": "超過;比……更重要"
  },
  "ingest": {
    "pos": "v.",
    "en_def": "to take food or other things into the body",
    "cn_def": "攝入;吞食"
  },
  "impending": {
    "pos": "adj.",
    "en_def": "about to happen, usually something bad",
    "cn_def": "即將發生的"
  },
  "imperative": {
    "pos": "adj.",
    "en_def": "extremely important and needing urgent action",
    "cn_def": "迫切的;必要的"
  },
  "aesthetic": {
    "pos": "adj.",
    "en_def": "connected with beauty",
    "cn_def": "美學的;審美的"
  },
  "nursery": {
    "pos": "n.",
    "en_def": "a place where young animals grow up safely",
    "cn_def": "育幼場"
  },
  "oceanographer": {
    "pos": "n.",
    "en_def": "a scientist who studies the ocean",
    "cn_def": "海洋學家"
  },
  "fallacy": {
    "pos": "n.",
    "en_def": "a false idea that many people believe",
    "cn_def": "謬誤;錯誤觀念"
  },
  "meagre": {
    "pos": "adj.",
    "en_def": "very small in amount",
    "cn_def": "微薄的;貧乏的"
  },
  "futile": {
    "pos": "adj.",
    "en_def": "having no chance of success",
    "cn_def": "徒勞的;無效的"
  },
  "elusive": {
    "pos": "adj.",
    "en_def": "difficult to find or catch",
    "cn_def": "難以捉摸的;難找到的"
  },
  "aquatic": {
    "pos": "adj.",
    "en_def": "living or growing in water",
    "cn_def": "水生的"
  },
  "prolific": {
    "pos": "adj.",
    "en_def": "producing a lot of something",
    "cn_def": "多產的"
  },
  "squid": {
    "pos": "n.",
    "en_def": "a sea animal with ten arms and a long body",
    "cn_def": "魷魚"
  },
  "basin": {
    "pos": "n.",
    "en_def": "a large, low area of land or sea floor shaped like a bowl",
    "cn_def": "盆地;海盆"
  },
  "satellite": {
    "pos": "n.",
    "en_def": "a machine in space that sends information back to Earth",
    "cn_def": "衛星"
  },
  "prosper": {
    "pos": "v.",
    "en_def": "to be successful, especially by earning money",
    "cn_def": "繁榮;興旺"
  },
  "opt": {
    "pos": "v.",
    "en_def": "to choose one thing instead of another",
    "cn_def": "選擇"
  },
  "myriad": {
    "pos": "adj.",
    "en_def": "very many",
    "cn_def": "無數的;大量的"
  },
  "oceanic": {
    "pos": "adj.",
    "en_def": "relating to the ocean",
    "cn_def": "海洋的"
  },
  "underwater": {
    "pos": "adj.",
    "en_def": "below the surface of water",
    "cn_def": "水下的;水中的"
  },
  "conducive": {
    "pos": "adj.",
    "en_def": "helping something to happen",
    "cn_def": "有助於……的"
  },
  "harpoon": {
    "pos": "n.",
    "en_def": "a long spear used to hunt whales and large fish",
    "cn_def": "魚叉"
  },
  "lagoon": {
    "pos": "n.",
    "en_def": "an area of calm sea water separated from the ocean by sand or reef",
    "cn_def": "潟湖"
  },
  "port": {
    "pos": "n.",
    "en_def": "a town or city with a harbour where ships load and unload",
    "cn_def": "港口;港市"
  }
};

const EXTRA_GLOSSES = {};
