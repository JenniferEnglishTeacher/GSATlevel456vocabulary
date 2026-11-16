// Topic 15 Subunit 4 Quiz Data: Reading, Writing & Scripts 讀寫與文字系統
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T15 S04 - Reading, Writing & Scripts 讀寫與文字系統",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "script",
    "pos": "n.",
    "cn_def": "文字；書寫系統",
    "en_def": "a set of letters or symbols used for writing a language",
    "sentence": "Korean uses a {{BLANK}} called Hangul, and many learners can read it after only a few days of practice.",
    "cn": "韓文使用一種叫做韓文字母的文字，而許多學習者只要練習幾天就能閱讀。"
  },
  {
    "word": "writing system",
    "pos": "n.phr.",
    "cn_def": "書寫系統",
    "en_def": "the way a language is written down",
    "sentence": "Japanese has a complex {{BLANK}}, because it mixes Chinese characters with two different sets of sound symbols.",
    "cn": "日文有一套複雜的書寫系統，因為它混合了漢字和兩套不同的表音符號。"
  },
  {
    "word": "Chinese character",
    "pos": "n.phr.",
    "cn_def": "漢字；中文字",
    "en_def": "a single written symbol used in Chinese",
    "sentence": "Each {{BLANK}} has its own meaning, so foreign students must remember thousands of them before they can read a newspaper.",
    "cn": "每個中文字都有自己的意思，所以外國學生必須記住好幾千個字才能讀報紙。"
  },
  {
    "word": "pictograph",
    "pos": "n.",
    "cn_def": "象形文字",
    "en_def": "a picture used as a written sign for a word",
    "sentence": "The {{BLANK}} for \"mountain\" looks like three peaks, so children enjoy guessing what these old picture-words mean.",
    "cn": "代表「山」的象形文字看起來像三座山峰，所以孩子們很喜歡猜這些古老圖畫文字的意思。"
  },
  {
    "word": "ideogram",
    "pos": "n.",
    "cn_def": "表意文字",
    "en_def": "a written symbol that shows an idea",
    "sentence": "The no-smoking sign is a modern {{BLANK}}, because people from any country can understand it without reading a word.",
    "cn": "禁菸標誌是一種現代的表意符號，因為任何國家的人不用讀任何字就能看懂。"
  },
  {
    "word": "calligraphy",
    "pos": "n.",
    "cn_def": "書法",
    "en_def": "the art of beautiful handwriting",
    "sentence": "My grandfather practises Chinese {{BLANK}} every morning, and he says that holding the brush calmly helps him relax.",
    "cn": "我爺爺每天早上練習中國書法，而他說平穩地握著毛筆能幫助他放鬆。"
  },
  {
    "word": "handwriting",
    "pos": "n.",
    "cn_def": "筆跡；手寫字",
    "en_def": "the way a person writes by hand",
    "sentence": "The doctor's {{BLANK}} was so messy that the pharmacist could not read it, so she called the clinic to check the medicine.",
    "cn": "那位醫生的字跡太潦草了，藥劑師看不懂，所以她打電話到診所確認藥物。"
  },
  {
    "word": "literate",
    "pos": "adj.",
    "cn_def": "識字的",
    "en_def": "able to read and write",
    "sentence": "Only half of the adults in the village were {{BLANK}} in 1950, but today almost every young person there can read and write.",
    "cn": "1950 年時那個村莊只有一半的成人識字，但如今那裡幾乎每個年輕人都能讀寫。"
  },
  {
    "word": "illiterate",
    "pos": "adj.",
    "cn_def": "不識字的；文盲的",
    "en_def": "unable to read or write",
    "sentence": "Her great-grandmother was {{BLANK}} because girls could not go to school then, so she asked her son to read letters for her.",
    "cn": "她的曾祖母不識字，因為當時女孩不能上學，所以她請兒子幫她讀信。"
  },
  {
    "word": "punctuation",
    "pos": "n.",
    "cn_def": "標點符號",
    "en_def": "marks like commas and full stops used in writing",
    "sentence": "Without correct {{BLANK}}, a sentence can be very confusing, so always check your commas before you hand in an essay.",
    "cn": "如果沒有正確的標點符號，一個句子可能會非常令人困惑，所以交作文前一定要檢查你的逗號。"
  },
  {
    "word": "comma",
    "pos": "n.",
    "cn_def": "逗號",
    "en_def": "the punctuation mark ( , )",
    "sentence": "\"Let's eat, Grandma\" and \"Let's eat Grandma\" mean very different things, so one small {{BLANK}} can save a life.",
    "cn": "「我們吃飯吧，奶奶」和「我們吃奶奶吧」意思非常不同，所以一個小小的逗號能救一條命。"
  },
  {
    "word": "apostrophe",
    "pos": "n.",
    "cn_def": "撇號",
    "en_def": "the mark ( ' ) used in words like \"it's\" or \"Tom's\"",
    "sentence": "Many people put an {{BLANK}} in \"its\" by mistake, but \"it's\" only means \"it is\" or \"it has\".",
    "cn": "很多人錯誤地在「its」中加上撇號，但「it's」只表示「it is」或「it has」。"
  },
  {
    "word": "quotation marks",
    "pos": "n.phr.",
    "cn_def": "引號",
    "en_def": "the marks (\" \") used around someone's exact words",
    "sentence": "When you copy a sentence from a website, put it in {{BLANK}}, or your teacher may think you are cheating.",
    "cn": "當你從網站複製一個句子時，要把它放在引號裡，否則你的老師可能會認為你在作弊。"
  },
  {
    "word": "hyphen",
    "pos": "n.",
    "cn_def": "連字號",
    "en_def": "a short line ( - ) that joins words",
    "sentence": "We write \"well-known\" with a {{BLANK}} when it comes before a noun, but many students forget this small rule.",
    "cn": "當「well-known」放在名詞前面時，我們要用連字號來寫，但許多學生忘了這個小規則。"
  },
  {
    "word": "capital letter",
    "pos": "n.phr.",
    "cn_def": "大寫字母",
    "en_def": "a big letter such as A, B or C",
    "sentence": "Every English sentence begins with a {{BLANK}}, and names of people and countries also need one.",
    "cn": "每個英文句子都以大寫字母開頭，而人名和國名也需要。"
  },
  {
    "word": "cursive",
    "pos": "n.",
    "cn_def": "草寫體",
    "en_def": "handwriting where the letters are joined together",
    "sentence": "Some schools no longer teach {{BLANK}}, so many young people cannot read old letters written by their grandparents.",
    "cn": "有些學校不再教草寫，所以許多年輕人看不懂祖父母寫的舊信。"
  },
  {
    "word": "spell-checker",
    "pos": "n.",
    "cn_def": "拼字檢查程式",
    "en_def": "a computer program that finds spelling mistakes",
    "sentence": "The {{BLANK}} did not notice that I wrote \"form\" instead of \"from\", because both are real English words.",
    "cn": "拼字檢查程式沒有發現我把「from」寫成了「form」，因為兩個都是真正的英文字。"
  },
  {
    "word": "autocorrect",
    "pos": "n.",
    "cn_def": "自動校正",
    "en_def": "a phone function that changes words it thinks are wrong",
    "sentence": "My phone's {{BLANK}} changed \"meet you at five\" to \"meat you at five\", and my friend laughed at my message all day.",
    "cn": "我手機的自動校正把「五點見」改成了「五點肉你」，我朋友一整天都在笑我的訊息。"
  },
  {
    "word": "typo",
    "pos": "n.",
    "cn_def": "打字錯誤",
    "en_def": "a small mistake in typing",
    "sentence": "There was a {{BLANK}} on the restaurant menu that said \"fried lice\" instead of \"fried rice\", so many tourists took photos of it.",
    "cn": "餐廳菜單上有一個打字錯誤，把「炒飯」寫成了「炒蝨子」，所以很多觀光客都拍照留念。"
  },
  {
    "word": "paragraph",
    "pos": "n.",
    "cn_def": "段落",
    "en_def": "a group of sentences about one main idea",
    "sentence": "Each {{BLANK}} in your essay should start with a clear topic sentence, and the other sentences should support that idea.",
    "cn": "你文章中的每個段落都應以清楚的主題句開頭，而其他句子應該支持那個想法。"
  },
  {
    "word": "phonics",
    "pos": "n.",
    "cn_def": "自然發音法",
    "en_def": "a way of teaching reading through letter sounds",
    "sentence": "Young children learn {{BLANK}} in their first year of school, so they can sound out new words like \"c-a-t\" by themselves.",
    "cn": "幼童在上學第一年學習自然發音法，所以他們能自己拼讀出像「c-a-t」這樣的新字。"
  },
  {
    "word": "romanisation",
    "pos": "n.",
    "cn_def": "羅馬拼音化",
    "en_def": "writing a language in the Latin alphabet",
    "sentence": "Street signs in Taipei use {{BLANK}} for place names, so foreign visitors can find stations even if they cannot read Chinese.",
    "cn": "台北的路標對地名使用羅馬拼音，所以外國遊客即使看不懂中文也能找到車站。"
  },
  {
    "word": "pinyin",
    "pos": "n.",
    "cn_def": "漢語拼音",
    "en_def": "the official system for writing Chinese sounds with Roman letters",
    "sentence": "Many foreigners learn {{BLANK}} before they learn characters, because it helps them pronounce Mandarin words correctly.",
    "cn": "許多外國人在學漢字之前先學漢語拼音，因為它能幫助他們正確發出國語字詞的音。"
  },
  {
    "word": "transliterate",
    "pos": "v.",
    "cn_def": "音譯；轉寫",
    "en_def": "to write words using the letters of another alphabet",
    "sentence": "Passport officers {{BLANK}} Chinese names into English letters, but the same name can be spelled in several different ways.",
    "cn": "護照官員會把中文名字音譯成英文字母，但同一個名字可能有好幾種不同的拼法。"
  },
  {
    "word": "scribble",
    "pos": "v.",
    "cn_def": "潦草地寫",
    "en_def": "to write something quickly and carelessly",
    "sentence": "I {{BLANK}} the phone number on my hand because I had no paper, but later I could not read the last two numbers.",
    "cn": "我因為沒有紙，就把電話號碼潦草地寫在手上，但後來我看不清最後兩個數字。"
  },
  {
    "word": "word processor",
    "pos": "n.phr.",
    "cn_def": "文書處理軟體",
    "en_def": "a computer program for writing documents",
    "sentence": "Most students write their reports with a {{BLANK}}, because it is easy to change sentences and check spelling.",
    "cn": "大多數學生用文書處理軟體寫報告，因為它很容易修改句子和檢查拼字。"
  },
  {
    "word": "full stop",
    "pos": "n.phr.",
    "cn_def": "句號",
    "en_def": "the mark ( . ) at the end of a sentence",
    "sentence": "Remember to put a {{BLANK}} at the end of each sentence, or your reader will not know where one idea ends.",
    "cn": "記得在每個句子結尾加上句號，否則你的讀者不會知道一個想法在哪裡結束。"
  },
  {
    "word": "question mark",
    "pos": "n.phr.",
    "cn_def": "問號",
    "en_def": "the mark ( ? ) at the end of a question",
    "sentence": "Spanish puts an upside-down {{BLANK}} at the start of a question, while English only uses one at the end.",
    "cn": "西班牙文會在問句開頭放一個倒過來的問號，而英文只在句尾用一個。"
  }
];

