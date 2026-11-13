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
    "q": "Q: What's this, Mom? — A: It's a ______. Your birthday present is in it.【盒子】",
    "options": [
      "box",
      "e-mail",
      "power",
      "heat"
    ],
    "answer": 0,
    "cn": "媽，這是什麼？ — 這是一個盒子，你的生日禮物在裡面。",
    "vocabIndex": 0
  },
  {
    "q": "Q: What's that on your desk? — A: It's my pencil ______. I keep my pens in it.【盒；箱；情形】",
    "options": [
      "trash",
      "set",
      "heat",
      "case"
    ],
    "answer": 3,
    "cn": "你書桌上那是什麼？ — 那是我的鉛筆盒，我把筆放在裡面。",
    "vocabIndex": 1
  },
  {
    "q": "Q: What's that in your hand? — A: It's a ______ of Coke. It's for my brother.【罐；罐頭】",
    "options": [
      "e-mail",
      "can",
      "metro",
      "tool"
    ],
    "answer": 1,
    "cn": "你手上那是什麼？ — 那是一罐可樂，是給我弟弟的。",
    "vocabIndex": 2
  },
  {
    "q": "Q: What's that sound? — A: It's the school ______. Class begins now.【鈴；鐘】",
    "options": [
      "ghost",
      "ground",
      "bell",
      "corner"
    ],
    "answer": 2,
    "cn": "那是什麼聲音？ — 那是學校的鐘聲，現在要上課了。",
    "vocabIndex": 3
  },
  {
    "q": "Q: What's this? — A: It's a ______. It cleans the floor for us.【機器人】",
    "options": [
      "robot",
      "corner",
      "seat",
      "cellphone"
    ],
    "answer": 0,
    "cn": "這是什麼？ — 這是一個機器人，它幫我們掃地。",
    "vocabIndex": 4
  },
  {
    "q": "Q: What's that in Dad's hand? — A: It's a ______. He fixes his bike with it.【工具】",
    "options": [
      "power",
      "noise",
      "screen",
      "tool"
    ],
    "answer": 3,
    "cn": "爸爸手上那是什麼？ — 那是一個工具，他用它修腳踏車。",
    "vocabIndex": 5
  },
  {
    "q": "Q: What are these? — A: They are ______. Dad needs them to fix the chair.【釘子】",
    "options": [
      "blanks",
      "things",
      "nails",
      "roots"
    ],
    "answer": 2,
    "cn": "這些是什麼？ — 這些是釘子，爸爸需要它們來修椅子。",
    "vocabIndex": 6
  },
  {
    "q": "Q: What are those on the wall? — A: They are ______. They hold the pictures on the wall.【大頭針；別針】",
    "options": [
      "rocks",
      "pins",
      "seeds",
      "roses"
    ],
    "answer": 1,
    "cn": "牆上那些是什麼？ — 那些是大頭針，它們把圖片固定在牆上。",
    "vocabIndex": 7
  },
  {
    "q": "Q: What's this? — A: It's a jump ______. We use it in PE class.【繩子】",
    "options": [
      "fire",
      "set",
      "box",
      "rope"
    ],
    "answer": 3,
    "cn": "這是什麼？ — 這是一條跳繩，我們在體育課用它。",
    "vocabIndex": 8
  },
  {
    "q": "Q: What's that? — A: It's a ______. I tie the box with it.【線；細繩】",
    "options": [
      "swing",
      "string",
      "things",
      "bottom"
    ],
    "answer": 1,
    "cn": "那是什麼？ — 那是一條線，我用它綁盒子。",
    "vocabIndex": 9
  },
  {
    "q": "Q: What's that in the park? — A: It's a ______. The kids love to play on it.【鞦韆】",
    "options": [
      "string",
      "items",
      "swing",
      "newspaper"
    ],
    "answer": 2,
    "cn": "公園裡那是什麼？ — 那是一個鞦韆，小孩們很愛在上面玩。",
    "vocabIndex": 10
  },
  {
    "q": "Q: What's that on the hill? — A: It's an old ______. A king lived there.【城堡】",
    "options": [
      "castle",
      "tool",
      "case",
      "cellphone"
    ],
    "answer": 0,
    "cn": "山丘上那是什麼？ — 那是一座古老的城堡，以前有一位國王住在那裡。",
    "vocabIndex": 11
  },
  {
    "q": "Q: What are those red ones in the garden? — A: They are ______. They smell sweet.【玫瑰】",
    "options": [
      "seeds",
      "blanks",
      "items",
      "roses"
    ],
    "answer": 3,
    "cn": "花園裡那些紅色的是什麼？ — 它們是玫瑰，聞起來很香。",
    "vocabIndex": 12
  },
  {
    "q": "Q: Does your brother have a phone? — A: Yes, he does. He has a new ______.【手機】",
    "options": [
      "note",
      "fire",
      "cellphone",
      "power"
    ],
    "answer": 2,
    "cn": "你哥哥有電話嗎？ — 有，他有。他有一支新手機。",
    "vocabIndex": 13
  },
  {
    "q": "Q: What does your mom need? — A: She needs a new ______ for her phone. The old one is broken.【螢幕】",
    "options": [
      "center",
      "screen",
      "case",
      "Internet"
    ],
    "answer": 1,
    "cn": "你媽媽需要什麼？ — 她的手機需要一個新螢幕，舊的壞了。",
    "vocabIndex": 14
  },
  {
    "q": "Q: Where do your classmates find the answers? — A: They find them on the ______.【網路】",
    "options": [
      "Internet",
      "Robot",
      "Castle",
      "Newspaper"
    ],
    "answer": 0,
    "cn": "你的同學們在哪裡找到答案？ — 他們在網路上找到答案。",
    "vocabIndex": 15
  },
  {
    "q": "Q: What does Tom write to his friend? — A: He writes an ______ to him every week.【電子郵件】",
    "options": [
      "ground",
      "e-mail",
      "case",
      "metro"
    ],
    "answer": 1,
    "cn": "湯姆寫什麼給他的朋友？ — 他每週寫一封電子郵件給他。",
    "vocabIndex": 16
  },
  {
    "q": "Q: What do you need for your report? — A: I need this ______ on my computer.【檔案】",
    "options": [
      "trash",
      "photo",
      "center",
      "file"
    ],
    "answer": 3,
    "cn": "你的報告需要什麼？ — 我需要電腦裡的這個檔案。",
    "vocabIndex": 17
  },
  {
    "q": "Q: What does the man from the post office bring? — A: He brings the ______ to our house every day.【信件；郵件】",
    "options": [
      "cellphone",
      "garbage",
      "mail",
      "castle"
    ],
    "answer": 2,
    "cn": "郵局來的那個人帶來什麼？ — 他每天把信件送到我們家。",
    "vocabIndex": 18
  },
  {
    "q": "Q: What does Grandpa read every morning? — A: He reads the ______.【報紙】",
    "options": [
      "newspaper",
      "space",
      "center",
      "note"
    ],
    "answer": 0,
    "cn": "爺爺每天早上讀什麼？ — 他讀報紙。",
    "vocabIndex": 19
  },
  {
    "q": "Q: What do your parents watch after dinner? — A: They watch the ______ on TV.【新聞；消息】",
    "options": [
      "sides",
      "news",
      "seeds",
      "roots"
    ],
    "answer": 1,
    "cn": "你爸媽晚餐後看什麼？ — 他們看電視新聞。",
    "vocabIndex": 20
  },
  {
    "q": "Q: What do you have on your desk? — A: I have a ______ of my family.【照片】",
    "options": [
      "photo",
      "castle",
      "garbage",
      "bottom"
    ],
    "answer": 0,
    "cn": "你書桌上有什麼？ — 我有一張全家福照片。",
    "vocabIndex": 21
  },
  {
    "q": "Q: What does Lisa have in her hand? — A: She has a ______ from her friend. It says, \"Happy birthday!\"【字條；筆記】",
    "options": [
      "garbage",
      "metro",
      "note",
      "e-mail"
    ],
    "answer": 2,
    "cn": "麗莎手上有什麼？ — 她有一張朋友給的字條，上面寫著「生日快樂！」",
    "vocabIndex": 22
  },
  {
    "q": "Q: What does Amy have for her mom? — A: She has a ______ for her. It's a pink bag.【禮物】",
    "options": [
      "box",
      "corner",
      "trash",
      "gift"
    ],
    "answer": 3,
    "cn": "艾美有什麼要給她媽媽？ — 她有一份禮物要給她，是一個粉紅色的包包。",
    "vocabIndex": 23
  },
  {
    "q": "Q: What do we need for the movie? — A: We need two ______. They are 250 dollars each.【票】",
    "options": [
      "roots",
      "tickets",
      "items",
      "roses"
    ],
    "answer": 1,
    "cn": "我們看電影需要什麼？ — 我們需要兩張票，每張 250 元。",
    "vocabIndex": 24
  },
  {
    "q": "Q: How do you and your family go to the zoo? — A: We take the ______. It's fast.【捷運】",
    "options": [
      "metro",
      "castle",
      "bottom",
      "corner"
    ],
    "answer": 0,
    "cn": "你和家人怎麼去動物園？ — 我們搭捷運，很快。",
    "vocabIndex": 25
  },
  {
    "q": "Q: What do you want for your birthday? — A: I want a ______ of color pens.【一套；一組】",
    "options": [
      "bottom",
      "heat",
      "gift",
      "set"
    ],
    "answer": 3,
    "cn": "你生日想要什麼？ — 我想要一組彩色筆。",
    "vocabIndex": 26
  },
  {
    "q": "Q: What do you need to buy at the store? — A: I need to buy ten ______ on this list.【項目；品項】",
    "options": [
      "grass",
      "tickets",
      "items",
      "roots"
    ],
    "answer": 2,
    "cn": "你需要在商店買什麼？ — 我需要買這張清單上的十個品項。",
    "vocabIndex": 27
  },
  {
    "q": "Q: What do you have in your bag? — A: I have many ______ in it: books, pens, and a ruler.【東西；事情】",
    "options": [
      "things",
      "roots",
      "grass",
      "gas"
    ],
    "answer": 0,
    "cn": "你的包包裡有什麼？ — 裡面有很多東西：書、筆和一把尺。",
    "vocabIndex": 28
  },
  {
    "q": "Q: Is there any ______ for my tea? — A: Yes, there is some in the bottle.【蜂蜜】",
    "options": [
      "tool",
      "honey",
      "note",
      "rope"
    ],
    "answer": 1,
    "cn": "有蜂蜜可以加在我的茶裡嗎？ — 有，瓶子裡有一些。",
    "vocabIndex": 29
  },
  {
    "q": "Q: Is there any ______ for cooking? — A: No, there isn't any. Dad has to buy some.【瓦斯；汽油】",
    "options": [
      "roses",
      "sides",
      "things",
      "gas"
    ],
    "answer": 3,
    "cn": "有瓦斯可以煮飯嗎？ — 沒有，一點都沒有，爸爸必須去買一些。",
    "vocabIndex": 30
  },
  {
    "q": "Q: Is there any light in the house? — A: No, there isn't. The ______ is out.【電力；力量】",
    "options": [
      "castle",
      "photo",
      "power",
      "bottom"
    ],
    "answer": 2,
    "cn": "屋子裡有燈光嗎？ — 沒有，停電了。",
    "vocabIndex": 31
  },
  {
    "q": "Q: Is there any ______ in the kitchen? — A: Yes, there is a lot. Please take it out.【垃圾】",
    "options": [
      "garbage",
      "heat",
      "ground",
      "set"
    ],
    "answer": 0,
    "cn": "廚房裡有垃圾嗎？ — 有，有很多，請把它拿出去倒。",
    "vocabIndex": 32
  },
  {
    "q": "Q: Is there any ______ on the floor? — A: No, there isn't any. The room is clean.【垃圾】",
    "options": [
      "screen",
      "trash",
      "tool",
      "seat"
    ],
    "answer": 1,
    "cn": "地板上有垃圾嗎？ — 沒有，一點都沒有，房間很乾淨。",
    "vocabIndex": 33
  },
  {
    "q": "Q: Is there any ______ on your shoes? — A: Yes, there is. I played in the rain.【泥巴】",
    "options": [
      "rope",
      "center",
      "mud",
      "newspaper"
    ],
    "answer": 2,
    "cn": "你的鞋子上有泥巴嗎？ — 有，我在雨中玩了。",
    "vocabIndex": 34
  },
  {
    "q": "Q: Is there any food for the sheep? — A: Yes, there is a lot of ______ on the hill.【草】",
    "options": [
      "seeds",
      "blanks",
      "gas",
      "grass"
    ],
    "answer": 3,
    "cn": "有給綿羊吃的食物嗎？ — 有，山丘上有很多草。",
    "vocabIndex": 35
  },
  {
    "q": "Q: Is there any ______ for a new desk? — A: No, there isn't. My room is too small.【空間】",
    "options": [
      "space",
      "ground",
      "tree",
      "seat"
    ],
    "answer": 0,
    "cn": "有空間放新書桌嗎？ — 沒有，我的房間太小了。",
    "vocabIndex": 36
  },
  {
    "q": "Q: Is there any ______ outside? — A: Yes, there is. The kids are playing ball.【噪音；聲響】",
    "options": [
      "fire",
      "corner",
      "noise",
      "tree"
    ],
    "answer": 2,
    "cn": "外面有噪音嗎？ — 有，小孩們在玩球。",
    "vocabIndex": 37
  },
  {
    "q": "Q: What is there on the beach? — A: There is a big ______. We are having a barbecue.【火】",
    "options": [
      "castle",
      "power",
      "gift",
      "fire"
    ],
    "answer": 3,
    "cn": "海灘上有什麼？ — 有一大堆火，我們正在烤肉。",
    "vocabIndex": 38
  },
  {
    "q": "Q: Why is it so hot today? — A: There is a lot of ______ from the sun.【熱；熱度】",
    "options": [
      "mail",
      "heat",
      "seat",
      "rope"
    ],
    "answer": 1,
    "cn": "今天為什麼這麼熱？ — 太陽的熱度很強。",
    "vocabIndex": 39
  },
  {
    "q": "Q: What is there on the playground? — A: There is a ball on the ______.【地面】",
    "options": [
      "heat",
      "noise",
      "ground",
      "power"
    ],
    "answer": 2,
    "cn": "操場上有什麼？ — 地上有一顆球。",
    "vocabIndex": 40
  },
  {
    "q": "Q: Is there a store near here? — A: Yes, there is. There is one on the ______.【角落；轉角】",
    "options": [
      "Internet",
      "case",
      "fire",
      "corner"
    ],
    "answer": 3,
    "cn": "這附近有商店嗎？ — 有，轉角就有一家。",
    "vocabIndex": 41
  },
  {
    "q": "Q: Is there any water in the bottle? — A: Yes, there is a little at the ______.【底部】",
    "options": [
      "bottom",
      "tool",
      "power",
      "space"
    ],
    "answer": 0,
    "cn": "瓶子裡有水嗎？ — 有，底部有一點點。",
    "vocabIndex": 42
  },
  {
    "q": "Q: Is there a park in the city? — A: Yes, there is. There is a big park in the ______ of the city.【中心】",
    "options": [
      "honey",
      "center",
      "tree",
      "mud"
    ],
    "answer": 1,
    "cn": "城市裡有公園嗎？ — 有，市中心有一座大公園。",
    "vocabIndex": 43
  },
  {
    "q": "Q: Are there any stores on this road? — A: Yes, there are. There are stores on both ______ of the road.【邊；面；旁邊】",
    "options": [
      "sides",
      "things",
      "items",
      "gas"
    ],
    "answer": 0,
    "cn": "這條路上有商店嗎？ — 有，路的兩邊都有商店。",
    "vocabIndex": 44
  },
  {
    "q": "Q: Can I sit with you on the bus? — A: Sure. There is a free ______ next to me.【座位】",
    "options": [
      "case",
      "trash",
      "seat",
      "space"
    ],
    "answer": 2,
    "cn": "我可以在公車上跟你坐嗎？ — 當然，我旁邊有一個空位。",
    "vocabIndex": 45
  },
  {
    "q": "Q: How many questions are there on the test? — A: There are ten ______. Write a word in each one.【空格】",
    "options": [
      "roses",
      "roots",
      "sides",
      "blanks"
    ],
    "answer": 3,
    "cn": "考試有幾題？ — 有十個空格，每個空格寫一個字。",
    "vocabIndex": 46
  },
  {
    "q": "Q: Why are you scared? — A: My brother says there is a ______ in the old house.【鬼】",
    "options": [
      "noise",
      "ghost",
      "photo",
      "cellphone"
    ],
    "answer": 1,
    "cn": "你為什麼害怕？ — 我哥哥說那間老房子裡有鬼。",
    "vocabIndex": 47
  },
  {
    "q": "Q: What is there in your yard? — A: There is a big ______. Birds sing in it.【樹】",
    "options": [
      "tree",
      "trash",
      "photo",
      "newspaper"
    ],
    "answer": 0,
    "cn": "你家院子裡有什麼？ — 有一棵大樹，鳥在上面唱歌。",
    "vocabIndex": 48
  },
  {
    "q": "Q: Why is that old plant so strong? — A: There are long ______ under it.【根】",
    "options": [
      "tickets",
      "sides",
      "roots",
      "news"
    ],
    "answer": 2,
    "cn": "那棵老植物為什麼這麼強壯？ — 它下面有很長的根。",
    "vocabIndex": 49
  },
  {
    "q": "Q: What is there in the apple? — A: There are some ______ in it.【種子】",
    "options": [
      "grass",
      "nails",
      "planets",
      "seeds"
    ],
    "answer": 3,
    "cn": "蘋果裡有什麼？ — 裡面有一些種子。",
    "vocabIndex": 50
  },
  {
    "q": "Q: What is there in the garden? — A: There are many ______. They are very beautiful.【花】",
    "options": [
      "pins",
      "flowers",
      "tickets",
      "news"
    ],
    "answer": 1,
    "cn": "花園裡有什麼？ — 有很多花，它們很美。",
    "vocabIndex": 51
  },
  {
    "q": "Q: What is there in the river? — A: There are many big ______. Don't swim there.【岩石】",
    "options": [
      "roots",
      "nails",
      "sides",
      "rocks"
    ],
    "answer": 3,
    "cn": "河裡有什麼？ — 有很多大岩石，不要在那裡游泳。",
    "vocabIndex": 52
  },
  {
    "q": "Q: Are there other worlds around the sun? — A: Yes, there are. There are eight ______ around the sun.【行星】",
    "options": [
      "planets",
      "rocks",
      "blanks",
      "news"
    ],
    "answer": 0,
    "cn": "太陽周圍還有其他世界嗎？ — 有，太陽周圍有八顆行星。",
    "vocabIndex": 53
  }
];

