// Topic 17 Subunit 5 Quiz Data: Creativity & the Creative Process 創造力與創作過程
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T17 S05 - Creativity & the Creative Process 創造力與創作過程",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "creativity",
    "pos": "n.",
    "cn_def": "創造力",
    "en_def": "the ability to make new and original things",
    "sentence": "The new art programme aims to develop students' {{BLANK}}, so there are no right or wrong answers in class.",
    "cn": "新的藝術課程旨在培養學生的創造力,所以課堂上沒有標準答案。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的",
    "en_def": "good at thinking of new ideas or making things",
    "sentence": "My cousin is very {{BLANK}}, and she turned old jeans into a bag that everyone at school wanted to buy.",
    "cn": "我表妹非常有創意,她把舊牛仔褲改成一個全校都想買的包包。"
  },
  {
    "word": "creator",
    "pos": "n.",
    "cn_def": "創作者",
    "en_def": "a person who makes something new",
    "sentence": "The {{BLANK}} of the popular cartoon was only twenty years old, but his drawings soon appeared on T-shirts everywhere.",
    "cn": "這部熱門卡通的創作者只有二十歲,但他的畫很快就出現在各地的T恤上。"
  },
  {
    "word": "imagination",
    "pos": "n.",
    "cn_def": "想像力",
    "en_def": "the ability to form pictures and ideas in your mind",
    "sentence": "Children have a wonderful {{BLANK}}, and a simple cardboard box can become a spaceship or a castle in their games.",
    "cn": "孩子們擁有奇妙的想像力,一個簡單的紙箱在他們的遊戲中就能變成太空船或城堡。"
  },
  {
    "word": "imagine",
    "pos": "v.",
    "cn_def": "想像",
    "en_def": "to form a picture of something in your mind",
    "sentence": "Close your eyes and {{BLANK}} a quiet beach at sunset, and then try to paint the colours you see.",
    "cn": "閉上眼睛想像日落時寧靜的海灘,然後試著畫出你看到的顏色。"
  },
  {
    "word": "inspire",
    "pos": "v.",
    "cn_def": "啟發;激勵",
    "en_def": "to give someone the wish or idea to do something",
    "sentence": "Her trip to Morocco helped {{BLANK}} a new series of paintings, because the markets were full of bright colours.",
    "cn": "她的摩洛哥之旅啟發了一系列新畫作,因為那裡的市集充滿鮮豔的色彩。"
  },
  {
    "word": "inspired",
    "pos": "adj.",
    "cn_def": "靈感十足的;絕妙的",
    "en_def": "having excellent, original qualities",
    "sentence": "The director's {{BLANK}} choice of music made the sad scene unforgettable, and many people in the cinema began to cry.",
    "cn": "導演絕妙的配樂選擇讓這悲傷的一幕令人難忘,電影院裡許多人都哭了。"
  },
  {
    "word": "original",
    "pos": "adj.",
    "cn_def": "原創的;獨創的",
    "en_def": "new and different from anything before",
    "sentence": "The judges wanted {{BLANK}} designs, so they rejected any poster that looked like something on the internet.",
    "cn": "評審想要原創的設計,所以他們淘汰了任何看起來像網路上作品的海報。"
  },
  {
    "word": "daydream",
    "pos": "v.",
    "cn_def": "做白日夢",
    "en_def": "to think pleasant thoughts that take you away from the present",
    "sentence": "I often {{BLANK}} on the bus about future trips, but sometimes I miss my stop because I am not paying attention.",
    "cn": "我常在公車上做白日夢想著未來的旅行,但有時因為不專心而坐過站。"
  },
  {
    "word": "improvise",
    "pos": "v.",
    "cn_def": "即興創作;臨場發揮",
    "en_def": "to make or perform something without preparation",
    "sentence": "The actor forgot his lines, so he had to {{BLANK}}, and the audience laughed because they thought it was part of the play.",
    "cn": "這位演員忘了台詞,所以他只好臨場發揮,觀眾都笑了,因為他們以為那是劇情的一部分。"
  },
  {
    "word": "improvisation",
    "pos": "n.",
    "cn_def": "即興表演",
    "en_def": "performing without planning beforehand",
    "sentence": "Jazz musicians are famous for {{BLANK}}, because they often create new tunes on stage without any written music.",
    "cn": "爵士樂手以即興表演聞名,因為他們常在台上不看樂譜就創作新曲調。"
  },
  {
    "word": "spontaneity",
    "pos": "n.",
    "cn_def": "自發性;隨性",
    "en_def": "the quality of acting naturally without planning",
    "sentence": "Children's drawings are full of {{BLANK}}, while adults often worry too much about making mistakes.",
    "cn": "孩子的畫充滿隨性,而大人往往太擔心犯錯。"
  },
  {
    "word": "flair",
    "pos": "n.",
    "cn_def": "天分;才華",
    "en_def": "a natural ability to do something well",
    "sentence": "She has a real {{BLANK}} for design, and even her simple school projects look like professional magazine pages.",
    "cn": "她在設計方面很有天分,就連她簡單的學校作業看起來都像專業雜誌的版面。"
  },
  {
    "word": "talent",
    "pos": "n.",
    "cn_def": "天賦",
    "en_def": "a natural ability to do something well",
    "sentence": "He showed a great {{BLANK}} for drawing when he was five, so his parents sent him to art classes every Saturday.",
    "cn": "他五歲時就展現出很高的繪畫天賦,所以父母每週六都送他去上美術課。"
  },
  {
    "word": "artistic",
    "pos": "adj.",
    "cn_def": "有藝術天分的;藝術的",
    "en_def": "showing skill in art",
    "sentence": "My brother is very {{BLANK}}, but he chose to study engineering because he worried about finding a job.",
    "cn": "我哥哥很有藝術天分,但他選擇念工程,因為他擔心找不到工作。"
  },
  {
    "word": "self-expression",
    "pos": "n.",
    "cn_def": "自我表達",
    "en_def": "showing your feelings and ideas through art or actions",
    "sentence": "Dance is a form of {{BLANK}} for many teenagers, because they can show feelings that are hard to put into words.",
    "cn": "對許多青少年來說,舞蹈是一種自我表達的方式,因為他們能展現難以言喻的感受。"
  },
  {
    "word": "divergent thinking",
    "pos": "n.phr.",
    "cn_def": "擴散性思考",
    "en_def": "thinking of many different answers to one problem",
    "sentence": "The teacher asked us to list fifty uses for a paper clip, because this exercise trains {{BLANK}}.",
    "cn": "老師要我們列出迴紋針的五十種用途,因為這個練習能訓練擴散性思考。"
  },
  {
    "word": "lateral thinking",
    "pos": "n.phr.",
    "cn_def": "水平思考",
    "en_def": "solving problems in unusual and creative ways",
    "sentence": "The puzzle seemed impossible, but {{BLANK}} helped us find a surprising answer that nobody expected.",
    "cn": "這道謎題似乎無解,但水平思考幫助我們找到一個出乎所有人意料的答案。"
  },
  {
    "word": "eureka moment",
    "pos": "n.phr.",
    "cn_def": "靈光乍現的時刻",
    "en_def": "a sudden moment when you find a great idea",
    "sentence": "The designer had a {{BLANK}} in the shower, and she quickly wrote her idea on the steamy mirror.",
    "cn": "這位設計師在洗澡時靈光乍現,她趕緊把想法寫在起霧的鏡子上。"
  },
  {
    "word": "creative block",
    "pos": "n.phr.",
    "cn_def": "創作瓶頸",
    "en_def": "a time when you cannot produce new ideas",
    "sentence": "The songwriter suffered from a {{BLANK}} for months, so he travelled to the mountains to find fresh ideas.",
    "cn": "這位詞曲創作者陷入創作瓶頸好幾個月,所以他到山上旅行尋找新靈感。"
  },
  {
    "word": "writer's block",
    "pos": "n.phr.",
    "cn_def": "寫作瓶頸",
    "en_def": "a time when a writer cannot think what to write",
    "sentence": "I had {{BLANK}} when I started my essay, but going for a short walk helped me think again.",
    "cn": "我開始寫論文時遇到寫作瓶頸,但出去散步一下幫助我重新思考。"
  },
  {
    "word": "playful",
    "pos": "adj.",
    "cn_def": "好玩的;俏皮的",
    "en_def": "full of fun and not serious",
    "sentence": "The artist uses {{BLANK}} shapes and bright colours, so even serious adults smile when they walk into her exhibition.",
    "cn": "這位藝術家運用俏皮的形狀和鮮豔的色彩,所以就連嚴肅的大人走進她的展覽也會微笑。"
  },
  {
    "word": "flow",
    "pos": "n.",
    "cn_def": "心流",
    "en_def": "a happy state of complete focus on an activity",
    "sentence": "When I paint, I sometimes enter a state of {{BLANK}}, and three hours pass without me noticing the time.",
    "cn": "我畫畫時有時會進入心流狀態,三個小時過去了我卻沒注意到時間。"
  },
  {
    "word": "curious",
    "pos": "adj.",
    "cn_def": "好奇的",
    "en_def": "wanting to know or learn about something",
    "sentence": "Good designers are always {{BLANK}} about how things work, so they ask many questions before they start drawing.",
    "cn": "好的設計師總是對事物如何運作感到好奇,所以他們在開始畫之前會問很多問題。"
  },
  {
    "word": "open-minded",
    "pos": "adj.",
    "cn_def": "心胸開闊的",
    "en_def": "willing to accept new and different ideas",
    "sentence": "Try to be {{BLANK}} when you visit a modern art museum, because some works look strange but have interesting meanings.",
    "cn": "參觀現代美術館時試著保持心胸開闊,因為有些作品看起來很怪,卻有有趣的含義。"
  },
  {
    "word": "risk-taking",
    "pos": "n.",
    "cn_def": "冒險",
    "en_def": "doing things that might fail in order to achieve something",
    "sentence": "Creative work often needs a little {{BLANK}}, because many new ideas fail several times before they finally succeed.",
    "cn": "創作工作常常需要一點冒險,因為許多新點子在最終成功前會失敗好幾次。"
  },
  {
    "word": "mood board",
    "pos": "n.phr.",
    "cn_def": "情緒板;靈感板",
    "en_def": "a collection of pictures and colours used to plan a design",
    "sentence": "Before designing the café, she made a {{BLANK}} with photos of plants and wood, so the owner could see her ideas.",
    "cn": "在設計咖啡廳之前,她做了一塊貼滿植物與木頭照片的靈感板,讓老闆能看到她的構想。"
  },
  {
    "word": "creative process",
    "pos": "n.phr.",
    "cn_def": "創作過程",
    "en_def": "the steps people follow to make something new",
    "sentence": "Every artist has a different {{BLANK}}, and some begin with careful plans while others simply start painting.",
    "cn": "每位藝術家都有不同的創作過程,有些人從周密的計畫開始,而有些人則直接動筆。"
  },
  {
    "word": "craft",
    "pos": "v.",
    "cn_def": "精心製作",
    "en_def": "to make something skilfully",
    "sentence": "She spent weeks trying to {{BLANK}} the perfect opening line for her novel, but she rewrote it many times.",
    "cn": "她花了好幾週試圖精心寫出小說完美的開場白,但她改寫了很多次。"
  },
  {
    "word": "rework",
    "pos": "v.",
    "cn_def": "修改;重做",
    "en_def": "to change something in order to improve it",
    "sentence": "The editor asked the author to {{BLANK}} the ending, because readers found it too sad and confusing.",
    "cn": "編輯請作者修改結局,因為讀者覺得它太悲傷又令人困惑。"
  }
];

