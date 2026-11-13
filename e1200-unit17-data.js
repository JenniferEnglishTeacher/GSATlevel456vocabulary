// Unit 17 Quiz Data: Places & Locations 地點與位置（第17區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U17 - Places & Locations",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "beach",
    "pos": "n.",
    "cn_def": "海灘",
    "en_def": "a place with sand next to the sea",
    "sentence": "Q: Where are you going this Sunday? — A: I'm going to the {{BLANK}}. I want to swim in the sea.",
    "cn": "你這個星期日要去哪裡？ — 我要去海灘，我想在海裡游泳。"
  },
  {
    "word": "pool",
    "pos": "n.",
    "cn_def": "游泳池",
    "en_def": "a place full of water for swimming",
    "sentence": "Q: Where is Tom going? — A: He's going to the swimming {{BLANK}}. He has a swimming class.",
    "cn": "湯姆要去哪裡？ — 他要去游泳池，他有游泳課。"
  },
  {
    "word": "park",
    "pos": "n.",
    "cn_def": "公園",
    "en_def": "a place with grass and trees where people walk and play",
    "sentence": "Q: Where are Amy and Lisa going? — A: They're going to the {{BLANK}}. They want to fly kites.",
    "cn": "艾美和麗莎要去哪裡？ — 她們要去公園，她們想放風箏。"
  },
  {
    "word": "zoo",
    "pos": "n.",
    "cn_def": "動物園",
    "en_def": "a place where people can see many kinds of animals",
    "sentence": "Q: Where is your class going tomorrow? — A: We're going to the {{BLANK}} to see lions and monkeys.",
    "cn": "你們班明天要去哪裡？ — 我們要去動物園看獅子和猴子。"
  },
  {
    "word": "museum",
    "pos": "n.",
    "cn_def": "博物館",
    "en_def": "a building where people look at old or interesting things",
    "sentence": "Q: Where is Ben going? — A: He's going to the {{BLANK}} with his dad. They want to see old things.",
    "cn": "班要去哪裡？ — 他要和爸爸去博物館，他們想看古老的東西。"
  },
  {
    "word": "theater",
    "pos": "n.",
    "cn_def": "戲院",
    "en_def": "a building where people watch movies or plays",
    "sentence": "Q: Where are you and your sister going tonight? — A: We're going to the {{BLANK}} to see a movie.",
    "cn": "你和你妹妹今晚要去哪裡？ — 我們要去戲院看電影。"
  },
  {
    "word": "here",
    "pos": "adv.",
    "cn_def": "這裡",
    "en_def": "in this place",
    "sentence": "Q: Where is my pencil case? — A: It's {{BLANK}}, on your desk.",
    "cn": "我的鉛筆盒在哪裡？ — 它在這裡，在你的書桌上。"
  },
  {
    "word": "there",
    "pos": "adv.",
    "cn_def": "那裡",
    "en_def": "in that place",
    "sentence": "Q: Where is the bus stop? — A: It's over {{BLANK}}, next to the big tree.",
    "cn": "公車站在哪裡？ — 在那裡，在那棵大樹旁邊。"
  },
  {
    "word": "front",
    "pos": "n.",
    "cn_def": "前面",
    "en_def": "the part of something that faces forward",
    "sentence": "Q: Where is Tom's bike? — A: It's in {{BLANK}} of the school gate.",
    "cn": "湯姆的腳踏車在哪裡？ — 在校門前面。"
  },
  {
    "word": "back",
    "pos": "n.",
    "cn_def": "後面",
    "en_def": "the part of something that is behind the front",
    "sentence": "Q: Where is Amy? — A: She's in the {{BLANK}} of the classroom. She sits in the last row.",
    "cn": "艾美在哪裡？ — 她在教室後面，她坐在最後一排。"
  },
  {
    "word": "middle",
    "pos": "n.",
    "cn_def": "中間",
    "en_def": "the center of something",
    "sentence": "Q: Where is the big tree? — A: It's in the {{BLANK}} of the park.",
    "cn": "那棵大樹在哪裡？ — 它在公園的中間。"
  },
  {
    "word": "top",
    "pos": "n.",
    "cn_def": "頂端",
    "en_def": "the highest part of something",
    "sentence": "Q: Where is the cat? — A: It's at the {{BLANK}} of the stairs.",
    "cn": "貓在哪裡？ — 牠在樓梯的最上面。"
  },
  {
    "word": "restroom",
    "pos": "n.",
    "cn_def": "洗手間",
    "en_def": "a room with toilets in a public place",
    "sentence": "Q: Excuse me. Where is the {{BLANK}}? — A: It's between the classroom and the library.",
    "cn": "不好意思，洗手間在哪裡？ — 在教室和圖書館之間。"
  },
  {
    "word": "bank",
    "pos": "n.",
    "cn_def": "銀行",
    "en_def": "a place where people keep their money",
    "sentence": "Q: Where is the {{BLANK}}? — A: It's across from the park.",
    "cn": "銀行在哪裡？ — 在公園對面。"
  },
  {
    "word": "post office",
    "pos": "n.",
    "cn_def": "郵局",
    "en_def": "a place where people send letters and buy stamps",
    "sentence": "Q: Where is the {{BLANK}}? — A: It's next to the bank.",
    "cn": "郵局在哪裡？ — 在銀行旁邊。",
    "nblanks": 2
  },
  {
    "word": "left",
    "pos": "n.",
    "cn_def": "左邊",
    "en_def": "the side of your body where your heart is",
    "sentence": "Q: How do I get to the library? — A: Go straight and turn {{BLANK}} at the corner.",
    "cn": "我要怎麼去圖書館？ — 直走，然後在轉角左轉。"
  },
  {
    "word": "right",
    "pos": "n.",
    "cn_def": "右邊",
    "en_def": "the side opposite to left",
    "sentence": "Q: How do I get to the train station? — A: Go straight for two blocks. It's on your {{BLANK}}.",
    "cn": "我要怎麼去火車站？ — 直走兩個街區，它在你的右邊。"
  },
  {
    "word": "hospital",
    "pos": "n.",
    "cn_def": "醫院",
    "en_def": "a place where doctors and nurses take care of sick people",
    "sentence": "Q: Excuse me. How do I get to the {{BLANK}}? — A: Go straight and turn left. It's on your right.",
    "cn": "不好意思，我要怎麼去醫院？ — 直走然後左轉，它在你的右邊。"
  },
  {
    "word": "hotel",
    "pos": "n.",
    "cn_def": "旅館",
    "en_def": "a building where people pay to sleep when they travel",
    "sentence": "Q: How do we get to the Sun {{BLANK}}? — A: Turn right at the bank. It's next to the park.",
    "cn": "我們要怎麼去太陽旅館？ — 在銀行右轉，它在公園旁邊。"
  },
  {
    "word": "bookstore",
    "pos": "n.",
    "cn_def": "書店",
    "en_def": "a shop that sells books",
    "sentence": "Q: How does Ben get to the {{BLANK}}? — A: He walks along Main Street and turns left.",
    "cn": "班怎麼去書店？ — 他沿著緬恩街走，然後左轉。"
  },
  {
    "word": "department store",
    "pos": "n.",
    "cn_def": "百貨公司",
    "en_def": "a very big store that sells many kinds of things on different floors",
    "sentence": "Q: How do I get to the {{BLANK}}? — A: Take the MRT. It's across from the station.",
    "cn": "我要怎麼去百貨公司？ — 搭捷運，它在車站對面。",
    "nblanks": 2
  },
  {
    "word": "supermarket",
    "pos": "n.",
    "cn_def": "超級市場",
    "en_def": "a big store that sells food and things for the home",
    "sentence": "Q: How does your mom get to the {{BLANK}}? — A: She rides her scooter. It isn't far.",
    "cn": "你媽媽怎麼去超市？ — 她騎機車去，不遠。"
  },
  {
    "word": "bakery",
    "pos": "n.",
    "cn_def": "麵包店",
    "en_def": "a shop that makes and sells bread and cakes",
    "sentence": "Q: What does Mr. Chen do at the {{BLANK}}? — A: He makes bread and cakes.",
    "cn": "陳先生在麵包店做什麼？ — 他做麵包和蛋糕。"
  },
  {
    "word": "market",
    "pos": "n.",
    "cn_def": "市場",
    "en_def": "a place where people buy and sell food and other things",
    "sentence": "Q: What do people do at the {{BLANK}}? — A: They buy fruit, meat, and vegetables.",
    "cn": "人們在市場做什麼？ — 他們買水果、肉和蔬菜。"
  },
  {
    "word": "shop",
    "pos": "n.",
    "cn_def": "商店",
    "en_def": "a small place where people buy things",
    "sentence": "Q: What does Amy do at the {{BLANK}} on the corner? — A: She buys pencils and notebooks there.",
    "cn": "艾美在轉角的那家店做什麼？ — 她在那裡買鉛筆和筆記本。"
  },
  {
    "word": "store",
    "pos": "n.",
    "cn_def": "商店",
    "en_def": "a place where people buy things",
    "sentence": "Q: What do you do at the {{BLANK}} near your home? — A: I buy milk and bread.",
    "cn": "你在家附近的商店做什麼？ — 我買牛奶和麵包。"
  },
  {
    "word": "church",
    "pos": "n.",
    "cn_def": "教堂",
    "en_def": "a building where some people go to pray to God",
    "sentence": "Q: What does Lisa do at {{BLANK}} on Sundays? — A: She sings songs with her family.",
    "cn": "麗莎星期日在教堂做什麼？ — 她和家人一起唱歌。"
  },
  {
    "word": "temple",
    "pos": "n.",
    "cn_def": "寺廟",
    "en_def": "a building where people go to pray to gods",
    "sentence": "Q: What do people do at the {{BLANK}}? — A: They pray and ask for good luck.",
    "cn": "人們在寺廟做什麼？ — 他們拜拜，祈求好運。"
  },
  {
    "word": "factory",
    "pos": "n.",
    "cn_def": "工廠",
    "en_def": "a building where people make things with machines",
    "sentence": "Q: What does your uncle do at the {{BLANK}}? — A: He makes shoes.",
    "cn": "你叔叔在工廠做什麼？ — 他做鞋子。"
  },
  {
    "word": "office",
    "pos": "n.",
    "cn_def": "辦公室",
    "en_def": "a room or building where people work at desks",
    "sentence": "Q: What do your parents do in the {{BLANK}}? — A: They work on computers and answer the phone.",
    "cn": "你爸媽在辦公室做什麼？ — 他們用電腦工作、接電話。"
  },
  {
    "word": "farm",
    "pos": "n.",
    "cn_def": "農場",
    "en_def": "a place where people grow food and keep animals",
    "sentence": "Q: What does Grandpa do on the {{BLANK}}? — A: He grows rice and vegetables.",
    "cn": "爺爺在農場做什麼？ — 他種稻米和蔬菜。"
  },
  {
    "word": "city",
    "pos": "n.",
    "cn_def": "城市",
    "en_def": "a very big town where many people live",
    "sentence": "Q: Where do you live? — A: I live in a big {{BLANK}}. It's Taipei.",
    "cn": "你住在哪裡？ — 我住在一個大城市，是臺北。"
  },
  {
    "word": "town",
    "pos": "n.",
    "cn_def": "城鎮",
    "en_def": "a place with houses and shops, smaller than a city",
    "sentence": "Q: Where does your grandma live? — A: She lives in a small {{BLANK}} near the sea.",
    "cn": "你奶奶住在哪裡？ — 她住在海邊附近的一個小鎮。"
  },
  {
    "word": "country",
    "pos": "n.",
    "cn_def": "鄉村",
    "en_def": "land outside cities, with farms and fields",
    "sentence": "Q: Where do Tom's grandparents live? — A: They live in the {{BLANK}}. There are many farms there.",
    "cn": "湯姆的爺爺奶奶住在哪裡？ — 他們住在鄉下，那裡有很多農場。"
  },
  {
    "word": "place",
    "pos": "n.",
    "cn_def": "地方",
    "en_def": "a point or an area, like a town, a building, or a room",
    "sentence": "Q: What {{BLANK}} does Ben want to visit this summer? — A: He wants to visit Hualien.",
    "cn": "班今年夏天想去哪個地方？ — 他想去花蓮。"
  },
  {
    "word": "north",
    "pos": "n.",
    "cn_def": "北方",
    "en_def": "the direction at the top of a map",
    "sentence": "Q: Where does Amy live? — A: She lives in Taipei, in the {{BLANK}} of Taiwan.",
    "cn": "艾美住在哪裡？ — 她住在臺北，在臺灣北部。"
  },
  {
    "word": "south",
    "pos": "n.",
    "cn_def": "南方",
    "en_def": "the direction at the bottom of a map",
    "sentence": "Q: Where do your cousins live? — A: They live in Kaohsiung, in the {{BLANK}} of Taiwan.",
    "cn": "你的堂表兄弟姊妹住在哪裡？ — 他們住在高雄，在臺灣南部。"
  },
  {
    "word": "east",
    "pos": "n.",
    "cn_def": "東方",
    "en_def": "the direction where the sun comes up",
    "sentence": "Q: Where does the sun come up? — A: It comes up in the {{BLANK}}.",
    "cn": "太陽從哪裡升起？ — 它從東方升起。"
  },
  {
    "word": "west",
    "pos": "n.",
    "cn_def": "西方",
    "en_def": "the direction where the sun goes down",
    "sentence": "Q: Where does Mr. Lee live? — A: He lives in Changhua, in the {{BLANK}} of Taiwan.",
    "cn": "李先生住在哪裡？ — 他住在彰化，在臺灣西部。"
  }
];

