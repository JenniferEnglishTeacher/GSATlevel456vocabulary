// Lesson 31 Quiz Data: Landforms, Forest Ecology & Natural Resources
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 31 - Landforms, Forest Ecology & Natural Resources",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "desert",
    "pos": "n. / v.",
    "cn_def": "沙漠；拋棄",
    "en_def": "a large dry area with very little rain; to leave behind",
    "sentence": "Camels can travel for several days across the hot {{BLANK}} without drinking water, but inexperienced tourists should never travel alone.",
    "cn": "駱駝可以在炎熱的沙漠中行走數天而不喝水，但缺乏經驗的遊客絕不應單獨旅行。"
  },
  {
    "word": "forest",
    "pos": "n.",
    "cn_def": "森林",
    "en_def": "a large area of land covered with trees and wild plants",
    "sentence": "The hikers walked along the mountain trail into the green {{BLANK}}, where many wild animals and singing birds live peacefully.",
    "cn": "健行者沿著山徑走進綠意盎然的森林，許多野生動物和歌唱的鳥類在那裡平靜地生活。"
  },
  {
    "word": "wood",
    "pos": "n.",
    "cn_def": "木頭；樹林",
    "en_def": "the hard material from tree trunks; a small forest",
    "sentence": "My grandfather built this sturdy dining table out of solid {{BLANK}}, and it has lasted in our house for over thirty years.",
    "cn": "我的祖父用實木打造了這張堅固的餐桌，它在我們家裡已經使用了超過三十年。"
  },
  {
    "word": "plant",
    "pos": "n. / v.",
    "cn_def": "植物；種植",
    "en_def": "a living organism grown in earth; to put seeds or plants into soil",
    "sentence": "Every spring my mother likes to {{BLANK}} colorful flowers in the garden, and she waters them carefully every morning.",
    "cn": "每年春天我媽媽喜歡在花園裡種植色彩繽紛的花朵，而且她每天早晨都細心地給它們澆水。"
  },
  {
    "word": "root",
    "pos": "n.",
    "cn_def": "根部；根源",
    "en_def": "the part of a plant that grows underground for water and support",
    "sentence": "The old banyan tree fell during the heavy typhoon because its {{BLANK}} was not deep enough in the sandy ground.",
    "cn": "那棵老榕樹在強烈颱風中倒塌了，因為它的根部在沙質土壤中不夠深。"
  },
  {
    "word": "seed",
    "pos": "n.",
    "cn_def": "種子",
    "en_def": "a small hard part produced by a plant that can grow into a new plant",
    "sentence": "The farmer scattered pumpkin {{BLANK}} across the freshly plowed soil, and he hoped for gentle rain during the coming weekend.",
    "cn": "農夫把南瓜種子播撒在剛犁好的泥土上，並期望即將到來的週末能下起溫和的小雨。"
  },
  {
    "word": "rock",
    "pos": "n. / v.",
    "cn_def": "岩石；搖晃",
    "en_def": "a large hard piece of stone; to move gently backwards and forwards",
    "sentence": "The brave climber stood firmly on the huge gray {{BLANK}}, and he enjoyed the breathtaking sunrise above the cloudy valley.",
    "cn": "勇敢的登山者穩穩地站在巨大的灰色岩石上，並欣賞雲霧繚繞的山谷上方令人屏息的日出。"
  },
  {
    "word": "stone",
    "pos": "n. / v.",
    "cn_def": "石頭；石材",
    "en_def": "a hard solid mineral substance found in the ground",
    "sentence": "Local workers constructed a high {{BLANK}} wall around the ancient castle to protect the villagers from strong coastal winds.",
    "cn": "當地的工人們在古堡周圍建造了一堵高大的石頭圍牆，以保護村民免受強烈海風的侵襲。"
  },
  {
    "word": "sand",
    "pos": "n.",
    "cn_def": "沙子",
    "en_def": "tiny grains of broken rock found on beaches and in deserts",
    "sentence": "The happy children took off their shoes and ran across the golden {{BLANK}}, and they built several tall castles near the sea.",
    "cn": "快樂的孩子們脫下鞋子跑過金黃色的沙子，並在海邊建造了幾座高高的城堡。"
  },
  {
    "word": "valley",
    "pos": "n.",
    "cn_def": "山谷；溪谷",
    "en_def": "a low area of land between hills or mountains, often with a river",
    "sentence": "A clear freshwater river flows through the peaceful green {{BLANK}}, and local farmers grow sweet apples along both riverbanks.",
    "cn": "一條清澈的淡水河流淌過寧靜綠色的山谷，當地農民在兩側河岸種植甜蘋果。"
  }
];

