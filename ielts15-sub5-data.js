// Topic 15 Subunit 5 Quiz Data: Learning & Using Languages 語言學習與使用
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T15 S05 - Learning & Using Languages 語言學習與使用",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "foreign language",
    "pos": "n.phr.",
    "cn_def": "外語",
    "en_def": "a language that is not spoken in your own country",
    "sentence": "Learning a {{BLANK}} opens many doors, because you can travel more easily and make friends from other cultures.",
    "cn": "學習一門外語能打開許多扇門，因為你可以更輕鬆地旅行，也能結交其他文化的朋友。"
  },
  {
    "word": "target language",
    "pos": "n.phr.",
    "cn_def": "目標語言",
    "en_def": "the language you are learning or translating into",
    "sentence": "Try to think in the {{BLANK}} when you speak, because translating every sentence in your head makes you slow.",
    "cn": "說話時試著用目標語言思考，因為在腦中翻譯每個句子會讓你變慢。"
  },
  {
    "word": "language barrier",
    "pos": "n.phr.",
    "cn_def": "語言障礙",
    "en_def": "a problem in communication caused by different languages",
    "sentence": "There was a {{BLANK}} between the doctor and the tourist, so the hospital called a volunteer who spoke Thai.",
    "cn": "醫生和那位觀光客之間存在語言障礙，所以醫院找來一位會說泰語的志工。"
  },
  {
    "word": "language exchange",
    "pos": "n.phr.",
    "cn_def": "語言交換",
    "en_def": "meeting someone to practise each other's languages",
    "sentence": "I joined a {{BLANK}} with a student from Spain, so I teach her Chinese for an hour and she teaches me Spanish.",
    "cn": "我和一位來自西班牙的學生參加了語言交換，所以我教她一小時中文，她教我西班牙文。"
  },
  {
    "word": "polyglot",
    "pos": "n.",
    "cn_def": "通曉多種語言的人",
    "en_def": "a person who can speak many languages",
    "sentence": "My uncle is a {{BLANK}} who speaks seven languages, and he says the secret is to practise a little every single day.",
    "cn": "我叔叔是一位會說七種語言的多語者，而他說祕訣就是每天練習一點點。"
  },
  {
    "word": "trilingual",
    "pos": "adj.",
    "cn_def": "會說三種語言的",
    "en_def": "able to speak three languages",
    "sentence": "Children in Singapore often grow up {{BLANK}}, because they speak English at school and other languages with their families.",
    "cn": "新加坡的孩子常常在三語環境中長大，因為他們在學校說英文，和家人說其他語言。"
  },
  {
    "word": "converse",
    "pos": "v.",
    "cn_def": "交談",
    "en_def": "to have a conversation",
    "sentence": "After a year in Tokyo, Ben could {{BLANK}} easily with shop owners, although he still found business meetings difficult.",
    "cn": "在東京待了一年後，班已經能輕鬆地和店主交談，雖然他仍覺得商務會議很困難。"
  },
  {
    "word": "chat",
    "pos": "v.",
    "cn_def": "聊天",
    "en_def": "to talk in a friendly, informal way",
    "sentence": "We {{BLANK}} with the hotel staff every morning, so by the end of the trip our Italian had improved a lot.",
    "cn": "我們每天早上都和飯店員工聊天，所以到旅行結束時，我們的義大利文進步了很多。"
  },
  {
    "word": "language learner",
    "pos": "n.phr.",
    "cn_def": "語言學習者",
    "en_def": "a person who is studying a language",
    "sentence": "Every {{BLANK}} makes mistakes, so don't be afraid to speak, because mistakes show you what to practise next.",
    "cn": "每個語言學習者都會犯錯，所以不要害怕開口，因為錯誤會告訴你接下來該練習什麼。"
  },
  {
    "word": "speaking test",
    "pos": "n.phr.",
    "cn_def": "口說測驗",
    "en_def": "an exam where you talk to an examiner",
    "sentence": "I felt nervous before the IELTS {{BLANK}}, but the examiner smiled and asked easy questions about my hometown first.",
    "cn": "在雅思口說測驗前我很緊張，但考官面帶微笑，先問了一些關於我家鄉的簡單問題。"
  },
  {
    "word": "listening comprehension",
    "pos": "n.phr.",
    "cn_def": "聽力理解",
    "en_def": "understanding what you hear",
    "sentence": "Watching the news in English improved my {{BLANK}}, and now I can follow lectures without reading the subtitles.",
    "cn": "看英文新聞提升了我的聽力理解，現在我不看字幕也能聽懂講座。"
  },
  {
    "word": "conversational",
    "pos": "adj.",
    "cn_def": "會話的；日常交談的",
    "en_def": "suitable for everyday talking",
    "sentence": "She only has {{BLANK}} Japanese, so she can order food and ask for directions, but she cannot read business documents.",
    "cn": "她只會日常會話程度的日文，所以她能點餐和問路，但看不懂商業文件。"
  },
  {
    "word": "self-correct",
    "pos": "v.",
    "cn_def": "自我修正",
    "en_def": "to notice and fix your own mistakes",
    "sentence": "Good speakers often {{BLANK}} in the middle of a sentence, and examiners see this as a sign of strong language awareness.",
    "cn": "好的說話者常常在句子說到一半時自我修正，而考官把這看作語言意識強的跡象。"
  },
  {
    "word": "native-like",
    "pos": "adj.",
    "cn_def": "接近母語的",
    "en_def": "very close to the way a native speaker talks",
    "sentence": "Her pronunciation is almost {{BLANK}}, so most people think she grew up in London, even though she was born in Tainan.",
    "cn": "她的發音幾乎像母語人士一樣，所以大多數人以為她在倫敦長大，即使她出生在台南。"
  },
  {
    "word": "shadowing",
    "pos": "n.",
    "cn_def": "跟讀法",
    "en_def": "repeating what a speaker says right after hearing it",
    "sentence": "My tutor suggested {{BLANK}} to improve my speaking, so I repeat each line of a podcast a second after I hear it.",
    "cn": "我的家教建議用跟讀法來提升口說，所以我會在聽到播客的每一句後一秒就跟著複述。"
  },
  {
    "word": "expat",
    "pos": "n.",
    "cn_def": "旅居海外者；外籍人士",
    "en_def": "a person living in a foreign country",
    "sentence": "As an {{BLANK}} in Taipei, Mark took Chinese lessons, because he wanted to talk with his neighbours and not only with foreigners.",
    "cn": "身為在台北的外籍人士，馬克上了中文課，因為他想和鄰居交談，而不只是和外國人說話。"
  },
  {
    "word": "verbalise",
    "pos": "v.",
    "cn_def": "用言語表達",
    "en_def": "to express ideas or feelings in words",
    "sentence": "Young children often cry when they are upset, because they cannot {{BLANK}} their feelings clearly yet.",
    "cn": "幼兒難過時常常哭，因為他們還無法清楚地用言語表達自己的感受。"
  },
  {
    "word": "interlocutor",
    "pos": "n.",
    "cn_def": "對話者",
    "en_def": "a person you are talking with",
    "sentence": "In the speaking exam you should look at your {{BLANK}} and respond to their questions, rather than reciting a memorised speech.",
    "cn": "在口說考試中，你應該看著你的對話者並回應他們的問題，而不是背誦事先記好的講稿。"
  },
  {
    "word": "greeting",
    "pos": "n.",
    "cn_def": "問候語；打招呼",
    "en_def": "words you say when you meet someone",
    "sentence": "In Japan a bow is a common {{BLANK}}, but in many Western countries people usually shake hands or wave.",
    "cn": "在日本，鞠躬是常見的打招呼方式，但在許多西方國家，人們通常握手或揮手。"
  },
  {
    "word": "farewell",
    "pos": "n.",
    "cn_def": "告別；道別",
    "en_def": "the act of saying goodbye",
    "sentence": "We said our {{BLANK}} at the airport, and my host family gave me a card written in English and Chinese.",
    "cn": "我們在機場道別，而我的寄宿家庭送了我一張用英文和中文寫的卡片。"
  },
  {
    "word": "politeness",
    "pos": "n.",
    "cn_def": "禮貌",
    "en_def": "the quality of behaving and speaking with respect",
    "sentence": "In English, {{BLANK}} often means adding \"could you\" or \"please\", so \"Give me water\" may sound rude to a waiter.",
    "cn": "在英文中，禮貌常常意味著加上「could you」或「please」，所以對服務生說「給我水」聽起來可能很無禮。"
  },
  {
    "word": "honorific",
    "pos": "n.",
    "cn_def": "敬語；尊稱",
    "en_def": "a word or title that shows respect",
    "sentence": "Korean has a special {{BLANK}} ending for older people, so young learners must think carefully about who they are talking to.",
    "cn": "韓文對長輩有特別的敬語字尾，所以年輕的學習者必須仔細想想自己在跟誰說話。"
  },
  {
    "word": "formality",
    "pos": "n.",
    "cn_def": "正式程度",
    "en_def": "the level of politeness and seriousness in language",
    "sentence": "The {{BLANK}} of your email should match the reader, so you write \"Dear Professor Lin\" but \"Hi Amy\" to a friend.",
    "cn": "你電子郵件的正式程度應該配合讀者，所以你會寫「親愛的林教授」，但寫給朋友就寫「嗨，艾咪」。"
  },
  {
    "word": "language partner",
    "pos": "n.phr.",
    "cn_def": "語伴",
    "en_def": "a person you practise a language with",
    "sentence": "My {{BLANK}} lives in Canada, so we video chat every Sunday, and she corrects my grammar very kindly.",
    "cn": "我的語伴住在加拿大，所以我們每週日視訊聊天，而她會很親切地糾正我的文法。"
  },
  {
    "word": "language skills",
    "pos": "n.phr.",
    "cn_def": "語言能力",
    "en_def": "abilities in listening, speaking, reading and writing",
    "sentence": "Employers value strong {{BLANK}}, so people who can write clear English emails often get better jobs.",
    "cn": "雇主重視良好的語言能力，所以能寫清楚英文電子郵件的人常常找到更好的工作。"
  },
  {
    "word": "phrasebook",
    "pos": "n.",
    "cn_def": "常用語手冊",
    "en_def": "a small book of useful phrases for travellers",
    "sentence": "We carried a Thai {{BLANK}} on our trip, but most of the time we used hand signals and smiles instead.",
    "cn": "我們旅行時帶了一本泰語常用語手冊，但大多數時候我們還是用手勢和微笑溝通。"
  },
  {
    "word": "language course",
    "pos": "n.phr.",
    "cn_def": "語言課程",
    "en_def": "a series of lessons to learn a language",
    "sentence": "She took a six-week {{BLANK}} in Seoul last summer, and she can now read menus and chat with taxi drivers.",
    "cn": "她去年夏天在首爾上了六週的語言課程，現在她能看懂菜單，也能和計程車司機聊天。"
  },
  {
    "word": "crash course",
    "pos": "n.phr.",
    "cn_def": "速成課程",
    "en_def": "a short, fast course that teaches the basics",
    "sentence": "Before his business trip to Germany, my dad took a {{BLANK}} in German, but he still needed an app in meetings.",
    "cn": "在去德國出差之前，我爸爸上了一個德文速成課程，但他在會議中仍需要用應用程式。"
  }
];

