// Part 2 Quiz Data: drip – further
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 6-2 - drip – further",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "dripped",
    "pos": "v.",
    "cn_def": "滴下；漏水；淌（動詞）",
    "en_def": "to fall in small drops of liquid, or to let liquid fall in drops",
    "sentence": "As the white candle burned quietly on the dining table, melted wax {{BLANK}} down its sides.",
    "cn": "當白色蠟燭在餐桌上靜靜燃燒時，融化的蠟油順著兩側滴了下來。"
  },
  {
    "word": "drip",
    "pos": "n.",
    "cn_def": "水滴；滴水聲；點滴注射（可數）",
    "en_def": "a small drop of liquid that falls, or the sound of falling drops",
    "sentence": "We could hardly fall asleep in the old wooden cabin because of the constant {{BLANK}} of rain on the tin roof.",
    "cn": "因為鐵皮屋頂上持續不斷的雨水滴答聲，我們在老舊的小木屋裡幾乎無法入睡。"
  },
  {
    "word": "drugstore",
    "pos": "n.",
    "cn_def": "藥妝店；雜貨藥局（可數）",
    "en_def": "a shop that sells medicines, cosmetics, toiletries, and daily goods",
    "sentence": "Whenever David catches a slight cold, he walks down the street to the local {{BLANK}} to buy fever medicine.",
    "cn": "每當大衛輕微感冒時，他都會走到街上的當地藥妝店購買退燒藥。"
  },
  {
    "word": "pharmacy",
    "pos": "n.",
    "cn_def": "藥局；調劑室（可數）",
    "en_def": "a store or hospital dispensary where medicinal drugs are prepared and sold",
    "sentence": "After finishing his medical checkup at the clinic, Mr. Adams went to the nearest {{BLANK}} to pick up his prescription pills.",
    "cn": "在診所完成健康檢查後，亞當斯先生前往最近的藥局領取他的處方藥丸。"
  },
  {
    "word": "dumb",
    "pos": "adj.",
    "cn_def": "啞的；說不出話的；愚蠢愚笨的",
    "en_def": "unable to speak (dated); stupid or foolish in informal modern usage",
    "sentence": "The shocking news of the sudden earthquake left the entire newsroom completely struck {{BLANK}} for several seconds.",
    "cn": "突然發生地震的震驚消息讓整個新聞編輯室足足好幾秒驚訝得說不出話來／啞口無言。"
  },
  {
    "word": "echo",
    "pos": "n.",
    "cn_def": "回音；反響；共鳴（可數）",
    "en_def": "a sound caused by the reflection of sound waves from a surface",
    "sentence": "When the energetic hiker shouted loudly at the top of the mountain peak, a clear {{BLANK}} bounced back from the cliffs.",
    "cn": "當充滿活力的登山者在山頂大聲呼喊時，懸崖峭壁間傳來一聲清晰的回音。"
  },
  {
    "word": "echoed",
    "pos": "v.",
    "cn_def": "發出回音；迴響；附和（動詞）",
    "en_def": "to repeat or resound with an echo; to repeat someone's words or feelings",
    "sentence": "The cheerful laughter of playing children {{BLANK}} loudly through the empty hallways of the quiet school building.",
    "cn": "玩耍孩童們歡快的笑聲在安靜校舍空曠的走廊裡響亮地迴盪。"
  },
  {
    "word": "elbow",
    "pos": "n.",
    "cn_def": "手肘；肘部（可數）",
    "en_def": "the joint between the forearm and the upper arm",
    "sentence": "Cleaning the rusty metal fence took several hours and required a great deal of hard {{BLANK}} grease.",
    "cn": "清理生鏽的金屬柵欄花了數小時，需要付出極大的力氣苦功。"
  },
  {
    "word": "engage",
    "pos": "v.",
    "cn_def": "吸引；參與；從事；訂婚（動詞）",
    "en_def": "to occupy or attract someone's interest; to participate in",
    "sentence": "The experienced science teacher used interactive games and fun experiments to {{BLANK}} the curious students in the lesson.",
    "cn": "那位經驗豐富的理化老師運用互動遊戲與趣味實驗，在課堂上吸引好奇學生的注意力。"
  },
  {
    "word": "engaged",
    "pos": "adj.",
    "cn_def": "訂婚的；忙於…的；通話中的",
    "en_def": "having agreed to marry someone; busy or occupied with a task",
    "sentence": "David and Karen announced that they had gotten {{BLANK}} after dating happily for more than four years.",
    "cn": "大衛與凱倫在甜蜜交往四年多之後，宣布他們已經訂婚了。"
  },
  {
    "word": "engagement",
    "pos": "n.",
    "cn_def": "訂婚；約定；公務會約（可數）",
    "en_def": "an agreement to marry someone; a formal arrangement to do something",
    "sentence": "The happy young couple celebrated their official {{BLANK}} by hosting an intimate dinner party for their families.",
    "cn": "這對幸福的年輕伴侶透過為雙方家庭舉辦溫馨的晚宴，來慶祝他們的正式訂婚。"
  },
  {
    "word": "exhibition",
    "pos": "n.",
    "cn_def": "展覽；展覽會；展現（可數/不可數）",
    "en_def": "a public display of works of art or items of interest",
    "sentence": "The national museum opened a magnificent {{BLANK}} displaying ancient gold treasures discovered along the Silk Road.",
    "cn": "國家博物館開辦了一場宏偉的展覽，展出沿著絲路發現的古代黃金珍寶。"
  },
  {
    "word": "exhibit",
    "pos": "v.",
    "cn_def": "展出；展覽；顯現出（動詞）",
    "en_def": "to publicly display a work of art or item in an art gallery or museum",
    "sentence": "Many talented local sculptors will {{BLANK}} their unique marble artworks at the annual summer craft festival.",
    "cn": "許多才華橫溢的在地雕塑家將在一年一度的夏季工藝節上展出他們獨特的大理石藝術品。"
  },
  {
    "word": "farther",
    "pos": "adj./adv.",
    "cn_def": "更遠的；較遠地（指實體物理距離）",
    "en_def": "at, to, or by a greater physical distance",
    "sentence": "The weary travelers were completely exhausted and felt they could not walk even one meter {{BLANK}} in the snow.",
    "cn": "疲憊的旅人們精疲力竭，覺得自己連在雪地中再多走遠一點的力氣都沒有了。"
  },
  {
    "word": "further",
    "pos": "adj./adv.",
    "cn_def": "進一步的；更深一層的；此外",
    "en_def": "to a greater degree or extent; additional",
    "sentence": "If you require any {{BLANK}} information about our master degree program, please contact the admissions office.",
    "cn": "如果您需要關於我們碩士學程的任何進一步資訊，請洽詢招生辦公室。"
  }
];

