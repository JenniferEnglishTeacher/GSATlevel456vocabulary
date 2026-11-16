// Topic 17 Subunit 1 Quiz Data: Painting & Drawing 繪畫與素描
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T17 S01 - Painting & Drawing 繪畫與素描",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "painter",
    "pos": "n.",
    "cn_def": "畫家",
    "en_def": "a person who paints pictures",
    "sentence": "My aunt is a {{BLANK}} who works in a small studio by the river, and she sells her pictures at the weekend market.",
    "cn": "我阿姨是一位畫家,在河邊的小工作室工作,而且她週末會在市集賣她的畫。"
  },
  {
    "word": "canvas",
    "pos": "n.",
    "cn_def": "畫布",
    "en_def": "strong cloth that artists paint on",
    "sentence": "The art teacher gave each of us a large white {{BLANK}}, but I felt nervous because I did not know what to paint.",
    "cn": "美術老師給我們每人一張大大的白色畫布,但我覺得很緊張,因為我不知道要畫什麼。"
  },
  {
    "word": "easel",
    "pos": "n.",
    "cn_def": "畫架",
    "en_def": "a wooden stand that holds a painting while you work",
    "sentence": "She set up her {{BLANK}} near the window to catch the morning light, and then she started to paint the old temple.",
    "cn": "她把畫架架在窗邊以捕捉早晨的光線,然後開始畫那座古老的廟宇。"
  },
  {
    "word": "palette",
    "pos": "n.",
    "cn_def": "調色盤",
    "en_def": "a flat board for mixing paint colours",
    "sentence": "He squeezed some blue and yellow onto his {{BLANK}}, and he mixed them slowly until he got the green colour of the hills.",
    "cn": "他在調色盤上擠了一些藍色和黃色,並慢慢調和,直到調出山丘的綠色。"
  },
  {
    "word": "paintbrush",
    "pos": "n.",
    "cn_def": "畫筆",
    "en_def": "a brush used for putting paint on a surface",
    "sentence": "Remember to wash your {{BLANK}} in clean water after class, or the paint will dry and the hairs will become hard.",
    "cn": "下課後記得用清水洗你的畫筆,否則顏料會乾掉,刷毛會變硬。"
  },
  {
    "word": "watercolour",
    "pos": "n.",
    "cn_def": "水彩",
    "en_def": "paint mixed with water; a picture made this way",
    "sentence": "I prefer {{BLANK}} to oil paint because it dries quickly, but it is hard to fix a mistake once the colour is on paper.",
    "cn": "我比較喜歡水彩而不是油畫顏料,因為它乾得快,但顏色一上紙就很難修改錯誤。"
  },
  {
    "word": "oil paint",
    "pos": "n.phr.",
    "cn_def": "油畫顏料",
    "en_def": "thick paint made with oil that dries slowly",
    "sentence": "{{BLANK}} takes several days to dry completely, so the artist works on two or three pictures at the same time.",
    "cn": "油畫顏料需要好幾天才能完全乾燥,所以這位畫家會同時進行兩、三幅畫。"
  },
  {
    "word": "acrylic",
    "pos": "adj.",
    "cn_def": "壓克力的",
    "en_def": "made with a fast-drying plastic-based paint",
    "sentence": "We used {{BLANK}} paint for the school mural because it is cheap and bright, and it does not wash away in the rain.",
    "cn": "我們用壓克力顏料畫學校的壁畫,因為它便宜又鮮豔,而且不會被雨水沖掉。"
  },
  {
    "word": "brushstroke",
    "pos": "n.",
    "cn_def": "筆觸",
    "en_def": "a single mark made by a paintbrush",
    "sentence": "If you stand close to the painting, you can see every thick {{BLANK}}, but from far away the picture looks smooth and calm.",
    "cn": "如果你站在畫作附近,可以看到每一道厚厚的筆觸,但從遠處看,畫面看起來平滑又寧靜。"
  },
  {
    "word": "still life",
    "pos": "n.phr.",
    "cn_def": "靜物畫",
    "en_def": "a picture of objects such as fruit, flowers or bottles",
    "sentence": "For homework we had to paint a {{BLANK}} of fruit on the kitchen table, so I arranged some apples next to a teapot.",
    "cn": "作業是要畫一幅廚房桌上水果的靜物畫,所以我把幾顆蘋果擺在茶壺旁邊。"
  },
  {
    "word": "portrait",
    "pos": "n.",
    "cn_def": "肖像畫",
    "en_def": "a painting, drawing or photo of a person",
    "sentence": "The family asked a local artist to paint a {{BLANK}} of their grandfather, and they hung it in the living room for his ninetieth birthday.",
    "cn": "這家人請當地一位藝術家為爺爺畫一幅肖像畫,並在他九十歲生日時把它掛在客廳。"
  },
  {
    "word": "self-portrait",
    "pos": "n.",
    "cn_def": "自畫像",
    "en_def": "a picture an artist makes of himself or herself",
    "sentence": "Van Gogh painted more than thirty versions of his {{BLANK}}, because he was poor and could not pay models to sit for him.",
    "cn": "梵谷畫了三十多幅自畫像,因為他很窮,付不起錢請模特兒讓他畫。"
  },
  {
    "word": "landscape painting",
    "pos": "n.phr.",
    "cn_def": "風景畫",
    "en_def": "a picture of natural scenery such as hills or rivers",
    "sentence": "Traditional Chinese {{BLANK}} often shows tiny people under huge mountains, and this reminds viewers how small humans are in nature.",
    "cn": "傳統中國山水風景畫常描繪巨大山脈下渺小的人物,這提醒觀者人類在自然中是多麼渺小。"
  },
  {
    "word": "mural",
    "pos": "n.",
    "cn_def": "壁畫",
    "en_def": "a large picture painted on a wall",
    "sentence": "Students painted a colourful {{BLANK}} on the wall of the old train station, and now tourists stop there to take photos.",
    "cn": "學生們在舊火車站的牆上畫了一幅色彩繽紛的壁畫,現在遊客會在那裡停下來拍照。"
  },
  {
    "word": "vanishing point",
    "pos": "n.phr.",
    "cn_def": "消失點",
    "en_def": "the point where parallel lines seem to meet far away",
    "sentence": "Draw the road so that both sides meet at one {{BLANK}} on the horizon, and the street will suddenly look very deep.",
    "cn": "把道路畫成兩側在地平線上的同一個消失點交會,街道就會突然看起來很有深度。"
  },
  {
    "word": "foreground",
    "pos": "n.",
    "cn_def": "前景",
    "en_def": "the part of a picture that looks nearest to you",
    "sentence": "In the {{BLANK}} of the photo you can see a small dog, while the mountains stand quietly far behind it.",
    "cn": "在這張照片的前景中你可以看到一隻小狗,而山脈則靜靜地矗立在牠後方遠處。"
  },
  {
    "word": "background",
    "pos": "n.",
    "cn_def": "背景",
    "en_def": "the part of a picture that looks farthest away",
    "sentence": "The girl in the painting wears a red dress, but the {{BLANK}} is dark grey, so she really stands out.",
    "cn": "畫中的女孩穿著紅色洋裝,但背景是深灰色的,所以她非常突出。"
  },
  {
    "word": "shading",
    "pos": "n.",
    "cn_def": "陰影明暗",
    "en_def": "darker areas in a drawing that show shadow and shape",
    "sentence": "Without any {{BLANK}}, your drawing of the ball looks flat, so add some dark pencil marks on one side.",
    "cn": "沒有任何陰影明暗,你畫的球看起來很扁平,所以在一側加上一些深色鉛筆線條吧。"
  },
  {
    "word": "hue",
    "pos": "n.",
    "cn_def": "色調;色相",
    "en_def": "a colour or shade of a colour",
    "sentence": "The sky turned a warm orange {{BLANK}} just before sunset, and the photographer quickly took out his camera.",
    "cn": "就在日落前,天空變成溫暖的橘色色調,攝影師趕緊拿出相機。"
  },
  {
    "word": "primary colour",
    "pos": "n.phr.",
    "cn_def": "原色",
    "en_def": "red, yellow or blue, which mix to make other colours",
    "sentence": "Red is a {{BLANK}}, and when you mix it with yellow you get orange, so you only need a few tubes of paint.",
    "cn": "紅色是一種原色,把它和黃色混合就會得到橘色,所以你只需要幾管顏料。"
  },
  {
    "word": "charcoal",
    "pos": "n.",
    "cn_def": "炭筆",
    "en_def": "a black stick of burnt wood used for drawing",
    "sentence": "He drew the old fisherman's face in {{BLANK}}, and his fingers became completely black by the end of the lesson.",
    "cn": "他用炭筆畫老漁夫的臉,到課程結束時他的手指全都變黑了。"
  },
  {
    "word": "pastel",
    "pos": "n.",
    "cn_def": "粉彩筆",
    "en_def": "a soft coloured chalk stick used for drawing",
    "sentence": "My little sister loves drawing with {{BLANK}} because the colours are soft, but the dust gets all over her clothes.",
    "cn": "我妹妹喜歡用粉彩筆畫畫,因為顏色很柔和,但粉末會沾得她滿身都是。"
  },
  {
    "word": "sketchbook",
    "pos": "n.",
    "cn_def": "素描本",
    "en_def": "a book of blank pages for drawing",
    "sentence": "She always carries a small {{BLANK}} in her bag, so she can draw interesting people on the MRT.",
    "cn": "她的包包裡總是帶著一本小素描本,這樣她就能在捷運上畫有趣的人。"
  },
  {
    "word": "doodle",
    "pos": "v.",
    "cn_def": "隨手塗鴉",
    "en_def": "to draw small pictures without thinking carefully",
    "sentence": "I often {{BLANK}} in the margins of my notebook during long meetings, but it actually helps me listen better.",
    "cn": "我在冗長的會議中常在筆記本空白處隨手塗鴉,但這其實幫助我聽得更專心。"
  },
  {
    "word": "illustrator",
    "pos": "n.",
    "cn_def": "插畫家",
    "en_def": "an artist who draws pictures for books or magazines",
    "sentence": "The {{BLANK}} spent six months drawing pictures for the children's book, and the story became much more exciting.",
    "cn": "那位插畫家花了六個月為這本童書繪製插圖,故事因此變得精彩許多。"
  },
  {
    "word": "cartoonist",
    "pos": "n.",
    "cn_def": "漫畫家",
    "en_def": "a person who draws funny pictures or comic strips",
    "sentence": "The famous {{BLANK}} draws a funny picture for the newspaper every day, and readers often laugh about politics because of him.",
    "cn": "這位知名的漫畫家每天為報紙畫一幅有趣的漫畫,讀者常因為他而對政治一笑置之。"
  },
  {
    "word": "frame",
    "pos": "n.",
    "cn_def": "畫框",
    "en_def": "the border of wood or metal around a picture",
    "sentence": "We bought a simple wooden {{BLANK}} for my daughter's drawing, and now it hangs proudly in the hallway.",
    "cn": "我們為女兒的畫買了一個簡單的木製畫框,現在它驕傲地掛在走廊上。"
  },
  {
    "word": "tone",
    "pos": "n.",
    "cn_def": "色調明暗",
    "en_def": "how light or dark a colour is",
    "sentence": "The artist used a soft blue {{BLANK}} for the whole picture, so the scene feels calm and a little sad.",
    "cn": "這位畫家整幅畫都用柔和的藍色色調,所以畫面感覺寧靜又帶點憂傷。"
  },
  {
    "word": "blend",
    "pos": "v.",
    "cn_def": "混合;暈染",
    "en_def": "to mix colours smoothly together",
    "sentence": "Use your finger to {{BLANK}} the two colours at the edge, and the sky will change gently from pink to purple.",
    "cn": "用手指在邊緣暈染這兩種顏色,天空就會從粉紅色柔和地漸變成紫色。"
  },
  {
    "word": "colour wheel",
    "pos": "n.phr.",
    "cn_def": "色相環",
    "en_def": "a circle that shows how colours relate to each other",
    "sentence": "Our teacher showed us a {{BLANK}}, and we learned that colours opposite each other look very strong together.",
    "cn": "老師給我們看一個色相環,我們學到彼此相對的顏色放在一起看起來非常強烈。"
  }
];

