// Part 5 Quiz Data: ripe – wealth
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 7-5 - ripe – wealth",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "ripe",
    "pos": "adj.",
    "cn_def": "成熟的；時機成熟的",
    "en_def": "developed to the point of readiness for harvesting and eating; fully matured",
    "sentence": "The honeydew melon sitting on the kitchen table is completely {{BLANK}} and sweet, so we should eat it today.",
    "cn": "放在廚房餐桌上的蜜瓜已經完全成熟且香甜，所以我們今天就該吃掉它。"
  },
  {
    "word": "steady",
    "pos": "adj.",
    "cn_def": "穩定的；沉穩的；持續不斷的",
    "en_def": "firmly fixed, supported, or balanced; regular and continuous",
    "sentence": "Flying a colorful kite high in the sky is much easier when there is a gentle and {{BLANK}} afternoon breeze.",
    "cn": "當午後有陣陣輕柔而穩定的微風時，把五彩風箏高高放上天空會容易得多。"
  },
  {
    "word": "steady",
    "pos": "v.",
    "cn_def": "使穩定；使平靜；穩住（動詞）",
    "en_def": "to make or become steady or balanced",
    "sentence": "David took three slow, deep breaths to {{BLANK}} his shaky nerves before stepping onto the stage.",
    "cn": "大衛在走上講台前做了三次緩慢的深呼吸，以穩定／平靜他緊張顫抖的神經。"
  },
  {
    "word": "slow and steady",
    "pos": "phr.",
    "cn_def": "循序漸進；持之以恆（穩紮穩打）",
    "en_def": "gradual and consistent progress that eventually leads to success",
    "sentence": "In Aesop's famous fable about the tortoise and the hare, {{BLANK}} consistently wins the race.",
    "cn": "在伊索著名的龜兔賽跑寓言中，持之以恆／穩紮穩打最終贏得了比賽。"
  },
  {
    "word": "stool",
    "pos": "n.",
    "cn_def": "凳子；高腳凳（可數）",
    "en_def": "a backless, armless single seat supported on legs or a central pedestal",
    "sentence": "Customers in the cozy downtown cafe comfortably sat on high wooden {{BLANK}} along the counter.",
    "cn": "舒適的市中心咖啡館裡的顧客們舒適地坐在吧檯旁的木製高腳凳上。"
  },
  {
    "word": "tent",
    "pos": "n.",
    "cn_def": "帳篷（可數）",
    "en_def": "a portable shelter of fabric or canvas supported by poles and rope",
    "sentence": "The grassy flat clearing beside the mountain stream is an ideal location for us to put up our {{BLANK}}.",
    "cn": "山間溪流旁的平坦草地是我們搭設帳篷的理想地點。"
  },
  {
    "word": "thumb",
    "pos": "n.",
    "cn_def": "大拇指（可數）",
    "en_def": "the short, thick first digit of the human hand, opposable to the other four fingers",
    "sentence": "Vincent's sprained right {{BLANK}} significantly affected his daily ability to type on the computer keyboard.",
    "cn": "文森扭傷的右手大拇指嚴重影響了他每天在電腦鍵盤上打字的能力。"
  },
  {
    "word": "all thumbs",
    "pos": "phr.",
    "cn_def": "笨手笨腳的；笨拙的（片語）",
    "en_def": "clumsy and awkward, especially with one's hands",
    "sentence": "Don't let clumsy Joe handle the fragile antique glasses because he is completely {{BLANK}} this morning.",
    "cn": "別讓笨拙的喬碰那些脆弱的古董玻璃杯，因為他今天早晨完全笨手笨腳的。"
  },
  {
    "word": "rule of thumb",
    "pos": "n.phr.",
    "cn_def": "經驗法則；黃金準則（常用單數）",
    "en_def": "a broadly accurate guide or principle based on practice rather than theory",
    "sentence": "As a practical {{BLANK}}, short fictional stories should be written between five and ten thousand words.",
    "cn": "作為一個實用的經驗法則，虛構短篇故事的篇幅應寫在五千至一萬字之間。"
  },
  {
    "word": "thumbs up",
    "pos": "n.phr.",
    "cn_def": "豎起大拇指；稱讚；贊同；准許（常用單數或複數）",
    "en_def": "a gesture or signal indicating approval, satisfaction, or encouragement",
    "sentence": "The film critic gave the thrilling new sci-fi movie an enthusiastic {{BLANK}} for its marvelous acting.",
    "cn": "影評人為這部扣人心弦的新科幻電影精彩的演技給予了熱情的大力讚許（豎起大拇指）。"
  },
  {
    "word": "troops",
    "pos": "n.",
    "cn_def": "軍隊；部隊（常用複數 troops）；一群",
    "en_def": "soldiers or armed forces; a group of people or animals of a specified kind",
    "sentence": "The international peacekeeping coalition decided to send specialized medical {{BLANK}} to the conflict region.",
    "cn": "國際維和聯盟決定派遣專門的醫療部隊前往衝突地區。"
  },
  {
    "word": "wealthy",
    "pos": "adj.",
    "cn_def": "富有的；富裕的",
    "en_def": "having a great deal of money, resources, or assets; rich",
    "sentence": "The generous and {{BLANK}} businessman regularly donates large sums of money to build rural schools.",
    "cn": "那位慷慨且富有的商人經常捐贈巨額款項為偏鄉興建學校。"
  },
  {
    "word": "wealth",
    "pos": "n.",
    "cn_def": "財富；豐富；大量（不可數）",
    "en_def": "an abundance of valuable possessions, money, or intellectual resources",
    "sentence": "The newly renovated public library offers an enormous {{BLANK}} of historical information to researchers.",
    "cn": "新翻修的公共圖書館為研究人員提供了極其豐富的歷史資訊。"
  }
];

