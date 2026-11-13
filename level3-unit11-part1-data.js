// Part 1 Quiz Data: afterward – overdose
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 11-1 - afterward – overdose",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "afterward",
    "pos": "adv.",
    "cn_def": "後來；之後；隨後",
    "en_def": "at a later or subsequent time; after something has happened",
    "sentence": "The physical therapy session was very painful at first, but Jerry felt so much better {{BLANK}}.",
    "cn": "物理治療一開始非常痛苦，但傑瑞在之後感覺好多了。"
  },
  {
    "word": "arrested",
    "pos": "v.",
    "cn_def": "逮捕；拘捕（動詞）",
    "en_def": "to seize someone by legal authority and take them into custody",
    "sentence": "The brave police officers {{BLANK}} the dangerous suspect for breaking into the jewelry shop downtown.",
    "cn": "英勇的警員們因闖入市中心珠寶店而逮捕了危險的嫌疑犯。"
  },
  {
    "word": "arrest",
    "pos": "n.",
    "cn_def": "逮捕；拘留（可數/不可數）",
    "en_def": "the action of seizing someone to take them into legal custody",
    "sentence": "Detectives worked through the rainy night and finally made an {{BLANK}} in the serious arson case.",
    "cn": "刑警們在雨夜中奮戰，終於在那起嚴重的縱火案中進行了逮捕。"
  },
  {
    "word": "athlete",
    "pos": "n.",
    "cn_def": "運動員；體育健兒（可數）",
    "en_def": "a person who is proficient in sports and other forms of physical exercise",
    "sentence": "My older brother is a dedicated {{BLANK}} who practices basketball for three hours every single afternoon.",
    "cn": "我的哥哥是一位專注的運動員，每天下午練習籃球長達三個小時。"
  },
  {
    "word": "athletic",
    "pos": "adj.",
    "cn_def": "健壯的；運動的；體育的",
    "en_def": "physically strong, fit, and active; relating to athletics",
    "sentence": "Because of his tall height and naturally {{BLANK}} build, David was recruited by the varsity volleyball team.",
    "cn": "因為高挑的身材與天生健壯的體格，大衛被校排球隊延攬入隊。"
  },
  {
    "word": "background",
    "pos": "n.",
    "cn_def": "背景；經歷；出身（可數/不可數）",
    "en_def": "a person's education, experience, and social circumstances",
    "sentence": "During the formal job interview, the manager carefully asked Jason about his educational {{BLANK}}.",
    "cn": "在正式求職面試中，經理仔細詢問了傑森的教育學歷背景。"
  },
  {
    "word": "background",
    "pos": "n.",
    "cn_def": "背景（景色、音樂等）",
    "en_def": "the part of a picture, scene, or view that lies behind the main objects",
    "sentence": "The professional wedding photographer captured the bride with a breathtaking blue mountain lake in the {{BLANK}}.",
    "cn": "專業婚禮攝影師拍下了新娘的照片，背景是一座令人嘆為觀止的蔚藍高山湖泊。"
  },
  {
    "word": "desirable",
    "pos": "adj.",
    "cn_def": "令人嚮往的；稱心的；理想的",
    "en_def": "wanted or wished for as being attractive, useful, or advantageous",
    "sentence": "Domestic cats are considered highly {{BLANK}} pets because they are naturally quiet, gentle, and clean indoors.",
    "cn": "家貓被認為是極具吸引力且令人嚮往的寵物，因為牠們在室內天生安靜、溫柔且乾淨。"
  },
  {
    "word": "desire",
    "pos": "n.",
    "cn_def": "渴望；慾望；心願（可數/不可數）",
    "en_def": "a strong feeling of wanting to have something or wishing for something",
    "sentence": "After hiking up the steep rocky trail for seven hours, we had no {{BLANK}} to go out tonight.",
    "cn": "在陡峭岩石山徑健行七個小時後，我們今晚完全沒有出門的慾望／意願。"
  },
  {
    "word": "desire",
    "pos": "v.",
    "cn_def": "渴望；想要（動詞）",
    "en_def": "to strongly wish for or want something",
    "sentence": "Although many ordinary people deeply {{BLANK}} wealth and fame, not everyone is willing to work tirelessly for them.",
    "cn": "雖然許多凡人深切渴望名利，但並非每個人都願意為之不知疲倦地奮鬥。"
  },
  {
    "word": "dolphins",
    "pos": "n.",
    "cn_def": "海豚（可數）",
    "en_def": "a highly intelligent aquatic mammal with a beaklike snout",
    "sentence": "From the wooden deck of our tourist boat, we watched a magnificent pod of wild {{BLANK}} jumping gracefully.",
    "cn": "從觀光船的木質甲板上，我們看見一群壯麗的野生海豚優雅地跳躍。"
  },
  {
    "word": "donkey",
    "pos": "n.",
    "cn_def": "驢子（可數）",
    "en_def": "a domesticated hoofed mammal of the horse family with long ears",
    "sentence": "The poor mountain farmer relied heavily on his patient {{BLANK}} to carry heavy sacks of potatoes to town.",
    "cn": "貧困的山區農民非常依賴他那有耐心的驢子把沉重的馬鈴薯袋馱到鎮上。"
  },
  {
    "word": "dose",
    "pos": "n.",
    "cn_def": "（藥物）一劑；劑量（可數）",
    "en_def": "a measured quantity of a medicine taken at any one time",
    "sentence": "The family doctor clearly instructed the sick patient to take each {{BLANK}} of antibiotic medicine after meals.",
    "cn": "家庭醫生清楚指示生病的病患在飯後服用每一劑抗生素藥物。"
  },
  {
    "word": "dosed",
    "pos": "v.",
    "cn_def": "給…服藥；配藥（動詞）",
    "en_def": "to administer a dose of medicine to someone",
    "sentence": "The caring school nurse gently {{BLANK}} the feverish elementary student with a safe pain reliever before calling her parents.",
    "cn": "貼心的校護在通知家長之前，溫柔地給發燒的小學生服下安全的止痛退燒藥。"
  },
  {
    "word": "overdose",
    "pos": "n./v.",
    "cn_def": "服藥過量；過量用藥（可數/不可數/動詞）",
    "en_def": "an excessive and dangerous dose of a drug, or to take such a dose",
    "sentence": "The young rock musician was rushed to the emergency room after suffering an accidental {{BLANK}} of sleeping pills.",
    "cn": "那位年輕的搖滾樂手因意外服藥過量安眠藥，被緊急送往急診室。"
  }
];

