// Topic 15 Subunit 7 Quiz Data: World Languages & Language Change 世界語言與語言變遷
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T15 S07 - World Languages & Language Change 世界語言與語言變遷",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "language family",
    "pos": "n.phr.",
    "cn_def": "語系",
    "en_def": "a group of languages that come from one older language",
    "sentence": "English and Hindi belong to the same {{BLANK}}, although speakers of the two languages cannot understand each other today.",
    "cn": "英文和印地文屬於同一個語系，雖然兩種語言的使用者如今無法聽懂彼此。"
  },
  {
    "word": "lingua franca",
    "pos": "n.phr.",
    "cn_def": "通用語",
    "en_def": "a shared language used by people with different first languages",
    "sentence": "English has become a {{BLANK}} in international business, so a Japanese manager and a Brazilian client may talk in English.",
    "cn": "英文已成為國際商務的通用語，所以一位日本經理和一位巴西客戶可能會用英文交談。"
  },
  {
    "word": "official language",
    "pos": "n.phr.",
    "cn_def": "官方語言",
    "en_def": "a language used by a government and in law",
    "sentence": "Canada has two {{BLANK}}, so road signs and food labels there use both English and French.",
    "cn": "加拿大有兩種官方語言，所以那裡的路標和食品標籤同時使用英文和法文。"
  },
  {
    "word": "minority language",
    "pos": "n.phr.",
    "cn_def": "少數語言",
    "en_def": "a language spoken by a small part of a population",
    "sentence": "Welsh is a {{BLANK}} in the UK, but children can now study all their subjects in Welsh at many schools.",
    "cn": "威爾斯語在英國是一種少數語言，但現在許多學校的孩子可以用威爾斯語學習所有科目。"
  },
  {
    "word": "endangered language",
    "pos": "n.phr.",
    "cn_def": "瀕危語言",
    "en_def": "a language that may soon have no speakers",
    "sentence": "An {{BLANK}} often has only older speakers, because young people move to cities and use the national language instead.",
    "cn": "瀕危語言常常只剩年長的使用者，因為年輕人搬到城市並改用國家語言。"
  },
  {
    "word": "language death",
    "pos": "n.phr.",
    "cn_def": "語言消亡",
    "en_def": "when the last speakers of a language die out",
    "sentence": "{{BLANK}} is happening faster than ever, and experts believe half of the world's languages may disappear this century.",
    "cn": "語言消亡正以前所未有的速度發生，而專家認為世界上一半的語言可能會在本世紀消失。"
  },
  {
    "word": "language revival",
    "pos": "n.phr.",
    "cn_def": "語言復振",
    "en_def": "efforts to bring a disappearing language back into use",
    "sentence": "Hebrew is the most famous {{BLANK}} story, because it became an everyday language again after many centuries.",
    "cn": "希伯來文是最有名的語言復振故事，因為它在許多世紀後再次成為日常語言。"
  },
  {
    "word": "creole",
    "pos": "n.",
    "cn_def": "克里奧爾語；混合語",
    "en_def": "a language that grew from mixing two languages and became a first language",
    "sentence": "In Haiti most people speak a French-based {{BLANK}}, and children learn it at home as their first language.",
    "cn": "在海地，大多數人說一種以法文為基礎的克里奧爾語，而孩子們在家把它當作第一語言學習。"
  },
  {
    "word": "pidgin",
    "pos": "n.",
    "cn_def": "洋涇濱語；混雜語",
    "en_def": "a simple mixed language used for trade between groups",
    "sentence": "Sailors and traders once used a simple {{BLANK}} to do business, although nobody spoke it as their mother tongue.",
    "cn": "水手和商人曾經用一種簡單的混雜語做生意，雖然沒有人把它當作母語。"
  },
  {
    "word": "language contact",
    "pos": "n.phr.",
    "cn_def": "語言接觸",
    "en_def": "when speakers of different languages meet and influence each other",
    "sentence": "Taiwanese Mandarin has many Japanese and Hokkien words because of {{BLANK}}, and these words are now part of daily life.",
    "cn": "由於語言接觸，台灣華語有許多日語和閩南語詞彙，而這些詞如今已成為日常生活的一部分。"
  },
  {
    "word": "global English",
    "pos": "n.phr.",
    "cn_def": "全球英語",
    "en_def": "English used around the world as an international language",
    "sentence": "Teachers who promote {{BLANK}} say that clear communication matters more than sounding British or American.",
    "cn": "推廣全球英語的老師說，清楚溝通比聽起來像英國人或美國人更重要。"
  },
  {
    "word": "World Englishes",
    "pos": "n.phr.",
    "cn_def": "世界英語變體",
    "en_def": "the different kinds of English used in different countries",
    "sentence": "Singapore, India and Nigeria all have their own {{BLANK}}, and each variety has special words and accents.",
    "cn": "新加坡、印度和奈及利亞都有自己的世界英語變體，而每一種都有特別的詞彙和口音。"
  },
  {
    "word": "calque",
    "pos": "n.",
    "cn_def": "仿譯詞",
    "en_def": "a phrase translated word by word from another language",
    "sentence": "\"Long time no see\" may be a {{BLANK}} from Chinese, because it follows the Chinese word order rather than normal English grammar.",
    "cn": "「Long time no see」可能是來自中文的仿譯詞，因為它遵循中文的詞序，而不是一般的英文文法。"
  },
  {
    "word": "language shift",
    "pos": "n.phr.",
    "cn_def": "語言轉移",
    "en_def": "when a community stops using one language and uses another",
    "sentence": "In many immigrant families a {{BLANK}} happens within three generations, so the grandchildren speak only the new country's language.",
    "cn": "在許多移民家庭中，語言轉移在三代之內就會發生，所以孫子輩只會說新國家的語言。"
  },
  {
    "word": "last speaker",
    "pos": "n.phr.",
    "cn_def": "最後的使用者",
    "en_def": "the final living person who speaks a language",
    "sentence": "When the {{BLANK}} of a language dies, many old songs and stories can disappear unless someone records them first.",
    "cn": "當一種語言的最後一位使用者去世時，許多古老的歌曲和故事可能就此消失，除非有人先把它們錄下來。"
  },
  {
    "word": "oral tradition",
    "pos": "n.phr.",
    "cn_def": "口述傳統",
    "en_def": "stories and knowledge passed on by speaking, not writing",
    "sentence": "The tribe had no written language, but its {{BLANK}} kept their history alive, because elders told the stories again and again.",
    "cn": "這個部落沒有文字，但他們的口述傳統讓歷史延續下來，因為長老們一再地講述那些故事。"
  },
  {
    "word": "linguistic diversity",
    "pos": "n.phr.",
    "cn_def": "語言多樣性",
    "en_def": "the variety of different languages in a place",
    "sentence": "Papua New Guinea has amazing {{BLANK}}, because more than 800 languages are spoken there by fewer than ten million people.",
    "cn": "巴布亞紐幾內亞擁有驚人的語言多樣性，因為不到一千萬人在那裡使用超過八百種語言。"
  },
  {
    "word": "language policy",
    "pos": "n.phr.",
    "cn_def": "語言政策",
    "en_def": "a government's rules about which languages are used",
    "sentence": "The new {{BLANK}} requires schools to teach a local language, so every pupil now has at least one hour of it each week.",
    "cn": "新的語言政策要求學校教授一種本土語言，所以每位學生現在每週至少有一小時這門課。"
  },
  {
    "word": "mother-tongue education",
    "pos": "n.phr.",
    "cn_def": "母語教育",
    "en_def": "teaching children in their first language",
    "sentence": "Research supports {{BLANK}} in the early years, because children learn to read faster in a language they already speak.",
    "cn": "研究支持在早年實施母語教育，因為孩子用他們已經會說的語言學習閱讀會更快。"
  },
  {
    "word": "proto-language",
    "pos": "n.",
    "cn_def": "原始語",
    "en_def": "an ancient language that later languages developed from",
    "sentence": "Linguists have rebuilt many words of the {{BLANK}} behind European languages, even though nobody ever wrote it down.",
    "cn": "語言學家已經重建了歐洲語言背後那個原始語的許多字詞，即使從來沒有人把它寫下來。"
  },
  {
    "word": "Esperanto",
    "pos": "n.",
    "cn_def": "世界語",
    "en_def": "an invented language created to be easy for everyone",
    "sentence": "{{BLANK}} was invented in 1887 to help people from different countries communicate, and today a few thousand families still speak it at home.",
    "cn": "世界語於 1887 年被發明出來，以幫助不同國家的人溝通，而如今仍有幾千個家庭在家中使用它。"
  },
  {
    "word": "constructed language",
    "pos": "n.phr.",
    "cn_def": "人造語言",
    "en_def": "a language that someone designed on purpose",
    "sentence": "Klingon is a {{BLANK}} from Star Trek, but some fans have learned it so well that they can hold whole conversations.",
    "cn": "克林貢語是來自《星艦迷航記》的人造語言，但有些粉絲學得非常好，能進行完整的對話。"
  },
  {
    "word": "speech community",
    "pos": "n.phr.",
    "cn_def": "言語社群",
    "en_def": "a group of people who share a language or way of speaking",
    "sentence": "Gamers form their own {{BLANK}} online, so outsiders often cannot understand their fast messages full of special terms.",
    "cn": "玩家在網路上形成自己的言語社群，所以外人常常看不懂他們充滿專門術語的快速訊息。"
  },
  {
    "word": "language planning",
    "pos": "n.phr.",
    "cn_def": "語言規劃",
    "en_def": "deliberate efforts to manage how languages are used",
    "sentence": "After independence the country needed careful {{BLANK}}, because people spoke more than twenty languages and needed one for schools.",
    "cn": "獨立後這個國家需要謹慎的語言規劃，因為人們說二十多種語言，而學校需要一種共同語言。"
  },
  {
    "word": "vernacular",
    "pos": "n.",
    "cn_def": "日常用語；方言白話",
    "en_def": "the everyday language spoken by ordinary people",
    "sentence": "The priest began to preach in the {{BLANK}} instead of Latin, so ordinary villagers could finally understand his message.",
    "cn": "那位神父開始用白話而非拉丁文佈道，所以一般村民終於能聽懂他的訊息。"
  },
  {
    "word": "language rights",
    "pos": "n.phr.",
    "cn_def": "語言權",
    "en_def": "people's right to use their own language",
    "sentence": "Indigenous groups are fighting for {{BLANK}}, so they can use their own languages in courts, hospitals and schools.",
    "cn": "原住民族群正在爭取語言權，以便他們能在法院、醫院和學校使用自己的語言。"
  }
];

