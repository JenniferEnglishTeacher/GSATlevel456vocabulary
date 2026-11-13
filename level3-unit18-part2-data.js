// Part 2 Quiz Data: bomb – confusion
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 18-2 - bomb – confusion",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "bomb",
    "pos": "n./v.",
    "cn_def": "炸彈；轟炸（名詞/動詞）",
    "en_def": "a container filled with explosive material; to attack with bombs",
    "sentence": "The police evacuated the busy subway station after receiving an anonymous {{BLANK}} threat over the telephone.",
    "cn": "警方在接到一通匿名電話的炸彈威脅後，疏散了繁忙的地鐵站。"
  },
  {
    "word": "cabin",
    "pos": "n.",
    "cn_def": "小木屋；機艙；客艙（可數）",
    "en_def": "a small wooden shelter or house; the passenger compartment in an aircraft or ship",
    "sentence": "Our family rented a cozy log {{BLANK}} in the quiet pine forest to spend our winter ski vacation.",
    "cn": "我們全家在安靜的松樹林中租了一間舒適的原木小木屋來度過冬季滑雪假期。"
  },
  {
    "word": "cable",
    "pos": "n./v.",
    "cn_def": "電纜；纜繩；有線電視；拍電報",
    "en_def": "a thick rope of wire or fiber used for construction, electricity, or television",
    "sentence": "Tourists can ride a scenic {{BLANK}} car all the way up to the mountain peak to enjoy panoramic ocean views.",
    "cn": "遊客可以搭乘風景優美的纜車一路直達山頂，欣賞壯麗的全景海景。"
  },
  {
    "word": "cafeteria",
    "pos": "n.",
    "cn_def": "自助餐廳；學生餐廳（可數）",
    "en_def": "a restaurant in which customers serve themselves or are served from a counter",
    "sentence": "Students gather in the noisy school {{BLANK}} at noon every day to enjoy warm and nutritious lunches together.",
    "cn": "學生們每天中午聚集在喧鬧的學校自助餐廳裡，一同享用溫熱且營養的午餐。"
  },
  {
    "word": "cave",
    "pos": "n.",
    "cn_def": "洞穴；山洞（可數）",
    "en_def": "a natural underground chamber in a hillside or cliff",
    "sentence": "When the tour boat sailed slowly near the rocky cliff, passengers marveled at the spectacular natural sea {{BLANK}}.",
    "cn": "當遊覽船在岩石懸崖附近緩慢航行時，乘客們無不對壯麗的天然海蝕洞驚嘆不已。"
  },
  {
    "word": "cave in",
    "pos": "v.phr.",
    "cn_def": "坍塌；塌陷；屈服讓步",
    "en_def": "to collapse inwards; to yield or surrender under pressure",
    "sentence": "The determined union workers refused to {{BLANK}} to pressure from management and continued their peaceful strike.",
    "cn": "堅定的工會勞工們拒絕屈服讓步於資方的壓力，並繼續進行和平罷工。"
  },
  {
    "word": "coach",
    "pos": "n./v.",
    "cn_def": "教練；長途巴士；訓練指導（名詞/動詞）",
    "en_def": "an athletic instructor; a comfortable long-distance bus; to train someone",
    "sentence": "The experienced head {{BLANK}} developed a brilliant defensive strategy that led the high school basketball team to victory.",
    "cn": "那位經驗豐富的總教練制定了一個絕妙的防守策略，帶領高中籃球隊贏得了勝利。"
  },
  {
    "word": "committee",
    "pos": "n.",
    "cn_def": "委員會（可數）",
    "en_def": "a group of people appointed for a specific function by a larger group",
    "sentence": "The city government decided to set up a special {{BLANK}} to address the serious issue of air pollution.",
    "cn": "市政府決定成立一個專門委員會來解決嚴重的空氣污染問題。"
  },
  {
    "word": "confuse",
    "pos": "v.",
    "cn_def": "使困惑；使混亂；弄混（動詞）",
    "en_def": "to make someone bewildered or perplexed; to mistake one thing for another",
    "sentence": "People often {{BLANK}} the Australian opossum with the American possum because of their remarkably similar appearances.",
    "cn": "人們經常因為牠們極其相似的外表而將澳洲負鼠與美洲負鼠弄混／混淆。"
  },
  {
    "word": "confusion",
    "pos": "n.",
    "cn_def": "困惑；混亂（不可數）",
    "en_def": "uncertainty about what is happening, intended, or required",
    "sentence": "To avoid any unnecessary {{BLANK}} among customers, the store manager put clear price tags on all promotional items.",
    "cn": "為了避免在顧客之間造成任何不必要的混淆困惑，店長在所有促銷商品上都貼上了清晰的價格標籤。"
  }
];

