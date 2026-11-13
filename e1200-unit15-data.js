// Unit 15 Quiz Data: Houses & Apartments 房屋與公寓（第15區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U15 - Houses & Apartments",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "bed",
    "pos": "n.",
    "cn_def": "床",
    "en_def": "a thing that you sleep on",
    "sentence": "Q: Where is the cat? — A: It's on my {{BLANK}}. It's sleeping.",
    "cn": "貓在哪裡？ — 牠在我的床上，牠正在睡覺。"
  },
  {
    "word": "sofa",
    "pos": "n.",
    "cn_def": "沙發",
    "en_def": "a long, soft seat for two or more people",
    "sentence": "Q: Where is the dog? — A: It's on the {{BLANK}} in the living room.",
    "cn": "狗在哪裡？ — 牠在客廳的沙發上。"
  },
  {
    "word": "couch",
    "pos": "n.",
    "cn_def": "沙發",
    "en_def": "a long, soft seat for two or more people",
    "sentence": "Q: Where are my comic books? — A: They're on the {{BLANK}}, next to the TV.",
    "cn": "我的漫畫書在哪裡？ — 它們在沙發上，電視旁邊。"
  },
  {
    "word": "chair",
    "pos": "n.",
    "cn_def": "椅子",
    "en_def": "a seat for one person, with a back and four legs",
    "sentence": "Q: Where is my schoolbag? — A: It's under your {{BLANK}}.",
    "cn": "我的書包在哪裡？ — 它在你的椅子下面。"
  },
  {
    "word": "desk",
    "pos": "n.",
    "cn_def": "書桌",
    "en_def": "a table where you study or work",
    "sentence": "Q: Where are my books? — A: They're on your {{BLANK}}.",
    "cn": "我的書在哪裡？ — 它們在你的書桌上。"
  },
  {
    "word": "table",
    "pos": "n.",
    "cn_def": "桌子",
    "en_def": "a thing with a flat top and legs that you put things on",
    "sentence": "Q: Where does Mom put the cake? — A: She puts it on the {{BLANK}}.",
    "cn": "媽媽把蛋糕放在哪裡？ — 她把它放在桌上。"
  },
  {
    "word": "drawer",
    "pos": "n.",
    "cn_def": "抽屜",
    "en_def": "a box in a desk or table that you pull out to put things in",
    "sentence": "Q: Where do you keep your pens? — A: I keep them in the {{BLANK}}.",
    "cn": "你把筆放在哪裡？ — 我把它們放在抽屜裡。"
  },
  {
    "word": "lamp",
    "pos": "n.",
    "cn_def": "檯燈",
    "en_def": "a small light that stands on a desk or table",
    "sentence": "Q: Where is the {{BLANK}}? — A: It's on the desk, next to the computer.",
    "cn": "檯燈在哪裡？ — 它在書桌上，電腦旁邊。"
  },
  {
    "word": "blanket",
    "pos": "n.",
    "cn_def": "毯子",
    "en_def": "a big, warm cover for your bed",
    "sentence": "Q: Where is my {{BLANK}}? I'm cold. — A: It's on your bed.",
    "cn": "我的毯子在哪裡？我好冷。 — 它在你的床上。"
  },
  {
    "word": "towel (towels)",
    "pos": "n.",
    "cn_def": "毛巾",
    "en_def": "a piece of cloth that you use to dry yourself",
    "sentence": "Q: Where are the {{BLANK}}? — A: They're in the bathroom.",
    "cn": "毛巾在哪裡？ — 它們在浴室裡。"
  },
  {
    "word": "key (keys)",
    "pos": "n.",
    "cn_def": "鑰匙",
    "en_def": "a small metal thing that opens a door or starts a car",
    "sentence": "Q: Where are my {{BLANK}}? — A: They're in your pocket, Dad!",
    "cn": "我的鑰匙在哪裡？ — 爸爸，它們在你的口袋裡！"
  },
  {
    "word": "umbrella",
    "pos": "n.",
    "cn_def": "雨傘",
    "en_def": "a thing you hold over your head to stay dry in the rain",
    "sentence": "Q: Where does Dad keep his {{BLANK}}? — A: He keeps it behind the door.",
    "cn": "爸爸把他的雨傘放在哪裡？ — 他把它放在門後面。"
  },
  {
    "word": "basket",
    "pos": "n.",
    "cn_def": "籃子",
    "en_def": "a container made of thin sticks for carrying things",
    "sentence": "Q: Where are the apples? — A: They're in the {{BLANK}} on the table.",
    "cn": "蘋果在哪裡？ — 它們在桌上的籃子裡。"
  },
  {
    "word": "pot",
    "pos": "n.",
    "cn_def": "鍋子；壺",
    "en_def": "a deep round container for cooking food or holding tea",
    "sentence": "Q: Where is the soup? — A: It's in the {{BLANK}} in the kitchen.",
    "cn": "湯在哪裡？ — 它在廚房的鍋子裡。"
  },
  {
    "word": "candle (candles)",
    "pos": "n.",
    "cn_def": "蠟燭",
    "en_def": "a stick of wax that gives light when it burns",
    "sentence": "Q: Where are the {{BLANK}}? — A: They're on the birthday cake.",
    "cn": "蠟燭在哪裡？ — 它們在生日蛋糕上。"
  },
  {
    "word": "mat",
    "pos": "n.",
    "cn_def": "墊子",
    "en_def": "a small piece of thick cloth on the floor",
    "sentence": "Q: Where do we put our shoes? — A: Put them on the {{BLANK}} by the door.",
    "cn": "我們把鞋子放在哪裡？ — 把它們放在門邊的墊子上。"
  },
  {
    "word": "bench",
    "pos": "n.",
    "cn_def": "長椅",
    "en_def": "a long seat for two or more people, often in a park",
    "sentence": "Q: Is there a {{BLANK}} in the garden? — A: Yes, there is. Grandma often sits on it.",
    "cn": "花園裡有長椅嗎？ — 是的，有。奶奶常常坐在上面。"
  },
  {
    "word": "light",
    "pos": "n.",
    "cn_def": "燈；燈光",
    "en_def": "a thing that makes a room bright",
    "sentence": "Q: Is there a {{BLANK}} in the bathroom? — A: Yes, there is. But it doesn't work now.",
    "cn": "浴室裡有燈嗎？ — 是的，有。但是它現在壞了。"
  },
  {
    "word": "television (TV)",
    "pos": "n.",
    "cn_def": "電視",
    "en_def": "a machine with a screen that shows programs and movies",
    "sentence": "Q: Is there a {{BLANK}} in your bedroom? — A: No, there isn't. It's in the living room.",
    "cn": "你的臥室裡有電視嗎？ — 不，沒有。它在客廳裡。",
    "alts": [
      "TV"
    ]
  },
  {
    "word": "computer",
    "pos": "n.",
    "cn_def": "電腦",
    "en_def": "a machine you use to write, play games, and go online",
    "sentence": "Q: Is there a {{BLANK}} in your room? — A: Yes, there is. I do my homework on it.",
    "cn": "你的房間裡有電腦嗎？ — 是的，有。我用它寫功課。"
  },
  {
    "word": "telephone (phone)",
    "pos": "n.",
    "cn_def": "電話",
    "en_def": "a thing you use to talk to someone who is far away",
    "sentence": "Q: Is there a {{BLANK}} in the kitchen? — A: No, there isn't. It's on the table in the living room.",
    "cn": "廚房裡有電話嗎？ — 不，沒有。它在客廳的桌上。",
    "alts": [
      "phone"
    ]
  },
  {
    "word": "radio",
    "pos": "n.",
    "cn_def": "收音機",
    "en_def": "a machine that plays music and news you can listen to",
    "sentence": "Q: Is there a {{BLANK}} in Grandpa's room? — A: Yes, there is. He listens to it every morning.",
    "cn": "爺爺的房間裡有收音機嗎？ — 是的，有。他每天早上都聽。"
  },
  {
    "word": "camera",
    "pos": "n.",
    "cn_def": "照相機",
    "en_def": "a thing you use to take photos",
    "sentence": "Q: Is there a {{BLANK}} in your bag? — A: Yes, there is. I want to take pictures in the park.",
    "cn": "你的包包裡有相機嗎？ — 是的，有。我想在公園拍照。"
  },
  {
    "word": "fan",
    "pos": "n.",
    "cn_def": "電風扇",
    "en_def": "a machine that moves air to make you feel cool",
    "sentence": "Q: Is there a {{BLANK}} in your bedroom? It's so hot. — A: No, there isn't. Let's go to the living room.",
    "cn": "你的臥室裡有電風扇嗎？好熱喔。 — 不，沒有。我們去客廳吧。"
  },
  {
    "word": "refrigerator (fridge)",
    "pos": "n.",
    "cn_def": "冰箱",
    "en_def": "a machine in the kitchen that keeps food cold",
    "sentence": "Q: Is there any milk in the {{BLANK}}? — A: Yes, there is. It's next to the eggs.",
    "cn": "冰箱裡有牛奶嗎？ — 是的，有。它在蛋的旁邊。",
    "alts": [
      "fridge"
    ]
  },
  {
    "word": "machine",
    "pos": "n.",
    "cn_def": "機器",
    "en_def": "a thing with moving parts that does work for people",
    "sentence": "Q: Is there a washing {{BLANK}} in your apartment? — A: Yes, there is. It's on the balcony.",
    "cn": "你的公寓裡有洗衣機嗎？ — 是的，有。它在陽台上。"
  },
  {
    "word": "tape (tapes)",
    "pos": "n.",
    "cn_def": "錄音帶；膠帶",
    "en_def": "a long thin strip that holds sound or sticks things together",
    "sentence": "Q: Are there any English {{BLANK}} in the box? — A: Yes, there are. We can listen to them.",
    "cn": "箱子裡有英文錄音帶嗎？ — 是的，有。我們可以聽它們。"
  },
  {
    "word": "video (videos)",
    "pos": "n.",
    "cn_def": "影片；錄影帶",
    "en_def": "a short movie that you watch on a phone, computer, or TV",
    "sentence": "Q: Are there any funny {{BLANK}} on your phone? — A: Yes, there are. Let's watch them together!",
    "cn": "你的手機裡有好笑的影片嗎？ — 是的，有。我們一起看吧！"
  },
  {
    "word": "pipe",
    "pos": "n.",
    "cn_def": "管子；水管",
    "en_def": "a long tube that water or gas moves through",
    "sentence": "Q: Is there any water in the {{BLANK}}? — A: No, there isn't. It's broken.",
    "cn": "水管裡有水嗎？ — 不，沒有。它破了。"
  },
  {
    "word": "house",
    "pos": "n.",
    "cn_def": "房子",
    "en_def": "a building where a family lives",
    "sentence": "Q: What is there near the park? — A: There is a big {{BLANK}} with a garden.",
    "cn": "公園附近有什麼？ — 有一棟有花園的大房子。"
  },
  {
    "word": "apartment",
    "pos": "n.",
    "cn_def": "公寓",
    "en_def": "a home that is part of a bigger building",
    "sentence": "Q: How many bedrooms are there in your {{BLANK}}? — A: There are three bedrooms.",
    "cn": "你的公寓裡有幾間臥室？ — 有三間臥室。"
  },
  {
    "word": "door",
    "pos": "n.",
    "cn_def": "門",
    "en_def": "the thing you open to go into a room or a house",
    "sentence": "Q: What is there on the {{BLANK}}? — A: There is a picture of our family.",
    "cn": "門上有什麼？ — 有一張我們的全家福照片。"
  },
  {
    "word": "window (windows)",
    "pos": "n.",
    "cn_def": "窗戶",
    "en_def": "an opening with glass in a wall that lets in light and air",
    "sentence": "Q: How many {{BLANK}} are there in your room? — A: There are two. They are very big.",
    "cn": "你的房間裡有幾扇窗戶？ — 有兩扇，它們很大。"
  },
  {
    "word": "wall",
    "pos": "n.",
    "cn_def": "牆壁",
    "en_def": "one of the sides of a room or building",
    "sentence": "Q: What is there on the {{BLANK}}? — A: There is a clock and two pictures.",
    "cn": "牆上有什麼？ — 有一個時鐘和兩幅畫。"
  },
  {
    "word": "floor",
    "pos": "n.",
    "cn_def": "地板",
    "en_def": "the part of a room that you walk on",
    "sentence": "Q: What is there on the {{BLANK}}? — A: There are some toys. Please pick them up.",
    "cn": "地板上有什麼？ — 有一些玩具，請把它們撿起來。"
  },
  {
    "word": "gate",
    "pos": "n.",
    "cn_def": "大門",
    "en_def": "a door in a fence or outside wall",
    "sentence": "Q: Who is there at the {{BLANK}}? — A: There is a man with a big box.",
    "cn": "大門口有誰？ — 有一個拿著大箱子的男人。"
  },
  {
    "word": "stairs",
    "pos": "n.",
    "cn_def": "樓梯",
    "en_def": "steps that go from one floor of a building to another",
    "sentence": "Q: How many floors are there in your house? — A: There are three. We walk up the {{BLANK}} to our bedrooms.",
    "cn": "你家有幾層樓？ — 有三層。我們走樓梯上去臥室。"
  },
  {
    "word": "home",
    "pos": "n.",
    "cn_def": "家",
    "en_def": "the place where you live",
    "sentence": "Q: Where are you, Ben? — A: I'm at {{BLANK}}. I'm watching TV.",
    "cn": "班，你在哪裡？ — 我在家，我正在看電視。"
  },
  {
    "word": "room",
    "pos": "n.",
    "cn_def": "房間",
    "en_def": "one of the parts of a house, with walls and a door",
    "sentence": "Q: Where is Amy? — A: She's in her {{BLANK}}. She's doing her homework.",
    "cn": "艾美在哪裡？ — 她在她的房間，她正在寫功課。"
  },
  {
    "word": "bedroom",
    "pos": "n.",
    "cn_def": "臥室",
    "en_def": "a room for sleeping in",
    "sentence": "Q: Where are you, Lisa? — A: I'm in my {{BLANK}}. I'm getting ready for bed.",
    "cn": "麗莎，你在哪裡？ — 我在我的臥室，我正準備睡覺。"
  },
  {
    "word": "bathroom",
    "pos": "n.",
    "cn_def": "浴室",
    "en_def": "a room with a toilet and a place to wash",
    "sentence": "Q: Where is Dad? — A: He's in the {{BLANK}}. He's taking a shower.",
    "cn": "爸爸在哪裡？ — 他在浴室，他正在淋浴。"
  },
  {
    "word": "kitchen",
    "pos": "n.",
    "cn_def": "廚房",
    "en_def": "a room where people cook food",
    "sentence": "Q: Where are you, Mom? — A: I'm in the {{BLANK}}. I'm cooking dinner.",
    "cn": "媽媽，你在哪裡？ — 我在廚房，我正在煮晚餐。"
  },
  {
    "word": "dining room",
    "pos": "n.",
    "cn_def": "飯廳",
    "en_def": "a room where people eat meals",
    "sentence": "Q: Where are Grandpa and Grandma? — A: They're in the {{BLANK}}. They're having lunch.",
    "cn": "爺爺和奶奶在哪裡？ — 他們在飯廳，他們正在吃午餐。",
    "nblanks": 2
  },
  {
    "word": "living room",
    "pos": "n.",
    "cn_def": "客廳",
    "en_def": "a room where a family sits, talks, and watches TV",
    "sentence": "Q: Where are the kids? — A: They're in the {{BLANK}}. They're playing games.",
    "cn": "孩子們在哪裡？ — 他們在客廳，他們正在玩遊戲。",
    "nblanks": 2
  },
  {
    "word": "balcony",
    "pos": "n.",
    "cn_def": "陽台",
    "en_def": "a small open place outside an upstairs room",
    "sentence": "Q: Where are you, Tom? — A: I'm on the {{BLANK}}. I'm looking at the stars.",
    "cn": "湯姆，你在哪裡？ — 我在陽台上，我正在看星星。"
  },
  {
    "word": "garden",
    "pos": "n.",
    "cn_def": "花園",
    "en_def": "a place by a house where flowers and vegetables grow",
    "sentence": "Q: Where is Grandma? — A: She's in the {{BLANK}}. She's watering the flowers.",
    "cn": "奶奶在哪裡？ — 她在花園，她正在澆花。"
  },
  {
    "word": "yard",
    "pos": "n.",
    "cn_def": "庭院；院子",
    "en_def": "a piece of ground next to a house",
    "sentence": "Q: Where are you and your dog? — A: We're in the {{BLANK}}. We're playing with a ball.",
    "cn": "你和你的狗在哪裡？ — 我們在院子裡，我們正在玩球。"
  },
  {
    "word": "clean",
    "pos": "v.",
    "cn_def": "打掃",
    "en_def": "to make something not dirty",
    "sentence": "Q: What do you do on Saturday mornings? — A: I {{BLANK}} my room.",
    "cn": "你星期六早上做什麼？ — 我打掃我的房間。"
  },
  {
    "word": "wash (washes)",
    "pos": "v.",
    "cn_def": "清洗",
    "en_def": "to clean something with water and soap",
    "sentence": "Q: What does your brother do after dinner? — A: He {{BLANK}} the dishes.",
    "cn": "你哥哥晚餐後做什麼？ — 他洗碗。"
  },
  {
    "word": "fix",
    "pos": "v.",
    "cn_def": "修理",
    "en_def": "to make a broken thing work again",
    "sentence": "Q: Does your dad {{BLANK}} things at home? — A: Yes, he does. Our old lamp works again now.",
    "cn": "你爸爸會在家修東西嗎？ — 是的，他會。我們的舊檯燈現在又能用了。"
  },
  {
    "word": "build",
    "pos": "v.",
    "cn_def": "建造",
    "en_def": "to make something like a house or a bridge",
    "sentence": "Q: What do your uncle and his friends do? — A: They {{BLANK}} houses. They are workers.",
    "cn": "你叔叔和他的朋友們做什麼？ — 他們蓋房子，他們是工人。"
  },
  {
    "word": "bath",
    "pos": "n.",
    "cn_def": "洗澡；浴缸",
    "en_def": "washing your body in a big container of water; that container",
    "sentence": "Q: Does Amy take a {{BLANK}} every night? — A: No, she doesn't. She takes a shower.",
    "cn": "艾美每天晚上泡澡嗎？ — 不，她沒有。她淋浴。"
  },
  {
    "word": "street",
    "pos": "n.",
    "cn_def": "街道",
    "en_def": "a road in a town or city with houses or shops on it",
    "sentence": "Q: Where does Tina live? — A: She lives on Park {{BLANK}}.",
    "cn": "蒂娜住在哪裡？ — 她住在公園街。"
  },
  {
    "word": "road",
    "pos": "n.",
    "cn_def": "道路；路",
    "en_def": "a hard way for cars, buses, and bikes to go on",
    "sentence": "Q: Where do your grandparents live? — A: They live on Zhongshan {{BLANK}}, near the station.",
    "cn": "你的爺爺奶奶住在哪裡？ — 他們住在中山路，車站附近。"
  }
];

