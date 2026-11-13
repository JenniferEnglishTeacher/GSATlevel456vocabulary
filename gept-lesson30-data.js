// Lesson 30 Quiz Data: Natural Landscapes, Bodies of Water & Coastal Geography
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 30 - Natural Landscapes, Bodies of Water & Coastal Geography",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "nature",
    "pos": "n.",
    "cn_def": "大自然；自然界；天性",
    "en_def": "the physical world including plants, animals, and landscapes",
    "sentence": "Spending a quiet weekend camping in the national park allows city residents to reconnect with the peace of {{BLANK}}.",
    "cn": "在國家公園度過安靜的露營週末，使城市居民能夠重新連結大自然的寧靜。"
  },
  {
    "word": "natural",
    "pos": "adj.",
    "cn_def": "自然的；天然的；天生的",
    "en_def": "existing in or caused by nature; not made or caused by humankind",
    "sentence": "The remote tropical island is completely surrounded by pristine {{BLANK}} coral reefs teeming with colorful exotic fish.",
    "cn": "這座偏遠的熱帶島嶼完全被未受破壞的天然珊瑚礁環繞，裡面充滿了色彩斑斕的奇異魚類。"
  },
  {
    "word": "ocean",
    "pos": "n.",
    "cn_def": "海洋；大洋",
    "en_def": "a very large expanse of sea, in particular each of the main areas",
    "sentence": "A great white shark swam gracefully beneath the surface of the Pacific {{BLANK}}, hunting for seals near the coastal islands.",
    "cn": "一隻大白鯊在太平洋海面下優雅地游動，在沿海島嶼附近獵食海豹。"
  },
  {
    "word": "shore",
    "pos": "n.",
    "cn_def": "岸；濱；海岸",
    "en_def": "the land along the edge of a sea, lake, or other large body of water",
    "sentence": "Children took off their sandals and walked along the sandy lake {{BLANK}}, collecting smooth pebbles and shiny seashells in buckets.",
    "cn": "孩子們脫下涼鞋，沿著沙質湖岸漫步，把光滑的鵝卵石和閃亮的貝殼收集在水桶裡。"
  },
  {
    "word": "coast",
    "pos": "n.",
    "cn_def": "海岸；沿岸地區",
    "en_def": "the part of the land near the sea; the edge of the land",
    "sentence": "The eastern {{BLANK}} of Taiwan features dramatic rocky cliffs rising steeply from the sparkling deep blue waters.",
    "cn": "台灣東部海岸以從閃爍深藍海水中陡峭拔起的壯麗岩石峭壁為特色。"
  },
  {
    "word": "stream",
    "pos": "n. / v.",
    "cn_def": "小溪；溪流；流動",
    "en_def": "a small, narrow river of water; continuous flow of liquid",
    "sentence": "Hikers filled their reusable aluminum bottles with cold fresh water running down from the clean alpine mountain {{BLANK}}.",
    "cn": "登山客用乾淨的高山小溪流淌而下的冰涼清泉，裝滿了他們的可重複使用鋁製水壺。"
  },
  {
    "word": "waterfall",
    "pos": "n.",
    "cn_def": "瀑布",
    "en_def": "a cascade of water falling from a height, formed when a river falls steeply",
    "sentence": "Tourists took pictures of the breathtaking mountain {{BLANK}}, whose thundering white spray formed a vibrant rainbow in the sun.",
    "cn": "遊客拍攝了令人驚嘆的高山瀑布，其轟鳴的白色水花在陽光下形成了一道生動的彩虹。"
  },
  {
    "word": "pool",
    "pos": "n.",
    "cn_def": "水池；游泳池",
    "en_def": "a small body of still water; an artificial swimming pool",
    "sentence": "After swimming ten laps in the outdoor Olympic {{BLANK}}, Mark rested on a lounge chair beside the cool blue water.",
    "cn": "在室外奧林匹克游泳池游了十趟之後，馬克在冰涼碧藍池水旁的休閒椅上休息。"
  },
  {
    "word": "pond",
    "pos": "n.",
    "cn_def": "池塘",
    "en_def": "a small body of still water formed naturally or hollowing out",
    "sentence": "Green frogs croaked loudly among the blooming water lilies floating on the surface of the quiet farm {{BLANK}}.",
    "cn": "在靜謐農場池塘水面上漂浮的盛開睡蓮叢中，綠色的青蛙大聲地鳴叫著。"
  },
  {
    "word": "wave",
    "pos": "n. / v.",
    "cn_def": "海浪；波浪；揮手",
    "en_def": "a ridge of water moving on the surface of water; to move the hand",
    "sentence": "Surfers paddled their boards into the sea, waiting patiently for a massive ocean {{BLANK}} to carry them back to the beach.",
    "cn": "衝浪客將衝浪板划向海中，耐心等待一股巨大的海浪將他們載回海灘。"
  }
];

