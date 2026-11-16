// Topic 14 Subunit 13 Quiz Data: Academic Words 學術單字 6 (watertight – allegation)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T14 S13 - Academic Words 學術單字 6 (watertight – allegation)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "watertight",
    "pos": "adj.",
    "cn_def": "無懈可擊的；嚴密的",
    "en_def": "so strong it cannot be questioned",
    "sentence": "The lawyer's argument seemed {{BLANK}}, but the journalist found one small mistake that changed everything.",
    "cn": "那位律師的論點看似無懈可擊，但那名記者找到一個改變一切的小錯誤。"
  },
  {
    "word": "wilful",
    "pos": "adj.",
    "cn_def": "蓄意的；故意的",
    "en_def": "done on purpose, knowing it is wrong",
    "sentence": "Sharing a story you know is false is {{BLANK}} deception, so it is much worse than making an honest mistake.",
    "cn": "分享你明知是假的消息是蓄意的欺騙，所以比無心之過嚴重得多。"
  },
  {
    "word": "offensive",
    "pos": "adj.",
    "cn_def": "冒犯的；無禮的",
    "en_def": "rude in a way that upsets people",
    "sentence": "The joke was {{BLANK}} to many people, so the comedian apologised and removed the video from his channel.",
    "cn": "那個笑話冒犯了許多人，所以那位喜劇演員道歉並從他的頻道上撤下影片。"
  },
  {
    "word": "outlandish",
    "pos": "adj.",
    "cn_def": "古怪的；荒誕的",
    "en_def": "very strange and unusual",
    "sentence": "The website made {{BLANK}} claims about a fruit that could cure every disease, but no scientist supported them.",
    "cn": "那個網站對一種能治百病的水果做出荒誕的說法，但沒有科學家支持。"
  },
  {
    "word": "preposterous",
    "pos": "adj.",
    "cn_def": "荒謬的；可笑的",
    "en_def": "completely unreasonable or silly",
    "sentence": "The idea that the earth is flat is {{BLANK}}, but some videos promoting it still get millions of views.",
    "cn": "地球是平的這個想法很荒謬，但一些宣揚它的影片仍然獲得數百萬次觀看。"
  },
  {
    "word": "ludicrous",
    "pos": "adj.",
    "cn_def": "荒唐可笑的",
    "en_def": "so silly that it makes people laugh",
    "sentence": "The price of the concert tickets was {{BLANK}}, so many fans decided to watch the livestream instead.",
    "cn": "演唱會門票的價格貴得離譜，所以許多粉絲決定改看直播。"
  },
  {
    "word": "suspicious",
    "pos": "adj.",
    "cn_def": "可疑的；令人懷疑的",
    "en_def": "making you think something is wrong",
    "sentence": "I received a {{BLANK}} email asking for my bank password, so I deleted it and reported it to the bank.",
    "cn": "我收到一封要我提供銀行密碼的可疑電子郵件，所以我刪除了它並通報銀行。"
  },
  {
    "word": "topical",
    "pos": "adj.",
    "cn_def": "時事性的；熱門話題的",
    "en_def": "relating to things happening now",
    "sentence": "Our English teacher likes to discuss {{BLANK}} issues in class, so we often read news articles from the same week.",
    "cn": "我們的英文老師喜歡在課堂上討論時事議題，所以我們常讀同一週的新聞報導。"
  },
  {
    "word": "long-winded",
    "pos": "adj.",
    "cn_def": "冗長的；囉嗦的",
    "en_def": "too long and boring",
    "sentence": "The manager's {{BLANK}} email took ten minutes to read, but the main point could have been written in two sentences.",
    "cn": "經理那封冗長的電子郵件要花十分鐘才讀完，但重點其實兩句話就能寫完。"
  },
  {
    "word": "figurative",
    "pos": "adj.",
    "cn_def": "比喻的；象徵的",
    "en_def": "not using words in their basic meaning",
    "sentence": "\"A sea of faces\" is a {{BLANK}} expression, so it does not mean that the people were actually in water.",
    "cn": "「一片人海」是比喻的說法，所以並不是指人們真的在水裡。"
  },
  {
    "word": "metaphor",
    "pos": "n.",
    "cn_def": "隱喻；暗喻",
    "en_def": "describing something by calling it something else",
    "sentence": "The writer used the {{BLANK}} of a storm to describe the online anger, and readers found the image very powerful.",
    "cn": "作者用暴風雨的隱喻來描述網路上的怒火，讀者覺得這個意象非常有力。"
  },
  {
    "word": "buzzword",
    "pos": "n.",
    "cn_def": "流行術語；時髦用語",
    "en_def": "a fashionable word that becomes very popular",
    "sentence": "\"Sustainable\" has become a {{BLANK}} in advertising, but many companies use it without changing how they work.",
    "cn": "「永續」已成為廣告中的流行術語，但許多公司使用它卻沒有改變做事的方式。"
  },
  {
    "word": "oratory",
    "pos": "n.",
    "cn_def": "演說技巧；雄辯術",
    "en_def": "the skill of making powerful public speeches",
    "sentence": "The leader was famous for his {{BLANK}}, and his speeches made crowds cheer even when his ideas were unclear.",
    "cn": "那位領袖以他的演說技巧聞名，即使他的想法不清楚，他的演講也能讓群眾歡呼。"
  },
  {
    "word": "outreach",
    "pos": "n.",
    "cn_def": "推廣服務；外展活動",
    "en_def": "efforts to give help or information to people",
    "sentence": "The library runs an {{BLANK}} programme in poor areas, so children without books at home can still read every week.",
    "cn": "圖書館在貧困地區舉辦外展推廣計畫，所以家裡沒有書的孩子每週仍能閱讀。"
  },
  {
    "word": "dossier",
    "pos": "n.",
    "cn_def": "檔案；卷宗",
    "en_def": "a set of documents about a person or event",
    "sentence": "The journalist collected a thick {{BLANK}} on the company's pollution, and she handed it to the police.",
    "cn": "那名記者蒐集了一份關於該公司汙染的厚厚卷宗，並將它交給警方。"
  },
  {
    "word": "communiqué",
    "pos": "n.",
    "cn_def": "公報；官方聲明",
    "en_def": "an official statement, especially after a meeting",
    "sentence": "The leaders released a joint {{BLANK}} after the summit, but it contained few clear promises.",
    "cn": "領袖們在高峰會後發表了聯合公報，但內容幾乎沒有明確的承諾。"
  },
  {
    "word": "manifesto",
    "pos": "n.",
    "cn_def": "宣言；政見",
    "en_def": "a written statement of a group's aims and beliefs",
    "sentence": "The party's {{BLANK}} promised free school lunches, so many families decided to vote for it.",
    "cn": "該黨的政見承諾提供免費學校午餐，所以許多家庭決定投票給它。"
  },
  {
    "word": "treatise",
    "pos": "n.",
    "cn_def": "專著；論文",
    "en_def": "a long, serious piece of writing on a subject",
    "sentence": "The professor wrote a {{BLANK}} on the history of newspapers, and it is still used in universities today.",
    "cn": "那位教授寫了一本關於報紙歷史的專著，至今仍在大學裡使用。"
  },
  {
    "word": "anthology",
    "pos": "n.",
    "cn_def": "選集；文集",
    "en_def": "a book of works by different writers",
    "sentence": "Our teacher gave us an {{BLANK}} of short stories, and each one was written by a writer from a different country.",
    "cn": "老師給了我們一本短篇小說選集，每篇都是由不同國家的作家寫的。"
  },
  {
    "word": "soundbite",
    "pos": "n.",
    "cn_def": "（新聞中引用的）精簡名句；原音片段",
    "en_def": "a short, memorable phrase taken from a longer speech",
    "sentence": "The news only showed one {{BLANK}} from her speech, so viewers missed the important details she explained later.",
    "cn": "新聞只播了她演講中的一句原音片段，所以觀眾錯過了她後來解釋的重要細節。"
  },
  {
    "word": "barrage",
    "pos": "n.",
    "cn_def": "接二連三的一大堆；連珠砲",
    "en_def": "a large number of things coming at once",
    "sentence": "The singer faced a {{BLANK}} of questions from reporters, but she smiled and answered them one by one.",
    "cn": "那位歌手面對記者連珠砲似的提問，但她微笑著一一回答。"
  },
  {
    "word": "torrent",
    "pos": "n.",
    "cn_def": "洪流；大量湧現",
    "en_def": "a large amount of something arriving suddenly",
    "sentence": "After the video went viral, he received a {{BLANK}} of messages, and he needed several days to read them all.",
    "cn": "影片爆紅後，他收到了如潮水般的訊息，花了好幾天才全部讀完。"
  },
  {
    "word": "glimpse",
    "pos": "n.",
    "cn_def": "一瞥；短暫的體驗",
    "en_def": "a quick look or short experience of something",
    "sentence": "The documentary gives us a {{BLANK}} of life inside a newsroom, and it shows how stressful the job can be.",
    "cn": "那部紀錄片讓我們一窺新聞編輯室內的生活，也呈現出這份工作有多大的壓力。"
  },
  {
    "word": "snippet",
    "pos": "n.",
    "cn_def": "片段；零星資訊",
    "en_def": "a small piece of information or conversation",
    "sentence": "I only heard a {{BLANK}} of their conversation, so I should not have told everyone what I thought they meant.",
    "cn": "我只聽到他們對話的一小片段，所以我不該把我以為的意思告訴大家。"
  },
  {
    "word": "allegation",
    "pos": "n.",
    "cn_def": "指控；（未經證實的）說法",
    "en_def": "a claim that someone did something wrong, without proof yet",
    "sentence": "The newspaper reported the {{BLANK}} against the coach, but it made clear that nothing had been proved.",
    "cn": "報紙報導了對那位教練的指控，但清楚表明一切尚未獲得證實。"
  }
];

