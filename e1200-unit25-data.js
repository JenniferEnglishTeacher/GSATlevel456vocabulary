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
    "q": "Q: What animal is it? It is the king of the animals. — A: It's a ______. It has a big head and a lot of hair.【獅子】",
    "options": [
      "lion",
      "turtle",
      "bear",
      "cow"
    ],
    "answer": 0,
    "cn": "這是什麼動物？牠是萬獸之王。 — 牠是獅子，牠有大大的頭和很多毛。",
    "vocabIndex": 0
  },
  {
    "q": "Q: What animal is it? It has black and orange lines. — A: It's a ______. It can run very fast.【老虎】",
    "options": [
      "duck",
      "tiger",
      "dragon",
      "puppy"
    ],
    "answer": 1,
    "cn": "這是什麼動物？牠身上有黑色和橘色的條紋。 — 牠是老虎，牠可以跑得很快。",
    "vocabIndex": 1
  },
  {
    "q": "Q: What animal is it? It is big and brown. It likes honey. — A: It's a ______. Don't go near it.【熊】",
    "options": [
      "hippo",
      "geese",
      "bear",
      "snake"
    ],
    "answer": 2,
    "cn": "這是什麼動物？牠又大又是棕色的，牠喜歡蜂蜜。 — 牠是熊，不要靠近牠。",
    "vocabIndex": 2
  },
  {
    "q": "Q: What animal is it? It looks like a dog, and it is very smart. — A: It's a ______. It has a big tail.【狐狸】",
    "options": [
      "elephant",
      "pig",
      "animal",
      "fox"
    ],
    "answer": 3,
    "cn": "這是什麼動物？牠看起來像狗，而且很聰明。 — 牠是狐狸，牠有一條大尾巴。",
    "vocabIndex": 3
  },
  {
    "q": "Q: What animal is it? It has a long nose and big ears. — A: It's an ______. It is very big and heavy.【大象】",
    "options": [
      "duck",
      "butterfly",
      "elephant",
      "fox"
    ],
    "answer": 2,
    "cn": "這是什麼動物？牠有長鼻子和大耳朵。 — 牠是大象，牠又大又重。",
    "vocabIndex": 4
  },
  {
    "q": "Q: What animal is it? It has a big mouth and lives in the river. — A: It's a ______. It is fat and heavy.【河馬】",
    "options": [
      "hippo",
      "butterfly",
      "animal",
      "fox"
    ],
    "answer": 0,
    "cn": "這是什麼動物？牠有一張大嘴巴，住在河裡。 — 牠是河馬，牠又胖又重。",
    "vocabIndex": 5
  },
  {
    "q": "Q: What animals are they? They are black and white. — A: They are ______. They look like horses.【斑馬】",
    "options": [
      "bees",
      "zebras",
      "hens",
      "chickens"
    ],
    "answer": 1,
    "cn": "這些是什麼動物？牠們是黑白相間的。 — 牠們是斑馬，牠們看起來像馬。",
    "vocabIndex": 6
  },
  {
    "q": "Q: What animals are they? They like bananas. — A: They are ______. They can climb trees.【猴子】",
    "options": [
      "horses",
      "birds",
      "ants",
      "monkeys"
    ],
    "answer": 3,
    "cn": "這些是什麼動物？牠們喜歡香蕉。 — 牠們是猴子，牠們會爬樹。",
    "vocabIndex": 7
  },
  {
    "q": "Q: What animal is it? It can jump very high. — A: It's a ______. It has a baby in its pocket.【袋鼠】",
    "options": [
      "frog",
      "kangaroo",
      "hippo",
      "koala"
    ],
    "answer": 1,
    "cn": "這是什麼動物？牠可以跳得很高。 — 牠是袋鼠，牠的口袋裡有一隻寶寶。",
    "vocabIndex": 8
  },
  {
    "q": "Q: What animal is it? It sleeps in the tree all day. — A: It's a ______. It looks like a little bear.【無尾熊】",
    "options": [
      "puppy",
      "tail",
      "koala",
      "sheep"
    ],
    "answer": 2,
    "cn": "這是什麼動物？牠整天在樹上睡覺。 — 牠是無尾熊，牠看起來像一隻小熊。",
    "vocabIndex": 9
  },
  {
    "q": "Q: What animal is it? It can fly, and it is in many Chinese stories. — A: It's a ______. It isn't a real animal.【龍】",
    "options": [
      "spider",
      "turtle",
      "insect",
      "dragon"
    ],
    "answer": 3,
    "cn": "這是什麼動物？牠會飛，而且出現在很多中國故事裡。 — 牠是龍，牠不是真的動物。",
    "vocabIndex": 10
  },
  {
    "q": "Q: What does a ______ look like? — A: It has long ears and a short tail. It eats vegetables.【兔子】",
    "options": [
      "rabbit",
      "animal",
      "fox",
      "elephant"
    ],
    "answer": 0,
    "cn": "兔子長什麼樣子？ — 牠有長耳朵和短尾巴，牠吃蔬菜。",
    "vocabIndex": 11
  },
  {
    "q": "Q: What does your dog look like? — A: It's white, and it has a long ______.【尾巴】",
    "options": [
      "dog",
      "snake",
      "tiger",
      "tail"
    ],
    "answer": 3,
    "cn": "你的狗長什麼樣子？ — 牠是白色的，有一條長尾巴。",
    "vocabIndex": 12
  },
  {
    "q": "Q: What do ______ look like? — A: They are small and gray. They have long tails.【老鼠】",
    "options": [
      "geese",
      "mice",
      "koala",
      "insect"
    ],
    "answer": 1,
    "cn": "老鼠長什麼樣子？ — 牠們小小的、灰色的，有長長的尾巴。",
    "vocabIndex": 13
  },
  {
    "q": "Q: What do ______ look like? — A: They look like big mice. They are dirty.【（大）老鼠】",
    "options": [
      "rats",
      "hens",
      "monkeys",
      "goats"
    ],
    "answer": 0,
    "cn": "大老鼠長什麼樣子？ — 牠們看起來像大隻的老鼠，牠們很髒。",
    "vocabIndex": 14
  },
  {
    "q": "Q: What does a ______ look like? — A: It is black and white. It gives us milk.【母牛】",
    "options": [
      "lion",
      "insect",
      "cow",
      "elephant"
    ],
    "answer": 2,
    "cn": "母牛長什麼樣子？ — 牠是黑白色的，牠給我們牛奶。",
    "vocabIndex": 15
  },
  {
    "q": "Q: What does an ______ look like? — A: It is big and strong. It helps farmers.【公牛】",
    "options": [
      "ox",
      "dog",
      "tiger",
      "fox"
    ],
    "answer": 0,
    "cn": "公牛長什麼樣子？ — 牠又大又強壯，牠幫助農夫。",
    "vocabIndex": 16
  },
  {
    "q": "Q: What do ______ look like? — A: They are tall, and they have long legs. They run fast.【馬】",
    "options": [
      "rats",
      "hens",
      "horses",
      "chickens"
    ],
    "answer": 2,
    "cn": "馬長什麼樣子？ — 牠們很高，有長長的腿，牠們跑得很快。",
    "vocabIndex": 17
  },
  {
    "q": "Q: What does a ______ look like? — A: It is pink and fat. It has a short tail.【豬】",
    "options": [
      "geese",
      "pig",
      "cow",
      "fox"
    ],
    "answer": 1,
    "cn": "豬長什麼樣子？ — 牠是粉紅色的、胖胖的，有一條短尾巴。",
    "vocabIndex": 18
  },
  {
    "q": "Q: What do ______ look like? — A: They are white. They live on the hill and eat grass.【山羊】",
    "options": [
      "ants",
      "bees",
      "rats",
      "goats"
    ],
    "answer": 3,
    "cn": "山羊長什麼樣子？ — 牠們是白色的，牠們住在山丘上吃草。",
    "vocabIndex": 19
  },
  {
    "q": "Q: What do ______ look like? — A: They are white and soft. They eat grass on the farm.【綿羊】",
    "options": [
      "tail",
      "sheep",
      "elephant",
      "bat"
    ],
    "answer": 1,
    "cn": "綿羊長什麼樣子？ — 牠們白白的、軟軟的，在農場吃草。",
    "vocabIndex": 20
  },
  {
    "q": "Q: Can ______ fly? — A: Yes, they can. They fly in the sky.【鳥】",
    "options": [
      "birds",
      "cats",
      "chickens",
      "bees"
    ],
    "answer": 0,
    "cn": "鳥會飛嗎？ — 會，牠們在天空飛。",
    "vocabIndex": 21
  },
  {
    "q": "Q: Can a ______ fly? — A: Yes, it can. It flies at night.【蝙蝠】",
    "options": [
      "hippo",
      "bear",
      "bat",
      "turtle"
    ],
    "answer": 2,
    "cn": "蝙蝠會飛嗎？ — 會，牠在晚上飛。",
    "vocabIndex": 22
  },
  {
    "q": "Q: Can ______ fly? — A: Yes, they can. They make honey.【蜜蜂】",
    "options": [
      "horses",
      "goats",
      "birds",
      "bees"
    ],
    "answer": 3,
    "cn": "蜜蜂會飛嗎？ — 會，牠們會製造蜂蜜。",
    "vocabIndex": 23
  },
  {
    "q": "Q: Can the ______ fly? — A: Yes, it can. It is flying over the flowers.【蝴蝶】",
    "options": [
      "geese",
      "pet",
      "butterfly",
      "lion"
    ],
    "answer": 2,
    "cn": "這隻蝴蝶會飛嗎？ — 會，牠正在花朵上方飛。",
    "vocabIndex": 24
  },
  {
    "q": "Q: Can a ______ swim? — A: Yes, it can. It swims in the pond.【鴨】",
    "options": [
      "pig",
      "duck",
      "bear",
      "fish"
    ],
    "answer": 1,
    "cn": "鴨子會游泳嗎？ — 會，牠在池塘裡游泳。",
    "vocabIndex": 25
  },
  {
    "q": "Q: Can ______ swim? — A: Yes, they can. They swim in the lake.【鵝】",
    "options": [
      "geese",
      "tiger",
      "elephant",
      "fish"
    ],
    "answer": 0,
    "cn": "鵝會游泳嗎？ — 會，牠們在湖裡游泳。",
    "vocabIndex": 26
  },
  {
    "q": "Q: Can ______ fly? — A: No, they can't. But they can swim.【魚】",
    "options": [
      "dog",
      "mice",
      "duck",
      "fish"
    ],
    "answer": 3,
    "cn": "魚會飛嗎？ — 不會，但是牠們會游泳。",
    "vocabIndex": 27
  },
  {
    "q": "Q: Can a ______ swim? — A: Yes, it can. It can jump, too.【青蛙】",
    "options": [
      "tail",
      "frog",
      "pig",
      "fox"
    ],
    "answer": 1,
    "cn": "青蛙會游泳嗎？ — 會，牠也會跳。",
    "vocabIndex": 28
  },
  {
    "q": "Q: Can a ______ run fast? — A: No, it can't. It walks very slowly.【烏龜】",
    "options": [
      "pig",
      "hippo",
      "rabbit",
      "turtle"
    ],
    "answer": 3,
    "cn": "烏龜可以跑得很快嗎？ — 不行，牠走得很慢。",
    "vocabIndex": 29
  },
  {
    "q": "Q: Can a ______ walk? — A: No, it can't. It has no legs.【蛇】",
    "options": [
      "snake",
      "ox",
      "koala",
      "animal"
    ],
    "answer": 0,
    "cn": "蛇會走路嗎？ — 不會，牠沒有腳。",
    "vocabIndex": 30
  },
  {
    "q": "Q: How many legs does an ______ have? — A: It has six legs.【昆蟲】",
    "options": [
      "ox",
      "dragon",
      "insect",
      "fish"
    ],
    "answer": 2,
    "cn": "昆蟲有幾隻腳？ — 牠有六隻腳。",
    "vocabIndex": 31
  },
  {
    "q": "Q: How many legs do ______ have? — A: They have six legs. They are insects.【螞蟻】",
    "options": [
      "birds",
      "rats",
      "chickens",
      "ants"
    ],
    "answer": 3,
    "cn": "螞蟻有幾隻腳？ — 牠們有六隻腳，牠們是昆蟲。",
    "vocabIndex": 32
  },
  {
    "q": "Q: How many legs do they have? — A: These little ______ have six legs.【小蟲】",
    "options": [
      "bugs",
      "zebras",
      "ants",
      "rats"
    ],
    "answer": 0,
    "cn": "牠們有幾隻腳？ — 這些小蟲有六隻腳。",
    "vocabIndex": 33
  },
  {
    "q": "Q: How many legs does a ______ have? — A: It has eight legs. It isn't an insect.【蜘蛛】",
    "options": [
      "duck",
      "spider",
      "fish",
      "bat"
    ],
    "answer": 1,
    "cn": "蜘蛛有幾隻腳？ — 牠有八隻腳，牠不是昆蟲。",
    "vocabIndex": 34
  },
  {
    "q": "Q: How many legs do ______ have? — A: They have two legs. They can't fly well.【雞；小雞】",
    "options": [
      "zebras",
      "goats",
      "chickens",
      "ants"
    ],
    "answer": 2,
    "cn": "雞有幾隻腳？ — 牠們有兩隻腳，牠們飛不太好。",
    "vocabIndex": 35
  },
  {
    "q": "Q: How many hens does your grandpa have? — A: He has ten ______. They give us eggs.【母雞】",
    "options": [
      "ants",
      "chickens",
      "bugs",
      "hens"
    ],
    "answer": 3,
    "cn": "你爺爺有幾隻母雞？ — 他有十隻母雞，牠們給我們蛋。",
    "vocabIndex": 36
  },
  {
    "q": "Q: What ______ do you like best? — A: I like dogs best. They are friendly.【動物】",
    "options": [
      "dog",
      "cage",
      "animal",
      "hippo"
    ],
    "answer": 2,
    "cn": "你最喜歡什麼動物？ — 我最喜歡狗，牠們很友善。",
    "vocabIndex": 37
  },
  {
    "q": "Q: Do you have a ______? — A: Yes, I do. I have a little cat.【寵物】",
    "options": [
      "duck",
      "pet",
      "dog",
      "cow"
    ],
    "answer": 1,
    "cn": "你有養寵物嗎？ — 有，我養了一隻小貓。",
    "vocabIndex": 38
  },
  {
    "q": "Q: What animal does your sister like? — A: She likes ______. She has a black one.【貓】",
    "options": [
      "cats",
      "birds",
      "hens",
      "monkeys"
    ],
    "answer": 0,
    "cn": "你姊姊喜歡什麼動物？ — 她喜歡貓，她有一隻黑貓。",
    "vocabIndex": 39
  },
  {
    "q": "Q: Does Tom have a pet? — A: Yes, he does. He has a ______. It's very friendly.【狗】",
    "options": [
      "fish",
      "animal",
      "dog",
      "dragon"
    ],
    "answer": 2,
    "cn": "湯姆有養寵物嗎？ — 有，他養了一隻狗，牠很友善。",
    "vocabIndex": 40
  },
  {
    "q": "Q: Does Amy like her new ______? — A: Yes, she does. It's very cute.【小狗】",
    "options": [
      "puppy",
      "cage",
      "sheep",
      "turtle"
    ],
    "answer": 0,
    "cn": "艾美喜歡她的新小狗嗎？ — 喜歡，牠非常可愛。",
    "vocabIndex": 41
  },
  {
    "q": "Q: Where do you keep your bird? — A: I keep it in a ______.【籠子】",
    "options": [
      "butterfly",
      "cage",
      "pig",
      "snake"
    ],
    "answer": 1,
    "cn": "你把你的鳥養在哪裡？ — 我把牠養在籠子裡。",
    "vocabIndex": 42
  },
  {
    "q": "Q: Does your dog ______? — A: No, it doesn't. It never bites people.【咬】",
    "options": [
      "run",
      "cook",
      "fell",
      "bite"
    ],
    "answer": 3,
    "cn": "你的狗會咬人嗎？ — 不會，牠從不咬人。",
    "vocabIndex": 43
  }
];

