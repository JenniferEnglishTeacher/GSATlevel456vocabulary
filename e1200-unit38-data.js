// Unit 38 Quiz Data: Other Adjectives 其他形容詞（第36區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U38 - Other Adjectives",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "bright",
    "pos": "adj.",
    "cn_def": "明亮的",
    "en_def": "",
    "sentence": "Q: How do the new classrooms look? — A: They look {{BLANK}}. They have big windows.",
    "cn": "新教室看起來怎麼樣？ — 看起來很明亮，它們有大窗戶。"
  },
  {
    "word": "dark",
    "pos": "adj.",
    "cn_def": "黑暗的",
    "en_def": "",
    "sentence": "Q: How do the classrooms look at night? — A: They look {{BLANK}}. All the lights are off.",
    "cn": "教室晚上看起來怎麼樣？ — 看起來很暗，燈都關了。"
  },
  {
    "word": "dirty",
    "pos": "adj.",
    "cn_def": "骯髒的",
    "en_def": "",
    "sentence": "Q: How do your shoes look after the soccer game? — A: They look {{BLANK}}. There is mud on them.",
    "cn": "足球賽後你的鞋子看起來怎樣？ — 看起來很髒，上面有泥巴。"
  },
  {
    "word": "tidy",
    "pos": "adj.",
    "cn_def": "整潔的",
    "en_def": "",
    "sentence": "Q: How does Amy's desk look? — A: It looks {{BLANK}}. Her books are in a row.",
    "cn": "艾美的書桌看起來怎樣？ — 看起來很整齊，她的書排成一排。"
  },
  {
    "word": "dead",
    "pos": "adj.",
    "cn_def": "死的",
    "en_def": "",
    "sentence": "Q: How do the flowers in the vase look? — A: They look {{BLANK}}. Nobody gave them water.",
    "cn": "花瓶裡的花看起來怎樣？ — 看起來枯死了，沒有人給它們澆水。"
  },
  {
    "word": "sharp",
    "pos": "adj.",
    "cn_def": "銳利的",
    "en_def": "",
    "sentence": "Q: How does the new knife look? — A: It looks {{BLANK}}. Be careful!",
    "cn": "這把新刀看起來怎樣？ — 看起來很鋒利，小心！"
  },
  {
    "word": "thick",
    "pos": "adj.",
    "cn_def": "厚的",
    "en_def": "",
    "sentence": "Q: How does the dictionary look? — A: It looks very {{BLANK}}. It has 2,000 pages.",
    "cn": "那本字典看起來怎樣？ — 看起來很厚，它有兩千頁。"
  },
  {
    "word": "fresh",
    "pos": "adj.",
    "cn_def": "新鮮的",
    "en_def": "",
    "sentence": "Q: How do the vegetables at the market look? — A: They look {{BLANK}}. The farmers picked them this morning.",
    "cn": "市場的蔬菜看起來怎樣？ — 看起來很新鮮，農夫今天早上採的。"
  },
  {
    "word": "terrible",
    "pos": "adj.",
    "cn_def": "很糟的",
    "en_def": "",
    "sentence": "Q: How does the old milk smell? — A: It smells {{BLANK}}. Don't drink it!",
    "cn": "那瓶過期的牛奶聞起來怎樣？ — 聞起來很糟，別喝！"
  },
  {
    "word": "great",
    "pos": "adj.",
    "cn_def": "很棒的",
    "en_def": "",
    "sentence": "Q: How do the cookies taste? — A: They taste {{BLANK}}! I want another one.",
    "cn": "這些餅乾吃起來怎樣？ — 很好吃！我還想再吃一塊。"
  },
  {
    "word": "fine",
    "pos": "adj.",
    "cn_def": "很好的",
    "en_def": "",
    "sentence": "Q: How do you feel today? — A: I feel {{BLANK}}, thank you.",
    "cn": "你今天覺得怎樣？ — 我覺得很好，謝謝。"
  },
  {
    "word": "loud",
    "pos": "adj.",
    "cn_def": "大聲的",
    "en_def": "",
    "sentence": "Q: How does the music next door sound? — A: It sounds very {{BLANK}}. I can't sleep.",
    "cn": "隔壁的音樂聽起來怎樣？ — 聽起來很大聲，我睡不著。"
  },
  {
    "word": "noisy",
    "pos": "adj.",
    "cn_def": "吵鬧的",
    "en_def": "",
    "sentence": "Q: How do the kids in the classroom sound? — A: They sound {{BLANK}}. They are talking and laughing.",
    "cn": "教室裡的孩子們聽起來怎樣？ — 聽起來很吵，他們在說笑。"
  },
  {
    "word": "quiet",
    "pos": "adj.",
    "cn_def": "安靜的",
    "en_def": "",
    "sentence": "Q: How does the library sound? — A: It sounds {{BLANK}}. Everyone is reading.",
    "cn": "圖書館聽起來怎樣？ — 聽起來很安靜，大家都在看書。"
  },
  {
    "word": "strange",
    "pos": "adj.",
    "cn_def": "奇怪的",
    "en_def": "",
    "sentence": "Q: How does the car sound today? — A: It sounds {{BLANK}}. Dad should check it.",
    "cn": "車子今天聽起來怎樣？ — 聽起來怪怪的，爸爸應該檢查一下。"
  },
  {
    "word": "wonderful",
    "pos": "adj.",
    "cn_def": "極好的",
    "en_def": "",
    "sentence": "Q: How does Lisa's singing sound? — A: It sounds {{BLANK}}! She sings like a star.",
    "cn": "麗莎的歌聲聽起來怎樣？ — 聽起來好極了！她唱得像明星一樣。"
  },
  {
    "word": "easy",
    "pos": "adj.",
    "cn_def": "容易的",
    "en_def": "",
    "sentence": "Q: Is the English test easy or hard? — A: It's {{BLANK}}. I can answer all the questions.",
    "cn": "英文考試簡單還是難？ — 很簡單，我每一題都會答。"
  },
  {
    "word": "simple",
    "pos": "adj.",
    "cn_def": "簡單的",
    "en_def": "",
    "sentence": "Q: Is the game simple or difficult? — A: It's {{BLANK}}. Even my little brother can play it.",
    "cn": "這個遊戲簡單還是困難？ — 很簡單，連我弟弟都會玩。"
  },
  {
    "word": "hard",
    "pos": "adj.",
    "cn_def": "困難的；硬的",
    "en_def": "",
    "sentence": "Q: Is the bread soft or hard? — A: It's {{BLANK}}. It's three days old.",
    "cn": "這麵包是軟的還是硬的？ — 是硬的，它放三天了。"
  },
  {
    "word": "correct",
    "pos": "adj.",
    "cn_def": "正確的",
    "en_def": "",
    "sentence": "Q: Is my answer correct or wrong? — A: It's {{BLANK}}. Good job!",
    "cn": "我的答案是對的還是錯的？ — 是正確的，做得好！"
  },
  {
    "word": "right",
    "pos": "adj.",
    "cn_def": "對的",
    "en_def": "",
    "sentence": "Q: Is it right or wrong to help old people? — A: It's {{BLANK}}. We should help them.",
    "cn": "幫助老人是對的還是錯的？ — 是對的，我們應該幫助他們。"
  },
  {
    "word": "wrong",
    "pos": "adj.",
    "cn_def": "錯誤的",
    "en_def": "",
    "sentence": "Q: Is \"Tom have a dog\" right or wrong? — A: It's {{BLANK}}. We say \"Tom has a dog.\"",
    "cn": "「Tom have a dog」是對的還是錯的？ — 是錯的，要說「Tom has a dog」。"
  },
  {
    "word": "true",
    "pos": "adj.",
    "cn_def": "真實的",
    "en_def": "",
    "sentence": "Q: Is the story true or not? — A: It's {{BLANK}}. It happened to my grandpa.",
    "cn": "這個故事是真的嗎？ — 是真的，發生在我爺爺身上。"
  },
  {
    "word": "real",
    "pos": "adj.",
    "cn_def": "真正的",
    "en_def": "",
    "sentence": "Q: Is that a real flower or a paper flower? — A: It's a {{BLANK}} flower. It smells sweet.",
    "cn": "那是真花還是紙花？ — 是真花，聞起來很香。"
  },
  {
    "word": "safe",
    "pos": "adj.",
    "cn_def": "安全的",
    "en_def": "",
    "sentence": "Q: Is it safe or dangerous to swim in this river? — A: It's {{BLANK}}. The water isn't deep.",
    "cn": "在這條河游泳安全還是危險？ — 很安全，水不深。"
  },
  {
    "word": "free",
    "pos": "adj.",
    "cn_def": "免費的",
    "en_def": "",
    "sentence": "Q: Is the ticket free or expensive? — A: It's {{BLANK}}. You don't have to pay.",
    "cn": "票是免費的還是很貴？ — 是免費的，你不用付錢。"
  },
  {
    "word": "same",
    "pos": "adj.",
    "cn_def": "相同的",
    "en_def": "",
    "sentence": "Q: Are you and Ben in the same class or different classes? — A: We are in the {{BLANK}} class.",
    "cn": "你和班同班還是不同班？ — 我們同一班。"
  },
  {
    "word": "different",
    "pos": "adj.",
    "cn_def": "不同的",
    "en_def": "",
    "sentence": "Q: Are the two pictures the same or different? — A: They are {{BLANK}}. One cat is black, and the other is white.",
    "cn": "這兩張圖一樣還是不一樣？ — 不一樣，一隻貓是黑的，另一隻是白的。"
  },
  {
    "word": "common",
    "pos": "adj.",
    "cn_def": "常見的",
    "en_def": "",
    "sentence": "Q: Is \"Chen\" a common name or a special name in Taiwan? — A: It's a {{BLANK}} name. Many people have it.",
    "cn": "「陳」在臺灣是常見還是特別的姓？ — 是常見的姓，很多人姓陳。"
  },
  {
    "word": "public",
    "pos": "adj.",
    "cn_def": "公立的",
    "en_def": "",
    "sentence": "Q: Does your sister go to a public school or a private school? — A: She goes to a {{BLANK}} school.",
    "cn": "你妹妹讀公立還是私立學校？ — 她讀公立學校。"
  },
  {
    "word": "foreign",
    "pos": "adj.",
    "cn_def": "外國的",
    "en_def": "",
    "sentence": "Q: Is Mr. Smith a Taiwanese teacher or a foreign teacher? — A: He is a {{BLANK}} teacher. He comes from Canada.",
    "cn": "史密斯先生是臺灣老師還是外國老師？ — 他是外籍老師，他來自加拿大。"
  },
  {
    "word": "lucky",
    "pos": "adj.",
    "cn_def": "幸運的",
    "en_def": "",
    "sentence": "Q: I won the first prize! — A: How {{BLANK}} you are!",
    "cn": "我贏得頭獎了！ — 你真幸運！"
  },
  {
    "word": "helpful",
    "pos": "adj.",
    "cn_def": "有幫助的",
    "en_def": "",
    "sentence": "Q: Tom always helps the old lady carry her bags. — A: How {{BLANK}} he is!",
    "cn": "湯姆總是幫那位老太太提袋子。 — 他真熱心助人！"
  },
  {
    "word": "useful",
    "pos": "adj.",
    "cn_def": "有用的",
    "en_def": "",
    "sentence": "Q: This dictionary has pictures and easy sentences. — A: How {{BLANK}} it is!",
    "cn": "這本字典有圖片和簡單的句子。 — 它真有用！"
  },
  {
    "word": "convenient",
    "pos": "adj.",
    "cn_def": "方便的",
    "en_def": "",
    "sentence": "Q: There is a supermarket next to my home. — A: How {{BLANK}}! You can buy food any time.",
    "cn": "我家隔壁有一家超市。 — 真方便！你隨時都能買食物。"
  },
  {
    "word": "excellent",
    "pos": "adj.",
    "cn_def": "極好的",
    "en_def": "",
    "sentence": "Q: Amy got 100 on the math test. — A: What an {{BLANK}} student she is!",
    "cn": "艾美數學考了一百分。 — 她真是個優秀的學生！"
  },
  {
    "word": "serious",
    "pos": "adj.",
    "cn_def": "嚴重的",
    "en_def": "",
    "sentence": "Q: The typhoon broke many trees and houses. — A: How {{BLANK}} it is!",
    "cn": "颱風弄壞了很多樹和房子。 — 真嚴重！"
  },
  {
    "word": "magic",
    "pos": "adj.",
    "cn_def": "魔術的",
    "en_def": "",
    "sentence": "Q: The man turns a piece of paper into a bird. — A: What a cool {{BLANK}} trick!",
    "cn": "那個人把一張紙變成一隻鳥。 — 好酷的魔術！"
  },
  {
    "word": "pop",
    "pos": "adj.",
    "cn_def": "流行的",
    "en_def": "",
    "sentence": "Q: Listen! Everyone is singing this new song. — A: What a great {{BLANK}} song!",
    "cn": "聽！大家都在唱這首新歌。 — 好棒的流行歌！"
  },
  {
    "word": "modern",
    "pos": "adj.",
    "cn_def": "現代的",
    "en_def": "",
    "sentence": "Q: Look at the new train station. — A: What a {{BLANK}} building!",
    "cn": "看那個新火車站。 — 好現代化的建築！"
  },
  {
    "word": "difficult",
    "pos": "adj.",
    "cn_def": "困難的",
    "en_def": "",
    "sentence": "Q: Which subject do you think is more difficult, math or English? — A: Math is more {{BLANK}} than English for me.",
    "cn": "你覺得數學和英文哪一科比較難？ — 對我來說數學比英文難。"
  },
  {
    "word": "dangerous",
    "pos": "adj.",
    "cn_def": "危險的",
    "en_def": "",
    "sentence": "Q: Which animal does Ben think is more dangerous, a lion or a cat? — A: He thinks a lion is more {{BLANK}} than a cat.",
    "cn": "班覺得獅子和貓哪一個比較危險？ — 他覺得獅子比貓危險。"
  },
  {
    "word": "interesting",
    "pos": "adj.",
    "cn_def": "有趣的",
    "en_def": "",
    "sentence": "Q: Which does Lisa think is more interesting, comic books or movies? — A: She thinks comic books are more {{BLANK}} than movies.",
    "cn": "麗莎覺得漫畫和電影哪個比較有趣？ — 她覺得漫畫比電影有趣。"
  },
  {
    "word": "important",
    "pos": "adj.",
    "cn_def": "重要的",
    "en_def": "",
    "sentence": "Q: What do you think is the most important thing in life? — A: I think health is the most {{BLANK}} thing.",
    "cn": "你覺得人生中最重要的是什麼？ — 我覺得健康是最重要的。"
  },
  {
    "word": "popular",
    "pos": "adj.",
    "cn_def": "受歡迎的",
    "en_def": "",
    "sentence": "Q: Which sport is the most popular in your class? — A: Basketball is the most {{BLANK}} of all.",
    "cn": "你們班最受歡迎的運動是什麼？ — 籃球是所有運動中最受歡迎的。"
  },
  {
    "word": "special",
    "pos": "adj.",
    "cn_def": "特別的",
    "en_def": "",
    "sentence": "Q: Which day is the most special to you? — A: My birthday is the most {{BLANK}} day of the year.",
    "cn": "對你來說哪一天最特別？ — 我的生日是一年中最特別的一天。"
  },
  {
    "word": "new (newer)",
    "pos": "adj.",
    "cn_def": "新的",
    "en_def": "",
    "sentence": "Q: Whose bike is newer, yours or Tom's? — A: Tom's bike is {{BLANK}} than mine.",
    "cn": "誰的腳踏車比較新，你的還是湯姆的？ — 湯姆的腳踏車比我的新。"
  },
  {
    "word": "latest",
    "pos": "adj.",
    "cn_def": "最新的",
    "en_def": "",
    "sentence": "Q: Does your brother have an old cellphone? — A: No, he doesn't. He has the {{BLANK}} one. It came out last week.",
    "cn": "你哥哥的手機是舊的嗎？ — 不是，他有最新的那款，上週才推出。"
  },
  {
    "word": "able",
    "pos": "adj.",
    "cn_def": "能夠…的",
    "en_def": "",
    "sentence": "Q: Is your baby brother able to walk? — A: Yes, he is. He is {{BLANK}} to walk now.",
    "cn": "你的小弟弟會走路了嗎？ — 會，他現在會走路了。"
  },
  {
    "word": "afraid",
    "pos": "adj.",
    "cn_def": "害怕的",
    "en_def": "",
    "sentence": "Q: Does Lisa like snakes? — A: No, she doesn't. She is {{BLANK}} of them.",
    "cn": "麗莎喜歡蛇嗎？ — 不喜歡，她怕蛇。"
  },
  {
    "word": "scared",
    "pos": "adj.",
    "cn_def": "害怕的",
    "en_def": "",
    "sentence": "Q: Do you like the dark? — A: No, I don't. I'm {{BLANK}} of the dark.",
    "cn": "你喜歡黑暗嗎？ — 不喜歡，我怕黑。"
  },
  {
    "word": "glad",
    "pos": "adj.",
    "cn_def": "高興的",
    "en_def": "",
    "sentence": "Q: How do you feel about your new school? — A: I'm {{BLANK}} to be here. Everyone is friendly.",
    "cn": "你覺得新學校怎麼樣？ — 我很高興來這裡，大家都很友善。"
  },
  {
    "word": "sorry",
    "pos": "adj.",
    "cn_def": "抱歉的",
    "en_def": "",
    "sentence": "Q: What does Tom say when he is late? — A: He says, \"I'm {{BLANK}} I'm late.\"",
    "cn": "湯姆遲到時會說什麼？ — 他說：「抱歉我遲到了。」"
  },
  {
    "word": "sure",
    "pos": "adj.",
    "cn_def": "確定的",
    "en_def": "",
    "sentence": "Q: Does Ben know the answer? — A: Yes, he does. He is {{BLANK}} it's \"C.\"",
    "cn": "班知道答案嗎？ — 知道，他確定是 C。"
  },
  {
    "word": "surprised",
    "pos": "adj.",
    "cn_def": "感到驚訝的",
    "en_def": "",
    "sentence": "Q: How do your parents feel about your test? — A: They are {{BLANK}}. It's my first 100!",
    "cn": "你爸媽對你的考試有什麼感覺？ — 他們很驚訝，這是我第一次考一百分！"
  },
  {
    "word": "ready",
    "pos": "adj.",
    "cn_def": "準備好的",
    "en_def": "",
    "sentence": "Q: Do the students have their books and pencils? — A: Yes, they do. They are {{BLANK}} for class.",
    "cn": "學生們都帶書和鉛筆了嗎？ — 有，他們準備好上課了。"
  },
  {
    "word": "OK",
    "pos": "adj.",
    "cn_def": "沒問題的",
    "en_def": "",
    "sentence": "Q: Does your leg still hurt? — A: No, it doesn't. I'm {{BLANK}} now.",
    "cn": "你的腿還痛嗎？ — 不痛了，我現在沒事了。"
  },
  {
    "word": "possible",
    "pos": "adj.",
    "cn_def": "可能的",
    "en_def": "",
    "sentence": "Q: Is it possible to walk to the zoo from here? — A: Yes, it's {{BLANK}}, but it takes an hour.",
    "cn": "從這裡走路到動物園可能嗎？ — 可以，但要走一個小時。"
  },
  {
    "word": "favorite",
    "pos": "adj.",
    "cn_def": "最喜愛的",
    "en_def": "",
    "sentence": "Q: What fruit do you like best? — A: Strawberries. They are my {{BLANK}} fruit.",
    "cn": "你最喜歡什麼水果？ — 草莓，它們是我最愛的水果。"
  },
  {
    "word": "own",
    "pos": "adj.",
    "cn_def": "自己的",
    "en_def": "",
    "sentence": "Q: Do you and your brother share a room? — A: No, we don't. I have my {{BLANK}} room.",
    "cn": "你和你哥哥共用一間房間嗎？ — 沒有，我有自己的房間。"
  },
  {
    "word": "only",
    "pos": "adj.",
    "cn_def": "唯一的",
    "en_def": "",
    "sentence": "Q: Does Amy have any brothers or sisters? — A: No, she doesn't. She is an {{BLANK}} child.",
    "cn": "艾美有兄弟姊妹嗎？ — 沒有，她是獨生女。"
  },
  {
    "word": "other",
    "pos": "adj.",
    "cn_def": "其他的",
    "en_def": "",
    "sentence": "Q: Do all the students go home after school? — A: No, they don't. Some go home, and the {{BLANK}} students stay for clubs.",
    "cn": "所有學生放學都回家嗎？ — 不是，有些回家，其他學生留下來參加社團。"
  },
  {
    "word": "else",
    "pos": "adj.",
    "cn_def": "別的",
    "en_def": "",
    "sentence": "Q: I want a hamburger. Do you want anything {{BLANK}}? — A: Yes. I want some fries, too.",
    "cn": "我要一個漢堡。你還要別的東西嗎？ — 要，我也想要一些薯條。"
  },
  {
    "word": "enough",
    "pos": "adj.",
    "cn_def": "足夠的",
    "en_def": "",
    "sentence": "Q: Does Ben have {{BLANK}} money for the ticket? — A: No, he doesn't. He needs ten more dollars.",
    "cn": "班有足夠的錢買票嗎？ — 沒有，他還需要十元。"
  },
  {
    "word": "main",
    "pos": "adj.",
    "cn_def": "主要的",
    "en_def": "",
    "sentence": "Q: Where do your parents wait for you after school? — A: They wait at the {{BLANK}} gate of the school.",
    "cn": "放學後你爸媽在哪裡等你？ — 他們在學校大門等。"
  },
  {
    "word": "national",
    "pos": "adj.",
    "cn_def": "國家的",
    "en_def": "",
    "sentence": "Q: Why don't we go to school on October 10? — A: Because it's a {{BLANK}} holiday.",
    "cn": "為什麼我們十月十日不用上學？ — 因為那天是國定假日。"
  },
  {
    "word": "American",
    "pos": "adj.",
    "cn_def": "美國的",
    "en_def": "",
    "sentence": "Q: What kind of food does Tom like? — A: He likes {{BLANK}} food, like hamburgers and hot dogs.",
    "cn": "湯姆喜歡哪種食物？ — 他喜歡美國食物，像漢堡和熱狗。"
  },
  {
    "word": "present",
    "pos": "adj.",
    "cn_def": "出席的",
    "en_def": "",
    "sentence": "Q: Does the teacher check who is here every morning? — A: Yes, she does. Today all thirty students are {{BLANK}}.",
    "cn": "老師每天早上都會點名嗎？ — 會，今天三十個學生全部出席。"
  },
  {
    "word": "dear",
    "pos": "adj.",
    "cn_def": "親愛的",
    "en_def": "",
    "sentence": "Q: How does Lisa start her letter to her grandma? — A: She writes, \"{{BLANK}} Grandma, …\"",
    "cn": "麗莎寫信給奶奶時怎麼開頭？ — 她寫：「親愛的奶奶，……」"
  }
];

