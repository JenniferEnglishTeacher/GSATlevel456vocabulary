// Topic 6 Subunit 7 Quiz Data: Academic Words 學術單字 1 (intellectual – administer)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T06 S07 - Academic Words 學術單字 1 (intellectual – administer)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "intellectual",
    "pos": "adj.",
    "cn_def": "智力的；知識性的",
    "en_def": "relating to the ability to think and understand ideas",
    "sentence": "Reading widely gives children {{BLANK}} challenges, and it also helps them understand other people's feelings.",
    "cn": "廣泛閱讀給孩子帶來智力上的挑戰，也幫助他們理解別人的感受。"
  },
  {
    "word": "competent",
    "pos": "adj.",
    "cn_def": "有能力的；稱職的",
    "en_def": "having enough skill to do something well",
    "sentence": "After two years of practice she became a {{BLANK}} writer, but she still asks her teacher to check her work.",
    "cn": "經過兩年練習，她成為一位稱職的寫作者，但她仍會請老師檢查她的作品。"
  },
  {
    "word": "professional",
    "pos": "adj.",
    "cn_def": "專業的",
    "en_def": "relating to a job that needs special training",
    "sentence": "Teachers attend {{BLANK}} training every summer, so they can learn new ways to support their students.",
    "cn": "老師們每年暑假參加專業培訓，以便學習支持學生的新方法。"
  },
  {
    "word": "quote",
    "pos": "v.",
    "cn_def": "引用；引述",
    "en_def": "to repeat the exact words that someone else said or wrote",
    "sentence": "In your report you may {{BLANK}} a famous scientist, but you must put the words in quotation marks.",
    "cn": "在報告中你可以引用一位知名科學家的話，但必須把那段文字加上引號。"
  },
  {
    "word": "verbose",
    "pos": "adj.",
    "cn_def": "冗長的；囉唆的",
    "en_def": "using more words than are needed",
    "sentence": "His essay was too {{BLANK}}, so the teacher asked him to cut it from 800 words to 400.",
    "cn": "他的文章太冗長了，所以老師要他從800字刪到400字。"
  },
  {
    "word": "version",
    "pos": "n.",
    "cn_def": "版本",
    "en_def": "a slightly different form of something",
    "sentence": "The teacher prepared an easier {{BLANK}} of the article, so weaker readers could follow the class discussion.",
    "cn": "老師準備了這篇文章較簡單的版本，讓閱讀較弱的學生也能跟上課堂討論。"
  },
  {
    "word": "guidance",
    "pos": "n.",
    "cn_def": "指導；輔導",
    "en_def": "help and advice about what to do",
    "sentence": "Students need {{BLANK}} when they choose a university major, because the decision affects their future career.",
    "cn": "學生選擇大學主修時需要指導，因為這個決定會影響未來的職涯。"
  },
  {
    "word": "appreciate",
    "pos": "v.",
    "cn_def": "欣賞；重視；感激",
    "en_def": "to understand the value of something",
    "sentence": "I did not {{BLANK}} my history teacher at first, but now I understand how much she taught me.",
    "cn": "一開始我並不欣賞我的歷史老師，但現在我明白她教了我多少東西。"
  },
  {
    "word": "brief",
    "pos": "adj.",
    "cn_def": "簡短的",
    "en_def": "short, using few words or lasting a short time",
    "sentence": "Please give a {{BLANK}} answer to each question, because you only have twenty minutes for the whole section.",
    "cn": "請每題給出簡短的回答，因為整個部分你只有二十分鐘。"
  },
  {
    "word": "commentary",
    "pos": "n.",
    "cn_def": "評論；解說",
    "en_def": "a set of comments explaining or judging something",
    "sentence": "The teacher wrote a short {{BLANK}} on each poem, and it helped us understand the writer's hidden meaning.",
    "cn": "老師為每首詩寫了一段簡短的評論，這幫助我們理解作者隱含的意思。"
  },
  {
    "word": "conference",
    "pos": "n.",
    "cn_def": "研討會；會議",
    "en_def": "a large formal meeting where people discuss ideas",
    "sentence": "Our principal attended an education {{BLANK}} in Singapore, and she came back with many new ideas for our school.",
    "cn": "我們校長參加了在新加坡舉辦的教育研討會，帶回許多給學校的新點子。"
  },
  {
    "word": "credential",
    "pos": "n.",
    "cn_def": "資歷證明；資格證書",
    "en_def": "a qualification that shows you are able to do a job",
    "sentence": "Online courses can give useful {{BLANK}}, but employers still want to see real skills in interviews.",
    "cn": "線上課程能提供有用的資格證明，但雇主在面試時仍想看到真正的能力。"
  },
  {
    "word": "acumen",
    "pos": "n.",
    "cn_def": "敏銳；精明",
    "en_def": "the ability to make good, quick judgements",
    "sentence": "She showed great business {{BLANK}} when she ran the school café, so the club made a big profit.",
    "cn": "她經營學校咖啡店時展現了極佳的商業敏銳度，所以社團賺了一大筆錢。"
  },
  {
    "word": "erudite",
    "pos": "adj.",
    "cn_def": "博學的",
    "en_def": "having a great deal of knowledge from reading",
    "sentence": "Our {{BLANK}} professor can talk about almost any topic, yet he explains things in very simple language.",
    "cn": "我們那位博學的教授幾乎能談論任何話題，但他用非常簡單的語言解釋事情。"
  },
  {
    "word": "pedantic",
    "pos": "adj.",
    "cn_def": "迂腐的；過分拘泥細節的",
    "en_def": "caring too much about small details and rules",
    "sentence": "Some students think the teacher is {{BLANK}} about commas, but good punctuation makes writing much clearer.",
    "cn": "有些學生覺得老師對逗號過分講究，但良好的標點讓文章清楚得多。"
  },
  {
    "word": "didactic",
    "pos": "adj.",
    "cn_def": "說教的；教誨的",
    "en_def": "intended to teach, often in a way that feels like a lecture",
    "sentence": "The film was too {{BLANK}}, so the audience felt they were being lectured instead of entertained.",
    "cn": "這部電影太說教了，所以觀眾覺得自己在被訓話而不是在娛樂。"
  },
  {
    "word": "formulaic",
    "pos": "adj.",
    "cn_def": "公式化的",
    "en_def": "following a fixed pattern, with no originality",
    "sentence": "Many exam essays are {{BLANK}}, because students memorise the same opening sentences and use them every time.",
    "cn": "許多考試作文都很公式化，因為學生背誦同樣的開頭句並每次都使用。"
  },
  {
    "word": "abide",
    "pos": "v.",
    "cn_def": "遵守（abide by）",
    "en_def": "to accept and follow a rule or decision",
    "sentence": "All candidates must {{BLANK}} by the exam rules, or their results may be cancelled without any warning.",
    "cn": "所有考生都必須遵守考試規則，否則成績可能會在沒有任何警告的情況下被取消。"
  },
  {
    "word": "abridged",
    "pos": "adj.",
    "cn_def": "刪節的；簡寫的",
    "en_def": "made shorter by removing some parts",
    "sentence": "We read an {{BLANK}} version of the novel, because the original was too long for a one-month course.",
    "cn": "我們讀的是這本小說的簡寫版，因為原著對一個月的課程來說太長了。"
  },
  {
    "word": "absurd",
    "pos": "adj.",
    "cn_def": "荒謬的",
    "en_def": "completely silly or unreasonable",
    "sentence": "It seems {{BLANK}} to give young children three hours of homework a night, and many parents have complained.",
    "cn": "讓幼童每晚寫三小時作業似乎很荒謬，許多家長已經提出抱怨。"
  },
  {
    "word": "accolade",
    "pos": "n.",
    "cn_def": "讚譽；獎項",
    "en_def": "praise or an award for an achievement",
    "sentence": "The teacher received the highest {{BLANK}} in the city, but she said the real winners were her students.",
    "cn": "這位老師獲得全市最高的榮譽，但她說真正的贏家是她的學生。"
  },
  {
    "word": "accommodate",
    "pos": "v.",
    "cn_def": "容納；照顧到（需求）",
    "en_def": "to provide what someone needs",
    "sentence": "The new library can {{BLANK}} three hundred students, so it is never too crowded even during exams.",
    "cn": "新圖書館能容納三百名學生，所以即使考試期間也不會太擁擠。"
  },
  {
    "word": "acquaint",
    "pos": "v.",
    "cn_def": "使熟悉；使認識",
    "en_def": "to make yourself or someone familiar with something",
    "sentence": "Before the trip, the teacher wanted to {{BLANK}} us with local customs, so she showed a short video about Japan.",
    "cn": "出發前老師想讓我們熟悉當地習俗，所以她播放了一段關於日本的短片。"
  },
  {
    "word": "adaptable",
    "pos": "adj.",
    "cn_def": "適應力強的",
    "en_def": "able to change to suit new situations",
    "sentence": "Children are very {{BLANK}}, so most of them settle into a new school within a few weeks.",
    "cn": "孩子的適應力很強，所以大多數在幾週內就能適應新學校。"
  },
  {
    "word": "administer",
    "pos": "v.",
    "cn_def": "施行；實施（考試等）",
    "en_def": "to organise and give something such as a test",
    "sentence": "The teachers will {{BLANK}} the reading test in the morning, and the results will be ready by Friday.",
    "cn": "老師們將在早上實施閱讀測驗，結果會在星期五前出爐。"
  }
];

