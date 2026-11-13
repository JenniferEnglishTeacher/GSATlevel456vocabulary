// Unit 33 Quiz Data: Other Nouns (Part 1) 其他名詞（上）（第34上區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U33 - Other Nouns (Part 1)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "box",
    "pos": "n.",
    "cn_def": "盒子",
    "en_def": "a container with flat sides, often made of paper or wood",
    "sentence": "Q: What's this, Mom? — A: It's a {{BLANK}}. Your birthday present is in it.",
    "cn": "媽，這是什麼？ — 這是一個盒子，你的生日禮物在裡面。"
  },
  {
    "word": "case",
    "pos": "n.",
    "cn_def": "盒；箱；情形",
    "en_def": "a box or container for keeping something in",
    "sentence": "Q: What's that on your desk? — A: It's my pencil {{BLANK}}. I keep my pens in it.",
    "cn": "你書桌上那是什麼？ — 那是我的鉛筆盒，我把筆放在裡面。"
  },
  {
    "word": "can",
    "pos": "n.",
    "cn_def": "罐；罐頭",
    "en_def": "a metal container for food or drinks",
    "sentence": "Q: What's that in your hand? — A: It's a {{BLANK}} of Coke. It's for my brother.",
    "cn": "你手上那是什麼？ — 那是一罐可樂，是給我弟弟的。"
  },
  {
    "word": "bell",
    "pos": "n.",
    "cn_def": "鈴；鐘",
    "en_def": "a metal thing that makes a ringing sound",
    "sentence": "Q: What's that sound? — A: It's the school {{BLANK}}. Class begins now.",
    "cn": "那是什麼聲音？ — 那是學校的鐘聲，現在要上課了。"
  },
  {
    "word": "robot",
    "pos": "n.",
    "cn_def": "機器人",
    "en_def": "a machine that can move and do some work like a person",
    "sentence": "Q: What's this? — A: It's a {{BLANK}}. It cleans the floor for us.",
    "cn": "這是什麼？ — 這是一個機器人，它幫我們掃地。"
  },
  {
    "word": "tool",
    "pos": "n.",
    "cn_def": "工具",
    "en_def": "a thing you hold in your hand to make or fix something",
    "sentence": "Q: What's that in Dad's hand? — A: It's a {{BLANK}}. He fixes his bike with it.",
    "cn": "爸爸手上那是什麼？ — 那是一個工具，他用它修腳踏車。"
  },
  {
    "word": "nail (nails)",
    "pos": "n.",
    "cn_def": "釘子",
    "en_def": "a thin, sharp piece of metal that you hit into wood",
    "sentence": "Q: What are these? — A: They are {{BLANK}}. Dad needs them to fix the chair.",
    "cn": "這些是什麼？ — 這些是釘子，爸爸需要它們來修椅子。"
  },
  {
    "word": "pin (pins)",
    "pos": "n.",
    "cn_def": "大頭針；別針",
    "en_def": "a very thin, sharp piece of metal for holding paper or cloth together",
    "sentence": "Q: What are those on the wall? — A: They are {{BLANK}}. They hold the pictures on the wall.",
    "cn": "牆上那些是什麼？ — 那些是大頭針，它們把圖片固定在牆上。"
  },
  {
    "word": "rope",
    "pos": "n.",
    "cn_def": "繩子",
    "en_def": "a very thick, strong string",
    "sentence": "Q: What's this? — A: It's a jump {{BLANK}}. We use it in PE class.",
    "cn": "這是什麼？ — 這是一條跳繩，我們在體育課用它。"
  },
  {
    "word": "string",
    "pos": "n.",
    "cn_def": "線；細繩",
    "en_def": "a thin line for tying things",
    "sentence": "Q: What's that? — A: It's a {{BLANK}}. I tie the box with it.",
    "cn": "那是什麼？ — 那是一條線，我用它綁盒子。"
  },
  {
    "word": "swing",
    "pos": "n.",
    "cn_def": "鞦韆",
    "en_def": "a seat that hangs from two ropes and moves forward and back",
    "sentence": "Q: What's that in the park? — A: It's a {{BLANK}}. The kids love to play on it.",
    "cn": "公園裡那是什麼？ — 那是一個鞦韆，小孩們很愛在上面玩。"
  },
  {
    "word": "castle",
    "pos": "n.",
    "cn_def": "城堡",
    "en_def": "a big, strong old building where a king or queen lived",
    "sentence": "Q: What's that on the hill? — A: It's an old {{BLANK}}. A king lived there.",
    "cn": "山丘上那是什麼？ — 那是一座古老的城堡，以前有一位國王住在那裡。"
  },
  {
    "word": "rose (roses)",
    "pos": "n.",
    "cn_def": "玫瑰",
    "en_def": "a flower with a sweet smell and sharp points on its stem",
    "sentence": "Q: What are those red ones in the garden? — A: They are {{BLANK}}. They smell sweet.",
    "cn": "花園裡那些紅色的是什麼？ — 它們是玫瑰，聞起來很香。"
  },
  {
    "word": "cellphone",
    "pos": "n.",
    "cn_def": "手機",
    "en_def": "a small phone that you can carry with you",
    "sentence": "Q: Does your brother have a phone? — A: Yes, he does. He has a new {{BLANK}}.",
    "cn": "你哥哥有電話嗎？ — 有，他有。他有一支新手機。"
  },
  {
    "word": "screen",
    "pos": "n.",
    "cn_def": "螢幕",
    "en_def": "the flat part of a TV, computer, or phone where you see pictures",
    "sentence": "Q: What does your mom need? — A: She needs a new {{BLANK}} for her phone. The old one is broken.",
    "cn": "你媽媽需要什麼？ — 她的手機需要一個新螢幕，舊的壞了。"
  },
  {
    "word": "Internet (Net)",
    "pos": "n.",
    "cn_def": "網路",
    "en_def": "the system that joins computers around the world",
    "sentence": "Q: Where do your classmates find the answers? — A: They find them on the {{BLANK}}.",
    "cn": "你的同學們在哪裡找到答案？ — 他們在網路上找到答案。",
    "alts": [
      "Net"
    ]
  },
  {
    "word": "e-mail",
    "pos": "n.",
    "cn_def": "電子郵件",
    "en_def": "a message sent from one computer or phone to another",
    "sentence": "Q: What does Tom write to his friend? — A: He writes an {{BLANK}} to him every week.",
    "cn": "湯姆寫什麼給他的朋友？ — 他每週寫一封電子郵件給他。"
  },
  {
    "word": "file",
    "pos": "n.",
    "cn_def": "檔案",
    "en_def": "a set of information kept on a computer",
    "sentence": "Q: What do you need for your report? — A: I need this {{BLANK}} on my computer.",
    "cn": "你的報告需要什麼？ — 我需要電腦裡的這個檔案。"
  },
  {
    "word": "mail",
    "pos": "n.",
    "cn_def": "信件；郵件",
    "en_def": "letters and packages that are sent to people",
    "sentence": "Q: What does the man from the post office bring? — A: He brings the {{BLANK}} to our house every day.",
    "cn": "郵局來的那個人帶來什麼？ — 他每天把信件送到我們家。"
  },
  {
    "word": "newspaper",
    "pos": "n.",
    "cn_def": "報紙",
    "en_def": "large pieces of paper with news printed on them",
    "sentence": "Q: What does Grandpa read every morning? — A: He reads the {{BLANK}}.",
    "cn": "爺爺每天早上讀什麼？ — 他讀報紙。"
  },
  {
    "word": "news",
    "pos": "n.",
    "cn_def": "新聞；消息",
    "en_def": "new information about things that have just happened",
    "sentence": "Q: What do your parents watch after dinner? — A: They watch the {{BLANK}} on TV.",
    "cn": "你爸媽晚餐後看什麼？ — 他們看電視新聞。"
  },
  {
    "word": "photo",
    "pos": "n.",
    "cn_def": "照片",
    "en_def": "a picture you take with a camera",
    "sentence": "Q: What do you have on your desk? — A: I have a {{BLANK}} of my family.",
    "cn": "你書桌上有什麼？ — 我有一張全家福照片。"
  },
  {
    "word": "note",
    "pos": "n.",
    "cn_def": "字條；筆記",
    "en_def": "a short message written on paper; words you write to help you remember",
    "sentence": "Q: What does Lisa have in her hand? — A: She has a {{BLANK}} from her friend. It says, \"Happy birthday!\"",
    "cn": "麗莎手上有什麼？ — 她有一張朋友給的字條，上面寫著「生日快樂！」"
  },
  {
    "word": "gift",
    "pos": "n.",
    "cn_def": "禮物",
    "en_def": "something you give to someone; a present",
    "sentence": "Q: What does Amy have for her mom? — A: She has a {{BLANK}} for her. It's a pink bag.",
    "cn": "艾美有什麼要給她媽媽？ — 她有一份禮物要給她，是一個粉紅色的包包。"
  },
  {
    "word": "ticket (tickets)",
    "pos": "n.",
    "cn_def": "票",
    "en_def": "a piece of paper that lets you go into a place or ride a train",
    "sentence": "Q: What do we need for the movie? — A: We need two {{BLANK}}. They are 250 dollars each.",
    "cn": "我們看電影需要什麼？ — 我們需要兩張票，每張 250 元。"
  },
  {
    "word": "metro",
    "pos": "n.",
    "cn_def": "捷運",
    "en_def": "a fast train system in a city, often under the ground",
    "sentence": "Q: How do you and your family go to the zoo? — A: We take the {{BLANK}}. It's fast.",
    "cn": "你和家人怎麼去動物園？ — 我們搭捷運，很快。"
  },
  {
    "word": "set",
    "pos": "n.",
    "cn_def": "一套；一組",
    "en_def": "a group of things that belong together",
    "sentence": "Q: What do you want for your birthday? — A: I want a {{BLANK}} of color pens.",
    "cn": "你生日想要什麼？ — 我想要一組彩色筆。"
  },
  {
    "word": "item (items)",
    "pos": "n.",
    "cn_def": "項目；品項",
    "en_def": "one thing on a list or in a group",
    "sentence": "Q: What do you need to buy at the store? — A: I need to buy ten {{BLANK}} on this list.",
    "cn": "你需要在商店買什麼？ — 我需要買這張清單上的十個品項。"
  },
  {
    "word": "thing (things)",
    "pos": "n.",
    "cn_def": "東西；事情",
    "en_def": "an object; something that happens or that you do",
    "sentence": "Q: What do you have in your bag? — A: I have many {{BLANK}} in it: books, pens, and a ruler.",
    "cn": "你的包包裡有什麼？ — 裡面有很多東西：書、筆和一把尺。"
  },
  {
    "word": "honey",
    "pos": "n.",
    "cn_def": "蜂蜜",
    "en_def": "a sweet, thick food made by bees",
    "sentence": "Q: Is there any {{BLANK}} for my tea? — A: Yes, there is some in the bottle.",
    "cn": "有蜂蜜可以加在我的茶裡嗎？ — 有，瓶子裡有一些。"
  },
  {
    "word": "gas",
    "pos": "n.",
    "cn_def": "瓦斯；汽油",
    "en_def": "something like air that burns for cooking; the liquid that makes cars go",
    "sentence": "Q: Is there any {{BLANK}} for cooking? — A: No, there isn't any. Dad has to buy some.",
    "cn": "有瓦斯可以煮飯嗎？ — 沒有，一點都沒有，爸爸必須去買一些。"
  },
  {
    "word": "power",
    "pos": "n.",
    "cn_def": "電力；力量",
    "en_def": "electricity; the strength to do something",
    "sentence": "Q: Is there any light in the house? — A: No, there isn't. The {{BLANK}} is out.",
    "cn": "屋子裡有燈光嗎？ — 沒有，停電了。"
  },
  {
    "word": "garbage",
    "pos": "n.",
    "cn_def": "垃圾",
    "en_def": "things that you throw away",
    "sentence": "Q: Is there any {{BLANK}} in the kitchen? — A: Yes, there is a lot. Please take it out.",
    "cn": "廚房裡有垃圾嗎？ — 有，有很多，請把它拿出去倒。"
  },
  {
    "word": "trash",
    "pos": "n.",
    "cn_def": "垃圾",
    "en_def": "things that you throw away",
    "sentence": "Q: Is there any {{BLANK}} on the floor? — A: No, there isn't any. The room is clean.",
    "cn": "地板上有垃圾嗎？ — 沒有，一點都沒有，房間很乾淨。"
  },
  {
    "word": "mud",
    "pos": "n.",
    "cn_def": "泥巴",
    "en_def": "wet, soft ground",
    "sentence": "Q: Is there any {{BLANK}} on your shoes? — A: Yes, there is. I played in the rain.",
    "cn": "你的鞋子上有泥巴嗎？ — 有，我在雨中玩了。"
  },
  {
    "word": "grass",
    "pos": "n.",
    "cn_def": "草",
    "en_def": "the short green plant that covers the ground in parks and fields",
    "sentence": "Q: Is there any food for the sheep? — A: Yes, there is a lot of {{BLANK}} on the hill.",
    "cn": "有給綿羊吃的食物嗎？ — 有，山丘上有很多草。"
  },
  {
    "word": "space",
    "pos": "n.",
    "cn_def": "空間",
    "en_def": "an empty place that you can use",
    "sentence": "Q: Is there any {{BLANK}} for a new desk? — A: No, there isn't. My room is too small.",
    "cn": "有空間放新書桌嗎？ — 沒有，我的房間太小了。"
  },
  {
    "word": "noise",
    "pos": "n.",
    "cn_def": "噪音；聲響",
    "en_def": "a loud sound that is not nice to hear",
    "sentence": "Q: Is there any {{BLANK}} outside? — A: Yes, there is. The kids are playing ball.",
    "cn": "外面有噪音嗎？ — 有，小孩們在玩球。"
  },
  {
    "word": "fire",
    "pos": "n.",
    "cn_def": "火",
    "en_def": "the hot, bright thing you see when something burns",
    "sentence": "Q: What is there on the beach? — A: There is a big {{BLANK}}. We are having a barbecue.",
    "cn": "海灘上有什麼？ — 有一大堆火，我們正在烤肉。"
  },
  {
    "word": "heat",
    "pos": "n.",
    "cn_def": "熱；熱度",
    "en_def": "the feeling of something hot",
    "sentence": "Q: Why is it so hot today? — A: There is a lot of {{BLANK}} from the sun.",
    "cn": "今天為什麼這麼熱？ — 太陽的熱度很強。"
  },
  {
    "word": "ground",
    "pos": "n.",
    "cn_def": "地面",
    "en_def": "the land under your feet",
    "sentence": "Q: What is there on the playground? — A: There is a ball on the {{BLANK}}.",
    "cn": "操場上有什麼？ — 地上有一顆球。"
  },
  {
    "word": "corner",
    "pos": "n.",
    "cn_def": "角落；轉角",
    "en_def": "the place where two walls, lines, or streets meet",
    "sentence": "Q: Is there a store near here? — A: Yes, there is. There is one on the {{BLANK}}.",
    "cn": "這附近有商店嗎？ — 有，轉角就有一家。"
  },
  {
    "word": "bottom",
    "pos": "n.",
    "cn_def": "底部",
    "en_def": "the lowest part of something",
    "sentence": "Q: Is there any water in the bottle? — A: Yes, there is a little at the {{BLANK}}.",
    "cn": "瓶子裡有水嗎？ — 有，底部有一點點。"
  },
  {
    "word": "center",
    "pos": "n.",
    "cn_def": "中心",
    "en_def": "the middle of something",
    "sentence": "Q: Is there a park in the city? — A: Yes, there is. There is a big park in the {{BLANK}} of the city.",
    "cn": "城市裡有公園嗎？ — 有，市中心有一座大公園。"
  },
  {
    "word": "side (sides)",
    "pos": "n.",
    "cn_def": "邊；面；旁邊",
    "en_def": "the left or right part of something; one of its surfaces",
    "sentence": "Q: Are there any stores on this road? — A: Yes, there are. There are stores on both {{BLANK}} of the road.",
    "cn": "這條路上有商店嗎？ — 有，路的兩邊都有商店。"
  },
  {
    "word": "seat",
    "pos": "n.",
    "cn_def": "座位",
    "en_def": "something that you sit on",
    "sentence": "Q: Can I sit with you on the bus? — A: Sure. There is a free {{BLANK}} next to me.",
    "cn": "我可以在公車上跟你坐嗎？ — 當然，我旁邊有一個空位。"
  },
  {
    "word": "blank (blanks)",
    "pos": "n.",
    "cn_def": "空格",
    "en_def": "an empty space where you write an answer",
    "sentence": "Q: How many questions are there on the test? — A: There are ten {{BLANK}}. Write a word in each one.",
    "cn": "考試有幾題？ — 有十個空格，每個空格寫一個字。"
  },
  {
    "word": "ghost",
    "pos": "n.",
    "cn_def": "鬼",
    "en_def": "a dead person that some people believe they can see",
    "sentence": "Q: Why are you scared? — A: My brother says there is a {{BLANK}} in the old house.",
    "cn": "你為什麼害怕？ — 我哥哥說那間老房子裡有鬼。"
  },
  {
    "word": "tree",
    "pos": "n.",
    "cn_def": "樹",
    "en_def": "a tall plant with branches and leaves",
    "sentence": "Q: What is there in your yard? — A: There is a big {{BLANK}}. Birds sing in it.",
    "cn": "你家院子裡有什麼？ — 有一棵大樹，鳥在上面唱歌。"
  },
  {
    "word": "root (roots)",
    "pos": "n.",
    "cn_def": "根",
    "en_def": "the part of a plant that grows under the ground",
    "sentence": "Q: Why is that old plant so strong? — A: There are long {{BLANK}} under it.",
    "cn": "那棵老植物為什麼這麼強壯？ — 它下面有很長的根。"
  },
  {
    "word": "seed (seeds)",
    "pos": "n.",
    "cn_def": "種子",
    "en_def": "the small hard thing that a new plant grows from",
    "sentence": "Q: What is there in the apple? — A: There are some {{BLANK}} in it.",
    "cn": "蘋果裡有什麼？ — 裡面有一些種子。"
  },
  {
    "word": "flower (flowers)",
    "pos": "n.",
    "cn_def": "花",
    "en_def": "the colorful, pretty part of a plant",
    "sentence": "Q: What is there in the garden? — A: There are many {{BLANK}}. They are very beautiful.",
    "cn": "花園裡有什麼？ — 有很多花，它們很美。"
  },
  {
    "word": "rock (rocks)",
    "pos": "n.",
    "cn_def": "岩石",
    "en_def": "a big, hard stone",
    "sentence": "Q: What is there in the river? — A: There are many big {{BLANK}}. Don't swim there.",
    "cn": "河裡有什麼？ — 有很多大岩石，不要在那裡游泳。"
  },
  {
    "word": "planet (planets)",
    "pos": "n.",
    "cn_def": "行星",
    "en_def": "a very big round thing in space that moves around the sun",
    "sentence": "Q: Are there other worlds around the sun? — A: Yes, there are. There are eight {{BLANK}} around the sun.",
    "cn": "太陽周圍還有其他世界嗎？ — 有，太陽周圍有八顆行星。"
  }
];

