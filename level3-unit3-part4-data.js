// Part 4 Quiz Data: practical – scare
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 3-4 - practical – scare",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "practical",
    "pos": "adj.",
    "cn_def": "實際的；實用的；切合實際的",
    "en_def": "of or concerned with the actual doing or use of something rather than theory",
    "sentence": "Moving to a smaller apartment near the subway station is a very {{BLANK}} way to save monthly living expenses.",
    "cn": "搬到靠近捷運站的小公寓，是節省每月生活開銷非常實際實用的方式。"
  },
  {
    "word": "impractical",
    "pos": "adj.",
    "cn_def": "不切實際的；不實用的",
    "en_def": "not adapted for use or action; not sensible or realistic",
    "sentence": "Wearing high-heeled luxury shoes on a rocky mountain hike is completely {{BLANK}} and potentially dangerous for your ankles.",
    "cn": "穿著高跟奢華名牌鞋在崎嶇山路上健行完全是不切實際的，而且對你的腳踝具有潛在危險。"
  },
  {
    "word": "practice",
    "pos": "n.",
    "cn_def": "實踐；練習；慣例（不可數/可數）",
    "en_def": "the actual application of an idea, belief, or method; regular training",
    "sentence": "The innovative environmental plan sounds wonderful on paper, but it is extremely difficult to put into daily {{BLANK}}.",
    "cn": "這項創新的環保計畫在紙面上聽起來很棒，但在日常生活中要付諸實行卻極為困難。"
  },
  {
    "word": "presence",
    "pos": "n.",
    "cn_def": "出席；在場；存在感；儀態風範（不可數）",
    "en_def": "the state or fact of existing, occurring, or being present in a place",
    "sentence": "Kevin returned to the team after missing three consecutive games, and his commanding {{BLANK}} was felt on the court right away.",
    "cn": "在缺席了三場連續比賽之後，凱文重返球隊，他在球場上威風凜凜的在場／存在感立刻顯露無遺。"
  },
  {
    "word": "present",
    "pos": "adj.",
    "cn_def": "在場的；出席的；目前的（形容詞）",
    "en_def": "in a particular place; existing or occurring now (/ˈprez.ənt/)",
    "sentence": "All parents were warmly invited to be {{BLANK}} at the annual elementary school graduation ceremony this morning.",
    "cn": "今天上午所有家長都受到熱情邀請出席／在場年度小學畢業典禮。"
  },
  {
    "word": "pub",
    "pos": "n.",
    "cn_def": "酒館；英式酒吧（可數）",
    "en_def": "an establishment licensed to serve alcoholic drinks traditionally in Britain and Ireland",
    "sentence": "After finishing a long week of demanding factory work, Aaron joined some close neighbors at the corner {{BLANK}} for a pint of beer.",
    "cn": "在辛苦結束了一整週繁重的工廠工作後，亞倫和幾位親近的鄰居在街角的英式酒館碰面喝了杯啤酒。"
  },
  {
    "word": "pump",
    "pos": "n.",
    "cn_def": "抽水機；幫浦；打氣筒（可數）",
    "en_def": "a mechanical device using suction or pressure to raise or move liquids or gases",
    "sentence": "The soccer ball was completely flat and would be much easier to fill up if we had a portable bicycle air {{BLANK}}.",
    "cn": "足球完全消氣了，如果我們有一個手提式自行車打氣筒，充氣就會容易得多。"
  },
  {
    "word": "pump",
    "pos": "v.",
    "cn_def": "抽取；打氣；大力灌注（動詞）",
    "en_def": "to force liquid or gas to move; to supply in large quantities",
    "sentence": "The powerful industrial machine will continuously {{BLANK}} in fresh mountain air and suck out the humid, stale air.",
    "cn": "強大的工業機器將持續抽入新鮮山區空氣，並抽離潮濕污濁的空氣。"
  },
  {
    "word": "rag",
    "pos": "n.",
    "cn_def": "破布；抹布；破舊衣服（可數）",
    "en_def": "a piece of old cloth, especially one used for cleaning or wiping",
    "sentence": "Jonathan picked up a damp cotton {{BLANK}} and thoroughly wiped off the sticky dust covering his bedroom closet shelves.",
    "cn": "強納森拿起一塊潮濕的棉質抹布，徹底擦掉覆蓋在他臥室衣櫥架上的黏稠灰塵。"
  },
  {
    "word": "reduce",
    "pos": "v.",
    "cn_def": "減少；降低；減縮（動詞）",
    "en_def": "to make smaller or less in amount, degree, or size",
    "sentence": "If your family can {{BLANK}} unnecessary entertainment spending now, you will save enough money for an overseas summer vacation.",
    "cn": "如果你的家庭現在能縮減不必要的娛樂開銷，你們就能存下足夠的錢去海外度暑假。"
  },
  {
    "word": "reduction",
    "pos": "n.",
    "cn_def": "減少；降低；折價（可數/不可數）",
    "en_def": "the action or fact of making something smaller or less in amount, degree, or size",
    "sentence": "The department store offered a thirty percent price {{BLANK}} on all winter coats during the annual clearance sale.",
    "cn": "百貨公司在年度出清特賣期間，對所有冬季大衣提供了三成的降價折扣。"
  },
  {
    "word": "satisfactory",
    "pos": "adj.",
    "cn_def": "令人滿意的；符合要求的",
    "en_def": "fulfilling expectations or needs; acceptable though not outstanding",
    "sentence": "The comprehensive clinical trial results of the new allergy medicine were considered highly {{BLANK}} by international medical regulators.",
    "cn": "新過敏藥物的全面臨床試驗結果被國際醫學監管機構認為是高度令人滿意的。"
  },
  {
    "word": "satisfy",
    "pos": "v.",
    "cn_def": "使滿意；滿足（動詞）",
    "en_def": "to meet the expectations, needs, or desires of someone",
    "sentence": "Eating a warm bowl of beef noodle soup was more than enough to {{BLANK}} his hunger after the long journey.",
    "cn": "在漫長旅途之後，吃上一碗熱騰騰的牛肉麵足以滿足／充飢他的飢餓感。"
  },
  {
    "word": "satisfaction",
    "pos": "n.",
    "cn_def": "滿意；滿足感（不可數）",
    "en_def": "fulfillment of one's wishes, expectations, or needs, or the pleasure derived from this",
    "sentence": "The talented young carpenter smiled with a deep sense of {{BLANK}} after finishing the handcrafted dining room table.",
    "cn": "那位才華洋溢的年輕木匠在完成手工餐桌後，帶著深深的成就滿足感露出了微笑。"
  },
  {
    "word": "scary",
    "pos": "adj.",
    "cn_def": "可怕的；嚇人的；駭人的",
    "en_def": "frightening; causing fear",
    "sentence": "The {{BLANK}} horror movie made little Nathan hide under his thick wool blanket and shake with fright.",
    "cn": "那部可怕駭人的恐怖電影讓年幼的奈森躲在厚羊毛毯底下嚇得發抖。"
  },
  {
    "word": "scare",
    "pos": "v.",
    "cn_def": "驚嚇；使害怕；受驚（動詞）",
    "en_def": "to cause great fear or nervousness in someone; to frighten",
    "sentence": "The farmer placed a large straw scarecrow in the cornfield to {{BLANK}} away noisy crows from pecking his crops.",
    "cn": "農夫在玉米田裡放置了一個大型稻草人，以嚇跑啄食他農作物的喧鬧烏鴉。"
  }
];

