// Unit 14 Quiz Data: Sports, Interests & Hobbies 運動、興趣與嗜好（第14區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U14 - Sports, Interests & Hobbies",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "hobby",
    "pos": "n.",
    "cn_def": "嗜好",
    "en_def": "",
    "sentence": "Q: What's your {{BLANK}}? What do you like to do? — A: I like to take pictures in the park.",
    "cn": "你的嗜好是什麼？你喜歡做什麼？ — 我喜歡在公園拍照。"
  },
  {
    "word": "sing (singing)",
    "pos": "v.",
    "cn_def": "唱歌",
    "en_def": "",
    "sentence": "Q: What does Amy like to do? — A: She likes {{BLANK}} in the music room.",
    "cn": "艾美喜歡做什麼？ — 她喜歡在音樂教室唱歌。"
  },
  {
    "word": "song (songs)",
    "pos": "n.",
    "cn_def": "歌曲",
    "en_def": "",
    "sentence": "Q: What do you like to do after school? — A: I like to sing English {{BLANK}}.",
    "cn": "你放學後喜歡做什麼？ — 我喜歡唱英文歌。"
  },
  {
    "word": "music",
    "pos": "n.",
    "cn_def": "音樂",
    "en_def": "",
    "sentence": "Q: Does Tina enjoy listening to {{BLANK}}? — A: Yes, she does. She listens to it every night.",
    "cn": "蒂娜喜歡聽音樂嗎？ — 是的，她喜歡。她每天晚上都聽。"
  },
  {
    "word": "dance",
    "pos": "v.",
    "cn_def": "跳舞",
    "en_def": "",
    "sentence": "Q: What do you and your sister like to do? — A: We like to {{BLANK}} to pop music.",
    "cn": "你和你妹妹喜歡做什麼？ — 我們喜歡隨著流行音樂跳舞。"
  },
  {
    "word": "draw (drawing)",
    "pos": "v.",
    "cn_def": "畫圖",
    "en_def": "",
    "sentence": "Q: Does Ben enjoy {{BLANK}}? — A: Yes, he does. He has many pictures of cats in his notebook.",
    "cn": "班喜歡畫圖嗎？ — 是的，他喜歡。他的筆記本裡有很多貓的圖。"
  },
  {
    "word": "paint (painting)",
    "pos": "v.",
    "cn_def": "（用顏料）畫圖",
    "en_def": "",
    "sentence": "Q: Do your parents enjoy {{BLANK}}? — A: No, they don't. They enjoy reading books.",
    "cn": "你爸媽喜歡畫畫嗎？ — 不，他們不喜歡。他們喜歡看書。"
  },
  {
    "word": "cook",
    "pos": "v.",
    "cn_def": "煮飯；烹飪",
    "en_def": "",
    "sentence": "Q: What does your father like to do on Sundays? — A: He likes to {{BLANK}} dinner for us.",
    "cn": "你爸爸星期天喜歡做什麼？ — 他喜歡為我們煮晚餐。"
  },
  {
    "word": "movie (movies)",
    "pos": "n.",
    "cn_def": "電影",
    "en_def": "",
    "sentence": "Q: Do they enjoy watching {{BLANK}}? — A: Yes, they do. They go to the theater every weekend.",
    "cn": "他們喜歡看電影嗎？ — 是的，他們喜歡。他們每個週末都去戲院。"
  },
  {
    "word": "comic",
    "pos": "adj.",
    "cn_def": "漫畫的",
    "en_def": "",
    "sentence": "Q: What does Tom like to do on weekends? — A: He likes to read {{BLANK}} books.",
    "cn": "湯姆週末喜歡做什麼？ — 他喜歡看漫畫書。"
  },
  {
    "word": "swim",
    "pos": "v.",
    "cn_def": "游泳",
    "en_def": "",
    "sentence": "Q: Can your brother {{BLANK}}? — A: Yes, he can. He goes to the pool every week.",
    "cn": "你哥哥會游泳嗎？ — 是的，他會。他每週都去游泳池。"
  },
  {
    "word": "surf",
    "pos": "v.",
    "cn_def": "衝浪",
    "en_def": "",
    "sentence": "Q: Can you {{BLANK}}? — A: No, I can't. But I want to learn it at the beach.",
    "cn": "你會衝浪嗎？ — 不，我不會。但我想在海灘學。"
  },
  {
    "word": "sail",
    "pos": "v.",
    "cn_def": "航行；駕船",
    "en_def": "",
    "sentence": "Q: Can your uncle {{BLANK}} a boat? — A: Yes, he can. He often takes us out on the lake.",
    "cn": "你叔叔會駕船嗎？ — 是的，他會。他常帶我們到湖上。"
  },
  {
    "word": "climb",
    "pos": "v.",
    "cn_def": "爬；攀登",
    "en_def": "",
    "sentence": "Q: Can Grandpa {{BLANK}} the mountain? — A: Yes, he can. He is old, but he is strong.",
    "cn": "爺爺爬得上這座山嗎？ — 是的，他可以。他年紀大，但很強壯。"
  },
  {
    "word": "run",
    "pos": "v.",
    "cn_def": "跑步",
    "en_def": "",
    "sentence": "Q: Can the twins {{BLANK}} fast? — A: Yes, they can. They are the fastest in our class.",
    "cn": "那對雙胞胎跑得快嗎？ — 是的，他們可以。他們是我們班跑最快的。"
  },
  {
    "word": "piano",
    "pos": "n.",
    "cn_def": "鋼琴",
    "en_def": "",
    "sentence": "Q: Can Amy play the {{BLANK}}? — A: Yes, she can. She plays it very well.",
    "cn": "艾美會彈鋼琴嗎？ — 是的，她會。她彈得很好。"
  },
  {
    "word": "violin",
    "pos": "n.",
    "cn_def": "小提琴",
    "en_def": "",
    "sentence": "Q: Can you play the {{BLANK}}? — A: No, I can't. But my sister can.",
    "cn": "你會拉小提琴嗎？ — 不，我不會。但我姊姊會。"
  },
  {
    "word": "guitar",
    "pos": "n.",
    "cn_def": "吉他",
    "en_def": "",
    "sentence": "Q: Can your father play the {{BLANK}}? — A: Yes, he can. He plays it and sings for us.",
    "cn": "你爸爸會彈吉他嗎？ — 是的，他會。他邊彈邊唱給我們聽。"
  },
  {
    "word": "drum (drums)",
    "pos": "n.",
    "cn_def": "鼓",
    "en_def": "",
    "sentence": "Q: Can Tom play the {{BLANK}}? — A: No, he can't. But he wants to learn.",
    "cn": "湯姆會打鼓嗎？ — 不，他不會。但他想學。"
  },
  {
    "word": "flute",
    "pos": "n.",
    "cn_def": "長笛；笛子",
    "en_def": "",
    "sentence": "Q: Can your cousins play the {{BLANK}}? — A: Yes, they can. They play it in music class.",
    "cn": "你的表姊妹們會吹長笛嗎？ — 是的，她們會。她們在音樂課吹。"
  },
  {
    "word": "basketball",
    "pos": "n.",
    "cn_def": "籃球",
    "en_def": "",
    "sentence": "Q: Let's play {{BLANK}} after school. — A: OK! See you on the playground.",
    "cn": "我們放學後去打籃球吧。 — 好啊！操場見。"
  },
  {
    "word": "baseball",
    "pos": "n.",
    "cn_def": "棒球",
    "en_def": "",
    "sentence": "Q: Would you like to play {{BLANK}} with us? — A: Sure. I have a new bat and a glove.",
    "cn": "你想和我們一起打棒球嗎？ — 當然。我有新的球棒和手套。"
  },
  {
    "word": "soccer",
    "pos": "n.",
    "cn_def": "足球",
    "en_def": "",
    "sentence": "Q: Let's play {{BLANK}} in the park. — A: Good idea! Ben and Tom can come, too.",
    "cn": "我們去公園踢足球吧。 — 好主意！班和湯姆也可以來。"
  },
  {
    "word": "tennis",
    "pos": "n.",
    "cn_def": "網球",
    "en_def": "",
    "sentence": "Q: Would you like to play {{BLANK}} with us this Saturday? — A: Sorry, I can't. I have math class.",
    "cn": "你這星期六想和我們一起打網球嗎？ — 抱歉，我不行。我有數學課。"
  },
  {
    "word": "badminton",
    "pos": "n.",
    "cn_def": "羽毛球",
    "en_def": "",
    "sentence": "Q: Let's play {{BLANK}} in the gym. — A: OK. It's too windy outside.",
    "cn": "我們在體育館打羽毛球吧。 — 好。外面風太大了。"
  },
  {
    "word": "dodge ball",
    "pos": "n.",
    "cn_def": "躲避球",
    "en_def": "",
    "sentence": "Q: Would you like to play {{BLANK}} with us? — A: Yes, I'd love to. It's fun!",
    "cn": "你想跟我們一起玩躲避球嗎？ — 是的，我很樂意。好好玩！",
    "nblanks": 2
  },
  {
    "word": "frisbee",
    "pos": "n.",
    "cn_def": "飛盤",
    "en_def": "",
    "sentence": "Q: Let's play {{BLANK}} on the beach. — A: Great! I'll throw it to you first.",
    "cn": "我們在海灘玩飛盤吧。 — 太好了！我先丟給你。"
  },
  {
    "word": "chess",
    "pos": "n.",
    "cn_def": "西洋棋",
    "en_def": "",
    "sentence": "Q: Would you like to play {{BLANK}} with Grandpa and me? — A: Sure. But Grandpa is very good at it!",
    "cn": "你想和爺爺跟我一起下西洋棋嗎？ — 當然，但是爺爺很厲害！"
  },
  {
    "word": "ball",
    "pos": "n.",
    "cn_def": "球",
    "en_def": "",
    "sentence": "Q: Let's play {{BLANK}} in the yard. — A: OK. Throw it to me!",
    "cn": "我們在院子裡玩球吧。 — 好，丟給我！"
  },
  {
    "word": "kite",
    "pos": "n.",
    "cn_def": "風箏",
    "en_def": "",
    "sentence": "Q: Would you like to fly a {{BLANK}} with us? It's windy today. — A: Yes, I'd love to.",
    "cn": "你想和我們一起放風箏嗎？今天風很大。 — 是的，我很樂意。"
  },
  {
    "word": "camp (camping)",
    "pos": "v.",
    "cn_def": "露營",
    "en_def": "",
    "sentence": "Q: Would you like to go {{BLANK}} with us this weekend? — A: Yes! Let's sleep under the stars.",
    "cn": "你這個週末想和我們一起去露營嗎？ — 好！我們來睡在星空下吧。"
  },
  {
    "word": "picnic",
    "pos": "n.",
    "cn_def": "野餐",
    "en_def": "",
    "sentence": "Q: Would you like to have a {{BLANK}} with us in the park? — A: Sure. I'll bring some sandwiches.",
    "cn": "你想和我們一起在公園野餐嗎？ — 當然。我會帶一些三明治。"
  },
  {
    "word": "hike (hiking)",
    "pos": "v.",
    "cn_def": "健行",
    "en_def": "",
    "sentence": "Q: Let's go {{BLANK}} on the mountain tomorrow. — A: OK. Let's meet at seven in the morning.",
    "cn": "我們明天去山上健行吧。 — 好。我們早上七點見面。"
  },
  {
    "word": "play (playing)",
    "pos": "v.",
    "cn_def": "玩；打（球）",
    "en_def": "",
    "sentence": "Q: What are the children doing now? — A: They are {{BLANK}} in the yard.",
    "cn": "孩子們現在在做什麼？ — 他們正在院子裡玩。"
  },
  {
    "word": "game",
    "pos": "n.",
    "cn_def": "遊戲；比賽",
    "en_def": "",
    "sentence": "Q: What are you doing now? — A: I'm playing a computer {{BLANK}} with my brother.",
    "cn": "你現在在做什麼？ — 我正在和弟弟玩電腦遊戲。"
  },
  {
    "word": "toy",
    "pos": "n.",
    "cn_def": "玩具",
    "en_def": "",
    "sentence": "Q: What is the baby doing now? — A: He is playing with his {{BLANK}} car.",
    "cn": "寶寶現在在做什麼？ — 他正在玩他的玩具車。"
  },
  {
    "word": "doll (dolls)",
    "pos": "n.",
    "cn_def": "洋娃娃",
    "en_def": "",
    "sentence": "Q: What is your little sister doing now? — A: She is playing with her {{BLANK}}.",
    "cn": "你妹妹現在在做什麼？ — 她正在玩她的洋娃娃。"
  },
  {
    "word": "card",
    "pos": "n.",
    "cn_def": "卡片",
    "en_def": "",
    "sentence": "Q: What are you doing now, Amy? — A: I'm making a birthday {{BLANK}} for Mom.",
    "cn": "艾美，你現在在做什麼？ — 我正在為媽媽做生日卡片。"
  },
  {
    "word": "fish (fishing)",
    "pos": "v.",
    "cn_def": "釣魚",
    "en_def": "",
    "sentence": "Q: What are Dad and Uncle Ben doing now? — A: They are {{BLANK}} by the river.",
    "cn": "爸爸和班叔叔現在在做什麼？ — 他們正在河邊釣魚。"
  },
  {
    "word": "jog (jogging)",
    "pos": "v.",
    "cn_def": "慢跑",
    "en_def": "",
    "sentence": "Q: What is Mom doing now? — A: She is {{BLANK}} in the park.",
    "cn": "媽媽現在在做什麼？ — 她正在公園慢跑。"
  },
  {
    "word": "exercise",
    "pos": "v.",
    "cn_def": "運動",
    "en_def": "",
    "sentence": "Q: How often do you {{BLANK}}? — A: Three times a week. It keeps me healthy.",
    "cn": "你多久運動一次？ — 一週三次。它讓我保持健康。"
  },
  {
    "word": "sports",
    "pos": "n.",
    "cn_def": "運動",
    "en_def": "",
    "sentence": "Q: How often does your brother play {{BLANK}}? — A: He plays every day after school.",
    "cn": "你哥哥多久做一次運動？ — 他每天放學後都運動。"
  },
  {
    "word": "trip",
    "pos": "n.",
    "cn_def": "（短程）旅行",
    "en_def": "",
    "sentence": "Q: How often does your family take a {{BLANK}}? — A: We take one every summer.",
    "cn": "你們家多久去旅行一次？ — 我們每年夏天都去一次。"
  },
  {
    "word": "band",
    "pos": "n.",
    "cn_def": "樂團",
    "en_def": "",
    "sentence": "Q: How often does your {{BLANK}} practice? — A: We practice twice a week, on Mondays and Fridays.",
    "cn": "你的樂團多久練習一次？ — 我們一週練習兩次，在星期一和星期五。"
  },
  {
    "word": "team",
    "pos": "n.",
    "cn_def": "隊；團隊",
    "en_def": "",
    "sentence": "Q: How often do you and your {{BLANK}} practice? — A: We practice on Tuesdays and Thursdays.",
    "cn": "你和你的隊友多久練習一次？ — 我們每星期二和星期四練習。"
  },
  {
    "word": "stamp (stamps)",
    "pos": "n.",
    "cn_def": "郵票",
    "en_def": "",
    "sentence": "Q: What does your grandpa usually do in his free time? — A: He usually collects {{BLANK}} from different countries.",
    "cn": "你爺爺空閒時通常做什麼？ — 他通常收集各國的郵票。"
  },
  {
    "word": "fan",
    "pos": "n.",
    "cn_def": "粉絲；狂熱愛好者",
    "en_def": "",
    "sentence": "Q: What do you usually do in your free time? — A: I listen to my favorite singer. I'm a big {{BLANK}} of her.",
    "cn": "你空閒時通常做什麼？ — 我聽我最喜歡的歌手的歌。我是她的超級粉絲。"
  },
  {
    "word": "race",
    "pos": "n.",
    "cn_def": "賽跑",
    "en_def": "",
    "sentence": "Q: What do Tom and Ben usually do in their free time? — A: They practice running for the {{BLANK}} on sports day.",
    "cn": "湯姆和班空閒時通常做什麼？ — 他們練跑步，準備運動會的賽跑。"
  },
  {
    "word": "win",
    "pos": "v.",
    "cn_def": "贏",
    "en_def": "",
    "sentence": "Q: What does your sister usually do in her free time? — A: She practices the piano. She wants to {{BLANK}} first prize.",
    "cn": "你姊姊空閒時通常做什麼？ — 她練鋼琴，她想得第一名。"
  },
  {
    "word": "lose",
    "pos": "v.",
    "cn_def": "輸",
    "en_def": "",
    "sentence": "Q: What do you and your friends usually do in your free time? — A: We play basketball. Sometimes we {{BLANK}}, but we always have fun.",
    "cn": "你和朋友們空閒時通常做什麼？ — 我們打籃球。有時候我們會輸，但總是玩得很開心。"
  }
];