const MCQS = [
  {
    "q": "The yellow banana on the table is completely ______ and sweet, so let's eat it.",
    "options": [
      "all thumbs",
      "wealthy",
      "steady",
      "ripe"
    ],
    "answer": 3,
    "cn": "桌上的黃香蕉已經完全熟了且很甜，我們把它吃了吧。",
    "vocabIndex": 0
  },
  {
    "q": "Peter sat on a tall wooden ______ next to the kitchen counter to eat his breakfast.",
    "options": [
      "tent",
      "stool",
      "thumb",
      "wealth"
    ],
    "answer": 1,
    "cn": "彼得坐在廚房吧檯旁的木製高腳凳上吃早餐。",
    "vocabIndex": 4
  },
  {
    "q": "We bought a large green camping ______ to sleep in during our mountain trip.",
    "options": [
      "tent",
      "troop",
      "stool",
      "thumb"
    ],
    "answer": 0,
    "cn": "我們買了一個大綠色露營帳篷，以便在登山旅行期間睡在裡面。",
    "vocabIndex": 5
  },
  {
    "q": "Tom hurt his left ______ while hammering a nail into the wooden board.",
    "options": [
      "wealth",
      "stool",
      "thumb",
      "tent"
    ],
    "answer": 2,
    "cn": "湯姆在把鐵釘敲進木板時傷到了他的左手大拇指。",
    "vocabIndex": 6
  },
  {
    "q": "The government sent brave ______ to help rescue people after the big flood.",
    "options": [
      "thumbs",
      "stools",
      "tents",
      "troops"
    ],
    "answer": 3,
    "cn": "大洪災過後，政府派遣英勇的部隊／軍隊協助救援民眾。",
    "vocabIndex": 10
  },
  {
    "q": "A very ______ man bought the large house and donated money to the hospital.",
    "options": [
      "ripe",
      "wealthy",
      "steady",
      "all thumbs"
    ],
    "answer": 1,
    "cn": "一位非常富有的男子買下了那棟大房子並向醫院捐款。",
    "vocabIndex": 11
  },
  {
    "q": "Eating healthy food and exercising regularly brings great ______ to your life.",
    "options": [
      "wealth",
      "tent",
      "stool",
      "thumb"
    ],
    "answer": 0,
    "cn": "飲食健康與規律運動會為你的人生帶來莫大的財富。",
    "vocabIndex": 12
  },
  {
    "q": "He held the ladder with a ______ grip so that it would not shake or slide.",
    "options": [
      "ripe",
      "wealthy",
      "steady",
      "tented"
    ],
    "answer": 2,
    "cn": "他以穩定的握力扶住梯子，使它不會搖晃或滑動。",
    "vocabIndex": 1
  },
  {
    "q": "The surgeon ______ her hands and took a deep breath before cutting.",
    "options": [
      "steadied",
      "trooped",
      "tented",
      "riped"
    ],
    "answer": 0,
    "cn": "外科醫生在下刀前穩住雙手並深吸了一口氣。",
    "vocabIndex": 1
  },
  {
    "q": "Don't ask clumsy Jack to carry the eggs because he is ______ today.",
    "options": [
      "ripe",
      "wealthy",
      "steady",
      "all thumbs"
    ],
    "answer": 3,
    "cn": "別叫笨拙的傑克拿雞蛋，因為他今天笨手笨腳的。",
    "vocabIndex": 7
  },
  {
    "q": "As a useful ______, drink at least eight glasses of clean water every day.",
    "options": [
      "bar stool",
      "camping tent",
      "rule of thumb",
      "thumbs up"
    ],
    "answer": 2,
    "cn": "作為一個實用的經驗法則，每天至少喝八杯乾淨的水。",
    "vocabIndex": 8
  },
  {
    "q": "The teacher gave Mary an encouraging ______ for her wonderful homework essay.",
    "options": [
      "camping tent",
      "thumbs up",
      "rule of thumb",
      "bar stool"
    ],
    "answer": 1,
    "cn": "老師為瑪麗寫的精彩作業短文給予了鼓勵的豎大拇指稱讚。",
    "vocabIndex": 9
  },
  {
    "q": "In the race between the tortoise and the rabbit, ______ progress won the game.",
    "options": [
      "all thumbs",
      "all troops",
      "wealthy rich",
      "slow and steady"
    ],
    "answer": 3,
    "cn": "在烏龜與兔子的賽跑中，循序漸進且持之以恆的進展贏得了比賽。",
    "vocabIndex": 3
  },
  {
    "q": "The farmer waited until the red apples were completely ______ before picking them.",
    "options": [
      "steady",
      "wealthy",
      "ripe",
      "trooped"
    ],
    "answer": 2,
    "cn": "農夫等到紅蘋果完全成熟之後才進行採摘。",
    "vocabIndex": 0
  },
  {
    "q": "The family gathered on the beach and ______ for the overnight camping trip.",
    "options": [
      "gave a thumbs up",
      "put up a tent",
      "was all thumbs",
      "held a stool"
    ],
    "answer": 1,
    "cn": "這家人聚集在沙灘上搭起帳篷準備過夜露營。",
    "vocabIndex": 5
  },
  {
    "q": "The little girl sat on a small plastic ______ to put on her shoes.",
    "options": [
      "stool",
      "tent",
      "wealth",
      "thumb"
    ],
    "answer": 0,
    "cn": "小女孩坐在小塑膠凳子上穿鞋子。",
    "vocabIndex": 4
  },
  {
    "q": "The doctor pressed his ______ against my wrist to feel my heartbeat.",
    "options": [
      "tent",
      "thumb",
      "stool",
      "wealth"
    ],
    "answer": 1,
    "cn": "醫生用他的大拇指按住我的手腕來感受脈搏跳動。",
    "vocabIndex": 6
  },
  {
    "q": "The hikers set up their waterproof ______ under the tall pine trees before it rained.",
    "options": [
      "wealth",
      "stool",
      "tent",
      "thumb"
    ],
    "answer": 2,
    "cn": "健行者在下雨前於高大松樹下搭起了他們的防水帳篷。",
    "vocabIndex": 5
  },
  {
    "q": "The country has great natural ______, including clean water and thick forests.",
    "options": [
      "tent",
      "stool",
      "thumb",
      "wealth"
    ],
    "answer": 3,
    "cn": "該國擁有巨大的自然財富／資源，包括潔淨的水源與茂密的森林。",
    "vocabIndex": 12
  },
  {
    "q": "A ______ person should share some of their money to help poor people in need.",
    "options": [
      "wealthy",
      "ripe",
      "steady",
      "all thumbs"
    ],
    "answer": 0,
    "cn": "一個富有的人應當分享一部分金錢來幫助有需要的窮困民眾。",
    "vocabIndex": 11
  },
  {
    "q": "The train moved at a calm and ______ speed across the peaceful farmland.",
    "options": [
      "ripe",
      "wealthy",
      "steady",
      "all thumbs"
    ],
    "answer": 2,
    "cn": "火車以沉穩且穩定的速度行駛穿過平靜的農田。",
    "vocabIndex": 1
  },
  {
    "q": "The soldiers were organized into a strong ______ to protect the borders.",
    "options": [
      "troop",
      "stool",
      "tent",
      "wealth"
    ],
    "answer": 0,
    "cn": "士兵們被組織成一支強大的部隊／軍隊以保衛邊界。",
    "vocabIndex": 10
  },
  {
    "q": "I accidentally dropped the glass plate because my fingers felt ______ today.",
    "options": [
      "ripe",
      "all thumbs",
      "wealthy",
      "steady"
    ],
    "answer": 1,
    "cn": "我不小心把玻璃盤摔掉了，因為我今天的手指感到笨拙不靈活。",
    "vocabIndex": 7
  },
  {
    "q": "The delicious green mangoes need three more days in the sun to become completely ______.",
    "options": [
      "steady",
      "wealthy",
      "all thumbs",
      "ripe"
    ],
    "answer": 3,
    "cn": "美味的青芒果還需要在陽光下曬三天才能完全成熟。",
    "vocabIndex": 0
  },
  {
    "q": "The mayor gave our volunteer clean-up team an enthusiastic ______.",
    "options": [
      "rule of thumb",
      "thumbs up",
      "wooden stool",
      "camping tent"
    ],
    "answer": 1,
    "cn": "市長給了我們志工清潔隊一個熱情的大力豎指讚許。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "ripe": {
    "pos": "adj.",
    "en_def": "developed to the point of readiness for harvesting and eating; fully matured",
    "cn_def": "成熟的；時機成熟的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "developed to the point of readiness for harvesting and eating; fully matured",
        "cn_def": "成熟的；時機成熟的"
      }
    ]
  },
  "steady": {
    "pos": "adj.",
    "en_def": "firmly fixed, supported, or balanced; regular and continuous",
    "cn_def": "穩定的；沉穩的；持續不斷的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "firmly fixed, supported, or balanced; regular and continuous",
        "cn_def": "穩定的；沉穩的；持續不斷的"
      },
      {
        "pos": "v.",
        "en_def": "to make or become steady or balanced",
        "cn_def": "使穩定；使平靜；穩住（動詞）"
      }
    ]
  },
  "slow and steady": {
    "pos": "phr.",
    "en_def": "gradual and consistent progress that eventually leads to success",
    "cn_def": "循序漸進；持之以恆（穩紮穩打）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "gradual and consistent progress that eventually leads to success",
        "cn_def": "循序漸進；持之以恆（穩紮穩打）"
      }
    ]
  },
  "stool": {
    "pos": "n.",
    "en_def": "a backless, armless single seat supported on legs or a central pedestal",
    "cn_def": "凳子；高腳凳（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a backless, armless single seat supported on legs or a central pedestal",
        "cn_def": "凳子；高腳凳（可數）"
      }
    ]
  },
  "tent": {
    "pos": "n.",
    "en_def": "a portable shelter of fabric or canvas supported by poles and rope",
    "cn_def": "帳篷（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a portable shelter of fabric or canvas supported by poles and rope",
        "cn_def": "帳篷（可數）"
      }
    ]
  },
  "thumb": {
    "pos": "n.",
    "en_def": "the short, thick first digit of the human hand, opposable to the other four fingers",
    "cn_def": "大拇指（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the short, thick first digit of the human hand, opposable to the other four fingers",
        "cn_def": "大拇指（可數）"
      }
    ]
  },
  "all thumbs": {
    "pos": "phr.",
    "en_def": "clumsy and awkward, especially with one's hands",
    "cn_def": "笨手笨腳的；笨拙的（片語）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "clumsy and awkward, especially with one's hands",
        "cn_def": "笨手笨腳的；笨拙的（片語）"
      }
    ]
  },
  "rule of thumb": {
    "pos": "n.phr.",
    "en_def": "a broadly accurate guide or principle based on practice rather than theory",
    "cn_def": "經驗法則；黃金準則（常用單數）",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "a broadly accurate guide or principle based on practice rather than theory",
        "cn_def": "經驗法則；黃金準則（常用單數）"
      }
    ]
  },
  "thumbs up": {
    "pos": "n.phr.",
    "en_def": "a gesture or signal indicating approval, satisfaction, or encouragement",
    "cn_def": "豎起大拇指；稱讚；贊同；准許（常用單數或複數）",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "a gesture or signal indicating approval, satisfaction, or encouragement",
        "cn_def": "豎起大拇指；稱讚；贊同；准許（常用單數或複數）"
      }
    ]
  },
  "troops": {
    "pos": "n.",
    "en_def": "soldiers or armed forces; a group of people or animals of a specified kind",
    "cn_def": "軍隊；部隊（常用複數 troops）；一群",
    "combined": [
      {
        "pos": "n.",
        "en_def": "soldiers or armed forces; a group of people or animals of a specified kind",
        "cn_def": "軍隊；部隊（常用複數 troops）；一群"
      }
    ]
  },
  "troop": {
    "pos": "n.",
    "en_def": "soldiers or armed forces; a group of people or animals of a specified kind",
    "cn_def": "軍隊；部隊（常用複數 troops）；一群",
    "combined": [
      {
        "pos": "n.",
        "en_def": "soldiers or armed forces; a group of people or animals of a specified kind",
        "cn_def": "軍隊；部隊（常用複數 troops）；一群"
      }
    ]
  },
  "wealthy": {
    "pos": "adj.",
    "en_def": "having a great deal of money, resources, or assets; rich",
    "cn_def": "富有的；富裕的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a great deal of money, resources, or assets; rich",
        "cn_def": "富有的；富裕的"
      }
    ]
  },
  "wealth": {
    "pos": "n.",
    "en_def": "an abundance of valuable possessions, money, or intellectual resources",
    "cn_def": "財富；豐富；大量（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an abundance of valuable possessions, money, or intellectual resources",
        "cn_def": "財富；豐富；大量（不可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
