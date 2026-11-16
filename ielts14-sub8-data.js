// Topic 14 Subunit 8 Quiz Data: Academic Words 學術單字 1 (conjure – silence)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T14 S08 - Academic Words 學術單字 1 (conjure – silence)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "conjure",
    "pos": "v.",
    "cn_def": "使浮現；變出",
    "en_def": "to make a picture or idea appear in someone's mind",
    "sentence": "The word \"headline\" {{BLANK}} images of big black letters, but today most headlines appear on small phone screens.",
    "cn": "「頭條」這個字會讓人聯想到大大的黑色字體，但如今大多數標題都出現在小小的手機螢幕上。"
  },
  {
    "word": "decry",
    "pos": "v.",
    "cn_def": "公開譴責；抨擊",
    "en_def": "to say publicly that something is bad",
    "sentence": "Many teachers {{BLANK}} the use of phones in class, but some argue that phones can be useful learning tools.",
    "cn": "許多老師抨擊在課堂上使用手機，但也有人認為手機可以是有用的學習工具。"
  },
  {
    "word": "denigrate",
    "pos": "v.",
    "cn_def": "詆毀；貶低",
    "en_def": "to say that someone or something is not good or important",
    "sentence": "The new advert openly {{BLANK}} rival brands, so many viewers complained that it was unfair and unkind.",
    "cn": "那則新廣告公然貶低競爭品牌，所以許多觀眾抱怨它不公平又不厚道。"
  },
  {
    "word": "disavow",
    "pos": "v.",
    "cn_def": "否認（與…有關）；撇清",
    "en_def": "to say you are not connected with something",
    "sentence": "The party quickly {{BLANK}} the fake website, because it was spreading lies in the party's name.",
    "cn": "該黨很快就撇清與那個假網站的關係，因為它以該黨的名義散播謊言。"
  },
  {
    "word": "discount",
    "pos": "v.",
    "cn_def": "不理會；不全信",
    "en_def": "to decide that something is not important or true",
    "sentence": "You should not {{BLANK}} a story just because you dislike the newspaper, so always look at the evidence first.",
    "cn": "你不應該只因為不喜歡那家報紙就不採信一則報導，所以一定要先看證據。"
  },
  {
    "word": "disparage",
    "pos": "v.",
    "cn_def": "貶損；輕視",
    "en_def": "to speak about someone in a way that shows no respect",
    "sentence": "The host often {{BLANK}} his guests to get laughs, but many viewers found his jokes cruel rather than funny.",
    "cn": "那位主持人常常貶損來賓來博取笑聲，但許多觀眾覺得他的笑話殘忍而不好笑。"
  },
  {
    "word": "divulge",
    "pos": "v.",
    "cn_def": "洩漏；透露",
    "en_def": "to tell secret information",
    "sentence": "The reporter refused to {{BLANK}} her source, even though the court threatened to fine her.",
    "cn": "那位記者拒絕透露她的消息來源，即使法院威脅要對她罰款。"
  },
  {
    "word": "downplay",
    "pos": "v.",
    "cn_def": "淡化；輕描淡寫",
    "en_def": "to make something seem less important than it is",
    "sentence": "The company tried to {{BLANK}} the data leak, but customers were angry when they learned how many accounts were affected.",
    "cn": "那家公司試圖淡化資料外洩事件，但顧客得知有多少帳號受影響時非常憤怒。"
  },
  {
    "word": "dramatise",
    "pos": "v.",
    "cn_def": "誇大；戲劇化",
    "en_def": "to make something seem more exciting or serious than it is",
    "sentence": "The video {{BLANK}} a small argument between neighbours, so it looked like a violent fight.",
    "cn": "那段影片把鄰居間的小爭執戲劇化了，所以看起來像一場暴力衝突。"
  },
  {
    "word": "embroil",
    "pos": "v.",
    "cn_def": "使捲入（糾紛）",
    "en_def": "to involve someone in a difficult situation",
    "sentence": "The singer became {{BLANK}} in a copyright battle, and her new album was delayed for over a year.",
    "cn": "那位歌手捲入了一場版權糾紛，她的新專輯延遲了一年多。"
  },
  {
    "word": "equivocate",
    "pos": "v.",
    "cn_def": "含糊其辭；支吾搪塞",
    "en_def": "to avoid giving a clear answer",
    "sentence": "The minister {{BLANK}} when reporters asked about the budget, so nobody knew whether the new hospital would be built.",
    "cn": "記者詢問預算時部長含糊其辭，所以沒有人知道新醫院會不會蓋。"
  },
  {
    "word": "garble",
    "pos": "v.",
    "cn_def": "使混亂不清；曲解",
    "en_def": "to mix up a message so it is hard to understand",
    "sentence": "The phone line was poor and his message was {{BLANK}}, so I could only understand a few words.",
    "cn": "電話訊號很差，他的訊息斷斷續續聽不清楚，所以我只聽懂了幾個字。"
  },
  {
    "word": "glamorise",
    "pos": "v.",
    "cn_def": "美化；使有魅力",
    "en_def": "to make something seem more attractive than it really is",
    "sentence": "Some films {{BLANK}} smoking, so young viewers may think it looks cool rather than dangerous.",
    "cn": "有些電影美化抽菸，所以年輕觀眾可能會覺得那很酷而不是危險。"
  },
  {
    "word": "hijack",
    "pos": "v.",
    "cn_def": "劫持；挾持（議題）",
    "en_def": "to take control of something for your own purposes",
    "sentence": "A small group {{BLANK}} the online discussion about school lunches, and soon everyone was arguing about politics instead.",
    "cn": "一小群人挾持了關於學校午餐的網路討論，很快大家都改成在吵政治。"
  },
  {
    "word": "insinuate",
    "pos": "v.",
    "cn_def": "暗示；影射",
    "en_def": "to suggest something bad in an indirect way",
    "sentence": "The article {{BLANK}} that the athlete had cheated, but it did not give any real evidence.",
    "cn": "那篇文章暗示那位運動員作弊，但沒有提出任何真正的證據。"
  },
  {
    "word": "misconstrue",
    "pos": "v.",
    "cn_def": "誤解；曲解",
    "en_def": "to understand something wrongly",
    "sentence": "My friend {{BLANK}} my joke as an insult, so I explained what I meant and apologised.",
    "cn": "我朋友把我的玩笑誤解成侮辱，所以我解釋了我的意思並道歉。"
  },
  {
    "word": "misrepresent",
    "pos": "v.",
    "cn_def": "歪曲；不實地陳述",
    "en_def": "to describe someone or something falsely",
    "sentence": "The short clip {{BLANK}} the scientist's views, because it left out the part where she explained her doubts.",
    "cn": "那段短片歪曲了那位科學家的觀點，因為它刪掉了她解釋自己疑慮的部分。"
  },
  {
    "word": "muddle",
    "pos": "v.",
    "cn_def": "使混亂；弄混",
    "en_def": "to mix things up and cause confusion",
    "sentence": "The two reports used different numbers, so they {{BLANK}} readers who wanted to know the real cost.",
    "cn": "兩份報告使用了不同的數字，所以讓想知道實際花費的讀者一頭霧水。"
  },
  {
    "word": "obfuscate",
    "pos": "v.",
    "cn_def": "使模糊；混淆",
    "en_def": "to make something deliberately unclear",
    "sentence": "The contract used long, difficult words to {{BLANK}} the hidden fees, so few customers noticed them.",
    "cn": "那份合約使用又長又難的字來混淆隱藏費用，所以很少顧客注意到。"
  },
  {
    "word": "pander",
    "pos": "v.",
    "cn_def": "迎合；討好",
    "en_def": "to give people what they want even if it is wrong",
    "sentence": "Some websites {{BLANK}} to readers' fears, because frightening stories get more clicks than calm ones.",
    "cn": "有些網站迎合讀者的恐懼，因為嚇人的報導比冷靜的報導獲得更多點擊。"
  },
  {
    "word": "placate",
    "pos": "v.",
    "cn_def": "安撫；平息怒氣",
    "en_def": "to make someone less angry",
    "sentence": "The manager offered free tickets to {{BLANK}} the angry fans, but many still demanded a full refund.",
    "cn": "經理提供免費門票來安撫憤怒的球迷，但許多人仍要求全額退款。"
  },
  {
    "word": "profess",
    "pos": "v.",
    "cn_def": "聲稱；自稱",
    "en_def": "to claim something, often falsely",
    "sentence": "He {{BLANK}} to be an expert on health, but he had no medical training and his advice was dangerous.",
    "cn": "他自稱是健康專家，但他沒有受過醫學訓練，他的建議很危險。"
  },
  {
    "word": "relay",
    "pos": "v.",
    "cn_def": "轉達；轉播",
    "en_def": "to pass a message from one person to another",
    "sentence": "The teacher asked me to {{BLANK}} the message to my classmates, because the school website was not working.",
    "cn": "老師要我把訊息轉達給同學，因為學校網站故障了。"
  },
  {
    "word": "repudiate",
    "pos": "v.",
    "cn_def": "駁斥；否認",
    "en_def": "to say officially that something is not true",
    "sentence": "The scientist publicly {{BLANK}} the claims made in the video, and she explained why they were wrong.",
    "cn": "那位科學家公開駁斥影片中的說法，並解釋為什麼它們是錯的。"
  },
  {
    "word": "silence",
    "pos": "v.",
    "cn_def": "使沉默；壓制",
    "en_def": "to stop someone from speaking or expressing opinions",
    "sentence": "The government tried to {{BLANK}} critics by closing newspapers, but people continued to share news online.",
    "cn": "政府試圖關閉報社來壓制批評者的聲音，但人們繼續在網路上分享新聞。"
  }
];

