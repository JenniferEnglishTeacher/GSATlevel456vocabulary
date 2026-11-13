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
    "en_def": "",
    "sentence": "Q: How often does Amy walk to school? — A: She {{BLANK}} walks to school. She lives near it.",
    "cn": "艾美多常走路上學？ — 她總是走路上學，她住在學校附近。"
  },
  {
    "word": "usually",
    "pos": "adv.",
    "cn_def": "通常",
    "en_def": "",
    "sentence": "Q: How often do you get up at seven? — A: I {{BLANK}} get up at seven.",
    "cn": "你多常七點起床？ — 我通常七點起床。"
  },
  {
    "word": "often",
    "pos": "adv.",
    "cn_def": "時常",
    "en_def": "",
    "sentence": "Q: How often do your grandparents visit you? — A: They {{BLANK}} visit us. They come every weekend.",
    "cn": "你的祖父母多常來看你？ — 他們常常來看我們，每個週末都來。"
  },
  {
    "word": "sometimes",
    "pos": "adv.",
    "cn_def": "有時候",
    "en_def": "",
    "sentence": "Q: How often do you and your friends play basketball? — A: We {{BLANK}} play basketball after school.",
    "cn": "你和朋友多常打籃球？ — 我們有時候放學後打籃球。"
  },
  {
    "word": "seldom",
    "pos": "adv.",
    "cn_def": "很少",
    "en_def": "",
    "sentence": "Q: How often do you eat fast food? — A: I {{BLANK}} eat it. I eat it once a month.",
    "cn": "你多常吃速食？ — 我很少吃，一個月吃一次。"
  },
  {
    "word": "never",
    "pos": "adv.",
    "cn_def": "從不",
    "en_def": "",
    "sentence": "Q: How often do your parents drink coffee? — A: They {{BLANK}} drink coffee. They drink tea.",
    "cn": "你爸媽多常喝咖啡？ — 他們從不喝咖啡，他們喝茶。"
  },
  {
    "word": "ever",
    "pos": "adv.",
    "cn_def": "曾經；有時",
    "en_def": "",
    "sentence": "Q: Does Lisa {{BLANK}} cook dinner? — A: Yes, she does. She cooks on Sundays.",
    "cn": "麗莎有時會煮晚餐嗎？ — 會，她星期天會煮。"
  },
  {
    "word": "twice",
    "pos": "adv.",
    "cn_def": "兩次",
    "en_def": "",
    "sentence": "Q: How often do you brush your teeth? — A: I brush my teeth {{BLANK}} a day.",
    "cn": "你多常刷牙？ — 我一天刷兩次牙。"
  },
  {
    "word": "badly",
    "pos": "adv.",
    "cn_def": "差勁地",
    "en_def": "",
    "sentence": "Q: How does Ben sing? — A: He sings {{BLANK}}, but he enjoys singing.",
    "cn": "班唱歌唱得怎麼樣？ — 他唱得很差，但他很喜歡唱歌。"
  },
  {
    "word": "together",
    "pos": "adv.",
    "cn_def": "一起",
    "en_def": "",
    "sentence": "Q: How do you and your brother go to school? — A: We walk to school {{BLANK}}.",
    "cn": "你和你弟弟怎麼上學？ — 我們一起走路上學。"
  },
  {
    "word": "again",
    "pos": "adv.",
    "cn_def": "再一次",
    "en_def": "",
    "sentence": "Q: What do you say when you can't hear the teacher? — A: I say, \"Can you say it {{BLANK}}, please?\"",
    "cn": "你聽不清楚老師說話時會說什麼？ — 我會說：「可以請您再說一次嗎？」"
  },
  {
    "word": "abroad",
    "pos": "adv.",
    "cn_def": "在國外",
    "en_def": "",
    "sentence": "Q: Where does your cousin study? — A: She studies {{BLANK}}. She is in Canada now.",
    "cn": "你的表姊在哪裡讀書？ — 她在國外讀書，現在在加拿大。"
  },
  {
    "word": "away",
    "pos": "adv.",
    "cn_def": "離開；不在",
    "en_def": "",
    "sentence": "Q: Is your dad at home this week? — A: No, he isn't. He is {{BLANK}} on a trip.",
    "cn": "你爸爸這週在家嗎？ — 不在，他出門旅行了。"
  },
  {
    "word": "ahead",
    "pos": "adv.",
    "cn_def": "向前；在前方",
    "en_def": "",
    "sentence": "Q: How do I get to the train station? — A: Go straight {{BLANK}}. It's on your left.",
    "cn": "我要怎麼去火車站？ — 往前直走，就在你的左邊。"
  },
  {
    "word": "somewhere",
    "pos": "adv.",
    "cn_def": "某處",
    "en_def": "",
    "sentence": "Q: Where does Mom keep the cookies? — A: She keeps them {{BLANK}} in the kitchen. Let's look for them!",
    "cn": "媽媽把餅乾放在哪裡？ — 她放在廚房的某個地方，我們去找吧！"
  },
  {
    "word": "also",
    "pos": "adv.",
    "cn_def": "也",
    "en_def": "",
    "sentence": "Q: What does your mother do? — A: She is a nurse. She {{BLANK}} teaches English at night.",
    "cn": "你媽媽做什麼工作？ — 她是護士，晚上也教英文。"
  },
  {
    "word": "too",
    "pos": "adv.",
    "cn_def": "也",
    "en_def": "",
    "sentence": "Q: I like dogs. Do you like dogs? — A: Yes, I do. I like dogs, {{BLANK}}.",
    "cn": "我喜歡狗，你喜歡狗嗎？ — 喜歡，我也喜歡狗。"
  },
  {
    "word": "either",
    "pos": "adv.",
    "cn_def": "也（不）",
    "en_def": "",
    "sentence": "Q: Ben doesn't like tea. Does his sister like tea? — A: No, she doesn't. She doesn't like tea, {{BLANK}}.",
    "cn": "班不喜歡茶，他妹妹喜歡茶嗎？ — 不喜歡，她也不喜歡茶。"
  },
  {
    "word": "still",
    "pos": "adv.",
    "cn_def": "仍然",
    "en_def": "",
    "sentence": "Q: Does your grandpa work? He is seventy. — A: Yes, he does. He {{BLANK}} works on his farm.",
    "cn": "你爺爺還在工作嗎？他七十歲了。 — 是的，他仍然在他的農場工作。"
  },
  {
    "word": "yet",
    "pos": "adv.",
    "cn_def": "還（沒）",
    "en_def": "",
    "sentence": "Q: Does your little brother go to school? — A: No, he doesn't. He doesn't go to school {{BLANK}}. He is four.",
    "cn": "你弟弟上學了嗎？ — 還沒，他還沒上學，他四歲。"
  },
  {
    "word": "just",
    "pos": "adv.",
    "cn_def": "只是；只",
    "en_def": "",
    "sentence": "Q: Do you want a big lunch? — A: No, I don't. I {{BLANK}} want a sandwich.",
    "cn": "你午餐想吃很多嗎？ — 不，我只想要一個三明治。"
  },
  {
    "word": "very",
    "pos": "adv.",
    "cn_def": "非常",
    "en_def": "",
    "sentence": "Q: How do the cookies taste? — A: They taste {{BLANK}} good. Can I have more?",
    "cn": "這些餅乾吃起來怎樣？ — 非常好吃，我可以再吃一些嗎？"
  },
  {
    "word": "so",
    "pos": "adv.",
    "cn_def": "如此地；好",
    "en_def": "",
    "sentence": "Q: Do you like the new puppy? — A: Yes, I do. It's {{BLANK}} cute!",
    "cn": "你喜歡這隻新小狗嗎？ — 喜歡，牠好可愛！"
  },
  {
    "word": "quite",
    "pos": "adv.",
    "cn_def": "相當",
    "en_def": "",
    "sentence": "Q: Is the math test hard? — A: No, it isn't. It's {{BLANK}} easy.",
    "cn": "數學考試難嗎？ — 不難，相當簡單。"
  },
  {
    "word": "really",
    "pos": "adv.",
    "cn_def": "真地",
    "en_def": "",
    "sentence": "Q: Do your parents like the new house? — A: Yes, they do. They {{BLANK}} like the big garden.",
    "cn": "你爸媽喜歡新房子嗎？ — 喜歡，他們真的很喜歡那個大花園。"
  },
  {
    "word": "almost",
    "pos": "adv.",
    "cn_def": "幾乎；差不多",
    "en_def": "",
    "sentence": "Q: Does the movie start soon? — A: Yes, it does. It's {{BLANK}} seven o'clock.",
    "cn": "電影快開始了嗎？ — 是的，差不多七點了。"
  },
  {
    "word": "even",
    "pos": "adv.",
    "cn_def": "甚至；更",
    "en_def": "",
    "sentence": "Q: Does Tom run fast? — A: Yes, he does. He runs {{BLANK}} faster than his big brother.",
    "cn": "湯姆跑得快嗎？ — 快，他甚至跑得比他哥哥還快。"
  },
  {
    "word": "only",
    "pos": "adv.",
    "cn_def": "只有；僅",
    "en_def": "",
    "sentence": "Q: How many pens do you have? — A: I {{BLANK}} have one pen. Can I borrow one?",
    "cn": "你有幾支筆？ — 我只有一支筆，可以借我一支嗎？"
  },
  {
    "word": "least",
    "pos": "adv.",
    "cn_def": "最不",
    "en_def": "",
    "sentence": "Q: Which bag do you want to buy? — A: I want the {{BLANK}} expensive one. It's $100.",
    "cn": "你想買哪一個包包？ — 我要最便宜的那個，一百元。"
  },
  {
    "word": "maybe",
    "pos": "adv.",
    "cn_def": "也許",
    "en_def": "",
    "sentence": "Q: Does Amy know the answer? — A: {{BLANK}} she does. Let's ask her.",
    "cn": "艾美知道答案嗎？ — 也許她知道，我們問她吧。"
  },
  {
    "word": "perhaps",
    "pos": "adv.",
    "cn_def": "或許",
    "en_def": "",
    "sentence": "Q: What do you want to do this weekend? — A: {{BLANK}} we can go to the zoo.",
    "cn": "你這個週末想做什麼？ — 或許我們可以去動物園。"
  },
  {
    "word": "probably",
    "pos": "adv.",
    "cn_def": "很可能",
    "en_def": "",
    "sentence": "Q: Do we need an umbrella today? — A: Yes, we do. It will {{BLANK}} rain this afternoon.",
    "cn": "我們今天需要帶傘嗎？ — 需要，今天下午很可能會下雨。"
  },
  {
    "word": "actually",
    "pos": "adv.",
    "cn_def": "事實上",
    "en_def": "",
    "sentence": "Q: Does Mr. Smith come from America? — A: No, he doesn't. {{BLANK}}, he comes from Canada.",
    "cn": "史密斯先生來自美國嗎？ — 不是，事實上，他來自加拿大。"
  },
  {
    "word": "then",
    "pos": "adv.",
    "cn_def": "然後；那時",
    "en_def": "",
    "sentence": "Q: What do you do after school? — A: I do my homework first, and {{BLANK}} I play games.",
    "cn": "你放學後做什麼？ — 我先寫功課，然後玩遊戲。"
  },
  {
    "word": "finally",
    "pos": "adv.",
    "cn_def": "終於；最後",
    "en_def": "",
    "sentence": "Q: How long does Tom wait for the bus? — A: He waits for thirty minutes, and the bus {{BLANK}} comes.",
    "cn": "湯姆等公車等多久？ — 他等了三十分鐘，公車終於來了。"
  },
  {
    "word": "yes (yeah)",
    "pos": "adv.",
    "cn_def": "是；對",
    "en_def": "",
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
    "en_def": "",
    "sentence": "Q: Does Lisa have a pet? — A: {{BLANK}}, she doesn't. Her mom doesn't like animals.",
    "cn": "麗莎有養寵物嗎？ — 沒有，她媽媽不喜歡動物。"
  },
  {
    "word": "not",
    "pos": "adv.",
    "cn_def": "不（否定）",
    "en_def": "",
    "sentence": "Q: Does Ben like math? — A: No, he does {{BLANK}}. He likes English.",
    "cn": "班喜歡數學嗎？ — 不，他不喜歡，他喜歡英文。"
  },
  {
    "word": "OK",
    "pos": "adv.",
    "cn_def": "好；可以",
    "en_def": "",
    "sentence": "Q: Can I sit here? — A: {{BLANK}}. Sit down, please.",
    "cn": "我可以坐這裡嗎？ — 好，請坐。"
  }
];

