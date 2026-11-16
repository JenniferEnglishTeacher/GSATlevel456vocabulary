// Topic 15 Subunit 6 Quiz Data: Translation & Interpreting 翻譯與口譯
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T15 S06 - Translation & Interpreting 翻譯與口譯",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "translator",
    "pos": "n.",
    "cn_def": "譯者；翻譯者",
    "en_def": "a person who changes written text into another language",
    "sentence": "The {{BLANK}} spent two years on the Harry Potter books, because she wanted every joke and name to work in Chinese.",
    "cn": "這位譯者花了兩年翻譯哈利波特系列，因為她希望每個笑話和名字在中文裡都行得通。"
  },
  {
    "word": "translation",
    "pos": "n.",
    "cn_def": "翻譯；譯文",
    "en_def": "text or speech changed into another language",
    "sentence": "I read the novel in English and then in {{BLANK}}, and I noticed that some funny lines lost their humour.",
    "cn": "我先讀了這本小說的英文版，接著讀了譯本，而我注意到有些好笑的句子失去了幽默感。"
  },
  {
    "word": "interpreter",
    "pos": "n.",
    "cn_def": "口譯員",
    "en_def": "a person who changes spoken words into another language",
    "sentence": "The president spoke in French, so an {{BLANK}} stood beside him and repeated everything in English for the audience.",
    "cn": "總統用法文演講，所以一位口譯員站在他身旁，為觀眾把所有內容用英文重述一遍。"
  },
  {
    "word": "source language",
    "pos": "n.phr.",
    "cn_def": "來源語言",
    "en_def": "the language that you translate from",
    "sentence": "When I translate a menu, Chinese is the {{BLANK}}, and English is the language I translate into.",
    "cn": "當我翻譯菜單時，中文是來源語言，而英文是我翻譯成的語言。"
  },
  {
    "word": "source text",
    "pos": "n.phr.",
    "cn_def": "原文",
    "en_def": "the original text that is being translated",
    "sentence": "A good translator reads the whole {{BLANK}} first, because the meaning of the beginning may depend on the ending.",
    "cn": "好的譯者會先讀完整篇原文，因為開頭的意思可能取決於結尾。"
  },
  {
    "word": "mistranslate",
    "pos": "v.",
    "cn_def": "誤譯；翻錯",
    "en_def": "to translate something wrongly",
    "sentence": "The sign {{BLANK}} \"slippery floor\" as \"carefully slide\", so tourists took funny photos, but nobody understood the warning.",
    "cn": "那個標誌把「地板濕滑」翻錯成「小心地滑」，所以觀光客拍了好笑的照片，但沒人看懂這個警告。"
  },
  {
    "word": "machine translation",
    "pos": "n.phr.",
    "cn_def": "機器翻譯",
    "en_def": "translation done by a computer",
    "sentence": "{{BLANK}} is fast and free, but it can still make strange mistakes with idioms and jokes.",
    "cn": "機器翻譯又快又免費，但它在慣用語和笑話上仍可能犯奇怪的錯誤。"
  },
  {
    "word": "simultaneous interpreting",
    "pos": "n.phr.",
    "cn_def": "同步口譯",
    "en_def": "interpreting while the speaker is still talking",
    "sentence": "{{BLANK}} is very tiring, so interpreters at the United Nations usually change places every thirty minutes.",
    "cn": "同步口譯非常累人，所以聯合國的口譯員通常每三十分鐘換一次班。"
  },
  {
    "word": "consecutive interpreting",
    "pos": "n.phr.",
    "cn_def": "逐步口譯",
    "en_def": "interpreting after the speaker stops for a moment",
    "sentence": "In {{BLANK}} the speaker pauses after a few sentences, and then the interpreter repeats the message in the other language.",
    "cn": "在逐步口譯中，講者說幾句後會停頓，然後口譯員用另一種語言重述訊息。"
  },
  {
    "word": "dub",
    "pos": "v.",
    "cn_def": "配音",
    "en_def": "to replace the voices in a film with another language",
    "sentence": "Many cartoons are {{BLANK}} into Mandarin for young children, because they cannot read subtitles fast enough.",
    "cn": "許多卡通會配上國語給幼兒看，因為他們讀字幕的速度不夠快。"
  },
  {
    "word": "localise",
    "pos": "v.",
    "cn_def": "在地化",
    "en_def": "to change a product to suit a local market and language",
    "sentence": "The company had to {{BLANK}} its game for Taiwan, so it changed the jokes and added local foods to the story.",
    "cn": "這家公司必須為台灣把遊戲在地化，所以它改了笑話，並在故事中加入了當地食物。"
  },
  {
    "word": "subtitling",
    "pos": "n.",
    "cn_def": "字幕翻譯",
    "en_def": "the work of adding translated words at the bottom of a screen",
    "sentence": "{{BLANK}} is harder than it looks, because translators must fit each line into the screen while people are still speaking.",
    "cn": "字幕翻譯比看起來難，因為譯者必須在人物仍在說話時把每一行塞進螢幕裡。"
  },
  {
    "word": "literal translation",
    "pos": "n.phr.",
    "cn_def": "直譯",
    "en_def": "a translation that follows the words exactly",
    "sentence": "A {{BLANK}} of \"break a leg\" sounds terrible in Chinese, but the phrase actually means \"good luck\" to actors.",
    "cn": "「break a leg」的直譯在中文裡聽起來很可怕，但這個片語對演員來說其實是「祝好運」的意思。"
  },
  {
    "word": "free translation",
    "pos": "n.phr.",
    "cn_def": "意譯",
    "en_def": "a translation that keeps the meaning but changes the words",
    "sentence": "The poet chose a {{BLANK}}, because keeping the rhyme and feeling was more important to her than copying every word.",
    "cn": "這位詩人選擇了意譯，因為對她來說保留押韻和情感比照抄每個字更重要。"
  },
  {
    "word": "back-translation",
    "pos": "n.",
    "cn_def": "回譯",
    "en_def": "translating a text back into its first language to check it",
    "sentence": "The medical team used {{BLANK}} to check the survey, so a second translator turned the Chinese version back into English.",
    "cn": "醫療團隊用回譯來檢查問卷，所以由第二位譯者把中文版翻回英文。"
  },
  {
    "word": "faithful",
    "pos": "adj.",
    "cn_def": "忠實的",
    "en_def": "keeping close to the original meaning",
    "sentence": "Her translation is {{BLANK}} to the original novel, but it also reads naturally, which is why it won an award.",
    "cn": "她的譯文忠於原著小說，但讀起來也很自然，這就是它得獎的原因。"
  },
  {
    "word": "untranslatable",
    "pos": "adj.",
    "cn_def": "無法翻譯的",
    "en_def": "impossible to translate exactly",
    "sentence": "The Danish word \"hygge\" is often called {{BLANK}}, because no single English word captures that cosy, happy feeling.",
    "cn": "丹麥字「hygge」常被稱為無法翻譯的，因為沒有一個英文字能抓住那種溫馨、快樂的感覺。"
  },
  {
    "word": "gloss",
    "pos": "n.",
    "cn_def": "注釋；註解",
    "en_def": "a short explanation of a difficult word in a text",
    "sentence": "The textbook gives a Chinese {{BLANK}} beside each difficult word, so students can keep reading without opening a dictionary.",
    "cn": "課本在每個難字旁邊都附上中文註解，所以學生不用翻字典就能繼續讀下去。"
  },
  {
    "word": "footnote",
    "pos": "n.",
    "cn_def": "註腳",
    "en_def": "a note at the bottom of a page",
    "sentence": "The translator added a {{BLANK}} to explain the Chinese joke, because English readers would not understand it otherwise.",
    "cn": "譯者加了一個註腳來解釋這個中文笑話，因為否則英文讀者不會懂。"
  },
  {
    "word": "interpreter booth",
    "pos": "n.phr.",
    "cn_def": "口譯廂",
    "en_def": "a small soundproof room where interpreters work",
    "sentence": "The two interpreters sat in a glass {{BLANK}} at the back of the hall, and they could see every speaker clearly.",
    "cn": "兩位口譯員坐在大廳後方的玻璃口譯廂裡，而他們能清楚看到每位講者。"
  },
  {
    "word": "earpiece",
    "pos": "n.",
    "cn_def": "耳機",
    "en_def": "a small device worn in the ear to hear sound",
    "sentence": "Each delegate wore an {{BLANK}} during the meeting, so they could hear the speech in their own language.",
    "cn": "每位代表在會議中都戴著耳機，所以他們能聽到用自己語言播出的演講。"
  },
  {
    "word": "sight translation",
    "pos": "n.phr.",
    "cn_def": "視譯",
    "en_def": "reading a document in one language aloud in another",
    "sentence": "The court interpreter did a {{BLANK}} of the letter, so she read the Vietnamese text aloud in Chinese for the judge.",
    "cn": "法庭口譯員對那封信做了視譯，所以她把越南文內容直接用中文唸給法官聽。"
  },
  {
    "word": "court interpreter",
    "pos": "n.phr.",
    "cn_def": "法庭口譯員",
    "en_def": "an interpreter who works in courtrooms",
    "sentence": "The {{BLANK}} must translate every word exactly, because a small mistake could change the result of a trial.",
    "cn": "法庭口譯員必須精確翻譯每一個字，因為一個小錯誤就可能改變審判的結果。"
  },
  {
    "word": "speech-to-text",
    "pos": "adj.",
    "cn_def": "語音轉文字的",
    "en_def": "changing spoken words into written words automatically",
    "sentence": "The teacher uses a {{BLANK}} app in class, so deaf students can read her words on their tablets as she speaks.",
    "cn": "老師在課堂上使用語音轉文字的應用程式，所以聽障學生能在她說話時從平板上讀到她的話。"
  },
  {
    "word": "translation app",
    "pos": "n.phr.",
    "cn_def": "翻譯應用程式",
    "en_def": "a phone program that translates words or speech",
    "sentence": "We used a {{BLANK}} to read the menu in Seoul, but it translated one dish as \"angry chicken\", which made us laugh.",
    "cn": "我們在首爾用翻譯應用程式看菜單，但它把一道菜翻成「生氣的雞」，讓我們笑了出來。"
  },
  {
    "word": "neural machine translation",
    "pos": "n.phr.",
    "cn_def": "神經機器翻譯",
    "en_def": "computer translation that uses AI networks to learn from data",
    "sentence": "{{BLANK}} produces smoother sentences than older systems, because it looks at whole sentences instead of single words.",
    "cn": "神經機器翻譯產生的句子比舊系統更流暢，因為它看的是整個句子而不是單一的字。"
  },
  {
    "word": "post-editing",
    "pos": "n.",
    "cn_def": "譯後編輯",
    "en_def": "fixing a machine translation by a human",
    "sentence": "Many translators now do {{BLANK}}, so they check and correct AI translations instead of starting from a blank page.",
    "cn": "許多譯者現在做譯後編輯，所以他們檢查和修正 AI 的翻譯，而不是從一張白紙開始。"
  },
  {
    "word": "language pair",
    "pos": "n.phr.",
    "cn_def": "語言對",
    "en_def": "the two languages a translator works between",
    "sentence": "Her main {{BLANK}} is Japanese to Chinese, but she also accepts some simple English projects.",
    "cn": "她主要的語言對是日譯中，但她也接一些簡單的英文案子。"
  },
  {
    "word": "voice-over",
    "pos": "n.",
    "cn_def": "旁白；畫外音",
    "en_def": "a voice heard in a film or video without seeing the speaker",
    "sentence": "The documentary had a Chinese {{BLANK}}, so we could understand the story while we watched the animals in Africa.",
    "cn": "這部紀錄片有中文旁白，所以我們能一邊看非洲的動物，一邊了解故事內容。"
  },
  {
    "word": "speech translation",
    "pos": "n.phr.",
    "cn_def": "語音翻譯",
    "en_def": "technology that translates spoken language aloud",
    "sentence": "New earbuds offer instant {{BLANK}}, so two travellers can talk to each other even if they share no language.",
    "cn": "新型耳機提供即時語音翻譯，所以即使兩位旅客沒有共通語言，也能彼此交談。"
  }
];

