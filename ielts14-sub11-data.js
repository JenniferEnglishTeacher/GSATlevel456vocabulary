// Topic 14 Subunit 11 Quiz Data: Academic Words 學術單字 4 (ramble – factual)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T14 S11 - Academic Words 學術單字 4 (ramble – factual)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "ramble",
    "pos": "v.",
    "cn_def": "漫無邊際地閒扯",
    "en_def": "to talk for a long time in a confused way",
    "sentence": "The speaker {{BLANK}} for twenty minutes without making a clear point, so half the audience started checking their phones.",
    "cn": "那位講者東拉西扯了二十分鐘卻沒講出重點，所以一半的聽眾開始看手機。"
  },
  {
    "word": "retort",
    "pos": "v.",
    "cn_def": "反駁；回嘴",
    "en_def": "to reply quickly and angrily",
    "sentence": "When the reporter asked about the mistake, the coach {{BLANK}} that the referee was to blame, and he walked away.",
    "cn": "記者問到那個失誤時，教練反駁說是裁判的錯，然後就走開了。"
  },
  {
    "word": "stymie",
    "pos": "v.",
    "cn_def": "阻礙；使受挫",
    "en_def": "to stop someone from making progress",
    "sentence": "Slow internet {{BLANK}} the students' research, so the teacher gave them extra time to finish the project.",
    "cn": "網路太慢阻礙了學生的研究，所以老師給他們額外的時間完成專題。"
  },
  {
    "word": "waver",
    "pos": "v.",
    "cn_def": "動搖；猶豫不決",
    "en_def": "to be unable to decide; to become less certain",
    "sentence": "Her support for the plan began to {{BLANK}} after she read the critics' arguments, so she asked for more information.",
    "cn": "讀了批評者的論點後，她對該計畫的支持開始動搖，所以她要求更多資訊。"
  },
  {
    "word": "understate",
    "pos": "v.",
    "cn_def": "輕描淡寫；少報",
    "en_def": "to describe something as smaller than it really is",
    "sentence": "The official report {{BLANK}} the number of people affected by the flood, so less help was sent than was needed.",
    "cn": "官方報告少報了受水災影響的人數，所以送去的援助比需要的少。"
  },
  {
    "word": "romanticise",
    "pos": "v.",
    "cn_def": "浪漫化；理想化",
    "en_def": "to make something seem better than it really is",
    "sentence": "Many films {{BLANK}} life in big cities, but in reality young workers often struggle with high rent and long hours.",
    "cn": "許多電影美化大城市的生活，但現實中年輕上班族常為高房租和長工時所苦。"
  },
  {
    "word": "scapegoat",
    "pos": "v.",
    "cn_def": "使成為代罪羔羊",
    "en_def": "to blame someone unfairly for others' mistakes",
    "sentence": "The company {{BLANK}} a junior employee for the data leak, although managers had ignored the warnings for months.",
    "cn": "公司讓一名基層員工當代罪羔羊承擔資料外洩的責任，儘管主管們已忽視警告好幾個月。"
  },
  {
    "word": "incriminate",
    "pos": "v.",
    "cn_def": "使顯得有罪；牽連",
    "en_def": "to make someone seem guilty",
    "sentence": "The messages on his phone {{BLANK}} him, because they showed that he had planned the fake reviews.",
    "cn": "他手機裡的訊息顯示他有罪，因為那些訊息證明他策劃了假評論。"
  },
  {
    "word": "insist",
    "pos": "v.",
    "cn_def": "堅持；堅稱",
    "en_def": "to say firmly that something is true or must happen",
    "sentence": "The influencer {{BLANK}} that the photos were not edited, but experts showed clear signs that they had been changed.",
    "cn": "那位網紅堅稱照片沒有修過，但專家指出了明顯被修改的跡象。"
  },
  {
    "word": "declare",
    "pos": "v.",
    "cn_def": "宣布；聲明",
    "en_def": "to state something officially or clearly",
    "sentence": "The organisers {{BLANK}} the event a success, although many people complained about the long queues.",
    "cn": "主辦單位宣布活動很成功，儘管許多人抱怨排隊太久。"
  },
  {
    "word": "utter",
    "pos": "v.",
    "cn_def": "說出；發出（聲音）",
    "en_def": "to say something",
    "sentence": "He did not {{BLANK}} a single word during the meeting, so his manager later asked whether he disagreed with the plan.",
    "cn": "他在會議中一個字都沒說，所以經理後來問他是否不同意這個計畫。"
  },
  {
    "word": "voice",
    "pos": "v.",
    "cn_def": "表達；說出",
    "en_def": "to express an opinion or feeling",
    "sentence": "Several worried parents {{BLANK}} concerns about the new app, because it secretly collected children's location data.",
    "cn": "好幾位憂心的家長表達了對那個新應用程式的擔憂，因為它偷偷收集孩子的位置資料。"
  },
  {
    "word": "muzzle",
    "pos": "v.",
    "cn_def": "封口；壓制言論",
    "en_def": "to stop someone from speaking freely",
    "sentence": "The new law could {{BLANK}} the press, because journalists may be fined for reporting on government mistakes.",
    "cn": "新法可能會封住媒體的口，因為記者可能因報導政府的錯誤而被罰款。"
  },
  {
    "word": "confess",
    "pos": "v.",
    "cn_def": "承認；坦白",
    "en_def": "to admit that you did something wrong",
    "sentence": "The student {{BLANK}} that he had copied the essay from a website, so the teacher let him write it again.",
    "cn": "那位學生坦承他從網站上抄了那篇作文，所以老師讓他重寫。"
  },
  {
    "word": "accusatory",
    "pos": "adj.",
    "cn_def": "指責的；控訴的",
    "en_def": "suggesting that someone has done wrong",
    "sentence": "The comment sounded {{BLANK}}, so my friend felt hurt even though I had only asked a simple question.",
    "cn": "那句留言聽起來帶有指責的意味，所以即使我只是問了個簡單的問題，我朋友還是覺得受傷。"
  },
  {
    "word": "adamant",
    "pos": "adj.",
    "cn_def": "堅定不移的；堅持的",
    "en_def": "refusing to change your opinion",
    "sentence": "The author was {{BLANK}} that the story was true, but she could not provide any documents to prove it.",
    "cn": "那位作者堅稱那個故事是真的，但她提不出任何文件來證明。"
  },
  {
    "word": "alarmist",
    "pos": "adj.",
    "cn_def": "危言聳聽的",
    "en_def": "making people worried without good reason",
    "sentence": "The {{BLANK}} headline said that all phones cause cancer, but the study it described was very small and uncertain.",
    "cn": "那個危言聳聽的標題說所有手機都會致癌，但它所描述的研究規模很小又不確定。"
  },
  {
    "word": "complicit",
    "pos": "adj.",
    "cn_def": "共謀的；有共犯責任的",
    "en_def": "involved with others in doing something wrong",
    "sentence": "By sharing the cruel video, many users became {{BLANK}} in the bullying, although they did not create it.",
    "cn": "許多使用者分享那段殘忍的影片，雖然不是他們拍的，卻也成了霸凌的共犯。"
  },
  {
    "word": "culpable",
    "pos": "adj.",
    "cn_def": "應受責備的；有罪責的",
    "en_def": "deserving blame",
    "sentence": "The court found the website {{BLANK}} for the damage, because it had published the false story without checking.",
    "cn": "法院判定那個網站對損害負有責任，因為它未經查證就刊登了不實報導。"
  },
  {
    "word": "deceitful",
    "pos": "adj.",
    "cn_def": "欺詐的；不誠實的",
    "en_def": "trying to make people believe things that are false",
    "sentence": "The {{BLANK}} seller used photos of a different house, so the family was shocked when they saw the real one.",
    "cn": "那個不誠實的賣家使用了另一棟房子的照片，所以那家人看到真正的房子時大吃一驚。"
  },
  {
    "word": "derogatory",
    "pos": "adj.",
    "cn_def": "貶損的；不敬的",
    "en_def": "showing a very poor opinion of someone",
    "sentence": "The player used a {{BLANK}} word about his opponent, and the league banned him for three matches.",
    "cn": "那名球員對對手使用了貶損的字眼，聯盟禁賽他三場。"
  },
  {
    "word": "disingenuous",
    "pos": "adj.",
    "cn_def": "不真誠的；虛偽的",
    "en_def": "pretending to be honest when you are not",
    "sentence": "It is {{BLANK}} to say the advert is \"just information\", because the company clearly wants to sell its product.",
    "cn": "說那則廣告「只是資訊」是不真誠的，因為那家公司顯然想賣它的產品。"
  },
  {
    "word": "dismissive",
    "pos": "adj.",
    "cn_def": "輕蔑的；不屑一顧的",
    "en_def": "showing that you think something is not important",
    "sentence": "The manager was {{BLANK}} of the customer's complaint, so she posted a long review online that many people read.",
    "cn": "經理對顧客的投訴不屑一顧，所以她在網路上發表了一篇很多人讀的長篇評論。"
  },
  {
    "word": "emotive",
    "pos": "adj.",
    "cn_def": "引起強烈情感的",
    "en_def": "causing strong feelings",
    "sentence": "The charity used {{BLANK}} pictures of hungry children, and donations increased sharply within a week.",
    "cn": "那個慈善機構使用了飢餓兒童的觸動情感的照片，一週內捐款大幅增加。"
  },
  {
    "word": "factual",
    "pos": "adj.",
    "cn_def": "根據事實的；事實性的",
    "en_def": "based on facts, not opinions",
    "sentence": "The report contained several {{BLANK}} errors, so the newspaper had to correct the dates and names the next day.",
    "cn": "那篇報導有好幾處事實錯誤，所以報社隔天必須更正日期和人名。"
  }
];

