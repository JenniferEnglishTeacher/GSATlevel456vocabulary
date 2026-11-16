// Topic 14 Subunit 1 Quiz Data: News & Journalism 新聞與新聞業
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T14 S01 - News & Journalism 新聞與新聞業",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "journalism",
    "pos": "n.",
    "cn_def": "新聞業；新聞工作",
    "en_def": "the work of collecting and writing news",
    "sentence": "My cousin studied {{BLANK}} at university, and now she writes stories about local problems for an online newspaper.",
    "cn": "我的表姊在大學主修新聞學，現在她為一家線上報紙撰寫關於地方問題的報導。"
  },
  {
    "word": "journalist",
    "pos": "n.",
    "cn_def": "記者；新聞工作者",
    "en_def": "a person who writes or reports the news",
    "sentence": "The {{BLANK}} waited outside the hospital for hours, but the doctors refused to answer any of her questions.",
    "cn": "那位記者在醫院外等了好幾個小時，但醫生們拒絕回答她的任何問題。"
  },
  {
    "word": "reporter",
    "pos": "n.",
    "cn_def": "記者；採訪員",
    "en_def": "a person who finds and tells news stories",
    "sentence": "A young {{BLANK}} was sent to cover the typhoon, so he stood in the rain and described the damage on live TV.",
    "cn": "一位年輕的記者被派去報導颱風，所以他站在雨中，在電視直播上描述災情。"
  },
  {
    "word": "correspondent",
    "pos": "n.",
    "cn_def": "特派員；通訊記者",
    "en_def": "a journalist who reports from a particular place or topic",
    "sentence": "The BBC's {{BLANK}} in Tokyo has lived in Japan for ten years, so she understands the local culture very well.",
    "cn": "英國廣播公司駐東京的特派員已經在日本住了十年，所以她非常了解當地文化。"
  },
  {
    "word": "editor",
    "pos": "n.",
    "cn_def": "編輯；主編",
    "en_def": "a person who checks and decides what is published",
    "sentence": "The {{BLANK}} asked me to cut my article from 1,000 words to 600, because there was not enough space on the page.",
    "cn": "編輯要求我把文章從一千字刪到六百字，因為版面上沒有足夠的空間。"
  },
  {
    "word": "editorial",
    "pos": "n.",
    "cn_def": "社論",
    "en_def": "a newspaper article giving the paper's opinion",
    "sentence": "Today's {{BLANK}} criticises the government's new housing plan, and many readers have written letters to agree with it.",
    "cn": "今天的社論批評政府的新住宅計畫，而許多讀者寫信表示贊同。"
  },
  {
    "word": "headline",
    "pos": "n.",
    "cn_def": "新聞標題；頭條",
    "en_def": "the title of a news story in large letters",
    "sentence": "The {{BLANK}} said that prices would double, but when I read the whole article, the real increase was only five percent.",
    "cn": "那則標題說價格會翻倍，但當我讀完整篇文章時，實際漲幅只有百分之五。"
  },
  {
    "word": "front page",
    "pos": "n.phr.",
    "cn_def": "頭版",
    "en_def": "the first page of a newspaper with the main news",
    "sentence": "The photo of the flooded village appeared on the {{BLANK}} of every newspaper, so the whole country saw it the next morning.",
    "cn": "那張被淹沒村莊的照片出現在每份報紙的頭版上，所以隔天早上全國的人都看到了。"
  },
  {
    "word": "newspaper",
    "pos": "n.",
    "cn_def": "報紙",
    "en_def": "printed pages of news published daily or weekly",
    "sentence": "My grandfather still buys a paper {{BLANK}} every morning, although most of his friends now read the news on their phones.",
    "cn": "我爺爺每天早上仍然買一份紙本報紙，儘管他大部分朋友現在都用手機看新聞。"
  },
  {
    "word": "newsroom",
    "pos": "n.",
    "cn_def": "新聞編輯室",
    "en_def": "the office where journalists prepare the news",
    "sentence": "The {{BLANK}} was very busy on election night, and nobody went home until all the results had been reported.",
    "cn": "選舉當晚新聞編輯室非常忙碌，直到所有結果都報導完之前沒有人回家。"
  },
  {
    "word": "press conference",
    "pos": "n.phr.",
    "cn_def": "記者會",
    "en_def": "a meeting where someone answers reporters' questions",
    "sentence": "The mayor held a {{BLANK}} after the fire, but he left quickly because reporters kept asking difficult questions.",
    "cn": "市長在火災後召開了記者會，但他很快就離開了，因為記者們一直問困難的問題。"
  },
  {
    "word": "press release",
    "pos": "n.phr.",
    "cn_def": "新聞稿",
    "en_def": "an official statement given to journalists",
    "sentence": "The company sent out a {{BLANK}} about its new phone, and dozens of websites copied the text without checking it.",
    "cn": "那家公司發布了一份關於新手機的新聞稿，而幾十個網站沒有查證就照抄了內容。"
  },
  {
    "word": "scoop",
    "pos": "n.",
    "cn_def": "獨家新聞",
    "en_def": "an important story one newspaper reports first",
    "sentence": "The student newspaper got a big {{BLANK}} when it discovered the school's budget problems, and even national TV reported it later.",
    "cn": "學生報發現學校的預算問題時拿到了一則大獨家新聞，後來連全國電視台都報導了。"
  },
  {
    "word": "exclusive",
    "pos": "adj.",
    "cn_def": "獨家的",
    "en_def": "only given to one news company",
    "sentence": "The singer gave an {{BLANK}} interview to one magazine, so fans had to buy that magazine to read about her new album.",
    "cn": "那位歌手只接受一家雜誌的獨家專訪，所以粉絲必須買那本雜誌才能讀到她新專輯的消息。"
  },
  {
    "word": "byline",
    "pos": "n.",
    "cn_def": "署名欄（作者署名）",
    "en_def": "the line that shows who wrote an article",
    "sentence": "I was very proud to see my name in the {{BLANK}} of the school magazine, because it was my first published article.",
    "cn": "看到我的名字出現在校刊的署名欄上，我非常驕傲，因為那是我第一篇刊出的文章。"
  },
  {
    "word": "columnist",
    "pos": "n.",
    "cn_def": "專欄作家",
    "en_def": "a writer who regularly writes opinion pieces",
    "sentence": "The {{BLANK}} writes about family life every Sunday, and many parents say her funny stories make them feel less alone.",
    "cn": "那位專欄作家每個星期日寫關於家庭生活的文章，許多父母說她有趣的故事讓他們覺得不那麼孤單。"
  },
  {
    "word": "op-ed",
    "pos": "n.",
    "cn_def": "特約評論；投書",
    "en_def": "an opinion article written by someone outside the newspaper",
    "sentence": "A doctor wrote an {{BLANK}} about the dangers of vaping, and the newspaper published it because many teenagers are affected.",
    "cn": "一位醫生寫了一篇關於電子菸危害的投書，報社刊登了它，因為許多青少年受到影響。"
  },
  {
    "word": "tabloid",
    "pos": "n.",
    "cn_def": "小報；八卦報",
    "en_def": "a popular newspaper with short, exciting stories about famous people",
    "sentence": "The {{BLANK}} printed a shocking story about the actor's private life, but later it had to admit that the story was false.",
    "cn": "那份小報刊登了一則關於那位演員私生活的驚人報導，但後來不得不承認那則報導是假的。"
  },
  {
    "word": "newsworthy",
    "pos": "adj.",
    "cn_def": "有新聞價值的",
    "en_def": "interesting or important enough to report",
    "sentence": "The editor said that a cat stuck in a tree was not {{BLANK}}, but the story became popular online anyway.",
    "cn": "編輯說一隻卡在樹上的貓沒有新聞價值，但這則故事還是在網路上爆紅了。"
  },
  {
    "word": "breaking news",
    "pos": "n.phr.",
    "cn_def": "即時新聞；快訊",
    "en_def": "news about something that is happening right now",
    "sentence": "We were watching a cooking show when {{BLANK}} about the earthquake interrupted the programme, so everyone stopped and listened.",
    "cn": "我們正在看烹飪節目時，關於地震的即時新聞打斷了節目，所以大家都停下來聆聽。"
  },
  {
    "word": "investigative",
    "pos": "adj.",
    "cn_def": "調查性的",
    "en_def": "trying to find hidden facts",
    "sentence": "The {{BLANK}} report took six months to complete, but it finally showed how the factory had been polluting the river.",
    "cn": "那篇調查報導花了六個月才完成，但最終揭露了工廠是如何汙染河流的。"
  },
  {
    "word": "whistle-blower",
    "pos": "n.",
    "cn_def": "吹哨者；揭弊者",
    "en_def": "a person who tells the public about wrongdoing at work",
    "sentence": "The {{BLANK}} lost her job after she reported the company's illegal dumping, but she said she did not regret telling the truth.",
    "cn": "那位吹哨者揭發公司非法傾倒廢棄物後丟了工作，但她說她不後悔說出真相。"
  },
  {
    "word": "informant",
    "pos": "n.",
    "cn_def": "線人；消息提供者",
    "en_def": "a person who gives secret information to someone",
    "sentence": "The journalist promised never to reveal the name of her {{BLANK}}, because he could lose his job if people found out.",
    "cn": "那名記者承諾絕不透露她線人的名字，因為如果別人發現，他可能會丟掉工作。"
  },
  {
    "word": "eyewitness",
    "pos": "n.",
    "cn_def": "目擊者",
    "en_def": "a person who saw an event happen",
    "sentence": "An {{BLANK}} told reporters that the car was driving very fast, and her description helped the police understand the accident.",
    "cn": "一位目擊者告訴記者那輛車開得非常快，而她的描述幫助警方了解這起事故。"
  },
  {
    "word": "paparazzi",
    "pos": "n.",
    "cn_def": "狗仔隊",
    "en_def": "photographers who follow famous people to take pictures",
    "sentence": "The {{BLANK}} waited outside the restaurant all evening, so the famous couple had to leave through the kitchen door.",
    "cn": "狗仔隊整晚守在餐廳外面，所以那對名人夫妻只好從廚房的門離開。"
  },
  {
    "word": "obituary",
    "pos": "n.",
    "cn_def": "訃聞",
    "en_def": "a news article about a person who has recently died",
    "sentence": "The local paper published an {{BLANK}} for the old teacher, and many former students shared it online with kind memories.",
    "cn": "地方報紙為那位老教師刊登了一則訃聞，許多以前的學生在網路上分享並寫下溫馨的回憶。"
  },
  {
    "word": "news outlet",
    "pos": "n.phr.",
    "cn_def": "新聞媒體；新聞管道",
    "en_def": "a company or website that publishes news",
    "sentence": "Several {{BLANK}} reported the same false story, because they all copied it from one social media post without checking.",
    "cn": "好幾家新聞媒體報導了同一則假新聞，因為它們都沒有查證就從一則社群貼文抄來。"
  },
  {
    "word": "press freedom",
    "pos": "n.phr.",
    "cn_def": "新聞自由",
    "en_def": "the right of the media to report without government control",
    "sentence": "Taiwan ranks highly for {{BLANK}}, so journalists here can criticise the government without fear of going to prison.",
    "cn": "台灣的新聞自由排名很高，所以這裡的記者可以批評政府而不必擔心坐牢。"
  },
  {
    "word": "paywall",
    "pos": "n.",
    "cn_def": "付費牆",
    "en_def": "a system that makes you pay to read online articles",
    "sentence": "I wanted to read the full article, but it was behind a {{BLANK}}, so I only saw the first two paragraphs.",
    "cn": "我想讀完整篇文章，但它被放在付費牆後面，所以我只看到前兩段。"
  },
  {
    "word": "sensational",
    "pos": "adj.",
    "cn_def": "聳動的；譁眾取寵的",
    "en_def": "made to shock or excite people rather than inform them",
    "sentence": "The website uses {{BLANK}} headlines to attract clicks, but the articles themselves usually contain very little real information.",
    "cn": "那個網站使用聳動的標題來吸引點擊，但文章本身通常只有很少的真實資訊。"
  },
  {
    "word": "censor",
    "pos": "v.",
    "cn_def": "審查；刪減",
    "en_def": "to remove parts of news, books or films that authorities dislike",
    "sentence": "The government {{BLANK}} the documentary before it was shown, so viewers never saw the scenes of the protest.",
    "cn": "政府在紀錄片播出前就審查刪剪了它，所以觀眾從未看到抗議的畫面。"
  },
  {
    "word": "censorship",
    "pos": "n.",
    "cn_def": "審查制度",
    "en_def": "the control of what people can say, read or watch",
    "sentence": "Strict {{BLANK}} means that some citizens cannot use foreign websites, so they often rely on VPNs to read international news.",
    "cn": "嚴格的審查制度意味著有些公民無法使用外國網站，所以他們常依靠 VPN 來閱讀國際新聞。"
  }
];

