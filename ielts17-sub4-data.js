// Topic 17 Subunit 4 Quiz Data: Galleries, Museums & the Art Market 美術館、博物館與藝術市場
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T17 S04 - Galleries, Museums & the Art Market 美術館、博物館與藝術市場",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "gallery",
    "pos": "n.",
    "cn_def": "畫廊;美術館",
    "en_def": "a room or building where art is shown or sold",
    "sentence": "We visited a small {{BLANK}} in Taipei that shows young local artists, and the owner told us about each painting.",
    "cn": "我們參觀了台北一家展出在地年輕藝術家作品的小畫廊,老闆向我們介紹了每一幅畫。"
  },
  {
    "word": "museum",
    "pos": "n.",
    "cn_def": "博物館",
    "en_def": "a building where valuable objects are kept and shown",
    "sentence": "The National Palace {{BLANK}} is very crowded in summer, so we went early in the morning to avoid the tour groups.",
    "cn": "國立故宮博物院夏天非常擁擠,所以我們一大早就去,以避開旅行團。"
  },
  {
    "word": "collection",
    "pos": "n.",
    "cn_def": "收藏",
    "en_def": "a group of objects gathered together",
    "sentence": "The museum's {{BLANK}} includes more than five thousand paintings, but only a small number can be shown at one time.",
    "cn": "這間博物館的收藏包括五千多幅畫作,但一次只能展出其中一小部分。"
  },
  {
    "word": "collector",
    "pos": "n.",
    "cn_def": "收藏家",
    "en_def": "a person who gathers valuable objects as a hobby",
    "sentence": "The wealthy {{BLANK}} bought paintings for fifty years, and before he died he gave all of them to the city.",
    "cn": "這位富有的收藏家買了五十年的畫,並在過世前把它們全部捐給了這座城市。"
  },
  {
    "word": "auction",
    "pos": "n.",
    "cn_def": "拍賣會",
    "en_def": "a public sale where things go to the person who pays most",
    "sentence": "The painting was sold at {{BLANK}} for ten million dollars, and the crowd clapped loudly when the hammer came down.",
    "cn": "這幅畫在拍賣會上以一千萬美元售出,落槌時群眾大聲鼓掌。"
  },
  {
    "word": "auctioneer",
    "pos": "n.",
    "cn_def": "拍賣官",
    "en_def": "the person who runs an auction",
    "sentence": "The {{BLANK}} spoke very fast and pointed at people who raised their hands, so I was afraid to scratch my head.",
    "cn": "拍賣官說話非常快,並指著舉手的人,所以我連抓頭都不敢。"
  },
  {
    "word": "bid",
    "pos": "v.",
    "cn_def": "出價;競標",
    "en_def": "to offer a price for something at an auction",
    "sentence": "Two collectors {{BLANK}} against each other for the old vase, and the price rose higher and higher every few seconds.",
    "cn": "兩位收藏家為這只古花瓶互相競標,價格每隔幾秒就越抬越高。"
  },
  {
    "word": "bidder",
    "pos": "n.",
    "cn_def": "競標者",
    "en_def": "a person who offers money at an auction",
    "sentence": "The painting went to an unknown {{BLANK}} on the telephone, so nobody in the room knew who the new owner was.",
    "cn": "這幅畫由一位透過電話出價的匿名競標者得標,所以現場沒有人知道新主人是誰。"
  },
  {
    "word": "art dealer",
    "pos": "n.phr.",
    "cn_def": "藝術經紀商;畫商",
    "en_def": "a person who buys and sells works of art",
    "sentence": "An {{BLANK}} noticed her paintings online, and he offered to sell them in his gallery in Hong Kong.",
    "cn": "一位畫商在網路上注意到她的畫作,並提議在他香港的畫廊販售。"
  },
  {
    "word": "valuation",
    "pos": "n.",
    "cn_def": "估價",
    "en_def": "a judgement of how much something is worth",
    "sentence": "We took grandma's old painting for a {{BLANK}}, but the expert said it was worth only a few hundred dollars.",
    "cn": "我們把奶奶的舊畫拿去估價,但專家說它只值幾百元。"
  },
  {
    "word": "priceless",
    "pos": "adj.",
    "cn_def": "無價的",
    "en_def": "so valuable that no price can be put on it",
    "sentence": "The museum's ancient scrolls are {{BLANK}}, so they are kept in dark rooms where the temperature never changes.",
    "cn": "博物館的古代卷軸是無價的,所以它們被保存在溫度從不變化的暗室裡。"
  },
  {
    "word": "authenticate",
    "pos": "v.",
    "cn_def": "鑑定真偽",
    "en_def": "to prove that something is real and not a copy",
    "sentence": "Experts used X-rays to {{BLANK}} the painting, and they found an older picture hidden under the paint.",
    "cn": "專家使用X光來鑑定這幅畫的真偽,結果發現顏料底下藏著一幅更早的畫。"
  },
  {
    "word": "conservator",
    "pos": "n.",
    "cn_def": "文物修復師",
    "en_def": "a person who repairs and protects old works of art",
    "sentence": "The {{BLANK}} spent months cleaning the dirty painting with tiny brushes, and the bright colours slowly appeared again.",
    "cn": "這位文物修復師花了好幾個月用小刷子清理骯髒的畫作,鮮豔的色彩慢慢重新顯現。"
  },
  {
    "word": "guided tour",
    "pos": "n.phr.",
    "cn_def": "導覽",
    "en_def": "a visit led by a person who explains things",
    "sentence": "We joined a free {{BLANK}} of the museum, and the guide told us funny stories about the artists' lives.",
    "cn": "我們參加了博物館的免費導覽,導覽員告訴我們藝術家生活中的趣事。"
  },
  {
    "word": "docent",
    "pos": "n.",
    "cn_def": "導覽員",
    "en_def": "a trained guide who explains art in a museum",
    "sentence": "The {{BLANK}} at the art museum is a retired teacher, and she explains the paintings so clearly that even children listen carefully.",
    "cn": "美術館的導覽員是一位退休老師,她解說畫作清楚到連孩子都認真聆聽。"
  },
  {
    "word": "audio guide",
    "pos": "n.phr.",
    "cn_def": "語音導覽",
    "en_def": "a recorded talk you listen to as you walk round a museum",
    "sentence": "I rented an {{BLANK}} at the entrance, so I could listen to information about each painting in Chinese.",
    "cn": "我在入口租了一台語音導覽,這樣就能聽到每幅畫的中文介紹。"
  },
  {
    "word": "gift shop",
    "pos": "n.phr.",
    "cn_def": "紀念品店",
    "en_def": "a shop in a museum that sells souvenirs",
    "sentence": "After the exhibition we went to the {{BLANK}}, and I bought postcards of my favourite paintings for my friends.",
    "cn": "看完展覽後我們去了紀念品店,我買了我最喜歡的畫作明信片送給朋友。"
  },
  {
    "word": "opening night",
    "pos": "n.phr.",
    "cn_def": "開幕夜;首演之夜",
    "en_def": "the first evening of an exhibition or show",
    "sentence": "Hundreds of guests came to the {{BLANK}} of her first exhibition, but she was so nervous that she hid in the bathroom.",
    "cn": "數百位賓客出席她首次個展的開幕夜,但她緊張到躲進了廁所。"
  },
  {
    "word": "art fair",
    "pos": "n.phr.",
    "cn_def": "藝術博覽會",
    "en_def": "a large event where galleries show and sell art",
    "sentence": "Galleries from twenty countries come to the {{BLANK}} in Taipei every year, and collectors fly in to buy new works.",
    "cn": "每年有來自二十個國家的畫廊參加台北的藝術博覽會,收藏家也會搭機前來購買新作品。"
  },
  {
    "word": "biennale",
    "pos": "n.",
    "cn_def": "雙年展",
    "en_def": "a large art exhibition held every two years",
    "sentence": "The famous {{BLANK}} in Venice takes place every two years, and artists from all over the world hope to be invited.",
    "cn": "威尼斯著名的雙年展每兩年舉辦一次,世界各地的藝術家都希望受邀參展。"
  },
  {
    "word": "art critic",
    "pos": "n.phr.",
    "cn_def": "藝評家",
    "en_def": "a person who writes opinions about art",
    "sentence": "One well-known {{BLANK}} called the exhibition boring, but thousands of young visitors still queued to see it.",
    "cn": "一位知名藝評家說這個展覽很無聊,但仍有數千名年輕觀眾排隊參觀。"
  },
  {
    "word": "loan",
    "pos": "n.",
    "cn_def": "出借;借展",
    "en_def": "something borrowed for a period of time",
    "sentence": "The famous painting is on {{BLANK}} from a museum in Paris, so it will return to France after three months.",
    "cn": "這幅名畫是巴黎一家博物館借展的,所以三個月後會回到法國。"
  },
  {
    "word": "heist",
    "pos": "n.",
    "cn_def": "搶劫;竊案",
    "en_def": "a carefully planned robbery",
    "sentence": "Thieves stole thirteen paintings in a famous art {{BLANK}} in 1990, and the frames still hang empty on the museum wall.",
    "cn": "竊賊在1990年一起著名的藝術品竊案中偷走了十三幅畫,那些空畫框至今仍掛在博物館牆上。"
  },
  {
    "word": "vandalise",
    "pos": "v.",
    "cn_def": "蓄意破壞",
    "en_def": "to damage property on purpose",
    "sentence": "Someone tried to {{BLANK}} the statue in the park last night, so the city has decided to put up cameras.",
    "cn": "昨晚有人試圖蓄意破壞公園裡的雕像,所以市政府決定裝設監視器。"
  },
  {
    "word": "pedestal",
    "pos": "n.",
    "cn_def": "底座;基座",
    "en_def": "a base on which a statue stands",
    "sentence": "The small bronze horse stands on a tall stone {{BLANK}}, so visitors can look at it at eye level.",
    "cn": "這匹小銅馬立在高高的石頭底座上,所以參觀者能平視欣賞它。"
  },
  {
    "word": "spotlight",
    "pos": "n.",
    "cn_def": "聚光燈",
    "en_def": "a strong light pointed at one thing",
    "sentence": "A single {{BLANK}} shone on the painting in the dark room, and it made the gold colours glow beautifully.",
    "cn": "一盞聚光燈照在暗室中的畫作上,讓金色光彩美麗地閃耀。"
  },
  {
    "word": "art market",
    "pos": "n.phr.",
    "cn_def": "藝術市場",
    "en_def": "the buying and selling of art",
    "sentence": "The {{BLANK}} in Asia has grown quickly, because more young people now see paintings as a good investment.",
    "cn": "亞洲的藝術市場成長迅速,因為現在更多年輕人把畫作視為好的投資。"
  },
  {
    "word": "price tag",
    "pos": "n.phr.",
    "cn_def": "價格;標價",
    "en_def": "the cost of something",
    "sentence": "The sculpture has a {{BLANK}} of two million dollars, but the gallery says several buyers are already interested.",
    "cn": "這件雕塑的標價是兩百萬美元,但畫廊表示已經有好幾位買家感興趣。"
  }
];

