// Part 3 Quiz Data: juicy – pitch in
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 3-3 - juicy – pitch in",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "juicy",
    "pos": "adj.",
    "cn_def": "多汁的；八卦刺激的",
    "en_def": "full of juice; succulent; exciting and interesting",
    "sentence": "Victor grilled a thick and {{BLANK}} steak over hot charcoal for our outdoor summer family barbecue.",
    "cn": "維克多在熱木炭上烤了一塊厚實且多汁的牛排，供我們夏季戶外家庭烤肉享用。"
  },
  {
    "word": "jungle",
    "pos": "n.",
    "cn_def": "叢林；密林；熱帶叢林（可數/不可數）",
    "en_def": "an area of land overgrown with dense forest and tangled vegetation",
    "sentence": "An ancient tribal legend tells of a magnificent golden temple hidden deep inside the Amazon {{BLANK}}.",
    "cn": "一個古老的部落傳說講述了一座隱藏在亞馬遜叢林深處的宏偉黃金神廟。"
  },
  {
    "word": "junk",
    "pos": "n.",
    "cn_def": "廢棄雜物；破爛；垃圾（不可數）",
    "en_def": "old or discarded articles that are considered useless or of little value",
    "sentence": "Eating salty and sugary {{BLANK}} food every single day can lead to serious cardiovascular problems in young adults.",
    "cn": "每天食用高鹽高糖的垃圾食物可能導致年輕人嚴重心血管問題。"
  },
  {
    "word": "kangaroo",
    "pos": "n.",
    "cn_def": "袋鼠（可數）",
    "en_def": "a large Australian marsupial with powerful hind legs for leaping and a pouch",
    "sentence": "While playing golf on a famous course near Sydney, tourists were delighted to see a wild {{BLANK}} hopping across the grass.",
    "cn": "在雪梨附近著名的球場打高爾夫球時，遊客們高興地看到一隻野生袋鼠跳過草坪。"
  },
  {
    "word": "march",
    "pos": "v.",
    "cn_def": "行軍；齊步前進；遊行抗議（動詞）",
    "en_def": "to walk with stiff, regular, and measured strides, like soldiers",
    "sentence": "Thousands of passionate environmental activists gathered to {{BLANK}} through city streets against government climate policies.",
    "cn": "數千名熱情的環保倡議者聚集在一起，穿過城市街道遊行抗議政府的氣候政策。"
  },
  {
    "word": "march",
    "pos": "n.",
    "cn_def": "遊行；長途跋涉；進行曲（可數）",
    "en_def": "an act of marching; a long walk; a musical composition with a strong rhythm",
    "sentence": "Over ten thousand peaceful citizens joined the public protest {{BLANK}} downtown to demand higher wages and fair labor laws.",
    "cn": "超過一萬名和平公民參加了市中心的公開抗議遊行，要求提高工資與公平勞動法。"
  },
  {
    "word": "neighborhood",
    "pos": "n.",
    "cn_def": "街坊；鄰近地區；社區（可數）",
    "en_def": "a district, especially one forming a community within a town or city",
    "sentence": "Our quiet residential {{BLANK}} has a wonderful public library, clean playgrounds, and several cozy family-owned cafes.",
    "cn": "我們安靜的住宅社區擁有一座極佳的公共圖書館、乾淨的遊樂場以及幾家溫馨的家族咖啡館。"
  },
  {
    "word": "neighbor",
    "pos": "n.",
    "cn_def": "鄰居；鄰國（可數）",
    "en_def": "a person living next door to or very near to the speaker or person referred to",
    "sentence": "Whenever we travel out of town for vacations, our friendly next-door {{BLANK}} kindly waters our garden flowers.",
    "cn": "每當我們出城度假時，我們親切的隔壁鄰居都會好心替我們澆灌花園的花朵。"
  },
  {
    "word": "nests",
    "pos": "n.",
    "cn_def": "鳥巢；窩；巢穴（可數）",
    "en_def": "a structure or place made or chosen by a bird for laying eggs and sheltering its young",
    "sentence": "During early spring, hundreds of wild swallows arrive at the park to build their mud {{BLANK}} under the bridge.",
    "cn": "在初春時節，數百隻野生燕子抵達公園，在橋樑下建造牠們的泥巢。"
  },
  {
    "word": "nest",
    "pos": "v.",
    "cn_def": "築巢；棲息；套疊（動詞）",
    "en_def": "to use or build a nest; to fit an object inside a larger one",
    "sentence": "Many rare species of seabirds travel thousands of miles to {{BLANK}} safely among the protected island mangroves.",
    "cn": "許多稀有海鳥物種飛行數千英里，在受保護的島嶼紅樹林中安全築巢棲息。"
  },
  {
    "word": "pitch",
    "pos": "n.",
    "cn_def": "音高；球場；推銷說詞；投球（可數/不可數）",
    "en_def": "the highness or lowness of a tone; a playing field; a promotional speech",
    "sentence": "The talented opera singer can effortlessly hit the highest vocal {{BLANK}} of any classical Italian melody.",
    "cn": "那位才華洋溢的歌劇歌手能毫不費力地唱出任何古典義大利旋律的最高音調／音高。"
  },
  {
    "word": "pitch",
    "pos": "v.",
    "cn_def": "投球；投擲；搭帳篷（動詞）",
    "en_def": "to throw or fling roughly; to set up a tent",
    "sentence": "Ray trained hard every afternoon because he was chosen to {{BLANK}} for his high school varsity baseball team.",
    "cn": "雷每天下午刻苦訓練，因為他被選入代表他的高中棒球校隊投球／擔任投手。"
  },
  {
    "word": "pitch in",
    "pos": "v.phr.",
    "cn_def": "投入幫忙；共同分擔／出錢協力",
    "en_def": "to join in and help with a job or contribute to a cause",
    "sentence": "If all four group members {{BLANK}} to complete the science project, we will definitely finish before the Friday deadline.",
    "cn": "如果四位組員全都同心協力投入幫忙完成這項科學專案，我們一定能在週五截止日前完工。"
  }
];

