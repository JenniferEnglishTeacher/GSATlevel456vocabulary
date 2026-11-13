// Part 2 Quiz Data: drunk – oral
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 20-2 - drunk – oral",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "drunk",
    "pos": "adj.",
    "cn_def": "喝醉的；醉醺醺的",
    "en_def": "affected by alcohol to the extent of losing control of one's faculties",
    "sentence": "The reckless driver was immediately arrested by the police officer for dangerous {{BLANK}} driving on the highway.",
    "cn": "那名魯莽的駕駛因在公路上危險酒後駕車而被警察立即逮捕。"
  },
  {
    "word": "drunk",
    "pos": "n.",
    "cn_def": "酒鬼；酗酒者（可數）",
    "en_def": "a person who is drunk or who habitually drinks to excess",
    "sentence": "The noisy {{BLANK}} was shouting loudly on the subway platform until security guards escorted him out.",
    "cn": "那個喧鬧的酒鬼在捷運月台上大聲喊叫，直到警衛將他護送出去。"
  },
  {
    "word": "flesh",
    "pos": "n.",
    "cn_def": "肉體；果肉；血肉（不可數）",
    "en_def": "the soft substance between skin and bones in animal or human bodies; fruit pulp",
    "sentence": "Thousands of excited fans screamed loudly when their favorite pop singer appeared before them in the {{BLANK}}.",
    "cn": "當最喜愛的流行歌手本人親自實體出現在眼前時，數千名興奮的粉絲放聲尖叫。"
  },
  {
    "word": "harbor",
    "pos": "n.",
    "cn_def": "港灣；海港（可數）",
    "en_def": "a sheltered port where ships, boats, and barges can dock safely",
    "sentence": "Dozens of colorful fishing boats returned to the calm {{BLANK}} to take shelter before the typhoon arrived.",
    "cn": "數十艘五彩斑斕的漁船在颱風來臨前返回平靜的海港避難。"
  },
  {
    "word": "harbor",
    "pos": "v.",
    "cn_def": "庇護；窩藏；懷有（感情、怨恨等）（動詞）",
    "en_def": "to give shelter or refuge to; to hold a thought or feeling in mind",
    "sentence": "You should forgive your coworkers and not {{BLANK}} bitter resentment over minor misunderstandings.",
    "cn": "你應該原諒你的同事，不要因為小誤會而懷有強烈的怨恨。"
  },
  {
    "word": "luggage",
    "pos": "n.",
    "cn_def": "行李（不可數）",
    "en_def": "suitcases or other bags in which to pack personal belongings for traveling",
    "sentence": "Passengers are politely reminded to attach a clearly written name tag to each piece of their {{BLANK}}.",
    "cn": "旅客被禮貌地提醒在每件行李上附上書寫清楚的姓名吊牌。"
  },
  {
    "word": "moth",
    "pos": "n.",
    "cn_def": "蛾；飛蛾（可數）",
    "en_def": "a nocturnal insect related to butterflies, typically having stout bodies and drab wings",
    "sentence": "During warm summer evenings, a pale brown {{BLANK}} kept fluttering endlessly around the porch lantern.",
    "cn": "在溫暖的夏夜裡，一隻淡褐色的飛蛾不停地在門廊燈籠周圍撲翅盤旋。"
  },
  {
    "word": "mushrooms",
    "pos": "n.",
    "cn_def": "蘑菇；蕈類（可數）",
    "en_def": "a fungal growth that typically takes the form of a domed cap on a stalk",
    "sentence": "You should never pick and eat {{BLANK}} in the wild unless an experienced expert has inspected them carefully.",
    "cn": "你絕不能採食野外的蘑菇，除非有經驗豐富的專家仔細檢查過。"
  },
  {
    "word": "mushroomed",
    "pos": "v.",
    "cn_def": "迅速增加；如雨後春筍般迅速發展（動詞）",
    "en_def": "to increase, spread, or develop rapidly and suddenly",
    "sentence": "Trendy boutique cafes have rapidly {{BLANK}} across every quiet street corner of the growing city.",
    "cn": "時髦的精品咖啡館在這座成長中的城市每個安靜街角如雨後春筍般迅速湧現。"
  },
  {
    "word": "mystery",
    "pos": "n.",
    "cn_def": "神秘的事物；謎團；推理小說（可數/不可數）",
    "en_def": "something that is difficult or impossible to understand or explain; a detective story",
    "sentence": "The disappearance of the ancient sunken ship in the deep ocean remains an unsolved {{BLANK}} to this day.",
    "cn": "古老沉船在深海中的消失至今依然是一個未解的謎團。"
  },
  {
    "word": "mysterious",
    "pos": "adj.",
    "cn_def": "神秘的；不可思議的",
    "en_def": "difficult or impossible to understand, explain, or identify; full of mystery",
    "sentence": "The ancient temple hidden deep inside the misty jungle is surrounded by many {{BLANK}} local legends.",
    "cn": "隱藏在多霧叢林深處的古老寺廟被許多神秘的當地傳說所環繞。"
  },
  {
    "word": "napkin",
    "pos": "n.",
    "cn_def": "餐巾；紙巾（可數）",
    "en_def": "a square piece of cloth or paper used at a meal to wipe the fingers or lips",
    "sentence": "The polite diner neatly placed his cloth {{BLANK}} on his lap before beginning the delicious multi-course meal.",
    "cn": "有禮貌的用餐者在享用多道美味佳餚之前，將布餐巾整齊地放在大腿上。"
  },
  {
    "word": "oral",
    "pos": "adj.",
    "cn_def": "口頭的；口述的；口腔的",
    "en_def": "spoken rather than written; relating to the mouth",
    "sentence": "All the foreign language students were nervous because they had an important {{BLANK}} exam on Wednesday morning.",
    "cn": "所有的外語學生都很緊張，因為他們在星期三早晨有一場重要的口試。"
  }
];

