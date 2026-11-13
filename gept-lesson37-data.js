// Lesson 37 Quiz Data: Mammals, Birds of Prey & Avian Anatomy
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 37 - Mammals, Birds of Prey & Avian Anatomy",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "lamb",
    "pos": "n.",
    "cn_def": "小羊；羊肉",
    "en_def": "a young sheep; meat from a young sheep",
    "sentence": "The gentle white {{BLANK}} followed its mother across the green hillside, skipping playfully over small rocks.",
    "cn": "溫順的白色小羊跟著母親穿過綠色的山坡，歡快地在小石頭上方跳躍。"
  },
  {
    "word": "deer",
    "pos": "n.",
    "cn_def": "鹿（單複數同形）",
    "en_def": "a graceful hoofed mammal with antlers on males",
    "sentence": "A quiet wild {{BLANK}} stepped cautiously out from the dense pine trees to drink fresh spring water from the stream.",
    "cn": "一隻安靜的野生鹿謹慎地從茂密的松樹林中踏出步履，從溪流中飲用清澈的泉水。"
  },
  {
    "word": "ox",
    "pos": "n.",
    "cn_def": "公牛；閹牛（複數為 oxen）",
    "en_def": "a large domesticated bovine animal used for heavy farm work",
    "sentence": "The hardworking farmer used a strong {{BLANK}} to pull the heavy iron plow through the muddy paddy field.",
    "cn": "辛勤工作的農夫使用一頭強壯的公牛拉動沉重的鐵犁，翻耕泥濘的稻田。"
  },
  {
    "word": "rat",
    "pos": "n.",
    "cn_def": "大老鼠",
    "en_def": "a rodent resembling a large mouse with a long bare tail",
    "sentence": "The old warehouse was overrun by dirty {{BLANK}}, so the storage manager called a professional pest controller immediately.",
    "cn": "老舊的倉庫裡擠滿了骯髒的大老鼠，所以倉儲經理立刻打電話給專業的除蟲專家處理。"
  },
  {
    "word": "bat",
    "pos": "n.",
    "cn_def": "蝙蝠；球棒",
    "en_def": "a nocturnal flying mammal with leathery wings; wooden club for baseball",
    "sentence": "During the warm summer evening, hundreds of hungry {{BLANK}}s flew out of the dark cave to hunt for flying mosquitoes.",
    "cn": "在溫暖的夏夜裡，數百隻飢餓的蝙蝠從黑暗的洞穴中飛出，在空中捕食飛蚊。"
  },
  {
    "word": "parrot",
    "pos": "n.",
    "cn_def": "鸚鵡",
    "en_def": "a brightly colored tropical bird with a curved beak that can imitate speech",
    "sentence": "The clever green {{BLANK}} learned how to repeat several funny English phrases whenever visitors walked into the pet shop.",
    "cn": "這隻聰明的綠色鸚鵡學會了每當訪客走進寵物店時，便開口重複說出好幾句有趣的英語短句。"
  },
  {
    "word": "eagle",
    "pos": "n.",
    "cn_def": "老鷹；雕",
    "en_def": "a large bird of prey with massive hooked beak, keen eyesight, and broad wings",
    "sentence": "A majestic golden {{BLANK}} soared high above the jagged mountain peaks, scanning the rocky ground below for small rabbits.",
    "cn": "一隻雄偉的金雕在高聳崎嶇的山峰上方翱翔，俯瞰下方的岩石地面搜尋野兔的蹤影。"
  },
  {
    "word": "pigeon",
    "pos": "n.",
    "cn_def": "鴿子",
    "en_def": "a stout seed-eating bird with a small head, short legs, and cooing call",
    "sentence": "Crowds of gentle gray {{BLANK}}s gathered on the sunny city square, pecking eagerly at bread crumbs tossed by tourists.",
    "cn": "成群溫和的灰鴿子聚集在陽光明媚的城市廣場上，熱切地啄食著遊客拋撒下來的麵包屑。"
  },
  {
    "word": "swallow",
    "pos": "n. / v.",
    "cn_def": "燕子；吞嚥",
    "en_def": "a small migratory bird with forked tail; to cause food to pass down throat",
    "sentence": "Before the cold winter arrives, the agile {{BLANK}} builds its mud nest under the roof tiles of our old house.",
    "cn": "在寒冷的冬天到來之前，敏捷的燕子會在我們老房子屋瓦下用泥土築巢。"
  },
  {
    "word": "wing",
    "pos": "n.",
    "cn_def": "翅膀；機翼",
    "en_def": "one of the movable feathered or leathery limbs used for flying",
    "sentence": "The injured wild seagull could not fly back to its coastal nest because its left {{BLANK}} had been hurt by fishing line.",
    "cn": "那隻受傷的野生海鷗無法飛回海岸上的巢穴，因為牠的左翅膀被釣魚線割傷了。"
  }
];