const MCQS = [
  {
    "q": "The new art programme aims to develop students' _____, so there are no right or wrong answers in class.",
    "options": [
      "elitism",
      "admiration",
      "creativity",
      "photography"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "My cousin is very _____, and she turned old jeans into a bag that everyone at school wanted to buy.",
    "options": [
      "iconic",
      "majestic",
      "bohemian",
      "creative"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The _____ of the popular cartoon was only twenty years old, but his drawings soon appeared on T-shirts everywhere.",
    "options": [
      "funding",
      "creator",
      "woodcut",
      "elegance"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Children have a wonderful _____, and a simple cardboard box can become a spaceship or a castle in their games.",
    "options": [
      "imagination",
      "enthusiast",
      "humility",
      "esteem"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Close your eyes and _____ a quiet beach at sunset, and then try to paint the colours you see.",
    "options": [
      "cast",
      "enchant",
      "imagine",
      "idolise"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Her trip to Morocco helped _____ a new series of paintings, because the markets were full of bright colours.",
    "options": [
      "dabble",
      "personify",
      "democratise",
      "inspire"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The director's _____ choice of music made the sad scene unforgettable, and many people in the cinema began to cry.",
    "options": [
      "monochrome",
      "inspired",
      "meaningful",
      "lyrical"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The judges wanted _____ designs, so they rejected any poster that looked like something on the internet.",
    "options": [
      "original",
      "unrecognised",
      "literary",
      "raw"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "I often _____ on the bus about future trips, but sometimes I miss my stop because I am not paying attention.",
    "options": [
      "disapprove",
      "mesmerise",
      "unlock",
      "daydream"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The actor forgot his lines, so he had to _____, and the audience laughed because they thought it was part of the play.",
    "options": [
      "improvise",
      "cherish",
      "unsettle",
      "disapprove"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Jazz musicians are famous for _____, because they often create new tunes on stage without any written music.",
    "options": [
      "devotee",
      "improvisation",
      "masterpiece",
      "auctioneer"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Children's drawings are full of _____, while adults often worry too much about making mistakes.",
    "options": [
      "easel",
      "audacity",
      "spontaneity",
      "realism"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "She has a real _____ for design, and even her simple school projects look like professional magazine pages.",
    "options": [
      "metalwork",
      "harmony",
      "font",
      "flair"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "He showed a great _____ for drawing when he was five, so his parents sent him to art classes every Saturday.",
    "options": [
      "lacquer",
      "talent",
      "performer",
      "reproduction"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "My brother is very _____, but he chose to study engineering because he worried about finding a job.",
    "options": [
      "breathtaking",
      "superb",
      "artistic",
      "inspirational"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Dance is a form of _____ for many teenagers, because they can show feelings that are hard to put into words.",
    "options": [
      "self-expression",
      "handicraft",
      "poise",
      "collector"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The teacher asked us to list fifty uses for a paper clip, because this exercise trains _____.",
    "options": [
      "price tag",
      "divergent thinking",
      "gift shop",
      "art critic"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The puzzle seemed impossible, but _____ helped us find a surprising answer that nobody expected.",
    "options": [
      "the bigger picture",
      "comic book",
      "landscape painting",
      "lateral thinking"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The designer had a _____ in the shower, and she quickly wrote her idea on the steamy mirror.",
    "options": [
      "visual effects",
      "primary colour",
      "eureka moment",
      "contemporary art"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The songwriter suffered from a _____ for months, so he travelled to the mountains to find fresh ideas.",
    "options": [
      "creative block",
      "primary colour",
      "photo shoot",
      "a hard act to follow"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "I had _____ when I started my essay, but going for a short walk helped me think again.",
    "options": [
      "potter's wheel",
      "writer's block",
      "art dealer",
      "craft fair"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The artist uses _____ shapes and bright colours, so even serious adults smile when they walk into her exhibition.",
    "options": [
      "acrylic",
      "unorthodox",
      "enigmatic",
      "playful"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "When I paint, I sometimes enter a state of _____, and three hours pass without me noticing the time.",
    "options": [
      "flow",
      "audacity",
      "esteem",
      "excellence"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Good designers are always _____ about how things work, so they ask many questions before they start drawing.",
    "options": [
      "legendary",
      "self-indulgent",
      "curious",
      "daring"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Try to be _____ when you visit a modern art museum, because some works look strange but have interesting meanings.",
    "options": [
      "open-minded",
      "literary",
      "acclaimed",
      "nostalgic"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Creative work often needs a little _____, because many new ideas fail several times before they finally succeed.",
    "options": [
      "auction",
      "choreographer",
      "imagery",
      "risk-taking"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Before designing the café, she made a _____ with photos of plants and wood, so the owner could see her ideas.",
    "options": [
      "old master",
      "a picture is worth a thousand words",
      "mood board",
      "art for art's sake"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Every artist has a different _____, and some begin with careful plans while others simply start painting.",
    "options": [
      "comic book",
      "creative process",
      "photo shoot",
      "audio guide"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "She spent weeks trying to _____ the perfect opening line for her novel, but she rewrote it many times.",
    "options": [
      "craft",
      "carve",
      "retouch",
      "blend"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The editor asked the author to _____ the ending, because readers found it too sad and confusing.",
    "options": [
      "fascinate",
      "popularise",
      "rework",
      "reimagine"
    ],
    "answer": 2,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "creativity": {
    "pos": "n.",
    "en_def": "the ability to make new and original things",
    "cn_def": "創造力"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at thinking of new ideas or making things",
    "cn_def": "有創意的"
  },
  "creator": {
    "pos": "n.",
    "en_def": "a person who makes something new",
    "cn_def": "創作者"
  },
  "imagination": {
    "pos": "n.",
    "en_def": "the ability to form pictures and ideas in your mind",
    "cn_def": "想像力"
  },
  "imagine": {
    "pos": "v.",
    "en_def": "to form a picture of something in your mind",
    "cn_def": "想像"
  },
  "inspire": {
    "pos": "v.",
    "en_def": "to give someone the wish or idea to do something",
    "cn_def": "啟發;激勵"
  },
  "inspired": {
    "pos": "adj.",
    "en_def": "having excellent, original qualities",
    "cn_def": "靈感十足的;絕妙的"
  },
  "original": {
    "pos": "adj.",
    "en_def": "new and different from anything before",
    "cn_def": "原創的;獨創的"
  },
  "daydream": {
    "pos": "v.",
    "en_def": "to think pleasant thoughts that take you away from the present",
    "cn_def": "做白日夢"
  },
  "improvise": {
    "pos": "v.",
    "en_def": "to make or perform something without preparation",
    "cn_def": "即興創作;臨場發揮"
  },
  "improvisation": {
    "pos": "n.",
    "en_def": "performing without planning beforehand",
    "cn_def": "即興表演"
  },
  "spontaneity": {
    "pos": "n.",
    "en_def": "the quality of acting naturally without planning",
    "cn_def": "自發性;隨性"
  },
  "flair": {
    "pos": "n.",
    "en_def": "a natural ability to do something well",
    "cn_def": "天分;才華"
  },
  "talent": {
    "pos": "n.",
    "en_def": "a natural ability to do something well",
    "cn_def": "天賦"
  },
  "artistic": {
    "pos": "adj.",
    "en_def": "showing skill in art",
    "cn_def": "有藝術天分的;藝術的"
  },
  "self-expression": {
    "pos": "n.",
    "en_def": "showing your feelings and ideas through art or actions",
    "cn_def": "自我表達"
  },
  "divergent thinking": {
    "pos": "n.phr.",
    "en_def": "thinking of many different answers to one problem",
    "cn_def": "擴散性思考"
  },
  "lateral thinking": {
    "pos": "n.phr.",
    "en_def": "solving problems in unusual and creative ways",
    "cn_def": "水平思考"
  },
  "eureka moment": {
    "pos": "n.phr.",
    "en_def": "a sudden moment when you find a great idea",
    "cn_def": "靈光乍現的時刻"
  },
  "creative block": {
    "pos": "n.phr.",
    "en_def": "a time when you cannot produce new ideas",
    "cn_def": "創作瓶頸"
  },
  "writer's block": {
    "pos": "n.phr.",
    "en_def": "a time when a writer cannot think what to write",
    "cn_def": "寫作瓶頸"
  },
  "playful": {
    "pos": "adj.",
    "en_def": "full of fun and not serious",
    "cn_def": "好玩的;俏皮的"
  },
  "flow": {
    "pos": "n.",
    "en_def": "a happy state of complete focus on an activity",
    "cn_def": "心流"
  },
  "curious": {
    "pos": "adj.",
    "en_def": "wanting to know or learn about something",
    "cn_def": "好奇的"
  },
  "open-minded": {
    "pos": "adj.",
    "en_def": "willing to accept new and different ideas",
    "cn_def": "心胸開闊的"
  },
  "risk-taking": {
    "pos": "n.",
    "en_def": "doing things that might fail in order to achieve something",
    "cn_def": "冒險"
  },
  "mood board": {
    "pos": "n.phr.",
    "en_def": "a collection of pictures and colours used to plan a design",
    "cn_def": "情緒板;靈感板"
  },
  "creative process": {
    "pos": "n.phr.",
    "en_def": "the steps people follow to make something new",
    "cn_def": "創作過程"
  },
  "craft": {
    "pos": "v.",
    "en_def": "to make something skilfully",
    "cn_def": "精心製作"
  },
  "rework": {
    "pos": "v.",
    "en_def": "to change something in order to improve it",
    "cn_def": "修改;重做"
  },
  "elitism": {
    "pos": "n.",
    "en_def": "the belief that only a small group deserves the best things",
    "cn_def": "菁英主義"
  },
  "admiration": {
    "pos": "n.",
    "en_def": "a feeling of great respect and approval",
    "cn_def": "欽佩;讚賞"
  },
  "photography": {
    "pos": "n.",
    "en_def": "the art or job of taking photos",
    "cn_def": "攝影"
  },
  "iconic": {
    "pos": "adj.",
    "en_def": "very famous and seen as a symbol",
    "cn_def": "具代表性的;標誌性的"
  },
  "majestic": {
    "pos": "adj.",
    "en_def": "very beautiful, large and impressive",
    "cn_def": "雄偉的;莊嚴的"
  },
  "bohemian": {
    "pos": "adj.",
    "en_def": "living in an unusual, free way like many artists",
    "cn_def": "波希米亞風的;放蕩不羈的"
  },
  "funding": {
    "pos": "n.",
    "en_def": "money given for a particular purpose",
    "cn_def": "資金;經費"
  },
  "woodcut": {
    "pos": "n.",
    "en_def": "a print made from a picture cut into wood",
    "cn_def": "木刻版畫"
  },
  "elegance": {
    "pos": "n.",
    "en_def": "the quality of being graceful and stylish",
    "cn_def": "優雅"
  },
  "enthusiast": {
    "pos": "n.",
    "en_def": "a person who is very interested in an activity",
    "cn_def": "愛好者;熱衷者"
  },
  "humility": {
    "pos": "n.",
    "en_def": "the quality of not thinking you are better than others",
    "cn_def": "謙遜"
  },
  "esteem": {
    "pos": "n.",
    "en_def": "respect and admiration",
    "cn_def": "尊敬;敬重"
  },
  "cast": {
    "pos": "v.",
    "en_def": "to make an object by pouring hot metal into a shape",
    "cn_def": "鑄造"
  },
  "enchant": {
    "pos": "v.",
    "en_def": "to charm and delight someone",
    "cn_def": "使陶醉;迷住"
  },
  "idolise": {
    "pos": "v.",
    "en_def": "to admire someone too much",
    "cn_def": "崇拜;偶像化"
  },
  "dabble": {
    "pos": "v.",
    "en_def": "to try an activity without being serious about it",
    "cn_def": "涉獵;玩票"
  },
  "personify": {
    "pos": "v.",
    "en_def": "to give human qualities to an object or idea",
    "cn_def": "擬人化"
  },
  "democratise": {
    "pos": "v.",
    "en_def": "to make something available to everyone",
    "cn_def": "使大眾化"
  },
  "monochrome": {
    "pos": "adj.",
    "en_def": "using only one colour or black and white",
    "cn_def": "單色的;黑白的"
  },
  "meaningful": {
    "pos": "adj.",
    "en_def": "important and having a clear purpose",
    "cn_def": "有意義的"
  },
  "lyrical": {
    "pos": "adj.",
    "en_def": "expressing feelings in a beautiful, song-like way",
    "cn_def": "抒情的"
  },
  "unrecognised": {
    "pos": "adj.",
    "en_def": "not given the respect it deserves",
    "cn_def": "未被賞識的"
  },
  "literary": {
    "pos": "adj.",
    "en_def": "relating to books, poems and writing",
    "cn_def": "文學的"
  },
  "raw": {
    "pos": "adj.",
    "en_def": "natural and not polished",
    "cn_def": "原始的;未經修飾的"
  },
  "disapprove": {
    "pos": "v.",
    "en_def": "to think something is bad or wrong",
    "cn_def": "不贊成"
  },
  "mesmerise": {
    "pos": "v.",
    "en_def": "to hold someone's attention so they cannot look away",
    "cn_def": "使入迷"
  },
  "unlock": {
    "pos": "v.",
    "en_def": "to release or make something available",
    "cn_def": "釋放;開啟"
  },
  "cherish": {
    "pos": "v.",
    "en_def": "to love and care for something very much",
    "cn_def": "珍惜;珍愛"
  },
  "unsettle": {
    "pos": "v.",
    "en_def": "to make someone feel worried or uncomfortable",
    "cn_def": "使不安"
  },
  "devotee": {
    "pos": "n.",
    "en_def": "a person who loves an activity very much",
    "cn_def": "愛好者;熱衷者"
  },
  "masterpiece": {
    "pos": "n.",
    "en_def": "an extremely good work of art",
    "cn_def": "傑作"
  },
  "auctioneer": {
    "pos": "n.",
    "en_def": "the person who runs an auction",
    "cn_def": "拍賣官"
  },
  "easel": {
    "pos": "n.",
    "en_def": "a wooden stand that holds a painting while you work",
    "cn_def": "畫架"
  },
  "audacity": {
    "pos": "n.",
    "en_def": "brave or rude confidence to do something shocking",
    "cn_def": "膽量;大膽"
  },
  "realism": {
    "pos": "n.",
    "en_def": "showing things as they really are",
    "cn_def": "寫實主義"
  },
  "metalwork": {
    "pos": "n.",
    "en_def": "objects made from metal by skilled workers",
    "cn_def": "金工"
  },
  "harmony": {
    "pos": "n.",
    "en_def": "pleasant musical notes sung or played together",
    "cn_def": "和聲"
  },
  "font": {
    "pos": "n.",
    "en_def": "a set of letters in one style and size",
    "cn_def": "字型"
  },
  "lacquer": {
    "pos": "n.",
    "en_def": "a shiny liquid painted on wood to protect and decorate it",
    "cn_def": "漆"
  },
  "performer": {
    "pos": "n.",
    "en_def": "a person who entertains an audience",
    "cn_def": "表演者"
  },
  "reproduction": {
    "pos": "n.",
    "en_def": "a copy of a work of art",
    "cn_def": "複製品"
  },
  "breathtaking": {
    "pos": "adj.",
    "en_def": "extremely beautiful or surprising",
    "cn_def": "令人屏息的"
  },
  "superb": {
    "pos": "adj.",
    "en_def": "extremely good",
    "cn_def": "極好的;一流的"
  },
  "inspirational": {
    "pos": "adj.",
    "en_def": "making people want to do something good",
    "cn_def": "激勵人心的"
  },
  "handicraft": {
    "pos": "n.",
    "en_def": "a skilled activity of making things by hand",
    "cn_def": "手工藝"
  },
  "poise": {
    "pos": "n.",
    "en_def": "a calm, confident way of behaving",
    "cn_def": "沉著;泰然自若"
  },
  "collector": {
    "pos": "n.",
    "en_def": "a person who gathers valuable objects as a hobby",
    "cn_def": "收藏家"
  },
  "price tag": {
    "pos": "n.phr.",
    "en_def": "the cost of something",
    "cn_def": "價格;標價"
  },
  "gift shop": {
    "pos": "n.phr.",
    "en_def": "a shop in a museum that sells souvenirs",
    "cn_def": "紀念品店"
  },
  "art critic": {
    "pos": "n.phr.",
    "en_def": "a person who writes opinions about art",
    "cn_def": "藝評家"
  },
  "the bigger picture": {
    "pos": "n.phr.",
    "en_def": "the whole situation, not just small details",
    "cn_def": "大局;全貌"
  },
  "comic book": {
    "pos": "n.phr.",
    "en_def": "a magazine that tells stories in pictures",
    "cn_def": "漫畫書"
  },
  "landscape painting": {
    "pos": "n.phr.",
    "en_def": "a picture of natural scenery such as hills or rivers",
    "cn_def": "風景畫"
  },
  "visual effects": {
    "pos": "n.phr.",
    "en_def": "images added to films by computer",
    "cn_def": "視覺特效"
  },
  "primary colour": {
    "pos": "n.phr.",
    "en_def": "red, yellow or blue, which mix to make other colours",
    "cn_def": "原色"
  },
  "contemporary art": {
    "pos": "n.phr.",
    "en_def": "art made in recent times",
    "cn_def": "當代藝術"
  },
  "photo shoot": {
    "pos": "n.phr.",
    "en_def": "a session when a photographer takes many photos",
    "cn_def": "拍攝工作"
  },
  "a hard act to follow": {
    "pos": "n.phr.",
    "en_def": "someone so good that the next person will seem worse",
    "cn_def": "難以超越的榜樣"
  },
  "potter's wheel": {
    "pos": "n.phr.",
    "en_def": "a turning round plate used to shape clay",
    "cn_def": "拉坯轉盤"
  },
  "art dealer": {
    "pos": "n.phr.",
    "en_def": "a person who buys and sells works of art",
    "cn_def": "藝術經紀商;畫商"
  },
  "craft fair": {
    "pos": "n.phr.",
    "en_def": "an event where people sell things they have made by hand",
    "cn_def": "手作市集"
  },
  "acrylic": {
    "pos": "adj.",
    "en_def": "made with a fast-drying plastic-based paint",
    "cn_def": "壓克力的"
  },
  "unorthodox": {
    "pos": "adj.",
    "en_def": "different from what is usual or accepted",
    "cn_def": "非正統的;另類的"
  },
  "enigmatic": {
    "pos": "adj.",
    "en_def": "mysterious and hard to understand",
    "cn_def": "神秘的;令人費解的"
  },
  "excellence": {
    "pos": "n.",
    "en_def": "the quality of being extremely good",
    "cn_def": "卓越"
  },
  "legendary": {
    "pos": "adj.",
    "en_def": "very famous and admired for a long time",
    "cn_def": "傳奇的"
  },
  "self-indulgent": {
    "pos": "adj.",
    "en_def": "doing what pleases yourself without thinking of others",
    "cn_def": "自我陶醉的;放縱自我的"
  },
  "daring": {
    "pos": "adj.",
    "en_def": "brave and willing to take risks",
    "cn_def": "大膽的;勇於冒險的"
  },
  "acclaimed": {
    "pos": "adj.",
    "en_def": "praised by many people",
    "cn_def": "廣受讚譽的"
  },
  "nostalgic": {
    "pos": "adj.",
    "en_def": "feeling happy and sad about the past",
    "cn_def": "懷舊的"
  },
  "auction": {
    "pos": "n.",
    "en_def": "a public sale where things go to the person who pays most",
    "cn_def": "拍賣會"
  },
  "choreographer": {
    "pos": "n.",
    "en_def": "a person who plans the movements of a dance",
    "cn_def": "編舞家"
  },
  "imagery": {
    "pos": "n.",
    "en_def": "pictures or descriptions that create images in the mind",
    "cn_def": "意象"
  },
  "old master": {
    "pos": "n.phr.",
    "en_def": "a great European painter from before about 1800",
    "cn_def": "古典大師"
  },
  "a picture is worth a thousand words": {
    "pos": "n.phr.",
    "en_def": "an image can explain more than a long description",
    "cn_def": "一圖勝千言"
  },
  "art for art's sake": {
    "pos": "n.phr.",
    "en_def": "art made only for beauty, not for any other purpose",
    "cn_def": "為藝術而藝術"
  },
  "audio guide": {
    "pos": "n.phr.",
    "en_def": "a recorded talk you listen to as you walk round a museum",
    "cn_def": "語音導覽"
  },
  "carve": {
    "pos": "v.",
    "en_def": "to cut wood or stone into a shape",
    "cn_def": "雕刻"
  },
  "retouch": {
    "pos": "v.",
    "en_def": "to improve a photo by making small changes",
    "cn_def": "修圖"
  },
  "blend": {
    "pos": "v.",
    "en_def": "to mix colours smoothly together",
    "cn_def": "混合;暈染"
  },
  "fascinate": {
    "pos": "v.",
    "en_def": "to interest someone very much",
    "cn_def": "使著迷"
  },
  "popularise": {
    "pos": "v.",
    "en_def": "to make something liked by many people",
    "cn_def": "使普及"
  },
  "reimagine": {
    "pos": "v.",
    "en_def": "to think about something again in a new way",
    "cn_def": "重新構想"
  }
};

const EXTRA_GLOSSES = {};