const MCQS = [
  {
    "q": "The funny clown used an air ______ to blow up balloons for all the excited children.",
    "options": [
      "pub",
      "rag",
      "presence",
      "pump"
    ],
    "answer": 3,
    "cn": "滑稽的小丑用空氣打氣筒／幫浦為所有興奮的孩子們吹氣球。",
    "vocabIndex": 6
  },
  {
    "q": "Mom picked up a clean wet ______ and wiped the spilled juice off the kitchen table.",
    "options": [
      "rag",
      "pub",
      "pump",
      "presence"
    ],
    "answer": 0,
    "cn": "媽媽拿了一塊乾淨的濕抹布，把廚房餐桌上溢出的果汁擦乾淨。",
    "vocabIndex": 8
  },
  {
    "q": "After work on Friday, Dad and his friends met at the local ______ to talk and have a drink.",
    "options": [
      "rag",
      "pump",
      "pub",
      "presence"
    ],
    "answer": 2,
    "cn": "週五下班後，爸爸和他的朋友們在當地的英式酒館碰面聊天並喝了杯飲料。",
    "vocabIndex": 5
  },
  {
    "q": "The students behaved very quietly and politely in the ______ of their strict school principal.",
    "options": [
      "rag",
      "presence",
      "pump",
      "pub"
    ],
    "answer": 1,
    "cn": "在嚴格的校長在場／面前，學生們表現得非常安靜且有禮貌。",
    "vocabIndex": 3
  },
  {
    "q": "The teacher felt great ______ when all of her students passed the difficult English test.",
    "options": [
      "rag",
      "pump",
      "pub",
      "satisfaction"
    ],
    "answer": 3,
    "cn": "當所有學生都通過困難的英文考試時，老師感受到了極大的滿意／滿足感。",
    "vocabIndex": 13
  },
  {
    "q": "Putting new vocabulary into daily ______ by speaking with friends helps you remember words.",
    "options": [
      "practice",
      "rag",
      "pump",
      "pub"
    ],
    "answer": 0,
    "cn": "透過與朋友交談將新單字付諸日常實踐練習，有助於你記住單字。",
    "vocabIndex": 2
  },
  {
    "q": "The clothing store announced a big price ______ on all warm jackets for winter.",
    "options": [
      "rag",
      "reduction",
      "pub",
      "presence"
    ],
    "answer": 1,
    "cn": "服飾店宣布對所有冬季保暖外套進行大幅降價／折扣。",
    "vocabIndex": 10
  },
  {
    "q": "Turning off the lights when leaving a room will help ______ our electricity bill.",
    "options": [
      "scare",
      "pump",
      "reduce",
      "satisfy"
    ],
    "answer": 2,
    "cn": "離開房間時隨手關燈將有助於減少／降低我們的電費帳單。",
    "vocabIndex": 9
  },
  {
    "q": "The loud bark of the big black dog will ______ away any strangers near the gate.",
    "options": [
      "reduce",
      "scare",
      "pump",
      "satisfy"
    ],
    "answer": 1,
    "cn": "大黑狗響亮的吠叫聲將會嚇跑大門附近的任何陌生人。",
    "vocabIndex": 15
  },
  {
    "q": "A warm bowl of chicken soup on a cold day will completely ______ your hunger.",
    "options": [
      "scare",
      "pump",
      "reduce",
      "satisfy"
    ],
    "answer": 3,
    "cn": "在寒冷的日子裡喝上一碗熱騰騰的雞湯，將完全滿足／充飢你的飢餓感。",
    "vocabIndex": 12
  },
  {
    "q": "During the flood, large machines had to ______ muddy water out of the basements.",
    "options": [
      "pump",
      "scare",
      "satisfy",
      "reduce"
    ],
    "answer": 0,
    "cn": "在水災期間，大型機器必須把泥水從地下室抽取出來。",
    "vocabIndex": 6
  },
  {
    "q": "Walking to school instead of taking the bus is a very ______ way to stay healthy and save money.",
    "options": [
      "scary",
      "bloody",
      "practical",
      "cruel"
    ],
    "answer": 2,
    "cn": "步行上學而不是搭公車，是維持健康且省錢非常實用實際的方法。",
    "vocabIndex": 0
  },
  {
    "q": "The dark ghost story was so ______ that my little sister kept the light on all night.",
    "options": [
      "practical",
      "scary",
      "chipped",
      "aged"
    ],
    "answer": 1,
    "cn": "那則黑暗的鬼故事太可怕嚇人了，以至於我妹妹整夜都開著燈。",
    "vocabIndex": 14
  },
  {
    "q": "His test performance was quite ______ and met all the requirements for graduation.",
    "options": [
      "satisfactory",
      "bloody",
      "cruel",
      "scary"
    ],
    "answer": 0,
    "cn": "他的考試表現相當令人滿意，符合了所有的畢業要求條件。",
    "vocabIndex": 11
  },
  {
    "q": "Wearing high heels to run on the beach sand is completely ______ and uncomfortable.",
    "options": [
      "ancient",
      "satisfactory",
      "impractical",
      "bloody"
    ],
    "answer": 2,
    "cn": "穿著高跟鞋在海灘沙地上跑步完全是不切實際且不舒服的。",
    "vocabIndex": 1
  },
  {
    "q": "All students were ______ in the school auditorium to listen to the guest speaker.",
    "options": [
      "cruel",
      "scary",
      "chipped",
      "present"
    ],
    "answer": 3,
    "cn": "所有學生都在學校大禮堂在場出席，聆聽特邀主講人的演說。",
    "vocabIndex": 4
  },
  {
    "q": "Buying a warm coat before winter comes is very ______ advice from mother.",
    "options": [
      "practical",
      "cruel",
      "scary",
      "bloody"
    ],
    "answer": 0,
    "cn": "在冬天到來之前買一件保暖外套，是來自母親非常實用的建議。",
    "vocabIndex": 0
  },
  {
    "q": "The noisy monster in the movie looked very ______ with its huge sharp teeth.",
    "options": [
      "practical",
      "aged",
      "scary",
      "crispy"
    ],
    "answer": 2,
    "cn": "電影裡那隻喧囂的怪獸帶著巨大的鋒利牙齒，看起來非常可怕嚇人。",
    "vocabIndex": 14
  },
  {
    "q": "Jack likes to ______ his friends on April Fool's Day by hiding their pencil cases.",
    "options": [
      "bleed them dry",
      "hit a brick wall",
      "kick the bucket",
      "play a practical joke on"
    ],
    "answer": 3,
    "cn": "傑克喜歡在愚人節藏起朋友們的鉛筆盒來對他們開惡作劇玩笑。",
    "vocabIndex": 0
  },
  {
    "q": "The famous business owner started with nothing and grew ______ to become a billionaire.",
    "options": [
      "a drop in the bucket",
      "from rags to riches",
      "double chin",
      "bucket list"
    ],
    "answer": 1,
    "cn": "那位著名的企業主白手起家，從貧民變身富豪（由破布到富有）成為了億萬富翁。",
    "vocabIndex": 8
  },
  {
    "q": "When you ride your bicycle, you need a small ______ to fill your tires with air.",
    "options": [
      "paper clip",
      "drop in the bucket",
      "brick wall",
      "bicycle pump"
    ],
    "answer": 3,
    "cn": "當你騎自行車時，你需要一個小型自行車打氣筒來為輪胎充氣。",
    "vocabIndex": 6
  },
  {
    "q": "The government is ______ into building clean solar energy power stations.",
    "options": [
      "hitting a brick wall",
      "playing a practical joke",
      "pumping money",
      "kicking the bucket"
    ],
    "answer": 2,
    "cn": "政府正大力注入資金建造乾淨的太陽能發電站。",
    "vocabIndex": 6
  },
  {
    "q": "The funny clown on the street told silly stories to ______ all the small children.",
    "options": [
      "satisfy the curiosity of",
      "hit a brick wall",
      "put the cart before the horse",
      "bleed them dry"
    ],
    "answer": 0,
    "cn": "街頭滑稽的小丑說著愚蠢好笑的故事，來滿足所有年幼孩子們的好奇心。",
    "vocabIndex": 12
  },
  {
    "q": "The loud clap of thunder during the night ______ the little sleeping puppy.",
    "options": [
      "played a practical joke on",
      "scared to death",
      "took a deep breath",
      "kicked the bucket"
    ],
    "answer": 1,
    "cn": "夜間一聲響亮的雷鳴巨響把那隻正在睡覺的小幼犬嚇了個半死。",
    "vocabIndex": 14
  },
  {
    "q": "Our local shop always puts ______ first by replacing broken goods for free.",
    "options": [
      "bucket list",
      "paper clip",
      "customer satisfaction",
      "double chin"
    ],
    "answer": 2,
    "cn": "我們當地的商店透過免費更換損壞商品，始終把顧客滿意度放在第一位。",
    "vocabIndex": 13
  }
];

