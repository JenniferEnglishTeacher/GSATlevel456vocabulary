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
    "en_def": "",
    "sentence": "Q: Where is the cat? — A: It's on my {{BLANK}}. It's sleeping.",
    "cn": "貓在哪裡？ — 牠在我的床上，牠正在睡覺。"
  },
  {
    "word": "sofa",
    "pos": "n.",
    "cn_def": "沙發",
    "en_def": "",
    "sentence": "Q: Where is the dog? — A: It's on the {{BLANK}} in the living room.",
    "cn": "狗在哪裡？ — 牠在客廳的沙發上。"
  },
  {
    "word": "couch",
    "pos": "n.",
    "cn_def": "沙發",
    "en_def": "",
    "sentence": "Q: Where are my comic books? — A: They're on the {{BLANK}}, next to the TV.",
    "cn": "我的漫畫書在哪裡？ — 它們在沙發上，電視旁邊。"
  },
  {
    "word": "chair",
    "pos": "n.",
    "cn_def": "椅子",
    "en_def": "",
    "sentence": "Q: Where is my schoolbag? — A: It's under your {{BLANK}}.",
    "cn": "我的書包在哪裡？ — 它在你的椅子下面。"
  },
  {
    "word": "desk",
    "pos": "n.",
    "cn_def": "書桌",
    "en_def": "",
    "sentence": "Q: Where are my books? — A: They're on your {{BLANK}}.",
    "cn": "我的書在哪裡？ — 它們在你的書桌上。"
  },
  {
    "word": "table",
    "pos": "n.",
    "cn_def": "桌子",
    "en_def": "",
    "sentence": "Q: Where does Mom put the cake? — A: She puts it on the {{BLANK}}.",
    "cn": "媽媽把蛋糕放在哪裡？ — 她把它放在桌上。"
  },
  {
    "word": "drawer",
    "pos": "n.",
    "cn_def": "抽屜",
    "en_def": "",
    "sentence": "Q: Where do you keep your pens? — A: I keep them in the {{BLANK}}.",
    "cn": "你把筆放在哪裡？ — 我把它們放在抽屜裡。"
  },
  {
    "word": "lamp",
    "pos": "n.",
    "cn_def": "檯燈",
    "en_def": "",
    "sentence": "Q: Where is the {{BLANK}}? — A: It's on the desk, next to the computer.",
    "cn": "檯燈在哪裡？ — 它在書桌上，電腦旁邊。"
  },
  {
    "word": "blanket",
    "pos": "n.",
    "cn_def": "毯子",
    "en_def": "",
    "sentence": "Q: Where is my {{BLANK}}? I'm cold. — A: It's on your bed.",
    "cn": "我的毯子在哪裡？我好冷。 — 它在你的床上。"
  },
  {
    "word": "towel (towels)",
    "pos": "n.",
    "cn_def": "毛巾",
    "en_def": "",
    "sentence": "Q: Where are the {{BLANK}}? — A: They're in the bathroom.",
    "cn": "毛巾在哪裡？ — 它們在浴室裡。"
  },
  {
    "word": "key (keys)",
    "pos": "n.",
    "cn_def": "鑰匙",
    "en_def": "",
    "sentence": "Q: Where are my {{BLANK}}? — A: They're in your pocket, Dad!",
    "cn": "我的鑰匙在哪裡？ — 爸爸，它們在你的口袋裡！"
  },
  {
    "word": "umbrella",
    "pos": "n.",
    "cn_def": "雨傘",
    "en_def": "",
    "sentence": "Q: Where does Dad keep his {{BLANK}}? — A: He keeps it behind the door.",
    "cn": "爸爸把他的雨傘放在哪裡？ — 他把它放在門後面。"
  },
  {
    "word": "basket",
    "pos": "n.",
    "cn_def": "籃子",
    "en_def": "",
    "sentence": "Q: Where are the apples? — A: They're in the {{BLANK}} on the table.",
    "cn": "蘋果在哪裡？ — 它們在桌上的籃子裡。"
  },
  {
    "word": "pot",
    "pos": "n.",
    "cn_def": "鍋子；壺",
    "en_def": "",
    "sentence": "Q: Where is the soup? — A: It's in the {{BLANK}} in the kitchen.",
    "cn": "湯在哪裡？ — 它在廚房的鍋子裡。"
  },
  {
    "word": "candle (candles)",
    "pos": "n.",
    "cn_def": "蠟燭",
    "en_def": "",
    "sentence": "Q: Where are the {{BLANK}}? — A: They're on the birthday cake.",
    "cn": "蠟燭在哪裡？ — 它們在生日蛋糕上。"
  },
  {
    "word": "mat",
    "pos": "n.",
    "cn_def": "墊子",
    "en_def": "",
    "sentence": "Q: Where do we put our shoes? — A: Put them on the {{BLANK}} by the door.",
    "cn": "我們把鞋子放在哪裡？ — 把它們放在門邊的墊子上。"
  },
  {
    "word": "bench",
    "pos": "n.",
    "cn_def": "長椅",
    "en_def": "",
    "sentence": "Q: Is there a {{BLANK}} in the garden? — A: Yes, there is. Grandma often sits on it.",
    "cn": "花園裡有長椅嗎？ — 是的，有。奶奶常常坐在上面。"
  },
  {
    "word": "light",
    "pos": "n.",
    "cn_def": "燈；燈光",
    "en_def": "",
    "sentence": "Q: Is there a {{BLANK}} in the bathroom? — A: Yes, there is. But it doesn't work now.",
    "cn": "浴室裡有燈嗎？ — 是的，有。但是它現在壞了。"
  },
  {
    "word": "television (TV)",
    "pos": "n.",
    "cn_def": "電視",
    "en_def": "",
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
    "en_def": "",
    "sentence": "Q: Is there a {{BLANK}} in your room? — A: Yes, there is. I do my homework on it.",
    "cn": "你的房間裡有電腦嗎？ — 是的，有。我用它寫功課。"
  },
  {
    "word": "telephone (phone)",
    "pos": "n.",
    "cn_def": "電話",
    "en_def": "",
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
    "en_def": "",
    "sentence": "Q: Is there a {{BLANK}} in Grandpa's room? — A: Yes, there is. He listens to it every morning.",
    "cn": "爺爺的房間裡有收音機嗎？ — 是的，有。他每天早上都聽。"
  },
  {
    "word": "camera",
    "pos": "n.",
    "cn_def": "照相機",
    "en_def": "",
    "sentence": "Q: Is there a {{BLANK}} in your bag? — A: Yes, there is. I want to take pictures in the park.",
    "cn": "你的包包裡有相機嗎？ — 是的，有。我想在公園拍照。"
  },
  {
    "word": "fan",
    "pos": "n.",
    "cn_def": "電風扇",
    "en_def": "",
    "sentence": "Q: Is there a {{BLANK}} in your bedroom? It's so hot. — A: No, there isn't. Let's go to the living room.",
    "cn": "你的臥室裡有電風扇嗎？好熱喔。 — 不，沒有。我們去客廳吧。"
  },
  {
    "word": "refrigerator (fridge)",
    "pos": "n.",
    "cn_def": "冰箱",
    "en_def": "",
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
    "en_def": "",
    "sentence": "Q: Is there a washing {{BLANK}} in your apartment? — A: Yes, there is. It's on the balcony.",
    "cn": "你的公寓裡有洗衣機嗎？ — 是的，有。它在陽台上。"
  },
  {
    "word": "tape (tapes)",
    "pos": "n.",
    "cn_def": "錄音帶；膠帶",
    "en_def": "",
    "sentence": "Q: Are there any English {{BLANK}} in the box? — A: Yes, there are. We can listen to them.",
    "cn": "箱子裡有英文錄音帶嗎？ — 是的，有。我們可以聽它們。"
  },
  {
    "word": "video (videos)",
    "pos": "n.",
    "cn_def": "影片；錄影帶",
    "en_def": "",
    "sentence": "Q: Are there any funny {{BLANK}} on your phone? — A: Yes, there are. Let's watch them together!",
    "cn": "你的手機裡有好笑的影片嗎？ — 是的，有。我們一起看吧！"
  },
  {
    "word": "pipe",
    "pos": "n.",
    "cn_def": "管子；水管",
    "en_def": "",
    "sentence": "Q: Is there any water in the {{BLANK}}? — A: No, there isn't. It's broken.",
    "cn": "水管裡有水嗎？ — 不，沒有。它破了。"
  },
  {
    "word": "house",
    "pos": "n.",
    "cn_def": "房子",
    "en_def": "",
    "sentence": "Q: What is there near the park? — A: There is a big {{BLANK}} with a garden.",
    "cn": "公園附近有什麼？ — 有一棟有花園的大房子。"
  },
  {
    "word": "apartment",
    "pos": "n.",
    "cn_def": "公寓",
    "en_def": "",
    "sentence": "Q: How many bedrooms are there in your {{BLANK}}? — A: There are three bedrooms.",
    "cn": "你的公寓裡有幾間臥室？ — 有三間臥室。"
  },
  {
    "word": "door",
    "pos": "n.",
    "cn_def": "門",
    "en_def": "",
    "sentence": "Q: What is there on the {{BLANK}}? — A: There is a picture of our family.",
    "cn": "門上有什麼？ — 有一張我們的全家福照片。"
  },
  {
    "word": "window (windows)",
    "pos": "n.",
    "cn_def": "窗戶",
    "en_def": "",
    "sentence": "Q: How many {{BLANK}} are there in your room? — A: There are two. They are very big.",
    "cn": "你的房間裡有幾扇窗戶？ — 有兩扇，它們很大。"
  },
  {
    "word": "wall",
    "pos": "n.",
    "cn_def": "牆壁",
    "en_def": "",
    "sentence": "Q: What is there on the {{BLANK}}? — A: There is a clock and two pictures.",
    "cn": "牆上有什麼？ — 有一個時鐘和兩幅畫。"
  },
  {
    "word": "floor",
    "pos": "n.",
    "cn_def": "地板",
    "en_def": "",
    "sentence": "Q: What is there on the {{BLANK}}? — A: There are some toys. Please pick them up.",
    "cn": "地板上有什麼？ — 有一些玩具，請把它們撿起來。"
  },
  {
    "word": "gate",
    "pos": "n.",
    "cn_def": "大門",
    "en_def": "",
    "sentence": "Q: Who is there at the {{BLANK}}? — A: There is a man with a big box.",
    "cn": "大門口有誰？ — 有一個拿著大箱子的男人。"
  },
  {
    "word": "stairs",
    "pos": "n.",
    "cn_def": "樓梯",
    "en_def": "",
    "sentence": "Q: How many floors are there in your house? — A: There are three. We walk up the {{BLANK}} to our bedrooms.",
    "cn": "你家有幾層樓？ — 有三層。我們走樓梯上去臥室。"
  },
  {
    "word": "home",
    "pos": "n.",
    "cn_def": "家",
    "en_def": "",
    "sentence": "Q: Where are you, Ben? — A: I'm at {{BLANK}}. I'm watching TV.",
    "cn": "班，你在哪裡？ — 我在家，我正在看電視。"
  },
  {
    "word": "room",
    "pos": "n.",
    "cn_def": "房間",
    "en_def": "",
    "sentence": "Q: Where is Amy? — A: She's in her {{BLANK}}. She's doing her homework.",
    "cn": "艾美在哪裡？ — 她在她的房間，她正在寫功課。"
  },
  {
    "word": "bedroom",
    "pos": "n.",
    "cn_def": "臥室",
    "en_def": "",
    "sentence": "Q: Where are you, Lisa? — A: I'm in my {{BLANK}}. I'm getting ready for bed.",
    "cn": "麗莎，你在哪裡？ — 我在我的臥室，我正準備睡覺。"
  },
  {
    "word": "bathroom",
    "pos": "n.",
    "cn_def": "浴室",
    "en_def": "",
    "sentence": "Q: Where is Dad? — A: He's in the {{BLANK}}. He's taking a shower.",
    "cn": "爸爸在哪裡？ — 他在浴室，他正在淋浴。"
  },
  {
    "word": "kitchen",
    "pos": "n.",
    "cn_def": "廚房",
    "en_def": "",
    "sentence": "Q: Where are you, Mom? — A: I'm in the {{BLANK}}. I'm cooking dinner.",
    "cn": "媽媽，你在哪裡？ — 我在廚房，我正在煮晚餐。"
  },
  {
    "word": "dining room",
    "pos": "n.",
    "cn_def": "飯廳",
    "en_def": "",
    "sentence": "Q: Where are Grandpa and Grandma? — A: They're in the {{BLANK}}. They're having lunch.",
    "cn": "爺爺和奶奶在哪裡？ — 他們在飯廳，他們正在吃午餐。",
    "nblanks": 2
  },
  {
    "word": "living room",
    "pos": "n.",
    "cn_def": "客廳",
    "en_def": "",
    "sentence": "Q: Where are the kids? — A: They're in the {{BLANK}}. They're playing games.",
    "cn": "孩子們在哪裡？ — 他們在客廳，他們正在玩遊戲。",
    "nblanks": 2
  },
  {
    "word": "balcony",
    "pos": "n.",
    "cn_def": "陽台",
    "en_def": "",
    "sentence": "Q: Where are you, Tom? — A: I'm on the {{BLANK}}. I'm looking at the stars.",
    "cn": "湯姆，你在哪裡？ — 我在陽台上，我正在看星星。"
  },
  {
    "word": "garden",
    "pos": "n.",
    "cn_def": "花園",
    "en_def": "",
    "sentence": "Q: Where is Grandma? — A: She's in the {{BLANK}}. She's watering the flowers.",
    "cn": "奶奶在哪裡？ — 她在花園，她正在澆花。"
  },
  {
    "word": "yard",
    "pos": "n.",
    "cn_def": "庭院；院子",
    "en_def": "",
    "sentence": "Q: Where are you and your dog? — A: We're in the {{BLANK}}. We're playing with a ball.",
    "cn": "你和你的狗在哪裡？ — 我們在院子裡，我們正在玩球。"
  },
  {
    "word": "clean",
    "pos": "v.",
    "cn_def": "打掃",
    "en_def": "",
    "sentence": "Q: What do you do on Saturday mornings? — A: I {{BLANK}} my room.",
    "cn": "你星期六早上做什麼？ — 我打掃我的房間。"
  },
  {
    "word": "wash (washes)",
    "pos": "v.",
    "cn_def": "清洗",
    "en_def": "",
    "sentence": "Q: What does your brother do after dinner? — A: He {{BLANK}} the dishes.",
    "cn": "你哥哥晚餐後做什麼？ — 他洗碗。"
  },
  {
    "word": "fix",
    "pos": "v.",
    "cn_def": "修理",
    "en_def": "",
    "sentence": "Q: Does your dad {{BLANK}} things at home? — A: Yes, he does. Our old lamp works again now.",
    "cn": "你爸爸會在家修東西嗎？ — 是的，他會。我們的舊檯燈現在又能用了。"
  },
  {
    "word": "build",
    "pos": "v.",
    "cn_def": "建造",
    "en_def": "",
    "sentence": "Q: What do your uncle and his friends do? — A: They {{BLANK}} houses. They are workers.",
    "cn": "你叔叔和他的朋友們做什麼？ — 他們蓋房子，他們是工人。"
  },
  {
    "word": "bath",
    "pos": "n.",
    "cn_def": "洗澡；浴缸",
    "en_def": "",
    "sentence": "Q: Does Amy take a {{BLANK}} every night? — A: No, she doesn't. She takes a shower.",
    "cn": "艾美每天晚上泡澡嗎？ — 不，她沒有。她淋浴。"
  },
  {
    "word": "street",
    "pos": "n.",
    "cn_def": "街道",
    "en_def": "",
    "sentence": "Q: Where does Tina live? — A: She lives on Park {{BLANK}}.",
    "cn": "蒂娜住在哪裡？ — 她住在公園街。"
  },
  {
    "word": "road",
    "pos": "n.",
    "cn_def": "道路；路",
    "en_def": "",
    "sentence": "Q: Where do your grandparents live? — A: They live on Zhongshan {{BLANK}}, near the station.",
    "cn": "你的爺爺奶奶住在哪裡？ — 他們住在中山路，車站附近。"
  }
];

