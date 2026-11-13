// Lesson 47 Quiz Data: Urban Architecture, Legal Facilities & Social Survival
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 47 - Urban Architecture, Legal Facilities & Social Survival",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "arrest",
    "pos": "v. / n.",
    "cn_def": "逮捕；拘捕",
    "en_def": "to seize by legal authority; legal custody",
    "sentence": "The police managed to {{BLANK}} the dangerous suspect near the airport before he could board the international flight.",
    "cn": "警方在危險嫌疑人登上國際航班之前，設法在機場附近將其逮捕。"
  },
  {
    "word": "struggle",
    "pos": "v. / n.",
    "cn_def": "掙扎；奮鬥；努力",
    "en_def": "to make forceful efforts against difficulties; contest",
    "sentence": "The poor family had to {{BLANK}} against hunger during the winter, but they supported each other through all hardship.",
    "cn": "貧困的家庭在冬天必須與飢餓作鬥爭，但他們在所有艱辛中互相支持。"
  },
  {
    "word": "survive",
    "pos": "v.",
    "cn_def": "倖存；存活",
    "en_def": "to continue to live or exist, especially after danger",
    "sentence": "Miraculously, all passengers managed to {{BLANK}} the train derailment with only minor scratches and bruises.",
    "cn": "奇蹟般地，所有乘客都在火車出軌事故中倖存下來，僅受了輕微的擦傷與瘀傷。"
  },
  {
    "word": "building",
    "pos": "n.",
    "cn_def": "建築物；大樓",
    "en_def": "a structure with a roof and walls, such as a house or factory",
    "sentence": "Taipei 101 is an iconic skyscraper {{BLANK}} that incorporates advanced engineering to withstand strong typhoons and earthquakes.",
    "cn": "台北101是一座標誌性的摩天大樓建築，融合了先進工程技術以抵禦強烈颱風和地震。"
  },
  {
    "word": "court",
    "pos": "n.",
    "cn_def": "法院；法庭；球場",
    "en_def": "a place where legal justice is administered; playing area",
    "sentence": "The witnesses testified truthfully before the judge in {{BLANK}}, helping the jury deliver a fair verdict.",
    "cn": "證人在法庭上面對法官如實作證，幫助陪審團做出了公正的裁決。"
  },
  {
    "word": "castle",
    "pos": "n.",
    "cn_def": "城堡",
    "en_def": "a large fortified historic building with thick walls",
    "sentence": "The ancient stone {{BLANK}} stood majestically on top of the green hill, overlooking the beautiful blue river below.",
    "cn": "古老的石頭城堡雄偉地矗立在綠色山丘頂上，俯瞰著下方美麗的藍色河流。"
  },
  {
    "word": "tower",
    "pos": "n.",
    "cn_def": "塔；高樓；信號塔",
    "en_def": "a tall, narrow building or part of a building",
    "sentence": "Visitors can take the high-speed glass elevator to the observation deck of the television {{BLANK}} to enjoy panoramic views.",
    "cn": "遊客可以搭乘高速玻璃電梯前往電視塔的觀景台，飽覽全景風光。"
  },
  {
    "word": "temple",
    "pos": "n.",
    "cn_def": "寺廟；神殿",
    "en_def": "a building devoted to religious worship",
    "sentence": "Devout worshipers burn fragrant incense and bow respectfully inside the historic Buddhist {{BLANK}} every morning.",
    "cn": "虔誠的信徒每天早晨在歷史悠久的佛教寺廟內燃燒芬芳的香火並恭敬鞠躬。"
  },
  {
    "word": "mall",
    "pos": "n.",
    "cn_def": "購物中心；商場",
    "en_def": "a large enclosed shopping area with many stores",
    "sentence": "Many local teenagers love to gather at the air-conditioned shopping {{BLANK}} on hot summer weekends to watch movies.",
    "cn": "許多當地的青少年喜歡在炎熱的夏日週末聚集在有冷氣的購物中心看電影。"
  },
  {
    "word": "downtown",
    "pos": "n. / adj. / adv.",
    "cn_def": "市中心；鬧區",
    "en_def": "the central part or business center of a city",
    "sentence": "Because street parking is extremely limited {{BLANK}}, taking the rapid transit train is the most convenient choice.",
    "cn": "由於市中心的街邊停車位極其有限，因此搭乘捷運列車是最方便的選擇。"
  }
];