const MCQS = [
  {
    "q": "The brave policeman caught the thief and took him to the station to make an ______.",
    "options": [
      "background",
      "arrest",
      "athlete",
      "donkey"
    ],
    "answer": 1,
    "cn": "英勇的警察抓住了小偷，並將他帶到警局進行逮捕。",
    "vocabIndex": 1
  },
  {
    "q": "Mark runs five miles every morning because he is a talented school ______.",
    "options": [
      "arrest",
      "dose",
      "background",
      "athlete"
    ],
    "answer": 3,
    "cn": "馬克每天早晨跑五英里，因為他是一位有才華的學校運動員。",
    "vocabIndex": 3
  },
  {
    "q": "In the family photo, you can see a blue ocean and green trees in the ______.",
    "options": [
      "dolphin",
      "athlete",
      "background",
      "donkey"
    ],
    "answer": 2,
    "cn": "在全家福照片中，你可以看到背景中有藍色海洋與綠色樹木。",
    "vocabIndex": 5
  },
  {
    "q": "After working hard all day, I have no ______ to go out to the noisy party.",
    "options": [
      "desire",
      "dolphin",
      "athlete",
      "donkey"
    ],
    "answer": 0,
    "cn": "辛苦工作一整天後，我完全沒有意願／慾望去那個喧鬧的派對。",
    "vocabIndex": 8
  },
  {
    "q": "From the boat, we saw a friendly ______ jump high out of the blue sea.",
    "options": [
      "arrest",
      "background",
      "dolphin",
      "dose"
    ],
    "answer": 2,
    "cn": "從船上，我們看到一隻友善的海豚從蔚藍的大海中高高躍起。",
    "vocabIndex": 10
  },
  {
    "q": "The farmer loaded heavy bags of carrots onto the back of his grey ______.",
    "options": [
      "background",
      "donkey",
      "athlete",
      "dose"
    ],
    "answer": 1,
    "cn": "農夫將沉重的胡蘿蔔袋裝載到他那隻灰色驢子的背上。",
    "vocabIndex": 11
  },
  {
    "q": "Please take one small ______ of this cough syrup every four hours after eating.",
    "options": [
      "dose",
      "donkey",
      "athlete",
      "dolphin"
    ],
    "answer": 0,
    "cn": "請在飯後每四小時服用一小劑這種止咳糖漿。",
    "vocabIndex": 12
  },
  {
    "q": "Taking too many sleeping pills at once can lead to a dangerous drug ______.",
    "options": [
      "background",
      "dolphin",
      "athlete",
      "overdose"
    ],
    "answer": 3,
    "cn": "一次服用過多安眠藥可能導致危險的藥物過量。",
    "vocabIndex": 14
  },
  {
    "q": "Because of his strong ______ in science, Jack got a great job at the hospital.",
    "options": [
      "background",
      "donkey",
      "dolphin",
      "arrest"
    ],
    "answer": 0,
    "cn": "由於他在科學方面的雄厚背景，傑克在醫院獲得了一份很棒的工作。",
    "vocabIndex": 5
  },
  {
    "q": "The young girl has a strong ______ to become an artist and paint beautiful pictures.",
    "options": [
      "dose",
      "desire",
      "donkey",
      "background"
    ],
    "answer": 1,
    "cn": "那個年輕女孩有著成為畫家並畫出美麗畫作的強烈願望／渴望。",
    "vocabIndex": 8
  },
  {
    "q": "A clever ______ was trained by scientists to do tricks and interact with people.",
    "options": [
      "background",
      "dose",
      "dolphin",
      "arrest"
    ],
    "answer": 2,
    "cn": "一隻聰明的海豚接受了科學家的訓練，能表演把戲並與人互動。",
    "vocabIndex": 10
  },
  {
    "q": "The old ______ stood under the tree and chewed green grass in the field.",
    "options": [
      "background",
      "athlete",
      "dose",
      "donkey"
    ],
    "answer": 3,
    "cn": "那隻老驢子站在樹下，在田野裡咀嚼著綠草。",
    "vocabIndex": 11
  },
  {
    "q": "Police officers arrived quickly at the store to ______ the man who stole the watch.",
    "options": [
      "arrest",
      "dose",
      "desire",
      "skip"
    ],
    "answer": 0,
    "cn": "警員們迅速趕到商店逮捕那個偷手錶的男子。",
    "vocabIndex": 1
  },
  {
    "q": "Many students ______ to pass their final exams and enter good high schools.",
    "options": [
      "arrest",
      "dose",
      "desire",
      "skip"
    ],
    "answer": 2,
    "cn": "許多學生渴望通過期末考試並進入優質高中。",
    "vocabIndex": 8
  },
  {
    "q": "The nurse will ______ the sick boy with medicine when his fever rises.",
    "options": [
      "arrest",
      "desire",
      "skip",
      "dose"
    ],
    "answer": 3,
    "cn": "當小男孩發燒上升時，護理師會給他服藥。",
    "vocabIndex": 12
  },
  {
    "q": "The sheriff will ______ anyone who tries to damage public property in this town.",
    "options": [
      "dose",
      "arrest",
      "skip",
      "desire"
    ],
    "answer": 1,
    "cn": "警長將會逮捕任何試圖破壞本鎮公共財產的人。",
    "vocabIndex": 1
  },
  {
    "q": "Living close to a modern subway station is a very ______ feature for home buyers.",
    "options": [
      "bloody",
      "athletic",
      "hollow",
      "desirable"
    ],
    "answer": 3,
    "cn": "靠近現代化地鐵站對購屋者來說是一個非常理想稱心的特點。",
    "vocabIndex": 7
  },
  {
    "q": "Lisa has an ______ body because she swims and plays tennis every weekend.",
    "options": [
      "odd",
      "athletic",
      "hollow",
      "raw"
    ],
    "answer": 1,
    "cn": "麗莎擁有健美健壯的體態，因為她每個週末都游泳和打網球。",
    "vocabIndex": 4
  },
  {
    "q": "Getting a high score on the English quiz is the most ______ result for Cindy.",
    "options": [
      "desirable",
      "bloody",
      "raw",
      "odd"
    ],
    "answer": 0,
    "cn": "在英語測驗中取得高分對辛蒂來說是最理想稱心的結果。",
    "vocabIndex": 7
  },
  {
    "q": "The big dog is very ______ and can easily jump over tall wooden fences.",
    "options": [
      "raw",
      "bloody",
      "athletic",
      "odd"
    ],
    "answer": 2,
    "cn": "那隻大狗非常健壯敏捷，可以輕易跳過高高的木柵欄。",
    "vocabIndex": 4
  },
  {
    "q": "We finished our dinner at the restaurant and went to see a movie ______.",
    "options": [
      "afterward",
      "forth",
      "downhill",
      "midway"
    ],
    "answer": 0,
    "cn": "我們在餐廳吃完晚餐，後來／之後去看了一部電影。",
    "vocabIndex": 0
  },
  {
    "q": "Ken took his medicine and went to bed; shortly ______, he fell fast asleep.",
    "options": [
      "forth",
      "afterward",
      "midway",
      "downhill"
    ],
    "answer": 1,
    "cn": "肯恩服了藥上床睡覺；不久之後，他便熟睡了。",
    "vocabIndex": 0
  },
  {
    "q": "The police told the noisy crowd that the criminal was safely ______.",
    "options": [
      "in leaps and bounds",
      "out of necessity",
      "under arrest",
      "on thin ice"
    ],
    "answer": 2,
    "cn": "警方告訴吵鬧的人群，該名罪犯已經安全被捕歸案。",
    "vocabIndex": 1
  },
  {
    "q": "While taking a boat trip near the island, we were amazed to see ______ swimming by.",
    "options": [
      "an iron fist",
      "a silver bullet",
      "a light bulb",
      "a pod of dolphins"
    ],
    "answer": 3,
    "cn": "在島嶼附近乘船旅行時，我們驚訝地看見一群海豚游過。",
    "vocabIndex": 10
  },
  {
    "q": "The stubborn boy refused to listen to anyone and stayed as ______.",
    "options": [
      "flat as a pancake",
      "pure as gold",
      "stubborn as a donkey",
      "strong as an ox"
    ],
    "answer": 2,
    "cn": "那個倔強的男孩拒絕聽任何人的勸告，依舊像驢子一樣固執。",
    "vocabIndex": 11
  }
];

