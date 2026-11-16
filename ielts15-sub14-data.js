// Topic 15 Subunit 14 Quiz Data: Academic Words 學術單字 7 (intersperse – mellifluous)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T15 S14 - Academic Words 學術單字 7 (intersperse – mellifluous)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "intersperse",
    "pos": "v.",
    "cn_def": "點綴；散布",
    "en_def": "to put things here and there among other things",
    "sentence": "The speaker {{BLANK}} her talk with funny stories, so the audience stayed interested for the whole hour.",
    "cn": "講者在演講中穿插好笑的故事，所以觀眾整整一小時都保持興趣。"
  },
  {
    "word": "liaise",
    "pos": "v.",
    "cn_def": "聯絡；協調",
    "en_def": "to work with and share information with others",
    "sentence": "The translator will {{BLANK}} with the Japanese team, so our manager does not need to send emails in Japanese.",
    "cn": "譯者將與日本團隊聯絡協調，所以我們經理不需要用日文寄電子郵件。"
  },
  {
    "word": "mollify",
    "pos": "v.",
    "cn_def": "平息；安撫",
    "en_def": "to make someone less angry",
    "sentence": "The waiter tried to {{BLANK}} the angry customer with a free dessert, and he apologised in careful English.",
    "cn": "服務生試著用一份免費甜點安撫那位生氣的顧客，並用謹慎的英文道歉。"
  },
  {
    "word": "obviate",
    "pos": "v.",
    "cn_def": "免除；使不必要",
    "en_def": "to remove the need for something",
    "sentence": "Clear instructions {{BLANK}} the need for long explanations, so the workers can start the task right away.",
    "cn": "清楚的說明能免除冗長解釋的需要，所以工人能立刻開始工作。"
  },
  {
    "word": "promulgate",
    "pos": "v.",
    "cn_def": "頒布；宣傳推廣",
    "en_def": "to make an idea or law widely known",
    "sentence": "The ministry {{BLANK}} a new spelling guide for schools, and teachers had to learn the changes over the summer.",
    "cn": "教育部頒布了一份新的學校拼寫指南，而老師們必須在暑假學會這些改變。"
  },
  {
    "word": "prevaricate",
    "pos": "v.",
    "cn_def": "支吾搪塞",
    "en_def": "to avoid giving a direct answer",
    "sentence": "When the reporter asked about the error, the spokesman began to {{BLANK}}, so everyone suspected he was hiding something.",
    "cn": "當記者問到那個錯誤時，發言人開始支吾其詞，所以大家懷疑他在隱瞞什麼。"
  },
  {
    "word": "transpose",
    "pos": "v.",
    "cn_def": "調換；移調",
    "en_def": "to change the order or position of things",
    "sentence": "Learners sometimes {{BLANK}} two letters when they type quickly, so \"form\" and \"from\" are a common mix-up.",
    "cn": "學習者打字很快時有時會把兩個字母對調，所以「form」和「from」是常見的混淆。"
  },
  {
    "word": "vacillate",
    "pos": "v.",
    "cn_def": "猶豫不決；搖擺不定",
    "en_def": "to keep changing your mind",
    "sentence": "I {{BLANK}} between studying Spanish and Japanese for months, but in the end I chose Japanese because of anime.",
    "cn": "我在學西班牙文和日文之間搖擺不定好幾個月，但最後因為動漫選了日文。"
  },
  {
    "word": "vex",
    "pos": "v.",
    "cn_def": "使煩惱；使惱火",
    "en_def": "to annoy or worry someone",
    "sentence": "English spelling continues to {{BLANK}} students, because so many words are not written the way they sound.",
    "cn": "英文拼字持續困擾學生，因為許多字的寫法和發音不一樣。"
  },
  {
    "word": "antagonise",
    "pos": "v.",
    "cn_def": "激怒；使對立",
    "en_def": "to make someone angry or unfriendly",
    "sentence": "Try not to {{BLANK}} your teammates by correcting their English in front of everyone, because it can be embarrassing.",
    "cn": "試著不要在大家面前糾正隊友的英文而激怒他們，因為那可能令人難堪。"
  },
  {
    "word": "atone",
    "pos": "v.",
    "cn_def": "贖罪；彌補",
    "en_def": "to do something to make up for a wrong",
    "sentence": "He wanted to {{BLANK}} for his rude comments, so he wrote a long apology to his host family in their language.",
    "cn": "他想彌補自己無禮的言論，所以他用寄宿家庭的語言寫了一封長長的道歉信。"
  },
  {
    "word": "circumscribe",
    "pos": "v.",
    "cn_def": "限制",
    "en_def": "to limit something",
    "sentence": "The new rules {{BLANK}} the use of phones during class, but students may still use dictionaries on them.",
    "cn": "新規定限制課堂上使用手機，但學生仍可用手機查字典。"
  },
  {
    "word": "gainsay",
    "pos": "v.",
    "cn_def": "否認；反駁",
    "en_def": "to deny or disagree with something",
    "sentence": "Nobody can {{BLANK}} the value of reading, but many students still prefer watching short videos.",
    "cn": "沒有人能否認閱讀的價值，但許多學生仍偏好看短影片。"
  },
  {
    "word": "rephrase",
    "pos": "v.",
    "cn_def": "換個說法",
    "en_def": "to say something again using different words",
    "sentence": "If the examiner does not understand you, {{BLANK}} your idea in simpler words, and keep talking calmly.",
    "cn": "如果考官聽不懂你的話，就用更簡單的字換個說法，並保持冷靜繼續說。"
  },
  {
    "word": "reword",
    "pos": "v.",
    "cn_def": "改寫措辭",
    "en_def": "to change the words of a text",
    "sentence": "The company had to {{BLANK}} its new advertisement, because the direct translation sounded quite rude to customers in Spanish.",
    "cn": "這家公司必須改寫新廣告的措辭，因為直接翻譯成西班牙文後對顧客來說聽起來相當無禮。"
  },
  {
    "word": "interchangeably",
    "pos": "adv.",
    "cn_def": "可互換地",
    "en_def": "in a way that one can replace the other",
    "sentence": "People often use \"big\" and \"large\" {{BLANK}}, but we say \"a big mistake\" much more often than \"a large mistake\".",
    "cn": "人們常常互換使用「big」和「large」，但我們說「a big mistake」比「a large mistake」頻繁得多。"
  },
  {
    "word": "expressly",
    "pos": "adv.",
    "cn_def": "明確地；特意地",
    "en_def": "clearly and on purpose",
    "sentence": "The exam rules {{BLANK}} say that phones are not allowed, so the student who used one received a zero.",
    "cn": "考試規則明確規定不得使用手機，所以那名使用手機的學生得了零分。"
  },
  {
    "word": "loosely",
    "pos": "adv.",
    "cn_def": "大致地；不嚴格地",
    "en_def": "not exactly",
    "sentence": "The film is {{BLANK}} based on a true story, so many events and characters were changed for the screen.",
    "cn": "這部電影是大致根據真實故事改編的，所以許多事件和角色都為了銀幕而改動。"
  },
  {
    "word": "strictly",
    "pos": "adv.",
    "cn_def": "嚴格地",
    "en_def": "exactly and completely",
    "sentence": "{{BLANK}} speaking, a tomato is a fruit, but most people still put it in salads and call it a vegetable.",
    "cn": "嚴格來說，番茄是一種水果，但大多數人仍然把它放進沙拉並稱它為蔬菜。"
  },
  {
    "word": "clarification",
    "pos": "n.",
    "cn_def": "澄清；說明",
    "en_def": "an explanation that makes something clearer",
    "sentence": "If you don't understand a question in the interview, ask for {{BLANK}}, because guessing may lead to a wrong answer.",
    "cn": "如果你在面試中聽不懂問題，就要求澄清，因為瞎猜可能導致錯誤的回答。"
  },
  {
    "word": "relatable",
    "pos": "adj.",
    "cn_def": "能引起共鳴的",
    "en_def": "easy to understand because it is like your own life",
    "sentence": "The novel's teenage hero is very {{BLANK}}, so young readers in many countries see themselves in her problems.",
    "cn": "這部小說的青少年主角非常能引起共鳴，所以許多國家的年輕讀者都在她的問題中看見自己。"
  },
  {
    "word": "cadence",
    "pos": "n.",
    "cn_def": "抑揚頓挫；語調節奏",
    "en_def": "the rise and fall of the voice when speaking",
    "sentence": "The poet read with a gentle {{BLANK}}, so even listeners who did not know Welsh enjoyed the sound of her words.",
    "cn": "詩人用柔和的抑揚頓挫朗讀，所以即使不懂威爾斯語的聽眾也很享受她話語的聲音。"
  },
  {
    "word": "gesticulate",
    "pos": "v.",
    "cn_def": "比手畫腳",
    "en_def": "to move your hands while talking",
    "sentence": "When we could not find the right words, we {{BLANK}} wildly, and the market seller finally understood that we wanted mangoes.",
    "cn": "當我們找不到適當的字時，就拼命比手畫腳，而市場攤販終於明白我們想要芒果。"
  },
  {
    "word": "loquacious",
    "pos": "adj.",
    "cn_def": "健談的；多話的",
    "en_def": "talking a lot",
    "sentence": "My {{BLANK}} neighbour talks to me in English every morning, so my speaking has improved without any classes.",
    "cn": "我那位健談的鄰居每天早上都和我用英文聊天，所以我沒上任何課口說就進步了。"
  },
  {
    "word": "mellifluous",
    "pos": "adj.",
    "cn_def": "（聲音）甜美流暢的",
    "en_def": "sweet and smooth to hear",
    "sentence": "The radio host has a {{BLANK}} voice, so many listeners say they feel calm while they drive to work.",
    "cn": "那位廣播主持人有著甜美圓潤的嗓音，所以許多聽眾說他們開車上班時感覺很平靜。"
  }
];