const MCQS = [
  {
    "q": "The judge ordered the bailiff to maintain order inside the crowded ______ during the controversial trial.",
    "options": [
      "court",
      "castle",
      "tower",
      "temple"
    ],
    "answer": 0,
    "cn": "在爭議激烈的審判期間，法官命令法警在擁擠的法庭內維持秩序。 【選項解析】(A) court 法庭  (B) castle 城堡  (C) tower 塔樓  (D) temple 寺廟。法官開庭之所為 court。",
    "vocabIndex": 4
  },
  {
    "q": "The historic medieval ______ attracted thousands of tourists who marveled at its stone drawbridge and tall towers.",
    "options": [
      "mall",
      "court",
      "castle",
      "temple"
    ],
    "answer": 2,
    "cn": "這座歷史悠久的中世紀城堡吸引了成千上萬的遊客，大家對其石造吊橋與高塔讚嘆不已。 【選項解析】(A) castle 城堡  (B) court 法院  (C) mall 購物中心  (D) temple 寺廟。中世紀石造吊橋建物為 medieval castle。",
    "vocabIndex": 5
  },
  {
    "q": "Police officers arrived at the warehouse within minutes to ______ the burglary suspects before they could escape.",
    "options": [
      "protect",
      "struggle",
      "survive",
      "arrest"
    ],
    "answer": 3,
    "cn": "警官在數分鐘內趕到倉庫，在入室盜竊嫌疑人逃跑前將他們逮捕。 【選項解析】(A) arrest 逮捕  (B) struggle 掙扎  (C) survive 倖存  (D) protect 保護。警方捉拿嫌犯為 arrest。",
    "vocabIndex": 0
  },
  {
    "q": "Rescuers worked through the freezing night, hoping that trapped survivors would manage to ______ under the rubble.",
    "options": [
      "arrest",
      "survive",
      "struggle",
      "protect"
    ],
    "answer": 1,
    "cn": "救援人員在嚴寒的夜裡奮戰，希望受困的倖存者能夠在瓦礫堆下活下來。 【選項解析】(A) survive 倖存  (B) arrest 逮捕  (C) struggle 掙扎  (D) protect 保護。災難存活為 survive。",
    "vocabIndex": 2
  },
  {
    "q": "You can buy clothes, dine in fancy restaurants, and watch movies all in one place at the newly built shopping ______.",
    "options": [
      "mall",
      "castle",
      "temple",
      "tower"
    ],
    "answer": 0,
    "cn": "在新建的購物中心裡，你可以在同一地點買衣服、在精緻餐廳用餐以及看電影。 【選項解析】(A) mall 購物商場  (B) castle 城堡  (C) temple 寺廟  (D) tower 塔。集購物餐飲電影於一體為 shopping mall。",
    "vocabIndex": 8
  },
  {
    "q": "Many elderly residents visit the neighborhood ______ on the first day of the lunar month to pray for good health.",
    "options": [
      "castle",
      "mall",
      "temple",
      "court"
    ],
    "answer": 2,
    "cn": "許多長者在農曆初一造訪社區寺廟，祈求身體健康。 【選項解析】(A) temple 寺廟  (B) mall 商場  (C) castle 城堡  (D) court 法院。燒香祈福之處為 temple。",
    "vocabIndex": 7
  },
  {
    "q": "The architect designed an eco-friendly office ______ with solar panels on the roof and natural ventilation.",
    "options": [
      "temple",
      "castle",
      "court",
      "building"
    ],
    "answer": 3,
    "cn": "建築師設計了一座環保辦公大樓，屋頂裝有太陽能板並具備自然通風設計。 【選項解析】(A) building 建築  (B) castle 城堡  (C) court 法院  (D) temple 寺廟。辦公大樓為 office building。",
    "vocabIndex": 3
  },
  {
    "q": "Taking the subway to ______ during rush hour saves a lot of time compared to driving on congested streets.",
    "options": [
      "castle",
      "downtown",
      "temple",
      "court"
    ],
    "answer": 1,
    "cn": "在尖峰時段搭地鐵前往市中心，比起在擁堵的街道上開車節省了大量時間。 【選項解析】(A) downtown 市中心  (B) castle 城堡  (C) temple 寺廟  (D) court 法院。商业核心鬧區為 downtown。",
    "vocabIndex": 9
  },
  {
    "q": "The Eiffel ______ in Paris was constructed for the 1889 World's Fair and remains one of the world's most famous landmarks.",
    "options": [
      "Court",
      "Castle",
      "Temple",
      "Tower"
    ],
    "answer": 3,
    "cn": "巴黎艾菲爾鐵塔建於1889年世界博覽會，至今仍是全球最著名的地標之一。 【選項解析】(A) Tower 鐵塔  (B) Castle 城堡  (C) Temple 神殿  (D) Court 法庭。Eiffel Tower（艾菲爾鐵塔）。",
    "vocabIndex": 6
  },
  {
    "q": "Small independent bookstores often ______ to remain profitable when competing against giant online retailers.",
    "options": [
      "struggle",
      "arrest",
      "survive",
      "protect"
    ],
    "answer": 0,
    "cn": "小型獨立書店在與大型網路零售商競爭時，往往苦苦掙扎以維持盈利。 【選項解析】(A) struggle 奮力掙扎  (B) arrest 逮捕  (C) survive 存活  (D) protect 保護。經營困難掙扎為 struggle to remain profitable。",
    "vocabIndex": 1
  },
  {
    "q": "Two heavily armed detectives executed a warrant to ______ the corrupt official at his private villa.",
    "options": [
      "struggle",
      "arrest",
      "survive",
      "succeed"
    ],
    "answer": 1,
    "cn": "兩名全副武裝的便衣警探執行了搜捕令，在貪腐官員的私人別墅將其逮捕。 【選項解析】(A) arrest 逮捕  (B) struggle 搏鬥  (C) survive 存活  (D) succeed 成功。執行逮捕為 execute warrant to arrest。",
    "vocabIndex": 0
  },
  {
    "q": "The ancient clock ______ in the city square chimes loudly every hour to remind citizens of the time.",
    "options": [
      "castle",
      "court",
      "tower",
      "temple"
    ],
    "answer": 2,
    "cn": "城市廣場上的古老鐘樓每小時都會大聲鳴響，提醒市民時間。 【選項解析】(A) tower 鐘樓  (B) court 法院  (C) castle 城堡  (D) temple 寺廟。鐘塔為 clock tower。",
    "vocabIndex": 6
  },
  {
    "q": "The jury delivered a verdict of not guilty, bringing tears of relief to the defendant's family in the ______.",
    "options": [
      "castle",
      "temple",
      "mall",
      "court"
    ],
    "answer": 3,
    "cn": "陪審團做出了無罪裁決，給法庭上被告的家屬帶來了欣慰的淚水。 【選項解析】(A) court 法庭  (B) temple 寺廟  (C) mall 商場  (D) castle 城堡。法庭宣判之所為 court。",
    "vocabIndex": 4
  },
  {
    "q": "Plants in the desert have developed deep root systems that help them ______ through extreme heat and severe drought.",
    "options": [
      "arrest",
      "survive",
      "struggle",
      "fail"
    ],
    "answer": 1,
    "cn": "沙漠中的植物進化出深根系統，幫助它們在極端高溫與嚴重乾旱中存活下來。 【選項解析】(A) survive 存活  (B) arrest 逮捕  (C) struggle 掙扎  (D) fail 枯萎。乾旱中生存為 survive。",
    "vocabIndex": 2
  },
  {
    "q": "The royal family hosted an extravagant ball in the great hall of their country ______.",
    "options": [
      "court",
      "mall",
      "castle",
      "temple"
    ],
    "answer": 2,
    "cn": "皇室家族在他們的鄉村城堡大廳舉辦了一場盛大的舞會。 【選項解析】(A) castle 城堡  (B) mall 商場  (C) court 法院  (D) temple 寺廟。貴族鄉村城堡為 country castle。",
    "vocabIndex": 5
  },
  {
    "q": "Hundreds of families flocked to the suburban shopping ______ on Black Friday to purchase discounted electronic appliances.",
    "options": [
      "mall",
      "temple",
      "castle",
      "court"
    ],
    "answer": 0,
    "cn": "數百個家庭在黑色星期五湧向郊區購物中心購買折扣家電。 【選項解析】(A) mall 購物中心  (B) temple 寺廟  (C) castle 城堡  (D) court 法庭。shopping mall（購物中心）。",
    "vocabIndex": 8
  },
  {
    "q": "In traditional Asian culture, people remove their hats and maintain respectful silence upon entering a Buddhist ______.",
    "options": [
      "mall",
      "temple",
      "court",
      "castle"
    ],
    "answer": 1,
    "cn": "在傳統亞洲文化中，人們進入佛寺時會脫帽並保持恭敬肅靜。 【選項解析】(A) temple 寺廟  (B) mall 購物中心  (C) court 法庭  (D) castle 城堡。佛教寺院為 Buddhist temple。",
    "vocabIndex": 7
  },
  {
    "q": "During the hurricane, several windows of the tall commercial ______ were shattered by flying debris.",
    "options": [
      "court",
      "castle",
      "building",
      "temple"
    ],
    "answer": 2,
    "cn": "在颶風襲擊期間，這棟高層商業大樓的好幾扇窗戶被飛來的碎片震碎。 【選項解析】(A) building 大樓  (B) castle 城堡  (C) court 法院  (D) temple 寺廟。commercial building（商業大樓）。",
    "vocabIndex": 3
  },
  {
    "q": "Working parents often ______ to balance demanding careers with raising young children at home.",
    "options": [
      "struggle",
      "arrest",
      "survive",
      "protect"
    ],
    "answer": 0,
    "cn": "雙薪父母常常在平衡繁重的職業工作與在家撫養幼童之間艱難奮鬥。 【選項解析】(A) struggle 奮力掙扎  (B) arrest 拘留  (C) survive 倖存  (D) protect 保護。struggle to balance（努力取得平衡）。",
    "vocabIndex": 1
  },
  {
    "q": "The famous department store located in ______ offers a wide range of luxury cosmetics and imported apparel.",
    "options": [
      "court",
      "castle",
      "temple",
      "downtown"
    ],
    "answer": 3,
    "cn": "這家位於市中心的著名百貨公司提供各式各樣的高檔化妝品與進口服飾。 【選項解析】(A) downtown 市中心  (B) castle 城堡  (C) temple 寺廟  (D) court 法庭。located in downtown（座落於市中心）。",
    "vocabIndex": 9
  },
  {
    "q": "The lighthouse ______ flashed its bright guiding light across the stormy waters to warn ships away from dangerous rocks.",
    "options": [
      "tower",
      "court",
      "castle",
      "temple"
    ],
    "answer": 0,
    "cn": "燈塔塔樓穿過暴風雨的海面閃爍著明亮的導航光芒，警告船隻避開危險岩石。 【選項解析】(A) tower 塔樓  (B) court 法庭  (C) castle 城堡  (D) temple 寺廟。lighthouse tower（燈塔塔樓）。",
    "vocabIndex": 6
  },
  {
    "q": "If you fail to repay the debt, the creditor has the legal right to take you to ______.",
    "options": [
      "mall",
      "castle",
      "temple",
      "court"
    ],
    "answer": 3,
    "cn": "如果你不及時償還債務，債權人有法定權利將你告上法庭。 【選項解析】(A) court 法院  (B) castle 城堡  (C) temple 寺廟  (D) mall 商場。take sb. to court（將某人告上法庭）。",
    "vocabIndex": 4
  },
  {
    "q": "The courageous explorer managed to ______ alone in the harsh Arctic wilderness for three months.",
    "options": [
      "arrest",
      "survive",
      "struggle",
      "fail"
    ],
    "answer": 1,
    "cn": "那位英勇的探險家設法在嚴酷的北極荒野中獨自生存了三個月。 【選項解析】(A) survive 生存  (B) arrest 逮捕  (C) struggle 掙扎  (D) fail 失敗。荒野求生為 survive in the wilderness。",
    "vocabIndex": 2
  },
  {
    "q": "Security guards at the shopping ______ monitored the surveillance cameras to prevent shoplifting.",
    "options": [
      "temple",
      "castle",
      "mall",
      "court"
    ],
    "answer": 2,
    "cn": "購物中心的保全人員監控監視攝影機以防止店鋪盜竊。 【選項解析】(A) mall 購物中心  (B) castle 城堡  (C) temple 寺院  (D) court 法院。shopping mall（購物中心）。",
    "vocabIndex": 8
  },
  {
    "q": "The criminal was placed under ______ immediately after stepping off the passenger ferry.",
    "options": [
      "struggle",
      "arrest",
      "survive",
      "success"
    ],
    "answer": 1,
    "cn": "那名罪犯在走下客運渡輪後立即被警方拘捕。 【選項解析】(A) arrest 逮捕  (B) struggle 奮鬥  (C) survive 存活  (D) success 成功。under arrest（被逮捕）。",
    "vocabIndex": 0
  }
];

