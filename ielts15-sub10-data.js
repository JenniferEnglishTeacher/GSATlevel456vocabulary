// Topic 15 Subunit 10 Quiz Data: Academic Words 學術單字 3 (bemused – impertinent)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T15 S10 - Academic Words 學術單字 3 (bemused – impertinent)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "bemused",
    "pos": "adj.",
    "cn_def": "困惑的",
    "en_def": "confused and puzzled",
    "sentence": "The tourist looked {{BLANK}} when the waiter answered in fast Taiwanese, so I explained the menu to him in English.",
    "cn": "當服務生用快速的台語回答時，那位觀光客看起來很困惑，所以我用英文為他解釋菜單。"
  },
  {
    "word": "bilateral",
    "pos": "adj.",
    "cn_def": "雙邊的",
    "en_def": "involving two groups or countries",
    "sentence": "The two countries signed a {{BLANK}} agreement, so students can now study the other country's language with free scholarships.",
    "cn": "兩國簽署了一項雙邊協議，所以學生現在能獲得免費獎學金去學習對方國家的語言。"
  },
  {
    "word": "bombastic",
    "pos": "adj.",
    "cn_def": "浮誇的；誇大其詞的",
    "en_def": "using big words to sound important",
    "sentence": "His essay was full of {{BLANK}} language, but the teacher said simple and clear words would have been much better.",
    "cn": "他的文章充滿浮誇的語言，但老師說簡單清楚的字會好得多。"
  },
  {
    "word": "bona fide",
    "pos": "adj.",
    "cn_def": "真正的；真誠的",
    "en_def": "real and genuine",
    "sentence": "Only {{BLANK}} students can get the discount, so you must show your student card at the language centre.",
    "cn": "只有真正的學生才能享有折扣，所以你必須在語言中心出示學生證。"
  },
  {
    "word": "brusque",
    "pos": "adj.",
    "cn_def": "唐突的；粗魯簡短的",
    "en_def": "short and rude in speech",
    "sentence": "The officer's {{BLANK}} reply upset the tourist, but maybe he was just tired and not good at English.",
    "cn": "那位官員粗魯簡短的回答讓觀光客不高興，但也許他只是累了，而且英文不好。"
  },
  {
    "word": "caustic",
    "pos": "adj.",
    "cn_def": "刻薄的；尖酸的",
    "en_def": "very critical in a cruel way",
    "sentence": "The critic wrote a {{BLANK}} review of the translation, but readers still loved the book and bought thousands of copies.",
    "cn": "那位評論家對譯本寫了一篇尖酸刻薄的評論，但讀者仍然喜愛這本書，買了好幾千本。"
  },
  {
    "word": "conciliatory",
    "pos": "adj.",
    "cn_def": "安撫的；和解的",
    "en_def": "trying to end an argument and make peace",
    "sentence": "After the argument, he sent a {{BLANK}} message in Chinese and English, so his friend finally agreed to talk again.",
    "cn": "爭吵後，他用中英文發了一則和解的訊息，所以他朋友終於同意再談一談。"
  },
  {
    "word": "congruent",
    "pos": "adj.",
    "cn_def": "一致的；相符的",
    "en_def": "matching or in agreement with something",
    "sentence": "Your body language should be {{BLANK}} with your words, because a smile with angry words confuses the listener.",
    "cn": "你的肢體語言應該和你說的話一致，因為帶著微笑說生氣的話會讓聽者困惑。"
  },
  {
    "word": "contemptuous",
    "pos": "adj.",
    "cn_def": "輕視的；鄙夷的",
    "en_def": "showing no respect",
    "sentence": "He gave a {{BLANK}} laugh when I made a grammar mistake, so I decided to practise with a kinder partner.",
    "cn": "我犯文法錯誤時他發出輕蔑的笑聲，所以我決定和一位更友善的夥伴練習。"
  },
  {
    "word": "convoluted",
    "pos": "adj.",
    "cn_def": "錯綜複雜的；費解的",
    "en_def": "very complicated and hard to follow",
    "sentence": "The instructions were so {{BLANK}} that nobody could follow them, so the company rewrote them in plain English.",
    "cn": "那些說明複雜難懂到沒人能照著做，所以公司用淺白的英文重寫了。"
  },
  {
    "word": "credulous",
    "pos": "adj.",
    "cn_def": "輕信的；易受騙的",
    "en_def": "too ready to believe things",
    "sentence": "My {{BLANK}} little sister believed that eating carrots would help her speak French, and she ate five that day.",
    "cn": "我那容易輕信的妹妹相信吃紅蘿蔔能幫助她說法文，結果她那天吃了五根。"
  },
  {
    "word": "deft",
    "pos": "adj.",
    "cn_def": "靈巧的；熟練的",
    "en_def": "quick and skilful",
    "sentence": "The interpreter made a {{BLANK}} change to the joke, so the Chinese audience laughed at exactly the right moment.",
    "cn": "口譯員對那個笑話做了巧妙的改動，所以中文觀眾在恰當的時刻笑了出來。"
  },
  {
    "word": "diffident",
    "pos": "adj.",
    "cn_def": "缺乏自信的；羞怯的",
    "en_def": "shy and lacking confidence",
    "sentence": "She was {{BLANK}} about speaking English at first, but the friendly class helped her become one of the most active students.",
    "cn": "她一開始對說英文缺乏自信，但友善的班級幫助她成為最活躍的學生之一。"
  },
  {
    "word": "diminutive",
    "pos": "adj.",
    "cn_def": "極小的；矮小的",
    "en_def": "very small",
    "sentence": "The {{BLANK}} girl had a surprisingly loud voice, so she won the school speech contest without a microphone.",
    "cn": "那個嬌小的女孩有著驚人的大嗓門，所以她沒用麥克風就贏得了學校演講比賽。"
  },
  {
    "word": "effusive",
    "pos": "adj.",
    "cn_def": "熱情洋溢的；過分熱情的",
    "en_def": "showing a lot of feeling, especially praise",
    "sentence": "The author sent the translator an {{BLANK}} thank-you letter, and she hung it on the wall above her desk.",
    "cn": "作家寄給譯者一封熱情洋溢的感謝信，而她把信掛在書桌上方的牆上。"
  },
  {
    "word": "elated",
    "pos": "adj.",
    "cn_def": "興高采烈的",
    "en_def": "very happy and excited",
    "sentence": "I was {{BLANK}} when I got band 7 in IELTS, so I called my parents right away and we went out for dinner.",
    "cn": "我雅思考到 7 分時欣喜若狂，所以我馬上打電話給爸媽，然後我們出去吃晚餐。"
  },
  {
    "word": "facetious",
    "pos": "adj.",
    "cn_def": "開玩笑的；不正經的",
    "en_def": "joking at the wrong time",
    "sentence": "His {{BLANK}} comment during the serious budget meeting annoyed the boss, so he apologised to her later that afternoon.",
    "cn": "他在嚴肅的預算會議中說了一句不正經的話惹惱了老闆，所以他那天下午稍晚向她道歉了。"
  },
  {
    "word": "fickle",
    "pos": "adj.",
    "cn_def": "善變的",
    "en_def": "changing your mind often",
    "sentence": "Teenagers can be {{BLANK}} about slang, so a word that is cool this month may sound silly next year.",
    "cn": "青少年對俚語可能很善變，所以這個月很酷的字明年可能聽起來很蠢。"
  },
  {
    "word": "furtive",
    "pos": "adj.",
    "cn_def": "偷偷摸摸的",
    "en_def": "secret and trying not to be noticed",
    "sentence": "The student took a {{BLANK}} look at his phone dictionary, but the examiner noticed and took it away.",
    "cn": "那名學生偷偷摸摸地看了一眼手機字典，但考官注意到並把它拿走了。"
  },
  {
    "word": "garrulous",
    "pos": "adj.",
    "cn_def": "喋喋不休的",
    "en_def": "talking too much about unimportant things",
    "sentence": "The {{BLANK}} taxi driver talked for the whole trip, but it was great listening practice for my Spanish.",
    "cn": "那位喋喋不休的計程車司機整趟車程都在說話，但這對我的西班牙文是很好的聽力練習。"
  },
  {
    "word": "glib",
    "pos": "adj.",
    "cn_def": "油嘴滑舌的；隨口說的",
    "en_def": "speaking easily but without thinking carefully",
    "sentence": "The politician gave a {{BLANK}} answer about education, so reporters asked him again for real details.",
    "cn": "那位政治人物對教育問題給了一個隨口敷衍的回答，所以記者再次追問具體細節。"
  },
  {
    "word": "hackneyed",
    "pos": "adj.",
    "cn_def": "陳腔濫調的",
    "en_def": "used so often that it is no longer interesting",
    "sentence": "\"At the end of the day\" is a {{BLANK}} phrase, so try to find fresher words in your IELTS essay.",
    "cn": "「At the end of the day」是一個陳腔濫調的片語，所以在你的雅思作文中試著找更新鮮的字詞。"
  },
  {
    "word": "haughty",
    "pos": "adj.",
    "cn_def": "傲慢的",
    "en_def": "proud and unfriendly to others",
    "sentence": "The {{BLANK}} waiter laughed at my French pronunciation, but the chef came out and kindly helped me order.",
    "cn": "那位傲慢的服務生嘲笑我的法文發音，但主廚走出來親切地幫我點餐。"
  },
  {
    "word": "impassive",
    "pos": "adj.",
    "cn_def": "面無表情的",
    "en_def": "showing no emotion",
    "sentence": "The interpreter kept an {{BLANK}} face during the angry speech, because her job was to translate, not to react.",
    "cn": "口譯員在那場憤怒的演講中保持面無表情，因為她的工作是翻譯，而不是做出反應。"
  },
  {
    "word": "impertinent",
    "pos": "adj.",
    "cn_def": "無禮的；不禮貌的",
    "en_def": "rude and not showing respect",
    "sentence": "Asking someone's salary can seem {{BLANK}} in English-speaking countries, so it is better to avoid that question.",
    "cn": "在英語系國家詢問別人的薪水可能顯得無禮，所以最好避免那個問題。"
  }
];

