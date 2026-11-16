// Topic 18 Subunit 15 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T18 S15 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "can't see the wood for the trees",
    "pos": "phr.",
    "cn_def": "見樹不見林",
    "en_def": "to miss the main point because of too many details",
    "sentence": "The manager spent hours on small spelling mistakes in the report, so he {{BLANK}} and missed the big problem.",
    "cn": "經理花了好幾個小時在報告的小拼字錯誤上,所以他見樹不見林,漏掉了大問題。"
  },
  {
    "word": "out of the woods",
    "pos": "adj.phr.",
    "cn_def": "脫離險境",
    "en_def": "no longer in danger or difficulty",
    "sentence": "The old oak tree is recovering after the disease, but the arborist says it is not {{BLANK}} yet, so we must keep watching it.",
    "cn": "那棵老橡樹在生病後正在恢復,但樹藝師說它還沒有脫離險境,所以我們必須持續觀察。"
  },
  {
    "word": "turn over a new leaf",
    "pos": "v.phr.",
    "cn_def": "改過自新;重新開始",
    "en_def": "to change your behaviour and start to act better",
    "sentence": "Tom used to throw rubbish in the park, but after the clean-up day he decided to {{BLANK}} and he now recycles everything.",
    "cn": "湯姆以前會在公園亂丟垃圾,但在淨灘日之後他決定改過自新,現在他什麼都回收。"
  },
  {
    "word": "nip something in the bud",
    "pos": "v.phr.",
    "cn_def": "防患於未然;及早制止",
    "en_def": "to stop a problem early before it grows bigger",
    "sentence": "The rangers noticed the invasive plant problem early, so they decided to {{BLANK}} before it spread around the lake.",
    "cn": "管理員及早注意到入侵植物的問題,所以他們決定在它擴散到湖邊之前就及早制止。"
  },
  {
    "word": "bark up the wrong tree",
    "pos": "v.phr.",
    "cn_def": "找錯方向;錯怪人",
    "en_def": "to look for an answer in the wrong place",
    "sentence": "The police thought the farmer had started the fire, but they were {{BLANK}}, because a camper was responsible.",
    "cn": "警方以為是農夫引發了火災,但他們找錯對象了,因為該負責的是一名露營者。"
  },
  {
    "word": "branch out",
    "pos": "v.phr.",
    "cn_def": "擴展;拓展新領域",
    "en_def": "to start doing something new and different",
    "sentence": "The small tea farm decided to {{BLANK}} into forest tours, and now visitors come to learn about the trees as well as the tea.",
    "cn": "那間小茶園決定拓展到森林導覽,現在遊客不只來學茶,也來認識樹木。"
  },
  {
    "word": "put down roots",
    "pos": "v.phr.",
    "cn_def": "落地生根;定居",
    "en_def": "to settle and make a permanent home somewhere",
    "sentence": "My parents moved around a lot when they were young, but they finally {{BLANK}} in Hualien, and they have lived there for twenty years.",
    "cn": "我父母年輕時經常搬家,但最終在花蓮落地生根,他們已經在那裡住了二十年。"
  },
  {
    "word": "take root",
    "pos": "v.phr.",
    "cn_def": "生根;紮根",
    "en_def": "to become established and begin to grow",
    "sentence": "The idea of a car-free Sunday slowly began to {{BLANK}} in our town, and now hundreds of families cycle together every week.",
    "cn": "無車星期日的想法在我們鎮上慢慢紮根,現在每週有數百個家庭一起騎自行車。"
  },
  {
    "word": "the root cause",
    "pos": "n.phr.",
    "cn_def": "根本原因",
    "en_def": "the main reason behind a problem",
    "sentence": "Experts say that poverty is {{BLANK}} of forest loss in some countries, because poor families need land to grow food.",
    "cn": "專家說在某些國家,貧窮是森林流失的根本原因,因為貧困的家庭需要土地種植糧食。"
  },
  {
    "word": "money doesn't grow on trees",
    "pos": "phr.",
    "cn_def": "錢不是從天上掉下來的",
    "en_def": "money is limited and must be used carefully",
    "sentence": "I wanted a new bike, but my mother said, \"{{BLANK}},\" so I started saving my pocket money.",
    "cn": "我想要一台新腳踏車,但媽媽說:「錢不是從樹上長出來的」,所以我開始存零用錢。"
  },
  {
    "word": "a late bloomer",
    "pos": "n.phr.",
    "cn_def": "大器晚成的人",
    "en_def": "a person who becomes successful later than others",
    "sentence": "My brother was {{BLANK}}, because he did badly at school but became a top scientist in his thirties.",
    "cn": "我哥哥是個大器晚成的人,因為他在學校成績不好,卻在三十多歲時成為頂尖科學家。"
  },
  {
    "word": "stop and smell the roses",
    "pos": "v.phr.",
    "cn_def": "放慢腳步享受生活",
    "en_def": "to relax and enjoy life instead of always being busy",
    "sentence": "My father works very hard every day, so on holidays my mother reminds him to {{BLANK}}.",
    "cn": "我爸爸每天都很努力工作,所以假日時媽媽會提醒他放慢腳步享受生活。"
  },
  {
    "word": "in full bloom",
    "pos": "adj.phr.",
    "cn_def": "盛開",
    "en_def": "with all the flowers open",
    "sentence": "The cherry trees were {{BLANK}} when we visited Alishan, so the park was crowded with tourists.",
    "cn": "我們去阿里山時櫻花正盛開,所以園區裡擠滿了遊客。"
  },
  {
    "word": "go out on a limb",
    "pos": "v.phr.",
    "cn_def": "冒險;孤注一擲",
    "en_def": "to say or do something risky that others may not support",
    "sentence": "The young scientist {{BLANK}} by saying the old forest could be saved, but later her idea proved correct.",
    "cn": "那位年輕科學家冒險主張老森林可以被拯救,但後來她的想法被證明是正確的。"
  },
  {
    "word": "get bogged down",
    "pos": "v.phr.",
    "cn_def": "陷入困境;停滯不前",
    "en_def": "to become stuck and unable to make progress",
    "sentence": "The meeting {{BLANK}} in small details about the budget, so we never discussed the main plan for the park.",
    "cn": "會議陷入預算的細節而停滯不前,所以我們始終沒有討論公園的主要計畫。"
  },
  {
    "word": "muddy the waters",
    "pos": "v.phr.",
    "cn_def": "把水攪渾;混淆視聽",
    "en_def": "to make a situation more confusing",
    "sentence": "The company's new report only {{BLANK}}, because it used different numbers from the government's study.",
    "cn": "那家公司的新報告只是混淆視聽,因為它用了和政府研究不同的數據。"
  },
  {
    "word": "plant the seeds of",
    "pos": "v.phr.",
    "cn_def": "播下……的種子",
    "en_def": "to start an idea or feeling that will grow later",
    "sentence": "A school trip to the wetland {{BLANK}} her love of nature, and she later became a biologist.",
    "cn": "一次到濕地的校外教學播下了她熱愛自然的種子,她後來成為一名生物學家。"
  },
  {
    "word": "the grass is always greener on the other side",
    "pos": "phr.",
    "cn_def": "這山望著那山高;外國的月亮比較圓",
    "en_def": "other people's situations always seem better than yours",
    "sentence": "Jason wanted to move to another city for a better job, but his friend reminded him that {{BLANK}}.",
    "cn": "傑森想搬到另一個城市找更好的工作,但他的朋友提醒他這山望著那山高。"
  },
  {
    "word": "a thorn in one's side",
    "pos": "n.phr.",
    "cn_def": "眼中釘;心頭之患",
    "en_def": "a person or thing that keeps causing trouble",
    "sentence": "The noisy factory near the wetland has been {{BLANK}} for years, so the villagers are happy that it will close.",
    "cn": "濕地附近那間吵雜的工廠多年來一直是村民的心頭之患,所以村民很高興它即將關閉。"
  },
  {
    "word": "great oaks from little acorns grow",
    "pos": "phr.",
    "cn_def": "萬丈高樓平地起",
    "en_def": "big things can start from small beginnings",
    "sentence": "Our recycling club started with only three students, but {{BLANK}}, and now the whole school takes part.",
    "cn": "我們的回收社一開始只有三名學生,但萬丈高樓平地起,現在全校都參與了。"
  }
];

