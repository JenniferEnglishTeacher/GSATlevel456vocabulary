// Part 1 Quiz Data: bloody – communication
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 2-1 - bloody – communication",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "bloody",
    "pos": "adj.",
    "cn_def": "流血的；血腥殘酷的",
    "en_def": "covered with, stained with, or characterized by much bloodshed and violence",
    "sentence": "The two neighboring countries fought a long and {{BLANK}} war that caused thousands of innocent civilian casualties.",
    "cn": "這兩個相鄰的國家進行了一場漫長且血腥殘酷的戰爭，造成了數千名無辜平民的傷亡。"
  },
  {
    "word": "blood",
    "pos": "n.",
    "cn_def": "血液；血統（不可數）",
    "en_def": "the red fluid that circulates through the heart, arteries, and veins",
    "sentence": "Healthy citizens are warmly encouraged to donate {{BLANK}} at the local medical center to help save lives in emergencies.",
    "cn": "當局熱情鼓勵健康的公民到當地醫療中心捐血，以協助在緊急情況中拯救生命。"
  },
  {
    "word": "bleeding",
    "pos": "v.",
    "cn_def": "流血；失血（動詞）",
    "en_def": "to lose blood from the body through a cut or injury",
    "sentence": "The deep cut on Jerry's hand would not stop {{BLANK}} after he accidentally broke the glass pitcher.",
    "cn": "在傑瑞不小心打破玻璃水壺後，他手上深長的傷口便血流不止持續流血。"
  },
  {
    "word": "bled the small company dry",
    "pos": "v.phr.",
    "cn_def": "榨乾某人的血汗錢；使某人傾家蕩產",
    "en_def": "to drain someone of all their money, financial resources, or strength",
    "sentence": "The corrupt business manager made several risky bad investments that completely {{BLANK}}.",
    "cn": "那名貪腐的業務經理進行了幾次高風險的不良投資，徹底榨乾掏空了這家小公司的所有資產。"
  },
  {
    "word": "brick",
    "pos": "n.",
    "cn_def": "磚塊；磚（可數）",
    "en_def": "a small rectangular block of fired clay used extensively in building structures",
    "sentence": "Most of the historic residential houses built during the nineteenth century were constructed out of sturdy red {{BLANK}}.",
    "cn": "十九世紀建造的大多數歷史悠久的住宅都是由堅固的紅磚砌成。"
  },
  {
    "word": "brunch",
    "pos": "n.",
    "cn_def": "早午餐（不可數/可數）",
    "en_def": "a late morning meal eaten instead of both breakfast and lunch",
    "sentence": "Rachel loves to wake up late on Sunday mornings and have a relaxing {{BLANK}} with her mother.",
    "cn": "瑞秋喜歡在星期天早晨睡晚一點，然後和母親一起享用輕鬆的早午餐。"
  },
  {
    "word": "bucket",
    "pos": "n.",
    "cn_def": "水桶；提桶（可數）",
    "en_def": "a roughly cylindrical open container with a handle, used for carrying liquids",
    "sentence": "Tom filled the large plastic {{BLANK}} with warm water and soap powder so that he could mop the kitchen floor.",
    "cn": "湯米在大塑膠水桶裡裝滿了溫水和肥皂粉，以便他能拖乾淨廚房地板。"
  },
  {
    "word": "a drop in the bucket",
    "pos": "n.phr.",
    "cn_def": "九牛一毛；滄海一粟；微不足道",
    "en_def": "a very tiny, insignificant amount compared with what is actually needed",
    "sentence": "The more foreign knowledge I absorb, the more I humbly feel like my understanding is just {{BLANK}}.",
    "cn": "我吸收的外國知識越多，我越謙遜地感到自己的理解不過是九牛一毛／滄海一粟。"
  },
  {
    "word": "chip",
    "pos": "n.",
    "cn_def": "晶片；洋芋片；小碎片（可數）",
    "en_def": "a small piece of electronic material with circuits; a crisp thin slice of potato",
    "sentence": "This tiny electronic {{BLANK}} installed inside your smartphone is what allows you to connect to mobile networks.",
    "cn": "安裝在你智慧型手機內部的這個微小電子晶片，就是讓你能夠連接到行動網路的關鍵。"
  },
  {
    "word": "chip",
    "pos": "v.",
    "cn_def": "弄出缺口；鑿／切掉碎片（動詞）",
    "en_def": "to break off small pieces from something hard, or to cut away with a tool",
    "sentence": "During freezing winter mornings, Canadian drivers often have to {{BLANK}} thick ice off their car windshields before commuting.",
    "cn": "在冰凍的冬日清晨，加拿大駕駛人常常得先將汽車擋風玻璃上的厚冰鑿除才能通勤。"
  },
  {
    "word": "circus",
    "pos": "n.",
    "cn_def": "馬戲團；熱鬧喧囂的場面（可數）",
    "en_def": "a traveling show of acrobats, trained animals, and clowns in a large tent",
    "sentence": "The funny clowns and talented acrobats in the traveling {{BLANK}} made all the young children laugh out loud.",
    "cn": "巡迴馬戲團中滑稽的小丑與才華洋溢的雜技演員讓所有年幼的孩子大聲歡笑。"
  },
  {
    "word": "clip",
    "pos": "n.",
    "cn_def": "夾子；迴紋針；剪輯短片（可數）",
    "en_def": "a small device for holding things together; a short extract from a film or broadcast",
    "sentence": "The secretary neatly attached the important legal document to the application file with a shiny paper {{BLANK}}.",
    "cn": "秘書用一個光亮的迴紋夾將重要的法律文件整齊地附在申請檔案上。"
  },
  {
    "word": "clip",
    "pos": "v.",
    "cn_def": "用夾子夾住；修剪；剪下（動詞）",
    "en_def": "to fasten with a clip; to cut off with scissors or shears",
    "sentence": "My grandfather spends every Saturday morning using sharp gardening shears to {{BLANK}} the bushes in the garden.",
    "cn": "我祖父每週六早晨都花時間使用鋒利的園藝剪刀修剪花園裡的灌木。"
  },
  {
    "word": "clues",
    "pos": "n.",
    "cn_def": "線索；端倪；提示（可數）",
    "en_def": "a piece of evidence or information that helps solve a puzzle or mystery",
    "sentence": "City police detectives returned to the dark crime scene to look for any hidden {{BLANK}} about the mystery.",
    "cn": "市警局的偵探們返回黑暗的犯罪現場，尋找有關這起懸案的任何隱藏線索。"
  },
  {
    "word": "not have a clue",
    "pos": "v.phr.",
    "cn_def": "毫無頭緒；一無所知",
    "en_def": "to be completely ignorant or have no knowledge or idea about something",
    "sentence": "I honestly do {{BLANK}} about why the two close coworkers have been arguing all morning.",
    "cn": "我對於這兩位平時親密的同事為何整整一個上午都在爭吵完全毫無頭緒。"
  },
  {
    "word": "communicate",
    "pos": "v.",
    "cn_def": "溝通；交流；傳達（動詞）",
    "en_def": "to share or exchange information, news, or ideas with others",
    "sentence": "Because our family members live in different overseas countries, we {{BLANK}} mostly by weekly video calls and text messages.",
    "cn": "因為我們全家人住在不同的海外國家，我們主要透過每週的視訊通話和文字訊息來聯絡／溝通。"
  },
  {
    "word": "communication",
    "pos": "n.",
    "cn_def": "溝通；交流；通訊（不可數/可數）",
    "en_def": "the imparting or exchanging of information by speaking, writing, or using other media",
    "sentence": "Maintaining honest and open {{BLANK}} is the most important foundation for building a successful long-term relationship.",
    "cn": "保持坦誠且公開的溝通是建立成功長期關係最重要的基石。"
  }
];