const MCQS = [
  {
    "q": "Q: Where is the cat? — A: It's on my ______. It's sleeping.【床】",
    "options": [
      "bed",
      "stairs",
      "room",
      "table"
    ],
    "answer": 0,
    "cn": "貓在哪裡？ — 牠在我的床上，牠正在睡覺。",
    "vocabIndex": 0
  },
  {
    "q": "Q: Where is the dog? — A: It's on the ______ in the living room.【沙發】",
    "options": [
      "basket",
      "sofa",
      "mat",
      "kitchen"
    ],
    "answer": 1,
    "cn": "狗在哪裡？ — 牠在客廳的沙發上。",
    "vocabIndex": 1
  },
  {
    "q": "Q: Where are my comic books? — A: They're on the ______, next to the TV.【沙發】",
    "options": [
      "yard",
      "bath",
      "couch",
      "computer"
    ],
    "answer": 2,
    "cn": "我的漫畫書在哪裡？ — 它們在沙發上，電視旁邊。",
    "vocabIndex": 2
  },
  {
    "q": "Q: Where is my schoolbag? — A: It's under your ______.【椅子】",
    "options": [
      "dining room",
      "kitchen",
      "bench",
      "chair"
    ],
    "answer": 3,
    "cn": "我的書包在哪裡？ — 它在你的椅子下面。",
    "vocabIndex": 3
  },
  {
    "q": "Q: Where are my books? — A: They're on your ______.【書桌】",
    "options": [
      "table",
      "dining room",
      "desk",
      "mat"
    ],
    "answer": 2,
    "cn": "我的書在哪裡？ — 它們在你的書桌上。",
    "vocabIndex": 4
  },
  {
    "q": "Q: Where does Mom put the cake? — A: She puts it on the ______.【桌子】",
    "options": [
      "lamp",
      "umbrella",
      "mat",
      "table"
    ],
    "answer": 3,
    "cn": "媽媽把蛋糕放在哪裡？ — 她把它放在桌上。",
    "vocabIndex": 5
  },
  {
    "q": "Q: Where do you keep your pens? — A: I keep them in the ______.【抽屜】",
    "options": [
      "chair",
      "drawer",
      "refrigerator",
      "light"
    ],
    "answer": 1,
    "cn": "你把筆放在哪裡？ — 我把它們放在抽屜裡。",
    "vocabIndex": 6
  },
  {
    "q": "Q: Where is the ______? — A: It's on the desk, next to the computer.【檯燈】",
    "options": [
      "lamp",
      "light",
      "radio",
      "computer"
    ],
    "answer": 0,
    "cn": "檯燈在哪裡？ — 它在書桌上，電腦旁邊。",
    "vocabIndex": 7
  },
  {
    "q": "Q: Where is my ______? I'm cold. — A: It's on your bed.【毯子】",
    "options": [
      "road",
      "lamp",
      "blanket",
      "door"
    ],
    "answer": 2,
    "cn": "我的毯子在哪裡？我好冷。 — 它在你的床上。",
    "vocabIndex": 8
  },
  {
    "q": "Q: Where are the ______? — A: They're in the bathroom.【毛巾】",
    "options": [
      "tapes",
      "towels",
      "videos",
      "candles"
    ],
    "answer": 1,
    "cn": "毛巾在哪裡？ — 它們在浴室裡。",
    "vocabIndex": 9
  },
  {
    "q": "Q: Where are my ______? — A: They're in your pocket, Dad!【鑰匙】",
    "options": [
      "windows",
      "videos",
      "stairs",
      "keys"
    ],
    "answer": 3,
    "cn": "我的鑰匙在哪裡？ — 爸爸，它們在你的口袋裡！",
    "vocabIndex": 10
  },
  {
    "q": "Q: Where does Dad keep his ______? — A: He keeps it behind the door.【雨傘】",
    "options": [
      "umbrella",
      "radio",
      "apartment",
      "drawer"
    ],
    "answer": 0,
    "cn": "爸爸把他的雨傘放在哪裡？ — 他把它放在門後面。",
    "vocabIndex": 11
  },
  {
    "q": "Q: Where are the apples? — A: They're in the ______ on the table.【籃子】",
    "options": [
      "pot",
      "basket",
      "desk",
      "bath"
    ],
    "answer": 1,
    "cn": "蘋果在哪裡？ — 它們在桌上的籃子裡。",
    "vocabIndex": 12
  },
  {
    "q": "Q: Where is the soup? — A: It's in the ______ in the kitchen.【鍋子；壺】",
    "options": [
      "street",
      "computer",
      "pot",
      "table"
    ],
    "answer": 2,
    "cn": "湯在哪裡？ — 它在廚房的鍋子裡。",
    "vocabIndex": 13
  },
  {
    "q": "Q: Where are the ______? — A: They're on the birthday cake.【蠟燭】",
    "options": [
      "towels",
      "keys",
      "videos",
      "candles"
    ],
    "answer": 3,
    "cn": "蠟燭在哪裡？ — 它們在生日蛋糕上。",
    "vocabIndex": 14
  },
  {
    "q": "Q: Where do we put our shoes? — A: Put them on the ______ by the door.【墊子】",
    "options": [
      "mat",
      "camera",
      "chair",
      "living room"
    ],
    "answer": 0,
    "cn": "我們把鞋子放在哪裡？ — 把它們放在門邊的墊子上。",
    "vocabIndex": 15
  },
  {
    "q": "Q: Is there a ______ in the garden? — A: Yes, there is. Grandma often sits on it.【長椅】",
    "options": [
      "dining room",
      "door",
      "kitchen",
      "bench"
    ],
    "answer": 3,
    "cn": "花園裡有長椅嗎？ — 是的，有。奶奶常常坐在上面。",
    "vocabIndex": 16
  },
  {
    "q": "Q: Is there a ______ in the bathroom? — A: Yes, there is. But it doesn't work now.【燈；燈光】",
    "options": [
      "radio",
      "bath",
      "light",
      "kitchen"
    ],
    "answer": 2,
    "cn": "浴室裡有燈嗎？ — 是的，有。但是它現在壞了。",
    "vocabIndex": 17
  },
  {
    "q": "Q: Is there a ______ in your bedroom? — A: No, there isn't. It's in the living room.【電視】",
    "options": [
      "machine",
      "television",
      "bedroom",
      "fan"
    ],
    "answer": 1,
    "cn": "你的臥室裡有電視嗎？ — 不，沒有。它在客廳裡。",
    "vocabIndex": 18
  },
  {
    "q": "Q: Is there a ______ in your room? — A: Yes, there is. I do my homework on it.【電腦】",
    "options": [
      "computer",
      "camera",
      "house",
      "light"
    ],
    "answer": 0,
    "cn": "你的房間裡有電腦嗎？ — 是的，有。我用它寫功課。",
    "vocabIndex": 19
  },
  {
    "q": "Q: Is there a ______ in the kitchen? — A: No, there isn't. It's on the table in the living room.【電話】",
    "options": [
      "yard",
      "home",
      "telephone",
      "bedroom"
    ],
    "answer": 2,
    "cn": "廚房裡有電話嗎？ — 不，沒有。它在客廳的桌上。",
    "vocabIndex": 20
  },
  {
    "q": "Q: Is there a ______ in Grandpa's room? — A: Yes, there is. He listens to it every morning.【收音機】",
    "options": [
      "radio",
      "blanket",
      "road",
      "light"
    ],
    "answer": 0,
    "cn": "爺爺的房間裡有收音機嗎？ — 是的，有。他每天早上都聽。",
    "vocabIndex": 21
  },
  {
    "q": "Q: Is there a ______ in your bag? — A: Yes, there is. I want to take pictures in the park.【照相機】",
    "options": [
      "drawer",
      "table",
      "pipe",
      "camera"
    ],
    "answer": 3,
    "cn": "你的包包裡有相機嗎？ — 是的，有。我想在公園拍照。",
    "vocabIndex": 22
  },
  {
    "q": "Q: Is there a ______ in your bedroom? It's so hot. — A: No, there isn't. Let's go to the living room.【電風扇】",
    "options": [
      "garden",
      "fan",
      "road",
      "machine"
    ],
    "answer": 1,
    "cn": "你的臥室裡有電風扇嗎？好熱喔。 — 不，沒有。我們去客廳吧。",
    "vocabIndex": 23
  },
  {
    "q": "Q: Is there any milk in the ______? — A: Yes, there is. It's next to the eggs.【冰箱】",
    "options": [
      "garden",
      "camera",
      "couch",
      "refrigerator"
    ],
    "answer": 3,
    "cn": "冰箱裡有牛奶嗎？ — 是的，有。它在蛋的旁邊。",
    "vocabIndex": 24
  },
  {
    "q": "Q: Is there a washing ______ in your apartment? — A: Yes, there is. It's on the balcony.【機器】",
    "options": [
      "lamp",
      "balcony",
      "machine",
      "chair"
    ],
    "answer": 2,
    "cn": "你的公寓裡有洗衣機嗎？ — 是的，有。它在陽台上。",
    "vocabIndex": 25
  },
  {
    "q": "Q: Are there any English ______ in the box? — A: Yes, there are. We can listen to them.【錄音帶；膠帶】",
    "options": [
      "tapes",
      "towels",
      "keys",
      "videos"
    ],
    "answer": 0,
    "cn": "箱子裡有英文錄音帶嗎？ — 是的，有。我們可以聽它們。",
    "vocabIndex": 26
  },
  {
    "q": "Q: Are there any funny ______ on your phone? — A: Yes, there are. Let's watch them together!【影片；錄影帶】",
    "options": [
      "tapes",
      "videos",
      "windows",
      "stairs"
    ],
    "answer": 1,
    "cn": "你的手機裡有好笑的影片嗎？ — 是的，有。我們一起看吧！",
    "vocabIndex": 27
  },
  {
    "q": "Q: Is there any water in the ______? — A: No, there isn't. It's broken.【管子；水管】",
    "options": [
      "lamp",
      "bathroom",
      "room",
      "pipe"
    ],
    "answer": 3,
    "cn": "水管裡有水嗎？ — 不，沒有。它破了。",
    "vocabIndex": 28
  },
  {
    "q": "Q: What is there near the park? — A: There is a big ______ with a garden.【房子】",
    "options": [
      "computer",
      "house",
      "kitchen",
      "umbrella"
    ],
    "answer": 1,
    "cn": "公園附近有什麼？ — 有一棟有花園的大房子。",
    "vocabIndex": 29
  },
  {
    "q": "Q: How many bedrooms are there in your ______? — A: There are three bedrooms.【公寓】",
    "options": [
      "apartment",
      "light",
      "lamp",
      "table"
    ],
    "answer": 0,
    "cn": "你的公寓裡有幾間臥室？ — 有三間臥室。",
    "vocabIndex": 30
  },
  {
    "q": "Q: What is there on the ______? — A: There is a picture of our family.【門】",
    "options": [
      "desk",
      "pipe",
      "door",
      "basket"
    ],
    "answer": 2,
    "cn": "門上有什麼？ — 有一張我們的全家福照片。",
    "vocabIndex": 31
  },
  {
    "q": "Q: How many ______ are there in your room? — A: There are two. They are very big.【窗戶】",
    "options": [
      "windows",
      "towels",
      "stairs",
      "tapes"
    ],
    "answer": 0,
    "cn": "你的房間裡有幾扇窗戶？ — 有兩扇，它們很大。",
    "vocabIndex": 32
  },
  {
    "q": "Q: What is there on the ______? — A: There is a clock and two pictures.【牆壁】",
    "options": [
      "computer",
      "wall",
      "drawer",
      "pot"
    ],
    "answer": 1,
    "cn": "牆上有什麼？ — 有一個時鐘和兩幅畫。",
    "vocabIndex": 33
  },
  {
    "q": "Q: What is there on the ______? — A: There are some toys. Please pick them up.【地板】",
    "options": [
      "mat",
      "drawer",
      "computer",
      "floor"
    ],
    "answer": 3,
    "cn": "地板上有什麼？ — 有一些玩具，請把它們撿起來。",
    "vocabIndex": 34
  },
  {
    "q": "Q: Who is there at the ______? — A: There is a man with a big box.【大門】",
    "options": [
      "table",
      "home",
      "gate",
      "bath"
    ],
    "answer": 2,
    "cn": "大門口有誰？ — 有一個拿著大箱子的男人。",
    "vocabIndex": 35
  },
  {
    "q": "Q: How many floors are there in your house? — A: There are three. We walk up the ______ to our bedrooms.【樓梯】",
    "options": [
      "tapes",
      "videos",
      "keys",
      "stairs"
    ],
    "answer": 3,
    "cn": "你家有幾層樓？ — 有三層。我們走樓梯上去臥室。",
    "vocabIndex": 36
  },
  {
    "q": "Q: Where are you, Ben? — A: I'm at ______. I'm watching TV.【家】",
    "options": [
      "home",
      "computer",
      "umbrella",
      "basket"
    ],
    "answer": 0,
    "cn": "班，你在哪裡？ — 我在家，我正在看電視。",
    "vocabIndex": 37
  },
  {
    "q": "Q: Where is Amy? — A: She's in her ______. She's doing her homework.【房間】",
    "options": [
      "machine",
      "room",
      "blanket",
      "bedroom"
    ],
    "answer": 1,
    "cn": "艾美在哪裡？ — 她在她的房間，她正在寫功課。",
    "vocabIndex": 38
  },
  {
    "q": "Q: Where are you, Lisa? — A: I'm in my ______. I'm getting ready for bed.【臥室】",
    "options": [
      "refrigerator",
      "lamp",
      "bedroom",
      "living room"
    ],
    "answer": 2,
    "cn": "麗莎，你在哪裡？ — 我在我的臥室，我正準備睡覺。",
    "vocabIndex": 39
  },
  {
    "q": "Q: Where is Dad? — A: He's in the ______. He's taking a shower.【浴室】",
    "options": [
      "mat",
      "kitchen",
      "floor",
      "bathroom"
    ],
    "answer": 3,
    "cn": "爸爸在哪裡？ — 他在浴室，他正在淋浴。",
    "vocabIndex": 40
  },
  {
    "q": "Q: Where are you, Mom? — A: I'm in the ______. I'm cooking dinner.【廚房】",
    "options": [
      "kitchen",
      "sofa",
      "computer",
      "bathroom"
    ],
    "answer": 0,
    "cn": "媽媽，你在哪裡？ — 我在廚房，我正在煮晚餐。",
    "vocabIndex": 41
  },
  {
    "q": "Q: Where are Grandpa and Grandma? — A: They're in the ______. They're having lunch.【飯廳】",
    "options": [
      "refrigerator",
      "road",
      "dining room",
      "computer"
    ],
    "answer": 2,
    "cn": "爺爺和奶奶在哪裡？ — 他們在飯廳，他們正在吃午餐。",
    "vocabIndex": 42
  },
  {
    "q": "Q: Where are the kids? — A: They're in the ______. They're playing games.【客廳】",
    "options": [
      "blanket",
      "living room",
      "refrigerator",
      "home"
    ],
    "answer": 1,
    "cn": "孩子們在哪裡？ — 他們在客廳，他們正在玩遊戲。",
    "vocabIndex": 43
  },
  {
    "q": "Q: Where are you, Tom? — A: I'm on the ______. I'm looking at the stars.【陽台】",
    "options": [
      "balcony",
      "living room",
      "basket",
      "refrigerator"
    ],
    "answer": 0,
    "cn": "湯姆，你在哪裡？ — 我在陽台上，我正在看星星。",
    "vocabIndex": 44
  },
  {
    "q": "Q: Where is Grandma? — A: She's in the ______. She's watering the flowers.【花園】",
    "options": [
      "pipe",
      "road",
      "garden",
      "chair"
    ],
    "answer": 2,
    "cn": "奶奶在哪裡？ — 她在花園，她正在澆花。",
    "vocabIndex": 45
  },
  {
    "q": "Q: Where are you and your dog? — A: We're in the ______. We're playing with a ball.【庭院；院子】",
    "options": [
      "living room",
      "yard",
      "balcony",
      "blanket"
    ],
    "answer": 1,
    "cn": "你和你的狗在哪裡？ — 我們在院子裡，我們正在玩球。",
    "vocabIndex": 46
  },
  {
    "q": "Q: What do you do on Saturday mornings? — A: I ______ my room.【打掃】",
    "options": [
      "fix",
      "build",
      "washes",
      "clean"
    ],
    "answer": 3,
    "cn": "你星期六早上做什麼？ — 我打掃我的房間。",
    "vocabIndex": 47
  },
  {
    "q": "Q: What does your brother do after dinner? — A: He ______ the dishes.【清洗】",
    "options": [
      "fix",
      "build",
      "washes",
      "clean"
    ],
    "answer": 2,
    "cn": "你哥哥晚餐後做什麼？ — 他洗碗。",
    "vocabIndex": 48
  },
  {
    "q": "Q: Does your dad ______ things at home? — A: Yes, he does. Our old lamp works again now.【修理】",
    "options": [
      "fix",
      "build",
      "clean",
      "washes"
    ],
    "answer": 0,
    "cn": "你爸爸會在家修東西嗎？ — 是的，他會。我們的舊檯燈現在又能用了。",
    "vocabIndex": 49
  },
  {
    "q": "Q: What do your uncle and his friends do? — A: They ______ houses. They are workers.【建造】",
    "options": [
      "fix",
      "clean",
      "washes",
      "build"
    ],
    "answer": 3,
    "cn": "你叔叔和他的朋友們做什麼？ — 他們蓋房子，他們是工人。",
    "vocabIndex": 50
  },
  {
    "q": "Q: Does Amy take a ______ every night? — A: No, she doesn't. She takes a shower.【洗澡；浴缸】",
    "options": [
      "couch",
      "bath",
      "camera",
      "kitchen"
    ],
    "answer": 1,
    "cn": "艾美每天晚上泡澡嗎？ — 不，她沒有。她淋浴。",
    "vocabIndex": 51
  },
  {
    "q": "Q: Where does Tina live? — A: She lives on Park ______.【街道】",
    "options": [
      "television",
      "umbrella",
      "bath",
      "street"
    ],
    "answer": 3,
    "cn": "蒂娜住在哪裡？ — 她住在公園街。",
    "vocabIndex": 52
  },
  {
    "q": "Q: Where do your grandparents live? — A: They live on Zhongshan ______, near the station.【道路；路】",
    "options": [
      "telephone",
      "desk",
      "road",
      "pipe"
    ],
    "answer": 2,
    "cn": "你的爺爺奶奶住在哪裡？ — 他們住在中山路，車站附近。",
    "vocabIndex": 53
  }
];