const MCQS = [
  {
    "q": "The tender roasted ______ chops were seasoned with fresh rosemary and garlic, delighting every guest at dinner.",
    "options": [
      "ox",
      "bat",
      "rat",
      "lamb"
    ],
    "answer": 3,
    "cn": "鮮嫩的烤羊排用新鮮迷迭香與大蒜調味，讓晚餐席間的每一位賓客都大快朵頤。 【選項解析】(A) lamb 羊肉/小羊  (B) bat 蝙蝠  (C) rat 大老鼠  (D) ox 公牛。roasted lamb chops（烤羊排）。",
    "vocabIndex": 0
  },
  {
    "q": "A slender spotted ______ stood motionless among the tall forest ferns, listening carefully for any approaching predator.",
    "options": [
      "parrot",
      "pigeon",
      "deer",
      "swallow"
    ],
    "answer": 2,
    "cn": "一隻體態修長的斑點梅花鹿一動也不動地佇立在茂密的森林蕨類之間，仔細聆聽是否有任何掠食者接近。 【選項解析】(A) parrot 鸚鵡  (B) deer 鹿  (C) pigeon 鴿子  (D) swallow 燕子。spotted deer stood motionless（斑點鹿佇立）。",
    "vocabIndex": 1
  },
  {
    "q": "The ancient bronze sculpture depicted a muscular farm ______ pulling a loaded grain wagon through a rustic village.",
    "options": [
      "ox",
      "eagle",
      "rat",
      "bat"
    ],
    "answer": 0,
    "cn": "這座古老的青銅雕塑生動描繪了一頭肌肉發達的農家耕牛，拉著滿載穀物的貨車穿過古樸的村落。 【選項解析】(A) rat 大老鼠  (B) eagle 老鷹  (C) ox 公牛/耕牛  (D) bat 蝙蝠。muscular farm ox pulling wagon（拉貨車的耕牛）。",
    "vocabIndex": 2
  },
  {
    "q": "The warehouse cat caught an unwelcome brown ______ that had been chewing on cardboard storage boxes in the dark.",
    "options": [
      "deer",
      "rat",
      "swallow",
      "lamb"
    ],
    "answer": 1,
    "cn": "倉庫裡養的貓抓到了一隻令人討厭的褐色大老鼠，牠一直在黑暗中啃咬紙箱包裝。 【選項解析】(A) deer 鹿  (B) lamb 小羊  (C) swallow 燕子  (D) rat 大老鼠。chewing on storage boxes 可知為老鼠 rat。",
    "vocabIndex": 3
  },
  {
    "q": "Using sophisticated echolocation, the cave-dwelling ______ flies effortlessly through pitch darkness without colliding with walls.",
    "options": [
      "bat",
      "pigeon",
      "lamb",
      "ox"
    ],
    "answer": 0,
    "cn": "利用先進精密的超音波回聲定位，棲息在洞穴裡的蝙蝠在漆黑中毫不費力地飛行，完全不會撞擊牆壁。 【選項解析】(A) bat 蝙蝠  (B) pigeon 鴿子  (C) lamb 小羊  (D) ox 公牛。echolocation, cave-dwelling bat（回聲定位的洞穴蝙蝠）。",
    "vocabIndex": 4
  },
  {
    "q": "The colorful scarlet ______ perched on the sailor's shoulder and whistled a cheerful nautical tune in the harbor.",
    "options": [
      "rat",
      "deer",
      "ox",
      "parrot"
    ],
    "answer": 3,
    "cn": "五彩斑斕的緋紅金剛鸚鵡棲息在水手的肩膀上，在港口歡快地吹著航海水手的口哨調子。 【選項解析】(A) rat 大老鼠  (B) parrot 鸚鵡  (C) ox 公牛  (D) deer 鹿。scarlet parrot perched on shoulder（停在肩膀上的鸚鵡）。",
    "vocabIndex": 5
  },
  {
    "q": "The mighty bald ______ dove at lightning speed from the cliff top and snatched a silvery fish from the lake with its talons.",
    "options": [
      "pigeon",
      "eagle",
      "swallow",
      "lamb"
    ],
    "answer": 1,
    "cn": "威風凜凜的白頭海鵰以閃電般的速度自懸崖頂端俯衝而下，用銳利的利爪從湖水中抓起一條銀光閃閃的魚。 【選項解析】(A) pigeon 鴿子  (B) swallow 燕子  (C) eagle 老鷹/雕  (D) lamb 小羊。bald eagle snatched fish with talons（海鵰用利爪抓魚）。",
    "vocabIndex": 6
  },
  {
    "q": "In many European historic town squares, hundreds of city ______ flutter down from stone monuments to be fed by tourists.",
    "options": [
      "oxen",
      "bats",
      "pigeons",
      "rats"
    ],
    "answer": 2,
    "cn": "在許多歐洲歷史名城的城鎮廣場上，數以百計的城市鴿子從石雕古蹟上翩翩飛下，接受遊客的餵食。 【選項解析】(A) oxen 公牛  (B) bats 蝙蝠  (C) rats 老鼠  (D) pigeons 鴿子。city pigeons in town squares（廣場鴿子）。",
    "vocabIndex": 7
  },
  {
    "q": "In early spring, a pair of graceful ______ returned to their old nesting site under the eaves of our wooden porch.",
    "options": [
      "rats",
      "oxen",
      "deer",
      "swallows"
    ],
    "answer": 3,
    "cn": "初春時節，一對優雅的燕子重返我們木門廊屋簷下的舊巢築穴，迎接溫暖季節的到來。 【選項解析】(A) swallows 燕子  (B) oxen 公牛  (C) deer 鹿  (D) rats 老鼠。swallows nesting under eaves（屋簷下築巢的燕子）。",
    "vocabIndex": 8
  },
  {
    "q": "The young albatross spread its immense six-foot ______ into the strong ocean gust and took flight toward the horizon.",
    "options": [
      "wing",
      "deer",
      "ox",
      "lamb"
    ],
    "answer": 0,
    "cn": "年輕的信天翁將牠那長達六英尺的巨大雙翼迎著強烈海風舒展開來，向著無垠的地平線振翅高飛。 【選項解析】(A) deer 鹿  (B) wing 翅膀  (C) ox 公牛  (D) lamb 小羊。spread six-foot wing（展開六英尺長的翅膀）。",
    "vocabIndex": 9
  },
  {
    "q": "When the young boy felt a severe sore throat, it was extremely painful for him to ______ any solid food or drink.",
    "options": [
      "fly",
      "bark",
      "swallow",
      "hunt"
    ],
    "answer": 2,
    "cn": "當小男孩感到喉嚨劇烈疼痛時，吞嚥任何固體食物或飲料對他而言都是極為痛苦的折磨。 【選項解析】(A) fly 飛翔  (B) bark 吠叫  (C) swallow 吞嚥  (D) hunt 狩獵。painful to swallow food（吞嚥食物很痛）。",
    "vocabIndex": 8
  },
  {
    "q": "A mother ewe called out gently to her newborn ______, guiding it toward a sheltered patch of clover in the meadow.",
    "options": [
      "ox",
      "lamb",
      "bat",
      "rat"
    ],
    "answer": 1,
    "cn": "母羊對著剛出生的小羊溫柔地呼喚，引導牠走向草地上背風的一小片三葉草叢。 【選項解析】(A) ox 公牛  (B) rat 大老鼠  (C) bat 蝙蝠  (D) lamb 小羊。ewe to newborn lamb（母羊對新生小羊）。",
    "vocabIndex": 0
  },
  {
    "q": "While driving along the rural mountain highway at dusk, we had to brake suddenly because a large ______ crossed the road.",
    "options": [
      "deer",
      "pigeon",
      "parrot",
      "swallow"
    ],
    "answer": 0,
    "cn": "傍晚行駛在鄉間山區公路上時，我們不得不緊急煞車，因為一頭巨大的野鹿正漫步橫越馬路。 【選項解析】(A) deer 鹿  (B) pigeon 鴿子  (C) parrot 鸚鵡  (D) swallow 燕子。deer crossed the road（鹿穿越馬路）。",
    "vocabIndex": 1
  },
  {
    "q": "Historically, traditional rice farmers in East Asia relied heavily on the water ______ for tilling flooded paddy soil.",
    "options": [
      "bat",
      "rat",
      "ox",
      "eagle"
    ],
    "answer": 2,
    "cn": "在歷史上，東亞地區傳統的稻農在翻耕淹水的稻田泥土時，高度依賴水牛提供的強大勞力。 【選項解析】(A) bat 蝙蝠  (B) ox 水牛/耕牛  (C) rat 大老鼠  (D) eagle 老鷹。water ox for tilling paddy（水田耕牛）。",
    "vocabIndex": 2
  },
  {
    "q": "The health inspection team shut down the basement restaurant after discovering signs of food contamination caused by sewer ______.",
    "options": [
      "deer",
      "rats",
      "pigeons",
      "swallows"
    ],
    "answer": 1,
    "cn": "在發現地下道溝渠大老鼠所引發的食物污染跡象之後，衛生稽查團隊勒令這家地下室餐廳立刻停業。 【選項解析】(A) deer 鹿  (B) pigeons 鴿子  (C) rats 老鼠  (D) swallows 燕子。contamination by sewer rats（溝渠老鼠引發污染）。",
    "vocabIndex": 3
  },
  {
    "q": "During the nocturnal tour of the rainforest, the guide used an infrared lamp to point out a giant fruit ______ hanging upside down.",
    "options": [
      "lamb",
      "ox",
      "deer",
      "bat"
    ],
    "answer": 3,
    "cn": "在熱帶雨林的夜間生態導覽中，嚮導使用紅外線燈指向一隻正倒掛在樹枝上的巨大食果蝙蝠。 【選項解析】(A) lamb 小羊  (B) ox 公牛  (C) deer 鹿  (D) bat 蝙蝠。fruit bat hanging upside down（倒掛的果蝠）。",
    "vocabIndex": 4
  },
  {
    "q": "That intelligent African gray ______ has an astounding vocabulary and can mimic telephone ringtones with perfect accuracy.",
    "options": [
      "lamb",
      "rat",
      "parrot",
      "ox"
    ],
    "answer": 2,
    "cn": "那隻聰明無比的非洲灰鸚鵡擁有令人驚嘆的詞彙量，且能夠以百分之百的準確度模仿電話鈴聲。 【選項解析】(A) parrot 鸚鵡  (B) rat 大老鼠  (C) lamb 小羊  (D) ox 公牛。African gray parrot mimics ringtones（模仿鈴聲的非洲灰鸚鵡）。",
    "vocabIndex": 5
  },
  {
    "q": "The fierce golden ______ perched high atop the telephone pole, keeping its watchful eyes fixed on the open field below.",
    "options": [
      "swallow",
      "eagle",
      "deer",
      "rat"
    ],
    "answer": 1,
    "cn": "這隻兇猛強悍的金雕高高棲息在電線桿頂端，警覺銳利的雙眼緊緊鎖定著下方開闊的田野動靜。 【選項解析】(A) swallow 燕子  (B) eagle 老鷹  (C) deer 鹿  (D) rat 大老鼠。fierce golden eagle perched high（高高棲息的金雕）。",
    "vocabIndex": 6
  },
  {
    "q": "Homing ______ were famously used during wartime to carry vital handwritten messages across enemy battle lines.",
    "options": [
      "oxen",
      "lambs",
      "bats",
      "pigeons"
    ],
    "answer": 3,
    "cn": "信鴿在戰時曾以穿越敵軍交火前線、傳遞關鍵手寫軍事情報機密而名垂青史。 【選項解析】(A) oxen 公牛  (B) lambs 小羊  (C) pigeons 信鴿/鴿子  (D) bats 蝙蝠。homing pigeons carried messages（軍用傳信鴿）。",
    "vocabIndex": 7
  },
  {
    "q": "The aeroplane made an emergency landing at the airport after an engine under the right ______ malfunctioned shortly after takeoff.",
    "options": [
      "wing",
      "deer",
      "ox",
      "rat"
    ],
    "answer": 0,
    "cn": "在起飛後不久因右側機翼下方的一具引擎發生故障，這架客機在機場實施了緊急迫降。 【選項解析】(A) rat 老鼠  (B) deer 鹿  (C) ox 公牛  (D) wing 機翼。engine under right wing（右機翼下的發動機）。",
    "vocabIndex": 9
  },
  {
    "q": "The fluffy little white ______ bounded across the grassy pasture, eager to drink warm milk from its mother.",
    "options": [
      "bat",
      "lamb",
      "eagle",
      "rat"
    ],
    "answer": 1,
    "cn": "毛茸茸的小白羊在青翠的牧場上歡快奔馳跳躍，渴望能喝上一口媽媽溫暖甜美的奶水。 【選項解析】(A) lamb 小羊  (B) bat 蝙蝠  (C) eagle 老鷹  (D) rat 老鼠。fluffy little white lamb（毛茸茸白色小羊）。",
    "vocabIndex": 0
  },
  {
    "q": "Hunting regulations strictly protect female ______ and young fawns during the autumn breeding season in national parks.",
    "options": [
      "deer",
      "oxen",
      "rats",
      "pigeons"
    ],
    "answer": 0,
    "cn": "狩獵法規在國家公園的秋季繁殖期間，嚴格保護雌鹿與年幼的小鹿免於遭受獵殺獵捕。 【選項解析】(A) oxen 公牛  (B) deer 鹿  (C) rats 老鼠  (D) pigeons 鴿子。female deer and young fawns（母鹿與幼鹿）。",
    "vocabIndex": 1
  },
  {
    "q": "The ancient proverb says that a stubborn person can sometimes be as immovable and headstrong as an angry ______.",
    "options": [
      "parrot",
      "swallow",
      "ox",
      "bat"
    ],
    "answer": 2,
    "cn": "古老諺語說，一個脾氣倔強執拗的人有時候會像一頭憤怒的公牛一樣固執而難以動搖說服。 【選項解析】(A) parrot 鸚鵡  (B) swallow 燕子  (C) ox 公牛  (D) bat 蝙蝠。as stubborn as an ox（像牛一樣固執頑劣）。",
    "vocabIndex": 2
  },
  {
    "q": "In the attic storage room, we found that a destructive ______ had gnawed through several important old paper documents.",
    "options": [
      "deer",
      "lamb",
      "pigeon",
      "rat"
    ],
    "answer": 3,
    "cn": "在閣樓的儲藏室裡，我們發現一隻破壞力極強的大老鼠已經咬破了好幾份重要的珍貴舊文件。 【選項解析】(A) deer 鹿  (B) lamb 小羊  (C) pigeon 鴿子  (D) rat 大老鼠。destructive rat gnawed paper（老鼠啃咬紙張）。",
    "vocabIndex": 3
  },
  {
    "q": "A graceful pair of migratory ______ dipped low over the water surface to catch flying insects during the warm afternoon.",
    "options": [
      "swallows",
      "oxen",
      "bats",
      "rats"
    ],
    "answer": 0,
    "cn": "一對優雅的候鳥燕子在溫暖的午後低空掠過水面，在半空中輕巧敏捷地捕捉飛蟲食用。 【選項解析】(A) swallows 燕子  (B) oxen 公牛  (C) bats 蝙蝠  (D) rats 老鼠。migratory swallows dipped over water（水面低飛捕蟲的候鳥燕子）。",
    "vocabIndex": 8
  }
];