const MCQS = [
  {
    "q": "The tourist looked _____ when the waiter answered in fast Taiwanese, so I explained the menu to him in English.",
    "options": [
      "bemused",
      "incredulous",
      "vapid",
      "malevolent"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The two countries signed a _____ agreement, so students can now study the other country's language with free scholarships.",
    "options": [
      "punctilious",
      "wry",
      "luminous",
      "bilateral"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "His essay was full of _____ language, but the teacher said simple and clear words would have been much better.",
    "options": [
      "incorrigible",
      "mellifluous",
      "bombastic",
      "obtuse"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Only _____ students can get the discount, so you must show your student card at the language centre.",
    "options": [
      "in other words",
      "bona fide",
      "linguistic diversity",
      "language course"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The officer's _____ reply upset the tourist, but maybe he was just tired and not good at English.",
    "options": [
      "provincial",
      "irreverent",
      "obsequious",
      "brusque"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The critic wrote a _____ review of the translation, but readers still loved the book and bought thousands of copies.",
    "options": [
      "strident",
      "caustic",
      "voluble",
      "unabashed"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "After the argument, he sent a _____ message in Chinese and English, so his friend finally agreed to talk again.",
    "options": [
      "affable",
      "vapid",
      "conciliatory",
      "morose"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Your body language should be _____ with your words, because a smile with angry words confuses the listener.",
    "options": [
      "congruent",
      "pluralistic",
      "monolithic",
      "faithful"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "He gave a _____ laugh when I made a grammar mistake, so I decided to practise with a kinder partner.",
    "options": [
      "urbane",
      "contemptuous",
      "amiable",
      "affable"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The instructions were so _____ that nobody could follow them, so the company rewrote them in plain English.",
    "options": [
      "loquacious",
      "intercultural",
      "convoluted",
      "presumptuous"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "My _____ little sister believed that eating carrots would help her speak French, and she ate five that day.",
    "options": [
      "intercultural",
      "ineffable",
      "prosaic",
      "credulous"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The interpreter made a _____ change to the joke, so the Chinese audience laughed at exactly the right moment.",
    "options": [
      "deft",
      "infallible",
      "jocular",
      "incorrigible"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "She was _____ about speaking English at first, but the friendly class helped her become one of the most active students.",
    "options": [
      "cordial",
      "whimsical",
      "diffident",
      "authoritarian"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The _____ girl had a surprisingly loud voice, so she won the school speech contest without a microphone.",
    "options": [
      "diminutive",
      "wry",
      "urbane",
      "relatable"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The author sent the translator an _____ thank-you letter, and she hung it on the wall above her desk.",
    "options": [
      "obsequious",
      "effusive",
      "mercurial",
      "strident"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "I was _____ when I got band 7 in IELTS, so I called my parents right away and we went out for dinner.",
    "options": [
      "wry",
      "incorrigible",
      "loquacious",
      "elated"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "His _____ comment during the serious budget meeting annoyed the boss, so he apologised to her later that afternoon.",
    "options": [
      "facetious",
      "solemn",
      "untranslatable",
      "linguistic"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Teenagers can be _____ about slang, so a word that is cool this month may sound silly next year.",
    "options": [
      "singular",
      "parochial",
      "fickle",
      "indefatigable"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The student took a _____ look at his phone dictionary, but the examiner noticed and took it away.",
    "options": [
      "whimsical",
      "conversational",
      "incredulous",
      "furtive"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The _____ taxi driver talked for the whole trip, but it was great listening practice for my Spanish.",
    "options": [
      "unabashed",
      "garrulous",
      "cross-cultural",
      "mercurial"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The politician gave a _____ answer about education, so reporters asked him again for real details.",
    "options": [
      "sublime",
      "laconic",
      "subservient",
      "glib"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "\"At the end of the day\" is a _____ phrase, so try to find fresher words in your IELTS essay.",
    "options": [
      "hackneyed",
      "incoherent",
      "obtuse",
      "transitory"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The _____ waiter laughed at my French pronunciation, but the chef came out and kindly helped me order.",
    "options": [
      "stoic",
      "vicarious",
      "haughty",
      "unabashed"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The interpreter kept an _____ face during the angry speech, because her job was to translate, not to react.",
    "options": [
      "cordial",
      "impassive",
      "idiomatic",
      "singular"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Asking someone's salary can seem _____ in English-speaking countries, so it is better to avoid that question.",
    "options": [
      "authoritarian",
      "wistful",
      "impertinent",
      "tangential"
    ],
    "answer": 2,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "bemused": {
    "pos": "adj.",
    "en_def": "confused and puzzled",
    "cn_def": "困惑的"
  },
  "bilateral": {
    "pos": "adj.",
    "en_def": "involving two groups or countries",
    "cn_def": "雙邊的"
  },
  "bombastic": {
    "pos": "adj.",
    "en_def": "using big words to sound important",
    "cn_def": "浮誇的；誇大其詞的"
  },
  "bona fide": {
    "pos": "adj.",
    "en_def": "real and genuine",
    "cn_def": "真正的；真誠的"
  },
  "brusque": {
    "pos": "adj.",
    "en_def": "short and rude in speech",
    "cn_def": "唐突的；粗魯簡短的"
  },
  "caustic": {
    "pos": "adj.",
    "en_def": "very critical in a cruel way",
    "cn_def": "刻薄的；尖酸的"
  },
  "conciliatory": {
    "pos": "adj.",
    "en_def": "trying to end an argument and make peace",
    "cn_def": "安撫的；和解的"
  },
  "congruent": {
    "pos": "adj.",
    "en_def": "matching or in agreement with something",
    "cn_def": "一致的；相符的"
  },
  "contemptuous": {
    "pos": "adj.",
    "en_def": "showing no respect",
    "cn_def": "輕視的；鄙夷的"
  },
  "convoluted": {
    "pos": "adj.",
    "en_def": "very complicated and hard to follow",
    "cn_def": "錯綜複雜的；費解的"
  },
  "credulous": {
    "pos": "adj.",
    "en_def": "too ready to believe things",
    "cn_def": "輕信的；易受騙的"
  },
  "deft": {
    "pos": "adj.",
    "en_def": "quick and skilful",
    "cn_def": "靈巧的；熟練的"
  },
  "diffident": {
    "pos": "adj.",
    "en_def": "shy and lacking confidence",
    "cn_def": "缺乏自信的；羞怯的"
  },
  "diminutive": {
    "pos": "adj.",
    "en_def": "very small",
    "cn_def": "極小的；矮小的"
  },
  "effusive": {
    "pos": "adj.",
    "en_def": "showing a lot of feeling, especially praise",
    "cn_def": "熱情洋溢的；過分熱情的"
  },
  "elated": {
    "pos": "adj.",
    "en_def": "very happy and excited",
    "cn_def": "興高采烈的"
  },
  "facetious": {
    "pos": "adj.",
    "en_def": "joking at the wrong time",
    "cn_def": "開玩笑的；不正經的"
  },
  "fickle": {
    "pos": "adj.",
    "en_def": "changing your mind often",
    "cn_def": "善變的"
  },
  "furtive": {
    "pos": "adj.",
    "en_def": "secret and trying not to be noticed",
    "cn_def": "偷偷摸摸的"
  },
  "garrulous": {
    "pos": "adj.",
    "en_def": "talking too much about unimportant things",
    "cn_def": "喋喋不休的"
  },
  "glib": {
    "pos": "adj.",
    "en_def": "speaking easily but without thinking carefully",
    "cn_def": "油嘴滑舌的；隨口說的"
  },
  "hackneyed": {
    "pos": "adj.",
    "en_def": "used so often that it is no longer interesting",
    "cn_def": "陳腔濫調的"
  },
  "haughty": {
    "pos": "adj.",
    "en_def": "proud and unfriendly to others",
    "cn_def": "傲慢的"
  },
  "impassive": {
    "pos": "adj.",
    "en_def": "showing no emotion",
    "cn_def": "面無表情的"
  },
  "impertinent": {
    "pos": "adj.",
    "en_def": "rude and not showing respect",
    "cn_def": "無禮的；不禮貌的"
  },
  "incredulous": {
    "pos": "adj.",
    "en_def": "not able to believe something",
    "cn_def": "不相信的；懷疑的"
  },
  "vapid": {
    "pos": "adj.",
    "en_def": "boring and empty of ideas",
    "cn_def": "空洞乏味的"
  },
  "malevolent": {
    "pos": "adj.",
    "en_def": "wanting to harm others",
    "cn_def": "惡毒的；懷有惡意的"
  },
  "punctilious": {
    "pos": "adj.",
    "en_def": "very careful about details and rules",
    "cn_def": "一絲不苟的"
  },
  "wry": {
    "pos": "adj.",
    "en_def": "showing amused but slightly annoyed humour",
    "cn_def": "苦笑的；挖苦的"
  },
  "luminous": {
    "pos": "adj.",
    "en_def": "very bright or clear",
    "cn_def": "發光的；明亮清晰的"
  },
  "incorrigible": {
    "pos": "adj.",
    "en_def": "unable to be changed or improved",
    "cn_def": "無可救藥的；積習難改的"
  },
  "mellifluous": {
    "pos": "adj.",
    "en_def": "sweet and smooth to hear",
    "cn_def": "（聲音）甜美流暢的"
  },
  "obtuse": {
    "pos": "adj.",
    "en_def": "slow to understand",
    "cn_def": "遲鈍的"
  },
  "in other words": {
    "pos": "phr.",
    "en_def": "used to say something again more simply",
    "cn_def": "換句話說"
  },
  "linguistic diversity": {
    "pos": "n.phr.",
    "en_def": "the variety of different languages in a place",
    "cn_def": "語言多樣性"
  },
  "language course": {
    "pos": "n.phr.",
    "en_def": "a series of lessons to learn a language",
    "cn_def": "語言課程"
  },
  "provincial": {
    "pos": "adj.",
    "en_def": "narrow-minded and not interested in the wider world",
    "cn_def": "眼界狹隘的；鄉土的"
  },
  "irreverent": {
    "pos": "adj.",
    "en_def": "not showing respect for serious things",
    "cn_def": "不敬的；調侃的"
  },
  "obsequious": {
    "pos": "adj.",
    "en_def": "too eager to please or obey",
    "cn_def": "諂媚的；奉承的"
  },
  "strident": {
    "pos": "adj.",
    "en_def": "loud, harsh and forceful",
    "cn_def": "刺耳的；強硬的"
  },
  "voluble": {
    "pos": "adj.",
    "en_def": "talking a lot and quickly",
    "cn_def": "健談的；滔滔不絕的"
  },
  "unabashed": {
    "pos": "adj.",
    "en_def": "not ashamed or embarrassed",
    "cn_def": "毫不掩飾的；不害臊的"
  },
  "affable": {
    "pos": "adj.",
    "en_def": "friendly and easy to talk to",
    "cn_def": "和藹可親的"
  },
  "morose": {
    "pos": "adj.",
    "en_def": "unhappy and quiet",
    "cn_def": "悶悶不樂的"
  },
  "pluralistic": {
    "pos": "adj.",
    "en_def": "accepting many different groups and views",
    "cn_def": "多元的"
  },
  "monolithic": {
    "pos": "adj.",
    "en_def": "large and all the same, without variety",
    "cn_def": "單一龐大的；鐵板一塊的"
  },
  "faithful": {
    "pos": "adj.",
    "en_def": "keeping close to the original meaning",
    "cn_def": "忠實的"
  },
  "urbane": {
    "pos": "adj.",
    "en_def": "polite, confident and comfortable in social situations",
    "cn_def": "溫文爾雅的"
  },
  "amiable": {
    "pos": "adj.",
    "en_def": "pleasant and friendly",
    "cn_def": "友善的；親切的"
  },
  "loquacious": {
    "pos": "adj.",
    "en_def": "talking a lot",
    "cn_def": "健談的；多話的"
  },
  "intercultural": {
    "pos": "adj.",
    "en_def": "between different cultures",
    "cn_def": "跨文化的"
  },
  "presumptuous": {
    "pos": "adj.",
    "en_def": "doing something without the right or permission",
    "cn_def": "冒昧的；放肆的"
  },
  "ineffable": {
    "pos": "adj.",
    "en_def": "too great to be described in words",
    "cn_def": "難以言喻的"
  },
  "prosaic": {
    "pos": "adj.",
    "en_def": "ordinary and without imagination",
    "cn_def": "平凡乏味的"
  },
  "infallible": {
    "pos": "adj.",
    "en_def": "never wrong",
    "cn_def": "絕對正確的；萬無一失的"
  },
  "jocular": {
    "pos": "adj.",
    "en_def": "funny and joking",
    "cn_def": "詼諧的；愛開玩笑的"
  },
  "cordial": {
    "pos": "adj.",
    "en_def": "warm and polite",
    "cn_def": "熱誠的；誠懇的"
  },
  "whimsical": {
    "pos": "adj.",
    "en_def": "playful and unusual",
    "cn_def": "異想天開的；古怪有趣的"
  },
  "authoritarian": {
    "pos": "adj.",
    "en_def": "demanding total obedience",
    "cn_def": "專制的；獨裁的"
  },
  "relatable": {
    "pos": "adj.",
    "en_def": "easy to understand because it is like your own life",
    "cn_def": "能引起共鳴的"
  },
  "mercurial": {
    "pos": "adj.",
    "en_def": "changing mood quickly and suddenly",
    "cn_def": "反覆無常的"
  },
  "solemn": {
    "pos": "adj.",
    "en_def": "serious and formal",
    "cn_def": "莊嚴的；嚴肅的"
  },
  "untranslatable": {
    "pos": "adj.",
    "en_def": "impossible to translate exactly",
    "cn_def": "無法翻譯的"
  },
  "linguistic": {
    "pos": "adj.",
    "en_def": "connected with language",
    "cn_def": "語言的"
  },
  "singular": {
    "pos": "adj.",
    "en_def": "showing only one person or thing",
    "cn_def": "單數的"
  },
  "parochial": {
    "pos": "adj.",
    "en_def": "only interested in your own small area",
    "cn_def": "狹隘的；地方性的"
  },
  "indefatigable": {
    "pos": "adj.",
    "en_def": "never getting tired",
    "cn_def": "不知疲倦的"
  },
  "conversational": {
    "pos": "adj.",
    "en_def": "suitable for everyday talking",
    "cn_def": "會話的；日常交談的"
  },
  "cross-cultural": {
    "pos": "adj.",
    "en_def": "involving two or more cultures",
    "cn_def": "跨文化的"
  },
  "sublime": {
    "pos": "adj.",
    "en_def": "extremely beautiful or excellent",
    "cn_def": "崇高的；絕妙的"
  },
  "laconic": {
    "pos": "adj.",
    "en_def": "using very few words",
    "cn_def": "簡潔的；寡言的"
  },
  "subservient": {
    "pos": "adj.",
    "en_def": "too willing to obey others",
    "cn_def": "卑躬屈膝的；順從的"
  },
  "incoherent": {
    "pos": "adj.",
    "en_def": "not clear or easy to understand",
    "cn_def": "語無倫次的；不連貫的"
  },
  "transitory": {
    "pos": "adj.",
    "en_def": "lasting only a short time",
    "cn_def": "短暫的"
  },
  "stoic": {
    "pos": "adj.",
    "en_def": "calm and not complaining in hard times",
    "cn_def": "堅忍的；淡然處之的"
  },
  "vicarious": {
    "pos": "adj.",
    "en_def": "felt by watching or reading about others",
    "cn_def": "間接體驗的；感同身受的"
  },
  "idiomatic": {
    "pos": "adj.",
    "en_def": "natural and typical of native speakers",
    "cn_def": "道地的；慣用的"
  },
  "wistful": {
    "pos": "adj.",
    "en_def": "sadly wishing for something",
    "cn_def": "惆悵的；渴望的"
  },
  "tangential": {
    "pos": "adj.",
    "en_def": "only slightly connected to the main topic",
    "cn_def": "離題的；關係不大的"
  }
};

const EXTRA_GLOSSES = {};
