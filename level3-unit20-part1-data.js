// Part 1 Quiz Data: admire – drain
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 20-1 - admire – drain",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "admire",
    "pos": "v.",
    "cn_def": "欽佩；欣賞；讚賞",
    "en_def": "to regard with respect, wonder, or warm approval",
    "sentence": "I truly {{BLANK}} our class leader because she always remains calm and solves difficult problems efficiently.",
    "cn": "我真的很欽佩我們的班長，因為她總是保持冷靜並高效率地解決棘手問題。"
  },
  {
    "word": "admiration",
    "pos": "n.",
    "cn_def": "欽佩；讚賞（不可數）",
    "en_def": "a feeling of profound respect and approval",
    "sentence": "The young tennis player looked at the world champion in deep {{BLANK}} during the ceremony.",
    "cn": "典禮期間，那位年輕網球選手深深欽佩地注視著世界冠軍。"
  },
  {
    "word": "admirable",
    "pos": "adj.",
    "cn_def": "令人欽佩的；極佳的",
    "en_def": "deserving respect, praise, or admiration",
    "sentence": "The dedicated doctor showed {{BLANK}} patience while treating dozens of injured patients all through the night.",
    "cn": "這位敬業的醫生整夜治療數十名受傷病患時，展現了令人欽佩的耐心。"
  },
  {
    "word": "airline",
    "pos": "n.",
    "cn_def": "航空公司（可數）",
    "en_def": "an organization that provides a regular public air transport service",
    "sentence": "The major commercial {{BLANK}} announced that several international flights would be delayed due to the heavy blizzard.",
    "cn": "這家大型商業航空公司宣布，由於強烈暴風雪，數個國際航班將會延誤。"
  },
  {
    "word": "automobile",
    "pos": "n.",
    "cn_def": "汽車（可數）",
    "en_def": "a road vehicle designed primarily for passengers; a car",
    "sentence": "Thousands of enthusiastic visitors gathered at the convention center to attend the famous annual {{BLANK}} show.",
    "cn": "數千名熱情的參觀者聚集在會議中心參加著名的年度汽車展。"
  },
  {
    "word": "award",
    "pos": "n.",
    "cn_def": "獎項；獎品（可數）",
    "en_def": "a prize or symbol of honor given in recognition of an achievement",
    "sentence": "The talented young director proudly won a prestigious {{BLANK}} for his inspirational documentary film at the festival.",
    "cn": "這位才華洋溢的年輕導演在影展上以其鼓舞人心的紀錄片自豪地贏得了一項享譽盛名的大獎。"
  },
  {
    "word": "award",
    "pos": "v.",
    "cn_def": "授予；頒發；判給（動詞）",
    "en_def": "to officially give or grant a prize, honor, or money to someone",
    "sentence": "The university committee decided to {{BLANK}} a generous sports scholarship to the hardworking high school athlete.",
    "cn": "大學委員會決定頒發一筆優渥的體育獎學金給那位辛勤的高中運動員。"
  },
  {
    "word": "benefits",
    "pos": "n.",
    "cn_def": "好處；益處；福利（可數/不可數）",
    "en_def": "an advantage or profit gained from something; welfare payments",
    "sentence": "Although the entry-level salary is average, the company offers excellent {{BLANK}} such as paid medical insurance.",
    "cn": "雖然初階薪資一般，但公司提供非常優渥的員工福利，例如全額給付的醫療保險。"
  },
  {
    "word": "benefit",
    "pos": "v.",
    "cn_def": "有益於；受惠（動詞）",
    "en_def": "to receive an advantage; to be helpful or useful to someone",
    "sentence": "All the elderly residents in our quiet neighborhood will greatly {{BLANK}} from the newly built community clinic.",
    "cn": "我們寧靜社區裡的所有年長居民都將大大受惠於新建的社區診所。"
  },
  {
    "word": "beneficial",
    "pos": "adj.",
    "cn_def": "有益的；有幫助的",
    "en_def": "producing good or helpful results or effects; advantageous",
    "sentence": "Scientific research shows that regular aerobic exercise is extremely {{BLANK}} to both your heart and mental health.",
    "cn": "科學研究顯示，規律的有氧運動對心臟和心理健康都極為有益。"
  },
  {
    "word": "bind",
    "pos": "v.",
    "cn_def": "捆綁；包紮；裝訂；使受束縛",
    "en_def": "to tie or fasten tightly; to hold by legal or moral duty",
    "sentence": "The business partners signed a legal document that will legally {{BLANK}} them to work together for five years.",
    "cn": "合夥人簽署了一份法律文件，該文件將在法律上約束他們共同合作五年。"
  },
  {
    "word": "budget",
    "pos": "n.",
    "cn_def": "預算；經費（可數）",
    "en_def": "an estimate of income and expenditure for a set period of time",
    "sentence": "Because she is living in an expensive city as a college student, Kelly has to live on a very tight {{BLANK}}.",
    "cn": "身為一個生活在昂貴城市裡的大學生，凱莉必須靠非常拮据的預算過活。"
  },
  {
    "word": "budget",
    "pos": "v.",
    "cn_def": "規劃預算；編列預算（動詞）",
    "en_def": "to plan and allocate money or time carefully",
    "sentence": "Young married couples should learn how to {{BLANK}} their monthly income wisely to save enough money for their dream home.",
    "cn": "年輕的已婚夫婦應該學會如何明智地規劃…的預算每月收入，以便為他們的夢想家園存足夠的錢。"
  },
  {
    "word": "champion",
    "pos": "n.",
    "cn_def": "冠軍；優勝者；捍衛者（可數）",
    "en_def": "a person or team that has defeated all rivals in a competition",
    "sentence": "The heavy boxer trained intensively for six months and finally became the new world heavyweight {{BLANK}}.",
    "cn": "這位重量級拳擊手經過六個月的密集訓練，終於成為了新的世界重量級冠軍。"
  },
  {
    "word": "championship",
    "pos": "n.",
    "cn_def": "冠軍賽；錦標賽；冠軍頭銜（可數/不可數）",
    "en_def": "a competition to decide the champion; the position of champion",
    "sentence": "Our high school basketball team practiced day and night to compete in the final state {{BLANK}} tournament.",
    "cn": "我們高中籃球隊日夜練習，以參加最後的州錦標賽巡迴賽。"
  },
  {
    "word": "drain",
    "pos": "v.",
    "cn_def": "排出液體；流乾；消耗耗盡（動詞）",
    "en_def": "to cause liquid to run out; to exhaust energy or money",
    "sentence": "After finishing her warm relaxing bath, Emily pulled out the rubber plug and watched the water {{BLANK}} away quickly.",
    "cn": "泡完溫暖放鬆的熱水澡後，艾蜜莉拔起橡膠塞，看著水迅速流掉。"
  },
  {
    "word": "drain",
    "pos": "n.",
    "cn_def": "排水管；排水孔；消耗負擔（可數）",
    "en_def": "a pipe or hole through which liquid runs away; a drain on resources",
    "sentence": "The plumber used a long flexible tool to clear all the hair that had clogged the bathroom {{BLANK}}.",
    "cn": "水管工使用一種長而有彈性的工具清除了堵塞浴室排水孔的所有毛髮。"
  }
];

