// Topic 15 Subunit 15 Quiz Data: Academic Words 學術單字 8 (moribund – charisma)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T15 S15 - Academic Words 學術單字 8 (moribund – charisma)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "moribund",
    "pos": "adj.",
    "cn_def": "垂死的；瀕臨消亡的",
    "en_def": "close to dying or ending",
    "sentence": "The language was {{BLANK}} by 1990, but a new school programme has brought hundreds of young speakers back.",
    "cn": "這種語言到 1990 年時已瀕臨消亡，但一個新的學校計畫已帶回了數百名年輕使用者。"
  },
  {
    "word": "pithy",
    "pos": "adj.",
    "cn_def": "精闢的；簡潔有力的",
    "en_def": "short but full of meaning",
    "sentence": "The teacher wrote a {{BLANK}} comment on my essay, and those few words helped me more than a long report.",
    "cn": "老師在我的作文上寫了一句精闢的評語，而那寥寥幾個字比長篇報告更能幫助我。"
  },
  {
    "word": "quip",
    "pos": "n.",
    "cn_def": "妙語；俏皮話",
    "en_def": "a short, clever joke",
    "sentence": "The interpreter could not translate the president's {{BLANK}} about cheese, so she simply told the audience it was a joke.",
    "cn": "口譯員無法翻譯總統關於起司的俏皮話，所以她只好告訴觀眾那是個笑話。"
  },
  {
    "word": "repartee",
    "pos": "n.",
    "cn_def": "機智應答",
    "en_def": "quick and clever replies in conversation",
    "sentence": "The two hosts are famous for their {{BLANK}}, but they say it took years of practice to sound so natural.",
    "cn": "兩位主持人以機智的對答聞名，但他們說花了好幾年練習才能聽起來那麼自然。"
  },
  {
    "word": "verbiage",
    "pos": "n.",
    "cn_def": "冗詞贅字",
    "en_def": "too many unnecessary words",
    "sentence": "Cut the {{BLANK}} from your essay, because examiners prefer clear points to long sentences that say very little.",
    "cn": "刪掉你文章中的冗詞贅字，因為考官偏好清楚的論點，而不是說了很少內容的長句。"
  },
  {
    "word": "voluble",
    "pos": "adj.",
    "cn_def": "健談的；滔滔不絕的",
    "en_def": "talking a lot and quickly",
    "sentence": "The {{BLANK}} tour guide explained every building in fast English, so we had to ask her to slow down.",
    "cn": "那位滔滔不絕的導遊用很快的英文解說每棟建築，所以我們只好請她說慢一點。"
  },
  {
    "word": "wry",
    "pos": "adj.",
    "cn_def": "苦笑的；挖苦的",
    "en_def": "showing amused but slightly annoyed humour",
    "sentence": "He gave a {{BLANK}} smile when the app translated his name as \"fried egg\", but he still showed it to his friends.",
    "cn": "當應用程式把他的名字翻成「煎蛋」時，他露出苦笑，但他還是拿給朋友看。"
  },
  {
    "word": "peruse",
    "pos": "v.",
    "cn_def": "細讀；仔細閱讀",
    "en_def": "to read something carefully",
    "sentence": "Please {{BLANK}} the contract before you sign it, because the English version and the Chinese version may differ.",
    "cn": "簽約前請仔細閱讀合約，因為英文版和中文版可能有出入。"
  },
  {
    "word": "opine",
    "pos": "v.",
    "cn_def": "發表意見",
    "en_def": "to give your opinion",
    "sentence": "Many people {{BLANK}} online about the \"correct\" way to speak, but linguists say every variety has its own rules.",
    "cn": "許多人在網路上發表意見談論「正確」的說話方式，但語言學家說每種語言變體都有自己的規則。"
  },
  {
    "word": "pundit",
    "pos": "n.",
    "cn_def": "專家；評論員",
    "en_def": "an expert who gives opinions in the media",
    "sentence": "A TV {{BLANK}} claimed that young people cannot write properly any more, but the research shows a different picture.",
    "cn": "一位電視評論員聲稱年輕人已經不會好好寫作了，但研究呈現出不同的情況。"
  },
  {
    "word": "germane",
    "pos": "adj.",
    "cn_def": "密切相關的",
    "en_def": "relevant to the subject",
    "sentence": "Your story about your holiday is interesting, but it is not {{BLANK}} to the essay question, so please remove it.",
    "cn": "你關於假期的故事很有趣，但和作文題目並不相關，所以請把它刪掉。"
  },
  {
    "word": "flippant",
    "pos": "adj.",
    "cn_def": "輕率的；不認真的",
    "en_def": "not serious when you should be",
    "sentence": "His {{BLANK}} answer about climate change annoyed the examiner, so he lost marks for not taking the topic seriously.",
    "cn": "他對氣候變遷輕率的回答惹惱了考官，所以他因為沒有認真看待題目而被扣分。"
  },
  {
    "word": "genial",
    "pos": "adj.",
    "cn_def": "親切友好的；和藹的",
    "en_def": "friendly and cheerful",
    "sentence": "The {{BLANK}} old professor invited international students to his home, and he cooked dishes from each of their countries.",
    "cn": "那位和藹的老教授邀請國際學生到他家，還煮了他們每個人國家的菜。"
  },
  {
    "word": "cordial",
    "pos": "adj.",
    "cn_def": "熱誠的；誠懇的",
    "en_def": "warm and polite",
    "sentence": "The two leaders had a {{BLANK}} meeting, and their interpreters said the conversation went smoothly from start to finish.",
    "cn": "兩位領袖進行了一場誠懇友好的會談，而他們的口譯員說對話從頭到尾都很順利。"
  },
  {
    "word": "edify",
    "pos": "v.",
    "cn_def": "啟發；教誨",
    "en_def": "to teach someone in a way that improves their mind",
    "sentence": "The museum's language exhibition is designed to {{BLANK}} visitors, but it is also full of fun games for children.",
    "cn": "博物館的語言展旨在啟發參觀者，但它也充滿了給孩子玩的有趣遊戲。"
  },
  {
    "word": "epiphany",
    "pos": "n.",
    "cn_def": "頓悟",
    "en_def": "a sudden moment of understanding",
    "sentence": "I had an {{BLANK}} when I realised that English \"the\" works a bit like pointing, and after that articles felt much easier.",
    "cn": "當我明白英文的「the」有點像用手指東西時，我突然頓悟了，從那之後冠詞感覺容易多了。"
  },
  {
    "word": "exuberant",
    "pos": "adj.",
    "cn_def": "活力充沛的；熱情洋溢的",
    "en_def": "full of energy and happiness",
    "sentence": "The {{BLANK}} children sang the English song loudly, and their parents filmed the performance on their phones.",
    "cn": "那些活力充沛的孩子大聲唱著英文歌，而他們的父母用手機錄下了表演。"
  },
  {
    "word": "misgiving",
    "pos": "n.",
    "cn_def": "疑慮；擔憂",
    "en_def": "a feeling of doubt or worry",
    "sentence": "I had some {{BLANK}} about studying abroad alone, but the friendly people there soon made me feel at home.",
    "cn": "我對獨自出國念書有些疑慮，但那裡友善的人們很快讓我感覺像在家一樣。"
  },
  {
    "word": "qualm",
    "pos": "n.",
    "cn_def": "不安；顧慮",
    "en_def": "an uneasy feeling that you are doing wrong",
    "sentence": "She had no {{BLANK}} about asking strangers for directions, so her French improved very quickly in Paris.",
    "cn": "她對向陌生人問路毫無顧慮，所以她的法文在巴黎進步得非常快。"
  },
  {
    "word": "vehement",
    "pos": "adj.",
    "cn_def": "激烈的；強烈的",
    "en_def": "showing strong feeling",
    "sentence": "There was {{BLANK}} opposition to closing the language centre, so hundreds of students signed a petition.",
    "cn": "關閉語言中心遭到強烈的反對，所以有數百名學生連署請願。"
  },
  {
    "word": "unabashed",
    "pos": "adj.",
    "cn_def": "毫不掩飾的；不害臊的",
    "en_def": "not ashamed or embarrassed",
    "sentence": "He is an {{BLANK}} fan of K-pop, and he proudly sings Korean songs at every school party.",
    "cn": "他是一個毫不掩飾的 K-pop 迷，而且他在每場學校派對上都自豪地唱韓文歌。"
  },
  {
    "word": "pensive",
    "pos": "adj.",
    "cn_def": "沉思的",
    "en_def": "thinking deeply, often a little sadly",
    "sentence": "She looked {{BLANK}} as she read her grandfather's old letters, because she was trying to imagine his life in the 1950s.",
    "cn": "她讀著爺爺的舊信時看起來若有所思，因為她正試著想像他在 1950 年代的生活。"
  },
  {
    "word": "solemn",
    "pos": "adj.",
    "cn_def": "莊嚴的；嚴肅的",
    "en_def": "serious and formal",
    "sentence": "The ceremony was {{BLANK}}, so the students stood silently while the national anthem played in two languages.",
    "cn": "典禮很莊嚴，所以學生們靜靜站立，國歌以兩種語言播放。"
  },
  {
    "word": "camaraderie",
    "pos": "n.",
    "cn_def": "友誼；同袍情誼",
    "en_def": "friendship and trust among a group",
    "sentence": "There was real {{BLANK}} in our language class, because we laughed at our mistakes together and helped each other study.",
    "cn": "我們的語言班有真正的同儕情誼，因為我們一起笑看自己的錯誤，也互相幫助讀書。"
  },
  {
    "word": "charisma",
    "pos": "n.",
    "cn_def": "領袖魅力；個人魅力",
    "en_def": "a strong personal charm that attracts people",
    "sentence": "The speaker had so much {{BLANK}} that people listened to every word, even though her English was not perfect.",
    "cn": "那位講者極具個人魅力，以致人們專心聽她說的每一個字，即使她的英文並不完美。"
  }
];

