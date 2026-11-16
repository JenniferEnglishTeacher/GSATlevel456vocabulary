// Topic 17 Subunit 6 Quiz Data: Photography, Design & Digital Art 攝影、設計與數位藝術
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T17 S06 - Photography, Design & Digital Art 攝影、設計與數位藝術",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "photographer",
    "pos": "n.",
    "cn_def": "攝影師",
    "en_def": "a person who takes photographs, often as a job",
    "sentence": "The wedding {{BLANK}} asked everyone to stand closer together, and then he climbed on a chair to take a group photo.",
    "cn": "婚禮攝影師請大家站近一點,然後他爬上椅子拍了一張團體照。"
  },
  {
    "word": "photography",
    "pos": "n.",
    "cn_def": "攝影",
    "en_def": "the art or job of taking photos",
    "sentence": "He became interested in {{BLANK}} when his grandfather gave him an old film camera on his sixteenth birthday.",
    "cn": "他在爺爺於他十六歲生日送他一台舊底片相機後,開始對攝影產生興趣。"
  },
  {
    "word": "snapshot",
    "pos": "n.",
    "cn_def": "快照;隨手拍",
    "en_def": "a quick, informal photo",
    "sentence": "I took a quick {{BLANK}} of my friends at the night market, and it became my favourite photo of the whole trip.",
    "cn": "我在夜市幫朋友隨手拍了一張照片,它成了整趟旅行中我最喜歡的照片。"
  },
  {
    "word": "tripod",
    "pos": "n.",
    "cn_def": "三腳架",
    "en_def": "a three-legged stand that holds a camera steady",
    "sentence": "You need a {{BLANK}} to photograph stars at night, because even a tiny movement of your hands will make the picture blurry.",
    "cn": "晚上拍星星需要三腳架,因為即使手稍微晃動都會讓照片模糊。"
  },
  {
    "word": "shutter",
    "pos": "n.",
    "cn_def": "快門",
    "en_def": "the part of a camera that opens to let in light",
    "sentence": "Press the {{BLANK}} button gently when the bird opens its wings, or you might miss the perfect moment.",
    "cn": "在鳥張開翅膀時輕按快門鍵,否則你可能會錯過完美的瞬間。"
  },
  {
    "word": "aperture",
    "pos": "n.",
    "cn_def": "光圈",
    "en_def": "the hole in a camera lens that controls light",
    "sentence": "A wide {{BLANK}} lets in more light, so it is useful when you take photos in a dark restaurant.",
    "cn": "大光圈能讓更多光線進入,所以在昏暗的餐廳拍照時很有用。"
  },
  {
    "word": "zoom",
    "pos": "v.",
    "cn_def": "拉近;放大",
    "en_def": "to make something look closer with a camera",
    "sentence": "The photographer had to {{BLANK}} in on the shy deer, because it would run away if he walked any closer.",
    "cn": "攝影師必須把鏡頭拉近拍那隻害羞的鹿,因為他再走近一點牠就會跑掉。"
  },
  {
    "word": "close-up",
    "pos": "n.",
    "cn_def": "特寫",
    "en_def": "a photo taken from very near",
    "sentence": "The film begins with a {{BLANK}} of the girl's eyes, so the audience immediately feels her fear.",
    "cn": "這部電影以女孩雙眼的特寫開場,所以觀眾立刻感受到她的恐懼。"
  },
  {
    "word": "flash",
    "pos": "n.",
    "cn_def": "閃光燈",
    "en_def": "a bright light on a camera for dark places",
    "sentence": "Please turn off your {{BLANK}} inside the museum, because strong light can slowly damage old paintings.",
    "cn": "在博物館裡請關閉閃光燈,因為強光會慢慢損害古老的畫作。"
  },
  {
    "word": "darkroom",
    "pos": "n.",
    "cn_def": "暗房",
    "en_def": "a dark room for developing film photos",
    "sentence": "In the school {{BLANK}}, we watched the picture slowly appear on the paper, and it felt like magic.",
    "cn": "在學校的暗房裡,我們看著影像慢慢浮現在相紙上,感覺就像魔法一樣。"
  },
  {
    "word": "black-and-white",
    "pos": "adj.",
    "cn_def": "黑白的",
    "en_def": "showing only black, white and grey",
    "sentence": "She prefers {{BLANK}} photos of old streets, because she thinks colour makes them look too modern.",
    "cn": "她比較喜歡老街的黑白照片,因為她認為彩色會讓它們看起來太現代。"
  },
  {
    "word": "graphic design",
    "pos": "n.phr.",
    "cn_def": "平面設計",
    "en_def": "the art of combining words and pictures for posters, websites etc.",
    "sentence": "My sister studies {{BLANK}} at university, and she designed the logo for our family's noodle shop.",
    "cn": "我姊姊在大學念平面設計,她為我們家的麵店設計了招牌標誌。"
  },
  {
    "word": "graphic designer",
    "pos": "n.phr.",
    "cn_def": "平面設計師",
    "en_def": "a person who designs posters, books or websites",
    "sentence": "The company hired a {{BLANK}} to make its website look modern, and sales rose within a few months.",
    "cn": "這家公司聘請了一位平面設計師讓網站看起來更現代,幾個月內業績就上升了。"
  },
  {
    "word": "typography",
    "pos": "n.",
    "cn_def": "字體排印",
    "en_def": "the style and arrangement of printed letters",
    "sentence": "Good {{BLANK}} makes a menu easy to read, but a strange font can make customers feel confused.",
    "cn": "好的字體排印讓菜單容易閱讀,但奇怪的字型會讓顧客感到困惑。"
  },
  {
    "word": "font",
    "pos": "n.",
    "cn_def": "字型",
    "en_def": "a set of letters in one style and size",
    "sentence": "Please use a simple {{BLANK}} for your report, because the fancy one is hard for the teacher to read.",
    "cn": "你的報告請用簡單的字型,因為花俏的字型老師很難閱讀。"
  },
  {
    "word": "colour scheme",
    "pos": "n.phr.",
    "cn_def": "配色",
    "en_def": "the set of colours chosen for a design",
    "sentence": "We chose a calm {{BLANK}} of light blue and white for the bedroom, so it feels peaceful at night.",
    "cn": "我們為臥室選了淺藍和白色的沉穩配色,所以晚上感覺很寧靜。"
  },
  {
    "word": "digital art",
    "pos": "n.phr.",
    "cn_def": "數位藝術",
    "en_def": "art made with computers or tablets",
    "sentence": "{{BLANK}} has become very popular with teenagers, because they can draw on a tablet and share the work online at once.",
    "cn": "數位藝術在青少年間變得非常受歡迎,因為他們能在平板上作畫並立刻上網分享。"
  },
  {
    "word": "pixel",
    "pos": "n.",
    "cn_def": "像素",
    "en_def": "one of the tiny dots that make a digital image",
    "sentence": "If you make the photo too large, you will see every {{BLANK}}, so the picture will look blocky.",
    "cn": "如果你把照片放得太大,就會看到每一個像素,所以畫面會看起來像方塊。"
  },
  {
    "word": "animation",
    "pos": "n.",
    "cn_def": "動畫",
    "en_def": "moving pictures made from drawings or computer images",
    "sentence": "Japanese {{BLANK}} is loved around the world, and some films take years to finish because every scene is drawn by hand.",
    "cn": "日本動畫受到全世界喜愛,有些電影要花數年才能完成,因為每一幕都是手繪的。"
  },
  {
    "word": "animator",
    "pos": "n.",
    "cn_def": "動畫師",
    "en_def": "a person who makes animated films",
    "sentence": "The {{BLANK}} drew twelve pictures for every second of the film, so a short scene took him several weeks.",
    "cn": "這位動畫師為影片的每一秒畫了十二張圖,所以一個短短的場景就花了他好幾週。"
  },
  {
    "word": "NFT",
    "pos": "n.",
    "cn_def": "非同質化代幣",
    "en_def": "a digital certificate that shows who owns a digital artwork",
    "sentence": "He sold a cartoon cat as an {{BLANK}} for a lot of money, but a year later nobody wanted to buy it.",
    "cn": "他把一隻卡通貓以非同質化代幣的形式賣了很多錢,但一年後就沒人想買了。"
  },
  {
    "word": "AI-generated",
    "pos": "adj.",
    "cn_def": "人工智慧生成的",
    "en_def": "made by artificial intelligence, not a person",
    "sentence": "The {{BLANK}} picture won first prize in the contest, so many human artists complained that the result was unfair.",
    "cn": "那幅人工智慧生成的圖片在比賽中贏得首獎,所以許多人類藝術家抱怨結果不公平。"
  },
  {
    "word": "retouch",
    "pos": "v.",
    "cn_def": "修圖",
    "en_def": "to improve a photo by making small changes",
    "sentence": "Magazines often {{BLANK}} photos of models to hide spots, but this gives young readers unrealistic ideas about beauty.",
    "cn": "雜誌常修圖遮掉模特兒臉上的斑點,但這讓年輕讀者對美產生不切實際的想法。"
  },
  {
    "word": "photo shoot",
    "pos": "n.phr.",
    "cn_def": "拍攝工作",
    "en_def": "a session when a photographer takes many photos",
    "sentence": "The band had a {{BLANK}} on the beach for their new album, but the strong wind kept blowing the singer's hair.",
    "cn": "樂團為新專輯在海灘進行拍攝工作,但強風一直吹亂主唱的頭髮。"
  },
  {
    "word": "stylus",
    "pos": "n.",
    "cn_def": "觸控筆",
    "en_def": "a pen-shaped tool for drawing on a screen",
    "sentence": "She draws her comics with a {{BLANK}} on a tablet, so she can easily fix mistakes with one click.",
    "cn": "她用觸控筆在平板上畫漫畫,所以只要點一下就能輕鬆修正錯誤。"
  },
  {
    "word": "visual effects",
    "pos": "n.phr.",
    "cn_def": "視覺特效",
    "en_def": "images added to films by computer",
    "sentence": "The film used amazing {{BLANK}} to show dragons flying over the city, and it won an award for them.",
    "cn": "這部電影運用驚人的視覺特效呈現飛越城市的巨龍,並因此獲獎。"
  },
  {
    "word": "cartoon",
    "pos": "n.",
    "cn_def": "卡通;漫畫",
    "en_def": "a funny drawing or animated film",
    "sentence": "My little brother watches a {{BLANK}} every morning before school, and he copies the characters' funny voices all day.",
    "cn": "我弟弟每天早上上學前都會看一部卡通,然後一整天模仿角色的搞笑聲音。"
  },
  {
    "word": "comic book",
    "pos": "n.phr.",
    "cn_def": "漫畫書",
    "en_def": "a magazine that tells stories in pictures",
    "sentence": "I learned many English words from reading a {{BLANK}} every week, because the pictures helped me guess the meanings.",
    "cn": "我每週讀一本漫畫書,從中學到很多英文單字,因為圖片幫助我猜出意思。"
  }
];

