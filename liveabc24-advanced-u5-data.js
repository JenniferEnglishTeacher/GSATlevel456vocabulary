// Unit 5 Quiz Data: industry – generation gap
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Advanced U5 - industry – generation gap",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "industry",
    "pos": "n.",
    "cn_def": "工業、製造業",
    "en_def": "the production of goods, especially in factories.",
    "sentence": "The steel {{BLANK}} played a key role in the country's rapid economic growth during the early twentieth century.",
    "cn": "鋼鐵工業在二十世紀初該國的快速經濟成長中發揮了關鍵作用。"
  },
  {
    "word": "industry",
    "pos": "n.",
    "cn_def": "行業、產業",
    "en_def": "a specific branch of business or trade.",
    "sentence": "The tourism {{BLANK}} was severely affected by the pandemic, and many hotels and airlines struggled to survive.",
    "cn": "旅遊業受到疫情的嚴重衝擊，許多酒店和航空公司都在苦苦求存。"
  },
  {
    "word": "industrial",
    "pos": "adj.",
    "cn_def": "工業的、產業的",
    "en_def": "relating to factories, manufacturing, or business.",
    "sentence": "The city's {{BLANK}} area is located on the outskirts, far away from residential neighbourhoods and schools.",
    "cn": "該市的工業區位於城市邊緣，遠離住宅區和學校。"
  },
  {
    "word": "industrialize",
    "pos": "v.",
    "cn_def": "使工業化",
    "en_def": "to build factories and industries in a country.",
    "sentence": "Many developing countries are trying to {{BLANK}} quickly in order to create jobs and improve their citizens' living standards.",
    "cn": "許多發展中國家正努力快速工業化，以創造就業機會並提升公民的生活水準。"
  },
  {
    "word": "industrious",
    "pos": "adj.",
    "cn_def": "勤奮的、刻苦的",
    "en_def": "working hard and regularly; busy.",
    "sentence": "She is such an {{BLANK}} student that she always finishes her assignments early and uses extra time to review her notes.",
    "cn": "她是個如此勤奮的學生，總是提早完成作業，並利用額外時間複習筆記。"
  },
  {
    "word": "produce",
    "pos": "v.",
    "cn_def": "生產、製造、出產",
    "en_def": "to make, grow, or manufacture something.",
    "sentence": "This factory can {{BLANK}} up to five thousand pairs of shoes per day, making it one of the largest in the region.",
    "cn": "這家工廠每天能生產多達五千雙鞋子，是該地區最大的工廠之一。"
  },
  {
    "word": "produce",
    "pos": "v.",
    "cn_def": "拿出、出示",
    "en_def": "to bring out or show something for inspection.",
    "sentence": "The security guard asked the visitor to {{BLANK}} a valid ID card before allowing her to enter the building.",
    "cn": "保全要求訪客在進入大樓前出示有效身分證件。"
  },
  {
    "word": "produce",
    "pos": "n.",
    "cn_def": "農產品",
    "en_def": "food that has been grown on a farm.",
    "sentence": "The market is famous for selling fresh local {{BLANK}}, including vegetables, fruit, and herbs grown by nearby farmers.",
    "cn": "這個市場以販售新鮮本地農產品而聞名，包括附近農民種植的蔬菜、水果和香草。"
  },
  {
    "word": "product",
    "pos": "n.",
    "cn_def": "產品、產物",
    "en_def": "something that is made to be sold.",
    "sentence": "The company launched a new skincare {{BLANK}} that quickly became popular because of its affordable price and good quality.",
    "cn": "這家公司推出了一款新護膚產品，因其實惠的價格和良好的品質而迅速走紅。"
  },
  {
    "word": "production",
    "pos": "n.",
    "cn_def": "生產、產量、製作",
    "en_def": "the process of making or growing things.",
    "sentence": "The {{BLANK}} of electric vehicles has increased dramatically over the past five years as demand from consumers has grown.",
    "cn": "隨著消費者需求的增長，過去五年電動車的生產量急劇增加。"
  },
  {
    "word": "productive",
    "pos": "adj.",
    "cn_def": "多產的、富於成效的",
    "en_def": "making or growing a large amount of something.",
    "sentence": "Working in a quiet environment helps me stay focused and feel more {{BLANK}} than when I work in a noisy place.",
    "cn": "在安靜的環境中工作幫助我保持專注，比在嘈雜的地方工作感覺更有成效。"
  },
  {
    "word": "productivity",
    "pos": "n.",
    "cn_def": "生產力、生產效率",
    "en_def": "the rate at which goods are produced.",
    "sentence": "The manager introduced flexible working hours to boost employee {{BLANK}} and reduce the number of sick days taken.",
    "cn": "經理引入彈性工時以提升員工生產力，並減少請病假的次數。"
  },
  {
    "word": "producer",
    "pos": "n.",
    "cn_def": "生產者、製作人",
    "en_def": "a person or company that makes goods or movies.",
    "sentence": "The film {{BLANK}} spent three years raising funds and assembling the cast before shooting could finally begin.",
    "cn": "這位電影製作人花了三年時間籌募資金、組建演員陣容，才終於能夠開拍。"
  },
  {
    "word": "melody",
    "pos": "n.",
    "cn_def": "旋律、曲調",
    "en_def": "a tune or song that is beautiful to hear.",
    "sentence": "She hummed a soft {{BLANK}} while washing the dishes, and her little sister asked her to sing it again and again.",
    "cn": "她洗碗時輕聲哼著一段柔和的旋律，妹妹一再要求她再唱一次。"
  },
  {
    "word": "melodic",
    "pos": "adj.",
    "cn_def": "旋律優美的、曲調的",
    "en_def": "having a beautiful, pleasant musical sound.",
    "sentence": "The singer's {{BLANK}} voice filled the concert hall and moved many audience members to tears during the final song.",
    "cn": "歌手優美的嗓音充滿了音樂廳，在最後一首歌時感動了許多觀眾落淚。"
  },
  {
    "word": "electronic",
    "pos": "adj.",
    "cn_def": "電子的",
    "en_def": "involving digital chips or computer systems.",
    "sentence": "Most students now submit their assignments through an {{BLANK}} platform instead of handing in printed paper copies.",
    "cn": "大多數學生現在透過電子平台提交作業，而不是繳交印出的紙本副本。"
  },
  {
    "word": "Electronic music",
    "pos": "n.",
    "cn_def": "電子音樂",
    "en_def": "music created using computer technology.",
    "sentence": "{{BLANK}} has become incredibly popular at large outdoor festivals, where DJs perform for thousands of fans all night.",
    "cn": "電子音樂在大型戶外音樂節上變得非常流行，DJ整夜為數千名粉絲演出。"
  },
  {
    "word": "generation",
    "pos": "n.",
    "cn_def": "世代、一代人",
    "en_def": "all the people born and living at the same time.",
    "sentence": "The younger {{BLANK}} tends to prefer streaming music online rather than buying physical CDs or vinyl records.",
    "cn": "年輕一代傾向於在線上串流音樂，而不是購買實體CD或黑膠唱片。"
  },
  {
    "word": "generation",
    "pos": "n.",
    "cn_def": "產生、發生（電、熱等）",
    "en_def": "the production of energy, heat, or electricity.",
    "sentence": "Solar panels are used for the {{BLANK}} of clean electricity, which helps households reduce their monthly energy bills.",
    "cn": "太陽能板用於產生清潔電力，有助於家庭降低每月的能源費用。"
  },
  {
    "word": "generate",
    "pos": "v.",
    "cn_def": "產生、引起、發電",
    "en_def": "to cause, produce, or create power or ideas.",
    "sentence": "The new marketing campaign managed to {{BLANK}} a lot of interest online, and sales doubled within the first week.",
    "cn": "新的行銷活動成功在網路上引起大量關注，銷售額在第一週內翻倍。"
  },
  {
    "word": "generator",
    "pos": "n.",
    "cn_def": "發電機",
    "en_def": "a machine that turns movement into electricity.",
    "sentence": "When the storm cut the power, the hospital switched on its backup {{BLANK}} to keep all the medical equipment running.",
    "cn": "當暴風雨切斷電力時，醫院啟動了備用發電機，以維持所有醫療設備的運作。"
  },
  {
    "word": "generation gap",
    "pos": "n.",
    "cn_def": "代溝",
    "en_def": "a difference in ideas between young and old people.",
    "sentence": "The {{BLANK}} between parents and teenagers often leads to misunderstandings about music, technology, and lifestyle choices.",
    "cn": "父母與青少年之間的代溝往往導致對音樂、科技和生活方式選擇的誤解。"
  }
];

