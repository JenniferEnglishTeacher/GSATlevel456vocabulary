// Topic 15 Subunit 12 Quiz Data: Academic Words 學術單字 5 (ostentatious – urbane)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T15 S12 - Academic Words 學術單字 5 (ostentatious – urbane)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "ostentatious",
    "pos": "adj.",
    "cn_def": "炫耀的；招搖的",
    "en_def": "showing off wealth or knowledge",
    "sentence": "He used {{BLANK}} words in every sentence to impress people, but most listeners just found him hard to understand.",
    "cn": "他每句話都用炫耀式的艱深字詞來給人留下印象，但大多數聽眾只覺得他很難懂。"
  },
  {
    "word": "petulant",
    "pos": "adj.",
    "cn_def": "任性的；暴躁的",
    "en_def": "childishly bad-tempered",
    "sentence": "The {{BLANK}} boy threw his workbook on the floor, because he did not want to practise spelling any more.",
    "cn": "那個任性的男孩把作業簿丟到地上，因為他不想再練習拼字了。"
  },
  {
    "word": "poignant",
    "pos": "adj.",
    "cn_def": "令人心酸的；感人的",
    "en_def": "making you feel sad and moved",
    "sentence": "The film ends with a {{BLANK}} letter from a soldier to his mother, and many people in the cinema started to cry.",
    "cn": "這部電影以一封士兵寫給母親的感人信件作結，而電影院裡許多人開始哭泣。"
  },
  {
    "word": "presumptuous",
    "pos": "adj.",
    "cn_def": "冒昧的；放肆的",
    "en_def": "doing something without the right or permission",
    "sentence": "It may seem {{BLANK}} to call your professor by her first name, so wait until she invites you to do it.",
    "cn": "直接叫教授的名字可能顯得冒昧，所以要等她邀請你這麼做。"
  },
  {
    "word": "prosaic",
    "pos": "adj.",
    "cn_def": "平凡乏味的",
    "en_def": "ordinary and without imagination",
    "sentence": "The poem was translated into {{BLANK}} language, so the beautiful images of the original were lost.",
    "cn": "這首詩被翻譯成平淡無奇的語言，所以原作中美麗的意象都消失了。"
  },
  {
    "word": "provincial",
    "pos": "adj.",
    "cn_def": "眼界狹隘的；鄉土的",
    "en_def": "narrow-minded and not interested in the wider world",
    "sentence": "Travelling abroad made her less {{BLANK}}, because she learned that many cultures see the world differently.",
    "cn": "出國旅行讓她變得不那麼眼界狹隘，因為她了解到許多文化以不同方式看世界。"
  },
  {
    "word": "punctilious",
    "pos": "adj.",
    "cn_def": "一絲不苟的",
    "en_def": "very careful about details and rules",
    "sentence": "The editor is {{BLANK}} about commas, so she checks every page twice before the book goes to print.",
    "cn": "那位編輯對逗號一絲不苟，所以書付印前她會把每一頁檢查兩次。"
  },
  {
    "word": "raucous",
    "pos": "adj.",
    "cn_def": "喧鬧的；刺耳的",
    "en_def": "loud and rough",
    "sentence": "The {{BLANK}} crowd at the night market made it hard to hear, so we had to shout our orders at the food stall.",
    "cn": "夜市喧鬧的人群讓人很難聽清楚，所以我們必須在小吃攤大聲喊出點餐內容。"
  },
  {
    "word": "recalcitrant",
    "pos": "adj.",
    "cn_def": "頑抗的；不聽話的",
    "en_def": "refusing to obey or cooperate",
    "sentence": "The {{BLANK}} printer refused to work all morning, so we had to hand in our essays by email instead.",
    "cn": "那台不聽使喚的印表機整個早上都不肯運作，所以我們只好改用電子郵件交作文。"
  },
  {
    "word": "replete",
    "pos": "adj.",
    "cn_def": "充滿的",
    "en_def": "full of something",
    "sentence": "Shakespeare's plays are {{BLANK}} with expressions we still use, like \"break the ice\" and \"wild-goose chase\".",
    "cn": "莎士比亞的戲劇充滿我們至今仍在使用的說法，例如「break the ice」和「wild-goose chase」。"
  },
  {
    "word": "reprehensible",
    "pos": "adj.",
    "cn_def": "應受譴責的",
    "en_def": "very bad and deserving blame",
    "sentence": "Copying a classmate's translation is {{BLANK}}, so the teacher gave both students a zero and called their parents.",
    "cn": "抄襲同學的翻譯是應受譴責的，所以老師給兩名學生零分，並打電話給他們的家長。"
  },
  {
    "word": "sanguine",
    "pos": "adj.",
    "cn_def": "樂觀的",
    "en_def": "hopeful and positive",
    "sentence": "The coach is {{BLANK}} about the team's chances, but the players know they still need to train hard every day.",
    "cn": "教練對球隊的勝算很樂觀，但球員們知道他們每天仍需努力訓練。"
  },
  {
    "word": "sardonic",
    "pos": "adj.",
    "cn_def": "嘲諷的；冷嘲熱諷的",
    "en_def": "mocking in a cold, unkind way",
    "sentence": "He gave a {{BLANK}} smile when I mispronounced the word, so I felt embarrassed and stopped speaking.",
    "cn": "我唸錯那個字時他露出嘲諷的微笑，所以我覺得很尷尬，就不再說話了。"
  },
  {
    "word": "stoic",
    "pos": "adj.",
    "cn_def": "堅忍的；淡然處之的",
    "en_def": "calm and not complaining in hard times",
    "sentence": "She stayed {{BLANK}} when her luggage was lost, and she calmly explained the problem in English to the airport staff.",
    "cn": "她的行李遺失時仍保持淡定，並冷靜地用英文向機場人員說明問題。"
  },
  {
    "word": "strident",
    "pos": "adj.",
    "cn_def": "刺耳的；強硬的",
    "en_def": "loud, harsh and forceful",
    "sentence": "The protesters made {{BLANK}} demands for bilingual road signs, and the city finally agreed to change them.",
    "cn": "抗議者強硬地要求設置雙語路標，而市政府最後同意更換。"
  },
  {
    "word": "sublime",
    "pos": "adj.",
    "cn_def": "崇高的；絕妙的",
    "en_def": "extremely beautiful or excellent",
    "sentence": "The singer's voice was {{BLANK}}, so even people who did not understand Italian had tears in their eyes.",
    "cn": "那位歌手的嗓音美妙絕倫，所以即使不懂義大利文的人也眼含淚水。"
  },
  {
    "word": "subservient",
    "pos": "adj.",
    "cn_def": "卑躬屈膝的；順從的",
    "en_def": "too willing to obey others",
    "sentence": "In the old story the servant is always {{BLANK}}, but the modern film shows him as brave and independent.",
    "cn": "在舊故事中那位僕人總是卑躬屈膝，但現代電影把他描繪成勇敢又獨立的人。"
  },
  {
    "word": "surreptitious",
    "pos": "adj.",
    "cn_def": "偷偷的；暗中的",
    "en_def": "done secretly",
    "sentence": "He made a {{BLANK}} recording of the lecture, but the professor saw the phone and asked him to delete it.",
    "cn": "他偷偷地錄下講座內容，但教授看到手機並要求他刪除。"
  },
  {
    "word": "taciturn",
    "pos": "adj.",
    "cn_def": "沉默寡言的",
    "en_def": "not saying much",
    "sentence": "My {{BLANK}} classmate rarely speaks in class, but his written English is the best in our year.",
    "cn": "我那位沉默寡言的同學很少在課堂上說話，但他的英文寫作是我們年級最好的。"
  },
  {
    "word": "tangential",
    "pos": "adj.",
    "cn_def": "離題的；關係不大的",
    "en_def": "only slightly connected to the main topic",
    "sentence": "His answer was {{BLANK}} to the question, so the examiner reminded him to focus on what was asked.",
    "cn": "他的回答和問題關係不大，所以考官提醒他專注在被問的內容上。"
  },
  {
    "word": "terse",
    "pos": "adj.",
    "cn_def": "簡短生硬的",
    "en_def": "very short and a little unfriendly",
    "sentence": "My manager sent a {{BLANK}} reply that only said \"Fix it\", so I wasn't sure whether she was angry.",
    "cn": "我的主管回了一則簡短生硬的訊息，只寫著「修好它」，所以我不確定她是否生氣了。"
  },
  {
    "word": "transitory",
    "pos": "adj.",
    "cn_def": "短暫的",
    "en_def": "lasting only a short time",
    "sentence": "Many slang words are {{BLANK}}, and expressions that were popular ten years ago now sound very old-fashioned.",
    "cn": "許多俚語是短暫的，十年前流行的說法現在聽起來非常過時。"
  },
  {
    "word": "trenchant",
    "pos": "adj.",
    "cn_def": "一針見血的；尖銳的",
    "en_def": "clear, strong and direct in criticism",
    "sentence": "The editor's {{BLANK}} comments improved my article, although they hurt my feelings when I first read them.",
    "cn": "編輯一針見血的意見改善了我的文章，雖然我第一次讀時有點受傷。"
  },
  {
    "word": "unassuming",
    "pos": "adj.",
    "cn_def": "謙遜的；不張揚的",
    "en_def": "modest and not wanting attention",
    "sentence": "The {{BLANK}} old man in our neighbourhood never talks about himself, but he turned out to be a famous translator of Russian novels.",
    "cn": "我們社區裡那位不張揚的老先生從不談論自己，但他原來是一位知名的俄文小說譯者。"
  },
  {
    "word": "urbane",
    "pos": "adj.",
    "cn_def": "溫文爾雅的",
    "en_def": "polite, confident and comfortable in social situations",
    "sentence": "The {{BLANK}} host made every guest feel welcome, and he switched easily between English, French and Chinese.",
    "cn": "那位溫文儒雅的主人讓每位客人都感到受歡迎，而且他能輕鬆地在英文、法文和中文之間切換。"
  }
];

