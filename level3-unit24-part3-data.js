// Part 3 Quiz Data: junior – racial
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 24-3 - junior – racial",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "junior",
    "pos": "adj./n.",
    "cn_def": "資淺的；年少的 (adj.)；後進；大三生 (n.)",
    "en_def": "having a lower status or age than another; a third-year student",
    "sentence": "Although Mark had exceptional technical skills, he was {{BLANK}} to several veteran engineers who had served the company for decades.",
    "cn": "雖然 Mark 擁有卓越的專業技術，但相較於為該公司服務了數十年的幾位資深工程師，他的資歷仍屬較淺。"
  },
  {
    "word": "laughter",
    "pos": "n.",
    "cn_def": "笑；笑聲",
    "en_def": "the action or sound of laughing",
    "sentence": "The hilarious stand-up comedian delivered such witty jokes that the entire theater audience spontaneously burst into uncontrollable {{BLANK}}.",
    "cn": "這位幽默的單口喜劇演員講述了非常詼諧的笑話，以至於全場戲院觀眾不由自主地爆發出難以抑制的笑聲。"
  },
  {
    "word": "laundry",
    "pos": "n.",
    "cn_def": "送洗之衣物；洗衣店",
    "en_def": "clothes and linens that need to be washed or that have been newly washed",
    "sentence": "Every Sunday afternoon, David sorts through his clothes and spends hours doing the weekly {{BLANK}} at the community laundromat.",
    "cn": "每逢週日下午，David 都會將衣服分類，並在社區自助洗衣店花上數小時清洗每週的待洗衣物。"
  },
  {
    "word": "penny",
    "pos": "n.",
    "cn_def": "一分錢；便士",
    "en_def": "a one-cent coin or unit of currency in the US or UK",
    "sentence": "Restoring the rare vintage sports car required rare original replacement parts that ultimately cost the proud owner a pretty {{BLANK}}.",
    "cn": "修復這輛罕見的古董跑車需要稀有的原廠零件，最終讓這位自豪的車主花費了一大筆錢。"
  },
  {
    "word": "pigeons",
    "pos": "n.",
    "cn_def": "鴿子",
    "en_def": "a stout seed-eating or fruit-eating bird with a small head and cooing call",
    "sentence": "On sunny weekends, retirees enjoy sitting quietly in the historic town square to feed the {{BLANK}} scattered around the fountain.",
    "cn": "在陽光明媚的週末，退休長者們喜愛靜靜坐在歷史悠久的城鎮廣場上，餵食散佈在噴泉周圍的鴿子。"
  },
  {
    "word": "pity",
    "pos": "n./v.",
    "cn_def": "同情；憐憫；憾事 (n.)；同情；憐惜 (v.)",
    "en_def": "the feeling of sorrow and compassion caused by the suffering of others",
    "sentence": "Seeing the shivering stray dog caught in the pouring rain, the kindhearted shopkeeper took {{BLANK}} on the creature and offered it food.",
    "cn": "看到在傾盆大雨中瑟瑟發抖的流浪狗，善良的店主同情這隻小動物，並給了牠一些食物。"
  },
  {
    "word": "process",
    "pos": "n./v.",
    "cn_def": "過程；步驟 (n.)；處理；加工 (v.)",
    "en_def": "a series of actions or steps taken to achieve an end; to treat or handle",
    "sentence": "The municipal research team is currently in the {{BLANK}} of evaluating local groundwater quality following the chemical plant inspection.",
    "cn": "在化學工廠檢查之後，市府研究團隊目前正在評估當地地下水水質的過程當中。"
  },
  {
    "word": "racial",
    "pos": "adj.",
    "cn_def": "種族的；人種的",
    "en_def": "relating to the major human ethnic divisions or ancestry",
    "sentence": "Civil rights advocates marched peacefully through the capital streets to demand strict legal prohibitions against systemic {{BLANK}} discrimination in housing.",
    "cn": "民權倡議者和平遊行穿過首都街頭，要求針對住房領域系統性的種族歧視採取嚴格的法律禁令。"
  }
];