const MCQS = [
  {
    "q": "The manager spent hours on small spelling mistakes in the report, so he _____ and missed the big problem.",
    "options": [
      "can't see the wood for the trees",
      "great oaks from little acorns grow",
      "money doesn't grow on trees",
      "the grass is always greener on the other side"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The old oak tree is recovering after the disease, but the arborist says it is not _____ yet, so we must keep watching it.",
    "options": [
      "money doesn't grow on trees",
      "out of the woods",
      "mycorrhizal network",
      "the root cause"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Tom used to throw rubbish in the park, but after the clean-up day he decided to _____ and he now recycles everything.",
    "options": [
      "get bogged down",
      "plant the seeds of",
      "nip something in the bud",
      "turn over a new leaf"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The rangers noticed the invasive plant problem early, so they decided to _____ before it spread around the lake.",
    "options": [
      "turn over a new leaf",
      "muddy the waters",
      "nip something in the bud",
      "go out on a limb"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The police thought the farmer had started the fire, but they were _____, because a camper was responsible.",
    "options": [
      "bark up the wrong tree",
      "put down roots",
      "muddy the waters",
      "stop and smell the roses"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The small tea farm decided to _____ into forest tours, and now visitors come to learn about the trees as well as the tea.",
    "options": [
      "stop and smell the roses",
      "muddy the waters",
      "turn over a new leaf",
      "branch out"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "My parents moved around a lot when they were young, but they finally _____ in Hualien, and they have lived there for twenty years.",
    "options": [
      "stop and smell the roses",
      "put down roots",
      "nip something in the bud",
      "bark up the wrong tree"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The idea of a car-free Sunday slowly began to _____ in our town, and now hundreds of families cycle together every week.",
    "options": [
      "turn over a new leaf",
      "get bogged down",
      "take root",
      "plant the seeds of"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Experts say that poverty is _____ of forest loss in some countries, because poor families need land to grow food.",
    "options": [
      "the root cause",
      "ecological succession",
      "old-growth forest",
      "canopy gap"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "I wanted a new bike, but my mother said, \"_____,\" so I started saving my pocket money.",
    "options": [
      "can't see the wood for the trees",
      "the grass is always greener on the other side",
      "money doesn't grow on trees",
      "great oaks from little acorns grow"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "My brother was _____, because he did badly at school but became a top scientist in his thirties.",
    "options": [
      "tree planting",
      "boreal forest",
      "growth ring",
      "a late bloomer"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "My father works very hard every day, so on holidays my mother reminds him to _____.",
    "options": [
      "nip something in the bud",
      "stop and smell the roses",
      "plant the seeds of",
      "put down roots"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The cherry trees were _____ when we visited Alishan, so the park was crowded with tourists.",
    "options": [
      "in full bloom",
      "protected area",
      "cloud forest",
      "money doesn't grow on trees"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The young scientist _____ by saying the old forest could be saved, but later her idea proved correct.",
    "options": [
      "plant the seeds of",
      "put down roots",
      "go out on a limb",
      "get bogged down"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The meeting _____ in small details about the budget, so we never discussed the main plan for the park.",
    "options": [
      "go out on a limb",
      "get bogged down",
      "turn over a new leaf",
      "plant the seeds of"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The company's new report only _____, because it used different numbers from the government's study.",
    "options": [
      "branch out",
      "stop and smell the roses",
      "bark up the wrong tree",
      "muddy the waters"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "A school trip to the wetland _____ her love of nature, and she later became a biologist.",
    "options": [
      "plant the seeds of",
      "go out on a limb",
      "bark up the wrong tree",
      "take root"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Jason wanted to move to another city for a better job, but his friend reminded him that _____.",
    "options": [
      "can't see the wood for the trees",
      "great oaks from little acorns grow",
      "money doesn't grow on trees",
      "the grass is always greener on the other side"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The noisy factory near the wetland has been _____ for years, so the villagers are happy that it will close.",
    "options": [
      "leaf litter",
      "a thorn in one's side",
      "cell wall",
      "water purification"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Our recycling club started with only three students, but _____, and now the whole school takes part.",
    "options": [
      "money doesn't grow on trees",
      "can't see the wood for the trees",
      "great oaks from little acorns grow",
      "the grass is always greener on the other side"
    ],
    "answer": 2,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "can't see the wood for the trees": {
    "pos": "phr.",
    "en_def": "to miss the main point because of too many details",
    "cn_def": "見樹不見林"
  },
  "out of the woods": {
    "pos": "adj.phr.",
    "en_def": "no longer in danger or difficulty",
    "cn_def": "脫離險境"
  },
  "turn over a new leaf": {
    "pos": "v.phr.",
    "en_def": "to change your behaviour and start to act better",
    "cn_def": "改過自新;重新開始"
  },
  "nip something in the bud": {
    "pos": "v.phr.",
    "en_def": "to stop a problem early before it grows bigger",
    "cn_def": "防患於未然;及早制止"
  },
  "bark up the wrong tree": {
    "pos": "v.phr.",
    "en_def": "to look for an answer in the wrong place",
    "cn_def": "找錯方向;錯怪人"
  },
  "branch out": {
    "pos": "v.phr.",
    "en_def": "to start doing something new and different",
    "cn_def": "擴展;拓展新領域"
  },
  "put down roots": {
    "pos": "v.phr.",
    "en_def": "to settle and make a permanent home somewhere",
    "cn_def": "落地生根;定居"
  },
  "take root": {
    "pos": "v.phr.",
    "en_def": "to become established and begin to grow",
    "cn_def": "生根;紮根"
  },
  "the root cause": {
    "pos": "n.phr.",
    "en_def": "the main reason behind a problem",
    "cn_def": "根本原因"
  },
  "money doesn't grow on trees": {
    "pos": "phr.",
    "en_def": "money is limited and must be used carefully",
    "cn_def": "錢不是從天上掉下來的"
  },
  "a late bloomer": {
    "pos": "n.phr.",
    "en_def": "a person who becomes successful later than others",
    "cn_def": "大器晚成的人"
  },
  "stop and smell the roses": {
    "pos": "v.phr.",
    "en_def": "to relax and enjoy life instead of always being busy",
    "cn_def": "放慢腳步享受生活"
  },
  "in full bloom": {
    "pos": "adj.phr.",
    "en_def": "with all the flowers open",
    "cn_def": "盛開"
  },
  "go out on a limb": {
    "pos": "v.phr.",
    "en_def": "to say or do something risky that others may not support",
    "cn_def": "冒險;孤注一擲"
  },
  "get bogged down": {
    "pos": "v.phr.",
    "en_def": "to become stuck and unable to make progress",
    "cn_def": "陷入困境;停滯不前"
  },
  "muddy the waters": {
    "pos": "v.phr.",
    "en_def": "to make a situation more confusing",
    "cn_def": "把水攪渾;混淆視聽"
  },
  "plant the seeds of": {
    "pos": "v.phr.",
    "en_def": "to start an idea or feeling that will grow later",
    "cn_def": "播下……的種子"
  },
  "the grass is always greener on the other side": {
    "pos": "phr.",
    "en_def": "other people's situations always seem better than yours",
    "cn_def": "這山望著那山高;外國的月亮比較圓"
  },
  "a thorn in one's side": {
    "pos": "n.phr.",
    "en_def": "a person or thing that keeps causing trouble",
    "cn_def": "眼中釘;心頭之患"
  },
  "great oaks from little acorns grow": {
    "pos": "phr.",
    "en_def": "big things can start from small beginnings",
    "cn_def": "萬丈高樓平地起"
  },
  "mycorrhizal network": {
    "pos": "n.phr.",
    "en_def": "underground fungi that connect the roots of trees",
    "cn_def": "菌根網絡"
  },
  "ecological succession": {
    "pos": "n.phr.",
    "en_def": "the slow change in plants and animals in a place over time",
    "cn_def": "生態演替"
  },
  "old-growth forest": {
    "pos": "n.phr.",
    "en_def": "a very old forest that has never been cut down",
    "cn_def": "原始林;老齡林"
  },
  "canopy gap": {
    "pos": "n.phr.",
    "en_def": "an opening in the top layer of a forest",
    "cn_def": "林冠孔隙"
  },
  "tree planting": {
    "pos": "n.phr.",
    "en_def": "the activity of putting young trees into the ground",
    "cn_def": "植樹"
  },
  "boreal forest": {
    "pos": "n.phr.",
    "en_def": "the huge cold forest in the far north of the world",
    "cn_def": "北方針葉林"
  },
  "growth ring": {
    "pos": "n.phr.",
    "en_def": "a circle inside a tree trunk that shows one year of growth",
    "cn_def": "年輪"
  },
  "protected area": {
    "pos": "n.phr.",
    "en_def": "a place where nature is protected by law",
    "cn_def": "保護區"
  },
  "cloud forest": {
    "pos": "n.phr.",
    "en_def": "a wet mountain forest often covered in cloud",
    "cn_def": "雲霧林"
  },
  "leaf litter": {
    "pos": "n.phr.",
    "en_def": "dead leaves lying on the ground",
    "cn_def": "落葉層"
  },
  "cell wall": {
    "pos": "n.phr.",
    "en_def": "the strong outer layer around a plant cell",
    "cn_def": "細胞壁"
  },
  "water purification": {
    "pos": "n.phr.",
    "en_def": "the process of making water clean",
    "cn_def": "水質淨化"
  }
};

const EXTRA_GLOSSES = {};
