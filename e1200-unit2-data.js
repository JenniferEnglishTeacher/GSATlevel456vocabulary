// Unit 2 Quiz Data: Personal characteristics 個人特質（第02區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U02 - Personal characteristics",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "happy",
    "pos": "adj.",
    "cn_def": "快樂的",
    "en_def": "",
    "sentence": "Q: How are you today? — A: I am {{BLANK}}. I got 100 on the test.",
    "cn": "你今天好嗎？ — 我很快樂，我考試考了一百分。"
  },
  {
    "word": "unhappy",
    "pos": "adj.",
    "cn_def": "不快樂的",
    "en_def": "",
    "sentence": "Q: How is Ben? — A: He is {{BLANK}}. He lost his new bike.",
    "cn": "班還好嗎？ — 他不開心，他弄丟了新腳踏車。"
  },
  {
    "word": "sad",
    "pos": "adj.",
    "cn_def": "悲傷的",
    "en_def": "",
    "sentence": "Q: How is Tom? — A: He is {{BLANK}}. His dog is sick.",
    "cn": "湯姆還好嗎？ — 他很難過，他的狗生病了。"
  },
  {
    "word": "lonely",
    "pos": "adj.",
    "cn_def": "寂寞的",
    "en_def": "",
    "sentence": "Q: How is your grandma? — A: She is {{BLANK}}. She lives alone.",
    "cn": "你奶奶還好嗎？ — 她很寂寞，她一個人住。"
  },
  {
    "word": "angry",
    "pos": "adj.",
    "cn_def": "生氣的",
    "en_def": "",
    "sentence": "Q: How is your dad today? — A: He is {{BLANK}}. I broke his cup.",
    "cn": "你爸爸今天還好嗎？ — 他很生氣，我打破了他的杯子。"
  },
  {
    "word": "mad",
    "pos": "adj.",
    "cn_def": "生氣的；瘋狂的",
    "en_def": "",
    "sentence": "Q: How is Mom? — A: She is {{BLANK}} at me. My room is very dirty.",
    "cn": "媽媽還好嗎？ — 她在生我的氣，我的房間很髒。"
  },
  {
    "word": "scared",
    "pos": "adj.",
    "cn_def": "害怕的",
    "en_def": "",
    "sentence": "Q: How are the kids? — A: They are {{BLANK}}. There is a big snake!",
    "cn": "孩子們還好嗎？ — 他們很害怕，有一條大蛇！"
  },
  {
    "word": "bored",
    "pos": "adj.",
    "cn_def": "感到厭煩的",
    "en_def": "",
    "sentence": "Q: How are the students? — A: They are {{BLANK}}. The movie is too long.",
    "cn": "學生們還好嗎？ — 他們覺得很無聊，電影太長了。"
  },
  {
    "word": "excited",
    "pos": "adj.",
    "cn_def": "感到興奮的",
    "en_def": "",
    "sentence": "Q: How is Amy? — A: She is {{BLANK}}. Tomorrow is her birthday.",
    "cn": "艾美還好嗎？ — 她很興奮，明天是她的生日。"
  },
  {
    "word": "proud",
    "pos": "adj.",
    "cn_def": "驕傲的",
    "en_def": "",
    "sentence": "Q: How are your parents? — A: They are {{BLANK}} of me. I won the race.",
    "cn": "你爸媽還好嗎？ — 他們以我為榮，我贏了賽跑。"
  },
  {
    "word": "busy",
    "pos": "adj.",
    "cn_def": "忙碌的",
    "en_def": "",
    "sentence": "Q: How is your mom? — A: She is very {{BLANK}}. She has a lot of work.",
    "cn": "你媽媽還好嗎？ — 她很忙，她有很多工作。"
  },
  {
    "word": "cute",
    "pos": "adj.",
    "cn_def": "可愛的",
    "en_def": "",
    "sentence": "Q: What does your baby sister look like? — A: She is small and {{BLANK}}. She has big eyes.",
    "cn": "你的小妹妹長什麼樣子？ — 她小小的很可愛，她有大眼睛。"
  },
  {
    "word": "lovely",
    "pos": "adj.",
    "cn_def": "可愛的",
    "en_def": "",
    "sentence": "Q: What do the twins look like? — A: They are {{BLANK}}. They always smile.",
    "cn": "那對雙胞胎長什麼樣子？ — 他們很可愛，總是笑咪咪的。"
  },
  {
    "word": "pretty",
    "pos": "adj.",
    "cn_def": "漂亮的",
    "en_def": "",
    "sentence": "Q: What does Amy look like? — A: She is {{BLANK}}. She has long hair.",
    "cn": "艾美長什麼樣子？ — 她很漂亮，她有一頭長髮。"
  },
  {
    "word": "handsome",
    "pos": "adj.",
    "cn_def": "英俊的",
    "en_def": "",
    "sentence": "Q: What does your brother look like? — A: He is tall and {{BLANK}}.",
    "cn": "你哥哥長什麼樣子？ — 他又高又帥。"
  },
  {
    "word": "slim",
    "pos": "adj.",
    "cn_def": "苗條的",
    "en_def": "",
    "sentence": "Q: What does the model look like? — A: She is tall and {{BLANK}}.",
    "cn": "那位模特兒長什麼樣子？ — 她又高又苗條。"
  },
  {
    "word": "ugly",
    "pos": "adj.",
    "cn_def": "醜的",
    "en_def": "",
    "sentence": "Q: What does the monster in the story look like? — A: It is big and {{BLANK}}.",
    "cn": "故事裡的怪物長什麼樣子？ — 牠又大又醜。"
  },
  {
    "word": "kind",
    "pos": "adj.",
    "cn_def": "親切的",
    "en_def": "",
    "sentence": "Q: What do you think of your grandma? — A: She is {{BLANK}} because she often gives food to poor people.",
    "cn": "你覺得你奶奶怎麼樣？ — 她很親切，因為她常常送食物給窮人。"
  },
  {
    "word": "nice",
    "pos": "adj.",
    "cn_def": "好的",
    "en_def": "",
    "sentence": "Q: What do you think of your teacher? — A: She is {{BLANK}} because she often helps us with our homework.",
    "cn": "你覺得你的老師怎麼樣？ — 她人很好，因為她常常幫我們做功課。"
  },
  {
    "word": "friendly",
    "pos": "adj.",
    "cn_def": "友善的",
    "en_def": "",
    "sentence": "Q: What do you think of your new neighbor? — A: She is {{BLANK}} because she often says hello to us.",
    "cn": "你覺得你的新鄰居怎麼樣？ — 她很友善，因為她常常跟我們打招呼。"
  },
  {
    "word": "polite",
    "pos": "adj.",
    "cn_def": "有禮貌的",
    "en_def": "",
    "sentence": "Q: What do you think of Lisa? — A: She is {{BLANK}} because she often says \"please\" and \"thank you.\"",
    "cn": "你覺得麗莎怎麼樣？ — 她很有禮貌，因為她常說「請」和「謝謝」。"
  },
  {
    "word": "honest",
    "pos": "adj.",
    "cn_def": "誠實的",
    "en_def": "",
    "sentence": "Q: What do you think of Tom? — A: He is {{BLANK}} because he often tells the truth.",
    "cn": "你覺得湯姆怎麼樣？ — 他很誠實，因為他常常說實話。"
  },
  {
    "word": "brave",
    "pos": "adj.",
    "cn_def": "勇敢的",
    "en_def": "",
    "sentence": "Q: What do you think of Ben? — A: He is {{BLANK}} because he often helps people in trouble.",
    "cn": "你覺得班怎麼樣？ — 他很勇敢，因為他常常幫助有麻煩的人。"
  },
  {
    "word": "careful",
    "pos": "adj.",
    "cn_def": "仔細的",
    "en_def": "",
    "sentence": "Q: What do you think of your mom? — A: She is {{BLANK}} because she often checks the door before bed.",
    "cn": "你覺得你媽媽怎麼樣？ — 她很仔細，因為她睡前常常檢查門。"
  },
  {
    "word": "hard-working",
    "pos": "adj.",
    "cn_def": "努力工作的",
    "en_def": "",
    "sentence": "Q: What do you think of Amy? — A: She is {{BLANK}} because she often studies until ten at night.",
    "cn": "你覺得艾美怎麼樣？ — 她很努力，因為她常常讀書到晚上十點。"
  },
  {
    "word": "lazy",
    "pos": "adj.",
    "cn_def": "懶惰的",
    "en_def": "",
    "sentence": "Q: What do you think of Ken? — A: He is {{BLANK}} because he often sleeps in class.",
    "cn": "你覺得肯怎麼樣？ — 他很懶惰，因為他常常在課堂上睡覺。"
  },
  {
    "word": "funny",
    "pos": "adj.",
    "cn_def": "好笑的",
    "en_def": "",
    "sentence": "Q: What do you think of Mr. Lee? — A: He is {{BLANK}} because he often tells jokes.",
    "cn": "你覺得李老師怎麼樣？ — 他很好笑，因為他常常講笑話。"
  },
  {
    "word": "shy",
    "pos": "adj.",
    "cn_def": "害羞的",
    "en_def": "",
    "sentence": "Q: What do you think of the new student? — A: He is {{BLANK}} because he often stays quiet in class.",
    "cn": "你覺得那位新同學怎麼樣？ — 他很害羞，因為他上課常常很安靜。"
  },
  {
    "word": "wise",
    "pos": "adj.",
    "cn_def": "明智的",
    "en_def": "",
    "sentence": "Q: What do you think of your grandpa? — A: He is {{BLANK}} because he often gives me good ideas.",
    "cn": "你覺得你爺爺怎麼樣？ — 他很有智慧，因為他常常給我好主意。"
  },
  {
    "word": "stupid",
    "pos": "adj.",
    "cn_def": "笨的",
    "en_def": "",
    "sentence": "Q: What do you think of the fox in the story? — A: It is {{BLANK}} because it often makes the same mistake.",
    "cn": "你覺得故事裡的狐狸怎麼樣？ — 牠很笨，因為牠常常犯同樣的錯。"
  },
  {
    "word": "successful",
    "pos": "adj.",
    "cn_def": "成功的",
    "en_def": "",
    "sentence": "Q: What do you think of your uncle? — A: He is {{BLANK}} because he often sells a lot of cars.",
    "cn": "你覺得你叔叔怎麼樣？ — 他很成功，因為他常常賣出很多車。"
  },
  {
    "word": "good",
    "pos": "adj.",
    "cn_def": "好的",
    "en_def": "",
    "sentence": "Q: Is Amy {{BLANK}} at English? — A: Yes, she is. She can speak English well.",
    "cn": "艾美的英文很好嗎？ — 是的，她是。她英文說得很好。"
  },
  {
    "word": "bad",
    "pos": "adj.",
    "cn_def": "壞的",
    "en_def": "",
    "sentence": "Q: Is the weather {{BLANK}} today? — A: Yes, it is. There is a typhoon.",
    "cn": "今天天氣很糟嗎？ — 是的，很糟。有颱風。"
  },
  {
    "word": "cool",
    "pos": "adj.",
    "cn_def": "涼爽的",
    "en_def": "",
    "sentence": "Q: Is it {{BLANK}} today? — A: Yes, it is. Wear a jacket.",
    "cn": "今天很涼嗎？ — 是的，很涼。穿件夾克吧。"
  },
  {
    "word": "boring",
    "pos": "adj.",
    "cn_def": "無聊的",
    "en_def": "",
    "sentence": "Q: Is the movie {{BLANK}}? — A: Yes, it is. I want to sleep.",
    "cn": "這部電影很無聊嗎？ — 是的，很無聊。我想睡覺。"
  },
  {
    "word": "exciting",
    "pos": "adj.",
    "cn_def": "令人興奮的",
    "en_def": "",
    "sentence": "Q: Is the baseball game {{BLANK}}? — A: Yes, it is. Everyone is shouting.",
    "cn": "這場棒球賽很刺激嗎？ — 是的，很刺激。每個人都在大叫。"
  },
  {
    "word": "interested",
    "pos": "adj.",
    "cn_def": "感興趣的",
    "en_def": "",
    "sentence": "Q: Are you {{BLANK}} in music? — A: Yes, I am. I play the piano every day.",
    "cn": "你對音樂有興趣嗎？ — 是的，我有。我每天彈鋼琴。"
  },
  {
    "word": "crazy",
    "pos": "adj.",
    "cn_def": "瘋狂的",
    "en_def": "",
    "sentence": "Q: Is Tom {{BLANK}} about basketball? — A: Yes, he is. He plays it every day.",
    "cn": "湯姆很迷籃球嗎？ — 是的，他是。他每天都打籃球。"
  },
  {
    "word": "poor",
    "pos": "adj.",
    "cn_def": "貧困的；可憐的",
    "en_def": "",
    "sentence": "Q: Is the family {{BLANK}}? — A: Yes, they are. They don't have money for food.",
    "cn": "那一家人很窮嗎？ — 是的，他們很窮。他們沒有錢買食物。"
  },
  {
    "word": "blind",
    "pos": "adj.",
    "cn_def": "瞎的",
    "en_def": "",
    "sentence": "Q: Is the old man {{BLANK}}? — A: Yes, he is. He can't see.",
    "cn": "那位老先生眼睛看不見嗎？ — 是的，他是。他看不見。"
  },
  {
    "word": "tall",
    "pos": "adj.",
    "cn_def": "高的",
    "en_def": "",
    "sentence": "Tom is 160 cm, and Ben is 150 cm. — Tom is {{BLANK}} than Ben.",
    "cn": "湯姆 160 公分，班 150 公分。— 湯姆比班高。"
  },
  {
    "word": "short",
    "pos": "adj.",
    "cn_def": "矮的；短的",
    "en_def": "",
    "sentence": "Amy is 145 cm, and Lisa is 140 cm. — Lisa is {{BLANK}} than Amy.",
    "cn": "艾美 145 公分，麗莎 140 公分。— 麗莎比艾美矮。"
  },
  {
    "word": "heavy",
    "pos": "adj.",
    "cn_def": "重的",
    "en_def": "",
    "sentence": "The box is 10 kg, and the bag is 2 kg. — The box is {{BLANK}} than the bag.",
    "cn": "箱子 10 公斤，袋子 2 公斤。— 箱子比袋子重。"
  },
  {
    "word": "thin",
    "pos": "adj.",
    "cn_def": "瘦的",
    "en_def": "",
    "sentence": "Dad is 80 kg, and Uncle Sam is 60 kg. — Uncle Sam is {{BLANK}} than Dad.",
    "cn": "爸爸 80 公斤，山姆叔叔 60 公斤。— 山姆叔叔比爸爸瘦。"
  },
  {
    "word": "rich",
    "pos": "adj.",
    "cn_def": "有錢的",
    "en_def": "",
    "sentence": "Q: Who has more money, the king or the farmer? — A: The king. He is {{BLANK}} than the farmer.",
    "cn": "誰的錢比較多，國王還是農夫？— 國王，他比農夫有錢。"
  },
  {
    "word": "famous",
    "pos": "adj.",
    "cn_def": "有名的",
    "en_def": "",
    "sentence": "Q: Who do more people know, the movie star or your neighbor? — A: The movie star. She is {{BLANK}} than my neighbor.",
    "cn": "比較多人認識誰，電影明星還是你的鄰居？— 電影明星，她比我的鄰居有名。",
    "nblanks": 2
  },
  {
    "word": "old",
    "pos": "adj.",
    "cn_def": "老的",
    "en_def": "",
    "sentence": "Q: Who is the {{BLANK}} in your family? — A: My grandpa. He is ninety years old.",
    "cn": "你家裡誰年紀最大？— 我爺爺，他九十歲。"
  },
  {
    "word": "young",
    "pos": "adj.",
    "cn_def": "年輕的",
    "en_def": "",
    "sentence": "Q: Who is the {{BLANK}} in your family? — A: My baby sister. She is one year old.",
    "cn": "你家裡誰最年輕？— 我的小妹妹，她一歲。"
  },
  {
    "word": "smart",
    "pos": "adj.",
    "cn_def": "聰明的",
    "en_def": "",
    "sentence": "Q: Who is the {{BLANK}} student in your class? — A: Amy. She gets 100 on every test.",
    "cn": "你們班上最聰明的學生是誰？— 艾美，她每次考試都考一百分。"
  },
  {
    "word": "fat",
    "pos": "adj.",
    "cn_def": "胖的",
    "en_def": "",
    "sentence": "Q: Which cat is the {{BLANK}} of all? — A: Kitty. She eats a lot.",
    "cn": "哪一隻貓是全部裡面最胖的？— 凱蒂，她吃很多。"
  },
  {
    "word": "beautiful",
    "pos": "adj.",
    "cn_def": "美麗的",
    "en_def": "",
    "sentence": "Q: Which flower is the {{BLANK}} in the garden? — A: The rose. Everyone loves to look at it.",
    "cn": "花園裡哪一種花最美？— 玫瑰，大家都喜歡看它。",
    "nblanks": 2
  }
];

