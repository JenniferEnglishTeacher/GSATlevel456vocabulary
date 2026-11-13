// Unit 25 Quiz Data: Animals & Insects 動物與昆蟲（第26區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U25 - Animals & Insects",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "lion",
    "pos": "n.",
    "cn_def": "獅子",
    "en_def": "a big wild cat; the male has long hair around its head",
    "sentence": "Q: What animal is it? It is the king of the animals. — A: It's a {{BLANK}}. It has a big head and a lot of hair.",
    "cn": "這是什麼動物？牠是萬獸之王。 — 牠是獅子，牠有大大的頭和很多毛。"
  },
  {
    "word": "tiger",
    "pos": "n.",
    "cn_def": "老虎",
    "en_def": "a big wild cat with orange fur and black stripes",
    "sentence": "Q: What animal is it? It has black and orange lines. — A: It's a {{BLANK}}. It can run very fast.",
    "cn": "這是什麼動物？牠身上有黑色和橘色的條紋。 — 牠是老虎，牠可以跑得很快。"
  },
  {
    "word": "bear",
    "pos": "n.",
    "cn_def": "熊",
    "en_def": "a big, strong wild animal with thick fur",
    "sentence": "Q: What animal is it? It is big and brown. It likes honey. — A: It's a {{BLANK}}. Don't go near it.",
    "cn": "這是什麼動物？牠又大又是棕色的，牠喜歡蜂蜜。 — 牠是熊，不要靠近牠。"
  },
  {
    "word": "fox",
    "pos": "n.",
    "cn_def": "狐狸",
    "en_def": "a wild animal like a small dog with a big thick tail",
    "sentence": "Q: What animal is it? It looks like a dog, and it is very smart. — A: It's a {{BLANK}}. It has a big tail.",
    "cn": "這是什麼動物？牠看起來像狗，而且很聰明。 — 牠是狐狸，牠有一條大尾巴。"
  },
  {
    "word": "elephant",
    "pos": "n.",
    "cn_def": "大象",
    "en_def": "a very big gray animal with a long nose and big ears",
    "sentence": "Q: What animal is it? It has a long nose and big ears. — A: It's an {{BLANK}}. It is very big and heavy.",
    "cn": "這是什麼動物？牠有長鼻子和大耳朵。 — 牠是大象，牠又大又重。"
  },
  {
    "word": "hippo",
    "pos": "n.",
    "cn_def": "河馬",
    "en_def": "a big, heavy animal with short legs that lives in rivers in Africa",
    "sentence": "Q: What animal is it? It has a big mouth and lives in the river. — A: It's a {{BLANK}}. It is fat and heavy.",
    "cn": "這是什麼動物？牠有一張大嘴巴，住在河裡。 — 牠是河馬，牠又胖又重。"
  },
  {
    "word": "zebra (zebras)",
    "pos": "n.",
    "cn_def": "斑馬",
    "en_def": "an animal like a horse with black and white stripes",
    "sentence": "Q: What animals are they? They are black and white. — A: They are {{BLANK}}. They look like horses.",
    "cn": "這些是什麼動物？牠們是黑白相間的。 — 牠們是斑馬，牠們看起來像馬。"
  },
  {
    "word": "monkey (monkeys)",
    "pos": "n.",
    "cn_def": "猴子",
    "en_def": "an animal with a long tail that climbs trees",
    "sentence": "Q: What animals are they? They like bananas. — A: They are {{BLANK}}. They can climb trees.",
    "cn": "這些是什麼動物？牠們喜歡香蕉。 — 牠們是猴子，牠們會爬樹。"
  },
  {
    "word": "kangaroo",
    "pos": "n.",
    "cn_def": "袋鼠",
    "en_def": "an animal from Australia that jumps and carries its baby in a pocket",
    "sentence": "Q: What animal is it? It can jump very high. — A: It's a {{BLANK}}. It has a baby in its pocket.",
    "cn": "這是什麼動物？牠可以跳得很高。 — 牠是袋鼠，牠的口袋裡有一隻寶寶。"
  },
  {
    "word": "koala",
    "pos": "n.",
    "cn_def": "無尾熊",
    "en_def": "a gray animal from Australia that lives in trees and looks like a small bear",
    "sentence": "Q: What animal is it? It sleeps in the tree all day. — A: It's a {{BLANK}}. It looks like a little bear.",
    "cn": "這是什麼動物？牠整天在樹上睡覺。 — 牠是無尾熊，牠看起來像一隻小熊。"
  },
  {
    "word": "dragon",
    "pos": "n.",
    "cn_def": "龍",
    "en_def": "a big animal in stories that has wings and can breathe fire",
    "sentence": "Q: What animal is it? It can fly, and it is in many Chinese stories. — A: It's a {{BLANK}}. It isn't a real animal.",
    "cn": "這是什麼動物？牠會飛，而且出現在很多中國故事裡。 — 牠是龍，牠不是真的動物。"
  },
  {
    "word": "rabbit",
    "pos": "n.",
    "cn_def": "兔子",
    "en_def": "a small animal with long ears that hops",
    "sentence": "Q: What does a {{BLANK}} look like? — A: It has long ears and a short tail. It eats vegetables.",
    "cn": "兔子長什麼樣子？ — 牠有長耳朵和短尾巴，牠吃蔬菜。"
  },
  {
    "word": "tail",
    "pos": "n.",
    "cn_def": "尾巴",
    "en_def": "the long part at the back end of an animal's body",
    "sentence": "Q: What does your dog look like? — A: It's white, and it has a long {{BLANK}}.",
    "cn": "你的狗長什麼樣子？ — 牠是白色的，有一條長尾巴。"
  },
  {
    "word": "mouse (mice)",
    "pos": "n.",
    "cn_def": "老鼠",
    "en_def": "a very small animal with a long tail that likes cheese",
    "sentence": "Q: What do {{BLANK}} look like? — A: They are small and gray. They have long tails.",
    "cn": "老鼠長什麼樣子？ — 牠們小小的、灰色的，有長長的尾巴。"
  },
  {
    "word": "rat (rats)",
    "pos": "n.",
    "cn_def": "（大）老鼠",
    "en_def": "an animal like a mouse, but bigger",
    "sentence": "Q: What do {{BLANK}} look like? — A: They look like big mice. They are dirty.",
    "cn": "大老鼠長什麼樣子？ — 牠們看起來像大隻的老鼠，牠們很髒。"
  },
  {
    "word": "cow",
    "pos": "n.",
    "cn_def": "母牛",
    "en_def": "a big farm animal that gives us milk",
    "sentence": "Q: What does a {{BLANK}} look like? — A: It is black and white. It gives us milk.",
    "cn": "母牛長什麼樣子？ — 牠是黑白色的，牠給我們牛奶。"
  },
  {
    "word": "ox",
    "pos": "n.",
    "cn_def": "公牛",
    "en_def": "a big, strong male cow that pulls heavy things on a farm",
    "sentence": "Q: What does an {{BLANK}} look like? — A: It is big and strong. It helps farmers.",
    "cn": "公牛長什麼樣子？ — 牠又大又強壯，牠幫助農夫。"
  },
  {
    "word": "horse (horses)",
    "pos": "n.",
    "cn_def": "馬",
    "en_def": "a big animal that people ride",
    "sentence": "Q: What do {{BLANK}} look like? — A: They are tall, and they have long legs. They run fast.",
    "cn": "馬長什麼樣子？ — 牠們很高，有長長的腿，牠們跑得很快。"
  },
  {
    "word": "pig",
    "pos": "n.",
    "cn_def": "豬",
    "en_def": "a fat farm animal with a flat nose and a short tail",
    "sentence": "Q: What does a {{BLANK}} look like? — A: It is pink and fat. It has a short tail.",
    "cn": "豬長什麼樣子？ — 牠是粉紅色的、胖胖的，有一條短尾巴。"
  },
  {
    "word": "goat (goats)",
    "pos": "n.",
    "cn_def": "山羊",
    "en_def": "a farm animal with horns and a little beard",
    "sentence": "Q: What do {{BLANK}} look like? — A: They are white. They live on the hill and eat grass.",
    "cn": "山羊長什麼樣子？ — 牠們是白色的，牠們住在山丘上吃草。"
  },
  {
    "word": "sheep (sheep)",
    "pos": "n.",
    "cn_def": "綿羊",
    "en_def": "a farm animal with thick wool",
    "sentence": "Q: What do {{BLANK}} look like? — A: They are white and soft. They eat grass on the farm.",
    "cn": "綿羊長什麼樣子？ — 牠們白白的、軟軟的，在農場吃草。"
  },
  {
    "word": "bird (birds)",
    "pos": "n.",
    "cn_def": "鳥",
    "en_def": "an animal with wings and feathers",
    "sentence": "Q: Can {{BLANK}} fly? — A: Yes, they can. They fly in the sky.",
    "cn": "鳥會飛嗎？ — 會，牠們在天空飛。"
  },
  {
    "word": "bat",
    "pos": "n.",
    "cn_def": "蝙蝠",
    "en_def": "a small animal like a mouse with wings that flies at night",
    "sentence": "Q: Can a {{BLANK}} fly? — A: Yes, it can. It flies at night.",
    "cn": "蝙蝠會飛嗎？ — 會，牠在晚上飛。"
  },
  {
    "word": "bee (bees)",
    "pos": "n.",
    "cn_def": "蜜蜂",
    "en_def": "a yellow and black insect that makes honey",
    "sentence": "Q: Can {{BLANK}} fly? — A: Yes, they can. They make honey.",
    "cn": "蜜蜂會飛嗎？ — 會，牠們會製造蜂蜜。"
  },
  {
    "word": "butterfly",
    "pos": "n.",
    "cn_def": "蝴蝶",
    "en_def": "an insect with big, colorful wings",
    "sentence": "Q: Can the {{BLANK}} fly? — A: Yes, it can. It is flying over the flowers.",
    "cn": "這隻蝴蝶會飛嗎？ — 會，牠正在花朵上方飛。"
  },
  {
    "word": "duck",
    "pos": "n.",
    "cn_def": "鴨",
    "en_def": "a bird that swims and says \"quack\"",
    "sentence": "Q: Can a {{BLANK}} swim? — A: Yes, it can. It swims in the pond.",
    "cn": "鴨子會游泳嗎？ — 會，牠在池塘裡游泳。"
  },
  {
    "word": "goose (geese)",
    "pos": "n.",
    "cn_def": "鵝",
    "en_def": "a big bird like a duck with a long neck",
    "sentence": "Q: Can {{BLANK}} swim? — A: Yes, they can. They swim in the lake.",
    "cn": "鵝會游泳嗎？ — 會，牠們在湖裡游泳。"
  },
  {
    "word": "fish (fish)",
    "pos": "n.",
    "cn_def": "魚",
    "en_def": "an animal that lives and swims in water",
    "sentence": "Q: Can {{BLANK}} fly? — A: No, they can't. But they can swim.",
    "cn": "魚會飛嗎？ — 不會，但是牠們會游泳。"
  },
  {
    "word": "frog",
    "pos": "n.",
    "cn_def": "青蛙",
    "en_def": "a small green animal that jumps and lives near water",
    "sentence": "Q: Can a {{BLANK}} swim? — A: Yes, it can. It can jump, too.",
    "cn": "青蛙會游泳嗎？ — 會，牠也會跳。"
  },
  {
    "word": "turtle",
    "pos": "n.",
    "cn_def": "烏龜",
    "en_def": "an animal with a hard shell on its back that moves slowly",
    "sentence": "Q: Can a {{BLANK}} run fast? — A: No, it can't. It walks very slowly.",
    "cn": "烏龜可以跑得很快嗎？ — 不行，牠走得很慢。"
  },
  {
    "word": "snake",
    "pos": "n.",
    "cn_def": "蛇",
    "en_def": "a long, thin animal with no legs",
    "sentence": "Q: Can a {{BLANK}} walk? — A: No, it can't. It has no legs.",
    "cn": "蛇會走路嗎？ — 不會，牠沒有腳。"
  },
  {
    "word": "insect",
    "pos": "n.",
    "cn_def": "昆蟲",
    "en_def": "a very small animal with six legs, like an ant or a bee",
    "sentence": "Q: How many legs does an {{BLANK}} have? — A: It has six legs.",
    "cn": "昆蟲有幾隻腳？ — 牠有六隻腳。"
  },
  {
    "word": "ant (ants)",
    "pos": "n.",
    "cn_def": "螞蟻",
    "en_def": "a very small insect that lives in big groups",
    "sentence": "Q: How many legs do {{BLANK}} have? — A: They have six legs. They are insects.",
    "cn": "螞蟻有幾隻腳？ — 牠們有六隻腳，牠們是昆蟲。"
  },
  {
    "word": "bug (bugs)",
    "pos": "n.",
    "cn_def": "小蟲",
    "en_def": "a small insect",
    "sentence": "Q: How many legs do they have? — A: These little {{BLANK}} have six legs.",
    "cn": "牠們有幾隻腳？ — 這些小蟲有六隻腳。"
  },
  {
    "word": "spider",
    "pos": "n.",
    "cn_def": "蜘蛛",
    "en_def": "a small animal with eight legs that makes a web",
    "sentence": "Q: How many legs does a {{BLANK}} have? — A: It has eight legs. It isn't an insect.",
    "cn": "蜘蛛有幾隻腳？ — 牠有八隻腳，牠不是昆蟲。"
  },
  {
    "word": "chicken (chickens)",
    "pos": "n.",
    "cn_def": "雞；小雞",
    "en_def": "a farm bird that people keep for eggs and meat",
    "sentence": "Q: How many legs do {{BLANK}} have? — A: They have two legs. They can't fly well.",
    "cn": "雞有幾隻腳？ — 牠們有兩隻腳，牠們飛不太好。"
  },
  {
    "word": "hen (hens)",
    "pos": "n.",
    "cn_def": "母雞",
    "en_def": "a female chicken",
    "sentence": "Q: How many hens does your grandpa have? — A: He has ten {{BLANK}}. They give us eggs.",
    "cn": "你爺爺有幾隻母雞？ — 他有十隻母雞，牠們給我們蛋。"
  },
  {
    "word": "animal",
    "pos": "n.",
    "cn_def": "動物",
    "en_def": "a living thing that can move, like a dog, a bird, or a fish",
    "sentence": "Q: What {{BLANK}} do you like best? — A: I like dogs best. They are friendly.",
    "cn": "你最喜歡什麼動物？ — 我最喜歡狗，牠們很友善。"
  },
  {
    "word": "pet",
    "pos": "n.",
    "cn_def": "寵物",
    "en_def": "an animal that you keep at home",
    "sentence": "Q: Do you have a {{BLANK}}? — A: Yes, I do. I have a little cat.",
    "cn": "你有養寵物嗎？ — 有，我養了一隻小貓。"
  },
  {
    "word": "cat (cats)",
    "pos": "n.",
    "cn_def": "貓",
    "en_def": "a small pet animal that says \"meow\"",
    "sentence": "Q: What animal does your sister like? — A: She likes {{BLANK}}. She has a black one.",
    "cn": "你姊姊喜歡什麼動物？ — 她喜歡貓，她有一隻黑貓。"
  },
  {
    "word": "dog",
    "pos": "n.",
    "cn_def": "狗",
    "en_def": "a pet animal that barks",
    "sentence": "Q: Does Tom have a pet? — A: Yes, he does. He has a {{BLANK}}. It's very friendly.",
    "cn": "湯姆有養寵物嗎？ — 有，他養了一隻狗，牠很友善。"
  },
  {
    "word": "puppy",
    "pos": "n.",
    "cn_def": "小狗",
    "en_def": "a baby dog",
    "sentence": "Q: Does Amy like her new {{BLANK}}? — A: Yes, she does. It's very cute.",
    "cn": "艾美喜歡她的新小狗嗎？ — 喜歡，牠非常可愛。"
  },
  {
    "word": "cage",
    "pos": "n.",
    "cn_def": "籠子",
    "en_def": "a box made of bars for keeping birds or animals in",
    "sentence": "Q: Where do you keep your bird? — A: I keep it in a {{BLANK}}.",
    "cn": "你把你的鳥養在哪裡？ — 我把牠養在籠子裡。"
  },
  {
    "word": "bite",
    "pos": "v.",
    "cn_def": "咬",
    "en_def": "to cut something with your teeth",
    "sentence": "Q: Does your dog {{BLANK}}? — A: No, it doesn't. It never bites people.",
    "cn": "你的狗會咬人嗎？ — 不會，牠從不咬人。"
  }
];