const LOOKUP = {
  "afterward": {
    "pos": "adv.",
    "en_def": "at a later or subsequent time; after something has happened",
    "cn_def": "後來；之後；隨後",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "at a later or subsequent time; after something has happened",
        "cn_def": "後來；之後；隨後"
      }
    ]
  },
  "arrest": {
    "pos": "v.",
    "en_def": "to seize someone by legal authority and take them into custody",
    "cn_def": "逮捕；拘捕（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to seize someone by legal authority and take them into custody",
        "cn_def": "逮捕；拘捕（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "the action of seizing someone to take them into legal custody",
        "cn_def": "逮捕；拘留（可數/不可數）"
      }
    ]
  },
  "arrested": {
    "pos": "v.",
    "en_def": "to seize someone by legal authority and take them into custody",
    "cn_def": "逮捕；拘捕（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to seize someone by legal authority and take them into custody",
        "cn_def": "逮捕；拘捕（動詞）"
      }
    ]
  },
  "athlete": {
    "pos": "n.",
    "en_def": "a person who is proficient in sports and other forms of physical exercise",
    "cn_def": "運動員；體育健兒（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who is proficient in sports and other forms of physical exercise",
        "cn_def": "運動員；體育健兒（可數）"
      }
    ]
  },
  "athletic": {
    "pos": "adj.",
    "en_def": "physically strong, fit, and active; relating to athletics",
    "cn_def": "健壯的；運動的；體育的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "physically strong, fit, and active; relating to athletics",
        "cn_def": "健壯的；運動的；體育的"
      }
    ]
  },
  "background": {
    "pos": "n.",
    "en_def": "a person's education, experience, and social circumstances",
    "cn_def": "背景；經歷；出身（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person's education, experience, and social circumstances",
        "cn_def": "背景；經歷；出身（可數/不可數）"
      },
      {
        "pos": "n.",
        "en_def": "the part of a picture, scene, or view that lies behind the main objects",
        "cn_def": "背景（景色、音樂等）"
      }
    ]
  },
  "desirable": {
    "pos": "adj.",
    "en_def": "wanted or wished for as being attractive, useful, or advantageous",
    "cn_def": "令人嚮往的；稱心的；理想的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "wanted or wished for as being attractive, useful, or advantageous",
        "cn_def": "令人嚮往的；稱心的；理想的"
      }
    ]
  },
  "desire": {
    "pos": "n.",
    "en_def": "a strong feeling of wanting to have something or wishing for something",
    "cn_def": "渴望；慾望；心願（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a strong feeling of wanting to have something or wishing for something",
        "cn_def": "渴望；慾望；心願（可數/不可數）"
      },
      {
        "pos": "v.",
        "en_def": "to strongly wish for or want something",
        "cn_def": "渴望；想要（動詞）"
      }
    ]
  },
  "dolphin": {
    "pos": "n.",
    "en_def": "a highly intelligent aquatic mammal with a beaklike snout",
    "cn_def": "海豚（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a highly intelligent aquatic mammal with a beaklike snout",
        "cn_def": "海豚（可數）"
      }
    ]
  },
  "dolphins": {
    "pos": "n.",
    "en_def": "a highly intelligent aquatic mammal with a beaklike snout",
    "cn_def": "海豚（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a highly intelligent aquatic mammal with a beaklike snout",
        "cn_def": "海豚（可數）"
      }
    ]
  },
  "donkey": {
    "pos": "n.",
    "en_def": "a domesticated hoofed mammal of the horse family with long ears",
    "cn_def": "驢子（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a domesticated hoofed mammal of the horse family with long ears",
        "cn_def": "驢子（可數）"
      }
    ]
  },
  "dose": {
    "pos": "n.",
    "en_def": "a measured quantity of a medicine taken at any one time",
    "cn_def": "（藥物）一劑；劑量（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a measured quantity of a medicine taken at any one time",
        "cn_def": "（藥物）一劑；劑量（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to administer a dose of medicine to someone",
        "cn_def": "給…服藥；配藥（動詞）"
      }
    ]
  },
  "dosed": {
    "pos": "v.",
    "en_def": "to administer a dose of medicine to someone",
    "cn_def": "給…服藥；配藥（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to administer a dose of medicine to someone",
        "cn_def": "給…服藥；配藥（動詞）"
      }
    ]
  },
  "overdose": {
    "pos": "n./v.",
    "en_def": "an excessive and dangerous dose of a drug, or to take such a dose",
    "cn_def": "服藥過量；過量用藥（可數/不可數/動詞）",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "an excessive and dangerous dose of a drug, or to take such a dose",
        "cn_def": "服藥過量；過量用藥（可數/不可數/動詞）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
