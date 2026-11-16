// Topic 12 Subunit 9 Quiz Data: Academic Words 學術單字 2 (validity – dominance)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T12 S09 - Academic Words 學術單字 2 (validity – dominance)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "validity",
    "pos": "n.",
    "cn_def": "正確性；有效性",
    "en_def": "the quality of being correct or acceptable",
    "sentence": "Other scientists questioned the {{BLANK}} of his results, because nobody else could repeat the experiment.",
    "cn": "其他科學家質疑他的結果的正確性，因為沒有其他人能重複這個實驗。"
  },
  {
    "word": "abnormal",
    "pos": "adj.",
    "cn_def": "異常的",
    "en_def": "different from what is usual, often in a worrying way",
    "sentence": "The sensors detected {{BLANK}} gas levels near the crater, so the park closed the hiking trail immediately.",
    "cn": "感測器偵測到火山口附近的氣體濃度異常，所以公園立即封閉了健行步道。"
  },
  {
    "word": "absolute",
    "pos": "adj.",
    "cn_def": "絕對的；完全的",
    "en_def": "complete and total",
    "sentence": "The cave was in {{BLANK}} darkness when we turned off our torches, and we could not even see our own hands.",
    "cn": "當我們關掉手電筒時，洞穴裡一片完全的黑暗，而我們甚至看不到自己的手。"
  },
  {
    "word": "accumulation",
    "pos": "n.",
    "cn_def": "累積",
    "en_def": "a gradual increase in amount",
    "sentence": "The {{BLANK}} of pressure along the fault worries scientists, because it may be released in a sudden large earthquake.",
    "cn": "斷層沿線壓力的累積讓科學家很擔心，因為它可能在一場突然的大地震中釋放出來。"
  },
  {
    "word": "adjustment",
    "pos": "n.",
    "cn_def": "調整",
    "en_def": "a small change made to improve something",
    "sentence": "The pilot made a small {{BLANK}} to the spacecraft's path, and it entered the moon's orbit perfectly.",
    "cn": "駕駛員對太空船的航道做了一個小小的調整，而它完美地進入了月球軌道。"
  },
  {
    "word": "alteration",
    "pos": "n.",
    "cn_def": "改變；修改",
    "en_def": "a change in something",
    "sentence": "The architect made an {{BLANK}} to the design after the earthquake, so the new building would be much stronger.",
    "cn": "地震後建築師對設計做了修改，讓新建築會堅固得多。"
  },
  {
    "word": "analytical",
    "pos": "adj.",
    "cn_def": "分析的",
    "en_def": "using careful, logical thinking to examine things",
    "sentence": "Good scientists need strong {{BLANK}} skills, because they must make sense of huge amounts of data.",
    "cn": "優秀的科學家需要很強的分析能力，因為他們必須理解大量的數據。"
  },
  {
    "word": "annually",
    "pos": "adv.",
    "cn_def": "每年",
    "en_def": "once every year",
    "sentence": "The meteor shower appears {{BLANK}} in August, so many families plan camping trips to watch it.",
    "cn": "那場流星雨每年八月都會出現，所以許多家庭會計畫露營去觀賞。"
  },
  {
    "word": "characterise",
    "pos": "v.",
    "cn_def": "以……為特徵",
    "en_def": "to be a typical quality of something",
    "sentence": "Steep mountains and short rivers {{BLANK}} the landscape of Taiwan, so floods can happen very quickly after heavy rain.",
    "cn": "陡峭的山和短促的河流是臺灣地貌的特徵，所以大雨過後洪水可能很快就發生。"
  },
  {
    "word": "characteristic",
    "pos": "n.",
    "cn_def": "特徵",
    "en_def": "a typical feature or quality",
    "sentence": "One {{BLANK}} of Mars is its red dust, and this colour comes from rusty iron in the soil.",
    "cn": "火星的一個特徵是它的紅色塵土，而這種顏色來自土壤中生鏽的鐵。"
  },
  {
    "word": "coherence",
    "pos": "n.",
    "cn_def": "連貫性",
    "en_def": "the quality of being logical and well organised",
    "sentence": "Our teacher praised the {{BLANK}} of my report, because each paragraph led clearly to the next one.",
    "cn": "老師稱讚我報告的連貫性，因為每一段都清楚地銜接到下一段。"
  },
  {
    "word": "comparative",
    "pos": "adj.",
    "cn_def": "比較的",
    "en_def": "involving comparing two or more things",
    "sentence": "We did a {{BLANK}} study of Mars and Earth, and we found that both planets once had rivers and lakes.",
    "cn": "我們做了一項火星與地球的比較研究，而我們發現兩顆行星都曾經有河流和湖泊。"
  },
  {
    "word": "complexity",
    "pos": "n.",
    "cn_def": "複雜性",
    "en_def": "the state of having many connected parts",
    "sentence": "The {{BLANK}} of the mission was huge, so thousands of engineers worked together for more than ten years.",
    "cn": "這項任務的複雜性非常高，所以數千名工程師合作了十多年。"
  },
  {
    "word": "computation",
    "pos": "n.",
    "cn_def": "計算",
    "en_def": "the process of calculating",
    "sentence": "Early space missions relied on {{BLANK}} done by hand, but today powerful computers do the work in seconds.",
    "cn": "早期的太空任務仰賴人工計算，但今天強大的電腦在幾秒鐘內就能完成這些工作。"
  },
  {
    "word": "conception",
    "pos": "n.",
    "cn_def": "概念；觀念",
    "en_def": "an idea or understanding of something",
    "sentence": "Ancient people had a very different {{BLANK}} of the universe, and many believed the Earth was at its centre.",
    "cn": "古代人對宇宙有著非常不同的觀念，而許多人相信地球位於宇宙中心。"
  },
  {
    "word": "confirmation",
    "pos": "n.",
    "cn_def": "證實",
    "en_def": "a statement or proof that something is true",
    "sentence": "The team waited for {{BLANK}} that the lander had arrived safely, and the room exploded with joy when it came.",
    "cn": "團隊等待登陸器安全抵達的證實，而當消息傳來時整個房間充滿了歡呼。"
  },
  {
    "word": "considerably",
    "pos": "adv.",
    "cn_def": "相當地；大大地",
    "en_def": "much; a lot",
    "sentence": "The new telescope is {{BLANK}} more powerful than the old one, so astronomers can now see galaxies that were invisible before.",
    "cn": "新的望遠鏡比舊的強大得多，所以天文學家現在可以看到以前看不見的星系。"
  },
  {
    "word": "contradiction",
    "pos": "n.",
    "cn_def": "矛盾",
    "en_def": "a situation where two facts cannot both be true",
    "sentence": "There was a clear {{BLANK}} between the two reports, so the scientists checked the data again to find the mistake.",
    "cn": "兩份報告之間有明顯的矛盾，所以科學家再次檢查數據以找出錯誤。"
  },
  {
    "word": "contribution",
    "pos": "n.",
    "cn_def": "貢獻",
    "en_def": "something you give or do to help",
    "sentence": "Her {{BLANK}} to earthquake research was huge, and many of today's safety rules are based on her work.",
    "cn": "她對地震研究的貢獻非常大，而今天許多安全規定都是根據她的研究制定的。"
  },
  {
    "word": "convincing",
    "pos": "adj.",
    "cn_def": "令人信服的",
    "en_def": "making you believe that something is true",
    "sentence": "The photos from the rover were {{BLANK}} evidence of ancient rivers, so even doubtful scientists changed their minds.",
    "cn": "探測車拍的照片是古代河流存在的令人信服的證據，所以即使是抱持懷疑的科學家也改變了看法。"
  },
  {
    "word": "credibility",
    "pos": "n.",
    "cn_def": "可信度",
    "en_def": "the quality of being trusted and believed",
    "sentence": "The website lost its {{BLANK}} after it shared a fake earthquake warning, and many readers stopped visiting it.",
    "cn": "那個網站分享了一則假的地震警報後失去了可信度，而許多讀者不再造訪它。"
  },
  {
    "word": "detectable",
    "pos": "adj.",
    "cn_def": "可偵測的",
    "en_def": "able to be noticed or found",
    "sentence": "The earthquake was so small that it was only {{BLANK}} by machines, and nobody in the city felt anything.",
    "cn": "那場地震小到只有機器偵測得到，而城市裡沒有人感覺到任何震動。"
  },
  {
    "word": "disposal",
    "pos": "n.",
    "cn_def": "處置；處理",
    "en_def": "the act of getting rid of something",
    "sentence": "The safe {{BLANK}} of old satellites is a growing problem, because broken ones can crash into working ones.",
    "cn": "舊人造衛星的安全處置是一個日益嚴重的問題，因為損壞的衛星可能撞上運作中的衛星。"
  },
  {
    "word": "distribution",
    "pos": "n.",
    "cn_def": "分布",
    "en_def": "the way something is spread over an area",
    "sentence": "The map shows the {{BLANK}} of volcanoes around the world, and most of them are found along plate boundaries.",
    "cn": "這張地圖顯示世界各地火山的分布，而它們大多位於板塊邊界沿線。"
  },
  {
    "word": "dominance",
    "pos": "n.",
    "cn_def": "主導地位；優勢",
    "en_def": "the state of being the most powerful",
    "sentence": "The USA's {{BLANK}} in space ended when other countries built their own rockets, so the field is now much more competitive.",
    "cn": "當其他國家建造自己的火箭後，美國在太空領域的主導地位就結束了，所以這個領域現在競爭激烈得多。"
  }
];

