// Topic 14 Subunit 4 Quiz Data: Misinformation & Fake News 假訊息與假新聞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T14 S04 - Misinformation & Fake News 假訊息與假新聞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "disinformation",
    "pos": "n.",
    "cn_def": "蓄意造假的訊息；假訊息",
    "en_def": "false information spread on purpose to trick people",
    "sentence": "The {{BLANK}} campaign used fake accounts to spread lies about the vaccine, so many parents became afraid to protect their children.",
    "cn": "那場假訊息攻勢利用假帳號散播關於疫苗的謊言，所以許多家長變得不敢讓孩子接種。"
  },
  {
    "word": "fake news",
    "pos": "n.phr.",
    "cn_def": "假新聞",
    "en_def": "false stories that look like real news",
    "sentence": "My uncle shared a story about free money from the government, but it was {{BLANK}}, so I showed him the official website.",
    "cn": "我叔叔分享了一則政府發放免費現金的消息，但那是假新聞，所以我給他看了官方網站。"
  },
  {
    "word": "hoax",
    "pos": "n.",
    "cn_def": "騙局；惡作劇",
    "en_def": "a trick that makes people believe something false",
    "sentence": "The photo of a shark swimming on the highway was a {{BLANK}}, but thousands of people believed it during the flood.",
    "cn": "那張鯊魚在高速公路上游泳的照片是個惡作劇，但淹水期間成千上萬的人都信以為真。"
  },
  {
    "word": "rumour",
    "pos": "n.",
    "cn_def": "謠言；傳聞",
    "en_def": "a story passed between people that may not be true",
    "sentence": "A {{BLANK}} spread that the school would close for a week, but the principal soon announced that it was not true.",
    "cn": "有謠言說學校會停課一週，但校長很快就宣布那不是真的。"
  },
  {
    "word": "gossip",
    "pos": "n.",
    "cn_def": "八卦；閒話",
    "en_def": "talk about other people's private lives",
    "sentence": "The office {{BLANK}} about the manager turned out to be false, but it had already damaged her reputation.",
    "cn": "辦公室裡關於經理的八卦結果是假的，但它已經損害了她的名聲。"
  },
  {
    "word": "propaganda",
    "pos": "n.",
    "cn_def": "政治宣傳",
    "en_def": "information used by a government or group to control opinions",
    "sentence": "During the war, both sides used {{BLANK}} posters to make their own soldiers look like heroes and the enemy look evil.",
    "cn": "戰爭期間雙方都用宣傳海報把自己的士兵塑造成英雄，把敵人塑造成邪惡的。"
  },
  {
    "word": "conspiracy theory",
    "pos": "n.phr.",
    "cn_def": "陰謀論",
    "en_def": "a belief that a secret group caused an event",
    "sentence": "He believes a {{BLANK}} that the moon landing was filmed in a studio, although scientists have shown clear evidence against it.",
    "cn": "他相信登月是在攝影棚拍攝的陰謀論，儘管科學家已提出明確的反駁證據。"
  },
  {
    "word": "clickbait",
    "pos": "n.",
    "cn_def": "釣魚標題；點擊誘餌",
    "en_def": "online content with a misleading title to get clicks",
    "sentence": "The title promised a shocking secret about celebrities, but it was just {{BLANK}}, and the article said nothing new.",
    "cn": "那個標題承諾要揭露名人驚人的秘密，但它只是釣魚標題，文章沒有任何新內容。"
  },
  {
    "word": "falsehood",
    "pos": "n.",
    "cn_def": "謊言；不實之詞",
    "en_def": "a statement that is not true",
    "sentence": "The politician repeated the same {{BLANK}} in every speech, so many voters began to believe it was true.",
    "cn": "那位政治人物在每場演講中重複同一個不實說法，所以許多選民開始相信那是真的。"
  },
  {
    "word": "half-truth",
    "pos": "n.",
    "cn_def": "半真半假的話",
    "en_def": "a statement that is partly true but hides important facts",
    "sentence": "The advert said the drink had \"no added sugar\", which was a {{BLANK}}, because the juice itself was full of natural sugar.",
    "cn": "那則廣告說這飲料「無添加糖」，這是半真半假的說法，因為果汁本身就充滿天然糖分。"
  },
  {
    "word": "misquote",
    "pos": "v.",
    "cn_def": "錯誤引用（某人的話）",
    "en_def": "to repeat someone's words wrongly",
    "sentence": "The singer said the newspaper had {{BLANK}} her, because she never said that she hated her fans.",
    "cn": "那位歌手說報紙錯誤引用了她的話，因為她從未說過她討厭她的粉絲。"
  },
  {
    "word": "doctored",
    "pos": "adj.",
    "cn_def": "竄改過的；動過手腳的",
    "en_def": "changed in a dishonest way",
    "sentence": "The {{BLANK}} photo made the crowd look much bigger, but experts noticed that some faces appeared twice.",
    "cn": "那張動過手腳的照片讓人群看起來大很多，但專家注意到有些臉出現了兩次。"
  },
  {
    "word": "smear campaign",
    "pos": "n.phr.",
    "cn_def": "抹黑行動",
    "en_def": "an organised effort to damage someone's reputation with lies",
    "sentence": "The candidate said she was the victim of a {{BLANK}}, because fake stories about her family appeared just before the election.",
    "cn": "那位候選人說她是抹黑行動的受害者，因為選舉前夕突然出現許多關於她家人的假消息。"
  },
  {
    "word": "defamation",
    "pos": "n.",
    "cn_def": "誹謗",
    "en_def": "harming someone's reputation by saying false things",
    "sentence": "The restaurant owner sued the blogger for {{BLANK}}, because the review falsely claimed that customers had become ill.",
    "cn": "餐廳老闆控告那位部落客誹謗，因為那篇評論不實地聲稱顧客吃了生病。"
  },
  {
    "word": "libel",
    "pos": "n.",
    "cn_def": "（書面）誹謗",
    "en_def": "false written statements that damage someone's reputation",
    "sentence": "The magazine had to pay a large fine for {{BLANK}}, because it published false claims about a businessman.",
    "cn": "那本雜誌因書面誹謗必須支付一大筆罰款，因為它刊登了關於一位商人的不實指控。"
  },
  {
    "word": "slander",
    "pos": "n.",
    "cn_def": "（口頭）誹謗；中傷",
    "en_def": "false spoken statements that damage someone's reputation",
    "sentence": "What he said about his neighbour on the radio was {{BLANK}}, so the neighbour asked a lawyer for help.",
    "cn": "他在廣播上說他鄰居的那些話是中傷，所以那位鄰居請律師幫忙。"
  },
  {
    "word": "spin",
    "pos": "n.",
    "cn_def": "（對消息的）粉飾；操弄說法",
    "en_def": "presenting information in a way that makes you look good",
    "sentence": "The company called the job cuts \"a new start\", but everyone knew it was just {{BLANK}}, and the workers were still angry.",
    "cn": "公司把裁員稱為「新的開始」，但大家都知道那只是粉飾說法，員工們仍然很憤怒。"
  },
  {
    "word": "spin doctor",
    "pos": "n.phr.",
    "cn_def": "公關操盤手；政治化妝師",
    "en_def": "a person paid to make news look good for a politician",
    "sentence": "The minister's {{BLANK}} quickly changed the story, so the scandal disappeared from the news within two days.",
    "cn": "部長的公關操盤手很快就轉移了焦點，所以那件醜聞兩天內就從新聞中消失了。"
  },
  {
    "word": "bot",
    "pos": "n.",
    "cn_def": "機器人帳號；網軍程式",
    "en_def": "a computer program that acts like a real user online",
    "sentence": "Many of the accounts praising the product were {{BLANK}}, because they all posted the same message at the same time.",
    "cn": "許多稱讚那項產品的帳號都是機器人帳號，因為它們都在同一時間發布同樣的訊息。"
  },
  {
    "word": "troll farm",
    "pos": "n.phr.",
    "cn_def": "網軍工廠",
    "en_def": "a group paid to post false or angry comments online",
    "sentence": "Investigators found that a {{BLANK}} had created thousands of fake profiles, and they were all spreading the same rumours.",
    "cn": "調查人員發現一個網軍工廠創造了數千個假帳號，而它們都在散播同樣的謠言。"
  },
  {
    "word": "fearmongering",
    "pos": "n.",
    "cn_def": "散播恐懼；危言聳聽",
    "en_def": "spreading fear to make people believe or do something",
    "sentence": "Some news channels were accused of {{BLANK}} during the outbreak, because they showed panic but gave little useful advice.",
    "cn": "疫情期間有些新聞台被指控散播恐慌，因為它們只呈現恐慌卻很少提供有用的建議。"
  },
  {
    "word": "hearsay",
    "pos": "n.",
    "cn_def": "傳聞；道聽塗說",
    "en_def": "information you heard from others but cannot prove",
    "sentence": "The report was based on {{BLANK}} rather than real evidence, so the editor refused to publish it.",
    "cn": "那篇報導是根據道聽塗說而不是真正的證據，所以編輯拒絕刊登它。"
  },
  {
    "word": "unverified",
    "pos": "adj.",
    "cn_def": "未經證實的",
    "en_def": "not yet checked or proved to be true",
    "sentence": "The TV channel showed {{BLANK}} videos from the scene, but later some of them turned out to be from a different country.",
    "cn": "那家電視台播出了現場未經證實的影片，但後來其中一些被證實來自別的國家。"
  },
  {
    "word": "gullible",
    "pos": "adj.",
    "cn_def": "容易受騙的",
    "en_def": "too easily tricked into believing things",
    "sentence": "My little brother is so {{BLANK}} that he believed a website saying cats can speak French, and he tried to teach ours.",
    "cn": "我弟弟非常容易受騙，他相信了一個說貓會講法語的網站，還試著教我們家的貓。"
  },
  {
    "word": "impostor",
    "pos": "n.",
    "cn_def": "冒牌貨；冒名者",
    "en_def": "a person who pretends to be someone else",
    "sentence": "An {{BLANK}} created an account with the actor's photos, so fans sent money to someone who was not really him.",
    "cn": "一個冒名者用那位演員的照片開了帳號，所以粉絲把錢匯給了一個根本不是他的人。"
  },
  {
    "word": "satire",
    "pos": "n.",
    "cn_def": "諷刺作品",
    "en_def": "humour that makes fun of people or ideas to criticise them",
    "sentence": "The article was {{BLANK}} from a comedy website, but some readers did not understand the joke and believed it was real news.",
    "cn": "那篇文章是喜劇網站的諷刺作品，但有些讀者不懂那是玩笑，以為是真的新聞。"
  },
  {
    "word": "parody",
    "pos": "n.",
    "cn_def": "模仿惡搞作品",
    "en_def": "a funny copy of something that exaggerates it",
    "sentence": "The students made a {{BLANK}} of the school's promotional video, and even the teachers laughed when they watched it.",
    "cn": "學生們拍了一部學校宣傳影片的惡搞版，連老師們看了都笑了。"
  },
  {
    "word": "cherry-pick",
    "pos": "v.",
    "cn_def": "挑選對自己有利的（事實）",
    "en_def": "to choose only facts that support your view",
    "sentence": "The report {{BLANK}} the best results from the study, so it ignored the data showing that the drug did not work for most people.",
    "cn": "那份報告只挑選研究中最好的結果，所以它忽略了顯示這藥物對多數人無效的數據。"
  },
  {
    "word": "partisan",
    "pos": "adj.",
    "cn_def": "偏袒某一黨派的",
    "en_def": "strongly supporting one political party",
    "sentence": "The TV station is very {{BLANK}}, so it rarely reports any good news about the opposition party.",
    "cn": "那家電視台非常偏袒特定政黨，所以它很少報導任何關於反對黨的好消息。"
  },
  {
    "word": "infodemic",
    "pos": "n.",
    "cn_def": "資訊疫情；訊息氾濫",
    "en_def": "too much information, including false information, during a crisis",
    "sentence": "During the pandemic there was an {{BLANK}} of advice online, and it was hard to know which tips were safe.",
    "cn": "疫情期間網路上出現了建議的資訊疫情，很難知道哪些建議是安全的。"
  },
  {
    "word": "outrage",
    "pos": "n.",
    "cn_def": "憤慨；義憤",
    "en_def": "a strong feeling of anger and shock",
    "sentence": "The video caused {{BLANK}} online, but later people discovered that it had been edited to look much worse.",
    "cn": "那段影片在網路上引起公憤，但後來人們發現它被剪輯得看起來更嚴重。"
  },
  {
    "word": "inflammatory",
    "pos": "adj.",
    "cn_def": "煽動性的；激起憤怒的",
    "en_def": "likely to make people angry or violent",
    "sentence": "The post used {{BLANK}} language about immigrants, so the platform removed it and suspended the account.",
    "cn": "那則貼文使用了關於移民的煽動性語言，所以平台刪除了它並停用該帳號。"
  },
  {
    "word": "sensationalism",
    "pos": "n.",
    "cn_def": "譁眾取寵的報導手法；煽情主義",
    "en_def": "presenting news in a shocking way to attract attention",
    "sentence": "{{BLANK}} helps sell newspapers, but it often makes small risks seem much bigger than they really are.",
    "cn": "煽情主義有助於賣報紙，但它常把小風險渲染得比實際嚴重得多。"
  }
];

