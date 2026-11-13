// Unit 12 Quiz Data: Clothing & Accessories 衣物與配件（第12區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U12 - Clothing & Accessories",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "coat",
    "pos": "n.",
    "cn_def": "大衣",
    "en_def": "a long, warm piece of clothing you wear over other clothes when it is cold",
    "sentence": "Q: What are you wearing today? It's so cold. — A: I'm wearing a long {{BLANK}}. It's warm.",
    "cn": "你今天穿什麼？好冷喔。 — 我穿著一件長大衣，很暖和。"
  },
  {
    "word": "jacket",
    "pos": "n.",
    "cn_def": "夾克",
    "en_def": "a short coat",
    "sentence": "Q: What is your brother wearing? — A: He is wearing a black {{BLANK}}.",
    "cn": "你哥哥穿著什麼？ — 他穿著一件黑色夾克。"
  },
  {
    "word": "sweater",
    "pos": "n.",
    "cn_def": "毛衣",
    "en_def": "a warm piece of clothing with long sleeves for the top of your body",
    "sentence": "Q: What is Grandma wearing? — A: She is wearing a warm {{BLANK}}.",
    "cn": "奶奶穿著什麼？ — 她穿著一件保暖的毛衣。"
  },
  {
    "word": "dress",
    "pos": "n.",
    "cn_def": "洋裝",
    "en_def": "a piece of clothing for girls and women that covers the body and part of the legs",
    "sentence": "Q: What is Amy wearing to the party? — A: She is wearing a pink {{BLANK}}. She looks beautiful.",
    "cn": "艾美穿什麼去派對？ — 她穿著一件粉紅色洋裝，看起來很美。"
  },
  {
    "word": "skirt (skirts)",
    "pos": "n.",
    "cn_def": "裙子",
    "en_def": "a piece of clothing for girls and women that hangs from the waist",
    "sentence": "Q: What are the girls wearing? — A: They are wearing white shirts and blue {{BLANK}}.",
    "cn": "女孩們穿著什麼？ — 她們穿著白襯衫和藍裙子。"
  },
  {
    "word": "shirt",
    "pos": "n.",
    "cn_def": "襯衫",
    "en_def": "a piece of clothing for the top of your body, with buttons",
    "sentence": "Q: What is your dad wearing today? — A: He is wearing a white {{BLANK}} and a tie.",
    "cn": "你爸爸今天穿著什麼？ — 他穿著白襯衫，打著領帶。"
  },
  {
    "word": "T-shirt",
    "pos": "n.",
    "cn_def": "T恤",
    "en_def": "a shirt with short sleeves and no buttons",
    "sentence": "Q: What are you wearing? It's so hot! — A: I'm wearing a {{BLANK}} and shorts.",
    "cn": "你穿什麼？好熱喔！ — 我穿著T恤和短褲。"
  },
  {
    "word": "shorts",
    "pos": "n.",
    "cn_def": "短褲",
    "en_def": "short pants that end above the knees",
    "sentence": "Q: What is Ben wearing to the beach? — A: He is wearing {{BLANK}}.",
    "cn": "班穿什麼去海邊？ — 他穿著短褲。"
  },
  {
    "word": "pants",
    "pos": "n.",
    "cn_def": "長褲",
    "en_def": "clothing that covers your legs",
    "sentence": "Q: What are you wearing for the hike? — A: I'm wearing long {{BLANK}} and a jacket.",
    "cn": "你健行要穿什麼？ — 我穿長褲和一件夾克。"
  },
  {
    "word": "pocket (pockets)",
    "pos": "n.",
    "cn_def": "口袋",
    "en_def": "a small bag in your clothes for carrying things",
    "sentence": "Q: What is Tom wearing? — A: He is wearing a jacket with two big {{BLANK}}.",
    "cn": "湯姆穿著什麼？ — 他穿著一件有兩個大口袋的夾克。"
  },
  {
    "word": "clothes",
    "pos": "n.",
    "cn_def": "衣服",
    "en_def": "things that you wear, like shirts and pants",
    "sentence": "Q: What are the children wearing for Halloween? — A: They are wearing funny {{BLANK}}.",
    "cn": "孩子們萬聖節穿什麼？ — 他們穿著好笑的衣服。"
  },
  {
    "word": "uniform",
    "pos": "n.",
    "cn_def": "制服",
    "en_def": "special clothes that all students or workers in one place wear",
    "sentence": "Q: What do students wear at your school? — A: We wear a school {{BLANK}} every day.",
    "cn": "你們學校的學生穿什麼？ — 我們每天穿校服。"
  },
  {
    "word": "wear (wears)",
    "pos": "v.",
    "cn_def": "穿；戴",
    "en_def": "to have clothes, shoes, or glasses on your body",
    "sentence": "Q: What does your mom wear to work? — A: She {{BLANK}} a dress and a coat.",
    "cn": "你媽媽穿什麼去上班？ — 她穿洋裝和大衣。"
  },
  {
    "word": "bag",
    "pos": "n.",
    "cn_def": "袋子；包包",
    "en_def": "something made of cloth, paper, or plastic for carrying things",
    "sentence": "Q: Whose {{BLANK}} is this? It's on my desk. — A: It's mine. Thank you.",
    "cn": "這是誰的包包？它在我桌上。 — 是我的，謝謝你。"
  },
  {
    "word": "wallet",
    "pos": "n.",
    "cn_def": "皮夾",
    "en_def": "a small flat case for carrying money and cards",
    "sentence": "Q: Whose {{BLANK}} is this? There is money in it. — A: It's Dad's. He is looking for it.",
    "cn": "這是誰的皮夾？裡面有錢。 — 是爸爸的，他正在找它。"
  },
  {
    "word": "umbrella",
    "pos": "n.",
    "cn_def": "雨傘",
    "en_def": "a thing you hold over your head to stay dry in the rain",
    "sentence": "Q: Whose {{BLANK}} is this? It's wet. — A: It's Amy's. It's raining outside.",
    "cn": "這是誰的雨傘？它是濕的。 — 是艾美的，外面在下雨。"
  },
  {
    "word": "comb",
    "pos": "n.",
    "cn_def": "梳子",
    "en_def": "a thing with many thin teeth for making your hair neat",
    "sentence": "Q: Whose {{BLANK}} is this? — A: It's my sister's. She uses it every morning.",
    "cn": "這是誰的梳子？ — 是我妹妹的，她每天早上用它。"
  },
  {
    "word": "button",
    "pos": "n.",
    "cn_def": "鈕扣",
    "en_def": "a small round thing that closes a shirt or coat",
    "sentence": "Q: Whose {{BLANK}} is this? It's on the floor. — A: It's mine. It's from my shirt.",
    "cn": "這是誰的鈕扣？它在地板上。 — 是我的，是我襯衫上的。"
  },
  {
    "word": "cap",
    "pos": "n.",
    "cn_def": "棒球帽；便帽",
    "en_def": "a soft hat with a hard part at the front",
    "sentence": "Q: It's very sunny today. What should I do? — A: Put on your {{BLANK}}.",
    "cn": "今天太陽好大，我該怎麼辦？ — 戴上你的帽子。"
  },
  {
    "word": "hat",
    "pos": "n.",
    "cn_def": "帽子",
    "en_def": "something you wear on your head",
    "sentence": "Q: Does Ben wear a hat in class? — A: No, he doesn't. The teacher says, \"Take off your {{BLANK}}.\"",
    "cn": "班上課時戴帽子嗎？ — 不，他不戴。老師說：「把帽子脫下來。」"
  },
  {
    "word": "glove (gloves)",
    "pos": "n.",
    "cn_def": "手套",
    "en_def": "a piece of clothing that covers your hand and fingers",
    "sentence": "Q: Do your hands feel cold? — A: Yes, they do. Let me put on my {{BLANK}}.",
    "cn": "你的手覺得冷嗎？ — 是的，讓我戴上手套。"
  },
  {
    "word": "mask",
    "pos": "n.",
    "cn_def": "口罩；面具",
    "en_def": "something that covers your face or your nose and mouth",
    "sentence": "Q: I have a cold. What should I do? — A: Put on a {{BLANK}}, and drink a lot of water.",
    "cn": "我感冒了，我該怎麼辦？ — 戴上口罩，並且多喝水。"
  },
  {
    "word": "tie",
    "pos": "n.",
    "cn_def": "領帶",
    "en_def": "a long thin piece of cloth that men wear around the neck",
    "sentence": "Q: Dad, you're home! Are you tired? — A: Yes. Let me take off my {{BLANK}} and rest.",
    "cn": "爸，你回來了！你累了嗎？ — 是啊，讓我拿下領帶休息一下。"
  },
  {
    "word": "belt",
    "pos": "n.",
    "cn_def": "皮帶",
    "en_def": "a long thin piece of leather that you wear around your waist",
    "sentence": "Q: How much is this brown {{BLANK}}? — A: It is 350 dollars.",
    "cn": "這條咖啡色皮帶多少錢？ — 它是三百五十元。"
  },
  {
    "word": "ring",
    "pos": "n.",
    "cn_def": "戒指",
    "en_def": "a small circle of gold or silver that you wear on your finger",
    "sentence": "Q: How much does this gold {{BLANK}} cost? — A: It costs 5,000 dollars. It's expensive!",
    "cn": "這枚金戒指要多少錢？ — 它要五千元，好貴！"
  },
  {
    "word": "jeans",
    "pos": "n.",
    "cn_def": "牛仔褲",
    "en_def": "strong blue pants",
    "sentence": "Q: How much do these blue {{BLANK}} cost? — A: They cost 900 dollars.",
    "cn": "這件藍色牛仔褲要多少錢？ — 它要九百元。"
  },
  {
    "word": "shoes",
    "pos": "n.",
    "cn_def": "鞋子",
    "en_def": "things that you wear on your feet to walk outside",
    "sentence": "Q: How much are those black {{BLANK}}? — A: They are 1,200 dollars.",
    "cn": "那雙黑色鞋子多少錢？ — 它們是一千兩百元。"
  },
  {
    "word": "socks",
    "pos": "n.",
    "cn_def": "襪子",
    "en_def": "soft things that you wear on your feet inside your shoes",
    "sentence": "Q: How much does a pair of {{BLANK}} cost? — A: It costs 60 dollars.",
    "cn": "一雙襪子要多少錢？ — 一雙要六十元。"
  }
];