const MCQS = [
  {
    "q": "The ______ is called the king of animals. The male has long hair around its head and neck.",
    "options": [
      "zebra",
      "rabbit",
      "lion",
      "turtle"
    ],
    "answer": 2,
    "cn": "這是什麼動物？牠是萬獸之王。 — 牠是獅子，牠有大大的頭和很多毛。",
    "vocabIndex": 0
  },
  {
    "q": "A ______ is a big wild cat with orange fur and black stripes.",
    "options": [
      "lion",
      "bear",
      "fox",
      "tiger"
    ],
    "answer": 3,
    "cn": "這是什麼動物？牠身上有黑色和橘色的條紋。 — 牠是老虎，牠可以跑得很快。",
    "vocabIndex": 1
  },
  {
    "q": "A ______ is a big, strong animal with thick fur. Some are white and live near the North Pole.",
    "options": [
      "bear",
      "fox",
      "rabbit",
      "monkey"
    ],
    "answer": 0,
    "cn": "這是什麼動物？牠又大又是棕色的，牠喜歡蜂蜜。 — 牠是熊，不要靠近牠。",
    "vocabIndex": 2
  },
  {
    "q": "A ______ looks like a small dog with a big, thick tail. In many stories, it is smart and tricky.",
    "options": [
      "bear",
      "fox",
      "pig",
      "cow"
    ],
    "answer": 1,
    "cn": "這是什麼動物？牠看起來像狗，而且很聰明。 — 牠是狐狸，牠有一條大尾巴。",
    "vocabIndex": 3
  },
  {
    "q": "An ______ is very big and gray. It has a long nose and two big ears.",
    "options": [
      "ox",
      "ant",
      "elephant",
      "insect"
    ],
    "answer": 2,
    "cn": "這是什麼動物？牠有長鼻子和大耳朵。 — 牠是大象，牠又大又重。",
    "vocabIndex": 4
  },
  {
    "q": "A ______ is a big, heavy animal with a huge mouth. It stays in rivers in Africa all day.",
    "options": [
      "zebra",
      "kangaroo",
      "koala",
      "hippo"
    ],
    "answer": 3,
    "cn": "這是什麼動物？牠有一張大嘴巴，住在河裡。 — 牠是河馬，牠又胖又重。",
    "vocabIndex": 5
  },
  {
    "q": "______ look like horses, but they have black and white stripes.",
    "options": [
      "Tigers",
      "Zebras",
      "Lions",
      "Bears"
    ],
    "answer": 1,
    "cn": "這些是什麼動物？牠們是黑白相間的。 — 牠們是斑馬，牠們看起來像馬。",
    "vocabIndex": 6
  },
  {
    "q": "______ are good at climbing trees. They love bananas, and they have long tails.",
    "options": [
      "Monkeys",
      "Zebras",
      "Hippos",
      "Turtles"
    ],
    "answer": 0,
    "cn": "這些是什麼動物？牠們喜歡香蕉。 — 牠們是猴子，牠們會爬樹。",
    "vocabIndex": 7
  },
  {
    "q": "A ______ lives in Australia. It jumps on two strong legs and carries its baby in a pocket.",
    "options": [
      "zebra",
      "kangaroo",
      "hippo",
      "tiger"
    ],
    "answer": 1,
    "cn": "這是什麼動物？牠可以跳得很高。 — 牠是袋鼠，牠的口袋裡有一隻寶寶。",
    "vocabIndex": 8
  },
  {
    "q": "A ______ lives in trees in Australia. It looks like a small gray bear and sleeps most of the day.",
    "options": [
      "kangaroo",
      "zebra",
      "hippo",
      "koala"
    ],
    "answer": 3,
    "cn": "這是什麼動物？牠整天在樹上睡覺。 — 牠是無尾熊，牠看起來像一隻小熊。",
    "vocabIndex": 9
  },
  {
    "q": "In old stories, a ______ can fly and breathe fire. There is a year of this animal in the Chinese calendar.",
    "options": [
      "rabbit",
      "tiger",
      "dragon",
      "snake"
    ],
    "answer": 2,
    "cn": "這是什麼動物？牠會飛，而且出現在很多中國故事裡。 — 牠是龍，牠不是真的動物。",
    "vocabIndex": 10
  },
  {
    "q": "A ______ has long ears and a short tail. It hops and loves to eat carrots.",
    "options": [
      "rabbit",
      "turtle",
      "snake",
      "frog"
    ],
    "answer": 0,
    "cn": "兔子長什麼樣子？ — 牠有長耳朵和短尾巴，牠吃蔬菜。",
    "vocabIndex": 11
  },
  {
    "q": "A happy dog moves its ______ from side to side. A monkey has a long one.",
    "options": [
      "cage",
      "pet",
      "bug",
      "tail"
    ],
    "answer": 3,
    "cn": "你的狗長什麼樣子？ — 牠是白色的，有一條長尾巴。",
    "vocabIndex": 12
  },
  {
    "q": "Cats like to catch ______. These small animals have long tails and love cheese.",
    "options": [
      "cows",
      "mice",
      "horses",
      "sheep"
    ],
    "answer": 1,
    "cn": "老鼠長什麼樣子？ — 牠們小小的、灰色的，有長長的尾巴。",
    "vocabIndex": 13
  },
  {
    "q": "______ look like mice, but they are much bigger. They often live in dirty places.",
    "options": [
      "Cows",
      "Pigs",
      "Rats",
      "Goats"
    ],
    "answer": 2,
    "cn": "大老鼠長什麼樣子？ — 牠們看起來像大隻的老鼠，牠們很髒。",
    "vocabIndex": 14
  },
  {
    "q": "A ______ gives us milk. Farmers keep this big animal on their farms.",
    "options": [
      "cow",
      "pig",
      "horse",
      "hen"
    ],
    "answer": 0,
    "cn": "母牛長什麼樣子？ — 牠是黑白色的，牠給我們牛奶。",
    "vocabIndex": 15
  },
  {
    "q": "In the past, farmers used an ______ to pull heavy things in the fields. It is a strong male cow.",
    "options": [
      "ant",
      "elephant",
      "ox",
      "insect"
    ],
    "answer": 2,
    "cn": "公牛長什麼樣子？ — 牠又大又強壯，牠幫助農夫。",
    "vocabIndex": 16
  },
  {
    "q": "Cowboys ride ______. These big animals can run very fast.",
    "options": [
      "pigs",
      "horses",
      "goats",
      "sheep"
    ],
    "answer": 1,
    "cn": "馬長什麼樣子？ — 牠們很高，有長長的腿，牠們跑得很快。",
    "vocabIndex": 17
  },
  {
    "q": "A ______ is a fat farm animal with a flat nose. We get pork from it.",
    "options": [
      "pig",
      "cow",
      "goat",
      "horse"
    ],
    "answer": 0,
    "cn": "豬長什麼樣子？ — 牠是粉紅色的、胖胖的，有一條短尾巴。",
    "vocabIndex": 18
  },
  {
    "q": "______ have horns and little beards. They can climb steep hills very well.",
    "options": [
      "Pigs",
      "Ducks",
      "Horses",
      "Goats"
    ],
    "answer": 3,
    "cn": "山羊長什麼樣子？ — 牠們是白色的，牠們住在山丘上吃草。",
    "vocabIndex": 19
  },
  {
    "q": "Farmers keep ______ for their wool. We make warm sweaters from it.",
    "options": [
      "pigs",
      "horses",
      "sheep",
      "ducks"
    ],
    "answer": 2,
    "cn": "綿羊長什麼樣子？ — 牠們白白的、軟軟的，在農場吃草。",
    "vocabIndex": 20
  },
  {
    "q": "Most ______ can fly. They have wings and feathers, and they lay eggs.",
    "options": [
      "birds",
      "fish",
      "snakes",
      "turtles"
    ],
    "answer": 0,
    "cn": "鳥會飛嗎？ — 會，牠們在天空飛。",
    "vocabIndex": 21
  },
  {
    "q": "A ______ sleeps in the day and flies at night. It looks like a mouse with wings.",
    "options": [
      "bee",
      "bat",
      "butterfly",
      "duck"
    ],
    "answer": 1,
    "cn": "蝙蝠會飛嗎？ — 會，牠在晚上飛。",
    "vocabIndex": 22
  },
  {
    "q": "______ fly from flower to flower and make honey. Be careful, or they may sting you.",
    "options": [
      "Bats",
      "Ducks",
      "Ants",
      "Bees"
    ],
    "answer": 3,
    "cn": "蜜蜂會飛嗎？ — 會，牠們會製造蜂蜜。",
    "vocabIndex": 23
  },
  {
    "q": "A ______ is an insect with big, colorful wings. It flies from flower to flower.",
    "options": [
      "spider",
      "butterfly",
      "frog",
      "turtle"
    ],
    "answer": 1,
    "cn": "這隻蝴蝶會飛嗎？ — 會，牠正在花朵上方飛。",
    "vocabIndex": 24
  },
  {
    "q": "A ______ swims on the pond and says \"quack, quack.\"",
    "options": [
      "frog",
      "turtle",
      "hen",
      "duck"
    ],
    "answer": 3,
    "cn": "鴨子會游泳嗎？ — 會，牠在池塘裡游泳。",
    "vocabIndex": 25
  },
  {
    "q": "______ look like ducks, but they are bigger and have longer necks.",
    "options": [
      "Hens",
      "Frogs",
      "Geese",
      "Bats"
    ],
    "answer": 2,
    "cn": "鵝會游泳嗎？ — 會，牠們在湖裡游泳。",
    "vocabIndex": 26
  },
  {
    "q": "______ live in water. They swim with their tails and can't live on land.",
    "options": [
      "Fish",
      "Birds",
      "Bats",
      "Spiders"
    ],
    "answer": 0,
    "cn": "魚會飛嗎？ — 不會，但是牠們會游泳。",
    "vocabIndex": 27
  },
  {
    "q": "A ______ is a small green animal. It lives near water, jumps well, and eats insects.",
    "options": [
      "turtle",
      "frog",
      "snake",
      "duck"
    ],
    "answer": 1,
    "cn": "青蛙會游泳嗎？ — 會，牠也會跳。",
    "vocabIndex": 28
  },
  {
    "q": "A ______ walks very slowly and carries a hard shell on its back.",
    "options": [
      "turtle",
      "frog",
      "snake",
      "rabbit"
    ],
    "answer": 0,
    "cn": "烏龜可以跑得很快嗎？ — 不行，牠走得很慢。",
    "vocabIndex": 29
  },
  {
    "q": "A ______ has a long body and no legs. Some are very dangerous.",
    "options": [
      "frog",
      "turtle",
      "snake",
      "spider"
    ],
    "answer": 2,
    "cn": "蛇會走路嗎？ — 不會，牠沒有腳。",
    "vocabIndex": 30
  },
  {
    "q": "An ______ has six legs. Ants, bees, and butterflies are good examples.",
    "options": [
      "ox",
      "elephant",
      "animal",
      "insect"
    ],
    "answer": 3,
    "cn": "昆蟲有幾隻腳？ — 牠有六隻腳。",
    "vocabIndex": 31
  },
  {
    "q": "______ are tiny insects. They live in big groups and carry food back to their home in a long line.",
    "options": [
      "Bats",
      "Frogs",
      "Ants",
      "Hens"
    ],
    "answer": 2,
    "cn": "螞蟻有幾隻腳？ — 牠們有六隻腳，牠們是昆蟲。",
    "vocabIndex": 32
  },
  {
    "q": "There are many little ______ in the garden. Some eat the leaves of our vegetables.",
    "options": [
      "pets",
      "bugs",
      "cages",
      "tails"
    ],
    "answer": 1,
    "cn": "牠們有幾隻腳？ — 這些小蟲有六隻腳。",
    "vocabIndex": 33
  },
  {
    "q": "A ______ has eight legs. It makes a web to catch flies.",
    "options": [
      "spider",
      "frog",
      "bee",
      "bat"
    ],
    "answer": 0,
    "cn": "蜘蛛有幾隻腳？ — 牠有八隻腳，牠不是昆蟲。",
    "vocabIndex": 34
  },
  {
    "q": "Farmers keep ______ for their eggs and meat. These birds can't fly well.",
    "options": [
      "pigs",
      "goats",
      "sheep",
      "chickens"
    ],
    "answer": 3,
    "cn": "雞有幾隻腳？ — 牠們有兩隻腳，牠們飛不太好。",
    "vocabIndex": 35
  },
  {
    "q": "______ lay eggs, and they take care of their baby chicks.",
    "options": [
      "Hens",
      "Cows",
      "Pigs",
      "Goats"
    ],
    "answer": 0,
    "cn": "你爺爺有幾隻母雞？ — 他有十隻母雞，牠們給我們蛋。",
    "vocabIndex": 36
  },
  {
    "q": "The elephant is the biggest ______ on land.",
    "options": [
      "insect",
      "animal",
      "bird",
      "fish"
    ],
    "answer": 1,
    "cn": "你最喜歡什麼動物？ — 我最喜歡狗，牠們很友善。",
    "vocabIndex": 37
  },
  {
    "q": "I want to keep a ______, like a dog or a cat. I will feed it and play with it every day.",
    "options": [
      "cage",
      "tail",
      "pet",
      "bug"
    ],
    "answer": 2,
    "cn": "你有養寵物嗎？ — 有，我養了一隻小貓。",
    "vocabIndex": 38
  },
  {
    "q": "______ like to catch mice. They say \"meow\" and sleep a lot in the day.",
    "options": [
      "Dogs",
      "Hens",
      "Frogs",
      "Cats"
    ],
    "answer": 3,
    "cn": "你姊姊喜歡什麼動物？ — 她喜歡貓，她有一隻黑貓。",
    "vocabIndex": 39
  },
  {
    "q": "My ______ barks when a stranger comes to the door. I walk it in the park every evening.",
    "options": [
      "cat",
      "hen",
      "dog",
      "frog"
    ],
    "answer": 2,
    "cn": "湯姆有養寵物嗎？ — 有，他養了一隻狗，牠很友善。",
    "vocabIndex": 40
  },
  {
    "q": "Our dog had a baby last week. The little ______ is so small and cute.",
    "options": [
      "puppy",
      "hen",
      "frog",
      "bat"
    ],
    "answer": 0,
    "cn": "艾美喜歡她的新小狗嗎？ — 喜歡，牠非常可愛。",
    "vocabIndex": 41
  },
  {
    "q": "The bird lives in a ______ in the living room. It sings to us every morning.",
    "options": [
      "tail",
      "pet",
      "bug",
      "cage"
    ],
    "answer": 3,
    "cn": "你把你的鳥養在哪裡？ — 我把牠養在籠子裡。",
    "vocabIndex": 42
  },
  {
    "q": "Don't touch that dog. It may ______ you with its sharp teeth.",
    "options": [
      "ride",
      "bite",
      "cross",
      "blow"
    ],
    "answer": 1,
    "cn": "你的狗會咬人嗎？ — 不會，牠從不咬人。",
    "vocabIndex": 43
  }
];

