// Lesson 65 Quiz Data: Law, Justice, Government Systems & Civil Society
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 65 - Law, Justice, Government Systems & Civil Society",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "far",
    "pos": "adj. / adv.",
    "cn_def": "遙遠的；遠地",
    "en_def": "at, to, or by a great distance in space or time",
    "sentence": "The isolated mountain cabin was situated on the {{BLANK}} side of the wide valley, far away from city noise.",
    "cn": "那座偏僻的山間小屋坐落在寬廣山谷遙遠的一側，遠離城市的喧囂。"
  },
  {
    "word": "distance",
    "pos": "n.",
    "cn_def": "距離",
    "en_def": "the amount of space between two points or places",
    "sentence": "When driving on the highway during heavy rain, drivers should always keep a safe {{BLANK}} from the vehicle in front.",
    "cn": "在大雨期間於高速公路上行駛時，駕駛人應始終與前車保持安全距離。"
  },
  {
    "word": "legal",
    "pos": "adj.",
    "cn_def": "合法的；法律的",
    "en_def": "permitted by law; relating to the law",
    "sentence": "Before signing any commercial contract, you should seek professional advice from an experienced {{BLANK}} expert.",
    "cn": "在簽署任何商業合約之前，你應該向經驗豐富的法律專家尋求專業建議。"
  },
  {
    "word": "crime",
    "pos": "n.",
    "cn_def": "罪行；犯罪",
    "en_def": "an illegal action or activity for which a person can be punished",
    "sentence": "The city police department launched an intensive public campaign to fight street {{BLANK}} and protect local businesses.",
    "cn": "市警局發起了一場密集的公眾宣傳運動，以打擊街頭犯罪並保護當地企業。"
  },
  {
    "word": "prison",
    "pos": "n.",
    "cn_def": "監獄",
    "en_def": "a building to which people are legally committed as a punishment for crimes",
    "sentence": "The convicted burglar was sentenced by the criminal court to five years in {{BLANK}} for breaking into private residences.",
    "cn": "這名被定罪的竊賊因闖入私人住宅，被刑事法院判處在監獄服刑五年。"
  },
  {
    "word": "democracy",
    "pos": "n.",
    "cn_def": "民主；民主政治",
    "en_def": "a system of government by the whole population, usually through elected representatives",
    "sentence": "In a healthy modern {{BLANK}}, citizens exercise their political power by participating freely in national elections.",
    "cn": "在健全的現代民主制度中，公民藉由自由參與國家選舉來行使他們的政治權力。"
  },
  {
    "word": "government",
    "pos": "n.",
    "cn_def": "政府",
    "en_def": "the governing body of a nation, state, or community",
    "sentence": "President Lincoln once stated that true democracy is a {{BLANK}} of the people, by the people, and for the people.",
    "cn": "林肯總統曾表示，真正的民主乃是民有、民治、民享的政府。"
  },
  {
    "word": "kingdom",
    "pos": "n.",
    "cn_def": "王國",
    "en_def": "a country, state, or territory ruled by a king or queen",
    "sentence": "The ancient island {{BLANK}} was ruled peacefully by a wise monarch who cared deeply about his people's welfare.",
    "cn": "這個古老的島嶼王國由一位深切關懷人民福祉的賢明君主所和平統治。"
  },
  {
    "word": "organization",
    "pos": "n.",
    "cn_def": "組織；機構",
    "en_def": "an organized body of people with a particular purpose, such as a business or charity",
    "sentence": "Taiwan has been an active member of the World Trade {{BLANK}} and continues to expand its international business partnerships.",
    "cn": "台灣一直是世界貿易組織的活躍成員，並持續拓展其國際商業夥伴關係。"
  },
  {
    "word": "society",
    "pos": "n.",
    "cn_def": "社會",
    "en_def": "the aggregate of people living together in a more or less ordered community",
    "sentence": "Education plays a vital role in modern {{BLANK}}, helping young individuals become responsible and productive citizens.",
    "cn": "教育在現代社會中扮演著至關重要的角色，幫助年輕個體成長為負責任且富有成效的公民。"
  }
];

