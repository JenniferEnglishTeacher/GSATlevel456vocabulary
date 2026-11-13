// Part 1 Quiz Data: accurate – fist
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 13-1 - accurate – fist",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "accurate",
    "pos": "adj.",
    "cn_def": "精確的；準確無誤的",
    "en_def": "correct in all details; exact and free from error",
    "sentence": "The scientist provided a highly {{BLANK}} description of how the virus spreads among human cells.",
    "cn": "那位科學家提供了關於該病毒如何在人體細胞間傳播的極為準確無誤的描述。"
  },
  {
    "word": "accuracy",
    "pos": "n.",
    "cn_def": "準確性；精確度（不可數）",
    "en_def": "the quality or state of being correct, precise, or exact",
    "sentence": "The editor spent three hours checking the news article for factual {{BLANK}} before publishing it online.",
    "cn": "編輯在線上發表新聞報導之前花了三個小時檢查其事實準確性。"
  },
  {
    "word": "achieve",
    "pos": "v.",
    "cn_def": "實現；達成；贏得",
    "en_def": "to successfully bring about or reach a desired goal by effort",
    "sentence": "Through persistent dedication and disciplined training, the young runner managed to {{BLANK}} his lifelong dream of winning Olympic gold.",
    "cn": "透過堅持不懈的奉獻與自律訓練，那位年輕跑者成功實現了他贏得奧運金牌的終生夢想。"
  },
  {
    "word": "achievement",
    "pos": "n.",
    "cn_def": "成就；豐功偉業（可數/不可數）",
    "en_def": "a thing done successfully, typically by effort, courage, or skill",
    "sentence": "Graduating at the top of her medical school class was a truly remarkable {{BLANK}} for Angela.",
    "cn": "以醫學院第一名成績畢業對安琪拉而言確實是一項卓越的成就。"
  },
  {
    "word": "attract",
    "pos": "v.",
    "cn_def": "吸引；引起…的好感／興趣",
    "en_def": "to cause someone to come to a place or be interested in something",
    "sentence": "Bright flashing advertising neon signs on the avenue are designed specifically to {{BLANK}} the attention of passing shoppers.",
    "cn": "大道上閃爍明亮的霓虹廣告招牌專門設計用來吸引路過購物者的注意力。"
  },
  {
    "word": "attraction",
    "pos": "n.",
    "cn_def": "吸引力；觀光勝地（可數/不可數）",
    "en_def": "a feature or quality that makes something interesting or appealing",
    "sentence": "Living in a vibrant cosmopolitan metropolis holds great {{BLANK}} for ambitious young university graduates.",
    "cn": "居住在充滿活力的大都會對雄心勃勃的年輕大學畢業生而言極具吸引力。"
  },
  {
    "word": "attractive",
    "pos": "adj.",
    "cn_def": "吸引人的；有魅力的；令人動心的",
    "en_def": "pleasing or appealing to the senses, mind, or eye",
    "sentence": "The multinational software company offered Jason an extraordinarily {{BLANK}} salary package that he could not refuse.",
    "cn": "這家跨國軟體公司向傑森提供了一份令人難以拒絕的極為誘人且優渥的薪資福利。"
  },
  {
    "word": "automatic",
    "pos": "adj.",
    "cn_def": "自動的；不假思索的；無意識的",
    "en_def": "operating by itself with little or no direct human control; done unconsciously",
    "sentence": "Most modern suburban supermarkets have sliding {{BLANK}} doors that open instantly as soon as customers step near.",
    "cn": "大多數現代郊區超市都配有感應滑動自動門，顧客一靠近就會立即開啟。"
  },
  {
    "word": "credit",
    "pos": "n.",
    "cn_def": "信用；功勞；學分（不可數/可數）",
    "en_def": "public acknowledgment or praise; an entry recording a sum received; reputation for solvency",
    "sentence": "Although the entire engineering team worked all weekend, the selfish manager took all the {{BLANK}} for the successful product launch.",
    "cn": "儘管整個工程團隊週末都在加班，那位自私的經理卻把產品成功發布的所有功勞攬在自己身上。"
  },
  {
    "word": "credit",
    "pos": "v.",
    "cn_def": "歸功於；存入（金額）（動詞）",
    "en_def": "to publicly attribute something good to someone; to add money to an account",
    "sentence": "The online store promised to {{BLANK}} five hundred dollars directly to my bank account within two business days.",
    "cn": "該網路商店承諾在兩個工作天內將五百元直接存入我的銀行帳戶中。"
  },
  {
    "word": "determine",
    "pos": "v.",
    "cn_def": "決定；查明；確定（動詞）",
    "en_def": "to firmly establish or decide after research or calculation; to control",
    "sentence": "City fire department investigators are working day and night to {{BLANK}} the exact cause of the downtown warehouse blaze.",
    "cn": "市消防局調查員正日夜工作以查明市中心倉庫大火的確切起因。"
  },
  {
    "word": "determination",
    "pos": "n.",
    "cn_def": "決心；毅力；測定（不可數）",
    "en_def": "firmness of purpose; the process of establishing something",
    "sentence": "With fierce {{BLANK}} and relentless courage, the injured marathon runner crossed the finish line before night fell.",
    "cn": "帶著無比堅定的決心與毅力和無畏勇氣，受傷的馬拉松跑者在夜幕降臨前跨過了終點線。"
  },
  {
    "word": "dip",
    "pos": "v.",
    "cn_def": "浸；泡；短暫下降（動詞）",
    "en_def": "to put something briefly into liquid; to sink or drop temporarily",
    "sentence": "On chilly winter evenings, my grandfather loves to {{BLANK}} crusty French bread into his hot bowl of vegetable stew.",
    "cn": "在寒冷的冬日夜晚，我祖父喜歡將酥脆的法國麵包浸入熱騰騰的蔬菜燉湯中。"
  },
  {
    "word": "dip",
    "pos": "n.",
    "cn_def": "短暫暢泳；沾醬；微跌／下跌（可數）",
    "en_def": "a brief swim; a thick savory sauce for dipping food; a sudden slight drop",
    "sentence": "After hiking up the steep rocky hill under the blazing sun, the tourists decided to take a refreshing {{BLANK}} in the cool lake.",
    "cn": "在烈日下爬完險峻的岩石山丘後，遊客們決定在涼爽的湖中暢泳一番。"
  },
  {
    "word": "fist",
    "pos": "n.",
    "cn_def": "拳頭；緊握的拳（可數）",
    "en_def": "a person's hand when the fingers are bent in toward the palm and held tightly",
    "sentence": "Overcome with uncontrollable anger and frustration, the boxer clenched his {{BLANK}} tightly and stared directly at his opponent.",
    "cn": "被無法遏止的憤怒與挫折感淹沒，拳擊手緊緊握起拳頭，直視著他的對手。"
  }
];