const MCQS = [
  {
    "q": "I put all my old toys in a big paper ______ and closed the top. Then I carried it to the basement.",
    "options": [
      "bell",
      "rope",
      "box",
      "robot"
    ],
    "answer": 2,
    "cn": "媽，這是什麼？ — 這是一個盒子，你的生日禮物在裡面。",
    "vocabIndex": 0
  },
  {
    "q": "I keep my glasses in a hard ______ so that they will not break in my bag.",
    "options": [
      "bell",
      "rope",
      "swing",
      "case"
    ],
    "answer": 3,
    "cn": "你書桌上那是什麼？ — 那是我的鉛筆盒，我把筆放在裡面。",
    "vocabIndex": 1
  },
  {
    "q": "I bought a ______ of Coke from the machine. I opened the metal top and drank it all.",
    "options": [
      "can",
      "bell",
      "pin",
      "tool"
    ],
    "answer": 0,
    "cn": "你手上那是什麼？ — 那是一罐可樂，是給我弟弟的。",
    "vocabIndex": 2
  },
  {
    "q": "When the ______ rings, the class is over. Students can hear it all over the school.",
    "options": [
      "rope",
      "bell",
      "box",
      "tool"
    ],
    "answer": 1,
    "cn": "那是什麼聲音？ — 那是學校的鐘聲，現在要上課了。",
    "vocabIndex": 3
  },
  {
    "q": "This ______ can clean the floor by itself. It is a smart machine that moves around the house.",
    "options": [
      "bell",
      "rope",
      "robot",
      "castle"
    ],
    "answer": 2,
    "cn": "這是什麼？ — 這是一個機器人，它幫我們掃地。",
    "vocabIndex": 4
  },
  {
    "q": "A hammer is a useful ______. Dad uses it to fix chairs and tables.",
    "options": [
      "bell",
      "swing",
      "castle",
      "tool"
    ],
    "answer": 3,
    "cn": "爸爸手上那是什麼？ — 那是一個工具，他用它修腳踏車。",
    "vocabIndex": 5
  },
  {
    "q": "Dad hit two ______ into the wall with a hammer. Then he hung the picture on them.",
    "options": [
      "ropes",
      "nails",
      "bells",
      "swings"
    ],
    "answer": 1,
    "cn": "這些是什麼？ — 這些是釘子，爸爸需要它們來修椅子。",
    "vocabIndex": 6
  },
  {
    "q": "The teacher used four ______ to put my picture on the board. Be careful, because they are sharp.",
    "options": [
      "pins",
      "ropes",
      "bells",
      "robots"
    ],
    "answer": 0,
    "cn": "牆上那些是什麼？ — 那些是大頭針，它們把圖片固定在牆上。",
    "vocabIndex": 7
  },
  {
    "q": "The two teams pulled the long, thick ______ as hard as they could. Our team won the game.",
    "options": [
      "pin",
      "bell",
      "rope",
      "screen"
    ],
    "answer": 2,
    "cn": "這是什麼？ — 這是一條跳繩，我們在體育課用它。",
    "vocabIndex": 8
  },
  {
    "q": "The boy held the ______ of his kite and ran. The kite flew higher and higher.",
    "options": [
      "bell",
      "string",
      "box",
      "nail"
    ],
    "answer": 1,
    "cn": "那是什麼？ — 那是一條線，我用它綁盒子。",
    "vocabIndex": 9
  },
  {
    "q": "The little girl sat on the ______ in the playground. Her father pushed her forward and back.",
    "options": [
      "castle",
      "bell",
      "tool",
      "swing"
    ],
    "answer": 3,
    "cn": "公園裡那是什麼？ — 那是一個鞦韆，小孩們很愛在上面玩。",
    "vocabIndex": 10
  },
  {
    "q": "The king and queen lived in a big stone ______ on the hill. It had high walls and a hundred rooms.",
    "options": [
      "castle",
      "swing",
      "robot",
      "box"
    ],
    "answer": 0,
    "cn": "山丘上那是什麼？ — 那是一座古老的城堡，以前有一位國王住在那裡。",
    "vocabIndex": 11
  },
  {
    "q": "He gave his wife twelve red ______ on Valentine's Day. These flowers smell very sweet.",
    "options": [
      "ropes",
      "roses",
      "bells",
      "tools"
    ],
    "answer": 1,
    "cn": "花園裡那些紅色的是什麼？ — 它們是玫瑰，聞起來很香。",
    "vocabIndex": 12
  },
  {
    "q": "I called you on your ______, but you didn't answer. Did you leave it at home?",
    "options": [
      "newspaper",
      "screen",
      "ticket",
      "cellphone"
    ],
    "answer": 3,
    "cn": "你哥哥有電話嗎？ — 有，他有。他有一支新手機。",
    "vocabIndex": 13
  },
  {
    "q": "My phone fell on the floor, and the ______ broke. Now I can't see the pictures clearly.",
    "options": [
      "bell",
      "rope",
      "screen",
      "ticket"
    ],
    "answer": 2,
    "cn": "你媽媽需要什麼？ — 她的手機需要一個新螢幕，舊的壞了。",
    "vocabIndex": 14
  },
  {
    "q": "You can find a lot of information on the ______. Just use your computer or phone to go online.",
    "options": [
      "Internet",
      "swing",
      "rope",
      "ground"
    ],
    "answer": 0,
    "cn": "你的同學們在哪裡找到答案？ — 他們在網路上找到答案。",
    "vocabIndex": 15
  },
  {
    "q": "I sent you an ______ from my computer this morning. Did you read it on your phone?",
    "options": [
      "item",
      "error",
      "e-mail",
      "idea"
    ],
    "answer": 2,
    "cn": "湯姆寫什麼給他的朋友？ — 他每週寫一封電子郵件給他。",
    "vocabIndex": 16
  },
  {
    "q": "I saved my report as a ______ on the computer. I can open it and change it later.",
    "options": [
      "file",
      "bell",
      "rope",
      "seed"
    ],
    "answer": 0,
    "cn": "你的報告需要什麼？ — 我需要電腦裡的這個檔案。",
    "vocabIndex": 17
  },
  {
    "q": "The mailman brings the ______ every morning. Today we got two letters and a package.",
    "options": [
      "noise",
      "mail",
      "honey",
      "mud"
    ],
    "answer": 1,
    "cn": "郵局來的那個人帶來什麼？ — 他每天把信件送到我們家。",
    "vocabIndex": 18
  },
  {
    "q": "Grandpa reads the ______ every morning. He likes to know what happened in the world yesterday.",
    "options": [
      "ticket",
      "photo",
      "screen",
      "newspaper"
    ],
    "answer": 3,
    "cn": "爺爺每天早上讀什麼？ — 他讀報紙。",
    "vocabIndex": 19
  },
  {
    "q": "I have good ______! Our team won the game, and we are going to Japan next month.",
    "options": [
      "noise",
      "trash",
      "news",
      "mud"
    ],
    "answer": 2,
    "cn": "你爸媽晚餐後看什麼？ — 他們看電視新聞。",
    "vocabIndex": 20
  },
  {
    "q": "I took a ______ of my family with my camera at the beach. Everyone is smiling in it.",
    "options": [
      "photo",
      "ticket",
      "note",
      "file"
    ],
    "answer": 0,
    "cn": "你書桌上有什麼？ — 我有一張全家福照片。",
    "vocabIndex": 21
  },
  {
    "q": "Mom left a ______ on the table. It said, \"Dinner is in the fridge. I will be home at nine.\"",
    "options": [
      "photo",
      "ticket",
      "gift",
      "note"
    ],
    "answer": 3,
    "cn": "麗莎手上有什麼？ — 她有一張朋友給的字條，上面寫著「生日快樂！」",
    "vocabIndex": 22
  },
  {
    "q": "Lisa gave me a birthday ______. It was a beautiful watch in a small box.",
    "options": [
      "note",
      "gift",
      "ticket",
      "file"
    ],
    "answer": 1,
    "cn": "艾美有什麼要給她媽媽？ — 她有一份禮物要給她，是一個粉紅色的包包。",
    "vocabIndex": 23
  },
  {
    "q": "We bought two ______ for the seven o'clock movie. They were 300 dollars each.",
    "options": [
      "notes",
      "photos",
      "gifts",
      "tickets"
    ],
    "answer": 3,
    "cn": "我們看電影需要什麼？ — 我們需要兩張票，每張 250 元。",
    "vocabIndex": 24
  },
  {
    "q": "Many people in Taipei take the ______ to work. The trains run under the city.",
    "options": [
      "swing",
      "castle",
      "metro",
      "planet"
    ],
    "answer": 2,
    "cn": "你和家人怎麼去動物園？ — 我們搭捷運，很快。",
    "vocabIndex": 25
  },
  {
    "q": "I bought a ______ of twelve color pencils. They come in a nice metal box.",
    "options": [
      "seat",
      "set",
      "side",
      "space"
    ],
    "answer": 1,
    "cn": "你生日想要什麼？ — 我想要一組彩色筆。",
    "vocabIndex": 26
  },
  {
    "q": "There are ten ______ on my shopping list, like milk, eggs, and bread.",
    "options": [
      "items",
      "noises",
      "corners",
      "seats"
    ],
    "answer": 0,
    "cn": "你需要在商店買什麼？ — 我需要買這張清單上的十個品項。",
    "vocabIndex": 27
  },
  {
    "q": "I have many ______ to do today. I need to clean my room, do my homework, and walk the dog.",
    "options": [
      "seats",
      "things",
      "corners",
      "roots"
    ],
    "answer": 1,
    "cn": "你的包包裡有什麼？ — 裡面有很多東西：書、筆和一把尺。",
    "vocabIndex": 28
  },
  {
    "q": "Bees make ______. It is sweet and yellow, and I like to put it on my toast.",
    "options": [
      "gas",
      "mud",
      "honey",
      "trash"
    ],
    "answer": 2,
    "cn": "有蜂蜜可以加在我的茶裡嗎？ — 有，瓶子裡有一些。",
    "vocabIndex": 29
  },
  {
    "q": "The car is almost out of ______. We need to stop at a station and fill it up.",
    "options": [
      "honey",
      "mud",
      "grass",
      "gas"
    ],
    "answer": 3,
    "cn": "有瓦斯可以煮飯嗎？ — 沒有，一點都沒有，爸爸必須去買一些。",
    "vocabIndex": 30
  },
  {
    "q": "The ______ went out during the typhoon. We had no lights, TV, or air conditioner all night.",
    "options": [
      "power",
      "honey",
      "mud",
      "grass"
    ],
    "answer": 0,
    "cn": "屋子裡有燈光嗎？ — 沒有，停電了。",
    "vocabIndex": 31
  },
  {
    "q": "Please take out the ______. The kitchen bag is full and it smells bad.",
    "options": [
      "honey",
      "space",
      "power",
      "garbage"
    ],
    "answer": 3,
    "cn": "廚房裡有垃圾嗎？ — 有，有很多，請把它拿出去倒。",
    "vocabIndex": 32
  },
  {
    "q": "Don't throw your ______ on the ground. Put it in the can over there.",
    "options": [
      "honey",
      "trash",
      "heat",
      "space"
    ],
    "answer": 1,
    "cn": "地板上有垃圾嗎？ — 沒有，一點都沒有，房間很乾淨。",
    "vocabIndex": 33
  },
  {
    "q": "It rained all night, so the field is full of ______. My shoes are brown, wet, and dirty now.",
    "options": [
      "honey",
      "fire",
      "mud",
      "heat"
    ],
    "answer": 2,
    "cn": "你的鞋子上有泥巴嗎？ — 有，我在雨中玩了。",
    "vocabIndex": 34
  },
  {
    "q": "Cows and sheep eat ______. The park is covered with this green plant.",
    "options": [
      "grass",
      "mud",
      "honey",
      "gas"
    ],
    "answer": 0,
    "cn": "有給綿羊吃的食物嗎？ — 有，山丘上有很多草。",
    "vocabIndex": 35
  },
  {
    "q": "This desk takes up too much ______. My room is so small that I can't put a bed in it.",
    "options": [
      "noise",
      "space",
      "heat",
      "honey"
    ],
    "answer": 1,
    "cn": "有空間放新書桌嗎？ — 沒有，我的房間太小了。",
    "vocabIndex": 36
  },
  {
    "q": "Please don't make any ______. The baby is sleeping.",
    "options": [
      "noise",
      "space",
      "mud",
      "grass"
    ],
    "answer": 0,
    "cn": "外面有噪音嗎？ — 有，小孩們在玩球。",
    "vocabIndex": 37
  },
  {
    "q": "The house is on ______! Call 119 right now and get everyone out.",
    "options": [
      "mud",
      "grass",
      "fire",
      "honey"
    ],
    "answer": 2,
    "cn": "海灘上有什麼？ — 有一大堆火，我們正在烤肉。",
    "vocabIndex": 38
  },
  {
    "q": "I can't stand the ______ in summer. It is thirty-eight degrees today, and I am wet all over.",
    "options": [
      "noise",
      "mud",
      "space",
      "heat"
    ],
    "answer": 3,
    "cn": "今天為什麼這麼熱？ — 太陽的熱度很強。",
    "vocabIndex": 39
  },
  {
    "q": "The little boy fell on the ______ and hurt his knee. He was running too fast.",
    "options": [
      "ground",
      "planet",
      "honey",
      "noise"
    ],
    "answer": 0,
    "cn": "操場上有什麼？ — 地上有一顆球。",
    "vocabIndex": 40
  },
  {
    "q": "The convenience store is on the ______ of this street and Park Road. Turn left there.",
    "options": [
      "bottom",
      "seed",
      "ghost",
      "corner"
    ],
    "answer": 3,
    "cn": "這附近有商店嗎？ — 有，轉角就有一家。",
    "vocabIndex": 41
  },
  {
    "q": "The ship went down to the ______ of the sea. It is still there, under a lot of water.",
    "options": [
      "corner",
      "seat",
      "bottom",
      "blank"
    ],
    "answer": 2,
    "cn": "瓶子裡有水嗎？ — 有，底部有一點點。",
    "vocabIndex": 42
  },
  {
    "q": "The train station is in the ______ of the city. It is easy to get there from any side.",
    "options": [
      "bottom",
      "center",
      "seat",
      "blank"
    ],
    "answer": 1,
    "cn": "城市裡有公園嗎？ — 有，市中心有一座大公園。",
    "vocabIndex": 43
  },
  {
    "q": "A square has four ______. A triangle has only three.",
    "options": [
      "seats",
      "blanks",
      "ghosts",
      "sides"
    ],
    "answer": 3,
    "cn": "這條路上有商店嗎？ — 有，路的兩邊都有商店。",
    "vocabIndex": 44
  },
  {
    "q": "Excuse me, is this ______ taken? I would like to sit down.",
    "options": [
      "corner",
      "blank",
      "seat",
      "root"
    ],
    "answer": 2,
    "cn": "我可以在公車上跟你坐嗎？ — 當然，我旁邊有一個空位。",
    "vocabIndex": 45
  },
  {
    "q": "Please fill in the ______ with the right words. There are ten of these empty spaces on the test paper.",
    "options": [
      "blanks",
      "seats",
      "corners",
      "roots"
    ],
    "answer": 0,
    "cn": "考試有幾題？ — 有十個空格，每個空格寫一個字。",
    "vocabIndex": 46
  },
  {
    "q": "I don't believe in ______ stories. Dead people don't come back and walk around at night.",
    "options": [
      "seed",
      "ghost",
      "rock",
      "root"
    ],
    "answer": 1,
    "cn": "你為什麼害怕？ — 我哥哥說那間老房子裡有鬼。",
    "vocabIndex": 47
  },
  {
    "q": "The birds built a nest high in the ______. Its leaves turn yellow in fall.",
    "options": [
      "tree",
      "rock",
      "seed",
      "seat"
    ],
    "answer": 0,
    "cn": "你家院子裡有什麼？ — 有一棵大樹，鳥在上面唱歌。",
    "vocabIndex": 48
  },
  {
    "q": "The ______ of a plant grow down into the ground. They take in water for the plant.",
    "options": [
      "rocks",
      "roots",
      "seats",
      "corners"
    ],
    "answer": 1,
    "cn": "那棵老植物為什麼這麼強壯？ — 它下面有很長的根。",
    "vocabIndex": 49
  },
  {
    "q": "The farmer put the ______ in the ground in spring. Small green plants came out a week later.",
    "options": [
      "rocks",
      "ghosts",
      "seeds",
      "corners"
    ],
    "answer": 2,
    "cn": "蘋果裡有什麼？ — 裡面有一些種子。",
    "vocabIndex": 50
  },
  {
    "q": "He gave her a bunch of beautiful ______. They were red, pink, and yellow, and they smelled sweet.",
    "options": [
      "rocks",
      "roots",
      "seeds",
      "flowers"
    ],
    "answer": 3,
    "cn": "花園裡有什麼？ — 有很多花，它們很美。",
    "vocabIndex": 51
  },
  {
    "q": "Be careful when you swim here. There are big, hard ______ under the water.",
    "options": [
      "seeds",
      "flowers",
      "rocks",
      "ghosts"
    ],
    "answer": 2,
    "cn": "河裡有什麼？ — 有很多大岩石，不要在那裡游泳。",
    "vocabIndex": 52
  },
  {
    "q": "There are eight ______ going around the sun. The earth is the third one.",
    "options": [
      "rocks",
      "planets",
      "trees",
      "corners"
    ],
    "answer": 1,
    "cn": "太陽周圍還有其他世界嗎？ — 有，太陽周圍有八顆行星。",
    "vocabIndex": 53
  }
];