const MCQS = [
  {
    "q": "How ______ is it from your downtown office to the international airport by express subway?",
    "options": [
      "legal",
      "far",
      "social",
      "crowded"
    ],
    "answer": 1,
    "cn": "從你市中心的辦公室搭捷運特快車到國際機場有多遠？ 【選項解析】(A) legal 合法的  (B) far 遠的  (C) social 社交的  (D) crowded 擁擠的。詢問距離用 How far。",
    "vocabIndex": 0
  },
  {
    "q": "The high-speed rail enables travelers to cross a ______ of three hundred kilometers in less than two hours.",
    "options": [
      "democracy",
      "kingdom",
      "distance",
      "prison"
    ],
    "answer": 2,
    "cn": "高鐵使旅客能在不到兩小時內跨越三百公里的距離。 【選項解析】(A) distance 距離  (B) kingdom 王國  (C) democracy 民主  (D) prison 監獄。跨越三百公里指 a distance of 300 km。",
    "vocabIndex": 1
  },
  {
    "q": "Selling tobacco products or alcoholic drinks to minors under eighteen is strictly against the ______ regulations.",
    "options": [
      "far",
      "broad",
      "wide",
      "legal"
    ],
    "answer": 3,
    "cn": "向未滿十八歲的未成年人販售菸草製品或酒精飲料嚴格違反法律規定。 【選項解析】(A) far 遠的  (B) legal 法律的  (C) wide 寬的  (D) broad 寬廣的。legal regulations 為「法規」。",
    "vocabIndex": 2
  },
  {
    "q": "The newly elected mayor promised to increase police patrols in order to reduce violent ______ in the city center.",
    "options": [
      "crime",
      "organization",
      "distance",
      "society"
    ],
    "answer": 0,
    "cn": "新當選的市長承諾增加警力巡邏，以減少市中心的街頭暴力犯罪。 【選項解析】(A) society 社會  (B) organization 組織  (C) distance 距離  (D) crime 犯罪。打擊暴力行為為 violent crime。",
    "vocabIndex": 3
  },
  {
    "q": "The dangerous robber was captured by armed police and sentenced to spend ten years in a maximum-security ______.",
    "options": [
      "democracy",
      "kingdom",
      "prison",
      "government"
    ],
    "answer": 2,
    "cn": "危險的強盜被武裝警察逮捕，並被判處在高度戒備的監獄中服刑十年。 【選項解析】(A) democracy 民主  (B) prison 監獄  (C) kingdom 王國  (D) government 政府。服刑收押場所為 prison。",
    "vocabIndex": 4
  },
  {
    "q": "Free speech and open public debate are considered the foundational pillars of any modern ______.",
    "options": [
      "distance",
      "prison",
      "crime",
      "democracy"
    ],
    "answer": 3,
    "cn": "言論自由和公開的公眾辯論被認為是任何現代民主體制的立國基石。 【選項解析】(A) distance 距離  (B) prison 監獄  (C) democracy 民主政體  (D) crime 犯罪。言論自由體現於 democracy。",
    "vocabIndex": 5
  },
  {
    "q": "The central ______ approved a generous financial relief budget to help farmers affected by the typhoon.",
    "options": [
      "government",
      "prison",
      "distance",
      "crime"
    ],
    "answer": 0,
    "cn": "中央政府批准了慷慨的財政救濟預算，以幫助受颱風影響的農民。 【選項解析】(A) government 政府  (B) prison 監獄  (C) distance 距離  (D) crime 犯罪。中央執政機構為 central government。",
    "vocabIndex": 6
  },
  {
    "q": "The United Kingdom is a constitutional monarchy where the ruling monarch serves as the ceremonial head of the ______.",
    "options": [
      "democracy",
      "kingdom",
      "distance",
      "crime"
    ],
    "answer": 1,
    "cn": "英國是一個君主立憲制國家，在位君主擔任該王國的禮儀性元首。 【選項解析】(A) democracy 民主  (B) distance 距離  (C) kingdom 王國  (D) crime 犯罪。United Kingdom 屬於王國 kingdom。",
    "vocabIndex": 7
  },
  {
    "q": "The United Nations is an international ______ dedicated to maintaining global peace and promoting human rights.",
    "options": [
      "organization",
      "prison",
      "distance",
      "crime"
    ],
    "answer": 0,
    "cn": "聯合國是一個致力於維護全球和平與促進人權的國際組織。 【選項解析】(A) prison 監獄  (B) organization 組織  (C) distance 距離  (D) crime 犯罪。國際機構稱為 international organization。",
    "vocabIndex": 8
  },
  {
    "q": "Rapid economic changes in modern ______ have created new employment opportunities as well as new social challenges.",
    "options": [
      "prison",
      "distance",
      "society",
      "crime"
    ],
    "answer": 2,
    "cn": "現代社會迅速的經濟變遷創造了新的就業機會，也帶來了新的社會挑戰。 【選項解析】(A) prison 監獄  (B) distance 距離  (C) crime 犯罪  (D) society 社會。人類共同生活群體為 modern society。",
    "vocabIndex": 9
  },
  {
    "q": "Although the historic temple looked near on the map, it was situated on the ______ side of the steep mountain.",
    "options": [
      "legal",
      "narrow",
      "direct",
      "far"
    ],
    "answer": 3,
    "cn": "雖然古老寺廟在地上看起來很近，但它坐落在陡峭高山遙遠的一側。 【選項解析】(A) legal 合法的  (B) far 遠方的  (C) direct 直達的  (D) narrow 狹窄的。the far side 表示「遠端那一側」。",
    "vocabIndex": 0
  },
  {
    "q": "Drivers should maintain an adequate stopping ______ on wet roads to avoid rear-end collisions.",
    "options": [
      "crime",
      "distance",
      "society",
      "government"
    ],
    "answer": 1,
    "cn": "駕駛人應在濕滑路面上保持足夠的煞車距離，以避免追撞事故。 【選項解析】(A) distance 距離  (B) crime 犯罪  (C) society 社會  (D) government 政府。煞車安全間隔為 stopping distance。",
    "vocabIndex": 1
  },
  {
    "q": "The company hired a team of experienced ______ advisers to review the terms of the merger agreement.",
    "options": [
      "far",
      "equal",
      "legal",
      "maximum"
    ],
    "answer": 2,
    "cn": "該公司聘請了一支經驗豐富的法律顧問團隊，來審查合併協議條款。 【選項解析】(A) far 遠的  (B) legal 法律的  (C) equal 平等的  (D) maximum 最大的。法律顧問為 legal advisers。",
    "vocabIndex": 2
  },
  {
    "q": "Identity theft has become a widespread cyber ______ that affects millions of internet users every year.",
    "options": [
      "organization",
      "kingdom",
      "distance",
      "crime"
    ],
    "answer": 3,
    "cn": "身分盜用已成為每年影響數百萬網路使用者的普遍網路犯罪。 【選項解析】(A) organization 組織  (B) kingdom 王國  (C) distance 距離  (D) crime 犯罪。違法侵害行為為 cyber crime。",
    "vocabIndex": 3
  },
  {
    "q": "Several non-violent offenders were released early from ______ after demonstrating good behavior during rehabilitation.",
    "options": [
      "democracy",
      "prison",
      "kingdom",
      "distance"
    ],
    "answer": 1,
    "cn": "幾名非暴力犯罪者在感化期間表現良好，因而獲得從監獄提前釋放。 【選項解析】(A) democracy 民主  (B) prison 監獄  (C) kingdom 王國  (D) distance 距離。獲釋出獄為 released from prison。",
    "vocabIndex": 4
  },
  {
    "q": "Without universal education and free press, it is difficult for a young nation to establish a stable ______.",
    "options": [
      "democracy",
      "crime",
      "prison",
      "distance"
    ],
    "answer": 0,
    "cn": "如果沒有普及教育和新聞自由，一個年輕的國家很難建立穩定的民主制度。 【選項解析】(A) democracy 民主  (B) crime 犯罪  (C) prison 監獄  (D) distance 距離。穩定政體指 stable democracy。",
    "vocabIndex": 5
  },
  {
    "q": "Local ______ agencies worked tirelessly overnight to restore electricity and clear debris from major avenues.",
    "options": [
      "crime",
      "distance",
      "government",
      "kingdom"
    ],
    "answer": 2,
    "cn": "地方政府機構徹夜不懈地工作，以恢復電力並清理主要幹道上的碎瓦雜物。 【選項解析】(A) government 政府  (B) distance 距離  (C) crime 犯罪  (D) kingdom 王國。公部門單位為 local government agencies。",
    "vocabIndex": 6
  },
  {
    "q": "In ancient fairy tales, the brave prince traveled across seven seas to rescue the enchanted ______.",
    "options": [
      "kingdom",
      "distance",
      "democracy",
      "organization"
    ],
    "answer": 0,
    "cn": "在古代童話故事中，英勇的王子橫渡七大洋去拯救那個被施了魔法的王國。 【選項解析】(A) distance 距離  (B) kingdom 王國  (C) democracy 民主  (D) organization 組織。童話國度稱為 kingdom。",
    "vocabIndex": 7
  },
  {
    "q": "Red Cross is a humanitarian ______ that provides emergency medical relief during natural catastrophes.",
    "options": [
      "prison",
      "organization",
      "crime",
      "distance"
    ],
    "answer": 1,
    "cn": "紅十字會是一個在自然災害期間提供緊急醫療援助的人道組織。 【選項解析】(A) prison 監獄  (B) organization 組織  (C) crime 犯罪  (D) distance 距離。人道慈善團體為 humanitarian organization。",
    "vocabIndex": 8
  },
  {
    "q": "Every member of ______ shares a collective duty to protect natural ecosystems for future generations.",
    "options": [
      "distance",
      "prison",
      "crime",
      "society"
    ],
    "answer": 3,
    "cn": "社會的每位成員都肩負著共同的責任，為後代子孫保護自然生態系。 【選項解析】(A) distance 距離  (B) prison 監獄  (C) crime 犯罪  (D) society 社會。社會成員為 every member of society。",
    "vocabIndex": 9
  },
  {
    "q": "The lighthouse was located so ______ out at sea that we could only see its blinking light through binoculars.",
    "options": [
      "legal",
      "far",
      "direct",
      "equal"
    ],
    "answer": 1,
    "cn": "燈塔坐落在外海如此遙遠之處，以致於我們只能透過望遠鏡看到它閃爍的燈光。 【選項解析】(A) far 遙遠地  (B) legal 合法的  (C) direct 直接的  (D) equal 平等的。坐落遠方用 far out at sea。",
    "vocabIndex": 0
  },
  {
    "q": "The telescope allows astronomers to observe distant galaxies that are situated at an enormous ______ from Earth.",
    "options": [
      "distance",
      "kingdom",
      "crime",
      "government"
    ],
    "answer": 0,
    "cn": "這架望遠鏡使天文學家能夠觀測距離地球極為遙遠的遙遠星系。 【選項解析】(A) crime 犯罪  (B) kingdom 王國  (C) distance 距離  (D) government 政府。巨大的距離為 an enormous distance。",
    "vocabIndex": 1
  },
  {
    "q": "You must obtain a ______ permit from the city planning department before building an extension to your house.",
    "options": [
      "far",
      "curved",
      "narrow",
      "legal"
    ],
    "answer": 3,
    "cn": "在擴建你的房屋之前，你必須先從市政府都市計畫部門取得合法許可證。 【選項解析】(A) far 遠的  (B) legal 合法的  (C) narrow 狹窄的  (D) curved 彎曲的。依法核准文件為 legal permit。",
    "vocabIndex": 2
  },
  {
    "q": "Neighborhood watch programs encourage residents to look out for suspicious behavior and prevent property ______.",
    "options": [
      "organization",
      "distance",
      "crime",
      "kingdom"
    ],
    "answer": 2,
    "cn": "守望相助計畫鼓勵居民留意可疑行為，並預防財產犯罪。 【選項解析】(A) crime 犯罪  (B) distance 距離  (C) organization 組織  (D) kingdom 王國。侵犯財產之罪行為 property crime。",
    "vocabIndex": 3
  },
  {
    "q": "A charitable ______ was founded by local doctors to provide free medical checkups for low-income families.",
    "options": [
      "organization",
      "democracy",
      "kingdom",
      "prison"
    ],
    "answer": 0,
    "cn": "當地醫生創立了一個慈善機構，為低收入家庭提供免費健康檢查。 【選項解析】(A) prison 監獄  (B) democracy 民主  (C) kingdom 王國  (D) organization 組織。慈善機構為 charitable organization。",
    "vocabIndex": 8
  }
];