const MCQS = [
  {
    "q": "Q: How often does Amy walk to school? — A: She ______ walks to school. She lives near it.【總是】",
    "options": [
      "perhaps",
      "yes",
      "sometimes",
      "always"
    ],
    "answer": 3,
    "cn": "艾美多常走路上學？ — 她總是走路上學，她住在學校附近。",
    "vocabIndex": 0
  },
  {
    "q": "Q: How often do you get up at seven? — A: I ______ get up at seven.【通常】",
    "options": [
      "no",
      "badly",
      "usually",
      "twice"
    ],
    "answer": 2,
    "cn": "你多常七點起床？ — 我通常七點起床。",
    "vocabIndex": 1
  },
  {
    "q": "Q: How often do your grandparents visit you? — A: They ______ visit us. They come every weekend.【時常】",
    "options": [
      "maybe",
      "often",
      "together",
      "just"
    ],
    "answer": 1,
    "cn": "你的祖父母多常來看你？ — 他們常常來看我們，每個週末都來。",
    "vocabIndex": 2
  },
  {
    "q": "Q: How often do you and your friends play basketball? — A: We ______ play basketball after school.【有時候】",
    "options": [
      "sometimes",
      "perhaps",
      "always",
      "yes"
    ],
    "answer": 0,
    "cn": "你和朋友多常打籃球？ — 我們有時候放學後打籃球。",
    "vocabIndex": 3
  },
  {
    "q": "Q: How often do you eat fast food? — A: I ______ eat it. I eat it once a month.【很少】",
    "options": [
      "not",
      "seldom",
      "away",
      "probably"
    ],
    "answer": 1,
    "cn": "你多常吃速食？ — 我很少吃，一個月吃一次。",
    "vocabIndex": 4
  },
  {
    "q": "Q: How often do your parents drink coffee? — A: They ______ drink coffee. They drink tea.【從不】",
    "options": [
      "twice",
      "maybe",
      "never",
      "OK"
    ],
    "answer": 2,
    "cn": "你爸媽多常喝咖啡？ — 他們從不喝咖啡，他們喝茶。",
    "vocabIndex": 5
  },
  {
    "q": "Q: Does Lisa ______ cook dinner? — A: Yes, she does. She cooks on Sundays.【曾經；有時】",
    "options": [
      "again",
      "seldom",
      "only",
      "ever"
    ],
    "answer": 3,
    "cn": "麗莎有時會煮晚餐嗎？ — 會，她星期天會煮。",
    "vocabIndex": 6
  },
  {
    "q": "Q: How often do you brush your teeth? — A: I brush my teeth ______ a day.【兩次】",
    "options": [
      "twice",
      "very",
      "even",
      "never"
    ],
    "answer": 0,
    "cn": "你多常刷牙？ — 我一天刷兩次牙。",
    "vocabIndex": 7
  },
  {
    "q": "Q: How does Ben sing? — A: He sings ______, but he enjoys singing.【差勁地】",
    "options": [
      "seldom",
      "actually",
      "badly",
      "least"
    ],
    "answer": 2,
    "cn": "班唱歌唱得怎麼樣？ — 他唱得很差，但他很喜歡唱歌。",
    "vocabIndex": 8
  },
  {
    "q": "Q: How do you and your brother go to school? — A: We walk to school ______.【一起】",
    "options": [
      "together",
      "even",
      "usually",
      "probably"
    ],
    "answer": 0,
    "cn": "你和你弟弟怎麼上學？ — 我們一起走路上學。",
    "vocabIndex": 9
  },
  {
    "q": "Q: What do you say when you can't hear the teacher? — A: I say, \"Can you say it ______, please?\"【再一次】",
    "options": [
      "really",
      "again",
      "no",
      "ahead"
    ],
    "answer": 1,
    "cn": "你聽不清楚老師說話時會說什麼？ — 我會說：「可以請您再說一次嗎？」",
    "vocabIndex": 10
  },
  {
    "q": "Q: Where does your cousin study? — A: She studies ______. She is in Canada now.【在國外】",
    "options": [
      "even",
      "too",
      "badly",
      "abroad"
    ],
    "answer": 3,
    "cn": "你的表姊在哪裡讀書？ — 她在國外讀書，現在在加拿大。",
    "vocabIndex": 11
  },
  {
    "q": "Q: Is your dad at home this week? — A: No, he isn't. He is ______ on a trip.【離開；不在】",
    "options": [
      "away",
      "either",
      "usually",
      "least"
    ],
    "answer": 0,
    "cn": "你爸爸這週在家嗎？ — 不在，他出門旅行了。",
    "vocabIndex": 12
  },
  {
    "q": "Q: How do I get to the train station? — A: Go straight ______. It's on your left.【向前；在前方】",
    "options": [
      "yet",
      "ahead",
      "only",
      "abroad"
    ],
    "answer": 1,
    "cn": "我要怎麼去火車站？ — 往前直走，就在你的左邊。",
    "vocabIndex": 13
  },
  {
    "q": "Q: Where does Mom keep the cookies? — A: She keeps them ______ in the kitchen. Let's look for them!【某處】",
    "options": [
      "still",
      "actually",
      "somewhere",
      "least"
    ],
    "answer": 2,
    "cn": "媽媽把餅乾放在哪裡？ — 她放在廚房的某個地方，我們去找吧！",
    "vocabIndex": 14
  },
  {
    "q": "Q: What does your mother do? — A: She is a nurse. She ______ teaches English at night.【也】",
    "options": [
      "actually",
      "somewhere",
      "just",
      "also"
    ],
    "answer": 3,
    "cn": "你媽媽做什麼工作？ — 她是護士，晚上也教英文。",
    "vocabIndex": 15
  },
  {
    "q": "Q: I like dogs. Do you like dogs? — A: Yes, I do. I like dogs, ______.【也】",
    "options": [
      "together",
      "too",
      "again",
      "twice"
    ],
    "answer": 1,
    "cn": "我喜歡狗，你喜歡狗嗎？ — 喜歡，我也喜歡狗。",
    "vocabIndex": 16
  },
  {
    "q": "Q: Ben doesn't like tea. Does his sister like tea? — A: No, she doesn't. She doesn't like tea, ______.【也（不）】",
    "options": [
      "either",
      "least",
      "really",
      "actually"
    ],
    "answer": 0,
    "cn": "班不喜歡茶，他妹妹喜歡茶嗎？ — 不喜歡，她也不喜歡茶。",
    "vocabIndex": 17
  },
  {
    "q": "Q: Does your grandpa work? He is seventy. — A: Yes, he does. He ______ works on his farm.【仍然】",
    "options": [
      "no",
      "actually",
      "still",
      "quite"
    ],
    "answer": 2,
    "cn": "你爺爺還在工作嗎？他七十歲了。 — 是的，他仍然在他的農場工作。",
    "vocabIndex": 18
  },
  {
    "q": "Q: Does your little brother go to school? — A: No, he doesn't. He doesn't go to school ______. He is four.【還（沒）】",
    "options": [
      "quite",
      "together",
      "too",
      "yet"
    ],
    "answer": 3,
    "cn": "你弟弟上學了嗎？ — 還沒，他還沒上學，他四歲。",
    "vocabIndex": 19
  },
  {
    "q": "Q: Do you want a big lunch? — A: No, I don't. I ______ want a sandwich.【只是；只】",
    "options": [
      "yet",
      "just",
      "finally",
      "abroad"
    ],
    "answer": 1,
    "cn": "你午餐想吃很多嗎？ — 不，我只想要一個三明治。",
    "vocabIndex": 20
  },
  {
    "q": "Q: How do the cookies taste? — A: They taste ______ good. Can I have more?【非常】",
    "options": [
      "maybe",
      "ever",
      "together",
      "very"
    ],
    "answer": 3,
    "cn": "這些餅乾吃起來怎樣？ — 非常好吃，我可以再吃一些嗎？",
    "vocabIndex": 21
  },
  {
    "q": "Q: Do you like the new puppy? — A: Yes, I do. It's ______ cute!【如此地；好】",
    "options": [
      "so",
      "OK",
      "somewhere",
      "usually"
    ],
    "answer": 0,
    "cn": "你喜歡這隻新小狗嗎？ — 喜歡，牠好可愛！",
    "vocabIndex": 22
  },
  {
    "q": "Q: Is the math test hard? — A: No, it isn't. It's ______ easy.【相當】",
    "options": [
      "still",
      "really",
      "quite",
      "finally"
    ],
    "answer": 2,
    "cn": "數學考試難嗎？ — 不難，相當簡單。",
    "vocabIndex": 23
  },
  {
    "q": "Q: Do your parents like the new house? — A: Yes, they do. They ______ like the big garden.【真地】",
    "options": [
      "really",
      "often",
      "yet",
      "very"
    ],
    "answer": 0,
    "cn": "你爸媽喜歡新房子嗎？ — 喜歡，他們真的很喜歡那個大花園。",
    "vocabIndex": 24
  },
  {
    "q": "Q: Does the movie start soon? — A: Yes, it does. It's ______ seven o'clock.【幾乎；差不多】",
    "options": [
      "never",
      "then",
      "almost",
      "either"
    ],
    "answer": 2,
    "cn": "電影快開始了嗎？ — 是的，差不多七點了。",
    "vocabIndex": 25
  },
  {
    "q": "Q: Does Tom run fast? — A: Yes, he does. He runs ______ faster than his big brother.【甚至；更】",
    "options": [
      "either",
      "even",
      "often",
      "badly"
    ],
    "answer": 1,
    "cn": "湯姆跑得快嗎？ — 快，他甚至跑得比他哥哥還快。",
    "vocabIndex": 26
  },
  {
    "q": "Q: How many pens do you have? — A: I ______ have one pen. Can I borrow one?【只有；僅】",
    "options": [
      "either",
      "also",
      "actually",
      "only"
    ],
    "answer": 3,
    "cn": "你有幾支筆？ — 我只有一支筆，可以借我一支嗎？",
    "vocabIndex": 27
  },
  {
    "q": "Q: Which bag do you want to buy? — A: I want the ______ expensive one. It's $100.【最不】",
    "options": [
      "also",
      "least",
      "still",
      "quite"
    ],
    "answer": 1,
    "cn": "你想買哪一個包包？ — 我要最便宜的那個，一百元。",
    "vocabIndex": 28
  },
  {
    "q": "Q: Does Amy know the answer? — A: ______ she does. Let's ask her.【也許】",
    "options": [
      "OK",
      "Ever",
      "Then",
      "Maybe"
    ],
    "answer": 3,
    "cn": "艾美知道答案嗎？ — 也許她知道，我們問她吧。",
    "vocabIndex": 29
  },
  {
    "q": "Q: What do you want to do this weekend? — A: ______ we can go to the zoo.【或許】",
    "options": [
      "Always",
      "Yes",
      "Perhaps",
      "Sometimes"
    ],
    "answer": 2,
    "cn": "你這個週末想做什麼？ — 或許我們可以去動物園。",
    "vocabIndex": 30
  },
  {
    "q": "Q: Do we need an umbrella today? — A: Yes, we do. It will ______ rain this afternoon.【很可能】",
    "options": [
      "probably",
      "ahead",
      "yet",
      "quite"
    ],
    "answer": 0,
    "cn": "我們今天需要帶傘嗎？ — 需要，今天下午很可能會下雨。",
    "vocabIndex": 31
  },
  {
    "q": "Q: Does Mr. Smith come from America? — A: No, he doesn't. ______, he comes from Canada.【事實上】",
    "options": [
      "Too",
      "Least",
      "Actually",
      "Either"
    ],
    "answer": 2,
    "cn": "史密斯先生來自美國嗎？ — 不是，事實上，他來自加拿大。",
    "vocabIndex": 32
  },
  {
    "q": "Q: What do you do after school? — A: I do my homework first, and ______ I play games.【然後；那時】",
    "options": [
      "then",
      "quite",
      "ever",
      "either"
    ],
    "answer": 0,
    "cn": "你放學後做什麼？ — 我先寫功課，然後玩遊戲。",
    "vocabIndex": 33
  },
  {
    "q": "Q: How long does Tom wait for the bus? — A: He waits for thirty minutes, and the bus ______ comes.【終於；最後】",
    "options": [
      "no",
      "either",
      "quite",
      "finally"
    ],
    "answer": 3,
    "cn": "湯姆等公車等多久？ — 他等了三十分鐘，公車終於來了。",
    "vocabIndex": 34
  },
  {
    "q": "Q: Do you like apples? — A: ______, I do. They are sweet.【是；對】",
    "options": [
      "Always",
      "Yes",
      "Perhaps",
      "Sometimes"
    ],
    "answer": 1,
    "cn": "你喜歡蘋果嗎？ — 是的，我喜歡，它們很甜。",
    "vocabIndex": 35
  },
  {
    "q": "Q: Does Lisa have a pet? — A: ______, she doesn't. Her mom doesn't like animals.【不；沒有】",
    "options": [
      "Only",
      "Usually",
      "No",
      "OK"
    ],
    "answer": 2,
    "cn": "麗莎有養寵物嗎？ — 沒有，她媽媽不喜歡動物。",
    "vocabIndex": 36
  },
  {
    "q": "Q: Does Ben like math? — A: No, he does ______. He likes English.【不（否定）】",
    "options": [
      "not",
      "too",
      "seldom",
      "quite"
    ],
    "answer": 0,
    "cn": "班喜歡數學嗎？ — 不，他不喜歡，他喜歡英文。",
    "vocabIndex": 37
  },
  {
    "q": "Q: Can I sit here? — A: ______. Sit down, please.【好；可以】",
    "options": [
      "Not",
      "Together",
      "Yet",
      "OK"
    ],
    "answer": 3,
    "cn": "我可以坐這裡嗎？ — 好，請坐。",
    "vocabIndex": 38
  }
];

