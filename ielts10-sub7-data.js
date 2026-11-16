// Topic 10 Subunit 7 Quiz Data: Academic Words 學術單字 1 (acceptable – coalesce)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T10 S07 - Academic Words 學術單字 1 (acceptable – coalesce)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "acceptable",
    "pos": "adj.",
    "cn_def": "可接受的",
    "en_def": "good enough to be allowed or agreed to",
    "sentence": "Residents said the noise from the building site was {{BLANK}} during the day, but they asked the workers to stop by six o'clock.",
    "cn": "居民表示工地的噪音在白天是可以接受的，但他們要求工人在六點前停工。"
  },
  {
    "word": "adjoining",
    "pos": "adj.",
    "cn_def": "相鄰的；毗連的",
    "en_def": "next to and joined to something",
    "sentence": "We booked two {{BLANK}} rooms in the hotel, so the children could sleep next door while we stayed close by.",
    "cn": "我們在飯店訂了兩間相鄰的房間，所以孩子們可以睡在隔壁，而我們也待在附近。"
  },
  {
    "word": "assortment",
    "pos": "n.",
    "cn_def": "各式各樣；什錦",
    "en_def": "a mixture of different kinds of things",
    "sentence": "The market sells an {{BLANK}} of handmade goods, so tourists can find gifts for everyone in their family.",
    "cn": "這個市集販售各式各樣的手工商品，所以觀光客可以為家裡每個人找到禮物。"
  },
  {
    "word": "boundary",
    "pos": "n.",
    "cn_def": "邊界；界線",
    "en_def": "a line that marks the edge of an area",
    "sentence": "The river forms the {{BLANK}} between the two cities, so people often argue about who should clean it.",
    "cn": "這條河構成兩座城市之間的邊界，所以人們常常爭論應該由誰來清理它。"
  },
  {
    "word": "breadth",
    "pos": "n.",
    "cn_def": "寬度；廣度",
    "en_def": "the distance from one side to the other; wide range",
    "sentence": "The new bridge is impressive because of its {{BLANK}}, and four lanes of cars can cross it side by side.",
    "cn": "這座新橋令人印象深刻是因為它的寬度，而四線車道的汽車可以並排通過。"
  },
  {
    "word": "brittle",
    "pos": "adj.",
    "cn_def": "易碎的；脆的",
    "en_def": "hard but easily broken",
    "sentence": "Old plastic pipes become {{BLANK}} in the sun, so they often crack when workers try to move them.",
    "cn": "老舊的塑膠管在陽光下會變得易碎，所以工人試圖搬動時它們常常裂開。"
  },
  {
    "word": "interconnected",
    "pos": "adj.",
    "cn_def": "相互連結的",
    "en_def": "joined to each other so that each affects the others",
    "sentence": "Housing, jobs and transport are closely {{BLANK}}, so a city cannot solve one problem while ignoring the others.",
    "cn": "住房、就業和交通彼此緊密相互連結，所以一座城市不能只解決一個問題而忽略其他問題。"
  },
  {
    "word": "contiguous",
    "pos": "adj.",
    "cn_def": "相連的；鄰接的",
    "en_def": "touching or next to each other along one side",
    "sentence": "The park and the school are {{BLANK}}, so students can walk straight into the green area during their lunch break.",
    "cn": "公園和學校是相連的，所以學生們午休時可以直接走進綠地。"
  },
  {
    "word": "default",
    "pos": "n.",
    "cn_def": "預設（值）；預設選項",
    "en_def": "what happens or is chosen if no other choice is made",
    "sentence": "Driving has become the {{BLANK}} for many families in the suburbs, because buses come only once an hour.",
    "cn": "對許多郊區家庭來說，開車已經成為預設選項，因為公車一小時才來一班。"
  },
  {
    "word": "fee",
    "pos": "n.",
    "cn_def": "費用",
    "en_def": "money you pay for a service or to enter a place",
    "sentence": "The museum charges a small entrance {{BLANK}}, but students can visit for free on Wednesday afternoons.",
    "cn": "這座博物館收取少量的入場費用，但學生在星期三下午可以免費參觀。"
  },
  {
    "word": "partnership",
    "pos": "n.",
    "cn_def": "合作關係；夥伴關係",
    "en_def": "working together with another person or group",
    "sentence": "The city formed a {{BLANK}} with local companies, and together they built a new sports centre for young people.",
    "cn": "市政府和當地企業建立了合作關係，而他們一起為年輕人建造了一座新運動中心。"
  },
  {
    "word": "acquiesce",
    "pos": "v.",
    "cn_def": "默許；勉強同意",
    "en_def": "to agree to something without arguing, often unwillingly",
    "sentence": "At first the shop owners refused the plan, but they finally {{BLANK}} when the council promised them more parking spaces.",
    "cn": "起初店家們拒絕這項計畫，但當議會承諾給他們更多停車位時，他們最後勉強同意了。"
  },
  {
    "word": "timely",
    "pos": "adj.",
    "cn_def": "及時的；適時的",
    "en_def": "happening at the right time",
    "sentence": "Thanks to the {{BLANK}} warning from the weather office, people moved their scooters before the street flooded.",
    "cn": "多虧了氣象局及時的警告，人們在街道淹水前就把機車移走了。"
  },
  {
    "word": "swathe",
    "pos": "n.",
    "cn_def": "一大片（土地）",
    "en_def": "a long wide area of land",
    "sentence": "The new motorway cut through a large {{BLANK}} of forest, so many animals lost their homes and environmental groups protested.",
    "cn": "新高速公路穿越了一大片森林，所以許多動物失去家園，而環保團體提出抗議。"
  },
  {
    "word": "appease",
    "pos": "v.",
    "cn_def": "安撫；平息（怒氣）",
    "en_def": "to make someone calmer by giving them what they want",
    "sentence": "To {{BLANK}} angry residents, the company promised to plant trees and to stop work early every evening.",
    "cn": "為了安撫憤怒的居民，該公司承諾種樹，並且每天傍晚提早收工。"
  },
  {
    "word": "audacious",
    "pos": "adj.",
    "cn_def": "大膽的；有魄力的",
    "en_def": "very bold and willing to take risks",
    "sentence": "The architect's {{BLANK}} design had a building that seemed to balance on one corner, and many people doubted it could be built.",
    "cn": "那位建築師大膽的設計是一棟看似用一角保持平衡的建築，而許多人懷疑它能否蓋得出來。"
  },
  {
    "word": "auspicious",
    "pos": "adj.",
    "cn_def": "吉利的；吉祥的",
    "en_def": "showing signs that something will be successful",
    "sentence": "Many families choose an {{BLANK}} day to move into a new home, and they often check the calendar with their grandparents.",
    "cn": "許多家庭會挑選一個吉利的日子搬進新家，而他們常常和祖父母一起翻黃曆確認。"
  },
  {
    "word": "blatant",
    "pos": "adj.",
    "cn_def": "公然的；明目張膽的",
    "en_def": "very obvious and done without shame",
    "sentence": "Parking in a bus lane is a {{BLANK}} rule-breaking act, but some drivers still do it because fines are rarely given.",
    "cn": "把車停在公車專用道上是公然的違規行為，但有些駕駛人仍然這麼做，因為很少被開罰。"
  },
  {
    "word": "buoyant",
    "pos": "adj.",
    "cn_def": "（經濟、市場）蓬勃的；看漲的",
    "en_def": "successful and likely to stay strong (of an economy or market)",
    "sentence": "The property market is still {{BLANK}} in the city centre, but prices in the outer towns have started to fall.",
    "cn": "市中心的房地產市場依然蓬勃，但外圍城鎮的房價已經開始下跌。"
  },
  {
    "word": "bustling",
    "pos": "adj.",
    "cn_def": "熙熙攘攘的；熱鬧的",
    "en_def": "full of busy, noisy activity",
    "sentence": "Dihua Street is {{BLANK}} before Lunar New Year, and shoppers squeeze past each other to buy dried fruit and candy.",
    "cn": "迪化街在農曆新年前熙熙攘攘，購物者擠來擠去購買果乾和糖果。"
  },
  {
    "word": "cacophony",
    "pos": "n.",
    "cn_def": "嘈雜聲；刺耳的雜音",
    "en_def": "a loud, unpleasant mixture of sounds",
    "sentence": "I woke up to a {{BLANK}} of car horns, drills and barking dogs, so I closed the window and put on my headphones.",
    "cn": "我被汽車喇叭、電鑽和狗吠的嘈雜聲吵醒，所以我關上窗戶並戴上耳機。"
  },
  {
    "word": "capricious",
    "pos": "adj.",
    "cn_def": "反覆無常的；多變的",
    "en_def": "changing suddenly without a clear reason",
    "sentence": "The weather in the mountains is {{BLANK}}, so hikers should bring a raincoat even when the morning looks sunny.",
    "cn": "山上的天氣反覆無常，所以即使早上看起來晴朗，登山客也應該帶件雨衣。"
  },
  {
    "word": "chaotic",
    "pos": "adj.",
    "cn_def": "混亂的",
    "en_def": "in a complete mess and without order",
    "sentence": "The traffic was {{BLANK}} after the power cut stopped the traffic lights, so police officers had to direct cars by hand.",
    "cn": "停電使紅綠燈停擺之後交通一片混亂，所以警察只好用手指揮車輛。"
  },
  {
    "word": "clutter",
    "pos": "n.",
    "cn_def": "雜亂的東西",
    "en_def": "many things lying around in an untidy way",
    "sentence": "There was so much {{BLANK}} in the small flat that we could hardly walk, so we gave away half of our old things.",
    "cn": "那間小公寓裡有太多雜亂的東西，我們幾乎無法走動，所以我們把一半的舊東西送人了。"
  },
  {
    "word": "coalesce",
    "pos": "v.",
    "cn_def": "聯合；合併",
    "en_def": "to come together to form one group or thing",
    "sentence": "Several small villages slowly {{BLANK}} into one large town as new roads and houses filled the gaps between them.",
    "cn": "隨著新的道路和房屋填滿彼此之間的空隙，幾個小村莊逐漸合併成一個大城鎮。"
  }
];