const MCQS = [
  {
    "q": "Because he had joined the accounting firm just two months ago, Arthur was ______ to most colleagues on the team.",
    "options": [
      "junior",
      "dizzy",
      "homesick",
      "racial"
    ],
    "answer": 0,
    "cn": "因為他才剛加入這家會計師事務所兩個月，Arthur 在團隊中的資歷比大多數同事都要淺。",
    "vocabIndex": 0
  },
  {
    "q": "The comedic actor's hilarious facial expressions caused the audience to burst into spontaneous ______.",
    "options": [
      "laundry",
      "laughter",
      "pity",
      "pigeon"
    ],
    "answer": 1,
    "cn": "喜劇演員滑稽的臉部表情引發了觀眾自發性的哄堂大笑。",
    "vocabIndex": 1
  },
  {
    "q": "Every Saturday morning, Jessica sorts out her dirty clothes and heads to the local laundromat to do the ______.",
    "options": [
      "bacon",
      "pigeon",
      "penny",
      "laundry"
    ],
    "answer": 3,
    "cn": "每個星期六早晨，Jessica 都會將髒衣服整理分類，前往當地的自助洗衣店洗衣服。",
    "vocabIndex": 2
  },
  {
    "q": "My grandfather always reminded us that a ______ saved is a ______ earned when we received pocket money.",
    "options": [
      "breeze",
      "pity",
      "penny",
      "dealer"
    ],
    "answer": 2,
    "cn": "每當我們拿到零用錢時，我祖父總是提醒我們『省一分錢就是賺一分錢』。",
    "vocabIndex": 3
  },
  {
    "q": "Hundreds of gray ______ gathered around the central plaza to peck at breadcrumbs tossed by tourists.",
    "options": [
      "pigeons",
      "pennies",
      "crews",
      "fountains"
    ],
    "answer": 0,
    "cn": "數百隻灰色鴿子聚集在中央廣場周圍，啄食遊客丟下的麵包屑。",
    "vocabIndex": 4
  },
  {
    "q": "The kindhearted nurse took ______ on the homeless traveler and gave him a hot bowl of soup.",
    "options": [
      "laundry",
      "penny",
      "laughter",
      "pity"
    ],
    "answer": 3,
    "cn": "善良的護理師同情那位無家可歸的旅客，給了他一碗熱湯。",
    "vocabIndex": 5
  },
  {
    "q": "Scientific researchers are currently in the ______ of testing the new vaccine to ensure its long-term safety.",
    "options": [
      "penny",
      "laundry",
      "process",
      "pity"
    ],
    "answer": 2,
    "cn": "科學研究人員目前正在測試新疫苗的過程當中，以確保其長期安全性。",
    "vocabIndex": 6
  },
  {
    "q": "The government enacted strict legislation to eradicate all forms of ______ discrimination in the workplace.",
    "options": [
      "junior",
      "racial",
      "dizzy",
      "homesick"
    ],
    "answer": 1,
    "cn": "政府頒布了嚴格的法律，以根除職場中一切形式的種族歧視。",
    "vocabIndex": 7
  },
  {
    "q": "As a college ______ majoring in biology, Emily was eligible to enroll in advanced laboratory research seminars.",
    "options": [
      "tight",
      "armed",
      "racial",
      "junior"
    ],
    "answer": 3,
    "cn": "作為一名主修生物學的大學三年級學生，Emily 有資格參加進階實驗室研究專題。",
    "vocabIndex": 0
  },
  {
    "q": "The sound of carefree ______ echoed through the children's playground as the youngsters played tag.",
    "options": [
      "laundry",
      "laughter",
      "penny",
      "pity"
    ],
    "answer": 1,
    "cn": "當孩子們在玩捉迷藏時，兒童遊樂場迴盪著無憂無慮的歡笑聲。",
    "vocabIndex": 1
  },
  {
    "q": "After returning from a two-week camping expedition, we had three overflowing baskets of dirty ______ to wash.",
    "options": [
      "laundry",
      "pity",
      "bacon",
      "pigeon"
    ],
    "answer": 0,
    "cn": "結束為期兩週的露營探險歸來後，我們有三大籃滿滿的髒衣服要洗。",
    "vocabIndex": 2
  },
  {
    "q": "Importing rare authentic components for the vintage sports car ended up costing the proud owner a pretty ______.",
    "options": [
      "pity",
      "pigeon",
      "penny",
      "process"
    ],
    "answer": 2,
    "cn": "為這輛古董跑車進口稀有的正廠零組件，最終讓這位自豪的車主花費了一大筆錢。",
    "vocabIndex": 3
  },
  {
    "q": "In ancient times before modern telecommunications, trained homing ______ were dispatched to carry urgent messages.",
    "options": [
      "pigeons",
      "pennies",
      "crews",
      "dealers"
    ],
    "answer": 0,
    "cn": "在現代電信發明之前的古代，訓練有素的信鴿被派遣去傳遞緊急信件。",
    "vocabIndex": 4
  },
  {
    "q": "It is such a great ______ that you cannot join our farewell banquet tomorrow evening due to a scheduling conflict.",
    "options": [
      "penny",
      "laundry",
      "pity",
      "process"
    ],
    "answer": 2,
    "cn": "因為時間衝突導致你明天晚上無法參加我們的告別宴會，這真是一大憾事。",
    "vocabIndex": 5
  },
  {
    "q": "It generally takes up to seven business days for the consular office to thoroughly review and ______ your visa.",
    "options": [
      "edit",
      "process",
      "interrupt",
      "hesitate"
    ],
    "answer": 1,
    "cn": "領事館通常需要長達七個工作天來徹底審查並處理您的簽證申請。",
    "vocabIndex": 6
  },
  {
    "q": "The international cultural summit aimed to promote ______ harmony and mutual respect among global delegates.",
    "options": [
      "dizzy",
      "junior",
      "armed",
      "racial"
    ],
    "answer": 3,
    "cn": "這場國際文化高峰會旨在促進各國代表之間的種族和諧與相互尊重。",
    "vocabIndex": 7
  },
  {
    "q": "Although the new marketing associate was talented, she remained ______ in ranking compared to the senior partners.",
    "options": [
      "homesick",
      "racial",
      "junior",
      "underlying"
    ],
    "answer": 2,
    "cn": "儘管這位新來的行銷業務專員才華洋溢，但與資深合夥人相比，她在階級上仍屬資淺。",
    "vocabIndex": 0
  },
  {
    "q": "The classroom was suddenly filled with cheerful ______ when the teacher shared a humorous anecdote from his childhood.",
    "options": [
      "laughter",
      "laundry",
      "pity",
      "penny"
    ],
    "answer": 0,
    "cn": "當老師分享了他童年的一則幽默軼事時，教室裡頓時充滿了愉悅的笑聲。",
    "vocabIndex": 1
  },
  {
    "q": "Remember to separate delicate white fabrics from colored shirts before putting them into the ______ basket.",
    "options": [
      "pity",
      "pigeon",
      "penny",
      "laundry"
    ],
    "answer": 3,
    "cn": "在將衣服放進洗衣籃之前，切記將精緻的白色織物與彩色襯衫分開。",
    "vocabIndex": 2
  },
  {
    "q": "The impoverished student confessed that he did not have a single ______ left in his wallet after paying the rent.",
    "options": [
      "pity",
      "penny",
      "process",
      "pigeon"
    ],
    "answer": 1,
    "cn": "這名窮困的學生坦承在繳納房租後，皮夾裡連一分錢都沒剩下了。",
    "vocabIndex": 3
  },
  {
    "q": "During their walking tour of Trafalgar Square, the children marveled at hundreds of gentle ______ landing nearby.",
    "options": [
      "pigeons",
      "pennies",
      "ditches",
      "crews"
    ],
    "answer": 0,
    "cn": "在特拉法加廣場的徒步之旅中，孩子們驚嘆於數百隻溫順的鴿子降落在附近。",
    "vocabIndex": 4
  },
  {
    "q": "You should not ______ him merely because he failed the driving exam; encourage him to practice more instead.",
    "options": [
      "clothe",
      "hesitate",
      "process",
      "pity"
    ],
    "answer": 3,
    "cn": "你不應該僅僅因為他沒通過駕照考試就可憐他；相反地，應該鼓勵他多加練習。",
    "vocabIndex": 5
  },
  {
    "q": "Understanding the complex biological ______ of photosynthesis is fundamental for all first-year botanical students.",
    "options": [
      "laundry",
      "process",
      "pity",
      "penny"
    ],
    "answer": 1,
    "cn": "理解光合作用複雜的生物學過程，對於所有植物學一年級學生來說都是至關重要的基礎。",
    "vocabIndex": 6
  },
  {
    "q": "Sociological studies indicate that eliminating ______ prejudice requires continuous education and open civic dialogue.",
    "options": [
      "dizzy",
      "junior",
      "racial",
      "tight"
    ],
    "answer": 2,
    "cn": "社會學研究指出，消除種族偏見需要持續的教育與公開的公民對話。",
    "vocabIndex": 7
  },
  {
    "q": "The central server can quickly ______ millions of electronic financial transactions every single second.",
    "options": [
      "pity",
      "process",
      "interrupt",
      "ditch"
    ],
    "answer": 1,
    "cn": "這台中央伺服器每秒鐘能快速處理數百萬筆電子金融交易。",
    "vocabIndex": 6
  }
];

