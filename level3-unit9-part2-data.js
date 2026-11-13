// Part 2 Quiz Data: dive – entertainer
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 9-2 - dive – entertainer",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "dive",
    "pos": "v.",
    "cn_def": "跳水；潛水；暴跌（動詞）",
    "en_def": "to plunge head first into water; to steep drop rapidly",
    "sentence": "The graceful young athlete leaped off the high board to {{BLANK}} into the cool swimming pool.",
    "cn": "那位優雅的年輕運動員從高跳板躍下，跳入清涼的泳池中。"
  },
  {
    "word": "dive",
    "pos": "n.",
    "cn_def": "跳水；俯衝；廉價小酒吧（可數）",
    "en_def": "a plunge into water; a steep descent; a cheap, disreputable nightclub or bar",
    "sentence": "The Olympic swimmer executed a nearly perfect {{BLANK}} that earned loud cheers from the spectators.",
    "cn": "那位奧運游泳選手完成了一次近乎完美的跳水，贏得了觀眾的熱烈歡呼。"
  },
  {
    "word": "diver",
    "pos": "n.",
    "cn_def": "潛水員；跳水運動員（可數）",
    "en_def": "a person who dives underwater, especially with scuba gear",
    "sentence": "Equipped with oxygen tanks and heavy wet suits, the brave {{BLANK}} explored the mysterious sunken shipwreck.",
    "cn": "配戴氧氣筒和厚重防寒衣的勇敢潛水員探索了神祕的沉船殘骸。"
  },
  {
    "word": "domestic",
    "pos": "adj.",
    "cn_def": "家庭的；國內的；馴養的",
    "en_def": "relating to the running of a home or family relations; existing within a country",
    "sentence": "Passengers flying on a {{BLANK}} flight do not need to show an international passport at airport security.",
    "cn": "搭乘國內航班的乘客在機場安檢處不需要出示國際護照。"
  },
  {
    "word": "domesticate",
    "pos": "v.",
    "cn_def": "馴養；馴化；栽培（動詞）",
    "en_def": "to tame an animal and keep it as a pet or on a farm",
    "sentence": "Thousands of years ago, ancient human hunters learned how to {{BLANK}} wild wolves into loyal guard dogs.",
    "cn": "數千年前，古代人類獵人學會了如何將野狼馴養成忠誠的看門狗。"
  },
  {
    "word": "dull",
    "pos": "adj.",
    "cn_def": "枯燥乏味的；陰沉的；遲鈍的；鈍的",
    "en_def": "lacking interest or excitement; lacking brightness; not sharp",
    "sentence": "The long historical movie was so {{BLANK}} that several bored audience members fell asleep in the cinema.",
    "cn": "這部冗長的歷史電影是如此枯燥乏味，以至於電影院裡好幾個無聊的觀眾都睡著了。"
  },
  {
    "word": "dull",
    "pos": "v.",
    "cn_def": "使變鈍；使遲鈍；緩和（動詞）",
    "en_def": "to make or become less sharp, bright, or intense",
    "sentence": "Constant loud industrial factory noise can gradually {{BLANK}} workers' hearing if they do not wear protective earplugs.",
    "cn": "如果工人不戴防護耳塞，持續刺耳的工廠噪音會逐漸使…遲鈍／損害工人的聽力。"
  },
  {
    "word": "all work and no play makes Jack a dull boy",
    "pos": "idiom",
    "cn_def": "只工作不玩樂，聰明孩子也變傻（勞逸結合）",
    "en_def": "without time off from work, a person becomes bored and uninteresting",
    "sentence": "My father warned me not to spend every weekend studying without exercising because {{BLANK}}.",
    "cn": "我父親警告我不要每個週末都不運動光讀書，因為只工作不玩樂，聰明孩子也變傻。"
  },
  {
    "word": "electronic",
    "pos": "adj.",
    "cn_def": "電子的；使用電子設備的",
    "en_def": "having or operating with components such as microchips and transistors",
    "sentence": "Passengers are politely reminded to power down all portable {{BLANK}} devices before the airplane begins taking off.",
    "cn": "在飛機開始起飛前，有禮貌地提醒乘客關閉所有便攜式電子設備。"
  },
  {
    "word": "electronics",
    "pos": "n.",
    "cn_def": "電子學；電子產品／電子設備（恆用複數）",
    "en_def": "the branch of physics and technology concerned with the design of circuits; devices",
    "sentence": "The university student decided to major in computer science and {{BLANK}} to design next-generation robotic systems.",
    "cn": "那名大學生決定主修電腦科學與電子學，以設計下一代機器人系統。"
  },
  {
    "word": "electricity",
    "pos": "n.",
    "cn_def": "電力；電（不可數）",
    "en_def": "a form of energy resulting from the existence of charged particles",
    "sentence": "Giant coastal wind turbines and rooftop solar panels produce clean green {{BLANK}} without emitting harmful greenhouse gases.",
    "cn": "巨大的沿海風力發電機和屋頂太陽能板可以產生乾淨的綠色電力，而不會排放有害的溫室氣體。"
  },
  {
    "word": "electric",
    "pos": "adj.",
    "cn_def": "用電的；電動的；令人極度興奮的",
    "en_def": "operating by or producing electricity; thrillingly exciting",
    "sentence": "Many environmentally conscious city drivers are switching to zero-emission {{BLANK}} cars to reduce air pollution and fuel costs.",
    "cn": "許多具備環保意識的城市駕駛人正轉向使用零排放的電動汽車，以減少空氣污染和燃料成本。"
  },
  {
    "word": "electrical",
    "pos": "adj.",
    "cn_def": "電氣的；與電相關的；電學的",
    "en_def": "concerned with, operating by, or producing electricity",
    "sentence": "After graduating from high school with top grades in mathematics, Mark chose to study {{BLANK}} engineering at national university.",
    "cn": "以優異的數學成績高中畢業後，馬克選擇在國立大學攻讀電機工程。"
  },
  {
    "word": "electrician",
    "pos": "n.",
    "cn_def": "電工；水電電氣技師（可數）",
    "en_def": "a person who installs and repairs electrical equipment",
    "sentence": "When the ceiling lights in our apartment suddenly flickered and went dark, my father called a certified {{BLANK}} to check the circuit breaker.",
    "cn": "當我們公寓的天花板燈突然閃爍並變暗時，我父親打電話給一位合格的電工來檢查斷路器。"
  },
  {
    "word": "entertainment",
    "pos": "n.",
    "cn_def": "娛樂；表演娛樂活動（不可數/可數）",
    "en_def": "the action of providing amusement or enjoyment",
    "sentence": "Streaming movies and listening to music online have become the most popular forms of daily {{BLANK}} for teenagers.",
    "cn": "在線上觀看串流電影和聽音樂已成為青少年日常最受歡迎的娛樂形式。"
  },
  {
    "word": "entertain",
    "pos": "v.",
    "cn_def": "娛樂；款待；招待（動詞）",
    "en_def": "to provide someone with amusement or enjoyment; to host guests",
    "sentence": "The cheerful magician performed clever card tricks and made balloon animals to {{BLANK}} the excited children at the birthday party.",
    "cn": "那位開朗的魔術師表演聰明的紙牌魔術並製作氣球動物，在生日派對上娛樂逗樂興奮的孩子們。"
  },
  {
    "word": "entertaining",
    "pos": "adj.",
    "cn_def": "有趣的；令人愉快的；具娛樂性的",
    "en_def": "providing amusement or enjoyment",
    "sentence": "The humorous English teacher shared many {{BLANK}} stories from his college travels that kept the whole class laughing.",
    "cn": "那位幽默的英文老師分享了他大學旅行時的許多有趣的故事，讓全班哈哈大笑。"
  },
  {
    "word": "entertainer",
    "pos": "n.",
    "cn_def": "藝人；表演者（可數）",
    "en_def": "a person, such as a singer, dancer, or comedian, whose job is to entertain others",
    "sentence": "Crowds of curious tourists gathered around the talented street {{BLANK}} who was juggling burning torches in the city square.",
    "cn": "成群好奇的遊客聚集在那位在城市廣場上雜耍火把的才華洋溢的街頭藝人周圍。"
  }
];