const MCQS = [
  {
    "q": "We played in the sand and swam in the sea at the ______ all afternoon.",
    "options": [
      "zoo",
      "museum",
      "theater",
      "beach"
    ],
    "answer": 3,
    "cn": "你這個星期日要去哪裡？ — 我要去海灘，我想在海裡游泳。",
    "vocabIndex": 0
  },
  {
    "q": "The hotel has a swimming ______ on the top floor. We swam there every morning.",
    "options": [
      "park",
      "zoo",
      "pool",
      "bank"
    ],
    "answer": 2,
    "cn": "湯姆要去哪裡？ — 他要去游泳池，他有游泳課。",
    "vocabIndex": 1
  },
  {
    "q": "We walk our dog in the ______ every evening. There are many trees and a lot of grass there.",
    "options": [
      "park",
      "bank",
      "theater",
      "museum"
    ],
    "answer": 0,
    "cn": "艾美和麗莎要去哪裡？ — 她們要去公園，她們想放風箏。",
    "vocabIndex": 2
  },
  {
    "q": "We saw lions, elephants, and pandas at the ______ yesterday.",
    "options": [
      "museum",
      "zoo",
      "theater",
      "bank"
    ],
    "answer": 1,
    "cn": "你們班明天要去哪裡？ — 我們要去動物園看獅子和猴子。",
    "vocabIndex": 3
  },
  {
    "q": "We saw many old paintings and things from long ago at the ______.",
    "options": [
      "zoo",
      "bank",
      "museum",
      "pool"
    ],
    "answer": 2,
    "cn": "班要去哪裡？ — 他要和爸爸去博物館，他們想看古老的東西。",
    "vocabIndex": 4
  },
  {
    "q": "Let's go to the ______ to watch the new movie tonight. I will buy the tickets.",
    "options": [
      "theater",
      "zoo",
      "bank",
      "museum"
    ],
    "answer": 0,
    "cn": "你和你妹妹今晚要去哪裡？ — 我們要去戲院看電影。",
    "vocabIndex": 5
  },
  {
    "q": "Come ______, please. I want to show you something on my computer.",
    "options": [
      "there",
      "already",
      "ago",
      "here"
    ],
    "answer": 3,
    "cn": "我的鉛筆盒在哪裡？ — 它在這裡，在你的書桌上。",
    "vocabIndex": 6
  },
  {
    "q": "Do you see that tall tree over ______? My house is right behind it.",
    "options": [
      "here",
      "there",
      "already",
      "once"
    ],
    "answer": 1,
    "cn": "公車站在哪裡？ — 在那裡，在那棵大樹旁邊。",
    "vocabIndex": 7
  },
  {
    "q": "Short students sit in the ______ of the classroom so they can see the blackboard.",
    "options": [
      "back",
      "top",
      "front",
      "north"
    ],
    "answer": 2,
    "cn": "湯姆的腳踏車在哪裡？ — 在校門前面。",
    "vocabIndex": 8
  },
  {
    "q": "Tall students sit at the ______ of the classroom, behind all the other students.",
    "options": [
      "back",
      "front",
      "top",
      "east"
    ],
    "answer": 0,
    "cn": "艾美在哪裡？ — 她在教室後面，她坐在最後一排。",
    "vocabIndex": 9
  },
  {
    "q": "There is a small island in the ______ of the lake. Water is all around it.",
    "options": [
      "top",
      "middle",
      "front",
      "left"
    ],
    "answer": 1,
    "cn": "那棵大樹在哪裡？ — 它在公園的中間。",
    "vocabIndex": 10
  },
  {
    "q": "We climbed for five hours and finally stood on the ______ of the mountain.",
    "options": [
      "front",
      "back",
      "left",
      "top"
    ],
    "answer": 3,
    "cn": "貓在哪裡？ — 牠在樓梯的最上面。",
    "vocabIndex": 11
  },
  {
    "q": "Excuse me, where is the ______? I need to wash my hands.",
    "options": [
      "bank",
      "restroom",
      "farm",
      "factory"
    ],
    "answer": 1,
    "cn": "不好意思，洗手間在哪裡？ — 在教室和圖書館之間。",
    "vocabIndex": 12
  },
  {
    "q": "I need to go to the ______ to get some money. It closes at three thirty.",
    "options": [
      "zoo",
      "farm",
      "temple",
      "bank"
    ],
    "answer": 3,
    "cn": "銀行在哪裡？ — 在公園對面。",
    "vocabIndex": 13
  },
  {
    "q": "I am going to the ______ to mail a letter and buy some stamps.",
    "options": [
      "department store",
      "hospital",
      "post office",
      "bakery"
    ],
    "answer": 2,
    "cn": "郵局在哪裡？ — 在銀行旁邊。",
    "vocabIndex": 14
  },
  {
    "q": "In Taiwan, the driver sits on the ______ side of the car. In Japan, the driver sits on the right.",
    "options": [
      "left",
      "right",
      "north",
      "top"
    ],
    "answer": 0,
    "cn": "我要怎麼去圖書館？ — 直走，然後在轉角左轉。",
    "vocabIndex": 15
  },
  {
    "q": "Most people write with their ______ hand, but my brother uses his left.",
    "options": [
      "left",
      "front",
      "right",
      "back"
    ],
    "answer": 2,
    "cn": "我要怎麼去火車站？ — 直走兩個街區，它在你的右邊。",
    "vocabIndex": 16
  },
  {
    "q": "Ben broke his leg, so he had to stay in the ______ for a week. The doctors and nurses were kind.",
    "options": [
      "hotel",
      "hospital",
      "bank",
      "bakery"
    ],
    "answer": 1,
    "cn": "不好意思，我要怎麼去醫院？ — 直走然後左轉，它在你的右邊。",
    "vocabIndex": 17
  },
  {
    "q": "We stayed at a nice ______ near the beach during our trip. Our room had a big bed.",
    "options": [
      "bank",
      "bakery",
      "factory",
      "hotel"
    ],
    "answer": 3,
    "cn": "我們要怎麼去太陽旅館？ — 在銀行右轉，它在公園旁邊。",
    "vocabIndex": 18
  },
  {
    "q": "I bought two novels and a dictionary at the ______ near my school.",
    "options": [
      "bookstore",
      "bakery",
      "bank",
      "hospital"
    ],
    "answer": 0,
    "cn": "班怎麼去書店？ — 他沿著緬恩街走，然後左轉。",
    "vocabIndex": 19
  },
  {
    "q": "Mom bought a dress on the third floor and shoes on the fifth floor of the ______.",
    "options": [
      "post office",
      "bakery",
      "farm",
      "department store"
    ],
    "answer": 3,
    "cn": "我要怎麼去百貨公司？ — 搭捷運，它在車站對面。",
    "vocabIndex": 20
  },
  {
    "q": "We buy milk, eggs, meat, and vegetables at the ______ every week.",
    "options": [
      "bookstore",
      "supermarket",
      "bank",
      "bakery"
    ],
    "answer": 1,
    "cn": "你媽媽怎麼去超市？ — 她騎機車去，不遠。",
    "vocabIndex": 21
  },
  {
    "q": "The ______ on the corner sells fresh bread and cakes every morning. It smells so good.",
    "options": [
      "bank",
      "bookstore",
      "bakery",
      "temple"
    ],
    "answer": 2,
    "cn": "陳先生在麵包店做什麼？ — 他做麵包和蛋糕。",
    "vocabIndex": 22
  },
  {
    "q": "Mom buys fresh fish and vegetables at the ______ early every morning. Farmers sell their food there.",
    "options": [
      "market",
      "bank",
      "bakery",
      "bookstore"
    ],
    "answer": 0,
    "cn": "人們在市場做什麼？ — 他們買水果、肉和蔬菜。",
    "vocabIndex": 23
  },
  {
    "q": "There is a small flower ______ next to my school. I bought roses for my teacher there.",
    "options": [
      "bank",
      "shop",
      "farm",
      "temple"
    ],
    "answer": 1,
    "cn": "艾美在轉角的那家店做什麼？ — 她在那裡買鉛筆和筆記本。",
    "vocabIndex": 24
  },
  {
    "q": "This ______ sells toys and games. Children love to go there after school.",
    "options": [
      "bank",
      "farm",
      "church",
      "store"
    ],
    "answer": 3,
    "cn": "你在家附近的商店做什麼？ — 我買牛奶和麵包。",
    "vocabIndex": 25
  },
  {
    "q": "Many people go to the ______ on Sunday mornings to sing and pray to God.",
    "options": [
      "bank",
      "factory",
      "church",
      "zoo"
    ],
    "answer": 2,
    "cn": "麗莎星期日在教堂做什麼？ — 她和家人一起唱歌。",
    "vocabIndex": 26
  },
  {
    "q": "Longshan ______ is very old and famous. People in Taipei go there to pray to the gods.",
    "options": [
      "temple",
      "Bank",
      "Hotel",
      "Zoo"
    ],
    "answer": 0,
    "cn": "人們在寺廟做什麼？ — 他們拜拜，祈求好運。",
    "vocabIndex": 27
  },
  {
    "q": "My uncle works in a car ______. He and five hundred other workers make cars there.",
    "options": [
      "church",
      "factory",
      "temple",
      "bakery"
    ],
    "answer": 1,
    "cn": "你叔叔在工廠做什麼？ — 他做鞋子。",
    "vocabIndex": 28
  },
  {
    "q": "My mother works in an ______. She sits at a desk and uses a computer all day.",
    "options": [
      "farm",
      "zoo",
      "office",
      "bakery"
    ],
    "answer": 2,
    "cn": "你爸媽在辦公室做什麼？ — 他們用電腦工作、接電話。",
    "vocabIndex": 29
  },
  {
    "q": "Grandpa grows rice and keeps pigs and chickens on his ______.",
    "options": [
      "farm",
      "bank",
      "hotel",
      "shop"
    ],
    "answer": 0,
    "cn": "爺爺在農場做什麼？ — 他種稻米和蔬菜。",
    "vocabIndex": 30
  },
  {
    "q": "Taipei is a big ______. Millions of people live and work there.",
    "options": [
      "farm",
      "shop",
      "bank",
      "city"
    ],
    "answer": 3,
    "cn": "你住在哪裡？ — 我住在一個大城市，是臺北。",
    "vocabIndex": 31
  },
  {
    "q": "I live in a small ______. It has only one school and two stores, and it is much smaller than a city.",
    "options": [
      "town",
      "bank",
      "hotel",
      "pool"
    ],
    "answer": 0,
    "cn": "你奶奶住在哪裡？ — 她住在海邊附近的一個小鎮。",
    "vocabIndex": 32
  },
  {
    "q": "I don't like big cities. I want to live in the ______, near farms, rivers, and mountains.",
    "options": [
      "bank",
      "theater",
      "museum",
      "country"
    ],
    "answer": 3,
    "cn": "湯姆的爺爺奶奶住在哪裡？ — 他們住在鄉下，那裡有很多農場。",
    "vocabIndex": 33
  },
  {
    "q": "This park is a good ______ for a picnic. It is quiet and has many trees.",
    "options": [
      "bank",
      "place",
      "hotel",
      "farm"
    ],
    "answer": 1,
    "cn": "班今年夏天想去哪個地方？ — 他想去花蓮。",
    "vocabIndex": 34
  },
  {
    "q": "Taipei is in the ______ of Taiwan, and Kaohsiung is in the south.",
    "options": [
      "east",
      "west",
      "north",
      "front"
    ],
    "answer": 2,
    "cn": "艾美住在哪裡？ — 她住在臺北，在臺灣北部。",
    "vocabIndex": 35
  },
  {
    "q": "Kaohsiung is in the ______ of Taiwan, and Taipei is in the north.",
    "options": [
      "east",
      "west",
      "top",
      "south"
    ],
    "answer": 3,
    "cn": "你的堂表兄弟姊妹住在哪裡？ — 他們住在高雄，在臺灣南部。",
    "vocabIndex": 36
  },
  {
    "q": "The sun comes up in the ______ every morning and goes down in the west.",
    "options": [
      "north",
      "east",
      "south",
      "middle"
    ],
    "answer": 1,
    "cn": "太陽從哪裡升起？ — 它從東方升起。",
    "vocabIndex": 37
  },
  {
    "q": "The sun goes down in the ______ every evening. It comes up in the east.",
    "options": [
      "west",
      "north",
      "south",
      "front"
    ],
    "answer": 0,
    "cn": "李先生住在哪裡？ — 他住在彰化，在臺灣西部。",
    "vocabIndex": 38
  }
];