const LOOKUP = {
  "lamb": {
    "pos": "n.",
    "en_def": "a young sheep; meat from a young sheep",
    "cn_def": "小羊；羊肉",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a young sheep; meat from a young sheep",
        "cn_def": "小羊；羊肉"
      }
    ]
  },
  "deer": {
    "pos": "n.",
    "en_def": "a graceful hoofed mammal with antlers on males",
    "cn_def": "鹿（單複數同形）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a graceful hoofed mammal with antlers on males",
        "cn_def": "鹿（單複數同形）"
      }
    ]
  },
  "ox": {
    "pos": "n.",
    "en_def": "a large domesticated bovine animal used for heavy farm work",
    "cn_def": "公牛；閹牛（複數為 oxen）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large domesticated bovine animal used for heavy farm work",
        "cn_def": "公牛；閹牛（複數為 oxen）"
      }
    ]
  },
  "rat": {
    "pos": "n.",
    "en_def": "a rodent resembling a large mouse with a long bare tail",
    "cn_def": "大老鼠",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a rodent resembling a large mouse with a long bare tail",
        "cn_def": "大老鼠"
      }
    ]
  },
  "bat": {
    "pos": "n.",
    "en_def": "a nocturnal flying mammal with leathery wings; wooden club for baseball",
    "cn_def": "蝙蝠；球棒",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a nocturnal flying mammal with leathery wings; wooden club for baseball",
        "cn_def": "蝙蝠；球棒"
      }
    ]
  },
  "parrot": {
    "pos": "n.",
    "en_def": "a brightly colored tropical bird with a curved beak that can imitate speech",
    "cn_def": "鸚鵡",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a brightly colored tropical bird with a curved beak that can imitate speech",
        "cn_def": "鸚鵡"
      }
    ]
  },
  "eagle": {
    "pos": "n.",
    "en_def": "a large bird of prey with massive hooked beak, keen eyesight, and broad wings",
    "cn_def": "老鷹；雕",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large bird of prey with massive hooked beak, keen eyesight, and broad wings",
        "cn_def": "老鷹；雕"
      }
    ]
  },
  "pigeon": {
    "pos": "n.",
    "en_def": "a stout seed-eating bird with a small head, short legs, and cooing call",
    "cn_def": "鴿子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a stout seed-eating bird with a small head, short legs, and cooing call",
        "cn_def": "鴿子"
      }
    ]
  },
  "swallow": {
    "pos": "n. / v.",
    "en_def": "a small migratory bird with forked tail; to cause food to pass down throat",
    "cn_def": "燕子；吞嚥",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a small migratory bird with forked tail; to cause food to pass down throat",
        "cn_def": "燕子；吞嚥"
      }
    ]
  },
  "wing": {
    "pos": "n.",
    "en_def": "one of the movable feathered or leathery limbs used for flying",
    "cn_def": "翅膀；機翼",
    "combined": [
      {
        "pos": "n.",
        "en_def": "one of the movable feathered or leathery limbs used for flying",
        "cn_def": "翅膀；機翼"
      }
    ]
  },
  "oxen": {
    "pos": "",
    "en_def": "",
    "cn_def": "公牛",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "公牛"
      }
    ]
  },
  "bats": {
    "pos": "",
    "en_def": "",
    "cn_def": "蝙蝠",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "蝙蝠"
      }
    ]
  },
  "pigeons": {
    "pos": "",
    "en_def": "",
    "cn_def": "鴿子",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "鴿子"
      }
    ]
  },
  "rats": {
    "pos": "",
    "en_def": "",
    "cn_def": "老鼠",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "老鼠"
      }
    ]
  },
  "swallows": {
    "pos": "",
    "en_def": "",
    "cn_def": "燕子",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "燕子"
      }
    ]
  },
  "fly": {
    "pos": "",
    "en_def": "",
    "cn_def": "飛翔",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "飛翔"
      }
    ]
  },
  "bark": {
    "pos": "",
    "en_def": "",
    "cn_def": "吠叫",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "吠叫"
      }
    ]
  },
  "hunt": {
    "pos": "",
    "en_def": "",
    "cn_def": "狩獵",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "狩獵"
      }
    ]
  },
  "lambs": {
    "pos": "",
    "en_def": "",
    "cn_def": "小羊",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "小羊"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