const MCQS = [
  {
    "q": "Reading widely gives children _____ challenges, and it also helps them understand other people's feelings.",
    "options": [
      "malleable",
      "intrepid",
      "laudable",
      "intellectual"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "After two years of practice she became a _____ writer, but she still asks her teacher to check her work.",
    "options": [
      "desirable",
      "studious",
      "competent",
      "elementary"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Teachers attend _____ training every summer, so they can learn new ways to support their students.",
    "options": [
      "elite",
      "professional",
      "absent",
      "dogmatic"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "In your report you may _____ a famous scientist, but you must put the words in quotation marks.",
    "options": [
      "quote",
      "transcend",
      "mark",
      "oversee"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "His essay was too _____, so the teacher asked him to cut it from 800 words to 400.",
    "options": [
      "wary",
      "absent",
      "exempt",
      "verbose"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The teacher prepared an easier _____ of the article, so weaker readers could follow the class discussion.",
    "options": [
      "version",
      "note-taking",
      "dean",
      "presentation"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Students need _____ when they choose a university major, because the decision affects their future career.",
    "options": [
      "ingenuity",
      "presentation",
      "guidance",
      "preconception"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "I did not _____ my history teacher at first, but now I understand how much she taught me.",
    "options": [
      "perplex",
      "appreciate",
      "collate",
      "impart"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Please give a _____ answer to each question, because you only have twenty minutes for the whole section.",
    "options": [
      "brief",
      "prestigious",
      "venerable",
      "copious"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The teacher wrote a short _____ on each poem, and it helped us understand the writer's hidden meaning.",
    "options": [
      "undergraduate",
      "commentary",
      "privilege",
      "IQ"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Our principal attended an education _____ in Singapore, and she came back with many new ideas for our school.",
    "options": [
      "audiobook",
      "supervisor",
      "self-study",
      "conference"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Online courses can give useful _____, but employers still want to see real skills in interviews.",
    "options": [
      "qualification",
      "dexterity",
      "credential",
      "professor"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "She showed great business _____ when she ran the school café, so the club made a big profit.",
    "options": [
      "acumen",
      "IQ",
      "plethora",
      "internship"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Our _____ professor can talk about almost any topic, yet he explains things in very simple language.",
    "options": [
      "lax",
      "erudite",
      "accredited",
      "zealous"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Some students think the teacher is _____ about commas, but good punctuation makes writing much clearer.",
    "options": [
      "frivolous",
      "mixed-ability",
      "pedantic",
      "multiple-choice"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The film was too _____, so the audience felt they were being lectured instead of entertained.",
    "options": [
      "amateur",
      "socioeconomic",
      "incisive",
      "didactic"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Many exam essays are _____, because students memorise the same opening sentences and use them every time.",
    "options": [
      "fallible",
      "formulaic",
      "gifted",
      "hands-on"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "All candidates must _____ by the exam rules, or their results may be cancelled without any warning.",
    "options": [
      "retake",
      "elucidate",
      "coerce",
      "abide"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "We read an _____ version of the novel, because the original was too long for a one-month course.",
    "options": [
      "abridged",
      "talented",
      "commensurate",
      "eclectic"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "It seems _____ to give young children three hours of homework a night, and many parents have complained.",
    "options": [
      "talented",
      "tertiary",
      "absurd",
      "formative"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The teacher received the highest _____ in the city, but she said the real winners were her students.",
    "options": [
      "self-study",
      "accolade",
      "elective",
      "streaming"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The new library can _____ three hundred students, so it is never too crowded even during exams.",
    "options": [
      "delve",
      "encapsulate",
      "accommodate",
      "squander"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Before the trip, the teacher wanted to _____ us with local customs, so she showed a short video about Japan.",
    "options": [
      "oversee",
      "solicit",
      "redress",
      "acquaint"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Children are very _____, so most of them settle into a new school within a few weeks.",
    "options": [
      "adaptable",
      "assiduous",
      "hands-on",
      "chronological"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The teachers will _____ the reading test in the morning, and the results will be ready by Friday.",
    "options": [
      "espouse",
      "administer",
      "underpin",
      "critique"
    ],
    "answer": 1,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "intellectual": {
    "pos": "adj.",
    "en_def": "relating to the ability to think and understand ideas",
    "cn_def": "智力的；知識性的"
  },
  "competent": {
    "pos": "adj.",
    "en_def": "having enough skill to do something well",
    "cn_def": "有能力的；稱職的"
  },
  "professional": {
    "pos": "adj.",
    "en_def": "relating to a job that needs special training",
    "cn_def": "專業的"
  },
  "quote": {
    "pos": "v.",
    "en_def": "to repeat the exact words that someone else said or wrote",
    "cn_def": "引用；引述"
  },
  "verbose": {
    "pos": "adj.",
    "en_def": "using more words than are needed",
    "cn_def": "冗長的；囉唆的"
  },
  "version": {
    "pos": "n.",
    "en_def": "a slightly different form of something",
    "cn_def": "版本"
  },
  "guidance": {
    "pos": "n.",
    "en_def": "help and advice about what to do",
    "cn_def": "指導；輔導"
  },
  "appreciate": {
    "pos": "v.",
    "en_def": "to understand the value of something",
    "cn_def": "欣賞；重視；感激"
  },
  "brief": {
    "pos": "adj.",
    "en_def": "short, using few words or lasting a short time",
    "cn_def": "簡短的"
  },
  "commentary": {
    "pos": "n.",
    "en_def": "a set of comments explaining or judging something",
    "cn_def": "評論；解說"
  },
  "conference": {
    "pos": "n.",
    "en_def": "a large formal meeting where people discuss ideas",
    "cn_def": "研討會；會議"
  },
  "credential": {
    "pos": "n.",
    "en_def": "a qualification that shows you are able to do a job",
    "cn_def": "資歷證明；資格證書"
  },
  "acumen": {
    "pos": "n.",
    "en_def": "the ability to make good, quick judgements",
    "cn_def": "敏銳；精明"
  },
  "erudite": {
    "pos": "adj.",
    "en_def": "having a great deal of knowledge from reading",
    "cn_def": "博學的"
  },
  "pedantic": {
    "pos": "adj.",
    "en_def": "caring too much about small details and rules",
    "cn_def": "迂腐的；過分拘泥細節的"
  },
  "didactic": {
    "pos": "adj.",
    "en_def": "intended to teach, often in a way that feels like a lecture",
    "cn_def": "說教的；教誨的"
  },
  "formulaic": {
    "pos": "adj.",
    "en_def": "following a fixed pattern, with no originality",
    "cn_def": "公式化的"
  },
  "abide": {
    "pos": "v.",
    "en_def": "to accept and follow a rule or decision",
    "cn_def": "遵守（abide by）"
  },
  "abridged": {
    "pos": "adj.",
    "en_def": "made shorter by removing some parts",
    "cn_def": "刪節的；簡寫的"
  },
  "absurd": {
    "pos": "adj.",
    "en_def": "completely silly or unreasonable",
    "cn_def": "荒謬的"
  },
  "accolade": {
    "pos": "n.",
    "en_def": "praise or an award for an achievement",
    "cn_def": "讚譽；獎項"
  },
  "accommodate": {
    "pos": "v.",
    "en_def": "to provide what someone needs",
    "cn_def": "容納；照顧到（需求）"
  },
  "acquaint": {
    "pos": "v.",
    "en_def": "to make yourself or someone familiar with something",
    "cn_def": "使熟悉；使認識"
  },
  "adaptable": {
    "pos": "adj.",
    "en_def": "able to change to suit new situations",
    "cn_def": "適應力強的"
  },
  "administer": {
    "pos": "v.",
    "en_def": "to organise and give something such as a test",
    "cn_def": "施行；實施（考試等）"
  },
  "malleable": {
    "pos": "adj.",
    "en_def": "easily changed or influenced",
    "cn_def": "可塑的；易受影響的"
  },
  "intrepid": {
    "pos": "adj.",
    "en_def": "brave and not afraid of danger",
    "cn_def": "無畏的；勇敢的"
  },
  "laudable": {
    "pos": "adj.",
    "en_def": "deserving praise",
    "cn_def": "值得稱讚的"
  },
  "desirable": {
    "pos": "adj.",
    "en_def": "worth having or wanting",
    "cn_def": "令人嚮往的；理想的"
  },
  "studious": {
    "pos": "adj.",
    "en_def": "spending a lot of time studying and reading",
    "cn_def": "好學的；用功的"
  },
  "elementary": {
    "pos": "adj.",
    "en_def": "about the first, simplest stage of school or learning",
    "cn_def": "初級的；小學的"
  },
  "elite": {
    "pos": "adj.",
    "en_def": "belonging to the best or most powerful group",
    "cn_def": "菁英的；頂尖的"
  },
  "absent": {
    "pos": "adj.",
    "en_def": "not at school or work when you should be",
    "cn_def": "缺席的"
  },
  "dogmatic": {
    "pos": "adj.",
    "en_def": "sure that your beliefs are right and refusing other ideas",
    "cn_def": "武斷的；教條的"
  },
  "transcend": {
    "pos": "v.",
    "en_def": "to go beyond the usual limits of something",
    "cn_def": "超越"
  },
  "mark": {
    "pos": "v.",
    "en_def": "to check and give a score to students' work",
    "cn_def": "批改；評分"
  },
  "oversee": {
    "pos": "v.",
    "en_def": "to watch and organise work to check it is done well",
    "cn_def": "監督；督導"
  },
  "wary": {
    "pos": "adj.",
    "en_def": "careful because you think there may be danger or problems",
    "cn_def": "謹慎的；提防的"
  },
  "exempt": {
    "pos": "adj.",
    "en_def": "not required to do something that others must do",
    "cn_def": "被免除的"
  },
  "note-taking": {
    "pos": "n.",
    "en_def": "writing down the key points while listening or reading",
    "cn_def": "做筆記"
  },
  "dean": {
    "pos": "n.",
    "en_def": "a person in charge of a faculty or of students at a university",
    "cn_def": "院長；系主任"
  },
  "presentation": {
    "pos": "n.",
    "en_def": "a talk in which someone shows and explains information",
    "cn_def": "簡報；口頭報告"
  },
  "ingenuity": {
    "pos": "n.",
    "en_def": "skill in thinking of clever new ideas",
    "cn_def": "巧思；創造力"
  },
  "preconception": {
    "pos": "n.",
    "en_def": "an idea formed before you have enough information",
    "cn_def": "先入之見；成見"
  },
  "perplex": {
    "pos": "v.",
    "en_def": "to make someone confused",
    "cn_def": "使困惑"
  },
  "collate": {
    "pos": "v.",
    "en_def": "to collect and arrange information in order",
    "cn_def": "整理；彙整"
  },
  "impart": {
    "pos": "v.",
    "en_def": "to pass knowledge or skills to someone",
    "cn_def": "傳授；傳遞"
  },
  "prestigious": {
    "pos": "adj.",
    "en_def": "respected and admired as very good",
    "cn_def": "有聲望的；名聲顯赫的"
  },
  "venerable": {
    "pos": "adj.",
    "en_def": "respected because of age or experience",
    "cn_def": "德高望重的；歷史悠久的"
  },
  "copious": {
    "pos": "adj.",
    "en_def": "in large amounts",
    "cn_def": "大量的；豐富的"
  },
  "undergraduate": {
    "pos": "n.",
    "en_def": "a university student studying for a first degree",
    "cn_def": "大學部學生"
  },
  "privilege": {
    "pos": "n.",
    "en_def": "a special advantage that only some people have",
    "cn_def": "特權；優勢"
  },
  "iq": {
    "pos": "n.",
    "en_def": "a number that measures a person's thinking ability",
    "cn_def": "智商"
  },
  "audiobook": {
    "pos": "n.",
    "en_def": "a recording of someone reading a book aloud",
    "cn_def": "有聲書"
  },
  "supervisor": {
    "pos": "n.",
    "en_def": "a teacher who guides a student's research",
    "cn_def": "指導教授；主管"
  },
  "self-study": {
    "pos": "n.",
    "en_def": "learning by yourself without a teacher",
    "cn_def": "自學；自修"
  },
  "qualification": {
    "pos": "n.",
    "en_def": "an official record that you have passed exams or training",
    "cn_def": "資格；學歷證照"
  },
  "dexterity": {
    "pos": "n.",
    "en_def": "skill in using your hands or mind",
    "cn_def": "靈巧；熟練"
  },
  "professor": {
    "pos": "n.",
    "en_def": "a senior teacher at a university",
    "cn_def": "教授"
  },
  "plethora": {
    "pos": "n.",
    "en_def": "a very large amount, often too much",
    "cn_def": "過多；大量"
  },
  "internship": {
    "pos": "n.",
    "en_def": "a short period of work to gain experience",
    "cn_def": "實習"
  },
  "lax": {
    "pos": "adj.",
    "en_def": "not strict enough",
    "cn_def": "鬆散的；不嚴格的"
  },
  "accredited": {
    "pos": "adj.",
    "en_def": "officially approved as meeting standards",
    "cn_def": "經認證的"
  },
  "zealous": {
    "pos": "adj.",
    "en_def": "very enthusiastic and eager",
    "cn_def": "熱心的；狂熱的"
  },
  "frivolous": {
    "pos": "adj.",
    "en_def": "not serious or important",
    "cn_def": "輕浮的；無關緊要的"
  },
  "mixed-ability": {
    "pos": "adj.",
    "en_def": "including students of different levels together",
    "cn_def": "混合能力的"
  },
  "multiple-choice": {
    "pos": "adj.",
    "en_def": "giving several possible answers to choose from",
    "cn_def": "選擇題的"
  },
  "amateur": {
    "pos": "adj.",
    "en_def": "doing something for enjoyment, not as a job",
    "cn_def": "業餘的"
  },
  "socioeconomic": {
    "pos": "adj.",
    "en_def": "relating to social class and money",
    "cn_def": "社會經濟的"
  },
  "incisive": {
    "pos": "adj.",
    "en_def": "clear, sharp and showing deep understanding",
    "cn_def": "敏銳的；一針見血的"
  },
  "fallible": {
    "pos": "adj.",
    "en_def": "able to make mistakes",
    "cn_def": "會犯錯的"
  },
  "gifted": {
    "pos": "adj.",
    "en_def": "having much greater natural ability than most people",
    "cn_def": "有天賦的；資優的"
  },
  "hands-on": {
    "pos": "adj.",
    "en_def": "learning by doing things yourself",
    "cn_def": "動手做的；實作的"
  },
  "retake": {
    "pos": "v.",
    "en_def": "to take an exam again after failing or to get a better score",
    "cn_def": "重考"
  },
  "elucidate": {
    "pos": "v.",
    "en_def": "to explain something clearly",
    "cn_def": "闡明；解釋清楚"
  },
  "coerce": {
    "pos": "v.",
    "en_def": "to force someone to do something they do not want to do",
    "cn_def": "強迫；脅迫"
  },
  "talented": {
    "pos": "adj.",
    "en_def": "having a natural ability to do something well",
    "cn_def": "有才華的"
  },
  "commensurate": {
    "pos": "adj.",
    "en_def": "matching in size, amount or level",
    "cn_def": "相稱的；相當的"
  },
  "eclectic": {
    "pos": "adj.",
    "en_def": "including ideas or styles from many different sources",
    "cn_def": "兼容並蓄的；多元的"
  },
  "tertiary": {
    "pos": "adj.",
    "en_def": "relating to education at college or university",
    "cn_def": "高等（教育）的；大專的"
  },
  "formative": {
    "pos": "adj.",
    "en_def": "used during learning to help students improve",
    "cn_def": "形成性的"
  },
  "elective": {
    "pos": "n.",
    "en_def": "a course that students can choose to take",
    "cn_def": "選修課"
  },
  "streaming": {
    "pos": "n.",
    "en_def": "putting students into classes by their ability level",
    "cn_def": "能力分班"
  },
  "delve": {
    "pos": "v.",
    "en_def": "to search deeply for information",
    "cn_def": "深入探究"
  },
  "encapsulate": {
    "pos": "v.",
    "en_def": "to express the main idea in a short way",
    "cn_def": "概括；簡述"
  },
  "squander": {
    "pos": "v.",
    "en_def": "to waste money, time or chances",
    "cn_def": "浪費；揮霍"
  },
  "solicit": {
    "pos": "v.",
    "en_def": "to ask for something such as money or opinions",
    "cn_def": "徵求；請求"
  },
  "redress": {
    "pos": "v.",
    "en_def": "to correct something unfair",
    "cn_def": "糾正；補救"
  },
  "assiduous": {
    "pos": "adj.",
    "en_def": "working very carefully and with great effort",
    "cn_def": "勤勉的；刻苦的"
  },
  "chronological": {
    "pos": "adj.",
    "en_def": "arranged in the order in which events happened",
    "cn_def": "按時間順序的"
  },
  "espouse": {
    "pos": "v.",
    "en_def": "to support an idea or belief",
    "cn_def": "擁護；支持"
  },
  "underpin": {
    "pos": "v.",
    "en_def": "to give strong support to an idea or system",
    "cn_def": "支撐；作為…的基礎"
  },
  "critique": {
    "pos": "v.",
    "en_def": "to judge something carefully, showing good and bad points",
    "cn_def": "評論；評析"
  }
};

const EXTRA_GLOSSES = {};
