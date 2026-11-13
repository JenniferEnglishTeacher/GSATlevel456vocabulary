// Lesson 50 Quiz Data: Western Nations, Nationalities & Commonwealth Countries
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 50 - Western Nations, Nationalities & Commonwealth Countries",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "England",
    "pos": "n.",
    "cn_def": "英格蘭",
    "en_def": "the largest and most populous constituent country of the United Kingdom",
    "sentence": "London is the historic capital of {{BLANK}}, known for big red buses, the River Thames, and historic palaces.",
    "cn": "倫敦是英格蘭的歷史首都，以紅色大巴士、泰晤士河與歷史宮殿聞名。"
  },
  {
    "word": "Englishman",
    "pos": "n.",
    "cn_def": "英格蘭人；英國男士",
    "en_def": "a man who was born in or comes from England",
    "sentence": "The polite {{BLANK}} drank his morning tea with a dash of milk and read the daily broadsheet newspaper quietly.",
    "cn": "那位彬彬有禮的英格蘭人喝著加了一點牛奶的早茶，安靜地閱讀每日大報。"
  },
  {
    "word": "France",
    "pos": "n.",
    "cn_def": "法國",
    "en_def": "a country in Western Europe celebrated for wine, food, and culture",
    "sentence": "Millions of art lovers travel to {{BLANK}} each year to admire famous masterpieces housed within the Louvre Museum.",
    "cn": "每年數百萬藝術愛好者前往法國，欣賞羅浮宮博物館收藏的著名傳世傑作。"
  },
  {
    "word": "French",
    "pos": "adj. / n.",
    "cn_def": "法國的；法國人；法語",
    "en_def": "relating to France, its people, or its language",
    "sentence": "Freshly baked {{BLANK}} baguettes and buttery croissants are staple morning delicacies enjoyed worldwide.",
    "cn": "新鮮出爐的法國長棍麵包與奶油可頌是享譽全球的早晨代表性美食。"
  },
  {
    "word": "Germany",
    "pos": "n.",
    "cn_def": "德國",
    "en_def": "a country in Central Europe renowned for engineering and industry",
    "sentence": "Automotive factories across {{BLANK}} produce world-famous, reliable cars known for high precision and performance.",
    "cn": "遍布德國的汽車工廠生產舉世聞名且可靠的汽車，以高精度與卓越性能著稱。"
  },
  {
    "word": "German",
    "pos": "adj. / n.",
    "cn_def": "德國的；德國人；德語",
    "en_def": "relating to Germany, its people, or its language",
    "sentence": "He studied the {{BLANK}} language for three semesters because he plans to study mechanical engineering in Munich.",
    "cn": "他學習了三個學期的德語，因為他計劃前往慕尼黑攻讀機械工程。"
  },
  {
    "word": "Australia",
    "pos": "n.",
    "cn_def": "澳洲；澳大利亞",
    "en_def": "a continent and sovereign country surrounded by the Indian and Pacific oceans",
    "sentence": "Unique native wildlife such as kangaroos, wombats, and koalas flourish across the vast landscapes of {{BLANK}}.",
    "cn": "袋鼠、袋熊與無尾熊等獨特的本土野生動物在澳洲廣袤的土地上繁衍生息。"
  },
  {
    "word": "Australian",
    "pos": "adj. / n.",
    "cn_def": "澳洲的；澳洲人",
    "en_def": "relating to Australia or its people",
    "sentence": "Surfers from around the world gather along the sunlit {{BLANK}} coastline to ride giant waves during the summer.",
    "cn": "來自世界各地的衝浪愛好者在夏季聚集在陽光普照的澳洲海岸線挑戰巨浪。"
  },
  {
    "word": "Canada",
    "pos": "n.",
    "cn_def": "加拿大",
    "en_def": "the second-largest country in the world by total area, located in North America",
    "sentence": "Known for vast wilderness and natural beauty, {{BLANK}} produces the vast majority of the world's sweet maple syrup.",
    "cn": "以廣闊荒野與自然美景聞名的加拿大，生產了全球絕大多數香甜的楓糖漿。"
  },
  {
    "word": "Canadian",
    "pos": "adj. / n.",
    "cn_def": "加拿大的；加拿大人",
    "en_def": "relating to Canada or its people",
    "sentence": "Ice hockey is deeply ingrained in {{BLANK}} culture, and millions of passionate fans watch games every winter.",
    "cn": "冰上曲棍球在加拿大文化中根深蒂固，數百萬熱情的球迷每年冬天都會觀看比賽。"
  }
];