const LOOKUP = {
  "far": {
    "pos": "adj. / adv.",
    "en_def": "at, to, or by a great distance in space or time",
    "cn_def": "遙遠的；遠地",
    "combined": [
      {
        "pos": "adj. / adv.",
        "en_def": "at, to, or by a great distance in space or time",
        "cn_def": "遙遠的；遠地"
      }
    ]
  },
  "distance": {
    "pos": "n.",
    "en_def": "the amount of space between two points or places",
    "cn_def": "距離",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the amount of space between two points or places",
        "cn_def": "距離"
      }
    ]
  },
  "legal": {
    "pos": "adj.",
    "en_def": "permitted by law; relating to the law",
    "cn_def": "合法的；法律的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "permitted by law; relating to the law",
        "cn_def": "合法的；法律的"
      }
    ]
  },
  "crime": {
    "pos": "n.",
    "en_def": "an illegal action or activity for which a person can be punished",
    "cn_def": "罪行；犯罪",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an illegal action or activity for which a person can be punished",
        "cn_def": "罪行；犯罪"
      }
    ]
  },
  "prison": {
    "pos": "n.",
    "en_def": "a building to which people are legally committed as a punishment for crimes",
    "cn_def": "監獄",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a building to which people are legally committed as a punishment for crimes",
        "cn_def": "監獄"
      }
    ]
  },
  "democracy": {
    "pos": "n.",
    "en_def": "a system of government by the whole population, usually through elected representatives",
    "cn_def": "民主；民主政治",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a system of government by the whole population, usually through elected representatives",
        "cn_def": "民主；民主政治"
      }
    ]
  },
  "government": {
    "pos": "n.",
    "en_def": "the governing body of a nation, state, or community",
    "cn_def": "政府",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the governing body of a nation, state, or community",
        "cn_def": "政府"
      }
    ]
  },
  "kingdom": {
    "pos": "n.",
    "en_def": "a country, state, or territory ruled by a king or queen",
    "cn_def": "王國",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a country, state, or territory ruled by a king or queen",
        "cn_def": "王國"
      }
    ]
  },
  "organization": {
    "pos": "n.",
    "en_def": "an organized body of people with a particular purpose, such as a business or charity",
    "cn_def": "組織；機構",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an organized body of people with a particular purpose, such as a business or charity",
        "cn_def": "組織；機構"
      }
    ]
  },
  "society": {
    "pos": "n.",
    "en_def": "the aggregate of people living together in a more or less ordered community",
    "cn_def": "社會",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the aggregate of people living together in a more or less ordered community",
        "cn_def": "社會"
      }
    ]
  },
  "social": {
    "pos": "",
    "en_def": "",
    "cn_def": "社交的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "社交的"
      }
    ]
  },
  "crowded": {
    "pos": "",
    "en_def": "",
    "cn_def": "擁擠的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "擁擠的"
      }
    ]
  },
  "broad": {
    "pos": "",
    "en_def": "",
    "cn_def": "寬廣的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "寬廣的"
      }
    ]
  },
  "wide": {
    "pos": "",
    "en_def": "",
    "cn_def": "寬的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "寬的"
      }
    ]
  },
  "narrow": {
    "pos": "",
    "en_def": "",
    "cn_def": "狹窄的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "狹窄的"
      }
    ]
  },
  "direct": {
    "pos": "",
    "en_def": "",
    "cn_def": "直達的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "直達的"
      }
    ]
  },
  "equal": {
    "pos": "",
    "en_def": "",
    "cn_def": "平等的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "平等的"
      }
    ]
  },
  "maximum": {
    "pos": "",
    "en_def": "",
    "cn_def": "最大的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "最大的"
      }
    ]
  },
  "curved": {
    "pos": "",
    "en_def": "",
    "cn_def": "彎曲的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "彎曲的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