const LOOKUP = {
  "zoo": {
    "pos": "n.",
    "en_def": "a place where people can see many kinds of animals",
    "cn_def": "動物園"
  },
  "museum": {
    "pos": "n.",
    "en_def": "a building where people look at old or interesting things",
    "cn_def": "博物館"
  },
  "theater": {
    "pos": "n.",
    "en_def": "a building where people watch movies or plays",
    "cn_def": "戲院"
  },
  "beach": {
    "pos": "n.",
    "en_def": "a place with sand next to the sea",
    "cn_def": "海灘"
  },
  "park": {
    "pos": "n.",
    "en_def": "a place with grass and trees where people walk and play",
    "cn_def": "公園"
  },
  "pool": {
    "pos": "n.",
    "en_def": "a place full of water for swimming",
    "cn_def": "游泳池"
  },
  "bank": {
    "pos": "n.",
    "en_def": "a place where people keep their money",
    "cn_def": "銀行"
  },
  "there": {
    "pos": "adv.",
    "en_def": "in that place",
    "cn_def": "那裡"
  },
  "already": {
    "pos": "adv.",
    "en_def": "before now; earlier than you thought",
    "cn_def": "已經"
  },
  "ago": {
    "pos": "adv.",
    "en_def": "before now; in the past",
    "cn_def": "……以前"
  },
  "here": {
    "pos": "adv.",
    "en_def": "in this place",
    "cn_def": "這裡"
  },
  "once": {
    "pos": "adv.",
    "en_def": "one time",
    "cn_def": "一次"
  },
  "back": {
    "pos": "n.",
    "en_def": "the part of your body opposite your chest and stomach",
    "cn_def": "背"
  },
  "top": {
    "pos": "n.",
    "en_def": "the highest part of something",
    "cn_def": "頂端"
  },
  "front": {
    "pos": "n.",
    "en_def": "the part of something that faces forward",
    "cn_def": "前面"
  },
  "north": {
    "pos": "n.",
    "en_def": "the direction at the top of a map",
    "cn_def": "北方"
  },
  "east": {
    "pos": "n.",
    "en_def": "the direction where the sun comes up",
    "cn_def": "東方"
  },
  "middle": {
    "pos": "n.",
    "en_def": "the center of something",
    "cn_def": "中間"
  },
  "left": {
    "pos": "n.",
    "en_def": "the side of your body where your heart is",
    "cn_def": "左邊"
  },
  "restroom": {
    "pos": "n.",
    "en_def": "a room with toilets in a public place",
    "cn_def": "洗手間"
  },
  "farm": {
    "pos": "n.",
    "en_def": "a place where people grow food and keep animals",
    "cn_def": "農場"
  },
  "factory": {
    "pos": "n.",
    "en_def": "a building where people make things with machines",
    "cn_def": "工廠"
  },
  "temple": {
    "pos": "n.",
    "en_def": "a building where people go to pray to gods",
    "cn_def": "寺廟"
  },
  "department store": {
    "pos": "n.",
    "en_def": "a very big store that sells many kinds of things on different floors",
    "cn_def": "百貨公司"
  },
  "hospital": {
    "pos": "n.",
    "en_def": "a place where doctors and nurses take care of sick people",
    "cn_def": "醫院"
  },
  "post office": {
    "pos": "n.",
    "en_def": "a place where people send letters and buy stamps",
    "cn_def": "郵局"
  },
  "bakery": {
    "pos": "n.",
    "en_def": "a shop that makes and sells bread and cakes",
    "cn_def": "麵包店"
  },
  "right": {
    "pos": "n.",
    "en_def": "the side opposite to left",
    "cn_def": "右邊"
  },
  "hotel": {
    "pos": "n.",
    "en_def": "a building where people pay to sleep when they travel",
    "cn_def": "旅館"
  },
  "bookstore": {
    "pos": "n.",
    "en_def": "a shop that sells books",
    "cn_def": "書店"
  },
  "supermarket": {
    "pos": "n.",
    "en_def": "a big store that sells food and things for the home",
    "cn_def": "超級市場"
  },
  "market": {
    "pos": "n.",
    "en_def": "a place where people buy and sell food and other things",
    "cn_def": "市場"
  },
  "shop": {
    "pos": "n.",
    "en_def": "a small place where people buy things",
    "cn_def": "商店"
  },
  "church": {
    "pos": "n.",
    "en_def": "a building where some people go to pray to God",
    "cn_def": "教堂"
  },
  "store": {
    "pos": "n.",
    "en_def": "a place where people buy things",
    "cn_def": "商店"
  },
  "office": {
    "pos": "n.",
    "en_def": "a room or building where people work at desks",
    "cn_def": "辦公室"
  },
  "city": {
    "pos": "n.",
    "en_def": "a very big town where many people live",
    "cn_def": "城市"
  },
  "town": {
    "pos": "n.",
    "en_def": "a place with houses and shops, smaller than a city",
    "cn_def": "城鎮"
  },
  "country": {
    "pos": "n.",
    "en_def": "land outside cities, with farms and fields",
    "cn_def": "鄉村"
  },
  "place": {
    "pos": "n.",
    "en_def": "a point or an area, like a town, a building, or a room",
    "cn_def": "地方"
  },
  "west": {
    "pos": "n.",
    "en_def": "the direction where the sun goes down",
    "cn_def": "西方"
  },
  "south": {
    "pos": "n.",
    "en_def": "the direction at the bottom of a map",
    "cn_def": "南方"
  }
};

const EXTRA_GLOSSES = {};