const MCQS = [
  {
    "q": "Q: What's your ______? What do you like to do? — A: I like to take pictures in the park.【嗜好】",
    "options": [
      "basketball",
      "hobby",
      "kite",
      "fan"
    ],
    "answer": 1,
    "cn": "你的嗜好是什麼？你喜歡做什麼？ — 我喜歡在公園拍照。",
    "vocabIndex": 0
  },
  {
    "q": "Q: What does Amy like to do? — A: She likes ______ in the music room.【唱歌】",
    "options": [
      "singing",
      "fishing",
      "jogging",
      "playing"
    ],
    "answer": 0,
    "cn": "艾美喜歡做什麼？ — 她喜歡在音樂教室唱歌。",
    "vocabIndex": 1
  },
  {
    "q": "Q: What do you like to do after school? — A: I like to sing English ______.【歌曲】",
    "options": [
      "chess",
      "dolls",
      "stamps",
      "songs"
    ],
    "answer": 3,
    "cn": "你放學後喜歡做什麼？ — 我喜歡唱英文歌。",
    "vocabIndex": 2
  },
  {
    "q": "Q: Does Tina enjoy listening to ______? — A: Yes, she does. She listens to it every night.【音樂】",
    "options": [
      "toy",
      "flute",
      "music",
      "hobby"
    ],
    "answer": 2,
    "cn": "蒂娜喜歡聽音樂嗎？ — 是的，她喜歡。她每天晚上都聽。",
    "vocabIndex": 3
  },
  {
    "q": "Q: What do you and your sister like to do? — A: We like to ______ to pop music.【跳舞】",
    "options": [
      "sail",
      "surf",
      "swim",
      "dance"
    ],
    "answer": 3,
    "cn": "你和你妹妹喜歡做什麼？ — 我們喜歡隨著流行音樂跳舞。",
    "vocabIndex": 4
  },
  {
    "q": "Q: Does Ben enjoy ______? — A: Yes, he does. He has many pictures of cats in his notebook.【畫圖】",
    "options": [
      "painting",
      "singing",
      "drawing",
      "fishing"
    ],
    "answer": 2,
    "cn": "班喜歡畫圖嗎？ — 是的，他喜歡。他的筆記本裡有很多貓的圖。",
    "vocabIndex": 5
  },
  {
    "q": "Q: Do your parents enjoy ______? — A: No, they don't. They enjoy reading books.【（用顏料）畫圖】",
    "options": [
      "fishing",
      "painting",
      "drawing",
      "hiking"
    ],
    "answer": 1,
    "cn": "你爸媽喜歡畫畫嗎？ — 不，他們不喜歡。他們喜歡看書。",
    "vocabIndex": 6
  },
  {
    "q": "Q: What does your father like to do on Sundays? — A: He likes to ______ dinner for us.【煮飯；烹飪】",
    "options": [
      "cook",
      "win",
      "exercise",
      "swim"
    ],
    "answer": 0,
    "cn": "你爸爸星期天喜歡做什麼？ — 他喜歡為我們煮晚餐。",
    "vocabIndex": 7
  },
  {
    "q": "Q: Do they enjoy watching ______? — A: Yes, they do. They go to the theater every weekend.【電影】",
    "options": [
      "stamps",
      "movies",
      "dolls",
      "songs"
    ],
    "answer": 1,
    "cn": "他們喜歡看電影嗎？ — 是的，他們喜歡。他們每個週末都去戲院。",
    "vocabIndex": 8
  },
  {
    "q": "Q: What does Tom like to do on weekends? — A: He likes to read ______ books.【漫畫的】",
    "options": [
      "careful",
      "heavier",
      "comic",
      "wise"
    ],
    "answer": 2,
    "cn": "湯姆週末喜歡做什麼？ — 他喜歡看漫畫書。",
    "vocabIndex": 9
  },
  {
    "q": "Q: Can your brother ______? — A: Yes, he can. He goes to the pool every week.【游泳】",
    "options": [
      "climb",
      "cook",
      "sail",
      "swim"
    ],
    "answer": 3,
    "cn": "你哥哥會游泳嗎？ — 是的，他會。他每週都去游泳池。",
    "vocabIndex": 10
  },
  {
    "q": "Q: Can you ______? — A: No, I can't. But I want to learn it at the beach.【衝浪】",
    "options": [
      "surf",
      "climb",
      "cook",
      "swim"
    ],
    "answer": 0,
    "cn": "你會衝浪嗎？ — 不，我不會。但我想在海灘學。",
    "vocabIndex": 11
  },
  {
    "q": "Q: Can your uncle ______ a boat? — A: Yes, he can. He often takes us out on the lake.【航行；駕船】",
    "options": [
      "climb",
      "sail",
      "swim",
      "run"
    ],
    "answer": 1,
    "cn": "你叔叔會駕船嗎？ — 是的，他會。他常帶我們到湖上。",
    "vocabIndex": 12
  },
  {
    "q": "Q: Can Grandpa ______ the mountain? — A: Yes, he can. He is old, but he is strong.【爬；攀登】",
    "options": [
      "climb",
      "sail",
      "surf",
      "swim"
    ],
    "answer": 0,
    "cn": "爺爺爬得上這座山嗎？ — 是的，他可以。他年紀大，但很強壯。",
    "vocabIndex": 13
  },
  {
    "q": "Q: Can the twins ______ fast? — A: Yes, they can. They are the fastest in our class.【跑步】",
    "options": [
      "win",
      "surf",
      "climb",
      "run"
    ],
    "answer": 3,
    "cn": "那對雙胞胎跑得快嗎？ — 是的，他們可以。他們是我們班跑最快的。",
    "vocabIndex": 14
  },
  {
    "q": "Q: Can Amy play the ______? — A: Yes, she can. She plays it very well.【鋼琴】",
    "options": [
      "team",
      "kite",
      "piano",
      "flute"
    ],
    "answer": 2,
    "cn": "艾美會彈鋼琴嗎？ — 是的，她會。她彈得很好。",
    "vocabIndex": 15
  },
  {
    "q": "Q: Can you play the ______? — A: No, I can't. But my sister can.【小提琴】",
    "options": [
      "violin",
      "ball",
      "badminton",
      "race"
    ],
    "answer": 0,
    "cn": "你會拉小提琴嗎？ — 不，我不會。但我姊姊會。",
    "vocabIndex": 16
  },
  {
    "q": "Q: Can your father play the ______? — A: Yes, he can. He plays it and sings for us.【吉他】",
    "options": [
      "kite",
      "guitar",
      "flute",
      "basketball"
    ],
    "answer": 1,
    "cn": "你爸爸會彈吉他嗎？ — 是的，他會。他邊彈邊唱給我們聽。",
    "vocabIndex": 17
  },
  {
    "q": "Q: Can Tom play the ______? — A: No, he can't. But he wants to learn.【鼓】",
    "options": [
      "sports",
      "movies",
      "drums",
      "songs"
    ],
    "answer": 2,
    "cn": "湯姆會打鼓嗎？ — 不，他不會。但他想學。",
    "vocabIndex": 18
  },
  {
    "q": "Q: Can your cousins play the ______? — A: Yes, they can. They play it in music class.【長笛；笛子】",
    "options": [
      "badminton",
      "kite",
      "piano",
      "flute"
    ],
    "answer": 3,
    "cn": "你的表姊妹們會吹長笛嗎？ — 是的，她們會。她們在音樂課吹。",
    "vocabIndex": 19
  },
  {
    "q": "Q: Let's play ______ after school. — A: OK! See you on the playground.【籃球】",
    "options": [
      "guitar",
      "team",
      "basketball",
      "piano"
    ],
    "answer": 2,
    "cn": "我們放學後去打籃球吧。 — 好啊！操場見。",
    "vocabIndex": 20
  },
  {
    "q": "Q: Would you like to play ______ with us? — A: Sure. I have a new bat and a glove.【棒球】",
    "options": [
      "team",
      "baseball",
      "badminton",
      "flute"
    ],
    "answer": 1,
    "cn": "你想和我們一起打棒球嗎？ — 當然。我有新的球棒和手套。",
    "vocabIndex": 21
  },
  {
    "q": "Q: Let's play ______ in the park. — A: Good idea! Ben and Tom can come, too.【足球】",
    "options": [
      "soccer",
      "race",
      "guitar",
      "card"
    ],
    "answer": 0,
    "cn": "我們去公園踢足球吧。 — 好主意！班和湯姆也可以來。",
    "vocabIndex": 22
  },
  {
    "q": "Q: Would you like to play ______ with us this Saturday? — A: Sorry, I can't. I have math class.【網球】",
    "options": [
      "songs",
      "stamps",
      "sports",
      "tennis"
    ],
    "answer": 3,
    "cn": "你這星期六想和我們一起打網球嗎？ — 抱歉，我不行。我有數學課。",
    "vocabIndex": 23
  },
  {
    "q": "Q: Let's play ______ in the gym. — A: OK. It's too windy outside.【羽毛球】",
    "options": [
      "team",
      "badminton",
      "violin",
      "flute"
    ],
    "answer": 1,
    "cn": "我們在體育館打羽毛球吧。 — 好。外面風太大了。",
    "vocabIndex": 24
  },
  {
    "q": "Q: Would you like to play ______ with us? — A: Yes, I'd love to. It's fun!【躲避球】",
    "options": [
      "fan",
      "flute",
      "dodge ball",
      "game"
    ],
    "answer": 2,
    "cn": "你想跟我們一起玩躲避球嗎？ — 是的，我很樂意。好好玩！",
    "vocabIndex": 25
  },
  {
    "q": "Q: Let's play ______ on the beach. — A: Great! I'll throw it to you first.【飛盤】",
    "options": [
      "frisbee",
      "toy",
      "race",
      "basketball"
    ],
    "answer": 0,
    "cn": "我們在海灘玩飛盤吧。 — 太好了！我先丟給你。",
    "vocabIndex": 26
  },
  {
    "q": "Q: Would you like to play ______ with Grandpa and me? — A: Sure. But Grandpa is very good at it!【西洋棋】",
    "options": [
      "stamps",
      "dolls",
      "songs",
      "chess"
    ],
    "answer": 3,
    "cn": "你想和爺爺跟我一起下西洋棋嗎？ — 當然，但是爺爺很厲害！",
    "vocabIndex": 27
  },
  {
    "q": "Q: Let's play ______ in the yard. — A: OK. Throw it to me!【球】",
    "options": [
      "ball",
      "basketball",
      "fan",
      "dodge ball"
    ],
    "answer": 0,
    "cn": "我們在院子裡玩球吧。 — 好，丟給我！",
    "vocabIndex": 28
  },
  {
    "q": "Q: Would you like to fly a ______ with us? It's windy today. — A: Yes, I'd love to.【風箏】",
    "options": [
      "violin",
      "guitar",
      "kite",
      "toy"
    ],
    "answer": 2,
    "cn": "你想和我們一起放風箏嗎？今天風很大。 — 是的，我很樂意。",
    "vocabIndex": 29
  },
  {
    "q": "Q: Would you like to go ______ with us this weekend? — A: Yes! Let's sleep under the stars.【露營】",
    "options": [
      "playing",
      "camping",
      "painting",
      "singing"
    ],
    "answer": 1,
    "cn": "你這個週末想和我們一起去露營嗎？ — 好！我們來睡在星空下吧。",
    "vocabIndex": 30
  },
  {
    "q": "Q: Would you like to have a ______ with us in the park? — A: Sure. I'll bring some sandwiches.【野餐】",
    "options": [
      "piano",
      "hobby",
      "violin",
      "picnic"
    ],
    "answer": 3,
    "cn": "你想和我們一起在公園野餐嗎？ — 當然。我會帶一些三明治。",
    "vocabIndex": 31
  },
  {
    "q": "Q: Let's go ______ on the mountain tomorrow. — A: OK. Let's meet at seven in the morning.【健行】",
    "options": [
      "fishing",
      "hiking",
      "camping",
      "playing"
    ],
    "answer": 1,
    "cn": "我們明天去山上健行吧。 — 好。我們早上七點見面。",
    "vocabIndex": 32
  },
  {
    "q": "Q: What are the children doing now? — A: They are ______ in the yard.【玩；打（球）】",
    "options": [
      "fishing",
      "camping",
      "playing",
      "singing"
    ],
    "answer": 2,
    "cn": "孩子們現在在做什麼？ — 他們正在院子裡玩。",
    "vocabIndex": 33
  },
  {
    "q": "Q: What are you doing now? — A: I'm playing a computer ______ with my brother.【遊戲；比賽】",
    "options": [
      "game",
      "dodge ball",
      "kite",
      "basketball"
    ],
    "answer": 0,
    "cn": "你現在在做什麼？ — 我正在和弟弟玩電腦遊戲。",
    "vocabIndex": 34
  },
  {
    "q": "Q: What is the baby doing now? — A: He is playing with his ______ car.【玩具】",
    "options": [
      "band",
      "ball",
      "team",
      "toy"
    ],
    "answer": 3,
    "cn": "寶寶現在在做什麼？ — 他正在玩他的玩具車。",
    "vocabIndex": 35
  },
  {
    "q": "Q: What is your little sister doing now? — A: She is playing with her ______.【洋娃娃】",
    "options": [
      "chess",
      "movies",
      "dolls",
      "drums"
    ],
    "answer": 2,
    "cn": "你妹妹現在在做什麼？ — 她正在玩她的洋娃娃。",
    "vocabIndex": 36
  },
  {
    "q": "Q: What are you doing now, Amy? — A: I'm making a birthday ______ for Mom.【卡片】",
    "options": [
      "card",
      "frisbee",
      "music",
      "soccer"
    ],
    "answer": 0,
    "cn": "艾美，你現在在做什麼？ — 我正在為媽媽做生日卡片。",
    "vocabIndex": 37
  },
  {
    "q": "Q: What are Dad and Uncle Ben doing now? — A: They are ______ by the river.【釣魚】",
    "options": [
      "painting",
      "fishing",
      "jogging",
      "playing"
    ],
    "answer": 1,
    "cn": "爸爸和班叔叔現在在做什麼？ — 他們正在河邊釣魚。",
    "vocabIndex": 38
  },
  {
    "q": "Q: What is Mom doing now? — A: She is ______ in the park.【慢跑】",
    "options": [
      "hiking",
      "playing",
      "painting",
      "jogging"
    ],
    "answer": 3,
    "cn": "媽媽現在在做什麼？ — 她正在公園慢跑。",
    "vocabIndex": 39
  },
  {
    "q": "Q: How often do you ______? — A: Three times a week. It keeps me healthy.【運動】",
    "options": [
      "lose",
      "cook",
      "exercise",
      "win"
    ],
    "answer": 2,
    "cn": "你多久運動一次？ — 一週三次。它讓我保持健康。",
    "vocabIndex": 40
  },
  {
    "q": "Q: How often does your brother play ______? — A: He plays every day after school.【運動】",
    "options": [
      "tennis",
      "sports",
      "songs",
      "dolls"
    ],
    "answer": 1,
    "cn": "你哥哥多久做一次運動？ — 他每天放學後都運動。",
    "vocabIndex": 41
  },
  {
    "q": "Q: How often does your family take a ______? — A: We take one every summer.【（短程）旅行】",
    "options": [
      "trip",
      "kite",
      "frisbee",
      "piano"
    ],
    "answer": 0,
    "cn": "你們家多久去旅行一次？ — 我們每年夏天都去一次。",
    "vocabIndex": 42
  },
  {
    "q": "Q: How often does your ______ practice? — A: We practice twice a week, on Mondays and Fridays.【樂團】",
    "options": [
      "fan",
      "piano",
      "team",
      "band"
    ],
    "answer": 3,
    "cn": "你的樂團多久練習一次？ — 我們一週練習兩次，在星期一和星期五。",
    "vocabIndex": 43
  },
  {
    "q": "Q: How often do you and your ______ practice? — A: We practice on Tuesdays and Thursdays.【隊；團隊】",
    "options": [
      "card",
      "team",
      "violin",
      "fan"
    ],
    "answer": 1,
    "cn": "你和你的隊友多久練習一次？ — 我們每星期二和星期四練習。",
    "vocabIndex": 44
  },
  {
    "q": "Q: What does your grandpa usually do in his free time? — A: He usually collects ______ from different countries.【郵票】",
    "options": [
      "tennis",
      "chess",
      "stamps",
      "sports"
    ],
    "answer": 2,
    "cn": "你爺爺空閒時通常做什麼？ — 他通常收集各國的郵票。",
    "vocabIndex": 45
  },
  {
    "q": "Q: What do you usually do in your free time? — A: I listen to my favorite singer. I'm a big ______ of her.【粉絲；狂熱愛好者】",
    "options": [
      "guitar",
      "ball",
      "dodge ball",
      "fan"
    ],
    "answer": 3,
    "cn": "你空閒時通常做什麼？ — 我聽我最喜歡的歌手的歌。我是她的超級粉絲。",
    "vocabIndex": 46
  },
  {
    "q": "Q: What do Tom and Ben usually do in their free time? — A: They practice running for the ______ on sports day.【賽跑】",
    "options": [
      "race",
      "toy",
      "guitar",
      "card"
    ],
    "answer": 0,
    "cn": "湯姆和班空閒時通常做什麼？ — 他們練跑步，準備運動會的賽跑。",
    "vocabIndex": 47
  },
  {
    "q": "Q: What does your sister usually do in her free time? — A: She practices the piano. She wants to ______ first prize.【贏】",
    "options": [
      "run",
      "climb",
      "cook",
      "win"
    ],
    "answer": 3,
    "cn": "你姊姊空閒時通常做什麼？ — 她練鋼琴，她想得第一名。",
    "vocabIndex": 48
  },
  {
    "q": "Q: What do you and your friends usually do in your free time? — A: We play basketball. Sometimes we ______, but we always have fun.【輸】",
    "options": [
      "dance",
      "exercise",
      "lose",
      "win"
    ],
    "answer": 2,
    "cn": "你和朋友們空閒時通常做什麼？ — 我們打籃球。有時候我們會輸，但總是玩得很開心。",
    "vocabIndex": 49
  }
];

