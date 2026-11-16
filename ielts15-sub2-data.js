// Topic 15 Subunit 2 Quiz Data: Sounds, Speech & Accents 語音、口說與口音
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T15 S02 - Sounds, Speech & Accents 語音、口說與口音",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "accent",
    "pos": "n.",
    "cn_def": "口音",
    "en_def": "a way of pronouncing a language that shows where you are from",
    "sentence": "My new classmate has a strong Scottish {{BLANK}}, so at first I found him hard to understand, but now I enjoy listening to him.",
    "cn": "我的新同學有很重的蘇格蘭口音，所以一開始我覺得他的話很難懂，但現在我很喜歡聽他說話。"
  },
  {
    "word": "dialect",
    "pos": "n.",
    "cn_def": "方言",
    "en_def": "a form of a language spoken in one area or by one group",
    "sentence": "My grandparents speak a local {{BLANK}} at home, while my parents usually speak Mandarin with me and my sister.",
    "cn": "我的祖父母在家說當地的方言，而我的父母通常用國語和我及我妹妹說話。"
  },
  {
    "word": "intonation",
    "pos": "n.",
    "cn_def": "語調",
    "en_def": "the rise and fall of the voice when speaking",
    "sentence": "If you say \"Really?\" with a rising {{BLANK}}, it sounds like a question, but a falling tone can make it sound bored.",
    "cn": "如果你用上揚的語調說「Really?」，聽起來就像個問題，但下降的語調會讓它聽起來很無聊。"
  },
  {
    "word": "vowel",
    "pos": "n.",
    "cn_def": "母音",
    "en_def": "a sound like a, e, i, o or u",
    "sentence": "English has many more {{BLANK}} sounds than Japanese, so Japanese learners often find words like \"ship\" and \"sheep\" confusing.",
    "cn": "英文的母音比日文多得多，所以日本學習者常常覺得像「ship」和「sheep」這樣的字很容易搞混。"
  },
  {
    "word": "consonant",
    "pos": "n.",
    "cn_def": "子音",
    "en_def": "a speech sound that is not a vowel, like b, t or s",
    "sentence": "Some words begin with three {{BLANK}} in a row, like \"street\" and \"spring\", and these clusters are hard for many learners to say.",
    "cn": "有些字開頭連續有三個子音，像「street」和「spring」，而這些子音群對很多學習者來說很難發音。"
  },
  {
    "word": "rhythm",
    "pos": "n.",
    "cn_def": "節奏",
    "en_def": "a regular pattern of strong and weak sounds",
    "sentence": "English has a bouncing {{BLANK}} with strong and weak beats, so reading poems aloud is a good way to practise it.",
    "cn": "英文有一種強弱拍交替的跳躍節奏，所以大聲朗讀詩是練習它的好方法。"
  },
  {
    "word": "pitch",
    "pos": "n.",
    "cn_def": "音高",
    "en_def": "how high or low a sound is",
    "sentence": "In Mandarin the {{BLANK}} of your voice can change a word's meaning, so \"mā\" and \"mà\" are completely different words.",
    "cn": "在中文裡，聲音的音高可以改變一個字的意思，所以「媽」和「罵」是完全不同的字。"
  },
  {
    "word": "stutter",
    "pos": "v.",
    "cn_def": "口吃；結巴",
    "en_def": "to repeat sounds because it is hard to speak smoothly",
    "sentence": "He used to {{BLANK}} when he felt nervous, but speech lessons gave him confidence, and now he hosts the school radio show.",
    "cn": "他以前緊張時會結巴，但說話課程給了他信心，現在他主持學校的廣播節目。"
  },
  {
    "word": "mumble",
    "pos": "v.",
    "cn_def": "含糊地說",
    "en_def": "to speak quietly and unclearly",
    "sentence": "Please don't {{BLANK}} during your presentation, because the students at the back of the hall need to hear every word.",
    "cn": "請不要在報告時含糊地說話，因為禮堂後面的學生需要聽清楚每一個字。"
  },
  {
    "word": "whisper",
    "pos": "v.",
    "cn_def": "低聲說；耳語",
    "en_def": "to speak very softly using your breath",
    "sentence": "We had to {{BLANK}} in the library, but my friend kept laughing loudly, so the librarian asked us to leave.",
    "cn": "我們在圖書館裡必須低聲說話，但我朋友一直大聲笑，所以圖書館員請我們離開。"
  },
  {
    "word": "pronounce",
    "pos": "v.",
    "cn_def": "發音",
    "en_def": "to make the sound of a word",
    "sentence": "Many people do not know how to {{BLANK}} \"Wednesday\", because the first \"d\" is silent and the spelling looks very strange.",
    "cn": "很多人不知道「Wednesday」怎麼發音，因為第一個「d」不發音，而且拼字看起來很奇怪。"
  },
  {
    "word": "mispronounce",
    "pos": "v.",
    "cn_def": "發錯音",
    "en_def": "to say a word wrongly",
    "sentence": "The host {{BLANK}} the singer's name twice, and the audience laughed, so he apologised and asked her to say it herself.",
    "cn": "主持人把歌手的名字唸錯了兩次，觀眾都笑了，所以他道歉並請她自己說一次。"
  },
  {
    "word": "vocal cords",
    "pos": "n.phr.",
    "cn_def": "聲帶",
    "en_def": "parts in your throat that make the sound of your voice",
    "sentence": "Singers rest their {{BLANK}} before a big concert, because shouting or talking too much can damage their voice.",
    "cn": "歌手在大型演唱會前會讓聲帶休息，因為大叫或說太多話會傷害他們的嗓子。"
  },
  {
    "word": "tongue twister",
    "pos": "n.phr.",
    "cn_def": "繞口令",
    "en_def": "a phrase that is difficult to say quickly",
    "sentence": "Our teacher starts each class with a {{BLANK}} like \"She sells seashells\", and we all laugh when we make mistakes.",
    "cn": "我們老師每堂課都用一個像「She sells seashells」這樣的繞口令開始，而我們犯錯時大家都會大笑。"
  },
  {
    "word": "lisp",
    "pos": "n.",
    "cn_def": "大舌頭（s 發成 th）",
    "en_def": "a speech problem where \"s\" sounds like \"th\"",
    "sentence": "The little boy had a {{BLANK}}, so \"sun\" sounded like \"thun\", but it disappeared after he got his new front teeth.",
    "cn": "那個小男孩有大舌頭，所以「sun」聽起來像「thun」，但他長出新門牙後這個問題就消失了。"
  },
  {
    "word": "fluent",
    "pos": "adj.",
    "cn_def": "流利的",
    "en_def": "able to speak a language easily and well",
    "sentence": "Sara became {{BLANK}} in French after living in Paris for two years, and now she works as a tour guide there.",
    "cn": "莎拉在巴黎住了兩年後，法文變得流利，現在她在那裡當導遊。"
  },
  {
    "word": "rhyme",
    "pos": "v.",
    "cn_def": "押韻",
    "en_def": "to have the same ending sound",
    "sentence": "Children's songs are easy to remember because the lines often {{BLANK}}, like \"cat\" and \"hat\" or \"star\" and \"far\".",
    "cn": "兒歌很容易記住，因為歌詞常常押韻，像「cat」和「hat」或「star」和「far」。"
  },
  {
    "word": "silent letter",
    "pos": "n.phr.",
    "cn_def": "不發音字母",
    "en_def": "a letter that is written but not pronounced",
    "sentence": "The \"k\" in \"knife\" is a {{BLANK}}, so we say \"nife\", which often surprises young learners.",
    "cn": "「knife」中的「k」是不發音字母，所以我們唸成「nife」，這常常讓年幼的學習者感到驚訝。"
  },
  {
    "word": "phonetic alphabet",
    "pos": "n.phr.",
    "cn_def": "音標",
    "en_def": "a set of symbols that show speech sounds",
    "sentence": "Most good dictionaries show words in the international {{BLANK}}, so you can check the pronunciation even without audio.",
    "cn": "大多數好的字典會用國際音標標示單字，所以即使沒有音檔，你也能查到發音。"
  },
  {
    "word": "native speaker",
    "pos": "n.phr.",
    "cn_def": "母語人士",
    "en_def": "a person who learned a language from birth",
    "sentence": "Talking with a {{BLANK}} helped me learn natural expressions, but I also learned a lot from other learners in my class.",
    "cn": "和母語人士交談幫助我學到自然的說法，但我也從班上其他學習者身上學到很多。"
  },
  {
    "word": "mother tongue",
    "pos": "n.phr.",
    "cn_def": "母語",
    "en_def": "the first language you learned as a child",
    "sentence": "Her {{BLANK}} is Hakka, but she also speaks Mandarin, English and a little Korean, so she often helps foreign tourists.",
    "cn": "她的母語是客家話，但她也會說國語、英文和一點韓文，所以她常常幫助外國觀光客。"
  },
  {
    "word": "second language",
    "pos": "n.phr.",
    "cn_def": "第二語言",
    "en_def": "a language you learn after your first one",
    "sentence": "English is a {{BLANK}} for millions of people in Asia, and many of them use it every day at work.",
    "cn": "英文是亞洲數百萬人的第二語言，而且其中許多人每天在工作中使用它。"
  },
  {
    "word": "monotone",
    "pos": "n.",
    "cn_def": "單調的聲音",
    "en_def": "a voice that stays on one level and sounds dull",
    "sentence": "The lecturer spoke in a {{BLANK}} for the whole hour, so half the students fell asleep before he finished.",
    "cn": "那位講師整整一小時都用單調的聲音說話，所以一半的學生在他講完前就睡著了。"
  },
  {
    "word": "lip-reading",
    "pos": "n.",
    "cn_def": "讀唇",
    "en_def": "understanding speech by watching people's lips",
    "sentence": "My aunt cannot hear well, but she is very good at {{BLANK}}, so please look at her when you speak.",
    "cn": "我阿姨聽力不好，但她很擅長讀唇，所以你說話時請看著她。"
  },
  {
    "word": "speech therapist",
    "pos": "n.phr.",
    "cn_def": "語言治療師",
    "en_def": "a professional who helps people speak more clearly",
    "sentence": "The {{BLANK}} taught my brother some fun mouth exercises, and his speech became much clearer within a few months.",
    "cn": "語言治療師教了我弟弟一些有趣的嘴部運動，而他的說話在幾個月內就清楚多了。"
  },
  {
    "word": "speech recognition",
    "pos": "n.phr.",
    "cn_def": "語音辨識",
    "en_def": "technology that changes spoken words into text",
    "sentence": "The {{BLANK}} on my phone works well in quiet rooms, but it often writes the wrong words on a noisy bus.",
    "cn": "我手機上的語音辨識在安靜的房間裡運作良好，但在吵雜的公車上常常打出錯字。"
  },
  {
    "word": "aloud",
    "pos": "adv.",
    "cn_def": "出聲地；大聲地",
    "en_def": "in a voice that others can hear",
    "sentence": "Reading stories {{BLANK}} to young children builds their vocabulary, and it also helps parents and kids feel closer.",
    "cn": "為幼兒大聲朗讀故事能增加他們的詞彙量，而且也能讓父母和孩子感覺更親近。"
  },
  {
    "word": "audible",
    "pos": "adj.",
    "cn_def": "聽得見的",
    "en_def": "loud enough to be heard",
    "sentence": "The speaker's voice was barely {{BLANK}} because the microphone was broken, so people at the back started to complain.",
    "cn": "因為麥克風壞了，講者的聲音幾乎聽不太見，所以後面的人開始抱怨。"
  }
];