const MCQS = [
  {
    "q": "The sound of rain hitting the roof made a quiet ______ that put the baby to sleep.",
    "options": [
      "drugstore",
      "echo",
      "elbow",
      "drip"
    ],
    "answer": 3,
    "cn": "雨水打在屋頂上的聲音形成輕微的滴答聲，哄著小寶寶入睡。",
    "vocabIndex": 0
  },
  {
    "q": "When I yelled inside the deep, empty cave, I could hear a loud ______ come back to me.",
    "options": [
      "echo",
      "elbow",
      "drugstore",
      "exhibition"
    ],
    "answer": 0,
    "cn": "當我在深邃空曠的洞穴中呼喊時，我能聽見一聲響亮的回音傳了回來。",
    "vocabIndex": 5
  },
  {
    "q": "Mom walked to the corner ______ to buy some soap and cough drops for my cold.",
    "options": [
      "elbow",
      "drugstore",
      "echo",
      "drip"
    ],
    "answer": 1,
    "cn": "媽媽走到街角的藥妝店，買了一些肥皂與喉糖來緩解我的感冒。",
    "vocabIndex": 2
  },
  {
    "q": "The doctor gave me a paper note to take to the ______ to pick up my ear medicine.",
    "options": [
      "drip",
      "elbow",
      "pharmacy",
      "echo"
    ],
    "answer": 2,
    "cn": "醫生給了我一張紙本處方箋，讓我帶去藥局領取我的耳朵藥水。",
    "vocabIndex": 3
  },
  {
    "q": "Tim scraped his ______ on the ground when he fell off his bike on the playground.",
    "options": [
      "drugstore",
      "elbow",
      "echo",
      "exhibition"
    ],
    "answer": 1,
    "cn": "提姆在操場上從自行車摔下來時，在地面上擦傷了他的手肘。",
    "vocabIndex": 7
  },
  {
    "q": "We went to the art museum to see a special ______ of famous landscape paintings.",
    "options": [
      "exhibition",
      "drugstore",
      "elbow",
      "drip"
    ],
    "answer": 0,
    "cn": "我們去美術館參觀了一場著名風景畫的特別展覽會。",
    "vocabIndex": 11
  },
  {
    "q": "The young couple invited fifty friends to a party to celebrate their romantic ______.",
    "options": [
      "drugstore",
      "echo",
      "elbow",
      "engagement"
    ],
    "answer": 3,
    "cn": "那對年輕伴侶邀請了五十位朋友參加派對，慶祝他們浪漫的訂婚。",
    "vocabIndex": 10
  },
  {
    "q": "The hospital ______ provides medicine for sick patients who need help right away.",
    "options": [
      "elbow",
      "echo",
      "pharmacy",
      "drip"
    ],
    "answer": 2,
    "cn": "該醫院的調劑藥局為需要立即救助的生病患者提供藥品。",
    "vocabIndex": 3
  },
  {
    "q": "He rubbed his sore ______ after playing tennis for three hours in the morning.",
    "options": [
      "drugstore",
      "elbow",
      "exhibition",
      "echo"
    ],
    "answer": 1,
    "cn": "早上打了三個小時網球後，他揉了揉自己痠痛的手肘。",
    "vocabIndex": 7
  },
  {
    "q": "Water was leaking from the pipe and making a loud ______ in the basement.",
    "options": [
      "drugstore",
      "pharmacy",
      "drip",
      "elbow"
    ],
    "answer": 2,
    "cn": "水管正在漏水，在地下室發出響亮的滴答聲。",
    "vocabIndex": 0
  },
  {
    "q": "Water began to ______ from the broken ceiling after the terrible rainstorm.",
    "options": [
      "engage",
      "exhibit",
      "echo",
      "drip"
    ],
    "answer": 3,
    "cn": "可怕的暴風雨過後，水開始從破損的天花板滴落下來。",
    "vocabIndex": 0
  },
  {
    "q": "The boy's loud singing ______ across the quiet rooms of the empty school building.",
    "options": [
      "echoed",
      "engaged",
      "dripped",
      "exhibited"
    ],
    "answer": 0,
    "cn": "男孩響亮的歌聲在空無一人的校舍寂靜房間裡迴盪著。",
    "vocabIndex": 5
  },
  {
    "q": "The exciting science video really helped to ______ the young students in learning.",
    "options": [
      "drip",
      "engage",
      "echo",
      "exhibit"
    ],
    "answer": 1,
    "cn": "這部精彩的科學影片確實有助於在學習中吸引年幼學生投入。",
    "vocabIndex": 8
  },
  {
    "q": "The local museum will ______ rare bird statues during the spring holiday week.",
    "options": [
      "exhibit",
      "drip",
      "echo",
      "engage"
    ],
    "answer": 0,
    "cn": "當地博物館將在春節假期期間展出罕見的鳥類雕像。",
    "vocabIndex": 12
  },
  {
    "q": "Hot wax from the burning candle ______ onto the table and made a mess.",
    "options": [
      "engaged",
      "echoed",
      "dripped",
      "exhibited"
    ],
    "answer": 2,
    "cn": "燃燒蠟燭的滾燙蠟油滴落在桌上，弄得一團糟。",
    "vocabIndex": 0
  },
  {
    "q": "The school band will ______ their music instruments for visitors on open day.",
    "options": [
      "drip",
      "engage",
      "echo",
      "exhibit"
    ],
    "answer": 3,
    "cn": "學校樂隊將在校園開放日為訪客展示／展出他們的樂器。",
    "vocabIndex": 12
  },
  {
    "q": "It was a ______ mistake to leave the front door unlocked while going on vacation.",
    "options": [
      "dumb",
      "further",
      "engaged",
      "farther"
    ],
    "answer": 0,
    "cn": "出門度假時沒把前門鎖上，真是一個愚蠢的錯誤。",
    "vocabIndex": 4
  },
  {
    "q": "My sister is very happy because she just got ______ to her kind boyfriend.",
    "options": [
      "farther",
      "dumb",
      "further",
      "engaged"
    ],
    "answer": 3,
    "cn": "我姊姊非常開心，因為她剛與善良的男友訂婚了。",
    "vocabIndex": 9
  },
  {
    "q": "The town park is a little ______ away from my home than the library is.",
    "options": [
      "engaged",
      "farther",
      "dumb",
      "further"
    ],
    "answer": 1,
    "cn": "城鎮公園離我家的距離比圖書館還要更遠一點。",
    "vocabIndex": 13
  },
  {
    "q": "Please ask the teacher if you need ______ help with your English grammar.",
    "options": [
      "farther",
      "dumb",
      "further",
      "engaged"
    ],
    "answer": 2,
    "cn": "如果你在英文文法上需要進一步的協助，請向老師請教。",
    "vocabIndex": 14
  },
  {
    "q": "We were so tired after hiking all morning that we could not walk any ______.",
    "options": [
      "farther",
      "engaged",
      "dumb",
      "further"
    ],
    "answer": 0,
    "cn": "健行了一整個早晨後我們太累了，以至於再也走不動得更遠了。",
    "vocabIndex": 13
  },
  {
    "q": "At the big party, the new writer was excited to ______ with famous movie stars.",
    "options": [
      "be on a drip",
      "play dumb",
      "rub elbows",
      "make a dash"
    ],
    "answer": 2,
    "cn": "在那場盛大派對上，這位新進作家對於能與著名電影明星結交攀談／名流往來感到非常興奮。",
    "vocabIndex": 7
  },
  {
    "q": "I know you broke the glass window, so please don't ______ and tell me the truth.",
    "options": [
      "rub elbows",
      "play dumb",
      "be on a drip",
      "hit a wall"
    ],
    "answer": 1,
    "cn": "我知道你打破了玻璃窗，所以請別再裝傻，把實情告訴我。",
    "vocabIndex": 4
  },
  {
    "q": "The sick man was weak in the hospital bed and had to ______ for two days.",
    "options": [
      "play dumb",
      "rub elbows",
      "kick the bucket",
      "be on a drip"
    ],
    "answer": 3,
    "cn": "那位生病的男子在病床上很虛弱，不得不打點滴兩天。",
    "vocabIndex": 0
  },
  {
    "q": "The police asked the driver ______ questions to find out how the accident happened.",
    "options": [
      "further",
      "farther",
      "dumb",
      "engaged"
    ],
    "answer": 0,
    "cn": "警方詢問了該駕駛進一步的問題，以查明事故是如何發生的。",
    "vocabIndex": 14
  }
];

