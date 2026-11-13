// Part 3 Quiz Data: organic – slope
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 20-3 - organic – slope",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "organic",
    "pos": "adj.",
    "cn_def": "有機的；器官的；生物的",
    "en_def": "produced or involving production without the use of chemical fertilizers or pesticides",
    "sentence": "Many health-conscious parents prefer to buy fresh {{BLANK}} vegetables for their growing children.",
    "cn": "許多注重健康的父母偏好為他們成長中的孩子購買新鮮的有機蔬菜。"
  },
  {
    "word": "patience",
    "pos": "n.",
    "cn_def": "耐心；忍耐力（不可數）",
    "en_def": "the capacity to accept or tolerate delay, trouble, or suffering without getting angry",
    "sentence": "After waiting in the endless airport security line for over two hours, the tired traveler began to lose his {{BLANK}}.",
    "cn": "在無止境的機場安檢隊伍中等待了兩個多小時後，疲憊的旅客開始失去耐心。"
  },
  {
    "word": "patient",
    "pos": "adj.",
    "cn_def": "有耐心的；容忍的",
    "en_def": "able to accept or tolerate delays, problems, or suffering without becoming annoyed",
    "sentence": "Our high school mathematics teacher is remarkably {{BLANK}} with students who struggle to understand difficult equations.",
    "cn": "我們的高中數學老師對那些難以理解複雜方程式的學生表現得極為有耐心。"
  },
  {
    "word": "punched",
    "pos": "v.",
    "cn_def": "用拳猛擊；打孔；按鍵（動詞）",
    "en_def": "to strike with the fist; to pierce a hole in something",
    "sentence": "The angry man lost control and {{BLANK}} his opponent during the heated street argument.",
    "cn": "那個憤怒的男子在激烈的街頭爭吵中失控並揮拳重擊了他的對手。"
  },
  {
    "word": "punch",
    "pos": "n.",
    "cn_def": "重拳；水果賓治雞尾酒；打孔器（可數/不可數）",
    "en_def": "a blow with the fist; a drink made with fruit juice and soda; a tool for making holes",
    "sentence": "The boxer knocked his opponent flat onto the canvas with just one swift, powerful {{BLANK}}.",
    "cn": "那名拳擊手僅憑一記迅猛有力的重拳就將對手擊倒在擂台上。"
  },
  {
    "word": "rocket",
    "pos": "n.",
    "cn_def": "火箭；煙火（可數）",
    "en_def": "a cylindrical projectile that can be propelled to a great height or through space",
    "sentence": "The advanced unmanned {{BLANK}} carrying satellite equipment successfully launched and entered orbit around the Earth.",
    "cn": "攜帶衛星設備的先進無人火箭成功升空並進入環繞地球的軌道。"
  },
  {
    "word": "rocketed",
    "pos": "v.",
    "cn_def": "飛速上升；急升；暴漲（動詞）",
    "en_def": "to move or progress with great speed, or increase rapidly",
    "sentence": "After starring in the blockbuster superhero movie, the young actress instantly {{BLANK}} to international fame and stardom.",
    "cn": "在主演了這部超級英雄大片後，那位年輕女演員立刻一夕爆紅／飛速成名。"
  },
  {
    "word": "shovel",
    "pos": "n.",
    "cn_def": "鐵鍬；鏟子（可數）",
    "en_def": "a tool with a broad flat blade and a handle, used for moving coal, earth, or snow",
    "sentence": "Every winter morning after a blizzard, my father takes a heavy metal {{BLANK}} outside to clear our long driveway.",
    "cn": "每逢暴風雪過後的冬日清晨，我父親都會拿著一把沉重的金屬鏟子到外面清理我們長長的車道。"
  },
  {
    "word": "shovel",
    "pos": "v.",
    "cn_def": "用鏟子剷；剷除（動詞）",
    "en_def": "to move, dig, or clear with or as if with a shovel",
    "sentence": "The hardworking neighbors banded together to {{BLANK}} thick snow off the front walkways for the elderly residents.",
    "cn": "辛勤的鄰居們團結在一起，為年長居民剷除前人行道上的厚雪。"
  },
  {
    "word": "similarity",
    "pos": "n.",
    "cn_def": "相似之處；類似性（可數/不可數）",
    "en_def": "the state or fact of being similar; a feature that is like another",
    "sentence": "Although the two twin brothers have different hobbies, their facial expressions bear a striking {{BLANK}} to each other.",
    "cn": "雖然這對雙胞胎兄弟有著不同的愛好，但他們的面部表情彼此有著驚人的相似之處。"
  },
  {
    "word": "skillful",
    "pos": "adj.",
    "cn_def": "熟練的；技術高超的",
    "en_def": "having or showing skill, proficiency, or expert technique",
    "sentence": "The delicate brain operation was successfully completed by a team of highly {{BLANK}} surgical specialists.",
    "cn": "這場精細的腦部手術是由一群技術精湛的外科專家團隊順利完成的。"
  },
  {
    "word": "sleeves",
    "pos": "n.",
    "cn_def": "袖子；套筒（可數）",
    "en_def": "the part of a garment that wholly or partly covers a person's arm",
    "sentence": "Before helping his father wash the muddy family car, Tommy carefully rolled up his shirt {{BLANK}}.",
    "cn": "在幫父親清洗泥濘的家庭汽車前，湯米仔細地捲起了襯衫袖子。"
  },
  {
    "word": "slopes",
    "pos": "n.",
    "cn_def": "斜坡；坡道；傾斜度（可數）",
    "en_def": "a surface of which one end or side is at a higher level than another; an incline",
    "sentence": "Hundreds of excited winter sports fans traveled to the Swiss resort to hit the snowy {{BLANK}} this weekend.",
    "cn": "數百名興奮的冬季運動愛好者本週末前往瑞士度假村去滑雪道滑雪。"
  }
];