const MCQS = [
  {
    "q": "My cousin studied _____ at university, and now she writes stories about local problems for an online newspaper.",
    "options": [
      "snippet",
      "impostor",
      "journalism",
      "presenter"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The _____ waited outside the hospital for hours, but the doctors refused to answer any of her questions.",
    "options": [
      "journalist",
      "edition",
      "marketing",
      "defamation"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "A young _____ was sent to cover the typhoon, so he stood in the rain and described the damage on live TV.",
    "options": [
      "testimony",
      "clickbait",
      "television",
      "reporter"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The BBC's _____ in Tokyo has lived in Japan for ten years, so she understands the local culture very well.",
    "options": [
      "logo",
      "correspondent",
      "listener",
      "host"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The _____ asked me to cut my article from 1,000 words to 600, because there was not enough space on the page.",
    "options": [
      "folly",
      "semblance",
      "editor",
      "sarcasm"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Today's _____ criticises the government's new housing plan, and many readers have written letters to agree with it.",
    "options": [
      "troll",
      "editorial",
      "doomscrolling",
      "infodemic"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The _____ said that prices would double, but when I read the whole article, the real increase was only five percent.",
    "options": [
      "detractor",
      "troll",
      "host",
      "headline"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The photo of the flooded village appeared on the _____ of every newspaper, so the whole country saw it the next morning.",
    "options": [
      "front page",
      "product placement",
      "commercial break",
      "active listening"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "My grandfather still buys a paper _____ every morning, although most of his friends now read the news on their phones.",
    "options": [
      "episode",
      "sensationalism",
      "newspaper",
      "taboo"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The _____ was very busy on election night, and nobody went home until all the results had been reported.",
    "options": [
      "moderator",
      "newsroom",
      "metadata",
      "impunity"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The mayor held a _____ after the fire, but he left quickly because reporters kept asking difficult questions.",
    "options": [
      "press conference",
      "product placement",
      "reality show",
      "print media"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The company sent out a _____ about its new phone, and dozens of websites copied the text without checking it.",
    "options": [
      "stage fright",
      "social media",
      "echo chamber",
      "press release"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The student newspaper got a big _____ when it discovered the school's budget problems, and even national TV reported it later.",
    "options": [
      "scoop",
      "euphemism",
      "spin",
      "cyberbullying"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The singer gave an _____ interview to one magazine, so fans had to buy that magazine to read about her new album.",
    "options": [
      "accusatory",
      "offensive",
      "talkative",
      "exclusive"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "I was very proud to see my name in the _____ of the school magazine, because it was my first published article.",
    "options": [
      "satire",
      "slander",
      "byline",
      "newscast"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The _____ writes about family life every Sunday, and many parents say her funny stories make them feel less alone.",
    "options": [
      "euphemism",
      "columnist",
      "meme",
      "vlogger"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "A doctor wrote an _____ about the dangers of vaping, and the newspaper published it because many teenagers are affected.",
    "options": [
      "op-ed",
      "gesture",
      "cyberbullying",
      "hyperbole"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The _____ printed a shocking story about the actor's private life, but later it had to admit that the story was false.",
    "options": [
      "treatise",
      "tabloid",
      "impostor",
      "intent"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The editor said that a cat stuck in a tree was not _____, but the story became popular online anyway.",
    "options": [
      "wilful",
      "informative",
      "deceitful",
      "newsworthy"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "We were watching a cooking show when _____ about the earthquake interrupted the programme, so everyone stopped and listened.",
    "options": [
      "filter bubble",
      "stage fright",
      "breaking news",
      "social media"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The _____ report took six months to complete, but it finally showed how the factory had been polluting the river.",
    "options": [
      "outspoken",
      "one-sided",
      "alarmist",
      "investigative"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The _____ lost her job after she reported the company's illegal dumping, but she said she did not regret telling the truth.",
    "options": [
      "whistle-blower",
      "follower",
      "uproar",
      "voicemail"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The journalist promised never to reveal the name of her _____, because he could lose his job if people found out.",
    "options": [
      "profile",
      "consumer",
      "informant",
      "plurality"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "An _____ told reporters that the car was driving very fast, and her description helped the police understand the accident.",
    "options": [
      "marketing",
      "eyewitness",
      "airwaves",
      "furore"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The _____ waited outside the restaurant all evening, so the famous couple had to leave through the kitchen door.",
    "options": [
      "spin",
      "onslaught",
      "paparazzi",
      "intent"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The local paper published an _____ for the old teacher, and many former students shared it online with kind memories.",
    "options": [
      "obituary",
      "scandal",
      "dossier",
      "metadata"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Several _____ reported the same false story, because they all copied it from one social media post without checking.",
    "options": [
      "reverse image search",
      "small talk",
      "content creator",
      "news outlet"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Taiwan ranks highly for _____, so journalists here can criticise the government without fear of going to prison.",
    "options": [
      "screen time",
      "press freedom",
      "fake news",
      "group chat"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "I wanted to read the full article, but it was behind a _____, so I only saw the first two paragraphs.",
    "options": [
      "airwaves",
      "torrent",
      "paywall",
      "satire"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The website uses _____ headlines to attract clicks, but the articles themselves usually contain very little real information.",
    "options": [
      "evidence-based",
      "watertight",
      "accusatory",
      "sensational"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The government _____ the documentary before it was shown, so viewers never saw the scenes of the protest.",
    "options": [
      "censor",
      "repost",
      "profess",
      "shroud"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "Strict _____ means that some citizens cannot use foreign websites, so they often rely on VPNs to read international news.",
    "options": [
      "dossier",
      "censorship",
      "fanfare",
      "spin"
    ],
    "answer": 1,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "journalism": {
    "pos": "n.",
    "en_def": "the work of collecting and writing news",
    "cn_def": "新聞業；新聞工作"
  },
  "journalist": {
    "pos": "n.",
    "en_def": "a person who writes or reports the news",
    "cn_def": "記者；新聞工作者"
  },
  "reporter": {
    "pos": "n.",
    "en_def": "a person who finds and tells news stories",
    "cn_def": "記者；採訪員"
  },
  "correspondent": {
    "pos": "n.",
    "en_def": "a journalist who reports from a particular place or topic",
    "cn_def": "特派員；通訊記者"
  },
  "editor": {
    "pos": "n.",
    "en_def": "a person who checks and decides what is published",
    "cn_def": "編輯；主編"
  },
  "editorial": {
    "pos": "n.",
    "en_def": "a newspaper article giving the paper's opinion",
    "cn_def": "社論"
  },
  "headline": {
    "pos": "n.",
    "en_def": "the title of a news story in large letters",
    "cn_def": "新聞標題；頭條"
  },
  "front page": {
    "pos": "n.phr.",
    "en_def": "the first page of a newspaper with the main news",
    "cn_def": "頭版"
  },
  "newspaper": {
    "pos": "n.",
    "en_def": "printed pages of news published daily or weekly",
    "cn_def": "報紙"
  },
  "newsroom": {
    "pos": "n.",
    "en_def": "the office where journalists prepare the news",
    "cn_def": "新聞編輯室"
  },
  "press conference": {
    "pos": "n.phr.",
    "en_def": "a meeting where someone answers reporters' questions",
    "cn_def": "記者會"
  },
  "press release": {
    "pos": "n.phr.",
    "en_def": "an official statement given to journalists",
    "cn_def": "新聞稿"
  },
  "scoop": {
    "pos": "n.",
    "en_def": "an important story one newspaper reports first",
    "cn_def": "獨家新聞"
  },
  "exclusive": {
    "pos": "adj.",
    "en_def": "only given to one news company",
    "cn_def": "獨家的"
  },
  "byline": {
    "pos": "n.",
    "en_def": "the line that shows who wrote an article",
    "cn_def": "署名欄（作者署名）"
  },
  "columnist": {
    "pos": "n.",
    "en_def": "a writer who regularly writes opinion pieces",
    "cn_def": "專欄作家"
  },
  "op-ed": {
    "pos": "n.",
    "en_def": "an opinion article written by someone outside the newspaper",
    "cn_def": "特約評論；投書"
  },
  "tabloid": {
    "pos": "n.",
    "en_def": "a popular newspaper with short, exciting stories about famous people",
    "cn_def": "小報；八卦報"
  },
  "newsworthy": {
    "pos": "adj.",
    "en_def": "interesting or important enough to report",
    "cn_def": "有新聞價值的"
  },
  "breaking news": {
    "pos": "n.phr.",
    "en_def": "news about something that is happening right now",
    "cn_def": "即時新聞；快訊"
  },
  "investigative": {
    "pos": "adj.",
    "en_def": "trying to find hidden facts",
    "cn_def": "調查性的"
  },
  "whistle-blower": {
    "pos": "n.",
    "en_def": "a person who tells the public about wrongdoing at work",
    "cn_def": "吹哨者；揭弊者"
  },
  "informant": {
    "pos": "n.",
    "en_def": "a person who gives secret information to someone",
    "cn_def": "線人；消息提供者"
  },
  "eyewitness": {
    "pos": "n.",
    "en_def": "a person who saw an event happen",
    "cn_def": "目擊者"
  },
  "paparazzi": {
    "pos": "n.",
    "en_def": "photographers who follow famous people to take pictures",
    "cn_def": "狗仔隊"
  },
  "obituary": {
    "pos": "n.",
    "en_def": "a news article about a person who has recently died",
    "cn_def": "訃聞"
  },
  "news outlet": {
    "pos": "n.phr.",
    "en_def": "a company or website that publishes news",
    "cn_def": "新聞媒體；新聞管道"
  },
  "press freedom": {
    "pos": "n.phr.",
    "en_def": "the right of the media to report without government control",
    "cn_def": "新聞自由"
  },
  "paywall": {
    "pos": "n.",
    "en_def": "a system that makes you pay to read online articles",
    "cn_def": "付費牆"
  },
  "sensational": {
    "pos": "adj.",
    "en_def": "made to shock or excite people rather than inform them",
    "cn_def": "聳動的；譁眾取寵的"
  },
  "censor": {
    "pos": "v.",
    "en_def": "to remove parts of news, books or films that authorities dislike",
    "cn_def": "審查；刪減"
  },
  "censorship": {
    "pos": "n.",
    "en_def": "the control of what people can say, read or watch",
    "cn_def": "審查制度"
  },
  "snippet": {
    "pos": "n.",
    "en_def": "a small piece of information or conversation",
    "cn_def": "片段；零星資訊"
  },
  "impostor": {
    "pos": "n.",
    "en_def": "a person who pretends to be someone else",
    "cn_def": "冒牌貨；冒名者"
  },
  "presenter": {
    "pos": "n.",
    "en_def": "a person who introduces a TV or radio programme",
    "cn_def": "節目主持人；主播"
  },
  "edition": {
    "pos": "n.",
    "en_def": "one printed version of a newspaper, book or magazine",
    "cn_def": "版；版本；期"
  },
  "marketing": {
    "pos": "n.",
    "en_def": "the work of promoting and selling products",
    "cn_def": "行銷"
  },
  "defamation": {
    "pos": "n.",
    "en_def": "harming someone's reputation by saying false things",
    "cn_def": "誹謗"
  },
  "testimony": {
    "pos": "n.",
    "en_def": "a formal statement about what someone saw or knows",
    "cn_def": "證詞"
  },
  "clickbait": {
    "pos": "n.",
    "en_def": "online content with a misleading title to get clicks",
    "cn_def": "釣魚標題；點擊誘餌"
  },
  "television": {
    "pos": "n.",
    "en_def": "a system or machine for watching programmes",
    "cn_def": "電視"
  },
  "logo": {
    "pos": "n.",
    "en_def": "a symbol that represents a company",
    "cn_def": "商標；標誌"
  },
  "listener": {
    "pos": "n.",
    "en_def": "a person who listens to a radio programme",
    "cn_def": "聽眾"
  },
  "host": {
    "pos": "n.",
    "en_def": "the person who introduces a show and talks to guests",
    "cn_def": "主持人"
  },
  "folly": {
    "pos": "n.",
    "en_def": "a foolish action or idea",
    "cn_def": "愚蠢；愚行"
  },
  "semblance": {
    "pos": "n.",
    "en_def": "a situation that looks like something but may not be",
    "cn_def": "表象；外觀"
  },
  "sarcasm": {
    "pos": "n.",
    "en_def": "saying the opposite of what you mean to mock someone",
    "cn_def": "諷刺；挖苦"
  },
  "troll": {
    "pos": "n.",
    "en_def": "a person who posts rude messages to upset others",
    "cn_def": "網路酸民"
  },
  "doomscrolling": {
    "pos": "n.",
    "en_def": "reading bad news online for too long",
    "cn_def": "末日滾動；狂刷負面新聞"
  },
  "infodemic": {
    "pos": "n.",
    "en_def": "too much information, including false information, during a crisis",
    "cn_def": "資訊疫情；訊息氾濫"
  },
  "detractor": {
    "pos": "n.",
    "en_def": "a person who criticises someone or something",
    "cn_def": "批評者；貶低者"
  },
  "product placement": {
    "pos": "n.phr.",
    "en_def": "showing a brand inside a film or show to advertise it",
    "cn_def": "置入性行銷"
  },
  "commercial break": {
    "pos": "n.phr.",
    "en_def": "a pause in a programme for adverts",
    "cn_def": "廣告時間；進廣告"
  },
  "active listening": {
    "pos": "n.phr.",
    "en_def": "listening carefully and showing that you understand",
    "cn_def": "主動聆聽；積極傾聽"
  },
  "episode": {
    "pos": "n.",
    "en_def": "one part of a TV or radio series",
    "cn_def": "（一）集"
  },
  "sensationalism": {
    "pos": "n.",
    "en_def": "presenting news in a shocking way to attract attention",
    "cn_def": "譁眾取寵的報導手法；煽情主義"
  },
  "taboo": {
    "pos": "n.",
    "en_def": "a subject people avoid talking about",
    "cn_def": "禁忌"
  },
  "moderator": {
    "pos": "n.",
    "en_def": "a person who checks and controls posts in an online group",
    "cn_def": "版主；內容審核員"
  },
  "metadata": {
    "pos": "n.",
    "en_def": "hidden information about a digital file",
    "cn_def": "詮釋資料；後設資料"
  },
  "impunity": {
    "pos": "n.",
    "en_def": "freedom from punishment",
    "cn_def": "不受懲罰"
  },
  "reality show": {
    "pos": "n.phr.",
    "en_def": "a programme that films ordinary people in real situations",
    "cn_def": "真人實境秀"
  },
  "print media": {
    "pos": "n.phr.",
    "en_def": "newspapers and magazines printed on paper",
    "cn_def": "平面媒體"
  },
  "stage fright": {
    "pos": "n.phr.",
    "en_def": "nervousness before performing or speaking in public",
    "cn_def": "怯場"
  },
  "social media": {
    "pos": "n.phr.",
    "en_def": "websites and apps where people share content and talk",
    "cn_def": "社群媒體"
  },
  "echo chamber": {
    "pos": "n.phr.",
    "en_def": "an online space where you only hear opinions like your own",
    "cn_def": "同溫層；回音室"
  },
  "euphemism": {
    "pos": "n.",
    "en_def": "a polite word used instead of an unpleasant one",
    "cn_def": "委婉語"
  },
  "spin": {
    "pos": "n.",
    "en_def": "presenting information in a way that makes you look good",
    "cn_def": "（對消息的）粉飾；操弄說法"
  },
  "cyberbullying": {
    "pos": "n.",
    "en_def": "hurting or threatening someone online",
    "cn_def": "網路霸凌"
  },
  "accusatory": {
    "pos": "adj.",
    "en_def": "suggesting that someone has done wrong",
    "cn_def": "指責的；控訴的"
  },
  "offensive": {
    "pos": "adj.",
    "en_def": "rude in a way that upsets people",
    "cn_def": "冒犯的；無禮的"
  },
  "talkative": {
    "pos": "adj.",
    "en_def": "liking to talk a lot",
    "cn_def": "健談的；愛說話的"
  },
  "satire": {
    "pos": "n.",
    "en_def": "humour that makes fun of people or ideas to criticise them",
    "cn_def": "諷刺作品"
  },
  "slander": {
    "pos": "n.",
    "en_def": "false spoken statements that damage someone's reputation",
    "cn_def": "（口頭）誹謗；中傷"
  },
  "newscast": {
    "pos": "n.",
    "en_def": "a news programme on TV or radio",
    "cn_def": "新聞報導節目"
  },
  "meme": {
    "pos": "n.",
    "en_def": "a funny image or text copied and shared online",
    "cn_def": "迷因；梗圖"
  },
  "vlogger": {
    "pos": "n.",
    "en_def": "a person who makes video blogs",
    "cn_def": "影音部落客；Vlogger"
  },
  "gesture": {
    "pos": "n.",
    "en_def": "a movement of the hand or head to show meaning",
    "cn_def": "手勢；姿態"
  },
  "hyperbole": {
    "pos": "n.",
    "en_def": "a way of speaking that exaggerates a lot",
    "cn_def": "誇飾；誇張法"
  },
  "treatise": {
    "pos": "n.",
    "en_def": "a long, serious piece of writing on a subject",
    "cn_def": "專著；論文"
  },
  "intent": {
    "pos": "n.",
    "en_def": "what someone plans to do",
    "cn_def": "意圖；目的"
  },
  "wilful": {
    "pos": "adj.",
    "en_def": "done on purpose, knowing it is wrong",
    "cn_def": "蓄意的；故意的"
  },
  "informative": {
    "pos": "adj.",
    "en_def": "giving useful information",
    "cn_def": "有益的；資訊豐富的"
  },
  "deceitful": {
    "pos": "adj.",
    "en_def": "trying to make people believe things that are false",
    "cn_def": "欺詐的；不誠實的"
  },
  "filter bubble": {
    "pos": "n.phr.",
    "en_def": "when apps only show you content they think you like",
    "cn_def": "過濾氣泡"
  },
  "outspoken": {
    "pos": "adj.",
    "en_def": "saying exactly what you think in public",
    "cn_def": "直言不諱的；敢言的"
  },
  "one-sided": {
    "pos": "adj.",
    "en_def": "showing only one point of view",
    "cn_def": "片面的；一面倒的"
  },
  "alarmist": {
    "pos": "adj.",
    "en_def": "making people worried without good reason",
    "cn_def": "危言聳聽的"
  },
  "follower": {
    "pos": "n.",
    "en_def": "a person who chooses to see someone's posts",
    "cn_def": "追蹤者；粉絲"
  },
  "uproar": {
    "pos": "n.",
    "en_def": "a lot of public anger or noisy protest",
    "cn_def": "騷動；強烈抗議"
  },
  "voicemail": {
    "pos": "n.",
    "en_def": "a spoken message left on a phone",
    "cn_def": "語音留言"
  },
  "profile": {
    "pos": "n.",
    "en_def": "the page with information about a user",
    "cn_def": "個人檔案；個人頁面"
  },
  "consumer": {
    "pos": "n.",
    "en_def": "a person who buys goods or services",
    "cn_def": "消費者"
  },
  "plurality": {
    "pos": "n.",
    "en_def": "a large number of different things",
    "cn_def": "多元；多數"
  },
  "airwaves": {
    "pos": "n.",
    "en_def": "the radio signals used for broadcasting",
    "cn_def": "廣播電波；廣播節目"
  },
  "furore": {
    "pos": "n.",
    "en_def": "a sudden expression of public anger",
    "cn_def": "騷動；公憤"
  },
  "onslaught": {
    "pos": "n.",
    "en_def": "a very strong attack or a huge amount of something",
    "cn_def": "猛烈攻擊；大量湧現"
  },
  "scandal": {
    "pos": "n.",
    "en_def": "an event that shocks the public because it is wrong",
    "cn_def": "醜聞"
  },
  "dossier": {
    "pos": "n.",
    "en_def": "a set of documents about a person or event",
    "cn_def": "檔案；卷宗"
  },
  "reverse image search": {
    "pos": "n.phr.",
    "en_def": "a search that finds where a picture first appeared",
    "cn_def": "以圖搜圖；反向圖片搜尋"
  },
  "small talk": {
    "pos": "n.phr.",
    "en_def": "polite conversation about unimportant things",
    "cn_def": "閒聊；寒暄"
  },
  "content creator": {
    "pos": "n.phr.",
    "en_def": "a person who makes videos, posts or other online material",
    "cn_def": "內容創作者"
  },
  "screen time": {
    "pos": "n.phr.",
    "en_def": "the time you spend looking at a screen",
    "cn_def": "螢幕使用時間"
  },
  "fake news": {
    "pos": "n.phr.",
    "en_def": "false stories that look like real news",
    "cn_def": "假新聞"
  },
  "group chat": {
    "pos": "n.phr.",
    "en_def": "an online conversation with several people at once",
    "cn_def": "群組聊天"
  },
  "torrent": {
    "pos": "n.",
    "en_def": "a large amount of something arriving suddenly",
    "cn_def": "洪流；大量湧現"
  },
  "evidence-based": {
    "pos": "adj.",
    "en_def": "based on facts from research",
    "cn_def": "以證據為基礎的；實證的"
  },
  "watertight": {
    "pos": "adj.",
    "en_def": "so strong it cannot be questioned",
    "cn_def": "無懈可擊的；嚴密的"
  },
  "repost": {
    "pos": "v.",
    "en_def": "to share someone else's post again",
    "cn_def": "轉發；轉貼"
  },
  "profess": {
    "pos": "v.",
    "en_def": "to claim something, often falsely",
    "cn_def": "聲稱；自稱"
  },
  "shroud": {
    "pos": "v.",
    "en_def": "to cover or hide something",
    "cn_def": "籠罩；隱藏"
  },
  "fanfare": {
    "pos": "n.",
    "en_def": "a lot of public attention and celebration",
    "cn_def": "大肆宣傳；熱烈慶祝"
  }
};

const EXTRA_GLOSSES = {};