const MCQS = [
  {
    "q": "The Eiffel Tower and the Notre-Dame Cathedral are iconic landmarks located in Paris, the capital of ______.",
    "options": [
      "France",
      "Germany",
      "Canada",
      "Australia"
    ],
    "answer": 0,
    "cn": "艾菲爾鐵塔和巴黎聖母院是座落於法國首都巴黎的標誌性地標建築。 【選項解析】(A) France 法國  (B) Germany 德國  (C) Canada 加拿大  (D) Australia 澳洲。Paris 是 France 的首都。",
    "vocabIndex": 2
  },
  {
    "q": "The Sydney Opera House with its white sail-like roof is an internationally recognized symbol of ______.",
    "options": [
      "England",
      "Canada",
      "Germany",
      "Australia"
    ],
    "answer": 3,
    "cn": "雪梨歌劇院擁有白色風帆般的屋頂，是國際公認的澳洲象徵地標。 【選項解析】(A) Australia 澳洲  (B) Canada 加拿大  (C) Germany 德國  (D) England 英格蘭。Sydney 位於 Australia。",
    "vocabIndex": 6
  },
  {
    "q": "The red maple leaf is proudly displayed in the center of the official national flag of ______.",
    "options": [
      "France",
      "Australia",
      "Canada",
      "Germany"
    ],
    "answer": 2,
    "cn": "紅色的楓葉自豪地展示在加拿大官方國旗的正中央。 【選項解析】(A) Canada 加拿大  (B) Australia 澳洲  (C) France 法國  (D) Germany 德國。國旗中心為楓葉的國家為 Canada。",
    "vocabIndex": 8
  },
  {
    "q": "Precision mechanical engineering and famous beer brewing traditions are hallmarks of ______ culture.",
    "options": [
      "French",
      "German",
      "Australian",
      "Canadian"
    ],
    "answer": 1,
    "cn": "精密的機械工程與著名的啤酒釀造傳統是德國文化的重要特徵。 【選項解析】(A) German 德國的  (B) French 法國的  (C) Australian 澳洲的  (D) Canadian 加拿大的。精密工程與啤酒文化代表 German culture。",
    "vocabIndex": 5
  },
  {
    "q": "Ordering food in fluent ______ while dining at a sidewalk Parisian café made her trip memorable.",
    "options": [
      "French",
      "German",
      "Australian",
      "Canadian"
    ],
    "answer": 0,
    "cn": "在巴黎路邊咖啡館用餐時用流利的法語點餐，讓她的旅行難以忘懷。 【選項解析】(A) French 法語  (B) German 德語  (C) Australian 澳洲的  (D) Canadian 加拿大的。在巴黎使用法語（French）。",
    "vocabIndex": 3
  },
  {
    "q": "Many travelers enjoy visiting the historic university cities of Oxford and Cambridge in ______.",
    "options": [
      "France",
      "England",
      "Canada",
      "Australia"
    ],
    "answer": 1,
    "cn": "許多旅客喜歡參觀位於英格蘭境內牛津與劍橋這兩座歷史悠久的大學城。 【選項解析】(A) England 英格蘭  (B) France 法國  (C) Canada 加拿大  (D) Australia 澳洲。Oxford 與 Cambridge 位於 England。",
    "vocabIndex": 0
  },
  {
    "q": "The elderly ______ always carried a neat black umbrella whenever he walked down London's streets.",
    "options": [
      "German",
      "Australian",
      "Canadian",
      "Englishman"
    ],
    "answer": 3,
    "cn": "那位彬彬有禮的英格蘭紳士每當走在倫敦街頭時，總是帶著一把整潔的黑雨傘。 【選項解析】(A) Englishman 英國男士  (B) Australian 澳洲人  (C) Canadian 加拿大人  (D) German 德國人。倫敦紳士為 Englishman。",
    "vocabIndex": 1
  },
  {
    "q": "The Great Barrier Reef stretching along the northeastern coast of ______ contains thousands of colorful coral reefs.",
    "options": [
      "Germany",
      "Canada",
      "Australia",
      "France"
    ],
    "answer": 2,
    "cn": "沿著澳洲東北海岸延伸的大堡礁擁有成千上萬個色彩繽紛的珊瑚礁。 【選項解析】(A) Australia 澳洲  (B) Canada 加拿大  (C) Germany 德國  (D) France 法國。Great Barrier Reef 位於 Australia。",
    "vocabIndex": 6
  },
  {
    "q": "Berlin is the vibrant, historic capital of ______, known for art museums and the remnants of the famous wall.",
    "options": [
      "France",
      "Germany",
      "England",
      "Canada"
    ],
    "answer": 1,
    "cn": "柏林是德國充滿活力且歷史悠久的首都，以藝術博物館與著名的圍牆遺跡而聞名。 【選項解析】(A) Germany 德國  (B) France 法國  (C) England 英格蘭  (D) Canada 加拿大。Berlin 是 Germany 的首都。",
    "vocabIndex": 4
  },
  {
    "q": "Many ______ families spend winter weekends ice skating on frozen rivers or playing friendly hockey games.",
    "options": [
      "German",
      "Australian",
      "French",
      "Canadian"
    ],
    "answer": 3,
    "cn": "許多加拿大球家庭在結冰的河流上溜冰或進行友好的曲棍球比賽來度過冬季週末。 【選項解析】(A) Canadian 加拿大的  (B) Australian 澳洲的  (C) French 法國的  (D) German 德國的。曲棍球為 Canadian families 的代表運動。",
    "vocabIndex": 9
  },
  {
    "q": "Breathtaking national parks like Banff and Jasper with turquoise glacial lakes are located in western ______.",
    "options": [
      "France",
      "Australia",
      "Canada",
      "England"
    ],
    "answer": 2,
    "cn": "像班夫和賈斯珀這樣擁有綠松石般冰川湖泊的壯麗國家公園位於加拿大西部。 【選項解析】(A) Canada 加拿大  (B) Australia 澳洲  (C) France 法國  (D) England 英格蘭。Banff 國家公園位於 Canada。",
    "vocabIndex": 8
  },
  {
    "q": "Many delicious varieties of red and white wine are produced in the sun-drenched vineyards of southern ______.",
    "options": [
      "France",
      "Canada",
      "Australia",
      "Germany"
    ],
    "answer": 0,
    "cn": "在法國南部陽光普照的葡萄園裡生產了許多美味的紅葡萄酒與白葡萄酒。 【選項解析】(A) France 法國  (B) Canada 加拿大  (C) Australia 澳洲  (D) Germany 德國。葡萄酒著名產地為 southern France。",
    "vocabIndex": 2
  },
  {
    "q": "The ______ kangaroo is an animal that carries its young baby joey inside an abdominal pouch.",
    "options": [
      "Canadian",
      "Australian",
      "French",
      "German"
    ],
    "answer": 1,
    "cn": "澳洲袋鼠是一種將幼獸裝在腹部育兒袋中撫育的代表性動物。 【選項解析】(A) Australian 澳洲的  (B) Canadian 加拿大的  (C) French 法國的  (D) German 德國的。袋鼠為 Australian kangaroo。",
    "vocabIndex": 7
  },
  {
    "q": "The palace of Versailles near Paris was built by the royal monarchs of historic ______.",
    "options": [
      "France",
      "Germany",
      "Australia",
      "Canada"
    ],
    "answer": 0,
    "cn": "巴黎附近的凡爾賽宮是由歷史悠久的法國君主所興建建造的。 【選項解析】(A) France 法國  (B) Germany 德國  (C) Australia 澳洲  (D) Canada 加拿大。Versailles 宮殿位於 France。",
    "vocabIndex": 2
  },
  {
    "q": "The famous Autobahn highway system across ______ is internationally celebrated for having sections without speed limits.",
    "options": [
      "Canada",
      "England",
      "Germany",
      "Australia"
    ],
    "answer": 2,
    "cn": "橫貫德國著名的無限速高速公路系統以擁有不設限速的路段而享譽國際。 【選項解析】(A) Germany 德國  (B) England 英格蘭  (C) Canada 加拿大  (D) Australia 澳洲。Autobahn 為 Germany 著名高速公路。",
    "vocabIndex": 4
  },
  {
    "q": "The young ______ traveler greeted fellow backpackers with a cheerful 'G'day, mate!' at the hostel.",
    "options": [
      "Canadian",
      "French",
      "German",
      "Australian"
    ],
    "answer": 3,
    "cn": "那位年輕的澳洲旅人在青旅裡用一聲歡快的「G'day, mate!」向背包客打招呼。 【選項解析】(A) Australian 澳洲的  (B) French 法國的  (C) German 德國的  (D) Canadian 加拿大的。G'day, mate 為經典 Australian 問候語。",
    "vocabIndex": 7
  },
  {
    "q": "Both English and French hold equal status as the two official languages recognized nationwide in ______.",
    "options": [
      "England",
      "Canada",
      "Australia",
      "Germany"
    ],
    "answer": 1,
    "cn": "英語和法語在加拿大全國範圍內享有同等地位的雙官方語言待遇。 【選項解析】(A) Canada 加拿大  (B) England 英格蘭  (C) Australia 澳洲  (D) Germany 德國。英法雙語官方國家為 Canada。",
    "vocabIndex": 8
  },
  {
    "q": "The classic novel Oliver Twist reflects the social conditions of nineteenth-century industrial ______.",
    "options": [
      "Australia",
      "France",
      "Canada",
      "England"
    ],
    "answer": 3,
    "cn": "經典小說《孤雛淚》反映了十九世紀工業時代英格蘭的真實社會狀況。 【選項解析】(A) England 英格蘭  (B) France 法國  (C) Canada 加拿大  (D) Australia 澳洲。狄更斯筆下的倫敦社會為 England。",
    "vocabIndex": 0
  },
  {
    "q": "Beethoven was a legendary ______ composer whose symphonies revolutionized the world of classical music.",
    "options": [
      "German",
      "French",
      "Australian",
      "Canadian"
    ],
    "answer": 0,
    "cn": "貝多芬是一位傳奇的德國作曲家，他的交響曲徹底革新了古典音樂界。 【選項解析】(A) German 德國的  (B) French 法國的  (C) Australian 澳洲的  (D) Canadian 加拿大的。貝多芬為 German composer。",
    "vocabIndex": 5
  },
  {
    "q": "The famous dish of poutine, featuring French fries topped with cheese curds and gravy, is a hearty ______ snack.",
    "options": [
      "German",
      "Australian",
      "Canadian",
      "English"
    ],
    "answer": 2,
    "cn": "著名的肉汁乳酪薯條（poutine）是一道深具特色的加拿大道地暖胃小吃。 【選項解析】(A) Canadian 加拿大的  (B) Australian 澳洲的  (C) German 德國的  (D) English 英國的。Poutine 為代表性 Canadian snack。",
    "vocabIndex": 9
  },
  {
    "q": "The royal guards standing outside Buckingham Palace in ______ wear distinctive tall black bearskin hats.",
    "options": [
      "England",
      "France",
      "Germany",
      "Australia"
    ],
    "answer": 0,
    "cn": "駐守在英格蘭白金漢宮外的皇家衛兵戴著獨特的黑色高頂熊皮帽。 【選項解析】(A) England 英格蘭  (B) France 法國  (C) Germany 德國  (D) Australia 澳洲。Buckingham Palace 位於 England。",
    "vocabIndex": 0
  },
  {
    "q": "High-speed TGV passenger trains whisk commuters between Paris, Lyon, and Marseille across ______.",
    "options": [
      "England",
      "Australia",
      "Canada",
      "France"
    ],
    "answer": 3,
    "cn": "法國高速列車（TGV）穿梭於全法國的巴黎、里昂與馬賽之間。 【選項解析】(A) France 法國  (B) Australia 澳洲  (C) Canada 加拿大  (D) England 英格蘭。TGV 高鐵服務於 France。",
    "vocabIndex": 2
  },
  {
    "q": "The Outback is a vast, remote, arid desert region located in the inland territory of ______.",
    "options": [
      "England",
      "Australia",
      "France",
      "Germany"
    ],
    "answer": 1,
    "cn": "內陸荒野地區（Outback）是位於澳洲內陸地區的廣大、偏遠且乾旱的沙漠地帶。 【選項解析】(A) Australia 澳洲  (B) England 英格蘭  (C) France 法國  (D) Germany 德國。Outback 指 Australia 內陸荒漠。",
    "vocabIndex": 6
  },
  {
    "q": "The traditional Octoberfest autumn folk festival celebrated in Munich, ______ attracts millions of visitors annually.",
    "options": [
      "England",
      "Canada",
      "Germany",
      "Australia"
    ],
    "answer": 2,
    "cn": "在德國慕尼黑慶祝的傳統十月啤酒節，每年吸引數百萬遊客造訪。 【選項解析】(A) Germany 德國  (B) Canada 加拿大  (C) England 英格蘭  (D) Australia 澳洲。慕尼黑十月啤酒節位於 Germany。",
    "vocabIndex": 4
  },
  {
    "q": "When the polite ______ took his seat at the theater, he graciously tipped his hat to the usher.",
    "options": [
      "German",
      "Canadian",
      "Australian",
      "Englishman"
    ],
    "answer": 3,
    "cn": "當那位有禮的英格蘭紳士在劇院就座時，他親切地向帶位員脫帽致意。 【選項解析】(A) Englishman 英國男士  (B) Canadian 加拿大人  (C) Australian 澳洲人  (D) German 德國人。紳士脫帽致意為 polite Englishman。",
    "vocabIndex": 1
  }
];