const MCQS = [
  {
    "q": "The scientist checked the experimental data twice to make sure the report was completely ______.",
    "options": [
      "dipped",
      "automatic",
      "attractive",
      "accurate"
    ],
    "answer": 3,
    "cn": "科學家檢查了兩次實驗數據，以確保報告完全準確無誤。",
    "vocabIndex": 0
  },
  {
    "q": "The grocery store has ______ doors that open by themselves when shoppers walk toward them.",
    "options": [
      "attractive",
      "accurate",
      "automatic",
      "determined"
    ],
    "answer": 2,
    "cn": "雜貨店裝有自動門，當購物者走向它們時會自行開啟。",
    "vocabIndex": 7
  },
  {
    "q": "The company offered high pay and great bonuses to make the job offer very ______ to top graduates.",
    "options": [
      "attractive",
      "accurate",
      "automatic",
      "dipped"
    ],
    "answer": 0,
    "cn": "公司提供高薪與豐厚獎金，使該職缺對頂尖畢業生極具吸引力。",
    "vocabIndex": 6
  },
  {
    "q": "Even though she failed her driving test once, Lisa was ______ to practice more and pass next time.",
    "options": [
      "accurate",
      "determined",
      "attractive",
      "automatic"
    ],
    "answer": 1,
    "cn": "雖然駕照路考失敗了一次，麗莎下定決心要多加練習並在下次通過。",
    "vocabIndex": 10
  },
  {
    "q": "The newspaper praised the reporter for the factual ______ of her detailed war article.",
    "options": [
      "attraction",
      "achievement",
      "accuracy",
      "fist"
    ],
    "answer": 2,
    "cn": "報社讚揚該記者詳細戰爭報導的事實準確性。",
    "vocabIndex": 1
  },
  {
    "q": "Finishing the forty-kilometer mountain bike race was a huge ______ for the ten-year-old boy.",
    "options": [
      "accuracy",
      "dip",
      "credit",
      "achievement"
    ],
    "answer": 3,
    "cn": "完成四十公里的登山自行車賽對那位十歲男孩而言是一項巨大的成就。",
    "vocabIndex": 3
  },
  {
    "q": "The ancient stone castle by the blue lake is the most popular tourist ______ in the countryside.",
    "options": [
      "credit",
      "attraction",
      "accuracy",
      "determination"
    ],
    "answer": 1,
    "cn": "藍色湖泊旁的古老石頭城堡是鄉村最受歡迎的觀光景點。",
    "vocabIndex": 5
  },
  {
    "q": "You can pay with paper cash or swipe your plastic ______ card at the restaurant cash register.",
    "options": [
      "credit",
      "attraction",
      "achievement",
      "accuracy"
    ],
    "answer": 0,
    "cn": "你可以在餐廳收銀台用紙鈔現金付款或刷塑膠信用卡。",
    "vocabIndex": 8
  },
  {
    "q": "With strong ______ and daily practice, the injured athlete learned to walk without crutches.",
    "options": [
      "dip",
      "determination",
      "credit",
      "fist"
    ],
    "answer": 1,
    "cn": "憑藉堅強的毅力與決心和每日練習，那位受傷的運動員學會了不用拐杖行走。",
    "vocabIndex": 11
  },
  {
    "q": "On hot summer afternoons, the neighborhood kids love to jump in and take a ______ in the cool pool.",
    "options": [
      "dip",
      "fist",
      "credit",
      "accuracy"
    ],
    "answer": 0,
    "cn": "在炎熱的夏日下午，鄰舍的孩子們喜歡跳入涼爽的泳池暢泳一番。",
    "vocabIndex": 12
  },
  {
    "q": "Angry at the unfair decision, the boxer closed his hand into a tight ______ and hit the punching bag.",
    "options": [
      "credit",
      "dip",
      "achievement",
      "fist"
    ],
    "answer": 3,
    "cn": "對不公正的決定感到憤怒，拳擊手緊握拳頭重擊沙包。",
    "vocabIndex": 14
  },
  {
    "q": "Hard work and daily training helped the young swimmer ______ her dream of joining the national team.",
    "options": [
      "credit",
      "dip",
      "achieve",
      "determine"
    ],
    "answer": 2,
    "cn": "努力和每日訓練幫助那位年輕泳者實現了加入國家隊的夢想。",
    "vocabIndex": 2
  },
  {
    "q": "The sweet smell of freshly baked bread will ______ hungry customers into the warm bakery.",
    "options": [
      "attract",
      "achieve",
      "dip",
      "credit"
    ],
    "answer": 0,
    "cn": "剛出爐麵包的香甜氣味將會吸引飢餓的顧客走進溫暖的烘焙坊。",
    "vocabIndex": 4
  },
  {
    "q": "The bank will ______ five thousand dollars to your savings account as soon as the check clears.",
    "options": [
      "achieve",
      "determine",
      "attract",
      "credit"
    ],
    "answer": 3,
    "cn": "支票結算完成後，銀行將立即把五千元存入你的儲蓄帳戶中。",
    "vocabIndex": 8
  },
  {
    "q": "The school doctor will examine the children's eyes to ______ whether they need glasses.",
    "options": [
      "attract",
      "determine",
      "credit",
      "achieve"
    ],
    "answer": 1,
    "cn": "校醫將檢查孩子們的眼睛以判定／查明他們是否需要配戴眼鏡。",
    "vocabIndex": 10
  },
  {
    "q": "Before eating the crispy fried chicken, you can ______ it into the spicy tomato sauce.",
    "options": [
      "credit",
      "attract",
      "dip",
      "achieve"
    ],
    "answer": 2,
    "cn": "在享用酥脆炸雞之前，你可以把它沾／浸進香辣番茄醬汁中。",
    "vocabIndex": 12
  },
  {
    "q": "Weather forecasters say the outdoor temperature will ______ sharply tonight as the cold wind blows.",
    "options": [
      "dip",
      "achieve",
      "credit",
      "attract"
    ],
    "answer": 0,
    "cn": "氣象預報員說隨著冷風吹拂，今晚戶外氣溫將會急遽驟降。",
    "vocabIndex": 12
  },
  {
    "q": "The map was completely ______, showing the exact location of every mountain trail and stream.",
    "options": [
      "automatic",
      "determined",
      "attractive",
      "accurate"
    ],
    "answer": 3,
    "cn": "這張地圖完全精確無誤，顯示了每條山徑和小溪的確切位置。",
    "vocabIndex": 0
  },
  {
    "q": "Bright colorful flower gardens make the entrance of the public library look very ______.",
    "options": [
      "accurate",
      "attractive",
      "automatic",
      "determined"
    ],
    "answer": 1,
    "cn": "色彩繽紛的花園使公共圖書館的入口看起來非常賞心悅目／具吸引力。",
    "vocabIndex": 6
  },
  {
    "q": "The machine gave an ______ warning beep when the paper tray in the printer was empty.",
    "options": [
      "accurate",
      "attractive",
      "automatic",
      "determined"
    ],
    "answer": 2,
    "cn": "當印表機紙匣空了時，機器發出了一聲自動警示嗶聲。",
    "vocabIndex": 7
  },
  {
    "q": "Completing college at the age of eighteen was an extraordinary ______ for the brilliant student.",
    "options": [
      "achievement",
      "accuracy",
      "credit",
      "attraction"
    ],
    "answer": 0,
    "cn": "十八歲大學畢業對那位聰穎的學生而言是一項非凡的成就。",
    "vocabIndex": 3
  },
  {
    "q": "The team worked together, but the selfish leader tried to ______ for all the success.",
    "options": [
      "take a dip",
      "rule with an iron fist",
      "take credit",
      "make a fist"
    ],
    "answer": 2,
    "cn": "團隊齊心協力，但自私的領導者卻試圖居功／把所有成功歸於自己。",
    "vocabIndex": 8
  },
  {
    "q": "The cruel king liked to ______ over all the scared villagers in his kingdom.",
    "options": [
      "take credit",
      "rule with an iron fist",
      "take a dip",
      "make an accurate map"
    ],
    "answer": 1,
    "cn": "那位殘酷的國王喜歡對王國內所有受驚嚇的村民實行鐵腕統治。",
    "vocabIndex": 14
  },
  {
    "q": "After hiking for five hours in the sun, the campers took a refreshing ______ in the river.",
    "options": [
      "credit card",
      "iron fist",
      "tourist attraction",
      "dip in the river"
    ],
    "answer": 3,
    "cn": "在烈日下徒步五小時後，露營者在河中暢游了一番以恢復精神。",
    "vocabIndex": 12
  },
  {
    "q": "The world famous Eiffel Tower in Paris is a widely visited ______ that welcomes millions of travelers.",
    "options": [
      "tourist attraction",
      "credit history",
      "iron fist",
      "pinpoint accuracy"
    ],
    "answer": 0,
    "cn": "巴黎世界著名的艾菲爾鐵塔是一個接待數百萬旅客的熱門觀光景點。",
    "vocabIndex": 5
  }
];