const MCQS = [
  {
    "q": "Because the huge banyan tree had such a deep ______, it remained standing firmly even during the fiercest typhoon.",
    "options": [
      "seed",
      "root",
      "rock",
      "sand"
    ],
    "answer": 1,
    "cn": "因為這棵巨大的榕樹擁有如此深長的根部，即使在最猛烈的颱風中它依然屹立不倒。 【選項解析】(A) root 根部  (B) seed 種子  (C) rock 岩石  (D) sand 沙子。由 tree had such a deep... remained standing 可知是樹根 root。",
    "vocabIndex": 4
  },
  {
    "q": "The local carpenter used fine oak ______ to build the sturdy bookshelves, and he polished them with natural oil.",
    "options": [
      "valley",
      "desert",
      "wood",
      "root"
    ],
    "answer": 2,
    "cn": "當地的木匠使用優質橡木木材打造堅固的書架，並用天然護木油將其擦拭拋光。 【選項解析】(A) valley 山谷  (B) wood 木材  (C) desert 沙漠  (D) root 根部。由 carpenter（木匠）與 oak（橡木）可知選 wood。",
    "vocabIndex": 2
  },
  {
    "q": "Very few green plants can survive in the dry ______ because the scorching sun evaporates water almost immediately.",
    "options": [
      "forest",
      "rock",
      "seed",
      "desert"
    ],
    "answer": 3,
    "cn": "極少有綠色植物能在乾旱的沙漠中生存，因為熾熱的太陽幾乎瞬間就會將水分蒸發殆盡。 【選項解析】(A) forest 森林  (B) rock 岩石  (C) desert 沙漠  (D) seed 種子。由 dry（乾旱）與 scorching sun（烈日）可知指 desert。",
    "vocabIndex": 0
  },
  {
    "q": "Before springtime begins, our science teacher taught us how to bury each tiny sunflower ______ into rich, damp soil.",
    "options": [
      "seed",
      "wood",
      "valley",
      "stone"
    ],
    "answer": 0,
    "cn": "春天來臨之前，我們的自然老師教我們如何將每一顆小小的向日葵種子埋入肥沃濕潤的泥土中。 【選項解析】(A) stone 石頭  (B) wood 木頭  (C) valley 山谷  (D) seed 種子。由 bury into rich, damp soil（埋進泥土種植）可知指種子 seed。",
    "vocabIndex": 5
  },
  {
    "q": "Thousands of wild birds and monkeys make their natural homes in this tropical ______, which is protected by national law.",
    "options": [
      "sand",
      "forest",
      "root",
      "desert"
    ],
    "answer": 1,
    "cn": "成千上萬的野生鳥類與猴子在這座熱帶森林中建立天然家園，受到國家法律的嚴格保護。 【選項解析】(A) forest 森林  (B) sand 沙子  (C) root 根部  (D) desert 沙漠。由 wild birds and monkeys make homes 可知為森林 forest。",
    "vocabIndex": 1
  },
  {
    "q": "A peaceful freshwater stream flows gently down through the grassy ______, where dairy cows graze every sunny afternoon.",
    "options": [
      "seed",
      "rock",
      "valley",
      "wood"
    ],
    "answer": 2,
    "cn": "一條寧靜的淡水溪流緩緩流經草木繁茂的山谷，乳牛每逢晴朗午後便在此吃草悠遊。 【選項解析】(A) seed 種子  (B) valley 山谷  (C) rock 岩石  (D) wood 木材。stream flows down through the grassy... 可知為山谷 valley。",
    "vocabIndex": 9
  },
  {
    "q": "The careless young driver hit a sharp roadside ______ on the mountain road, which caused his front tire to blow out.",
    "options": [
      "rock",
      "forest",
      "sand",
      "valley"
    ],
    "answer": 0,
    "cn": "粗心的年輕司機在山路上撞到了路旁尖銳的岩石，導致他的前輪當場爆胎。 【選項解析】(A) sand 沙子  (B) forest 森林  (C) rock 岩石  (D) valley 山谷。sharp roadside rock（路邊尖銳岩石）導致爆胎。",
    "vocabIndex": 6
  },
  {
    "q": "The playful children spent three happy hours on the beach building miniature castles with damp ______ and seashells.",
    "options": [
      "desert",
      "root",
      "wood",
      "sand"
    ],
    "answer": 3,
    "cn": "貪玩的孩子們在海灘上度過了三小時的歡樂時光，用潮濕的沙子與貝殼建造袖珍城堡。 【選項解析】(A) desert 沙漠  (B) root 根部  (C) wood 木頭  (D) sand 沙子。在海灘用 damp sand（濕沙）堆城堡。",
    "vocabIndex": 8
  },
  {
    "q": "The ancient bridge was constructed entirely of heavy grey ______, so it remained strong despite centuries of river floods.",
    "options": [
      "seed",
      "stone",
      "valley",
      "forest"
    ],
    "answer": 1,
    "cn": "這座古橋完全由沉重的灰色石材建造而成，因此歷經數百年的河水氾濫依然堅固不摧。 【選項解析】(A) stone 石頭/石材  (B) seed 種子  (C) valley 山谷  (D) forest 森林。constructed of heavy grey stone（由灰色石材打造）。",
    "vocabIndex": 7
  },
  {
    "q": "During Arbor Day every year, students gather at the community park to ______ twenty young saplings along the pathway.",
    "options": [
      "plant",
      "desert",
      "rock",
      "stone"
    ],
    "answer": 0,
    "cn": "每年植樹節期間，學生們聚集在社區公園，沿著小徑種植二十棵幼苗樹木。 【選項解析】(A) desert 拋棄  (B) plant 種植  (C) rock 搖晃  (D) stone 投石。plant saplings（種植樹苗）。",
    "vocabIndex": 3
  },
  {
    "q": "After walking barefoot across the scorching beach ______, my feet felt very hot and uncomfortable until I washed them.",
    "options": [
      "root",
      "wood",
      "forest",
      "sand"
    ],
    "answer": 3,
    "cn": "赤腳走過滾燙的海灘沙地後，我的雙腳感到非常灼熱不適，直到我沖水後才好轉。 【選項解析】(A) root 根部  (B) wood 木頭  (C) sand 沙子  (D) forest 森林。beach sand（海灘沙地）。",
    "vocabIndex": 8
  },
  {
    "q": "Deep inside the dense mountain ______, sunlight could hardly reach the ground through the thick canopy of evergreen leaves.",
    "options": [
      "desert",
      "seed",
      "forest",
      "rock"
    ],
    "answer": 2,
    "cn": "在茂密的山林深處，陽光透過常綠樹葉形成的厚重樹冠，幾乎無法照射到地面。 【選項解析】(A) desert 沙漠  (B) seed 種子  (C) rock 岩石  (D) forest 森林。dense mountain forest（茂密山林）。",
    "vocabIndex": 1
  },
  {
    "q": "The tiny brown apple ______ looks completely dry and lifeless, but with water and sunshine it can grow into a tall tree.",
    "options": [
      "stone",
      "valley",
      "sand",
      "seed"
    ],
    "answer": 3,
    "cn": "這顆小小的褐色蘋果種子看起來完全乾燥毫無生機，但在水和陽光滋潤下能長成大樹。 【選項解析】(A) seed 種子  (B) valley 山谷  (C) sand 沙子  (D) stone 石頭。apple seed（蘋果種子）。",
    "vocabIndex": 5
  },
  {
    "q": "A mother duck led her cute ducklings down toward the quiet ______, where cool mountain water formed a shallow pond.",
    "options": [
      "root",
      "valley",
      "wood",
      "desert"
    ],
    "answer": 1,
    "cn": "鴨媽媽帶領著可愛的小鴨群走向寧靜的山谷，那裡的清涼山泉匯聚成一個淺淺的水塘。 【選項解析】(A) root 根部  (B) valley 山谷  (C) wood 木頭  (D) desert 沙漠。走向山谷谷地（valley）。",
    "vocabIndex": 9
  },
  {
    "q": "Many colorful orchids do not grow in soil; instead, their strong aerial ______ cling tightly to the rough bark of trees.",
    "options": [
      "root",
      "seed",
      "sand",
      "stone"
    ],
    "answer": 0,
    "cn": "許多色彩斑斕的蘭花並不長在土壤中；相反地，它們強健的氣生根緊緊吸附在粗糙的樹皮上。 【選項解析】(A) sand 沙子  (B) seed 種子  (C) root 根部  (D) stone 石頭。aerial roots（氣生根）。",
    "vocabIndex": 4
  },
  {
    "q": "The cruel owner decided to ______ his poor pet dog on the remote highway, which sparked severe public criticism.",
    "options": [
      "rock",
      "stone",
      "desert",
      "plant"
    ],
    "answer": 2,
    "cn": "殘忍的飼主決定在偏遠公路上拋棄他可憐的寵物狗，這引發了社會大眾的強烈批評。 【選項解析】(A) rock 搖動  (B) stone 扔石頭  (C) plant 種植  (D) desert 拋棄。desert one's pet（拋棄寵物）。",
    "vocabIndex": 0
  },
  {
    "q": "This beautiful acoustic guitar was crafted by hand from rose ______, producing an exceptionally warm and resonant musical tone.",
    "options": [
      "root",
      "valley",
      "sand",
      "wood"
    ],
    "answer": 3,
    "cn": "這把美麗的原聲木吉他由玫瑰木純手工打造，產生極為溫暖而共鳴的音樂音色。 【選項解析】(A) wood 木材  (B) valley 山谷  (C) sand 沙子  (D) root 根部。rosewood（玫瑰木）。",
    "vocabIndex": 2
  },
  {
    "q": "While hiking along the steep coastal cliff, David accidentally kicked a loose ______, sending it tumbling into the ocean.",
    "options": [
      "desert",
      "stone",
      "seed",
      "forest"
    ],
    "answer": 1,
    "cn": "在陡峭的海岸懸崖健行時，戴維不小心踢落了一塊鬆動的石頭，使其一路翻滾跌入大洋中。 【選項解析】(A) desert 沙漠  (B) stone 石頭  (C) seed 種子  (D) forest 森林。kicked a loose stone（踢到鬆動石塊）。",
    "vocabIndex": 7
  },
  {
    "q": "Looking down from the mountain top, the vast golden ______ stretched endlessly toward the distant horizon under the blue sky.",
    "options": [
      "desert",
      "wood",
      "root",
      "valley"
    ],
    "answer": 0,
    "cn": "從山頂俯瞰，遼闊的金黃色沙漠在藍天下無邊無際地向著遠方的地平線延伸蔓延。 【選項解析】(A) root 根部  (B) wood 木材  (C) desert 沙漠  (D) valley 山谷。golden desert stretched endlessly（金色沙漠綿延不絕）。",
    "vocabIndex": 0
  },
  {
    "q": "The gentle ocean waves washed smooth round pebbles and warm golden ______ over our feet as we walked along the shore.",
    "options": [
      "seed",
      "forest",
      "sand",
      "stone"
    ],
    "answer": 2,
    "cn": "當我們漫步在海灘上時，溫柔的海浪將圓滑的卵石和溫暖金黃的細沙沖刷過我們的腳背。 【選項解析】(A) seed 種子  (B) forest 森林  (C) stone 石頭  (D) sand 沙子。golden sand on the shore（岸邊金沙）。",
    "vocabIndex": 8
  },
  {
    "q": "The curious little boy tried to throw a flat ______ across the pond surface so that it would skip several times.",
    "options": [
      "stone",
      "root",
      "wood",
      "desert"
    ],
    "answer": 0,
    "cn": "好奇的小男孩試著把一塊扁平的石頭丟過池塘水面，希望它能在水上連續打好幾個水漂。 【選項解析】(A) stone 石頭  (B) root 根部  (C) wood 木頭  (D) desert 沙漠。throw a flat stone（丟扁平石頭打水漂）。",
    "vocabIndex": 7
  },
  {
    "q": "If you want sweet juicy tomatoes next summer, you must ______ the young seedlings in a spot that receives plenty of sunshine.",
    "options": [
      "desert",
      "plant",
      "stone",
      "rock"
    ],
    "answer": 1,
    "cn": "如果你想在明年夏天吃到甜美多汁的番茄，你就必須把幼苗栽種在陽光充足的地點。 【選項解析】(A) desert 拋棄  (B) plant 種植  (C) stone 砸石  (D) rock 搖擺。plant seedlings（栽種幼苗）。",
    "vocabIndex": 3
  },
  {
    "q": "The courageous climbers pitched their nylon tents beside a massive granite ______ to shield themselves from freezing gale winds.",
    "options": [
      "valley",
      "sand",
      "seed",
      "rock"
    ],
    "answer": 3,
    "cn": "勇敢的攀登者在巨大的花崗岩岩石旁搭起尼龍帳篷，以遮蔽狂暴刺骨的寒風侵襲。 【選項解析】(A) valley 山谷  (B) sand 沙子  (C) rock 岩石  (D) seed 種子。granite rock（花崗岩石）。",
    "vocabIndex": 6
  },
  {
    "q": "Between the two towering mountain ridges lies a fertile green ______, where generations of villagers have cultivated rice fields.",
    "options": [
      "forest",
      "desert",
      "valley",
      "wood"
    ],
    "answer": 2,
    "cn": "在兩座高聳的山脊之間坐落著一片肥沃翠綠的山谷，世世代代的村民都在這裡耕作稻田。 【選項解析】(A) forest 森林  (B) desert 沙漠  (C) wood 木頭  (D) valley 山谷。fertile green valley（肥沃綠色山谷）。",
    "vocabIndex": 9
  },
  {
    "q": "Without enough healthy soil to hold moisture, the delicate tree ______ will quickly dry out and the entire sapling will die.",
    "options": [
      "stone",
      "root",
      "sand",
      "rock"
    ],
    "answer": 1,
    "cn": "如果沒有足夠健康濕潤的土壤來保持水分，嬌嫩的樹根將迅速乾枯，整株樹苗也會隨之枯死。 【選項解析】(A) root 根部  (B) stone 石頭  (C) sand 沙子  (D) rock 岩石。delicate tree roots（嬌嫩樹根）。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "desert": {
    "pos": "n. / v.",
    "en_def": "a large dry area with very little rain; to leave behind",
    "cn_def": "沙漠；拋棄",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a large dry area with very little rain; to leave behind",
        "cn_def": "沙漠；拋棄"
      }
    ]
  },
  "forest": {
    "pos": "n.",
    "en_def": "a large area of land covered with trees and wild plants",
    "cn_def": "森林",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large area of land covered with trees and wild plants",
        "cn_def": "森林"
      }
    ]
  },
  "wood": {
    "pos": "n.",
    "en_def": "the hard material from tree trunks; a small forest",
    "cn_def": "木頭；樹林",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the hard material from tree trunks; a small forest",
        "cn_def": "木頭；樹林"
      }
    ]
  },
  "plant": {
    "pos": "n. / v.",
    "en_def": "a living organism grown in earth; to put seeds or plants into soil",
    "cn_def": "植物；種植",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a living organism grown in earth; to put seeds or plants into soil",
        "cn_def": "植物；種植"
      }
    ]
  },
  "root": {
    "pos": "n.",
    "en_def": "the part of a plant that grows underground for water and support",
    "cn_def": "根部；根源",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the part of a plant that grows underground for water and support",
        "cn_def": "根部；根源"
      }
    ]
  },
  "seed": {
    "pos": "n.",
    "en_def": "a small hard part produced by a plant that can grow into a new plant",
    "cn_def": "種子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small hard part produced by a plant that can grow into a new plant",
        "cn_def": "種子"
      }
    ]
  },
  "rock": {
    "pos": "n. / v.",
    "en_def": "a large hard piece of stone; to move gently backwards and forwards",
    "cn_def": "岩石；搖晃",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a large hard piece of stone; to move gently backwards and forwards",
        "cn_def": "岩石；搖晃"
      }
    ]
  },
  "stone": {
    "pos": "n. / v.",
    "en_def": "a hard solid mineral substance found in the ground",
    "cn_def": "石頭；石材",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a hard solid mineral substance found in the ground",
        "cn_def": "石頭；石材"
      }
    ]
  },
  "sand": {
    "pos": "n.",
    "en_def": "tiny grains of broken rock found on beaches and in deserts",
    "cn_def": "沙子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "tiny grains of broken rock found on beaches and in deserts",
        "cn_def": "沙子"
      }
    ]
  },
  "valley": {
    "pos": "n.",
    "en_def": "a low area of land between hills or mountains, often with a river",
    "cn_def": "山谷；溪谷",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a low area of land between hills or mountains, often with a river",
        "cn_def": "山谷；溪谷"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
