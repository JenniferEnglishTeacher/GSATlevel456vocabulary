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
    "q": "It is very cold today. Put on your long, thick ______ over your sweater before you go out.",
    "options": [
      "skirt",
      "belt",
      "ring",
      "coat"
    ],
    "answer": 3,
    "cn": "你今天穿什麼？好冷喔。 — 我穿著一件長大衣，很暖和。",
    "vocabIndex": 0
  },
  {
    "q": "It is a little cool tonight, so take a light ______ with you. A short one is enough.",
    "options": [
      "jacket",
      "belt",
      "wallet",
      "comb"
    ],
    "answer": 0,
    "cn": "你哥哥穿著什麼？ — 他穿著一件黑色夾克。",
    "vocabIndex": 1
  },
  {
    "q": "Grandma made this warm ______ for me with wool. I wear it under my coat in winter.",
    "options": [
      "skirt",
      "umbrella",
      "sweater",
      "wallet"
    ],
    "answer": 2,
    "cn": "奶奶穿著什麼？ — 她穿著一件保暖的毛衣。",
    "vocabIndex": 2
  },
  {
    "q": "Lisa wore a beautiful white ______ to the party. She looked like a princess in it.",
    "options": [
      "tie",
      "dress",
      "belt",
      "wallet"
    ],
    "answer": 1,
    "cn": "艾美穿什麼去派對？ — 她穿著一件粉紅色洋裝，看起來很美。",
    "vocabIndex": 3
  },
  {
    "q": "The girls at our school wear blue ______, and the boys wear blue pants.",
    "options": [
      "caps",
      "belts",
      "rings",
      "skirts"
    ],
    "answer": 3,
    "cn": "女孩們穿著什麼？ — 她們穿著白襯衫和藍裙子。",
    "vocabIndex": 4
  },
  {
    "q": "Dad wears a white ______ and a tie to work every day. It has long sleeves and eight buttons.",
    "options": [
      "skirt",
      "dress",
      "shirt",
      "glove"
    ],
    "answer": 2,
    "cn": "你爸爸今天穿著什麼？ — 他穿著白襯衫，打著領帶。",
    "vocabIndex": 5
  },
  {
    "q": "It is hot today, so I am wearing a ______ and shorts. I don't need a jacket.",
    "options": [
      "T-shirt",
      "sweater",
      "coat",
      "glove"
    ],
    "answer": 0,
    "cn": "你穿什麼？好熱喔！ — 我穿著T恤和短褲。",
    "vocabIndex": 6
  },
  {
    "q": "In summer, the boys wear ______ to play basketball. Their knees and legs feel cool.",
    "options": [
      "gloves",
      "shorts",
      "sweaters",
      "coats"
    ],
    "answer": 1,
    "cn": "班穿什麼去海邊？ — 他穿著短褲。",
    "vocabIndex": 7
  },
  {
    "q": "These ______ are too long for my legs. Can you make them five centimeters shorter?",
    "options": [
      "shirts",
      "caps",
      "pants",
      "belts"
    ],
    "answer": 2,
    "cn": "你健行要穿什麼？ — 我穿長褲和一件夾克。",
    "vocabIndex": 8
  },
  {
    "q": "My jacket has two big ______. I keep my keys in one and my phone in the other.",
    "options": [
      "buttons",
      "ties",
      "belts",
      "pockets"
    ],
    "answer": 3,
    "cn": "湯姆穿著什麼？ — 他穿著一件有兩個大口袋的夾克。",
    "vocabIndex": 9
  },
  {
    "q": "Lisa loves shopping for ______. She has fifty dresses, thirty shirts, and twenty pairs of pants.",
    "options": [
      "clothes",
      "umbrellas",
      "combs",
      "wallets"
    ],
    "answer": 0,
    "cn": "孩子們萬聖節穿什麼？ — 他們穿著好笑的衣服。",
    "vocabIndex": 10
  },
  {
    "q": "Every student at our school has to wear a ______. We all look the same in our white shirts and blue pants.",
    "options": [
      "ring",
      "uniform",
      "belt",
      "glove"
    ],
    "answer": 1,
    "cn": "你們學校的學生穿什麼？ — 我們每天穿校服。",
    "vocabIndex": 11
  },
  {
    "q": "My father ______ glasses because he can't see well. He takes them off only when he sleeps.",
    "options": [
      "cooks",
      "drinks",
      "wears",
      "eats"
    ],
    "answer": 2,
    "cn": "你媽媽穿什麼去上班？ — 她穿洋裝和大衣。",
    "vocabIndex": 12
  },
  {
    "q": "Mom put the fruit and vegetables in a big ______ and carried it home from the market.",
    "options": [
      "wallet",
      "pocket",
      "cap",
      "bag"
    ],
    "answer": 3,
    "cn": "這是誰的包包？它在我桌上。 — 是我的，謝謝你。",
    "vocabIndex": 13
  },
  {
    "q": "I can't pay for lunch because I left my ______ at home. All my money and cards are in it.",
    "options": [
      "comb",
      "wallet",
      "belt",
      "umbrella"
    ],
    "answer": 1,
    "cn": "這是誰的皮夾？裡面有錢。 — 是爸爸的，他正在找它。",
    "vocabIndex": 14
  },
  {
    "q": "It is raining hard. Take your ______ with you, or you will get wet.",
    "options": [
      "umbrella",
      "belt",
      "comb",
      "ring"
    ],
    "answer": 0,
    "cn": "這是誰的雨傘？它是濕的。 — 是艾美的，外面在下雨。",
    "vocabIndex": 15
  },
  {
    "q": "My hair looks terrible this morning. Can I use your ______ to make it tidy?",
    "options": [
      "belt",
      "comb",
      "button",
      "ring"
    ],
    "answer": 1,
    "cn": "這是誰的梳子？ — 是我妹妹的，她每天早上用它。",
    "vocabIndex": 16
  },
  {
    "q": "A ______ fell off my shirt. Mom, can you put it back on for me? I can't close my shirt now.",
    "options": [
      "pocket",
      "ring",
      "belt",
      "button"
    ],
    "answer": 3,
    "cn": "這是誰的鈕扣？它在地板上。 — 是我的，是我襯衫上的。",
    "vocabIndex": 17
  },
  {
    "q": "The baseball player wears a blue ______ on his head. It keeps the sun out of his eyes.",
    "options": [
      "belt",
      "tie",
      "cap",
      "ring"
    ],
    "answer": 2,
    "cn": "今天太陽好大，我該怎麼辦？ — 戴上你的帽子。",
    "vocabIndex": 18
  },
  {
    "q": "Grandma wears a big ______ when she works in the garden. It keeps the sun off her head and face.",
    "options": [
      "hat",
      "belt",
      "glove",
      "tie"
    ],
    "answer": 0,
    "cn": "班上課時戴帽子嗎？ — 不，他不戴。老師說：「把帽子脫下來。」",
    "vocabIndex": 19
  },
  {
    "q": "It is very cold today. Put on your ______, or your hands and fingers will hurt.",
    "options": [
      "socks",
      "shoes",
      "belts",
      "gloves"
    ],
    "answer": 3,
    "cn": "你的手覺得冷嗎？ — 是的，讓我戴上手套。",
    "vocabIndex": 20
  },
  {
    "q": "When you have a cold, please wear a ______ over your nose and mouth. Then other people won't get sick.",
    "options": [
      "tie",
      "belt",
      "mask",
      "ring"
    ],
    "answer": 2,
    "cn": "我感冒了，我該怎麼辦？ — 戴上口罩，並且多喝水。",
    "vocabIndex": 21
  },
  {
    "q": "Dad wears a shirt and a ______ around his neck when he goes to an important meeting.",
    "options": [
      "belt",
      "tie",
      "ring",
      "sock"
    ],
    "answer": 1,
    "cn": "爸，你回來了！你累了嗎？ — 是啊，讓我拿下領帶休息一下。",
    "vocabIndex": 22
  },
  {
    "q": "These pants are too big for me. I need a ______ around my waist, or they will fall down.",
    "options": [
      "belt",
      "tie",
      "ring",
      "cap"
    ],
    "answer": 0,
    "cn": "這條咖啡色皮帶多少錢？ — 它是三百五十元。",
    "vocabIndex": 23
  },
  {
    "q": "Mr. Lin gave his wife a gold ______ on their wedding day. She wears it on her finger every day.",
    "options": [
      "belt",
      "ring",
      "button",
      "comb"
    ],
    "answer": 1,
    "cn": "這枚金戒指要多少錢？ — 它要五千元，好貴！",
    "vocabIndex": 24
  },
  {
    "q": "Cowboys wear blue ______. These strong pants are popular all over the world now.",
    "options": [
      "jeans",
      "shirts",
      "socks",
      "caps"
    ],
    "answer": 0,
    "cn": "這件藍色牛仔褲要多少錢？ — 它要九百元。",
    "vocabIndex": 25
  },
  {
    "q": "Please take off your ______ before you come into the house. Leave them by the door.",
    "options": [
      "gloves",
      "rings",
      "belts",
      "shoes"
    ],
    "answer": 3,
    "cn": "那雙黑色鞋子多少錢？ — 它們是一千兩百元。",
    "vocabIndex": 26
  },
  {
    "q": "Put on your ______ before you put on your shoes. They keep your feet warm.",
    "options": [
      "gloves",
      "caps",
      "socks",
      "belts"
    ],
    "answer": 2,
    "cn": "一雙襪子要多少錢？ — 一雙要六十元。",
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "skirt": {
    "pos": "n.",
    "en_def": "a piece of clothing for girls and women that hangs from the waist",
    "cn_def": "裙子"
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
  "wallet": {
    "pos": "n.",
    "en_def": "a small flat case for carrying money and cards",
    "cn_def": "皮夾"
  },
  "comb": {
    "pos": "n.",
    "en_def": "a thing with many thin teeth for making your hair neat",
    "cn_def": "梳子"
  },
  "umbrella": {
    "pos": "n.",
    "en_def": "a thing you hold over your head to stay dry in the rain",
    "cn_def": "雨傘"
  },
  "sweater": {
    "pos": "n.",
    "en_def": "a warm piece of clothing with long sleeves for the top of your body",
    "cn_def": "毛衣"
  },
  "tie": {
    "pos": "n.",
    "en_def": "a long thin piece of cloth that men wear around the neck",
    "cn_def": "領帶"
  },
  "dress": {
    "pos": "n.",
    "en_def": "a piece of clothing for girls and women that covers the body and part of the legs",
    "cn_def": "洋裝"
  },
  "caps": {
    "pos": "n.",
    "en_def": "a soft hat with a hard part at the front",
    "cn_def": "棒球帽；便帽"
  },
  "belts": {
    "pos": "n.",
    "en_def": "a long thin piece of leather that you wear around your waist",
    "cn_def": "皮帶"
  },
  "rings": {
    "pos": "n.",
    "en_def": "a small circle of gold or silver that you wear on your finger",
    "cn_def": "戒指"
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
  "glove": {
    "pos": "n.",
    "en_def": "a piece of clothing that covers your hand and fingers",
    "cn_def": "手套"
  },
  "t-shirt": {
    "pos": "n.",
    "en_def": "a shirt with short sleeves and no buttons",
    "cn_def": "T恤"
  },
  "gloves": {
    "pos": "n.",
    "en_def": "a piece of clothing that covers your hand and fingers",
    "cn_def": "手套"
  },
  "shorts": {
    "pos": "n.",
    "en_def": "short pants that end above the knees",
    "cn_def": "短褲"
  },
  "sweaters": {
    "pos": "n.",
    "en_def": "a warm piece of clothing with long sleeves for the top of your body",
    "cn_def": "毛衣"
  },
  "coats": {
    "pos": "n.",
    "en_def": "a long, warm piece of clothing you wear over other clothes when it is cold",
    "cn_def": "大衣"
  },
  "shirts": {
    "pos": "n.",
    "en_def": "a piece of clothing for the top of your body, with buttons",
    "cn_def": "襯衫"
  },
  "pants": {
    "pos": "n.",
    "en_def": "clothing that covers your legs",
    "cn_def": "長褲"
  },
  "buttons": {
    "pos": "n.",
    "en_def": "a small round thing that closes a shirt or coat",
    "cn_def": "鈕扣"
  },
  "ties": {
    "pos": "n.",
    "en_def": "a long thin piece of cloth that men wear around the neck",
    "cn_def": "領帶"
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
  "umbrellas": {
    "pos": "n.",
    "en_def": "a thing you hold over your head to stay dry in the rain",
    "cn_def": "雨傘"
  },
  "combs": {
    "pos": "n.",
    "en_def": "a thing with many thin teeth for making your hair neat",
    "cn_def": "梳子"
  },
  "wallets": {
    "pos": "n.",
    "en_def": "a small flat case for carrying money and cards",
    "cn_def": "皮夾"
  },
  "uniform": {
    "pos": "n.",
    "en_def": "special clothes that all students or workers in one place wear",
    "cn_def": "制服"
  },
  "cooks": {
    "pos": "v.",
    "en_def": "to make food ready to eat by heating it",
    "cn_def": "煮飯；烹調"
  },
  "drinks": {
    "pos": "v.",
    "en_def": "to take water, milk, or juice into your mouth and body",
    "cn_def": "喝"
  },
  "wears": {
    "pos": "v.",
    "en_def": "to have clothes, shoes, or glasses on your body",
    "cn_def": "穿；戴"
  },
  "eats": {
    "pos": "v.",
    "en_def": "to put food in your mouth and swallow it",
    "cn_def": "吃"
  },
  "pocket": {
    "pos": "n.",
    "en_def": "a small bag in your clothes for carrying things",
    "cn_def": "口袋"
  },
  "cap": {
    "pos": "n.",
    "en_def": "a soft hat with a hard part at the front",
    "cn_def": "棒球帽；便帽"
  },
  "bag": {
    "pos": "n.",
    "en_def": "something made of cloth, paper, or plastic for carrying things",
    "cn_def": "袋子；包包"
  },
  "button": {
    "pos": "n.",
    "en_def": "a small round thing that closes a shirt or coat",
    "cn_def": "鈕扣"
  },
  "hat": {
    "pos": "n.",
    "en_def": "something you wear on your head",
    "cn_def": "帽子"
  },
  "socks": {
    "pos": "n.",
    "en_def": "soft things that you wear on your feet inside your shoes",
    "cn_def": "襪子"
  },
  "shoes": {
    "pos": "n.",
    "en_def": "things that you wear on your feet to walk outside",
    "cn_def": "鞋子"
  },
  "mask": {
    "pos": "n.",
    "en_def": "something that covers your face or your nose and mouth",
    "cn_def": "口罩；面具"
  },
  "sock": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "襪子"
  },
  "jeans": {
    "pos": "n.",
    "en_def": "strong blue pants",
    "cn_def": "牛仔褲"
  }
};

const EXTRA_GLOSSES = {};