const MCQS = [
  {
    "q": "The soldiers ran away quickly before the dangerous ______ exploded into pieces.",
    "options": [
      "cabin",
      "bomb",
      "committee",
      "cafeteria"
    ],
    "answer": 1,
    "cn": "士兵們在危險的炸彈爆炸成碎片之前迅速逃跑了。",
    "vocabIndex": 0
  },
  {
    "q": "Our family spent the cold winter weekend inside a warm wooden ______ in the mountains.",
    "options": [
      "coach",
      "cable",
      "bomb",
      "cabin"
    ],
    "answer": 3,
    "cn": "我們全家在山上一間溫暖的原木小木屋裡度過了寒冷的週末。",
    "vocabIndex": 1
  },
  {
    "q": "We need a strong electrical ______ to connect the new television to the wall socket.",
    "options": [
      "cable",
      "bomb",
      "coach",
      "cave"
    ],
    "answer": 0,
    "cn": "我們需要一條結實的電纜線來將新電視連接到牆上的插座。",
    "vocabIndex": 2
  },
  {
    "q": "At noon, all the hungry high school students buy food in the school ______.",
    "options": [
      "cave",
      "bomb",
      "cafeteria",
      "cabin"
    ],
    "answer": 2,
    "cn": "中午時分，所有飢餓的高中生都在學校自助餐廳裡買午餐。",
    "vocabIndex": 3
  },
  {
    "q": "The hikers used bright flashlights to explore the deep, dark ______ under the cliff.",
    "options": [
      "cable",
      "committee",
      "coach",
      "cave"
    ],
    "answer": 3,
    "cn": "登山者使用明亮的手電筒探索懸崖下深邃且黑暗的山洞／洞穴。",
    "vocabIndex": 4
  },
  {
    "q": "The basketball ______ taught the players how to shoot the ball accurately.",
    "options": [
      "coach",
      "cabin",
      "bomb",
      "cave"
    ],
    "answer": 0,
    "cn": "籃球教練教導球員們如何準確地投籃。",
    "vocabIndex": 6
  },
  {
    "q": "We bought cheap tickets to travel across the country by long-distance ______.",
    "options": [
      "bomb",
      "cave",
      "coach",
      "cabin"
    ],
    "answer": 2,
    "cn": "我們買了便宜的票，搭乘長途大巴／客車橫穿全國旅行。",
    "vocabIndex": 6
  },
  {
    "q": "The school set up a student ______ to plan the graduation party.",
    "options": [
      "cable",
      "committee",
      "bomb",
      "cave"
    ],
    "answer": 1,
    "cn": "學校成立了一個學生委員會來籌劃畢業派對。",
    "vocabIndex": 7
  },
  {
    "q": "There was much ______ in the classroom because nobody knew which room the test was in.",
    "options": [
      "cabin",
      "cable",
      "coach",
      "confusion"
    ],
    "answer": 3,
    "cn": "教室裡充滿了混亂與困惑，因為沒有人知道考試在哪間教室舉行。",
    "vocabIndex": 9
  },
  {
    "q": "The flight attendant walked through the airplane ______ to serve water to passengers.",
    "options": [
      "bomb",
      "committee",
      "cabin",
      "cave"
    ],
    "answer": 2,
    "cn": "空服員走過飛機客艙／機艙為乘客倒水。",
    "vocabIndex": 1
  },
  {
    "q": "The military airplanes ______ the enemy bridge to stop their tanks from crossing.",
    "options": [
      "bombed",
      "coached",
      "confused",
      "cabined"
    ],
    "answer": 0,
    "cn": "軍用飛機轟炸了敵方的橋樑，以阻止他們的坦克通過。",
    "vocabIndex": 0
  },
  {
    "q": "Mr. Lee will ______ our school soccer team for the championship match.",
    "options": [
      "bomb",
      "coach",
      "confuse",
      "cable"
    ],
    "answer": 1,
    "cn": "李老師將會為冠軍賽指導訓練我們學校的足球隊。",
    "vocabIndex": 6
  },
  {
    "q": "The difficult math symbols ______ the little boy, so he asked his teacher for help.",
    "options": [
      "bombed",
      "coached",
      "confused",
      "cabined"
    ],
    "answer": 2,
    "cn": "這些困難的數學符號搞糊塗了那個小男孩，所以他向老師求助。",
    "vocabIndex": 8
  },
  {
    "q": "Do not ______ the city of Taipei with Taichung when you book your train tickets.",
    "options": [
      "bomb",
      "confuse",
      "coach",
      "cave"
    ],
    "answer": 1,
    "cn": "訂火車票時切勿把台北市和台中市弄混混淆了。",
    "vocabIndex": 8
  },
  {
    "q": "My little brother jumped into the photo right when dad clicked the camera and ______ our picture.",
    "options": [
      "photobombed",
      "caved",
      "coached",
      "confused"
    ],
    "answer": 0,
    "cn": "爸爸按下快門時，我弟弟跳進照片裡搶鏡頭干擾了我們的照片。"
  },
  {
    "q": "The heavy snow on the old roof caused it to ______ during the winter storm.",
    "options": [
      "photobomb",
      "coach",
      "set up",
      "cave in"
    ],
    "answer": 3,
    "cn": "老屋頂上的厚重積雪導致它在冬季暴風雪中坍塌了。",
    "vocabIndex": 5
  },
  {
    "q": "The angry workers were very brave and refused to ______ to the boss's unfair rules.",
    "options": [
      "photobomb",
      "cave in",
      "set up a committee",
      "travel by coach"
    ],
    "answer": 1,
    "cn": "憤怒的工人們非常勇敢，拒絕向老闆不公平的規定屈服讓步。",
    "vocabIndex": 5
  },
  {
    "q": "The police had to evacuate everyone after an anonymous caller made a serious ______.",
    "options": [
      "school cafeteria",
      "cable car",
      "bomb threat",
      "log cabin"
    ],
    "answer": 2,
    "cn": "在一名匿名者發出嚴重的炸彈威脅後，警方不得不疏散所有人。",
    "vocabIndex": 0
  },
  {
    "q": "Tourists rode the mountain ______ high above the green forest to reach the peak.",
    "options": [
      "bomb threat",
      "cave painting",
      "log cabin",
      "cable car"
    ],
    "answer": 3,
    "cn": "遊客們搭乘高懸在綠色森林上方的登山纜車到達山頂。",
    "vocabIndex": 2
  },
  {
    "q": "We stayed overnight in a charming ______ near the lake where we could fish all day.",
    "options": [
      "log cabin",
      "cable car",
      "bomb threat",
      "head coach"
    ],
    "answer": 0,
    "cn": "我們在湖邊一間迷人的原木小屋裡過夜，在那裡我們可以整天釣魚。",
    "vocabIndex": 1
  },
  {
    "q": "The students loved eating lunch together every afternoon in the spacious ______.",
    "options": [
      "cable car",
      "bomb threat",
      "school cafeteria",
      "log cabin"
    ],
    "answer": 2,
    "cn": "學生們每天下午都喜歡在寬敞的學校自助餐廳裡一同享用午餐。",
    "vocabIndex": 3
  },
  {
    "q": "Ancient humans created colorful ______ on the stone walls thousands of years ago.",
    "options": [
      "bomb threats",
      "cable cars",
      "log cabins",
      "cave paintings"
    ],
    "answer": 3,
    "cn": "數千年前，古代人類在石牆上創作了多彩的洞穴壁畫。",
    "vocabIndex": 4
  },
  {
    "q": "The experienced ______ praised the team for their great defense during the game.",
    "options": [
      "head coach",
      "cable car",
      "bomb threat",
      "log cabin"
    ],
    "answer": 0,
    "cn": "那位經驗豐富的總教練稱讚了球隊在比賽中出色的防守表現。",
    "vocabIndex": 6
  },
  {
    "q": "The mayor decided to ______ of doctors and scientists to study the new illness.",
    "options": [
      "cave in",
      "set up a committee",
      "travel by coach",
      "photobomb"
    ],
    "answer": 1,
    "cn": "市長決定成立一個委員會，由醫生與科學家組成來研究這起新疾病。",
    "vocabIndex": 7
  },
  {
    "q": "The teacher wrote clear examples on the board to ______ among the students.",
    "options": [
      "travel by coach",
      "photobomb",
      "cave in",
      "avoid confusion"
    ],
    "answer": 3,
    "cn": "老師在黑板上寫下了清晰的範例，以避免學生產生困惑與混淆。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "bomb": {
    "pos": "n./v.",
    "en_def": "a container filled with explosive material; to attack with bombs",
    "cn_def": "炸彈；轟炸（名詞/動詞）",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a container filled with explosive material; to attack with bombs",
        "cn_def": "炸彈；轟炸（名詞/動詞）"
      }
    ]
  },
  "cabin": {
    "pos": "n.",
    "en_def": "a small wooden shelter or house; the passenger compartment in an aircraft or ship",
    "cn_def": "小木屋；機艙；客艙（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small wooden shelter or house; the passenger compartment in an aircraft or ship",
        "cn_def": "小木屋；機艙；客艙（可數）"
      }
    ]
  },
  "cable": {
    "pos": "n./v.",
    "en_def": "a thick rope of wire or fiber used for construction, electricity, or television",
    "cn_def": "電纜；纜繩；有線電視；拍電報",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a thick rope of wire or fiber used for construction, electricity, or television",
        "cn_def": "電纜；纜繩；有線電視；拍電報"
      }
    ]
  },
  "cafeteria": {
    "pos": "n.",
    "en_def": "a restaurant in which customers serve themselves or are served from a counter",
    "cn_def": "自助餐廳；學生餐廳（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a restaurant in which customers serve themselves or are served from a counter",
        "cn_def": "自助餐廳；學生餐廳（可數）"
      }
    ]
  },
  "cave": {
    "pos": "n.",
    "en_def": "a natural underground chamber in a hillside or cliff",
    "cn_def": "洞穴；山洞（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a natural underground chamber in a hillside or cliff",
        "cn_def": "洞穴；山洞（可數）"
      }
    ]
  },
  "cave in": {
    "pos": "v.phr.",
    "en_def": "to collapse inwards; to yield or surrender under pressure",
    "cn_def": "坍塌；塌陷；屈服讓步",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to collapse inwards; to yield or surrender under pressure",
        "cn_def": "坍塌；塌陷；屈服讓步"
      }
    ]
  },
  "coach": {
    "pos": "n./v.",
    "en_def": "an athletic instructor; a comfortable long-distance bus; to train someone",
    "cn_def": "教練；長途巴士；訓練指導（名詞/動詞）",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "an athletic instructor; a comfortable long-distance bus; to train someone",
        "cn_def": "教練；長途巴士；訓練指導（名詞/動詞）"
      }
    ]
  },
  "committee": {
    "pos": "n.",
    "en_def": "a group of people appointed for a specific function by a larger group",
    "cn_def": "委員會（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a group of people appointed for a specific function by a larger group",
        "cn_def": "委員會（可數）"
      }
    ]
  },
  "confuse": {
    "pos": "v.",
    "en_def": "to make someone bewildered or perplexed; to mistake one thing for another",
    "cn_def": "使困惑；使混亂；弄混（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make someone bewildered or perplexed; to mistake one thing for another",
        "cn_def": "使困惑；使混亂；弄混（動詞）"
      }
    ]
  },
  "confusion": {
    "pos": "n.",
    "en_def": "uncertainty about what is happening, intended, or required",
    "cn_def": "困惑；混亂（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "uncertainty about what is happening, intended, or required",
        "cn_def": "困惑；混亂（不可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