const MCQS = [
  {
    "q": "The baby bird sat quietly inside its warm straw ______ waiting for its mother.",
    "options": [
      "jungle",
      "nest",
      "kangaroo",
      "neighborhood"
    ],
    "answer": 1,
    "cn": "幼鳥安靜地坐在溫暖的稻草鳥巢裡等待母親。",
    "vocabIndex": 8
  },
  {
    "q": "A big mother ______ can jump very high and carries her small baby in her front pouch.",
    "options": [
      "jungle",
      "nest",
      "kangaroo",
      "neighbor"
    ],
    "answer": 2,
    "cn": "大隻的母袋鼠能跳得非常高，並將她的小寶寶裝在前面的育兒袋中。",
    "vocabIndex": 3
  },
  {
    "q": "Tigers and wild monkeys live deep inside the green, tropical ______ in South America.",
    "options": [
      "nest",
      "neighborhood",
      "kangaroo",
      "jungle"
    ],
    "answer": 3,
    "cn": "老虎與野生猴子生活在南美洲綠色熱帶叢林深處。",
    "vocabIndex": 1
  },
  {
    "q": "Our ______ is very safe and clean, with a nice park for children to play.",
    "options": [
      "neighborhood",
      "jungle",
      "kangaroo",
      "nest"
    ],
    "answer": 0,
    "cn": "我們的社區非常安全且乾淨，擁有一座適合孩子玩耍的漂亮公園。",
    "vocabIndex": 6
  },
  {
    "q": "Mr. Smith is our next-door ______ who always says hello and shares fresh apples with us.",
    "options": [
      "jungle",
      "kangaroo",
      "neighbor",
      "nest"
    ],
    "answer": 2,
    "cn": "史密斯先生是我們的隔壁鄰居，他總是向我們打招呼並與我們分享新鮮蘋果。",
    "vocabIndex": 7
  },
  {
    "q": "Thousands of workers joined a peaceful protest ______ through the capital city to ask for better pay.",
    "options": [
      "march",
      "nest",
      "jungle",
      "kangaroo"
    ],
    "answer": 0,
    "cn": "數千名工人參加了穿過首都城市的和平抗議遊行，要求更好的工資待遇。",
    "vocabIndex": 4
  },
  {
    "q": "Please throw all that old broken ______ into the trash bin so the garage is clean.",
    "options": [
      "jungle",
      "kangaroo",
      "nest",
      "junk"
    ],
    "answer": 3,
    "cn": "請將所有老舊壞掉的廢棄雜物／破爛扔進垃圾桶，這樣車庫才會整潔。",
    "vocabIndex": 2
  },
  {
    "q": "The sound of her crying voice had such a high ______ that it hurt my ears.",
    "options": [
      "jungle",
      "pitch",
      "nest",
      "kangaroo"
    ],
    "answer": 1,
    "cn": "她哭泣的聲音帶有如此高的音調／音高，以至於傷到了我的耳朵。",
    "vocabIndex": 10
  },
  {
    "q": "The soldiers stood in straight lines and ______ together down the wide street.",
    "options": [
      "nested",
      "ached",
      "pitched",
      "marched"
    ],
    "answer": 3,
    "cn": "士兵們排成筆直的隊列，一同沿著寬闊的街道齊步前進／行軍。",
    "vocabIndex": 4
  },
  {
    "q": "Wild ducks love to ______ among the tall green grass beside the quiet lake.",
    "options": [
      "nest",
      "march",
      "pitch",
      "ache"
    ],
    "answer": 0,
    "cn": "野鴨喜歡在幽靜湖泊旁的高大綠草叢中築巢棲息。",
    "vocabIndex": 8
  },
  {
    "q": "Andy loves sports and was chosen to ______ for his school baseball team.",
    "options": [
      "march",
      "nest",
      "pitch",
      "cart"
    ],
    "answer": 2,
    "cn": "安迪熱愛運動，並被選中為他的學校棒球隊投球／擔任投手。",
    "vocabIndex": 10
  },
  {
    "q": "When we arrived at the grassy mountain park, dad showed us how to ______ our green tent.",
    "options": [
      "nest",
      "pitch",
      "cart",
      "march"
    ],
    "answer": 1,
    "cn": "當我們抵達綠草如茵的山間公園時，爸爸向我們示範如何搭建我們的綠色帳篷。",
    "vocabIndex": 10
  },
  {
    "q": "The orange was so sweet and ______ that juice dripped down the little boy's chin.",
    "options": [
      "bloody",
      "cruel",
      "chipped",
      "juicy"
    ],
    "answer": 3,
    "cn": "這顆橘子甜美且多汁，果汁順著小男孩的下巴滴了下來。",
    "vocabIndex": 0
  },
  {
    "q": "Grandma cooked a delicious, ______ chicken for Sunday family dinner.",
    "options": [
      "juicy",
      "cruel",
      "chipped",
      "bloody"
    ],
    "answer": 0,
    "cn": "祖母為週日的家庭晚餐烹調了一隻美味多汁的烤雞。",
    "vocabIndex": 0
  },
  {
    "q": "The ripe watermelon we bought from the fruit shop was very red and ______.",
    "options": [
      "cruel",
      "juicy",
      "bloody",
      "chipped"
    ],
    "answer": 1,
    "cn": "我們從水果店買的熟西瓜非常紅而且多汁。",
    "vocabIndex": 0
  },
  {
    "q": "Children should eat green vegetables and apples instead of eating too much ______.",
    "options": [
      "double chin",
      "bucket list",
      "junk food",
      "paper clip"
    ],
    "answer": 2,
    "cn": "孩童應該吃綠色蔬菜和蘋果，而不是吃太多垃圾食物。",
    "vocabIndex": 2
  },
  {
    "q": "Living in a giant city with only tall buildings and no trees can feel like a ______.",
    "options": [
      "shopping cart",
      "concrete jungle",
      "brick wall",
      "drop in the bucket"
    ],
    "answer": 1,
    "cn": "生活在只有高樓而沒有樹木的巨型城市中，感覺就像身處在水泥叢林裡。",
    "vocabIndex": 1
  },
  {
    "q": "My email box receives dozens of advertisements and unwanted ______ every single day.",
    "options": [
      "junk mail",
      "junk food",
      "paper clip",
      "bucket list"
    ],
    "answer": 0,
    "cn": "我的電子信箱每天都收到幾十封廣告信和不受歡迎的垃圾信件。",
    "vocabIndex": 2
  },
  {
    "q": "When grandfather was ill, all his children ______ with money to buy his medicines.",
    "options": [
      "hit a brick wall",
      "kicked the bucket",
      "pitched in",
      "dropped a brick"
    ],
    "answer": 2,
    "cn": "當爺爺生病時，他所有的孩子都共同出錢出力／投入幫忙來購買他的藥品。",
    "vocabIndex": 12
  },
  {
    "q": "If everyone ______ to clean up the classroom, we can leave school ten minutes earlier.",
    "options": [
      "bleeds dry",
      "hits a brick wall",
      "takes a deep breath",
      "pitches in"
    ],
    "answer": 3,
    "cn": "如果每個人都投入幫忙打掃教室，我們就能提前十分鐘放學離校。",
    "vocabIndex": 12
  },
  {
    "q": "After their only daughter moved to London for work, the lonely parents felt ______.",
    "options": [
      "drop in the bucket",
      "empty nest syndrome",
      "bucket list",
      "paper clip"
    ],
    "answer": 1,
    "cn": "在唯一的獨生女搬去倫敦工作後，孤單的父母感受到了空巢症候群。",
    "vocabIndex": 8
  },
  {
    "q": "The small mouse let out a ______ cry when the black cat chased it into the corner.",
    "options": [
      "cruel",
      "bloody",
      "chipped",
      "high-pitched"
    ],
    "answer": 3,
    "cn": "當黑貓把小老鼠追到角落時，小老鼠發出了一聲尖銳高亢的叫聲。",
    "vocabIndex": 10
  },
  {
    "q": "The salesman gave an interesting ______ about why this smart vacuum cleaner saves time.",
    "options": [
      "bucket list",
      "brick wall",
      "sales pitch",
      "concrete jungle"
    ],
    "answer": 2,
    "cn": "業務員發表了一場有趣的推銷說詞，說明為什麼這款智慧掃地機能節省時間。",
    "vocabIndex": 10
  },
  {
    "q": "The girls gathered around the desk during lunchtime to whisper and listen to ______.",
    "options": [
      "juicy gossip",
      "brick walls",
      "paper clips",
      "shopping carts"
    ],
    "answer": 0,
    "cn": "女孩們在午餐時間聚集在課桌旁低聲耳語，傾聽八卦刺激的緋聞消息。",
    "vocabIndex": 0
  },
  {
    "q": "Before going to sleep on the grass, the campers used ropes and wooden sticks to ______.",
    "options": [
      "hit a brick wall",
      "pitch a tent",
      "put the cart before the horse",
      "bleed them dry"
    ],
    "answer": 1,
    "cn": "在草地上睡覺之前，露營者們用繩子和木棍來搭建帳篷。",
    "vocabIndex": 10
  }
];

