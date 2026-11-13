// Unit 39 Quiz Data: Other Adverbs 其他副詞（第37區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U39 - Other Adverbs",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "always",
    "pos": "adv.",
    "cn_def": "總是",
    "en_def": "every time; all the time",
    "sentence": "Q: How often does Amy walk to school? — A: She {{BLANK}} walks to school. She lives near it.",
    "cn": "艾美多常走路上學？ — 她總是走路上學，她住在學校附近。"
  },
  {
    "word": "usually",
    "pos": "adv.",
    "cn_def": "通常",
    "en_def": "most of the time",
    "sentence": "Q: How often do you get up at seven? — A: I {{BLANK}} get up at seven.",
    "cn": "你多常七點起床？ — 我通常七點起床。"
  },
  {
    "word": "often",
    "pos": "adv.",
    "cn_def": "時常",
    "en_def": "many times",
    "sentence": "Q: How often do your grandparents visit you? — A: They {{BLANK}} visit us. They come every weekend.",
    "cn": "你的祖父母多常來看你？ — 他們常常來看我們，每個週末都來。"
  },
  {
    "word": "sometimes",
    "pos": "adv.",
    "cn_def": "有時候",
    "en_def": "on some days or times, but not always",
    "sentence": "Q: How often do you and your friends play basketball? — A: We {{BLANK}} play basketball after school.",
    "cn": "你和朋友多常打籃球？ — 我們有時候放學後打籃球。"
  },
  {
    "word": "seldom",
    "pos": "adv.",
    "cn_def": "很少",
    "en_def": "not often",
    "sentence": "Q: How often do you eat fast food? — A: I {{BLANK}} eat it. I eat it once a month.",
    "cn": "你多常吃速食？ — 我很少吃，一個月吃一次。"
  },
  {
    "word": "never",
    "pos": "adv.",
    "cn_def": "從不",
    "en_def": "not at any time",
    "sentence": "Q: How often do your parents drink coffee? — A: They {{BLANK}} drink coffee. They drink tea.",
    "cn": "你爸媽多常喝咖啡？ — 他們從不喝咖啡，他們喝茶。"
  },
  {
    "word": "ever",
    "pos": "adv.",
    "cn_def": "曾經；有時",
    "en_def": "at any time",
    "sentence": "Q: Does Lisa {{BLANK}} cook dinner? — A: Yes, she does. She cooks on Sundays.",
    "cn": "麗莎有時會煮晚餐嗎？ — 會，她星期天會煮。"
  },
  {
    "word": "twice",
    "pos": "adv.",
    "cn_def": "兩次",
    "en_def": "two times",
    "sentence": "Q: How often do you brush your teeth? — A: I brush my teeth {{BLANK}} a day.",
    "cn": "你多常刷牙？ — 我一天刷兩次牙。"
  },
  {
    "word": "badly",
    "pos": "adv.",
    "cn_def": "差勁地",
    "en_def": "not well",
    "sentence": "Q: How does Ben sing? — A: He sings {{BLANK}}, but he enjoys singing.",
    "cn": "班唱歌唱得怎麼樣？ — 他唱得很差，但他很喜歡唱歌。"
  },
  {
    "word": "together",
    "pos": "adv.",
    "cn_def": "一起",
    "en_def": "with each other",
    "sentence": "Q: How do you and your brother go to school? — A: We walk to school {{BLANK}}.",
    "cn": "你和你弟弟怎麼上學？ — 我們一起走路上學。"
  },
  {
    "word": "again",
    "pos": "adv.",
    "cn_def": "再一次",
    "en_def": "one more time",
    "sentence": "Q: What do you say when you can't hear the teacher? — A: I say, \"Can you say it {{BLANK}}, please?\"",
    "cn": "你聽不清楚老師說話時會說什麼？ — 我會說：「可以請您再說一次嗎？」"
  },
  {
    "word": "abroad",
    "pos": "adv.",
    "cn_def": "在國外",
    "en_def": "in or to another country",
    "sentence": "Q: Where does your cousin study? — A: She studies {{BLANK}}. She is in Canada now.",
    "cn": "你的表姊在哪裡讀書？ — 她在國外讀書，現在在加拿大。"
  },
  {
    "word": "away",
    "pos": "adv.",
    "cn_def": "離開；不在",
    "en_def": "not here; in another place",
    "sentence": "Q: Is your dad at home this week? — A: No, he isn't. He is {{BLANK}} on a trip.",
    "cn": "你爸爸這週在家嗎？ — 不在，他出門旅行了。"
  },
  {
    "word": "ahead",
    "pos": "adv.",
    "cn_def": "向前；在前方",
    "en_def": "in front; forward",
    "sentence": "Q: How do I get to the train station? — A: Go straight {{BLANK}}. It's on your left.",
    "cn": "我要怎麼去火車站？ — 往前直走，就在你的左邊。"
  },
  {
    "word": "somewhere",
    "pos": "adv.",
    "cn_def": "某處",
    "en_def": "in a place, but we do not know or say where",
    "sentence": "Q: Where does Mom keep the cookies? — A: She keeps them {{BLANK}} in the kitchen. Let's look for them!",
    "cn": "媽媽把餅乾放在哪裡？ — 她放在廚房的某個地方，我們去找吧！"
  },
  {
    "word": "also",
    "pos": "adv.",
    "cn_def": "也",
    "en_def": "too; as well",
    "sentence": "Q: What does your mother do? — A: She is a nurse. She {{BLANK}} teaches English at night.",
    "cn": "你媽媽做什麼工作？ — 她是護士，晚上也教英文。"
  },
  {
    "word": "too",
    "pos": "adv.",
    "cn_def": "也",
    "en_def": "also; as well",
    "sentence": "Q: I like dogs. Do you like dogs? — A: Yes, I do. I like dogs, {{BLANK}}.",
    "cn": "我喜歡狗，你喜歡狗嗎？ — 喜歡，我也喜歡狗。"
  },
  {
    "word": "either",
    "pos": "adv.",
    "cn_def": "也（不）",
    "en_def": "also (used with \"not\")",
    "sentence": "Q: Ben doesn't like tea. Does his sister like tea? — A: No, she doesn't. She doesn't like tea, {{BLANK}}.",
    "cn": "班不喜歡茶，他妹妹喜歡茶嗎？ — 不喜歡，她也不喜歡茶。"
  },
  {
    "word": "still",
    "pos": "adv.",
    "cn_def": "仍然",
    "en_def": "continuing until now",
    "sentence": "Q: Does your grandpa work? He is seventy. — A: Yes, he does. He {{BLANK}} works on his farm.",
    "cn": "你爺爺還在工作嗎？他七十歲了。 — 是的，他仍然在他的農場工作。"
  },
  {
    "word": "yet",
    "pos": "adv.",
    "cn_def": "還（沒）",
    "en_def": "up to now (used with \"not\")",
    "sentence": "Q: Does your little brother go to school? — A: No, he doesn't. He doesn't go to school {{BLANK}}. He is four.",
    "cn": "你弟弟上學了嗎？ — 還沒，他還沒上學，他四歲。"
  },
  {
    "word": "just",
    "pos": "adv.",
    "cn_def": "只是；只",
    "en_def": "only",
    "sentence": "Q: Do you want a big lunch? — A: No, I don't. I {{BLANK}} want a sandwich.",
    "cn": "你午餐想吃很多嗎？ — 不，我只想要一個三明治。"
  },
  {
    "word": "very",
    "pos": "adv.",
    "cn_def": "非常",
    "en_def": "a lot; to a great degree",
    "sentence": "Q: How do the cookies taste? — A: They taste {{BLANK}} good. Can I have more?",
    "cn": "這些餅乾吃起來怎樣？ — 非常好吃，我可以再吃一些嗎？"
  },
  {
    "word": "so",
    "pos": "adv.",
    "cn_def": "如此地；好",
    "en_def": "very; to such a degree",
    "sentence": "Q: Do you like the new puppy? — A: Yes, I do. It's {{BLANK}} cute!",
    "cn": "你喜歡這隻新小狗嗎？ — 喜歡，牠好可愛！"
  },
  {
    "word": "quite",
    "pos": "adv.",
    "cn_def": "相當",
    "en_def": "more than a little, but not very",
    "sentence": "Q: Is the math test hard? — A: No, it isn't. It's {{BLANK}} easy.",
    "cn": "數學考試難嗎？ — 不難，相當簡單。"
  },
  {
    "word": "really",
    "pos": "adv.",
    "cn_def": "真地",
    "en_def": "very; truly",
    "sentence": "Q: Do your parents like the new house? — A: Yes, they do. They {{BLANK}} like the big garden.",
    "cn": "你爸媽喜歡新房子嗎？ — 喜歡，他們真的很喜歡那個大花園。"
  },
  {
    "word": "almost",
    "pos": "adv.",
    "cn_def": "幾乎；差不多",
    "en_def": "nearly; not quite",
    "sentence": "Q: Does the movie start soon? — A: Yes, it does. It's {{BLANK}} seven o'clock.",
    "cn": "電影快開始了嗎？ — 是的，差不多七點了。"
  },
  {
    "word": "even",
    "pos": "adv.",
    "cn_def": "甚至；更",
    "en_def": "used to make \"more\" or \"faster\" stronger; used to show surprise",
    "sentence": "Q: Does Tom run fast? — A: Yes, he does. He runs {{BLANK}} faster than his big brother.",
    "cn": "湯姆跑得快嗎？ — 快，他甚至跑得比他哥哥還快。"
  },
  {
    "word": "only",
    "pos": "adv.",
    "cn_def": "只有；僅",
    "en_def": "just; and no more",
    "sentence": "Q: How many pens do you have? — A: I {{BLANK}} have one pen. Can I borrow one?",
    "cn": "你有幾支筆？ — 我只有一支筆，可以借我一支嗎？"
  },
  {
    "word": "least",
    "pos": "adv.",
    "cn_def": "最不",
    "en_def": "less than all the others",
    "sentence": "Q: Which bag do you want to buy? — A: I want the {{BLANK}} expensive one. It's $100.",
    "cn": "你想買哪一個包包？ — 我要最便宜的那個，一百元。"
  },
  {
    "word": "maybe",
    "pos": "adv.",
    "cn_def": "也許",
    "en_def": "perhaps; it could be",
    "sentence": "Q: Does Amy know the answer? — A: {{BLANK}} she does. Let's ask her.",
    "cn": "艾美知道答案嗎？ — 也許她知道，我們問她吧。"
  },
  {
    "word": "perhaps",
    "pos": "adv.",
    "cn_def": "或許",
    "en_def": "maybe; it could be",
    "sentence": "Q: What do you want to do this weekend? — A: {{BLANK}} we can go to the zoo.",
    "cn": "你這個週末想做什麼？ — 或許我們可以去動物園。"
  },
  {
    "word": "probably",
    "pos": "adv.",
    "cn_def": "很可能",
    "en_def": "very likely to be true or to happen",
    "sentence": "Q: Do we need an umbrella today? — A: Yes, we do. It will {{BLANK}} rain this afternoon.",
    "cn": "我們今天需要帶傘嗎？ — 需要，今天下午很可能會下雨。"
  },
  {
    "word": "actually",
    "pos": "adv.",
    "cn_def": "事實上",
    "en_def": "in fact; really",
    "sentence": "Q: Does Mr. Smith come from America? — A: No, he doesn't. {{BLANK}}, he comes from Canada.",
    "cn": "史密斯先生來自美國嗎？ — 不是，事實上，他來自加拿大。"
  },
  {
    "word": "then",
    "pos": "adv.",
    "cn_def": "然後；那時",
    "en_def": "after that; next",
    "sentence": "Q: What do you do after school? — A: I do my homework first, and {{BLANK}} I play games.",
    "cn": "你放學後做什麼？ — 我先寫功課，然後玩遊戲。"
  },
  {
    "word": "finally",
    "pos": "adv.",
    "cn_def": "終於；最後",
    "en_def": "after a long time; at last",
    "sentence": "Q: How long does Tom wait for the bus? — A: He waits for thirty minutes, and the bus {{BLANK}} comes.",
    "cn": "湯姆等公車等多久？ — 他等了三十分鐘，公車終於來了。"
  },
  {
    "word": "yes (yeah)",
    "pos": "adv.",
    "cn_def": "是；對",
    "en_def": "a word you say to agree or to answer \"that is right\"",
    "sentence": "Q: Do you like apples? — A: {{BLANK}}, I do. They are sweet.",
    "cn": "你喜歡蘋果嗎？ — 是的，我喜歡，它們很甜。",
    "alts": [
      "yeah"
    ]
  },
  {
    "word": "no",
    "pos": "adv.",
    "cn_def": "不；沒有",
    "en_def": "a word you say when you do not agree or do not want something",
    "sentence": "Q: Does Lisa have a pet? — A: {{BLANK}}, she doesn't. Her mom doesn't like animals.",
    "cn": "麗莎有養寵物嗎？ — 沒有，她媽媽不喜歡動物。"
  },
  {
    "word": "not",
    "pos": "adv.",
    "cn_def": "不（否定）",
    "en_def": "a word that gives the opposite meaning",
    "sentence": "Q: Does Ben like math? — A: No, he does {{BLANK}}. He likes English.",
    "cn": "班喜歡數學嗎？ — 不，他不喜歡，他喜歡英文。"
  },
  {
    "word": "OK",
    "pos": "adv.",
    "cn_def": "好；可以",
    "en_def": "all right; yes",
    "sentence": "Q: Can I sit here? — A: {{BLANK}}. Sit down, please.",
    "cn": "我可以坐這裡嗎？ — 好，請坐。"
  }
];