const MCQS = [
  {
    "q": "The word \"headline\" _____ images of big black letters, but today most headlines appear on small phone screens.",
    "options": [
      "conjure",
      "demonise",
      "vouch",
      "whitewash"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Many teachers _____ the use of phones in class, but some argue that phones can be useful learning tools.",
    "options": [
      "recant",
      "decry",
      "defuse",
      "languish"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The new advert openly _____ rival brands, so many viewers complained that it was unfair and unkind.",
    "options": [
      "vilify",
      "misquote",
      "denigrate",
      "understate"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The party quickly _____ the fake website, because it was spreading lies in the party's name.",
    "options": [
      "vilify",
      "enthral",
      "recant",
      "disavow"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "You should not _____ a story just because you dislike the newspaper, so always look at the evidence first.",
    "options": [
      "discount",
      "unmask",
      "quash",
      "feign"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The host often _____ his guests to get laughs, but many viewers found his jokes cruel rather than funny.",
    "options": [
      "chastise",
      "utter",
      "livestream",
      "disparage"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The reporter refused to _____ her source, even though the court threatened to fine her.",
    "options": [
      "post",
      "incriminate",
      "divulge",
      "lambast"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The company tried to _____ the data leak, but customers were angry when they learned how many accounts were affected.",
    "options": [
      "pacify",
      "downplay",
      "eschew",
      "chastise"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The video _____ a small argument between neighbours, so it looked like a violent fight.",
    "options": [
      "summon",
      "ramble",
      "exonerate",
      "dramatise"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The singer became _____ in a copyright battle, and her new album was delayed for over a year.",
    "options": [
      "enthral",
      "embroil",
      "infiltrate",
      "broadcast"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The minister _____ when reporters asked about the budget, so nobody knew whether the new hospital would be built.",
    "options": [
      "vilify",
      "sabotage",
      "equivocate",
      "demonise"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The phone line was poor and his message was _____, so I could only understand a few words.",
    "options": [
      "garble",
      "utter",
      "woo",
      "weaponise"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Some films _____ smoking, so young viewers may think it looks cool rather than dangerous.",
    "options": [
      "stigmatise",
      "glamorise",
      "languish",
      "vilify"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "A small group _____ the online discussion about school lunches, and soon everyone was arguing about politics instead.",
    "options": [
      "collude",
      "embolden",
      "hijack",
      "defuse"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The article _____ that the athlete had cheated, but it did not give any real evidence.",
    "options": [
      "insinuate",
      "unfollow",
      "feign",
      "rebuke"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "My friend _____ my joke as an insult, so I explained what I meant and apologised.",
    "options": [
      "pacify",
      "waver",
      "conflate",
      "misconstrue"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The short clip _____ the scientist's views, because it left out the part where she explained her doubts.",
    "options": [
      "malign",
      "misrepresent",
      "misquote",
      "overhear"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The two reports used different numbers, so they _____ readers who wanted to know the real cost.",
    "options": [
      "feign",
      "stigmatise",
      "utter",
      "muddle"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The contract used long, difficult words to _____ the hidden fees, so few customers noticed them.",
    "options": [
      "obfuscate",
      "broadcast",
      "utter",
      "voice"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Some websites _____ to readers' fears, because frightening stories get more clicks than calm ones.",
    "options": [
      "malign",
      "infiltrate",
      "pander",
      "fact-check"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The manager offered free tickets to _____ the angry fans, but many still demanded a full refund.",
    "options": [
      "placate",
      "exonerate",
      "romanticise",
      "curate"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "He _____ to be an expert on health, but he had no medical training and his advice was dangerous.",
    "options": [
      "exonerate",
      "feign",
      "reverberate",
      "profess"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The teacher asked me to _____ the message to my classmates, because the school website was not working.",
    "options": [
      "delude",
      "relay",
      "capitulate",
      "trivialise"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The scientist publicly _____ the claims made in the video, and she explained why they were wrong.",
    "options": [
      "curate",
      "post",
      "repudiate",
      "livestream"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The government tried to _____ critics by closing newspapers, but people continued to share news online.",
    "options": [
      "silence",
      "insist",
      "waver",
      "infiltrate"
    ],
    "answer": 0,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "conjure": {
    "pos": "v.",
    "en_def": "to make a picture or idea appear in someone's mind",
    "cn_def": "使浮現；變出"
  },
  "decry": {
    "pos": "v.",
    "en_def": "to say publicly that something is bad",
    "cn_def": "公開譴責；抨擊"
  },
  "denigrate": {
    "pos": "v.",
    "en_def": "to say that someone or something is not good or important",
    "cn_def": "詆毀；貶低"
  },
  "disavow": {
    "pos": "v.",
    "en_def": "to say you are not connected with something",
    "cn_def": "否認（與…有關）；撇清"
  },
  "discount": {
    "pos": "v.",
    "en_def": "to decide that something is not important or true",
    "cn_def": "不理會；不全信"
  },
  "disparage": {
    "pos": "v.",
    "en_def": "to speak about someone in a way that shows no respect",
    "cn_def": "貶損；輕視"
  },
  "divulge": {
    "pos": "v.",
    "en_def": "to tell secret information",
    "cn_def": "洩漏；透露"
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
  "embroil": {
    "pos": "v.",
    "en_def": "to involve someone in a difficult situation",
    "cn_def": "使捲入（糾紛）"
  },
  "equivocate": {
    "pos": "v.",
    "en_def": "to avoid giving a clear answer",
    "cn_def": "含糊其辭；支吾搪塞"
  },
  "garble": {
    "pos": "v.",
    "en_def": "to mix up a message so it is hard to understand",
    "cn_def": "使混亂不清；曲解"
  },
  "glamorise": {
    "pos": "v.",
    "en_def": "to make something seem more attractive than it really is",
    "cn_def": "美化；使有魅力"
  },
  "hijack": {
    "pos": "v.",
    "en_def": "to take control of something for your own purposes",
    "cn_def": "劫持；挾持（議題）"
  },
  "insinuate": {
    "pos": "v.",
    "en_def": "to suggest something bad in an indirect way",
    "cn_def": "暗示；影射"
  },
  "misconstrue": {
    "pos": "v.",
    "en_def": "to understand something wrongly",
    "cn_def": "誤解；曲解"
  },
  "misrepresent": {
    "pos": "v.",
    "en_def": "to describe someone or something falsely",
    "cn_def": "歪曲；不實地陳述"
  },
  "muddle": {
    "pos": "v.",
    "en_def": "to mix things up and cause confusion",
    "cn_def": "使混亂；弄混"
  },
  "obfuscate": {
    "pos": "v.",
    "en_def": "to make something deliberately unclear",
    "cn_def": "使模糊；混淆"
  },
  "pander": {
    "pos": "v.",
    "en_def": "to give people what they want even if it is wrong",
    "cn_def": "迎合；討好"
  },
  "placate": {
    "pos": "v.",
    "en_def": "to make someone less angry",
    "cn_def": "安撫；平息怒氣"
  },
  "profess": {
    "pos": "v.",
    "en_def": "to claim something, often falsely",
    "cn_def": "聲稱；自稱"
  },
  "relay": {
    "pos": "v.",
    "en_def": "to pass a message from one person to another",
    "cn_def": "轉達；轉播"
  },
  "repudiate": {
    "pos": "v.",
    "en_def": "to say officially that something is not true",
    "cn_def": "駁斥；否認"
  },
  "silence": {
    "pos": "v.",
    "en_def": "to stop someone from speaking or expressing opinions",
    "cn_def": "使沉默；壓制"
  },
  "demonise": {
    "pos": "v.",
    "en_def": "to describe a person or group as evil",
    "cn_def": "妖魔化"
  },
  "vouch": {
    "pos": "v.",
    "en_def": "to say that someone or something is good or true",
    "cn_def": "擔保；保證"
  },
  "whitewash": {
    "pos": "v.",
    "en_def": "to hide mistakes or bad facts",
    "cn_def": "粉飾；掩蓋"
  },
  "recant": {
    "pos": "v.",
    "en_def": "to say publicly that you no longer believe something you said",
    "cn_def": "公開撤回（說法）"
  },
  "defuse": {
    "pos": "v.",
    "en_def": "to make a tense situation calmer",
    "cn_def": "緩和；化解"
  },
  "languish": {
    "pos": "v.",
    "en_def": "to stay in a bad situation for a long time",
    "cn_def": "受困；被冷落"
  },
  "vilify": {
    "pos": "v.",
    "en_def": "to say very bad things about someone, often unfairly",
    "cn_def": "詆毀；中傷"
  },
  "misquote": {
    "pos": "v.",
    "en_def": "to repeat someone's words wrongly",
    "cn_def": "錯誤引用（某人的話）"
  },
  "understate": {
    "pos": "v.",
    "en_def": "to describe something as smaller than it really is",
    "cn_def": "輕描淡寫；少報"
  },
  "enthral": {
    "pos": "v.",
    "en_def": "to hold someone's attention completely",
    "cn_def": "使著迷；迷住"
  },
  "unmask": {
    "pos": "v.",
    "en_def": "to show the truth about someone who was hiding it",
    "cn_def": "揭穿；揭露真面目"
  },
  "quash": {
    "pos": "v.",
    "en_def": "to stop something from continuing",
    "cn_def": "平息；壓制"
  },
  "feign": {
    "pos": "v.",
    "en_def": "to pretend to feel something",
    "cn_def": "假裝"
  },
  "chastise": {
    "pos": "v.",
    "en_def": "to criticise someone strongly",
    "cn_def": "嚴厲斥責"
  },
  "utter": {
    "pos": "v.",
    "en_def": "to say something",
    "cn_def": "說出；發出（聲音）"
  },
  "livestream": {
    "pos": "v.",
    "en_def": "to show video on the internet as it happens",
    "cn_def": "直播"
  },
  "post": {
    "pos": "v.",
    "en_def": "to put a message or picture online",
    "cn_def": "發布；張貼（貼文）"
  },
  "incriminate": {
    "pos": "v.",
    "en_def": "to make someone seem guilty",
    "cn_def": "使顯得有罪；牽連"
  },
  "lambast": {
    "pos": "v.",
    "en_def": "to criticise someone very strongly",
    "cn_def": "嚴厲抨擊"
  },
  "pacify": {
    "pos": "v.",
    "en_def": "to make someone calm",
    "cn_def": "使平靜；安撫"
  },
  "eschew": {
    "pos": "v.",
    "en_def": "to avoid something on purpose",
    "cn_def": "刻意避開；避免"
  },
  "summon": {
    "pos": "v.",
    "en_def": "to officially order someone to come",
    "cn_def": "傳喚；召集"
  },
  "ramble": {
    "pos": "v.",
    "en_def": "to talk for a long time in a confused way",
    "cn_def": "漫無邊際地閒扯"
  },
  "exonerate": {
    "pos": "v.",
    "en_def": "to show officially that someone is not guilty",
    "cn_def": "證明無罪；洗清罪名"
  },
  "infiltrate": {
    "pos": "v.",
    "en_def": "to secretly join a group to get information",
    "cn_def": "滲透；潛入"
  },
  "broadcast": {
    "pos": "v.",
    "en_def": "to send out a programme on TV or radio",
    "cn_def": "播出；廣播"
  },
  "sabotage": {
    "pos": "v.",
    "en_def": "to damage something on purpose to stop it working",
    "cn_def": "蓄意破壞"
  },
  "woo": {
    "pos": "v.",
    "en_def": "to try to get someone's support",
    "cn_def": "爭取；拉攏"
  },
  "weaponise": {
    "pos": "v.",
    "en_def": "to use something as a way to attack others",
    "cn_def": "將…武器化"
  },
  "stigmatise": {
    "pos": "v.",
    "en_def": "to treat a group of people as shameful",
    "cn_def": "污名化"
  },
  "collude": {
    "pos": "v.",
    "en_def": "to work together secretly to cheat others",
    "cn_def": "勾結；串通"
  },
  "embolden": {
    "pos": "v.",
    "en_def": "to make someone braver or more confident",
    "cn_def": "使大膽；壯膽"
  },
  "unfollow": {
    "pos": "v.",
    "en_def": "to stop seeing someone's posts on social media",
    "cn_def": "取消追蹤"
  },
  "rebuke": {
    "pos": "v.",
    "en_def": "to tell someone sharply that they have done wrong",
    "cn_def": "指責；訓斥"
  },
  "waver": {
    "pos": "v.",
    "en_def": "to be unable to decide; to become less certain",
    "cn_def": "動搖；猶豫不決"
  },
  "conflate": {
    "pos": "v.",
    "en_def": "to wrongly treat two different things as the same",
    "cn_def": "混為一談"
  },
  "malign": {
    "pos": "v.",
    "en_def": "to say unfair and harmful things about someone",
    "cn_def": "中傷；誹謗"
  },
  "overhear": {
    "pos": "v.",
    "en_def": "to hear something by accident",
    "cn_def": "無意中聽到"
  },
  "voice": {
    "pos": "v.",
    "en_def": "to express an opinion or feeling",
    "cn_def": "表達；說出"
  },
  "fact-check": {
    "pos": "v.",
    "en_def": "to make sure that information is correct",
    "cn_def": "查核事實"
  },
  "romanticise": {
    "pos": "v.",
    "en_def": "to make something seem better than it really is",
    "cn_def": "浪漫化；理想化"
  },
  "curate": {
    "pos": "v.",
    "en_def": "to choose and organise items for people to see",
    "cn_def": "策劃；篩選整理"
  },
  "reverberate": {
    "pos": "v.",
    "en_def": "to have a strong effect that continues for a long time",
    "cn_def": "產生持續影響；迴響"
  },
  "delude": {
    "pos": "v.",
    "en_def": "to make someone believe something that is not true",
    "cn_def": "欺騙；使誤信"
  },
  "capitulate": {
    "pos": "v.",
    "en_def": "to stop resisting and agree to something",
    "cn_def": "屈服；讓步"
  },
  "trivialise": {
    "pos": "v.",
    "en_def": "to make something serious seem unimportant",
    "cn_def": "輕忽；使顯得瑣碎"
  },
  "insist": {
    "pos": "v.",
    "en_def": "to say firmly that something is true or must happen",
    "cn_def": "堅持；堅稱"
  }
};

const EXTRA_GLOSSES = {};