const MCQS = [
  {
    "q": "The workers used hundreds of red ______ to build the strong wall around the garden.",
    "options": [
      "buckets",
      "circuses",
      "bricks",
      "clues"
    ],
    "answer": 2,
    "cn": "工人們用數百塊紅磚在花園周圍建造堅固的牆壁。",
    "vocabIndex": 4
  },
  {
    "q": "On late Sunday morning, we like to eat ______ together instead of having breakfast and lunch.",
    "options": [
      "brunch",
      "bucket",
      "circus",
      "clip"
    ],
    "answer": 0,
    "cn": "在週日早晨較晚的時候，我們喜歡一起吃早午餐，而不是分別吃早餐和午餐。",
    "vocabIndex": 5
  },
  {
    "q": "Dad filled the yellow ______ with water and soap to wash his dirty car.",
    "options": [
      "brick",
      "circus",
      "clue",
      "bucket"
    ],
    "answer": 3,
    "cn": "爸爸在黃色水桶裡裝滿水和肥皂，來清洗他髒掉的汽車。",
    "vocabIndex": 6
  },
  {
    "q": "The funny clowns and flying acrobats at the ______ made everyone laugh loudly.",
    "options": [
      "bucket",
      "circus",
      "brick",
      "blood"
    ],
    "answer": 1,
    "cn": "在馬戲團裡滑稽的小丑和高空雜技演員讓每個人都大聲歡笑。",
    "vocabIndex": 10
  },
  {
    "q": "I bought a sandwich and a bag of crispy potato ______ for lunch at school.",
    "options": [
      "chips",
      "circuses",
      "buckets",
      "bricks"
    ],
    "answer": 0,
    "cn": "我在學校買了一個三明治和一包酥脆的洋芋片當午餐。",
    "vocabIndex": 8
  },
  {
    "q": "Use a small paper ______ to hold these two homework pages together neatly.",
    "options": [
      "circus",
      "clip",
      "brunch",
      "brick"
    ],
    "answer": 1,
    "cn": "用一個小迴紋夾將這兩頁作業整齊地夾在一起。",
    "vocabIndex": 11
  },
  {
    "q": "The television news showed a short video ______ of the happy dog rescue.",
    "options": [
      "bucket",
      "brick",
      "blood",
      "clip"
    ],
    "answer": 3,
    "cn": "電視新聞播出了那場快樂狗狗救援的一小段視訊剪輯短片。",
    "vocabIndex": 11
  },
  {
    "q": "The detective found a muddy footprint, which was an important ______ about the thief.",
    "options": [
      "circus",
      "bucket",
      "clue",
      "brick"
    ],
    "answer": 2,
    "cn": "偵探發現了一個泥濘的腳印，這是有關那個竊賊的重要線索。",
    "vocabIndex": 13
  },
  {
    "q": "When Ken fell off his bicycle and scraped his knee, red ______ came out of the cut.",
    "options": [
      "brick",
      "blood",
      "circus",
      "bucket"
    ],
    "answer": 1,
    "cn": "當肯恩從自行車上摔下來擦破膝蓋時，紅色的血液從傷口流了出來。",
    "vocabIndex": 1
  },
  {
    "q": "Computers and mobile phones make ______ with friends around the world fast and simple.",
    "options": [
      "bucket",
      "circus",
      "brick",
      "communication"
    ],
    "answer": 3,
    "cn": "電腦和手機讓與世界各地朋友的溝通／通訊變得快速且簡單。",
    "vocabIndex": 16
  },
  {
    "q": "The soldiers returned from the ______ battle with many wounded friends.",
    "options": [
      "chipped",
      "clipped",
      "bloody",
      "communicated"
    ],
    "answer": 2,
    "cn": "士兵們帶著許多受傷的朋友從流血的／血腥的戰役中返回。",
    "vocabIndex": 0
  },
  {
    "q": "Tim fell on the hard ground and now has a ______ knee that hurts when he walks.",
    "options": [
      "bloody",
      "clipped",
      "bricked",
      "communicated"
    ],
    "answer": 0,
    "cn": "提姆摔倒在堅硬的地面上，現在有一個血淋淋的膝蓋，走路時會痛。",
    "vocabIndex": 0
  },
  {
    "q": "Be careful when drinking from that cup because it has a sharp ______ edge.",
    "options": [
      "bloody",
      "chipped",
      "bucketed",
      "circulated"
    ],
    "answer": 1,
    "cn": "用那個杯子喝水時要小心，因為它有一個鋒利的磕出缺口的邊緣。",
    "vocabIndex": 9
  },
  {
    "q": "If you cut your finger with a knife, press it with clean paper so it will stop ______.",
    "options": [
      "chipping",
      "clipping",
      "bleeding",
      "communicating"
    ],
    "answer": 2,
    "cn": "如果你被刀子切到手指，請用乾淨的紙壓住它，這樣它就會停止流血。"
  },
  {
    "q": "The deep wound on his leg ______ a lot until the school nurse put a bandage on it.",
    "options": [
      "chipped",
      "clipped",
      "communicated",
      "bled"
    ],
    "answer": 3,
    "cn": "他腿上的深傷口流了許多血，直到學校護理師在上面敷上繃帶。",
    "vocabIndex": 2
  },
  {
    "q": "Jack bit on a hard piece of candy and accidentally ______ his front tooth.",
    "options": [
      "chipped",
      "bled",
      "communicated",
      "brunched"
    ],
    "answer": 0,
    "cn": "傑克咬了一顆硬糖果，不小心把他的門牙咬崩了一小塊缺口。",
    "vocabIndex": 9
  },
  {
    "q": "In cold winter months, drivers use a tool to ______ ice off their car windows.",
    "options": [
      "bleed",
      "communicate",
      "chip",
      "brunch"
    ],
    "answer": 2,
    "cn": "在寒冷的冬月裡，駕駛人使用工具將車窗上的冰塊鑿下／刮除。",
    "vocabIndex": 8
  },
  {
    "q": "The gardener used big scissors to ______ the extra leaves from the green bush.",
    "options": [
      "bleed",
      "clip",
      "communicate",
      "brunch"
    ],
    "answer": 1,
    "cn": "園丁使用大剪刀從綠色灌木上修剪掉多餘的葉子。",
    "vocabIndex": 11
  },
  {
    "q": "The name card was ______ to his shirt pocket so everyone could see his name.",
    "options": [
      "clipped",
      "bled",
      "communicated",
      "brunched"
    ],
    "answer": 0,
    "cn": "名牌被夾在他的襯衫口袋上，這樣大家都能看到他的名字。",
    "vocabIndex": 12
  },
  {
    "q": "Since my cousins live in America, we usually ______ with each other by writing emails.",
    "options": [
      "bleed",
      "chip",
      "clip",
      "communicate"
    ],
    "answer": 3,
    "cn": "因為我的表兄弟住在美國，我們通常透過寫電子郵件相互溝通／聯絡。",
    "vocabIndex": 15
  },
  {
    "q": "The high cost of paying for that long hospital stay will ______ the poor family ______.",
    "options": [
      "bleed them dry",
      "hit a brick wall",
      "drop a brick",
      "kick the bucket"
    ],
    "answer": 0,
    "cn": "長期住院的高昂費用將會榨乾這個貧困家庭的所有積蓄。",
    "vocabIndex": 3
  },
  {
    "q": "The police had no new clues, so their investigation completely ______.",
    "options": [
      "bled them dry",
      "rained in buckets",
      "hit a brick wall",
      "kicked the bucket"
    ],
    "answer": 2,
    "cn": "警方沒有新的線索，因此他們的調查完全碰壁受阻了。",
    "vocabIndex": 4
  },
  {
    "q": "Traveling to Japan to see Mount Fuji has always been on my personal ______.",
    "options": [
      "drop in the bucket",
      "brick wall",
      "media circus",
      "bucket list"
    ],
    "answer": 3,
    "cn": "去日本看富士山一直都在我個人的人生願望清單上。",
    "vocabIndex": 6
  },
  {
    "q": "Saving five dollars is nice, but it is just ______ compared to the cost of a car.",
    "options": [
      "a bucket list",
      "a drop in the bucket",
      "a brick wall",
      "a paper clip"
    ],
    "answer": 1,
    "cn": "省下五美元雖然不錯，但與一輛車的價錢相比只是九牛一毛／微不足道。",
    "vocabIndex": 7
  },
  {
    "q": "I ______ about how to solve this difficult math problem, so I will ask the teacher.",
    "options": [
      "bleed them dry",
      "hit a brick wall",
      "kick the bucket",
      "do not have a clue"
    ],
    "answer": 3,
    "cn": "我對於如何解開這道困難的數學題完全毫無頭緒，所以我會去問老師。",
    "vocabIndex": 14
  }
];