const MCQS = [
  {
    "q": "The world-famous heavyweight boxer trained every day to become the ultimate world ______.",
    "options": [
      "airline",
      "champion",
      "automobile",
      "drain"
    ],
    "answer": 1,
    "cn": "這位舉世聞名的重量級拳擊手每天訓練，立志成為終極世界冠軍。",
    "vocabIndex": 13
  },
  {
    "q": "Our high school basketball team fought hard and proudly won the state ______.",
    "options": [
      "admiration",
      "automobile",
      "drain",
      "championship"
    ],
    "answer": 3,
    "cn": "我們的高中籃球隊奮勇作戰，自豪地贏得了州錦標賽冠軍。",
    "vocabIndex": 14
  },
  {
    "q": "When the shower water stopped flowing, the plumber found that hair had blocked the ______.",
    "options": [
      "drain",
      "automobile",
      "airline",
      "award"
    ],
    "answer": 0,
    "cn": "當蓮蓬頭的水不再流走時，水管工發現毛髮堵住了排水孔。",
    "vocabIndex": 15
  },
  {
    "q": "The school presented an honor ______ to the student who rescued a drowning puppy.",
    "options": [
      "drain",
      "automobile",
      "award",
      "budget"
    ],
    "answer": 2,
    "cn": "學校向救起溺水小狗的學生頒發了一項榮譽獎項。",
    "vocabIndex": 5
  },
  {
    "q": "Living in an expensive capital city forced the young college student onto a very tight ______.",
    "options": [
      "airline",
      "budget",
      "automobile",
      "drain"
    ],
    "answer": 1,
    "cn": "居住在物價昂貴的首都，迫使這位年輕大學生依賴極為拮据的預算過活。",
    "vocabIndex": 11
  },
  {
    "q": "Thousands of car lovers gathered in Detroit to visit the international ______ show.",
    "options": [
      "automobile",
      "airline",
      "champion",
      "drain"
    ],
    "answer": 0,
    "cn": "數千名汽車愛好者聚集在底特律參觀國際汽車大展。",
    "vocabIndex": 4
  },
  {
    "q": "We booked cheap flight tickets through a popular budget ______ to travel across Europe.",
    "options": [
      "champion",
      "automobile",
      "airline",
      "budget"
    ],
    "answer": 2,
    "cn": "我們透過一家熱門的廉價航空公司訂了便宜機票環遊歐洲。",
    "vocabIndex": 3
  },
  {
    "q": "Drinking fresh water and eating healthy vegetables bring multiple physical ______ to the body.",
    "options": [
      "champions",
      "automobiles",
      "drains",
      "benefits"
    ],
    "answer": 3,
    "cn": "喝新鮮的水和吃健康的蔬菜能為人體帶來多種身體好處／益處。",
    "vocabIndex": 7
  },
  {
    "q": "The honest boy looked at his grandfather with profound ______ and deep respect.",
    "options": [
      "admiration",
      "automobile",
      "airline",
      "drain"
    ],
    "answer": 0,
    "cn": "那名誠實的男孩帶著由衷的欽佩與深深的敬意注視著他的祖父。",
    "vocabIndex": 1
  },
  {
    "q": "When his business venture collapsed, all of his hard-earned savings went down the ______.",
    "options": [
      "airline",
      "automobile",
      "champion",
      "drain"
    ],
    "answer": 3,
    "cn": "當他的商業投資失敗破產時，他所有辛苦賺來的積蓄都付諸東流／白費了。",
    "vocabIndex": 15
  },
  {
    "q": "We stood at the scenic lookout and ______ the magnificent sunset over the ocean.",
    "options": [
      "awarded",
      "drained",
      "admired",
      "bound"
    ],
    "answer": 2,
    "cn": "我們站在觀景台上，欣賞著大海上壯麗的夕陽。",
    "vocabIndex": 0
  },
  {
    "q": "The committee decided to ______ first prize to the girl with the most creative essay.",
    "options": [
      "drain",
      "award",
      "budget",
      "bind"
    ],
    "answer": 1,
    "cn": "委員會決定將第一名頒發給文章最具創意的女孩。",
    "vocabIndex": 5
  },
  {
    "q": "Local shop owners will definitely ______ from the thousands of tourists visiting this week.",
    "options": [
      "bind",
      "admire",
      "benefit",
      "drain"
    ],
    "answer": 2,
    "cn": "當地店家肯定會從本週造訪的數千名觀光客中受惠。",
    "vocabIndex": 7
  },
  {
    "q": "The kind school nurse ______ the boy's bleeding arm with a sterile medical bandage.",
    "options": [
      "admired",
      "budgeted",
      "drained",
      "bound"
    ],
    "answer": 3,
    "cn": "親切的學校護理師用消毒醫用繃帶包紮了男孩流血的手臂。",
    "vocabIndex": 10
  },
  {
    "q": "Careful homemakers must learn how to ______ their monthly expenses to avoid debt.",
    "options": [
      "budget",
      "admire",
      "drain",
      "bind"
    ],
    "answer": 0,
    "cn": "細心的家庭管理者必須學會如何規劃預算每月開銷以避免負債。",
    "vocabIndex": 11
  },
  {
    "q": "After finishing his hot bath, Jason pulled the plug and let the soapy water ______ away.",
    "options": [
      "admire",
      "drain",
      "award",
      "bind"
    ],
    "answer": 1,
    "cn": "洗完熱水澡後，傑森拔掉水塞，讓肥皂水流乾／排掉。",
    "vocabIndex": 15
  },
  {
    "q": "Working twelve hours a day without rest will slowly ______ an employee of all energy.",
    "options": [
      "admire",
      "award",
      "drain",
      "bind"
    ],
    "answer": 2,
    "cn": "每天不休息地工作十二個小時會慢慢耗盡一名員工的所有精力。",
    "vocabIndex": 15
  },
  {
    "q": "The international legal contract will legally ______ both companies to work together.",
    "options": [
      "admire",
      "bind",
      "drain",
      "budget"
    ],
    "answer": 1,
    "cn": "這份國際法律合約將在法律上約束兩家公司共同合作。",
    "vocabIndex": 10
  },
  {
    "q": "Regular aerobic exercise and a balanced diet are highly ______ to your heart health.",
    "options": [
      "drained",
      "admirable",
      "bound",
      "beneficial"
    ],
    "answer": 3,
    "cn": "規律的有氧運動和均衡飲食對您的心臟健康非常有益處。",
    "vocabIndex": 9
  },
  {
    "q": "The volunteer showed ______ courage by rushing into the burning house to save a child.",
    "options": [
      "admirable",
      "beneficial",
      "bound",
      "drained"
    ],
    "answer": 0,
    "cn": "志工衝進著火的房屋救出一名兒童，展現了令人欽佩的勇氣。",
    "vocabIndex": 2
  },
  {
    "q": "Doctors are legally ______ by their professional oath to protect the lives of their patients.",
    "options": [
      "beneficial",
      "admirable",
      "bound",
      "budgeted"
    ],
    "answer": 2,
    "cn": "醫生在法律上受其專業誓詞約束，必須保護病患的生命。",
    "vocabIndex": 10
  },
  {
    "q": "The long, exhausting marathon completely left the runner totally ______ of all physical strength.",
    "options": [
      "beneficial",
      "admirable",
      "bound",
      "drained"
    ],
    "answer": 3,
    "cn": "漫長且筋疲力竭的馬拉松徹底讓這位跑者耗盡了所有的體力。",
    "vocabIndex": 15
  },
  {
    "q": "That designer coat is gorgeous, but the price tag is completely out of my monthly ______.",
    "options": [
      "champion",
      "budget",
      "airline",
      "automobile"
    ],
    "answer": 1,
    "cn": "那件名牌大衣很漂亮，但標價完全超出了我每月的預算。",
    "vocabIndex": 11
  },
  {
    "q": "Repairing the old house proved to be a heavy financial ______ on the family's small savings.",
    "options": [
      "drain",
      "champion",
      "award",
      "airline"
    ],
    "answer": 0,
    "cn": "整修老房子被證明是對這個家庭微薄積蓄的一項沉重財務負擔／消耗。",
    "vocabIndex": 15
  },
  {
    "q": "Everyone in the company had deep ______ for the founder who built the business from nothing.",
    "options": [
      "automobile",
      "airline",
      "admiration",
      "drain"
    ],
    "answer": 2,
    "cn": "公司裡的每個人都對從零開始打造這家企業的創辦人懷有深深的欽佩。",
    "vocabIndex": 1
  }
];

