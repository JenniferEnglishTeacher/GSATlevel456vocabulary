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
    "en_def": "something you like to do in your free time",
    "sentence": "Q: What's your {{BLANK}}? What do you like to do? — A: I like to take pictures in the park.",
    "cn": "你的嗜好是什麼？你喜歡做什麼？ — 我喜歡在公園拍照。"
  },
  {
    "word": "sing (singing)",
    "pos": "v.",
    "cn_def": "唱歌",
    "en_def": "to make music with your voice",
    "sentence": "Q: What does Amy like to do? — A: She likes {{BLANK}} in the music room.",
    "cn": "艾美喜歡做什麼？ — 她喜歡在音樂教室唱歌。"
  },
  {
    "word": "song (songs)",
    "pos": "n.",
    "cn_def": "歌曲",
    "en_def": "a piece of music with words that you sing",
    "sentence": "Q: What do you like to do after school? — A: I like to sing English {{BLANK}}.",
    "cn": "你放學後喜歡做什麼？ — 我喜歡唱英文歌。"
  },
  {
    "word": "music",
    "pos": "n.",
    "cn_def": "音樂",
    "en_def": "sounds that people sing or play and that are nice to hear",
    "sentence": "Q: Does Tina enjoy listening to {{BLANK}}? — A: Yes, she does. She listens to it every night.",
    "cn": "蒂娜喜歡聽音樂嗎？ — 是的，她喜歡。她每天晚上都聽。"
  },
  {
    "word": "dance",
    "pos": "v.",
    "cn_def": "跳舞",
    "en_def": "to move your body to music",
    "sentence": "Q: What do you and your sister like to do? — A: We like to {{BLANK}} to pop music.",
    "cn": "你和你妹妹喜歡做什麼？ — 我們喜歡隨著流行音樂跳舞。"
  },
  {
    "word": "draw (drawing)",
    "pos": "v.",
    "cn_def": "畫圖",
    "en_def": "to make a picture with a pen or pencil",
    "sentence": "Q: Does Ben enjoy {{BLANK}}? — A: Yes, he does. He has many pictures of cats in his notebook.",
    "cn": "班喜歡畫圖嗎？ — 是的，他喜歡。他的筆記本裡有很多貓的圖。"
  },
  {
    "word": "paint (painting)",
    "pos": "v.",
    "cn_def": "（用顏料）畫圖",
    "en_def": "to make a picture with wet colors and a brush",
    "sentence": "Q: Do your parents enjoy {{BLANK}}? — A: No, they don't. They enjoy reading books.",
    "cn": "你爸媽喜歡畫畫嗎？ — 不，他們不喜歡。他們喜歡看書。"
  },
  {
    "word": "cook",
    "pos": "v.",
    "cn_def": "煮飯；烹飪",
    "en_def": "to make food ready to eat by heating it",
    "sentence": "Q: What does your father like to do on Sundays? — A: He likes to {{BLANK}} dinner for us.",
    "cn": "你爸爸星期天喜歡做什麼？ — 他喜歡為我們煮晚餐。"
  },
  {
    "word": "movie (movies)",
    "pos": "n.",
    "cn_def": "電影",
    "en_def": "a story with moving pictures that you watch in a theater or on TV",
    "sentence": "Q: Do they enjoy watching {{BLANK}}? — A: Yes, they do. They go to the theater every weekend.",
    "cn": "他們喜歡看電影嗎？ — 是的，他們喜歡。他們每個週末都去戲院。"
  },
  {
    "word": "comic",
    "pos": "adj.",
    "cn_def": "漫畫的",
    "en_def": "having stories told in pictures",
    "sentence": "Q: What does Tom like to do on weekends? — A: He likes to read {{BLANK}} books.",
    "cn": "湯姆週末喜歡做什麼？ — 他喜歡看漫畫書。"
  },
  {
    "word": "swim",
    "pos": "v.",
    "cn_def": "游泳",
    "en_def": "to move through water using your arms and legs",
    "sentence": "Q: Can your brother {{BLANK}}? — A: Yes, he can. He goes to the pool every week.",
    "cn": "你哥哥會游泳嗎？ — 是的，他會。他每週都去游泳池。"
  },
  {
    "word": "surf",
    "pos": "v.",
    "cn_def": "衝浪",
    "en_def": "to ride on big waves in the sea on a board",
    "sentence": "Q: Can you {{BLANK}}? — A: No, I can't. But I want to learn it at the beach.",
    "cn": "你會衝浪嗎？ — 不，我不會。但我想在海灘學。"
  },
  {
    "word": "sail",
    "pos": "v.",
    "cn_def": "航行；駕船",
    "en_def": "to travel on water in a boat",
    "sentence": "Q: Can your uncle {{BLANK}} a boat? — A: Yes, he can. He often takes us out on the lake.",
    "cn": "你叔叔會駕船嗎？ — 是的，他會。他常帶我們到湖上。"
  },
  {
    "word": "climb",
    "pos": "v.",
    "cn_def": "爬；攀登",
    "en_def": "to go up something, like a tree or a mountain",
    "sentence": "Q: Can Grandpa {{BLANK}} the mountain? — A: Yes, he can. He is old, but he is strong.",
    "cn": "爺爺爬得上這座山嗎？ — 是的，他可以。他年紀大，但很強壯。"
  },
  {
    "word": "run",
    "pos": "v.",
    "cn_def": "跑步",
    "en_def": "to move very fast on your legs",
    "sentence": "Q: Can the twins {{BLANK}} fast? — A: Yes, they can. They are the fastest in our class.",
    "cn": "那對雙胞胎跑得快嗎？ — 是的，他們可以。他們是我們班跑最快的。"
  },
  {
    "word": "piano",
    "pos": "n.",
    "cn_def": "鋼琴",
    "en_def": "a big musical instrument with black and white keys",
    "sentence": "Q: Can Amy play the {{BLANK}}? — A: Yes, she can. She plays it very well.",
    "cn": "艾美會彈鋼琴嗎？ — 是的，她會。她彈得很好。"
  },
  {
    "word": "violin",
    "pos": "n.",
    "cn_def": "小提琴",
    "en_def": "a musical instrument with four strings that you hold under your chin",
    "sentence": "Q: Can you play the {{BLANK}}? — A: No, I can't. But my sister can.",
    "cn": "你會拉小提琴嗎？ — 不，我不會。但我姊姊會。"
  },
  {
    "word": "guitar",
    "pos": "n.",
    "cn_def": "吉他",
    "en_def": "a musical instrument with six strings that you play with your fingers",
    "sentence": "Q: Can your father play the {{BLANK}}? — A: Yes, he can. He plays it and sings for us.",
    "cn": "你爸爸會彈吉他嗎？ — 是的，他會。他邊彈邊唱給我們聽。"
  },
  {
    "word": "drum (drums)",
    "pos": "n.",
    "cn_def": "鼓",
    "en_def": "a round musical instrument that you hit with sticks",
    "sentence": "Q: Can Tom play the {{BLANK}}? — A: No, he can't. But he wants to learn.",
    "cn": "湯姆會打鼓嗎？ — 不，他不會。但他想學。"
  },
  {
    "word": "flute",
    "pos": "n.",
    "cn_def": "長笛；笛子",
    "en_def": "a long, thin musical instrument that you blow into",
    "sentence": "Q: Can your cousins play the {{BLANK}}? — A: Yes, they can. They play it in music class.",
    "cn": "你的表姊妹們會吹長笛嗎？ — 是的，她們會。她們在音樂課吹。"
  },
  {
    "word": "basketball",
    "pos": "n.",
    "cn_def": "籃球",
    "en_def": "a game in which players throw a big ball into a high net",
    "sentence": "Q: Let's play {{BLANK}} after school. — A: OK! See you on the playground.",
    "cn": "我們放學後去打籃球吧。 — 好啊！操場見。"
  },
  {
    "word": "baseball",
    "pos": "n.",
    "cn_def": "棒球",
    "en_def": "a game in which players hit a small ball with a bat and run",
    "sentence": "Q: Would you like to play {{BLANK}} with us? — A: Sure. I have a new bat and a glove.",
    "cn": "你想和我們一起打棒球嗎？ — 當然。我有新的球棒和手套。"
  },
  {
    "word": "soccer",
    "pos": "n.",
    "cn_def": "足球",
    "en_def": "a game in which players kick a ball into a goal",
    "sentence": "Q: Let's play {{BLANK}} in the park. — A: Good idea! Ben and Tom can come, too.",
    "cn": "我們去公園踢足球吧。 — 好主意！班和湯姆也可以來。"
  },
  {
    "word": "tennis",
    "pos": "n.",
    "cn_def": "網球",
    "en_def": "a game in which two or four players hit a small ball over a net",
    "sentence": "Q: Would you like to play {{BLANK}} with us this Saturday? — A: Sorry, I can't. I have math class.",
    "cn": "你這星期六想和我們一起打網球嗎？ — 抱歉，我不行。我有數學課。"
  },
  {
    "word": "badminton",
    "pos": "n.",
    "cn_def": "羽毛球",
    "en_def": "a game in which players hit a light thing with feathers over a high net",
    "sentence": "Q: Let's play {{BLANK}} in the gym. — A: OK. It's too windy outside.",
    "cn": "我們在體育館打羽毛球吧。 — 好。外面風太大了。"
  },
  {
    "word": "dodge ball",
    "pos": "n.",
    "cn_def": "躲避球",
    "en_def": "a game in which players throw balls at each other and try not to get hit",
    "sentence": "Q: Would you like to play {{BLANK}} with us? — A: Yes, I'd love to. It's fun!",
    "cn": "你想跟我們一起玩躲避球嗎？ — 是的，我很樂意。好好玩！",
    "nblanks": 2
  },
  {
    "word": "frisbee",
    "pos": "n.",
    "cn_def": "飛盤",
    "en_def": "a flat plastic ring or plate that people throw to each other for fun",
    "sentence": "Q: Let's play {{BLANK}} on the beach. — A: Great! I'll throw it to you first.",
    "cn": "我們在海灘玩飛盤吧。 — 太好了！我先丟給你。"
  },
  {
    "word": "chess",
    "pos": "n.",
    "cn_def": "西洋棋",
    "en_def": "a game for two players with kings and queens on a board",
    "sentence": "Q: Would you like to play {{BLANK}} with Grandpa and me? — A: Sure. But Grandpa is very good at it!",
    "cn": "你想和爺爺跟我一起下西洋棋嗎？ — 當然，但是爺爺很厲害！"
  },
  {
    "word": "ball",
    "pos": "n.",
    "cn_def": "球",
    "en_def": "a round thing that you throw, kick, or hit in games",
    "sentence": "Q: Let's play {{BLANK}} in the yard. — A: OK. Throw it to me!",
    "cn": "我們在院子裡玩球吧。 — 好，丟給我！"
  },
  {
    "word": "kite",
    "pos": "n.",
    "cn_def": "風箏",
    "en_def": "a toy made of paper or cloth that flies in the wind on a long string",
    "sentence": "Q: Would you like to fly a {{BLANK}} with us? It's windy today. — A: Yes, I'd love to.",
    "cn": "你想和我們一起放風箏嗎？今天風很大。 — 是的，我很樂意。"
  },
  {
    "word": "camp (camping)",
    "pos": "v.",
    "cn_def": "露營",
    "en_def": "to sleep outside in a tent",
    "sentence": "Q: Would you like to go {{BLANK}} with us this weekend? — A: Yes! Let's sleep under the stars.",
    "cn": "你這個週末想和我們一起去露營嗎？ — 好！我們來睡在星空下吧。"
  },
  {
    "word": "picnic",
    "pos": "n.",
    "cn_def": "野餐",
    "en_def": "a meal that you take and eat outside",
    "sentence": "Q: Would you like to have a {{BLANK}} with us in the park? — A: Sure. I'll bring some sandwiches.",
    "cn": "你想和我們一起在公園野餐嗎？ — 當然。我會帶一些三明治。"
  },
  {
    "word": "hike (hiking)",
    "pos": "v.",
    "cn_def": "健行",
    "en_def": "to take a long walk in the mountains or the country",
    "sentence": "Q: Let's go {{BLANK}} on the mountain tomorrow. — A: OK. Let's meet at seven in the morning.",
    "cn": "我們明天去山上健行吧。 — 好。我們早上七點見面。"
  },
  {
    "word": "play (playing)",
    "pos": "v.",
    "cn_def": "玩；打（球）",
    "en_def": "to have fun with toys or games; to take part in a sport",
    "sentence": "Q: What are the children doing now? — A: They are {{BLANK}} in the yard.",
    "cn": "孩子們現在在做什麼？ — 他們正在院子裡玩。"
  },
  {
    "word": "game",
    "pos": "n.",
    "cn_def": "遊戲；比賽",
    "en_def": "something you play for fun, often with rules",
    "sentence": "Q: What are you doing now? — A: I'm playing a computer {{BLANK}} with my brother.",
    "cn": "你現在在做什麼？ — 我正在和弟弟玩電腦遊戲。"
  },
  {
    "word": "toy",
    "pos": "n.",
    "cn_def": "玩具",
    "en_def": "a thing for children to play with",
    "sentence": "Q: What is the baby doing now? — A: He is playing with his {{BLANK}} car.",
    "cn": "寶寶現在在做什麼？ — 他正在玩他的玩具車。"
  },
  {
    "word": "doll (dolls)",
    "pos": "n.",
    "cn_def": "洋娃娃",
    "en_def": "a toy that looks like a baby or a small person",
    "sentence": "Q: What is your little sister doing now? — A: She is playing with her {{BLANK}}.",
    "cn": "你妹妹現在在做什麼？ — 她正在玩她的洋娃娃。"
  },
  {
    "word": "card",
    "pos": "n.",
    "cn_def": "卡片",
    "en_def": "a piece of thick paper with words or pictures on it",
    "sentence": "Q: What are you doing now, Amy? — A: I'm making a birthday {{BLANK}} for Mom.",
    "cn": "艾美，你現在在做什麼？ — 我正在為媽媽做生日卡片。"
  },
  {
    "word": "fish (fishing)",
    "pos": "v.",
    "cn_def": "釣魚",
    "en_def": "to try to catch fish",
    "sentence": "Q: What are Dad and Uncle Ben doing now? — A: They are {{BLANK}} by the river.",
    "cn": "爸爸和班叔叔現在在做什麼？ — 他們正在河邊釣魚。"
  },
  {
    "word": "jog (jogging)",
    "pos": "v.",
    "cn_def": "慢跑",
    "en_def": "to run slowly for exercise",
    "sentence": "Q: What is Mom doing now? — A: She is {{BLANK}} in the park.",
    "cn": "媽媽現在在做什麼？ — 她正在公園慢跑。"
  },
  {
    "word": "exercise",
    "pos": "v.",
    "cn_def": "運動",
    "en_def": "to move your body to stay strong and healthy",
    "sentence": "Q: How often do you {{BLANK}}? — A: Three times a week. It keeps me healthy.",
    "cn": "你多久運動一次？ — 一週三次。它讓我保持健康。"
  },
  {
    "word": "sports",
    "pos": "n.",
    "cn_def": "運動",
    "en_def": "games like basketball and tennis that people play for exercise and fun",
    "sentence": "Q: How often does your brother play {{BLANK}}? — A: He plays every day after school.",
    "cn": "你哥哥多久做一次運動？ — 他每天放學後都運動。"
  },
  {
    "word": "trip",
    "pos": "n.",
    "cn_def": "（短程）旅行",
    "en_def": "a visit to a place that is not near your home",
    "sentence": "Q: How often does your family take a {{BLANK}}? — A: We take one every summer.",
    "cn": "你們家多久去旅行一次？ — 我們每年夏天都去一次。"
  },
  {
    "word": "band",
    "pos": "n.",
    "cn_def": "樂團",
    "en_def": "a group of people who play music together",
    "sentence": "Q: How often does your {{BLANK}} practice? — A: We practice twice a week, on Mondays and Fridays.",
    "cn": "你的樂團多久練習一次？ — 我們一週練習兩次，在星期一和星期五。"
  },
  {
    "word": "team",
    "pos": "n.",
    "cn_def": "隊；團隊",
    "en_def": "a group of people who play or work together",
    "sentence": "Q: How often do you and your {{BLANK}} practice? — A: We practice on Tuesdays and Thursdays.",
    "cn": "你和你的隊友多久練習一次？ — 我們每星期二和星期四練習。"
  },
  {
    "word": "stamp (stamps)",
    "pos": "n.",
    "cn_def": "郵票",
    "en_def": "a small piece of paper that you put on a letter before you mail it",
    "sentence": "Q: What does your grandpa usually do in his free time? — A: He usually collects {{BLANK}} from different countries.",
    "cn": "你爺爺空閒時通常做什麼？ — 他通常收集各國的郵票。"
  },
  {
    "word": "fan",
    "pos": "n.",
    "cn_def": "粉絲；狂熱愛好者",
    "en_def": "a person who likes a singer, a team, or a sport very much",
    "sentence": "Q: What do you usually do in your free time? — A: I listen to my favorite singer. I'm a big {{BLANK}} of her.",
    "cn": "你空閒時通常做什麼？ — 我聽我最喜歡的歌手的歌。我是她的超級粉絲。"
  },
  {
    "word": "race",
    "pos": "n.",
    "cn_def": "賽跑",
    "en_def": "a game to see who is the fastest",
    "sentence": "Q: What do Tom and Ben usually do in their free time? — A: They practice running for the {{BLANK}} on sports day.",
    "cn": "湯姆和班空閒時通常做什麼？ — 他們練跑步，準備運動會的賽跑。"
  },
  {
    "word": "win",
    "pos": "v.",
    "cn_def": "贏",
    "en_def": "to be the first or the best in a game or race",
    "sentence": "Q: What does your sister usually do in her free time? — A: She practices the piano. She wants to {{BLANK}} first prize.",
    "cn": "你姊姊空閒時通常做什麼？ — 她練鋼琴，她想得第一名。"
  },
  {
    "word": "lose",
    "pos": "v.",
    "cn_def": "輸",
    "en_def": "to not win a game",
    "sentence": "Q: What do you and your friends usually do in your free time? — A: We play basketball. Sometimes we {{BLANK}}, but we always have fun.",
    "cn": "你和朋友們空閒時通常做什麼？ — 我們打籃球。有時候我們會輸，但總是玩得很開心。"
  }
];

