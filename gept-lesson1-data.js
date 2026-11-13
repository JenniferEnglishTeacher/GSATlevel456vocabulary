// Lesson 1 Quiz Data: Human Body, Physical Actions & Health
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 1 - Human Body, Physical Actions & Health",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "ankle",
    "pos": "n.",
    "cn_def": "腳踝",
    "en_def": "the joint between the foot and the lower leg",
    "sentence": "Yesterday afternoon, Peter jumped off the garden wall, but he landed badly and hurt his right {{BLANK}}, so he could not walk home.",
    "cn": "昨天下午彼得跳下花園圍牆，但他著地姿勢不佳並傷到了右腳踝，所以他無法走回家。"
  },
  {
    "word": "bone",
    "pos": "n.",
    "cn_def": "骨頭",
    "en_def": "any of the hard pieces that make up the skeleton",
    "sentence": "The stray dog looked very hungry and tired, so the kind lady gave him a beef {{BLANK}} to chew on in the yard.",
    "cn": "那隻流浪狗看起來非常飢餓且疲累，所以那位好心的女士給了牠一根牛骨頭在院子裡啃咬。"
  },
  {
    "word": "brain",
    "pos": "n.",
    "cn_def": "大腦；智力",
    "en_def": "the organ inside the head that controls thought and memory",
    "sentence": "Regular physical exercise is good for your health, and reading books can help train your {{BLANK}} to stay active and sharp.",
    "cn": "規律的身體運動對健康有益，而閱讀書籍可以幫助訓練你的大腦保持活躍與敏銳。"
  },
  {
    "word": "chin",
    "pos": "n.",
    "cn_def": "下巴",
    "en_def": "the bottom part of the face below the mouth",
    "sentence": "My little brother fell off his bicycle on the street, and he scraped his {{BLANK}} on the ground, but he did not cry.",
    "cn": "我的小弟弟在街上從腳踏車上摔了下來，他的下巴在地上擦傷，但他並沒有哭。"
  },
  {
    "word": "hip",
    "pos": "n.",
    "cn_def": "臀部；髖部",
    "en_def": "the area on either side of the body below the waist",
    "sentence": "My grandmother slipped on the wet kitchen floor this morning, so my father took her to the hospital to check her left {{BLANK}}.",
    "cn": "我的祖母今天早上在濕滑的廚房地板上滑倒，所以我父親帶她去醫院檢查她的左側臀部（髖部）。"
  },
  {
    "word": "beard",
    "pos": "n.",
    "cn_def": "鬍鬚",
    "en_def": "the hair that grows on a man's chin and cheeks",
    "sentence": "Uncle David decided to grow a thick {{BLANK}} during his winter vacation, but his wife asked him to shave it off yesterday.",
    "cn": "大衛叔叔決定在寒假期間留濃密的鬍鬚，但他的妻子昨天要求他將它刮掉。"
  },
  {
    "word": "nail",
    "pos": "n.",
    "cn_def": "指甲；釘子",
    "en_def": "the hard surface covering the tip of fingers; a metal pin",
    "sentence": "Tom was very nervous before the English speech contest began, so he sat in the corner and kept biting his finger {{BLANK}}.",
    "cn": "湯姆在英語演講比賽開始前非常緊張，所以他坐在角落裡一直咬自己的手指甲。"
  },
  {
    "word": "skin",
    "pos": "n. / v.",
    "cn_def": "皮膚；擦破皮",
    "en_def": "the natural outer layer that covers the body",
    "sentence": "You should put on some sunscreen before going to the beach, or the hot summer sun will easily burn your {{BLANK}}.",
    "cn": "你去海灘前應該擦點防曬乳，否則炎熱的夏日陽光很容易曬傷你的皮膚。"
  },
  {
    "word": "tear",
    "pos": "v. / n.",
    "cn_def": "撕裂；眼淚",
    "en_def": "to pull paper or cloth into pieces; water from eyes",
    "sentence": "Please be very careful when you open the old envelope, and do not {{BLANK}} the letter inside because it is very important.",
    "cn": "當你打開那個舊信封時請非常小心，不要撕破裡面的信件，因為它非常重要。"
  },
  {
    "word": "throat",
    "pos": "n.",
    "cn_def": "喉嚨",
    "en_def": "the front passage inside the neck",
    "sentence": "I caught a bad cold on Monday morning, so I had a sore {{BLANK}} and could not speak loudly in class all day.",
    "cn": "我星期一早上得了重感冒，所以我喉嚨痛且一整天在課堂上都無法大聲說話。"
  }
];