const LOOKUP = {
  "juicy": {
    "pos": "adj.",
    "en_def": "full of juice; succulent; exciting and interesting",
    "cn_def": "多汁的；八卦刺激的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "full of juice; succulent; exciting and interesting",
        "cn_def": "多汁的；八卦刺激的"
      }
    ]
  },
  "jungle": {
    "pos": "n.",
    "en_def": "an area of land overgrown with dense forest and tangled vegetation",
    "cn_def": "叢林；密林；熱帶叢林（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an area of land overgrown with dense forest and tangled vegetation",
        "cn_def": "叢林；密林；熱帶叢林（可數/不可數）"
      }
    ]
  },
  "junk": {
    "pos": "n.",
    "en_def": "old or discarded articles that are considered useless or of little value",
    "cn_def": "廢棄雜物；破爛；垃圾（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "old or discarded articles that are considered useless or of little value",
        "cn_def": "廢棄雜物；破爛；垃圾（不可數）"
      }
    ]
  },
  "kangaroo": {
    "pos": "n.",
    "en_def": "a large Australian marsupial with powerful hind legs for leaping and a pouch",
    "cn_def": "袋鼠（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large Australian marsupial with powerful hind legs for leaping and a pouch",
        "cn_def": "袋鼠（可數）"
      }
    ]
  },
  "march": {
    "pos": "v.",
    "en_def": "to walk with stiff, regular, and measured strides, like soldiers",
    "cn_def": "行軍；齊步前進；遊行抗議（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to walk with stiff, regular, and measured strides, like soldiers",
        "cn_def": "行軍；齊步前進；遊行抗議（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "an act of marching; a long walk; a musical composition with a strong rhythm",
        "cn_def": "遊行；長途跋涉；進行曲（可數）"
      }
    ]
  },
  "neighborhood": {
    "pos": "n.",
    "en_def": "a district, especially one forming a community within a town or city",
    "cn_def": "街坊；鄰近地區；社區（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a district, especially one forming a community within a town or city",
        "cn_def": "街坊；鄰近地區；社區（可數）"
      }
    ]
  },
  "neighbor": {
    "pos": "n.",
    "en_def": "a person living next door to or very near to the speaker or person referred to",
    "cn_def": "鄰居；鄰國（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person living next door to or very near to the speaker or person referred to",
        "cn_def": "鄰居；鄰國（可數）"
      }
    ]
  },
  "nest": {
    "pos": "n.",
    "en_def": "a structure or place made or chosen by a bird for laying eggs and sheltering its young",
    "cn_def": "鳥巢；窩；巢穴（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a structure or place made or chosen by a bird for laying eggs and sheltering its young",
        "cn_def": "鳥巢；窩；巢穴（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to use or build a nest; to fit an object inside a larger one",
        "cn_def": "築巢；棲息；套疊（動詞）"
      }
    ]
  },
  "nests": {
    "pos": "n.",
    "en_def": "a structure or place made or chosen by a bird for laying eggs and sheltering its young",
    "cn_def": "鳥巢；窩；巢穴（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a structure or place made or chosen by a bird for laying eggs and sheltering its young",
        "cn_def": "鳥巢；窩；巢穴（可數）"
      }
    ]
  },
  "pitch": {
    "pos": "n.",
    "en_def": "the highness or lowness of a tone; a playing field; a promotional speech",
    "cn_def": "音高；球場；推銷說詞；投球（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the highness or lowness of a tone; a playing field; a promotional speech",
        "cn_def": "音高；球場；推銷說詞；投球（可數/不可數）"
      },
      {
        "pos": "v.",
        "en_def": "to throw or fling roughly; to set up a tent",
        "cn_def": "投球；投擲；搭帳篷（動詞）"
      }
    ]
  },
  "pitch in": {
    "pos": "v.phr.",
    "en_def": "to join in and help with a job or contribute to a cause",
    "cn_def": "投入幫忙；共同分擔／出錢協力",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to join in and help with a job or contribute to a cause",
        "cn_def": "投入幫忙；共同分擔／出錢協力"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