const MCQS = [
  {
    "q": "I am very tired. I just want to lie down on my ______ and sleep until tomorrow morning.",
    "options": [
      "desk",
      "drawer",
      "bed",
      "lamp"
    ],
    "answer": 2,
    "cn": "貓在哪裡？ — 牠在我的床上，牠正在睡覺。",
    "vocabIndex": 0
  },
  {
    "q": "The three of us sat on the long, soft ______ in the living room and watched TV together.",
    "options": [
      "desk",
      "sofa",
      "drawer",
      "lamp"
    ],
    "answer": 1,
    "cn": "狗在哪裡？ — 牠在客廳的沙發上。",
    "vocabIndex": 1
  },
  {
    "q": "Dad fell asleep on the ______ in front of the TV. It is long and soft, so he can lie on it.",
    "options": [
      "desk",
      "drawer",
      "basket",
      "couch"
    ],
    "answer": 3,
    "cn": "我的漫畫書在哪裡？ — 它們在沙發上，電視旁邊。",
    "vocabIndex": 2
  },
  {
    "q": "There are four people but only three seats. Please bring another ______ from the kitchen.",
    "options": [
      "chair",
      "lamp",
      "blanket",
      "towel"
    ],
    "answer": 0,
    "cn": "我的書包在哪裡？ — 它在你的椅子下面。",
    "vocabIndex": 3
  },
  {
    "q": "I do my homework at my ______. My books, pens, and computer are all on it.",
    "options": [
      "bed",
      "mat",
      "blanket",
      "desk"
    ],
    "answer": 3,
    "cn": "我的書在哪裡？ — 它們在你的書桌上。",
    "vocabIndex": 4
  },
  {
    "q": "Dinner is ready. Please put the bowls and chopsticks on the ______. The whole family will sit around it.",
    "options": [
      "bed",
      "table",
      "lamp",
      "drawer"
    ],
    "answer": 1,
    "cn": "媽媽把蛋糕放在哪裡？ — 她把它放在桌上。",
    "vocabIndex": 5
  },
  {
    "q": "I keep my pens and erasers in the top ______ of my desk. I pull it out when I need them.",
    "options": [
      "drawer",
      "lamp",
      "blanket",
      "candle"
    ],
    "answer": 0,
    "cn": "你把筆放在哪裡？ — 我把它們放在抽屜裡。",
    "vocabIndex": 6
  },
  {
    "q": "It is too dark to read. Please turn on the ______ on your desk.",
    "options": [
      "key",
      "towel",
      "lamp",
      "basket"
    ],
    "answer": 2,
    "cn": "檯燈在哪裡？ — 它在書桌上，電腦旁邊。",
    "vocabIndex": 7
  },
  {
    "q": "It is cold tonight. Put another ______ on your bed, or you won't sleep well.",
    "options": [
      "lamp",
      "blanket",
      "key",
      "pot"
    ],
    "answer": 1,
    "cn": "我的毯子在哪裡？我好冷。 — 它在你的床上。",
    "vocabIndex": 8
  },
  {
    "q": "After swimming, we dried our bodies with ______. They were big and soft.",
    "options": [
      "keys",
      "candles",
      "pots",
      "towels"
    ],
    "answer": 3,
    "cn": "毛巾在哪裡？ — 它們在浴室裡。",
    "vocabIndex": 9
  },
  {
    "q": "I can't open the door because I lost my ______. I have to wait for Mom to come home.",
    "options": [
      "towels",
      "candles",
      "keys",
      "pots"
    ],
    "answer": 2,
    "cn": "我的鑰匙在哪裡？ — 爸爸，它們在你的口袋裡！",
    "vocabIndex": 10
  },
  {
    "q": "It is raining now. Don't forget to take your ______ when you go out.",
    "options": [
      "umbrella",
      "candle",
      "drawer",
      "bench"
    ],
    "answer": 0,
    "cn": "爸爸把他的雨傘放在哪裡？ — 他把它放在門後面。",
    "vocabIndex": 11
  },
  {
    "q": "Mom carried the fruit and vegetables home from the market in a ______.",
    "options": [
      "lamp",
      "bench",
      "pipe",
      "basket"
    ],
    "answer": 3,
    "cn": "蘋果在哪裡？ — 它們在桌上的籃子裡。",
    "vocabIndex": 12
  },
  {
    "q": "Mom is cooking soup in a big ______. Don't touch it because it is very hot.",
    "options": [
      "basket",
      "pot",
      "mat",
      "drawer"
    ],
    "answer": 1,
    "cn": "湯在哪裡？ — 它在廚房的鍋子裡。",
    "vocabIndex": 13
  },
  {
    "q": "There are ten ______ on the birthday cake. Make a wish and blow them out!",
    "options": [
      "candles",
      "keys",
      "towels",
      "mats"
    ],
    "answer": 0,
    "cn": "蠟燭在哪裡？ — 它們在生日蛋糕上。",
    "vocabIndex": 14
  },
  {
    "q": "Please clean your shoes on the ______ at the door before you come in.",
    "options": [
      "bench",
      "lamp",
      "mat",
      "pot"
    ],
    "answer": 2,
    "cn": "我們把鞋子放在哪裡？ — 把它們放在門邊的墊子上。",
    "vocabIndex": 15
  },
  {
    "q": "We sat on a ______ in the park and ate our sandwiches. An old man was sitting on the other end.",
    "options": [
      "lamp",
      "drawer",
      "pipe",
      "bench"
    ],
    "answer": 3,
    "cn": "花園裡有長椅嗎？ — 是的，有。奶奶常常坐在上面。",
    "vocabIndex": 16
  },
  {
    "q": "It is dark in here. Please turn on the ______ so that I can see.",
    "options": [
      "light",
      "pipe",
      "gate",
      "mat"
    ],
    "answer": 0,
    "cn": "浴室裡有燈嗎？ — 是的，有。但是它現在壞了。",
    "vocabIndex": 17
  },
  {
    "q": "We watch the news on ______ every evening. Our new one has a very big screen.",
    "options": [
      "radio",
      "television",
      "telephone",
      "camera"
    ],
    "answer": 1,
    "cn": "你的臥室裡有電視嗎？ — 不，沒有。它在客廳裡。",
    "vocabIndex": 18
  },
  {
    "q": "I use my ______ to write reports, play games, and send e-mails.",
    "options": [
      "camera",
      "radio",
      "computer",
      "fan"
    ],
    "answer": 2,
    "cn": "你的房間裡有電腦嗎？ — 是的，有。我用它寫功課。",
    "vocabIndex": 19
  },
  {
    "q": "The ______ is ringing. Can you answer it? It may be Grandma calling.",
    "options": [
      "radio",
      "camera",
      "fan",
      "telephone"
    ],
    "answer": 3,
    "cn": "廚房裡有電話嗎？ — 不，沒有。它在客廳的桌上。",
    "vocabIndex": 20
  },
  {
    "q": "Grandpa listens to the news and old songs on the ______ every morning. It has no screen.",
    "options": [
      "camera",
      "radio",
      "fan",
      "lamp"
    ],
    "answer": 1,
    "cn": "爺爺的房間裡有收音機嗎？ — 是的，有。他每天早上都聽。",
    "vocabIndex": 21
  },
  {
    "q": "I took many pictures with my new ______ on the trip. Do you want to see the photos?",
    "options": [
      "radio",
      "fan",
      "camera",
      "lamp"
    ],
    "answer": 2,
    "cn": "你的包包裡有相機嗎？ — 是的，有。我想在公園拍照。",
    "vocabIndex": 22
  },
  {
    "q": "It is hot in here. Please turn on the ______. We need some moving air.",
    "options": [
      "fan",
      "radio",
      "camera",
      "lamp"
    ],
    "answer": 0,
    "cn": "你的臥室裡有電風扇嗎？好熱喔。 — 不，沒有。我們去客廳吧。",
    "vocabIndex": 23
  },
  {
    "q": "Put the milk and eggs in the ______. They will go bad if they are not kept cold.",
    "options": [
      "drawer",
      "refrigerator",
      "basket",
      "pot"
    ],
    "answer": 1,
    "cn": "冰箱裡有牛奶嗎？ — 是的，有。它在蛋的旁邊。",
    "vocabIndex": 24
  },
  {
    "q": "This ______ can wash and dry your clothes in two hours. You just need to push a button.",
    "options": [
      "pipe",
      "lamp",
      "radio",
      "machine"
    ],
    "answer": 3,
    "cn": "你的公寓裡有洗衣機嗎？ — 是的，有。它在陽台上。",
    "vocabIndex": 25
  },
  {
    "q": "In the past, people listened to music on ______. Now most people use their phones.",
    "options": [
      "tapes",
      "pipes",
      "lamps",
      "cameras"
    ],
    "answer": 0,
    "cn": "箱子裡有英文錄音帶嗎？ — 是的，有。我們可以聽它們。",
    "vocabIndex": 26
  },
  {
    "q": "My brother likes to watch funny cat ______ on the Internet. He laughs at them for hours.",
    "options": [
      "tapes",
      "radios",
      "videos",
      "pipes"
    ],
    "answer": 2,
    "cn": "你的手機裡有好笑的影片嗎？ — 是的，有。我們一起看吧！",
    "vocabIndex": 27
  },
  {
    "q": "Water is coming out of a broken ______ under the kitchen floor. Call someone to fix it.",
    "options": [
      "pipe",
      "lamp",
      "radio",
      "camera"
    ],
    "answer": 0,
    "cn": "水管裡有水嗎？ — 不，沒有。它破了。",
    "vocabIndex": 28
  },
  {
    "q": "The Lins live in a big ______ with a garden and a yard. Seven people live there.",
    "options": [
      "room",
      "house",
      "kitchen",
      "balcony"
    ],
    "answer": 1,
    "cn": "公園附近有什麼？ — 有一棟有花園的大房子。",
    "vocabIndex": 29
  },
  {
    "q": "We live in a small ______ on the fifth floor of a tall building. We don't have a garden.",
    "options": [
      "garden",
      "yard",
      "apartment",
      "gate"
    ],
    "answer": 2,
    "cn": "你的公寓裡有幾間臥室？ — 有三間臥室。",
    "vocabIndex": 30
  },
  {
    "q": "Someone is knocking on the ______. Can you open it and see who it is?",
    "options": [
      "floor",
      "wall",
      "stairs",
      "door"
    ],
    "answer": 3,
    "cn": "門上有什麼？ — 有一張我們的全家福照片。",
    "vocabIndex": 31
  },
  {
    "q": "It is hot in here. Let's open the ______ and let some fresh air in.",
    "options": [
      "windows",
      "walls",
      "floors",
      "stairs"
    ],
    "answer": 0,
    "cn": "你的房間裡有幾扇窗戶？ — 有兩扇，它們很大。",
    "vocabIndex": 32
  },
  {
    "q": "There is a big picture of my family on the ______ of the living room. It hangs above the sofa.",
    "options": [
      "floor",
      "gate",
      "wall",
      "yard"
    ],
    "answer": 2,
    "cn": "牆上有什麼？ — 有一個時鐘和兩幅畫。",
    "vocabIndex": 33
  },
  {
    "q": "Don't leave your toys on the ______. Someone may step on them and fall.",
    "options": [
      "wall",
      "window",
      "gate",
      "floor"
    ],
    "answer": 3,
    "cn": "地板上有什麼？ — 有一些玩具，請把它們撿起來。",
    "vocabIndex": 34
  },
  {
    "q": "The school ______ opens at seven in the morning. Students can't get in before that.",
    "options": [
      "wall",
      "gate",
      "floor",
      "yard"
    ],
    "answer": 1,
    "cn": "大門口有誰？ — 有一個拿著大箱子的男人。",
    "vocabIndex": 35
  },
  {
    "q": "The elevator is broken, so we have to walk up the ______ to the tenth floor.",
    "options": [
      "gates",
      "walls",
      "stairs",
      "yards"
    ],
    "answer": 2,
    "cn": "你家有幾層樓？ — 有三層。我們走樓梯上去臥室。",
    "vocabIndex": 36
  },
  {
    "q": "It is late. I have to go ______ now, or my parents will worry about me.",
    "options": [
      "room",
      "yard",
      "garden",
      "home"
    ],
    "answer": 3,
    "cn": "班，你在哪裡？ — 我在家，我正在看電視。",
    "vocabIndex": 37
  },
  {
    "q": "My sister and I share a ______. There are two beds and two desks in it.",
    "options": [
      "room",
      "gate",
      "wall",
      "floor"
    ],
    "answer": 0,
    "cn": "艾美在哪裡？ — 她在她的房間，她正在寫功課。",
    "vocabIndex": 38
  },
  {
    "q": "I sleep and study in my ______. My bed and desk are there.",
    "options": [
      "kitchen",
      "bedroom",
      "bathroom",
      "balcony"
    ],
    "answer": 1,
    "cn": "麗莎，你在哪裡？ — 我在我的臥室，我正準備睡覺。",
    "vocabIndex": 39
  },
  {
    "q": "I take a shower and brush my teeth in the ______ every night before bed.",
    "options": [
      "kitchen",
      "bedroom",
      "bathroom",
      "garden"
    ],
    "answer": 2,
    "cn": "爸爸在哪裡？ — 他在浴室，他正在淋浴。",
    "vocabIndex": 40
  },
  {
    "q": "Mom is cooking dinner in the ______. It smells so good!",
    "options": [
      "bathroom",
      "bedroom",
      "balcony",
      "kitchen"
    ],
    "answer": 3,
    "cn": "媽媽，你在哪裡？ — 我在廚房，我正在煮晚餐。",
    "vocabIndex": 41
  },
  {
    "q": "We eat dinner together in the ______. There is a big table with six chairs in it.",
    "options": [
      "dining room",
      "bathroom",
      "bedroom",
      "balcony"
    ],
    "answer": 0,
    "cn": "爺爺和奶奶在哪裡？ — 他們在飯廳，他們正在吃午餐。",
    "vocabIndex": 42
  },
  {
    "q": "The family watches TV on the sofa in the ______ after dinner.",
    "options": [
      "bathroom",
      "living room",
      "kitchen",
      "garden"
    ],
    "answer": 1,
    "cn": "孩子們在哪裡？ — 他們在客廳，他們正在玩遊戲。",
    "vocabIndex": 43
  },
  {
    "q": "Mom hangs the wet clothes on the ______ of our apartment. It gets a lot of sun there.",
    "options": [
      "balcony",
      "kitchen",
      "bathroom",
      "bedroom"
    ],
    "answer": 0,
    "cn": "湯姆，你在哪裡？ — 我在陽台上，我正在看星星。",
    "vocabIndex": 44
  },
  {
    "q": "Grandpa grows flowers and vegetables in his ______. He waters them every morning.",
    "options": [
      "kitchen",
      "bedroom",
      "bathroom",
      "garden"
    ],
    "answer": 3,
    "cn": "奶奶在哪裡？ — 她在花園，她正在澆花。",
    "vocabIndex": 45
  },
  {
    "q": "The children are playing ball in the ______ in front of the house. The dog is running around them.",
    "options": [
      "kitchen",
      "bedroom",
      "yard",
      "bathroom"
    ],
    "answer": 2,
    "cn": "你和你的狗在哪裡？ — 我們在院子裡，我們正在玩球。",
    "vocabIndex": 46
  },
  {
    "q": "Your room is very dirty. Please ______ it before your friends come this afternoon.",
    "options": [
      "build",
      "clean",
      "fix",
      "cook"
    ],
    "answer": 1,
    "cn": "你星期六早上做什麼？ — 我打掃我的房間。",
    "vocabIndex": 47
  },
  {
    "q": "Dad ______ his car with soap and water every Sunday morning.",
    "options": [
      "fixes",
      "builds",
      "cooks",
      "washes"
    ],
    "answer": 3,
    "cn": "你哥哥晚餐後做什麼？ — 他洗碗。",
    "vocabIndex": 48
  },
  {
    "q": "My bike is broken. Can you ______ it for me, Dad? I need it for school tomorrow.",
    "options": [
      "build",
      "wash",
      "fix",
      "clean"
    ],
    "answer": 2,
    "cn": "你爸爸會在家修東西嗎？ — 是的，他會。我們的舊檯燈現在又能用了。",
    "vocabIndex": 49
  },
  {
    "q": "They will ______ a new bridge over the river. It will take two years to finish.",
    "options": [
      "wash",
      "build",
      "cook",
      "fix"
    ],
    "answer": 1,
    "cn": "你叔叔和他的朋友們做什麼？ — 他們蓋房子，他們是工人。",
    "vocabIndex": 50
  },
  {
    "q": "I like to take a hot ______ before bed. I lie in the warm water for twenty minutes.",
    "options": [
      "bath",
      "street",
      "road",
      "gate"
    ],
    "answer": 0,
    "cn": "艾美每天晚上泡澡嗎？ — 不，她沒有。她淋浴。",
    "vocabIndex": 51
  },
  {
    "q": "There are many shops and restaurants on this ______. It is the busiest one in the town.",
    "options": [
      "bath",
      "floor",
      "wall",
      "street"
    ],
    "answer": 3,
    "cn": "蒂娜住在哪裡？ — 她住在公園街。",
    "vocabIndex": 52
  },
  {
    "q": "Drive carefully. The ______ to the mountain village is narrow, and there are many turns.",
    "options": [
      "bath",
      "floor",
      "road",
      "wall"
    ],
    "answer": 2,
    "cn": "你的爺爺奶奶住在哪裡？ — 他們住在中山路，車站附近。",
    "vocabIndex": 53
  }
];