const LOOKUP = {
  "admire": {
    "pos": "v.",
    "en_def": "to regard with respect, wonder, or warm approval",
    "cn_def": "欽佩；欣賞；讚賞",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to regard with respect, wonder, or warm approval",
        "cn_def": "欽佩；欣賞；讚賞"
      }
    ]
  },
  "admiration": {
    "pos": "n.",
    "en_def": "a feeling of profound respect and approval",
    "cn_def": "欽佩；讚賞（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling of profound respect and approval",
        "cn_def": "欽佩；讚賞（不可數）"
      }
    ]
  },
  "admirable": {
    "pos": "adj.",
    "en_def": "deserving respect, praise, or admiration",
    "cn_def": "令人欽佩的；極佳的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "deserving respect, praise, or admiration",
        "cn_def": "令人欽佩的；極佳的"
      }
    ]
  },
  "airline": {
    "pos": "n.",
    "en_def": "an organization that provides a regular public air transport service",
    "cn_def": "航空公司（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an organization that provides a regular public air transport service",
        "cn_def": "航空公司（可數）"
      }
    ]
  },
  "automobile": {
    "pos": "n.",
    "en_def": "a road vehicle designed primarily for passengers; a car",
    "cn_def": "汽車（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a road vehicle designed primarily for passengers; a car",
        "cn_def": "汽車（可數）"
      }
    ]
  },
  "award": {
    "pos": "n.",
    "en_def": "a prize or symbol of honor given in recognition of an achievement",
    "cn_def": "獎項；獎品（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a prize or symbol of honor given in recognition of an achievement",
        "cn_def": "獎項；獎品（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to officially give or grant a prize, honor, or money to someone",
        "cn_def": "授予；頒發；判給（動詞）"
      }
    ]
  },
  "benefit": {
    "pos": "n.",
    "en_def": "an advantage or profit gained from something; welfare payments",
    "cn_def": "好處；益處；福利（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an advantage or profit gained from something; welfare payments",
        "cn_def": "好處；益處；福利（可數/不可數）"
      },
      {
        "pos": "v.",
        "en_def": "to receive an advantage; to be helpful or useful to someone",
        "cn_def": "有益於；受惠（動詞）"
      }
    ]
  },
  "benefits": {
    "pos": "n.",
    "en_def": "an advantage or profit gained from something; welfare payments",
    "cn_def": "好處；益處；福利（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an advantage or profit gained from something; welfare payments",
        "cn_def": "好處；益處；福利（可數/不可數）"
      }
    ]
  },
  "beneficial": {
    "pos": "adj.",
    "en_def": "producing good or helpful results or effects; advantageous",
    "cn_def": "有益的；有幫助的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "producing good or helpful results or effects; advantageous",
        "cn_def": "有益的；有幫助的"
      }
    ]
  },
  "bind": {
    "pos": "v.",
    "en_def": "to tie or fasten tightly; to hold by legal or moral duty",
    "cn_def": "捆綁；包紮；裝訂；使受束縛",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to tie or fasten tightly; to hold by legal or moral duty",
        "cn_def": "捆綁；包紮；裝訂；使受束縛"
      }
    ]
  },
  "budget": {
    "pos": "n.",
    "en_def": "an estimate of income and expenditure for a set period of time",
    "cn_def": "預算；經費（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an estimate of income and expenditure for a set period of time",
        "cn_def": "預算；經費（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to plan and allocate money or time carefully",
        "cn_def": "規劃預算；編列預算（動詞）"
      }
    ]
  },
  "champion": {
    "pos": "n.",
    "en_def": "a person or team that has defeated all rivals in a competition",
    "cn_def": "冠軍；優勝者；捍衛者（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or team that has defeated all rivals in a competition",
        "cn_def": "冠軍；優勝者；捍衛者（可數）"
      }
    ]
  },
  "championship": {
    "pos": "n.",
    "en_def": "a competition to decide the champion; the position of champion",
    "cn_def": "冠軍賽；錦標賽；冠軍頭銜（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a competition to decide the champion; the position of champion",
        "cn_def": "冠軍賽；錦標賽；冠軍頭銜（可數/不可數）"
      }
    ]
  },
  "drain": {
    "pos": "v.",
    "en_def": "to cause liquid to run out; to exhaust energy or money",
    "cn_def": "排出液體；流乾；消耗耗盡（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause liquid to run out; to exhaust energy or money",
        "cn_def": "排出液體；流乾；消耗耗盡（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a pipe or hole through which liquid runs away; a drain on resources",
        "cn_def": "排水管；排水孔；消耗負擔（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