const LOOKUP = {
  "arrest": {
    "pos": "v. / n.",
    "en_def": "to seize by legal authority; legal custody",
    "cn_def": "逮捕；拘捕",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to seize by legal authority; legal custody",
        "cn_def": "逮捕；拘捕"
      }
    ]
  },
  "struggle": {
    "pos": "v. / n.",
    "en_def": "to make forceful efforts against difficulties; contest",
    "cn_def": "掙扎；奮鬥；努力",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to make forceful efforts against difficulties; contest",
        "cn_def": "掙扎；奮鬥；努力"
      }
    ]
  },
  "survive": {
    "pos": "v.",
    "en_def": "to continue to live or exist, especially after danger",
    "cn_def": "倖存；存活",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to continue to live or exist, especially after danger",
        "cn_def": "倖存；存活"
      }
    ]
  },
  "building": {
    "pos": "n.",
    "en_def": "a structure with a roof and walls, such as a house or factory",
    "cn_def": "建築物；大樓",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a structure with a roof and walls, such as a house or factory",
        "cn_def": "建築物；大樓"
      }
    ]
  },
  "court": {
    "pos": "n.",
    "en_def": "a place where legal justice is administered; playing area",
    "cn_def": "法院；法庭；球場",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a place where legal justice is administered; playing area",
        "cn_def": "法院；法庭；球場"
      }
    ]
  },
  "castle": {
    "pos": "n.",
    "en_def": "a large fortified historic building with thick walls",
    "cn_def": "城堡",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large fortified historic building with thick walls",
        "cn_def": "城堡"
      }
    ]
  },
  "tower": {
    "pos": "n.",
    "en_def": "a tall, narrow building or part of a building",
    "cn_def": "塔；高樓；信號塔",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a tall, narrow building or part of a building",
        "cn_def": "塔；高樓；信號塔"
      }
    ]
  },
  "temple": {
    "pos": "n.",
    "en_def": "a building devoted to religious worship",
    "cn_def": "寺廟；神殿",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a building devoted to religious worship",
        "cn_def": "寺廟；神殿"
      }
    ]
  },
  "mall": {
    "pos": "n.",
    "en_def": "a large enclosed shopping area with many stores",
    "cn_def": "購物中心；商場",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large enclosed shopping area with many stores",
        "cn_def": "購物中心；商場"
      }
    ]
  },
  "downtown": {
    "pos": "n. / adj. / adv.",
    "en_def": "the central part or business center of a city",
    "cn_def": "市中心；鬧區",
    "combined": [
      {
        "pos": "n. / adj. / adv.",
        "en_def": "the central part or business center of a city",
        "cn_def": "市中心；鬧區"
      }
    ]
  },
  "protect": {
    "pos": "",
    "en_def": "",
    "cn_def": "保護",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "保護"
      }
    ]
  },
  "succeed": {
    "pos": "",
    "en_def": "",
    "cn_def": "成功",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "成功"
      }
    ]
  },
  "fail": {
    "pos": "",
    "en_def": "",
    "cn_def": "枯萎",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "枯萎"
      }
    ]
  },
  "success": {
    "pos": "",
    "en_def": "",
    "cn_def": "成功",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "成功"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