const MCQS = [
  {
    "q": "The lawyer's argument seemed _____, but the journalist found one small mistake that changed everything.",
    "options": [
      "investigative",
      "salacious",
      "watertight",
      "informative"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Sharing a story you know is false is _____ deception, so it is much worse than making an honest mistake.",
    "options": [
      "deceitful",
      "evidence-based",
      "culpable",
      "wilful"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The joke was _____ to many people, so the comedian apologised and removed the video from his channel.",
    "options": [
      "offensive",
      "adamant",
      "self-serving",
      "emotive"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The website made _____ claims about a fruit that could cure every disease, but no scientist supported them.",
    "options": [
      "one-sided",
      "outlandish",
      "salacious",
      "derogatory"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The idea that the earth is flat is _____, but some videos promoting it still get millions of views.",
    "options": [
      "emotive",
      "scathing",
      "preposterous",
      "talkative"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The price of the concert tickets was _____, so many fans decided to watch the livestream instead.",
    "options": [
      "ludicrous",
      "interpersonal",
      "complicit",
      "disingenuous"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "I received a _____ email asking for my bank password, so I deleted it and reported it to the bank.",
    "options": [
      "gratuitous",
      "suspicious",
      "truthful",
      "jaded"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Our English teacher likes to discuss _____ issues in class, so we often read news articles from the same week.",
    "options": [
      "culpable",
      "interpersonal",
      "authoritative",
      "topical"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The manager's _____ email took ten minutes to read, but the main point could have been written in two sentences.",
    "options": [
      "long-winded",
      "opinionated",
      "unverified",
      "pretentious"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "\"A sea of faces\" is a _____ expression, so it does not mean that the people were actually in water.",
    "options": [
      "newsworthy",
      "unverified",
      "figurative",
      "interpersonal"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The writer used the _____ of a storm to describe the online anger, and readers found the image very powerful.",
    "options": [
      "subtitle",
      "metaphor",
      "presenter",
      "podcast"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "\"Sustainable\" has become a _____ in advertising, but many companies use it without changing how they work.",
    "options": [
      "buzz",
      "sensationalism",
      "website",
      "buzzword"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The leader was famous for his _____, and his speeches made crowds cheer even when his ideas were unclear.",
    "options": [
      "timestamp",
      "oratory",
      "moderator",
      "studio"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The library runs an _____ programme in poor areas, so children without books at home can still read every week.",
    "options": [
      "programme",
      "moderator",
      "outreach",
      "plurality"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The journalist collected a thick _____ on the company's pollution, and she handed it to the police.",
    "options": [
      "magazine",
      "email",
      "impostor",
      "dossier"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The leaders released a joint _____ after the summit, but it contained few clear promises.",
    "options": [
      "communiqué",
      "libel",
      "hashtag",
      "tirade"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The party's _____ promised free school lunches, so many families decided to vote for it.",
    "options": [
      "hashtag",
      "flyer",
      "manifesto",
      "meme"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The professor wrote a _____ on the history of newspapers, and it is still used in universities today.",
    "options": [
      "clickbait",
      "treatise",
      "bot",
      "demagogue"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Our teacher gave us an _____ of short stories, and each one was written by a writer from a different country.",
    "options": [
      "edition",
      "hearsay",
      "falsehood",
      "anthology"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The news only showed one _____ from her speech, so viewers missed the important details she explained later.",
    "options": [
      "soundbite",
      "misnomer",
      "moderator",
      "disinformation"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The singer faced a _____ of questions from reporters, but she smiled and answered them one by one.",
    "options": [
      "propaganda",
      "newsroom",
      "eyewitness",
      "barrage"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "After the video went viral, he received a _____ of messages, and he needed several days to read them all.",
    "options": [
      "torrent",
      "billboard",
      "meme",
      "impostor"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The documentary gives us a _____ of life inside a newsroom, and it shows how stressful the job can be.",
    "options": [
      "newspaper",
      "glimpse",
      "slander",
      "mascot"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "I only heard a _____ of their conversation, so I should not have told everyone what I thought they meant.",
    "options": [
      "counterclaim",
      "slant",
      "snippet",
      "documentary"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The newspaper reported the _____ against the coach, but it made clear that nothing had been proved.",
    "options": [
      "acronym",
      "headline",
      "brand",
      "allegation"
    ],
    "answer": 3,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "watertight": {
    "pos": "adj.",
    "en_def": "so strong it cannot be questioned",
    "cn_def": "無懈可擊的；嚴密的"
  },
  "wilful": {
    "pos": "adj.",
    "en_def": "done on purpose, knowing it is wrong",
    "cn_def": "蓄意的；故意的"
  },
  "offensive": {
    "pos": "adj.",
    "en_def": "rude in a way that upsets people",
    "cn_def": "冒犯的；無禮的"
  },
  "outlandish": {
    "pos": "adj.",
    "en_def": "very strange and unusual",
    "cn_def": "古怪的；荒誕的"
  },
  "preposterous": {
    "pos": "adj.",
    "en_def": "completely unreasonable or silly",
    "cn_def": "荒謬的；可笑的"
  },
  "ludicrous": {
    "pos": "adj.",
    "en_def": "so silly that it makes people laugh",
    "cn_def": "荒唐可笑的"
  },
  "suspicious": {
    "pos": "adj.",
    "en_def": "making you think something is wrong",
    "cn_def": "可疑的；令人懷疑的"
  },
  "topical": {
    "pos": "adj.",
    "en_def": "relating to things happening now",
    "cn_def": "時事性的；熱門話題的"
  },
  "long-winded": {
    "pos": "adj.",
    "en_def": "too long and boring",
    "cn_def": "冗長的；囉嗦的"
  },
  "figurative": {
    "pos": "adj.",
    "en_def": "not using words in their basic meaning",
    "cn_def": "比喻的；象徵的"
  },
  "metaphor": {
    "pos": "n.",
    "en_def": "describing something by calling it something else",
    "cn_def": "隱喻；暗喻"
  },
  "buzzword": {
    "pos": "n.",
    "en_def": "a fashionable word that becomes very popular",
    "cn_def": "流行術語；時髦用語"
  },
  "oratory": {
    "pos": "n.",
    "en_def": "the skill of making powerful public speeches",
    "cn_def": "演說技巧；雄辯術"
  },
  "outreach": {
    "pos": "n.",
    "en_def": "efforts to give help or information to people",
    "cn_def": "推廣服務；外展活動"
  },
  "dossier": {
    "pos": "n.",
    "en_def": "a set of documents about a person or event",
    "cn_def": "檔案；卷宗"
  },
  "communiqué": {
    "pos": "n.",
    "en_def": "an official statement, especially after a meeting",
    "cn_def": "公報；官方聲明"
  },
  "manifesto": {
    "pos": "n.",
    "en_def": "a written statement of a group's aims and beliefs",
    "cn_def": "宣言；政見"
  },
  "treatise": {
    "pos": "n.",
    "en_def": "a long, serious piece of writing on a subject",
    "cn_def": "專著；論文"
  },
  "anthology": {
    "pos": "n.",
    "en_def": "a book of works by different writers",
    "cn_def": "選集；文集"
  },
  "soundbite": {
    "pos": "n.",
    "en_def": "a short, memorable phrase taken from a longer speech",
    "cn_def": "（新聞中引用的）精簡名句；原音片段"
  },
  "barrage": {
    "pos": "n.",
    "en_def": "a large number of things coming at once",
    "cn_def": "接二連三的一大堆；連珠砲"
  },
  "torrent": {
    "pos": "n.",
    "en_def": "a large amount of something arriving suddenly",
    "cn_def": "洪流；大量湧現"
  },
  "glimpse": {
    "pos": "n.",
    "en_def": "a quick look or short experience of something",
    "cn_def": "一瞥；短暫的體驗"
  },
  "snippet": {
    "pos": "n.",
    "en_def": "a small piece of information or conversation",
    "cn_def": "片段；零星資訊"
  },
  "allegation": {
    "pos": "n.",
    "en_def": "a claim that someone did something wrong, without proof yet",
    "cn_def": "指控；（未經證實的）說法"
  },
  "investigative": {
    "pos": "adj.",
    "en_def": "trying to find hidden facts",
    "cn_def": "調查性的"
  },
  "salacious": {
    "pos": "adj.",
    "en_def": "containing too much interest in sexual or shocking details",
    "cn_def": "淫穢的；低俗煽情的"
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
  "evidence-based": {
    "pos": "adj.",
    "en_def": "based on facts from research",
    "cn_def": "以證據為基礎的；實證的"
  },
  "culpable": {
    "pos": "adj.",
    "en_def": "deserving blame",
    "cn_def": "應受責備的；有罪責的"
  },
  "adamant": {
    "pos": "adj.",
    "en_def": "refusing to change your opinion",
    "cn_def": "堅定不移的；堅持的"
  },
  "self-serving": {
    "pos": "adj.",
    "en_def": "done mainly to help yourself",
    "cn_def": "自私自利的；為自己打算的"
  },
  "emotive": {
    "pos": "adj.",
    "en_def": "causing strong feelings",
    "cn_def": "引起強烈情感的"
  },
  "one-sided": {
    "pos": "adj.",
    "en_def": "showing only one point of view",
    "cn_def": "片面的；一面倒的"
  },
  "derogatory": {
    "pos": "adj.",
    "en_def": "showing a very poor opinion of someone",
    "cn_def": "貶損的；不敬的"
  },
  "scathing": {
    "pos": "adj.",
    "en_def": "criticising very strongly",
    "cn_def": "尖刻的；嚴厲的"
  },
  "talkative": {
    "pos": "adj.",
    "en_def": "liking to talk a lot",
    "cn_def": "健談的；愛說話的"
  },
  "interpersonal": {
    "pos": "adj.",
    "en_def": "relating to relationships between people",
    "cn_def": "人際的"
  },
  "complicit": {
    "pos": "adj.",
    "en_def": "involved with others in doing something wrong",
    "cn_def": "共謀的；有共犯責任的"
  },
  "disingenuous": {
    "pos": "adj.",
    "en_def": "pretending to be honest when you are not",
    "cn_def": "不真誠的；虛偽的"
  },
  "gratuitous": {
    "pos": "adj.",
    "en_def": "not necessary and often harmful",
    "cn_def": "不必要的；無端的"
  },
  "truthful": {
    "pos": "adj.",
    "en_def": "honest and telling the truth",
    "cn_def": "誠實的；真實的"
  },
  "jaded": {
    "pos": "adj.",
    "en_def": "bored or tired because you have seen too much of something",
    "cn_def": "厭倦的；麻木的"
  },
  "authoritative": {
    "pos": "adj.",
    "en_def": "trusted because it comes from an expert",
    "cn_def": "權威的；可信的"
  },
  "opinionated": {
    "pos": "adj.",
    "en_def": "having strong views and expressing them too often",
    "cn_def": "固執己見的"
  },
  "unverified": {
    "pos": "adj.",
    "en_def": "not yet checked or proved to be true",
    "cn_def": "未經證實的"
  },
  "pretentious": {
    "pos": "adj.",
    "en_def": "trying to seem more important or clever than you are",
    "cn_def": "自命不凡的；做作的"
  },
  "newsworthy": {
    "pos": "adj.",
    "en_def": "interesting or important enough to report",
    "cn_def": "有新聞價值的"
  },
  "subtitle": {
    "pos": "n.",
    "en_def": "words at the bottom of the screen translating speech",
    "cn_def": "字幕"
  },
  "presenter": {
    "pos": "n.",
    "en_def": "a person who introduces a TV or radio programme",
    "cn_def": "節目主持人；主播"
  },
  "podcast": {
    "pos": "n.",
    "en_def": "a recorded audio programme you can download or stream",
    "cn_def": "播客；Podcast節目"
  },
  "buzz": {
    "pos": "n.",
    "en_def": "excited talk about something new",
    "cn_def": "話題；熱烈討論"
  },
  "sensationalism": {
    "pos": "n.",
    "en_def": "presenting news in a shocking way to attract attention",
    "cn_def": "譁眾取寵的報導手法；煽情主義"
  },
  "website": {
    "pos": "n.",
    "en_def": "a set of pages on the internet",
    "cn_def": "網站"
  },
  "timestamp": {
    "pos": "n.",
    "en_def": "the date and time when something was posted or recorded",
    "cn_def": "時間戳記"
  },
  "moderator": {
    "pos": "n.",
    "en_def": "a person who checks and controls posts in an online group",
    "cn_def": "版主；內容審核員"
  },
  "studio": {
    "pos": "n.",
    "en_def": "a room where TV, radio or music is recorded",
    "cn_def": "攝影棚；錄音室"
  },
  "programme": {
    "pos": "n.",
    "en_def": "a show on TV or radio",
    "cn_def": "節目"
  },
  "plurality": {
    "pos": "n.",
    "en_def": "a large number of different things",
    "cn_def": "多元；多數"
  },
  "magazine": {
    "pos": "n.",
    "en_def": "a thin weekly or monthly publication with articles and pictures",
    "cn_def": "雜誌"
  },
  "email": {
    "pos": "n.",
    "en_def": "a message sent over the internet",
    "cn_def": "電子郵件"
  },
  "impostor": {
    "pos": "n.",
    "en_def": "a person who pretends to be someone else",
    "cn_def": "冒牌貨；冒名者"
  },
  "libel": {
    "pos": "n.",
    "en_def": "false written statements that damage someone's reputation",
    "cn_def": "（書面）誹謗"
  },
  "hashtag": {
    "pos": "n.",
    "en_def": "a word after the # sign used to group posts",
    "cn_def": "主題標籤；#標籤"
  },
  "tirade": {
    "pos": "n.",
    "en_def": "a long, angry speech criticising someone",
    "cn_def": "激烈的長篇抨擊"
  },
  "flyer": {
    "pos": "n.",
    "en_def": "a printed paper giving information about an event or offer",
    "cn_def": "傳單"
  },
  "meme": {
    "pos": "n.",
    "en_def": "a funny image or text copied and shared online",
    "cn_def": "迷因；梗圖"
  },
  "clickbait": {
    "pos": "n.",
    "en_def": "online content with a misleading title to get clicks",
    "cn_def": "釣魚標題；點擊誘餌"
  },
  "bot": {
    "pos": "n.",
    "en_def": "a computer program that acts like a real user online",
    "cn_def": "機器人帳號；網軍程式"
  },
  "demagogue": {
    "pos": "n.",
    "en_def": "a leader who wins support by using people's emotions and fears",
    "cn_def": "煽動群眾的政客"
  },
  "edition": {
    "pos": "n.",
    "en_def": "one printed version of a newspaper, book or magazine",
    "cn_def": "版；版本；期"
  },
  "hearsay": {
    "pos": "n.",
    "en_def": "information you heard from others but cannot prove",
    "cn_def": "傳聞；道聽塗說"
  },
  "falsehood": {
    "pos": "n.",
    "en_def": "a statement that is not true",
    "cn_def": "謊言；不實之詞"
  },
  "misnomer": {
    "pos": "n.",
    "en_def": "a name that does not describe something correctly",
    "cn_def": "用詞不當；名不副實"
  },
  "disinformation": {
    "pos": "n.",
    "en_def": "false information spread on purpose to trick people",
    "cn_def": "蓄意造假的訊息；假訊息"
  },
  "propaganda": {
    "pos": "n.",
    "en_def": "information used by a government or group to control opinions",
    "cn_def": "政治宣傳"
  },
  "newsroom": {
    "pos": "n.",
    "en_def": "the office where journalists prepare the news",
    "cn_def": "新聞編輯室"
  },
  "eyewitness": {
    "pos": "n.",
    "en_def": "a person who saw an event happen",
    "cn_def": "目擊者"
  },
  "billboard": {
    "pos": "n.",
    "en_def": "a very large outdoor sign for adverts",
    "cn_def": "廣告看板"
  },
  "newspaper": {
    "pos": "n.",
    "en_def": "printed pages of news published daily or weekly",
    "cn_def": "報紙"
  },
  "slander": {
    "pos": "n.",
    "en_def": "false spoken statements that damage someone's reputation",
    "cn_def": "（口頭）誹謗；中傷"
  },
  "mascot": {
    "pos": "n.",
    "en_def": "a character or animal that represents a team or company",
    "cn_def": "吉祥物"
  },
  "counterclaim": {
    "pos": "n.",
    "en_def": "a claim made to oppose another claim",
    "cn_def": "反訴；反駁的主張"
  },
  "slant": {
    "pos": "n.",
    "en_def": "a way of presenting news that favours one side",
    "cn_def": "偏頗角度；傾向"
  },
  "documentary": {
    "pos": "n.",
    "en_def": "a film or programme that gives facts about a real topic",
    "cn_def": "紀錄片"
  },
  "acronym": {
    "pos": "n.",
    "en_def": "a word made from the first letters of other words",
    "cn_def": "首字母縮略字"
  },
  "headline": {
    "pos": "n.",
    "en_def": "the title of a news story in large letters",
    "cn_def": "新聞標題；頭條"
  },
  "brand": {
    "pos": "n.",
    "en_def": "a product name made by a particular company",
    "cn_def": "品牌"
  }
};

const EXTRA_GLOSSES = {};