const MCQS = [
  {
    "q": "My ______ is collecting stamps. I do it in my free time, and I have more than five hundred now.",
    "options": [
      "team",
      "race",
      "hobby",
      "trip"
    ],
    "answer": 2,
    "cn": "你的嗜好是什麼？你喜歡做什麼？ — 我喜歡在公園拍照。",
    "vocabIndex": 0
  },
  {
    "q": "Amy has a beautiful voice, and she loves ______. She wants to be on TV one day.",
    "options": [
      "swimming",
      "climbing",
      "jogging",
      "singing"
    ],
    "answer": 3,
    "cn": "艾美喜歡做什麼？ — 她喜歡在音樂教室唱歌。",
    "vocabIndex": 1
  },
  {
    "q": "The band wrote ten new ______ this year. Fans can listen to them on the Internet.",
    "options": [
      "kites",
      "songs",
      "dolls",
      "stamps"
    ],
    "answer": 1,
    "cn": "你放學後喜歡做什麼？ — 我喜歡唱英文歌。",
    "vocabIndex": 2
  },
  {
    "q": "I like to listen to ______ when I do my homework. Piano and guitar sounds help me relax.",
    "options": [
      "music",
      "chess",
      "tennis",
      "soccer"
    ],
    "answer": 0,
    "cn": "蒂娜喜歡聽音樂嗎？ — 是的，她喜歡。她每天晚上都聽。",
    "vocabIndex": 3
  },
  {
    "q": "When the band starts to play, people stand up and ______. They move their arms and legs to the music.",
    "options": [
      "swim",
      "dance",
      "sail",
      "surf"
    ],
    "answer": 1,
    "cn": "你和你妹妹喜歡做什麼？ — 我們喜歡隨著流行音樂跳舞。",
    "vocabIndex": 4
  },
  {
    "q": "Ben is ______ a picture of his dog with a pencil. He will color it later.",
    "options": [
      "drawing",
      "singing",
      "climbing",
      "camping"
    ],
    "answer": 0,
    "cn": "班喜歡畫圖嗎？ — 是的，他喜歡。他的筆記本裡有很多貓的圖。",
    "vocabIndex": 5
  },
  {
    "q": "The artist is ______ a picture of the sea with a brush and blue paint.",
    "options": [
      "singing",
      "hiking",
      "jogging",
      "painting"
    ],
    "answer": 3,
    "cn": "你爸媽喜歡畫畫嗎？ — 不，他們不喜歡。他們喜歡看書。",
    "vocabIndex": 6
  },
  {
    "q": "I want to learn how to ______. Then I can make dinner for my family on weekends.",
    "options": [
      "surf",
      "sail",
      "cook",
      "climb"
    ],
    "answer": 2,
    "cn": "你爸爸星期天喜歡做什麼？ — 他喜歡為我們煮晚餐。",
    "vocabIndex": 7
  },
  {
    "q": "We go to the theater to watch ______ every weekend. I like funny ones best.",
    "options": [
      "kites",
      "stamps",
      "drums",
      "movies"
    ],
    "answer": 3,
    "cn": "他們喜歡看電影嗎？ — 是的，他們喜歡。他們每個週末都去戲院。",
    "vocabIndex": 8
  },
  {
    "q": "My brother loves ______ books. He likes to read stories with many pictures and few words.",
    "options": [
      "sweet",
      "comic",
      "hungry",
      "thirsty"
    ],
    "answer": 1,
    "cn": "湯姆週末喜歡做什麼？ — 他喜歡看漫畫書。",
    "vocabIndex": 9
  },
  {
    "q": "You can't ______ here. The water in this river is too deep and fast.",
    "options": [
      "swim",
      "hike",
      "camp",
      "jog"
    ],
    "answer": 0,
    "cn": "你哥哥會游泳嗎？ — 是的，他會。他每週都去游泳池。",
    "vocabIndex": 10
  },
  {
    "q": "Many young people come to this beach to ______. They stand on their boards and ride the big waves.",
    "options": [
      "hike",
      "jog",
      "surf",
      "climb"
    ],
    "answer": 2,
    "cn": "你會衝浪嗎？ — 不，我不會。但我想在海灘學。",
    "vocabIndex": 11
  },
  {
    "q": "They will ______ around the island in a small boat. They need a lot of wind for the trip.",
    "options": [
      "sail",
      "hike",
      "jog",
      "climb"
    ],
    "answer": 0,
    "cn": "你叔叔會駕船嗎？ — 是的，他會。他常帶我們到湖上。",
    "vocabIndex": 12
  },
  {
    "q": "It takes two days to ______ this high mountain. You need strong legs and good shoes.",
    "options": [
      "swim",
      "sail",
      "climb",
      "surf"
    ],
    "answer": 2,
    "cn": "爺爺爬得上這座山嗎？ — 是的，他可以。他年紀大，但很強壯。",
    "vocabIndex": 13
  },
  {
    "q": "I am late! I have to ______ to the bus stop, or I will miss the seven o'clock bus.",
    "options": [
      "swim",
      "sail",
      "sing",
      "run"
    ],
    "answer": 3,
    "cn": "那對雙胞胎跑得快嗎？ — 是的，他們可以。他們是我們班跑最快的。",
    "vocabIndex": 14
  },
  {
    "q": "Lisa plays the ______ very well. Her fingers move fast over the black and white keys.",
    "options": [
      "drum",
      "piano",
      "flute",
      "violin"
    ],
    "answer": 1,
    "cn": "艾美會彈鋼琴嗎？ — 是的，她會。她彈得很好。",
    "vocabIndex": 15
  },
  {
    "q": "A ______ has four strings. You hold it under your chin and play it with a bow.",
    "options": [
      "violin",
      "piano",
      "drum",
      "flute"
    ],
    "answer": 0,
    "cn": "你會拉小提琴嗎？ — 不，我不會。但我姊姊會。",
    "vocabIndex": 16
  },
  {
    "q": "Ken plays the ______ and sings in a band. His has six strings.",
    "options": [
      "drum",
      "flute",
      "guitar",
      "piano"
    ],
    "answer": 2,
    "cn": "你爸爸會彈吉他嗎？ — 是的，他會。他邊彈邊唱給我們聽。",
    "vocabIndex": 17
  },
  {
    "q": "Tom plays the ______ in the school band. He hits them with two sticks.",
    "options": [
      "pianos",
      "drums",
      "flutes",
      "violins"
    ],
    "answer": 1,
    "cn": "湯姆會打鼓嗎？ — 不，他不會。但他想學。",
    "vocabIndex": 18
  },
  {
    "q": "A ______ is a long, thin instrument. You hold it to the side and blow into it.",
    "options": [
      "drum",
      "piano",
      "guitar",
      "flute"
    ],
    "answer": 3,
    "cn": "你的表姊妹們會吹長笛嗎？ — 是的，她們會。她們在音樂課吹。",
    "vocabIndex": 19
  },
  {
    "q": "Tall people are often good at ______. In this game, players throw a ball into a high net.",
    "options": [
      "basketball",
      "soccer",
      "chess",
      "badminton"
    ],
    "answer": 0,
    "cn": "我們放學後去打籃球吧。 — 好啊！操場見。",
    "vocabIndex": 20
  },
  {
    "q": "In ______, a player hits a small ball with a bat and then runs. It is very popular in Taiwan.",
    "options": [
      "soccer",
      "tennis",
      "basketball",
      "baseball"
    ],
    "answer": 3,
    "cn": "你想和我們一起打棒球嗎？ — 當然。我有新的球棒和手套。",
    "vocabIndex": 21
  },
  {
    "q": "In ______, eleven players on each team kick a ball. Only one player can touch it with his hands.",
    "options": [
      "tennis",
      "soccer",
      "baseball",
      "chess"
    ],
    "answer": 1,
    "cn": "我們去公園踢足球吧。 — 好主意！班和湯姆也可以來。",
    "vocabIndex": 22
  },
  {
    "q": "In ______, two players hit a small yellow ball over a low net.",
    "options": [
      "soccer",
      "baseball",
      "tennis",
      "chess"
    ],
    "answer": 2,
    "cn": "你這星期六想和我們一起打網球嗎？ — 抱歉，我不行。我有數學課。",
    "vocabIndex": 23
  },
  {
    "q": "In ______, players hit a light thing with feathers over a high net.",
    "options": [
      "soccer",
      "badminton",
      "baseball",
      "chess"
    ],
    "answer": 1,
    "cn": "我們在體育館打羽毛球吧。 — 好。外面風太大了。",
    "vocabIndex": 24
  },
  {
    "q": "We played ______ in PE class today. I ran away from the ball, but it hit me on the leg, so I was out.",
    "options": [
      "chess",
      "tennis",
      "dodge ball",
      "frisbee"
    ],
    "answer": 2,
    "cn": "你想跟我們一起玩躲避球嗎？ — 是的，我很樂意。好好玩！",
    "vocabIndex": 25
  },
  {
    "q": "Let's play ______ in the park. I will throw the plastic plate to you, and my dog will try to catch it.",
    "options": [
      "frisbee",
      "chess",
      "tennis",
      "soccer"
    ],
    "answer": 0,
    "cn": "我們在海灘玩飛盤吧。 — 太好了！我先丟給你。",
    "vocabIndex": 26
  },
  {
    "q": "______ is a game for two players. They move kings and queens on a board.",
    "options": [
      "Soccer",
      "Tennis",
      "Baseball",
      "chess"
    ],
    "answer": 3,
    "cn": "你想和爺爺跟我一起下西洋棋嗎？ — 當然，但是爺爺很厲害！",
    "vocabIndex": 27
  },
  {
    "q": "The children are kicking a ______ in the park. It rolled into the street just now.",
    "options": [
      "kite",
      "card",
      "ball",
      "doll"
    ],
    "answer": 2,
    "cn": "我們在院子裡玩球吧。 — 好，丟給我！",
    "vocabIndex": 28
  },
  {
    "q": "It is windy today. Let's go to the park and fly a ______. Hold the string and don't let go.",
    "options": [
      "ball",
      "kite",
      "doll",
      "card"
    ],
    "answer": 1,
    "cn": "你想和我們一起放風箏嗎？今天風很大。 — 是的，我很樂意。",
    "vocabIndex": 29
  },
  {
    "q": "We went ______ in the mountains last weekend. We slept in a tent and cooked over a fire.",
    "options": [
      "swimming",
      "surfing",
      "sailing",
      "camping"
    ],
    "answer": 3,
    "cn": "你這個週末想和我們一起去露營嗎？ — 好！我們來睡在星空下吧。",
    "vocabIndex": 30
  },
  {
    "q": "Let's have a ______ in the park this Sunday. I will bring sandwiches, fruit, and juice.",
    "options": [
      "picnic",
      "race",
      "band",
      "trip"
    ],
    "answer": 0,
    "cn": "你想和我們一起在公園野餐嗎？ — 當然。我會帶一些三明治。",
    "vocabIndex": 31
  },
  {
    "q": "We went ______ in the mountains yesterday. We walked for five hours, and my legs still hurt today.",
    "options": [
      "swimming",
      "surfing",
      "sailing",
      "hiking"
    ],
    "answer": 3,
    "cn": "我們明天去山上健行吧。 — 好。我們早上七點見面。",
    "vocabIndex": 32
  },
  {
    "q": "The children are ______ in the yard. They are running, laughing, and having fun.",
    "options": [
      "sailing",
      "surfing",
      "playing",
      "camping"
    ],
    "answer": 2,
    "cn": "孩子們現在在做什麼？ — 他們正在院子裡玩。",
    "vocabIndex": 33
  },
  {
    "q": "The baseball ______ starts at seven tonight. Let's go and cheer for our team.",
    "options": [
      "hobby",
      "game",
      "toy",
      "stamp"
    ],
    "answer": 1,
    "cn": "你現在在做什麼？ — 我正在和弟弟玩電腦遊戲。",
    "vocabIndex": 34
  },
  {
    "q": "The little boy got a new ______ for his birthday. It is a small red car, and he plays with it all day.",
    "options": [
      "toy",
      "hobby",
      "team",
      "race"
    ],
    "answer": 0,
    "cn": "寶寶現在在做什麼？ — 他正在玩他的玩具車。",
    "vocabIndex": 35
  },
  {
    "q": "My little sister plays with her ______ every day. She gives them names and makes clothes for them.",
    "options": [
      "kites",
      "stamps",
      "drums",
      "dolls"
    ],
    "answer": 3,
    "cn": "你妹妹現在在做什麼？ — 她正在玩她的洋娃娃。",
    "vocabIndex": 36
  },
  {
    "q": "I made a birthday ______ for my mom. I drew flowers on it and wrote \"I love you\" inside.",
    "options": [
      "kite",
      "card",
      "doll",
      "ball"
    ],
    "answer": 1,
    "cn": "艾美，你現在在做什麼？ — 我正在為媽媽做生日卡片。",
    "vocabIndex": 37
  },
  {
    "q": "Grandpa goes ______ by the river every Sunday. He usually catches two or three for dinner.",
    "options": [
      "jogging",
      "hiking",
      "fishing",
      "camping"
    ],
    "answer": 2,
    "cn": "爸爸和班叔叔現在在做什麼？ — 他們正在河邊釣魚。",
    "vocabIndex": 38
  },
  {
    "q": "Mom goes ______ in the park every morning. She runs slowly for thirty minutes to stay healthy.",
    "options": [
      "jogging",
      "fishing",
      "camping",
      "sailing"
    ],
    "answer": 0,
    "cn": "媽媽現在在做什麼？ — 她正在公園慢跑。",
    "vocabIndex": 39
  },
  {
    "q": "You should ______ every day. Running or swimming for thirty minutes is good for your health.",
    "options": [
      "lose",
      "win",
      "exercise",
      "paint"
    ],
    "answer": 2,
    "cn": "你多久運動一次？ — 一週三次。它讓我保持健康。",
    "vocabIndex": 40
  },
  {
    "q": "Lisa is good at ______. She can play basketball, tennis, and badminton very well.",
    "options": [
      "stamps",
      "bands",
      "kites",
      "sports"
    ],
    "answer": 3,
    "cn": "你哥哥多久做一次運動？ — 他每天放學後都運動。",
    "vocabIndex": 41
  },
  {
    "q": "Our class will take a ______ to Tainan next month. We will stay there for two days and visit old temples.",
    "options": [
      "trip",
      "hobby",
      "band",
      "fan"
    ],
    "answer": 0,
    "cn": "你們家多久去旅行一次？ — 我們每年夏天都去一次。",
    "vocabIndex": 42
  },
  {
    "q": "My brother plays the guitar in a ______. The four boys practice their songs every weekend.",
    "options": [
      "race",
      "band",
      "trip",
      "hobby"
    ],
    "answer": 1,
    "cn": "你的樂團多久練習一次？ — 我們一週練習兩次，在星期一和星期五。",
    "vocabIndex": 43
  },
  {
    "q": "Our basketball ______ won the game yesterday. All five players did a great job.",
    "options": [
      "band",
      "hobby",
      "trip",
      "team"
    ],
    "answer": 3,
    "cn": "你和你的隊友多久練習一次？ — 我們每星期二和星期四練習。",
    "vocabIndex": 44
  },
  {
    "q": "You need to put ______ on the envelope before you mail the letter. My grandpa collects them.",
    "options": [
      "kites",
      "cards",
      "stamps",
      "dolls"
    ],
    "answer": 2,
    "cn": "你爺爺空閒時通常做什麼？ — 他通常收集各國的郵票。",
    "vocabIndex": 45
  },
  {
    "q": "I am a big ______ of the singer. I have all her albums and go to every show.",
    "options": [
      "fan",
      "band",
      "team",
      "hobby"
    ],
    "answer": 0,
    "cn": "你空閒時通常做什麼？ — 我聽我最喜歡的歌手的歌。我是她的超級粉絲。",
    "vocabIndex": 46
  },
  {
    "q": "Ben ran the fastest in the 100-meter ______, so he got first prize.",
    "options": [
      "band",
      "race",
      "trip",
      "hobby"
    ],
    "answer": 1,
    "cn": "湯姆和班空閒時通常做什麼？ — 他們練跑步，準備運動會的賽跑。",
    "vocabIndex": 47
  },
  {
    "q": "I hope our team will ______ the game tonight. We have practiced hard for three months.",
    "options": [
      "lose",
      "paint",
      "win",
      "climb"
    ],
    "answer": 2,
    "cn": "你姊姊空閒時通常做什麼？ — 她練鋼琴，她想得第一名。",
    "vocabIndex": 48
  },
  {
    "q": "If you don't practice, you will ______ the game. The other team is very strong.",
    "options": [
      "win",
      "swim",
      "paint",
      "lose"
    ],
    "answer": 3,
    "cn": "你和朋友們空閒時通常做什麼？ — 我們打籃球。有時候我們會輸，但總是玩得很開心。",
    "vocabIndex": 49
  }
];