const LOOKUP = {
  "fish": {
    "pos": "n.",
    "en_def": "an animal that lives in water; its meat",
    "cn_def": "魚；魚肉"
  },
  "cook": {
    "pos": "v.",
    "en_def": "to make food ready to eat by heating it",
    "cn_def": "煮飯；烹調"
  },
  "run": {
    "pos": "v.",
    "en_def": "to move very fast on your legs",
    "cn_def": "跑步"
  },
  "lion": {
    "pos": "n.",
    "en_def": "a big wild cat; the male has long hair around its head",
    "cn_def": "獅子"
  },
  "tiger": {
    "pos": "n.",
    "en_def": "a big wild cat with orange fur and black stripes",
    "cn_def": "老虎"
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
  "elephant": {
    "pos": "n.",
    "en_def": "a very big gray animal with a long nose and big ears",
    "cn_def": "大象"
  },
  "hippo": {
    "pos": "n.",
    "en_def": "a big, heavy animal with short legs that lives in rivers in Africa",
    "cn_def": "河馬"
  },
  "zebras": {
    "pos": "n.",
    "en_def": "an animal like a horse with black and white stripes",
    "cn_def": "斑馬"
  },
  "monkeys": {
    "pos": "n.",
    "en_def": "an animal with a long tail that climbs trees",
    "cn_def": "猴子"
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
  "dragon": {
    "pos": "n.",
    "en_def": "a big animal in stories that has wings and can breathe fire",
    "cn_def": "龍"
  },
  "rabbit": {
    "pos": "n.",
    "en_def": "a small animal with long ears that hops",
    "cn_def": "兔子"
  },
  "tail": {
    "pos": "n.",
    "en_def": "the long part at the back end of an animal's body",
    "cn_def": "尾巴"
  },
  "mice": {
    "pos": "n.",
    "en_def": "a very small animal with a long tail that likes cheese",
    "cn_def": "老鼠"
  },
  "rats": {
    "pos": "n.",
    "en_def": "an animal like a mouse, but bigger",
    "cn_def": "（大）老鼠"
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
  "horses": {
    "pos": "n.",
    "en_def": "a big animal that people ride",
    "cn_def": "馬"
  },
  "pig": {
    "pos": "n.",
    "en_def": "a fat farm animal with a flat nose and a short tail",
    "cn_def": "豬"
  },
  "goats": {
    "pos": "n.",
    "en_def": "a farm animal with horns and a little beard",
    "cn_def": "山羊"
  },
  "sheep": {
    "pos": "n.",
    "en_def": "a farm animal with thick wool",
    "cn_def": "綿羊"
  },
  "birds": {
    "pos": "n.",
    "en_def": "an animal with wings and feathers",
    "cn_def": "鳥"
  },
  "bat": {
    "pos": "n.",
    "en_def": "a small animal like a mouse with wings that flies at night",
    "cn_def": "蝙蝠"
  },
  "bees": {
    "pos": "n.",
    "en_def": "a yellow and black insect that makes honey",
    "cn_def": "蜜蜂"
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
  "geese": {
    "pos": "n.",
    "en_def": "a big bird like a duck with a long neck",
    "cn_def": "鵝"
  },
  "frog": {
    "pos": "n.",
    "en_def": "a small green animal that jumps and lives near water",
    "cn_def": "青蛙"
  },
  "turtle": {
    "pos": "n.",
    "en_def": "an animal with a hard shell on its back that moves slowly",
    "cn_def": "烏龜"
  },
  "snake": {
    "pos": "n.",
    "en_def": "a long, thin animal with no legs",
    "cn_def": "蛇"
  },
  "insect": {
    "pos": "n.",
    "en_def": "a very small animal with six legs, like an ant or a bee",
    "cn_def": "昆蟲"
  },
  "ants": {
    "pos": "n.",
    "en_def": "a very small insect that lives in big groups",
    "cn_def": "螞蟻"
  },
  "bugs": {
    "pos": "n.",
    "en_def": "a small insect",
    "cn_def": "小蟲"
  },
  "spider": {
    "pos": "n.",
    "en_def": "a small animal with eight legs that makes a web",
    "cn_def": "蜘蛛"
  },
  "chickens": {
    "pos": "n.",
    "en_def": "a farm bird that people keep for eggs and meat",
    "cn_def": "雞；小雞"
  },
  "hens": {
    "pos": "n.",
    "en_def": "a female chicken",
    "cn_def": "母雞"
  },
  "animal": {
    "pos": "n.",
    "en_def": "a living thing that can move, like a dog, a bird, or a fish",
    "cn_def": "動物"
  },
  "pet": {
    "pos": "n.",
    "en_def": "an animal that you keep at home",
    "cn_def": "寵物"
  },
  "cats": {
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
  "cage": {
    "pos": "n.",
    "en_def": "a box made of bars for keeping birds or animals in",
    "cn_def": "籠子"
  },
  "bite": {
    "pos": "v.",
    "en_def": "to cut something with your teeth",
    "cn_def": "咬"
  },
  "fell": {
    "pos": "v.",
    "en_def": "to drop down to the ground",
    "cn_def": "跌倒；落下"
  }
};

const EXTRA_GLOSSES = {};