const LOOKUP = {
  "practical": {
    "pos": "adj.",
    "en_def": "of or concerned with the actual doing or use of something rather than theory",
    "cn_def": "實際的；實用的；切合實際的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "of or concerned with the actual doing or use of something rather than theory",
        "cn_def": "實際的；實用的；切合實際的"
      }
    ]
  },
  "impractical": {
    "pos": "adj.",
    "en_def": "not adapted for use or action; not sensible or realistic",
    "cn_def": "不切實際的；不實用的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not adapted for use or action; not sensible or realistic",
        "cn_def": "不切實際的；不實用的"
      }
    ]
  },
  "practice": {
    "pos": "n.",
    "en_def": "the actual application of an idea, belief, or method; regular training",
    "cn_def": "實踐；練習；慣例（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the actual application of an idea, belief, or method; regular training",
        "cn_def": "實踐；練習；慣例（不可數/可數）"
      }
    ]
  },
  "presence": {
    "pos": "n.",
    "en_def": "the state or fact of existing, occurring, or being present in a place",
    "cn_def": "出席；在場；存在感；儀態風範（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state or fact of existing, occurring, or being present in a place",
        "cn_def": "出席；在場；存在感；儀態風範（不可數）"
      }
    ]
  },
  "present": {
    "pos": "adj.",
    "en_def": "in a particular place; existing or occurring now (/ˈprez.ənt/)",
    "cn_def": "在場的；出席的；目前的（形容詞）",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "in a particular place; existing or occurring now (/ˈprez.ənt/)",
        "cn_def": "在場的；出席的；目前的（形容詞）"
      }
    ]
  },
  "pub": {
    "pos": "n.",
    "en_def": "an establishment licensed to serve alcoholic drinks traditionally in Britain and Ireland",
    "cn_def": "酒館；英式酒吧（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an establishment licensed to serve alcoholic drinks traditionally in Britain and Ireland",
        "cn_def": "酒館；英式酒吧（可數）"
      }
    ]
  },
  "pump": {
    "pos": "n.",
    "en_def": "a mechanical device using suction or pressure to raise or move liquids or gases",
    "cn_def": "抽水機；幫浦；打氣筒（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a mechanical device using suction or pressure to raise or move liquids or gases",
        "cn_def": "抽水機；幫浦；打氣筒（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to force liquid or gas to move; to supply in large quantities",
        "cn_def": "抽取；打氣；大力灌注（動詞）"
      }
    ]
  },
  "rag": {
    "pos": "n.",
    "en_def": "a piece of old cloth, especially one used for cleaning or wiping",
    "cn_def": "破布；抹布；破舊衣服（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of old cloth, especially one used for cleaning or wiping",
        "cn_def": "破布；抹布；破舊衣服（可數）"
      }
    ]
  },
  "reduce": {
    "pos": "v.",
    "en_def": "to make smaller or less in amount, degree, or size",
    "cn_def": "減少；降低；減縮（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make smaller or less in amount, degree, or size",
        "cn_def": "減少；降低；減縮（動詞）"
      }
    ]
  },
  "reduction": {
    "pos": "n.",
    "en_def": "the action or fact of making something smaller or less in amount, degree, or size",
    "cn_def": "減少；降低；折價（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action or fact of making something smaller or less in amount, degree, or size",
        "cn_def": "減少；降低；折價（可數/不可數）"
      }
    ]
  },
  "satisfactory": {
    "pos": "adj.",
    "en_def": "fulfilling expectations or needs; acceptable though not outstanding",
    "cn_def": "令人滿意的；符合要求的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "fulfilling expectations or needs; acceptable though not outstanding",
        "cn_def": "令人滿意的；符合要求的"
      }
    ]
  },
  "satisfy": {
    "pos": "v.",
    "en_def": "to meet the expectations, needs, or desires of someone",
    "cn_def": "使滿意；滿足（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to meet the expectations, needs, or desires of someone",
        "cn_def": "使滿意；滿足（動詞）"
      }
    ]
  },
  "satisfaction": {
    "pos": "n.",
    "en_def": "fulfillment of one's wishes, expectations, or needs, or the pleasure derived from this",
    "cn_def": "滿意；滿足感（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "fulfillment of one's wishes, expectations, or needs, or the pleasure derived from this",
        "cn_def": "滿意；滿足感（不可數）"
      }
    ]
  },
  "scary": {
    "pos": "adj.",
    "en_def": "frightening; causing fear",
    "cn_def": "可怕的；嚇人的；駭人的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "frightening; causing fear",
        "cn_def": "可怕的；嚇人的；駭人的"
      }
    ]
  },
  "scare": {
    "pos": "v.",
    "en_def": "to cause great fear or nervousness in someone; to frighten",
    "cn_def": "驚嚇；使害怕；受驚（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause great fear or nervousness in someone; to frighten",
        "cn_def": "驚嚇；使害怕；受驚（動詞）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