const LOOKUP = {
  "team": {
    "pos": "n.",
    "en_def": "a group of people who play or work together",
    "cn_def": "隊；團隊"
  },
  "race": {
    "pos": "n.",
    "en_def": "a game to see who is the fastest",
    "cn_def": "賽跑"
  },
  "hobby": {
    "pos": "n.",
    "en_def": "something you like to do in your free time",
    "cn_def": "嗜好"
  },
  "trip": {
    "pos": "n.",
    "en_def": "a visit to a place that is not near your home",
    "cn_def": "（短程）旅行"
  },
  "swimming": {
    "pos": "v.",
    "en_def": "to move through water using your arms and legs",
    "cn_def": "游泳"
  },
  "climbing": {
    "pos": "v.",
    "en_def": "to go up something, like a tree or a mountain",
    "cn_def": "爬；攀登"
  },
  "jogging": {
    "pos": "v.",
    "en_def": "to run slowly for exercise",
    "cn_def": "慢跑"
  },
  "singing": {
    "pos": "v.",
    "en_def": "to make music with your voice",
    "cn_def": "唱歌"
  },
  "kites": {
    "pos": "n.",
    "en_def": "a toy made of paper or cloth that flies in the wind on a long string",
    "cn_def": "風箏"
  },
  "songs": {
    "pos": "n.",
    "en_def": "a piece of music with words that you sing",
    "cn_def": "歌曲"
  },
  "dolls": {
    "pos": "n.",
    "en_def": "a toy that looks like a baby or a small person",
    "cn_def": "洋娃娃"
  },
  "stamps": {
    "pos": "n.",
    "en_def": "a small piece of paper that you put on a letter before you mail it",
    "cn_def": "郵票"
  },
  "music": {
    "pos": "n.",
    "en_def": "sounds that people sing or play and that are nice to hear",
    "cn_def": "音樂"
  },
  "chess": {
    "pos": "n.",
    "en_def": "a game for two players with kings and queens on a board",
    "cn_def": "西洋棋"
  },
  "tennis": {
    "pos": "n.",
    "en_def": "a game in which two or four players hit a small ball over a net",
    "cn_def": "網球"
  },
  "soccer": {
    "pos": "n.",
    "en_def": "a game in which players kick a ball into a goal",
    "cn_def": "足球"
  },
  "swim": {
    "pos": "v.",
    "en_def": "to move through water using your arms and legs",
    "cn_def": "游泳"
  },
  "dance": {
    "pos": "v.",
    "en_def": "to move your body to music",
    "cn_def": "跳舞"
  },
  "sail": {
    "pos": "v.",
    "en_def": "to travel on water in a boat",
    "cn_def": "航行；駕船"
  },
  "surf": {
    "pos": "v.",
    "en_def": "to ride on big waves in the sea on a board",
    "cn_def": "衝浪"
  },
  "drawing": {
    "pos": "v.",
    "en_def": "to make a picture with a pen or pencil",
    "cn_def": "畫圖"
  },
  "camping": {
    "pos": "v.",
    "en_def": "to sleep outside in a tent",
    "cn_def": "露營"
  },
  "hiking": {
    "pos": "v.",
    "en_def": "to take a long walk in the mountains or the country",
    "cn_def": "健行"
  },
  "painting": {
    "pos": "v.",
    "en_def": "to make a picture with wet colors and a brush",
    "cn_def": "（用顏料）畫圖"
  },
  "cook": {
    "pos": "v.",
    "en_def": "to make food ready to eat by heating it",
    "cn_def": "煮飯；烹調"
  },
  "climb": {
    "pos": "v.",
    "en_def": "to go up something, like a tree or a mountain",
    "cn_def": "爬；攀登"
  },
  "drums": {
    "pos": "n.",
    "en_def": "a round musical instrument that you hit with sticks",
    "cn_def": "鼓"
  },
  "movies": {
    "pos": "n.",
    "en_def": "a story with moving pictures that you watch in a theater or on TV",
    "cn_def": "電影"
  },
  "sweet": {
    "pos": "adj.",
    "en_def": "tasting like sugar",
    "cn_def": "甜的"
  },
  "comic": {
    "pos": "adj.",
    "en_def": "having stories told in pictures",
    "cn_def": "漫畫的"
  },
  "hungry": {
    "pos": "adj.",
    "en_def": "wanting to eat",
    "cn_def": "飢餓的"
  },
  "thirsty": {
    "pos": "adj.",
    "en_def": "wanting to drink",
    "cn_def": "口渴的"
  },
  "hike": {
    "pos": "v.",
    "en_def": "to take a long walk in the mountains or the country",
    "cn_def": "健行"
  },
  "camp": {
    "pos": "v.",
    "en_def": "to sleep outside in a tent",
    "cn_def": "露營"
  },
  "jog": {
    "pos": "v.",
    "en_def": "to run slowly for exercise",
    "cn_def": "慢跑"
  },
  "sing": {
    "pos": "v.",
    "en_def": "to make music with your voice",
    "cn_def": "唱歌"
  },
  "run": {
    "pos": "v.",
    "en_def": "to move very fast on your legs",
    "cn_def": "跑步"
  },
  "drum": {
    "pos": "n.",
    "en_def": "a round musical instrument that you hit with sticks",
    "cn_def": "鼓"
  },
  "piano": {
    "pos": "n.",
    "en_def": "a big musical instrument with black and white keys",
    "cn_def": "鋼琴"
  },
  "flute": {
    "pos": "n.",
    "en_def": "a long, thin musical instrument that you blow into",
    "cn_def": "長笛；笛子"
  },
  "violin": {
    "pos": "n.",
    "en_def": "a musical instrument with four strings that you hold under your chin",
    "cn_def": "小提琴"
  },
  "guitar": {
    "pos": "n.",
    "en_def": "a musical instrument with six strings that you play with your fingers",
    "cn_def": "吉他"
  },
  "pianos": {
    "pos": "n.",
    "en_def": "a big musical instrument with black and white keys",
    "cn_def": "鋼琴"
  },
  "flutes": {
    "pos": "n.",
    "en_def": "a long, thin musical instrument that you blow into",
    "cn_def": "長笛；笛子"
  },
  "violins": {
    "pos": "n.",
    "en_def": "a musical instrument with four strings that you hold under your chin",
    "cn_def": "小提琴"
  },
  "basketball": {
    "pos": "n.",
    "en_def": "a game in which players throw a big ball into a high net",
    "cn_def": "籃球"
  },
  "badminton": {
    "pos": "n.",
    "en_def": "a game in which players hit a light thing with feathers over a high net",
    "cn_def": "羽毛球"
  },
  "baseball": {
    "pos": "n.",
    "en_def": "a game in which players hit a small ball with a bat and run",
    "cn_def": "棒球"
  },
  "dodge ball": {
    "pos": "n.",
    "en_def": "a game in which players throw balls at each other and try not to get hit",
    "cn_def": "躲避球"
  },
  "frisbee": {
    "pos": "n.",
    "en_def": "a flat plastic ring or plate that people throw to each other for fun",
    "cn_def": "飛盤"
  },
  "kite": {
    "pos": "n.",
    "en_def": "a toy made of paper or cloth that flies in the wind on a long string",
    "cn_def": "風箏"
  },
  "card": {
    "pos": "n.",
    "en_def": "a piece of thick paper with words or pictures on it",
    "cn_def": "卡片"
  },
  "ball": {
    "pos": "n.",
    "en_def": "a round thing that you throw, kick, or hit in games",
    "cn_def": "球"
  },
  "doll": {
    "pos": "n.",
    "en_def": "a toy that looks like a baby or a small person",
    "cn_def": "洋娃娃"
  },
  "surfing": {
    "pos": "v.",
    "en_def": "to ride on big waves in the sea on a board",
    "cn_def": "衝浪"
  },
  "sailing": {
    "pos": "v.",
    "en_def": "to travel on water in a boat",
    "cn_def": "航行；駕船"
  },
  "picnic": {
    "pos": "n.",
    "en_def": "a meal that you take and eat outside",
    "cn_def": "野餐"
  },
  "band": {
    "pos": "n.",
    "en_def": "a group of people who play music together",
    "cn_def": "樂團"
  },
  "playing": {
    "pos": "v.",
    "en_def": "to have fun with toys or games; to take part in a sport",
    "cn_def": "玩；打（球）"
  },
  "game": {
    "pos": "n.",
    "en_def": "something you play for fun, often with rules",
    "cn_def": "遊戲；比賽"
  },
  "toy": {
    "pos": "n.",
    "en_def": "a thing for children to play with",
    "cn_def": "玩具"
  },
  "stamp": {
    "pos": "n.",
    "en_def": "a small piece of paper that you put on a letter before you mail it",
    "cn_def": "郵票"
  },
  "fishing": {
    "pos": "v.",
    "en_def": "to try to catch fish",
    "cn_def": "釣魚"
  },
  "lose": {
    "pos": "v.",
    "en_def": "to not win a game",
    "cn_def": "輸"
  },
  "win": {
    "pos": "v.",
    "en_def": "to be the first or the best in a game or race",
    "cn_def": "贏"
  },
  "exercise": {
    "pos": "v.",
    "en_def": "to move your body to stay strong and healthy",
    "cn_def": "運動"
  },
  "paint": {
    "pos": "v.",
    "en_def": "to make a picture with wet colors and a brush",
    "cn_def": "（用顏料）畫圖"
  },
  "bands": {
    "pos": "n.",
    "en_def": "a group of people who play music together",
    "cn_def": "樂團"
  },
  "sports": {
    "pos": "n.",
    "en_def": "games like basketball and tennis that people play for exercise and fun",
    "cn_def": "運動"
  },
  "fan": {
    "pos": "n.",
    "en_def": "a person who likes a singer, a team, or a sport very much",
    "cn_def": "粉絲；狂熱愛好者"
  },
  "cards": {
    "pos": "n.",
    "en_def": "a piece of thick paper with words or pictures on it",
    "cn_def": "卡片"
  }
};

const EXTRA_GLOSSES = {};
