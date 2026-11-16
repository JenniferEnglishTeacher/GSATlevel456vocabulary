// Topic 15 Subunit 1 Quiz Data: Linguistics & Language Structure 語言學與語言結構
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T15 S01 - Linguistics & Language Structure 語言學與語言結構",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "linguistics",
    "pos": "n.",
    "cn_def": "語言學",
    "en_def": "the scientific study of language",
    "sentence": "My cousin decided to study {{BLANK}} at university because she loves languages, and she wants to understand how children learn to speak.",
    "cn": "我的表姊決定在大學念語言學，因為她熱愛語言，而且她想了解孩子是如何學會說話的。"
  },
  {
    "word": "linguist",
    "pos": "n.",
    "cn_def": "語言學家",
    "en_def": "a person who studies how languages work",
    "sentence": "The {{BLANK}} recorded the old villagers telling stories, and she later used the recordings to describe the grammar of their language.",
    "cn": "這位語言學家錄下了年長村民講故事的聲音，之後她用這些錄音來描述他們語言的文法。"
  },
  {
    "word": "linguistic",
    "pos": "adj.",
    "cn_def": "語言的",
    "en_def": "connected with language",
    "sentence": "Moving to Japan was a big {{BLANK}} challenge for Tom, but he practised every day and could chat with neighbours after a year.",
    "cn": "搬到日本對湯姆來說是一大語言上的挑戰，但他每天練習，一年後就能和鄰居聊天了。"
  },
  {
    "word": "sociolinguistics",
    "pos": "n.",
    "cn_def": "社會語言學",
    "en_def": "the study of how language and society affect each other",
    "sentence": "In our {{BLANK}} class we compared how teenagers and grandparents speak, and we found that each group uses very different words.",
    "cn": "在我們的社會語言學課上，我們比較了青少年和祖父母說話的方式，結果發現每個族群使用的詞彙都非常不同。"
  },
  {
    "word": "psycholinguistics",
    "pos": "n.",
    "cn_def": "心理語言學",
    "en_def": "the study of how the mind uses and understands language",
    "sentence": "Researchers in {{BLANK}} use eye-tracking cameras, because they want to know exactly how our brains process words while we read.",
    "cn": "心理語言學的研究人員使用眼動追蹤攝影機，因為他們想確切知道我們閱讀時大腦是如何處理文字的。"
  },
  {
    "word": "phonetics",
    "pos": "n.",
    "cn_def": "語音學",
    "en_def": "the study of speech sounds",
    "sentence": "Our teacher studied {{BLANK}} in college, so she can explain exactly where to put our tongue when we make the \"th\" sound.",
    "cn": "我們的老師在大學學過語音學，所以她能確切解釋我們發「th」音時舌頭該放在哪裡。"
  },
  {
    "word": "semantics",
    "pos": "n.",
    "cn_def": "語意學",
    "en_def": "the study of the meaning of words and sentences",
    "sentence": "\"Cheap\" and \"inexpensive\" seem to mean the same thing, but {{BLANK}} shows us that one word can sound more negative than the other.",
    "cn": "「cheap」和「inexpensive」看似意思相同，但語意學告訴我們其中一個字聽起來可能比另一個更負面。"
  },
  {
    "word": "pragmatics",
    "pos": "n.",
    "cn_def": "語用學",
    "en_def": "the study of how context changes what we mean",
    "sentence": "When my mum asks \"Is the door open?\", she usually wants me to close it, and {{BLANK}} explains how we understand these hidden requests.",
    "cn": "當我媽媽問「門開著嗎？」時，她通常是要我去關門，而語用學解釋了我們如何理解這些隱藏的請求。"
  },
  {
    "word": "corpus",
    "pos": "n.",
    "cn_def": "語料庫",
    "en_def": "a large collection of real texts used for language study",
    "sentence": "The dictionary team searched a huge {{BLANK}} of newspapers and websites, so they could see how often people really use each word.",
    "cn": "字典編輯團隊搜尋了一個由報紙和網站組成的龐大語料庫，以便了解人們實際上多常使用每個字。"
  },
  {
    "word": "morpheme",
    "pos": "n.",
    "cn_def": "詞素",
    "en_def": "the smallest part of a word that has meaning",
    "sentence": "The word \"unhappy\" has two parts, and each {{BLANK}} adds meaning, because \"un\" means \"not\" and \"happy\" means \"glad\".",
    "cn": "「unhappy」這個字有兩個部分，而每個詞素都增加了意思，因為「un」表示「不」，「happy」表示「高興」。"
  },
  {
    "word": "phoneme",
    "pos": "n.",
    "cn_def": "音素",
    "en_def": "one of the smallest sound units in a language",
    "sentence": "English learners in Taiwan often mix up the sounds in \"light\" and \"right\", because each {{BLANK}} does not exist separately in their first language.",
    "cn": "台灣的英語學習者常常混淆「light」和「right」的發音，因為這兩個音素在他們的母語中並沒有分開存在。"
  },
  {
    "word": "syllable",
    "pos": "n.",
    "cn_def": "音節",
    "en_def": "a part of a word with one vowel sound",
    "sentence": "The word \"banana\" has three {{BLANK}}, and English speakers usually put the strongest sound on the middle one.",
    "cn": "「banana」這個字有三個音節，而說英語的人通常把最重的音放在中間那個上。"
  },
  {
    "word": "prefix",
    "pos": "n.",
    "cn_def": "字首",
    "en_def": "letters added to the start of a word to change its meaning",
    "sentence": "If you add the {{BLANK}} \"re\" to \"write\", you get \"rewrite\", and the new word means \"write again\".",
    "cn": "如果你在「write」前面加上字首「re」，就會得到「rewrite」，而這個新字的意思是「再寫一次」。"
  },
  {
    "word": "suffix",
    "pos": "n.",
    "cn_def": "字尾",
    "en_def": "letters added to the end of a word",
    "sentence": "The {{BLANK}} \"ness\" turns adjectives into nouns, so \"kind\" becomes \"kindness\" and \"dark\" becomes \"darkness\".",
    "cn": "字尾「ness」能把形容詞變成名詞，所以「kind」變成「kindness」，「dark」變成「darkness」。"
  },
  {
    "word": "affix",
    "pos": "n.",
    "cn_def": "詞綴",
    "en_def": "a prefix or a suffix",
    "sentence": "Learning one common {{BLANK}} can help you guess hundreds of new words, because the same pieces appear again and again.",
    "cn": "學會一個常見的詞綴能幫你猜出幾百個新字，因為同樣的部分會一再出現。"
  },
  {
    "word": "word root",
    "pos": "n.phr.",
    "cn_def": "字根",
    "en_def": "the main part of a word that carries its basic meaning",
    "sentence": "The {{BLANK}} \"port\" means \"carry\", so once you know it, words like \"transport\" and \"export\" become much easier to remember.",
    "cn": "字根「port」的意思是「攜帶」，所以一旦你知道它，像「transport」和「export」這樣的字就變得容易記多了。"
  },
  {
    "word": "inflection",
    "pos": "n.",
    "cn_def": "字尾變化；詞形變化",
    "en_def": "a change in a word's ending to show tense, number, etc.",
    "sentence": "English adds an {{BLANK}} like \"-s\" or \"-ed\" to many words, but Chinese verbs never change their form at all.",
    "cn": "英文會在許多字後面加上像「-s」或「-ed」這樣的詞形變化，但中文的動詞完全不會改變形式。"
  },
  {
    "word": "compound word",
    "pos": "n.phr.",
    "cn_def": "複合字",
    "en_def": "a word made from two or more words",
    "sentence": "\"Toothbrush\" is a {{BLANK}} made from \"tooth\" and \"brush\", and German has even longer examples than English.",
    "cn": "「toothbrush」是由「tooth」和「brush」組成的複合字，而德文的例子甚至比英文還要長。"
  },
  {
    "word": "word order",
    "pos": "n.phr.",
    "cn_def": "詞序；字序",
    "en_def": "the order in which words are arranged in a sentence",
    "sentence": "In English the {{BLANK}} is usually subject, verb, object, but in Japanese the verb normally comes at the end.",
    "cn": "英文的詞序通常是主詞、動詞、受詞，但在日文中，動詞通常出現在句尾。"
  },
  {
    "word": "sentence structure",
    "pos": "n.phr.",
    "cn_def": "句子結構",
    "en_def": "the way words are put together to form a sentence",
    "sentence": "My writing teacher told me to vary my {{BLANK}}, because using only short simple sentences makes an essay sound boring.",
    "cn": "我的寫作老師叫我變化句子結構，因為只用短的簡單句會讓文章聽起來很無聊。"
  },
  {
    "word": "grammar",
    "pos": "n.",
    "cn_def": "文法",
    "en_def": "the rules for forming words and sentences",
    "sentence": "Many students hate learning {{BLANK}} rules, but these rules help them write clearly and avoid confusing their readers.",
    "cn": "許多學生討厭學文法規則，但這些規則能幫助他們寫得清楚，並避免讓讀者感到困惑。"
  },
  {
    "word": "grammatical",
    "pos": "adj.",
    "cn_def": "文法上的",
    "en_def": "following or connected with the rules of grammar",
    "sentence": "The essay had a few {{BLANK}} mistakes, but the ideas were so interesting that the teacher still gave it a high score.",
    "cn": "這篇文章有幾個文法上的錯誤，但內容想法非常有趣，所以老師還是給了高分。"
  },
  {
    "word": "prescriptive",
    "pos": "adj.",
    "cn_def": "規範性的",
    "en_def": "telling people how they should use language",
    "sentence": "Old grammar books were very {{BLANK}} and told readers never to end a sentence with a preposition, but modern writers often ignore that rule.",
    "cn": "舊的文法書非常規範性，告訴讀者絕對不要用介系詞結束句子，但現代作家常常忽略這條規則。"
  },
  {
    "word": "ungrammatical",
    "pos": "adj.",
    "cn_def": "不合文法的",
    "en_def": "not following the rules of grammar",
    "sentence": "The sentence \"He go to school yesterday\" is {{BLANK}}, so the teacher circled it and asked the student to correct the verb.",
    "cn": "「He go to school yesterday」這個句子是不合文法的，所以老師把它圈起來，要求學生改正動詞。"
  },
  {
    "word": "part of speech",
    "pos": "n.phr.",
    "cn_def": "詞性",
    "en_def": "a word class such as noun, verb or adjective",
    "sentence": "\"Light\" can be a noun, a verb or an adjective, so you must check the sentence to decide its {{BLANK}}.",
    "cn": "「light」可以是名詞、動詞或形容詞，所以你必須查看句子才能決定它的詞性。"
  },
  {
    "word": "cognate",
    "pos": "n.",
    "cn_def": "同源字",
    "en_def": "a word that has the same origin as a word in another language",
    "sentence": "The English word \"night\" and the German word \"Nacht\" are {{BLANK}}, and that is why they look and sound so similar.",
    "cn": "英文字「night」和德文字「Nacht」是同源字，這就是為什麼它們看起來、聽起來都那麼相似。"
  },
  {
    "word": "plural",
    "pos": "n.",
    "cn_def": "複數形",
    "en_def": "the form of a word that means more than one",
    "sentence": "Most English nouns add \"s\" to form the {{BLANK}}, but some, like \"child\" and \"mouse\", change in strange ways.",
    "cn": "大多數英文名詞加「s」構成複數形，但有些字，像「child」和「mouse」，會以奇怪的方式改變。"
  },
  {
    "word": "singular",
    "pos": "adj.",
    "cn_def": "單數的",
    "en_def": "showing only one person or thing",
    "sentence": "\"News\" looks like a plural noun, but it is actually {{BLANK}}, so we say \"the news is good\" and not \"the news are good\".",
    "cn": "「news」看起來像複數名詞，但它其實是單數的，所以我們說「the news is good」而不是「the news are good」。"
  },
  {
    "word": "passive voice",
    "pos": "n.phr.",
    "cn_def": "被動語態",
    "en_def": "a sentence form where the subject receives the action",
    "sentence": "Science reports often use the {{BLANK}}, so writers say \"the water was heated\" instead of \"we heated the water\".",
    "cn": "科學報告常常使用被動語態，所以作者會說「水被加熱了」而不是「我們加熱了水」。"
  },
  {
    "word": "conjugate",
    "pos": "v.",
    "cn_def": "（動詞）變化詞形",
    "en_def": "to list or change the forms of a verb",
    "sentence": "In Spanish class we had to {{BLANK}} twenty verbs every week, and I often forgot the endings for \"we\" and \"they\".",
    "cn": "在西班牙文課上，我們每週都必須變化二十個動詞的詞形，而我常常忘記「我們」和「他們」的字尾。"
  }
];