const MCQS = [
  {
    "q": "My new classmate has a strong Scottish _____, so at first I found him hard to understand, but now I enjoy listening to him.",
    "options": [
      "accent",
      "quip",
      "polyglot",
      "expat"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "My grandparents speak a local _____ at home, while my parents usually speak Mandarin with me and my sister.",
    "options": [
      "pinyin",
      "punctuation",
      "dialect",
      "vernacular"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "If you say \"Really?\" with a rising _____, it sounds like a question, but a falling tone can make it sound bored.",
    "options": [
      "charisma",
      "intonation",
      "formality",
      "oxymoron"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "English has many more _____ sounds than Japanese, so Japanese learners often find words like \"ship\" and \"sheep\" confusing.",
    "options": [
      "misgiving",
      "greeting",
      "politeness",
      "vowel"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Some words begin with three _____ in a row, like \"street\" and \"spring\", and these clusters are hard for many learners to say.",
    "options": [
      "consonant",
      "psycholinguistics",
      "allegory",
      "apostrophe"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "English has a bouncing _____ with strong and weak beats, so reading poems aloud is a good way to practise it.",
    "options": [
      "simile",
      "appendix",
      "rhythm",
      "vernacular"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "In Mandarin the _____ of your voice can change a word's meaning, so \"mā\" and \"mà\" are completely different words.",
    "options": [
      "paragraph",
      "cursive",
      "typo",
      "pitch"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "He used to _____ when he felt nervous, but speech lessons gave him confidence, and now he hosts the school radio show.",
    "options": [
      "conjugate",
      "stutter",
      "mollify",
      "gesticulate"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Please don't _____ during your presentation, because the students at the back of the hall need to hear every word.",
    "options": [
      "imbue",
      "verbalise",
      "mumble",
      "transliterate"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "We had to _____ in the library, but my friend kept laughing loudly, so the librarian asked us to leave.",
    "options": [
      "whisper",
      "promulgate",
      "berate",
      "scribble"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Many people do not know how to _____ \"Wednesday\", because the first \"d\" is silent and the spelling looks very strange.",
    "options": [
      "promulgate",
      "verbalise",
      "transpose",
      "pronounce"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The host _____ the singer's name twice, and the audience laughed, so he apologised and asked her to say it herself.",
    "options": [
      "adjudicate",
      "mispronounce",
      "dub",
      "rephrase"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Singers rest their _____ before a big concert, because shouting or talking too much can damage their voice.",
    "options": [
      "vocal cords",
      "language course",
      "Chinese character",
      "machine translation"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Our teacher starts each class with a _____ like \"She sells seashells\", and we all laugh when we make mistakes.",
    "options": [
      "a slip of the tongue",
      "tongue twister",
      "writing system",
      "capital letter"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The little boy had a _____, so \"sun\" sounded like \"thun\", but it disappeared after he got his new front teeth.",
    "options": [
      "phrasebook",
      "interpreter",
      "lisp",
      "approbation"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Sara became _____ in French after living in Paris for two years, and now she works as a tour guide there.",
    "options": [
      "cross-cultural",
      "bilateral",
      "stoic",
      "fluent"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Children's songs are easy to remember because the lines often _____, like \"cat\" and \"hat\" or \"star\" and \"far\".",
    "options": [
      "rhyme",
      "intersperse",
      "append",
      "obviate"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The \"k\" in \"knife\" is a _____, so we say \"nife\", which often surprises young learners.",
    "options": [
      "passive voice",
      "language family",
      "silent letter",
      "word processor"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Most good dictionaries show words in the international _____, so you can check the pronunciation even without audio.",
    "options": [
      "phrasal verb",
      "phonetic alphabet",
      "language skills",
      "the gift of the gab"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Talking with a _____ helped me learn natural expressions, but I also learned a lot from other learners in my class.",
    "options": [
      "sight translation",
      "simultaneous interpreting",
      "language family",
      "native speaker"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Her _____ is Hakka, but she also speaks Mandarin, English and a little Korean, so she often helps foreign tourists.",
    "options": [
      "mother tongue",
      "World Englishes",
      "language shift",
      "capital letter"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "English is a _____ for millions of people in Asia, and many of them use it every day at work.",
    "options": [
      "oral tradition",
      "second language",
      "source text",
      "global English"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The lecturer spoke in a _____ for the whole hour, so half the students fell asleep before he finished.",
    "options": [
      "epiphany",
      "politeness",
      "allegory",
      "monotone"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "My aunt cannot hear well, but she is very good at _____, so please look at her when you speak.",
    "options": [
      "syllable",
      "greeting",
      "lip-reading",
      "paragon"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The _____ taught my brother some fun mouth exercises, and his speech became much clearer within a few months.",
    "options": [
      "speech therapist",
      "crash course",
      "language contact",
      "global English"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The _____ on my phone works well in quiet rooms, but it often writes the wrong words on a noisy bus.",
    "options": [
      "speech translation",
      "machine translation",
      "source text",
      "speech recognition"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Reading stories _____ to young children builds their vocabulary, and it also helps parents and kids feel closer.",
    "options": [
      "loosely",
      "aloud",
      "interchangeably",
      "expressly"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The speaker's voice was barely _____ because the microphone was broken, so people at the back started to complain.",
    "options": [
      "stoic",
      "facetious",
      "audible",
      "inscrutable"
    ],
    "answer": 2,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "accent": {
    "pos": "n.",
    "en_def": "a way of pronouncing a language that shows where you are from",
    "cn_def": "口音"
  },
  "dialect": {
    "pos": "n.",
    "en_def": "a form of a language spoken in one area or by one group",
    "cn_def": "方言"
  },
  "intonation": {
    "pos": "n.",
    "en_def": "the rise and fall of the voice when speaking",
    "cn_def": "語調"
  },
  "vowel": {
    "pos": "n.",
    "en_def": "a sound like a, e, i, o or u",
    "cn_def": "母音"
  },
  "consonant": {
    "pos": "n.",
    "en_def": "a speech sound that is not a vowel, like b, t or s",
    "cn_def": "子音"
  },
  "rhythm": {
    "pos": "n.",
    "en_def": "a regular pattern of strong and weak sounds",
    "cn_def": "節奏"
  },
  "pitch": {
    "pos": "n.",
    "en_def": "how high or low a sound is",
    "cn_def": "音高"
  },
  "stutter": {
    "pos": "v.",
    "en_def": "to repeat sounds because it is hard to speak smoothly",
    "cn_def": "口吃；結巴"
  },
  "mumble": {
    "pos": "v.",
    "en_def": "to speak quietly and unclearly",
    "cn_def": "含糊地說"
  },
  "whisper": {
    "pos": "v.",
    "en_def": "to speak very softly using your breath",
    "cn_def": "低聲說；耳語"
  },
  "pronounce": {
    "pos": "v.",
    "en_def": "to make the sound of a word",
    "cn_def": "發音"
  },
  "mispronounce": {
    "pos": "v.",
    "en_def": "to say a word wrongly",
    "cn_def": "發錯音"
  },
  "vocal cords": {
    "pos": "n.phr.",
    "en_def": "parts in your throat that make the sound of your voice",
    "cn_def": "聲帶"
  },
  "tongue twister": {
    "pos": "n.phr.",
    "en_def": "a phrase that is difficult to say quickly",
    "cn_def": "繞口令"
  },
  "lisp": {
    "pos": "n.",
    "en_def": "a speech problem where \"s\" sounds like \"th\"",
    "cn_def": "大舌頭（s 發成 th）"
  },
  "fluent": {
    "pos": "adj.",
    "en_def": "able to speak a language easily and well",
    "cn_def": "流利的"
  },
  "rhyme": {
    "pos": "v.",
    "en_def": "to have the same ending sound",
    "cn_def": "押韻"
  },
  "silent letter": {
    "pos": "n.phr.",
    "en_def": "a letter that is written but not pronounced",
    "cn_def": "不發音字母"
  },
  "phonetic alphabet": {
    "pos": "n.phr.",
    "en_def": "a set of symbols that show speech sounds",
    "cn_def": "音標"
  },
  "native speaker": {
    "pos": "n.phr.",
    "en_def": "a person who learned a language from birth",
    "cn_def": "母語人士"
  },
  "mother tongue": {
    "pos": "n.phr.",
    "en_def": "the first language you learned as a child",
    "cn_def": "母語"
  },
  "second language": {
    "pos": "n.phr.",
    "en_def": "a language you learn after your first one",
    "cn_def": "第二語言"
  },
  "monotone": {
    "pos": "n.",
    "en_def": "a voice that stays on one level and sounds dull",
    "cn_def": "單調的聲音"
  },
  "lip-reading": {
    "pos": "n.",
    "en_def": "understanding speech by watching people's lips",
    "cn_def": "讀唇"
  },
  "speech therapist": {
    "pos": "n.phr.",
    "en_def": "a professional who helps people speak more clearly",
    "cn_def": "語言治療師"
  },
  "speech recognition": {
    "pos": "n.phr.",
    "en_def": "technology that changes spoken words into text",
    "cn_def": "語音辨識"
  },
  "aloud": {
    "pos": "adv.",
    "en_def": "in a voice that others can hear",
    "cn_def": "出聲地；大聲地"
  },
  "audible": {
    "pos": "adj.",
    "en_def": "loud enough to be heard",
    "cn_def": "聽得見的"
  },
  "quip": {
    "pos": "n.",
    "en_def": "a short, clever joke",
    "cn_def": "妙語；俏皮話"
  },
  "polyglot": {
    "pos": "n.",
    "en_def": "a person who can speak many languages",
    "cn_def": "通曉多種語言的人"
  },
  "expat": {
    "pos": "n.",
    "en_def": "a person living in a foreign country",
    "cn_def": "旅居海外者；外籍人士"
  },
  "pinyin": {
    "pos": "n.",
    "en_def": "the official system for writing Chinese sounds with Roman letters",
    "cn_def": "漢語拼音"
  },
  "punctuation": {
    "pos": "n.",
    "en_def": "marks like commas and full stops used in writing",
    "cn_def": "標點符號"
  },
  "vernacular": {
    "pos": "n.",
    "en_def": "the everyday language spoken by ordinary people",
    "cn_def": "日常用語；方言白話"
  },
  "charisma": {
    "pos": "n.",
    "en_def": "a strong personal charm that attracts people",
    "cn_def": "領袖魅力；個人魅力"
  },
  "formality": {
    "pos": "n.",
    "en_def": "the level of politeness and seriousness in language",
    "cn_def": "正式程度"
  },
  "oxymoron": {
    "pos": "n.",
    "en_def": "two words with opposite meanings used together",
    "cn_def": "矛盾修飾法"
  },
  "misgiving": {
    "pos": "n.",
    "en_def": "a feeling of doubt or worry",
    "cn_def": "疑慮；擔憂"
  },
  "greeting": {
    "pos": "n.",
    "en_def": "words you say when you meet someone",
    "cn_def": "問候語；打招呼"
  },
  "politeness": {
    "pos": "n.",
    "en_def": "the quality of behaving and speaking with respect",
    "cn_def": "禮貌"
  },
  "psycholinguistics": {
    "pos": "n.",
    "en_def": "the study of how the mind uses and understands language",
    "cn_def": "心理語言學"
  },
  "allegory": {
    "pos": "n.",
    "en_def": "a story with a hidden moral or political meaning",
    "cn_def": "寓言；諷喻"
  },
  "apostrophe": {
    "pos": "n.",
    "en_def": "the mark ( ' ) used in words like \"it's\" or \"Tom's\"",
    "cn_def": "撇號"
  },
  "simile": {
    "pos": "n.",
    "en_def": "a comparison using \"like\" or \"as\"",
    "cn_def": "明喻"
  },
  "appendix": {
    "pos": "n.",
    "en_def": "extra information at the end of a book or report",
    "cn_def": "附錄"
  },
  "paragraph": {
    "pos": "n.",
    "en_def": "a group of sentences about one main idea",
    "cn_def": "段落"
  },
  "cursive": {
    "pos": "n.",
    "en_def": "handwriting where the letters are joined together",
    "cn_def": "草寫體"
  },
  "typo": {
    "pos": "n.",
    "en_def": "a small mistake in typing",
    "cn_def": "打字錯誤"
  },
  "conjugate": {
    "pos": "v.",
    "en_def": "to list or change the forms of a verb",
    "cn_def": "（動詞）變化詞形"
  },
  "mollify": {
    "pos": "v.",
    "en_def": "to make someone less angry",
    "cn_def": "平息；安撫"
  },
  "gesticulate": {
    "pos": "v.",
    "en_def": "to move your hands while talking",
    "cn_def": "比手畫腳"
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
  "transliterate": {
    "pos": "v.",
    "en_def": "to write words using the letters of another alphabet",
    "cn_def": "音譯；轉寫"
  },
  "promulgate": {
    "pos": "v.",
    "en_def": "to make an idea or law widely known",
    "cn_def": "頒布；宣傳推廣"
  },
  "berate": {
    "pos": "v.",
    "en_def": "to scold someone angrily",
    "cn_def": "嚴厲斥責"
  },
  "scribble": {
    "pos": "v.",
    "en_def": "to write something quickly and carelessly",
    "cn_def": "潦草地寫"
  },
  "transpose": {
    "pos": "v.",
    "en_def": "to change the order or position of things",
    "cn_def": "調換；移調"
  },
  "adjudicate": {
    "pos": "v.",
    "en_def": "to judge officially",
    "cn_def": "裁決；評判"
  },
  "dub": {
    "pos": "v.",
    "en_def": "to replace the voices in a film with another language",
    "cn_def": "配音"
  },
  "rephrase": {
    "pos": "v.",
    "en_def": "to say something again using different words",
    "cn_def": "換個說法"
  },
  "language course": {
    "pos": "n.phr.",
    "en_def": "a series of lessons to learn a language",
    "cn_def": "語言課程"
  },
  "chinese character": {
    "pos": "n.phr.",
    "en_def": "a single written symbol used in Chinese",
    "cn_def": "漢字；中文字"
  },
  "machine translation": {
    "pos": "n.phr.",
    "en_def": "translation done by a computer",
    "cn_def": "機器翻譯"
  },
  "a slip of the tongue": {
    "pos": "n.phr.",
    "en_def": "a small mistake when you are speaking",
    "cn_def": "口誤"
  },
  "writing system": {
    "pos": "n.phr.",
    "en_def": "the way a language is written down",
    "cn_def": "書寫系統"
  },
  "capital letter": {
    "pos": "n.phr.",
    "en_def": "a big letter such as A, B or C",
    "cn_def": "大寫字母"
  },
  "phrasebook": {
    "pos": "n.",
    "en_def": "a small book of useful phrases for travellers",
    "cn_def": "常用語手冊"
  },
  "interpreter": {
    "pos": "n.",
    "en_def": "a person who changes spoken words into another language",
    "cn_def": "口譯員"
  },
  "approbation": {
    "pos": "n.",
    "en_def": "approval or praise",
    "cn_def": "讚許；認可"
  },
  "cross-cultural": {
    "pos": "adj.",
    "en_def": "involving two or more cultures",
    "cn_def": "跨文化的"
  },
  "bilateral": {
    "pos": "adj.",
    "en_def": "involving two groups or countries",
    "cn_def": "雙邊的"
  },
  "stoic": {
    "pos": "adj.",
    "en_def": "calm and not complaining in hard times",
    "cn_def": "堅忍的；淡然處之的"
  },
  "intersperse": {
    "pos": "v.",
    "en_def": "to put things here and there among other things",
    "cn_def": "點綴；散布"
  },
  "append": {
    "pos": "v.",
    "en_def": "to add something at the end",
    "cn_def": "附加"
  },
  "obviate": {
    "pos": "v.",
    "en_def": "to remove the need for something",
    "cn_def": "免除；使不必要"
  },
  "passive voice": {
    "pos": "n.phr.",
    "en_def": "a sentence form where the subject receives the action",
    "cn_def": "被動語態"
  },
  "language family": {
    "pos": "n.phr.",
    "en_def": "a group of languages that come from one older language",
    "cn_def": "語系"
  },
  "word processor": {
    "pos": "n.phr.",
    "en_def": "a computer program for writing documents",
    "cn_def": "文書處理軟體"
  },
  "phrasal verb": {
    "pos": "n.phr.",
    "en_def": "a verb plus a small word like \"up\" or \"off\"",
    "cn_def": "片語動詞"
  },
  "language skills": {
    "pos": "n.phr.",
    "en_def": "abilities in listening, speaking, reading and writing",
    "cn_def": "語言能力"
  },
  "the gift of the gab": {
    "pos": "n.phr.",
    "en_def": "the ability to speak easily and persuasively",
    "cn_def": "好口才"
  },
  "sight translation": {
    "pos": "n.phr.",
    "en_def": "reading a document in one language aloud in another",
    "cn_def": "視譯"
  },
  "simultaneous interpreting": {
    "pos": "n.phr.",
    "en_def": "interpreting while the speaker is still talking",
    "cn_def": "同步口譯"
  },
  "world englishes": {
    "pos": "n.phr.",
    "en_def": "the different kinds of English used in different countries",
    "cn_def": "世界英語變體"
  },
  "language shift": {
    "pos": "n.phr.",
    "en_def": "when a community stops using one language and uses another",
    "cn_def": "語言轉移"
  },
  "oral tradition": {
    "pos": "n.phr.",
    "en_def": "stories and knowledge passed on by speaking, not writing",
    "cn_def": "口述傳統"
  },
  "source text": {
    "pos": "n.phr.",
    "en_def": "the original text that is being translated",
    "cn_def": "原文"
  },
  "global english": {
    "pos": "n.phr.",
    "en_def": "English used around the world as an international language",
    "cn_def": "全球英語"
  },
  "epiphany": {
    "pos": "n.",
    "en_def": "a sudden moment of understanding",
    "cn_def": "頓悟"
  },
  "syllable": {
    "pos": "n.",
    "en_def": "a part of a word with one vowel sound",
    "cn_def": "音節"
  },
  "paragon": {
    "pos": "n.",
    "en_def": "a perfect example of a quality",
    "cn_def": "典範；模範"
  },
  "crash course": {
    "pos": "n.phr.",
    "en_def": "a short, fast course that teaches the basics",
    "cn_def": "速成課程"
  },
  "language contact": {
    "pos": "n.phr.",
    "en_def": "when speakers of different languages meet and influence each other",
    "cn_def": "語言接觸"
  },
  "speech translation": {
    "pos": "n.phr.",
    "en_def": "technology that translates spoken language aloud",
    "cn_def": "語音翻譯"
  },
  "loosely": {
    "pos": "adv.",
    "en_def": "not exactly",
    "cn_def": "大致地；不嚴格地"
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
  "facetious": {
    "pos": "adj.",
    "en_def": "joking at the wrong time",
    "cn_def": "開玩笑的；不正經的"
  },
  "inscrutable": {
    "pos": "adj.",
    "en_def": "impossible to understand or read",
    "cn_def": "難以理解的；高深莫測的"
  }
};

const EXTRA_GLOSSES = {};