const LOOKUP = {
  "ok": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "沒問題的"
  },
  "only": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "唯一的"
  },
  "always": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "總是"
  },
  "usually": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "通常"
  },
  "often": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "時常"
  },
  "sometimes": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "有時候"
  },
  "seldom": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "很少"
  },
  "never": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "從不"
  },
  "ever": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "曾經；有時"
  },
  "twice": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "兩次"
  },
  "badly": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "差勁地"
  },
  "together": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "一起"
  },
  "again": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "再一次"
  },
  "abroad": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "在國外"
  },
  "away": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "離開；不在"
  },
  "ahead": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "向前；在前方"
  },
  "somewhere": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "某處"
  },
  "also": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "也"
  },
  "too": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "也"
  },
  "either": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "也（不）"
  },
  "still": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "仍然"
  },
  "yet": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "還（沒）"
  },
  "just": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "只是；只"
  },
  "very": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "非常"
  },
  "so": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "如此地；好"
  },
  "quite": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "相當"
  },
  "really": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "真地"
  },
  "almost": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "幾乎；差不多"
  },
  "even": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "甚至；更"
  },
  "least": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "最不"
  },
  "maybe": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "也許"
  },
  "perhaps": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "或許"
  },
  "probably": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "很可能"
  },
  "actually": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "事實上"
  },
  "then": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "然後；那時"
  },
  "finally": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "終於；最後"
  },
  "yes": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "是；對"
  },
  "no": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "不；沒有"
  },
  "not": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "不（否定）"
  }
};

const EXTRA_GLOSSES = {};