const LOOKUP = {
  "careful": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "仔細的"
  },
  "wise": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "明智的"
  },
  "heavier": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "重的"
  },
  "cook": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "煮飯；烹調"
  },
  "hobby": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "嗜好"
  },
  "singing": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "唱歌"
  },
  "songs": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "歌曲"
  },
  "music": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "音樂"
  },
  "dance": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "跳舞"
  },
  "drawing": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "畫圖"
  },
  "painting": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "（用顏料）畫圖"
  },
  "movies": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "電影"
  },
  "comic": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "漫畫的"
  },
  "swim": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "游泳"
  },
  "surf": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "衝浪"
  },
  "sail": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "航行；駕船"
  },
  "climb": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "爬；攀登"
  },
  "run": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "跑步"
  },
  "piano": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "鋼琴"
  },
  "violin": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "小提琴"
  },
  "guitar": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "吉他"
  },
  "drums": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "鼓"
  },
  "flute": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "長笛；笛子"
  },
  "basketball": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "籃球"
  },
  "baseball": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "棒球"
  },
  "soccer": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "足球"
  },
  "tennis": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "網球"
  },
  "badminton": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "羽毛球"
  },
  "dodge ball": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "躲避球"
  },
  "frisbee": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "飛盤"
  },
  "chess": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "西洋棋"
  },
  "ball": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "球"
  },
  "kite": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "風箏"
  },
  "camping": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "露營"
  },
  "picnic": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "野餐"
  },
  "hiking": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "健行"
  },
  "playing": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "玩；打（球）"
  },
  "game": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "遊戲；比賽"
  },
  "toy": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "玩具"
  },
  "dolls": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "洋娃娃"
  },
  "card": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "卡片"
  },
  "fishing": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "釣魚"
  },
  "jogging": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "慢跑"
  },
  "exercise": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "運動"
  },
  "sports": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "運動"
  },
  "trip": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "（短程）旅行"
  },
  "band": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "樂團"
  },
  "team": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "隊；團隊"
  },
  "stamps": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "郵票"
  },
  "fan": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "粉絲；狂熱愛好者"
  },
  "race": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "賽跑"
  },
  "win": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "贏"
  },
  "lose": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "輸"
  }
};

const EXTRA_GLOSSES = {};
