// Topic 14 Subunit 3 Quiz Data: Social Media & the Internet 社群媒體與網路
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T14 S03 - Social Media & the Internet 社群媒體與網路",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "social media",
    "pos": "n.phr.",
    "cn_def": "社群媒體",
    "en_def": "websites and apps where people share content and talk",
    "sentence": "Most teenagers get their news from {{BLANK}}, but they do not always check whether the stories are true.",
    "cn": "大多數青少年從社群媒體獲得新聞，但他們不一定會查證那些報導是否屬實。"
  },
  {
    "word": "post",
    "pos": "v.",
    "cn_def": "發布；張貼（貼文）",
    "en_def": "to put a message or picture online",
    "sentence": "She {{BLANK}} a photo of her lunch every day, and her friends always leave funny comments under it.",
    "cn": "她每天發布一張午餐照片，而她的朋友總是在下面留些好笑的留言。"
  },
  {
    "word": "repost",
    "pos": "v.",
    "cn_def": "轉發；轉貼",
    "en_def": "to share someone else's post again",
    "sentence": "Thousands of people {{BLANK}} the video of the lost dog, so its owner found it within a few hours.",
    "cn": "數千人轉發了那段走失狗狗的影片，所以牠的主人在幾小時內就找到了牠。"
  },
  {
    "word": "follower",
    "pos": "n.",
    "cn_def": "追蹤者；粉絲",
    "en_def": "a person who chooses to see someone's posts",
    "sentence": "The baker has over 50,000 {{BLANK}} online, so new customers visit his shop from all over the city.",
    "cn": "那位麵包師傅在網路上有超過五萬名追蹤者，所以全市各地都有新客人來他的店。"
  },
  {
    "word": "influencer",
    "pos": "n.",
    "cn_def": "網紅；意見領袖",
    "en_def": "a person with many online followers who affects what they buy",
    "sentence": "The {{BLANK}} was paid to recommend the face cream, but she did not tell her followers that it was an advert.",
    "cn": "那位網紅拿錢推薦那款面霜，但她沒有告訴追蹤者那是廣告。"
  },
  {
    "word": "vlogger",
    "pos": "n.",
    "cn_def": "影音部落客；Vlogger",
    "en_def": "a person who makes video blogs",
    "sentence": "The travel {{BLANK}} films every meal and every hotel room, and his videos have made a small town in Taiwan famous.",
    "cn": "那位旅遊影音部落客拍下每一餐和每一間飯店房間，而他的影片讓台灣一個小鎮出了名。"
  },
  {
    "word": "blogger",
    "pos": "n.",
    "cn_def": "部落客",
    "en_def": "a person who writes an online journal",
    "sentence": "The food {{BLANK}} gave the restaurant a bad review, so the owner invited her back to try the new menu.",
    "cn": "那位美食部落客給那家餐廳負評，所以老闆邀請她再來試試新菜單。"
  },
  {
    "word": "hashtag",
    "pos": "n.",
    "cn_def": "主題標籤；#標籤",
    "en_def": "a word after the # sign used to group posts",
    "sentence": "People used the same {{BLANK}} to share photos of the clean-up, so it was easy to see how many beaches had been cleared.",
    "cn": "人們用同一個主題標籤分享淨灘照片，所以很容易看出有多少海灘被清理乾淨了。"
  },
  {
    "word": "viral",
    "pos": "adj.",
    "cn_def": "爆紅的；病毒式傳播的",
    "en_def": "spread very quickly to many people online",
    "sentence": "A video of a cat playing the piano went {{BLANK}} overnight, and the owner was soon invited onto several TV shows.",
    "cn": "一段貓彈鋼琴的影片一夜之間爆紅，主人很快就被邀請上好幾個電視節目。"
  },
  {
    "word": "meme",
    "pos": "n.",
    "cn_def": "迷因；梗圖",
    "en_def": "a funny image or text copied and shared online",
    "sentence": "My brother sent me a {{BLANK}} about exams, and it was so true that I laughed while I was studying.",
    "cn": "我哥傳給我一張關於考試的梗圖，內容太真實了，害我讀書時笑出來。"
  },
  {
    "word": "emoji",
    "pos": "n.",
    "cn_def": "表情符號",
    "en_def": "a small picture used in digital messages",
    "sentence": "She replied with a smiling {{BLANK}}, but I could not tell whether she was happy or just being polite.",
    "cn": "她回了一個微笑的表情符號，但我分辨不出她是開心還是只是出於禮貌。"
  },
  {
    "word": "selfie",
    "pos": "n.",
    "cn_def": "自拍照",
    "en_def": "a photo you take of yourself",
    "sentence": "Tourists were taking {{BLANK}} at the edge of the cliff, so the park added a fence to keep them safe.",
    "cn": "遊客在懸崖邊拍自拍照，所以公園加裝了圍欄保障他們的安全。"
  },
  {
    "word": "profile",
    "pos": "n.",
    "cn_def": "個人檔案；個人頁面",
    "en_def": "the page with information about a user",
    "sentence": "Before the interview, the manager looked at my online {{BLANK}}, so I was glad that I had removed my old party photos.",
    "cn": "面試前經理看了我的網路個人頁面，所以我很慶幸自己已經刪掉了以前的派對照片。"
  },
  {
    "word": "notification",
    "pos": "n.",
    "cn_def": "通知",
    "en_def": "a message on your phone telling you something new",
    "sentence": "My phone kept showing {{BLANK}} during class, so I finally turned them off and concentrated much better.",
    "cn": "上課時我的手機一直跳出通知，所以我終於把它們關掉，結果專心多了。"
  },
  {
    "word": "livestream",
    "pos": "v.",
    "cn_def": "直播",
    "en_def": "to show video on the internet as it happens",
    "sentence": "The band {{BLANK}} their concert for fans who could not buy tickets, and over a million people watched online.",
    "cn": "那個樂團為買不到票的粉絲直播了演唱會，超過一百萬人在線上觀看。"
  },
  {
    "word": "content creator",
    "pos": "n.phr.",
    "cn_def": "內容創作者",
    "en_def": "a person who makes videos, posts or other online material",
    "sentence": "Being a {{BLANK}} looks easy, but many spend hours filming and editing a video that lasts only one minute.",
    "cn": "當內容創作者看似簡單，但許多人要花好幾小時拍攝和剪輯一部只有一分鐘的影片。"
  },
  {
    "word": "troll",
    "pos": "n.",
    "cn_def": "網路酸民",
    "en_def": "a person who posts rude messages to upset others",
    "sentence": "A {{BLANK}} left nasty comments under every photo she posted, so she decided to block him and ignore his messages.",
    "cn": "一位酸民在她發的每張照片下留惡毒留言，所以她決定封鎖他並不理會他的訊息。"
  },
  {
    "word": "cyberbullying",
    "pos": "n.",
    "cn_def": "網路霸凌",
    "en_def": "hurting or threatening someone online",
    "sentence": "{{BLANK}} can follow students home from school, because hurtful messages arrive on their phones at any time.",
    "cn": "網路霸凌會讓學生回到家也逃不掉，因為傷人的訊息隨時都會傳到他們的手機上。"
  },
  {
    "word": "echo chamber",
    "pos": "n.phr.",
    "cn_def": "同溫層；回音室",
    "en_def": "an online space where you only hear opinions like your own",
    "sentence": "If you only follow people who agree with you, you may end up in an {{BLANK}}, and you will never hear other views.",
    "cn": "如果你只追蹤和你意見相同的人，你可能會陷入同溫層，而且永遠聽不到其他觀點。"
  },
  {
    "word": "filter bubble",
    "pos": "n.phr.",
    "cn_def": "過濾氣泡",
    "en_def": "when apps only show you content they think you like",
    "sentence": "The app keeps showing me the same kind of videos, so I worry that I am stuck in a {{BLANK}}.",
    "cn": "那個應用程式一直推給我同類型的影片，所以我擔心自己被困在過濾氣泡裡。"
  },
  {
    "word": "screenshot",
    "pos": "n.",
    "cn_def": "螢幕截圖",
    "en_def": "a picture of what is on a screen",
    "sentence": "He deleted the rude message quickly, but someone had already taken a {{BLANK}}, so everyone saw what he had written.",
    "cn": "他很快就刪掉了那則無禮的訊息，但有人已經截圖了，所以大家都看到他寫了什麼。"
  },
  {
    "word": "username",
    "pos": "n.",
    "cn_def": "使用者名稱；帳號名稱",
    "en_def": "the name you use to log in to a website or app",
    "sentence": "I forgot my {{BLANK}} for the game, so I had to use my email address to get into my account.",
    "cn": "我忘了那款遊戲的使用者名稱，所以必須用電子郵件地址才能登入帳號。"
  },
  {
    "word": "search engine",
    "pos": "n.phr.",
    "cn_def": "搜尋引擎",
    "en_def": "a website that helps you find information online",
    "sentence": "I typed the question into a {{BLANK}}, but the first results were all adverts, so I scrolled down for better sources.",
    "cn": "我把問題輸入搜尋引擎，但前幾個結果都是廣告，所以我往下滑找更好的資料來源。"
  },
  {
    "word": "website",
    "pos": "n.",
    "cn_def": "網站",
    "en_def": "a set of pages on the internet",
    "sentence": "The {{BLANK}} looked professional, but it had no contact details, so my teacher said we should not trust it.",
    "cn": "那個網站看起來很專業，但沒有任何聯絡資訊，所以老師說我們不應該相信它。"
  },
  {
    "word": "direct message",
    "pos": "n.phr.",
    "cn_def": "私訊",
    "en_def": "a private message sent on social media",
    "sentence": "She sent me a {{BLANK}} instead of commenting publicly, because she did not want everyone to read it.",
    "cn": "她傳私訊給我而不是公開留言，因為她不想讓大家都讀到。"
  },
  {
    "word": "group chat",
    "pos": "n.phr.",
    "cn_def": "群組聊天",
    "en_def": "an online conversation with several people at once",
    "sentence": "Our class {{BLANK}} gets hundreds of messages every night, so I mute it while I am doing homework.",
    "cn": "我們班的群組聊天每晚都有上百則訊息，所以我寫作業時會把它設為靜音。"
  },
  {
    "word": "unfollow",
    "pos": "v.",
    "cn_def": "取消追蹤",
    "en_def": "to stop seeing someone's posts on social media",
    "sentence": "I {{BLANK}} that account because it kept posting angry and false stories, and now my feed feels much calmer.",
    "cn": "我取消追蹤了那個帳號，因為它一直發布憤怒和不實的報導，現在我的動態感覺平靜多了。"
  },
  {
    "word": "block",
    "pos": "v.",
    "cn_def": "封鎖",
    "en_def": "to stop someone from contacting you online",
    "sentence": "If a stranger sends you unkind messages, you should {{BLANK}} the account and tell an adult you trust.",
    "cn": "如果陌生人傳給你不友善的訊息，你應該封鎖那個帳號，並告訴你信任的大人。"
  },
  {
    "word": "anonymity",
    "pos": "n.",
    "cn_def": "匿名（性）",
    "en_def": "the state of hiding your real name",
    "sentence": "{{BLANK}} makes some people braver online, but it also allows others to say cruel things without any consequences.",
    "cn": "匿名性讓有些人在網路上更敢說話，但也讓另一些人說出殘忍的話而不必承擔後果。"
  },
  {
    "word": "doomscrolling",
    "pos": "n.",
    "cn_def": "末日滾動；狂刷負面新聞",
    "en_def": "reading bad news online for too long",
    "sentence": "After an hour of {{BLANK}} before bed, I felt anxious and could not sleep, so I now leave my phone in the kitchen.",
    "cn": "睡前狂刷負面新聞一小時後，我感到焦慮又睡不著，所以我現在都把手機放在廚房。"
  },
  {
    "word": "screen time",
    "pos": "n.phr.",
    "cn_def": "螢幕使用時間",
    "en_def": "the time you spend looking at a screen",
    "sentence": "My parents limit my {{BLANK}} to two hours a day, so I have more time for sport and reading.",
    "cn": "我爸媽把我的螢幕使用時間限制在一天兩小時，所以我有更多時間運動和閱讀。"
  }
];

