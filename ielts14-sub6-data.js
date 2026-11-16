// Topic 14 Subunit 6 Quiz Data: Advertising, PR & Persuasion 廣告、公關與說服
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T14 S06 - Advertising, PR & Persuasion 廣告、公關與說服",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "advertising",
    "pos": "n.",
    "cn_def": "廣告業；廣告宣傳",
    "en_def": "the business of telling people about products to sell them",
    "sentence": "The company spends more money on {{BLANK}} than on research, so its products are famous but not very good.",
    "cn": "那家公司花在廣告上的錢比研究還多，所以它的產品很有名但不太好。"
  },
  {
    "word": "advertisement",
    "pos": "n.",
    "cn_def": "廣告",
    "en_def": "a notice or video that tries to sell something",
    "sentence": "I saw an {{BLANK}} for a cheap phone online, but the price was much higher when I got to the shop.",
    "cn": "我在網路上看到一則便宜手機的廣告，但我到店裡時價格高得多。"
  },
  {
    "word": "advertiser",
    "pos": "n.",
    "cn_def": "廣告主；廣告商",
    "en_def": "a company that pays for adverts",
    "sentence": "Many {{BLANK}} left the platform after hateful posts appeared next to their adverts, so the company lost millions.",
    "cn": "仇恨貼文出現在廣告旁邊後，許多廣告主離開了那個平台，所以那家公司損失了數百萬。"
  },
  {
    "word": "slogan",
    "pos": "n.",
    "cn_def": "標語；口號",
    "en_def": "a short, catchy phrase used in advertising",
    "sentence": "The shop's {{BLANK}} is \"Fresh every morning\", and customers remember it because it is short and easy to say.",
    "cn": "那家店的標語是「每天早上都新鮮」，顧客記得它，因為它又短又好念。"
  },
  {
    "word": "billboard",
    "pos": "n.",
    "cn_def": "廣告看板",
    "en_def": "a very large outdoor sign for adverts",
    "sentence": "A huge {{BLANK}} beside the highway shows a new car, so thousands of drivers see it every day on their way to work.",
    "cn": "高速公路旁一面巨大的廣告看板展示一款新車，所以每天有數千名駕駛在上班途中看到它。"
  },
  {
    "word": "brochure",
    "pos": "n.",
    "cn_def": "小冊子；宣傳手冊",
    "en_def": "a small magazine with pictures and information about a product or place",
    "sentence": "The hotel {{BLANK}} showed a quiet beach, but when we arrived the beach was crowded and full of rubbish.",
    "cn": "飯店的宣傳手冊展示了一片寧靜的海灘，但我們抵達時海灘擁擠又滿是垃圾。"
  },
  {
    "word": "flyer",
    "pos": "n.",
    "cn_def": "傳單",
    "en_def": "a printed paper giving information about an event or offer",
    "sentence": "A student handed me a {{BLANK}} about the charity concert, and I decided to go because the tickets were cheap.",
    "cn": "一位學生遞給我一張慈善音樂會的傳單，我決定去，因為門票很便宜。"
  },
  {
    "word": "poster",
    "pos": "n.",
    "cn_def": "海報",
    "en_def": "a large printed picture or notice on a wall",
    "sentence": "We put up a {{BLANK}} about the beach clean-up in the school hall, and more than fifty students signed up.",
    "cn": "我們在學校大廳貼了一張淨灘活動的海報，有五十多位學生報名。"
  },
  {
    "word": "jingle",
    "pos": "n.",
    "cn_def": "廣告歌",
    "en_def": "a short, catchy song used in an advert",
    "sentence": "The {{BLANK}} for the noodle advert was so catchy that my little sister sang it all day long.",
    "cn": "那則泡麵廣告的廣告歌太洗腦了，我妹妹一整天都在唱。"
  },
  {
    "word": "logo",
    "pos": "n.",
    "cn_def": "商標；標誌",
    "en_def": "a symbol that represents a company",
    "sentence": "The company changed its {{BLANK}} to a simpler design, but many customers preferred the old one and complained online.",
    "cn": "那家公司把標誌換成更簡單的設計，但許多顧客比較喜歡舊的，還在網路上抱怨。"
  },
  {
    "word": "brand",
    "pos": "n.",
    "cn_def": "品牌",
    "en_def": "a product name made by a particular company",
    "sentence": "My mother always buys the same {{BLANK}} of soap, because she trusts it and does not want to try new ones.",
    "cn": "我媽媽總是買同一個品牌的肥皂，因為她信任它，不想嘗試新的。"
  },
  {
    "word": "publicity",
    "pos": "n.",
    "cn_def": "宣傳；曝光度",
    "en_def": "attention given to someone or something by the media",
    "sentence": "The film got a lot of free {{BLANK}} when its star was seen at the festival, so ticket sales rose quickly.",
    "cn": "那部電影的主角在影展亮相後，它獲得了大量免費曝光，所以票房迅速上升。"
  },
  {
    "word": "public relations",
    "pos": "n.phr.",
    "cn_def": "公共關係；公關",
    "en_def": "the work of creating a good image for an organisation",
    "sentence": "After the food poisoning case, the restaurant hired a {{BLANK}} firm, because it needed to win back customers' trust.",
    "cn": "發生食物中毒事件後，那家餐廳聘請了一家公關公司，因為它需要贏回顧客的信任。"
  },
  {
    "word": "spokesperson",
    "pos": "n.",
    "cn_def": "發言人",
    "en_def": "a person who speaks officially for a group",
    "sentence": "A {{BLANK}} for the airline apologised for the delays, but she did not explain why so many flights were cancelled.",
    "cn": "航空公司的發言人為延誤道歉，但她沒有解釋為什麼取消了那麼多班機。"
  },
  {
    "word": "marketing",
    "pos": "n.",
    "cn_def": "行銷",
    "en_def": "the work of promoting and selling products",
    "sentence": "The new drink was not very tasty, but clever {{BLANK}} on social media made it popular with teenagers.",
    "cn": "那款新飲料不太好喝，但社群媒體上聰明的行銷讓它在青少年之間很受歡迎。"
  },
  {
    "word": "product placement",
    "pos": "n.phr.",
    "cn_def": "置入性行銷",
    "en_def": "showing a brand inside a film or show to advertise it",
    "sentence": "The hero drinks the same brand of coffee in every scene, so it is obvious that this is {{BLANK}}.",
    "cn": "主角在每一幕都喝同一個牌子的咖啡，所以很明顯這是置入性行銷。"
  },
  {
    "word": "pop-up ad",
    "pos": "n.phr.",
    "cn_def": "彈出式廣告",
    "en_def": "an advert that suddenly appears in a new window online",
    "sentence": "A {{BLANK}} appeared while I was reading the news, and it was so hard to close that I left the website.",
    "cn": "我在看新聞時跳出一則彈出式廣告，它難關到我乾脆離開了那個網站。"
  },
  {
    "word": "sponsored content",
    "pos": "n.phr.",
    "cn_def": "業配內容；贊助內容",
    "en_def": "material paid for by a company but made to look like normal posts",
    "sentence": "Many travel videos are actually {{BLANK}}, so the hotels in them may have paid for the good reviews.",
    "cn": "許多旅遊影片其實是業配內容，所以影片中的飯店可能付了錢換取好評。"
  },
  {
    "word": "catchphrase",
    "pos": "n.",
    "cn_def": "口頭禪；流行語",
    "en_def": "a short phrase that a famous person often says",
    "sentence": "The comedian's {{BLANK}} became so popular that students repeated it in class, and some teachers found it annoying.",
    "cn": "那位喜劇演員的口頭禪變得非常流行，學生們在課堂上一直重複，有些老師覺得很煩。"
  },
  {
    "word": "testimonial",
    "pos": "n.",
    "cn_def": "使用者推薦；見證",
    "en_def": "a statement from a customer praising a product",
    "sentence": "The website was full of glowing {{BLANK}}, but I later learned that some of them were written by the company's staff.",
    "cn": "那個網站滿是讚不絕口的顧客推薦，但我後來得知其中一些是公司員工寫的。"
  },
  {
    "word": "mascot",
    "pos": "n.",
    "cn_def": "吉祥物",
    "en_def": "a character or animal that represents a team or company",
    "sentence": "The city's bear {{BLANK}} appears at every festival, and children love taking pictures with it.",
    "cn": "這座城市的熊吉祥物出現在每個節慶活動上，孩子們很喜歡和它拍照。"
  },
  {
    "word": "rebrand",
    "pos": "v.",
    "cn_def": "品牌重塑；改頭換面",
    "en_def": "to change the name or image of a company or product",
    "sentence": "The airline {{BLANK}} itself after a terrible accident, because many passengers connected the old name with danger.",
    "cn": "那家航空公司在一場嚴重事故後進行了品牌重塑，因為許多乘客把舊名稱和危險聯想在一起。"
  },
  {
    "word": "consumer",
    "pos": "n.",
    "cn_def": "消費者",
    "en_def": "a person who buys goods or services",
    "sentence": "Every {{BLANK}} has the right to know what is in their food, so the law requires clear labels on packaging.",
    "cn": "每位消費者都有權知道食物裡有什麼，所以法律要求包裝上有清楚的標示。"
  },
  {
    "word": "hype",
    "pos": "n.",
    "cn_def": "炒作；大肆宣傳",
    "en_def": "exaggerated excitement and advertising about something",
    "sentence": "There was so much {{BLANK}} about the new game, but when it was released it was full of bugs and many players were disappointed.",
    "cn": "那款新遊戲被大肆炒作，但發售時卻充滿錯誤，許多玩家都很失望。"
  },
  {
    "word": "buzz",
    "pos": "n.",
    "cn_def": "話題；熱烈討論",
    "en_def": "excited talk about something new",
    "sentence": "The trailer created a lot of {{BLANK}} online, so the cinema added extra showings on the first weekend.",
    "cn": "那支預告片在網路上引起大量話題，所以電影院在首映週末加開了場次。"
  }
];

