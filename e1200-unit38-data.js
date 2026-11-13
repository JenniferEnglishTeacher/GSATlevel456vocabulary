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
    "en_def": "full of light",
    "sentence": "Q: How do the new classrooms look? — A: They look {{BLANK}}. They have big windows.",
    "cn": "新教室看起來怎麼樣？ — 看起來很明亮，它們有大窗戶。"
  },
  {
    "word": "dark",
    "pos": "adj.",
    "cn_def": "黑暗的",
    "en_def": "with little or no light",
    "sentence": "Q: How do the classrooms look at night? — A: They look {{BLANK}}. All the lights are off.",
    "cn": "教室晚上看起來怎麼樣？ — 看起來很暗，燈都關了。"
  },
  {
    "word": "dirty",
    "pos": "adj.",
    "cn_def": "骯髒的",
    "en_def": "not clean",
    "sentence": "Q: How do your shoes look after the soccer game? — A: They look {{BLANK}}. There is mud on them.",
    "cn": "足球賽後你的鞋子看起來怎樣？ — 看起來很髒，上面有泥巴。"
  },
  {
    "word": "tidy",
    "pos": "adj.",
    "cn_def": "整潔的",
    "en_def": "clean, with everything in the right place",
    "sentence": "Q: How does Amy's desk look? — A: It looks {{BLANK}}. Her books are in a row.",
    "cn": "艾美的書桌看起來怎樣？ — 看起來很整齊，她的書排成一排。"
  },
  {
    "word": "dead",
    "pos": "adj.",
    "cn_def": "死的",
    "en_def": "not living anymore",
    "sentence": "Q: How do the flowers in the vase look? — A: They look {{BLANK}}. Nobody gave them water.",
    "cn": "花瓶裡的花看起來怎樣？ — 看起來枯死了，沒有人給它們澆水。"
  },
  {
    "word": "sharp",
    "pos": "adj.",
    "cn_def": "銳利的",
    "en_def": "able to cut things easily",
    "sentence": "Q: How does the new knife look? — A: It looks {{BLANK}}. Be careful!",
    "cn": "這把新刀看起來怎樣？ — 看起來很鋒利，小心！"
  },
  {
    "word": "thick",
    "pos": "adj.",
    "cn_def": "厚的",
    "en_def": "big from one side to the other; not thin",
    "sentence": "Q: How does the dictionary look? — A: It looks very {{BLANK}}. It has 2,000 pages.",
    "cn": "那本字典看起來怎樣？ — 看起來很厚，它有兩千頁。"
  },
  {
    "word": "fresh",
    "pos": "adj.",
    "cn_def": "新鮮的",
    "en_def": "just made or picked; not old",
    "sentence": "Q: How do the vegetables at the market look? — A: They look {{BLANK}}. The farmers picked them this morning.",
    "cn": "市場的蔬菜看起來怎樣？ — 看起來很新鮮，農夫今天早上採的。"
  },
  {
    "word": "terrible",
    "pos": "adj.",
    "cn_def": "很糟的",
    "en_def": "very bad",
    "sentence": "Q: How does the old milk smell? — A: It smells {{BLANK}}. Don't drink it!",
    "cn": "那瓶過期的牛奶聞起來怎樣？ — 聞起來很糟，別喝！"
  },
  {
    "word": "great",
    "pos": "adj.",
    "cn_def": "很棒的",
    "en_def": "very good",
    "sentence": "Q: How do the cookies taste? — A: They taste {{BLANK}}! I want another one.",
    "cn": "這些餅乾吃起來怎樣？ — 很好吃！我還想再吃一塊。"
  },
  {
    "word": "fine",
    "pos": "adj.",
    "cn_def": "很好的",
    "en_def": "good; well",
    "sentence": "Q: How do you feel today? — A: I feel {{BLANK}}, thank you.",
    "cn": "你今天覺得怎樣？ — 我覺得很好，謝謝。"
  },
  {
    "word": "loud",
    "pos": "adj.",
    "cn_def": "大聲的",
    "en_def": "making a lot of sound",
    "sentence": "Q: How does the music next door sound? — A: It sounds very {{BLANK}}. I can't sleep.",
    "cn": "隔壁的音樂聽起來怎樣？ — 聽起來很大聲，我睡不著。"
  },
  {
    "word": "noisy",
    "pos": "adj.",
    "cn_def": "吵鬧的",
    "en_def": "full of loud sounds",
    "sentence": "Q: How do the kids in the classroom sound? — A: They sound {{BLANK}}. They are talking and laughing.",
    "cn": "教室裡的孩子們聽起來怎樣？ — 聽起來很吵，他們在說笑。"
  },
  {
    "word": "quiet",
    "pos": "adj.",
    "cn_def": "安靜的",
    "en_def": "with little or no sound",
    "sentence": "Q: How does the library sound? — A: It sounds {{BLANK}}. Everyone is reading.",
    "cn": "圖書館聽起來怎樣？ — 聽起來很安靜，大家都在看書。"
  },
  {
    "word": "strange",
    "pos": "adj.",
    "cn_def": "奇怪的",
    "en_def": "not usual; different in a way that is hard to understand",
    "sentence": "Q: How does the car sound today? — A: It sounds {{BLANK}}. Dad should check it.",
    "cn": "車子今天聽起來怎樣？ — 聽起來怪怪的，爸爸應該檢查一下。"
  },
  {
    "word": "wonderful",
    "pos": "adj.",
    "cn_def": "極好的",
    "en_def": "very, very good",
    "sentence": "Q: How does Lisa's singing sound? — A: It sounds {{BLANK}}! She sings like a star.",
    "cn": "麗莎的歌聲聽起來怎樣？ — 聽起來好極了！她唱得像明星一樣。"
  },
  {
    "word": "easy",
    "pos": "adj.",
    "cn_def": "容易的",
    "en_def": "not hard to do",
    "sentence": "Q: Is the English test easy or hard? — A: It's {{BLANK}}. I can answer all the questions.",
    "cn": "英文考試簡單還是難？ — 很簡單，我每一題都會答。"
  },
  {
    "word": "simple",
    "pos": "adj.",
    "cn_def": "簡單的",
    "en_def": "easy to understand or do",
    "sentence": "Q: Is the game simple or difficult? — A: It's {{BLANK}}. Even my little brother can play it.",
    "cn": "這個遊戲簡單還是困難？ — 很簡單，連我弟弟都會玩。"
  },
  {
    "word": "hard",
    "pos": "adj.",
    "cn_def": "困難的；硬的",
    "en_def": "not easy; not soft",
    "sentence": "Q: Is the bread soft or hard? — A: It's {{BLANK}}. It's three days old.",
    "cn": "這麵包是軟的還是硬的？ — 是硬的，它放三天了。"
  },
  {
    "word": "correct",
    "pos": "adj.",
    "cn_def": "正確的",
    "en_def": "right; with no mistakes",
    "sentence": "Q: Is my answer correct or wrong? — A: It's {{BLANK}}. Good job!",
    "cn": "我的答案是對的還是錯的？ — 是正確的，做得好！"
  },
  {
    "word": "right",
    "pos": "adj.",
    "cn_def": "對的",
    "en_def": "correct; not wrong",
    "sentence": "Q: Is it right or wrong to help old people? — A: It's {{BLANK}}. We should help them.",
    "cn": "幫助老人是對的還是錯的？ — 是對的，我們應該幫助他們。"
  },
  {
    "word": "wrong",
    "pos": "adj.",
    "cn_def": "錯誤的",
    "en_def": "not right; not correct",
    "sentence": "Q: Is \"Tom have a dog\" right or wrong? — A: It's {{BLANK}}. We say \"Tom has a dog.\"",
    "cn": "「Tom have a dog」是對的還是錯的？ — 是錯的，要說「Tom has a dog」。"
  },
  {
    "word": "true",
    "pos": "adj.",
    "cn_def": "真實的",
    "en_def": "right and not a lie",
    "sentence": "Q: Is the story true or not? — A: It's {{BLANK}}. It happened to my grandpa.",
    "cn": "這個故事是真的嗎？ — 是真的，發生在我爺爺身上。"
  },
  {
    "word": "real",
    "pos": "adj.",
    "cn_def": "真正的",
    "en_def": "not fake; not only in stories",
    "sentence": "Q: Is that a real flower or a paper flower? — A: It's a {{BLANK}} flower. It smells sweet.",
    "cn": "那是真花還是紙花？ — 是真花，聞起來很香。"
  },
  {
    "word": "safe",
    "pos": "adj.",
    "cn_def": "安全的",
    "en_def": "not in danger",
    "sentence": "Q: Is it safe or dangerous to swim in this river? — A: It's {{BLANK}}. The water isn't deep.",
    "cn": "在這條河游泳安全還是危險？ — 很安全，水不深。"
  },
  {
    "word": "free",
    "pos": "adj.",
    "cn_def": "免費的",
    "en_def": "costing no money",
    "sentence": "Q: Is the ticket free or expensive? — A: It's {{BLANK}}. You don't have to pay.",
    "cn": "票是免費的還是很貴？ — 是免費的，你不用付錢。"
  },
  {
    "word": "same",
    "pos": "adj.",
    "cn_def": "相同的",
    "en_def": "not different",
    "sentence": "Q: Are you and Ben in the same class or different classes? — A: We are in the {{BLANK}} class.",
    "cn": "你和班同班還是不同班？ — 我們同一班。"
  },
  {
    "word": "different",
    "pos": "adj.",
    "cn_def": "不同的",
    "en_def": "not the same",
    "sentence": "Q: Are the two pictures the same or different? — A: They are {{BLANK}}. One cat is black, and the other is white.",
    "cn": "這兩張圖一樣還是不一樣？ — 不一樣，一隻貓是黑的，另一隻是白的。"
  },
  {
    "word": "common",
    "pos": "adj.",
    "cn_def": "常見的",
    "en_def": "seen or happening often",
    "sentence": "Q: Is \"Chen\" a common name or a special name in Taiwan? — A: It's a {{BLANK}} name. Many people have it.",
    "cn": "「陳」在臺灣是常見還是特別的姓？ — 是常見的姓，很多人姓陳。"
  },
  {
    "word": "public",
    "pos": "adj.",
    "cn_def": "公立的",
    "en_def": "for all people to use",
    "sentence": "Q: Does your sister go to a public school or a private school? — A: She goes to a {{BLANK}} school.",
    "cn": "你妹妹讀公立還是私立學校？ — 她讀公立學校。"
  },
  {
    "word": "foreign",
    "pos": "adj.",
    "cn_def": "外國的",
    "en_def": "from another country",
    "sentence": "Q: Is Mr. Smith a Taiwanese teacher or a foreign teacher? — A: He is a {{BLANK}} teacher. He comes from Canada.",
    "cn": "史密斯先生是臺灣老師還是外國老師？ — 他是外籍老師，他來自加拿大。"
  },
  {
    "word": "lucky",
    "pos": "adj.",
    "cn_def": "幸運的",
    "en_def": "having good things happen to you by chance",
    "sentence": "Q: I won the first prize! — A: How {{BLANK}} you are!",
    "cn": "我贏得頭獎了！ — 你真幸運！"
  },
  {
    "word": "helpful",
    "pos": "adj.",
    "cn_def": "有幫助的",
    "en_def": "willing to help; useful",
    "sentence": "Q: Tom always helps the old lady carry her bags. — A: How {{BLANK}} he is!",
    "cn": "湯姆總是幫那位老太太提袋子。 — 他真熱心助人！"
  },
  {
    "word": "useful",
    "pos": "adj.",
    "cn_def": "有用的",
    "en_def": "helping you to do something",
    "sentence": "Q: This dictionary has pictures and easy sentences. — A: How {{BLANK}} it is!",
    "cn": "這本字典有圖片和簡單的句子。 — 它真有用！"
  },
  {
    "word": "convenient",
    "pos": "adj.",
    "cn_def": "方便的",
    "en_def": "easy to use or get to",
    "sentence": "Q: There is a supermarket next to my home. — A: How {{BLANK}}! You can buy food any time.",
    "cn": "我家隔壁有一家超市。 — 真方便！你隨時都能買食物。"
  },
  {
    "word": "excellent",
    "pos": "adj.",
    "cn_def": "極好的",
    "en_def": "very, very good",
    "sentence": "Q: Amy got 100 on the math test. — A: What an {{BLANK}} student she is!",
    "cn": "艾美數學考了一百分。 — 她真是個優秀的學生！"
  },
  {
    "word": "serious",
    "pos": "adj.",
    "cn_def": "嚴重的",
    "en_def": "very bad or important; not a joke",
    "sentence": "Q: The typhoon broke many trees and houses. — A: How {{BLANK}} it is!",
    "cn": "颱風弄壞了很多樹和房子。 — 真嚴重！"
  },
  {
    "word": "magic",
    "pos": "adj.",
    "cn_def": "魔術的",
    "en_def": "able to do things that seem impossible",
    "sentence": "Q: The man turns a piece of paper into a bird. — A: What a cool {{BLANK}} trick!",
    "cn": "那個人把一張紙變成一隻鳥。 — 好酷的魔術！"
  },
  {
    "word": "pop",
    "pos": "adj.",
    "cn_def": "流行的",
    "en_def": "(of music) modern and liked by many young people",
    "sentence": "Q: Listen! Everyone is singing this new song. — A: What a great {{BLANK}} song!",
    "cn": "聽！大家都在唱這首新歌。 — 好棒的流行歌！"
  },
  {
    "word": "modern",
    "pos": "adj.",
    "cn_def": "現代的",
    "en_def": "of the present time; new",
    "sentence": "Q: Look at the new train station. — A: What a {{BLANK}} building!",
    "cn": "看那個新火車站。 — 好現代化的建築！"
  },
  {
    "word": "difficult",
    "pos": "adj.",
    "cn_def": "困難的",
    "en_def": "hard to do or understand",
    "sentence": "Q: Which subject do you think is more difficult, math or English? — A: Math is more {{BLANK}} than English for me.",
    "cn": "你覺得數學和英文哪一科比較難？ — 對我來說數學比英文難。"
  },
  {
    "word": "dangerous",
    "pos": "adj.",
    "cn_def": "危險的",
    "en_def": "able to hurt you",
    "sentence": "Q: Which animal does Ben think is more dangerous, a lion or a cat? — A: He thinks a lion is more {{BLANK}} than a cat.",
    "cn": "班覺得獅子和貓哪一個比較危險？ — 他覺得獅子比貓危險。"
  },
  {
    "word": "interesting",
    "pos": "adj.",
    "cn_def": "有趣的",
    "en_def": "making you want to know more",
    "sentence": "Q: Which does Lisa think is more interesting, comic books or movies? — A: She thinks comic books are more {{BLANK}} than movies.",
    "cn": "麗莎覺得漫畫和電影哪個比較有趣？ — 她覺得漫畫比電影有趣。"
  },
  {
    "word": "important",
    "pos": "adj.",
    "cn_def": "重要的",
    "en_def": "having great meaning or value",
    "sentence": "Q: What do you think is the most important thing in life? — A: I think health is the most {{BLANK}} thing.",
    "cn": "你覺得人生中最重要的是什麼？ — 我覺得健康是最重要的。"
  },
  {
    "word": "popular",
    "pos": "adj.",
    "cn_def": "受歡迎的",
    "en_def": "liked by many people",
    "sentence": "Q: Which sport is the most popular in your class? — A: Basketball is the most {{BLANK}} of all.",
    "cn": "你們班最受歡迎的運動是什麼？ — 籃球是所有運動中最受歡迎的。"
  },
  {
    "word": "special",
    "pos": "adj.",
    "cn_def": "特別的",
    "en_def": "different from others in a good way",
    "sentence": "Q: Which day is the most special to you? — A: My birthday is the most {{BLANK}} day of the year.",
    "cn": "對你來說哪一天最特別？ — 我的生日是一年中最特別的一天。"
  },
  {
    "word": "new (newer)",
    "pos": "adj.",
    "cn_def": "新的",
    "en_def": "just made or bought; not old",
    "sentence": "Q: Whose bike is newer, yours or Tom's? — A: Tom's bike is {{BLANK}} than mine.",
    "cn": "誰的腳踏車比較新，你的還是湯姆的？ — 湯姆的腳踏車比我的新。"
  },
  {
    "word": "latest",
    "pos": "adj.",
    "cn_def": "最新的",
    "en_def": "the newest",
    "sentence": "Q: Does your brother have an old cellphone? — A: No, he doesn't. He has the {{BLANK}} one. It came out last week.",
    "cn": "你哥哥的手機是舊的嗎？ — 不是，他有最新的那款，上週才推出。"
  },
  {
    "word": "able",
    "pos": "adj.",
    "cn_def": "能夠…的",
    "en_def": "having the power or skill to do something",
    "sentence": "Q: Is your baby brother able to walk? — A: Yes, he is. He is {{BLANK}} to walk now.",
    "cn": "你的小弟弟會走路了嗎？ — 會，他現在會走路了。"
  },
  {
    "word": "afraid",
    "pos": "adj.",
    "cn_def": "害怕的",
    "en_def": "feeling fear",
    "sentence": "Q: Does Lisa like snakes? — A: No, she doesn't. She is {{BLANK}} of them.",
    "cn": "麗莎喜歡蛇嗎？ — 不喜歡，她怕蛇。"
  },
  {
    "word": "scared",
    "pos": "adj.",
    "cn_def": "害怕的",
    "en_def": "afraid of something",
    "sentence": "Q: Do you like the dark? — A: No, I don't. I'm {{BLANK}} of the dark.",
    "cn": "你喜歡黑暗嗎？ — 不喜歡，我怕黑。"
  },
  {
    "word": "glad",
    "pos": "adj.",
    "cn_def": "高興的",
    "en_def": "happy about something",
    "sentence": "Q: How do you feel about your new school? — A: I'm {{BLANK}} to be here. Everyone is friendly.",
    "cn": "你覺得新學校怎麼樣？ — 我很高興來這裡，大家都很友善。"
  },
  {
    "word": "sorry",
    "pos": "adj.",
    "cn_def": "抱歉的",
    "en_def": "feeling bad about something you did",
    "sentence": "Q: What does Tom say when he is late? — A: He says, \"I'm {{BLANK}} I'm late.\"",
    "cn": "湯姆遲到時會說什麼？ — 他說：「抱歉我遲到了。」"
  },
  {
    "word": "sure",
    "pos": "adj.",
    "cn_def": "確定的",
    "en_def": "knowing that something is true",
    "sentence": "Q: Does Ben know the answer? — A: Yes, he does. He is {{BLANK}} it's \"C.\"",
    "cn": "班知道答案嗎？ — 知道，他確定是 C。"
  },
  {
    "word": "surprised",
    "pos": "adj.",
    "cn_def": "感到驚訝的",
    "en_def": "feeling that you did not expect something",
    "sentence": "Q: How do your parents feel about your test? — A: They are {{BLANK}}. It's my first 100!",
    "cn": "你爸媽對你的考試有什麼感覺？ — 他們很驚訝，這是我第一次考一百分！"
  },
  {
    "word": "ready",
    "pos": "adj.",
    "cn_def": "準備好的",
    "en_def": "prepared to do something",
    "sentence": "Q: Do the students have their books and pencils? — A: Yes, they do. They are {{BLANK}} for class.",
    "cn": "學生們都帶書和鉛筆了嗎？ — 有，他們準備好上課了。"
  },
  {
    "word": "OK",
    "pos": "adj.",
    "cn_def": "沒問題的",
    "en_def": "all right; fine",
    "sentence": "Q: Does your leg still hurt? — A: No, it doesn't. I'm {{BLANK}} now.",
    "cn": "你的腿還痛嗎？ — 不痛了，我現在沒事了。"
  },
  {
    "word": "possible",
    "pos": "adj.",
    "cn_def": "可能的",
    "en_def": "able to happen or be done",
    "sentence": "Q: Is it possible to walk to the zoo from here? — A: Yes, it's {{BLANK}}, but it takes an hour.",
    "cn": "從這裡走路到動物園可能嗎？ — 可以，但要走一個小時。"
  },
  {
    "word": "favorite",
    "pos": "adj.",
    "cn_def": "最喜愛的",
    "en_def": "liked the most",
    "sentence": "Q: What fruit do you like best? — A: Strawberries. They are my {{BLANK}} fruit.",
    "cn": "你最喜歡什麼水果？ — 草莓，它們是我最愛的水果。"
  },
  {
    "word": "own",
    "pos": "adj.",
    "cn_def": "自己的",
    "en_def": "belonging to that person and nobody else",
    "sentence": "Q: Do you and your brother share a room? — A: No, we don't. I have my {{BLANK}} room.",
    "cn": "你和你哥哥共用一間房間嗎？ — 沒有，我有自己的房間。"
  },
  {
    "word": "only",
    "pos": "adj.",
    "cn_def": "唯一的",
    "en_def": "with no other one of the same kind",
    "sentence": "Q: Does Amy have any brothers or sisters? — A: No, she doesn't. She is an {{BLANK}} child.",
    "cn": "艾美有兄弟姊妹嗎？ — 沒有，她是獨生女。"
  },
  {
    "word": "other",
    "pos": "adj.",
    "cn_def": "其他的",
    "en_def": "not this one; different",
    "sentence": "Q: Do all the students go home after school? — A: No, they don't. Some go home, and the {{BLANK}} students stay for clubs.",
    "cn": "所有學生放學都回家嗎？ — 不是，有些回家，其他學生留下來參加社團。"
  },
  {
    "word": "else",
    "pos": "adj.",
    "cn_def": "別的",
    "en_def": "different; in addition",
    "sentence": "Q: I want a hamburger. Do you want anything {{BLANK}}? — A: Yes. I want some fries, too.",
    "cn": "我要一個漢堡。你還要別的東西嗎？ — 要，我也想要一些薯條。"
  },
  {
    "word": "enough",
    "pos": "adj.",
    "cn_def": "足夠的",
    "en_def": "as much or as many as you need",
    "sentence": "Q: Does Ben have {{BLANK}} money for the ticket? — A: No, he doesn't. He needs ten more dollars.",
    "cn": "班有足夠的錢買票嗎？ — 沒有，他還需要十元。"
  },
  {
    "word": "main",
    "pos": "adj.",
    "cn_def": "主要的",
    "en_def": "most important",
    "sentence": "Q: Where do your parents wait for you after school? — A: They wait at the {{BLANK}} gate of the school.",
    "cn": "放學後你爸媽在哪裡等你？ — 他們在學校大門等。"
  },
  {
    "word": "national",
    "pos": "adj.",
    "cn_def": "國家的",
    "en_def": "of a whole country",
    "sentence": "Q: Why don't we go to school on October 10? — A: Because it's a {{BLANK}} holiday.",
    "cn": "為什麼我們十月十日不用上學？ — 因為那天是國定假日。"
  },
  {
    "word": "American",
    "pos": "adj.",
    "cn_def": "美國的",
    "en_def": "from the United States",
    "sentence": "Q: What kind of food does Tom like? — A: He likes {{BLANK}} food, like hamburgers and hot dogs.",
    "cn": "湯姆喜歡哪種食物？ — 他喜歡美國食物，像漢堡和熱狗。"
  },
  {
    "word": "present",
    "pos": "adj.",
    "cn_def": "出席的",
    "en_def": "being in a place; not absent",
    "sentence": "Q: Does the teacher check who is here every morning? — A: Yes, she does. Today all thirty students are {{BLANK}}.",
    "cn": "老師每天早上都會點名嗎？ — 會，今天三十個學生全部出席。"
  },
  {
    "word": "dear",
    "pos": "adj.",
    "cn_def": "親愛的",
    "en_def": "loved; used at the start of a letter",
    "sentence": "Q: How does Lisa start her letter to her grandma? — A: She writes, \"{{BLANK}} Grandma, …\"",
    "cn": "麗莎寫信給奶奶時怎麼開頭？ — 她寫：「親愛的奶奶，……」"
  }
];

