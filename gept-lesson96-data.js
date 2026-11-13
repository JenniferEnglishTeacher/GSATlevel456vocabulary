// Lesson 96 Quiz Data: Household Maintenance, Domestic Objects, Human Health & Personal Preferences
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 96 - Household Maintenance, Domestic Objects, Human Health & Personal Preferences",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "furniture",
    "pos": "n.",
    "cn_def": "家具",
    "en_def": "movable objects such as tables, chairs, and beds used in rooms",
    "sentence": "When moving into their new apartment, the newlywed couple purchased solid wooden {{BLANK}} for the living room.",
    "cn": "搬進新公寓時，這對新婚夫婦為客廳購買了實木家具。"
  },
  {
    "word": "gather",
    "pos": "v.",
    "cn_def": "聚集；收集",
    "en_def": "to come together in a group; to collect things",
    "sentence": "Thousands of eager baseball fans will {{BLANK}} at the stadium tonight to watch the championship game.",
    "cn": "今晚成千上萬熱切的棒球迷將聚集在體育場觀看冠軍賽。"
  },
  {
    "word": "collection",
    "pos": "n.",
    "cn_def": "收藏品；收集物",
    "en_def": "a group of objects or art brought together in one place",
    "sentence": "Uncle Robert has built an impressive {{BLANK}} of rare postage stamps from around the world over thirty years.",
    "cn": "三十年來，羅伯特叔叔建立了一套令人印象深刻的全球罕見郵票收藏品。"
  },
  {
    "word": "blood",
    "pos": "n.",
    "cn_def": "血液",
    "en_def": "the red liquid that circulates through the arteries and veins",
    "sentence": "The local hospital organized a blood donation drive, inviting healthy citizens to give {{BLANK}} to help patients.",
    "cn": "當地醫院組織了一次捐血活動，邀請健康市民捐出血液以救助病患。"
  },
  {
    "word": "injure",
    "pos": "v.",
    "cn_def": "傷害；受傷",
    "en_def": "to hurt a person or animal physically, especially in an accident",
    "sentence": "Skiers should always wear safety helmets on the slopes so they do not seriously {{BLANK}} their heads.",
    "cn": "滑雪者在雪坡上應始終佩戴安全帽，以免頭部受到嚴重傷害。"
  },
  {
    "word": "mop",
    "pos": "v. / n.",
    "cn_def": "拖地；拖把",
    "en_def": "to clean floors with a wet tool; the tool itself",
    "sentence": "After cooking Sunday dinner for the large family, father used soapy water to {{BLANK}} the greasy kitchen floor.",
    "cn": "在為大家庭烹調完週日晚餐後，父親用肥皂水拖拭油膩的廚房地板。"
  },
  {
    "word": "sweep",
    "pos": "v.",
    "cn_def": "掃地；打掃",
    "en_def": "to clean dust or dirt from floors using a broom",
    "sentence": "The teacher asked students to take brooms and {{BLANK}} the fallen leaves off the front courtyard stairs.",
    "cn": "老師請學生們拿掃帚清掃前庭台階上的落葉。"
  },
  {
    "word": "opportunity",
    "pos": "n.",
    "cn_def": "機會；良機",
    "en_def": "a chance to do something desirable or advantageous",
    "sentence": "Studying abroad in England provided Maria with an invaluable {{BLANK}} to improve her English fluency.",
    "cn": "在英國留學為瑪麗亞提供了一個寶貴的機會以提升她的英語流利度。"
  },
  {
    "word": "powder",
    "pos": "n.",
    "cn_def": "粉末；粉狀物",
    "en_def": "a dry substance in the form of very fine grains",
    "sentence": "The mother mixed three spoons of milk {{BLANK}} with warm water to prepare a bottle for her infant baby.",
    "cn": "母親將三匙奶粉與溫水混合，為她的嬰兒準備了一瓶奶。"
  },
  {
    "word": "prefer",
    "pos": "v.",
    "cn_def": "更喜歡；偏好",
    "en_def": "to like one thing or person better than another",
    "sentence": "During hot summer afternoons, many office workers {{BLANK}} iced green tea to hot coffee.",
    "cn": "在炎熱的夏日午後，許多上班族比起熱咖啡更喜歡冰綠茶。"
  }
];