const LOOKUP = {
  "drip": {
    "pos": "v.",
    "en_def": "to fall in small drops of liquid, or to let liquid fall in drops",
    "cn_def": "滴下；漏水；淌（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to fall in small drops of liquid, or to let liquid fall in drops",
        "cn_def": "滴下；漏水；淌（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a small drop of liquid that falls, or the sound of falling drops",
        "cn_def": "水滴；滴水聲；點滴注射（可數）"
      }
    ]
  },
  "dripped": {
    "pos": "v.",
    "en_def": "to fall in small drops of liquid, or to let liquid fall in drops",
    "cn_def": "滴下；漏水；淌（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to fall in small drops of liquid, or to let liquid fall in drops",
        "cn_def": "滴下；漏水；淌（動詞）"
      }
    ]
  },
  "drugstore": {
    "pos": "n.",
    "en_def": "a shop that sells medicines, cosmetics, toiletries, and daily goods",
    "cn_def": "藥妝店；雜貨藥局（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a shop that sells medicines, cosmetics, toiletries, and daily goods",
        "cn_def": "藥妝店；雜貨藥局（可數）"
      }
    ]
  },
  "pharmacy": {
    "pos": "n.",
    "en_def": "a store or hospital dispensary where medicinal drugs are prepared and sold",
    "cn_def": "藥局；調劑室（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a store or hospital dispensary where medicinal drugs are prepared and sold",
        "cn_def": "藥局；調劑室（可數）"
      }
    ]
  },
  "dumb": {
    "pos": "adj.",
    "en_def": "unable to speak (dated); stupid or foolish in informal modern usage",
    "cn_def": "啞的；說不出話的；愚蠢愚笨的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "unable to speak (dated); stupid or foolish in informal modern usage",
        "cn_def": "啞的；說不出話的；愚蠢愚笨的"
      }
    ]
  },
  "echo": {
    "pos": "n.",
    "en_def": "a sound caused by the reflection of sound waves from a surface",
    "cn_def": "回音；反響；共鳴（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sound caused by the reflection of sound waves from a surface",
        "cn_def": "回音；反響；共鳴（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to repeat or resound with an echo; to repeat someone's words or feelings",
        "cn_def": "發出回音；迴響；附和（動詞）"
      }
    ]
  },
  "echoed": {
    "pos": "v.",
    "en_def": "to repeat or resound with an echo; to repeat someone's words or feelings",
    "cn_def": "發出回音；迴響；附和（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to repeat or resound with an echo; to repeat someone's words or feelings",
        "cn_def": "發出回音；迴響；附和（動詞）"
      }
    ]
  },
  "elbow": {
    "pos": "n.",
    "en_def": "the joint between the forearm and the upper arm",
    "cn_def": "手肘；肘部（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the joint between the forearm and the upper arm",
        "cn_def": "手肘；肘部（可數）"
      }
    ]
  },
  "engage": {
    "pos": "v.",
    "en_def": "to occupy or attract someone's interest; to participate in",
    "cn_def": "吸引；參與；從事；訂婚（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to occupy or attract someone's interest; to participate in",
        "cn_def": "吸引；參與；從事；訂婚（動詞）"
      }
    ]
  },
  "engaged": {
    "pos": "adj.",
    "en_def": "having agreed to marry someone; busy or occupied with a task",
    "cn_def": "訂婚的；忙於…的；通話中的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having agreed to marry someone; busy or occupied with a task",
        "cn_def": "訂婚的；忙於…的；通話中的"
      }
    ]
  },
  "engagement": {
    "pos": "n.",
    "en_def": "an agreement to marry someone; a formal arrangement to do something",
    "cn_def": "訂婚；約定；公務會約（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an agreement to marry someone; a formal arrangement to do something",
        "cn_def": "訂婚；約定；公務會約（可數）"
      }
    ]
  },
  "exhibition": {
    "pos": "n.",
    "en_def": "a public display of works of art or items of interest",
    "cn_def": "展覽；展覽會；展現（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a public display of works of art or items of interest",
        "cn_def": "展覽；展覽會；展現（可數/不可數）"
      }
    ]
  },
  "exhibit": {
    "pos": "v.",
    "en_def": "to publicly display a work of art or item in an art gallery or museum",
    "cn_def": "展出；展覽；顯現出（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to publicly display a work of art or item in an art gallery or museum",
        "cn_def": "展出；展覽；顯現出（動詞）"
      }
    ]
  },
  "farther": {
    "pos": "adj./adv.",
    "en_def": "at, to, or by a greater physical distance",
    "cn_def": "更遠的；較遠地（指實體物理距離）",
    "combined": [
      {
        "pos": "adj./adv.",
        "en_def": "at, to, or by a greater physical distance",
        "cn_def": "更遠的；較遠地（指實體物理距離）"
      }
    ]
  },
  "further": {
    "pos": "adj./adv.",
    "en_def": "to a greater degree or extent; additional",
    "cn_def": "進一步的；更深一層的；此外",
    "combined": [
      {
        "pos": "adj./adv.",
        "en_def": "to a greater degree or extent; additional",
        "cn_def": "進一步的；更深一層的；此外"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