const LOOKUP = {
  "umbrella": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "雨傘"
  },
  "fan": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "粉絲；狂熱愛好者"
  },
  "bed": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "床"
  },
  "sofa": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "沙發"
  },
  "couch": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "沙發"
  },
  "chair": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "椅子"
  },
  "desk": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "書桌"
  },
  "table": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "桌子"
  },
  "drawer": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "抽屜"
  },
  "lamp": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "檯燈"
  },
  "blanket": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "毯子"
  },
  "towels": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "毛巾"
  },
  "keys": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "鑰匙"
  },
  "basket": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "籃子"
  },
  "pot": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "鍋子；壺"
  },
  "candles": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "蠟燭"
  },
  "mat": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "墊子"
  },
  "bench": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "長椅"
  },
  "light": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "燈；燈光"
  },
  "television": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "電視"
  },
  "computer": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "電腦"
  },
  "telephone": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "電話"
  },
  "radio": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "收音機"
  },
  "camera": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "照相機"
  },
  "refrigerator": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "冰箱"
  },
  "machine": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "機器"
  },
  "tapes": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "錄音帶；膠帶"
  },
  "videos": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "影片；錄影帶"
  },
  "pipe": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "管子；水管"
  },
  "house": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "房子"
  },
  "apartment": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "公寓"
  },
  "door": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "門"
  },
  "windows": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "窗戶"
  },
  "wall": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "牆壁"
  },
  "floor": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "地板"
  },
  "gate": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "大門"
  },
  "stairs": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "樓梯"
  },
  "home": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "家"
  },
  "room": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "房間"
  },
  "bedroom": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "臥室"
  },
  "bathroom": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "浴室"
  },
  "kitchen": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "廚房"
  },
  "dining room": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "飯廳"
  },
  "living room": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "客廳"
  },
  "balcony": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "陽台"
  },
  "garden": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "花園"
  },
  "yard": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "庭院；院子"
  },
  "clean": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "打掃"
  },
  "washes": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "清洗"
  },
  "fix": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "修理"
  },
  "build": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "建造"
  },
  "bath": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "洗澡；浴缸"
  },
  "street": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "街道"
  },
  "road": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "道路；路"
  }
};

const EXTRA_GLOSSES = {};
