// Topic 17 Subunit 2 Quiz Data: Sculpture, Crafts & Materials 雕塑、工藝與媒材
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T17 S02 - Sculpture, Crafts & Materials 雕塑、工藝與媒材",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "sculpture",
    "pos": "n.",
    "cn_def": "雕塑",
    "en_def": "a work of art made by shaping stone, wood or metal",
    "sentence": "A huge metal {{BLANK}} stands in front of the city hall, and children like to climb on its smooth base.",
    "cn": "一座巨大的金屬雕塑矗立在市政府前,孩子們喜歡爬上它光滑的底座。"
  },
  {
    "word": "sculptor",
    "pos": "n.",
    "cn_def": "雕塑家",
    "en_def": "an artist who makes sculptures",
    "sentence": "The {{BLANK}} worked on the stone lion for two years, but he refused to show anyone until it was finished.",
    "cn": "這位雕塑家花了兩年雕刻這隻石獅,但在完成前他拒絕讓任何人看。"
  },
  {
    "word": "sculpt",
    "pos": "v.",
    "cn_def": "雕塑;塑造",
    "en_def": "to make a shape from stone, wood or clay",
    "sentence": "During the summer camp, the kids learned to {{BLANK}} animals from soft soap, and they proudly took them home to their parents.",
    "cn": "夏令營期間,孩子們學會用柔軟的肥皂雕塑動物,並驕傲地把作品帶回家給父母。"
  },
  {
    "word": "chisel",
    "pos": "n.",
    "cn_def": "鑿子",
    "en_def": "a metal tool with a sharp end for cutting wood or stone",
    "sentence": "He hit the {{BLANK}} gently with a hammer, and small pieces of wood fell to the floor around him.",
    "cn": "他用鐵鎚輕敲鑿子,小木屑掉落在他周圍的地板上。"
  },
  {
    "word": "wax",
    "pos": "n.",
    "cn_def": "蠟",
    "en_def": "a soft substance used to make candles and models",
    "sentence": "The museum shows famous people made of {{BLANK}}, so visitors take selfies with them although they are not real.",
    "cn": "這間博物館展示用蠟做成的名人像,所以雖然他們不是真人,遊客還是會和他們自拍。"
  },
  {
    "word": "cast",
    "pos": "v.",
    "cn_def": "鑄造",
    "en_def": "to make an object by pouring hot metal into a shape",
    "sentence": "The workers {{BLANK}} the bronze bell in a special mould, and then they waited a whole week for it to cool down.",
    "cn": "工人們在特製的模具中鑄造這口銅鐘,然後等了一整個星期讓它冷卻。"
  },
  {
    "word": "carve",
    "pos": "v.",
    "cn_def": "雕刻",
    "en_def": "to cut wood or stone into a shape",
    "sentence": "My grandfather likes to {{BLANK}} small birds from old pieces of wood, and he gives them to his grandchildren as gifts.",
    "cn": "我爺爺喜歡用舊木頭雕刻小鳥,並把它們當禮物送給孫子孫女。"
  },
  {
    "word": "installation",
    "pos": "n.",
    "cn_def": "裝置藝術",
    "en_def": "a large artwork that fills a room or space",
    "sentence": "The {{BLANK}} filled the whole room with hanging paper lanterns, so visitors felt as if they were walking through a dream.",
    "cn": "這件裝置藝術用懸掛的紙燈籠填滿整個房間,讓觀眾彷彿走在夢境之中。"
  },
  {
    "word": "potter",
    "pos": "n.",
    "cn_def": "陶藝家",
    "en_def": "a person who makes pots and dishes from clay",
    "sentence": "The {{BLANK}} in Yingge let us try making a cup, but mine looked strange because the clay kept moving.",
    "cn": "鶯歌的陶藝家讓我們試做一個杯子,但我的看起來很奇怪,因為陶土一直移動。"
  },
  {
    "word": "potter's wheel",
    "pos": "n.phr.",
    "cn_def": "拉坯轉盤",
    "en_def": "a turning round plate used to shape clay",
    "sentence": "She sat at the {{BLANK}} for hours, and she slowly shaped the wet clay into a tall, thin vase.",
    "cn": "她在拉坯轉盤前坐了好幾個小時,慢慢把濕陶土塑成一個又高又細的花瓶。"
  },
  {
    "word": "glaze",
    "pos": "n.",
    "cn_def": "釉",
    "en_def": "a shiny coating put on pottery before it is fired",
    "sentence": "After the bowls dried, we painted a blue {{BLANK}} on them, so they became shiny and waterproof after firing.",
    "cn": "碗乾了之後,我們在上面塗了一層藍色的釉,所以燒製後它們變得光亮又防水。"
  },
  {
    "word": "embroidery",
    "pos": "n.",
    "cn_def": "刺繡",
    "en_def": "pictures sewn onto cloth with coloured thread",
    "sentence": "Her grandmother's {{BLANK}} shows flowers and birds in bright silk thread, and every tiny stitch was made by hand.",
    "cn": "她奶奶的刺繡用鮮豔的絲線描繪花鳥,每一個小針腳都是手工縫製的。"
  },
  {
    "word": "knit",
    "pos": "v.",
    "cn_def": "編織;打毛線",
    "en_def": "to make clothes from wool using two long needles",
    "sentence": "My mother likes to {{BLANK}} scarves in winter, and she usually gives them to friends before Chinese New Year.",
    "cn": "我媽媽冬天喜歡打毛線織圍巾,而且她通常會在農曆新年前把圍巾送給朋友。"
  },
  {
    "word": "quilt",
    "pos": "n.",
    "cn_def": "拼布被",
    "en_def": "a warm bed cover made of many pieces of cloth",
    "sentence": "The women in the village made a {{BLANK}} from old clothes, and each square tells a story about a family.",
    "cn": "村裡的婦女用舊衣服做了一條拼布被,每一塊方格都訴說著一個家庭的故事。"
  },
  {
    "word": "origami",
    "pos": "n.",
    "cn_def": "摺紙",
    "en_def": "the Japanese art of folding paper into shapes",
    "sentence": "We learned {{BLANK}} in art class and folded a hundred paper cranes, because our classmate was sick in hospital.",
    "cn": "我們在美術課學了摺紙,折了一百隻紙鶴,因為我們的同學生病住院了。"
  },
  {
    "word": "paper-cutting",
    "pos": "n.",
    "cn_def": "剪紙",
    "en_def": "the art of cutting paper into pretty patterns",
    "sentence": "Red {{BLANK}} decorations appear on many windows during Lunar New Year, and they usually show lucky words or animals.",
    "cn": "農曆新年期間,許多窗戶上都會出現紅色的剪紙裝飾,通常是吉祥字或動物圖案。"
  },
  {
    "word": "woodcut",
    "pos": "n.",
    "cn_def": "木刻版畫",
    "en_def": "a print made from a picture cut into wood",
    "sentence": "The artist carved the design into a block of wood, and then she pressed it on paper to make a {{BLANK}}.",
    "cn": "這位藝術家把圖案刻在木塊上,然後壓印在紙上製作出一幅木刻版畫。"
  },
  {
    "word": "stained glass",
    "pos": "n.phr.",
    "cn_def": "彩繪玻璃",
    "en_def": "coloured glass used to make pictures in windows",
    "sentence": "Sunlight shone through the {{BLANK}} windows of the church, and colourful patterns danced across the floor.",
    "cn": "陽光穿過教堂的彩繪玻璃窗,繽紛的圖案在地板上舞動。"
  },
  {
    "word": "collage",
    "pos": "n.",
    "cn_def": "拼貼畫",
    "en_def": "a picture made by sticking paper and photos onto a surface",
    "sentence": "We cut pictures out of old magazines to make a {{BLANK}} about our dreams, and the teacher hung them on the classroom wall.",
    "cn": "我們從舊雜誌剪下圖片,做了一幅關於夢想的拼貼畫,老師把它們掛在教室牆上。"
  },
  {
    "word": "craft fair",
    "pos": "n.phr.",
    "cn_def": "手作市集",
    "en_def": "an event where people sell things they have made by hand",
    "sentence": "I bought a handmade leather wallet at the {{BLANK}} last weekend, and the seller even printed my name on it.",
    "cn": "上週末我在手作市集買了一個手工皮夾,賣家甚至幫我在上面印了名字。"
  },
  {
    "word": "handicraft",
    "pos": "n.",
    "cn_def": "手工藝",
    "en_def": "a skilled activity of making things by hand",
    "sentence": "Many tourists buy local {{BLANK}} such as bamboo baskets, because they want a real souvenir rather than a cheap plastic toy.",
    "cn": "許多遊客會買竹籃之類的在地手工藝品,因為他們想要真正的紀念品,而不是廉價的塑膠玩具。"
  },
  {
    "word": "jewellery",
    "pos": "n.",
    "cn_def": "珠寶首飾",
    "en_def": "rings, necklaces and other decorations you wear",
    "sentence": "She designs silver {{BLANK}} in her small workshop, and she sells her rings and necklaces online to customers around the world.",
    "cn": "她在小工作室裡設計銀首飾,並在網路上把戒指和項鍊賣給世界各地的顧客。"
  },
  {
    "word": "goldsmith",
    "pos": "n.",
    "cn_def": "金匠",
    "en_def": "a person who makes things from gold",
    "sentence": "The {{BLANK}} melted the old gold chain carefully, and then he made it into a beautiful wedding ring for the young couple.",
    "cn": "這位金匠小心地熔化舊金鍊,然後為這對年輕夫妻把它打造成一枚美麗的婚戒。"
  },
  {
    "word": "lacquer",
    "pos": "n.",
    "cn_def": "漆",
    "en_def": "a shiny liquid painted on wood to protect and decorate it",
    "sentence": "The wooden box is covered with red {{BLANK}}, and it looks so shiny that you can almost see your face in it.",
    "cn": "這個木盒塗滿了紅漆,看起來亮到你幾乎能在上面看到自己的臉。"
  },
  {
    "word": "stencil",
    "pos": "n.",
    "cn_def": "鏤空模板",
    "en_def": "a sheet with a shape cut out, used to paint the same shape",
    "sentence": "The street artist held a {{BLANK}} against the wall and sprayed paint over it, so the same bird appeared in seconds.",
    "cn": "這位街頭藝術家把鏤空模板貼在牆上並噴漆,同樣的鳥圖案幾秒內就出現了。"
  },
  {
    "word": "metalwork",
    "pos": "n.",
    "cn_def": "金工",
    "en_def": "objects made from metal by skilled workers",
    "sentence": "The exhibition shows beautiful {{BLANK}} from old temples, such as bronze lamps and iron gates with flowers on them.",
    "cn": "這個展覽展示了來自古廟的精美金工作品,例如青銅燈和帶有花朵圖案的鐵門。"
  },
  {
    "word": "bust",
    "pos": "n.",
    "cn_def": "半身像",
    "en_def": "a sculpture of a person's head and shoulders",
    "sentence": "A marble {{BLANK}} of the school's founder stands in the hall, and students sometimes put a hat on it for fun.",
    "cn": "學校創辦人的大理石半身像立在大廳裡,學生有時會為了好玩幫它戴上帽子。"
  },
  {
    "word": "workmanship",
    "pos": "n.",
    "cn_def": "做工;手藝",
    "en_def": "the skill with which something is made",
    "sentence": "The chair is over a hundred years old, but it is still strong because the {{BLANK}} is excellent.",
    "cn": "這張椅子已經超過一百歲了,但它依然堅固,因為做工非常精良。"
  }
];