const MCQS = [
  {
    "q": "My cousin decided to study _____ at university because she loves languages, and she wants to understand how children learn to speak.",
    "options": [
      "advocacy",
      "sycophant",
      "linguistics",
      "charisma"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The _____ recorded the old villagers telling stories, and she later used the recordings to describe the grammar of their language.",
    "options": [
      "linguist",
      "expat",
      "misgiving",
      "compendium"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Moving to Japan was a big _____ challenge for Tom, but he practised every day and could chat with neighbours after a year.",
    "options": [
      "wistful",
      "linguistic",
      "cross-cultural",
      "brusque"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "In our _____ class we compared how teenagers and grandparents speak, and we found that each group uses very different words.",
    "options": [
      "spelling",
      "clarification",
      "calligraphy",
      "sociolinguistics"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Researchers in _____ use eye-tracking cameras, because they want to know exactly how our brains process words while we read.",
    "options": [
      "predilection",
      "psycholinguistics",
      "repartee",
      "cursive"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Our teacher studied _____ in college, so she can explain exactly where to put our tongue when we make the \"th\" sound.",
    "options": [
      "phonetics",
      "iconoclast",
      "honorific",
      "heresy"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "\"Cheap\" and \"inexpensive\" seem to mean the same thing, but _____ shows us that one word can sound more negative than the other.",
    "options": [
      "vocabulary",
      "etymology",
      "semantics",
      "advocacy"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "When my mum asks \"Is the door open?\", she usually wants me to close it, and _____ explains how we understand these hidden requests.",
    "options": [
      "iconoclast",
      "synonym",
      "interpreter",
      "pragmatics"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The dictionary team searched a huge _____ of newspapers and websites, so they could see how often people really use each word.",
    "options": [
      "corpus",
      "assurance",
      "politeness",
      "neophyte"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The word \"unhappy\" has two parts, and each _____ adds meaning, because \"un\" means \"not\" and \"happy\" means \"glad\".",
    "options": [
      "phonics",
      "misgiving",
      "antithesis",
      "morpheme"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "English learners in Taiwan often mix up the sounds in \"light\" and \"right\", because each _____ does not exist separately in their first language.",
    "options": [
      "honorific",
      "maverick",
      "phoneme",
      "idiom"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The word \"banana\" has three _____, and English speakers usually put the strongest sound on the middle one.",
    "options": [
      "loanword",
      "syllable",
      "protagonist",
      "apostrophe"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "If you add the _____ \"re\" to \"write\", you get \"rewrite\", and the new word means \"write again\".",
    "options": [
      "misgiving",
      "formality",
      "prefix",
      "definition"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The _____ \"ness\" turns adjectives into nouns, so \"kind\" becomes \"kindness\" and \"dark\" becomes \"darkness\".",
    "options": [
      "suffix",
      "dissonance",
      "Esperanto",
      "disdain"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Learning one common _____ can help you guess hundreds of new words, because the same pieces appear again and again.",
    "options": [
      "shadowing",
      "proverb",
      "catharsis",
      "affix"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The _____ \"port\" means \"carry\", so once you know it, words like \"transport\" and \"export\" become much easier to remember.",
    "options": [
      "official language",
      "word root",
      "language contact",
      "mother tongue"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "English adds an _____ like \"-s\" or \"-ed\" to many words, but Chinese verbs never change their form at all.",
    "options": [
      "circumlocution",
      "synonym",
      "punctuation",
      "inflection"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "\"Toothbrush\" is a _____ made from \"tooth\" and \"brush\", and German has even longer examples than English.",
    "options": [
      "tongue twister",
      "vocal cords",
      "compound word",
      "language partner"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "In English the _____ is usually subject, verb, object, but in Japanese the verb normally comes at the end.",
    "options": [
      "second language",
      "word order",
      "language partner",
      "question mark"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "My writing teacher told me to vary my _____, because using only short simple sentences makes an essay sound boring.",
    "options": [
      "sentence structure",
      "silent letter",
      "target language",
      "linguistic diversity"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Many students hate learning _____ rules, but these rules help them write clearly and avoid confusing their readers.",
    "options": [
      "duplicity",
      "clarification",
      "oxymoron",
      "grammar"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The essay had a few _____ mistakes, but the ideas were so interesting that the teacher still gave it a high score.",
    "options": [
      "faithful",
      "effusive",
      "grammatical",
      "parochial"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Old grammar books were very _____ and told readers never to end a sentence with a preposition, but modern writers often ignore that rule.",
    "options": [
      "whimsical",
      "prescriptive",
      "jocular",
      "conciliatory"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The sentence \"He go to school yesterday\" is _____, so the teacher circled it and asked the student to correct the verb.",
    "options": [
      "ungrammatical",
      "tongue-tied",
      "reprehensible",
      "fluent"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "\"Light\" can be a noun, a verb or an adjective, so you must check the sentence to decide its _____.",
    "options": [
      "language rights",
      "question mark",
      "part of speech",
      "linguistic diversity"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The English word \"night\" and the German word \"Nacht\" are _____, and that is why they look and sound so similar.",
    "options": [
      "subtitling",
      "expat",
      "autocorrect",
      "cognate"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Most English nouns add \"s\" to form the _____, but some, like \"child\" and \"mouse\", change in strange ways.",
    "options": [
      "vocabulary",
      "plural",
      "accent",
      "spelling"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "\"News\" looks like a plural noun, but it is actually _____, so we say \"the news is good\" and not \"the news are good\".",
    "options": [
      "singular",
      "incoherent",
      "trilingual",
      "unassuming"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Science reports often use the _____, so writers say \"the water was heated\" instead of \"we heated the water\".",
    "options": [
      "vocal cords",
      "crash course",
      "language partner",
      "passive voice"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "In Spanish class we had to _____ twenty verbs every week, and I often forgot the endings for \"we\" and \"they\".",
    "options": [
      "conjugate",
      "opine",
      "self-correct",
      "obviate"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "linguistics": {
    "pos": "n.",
    "en_def": "the scientific study of language",
    "cn_def": "語言學"
  },
  "linguist": {
    "pos": "n.",
    "en_def": "a person who studies how languages work",
    "cn_def": "語言學家"
  },
  "linguistic": {
    "pos": "adj.",
    "en_def": "connected with language",
    "cn_def": "語言的"
  },
  "sociolinguistics": {
    "pos": "n.",
    "en_def": "the study of how language and society affect each other",
    "cn_def": "社會語言學"
  },
  "psycholinguistics": {
    "pos": "n.",
    "en_def": "the study of how the mind uses and understands language",
    "cn_def": "心理語言學"
  },
  "phonetics": {
    "pos": "n.",
    "en_def": "the study of speech sounds",
    "cn_def": "語音學"
  },
  "semantics": {
    "pos": "n.",
    "en_def": "the study of the meaning of words and sentences",
    "cn_def": "語意學"
  },
  "pragmatics": {
    "pos": "n.",
    "en_def": "the study of how context changes what we mean",
    "cn_def": "語用學"
  },
  "corpus": {
    "pos": "n.",
    "en_def": "a large collection of real texts used for language study",
    "cn_def": "語料庫"
  },
  "morpheme": {
    "pos": "n.",
    "en_def": "the smallest part of a word that has meaning",
    "cn_def": "詞素"
  },
  "phoneme": {
    "pos": "n.",
    "en_def": "one of the smallest sound units in a language",
    "cn_def": "音素"
  },
  "syllable": {
    "pos": "n.",
    "en_def": "a part of a word with one vowel sound",
    "cn_def": "音節"
  },
  "prefix": {
    "pos": "n.",
    "en_def": "letters added to the start of a word to change its meaning",
    "cn_def": "字首"
  },
  "suffix": {
    "pos": "n.",
    "en_def": "letters added to the end of a word",
    "cn_def": "字尾"
  },
  "affix": {
    "pos": "n.",
    "en_def": "a prefix or a suffix",
    "cn_def": "詞綴"
  },
  "word root": {
    "pos": "n.phr.",
    "en_def": "the main part of a word that carries its basic meaning",
    "cn_def": "字根"
  },
  "inflection": {
    "pos": "n.",
    "en_def": "a change in a word's ending to show tense, number, etc.",
    "cn_def": "字尾變化；詞形變化"
  },
  "compound word": {
    "pos": "n.phr.",
    "en_def": "a word made from two or more words",
    "cn_def": "複合字"
  },
  "word order": {
    "pos": "n.phr.",
    "en_def": "the order in which words are arranged in a sentence",
    "cn_def": "詞序；字序"
  },
  "sentence structure": {
    "pos": "n.phr.",
    "en_def": "the way words are put together to form a sentence",
    "cn_def": "句子結構"
  },
  "grammar": {
    "pos": "n.",
    "en_def": "the rules for forming words and sentences",
    "cn_def": "文法"
  },
  "grammatical": {
    "pos": "adj.",
    "en_def": "following or connected with the rules of grammar",
    "cn_def": "文法上的"
  },
  "prescriptive": {
    "pos": "adj.",
    "en_def": "telling people how they should use language",
    "cn_def": "規範性的"
  },
  "ungrammatical": {
    "pos": "adj.",
    "en_def": "not following the rules of grammar",
    "cn_def": "不合文法的"
  },
  "part of speech": {
    "pos": "n.phr.",
    "en_def": "a word class such as noun, verb or adjective",
    "cn_def": "詞性"
  },
  "cognate": {
    "pos": "n.",
    "en_def": "a word that has the same origin as a word in another language",
    "cn_def": "同源字"
  },
  "plural": {
    "pos": "n.",
    "en_def": "the form of a word that means more than one",
    "cn_def": "複數形"
  },
  "singular": {
    "pos": "adj.",
    "en_def": "showing only one person or thing",
    "cn_def": "單數的"
  },
  "passive voice": {
    "pos": "n.phr.",
    "en_def": "a sentence form where the subject receives the action",
    "cn_def": "被動語態"
  },
  "conjugate": {
    "pos": "v.",
    "en_def": "to list or change the forms of a verb",
    "cn_def": "（動詞）變化詞形"
  },
  "advocacy": {
    "pos": "n.",
    "en_def": "public support for an idea or group",
    "cn_def": "倡議；提倡"
  },
  "sycophant": {
    "pos": "n.",
    "en_def": "a person who praises powerful people to get advantages",
    "cn_def": "諂媚者；馬屁精"
  },
  "charisma": {
    "pos": "n.",
    "en_def": "a strong personal charm that attracts people",
    "cn_def": "領袖魅力；個人魅力"
  },
  "expat": {
    "pos": "n.",
    "en_def": "a person living in a foreign country",
    "cn_def": "旅居海外者；外籍人士"
  },
  "misgiving": {
    "pos": "n.",
    "en_def": "a feeling of doubt or worry",
    "cn_def": "疑慮；擔憂"
  },
  "compendium": {
    "pos": "n.",
    "en_def": "a book with a lot of information on one subject",
    "cn_def": "彙編；概要"
  },
  "wistful": {
    "pos": "adj.",
    "en_def": "sadly wishing for something",
    "cn_def": "惆悵的；渴望的"
  },
  "cross-cultural": {
    "pos": "adj.",
    "en_def": "involving two or more cultures",
    "cn_def": "跨文化的"
  },
  "brusque": {
    "pos": "adj.",
    "en_def": "short and rude in speech",
    "cn_def": "唐突的；粗魯簡短的"
  },
  "spelling": {
    "pos": "n.",
    "en_def": "the way letters form a word",
    "cn_def": "拼字"
  },
  "clarification": {
    "pos": "n.",
    "en_def": "an explanation that makes something clearer",
    "cn_def": "澄清；說明"
  },
  "calligraphy": {
    "pos": "n.",
    "en_def": "the art of beautiful handwriting",
    "cn_def": "書法"
  },
  "predilection": {
    "pos": "n.",
    "en_def": "a strong liking for something",
    "cn_def": "偏好；偏愛"
  },
  "repartee": {
    "pos": "n.",
    "en_def": "quick and clever replies in conversation",
    "cn_def": "機智應答"
  },
  "cursive": {
    "pos": "n.",
    "en_def": "handwriting where the letters are joined together",
    "cn_def": "草寫體"
  },
  "iconoclast": {
    "pos": "n.",
    "en_def": "a person who attacks traditional ideas",
    "cn_def": "反傳統者；打破舊習的人"
  },
  "honorific": {
    "pos": "n.",
    "en_def": "a word or title that shows respect",
    "cn_def": "敬語；尊稱"
  },
  "heresy": {
    "pos": "n.",
    "en_def": "an idea that strongly opposes accepted beliefs",
    "cn_def": "異端邪說"
  },
  "vocabulary": {
    "pos": "n.",
    "en_def": "all the words a person knows or uses",
    "cn_def": "字彙；詞彙量"
  },
  "etymology": {
    "pos": "n.",
    "en_def": "the history and origin of a word",
    "cn_def": "字源；詞源"
  },
  "synonym": {
    "pos": "n.",
    "en_def": "a word with the same or a similar meaning",
    "cn_def": "同義字"
  },
  "interpreter": {
    "pos": "n.",
    "en_def": "a person who changes spoken words into another language",
    "cn_def": "口譯員"
  },
  "assurance": {
    "pos": "n.",
    "en_def": "a promise that makes someone feel confident",
    "cn_def": "保證；擔保"
  },
  "politeness": {
    "pos": "n.",
    "en_def": "the quality of behaving and speaking with respect",
    "cn_def": "禮貌"
  },
  "neophyte": {
    "pos": "n.",
    "en_def": "a beginner",
    "cn_def": "新手；初學者"
  },
  "phonics": {
    "pos": "n.",
    "en_def": "a way of teaching reading through letter sounds",
    "cn_def": "自然發音法"
  },
  "antithesis": {
    "pos": "n.",
    "en_def": "the exact opposite",
    "cn_def": "正好相反；對立面"
  },
  "maverick": {
    "pos": "n.",
    "en_def": "a person who thinks and acts independently",
    "cn_def": "特立獨行的人"
  },
  "idiom": {
    "pos": "n.",
    "en_def": "a group of words whose meaning is different from the single words",
    "cn_def": "慣用語；成語"
  },
  "loanword": {
    "pos": "n.",
    "en_def": "a word taken from another language",
    "cn_def": "外來語；借詞"
  },
  "protagonist": {
    "pos": "n.",
    "en_def": "the main character in a story",
    "cn_def": "主角"
  },
  "apostrophe": {
    "pos": "n.",
    "en_def": "the mark ( ' ) used in words like \"it's\" or \"Tom's\"",
    "cn_def": "撇號"
  },
  "formality": {
    "pos": "n.",
    "en_def": "the level of politeness and seriousness in language",
    "cn_def": "正式程度"
  },
  "definition": {
    "pos": "n.",
    "en_def": "a statement that explains what a word means",
    "cn_def": "定義"
  },
  "dissonance": {
    "pos": "n.",
    "en_def": "a lack of agreement or harmony",
    "cn_def": "不和諧；不一致"
  },
  "esperanto": {
    "pos": "n.",
    "en_def": "an invented language created to be easy for everyone",
    "cn_def": "世界語"
  },
  "disdain": {
    "pos": "n.",
    "en_def": "a feeling that something is not worth respect",
    "cn_def": "鄙視；輕蔑"
  },
  "shadowing": {
    "pos": "n.",
    "en_def": "repeating what a speaker says right after hearing it",
    "cn_def": "跟讀法"
  },
  "proverb": {
    "pos": "n.",
    "en_def": "a short well-known saying that gives advice",
    "cn_def": "諺語"
  },
  "catharsis": {
    "pos": "n.",
    "en_def": "a release of strong emotions that makes you feel better",
    "cn_def": "情緒宣洩；淨化"
  },
  "official language": {
    "pos": "n.phr.",
    "en_def": "a language used by a government and in law",
    "cn_def": "官方語言"
  },
  "language contact": {
    "pos": "n.phr.",
    "en_def": "when speakers of different languages meet and influence each other",
    "cn_def": "語言接觸"
  },
  "mother tongue": {
    "pos": "n.phr.",
    "en_def": "the first language you learned as a child",
    "cn_def": "母語"
  },
  "circumlocution": {
    "pos": "n.",
    "en_def": "using many words when a few would do",
    "cn_def": "拐彎抹角；迂迴說法"
  },
  "punctuation": {
    "pos": "n.",
    "en_def": "marks like commas and full stops used in writing",
    "cn_def": "標點符號"
  },
  "tongue twister": {
    "pos": "n.phr.",
    "en_def": "a phrase that is difficult to say quickly",
    "cn_def": "繞口令"
  },
  "vocal cords": {
    "pos": "n.phr.",
    "en_def": "parts in your throat that make the sound of your voice",
    "cn_def": "聲帶"
  },
  "language partner": {
    "pos": "n.phr.",
    "en_def": "a person you practise a language with",
    "cn_def": "語伴"
  },
  "second language": {
    "pos": "n.phr.",
    "en_def": "a language you learn after your first one",
    "cn_def": "第二語言"
  },
  "question mark": {
    "pos": "n.phr.",
    "en_def": "the mark ( ? ) at the end of a question",
    "cn_def": "問號"
  },
  "silent letter": {
    "pos": "n.phr.",
    "en_def": "a letter that is written but not pronounced",
    "cn_def": "不發音字母"
  },
  "target language": {
    "pos": "n.phr.",
    "en_def": "the language you are learning or translating into",
    "cn_def": "目標語言"
  },
  "linguistic diversity": {
    "pos": "n.phr.",
    "en_def": "the variety of different languages in a place",
    "cn_def": "語言多樣性"
  },
  "duplicity": {
    "pos": "n.",
    "en_def": "dishonest behaviour meant to trick people",
    "cn_def": "欺騙；口是心非"
  },
  "oxymoron": {
    "pos": "n.",
    "en_def": "two words with opposite meanings used together",
    "cn_def": "矛盾修飾法"
  },
  "faithful": {
    "pos": "adj.",
    "en_def": "keeping close to the original meaning",
    "cn_def": "忠實的"
  },
  "effusive": {
    "pos": "adj.",
    "en_def": "showing a lot of feeling, especially praise",
    "cn_def": "熱情洋溢的；過分熱情的"
  },
  "parochial": {
    "pos": "adj.",
    "en_def": "only interested in your own small area",
    "cn_def": "狹隘的；地方性的"
  },
  "whimsical": {
    "pos": "adj.",
    "en_def": "playful and unusual",
    "cn_def": "異想天開的；古怪有趣的"
  },
  "jocular": {
    "pos": "adj.",
    "en_def": "funny and joking",
    "cn_def": "詼諧的；愛開玩笑的"
  },
  "conciliatory": {
    "pos": "adj.",
    "en_def": "trying to end an argument and make peace",
    "cn_def": "安撫的；和解的"
  },
  "tongue-tied": {
    "pos": "adj.",
    "en_def": "unable to speak because you are nervous",
    "cn_def": "緊張得說不出話"
  },
  "reprehensible": {
    "pos": "adj.",
    "en_def": "very bad and deserving blame",
    "cn_def": "應受譴責的"
  },
  "fluent": {
    "pos": "adj.",
    "en_def": "able to speak a language easily and well",
    "cn_def": "流利的"
  },
  "language rights": {
    "pos": "n.phr.",
    "en_def": "people's right to use their own language",
    "cn_def": "語言權"
  },
  "subtitling": {
    "pos": "n.",
    "en_def": "the work of adding translated words at the bottom of a screen",
    "cn_def": "字幕翻譯"
  },
  "autocorrect": {
    "pos": "n.",
    "en_def": "a phone function that changes words it thinks are wrong",
    "cn_def": "自動校正"
  },
  "accent": {
    "pos": "n.",
    "en_def": "a way of pronouncing a language that shows where you are from",
    "cn_def": "口音"
  },
  "incoherent": {
    "pos": "adj.",
    "en_def": "not clear or easy to understand",
    "cn_def": "語無倫次的；不連貫的"
  },
  "trilingual": {
    "pos": "adj.",
    "en_def": "able to speak three languages",
    "cn_def": "會說三種語言的"
  },
  "unassuming": {
    "pos": "adj.",
    "en_def": "modest and not wanting attention",
    "cn_def": "謙遜的；不張揚的"
  },
  "crash course": {
    "pos": "n.phr.",
    "en_def": "a short, fast course that teaches the basics",
    "cn_def": "速成課程"
  },
  "opine": {
    "pos": "v.",
    "en_def": "to give your opinion",
    "cn_def": "發表意見"
  },
  "self-correct": {
    "pos": "v.",
    "en_def": "to notice and fix your own mistakes",
    "cn_def": "自我修正"
  },
  "obviate": {
    "pos": "v.",
    "en_def": "to remove the need for something",
    "cn_def": "免除；使不必要"
  }
};

const EXTRA_GLOSSES = {};