const MCQS = [
  {
    "q": "We visited a small _____ in Taipei that shows young local artists, and the owner told us about each painting.",
    "options": [
      "masterpiece",
      "gallery",
      "reinvention",
      "transcendence"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The National Palace _____ is very crowded in summer, so we went early in the morning to avoid the tour groups.",
    "options": [
      "genre",
      "elegance",
      "lacquer",
      "museum"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The museum's _____ includes more than five thousand paintings, but only a small number can be shown at one time.",
    "options": [
      "close-up",
      "signature",
      "collection",
      "elegance"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The wealthy _____ bought paintings for fifty years, and before he died he gave all of them to the city.",
    "options": [
      "collector",
      "glaze",
      "aficionado",
      "performance"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The painting was sold at _____ for ten million dollars, and the crowd clapped loudly when the hammer came down.",
    "options": [
      "transcendence",
      "auction",
      "creator",
      "devotee"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The _____ spoke very fast and pointed at people who raised their hands, so I was afraid to scratch my head.",
    "options": [
      "rendition",
      "creativity",
      "close-up",
      "auctioneer"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Two collectors _____ against each other for the old vase, and the price rose higher and higher every few seconds.",
    "options": [
      "borrow",
      "craft",
      "bid",
      "immerse"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The painting went to an unknown _____ on the telephone, so nobody in the room knew who the new owner was.",
    "options": [
      "bidder",
      "musician",
      "potter",
      "creator"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "An _____ noticed her paintings online, and he offered to sell them in his gallery in Hong Kong.",
    "options": [
      "comic book",
      "graphic design",
      "art dealer",
      "oil paint"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "We took grandma's old painting for a _____, but the expert said it was worth only a few hundred dollars.",
    "options": [
      "expression",
      "valuation",
      "magnificence",
      "rendition"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The museum's ancient scrolls are _____, so they are kept in dark rooms where the temperature never changes.",
    "options": [
      "priceless",
      "melodramatic",
      "creative",
      "aspiring"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Experts used X-rays to _____ the painting, and they found an older picture hidden under the paint.",
    "options": [
      "craft",
      "compose",
      "imagine",
      "authenticate"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The _____ spent months cleaning the dirty painting with tiny brushes, and the bright colours slowly appeared again.",
    "options": [
      "conservator",
      "opera",
      "rendition",
      "choreographer"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "We joined a free _____ of the museum, and the guide told us funny stories about the artists' lives.",
    "options": [
      "vanishing point",
      "old master",
      "photo shoot",
      "guided tour"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The _____ at the art museum is a retired teacher, and she explains the paintings so clearly that even children listen carefully.",
    "options": [
      "typography",
      "docent",
      "devotee",
      "creator"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "I rented an _____ at the entrance, so I could listen to information about each painting in Chinese.",
    "options": [
      "eureka moment",
      "comic book",
      "audio guide",
      "stained glass"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "After the exhibition we went to the _____, and I bought postcards of my favourite paintings for my friends.",
    "options": [
      "mood board",
      "gift shop",
      "old master",
      "vanishing point"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Hundreds of guests came to the _____ of her first exhibition, but she was so nervous that she hid in the bathroom.",
    "options": [
      "conceptual art",
      "a work of art",
      "opening night",
      "beauty is in the eye of the beholder"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Galleries from twenty countries come to the _____ in Taipei every year, and collectors fly in to buy new works.",
    "options": [
      "eureka moment",
      "modern art",
      "comic book",
      "art fair"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The famous _____ in Venice takes place every two years, and artists from all over the world hope to be invited.",
    "options": [
      "biennale",
      "potter",
      "obscurity",
      "sophistication"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "One well-known _____ called the exhibition boring, but thousands of young visitors still queued to see it.",
    "options": [
      "art movement",
      "beauty is in the eye of the beholder",
      "writer's block",
      "art critic"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The famous painting is on _____ from a museum in Paris, so it will return to France after three months.",
    "options": [
      "loan",
      "symbolism",
      "musical",
      "Romanticism"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Thieves stole thirteen paintings in a famous art _____ in 1990, and the frames still hang empty on the museum wall.",
    "options": [
      "poise",
      "heist",
      "musician",
      "embroidery"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Someone tried to _____ the statue in the park last night, so the city has decided to put up cameras.",
    "options": [
      "satirise",
      "outshine",
      "vandalise",
      "recreate"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The small bronze horse stands on a tall stone _____, so visitors can look at it at eye level.",
    "options": [
      "pedestal",
      "provocation",
      "melody",
      "virtuosity"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "A single _____ shone on the painting in the dark room, and it made the gold colours glow beautifully.",
    "options": [
      "versatility",
      "premiere",
      "spotlight",
      "legitimacy"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The _____ in Asia has grown quickly, because more young people now see paintings as a good investment.",
    "options": [
      "modern art",
      "a picture is worth a thousand words",
      "mood board",
      "art market"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The sculpture has a _____ of two million dollars, but the gallery says several buyers are already interested.",
    "options": [
      "folk art",
      "price tag",
      "mood board",
      "divergent thinking"
    ],
    "answer": 1,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "gallery": {
    "pos": "n.",
    "en_def": "a room or building where art is shown or sold",
    "cn_def": "畫廊;美術館"
  },
  "museum": {
    "pos": "n.",
    "en_def": "a building where valuable objects are kept and shown",
    "cn_def": "博物館"
  },
  "collection": {
    "pos": "n.",
    "en_def": "a group of objects gathered together",
    "cn_def": "收藏"
  },
  "collector": {
    "pos": "n.",
    "en_def": "a person who gathers valuable objects as a hobby",
    "cn_def": "收藏家"
  },
  "auction": {
    "pos": "n.",
    "en_def": "a public sale where things go to the person who pays most",
    "cn_def": "拍賣會"
  },
  "auctioneer": {
    "pos": "n.",
    "en_def": "the person who runs an auction",
    "cn_def": "拍賣官"
  },
  "bid": {
    "pos": "v.",
    "en_def": "to offer a price for something at an auction",
    "cn_def": "出價;競標"
  },
  "bidder": {
    "pos": "n.",
    "en_def": "a person who offers money at an auction",
    "cn_def": "競標者"
  },
  "art dealer": {
    "pos": "n.phr.",
    "en_def": "a person who buys and sells works of art",
    "cn_def": "藝術經紀商;畫商"
  },
  "valuation": {
    "pos": "n.",
    "en_def": "a judgement of how much something is worth",
    "cn_def": "估價"
  },
  "priceless": {
    "pos": "adj.",
    "en_def": "so valuable that no price can be put on it",
    "cn_def": "無價的"
  },
  "authenticate": {
    "pos": "v.",
    "en_def": "to prove that something is real and not a copy",
    "cn_def": "鑑定真偽"
  },
  "conservator": {
    "pos": "n.",
    "en_def": "a person who repairs and protects old works of art",
    "cn_def": "文物修復師"
  },
  "guided tour": {
    "pos": "n.phr.",
    "en_def": "a visit led by a person who explains things",
    "cn_def": "導覽"
  },
  "docent": {
    "pos": "n.",
    "en_def": "a trained guide who explains art in a museum",
    "cn_def": "導覽員"
  },
  "audio guide": {
    "pos": "n.phr.",
    "en_def": "a recorded talk you listen to as you walk round a museum",
    "cn_def": "語音導覽"
  },
  "gift shop": {
    "pos": "n.phr.",
    "en_def": "a shop in a museum that sells souvenirs",
    "cn_def": "紀念品店"
  },
  "opening night": {
    "pos": "n.phr.",
    "en_def": "the first evening of an exhibition or show",
    "cn_def": "開幕夜;首演之夜"
  },
  "art fair": {
    "pos": "n.phr.",
    "en_def": "a large event where galleries show and sell art",
    "cn_def": "藝術博覽會"
  },
  "biennale": {
    "pos": "n.",
    "en_def": "a large art exhibition held every two years",
    "cn_def": "雙年展"
  },
  "art critic": {
    "pos": "n.phr.",
    "en_def": "a person who writes opinions about art",
    "cn_def": "藝評家"
  },
  "loan": {
    "pos": "n.",
    "en_def": "something borrowed for a period of time",
    "cn_def": "出借;借展"
  },
  "heist": {
    "pos": "n.",
    "en_def": "a carefully planned robbery",
    "cn_def": "搶劫;竊案"
  },
  "vandalise": {
    "pos": "v.",
    "en_def": "to damage property on purpose",
    "cn_def": "蓄意破壞"
  },
  "pedestal": {
    "pos": "n.",
    "en_def": "a base on which a statue stands",
    "cn_def": "底座;基座"
  },
  "spotlight": {
    "pos": "n.",
    "en_def": "a strong light pointed at one thing",
    "cn_def": "聚光燈"
  },
  "art market": {
    "pos": "n.phr.",
    "en_def": "the buying and selling of art",
    "cn_def": "藝術市場"
  },
  "price tag": {
    "pos": "n.phr.",
    "en_def": "the cost of something",
    "cn_def": "價格;標價"
  },
  "masterpiece": {
    "pos": "n.",
    "en_def": "an extremely good work of art",
    "cn_def": "傑作"
  },
  "reinvention": {
    "pos": "n.",
    "en_def": "changing yourself or something completely",
    "cn_def": "重新塑造;改頭換面"
  },
  "transcendence": {
    "pos": "n.",
    "en_def": "going beyond ordinary experience",
    "cn_def": "超越;超凡"
  },
  "genre": {
    "pos": "n.",
    "en_def": "a type of art, music or writing",
    "cn_def": "類型"
  },
  "elegance": {
    "pos": "n.",
    "en_def": "the quality of being graceful and stylish",
    "cn_def": "優雅"
  },
  "lacquer": {
    "pos": "n.",
    "en_def": "a shiny liquid painted on wood to protect and decorate it",
    "cn_def": "漆"
  },
  "close-up": {
    "pos": "n.",
    "en_def": "a photo taken from very near",
    "cn_def": "特寫"
  },
  "signature": {
    "pos": "n.",
    "en_def": "an artist's name written on a work",
    "cn_def": "簽名"
  },
  "glaze": {
    "pos": "n.",
    "en_def": "a shiny coating put on pottery before it is fired",
    "cn_def": "釉"
  },
  "aficionado": {
    "pos": "n.",
    "en_def": "a person who knows and loves a subject well",
    "cn_def": "行家;狂熱愛好者"
  },
  "performance": {
    "pos": "n.",
    "en_def": "the act of entertaining an audience",
    "cn_def": "表演;演出"
  },
  "creator": {
    "pos": "n.",
    "en_def": "a person who makes something new",
    "cn_def": "創作者"
  },
  "devotee": {
    "pos": "n.",
    "en_def": "a person who loves an activity very much",
    "cn_def": "愛好者;熱衷者"
  },
  "rendition": {
    "pos": "n.",
    "en_def": "a performance of a song or piece of music",
    "cn_def": "演繹;演唱"
  },
  "creativity": {
    "pos": "n.",
    "en_def": "the ability to make new and original things",
    "cn_def": "創造力"
  },
  "borrow": {
    "pos": "v.",
    "en_def": "to take and use an idea from another person or culture",
    "cn_def": "借用"
  },
  "craft": {
    "pos": "v.",
    "en_def": "to make something skilfully",
    "cn_def": "精心製作"
  },
  "immerse": {
    "pos": "v.",
    "en_def": "to become completely involved in something",
    "cn_def": "沉浸"
  },
  "musician": {
    "pos": "n.",
    "en_def": "a person who plays or writes music",
    "cn_def": "音樂家"
  },
  "potter": {
    "pos": "n.",
    "en_def": "a person who makes pots and dishes from clay",
    "cn_def": "陶藝家"
  },
  "comic book": {
    "pos": "n.phr.",
    "en_def": "a magazine that tells stories in pictures",
    "cn_def": "漫畫書"
  },
  "graphic design": {
    "pos": "n.phr.",
    "en_def": "the art of combining words and pictures for posters, websites etc.",
    "cn_def": "平面設計"
  },
  "oil paint": {
    "pos": "n.phr.",
    "en_def": "thick paint made with oil that dries slowly",
    "cn_def": "油畫顏料"
  },
  "expression": {
    "pos": "n.",
    "en_def": "showing feelings or ideas through words or art",
    "cn_def": "表達"
  },
  "magnificence": {
    "pos": "n.",
    "en_def": "great beauty and impressive size",
    "cn_def": "壯麗;宏偉"
  },
  "melodramatic": {
    "pos": "adj.",
    "en_def": "showing emotions in a very exaggerated way",
    "cn_def": "誇張煽情的"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at thinking of new ideas or making things",
    "cn_def": "有創意的"
  },
  "aspiring": {
    "pos": "adj.",
    "en_def": "hoping to become successful in a job",
    "cn_def": "有抱負的;想成為…的"
  },
  "compose": {
    "pos": "v.",
    "en_def": "to write music",
    "cn_def": "作曲"
  },
  "imagine": {
    "pos": "v.",
    "en_def": "to form a picture of something in your mind",
    "cn_def": "想像"
  },
  "opera": {
    "pos": "n.",
    "en_def": "a play in which the words are sung with an orchestra",
    "cn_def": "歌劇"
  },
  "choreographer": {
    "pos": "n.",
    "en_def": "a person who plans the movements of a dance",
    "cn_def": "編舞家"
  },
  "vanishing point": {
    "pos": "n.phr.",
    "en_def": "the point where parallel lines seem to meet far away",
    "cn_def": "消失點"
  },
  "old master": {
    "pos": "n.phr.",
    "en_def": "a great European painter from before about 1800",
    "cn_def": "古典大師"
  },
  "photo shoot": {
    "pos": "n.phr.",
    "en_def": "a session when a photographer takes many photos",
    "cn_def": "拍攝工作"
  },
  "typography": {
    "pos": "n.",
    "en_def": "the style and arrangement of printed letters",
    "cn_def": "字體排印"
  },
  "eureka moment": {
    "pos": "n.phr.",
    "en_def": "a sudden moment when you find a great idea",
    "cn_def": "靈光乍現的時刻"
  },
  "stained glass": {
    "pos": "n.phr.",
    "en_def": "coloured glass used to make pictures in windows",
    "cn_def": "彩繪玻璃"
  },
  "mood board": {
    "pos": "n.phr.",
    "en_def": "a collection of pictures and colours used to plan a design",
    "cn_def": "情緒板;靈感板"
  },
  "conceptual art": {
    "pos": "n.phr.",
    "en_def": "art in which the idea matters more than the object",
    "cn_def": "觀念藝術"
  },
  "a work of art": {
    "pos": "n.phr.",
    "en_def": "a painting, sculpture or other piece of art; something very beautiful",
    "cn_def": "藝術品"
  },
  "beauty is in the eye of the beholder": {
    "pos": "n.phr.",
    "en_def": "different people have different ideas of what is beautiful",
    "cn_def": "情人眼裡出西施;美因人而異"
  },
  "modern art": {
    "pos": "n.phr.",
    "en_def": "art from about the 1860s to the 1970s that broke old rules",
    "cn_def": "現代藝術"
  },
  "obscurity": {
    "pos": "n.",
    "en_def": "the state of being unknown",
    "cn_def": "默默無聞"
  },
  "sophistication": {
    "pos": "n.",
    "en_def": "a high level of skill and complexity",
    "cn_def": "精緻;成熟老練"
  },
  "art movement": {
    "pos": "n.phr.",
    "en_def": "a group of artists who share ideas and a style for a period",
    "cn_def": "藝術運動;流派"
  },
  "writer's block": {
    "pos": "n.phr.",
    "en_def": "a time when a writer cannot think what to write",
    "cn_def": "寫作瓶頸"
  },
  "symbolism": {
    "pos": "n.",
    "en_def": "the use of objects or colours to represent ideas",
    "cn_def": "象徵手法"
  },
  "musical": {
    "pos": "n.",
    "en_def": "a play or film with many songs and dances",
    "cn_def": "音樂劇"
  },
  "romanticism": {
    "pos": "n.",
    "en_def": "an art movement that valued emotion, nature and imagination",
    "cn_def": "浪漫主義"
  },
  "poise": {
    "pos": "n.",
    "en_def": "a calm, confident way of behaving",
    "cn_def": "沉著;泰然自若"
  },
  "embroidery": {
    "pos": "n.",
    "en_def": "pictures sewn onto cloth with coloured thread",
    "cn_def": "刺繡"
  },
  "satirise": {
    "pos": "v.",
    "en_def": "to use humour to criticise people or ideas",
    "cn_def": "諷刺"
  },
  "outshine": {
    "pos": "v.",
    "en_def": "to be much better than others",
    "cn_def": "勝過;比…出色"
  },
  "recreate": {
    "pos": "v.",
    "en_def": "to make something exist again or copy it",
    "cn_def": "重現"
  },
  "provocation": {
    "pos": "n.",
    "en_def": "an action that makes people angry or react",
    "cn_def": "挑釁"
  },
  "melody": {
    "pos": "n.",
    "en_def": "a tune; a series of musical notes",
    "cn_def": "旋律"
  },
  "virtuosity": {
    "pos": "n.",
    "en_def": "very great skill in music or art",
    "cn_def": "精湛技藝"
  },
  "versatility": {
    "pos": "n.",
    "en_def": "the ability to do many different things well",
    "cn_def": "多才多藝;多樣性"
  },
  "premiere": {
    "pos": "n.",
    "en_def": "the first public performance of a film or play",
    "cn_def": "首映;首演"
  },
  "legitimacy": {
    "pos": "n.",
    "en_def": "the state of being accepted as real or fair",
    "cn_def": "正當性;合法地位"
  },
  "a picture is worth a thousand words": {
    "pos": "n.phr.",
    "en_def": "an image can explain more than a long description",
    "cn_def": "一圖勝千言"
  },
  "folk art": {
    "pos": "n.phr.",
    "en_def": "traditional art made by ordinary people in a region",
    "cn_def": "民俗藝術"
  },
  "divergent thinking": {
    "pos": "n.phr.",
    "en_def": "thinking of many different answers to one problem",
    "cn_def": "擴散性思考"
  }
};

const EXTRA_GLOSSES = {};