const LOOKUP = {
  "desk": {
    "pos": "n.",
    "en_def": "a table where you study or work",
    "cn_def": "書桌"
  },
  "drawer": {
    "pos": "n.",
    "en_def": "a box in a desk or table that you pull out to put things in",
    "cn_def": "抽屜"
  },
  "bed": {
    "pos": "n.",
    "en_def": "a thing that you sleep on",
    "cn_def": "床"
  },
  "lamp": {
    "pos": "n.",
    "en_def": "a small light that stands on a desk or table",
    "cn_def": "檯燈"
  },
  "sofa": {
    "pos": "n.",
    "en_def": "a long, soft seat for two or more people",
    "cn_def": "沙發"
  },
  "basket": {
    "pos": "n.",
    "en_def": "a container made of thin sticks for carrying things",
    "cn_def": "籃子"
  },
  "couch": {
    "pos": "n.",
    "en_def": "a long, soft seat for two or more people",
    "cn_def": "沙發"
  },
  "chair": {
    "pos": "n.",
    "en_def": "a seat for one person, with a back and four legs",
    "cn_def": "椅子"
  },
  "blanket": {
    "pos": "n.",
    "en_def": "a big, warm cover for your bed",
    "cn_def": "毯子"
  },
  "towel": {
    "pos": "n.",
    "en_def": "a piece of cloth that you use to dry yourself",
    "cn_def": "毛巾"
  },
  "mat": {
    "pos": "n.",
    "en_def": "a small piece of thick cloth on the floor",
    "cn_def": "墊子"
  },
  "table": {
    "pos": "n.",
    "en_def": "a thing with a flat top and legs that you put things on",
    "cn_def": "桌子"
  },
  "candle": {
    "pos": "n.",
    "en_def": "a stick of wax that gives light when it burns",
    "cn_def": "蠟燭"
  },
  "key": {
    "pos": "n.",
    "en_def": "a small metal thing that opens a door or starts a car",
    "cn_def": "鑰匙"
  },
  "pot": {
    "pos": "n.",
    "en_def": "a deep round container for cooking food or holding tea",
    "cn_def": "鍋子；壺"
  },
  "keys": {
    "pos": "n.",
    "en_def": "a small metal thing that opens a door or starts a car",
    "cn_def": "鑰匙"
  },
  "candles": {
    "pos": "n.",
    "en_def": "a stick of wax that gives light when it burns",
    "cn_def": "蠟燭"
  },
  "pots": {
    "pos": "n.",
    "en_def": "a deep round container for cooking food or holding tea",
    "cn_def": "鍋子；壺"
  },
  "towels": {
    "pos": "n.",
    "en_def": "a piece of cloth that you use to dry yourself",
    "cn_def": "毛巾"
  },
  "umbrella": {
    "pos": "n.",
    "en_def": "a thing you hold over your head to stay dry in the rain",
    "cn_def": "雨傘"
  },
  "bench": {
    "pos": "n.",
    "en_def": "a long seat for two or more people, often in a park",
    "cn_def": "長椅"
  },
  "pipe": {
    "pos": "n.",
    "en_def": "a long tube that water or gas moves through",
    "cn_def": "管子；水管"
  },
  "mats": {
    "pos": "n.",
    "en_def": "a small piece of thick cloth on the floor",
    "cn_def": "墊子"
  },
  "light": {
    "pos": "n.",
    "en_def": "a thing that makes a room bright",
    "cn_def": "燈；燈光"
  },
  "gate": {
    "pos": "n.",
    "en_def": "a door in a fence or outside wall",
    "cn_def": "大門"
  },
  "radio": {
    "pos": "n.",
    "en_def": "a machine that plays music and news you can listen to",
    "cn_def": "收音機"
  },
  "television": {
    "pos": "n.",
    "en_def": "a machine with a screen that shows programs and movies",
    "cn_def": "電視"
  },
  "telephone": {
    "pos": "n.",
    "en_def": "a thing you use to talk to someone who is far away",
    "cn_def": "電話"
  },
  "camera": {
    "pos": "n.",
    "en_def": "a thing you use to take photos",
    "cn_def": "照相機"
  },
  "computer": {
    "pos": "n.",
    "en_def": "a machine you use to write, play games, and go online",
    "cn_def": "電腦"
  },
  "fan": {
    "pos": "n.",
    "en_def": "a person who likes a singer, a team, or a sport very much",
    "cn_def": "粉絲；狂熱愛好者"
  },
  "refrigerator": {
    "pos": "n.",
    "en_def": "a machine in the kitchen that keeps food cold",
    "cn_def": "冰箱"
  },
  "machine": {
    "pos": "n.",
    "en_def": "a thing with moving parts that does work for people",
    "cn_def": "機器"
  },
  "tapes": {
    "pos": "n.",
    "en_def": "a long thin strip that holds sound or sticks things together",
    "cn_def": "錄音帶；膠帶"
  },
  "pipes": {
    "pos": "n.",
    "en_def": "a long tube that water or gas moves through",
    "cn_def": "管子；水管"
  },
  "lamps": {
    "pos": "n.",
    "en_def": "a small light that stands on a desk or table",
    "cn_def": "檯燈"
  },
  "cameras": {
    "pos": "n.",
    "en_def": "a thing you use to take photos",
    "cn_def": "照相機"
  },
  "radios": {
    "pos": "n.",
    "en_def": "a machine that plays music and news you can listen to",
    "cn_def": "收音機"
  },
  "videos": {
    "pos": "n.",
    "en_def": "a short movie that you watch on a phone, computer, or TV",
    "cn_def": "影片；錄影帶"
  },
  "room": {
    "pos": "n.",
    "en_def": "one of the parts of a house, with walls and a door",
    "cn_def": "房間"
  },
  "house": {
    "pos": "n.",
    "en_def": "a building where a family lives",
    "cn_def": "房子"
  },
  "kitchen": {
    "pos": "n.",
    "en_def": "a room where people cook food",
    "cn_def": "廚房"
  },
  "balcony": {
    "pos": "n.",
    "en_def": "a small open place outside an upstairs room",
    "cn_def": "陽台"
  },
  "garden": {
    "pos": "n.",
    "en_def": "a place by a house where flowers and vegetables grow",
    "cn_def": "花園"
  },
  "yard": {
    "pos": "n.",
    "en_def": "a piece of ground next to a house",
    "cn_def": "庭院；院子"
  },
  "apartment": {
    "pos": "n.",
    "en_def": "a home that is part of a bigger building",
    "cn_def": "公寓"
  },
  "floor": {
    "pos": "n.",
    "en_def": "the part of a room that you walk on",
    "cn_def": "地板"
  },
  "wall": {
    "pos": "n.",
    "en_def": "one of the sides of a room or building",
    "cn_def": "牆壁"
  },
  "stairs": {
    "pos": "n.",
    "en_def": "steps that go from one floor of a building to another",
    "cn_def": "樓梯"
  },
  "door": {
    "pos": "n.",
    "en_def": "the thing you open to go into a room or a house",
    "cn_def": "門"
  },
  "windows": {
    "pos": "n.",
    "en_def": "an opening with glass in a wall that lets in light and air",
    "cn_def": "窗戶"
  },
  "walls": {
    "pos": "n.",
    "en_def": "one of the sides of a room or building",
    "cn_def": "牆壁"
  },
  "floors": {
    "pos": "n.",
    "en_def": "the part of a room that you walk on",
    "cn_def": "地板"
  },
  "window": {
    "pos": "n.",
    "en_def": "an opening with glass in a wall that lets in light and air",
    "cn_def": "窗戶"
  },
  "gates": {
    "pos": "n.",
    "en_def": "a door in a fence or outside wall",
    "cn_def": "大門"
  },
  "yards": {
    "pos": "n.",
    "en_def": "a unit of length; it is 3 feet, or about 91 centimeters",
    "cn_def": "碼"
  },
  "home": {
    "pos": "n.",
    "en_def": "the place where you live",
    "cn_def": "家"
  },
  "bedroom": {
    "pos": "n.",
    "en_def": "a room for sleeping in",
    "cn_def": "臥室"
  },
  "bathroom": {
    "pos": "n.",
    "en_def": "a room with a toilet and a place to wash",
    "cn_def": "浴室"
  },
  "dining room": {
    "pos": "n.",
    "en_def": "a room where people eat meals",
    "cn_def": "飯廳"
  },
  "living room": {
    "pos": "n.",
    "en_def": "a room where a family sits, talks, and watches TV",
    "cn_def": "客廳"
  },
  "build": {
    "pos": "v.",
    "en_def": "to make something like a house or a bridge",
    "cn_def": "建造"
  },
  "clean": {
    "pos": "v.",
    "en_def": "to make something not dirty",
    "cn_def": "打掃"
  },
  "fix": {
    "pos": "v.",
    "en_def": "to make a broken thing work again",
    "cn_def": "修理"
  },
  "cook": {
    "pos": "v.",
    "en_def": "to make food ready to eat by heating it",
    "cn_def": "煮飯；烹調"
  },
  "fixes": {
    "pos": "v.",
    "en_def": "to make a broken thing work again",
    "cn_def": "修理"
  },
  "builds": {
    "pos": "v.",
    "en_def": "to make something like a house or a bridge",
    "cn_def": "建造"
  },
  "cooks": {
    "pos": "v.",
    "en_def": "to make food ready to eat by heating it",
    "cn_def": "煮飯；烹調"
  },
  "washes": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "清洗"
  },
  "wash": {
    "pos": "v.",
    "en_def": "to clean something with water and soap",
    "cn_def": "清洗"
  },
  "bath": {
    "pos": "n.",
    "en_def": "washing your body in a big container of water; that container",
    "cn_def": "洗澡；浴缸"
  },
  "street": {
    "pos": "n.",
    "en_def": "a road in a town or city with houses or shops on it",
    "cn_def": "街道"
  },
  "road": {
    "pos": "n.",
    "en_def": "a hard way for cars, buses, and bikes to go on",
    "cn_def": "道路；路"
  }
};

const EXTRA_GLOSSES = {};