const MCQS = [
  {
    "q": "The sun is very ______ today. I need to wear my sunglasses when I go out.",
    "options": [
      "dark",
      "dirty",
      "bright",
      "dead"
    ],
    "answer": 2,
    "cn": "新教室看起來怎麼樣？ — 看起來很明亮，它們有大窗戶。",
    "vocabIndex": 0
  },
  {
    "q": "It is ______ outside at night. You need a light to see the road.",
    "options": [
      "bright",
      "sharp",
      "fresh",
      "dark"
    ],
    "answer": 3,
    "cn": "教室晚上看起來怎麼樣？ — 看起來很暗，燈都關了。",
    "vocabIndex": 1
  },
  {
    "q": "Your hands are ______. Wash them with soap before you eat.",
    "options": [
      "dirty",
      "tidy",
      "sharp",
      "thick"
    ],
    "answer": 0,
    "cn": "足球賽後你的鞋子看起來怎樣？ — 看起來很髒，上面有泥巴。",
    "vocabIndex": 2
  },
  {
    "q": "Amy's room is always clean and ______. Everything is in the right place.",
    "options": [
      "dirty",
      "tidy",
      "sharp",
      "dead"
    ],
    "answer": 1,
    "cn": "艾美的書桌看起來怎樣？ — 看起來很整齊，她的書排成一排。",
    "vocabIndex": 3
  },
  {
    "q": "The flowers are ______ because nobody gave them water for two weeks.",
    "options": [
      "dead",
      "fresh",
      "sharp",
      "thick"
    ],
    "answer": 0,
    "cn": "花瓶裡的花看起來怎樣？ — 看起來枯死了，沒有人給它們澆水。",
    "vocabIndex": 4
  },
  {
    "q": "Be careful with that knife. It is very ______ and can cut your finger.",
    "options": [
      "thick",
      "fresh",
      "sharp",
      "tidy"
    ],
    "answer": 2,
    "cn": "這把新刀看起來怎樣？ — 看起來很鋒利，小心！",
    "vocabIndex": 5
  },
  {
    "q": "This dictionary is very ______. It has more than two thousand pages.",
    "options": [
      "sharp",
      "thick",
      "fresh",
      "dead"
    ],
    "answer": 1,
    "cn": "那本字典看起來怎樣？ — 看起來很厚，它有兩千頁。",
    "vocabIndex": 6
  },
  {
    "q": "These vegetables are ______. The farmer picked them from the field this morning.",
    "options": [
      "dead",
      "sharp",
      "thick",
      "fresh"
    ],
    "answer": 3,
    "cn": "市場的蔬菜看起來怎樣？ — 看起來很新鮮，農夫今天早上採的。",
    "vocabIndex": 7
  },
  {
    "q": "The weather was ______ yesterday. It rained all day, and the wind was very strong.",
    "options": [
      "great",
      "terrible",
      "fine",
      "wonderful"
    ],
    "answer": 1,
    "cn": "那瓶過期的牛奶聞起來怎樣？ — 聞起來很糟，別喝！",
    "vocabIndex": 8
  },
  {
    "q": "We had a ______ time at the party. Everyone laughed and danced all night.",
    "options": [
      "terrible",
      "strange",
      "great",
      "quiet"
    ],
    "answer": 2,
    "cn": "這些餅乾吃起來怎樣？ — 很好吃！我還想再吃一塊。",
    "vocabIndex": 9
  },
  {
    "q": "\"How are you today?\" \"I'm ______, thank you. And you?\"",
    "options": [
      "fine",
      "terrible",
      "loud",
      "strange"
    ],
    "answer": 0,
    "cn": "你今天覺得怎樣？ — 我覺得很好，謝謝。",
    "vocabIndex": 10
  },
  {
    "q": "The music is too ______. Please turn it down, because my ears hurt.",
    "options": [
      "quiet",
      "fine",
      "strange",
      "loud"
    ],
    "answer": 3,
    "cn": "隔壁的音樂聽起來怎樣？ — 聽起來很大聲，我睡不著。",
    "vocabIndex": 11
  },
  {
    "q": "The classroom is very ______ because all the students are talking and laughing at the same time.",
    "options": [
      "quiet",
      "noisy",
      "fine",
      "fresh"
    ],
    "answer": 1,
    "cn": "教室裡的孩子們聽起來怎樣？ — 聽起來很吵，他們在說笑。",
    "vocabIndex": 12
  },
  {
    "q": "Please be ______ in the library. People are reading and studying here.",
    "options": [
      "quiet",
      "noisy",
      "loud",
      "strange"
    ],
    "answer": 0,
    "cn": "圖書館聽起來怎樣？ — 聽起來很安靜，大家都在看書。",
    "vocabIndex": 13
  },
  {
    "q": "I heard a ______ noise in the kitchen last night. I didn't know what it was, so I was scared.",
    "options": [
      "quiet",
      "fine",
      "strange",
      "easy"
    ],
    "answer": 2,
    "cn": "車子今天聽起來怎樣？ — 聽起來怪怪的，爸爸應該檢查一下。",
    "vocabIndex": 14
  },
  {
    "q": "Thank you for the ______ dinner. Everything was delicious, and we had a very good time.",
    "options": [
      "terrible",
      "strange",
      "noisy",
      "wonderful"
    ],
    "answer": 3,
    "cn": "麗莎的歌聲聽起來怎樣？ — 聽起來好極了！她唱得像明星一樣。",
    "vocabIndex": 15
  },
  {
    "q": "The test was very ______. Everyone in the class got 100.",
    "options": [
      "hard",
      "easy",
      "wrong",
      "strange"
    ],
    "answer": 1,
    "cn": "英文考試簡單還是難？ — 很簡單，我每一題都會答。",
    "vocabIndex": 16
  },
  {
    "q": "The rules of this game are ______. Even a five-year-old child can understand them.",
    "options": [
      "simple",
      "wrong",
      "hard",
      "loud"
    ],
    "answer": 0,
    "cn": "這個遊戲簡單還是困難？ — 很簡單，連我弟弟都會玩。",
    "vocabIndex": 17
  },
  {
    "q": "The math problem is too ______ for me. I have tried for an hour, but I still can't answer it.",
    "options": [
      "easy",
      "simple",
      "hard",
      "safe"
    ],
    "answer": 2,
    "cn": "這麵包是軟的還是硬的？ — 是硬的，它放三天了。",
    "vocabIndex": 18
  },
  {
    "q": "Your answer is ______. You got it right, so you get ten points.",
    "options": [
      "wrong",
      "hard",
      "same",
      "correct"
    ],
    "answer": 3,
    "cn": "我的答案是對的還是錯的？ — 是正確的，做得好！",
    "vocabIndex": 19
  },
  {
    "q": "You are ______. Taipei 101 is the tallest building in Taiwan. I was wrong about that.",
    "options": [
      "free",
      "right",
      "safe",
      "same"
    ],
    "answer": 1,
    "cn": "幫助老人是對的還是錯的？ — 是對的，我們應該幫助他們。",
    "vocabIndex": 20
  },
  {
    "q": "I am sorry. I think you have the ______ number. There is no Tom here.",
    "options": [
      "right",
      "correct",
      "true",
      "wrong"
    ],
    "answer": 3,
    "cn": "「Tom have a dog」是對的還是錯的？ — 是錯的，要說「Tom has a dog」。",
    "vocabIndex": 21
  },
  {
    "q": "Is it ______ that you are moving to Japan? Yes, we are leaving next month.",
    "options": [
      "true",
      "wrong",
      "safe",
      "free"
    ],
    "answer": 0,
    "cn": "這個故事是真的嗎？ — 是真的，發生在我爺爺身上。",
    "vocabIndex": 22
  },
  {
    "q": "This is not a toy gun. It is a ______ one, so don't touch it.",
    "options": [
      "free",
      "same",
      "real",
      "wrong"
    ],
    "answer": 2,
    "cn": "那是真花還是紙花？ — 是真花，聞起來很香。",
    "vocabIndex": 23
  },
  {
    "q": "Don't swim in this river. It is not ______ because the water is deep and fast.",
    "options": [
      "safe",
      "free",
      "same",
      "true"
    ],
    "answer": 0,
    "cn": "在這條河游泳安全還是危險？ — 很安全，水不深。",
    "vocabIndex": 24
  },
  {
    "q": "You don't have to pay for the drinks. They are ______ today.",
    "options": [
      "safe",
      "same",
      "free",
      "real"
    ],
    "answer": 2,
    "cn": "票是免費的還是很貴？ — 是免費的，你不用付錢。",
    "vocabIndex": 25
  },
  {
    "q": "Amy and I are in the ______ class. We sit next to each other.",
    "options": [
      "different",
      "same",
      "free",
      "safe"
    ],
    "answer": 1,
    "cn": "你和班同班還是不同班？ — 我們同一班。",
    "vocabIndex": 26
  },
  {
    "q": "The two brothers look very ______. One is tall and thin, but the other is short and fat.",
    "options": [
      "same",
      "free",
      "safe",
      "different"
    ],
    "answer": 3,
    "cn": "這兩張圖一樣還是不一樣？ — 不一樣，一隻貓是黑的，另一隻是白的。",
    "vocabIndex": 27
  },
  {
    "q": "Chen and Lin are very ______ family names in Taiwan. Millions of people have them.",
    "options": [
      "common",
      "foreign",
      "lucky",
      "public"
    ],
    "answer": 0,
    "cn": "「陳」在臺灣是常見還是特別的姓？ — 是常見的姓，很多人姓陳。",
    "vocabIndex": 28
  },
  {
    "q": "This is a ______ library. Everyone in the city can come in and read the books.",
    "options": [
      "lucky",
      "foreign",
      "public",
      "serious"
    ],
    "answer": 2,
    "cn": "你妹妹讀公立還是私立學校？ — 她讀公立學校。",
    "vocabIndex": 29
  },
  {
    "q": "I want to learn a ______ language, like Japanese or French.",
    "options": [
      "lucky",
      "public",
      "common",
      "foreign"
    ],
    "answer": 3,
    "cn": "史密斯先生是臺灣老師還是外國老師？ — 他是外籍老師，他來自加拿大。",
    "vocabIndex": 30
  },
  {
    "q": "I was ______ to find my lost wallet. All my money was still in it.",
    "options": [
      "foreign",
      "lucky",
      "public",
      "serious"
    ],
    "answer": 1,
    "cn": "我贏得頭獎了！ — 你真幸運！",
    "vocabIndex": 31
  },
  {
    "q": "The clerk was very ______. She showed me where everything was and carried my bags.",
    "options": [
      "serious",
      "modern",
      "magic",
      "helpful"
    ],
    "answer": 3,
    "cn": "湯姆總是幫那位老太太提袋子。 — 他真熱心助人！",
    "vocabIndex": 32
  },
  {
    "q": "A dictionary is very ______ when you learn English. You can look up new words in it.",
    "options": [
      "useful",
      "serious",
      "lucky",
      "magic"
    ],
    "answer": 0,
    "cn": "這本字典有圖片和簡單的句子。 — 它真有用！",
    "vocabIndex": 33
  },
  {
    "q": "It is very ______ to live near an MRT station. You can go anywhere quickly and easily.",
    "options": [
      "serious",
      "magic",
      "convenient",
      "foreign"
    ],
    "answer": 2,
    "cn": "我家隔壁有一家超市。 — 真方便！你隨時都能買食物。",
    "vocabIndex": 34
  },
  {
    "q": "Lisa is an ______ student. She gets the best grades in her class.",
    "options": [
      "important",
      "excellent",
      "interesting",
      "easy"
    ],
    "answer": 1,
    "cn": "艾美數學考了一百分。 — 她真是個優秀的學生！",
    "vocabIndex": 35
  },
  {
    "q": "The car accident was very ______. Five people were badly hurt and taken to the hospital.",
    "options": [
      "lucky",
      "helpful",
      "serious",
      "modern"
    ],
    "answer": 2,
    "cn": "颱風弄壞了很多樹和房子。 — 真嚴重！",
    "vocabIndex": 36
  },
  {
    "q": "The man did a ______ trick. He pulled a rabbit out of an empty hat!",
    "options": [
      "serious",
      "magic",
      "modern",
      "convenient"
    ],
    "answer": 1,
    "cn": "那個人把一張紙變成一隻鳥。 — 好酷的魔術！",
    "vocabIndex": 37
  },
  {
    "q": "My sister loves ______ music. She listens to the newest songs by young singers every day.",
    "options": [
      "serious",
      "magic",
      "convenient",
      "pop"
    ],
    "answer": 3,
    "cn": "聽！大家都在唱這首新歌。 — 好棒的流行歌！",
    "vocabIndex": 38
  },
  {
    "q": "This is a ______ building with a lot of glass. It was built only last year.",
    "options": [
      "modern",
      "serious",
      "magic",
      "lucky"
    ],
    "answer": 0,
    "cn": "看那個新火車站。 — 好現代化的建築！",
    "vocabIndex": 39
  },
  {
    "q": "It is ______ to learn Chinese characters. Many foreigners take years to do it.",
    "options": [
      "popular",
      "difficult",
      "special",
      "dangerous"
    ],
    "answer": 1,
    "cn": "你覺得數學和英文哪一科比較難？ — 對我來說數學比英文難。",
    "vocabIndex": 40
  },
  {
    "q": "It is ______ to play on the street. A car may hit you.",
    "options": [
      "popular",
      "special",
      "interesting",
      "dangerous"
    ],
    "answer": 3,
    "cn": "班覺得獅子和貓哪一個比較危險？ — 他覺得獅子比貓危險。",
    "vocabIndex": 41
  },
  {
    "q": "This book is very ______. I can't stop reading it.",
    "options": [
      "interesting",
      "dangerous",
      "difficult",
      "important"
    ],
    "answer": 0,
    "cn": "麗莎覺得漫畫和電影哪個比較有趣？ — 她覺得漫畫比電影有趣。",
    "vocabIndex": 42
  },
  {
    "q": "It is ______ to eat breakfast. Your body needs food to start the day.",
    "options": [
      "dangerous",
      "popular",
      "important",
      "difficult"
    ],
    "answer": 2,
    "cn": "你覺得人生中最重要的是什麼？ — 我覺得健康是最重要的。",
    "vocabIndex": 43
  },
  {
    "q": "This singer is very ______ in Asia. Millions of young people love her songs.",
    "options": [
      "dangerous",
      "popular",
      "difficult",
      "important"
    ],
    "answer": 1,
    "cn": "你們班最受歡迎的運動是什麼？ — 籃球是所有運動中最受歡迎的。",
    "vocabIndex": 44
  },
  {
    "q": "Today is a ______ day. It is my parents' twentieth wedding anniversary.",
    "options": [
      "special",
      "dangerous",
      "difficult",
      "popular"
    ],
    "answer": 0,
    "cn": "對你來說哪一天最特別？ — 我的生日是一年中最特別的一天。",
    "vocabIndex": 45
  },
  {
    "q": "My phone is ______ than yours. I bought it last week, but you bought yours two years ago.",
    "options": [
      "older",
      "shorter",
      "taller",
      "newer"
    ],
    "answer": 3,
    "cn": "誰的腳踏車比較新，你的還是湯姆的？ — 湯姆的腳踏車比我的新。",
    "vocabIndex": 46
  },
  {
    "q": "Have you heard the singer's ______ song? It just came out yesterday.",
    "options": [
      "oldest",
      "longest",
      "latest",
      "tallest"
    ],
    "answer": 2,
    "cn": "你哥哥的手機是舊的嗎？ — 不是，他有最新的那款，上週才推出。",
    "vocabIndex": 47
  },
  {
    "q": "After a year of practice, Ben is ______ to swim 500 meters without stopping.",
    "options": [
      "able",
      "afraid",
      "sorry",
      "glad"
    ],
    "answer": 0,
    "cn": "你的小弟弟會走路了嗎？ — 會，他現在會走路了。",
    "vocabIndex": 48
  },
  {
    "q": "Many children are ______ of the dark. They can't sleep without a light.",
    "options": [
      "able",
      "glad",
      "sure",
      "afraid"
    ],
    "answer": 3,
    "cn": "麗莎喜歡蛇嗎？ — 不喜歡，她怕蛇。",
    "vocabIndex": 49
  },
  {
    "q": "I was so ______ when I saw the snake that I couldn't move or shout.",
    "options": [
      "ready",
      "glad",
      "scared",
      "sure"
    ],
    "answer": 2,
    "cn": "你喜歡黑暗嗎？ — 不喜歡，我怕黑。",
    "vocabIndex": 50
  },
  {
    "q": "I am ______ to see you again. It has been a long time!",
    "options": [
      "sorry",
      "glad",
      "afraid",
      "able"
    ],
    "answer": 1,
    "cn": "你覺得新學校怎麼樣？ — 我很高興來這裡，大家都很友善。",
    "vocabIndex": 51
  },
  {
    "q": "I am ______ I broke your cup. I will buy you a new one.",
    "options": [
      "glad",
      "sure",
      "ready",
      "sorry"
    ],
    "answer": 3,
    "cn": "湯姆遲到時會說什麼？ — 他說：「抱歉我遲到了。」",
    "vocabIndex": 52
  },
  {
    "q": "Are you ______ this is the right bus? I don't want to get on the wrong one.",
    "options": [
      "sure",
      "sorry",
      "glad",
      "afraid"
    ],
    "answer": 0,
    "cn": "班知道答案嗎？ — 知道，他確定是 C。",
    "vocabIndex": 53
  },
  {
    "q": "I was ______ to see my old friend at the party. I didn't know he was in Taipei.",
    "options": [
      "ready",
      "able",
      "surprised",
      "sure"
    ],
    "answer": 2,
    "cn": "你爸媽對你的考試有什麼感覺？ — 他們很驚訝，這是我第一次考一百分！",
    "vocabIndex": 54
  },
  {
    "q": "Dinner is ______. Please come to the table now.",
    "options": [
      "sorry",
      "ready",
      "afraid",
      "sure"
    ],
    "answer": 1,
    "cn": "學生們都帶書和鉛筆了嗎？ — 有，他們準備好上課了。",
    "vocabIndex": 55
  },
  {
    "q": "\"Is it ______ if I sit here?\" \"Sure. Nobody is using this chair.\"",
    "options": [
      "sorry",
      "afraid",
      "OK",
      "able"
    ],
    "answer": 2,
    "cn": "你的腿還痛嗎？ — 不痛了，我現在沒事了。",
    "vocabIndex": 56
  },
  {
    "q": "Is it ______ to get to the airport in twenty minutes? No, it is too far.",
    "options": [
      "favorite",
      "dear",
      "national",
      "possible"
    ],
    "answer": 3,
    "cn": "從這裡走路到動物園可能嗎？ — 可以，但要走一個小時。",
    "vocabIndex": 57
  },
  {
    "q": "Pizza is my ______ food. I like it more than anything else.",
    "options": [
      "favorite",
      "possible",
      "dear",
      "present"
    ],
    "answer": 0,
    "cn": "你最喜歡什麼水果？ — 草莓，它們是我最愛的水果。",
    "vocabIndex": 58
  },
  {
    "q": "I don't share a room with my sister now. I have my ______ room.",
    "options": [
      "else",
      "own",
      "only",
      "enough"
    ],
    "answer": 1,
    "cn": "你和你哥哥共用一間房間嗎？ — 沒有，我有自己的房間。",
    "vocabIndex": 59
  },
  {
    "q": "Ben is the ______ boy in the dance club. All the other members are girls.",
    "options": [
      "only",
      "else",
      "own",
      "enough"
    ],
    "answer": 0,
    "cn": "艾美有兄弟姊妹嗎？ — 沒有，她是獨生女。",
    "vocabIndex": 60
  },
  {
    "q": "I have two brothers. One is a doctor, and the ______ one is a teacher.",
    "options": [
      "else",
      "own",
      "enough",
      "other"
    ],
    "answer": 3,
    "cn": "所有學生放學都回家嗎？ — 不是，有些回家，其他學生留下來參加社團。",
    "vocabIndex": 61
  },
  {
    "q": "I want a hamburger and a Coke. I don't want anything ______.",
    "options": [
      "own",
      "only",
      "else",
      "main"
    ],
    "answer": 2,
    "cn": "我要一個漢堡。你還要別的東西嗎？ — 要，我也想要一些薯條。",
    "vocabIndex": 62
  },
  {
    "q": "We have five people but only four chairs. There are not ______ chairs for everyone.",
    "options": [
      "else",
      "enough",
      "own",
      "main"
    ],
    "answer": 1,
    "cn": "班有足夠的錢買票嗎？ — 沒有，他還需要十元。",
    "vocabIndex": 63
  },
  {
    "q": "Rice is the ______ food in Taiwan. People eat it at almost every meal.",
    "options": [
      "main",
      "else",
      "dear",
      "present"
    ],
    "answer": 0,
    "cn": "放學後你爸媽在哪裡等你？ — 他們在學校大門等。",
    "vocabIndex": 64
  },
  {
    "q": "October 10 is the ______ holiday of the R.O.C. The whole country celebrates it.",
    "options": [
      "dear",
      "national",
      "present",
      "else"
    ],
    "answer": 1,
    "cn": "為什麼我們十月十日不用上學？ — 因為那天是國定假日。",
    "vocabIndex": 65
  },
  {
    "q": "The hamburger is a famous ______ food. People in the U.S.A. eat a lot of them.",
    "options": [
      "dear",
      "present",
      "else",
      "American"
    ],
    "answer": 3,
    "cn": "湯姆喜歡哪種食物？ — 他喜歡美國食物，像漢堡和熱狗。",
    "vocabIndex": 66
  },
  {
    "q": "All thirty students are ______ today. Nobody is absent.",
    "options": [
      "dear",
      "main",
      "present",
      "national"
    ],
    "answer": 2,
    "cn": "老師每天早上都會點名嗎？ — 會，今天三十個學生全部出席。",
    "vocabIndex": 67
  },
  {
    "q": "\"______ Grandma, how are you? I miss you very much,\" Amy wrote at the top of her letter.",
    "options": [
      "Main",
      "Present",
      "National",
      "Dear"
    ],
    "answer": 3,
    "cn": "麗莎寫信給奶奶時怎麼開頭？ — 她寫：「親愛的奶奶，……」",
    "vocabIndex": 68
  }
];