const MCQS = [
  {
    "q": "The police officer pulled over the speeding driver because he suspected dangerous ______ driving.",
    "options": [
      "oral",
      "drunk",
      "mysterious",
      "moth-eaten"
    ],
    "answer": 1,
    "cn": "警官攔下了那輛超速的汽車，因為他懷疑駕駛危險酒駕。",
    "vocabIndex": 0
  },
  {
    "q": "Students are practicing hard because they must give an ______ presentation in English class tomorrow.",
    "options": [
      "oral",
      "drunk",
      "mysterious",
      "fleshy"
    ],
    "answer": 0,
    "cn": "學生們正在努力練習，因為他們明天必須在英文課上進行一次口頭簡報。",
    "vocabIndex": 12
  },
  {
    "q": "An ancient map hidden in the old chest led the explorers to a ______ stone temple in the forest.",
    "options": [
      "drunk",
      "bare",
      "oral",
      "mysterious"
    ],
    "answer": 3,
    "cn": "藏在舊箱子裡的古代地圖引領探險家來到森林裡一座神秘的石廟。",
    "vocabIndex": 10
  },
  {
    "q": "The disappearance of the valuable painting from the national museum remains an unsolved ______.",
    "options": [
      "harbor",
      "napkin",
      "mystery",
      "moth"
    ],
    "answer": 2,
    "cn": "那幅珍貴名畫從國家博物館的失蹤至今依然是一個未解的謎團。",
    "vocabIndex": 9
  },
  {
    "q": "Please wipe your mouth and fingers with a clean ______ before leaving the dining table.",
    "options": [
      "moth",
      "napkin",
      "harbor",
      "mystery"
    ],
    "answer": 1,
    "cn": "在離開餐桌之前，請用乾淨的餐巾擦拭你的嘴巴和手指。",
    "vocabIndex": 11
  },
  {
    "q": "Dozens of small sailing boats found safety inside the calm, protected ______ during the storm.",
    "options": [
      "harbor",
      "moth",
      "napkin",
      "flesh"
    ],
    "answer": 0,
    "cn": "暴風雨期間，數十艘小型帆船在平靜受保護的港灣內找到了安全庇護。",
    "vocabIndex": 3
  },
  {
    "q": "The airline attendant asked passengers to place their heavy ______ in the overhead compartment.",
    "options": [
      "mushroom",
      "napkin",
      "moth",
      "luggage"
    ],
    "answer": 3,
    "cn": "空服人員請乘客將沉重的行李放置在頭頂上方的行李艙中。",
    "vocabIndex": 5
  },
  {
    "q": "A small winged ______ flew around the porch light on a warm and humid summer evening.",
    "options": [
      "napkin",
      "harbor",
      "moth",
      "flesh"
    ],
    "answer": 2,
    "cn": "在一個溫暖潮濕的夏夜，一隻長有翅膀的小飛蛾在門廊燈周圍飛舞。",
    "vocabIndex": 6
  },
  {
    "q": "The chef cooked a delicious bowl of hot creamy ______ soup with garlic and herbs.",
    "options": [
      "mushroom",
      "luggage",
      "moth",
      "harbor"
    ],
    "answer": 0,
    "cn": "主廚用大蒜和香草烹調了一碗美味熱騰騰的濃郁蘑菇湯。",
    "vocabIndex": 7
  },
  {
    "q": "Fans cried with immense excitement when they saw their favorite movie superstar in the ______.",
    "options": [
      "luggage",
      "moth",
      "napkin",
      "flesh"
    ],
    "answer": 3,
    "cn": "當粉絲們看到最喜愛的電影巨星本人實體時，興奮得痛哭流涕。",
    "vocabIndex": 2
  },
  {
    "q": "The noisy ______ was shouting angrily on the street corner after drinking too much alcohol.",
    "options": [
      "harbor",
      "drunk",
      "napkin",
      "moth"
    ],
    "answer": 1,
    "cn": "那個喧鬧的酒鬼在喝了太多酒後，在街角憤怒地大吼大叫。",
    "vocabIndex": 0
  },
  {
    "q": "You should not ______ bitter feelings of hatred against your old friends over small misunderstandings.",
    "options": [
      "mushroom",
      "drain",
      "harbor",
      "bind"
    ],
    "answer": 2,
    "cn": "你不應該因為小小的誤會而對老朋友懷有刻骨銘心的仇恨情緒。",
    "vocabIndex": 3
  },
  {
    "q": "In recent years, fashionable bubble tea shops have ______ across every commercial district.",
    "options": [
      "mushroomed",
      "bound",
      "harbored",
      "drained"
    ],
    "answer": 0,
    "cn": "近年來，時髦的珍珠奶茶店在每個商業區如雨後春筍般迅速湧現。",
    "vocabIndex": 7
  },
  {
    "q": "Good dental hygiene and daily brushing are essential for maintaining proper ______ health.",
    "options": [
      "beneficial",
      "drunk",
      "mysterious",
      "oral"
    ],
    "answer": 3,
    "cn": "良好的牙齒衛生和每天刷牙對於維持良好的口腔健康至關重要。",
    "vocabIndex": 12
  },
  {
    "q": "The detective carefully examined the crime scene to uncover what ______ event had taken place.",
    "options": [
      "drunk",
      "mysterious",
      "oral",
      "admirable"
    ],
    "answer": 1,
    "cn": "偵探仔細檢查了犯罪現場，以查明發生了什麼神秘不可思議的事件。",
    "vocabIndex": 10
  },
  {
    "q": "The thick and sweet ______ of the ripe peach was wonderfully refreshing on a hot day.",
    "options": [
      "napkin",
      "moth",
      "flesh",
      "harbor"
    ],
    "answer": 2,
    "cn": "成熟水蜜桃厚實甜美的果肉在炎熱的天氣裡令人格外神清氣爽。",
    "vocabIndex": 2
  },
  {
    "q": "He had to pay an extra penalty fee because his airline ______ was five kilograms overweight.",
    "options": [
      "luggage",
      "napkin",
      "moth",
      "mushroom"
    ],
    "answer": 0,
    "cn": "他不得不支付額外的罰款，因為他的航空行李超重了五公斤。",
    "vocabIndex": 5
  },
  {
    "q": "The traveler folded his cloth ______ neatly and placed it next to his porcelain dinner plate.",
    "options": [
      "moth",
      "mystery",
      "harbor",
      "napkin"
    ],
    "answer": 3,
    "cn": "旅客將他的布餐巾整齊地折疊好，放在瓷製餐盤旁邊。",
    "vocabIndex": 11
  },
  {
    "q": "Like a ______ drawn to a lantern flame, the ambitious investor was blinded by potential profits.",
    "options": [
      "napkin",
      "moth",
      "mushroom",
      "harbor"
    ],
    "answer": 1,
    "cn": "就像被燈火吸引的飛蛾一樣，野心勃勃的投資客被潛在利潤蒙蔽了雙眼。",
    "vocabIndex": 6
  },
  {
    "q": "Wild and colorful ______ growing in the dark damp woods might be highly poisonous to humans.",
    "options": [
      "moths",
      "napkins",
      "mushrooms",
      "harbors"
    ],
    "answer": 2,
    "cn": "生長在陰暗潮濕森林裡的野生多彩蘑菇可能對人類具有劇毒。",
    "vocabIndex": 7
  },
  {
    "q": "The man was so severely ______ that he could not even stand straight or remember his address.",
    "options": [
      "bound",
      "oral",
      "mysterious",
      "drunk"
    ],
    "answer": 3,
    "cn": "那名男子喝得如此爛醉，以致於甚至無法站直或記起自己的地址。",
    "vocabIndex": 0
  },
  {
    "q": "The scientist was fascinated by the ______ signal received from deep outer space.",
    "options": [
      "drunk",
      "oral",
      "mysterious",
      "bare"
    ],
    "answer": 2,
    "cn": "科學家對從外太空深處接收到的神秘訊號深感著迷。",
    "vocabIndex": 10
  },
  {
    "q": "The harbor was peaceful and calm, but the strange cave on the cliff remained a deep ______.",
    "options": [
      "mystery",
      "napkin",
      "moth",
      "mushroom"
    ],
    "answer": 0,
    "cn": "港灣寧靜和平，但懸崖上那個奇怪的洞穴依然是一個深奧的謎團。",
    "vocabIndex": 9
  },
  {
    "q": "The criminal was charged with illegally ______ a wanted fugitive inside his country house.",
    "options": [
      "draining",
      "harboring",
      "mushrooming",
      "binding"
    ],
    "answer": 1,
    "cn": "該罪犯被指控在其鄉村別墅內非法窩藏一名通緝犯。",
    "vocabIndex": 3
  },
  {
    "q": "New tech startups have rapidly ______ across the northern part of the capital city.",
    "options": [
      "harbored",
      "bound",
      "admired",
      "mushroomed"
    ],
    "answer": 3,
    "cn": "新創科技公司已在首都北部如雨後春筍般迅速激增。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "drunk": {
    "pos": "adj.",
    "en_def": "affected by alcohol to the extent of losing control of one's faculties",
    "cn_def": "喝醉的；醉醺醺的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "affected by alcohol to the extent of losing control of one's faculties",
        "cn_def": "喝醉的；醉醺醺的"
      },
      {
        "pos": "n.",
        "en_def": "a person who is drunk or who habitually drinks to excess",
        "cn_def": "酒鬼；酗酒者（可數）"
      }
    ]
  },
  "flesh": {
    "pos": "n.",
    "en_def": "the soft substance between skin and bones in animal or human bodies; fruit pulp",
    "cn_def": "肉體；果肉；血肉（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the soft substance between skin and bones in animal or human bodies; fruit pulp",
        "cn_def": "肉體；果肉；血肉（不可數）"
      }
    ]
  },
  "harbor": {
    "pos": "n.",
    "en_def": "a sheltered port where ships, boats, and barges can dock safely",
    "cn_def": "港灣；海港（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sheltered port where ships, boats, and barges can dock safely",
        "cn_def": "港灣；海港（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to give shelter or refuge to; to hold a thought or feeling in mind",
        "cn_def": "庇護；窩藏；懷有（感情、怨恨等）（動詞）"
      }
    ]
  },
  "luggage": {
    "pos": "n.",
    "en_def": "suitcases or other bags in which to pack personal belongings for traveling",
    "cn_def": "行李（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "suitcases or other bags in which to pack personal belongings for traveling",
        "cn_def": "行李（不可數）"
      }
    ]
  },
  "moth": {
    "pos": "n.",
    "en_def": "a nocturnal insect related to butterflies, typically having stout bodies and drab wings",
    "cn_def": "蛾；飛蛾（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a nocturnal insect related to butterflies, typically having stout bodies and drab wings",
        "cn_def": "蛾；飛蛾（可數）"
      }
    ]
  },
  "mushroom": {
    "pos": "n.",
    "en_def": "a fungal growth that typically takes the form of a domed cap on a stalk",
    "cn_def": "蘑菇；蕈類（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a fungal growth that typically takes the form of a domed cap on a stalk",
        "cn_def": "蘑菇；蕈類（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to increase, spread, or develop rapidly and suddenly",
        "cn_def": "迅速增加；如雨後春筍般迅速發展（動詞）"
      }
    ]
  },
  "mushrooms": {
    "pos": "n.",
    "en_def": "a fungal growth that typically takes the form of a domed cap on a stalk",
    "cn_def": "蘑菇；蕈類（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a fungal growth that typically takes the form of a domed cap on a stalk",
        "cn_def": "蘑菇；蕈類（可數）"
      }
    ]
  },
  "mushroomed": {
    "pos": "v.",
    "en_def": "to increase, spread, or develop rapidly and suddenly",
    "cn_def": "迅速增加；如雨後春筍般迅速發展（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to increase, spread, or develop rapidly and suddenly",
        "cn_def": "迅速增加；如雨後春筍般迅速發展（動詞）"
      }
    ]
  },
  "mystery": {
    "pos": "n.",
    "en_def": "something that is difficult or impossible to understand or explain; a detective story",
    "cn_def": "神秘的事物；謎團；推理小說（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that is difficult or impossible to understand or explain; a detective story",
        "cn_def": "神秘的事物；謎團；推理小說（可數/不可數）"
      }
    ]
  },
  "mysterious": {
    "pos": "adj.",
    "en_def": "difficult or impossible to understand, explain, or identify; full of mystery",
    "cn_def": "神秘的；不可思議的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "difficult or impossible to understand, explain, or identify; full of mystery",
        "cn_def": "神秘的；不可思議的"
      }
    ]
  },
  "napkin": {
    "pos": "n.",
    "en_def": "a square piece of cloth or paper used at a meal to wipe the fingers or lips",
    "cn_def": "餐巾；紙巾（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a square piece of cloth or paper used at a meal to wipe the fingers or lips",
        "cn_def": "餐巾；紙巾（可數）"
      }
    ]
  },
  "oral": {
    "pos": "adj.",
    "en_def": "spoken rather than written; relating to the mouth",
    "cn_def": "口頭的；口述的；口腔的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "spoken rather than written; relating to the mouth",
        "cn_def": "口頭的；口述的；口腔的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