const MCQS = [
  {
    "q": "Q: How are you today? — A: I am ______. I got 100 on the test.【快樂的】",
    "options": [
      "happy",
      "handsome",
      "cute",
      "successful"
    ],
    "answer": 0,
    "cn": "你今天好嗎？ — 我很快樂，我考試考了一百分。",
    "vocabIndex": 0
  },
  {
    "q": "Q: How is Ben? — A: He is ______. He lost his new bike.【不快樂的】",
    "options": [
      "happy",
      "lazy",
      "angry",
      "unhappy"
    ],
    "answer": 3,
    "cn": "班還好嗎？ — 他不開心，他弄丟了新腳踏車。",
    "vocabIndex": 1
  },
  {
    "q": "Q: How is Tom? — A: He is ______. His dog is sick.【悲傷的】",
    "options": [
      "crazy",
      "sad",
      "bad",
      "richer"
    ],
    "answer": 1,
    "cn": "湯姆還好嗎？ — 他很難過，他的狗生病了。",
    "vocabIndex": 2
  },
  {
    "q": "Q: How is your grandma? — A: She is ______. She lives alone.【寂寞的】",
    "options": [
      "polite",
      "stupid",
      "lonely",
      "nice"
    ],
    "answer": 2,
    "cn": "你奶奶還好嗎？ — 她很寂寞，她一個人住。",
    "vocabIndex": 3
  },
  {
    "q": "Q: How is your dad today? — A: He is ______. I broke his cup.【生氣的】",
    "options": [
      "happy",
      "unhappy",
      "shorter",
      "angry"
    ],
    "answer": 3,
    "cn": "你爸爸今天還好嗎？ — 他很生氣，我打破了他的杯子。",
    "vocabIndex": 4
  },
  {
    "q": "Q: How is Mom? — A: She is ______ at me. My room is very dirty.【生氣的；瘋狂的】",
    "options": [
      "mad",
      "richer",
      "polite",
      "proud"
    ],
    "answer": 0,
    "cn": "媽媽還好嗎？ — 她在生我的氣，我的房間很髒。",
    "vocabIndex": 5
  },
  {
    "q": "Q: How are the kids? — A: They are ______. There is a big snake!【害怕的】",
    "options": [
      "interested",
      "scared",
      "bored",
      "excited"
    ],
    "answer": 1,
    "cn": "孩子們還好嗎？ — 他們很害怕，有一條大蛇！",
    "vocabIndex": 6
  },
  {
    "q": "Q: How are the students? — A: They are ______. The movie is too long.【感到厭煩的】",
    "options": [
      "interested",
      "excited",
      "bored",
      "scared"
    ],
    "answer": 2,
    "cn": "學生們還好嗎？ — 他們覺得很無聊，電影太長了。",
    "vocabIndex": 7
  },
  {
    "q": "Q: How is Amy? — A: She is ______. Tomorrow is her birthday.【感到興奮的】",
    "options": [
      "excited",
      "bored",
      "interested",
      "scared"
    ],
    "answer": 0,
    "cn": "艾美還好嗎？ — 她很興奮，明天是她的生日。",
    "vocabIndex": 8
  },
  {
    "q": "Q: How are your parents? — A: They are ______ of me. I won the race.【驕傲的】",
    "options": [
      "sad",
      "lovely",
      "brave",
      "proud"
    ],
    "answer": 3,
    "cn": "你爸媽還好嗎？ — 他們以我為榮，我贏了賽跑。",
    "vocabIndex": 9
  },
  {
    "q": "Q: How is your mom? — A: She is very ______. She has a lot of work.【忙碌的】",
    "options": [
      "thinner",
      "busy",
      "kind",
      "fattest"
    ],
    "answer": 1,
    "cn": "你媽媽還好嗎？ — 她很忙，她有很多工作。",
    "vocabIndex": 10
  },
  {
    "q": "Q: What does your baby sister look like? — A: She is small and ______. She has big eyes.【可愛的】",
    "options": [
      "mad",
      "wise",
      "cute",
      "good"
    ],
    "answer": 2,
    "cn": "你的小妹妹長什麼樣子？ — 她小小的很可愛，她有大眼睛。",
    "vocabIndex": 11
  },
  {
    "q": "Q: What do the twins look like? — A: They are ______. They always smile.【可愛的】",
    "options": [
      "shorter",
      "lovely",
      "unhappy",
      "mad"
    ],
    "answer": 1,
    "cn": "那對雙胞胎長什麼樣子？ — 他們很可愛，總是笑咪咪的。",
    "vocabIndex": 12
  },
  {
    "q": "Q: What does Amy look like? — A: She is ______. She has long hair.【漂亮的】",
    "options": [
      "richer",
      "shorter",
      "crazy",
      "pretty"
    ],
    "answer": 3,
    "cn": "艾美長什麼樣子？ — 她很漂亮，她有一頭長髮。",
    "vocabIndex": 13
  },
  {
    "q": "Q: What does your brother look like? — A: He is tall and ______.【英俊的】",
    "options": [
      "brave",
      "bad",
      "handsome",
      "youngest"
    ],
    "answer": 2,
    "cn": "你哥哥長什麼樣子？ — 他又高又帥。",
    "vocabIndex": 14
  },
  {
    "q": "Q: What does the model look like? — A: She is tall and ______.【苗條的】",
    "options": [
      "slim",
      "funny",
      "sad",
      "youngest"
    ],
    "answer": 0,
    "cn": "那位模特兒長什麼樣子？ — 她又高又苗條。",
    "vocabIndex": 15
  },
  {
    "q": "Q: What does the monster in the story look like? — A: It is big and ______.【醜的】",
    "options": [
      "good",
      "blind",
      "ugly",
      "friendly"
    ],
    "answer": 2,
    "cn": "故事裡的怪物長什麼樣子？ — 牠又大又醜。",
    "vocabIndex": 16
  },
  {
    "q": "Q: What do you think of your grandma? — A: She is ______ because she often gives food to poor people.【親切的】",
    "options": [
      "cool",
      "kind",
      "stupid",
      "wise"
    ],
    "answer": 1,
    "cn": "你覺得你奶奶怎麼樣？ — 她很親切，因為她常常送食物給窮人。",
    "vocabIndex": 17
  },
  {
    "q": "Q: What do you think of your teacher? — A: She is ______ because she often helps us with our homework.【好的】",
    "options": [
      "wise",
      "cool",
      "sad",
      "nice"
    ],
    "answer": 3,
    "cn": "你覺得你的老師怎麼樣？ — 她人很好，因為她常常幫我們做功課。",
    "vocabIndex": 18
  },
  {
    "q": "Q: What do you think of your new neighbor? — A: She is ______ because she often says hello to us.【友善的】",
    "options": [
      "friendly",
      "mad",
      "handsome",
      "pretty"
    ],
    "answer": 0,
    "cn": "你覺得你的新鄰居怎麼樣？ — 她很友善，因為她常常跟我們打招呼。",
    "vocabIndex": 19
  },
  {
    "q": "Q: What do you think of Lisa? — A: She is ______ because she often says \"please\" and \"thank you.\"【有禮貌的】",
    "options": [
      "slim",
      "happy",
      "kind",
      "polite"
    ],
    "answer": 3,
    "cn": "你覺得麗莎怎麼樣？ — 她很有禮貌，因為她常說「請」和「謝謝」。",
    "vocabIndex": 20
  },
  {
    "q": "Q: What do you think of Tom? — A: He is ______ because he often tells the truth.【誠實的】",
    "options": [
      "successful",
      "youngest",
      "honest",
      "sad"
    ],
    "answer": 2,
    "cn": "你覺得湯姆怎麼樣？ — 他很誠實，因為他常常說實話。",
    "vocabIndex": 21
  },
  {
    "q": "Q: What do you think of Ben? — A: He is ______ because he often helps people in trouble.【勇敢的】",
    "options": [
      "wise",
      "brave",
      "ugly",
      "good"
    ],
    "answer": 1,
    "cn": "你覺得班怎麼樣？ — 他很勇敢，因為他常常幫助有麻煩的人。",
    "vocabIndex": 22
  },
  {
    "q": "Q: What do you think of your mom? — A: She is ______ because she often checks the door before bed.【仔細的】",
    "options": [
      "careful",
      "friendly",
      "brave",
      "heavier"
    ],
    "answer": 0,
    "cn": "你覺得你媽媽怎麼樣？ — 她很仔細，因為她睡前常常檢查門。",
    "vocabIndex": 23
  },
  {
    "q": "Q: What do you think of Amy? — A: She is ______ because she often studies until ten at night.【努力工作的】",
    "options": [
      "exciting",
      "boring",
      "hard-working",
      "careful"
    ],
    "answer": 2,
    "cn": "你覺得艾美怎麼樣？ — 她很努力，因為她常常讀書到晚上十點。",
    "vocabIndex": 24
  },
  {
    "q": "Q: What do you think of Ken? — A: He is ______ because he often sleeps in class.【懶惰的】",
    "options": [
      "ugly",
      "stupid",
      "richer",
      "lazy"
    ],
    "answer": 3,
    "cn": "你覺得肯怎麼樣？ — 他很懶惰，因為他常常在課堂上睡覺。",
    "vocabIndex": 25
  },
  {
    "q": "Q: What do you think of Mr. Lee? — A: He is ______ because he often tells jokes.【好笑的】",
    "options": [
      "funny",
      "unhappy",
      "richer",
      "nice"
    ],
    "answer": 0,
    "cn": "你覺得李老師怎麼樣？ — 他很好笑，因為他常常講笑話。",
    "vocabIndex": 26
  },
  {
    "q": "Q: What do you think of the new student? — A: He is ______ because he often stays quiet in class.【害羞的】",
    "options": [
      "smartest",
      "shy",
      "stupid",
      "good"
    ],
    "answer": 1,
    "cn": "你覺得那位新同學怎麼樣？ — 他很害羞，因為他上課常常很安靜。",
    "vocabIndex": 27
  },
  {
    "q": "Q: What do you think of your grandpa? — A: He is ______ because he often gives me good ideas.【明智的】",
    "options": [
      "shorter",
      "fattest",
      "friendly",
      "wise"
    ],
    "answer": 3,
    "cn": "你覺得你爺爺怎麼樣？ — 他很有智慧，因為他常常給我好主意。",
    "vocabIndex": 28
  },
  {
    "q": "Q: What do you think of the fox in the story? — A: It is ______ because it often makes the same mistake.【笨的】",
    "options": [
      "stupid",
      "fattest",
      "good",
      "slim"
    ],
    "answer": 0,
    "cn": "你覺得故事裡的狐狸怎麼樣？ — 牠很笨，因為牠常常犯同樣的錯。",
    "vocabIndex": 29
  },
  {
    "q": "Q: What do you think of your uncle? — A: He is ______ because he often sells a lot of cars.【成功的】",
    "options": [
      "busy",
      "friendly",
      "successful",
      "wise"
    ],
    "answer": 2,
    "cn": "你覺得你叔叔怎麼樣？ — 他很成功，因為他常常賣出很多車。",
    "vocabIndex": 30
  },
  {
    "q": "Q: Is Amy ______ at English? — A: Yes, she is. She can speak English well.【好的】",
    "options": [
      "thinner",
      "good",
      "stupid",
      "lazy"
    ],
    "answer": 1,
    "cn": "艾美的英文很好嗎？ — 是的，她是。她英文說得很好。",
    "vocabIndex": 31
  },
  {
    "q": "Q: Is the weather ______ today? — A: Yes, it is. There is a typhoon.【壞的】",
    "options": [
      "honest",
      "ugly",
      "successful",
      "bad"
    ],
    "answer": 3,
    "cn": "今天天氣很糟嗎？ — 是的，很糟。有颱風。",
    "vocabIndex": 32
  },
  {
    "q": "Q: Is it ______ today? — A: Yes, it is. Wear a jacket.【涼爽的】",
    "options": [
      "cool",
      "fattest",
      "unhappy",
      "lonely"
    ],
    "answer": 0,
    "cn": "今天很涼嗎？ — 是的，很涼。穿件夾克吧。",
    "vocabIndex": 33
  },
  {
    "q": "Q: Is the movie ______? — A: Yes, it is. I want to sleep.【無聊的】",
    "options": [
      "hard-working",
      "exciting",
      "boring",
      "kind"
    ],
    "answer": 2,
    "cn": "這部電影很無聊嗎？ — 是的，很無聊。我想睡覺。",
    "vocabIndex": 34
  },
  {
    "q": "Q: Is the baseball game ______? — A: Yes, it is. Everyone is shouting.【令人興奮的】",
    "options": [
      "hard-working",
      "exciting",
      "boring",
      "lonely"
    ],
    "answer": 1,
    "cn": "這場棒球賽很刺激嗎？ — 是的，很刺激。每個人都在大叫。",
    "vocabIndex": 35
  },
  {
    "q": "Q: Are you ______ in music? — A: Yes, I am. I play the piano every day.【感興趣的】",
    "options": [
      "excited",
      "scared",
      "bored",
      "interested"
    ],
    "answer": 3,
    "cn": "你對音樂有興趣嗎？ — 是的，我有。我每天彈鋼琴。",
    "vocabIndex": 36
  },
  {
    "q": "Q: Is Tom ______ about basketball? — A: Yes, he is. He plays it every day.【瘋狂的】",
    "options": [
      "bad",
      "cool",
      "crazy",
      "good"
    ],
    "answer": 2,
    "cn": "湯姆很迷籃球嗎？ — 是的，他是。他每天都打籃球。",
    "vocabIndex": 37
  },
  {
    "q": "Q: Is the family ______? — A: Yes, they are. They don't have money for food.【貧困的；可憐的】",
    "options": [
      "poor",
      "polite",
      "friendly",
      "successful"
    ],
    "answer": 0,
    "cn": "那一家人很窮嗎？ — 是的，他們很窮。他們沒有錢買食物。",
    "vocabIndex": 38
  },
  {
    "q": "Q: Is the old man ______? — A: Yes, he is. He can't see.【瞎的】",
    "options": [
      "kind",
      "blind",
      "sad",
      "cool"
    ],
    "answer": 1,
    "cn": "那位老先生眼睛看不見嗎？ — 是的，他是。他看不見。",
    "vocabIndex": 39
  },
  {
    "q": "Tom is 160 cm, and Ben is 150 cm. — Tom is ______ than Ben.【高的】",
    "options": [
      "careful",
      "honest",
      "taller",
      "good"
    ],
    "answer": 2,
    "cn": "湯姆 160 公分，班 150 公分。— 湯姆比班高。",
    "vocabIndex": 40
  },
  {
    "q": "Amy is 145 cm, and Lisa is 140 cm. — Lisa is ______ than Amy.【矮的；短的】",
    "options": [
      "cute",
      "brave",
      "youngest",
      "shorter"
    ],
    "answer": 3,
    "cn": "艾美 145 公分，麗莎 140 公分。— 麗莎比艾美矮。",
    "vocabIndex": 41
  },
  {
    "q": "The box is 10 kg, and the bag is 2 kg. — The box is ______ than the bag.【重的】",
    "options": [
      "handsome",
      "heavier",
      "polite",
      "angry"
    ],
    "answer": 1,
    "cn": "箱子 10 公斤，袋子 2 公斤。— 箱子比袋子重。",
    "vocabIndex": 42
  },
  {
    "q": "Dad is 80 kg, and Uncle Sam is 60 kg. — Uncle Sam is ______ than Dad.【瘦的】",
    "options": [
      "thinner",
      "wise",
      "taller",
      "happy"
    ],
    "answer": 0,
    "cn": "爸爸 80 公斤，山姆叔叔 60 公斤。— 山姆叔叔比爸爸瘦。",
    "vocabIndex": 43
  },
  {
    "q": "Q: Who has more money, the king or the farmer? — A: The king. He is ______ than the farmer.【有錢的】",
    "options": [
      "kind",
      "angry",
      "richer",
      "honest"
    ],
    "answer": 2,
    "cn": "誰的錢比較多，國王還是農夫？— 國王，他比農夫有錢。",
    "vocabIndex": 44
  },
  {
    "q": "Q: Who do more people know, the movie star or your neighbor? — A: The movie star. She is ______ than my neighbor.【有名的】",
    "options": [
      "more famous",
      "proud",
      "nice",
      "happy"
    ],
    "answer": 0,
    "cn": "比較多人認識誰，電影明星還是你的鄰居？— 電影明星，她比我的鄰居有名。",
    "vocabIndex": 45
  },
  {
    "q": "Q: Who is the ______ in your family? — A: My grandpa. He is ninety years old.【老的】",
    "options": [
      "busy",
      "proud",
      "angry",
      "oldest"
    ],
    "answer": 3,
    "cn": "你家裡誰年紀最大？— 我爺爺，他九十歲。",
    "vocabIndex": 46
  },
  {
    "q": "Q: Who is the ______ in your family? — A: My baby sister. She is one year old.【年輕的】",
    "options": [
      "richer",
      "youngest",
      "wise",
      "kind"
    ],
    "answer": 1,
    "cn": "你家裡誰最年輕？— 我的小妹妹，她一歲。",
    "vocabIndex": 47
  },
  {
    "q": "Q: Who is the ______ student in your class? — A: Amy. She gets 100 on every test.【聰明的】",
    "options": [
      "smartest",
      "oldest",
      "handsome",
      "slim"
    ],
    "answer": 0,
    "cn": "你們班上最聰明的學生是誰？— 艾美，她每次考試都考一百分。",
    "vocabIndex": 48
  },
  {
    "q": "Q: Which cat is the ______ of all? — A: Kitty. She eats a lot.【胖的】",
    "options": [
      "oldest",
      "pretty",
      "fattest",
      "funny"
    ],
    "answer": 2,
    "cn": "哪一隻貓是全部裡面最胖的？— 凱蒂，她吃很多。",
    "vocabIndex": 49
  },
  {
    "q": "Q: Which flower is the ______ in the garden? — A: The rose. Everyone loves to look at it.【美麗的】",
    "options": [
      "friendly",
      "most beautiful",
      "oldest",
      "angry"
    ],
    "answer": 1,
    "cn": "花園裡哪一種花最美？— 玫瑰，大家都喜歡看它。",
    "vocabIndex": 50
  }
];