const MCQS = [
  {
    "q": "A huge metal _____ stands in front of the city hall, and children like to climb on its smooth base.",
    "options": [
      "reinvention",
      "intellect",
      "applause",
      "sculpture"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The _____ worked on the stone lion for two years, but he refused to show anyone until it was finished.",
    "options": [
      "sculptor",
      "easel",
      "frame",
      "maestro"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "During the summer camp, the kids learned to _____ animals from soft soap, and they proudly took them home to their parents.",
    "options": [
      "retouch",
      "sculpt",
      "ridicule",
      "daydream"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "He hit the _____ gently with a hammer, and small pieces of wood fell to the floor around him.",
    "options": [
      "cartoonist",
      "pixel",
      "chisel",
      "virtuoso"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The museum shows famous people made of _____, so visitors take selfies with them although they are not real.",
    "options": [
      "elegance",
      "wax",
      "versatility",
      "juxtaposition"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The workers _____ the bronze bell in a special mould, and then they waited a whole week for it to cool down.",
    "options": [
      "vandalise",
      "captivate",
      "rework",
      "cast"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "My grandfather likes to _____ small birds from old pieces of wood, and he gives them to his grandchildren as gifts.",
    "options": [
      "transfix",
      "innovate",
      "carve",
      "intrigue"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The _____ filled the whole room with hanging paper lanterns, so visitors felt as if they were walking through a dream.",
    "options": [
      "installation",
      "docent",
      "Impressionism",
      "Surrealism"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The _____ in Yingge let us try making a cup, but mine looked strange because the clay kept moving.",
    "options": [
      "close-up",
      "aperture",
      "potter",
      "valuation"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "She sat at the _____ for hours, and she slowly shaped the wet clay into a tall, thin vase.",
    "options": [
      "contemporary art",
      "creative block",
      "a picture is worth a thousand words",
      "potter's wheel"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "After the bowls dried, we painted a blue _____ on them, so they became shiny and waterproof after firing.",
    "options": [
      "glaze",
      "exclusivity",
      "heist",
      "luminary"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Her grandmother's _____ shows flowers and birds in bright silk thread, and every tiny stitch was made by hand.",
    "options": [
      "reverence",
      "embroidery",
      "risk-taking",
      "virtuoso"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "My mother likes to _____ scarves in winter, and she usually gives them to friends before Chinese New Year.",
    "options": [
      "zoom",
      "captivate",
      "bid",
      "knit"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The women in the village made a _____ from old clothes, and each square tells a story about a family.",
    "options": [
      "imagination",
      "quilt",
      "craftsmanship",
      "collector"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "We learned _____ in art class and folded a hundred paper cranes, because our classmate was sick in hospital.",
    "options": [
      "origami",
      "choreographer",
      "premiere",
      "creativity"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Red _____ decorations appear on many windows during Lunar New Year, and they usually show lucky words or animals.",
    "options": [
      "sophistication",
      "shading",
      "paper-cutting",
      "tripod"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The artist carved the design into a block of wood, and then she pressed it on paper to make a _____.",
    "options": [
      "woodcut",
      "wit",
      "bidder",
      "cartoon"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Sunlight shone through the _____ windows of the church, and colourful patterns danced across the floor.",
    "options": [
      "folk art",
      "stained glass",
      "a hard act to follow",
      "comic book"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "We cut pictures out of old magazines to make a _____ about our dreams, and the teacher hung them on the classroom wall.",
    "options": [
      "snapshot",
      "lyrics",
      "collage",
      "self-expression"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "I bought a handmade leather wallet at the _____ last weekend, and the seller even printed my name on it.",
    "options": [
      "comic book",
      "still life",
      "graphic design",
      "craft fair"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Many tourists buy local _____ such as bamboo baskets, because they want a real souvenir rather than a cheap plastic toy.",
    "options": [
      "musical",
      "creativity",
      "handicraft",
      "flash"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "She designs silver _____ in her small workshop, and she sells her rings and necklaces online to customers around the world.",
    "options": [
      "fascination",
      "jewellery",
      "transcendence",
      "philanthropy"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The _____ melted the old gold chain carefully, and then he made it into a beautiful wedding ring for the young couple.",
    "options": [
      "goldsmith",
      "sophistication",
      "excellence",
      "tone"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The wooden box is covered with red _____, and it looks so shiny that you can almost see your face in it.",
    "options": [
      "font",
      "obscurity",
      "audition",
      "lacquer"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The street artist held a _____ against the wall and sprayed paint over it, so the same bird appeared in seconds.",
    "options": [
      "appropriation",
      "stencil",
      "brushstroke",
      "esteem"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The exhibition shows beautiful _____ from old temples, such as bronze lamps and iron gates with flowers on them.",
    "options": [
      "creator",
      "finesse",
      "shading",
      "metalwork"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "A marble _____ of the school's founder stands in the hall, and students sometimes put a hat on it for fun.",
    "options": [
      "auctioneer",
      "renown",
      "bust",
      "enthusiast"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The chair is over a hundred years old, but it is still strong because the _____ is excellent.",
    "options": [
      "workmanship",
      "illustrator",
      "irony",
      "esteem"
    ],
    "answer": 0,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "sculpture": {
    "pos": "n.",
    "en_def": "a work of art made by shaping stone, wood or metal",
    "cn_def": "雕塑"
  },
  "sculptor": {
    "pos": "n.",
    "en_def": "an artist who makes sculptures",
    "cn_def": "雕塑家"
  },
  "sculpt": {
    "pos": "v.",
    "en_def": "to make a shape from stone, wood or clay",
    "cn_def": "雕塑;塑造"
  },
  "chisel": {
    "pos": "n.",
    "en_def": "a metal tool with a sharp end for cutting wood or stone",
    "cn_def": "鑿子"
  },
  "wax": {
    "pos": "n.",
    "en_def": "a soft substance used to make candles and models",
    "cn_def": "蠟"
  },
  "cast": {
    "pos": "v.",
    "en_def": "to make an object by pouring hot metal into a shape",
    "cn_def": "鑄造"
  },
  "carve": {
    "pos": "v.",
    "en_def": "to cut wood or stone into a shape",
    "cn_def": "雕刻"
  },
  "installation": {
    "pos": "n.",
    "en_def": "a large artwork that fills a room or space",
    "cn_def": "裝置藝術"
  },
  "potter": {
    "pos": "n.",
    "en_def": "a person who makes pots and dishes from clay",
    "cn_def": "陶藝家"
  },
  "potter's wheel": {
    "pos": "n.phr.",
    "en_def": "a turning round plate used to shape clay",
    "cn_def": "拉坯轉盤"
  },
  "glaze": {
    "pos": "n.",
    "en_def": "a shiny coating put on pottery before it is fired",
    "cn_def": "釉"
  },
  "embroidery": {
    "pos": "n.",
    "en_def": "pictures sewn onto cloth with coloured thread",
    "cn_def": "刺繡"
  },
  "knit": {
    "pos": "v.",
    "en_def": "to make clothes from wool using two long needles",
    "cn_def": "編織;打毛線"
  },
  "quilt": {
    "pos": "n.",
    "en_def": "a warm bed cover made of many pieces of cloth",
    "cn_def": "拼布被"
  },
  "origami": {
    "pos": "n.",
    "en_def": "the Japanese art of folding paper into shapes",
    "cn_def": "摺紙"
  },
  "paper-cutting": {
    "pos": "n.",
    "en_def": "the art of cutting paper into pretty patterns",
    "cn_def": "剪紙"
  },
  "woodcut": {
    "pos": "n.",
    "en_def": "a print made from a picture cut into wood",
    "cn_def": "木刻版畫"
  },
  "stained glass": {
    "pos": "n.phr.",
    "en_def": "coloured glass used to make pictures in windows",
    "cn_def": "彩繪玻璃"
  },
  "collage": {
    "pos": "n.",
    "en_def": "a picture made by sticking paper and photos onto a surface",
    "cn_def": "拼貼畫"
  },
  "craft fair": {
    "pos": "n.phr.",
    "en_def": "an event where people sell things they have made by hand",
    "cn_def": "手作市集"
  },
  "handicraft": {
    "pos": "n.",
    "en_def": "a skilled activity of making things by hand",
    "cn_def": "手工藝"
  },
  "jewellery": {
    "pos": "n.",
    "en_def": "rings, necklaces and other decorations you wear",
    "cn_def": "珠寶首飾"
  },
  "goldsmith": {
    "pos": "n.",
    "en_def": "a person who makes things from gold",
    "cn_def": "金匠"
  },
  "lacquer": {
    "pos": "n.",
    "en_def": "a shiny liquid painted on wood to protect and decorate it",
    "cn_def": "漆"
  },
  "stencil": {
    "pos": "n.",
    "en_def": "a sheet with a shape cut out, used to paint the same shape",
    "cn_def": "鏤空模板"
  },
  "metalwork": {
    "pos": "n.",
    "en_def": "objects made from metal by skilled workers",
    "cn_def": "金工"
  },
  "bust": {
    "pos": "n.",
    "en_def": "a sculpture of a person's head and shoulders",
    "cn_def": "半身像"
  },
  "workmanship": {
    "pos": "n.",
    "en_def": "the skill with which something is made",
    "cn_def": "做工;手藝"
  },
  "reinvention": {
    "pos": "n.",
    "en_def": "changing yourself or something completely",
    "cn_def": "重新塑造;改頭換面"
  },
  "intellect": {
    "pos": "n.",
    "en_def": "the ability to think and understand ideas",
    "cn_def": "智力;才智"
  },
  "applause": {
    "pos": "n.",
    "en_def": "the sound of people clapping",
    "cn_def": "掌聲"
  },
  "easel": {
    "pos": "n.",
    "en_def": "a wooden stand that holds a painting while you work",
    "cn_def": "畫架"
  },
  "frame": {
    "pos": "n.",
    "en_def": "the border of wood or metal around a picture",
    "cn_def": "畫框"
  },
  "maestro": {
    "pos": "n.",
    "en_def": "a great musician or conductor",
    "cn_def": "大師;名指揮"
  },
  "retouch": {
    "pos": "v.",
    "en_def": "to improve a photo by making small changes",
    "cn_def": "修圖"
  },
  "ridicule": {
    "pos": "v.",
    "en_def": "to laugh at someone in an unkind way",
    "cn_def": "嘲笑"
  },
  "daydream": {
    "pos": "v.",
    "en_def": "to think pleasant thoughts that take you away from the present",
    "cn_def": "做白日夢"
  },
  "cartoonist": {
    "pos": "n.",
    "en_def": "a person who draws funny pictures or comic strips",
    "cn_def": "漫畫家"
  },
  "pixel": {
    "pos": "n.",
    "en_def": "one of the tiny dots that make a digital image",
    "cn_def": "像素"
  },
  "virtuoso": {
    "pos": "n.",
    "en_def": "a person with great skill, especially in music",
    "cn_def": "大師;名家"
  },
  "elegance": {
    "pos": "n.",
    "en_def": "the quality of being graceful and stylish",
    "cn_def": "優雅"
  },
  "versatility": {
    "pos": "n.",
    "en_def": "the ability to do many different things well",
    "cn_def": "多才多藝;多樣性"
  },
  "juxtaposition": {
    "pos": "n.",
    "en_def": "placing two different things side by side",
    "cn_def": "並置;對比"
  },
  "vandalise": {
    "pos": "v.",
    "en_def": "to damage property on purpose",
    "cn_def": "蓄意破壞"
  },
  "captivate": {
    "pos": "v.",
    "en_def": "to hold someone's attention completely",
    "cn_def": "吸引;迷住"
  },
  "rework": {
    "pos": "v.",
    "en_def": "to change something in order to improve it",
    "cn_def": "修改;重做"
  },
  "transfix": {
    "pos": "v.",
    "en_def": "to make someone unable to move because of shock or interest",
    "cn_def": "使呆住"
  },
  "innovate": {
    "pos": "v.",
    "en_def": "to introduce new ideas or methods",
    "cn_def": "創新"
  },
  "intrigue": {
    "pos": "v.",
    "en_def": "to make someone very interested and curious",
    "cn_def": "引起好奇"
  },
  "docent": {
    "pos": "n.",
    "en_def": "a trained guide who explains art in a museum",
    "cn_def": "導覽員"
  },
  "impressionism": {
    "pos": "n.",
    "en_def": "a style of painting that shows light and quick impressions",
    "cn_def": "印象派"
  },
  "surrealism": {
    "pos": "n.",
    "en_def": "an art style that shows strange, dreamlike scenes",
    "cn_def": "超現實主義"
  },
  "close-up": {
    "pos": "n.",
    "en_def": "a photo taken from very near",
    "cn_def": "特寫"
  },
  "aperture": {
    "pos": "n.",
    "en_def": "the hole in a camera lens that controls light",
    "cn_def": "光圈"
  },
  "valuation": {
    "pos": "n.",
    "en_def": "a judgement of how much something is worth",
    "cn_def": "估價"
  },
  "contemporary art": {
    "pos": "n.phr.",
    "en_def": "art made in recent times",
    "cn_def": "當代藝術"
  },
  "creative block": {
    "pos": "n.phr.",
    "en_def": "a time when you cannot produce new ideas",
    "cn_def": "創作瓶頸"
  },
  "a picture is worth a thousand words": {
    "pos": "n.phr.",
    "en_def": "an image can explain more than a long description",
    "cn_def": "一圖勝千言"
  },
  "exclusivity": {
    "pos": "n.",
    "en_def": "the quality of being available only to a few people",
    "cn_def": "獨佔性;排他性"
  },
  "heist": {
    "pos": "n.",
    "en_def": "a carefully planned robbery",
    "cn_def": "搶劫;竊案"
  },
  "luminary": {
    "pos": "n.",
    "en_def": "a famous and respected person in a field",
    "cn_def": "傑出人物;泰斗"
  },
  "reverence": {
    "pos": "n.",
    "en_def": "deep respect",
    "cn_def": "崇敬"
  },
  "risk-taking": {
    "pos": "n.",
    "en_def": "doing things that might fail in order to achieve something",
    "cn_def": "冒險"
  },
  "zoom": {
    "pos": "v.",
    "en_def": "to make something look closer with a camera",
    "cn_def": "拉近;放大"
  },
  "bid": {
    "pos": "v.",
    "en_def": "to offer a price for something at an auction",
    "cn_def": "出價;競標"
  },
  "imagination": {
    "pos": "n.",
    "en_def": "the ability to form pictures and ideas in your mind",
    "cn_def": "想像力"
  },
  "craftsmanship": {
    "pos": "n.",
    "en_def": "skill in making things by hand",
    "cn_def": "工藝技術;手藝"
  },
  "collector": {
    "pos": "n.",
    "en_def": "a person who gathers valuable objects as a hobby",
    "cn_def": "收藏家"
  },
  "choreographer": {
    "pos": "n.",
    "en_def": "a person who plans the movements of a dance",
    "cn_def": "編舞家"
  },
  "premiere": {
    "pos": "n.",
    "en_def": "the first public performance of a film or play",
    "cn_def": "首映;首演"
  },
  "creativity": {
    "pos": "n.",
    "en_def": "the ability to make new and original things",
    "cn_def": "創造力"
  },
  "sophistication": {
    "pos": "n.",
    "en_def": "a high level of skill and complexity",
    "cn_def": "精緻;成熟老練"
  },
  "shading": {
    "pos": "n.",
    "en_def": "darker areas in a drawing that show shadow and shape",
    "cn_def": "陰影明暗"
  },
  "tripod": {
    "pos": "n.",
    "en_def": "a three-legged stand that holds a camera steady",
    "cn_def": "三腳架"
  },
  "wit": {
    "pos": "n.",
    "en_def": "the ability to say clever and funny things",
    "cn_def": "機智;風趣"
  },
  "bidder": {
    "pos": "n.",
    "en_def": "a person who offers money at an auction",
    "cn_def": "競標者"
  },
  "cartoon": {
    "pos": "n.",
    "en_def": "a funny drawing or animated film",
    "cn_def": "卡通;漫畫"
  },
  "folk art": {
    "pos": "n.phr.",
    "en_def": "traditional art made by ordinary people in a region",
    "cn_def": "民俗藝術"
  },
  "a hard act to follow": {
    "pos": "n.phr.",
    "en_def": "someone so good that the next person will seem worse",
    "cn_def": "難以超越的榜樣"
  },
  "comic book": {
    "pos": "n.phr.",
    "en_def": "a magazine that tells stories in pictures",
    "cn_def": "漫畫書"
  },
  "snapshot": {
    "pos": "n.",
    "en_def": "a quick, informal photo",
    "cn_def": "快照;隨手拍"
  },
  "lyrics": {
    "pos": "n.",
    "en_def": "the words of a song",
    "cn_def": "歌詞"
  },
  "self-expression": {
    "pos": "n.",
    "en_def": "showing your feelings and ideas through art or actions",
    "cn_def": "自我表達"
  },
  "still life": {
    "pos": "n.phr.",
    "en_def": "a picture of objects such as fruit, flowers or bottles",
    "cn_def": "靜物畫"
  },
  "graphic design": {
    "pos": "n.phr.",
    "en_def": "the art of combining words and pictures for posters, websites etc.",
    "cn_def": "平面設計"
  },
  "musical": {
    "pos": "n.",
    "en_def": "a play or film with many songs and dances",
    "cn_def": "音樂劇"
  },
  "flash": {
    "pos": "n.",
    "en_def": "a bright light on a camera for dark places",
    "cn_def": "閃光燈"
  },
  "fascination": {
    "pos": "n.",
    "en_def": "a very strong interest",
    "cn_def": "著迷"
  },
  "transcendence": {
    "pos": "n.",
    "en_def": "going beyond ordinary experience",
    "cn_def": "超越;超凡"
  },
  "philanthropy": {
    "pos": "n.",
    "en_def": "giving money to help others",
    "cn_def": "慈善事業"
  },
  "excellence": {
    "pos": "n.",
    "en_def": "the quality of being extremely good",
    "cn_def": "卓越"
  },
  "tone": {
    "pos": "n.",
    "en_def": "how light or dark a colour is",
    "cn_def": "色調明暗"
  },
  "font": {
    "pos": "n.",
    "en_def": "a set of letters in one style and size",
    "cn_def": "字型"
  },
  "obscurity": {
    "pos": "n.",
    "en_def": "the state of being unknown",
    "cn_def": "默默無聞"
  },
  "audition": {
    "pos": "n.",
    "en_def": "a short performance to get a role in a show",
    "cn_def": "試鏡;甄選"
  },
  "appropriation": {
    "pos": "n.",
    "en_def": "taking something from another person or culture and using it",
    "cn_def": "挪用"
  },
  "brushstroke": {
    "pos": "n.",
    "en_def": "a single mark made by a paintbrush",
    "cn_def": "筆觸"
  },
  "esteem": {
    "pos": "n.",
    "en_def": "respect and admiration",
    "cn_def": "尊敬;敬重"
  },
  "creator": {
    "pos": "n.",
    "en_def": "a person who makes something new",
    "cn_def": "創作者"
  },
  "finesse": {
    "pos": "n.",
    "en_def": "great skill and delicate care",
    "cn_def": "精巧;手法細膩"
  },
  "auctioneer": {
    "pos": "n.",
    "en_def": "the person who runs an auction",
    "cn_def": "拍賣官"
  },
  "renown": {
    "pos": "n.",
    "en_def": "the state of being famous",
    "cn_def": "名聲;聲望"
  },
  "enthusiast": {
    "pos": "n.",
    "en_def": "a person who is very interested in an activity",
    "cn_def": "愛好者;熱衷者"
  },
  "illustrator": {
    "pos": "n.",
    "en_def": "an artist who draws pictures for books or magazines",
    "cn_def": "插畫家"
  },
  "irony": {
    "pos": "n.",
    "en_def": "a situation that is the opposite of what you expect",
    "cn_def": "諷刺"
  }
};

const EXTRA_GLOSSES = {};