const MCQS = [
  {
    "q": "Q: How do the new classrooms look? — A: They look ______. They have big windows.【明亮的】",
    "options": [
      "dead",
      "lucky",
      "bright",
      "glad"
    ],
    "answer": 2,
    "cn": "新教室看起來怎麼樣？ — 看起來很明亮，它們有大窗戶。",
    "vocabIndex": 0
  },
  {
    "q": "Q: How do the classrooms look at night? — A: They look ______. All the lights are off.【黑暗的】",
    "options": [
      "important",
      "special",
      "favorite",
      "dark"
    ],
    "answer": 3,
    "cn": "教室晚上看起來怎麼樣？ — 看起來很暗，燈都關了。",
    "vocabIndex": 1
  },
  {
    "q": "Q: How do your shoes look after the soccer game? — A: They look ______. There is mud on them.【骯髒的】",
    "options": [
      "tidy",
      "dirty",
      "dear",
      "only"
    ],
    "answer": 1,
    "cn": "足球賽後你的鞋子看起來怎樣？ — 看起來很髒，上面有泥巴。",
    "vocabIndex": 2
  },
  {
    "q": "Q: How does Amy's desk look? — A: It looks ______. Her books are in a row.【整潔的】",
    "options": [
      "tidy",
      "sorry",
      "favorite",
      "correct"
    ],
    "answer": 0,
    "cn": "艾美的書桌看起來怎樣？ — 看起來很整齊，她的書排成一排。",
    "vocabIndex": 3
  },
  {
    "q": "Q: How do the flowers in the vase look? — A: They look ______. Nobody gave them water.【死的】",
    "options": [
      "helpful",
      "dead",
      "present",
      "great"
    ],
    "answer": 1,
    "cn": "花瓶裡的花看起來怎樣？ — 看起來枯死了，沒有人給它們澆水。",
    "vocabIndex": 4
  },
  {
    "q": "Q: How does the new knife look? — A: It looks ______. Be careful!【銳利的】",
    "options": [
      "national",
      "other",
      "fine",
      "sharp"
    ],
    "answer": 3,
    "cn": "這把新刀看起來怎樣？ — 看起來很鋒利，小心！",
    "vocabIndex": 5
  },
  {
    "q": "Q: How does the dictionary look? — A: It looks very ______. It has 2,000 pages.【厚的】",
    "options": [
      "sorry",
      "quiet",
      "thick",
      "fresh"
    ],
    "answer": 2,
    "cn": "那本字典看起來怎樣？ — 看起來很厚，它有兩千頁。",
    "vocabIndex": 6
  },
  {
    "q": "Q: How do the vegetables at the market look? — A: They look ______. The farmers picked them this morning.【新鮮的】",
    "options": [
      "fresh",
      "sorry",
      "national",
      "true"
    ],
    "answer": 0,
    "cn": "市場的蔬菜看起來怎樣？ — 看起來很新鮮，農夫今天早上採的。",
    "vocabIndex": 7
  },
  {
    "q": "Q: How does the old milk smell? — A: It smells ______. Don't drink it!【很糟的】",
    "options": [
      "glad",
      "wonderful",
      "same",
      "terrible"
    ],
    "answer": 3,
    "cn": "那瓶過期的牛奶聞起來怎樣？ — 聞起來很糟，別喝！",
    "vocabIndex": 8
  },
  {
    "q": "Q: How do the cookies taste? — A: They taste ______! I want another one.【很棒的】",
    "options": [
      "else",
      "great",
      "other",
      "national"
    ],
    "answer": 1,
    "cn": "這些餅乾吃起來怎樣？ — 很好吃！我還想再吃一塊。",
    "vocabIndex": 9
  },
  {
    "q": "Q: How do you feel today? — A: I feel ______, thank you.【很好的】",
    "options": [
      "lucky",
      "strange",
      "fine",
      "easy"
    ],
    "answer": 2,
    "cn": "你今天覺得怎樣？ — 我覺得很好，謝謝。",
    "vocabIndex": 10
  },
  {
    "q": "Q: How does the music next door sound? — A: It sounds very ______. I can't sleep.【大聲的】",
    "options": [
      "loud",
      "dead",
      "tidy",
      "true"
    ],
    "answer": 0,
    "cn": "隔壁的音樂聽起來怎樣？ — 聽起來很大聲，我睡不著。",
    "vocabIndex": 11
  },
  {
    "q": "Q: How do the kids in the classroom sound? — A: They sound ______. They are talking and laughing.【吵鬧的】",
    "options": [
      "wonderful",
      "noisy",
      "free",
      "dark"
    ],
    "answer": 1,
    "cn": "教室裡的孩子們聽起來怎樣？ — 聽起來很吵，他們在說笑。",
    "vocabIndex": 12
  },
  {
    "q": "Q: How does the library sound? — A: It sounds ______. Everyone is reading.【安靜的】",
    "options": [
      "sure",
      "public",
      "sorry",
      "quiet"
    ],
    "answer": 3,
    "cn": "圖書館聽起來怎樣？ — 聽起來很安靜，大家都在看書。",
    "vocabIndex": 13
  },
  {
    "q": "Q: How does the car sound today? — A: It sounds ______. Dad should check it.【奇怪的】",
    "options": [
      "popular",
      "American",
      "strange",
      "else"
    ],
    "answer": 2,
    "cn": "車子今天聽起來怎樣？ — 聽起來怪怪的，爸爸應該檢查一下。",
    "vocabIndex": 14
  },
  {
    "q": "Q: How does Lisa's singing sound? — A: It sounds ______! She sings like a star.【極好的】",
    "options": [
      "wonderful",
      "newer",
      "magic",
      "convenient"
    ],
    "answer": 0,
    "cn": "麗莎的歌聲聽起來怎樣？ — 聽起來好極了！她唱得像明星一樣。",
    "vocabIndex": 15
  },
  {
    "q": "Q: Is the English test easy or hard? — A: It's ______. I can answer all the questions.【容易的】",
    "options": [
      "enough",
      "modern",
      "easy",
      "simple"
    ],
    "answer": 2,
    "cn": "英文考試簡單還是難？ — 很簡單，我每一題都會答。",
    "vocabIndex": 16
  },
  {
    "q": "Q: Is the game simple or difficult? — A: It's ______. Even my little brother can play it.【簡單的】",
    "options": [
      "simple",
      "true",
      "sharp",
      "newer"
    ],
    "answer": 0,
    "cn": "這個遊戲簡單還是困難？ — 很簡單，連我弟弟都會玩。",
    "vocabIndex": 17
  },
  {
    "q": "Q: Is the bread soft or hard? — A: It's ______. It's three days old.【困難的；硬的】",
    "options": [
      "dead",
      "same",
      "else",
      "hard"
    ],
    "answer": 3,
    "cn": "這麵包是軟的還是硬的？ — 是硬的，它放三天了。",
    "vocabIndex": 18
  },
  {
    "q": "Q: Is my answer correct or wrong? — A: It's ______. Good job!【正確的】",
    "options": [
      "different",
      "correct",
      "foreign",
      "present"
    ],
    "answer": 1,
    "cn": "我的答案是對的還是錯的？ — 是正確的，做得好！",
    "vocabIndex": 19
  },
  {
    "q": "Q: Is it right or wrong to help old people? — A: It's ______. We should help them.【對的】",
    "options": [
      "important",
      "thick",
      "same",
      "right"
    ],
    "answer": 3,
    "cn": "幫助老人是對的還是錯的？ — 是對的，我們應該幫助他們。",
    "vocabIndex": 20
  },
  {
    "q": "Q: Is \"Tom have a dog\" right or wrong? — A: It's ______. We say \"Tom has a dog.\"【錯誤的】",
    "options": [
      "wrong",
      "lucky",
      "fresh",
      "noisy"
    ],
    "answer": 0,
    "cn": "「Tom have a dog」是對的還是錯的？ — 是錯的，要說「Tom has a dog」。",
    "vocabIndex": 21
  },
  {
    "q": "Q: Is the story true or not? — A: It's ______. It happened to my grandpa.【真實的】",
    "options": [
      "dear",
      "loud",
      "true",
      "wrong"
    ],
    "answer": 2,
    "cn": "這個故事是真的嗎？ — 是真的，發生在我爺爺身上。",
    "vocabIndex": 22
  },
  {
    "q": "Q: Is that a real flower or a paper flower? — A: It's a ______ flower. It smells sweet.【真正的】",
    "options": [
      "pop",
      "real",
      "tidy",
      "wrong"
    ],
    "answer": 1,
    "cn": "那是真花還是紙花？ — 是真花，聞起來很香。",
    "vocabIndex": 23
  },
  {
    "q": "Q: Is it safe or dangerous to swim in this river? — A: It's ______. The water isn't deep.【安全的】",
    "options": [
      "wonderful",
      "wrong",
      "able",
      "safe"
    ],
    "answer": 3,
    "cn": "在這條河游泳安全還是危險？ — 很安全，水不深。",
    "vocabIndex": 24
  },
  {
    "q": "Q: Is the ticket free or expensive? — A: It's ______. You don't have to pay.【免費的】",
    "options": [
      "national",
      "right",
      "free",
      "simple"
    ],
    "answer": 2,
    "cn": "票是免費的還是很貴？ — 是免費的，你不用付錢。",
    "vocabIndex": 25
  },
  {
    "q": "Q: Are you and Ben in the same class or different classes? — A: We are in the ______ class.【相同的】",
    "options": [
      "terrible",
      "same",
      "sure",
      "sharp"
    ],
    "answer": 1,
    "cn": "你和班同班還是不同班？ — 我們同一班。",
    "vocabIndex": 26
  },
  {
    "q": "Q: Are the two pictures the same or different? — A: They are ______. One cat is black, and the other is white.【不同的】",
    "options": [
      "different",
      "correct",
      "useful",
      "wonderful"
    ],
    "answer": 0,
    "cn": "這兩張圖一樣還是不一樣？ — 不一樣，一隻貓是黑的，另一隻是白的。",
    "vocabIndex": 27
  },
  {
    "q": "Q: Is \"Chen\" a common name or a special name in Taiwan? — A: It's a ______ name. Many people have it.【常見的】",
    "options": [
      "right",
      "common",
      "magic",
      "thick"
    ],
    "answer": 1,
    "cn": "「陳」在臺灣是常見還是特別的姓？ — 是常見的姓，很多人姓陳。",
    "vocabIndex": 28
  },
  {
    "q": "Q: Does your sister go to a public school or a private school? — A: She goes to a ______ school.【公立的】",
    "options": [
      "glad",
      "modern",
      "public",
      "national"
    ],
    "answer": 2,
    "cn": "你妹妹讀公立還是私立學校？ — 她讀公立學校。",
    "vocabIndex": 29
  },
  {
    "q": "Q: Is Mr. Smith a Taiwanese teacher or a foreign teacher? — A: He is a ______ teacher. He comes from Canada.【外國的】",
    "options": [
      "important",
      "possible",
      "same",
      "foreign"
    ],
    "answer": 3,
    "cn": "史密斯先生是臺灣老師還是外國老師？ — 他是外籍老師，他來自加拿大。",
    "vocabIndex": 30
  },
  {
    "q": "Q: I won the first prize! — A: How ______ you are!【幸運的】",
    "options": [
      "lucky",
      "wrong",
      "simple",
      "main"
    ],
    "answer": 0,
    "cn": "我贏得頭獎了！ — 你真幸運！",
    "vocabIndex": 31
  },
  {
    "q": "Q: Tom always helps the old lady carry her bags. — A: How ______ he is!【有幫助的】",
    "options": [
      "main",
      "terrible",
      "American",
      "helpful"
    ],
    "answer": 3,
    "cn": "湯姆總是幫那位老太太提袋子。 — 他真熱心助人！",
    "vocabIndex": 32
  },
  {
    "q": "Q: This dictionary has pictures and easy sentences. — A: How ______ it is!【有用的】",
    "options": [
      "useful",
      "sure",
      "dead",
      "special"
    ],
    "answer": 0,
    "cn": "這本字典有圖片和簡單的句子。 — 它真有用！",
    "vocabIndex": 33
  },
  {
    "q": "Q: There is a supermarket next to my home. — A: How ______! You can buy food any time.【方便的】",
    "options": [
      "helpful",
      "convenient",
      "newer",
      "magic"
    ],
    "answer": 1,
    "cn": "我家隔壁有一家超市。 — 真方便！你隨時都能買食物。",
    "vocabIndex": 34
  },
  {
    "q": "Q: Amy got 100 on the math test. — A: What an ______ student she is!【極好的】",
    "options": [
      "tidy",
      "dead",
      "excellent",
      "lucky"
    ],
    "answer": 2,
    "cn": "艾美數學考了一百分。 — 她真是個優秀的學生！",
    "vocabIndex": 35
  },
  {
    "q": "Q: The typhoon broke many trees and houses. — A: How ______ it is!【嚴重的】",
    "options": [
      "serious",
      "dangerous",
      "easy",
      "quiet"
    ],
    "answer": 0,
    "cn": "颱風弄壞了很多樹和房子。 — 真嚴重！",
    "vocabIndex": 36
  },
  {
    "q": "Q: The man turns a piece of paper into a bird. — A: What a cool ______ trick!【魔術的】",
    "options": [
      "foreign",
      "noisy",
      "hard",
      "magic"
    ],
    "answer": 3,
    "cn": "那個人把一張紙變成一隻鳥。 — 好酷的魔術！",
    "vocabIndex": 37
  },
  {
    "q": "Q: Listen! Everyone is singing this new song. — A: What a great ______ song!【流行的】",
    "options": [
      "afraid",
      "pop",
      "special",
      "possible"
    ],
    "answer": 1,
    "cn": "聽！大家都在唱這首新歌。 — 好棒的流行歌！",
    "vocabIndex": 38
  },
  {
    "q": "Q: Look at the new train station. — A: What a ______ building!【現代的】",
    "options": [
      "dark",
      "right",
      "modern",
      "pop"
    ],
    "answer": 2,
    "cn": "看那個新火車站。 — 好現代化的建築！",
    "vocabIndex": 39
  },
  {
    "q": "Q: Which subject do you think is more difficult, math or English? — A: Math is more ______ than English for me.【困難的】",
    "options": [
      "difficult",
      "helpful",
      "true",
      "thick"
    ],
    "answer": 0,
    "cn": "你覺得數學和英文哪一科比較難？ — 對我來說數學比英文難。",
    "vocabIndex": 40
  },
  {
    "q": "Q: Which animal does Ben think is more dangerous, a lion or a cat? — A: He thinks a lion is more ______ than a cat.【危險的】",
    "options": [
      "serious",
      "other",
      "dangerous",
      "helpful"
    ],
    "answer": 2,
    "cn": "班覺得獅子和貓哪一個比較危險？ — 他覺得獅子比貓危險。",
    "vocabIndex": 41
  },
  {
    "q": "Q: Which does Lisa think is more interesting, comic books or movies? — A: She thinks comic books are more ______ than movies.【有趣的】",
    "options": [
      "scared",
      "enough",
      "dirty",
      "interesting"
    ],
    "answer": 3,
    "cn": "麗莎覺得漫畫和電影哪個比較有趣？ — 她覺得漫畫比電影有趣。",
    "vocabIndex": 42
  },
  {
    "q": "Q: What do you think is the most important thing in life? — A: I think health is the most ______ thing.【重要的】",
    "options": [
      "simple",
      "important",
      "true",
      "lucky"
    ],
    "answer": 1,
    "cn": "你覺得人生中最重要的是什麼？ — 我覺得健康是最重要的。",
    "vocabIndex": 43
  },
  {
    "q": "Q: Which sport is the most popular in your class? — A: Basketball is the most ______ of all.【受歡迎的】",
    "options": [
      "OK",
      "loud",
      "ready",
      "popular"
    ],
    "answer": 3,
    "cn": "你們班最受歡迎的運動是什麼？ — 籃球是所有運動中最受歡迎的。",
    "vocabIndex": 44
  },
  {
    "q": "Q: Which day is the most special to you? — A: My birthday is the most ______ day of the year.【特別的】",
    "options": [
      "same",
      "real",
      "special",
      "main"
    ],
    "answer": 2,
    "cn": "對你來說哪一天最特別？ — 我的生日是一年中最特別的一天。",
    "vocabIndex": 45
  },
  {
    "q": "Q: Whose bike is newer, yours or Tom's? — A: Tom's bike is ______ than mine.【新的】",
    "options": [
      "newer",
      "other",
      "main",
      "afraid"
    ],
    "answer": 0,
    "cn": "誰的腳踏車比較新，你的還是湯姆的？ — 湯姆的腳踏車比我的新。",
    "vocabIndex": 46
  },
  {
    "q": "Q: Does your brother have an old cellphone? — A: No, he doesn't. He has the ______ one. It came out last week.【最新的】",
    "options": [
      "lucky",
      "latest",
      "real",
      "else"
    ],
    "answer": 1,
    "cn": "你哥哥的手機是舊的嗎？ — 不是，他有最新的那款，上週才推出。",
    "vocabIndex": 47
  },
  {
    "q": "Q: Is your baby brother able to walk? — A: Yes, he is. He is ______ to walk now.【能夠…的】",
    "options": [
      "special",
      "same",
      "able",
      "common"
    ],
    "answer": 2,
    "cn": "你的小弟弟會走路了嗎？ — 會，他現在會走路了。",
    "vocabIndex": 48
  },
  {
    "q": "Q: Does Lisa like snakes? — A: No, she doesn't. She is ______ of them.【害怕的】",
    "options": [
      "same",
      "afraid",
      "safe",
      "OK"
    ],
    "answer": 1,
    "cn": "麗莎喜歡蛇嗎？ — 不喜歡，她怕蛇。",
    "vocabIndex": 49
  },
  {
    "q": "Q: Do you like the dark? — A: No, I don't. I'm ______ of the dark.【害怕的】",
    "options": [
      "surprised",
      "possible",
      "difficult",
      "scared"
    ],
    "answer": 3,
    "cn": "你喜歡黑暗嗎？ — 不喜歡，我怕黑。",
    "vocabIndex": 50
  },
  {
    "q": "Q: How do you feel about your new school? — A: I'm ______ to be here. Everyone is friendly.【高興的】",
    "options": [
      "glad",
      "able",
      "sure",
      "convenient"
    ],
    "answer": 0,
    "cn": "你覺得新學校怎麼樣？ — 我很高興來這裡，大家都很友善。",
    "vocabIndex": 51
  },
  {
    "q": "Q: What does Tom say when he is late? — A: He says, \"I'm ______ I'm late.\"【抱歉的】",
    "options": [
      "free",
      "sorry",
      "fresh",
      "different"
    ],
    "answer": 1,
    "cn": "湯姆遲到時會說什麼？ — 他說：「抱歉我遲到了。」",
    "vocabIndex": 52
  },
  {
    "q": "Q: Does Ben know the answer? — A: Yes, he does. He is ______ it's \"C.\"【確定的】",
    "options": [
      "sure",
      "ready",
      "other",
      "wonderful"
    ],
    "answer": 0,
    "cn": "班知道答案嗎？ — 知道，他確定是 C。",
    "vocabIndex": 53
  },
  {
    "q": "Q: How do your parents feel about your test? — A: They are ______. It's my first 100!【感到驚訝的】",
    "options": [
      "scared",
      "fine",
      "magic",
      "surprised"
    ],
    "answer": 3,
    "cn": "你爸媽對你的考試有什麼感覺？ — 他們很驚訝，這是我第一次考一百分！",
    "vocabIndex": 54
  },
  {
    "q": "Q: Do the students have their books and pencils? — A: Yes, they do. They are ______ for class.【準備好的】",
    "options": [
      "excellent",
      "useful",
      "ready",
      "wrong"
    ],
    "answer": 2,
    "cn": "學生們都帶書和鉛筆了嗎？ — 有，他們準備好上課了。",
    "vocabIndex": 55
  },
  {
    "q": "Q: Does your leg still hurt? — A: No, it doesn't. I'm ______ now.【沒問題的】",
    "options": [
      "OK",
      "Helpful",
      "Pop",
      "Wonderful"
    ],
    "answer": 0,
    "cn": "你的腿還痛嗎？ — 不痛了，我現在沒事了。",
    "vocabIndex": 56
  },
  {
    "q": "Q: Is it possible to walk to the zoo from here? — A: Yes, it's ______, but it takes an hour.【可能的】",
    "options": [
      "fresh",
      "true",
      "ready",
      "possible"
    ],
    "answer": 3,
    "cn": "從這裡走路到動物園可能嗎？ — 可以，但要走一個小時。",
    "vocabIndex": 57
  },
  {
    "q": "Q: What fruit do you like best? — A: Strawberries. They are my ______ fruit.【最喜愛的】",
    "options": [
      "pop",
      "favorite",
      "special",
      "possible"
    ],
    "answer": 1,
    "cn": "你最喜歡什麼水果？ — 草莓，它們是我最愛的水果。",
    "vocabIndex": 58
  },
  {
    "q": "Q: Do you and your brother share a room? — A: No, we don't. I have my ______ room.【自己的】",
    "options": [
      "foreign",
      "possible",
      "own",
      "dead"
    ],
    "answer": 2,
    "cn": "你和你哥哥共用一間房間嗎？ — 沒有，我有自己的房間。",
    "vocabIndex": 59
  },
  {
    "q": "Q: Does Amy have any brothers or sisters? — A: No, she doesn't. She is an ______ child.【唯一的】",
    "options": [
      "modern",
      "quiet",
      "dirty",
      "only"
    ],
    "answer": 3,
    "cn": "艾美有兄弟姊妹嗎？ — 沒有，她是獨生女。",
    "vocabIndex": 60
  },
  {
    "q": "Q: Do all the students go home after school? — A: No, they don't. Some go home, and the ______ students stay for clubs.【其他的】",
    "options": [
      "useful",
      "other",
      "wonderful",
      "only"
    ],
    "answer": 1,
    "cn": "所有學生放學都回家嗎？ — 不是，有些回家，其他學生留下來參加社團。",
    "vocabIndex": 61
  },
  {
    "q": "Q: I want a hamburger. Do you want anything ______? — A: Yes. I want some fries, too.【別的】",
    "options": [
      "else",
      "correct",
      "fresh",
      "bright"
    ],
    "answer": 0,
    "cn": "我要一個漢堡。你還要別的東西嗎？ — 要，我也想要一些薯條。",
    "vocabIndex": 62
  },
  {
    "q": "Q: Does Ben have ______ money for the ticket? — A: No, he doesn't. He needs ten more dollars.【足夠的】",
    "options": [
      "pop",
      "safe",
      "enough",
      "thick"
    ],
    "answer": 2,
    "cn": "班有足夠的錢買票嗎？ — 沒有，他還需要十元。",
    "vocabIndex": 63
  },
  {
    "q": "Q: Where do your parents wait for you after school? — A: They wait at the ______ gate of the school.【主要的】",
    "options": [
      "simple",
      "easy",
      "fresh",
      "main"
    ],
    "answer": 3,
    "cn": "放學後你爸媽在哪裡等你？ — 他們在學校大門等。",
    "vocabIndex": 64
  },
  {
    "q": "Q: Why don't we go to school on October 10? — A: Because it's a ______ holiday.【國家的】",
    "options": [
      "wonderful",
      "favorite",
      "national",
      "strange"
    ],
    "answer": 2,
    "cn": "為什麼我們十月十日不用上學？ — 因為那天是國定假日。",
    "vocabIndex": 65
  },
  {
    "q": "Q: What kind of food does Tom like? — A: He likes ______ food, like hamburgers and hot dogs.【美國的】",
    "options": [
      "Latest",
      "American",
      "Own",
      "Ready"
    ],
    "answer": 1,
    "cn": "湯姆喜歡哪種食物？ — 他喜歡美國食物，像漢堡和熱狗。",
    "vocabIndex": 66
  },
  {
    "q": "Q: Does the teacher check who is here every morning? — A: Yes, she does. Today all thirty students are ______.【出席的】",
    "options": [
      "present",
      "pop",
      "true",
      "newer"
    ],
    "answer": 0,
    "cn": "老師每天早上都會點名嗎？ — 會，今天三十個學生全部出席。",
    "vocabIndex": 67
  },
  {
    "q": "Q: How does Lisa start her letter to her grandma? — A: She writes, \"______ Grandma, …\"【親愛的】",
    "options": [
      "wonderful",
      "helpful",
      "dear",
      "pop"
    ],
    "answer": 2,
    "cn": "麗莎寫信給奶奶時怎麼開頭？ — 她寫：「親愛的奶奶，……」",
    "vocabIndex": 68
  }
];