const MCQS = [
  {
    "q": "Photographers love to hike into deep mountain reserves to document the untouched beauty of raw ______.",
    "options": [
      "pool",
      "nature",
      "pond",
      "wave"
    ],
    "answer": 1,
    "cn": "攝影師喜歡徒步深入高山保護區，記錄原始大自然未受破壞的壯麗景色。 【選項解析】(A) pool (B) nature 大自然 (C) pond (D) wave。untouched beauty of raw nature。",
    "vocabIndex": 0
  },
  {
    "q": "Eating fresh organic fruit without artificial preservatives is considered a healthy ______ dietary habit.",
    "options": [
      "natural",
      "stormy",
      "humid",
      "snowy"
    ],
    "answer": 0,
    "cn": "食用無人工防腐劑的新鮮有機水果，被認為是一種健康的天然飲食習慣。 【選項解析】(A) stormy (B) natural 天然的 (C) humid (D) snowy。healthy natural dietary habit。",
    "vocabIndex": 1
  },
  {
    "q": "The Atlantic ______ separates the Americas from Europe and Africa, serving as a vital commercial shipping lane.",
    "options": [
      "pond",
      "stream",
      "pool",
      "ocean"
    ],
    "answer": 3,
    "cn": "大西洋將美洲與歐洲和非洲分開，是一條至關重要的商業海上航道。 【選項解析】(A) pond (B) stream (C) ocean 大洋 (D) pool。Atlantic Ocean（大西洋）。",
    "vocabIndex": 2
  },
  {
    "q": "We stood on the sandy lake ______ at twilight, watching the golden orange sunset reflect across the quiet water.",
    "options": [
      "waterfall",
      "wave",
      "shore",
      "stream"
    ],
    "answer": 2,
    "cn": "黃昏時分我們站在沙質湖岸上，看著金橘色的日落倒映在平靜的水面上。 【選項解析】(A) shore 岸邊 (B) wave (C) waterfall (D) stream。sandy lake shore 指沙質湖岸。",
    "vocabIndex": 3
  },
  {
    "q": "Driving along the scenic highway following the Pacific ______, travelers admired rugged cliffs rising above the sea.",
    "options": [
      "pond",
      "pool",
      "waterfall",
      "coast"
    ],
    "answer": 3,
    "cn": "沿著沿太平洋海岸行駛的景觀公路開車，旅客讚歎著拔起於海面上的崎嶇峭壁。 【選項解析】(A) pond (B) pool (C) coast 海岸 (D) waterfall。Pacific coast（太平洋海岸）。",
    "vocabIndex": 4
  },
  {
    "q": "Cold mountain water flowed swiftly along the rocky ______, providing a home for rare native freshwater trout.",
    "options": [
      "ocean",
      "stream",
      "shore",
      "wave"
    ],
    "answer": 1,
    "cn": "高山冷冽的溪水沿著多石的小溪急速流淌，為罕見的本土淡水鱒魚提供了棲息地。 【選項解析】(A) stream 溪流 (B) ocean (C) shore (D) wave。rocky stream 指多石的小溪。",
    "vocabIndex": 5
  },
  {
    "q": "The Shifen ______ in Pingxi is often praised as the Little Niagara of Taiwan due to its broad curtain of falling water.",
    "options": [
      "waterfall",
      "pool",
      "pond",
      "shore"
    ],
    "answer": 0,
    "cn": "平溪的十分瀑布因其寬闊的水簾而經常被譽為台灣的小尼加拉瓜瀑布。 【選項解析】(A) pool (B) waterfall 瀑布 (C) pond (D) shore。Shifen Waterfall（十分瀑布）。",
    "vocabIndex": 6
  },
  {
    "q": "The luxury hotel features a heated indoor swimming ______ where guests can exercise comfortably during the winter.",
    "options": [
      "stream",
      "coast",
      "pool",
      "ocean"
    ],
    "answer": 2,
    "cn": "這家豪華飯店設有溫水室內游泳池，客人可以在冬季舒適地進行鍛鍊。 【選項解析】(A) stream (B) coast (C) pool 游泳池 (D) ocean。indoor swimming pool 指室內游泳池。",
    "vocabIndex": 7
  },
  {
    "q": "Yellow ducklings swam in a neat line behind their mother across the tranquil surface of the village ______.",
    "options": [
      "ocean",
      "waterfall",
      "shore",
      "pond"
    ],
    "answer": 3,
    "cn": "黃色的小鴨子排成整齊的隊伍跟在鴨媽媽身後，游過鄉村池塘平靜的水面。 【選項解析】(A) ocean (B) waterfall (C) shore (D) pond 池塘。village pond 指鄉村池塘。",
    "vocabIndex": 8
  },
  {
    "q": "A towering ocean ______ crashed against the sea wall, sending white sea foam flying high into the windy air.",
    "options": [
      "wave",
      "pool",
      "pond",
      "stream"
    ],
    "answer": 0,
    "cn": "高聳的海浪撞擊在防波堤上，將白色的海浪泡沫高高拋入起風的空中。 【選項解析】(A) pond (B) pool (C) wave 海浪 (D) stream。ocean wave 指海浪。",
    "vocabIndex": 9
  },
  {
    "q": "Ecotourism encourages travelers to respect wild ______ by not littering or disturbing endangered plant habitats.",
    "options": [
      "pool",
      "nature",
      "pond",
      "wave"
    ],
    "answer": 1,
    "cn": "生態旅遊鼓勵旅行者不亂扔垃圾或不打擾瀕危植物棲息地，以此尊重野生大自然。 【選項解析】(A) nature 大自然 (B) pool (C) pond (D) wave。respect wild nature。",
    "vocabIndex": 0
  },
  {
    "q": "Honey produced by wild bees in mountain forests is a delicious ______ sweetener containing beneficial nutrients.",
    "options": [
      "stormy",
      "humid",
      "natural",
      "snowy"
    ],
    "answer": 2,
    "cn": "高山森林野蜂釀造的蜂蜜是一種美味的天然甜味劑，含有有益人體的營養素。 【選項解析】(A) stormy (B) humid (C) natural 天然的 (D) snowy。natural sweetener 指天然甜味劑。",
    "vocabIndex": 1
  },
  {
    "q": "Marine biologists dive deep into the blue ______ to record the migration patterns of humpback whales.",
    "options": [
      "pond",
      "pool",
      "stream",
      "ocean"
    ],
    "answer": 3,
    "cn": "海洋生物學家潛入蔚藍大洋深處，記錄座頭鯨的遷徙路線模式。 【選項解析】(A) pond (B) pool (C) stream (D) ocean 海洋。deep into the blue ocean。",
    "vocabIndex": 2
  },
  {
    "q": "The shipwrecked sailors safely reached the rocky island ______ and collapsed onto the dry sand in relief.",
    "options": [
      "waterfall",
      "shore",
      "stream",
      "wave"
    ],
    "answer": 1,
    "cn": "遇難的水手安全到達了多岩石的島嶼岸邊，如釋重負地倒在乾燥的沙灘上。 【選項解析】(A) waterfall (B) shore 岸邊 (C) stream (D) wave。rocky island shore 指島嶼岸邊。",
    "vocabIndex": 3
  },
  {
    "q": "Many lighthouses were constructed along the rocky ______ to guide incoming cargo vessels away from hidden reefs.",
    "options": [
      "pool",
      "pond",
      "coast",
      "waterfall"
    ],
    "answer": 2,
    "cn": "岩石海岸沿線修建了許多燈塔，以引導進港貨輪避開暗礁。 【選項解析】(A) coast 海岸 (B) pond (C) pool (D) waterfall。rocky coast 指多岩海岸。",
    "vocabIndex": 4
  },
  {
    "q": "The little girl knelt beside the clear mountain ______ and dipped her hands into the refreshing icy water.",
    "options": [
      "stream",
      "shore",
      "ocean",
      "wave"
    ],
    "answer": 0,
    "cn": "小女孩跪在清澈的高山小溪旁，將雙手浸入清涼冰冽的水中。 【選項解析】(A) ocean (B) shore (C) stream 小溪 (D) wave。clear mountain stream 指清澈高山小溪。",
    "vocabIndex": 5
  },
  {
    "q": "After a long hike up the mountain trail, visitors heard the thundering roar of the spectacular eighty-meter ______.",
    "options": [
      "pool",
      "coast",
      "waterfall",
      "pond"
    ],
    "answer": 2,
    "cn": "沿著山徑長途跋涉後，遊客聽到了壯觀的八十公尺大瀑布轟鳴的咆哮聲。 【選項解析】(A) pool (B) waterfall 瀑布 (C) coast (D) pond。spectacular waterfall（壯觀的瀑布）。",
    "vocabIndex": 6
  },
  {
    "q": "Community centers often host water aerobics classes in the heated public ______ for senior citizens.",
    "options": [
      "ocean",
      "pool",
      "stream",
      "shore"
    ],
    "answer": 1,
    "cn": "社區中心經常在公共溫水游泳池為年長者舉辦水中健美操課程。 【選項解析】(A) ocean (B) pool 游泳池 (C) stream (D) shore。heated public pool 指公共溫水泳池。",
    "vocabIndex": 7
  },
  {
    "q": "Grandfather sits on a wooden bench beside the backyard koi ______, feeding colorful fish every sunny morning.",
    "options": [
      "ocean",
      "waterfall",
      "coast",
      "pond"
    ],
    "answer": 3,
    "cn": "祖父坐在後院錦鯉池旁的木椅上，每個陽光明媚的早晨都會餵食色彩繽紛的魚兒。 【選項解析】(A) ocean (B) waterfall (C) pond 池塘 (D) coast。backyard koi pond 指錦鯉池。",
    "vocabIndex": 8
  },
  {
    "q": "The skillful surfer rode inside the barrel of the powerful rolling ______ all the way to the sandy beach.",
    "options": [
      "wave",
      "pool",
      "stream",
      "pond"
    ],
    "answer": 0,
    "cn": "技術精湛的衝浪好手在強勁翻滾的海浪浪管內滑行，一路滑到了沙灘上。 【選項解析】(A) pond (B) pool (C) stream (D) wave 浪潮/海浪。barrel of the rolling wave。",
    "vocabIndex": 9
  },
  {
    "q": "Living in harmony with Mother ______ is an essential principle taught by many traditional indigenous cultures.",
    "options": [
      "Pond",
      "Wave",
      "Pool",
      "Nature"
    ],
    "answer": 3,
    "cn": "與大自然母親和諧相處是許多傳統原住民文化所傳授的重要基本原則。 【選項解析】(A) Nature 大自然 (B) Wave (C) Pool (D) Pond。Mother Nature 指大自然母親。",
    "vocabIndex": 0
  },
  {
    "q": "Marble is a durable ______ stone created from limestone under immense heat and pressure deep within Earth's crust.",
    "options": [
      "humid",
      "stormy",
      "natural",
      "snowy"
    ],
    "answer": 2,
    "cn": "大理石是由石灰岩在地殼深處巨大的高溫高壓下形成的耐用天然石材。 【選項解析】(A) humid (B) stormy (C) natural 天然的 (D) snowy。durable natural stone。",
    "vocabIndex": 1
  },
  {
    "q": "Container vessels take roughly two weeks to navigate across the vast Pacific ______ from Asia to North America.",
    "options": [
      "ocean",
      "pool",
      "stream",
      "pond"
    ],
    "answer": 0,
    "cn": "貨櫃船大約需要兩週時間才能橫渡遼闊的太平洋從亞洲駛向北美。 【選項解析】(A) stream (B) pool (C) ocean 大洋 (D) pond。vast Pacific Ocean。",
    "vocabIndex": 2
  },
  {
    "q": "Flocks of white seagulls landed along the ocean ______, pecking at tiny crabs left behind by the receding tide.",
    "options": [
      "waterfall",
      "shore",
      "stream",
      "wave"
    ],
    "answer": 1,
    "cn": "成群的白海鷗降落在海岸邊，啄食退潮後留下的微小螃蟹。 【選項解析】(A) waterfall (B) stream (C) shore 海岸/岸邊 (D) wave。along the ocean shore。",
    "vocabIndex": 3
  },
  {
    "q": "High tide produced rolling white ______ that swept away the elaborate sandcastles children had built on the beach.",
    "options": [
      "ponds",
      "pools",
      "streams",
      "waves"
    ],
    "answer": 3,
    "cn": "漲潮時翻滾的白浪沖走了孩子們在海灘上建造的精美沙堡。 【選項解析】(A) ponds (B) pools (C) streams (D) waves 海浪。rolling white waves 指滾滾白浪。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "nature": {
    "pos": "n.",
    "en_def": "the physical world including plants, animals, and landscapes",
    "cn_def": "大自然；自然界；天性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the physical world including plants, animals, and landscapes",
        "cn_def": "大自然；自然界；天性"
      }
    ]
  },
  "natural": {
    "pos": "adj.",
    "en_def": "existing in or caused by nature; not made or caused by humankind",
    "cn_def": "自然的；天然的；天生的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "existing in or caused by nature; not made or caused by humankind",
        "cn_def": "自然的；天然的；天生的"
      }
    ]
  },
  "ocean": {
    "pos": "n.",
    "en_def": "a very large expanse of sea, in particular each of the main areas",
    "cn_def": "海洋；大洋",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a very large expanse of sea, in particular each of the main areas",
        "cn_def": "海洋；大洋"
      }
    ]
  },
  "shore": {
    "pos": "n.",
    "en_def": "the land along the edge of a sea, lake, or other large body of water",
    "cn_def": "岸；濱；海岸",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the land along the edge of a sea, lake, or other large body of water",
        "cn_def": "岸；濱；海岸"
      }
    ]
  },
  "coast": {
    "pos": "n.",
    "en_def": "the part of the land near the sea; the edge of the land",
    "cn_def": "海岸；沿岸地區",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the part of the land near the sea; the edge of the land",
        "cn_def": "海岸；沿岸地區"
      }
    ]
  },
  "stream": {
    "pos": "n. / v.",
    "en_def": "a small, narrow river of water; continuous flow of liquid",
    "cn_def": "小溪；溪流；流動",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a small, narrow river of water; continuous flow of liquid",
        "cn_def": "小溪；溪流；流動"
      }
    ]
  },
  "waterfall": {
    "pos": "n.",
    "en_def": "a cascade of water falling from a height, formed when a river falls steeply",
    "cn_def": "瀑布",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a cascade of water falling from a height, formed when a river falls steeply",
        "cn_def": "瀑布"
      }
    ]
  },
  "pool": {
    "pos": "n.",
    "en_def": "a small body of still water; an artificial swimming pool",
    "cn_def": "水池；游泳池",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small body of still water; an artificial swimming pool",
        "cn_def": "水池；游泳池"
      }
    ]
  },
  "pond": {
    "pos": "n.",
    "en_def": "a small body of still water formed naturally or hollowing out",
    "cn_def": "池塘",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small body of still water formed naturally or hollowing out",
        "cn_def": "池塘"
      }
    ]
  },
  "wave": {
    "pos": "n. / v.",
    "en_def": "a ridge of water moving on the surface of water; to move the hand",
    "cn_def": "海浪；波浪；揮手",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a ridge of water moving on the surface of water; to move the hand",
        "cn_def": "海浪；波浪；揮手"
      }
    ]
  },
  "waves": {
    "pos": "",
    "en_def": "",
    "cn_def": "海浪",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "海浪"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