const MCQS = [
  {
    "q": "Learning a _____ opens many doors, because you can travel more easily and make friends from other cultures.",
    "options": [
      "constructed language",
      "language planning",
      "speech community",
      "foreign language"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Try to think in the _____ when you speak, because translating every sentence in your head makes you slow.",
    "options": [
      "language death",
      "translation app",
      "target language",
      "part of speech"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "There was a _____ between the doctor and the tourist, so the hospital called a volunteer who spoke Thai.",
    "options": [
      "compound word",
      "language barrier",
      "Chinese character",
      "quotation marks"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "I joined a _____ with a student from Spain, so I teach her Chinese for an hour and she teaches me Spanish.",
    "options": [
      "language exchange",
      "silent letter",
      "quotation marks",
      "language pair"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "My uncle is a _____ who speaks seven languages, and he says the secret is to practise a little every single day.",
    "options": [
      "disdain",
      "linguistics",
      "allusion",
      "polyglot"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Children in Singapore often grow up _____, because they speak English at school and other languages with their families.",
    "options": [
      "authoritarian",
      "trilingual",
      "grammatical",
      "hackneyed"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "After a year in Tokyo, Ben could _____ easily with shop owners, although he still found business meetings difficult.",
    "options": [
      "converse",
      "mistranslate",
      "rephrase",
      "rhyme"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "We _____ with the hotel staff every morning, so by the end of the trip our Italian had improved a lot.",
    "options": [
      "mollify",
      "circumscribe",
      "chat",
      "transliterate"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Every _____ makes mistakes, so don't be afraid to speak, because mistakes show you what to practise next.",
    "options": [
      "court interpreter",
      "language learner",
      "official language",
      "passive voice"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "I felt nervous before the IELTS _____, but the examiner smiled and asked easy questions about my hometown first.",
    "options": [
      "speaking test",
      "compound word",
      "word processor",
      "source language"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Watching the news in English improved my _____, and now I can follow lectures without reading the subtitles.",
    "options": [
      "oral tradition",
      "court interpreter",
      "word family",
      "listening comprehension"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "She only has _____ Japanese, so she can order food and ask for directions, but she cannot read business documents.",
    "options": [
      "furtive",
      "mellifluous",
      "conversational",
      "facetious"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Good speakers often _____ in the middle of a sentence, and examiners see this as a sign of strong language awareness.",
    "options": [
      "vacillate",
      "dub",
      "atone",
      "self-correct"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Her pronunciation is almost _____, so most people think she grew up in London, even though she was born in Tainan.",
    "options": [
      "infallible",
      "glib",
      "native-like",
      "irreverent"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "My tutor suggested _____ to improve my speaking, so I repeat each line of a podcast a second after I hear it.",
    "options": [
      "antithesis",
      "shadowing",
      "anecdote",
      "inflection"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "As an _____ in Taipei, Mark took Chinese lessons, because he wanted to talk with his neighbours and not only with foreigners.",
    "options": [
      "expat",
      "eulogy",
      "phoneme",
      "hubris"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Young children often cry when they are upset, because they cannot _____ their feelings clearly yet.",
    "options": [
      "vacillate",
      "mumble",
      "circumscribe",
      "verbalise"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "In the speaking exam you should look at your _____ and respond to their questions, rather than reciting a memorised speech.",
    "options": [
      "predilection",
      "interlocutor",
      "hyphen",
      "back-translation"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "In Japan a bow is a common _____, but in many Western countries people usually shake hands or wave.",
    "options": [
      "calligraphy",
      "dissonance",
      "greeting",
      "pinyin"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "We said our _____ at the airport, and my host family gave me a card written in English and Chinese.",
    "options": [
      "farewell",
      "circumlocution",
      "qualm",
      "prefix"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "In English, _____ often means adding \"could you\" or \"please\", so \"Give me water\" may sound rude to a waiter.",
    "options": [
      "intonation",
      "politeness",
      "profanity",
      "decorum"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Korean has a special _____ ending for older people, so young learners must think carefully about who they are talking to.",
    "options": [
      "vowel",
      "qualm",
      "heresy",
      "honorific"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The _____ of your email should match the reader, so you write \"Dear Professor Lin\" but \"Hi Amy\" to a friend.",
    "options": [
      "formality",
      "palindrome",
      "prefix",
      "psycholinguistics"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "My _____ lives in Canada, so we video chat every Sunday, and she corrects my grammar very kindly.",
    "options": [
      "silent letter",
      "full stop",
      "language partner",
      "phrasal verb"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Employers value strong _____, so people who can write clear English emails often get better jobs.",
    "options": [
      "language skills",
      "language policy",
      "word family",
      "word processor"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "We carried a Thai _____ on our trip, but most of the time we used hand signals and smiles instead.",
    "options": [
      "maverick",
      "romanisation",
      "phrasebook",
      "circumlocution"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "She took a six-week _____ in Seoul last summer, and she can now read menus and chat with taxi drivers.",
    "options": [
      "language pair",
      "language course",
      "phrasal verb",
      "consecutive interpreting"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Before his business trip to Germany, my dad took a _____ in German, but he still needed an app in meetings.",
    "options": [
      "tongue twister",
      "consecutive interpreting",
      "sight translation",
      "crash course"
    ],
    "answer": 3,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "foreign language": {
    "pos": "n.phr.",
    "en_def": "a language that is not spoken in your own country",
    "cn_def": "外語"
  },
  "target language": {
    "pos": "n.phr.",
    "en_def": "the language you are learning or translating into",
    "cn_def": "目標語言"
  },
  "language barrier": {
    "pos": "n.phr.",
    "en_def": "a problem in communication caused by different languages",
    "cn_def": "語言障礙"
  },
  "language exchange": {
    "pos": "n.phr.",
    "en_def": "meeting someone to practise each other's languages",
    "cn_def": "語言交換"
  },
  "polyglot": {
    "pos": "n.",
    "en_def": "a person who can speak many languages",
    "cn_def": "通曉多種語言的人"
  },
  "trilingual": {
    "pos": "adj.",
    "en_def": "able to speak three languages",
    "cn_def": "會說三種語言的"
  },
  "converse": {
    "pos": "v.",
    "en_def": "to have a conversation",
    "cn_def": "交談"
  },
  "chat": {
    "pos": "v.",
    "en_def": "to talk in a friendly, informal way",
    "cn_def": "聊天"
  },
  "language learner": {
    "pos": "n.phr.",
    "en_def": "a person who is studying a language",
    "cn_def": "語言學習者"
  },
  "speaking test": {
    "pos": "n.phr.",
    "en_def": "an exam where you talk to an examiner",
    "cn_def": "口說測驗"
  },
  "listening comprehension": {
    "pos": "n.phr.",
    "en_def": "understanding what you hear",
    "cn_def": "聽力理解"
  },
  "conversational": {
    "pos": "adj.",
    "en_def": "suitable for everyday talking",
    "cn_def": "會話的；日常交談的"
  },
  "self-correct": {
    "pos": "v.",
    "en_def": "to notice and fix your own mistakes",
    "cn_def": "自我修正"
  },
  "native-like": {
    "pos": "adj.",
    "en_def": "very close to the way a native speaker talks",
    "cn_def": "接近母語的"
  },
  "shadowing": {
    "pos": "n.",
    "en_def": "repeating what a speaker says right after hearing it",
    "cn_def": "跟讀法"
  },
  "expat": {
    "pos": "n.",
    "en_def": "a person living in a foreign country",
    "cn_def": "旅居海外者；外籍人士"
  },
  "verbalise": {
    "pos": "v.",
    "en_def": "to express ideas or feelings in words",
    "cn_def": "用言語表達"
  },
  "interlocutor": {
    "pos": "n.",
    "en_def": "a person you are talking with",
    "cn_def": "對話者"
  },
  "greeting": {
    "pos": "n.",
    "en_def": "words you say when you meet someone",
    "cn_def": "問候語；打招呼"
  },
  "farewell": {
    "pos": "n.",
    "en_def": "the act of saying goodbye",
    "cn_def": "告別；道別"
  },
  "politeness": {
    "pos": "n.",
    "en_def": "the quality of behaving and speaking with respect",
    "cn_def": "禮貌"
  },
  "honorific": {
    "pos": "n.",
    "en_def": "a word or title that shows respect",
    "cn_def": "敬語；尊稱"
  },
  "formality": {
    "pos": "n.",
    "en_def": "the level of politeness and seriousness in language",
    "cn_def": "正式程度"
  },
  "language partner": {
    "pos": "n.phr.",
    "en_def": "a person you practise a language with",
    "cn_def": "語伴"
  },
  "language skills": {
    "pos": "n.phr.",
    "en_def": "abilities in listening, speaking, reading and writing",
    "cn_def": "語言能力"
  },
  "phrasebook": {
    "pos": "n.",
    "en_def": "a small book of useful phrases for travellers",
    "cn_def": "常用語手冊"
  },
  "language course": {
    "pos": "n.phr.",
    "en_def": "a series of lessons to learn a language",
    "cn_def": "語言課程"
  },
  "crash course": {
    "pos": "n.phr.",
    "en_def": "a short, fast course that teaches the basics",
    "cn_def": "速成課程"
  },
  "constructed language": {
    "pos": "n.phr.",
    "en_def": "a language that someone designed on purpose",
    "cn_def": "人造語言"
  },
  "language planning": {
    "pos": "n.phr.",
    "en_def": "deliberate efforts to manage how languages are used",
    "cn_def": "語言規劃"
  },
  "speech community": {
    "pos": "n.phr.",
    "en_def": "a group of people who share a language or way of speaking",
    "cn_def": "言語社群"
  },
  "language death": {
    "pos": "n.phr.",
    "en_def": "when the last speakers of a language die out",
    "cn_def": "語言消亡"
  },
  "translation app": {
    "pos": "n.phr.",
    "en_def": "a phone program that translates words or speech",
    "cn_def": "翻譯應用程式"
  },
  "part of speech": {
    "pos": "n.phr.",
    "en_def": "a word class such as noun, verb or adjective",
    "cn_def": "詞性"
  },
  "compound word": {
    "pos": "n.phr.",
    "en_def": "a word made from two or more words",
    "cn_def": "複合字"
  },
  "chinese character": {
    "pos": "n.phr.",
    "en_def": "a single written symbol used in Chinese",
    "cn_def": "漢字；中文字"
  },
  "quotation marks": {
    "pos": "n.phr.",
    "en_def": "the marks (\" \") used around someone's exact words",
    "cn_def": "引號"
  },
  "silent letter": {
    "pos": "n.phr.",
    "en_def": "a letter that is written but not pronounced",
    "cn_def": "不發音字母"
  },
  "language pair": {
    "pos": "n.phr.",
    "en_def": "the two languages a translator works between",
    "cn_def": "語言對"
  },
  "disdain": {
    "pos": "n.",
    "en_def": "a feeling that something is not worth respect",
    "cn_def": "鄙視；輕蔑"
  },
  "linguistics": {
    "pos": "n.",
    "en_def": "the scientific study of language",
    "cn_def": "語言學"
  },
  "allusion": {
    "pos": "n.",
    "en_def": "an indirect mention of something",
    "cn_def": "暗指；典故"
  },
  "authoritarian": {
    "pos": "adj.",
    "en_def": "demanding total obedience",
    "cn_def": "專制的；獨裁的"
  },
  "grammatical": {
    "pos": "adj.",
    "en_def": "following or connected with the rules of grammar",
    "cn_def": "文法上的"
  },
  "hackneyed": {
    "pos": "adj.",
    "en_def": "used so often that it is no longer interesting",
    "cn_def": "陳腔濫調的"
  },
  "mistranslate": {
    "pos": "v.",
    "en_def": "to translate something wrongly",
    "cn_def": "誤譯；翻錯"
  },
  "rephrase": {
    "pos": "v.",
    "en_def": "to say something again using different words",
    "cn_def": "換個說法"
  },
  "rhyme": {
    "pos": "v.",
    "en_def": "to have the same ending sound",
    "cn_def": "押韻"
  },
  "mollify": {
    "pos": "v.",
    "en_def": "to make someone less angry",
    "cn_def": "平息；安撫"
  },
  "circumscribe": {
    "pos": "v.",
    "en_def": "to limit something",
    "cn_def": "限制"
  },
  "transliterate": {
    "pos": "v.",
    "en_def": "to write words using the letters of another alphabet",
    "cn_def": "音譯；轉寫"
  },
  "court interpreter": {
    "pos": "n.phr.",
    "en_def": "an interpreter who works in courtrooms",
    "cn_def": "法庭口譯員"
  },
  "official language": {
    "pos": "n.phr.",
    "en_def": "a language used by a government and in law",
    "cn_def": "官方語言"
  },
  "passive voice": {
    "pos": "n.phr.",
    "en_def": "a sentence form where the subject receives the action",
    "cn_def": "被動語態"
  },
  "word processor": {
    "pos": "n.phr.",
    "en_def": "a computer program for writing documents",
    "cn_def": "文書處理軟體"
  },
  "source language": {
    "pos": "n.phr.",
    "en_def": "the language that you translate from",
    "cn_def": "來源語言"
  },
  "oral tradition": {
    "pos": "n.phr.",
    "en_def": "stories and knowledge passed on by speaking, not writing",
    "cn_def": "口述傳統"
  },
  "word family": {
    "pos": "n.phr.",
    "en_def": "a group of words that share the same root",
    "cn_def": "字族"
  },
  "furtive": {
    "pos": "adj.",
    "en_def": "secret and trying not to be noticed",
    "cn_def": "偷偷摸摸的"
  },
  "mellifluous": {
    "pos": "adj.",
    "en_def": "sweet and smooth to hear",
    "cn_def": "（聲音）甜美流暢的"
  },
  "facetious": {
    "pos": "adj.",
    "en_def": "joking at the wrong time",
    "cn_def": "開玩笑的；不正經的"
  },
  "vacillate": {
    "pos": "v.",
    "en_def": "to keep changing your mind",
    "cn_def": "猶豫不決；搖擺不定"
  },
  "dub": {
    "pos": "v.",
    "en_def": "to replace the voices in a film with another language",
    "cn_def": "配音"
  },
  "atone": {
    "pos": "v.",
    "en_def": "to do something to make up for a wrong",
    "cn_def": "贖罪；彌補"
  },
  "infallible": {
    "pos": "adj.",
    "en_def": "never wrong",
    "cn_def": "絕對正確的；萬無一失的"
  },
  "glib": {
    "pos": "adj.",
    "en_def": "speaking easily but without thinking carefully",
    "cn_def": "油嘴滑舌的；隨口說的"
  },
  "irreverent": {
    "pos": "adj.",
    "en_def": "not showing respect for serious things",
    "cn_def": "不敬的；調侃的"
  },
  "antithesis": {
    "pos": "n.",
    "en_def": "the exact opposite",
    "cn_def": "正好相反；對立面"
  },
  "anecdote": {
    "pos": "n.",
    "en_def": "a short interesting story about a real event",
    "cn_def": "軼事；小故事"
  },
  "inflection": {
    "pos": "n.",
    "en_def": "a change in a word's ending to show tense, number, etc.",
    "cn_def": "字尾變化；詞形變化"
  },
  "eulogy": {
    "pos": "n.",
    "en_def": "a speech praising someone who has died",
    "cn_def": "悼詞"
  },
  "phoneme": {
    "pos": "n.",
    "en_def": "one of the smallest sound units in a language",
    "cn_def": "音素"
  },
  "hubris": {
    "pos": "n.",
    "en_def": "too much pride and self-confidence",
    "cn_def": "傲慢；狂妄自大"
  },
  "mumble": {
    "pos": "v.",
    "en_def": "to speak quietly and unclearly",
    "cn_def": "含糊地說"
  },
  "predilection": {
    "pos": "n.",
    "en_def": "a strong liking for something",
    "cn_def": "偏好；偏愛"
  },
  "hyphen": {
    "pos": "n.",
    "en_def": "a short line ( - ) that joins words",
    "cn_def": "連字號"
  },
  "back-translation": {
    "pos": "n.",
    "en_def": "translating a text back into its first language to check it",
    "cn_def": "回譯"
  },
  "calligraphy": {
    "pos": "n.",
    "en_def": "the art of beautiful handwriting",
    "cn_def": "書法"
  },
  "dissonance": {
    "pos": "n.",
    "en_def": "a lack of agreement or harmony",
    "cn_def": "不和諧；不一致"
  },
  "pinyin": {
    "pos": "n.",
    "en_def": "the official system for writing Chinese sounds with Roman letters",
    "cn_def": "漢語拼音"
  },
  "circumlocution": {
    "pos": "n.",
    "en_def": "using many words when a few would do",
    "cn_def": "拐彎抹角；迂迴說法"
  },
  "qualm": {
    "pos": "n.",
    "en_def": "an uneasy feeling that you are doing wrong",
    "cn_def": "不安；顧慮"
  },
  "prefix": {
    "pos": "n.",
    "en_def": "letters added to the start of a word to change its meaning",
    "cn_def": "字首"
  },
  "intonation": {
    "pos": "n.",
    "en_def": "the rise and fall of the voice when speaking",
    "cn_def": "語調"
  },
  "profanity": {
    "pos": "n.",
    "en_def": "rude or offensive words",
    "cn_def": "髒話；粗話"
  },
  "decorum": {
    "pos": "n.",
    "en_def": "polite and correct behaviour",
    "cn_def": "禮節；端莊得體"
  },
  "vowel": {
    "pos": "n.",
    "en_def": "a sound like a, e, i, o or u",
    "cn_def": "母音"
  },
  "heresy": {
    "pos": "n.",
    "en_def": "an idea that strongly opposes accepted beliefs",
    "cn_def": "異端邪說"
  },
  "palindrome": {
    "pos": "n.",
    "en_def": "a word that reads the same backwards and forwards",
    "cn_def": "迴文"
  },
  "psycholinguistics": {
    "pos": "n.",
    "en_def": "the study of how the mind uses and understands language",
    "cn_def": "心理語言學"
  },
  "full stop": {
    "pos": "n.phr.",
    "en_def": "the mark ( . ) at the end of a sentence",
    "cn_def": "句號"
  },
  "phrasal verb": {
    "pos": "n.phr.",
    "en_def": "a verb plus a small word like \"up\" or \"off\"",
    "cn_def": "片語動詞"
  },
  "language policy": {
    "pos": "n.phr.",
    "en_def": "a government's rules about which languages are used",
    "cn_def": "語言政策"
  },
  "maverick": {
    "pos": "n.",
    "en_def": "a person who thinks and acts independently",
    "cn_def": "特立獨行的人"
  },
  "romanisation": {
    "pos": "n.",
    "en_def": "writing a language in the Latin alphabet",
    "cn_def": "羅馬拼音化"
  },
  "consecutive interpreting": {
    "pos": "n.phr.",
    "en_def": "interpreting after the speaker stops for a moment",
    "cn_def": "逐步口譯"
  },
  "tongue twister": {
    "pos": "n.phr.",
    "en_def": "a phrase that is difficult to say quickly",
    "cn_def": "繞口令"
  },
  "sight translation": {
    "pos": "n.phr.",
    "en_def": "reading a document in one language aloud in another",
    "cn_def": "視譯"
  }
};

const EXTRA_GLOSSES = {};