const LOOKUP = {
  "scared": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "害怕的"
  },
  "present": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "禮物"
  },
  "right": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "右邊"
  },
  "other": {
    "pos": "pron.",
    "en_def": "",
    "cn_def": "其他的（人／物）"
  },
  "american": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "美國人"
  },
  "correct": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "改正"
  },
  "own": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "擁有"
  },
  "bright": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "明亮的"
  },
  "dark": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "黑暗的"
  },
  "dirty": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "骯髒的"
  },
  "tidy": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "整潔的"
  },
  "dead": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "死的"
  },
  "sharp": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "銳利的"
  },
  "thick": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "厚的"
  },
  "fresh": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "新鮮的"
  },
  "terrible": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "很糟的"
  },
  "great": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "很棒的"
  },
  "fine": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "很好的"
  },
  "loud": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "大聲的"
  },
  "noisy": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "吵鬧的"
  },
  "quiet": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "安靜的"
  },
  "strange": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "奇怪的"
  },
  "wonderful": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "極好的"
  },
  "easy": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "容易的"
  },
  "simple": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "簡單的"
  },
  "hard": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "困難的；硬的"
  },
  "wrong": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "錯誤的"
  },
  "true": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "真實的"
  },
  "real": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "真正的"
  },
  "safe": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "安全的"
  },
  "free": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "免費的"
  },
  "same": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "相同的"
  },
  "different": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "不同的"
  },
  "common": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "常見的"
  },
  "public": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "公立的"
  },
  "foreign": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "外國的"
  },
  "lucky": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "幸運的"
  },
  "helpful": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "有幫助的"
  },
  "useful": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "有用的"
  },
  "convenient": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "方便的"
  },
  "excellent": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "極好的"
  },
  "serious": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "嚴重的"
  },
  "magic": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "魔術的"
  },
  "pop": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "流行的"
  },
  "modern": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "現代的"
  },
  "difficult": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "困難的"
  },
  "dangerous": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "危險的"
  },
  "interesting": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "有趣的"
  },
  "important": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "重要的"
  },
  "popular": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "受歡迎的"
  },
  "special": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "特別的"
  },
  "newer": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "新的"
  },
  "latest": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "最新的"
  },
  "able": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "能夠…的"
  },
  "afraid": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "害怕的"
  },
  "glad": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "高興的"
  },
  "sorry": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "抱歉的"
  },
  "sure": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "確定的"
  },
  "surprised": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "感到驚訝的"
  },
  "ready": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "準備好的"
  },
  "ok": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "沒問題的"
  },
  "possible": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "可能的"
  },
  "favorite": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "最喜愛的"
  },
  "only": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "唯一的"
  },
  "else": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "別的"
  },
  "enough": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "足夠的"
  },
  "main": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "主要的"
  },
  "national": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "國家的"
  },
  "dear": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "親愛的"
  }
};

const EXTRA_GLOSSES = {};
