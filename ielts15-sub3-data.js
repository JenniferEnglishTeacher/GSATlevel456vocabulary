// Topic 15 Subunit 3 Quiz Data: Words, Meaning & Usage 詞彙、語意與用法
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T15 S03 - Words, Meaning & Usage 詞彙、語意與用法",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "synonym",
    "pos": "n.",
    "cn_def": "同義字",
    "en_def": "a word with the same or a similar meaning",
    "sentence": "\"Big\" is a {{BLANK}} for \"large\", but writers often choose \"huge\" or \"enormous\" when they want a stronger effect.",
    "cn": "「big」是「large」的同義字，但當作者想要更強的效果時，常會選擇「huge」或「enormous」。"
  },
  {
    "word": "antonym",
    "pos": "n.",
    "cn_def": "反義字",
    "en_def": "a word with the opposite meaning",
    "sentence": "The {{BLANK}} of \"generous\" is \"mean\", and learning words in opposite pairs makes them easier to remember.",
    "cn": "「generous」的反義字是「mean」，而以相反詞成對學習單字會讓它們更容易記住。"
  },
  {
    "word": "homophone",
    "pos": "n.",
    "cn_def": "同音異義字",
    "en_def": "a word that sounds like another but has a different meaning",
    "sentence": "\"Their\" and \"there\" are {{BLANK}}, so even native speakers sometimes mix them up when they type quickly.",
    "cn": "「their」和「there」是同音異義字，所以即使是母語人士快速打字時有時也會搞混。"
  },
  {
    "word": "homonym",
    "pos": "n.",
    "cn_def": "同形同音異義字",
    "en_def": "a word spelled and said the same as another but with a different meaning",
    "sentence": "\"Bat\" is a {{BLANK}}, because it can mean an animal that flies at night or the stick used in baseball.",
    "cn": "「bat」是一個同形同音異義字，因為它可以指晚上飛的動物，也可以指棒球用的球棒。"
  },
  {
    "word": "idiom",
    "pos": "n.",
    "cn_def": "慣用語；成語",
    "en_def": "a group of words whose meaning is different from the single words",
    "sentence": "\"It's raining cats and dogs\" is a famous {{BLANK}}, but you will never see real animals falling from the sky.",
    "cn": "「It's raining cats and dogs」是一個很有名的慣用語，但你永遠不會看到真的動物從天上掉下來。"
  },
  {
    "word": "idiomatic",
    "pos": "adj.",
    "cn_def": "道地的；慣用的",
    "en_def": "natural and typical of native speakers",
    "sentence": "Watching TV series helped Kevin learn {{BLANK}} English, so his speaking now sounds much less like a textbook.",
    "cn": "看影集幫助凱文學到道地的英文，所以他現在說話聽起來不那麼像課本了。"
  },
  {
    "word": "proverb",
    "pos": "n.",
    "cn_def": "諺語",
    "en_def": "a short well-known saying that gives advice",
    "sentence": "My grandmother often quotes the {{BLANK}} \"Slow and steady wins the race\", because she wants me to study a little every day.",
    "cn": "我奶奶常常引用諺語「慢而穩者勝」，因為她希望我每天讀一點書。"
  },
  {
    "word": "collocation",
    "pos": "n.",
    "cn_def": "搭配詞",
    "en_def": "words that are often used together",
    "sentence": "We say \"make a mistake\" but not \"do a mistake\", and learning each common {{BLANK}} makes your English sound natural.",
    "cn": "我們說「make a mistake」而不是「do a mistake」，而學會每個常見的搭配詞會讓你的英文聽起來很自然。"
  },
  {
    "word": "phrasal verb",
    "pos": "n.phr.",
    "cn_def": "片語動詞",
    "en_def": "a verb plus a small word like \"up\" or \"off\"",
    "sentence": "\"Give up\" is a common {{BLANK}}, and it means to stop trying, which is very different from \"give\".",
    "cn": "「give up」是一個常見的片語動詞，意思是放棄嘗試，這和「give」的意思非常不同。"
  },
  {
    "word": "denotation",
    "pos": "n.",
    "cn_def": "字面意義；本義",
    "en_def": "the basic dictionary meaning of a word",
    "sentence": "The {{BLANK}} of \"home\" is simply a place where you live, but the word also makes many people think of warmth and family.",
    "cn": "「home」的本義只是你居住的地方，但這個字也讓許多人聯想到溫暖和家庭。"
  },
  {
    "word": "literally",
    "pos": "adv.",
    "cn_def": "照字面地；真正地",
    "en_def": "in the exact, basic meaning of the words",
    "sentence": "The German word \"Handschuh\" {{BLANK}} means \"hand shoe\", and that is why many learners find it funny.",
    "cn": "德文字「Handschuh」照字面意思是「手鞋」，這就是許多學習者覺得它很好笑的原因。"
  },
  {
    "word": "definition",
    "pos": "n.",
    "cn_def": "定義",
    "en_def": "a statement that explains what a word means",
    "sentence": "I could not understand the {{BLANK}} in my English dictionary, so I looked at the example sentence instead, and it was much clearer.",
    "cn": "我看不懂英文字典裡的定義，所以我改看例句，結果清楚多了。"
  },
  {
    "word": "informal",
    "pos": "adj.",
    "cn_def": "非正式的",
    "en_def": "relaxed and used with friends, not in official situations",
    "sentence": "\"Hey, what's up?\" is fine in {{BLANK}} chats with friends, but you should not use it in an email to your teacher.",
    "cn": "「Hey, what's up?」在和朋友非正式的聊天中沒問題，但你不應該在寫給老師的電子郵件中使用它。"
  },
  {
    "word": "loanword",
    "pos": "n.",
    "cn_def": "外來語；借詞",
    "en_def": "a word taken from another language",
    "sentence": "\"Sushi\" is a {{BLANK}} from Japanese, and English has also borrowed words like \"tea\" from Chinese.",
    "cn": "「sushi」是來自日文的外來語，而英文也從中文借了像「tea」這樣的字。"
  },
  {
    "word": "neologism",
    "pos": "n.",
    "cn_def": "新造詞",
    "en_def": "a newly invented word",
    "sentence": "\"Selfie\" was once a {{BLANK}}, but it became so popular that it was added to major dictionaries in just a few years.",
    "cn": "「selfie」曾經是一個新造詞，但它變得非常流行，所以短短幾年內就被收入主要字典。"
  },
  {
    "word": "etymology",
    "pos": "n.",
    "cn_def": "字源；詞源",
    "en_def": "the history and origin of a word",
    "sentence": "I love reading about {{BLANK}}, because finding out that \"salary\" comes from the Latin word for salt is really fun.",
    "cn": "我喜歡閱讀關於字源的東西，因為發現「salary」來自拉丁文的「鹽」真的很有趣。"
  },
  {
    "word": "abbreviation",
    "pos": "n.",
    "cn_def": "縮寫",
    "en_def": "a short form of a word or phrase",
    "sentence": "\"Dr\" is an {{BLANK}} of \"Doctor\", and you will see many short forms like this on signs and forms.",
    "cn": "「Dr」是「Doctor」的縮寫，而你會在標誌和表格上看到許多像這樣的簡短形式。"
  },
  {
    "word": "spelling",
    "pos": "n.",
    "cn_def": "拼字",
    "en_def": "the way letters form a word",
    "sentence": "English {{BLANK}} can be very confusing, because \"though\", \"through\" and \"tough\" all look similar but sound different.",
    "cn": "英文拼字可能非常令人困惑，因為「though」、「through」和「tough」看起來很像，但發音不同。"
  },
  {
    "word": "misspell",
    "pos": "v.",
    "cn_def": "拼錯",
    "en_def": "to spell a word wrongly",
    "sentence": "I {{BLANK}} my teacher's name on the birthday card, so I felt embarrassed and wrote her a new one.",
    "cn": "我在生日卡上拼錯了老師的名字，所以我覺得很尷尬，又重新寫了一張給她。"
  },
  {
    "word": "vocabulary",
    "pos": "n.",
    "cn_def": "字彙；詞彙量",
    "en_def": "all the words a person knows or uses",
    "sentence": "Reading for twenty minutes a day can grow your {{BLANK}} quickly, and you will also learn how words are used in real sentences.",
    "cn": "每天閱讀二十分鐘能快速增加你的字彙，而且你也會學到單字在真實句子中如何使用。"
  },
  {
    "word": "word family",
    "pos": "n.phr.",
    "cn_def": "字族",
    "en_def": "a group of words that share the same root",
    "sentence": "\"Decide\", \"decision\" and \"decisive\" belong to the same {{BLANK}}, so learning one helps you understand the others.",
    "cn": "「decide」、「decision」和「decisive」屬於同一個字族，所以學會其中一個能幫助你理解其他的。"
  },
  {
    "word": "profanity",
    "pos": "n.",
    "cn_def": "髒話；粗話",
    "en_def": "rude or offensive words",
    "sentence": "The film contains a lot of {{BLANK}}, so the cinema did not allow children under fifteen to watch it.",
    "cn": "那部電影包含大量的髒話，所以電影院不允許十五歲以下的孩子觀看。"
  },
  {
    "word": "pun",
    "pos": "n.",
    "cn_def": "雙關語",
    "en_def": "a joke that uses a word with two meanings",
    "sentence": "My dad loves telling a bad {{BLANK}} at dinner, like \"I'm reading a book about glue, and I can't put it down.\"",
    "cn": "我爸爸喜歡在晚餐時講冷雙關語，像是「我在讀一本關於膠水的書，我放不下它。」"
  },
  {
    "word": "wordplay",
    "pos": "n.",
    "cn_def": "文字遊戲",
    "en_def": "the clever or funny use of words",
    "sentence": "Advertisers often use {{BLANK}} in their slogans, because a clever joke helps customers remember the product.",
    "cn": "廣告商常常在標語中使用文字遊戲，因為巧妙的玩笑能幫助顧客記住產品。"
  },
  {
    "word": "palindrome",
    "pos": "n.",
    "cn_def": "迴文",
    "en_def": "a word that reads the same backwards and forwards",
    "sentence": "\"Level\" is a {{BLANK}}, because you can read it from the left or from the right and it stays the same.",
    "cn": "「level」是一個迴文，因為你可以從左邊或右邊讀它，而它都保持不變。"
  },
  {
    "word": "onomatopoeia",
    "pos": "n.",
    "cn_def": "擬聲詞；狀聲詞",
    "en_def": "a word that copies the sound it describes",
    "sentence": "Comic books are full of {{BLANK}} like \"boom\" and \"crash\", and these sound words make the action feel exciting.",
    "cn": "漫畫書裡充滿了像「boom」和「crash」這樣的狀聲詞，而這些聲音詞讓動作場面感覺很刺激。"
  },
  {
    "word": "simile",
    "pos": "n.",
    "cn_def": "明喻",
    "en_def": "a comparison using \"like\" or \"as\"",
    "sentence": "\"She runs like the wind\" is a {{BLANK}}, and writers use comparisons like this to help readers picture a scene.",
    "cn": "「她跑得像風一樣」是一個明喻，而作家用這樣的比較來幫助讀者想像畫面。"
  },
  {
    "word": "alliteration",
    "pos": "n.",
    "cn_def": "頭韻",
    "en_def": "using several words that start with the same sound",
    "sentence": "Many brands use {{BLANK}}, like \"Coca-Cola\" and \"PayPal\", because names with repeated sounds are easy to remember.",
    "cn": "許多品牌使用頭韻，像「Coca-Cola」和「PayPal」，因為有重複聲音的名字很容易記住。"
  },
  {
    "word": "oxymoron",
    "pos": "n.",
    "cn_def": "矛盾修飾法",
    "en_def": "two words with opposite meanings used together",
    "sentence": "\"Jumbo shrimp\" is a funny {{BLANK}}, because \"jumbo\" means very big while \"shrimp\" usually means something small.",
    "cn": "「jumbo shrimp（巨無霸小蝦）」是一個有趣的矛盾修飾法，因為「jumbo」表示非常大，而「shrimp」通常表示很小的東西。"
  },
  {
    "word": "usage",
    "pos": "n.",
    "cn_def": "用法",
    "en_def": "the way words are normally used",
    "sentence": "The dictionary gives notes on {{BLANK}}, so learners can see whether a word is polite, rude, formal or old-fashioned.",
    "cn": "這本字典有關於用法的說明，所以學習者能看出一個字是禮貌的、粗魯的、正式的還是過時的。"
  }
];