const LOOKUP = {
  "dark": {
    "pos": "adj.",
    "en_def": "with little or no light",
    "cn_def": "黑暗的"
  },
  "dirty": {
    "pos": "adj.",
    "en_def": "not clean",
    "cn_def": "骯髒的"
  },
  "bright": {
    "pos": "adj.",
    "en_def": "full of light",
    "cn_def": "明亮的"
  },
  "dead": {
    "pos": "adj.",
    "en_def": "not living anymore",
    "cn_def": "死的"
  },
  "sharp": {
    "pos": "adj.",
    "en_def": "able to cut things easily",
    "cn_def": "銳利的"
  },
  "fresh": {
    "pos": "adj.",
    "en_def": "just made or picked; not old",
    "cn_def": "新鮮的"
  },
  "tidy": {
    "pos": "adj.",
    "en_def": "clean, with everything in the right place",
    "cn_def": "整潔的"
  },
  "thick": {
    "pos": "adj.",
    "en_def": "big from one side to the other; not thin",
    "cn_def": "厚的"
  },
  "great": {
    "pos": "adj.",
    "en_def": "very good",
    "cn_def": "很棒的"
  },
  "terrible": {
    "pos": "adj.",
    "en_def": "very bad",
    "cn_def": "很糟的"
  },
  "fine": {
    "pos": "adj.",
    "en_def": "good; well",
    "cn_def": "很好的"
  },
  "wonderful": {
    "pos": "adj.",
    "en_def": "very, very good",
    "cn_def": "極好的"
  },
  "strange": {
    "pos": "adj.",
    "en_def": "not usual; different in a way that is hard to understand",
    "cn_def": "奇怪的"
  },
  "quiet": {
    "pos": "adj.",
    "en_def": "with little or no sound",
    "cn_def": "安靜的"
  },
  "loud": {
    "pos": "adj.",
    "en_def": "making a lot of sound",
    "cn_def": "大聲的"
  },
  "noisy": {
    "pos": "adj.",
    "en_def": "full of loud sounds",
    "cn_def": "吵鬧的"
  },
  "easy": {
    "pos": "adj.",
    "en_def": "not hard to do",
    "cn_def": "容易的"
  },
  "hard": {
    "pos": "adj.",
    "en_def": "not easy; not soft",
    "cn_def": "困難的；硬的"
  },
  "wrong": {
    "pos": "adj.",
    "en_def": "not right; not correct",
    "cn_def": "錯誤的"
  },
  "simple": {
    "pos": "adj.",
    "en_def": "easy to understand or do",
    "cn_def": "簡單的"
  },
  "safe": {
    "pos": "adj.",
    "en_def": "not in danger",
    "cn_def": "安全的"
  },
  "same": {
    "pos": "adj.",
    "en_def": "not different",
    "cn_def": "相同的"
  },
  "correct": {
    "pos": "v.",
    "en_def": "to make something right",
    "cn_def": "改正"
  },
  "free": {
    "pos": "adj.",
    "en_def": "costing no money",
    "cn_def": "免費的"
  },
  "right": {
    "pos": "n.",
    "en_def": "the side opposite to left",
    "cn_def": "右邊"
  },
  "true": {
    "pos": "adj.",
    "en_def": "right and not a lie",
    "cn_def": "真實的"
  },
  "real": {
    "pos": "adj.",
    "en_def": "not fake; not only in stories",
    "cn_def": "真正的"
  },
  "different": {
    "pos": "adj.",
    "en_def": "not the same",
    "cn_def": "不同的"
  },
  "common": {
    "pos": "adj.",
    "en_def": "seen or happening often",
    "cn_def": "常見的"
  },
  "foreign": {
    "pos": "adj.",
    "en_def": "from another country",
    "cn_def": "外國的"
  },
  "lucky": {
    "pos": "adj.",
    "en_def": "having good things happen to you by chance",
    "cn_def": "幸運的"
  },
  "public": {
    "pos": "adj.",
    "en_def": "for all people to use",
    "cn_def": "公立的"
  },
  "serious": {
    "pos": "adj.",
    "en_def": "very bad or important; not a joke",
    "cn_def": "嚴重的"
  },
  "modern": {
    "pos": "adj.",
    "en_def": "of the present time; new",
    "cn_def": "現代的"
  },
  "magic": {
    "pos": "adj.",
    "en_def": "able to do things that seem impossible",
    "cn_def": "魔術的"
  },
  "helpful": {
    "pos": "adj.",
    "en_def": "willing to help; useful",
    "cn_def": "有幫助的"
  },
  "useful": {
    "pos": "adj.",
    "en_def": "helping you to do something",
    "cn_def": "有用的"
  },
  "convenient": {
    "pos": "adj.",
    "en_def": "easy to use or get to",
    "cn_def": "方便的"
  },
  "important": {
    "pos": "adj.",
    "en_def": "having great meaning or value",
    "cn_def": "重要的"
  },
  "excellent": {
    "pos": "adj.",
    "en_def": "very, very good",
    "cn_def": "極好的"
  },
  "interesting": {
    "pos": "adj.",
    "en_def": "making you want to know more",
    "cn_def": "有趣的"
  },
  "pop": {
    "pos": "adj.",
    "en_def": "(of music) modern and liked by many young people",
    "cn_def": "流行的"
  },
  "popular": {
    "pos": "adj.",
    "en_def": "liked by many people",
    "cn_def": "受歡迎的"
  },
  "difficult": {
    "pos": "adj.",
    "en_def": "hard to do or understand",
    "cn_def": "困難的"
  },
  "special": {
    "pos": "adj.",
    "en_def": "different from others in a good way",
    "cn_def": "特別的"
  },
  "dangerous": {
    "pos": "adj.",
    "en_def": "able to hurt you",
    "cn_def": "危險的"
  },
  "older": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "較舊的；較老的"
  },
  "shorter": {
    "pos": "adj.",
    "en_def": "not tall; not long",
    "cn_def": "矮的；短的"
  },
  "taller": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "較高的"
  },
  "newer": {
    "pos": "adj.",
    "en_def": "just made or bought; not old",
    "cn_def": "新的"
  },
  "oldest": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "最舊的；最老的"
  },
  "longest": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "最長的"
  },
  "latest": {
    "pos": "adj.",
    "en_def": "the newest",
    "cn_def": "最新的"
  },
  "tallest": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "最高的"
  },
  "able": {
    "pos": "adj.",
    "en_def": "having the power or skill to do something",
    "cn_def": "能夠…的"
  },
  "afraid": {
    "pos": "adj.",
    "en_def": "feeling fear",
    "cn_def": "害怕的"
  },
  "sorry": {
    "pos": "int.",
    "en_def": "",
    "cn_def": "抱歉"
  },
  "glad": {
    "pos": "adj.",
    "en_def": "happy about something",
    "cn_def": "高興的"
  },
  "sure": {
    "pos": "adj.",
    "en_def": "knowing that something is true",
    "cn_def": "確定的"
  },
  "ready": {
    "pos": "adj.",
    "en_def": "prepared to do something",
    "cn_def": "準備好的"
  },
  "scared": {
    "pos": "adj.",
    "en_def": "afraid of something",
    "cn_def": "害怕的"
  },
  "surprised": {
    "pos": "adj.",
    "en_def": "feeling that you did not expect something",
    "cn_def": "感到驚訝的"
  },
  "ok": {
    "pos": "adj.",
    "en_def": "all right; fine",
    "cn_def": "沒問題的"
  },
  "favorite": {
    "pos": "adj.",
    "en_def": "liked the most",
    "cn_def": "最喜愛的"
  },
  "dear": {
    "pos": "adj.",
    "en_def": "loved; used at the start of a letter",
    "cn_def": "親愛的"
  },
  "national": {
    "pos": "adj.",
    "en_def": "of a whole country",
    "cn_def": "國家的"
  },
  "possible": {
    "pos": "adj.",
    "en_def": "able to happen or be done",
    "cn_def": "可能的"
  },
  "present": {
    "pos": "n.",
    "en_def": "something you give to someone; a gift",
    "cn_def": "禮物"
  },
  "else": {
    "pos": "adj.",
    "en_def": "different; in addition",
    "cn_def": "別的"
  },
  "own": {
    "pos": "v.",
    "en_def": "to have something that is yours",
    "cn_def": "擁有"
  },
  "only": {
    "pos": "adj.",
    "en_def": "with no other one of the same kind",
    "cn_def": "唯一的"
  },
  "enough": {
    "pos": "adj.",
    "en_def": "as much or as many as you need",
    "cn_def": "足夠的"
  },
  "other": {
    "pos": "pron.",
    "en_def": "the second of two; the ones that are left",
    "cn_def": "其他的（人／物）"
  },
  "main": {
    "pos": "adj.",
    "en_def": "most important",
    "cn_def": "主要的"
  },
  "american": {
    "pos": "n.",
    "en_def": "a person from the United States",
    "cn_def": "美國人"
  }
};

const EXTRA_GLOSSES = {};