const MCQS = [
  {
    "q": "The _____ campaign used fake accounts to spread lies about the vaccine, so many parents became afraid to protect their children.",
    "options": [
      "influencer",
      "television",
      "anonymity",
      "disinformation"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "My uncle shared a story about free money from the government, but it was _____, so I showed him the official website.",
    "options": [
      "active listening",
      "fake news",
      "video call",
      "sponsored content"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The photo of a shark swimming on the highway was a _____, but thousands of people believed it during the flood.",
    "options": [
      "hoax",
      "flyer",
      "barrage",
      "manifesto"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "A _____ spread that the school would close for a week, but the principal soon announced that it was not true.",
    "options": [
      "logo",
      "jingle",
      "rumour",
      "intent"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The office _____ about the manager turned out to be false, but it had already damaged her reputation.",
    "options": [
      "audience",
      "gossip",
      "gaffe",
      "spectacle"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "During the war, both sides used _____ posters to make their own soldiers look like heroes and the enemy look evil.",
    "options": [
      "advertising",
      "mascot",
      "slur",
      "propaganda"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "He believes a _____ that the moon landing was filmed in a studio, although scientists have shown clear evidence against it.",
    "options": [
      "press freedom",
      "search engine",
      "conspiracy theory",
      "breaking news"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The title promised a shocking secret about celebrities, but it was just _____, and the article said nothing new.",
    "options": [
      "clickbait",
      "bombardment",
      "follower",
      "advertisement"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The politician repeated the same _____ in every speech, so many voters began to believe it was true.",
    "options": [
      "etiquette",
      "doomscrolling",
      "glimpse",
      "falsehood"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The advert said the drink had \"no added sugar\", which was a _____, because the juice itself was full of natural sugar.",
    "options": [
      "outreach",
      "counterclaim",
      "half-truth",
      "anthology"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The singer said the newspaper had _____ her, because she never said that she hated her fans.",
    "options": [
      "sabotage",
      "misquote",
      "broadcast",
      "weaponise"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The _____ photo made the crowd look much bigger, but experts noticed that some faces appeared twice.",
    "options": [
      "doctored",
      "verbal",
      "investigative",
      "reputable"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The candidate said she was the victim of a _____, because fake stories about her family appeared just before the election.",
    "options": [
      "pen pal",
      "group chat",
      "mass media",
      "smear campaign"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The restaurant owner sued the blogger for _____, because the review falsely claimed that customers had become ill.",
    "options": [
      "defamation",
      "hype",
      "op-ed",
      "treatise"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The magazine had to pay a large fine for _____, because it published false claims about a businessman.",
    "options": [
      "editor",
      "libel",
      "detractor",
      "logo"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "What he said about his neighbour on the radio was _____, so the neighbour asked a lawyer for help.",
    "options": [
      "whistle-blower",
      "counterclaim",
      "slander",
      "editorial"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The company called the job cuts \"a new start\", but everyone knew it was just _____, and the workers were still angry.",
    "options": [
      "spin",
      "subtext",
      "mascot",
      "citation"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The minister's _____ quickly changed the story, so the scandal disappeared from the news within two days.",
    "options": [
      "vantage point",
      "front page",
      "screen time",
      "spin doctor"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Many of the accounts praising the product were _____, because they all posted the same message at the same time.",
    "options": [
      "brand",
      "bot",
      "editorial",
      "euphemism"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Investigators found that a _____ had created thousands of fake profiles, and they were all spreading the same rumours.",
    "options": [
      "video call",
      "echo chamber",
      "troll farm",
      "group chat"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Some news channels were accused of _____ during the outbreak, because they showed panic but gave little useful advice.",
    "options": [
      "spectacle",
      "fearmongering",
      "folly",
      "troll"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The report was based on _____ rather than real evidence, so the editor refused to publish it.",
    "options": [
      "follower",
      "glimpse",
      "oratory",
      "hearsay"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The TV channel showed _____ videos from the scene, but later some of them turned out to be from a different country.",
    "options": [
      "unverified",
      "long-winded",
      "sensational",
      "courteous"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "My little brother is so _____ that he believed a website saying cats can speak French, and he tried to teach ours.",
    "options": [
      "non-verbal",
      "deceitful",
      "gullible",
      "informative"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "An _____ created an account with the actor's photos, so fans sent money to someone who was not really him.",
    "options": [
      "impostor",
      "op-ed",
      "caricature",
      "polemic"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The article was _____ from a comedy website, but some readers did not understand the joke and believed it was real news.",
    "options": [
      "vlogger",
      "studio",
      "satire",
      "magazine"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The students made a _____ of the school's promotional video, and even the teachers laughed when they watched it.",
    "options": [
      "folly",
      "intent",
      "spectacle",
      "parody"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The report _____ the best results from the study, so it ignored the data showing that the drug did not work for most people.",
    "options": [
      "woo",
      "cherry-pick",
      "enthral",
      "dramatise"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The TV station is very _____, so it rarely reports any good news about the opposition party.",
    "options": [
      "partisan",
      "outlandish",
      "preposterous",
      "culpable"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "During the pandemic there was an _____ of advice online, and it was hard to know which tips were safe.",
    "options": [
      "advertising",
      "hypocrisy",
      "infodemic",
      "dialogue"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The video caused _____ online, but later people discovered that it had been edited to look much worse.",
    "options": [
      "barrage",
      "slant",
      "consumer",
      "outrage"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The post used _____ language about immigrants, so the platform removed it and suspended the account.",
    "options": [
      "pretentious",
      "inflammatory",
      "indignant",
      "adamant"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "_____ helps sell newspapers, but it often makes small risks seem much bigger than they really are.",
    "options": [
      "voicemail",
      "gesture",
      "influencer",
      "sensationalism"
    ],
    "answer": 3,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "disinformation": {
    "pos": "n.",
    "en_def": "false information spread on purpose to trick people",
    "cn_def": "蓄意造假的訊息；假訊息"
  },
  "fake news": {
    "pos": "n.phr.",
    "en_def": "false stories that look like real news",
    "cn_def": "假新聞"
  },
  "hoax": {
    "pos": "n.",
    "en_def": "a trick that makes people believe something false",
    "cn_def": "騙局；惡作劇"
  },
  "rumour": {
    "pos": "n.",
    "en_def": "a story passed between people that may not be true",
    "cn_def": "謠言；傳聞"
  },
  "gossip": {
    "pos": "n.",
    "en_def": "talk about other people's private lives",
    "cn_def": "八卦；閒話"
  },
  "propaganda": {
    "pos": "n.",
    "en_def": "information used by a government or group to control opinions",
    "cn_def": "政治宣傳"
  },
  "conspiracy theory": {
    "pos": "n.phr.",
    "en_def": "a belief that a secret group caused an event",
    "cn_def": "陰謀論"
  },
  "clickbait": {
    "pos": "n.",
    "en_def": "online content with a misleading title to get clicks",
    "cn_def": "釣魚標題；點擊誘餌"
  },
  "falsehood": {
    "pos": "n.",
    "en_def": "a statement that is not true",
    "cn_def": "謊言；不實之詞"
  },
  "half-truth": {
    "pos": "n.",
    "en_def": "a statement that is partly true but hides important facts",
    "cn_def": "半真半假的話"
  },
  "misquote": {
    "pos": "v.",
    "en_def": "to repeat someone's words wrongly",
    "cn_def": "錯誤引用（某人的話）"
  },
  "doctored": {
    "pos": "adj.",
    "en_def": "changed in a dishonest way",
    "cn_def": "竄改過的；動過手腳的"
  },
  "smear campaign": {
    "pos": "n.phr.",
    "en_def": "an organised effort to damage someone's reputation with lies",
    "cn_def": "抹黑行動"
  },
  "defamation": {
    "pos": "n.",
    "en_def": "harming someone's reputation by saying false things",
    "cn_def": "誹謗"
  },
  "libel": {
    "pos": "n.",
    "en_def": "false written statements that damage someone's reputation",
    "cn_def": "（書面）誹謗"
  },
  "slander": {
    "pos": "n.",
    "en_def": "false spoken statements that damage someone's reputation",
    "cn_def": "（口頭）誹謗；中傷"
  },
  "spin": {
    "pos": "n.",
    "en_def": "presenting information in a way that makes you look good",
    "cn_def": "（對消息的）粉飾；操弄說法"
  },
  "spin doctor": {
    "pos": "n.phr.",
    "en_def": "a person paid to make news look good for a politician",
    "cn_def": "公關操盤手；政治化妝師"
  },
  "bot": {
    "pos": "n.",
    "en_def": "a computer program that acts like a real user online",
    "cn_def": "機器人帳號；網軍程式"
  },
  "troll farm": {
    "pos": "n.phr.",
    "en_def": "a group paid to post false or angry comments online",
    "cn_def": "網軍工廠"
  },
  "fearmongering": {
    "pos": "n.",
    "en_def": "spreading fear to make people believe or do something",
    "cn_def": "散播恐懼；危言聳聽"
  },
  "hearsay": {
    "pos": "n.",
    "en_def": "information you heard from others but cannot prove",
    "cn_def": "傳聞；道聽塗說"
  },
  "unverified": {
    "pos": "adj.",
    "en_def": "not yet checked or proved to be true",
    "cn_def": "未經證實的"
  },
  "gullible": {
    "pos": "adj.",
    "en_def": "too easily tricked into believing things",
    "cn_def": "容易受騙的"
  },
  "impostor": {
    "pos": "n.",
    "en_def": "a person who pretends to be someone else",
    "cn_def": "冒牌貨；冒名者"
  },
  "satire": {
    "pos": "n.",
    "en_def": "humour that makes fun of people or ideas to criticise them",
    "cn_def": "諷刺作品"
  },
  "parody": {
    "pos": "n.",
    "en_def": "a funny copy of something that exaggerates it",
    "cn_def": "模仿惡搞作品"
  },
  "cherry-pick": {
    "pos": "v.",
    "en_def": "to choose only facts that support your view",
    "cn_def": "挑選對自己有利的（事實）"
  },
  "partisan": {
    "pos": "adj.",
    "en_def": "strongly supporting one political party",
    "cn_def": "偏袒某一黨派的"
  },
  "infodemic": {
    "pos": "n.",
    "en_def": "too much information, including false information, during a crisis",
    "cn_def": "資訊疫情；訊息氾濫"
  },
  "outrage": {
    "pos": "n.",
    "en_def": "a strong feeling of anger and shock",
    "cn_def": "憤慨；義憤"
  },
  "inflammatory": {
    "pos": "adj.",
    "en_def": "likely to make people angry or violent",
    "cn_def": "煽動性的；激起憤怒的"
  },
  "sensationalism": {
    "pos": "n.",
    "en_def": "presenting news in a shocking way to attract attention",
    "cn_def": "譁眾取寵的報導手法；煽情主義"
  },
  "influencer": {
    "pos": "n.",
    "en_def": "a person with many online followers who affects what they buy",
    "cn_def": "網紅；意見領袖"
  },
  "television": {
    "pos": "n.",
    "en_def": "a system or machine for watching programmes",
    "cn_def": "電視"
  },
  "anonymity": {
    "pos": "n.",
    "en_def": "the state of hiding your real name",
    "cn_def": "匿名（性）"
  },
  "active listening": {
    "pos": "n.phr.",
    "en_def": "listening carefully and showing that you understand",
    "cn_def": "主動聆聽；積極傾聽"
  },
  "video call": {
    "pos": "n.phr.",
    "en_def": "a call where people can see each other on screen",
    "cn_def": "視訊通話"
  },
  "sponsored content": {
    "pos": "n.phr.",
    "en_def": "material paid for by a company but made to look like normal posts",
    "cn_def": "業配內容；贊助內容"
  },
  "flyer": {
    "pos": "n.",
    "en_def": "a printed paper giving information about an event or offer",
    "cn_def": "傳單"
  },
  "barrage": {
    "pos": "n.",
    "en_def": "a large number of things coming at once",
    "cn_def": "接二連三的一大堆；連珠砲"
  },
  "manifesto": {
    "pos": "n.",
    "en_def": "a written statement of a group's aims and beliefs",
    "cn_def": "宣言；政見"
  },
  "logo": {
    "pos": "n.",
    "en_def": "a symbol that represents a company",
    "cn_def": "商標；標誌"
  },
  "jingle": {
    "pos": "n.",
    "en_def": "a short, catchy song used in an advert",
    "cn_def": "廣告歌"
  },
  "intent": {
    "pos": "n.",
    "en_def": "what someone plans to do",
    "cn_def": "意圖；目的"
  },
  "audience": {
    "pos": "n.",
    "en_def": "the people who watch, read or listen to something",
    "cn_def": "觀眾；聽眾；受眾"
  },
  "gaffe": {
    "pos": "n.",
    "en_def": "an embarrassing mistake in a social situation",
    "cn_def": "失言；出糗"
  },
  "spectacle": {
    "pos": "n.",
    "en_def": "an event that is exciting or shocking to watch",
    "cn_def": "奇觀；引人注目的場面"
  },
  "advertising": {
    "pos": "n.",
    "en_def": "the business of telling people about products to sell them",
    "cn_def": "廣告業；廣告宣傳"
  },
  "mascot": {
    "pos": "n.",
    "en_def": "a character or animal that represents a team or company",
    "cn_def": "吉祥物"
  },
  "slur": {
    "pos": "n.",
    "en_def": "an insulting remark about someone",
    "cn_def": "誹謗；侮辱性言語"
  },
  "press freedom": {
    "pos": "n.phr.",
    "en_def": "the right of the media to report without government control",
    "cn_def": "新聞自由"
  },
  "search engine": {
    "pos": "n.phr.",
    "en_def": "a website that helps you find information online",
    "cn_def": "搜尋引擎"
  },
  "breaking news": {
    "pos": "n.phr.",
    "en_def": "news about something that is happening right now",
    "cn_def": "即時新聞；快訊"
  },
  "bombardment": {
    "pos": "n.",
    "en_def": "a very large number of things directed at someone",
    "cn_def": "轟炸；大量湧入"
  },
  "follower": {
    "pos": "n.",
    "en_def": "a person who chooses to see someone's posts",
    "cn_def": "追蹤者；粉絲"
  },
  "advertisement": {
    "pos": "n.",
    "en_def": "a notice or video that tries to sell something",
    "cn_def": "廣告"
  },
  "etiquette": {
    "pos": "n.",
    "en_def": "the rules of polite behaviour",
    "cn_def": "禮節；禮儀"
  },
  "doomscrolling": {
    "pos": "n.",
    "en_def": "reading bad news online for too long",
    "cn_def": "末日滾動；狂刷負面新聞"
  },
  "glimpse": {
    "pos": "n.",
    "en_def": "a quick look or short experience of something",
    "cn_def": "一瞥；短暫的體驗"
  },
  "outreach": {
    "pos": "n.",
    "en_def": "efforts to give help or information to people",
    "cn_def": "推廣服務；外展活動"
  },
  "counterclaim": {
    "pos": "n.",
    "en_def": "a claim made to oppose another claim",
    "cn_def": "反訴；反駁的主張"
  },
  "anthology": {
    "pos": "n.",
    "en_def": "a book of works by different writers",
    "cn_def": "選集；文集"
  },
  "sabotage": {
    "pos": "v.",
    "en_def": "to damage something on purpose to stop it working",
    "cn_def": "蓄意破壞"
  },
  "broadcast": {
    "pos": "v.",
    "en_def": "to send out a programme on TV or radio",
    "cn_def": "播出；廣播"
  },
  "weaponise": {
    "pos": "v.",
    "en_def": "to use something as a way to attack others",
    "cn_def": "將…武器化"
  },
  "verbal": {
    "pos": "adj.",
    "en_def": "using spoken words",
    "cn_def": "口頭的；言語的"
  },
  "investigative": {
    "pos": "adj.",
    "en_def": "trying to find hidden facts",
    "cn_def": "調查性的"
  },
  "reputable": {
    "pos": "adj.",
    "en_def": "known to be honest and reliable",
    "cn_def": "聲譽良好的；可信賴的"
  },
  "pen pal": {
    "pos": "n.phr.",
    "en_def": "a friend in another place you write letters to",
    "cn_def": "筆友"
  },
  "group chat": {
    "pos": "n.phr.",
    "en_def": "an online conversation with several people at once",
    "cn_def": "群組聊天"
  },
  "mass media": {
    "pos": "n.phr.",
    "en_def": "TV, radio and newspapers that reach large numbers of people",
    "cn_def": "大眾傳播媒體"
  },
  "hype": {
    "pos": "n.",
    "en_def": "exaggerated excitement and advertising about something",
    "cn_def": "炒作；大肆宣傳"
  },
  "op-ed": {
    "pos": "n.",
    "en_def": "an opinion article written by someone outside the newspaper",
    "cn_def": "特約評論；投書"
  },
  "treatise": {
    "pos": "n.",
    "en_def": "a long, serious piece of writing on a subject",
    "cn_def": "專著；論文"
  },
  "editor": {
    "pos": "n.",
    "en_def": "a person who checks and decides what is published",
    "cn_def": "編輯；主編"
  },
  "detractor": {
    "pos": "n.",
    "en_def": "a person who criticises someone or something",
    "cn_def": "批評者；貶低者"
  },
  "whistle-blower": {
    "pos": "n.",
    "en_def": "a person who tells the public about wrongdoing at work",
    "cn_def": "吹哨者；揭弊者"
  },
  "editorial": {
    "pos": "n.",
    "en_def": "a newspaper article giving the paper's opinion",
    "cn_def": "社論"
  },
  "subtext": {
    "pos": "n.",
    "en_def": "a hidden meaning that is not stated directly",
    "cn_def": "潛台詞；言外之意"
  },
  "citation": {
    "pos": "n.",
    "en_def": "a note showing where information came from",
    "cn_def": "引用；出處"
  },
  "vantage point": {
    "pos": "n.phr.",
    "en_def": "a position from which you can see or understand something well",
    "cn_def": "有利位置；觀點"
  },
  "front page": {
    "pos": "n.phr.",
    "en_def": "the first page of a newspaper with the main news",
    "cn_def": "頭版"
  },
  "screen time": {
    "pos": "n.phr.",
    "en_def": "the time you spend looking at a screen",
    "cn_def": "螢幕使用時間"
  },
  "brand": {
    "pos": "n.",
    "en_def": "a product name made by a particular company",
    "cn_def": "品牌"
  },
  "euphemism": {
    "pos": "n.",
    "en_def": "a polite word used instead of an unpleasant one",
    "cn_def": "委婉語"
  },
  "echo chamber": {
    "pos": "n.phr.",
    "en_def": "an online space where you only hear opinions like your own",
    "cn_def": "同溫層；回音室"
  },
  "folly": {
    "pos": "n.",
    "en_def": "a foolish action or idea",
    "cn_def": "愚蠢；愚行"
  },
  "troll": {
    "pos": "n.",
    "en_def": "a person who posts rude messages to upset others",
    "cn_def": "網路酸民"
  },
  "oratory": {
    "pos": "n.",
    "en_def": "the skill of making powerful public speeches",
    "cn_def": "演說技巧；雄辯術"
  },
  "long-winded": {
    "pos": "adj.",
    "en_def": "too long and boring",
    "cn_def": "冗長的；囉嗦的"
  },
  "sensational": {
    "pos": "adj.",
    "en_def": "made to shock or excite people rather than inform them",
    "cn_def": "聳動的；譁眾取寵的"
  },
  "courteous": {
    "pos": "adj.",
    "en_def": "polite and respectful",
    "cn_def": "有禮貌的；謙恭的"
  },
  "non-verbal": {
    "pos": "adj.",
    "en_def": "without words, such as through body movements",
    "cn_def": "非語言的"
  },
  "deceitful": {
    "pos": "adj.",
    "en_def": "trying to make people believe things that are false",
    "cn_def": "欺詐的；不誠實的"
  },
  "informative": {
    "pos": "adj.",
    "en_def": "giving useful information",
    "cn_def": "有益的；資訊豐富的"
  },
  "caricature": {
    "pos": "n.",
    "en_def": "a drawing or description that exaggerates features for humour",
    "cn_def": "諷刺漫畫；誇張描繪"
  },
  "polemic": {
    "pos": "n.",
    "en_def": "a strong written or spoken attack on an idea",
    "cn_def": "論戰文章；猛烈抨擊"
  },
  "vlogger": {
    "pos": "n.",
    "en_def": "a person who makes video blogs",
    "cn_def": "影音部落客；Vlogger"
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
  "woo": {
    "pos": "v.",
    "en_def": "to try to get someone's support",
    "cn_def": "爭取；拉攏"
  },
  "enthral": {
    "pos": "v.",
    "en_def": "to hold someone's attention completely",
    "cn_def": "使著迷；迷住"
  },
  "dramatise": {
    "pos": "v.",
    "en_def": "to make something seem more exciting or serious than it is",
    "cn_def": "誇大；戲劇化"
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
  "culpable": {
    "pos": "adj.",
    "en_def": "deserving blame",
    "cn_def": "應受責備的；有罪責的"
  },
  "hypocrisy": {
    "pos": "n.",
    "en_def": "saying one thing but doing the opposite",
    "cn_def": "虛偽；偽善"
  },
  "dialogue": {
    "pos": "n.",
    "en_def": "a discussion between groups to solve a problem",
    "cn_def": "對話；交流"
  },
  "slant": {
    "pos": "n.",
    "en_def": "a way of presenting news that favours one side",
    "cn_def": "偏頗角度；傾向"
  },
  "consumer": {
    "pos": "n.",
    "en_def": "a person who buys goods or services",
    "cn_def": "消費者"
  },
  "pretentious": {
    "pos": "adj.",
    "en_def": "trying to seem more important or clever than you are",
    "cn_def": "自命不凡的；做作的"
  },
  "indignant": {
    "pos": "adj.",
    "en_def": "angry because something seems unfair",
    "cn_def": "憤慨的；義憤填膺的"
  },
  "adamant": {
    "pos": "adj.",
    "en_def": "refusing to change your opinion",
    "cn_def": "堅定不移的；堅持的"
  },
  "voicemail": {
    "pos": "n.",
    "en_def": "a spoken message left on a phone",
    "cn_def": "語音留言"
  },
  "gesture": {
    "pos": "n.",
    "en_def": "a movement of the hand or head to show meaning",
    "cn_def": "手勢；姿態"
  }
};

const EXTRA_GLOSSES = {};