const MCQS = [
  {
    "q": "The brave swimmer made a beautiful ______ into the cool deep water from the high board.",
    "options": [
      "dive",
      "diver",
      "domestic",
      "electrician"
    ],
    "answer": 0,
    "cn": "那位勇敢的游泳選手從高跳板做了一次美麗的跳水落入清涼的深水中。",
    "vocabIndex": 0
  },
  {
    "q": "A skilled deep-sea ______ wore a special mask to explore the ocean floor.",
    "options": [
      "entertainment",
      "electricity",
      "diver",
      "alley"
    ],
    "answer": 2,
    "cn": "一位熟練的深海潛水員戴著特殊面罩探索海底。",
    "vocabIndex": 2
  },
  {
    "q": "My father called a licensed ______ to repair the broken wall switches in our kitchen.",
    "options": [
      "diver",
      "entertainment",
      "electricity",
      "electrician"
    ],
    "answer": 3,
    "cn": "我父親打電話叫了一位有執照的電工來修理我們廚房壞掉的壁式開關。",
    "vocabIndex": 13
  },
  {
    "q": "Watching funny movies online is my favorite form of evening ______ after homework.",
    "options": [
      "diver",
      "entertainment",
      "buffalo",
      "electrician"
    ],
    "answer": 1,
    "cn": "在寫完作業後，在線上看有趣的電影是我最喜歡的晚間娛樂形式。",
    "vocabIndex": 14
  },
  {
    "q": "The street ______ made funny balloon animals that brought big smiles to children.",
    "options": [
      "entertainer",
      "dive",
      "electricity",
      "bullet"
    ],
    "answer": 0,
    "cn": "那位街頭藝人／表演者折出了有趣的氣球動物，讓孩子們綻放燦爛笑容。",
    "vocabIndex": 17
  },
  {
    "q": "Without ______, the refrigerator, television, and electric stove cannot work.",
    "options": [
      "diver",
      "electricity",
      "entertainer",
      "comma"
    ],
    "answer": 1,
    "cn": "如果沒有電／電力，冰箱、電視和電爐都無法運作。",
    "vocabIndex": 10
  },
  {
    "q": "Japan and Taiwan are world-famous for making high-tech consumer ______ like chips and laptops.",
    "options": [
      "buffalos",
      "divers",
      "electricians",
      "electronics"
    ],
    "answer": 3,
    "cn": "日本和台灣以製造晶片和筆記型電腦等高科技消費性電子產品享譽全球。",
    "vocabIndex": 9
  },
  {
    "q": "The funny clown and the singing bird gave a wonderful ______ show in the park.",
    "options": [
      "electricity",
      "diver",
      "entertainment",
      "alley"
    ],
    "answer": 2,
    "cn": "滑稽的小丑和會唱歌的鳥在公園裡帶來了一場精彩的娛樂表演。",
    "vocabIndex": 14
  },
  {
    "q": "The young ______ took off his heavy wet suit after swimming with sea turtles.",
    "options": [
      "electricity",
      "bullet",
      "cocktail",
      "diver"
    ],
    "answer": 3,
    "cn": "那位年輕潛水員在與海龜一起游泳後脫下了他沉重的防寒衣。",
    "vocabIndex": 2
  },
  {
    "q": "You should turn off the room heater to save ______ and keep your bills low.",
    "options": [
      "electricity",
      "diver",
      "bullet",
      "electrician"
    ],
    "answer": 0,
    "cn": "你應該關閉室內暖氣機以節省電力並降低帳單費用。",
    "vocabIndex": 10
  },
  {
    "q": "The children love to ______ into the cool pool on hot summer afternoons.",
    "options": [
      "entertain",
      "dull",
      "dive",
      "domesticate"
    ],
    "answer": 2,
    "cn": "在炎熱的夏日下午，孩子們喜歡跳入涼爽的泳池中。",
    "vocabIndex": 0
  },
  {
    "q": "Ancient farmers learned how to ______ wild sheep and cattle for milk and meat.",
    "options": [
      "dive",
      "domesticate",
      "dull",
      "entertain"
    ],
    "answer": 1,
    "cn": "古代農民學會了如何馴養野羊和野牛以獲取奶和肉。",
    "vocabIndex": 4
  },
  {
    "q": "The doctor gave Jason mild medicine to ______ the toothache before bedtime.",
    "options": [
      "dive",
      "entertain",
      "domesticate",
      "dull"
    ],
    "answer": 3,
    "cn": "醫生在睡前給了傑森輕微的藥物以減緩／鈍化牙痛。",
    "vocabIndex": 5
  },
  {
    "q": "Our friendly grandparents like to ______ guests with fresh barbecue in their garden.",
    "options": [
      "dive",
      "domesticate",
      "entertain",
      "dull"
    ],
    "answer": 2,
    "cn": "我們親切的祖父母喜歡在花園裡用新鮮烤肉款待／招待客人。",
    "vocabIndex": 15
  },
  {
    "q": "The magician will ______ the students with colorful cards and flying doves.",
    "options": [
      "entertain",
      "dive",
      "domesticate",
      "dull"
    ],
    "answer": 0,
    "cn": "魔術師將用彩色紙牌和飛鴿來娛樂逗樂學生們。",
    "vocabIndex": 15
  },
  {
    "q": "Because we were only taking a ______ flight from Taipei to Taitung, we did not need passports.",
    "options": [
      "dull",
      "domestic",
      "electronic",
      "electrical"
    ],
    "answer": 1,
    "cn": "因為我們只是搭乘從台北到台東的國內航班，所以我們不需要護照。",
    "vocabIndex": 3
  },
  {
    "q": "The lecture was very long and ______, so several students started looking at their watches.",
    "options": [
      "electric",
      "electronic",
      "entertaining",
      "dull"
    ],
    "answer": 3,
    "cn": "演講非常漫長且枯燥乏味，因此好幾個學生開始看手錶。",
    "vocabIndex": 5
  },
  {
    "q": "Please remember to turn off all ______ devices like tablets and phones before the test.",
    "options": [
      "electronic",
      "domestic",
      "entertaining",
      "dull"
    ],
    "answer": 0,
    "cn": "考試前請記得關閉所有電子設備，例如平板電腦和手機。",
    "vocabIndex": 8
  },
  {
    "q": "My father drives an ______ car that uses batteries instead of petrol.",
    "options": [
      "domestic",
      "dull",
      "electric",
      "electrical"
    ],
    "answer": 2,
    "cn": "我父親開一輛使用電池而非汽油的電動汽車。",
    "vocabIndex": 11
  },
  {
    "q": "The fire was caused by an ______ problem in the old house wires.",
    "options": [
      "entertaining",
      "electrical",
      "electric",
      "dull"
    ],
    "answer": 1,
    "cn": "這場火災是由老房子電線中的電氣問題引起的。",
    "vocabIndex": 12
  },
  {
    "q": "The teacher read a very funny and ______ story that made all the children giggle.",
    "options": [
      "dull",
      "domestic",
      "entertaining",
      "electrical"
    ],
    "answer": 2,
    "cn": "老師讀了一篇非常有趣且具娛樂性的故事，讓所有孩子都咯咯笑。",
    "vocabIndex": 16
  },
  {
    "q": "You need to sharpen that ______ knife before slicing the juicy tomatoes.",
    "options": [
      "electrical",
      "electronic",
      "entertaining",
      "dull"
    ],
    "answer": 3,
    "cn": "在切多汁的番茄之前，你需要磨利那把鈍刀。",
    "vocabIndex": 5
  },
  {
    "q": "Dogs, cats, and cows are common ______ animals that live closely with humans.",
    "options": [
      "domestic",
      "electrical",
      "electronic",
      "dull"
    ],
    "answer": 0,
    "cn": "狗、貓和牛是與人類生活密切的常見馴養家禽／家畜動物。",
    "vocabIndex": 3
  },
  {
    "q": "Rock music at the live stadium concert created an ______ feeling in the noisy crowd.",
    "options": [
      "electrical",
      "electric",
      "domestic",
      "dull"
    ],
    "answer": 1,
    "cn": "現場體育場音樂會上的搖滾樂在吵鬧的人群中營造了一種令人極度興奮的／沸騰的感覺。",
    "vocabIndex": 11
  },
  {
    "q": "Do not study all weekend without playing, because ______.",
    "options": [
      "make a clean breast",
      "right up your alley",
      "bite the bullet",
      "all work and no play makes Jack a dull boy"
    ],
    "answer": 3,
    "cn": "不要整個週末都在讀書而不玩耍，因為只工作不玩樂，聰明孩子也變傻。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "dive": {
    "pos": "v.",
    "en_def": "to plunge head first into water; to steep drop rapidly",
    "cn_def": "跳水；潛水；暴跌（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to plunge head first into water; to steep drop rapidly",
        "cn_def": "跳水；潛水；暴跌（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a plunge into water; a steep descent; a cheap, disreputable nightclub or bar",
        "cn_def": "跳水；俯衝；廉價小酒吧（可數）"
      }
    ]
  },
  "diver": {
    "pos": "n.",
    "en_def": "a person who dives underwater, especially with scuba gear",
    "cn_def": "潛水員；跳水運動員（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who dives underwater, especially with scuba gear",
        "cn_def": "潛水員；跳水運動員（可數）"
      }
    ]
  },
  "domestic": {
    "pos": "adj.",
    "en_def": "relating to the running of a home or family relations; existing within a country",
    "cn_def": "家庭的；國內的；馴養的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to the running of a home or family relations; existing within a country",
        "cn_def": "家庭的；國內的；馴養的"
      }
    ]
  },
  "domesticate": {
    "pos": "v.",
    "en_def": "to tame an animal and keep it as a pet or on a farm",
    "cn_def": "馴養；馴化；栽培（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to tame an animal and keep it as a pet or on a farm",
        "cn_def": "馴養；馴化；栽培（動詞）"
      }
    ]
  },
  "dull": {
    "pos": "adj.",
    "en_def": "lacking interest or excitement; lacking brightness; not sharp",
    "cn_def": "枯燥乏味的；陰沉的；遲鈍的；鈍的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "lacking interest or excitement; lacking brightness; not sharp",
        "cn_def": "枯燥乏味的；陰沉的；遲鈍的；鈍的"
      },
      {
        "pos": "v.",
        "en_def": "to make or become less sharp, bright, or intense",
        "cn_def": "使變鈍；使遲鈍；緩和（動詞）"
      }
    ]
  },
  "all work and no play makes jack a dull boy": {
    "pos": "idiom",
    "en_def": "without time off from work, a person becomes bored and uninteresting",
    "cn_def": "只工作不玩樂，聰明孩子也變傻（勞逸結合）",
    "combined": [
      {
        "pos": "idiom",
        "en_def": "without time off from work, a person becomes bored and uninteresting",
        "cn_def": "只工作不玩樂，聰明孩子也變傻（勞逸結合）"
      }
    ]
  },
  "electronic": {
    "pos": "adj.",
    "en_def": "having or operating with components such as microchips and transistors",
    "cn_def": "電子的；使用電子設備的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having or operating with components such as microchips and transistors",
        "cn_def": "電子的；使用電子設備的"
      }
    ]
  },
  "electronics": {
    "pos": "n.",
    "en_def": "the branch of physics and technology concerned with the design of circuits; devices",
    "cn_def": "電子學；電子產品／電子設備（恆用複數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the branch of physics and technology concerned with the design of circuits; devices",
        "cn_def": "電子學；電子產品／電子設備（恆用複數）"
      }
    ]
  },
  "electricity": {
    "pos": "n.",
    "en_def": "a form of energy resulting from the existence of charged particles",
    "cn_def": "電力；電（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a form of energy resulting from the existence of charged particles",
        "cn_def": "電力；電（不可數）"
      }
    ]
  },
  "electric": {
    "pos": "adj.",
    "en_def": "operating by or producing electricity; thrillingly exciting",
    "cn_def": "用電的；電動的；令人極度興奮的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "operating by or producing electricity; thrillingly exciting",
        "cn_def": "用電的；電動的；令人極度興奮的"
      }
    ]
  },
  "electrical": {
    "pos": "adj.",
    "en_def": "concerned with, operating by, or producing electricity",
    "cn_def": "電氣的；與電相關的；電學的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "concerned with, operating by, or producing electricity",
        "cn_def": "電氣的；與電相關的；電學的"
      }
    ]
  },
  "electrician": {
    "pos": "n.",
    "en_def": "a person who installs and repairs electrical equipment",
    "cn_def": "電工；水電電氣技師（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who installs and repairs electrical equipment",
        "cn_def": "電工；水電電氣技師（可數）"
      }
    ]
  },
  "entertainment": {
    "pos": "n.",
    "en_def": "the action of providing amusement or enjoyment",
    "cn_def": "娛樂；表演娛樂活動（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of providing amusement or enjoyment",
        "cn_def": "娛樂；表演娛樂活動（不可數/可數）"
      }
    ]
  },
  "entertain": {
    "pos": "v.",
    "en_def": "to provide someone with amusement or enjoyment; to host guests",
    "cn_def": "娛樂；款待；招待（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to provide someone with amusement or enjoyment; to host guests",
        "cn_def": "娛樂；款待；招待（動詞）"
      }
    ]
  },
  "entertaining": {
    "pos": "adj.",
    "en_def": "providing amusement or enjoyment",
    "cn_def": "有趣的；令人愉快的；具娛樂性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "providing amusement or enjoyment",
        "cn_def": "有趣的；令人愉快的；具娛樂性的"
      }
    ]
  },
  "entertainer": {
    "pos": "n.",
    "en_def": "a person, such as a singer, dancer, or comedian, whose job is to entertain others",
    "cn_def": "藝人；表演者（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person, such as a singer, dancer, or comedian, whose job is to entertain others",
        "cn_def": "藝人；表演者（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