const MCQS = [
  {
    "q": "Most teenagers get their news from _____, but they do not always check whether the stories are true.",
    "options": [
      "social media",
      "prime time",
      "front page",
      "sponsored content"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "She _____ a photo of her lunch every day, and her friends always leave funny comments under it.",
    "options": [
      "belie",
      "post",
      "undercut",
      "stymie"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Thousands of people _____ the video of the lost dog, so its owner found it within a few hours.",
    "options": [
      "trivialise",
      "rebuke",
      "repost",
      "insinuate"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The baker has over 50,000 _____ online, so new customers visit his shop from all over the city.",
    "options": [
      "broadcaster",
      "buzzword",
      "misstep",
      "follower"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The _____ was paid to recommend the face cream, but she did not tell her followers that it was an advert.",
    "options": [
      "informant",
      "onslaught",
      "influencer",
      "slogan"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The travel _____ films every meal and every hotel room, and his videos have made a small town in Taiwan famous.",
    "options": [
      "vlogger",
      "voicemail",
      "edition",
      "spectacle"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The food _____ gave the restaurant a bad review, so the owner invited her back to try the new menu.",
    "options": [
      "billboard",
      "furore",
      "listener",
      "blogger"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "People used the same _____ to share photos of the clean-up, so it was easy to see how many beaches had been cleared.",
    "options": [
      "airwaves",
      "hashtag",
      "brand",
      "voicemail"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "A video of a cat playing the piano went _____ overnight, and the owner was soon invited onto several TV shows.",
    "options": [
      "pejorative",
      "preposterous",
      "viral",
      "informative"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "My brother sent me a _____ about exams, and it was so true that I laughed while I was studying.",
    "options": [
      "meme",
      "viewer",
      "testimony",
      "catchphrase"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "She replied with a smiling _____, but I could not tell whether she was happy or just being polite.",
    "options": [
      "plurality",
      "emoji",
      "studio",
      "magazine"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Tourists were taking _____ at the edge of the cliff, so the park added a fence to keep them safe.",
    "options": [
      "voicemail",
      "miscommunication",
      "tirade",
      "selfie"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Before the interview, the manager looked at my online _____, so I was glad that I had removed my old party photos.",
    "options": [
      "profile",
      "slant",
      "editorial",
      "fearmongering"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "My phone kept showing _____ during class, so I finally turned them off and concentrated much better.",
    "options": [
      "falsehood",
      "viewer",
      "sensationalism",
      "notification"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The band _____ their concert for fans who could not buy tickets, and over a million people watched online.",
    "options": [
      "subvert",
      "livestream",
      "flout",
      "romanticise"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Being a _____ looks easy, but many spend hours filming and editing a video that lasts only one minute.",
    "options": [
      "reality show",
      "reverse image search",
      "content creator",
      "tone of voice"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "A _____ left nasty comments under every photo she posted, so she decided to block him and ignore his messages.",
    "options": [
      "censorship",
      "documentary",
      "editorial",
      "troll"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "_____ can follow students home from school, because hurtful messages arrive on their phones at any time.",
    "options": [
      "cyberbullying",
      "television",
      "newsroom",
      "slang"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "If you only follow people who agree with you, you may end up in an _____, and you will never hear other views.",
    "options": [
      "product placement",
      "sponsored content",
      "echo chamber",
      "pen pal"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The app keeps showing me the same kind of videos, so I worry that I am stuck in a _____.",
    "options": [
      "vantage point",
      "filter bubble",
      "word of mouth",
      "print media"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "He deleted the rude message quickly, but someone had already taken a _____, so everyone saw what he had written.",
    "options": [
      "editorial",
      "airwaves",
      "metaphor",
      "screenshot"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "I forgot my _____ for the game, so I had to use my email address to get into my account.",
    "options": [
      "username",
      "misstep",
      "furore",
      "manifesto"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "I typed the question into a _____, but the first results were all adverts, so I scrolled down for better sources.",
    "options": [
      "eye contact",
      "search engine",
      "the elephant in the room",
      "front page"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The _____ looked professional, but it had no contact details, so my teacher said we should not trust it.",
    "options": [
      "euphemism",
      "spokesperson",
      "website",
      "catchphrase"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "She sent me a _____ instead of commenting publicly, because she did not want everyone to read it.",
    "options": [
      "direct message",
      "lateral reading",
      "front page",
      "talk show"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Our class _____ gets hundreds of messages every night, so I mute it while I am doing homework.",
    "options": [
      "stage fright",
      "group chat",
      "front page",
      "small talk"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "I _____ that account because it kept posting angry and false stories, and now my feed feels much calmer.",
    "options": [
      "placate",
      "sabotage",
      "usurp",
      "unfollow"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "If a stranger sends you unkind messages, you should _____ the account and tell an adult you trust.",
    "options": [
      "trivialise",
      "downplay",
      "block",
      "dramatise"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "_____ makes some people braver online, but it also allows others to say cruel things without any consequences.",
    "options": [
      "anonymity",
      "libel",
      "watermark",
      "newsreader"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "After an hour of _____ before bed, I felt anxious and could not sleep, so I now leave my phone in the kitchen.",
    "options": [
      "censorship",
      "doomscrolling",
      "glimpse",
      "conversation"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "My parents limit my _____ to two hours a day, so I have more time for sport and reading.",
    "options": [
      "video call",
      "stage fright",
      "soap opera",
      "screen time"
    ],
    "answer": 3,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "social media": {
    "pos": "n.phr.",
    "en_def": "websites and apps where people share content and talk",
    "cn_def": "社群媒體"
  },
  "post": {
    "pos": "v.",
    "en_def": "to put a message or picture online",
    "cn_def": "發布；張貼（貼文）"
  },
  "repost": {
    "pos": "v.",
    "en_def": "to share someone else's post again",
    "cn_def": "轉發；轉貼"
  },
  "follower": {
    "pos": "n.",
    "en_def": "a person who chooses to see someone's posts",
    "cn_def": "追蹤者；粉絲"
  },
  "influencer": {
    "pos": "n.",
    "en_def": "a person with many online followers who affects what they buy",
    "cn_def": "網紅；意見領袖"
  },
  "vlogger": {
    "pos": "n.",
    "en_def": "a person who makes video blogs",
    "cn_def": "影音部落客；Vlogger"
  },
  "blogger": {
    "pos": "n.",
    "en_def": "a person who writes an online journal",
    "cn_def": "部落客"
  },
  "hashtag": {
    "pos": "n.",
    "en_def": "a word after the # sign used to group posts",
    "cn_def": "主題標籤；#標籤"
  },
  "viral": {
    "pos": "adj.",
    "en_def": "spread very quickly to many people online",
    "cn_def": "爆紅的；病毒式傳播的"
  },
  "meme": {
    "pos": "n.",
    "en_def": "a funny image or text copied and shared online",
    "cn_def": "迷因；梗圖"
  },
  "emoji": {
    "pos": "n.",
    "en_def": "a small picture used in digital messages",
    "cn_def": "表情符號"
  },
  "selfie": {
    "pos": "n.",
    "en_def": "a photo you take of yourself",
    "cn_def": "自拍照"
  },
  "profile": {
    "pos": "n.",
    "en_def": "the page with information about a user",
    "cn_def": "個人檔案；個人頁面"
  },
  "notification": {
    "pos": "n.",
    "en_def": "a message on your phone telling you something new",
    "cn_def": "通知"
  },
  "livestream": {
    "pos": "v.",
    "en_def": "to show video on the internet as it happens",
    "cn_def": "直播"
  },
  "content creator": {
    "pos": "n.phr.",
    "en_def": "a person who makes videos, posts or other online material",
    "cn_def": "內容創作者"
  },
  "troll": {
    "pos": "n.",
    "en_def": "a person who posts rude messages to upset others",
    "cn_def": "網路酸民"
  },
  "cyberbullying": {
    "pos": "n.",
    "en_def": "hurting or threatening someone online",
    "cn_def": "網路霸凌"
  },
  "echo chamber": {
    "pos": "n.phr.",
    "en_def": "an online space where you only hear opinions like your own",
    "cn_def": "同溫層；回音室"
  },
  "filter bubble": {
    "pos": "n.phr.",
    "en_def": "when apps only show you content they think you like",
    "cn_def": "過濾氣泡"
  },
  "screenshot": {
    "pos": "n.",
    "en_def": "a picture of what is on a screen",
    "cn_def": "螢幕截圖"
  },
  "username": {
    "pos": "n.",
    "en_def": "the name you use to log in to a website or app",
    "cn_def": "使用者名稱；帳號名稱"
  },
  "search engine": {
    "pos": "n.phr.",
    "en_def": "a website that helps you find information online",
    "cn_def": "搜尋引擎"
  },
  "website": {
    "pos": "n.",
    "en_def": "a set of pages on the internet",
    "cn_def": "網站"
  },
  "direct message": {
    "pos": "n.phr.",
    "en_def": "a private message sent on social media",
    "cn_def": "私訊"
  },
  "group chat": {
    "pos": "n.phr.",
    "en_def": "an online conversation with several people at once",
    "cn_def": "群組聊天"
  },
  "unfollow": {
    "pos": "v.",
    "en_def": "to stop seeing someone's posts on social media",
    "cn_def": "取消追蹤"
  },
  "block": {
    "pos": "v.",
    "en_def": "to stop someone from contacting you online",
    "cn_def": "封鎖"
  },
  "anonymity": {
    "pos": "n.",
    "en_def": "the state of hiding your real name",
    "cn_def": "匿名（性）"
  },
  "doomscrolling": {
    "pos": "n.",
    "en_def": "reading bad news online for too long",
    "cn_def": "末日滾動；狂刷負面新聞"
  },
  "screen time": {
    "pos": "n.phr.",
    "en_def": "the time you spend looking at a screen",
    "cn_def": "螢幕使用時間"
  },
  "prime time": {
    "pos": "n.phr.",
    "en_def": "the evening hours when most people watch TV",
    "cn_def": "黃金時段"
  },
  "front page": {
    "pos": "n.phr.",
    "en_def": "the first page of a newspaper with the main news",
    "cn_def": "頭版"
  },
  "sponsored content": {
    "pos": "n.phr.",
    "en_def": "material paid for by a company but made to look like normal posts",
    "cn_def": "業配內容；贊助內容"
  },
  "belie": {
    "pos": "v.",
    "en_def": "to give a false idea of something",
    "cn_def": "掩飾；使人誤解"
  },
  "undercut": {
    "pos": "v.",
    "en_def": "to make something weaker or less effective",
    "cn_def": "削弱；削價競爭"
  },
  "stymie": {
    "pos": "v.",
    "en_def": "to stop someone from making progress",
    "cn_def": "阻礙；使受挫"
  },
  "trivialise": {
    "pos": "v.",
    "en_def": "to make something serious seem unimportant",
    "cn_def": "輕忽；使顯得瑣碎"
  },
  "rebuke": {
    "pos": "v.",
    "en_def": "to tell someone sharply that they have done wrong",
    "cn_def": "指責；訓斥"
  },
  "insinuate": {
    "pos": "v.",
    "en_def": "to suggest something bad in an indirect way",
    "cn_def": "暗示；影射"
  },
  "broadcaster": {
    "pos": "n.",
    "en_def": "a company or person that makes TV or radio programmes",
    "cn_def": "廣播公司；播報員"
  },
  "buzzword": {
    "pos": "n.",
    "en_def": "a fashionable word that becomes very popular",
    "cn_def": "流行術語；時髦用語"
  },
  "misstep": {
    "pos": "n.",
    "en_def": "a mistake in action or judgement",
    "cn_def": "失策；失誤"
  },
  "informant": {
    "pos": "n.",
    "en_def": "a person who gives secret information to someone",
    "cn_def": "線人；消息提供者"
  },
  "onslaught": {
    "pos": "n.",
    "en_def": "a very strong attack or a huge amount of something",
    "cn_def": "猛烈攻擊；大量湧現"
  },
  "slogan": {
    "pos": "n.",
    "en_def": "a short, catchy phrase used in advertising",
    "cn_def": "標語；口號"
  },
  "voicemail": {
    "pos": "n.",
    "en_def": "a spoken message left on a phone",
    "cn_def": "語音留言"
  },
  "edition": {
    "pos": "n.",
    "en_def": "one printed version of a newspaper, book or magazine",
    "cn_def": "版；版本；期"
  },
  "spectacle": {
    "pos": "n.",
    "en_def": "an event that is exciting or shocking to watch",
    "cn_def": "奇觀；引人注目的場面"
  },
  "billboard": {
    "pos": "n.",
    "en_def": "a very large outdoor sign for adverts",
    "cn_def": "廣告看板"
  },
  "furore": {
    "pos": "n.",
    "en_def": "a sudden expression of public anger",
    "cn_def": "騷動；公憤"
  },
  "listener": {
    "pos": "n.",
    "en_def": "a person who listens to a radio programme",
    "cn_def": "聽眾"
  },
  "airwaves": {
    "pos": "n.",
    "en_def": "the radio signals used for broadcasting",
    "cn_def": "廣播電波；廣播節目"
  },
  "brand": {
    "pos": "n.",
    "en_def": "a product name made by a particular company",
    "cn_def": "品牌"
  },
  "pejorative": {
    "pos": "adj.",
    "en_def": "expressing disapproval or a low opinion",
    "cn_def": "貶義的"
  },
  "preposterous": {
    "pos": "adj.",
    "en_def": "completely unreasonable or silly",
    "cn_def": "荒謬的；可笑的"
  },
  "informative": {
    "pos": "adj.",
    "en_def": "giving useful information",
    "cn_def": "有益的；資訊豐富的"
  },
  "viewer": {
    "pos": "n.",
    "en_def": "a person who watches TV or videos",
    "cn_def": "觀眾"
  },
  "testimony": {
    "pos": "n.",
    "en_def": "a formal statement about what someone saw or knows",
    "cn_def": "證詞"
  },
  "catchphrase": {
    "pos": "n.",
    "en_def": "a short phrase that a famous person often says",
    "cn_def": "口頭禪；流行語"
  },
  "plurality": {
    "pos": "n.",
    "en_def": "a large number of different things",
    "cn_def": "多元；多數"
  },
  "studio": {
    "pos": "n.",
    "en_def": "a room where TV, radio or music is recorded",
    "cn_def": "攝影棚；錄音室"
  },
  "magazine": {
    "pos": "n.",
    "en_def": "a thin weekly or monthly publication with articles and pictures",
    "cn_def": "雜誌"
  },
  "miscommunication": {
    "pos": "n.",
    "en_def": "a failure to share information clearly",
    "cn_def": "溝通不良；誤傳"
  },
  "tirade": {
    "pos": "n.",
    "en_def": "a long, angry speech criticising someone",
    "cn_def": "激烈的長篇抨擊"
  },
  "slant": {
    "pos": "n.",
    "en_def": "a way of presenting news that favours one side",
    "cn_def": "偏頗角度；傾向"
  },
  "editorial": {
    "pos": "n.",
    "en_def": "a newspaper article giving the paper's opinion",
    "cn_def": "社論"
  },
  "fearmongering": {
    "pos": "n.",
    "en_def": "spreading fear to make people believe or do something",
    "cn_def": "散播恐懼；危言聳聽"
  },
  "falsehood": {
    "pos": "n.",
    "en_def": "a statement that is not true",
    "cn_def": "謊言；不實之詞"
  },
  "sensationalism": {
    "pos": "n.",
    "en_def": "presenting news in a shocking way to attract attention",
    "cn_def": "譁眾取寵的報導手法；煽情主義"
  },
  "subvert": {
    "pos": "v.",
    "en_def": "to weaken a system or belief",
    "cn_def": "顛覆；破壞"
  },
  "flout": {
    "pos": "v.",
    "en_def": "to break a rule openly",
    "cn_def": "公然違反"
  },
  "romanticise": {
    "pos": "v.",
    "en_def": "to make something seem better than it really is",
    "cn_def": "浪漫化；理想化"
  },
  "reality show": {
    "pos": "n.phr.",
    "en_def": "a programme that films ordinary people in real situations",
    "cn_def": "真人實境秀"
  },
  "reverse image search": {
    "pos": "n.phr.",
    "en_def": "a search that finds where a picture first appeared",
    "cn_def": "以圖搜圖；反向圖片搜尋"
  },
  "tone of voice": {
    "pos": "n.phr.",
    "en_def": "the way your voice sounds, showing your feelings",
    "cn_def": "語氣；說話的口氣"
  },
  "censorship": {
    "pos": "n.",
    "en_def": "the control of what people can say, read or watch",
    "cn_def": "審查制度"
  },
  "documentary": {
    "pos": "n.",
    "en_def": "a film or programme that gives facts about a real topic",
    "cn_def": "紀錄片"
  },
  "television": {
    "pos": "n.",
    "en_def": "a system or machine for watching programmes",
    "cn_def": "電視"
  },
  "newsroom": {
    "pos": "n.",
    "en_def": "the office where journalists prepare the news",
    "cn_def": "新聞編輯室"
  },
  "slang": {
    "pos": "n.",
    "en_def": "very informal words used by a particular group",
    "cn_def": "俚語"
  },
  "product placement": {
    "pos": "n.phr.",
    "en_def": "showing a brand inside a film or show to advertise it",
    "cn_def": "置入性行銷"
  },
  "pen pal": {
    "pos": "n.phr.",
    "en_def": "a friend in another place you write letters to",
    "cn_def": "筆友"
  },
  "vantage point": {
    "pos": "n.phr.",
    "en_def": "a position from which you can see or understand something well",
    "cn_def": "有利位置；觀點"
  },
  "word of mouth": {
    "pos": "n.phr.",
    "en_def": "information passed from person to person by talking",
    "cn_def": "口耳相傳；口碑"
  },
  "print media": {
    "pos": "n.phr.",
    "en_def": "newspapers and magazines printed on paper",
    "cn_def": "平面媒體"
  },
  "metaphor": {
    "pos": "n.",
    "en_def": "describing something by calling it something else",
    "cn_def": "隱喻；暗喻"
  },
  "manifesto": {
    "pos": "n.",
    "en_def": "a written statement of a group's aims and beliefs",
    "cn_def": "宣言；政見"
  },
  "eye contact": {
    "pos": "n.phr.",
    "en_def": "looking directly into someone's eyes",
    "cn_def": "眼神接觸"
  },
  "the elephant in the room": {
    "pos": "n.phr.",
    "en_def": "an obvious problem that nobody wants to talk about",
    "cn_def": "大家避而不談的明顯問題"
  },
  "euphemism": {
    "pos": "n.",
    "en_def": "a polite word used instead of an unpleasant one",
    "cn_def": "委婉語"
  },
  "spokesperson": {
    "pos": "n.",
    "en_def": "a person who speaks officially for a group",
    "cn_def": "發言人"
  },
  "lateral reading": {
    "pos": "n.phr.",
    "en_def": "checking a site by reading what other sites say about it",
    "cn_def": "橫向閱讀"
  },
  "talk show": {
    "pos": "n.phr.",
    "en_def": "a programme where a host chats with guests",
    "cn_def": "脫口秀；談話節目"
  },
  "stage fright": {
    "pos": "n.phr.",
    "en_def": "nervousness before performing or speaking in public",
    "cn_def": "怯場"
  },
  "small talk": {
    "pos": "n.phr.",
    "en_def": "polite conversation about unimportant things",
    "cn_def": "閒聊；寒暄"
  },
  "placate": {
    "pos": "v.",
    "en_def": "to make someone less angry",
    "cn_def": "安撫；平息怒氣"
  },
  "sabotage": {
    "pos": "v.",
    "en_def": "to damage something on purpose to stop it working",
    "cn_def": "蓄意破壞"
  },
  "usurp": {
    "pos": "v.",
    "en_def": "to take someone's position or power without the right",
    "cn_def": "篡奪；奪取"
  },
  "downplay": {
    "pos": "v.",
    "en_def": "to make something seem less important than it is",
    "cn_def": "淡化；輕描淡寫"
  },
  "dramatise": {
    "pos": "v.",
    "en_def": "to make something seem more exciting or serious than it is",
    "cn_def": "誇大；戲劇化"
  },
  "libel": {
    "pos": "n.",
    "en_def": "false written statements that damage someone's reputation",
    "cn_def": "（書面）誹謗"
  },
  "watermark": {
    "pos": "n.",
    "en_def": "a faint logo on an image to show who owns it",
    "cn_def": "浮水印"
  },
  "newsreader": {
    "pos": "n.",
    "en_def": "a person who reads the news on TV or radio",
    "cn_def": "新聞播報員；主播"
  },
  "glimpse": {
    "pos": "n.",
    "en_def": "a quick look or short experience of something",
    "cn_def": "一瞥；短暫的體驗"
  },
  "conversation": {
    "pos": "n.",
    "en_def": "a talk between two or more people",
    "cn_def": "對話；談話"
  },
  "video call": {
    "pos": "n.phr.",
    "en_def": "a call where people can see each other on screen",
    "cn_def": "視訊通話"
  },
  "soap opera": {
    "pos": "n.phr.",
    "en_def": "a long-running drama series about people's lives",
    "cn_def": "肥皂劇；連續劇"
  }
};

const EXTRA_GLOSSES = {};