const MCQS = [
  {
    "q": "During the fast basketball match yesterday, Jason stepped on another player's foot and twisted his right ______, so he could not walk for three days.",
    "options": [
      "bone",
      "ankle",
      "beard",
      "chin"
    ],
    "answer": 1,
    "cn": "昨天那場快節奏的籃球賽中，傑森踩到了另一名球員的腳並扭傷了他的右腳踝，所以他整整三天無法走路。",
    "vocabIndex": 0
  },
  {
    "q": "The soup was served extremely hot, and Susan took a large mouthful without blowing on it, which burned her ______ badly.",
    "options": [
      "throat",
      "nail",
      "hip",
      "bone"
    ],
    "answer": 0,
    "cn": "那碗湯上桌時非常燙，蘇珊沒吹涼就喝了一大口，結果嚴重燙傷了她的喉嚨。",
    "vocabIndex": 9
  },
  {
    "q": "Grandfather likes to look neat, so he uses shaving cream and a sharp razor every morning to remove his white ______ completely.",
    "options": [
      "skin",
      "brain",
      "beard",
      "ankle"
    ],
    "answer": 2,
    "cn": "祖父喜歡看起來整潔，所以他每天早上都用刮鬍膏和鋒利的剃刀將他的白鬍鬚徹底刮乾淨。",
    "vocabIndex": 5
  },
  {
    "q": "Scientists explain that doing crossword puzzles and reading new books can challenge your ______ and keep your memory sharp as you get older.",
    "options": [
      "hip",
      "throat",
      "nail",
      "brain"
    ],
    "answer": 3,
    "cn": "科學家解釋，做填字遊戲和閱讀新書可以挑戰你的大腦，並在年齡增長時保持記憶力敏銳。",
    "vocabIndex": 2
  },
  {
    "q": "When the hammer slipped from my hand, it hit my left thumb and turned my finger ______ dark purple and very sore.",
    "options": [
      "nail",
      "bone",
      "chin",
      "beard"
    ],
    "answer": 0,
    "cn": "當鐵鎚從我手中滑落時，它砸中了我的左拇指，把我的手指甲打成了深紫色且非常疼痛。",
    "vocabIndex": 6
  },
  {
    "q": "Please be very gentle when opening this old historical document, or you might easily ______ the fragile paper into pieces.",
    "options": [
      "ache",
      "cough",
      "touch",
      "tear"
    ],
    "answer": 3,
    "cn": "打開這份古老的歷史文獻時請務必小心，否則你很容易把脆弱的紙張撕成碎片。",
    "vocabIndex": 8
  },
  {
    "q": "The elderly gentleman fell down on the icy sidewalk, and the doctor said he cracked a small ______ in his left leg.",
    "options": [
      "beard",
      "bone",
      "brain",
      "chin"
    ],
    "answer": 1,
    "cn": "那位年長紳士在結冰的人行道上摔倒，醫生說他摔裂了左腿的一根小骨頭。",
    "vocabIndex": 1
  },
  {
    "q": "The boxer kept his hands high to protect his face, but his opponent still landed a punch right on his ______.",
    "options": [
      "ankle",
      "nail",
      "chin",
      "hip"
    ],
    "answer": 2,
    "cn": "拳擊手雙手高舉以保護臉部，但他的對手仍然一拳正好擊中了他的下巴。",
    "vocabIndex": 3
  },
  {
    "q": "The doctor advised Mark to apply protective lotion before going swimming, because the strong sunlight could severely damage his sensitive ______.",
    "options": [
      "beard",
      "throat",
      "brain",
      "skin"
    ],
    "answer": 3,
    "cn": "醫生建議馬克在去游泳前塗抹防護乳液，因為強烈的陽光會嚴重傷害他敏感的皮膚。",
    "vocabIndex": 7
  },
  {
    "q": "Because Mrs. Baker wears an old belt that is too tight around her ______, she often feels uncomfortable when sitting down to work.",
    "options": [
      "hip",
      "chin",
      "brain",
      "nail"
    ],
    "answer": 0,
    "cn": "因為貝克太太繫在臀部周圍的舊皮帶太緊了，所以她坐下來工作時經常感到不舒服。",
    "vocabIndex": 4
  },
  {
    "q": "After shouting loudly to cheer for our school soccer team in the rain, my ______ was very dry and I needed warm water.",
    "options": [
      "nail",
      "beard",
      "throat",
      "ankle"
    ],
    "answer": 2,
    "cn": "在雨中大聲為我們學校足球隊加油之後，我的喉嚨非常乾，而且我需要喝溫水。",
    "vocabIndex": 9
  },
  {
    "q": "The puppy was thrilled when we gave him a large beef ______ from the butcher, and he happily chewed it in the yard all day.",
    "options": [
      "brain",
      "bone",
      "skin",
      "chin"
    ],
    "answer": 1,
    "cn": "當我們從小肉舖拿了一根大牛骨頭給小狗時，牠興奮極了，整天開心地在院子裡啃著它。",
    "vocabIndex": 1
  },
  {
    "q": "Henry decided to grow a thick brown ______ during the cold winter, but his mother said it made him look much older.",
    "options": [
      "beard",
      "ankle",
      "throat",
      "nail"
    ],
    "answer": 0,
    "cn": "亨利決定在寒冷的冬天留濃密的棕色鬍鬚，但他母親說這讓他看起來老很多。",
    "vocabIndex": 5
  },
  {
    "q": "If you pull the heavy box too quickly across the sharp metal shelf, the cardboard will ______ and everything will drop onto the floor.",
    "options": [
      "ache",
      "tear",
      "cough",
      "burn"
    ],
    "answer": 1,
    "cn": "如果你把笨重的箱子在鋒利的金屬架上拉得太快，紙板會破裂，裡面的東西就會全掉到地上。",
    "vocabIndex": 8
  },
  {
    "q": "Little Tina was nervous about her final piano test, so she kept biting her finger ______ while waiting outside the music classroom.",
    "options": [
      "brain",
      "hip",
      "beard",
      "nail"
    ],
    "answer": 3,
    "cn": "小蒂娜對鋼琴期末測驗感到非常緊張，所以在音樂教室外等待時，她一直咬著自己的手指甲。",
    "vocabIndex": 6
  },
  {
    "q": "While playing soccer on the school field, David fell and scraped his left ______ on the rough ground, causing it to bleed slightly.",
    "options": [
      "brain",
      "throat",
      "skin",
      "beard"
    ],
    "answer": 2,
    "cn": "大衛在學校操場踢足球時摔倒，在粗糙的地面上擦破了左側皮膚，導致微微流血。",
    "vocabIndex": 7
  },
  {
    "q": "Resting properly after intense study sessions gives your ______ enough time to process new information and stay refreshed.",
    "options": [
      "brain",
      "ankle",
      "chin",
      "nail"
    ],
    "answer": 0,
    "cn": "密集學習後適度休息，可以讓你的大腦有足夠的時間處理新資訊並保持精力充沛。",
    "vocabIndex": 2
  },
  {
    "q": "The little girl rested her small ______ on her hands while listening attentively to the wonderful bedtime story told by her grandfather.",
    "options": [
      "ankle",
      "bone",
      "chin",
      "throat"
    ],
    "answer": 2,
    "cn": "小女孩在聚精會神聆聽祖父講述美妙的床邊故事時，雙手托著她小巧的下巴。",
    "vocabIndex": 3
  },
  {
    "q": "Wearing high-heeled shoes for many hours made Emily lose her balance, and she painfully twisted her left ______ on the stairs.",
    "options": [
      "throat",
      "ankle",
      "skin",
      "beard"
    ],
    "answer": 1,
    "cn": "穿著高跟鞋好幾個小時讓艾蜜莉失去平衡，她在樓梯上痛苦地扭傷了左腳踝。",
    "vocabIndex": 0
  },
  {
    "q": "The stray dog got into a fight with another animal, and the veterinarian had to take an X-ray to see if any ______ was broken.",
    "options": [
      "chin",
      "brain",
      "nail",
      "bone"
    ],
    "answer": 3,
    "cn": "那隻流浪狗與另一隻動物打架，獸醫必須照 X 光片來檢查是否有任何骨頭折斷了。",
    "vocabIndex": 1
  },
  {
    "q": "The heavy bag knocked against Amanda's left ______ as she squeezed through the narrow train door, leaving a visible blue bruise.",
    "options": [
      "beard",
      "brain",
      "hip",
      "throat"
    ],
    "answer": 2,
    "cn": "當阿曼達擠過狹窄的火車門時，沉重的提袋撞到了她的左側臀部，留下了一塊明顯的瘀青。",
    "vocabIndex": 4
  },
  {
    "q": "Kevin spoke for over two hours during the company presentation, which left his ______ completely hoarse and tired.",
    "options": [
      "nail",
      "throat",
      "bone",
      "ankle"
    ],
    "answer": 1,
    "cn": "凱文在公司簡報中講了兩個多小時的話，這讓他的喉嚨完全沙啞且疲憊不堪。",
    "vocabIndex": 9
  },
  {
    "q": "The young artist accidently made a deep ______ in the expensive painting canvas while cutting open the package with a box cutter.",
    "options": [
      "tear",
      "bone",
      "chin",
      "beard"
    ],
    "answer": 0,
    "cn": "那位年輕藝術家用美工刀割開包裝時，不小心在那幅昂貴的畫布上劃出了一道很深的裂痕。",
    "vocabIndex": 8
  },
  {
    "q": "The beautician carefully trimmed, shaped, and polished every single finger ______ before applying the elegant pink polish for the bride.",
    "options": [
      "brain",
      "hip",
      "throat",
      "nail"
    ],
    "answer": 3,
    "cn": "美容師在為新娘塗上優雅的粉色指甲油之前，仔細修剪、塑形並拋光了每一根手指甲。",
    "vocabIndex": 6
  },
  {
    "q": "People with fair ______ need to be especially cautious on sunny beaches, because they are prone to painful sunburns within minutes.",
    "options": [
      "skin",
      "beard",
      "bone",
      "chin"
    ],
    "answer": 0,
    "cn": "皮膚白皙的人在陽光明媚的海灘上需要格外小心，因為他們很容易在幾分鐘內就被曬傷。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "ankle": {
    "pos": "n.",
    "en_def": "the joint between the foot and the lower leg",
    "cn_def": "腳踝",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the joint between the foot and the lower leg",
        "cn_def": "腳踝"
      }
    ]
  },
  "bone": {
    "pos": "n.",
    "en_def": "any of the hard pieces that make up the skeleton",
    "cn_def": "骨頭",
    "combined": [
      {
        "pos": "n.",
        "en_def": "any of the hard pieces that make up the skeleton",
        "cn_def": "骨頭"
      }
    ]
  },
  "brain": {
    "pos": "n.",
    "en_def": "the organ inside the head that controls thought and memory",
    "cn_def": "大腦；智力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the organ inside the head that controls thought and memory",
        "cn_def": "大腦；智力"
      }
    ]
  },
  "chin": {
    "pos": "n.",
    "en_def": "the bottom part of the face below the mouth",
    "cn_def": "下巴",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the bottom part of the face below the mouth",
        "cn_def": "下巴"
      }
    ]
  },
  "hip": {
    "pos": "n.",
    "en_def": "the area on either side of the body below the waist",
    "cn_def": "臀部；髖部",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the area on either side of the body below the waist",
        "cn_def": "臀部；髖部"
      }
    ]
  },
  "beard": {
    "pos": "n.",
    "en_def": "the hair that grows on a man's chin and cheeks",
    "cn_def": "鬍鬚",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the hair that grows on a man's chin and cheeks",
        "cn_def": "鬍鬚"
      }
    ]
  },
  "nail": {
    "pos": "n.",
    "en_def": "the hard surface covering the tip of fingers; a metal pin",
    "cn_def": "指甲；釘子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the hard surface covering the tip of fingers; a metal pin",
        "cn_def": "指甲；釘子"
      }
    ]
  },
  "skin": {
    "pos": "n. / v.",
    "en_def": "the natural outer layer that covers the body",
    "cn_def": "皮膚；擦破皮",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "the natural outer layer that covers the body",
        "cn_def": "皮膚；擦破皮"
      }
    ]
  },
  "tear": {
    "pos": "v. / n.",
    "en_def": "to pull paper or cloth into pieces; water from eyes",
    "cn_def": "撕裂；眼淚",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to pull paper or cloth into pieces; water from eyes",
        "cn_def": "撕裂；眼淚"
      }
    ]
  },
  "throat": {
    "pos": "n.",
    "en_def": "the front passage inside the neck",
    "cn_def": "喉嚨",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the front passage inside the neck",
        "cn_def": "喉嚨"
      }
    ]
  },
  "ache": {
    "pos": "",
    "en_def": "",
    "cn_def": "疼痛",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "疼痛"
      }
    ]
  },
  "cough": {
    "pos": "",
    "en_def": "",
    "cn_def": "咳嗽",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "咳嗽"
      }
    ]
  },
  "touch": {
    "pos": "",
    "en_def": "",
    "cn_def": "接觸",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "接觸"
      }
    ]
  },
  "burn": {
    "pos": "",
    "en_def": "",
    "cn_def": "燃燒",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "燃燒"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
