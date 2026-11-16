// Topic 6 Subunit 13 Quiz Data: Academic Words 學術單字 7 (prospective – dissuade)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T06 S13 - Academic Words 學術單字 7 (prospective – dissuade)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "prospective",
    "pos": "adj.",
    "cn_def": "未來的；預期的",
    "en_def": "expected to become something in the future",
    "sentence": "The university held an open day for {{BLANK}} students, and they toured the labs and dormitories.",
    "cn": "大學為未來的學生舉辦了開放日，他們參觀了實驗室和宿舍。"
  },
  {
    "word": "punitive",
    "pos": "adj.",
    "cn_def": "懲罰性的",
    "en_def": "intended as punishment",
    "sentence": "Many experts say {{BLANK}} rules do not stop bullying, so schools should also teach empathy and kindness.",
    "cn": "許多專家說懲罰性的規定無法阻止霸凌，所以學校也應該教導同理心和善良。"
  },
  {
    "word": "quintessential",
    "pos": "adj.",
    "cn_def": "典型的；精髓的",
    "en_def": "being the most typical example of something",
    "sentence": "Night markets are a {{BLANK}} part of Taiwanese life, so exchange students always ask to visit one.",
    "cn": "夜市是台灣生活最典型的一部分，所以交換學生總是要求去逛。"
  },
  {
    "word": "reform",
    "pos": "n.",
    "cn_def": "改革",
    "en_def": "a change made to improve a system",
    "sentence": "The education {{BLANK}} gave students more elective courses, but some parents worry about university entrance.",
    "cn": "這次教育改革給了學生更多選修課，但有些家長擔心升大學的問題。"
  },
  {
    "word": "relegate",
    "pos": "v.",
    "cn_def": "降級；貶至次要地位",
    "en_def": "to move someone or something to a less important position",
    "sentence": "Many schools {{BLANK}} art and music to one hour a week, because they focus on exam subjects.",
    "cn": "許多學校把美術和音樂降為每週一小時，因為他們專注在考試科目上。"
  },
  {
    "word": "sanction",
    "pos": "n.",
    "cn_def": "批准；認可",
    "en_def": "official permission or approval",
    "sentence": "The club cannot hold the overnight event without the school's {{BLANK}}, so the leaders wrote a formal request.",
    "cn": "沒有學校的批准，社團不能舉辦過夜活動，所以幹部寫了正式申請。"
  },
  {
    "word": "seminal",
    "pos": "adj.",
    "cn_def": "開創性的；影響深遠的",
    "en_def": "very important and influencing later work",
    "sentence": "Her {{BLANK}} research on how children learn to read changed teaching methods around the world.",
    "cn": "她關於兒童如何學習閱讀的開創性研究改變了全世界的教學方法。"
  },
  {
    "word": "solicit",
    "pos": "v.",
    "cn_def": "徵求；請求",
    "en_def": "to ask for something such as money or opinions",
    "sentence": "The principal {{BLANK}} ideas from students about the new canteen menu, and she received over five hundred replies.",
    "cn": "校長向學生徵求新餐廳菜單的點子，並收到超過五百份回覆。"
  },
  {
    "word": "streamline",
    "pos": "v.",
    "cn_def": "精簡；使更有效率",
    "en_def": "to make a system simpler and more efficient",
    "sentence": "The university wants to {{BLANK}} its application process, so students will fill in one online form instead of five.",
    "cn": "大學想簡化申請流程，所以學生只需填寫一份線上表格而不是五份。"
  },
  {
    "word": "supersede",
    "pos": "v.",
    "cn_def": "取代",
    "en_def": "to replace something older or less useful",
    "sentence": "Tablets have not completely {{BLANK}} paper books, and many students still prefer printed pages for long reading.",
    "cn": "平板電腦並沒有完全取代紙本書，許多學生長篇閱讀時仍偏好印刷書頁。"
  },
  {
    "word": "tacit",
    "pos": "adj.",
    "cn_def": "心照不宣的；默許的",
    "en_def": "understood without being said",
    "sentence": "There was a {{BLANK}} agreement that nobody would talk during the reading hour, so the room was completely silent.",
    "cn": "大家有個心照不宣的共識，閱讀時間沒有人說話，所以教室裡一片寂靜。"
  },
  {
    "word": "tenet",
    "pos": "n.",
    "cn_def": "原則；信條",
    "en_def": "a main principle or belief",
    "sentence": "A key {{BLANK}} of the school is respect for others, and teachers remind students of it every day.",
    "cn": "這所學校的一項重要信條是尊重他人，老師每天都提醒學生。"
  },
  {
    "word": "transcend",
    "pos": "v.",
    "cn_def": "超越",
    "en_def": "to go beyond the usual limits of something",
    "sentence": "Music can {{BLANK}} language barriers, so the international students soon sang together in the school choir.",
    "cn": "音樂能超越語言障礙，所以國際學生很快就在學校合唱團裡一起唱歌。"
  },
  {
    "word": "underpin",
    "pos": "v.",
    "cn_def": "支撐；作為…的基礎",
    "en_def": "to give strong support to an idea or system",
    "sentence": "Strong reading skills {{BLANK}} success in every subject, so the school gives extra help to weak readers.",
    "cn": "紮實的閱讀能力是各科成功的基礎，所以學校給閱讀較弱的學生額外協助。"
  },
  {
    "word": "utilitarian",
    "pos": "adj.",
    "cn_def": "實用的；功利的",
    "en_def": "designed to be useful rather than beautiful",
    "sentence": "The old classroom was {{BLANK}} and grey, but the students decorated it with posters and plants.",
    "cn": "那間舊教室只講實用又灰暗，但學生們用海報和植物把它佈置起來。"
  },
  {
    "word": "venerable",
    "pos": "adj.",
    "cn_def": "德高望重的；歷史悠久的",
    "en_def": "respected because of age or experience",
    "sentence": "The {{BLANK}} school celebrated its hundredth birthday, and former students came back from all over the world.",
    "cn": "這所歷史悠久的學校慶祝百年校慶，校友們從世界各地回來。"
  },
  {
    "word": "vindicate",
    "pos": "v.",
    "cn_def": "證明…是正確的",
    "en_def": "to prove that someone was right",
    "sentence": "The excellent results {{BLANK}} the teacher's new method, so other schools now want to try it too.",
    "cn": "優異的成績證明這位老師的新方法是對的，所以其他學校現在也想嘗試。"
  },
  {
    "word": "wholesome",
    "pos": "adj.",
    "cn_def": "有益身心的",
    "en_def": "good for your health or your moral character",
    "sentence": "The school serves {{BLANK}} lunches with rice, vegetables and fish, and fried food is only offered once a week.",
    "cn": "學校供應米飯、蔬菜和魚等有益健康的午餐，而油炸食物一週只提供一次。"
  },
  {
    "word": "zealous",
    "pos": "adj.",
    "cn_def": "熱心的；狂熱的",
    "en_def": "very enthusiastic and eager",
    "sentence": "The {{BLANK}} volunteers arrived early to set up the book fair, and they stayed until every box was packed.",
    "cn": "熱心的志工們提早到場佈置書展，一直留到每個箱子都打包好。"
  },
  {
    "word": "spur",
    "pos": "v.",
    "cn_def": "激勵；鞭策",
    "en_def": "to encourage someone to do something",
    "sentence": "Her teacher's kind words {{BLANK}} her to enter the writing contest, and she won second place.",
    "cn": "老師親切的話語激勵她參加寫作比賽，結果她得了第二名。"
  },
  {
    "word": "bestow",
    "pos": "v.",
    "cn_def": "授予；贈予",
    "en_def": "to give an honour or gift to someone",
    "sentence": "The university {{BLANK}} an honorary degree on the famous writer, and she gave a moving speech to graduates.",
    "cn": "大學授予這位知名作家榮譽學位，她向畢業生發表了動人的演講。"
  },
  {
    "word": "benevolent",
    "pos": "adj.",
    "cn_def": "仁慈的；慈善的",
    "en_def": "kind and wanting to help others",
    "sentence": "A {{BLANK}} businessman paid for the new school bus, so children in the mountains no longer walk for hours.",
    "cn": "一位慈善的商人出資購買新校車，所以山區的孩子不必再走好幾個小時。"
  },
  {
    "word": "circumspect",
    "pos": "adj.",
    "cn_def": "謹慎的",
    "en_def": "careful not to take risks",
    "sentence": "Be {{BLANK}} about what you post online, because some universities sometimes check applicants' social media accounts.",
    "cn": "在網路上發文要謹慎，因為有些大學有時會查看申請者的社群媒體帳號。"
  },
  {
    "word": "cumbersome",
    "pos": "adj.",
    "cn_def": "笨重的；繁瑣的",
    "en_def": "large, heavy or complicated and difficult to use",
    "sentence": "The old registration system was {{BLANK}}, so students waited in long lines for hours every semester.",
    "cn": "舊的選課系統很繁瑣，所以學生每學期都要排好幾個小時的長隊。"
  },
  {
    "word": "dissuade",
    "pos": "v.",
    "cn_def": "勸阻",
    "en_def": "to persuade someone not to do something",
    "sentence": "Her parents tried to {{BLANK}} her from studying drama, but she followed her dream and became an actor.",
    "cn": "她父母試圖勸阻她念戲劇，但她追隨夢想成為了演員。"
  }
];