const MCQS = [
  {
    "q": "English and Hindi belong to the same _____, although speakers of the two languages cannot understand each other today.",
    "options": [
      "sentence structure",
      "speech recognition",
      "language family",
      "full stop"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "English has become a _____ in international business, so a Japanese manager and a Brazilian client may talk in English.",
    "options": [
      "lingua franca",
      "target language",
      "sight translation",
      "language pair"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Canada has two _____, so road signs and food labels there use both English and French.",
    "options": [
      "machine translation",
      "official language",
      "phonetic alphabet",
      "phrasal verb"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Welsh is a _____ in the UK, but children can now study all their subjects in Welsh at many schools.",
    "options": [
      "native speaker",
      "language pair",
      "word order",
      "minority language"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "An _____ often has only older speakers, because young people move to cities and use the national language instead.",
    "options": [
      "speech therapist",
      "word order",
      "endangered language",
      "consecutive interpreting"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "_____ is happening faster than ever, and experts believe half of the world's languages may disappear this century.",
    "options": [
      "capital letter",
      "word root",
      "neural machine translation",
      "language death"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Hebrew is the most famous _____ story, because it became an everyday language again after many centuries.",
    "options": [
      "language revival",
      "vocal cords",
      "part of speech",
      "word family"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "In Haiti most people speak a French-based _____, and children learn it at home as their first language.",
    "options": [
      "compendium",
      "creole",
      "morpheme",
      "antonym"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Sailors and traders once used a simple _____ to do business, although nobody spoke it as their mother tongue.",
    "options": [
      "phonics",
      "grammar",
      "pidgin",
      "quip"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Taiwanese Mandarin has many Japanese and Hokkien words because of _____, and these words are now part of daily life.",
    "options": [
      "consecutive interpreting",
      "court interpreter",
      "foreign language",
      "language contact"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Teachers who promote _____ say that clear communication matters more than sounding British or American.",
    "options": [
      "global English",
      "listening comprehension",
      "language learner",
      "speaking test"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Singapore, India and Nigeria all have their own _____, and each variety has special words and accents.",
    "options": [
      "speech recognition",
      "World Englishes",
      "phonetic alphabet",
      "language pair"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "\"Long time no see\" may be a _____ from Chinese, because it follows the Chinese word order rather than normal English grammar.",
    "options": [
      "calque",
      "earpiece",
      "romanisation",
      "idiom"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "In many immigrant families a _____ happens within three generations, so the grandchildren speak only the new country's language.",
    "options": [
      "a slip of the tongue",
      "language course",
      "phonetic alphabet",
      "language shift"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "When the _____ of a language dies, many old songs and stories can disappear unless someone records them first.",
    "options": [
      "machine translation",
      "translation app",
      "last speaker",
      "word processor"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The tribe had no written language, but its _____ kept their history alive, because elders told the stories again and again.",
    "options": [
      "source text",
      "oral tradition",
      "phrasal verb",
      "court interpreter"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Papua New Guinea has amazing _____, because more than 800 languages are spoken there by fewer than ten million people.",
    "options": [
      "speech recognition",
      "word processor",
      "linguistic diversity",
      "capital letter"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The new _____ requires schools to teach a local language, so every pupil now has at least one hour of it each week.",
    "options": [
      "language pair",
      "speech translation",
      "language course",
      "language policy"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Research supports _____ in the early years, because children learn to read faster in a language they already speak.",
    "options": [
      "mother-tongue education",
      "court interpreter",
      "source text",
      "language exchange"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Linguists have rebuilt many words of the _____ behind European languages, even though nobody ever wrote it down.",
    "options": [
      "morpheme",
      "proto-language",
      "verbiage",
      "veneer"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "_____ was invented in 1887 to help people from different countries communicate, and today a few thousand families still speak it at home.",
    "options": [
      "interpreter",
      "lip-reading",
      "anachronism",
      "Esperanto"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Klingon is a _____ from Star Trek, but some fans have learned it so well that they can hold whole conversations.",
    "options": [
      "word family",
      "constructed language",
      "second language",
      "literal translation"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Gamers form their own _____ online, so outsiders often cannot understand their fast messages full of special terms.",
    "options": [
      "speech community",
      "source language",
      "silent letter",
      "speaking test"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "After independence the country needed careful _____, because people spoke more than twenty languages and needed one for schools.",
    "options": [
      "language exchange",
      "interpreter booth",
      "language planning",
      "target language"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The priest began to preach in the _____ instead of Latin, so ordinary villagers could finally understand his message.",
    "options": [
      "qualm",
      "vernacular",
      "affix",
      "spelling"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Indigenous groups are fighting for _____, so they can use their own languages in courts, hospitals and schools.",
    "options": [
      "language course",
      "word family",
      "second language",
      "language rights"
    ],
    "answer": 3,
    "vocabIndex": 25
  }
];

const LOOKUP = {
  "language family": {
    "pos": "n.phr.",
    "en_def": "a group of languages that come from one older language",
    "cn_def": "語系"
  },
  "lingua franca": {
    "pos": "n.phr.",
    "en_def": "a shared language used by people with different first languages",
    "cn_def": "通用語"
  },
  "official language": {
    "pos": "n.phr.",
    "en_def": "a language used by a government and in law",
    "cn_def": "官方語言"
  },
  "minority language": {
    "pos": "n.phr.",
    "en_def": "a language spoken by a small part of a population",
    "cn_def": "少數語言"
  },
  "endangered language": {
    "pos": "n.phr.",
    "en_def": "a language that may soon have no speakers",
    "cn_def": "瀕危語言"
  },
  "language death": {
    "pos": "n.phr.",
    "en_def": "when the last speakers of a language die out",
    "cn_def": "語言消亡"
  },
  "language revival": {
    "pos": "n.phr.",
    "en_def": "efforts to bring a disappearing language back into use",
    "cn_def": "語言復振"
  },
  "creole": {
    "pos": "n.",
    "en_def": "a language that grew from mixing two languages and became a first language",
    "cn_def": "克里奧爾語；混合語"
  },
  "pidgin": {
    "pos": "n.",
    "en_def": "a simple mixed language used for trade between groups",
    "cn_def": "洋涇濱語；混雜語"
  },
  "language contact": {
    "pos": "n.phr.",
    "en_def": "when speakers of different languages meet and influence each other",
    "cn_def": "語言接觸"
  },
  "global english": {
    "pos": "n.phr.",
    "en_def": "English used around the world as an international language",
    "cn_def": "全球英語"
  },
  "world englishes": {
    "pos": "n.phr.",
    "en_def": "the different kinds of English used in different countries",
    "cn_def": "世界英語變體"
  },
  "calque": {
    "pos": "n.",
    "en_def": "a phrase translated word by word from another language",
    "cn_def": "仿譯詞"
  },
  "language shift": {
    "pos": "n.phr.",
    "en_def": "when a community stops using one language and uses another",
    "cn_def": "語言轉移"
  },
  "last speaker": {
    "pos": "n.phr.",
    "en_def": "the final living person who speaks a language",
    "cn_def": "最後的使用者"
  },
  "oral tradition": {
    "pos": "n.phr.",
    "en_def": "stories and knowledge passed on by speaking, not writing",
    "cn_def": "口述傳統"
  },
  "linguistic diversity": {
    "pos": "n.phr.",
    "en_def": "the variety of different languages in a place",
    "cn_def": "語言多樣性"
  },
  "language policy": {
    "pos": "n.phr.",
    "en_def": "a government's rules about which languages are used",
    "cn_def": "語言政策"
  },
  "mother-tongue education": {
    "pos": "n.phr.",
    "en_def": "teaching children in their first language",
    "cn_def": "母語教育"
  },
  "proto-language": {
    "pos": "n.",
    "en_def": "an ancient language that later languages developed from",
    "cn_def": "原始語"
  },
  "esperanto": {
    "pos": "n.",
    "en_def": "an invented language created to be easy for everyone",
    "cn_def": "世界語"
  },
  "constructed language": {
    "pos": "n.phr.",
    "en_def": "a language that someone designed on purpose",
    "cn_def": "人造語言"
  },
  "speech community": {
    "pos": "n.phr.",
    "en_def": "a group of people who share a language or way of speaking",
    "cn_def": "言語社群"
  },
  "language planning": {
    "pos": "n.phr.",
    "en_def": "deliberate efforts to manage how languages are used",
    "cn_def": "語言規劃"
  },
  "vernacular": {
    "pos": "n.",
    "en_def": "the everyday language spoken by ordinary people",
    "cn_def": "日常用語；方言白話"
  },
  "language rights": {
    "pos": "n.phr.",
    "en_def": "people's right to use their own language",
    "cn_def": "語言權"
  },
  "sentence structure": {
    "pos": "n.phr.",
    "en_def": "the way words are put together to form a sentence",
    "cn_def": "句子結構"
  },
  "speech recognition": {
    "pos": "n.phr.",
    "en_def": "technology that changes spoken words into text",
    "cn_def": "語音辨識"
  },
  "full stop": {
    "pos": "n.phr.",
    "en_def": "the mark ( . ) at the end of a sentence",
    "cn_def": "句號"
  },
  "target language": {
    "pos": "n.phr.",
    "en_def": "the language you are learning or translating into",
    "cn_def": "目標語言"
  },
  "sight translation": {
    "pos": "n.phr.",
    "en_def": "reading a document in one language aloud in another",
    "cn_def": "視譯"
  },
  "language pair": {
    "pos": "n.phr.",
    "en_def": "the two languages a translator works between",
    "cn_def": "語言對"
  },
  "machine translation": {
    "pos": "n.phr.",
    "en_def": "translation done by a computer",
    "cn_def": "機器翻譯"
  },
  "phonetic alphabet": {
    "pos": "n.phr.",
    "en_def": "a set of symbols that show speech sounds",
    "cn_def": "音標"
  },
  "phrasal verb": {
    "pos": "n.phr.",
    "en_def": "a verb plus a small word like \"up\" or \"off\"",
    "cn_def": "片語動詞"
  },
  "native speaker": {
    "pos": "n.phr.",
    "en_def": "a person who learned a language from birth",
    "cn_def": "母語人士"
  },
  "word order": {
    "pos": "n.phr.",
    "en_def": "the order in which words are arranged in a sentence",
    "cn_def": "詞序；字序"
  },
  "speech therapist": {
    "pos": "n.phr.",
    "en_def": "a professional who helps people speak more clearly",
    "cn_def": "語言治療師"
  },
  "consecutive interpreting": {
    "pos": "n.phr.",
    "en_def": "interpreting after the speaker stops for a moment",
    "cn_def": "逐步口譯"
  },
  "capital letter": {
    "pos": "n.phr.",
    "en_def": "a big letter such as A, B or C",
    "cn_def": "大寫字母"
  },
  "word root": {
    "pos": "n.phr.",
    "en_def": "the main part of a word that carries its basic meaning",
    "cn_def": "字根"
  },
  "neural machine translation": {
    "pos": "n.phr.",
    "en_def": "computer translation that uses AI networks to learn from data",
    "cn_def": "神經機器翻譯"
  },
  "vocal cords": {
    "pos": "n.phr.",
    "en_def": "parts in your throat that make the sound of your voice",
    "cn_def": "聲帶"
  },
  "part of speech": {
    "pos": "n.phr.",
    "en_def": "a word class such as noun, verb or adjective",
    "cn_def": "詞性"
  },
  "word family": {
    "pos": "n.phr.",
    "en_def": "a group of words that share the same root",
    "cn_def": "字族"
  },
  "compendium": {
    "pos": "n.",
    "en_def": "a book with a lot of information on one subject",
    "cn_def": "彙編；概要"
  },
  "morpheme": {
    "pos": "n.",
    "en_def": "the smallest part of a word that has meaning",
    "cn_def": "詞素"
  },
  "antonym": {
    "pos": "n.",
    "en_def": "a word with the opposite meaning",
    "cn_def": "反義字"
  },
  "phonics": {
    "pos": "n.",
    "en_def": "a way of teaching reading through letter sounds",
    "cn_def": "自然發音法"
  },
  "grammar": {
    "pos": "n.",
    "en_def": "the rules for forming words and sentences",
    "cn_def": "文法"
  },
  "quip": {
    "pos": "n.",
    "en_def": "a short, clever joke",
    "cn_def": "妙語；俏皮話"
  },
  "court interpreter": {
    "pos": "n.phr.",
    "en_def": "an interpreter who works in courtrooms",
    "cn_def": "法庭口譯員"
  },
  "foreign language": {
    "pos": "n.phr.",
    "en_def": "a language that is not spoken in your own country",
    "cn_def": "外語"
  },
  "listening comprehension": {
    "pos": "n.phr.",
    "en_def": "understanding what you hear",
    "cn_def": "聽力理解"
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
  "earpiece": {
    "pos": "n.",
    "en_def": "a small device worn in the ear to hear sound",
    "cn_def": "耳機"
  },
  "romanisation": {
    "pos": "n.",
    "en_def": "writing a language in the Latin alphabet",
    "cn_def": "羅馬拼音化"
  },
  "idiom": {
    "pos": "n.",
    "en_def": "a group of words whose meaning is different from the single words",
    "cn_def": "慣用語；成語"
  },
  "a slip of the tongue": {
    "pos": "n.phr.",
    "en_def": "a small mistake when you are speaking",
    "cn_def": "口誤"
  },
  "language course": {
    "pos": "n.phr.",
    "en_def": "a series of lessons to learn a language",
    "cn_def": "語言課程"
  },
  "translation app": {
    "pos": "n.phr.",
    "en_def": "a phone program that translates words or speech",
    "cn_def": "翻譯應用程式"
  },
  "word processor": {
    "pos": "n.phr.",
    "en_def": "a computer program for writing documents",
    "cn_def": "文書處理軟體"
  },
  "source text": {
    "pos": "n.phr.",
    "en_def": "the original text that is being translated",
    "cn_def": "原文"
  },
  "speech translation": {
    "pos": "n.phr.",
    "en_def": "technology that translates spoken language aloud",
    "cn_def": "語音翻譯"
  },
  "language exchange": {
    "pos": "n.phr.",
    "en_def": "meeting someone to practise each other's languages",
    "cn_def": "語言交換"
  },
  "verbiage": {
    "pos": "n.",
    "en_def": "too many unnecessary words",
    "cn_def": "冗詞贅字"
  },
  "veneer": {
    "pos": "n.",
    "en_def": "a thin outer appearance that hides the truth",
    "cn_def": "虛飾；表面"
  },
  "interpreter": {
    "pos": "n.",
    "en_def": "a person who changes spoken words into another language",
    "cn_def": "口譯員"
  },
  "lip-reading": {
    "pos": "n.",
    "en_def": "understanding speech by watching people's lips",
    "cn_def": "讀唇"
  },
  "anachronism": {
    "pos": "n.",
    "en_def": "something placed in the wrong historical time",
    "cn_def": "時代錯置"
  },
  "second language": {
    "pos": "n.phr.",
    "en_def": "a language you learn after your first one",
    "cn_def": "第二語言"
  },
  "literal translation": {
    "pos": "n.phr.",
    "en_def": "a translation that follows the words exactly",
    "cn_def": "直譯"
  },
  "source language": {
    "pos": "n.phr.",
    "en_def": "the language that you translate from",
    "cn_def": "來源語言"
  },
  "silent letter": {
    "pos": "n.phr.",
    "en_def": "a letter that is written but not pronounced",
    "cn_def": "不發音字母"
  },
  "interpreter booth": {
    "pos": "n.phr.",
    "en_def": "a small soundproof room where interpreters work",
    "cn_def": "口譯廂"
  },
  "qualm": {
    "pos": "n.",
    "en_def": "an uneasy feeling that you are doing wrong",
    "cn_def": "不安；顧慮"
  },
  "affix": {
    "pos": "n.",
    "en_def": "a prefix or a suffix",
    "cn_def": "詞綴"
  },
  "spelling": {
    "pos": "n.",
    "en_def": "the way letters form a word",
    "cn_def": "拼字"
  }
};

const EXTRA_GLOSSES = {};