const LOOKUP = {
  "happy": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "快樂的"
  },
  "unhappy": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "不快樂的"
  },
  "sad": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "悲傷的"
  },
  "lonely": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "寂寞的"
  },
  "angry": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "生氣的"
  },
  "mad": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "生氣的；瘋狂的"
  },
  "scared": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "害怕的"
  },
  "bored": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "感到厭煩的"
  },
  "excited": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "感到興奮的"
  },
  "proud": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "驕傲的"
  },
  "busy": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "忙碌的"
  },
  "cute": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "可愛的"
  },
  "lovely": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "可愛的"
  },
  "pretty": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "漂亮的"
  },
  "handsome": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "英俊的"
  },
  "slim": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "苗條的"
  },
  "ugly": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "醜的"
  },
  "kind": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "親切的"
  },
  "nice": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "好的"
  },
  "friendly": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "友善的"
  },
  "polite": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "有禮貌的"
  },
  "honest": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "誠實的"
  },
  "brave": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "勇敢的"
  },
  "careful": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "仔細的"
  },
  "hard-working": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "努力工作的"
  },
  "lazy": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "懶惰的"
  },
  "funny": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "好笑的"
  },
  "shy": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "害羞的"
  },
  "wise": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "明智的"
  },
  "stupid": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "笨的"
  },
  "successful": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "成功的"
  },
  "good": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "好的"
  },
  "bad": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "壞的"
  },
  "cool": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "涼爽的"
  },
  "boring": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "無聊的"
  },
  "exciting": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "令人興奮的"
  },
  "interested": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "感興趣的"
  },
  "crazy": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "瘋狂的"
  },
  "poor": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "貧困的；可憐的"
  },
  "blind": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "瞎的"
  },
  "taller": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "高的"
  },
  "shorter": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "矮的；短的"
  },
  "heavier": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "重的"
  },
  "thinner": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "瘦的"
  },
  "richer": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "有錢的"
  },
  "more famous": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "有名的"
  },
  "oldest": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "老的"
  },
  "youngest": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "年輕的"
  },
  "smartest": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "聰明的"
  },
  "fattest": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "胖的"
  },
  "most beautiful": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "美麗的"
  }
};

const EXTRA_GLOSSES = {};