const MCQS = [
  {
    "q": "The speaker _____ her talk with funny stories, so the audience stayed interested for the whole hour.",
    "options": [
      "peruse",
      "intersperse",
      "rhyme",
      "accede"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The translator will _____ with the Japanese team, so our manager does not need to send emails in Japanese.",
    "options": [
      "whisper",
      "inculcate",
      "conjugate",
      "liaise"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The waiter tried to _____ the angry customer with a free dessert, and he apologised in careful English.",
    "options": [
      "chat",
      "codify",
      "mollify",
      "edify"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Clear instructions _____ the need for long explanations, so the workers can start the task right away.",
    "options": [
      "obviate",
      "scribble",
      "converse",
      "mispronounce"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The ministry _____ a new spelling guide for schools, and teachers had to learn the changes over the summer.",
    "options": [
      "apprise",
      "promulgate",
      "whisper",
      "demur"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "When the reporter asked about the error, the spokesman began to _____, so everyone suspected he was hiding something.",
    "options": [
      "demur",
      "mumble",
      "imbue",
      "prevaricate"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Learners sometimes _____ two letters when they type quickly, so \"form\" and \"from\" are a common mix-up.",
    "options": [
      "verbalise",
      "imbue",
      "transpose",
      "chat"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "I _____ between studying Spanish and Japanese for months, but in the end I chose Japanese because of anime.",
    "options": [
      "vacillate",
      "conjugate",
      "verbalise",
      "accede"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "English spelling continues to _____ students, because so many words are not written the way they sound.",
    "options": [
      "apprise",
      "self-correct",
      "vex",
      "rhyme"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Try not to _____ your teammates by correcting their English in front of everyone, because it can be embarrassing.",
    "options": [
      "whisper",
      "opine",
      "pronounce",
      "antagonise"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "He wanted to _____ for his rude comments, so he wrote a long apology to his host family in their language.",
    "options": [
      "scribble",
      "atone",
      "verbalise",
      "mistranslate"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The new rules _____ the use of phones during class, but students may still use dictionaries on them.",
    "options": [
      "circumscribe",
      "cajole",
      "opine",
      "dub"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Nobody can _____ the value of reading, but many students still prefer watching short videos.",
    "options": [
      "localise",
      "whisper",
      "opine",
      "gainsay"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "If the examiner does not understand you, _____ your idea in simpler words, and keep talking calmly.",
    "options": [
      "rephrase",
      "mispronounce",
      "transliterate",
      "pronounce"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The company had to _____ its new advertisement, because the direct translation sounded quite rude to customers in Spanish.",
    "options": [
      "self-correct",
      "reword",
      "mistranslate",
      "imbue"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "People often use \"big\" and \"large\" _____, but we say \"a big mistake\" much more often than \"a large mistake\".",
    "options": [
      "loosely",
      "strictly",
      "interchangeably",
      "literally"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The exam rules _____ say that phones are not allowed, so the student who used one received a zero.",
    "options": [
      "expressly",
      "interchangeably",
      "literally",
      "aloud"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The film is _____ based on a true story, so many events and characters were changed for the screen.",
    "options": [
      "literally",
      "strictly",
      "loosely",
      "aloud"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "_____ speaking, a tomato is a fruit, but most people still put it in salads and call it a vegetable.",
    "options": [
      "interchangeably",
      "strictly",
      "aloud",
      "literally"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "If you don't understand a question in the interview, ask for _____, because guessing may lead to a wrong answer.",
    "options": [
      "neologism",
      "punctuation",
      "prefix",
      "clarification"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The novel's teenage hero is very _____, so young readers in many countries see themselves in her problems.",
    "options": [
      "virulent",
      "relatable",
      "whimsical",
      "literate"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The poet read with a gentle _____, so even listeners who did not know Welsh enjoyed the sound of her words.",
    "options": [
      "cognate",
      "sycophant",
      "cadence",
      "phrasebook"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "When we could not find the right words, we _____ wildly, and the market seller finally understood that we wanted mangoes.",
    "options": [
      "chat",
      "imbue",
      "scribble",
      "gesticulate"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "My _____ neighbour talks to me in English every morning, so my speaking has improved without any classes.",
    "options": [
      "loquacious",
      "conversational",
      "incoherent",
      "unassuming"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The radio host has a _____ voice, so many listeners say they feel calm while they drive to work.",
    "options": [
      "vehement",
      "mellifluous",
      "presumptuous",
      "terse"
    ],
    "answer": 1,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "intersperse": {
    "pos": "v.",
    "en_def": "to put things here and there among other things",
    "cn_def": "點綴；散布"
  },
  "liaise": {
    "pos": "v.",
    "en_def": "to work with and share information with others",
    "cn_def": "聯絡；協調"
  },
  "mollify": {
    "pos": "v.",
    "en_def": "to make someone less angry",
    "cn_def": "平息；安撫"
  },
  "obviate": {
    "pos": "v.",
    "en_def": "to remove the need for something",
    "cn_def": "免除；使不必要"
  },
  "promulgate": {
    "pos": "v.",
    "en_def": "to make an idea or law widely known",
    "cn_def": "頒布；宣傳推廣"
  },
  "prevaricate": {
    "pos": "v.",
    "en_def": "to avoid giving a direct answer",
    "cn_def": "支吾搪塞"
  },
  "transpose": {
    "pos": "v.",
    "en_def": "to change the order or position of things",
    "cn_def": "調換；移調"
  },
  "vacillate": {
    "pos": "v.",
    "en_def": "to keep changing your mind",
    "cn_def": "猶豫不決；搖擺不定"
  },
  "vex": {
    "pos": "v.",
    "en_def": "to annoy or worry someone",
    "cn_def": "使煩惱；使惱火"
  },
  "antagonise": {
    "pos": "v.",
    "en_def": "to make someone angry or unfriendly",
    "cn_def": "激怒；使對立"
  },
  "atone": {
    "pos": "v.",
    "en_def": "to do something to make up for a wrong",
    "cn_def": "贖罪；彌補"
  },
  "circumscribe": {
    "pos": "v.",
    "en_def": "to limit something",
    "cn_def": "限制"
  },
  "gainsay": {
    "pos": "v.",
    "en_def": "to deny or disagree with something",
    "cn_def": "否認；反駁"
  },
  "rephrase": {
    "pos": "v.",
    "en_def": "to say something again using different words",
    "cn_def": "換個說法"
  },
  "reword": {
    "pos": "v.",
    "en_def": "to change the words of a text",
    "cn_def": "改寫措辭"
  },
  "interchangeably": {
    "pos": "adv.",
    "en_def": "in a way that one can replace the other",
    "cn_def": "可互換地"
  },
  "expressly": {
    "pos": "adv.",
    "en_def": "clearly and on purpose",
    "cn_def": "明確地；特意地"
  },
  "loosely": {
    "pos": "adv.",
    "en_def": "not exactly",
    "cn_def": "大致地；不嚴格地"
  },
  "strictly": {
    "pos": "adv.",
    "en_def": "exactly and completely",
    "cn_def": "嚴格地"
  },
  "clarification": {
    "pos": "n.",
    "en_def": "an explanation that makes something clearer",
    "cn_def": "澄清；說明"
  },
  "relatable": {
    "pos": "adj.",
    "en_def": "easy to understand because it is like your own life",
    "cn_def": "能引起共鳴的"
  },
  "cadence": {
    "pos": "n.",
    "en_def": "the rise and fall of the voice when speaking",
    "cn_def": "抑揚頓挫；語調節奏"
  },
  "gesticulate": {
    "pos": "v.",
    "en_def": "to move your hands while talking",
    "cn_def": "比手畫腳"
  },
  "loquacious": {
    "pos": "adj.",
    "en_def": "talking a lot",
    "cn_def": "健談的；多話的"
  },
  "mellifluous": {
    "pos": "adj.",
    "en_def": "sweet and smooth to hear",
    "cn_def": "（聲音）甜美流暢的"
  },
  "peruse": {
    "pos": "v.",
    "en_def": "to read something carefully",
    "cn_def": "細讀；仔細閱讀"
  },
  "rhyme": {
    "pos": "v.",
    "en_def": "to have the same ending sound",
    "cn_def": "押韻"
  },
  "accede": {
    "pos": "v.",
    "en_def": "to agree to a request",
    "cn_def": "同意；應允"
  },
  "whisper": {
    "pos": "v.",
    "en_def": "to speak very softly using your breath",
    "cn_def": "低聲說；耳語"
  },
  "inculcate": {
    "pos": "v.",
    "en_def": "to teach an idea by repeating it often",
    "cn_def": "反覆灌輸"
  },
  "conjugate": {
    "pos": "v.",
    "en_def": "to list or change the forms of a verb",
    "cn_def": "（動詞）變化詞形"
  },
  "chat": {
    "pos": "v.",
    "en_def": "to talk in a friendly, informal way",
    "cn_def": "聊天"
  },
  "codify": {
    "pos": "v.",
    "en_def": "to arrange rules into a written system",
    "cn_def": "編纂；系統化"
  },
  "edify": {
    "pos": "v.",
    "en_def": "to teach someone in a way that improves their mind",
    "cn_def": "啟發；教誨"
  },
  "scribble": {
    "pos": "v.",
    "en_def": "to write something quickly and carelessly",
    "cn_def": "潦草地寫"
  },
  "converse": {
    "pos": "v.",
    "en_def": "to have a conversation",
    "cn_def": "交談"
  },
  "mispronounce": {
    "pos": "v.",
    "en_def": "to say a word wrongly",
    "cn_def": "發錯音"
  },
  "apprise": {
    "pos": "v.",
    "en_def": "to inform someone",
    "cn_def": "告知；通知"
  },
  "demur": {
    "pos": "v.",
    "en_def": "to show you don't agree",
    "cn_def": "表示異議；猶豫"
  },
  "mumble": {
    "pos": "v.",
    "en_def": "to speak quietly and unclearly",
    "cn_def": "含糊地說"
  },
  "imbue": {
    "pos": "v.",
    "en_def": "to fill with a feeling or quality",
    "cn_def": "使充滿；灌輸"
  },
  "verbalise": {
    "pos": "v.",
    "en_def": "to express ideas or feelings in words",
    "cn_def": "用言語表達"
  },
  "self-correct": {
    "pos": "v.",
    "en_def": "to notice and fix your own mistakes",
    "cn_def": "自我修正"
  },
  "opine": {
    "pos": "v.",
    "en_def": "to give your opinion",
    "cn_def": "發表意見"
  },
  "pronounce": {
    "pos": "v.",
    "en_def": "to make the sound of a word",
    "cn_def": "發音"
  },
  "mistranslate": {
    "pos": "v.",
    "en_def": "to translate something wrongly",
    "cn_def": "誤譯；翻錯"
  },
  "cajole": {
    "pos": "v.",
    "en_def": "to persuade someone with gentle words",
    "cn_def": "哄騙；勸誘"
  },
  "dub": {
    "pos": "v.",
    "en_def": "to replace the voices in a film with another language",
    "cn_def": "配音"
  },
  "localise": {
    "pos": "v.",
    "en_def": "to change a product to suit a local market and language",
    "cn_def": "在地化"
  },
  "transliterate": {
    "pos": "v.",
    "en_def": "to write words using the letters of another alphabet",
    "cn_def": "音譯；轉寫"
  },
  "literally": {
    "pos": "adv.",
    "en_def": "in the exact, basic meaning of the words",
    "cn_def": "照字面地；真正地"
  },
  "aloud": {
    "pos": "adv.",
    "en_def": "in a voice that others can hear",
    "cn_def": "出聲地；大聲地"
  },
  "neologism": {
    "pos": "n.",
    "en_def": "a newly invented word",
    "cn_def": "新造詞"
  },
  "punctuation": {
    "pos": "n.",
    "en_def": "marks like commas and full stops used in writing",
    "cn_def": "標點符號"
  },
  "prefix": {
    "pos": "n.",
    "en_def": "letters added to the start of a word to change its meaning",
    "cn_def": "字首"
  },
  "virulent": {
    "pos": "adj.",
    "en_def": "extremely strong, harmful or full of hate",
    "cn_def": "猛烈的；惡毒的"
  },
  "whimsical": {
    "pos": "adj.",
    "en_def": "playful and unusual",
    "cn_def": "異想天開的；古怪有趣的"
  },
  "literate": {
    "pos": "adj.",
    "en_def": "able to read and write",
    "cn_def": "識字的"
  },
  "cognate": {
    "pos": "n.",
    "en_def": "a word that has the same origin as a word in another language",
    "cn_def": "同源字"
  },
  "sycophant": {
    "pos": "n.",
    "en_def": "a person who praises powerful people to get advantages",
    "cn_def": "諂媚者；馬屁精"
  },
  "phrasebook": {
    "pos": "n.",
    "en_def": "a small book of useful phrases for travellers",
    "cn_def": "常用語手冊"
  },
  "conversational": {
    "pos": "adj.",
    "en_def": "suitable for everyday talking",
    "cn_def": "會話的；日常交談的"
  },
  "incoherent": {
    "pos": "adj.",
    "en_def": "not clear or easy to understand",
    "cn_def": "語無倫次的；不連貫的"
  },
  "unassuming": {
    "pos": "adj.",
    "en_def": "modest and not wanting attention",
    "cn_def": "謙遜的；不張揚的"
  },
  "vehement": {
    "pos": "adj.",
    "en_def": "showing strong feeling",
    "cn_def": "激烈的；強烈的"
  },
  "presumptuous": {
    "pos": "adj.",
    "en_def": "doing something without the right or permission",
    "cn_def": "冒昧的；放肆的"
  },
  "terse": {
    "pos": "adj.",
    "en_def": "very short and a little unfriendly",
    "cn_def": "簡短生硬的"
  }
};

const EXTRA_GLOSSES = {};