const LOOKUP = {
  "accurate": {
    "pos": "adj.",
    "en_def": "correct in all details; exact and free from error",
    "cn_def": "精確的；準確無誤的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "correct in all details; exact and free from error",
        "cn_def": "精確的；準確無誤的"
      }
    ]
  },
  "accuracy": {
    "pos": "n.",
    "en_def": "the quality or state of being correct, precise, or exact",
    "cn_def": "準確性；精確度（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality or state of being correct, precise, or exact",
        "cn_def": "準確性；精確度（不可數）"
      }
    ]
  },
  "achieve": {
    "pos": "v.",
    "en_def": "to successfully bring about or reach a desired goal by effort",
    "cn_def": "實現；達成；贏得",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to successfully bring about or reach a desired goal by effort",
        "cn_def": "實現；達成；贏得"
      }
    ]
  },
  "achievement": {
    "pos": "n.",
    "en_def": "a thing done successfully, typically by effort, courage, or skill",
    "cn_def": "成就；豐功偉業（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thing done successfully, typically by effort, courage, or skill",
        "cn_def": "成就；豐功偉業（可數/不可數）"
      }
    ]
  },
  "attract": {
    "pos": "v.",
    "en_def": "to cause someone to come to a place or be interested in something",
    "cn_def": "吸引；引起…的好感／興趣",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause someone to come to a place or be interested in something",
        "cn_def": "吸引；引起…的好感／興趣"
      }
    ]
  },
  "attraction": {
    "pos": "n.",
    "en_def": "a feature or quality that makes something interesting or appealing",
    "cn_def": "吸引力；觀光勝地（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feature or quality that makes something interesting or appealing",
        "cn_def": "吸引力；觀光勝地（可數/不可數）"
      }
    ]
  },
  "attractive": {
    "pos": "adj.",
    "en_def": "pleasing or appealing to the senses, mind, or eye",
    "cn_def": "吸引人的；有魅力的；令人動心的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "pleasing or appealing to the senses, mind, or eye",
        "cn_def": "吸引人的；有魅力的；令人動心的"
      }
    ]
  },
  "automatic": {
    "pos": "adj.",
    "en_def": "operating by itself with little or no direct human control; done unconsciously",
    "cn_def": "自動的；不假思索的；無意識的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "operating by itself with little or no direct human control; done unconsciously",
        "cn_def": "自動的；不假思索的；無意識的"
      }
    ]
  },
  "credit": {
    "pos": "n.",
    "en_def": "public acknowledgment or praise; an entry recording a sum received; reputation for solvency",
    "cn_def": "信用；功勞；學分（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "public acknowledgment or praise; an entry recording a sum received; reputation for solvency",
        "cn_def": "信用；功勞；學分（不可數/可數）"
      },
      {
        "pos": "v.",
        "en_def": "to publicly attribute something good to someone; to add money to an account",
        "cn_def": "歸功於；存入（金額）（動詞）"
      }
    ]
  },
  "determine": {
    "pos": "v.",
    "en_def": "to firmly establish or decide after research or calculation; to control",
    "cn_def": "決定；查明；確定（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to firmly establish or decide after research or calculation; to control",
        "cn_def": "決定；查明；確定（動詞）"
      }
    ]
  },
  "determination": {
    "pos": "n.",
    "en_def": "firmness of purpose; the process of establishing something",
    "cn_def": "決心；毅力；測定（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "firmness of purpose; the process of establishing something",
        "cn_def": "決心；毅力；測定（不可數）"
      }
    ]
  },
  "dip": {
    "pos": "v.",
    "en_def": "to put something briefly into liquid; to sink or drop temporarily",
    "cn_def": "浸；泡；短暫下降（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to put something briefly into liquid; to sink or drop temporarily",
        "cn_def": "浸；泡；短暫下降（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a brief swim; a thick savory sauce for dipping food; a sudden slight drop",
        "cn_def": "短暫暢泳；沾醬；微跌／下跌（可數）"
      }
    ]
  },
  "fist": {
    "pos": "n.",
    "en_def": "a person's hand when the fingers are bent in toward the palm and held tightly",
    "cn_def": "拳頭；緊握的拳（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person's hand when the fingers are bent in toward the palm and held tightly",
        "cn_def": "拳頭；緊握的拳（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
