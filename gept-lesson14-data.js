// Lesson 14 Quiz Data: Footwear, Personal Accessories & Precious Metals
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 14 - Footwear, Personal Accessories & Precious Metals",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "slippers",
    "pos": "n.",
    "cn_def": "室內拖鞋",
    "en_def": "comfortable loose soft shoes worn indoors",
    "sentence": "When guests enter our home, mother kindly offers them a clean pair of cotton {{BLANK}} to wear.",
    "cn": "當客人走進我們家時，母親會親切地提供他們一雙乾淨的室內純棉拖鞋穿著。"
  },
  {
    "word": "sneakers",
    "pos": "n.",
    "cn_def": "運動鞋；球鞋",
    "en_def": "soft sports shoes suitable for casual wear and athletics",
    "sentence": "Mark laced up his lightweight running {{BLANK}} before heading down to the school athletic track.",
    "cn": "馬克在前往學校田徑場之前，繫緊了他輕便慢跑運動鞋的鞋帶。"
  },
  {
    "word": "socks",
    "pos": "n.",
    "cn_def": "短襪",
    "en_def": "soft knitted coverings for the feet worn inside shoes",
    "sentence": "You should wear thick cotton {{BLANK}} when hiking in the mountains to prevent blisters on your feet.",
    "cn": "在山區健行時，你應該穿著厚棉短襪以防止腳上起水泡。"
  },
  {
    "word": "handkerchief",
    "pos": "n.",
    "cn_def": "手帕",
    "en_def": "a small square piece of cloth used for wiping the nose or face",
    "sentence": "The gentle old man took a clean white {{BLANK}} from his pocket and wiped the tears from his eyes.",
    "cn": "那位溫和的老先生從口袋裡拿出一條乾淨的白色手帕，擦乾了他眼中的淚水。"
  },
  {
    "word": "purse",
    "pos": "n.",
    "cn_def": "女用手提包；小錢包",
    "en_def": "a small bag used especially by women for holding coins, money, and makeup",
    "sentence": "While riding the crowded subway train, Brenda kept a firm grip on her leather {{BLANK}}.",
    "cn": "在搭乘擁擠的地鐵列車時，布蘭達緊緊抓著她的皮質女用手提包。"
  },
  {
    "word": "wallet",
    "pos": "n.",
    "cn_def": "皮夾；短夾",
    "en_def": "a flat folding pocketbook used especially by men for holding paper money and cards",
    "sentence": "After paying for the groceries at the counter, dad put his credit card back into his brown leather {{BLANK}}.",
    "cn": "在櫃檯付完雜貨費用後，爸爸把信用卡放回他棕色的皮革短夾裡。"
  },
  {
    "word": "diamond",
    "pos": "n.",
    "cn_def": "鑽石",
    "en_def": "an extremely hard, precious clear gemstone made of pure carbon",
    "sentence": "The romantic gentleman knelt down in the restaurant and offered his girlfriend a sparkling {{BLANK}} ring.",
    "cn": "那位浪漫的紳士在餐廳裡單膝跪地，向他的女友獻上一枚閃閃發光的鑽石戒指。"
  },
  {
    "word": "gold",
    "pos": "n.",
    "cn_def": "黃金",
    "en_def": "a valuable soft yellow metallic element used for coins and jewelry",
    "sentence": "During periods of financial crisis, many investors prefer buying physical {{BLANK}} to protect their wealth.",
    "cn": "在金融危機時期，許多投資人更喜歡購買實體黃金來保護他們的財富。"
  },
  {
    "word": "golden",
    "pos": "adj.",
    "cn_def": "金黃色的；金色的",
    "en_def": "made of gold or having a bright yellow, shining color",
    "sentence": "The autumn afternoon sun cast a warm {{BLANK}} glow over the ripening wheat fields across the valley.",
    "cn": "秋日午後的陽光在整個山谷成熟的麥田上灑下了溫暖的金黃色光芒。"
  },
  {
    "word": "silver",
    "pos": "n. / adj.",
    "cn_def": "銀；白銀；銀製的",
    "en_def": "a shiny white metallic element used for coins, ornaments, and utensils",
    "sentence": "The royal banquet table was laid out with delicate porcelain dishes and polished antique {{BLANK}} spoons.",
    "cn": "皇家宴會桌上擺滿了精緻的瓷器餐具與擦得發亮的仿古銀製湯匙。"
  }
];