const LOOKUP = {
  "zebra": {
    "pos": "n.",
    "en_def": "an animal like a horse with black and white stripes",
    "cn_def": "斑馬"
  },
  "rabbit": {
    "pos": "n.",
    "en_def": "a small animal with long ears that hops",
    "cn_def": "兔子"
  },
  "lion": {
    "pos": "n.",
    "en_def": "a big wild cat; the male has long hair around its head",
    "cn_def": "獅子"
  },
  "turtle": {
    "pos": "n.",
    "en_def": "an animal with a hard shell on its back that moves slowly",
    "cn_def": "烏龜"
  },
  "bear": {
    "pos": "n.",
    "en_def": "a big, strong wild animal with thick fur",
    "cn_def": "熊"
  },
  "fox": {
    "pos": "n.",
    "en_def": "a wild animal like a small dog with a big thick tail",
    "cn_def": "狐狸"
  },
  "tiger": {
    "pos": "n.",
    "en_def": "a big wild cat with orange fur and black stripes",
    "cn_def": "老虎"
  },
  "monkey": {
    "pos": "n.",
    "en_def": "an animal with a long tail that climbs trees",
    "cn_def": "猴子"
  },
  "pig": {
    "pos": "n.",
    "en_def": "a fat farm animal with a flat nose and a short tail",
    "cn_def": "豬"
  },
  "cow": {
    "pos": "n.",
    "en_def": "a big farm animal that gives us milk",
    "cn_def": "母牛"
  },
  "ox": {
    "pos": "n.",
    "en_def": "a big, strong male cow that pulls heavy things on a farm",
    "cn_def": "公牛"
  },
  "ant": {
    "pos": "n.",
    "en_def": "a very small insect that lives in big groups",
    "cn_def": "螞蟻"
  },
  "elephant": {
    "pos": "n.",
    "en_def": "a very big gray animal with a long nose and big ears",
    "cn_def": "大象"
  },
  "insect": {
    "pos": "n.",
    "en_def": "a very small animal with six legs, like an ant or a bee",
    "cn_def": "昆蟲"
  },
  "kangaroo": {
    "pos": "n.",
    "en_def": "an animal from Australia that jumps and carries its baby in a pocket",
    "cn_def": "袋鼠"
  },
  "koala": {
    "pos": "n.",
    "en_def": "a gray animal from Australia that lives in trees and looks like a small bear",
    "cn_def": "無尾熊"
  },
  "hippo": {
    "pos": "n.",
    "en_def": "a big, heavy animal with short legs that lives in rivers in Africa",
    "cn_def": "河馬"
  },
  "tigers": {
    "pos": "n.",
    "en_def": "a big wild cat with orange fur and black stripes",
    "cn_def": "老虎"
  },
  "zebras": {
    "pos": "n.",
    "en_def": "an animal like a horse with black and white stripes",
    "cn_def": "斑馬"
  },
  "lions": {
    "pos": "n.",
    "en_def": "a big wild cat; the male has long hair around its head",
    "cn_def": "獅子"
  },
  "bears": {
    "pos": "n.",
    "en_def": "a big, strong wild animal with thick fur",
    "cn_def": "熊"
  },
  "monkeys": {
    "pos": "n.",
    "en_def": "an animal with a long tail that climbs trees",
    "cn_def": "猴子"
  },
  "hippos": {
    "pos": "n.",
    "en_def": "a big, heavy animal with short legs that lives in rivers in Africa",
    "cn_def": "河馬"
  },
  "turtles": {
    "pos": "n.",
    "en_def": "an animal with a hard shell on its back that moves slowly",
    "cn_def": "烏龜"
  },
  "dragon": {
    "pos": "n.",
    "en_def": "a big animal in stories that has wings and can breathe fire",
    "cn_def": "龍"
  },
  "snake": {
    "pos": "n.",
    "en_def": "a long, thin animal with no legs",
    "cn_def": "蛇"
  },
  "frog": {
    "pos": "n.",
    "en_def": "a small green animal that jumps and lives near water",
    "cn_def": "青蛙"
  },
  "cage": {
    "pos": "n.",
    "en_def": "a box made of bars for keeping birds or animals in",
    "cn_def": "籠子"
  },
  "pet": {
    "pos": "n.",
    "en_def": "an animal that you keep at home",
    "cn_def": "寵物"
  },
  "bug": {
    "pos": "n.",
    "en_def": "a small insect",
    "cn_def": "小蟲"
  },
  "tail": {
    "pos": "n.",
    "en_def": "the long part at the back end of an animal's body",
    "cn_def": "尾巴"
  },
  "cows": {
    "pos": "n.",
    "en_def": "a big farm animal that gives us milk",
    "cn_def": "母牛"
  },
  "mice": {
    "pos": "n.",
    "en_def": "a very small animal with a long tail that likes cheese",
    "cn_def": "老鼠"
  },
  "horses": {
    "pos": "n.",
    "en_def": "a big animal that people ride",
    "cn_def": "馬"
  },
  "sheep": {
    "pos": "n.",
    "en_def": "a farm animal with thick wool",
    "cn_def": "綿羊"
  },
  "pigs": {
    "pos": "n.",
    "en_def": "a fat farm animal with a flat nose and a short tail",
    "cn_def": "豬"
  },
  "rats": {
    "pos": "n.",
    "en_def": "an animal like a mouse, but bigger",
    "cn_def": "（大）老鼠"
  },
  "goats": {
    "pos": "n.",
    "en_def": "a farm animal with horns and a little beard",
    "cn_def": "山羊"
  },
  "horse": {
    "pos": "n.",
    "en_def": "a big animal that people ride",
    "cn_def": "馬"
  },
  "hen": {
    "pos": "n.",
    "en_def": "a female chicken",
    "cn_def": "母雞"
  },
  "goat": {
    "pos": "n.",
    "en_def": "a farm animal with horns and a little beard",
    "cn_def": "山羊"
  },
  "ducks": {
    "pos": "n.",
    "en_def": "a bird that swims and says \"quack\"",
    "cn_def": "鴨"
  },
  "birds": {
    "pos": "n.",
    "en_def": "an animal with wings and feathers",
    "cn_def": "鳥"
  },
  "fish": {
    "pos": "n.",
    "en_def": "an animal that lives in water; its meat",
    "cn_def": "魚；魚肉"
  },
  "snakes": {
    "pos": "n.",
    "en_def": "a long, thin animal with no legs",
    "cn_def": "蛇"
  },
  "bee": {
    "pos": "n.",
    "en_def": "a yellow and black insect that makes honey",
    "cn_def": "蜜蜂"
  },
  "bat": {
    "pos": "n.",
    "en_def": "a small animal like a mouse with wings that flies at night",
    "cn_def": "蝙蝠"
  },
  "butterfly": {
    "pos": "n.",
    "en_def": "an insect with big, colorful wings",
    "cn_def": "蝴蝶"
  },
  "duck": {
    "pos": "n.",
    "en_def": "a bird that swims and says \"quack\"",
    "cn_def": "鴨"
  },
  "bats": {
    "pos": "n.",
    "en_def": "a small animal like a mouse with wings that flies at night",
    "cn_def": "蝙蝠"
  },
  "ants": {
    "pos": "n.",
    "en_def": "a very small insect that lives in big groups",
    "cn_def": "螞蟻"
  },
  "bees": {
    "pos": "n.",
    "en_def": "a yellow and black insect that makes honey",
    "cn_def": "蜜蜂"
  },
  "spider": {
    "pos": "n.",
    "en_def": "a small animal with eight legs that makes a web",
    "cn_def": "蜘蛛"
  },
  "hens": {
    "pos": "n.",
    "en_def": "a female chicken",
    "cn_def": "母雞"
  },
  "frogs": {
    "pos": "n.",
    "en_def": "a small green animal that jumps and lives near water",
    "cn_def": "青蛙"
  },
  "geese": {
    "pos": "n.",
    "en_def": "a big bird like a duck with a long neck",
    "cn_def": "鵝"
  },
  "spiders": {
    "pos": "n.",
    "en_def": "a small animal with eight legs that makes a web",
    "cn_def": "蜘蛛"
  },
  "animal": {
    "pos": "n.",
    "en_def": "a living thing that can move, like a dog, a bird, or a fish",
    "cn_def": "動物"
  },
  "pets": {
    "pos": "n.",
    "en_def": "an animal that you keep at home",
    "cn_def": "寵物"
  },
  "bugs": {
    "pos": "n.",
    "en_def": "a small insect",
    "cn_def": "小蟲"
  },
  "cages": {
    "pos": "n.",
    "en_def": "a box made of bars for keeping birds or animals in",
    "cn_def": "籠子"
  },
  "tails": {
    "pos": "n.",
    "en_def": "the long part at the back end of an animal's body",
    "cn_def": "尾巴"
  },
  "chickens": {
    "pos": "n.",
    "en_def": "a farm bird that people keep for eggs and meat",
    "cn_def": "雞；小雞"
  },
  "bird": {
    "pos": "n.",
    "en_def": "an animal with wings and feathers",
    "cn_def": "鳥"
  },
  "dogs": {
    "pos": "n.",
    "en_def": "a pet animal that barks",
    "cn_def": "狗"
  },
  "cats": {
    "pos": "n.",
    "en_def": "a small pet animal that says \"meow\"",
    "cn_def": "貓"
  },
  "cat": {
    "pos": "n.",
    "en_def": "a small pet animal that says \"meow\"",
    "cn_def": "貓"
  },
  "dog": {
    "pos": "n.",
    "en_def": "a pet animal that barks",
    "cn_def": "狗"
  },
  "puppy": {
    "pos": "n.",
    "en_def": "a baby dog",
    "cn_def": "小狗"
  },
  "ride": {
    "pos": "v.",
    "en_def": "to sit on a bike, a horse, or a scooter and make it go",
    "cn_def": "騎"
  },
  "bite": {
    "pos": "v.",
    "en_def": "to cut something with your teeth",
    "cn_def": "咬"
  },
  "cross": {
    "pos": "v.",
    "en_def": "to go from one side of a road or river to the other",
    "cn_def": "越過"
  },
  "blow": {
    "pos": "v.",
    "en_def": "(of wind or air) to move; to send air out of your mouth",
    "cn_def": "吹"
  }
};

const EXTRA_GLOSSES = {};