const MCQS = [
  {
    "q": "My aunt is a _____ who works in a small studio by the river, and she sells her pictures at the weekend market.",
    "options": [
      "prestige",
      "painter",
      "heist",
      "ideal"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The art teacher gave each of us a large white _____, but I felt nervous because I did not know what to paint.",
    "options": [
      "harmony",
      "spotlight",
      "awe",
      "canvas"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "She set up her _____ near the window to catch the morning light, and then she started to paint the old temple.",
    "options": [
      "mastery",
      "bust",
      "easel",
      "sculptor"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "He squeezed some blue and yellow onto his _____, and he mixed them slowly until he got the green colour of the hills.",
    "options": [
      "palette",
      "pedestal",
      "flash",
      "impression"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Remember to wash your _____ in clean water after class, or the paint will dry and the hairs will become hard.",
    "options": [
      "ballet",
      "uniqueness",
      "self-expression",
      "paintbrush"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "I prefer _____ to oil paint because it dries quickly, but it is hard to fix a mistake once the colour is on paper.",
    "options": [
      "transcendence",
      "watercolour",
      "installation",
      "zest"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "_____ takes several days to dry completely, so the artist works on two or three pictures at the same time.",
    "options": [
      "oil paint",
      "art critic",
      "eureka moment",
      "art dealer"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "We used _____ paint for the school mural because it is cheap and bright, and it does not wash away in the rain.",
    "options": [
      "self-indulgent",
      "quirky",
      "acrylic",
      "rhythmic"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "If you stand close to the painting, you can see every thick _____, but from far away the picture looks smooth and calm.",
    "options": [
      "premiere",
      "whimsy",
      "close-up",
      "brushstroke"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "For homework we had to paint a _____ of fruit on the kitchen table, so I arranged some apples next to a teapot.",
    "options": [
      "still life",
      "standing ovation",
      "graphic design",
      "divergent thinking"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The family asked a local artist to paint a _____ of their grandfather, and they hung it in the living room for his ninetieth birthday.",
    "options": [
      "origami",
      "portrait",
      "Romanticism",
      "playwright"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Van Gogh painted more than thirty versions of his _____, because he was poor and could not pay models to sit for him.",
    "options": [
      "sculptor",
      "goldsmith",
      "self-portrait",
      "photographer"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Traditional Chinese _____ often shows tiny people under huge mountains, and this reminds viewers how small humans are in nature.",
    "options": [
      "old master",
      "landscape painting",
      "modern art",
      "art fair"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Students painted a colourful _____ on the wall of the old train station, and now tourists stop there to take photos.",
    "options": [
      "flamboyance",
      "applause",
      "mural",
      "wit"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Draw the road so that both sides meet at one _____ on the horizon, and the street will suddenly look very deep.",
    "options": [
      "price tag",
      "art critic",
      "a hard act to follow",
      "vanishing point"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "In the _____ of the photo you can see a small dog, while the mountains stand quietly far behind it.",
    "options": [
      "foreground",
      "photography",
      "fascination",
      "abstraction"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The girl in the painting wears a red dress, but the _____ is dark grey, so she really stands out.",
    "options": [
      "bust",
      "costume",
      "background",
      "premiere"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Without any _____, your drawing of the ball looks flat, so add some dark pencil marks on one side.",
    "options": [
      "spontaneity",
      "shading",
      "audition",
      "finesse"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The sky turned a warm orange _____ just before sunset, and the photographer quickly took out his camera.",
    "options": [
      "hue",
      "stylus",
      "opera",
      "melody"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Red is a _____, and when you mix it with yellow you get orange, so you only need a few tubes of paint.",
    "options": [
      "art dealer",
      "creative process",
      "art movement",
      "primary colour"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "He drew the old fisherman's face in _____, and his fingers became completely black by the end of the lesson.",
    "options": [
      "aficionado",
      "charcoal",
      "NFT",
      "prestige"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "My little sister loves drawing with _____ because the colours are soft, but the dust gets all over her clothes.",
    "options": [
      "musical",
      "imagery",
      "pastel",
      "busker"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "She always carries a small _____ in her bag, so she can draw interesting people on the MRT.",
    "options": [
      "sketchbook",
      "lacquer",
      "sculpture",
      "playwright"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "I often _____ in the margins of my notebook during long meetings, but it actually helps me listen better.",
    "options": [
      "crystallise",
      "cherish",
      "deconstruct",
      "doodle"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The _____ spent six months drawing pictures for the children's book, and the story became much more exciting.",
    "options": [
      "illustrator",
      "paper-cutting",
      "renown",
      "irony"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The famous _____ draws a funny picture for the newspaper every day, and readers often laugh about politics because of him.",
    "options": [
      "conservator",
      "improvisation",
      "darkroom",
      "cartoonist"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "We bought a simple wooden _____ for my daughter's drawing, and now it hangs proudly in the hallway.",
    "options": [
      "risk-taking",
      "valuation",
      "frame",
      "reproduction"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The artist used a soft blue _____ for the whole picture, so the scene feels calm and a little sad.",
    "options": [
      "signature",
      "tone",
      "premiere",
      "creativity"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Use your finger to _____ the two colours at the edge, and the sky will change gently from pink to purple.",
    "options": [
      "blend",
      "mock",
      "applaud",
      "crystallise"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Our teacher showed us a _____, and we learned that colours opposite each other look very strong together.",
    "options": [
      "contemporary art",
      "colour wheel",
      "gift shop",
      "beauty is in the eye of the beholder"
    ],
    "answer": 1,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "painter": {
    "pos": "n.",
    "en_def": "a person who paints pictures",
    "cn_def": "畫家"
  },
  "canvas": {
    "pos": "n.",
    "en_def": "strong cloth that artists paint on",
    "cn_def": "畫布"
  },
  "easel": {
    "pos": "n.",
    "en_def": "a wooden stand that holds a painting while you work",
    "cn_def": "畫架"
  },
  "palette": {
    "pos": "n.",
    "en_def": "a flat board for mixing paint colours",
    "cn_def": "調色盤"
  },
  "paintbrush": {
    "pos": "n.",
    "en_def": "a brush used for putting paint on a surface",
    "cn_def": "畫筆"
  },
  "watercolour": {
    "pos": "n.",
    "en_def": "paint mixed with water; a picture made this way",
    "cn_def": "水彩"
  },
  "oil paint": {
    "pos": "n.phr.",
    "en_def": "thick paint made with oil that dries slowly",
    "cn_def": "油畫顏料"
  },
  "acrylic": {
    "pos": "adj.",
    "en_def": "made with a fast-drying plastic-based paint",
    "cn_def": "壓克力的"
  },
  "brushstroke": {
    "pos": "n.",
    "en_def": "a single mark made by a paintbrush",
    "cn_def": "筆觸"
  },
  "still life": {
    "pos": "n.phr.",
    "en_def": "a picture of objects such as fruit, flowers or bottles",
    "cn_def": "靜物畫"
  },
  "portrait": {
    "pos": "n.",
    "en_def": "a painting, drawing or photo of a person",
    "cn_def": "肖像畫"
  },
  "self-portrait": {
    "pos": "n.",
    "en_def": "a picture an artist makes of himself or herself",
    "cn_def": "自畫像"
  },
  "landscape painting": {
    "pos": "n.phr.",
    "en_def": "a picture of natural scenery such as hills or rivers",
    "cn_def": "風景畫"
  },
  "mural": {
    "pos": "n.",
    "en_def": "a large picture painted on a wall",
    "cn_def": "壁畫"
  },
  "vanishing point": {
    "pos": "n.phr.",
    "en_def": "the point where parallel lines seem to meet far away",
    "cn_def": "消失點"
  },
  "foreground": {
    "pos": "n.",
    "en_def": "the part of a picture that looks nearest to you",
    "cn_def": "前景"
  },
  "background": {
    "pos": "n.",
    "en_def": "the part of a picture that looks farthest away",
    "cn_def": "背景"
  },
  "shading": {
    "pos": "n.",
    "en_def": "darker areas in a drawing that show shadow and shape",
    "cn_def": "陰影明暗"
  },
  "hue": {
    "pos": "n.",
    "en_def": "a colour or shade of a colour",
    "cn_def": "色調;色相"
  },
  "primary colour": {
    "pos": "n.phr.",
    "en_def": "red, yellow or blue, which mix to make other colours",
    "cn_def": "原色"
  },
  "charcoal": {
    "pos": "n.",
    "en_def": "a black stick of burnt wood used for drawing",
    "cn_def": "炭筆"
  },
  "pastel": {
    "pos": "n.",
    "en_def": "a soft coloured chalk stick used for drawing",
    "cn_def": "粉彩筆"
  },
  "sketchbook": {
    "pos": "n.",
    "en_def": "a book of blank pages for drawing",
    "cn_def": "素描本"
  },
  "doodle": {
    "pos": "v.",
    "en_def": "to draw small pictures without thinking carefully",
    "cn_def": "隨手塗鴉"
  },
  "illustrator": {
    "pos": "n.",
    "en_def": "an artist who draws pictures for books or magazines",
    "cn_def": "插畫家"
  },
  "cartoonist": {
    "pos": "n.",
    "en_def": "a person who draws funny pictures or comic strips",
    "cn_def": "漫畫家"
  },
  "frame": {
    "pos": "n.",
    "en_def": "the border of wood or metal around a picture",
    "cn_def": "畫框"
  },
  "tone": {
    "pos": "n.",
    "en_def": "how light or dark a colour is",
    "cn_def": "色調明暗"
  },
  "blend": {
    "pos": "v.",
    "en_def": "to mix colours smoothly together",
    "cn_def": "混合;暈染"
  },
  "colour wheel": {
    "pos": "n.phr.",
    "en_def": "a circle that shows how colours relate to each other",
    "cn_def": "色相環"
  },
  "prestige": {
    "pos": "n.",
    "en_def": "respect that comes from success or importance",
    "cn_def": "聲望"
  },
  "heist": {
    "pos": "n.",
    "en_def": "a carefully planned robbery",
    "cn_def": "搶劫;竊案"
  },
  "ideal": {
    "pos": "n.",
    "en_def": "a perfect idea or standard you want to reach",
    "cn_def": "理想"
  },
  "harmony": {
    "pos": "n.",
    "en_def": "pleasant musical notes sung or played together",
    "cn_def": "和聲"
  },
  "spotlight": {
    "pos": "n.",
    "en_def": "a strong light pointed at one thing",
    "cn_def": "聚光燈"
  },
  "awe": {
    "pos": "n.",
    "en_def": "a feeling of great respect mixed with wonder",
    "cn_def": "敬畏;驚嘆"
  },
  "mastery": {
    "pos": "n.",
    "en_def": "great skill or knowledge of something",
    "cn_def": "精通;熟練掌握"
  },
  "bust": {
    "pos": "n.",
    "en_def": "a sculpture of a person's head and shoulders",
    "cn_def": "半身像"
  },
  "sculptor": {
    "pos": "n.",
    "en_def": "an artist who makes sculptures",
    "cn_def": "雕塑家"
  },
  "pedestal": {
    "pos": "n.",
    "en_def": "a base on which a statue stands",
    "cn_def": "底座;基座"
  },
  "flash": {
    "pos": "n.",
    "en_def": "a bright light on a camera for dark places",
    "cn_def": "閃光燈"
  },
  "impression": {
    "pos": "n.",
    "en_def": "the feeling or idea you get from something",
    "cn_def": "印象"
  },
  "ballet": {
    "pos": "n.",
    "en_def": "a graceful type of dance that tells a story",
    "cn_def": "芭蕾舞"
  },
  "uniqueness": {
    "pos": "n.",
    "en_def": "the quality of being the only one of its kind",
    "cn_def": "獨特性"
  },
  "self-expression": {
    "pos": "n.",
    "en_def": "showing your feelings and ideas through art or actions",
    "cn_def": "自我表達"
  },
  "transcendence": {
    "pos": "n.",
    "en_def": "going beyond ordinary experience",
    "cn_def": "超越;超凡"
  },
  "installation": {
    "pos": "n.",
    "en_def": "a large artwork that fills a room or space",
    "cn_def": "裝置藝術"
  },
  "zest": {
    "pos": "n.",
    "en_def": "great energy and enthusiasm",
    "cn_def": "熱情;興致"
  },
  "art critic": {
    "pos": "n.phr.",
    "en_def": "a person who writes opinions about art",
    "cn_def": "藝評家"
  },
  "eureka moment": {
    "pos": "n.phr.",
    "en_def": "a sudden moment when you find a great idea",
    "cn_def": "靈光乍現的時刻"
  },
  "art dealer": {
    "pos": "n.phr.",
    "en_def": "a person who buys and sells works of art",
    "cn_def": "藝術經紀商;畫商"
  },
  "self-indulgent": {
    "pos": "adj.",
    "en_def": "doing what pleases yourself without thinking of others",
    "cn_def": "自我陶醉的;放縱自我的"
  },
  "quirky": {
    "pos": "adj.",
    "en_def": "unusual in an interesting way",
    "cn_def": "古靈精怪的;奇特的"
  },
  "rhythmic": {
    "pos": "adj.",
    "en_def": "having a regular repeated pattern of sounds",
    "cn_def": "有節奏的"
  },
  "premiere": {
    "pos": "n.",
    "en_def": "the first public performance of a film or play",
    "cn_def": "首映;首演"
  },
  "whimsy": {
    "pos": "n.",
    "en_def": "playful, unusual humour",
    "cn_def": "奇想;異想天開"
  },
  "close-up": {
    "pos": "n.",
    "en_def": "a photo taken from very near",
    "cn_def": "特寫"
  },
  "standing ovation": {
    "pos": "n.phr.",
    "en_def": "when an audience stands up to clap for a long time",
    "cn_def": "起立鼓掌"
  },
  "graphic design": {
    "pos": "n.phr.",
    "en_def": "the art of combining words and pictures for posters, websites etc.",
    "cn_def": "平面設計"
  },
  "divergent thinking": {
    "pos": "n.phr.",
    "en_def": "thinking of many different answers to one problem",
    "cn_def": "擴散性思考"
  },
  "origami": {
    "pos": "n.",
    "en_def": "the Japanese art of folding paper into shapes",
    "cn_def": "摺紙"
  },
  "romanticism": {
    "pos": "n.",
    "en_def": "an art movement that valued emotion, nature and imagination",
    "cn_def": "浪漫主義"
  },
  "playwright": {
    "pos": "n.",
    "en_def": "a person who writes plays",
    "cn_def": "劇作家"
  },
  "goldsmith": {
    "pos": "n.",
    "en_def": "a person who makes things from gold",
    "cn_def": "金匠"
  },
  "photographer": {
    "pos": "n.",
    "en_def": "a person who takes photographs, often as a job",
    "cn_def": "攝影師"
  },
  "old master": {
    "pos": "n.phr.",
    "en_def": "a great European painter from before about 1800",
    "cn_def": "古典大師"
  },
  "modern art": {
    "pos": "n.phr.",
    "en_def": "art from about the 1860s to the 1970s that broke old rules",
    "cn_def": "現代藝術"
  },
  "art fair": {
    "pos": "n.phr.",
    "en_def": "a large event where galleries show and sell art",
    "cn_def": "藝術博覽會"
  },
  "flamboyance": {
    "pos": "n.",
    "en_def": "a very confident, colourful and showy style",
    "cn_def": "浮誇;張揚"
  },
  "applause": {
    "pos": "n.",
    "en_def": "the sound of people clapping",
    "cn_def": "掌聲"
  },
  "wit": {
    "pos": "n.",
    "en_def": "the ability to say clever and funny things",
    "cn_def": "機智;風趣"
  },
  "price tag": {
    "pos": "n.phr.",
    "en_def": "the cost of something",
    "cn_def": "價格;標價"
  },
  "a hard act to follow": {
    "pos": "n.phr.",
    "en_def": "someone so good that the next person will seem worse",
    "cn_def": "難以超越的榜樣"
  },
  "photography": {
    "pos": "n.",
    "en_def": "the art or job of taking photos",
    "cn_def": "攝影"
  },
  "fascination": {
    "pos": "n.",
    "en_def": "a very strong interest",
    "cn_def": "著迷"
  },
  "abstraction": {
    "pos": "n.",
    "en_def": "art that does not show real objects",
    "cn_def": "抽象"
  },
  "costume": {
    "pos": "n.",
    "en_def": "clothes worn by actors in a show",
    "cn_def": "戲服"
  },
  "spontaneity": {
    "pos": "n.",
    "en_def": "the quality of acting naturally without planning",
    "cn_def": "自發性;隨性"
  },
  "audition": {
    "pos": "n.",
    "en_def": "a short performance to get a role in a show",
    "cn_def": "試鏡;甄選"
  },
  "finesse": {
    "pos": "n.",
    "en_def": "great skill and delicate care",
    "cn_def": "精巧;手法細膩"
  },
  "stylus": {
    "pos": "n.",
    "en_def": "a pen-shaped tool for drawing on a screen",
    "cn_def": "觸控筆"
  },
  "opera": {
    "pos": "n.",
    "en_def": "a play in which the words are sung with an orchestra",
    "cn_def": "歌劇"
  },
  "melody": {
    "pos": "n.",
    "en_def": "a tune; a series of musical notes",
    "cn_def": "旋律"
  },
  "creative process": {
    "pos": "n.phr.",
    "en_def": "the steps people follow to make something new",
    "cn_def": "創作過程"
  },
  "art movement": {
    "pos": "n.phr.",
    "en_def": "a group of artists who share ideas and a style for a period",
    "cn_def": "藝術運動;流派"
  },
  "aficionado": {
    "pos": "n.",
    "en_def": "a person who knows and loves a subject well",
    "cn_def": "行家;狂熱愛好者"
  },
  "nft": {
    "pos": "n.",
    "en_def": "a digital certificate that shows who owns a digital artwork",
    "cn_def": "非同質化代幣"
  },
  "musical": {
    "pos": "n.",
    "en_def": "a play or film with many songs and dances",
    "cn_def": "音樂劇"
  },
  "imagery": {
    "pos": "n.",
    "en_def": "pictures or descriptions that create images in the mind",
    "cn_def": "意象"
  },
  "busker": {
    "pos": "n.",
    "en_def": "a person who performs music in the street for money",
    "cn_def": "街頭藝人"
  },
  "lacquer": {
    "pos": "n.",
    "en_def": "a shiny liquid painted on wood to protect and decorate it",
    "cn_def": "漆"
  },
  "sculpture": {
    "pos": "n.",
    "en_def": "a work of art made by shaping stone, wood or metal",
    "cn_def": "雕塑"
  },
  "crystallise": {
    "pos": "v.",
    "en_def": "to make an idea clear and definite",
    "cn_def": "使具體化;使明確"
  },
  "cherish": {
    "pos": "v.",
    "en_def": "to love and care for something very much",
    "cn_def": "珍惜;珍愛"
  },
  "deconstruct": {
    "pos": "v.",
    "en_def": "to break an idea or object into parts to understand it",
    "cn_def": "解構"
  },
  "paper-cutting": {
    "pos": "n.",
    "en_def": "the art of cutting paper into pretty patterns",
    "cn_def": "剪紙"
  },
  "renown": {
    "pos": "n.",
    "en_def": "the state of being famous",
    "cn_def": "名聲;聲望"
  },
  "irony": {
    "pos": "n.",
    "en_def": "a situation that is the opposite of what you expect",
    "cn_def": "諷刺"
  },
  "conservator": {
    "pos": "n.",
    "en_def": "a person who repairs and protects old works of art",
    "cn_def": "文物修復師"
  },
  "improvisation": {
    "pos": "n.",
    "en_def": "performing without planning beforehand",
    "cn_def": "即興表演"
  },
  "darkroom": {
    "pos": "n.",
    "en_def": "a dark room for developing film photos",
    "cn_def": "暗房"
  },
  "risk-taking": {
    "pos": "n.",
    "en_def": "doing things that might fail in order to achieve something",
    "cn_def": "冒險"
  },
  "valuation": {
    "pos": "n.",
    "en_def": "a judgement of how much something is worth",
    "cn_def": "估價"
  },
  "reproduction": {
    "pos": "n.",
    "en_def": "a copy of a work of art",
    "cn_def": "複製品"
  },
  "signature": {
    "pos": "n.",
    "en_def": "an artist's name written on a work",
    "cn_def": "簽名"
  },
  "creativity": {
    "pos": "n.",
    "en_def": "the ability to make new and original things",
    "cn_def": "創造力"
  },
  "mock": {
    "pos": "v.",
    "en_def": "to laugh at someone and make them look silly",
    "cn_def": "嘲弄"
  },
  "applaud": {
    "pos": "v.",
    "en_def": "to clap or to praise someone's action",
    "cn_def": "鼓掌;讚揚"
  },
  "contemporary art": {
    "pos": "n.phr.",
    "en_def": "art made in recent times",
    "cn_def": "當代藝術"
  },
  "gift shop": {
    "pos": "n.phr.",
    "en_def": "a shop in a museum that sells souvenirs",
    "cn_def": "紀念品店"
  },
  "beauty is in the eye of the beholder": {
    "pos": "n.phr.",
    "en_def": "different people have different ideas of what is beautiful",
    "cn_def": "情人眼裡出西施;美因人而異"
  }
};

const EXTRA_GLOSSES = {};