const MCQS = [
  {
    "q": "He used _____ words in every sentence to impress people, but most listeners just found him hard to understand.",
    "options": [
      "ingenuous",
      "trilingual",
      "ostentatious",
      "malevolent"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The _____ boy threw his workbook on the floor, because he did not want to practise spelling any more.",
    "options": [
      "petulant",
      "deft",
      "speech-to-text",
      "virulent"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The film ends with a _____ letter from a soldier to his mother, and many people in the cinema started to cry.",
    "options": [
      "vicarious",
      "poignant",
      "furtive",
      "elated"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "It may seem _____ to call your professor by her first name, so wait until she invites you to do it.",
    "options": [
      "vitriolic",
      "diffident",
      "amiable",
      "presumptuous"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The poem was translated into _____ language, so the beautiful images of the original were lost.",
    "options": [
      "prosaic",
      "nebulous",
      "contemptuous",
      "mellifluous"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Travelling abroad made her less _____, because she learned that many cultures see the world differently.",
    "options": [
      "inscrutable",
      "laconic",
      "provincial",
      "diffident"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The editor is _____ about commas, so she checks every page twice before the book goes to print.",
    "options": [
      "impassive",
      "parochial",
      "magnanimous",
      "punctilious"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The _____ crowd at the night market made it hard to hear, so we had to shout our orders at the food stall.",
    "options": [
      "singular",
      "raucous",
      "conciliatory",
      "informal"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The _____ printer refused to work all morning, so we had to hand in our essays by email instead.",
    "options": [
      "genial",
      "diffident",
      "recalcitrant",
      "amiable"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Shakespeare's plays are _____ with expressions we still use, like \"break the ice\" and \"wild-goose chase\".",
    "options": [
      "contemptuous",
      "replete",
      "parochial",
      "effusive"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Copying a classmate's translation is _____, so the teacher gave both students a zero and called their parents.",
    "options": [
      "reprehensible",
      "tongue-tied",
      "vapid",
      "prescriptive"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The coach is _____ about the team's chances, but the players know they still need to train hard every day.",
    "options": [
      "wry",
      "ungrammatical",
      "jocular",
      "sanguine"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "He gave a _____ smile when I mispronounced the word, so I felt embarrassed and stopped speaking.",
    "options": [
      "expressive",
      "irreverent",
      "sardonic",
      "pensive"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "She stayed _____ when her luggage was lost, and she calmly explained the problem in English to the airport staff.",
    "options": [
      "stoic",
      "germane",
      "impassive",
      "incoherent"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The protesters made _____ demands for bilingual road signs, and the city finally agreed to change them.",
    "options": [
      "parochial",
      "strident",
      "pluralistic",
      "affable"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The singer's voice was _____, so even people who did not understand Italian had tears in their eyes.",
    "options": [
      "vitriolic",
      "genial",
      "audible",
      "sublime"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "In the old story the servant is always _____, but the modern film shows him as brave and independent.",
    "options": [
      "subservient",
      "ineffable",
      "admissible",
      "wry"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "He made a _____ recording of the lecture, but the professor saw the phone and asked him to delete it.",
    "options": [
      "elated",
      "vitriolic",
      "luminous",
      "surreptitious"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "My _____ classmate rarely speaks in class, but his written English is the best in our year.",
    "options": [
      "bombastic",
      "taciturn",
      "wistful",
      "vehement"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "His answer was _____ to the question, so the examiner reminded him to focus on what was asked.",
    "options": [
      "idiomatic",
      "literate",
      "tangential",
      "diminutive"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "My manager sent a _____ reply that only said \"Fix it\", so I wasn't sure whether she was angry.",
    "options": [
      "germane",
      "wistful",
      "cordial",
      "terse"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Many slang words are _____, and expressions that were popular ten years ago now sound very old-fashioned.",
    "options": [
      "transitory",
      "obsequious",
      "pithy",
      "bemused"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The editor's _____ comments improved my article, although they hurt my feelings when I first read them.",
    "options": [
      "monolithic",
      "trenchant",
      "caustic",
      "amicable"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The _____ old man in our neighbourhood never talks about himself, but he turned out to be a famous translator of Russian novels.",
    "options": [
      "ungrammatical",
      "indefatigable",
      "unassuming",
      "incorrigible"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The _____ host made every guest feel welcome, and he switched easily between English, French and Chinese.",
    "options": [
      "obtuse",
      "effusive",
      "implacable",
      "urbane"
    ],
    "answer": 3,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "ostentatious": {
    "pos": "adj.",
    "en_def": "showing off wealth or knowledge",
    "cn_def": "炫耀的；招搖的"
  },
  "petulant": {
    "pos": "adj.",
    "en_def": "childishly bad-tempered",
    "cn_def": "任性的；暴躁的"
  },
  "poignant": {
    "pos": "adj.",
    "en_def": "making you feel sad and moved",
    "cn_def": "令人心酸的；感人的"
  },
  "presumptuous": {
    "pos": "adj.",
    "en_def": "doing something without the right or permission",
    "cn_def": "冒昧的；放肆的"
  },
  "prosaic": {
    "pos": "adj.",
    "en_def": "ordinary and without imagination",
    "cn_def": "平凡乏味的"
  },
  "provincial": {
    "pos": "adj.",
    "en_def": "narrow-minded and not interested in the wider world",
    "cn_def": "眼界狹隘的；鄉土的"
  },
  "punctilious": {
    "pos": "adj.",
    "en_def": "very careful about details and rules",
    "cn_def": "一絲不苟的"
  },
  "raucous": {
    "pos": "adj.",
    "en_def": "loud and rough",
    "cn_def": "喧鬧的；刺耳的"
  },
  "recalcitrant": {
    "pos": "adj.",
    "en_def": "refusing to obey or cooperate",
    "cn_def": "頑抗的；不聽話的"
  },
  "replete": {
    "pos": "adj.",
    "en_def": "full of something",
    "cn_def": "充滿的"
  },
  "reprehensible": {
    "pos": "adj.",
    "en_def": "very bad and deserving blame",
    "cn_def": "應受譴責的"
  },
  "sanguine": {
    "pos": "adj.",
    "en_def": "hopeful and positive",
    "cn_def": "樂觀的"
  },
  "sardonic": {
    "pos": "adj.",
    "en_def": "mocking in a cold, unkind way",
    "cn_def": "嘲諷的；冷嘲熱諷的"
  },
  "stoic": {
    "pos": "adj.",
    "en_def": "calm and not complaining in hard times",
    "cn_def": "堅忍的；淡然處之的"
  },
  "strident": {
    "pos": "adj.",
    "en_def": "loud, harsh and forceful",
    "cn_def": "刺耳的；強硬的"
  },
  "sublime": {
    "pos": "adj.",
    "en_def": "extremely beautiful or excellent",
    "cn_def": "崇高的；絕妙的"
  },
  "subservient": {
    "pos": "adj.",
    "en_def": "too willing to obey others",
    "cn_def": "卑躬屈膝的；順從的"
  },
  "surreptitious": {
    "pos": "adj.",
    "en_def": "done secretly",
    "cn_def": "偷偷的；暗中的"
  },
  "taciturn": {
    "pos": "adj.",
    "en_def": "not saying much",
    "cn_def": "沉默寡言的"
  },
  "tangential": {
    "pos": "adj.",
    "en_def": "only slightly connected to the main topic",
    "cn_def": "離題的；關係不大的"
  },
  "terse": {
    "pos": "adj.",
    "en_def": "very short and a little unfriendly",
    "cn_def": "簡短生硬的"
  },
  "transitory": {
    "pos": "adj.",
    "en_def": "lasting only a short time",
    "cn_def": "短暫的"
  },
  "trenchant": {
    "pos": "adj.",
    "en_def": "clear, strong and direct in criticism",
    "cn_def": "一針見血的；尖銳的"
  },
  "unassuming": {
    "pos": "adj.",
    "en_def": "modest and not wanting attention",
    "cn_def": "謙遜的；不張揚的"
  },
  "urbane": {
    "pos": "adj.",
    "en_def": "polite, confident and comfortable in social situations",
    "cn_def": "溫文爾雅的"
  },
  "ingenuous": {
    "pos": "adj.",
    "en_def": "innocent and trusting",
    "cn_def": "天真的；坦率的"
  },
  "trilingual": {
    "pos": "adj.",
    "en_def": "able to speak three languages",
    "cn_def": "會說三種語言的"
  },
  "malevolent": {
    "pos": "adj.",
    "en_def": "wanting to harm others",
    "cn_def": "惡毒的；懷有惡意的"
  },
  "deft": {
    "pos": "adj.",
    "en_def": "quick and skilful",
    "cn_def": "靈巧的；熟練的"
  },
  "speech-to-text": {
    "pos": "adj.",
    "en_def": "changing spoken words into written words automatically",
    "cn_def": "語音轉文字的"
  },
  "virulent": {
    "pos": "adj.",
    "en_def": "extremely strong, harmful or full of hate",
    "cn_def": "猛烈的；惡毒的"
  },
  "vicarious": {
    "pos": "adj.",
    "en_def": "felt by watching or reading about others",
    "cn_def": "間接體驗的；感同身受的"
  },
  "furtive": {
    "pos": "adj.",
    "en_def": "secret and trying not to be noticed",
    "cn_def": "偷偷摸摸的"
  },
  "elated": {
    "pos": "adj.",
    "en_def": "very happy and excited",
    "cn_def": "興高采烈的"
  },
  "vitriolic": {
    "pos": "adj.",
    "en_def": "full of bitter, angry criticism",
    "cn_def": "尖酸刻薄的"
  },
  "diffident": {
    "pos": "adj.",
    "en_def": "shy and lacking confidence",
    "cn_def": "缺乏自信的；羞怯的"
  },
  "amiable": {
    "pos": "adj.",
    "en_def": "pleasant and friendly",
    "cn_def": "友善的；親切的"
  },
  "nebulous": {
    "pos": "adj.",
    "en_def": "unclear and not well defined",
    "cn_def": "模糊的；含糊不清的"
  },
  "contemptuous": {
    "pos": "adj.",
    "en_def": "showing no respect",
    "cn_def": "輕視的；鄙夷的"
  },
  "mellifluous": {
    "pos": "adj.",
    "en_def": "sweet and smooth to hear",
    "cn_def": "（聲音）甜美流暢的"
  },
  "inscrutable": {
    "pos": "adj.",
    "en_def": "impossible to understand or read",
    "cn_def": "難以理解的；高深莫測的"
  },
  "laconic": {
    "pos": "adj.",
    "en_def": "using very few words",
    "cn_def": "簡潔的；寡言的"
  },
  "impassive": {
    "pos": "adj.",
    "en_def": "showing no emotion",
    "cn_def": "面無表情的"
  },
  "parochial": {
    "pos": "adj.",
    "en_def": "only interested in your own small area",
    "cn_def": "狹隘的；地方性的"
  },
  "magnanimous": {
    "pos": "adj.",
    "en_def": "kind and generous, especially to a rival",
    "cn_def": "寬宏大量的"
  },
  "singular": {
    "pos": "adj.",
    "en_def": "showing only one person or thing",
    "cn_def": "單數的"
  },
  "conciliatory": {
    "pos": "adj.",
    "en_def": "trying to end an argument and make peace",
    "cn_def": "安撫的；和解的"
  },
  "informal": {
    "pos": "adj.",
    "en_def": "relaxed and used with friends, not in official situations",
    "cn_def": "非正式的"
  },
  "genial": {
    "pos": "adj.",
    "en_def": "friendly and cheerful",
    "cn_def": "親切友好的；和藹的"
  },
  "effusive": {
    "pos": "adj.",
    "en_def": "showing a lot of feeling, especially praise",
    "cn_def": "熱情洋溢的；過分熱情的"
  },
  "tongue-tied": {
    "pos": "adj.",
    "en_def": "unable to speak because you are nervous",
    "cn_def": "緊張得說不出話"
  },
  "vapid": {
    "pos": "adj.",
    "en_def": "boring and empty of ideas",
    "cn_def": "空洞乏味的"
  },
  "prescriptive": {
    "pos": "adj.",
    "en_def": "telling people how they should use language",
    "cn_def": "規範性的"
  },
  "wry": {
    "pos": "adj.",
    "en_def": "showing amused but slightly annoyed humour",
    "cn_def": "苦笑的；挖苦的"
  },
  "ungrammatical": {
    "pos": "adj.",
    "en_def": "not following the rules of grammar",
    "cn_def": "不合文法的"
  },
  "jocular": {
    "pos": "adj.",
    "en_def": "funny and joking",
    "cn_def": "詼諧的；愛開玩笑的"
  },
  "expressive": {
    "pos": "adj.",
    "en_def": "showing feelings clearly",
    "cn_def": "富有表現力的"
  },
  "irreverent": {
    "pos": "adj.",
    "en_def": "not showing respect for serious things",
    "cn_def": "不敬的；調侃的"
  },
  "pensive": {
    "pos": "adj.",
    "en_def": "thinking deeply, often a little sadly",
    "cn_def": "沉思的"
  },
  "germane": {
    "pos": "adj.",
    "en_def": "relevant to the subject",
    "cn_def": "密切相關的"
  },
  "incoherent": {
    "pos": "adj.",
    "en_def": "not clear or easy to understand",
    "cn_def": "語無倫次的；不連貫的"
  },
  "pluralistic": {
    "pos": "adj.",
    "en_def": "accepting many different groups and views",
    "cn_def": "多元的"
  },
  "affable": {
    "pos": "adj.",
    "en_def": "friendly and easy to talk to",
    "cn_def": "和藹可親的"
  },
  "audible": {
    "pos": "adj.",
    "en_def": "loud enough to be heard",
    "cn_def": "聽得見的"
  },
  "ineffable": {
    "pos": "adj.",
    "en_def": "too great to be described in words",
    "cn_def": "難以言喻的"
  },
  "admissible": {
    "pos": "adj.",
    "en_def": "allowed or accepted, especially in court",
    "cn_def": "可被接受的；可採納的"
  },
  "luminous": {
    "pos": "adj.",
    "en_def": "very bright or clear",
    "cn_def": "發光的；明亮清晰的"
  },
  "bombastic": {
    "pos": "adj.",
    "en_def": "using big words to sound important",
    "cn_def": "浮誇的；誇大其詞的"
  },
  "wistful": {
    "pos": "adj.",
    "en_def": "sadly wishing for something",
    "cn_def": "惆悵的；渴望的"
  },
  "vehement": {
    "pos": "adj.",
    "en_def": "showing strong feeling",
    "cn_def": "激烈的；強烈的"
  },
  "idiomatic": {
    "pos": "adj.",
    "en_def": "natural and typical of native speakers",
    "cn_def": "道地的；慣用的"
  },
  "literate": {
    "pos": "adj.",
    "en_def": "able to read and write",
    "cn_def": "識字的"
  },
  "diminutive": {
    "pos": "adj.",
    "en_def": "very small",
    "cn_def": "極小的；矮小的"
  },
  "cordial": {
    "pos": "adj.",
    "en_def": "warm and polite",
    "cn_def": "熱誠的；誠懇的"
  },
  "obsequious": {
    "pos": "adj.",
    "en_def": "too eager to please or obey",
    "cn_def": "諂媚的；奉承的"
  },
  "pithy": {
    "pos": "adj.",
    "en_def": "short but full of meaning",
    "cn_def": "精闢的；簡潔有力的"
  },
  "bemused": {
    "pos": "adj.",
    "en_def": "confused and puzzled",
    "cn_def": "困惑的"
  },
  "monolithic": {
    "pos": "adj.",
    "en_def": "large and all the same, without variety",
    "cn_def": "單一龐大的；鐵板一塊的"
  },
  "caustic": {
    "pos": "adj.",
    "en_def": "very critical in a cruel way",
    "cn_def": "刻薄的；尖酸的"
  },
  "amicable": {
    "pos": "adj.",
    "en_def": "friendly and without arguments",
    "cn_def": "友好的；和睦的"
  },
  "indefatigable": {
    "pos": "adj.",
    "en_def": "never getting tired",
    "cn_def": "不知疲倦的"
  },
  "incorrigible": {
    "pos": "adj.",
    "en_def": "unable to be changed or improved",
    "cn_def": "無可救藥的；積習難改的"
  },
  "obtuse": {
    "pos": "adj.",
    "en_def": "slow to understand",
    "cn_def": "遲鈍的"
  },
  "implacable": {
    "pos": "adj.",
    "en_def": "impossible to calm or change",
    "cn_def": "無法平息的；毫不妥協的"
  }
};

const EXTRA_GLOSSES = {};