const MCQS = [
  {
    "q": "The university held an open day for _____ students, and they toured the labs and dormitories.",
    "options": [
      "prospective",
      "abridged",
      "egalitarian",
      "chronological"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Many experts say _____ rules do not stop bullying, so schools should also teach empathy and kindness.",
    "options": [
      "reticent",
      "incongruous",
      "interdisciplinary",
      "punitive"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Night markets are a _____ part of Taiwanese life, so exchange students always ask to visit one.",
    "options": [
      "peculiar",
      "avid",
      "quintessential",
      "eminent"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The education _____ gave students more elective courses, but some parents worry about university entrance.",
    "options": [
      "prodigy",
      "reform",
      "alumni",
      "professor"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Many schools _____ art and music to one hour a week, because they focus on exam subjects.",
    "options": [
      "expel",
      "encapsulate",
      "relegate",
      "appreciate"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The club cannot hold the overnight event without the school's _____, so the leaders wrote a formal request.",
    "options": [
      "sanction",
      "alumni",
      "demeanour",
      "undergraduate"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Her _____ research on how children learn to read changed teaching methods around the world.",
    "options": [
      "colloquial",
      "incisive",
      "admirable",
      "seminal"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The principal _____ ideas from students about the new canteen menu, and she received over five hundred replies.",
    "options": [
      "exasperate",
      "solicit",
      "exhort",
      "epitomise"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The university wants to _____ its application process, so students will fill in one online form instead of five.",
    "options": [
      "streamline",
      "encapsulate",
      "indoctrinate",
      "impart"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Tablets have not completely _____ paper books, and many students still prefer printed pages for long reading.",
    "options": [
      "segregate",
      "supersede",
      "coerce",
      "appreciate"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "There was a _____ agreement that nobody would talk during the reading hour, so the room was completely silent.",
    "options": [
      "insular",
      "methodical",
      "tacit",
      "malleable"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "A key _____ of the school is respect for others, and teachers remind students of it every day.",
    "options": [
      "maxim",
      "faculty",
      "research",
      "tenet"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Music can _____ language barriers, so the international students soon sang together in the school choir.",
    "options": [
      "transcend",
      "retake",
      "juxtapose",
      "condense"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Strong reading skills _____ success in every subject, so the school gives extra help to weak readers.",
    "options": [
      "elucidate",
      "underpin",
      "memorise",
      "distil"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The old classroom was _____ and grey, but the students decorated it with posters and plants.",
    "options": [
      "ardent",
      "peculiar",
      "kinaesthetic",
      "utilitarian"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The _____ school celebrated its hundredth birthday, and former students came back from all over the world.",
    "options": [
      "literal",
      "formative",
      "venerable",
      "struggling"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The excellent results _____ the teacher's new method, so other schools now want to try it too.",
    "options": [
      "garner",
      "vindicate",
      "presuppose",
      "perplex"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The school serves _____ lunches with rice, vegetables and fish, and fried food is only offered once a week.",
    "options": [
      "incisive",
      "postgraduate",
      "wholesome",
      "methodical"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The _____ volunteers arrived early to set up the book fair, and they stayed until every box was packed.",
    "options": [
      "zealous",
      "gifted",
      "incongruous",
      "exempt"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Her teacher's kind words _____ her to enter the writing contest, and she won second place.",
    "options": [
      "endow",
      "galvanise",
      "propagate",
      "spur"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The university _____ an honorary degree on the famous writer, and she gave a moving speech to graduates.",
    "options": [
      "elucidate",
      "bestow",
      "amass",
      "segregate"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "A _____ businessman paid for the new school bus, so children in the mountains no longer walk for hours.",
    "options": [
      "outmoded",
      "copious",
      "benevolent",
      "verbose"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Be _____ about what you post online, because some universities sometimes check applicants' social media accounts.",
    "options": [
      "haphazard",
      "copious",
      "chronological",
      "circumspect"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The old registration system was _____, so students waited in long lines for hours every semester.",
    "options": [
      "cumbersome",
      "obstinate",
      "intensive",
      "deaf"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Her parents tried to _____ her from studying drama, but she followed her dream and became an actor.",
    "options": [
      "galvanise",
      "disseminate",
      "dissuade",
      "squander"
    ],
    "answer": 2,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "prospective": {
    "pos": "adj.",
    "en_def": "expected to become something in the future",
    "cn_def": "未來的；預期的"
  },
  "punitive": {
    "pos": "adj.",
    "en_def": "intended as punishment",
    "cn_def": "懲罰性的"
  },
  "quintessential": {
    "pos": "adj.",
    "en_def": "being the most typical example of something",
    "cn_def": "典型的；精髓的"
  },
  "reform": {
    "pos": "n.",
    "en_def": "a change made to improve a system",
    "cn_def": "改革"
  },
  "relegate": {
    "pos": "v.",
    "en_def": "to move someone or something to a less important position",
    "cn_def": "降級；貶至次要地位"
  },
  "sanction": {
    "pos": "n.",
    "en_def": "official permission or approval",
    "cn_def": "批准；認可"
  },
  "seminal": {
    "pos": "adj.",
    "en_def": "very important and influencing later work",
    "cn_def": "開創性的；影響深遠的"
  },
  "solicit": {
    "pos": "v.",
    "en_def": "to ask for something such as money or opinions",
    "cn_def": "徵求；請求"
  },
  "streamline": {
    "pos": "v.",
    "en_def": "to make a system simpler and more efficient",
    "cn_def": "精簡；使更有效率"
  },
  "supersede": {
    "pos": "v.",
    "en_def": "to replace something older or less useful",
    "cn_def": "取代"
  },
  "tacit": {
    "pos": "adj.",
    "en_def": "understood without being said",
    "cn_def": "心照不宣的；默許的"
  },
  "tenet": {
    "pos": "n.",
    "en_def": "a main principle or belief",
    "cn_def": "原則；信條"
  },
  "transcend": {
    "pos": "v.",
    "en_def": "to go beyond the usual limits of something",
    "cn_def": "超越"
  },
  "underpin": {
    "pos": "v.",
    "en_def": "to give strong support to an idea or system",
    "cn_def": "支撐；作為…的基礎"
  },
  "utilitarian": {
    "pos": "adj.",
    "en_def": "designed to be useful rather than beautiful",
    "cn_def": "實用的；功利的"
  },
  "venerable": {
    "pos": "adj.",
    "en_def": "respected because of age or experience",
    "cn_def": "德高望重的；歷史悠久的"
  },
  "vindicate": {
    "pos": "v.",
    "en_def": "to prove that someone was right",
    "cn_def": "證明…是正確的"
  },
  "wholesome": {
    "pos": "adj.",
    "en_def": "good for your health or your moral character",
    "cn_def": "有益身心的"
  },
  "zealous": {
    "pos": "adj.",
    "en_def": "very enthusiastic and eager",
    "cn_def": "熱心的；狂熱的"
  },
  "spur": {
    "pos": "v.",
    "en_def": "to encourage someone to do something",
    "cn_def": "激勵；鞭策"
  },
  "bestow": {
    "pos": "v.",
    "en_def": "to give an honour or gift to someone",
    "cn_def": "授予；贈予"
  },
  "benevolent": {
    "pos": "adj.",
    "en_def": "kind and wanting to help others",
    "cn_def": "仁慈的；慈善的"
  },
  "circumspect": {
    "pos": "adj.",
    "en_def": "careful not to take risks",
    "cn_def": "謹慎的"
  },
  "cumbersome": {
    "pos": "adj.",
    "en_def": "large, heavy or complicated and difficult to use",
    "cn_def": "笨重的；繁瑣的"
  },
  "dissuade": {
    "pos": "v.",
    "en_def": "to persuade someone not to do something",
    "cn_def": "勸阻"
  },
  "abridged": {
    "pos": "adj.",
    "en_def": "made shorter by removing some parts",
    "cn_def": "刪節的；簡寫的"
  },
  "egalitarian": {
    "pos": "adj.",
    "en_def": "believing everyone should have equal rights and chances",
    "cn_def": "平等主義的"
  },
  "chronological": {
    "pos": "adj.",
    "en_def": "arranged in the order in which events happened",
    "cn_def": "按時間順序的"
  },
  "reticent": {
    "pos": "adj.",
    "en_def": "not willing to say what you think or feel",
    "cn_def": "沉默寡言的；不願多說的"
  },
  "incongruous": {
    "pos": "adj.",
    "en_def": "strange because it does not fit the situation",
    "cn_def": "不協調的；格格不入的"
  },
  "interdisciplinary": {
    "pos": "adj.",
    "en_def": "involving two or more subjects",
    "cn_def": "跨學科的"
  },
  "peculiar": {
    "pos": "adj.",
    "en_def": "strange or unusual",
    "cn_def": "奇怪的；特殊的"
  },
  "avid": {
    "pos": "adj.",
    "en_def": "very keen and enthusiastic about something",
    "cn_def": "熱衷的"
  },
  "eminent": {
    "pos": "adj.",
    "en_def": "famous and respected in a particular field",
    "cn_def": "傑出的；著名的"
  },
  "prodigy": {
    "pos": "n.",
    "en_def": "a young person with extraordinary ability",
    "cn_def": "神童"
  },
  "alumni": {
    "pos": "n.",
    "en_def": "former students of a school or university",
    "cn_def": "校友（複數）"
  },
  "professor": {
    "pos": "n.",
    "en_def": "a senior teacher at a university",
    "cn_def": "教授"
  },
  "expel": {
    "pos": "v.",
    "en_def": "to officially make a student leave a school",
    "cn_def": "開除；退學"
  },
  "encapsulate": {
    "pos": "v.",
    "en_def": "to express the main idea in a short way",
    "cn_def": "概括；簡述"
  },
  "appreciate": {
    "pos": "v.",
    "en_def": "to understand the value of something",
    "cn_def": "欣賞；重視；感激"
  },
  "demeanour": {
    "pos": "n.",
    "en_def": "the way a person behaves or looks",
    "cn_def": "舉止；態度"
  },
  "undergraduate": {
    "pos": "n.",
    "en_def": "a university student studying for a first degree",
    "cn_def": "大學部學生"
  },
  "colloquial": {
    "pos": "adj.",
    "en_def": "used in informal conversation, not formal writing",
    "cn_def": "口語的"
  },
  "incisive": {
    "pos": "adj.",
    "en_def": "clear, sharp and showing deep understanding",
    "cn_def": "敏銳的；一針見血的"
  },
  "admirable": {
    "pos": "adj.",
    "en_def": "deserving respect and approval",
    "cn_def": "令人欽佩的"
  },
  "exasperate": {
    "pos": "v.",
    "en_def": "to make someone very annoyed",
    "cn_def": "激怒；使惱火"
  },
  "exhort": {
    "pos": "v.",
    "en_def": "to strongly encourage someone to do something",
    "cn_def": "力勸；勉勵"
  },
  "epitomise": {
    "pos": "v.",
    "en_def": "to be a perfect example of something",
    "cn_def": "是…的典型；集中體現"
  },
  "indoctrinate": {
    "pos": "v.",
    "en_def": "to teach people to accept beliefs without questioning them",
    "cn_def": "灌輸（思想）"
  },
  "impart": {
    "pos": "v.",
    "en_def": "to pass knowledge or skills to someone",
    "cn_def": "傳授；傳遞"
  },
  "segregate": {
    "pos": "v.",
    "en_def": "to separate one group of people from others",
    "cn_def": "隔離；分開"
  },
  "coerce": {
    "pos": "v.",
    "en_def": "to force someone to do something they do not want to do",
    "cn_def": "強迫；脅迫"
  },
  "insular": {
    "pos": "adj.",
    "en_def": "interested only in your own small group or country",
    "cn_def": "狹隘的；封閉的"
  },
  "methodical": {
    "pos": "adj.",
    "en_def": "doing things carefully in a planned order",
    "cn_def": "有條不紊的"
  },
  "malleable": {
    "pos": "adj.",
    "en_def": "easily changed or influenced",
    "cn_def": "可塑的；易受影響的"
  },
  "maxim": {
    "pos": "n.",
    "en_def": "a short saying that gives a rule for behaviour",
    "cn_def": "格言；座右銘"
  },
  "faculty": {
    "pos": "n.",
    "en_def": "a group of university departments, or all the teaching staff",
    "cn_def": "學院；全體教職員"
  },
  "research": {
    "pos": "n.",
    "en_def": "careful study to discover new facts",
    "cn_def": "研究"
  },
  "retake": {
    "pos": "v.",
    "en_def": "to take an exam again after failing or to get a better score",
    "cn_def": "重考"
  },
  "juxtapose": {
    "pos": "v.",
    "en_def": "to put two things side by side to compare them",
    "cn_def": "並列；並置"
  },
  "condense": {
    "pos": "v.",
    "en_def": "to make a text shorter but keep the main ideas",
    "cn_def": "濃縮；精簡"
  },
  "elucidate": {
    "pos": "v.",
    "en_def": "to explain something clearly",
    "cn_def": "闡明；解釋清楚"
  },
  "memorise": {
    "pos": "v.",
    "en_def": "to learn something so well that you can remember it exactly",
    "cn_def": "背誦；記住"
  },
  "distil": {
    "pos": "v.",
    "en_def": "to take the most important ideas from something",
    "cn_def": "提煉；萃取精華"
  },
  "ardent": {
    "pos": "adj.",
    "en_def": "very enthusiastic and passionate",
    "cn_def": "熱心的；熱烈的"
  },
  "kinaesthetic": {
    "pos": "adj.",
    "en_def": "learning by moving and touching things",
    "cn_def": "動覺的；肢體操作的"
  },
  "literal": {
    "pos": "adj.",
    "en_def": "using the basic meaning of a word",
    "cn_def": "字面上的"
  },
  "formative": {
    "pos": "adj.",
    "en_def": "used during learning to help students improve",
    "cn_def": "形成性的"
  },
  "struggling": {
    "pos": "adj.",
    "en_def": "having difficulty doing something",
    "cn_def": "學習困難的；吃力的"
  },
  "garner": {
    "pos": "v.",
    "en_def": "to collect or gain something such as support",
    "cn_def": "獲得；贏得"
  },
  "presuppose": {
    "pos": "v.",
    "en_def": "to assume something is true before you begin",
    "cn_def": "預先假定；以…為前提"
  },
  "perplex": {
    "pos": "v.",
    "en_def": "to make someone confused",
    "cn_def": "使困惑"
  },
  "postgraduate": {
    "pos": "adj.",
    "en_def": "relating to study after a first degree",
    "cn_def": "研究所的"
  },
  "gifted": {
    "pos": "adj.",
    "en_def": "having much greater natural ability than most people",
    "cn_def": "有天賦的；資優的"
  },
  "exempt": {
    "pos": "adj.",
    "en_def": "not required to do something that others must do",
    "cn_def": "被免除的"
  },
  "endow": {
    "pos": "v.",
    "en_def": "to give a large amount of money to a school or other organisation",
    "cn_def": "捐贈；資助"
  },
  "galvanise": {
    "pos": "v.",
    "en_def": "to shock or excite someone into taking action",
    "cn_def": "激勵；促使行動"
  },
  "propagate": {
    "pos": "v.",
    "en_def": "to spread ideas or beliefs to many people",
    "cn_def": "傳播；宣揚"
  },
  "amass": {
    "pos": "v.",
    "en_def": "to collect a large amount of something over time",
    "cn_def": "累積；積聚"
  },
  "outmoded": {
    "pos": "adj.",
    "en_def": "no longer fashionable or useful",
    "cn_def": "過時的"
  },
  "copious": {
    "pos": "adj.",
    "en_def": "in large amounts",
    "cn_def": "大量的；豐富的"
  },
  "verbose": {
    "pos": "adj.",
    "en_def": "using more words than are needed",
    "cn_def": "冗長的；囉唆的"
  },
  "haphazard": {
    "pos": "adj.",
    "en_def": "not planned or organised",
    "cn_def": "雜亂無章的；隨意的"
  },
  "obstinate": {
    "pos": "adj.",
    "en_def": "refusing to change your opinion",
    "cn_def": "固執的"
  },
  "intensive": {
    "pos": "adj.",
    "en_def": "involving a lot of work in a short time",
    "cn_def": "密集的"
  },
  "deaf": {
    "pos": "adj.",
    "en_def": "unable to hear, or not able to hear well",
    "cn_def": "聾的；聽障的"
  },
  "disseminate": {
    "pos": "v.",
    "en_def": "to spread information widely",
    "cn_def": "傳播；散布"
  },
  "squander": {
    "pos": "v.",
    "en_def": "to waste money, time or chances",
    "cn_def": "浪費；揮霍"
  }
};

const EXTRA_GLOSSES = {};
