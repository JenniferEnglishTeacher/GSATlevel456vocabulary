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
    "en_def": "feeling good and glad",
    "sentence": "Q: How are you today? — A: I am {{BLANK}}. I got 100 on the test.",
    "cn": "你今天好嗎？ — 我很快樂，我考試考了一百分。"
  },
  {
    "word": "unhappy",
    "pos": "adj.",
    "cn_def": "不快樂的",
    "en_def": "not happy",
    "sentence": "Q: How is Ben? — A: He is {{BLANK}}. He lost his new bike.",
    "cn": "班還好嗎？ — 他不開心，他弄丟了新腳踏車。"
  },
  {
    "word": "sad",
    "pos": "adj.",
    "cn_def": "悲傷的",
    "en_def": "not happy; wanting to cry",
    "sentence": "Q: How is Tom? — A: He is {{BLANK}}. His dog is sick.",
    "cn": "湯姆還好嗎？ — 他很難過，他的狗生病了。"
  },
  {
    "word": "lonely",
    "pos": "adj.",
    "cn_def": "寂寞的",
    "en_def": "sad because you are alone",
    "sentence": "Q: How is your grandma? — A: She is {{BLANK}}. She lives alone.",
    "cn": "你奶奶還好嗎？ — 她很寂寞，她一個人住。"
  },
  {
    "word": "angry",
    "pos": "adj.",
    "cn_def": "生氣的",
    "en_def": "feeling mad at someone or something",
    "sentence": "Q: How is your dad today? — A: He is {{BLANK}}. I broke his cup.",
    "cn": "你爸爸今天還好嗎？ — 他很生氣，我打破了他的杯子。"
  },
  {
    "word": "mad",
    "pos": "adj.",
    "cn_def": "生氣的；瘋狂的",
    "en_def": "very angry, or crazy",
    "sentence": "Q: How is Mom? — A: She is {{BLANK}} at me. My room is very dirty.",
    "cn": "媽媽還好嗎？ — 她在生我的氣，我的房間很髒。"
  },
  {
    "word": "scared",
    "pos": "adj.",
    "cn_def": "害怕的",
    "en_def": "afraid of something",
    "sentence": "Q: How are the kids? — A: They are {{BLANK}}. There is a big snake!",
    "cn": "孩子們還好嗎？ — 他們很害怕，有一條大蛇！"
  },
  {
    "word": "bored",
    "pos": "adj.",
    "cn_def": "感到厭煩的",
    "en_def": "not interested because nothing is fun",
    "sentence": "Q: How are the students? — A: They are {{BLANK}}. The movie is too long.",
    "cn": "學生們還好嗎？ — 他們覺得很無聊，電影太長了。"
  },
  {
    "word": "excited",
    "pos": "adj.",
    "cn_def": "感到興奮的",
    "en_def": "very happy about something that is going to happen",
    "sentence": "Q: How is Amy? — A: She is {{BLANK}}. Tomorrow is her birthday.",
    "cn": "艾美還好嗎？ — 她很興奮，明天是她的生日。"
  },
  {
    "word": "proud",
    "pos": "adj.",
    "cn_def": "驕傲的",
    "en_def": "feeling good about what you or others did",
    "sentence": "Q: How are your parents? — A: They are {{BLANK}} of me. I won the race.",
    "cn": "你爸媽還好嗎？ — 他們以我為榮，我贏了賽跑。"
  },
  {
    "word": "busy",
    "pos": "adj.",
    "cn_def": "忙碌的",
    "en_def": "having a lot of things to do",
    "sentence": "Q: How is your mom? — A: She is very {{BLANK}}. She has a lot of work.",
    "cn": "你媽媽還好嗎？ — 她很忙，她有很多工作。"
  },
  {
    "word": "cute",
    "pos": "adj.",
    "cn_def": "可愛的",
    "en_def": "small and nice to look at",
    "sentence": "Q: What does your baby sister look like? — A: She is small and {{BLANK}}. She has big eyes.",
    "cn": "你的小妹妹長什麼樣子？ — 她小小的很可愛，她有大眼睛。"
  },
  {
    "word": "lovely",
    "pos": "adj.",
    "cn_def": "可愛的",
    "en_def": "beautiful or very nice",
    "sentence": "Q: What do the twins look like? — A: They are {{BLANK}}. They always smile.",
    "cn": "那對雙胞胎長什麼樣子？ — 他們很可愛，總是笑咪咪的。"
  },
  {
    "word": "pretty",
    "pos": "adj.",
    "cn_def": "漂亮的",
    "en_def": "nice to look at",
    "sentence": "Q: What does Amy look like? — A: She is {{BLANK}}. She has long hair.",
    "cn": "艾美長什麼樣子？ — 她很漂亮，她有一頭長髮。"
  },
  {
    "word": "handsome",
    "pos": "adj.",
    "cn_def": "英俊的",
    "en_def": "good-looking (for a man or boy)",
    "sentence": "Q: What does your brother look like? — A: He is tall and {{BLANK}}.",
    "cn": "你哥哥長什麼樣子？ — 他又高又帥。"
  },
  {
    "word": "slim",
    "pos": "adj.",
    "cn_def": "苗條的",
    "en_def": "thin in a nice way",
    "sentence": "Q: What does the model look like? — A: She is tall and {{BLANK}}.",
    "cn": "那位模特兒長什麼樣子？ — 她又高又苗條。"
  },
  {
    "word": "ugly",
    "pos": "adj.",
    "cn_def": "醜的",
    "en_def": "not nice to look at",
    "sentence": "Q: What does the monster in the story look like? — A: It is big and {{BLANK}}.",
    "cn": "故事裡的怪物長什麼樣子？ — 牠又大又醜。"
  },
  {
    "word": "kind",
    "pos": "adj.",
    "cn_def": "親切的",
    "en_def": "nice and helpful to other people",
    "sentence": "Q: What do you think of your grandma? — A: She is {{BLANK}} because she often gives food to poor people.",
    "cn": "你覺得你奶奶怎麼樣？ — 她很親切，因為她常常送食物給窮人。"
  },
  {
    "word": "nice",
    "pos": "adj.",
    "cn_def": "好的",
    "en_def": "good, kind, or pleasant",
    "sentence": "Q: What do you think of your teacher? — A: She is {{BLANK}} because she often helps us with our homework.",
    "cn": "你覺得你的老師怎麼樣？ — 她人很好，因為她常常幫我們做功課。"
  },
  {
    "word": "friendly",
    "pos": "adj.",
    "cn_def": "友善的",
    "en_def": "kind and easy to talk to",
    "sentence": "Q: What do you think of your new neighbor? — A: She is {{BLANK}} because she often says hello to us.",
    "cn": "你覺得你的新鄰居怎麼樣？ — 她很友善，因為她常常跟我們打招呼。"
  },
  {
    "word": "polite",
    "pos": "adj.",
    "cn_def": "有禮貌的",
    "en_def": "saying \"please\" and \"thank you\"; having good manners",
    "sentence": "Q: What do you think of Lisa? — A: She is {{BLANK}} because she often says \"please\" and \"thank you.\"",
    "cn": "你覺得麗莎怎麼樣？ — 她很有禮貌，因為她常說「請」和「謝謝」。"
  },
  {
    "word": "honest",
    "pos": "adj.",
    "cn_def": "誠實的",
    "en_def": "always telling the truth",
    "sentence": "Q: What do you think of Tom? — A: He is {{BLANK}} because he often tells the truth.",
    "cn": "你覺得湯姆怎麼樣？ — 他很誠實，因為他常常說實話。"
  },
  {
    "word": "brave",
    "pos": "adj.",
    "cn_def": "勇敢的",
    "en_def": "not afraid to do hard or dangerous things",
    "sentence": "Q: What do you think of Ben? — A: He is {{BLANK}} because he often helps people in trouble.",
    "cn": "你覺得班怎麼樣？ — 他很勇敢，因為他常常幫助有麻煩的人。"
  },
  {
    "word": "careful",
    "pos": "adj.",
    "cn_def": "仔細的",
    "en_def": "thinking about what you do so you do not make mistakes",
    "sentence": "Q: What do you think of your mom? — A: She is {{BLANK}} because she often checks the door before bed.",
    "cn": "你覺得你媽媽怎麼樣？ — 她很仔細，因為她睡前常常檢查門。"
  },
  {
    "word": "hard-working",
    "pos": "adj.",
    "cn_def": "努力工作的",
    "en_def": "always working a lot",
    "sentence": "Q: What do you think of Amy? — A: She is {{BLANK}} because she often studies until ten at night.",
    "cn": "你覺得艾美怎麼樣？ — 她很努力，因為她常常讀書到晚上十點。"
  },
  {
    "word": "lazy",
    "pos": "adj.",
    "cn_def": "懶惰的",
    "en_def": "not wanting to work or do anything",
    "sentence": "Q: What do you think of Ken? — A: He is {{BLANK}} because he often sleeps in class.",
    "cn": "你覺得肯怎麼樣？ — 他很懶惰，因為他常常在課堂上睡覺。"
  },
  {
    "word": "funny",
    "pos": "adj.",
    "cn_def": "好笑的",
    "en_def": "making you laugh",
    "sentence": "Q: What do you think of Mr. Lee? — A: He is {{BLANK}} because he often tells jokes.",
    "cn": "你覺得李老師怎麼樣？ — 他很好笑，因為他常常講笑話。"
  },
  {
    "word": "shy",
    "pos": "adj.",
    "cn_def": "害羞的",
    "en_def": "afraid to talk to people you do not know",
    "sentence": "Q: What do you think of the new student? — A: He is {{BLANK}} because he often stays quiet in class.",
    "cn": "你覺得那位新同學怎麼樣？ — 他很害羞，因為他上課常常很安靜。"
  },
  {
    "word": "wise",
    "pos": "adj.",
    "cn_def": "明智的",
    "en_def": "knowing a lot and making good choices",
    "sentence": "Q: What do you think of your grandpa? — A: He is {{BLANK}} because he often gives me good ideas.",
    "cn": "你覺得你爺爺怎麼樣？ — 他很有智慧，因為他常常給我好主意。"
  },
  {
    "word": "stupid",
    "pos": "adj.",
    "cn_def": "笨的",
    "en_def": "not smart",
    "sentence": "Q: What do you think of the fox in the story? — A: It is {{BLANK}} because it often makes the same mistake.",
    "cn": "你覺得故事裡的狐狸怎麼樣？ — 牠很笨，因為牠常常犯同樣的錯。"
  },
  {
    "word": "successful",
    "pos": "adj.",
    "cn_def": "成功的",
    "en_def": "doing well and getting what you want",
    "sentence": "Q: What do you think of your uncle? — A: He is {{BLANK}} because he often sells a lot of cars.",
    "cn": "你覺得你叔叔怎麼樣？ — 他很成功，因為他常常賣出很多車。"
  },
  {
    "word": "good",
    "pos": "adj.",
    "cn_def": "好的",
    "en_def": "nice; of high quality; not bad",
    "sentence": "Q: Is Amy {{BLANK}} at English? — A: Yes, she is. She can speak English well.",
    "cn": "艾美的英文很好嗎？ — 是的，她是。她英文說得很好。"
  },
  {
    "word": "bad",
    "pos": "adj.",
    "cn_def": "壞的",
    "en_def": "not good",
    "sentence": "Q: Is the weather {{BLANK}} today? — A: Yes, it is. There is a typhoon.",
    "cn": "今天天氣很糟嗎？ — 是的，很糟。有颱風。"
  },
  {
    "word": "cool",
    "pos": "adj.",
    "cn_def": "涼爽的",
    "en_def": "a little cold; also very good and fun",
    "sentence": "Q: Is it {{BLANK}} today? — A: Yes, it is. Wear a jacket.",
    "cn": "今天很涼嗎？ — 是的，很涼。穿件夾克吧。"
  },
  {
    "word": "boring",
    "pos": "adj.",
    "cn_def": "無聊的",
    "en_def": "not interesting or fun",
    "sentence": "Q: Is the movie {{BLANK}}? — A: Yes, it is. I want to sleep.",
    "cn": "這部電影很無聊嗎？ — 是的，很無聊。我想睡覺。"
  },
  {
    "word": "exciting",
    "pos": "adj.",
    "cn_def": "令人興奮的",
    "en_def": "making you feel very happy and interested",
    "sentence": "Q: Is the baseball game {{BLANK}}? — A: Yes, it is. Everyone is shouting.",
    "cn": "這場棒球賽很刺激嗎？ — 是的，很刺激。每個人都在大叫。"
  },
  {
    "word": "interested",
    "pos": "adj.",
    "cn_def": "感興趣的",
    "en_def": "wanting to know more about something",
    "sentence": "Q: Are you {{BLANK}} in music? — A: Yes, I am. I play the piano every day.",
    "cn": "你對音樂有興趣嗎？ — 是的，我有。我每天彈鋼琴。"
  },
  {
    "word": "crazy",
    "pos": "adj.",
    "cn_def": "瘋狂的",
    "en_def": "not thinking clearly; very strange",
    "sentence": "Q: Is Tom {{BLANK}} about basketball? — A: Yes, he is. He plays it every day.",
    "cn": "湯姆很迷籃球嗎？ — 是的，他是。他每天都打籃球。"
  },
  {
    "word": "poor",
    "pos": "adj.",
    "cn_def": "貧困的；可憐的",
    "en_def": "having very little money; also said when you feel sorry for someone",
    "sentence": "Q: Is the family {{BLANK}}? — A: Yes, they are. They don't have money for food.",
    "cn": "那一家人很窮嗎？ — 是的，他們很窮。他們沒有錢買食物。"
  },
  {
    "word": "blind",
    "pos": "adj.",
    "cn_def": "瞎的",
    "en_def": "not able to see",
    "sentence": "Q: Is the old man {{BLANK}}? — A: Yes, he is. He can't see.",
    "cn": "那位老先生眼睛看不見嗎？ — 是的，他是。他看不見。"
  },
  {
    "word": "tall",
    "pos": "adj.",
    "cn_def": "高的",
    "en_def": "high from head to foot",
    "sentence": "Tom is 160 cm, and Ben is 150 cm. — Tom is {{BLANK}} than Ben.",
    "cn": "湯姆 160 公分，班 150 公分。— 湯姆比班高。"
  },
  {
    "word": "short",
    "pos": "adj.",
    "cn_def": "矮的；短的",
    "en_def": "not tall; not long",
    "sentence": "Amy is 145 cm, and Lisa is 140 cm. — Lisa is {{BLANK}} than Amy.",
    "cn": "艾美 145 公分，麗莎 140 公分。— 麗莎比艾美矮。"
  },
  {
    "word": "heavy",
    "pos": "adj.",
    "cn_def": "重的",
    "en_def": "weighing a lot",
    "sentence": "The box is 10 kg, and the bag is 2 kg. — The box is {{BLANK}} than the bag.",
    "cn": "箱子 10 公斤，袋子 2 公斤。— 箱子比袋子重。"
  },
  {
    "word": "thin",
    "pos": "adj.",
    "cn_def": "瘦的",
    "en_def": "not fat",
    "sentence": "Dad is 80 kg, and Uncle Sam is 60 kg. — Uncle Sam is {{BLANK}} than Dad.",
    "cn": "爸爸 80 公斤，山姆叔叔 60 公斤。— 山姆叔叔比爸爸瘦。"
  },
  {
    "word": "rich",
    "pos": "adj.",
    "cn_def": "有錢的",
    "en_def": "having a lot of money",
    "sentence": "Q: Who has more money, the king or the farmer? — A: The king. He is {{BLANK}} than the farmer.",
    "cn": "誰的錢比較多，國王還是農夫？— 國王，他比農夫有錢。"
  },
  {
    "word": "famous",
    "pos": "adj.",
    "cn_def": "有名的",
    "en_def": "known by many people",
    "sentence": "Q: Who do more people know, the movie star or your neighbor? — A: The movie star. She is {{BLANK}} than my neighbor.",
    "cn": "比較多人認識誰，電影明星還是你的鄰居？— 電影明星，她比我的鄰居有名。",
    "nblanks": 2
  },
  {
    "word": "old",
    "pos": "adj.",
    "cn_def": "老的",
    "en_def": "having lived for many years; not young",
    "sentence": "Q: Who is the {{BLANK}} in your family? — A: My grandpa. He is ninety years old.",
    "cn": "你家裡誰年紀最大？— 我爺爺，他九十歲。"
  },
  {
    "word": "young",
    "pos": "adj.",
    "cn_def": "年輕的",
    "en_def": "having lived for only a few years; not old",
    "sentence": "Q: Who is the {{BLANK}} in your family? — A: My baby sister. She is one year old.",
    "cn": "你家裡誰最年輕？— 我的小妹妹，她一歲。"
  },
  {
    "word": "smart",
    "pos": "adj.",
    "cn_def": "聰明的",
    "en_def": "able to learn and think quickly",
    "sentence": "Q: Who is the {{BLANK}} student in your class? — A: Amy. She gets 100 on every test.",
    "cn": "你們班上最聰明的學生是誰？— 艾美，她每次考試都考一百分。"
  },
  {
    "word": "fat",
    "pos": "adj.",
    "cn_def": "胖的",
    "en_def": "having a big and heavy body",
    "sentence": "Q: Which cat is the {{BLANK}} of all? — A: Kitty. She eats a lot.",
    "cn": "哪一隻貓是全部裡面最胖的？— 凱蒂，她吃很多。"
  },
  {
    "word": "beautiful",
    "pos": "adj.",
    "cn_def": "美麗的",
    "en_def": "very nice to look at",
    "sentence": "Q: Which flower is the {{BLANK}} in the garden? — A: The rose. Everyone loves to look at it.",
    "cn": "花園裡哪一種花最美？— 玫瑰，大家都喜歡看它。",
    "nblanks": 2
  }
];