const MCQS = [
  {
    "q": "The wedding _____ asked everyone to stand closer together, and then he climbed on a chair to take a group photo.",
    "options": [
      "renown",
      "patronage",
      "photographer",
      "improvisation"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "He became interested in _____ when his grandfather gave him an old film camera on his sixteenth birthday.",
    "options": [
      "Impressionism",
      "photography",
      "bust",
      "improvisation"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "I took a quick _____ of my friends at the night market, and it became my favourite photo of the whole trip.",
    "options": [
      "ideal",
      "audition",
      "triumph",
      "snapshot"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "You need a _____ to photograph stars at night, because even a tiny movement of your hands will make the picture blurry.",
    "options": [
      "tripod",
      "wax",
      "risk-taking",
      "mastery"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Press the _____ button gently when the bird opens its wings, or you might miss the perfect moment.",
    "options": [
      "style",
      "masterpiece",
      "mediocrity",
      "shutter"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "A wide _____ lets in more light, so it is useful when you take photos in a dark restaurant.",
    "options": [
      "craftsmanship",
      "aperture",
      "melancholy",
      "versatility"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The photographer had to _____ in on the shy deer, because it would run away if he walked any closer.",
    "options": [
      "intrigue",
      "doodle",
      "zoom",
      "authenticate"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The film begins with a _____ of the girl's eyes, so the audience immediately feels her fear.",
    "options": [
      "close-up",
      "sincerity",
      "inclusivity",
      "self-expression"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Please turn off your _____ inside the museum, because strong light can slowly damage old paintings.",
    "options": [
      "harmony",
      "paper-cutting",
      "irony",
      "flash"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "In the school _____, we watched the picture slowly appear on the paper, and it felt like magic.",
    "options": [
      "lacquer",
      "darkroom",
      "symbolism",
      "performer"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "She prefers _____ photos of old streets, because she thinks colour makes them look too modern.",
    "options": [
      "black-and-white",
      "skilful",
      "rhythmic",
      "offbeat"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "My sister studies _____ at university, and she designed the logo for our family's noodle shop.",
    "options": [
      "modern art",
      "pop art",
      "graphic design",
      "eureka moment"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The company hired a _____ to make its website look modern, and sales rose within a few months.",
    "options": [
      "graphic designer",
      "a labour of love",
      "conceptual art",
      "stained glass"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Good _____ makes a menu easy to read, but a strange font can make customers feel confused.",
    "options": [
      "prestige",
      "applause",
      "typography",
      "talent"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Please use a simple _____ for your report, because the fancy one is hard for the teacher to read.",
    "options": [
      "self-portrait",
      "font",
      "symphony",
      "philanthropy"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "We chose a calm _____ of light blue and white for the bedroom, so it feels peaceful at night.",
    "options": [
      "a work of art",
      "price tag",
      "primary colour",
      "colour scheme"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "_____ has become very popular with teenagers, because they can draw on a tablet and share the work online at once.",
    "options": [
      "beauty is in the eye of the beholder",
      "digital art",
      "writer's block",
      "still life"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "If you make the photo too large, you will see every _____, so the picture will look blocky.",
    "options": [
      "flamboyance",
      "pastel",
      "revival",
      "pixel"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Japanese _____ is loved around the world, and some films take years to finish because every scene is drawn by hand.",
    "options": [
      "animation",
      "brushstroke",
      "portrayal",
      "charcoal"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The _____ drew twelve pictures for every second of the film, so a short scene took him several weeks.",
    "options": [
      "paintbrush",
      "signature",
      "animator",
      "portrayal"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "He sold a cartoon cat as an _____ for a lot of money, but a year later nobody wanted to buy it.",
    "options": [
      "museum",
      "NFT",
      "docent",
      "sketchbook"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The _____ picture won first prize in the contest, so many human artists complained that the result was unfair.",
    "options": [
      "AI-generated",
      "reflective",
      "priceless",
      "eccentric"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Magazines often _____ photos of models to hide spots, but this gives young readers unrealistic ideas about beauty.",
    "options": [
      "rekindle",
      "scorn",
      "innovate",
      "retouch"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The band had a _____ on the beach for their new album, but the strong wind kept blowing the singer's hair.",
    "options": [
      "writer's block",
      "lateral thinking",
      "photo shoot",
      "craft fair"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "She draws her comics with a _____ on a tablet, so she can easily fix mistakes with one click.",
    "options": [
      "virtuosity",
      "genre",
      "symphony",
      "stylus"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The film used amazing _____ to show dragons flying over the city, and it won an award for them.",
    "options": [
      "a picture is worth a thousand words",
      "beauty is in the eye of the beholder",
      "visual effects",
      "standing ovation"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "My little brother watches a _____ every morning before school, and he copies the characters' funny voices all day.",
    "options": [
      "cartoon",
      "auctioneer",
      "goldsmith",
      "mural"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "I learned many English words from reading a _____ every week, because the pictures helped me guess the meanings.",
    "options": [
      "pop art",
      "comic book",
      "conceptual art",
      "mood board"
    ],
    "answer": 1,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "photographer": {
    "pos": "n.",
    "en_def": "a person who takes photographs, often as a job",
    "cn_def": "攝影師"
  },
  "photography": {
    "pos": "n.",
    "en_def": "the art or job of taking photos",
    "cn_def": "攝影"
  },
  "snapshot": {
    "pos": "n.",
    "en_def": "a quick, informal photo",
    "cn_def": "快照;隨手拍"
  },
  "tripod": {
    "pos": "n.",
    "en_def": "a three-legged stand that holds a camera steady",
    "cn_def": "三腳架"
  },
  "shutter": {
    "pos": "n.",
    "en_def": "the part of a camera that opens to let in light",
    "cn_def": "快門"
  },
  "aperture": {
    "pos": "n.",
    "en_def": "the hole in a camera lens that controls light",
    "cn_def": "光圈"
  },
  "zoom": {
    "pos": "v.",
    "en_def": "to make something look closer with a camera",
    "cn_def": "拉近;放大"
  },
  "close-up": {
    "pos": "n.",
    "en_def": "a photo taken from very near",
    "cn_def": "特寫"
  },
  "flash": {
    "pos": "n.",
    "en_def": "a bright light on a camera for dark places",
    "cn_def": "閃光燈"
  },
  "darkroom": {
    "pos": "n.",
    "en_def": "a dark room for developing film photos",
    "cn_def": "暗房"
  },
  "black-and-white": {
    "pos": "adj.",
    "en_def": "showing only black, white and grey",
    "cn_def": "黑白的"
  },
  "graphic design": {
    "pos": "n.phr.",
    "en_def": "the art of combining words and pictures for posters, websites etc.",
    "cn_def": "平面設計"
  },
  "graphic designer": {
    "pos": "n.phr.",
    "en_def": "a person who designs posters, books or websites",
    "cn_def": "平面設計師"
  },
  "typography": {
    "pos": "n.",
    "en_def": "the style and arrangement of printed letters",
    "cn_def": "字體排印"
  },
  "font": {
    "pos": "n.",
    "en_def": "a set of letters in one style and size",
    "cn_def": "字型"
  },
  "colour scheme": {
    "pos": "n.phr.",
    "en_def": "the set of colours chosen for a design",
    "cn_def": "配色"
  },
  "digital art": {
    "pos": "n.phr.",
    "en_def": "art made with computers or tablets",
    "cn_def": "數位藝術"
  },
  "pixel": {
    "pos": "n.",
    "en_def": "one of the tiny dots that make a digital image",
    "cn_def": "像素"
  },
  "animation": {
    "pos": "n.",
    "en_def": "moving pictures made from drawings or computer images",
    "cn_def": "動畫"
  },
  "animator": {
    "pos": "n.",
    "en_def": "a person who makes animated films",
    "cn_def": "動畫師"
  },
  "nft": {
    "pos": "n.",
    "en_def": "a digital certificate that shows who owns a digital artwork",
    "cn_def": "非同質化代幣"
  },
  "ai-generated": {
    "pos": "adj.",
    "en_def": "made by artificial intelligence, not a person",
    "cn_def": "人工智慧生成的"
  },
  "retouch": {
    "pos": "v.",
    "en_def": "to improve a photo by making small changes",
    "cn_def": "修圖"
  },
  "photo shoot": {
    "pos": "n.phr.",
    "en_def": "a session when a photographer takes many photos",
    "cn_def": "拍攝工作"
  },
  "stylus": {
    "pos": "n.",
    "en_def": "a pen-shaped tool for drawing on a screen",
    "cn_def": "觸控筆"
  },
  "visual effects": {
    "pos": "n.phr.",
    "en_def": "images added to films by computer",
    "cn_def": "視覺特效"
  },
  "cartoon": {
    "pos": "n.",
    "en_def": "a funny drawing or animated film",
    "cn_def": "卡通;漫畫"
  },
  "comic book": {
    "pos": "n.phr.",
    "en_def": "a magazine that tells stories in pictures",
    "cn_def": "漫畫書"
  },
  "renown": {
    "pos": "n.",
    "en_def": "the state of being famous",
    "cn_def": "名聲;聲望"
  },
  "patronage": {
    "pos": "n.",
    "en_def": "money and support given to artists by a rich person",
    "cn_def": "贊助"
  },
  "improvisation": {
    "pos": "n.",
    "en_def": "performing without planning beforehand",
    "cn_def": "即興表演"
  },
  "impressionism": {
    "pos": "n.",
    "en_def": "a style of painting that shows light and quick impressions",
    "cn_def": "印象派"
  },
  "bust": {
    "pos": "n.",
    "en_def": "a sculpture of a person's head and shoulders",
    "cn_def": "半身像"
  },
  "ideal": {
    "pos": "n.",
    "en_def": "a perfect idea or standard you want to reach",
    "cn_def": "理想"
  },
  "audition": {
    "pos": "n.",
    "en_def": "a short performance to get a role in a show",
    "cn_def": "試鏡;甄選"
  },
  "triumph": {
    "pos": "n.",
    "en_def": "a great success",
    "cn_def": "巨大成功;勝利"
  },
  "wax": {
    "pos": "n.",
    "en_def": "a soft substance used to make candles and models",
    "cn_def": "蠟"
  },
  "risk-taking": {
    "pos": "n.",
    "en_def": "doing things that might fail in order to achieve something",
    "cn_def": "冒險"
  },
  "mastery": {
    "pos": "n.",
    "en_def": "great skill or knowledge of something",
    "cn_def": "精通;熟練掌握"
  },
  "style": {
    "pos": "n.",
    "en_def": "a particular way of making art",
    "cn_def": "風格"
  },
  "masterpiece": {
    "pos": "n.",
    "en_def": "an extremely good work of art",
    "cn_def": "傑作"
  },
  "mediocrity": {
    "pos": "n.",
    "en_def": "the quality of being only average and not very good",
    "cn_def": "平庸"
  },
  "craftsmanship": {
    "pos": "n.",
    "en_def": "skill in making things by hand",
    "cn_def": "工藝技術;手藝"
  },
  "melancholy": {
    "pos": "n.",
    "en_def": "a feeling of quiet sadness",
    "cn_def": "憂鬱;惆悵"
  },
  "versatility": {
    "pos": "n.",
    "en_def": "the ability to do many different things well",
    "cn_def": "多才多藝;多樣性"
  },
  "intrigue": {
    "pos": "v.",
    "en_def": "to make someone very interested and curious",
    "cn_def": "引起好奇"
  },
  "doodle": {
    "pos": "v.",
    "en_def": "to draw small pictures without thinking carefully",
    "cn_def": "隨手塗鴉"
  },
  "authenticate": {
    "pos": "v.",
    "en_def": "to prove that something is real and not a copy",
    "cn_def": "鑑定真偽"
  },
  "sincerity": {
    "pos": "n.",
    "en_def": "the quality of being honest and true in feelings",
    "cn_def": "真誠"
  },
  "inclusivity": {
    "pos": "n.",
    "en_def": "including all kinds of people",
    "cn_def": "包容性"
  },
  "self-expression": {
    "pos": "n.",
    "en_def": "showing your feelings and ideas through art or actions",
    "cn_def": "自我表達"
  },
  "harmony": {
    "pos": "n.",
    "en_def": "pleasant musical notes sung or played together",
    "cn_def": "和聲"
  },
  "paper-cutting": {
    "pos": "n.",
    "en_def": "the art of cutting paper into pretty patterns",
    "cn_def": "剪紙"
  },
  "irony": {
    "pos": "n.",
    "en_def": "a situation that is the opposite of what you expect",
    "cn_def": "諷刺"
  },
  "lacquer": {
    "pos": "n.",
    "en_def": "a shiny liquid painted on wood to protect and decorate it",
    "cn_def": "漆"
  },
  "symbolism": {
    "pos": "n.",
    "en_def": "the use of objects or colours to represent ideas",
    "cn_def": "象徵手法"
  },
  "performer": {
    "pos": "n.",
    "en_def": "a person who entertains an audience",
    "cn_def": "表演者"
  },
  "skilful": {
    "pos": "adj.",
    "en_def": "very good at doing something",
    "cn_def": "熟練的;技巧高超的"
  },
  "rhythmic": {
    "pos": "adj.",
    "en_def": "having a regular repeated pattern of sounds",
    "cn_def": "有節奏的"
  },
  "offbeat": {
    "pos": "adj.",
    "en_def": "unusual and not what most people expect",
    "cn_def": "另類的;不落俗套的"
  },
  "modern art": {
    "pos": "n.phr.",
    "en_def": "art from about the 1860s to the 1970s that broke old rules",
    "cn_def": "現代藝術"
  },
  "pop art": {
    "pos": "n.phr.",
    "en_def": "art that uses images from advertising and popular culture",
    "cn_def": "普普藝術"
  },
  "eureka moment": {
    "pos": "n.phr.",
    "en_def": "a sudden moment when you find a great idea",
    "cn_def": "靈光乍現的時刻"
  },
  "a labour of love": {
    "pos": "n.phr.",
    "en_def": "hard work done because you love it, not for money",
    "cn_def": "出於熱愛而做的辛苦工作"
  },
  "conceptual art": {
    "pos": "n.phr.",
    "en_def": "art in which the idea matters more than the object",
    "cn_def": "觀念藝術"
  },
  "stained glass": {
    "pos": "n.phr.",
    "en_def": "coloured glass used to make pictures in windows",
    "cn_def": "彩繪玻璃"
  },
  "prestige": {
    "pos": "n.",
    "en_def": "respect that comes from success or importance",
    "cn_def": "聲望"
  },
  "applause": {
    "pos": "n.",
    "en_def": "the sound of people clapping",
    "cn_def": "掌聲"
  },
  "talent": {
    "pos": "n.",
    "en_def": "a natural ability to do something well",
    "cn_def": "天賦"
  },
  "self-portrait": {
    "pos": "n.",
    "en_def": "a picture an artist makes of himself or herself",
    "cn_def": "自畫像"
  },
  "symphony": {
    "pos": "n.",
    "en_def": "a long piece of music for an orchestra",
    "cn_def": "交響曲"
  },
  "philanthropy": {
    "pos": "n.",
    "en_def": "giving money to help others",
    "cn_def": "慈善事業"
  },
  "a work of art": {
    "pos": "n.phr.",
    "en_def": "a painting, sculpture or other piece of art; something very beautiful",
    "cn_def": "藝術品"
  },
  "price tag": {
    "pos": "n.phr.",
    "en_def": "the cost of something",
    "cn_def": "價格;標價"
  },
  "primary colour": {
    "pos": "n.phr.",
    "en_def": "red, yellow or blue, which mix to make other colours",
    "cn_def": "原色"
  },
  "beauty is in the eye of the beholder": {
    "pos": "n.phr.",
    "en_def": "different people have different ideas of what is beautiful",
    "cn_def": "情人眼裡出西施;美因人而異"
  },
  "writer's block": {
    "pos": "n.phr.",
    "en_def": "a time when a writer cannot think what to write",
    "cn_def": "寫作瓶頸"
  },
  "still life": {
    "pos": "n.phr.",
    "en_def": "a picture of objects such as fruit, flowers or bottles",
    "cn_def": "靜物畫"
  },
  "flamboyance": {
    "pos": "n.",
    "en_def": "a very confident, colourful and showy style",
    "cn_def": "浮誇;張揚"
  },
  "pastel": {
    "pos": "n.",
    "en_def": "a soft coloured chalk stick used for drawing",
    "cn_def": "粉彩筆"
  },
  "revival": {
    "pos": "n.",
    "en_def": "a time when something becomes popular again",
    "cn_def": "復興;重新流行"
  },
  "brushstroke": {
    "pos": "n.",
    "en_def": "a single mark made by a paintbrush",
    "cn_def": "筆觸"
  },
  "portrayal": {
    "pos": "n.",
    "en_def": "the way someone or something is shown in art",
    "cn_def": "描繪;刻畫"
  },
  "charcoal": {
    "pos": "n.",
    "en_def": "a black stick of burnt wood used for drawing",
    "cn_def": "炭筆"
  },
  "paintbrush": {
    "pos": "n.",
    "en_def": "a brush used for putting paint on a surface",
    "cn_def": "畫筆"
  },
  "signature": {
    "pos": "n.",
    "en_def": "an artist's name written on a work",
    "cn_def": "簽名"
  },
  "museum": {
    "pos": "n.",
    "en_def": "a building where valuable objects are kept and shown",
    "cn_def": "博物館"
  },
  "docent": {
    "pos": "n.",
    "en_def": "a trained guide who explains art in a museum",
    "cn_def": "導覽員"
  },
  "sketchbook": {
    "pos": "n.",
    "en_def": "a book of blank pages for drawing",
    "cn_def": "素描本"
  },
  "reflective": {
    "pos": "adj.",
    "en_def": "thinking quietly and deeply",
    "cn_def": "沉思的;深思的"
  },
  "priceless": {
    "pos": "adj.",
    "en_def": "so valuable that no price can be put on it",
    "cn_def": "無價的"
  },
  "eccentric": {
    "pos": "adj.",
    "en_def": "strange or unusual in behaviour",
    "cn_def": "古怪的"
  },
  "rekindle": {
    "pos": "v.",
    "en_def": "to make a feeling active again",
    "cn_def": "重新燃起"
  },
  "scorn": {
    "pos": "v.",
    "en_def": "to show that you think something is worthless",
    "cn_def": "輕蔑;鄙視"
  },
  "innovate": {
    "pos": "v.",
    "en_def": "to introduce new ideas or methods",
    "cn_def": "創新"
  },
  "lateral thinking": {
    "pos": "n.phr.",
    "en_def": "solving problems in unusual and creative ways",
    "cn_def": "水平思考"
  },
  "craft fair": {
    "pos": "n.phr.",
    "en_def": "an event where people sell things they have made by hand",
    "cn_def": "手作市集"
  },
  "virtuosity": {
    "pos": "n.",
    "en_def": "very great skill in music or art",
    "cn_def": "精湛技藝"
  },
  "genre": {
    "pos": "n.",
    "en_def": "a type of art, music or writing",
    "cn_def": "類型"
  },
  "a picture is worth a thousand words": {
    "pos": "n.phr.",
    "en_def": "an image can explain more than a long description",
    "cn_def": "一圖勝千言"
  },
  "standing ovation": {
    "pos": "n.phr.",
    "en_def": "when an audience stands up to clap for a long time",
    "cn_def": "起立鼓掌"
  },
  "auctioneer": {
    "pos": "n.",
    "en_def": "the person who runs an auction",
    "cn_def": "拍賣官"
  },
  "goldsmith": {
    "pos": "n.",
    "en_def": "a person who makes things from gold",
    "cn_def": "金匠"
  },
  "mural": {
    "pos": "n.",
    "en_def": "a large picture painted on a wall",
    "cn_def": "壁畫"
  },
  "mood board": {
    "pos": "n.phr.",
    "en_def": "a collection of pictures and colours used to plan a design",
    "cn_def": "情緒板;靈感板"
  }
};

const EXTRA_GLOSSES = {};