const MCQS = [
  {
    "q": "The _____ spent two years on the Harry Potter books, because she wanted every joke and name to work in Chinese.",
    "options": [
      "translator",
      "duplicity",
      "antonym",
      "candour"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "I read the novel in English and then in _____, and I noticed that some funny lines lost their humour.",
    "options": [
      "accessibility",
      "usage",
      "greeting",
      "translation"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The president spoke in French, so an _____ stood beside him and repeated everything in English for the audience.",
    "options": [
      "pragmatics",
      "interpreter",
      "syllable",
      "eulogy"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "When I translate a menu, Chinese is the _____, and English is the language I translate into.",
    "options": [
      "language barrier",
      "constructed language",
      "source language",
      "speech recognition"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "A good translator reads the whole _____ first, because the meaning of the beginning may depend on the ending.",
    "options": [
      "source text",
      "crash course",
      "vocal cords",
      "language planning"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The sign _____ \"slippery floor\" as \"carefully slide\", so tourists took funny photos, but nobody understood the warning.",
    "options": [
      "mispronounce",
      "mistranslate",
      "liaise",
      "cajole"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "_____ is fast and free, but it can still make strange mistakes with idioms and jokes.",
    "options": [
      "quotation marks",
      "linguistic diversity",
      "sentence structure",
      "machine translation"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "_____ is very tiring, so interpreters at the United Nations usually change places every thirty minutes.",
    "options": [
      "language learner",
      "language revival",
      "simultaneous interpreting",
      "phonetic alphabet"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "In _____ the speaker pauses after a few sentences, and then the interpreter repeats the message in the other language.",
    "options": [
      "consecutive interpreting",
      "official language",
      "language exchange",
      "lingua franca"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Many cartoons are _____ into Mandarin for young children, because they cannot read subtitles fast enough.",
    "options": [
      "opine",
      "promulgate",
      "cajole",
      "dub"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The company had to _____ its game for Taiwan, so it changed the jokes and added local foods to the story.",
    "options": [
      "mumble",
      "misspell",
      "localise",
      "rhyme"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "_____ is harder than it looks, because translators must fit each line into the screen while people are still speaking.",
    "options": [
      "creole",
      "subtitling",
      "vernacular",
      "collocation"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "A _____ of \"break a leg\" sounds terrible in Chinese, but the phrase actually means \"good luck\" to actors.",
    "options": [
      "language planning",
      "language partner",
      "quotation marks",
      "literal translation"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The poet chose a _____, because keeping the rhyme and feeling was more important to her than copying every word.",
    "options": [
      "free translation",
      "official language",
      "speech therapist",
      "language contact"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The medical team used _____ to check the survey, so a second translator turned the Chinese version back into English.",
    "options": [
      "epiphany",
      "back-translation",
      "eulogy",
      "advocacy"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Her translation is _____ to the original novel, but it also reads naturally, which is why it won an award.",
    "options": [
      "vapid",
      "trenchant",
      "faithful",
      "conversational"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The Danish word \"hygge\" is often called _____, because no single English word captures that cosy, happy feeling.",
    "options": [
      "untranslatable",
      "whimsical",
      "malevolent",
      "flippant"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The textbook gives a Chinese _____ beside each difficult word, so students can keep reading without opening a dictionary.",
    "options": [
      "attribution",
      "calligraphy",
      "spell-checker",
      "gloss"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The translator added a _____ to explain the Chinese joke, because English readers would not understand it otherwise.",
    "options": [
      "romanisation",
      "footnote",
      "honorific",
      "proto-language"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The two interpreters sat in a glass _____ at the back of the hall, and they could see every speaker clearly.",
    "options": [
      "question mark",
      "full stop",
      "interpreter booth",
      "language policy"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Each delegate wore an _____ during the meeting, so they could hear the speech in their own language.",
    "options": [
      "comma",
      "synonym",
      "prefix",
      "earpiece"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The court interpreter did a _____ of the letter, so she read the Vietnamese text aloud in Chinese for the judge.",
    "options": [
      "question mark",
      "language rights",
      "sight translation",
      "language learner"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The _____ must translate every word exactly, because a small mistake could change the result of a trial.",
    "options": [
      "last speaker",
      "court interpreter",
      "target language",
      "global English"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The teacher uses a _____ app in class, so deaf students can read her words on their tablets as she speaks.",
    "options": [
      "speech-to-text",
      "unabashed",
      "presumptuous",
      "whimsical"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "We used a _____ to read the menu in Seoul, but it translated one dish as \"angry chicken\", which made us laugh.",
    "options": [
      "sentence structure",
      "translation app",
      "the gift of the gab",
      "question mark"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "_____ produces smoother sentences than older systems, because it looks at whole sentences instead of single words.",
    "options": [
      "neural machine translation",
      "language rights",
      "listening comprehension",
      "speaking test"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Many translators now do _____, so they check and correct AI translations instead of starting from a blank page.",
    "options": [
      "plural",
      "oxymoron",
      "quip",
      "post-editing"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Her main _____ is Japanese to Chinese, but she also accepts some simple English projects.",
    "options": [
      "speech community",
      "language shift",
      "language pair",
      "phrasal verb"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The documentary had a Chinese _____, so we could understand the story while we watched the animals in Africa.",
    "options": [
      "lisp",
      "voice-over",
      "dialect",
      "compendium"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "New earbuds offer instant _____, so two travellers can talk to each other even if they share no language.",
    "options": [
      "speech translation",
      "language revival",
      "language barrier",
      "lingua franca"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "translator": {
    "pos": "n.",
    "en_def": "a person who changes written text into another language",
    "cn_def": "譯者；翻譯者"
  },
  "translation": {
    "pos": "n.",
    "en_def": "text or speech changed into another language",
    "cn_def": "翻譯；譯文"
  },
  "interpreter": {
    "pos": "n.",
    "en_def": "a person who changes spoken words into another language",
    "cn_def": "口譯員"
  },
  "source language": {
    "pos": "n.phr.",
    "en_def": "the language that you translate from",
    "cn_def": "來源語言"
  },
  "source text": {
    "pos": "n.phr.",
    "en_def": "the original text that is being translated",
    "cn_def": "原文"
  },
  "mistranslate": {
    "pos": "v.",
    "en_def": "to translate something wrongly",
    "cn_def": "誤譯；翻錯"
  },
  "machine translation": {
    "pos": "n.phr.",
    "en_def": "translation done by a computer",
    "cn_def": "機器翻譯"
  },
  "simultaneous interpreting": {
    "pos": "n.phr.",
    "en_def": "interpreting while the speaker is still talking",
    "cn_def": "同步口譯"
  },
  "consecutive interpreting": {
    "pos": "n.phr.",
    "en_def": "interpreting after the speaker stops for a moment",
    "cn_def": "逐步口譯"
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
  "subtitling": {
    "pos": "n.",
    "en_def": "the work of adding translated words at the bottom of a screen",
    "cn_def": "字幕翻譯"
  },
  "literal translation": {
    "pos": "n.phr.",
    "en_def": "a translation that follows the words exactly",
    "cn_def": "直譯"
  },
  "free translation": {
    "pos": "n.phr.",
    "en_def": "a translation that keeps the meaning but changes the words",
    "cn_def": "意譯"
  },
  "back-translation": {
    "pos": "n.",
    "en_def": "translating a text back into its first language to check it",
    "cn_def": "回譯"
  },
  "faithful": {
    "pos": "adj.",
    "en_def": "keeping close to the original meaning",
    "cn_def": "忠實的"
  },
  "untranslatable": {
    "pos": "adj.",
    "en_def": "impossible to translate exactly",
    "cn_def": "無法翻譯的"
  },
  "gloss": {
    "pos": "n.",
    "en_def": "a short explanation of a difficult word in a text",
    "cn_def": "注釋；註解"
  },
  "footnote": {
    "pos": "n.",
    "en_def": "a note at the bottom of a page",
    "cn_def": "註腳"
  },
  "interpreter booth": {
    "pos": "n.phr.",
    "en_def": "a small soundproof room where interpreters work",
    "cn_def": "口譯廂"
  },
  "earpiece": {
    "pos": "n.",
    "en_def": "a small device worn in the ear to hear sound",
    "cn_def": "耳機"
  },
  "sight translation": {
    "pos": "n.phr.",
    "en_def": "reading a document in one language aloud in another",
    "cn_def": "視譯"
  },
  "court interpreter": {
    "pos": "n.phr.",
    "en_def": "an interpreter who works in courtrooms",
    "cn_def": "法庭口譯員"
  },
  "speech-to-text": {
    "pos": "adj.",
    "en_def": "changing spoken words into written words automatically",
    "cn_def": "語音轉文字的"
  },
  "translation app": {
    "pos": "n.phr.",
    "en_def": "a phone program that translates words or speech",
    "cn_def": "翻譯應用程式"
  },
  "neural machine translation": {
    "pos": "n.phr.",
    "en_def": "computer translation that uses AI networks to learn from data",
    "cn_def": "神經機器翻譯"
  },
  "post-editing": {
    "pos": "n.",
    "en_def": "fixing a machine translation by a human",
    "cn_def": "譯後編輯"
  },
  "language pair": {
    "pos": "n.phr.",
    "en_def": "the two languages a translator works between",
    "cn_def": "語言對"
  },
  "voice-over": {
    "pos": "n.",
    "en_def": "a voice heard in a film or video without seeing the speaker",
    "cn_def": "旁白；畫外音"
  },
  "speech translation": {
    "pos": "n.phr.",
    "en_def": "technology that translates spoken language aloud",
    "cn_def": "語音翻譯"
  },
  "duplicity": {
    "pos": "n.",
    "en_def": "dishonest behaviour meant to trick people",
    "cn_def": "欺騙；口是心非"
  },
  "antonym": {
    "pos": "n.",
    "en_def": "a word with the opposite meaning",
    "cn_def": "反義字"
  },
  "candour": {
    "pos": "n.",
    "en_def": "honest and open speech",
    "cn_def": "坦率；直言"
  },
  "accessibility": {
    "pos": "n.",
    "en_def": "how easy something is to reach, use or understand",
    "cn_def": "可及性；易用性"
  },
  "usage": {
    "pos": "n.",
    "en_def": "the way words are normally used",
    "cn_def": "用法"
  },
  "greeting": {
    "pos": "n.",
    "en_def": "words you say when you meet someone",
    "cn_def": "問候語；打招呼"
  },
  "pragmatics": {
    "pos": "n.",
    "en_def": "the study of how context changes what we mean",
    "cn_def": "語用學"
  },
  "syllable": {
    "pos": "n.",
    "en_def": "a part of a word with one vowel sound",
    "cn_def": "音節"
  },
  "eulogy": {
    "pos": "n.",
    "en_def": "a speech praising someone who has died",
    "cn_def": "悼詞"
  },
  "language barrier": {
    "pos": "n.phr.",
    "en_def": "a problem in communication caused by different languages",
    "cn_def": "語言障礙"
  },
  "constructed language": {
    "pos": "n.phr.",
    "en_def": "a language that someone designed on purpose",
    "cn_def": "人造語言"
  },
  "speech recognition": {
    "pos": "n.phr.",
    "en_def": "technology that changes spoken words into text",
    "cn_def": "語音辨識"
  },
  "crash course": {
    "pos": "n.phr.",
    "en_def": "a short, fast course that teaches the basics",
    "cn_def": "速成課程"
  },
  "vocal cords": {
    "pos": "n.phr.",
    "en_def": "parts in your throat that make the sound of your voice",
    "cn_def": "聲帶"
  },
  "language planning": {
    "pos": "n.phr.",
    "en_def": "deliberate efforts to manage how languages are used",
    "cn_def": "語言規劃"
  },
  "mispronounce": {
    "pos": "v.",
    "en_def": "to say a word wrongly",
    "cn_def": "發錯音"
  },
  "liaise": {
    "pos": "v.",
    "en_def": "to work with and share information with others",
    "cn_def": "聯絡；協調"
  },
  "cajole": {
    "pos": "v.",
    "en_def": "to persuade someone with gentle words",
    "cn_def": "哄騙；勸誘"
  },
  "quotation marks": {
    "pos": "n.phr.",
    "en_def": "the marks (\" \") used around someone's exact words",
    "cn_def": "引號"
  },
  "linguistic diversity": {
    "pos": "n.phr.",
    "en_def": "the variety of different languages in a place",
    "cn_def": "語言多樣性"
  },
  "sentence structure": {
    "pos": "n.phr.",
    "en_def": "the way words are put together to form a sentence",
    "cn_def": "句子結構"
  },
  "language learner": {
    "pos": "n.phr.",
    "en_def": "a person who is studying a language",
    "cn_def": "語言學習者"
  },
  "language revival": {
    "pos": "n.phr.",
    "en_def": "efforts to bring a disappearing language back into use",
    "cn_def": "語言復振"
  },
  "phonetic alphabet": {
    "pos": "n.phr.",
    "en_def": "a set of symbols that show speech sounds",
    "cn_def": "音標"
  },
  "official language": {
    "pos": "n.phr.",
    "en_def": "a language used by a government and in law",
    "cn_def": "官方語言"
  },
  "language exchange": {
    "pos": "n.phr.",
    "en_def": "meeting someone to practise each other's languages",
    "cn_def": "語言交換"
  },
  "lingua franca": {
    "pos": "n.phr.",
    "en_def": "a shared language used by people with different first languages",
    "cn_def": "通用語"
  },
  "opine": {
    "pos": "v.",
    "en_def": "to give your opinion",
    "cn_def": "發表意見"
  },
  "promulgate": {
    "pos": "v.",
    "en_def": "to make an idea or law widely known",
    "cn_def": "頒布；宣傳推廣"
  },
  "mumble": {
    "pos": "v.",
    "en_def": "to speak quietly and unclearly",
    "cn_def": "含糊地說"
  },
  "misspell": {
    "pos": "v.",
    "en_def": "to spell a word wrongly",
    "cn_def": "拼錯"
  },
  "rhyme": {
    "pos": "v.",
    "en_def": "to have the same ending sound",
    "cn_def": "押韻"
  },
  "creole": {
    "pos": "n.",
    "en_def": "a language that grew from mixing two languages and became a first language",
    "cn_def": "克里奧爾語；混合語"
  },
  "vernacular": {
    "pos": "n.",
    "en_def": "the everyday language spoken by ordinary people",
    "cn_def": "日常用語；方言白話"
  },
  "collocation": {
    "pos": "n.",
    "en_def": "words that are often used together",
    "cn_def": "搭配詞"
  },
  "language partner": {
    "pos": "n.phr.",
    "en_def": "a person you practise a language with",
    "cn_def": "語伴"
  },
  "speech therapist": {
    "pos": "n.phr.",
    "en_def": "a professional who helps people speak more clearly",
    "cn_def": "語言治療師"
  },
  "language contact": {
    "pos": "n.phr.",
    "en_def": "when speakers of different languages meet and influence each other",
    "cn_def": "語言接觸"
  },
  "epiphany": {
    "pos": "n.",
    "en_def": "a sudden moment of understanding",
    "cn_def": "頓悟"
  },
  "advocacy": {
    "pos": "n.",
    "en_def": "public support for an idea or group",
    "cn_def": "倡議；提倡"
  },
  "vapid": {
    "pos": "adj.",
    "en_def": "boring and empty of ideas",
    "cn_def": "空洞乏味的"
  },
  "trenchant": {
    "pos": "adj.",
    "en_def": "clear, strong and direct in criticism",
    "cn_def": "一針見血的；尖銳的"
  },
  "conversational": {
    "pos": "adj.",
    "en_def": "suitable for everyday talking",
    "cn_def": "會話的；日常交談的"
  },
  "whimsical": {
    "pos": "adj.",
    "en_def": "playful and unusual",
    "cn_def": "異想天開的；古怪有趣的"
  },
  "malevolent": {
    "pos": "adj.",
    "en_def": "wanting to harm others",
    "cn_def": "惡毒的；懷有惡意的"
  },
  "flippant": {
    "pos": "adj.",
    "en_def": "not serious when you should be",
    "cn_def": "輕率的；不認真的"
  },
  "attribution": {
    "pos": "n.",
    "en_def": "saying who wrote or created something",
    "cn_def": "出處標明；歸屬"
  },
  "calligraphy": {
    "pos": "n.",
    "en_def": "the art of beautiful handwriting",
    "cn_def": "書法"
  },
  "spell-checker": {
    "pos": "n.",
    "en_def": "a computer program that finds spelling mistakes",
    "cn_def": "拼字檢查程式"
  },
  "romanisation": {
    "pos": "n.",
    "en_def": "writing a language in the Latin alphabet",
    "cn_def": "羅馬拼音化"
  },
  "honorific": {
    "pos": "n.",
    "en_def": "a word or title that shows respect",
    "cn_def": "敬語；尊稱"
  },
  "proto-language": {
    "pos": "n.",
    "en_def": "an ancient language that later languages developed from",
    "cn_def": "原始語"
  },
  "question mark": {
    "pos": "n.phr.",
    "en_def": "the mark ( ? ) at the end of a question",
    "cn_def": "問號"
  },
  "full stop": {
    "pos": "n.phr.",
    "en_def": "the mark ( . ) at the end of a sentence",
    "cn_def": "句號"
  },
  "language policy": {
    "pos": "n.phr.",
    "en_def": "a government's rules about which languages are used",
    "cn_def": "語言政策"
  },
  "comma": {
    "pos": "n.",
    "en_def": "the punctuation mark ( , )",
    "cn_def": "逗號"
  },
  "synonym": {
    "pos": "n.",
    "en_def": "a word with the same or a similar meaning",
    "cn_def": "同義字"
  },
  "prefix": {
    "pos": "n.",
    "en_def": "letters added to the start of a word to change its meaning",
    "cn_def": "字首"
  },
  "language rights": {
    "pos": "n.phr.",
    "en_def": "people's right to use their own language",
    "cn_def": "語言權"
  },
  "last speaker": {
    "pos": "n.phr.",
    "en_def": "the final living person who speaks a language",
    "cn_def": "最後的使用者"
  },
  "target language": {
    "pos": "n.phr.",
    "en_def": "the language you are learning or translating into",
    "cn_def": "目標語言"
  },
  "global english": {
    "pos": "n.phr.",
    "en_def": "English used around the world as an international language",
    "cn_def": "全球英語"
  },
  "unabashed": {
    "pos": "adj.",
    "en_def": "not ashamed or embarrassed",
    "cn_def": "毫不掩飾的；不害臊的"
  },
  "presumptuous": {
    "pos": "adj.",
    "en_def": "doing something without the right or permission",
    "cn_def": "冒昧的；放肆的"
  },
  "the gift of the gab": {
    "pos": "n.phr.",
    "en_def": "the ability to speak easily and persuasively",
    "cn_def": "好口才"
  },
  "listening comprehension": {
    "pos": "n.phr.",
    "en_def": "understanding what you hear",
    "cn_def": "聽力理解"
  },
  "speaking test": {
    "pos": "n.phr.",
    "en_def": "an exam where you talk to an examiner",
    "cn_def": "口說測驗"
  },
  "plural": {
    "pos": "n.",
    "en_def": "the form of a word that means more than one",
    "cn_def": "複數形"
  },
  "oxymoron": {
    "pos": "n.",
    "en_def": "two words with opposite meanings used together",
    "cn_def": "矛盾修飾法"
  },
  "quip": {
    "pos": "n.",
    "en_def": "a short, clever joke",
    "cn_def": "妙語；俏皮話"
  },
  "speech community": {
    "pos": "n.phr.",
    "en_def": "a group of people who share a language or way of speaking",
    "cn_def": "言語社群"
  },
  "language shift": {
    "pos": "n.phr.",
    "en_def": "when a community stops using one language and uses another",
    "cn_def": "語言轉移"
  },
  "phrasal verb": {
    "pos": "n.phr.",
    "en_def": "a verb plus a small word like \"up\" or \"off\"",
    "cn_def": "片語動詞"
  },
  "lisp": {
    "pos": "n.",
    "en_def": "a speech problem where \"s\" sounds like \"th\"",
    "cn_def": "大舌頭（s 發成 th）"
  },
  "dialect": {
    "pos": "n.",
    "en_def": "a form of a language spoken in one area or by one group",
    "cn_def": "方言"
  },
  "compendium": {
    "pos": "n.",
    "en_def": "a book with a lot of information on one subject",
    "cn_def": "彙編；概要"
  }
};

const EXTRA_GLOSSES = {};