const MCQS = [
  {
    "q": "Q: What are you wearing today? It's so cold. — A: I'm wearing a long ______. It's warm.【大衣】",
    "options": [
      "coat",
      "tie",
      "belt",
      "uniform"
    ],
    "answer": 0,
    "cn": "你今天穿什麼？好冷喔。 — 我穿著一件長大衣，很暖和。",
    "vocabIndex": 0
  },
  {
    "q": "Q: What is your brother wearing? — A: He is wearing a black ______.【夾克】",
    "options": [
      "umbrella",
      "comb",
      "sweater",
      "jacket"
    ],
    "answer": 3,
    "cn": "你哥哥穿著什麼？ — 他穿著一件黑色夾克。",
    "vocabIndex": 1
  },
  {
    "q": "Q: What is Grandma wearing? — A: She is wearing a warm ______.【毛衣】",
    "options": [
      "uniform",
      "sweater",
      "tie",
      "wallet"
    ],
    "answer": 1,
    "cn": "奶奶穿著什麼？ — 她穿著一件保暖的毛衣。",
    "vocabIndex": 2
  },
  {
    "q": "Q: What is Amy wearing to the party? — A: She is wearing a pink ______. She looks beautiful.【洋裝】",
    "options": [
      "pants",
      "gloves",
      "dress",
      "pockets"
    ],
    "answer": 2,
    "cn": "艾美穿什麼去派對？ — 她穿著一件粉紅色洋裝，看起來很美。",
    "vocabIndex": 3
  },
  {
    "q": "Q: What are the girls wearing? — A: They are wearing white shirts and blue ______.【裙子】",
    "options": [
      "clothes",
      "pants",
      "shoes",
      "skirts"
    ],
    "answer": 3,
    "cn": "女孩們穿著什麼？ — 她們穿著白襯衫和藍裙子。",
    "vocabIndex": 4
  },
  {
    "q": "Q: What is your dad wearing today? — A: He is wearing a white ______ and a tie.【襯衫】",
    "options": [
      "shirt",
      "coat",
      "bag",
      "mask"
    ],
    "answer": 0,
    "cn": "你爸爸今天穿著什麼？ — 他穿著白襯衫，打著領帶。",
    "vocabIndex": 5
  },
  {
    "q": "Q: What are you wearing? It's so hot! — A: I'm wearing a ______ and shorts.【T恤】",
    "options": [
      "Uniform",
      "Coat",
      "T-shirt",
      "Comb"
    ],
    "answer": 2,
    "cn": "你穿什麼？好熱喔！ — 我穿著T恤和短褲。",
    "vocabIndex": 6
  },
  {
    "q": "Q: What is Ben wearing to the beach? — A: He is wearing ______.【短褲】",
    "options": [
      "dress",
      "shorts",
      "shoes",
      "pants"
    ],
    "answer": 1,
    "cn": "班穿什麼去海邊？ — 他穿著短褲。",
    "vocabIndex": 7
  },
  {
    "q": "Q: What are you wearing for the hike? — A: I'm wearing long ______ and a jacket.【長褲】",
    "options": [
      "pants",
      "socks",
      "shorts",
      "jeans"
    ],
    "answer": 0,
    "cn": "你健行要穿什麼？ — 我穿長褲和一件夾克。",
    "vocabIndex": 8
  },
  {
    "q": "Q: What is Tom wearing? — A: He is wearing a jacket with two big ______.【口袋】",
    "options": [
      "skirts",
      "pants",
      "shoes",
      "pockets"
    ],
    "answer": 3,
    "cn": "湯姆穿著什麼？ — 他穿著一件有兩個大口袋的夾克。",
    "vocabIndex": 9
  },
  {
    "q": "Q: What are the children wearing for Halloween? — A: They are wearing funny ______.【衣服】",
    "options": [
      "skirts",
      "clothes",
      "shorts",
      "shoes"
    ],
    "answer": 1,
    "cn": "孩子們萬聖節穿什麼？ — 他們穿著好笑的衣服。",
    "vocabIndex": 10
  },
  {
    "q": "Q: What do students wear at your school? — A: We wear a school ______ every day.【制服】",
    "options": [
      "button",
      "comb",
      "uniform",
      "cap"
    ],
    "answer": 2,
    "cn": "你們學校的學生穿什麼？ — 我們每天穿校服。",
    "vocabIndex": 11
  },
  {
    "q": "Q: What does your mom wear to work? — A: She ______ a dress and a coat.【穿；戴】",
    "options": [
      "owns",
      "wears",
      "sounds",
      "belongs"
    ],
    "answer": 1,
    "cn": "你媽媽穿什麼去上班？ — 她穿洋裝和大衣。",
    "vocabIndex": 12
  },
  {
    "q": "Q: Whose ______ is this? It's on my desk. — A: It's mine. Thank you.【袋子；包包】",
    "options": [
      "umbrella",
      "cap",
      "belt",
      "bag"
    ],
    "answer": 3,
    "cn": "這是誰的包包？它在我桌上。 — 是我的，謝謝你。",
    "vocabIndex": 13
  },
  {
    "q": "Q: Whose ______ is this? There is money in it. — A: It's Dad's. He is looking for it.【皮夾】",
    "options": [
      "wallet",
      "bag",
      "jacket",
      "uniform"
    ],
    "answer": 0,
    "cn": "這是誰的皮夾？裡面有錢。 — 是爸爸的，他正在找它。",
    "vocabIndex": 14
  },
  {
    "q": "Q: Whose ______ is this? It's wet. — A: It's Amy's. It's raining outside.【雨傘】",
    "options": [
      "comb",
      "uniform",
      "umbrella",
      "jacket"
    ],
    "answer": 2,
    "cn": "這是誰的雨傘？它是濕的。 — 是艾美的，外面在下雨。",
    "vocabIndex": 15
  },
  {
    "q": "Q: Whose ______ is this? — A: It's my sister's. She uses it every morning.【梳子】",
    "options": [
      "jacket",
      "cap",
      "sweater",
      "comb"
    ],
    "answer": 3,
    "cn": "這是誰的梳子？ — 是我妹妹的，她每天早上用它。",
    "vocabIndex": 16
  },
  {
    "q": "Q: Whose ______ is this? It's on the floor. — A: It's mine. It's from my shirt.【鈕扣】",
    "options": [
      "button",
      "jacket",
      "belt",
      "hat"
    ],
    "answer": 0,
    "cn": "這是誰的鈕扣？它在地板上。 — 是我的，是我襯衫上的。",
    "vocabIndex": 17
  },
  {
    "q": "Q: It's very sunny today. What should I do? — A: Put on your ______.【棒球帽；便帽】",
    "options": [
      "comb",
      "cap",
      "tie",
      "T-shirt"
    ],
    "answer": 1,
    "cn": "今天太陽好大，我該怎麼辦？ — 戴上你的帽子。",
    "vocabIndex": 18
  },
  {
    "q": "Q: Does Ben wear a hat in class? — A: No, he doesn't. The teacher says, \"Take off your ______.\"【帽子】",
    "options": [
      "cap",
      "umbrella",
      "hat",
      "belt"
    ],
    "answer": 2,
    "cn": "班上課時戴帽子嗎？ — 不，他不戴。老師說：「把帽子脫下來。」",
    "vocabIndex": 19
  },
  {
    "q": "Q: Do your hands feel cold? — A: Yes, they do. Let me put on my ______.【手套】",
    "options": [
      "shoes",
      "gloves",
      "skirts",
      "shorts"
    ],
    "answer": 1,
    "cn": "你的手覺得冷嗎？ — 是的，讓我戴上手套。",
    "vocabIndex": 20
  },
  {
    "q": "Q: I have a cold. What should I do? — A: Put on a ______, and drink a lot of water.【口罩；面具】",
    "options": [
      "mask",
      "tie",
      "belt",
      "bag"
    ],
    "answer": 0,
    "cn": "我感冒了，我該怎麼辦？ — 戴上口罩，並且多喝水。",
    "vocabIndex": 21
  },
  {
    "q": "Q: Dad, you're home! Are you tired? — A: Yes. Let me take off my ______ and rest.【領帶】",
    "options": [
      "wallet",
      "uniform",
      "hat",
      "tie"
    ],
    "answer": 3,
    "cn": "爸，你回來了！你累了嗎？ — 是啊，讓我拿下領帶休息一下。",
    "vocabIndex": 22
  },
  {
    "q": "Q: How much is this brown ______? — A: It is 350 dollars.【皮帶】",
    "options": [
      "umbrella",
      "wallet",
      "belt",
      "T-shirt"
    ],
    "answer": 2,
    "cn": "這條咖啡色皮帶多少錢？ — 它是三百五十元。",
    "vocabIndex": 23
  },
  {
    "q": "Q: How much does this gold ______ cost? — A: It costs 5,000 dollars. It's expensive!【戒指】",
    "options": [
      "dress",
      "sweater",
      "uniform",
      "ring"
    ],
    "answer": 3,
    "cn": "這枚金戒指要多少錢？ — 它要五千元，好貴！",
    "vocabIndex": 24
  },
  {
    "q": "Q: How much do these blue ______ cost? — A: They cost 900 dollars.【牛仔褲】",
    "options": [
      "skirts",
      "jeans",
      "dress",
      "shorts"
    ],
    "answer": 1,
    "cn": "這件藍色牛仔褲要多少錢？ — 它要九百元。",
    "vocabIndex": 25
  },
  {
    "q": "Q: How much are those black ______? — A: They are 1,200 dollars.【鞋子】",
    "options": [
      "shoes",
      "skirts",
      "gloves",
      "socks"
    ],
    "answer": 0,
    "cn": "那雙黑色鞋子多少錢？ — 它們是一千兩百元。",
    "vocabIndex": 26
  },
  {
    "q": "Q: How much does a pair of ______ cost? — A: It costs 60 dollars.【襪子】",
    "options": [
      "pants",
      "skirts",
      "socks",
      "shorts"
    ],
    "answer": 2,
    "cn": "一雙襪子要多少錢？ — 一雙要六十元。",
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "coat": {
    "pos": "n.",
    "en_def": "a long, warm piece of clothing you wear over other clothes when it is cold",
    "cn_def": "大衣"
  },
  "jacket": {
    "pos": "n.",
    "en_def": "a short coat",
    "cn_def": "夾克"
  },
  "sweater": {
    "pos": "n.",
    "en_def": "a warm piece of clothing with long sleeves for the top of your body",
    "cn_def": "毛衣"
  },
  "dress": {
    "pos": "n.",
    "en_def": "a piece of clothing for girls and women that covers the body and part of the legs",
    "cn_def": "洋裝"
  },
  "skirts": {
    "pos": "n.",
    "en_def": "a piece of clothing for girls and women that hangs from the waist",
    "cn_def": "裙子"
  },
  "shirt": {
    "pos": "n.",
    "en_def": "a piece of clothing for the top of your body, with buttons",
    "cn_def": "襯衫"
  },
  "t-shirt": {
    "pos": "n.",
    "en_def": "a shirt with short sleeves and no buttons",
    "cn_def": "T恤"
  },
  "shorts": {
    "pos": "n.",
    "en_def": "short pants that end above the knees",
    "cn_def": "短褲"
  },
  "pants": {
    "pos": "n.",
    "en_def": "clothing that covers your legs",
    "cn_def": "長褲"
  },
  "pockets": {
    "pos": "n.",
    "en_def": "a small bag in your clothes for carrying things",
    "cn_def": "口袋"
  },
  "clothes": {
    "pos": "n.",
    "en_def": "things that you wear, like shirts and pants",
    "cn_def": "衣服"
  },
  "uniform": {
    "pos": "n.",
    "en_def": "special clothes that all students or workers in one place wear",
    "cn_def": "制服"
  },
  "wears": {
    "pos": "v.",
    "en_def": "to have clothes, shoes, or glasses on your body",
    "cn_def": "穿；戴"
  },
  "bag": {
    "pos": "n.",
    "en_def": "something made of cloth, paper, or plastic for carrying things",
    "cn_def": "袋子；包包"
  },
  "wallet": {
    "pos": "n.",
    "en_def": "a small flat case for carrying money and cards",
    "cn_def": "皮夾"
  },
  "umbrella": {
    "pos": "n.",
    "en_def": "a thing you hold over your head to stay dry in the rain",
    "cn_def": "雨傘"
  },
  "comb": {
    "pos": "n.",
    "en_def": "a thing with many thin teeth for making your hair neat",
    "cn_def": "梳子"
  },
  "button": {
    "pos": "n.",
    "en_def": "a small round thing that closes a shirt or coat",
    "cn_def": "鈕扣"
  },
  "cap": {
    "pos": "n.",
    "en_def": "a soft hat with a hard part at the front",
    "cn_def": "棒球帽；便帽"
  },
  "hat": {
    "pos": "n.",
    "en_def": "something you wear on your head",
    "cn_def": "帽子"
  },
  "gloves": {
    "pos": "n.",
    "en_def": "a piece of clothing that covers your hand and fingers",
    "cn_def": "手套"
  },
  "mask": {
    "pos": "n.",
    "en_def": "something that covers your face or your nose and mouth",
    "cn_def": "口罩；面具"
  },
  "tie": {
    "pos": "n.",
    "en_def": "a long thin piece of cloth that men wear around the neck",
    "cn_def": "領帶"
  },
  "belt": {
    "pos": "n.",
    "en_def": "a long thin piece of leather that you wear around your waist",
    "cn_def": "皮帶"
  },
  "ring": {
    "pos": "n.",
    "en_def": "a small circle of gold or silver that you wear on your finger",
    "cn_def": "戒指"
  },
  "jeans": {
    "pos": "n.",
    "en_def": "strong blue pants",
    "cn_def": "牛仔褲"
  },
  "shoes": {
    "pos": "n.",
    "en_def": "things that you wear on your feet to walk outside",
    "cn_def": "鞋子"
  },
  "socks": {
    "pos": "n.",
    "en_def": "soft things that you wear on your feet inside your shoes",
    "cn_def": "襪子"
  },
  "sounds": {
    "pos": "v.",
    "en_def": "to seem a certain way when you hear it",
    "cn_def": "聽起來"
  },
  "belongs": {
    "pos": "v.",
    "en_def": "to be owned by someone",
    "cn_def": "屬於"
  },
  "owns": {
    "pos": "v.",
    "en_def": "to have something that is yours",
    "cn_def": "擁有"
  }
};

const EXTRA_GLOSSES = {};