const MCQS = [
  {
    "q": "Residents said the noise from the building site was _____ during the day, but they asked the workers to stop by six o'clock.",
    "options": [
      "liveable",
      "unsightly",
      "ever-increasing",
      "acceptable"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "We booked two _____ rooms in the hotel, so the children could sleep next door while we stayed close by.",
    "options": [
      "adjoining",
      "sluggish",
      "dismal",
      "coveted"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The market sells an _____ of handmade goods, so tourists can find gifts for everyone in their family.",
    "options": [
      "glass",
      "assortment",
      "pavement",
      "nexus"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The river forms the _____ between the two cities, so people often argue about who should clean it.",
    "options": [
      "rent",
      "beam",
      "boundary",
      "graffiti"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The new bridge is impressive because of its _____, and four lanes of cars can cross it side by side.",
    "options": [
      "ambience",
      "crux",
      "constituency",
      "breadth"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Old plastic pipes become _____ in the sun, so they often crack when workers try to move them.",
    "options": [
      "overpriced",
      "brittle",
      "untenable",
      "run-down"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Housing, jobs and transport are closely _____, so a city cannot solve one problem while ignoring the others.",
    "options": [
      "expedient",
      "insidious",
      "interconnected",
      "long-standing"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The park and the school are _____, so students can walk straight into the green area during their lunch break.",
    "options": [
      "contiguous",
      "tasteful",
      "infamous",
      "gruelling"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Driving has become the _____ for many families in the suburbs, because buses come only once an hour.",
    "options": [
      "flyover",
      "boon",
      "cladding",
      "default"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The museum charges a small entrance _____, but students can visit for free on Wednesday afternoons.",
    "options": [
      "reprieve",
      "fee",
      "waterfront",
      "outcry"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The city formed a _____ with local companies, and together they built a new sports centre for young people.",
    "options": [
      "partnership",
      "leeway",
      "bulldozer",
      "overhang"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "At first the shop owners refused the plan, but they finally _____ when the council promised them more parking spaces.",
    "options": [
      "straddle",
      "deflect",
      "acquiesce",
      "interweave"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Thanks to the _____ warning from the weather office, people moved their scooters before the street flooded.",
    "options": [
      "congenial",
      "decent",
      "grandiose",
      "timely"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The new motorway cut through a large _____ of forest, so many animals lost their homes and environmental groups protested.",
    "options": [
      "culprit",
      "swathe",
      "traffic",
      "neighbourhood"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "To _____ angry residents, the company promised to plant trees and to stop work early every evening.",
    "options": [
      "appease",
      "resonate",
      "evict",
      "lessen"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The architect's _____ design had a building that seemed to balance on one corner, and many people doubted it could be built.",
    "options": [
      "tranquil",
      "decrepit",
      "audacious",
      "alluring"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Many families choose an _____ day to move into a new home, and they often check the calendar with their grandparents.",
    "options": [
      "fleeting",
      "auspicious",
      "nondescript",
      "long-standing"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Parking in a bus lane is a _____ rule-breaking act, but some drivers still do it because fines are rarely given.",
    "options": [
      "multicultural",
      "considerate",
      "dismal",
      "blatant"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The property market is still _____ in the city centre, but prices in the outer towns have started to fall.",
    "options": [
      "buoyant",
      "glaring",
      "panoramic",
      "overarching"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Dihua Street is _____ before Lunar New Year, and shoppers squeeze past each other to buy dried fruit and candy.",
    "options": [
      "menial",
      "load-bearing",
      "bustling",
      "fraught"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "I woke up to a _____ of car horns, drills and barking dogs, so I closed the window and put on my headphones.",
    "options": [
      "cacophony",
      "pedestrian",
      "precinct",
      "cohort"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The weather in the mountains is _____, so hikers should bring a raincoat even when the morning looks sunny.",
    "options": [
      "paltry",
      "sterile",
      "capricious",
      "bumper-to-bumper"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The traffic was _____ after the power cut stopped the traffic lights, so police officers had to direct cars by hand.",
    "options": [
      "unsightly",
      "staggering",
      "zero-waste",
      "chaotic"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "There was so much _____ in the small flat that we could hardly walk, so we gave away half of our old things.",
    "options": [
      "cyclist",
      "clutter",
      "beam",
      "traffic"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Several small villages slowly _____ into one large town as new roads and houses filled the gaps between them.",
    "options": [
      "demolish",
      "vie",
      "coalesce",
      "appeal"
    ],
    "answer": 2,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "acceptable": {
    "pos": "adj.",
    "en_def": "good enough to be allowed or agreed to",
    "cn_def": "可接受的"
  },
  "adjoining": {
    "pos": "adj.",
    "en_def": "next to and joined to something",
    "cn_def": "相鄰的；毗連的"
  },
  "assortment": {
    "pos": "n.",
    "en_def": "a mixture of different kinds of things",
    "cn_def": "各式各樣；什錦"
  },
  "boundary": {
    "pos": "n.",
    "en_def": "a line that marks the edge of an area",
    "cn_def": "邊界；界線"
  },
  "breadth": {
    "pos": "n.",
    "en_def": "the distance from one side to the other; wide range",
    "cn_def": "寬度；廣度"
  },
  "brittle": {
    "pos": "adj.",
    "en_def": "hard but easily broken",
    "cn_def": "易碎的；脆的"
  },
  "interconnected": {
    "pos": "adj.",
    "en_def": "joined to each other so that each affects the others",
    "cn_def": "相互連結的"
  },
  "contiguous": {
    "pos": "adj.",
    "en_def": "touching or next to each other along one side",
    "cn_def": "相連的；鄰接的"
  },
  "default": {
    "pos": "n.",
    "en_def": "what happens or is chosen if no other choice is made",
    "cn_def": "預設（值）；預設選項"
  },
  "fee": {
    "pos": "n.",
    "en_def": "money you pay for a service or to enter a place",
    "cn_def": "費用"
  },
  "partnership": {
    "pos": "n.",
    "en_def": "working together with another person or group",
    "cn_def": "合作關係；夥伴關係"
  },
  "acquiesce": {
    "pos": "v.",
    "en_def": "to agree to something without arguing, often unwillingly",
    "cn_def": "默許；勉強同意"
  },
  "timely": {
    "pos": "adj.",
    "en_def": "happening at the right time",
    "cn_def": "及時的；適時的"
  },
  "swathe": {
    "pos": "n.",
    "en_def": "a long wide area of land",
    "cn_def": "一大片（土地）"
  },
  "appease": {
    "pos": "v.",
    "en_def": "to make someone calmer by giving them what they want",
    "cn_def": "安撫；平息（怒氣）"
  },
  "audacious": {
    "pos": "adj.",
    "en_def": "very bold and willing to take risks",
    "cn_def": "大膽的；有魄力的"
  },
  "auspicious": {
    "pos": "adj.",
    "en_def": "showing signs that something will be successful",
    "cn_def": "吉利的；吉祥的"
  },
  "blatant": {
    "pos": "adj.",
    "en_def": "very obvious and done without shame",
    "cn_def": "公然的；明目張膽的"
  },
  "buoyant": {
    "pos": "adj.",
    "en_def": "successful and likely to stay strong (of an economy or market)",
    "cn_def": "（經濟、市場）蓬勃的；看漲的"
  },
  "bustling": {
    "pos": "adj.",
    "en_def": "full of busy, noisy activity",
    "cn_def": "熙熙攘攘的；熱鬧的"
  },
  "cacophony": {
    "pos": "n.",
    "en_def": "a loud, unpleasant mixture of sounds",
    "cn_def": "嘈雜聲；刺耳的雜音"
  },
  "capricious": {
    "pos": "adj.",
    "en_def": "changing suddenly without a clear reason",
    "cn_def": "反覆無常的；多變的"
  },
  "chaotic": {
    "pos": "adj.",
    "en_def": "in a complete mess and without order",
    "cn_def": "混亂的"
  },
  "clutter": {
    "pos": "n.",
    "en_def": "many things lying around in an untidy way",
    "cn_def": "雜亂的東西"
  },
  "coalesce": {
    "pos": "v.",
    "en_def": "to come together to form one group or thing",
    "cn_def": "聯合；合併"
  },
  "liveable": {
    "pos": "adj.",
    "en_def": "pleasant and suitable for living in",
    "cn_def": "宜居的；適合居住的"
  },
  "unsightly": {
    "pos": "adj.",
    "en_def": "ugly and unpleasant to look at",
    "cn_def": "難看的；不雅觀的"
  },
  "ever-increasing": {
    "pos": "adj.",
    "en_def": "growing all the time",
    "cn_def": "不斷增加的"
  },
  "sluggish": {
    "pos": "adj.",
    "en_def": "moving or working more slowly than usual",
    "cn_def": "緩慢的；不景氣的"
  },
  "dismal": {
    "pos": "adj.",
    "en_def": "sad, dark and without hope",
    "cn_def": "陰鬱的；淒涼的"
  },
  "coveted": {
    "pos": "adj.",
    "en_def": "wanted very much by many people",
    "cn_def": "令人垂涎的；眾所渴望的"
  },
  "glass": {
    "pos": "n.",
    "en_def": "a hard clear material used for windows",
    "cn_def": "玻璃"
  },
  "pavement": {
    "pos": "n.",
    "en_def": "the path at the side of a road for people to walk on",
    "cn_def": "人行道"
  },
  "nexus": {
    "pos": "n.",
    "en_def": "a central connection point between several things",
    "cn_def": "連結點；核心"
  },
  "rent": {
    "pos": "n.",
    "en_def": "money paid regularly to live in a place you do not own",
    "cn_def": "租金；房租"
  },
  "beam": {
    "pos": "n.",
    "en_def": "a long thick piece of wood or metal that supports a roof",
    "cn_def": "樑；橫樑"
  },
  "graffiti": {
    "pos": "n.",
    "en_def": "words or pictures painted on walls without permission",
    "cn_def": "塗鴉"
  },
  "ambience": {
    "pos": "n.",
    "en_def": "the feeling or mood of a place",
    "cn_def": "氣氛；環境氛圍"
  },
  "crux": {
    "pos": "n.",
    "en_def": "the most important point of a problem",
    "cn_def": "關鍵；癥結"
  },
  "constituency": {
    "pos": "n.",
    "en_def": "the people who vote for a particular politician in an area",
    "cn_def": "選區；選民"
  },
  "overpriced": {
    "pos": "adj.",
    "en_def": "costing more than it is worth",
    "cn_def": "定價過高的；太貴的"
  },
  "untenable": {
    "pos": "adj.",
    "en_def": "not able to be continued or defended",
    "cn_def": "站不住腳的；難以維持的"
  },
  "run-down": {
    "pos": "adj.",
    "en_def": "in bad condition because nobody has looked after it",
    "cn_def": "破敗的；年久失修的"
  },
  "expedient": {
    "pos": "adj.",
    "en_def": "useful for a quick result, though perhaps not the best way",
    "cn_def": "權宜的；方便的"
  },
  "insidious": {
    "pos": "adj.",
    "en_def": "harmful in a slow way that is hard to notice",
    "cn_def": "潛伏的；暗中為害的"
  },
  "long-standing": {
    "pos": "adj.",
    "en_def": "having existed for a long time",
    "cn_def": "長期存在的；由來已久的"
  },
  "tasteful": {
    "pos": "adj.",
    "en_def": "attractive and showing good judgement about style",
    "cn_def": "雅致的；有品味的"
  },
  "infamous": {
    "pos": "adj.",
    "en_def": "well known for something bad",
    "cn_def": "惡名昭彰的"
  },
  "gruelling": {
    "pos": "adj.",
    "en_def": "very difficult and tiring",
    "cn_def": "累人的；艱辛的"
  },
  "flyover": {
    "pos": "n.",
    "en_def": "a bridge that carries one road over another",
    "cn_def": "高架橋；天橋"
  },
  "boon": {
    "pos": "n.",
    "en_def": "something very helpful",
    "cn_def": "恩惠；福音"
  },
  "cladding": {
    "pos": "n.",
    "en_def": "a covering added to the outside walls of a building",
    "cn_def": "（建築）外牆覆層"
  },
  "reprieve": {
    "pos": "n.",
    "en_def": "a delay or cancellation of something bad",
    "cn_def": "暫緩；緩刑"
  },
  "waterfront": {
    "pos": "n.",
    "en_def": "the part of a city next to a river, lake or sea",
    "cn_def": "濱水區；水岸"
  },
  "outcry": {
    "pos": "n.",
    "en_def": "a strong public protest",
    "cn_def": "強烈抗議；公眾的憤怒"
  },
  "leeway": {
    "pos": "n.",
    "en_def": "freedom to decide or act as you want",
    "cn_def": "迴旋餘地；自由空間"
  },
  "bulldozer": {
    "pos": "n.",
    "en_def": "a powerful machine that pushes earth and knocks down buildings",
    "cn_def": "推土機"
  },
  "overhang": {
    "pos": "n.",
    "en_def": "a part of a roof that sticks out beyond the walls",
    "cn_def": "屋簷；突出部分"
  },
  "straddle": {
    "pos": "v.",
    "en_def": "to cross or stretch across both sides of something",
    "cn_def": "橫跨；跨越"
  },
  "deflect": {
    "pos": "v.",
    "en_def": "to turn attention or criticism away",
    "cn_def": "轉移（注意、批評）"
  },
  "interweave": {
    "pos": "v.",
    "en_def": "to join closely together, like threads",
    "cn_def": "交織；交錯"
  },
  "congenial": {
    "pos": "adj.",
    "en_def": "pleasant and friendly",
    "cn_def": "宜人的；投緣的"
  },
  "decent": {
    "pos": "adj.",
    "en_def": "good enough; of an acceptable standard",
    "cn_def": "像樣的；過得去的"
  },
  "grandiose": {
    "pos": "adj.",
    "en_def": "too big or ambitious to be practical",
    "cn_def": "浮誇的；過於宏大的"
  },
  "culprit": {
    "pos": "n.",
    "en_def": "the person or thing that causes a problem",
    "cn_def": "罪魁禍首；元凶"
  },
  "traffic": {
    "pos": "n.",
    "en_def": "the cars, buses and other vehicles on a road",
    "cn_def": "交通；車流"
  },
  "neighbourhood": {
    "pos": "n.",
    "en_def": "an area of a town and the people who live there",
    "cn_def": "社區；街坊"
  },
  "resonate": {
    "pos": "v.",
    "en_def": "to seem important or meaningful to someone",
    "cn_def": "引起共鳴"
  },
  "evict": {
    "pos": "v.",
    "en_def": "to force someone to leave their home by law",
    "cn_def": "驅逐；（依法）逐出"
  },
  "lessen": {
    "pos": "v.",
    "en_def": "to make something smaller or less",
    "cn_def": "減少；減輕"
  },
  "tranquil": {
    "pos": "adj.",
    "en_def": "quiet and calm",
    "cn_def": "寧靜的；平靜的"
  },
  "decrepit": {
    "pos": "adj.",
    "en_def": "old and in very bad condition",
    "cn_def": "破舊的；老朽的"
  },
  "alluring": {
    "pos": "adj.",
    "en_def": "attractive and exciting",
    "cn_def": "誘人的；迷人的"
  },
  "fleeting": {
    "pos": "adj.",
    "en_def": "lasting only a very short time",
    "cn_def": "短暫的；稍縱即逝的"
  },
  "nondescript": {
    "pos": "adj.",
    "en_def": "very ordinary, with no interesting features",
    "cn_def": "毫無特色的；平凡的"
  },
  "multicultural": {
    "pos": "adj.",
    "en_def": "including people of many different cultures",
    "cn_def": "多元文化的"
  },
  "considerate": {
    "pos": "adj.",
    "en_def": "thinking about other people's feelings and needs",
    "cn_def": "體貼的；為他人著想的"
  },
  "glaring": {
    "pos": "adj.",
    "en_def": "very obvious, usually about a mistake",
    "cn_def": "明顯的；刺眼的"
  },
  "panoramic": {
    "pos": "adj.",
    "en_def": "showing a wide view of a whole area",
    "cn_def": "全景的"
  },
  "overarching": {
    "pos": "adj.",
    "en_def": "most important and including everything else",
    "cn_def": "首要的；總括的"
  },
  "menial": {
    "pos": "adj.",
    "en_def": "boring, low-paid and needing little skill",
    "cn_def": "卑微的；粗活的"
  },
  "load-bearing": {
    "pos": "adj.",
    "en_def": "supporting the weight of the building above it",
    "cn_def": "承重的"
  },
  "fraught": {
    "pos": "adj.",
    "en_def": "full of problems or worry",
    "cn_def": "充滿（問題、憂慮）的"
  },
  "pedestrian": {
    "pos": "n.",
    "en_def": "a person who is walking in a street",
    "cn_def": "行人"
  },
  "precinct": {
    "pos": "n.",
    "en_def": "an area of a town used for a special purpose, often closed to cars",
    "cn_def": "（城市中的）特定區域；徒步區"
  },
  "cohort": {
    "pos": "n.",
    "en_def": "a group of people of a similar age or in the same situation",
    "cn_def": "（同年齡或同處境的）一群人"
  },
  "paltry": {
    "pos": "adj.",
    "en_def": "very small and not worth much",
    "cn_def": "微不足道的；少得可憐的"
  },
  "sterile": {
    "pos": "adj.",
    "en_def": "without life, warmth or character",
    "cn_def": "缺乏生氣的；了無生趣的"
  },
  "bumper-to-bumper": {
    "pos": "adj.phr.",
    "en_def": "with vehicles so close together that they can hardly move",
    "cn_def": "車輛一輛接一輛的；大塞車的"
  },
  "staggering": {
    "pos": "adj.",
    "en_def": "so large or surprising that it is hard to believe",
    "cn_def": "驚人的"
  },
  "zero-waste": {
    "pos": "adj.",
    "en_def": "producing no rubbish that goes to landfill",
    "cn_def": "零廢棄的"
  },
  "cyclist": {
    "pos": "n.",
    "en_def": "a person who rides a bicycle",
    "cn_def": "騎單車的人"
  },
  "demolish": {
    "pos": "v.",
    "en_def": "to knock down a building completely",
    "cn_def": "拆除"
  },
  "vie": {
    "pos": "v.",
    "en_def": "to compete strongly with others for something",
    "cn_def": "競爭；角逐"
  },
  "appeal": {
    "pos": "v.",
    "en_def": "to be attractive or interesting to someone",
    "cn_def": "吸引；對……有吸引力"
  }
};

const EXTRA_GLOSSES = {};