const MCQS = [
  {
    "q": "Japanese tradition requires visitors to take off their outdoor shoes and slip into indoor ______ at the entryway.",
    "options": [
      "purse",
      "handkerchief",
      "slippers",
      "wallet"
    ],
    "answer": 2,
    "cn": "日本傳統要求訪客在玄關脫下室外鞋，並換上室內拖鞋。 【選項解析】(A) slippers 拖鞋  (B) handkerchief 手帕  (C) purse 女用包  (D) wallet 短夾。玄關換穿 indoor slippers。",
    "vocabIndex": 0
  },
  {
    "q": "Because we plan to play basketball on the outdoor asphalt court, you must wear good athletic ______.",
    "options": [
      "purse",
      "diamond",
      "wallet",
      "sneakers"
    ],
    "answer": 3,
    "cn": "因為我們打算在戶外柏油球場打籃球，你必須穿著優質的運動鞋。 【選項解析】(A) purse 女用包  (B) sneakers 運動鞋  (C) wallet 短夾  (D) diamond 鑽石。打籃球穿 athletic sneakers。",
    "vocabIndex": 1
  },
  {
    "q": "On freezing winter mornings, little Jenny wears two pairs of warm woolen ______ inside her heavy boots.",
    "options": [
      "slippers",
      "socks",
      "purse",
      "wallet"
    ],
    "answer": 1,
    "cn": "在寒冬早晨，小珍妮在厚重的靴子裡穿了兩雙保暖的羊毛襪。 【選項解析】(A) slippers 拖鞋  (B) purse 女用包  (C) socks 襪子  (D) wallet 短夾。靴子內穿 woolen socks。",
    "vocabIndex": 2
  },
  {
    "q": "Grandfather sneezed loudly during the church sermon, but he quickly covered his nose with a linen ______.",
    "options": [
      "handkerchief",
      "wallet",
      "purse",
      "diamond"
    ],
    "answer": 0,
    "cn": "祖父在教堂講道時大聲打了噴嚏，但他很快用亞麻手帕遮住了鼻子。 【選項解析】(A) diamond 鑽石  (B) wallet 短夾  (C) purse 女用包  (D) handkerchief 手帕。打噴嚏遮掩用 handkerchief。",
    "vocabIndex": 3
  },
  {
    "q": "The lady realized with horror that she had accidentally left her designer leather ______ on the bus seat.",
    "options": [
      "slippers",
      "sneakers",
      "socks",
      "purse"
    ],
    "answer": 3,
    "cn": "這位女士驚恐地發現，她不小心把名牌皮革手提包遺留在公車座位上了。 【選項解析】(A) purse 女用手提包  (B) sneakers 運動鞋  (C) socks 襪子  (D) slippers 拖鞋。遺忘在公車上的隨身包為 purse。",
    "vocabIndex": 4
  },
  {
    "q": "When the young man opened his leather ______ to pay the taxi driver, he found only two coins left inside.",
    "options": [
      "handkerchief",
      "sneakers",
      "wallet",
      "socks"
    ],
    "answer": 2,
    "cn": "當年經人打開皮革短夾要付計程車司機車資時，發現裡面只剩兩枚硬幣。 【選項解析】(A) handkerchief 手帕  (B) wallet 皮夾  (C) sneakers 運動鞋  (D) socks 襪子。裝鈔票與卡片的為 wallet。",
    "vocabIndex": 5
  },
  {
    "q": "Because a ______ is the hardest natural substance known on earth, it is used for heavy industrial cutting.",
    "options": [
      "wallet",
      "diamond",
      "purse",
      "handkerchief"
    ],
    "answer": 1,
    "cn": "因為鑽石是地球上已知最堅硬的天然物質，所以被用於重工業切割。 【選項解析】(A) wallet 皮夾  (B) purse 手提包  (C) diamond 鑽石  (D) handkerchief 手帕。最堅硬物質為 diamond。",
    "vocabIndex": 6
  },
  {
    "q": "The winning athlete proudly stepped onto the victory podium and received a medal crafted from pure ______.",
    "options": [
      "gold",
      "purse",
      "wallet",
      "slippers"
    ],
    "answer": 0,
    "cn": "獲勝的運動員驕傲地站上頒獎台，接過一面由純金打造的獎牌。 【選項解析】(A) slippers 拖鞋  (B) purse 手提包  (C) wallet 皮夾  (D) gold 黃金。第一名金牌為 pure gold。",
    "vocabIndex": 7
  },
  {
    "q": "In fairytale stories, the brave prince had bright ______ hair and rode across the kingdom on a white horse.",
    "options": [
      "pale",
      "deaf",
      "dizzy",
      "golden"
    ],
    "answer": 3,
    "cn": "在童話故事裡，英勇的王子擁有一頭金黃色秀髮，騎著白馬巡視王國。 【選項解析】(A) golden 金色的  (B) deaf 聾的  (C) dizzy 頭暈的  (D) pale 蒼白的。形容金髮用 golden hair。",
    "vocabIndex": 8
  },
  {
    "q": "Grandmother keeps her grandmother's antique ______ teapot locked securely inside the glass cabinet.",
    "options": [
      "ill",
      "silver",
      "painful",
      "blind"
    ],
    "answer": 1,
    "cn": "祖母把她祖母留下來的仿古純銀茶壺安全地鎖在玻璃櫃中。 【選項解析】(A) ill 生病的  (B) silver 銀製的  (C) painful 疼痛的  (D) blind 盲的。貴重茶具為 silver teapot。",
    "vocabIndex": 9
  },
  {
    "q": "Take off those muddy soccer shoes immediately and put on these clean rubber ______ by the door.",
    "options": [
      "slippers",
      "purse",
      "handkerchief",
      "wallet"
    ],
    "answer": 0,
    "cn": "立刻脫下那雙沾滿泥巴的足球鞋，換上門邊這些乾淨的橡膠拖鞋。 【選項解析】(A) handkerchief 手帕  (B) purse 手提包  (C) slippers 拖鞋  (D) wallet 皮夾。室內換穿 rubber slippers。",
    "vocabIndex": 0
  },
  {
    "q": "Modern marathon runners invest in high-tech running ______ designed with thick carbon-fiber cushions.",
    "options": [
      "wallets",
      "purses",
      "sneakers",
      "handkerchiefs"
    ],
    "answer": 2,
    "cn": "現代馬拉松跑者投資於設計有厚碳纖維緩震墊的高科技慢跑運動鞋。 【選項解析】(A) wallets 皮夾  (B) purses 手提包  (C) handkerchiefs 手帕  (D) sneakers 運動鞋。馬拉松穿 running sneakers。",
    "vocabIndex": 1
  },
  {
    "q": "Always remember to pack several pairs of clean cotton ______ before embarking on a week-long hiking expedition.",
    "options": [
      "socks",
      "wallets",
      "purses",
      "diamonds"
    ],
    "answer": 0,
    "cn": "在展開為期一週的健行探險前，務必記得打包數雙乾淨的純棉短襪。 【選項解析】(A) socks 短襪  (B) wallets 皮夾  (C) purses 手提包  (D) diamonds 鑽石。健行必備換洗 cotton socks。",
    "vocabIndex": 2
  },
  {
    "q": "The kind schoolteacher gently handed her cotton ______ to the crying child to wipe away his tears.",
    "options": [
      "sneakers",
      "handkerchief",
      "wallet",
      "purse"
    ],
    "answer": 1,
    "cn": "親切的學校老師溫柔地將她的純棉手帕遞給哭泣的孩子擦眼淚。 【選項解析】(A) sneakers 運動鞋  (B) handkerchief 手帕  (C) wallet 皮夾  (D) purse 手提包。擦眼淚用 cotton handkerchief。",
    "vocabIndex": 3
  },
  {
    "q": "Aunt Clara keeps her smartphone, car keys, and house keys organized neatly inside her floral ______.",
    "options": [
      "socks",
      "wallet",
      "purse",
      "sneakers"
    ],
    "answer": 2,
    "cn": "克拉拉姑姑把智慧型手機、車鑰匙和家門鑰匙整齊收納在碎花手提包裡。 【選項解析】(A) socks 短襪  (B) wallet 皮夾  (C) purse 女用提包  (D) sneakers 運動鞋。女用隨身提包為 purse。",
    "vocabIndex": 4
  },
  {
    "q": "The police arrested a pickpocket who was caught stealing an expensive leather ______ from an elderly tourist.",
    "options": [
      "handkerchief",
      "sneakers",
      "slippers",
      "wallet"
    ],
    "answer": 3,
    "cn": "警方逮捕了一名扒手，他被當場抓到偷竊一名年長觀光客昂貴的真皮皮夾。 【選項解析】(A) handkerchief 手帕  (B) sneakers 運動鞋  (C) slippers 拖鞋  (D) wallet 皮夾。扒手常竊取 leather wallet。",
    "vocabIndex": 5
  },
  {
    "q": "Many couples choose a solitaire ______ engagement ring as a traditional symbol of everlasting love.",
    "options": [
      "purse",
      "handkerchief",
      "diamond",
      "wallet"
    ],
    "answer": 2,
    "cn": "許多伴侶選擇單顆美鑽求婚戒指，作為永恆愛情的傳統象徵。 【選項解析】(A) diamond 鑽石  (B) handkerchief 手帕  (C) purse 手提包  (D) wallet 皮夾。求婚戒為 diamond engagement ring。",
    "vocabIndex": 6
  },
  {
    "q": "In ancient times, wealthy merchants conducted international trade using heavy coins minted from solid ______.",
    "options": [
      "wallet",
      "gold",
      "purse",
      "sneakers"
    ],
    "answer": 1,
    "cn": "在古代，富裕的商人使用以純金鑄造的沉重硬幣進行國際貿易。 【選項解析】(A) wallet 皮夾  (B) gold 黃金  (C) purse 手提包  (D) sneakers 運動鞋。古錢幣以 solid gold 鑄造。",
    "vocabIndex": 7
  },
  {
    "q": "Looking down from the mountain peak at dawn, we watched the morning sunlight paint the horizon a brilliant ______ yellow.",
    "options": [
      "golden",
      "homesick",
      "dumb",
      "deaf"
    ],
    "answer": 0,
    "cn": "黎明時分從山頂俯瞰，我們看著晨曦將地平線染成一片絢麗的金黃色。 【選項解析】(A) dumb 啞的  (B) homesick 想家的  (C) golden 金黃色的  (D) deaf 聾的。形容金色晨光用 golden yellow。",
    "vocabIndex": 8
  },
  {
    "q": "The talented musician was awarded a polished ______ trophy for winning second place in the piano contest.",
    "options": [
      "dizzy",
      "blind",
      "pale",
      "silver"
    ],
    "answer": 3,
    "cn": "這位有才華的音樂家因獲得鋼琴大賽第二名而獲頒一座精緻的銀製獎盃。 【選項解析】(A) dizzy 頭暈的  (B) blind 盲的  (C) pale 蒼白的  (D) silver 銀製的。第二名獲頒 silver trophy。",
    "vocabIndex": 9
  },
  {
    "q": "In traditional Asian households, guests never walk across polished wooden floors without wearing indoor ______.",
    "options": [
      "purse",
      "handkerchief",
      "slippers",
      "wallet"
    ],
    "answer": 2,
    "cn": "在傳統亞洲家庭中，客人在磨光木地板上走動時絕不會不穿室內拖鞋。 【選項解析】(A) slippers 拖鞋  (B) handkerchief 手帕  (C) purse 手提包  (D) wallet 皮夾。室內防滑保潔穿 slippers。",
    "vocabIndex": 0
  },
  {
    "q": "Kevin bought a pair of black canvas ______ to wear with his casual denim jeans during weekend outings.",
    "options": [
      "wallets",
      "handkerchiefs",
      "purses",
      "sneakers"
    ],
    "answer": 3,
    "cn": "凱文買了一雙黑色帆布球鞋，以便在週末外出時搭配休閒牛仔褲穿著。 【選項解析】(A) wallets 皮夾  (B) sneakers 球鞋  (C) purses 手提包  (D) handkerchiefs 手帕。休閒帆布鞋為 canvas sneakers。",
    "vocabIndex": 1
  },
  {
    "q": "The washing machine ate one of my striped ______, so now I have an odd pair that does not match.",
    "options": [
      "socks",
      "wallets",
      "purses",
      "diamonds"
    ],
    "answer": 0,
    "cn": "洗衣機吃掉了我的一隻條紋襪，所以現在我有一雙湊不成套的襪子。 【選項解析】(A) purses 手提包  (B) wallets 皮夾  (C) socks 短襪  (D) diamonds 鑽石。一隻落單的襪子為 sock。",
    "vocabIndex": 2
  },
  {
    "q": "A gentleman in the 19th century always kept an ironed silk ______ in the breast pocket of his coat.",
    "options": [
      "wallet",
      "handkerchief",
      "sneakers",
      "purse"
    ],
    "answer": 1,
    "cn": "19世紀的紳士總會在外套胸前口袋裡放一條熨燙整齊的絲質手帕。 【選項解析】(A) wallet 皮夾  (B) purse 手提包  (C) sneakers 運動鞋  (D) handkerchief 手帕。紳士口袋巾為 silk handkerchief。",
    "vocabIndex": 3
  },
  {
    "q": "Don't leave your open ______ unattended on the restaurant table while getting food from the buffet counter.",
    "options": [
      "socks",
      "slippers",
      "sneakers",
      "purse"
    ],
    "answer": 3,
    "cn": "在自助餐檯取餐時，切勿將打開的手提包無人看管地放在餐桌上。 【選項解析】(A) purse 手提包  (B) slippers 拖鞋  (C) sneakers 運動鞋  (D) socks 短襪。隨身女用手提包為 purse。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "slippers": {
    "pos": "n.",
    "en_def": "comfortable loose soft shoes worn indoors",
    "cn_def": "室內拖鞋",
    "combined": [
      {
        "pos": "n.",
        "en_def": "comfortable loose soft shoes worn indoors",
        "cn_def": "室內拖鞋"
      }
    ]
  },
  "sneakers": {
    "pos": "n.",
    "en_def": "soft sports shoes suitable for casual wear and athletics",
    "cn_def": "運動鞋；球鞋",
    "combined": [
      {
        "pos": "n.",
        "en_def": "soft sports shoes suitable for casual wear and athletics",
        "cn_def": "運動鞋；球鞋"
      }
    ]
  },
  "socks": {
    "pos": "n.",
    "en_def": "soft knitted coverings for the feet worn inside shoes",
    "cn_def": "短襪",
    "combined": [
      {
        "pos": "n.",
        "en_def": "soft knitted coverings for the feet worn inside shoes",
        "cn_def": "短襪"
      }
    ]
  },
  "handkerchief": {
    "pos": "n.",
    "en_def": "a small square piece of cloth used for wiping the nose or face",
    "cn_def": "手帕",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small square piece of cloth used for wiping the nose or face",
        "cn_def": "手帕"
      }
    ]
  },
  "purse": {
    "pos": "n.",
    "en_def": "a small bag used especially by women for holding coins, money, and makeup",
    "cn_def": "女用手提包；小錢包",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small bag used especially by women for holding coins, money, and makeup",
        "cn_def": "女用手提包；小錢包"
      }
    ]
  },
  "wallet": {
    "pos": "n.",
    "en_def": "a flat folding pocketbook used especially by men for holding paper money and cards",
    "cn_def": "皮夾；短夾",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a flat folding pocketbook used especially by men for holding paper money and cards",
        "cn_def": "皮夾；短夾"
      }
    ]
  },
  "diamond": {
    "pos": "n.",
    "en_def": "an extremely hard, precious clear gemstone made of pure carbon",
    "cn_def": "鑽石",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an extremely hard, precious clear gemstone made of pure carbon",
        "cn_def": "鑽石"
      }
    ]
  },
  "gold": {
    "pos": "n.",
    "en_def": "a valuable soft yellow metallic element used for coins and jewelry",
    "cn_def": "黃金",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a valuable soft yellow metallic element used for coins and jewelry",
        "cn_def": "黃金"
      }
    ]
  },
  "golden": {
    "pos": "adj.",
    "en_def": "made of gold or having a bright yellow, shining color",
    "cn_def": "金黃色的；金色的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "made of gold or having a bright yellow, shining color",
        "cn_def": "金黃色的；金色的"
      }
    ]
  },
  "silver": {
    "pos": "n. / adj.",
    "en_def": "a shiny white metallic element used for coins, ornaments, and utensils",
    "cn_def": "銀；白銀；銀製的",
    "combined": [
      {
        "pos": "n. / adj.",
        "en_def": "a shiny white metallic element used for coins, ornaments, and utensils",
        "cn_def": "銀；白銀；銀製的"
      }
    ]
  },
  "pale": {
    "pos": "",
    "en_def": "",
    "cn_def": "蒼白的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "蒼白的"
      }
    ]
  },
  "deaf": {
    "pos": "",
    "en_def": "",
    "cn_def": "聾的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "聾的"
      }
    ]
  },
  "dizzy": {
    "pos": "",
    "en_def": "",
    "cn_def": "頭暈的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "頭暈的"
      }
    ]
  },
  "ill": {
    "pos": "",
    "en_def": "",
    "cn_def": "生病的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "生病的"
      }
    ]
  },
  "painful": {
    "pos": "",
    "en_def": "",
    "cn_def": "疼痛的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "疼痛的"
      }
    ]
  },
  "blind": {
    "pos": "",
    "en_def": "",
    "cn_def": "盲的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "盲的"
      }
    ]
  },
  "wallets": {
    "pos": "",
    "en_def": "",
    "cn_def": "皮夾",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "皮夾"
      }
    ]
  },
  "purses": {
    "pos": "",
    "en_def": "",
    "cn_def": "手提包",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "手提包"
      }
    ]
  },
  "handkerchiefs": {
    "pos": "",
    "en_def": "",
    "cn_def": "手帕",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "手帕"
      }
    ]
  },
  "diamonds": {
    "pos": "",
    "en_def": "",
    "cn_def": "鑽石",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "鑽石"
      }
    ]
  },
  "homesick": {
    "pos": "",
    "en_def": "",
    "cn_def": "想家的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "想家的"
      }
    ]
  },
  "dumb": {
    "pos": "",
    "en_def": "",
    "cn_def": "啞的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "啞的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