const MCQS = [
  {
    "q": "\"Big\" is a _____ for \"large\", but writers often choose \"huge\" or \"enormous\" when they want a stronger effect.",
    "options": [
      "pinyin",
      "lip-reading",
      "synonym",
      "cognate"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The _____ of \"generous\" is \"mean\", and learning words in opposite pairs makes them easier to remember.",
    "options": [
      "vernacular",
      "antonym",
      "apostrophe",
      "Esperanto"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "\"Their\" and \"there\" are _____, so even native speakers sometimes mix them up when they type quickly.",
    "options": [
      "psycholinguistics",
      "affix",
      "heresy",
      "homophone"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "\"Bat\" is a _____, because it can mean an animal that flies at night or the stick used in baseball.",
    "options": [
      "homonym",
      "translator",
      "maverick",
      "duplicity"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "\"It's raining cats and dogs\" is a famous _____, but you will never see real animals falling from the sky.",
    "options": [
      "paragon",
      "idiom",
      "phonetics",
      "proto-language"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Watching TV series helped Kevin learn _____ English, so his speaking now sounds much less like a textbook.",
    "options": [
      "idiomatic",
      "intercultural",
      "bemused",
      "implacable"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "My grandmother often quotes the _____ \"Slow and steady wins the race\", because she wants me to study a little every day.",
    "options": [
      "probity",
      "repartee",
      "misgiving",
      "proverb"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "We say \"make a mistake\" but not \"do a mistake\", and learning each common _____ makes your English sound natural.",
    "options": [
      "plural",
      "compendium",
      "collocation",
      "repartee"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "\"Give up\" is a common _____, and it means to stop trying, which is very different from \"give\".",
    "options": [
      "language shift",
      "native speaker",
      "language contact",
      "phrasal verb"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The _____ of \"home\" is simply a place where you live, but the word also makes many people think of warmth and family.",
    "options": [
      "approbation",
      "anachronism",
      "denotation",
      "affix"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The German word \"Handschuh\" _____ means \"hand shoe\", and that is why many learners find it funny.",
    "options": [
      "loosely",
      "literally",
      "strictly",
      "interchangeably"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "I could not understand the _____ in my English dictionary, so I looked at the example sentence instead, and it was much clearer.",
    "options": [
      "definition",
      "consonant",
      "appendix",
      "guile"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "\"Hey, what's up?\" is fine in _____ chats with friends, but you should not use it in an email to your teacher.",
    "options": [
      "infallible",
      "petulant",
      "intransigent",
      "informal"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "\"Sushi\" is a _____ from Japanese, and English has also borrowed words like \"tea\" from Chinese.",
    "options": [
      "voice-over",
      "proto-language",
      "loanword",
      "allegory"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "\"Selfie\" was once a _____, but it became so popular that it was added to major dictionaries in just a few years.",
    "options": [
      "neologism",
      "phonics",
      "ideogram",
      "attribution"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "I love reading about _____, because finding out that \"salary\" comes from the Latin word for salt is really fun.",
    "options": [
      "cadence",
      "etymology",
      "typo",
      "footnote"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "\"Dr\" is an _____ of \"Doctor\", and you will see many short forms like this on signs and forms.",
    "options": [
      "romanisation",
      "corpus",
      "morpheme",
      "abbreviation"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "English _____ can be very confusing, because \"though\", \"through\" and \"tough\" all look similar but sound different.",
    "options": [
      "eulogy",
      "punctuation",
      "spelling",
      "nostalgia"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "I _____ my teacher's name on the birthday card, so I felt embarrassed and wrote her a new one.",
    "options": [
      "self-correct",
      "misspell",
      "vex",
      "liaise"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Reading for twenty minutes a day can grow your _____ quickly, and you will also learn how words are used in real sentences.",
    "options": [
      "vocabulary",
      "neophyte",
      "assent",
      "paragon"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "\"Decide\", \"decision\" and \"decisive\" belong to the same _____, so learning one helps you understand the others.",
    "options": [
      "minority language",
      "speech therapist",
      "word family",
      "part of speech"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The film contains a lot of _____, so the cinema did not allow children under fifteen to watch it.",
    "options": [
      "autocorrect",
      "profanity",
      "apostrophe",
      "handwriting"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "My dad loves telling a bad _____ at dinner, like \"I'm reading a book about glue, and I can't put it down.\"",
    "options": [
      "sycophant",
      "linguistics",
      "interlocutor",
      "pun"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Advertisers often use _____ in their slogans, because a clever joke helps customers remember the product.",
    "options": [
      "wordplay",
      "script",
      "allocation",
      "verbiage"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "\"Level\" is a _____, because you can read it from the left or from the right and it stays the same.",
    "options": [
      "decorum",
      "palindrome",
      "compendium",
      "linguistics"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Comic books are full of _____ like \"boom\" and \"crash\", and these sound words make the action feel exciting.",
    "options": [
      "pariah",
      "quip",
      "onomatopoeia",
      "appreciation"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "\"She runs like the wind\" is a _____, and writers use comparisons like this to help readers picture a scene.",
    "options": [
      "pariah",
      "earpiece",
      "grammar",
      "simile"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Many brands use _____, like \"Coca-Cola\" and \"PayPal\", because names with repeated sounds are easy to remember.",
    "options": [
      "alliteration",
      "typo",
      "footnote",
      "comma"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "\"Jumbo shrimp\" is a funny _____, because \"jumbo\" means very big while \"shrimp\" usually means something small.",
    "options": [
      "corpus",
      "oxymoron",
      "catharsis",
      "candour"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The dictionary gives notes on _____, so learners can see whether a word is polite, rude, formal or old-fashioned.",
    "options": [
      "formality",
      "circumlocution",
      "script",
      "usage"
    ],
    "answer": 3,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "synonym": {
    "pos": "n.",
    "en_def": "a word with the same or a similar meaning",
    "cn_def": "同義字"
  },
  "antonym": {
    "pos": "n.",
    "en_def": "a word with the opposite meaning",
    "cn_def": "反義字"
  },
  "homophone": {
    "pos": "n.",
    "en_def": "a word that sounds like another but has a different meaning",
    "cn_def": "同音異義字"
  },
  "homonym": {
    "pos": "n.",
    "en_def": "a word spelled and said the same as another but with a different meaning",
    "cn_def": "同形同音異義字"
  },
  "idiom": {
    "pos": "n.",
    "en_def": "a group of words whose meaning is different from the single words",
    "cn_def": "慣用語；成語"
  },
  "idiomatic": {
    "pos": "adj.",
    "en_def": "natural and typical of native speakers",
    "cn_def": "道地的；慣用的"
  },
  "proverb": {
    "pos": "n.",
    "en_def": "a short well-known saying that gives advice",
    "cn_def": "諺語"
  },
  "collocation": {
    "pos": "n.",
    "en_def": "words that are often used together",
    "cn_def": "搭配詞"
  },
  "phrasal verb": {
    "pos": "n.phr.",
    "en_def": "a verb plus a small word like \"up\" or \"off\"",
    "cn_def": "片語動詞"
  },
  "denotation": {
    "pos": "n.",
    "en_def": "the basic dictionary meaning of a word",
    "cn_def": "字面意義；本義"
  },
  "literally": {
    "pos": "adv.",
    "en_def": "in the exact, basic meaning of the words",
    "cn_def": "照字面地；真正地"
  },
  "definition": {
    "pos": "n.",
    "en_def": "a statement that explains what a word means",
    "cn_def": "定義"
  },
  "informal": {
    "pos": "adj.",
    "en_def": "relaxed and used with friends, not in official situations",
    "cn_def": "非正式的"
  },
  "loanword": {
    "pos": "n.",
    "en_def": "a word taken from another language",
    "cn_def": "外來語；借詞"
  },
  "neologism": {
    "pos": "n.",
    "en_def": "a newly invented word",
    "cn_def": "新造詞"
  },
  "etymology": {
    "pos": "n.",
    "en_def": "the history and origin of a word",
    "cn_def": "字源；詞源"
  },
  "abbreviation": {
    "pos": "n.",
    "en_def": "a short form of a word or phrase",
    "cn_def": "縮寫"
  },
  "spelling": {
    "pos": "n.",
    "en_def": "the way letters form a word",
    "cn_def": "拼字"
  },
  "misspell": {
    "pos": "v.",
    "en_def": "to spell a word wrongly",
    "cn_def": "拼錯"
  },
  "vocabulary": {
    "pos": "n.",
    "en_def": "all the words a person knows or uses",
    "cn_def": "字彙；詞彙量"
  },
  "word family": {
    "pos": "n.phr.",
    "en_def": "a group of words that share the same root",
    "cn_def": "字族"
  },
  "profanity": {
    "pos": "n.",
    "en_def": "rude or offensive words",
    "cn_def": "髒話；粗話"
  },
  "pun": {
    "pos": "n.",
    "en_def": "a joke that uses a word with two meanings",
    "cn_def": "雙關語"
  },
  "wordplay": {
    "pos": "n.",
    "en_def": "the clever or funny use of words",
    "cn_def": "文字遊戲"
  },
  "palindrome": {
    "pos": "n.",
    "en_def": "a word that reads the same backwards and forwards",
    "cn_def": "迴文"
  },
  "onomatopoeia": {
    "pos": "n.",
    "en_def": "a word that copies the sound it describes",
    "cn_def": "擬聲詞；狀聲詞"
  },
  "simile": {
    "pos": "n.",
    "en_def": "a comparison using \"like\" or \"as\"",
    "cn_def": "明喻"
  },
  "alliteration": {
    "pos": "n.",
    "en_def": "using several words that start with the same sound",
    "cn_def": "頭韻"
  },
  "oxymoron": {
    "pos": "n.",
    "en_def": "two words with opposite meanings used together",
    "cn_def": "矛盾修飾法"
  },
  "usage": {
    "pos": "n.",
    "en_def": "the way words are normally used",
    "cn_def": "用法"
  },
  "pinyin": {
    "pos": "n.",
    "en_def": "the official system for writing Chinese sounds with Roman letters",
    "cn_def": "漢語拼音"
  },
  "lip-reading": {
    "pos": "n.",
    "en_def": "understanding speech by watching people's lips",
    "cn_def": "讀唇"
  },
  "cognate": {
    "pos": "n.",
    "en_def": "a word that has the same origin as a word in another language",
    "cn_def": "同源字"
  },
  "vernacular": {
    "pos": "n.",
    "en_def": "the everyday language spoken by ordinary people",
    "cn_def": "日常用語；方言白話"
  },
  "apostrophe": {
    "pos": "n.",
    "en_def": "the mark ( ' ) used in words like \"it's\" or \"Tom's\"",
    "cn_def": "撇號"
  },
  "esperanto": {
    "pos": "n.",
    "en_def": "an invented language created to be easy for everyone",
    "cn_def": "世界語"
  },
  "psycholinguistics": {
    "pos": "n.",
    "en_def": "the study of how the mind uses and understands language",
    "cn_def": "心理語言學"
  },
  "affix": {
    "pos": "n.",
    "en_def": "a prefix or a suffix",
    "cn_def": "詞綴"
  },
  "heresy": {
    "pos": "n.",
    "en_def": "an idea that strongly opposes accepted beliefs",
    "cn_def": "異端邪說"
  },
  "translator": {
    "pos": "n.",
    "en_def": "a person who changes written text into another language",
    "cn_def": "譯者；翻譯者"
  },
  "maverick": {
    "pos": "n.",
    "en_def": "a person who thinks and acts independently",
    "cn_def": "特立獨行的人"
  },
  "duplicity": {
    "pos": "n.",
    "en_def": "dishonest behaviour meant to trick people",
    "cn_def": "欺騙；口是心非"
  },
  "paragon": {
    "pos": "n.",
    "en_def": "a perfect example of a quality",
    "cn_def": "典範；模範"
  },
  "phonetics": {
    "pos": "n.",
    "en_def": "the study of speech sounds",
    "cn_def": "語音學"
  },
  "proto-language": {
    "pos": "n.",
    "en_def": "an ancient language that later languages developed from",
    "cn_def": "原始語"
  },
  "intercultural": {
    "pos": "adj.",
    "en_def": "between different cultures",
    "cn_def": "跨文化的"
  },
  "bemused": {
    "pos": "adj.",
    "en_def": "confused and puzzled",
    "cn_def": "困惑的"
  },
  "implacable": {
    "pos": "adj.",
    "en_def": "impossible to calm or change",
    "cn_def": "無法平息的；毫不妥協的"
  },
  "probity": {
    "pos": "n.",
    "en_def": "complete honesty",
    "cn_def": "正直；誠實"
  },
  "repartee": {
    "pos": "n.",
    "en_def": "quick and clever replies in conversation",
    "cn_def": "機智應答"
  },
  "misgiving": {
    "pos": "n.",
    "en_def": "a feeling of doubt or worry",
    "cn_def": "疑慮；擔憂"
  },
  "plural": {
    "pos": "n.",
    "en_def": "the form of a word that means more than one",
    "cn_def": "複數形"
  },
  "compendium": {
    "pos": "n.",
    "en_def": "a book with a lot of information on one subject",
    "cn_def": "彙編；概要"
  },
  "language shift": {
    "pos": "n.phr.",
    "en_def": "when a community stops using one language and uses another",
    "cn_def": "語言轉移"
  },
  "native speaker": {
    "pos": "n.phr.",
    "en_def": "a person who learned a language from birth",
    "cn_def": "母語人士"
  },
  "language contact": {
    "pos": "n.phr.",
    "en_def": "when speakers of different languages meet and influence each other",
    "cn_def": "語言接觸"
  },
  "approbation": {
    "pos": "n.",
    "en_def": "approval or praise",
    "cn_def": "讚許；認可"
  },
  "anachronism": {
    "pos": "n.",
    "en_def": "something placed in the wrong historical time",
    "cn_def": "時代錯置"
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
  "interchangeably": {
    "pos": "adv.",
    "en_def": "in a way that one can replace the other",
    "cn_def": "可互換地"
  },
  "consonant": {
    "pos": "n.",
    "en_def": "a speech sound that is not a vowel, like b, t or s",
    "cn_def": "子音"
  },
  "appendix": {
    "pos": "n.",
    "en_def": "extra information at the end of a book or report",
    "cn_def": "附錄"
  },
  "guile": {
    "pos": "n.",
    "en_def": "clever but dishonest behaviour",
    "cn_def": "狡詐；詭計"
  },
  "infallible": {
    "pos": "adj.",
    "en_def": "never wrong",
    "cn_def": "絕對正確的；萬無一失的"
  },
  "petulant": {
    "pos": "adj.",
    "en_def": "childishly bad-tempered",
    "cn_def": "任性的；暴躁的"
  },
  "intransigent": {
    "pos": "adj.",
    "en_def": "refusing to change your opinion",
    "cn_def": "不妥協的；固執己見的"
  },
  "voice-over": {
    "pos": "n.",
    "en_def": "a voice heard in a film or video without seeing the speaker",
    "cn_def": "旁白；畫外音"
  },
  "allegory": {
    "pos": "n.",
    "en_def": "a story with a hidden moral or political meaning",
    "cn_def": "寓言；諷喻"
  },
  "phonics": {
    "pos": "n.",
    "en_def": "a way of teaching reading through letter sounds",
    "cn_def": "自然發音法"
  },
  "ideogram": {
    "pos": "n.",
    "en_def": "a written symbol that shows an idea",
    "cn_def": "表意文字"
  },
  "attribution": {
    "pos": "n.",
    "en_def": "saying who wrote or created something",
    "cn_def": "出處標明；歸屬"
  },
  "cadence": {
    "pos": "n.",
    "en_def": "the rise and fall of the voice when speaking",
    "cn_def": "抑揚頓挫；語調節奏"
  },
  "typo": {
    "pos": "n.",
    "en_def": "a small mistake in typing",
    "cn_def": "打字錯誤"
  },
  "footnote": {
    "pos": "n.",
    "en_def": "a note at the bottom of a page",
    "cn_def": "註腳"
  },
  "romanisation": {
    "pos": "n.",
    "en_def": "writing a language in the Latin alphabet",
    "cn_def": "羅馬拼音化"
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
  "eulogy": {
    "pos": "n.",
    "en_def": "a speech praising someone who has died",
    "cn_def": "悼詞"
  },
  "punctuation": {
    "pos": "n.",
    "en_def": "marks like commas and full stops used in writing",
    "cn_def": "標點符號"
  },
  "nostalgia": {
    "pos": "n.",
    "en_def": "a happy but sad feeling about the past",
    "cn_def": "懷舊；思鄉之情"
  },
  "self-correct": {
    "pos": "v.",
    "en_def": "to notice and fix your own mistakes",
    "cn_def": "自我修正"
  },
  "vex": {
    "pos": "v.",
    "en_def": "to annoy or worry someone",
    "cn_def": "使煩惱；使惱火"
  },
  "liaise": {
    "pos": "v.",
    "en_def": "to work with and share information with others",
    "cn_def": "聯絡；協調"
  },
  "neophyte": {
    "pos": "n.",
    "en_def": "a beginner",
    "cn_def": "新手；初學者"
  },
  "assent": {
    "pos": "n.",
    "en_def": "agreement or approval",
    "cn_def": "同意；贊成"
  },
  "minority language": {
    "pos": "n.phr.",
    "en_def": "a language spoken by a small part of a population",
    "cn_def": "少數語言"
  },
  "speech therapist": {
    "pos": "n.phr.",
    "en_def": "a professional who helps people speak more clearly",
    "cn_def": "語言治療師"
  },
  "part of speech": {
    "pos": "n.phr.",
    "en_def": "a word class such as noun, verb or adjective",
    "cn_def": "詞性"
  },
  "autocorrect": {
    "pos": "n.",
    "en_def": "a phone function that changes words it thinks are wrong",
    "cn_def": "自動校正"
  },
  "handwriting": {
    "pos": "n.",
    "en_def": "the way a person writes by hand",
    "cn_def": "筆跡；手寫字"
  },
  "sycophant": {
    "pos": "n.",
    "en_def": "a person who praises powerful people to get advantages",
    "cn_def": "諂媚者；馬屁精"
  },
  "linguistics": {
    "pos": "n.",
    "en_def": "the scientific study of language",
    "cn_def": "語言學"
  },
  "interlocutor": {
    "pos": "n.",
    "en_def": "a person you are talking with",
    "cn_def": "對話者"
  },
  "script": {
    "pos": "n.",
    "en_def": "a set of letters or symbols used for writing a language",
    "cn_def": "文字；書寫系統"
  },
  "allocation": {
    "pos": "n.",
    "en_def": "the amount of something given for a purpose",
    "cn_def": "分配；配額"
  },
  "verbiage": {
    "pos": "n.",
    "en_def": "too many unnecessary words",
    "cn_def": "冗詞贅字"
  },
  "decorum": {
    "pos": "n.",
    "en_def": "polite and correct behaviour",
    "cn_def": "禮節；端莊得體"
  },
  "pariah": {
    "pos": "n.",
    "en_def": "a person who is rejected by others",
    "cn_def": "被排斥的人；棄兒"
  },
  "quip": {
    "pos": "n.",
    "en_def": "a short, clever joke",
    "cn_def": "妙語；俏皮話"
  },
  "appreciation": {
    "pos": "n.",
    "en_def": "understanding and enjoying the value of something",
    "cn_def": "欣賞；體會"
  },
  "earpiece": {
    "pos": "n.",
    "en_def": "a small device worn in the ear to hear sound",
    "cn_def": "耳機"
  },
  "grammar": {
    "pos": "n.",
    "en_def": "the rules for forming words and sentences",
    "cn_def": "文法"
  },
  "comma": {
    "pos": "n.",
    "en_def": "the punctuation mark ( , )",
    "cn_def": "逗號"
  },
  "catharsis": {
    "pos": "n.",
    "en_def": "a release of strong emotions that makes you feel better",
    "cn_def": "情緒宣洩；淨化"
  },
  "candour": {
    "pos": "n.",
    "en_def": "honest and open speech",
    "cn_def": "坦率；直言"
  },
  "formality": {
    "pos": "n.",
    "en_def": "the level of politeness and seriousness in language",
    "cn_def": "正式程度"
  },
  "circumlocution": {
    "pos": "n.",
    "en_def": "using many words when a few would do",
    "cn_def": "拐彎抹角；迂迴說法"
  }
};

const EXTRA_GLOSSES = {};