const MCQS = [
  {
    "q": "Korean uses a _____ called Hangul, and many learners can read it after only a few days of practice.",
    "options": [
      "script",
      "catharsis",
      "cognate",
      "homophone"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Japanese has a complex _____, because it mixes Chinese characters with two different sets of sound symbols.",
    "options": [
      "speech community",
      "free translation",
      "writing system",
      "literal translation"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Each _____ has its own meaning, so foreign students must remember thousands of them before they can read a newspaper.",
    "options": [
      "language shift",
      "Chinese character",
      "interpreter booth",
      "mother tongue"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The _____ for \"mountain\" looks like three peaks, so children enjoy guessing what these old picture-words mean.",
    "options": [
      "pariah",
      "phrasebook",
      "palindrome",
      "pictograph"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The no-smoking sign is a modern _____, because people from any country can understand it without reading a word.",
    "options": [
      "collocation",
      "paragon",
      "ideogram",
      "psycholinguistics"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "My grandfather practises Chinese _____ every morning, and he says that holding the brush calmly helps him relax.",
    "options": [
      "morpheme",
      "allusion",
      "proverb",
      "calligraphy"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The doctor's _____ was so messy that the pharmacist could not read it, so she called the clinic to check the medicine.",
    "options": [
      "pariah",
      "handwriting",
      "phrasebook",
      "post-editing"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Only half of the adults in the village were _____ in 1950, but today almost every young person there can read and write.",
    "options": [
      "literate",
      "faithful",
      "obtuse",
      "linguistic"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Her great-grandmother was _____ because girls could not go to school then, so she asked her son to read letters for her.",
    "options": [
      "impertinent",
      "moribund",
      "informal",
      "illiterate"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Without correct _____, a sentence can be very confusing, so always check your commas before you hand in an essay.",
    "options": [
      "probity",
      "punctuation",
      "dissonance",
      "pragmatics"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "\"Let's eat, Grandma\" and \"Let's eat Grandma\" mean very different things, so one small _____ can save a life.",
    "options": [
      "collocation",
      "attribution",
      "comma",
      "disdain"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Many people put an _____ in \"its\" by mistake, but \"it's\" only means \"it is\" or \"it has\".",
    "options": [
      "apostrophe",
      "allegory",
      "assent",
      "globalisation"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "When you copy a sentence from a website, put it in _____, or your teacher may think you are cheating.",
    "options": [
      "oral tradition",
      "quotation marks",
      "native speaker",
      "minority language"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "We write \"well-known\" with a _____ when it comes before a noun, but many students forget this small rule.",
    "options": [
      "hyphen",
      "camaraderie",
      "arbiter",
      "pundit"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Every English sentence begins with a _____, and names of people and countries also need one.",
    "options": [
      "mother-tongue education",
      "language death",
      "speech therapist",
      "capital letter"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Some schools no longer teach _____, so many young people cannot read old letters written by their grandparents.",
    "options": [
      "candour",
      "neologism",
      "cursive",
      "allusion"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The _____ did not notice that I wrote \"form\" instead of \"from\", because both are real English words.",
    "options": [
      "spell-checker",
      "duplicity",
      "psycholinguistics",
      "grammar"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "My phone's _____ changed \"meet you at five\" to \"meat you at five\", and my friend laughed at my message all day.",
    "options": [
      "assent",
      "proverb",
      "autocorrect",
      "vernacular"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "There was a _____ on the restaurant menu that said \"fried lice\" instead of \"fried rice\", so many tourists took photos of it.",
    "options": [
      "creole",
      "catharsis",
      "pitch",
      "typo"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Each _____ in your essay should start with a clear topic sentence, and the other sentences should support that idea.",
    "options": [
      "earpiece",
      "paragraph",
      "voice-over",
      "vocabulary"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Young children learn _____ in their first year of school, so they can sound out new words like \"c-a-t\" by themselves.",
    "options": [
      "phonics",
      "guile",
      "duplicity",
      "assent"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Street signs in Taipei use _____ for place names, so foreign visitors can find stations even if they cannot read Chinese.",
    "options": [
      "globalisation",
      "romanisation",
      "lip-reading",
      "creole"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Many foreigners learn _____ before they learn characters, because it helps them pronounce Mandarin words correctly.",
    "options": [
      "antonym",
      "spelling",
      "pinyin",
      "circumlocution"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Passport officers _____ Chinese names into English letters, but the same name can be spelled in several different ways.",
    "options": [
      "inculcate",
      "opine",
      "vex",
      "transliterate"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "I _____ the phone number on my hand because I had no paper, but later I could not read the last two numbers.",
    "options": [
      "self-correct",
      "atone",
      "scribble",
      "adjudicate"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Most students write their reports with a _____, because it is easy to change sentences and check spelling.",
    "options": [
      "translation app",
      "passive voice",
      "word root",
      "word processor"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Remember to put a _____ at the end of each sentence, or your reader will not know where one idea ends.",
    "options": [
      "full stop",
      "speaking test",
      "mother tongue",
      "sight translation"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Spanish puts an upside-down _____ at the start of a question, while English only uses one at the end.",
    "options": [
      "mother-tongue education",
      "question mark",
      "interpreter booth",
      "language barrier"
    ],
    "answer": 1,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "script": {
    "pos": "n.",
    "en_def": "a set of letters or symbols used for writing a language",
    "cn_def": "文字；書寫系統"
  },
  "writing system": {
    "pos": "n.phr.",
    "en_def": "the way a language is written down",
    "cn_def": "書寫系統"
  },
  "chinese character": {
    "pos": "n.phr.",
    "en_def": "a single written symbol used in Chinese",
    "cn_def": "漢字；中文字"
  },
  "pictograph": {
    "pos": "n.",
    "en_def": "a picture used as a written sign for a word",
    "cn_def": "象形文字"
  },
  "ideogram": {
    "pos": "n.",
    "en_def": "a written symbol that shows an idea",
    "cn_def": "表意文字"
  },
  "calligraphy": {
    "pos": "n.",
    "en_def": "the art of beautiful handwriting",
    "cn_def": "書法"
  },
  "handwriting": {
    "pos": "n.",
    "en_def": "the way a person writes by hand",
    "cn_def": "筆跡；手寫字"
  },
  "literate": {
    "pos": "adj.",
    "en_def": "able to read and write",
    "cn_def": "識字的"
  },
  "illiterate": {
    "pos": "adj.",
    "en_def": "unable to read or write",
    "cn_def": "不識字的；文盲的"
  },
  "punctuation": {
    "pos": "n.",
    "en_def": "marks like commas and full stops used in writing",
    "cn_def": "標點符號"
  },
  "comma": {
    "pos": "n.",
    "en_def": "the punctuation mark ( , )",
    "cn_def": "逗號"
  },
  "apostrophe": {
    "pos": "n.",
    "en_def": "the mark ( ' ) used in words like \"it's\" or \"Tom's\"",
    "cn_def": "撇號"
  },
  "quotation marks": {
    "pos": "n.phr.",
    "en_def": "the marks (\" \") used around someone's exact words",
    "cn_def": "引號"
  },
  "hyphen": {
    "pos": "n.",
    "en_def": "a short line ( - ) that joins words",
    "cn_def": "連字號"
  },
  "capital letter": {
    "pos": "n.phr.",
    "en_def": "a big letter such as A, B or C",
    "cn_def": "大寫字母"
  },
  "cursive": {
    "pos": "n.",
    "en_def": "handwriting where the letters are joined together",
    "cn_def": "草寫體"
  },
  "spell-checker": {
    "pos": "n.",
    "en_def": "a computer program that finds spelling mistakes",
    "cn_def": "拼字檢查程式"
  },
  "autocorrect": {
    "pos": "n.",
    "en_def": "a phone function that changes words it thinks are wrong",
    "cn_def": "自動校正"
  },
  "typo": {
    "pos": "n.",
    "en_def": "a small mistake in typing",
    "cn_def": "打字錯誤"
  },
  "paragraph": {
    "pos": "n.",
    "en_def": "a group of sentences about one main idea",
    "cn_def": "段落"
  },
  "phonics": {
    "pos": "n.",
    "en_def": "a way of teaching reading through letter sounds",
    "cn_def": "自然發音法"
  },
  "romanisation": {
    "pos": "n.",
    "en_def": "writing a language in the Latin alphabet",
    "cn_def": "羅馬拼音化"
  },
  "pinyin": {
    "pos": "n.",
    "en_def": "the official system for writing Chinese sounds with Roman letters",
    "cn_def": "漢語拼音"
  },
  "transliterate": {
    "pos": "v.",
    "en_def": "to write words using the letters of another alphabet",
    "cn_def": "音譯；轉寫"
  },
  "scribble": {
    "pos": "v.",
    "en_def": "to write something quickly and carelessly",
    "cn_def": "潦草地寫"
  },
  "word processor": {
    "pos": "n.phr.",
    "en_def": "a computer program for writing documents",
    "cn_def": "文書處理軟體"
  },
  "full stop": {
    "pos": "n.phr.",
    "en_def": "the mark ( . ) at the end of a sentence",
    "cn_def": "句號"
  },
  "question mark": {
    "pos": "n.phr.",
    "en_def": "the mark ( ? ) at the end of a question",
    "cn_def": "問號"
  },
  "catharsis": {
    "pos": "n.",
    "en_def": "a release of strong emotions that makes you feel better",
    "cn_def": "情緒宣洩；淨化"
  },
  "cognate": {
    "pos": "n.",
    "en_def": "a word that has the same origin as a word in another language",
    "cn_def": "同源字"
  },
  "homophone": {
    "pos": "n.",
    "en_def": "a word that sounds like another but has a different meaning",
    "cn_def": "同音異義字"
  },
  "speech community": {
    "pos": "n.phr.",
    "en_def": "a group of people who share a language or way of speaking",
    "cn_def": "言語社群"
  },
  "free translation": {
    "pos": "n.phr.",
    "en_def": "a translation that keeps the meaning but changes the words",
    "cn_def": "意譯"
  },
  "literal translation": {
    "pos": "n.phr.",
    "en_def": "a translation that follows the words exactly",
    "cn_def": "直譯"
  },
  "language shift": {
    "pos": "n.phr.",
    "en_def": "when a community stops using one language and uses another",
    "cn_def": "語言轉移"
  },
  "interpreter booth": {
    "pos": "n.phr.",
    "en_def": "a small soundproof room where interpreters work",
    "cn_def": "口譯廂"
  },
  "mother tongue": {
    "pos": "n.phr.",
    "en_def": "the first language you learned as a child",
    "cn_def": "母語"
  },
  "pariah": {
    "pos": "n.",
    "en_def": "a person who is rejected by others",
    "cn_def": "被排斥的人；棄兒"
  },
  "phrasebook": {
    "pos": "n.",
    "en_def": "a small book of useful phrases for travellers",
    "cn_def": "常用語手冊"
  },
  "palindrome": {
    "pos": "n.",
    "en_def": "a word that reads the same backwards and forwards",
    "cn_def": "迴文"
  },
  "collocation": {
    "pos": "n.",
    "en_def": "words that are often used together",
    "cn_def": "搭配詞"
  },
  "paragon": {
    "pos": "n.",
    "en_def": "a perfect example of a quality",
    "cn_def": "典範；模範"
  },
  "psycholinguistics": {
    "pos": "n.",
    "en_def": "the study of how the mind uses and understands language",
    "cn_def": "心理語言學"
  },
  "morpheme": {
    "pos": "n.",
    "en_def": "the smallest part of a word that has meaning",
    "cn_def": "詞素"
  },
  "allusion": {
    "pos": "n.",
    "en_def": "an indirect mention of something",
    "cn_def": "暗指；典故"
  },
  "proverb": {
    "pos": "n.",
    "en_def": "a short well-known saying that gives advice",
    "cn_def": "諺語"
  },
  "post-editing": {
    "pos": "n.",
    "en_def": "fixing a machine translation by a human",
    "cn_def": "譯後編輯"
  },
  "faithful": {
    "pos": "adj.",
    "en_def": "keeping close to the original meaning",
    "cn_def": "忠實的"
  },
  "obtuse": {
    "pos": "adj.",
    "en_def": "slow to understand",
    "cn_def": "遲鈍的"
  },
  "linguistic": {
    "pos": "adj.",
    "en_def": "connected with language",
    "cn_def": "語言的"
  },
  "impertinent": {
    "pos": "adj.",
    "en_def": "rude and not showing respect",
    "cn_def": "無禮的；不禮貌的"
  },
  "moribund": {
    "pos": "adj.",
    "en_def": "close to dying or ending",
    "cn_def": "垂死的；瀕臨消亡的"
  },
  "informal": {
    "pos": "adj.",
    "en_def": "relaxed and used with friends, not in official situations",
    "cn_def": "非正式的"
  },
  "probity": {
    "pos": "n.",
    "en_def": "complete honesty",
    "cn_def": "正直；誠實"
  },
  "dissonance": {
    "pos": "n.",
    "en_def": "a lack of agreement or harmony",
    "cn_def": "不和諧；不一致"
  },
  "pragmatics": {
    "pos": "n.",
    "en_def": "the study of how context changes what we mean",
    "cn_def": "語用學"
  },
  "attribution": {
    "pos": "n.",
    "en_def": "saying who wrote or created something",
    "cn_def": "出處標明；歸屬"
  },
  "disdain": {
    "pos": "n.",
    "en_def": "a feeling that something is not worth respect",
    "cn_def": "鄙視；輕蔑"
  },
  "allegory": {
    "pos": "n.",
    "en_def": "a story with a hidden moral or political meaning",
    "cn_def": "寓言；諷喻"
  },
  "assent": {
    "pos": "n.",
    "en_def": "agreement or approval",
    "cn_def": "同意；贊成"
  },
  "globalisation": {
    "pos": "n.",
    "en_def": "the process of the world becoming more connected",
    "cn_def": "全球化"
  },
  "oral tradition": {
    "pos": "n.phr.",
    "en_def": "stories and knowledge passed on by speaking, not writing",
    "cn_def": "口述傳統"
  },
  "native speaker": {
    "pos": "n.phr.",
    "en_def": "a person who learned a language from birth",
    "cn_def": "母語人士"
  },
  "minority language": {
    "pos": "n.phr.",
    "en_def": "a language spoken by a small part of a population",
    "cn_def": "少數語言"
  },
  "camaraderie": {
    "pos": "n.",
    "en_def": "friendship and trust among a group",
    "cn_def": "友誼；同袍情誼"
  },
  "arbiter": {
    "pos": "n.",
    "en_def": "a person who judges what is right or correct",
    "cn_def": "仲裁者；權威裁定者"
  },
  "pundit": {
    "pos": "n.",
    "en_def": "an expert who gives opinions in the media",
    "cn_def": "專家；評論員"
  },
  "mother-tongue education": {
    "pos": "n.phr.",
    "en_def": "teaching children in their first language",
    "cn_def": "母語教育"
  },
  "language death": {
    "pos": "n.phr.",
    "en_def": "when the last speakers of a language die out",
    "cn_def": "語言消亡"
  },
  "speech therapist": {
    "pos": "n.phr.",
    "en_def": "a professional who helps people speak more clearly",
    "cn_def": "語言治療師"
  },
  "candour": {
    "pos": "n.",
    "en_def": "honest and open speech",
    "cn_def": "坦率；直言"
  },
  "neologism": {
    "pos": "n.",
    "en_def": "a newly invented word",
    "cn_def": "新造詞"
  },
  "duplicity": {
    "pos": "n.",
    "en_def": "dishonest behaviour meant to trick people",
    "cn_def": "欺騙；口是心非"
  },
  "grammar": {
    "pos": "n.",
    "en_def": "the rules for forming words and sentences",
    "cn_def": "文法"
  },
  "vernacular": {
    "pos": "n.",
    "en_def": "the everyday language spoken by ordinary people",
    "cn_def": "日常用語；方言白話"
  },
  "creole": {
    "pos": "n.",
    "en_def": "a language that grew from mixing two languages and became a first language",
    "cn_def": "克里奧爾語；混合語"
  },
  "pitch": {
    "pos": "n.",
    "en_def": "how high or low a sound is",
    "cn_def": "音高"
  },
  "earpiece": {
    "pos": "n.",
    "en_def": "a small device worn in the ear to hear sound",
    "cn_def": "耳機"
  },
  "voice-over": {
    "pos": "n.",
    "en_def": "a voice heard in a film or video without seeing the speaker",
    "cn_def": "旁白；畫外音"
  },
  "vocabulary": {
    "pos": "n.",
    "en_def": "all the words a person knows or uses",
    "cn_def": "字彙；詞彙量"
  },
  "guile": {
    "pos": "n.",
    "en_def": "clever but dishonest behaviour",
    "cn_def": "狡詐；詭計"
  },
  "lip-reading": {
    "pos": "n.",
    "en_def": "understanding speech by watching people's lips",
    "cn_def": "讀唇"
  },
  "antonym": {
    "pos": "n.",
    "en_def": "a word with the opposite meaning",
    "cn_def": "反義字"
  },
  "spelling": {
    "pos": "n.",
    "en_def": "the way letters form a word",
    "cn_def": "拼字"
  },
  "circumlocution": {
    "pos": "n.",
    "en_def": "using many words when a few would do",
    "cn_def": "拐彎抹角；迂迴說法"
  },
  "inculcate": {
    "pos": "v.",
    "en_def": "to teach an idea by repeating it often",
    "cn_def": "反覆灌輸"
  },
  "opine": {
    "pos": "v.",
    "en_def": "to give your opinion",
    "cn_def": "發表意見"
  },
  "vex": {
    "pos": "v.",
    "en_def": "to annoy or worry someone",
    "cn_def": "使煩惱；使惱火"
  },
  "self-correct": {
    "pos": "v.",
    "en_def": "to notice and fix your own mistakes",
    "cn_def": "自我修正"
  },
  "atone": {
    "pos": "v.",
    "en_def": "to do something to make up for a wrong",
    "cn_def": "贖罪；彌補"
  },
  "adjudicate": {
    "pos": "v.",
    "en_def": "to judge officially",
    "cn_def": "裁決；評判"
  },
  "translation app": {
    "pos": "n.phr.",
    "en_def": "a phone program that translates words or speech",
    "cn_def": "翻譯應用程式"
  },
  "passive voice": {
    "pos": "n.phr.",
    "en_def": "a sentence form where the subject receives the action",
    "cn_def": "被動語態"
  },
  "word root": {
    "pos": "n.phr.",
    "en_def": "the main part of a word that carries its basic meaning",
    "cn_def": "字根"
  },
  "speaking test": {
    "pos": "n.phr.",
    "en_def": "an exam where you talk to an examiner",
    "cn_def": "口說測驗"
  },
  "sight translation": {
    "pos": "n.phr.",
    "en_def": "reading a document in one language aloud in another",
    "cn_def": "視譯"
  },
  "language barrier": {
    "pos": "n.phr.",
    "en_def": "a problem in communication caused by different languages",
    "cn_def": "語言障礙"
  }
};

const EXTRA_GLOSSES = {};