const LOOKUP = {
  "nails": {
    "pos": "n.",
    "en_def": "the hard part at the end of a finger or toe",
    "cn_def": "指甲"
  },
  "can": {
    "pos": "aux.",
    "en_def": "to be able to do something",
    "cn_def": "能夠；會"
  },
  "box": {
    "pos": "n.",
    "en_def": "a container with flat sides, often made of paper or wood",
    "cn_def": "盒子"
  },
  "case": {
    "pos": "n.",
    "en_def": "a box or container for keeping something in",
    "cn_def": "盒；箱；情形"
  },
  "bell": {
    "pos": "n.",
    "en_def": "a metal thing that makes a ringing sound",
    "cn_def": "鈴；鐘"
  },
  "robot": {
    "pos": "n.",
    "en_def": "a machine that can move and do some work like a person",
    "cn_def": "機器人"
  },
  "tool": {
    "pos": "n.",
    "en_def": "a thing you hold in your hand to make or fix something",
    "cn_def": "工具"
  },
  "pins": {
    "pos": "n.",
    "en_def": "a very thin, sharp piece of metal for holding paper or cloth together",
    "cn_def": "大頭針；別針"
  },
  "rope": {
    "pos": "n.",
    "en_def": "a very thick, strong string",
    "cn_def": "繩子"
  },
  "string": {
    "pos": "n.",
    "en_def": "a thin line for tying things",
    "cn_def": "線；細繩"
  },
  "swing": {
    "pos": "n.",
    "en_def": "a seat that hangs from two ropes and moves forward and back",
    "cn_def": "鞦韆"
  },
  "castle": {
    "pos": "n.",
    "en_def": "a big, strong old building where a king or queen lived",
    "cn_def": "城堡"
  },
  "roses": {
    "pos": "n.",
    "en_def": "a flower with a sweet smell and sharp points on its stem",
    "cn_def": "玫瑰"
  },
  "cellphone": {
    "pos": "n.",
    "en_def": "a small phone that you can carry with you",
    "cn_def": "手機"
  },
  "screen": {
    "pos": "n.",
    "en_def": "the flat part of a TV, computer, or phone where you see pictures",
    "cn_def": "螢幕"
  },
  "internet": {
    "pos": "n.",
    "en_def": "the system that joins computers around the world",
    "cn_def": "網路"
  },
  "e-mail": {
    "pos": "n.",
    "en_def": "a message sent from one computer or phone to another",
    "cn_def": "電子郵件"
  },
  "file": {
    "pos": "n.",
    "en_def": "a set of information kept on a computer",
    "cn_def": "檔案"
  },
  "mail": {
    "pos": "n.",
    "en_def": "letters and packages that are sent to people",
    "cn_def": "信件；郵件"
  },
  "newspaper": {
    "pos": "n.",
    "en_def": "large pieces of paper with news printed on them",
    "cn_def": "報紙"
  },
  "news": {
    "pos": "n.",
    "en_def": "new information about things that have just happened",
    "cn_def": "新聞；消息"
  },
  "photo": {
    "pos": "n.",
    "en_def": "a picture you take with a camera",
    "cn_def": "照片"
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
  "set": {
    "pos": "n.",
    "en_def": "a group of things that belong together",
    "cn_def": "一套；一組"
  },
  "items": {
    "pos": "n.",
    "en_def": "one thing on a list or in a group",
    "cn_def": "項目；品項"
  },
  "things": {
    "pos": "n.",
    "en_def": "an object; something that happens or that you do",
    "cn_def": "東西；事情"
  },
  "honey": {
    "pos": "n.",
    "en_def": "a sweet, thick food made by bees",
    "cn_def": "蜂蜜"
  },
  "gas": {
    "pos": "n.",
    "en_def": "something like air that burns for cooking; the liquid that makes cars go",
    "cn_def": "瓦斯；汽油"
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
  "trash": {
    "pos": "n.",
    "en_def": "things that you throw away",
    "cn_def": "垃圾"
  },
  "mud": {
    "pos": "n.",
    "en_def": "wet, soft ground",
    "cn_def": "泥巴"
  },
  "grass": {
    "pos": "n.",
    "en_def": "the short green plant that covers the ground in parks and fields",
    "cn_def": "草"
  },
  "space": {
    "pos": "n.",
    "en_def": "an empty place that you can use",
    "cn_def": "空間"
  },
  "noise": {
    "pos": "n.",
    "en_def": "a loud sound that is not nice to hear",
    "cn_def": "噪音；聲響"
  },
  "fire": {
    "pos": "n.",
    "en_def": "the hot, bright thing you see when something burns",
    "cn_def": "火"
  },
  "heat": {
    "pos": "n.",
    "en_def": "the feeling of something hot",
    "cn_def": "熱；熱度"
  },
  "ground": {
    "pos": "n.",
    "en_def": "the land under your feet",
    "cn_def": "地面"
  },
  "corner": {
    "pos": "n.",
    "en_def": "the place where two walls, lines, or streets meet",
    "cn_def": "角落；轉角"
  },
  "bottom": {
    "pos": "n.",
    "en_def": "the lowest part of something",
    "cn_def": "底部"
  },
  "center": {
    "pos": "n.",
    "en_def": "the middle of something",
    "cn_def": "中心"
  },
  "sides": {
    "pos": "n.",
    "en_def": "the left or right part of something; one of its surfaces",
    "cn_def": "邊；面；旁邊"
  },
  "seat": {
    "pos": "n.",
    "en_def": "something that you sit on",
    "cn_def": "座位"
  },
  "blanks": {
    "pos": "n.",
    "en_def": "an empty space where you write an answer",
    "cn_def": "空格"
  },
  "ghost": {
    "pos": "n.",
    "en_def": "a dead person that some people believe they can see",
    "cn_def": "鬼"
  },
  "tree": {
    "pos": "n.",
    "en_def": "a tall plant with branches and leaves",
    "cn_def": "樹"
  },
  "roots": {
    "pos": "n.",
    "en_def": "the part of a plant that grows under the ground",
    "cn_def": "根"
  },
  "seeds": {
    "pos": "n.",
    "en_def": "the small hard thing that a new plant grows from",
    "cn_def": "種子"
  },
  "flowers": {
    "pos": "n.",
    "en_def": "the colorful, pretty part of a plant",
    "cn_def": "花"
  },
  "rocks": {
    "pos": "n.",
    "en_def": "a big, hard stone",
    "cn_def": "岩石"
  },
  "planets": {
    "pos": "n.",
    "en_def": "a very big round thing in space that moves around the sun",
    "cn_def": "行星"
  }
};

const EXTRA_GLOSSES = {};