const MCQS = [
  {
    "q": "The energetic skiers couldn't wait to grab their winter gear and hit the snowy ______.",
    "options": [
      "sleeves",
      "slopes",
      "shovels",
      "rockets"
    ],
    "answer": 1,
    "cn": "充滿活力的滑雪者迫不及待地拿起冬季裝備，前往積雪覆蓋的滑雪坡道。",
    "vocabIndex": 12
  },
  {
    "q": "Tommy carefully rolled up his shirt ______ before starting to wash the dirty kitchen dishes.",
    "options": [
      "slope",
      "rocket",
      "shovel",
      "sleeve"
    ],
    "answer": 3,
    "cn": "湯米在開始清洗骯髒的廚房碗盤前，仔細地捲起了他的襯衫袖子。",
    "vocabIndex": 11
  },
  {
    "q": "Dad picked up a heavy metal ______ to clear the thick winter snow off the front driveway.",
    "options": [
      "shovel",
      "similarity",
      "patience",
      "sleeve"
    ],
    "answer": 0,
    "cn": "爸爸拿起一把沉重的金屬雪鏟，來清理前車道上的厚重冬雪。",
    "vocabIndex": 7
  },
  {
    "q": "The space agency successfully launched a giant unmanned ______ to explore distant planets.",
    "options": [
      "shovel",
      "sleeve",
      "rocket",
      "slope"
    ],
    "answer": 2,
    "cn": "太空總署成功發射了一枚巨型無人火箭以探索遙遠的行星。",
    "vocabIndex": 5
  },
  {
    "q": "Teaching active young children basic manners and reading requires a great deal of ______.",
    "options": [
      "rocket",
      "patience",
      "shovel",
      "sleeve"
    ],
    "answer": 1,
    "cn": "教導活潑的幼童基本禮貌和閱讀需要極大的耐心。",
    "vocabIndex": 1
  },
  {
    "q": "The boxer knocked his opponent down to the floor with just one powerful, swift ______.",
    "options": [
      "slope",
      "shovel",
      "punch",
      "sleeve"
    ],
    "answer": 2,
    "cn": "那名拳擊手僅用一記強大迅猛的重拳就將對手打倒在地。",
    "vocabIndex": 3
  },
  {
    "q": "Party guests enjoyed drinking glasses of refreshing fruit ______ mixed with juice and sparkling soda.",
    "options": [
      "slope",
      "sleeve",
      "shovel",
      "punch"
    ],
    "answer": 3,
    "cn": "派對賓客暢飲著以果汁和氣泡蘇打調製的清爽水果賓治酒。",
    "vocabIndex": 3
  },
  {
    "q": "Although they are cousins, there is a striking facial ______ between the two young boys.",
    "options": [
      "similarity",
      "sleeve",
      "shovel",
      "slope"
    ],
    "answer": 0,
    "cn": "雖然他們是堂兄弟，但這兩個小男孩之間有著驚人的面部相似之處。",
    "vocabIndex": 9
  },
  {
    "q": "The conductor used a metal device to ______ a small hole in each passenger's train ticket.",
    "options": [
      "shovel",
      "punch",
      "rocket",
      "slope"
    ],
    "answer": 1,
    "cn": "列車長使用金屬器具在每位乘客的火車票上打了一個孔。",
    "vocabIndex": 3
  },
  {
    "q": "After the huge snowstorm, residents came out to ______ the sidewalks in front of their homes.",
    "options": [
      "shovel",
      "rocket",
      "punch",
      "sleeve"
    ],
    "answer": 0,
    "cn": "暴風雪過後，居民紛紛出來剷除家門前人行道上的積雪。",
    "vocabIndex": 7
  },
  {
    "q": "Following his brilliant performance in the film, the young actor's popularity ______ overnight.",
    "options": [
      "shoveled",
      "punched",
      "rocketed",
      "sleeved"
    ],
    "answer": 2,
    "cn": "在電影中展現精彩表演後，這位年輕演員的聲勢在一夕之間飆升。",
    "vocabIndex": 5
  },
  {
    "q": "The delicate brain operation was successfully completed by a remarkably ______ surgeon.",
    "options": [
      "sloping",
      "organic",
      "patient",
      "skillful"
    ],
    "answer": 3,
    "cn": "這場精密的外科手術是由一位技術極為高超熟練的外科醫生圓滿完成的。",
    "vocabIndex": 10
  },
  {
    "q": "More and more health-conscious shoppers choose to buy certified ______ food at local markets.",
    "options": [
      "skillful",
      "patient",
      "organic",
      "punched"
    ],
    "answer": 2,
    "cn": "越來越多注重健康的消費者選擇在當地市場購買認證的有機食品。",
    "vocabIndex": 0
  },
  {
    "q": "The kind kindergarten teacher is always gentle and extremely ______ with crying young toddlers.",
    "options": [
      "organic",
      "skillful",
      "sloping",
      "patient"
    ],
    "answer": 3,
    "cn": "那位親切的幼稚園老師對哭泣的小幼兒總是溫柔且極其有耐心。",
    "vocabIndex": 2
  },
  {
    "q": "The steep mountain ______ was covered in loose rocks, making hiking very treacherous.",
    "options": [
      "slope",
      "sleeve",
      "shovel",
      "patience"
    ],
    "answer": 0,
    "cn": "陡峭的山坡覆蓋著鬆動的岩石，使健行變得非常危險。",
    "vocabIndex": 12
  },
  {
    "q": "The magician held everyone's attention because he always had another clever trick up his ______.",
    "options": [
      "slope",
      "sleeve",
      "shovel",
      "rocket"
    ],
    "answer": 1,
    "cn": "魔術師吸引了所有人的注意，因為他總是暗藏錦囊妙計／袖中藏有妙招。",
    "vocabIndex": 11
  },
  {
    "q": "Fixing a simple bicycle flat tire is really not ______ science; anyone can easily learn it.",
    "options": [
      "shovel",
      "sleeve",
      "slope",
      "rocket"
    ],
    "answer": 3,
    "cn": "修理簡單的自行車爆胎真的不是什麼高深複雜的學問；任何人都能輕鬆學會。",
    "vocabIndex": 5
  },
  {
    "q": "The starving boy was so hungry that he began to ______ pasta greedily into his mouth.",
    "options": [
      "rocket",
      "punch",
      "shovel",
      "slope"
    ],
    "answer": 2,
    "cn": "飢餓的男孩太餓了，以致於開始貪婪地將義大利麵大口大口塞進嘴裡。",
    "vocabIndex": 7
  },
  {
    "q": "The customer was so frustrated with the slow service that she completely lost her ______.",
    "options": [
      "patience",
      "shovel",
      "sleeve",
      "slope"
    ],
    "answer": 0,
    "cn": "該顧客對緩慢的服務感到非常沮喪，以致於完全失去了耐心。",
    "vocabIndex": 1
  },
  {
    "q": "This famous hand-woven Persian rug was made by a very ______ craftswoman over two years.",
    "options": [
      "organic",
      "skillful",
      "patient",
      "sloping"
    ],
    "answer": 1,
    "cn": "這張著名的手工編織波斯地毯是由一位技術極為精湛熟練的女工匠歷時兩年製作而成的。",
    "vocabIndex": 10
  },
  {
    "q": "Due to a severe drought in the country, the market price of fresh fruits has ______ this month.",
    "options": [
      "shoveled",
      "sleeved",
      "punched",
      "rocketed"
    ],
    "answer": 3,
    "cn": "由於國內嚴重的乾旱，本月新鮮水果的市場價格暴漲。",
    "vocabIndex": 5
  },
  {
    "q": "The detective noticed a remarkable ______ between the two handwriting samples found in the letters.",
    "options": [
      "slope",
      "sleeve",
      "similarity",
      "shovel"
    ],
    "answer": 2,
    "cn": "偵探注意到信件中發現的兩份筆跡樣本之間有著顯著的相似之處。",
    "vocabIndex": 9
  },
  {
    "q": "Consumers are willing to pay more money for fresh ______ apples grown without synthetic pesticides.",
    "options": [
      "organic",
      "skillful",
      "patient",
      "sloping"
    ],
    "answer": 0,
    "cn": "消費者願意花更多錢購買不使用合成農藥種植的新鮮有機蘋果。",
    "vocabIndex": 0
  },
  {
    "q": "The angry thief threw a quick ______ at the security officer while trying to escape.",
    "options": [
      "sleeve",
      "punch",
      "shovel",
      "slope"
    ],
    "answer": 1,
    "cn": "憤怒的竊賊在企圖逃跑時向保全人員揮出了一記迅捷的重拳。",
    "vocabIndex": 3
  },
  {
    "q": "Please enter your security code by ______ in four digits on the numeric keypad.",
    "options": [
      "rocketing",
      "shoveling",
      "punching",
      "sloping"
    ],
    "answer": 2,
    "cn": "請在數字鍵盤上鍵入／按下四位數字來輸入您的安全密碼。",
    "vocabIndex": 3
  }
];