const MCQS = [
  {
    "q": "Lisa is never late. She ______ comes to school on time.",
    "options": [
      "seldom",
      "never",
      "always",
      "twice"
    ],
    "answer": 2,
    "cn": "艾美多常走路上學？ — 她總是走路上學，她住在學校附近。",
    "vocabIndex": 0
  },
  {
    "q": "I ______ walk to school, but today I took the bus because of the rain.",
    "options": [
      "never",
      "twice",
      "abroad",
      "usually"
    ],
    "answer": 3,
    "cn": "你多常七點起床？ — 我通常七點起床。",
    "vocabIndex": 1
  },
  {
    "q": "I ______ go to the library, about three or four times a week.",
    "options": [
      "never",
      "often",
      "seldom",
      "twice"
    ],
    "answer": 1,
    "cn": "你的祖父母多常來看你？ — 他們常常來看我們，每個週末都來。",
    "vocabIndex": 2
  },
  {
    "q": "I usually have rice for dinner, but ______ I have noodles.",
    "options": [
      "sometimes",
      "never",
      "twice",
      "abroad"
    ],
    "answer": 0,
    "cn": "你和朋友多常打籃球？ — 我們有時候放學後打籃球。",
    "vocabIndex": 3
  },
  {
    "q": "Ben ______ eats candy. He only has some once or twice a year.",
    "options": [
      "always",
      "often",
      "seldom",
      "usually"
    ],
    "answer": 2,
    "cn": "你多常吃速食？ — 我很少吃，一個月吃一次。",
    "vocabIndex": 4
  },
  {
    "q": "I have ______ been to Japan. I hope to go there for the first time next year.",
    "options": [
      "always",
      "never",
      "often",
      "twice"
    ],
    "answer": 1,
    "cn": "你爸媽多常喝咖啡？ — 他們從不喝咖啡，他們喝茶。",
    "vocabIndex": 5
  },
  {
    "q": "Have you ______ seen a panda? Yes, I saw one at the zoo last year.",
    "options": [
      "ever",
      "never",
      "twice",
      "badly"
    ],
    "answer": 0,
    "cn": "麗莎有時會煮晚餐嗎？ — 會，她星期天會煮。",
    "vocabIndex": 6
  },
  {
    "q": "I brush my teeth ______ a day, once in the morning and once at night.",
    "options": [
      "never",
      "ever",
      "badly",
      "twice"
    ],
    "answer": 3,
    "cn": "你多常刷牙？ — 我一天刷兩次牙。",
    "vocabIndex": 7
  },
  {
    "q": "Our team played ______ today, so we lost the game 0 to 5.",
    "options": [
      "together",
      "again",
      "badly",
      "abroad"
    ],
    "answer": 2,
    "cn": "班唱歌唱得怎麼樣？ — 他唱得很差，但他很喜歡唱歌。",
    "vocabIndex": 8
  },
  {
    "q": "My family always eats dinner ______. We sit at one big table and talk.",
    "options": [
      "abroad",
      "together",
      "badly",
      "ahead"
    ],
    "answer": 1,
    "cn": "你和你弟弟怎麼上學？ — 我們一起走路上學。",
    "vocabIndex": 9
  },
  {
    "q": "I didn't hear you. Could you say that ______, please?",
    "options": [
      "again",
      "abroad",
      "badly",
      "ahead"
    ],
    "answer": 0,
    "cn": "你聽不清楚老師說話時會說什麼？ — 我會說：「可以請您再說一次嗎？」",
    "vocabIndex": 10
  },
  {
    "q": "My sister is studying ______. She has been in America for two years.",
    "options": [
      "together",
      "again",
      "ahead",
      "abroad"
    ],
    "answer": 3,
    "cn": "你的表姊在哪裡讀書？ — 她在國外讀書，現在在加拿大。",
    "vocabIndex": 11
  },
  {
    "q": "Go ______! I don't want to talk to you now.",
    "options": [
      "away",
      "together",
      "again",
      "twice"
    ],
    "answer": 0,
    "cn": "你爸爸這週在家嗎？ — 不在，他出門旅行了。",
    "vocabIndex": 12
  },
  {
    "q": "Go straight ______ for two blocks. The bank is on your left.",
    "options": [
      "together",
      "ahead",
      "again",
      "abroad"
    ],
    "answer": 1,
    "cn": "我要怎麼去火車站？ — 往前直走，就在你的左邊。",
    "vocabIndex": 13
  },
  {
    "q": "I can't find my keys. I left them ______ in the house, but I don't know where.",
    "options": [
      "together",
      "again",
      "somewhere",
      "abroad"
    ],
    "answer": 2,
    "cn": "媽媽把餅乾放在哪裡？ — 她放在廚房的某個地方，我們去找吧！",
    "vocabIndex": 14
  },
  {
    "q": "My sister can play the piano. She can ______ play the guitar.",
    "options": [
      "either",
      "yet",
      "too",
      "also"
    ],
    "answer": 3,
    "cn": "你媽媽做什麼工作？ — 她是護士，晚上也教英文。",
    "vocabIndex": 15
  },
  {
    "q": "I like ice cream, and my brother likes it, ______.",
    "options": [
      "too",
      "either",
      "also",
      "yet"
    ],
    "answer": 0,
    "cn": "我喜歡狗，你喜歡狗嗎？ — 喜歡，我也喜歡狗。",
    "vocabIndex": 16
  },
  {
    "q": "I don't like coffee, and my sister doesn't like it, ______.",
    "options": [
      "too",
      "also",
      "either",
      "still"
    ],
    "answer": 2,
    "cn": "班不喜歡茶，他妹妹喜歡茶嗎？ — 不喜歡，她也不喜歡茶。",
    "vocabIndex": 17
  },
  {
    "q": "It is eleven o'clock at night, but Dad is ______ working in his office.",
    "options": [
      "yet",
      "still",
      "either",
      "too"
    ],
    "answer": 1,
    "cn": "你爺爺還在工作嗎？他七十歲了。 — 是的，他仍然在他的農場工作。",
    "vocabIndex": 18
  },
  {
    "q": "I haven't finished my homework ______. I need thirty more minutes.",
    "options": [
      "still",
      "too",
      "either",
      "yet"
    ],
    "answer": 3,
    "cn": "你弟弟上學了嗎？ — 還沒，他還沒上學，他四歲。",
    "vocabIndex": 19
  },
  {
    "q": "I don't want a big meal. I ______ want a sandwich and a glass of water.",
    "options": [
      "yet",
      "either",
      "just",
      "too"
    ],
    "answer": 2,
    "cn": "你午餐想吃很多嗎？ — 不，我只想要一個三明治。",
    "vocabIndex": 20
  },
  {
    "q": "This box is ______ heavy. I can't lift it by myself.",
    "options": [
      "yet",
      "either",
      "twice",
      "very"
    ],
    "answer": 3,
    "cn": "這些餅乾吃起來怎樣？ — 非常好吃，我可以再吃一些嗎？",
    "vocabIndex": 21
  },
  {
    "q": "The movie was ______ boring that I fell asleep in the theater.",
    "options": [
      "very",
      "so",
      "quite",
      "really"
    ],
    "answer": 1,
    "cn": "你喜歡這隻新小狗嗎？ — 喜歡，牠好可愛！",
    "vocabIndex": 22
  },
  {
    "q": "The test was ______ easy, but not very easy. I got eighty points.",
    "options": [
      "quite",
      "yet",
      "either",
      "twice"
    ],
    "answer": 0,
    "cn": "數學考試難嗎？ — 不難，相當簡單。",
    "vocabIndex": 23
  },
  {
    "q": "Do you ______ want to quit the team? Please think about it again.",
    "options": [
      "very",
      "yet",
      "really",
      "either"
    ],
    "answer": 2,
    "cn": "你爸媽喜歡新房子嗎？ — 喜歡，他們真的很喜歡那個大花園。",
    "vocabIndex": 24
  },
  {
    "q": "It is ______ ten o'clock. It is 9:58 now, so we have to hurry.",
    "options": [
      "even",
      "almost",
      "yet",
      "either"
    ],
    "answer": 1,
    "cn": "電影快開始了嗎？ — 是的，差不多七點了。",
    "vocabIndex": 25
  },
  {
    "q": "This question is so easy that ______ a little child can answer it.",
    "options": [
      "even",
      "almost",
      "yet",
      "either"
    ],
    "answer": 0,
    "cn": "湯姆跑得快嗎？ — 快，他甚至跑得比他哥哥還快。",
    "vocabIndex": 26
  },
  {
    "q": "I ______ have ten dollars, so I can't buy the fifty-dollar lunch box.",
    "options": [
      "either",
      "yet",
      "too",
      "only"
    ],
    "answer": 3,
    "cn": "你有幾支筆？ — 我只有一支筆，可以借我一支嗎？",
    "vocabIndex": 27
  },
  {
    "q": "This is the ______ expensive phone in the store. It is cheaper than all the others.",
    "options": [
      "least",
      "most",
      "very",
      "quite"
    ],
    "answer": 0,
    "cn": "你想買哪一個包包？ — 我要最便宜的那個，一百元。",
    "vocabIndex": 28
  },
  {
    "q": "______ it will rain tomorrow. I am not sure, so take an umbrella with you.",
    "options": [
      "Never",
      "Twice",
      "Maybe",
      "Together"
    ],
    "answer": 2,
    "cn": "艾美知道答案嗎？ — 也許她知道，我們問她吧。",
    "vocabIndex": 29
  },
  {
    "q": "______ you are right. I am not sure, but let me think about it again.",
    "options": [
      "Twice",
      "Perhaps",
      "Together",
      "Abroad"
    ],
    "answer": 1,
    "cn": "你這個週末想做什麼？ — 或許我們可以去動物園。",
    "vocabIndex": 30
  },
  {
    "q": "It will ______ rain this afternoon. Look at those dark clouds in the sky.",
    "options": [
      "maybe",
      "twice",
      "abroad",
      "probably"
    ],
    "answer": 3,
    "cn": "我們今天需要帶傘嗎？ — 需要，今天下午很可能會下雨。",
    "vocabIndex": 31
  },
  {
    "q": "He looks very young, but he is ______ fifty years old.",
    "options": [
      "twice",
      "actually",
      "together",
      "abroad"
    ],
    "answer": 1,
    "cn": "史密斯先生來自美國嗎？ — 不是，事實上，他來自加拿大。",
    "vocabIndex": 32
  },
  {
    "q": "First, wash the rice. ______, put it in the pot with some water.",
    "options": [
      "Never",
      "Twice",
      "Abroad",
      "Then"
    ],
    "answer": 3,
    "cn": "你放學後做什麼？ — 我先寫功課，然後玩遊戲。",
    "vocabIndex": 33
  },
  {
    "q": "After we waited for two hours, the bus ______ came.",
    "options": [
      "twice",
      "abroad",
      "finally",
      "together"
    ],
    "answer": 2,
    "cn": "湯姆等公車等多久？ — 他等了三十分鐘，公車終於來了。",
    "vocabIndex": 34
  },
  {
    "q": "\"Do you like dogs?\" \"______, I do. I have two at home.\"",
    "options": [
      "Yes",
      "No",
      "Not",
      "Never"
    ],
    "answer": 0,
    "cn": "你喜歡蘋果嗎？ — 是的，我喜歡，它們很甜。",
    "vocabIndex": 35
  },
  {
    "q": "\"Are you a student?\" \"______, I'm not. I'm a teacher.\"",
    "options": [
      "Yes",
      "No",
      "Not",
      "OK"
    ],
    "answer": 1,
    "cn": "麗莎有養寵物嗎？ — 沒有，她媽媽不喜歡動物。",
    "vocabIndex": 36
  },
  {
    "q": "I am ______ hungry now. I just had a big lunch.",
    "options": [
      "no",
      "yes",
      "twice",
      "not"
    ],
    "answer": 3,
    "cn": "班喜歡數學嗎？ — 不，他不喜歡，他喜歡英文。",
    "vocabIndex": 37
  },
  {
    "q": "\"Can I borrow your pen?\" \"______. Here you are.\"",
    "options": [
      "OK",
      "No",
      "Not",
      "Never"
    ],
    "answer": 0,
    "cn": "我可以坐這裡嗎？ — 好，請坐。",
    "vocabIndex": 38
  }
];