const MCQS = [
  {
    "q": "The steel ______ played a key role in the country's rapid economic growth during the early twentieth century.",
    "options": [
      "melody",
      "producer",
      "industry",
      "generator"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The tourism ______ was severely affected by the pandemic, and many hotels and airlines struggled to survive.",
    "options": [
      "producer",
      "industry",
      "melody",
      "production"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The city's ______ area is located on the outskirts, far away from residential neighbourhoods and schools.",
    "options": [
      "industrial",
      "industrious",
      "electronic",
      "melodic"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Many developing countries are trying to ______ quickly in order to create jobs and improve their citizens' living standards.",
    "options": [
      "generation gap",
      "industrial",
      "electronic",
      "industrialize"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "She is such an ______ student that she always finishes her assignments early and uses extra time to review her notes.",
    "options": [
      "electronic",
      "industrial",
      "industrious",
      "melodic"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "This factory can ______ up to five thousand pairs of shoes per day, making it one of the largest in the region.",
    "options": [
      "generation",
      "produce",
      "productivity",
      "productive"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The security guard asked the visitor to ______ a valid ID card before allowing her to enter the building.",
    "options": [
      "produce",
      "generation",
      "melody",
      "industrialize"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The market is famous for selling fresh local ______, including vegetables, fruit, and herbs grown by nearby farmers.",
    "options": [
      "production",
      "product",
      "industry",
      "produce"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The company launched a new skincare ______ that quickly became popular because of its affordable price and good quality.",
    "options": [
      "product",
      "Electronic music",
      "produce",
      "producer"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The ______ of electric vehicles has increased dramatically over the past five years as demand from consumers has grown.",
    "options": [
      "productivity",
      "product",
      "production",
      "producer"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Working in a quiet environment helps me stay focused and feel more ______ than when I work in a noisy place.",
    "options": [
      "melodic",
      "electronic",
      "industrious",
      "productive"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The manager introduced flexible working hours to boost employee ______ and reduce the number of sick days taken.",
    "options": [
      "production",
      "productivity",
      "product",
      "generation gap"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The film ______ spent three years raising funds and assembling the cast before shooting could finally begin.",
    "options": [
      "generation gap",
      "industry",
      "producer",
      "Electronic music"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "She hummed a soft ______ while washing the dishes, and her little sister asked her to sing it again and again.",
    "options": [
      "producer",
      "produce",
      "industry",
      "melody"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The singer's ______ voice filled the concert hall and moved many audience members to tears during the final song.",
    "options": [
      "industrious",
      "melodic",
      "productive",
      "electronic"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Most students now submit their assignments through an ______ platform instead of handing in printed paper copies.",
    "options": [
      "electronic",
      "industrial",
      "industrious",
      "productive"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "______ has become incredibly popular at large outdoor festivals, where DJs perform for thousands of fans all night.",
    "options": [
      "production",
      "melody",
      "Electronic music",
      "product"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The younger ______ tends to prefer streaming music online rather than buying physical CDs or vinyl records.",
    "options": [
      "productivity",
      "generation",
      "melody",
      "production"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Solar panels are used for the ______ of clean electricity, which helps households reduce their monthly energy bills.",
    "options": [
      "generation",
      "produce",
      "producer",
      "production"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The new marketing campaign managed to ______ a lot of interest online, and sales doubled within the first week.",
    "options": [
      "productivity",
      "produce",
      "melody",
      "generate"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "When the storm cut the power, the hospital switched on its backup ______ to keep all the medical equipment running.",
    "options": [
      "generator",
      "generation",
      "productivity",
      "generation gap"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The ______ between parents and teenagers often leads to misunderstandings about music, technology, and lifestyle choices.",
    "options": [
      "production",
      "melody",
      "industry",
      "generation gap"
    ],
    "answer": 3,
    "vocabIndex": 21
  }
];

const LOOKUP = {
  "industry": {
    "pos": "n.",
    "en_def": "the production of goods, especially in factories.",
    "cn_def": "工業、製造業",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the production of goods, especially in factories.",
        "cn_def": "工業、製造業"
      },
      {
        "pos": "n.",
        "en_def": "a specific branch of business or trade.",
        "cn_def": "行業、產業"
      }
    ]
  },
  "industrial": {
    "pos": "adj.",
    "en_def": "relating to factories, manufacturing, or business.",
    "cn_def": "工業的、產業的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to factories, manufacturing, or business.",
        "cn_def": "工業的、產業的"
      }
    ]
  },
  "industrialize": {
    "pos": "v.",
    "en_def": "to build factories and industries in a country.",
    "cn_def": "使工業化",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to build factories and industries in a country.",
        "cn_def": "使工業化"
      }
    ]
  },
  "industrious": {
    "pos": "adj.",
    "en_def": "working hard and regularly; busy.",
    "cn_def": "勤奮的、刻苦的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "working hard and regularly; busy.",
        "cn_def": "勤奮的、刻苦的"
      }
    ]
  },
  "produce": {
    "pos": "v.",
    "en_def": "to make, grow, or manufacture something.",
    "cn_def": "生產、製造、出產",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make, grow, or manufacture something.",
        "cn_def": "生產、製造、出產"
      },
      {
        "pos": "v.",
        "en_def": "to bring out or show something for inspection.",
        "cn_def": "拿出、出示"
      },
      {
        "pos": "n.",
        "en_def": "food that has been grown on a farm.",
        "cn_def": "農產品"
      }
    ]
  },
  "product": {
    "pos": "n.",
    "en_def": "something that is made to be sold.",
    "cn_def": "產品、產物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that is made to be sold.",
        "cn_def": "產品、產物"
      }
    ]
  },
  "production": {
    "pos": "n.",
    "en_def": "the process of making or growing things.",
    "cn_def": "生產、產量、製作",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the process of making or growing things.",
        "cn_def": "生產、產量、製作"
      }
    ]
  },
  "productive": {
    "pos": "adj.",
    "en_def": "making or growing a large amount of something.",
    "cn_def": "多產的、富於成效的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "making or growing a large amount of something.",
        "cn_def": "多產的、富於成效的"
      }
    ]
  },
  "productivity": {
    "pos": "n.",
    "en_def": "the rate at which goods are produced.",
    "cn_def": "生產力、生產效率",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the rate at which goods are produced.",
        "cn_def": "生產力、生產效率"
      }
    ]
  },
  "producer": {
    "pos": "n.",
    "en_def": "a person or company that makes goods or movies.",
    "cn_def": "生產者、製作人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or company that makes goods or movies.",
        "cn_def": "生產者、製作人"
      }
    ]
  },
  "melody": {
    "pos": "n.",
    "en_def": "a tune or song that is beautiful to hear.",
    "cn_def": "旋律、曲調",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a tune or song that is beautiful to hear.",
        "cn_def": "旋律、曲調"
      }
    ]
  },
  "melodic": {
    "pos": "adj.",
    "en_def": "having a beautiful, pleasant musical sound.",
    "cn_def": "旋律優美的、曲調的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a beautiful, pleasant musical sound.",
        "cn_def": "旋律優美的、曲調的"
      }
    ]
  },
  "electronic": {
    "pos": "adj.",
    "en_def": "involving digital chips or computer systems.",
    "cn_def": "電子的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "involving digital chips or computer systems.",
        "cn_def": "電子的"
      }
    ]
  },
  "electronic music": {
    "pos": "n.",
    "en_def": "music created using computer technology.",
    "cn_def": "電子音樂",
    "combined": [
      {
        "pos": "n.",
        "en_def": "music created using computer technology.",
        "cn_def": "電子音樂"
      }
    ]
  },
  "generation": {
    "pos": "n.",
    "en_def": "all the people born and living at the same time.",
    "cn_def": "世代、一代人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "all the people born and living at the same time.",
        "cn_def": "世代、一代人"
      },
      {
        "pos": "n.",
        "en_def": "the production of energy, heat, or electricity.",
        "cn_def": "產生、發生（電、熱等）"
      }
    ]
  },
  "generate": {
    "pos": "v.",
    "en_def": "to cause, produce, or create power or ideas.",
    "cn_def": "產生、引起、發電",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause, produce, or create power or ideas.",
        "cn_def": "產生、引起、發電"
      }
    ]
  },
  "generator": {
    "pos": "n.",
    "en_def": "a machine that turns movement into electricity.",
    "cn_def": "發電機",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a machine that turns movement into electricity.",
        "cn_def": "發電機"
      }
    ]
  },
  "generation gap": {
    "pos": "n.",
    "en_def": "a difference in ideas between young and old people.",
    "cn_def": "代溝",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a difference in ideas between young and old people.",
        "cn_def": "代溝"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