const LOOKUP = {
  "bloody": {
    "pos": "adj.",
    "en_def": "covered with, stained with, or characterized by much bloodshed and violence",
    "cn_def": "流血的；血腥殘酷的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "covered with, stained with, or characterized by much bloodshed and violence",
        "cn_def": "流血的；血腥殘酷的"
      }
    ]
  },
  "blood": {
    "pos": "n.",
    "en_def": "the red fluid that circulates through the heart, arteries, and veins",
    "cn_def": "血液；血統（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the red fluid that circulates through the heart, arteries, and veins",
        "cn_def": "血液；血統（不可數）"
      }
    ]
  },
  "bleeding": {
    "pos": "v.",
    "en_def": "to lose blood from the body through a cut or injury",
    "cn_def": "流血；失血（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to lose blood from the body through a cut or injury",
        "cn_def": "流血；失血（動詞）"
      }
    ]
  },
  "bleed": {
    "pos": "v.",
    "en_def": "to lose blood from the body through a cut or injury",
    "cn_def": "流血；失血（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to lose blood from the body through a cut or injury",
        "cn_def": "流血；失血（動詞）"
      }
    ]
  },
  "bleed sb. dry": {
    "pos": "v.phr.",
    "en_def": "to drain someone of all their money, financial resources, or strength",
    "cn_def": "榨乾某人的血汗錢；使某人傾家蕩產",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to drain someone of all their money, financial resources, or strength",
        "cn_def": "榨乾某人的血汗錢；使某人傾家蕩產"
      }
    ]
  },
  "bled the small company dry": {
    "pos": "v.phr.",
    "en_def": "to drain someone of all their money, financial resources, or strength",
    "cn_def": "榨乾某人的血汗錢；使某人傾家蕩產",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to drain someone of all their money, financial resources, or strength",
        "cn_def": "榨乾某人的血汗錢；使某人傾家蕩產"
      }
    ]
  },
  "brick": {
    "pos": "n.",
    "en_def": "a small rectangular block of fired clay used extensively in building structures",
    "cn_def": "磚塊；磚（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small rectangular block of fired clay used extensively in building structures",
        "cn_def": "磚塊；磚（可數）"
      }
    ]
  },
  "brunch": {
    "pos": "n.",
    "en_def": "a late morning meal eaten instead of both breakfast and lunch",
    "cn_def": "早午餐（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a late morning meal eaten instead of both breakfast and lunch",
        "cn_def": "早午餐（不可數/可數）"
      }
    ]
  },
  "bucket": {
    "pos": "n.",
    "en_def": "a roughly cylindrical open container with a handle, used for carrying liquids",
    "cn_def": "水桶；提桶（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a roughly cylindrical open container with a handle, used for carrying liquids",
        "cn_def": "水桶；提桶（可數）"
      }
    ]
  },
  "a drop in the bucket": {
    "pos": "n.phr.",
    "en_def": "a very tiny, insignificant amount compared with what is actually needed",
    "cn_def": "九牛一毛；滄海一粟；微不足道",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "a very tiny, insignificant amount compared with what is actually needed",
        "cn_def": "九牛一毛；滄海一粟；微不足道"
      }
    ]
  },
  "chip": {
    "pos": "n.",
    "en_def": "a small piece of electronic material with circuits; a crisp thin slice of potato",
    "cn_def": "晶片；洋芋片；小碎片（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small piece of electronic material with circuits; a crisp thin slice of potato",
        "cn_def": "晶片；洋芋片；小碎片（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to break off small pieces from something hard, or to cut away with a tool",
        "cn_def": "弄出缺口；鑿／切掉碎片（動詞）"
      }
    ]
  },
  "circus": {
    "pos": "n.",
    "en_def": "a traveling show of acrobats, trained animals, and clowns in a large tent",
    "cn_def": "馬戲團；熱鬧喧囂的場面（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a traveling show of acrobats, trained animals, and clowns in a large tent",
        "cn_def": "馬戲團；熱鬧喧囂的場面（可數）"
      }
    ]
  },
  "clip": {
    "pos": "n.",
    "en_def": "a small device for holding things together; a short extract from a film or broadcast",
    "cn_def": "夾子；迴紋針；剪輯短片（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small device for holding things together; a short extract from a film or broadcast",
        "cn_def": "夾子；迴紋針；剪輯短片（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to fasten with a clip; to cut off with scissors or shears",
        "cn_def": "用夾子夾住；修剪；剪下（動詞）"
      }
    ]
  },
  "clues": {
    "pos": "n.",
    "en_def": "a piece of evidence or information that helps solve a puzzle or mystery",
    "cn_def": "線索；端倪；提示（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of evidence or information that helps solve a puzzle or mystery",
        "cn_def": "線索；端倪；提示（可數）"
      }
    ]
  },
  "clue": {
    "pos": "n.",
    "en_def": "a piece of evidence or information that helps solve a puzzle or mystery",
    "cn_def": "線索；端倪；提示（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of evidence or information that helps solve a puzzle or mystery",
        "cn_def": "線索；端倪；提示（可數）"
      }
    ]
  },
  "not have a clue": {
    "pos": "v.phr.",
    "en_def": "to be completely ignorant or have no knowledge or idea about something",
    "cn_def": "毫無頭緒；一無所知",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to be completely ignorant or have no knowledge or idea about something",
        "cn_def": "毫無頭緒；一無所知"
      }
    ]
  },
  "communicate": {
    "pos": "v.",
    "en_def": "to share or exchange information, news, or ideas with others",
    "cn_def": "溝通；交流；傳達（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to share or exchange information, news, or ideas with others",
        "cn_def": "溝通；交流；傳達（動詞）"
      }
    ]
  },
  "communication": {
    "pos": "n.",
    "en_def": "the imparting or exchanging of information by speaking, writing, or using other media",
    "cn_def": "溝通；交流；通訊（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the imparting or exchanging of information by speaking, writing, or using other media",
        "cn_def": "溝通；交流；通訊（不可數/可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