const MCQS = [
  {
    "q": "The speaker _____ for twenty minutes without making a clear point, so half the audience started checking their phones.",
    "options": [
      "delude",
      "ramble",
      "downplay",
      "subvert"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "When the reporter asked about the mistake, the coach _____ that the referee was to blame, and he walked away.",
    "options": [
      "whitewash",
      "hijack",
      "retort",
      "defuse"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Slow internet _____ the students' research, so the teacher gave them extra time to finish the project.",
    "options": [
      "repudiate",
      "shroud",
      "coax",
      "stymie"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Her support for the plan began to _____ after she read the critics' arguments, so she asked for more information.",
    "options": [
      "waver",
      "defuse",
      "disavow",
      "languish"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The official report _____ the number of people affected by the flood, so less help was sent than was needed.",
    "options": [
      "enunciate",
      "subvert",
      "understate",
      "lambast"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Many films _____ life in big cities, but in reality young workers often struggle with high rent and long hours.",
    "options": [
      "foment",
      "romanticise",
      "muddle",
      "dramatise"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The company _____ a junior employee for the data leak, although managers had ignored the warnings for months.",
    "options": [
      "scapegoat",
      "equivocate",
      "reverberate",
      "defuse"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The messages on his phone _____ him, because they showed that he had planned the fake reviews.",
    "options": [
      "censor",
      "denigrate",
      "emanate",
      "incriminate"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The influencer _____ that the photos were not edited, but experts showed clear signs that they had been changed.",
    "options": [
      "insist",
      "relay",
      "vilify",
      "dramatise"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The organisers _____ the event a success, although many people complained about the long queues.",
    "options": [
      "belie",
      "post",
      "relay",
      "declare"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "He did not _____ a single word during the meeting, so his manager later asked whether he disagreed with the plan.",
    "options": [
      "downplay",
      "unfollow",
      "utter",
      "rebrand"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Several worried parents _____ concerns about the new app, because it secretly collected children's location data.",
    "options": [
      "silence",
      "voice",
      "equivocate",
      "embolden"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The new law could _____ the press, because journalists may be fined for reporting on government mistakes.",
    "options": [
      "block",
      "recant",
      "muzzle",
      "conflate"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The student _____ that he had copied the essay from a website, so the teacher let him write it again.",
    "options": [
      "weaponise",
      "demonise",
      "foment",
      "confess"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The comment sounded _____, so my friend felt hurt even though I had only asked a simple question.",
    "options": [
      "accusatory",
      "ill-informed",
      "non-verbal",
      "incontrovertible"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The author was _____ that the story was true, but she could not provide any documents to prove it.",
    "options": [
      "newsworthy",
      "adamant",
      "sensational",
      "viral"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The _____ headline said that all phones cause cancer, but the study it described was very small and uncertain.",
    "options": [
      "interpersonal",
      "self-serving",
      "alarmist",
      "wilful"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "By sharing the cruel video, many users became _____ in the bullying, although they did not create it.",
    "options": [
      "complicit",
      "self-serving",
      "outspoken",
      "one-sided"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The court found the website _____ for the damage, because it had published the false story without checking.",
    "options": [
      "viral",
      "scathing",
      "populist",
      "culpable"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The _____ seller used photos of a different house, so the family was shocked when they saw the real one.",
    "options": [
      "verbal",
      "deceitful",
      "tactful",
      "jaded"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The player used a _____ word about his opponent, and the league banned him for three matches.",
    "options": [
      "derogatory",
      "evidence-based",
      "interpersonal",
      "pejorative"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "It is _____ to say the advert is \"just information\", because the company clearly wants to sell its product.",
    "options": [
      "reputable",
      "lurid",
      "disingenuous",
      "watertight"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The manager was _____ of the customer's complaint, so she posted a long review online that many people read.",
    "options": [
      "impressionable",
      "unverified",
      "ill-informed",
      "dismissive"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The charity used _____ pictures of hungry children, and donations increased sharply within a week.",
    "options": [
      "pejorative",
      "emotive",
      "partisan",
      "lurid"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The report contained several _____ errors, so the newspaper had to correct the dates and names the next day.",
    "options": [
      "factual",
      "sensational",
      "on-demand",
      "self-serving"
    ],
    "answer": 0,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "ramble": {
    "pos": "v.",
    "en_def": "to talk for a long time in a confused way",
    "cn_def": "漫無邊際地閒扯"
  },
  "retort": {
    "pos": "v.",
    "en_def": "to reply quickly and angrily",
    "cn_def": "反駁；回嘴"
  },
  "stymie": {
    "pos": "v.",
    "en_def": "to stop someone from making progress",
    "cn_def": "阻礙；使受挫"
  },
  "waver": {
    "pos": "v.",
    "en_def": "to be unable to decide; to become less certain",
    "cn_def": "動搖；猶豫不決"
  },
  "understate": {
    "pos": "v.",
    "en_def": "to describe something as smaller than it really is",
    "cn_def": "輕描淡寫；少報"
  },
  "romanticise": {
    "pos": "v.",
    "en_def": "to make something seem better than it really is",
    "cn_def": "浪漫化；理想化"
  },
  "scapegoat": {
    "pos": "v.",
    "en_def": "to blame someone unfairly for others' mistakes",
    "cn_def": "使成為代罪羔羊"
  },
  "incriminate": {
    "pos": "v.",
    "en_def": "to make someone seem guilty",
    "cn_def": "使顯得有罪；牽連"
  },
  "insist": {
    "pos": "v.",
    "en_def": "to say firmly that something is true or must happen",
    "cn_def": "堅持；堅稱"
  },
  "declare": {
    "pos": "v.",
    "en_def": "to state something officially or clearly",
    "cn_def": "宣布；聲明"
  },
  "utter": {
    "pos": "v.",
    "en_def": "to say something",
    "cn_def": "說出；發出（聲音）"
  },
  "voice": {
    "pos": "v.",
    "en_def": "to express an opinion or feeling",
    "cn_def": "表達；說出"
  },
  "muzzle": {
    "pos": "v.",
    "en_def": "to stop someone from speaking freely",
    "cn_def": "封口；壓制言論"
  },
  "confess": {
    "pos": "v.",
    "en_def": "to admit that you did something wrong",
    "cn_def": "承認；坦白"
  },
  "accusatory": {
    "pos": "adj.",
    "en_def": "suggesting that someone has done wrong",
    "cn_def": "指責的；控訴的"
  },
  "adamant": {
    "pos": "adj.",
    "en_def": "refusing to change your opinion",
    "cn_def": "堅定不移的；堅持的"
  },
  "alarmist": {
    "pos": "adj.",
    "en_def": "making people worried without good reason",
    "cn_def": "危言聳聽的"
  },
  "complicit": {
    "pos": "adj.",
    "en_def": "involved with others in doing something wrong",
    "cn_def": "共謀的；有共犯責任的"
  },
  "culpable": {
    "pos": "adj.",
    "en_def": "deserving blame",
    "cn_def": "應受責備的；有罪責的"
  },
  "deceitful": {
    "pos": "adj.",
    "en_def": "trying to make people believe things that are false",
    "cn_def": "欺詐的；不誠實的"
  },
  "derogatory": {
    "pos": "adj.",
    "en_def": "showing a very poor opinion of someone",
    "cn_def": "貶損的；不敬的"
  },
  "disingenuous": {
    "pos": "adj.",
    "en_def": "pretending to be honest when you are not",
    "cn_def": "不真誠的；虛偽的"
  },
  "dismissive": {
    "pos": "adj.",
    "en_def": "showing that you think something is not important",
    "cn_def": "輕蔑的；不屑一顧的"
  },
  "emotive": {
    "pos": "adj.",
    "en_def": "causing strong feelings",
    "cn_def": "引起強烈情感的"
  },
  "factual": {
    "pos": "adj.",
    "en_def": "based on facts, not opinions",
    "cn_def": "根據事實的；事實性的"
  },
  "delude": {
    "pos": "v.",
    "en_def": "to make someone believe something that is not true",
    "cn_def": "欺騙；使誤信"
  },
  "downplay": {
    "pos": "v.",
    "en_def": "to make something seem less important than it is",
    "cn_def": "淡化；輕描淡寫"
  },
  "subvert": {
    "pos": "v.",
    "en_def": "to weaken a system or belief",
    "cn_def": "顛覆；破壞"
  },
  "whitewash": {
    "pos": "v.",
    "en_def": "to hide mistakes or bad facts",
    "cn_def": "粉飾；掩蓋"
  },
  "hijack": {
    "pos": "v.",
    "en_def": "to take control of something for your own purposes",
    "cn_def": "劫持；挾持（議題）"
  },
  "defuse": {
    "pos": "v.",
    "en_def": "to make a tense situation calmer",
    "cn_def": "緩和；化解"
  },
  "repudiate": {
    "pos": "v.",
    "en_def": "to say officially that something is not true",
    "cn_def": "駁斥；否認"
  },
  "shroud": {
    "pos": "v.",
    "en_def": "to cover or hide something",
    "cn_def": "籠罩；隱藏"
  },
  "coax": {
    "pos": "v.",
    "en_def": "to gently persuade someone",
    "cn_def": "哄勸；勸誘"
  },
  "disavow": {
    "pos": "v.",
    "en_def": "to say you are not connected with something",
    "cn_def": "否認（與…有關）；撇清"
  },
  "languish": {
    "pos": "v.",
    "en_def": "to stay in a bad situation for a long time",
    "cn_def": "受困；被冷落"
  },
  "enunciate": {
    "pos": "v.",
    "en_def": "to say words clearly",
    "cn_def": "清楚地發音"
  },
  "lambast": {
    "pos": "v.",
    "en_def": "to criticise someone very strongly",
    "cn_def": "嚴厲抨擊"
  },
  "foment": {
    "pos": "v.",
    "en_def": "to cause trouble or violence",
    "cn_def": "煽動；挑起"
  },
  "muddle": {
    "pos": "v.",
    "en_def": "to mix things up and cause confusion",
    "cn_def": "使混亂；弄混"
  },
  "dramatise": {
    "pos": "v.",
    "en_def": "to make something seem more exciting or serious than it is",
    "cn_def": "誇大；戲劇化"
  },
  "equivocate": {
    "pos": "v.",
    "en_def": "to avoid giving a clear answer",
    "cn_def": "含糊其辭；支吾搪塞"
  },
  "reverberate": {
    "pos": "v.",
    "en_def": "to have a strong effect that continues for a long time",
    "cn_def": "產生持續影響；迴響"
  },
  "censor": {
    "pos": "v.",
    "en_def": "to remove parts of news, books or films that authorities dislike",
    "cn_def": "審查；刪減"
  },
  "denigrate": {
    "pos": "v.",
    "en_def": "to say that someone or something is not good or important",
    "cn_def": "詆毀；貶低"
  },
  "emanate": {
    "pos": "v.",
    "en_def": "to come from a particular source",
    "cn_def": "發出；源自"
  },
  "relay": {
    "pos": "v.",
    "en_def": "to pass a message from one person to another",
    "cn_def": "轉達；轉播"
  },
  "vilify": {
    "pos": "v.",
    "en_def": "to say very bad things about someone, often unfairly",
    "cn_def": "詆毀；中傷"
  },
  "belie": {
    "pos": "v.",
    "en_def": "to give a false idea of something",
    "cn_def": "掩飾；使人誤解"
  },
  "post": {
    "pos": "v.",
    "en_def": "to put a message or picture online",
    "cn_def": "發布；張貼（貼文）"
  },
  "unfollow": {
    "pos": "v.",
    "en_def": "to stop seeing someone's posts on social media",
    "cn_def": "取消追蹤"
  },
  "rebrand": {
    "pos": "v.",
    "en_def": "to change the name or image of a company or product",
    "cn_def": "品牌重塑；改頭換面"
  },
  "silence": {
    "pos": "v.",
    "en_def": "to stop someone from speaking or expressing opinions",
    "cn_def": "使沉默；壓制"
  },
  "embolden": {
    "pos": "v.",
    "en_def": "to make someone braver or more confident",
    "cn_def": "使大膽；壯膽"
  },
  "block": {
    "pos": "v.",
    "en_def": "to stop someone from contacting you online",
    "cn_def": "封鎖"
  },
  "recant": {
    "pos": "v.",
    "en_def": "to say publicly that you no longer believe something you said",
    "cn_def": "公開撤回（說法）"
  },
  "conflate": {
    "pos": "v.",
    "en_def": "to wrongly treat two different things as the same",
    "cn_def": "混為一談"
  },
  "weaponise": {
    "pos": "v.",
    "en_def": "to use something as a way to attack others",
    "cn_def": "將…武器化"
  },
  "demonise": {
    "pos": "v.",
    "en_def": "to describe a person or group as evil",
    "cn_def": "妖魔化"
  },
  "ill-informed": {
    "pos": "adj.",
    "en_def": "having wrong or too little information",
    "cn_def": "消息不靈通的；無知的"
  },
  "non-verbal": {
    "pos": "adj.",
    "en_def": "without words, such as through body movements",
    "cn_def": "非語言的"
  },
  "incontrovertible": {
    "pos": "adj.",
    "en_def": "impossible to argue against",
    "cn_def": "無可辯駁的；不容置疑的"
  },
  "newsworthy": {
    "pos": "adj.",
    "en_def": "interesting or important enough to report",
    "cn_def": "有新聞價值的"
  },
  "sensational": {
    "pos": "adj.",
    "en_def": "made to shock or excite people rather than inform them",
    "cn_def": "聳動的；譁眾取寵的"
  },
  "viral": {
    "pos": "adj.",
    "en_def": "spread very quickly to many people online",
    "cn_def": "爆紅的；病毒式傳播的"
  },
  "interpersonal": {
    "pos": "adj.",
    "en_def": "relating to relationships between people",
    "cn_def": "人際的"
  },
  "self-serving": {
    "pos": "adj.",
    "en_def": "done mainly to help yourself",
    "cn_def": "自私自利的；為自己打算的"
  },
  "wilful": {
    "pos": "adj.",
    "en_def": "done on purpose, knowing it is wrong",
    "cn_def": "蓄意的；故意的"
  },
  "outspoken": {
    "pos": "adj.",
    "en_def": "saying exactly what you think in public",
    "cn_def": "直言不諱的；敢言的"
  },
  "one-sided": {
    "pos": "adj.",
    "en_def": "showing only one point of view",
    "cn_def": "片面的；一面倒的"
  },
  "scathing": {
    "pos": "adj.",
    "en_def": "criticising very strongly",
    "cn_def": "尖刻的；嚴厲的"
  },
  "populist": {
    "pos": "adj.",
    "en_def": "claiming to support ordinary people against the elite",
    "cn_def": "民粹主義的"
  },
  "verbal": {
    "pos": "adj.",
    "en_def": "using spoken words",
    "cn_def": "口頭的；言語的"
  },
  "tactful": {
    "pos": "adj.",
    "en_def": "careful not to upset people when saying difficult things",
    "cn_def": "圓融的；得體的"
  },
  "jaded": {
    "pos": "adj.",
    "en_def": "bored or tired because you have seen too much of something",
    "cn_def": "厭倦的；麻木的"
  },
  "evidence-based": {
    "pos": "adj.",
    "en_def": "based on facts from research",
    "cn_def": "以證據為基礎的；實證的"
  },
  "pejorative": {
    "pos": "adj.",
    "en_def": "expressing disapproval or a low opinion",
    "cn_def": "貶義的"
  },
  "reputable": {
    "pos": "adj.",
    "en_def": "known to be honest and reliable",
    "cn_def": "聲譽良好的；可信賴的"
  },
  "lurid": {
    "pos": "adj.",
    "en_def": "shocking and full of unpleasant details",
    "cn_def": "駭人聽聞的；聳動的"
  },
  "watertight": {
    "pos": "adj.",
    "en_def": "so strong it cannot be questioned",
    "cn_def": "無懈可擊的；嚴密的"
  },
  "impressionable": {
    "pos": "adj.",
    "en_def": "easily influenced by others",
    "cn_def": "易受影響的"
  },
  "unverified": {
    "pos": "adj.",
    "en_def": "not yet checked or proved to be true",
    "cn_def": "未經證實的"
  },
  "partisan": {
    "pos": "adj.",
    "en_def": "strongly supporting one political party",
    "cn_def": "偏袒某一黨派的"
  },
  "on-demand": {
    "pos": "adj.",
    "en_def": "available whenever you want it",
    "cn_def": "隨選的"
  }
};

const EXTRA_GLOSSES = {};