const MCQS = [
  {
    "q": "The moving company carefully wrapped our antique dining ______ in blankets to prevent scratches during transit.",
    "options": [
      "blood",
      "powder",
      "furniture",
      "opportunity"
    ],
    "answer": 2,
    "cn": "搬家公司在搬運過程中用毛毯小心包覆我們的仿古餐桌家具，以防刮傷。 【選項解析】(A) blood 血液  (B) furniture 家具  (C) powder 粉末  (D) opportunity 機會。dining furniture 指「餐廳家具」。",
    "vocabIndex": 0
  },
  {
    "q": "Every Friday evening, neighborhood residents ______ in the community center to practice choir singing.",
    "options": [
      "gather",
      "mop",
      "sweep",
      "injure"
    ],
    "answer": 0,
    "cn": "每逢週五傍晚，社區居民都會聚集在活動中心練習合唱。 【選項解析】(A) gather 聚集  (B) mop 拖地  (C) sweep 掃地  (D) injure 傷害。gather in community center 表「聚集在活動中心」。",
    "vocabIndex": 1
  },
  {
    "q": "The national museum displays a priceless ______ of ancient Chinese porcelain vases from the Ming dynasty.",
    "options": [
      "furniture",
      "collection",
      "powder",
      "blood"
    ],
    "answer": 1,
    "cn": "國立博物館展示了一組明代古中國瓷瓶的無價珍貴收藏品。 【選項解析】(A) furniture 家具  (B) powder 粉末  (C) collection 收藏品  (D) blood 血液。priceless collection 表「無價收藏」。",
    "vocabIndex": 2
  },
  {
    "q": "If you cut your finger while preparing vegetables, press a clean cloth firmly on the wound to stop the ______.",
    "options": [
      "powder",
      "opportunity",
      "furniture",
      "blood"
    ],
    "answer": 3,
    "cn": "若切菜時割傷手指，請用乾淨布料緊壓傷口以止血。 【選項解析】(A) powder 粉末  (B) blood 血液  (C) furniture 家具  (D) opportunity 機會。stop the blood / stop the bleeding 表「止血」。",
    "vocabIndex": 3
  },
  {
    "q": "Football players wear padded shoulder guards to ensure that opponents do not ______ them during tackles.",
    "options": [
      "gather",
      "injure",
      "mop",
      "sweep"
    ],
    "answer": 1,
    "cn": "美式足球員穿戴襯墊護肩，以確保在攔截衝撞時對手不會使他們受傷。 【選項解析】(A) gather 聚集  (B) sweep 掃地  (C) mop 拖地  (D) injure 傷害。injure them 表「使他們受傷」。",
    "vocabIndex": 4
  },
  {
    "q": "Please take off your muddy shoes outside, because mother just finished using a wet tool to ______ the tiles.",
    "options": [
      "gather",
      "prefer",
      "mop",
      "injure"
    ],
    "answer": 2,
    "cn": "請在門外脫掉沾滿泥巴的鞋子，因為母親剛用拖地工具拖過地磚。 【選項解析】(A) gather 聚集  (B) mop 拖地  (C) prefer 偏好  (D) injure 受傷。mop the tiles 表「拖拭地磚」。",
    "vocabIndex": 5
  },
  {
    "q": "Every morning before school begins, campus volunteers use long brooms to ______ dusty hallways.",
    "options": [
      "sweep",
      "injure",
      "gather",
      "prefer"
    ],
    "answer": 0,
    "cn": "每天早晨上課前，校園志工都拿著長掃帚清掃佈滿灰塵的走廊。 【選項解析】(A) injure 受傷  (B) sweep 掃地  (C) gather 聚集  (D) prefer 偏好。sweep hallways 表「打掃走廊」。",
    "vocabIndex": 6
  },
  {
    "q": "Participating in this international conference is a rare ______ for young researchers to present their findings.",
    "options": [
      "furniture",
      "collection",
      "powder",
      "opportunity"
    ],
    "answer": 3,
    "cn": "參加這場國際會議是年輕研究人員展示其成果的難得良機。 【選項解析】(A) furniture 家具  (B) collection 收藏品  (C) opportunity 機會  (D) powder 粉末。rare opportunity 表「難得良機」。",
    "vocabIndex": 7
  },
  {
    "q": "The baker sprinkled fine white sugar ______ over the freshly baked apple pie before serving it to guests.",
    "options": [
      "furniture",
      "blood",
      "powder",
      "collection"
    ],
    "answer": 2,
    "cn": "麵包師在將剛出爐的蘋果派端給客人前，在上方灑上細緻的白糖粉。 【選項解析】(A) powder 粉末  (B) blood 血液  (C) furniture 家具  (D) collection 收藏品。white sugar powder 表「白糖粉」。",
    "vocabIndex": 8
  },
  {
    "q": "Most high school students in Taiwan ______ studying in air-conditioned libraries during hot summer vacations.",
    "options": [
      "prefer",
      "injure",
      "sweep",
      "mop"
    ],
    "answer": 0,
    "cn": "在炎熱暑假期間，台灣多數高中生更喜歡在有空調的圖書館裡讀書。 【選項解析】(A) injure 受傷  (B) prefer 偏好  (C) sweep 掃地  (D) mop 拖地。prefer A to B 表「比起B更偏好A」。",
    "vocabIndex": 9
  },
  {
    "q": "We need to buy new living room ______, including a comfortable sofa and two matching reading chairs.",
    "options": [
      "blood",
      "furniture",
      "powder",
      "collection"
    ],
    "answer": 1,
    "cn": "我們需要購買新的客廳家具，包括一張舒適沙發與兩張配套閱讀椅。 【選項解析】(A) furniture 家具  (B) blood 血液  (C) powder 粉末  (D) collection 收藏品。living room furniture 表「客廳家具」。",
    "vocabIndex": 0
  },
  {
    "q": "During autumn harvest, village farmers ______ in the fields to pick ripe grapes for making wine.",
    "options": [
      "mop",
      "sweep",
      "prefer",
      "gather"
    ],
    "answer": 3,
    "cn": "秋收期間，村裡的農民們聚集在田野裡採摘成熟葡萄釀酒。 【選項解析】(A) mop 拖地  (B) sweep 掃地  (C) gather 聚集  (D) prefer 偏好。gather in the fields 表「在田野聚集」。",
    "vocabIndex": 1
  },
  {
    "q": "My grandfather has a wonderful ______ of vintage vinyl records that he plays on special family holidays.",
    "options": [
      "collection",
      "furniture",
      "powder",
      "blood"
    ],
    "answer": 0,
    "cn": "我的祖父擁有一套精彩的老黑膠唱片收藏，每逢家族節日時他都會播放。 【選項解析】(A) blood 血液  (B) furniture 家具  (C) powder 粉末  (D) collection 收藏品。collection of records 表「唱片收藏」。",
    "vocabIndex": 2
  },
  {
    "q": "A routine laboratory test will check the patient's ______ sample for signs of anemia or infection.",
    "options": [
      "powder",
      "opportunity",
      "furniture",
      "blood"
    ],
    "answer": 3,
    "cn": "例行的實驗室化驗將檢查病患的血液樣本，看是否有貧血或感染跡象。 【選項解析】(A) powder 粉末  (B) blood 血液  (C) furniture 家具  (D) opportunity 機會。blood sample 表「血液樣本」。",
    "vocabIndex": 3
  },
  {
    "q": "Wearing protective gloves while working with power tools ensures that you will not ______ your hands.",
    "options": [
      "prefer",
      "sweep",
      "injure",
      "mop"
    ],
    "answer": 2,
    "cn": "操作電動工具時佩戴防護手套，能確保你不會傷到雙手。 【選項解析】(A) prefer 偏好  (B) sweep 掃地  (C) injure 傷害  (D) mop 拖地。injure your hands 表「弄傷雙手」。",
    "vocabIndex": 4
  },
  {
    "q": "Someone spilled a bowl of noodle soup on the floor, so the waiter hurried over with a cloth to ______ it up.",
    "options": [
      "prefer",
      "mop",
      "gather",
      "injure"
    ],
    "answer": 1,
    "cn": "有人把一碗麵湯打翻在地板上，服務生趕忙拿著布過來拖擦乾淨。 【選項解析】(A) mop 拖拭  (B) prefer 偏好  (C) gather 聚集  (D) injure 受傷。mop it up 表「拖拭乾淨」。",
    "vocabIndex": 5
  },
  {
    "q": "After the strong typhoon passed, street sweepers worked tirelessly to ______ fallen tree branches off the road.",
    "options": [
      "injure",
      "prefer",
      "gather",
      "sweep"
    ],
    "answer": 3,
    "cn": "強颱過境後，清潔隊員不知疲倦地工作，將斷落的樹枝從路上掃開。 【選項解析】(A) injure 傷害  (B) prefer 偏好  (C) sweep 清掃  (D) gather 聚集。sweep fallen branches 表「清掃落枝」。",
    "vocabIndex": 6
  },
  {
    "q": "Learning a second language opens up a tremendous ______ for personal growth and international career success.",
    "options": [
      "opportunity",
      "furniture",
      "collection",
      "powder"
    ],
    "answer": 0,
    "cn": "學習第二外語為個人成長與國際職場成功開啟了巨大的機會。 【選項解析】(A) powder 粉末  (B) furniture 家具  (C) collection 收藏品  (D) opportunity 機會。tremendous opportunity 表「絕佳機會」。",
    "vocabIndex": 7
  },
  {
    "q": "Mix this green tea ______ with hot water and whisk it vigorously to prepare a traditional Japanese drink.",
    "options": [
      "blood",
      "powder",
      "furniture",
      "collection"
    ],
    "answer": 1,
    "cn": "將這種綠茶粉與熱水混合並均勻攪打，即可調製成傳統日本抹茶飲品。 【選項解析】(A) powder 粉末  (B) blood 血液  (C) furniture 家具  (D) collection 收藏品。green tea powder 表「綠茶粉（抹茶粉）」。",
    "vocabIndex": 8
  },
  {
    "q": "My parents ______ taking the scenic coastal train to driving on busy crowded expressways.",
    "options": [
      "sweep",
      "mop",
      "prefer",
      "injure"
    ],
    "answer": 2,
    "cn": "我的父母比起在擁擠的高速公路上開車，更喜歡搭乘風景秀麗的沿海火車。 【選項解析】(A) sweep 掃地  (B) mop 拖地  (C) injure 受傷  (D) prefer 偏好。prefer taking train to driving 表「比起開車更喜歡搭火車」。",
    "vocabIndex": 9
  },
  {
    "q": "The carpentry workshop sells handcrafted pine ______, such as bookshelves, bedside tables, and desks.",
    "options": [
      "blood",
      "furniture",
      "powder",
      "opportunity"
    ],
    "answer": 1,
    "cn": "這家木工工作坊販售手工製作的松木家具，如書架、床頭櫃與書桌。 【選項解析】(A) furniture 家具  (B) blood 血液  (C) powder 粉末  (D) opportunity 機會。pine furniture 表「松木家具」。",
    "vocabIndex": 0
  },
  {
    "q": "Protesters began to ______ peacefully in front of city hall to demand cleaner air and green parks.",
    "options": [
      "gather",
      "mop",
      "injure",
      "prefer"
    ],
    "answer": 0,
    "cn": "抗議者開始和平聚集在市政廳前，要求更乾淨的空氣與綠地公園。 【選項解析】(A) mop 拖地  (B) gather 聚集  (C) injure 傷害  (D) prefer 偏好。gather peacefully 表「和平聚集」。",
    "vocabIndex": 1
  },
  {
    "q": "The art gallery exhibits an extraordinary ______ of oil paintings created by contemporary Taiwanese artists.",
    "options": [
      "blood",
      "furniture",
      "collection",
      "powder"
    ],
    "answer": 2,
    "cn": "美術館展出了一批由台灣當代藝術家創作的非凡油畫收藏品。 【選項解析】(A) blood 血液  (B) furniture 家具  (C) collection 收藏品  (D) powder 粉末。collection of oil paintings 表「油畫收藏」。",
    "vocabIndex": 2
  },
  {
    "q": "The doctor said the patient lost a dangerous amount of ______ in the motorcycle accident and needs a transfusion.",
    "options": [
      "powder",
      "opportunity",
      "furniture",
      "blood"
    ],
    "answer": 3,
    "cn": "醫生說病患在機車車禍中失血量達到危險程度，需要緊急輸血。 【選項解析】(A) powder 粉末  (B) blood 血液  (C) furniture 家具  (D) opportunity 機會。lost a dangerous amount of blood 表「失血過多」。",
    "vocabIndex": 3
  },
  {
    "q": "Be careful when lifting heavy boxes with your back, or you might severely ______ your spinal muscles.",
    "options": [
      "mop",
      "sweep",
      "injure",
      "prefer"
    ],
    "answer": 2,
    "cn": "用背部搬運沉重箱子時要小心，否則你可能會嚴重弄傷脊椎肌肉。 【選項解析】(A) injure 受傷  (B) sweep 掃地  (C) mop 拖地  (D) prefer 偏好。injure muscles 表「弄傷肌肉」。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "furniture": {
    "pos": "n.",
    "en_def": "movable objects such as tables, chairs, and beds used in rooms",
    "cn_def": "家具",
    "combined": [
      {
        "pos": "n.",
        "en_def": "movable objects such as tables, chairs, and beds used in rooms",
        "cn_def": "家具"
      }
    ]
  },
  "gather": {
    "pos": "v.",
    "en_def": "to come together in a group; to collect things",
    "cn_def": "聚集；收集",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to come together in a group; to collect things",
        "cn_def": "聚集；收集"
      }
    ]
  },
  "collection": {
    "pos": "n.",
    "en_def": "a group of objects or art brought together in one place",
    "cn_def": "收藏品；收集物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a group of objects or art brought together in one place",
        "cn_def": "收藏品；收集物"
      }
    ]
  },
  "blood": {
    "pos": "n.",
    "en_def": "the red liquid that circulates through the arteries and veins",
    "cn_def": "血液",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the red liquid that circulates through the arteries and veins",
        "cn_def": "血液"
      }
    ]
  },
  "injure": {
    "pos": "v.",
    "en_def": "to hurt a person or animal physically, especially in an accident",
    "cn_def": "傷害；受傷",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to hurt a person or animal physically, especially in an accident",
        "cn_def": "傷害；受傷"
      }
    ]
  },
  "mop": {
    "pos": "v. / n.",
    "en_def": "to clean floors with a wet tool; the tool itself",
    "cn_def": "拖地；拖把",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to clean floors with a wet tool; the tool itself",
        "cn_def": "拖地；拖把"
      }
    ]
  },
  "sweep": {
    "pos": "v.",
    "en_def": "to clean dust or dirt from floors using a broom",
    "cn_def": "掃地；打掃",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to clean dust or dirt from floors using a broom",
        "cn_def": "掃地；打掃"
      }
    ]
  },
  "opportunity": {
    "pos": "n.",
    "en_def": "a chance to do something desirable or advantageous",
    "cn_def": "機會；良機",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a chance to do something desirable or advantageous",
        "cn_def": "機會；良機"
      }
    ]
  },
  "powder": {
    "pos": "n.",
    "en_def": "a dry substance in the form of very fine grains",
    "cn_def": "粉末；粉狀物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a dry substance in the form of very fine grains",
        "cn_def": "粉末；粉狀物"
      }
    ]
  },
  "prefer": {
    "pos": "v.",
    "en_def": "to like one thing or person better than another",
    "cn_def": "更喜歡；偏好",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to like one thing or person better than another",
        "cn_def": "更喜歡；偏好"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