const LOOKUP = {
  "seldom": {
    "pos": "adv.",
    "en_def": "not often",
    "cn_def": "很少"
  },
  "never": {
    "pos": "adv.",
    "en_def": "not at any time",
    "cn_def": "從不"
  },
  "always": {
    "pos": "adv.",
    "en_def": "every time; all the time",
    "cn_def": "總是"
  },
  "twice": {
    "pos": "adv.",
    "en_def": "two times",
    "cn_def": "兩次"
  },
  "abroad": {
    "pos": "adv.",
    "en_def": "in or to another country",
    "cn_def": "在國外"
  },
  "usually": {
    "pos": "adv.",
    "en_def": "most of the time",
    "cn_def": "通常"
  },
  "often": {
    "pos": "adv.",
    "en_def": "many times",
    "cn_def": "時常"
  },
  "sometimes": {
    "pos": "adv.",
    "en_def": "on some days or times, but not always",
    "cn_def": "有時候"
  },
  "ever": {
    "pos": "adv.",
    "en_def": "at any time",
    "cn_def": "曾經；有時"
  },
  "badly": {
    "pos": "adv.",
    "en_def": "not well",
    "cn_def": "差勁地"
  },
  "together": {
    "pos": "adv.",
    "en_def": "with each other",
    "cn_def": "一起"
  },
  "again": {
    "pos": "adv.",
    "en_def": "one more time",
    "cn_def": "再一次"
  },
  "ahead": {
    "pos": "adv.",
    "en_def": "in front; forward",
    "cn_def": "向前；在前方"
  },
  "away": {
    "pos": "adv.",
    "en_def": "not here; in another place",
    "cn_def": "離開；不在"
  },
  "somewhere": {
    "pos": "adv.",
    "en_def": "in a place, but we do not know or say where",
    "cn_def": "某處"
  },
  "either": {
    "pos": "adv.",
    "en_def": "also (used with \"not\")",
    "cn_def": "也（不）"
  },
  "yet": {
    "pos": "adv.",
    "en_def": "up to now (used with \"not\")",
    "cn_def": "還（沒）"
  },
  "too": {
    "pos": "adv.",
    "en_def": "also; as well",
    "cn_def": "也"
  },
  "also": {
    "pos": "adv.",
    "en_def": "too; as well",
    "cn_def": "也"
  },
  "still": {
    "pos": "adv.",
    "en_def": "continuing until now",
    "cn_def": "仍然"
  },
  "just": {
    "pos": "adv.",
    "en_def": "only",
    "cn_def": "只是；只"
  },
  "very": {
    "pos": "adv.",
    "en_def": "a lot; to a great degree",
    "cn_def": "非常"
  },
  "so": {
    "pos": "adv.",
    "en_def": "very; to such a degree",
    "cn_def": "如此地；好"
  },
  "quite": {
    "pos": "adv.",
    "en_def": "more than a little, but not very",
    "cn_def": "相當"
  },
  "really": {
    "pos": "adv.",
    "en_def": "very; truly",
    "cn_def": "真地"
  },
  "even": {
    "pos": "adv.",
    "en_def": "used to make \"more\" or \"faster\" stronger; used to show surprise",
    "cn_def": "甚至；更"
  },
  "almost": {
    "pos": "adv.",
    "en_def": "nearly; not quite",
    "cn_def": "幾乎；差不多"
  },
  "only": {
    "pos": "adj.",
    "en_def": "with no other one of the same kind",
    "cn_def": "唯一的"
  },
  "least": {
    "pos": "adv.",
    "en_def": "less than all the others",
    "cn_def": "最不"
  },
  "most": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "最"
  },
  "maybe": {
    "pos": "adv.",
    "en_def": "perhaps; it could be",
    "cn_def": "也許"
  },
  "perhaps": {
    "pos": "adv.",
    "en_def": "maybe; it could be",
    "cn_def": "或許"
  },
  "probably": {
    "pos": "adv.",
    "en_def": "very likely to be true or to happen",
    "cn_def": "很可能"
  },
  "actually": {
    "pos": "adv.",
    "en_def": "in fact; really",
    "cn_def": "事實上"
  },
  "then": {
    "pos": "adv.",
    "en_def": "after that; next",
    "cn_def": "然後；那時"
  },
  "finally": {
    "pos": "adv.",
    "en_def": "after a long time; at last",
    "cn_def": "終於；最後"
  },
  "yes": {
    "pos": "adv.",
    "en_def": "a word you say to agree or to answer \"that is right\"",
    "cn_def": "是；對"
  },
  "no": {
    "pos": "adv.",
    "en_def": "a word you say when you do not agree or do not want something",
    "cn_def": "不；沒有"
  },
  "not": {
    "pos": "adv.",
    "en_def": "a word that gives the opposite meaning",
    "cn_def": "不（否定）"
  },
  "ok": {
    "pos": "adj.",
    "en_def": "all right; fine",
    "cn_def": "沒問題的"
  }
};

const EXTRA_GLOSSES = {};
