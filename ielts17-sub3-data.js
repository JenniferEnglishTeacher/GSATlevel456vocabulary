// Topic 17 Subunit 3 Quiz Data: Artists, Styles & Movements 藝術家、風格與流派
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T17 S03 - Artists, Styles & Movements 藝術家、風格與流派",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "Impressionism",
    "pos": "n.",
    "cn_def": "印象派",
    "en_def": "a style of painting that shows light and quick impressions",
    "sentence": "{{BLANK}} began in France in the 1870s, and its painters often worked outdoors to catch changing light on water and fields.",
    "cn": "印象派於1870年代在法國興起,其畫家常在戶外作畫,以捕捉水面和田野上變幻的光線。"
  },
  {
    "word": "Impressionist",
    "pos": "n.",
    "cn_def": "印象派畫家",
    "en_def": "a painter in the style of Impressionism",
    "sentence": "Monet was a famous {{BLANK}}, and he painted the same pond again and again because the light changed every hour.",
    "cn": "莫內是一位著名的印象派畫家,他一再畫同一座池塘,因為光線每小時都在變化。"
  },
  {
    "word": "Cubism",
    "pos": "n.",
    "cn_def": "立體派",
    "en_def": "an art style that shows objects as many geometric shapes",
    "sentence": "In {{BLANK}}, a face may be shown from the front and the side at the same time, so the picture can look confusing at first.",
    "cn": "在立體派中,一張臉可能同時從正面和側面呈現,所以畫面一開始可能看起來令人困惑。"
  },
  {
    "word": "Surrealism",
    "pos": "n.",
    "cn_def": "超現實主義",
    "en_def": "an art style that shows strange, dreamlike scenes",
    "sentence": "{{BLANK}} was inspired by dreams, so its paintings often show melting clocks or fish flying through the sky.",
    "cn": "超現實主義受到夢境啟發,所以它的畫作常出現融化的時鐘或在天空飛翔的魚。"
  },
  {
    "word": "surreal",
    "pos": "adj.",
    "cn_def": "超現實的;離奇的",
    "en_def": "very strange, like a dream",
    "sentence": "Walking through the empty city at dawn felt {{BLANK}}, because the streets that are usually so busy were completely silent.",
    "cn": "黎明時走過空蕩的城市感覺很離奇,因為平常熱鬧的街道完全寂靜無聲。"
  },
  {
    "word": "Expressionism",
    "pos": "n.",
    "cn_def": "表現主義",
    "en_def": "an art style that shows strong feelings rather than real appearance",
    "sentence": "{{BLANK}} uses wild colours and twisted shapes, because the artists wanted to show fear and anger rather than real faces.",
    "cn": "表現主義使用狂野的色彩和扭曲的形狀,因為藝術家想表現恐懼和憤怒,而不是真實的面孔。"
  },
  {
    "word": "pop art",
    "pos": "n.phr.",
    "cn_def": "普普藝術",
    "en_def": "art that uses images from advertising and popular culture",
    "sentence": "{{BLANK}} turned soup cans and comic books into famous paintings, and it made people ask what art really is.",
    "cn": "普普藝術把湯罐頭和漫畫書變成名畫,也讓人們思考藝術究竟是什麼。"
  },
  {
    "word": "realism",
    "pos": "n.",
    "cn_def": "寫實主義",
    "en_def": "showing things as they really are",
    "sentence": "The painter is known for his {{BLANK}}, and his pictures of tired farmers look almost like photographs.",
    "cn": "這位畫家以寫實主義聞名,他筆下疲憊的農民看起來幾乎就像照片一樣。"
  },
  {
    "word": "Romanticism",
    "pos": "n.",
    "cn_def": "浪漫主義",
    "en_def": "an art movement that valued emotion, nature and imagination",
    "sentence": "{{BLANK}} painters loved stormy seas and dark forests, because they believed nature could make people feel strong emotions.",
    "cn": "浪漫主義畫家熱愛暴風雨的海洋和幽暗的森林,因為他們相信大自然能讓人產生強烈的情感。"
  },
  {
    "word": "Baroque",
    "pos": "adj.",
    "cn_def": "巴洛克風格的",
    "en_def": "in a rich, dramatic European style of the 1600s",
    "sentence": "The {{BLANK}} church is full of gold decorations and dramatic paintings, so visitors usually look up at the ceiling in silence.",
    "cn": "這座巴洛克風格的教堂到處是金色裝飾和戲劇性的畫作,所以遊客通常會靜靜地抬頭仰望天花板。"
  },
  {
    "word": "Gothic",
    "pos": "adj.",
    "cn_def": "哥德式的",
    "en_def": "in a medieval style with tall pointed arches",
    "sentence": "The {{BLANK}} cathedral has tall pointed windows, and it took almost two hundred years for the builders to finish it.",
    "cn": "這座哥德式的大教堂有高聳的尖窗,而工匠們花了將近兩百年才完成它。"
  },
  {
    "word": "avant-garde",
    "pos": "adj.",
    "cn_def": "前衛的",
    "en_def": "very new and experimental in art or ideas",
    "sentence": "The theatre group performs {{BLANK}} plays without any words, so some audiences love them while others leave early.",
    "cn": "這個劇團演出沒有任何台詞的前衛戲劇,所以有些觀眾很喜愛,而有些則提早離場。"
  },
  {
    "word": "contemporary art",
    "pos": "n.phr.",
    "cn_def": "當代藝術",
    "en_def": "art made in recent times",
    "sentence": "Many people find {{BLANK}} hard to understand, but the guide explained each work, so our visit became much more interesting.",
    "cn": "許多人覺得當代藝術難以理解,但導覽員解說了每件作品,所以我們的參觀變得有趣多了。"
  },
  {
    "word": "conceptual art",
    "pos": "n.phr.",
    "cn_def": "觀念藝術",
    "en_def": "art in which the idea matters more than the object",
    "sentence": "In {{BLANK}}, the idea behind the work is more important than its skill, so a simple chair can become a serious artwork.",
    "cn": "在觀念藝術中,作品背後的想法比技巧更重要,所以一張簡單的椅子也能成為嚴肅的藝術品。"
  },
  {
    "word": "modern art",
    "pos": "n.phr.",
    "cn_def": "現代藝術",
    "en_def": "art from about the 1860s to the 1970s that broke old rules",
    "sentence": "My grandfather says that {{BLANK}} looks like a child's drawing, but my sister explains why the artists broke the old rules.",
    "cn": "我爺爺說現代藝術看起來像小孩的塗鴉,但我姊姊解釋了為什麼藝術家要打破舊規則。"
  },
  {
    "word": "folk art",
    "pos": "n.phr.",
    "cn_def": "民俗藝術",
    "en_def": "traditional art made by ordinary people in a region",
    "sentence": "Hakka {{BLANK}} includes painted umbrellas and simple cloth patterns, and it shows the daily life of country people.",
    "cn": "客家民俗藝術包括彩繪紙傘和簡樸的布料圖案,展現了鄉村百姓的日常生活。"
  },
  {
    "word": "art movement",
    "pos": "n.phr.",
    "cn_def": "藝術運動;流派",
    "en_def": "a group of artists who share ideas and a style for a period",
    "sentence": "The young painters started a new {{BLANK}} in Paris, because they were tired of the strict rules of the art academy.",
    "cn": "這群年輕畫家在巴黎發起一場新的藝術運動,因為他們厭倦了藝術學院的嚴格規範。"
  },
  {
    "word": "genre",
    "pos": "n.",
    "cn_def": "類型",
    "en_def": "a type of art, music or writing",
    "sentence": "Hip-hop is my favourite music {{BLANK}}, but my parents prefer old Taiwanese folk songs from their childhood.",
    "cn": "嘻哈是我最喜歡的音樂類型,但我爸媽比較喜歡他們童年時的台灣老民謠。"
  },
  {
    "word": "style",
    "pos": "n.",
    "cn_def": "風格",
    "en_def": "a particular way of making art",
    "sentence": "Each artist develops a personal {{BLANK}} over many years, so experts can often recognise a painting before reading the name.",
    "cn": "每位藝術家都要花很多年發展個人風格,所以專家常常在看到名字之前就能認出畫作。"
  },
  {
    "word": "stylistic",
    "pos": "adj.",
    "cn_def": "風格上的",
    "en_def": "relating to the style of a work of art",
    "sentence": "There are clear {{BLANK}} differences between his early and late paintings, because he lost much of his eyesight in old age.",
    "cn": "他早期和晚期的畫作有明顯的風格上的差異,因為他晚年視力大幅衰退。"
  },
  {
    "word": "masterpiece",
    "pos": "n.",
    "cn_def": "傑作",
    "en_def": "an extremely good work of art",
    "sentence": "Many people think the \"Mona Lisa\" is a {{BLANK}}, but some visitors are surprised because the painting is quite small.",
    "cn": "許多人認為《蒙娜麗莎》是一件傑作,但有些參觀者很驚訝,因為這幅畫相當小。"
  },
  {
    "word": "old master",
    "pos": "n.phr.",
    "cn_def": "古典大師",
    "en_def": "a great European painter from before about 1800",
    "sentence": "The museum owns a painting by an {{BLANK}} from the 1600s, so it is kept behind thick glass and guarded day and night.",
    "cn": "博物館擁有一幅1600年代古典大師的畫作,所以它被放在厚玻璃後面,日夜都有人看守。"
  },
  {
    "word": "virtuoso",
    "pos": "n.",
    "cn_def": "大師;名家",
    "en_def": "a person with great skill, especially in music",
    "sentence": "The young pianist is a real {{BLANK}}, and she can play the most difficult pieces without looking at the music.",
    "cn": "這位年輕鋼琴家是真正的名家,她不看樂譜就能彈奏最困難的曲子。"
  },
  {
    "word": "muse",
    "pos": "n.",
    "cn_def": "繆思;靈感來源",
    "en_def": "a person who gives an artist ideas and inspiration",
    "sentence": "The singer says his wife is his {{BLANK}}, because most of his love songs were written about her.",
    "cn": "這位歌手說他的妻子是他的繆思,因為他大部分的情歌都是為她寫的。"
  },
  {
    "word": "signature",
    "pos": "n.",
    "cn_def": "簽名",
    "en_def": "an artist's name written on a work",
    "sentence": "Experts checked the {{BLANK}} in the corner of the painting carefully, because they suspected that the picture was a copy.",
    "cn": "專家仔細檢查畫作角落的簽名,因為他們懷疑這幅畫是複製品。"
  },
  {
    "word": "bohemian",
    "pos": "adj.",
    "cn_def": "波希米亞風的;放蕩不羈的",
    "en_def": "living in an unusual, free way like many artists",
    "sentence": "They live a {{BLANK}} life in a small flat full of paintings, and they rarely care about money or fashion.",
    "cn": "他們在堆滿畫作的小公寓裡過著放蕩不羈的生活,而且很少在乎金錢或時尚。"
  },
  {
    "word": "eccentric",
    "pos": "adj.",
    "cn_def": "古怪的",
    "en_def": "strange or unusual in behaviour",
    "sentence": "The {{BLANK}} artist wore a bright purple suit every day, and he talked to his paintings as if they were friends.",
    "cn": "這位古怪的藝術家每天都穿亮紫色西裝,而且會跟他的畫作說話,彷彿它們是朋友。"
  },
  {
    "word": "posthumous",
    "pos": "adj.",
    "cn_def": "死後的",
    "en_def": "happening after a person's death",
    "sentence": "The poet enjoyed {{BLANK}} fame, because her poems became popular only after she died in poverty.",
    "cn": "這位詩人享有死後的名聲,因為她的詩直到她在貧困中過世後才受歡迎。"
  }
];