const LOOKUP = {
  "junior": {
    "pos": "adj./n.",
    "en_def": "having a lower status or age than another; a third-year student",
    "cn_def": "資淺的；年少的 (adj.)；後進；大三生 (n.)",
    "combined": [
      {
        "pos": "adj./n.",
        "en_def": "having a lower status or age than another; a third-year student",
        "cn_def": "資淺的；年少的 (adj.)；後進；大三生 (n.)"
      }
    ]
  },
  "laughter": {
    "pos": "n.",
    "en_def": "the action or sound of laughing",
    "cn_def": "笑；笑聲",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action or sound of laughing",
        "cn_def": "笑；笑聲"
      }
    ]
  },
  "laundry": {
    "pos": "n.",
    "en_def": "clothes and linens that need to be washed or that have been newly washed",
    "cn_def": "送洗之衣物；洗衣店",
    "combined": [
      {
        "pos": "n.",
        "en_def": "clothes and linens that need to be washed or that have been newly washed",
        "cn_def": "送洗之衣物；洗衣店"
      }
    ]
  },
  "penny": {
    "pos": "n.",
    "en_def": "a one-cent coin or unit of currency in the US or UK",
    "cn_def": "一分錢；便士",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a one-cent coin or unit of currency in the US or UK",
        "cn_def": "一分錢；便士"
      }
    ]
  },
  "pigeons": {
    "pos": "n.",
    "en_def": "a stout seed-eating or fruit-eating bird with a small head and cooing call",
    "cn_def": "鴿子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a stout seed-eating or fruit-eating bird with a small head and cooing call",
        "cn_def": "鴿子"
      }
    ]
  },
  "pigeon": {
    "pos": "n.",
    "en_def": "a stout seed-eating or fruit-eating bird with a small head and cooing call",
    "cn_def": "鴿子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a stout seed-eating or fruit-eating bird with a small head and cooing call",
        "cn_def": "鴿子"
      }
    ]
  },
  "pity": {
    "pos": "n./v.",
    "en_def": "the feeling of sorrow and compassion caused by the suffering of others",
    "cn_def": "同情；憐憫；憾事 (n.)；同情；憐惜 (v.)",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "the feeling of sorrow and compassion caused by the suffering of others",
        "cn_def": "同情；憐憫；憾事 (n.)；同情；憐惜 (v.)"
      }
    ]
  },
  "process": {
    "pos": "n./v.",
    "en_def": "a series of actions or steps taken to achieve an end; to treat or handle",
    "cn_def": "過程；步驟 (n.)；處理；加工 (v.)",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a series of actions or steps taken to achieve an end; to treat or handle",
        "cn_def": "過程；步驟 (n.)；處理；加工 (v.)"
      }
    ]
  },
  "racial": {
    "pos": "adj.",
    "en_def": "relating to the major human ethnic divisions or ancestry",
    "cn_def": "種族的；人種的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to the major human ethnic divisions or ancestry",
        "cn_def": "種族的；人種的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