const LOOKUP = {
  "bell": {
    "pos": "n.",
    "en_def": "a metal thing that makes a ringing sound",
    "cn_def": "鈴；鐘"
  },
  "rope": {
    "pos": "n.",
    "en_def": "a very thick, strong string",
    "cn_def": "繩子"
  },
  "box": {
    "pos": "n.",
    "en_def": "a container with flat sides, often made of paper or wood",
    "cn_def": "盒子"
  },
  "robot": {
    "pos": "n.",
    "en_def": "a machine that can move and do some work like a person",
    "cn_def": "機器人"
  },
  "swing": {
    "pos": "n.",
    "en_def": "a seat that hangs from two ropes and moves forward and back",
    "cn_def": "鞦韆"
  },
  "case": {
    "pos": "n.",
    "en_def": "a box or container for keeping something in",
    "cn_def": "盒；箱；情形"
  },
  "can": {
    "pos": "aux.",
    "en_def": "to be able to do something",
    "cn_def": "能夠；會"
  },
  "pin": {
    "pos": "n.",
    "en_def": "a very thin, sharp piece of metal for holding paper or cloth together",
    "cn_def": "大頭針；別針"
  },
  "tool": {
    "pos": "n.",
    "en_def": "a thing you hold in your hand to make or fix something",
    "cn_def": "工具"
  },
  "castle": {
    "pos": "n.",
    "en_def": "a big, strong old building where a king or queen lived",
    "cn_def": "城堡"
  },
  "ropes": {
    "pos": "n.",
    "en_def": "a very thick, strong string",
    "cn_def": "繩子"
  },
  "nails": {
    "pos": "n.",
    "en_def": "the hard part at the end of a finger or toe",
    "cn_def": "指甲"
  },
  "bells": {
    "pos": "n.",
    "en_def": "a metal thing that makes a ringing sound",
    "cn_def": "鈴；鐘"
  },
  "swings": {
    "pos": "n.",
    "en_def": "a seat that hangs from two ropes and moves forward and back",
    "cn_def": "鞦韆"
  },
  "pins": {
    "pos": "n.",
    "en_def": "a very thin, sharp piece of metal for holding paper or cloth together",
    "cn_def": "大頭針；別針"
  },
  "robots": {
    "pos": "n.",
    "en_def": "a machine that can move and do some work like a person",
    "cn_def": "機器人"
  },
  "screen": {
    "pos": "n.",
    "en_def": "the flat part of a TV, computer, or phone where you see pictures",
    "cn_def": "螢幕"
  },
  "string": {
    "pos": "n.",
    "en_def": "a thin line for tying things",
    "cn_def": "線；細繩"
  },
  "nail": {
    "pos": "n.",
    "en_def": "the hard part at the end of a finger or toe",
    "cn_def": "指甲"
  },
  "roses": {
    "pos": "n.",
    "en_def": "a flower with a sweet smell and sharp points on its stem",
    "cn_def": "玫瑰"
  },
  "tools": {
    "pos": "n.",
    "en_def": "a thing you hold in your hand to make or fix something",
    "cn_def": "工具"
  },
  "newspaper": {
    "pos": "n.",
    "en_def": "large pieces of paper with news printed on them",
    "cn_def": "報紙"
  },
  "ticket": {
    "pos": "n.",
    "en_def": "a piece of paper that lets you go into a place or ride a train",
    "cn_def": "票"
  },
  "cellphone": {
    "pos": "n.",
    "en_def": "a small phone that you can carry with you",
    "cn_def": "手機"
  },
  "internet": {
    "pos": "n.",
    "en_def": "the system that joins computers around the world",
    "cn_def": "網路"
  },
  "ground": {
    "pos": "n.",
    "en_def": "the land under your feet",
    "cn_def": "地面"
  },
  "item": {
    "pos": "n.",
    "en_def": "one thing on a list or in a group",
    "cn_def": "項目；品項"
  },
  "error": {
    "pos": "n.",
    "en_def": "a mistake",
    "cn_def": "錯誤"
  },
  "e-mail": {
    "pos": "n.",
    "en_def": "a message sent from one computer or phone to another",
    "cn_def": "電子郵件"
  },
  "idea": {
    "pos": "n.",
    "en_def": "a thought or a plan in your mind",
    "cn_def": "主意；想法"
  },
  "file": {
    "pos": "n.",
    "en_def": "a set of information kept on a computer",
    "cn_def": "檔案"
  },
  "seed": {
    "pos": "n.",
    "en_def": "the small hard thing that a new plant grows from",
    "cn_def": "種子"
  },
  "noise": {
    "pos": "n.",
    "en_def": "a loud sound that is not nice to hear",
    "cn_def": "噪音；聲響"
  },
  "mail": {
    "pos": "n.",
    "en_def": "letters and packages that are sent to people",
    "cn_def": "信件；郵件"
  },
  "honey": {
    "pos": "n.",
    "en_def": "a sweet, thick food made by bees",
    "cn_def": "蜂蜜"
  },
  "mud": {
    "pos": "n.",
    "en_def": "wet, soft ground",
    "cn_def": "泥巴"
  },
  "photo": {
    "pos": "n.",
    "en_def": "a picture you take with a camera",
    "cn_def": "照片"
  },
  "trash": {
    "pos": "n.",
    "en_def": "things that you throw away",
    "cn_def": "垃圾"
  },
  "news": {
    "pos": "n.",
    "en_def": "new information about things that have just happened",
    "cn_def": "新聞；消息"
  },
  "note": {
    "pos": "n.",
    "en_def": "a short message written on paper; words you write to help you remember",
    "cn_def": "字條；筆記"
  },
  "gift": {
    "pos": "n.",
    "en_def": "something you give to someone; a present",
    "cn_def": "禮物"
  },
  "notes": {
    "pos": "adv.",
    "en_def": "a word that gives the opposite meaning",
    "cn_def": "不（否定）"
  },
  "photos": {
    "pos": "n.",
    "en_def": "a picture you take with a camera",
    "cn_def": "照片"
  },
  "gifts": {
    "pos": "n.",
    "en_def": "something you give to someone; a present",
    "cn_def": "禮物"
  },
  "tickets": {
    "pos": "n.",
    "en_def": "a piece of paper that lets you go into a place or ride a train",
    "cn_def": "票"
  },
  "metro": {
    "pos": "n.",
    "en_def": "a fast train system in a city, often under the ground",
    "cn_def": "捷運"
  },
  "planet": {
    "pos": "n.",
    "en_def": "a very big round thing in space that moves around the sun",
    "cn_def": "行星"
  },
  "seat": {
    "pos": "n.",
    "en_def": "something that you sit on",
    "cn_def": "座位"
  },
  "set": {
    "pos": "n.",
    "en_def": "a group of things that belong together",
    "cn_def": "一套；一組"
  },
  "side": {
    "pos": "n.",
    "en_def": "the left or right part of something; one of its surfaces",
    "cn_def": "邊；面；旁邊"
  },
  "space": {
    "pos": "n.",
    "en_def": "an empty place that you can use",
    "cn_def": "空間"
  },
  "items": {
    "pos": "n.",
    "en_def": "one thing on a list or in a group",
    "cn_def": "項目；品項"
  },
  "noises": {
    "pos": "n.",
    "en_def": "a loud sound that is not nice to hear",
    "cn_def": "噪音；聲響"
  },
  "corners": {
    "pos": "n.",
    "en_def": "the place where two walls, lines, or streets meet",
    "cn_def": "角落；轉角"
  },
  "seats": {
    "pos": "n.",
    "en_def": "something that you sit on",
    "cn_def": "座位"
  },
  "things": {
    "pos": "n.",
    "en_def": "an object; something that happens or that you do",
    "cn_def": "東西；事情"
  },
  "roots": {
    "pos": "n.",
    "en_def": "the part of a plant that grows under the ground",
    "cn_def": "根"
  },
  "gas": {
    "pos": "n.",
    "en_def": "something like air that burns for cooking; the liquid that makes cars go",
    "cn_def": "瓦斯；汽油"
  },
  "grass": {
    "pos": "n.",
    "en_def": "the short green plant that covers the ground in parks and fields",
    "cn_def": "草"
  },
  "power": {
    "pos": "n.",
    "en_def": "electricity; the strength to do something",
    "cn_def": "電力；力量"
  },
  "garbage": {
    "pos": "n.",
    "en_def": "things that you throw away",
    "cn_def": "垃圾"
  },
  "heat": {
    "pos": "n.",
    "en_def": "the feeling of something hot",
    "cn_def": "熱；熱度"
  },
  "fire": {
    "pos": "n.",
    "en_def": "the hot, bright thing you see when something burns",
    "cn_def": "火"
  },
  "bottom": {
    "pos": "n.",
    "en_def": "the lowest part of something",
    "cn_def": "底部"
  },
  "ghost": {
    "pos": "n.",
    "en_def": "a dead person that some people believe they can see",
    "cn_def": "鬼"
  },
  "corner": {
    "pos": "n.",
    "en_def": "the place where two walls, lines, or streets meet",
    "cn_def": "角落；轉角"
  },
  "blank": {
    "pos": "n.",
    "en_def": "an empty space where you write an answer",
    "cn_def": "空格"
  },
  "center": {
    "pos": "n.",
    "en_def": "the middle of something",
    "cn_def": "中心"
  },
  "blanks": {
    "pos": "n.",
    "en_def": "an empty space where you write an answer",
    "cn_def": "空格"
  },
  "ghosts": {
    "pos": "n.",
    "en_def": "a dead person that some people believe they can see",
    "cn_def": "鬼"
  },
  "sides": {
    "pos": "n.",
    "en_def": "the left or right part of something; one of its surfaces",
    "cn_def": "邊；面；旁邊"
  },
  "root": {
    "pos": "n.",
    "en_def": "the part of a plant that grows under the ground",
    "cn_def": "根"
  },
  "rock": {
    "pos": "n.",
    "en_def": "a big, hard stone",
    "cn_def": "岩石"
  },
  "tree": {
    "pos": "n.",
    "en_def": "a tall plant with branches and leaves",
    "cn_def": "樹"
  },
  "rocks": {
    "pos": "n.",
    "en_def": "a big, hard stone",
    "cn_def": "岩石"
  },
  "seeds": {
    "pos": "n.",
    "en_def": "the small hard thing that a new plant grows from",
    "cn_def": "種子"
  },
  "flowers": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "花"
  },
  "planets": {
    "pos": "n.",
    "en_def": "a very big round thing in space that moves around the sun",
    "cn_def": "行星"
  },
  "trees": {
    "pos": "n.",
    "en_def": "a tall plant with branches and leaves",
    "cn_def": "樹"
  }
};

const EXTRA_GLOSSES = {};