const MCQS = [
  {
    "q": "_____ began in France in the 1870s, and its painters often worked outdoors to catch changing light on water and fields.",
    "options": [
      "reinvention",
      "photographer",
      "uniqueness",
      "Impressionism"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Monet was a famous _____, and he painted the same pond again and again because the light changed every hour.",
    "options": [
      "embellishment",
      "Impressionist",
      "reverence",
      "docent"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "In _____, a face may be shown from the front and the side at the same time, so the picture can look confusing at first.",
    "options": [
      "Cubism",
      "origami",
      "canon",
      "snapshot"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "_____ was inspired by dreams, so its paintings often show melting clocks or fish flying through the sky.",
    "options": [
      "zest",
      "symphony",
      "Surrealism",
      "discernment"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Walking through the empty city at dawn felt _____, because the streets that are usually so busy were completely silent.",
    "options": [
      "surreal",
      "accomplished",
      "artistic",
      "enigmatic"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "_____ uses wild colours and twisted shapes, because the artists wanted to show fear and anger rather than real faces.",
    "options": [
      "patronage",
      "obscurity",
      "Expressionism",
      "watercolour"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "_____ turned soup cans and comic books into famous paintings, and it made people ask what art really is.",
    "options": [
      "eureka moment",
      "pop art",
      "visual effects",
      "landscape painting"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The painter is known for his _____, and his pictures of tired farmers look almost like photographs.",
    "options": [
      "devotee",
      "impression",
      "stylus",
      "realism"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "_____ painters loved stormy seas and dark forests, because they believed nature could make people feel strong emotions.",
    "options": [
      "Romanticism",
      "triumph",
      "objectivity",
      "juxtaposition"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The _____ church is full of gold decorations and dramatic paintings, so visitors usually look up at the ceiling in silence.",
    "options": [
      "raw",
      "legendary",
      "Baroque",
      "sombre"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The _____ cathedral has tall pointed windows, and it took almost two hundred years for the builders to finish it.",
    "options": [
      "inspired",
      "Gothic",
      "accomplished",
      "acclaimed"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The theatre group performs _____ plays without any words, so some audiences love them while others leave early.",
    "options": [
      "refined",
      "understated",
      "poetic",
      "avant-garde"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Many people find _____ hard to understand, but the guide explained each work, so our visit became much more interesting.",
    "options": [
      "creative block",
      "contemporary art",
      "opening night",
      "vanishing point"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "In _____, the idea behind the work is more important than its skill, so a simple chair can become a serious artwork.",
    "options": [
      "art market",
      "a labour of love",
      "mood board",
      "conceptual art"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "My grandfather says that _____ looks like a child's drawing, but my sister explains why the artists broke the old rules.",
    "options": [
      "comic book",
      "eureka moment",
      "modern art",
      "photo shoot"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Hakka _____ includes painted umbrellas and simple cloth patterns, and it shows the daily life of country people.",
    "options": [
      "folk art",
      "creative block",
      "art for art's sake",
      "the bigger picture"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The young painters started a new _____ in Paris, because they were tired of the strict rules of the art academy.",
    "options": [
      "oil paint",
      "art movement",
      "graphic designer",
      "art fair"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Hip-hop is my favourite music _____, but my parents prefer old Taiwanese folk songs from their childhood.",
    "options": [
      "genre",
      "mediocrity",
      "snapshot",
      "flash"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Each artist develops a personal _____ over many years, so experts can often recognise a painting before reading the name.",
    "options": [
      "woodcut",
      "expression",
      "potter",
      "style"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "There are clear _____ differences between his early and late paintings, because he lost much of his eyesight in old age.",
    "options": [
      "sentimental",
      "original",
      "stylistic",
      "priceless"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Many people think the \"Mona Lisa\" is a _____, but some visitors are surprised because the painting is quite small.",
    "options": [
      "pastel",
      "masterpiece",
      "symphony",
      "theatre"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The museum owns a painting by an _____ from the 1600s, so it is kept behind thick glass and guarded day and night.",
    "options": [
      "a picture is worth a thousand words",
      "price tag",
      "guided tour",
      "old master"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The young pianist is a real _____, and she can play the most difficult pieces without looking at the music.",
    "options": [
      "virtuoso",
      "musician",
      "handicraft",
      "inclusivity"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The singer says his wife is his _____, because most of his love songs were written about her.",
    "options": [
      "sincerity",
      "flash",
      "muse",
      "fascination"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Experts checked the _____ in the corner of the painting carefully, because they suspected that the picture was a copy.",
    "options": [
      "shading",
      "sincerity",
      "elegance",
      "signature"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "They live a _____ life in a small flat full of paintings, and they rarely care about money or fashion.",
    "options": [
      "bohemian",
      "curious",
      "meaningful",
      "reflective"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The _____ artist wore a bright purple suit every day, and he talked to his paintings as if they were friends.",
    "options": [
      "reflective",
      "curious",
      "eccentric",
      "neglected"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The poet enjoyed _____ fame, because her poems became popular only after she died in poverty.",
    "options": [
      "tasteless",
      "posthumous",
      "stunning",
      "reflective"
    ],
    "answer": 1,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "impressionism": {
    "pos": "n.",
    "en_def": "a style of painting that shows light and quick impressions",
    "cn_def": "印象派"
  },
  "impressionist": {
    "pos": "n.",
    "en_def": "a painter in the style of Impressionism",
    "cn_def": "印象派畫家"
  },
  "cubism": {
    "pos": "n.",
    "en_def": "an art style that shows objects as many geometric shapes",
    "cn_def": "立體派"
  },
  "surrealism": {
    "pos": "n.",
    "en_def": "an art style that shows strange, dreamlike scenes",
    "cn_def": "超現實主義"
  },
  "surreal": {
    "pos": "adj.",
    "en_def": "very strange, like a dream",
    "cn_def": "超現實的;離奇的"
  },
  "expressionism": {
    "pos": "n.",
    "en_def": "an art style that shows strong feelings rather than real appearance",
    "cn_def": "表現主義"
  },
  "pop art": {
    "pos": "n.phr.",
    "en_def": "art that uses images from advertising and popular culture",
    "cn_def": "普普藝術"
  },
  "realism": {
    "pos": "n.",
    "en_def": "showing things as they really are",
    "cn_def": "寫實主義"
  },
  "romanticism": {
    "pos": "n.",
    "en_def": "an art movement that valued emotion, nature and imagination",
    "cn_def": "浪漫主義"
  },
  "baroque": {
    "pos": "adj.",
    "en_def": "in a rich, dramatic European style of the 1600s",
    "cn_def": "巴洛克風格的"
  },
  "gothic": {
    "pos": "adj.",
    "en_def": "in a medieval style with tall pointed arches",
    "cn_def": "哥德式的"
  },
  "avant-garde": {
    "pos": "adj.",
    "en_def": "very new and experimental in art or ideas",
    "cn_def": "前衛的"
  },
  "contemporary art": {
    "pos": "n.phr.",
    "en_def": "art made in recent times",
    "cn_def": "當代藝術"
  },
  "conceptual art": {
    "pos": "n.phr.",
    "en_def": "art in which the idea matters more than the object",
    "cn_def": "觀念藝術"
  },
  "modern art": {
    "pos": "n.phr.",
    "en_def": "art from about the 1860s to the 1970s that broke old rules",
    "cn_def": "現代藝術"
  },
  "folk art": {
    "pos": "n.phr.",
    "en_def": "traditional art made by ordinary people in a region",
    "cn_def": "民俗藝術"
  },
  "art movement": {
    "pos": "n.phr.",
    "en_def": "a group of artists who share ideas and a style for a period",
    "cn_def": "藝術運動;流派"
  },
  "genre": {
    "pos": "n.",
    "en_def": "a type of art, music or writing",
    "cn_def": "類型"
  },
  "style": {
    "pos": "n.",
    "en_def": "a particular way of making art",
    "cn_def": "風格"
  },
  "stylistic": {
    "pos": "adj.",
    "en_def": "relating to the style of a work of art",
    "cn_def": "風格上的"
  },
  "masterpiece": {
    "pos": "n.",
    "en_def": "an extremely good work of art",
    "cn_def": "傑作"
  },
  "old master": {
    "pos": "n.phr.",
    "en_def": "a great European painter from before about 1800",
    "cn_def": "古典大師"
  },
  "virtuoso": {
    "pos": "n.",
    "en_def": "a person with great skill, especially in music",
    "cn_def": "大師;名家"
  },
  "muse": {
    "pos": "n.",
    "en_def": "a person who gives an artist ideas and inspiration",
    "cn_def": "繆思;靈感來源"
  },
  "signature": {
    "pos": "n.",
    "en_def": "an artist's name written on a work",
    "cn_def": "簽名"
  },
  "bohemian": {
    "pos": "adj.",
    "en_def": "living in an unusual, free way like many artists",
    "cn_def": "波希米亞風的;放蕩不羈的"
  },
  "eccentric": {
    "pos": "adj.",
    "en_def": "strange or unusual in behaviour",
    "cn_def": "古怪的"
  },
  "posthumous": {
    "pos": "adj.",
    "en_def": "happening after a person's death",
    "cn_def": "死後的"
  },
  "reinvention": {
    "pos": "n.",
    "en_def": "changing yourself or something completely",
    "cn_def": "重新塑造;改頭換面"
  },
  "photographer": {
    "pos": "n.",
    "en_def": "a person who takes photographs, often as a job",
    "cn_def": "攝影師"
  },
  "uniqueness": {
    "pos": "n.",
    "en_def": "the quality of being the only one of its kind",
    "cn_def": "獨特性"
  },
  "embellishment": {
    "pos": "n.",
    "en_def": "a decoration added to make something more attractive",
    "cn_def": "裝飾;潤色"
  },
  "reverence": {
    "pos": "n.",
    "en_def": "deep respect",
    "cn_def": "崇敬"
  },
  "docent": {
    "pos": "n.",
    "en_def": "a trained guide who explains art in a museum",
    "cn_def": "導覽員"
  },
  "origami": {
    "pos": "n.",
    "en_def": "the Japanese art of folding paper into shapes",
    "cn_def": "摺紙"
  },
  "canon": {
    "pos": "n.",
    "en_def": "the group of works seen as the most important",
    "cn_def": "經典作品;正典"
  },
  "snapshot": {
    "pos": "n.",
    "en_def": "a quick, informal photo",
    "cn_def": "快照;隨手拍"
  },
  "zest": {
    "pos": "n.",
    "en_def": "great energy and enthusiasm",
    "cn_def": "熱情;興致"
  },
  "symphony": {
    "pos": "n.",
    "en_def": "a long piece of music for an orchestra",
    "cn_def": "交響曲"
  },
  "discernment": {
    "pos": "n.",
    "en_def": "the ability to judge what is good",
    "cn_def": "鑑賞力;辨別力"
  },
  "accomplished": {
    "pos": "adj.",
    "en_def": "very skilled at something",
    "cn_def": "技藝精湛的;有造詣的"
  },
  "artistic": {
    "pos": "adj.",
    "en_def": "showing skill in art",
    "cn_def": "有藝術天分的;藝術的"
  },
  "enigmatic": {
    "pos": "adj.",
    "en_def": "mysterious and hard to understand",
    "cn_def": "神秘的;令人費解的"
  },
  "patronage": {
    "pos": "n.",
    "en_def": "money and support given to artists by a rich person",
    "cn_def": "贊助"
  },
  "obscurity": {
    "pos": "n.",
    "en_def": "the state of being unknown",
    "cn_def": "默默無聞"
  },
  "watercolour": {
    "pos": "n.",
    "en_def": "paint mixed with water; a picture made this way",
    "cn_def": "水彩"
  },
  "eureka moment": {
    "pos": "n.phr.",
    "en_def": "a sudden moment when you find a great idea",
    "cn_def": "靈光乍現的時刻"
  },
  "visual effects": {
    "pos": "n.phr.",
    "en_def": "images added to films by computer",
    "cn_def": "視覺特效"
  },
  "landscape painting": {
    "pos": "n.phr.",
    "en_def": "a picture of natural scenery such as hills or rivers",
    "cn_def": "風景畫"
  },
  "devotee": {
    "pos": "n.",
    "en_def": "a person who loves an activity very much",
    "cn_def": "愛好者;熱衷者"
  },
  "impression": {
    "pos": "n.",
    "en_def": "the feeling or idea you get from something",
    "cn_def": "印象"
  },
  "stylus": {
    "pos": "n.",
    "en_def": "a pen-shaped tool for drawing on a screen",
    "cn_def": "觸控筆"
  },
  "triumph": {
    "pos": "n.",
    "en_def": "a great success",
    "cn_def": "巨大成功;勝利"
  },
  "objectivity": {
    "pos": "n.",
    "en_def": "judging fairly without personal feelings",
    "cn_def": "客觀性"
  },
  "juxtaposition": {
    "pos": "n.",
    "en_def": "placing two different things side by side",
    "cn_def": "並置;對比"
  },
  "raw": {
    "pos": "adj.",
    "en_def": "natural and not polished",
    "cn_def": "原始的;未經修飾的"
  },
  "legendary": {
    "pos": "adj.",
    "en_def": "very famous and admired for a long time",
    "cn_def": "傳奇的"
  },
  "sombre": {
    "pos": "adj.",
    "en_def": "dark and serious",
    "cn_def": "陰沉的;肅穆的"
  },
  "inspired": {
    "pos": "adj.",
    "en_def": "having excellent, original qualities",
    "cn_def": "靈感十足的;絕妙的"
  },
  "acclaimed": {
    "pos": "adj.",
    "en_def": "praised by many people",
    "cn_def": "廣受讚譽的"
  },
  "refined": {
    "pos": "adj.",
    "en_def": "elegant and showing good taste",
    "cn_def": "精緻的;高雅的"
  },
  "understated": {
    "pos": "adj.",
    "en_def": "simple and not trying to attract attention",
    "cn_def": "低調的;含蓄的"
  },
  "poetic": {
    "pos": "adj.",
    "en_def": "beautiful and full of feeling, like poetry",
    "cn_def": "詩意的"
  },
  "creative block": {
    "pos": "n.phr.",
    "en_def": "a time when you cannot produce new ideas",
    "cn_def": "創作瓶頸"
  },
  "opening night": {
    "pos": "n.phr.",
    "en_def": "the first evening of an exhibition or show",
    "cn_def": "開幕夜;首演之夜"
  },
  "vanishing point": {
    "pos": "n.phr.",
    "en_def": "the point where parallel lines seem to meet far away",
    "cn_def": "消失點"
  },
  "art market": {
    "pos": "n.phr.",
    "en_def": "the buying and selling of art",
    "cn_def": "藝術市場"
  },
  "a labour of love": {
    "pos": "n.phr.",
    "en_def": "hard work done because you love it, not for money",
    "cn_def": "出於熱愛而做的辛苦工作"
  },
  "mood board": {
    "pos": "n.phr.",
    "en_def": "a collection of pictures and colours used to plan a design",
    "cn_def": "情緒板;靈感板"
  },
  "comic book": {
    "pos": "n.phr.",
    "en_def": "a magazine that tells stories in pictures",
    "cn_def": "漫畫書"
  },
  "photo shoot": {
    "pos": "n.phr.",
    "en_def": "a session when a photographer takes many photos",
    "cn_def": "拍攝工作"
  },
  "art for art's sake": {
    "pos": "n.phr.",
    "en_def": "art made only for beauty, not for any other purpose",
    "cn_def": "為藝術而藝術"
  },
  "the bigger picture": {
    "pos": "n.phr.",
    "en_def": "the whole situation, not just small details",
    "cn_def": "大局;全貌"
  },
  "oil paint": {
    "pos": "n.phr.",
    "en_def": "thick paint made with oil that dries slowly",
    "cn_def": "油畫顏料"
  },
  "graphic designer": {
    "pos": "n.phr.",
    "en_def": "a person who designs posters, books or websites",
    "cn_def": "平面設計師"
  },
  "art fair": {
    "pos": "n.phr.",
    "en_def": "a large event where galleries show and sell art",
    "cn_def": "藝術博覽會"
  },
  "mediocrity": {
    "pos": "n.",
    "en_def": "the quality of being only average and not very good",
    "cn_def": "平庸"
  },
  "flash": {
    "pos": "n.",
    "en_def": "a bright light on a camera for dark places",
    "cn_def": "閃光燈"
  },
  "woodcut": {
    "pos": "n.",
    "en_def": "a print made from a picture cut into wood",
    "cn_def": "木刻版畫"
  },
  "expression": {
    "pos": "n.",
    "en_def": "showing feelings or ideas through words or art",
    "cn_def": "表達"
  },
  "potter": {
    "pos": "n.",
    "en_def": "a person who makes pots and dishes from clay",
    "cn_def": "陶藝家"
  },
  "sentimental": {
    "pos": "adj.",
    "en_def": "connected with feelings and memories, not value",
    "cn_def": "有情感價值的;多愁善感的"
  },
  "original": {
    "pos": "adj.",
    "en_def": "new and different from anything before",
    "cn_def": "原創的;獨創的"
  },
  "priceless": {
    "pos": "adj.",
    "en_def": "so valuable that no price can be put on it",
    "cn_def": "無價的"
  },
  "pastel": {
    "pos": "n.",
    "en_def": "a soft coloured chalk stick used for drawing",
    "cn_def": "粉彩筆"
  },
  "theatre": {
    "pos": "n.",
    "en_def": "a building where plays are performed",
    "cn_def": "劇院"
  },
  "a picture is worth a thousand words": {
    "pos": "n.phr.",
    "en_def": "an image can explain more than a long description",
    "cn_def": "一圖勝千言"
  },
  "price tag": {
    "pos": "n.phr.",
    "en_def": "the cost of something",
    "cn_def": "價格;標價"
  },
  "guided tour": {
    "pos": "n.phr.",
    "en_def": "a visit led by a person who explains things",
    "cn_def": "導覽"
  },
  "musician": {
    "pos": "n.",
    "en_def": "a person who plays or writes music",
    "cn_def": "音樂家"
  },
  "handicraft": {
    "pos": "n.",
    "en_def": "a skilled activity of making things by hand",
    "cn_def": "手工藝"
  },
  "inclusivity": {
    "pos": "n.",
    "en_def": "including all kinds of people",
    "cn_def": "包容性"
  },
  "sincerity": {
    "pos": "n.",
    "en_def": "the quality of being honest and true in feelings",
    "cn_def": "真誠"
  },
  "fascination": {
    "pos": "n.",
    "en_def": "a very strong interest",
    "cn_def": "著迷"
  },
  "shading": {
    "pos": "n.",
    "en_def": "darker areas in a drawing that show shadow and shape",
    "cn_def": "陰影明暗"
  },
  "elegance": {
    "pos": "n.",
    "en_def": "the quality of being graceful and stylish",
    "cn_def": "優雅"
  },
  "curious": {
    "pos": "adj.",
    "en_def": "wanting to know or learn about something",
    "cn_def": "好奇的"
  },
  "meaningful": {
    "pos": "adj.",
    "en_def": "important and having a clear purpose",
    "cn_def": "有意義的"
  },
  "reflective": {
    "pos": "adj.",
    "en_def": "thinking quietly and deeply",
    "cn_def": "沉思的;深思的"
  },
  "neglected": {
    "pos": "adj.",
    "en_def": "not given enough attention or care",
    "cn_def": "被忽視的"
  },
  "tasteless": {
    "pos": "adj.",
    "en_def": "ugly or offensive, showing bad judgement",
    "cn_def": "品味差的;低俗的"
  },
  "stunning": {
    "pos": "adj.",
    "en_def": "extremely beautiful or impressive",
    "cn_def": "極美的;令人驚豔的"
  }
};

const EXTRA_GLOSSES = {};