const MCQS = [
  {
    "q": "Amy got a new bike for her birthday, and she is very ______. She is smiling and singing all the way to school.",
    "options": [
      "sad",
      "angry",
      "happy",
      "lonely"
    ],
    "answer": 2,
    "cn": "你今天好嗎？ — 我很快樂，我考試考了一百分。",
    "vocabIndex": 0
  },
  {
    "q": "Tom looks ______ today. He lost his favorite toy on the bus, and he doesn't want to talk or play with anyone.",
    "options": [
      "proud",
      "brave",
      "polite",
      "unhappy"
    ],
    "answer": 3,
    "cn": "班還好嗎？ — 他不開心，他弄丟了新腳踏車。",
    "vocabIndex": 1
  },
  {
    "q": "The little girl is ______ because her cat died last night. She is crying in her room, and she doesn't want to eat.",
    "options": [
      "sad",
      "lazy",
      "proud",
      "funny"
    ],
    "answer": 0,
    "cn": "湯姆還好嗎？ — 他很難過，他的狗生病了。",
    "vocabIndex": 2
  },
  {
    "q": "Grandma lives by herself in the country, and she often feels ______. Let's visit her this weekend and stay with her for two days.",
    "options": [
      "handsome",
      "lonely",
      "polite",
      "successful"
    ],
    "answer": 1,
    "cn": "你奶奶還好嗎？ — 她很寂寞，她一個人住。",
    "vocabIndex": 3
  },
  {
    "q": "Mom was ______ because I broke her favorite cup. She didn't smile, and she told me to clean the floor right away.",
    "options": [
      "angry",
      "slim",
      "shy",
      "brave"
    ],
    "answer": 0,
    "cn": "你爸爸今天還好嗎？ — 他很生氣，我打破了他的杯子。",
    "vocabIndex": 4
  },
  {
    "q": "Dad gets ______ when we play ball in the living room. Last time we broke a window, and he shouted at us.",
    "options": [
      "proud",
      "mad",
      "cute",
      "blind"
    ],
    "answer": 1,
    "cn": "媽媽還好嗎？ — 她在生我的氣，我的房間很髒。",
    "vocabIndex": 5
  },
  {
    "q": "My little brother is ______ of the dark. He always sleeps with a small light on, and he never goes out at night.",
    "options": [
      "proud",
      "careful",
      "honest",
      "scared"
    ],
    "answer": 3,
    "cn": "孩子們還好嗎？ — 他們很害怕，有一條大蛇！",
    "vocabIndex": 6
  },
  {
    "q": "There was nothing to do at home all day, so Ben felt ______. He walked around the house and looked at the clock again and again.",
    "options": [
      "excited",
      "proud",
      "bored",
      "successful"
    ],
    "answer": 2,
    "cn": "學生們還好嗎？ — 他們覺得很無聊，電影太長了。",
    "vocabIndex": 7
  },
  {
    "q": "We are going to the zoo tomorrow, and the kids are very ______. They can't sleep, and they keep talking about the animals.",
    "options": [
      "excited",
      "bored",
      "lonely",
      "blind"
    ],
    "answer": 0,
    "cn": "艾美還好嗎？ — 她很興奮，明天是她的生日。",
    "vocabIndex": 8
  },
  {
    "q": "Lisa won first prize in the English contest. Her parents are very ______ of her, and they told all their friends about it.",
    "options": [
      "scared",
      "bored",
      "proud",
      "lazy"
    ],
    "answer": 2,
    "cn": "你爸媽還好嗎？ — 他們以我為榮，我贏了賽跑。",
    "vocabIndex": 9
  },
  {
    "q": "Dad is very ______ this week. He works from morning to night, and he doesn't have time to eat dinner with us.",
    "options": [
      "lazy",
      "cute",
      "young",
      "busy"
    ],
    "answer": 3,
    "cn": "你媽媽還好嗎？ — 她很忙，她有很多工作。",
    "vocabIndex": 10
  },
  {
    "q": "Look at that baby panda! It is so small and ______ that every visitor at the zoo wants to take a picture of it.",
    "options": [
      "ugly",
      "cute",
      "wise",
      "honest"
    ],
    "answer": 1,
    "cn": "你的小妹妹長什麼樣子？ — 她小小的很可愛，她有大眼睛。",
    "vocabIndex": 11
  },
  {
    "q": "What a ______ day! The sun is shining, the sky is blue, and it is not too hot. Let's have a picnic.",
    "options": [
      "blind",
      "lazy",
      "shy",
      "lovely"
    ],
    "answer": 3,
    "cn": "那對雙胞胎長什麼樣子？ — 他們很可愛，總是笑咪咪的。",
    "vocabIndex": 12
  },
  {
    "q": "Your new dress is very ______. I love the color and the little flowers on it. Where did you buy it?",
    "options": [
      "honest",
      "brave",
      "pretty",
      "hard-working"
    ],
    "answer": 2,
    "cn": "艾美長什麼樣子？ — 她很漂亮，她有一頭長髮。",
    "vocabIndex": 13
  },
  {
    "q": "The actor is tall and ______, so many girls love him. His pictures are on the walls of their bedrooms.",
    "options": [
      "handsome",
      "ugly",
      "blind",
      "stupid"
    ],
    "answer": 0,
    "cn": "你哥哥長什麼樣子？ — 他又高又帥。",
    "vocabIndex": 14
  },
  {
    "q": "The model eats a lot of vegetables and runs every morning, so she is healthy and ______. All the dresses look good on her.",
    "options": [
      "fat",
      "slim",
      "heavy",
      "lazy"
    ],
    "answer": 1,
    "cn": "那位模特兒長什麼樣子？ — 她又高又苗條。",
    "vocabIndex": 15
  },
  {
    "q": "Nobody wanted to buy the ______ doll. Its face was strange and its hair was dirty, so it stayed in the store for years.",
    "options": [
      "ugly",
      "pretty",
      "cute",
      "lovely"
    ],
    "answer": 0,
    "cn": "故事裡的怪物長什麼樣子？ — 牠又大又醜。",
    "vocabIndex": 16
  },
  {
    "q": "The old woman is very ______ to animals. She gives food and water to the street dogs and cats every morning.",
    "options": [
      "lazy",
      "scared",
      "blind",
      "kind"
    ],
    "answer": 3,
    "cn": "你覺得你奶奶怎麼樣？ — 她很親切，因為她常常送食物給窮人。",
    "vocabIndex": 17
  },
  {
    "q": "It was ______ of you to help me carry these heavy books. Thank you so much. I couldn't do it by myself.",
    "options": [
      "stupid",
      "lazy",
      "nice",
      "shy"
    ],
    "answer": 2,
    "cn": "你覺得你的老師怎麼樣？ — 她人很好，因為她常常幫我們做功課。",
    "vocabIndex": 18
  },
  {
    "q": "Our new neighbors are very ______. They always say hello with a big smile, and they invited us to dinner last week.",
    "options": [
      "lonely",
      "friendly",
      "shy",
      "lazy"
    ],
    "answer": 1,
    "cn": "你覺得你的新鄰居怎麼樣？ — 她很友善，因為她常常跟我們打招呼。",
    "vocabIndex": 19
  },
  {
    "q": "Ken is a ______ boy. He always says \"please\" and \"thank you,\" and he never talks when other people are talking.",
    "options": [
      "lazy",
      "crazy",
      "polite",
      "heavy"
    ],
    "answer": 2,
    "cn": "你覺得麗莎怎麼樣？ — 她很有禮貌，因為她常說「請」和「謝謝」。",
    "vocabIndex": 20
  },
  {
    "q": "Ben is an ______ boy. He found a wallet on the street yesterday, and he took it to the police station right away.",
    "options": [
      "ugly",
      "unhappy",
      "angry",
      "honest"
    ],
    "answer": 3,
    "cn": "你覺得湯姆怎麼樣？ — 他很誠實，因為他常常說實話。",
    "vocabIndex": 21
  },
  {
    "q": "The ______ man jumped into the river and saved the little girl. He was not afraid of the cold, fast water.",
    "options": [
      "brave",
      "lazy",
      "shy",
      "scared"
    ],
    "answer": 0,
    "cn": "你覺得班怎麼樣？ — 他很勇敢，因為他常常幫助有麻煩的人。",
    "vocabIndex": 22
  },
  {
    "q": "Please be ______ when you cross the street. Look left and right first, because the cars here go very fast.",
    "options": [
      "lazy",
      "careful",
      "crazy",
      "proud"
    ],
    "answer": 1,
    "cn": "你覺得你媽媽怎麼樣？ — 她很仔細，因為她睡前常常檢查門。",
    "vocabIndex": 23
  },
  {
    "q": "Lisa is a ______ student. She studies for three hours every night, and she always finishes her homework before dinner.",
    "options": [
      "lazy",
      "stupid",
      "hard-working",
      "blind"
    ],
    "answer": 2,
    "cn": "你覺得艾美怎麼樣？ — 她很努力，因為她常常讀書到晚上十點。",
    "vocabIndex": 24
  },
  {
    "q": "My brother is so ______. He gets up at noon on weekends, and he never cleans his room or helps Mom.",
    "options": [
      "hard-working",
      "lazy",
      "busy",
      "careful"
    ],
    "answer": 1,
    "cn": "你覺得肯怎麼樣？ — 他很懶惰，因為他常常在課堂上睡覺。",
    "vocabIndex": 25
  },
  {
    "q": "Uncle Jack is a ______ man. He tells jokes at dinner, and everyone at the table laughs until they cry.",
    "options": [
      "funny",
      "boring",
      "shy",
      "sad"
    ],
    "answer": 0,
    "cn": "你覺得李老師怎麼樣？ — 他很好笑，因為他常常講笑話。",
    "vocabIndex": 26
  },
  {
    "q": "The new girl is very ______. She doesn't talk much in class, and her face turns red when the teacher asks her a question.",
    "options": [
      "brave",
      "funny",
      "proud",
      "shy"
    ],
    "answer": 3,
    "cn": "你覺得那位新同學怎麼樣？ — 他很害羞，因為他上課常常很安靜。",
    "vocabIndex": 27
  },
  {
    "q": "Grandpa is old and ______. When we have a problem, we always ask him, and he tells us the best thing to do.",
    "options": [
      "stupid",
      "wise",
      "lazy",
      "crazy"
    ],
    "answer": 1,
    "cn": "你覺得你爺爺怎麼樣？ — 他很有智慧，因為他常常給我好主意。",
    "vocabIndex": 28
  },
  {
    "q": "It was ______ of me to leave my umbrella at home. The sky was dark this morning, and now I am all wet.",
    "options": [
      "wise",
      "brave",
      "stupid",
      "polite"
    ],
    "answer": 2,
    "cn": "你覺得故事裡的狐狸怎麼樣？ — 牠很笨，因為牠常常犯同樣的錯。",
    "vocabIndex": 29
  },
  {
    "q": "Mr. Wang is a ______ businessman. He started with one small shop, and now he has fifty stores in Taiwan.",
    "options": [
      "successful",
      "lazy",
      "poor",
      "shy"
    ],
    "answer": 0,
    "cn": "你覺得你叔叔怎麼樣？ — 他很成功，因為他常常賣出很多車。",
    "vocabIndex": 30
  },
  {
    "q": "Amy is ______ at math. She always gets 100 on her tests, and she often helps her classmates with their homework.",
    "options": [
      "bad",
      "lazy",
      "scared",
      "good"
    ],
    "answer": 3,
    "cn": "艾美的英文很好嗎？ — 是的，她是。她英文說得很好。",
    "vocabIndex": 31
  },
  {
    "q": "Smoking is ______ for your health. It hurts your body, so the doctor tells my grandpa to stop right now.",
    "options": [
      "bad",
      "good",
      "kind",
      "proud"
    ],
    "answer": 0,
    "cn": "今天天氣很糟嗎？ — 是的，很糟。有颱風。",
    "vocabIndex": 32
  },
  {
    "q": "It is hot in the afternoon, but it gets ______ at night. You may need a light jacket when you go out.",
    "options": [
      "boring",
      "heavy",
      "fat",
      "cool"
    ],
    "answer": 3,
    "cn": "今天很涼嗎？ — 是的，很涼。穿件夾克吧。",
    "vocabIndex": 33
  },
  {
    "q": "The movie was so ______ that half of the people in the theater fell asleep. I looked at my watch many times.",
    "options": [
      "exciting",
      "funny",
      "boring",
      "famous"
    ],
    "answer": 2,
    "cn": "這部電影很無聊嗎？ — 是的，很無聊。我想睡覺。",
    "vocabIndex": 34
  },
  {
    "q": "The baseball game was really ______. The two teams had the same score until the last minute, and everyone was shouting.",
    "options": [
      "boring",
      "exciting",
      "lazy",
      "blind"
    ],
    "answer": 1,
    "cn": "這場棒球賽很刺激嗎？ — 是的，很刺激。每個人都在大叫。",
    "vocabIndex": 35
  },
  {
    "q": "Tom is very ______ in animals. He reads many books about them, and he wants to work at a zoo one day.",
    "options": [
      "interested",
      "proud",
      "busy",
      "careful"
    ],
    "answer": 0,
    "cn": "你對音樂有興趣嗎？ — 是的，我有。我每天彈鋼琴。",
    "vocabIndex": 36
  },
  {
    "q": "You want to swim in the sea in this cold weather? Are you ______? The water is like ice, and you will get sick!",
    "options": [
      "polite",
      "honest",
      "crazy",
      "shy"
    ],
    "answer": 2,
    "cn": "湯姆很迷籃球嗎？ — 是的，他是。他每天都打籃球。",
    "vocabIndex": 37
  },
  {
    "q": "The family is very ______. They don't have money for new clothes, and the children can't go to school.",
    "options": [
      "rich",
      "poor",
      "famous",
      "successful"
    ],
    "answer": 1,
    "cn": "那一家人很窮嗎？ — 是的，他們很窮。他們沒有錢買食物。",
    "vocabIndex": 38
  },
  {
    "q": "The old man is ______, so he can't see anything. His dog helps him cross the street and find his way home.",
    "options": [
      "lazy",
      "fat",
      "famous",
      "blind"
    ],
    "answer": 3,
    "cn": "那位老先生眼睛看不見嗎？ — 是的，他是。他看不見。",
    "vocabIndex": 39
  },
  {
    "q": "My brother is 185 cm, so he is very ______. He has to lower his head when he walks through the door.",
    "options": [
      "tall",
      "short",
      "fat",
      "thin"
    ],
    "answer": 0,
    "cn": "湯姆 160 公分，班 150 公分。— 湯姆比班高。",
    "vocabIndex": 40
  },
  {
    "q": "I am too ______ to get the book from the top of the bookcase. Can you get it for me, please? You are taller.",
    "options": [
      "tall",
      "short",
      "old",
      "heavy"
    ],
    "answer": 1,
    "cn": "艾美 145 公分，麗莎 140 公分。— 麗莎比艾美矮。",
    "vocabIndex": 41
  },
  {
    "q": "This box is too ______ for me. It is full of books, and I can't carry it up the stairs by myself.",
    "options": [
      "thin",
      "short",
      "young",
      "heavy"
    ],
    "answer": 3,
    "cn": "箱子 10 公斤，袋子 2 公斤。— 箱子比袋子重。",
    "vocabIndex": 42
  },
  {
    "q": "You are too ______. You only weigh forty kilograms, so you should eat more meat and rice.",
    "options": [
      "fat",
      "heavy",
      "thin",
      "tall"
    ],
    "answer": 2,
    "cn": "爸爸 80 公斤，山姆叔叔 60 公斤。— 山姆叔叔比爸爸瘦。",
    "vocabIndex": 43
  },
  {
    "q": "Mr. Lin is very ______. He has three big houses, five cars, and a lot of money in the bank.",
    "options": [
      "poor",
      "blind",
      "shy",
      "rich"
    ],
    "answer": 3,
    "cn": "誰的錢比較多，國王還是農夫？— 國王，他比農夫有錢。",
    "vocabIndex": 44
  },
  {
    "q": "The singer is ______ all over the world. People in many countries know her name and love her songs.",
    "options": [
      "famous",
      "lonely",
      "blind",
      "lazy"
    ],
    "answer": 0,
    "cn": "比較多人認識誰，電影明星還是你的鄰居？— 電影明星，她比我的鄰居有名。",
    "vocabIndex": 45
  },
  {
    "q": "My grandfather is very ______. He is ninety-five years old, and he walks slowly with a stick.",
    "options": [
      "young",
      "old",
      "tall",
      "brave"
    ],
    "answer": 1,
    "cn": "你家裡誰年紀最大？— 我爺爺，他九十歲。",
    "vocabIndex": 46
  },
  {
    "q": "My sister is too ______ to go to school. She is only three years old, so she stays home with Grandma.",
    "options": [
      "old",
      "tall",
      "young",
      "wise"
    ],
    "answer": 2,
    "cn": "你家裡誰最年輕？— 我的小妹妹，她一歲。",
    "vocabIndex": 47
  },
  {
    "q": "The dog is very ______. It can open the door, bring the newspaper, and understand more than fifty words.",
    "options": [
      "stupid",
      "lazy",
      "blind",
      "smart"
    ],
    "answer": 3,
    "cn": "你們班上最聰明的學生是誰？— 艾美，她每次考試都考一百分。",
    "vocabIndex": 48
  },
  {
    "q": "My cat eats too much and sleeps all day, so it is getting ______. The doctor says it needs to lose two kilograms.",
    "options": [
      "fat",
      "thin",
      "slim",
      "young"
    ],
    "answer": 0,
    "cn": "哪一隻貓是全部裡面最胖的？— 凱蒂，她吃很多。",
    "vocabIndex": 49
  },
  {
    "q": "The flowers in the garden are so ______. They are red, pink, and yellow, and many people come to take pictures of them.",
    "options": [
      "ugly",
      "beautiful",
      "lazy",
      "honest"
    ],
    "answer": 1,
    "cn": "花園裡哪一種花最美？— 玫瑰，大家都喜歡看它。",
    "vocabIndex": 50
  }
];