const MCQS = [
  {
    "q": "Other scientists questioned the _____ of his results, because nobody else could repeat the experiment.",
    "options": [
      "validity",
      "asteroid",
      "slope",
      "indicator"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The sensors detected _____ gas levels near the crater, so the park closed the hiking trail immediately.",
    "options": [
      "celestial",
      "elongated",
      "undetected",
      "abnormal"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The cave was in _____ darkness when we turned off our torches, and we could not even see our own hands.",
    "options": [
      "numerical",
      "demonstrable",
      "absolute",
      "debatable"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The _____ of pressure along the fault worries scientists, because it may be released in a sudden large earthquake.",
    "options": [
      "Pluto",
      "accumulation",
      "slope",
      "canyon"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The pilot made a small _____ to the spacecraft's path, and it entered the moon's orbit perfectly.",
    "options": [
      "cavern",
      "canyon",
      "quartz",
      "adjustment"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The architect made an _____ to the design after the earthquake, so the new building would be much stronger.",
    "options": [
      "shockwave",
      "aberration",
      "alteration",
      "disturbance"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Good scientists need strong _____ skills, because they must make sense of huge amounts of data.",
    "options": [
      "analytical",
      "planetary",
      "geological",
      "perpendicular"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The meteor shower appears _____ in August, so many families plan camping trips to watch it.",
    "options": [
      "inevitably",
      "annually",
      "exceedingly",
      "deliberately"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Steep mountains and short rivers _____ the landscape of Taiwan, so floods can happen very quickly after heavy rain.",
    "options": [
      "orbit",
      "radiate",
      "characterise",
      "penetrate"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "One _____ of Mars is its red dust, and this colour comes from rusty iron in the soil.",
    "options": [
      "moon",
      "characteristic",
      "Pangaea",
      "spacewalk"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Our teacher praised the _____ of my report, because each paragraph led clearly to the next one.",
    "options": [
      "justification",
      "waterfall",
      "occurrence",
      "coherence"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "We did a _____ study of Mars and Earth, and we found that both planets once had rivers and lakes.",
    "options": [
      "comparative",
      "dramatic",
      "tremendous",
      "distant"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The _____ of the mission was huge, so thousands of engineers worked together for more than ten years.",
    "options": [
      "spacewalk",
      "astrophysics",
      "indicator",
      "complexity"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Early space missions relied on _____ done by hand, but today powerful computers do the work in seconds.",
    "options": [
      "computation",
      "airlock",
      "justification",
      "light-year"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Ancient people had a very different _____ of the universe, and many believed the Earth was at its centre.",
    "options": [
      "Neptune",
      "conception",
      "verification",
      "landform"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The team waited for _____ that the lander had arrived safely, and the room exploded with joy when it came.",
    "options": [
      "visibility",
      "requirement",
      "confirmation",
      "floodplain"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The new telescope is _____ more powerful than the old one, so astronomers can now see galaxies that were invisible before.",
    "options": [
      "radically",
      "immensely",
      "exponentially",
      "considerably"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "There was a clear _____ between the two reports, so the scientists checked the data again to find the mistake.",
    "options": [
      "contradiction",
      "formation",
      "modification",
      "topography"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Her _____ to earthquake research was huge, and many of today's safety rules are based on her work.",
    "options": [
      "granite",
      "contribution",
      "expansion",
      "basalt"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The photos from the rover were _____ evidence of ancient rivers, so even doubtful scientists changed their minds.",
    "options": [
      "debatable",
      "discernible",
      "convincing",
      "geological"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The website lost its _____ after it shared a fake earthquake warning, and many readers stopped visiting it.",
    "options": [
      "inference",
      "credibility",
      "reconstruction",
      "crystal"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The earthquake was so small that it was only _____ by machines, and nobody in the city felt anything.",
    "options": [
      "weightless",
      "intangible",
      "intriguing",
      "detectable"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The safe _____ of old satellites is a growing problem, because broken ones can crash into working ones.",
    "options": [
      "topography",
      "magma",
      "disposal",
      "equator"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The map shows the _____ of volcanoes around the world, and most of them are found along plate boundaries.",
    "options": [
      "distribution",
      "expansion",
      "alignment",
      "equation"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The USA's _____ in space ended when other countries built their own rockets, so the field is now much more competitive.",
    "options": [
      "spacecraft",
      "dominance",
      "sinkhole",
      "rover"
    ],
    "answer": 1,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "validity": {
    "pos": "n.",
    "en_def": "the quality of being correct or acceptable",
    "cn_def": "正確性；有效性"
  },
  "abnormal": {
    "pos": "adj.",
    "en_def": "different from what is usual, often in a worrying way",
    "cn_def": "異常的"
  },
  "absolute": {
    "pos": "adj.",
    "en_def": "complete and total",
    "cn_def": "絕對的；完全的"
  },
  "accumulation": {
    "pos": "n.",
    "en_def": "a gradual increase in amount",
    "cn_def": "累積"
  },
  "adjustment": {
    "pos": "n.",
    "en_def": "a small change made to improve something",
    "cn_def": "調整"
  },
  "alteration": {
    "pos": "n.",
    "en_def": "a change in something",
    "cn_def": "改變；修改"
  },
  "analytical": {
    "pos": "adj.",
    "en_def": "using careful, logical thinking to examine things",
    "cn_def": "分析的"
  },
  "annually": {
    "pos": "adv.",
    "en_def": "once every year",
    "cn_def": "每年"
  },
  "characterise": {
    "pos": "v.",
    "en_def": "to be a typical quality of something",
    "cn_def": "以……為特徵"
  },
  "characteristic": {
    "pos": "n.",
    "en_def": "a typical feature or quality",
    "cn_def": "特徵"
  },
  "coherence": {
    "pos": "n.",
    "en_def": "the quality of being logical and well organised",
    "cn_def": "連貫性"
  },
  "comparative": {
    "pos": "adj.",
    "en_def": "involving comparing two or more things",
    "cn_def": "比較的"
  },
  "complexity": {
    "pos": "n.",
    "en_def": "the state of having many connected parts",
    "cn_def": "複雜性"
  },
  "computation": {
    "pos": "n.",
    "en_def": "the process of calculating",
    "cn_def": "計算"
  },
  "conception": {
    "pos": "n.",
    "en_def": "an idea or understanding of something",
    "cn_def": "概念；觀念"
  },
  "confirmation": {
    "pos": "n.",
    "en_def": "a statement or proof that something is true",
    "cn_def": "證實"
  },
  "considerably": {
    "pos": "adv.",
    "en_def": "much; a lot",
    "cn_def": "相當地；大大地"
  },
  "contradiction": {
    "pos": "n.",
    "en_def": "a situation where two facts cannot both be true",
    "cn_def": "矛盾"
  },
  "contribution": {
    "pos": "n.",
    "en_def": "something you give or do to help",
    "cn_def": "貢獻"
  },
  "convincing": {
    "pos": "adj.",
    "en_def": "making you believe that something is true",
    "cn_def": "令人信服的"
  },
  "credibility": {
    "pos": "n.",
    "en_def": "the quality of being trusted and believed",
    "cn_def": "可信度"
  },
  "detectable": {
    "pos": "adj.",
    "en_def": "able to be noticed or found",
    "cn_def": "可偵測的"
  },
  "disposal": {
    "pos": "n.",
    "en_def": "the act of getting rid of something",
    "cn_def": "處置；處理"
  },
  "distribution": {
    "pos": "n.",
    "en_def": "the way something is spread over an area",
    "cn_def": "分布"
  },
  "dominance": {
    "pos": "n.",
    "en_def": "the state of being the most powerful",
    "cn_def": "主導地位；優勢"
  },
  "asteroid": {
    "pos": "n.",
    "en_def": "a large rock that moves around the sun",
    "cn_def": "小行星"
  },
  "slope": {
    "pos": "n.",
    "en_def": "ground that goes up or down at an angle",
    "cn_def": "斜坡"
  },
  "indicator": {
    "pos": "n.",
    "en_def": "a sign that shows the state of something",
    "cn_def": "指標"
  },
  "celestial": {
    "pos": "adj.",
    "en_def": "in or related to the sky or outer space",
    "cn_def": "天體的；天空的"
  },
  "elongated": {
    "pos": "adj.",
    "en_def": "longer than usual and thin",
    "cn_def": "拉長的；細長的"
  },
  "undetected": {
    "pos": "adj.",
    "en_def": "not noticed or discovered",
    "cn_def": "未被察覺的"
  },
  "numerical": {
    "pos": "adj.",
    "en_def": "expressed in numbers",
    "cn_def": "數字的"
  },
  "demonstrable": {
    "pos": "adj.",
    "en_def": "able to be shown or proved clearly",
    "cn_def": "可證明的"
  },
  "debatable": {
    "pos": "adj.",
    "en_def": "not certain and open to discussion",
    "cn_def": "有爭議的"
  },
  "pluto": {
    "pos": "n.",
    "en_def": "a small icy dwarf planet far from the sun",
    "cn_def": "冥王星"
  },
  "canyon": {
    "pos": "n.",
    "en_def": "a deep valley with steep sides, usually cut by a river",
    "cn_def": "峽谷"
  },
  "cavern": {
    "pos": "n.",
    "en_def": "a large cave",
    "cn_def": "大洞穴"
  },
  "quartz": {
    "pos": "n.",
    "en_def": "a hard clear or white mineral",
    "cn_def": "石英"
  },
  "shockwave": {
    "pos": "n.",
    "en_def": "a strong wave of energy that travels through the ground or air",
    "cn_def": "震波"
  },
  "aberration": {
    "pos": "n.",
    "en_def": "something unusual that is different from what is normal",
    "cn_def": "異常；偏差"
  },
  "disturbance": {
    "pos": "n.",
    "en_def": "something that interrupts normal conditions",
    "cn_def": "干擾；擾動"
  },
  "planetary": {
    "pos": "adj.",
    "en_def": "related to planets",
    "cn_def": "行星的"
  },
  "geological": {
    "pos": "adj.",
    "en_def": "related to rocks and the history of the Earth",
    "cn_def": "地質的"
  },
  "perpendicular": {
    "pos": "adj.",
    "en_def": "at an angle of 90 degrees to something",
    "cn_def": "垂直的"
  },
  "inevitably": {
    "pos": "adv.",
    "en_def": "in a way that cannot be avoided",
    "cn_def": "不可避免地"
  },
  "exceedingly": {
    "pos": "adv.",
    "en_def": "extremely; very",
    "cn_def": "極其；非常"
  },
  "deliberately": {
    "pos": "adv.",
    "en_def": "on purpose",
    "cn_def": "故意地；刻意地"
  },
  "orbit": {
    "pos": "v.",
    "en_def": "to move around a planet or star in a curved path",
    "cn_def": "繞軌道運行"
  },
  "radiate": {
    "pos": "v.",
    "en_def": "to send out heat or light in all directions",
    "cn_def": "散發；輻射"
  },
  "penetrate": {
    "pos": "v.",
    "en_def": "to go into or through something",
    "cn_def": "穿透"
  },
  "moon": {
    "pos": "n.",
    "en_def": "a natural object that moves around a planet",
    "cn_def": "衛星；月球"
  },
  "pangaea": {
    "pos": "n.",
    "en_def": "the supercontinent that existed about 300 million years ago",
    "cn_def": "盤古大陸"
  },
  "spacewalk": {
    "pos": "n.",
    "en_def": "time an astronaut spends working outside a spacecraft",
    "cn_def": "太空漫步"
  },
  "justification": {
    "pos": "n.",
    "en_def": "a good reason for doing something",
    "cn_def": "正當理由"
  },
  "waterfall": {
    "pos": "n.",
    "en_def": "water falling from a high place, such as a cliff",
    "cn_def": "瀑布"
  },
  "occurrence": {
    "pos": "n.",
    "en_def": "something that happens",
    "cn_def": "發生的事；事件"
  },
  "dramatic": {
    "pos": "adj.",
    "en_def": "sudden and very noticeable",
    "cn_def": "劇烈的；戲劇性的"
  },
  "tremendous": {
    "pos": "adj.",
    "en_def": "very great in size or amount",
    "cn_def": "巨大的；極大的"
  },
  "distant": {
    "pos": "adj.",
    "en_def": "far away",
    "cn_def": "遙遠的"
  },
  "astrophysics": {
    "pos": "n.",
    "en_def": "the science of how stars and galaxies work",
    "cn_def": "天體物理學"
  },
  "airlock": {
    "pos": "n.",
    "en_def": "a small sealed room for moving between areas with different air pressure",
    "cn_def": "氣閘艙"
  },
  "light-year": {
    "pos": "n.",
    "en_def": "the distance light travels in one year",
    "cn_def": "光年"
  },
  "neptune": {
    "pos": "n.",
    "en_def": "the eighth and farthest planet from the sun",
    "cn_def": "海王星"
  },
  "verification": {
    "pos": "n.",
    "en_def": "the process of checking that something is true",
    "cn_def": "核實；查證"
  },
  "landform": {
    "pos": "n.",
    "en_def": "a natural shape on the Earth's surface, such as a hill",
    "cn_def": "地形"
  },
  "visibility": {
    "pos": "n.",
    "en_def": "how far or how well you can see",
    "cn_def": "能見度"
  },
  "requirement": {
    "pos": "n.",
    "en_def": "something that is needed or necessary",
    "cn_def": "必要條件；要求"
  },
  "floodplain": {
    "pos": "n.",
    "en_def": "flat land next to a river that floods sometimes",
    "cn_def": "氾濫平原"
  },
  "radically": {
    "pos": "adv.",
    "en_def": "in a very big and important way",
    "cn_def": "徹底地；根本地"
  },
  "immensely": {
    "pos": "adv.",
    "en_def": "extremely; very much",
    "cn_def": "極其；非常"
  },
  "exponentially": {
    "pos": "adv.",
    "en_def": "increasing faster and faster",
    "cn_def": "呈指數地；急遽地"
  },
  "formation": {
    "pos": "n.",
    "en_def": "the process by which something is made",
    "cn_def": "形成"
  },
  "modification": {
    "pos": "n.",
    "en_def": "a small change to improve something",
    "cn_def": "修改；改良"
  },
  "topography": {
    "pos": "n.",
    "en_def": "the shape and height of the land in an area",
    "cn_def": "地形（起伏）"
  },
  "granite": {
    "pos": "n.",
    "en_def": "a very hard grey or pink rock",
    "cn_def": "花崗岩"
  },
  "expansion": {
    "pos": "n.",
    "en_def": "the process of becoming larger",
    "cn_def": "擴張；膨脹"
  },
  "basalt": {
    "pos": "n.",
    "en_def": "a dark rock formed from cooled lava",
    "cn_def": "玄武岩"
  },
  "discernible": {
    "pos": "adj.",
    "en_def": "able to be seen or noticed, but not easily",
    "cn_def": "可察覺的"
  },
  "inference": {
    "pos": "n.",
    "en_def": "a conclusion based on evidence",
    "cn_def": "推論；推斷"
  },
  "reconstruction": {
    "pos": "n.",
    "en_def": "building something again after damage",
    "cn_def": "重建"
  },
  "crystal": {
    "pos": "n.",
    "en_def": "a solid with a regular shape and flat sides",
    "cn_def": "晶體；水晶"
  },
  "weightless": {
    "pos": "adj.",
    "en_def": "having no weight, so you float",
    "cn_def": "失重的"
  },
  "intangible": {
    "pos": "adj.",
    "en_def": "not physical, but still real",
    "cn_def": "無形的"
  },
  "intriguing": {
    "pos": "adj.",
    "en_def": "very interesting because it is unusual",
    "cn_def": "引人入勝的；耐人尋味的"
  },
  "magma": {
    "pos": "n.",
    "en_def": "hot liquid rock under the Earth's surface",
    "cn_def": "岩漿"
  },
  "equator": {
    "pos": "n.",
    "en_def": "an imaginary line around the middle of the Earth",
    "cn_def": "赤道"
  },
  "alignment": {
    "pos": "n.",
    "en_def": "the arrangement of things in a straight line",
    "cn_def": "排成一直線；對齊"
  },
  "equation": {
    "pos": "n.",
    "en_def": "a mathematical statement that two things are equal",
    "cn_def": "方程式"
  },
  "spacecraft": {
    "pos": "n.",
    "en_def": "a vehicle that travels in space",
    "cn_def": "太空船"
  },
  "sinkhole": {
    "pos": "n.",
    "en_def": "a hole that suddenly opens in the ground",
    "cn_def": "天坑；地陷"
  },
  "rover": {
    "pos": "n.",
    "en_def": "a vehicle that drives on the surface of another planet",
    "cn_def": "探測車"
  }
};

const EXTRA_GLOSSES = {};