const LOOKUP = {
  "organic": {
    "pos": "adj.",
    "en_def": "produced or involving production without the use of chemical fertilizers or pesticides",
    "cn_def": "有機的；器官的；生物的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "produced or involving production without the use of chemical fertilizers or pesticides",
        "cn_def": "有機的；器官的；生物的"
      }
    ]
  },
  "patience": {
    "pos": "n.",
    "en_def": "the capacity to accept or tolerate delay, trouble, or suffering without getting angry",
    "cn_def": "耐心；忍耐力（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the capacity to accept or tolerate delay, trouble, or suffering without getting angry",
        "cn_def": "耐心；忍耐力（不可數）"
      }
    ]
  },
  "patient": {
    "pos": "adj.",
    "en_def": "able to accept or tolerate delays, problems, or suffering without becoming annoyed",
    "cn_def": "有耐心的；容忍的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to accept or tolerate delays, problems, or suffering without becoming annoyed",
        "cn_def": "有耐心的；容忍的"
      }
    ]
  },
  "punch": {
    "pos": "v.",
    "en_def": "to strike with the fist; to pierce a hole in something",
    "cn_def": "用拳猛擊；打孔；按鍵（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to strike with the fist; to pierce a hole in something",
        "cn_def": "用拳猛擊；打孔；按鍵（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a blow with the fist; a drink made with fruit juice and soda; a tool for making holes",
        "cn_def": "重拳；水果賓治雞尾酒；打孔器（可數/不可數）"
      }
    ]
  },
  "punched": {
    "pos": "v.",
    "en_def": "to strike with the fist; to pierce a hole in something",
    "cn_def": "用拳猛擊；打孔；按鍵（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to strike with the fist; to pierce a hole in something",
        "cn_def": "用拳猛擊；打孔；按鍵（動詞）"
      }
    ]
  },
  "rocket": {
    "pos": "n.",
    "en_def": "a cylindrical projectile that can be propelled to a great height or through space",
    "cn_def": "火箭；煙火（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a cylindrical projectile that can be propelled to a great height or through space",
        "cn_def": "火箭；煙火（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to move or progress with great speed, or increase rapidly",
        "cn_def": "飛速上升；急升；暴漲（動詞）"
      }
    ]
  },
  "rocketed": {
    "pos": "v.",
    "en_def": "to move or progress with great speed, or increase rapidly",
    "cn_def": "飛速上升；急升；暴漲（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to move or progress with great speed, or increase rapidly",
        "cn_def": "飛速上升；急升；暴漲（動詞）"
      }
    ]
  },
  "shovel": {
    "pos": "n.",
    "en_def": "a tool with a broad flat blade and a handle, used for moving coal, earth, or snow",
    "cn_def": "鐵鍬；鏟子（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a tool with a broad flat blade and a handle, used for moving coal, earth, or snow",
        "cn_def": "鐵鍬；鏟子（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to move, dig, or clear with or as if with a shovel",
        "cn_def": "用鏟子剷；剷除（動詞）"
      }
    ]
  },
  "similarity": {
    "pos": "n.",
    "en_def": "the state or fact of being similar; a feature that is like another",
    "cn_def": "相似之處；類似性（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state or fact of being similar; a feature that is like another",
        "cn_def": "相似之處；類似性（可數/不可數）"
      }
    ]
  },
  "skillful": {
    "pos": "adj.",
    "en_def": "having or showing skill, proficiency, or expert technique",
    "cn_def": "熟練的；技術高超的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having or showing skill, proficiency, or expert technique",
        "cn_def": "熟練的；技術高超的"
      }
    ]
  },
  "sleeves": {
    "pos": "n.",
    "en_def": "the part of a garment that wholly or partly covers a person's arm",
    "cn_def": "袖子；套筒（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the part of a garment that wholly or partly covers a person's arm",
        "cn_def": "袖子；套筒（可數）"
      }
    ]
  },
  "sleeve": {
    "pos": "n.",
    "en_def": "the part of a garment that wholly or partly covers a person's arm",
    "cn_def": "袖子；套筒（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the part of a garment that wholly or partly covers a person's arm",
        "cn_def": "袖子；套筒（可數）"
      }
    ]
  },
  "slopes": {
    "pos": "n.",
    "en_def": "a surface of which one end or side is at a higher level than another; an incline",
    "cn_def": "斜坡；坡道；傾斜度（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a surface of which one end or side is at a higher level than another; an incline",
        "cn_def": "斜坡；坡道；傾斜度（可數）"
      }
    ]
  },
  "slope": {
    "pos": "n.",
    "en_def": "a surface of which one end or side is at a higher level than another; an incline",
    "cn_def": "斜坡；坡道；傾斜度（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a surface of which one end or side is at a higher level than another; an incline",
        "cn_def": "斜坡；坡道；傾斜度（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