const MCQS = [
  {
    "q": "The company spends more money on _____ than on research, so its products are famous but not very good.",
    "options": [
      "advertising",
      "cyberbullying",
      "veracity",
      "hashtag"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "I saw an _____ for a cheap phone online, but the price was much higher when I got to the shop.",
    "options": [
      "half-truth",
      "impunity",
      "advertisement",
      "newscast"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Many _____ left the platform after hateful posts appeared next to their adverts, so the company lost millions.",
    "options": [
      "satire",
      "advertiser",
      "intent",
      "sitcom"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The shop's _____ is \"Fresh every morning\", and customers remember it because it is short and easy to say.",
    "options": [
      "half-truth",
      "tirade",
      "disinformation",
      "slogan"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "A huge _____ beside the highway shows a new car, so thousands of drivers see it every day on their way to work.",
    "options": [
      "billboard",
      "notification",
      "disclaimer",
      "hashtag"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The hotel _____ showed a quiet beach, but when we arrived the beach was crowded and full of rubbish.",
    "options": [
      "headline",
      "viewer",
      "brochure",
      "disclaimer"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "A student handed me a _____ about the charity concert, and I decided to go because the tickets were cheap.",
    "options": [
      "hyperbole",
      "spectacle",
      "half-truth",
      "flyer"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "We put up a _____ about the beach clean-up in the school hall, and more than fifty students signed up.",
    "options": [
      "innuendo",
      "poster",
      "etiquette",
      "journalist"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The _____ for the noodle advert was so catchy that my little sister sang it all day long.",
    "options": [
      "ethos",
      "doomscrolling",
      "notification",
      "jingle"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The company changed its _____ to a simpler design, but many customers preferred the old one and complained online.",
    "options": [
      "troll",
      "logo",
      "editorial",
      "dialogue"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "My mother always buys the same _____ of soap, because she trusts it and does not want to try new ones.",
    "options": [
      "cyberbullying",
      "journalist",
      "brand",
      "retraction"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The film got a lot of free _____ when its star was seen at the festival, so ticket sales rose quickly.",
    "options": [
      "publicity",
      "follower",
      "scoop",
      "frenzy"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "After the food poisoning case, the restaurant hired a _____ firm, because it needed to win back customers' trust.",
    "options": [
      "smear campaign",
      "social media",
      "lateral reading",
      "public relations"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "A _____ for the airline apologised for the delays, but she did not explain why so many flights were cancelled.",
    "options": [
      "allegation",
      "follower",
      "spokesperson",
      "intent"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The new drink was not very tasty, but clever _____ on social media made it popular with teenagers.",
    "options": [
      "satire",
      "marketing",
      "metaphor",
      "correspondent"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The hero drinks the same brand of coffee in every scene, so it is obvious that this is _____.",
    "options": [
      "product placement",
      "word of mouth",
      "commercial break",
      "smear campaign"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "A _____ appeared while I was reading the news, and it was so hard to close that I left the website.",
    "options": [
      "smear campaign",
      "small talk",
      "group chat",
      "pop-up ad"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Many travel videos are actually _____, so the hotels in them may have paid for the good reviews.",
    "options": [
      "print media",
      "content creator",
      "sponsored content",
      "social media"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The comedian's _____ became so popular that students repeated it in class, and some teachers found it annoying.",
    "options": [
      "outreach",
      "catchphrase",
      "misnomer",
      "retraction"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The website was full of glowing _____, but I later learned that some of them were written by the company's staff.",
    "options": [
      "testimonial",
      "episode",
      "obituary",
      "citation"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The city's bear _____ appears at every festival, and children love taking pictures with it.",
    "options": [
      "conversation",
      "presenter",
      "soundbite",
      "mascot"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The airline _____ itself after a terrible accident, because many passengers connected the old name with danger.",
    "options": [
      "utter",
      "belie",
      "rebrand",
      "orchestrate"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Every _____ has the right to know what is in their food, so the law requires clear labels on packaging.",
    "options": [
      "consumer",
      "metaphor",
      "gossip",
      "cyberbullying"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "There was so much _____ about the new game, but when it was released it was full of bugs and many players were disappointed.",
    "options": [
      "profile",
      "hype",
      "takedown",
      "documentary"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The trailer created a lot of _____ online, so the cinema added extra showings on the first weekend.",
    "options": [
      "buzz",
      "misstep",
      "dossier",
      "eyewitness"
    ],
    "answer": 0,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "advertising": {
    "pos": "n.",
    "en_def": "the business of telling people about products to sell them",
    "cn_def": "廣告業；廣告宣傳"
  },
  "advertisement": {
    "pos": "n.",
    "en_def": "a notice or video that tries to sell something",
    "cn_def": "廣告"
  },
  "advertiser": {
    "pos": "n.",
    "en_def": "a company that pays for adverts",
    "cn_def": "廣告主；廣告商"
  },
  "slogan": {
    "pos": "n.",
    "en_def": "a short, catchy phrase used in advertising",
    "cn_def": "標語；口號"
  },
  "billboard": {
    "pos": "n.",
    "en_def": "a very large outdoor sign for adverts",
    "cn_def": "廣告看板"
  },
  "brochure": {
    "pos": "n.",
    "en_def": "a small magazine with pictures and information about a product or place",
    "cn_def": "小冊子；宣傳手冊"
  },
  "flyer": {
    "pos": "n.",
    "en_def": "a printed paper giving information about an event or offer",
    "cn_def": "傳單"
  },
  "poster": {
    "pos": "n.",
    "en_def": "a large printed picture or notice on a wall",
    "cn_def": "海報"
  },
  "jingle": {
    "pos": "n.",
    "en_def": "a short, catchy song used in an advert",
    "cn_def": "廣告歌"
  },
  "logo": {
    "pos": "n.",
    "en_def": "a symbol that represents a company",
    "cn_def": "商標；標誌"
  },
  "brand": {
    "pos": "n.",
    "en_def": "a product name made by a particular company",
    "cn_def": "品牌"
  },
  "publicity": {
    "pos": "n.",
    "en_def": "attention given to someone or something by the media",
    "cn_def": "宣傳；曝光度"
  },
  "public relations": {
    "pos": "n.phr.",
    "en_def": "the work of creating a good image for an organisation",
    "cn_def": "公共關係；公關"
  },
  "spokesperson": {
    "pos": "n.",
    "en_def": "a person who speaks officially for a group",
    "cn_def": "發言人"
  },
  "marketing": {
    "pos": "n.",
    "en_def": "the work of promoting and selling products",
    "cn_def": "行銷"
  },
  "product placement": {
    "pos": "n.phr.",
    "en_def": "showing a brand inside a film or show to advertise it",
    "cn_def": "置入性行銷"
  },
  "pop-up ad": {
    "pos": "n.phr.",
    "en_def": "an advert that suddenly appears in a new window online",
    "cn_def": "彈出式廣告"
  },
  "sponsored content": {
    "pos": "n.phr.",
    "en_def": "material paid for by a company but made to look like normal posts",
    "cn_def": "業配內容；贊助內容"
  },
  "catchphrase": {
    "pos": "n.",
    "en_def": "a short phrase that a famous person often says",
    "cn_def": "口頭禪；流行語"
  },
  "testimonial": {
    "pos": "n.",
    "en_def": "a statement from a customer praising a product",
    "cn_def": "使用者推薦；見證"
  },
  "mascot": {
    "pos": "n.",
    "en_def": "a character or animal that represents a team or company",
    "cn_def": "吉祥物"
  },
  "rebrand": {
    "pos": "v.",
    "en_def": "to change the name or image of a company or product",
    "cn_def": "品牌重塑；改頭換面"
  },
  "consumer": {
    "pos": "n.",
    "en_def": "a person who buys goods or services",
    "cn_def": "消費者"
  },
  "hype": {
    "pos": "n.",
    "en_def": "exaggerated excitement and advertising about something",
    "cn_def": "炒作；大肆宣傳"
  },
  "buzz": {
    "pos": "n.",
    "en_def": "excited talk about something new",
    "cn_def": "話題；熱烈討論"
  },
  "cyberbullying": {
    "pos": "n.",
    "en_def": "hurting or threatening someone online",
    "cn_def": "網路霸凌"
  },
  "veracity": {
    "pos": "n.",
    "en_def": "the quality of being true",
    "cn_def": "真實性"
  },
  "hashtag": {
    "pos": "n.",
    "en_def": "a word after the # sign used to group posts",
    "cn_def": "主題標籤；#標籤"
  },
  "half-truth": {
    "pos": "n.",
    "en_def": "a statement that is partly true but hides important facts",
    "cn_def": "半真半假的話"
  },
  "impunity": {
    "pos": "n.",
    "en_def": "freedom from punishment",
    "cn_def": "不受懲罰"
  },
  "newscast": {
    "pos": "n.",
    "en_def": "a news programme on TV or radio",
    "cn_def": "新聞報導節目"
  },
  "satire": {
    "pos": "n.",
    "en_def": "humour that makes fun of people or ideas to criticise them",
    "cn_def": "諷刺作品"
  },
  "intent": {
    "pos": "n.",
    "en_def": "what someone plans to do",
    "cn_def": "意圖；目的"
  },
  "sitcom": {
    "pos": "n.",
    "en_def": "a funny TV series about the same characters",
    "cn_def": "情境喜劇"
  },
  "tirade": {
    "pos": "n.",
    "en_def": "a long, angry speech criticising someone",
    "cn_def": "激烈的長篇抨擊"
  },
  "disinformation": {
    "pos": "n.",
    "en_def": "false information spread on purpose to trick people",
    "cn_def": "蓄意造假的訊息；假訊息"
  },
  "notification": {
    "pos": "n.",
    "en_def": "a message on your phone telling you something new",
    "cn_def": "通知"
  },
  "disclaimer": {
    "pos": "n.",
    "en_def": "a statement saying you are not responsible for something",
    "cn_def": "免責聲明"
  },
  "headline": {
    "pos": "n.",
    "en_def": "the title of a news story in large letters",
    "cn_def": "新聞標題；頭條"
  },
  "viewer": {
    "pos": "n.",
    "en_def": "a person who watches TV or videos",
    "cn_def": "觀眾"
  },
  "hyperbole": {
    "pos": "n.",
    "en_def": "a way of speaking that exaggerates a lot",
    "cn_def": "誇飾；誇張法"
  },
  "spectacle": {
    "pos": "n.",
    "en_def": "an event that is exciting or shocking to watch",
    "cn_def": "奇觀；引人注目的場面"
  },
  "innuendo": {
    "pos": "n.",
    "en_def": "an indirect remark suggesting something bad",
    "cn_def": "含沙射影的話；影射"
  },
  "etiquette": {
    "pos": "n.",
    "en_def": "the rules of polite behaviour",
    "cn_def": "禮節；禮儀"
  },
  "journalist": {
    "pos": "n.",
    "en_def": "a person who writes or reports the news",
    "cn_def": "記者；新聞工作者"
  },
  "ethos": {
    "pos": "n.",
    "en_def": "the set of beliefs and values of a group",
    "cn_def": "精神；風氣；價值觀"
  },
  "doomscrolling": {
    "pos": "n.",
    "en_def": "reading bad news online for too long",
    "cn_def": "末日滾動；狂刷負面新聞"
  },
  "troll": {
    "pos": "n.",
    "en_def": "a person who posts rude messages to upset others",
    "cn_def": "網路酸民"
  },
  "editorial": {
    "pos": "n.",
    "en_def": "a newspaper article giving the paper's opinion",
    "cn_def": "社論"
  },
  "dialogue": {
    "pos": "n.",
    "en_def": "a discussion between groups to solve a problem",
    "cn_def": "對話；交流"
  },
  "retraction": {
    "pos": "n.",
    "en_def": "a statement saying something published earlier was wrong",
    "cn_def": "撤回聲明；撤稿"
  },
  "follower": {
    "pos": "n.",
    "en_def": "a person who chooses to see someone's posts",
    "cn_def": "追蹤者；粉絲"
  },
  "scoop": {
    "pos": "n.",
    "en_def": "an important story one newspaper reports first",
    "cn_def": "獨家新聞"
  },
  "frenzy": {
    "pos": "n.",
    "en_def": "a state of wild excitement",
    "cn_def": "狂熱；瘋狂"
  },
  "smear campaign": {
    "pos": "n.phr.",
    "en_def": "an organised effort to damage someone's reputation with lies",
    "cn_def": "抹黑行動"
  },
  "social media": {
    "pos": "n.phr.",
    "en_def": "websites and apps where people share content and talk",
    "cn_def": "社群媒體"
  },
  "lateral reading": {
    "pos": "n.phr.",
    "en_def": "checking a site by reading what other sites say about it",
    "cn_def": "橫向閱讀"
  },
  "allegation": {
    "pos": "n.",
    "en_def": "a claim that someone did something wrong, without proof yet",
    "cn_def": "指控；（未經證實的）說法"
  },
  "metaphor": {
    "pos": "n.",
    "en_def": "describing something by calling it something else",
    "cn_def": "隱喻；暗喻"
  },
  "correspondent": {
    "pos": "n.",
    "en_def": "a journalist who reports from a particular place or topic",
    "cn_def": "特派員；通訊記者"
  },
  "word of mouth": {
    "pos": "n.phr.",
    "en_def": "information passed from person to person by talking",
    "cn_def": "口耳相傳；口碑"
  },
  "commercial break": {
    "pos": "n.phr.",
    "en_def": "a pause in a programme for adverts",
    "cn_def": "廣告時間；進廣告"
  },
  "small talk": {
    "pos": "n.phr.",
    "en_def": "polite conversation about unimportant things",
    "cn_def": "閒聊；寒暄"
  },
  "group chat": {
    "pos": "n.phr.",
    "en_def": "an online conversation with several people at once",
    "cn_def": "群組聊天"
  },
  "print media": {
    "pos": "n.phr.",
    "en_def": "newspapers and magazines printed on paper",
    "cn_def": "平面媒體"
  },
  "content creator": {
    "pos": "n.phr.",
    "en_def": "a person who makes videos, posts or other online material",
    "cn_def": "內容創作者"
  },
  "outreach": {
    "pos": "n.",
    "en_def": "efforts to give help or information to people",
    "cn_def": "推廣服務；外展活動"
  },
  "misnomer": {
    "pos": "n.",
    "en_def": "a name that does not describe something correctly",
    "cn_def": "用詞不當；名不副實"
  },
  "episode": {
    "pos": "n.",
    "en_def": "one part of a TV or radio series",
    "cn_def": "（一）集"
  },
  "obituary": {
    "pos": "n.",
    "en_def": "a news article about a person who has recently died",
    "cn_def": "訃聞"
  },
  "citation": {
    "pos": "n.",
    "en_def": "a note showing where information came from",
    "cn_def": "引用；出處"
  },
  "conversation": {
    "pos": "n.",
    "en_def": "a talk between two or more people",
    "cn_def": "對話；談話"
  },
  "presenter": {
    "pos": "n.",
    "en_def": "a person who introduces a TV or radio programme",
    "cn_def": "節目主持人；主播"
  },
  "soundbite": {
    "pos": "n.",
    "en_def": "a short, memorable phrase taken from a longer speech",
    "cn_def": "（新聞中引用的）精簡名句；原音片段"
  },
  "utter": {
    "pos": "v.",
    "en_def": "to say something",
    "cn_def": "說出；發出（聲音）"
  },
  "belie": {
    "pos": "v.",
    "en_def": "to give a false idea of something",
    "cn_def": "掩飾；使人誤解"
  },
  "orchestrate": {
    "pos": "v.",
    "en_def": "to organise something carefully, often secretly",
    "cn_def": "精心策劃；暗中安排"
  },
  "gossip": {
    "pos": "n.",
    "en_def": "talk about other people's private lives",
    "cn_def": "八卦；閒話"
  },
  "profile": {
    "pos": "n.",
    "en_def": "the page with information about a user",
    "cn_def": "個人檔案；個人頁面"
  },
  "takedown": {
    "pos": "n.",
    "en_def": "the removal of content from a website",
    "cn_def": "下架；移除"
  },
  "documentary": {
    "pos": "n.",
    "en_def": "a film or programme that gives facts about a real topic",
    "cn_def": "紀錄片"
  },
  "misstep": {
    "pos": "n.",
    "en_def": "a mistake in action or judgement",
    "cn_def": "失策；失誤"
  },
  "dossier": {
    "pos": "n.",
    "en_def": "a set of documents about a person or event",
    "cn_def": "檔案；卷宗"
  },
  "eyewitness": {
    "pos": "n.",
    "en_def": "a person who saw an event happen",
    "cn_def": "目擊者"
  }
};

const EXTRA_GLOSSES = {};