const LOOKUP = {
  "england": {
    "pos": "n.",
    "en_def": "the largest and most populous constituent country of the United Kingdom",
    "cn_def": "英格蘭",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the largest and most populous constituent country of the United Kingdom",
        "cn_def": "英格蘭"
      }
    ]
  },
  "englishman": {
    "pos": "n.",
    "en_def": "a man who was born in or comes from England",
    "cn_def": "英格蘭人；英國男士",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a man who was born in or comes from England",
        "cn_def": "英格蘭人；英國男士"
      }
    ]
  },
  "france": {
    "pos": "n.",
    "en_def": "a country in Western Europe celebrated for wine, food, and culture",
    "cn_def": "法國",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a country in Western Europe celebrated for wine, food, and culture",
        "cn_def": "法國"
      }
    ]
  },
  "french": {
    "pos": "adj. / n.",
    "en_def": "relating to France, its people, or its language",
    "cn_def": "法國的；法國人；法語",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "relating to France, its people, or its language",
        "cn_def": "法國的；法國人；法語"
      }
    ]
  },
  "germany": {
    "pos": "n.",
    "en_def": "a country in Central Europe renowned for engineering and industry",
    "cn_def": "德國",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a country in Central Europe renowned for engineering and industry",
        "cn_def": "德國"
      }
    ]
  },
  "german": {
    "pos": "adj. / n.",
    "en_def": "relating to Germany, its people, or its language",
    "cn_def": "德國的；德國人；德語",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "relating to Germany, its people, or its language",
        "cn_def": "德國的；德國人；德語"
      }
    ]
  },
  "australia": {
    "pos": "n.",
    "en_def": "a continent and sovereign country surrounded by the Indian and Pacific oceans",
    "cn_def": "澳洲；澳大利亞",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a continent and sovereign country surrounded by the Indian and Pacific oceans",
        "cn_def": "澳洲；澳大利亞"
      }
    ]
  },
  "australian": {
    "pos": "adj. / n.",
    "en_def": "relating to Australia or its people",
    "cn_def": "澳洲的；澳洲人",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "relating to Australia or its people",
        "cn_def": "澳洲的；澳洲人"
      }
    ]
  },
  "canada": {
    "pos": "n.",
    "en_def": "the second-largest country in the world by total area, located in North America",
    "cn_def": "加拿大",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the second-largest country in the world by total area, located in North America",
        "cn_def": "加拿大"
      }
    ]
  },
  "canadian": {
    "pos": "adj. / n.",
    "en_def": "relating to Canada or its people",
    "cn_def": "加拿大的；加拿大人",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "relating to Canada or its people",
        "cn_def": "加拿大的；加拿大人"
      }
    ]
  },
  "english": {
    "pos": "",
    "en_def": "",
    "cn_def": "英國的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "英國的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