const LOOKUP = {
  "sad": {
    "pos": "adj.",
    "en_def": "not happy; wanting to cry",
    "cn_def": "悲傷的"
  },
  "angry": {
    "pos": "adj.",
    "en_def": "feeling mad at someone or something",
    "cn_def": "生氣的"
  },
  "happy": {
    "pos": "adj.",
    "en_def": "feeling good and glad",
    "cn_def": "快樂的"
  },
  "lonely": {
    "pos": "adj.",
    "en_def": "sad because you are alone",
    "cn_def": "寂寞的"
  },
  "proud": {
    "pos": "adj.",
    "en_def": "feeling good about what you or others did",
    "cn_def": "驕傲的"
  },
  "brave": {
    "pos": "adj.",
    "en_def": "not afraid to do hard or dangerous things",
    "cn_def": "勇敢的"
  },
  "polite": {
    "pos": "adj.",
    "en_def": "saying \"please\" and \"thank you\"; having good manners",
    "cn_def": "有禮貌的"
  },
  "unhappy": {
    "pos": "adj.",
    "en_def": "not happy",
    "cn_def": "不快樂的"
  },
  "lazy": {
    "pos": "adj.",
    "en_def": "not wanting to work or do anything",
    "cn_def": "懶惰的"
  },
  "funny": {
    "pos": "adj.",
    "en_def": "making you laugh",
    "cn_def": "好笑的"
  },
  "handsome": {
    "pos": "adj.",
    "en_def": "good-looking (for a man or boy)",
    "cn_def": "英俊的"
  },
  "successful": {
    "pos": "adj.",
    "en_def": "doing well and getting what you want",
    "cn_def": "成功的"
  },
  "slim": {
    "pos": "adj.",
    "en_def": "thin in a nice way",
    "cn_def": "苗條的"
  },
  "shy": {
    "pos": "adj.",
    "en_def": "afraid to talk to people you do not know",
    "cn_def": "害羞的"
  },
  "mad": {
    "pos": "adj.",
    "en_def": "very angry, or crazy",
    "cn_def": "生氣的；瘋狂的"
  },
  "cute": {
    "pos": "adj.",
    "en_def": "small and nice to look at",
    "cn_def": "可愛的"
  },
  "blind": {
    "pos": "adj.",
    "en_def": "not able to see",
    "cn_def": "瞎的"
  },
  "careful": {
    "pos": "adj.",
    "en_def": "thinking about what you do so you do not make mistakes",
    "cn_def": "仔細的"
  },
  "honest": {
    "pos": "adj.",
    "en_def": "always telling the truth",
    "cn_def": "誠實的"
  },
  "scared": {
    "pos": "adj.",
    "en_def": "afraid of something",
    "cn_def": "害怕的"
  },
  "excited": {
    "pos": "adj.",
    "en_def": "very happy about something that is going to happen",
    "cn_def": "感到興奮的"
  },
  "bored": {
    "pos": "adj.",
    "en_def": "not interested because nothing is fun",
    "cn_def": "感到厭煩的"
  },
  "young": {
    "pos": "adj.",
    "en_def": "having lived for only a few years; not old",
    "cn_def": "年輕的"
  },
  "busy": {
    "pos": "adj.",
    "en_def": "having a lot of things to do",
    "cn_def": "忙碌的"
  },
  "ugly": {
    "pos": "adj.",
    "en_def": "not nice to look at",
    "cn_def": "醜的"
  },
  "wise": {
    "pos": "adj.",
    "en_def": "knowing a lot and making good choices",
    "cn_def": "明智的"
  },
  "lovely": {
    "pos": "adj.",
    "en_def": "beautiful or very nice",
    "cn_def": "可愛的"
  },
  "pretty": {
    "pos": "adj.",
    "en_def": "nice to look at",
    "cn_def": "漂亮的"
  },
  "hard-working": {
    "pos": "adj.",
    "en_def": "always working a lot",
    "cn_def": "努力工作的"
  },
  "stupid": {
    "pos": "adj.",
    "en_def": "not smart",
    "cn_def": "笨的"
  },
  "fat": {
    "pos": "adj.",
    "en_def": "having a big and heavy body",
    "cn_def": "胖的"
  },
  "heavy": {
    "pos": "adj.",
    "en_def": "weighing a lot",
    "cn_def": "重的"
  },
  "kind": {
    "pos": "adj.",
    "en_def": "nice and helpful to other people",
    "cn_def": "親切的"
  },
  "nice": {
    "pos": "adj.",
    "en_def": "good, kind, or pleasant",
    "cn_def": "好的"
  },
  "friendly": {
    "pos": "adj.",
    "en_def": "kind and easy to talk to",
    "cn_def": "友善的"
  },
  "crazy": {
    "pos": "adj.",
    "en_def": "not thinking clearly; very strange",
    "cn_def": "瘋狂的"
  },
  "boring": {
    "pos": "adj.",
    "en_def": "not interesting or fun",
    "cn_def": "無聊的"
  },
  "poor": {
    "pos": "adj.",
    "en_def": "having very little money; also said when you feel sorry for someone",
    "cn_def": "貧困的；可憐的"
  },
  "bad": {
    "pos": "adj.",
    "en_def": "not good",
    "cn_def": "壞的"
  },
  "good": {
    "pos": "adj.",
    "en_def": "nice; of high quality; not bad",
    "cn_def": "好的"
  },
  "cool": {
    "pos": "adj.",
    "en_def": "a little cold; also very good and fun",
    "cn_def": "涼爽的"
  },
  "exciting": {
    "pos": "adj.",
    "en_def": "making you feel very happy and interested",
    "cn_def": "令人興奮的"
  },
  "famous": {
    "pos": "adj.",
    "en_def": "known by many people",
    "cn_def": "有名的"
  },
  "interested": {
    "pos": "adj.",
    "en_def": "wanting to know more about something",
    "cn_def": "感興趣的"
  },
  "rich": {
    "pos": "adj.",
    "en_def": "having a lot of money",
    "cn_def": "有錢的"
  },
  "tall": {
    "pos": "adj.",
    "en_def": "high from head to foot",
    "cn_def": "高的"
  },
  "short": {
    "pos": "adj.",
    "en_def": "not tall; not long",
    "cn_def": "矮的；短的"
  },
  "thin": {
    "pos": "adj.",
    "en_def": "not fat",
    "cn_def": "瘦的"
  },
  "old": {
    "pos": "adj.",
    "en_def": "having lived for many years; not young",
    "cn_def": "老的"
  },
  "smart": {
    "pos": "adj.",
    "en_def": "able to learn and think quickly",
    "cn_def": "聰明的"
  },
  "beautiful": {
    "pos": "adj.",
    "en_def": "very nice to look at",
    "cn_def": "美麗的"
  }
};

const EXTRA_GLOSSES = {};