const MCQS = [
  {
    "q": "The language was _____ by 1990, but a new school programme has brought hundreds of young speakers back.",
    "options": [
      "effusive",
      "moribund",
      "stoic",
      "intercultural"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The teacher wrote a _____ comment on my essay, and those few words helped me more than a long report.",
    "options": [
      "linguistic",
      "provincial",
      "pithy",
      "trenchant"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The interpreter could not translate the president's _____ about cheese, so she simply told the audience it was a joke.",
    "options": [
      "quip",
      "homonym",
      "anecdote",
      "attribution"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The two hosts are famous for their _____, but they say it took years of practice to sound so natural.",
    "options": [
      "homonym",
      "gloss",
      "proverb",
      "repartee"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Cut the _____ from your essay, because examiners prefer clear points to long sentences that say very little.",
    "options": [
      "creole",
      "vowel",
      "verbiage",
      "psycholinguistics"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The _____ tour guide explained every building in fast English, so we had to ask her to slow down.",
    "options": [
      "garrulous",
      "voluble",
      "poignant",
      "parochial"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "He gave a _____ smile when the app translated his name as \"fried egg\", but he still showed it to his friends.",
    "options": [
      "wry",
      "inane",
      "punctilious",
      "ungrammatical"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Please _____ the contract before you sign it, because the English version and the Chinese version may differ.",
    "options": [
      "transliterate",
      "deprecate",
      "vex",
      "peruse"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Many people _____ online about the \"correct\" way to speak, but linguists say every variety has its own rules.",
    "options": [
      "chat",
      "opine",
      "antagonise",
      "reword"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "A TV _____ claimed that young people cannot write properly any more, but the research shows a different picture.",
    "options": [
      "earpiece",
      "autocorrect",
      "expat",
      "pundit"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Your story about your holiday is interesting, but it is not _____ to the essay question, so please remove it.",
    "options": [
      "germane",
      "incorrigible",
      "facetious",
      "native-like"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "His _____ answer about climate change annoyed the examiner, so he lost marks for not taking the topic seriously.",
    "options": [
      "urbane",
      "indefatigable",
      "flippant",
      "pluralistic"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The _____ old professor invited international students to his home, and he cooked dishes from each of their countries.",
    "options": [
      "genial",
      "furtive",
      "loquacious",
      "obtuse"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The two leaders had a _____ meeting, and their interpreters said the conversation went smoothly from start to finish.",
    "options": [
      "inane",
      "impassive",
      "laconic",
      "cordial"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The museum's language exhibition is designed to _____ visitors, but it is also full of fun games for children.",
    "options": [
      "intersperse",
      "mumble",
      "edify",
      "circumscribe"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "I had an _____ when I realised that English \"the\" works a bit like pointing, and after that articles felt much easier.",
    "options": [
      "back-translation",
      "epiphany",
      "voice-over",
      "proverb"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The _____ children sang the English song loudly, and their parents filmed the performance on their phones.",
    "options": [
      "grammatical",
      "reprehensible",
      "indefatigable",
      "exuberant"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "I had some _____ about studying abroad alone, but the friendly people there soon made me feel at home.",
    "options": [
      "appreciation",
      "translation",
      "misgiving",
      "monotone"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "She had no _____ about asking strangers for directions, so her French improved very quickly in Paris.",
    "options": [
      "monotone",
      "qualm",
      "hyphen",
      "duplicity"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "There was _____ opposition to closing the language centre, so hundreds of students signed a petition.",
    "options": [
      "vehement",
      "obtuse",
      "punctilious",
      "furtive"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "He is an _____ fan of K-pop, and he proudly sings Korean songs at every school party.",
    "options": [
      "convoluted",
      "wistful",
      "morose",
      "unabashed"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "She looked _____ as she read her grandfather's old letters, because she was trying to imagine his life in the 1950s.",
    "options": [
      "hackneyed",
      "pensive",
      "magnanimous",
      "pluralistic"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The ceremony was _____, so the students stood silently while the national anthem played in two languages.",
    "options": [
      "solemn",
      "sardonic",
      "transitory",
      "trenchant"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "There was real _____ in our language class, because we laughed at our mistakes together and helped each other study.",
    "options": [
      "iconoclast",
      "creole",
      "camaraderie",
      "allegory"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The speaker had so much _____ that people listened to every word, even though her English was not perfect.",
    "options": [
      "duplicity",
      "accessibility",
      "autocorrect",
      "charisma"
    ],
    "answer": 3,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "moribund": {
    "pos": "adj.",
    "en_def": "close to dying or ending",
    "cn_def": "垂死的；瀕臨消亡的"
  },
  "pithy": {
    "pos": "adj.",
    "en_def": "short but full of meaning",
    "cn_def": "精闢的；簡潔有力的"
  },
  "quip": {
    "pos": "n.",
    "en_def": "a short, clever joke",
    "cn_def": "妙語；俏皮話"
  },
  "repartee": {
    "pos": "n.",
    "en_def": "quick and clever replies in conversation",
    "cn_def": "機智應答"
  },
  "verbiage": {
    "pos": "n.",
    "en_def": "too many unnecessary words",
    "cn_def": "冗詞贅字"
  },
  "voluble": {
    "pos": "adj.",
    "en_def": "talking a lot and quickly",
    "cn_def": "健談的；滔滔不絕的"
  },
  "wry": {
    "pos": "adj.",
    "en_def": "showing amused but slightly annoyed humour",
    "cn_def": "苦笑的；挖苦的"
  },
  "peruse": {
    "pos": "v.",
    "en_def": "to read something carefully",
    "cn_def": "細讀；仔細閱讀"
  },
  "opine": {
    "pos": "v.",
    "en_def": "to give your opinion",
    "cn_def": "發表意見"
  },
  "pundit": {
    "pos": "n.",
    "en_def": "an expert who gives opinions in the media",
    "cn_def": "專家；評論員"
  },
  "germane": {
    "pos": "adj.",
    "en_def": "relevant to the subject",
    "cn_def": "密切相關的"
  },
  "flippant": {
    "pos": "adj.",
    "en_def": "not serious when you should be",
    "cn_def": "輕率的；不認真的"
  },
  "genial": {
    "pos": "adj.",
    "en_def": "friendly and cheerful",
    "cn_def": "親切友好的；和藹的"
  },
  "cordial": {
    "pos": "adj.",
    "en_def": "warm and polite",
    "cn_def": "熱誠的；誠懇的"
  },
  "edify": {
    "pos": "v.",
    "en_def": "to teach someone in a way that improves their mind",
    "cn_def": "啟發；教誨"
  },
  "epiphany": {
    "pos": "n.",
    "en_def": "a sudden moment of understanding",
    "cn_def": "頓悟"
  },
  "exuberant": {
    "pos": "adj.",
    "en_def": "full of energy and happiness",
    "cn_def": "活力充沛的；熱情洋溢的"
  },
  "misgiving": {
    "pos": "n.",
    "en_def": "a feeling of doubt or worry",
    "cn_def": "疑慮；擔憂"
  },
  "qualm": {
    "pos": "n.",
    "en_def": "an uneasy feeling that you are doing wrong",
    "cn_def": "不安；顧慮"
  },
  "vehement": {
    "pos": "adj.",
    "en_def": "showing strong feeling",
    "cn_def": "激烈的；強烈的"
  },
  "unabashed": {
    "pos": "adj.",
    "en_def": "not ashamed or embarrassed",
    "cn_def": "毫不掩飾的；不害臊的"
  },
  "pensive": {
    "pos": "adj.",
    "en_def": "thinking deeply, often a little sadly",
    "cn_def": "沉思的"
  },
  "solemn": {
    "pos": "adj.",
    "en_def": "serious and formal",
    "cn_def": "莊嚴的；嚴肅的"
  },
  "camaraderie": {
    "pos": "n.",
    "en_def": "friendship and trust among a group",
    "cn_def": "友誼；同袍情誼"
  },
  "charisma": {
    "pos": "n.",
    "en_def": "a strong personal charm that attracts people",
    "cn_def": "領袖魅力；個人魅力"
  },
  "effusive": {
    "pos": "adj.",
    "en_def": "showing a lot of feeling, especially praise",
    "cn_def": "熱情洋溢的；過分熱情的"
  },
  "stoic": {
    "pos": "adj.",
    "en_def": "calm and not complaining in hard times",
    "cn_def": "堅忍的；淡然處之的"
  },
  "intercultural": {
    "pos": "adj.",
    "en_def": "between different cultures",
    "cn_def": "跨文化的"
  },
  "linguistic": {
    "pos": "adj.",
    "en_def": "connected with language",
    "cn_def": "語言的"
  },
  "provincial": {
    "pos": "adj.",
    "en_def": "narrow-minded and not interested in the wider world",
    "cn_def": "眼界狹隘的；鄉土的"
  },
  "trenchant": {
    "pos": "adj.",
    "en_def": "clear, strong and direct in criticism",
    "cn_def": "一針見血的；尖銳的"
  },
  "homonym": {
    "pos": "n.",
    "en_def": "a word spelled and said the same as another but with a different meaning",
    "cn_def": "同形同音異義字"
  },
  "anecdote": {
    "pos": "n.",
    "en_def": "a short interesting story about a real event",
    "cn_def": "軼事；小故事"
  },
  "attribution": {
    "pos": "n.",
    "en_def": "saying who wrote or created something",
    "cn_def": "出處標明；歸屬"
  },
  "gloss": {
    "pos": "n.",
    "en_def": "a short explanation of a difficult word in a text",
    "cn_def": "注釋；註解"
  },
  "proverb": {
    "pos": "n.",
    "en_def": "a short well-known saying that gives advice",
    "cn_def": "諺語"
  },
  "creole": {
    "pos": "n.",
    "en_def": "a language that grew from mixing two languages and became a first language",
    "cn_def": "克里奧爾語；混合語"
  },
  "vowel": {
    "pos": "n.",
    "en_def": "a sound like a, e, i, o or u",
    "cn_def": "母音"
  },
  "psycholinguistics": {
    "pos": "n.",
    "en_def": "the study of how the mind uses and understands language",
    "cn_def": "心理語言學"
  },
  "garrulous": {
    "pos": "adj.",
    "en_def": "talking too much about unimportant things",
    "cn_def": "喋喋不休的"
  },
  "poignant": {
    "pos": "adj.",
    "en_def": "making you feel sad and moved",
    "cn_def": "令人心酸的；感人的"
  },
  "parochial": {
    "pos": "adj.",
    "en_def": "only interested in your own small area",
    "cn_def": "狹隘的；地方性的"
  },
  "inane": {
    "pos": "adj.",
    "en_def": "silly and without meaning",
    "cn_def": "愚蠢的；空洞的"
  },
  "punctilious": {
    "pos": "adj.",
    "en_def": "very careful about details and rules",
    "cn_def": "一絲不苟的"
  },
  "ungrammatical": {
    "pos": "adj.",
    "en_def": "not following the rules of grammar",
    "cn_def": "不合文法的"
  },
  "transliterate": {
    "pos": "v.",
    "en_def": "to write words using the letters of another alphabet",
    "cn_def": "音譯；轉寫"
  },
  "deprecate": {
    "pos": "v.",
    "en_def": "to express disapproval of something",
    "cn_def": "不贊成；反對"
  },
  "vex": {
    "pos": "v.",
    "en_def": "to annoy or worry someone",
    "cn_def": "使煩惱；使惱火"
  },
  "chat": {
    "pos": "v.",
    "en_def": "to talk in a friendly, informal way",
    "cn_def": "聊天"
  },
  "antagonise": {
    "pos": "v.",
    "en_def": "to make someone angry or unfriendly",
    "cn_def": "激怒；使對立"
  },
  "reword": {
    "pos": "v.",
    "en_def": "to change the words of a text",
    "cn_def": "改寫措辭"
  },
  "earpiece": {
    "pos": "n.",
    "en_def": "a small device worn in the ear to hear sound",
    "cn_def": "耳機"
  },
  "autocorrect": {
    "pos": "n.",
    "en_def": "a phone function that changes words it thinks are wrong",
    "cn_def": "自動校正"
  },
  "expat": {
    "pos": "n.",
    "en_def": "a person living in a foreign country",
    "cn_def": "旅居海外者；外籍人士"
  },
  "incorrigible": {
    "pos": "adj.",
    "en_def": "unable to be changed or improved",
    "cn_def": "無可救藥的；積習難改的"
  },
  "facetious": {
    "pos": "adj.",
    "en_def": "joking at the wrong time",
    "cn_def": "開玩笑的；不正經的"
  },
  "native-like": {
    "pos": "adj.",
    "en_def": "very close to the way a native speaker talks",
    "cn_def": "接近母語的"
  },
  "urbane": {
    "pos": "adj.",
    "en_def": "polite, confident and comfortable in social situations",
    "cn_def": "溫文爾雅的"
  },
  "indefatigable": {
    "pos": "adj.",
    "en_def": "never getting tired",
    "cn_def": "不知疲倦的"
  },
  "pluralistic": {
    "pos": "adj.",
    "en_def": "accepting many different groups and views",
    "cn_def": "多元的"
  },
  "furtive": {
    "pos": "adj.",
    "en_def": "secret and trying not to be noticed",
    "cn_def": "偷偷摸摸的"
  },
  "loquacious": {
    "pos": "adj.",
    "en_def": "talking a lot",
    "cn_def": "健談的；多話的"
  },
  "obtuse": {
    "pos": "adj.",
    "en_def": "slow to understand",
    "cn_def": "遲鈍的"
  },
  "impassive": {
    "pos": "adj.",
    "en_def": "showing no emotion",
    "cn_def": "面無表情的"
  },
  "laconic": {
    "pos": "adj.",
    "en_def": "using very few words",
    "cn_def": "簡潔的；寡言的"
  },
  "intersperse": {
    "pos": "v.",
    "en_def": "to put things here and there among other things",
    "cn_def": "點綴；散布"
  },
  "mumble": {
    "pos": "v.",
    "en_def": "to speak quietly and unclearly",
    "cn_def": "含糊地說"
  },
  "circumscribe": {
    "pos": "v.",
    "en_def": "to limit something",
    "cn_def": "限制"
  },
  "back-translation": {
    "pos": "n.",
    "en_def": "translating a text back into its first language to check it",
    "cn_def": "回譯"
  },
  "voice-over": {
    "pos": "n.",
    "en_def": "a voice heard in a film or video without seeing the speaker",
    "cn_def": "旁白；畫外音"
  },
  "grammatical": {
    "pos": "adj.",
    "en_def": "following or connected with the rules of grammar",
    "cn_def": "文法上的"
  },
  "reprehensible": {
    "pos": "adj.",
    "en_def": "very bad and deserving blame",
    "cn_def": "應受譴責的"
  },
  "appreciation": {
    "pos": "n.",
    "en_def": "understanding and enjoying the value of something",
    "cn_def": "欣賞；體會"
  },
  "translation": {
    "pos": "n.",
    "en_def": "text or speech changed into another language",
    "cn_def": "翻譯；譯文"
  },
  "monotone": {
    "pos": "n.",
    "en_def": "a voice that stays on one level and sounds dull",
    "cn_def": "單調的聲音"
  },
  "hyphen": {
    "pos": "n.",
    "en_def": "a short line ( - ) that joins words",
    "cn_def": "連字號"
  },
  "duplicity": {
    "pos": "n.",
    "en_def": "dishonest behaviour meant to trick people",
    "cn_def": "欺騙；口是心非"
  },
  "convoluted": {
    "pos": "adj.",
    "en_def": "very complicated and hard to follow",
    "cn_def": "錯綜複雜的；費解的"
  },
  "wistful": {
    "pos": "adj.",
    "en_def": "sadly wishing for something",
    "cn_def": "惆悵的；渴望的"
  },
  "morose": {
    "pos": "adj.",
    "en_def": "unhappy and quiet",
    "cn_def": "悶悶不樂的"
  },
  "hackneyed": {
    "pos": "adj.",
    "en_def": "used so often that it is no longer interesting",
    "cn_def": "陳腔濫調的"
  },
  "magnanimous": {
    "pos": "adj.",
    "en_def": "kind and generous, especially to a rival",
    "cn_def": "寬宏大量的"
  },
  "sardonic": {
    "pos": "adj.",
    "en_def": "mocking in a cold, unkind way",
    "cn_def": "嘲諷的；冷嘲熱諷的"
  },
  "transitory": {
    "pos": "adj.",
    "en_def": "lasting only a short time",
    "cn_def": "短暫的"
  },
  "iconoclast": {
    "pos": "n.",
    "en_def": "a person who attacks traditional ideas",
    "cn_def": "反傳統者；打破舊習的人"
  },
  "allegory": {
    "pos": "n.",
    "en_def": "a story with a hidden moral or political meaning",
    "cn_def": "寓言；諷喻"
  },
  "accessibility": {
    "pos": "n.",
    "en_def": "how easy something is to reach, use or understand",
    "cn_def": "可及性；易用性"
  }
};

const EXTRA_GLOSSES = {};
