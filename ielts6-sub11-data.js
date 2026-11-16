// Topic 6 Subunit 11 Quiz Data: Academic Words 學術單字 5 (idiosyncratic – maxim)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T06 S11 - Academic Words 學術單字 5 (idiosyncratic – maxim)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "idiosyncratic",
    "pos": "adj.",
    "cn_def": "獨特的；特立獨行的",
    "en_def": "unusual and typical of one particular person",
    "sentence": "The professor has an {{BLANK}} teaching style, but students love his classes because they are never boring.",
    "cn": "這位教授的教學風格很獨特，但學生喜歡他的課，因為從不無聊。"
  },
  {
    "word": "illustrious",
    "pos": "adj.",
    "cn_def": "傑出的；顯赫的",
    "en_def": "famous and admired because of great achievements",
    "sentence": "The university has an {{BLANK}} history, and several of its former students have won Nobel Prizes.",
    "cn": "這所大學有輝煌的歷史，好幾位校友都得過諾貝爾獎。"
  },
  {
    "word": "impart",
    "pos": "v.",
    "cn_def": "傳授；傳遞",
    "en_def": "to pass knowledge or skills to someone",
    "sentence": "Good teachers do more than {{BLANK}} facts, because they also show students how to think for themselves.",
    "cn": "好老師不只是傳授事實，他們也教學生如何獨立思考。"
  },
  {
    "word": "impoverished",
    "pos": "adj.",
    "cn_def": "貧困的",
    "en_def": "very poor",
    "sentence": "Children in {{BLANK}} villages often walk for hours to school, but many of them still dream of going to university.",
    "cn": "貧困村莊的孩子常要走好幾個小時去上學，但他們許多人仍夢想上大學。"
  },
  {
    "word": "incongruous",
    "pos": "adj.",
    "cn_def": "不協調的；格格不入的",
    "en_def": "strange because it does not fit the situation",
    "sentence": "His bright red suit looked {{BLANK}} at the serious graduation ceremony, and many people turned to stare at him.",
    "cn": "他那套鮮紅色西裝在莊重的畢業典禮上顯得格格不入，許多人轉頭盯著他看。"
  },
  {
    "word": "inconsequential",
    "pos": "adj.",
    "cn_def": "無關緊要的",
    "en_def": "not important",
    "sentence": "Don't waste time on {{BLANK}} details in the exam, because the main argument is worth most of the marks.",
    "cn": "考試時別把時間浪費在無關緊要的細節上，因為主要論點佔了大部分的分數。"
  },
  {
    "word": "indoctrinate",
    "pos": "v.",
    "cn_def": "灌輸（思想）",
    "en_def": "to teach people to accept beliefs without questioning them",
    "sentence": "Schools should not {{BLANK}} students with one political view, but should help them compare different opinions.",
    "cn": "學校不應向學生灌輸單一政治觀點，而應幫助他們比較不同意見。"
  },
  {
    "word": "inexorable",
    "pos": "adj.",
    "cn_def": "無法阻擋的",
    "en_def": "impossible to stop",
    "sentence": "The {{BLANK}} rise of online learning has changed schools, and even grandparents now take courses on their phones.",
    "cn": "線上學習勢不可擋的興起改變了學校，連祖父母現在都用手機上課。"
  },
  {
    "word": "instigate",
    "pos": "v.",
    "cn_def": "發起；促成",
    "en_def": "to start an action or event",
    "sentence": "The students {{BLANK}} a campaign to save the old school tree, and the city finally agreed to protect it.",
    "cn": "學生們發起了一場拯救校園老樹的運動，市政府最後同意保護它。"
  },
  {
    "word": "ingenuity",
    "pos": "n.",
    "cn_def": "巧思；創造力",
    "en_def": "skill in thinking of clever new ideas",
    "sentence": "The robot team showed great {{BLANK}}, because they built their machine from old bicycles and plastic bottles.",
    "cn": "機器人隊展現了極大的巧思，因為他們用舊腳踏車和塑膠瓶打造機器。"
  },
  {
    "word": "instrumental",
    "pos": "adj.",
    "cn_def": "起重要作用的",
    "en_def": "very important in making something happen",
    "sentence": "My English teacher was {{BLANK}} in helping me win the scholarship, so I sent her a thank-you card.",
    "cn": "我的英文老師在幫助我贏得獎學金這件事上功不可沒，所以我寄了一張感謝卡給她。"
  },
  {
    "word": "intelligible",
    "pos": "adj.",
    "cn_def": "可理解的；清楚易懂的",
    "en_def": "clear enough to be understood",
    "sentence": "Your accent does not matter much, as long as your speech is {{BLANK}} and your ideas are clear.",
    "cn": "你的口音不太重要，只要你的話語清楚易懂、想法清晰就好。"
  },
  {
    "word": "interdisciplinary",
    "pos": "adj.",
    "cn_def": "跨學科的",
    "en_def": "involving two or more subjects",
    "sentence": "Our {{BLANK}} project combined history and art, so we painted a mural about our town's past.",
    "cn": "我們的跨學科專題結合了歷史與藝術，所以我們畫了一幅關於小鎮過去的壁畫。"
  },
  {
    "word": "jargon",
    "pos": "n.",
    "cn_def": "術語；行話",
    "en_def": "special words used by a group that others find hard to understand",
    "sentence": "The report was full of education {{BLANK}}, so many parents could not understand the new policy.",
    "cn": "這份報告充滿教育術語，所以許多家長看不懂新政策。"
  },
  {
    "word": "juxtapose",
    "pos": "v.",
    "cn_def": "並列；並置",
    "en_def": "to put two things side by side to compare them",
    "sentence": "The writer {{BLANK}} a rich school and a poor school, and the contrast made readers think about fairness.",
    "cn": "作者把一所富裕學校和一所貧窮學校並列比較，這種對比讓讀者思考公平問題。"
  },
  {
    "word": "laborious",
    "pos": "adj.",
    "cn_def": "費力的；辛苦的",
    "en_def": "needing a lot of time and effort",
    "sentence": "Copying notes by hand is {{BLANK}}, but some studies show it helps students remember more.",
    "cn": "用手抄筆記很費力，但有些研究顯示它能幫助學生記住更多。"
  },
  {
    "word": "laudable",
    "pos": "adj.",
    "cn_def": "值得稱讚的",
    "en_def": "deserving praise",
    "sentence": "The plan to give every child a free breakfast is {{BLANK}}, but the city still needs to find the money.",
    "cn": "讓每個孩子都有免費早餐的計畫值得稱讚，但市政府仍需籌措經費。"
  },
  {
    "word": "lax",
    "pos": "adj.",
    "cn_def": "鬆散的；不嚴格的",
    "en_def": "not strict enough",
    "sentence": "Security at the exam centre was {{BLANK}}, so some students brought their phones into the room.",
    "cn": "考場的安全管理很鬆散，所以有些學生把手機帶進了考場。"
  },
  {
    "word": "legible",
    "pos": "adj.",
    "cn_def": "字跡清楚的；易讀的",
    "en_def": "clear enough to read",
    "sentence": "Please make your handwriting {{BLANK}}, because the examiners cannot give marks for words they cannot read.",
    "cn": "請把字寫得清楚易讀，因為閱卷人無法為看不懂的字給分。"
  },
  {
    "word": "literal",
    "pos": "adj.",
    "cn_def": "字面上的",
    "en_def": "using the basic meaning of a word",
    "sentence": "A {{BLANK}} translation of an idiom often sounds strange, so translators look for a phrase with the same feeling.",
    "cn": "成語的字面翻譯常常聽起來很奇怪，所以譯者會找有相同感覺的說法。"
  },
  {
    "word": "lofty",
    "pos": "adj.",
    "cn_def": "崇高的；遠大的",
    "en_def": "very high, noble or ambitious",
    "sentence": "The school has {{BLANK}} goals for every student, but some teachers worry that the targets are unrealistic.",
    "cn": "學校為每位學生設定了遠大的目標，但有些老師擔心這些目標不切實際。"
  },
  {
    "word": "longitudinal",
    "pos": "adj.",
    "cn_def": "縱貫的；長期追蹤的",
    "en_def": "studying the same people over a long time",
    "sentence": "A {{BLANK}} study followed 1,000 children for twenty years, and it found that reading at home predicted later success.",
    "cn": "一項長期追蹤研究追蹤了一千名兒童二十年，發現在家閱讀能預測日後的成功。"
  },
  {
    "word": "malleable",
    "pos": "adj.",
    "cn_def": "可塑的；易受影響的",
    "en_def": "easily changed or influenced",
    "sentence": "Young minds are {{BLANK}}, so the habits children form at school can last for their whole lives.",
    "cn": "年輕的心智是可塑的，所以孩子在學校養成的習慣可能維持一輩子。"
  },
  {
    "word": "mandatory",
    "pos": "adj.",
    "cn_def": "強制的；義務的",
    "en_def": "required by law or rules",
    "sentence": "Swimming lessons are {{BLANK}} in many schools in Taiwan, because the island is surrounded by sea.",
    "cn": "游泳課在台灣許多學校是必修的，因為這座島四面環海。"
  },
  {
    "word": "maxim",
    "pos": "n.",
    "cn_def": "格言；座右銘",
    "en_def": "a short saying that gives a rule for behaviour",
    "sentence": "My grandfather's favourite {{BLANK}} was \"Never stop learning\", and he took a computer class at eighty.",
    "cn": "我祖父最喜歡的格言是「學無止境」，他八十歲時還去上電腦課。"
  }
];

const MCQS = [
  {
    "q": "The professor has an _____ teaching style, but students love his classes because they are never boring.",
    "options": [
      "idiosyncratic",
      "impeccable",
      "learner-centred",
      "emphatic"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The university has an _____ history, and several of its former students have won Nobel Prizes.",
    "options": [
      "self-taught",
      "hands-on",
      "illustrious",
      "seminal"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Good teachers do more than _____ facts, because they also show students how to think for themselves.",
    "options": [
      "accommodate",
      "condense",
      "elucidate",
      "impart"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Children in _____ villages often walk for hours to school, but many of them still dream of going to university.",
    "options": [
      "adaptable",
      "impoverished",
      "ardent",
      "exempt"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "His bright red suit looked _____ at the serious graduation ceremony, and many people turned to stare at him.",
    "options": [
      "incongruous",
      "individualised",
      "co-educational",
      "extracurricular"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Don't waste time on _____ details in the exam, because the main argument is worth most of the marks.",
    "options": [
      "deaf",
      "obstinate",
      "inconsequential",
      "facile"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Schools should not _____ students with one political view, but should help them compare different opinions.",
    "options": [
      "debilitate",
      "indoctrinate",
      "ostracise",
      "proofread"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The _____ rise of online learning has changed schools, and even grandparents now take courses on their phones.",
    "options": [
      "chronological",
      "professional",
      "extracurricular",
      "inexorable"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The students _____ a campaign to save the old school tree, and the city finally agreed to protect it.",
    "options": [
      "master",
      "instigate",
      "accommodate",
      "ameliorate"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The robot team showed great _____, because they built their machine from old bicycles and plastic bottles.",
    "options": [
      "commentary",
      "brevity",
      "note-taking",
      "ingenuity"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "My English teacher was _____ in helping me win the scholarship, so I sent her a thank-you card.",
    "options": [
      "seminal",
      "absurd",
      "instrumental",
      "naive"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Your accent does not matter much, as long as your speech is _____ and your ideas are clear.",
    "options": [
      "intelligible",
      "perfunctory",
      "underprivileged",
      "egalitarian"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Our _____ project combined history and art, so we painted a mural about our town's past.",
    "options": [
      "punctual",
      "summative",
      "gifted",
      "interdisciplinary"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The report was full of education _____, so many parents could not understand the new policy.",
    "options": [
      "dexterity",
      "jargon",
      "reunion",
      "scholarship"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The writer _____ a rich school and a poor school, and the contrast made readers think about fairness.",
    "options": [
      "juxtapose",
      "digress",
      "redress",
      "relegate"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Copying notes by hand is _____, but some studies show it helps students remember more.",
    "options": [
      "abridged",
      "opaque",
      "laborious",
      "intensive"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The plan to give every child a free breakfast is _____, but the city still needs to find the money.",
    "options": [
      "insular",
      "cursory",
      "underprivileged",
      "laudable"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Security at the exam centre was _____, so some students brought their phones into the room.",
    "options": [
      "verbose",
      "peculiar",
      "lax",
      "circumspect"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Please make your handwriting _____, because the examiners cannot give marks for words they cannot read.",
    "options": [
      "legible",
      "talented",
      "concerted",
      "cogent"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "A _____ translation of an idiom often sounds strange, so translators look for a phrase with the same feeling.",
    "options": [
      "dogmatic",
      "literal",
      "heterogeneous",
      "open-book"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The school has _____ goals for every student, but some teachers worry that the targets are unrealistic.",
    "options": [
      "wholesome",
      "exacting",
      "premature",
      "lofty"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "A _____ study followed 1,000 children for twenty years, and it found that reading at home predicted later success.",
    "options": [
      "longitudinal",
      "talented",
      "colloquial",
      "didactic"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Young minds are _____, so the habits children form at school can last for their whole lives.",
    "options": [
      "modest",
      "malleable",
      "fallible",
      "colloquial"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Swimming lessons are _____ in many schools in Taiwan, because the island is surrounded by sea.",
    "options": [
      "perfunctory",
      "didactic",
      "mandatory",
      "competent"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "My grandfather's favourite _____ was \"Never stop learning\", and he took a computer class at eighty.",
    "options": [
      "maxim",
      "note-taking",
      "bookworm",
      "IQ"
    ],
    "answer": 0,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "idiosyncratic": {
    "pos": "adj.",
    "en_def": "unusual and typical of one particular person",
    "cn_def": "獨特的；特立獨行的"
  },
  "illustrious": {
    "pos": "adj.",
    "en_def": "famous and admired because of great achievements",
    "cn_def": "傑出的；顯赫的"
  },
  "impart": {
    "pos": "v.",
    "en_def": "to pass knowledge or skills to someone",
    "cn_def": "傳授；傳遞"
  },
  "impoverished": {
    "pos": "adj.",
    "en_def": "very poor",
    "cn_def": "貧困的"
  },
  "incongruous": {
    "pos": "adj.",
    "en_def": "strange because it does not fit the situation",
    "cn_def": "不協調的；格格不入的"
  },
  "inconsequential": {
    "pos": "adj.",
    "en_def": "not important",
    "cn_def": "無關緊要的"
  },
  "indoctrinate": {
    "pos": "v.",
    "en_def": "to teach people to accept beliefs without questioning them",
    "cn_def": "灌輸（思想）"
  },
  "inexorable": {
    "pos": "adj.",
    "en_def": "impossible to stop",
    "cn_def": "無法阻擋的"
  },
  "instigate": {
    "pos": "v.",
    "en_def": "to start an action or event",
    "cn_def": "發起；促成"
  },
  "ingenuity": {
    "pos": "n.",
    "en_def": "skill in thinking of clever new ideas",
    "cn_def": "巧思；創造力"
  },
  "instrumental": {
    "pos": "adj.",
    "en_def": "very important in making something happen",
    "cn_def": "起重要作用的"
  },
  "intelligible": {
    "pos": "adj.",
    "en_def": "clear enough to be understood",
    "cn_def": "可理解的；清楚易懂的"
  },
  "interdisciplinary": {
    "pos": "adj.",
    "en_def": "involving two or more subjects",
    "cn_def": "跨學科的"
  },
  "jargon": {
    "pos": "n.",
    "en_def": "special words used by a group that others find hard to understand",
    "cn_def": "術語；行話"
  },
  "juxtapose": {
    "pos": "v.",
    "en_def": "to put two things side by side to compare them",
    "cn_def": "並列；並置"
  },
  "laborious": {
    "pos": "adj.",
    "en_def": "needing a lot of time and effort",
    "cn_def": "費力的；辛苦的"
  },
  "laudable": {
    "pos": "adj.",
    "en_def": "deserving praise",
    "cn_def": "值得稱讚的"
  },
  "lax": {
    "pos": "adj.",
    "en_def": "not strict enough",
    "cn_def": "鬆散的；不嚴格的"
  },
  "legible": {
    "pos": "adj.",
    "en_def": "clear enough to read",
    "cn_def": "字跡清楚的；易讀的"
  },
  "literal": {
    "pos": "adj.",
    "en_def": "using the basic meaning of a word",
    "cn_def": "字面上的"
  },
  "lofty": {
    "pos": "adj.",
    "en_def": "very high, noble or ambitious",
    "cn_def": "崇高的；遠大的"
  },
  "longitudinal": {
    "pos": "adj.",
    "en_def": "studying the same people over a long time",
    "cn_def": "縱貫的；長期追蹤的"
  },
  "malleable": {
    "pos": "adj.",
    "en_def": "easily changed or influenced",
    "cn_def": "可塑的；易受影響的"
  },
  "mandatory": {
    "pos": "adj.",
    "en_def": "required by law or rules",
    "cn_def": "強制的；義務的"
  },
  "maxim": {
    "pos": "n.",
    "en_def": "a short saying that gives a rule for behaviour",
    "cn_def": "格言；座右銘"
  },
  "impeccable": {
    "pos": "adj.",
    "en_def": "perfect, with no mistakes",
    "cn_def": "無可挑剔的；完美的"
  },
  "learner-centred": {
    "pos": "adj.",
    "en_def": "focusing on what students need and do",
    "cn_def": "以學習者為中心的"
  },
  "emphatic": {
    "pos": "adj.",
    "en_def": "said with force to show something is important",
    "cn_def": "強調的；斷然的"
  },
  "self-taught": {
    "pos": "adj.",
    "en_def": "having learned a skill by yourself, without lessons",
    "cn_def": "自學的"
  },
  "hands-on": {
    "pos": "adj.",
    "en_def": "learning by doing things yourself",
    "cn_def": "動手做的；實作的"
  },
  "seminal": {
    "pos": "adj.",
    "en_def": "very important and influencing later work",
    "cn_def": "開創性的；影響深遠的"
  },
  "accommodate": {
    "pos": "v.",
    "en_def": "to provide what someone needs",
    "cn_def": "容納；照顧到（需求）"
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
  "adaptable": {
    "pos": "adj.",
    "en_def": "able to change to suit new situations",
    "cn_def": "適應力強的"
  },
  "ardent": {
    "pos": "adj.",
    "en_def": "very enthusiastic and passionate",
    "cn_def": "熱心的；熱烈的"
  },
  "exempt": {
    "pos": "adj.",
    "en_def": "not required to do something that others must do",
    "cn_def": "被免除的"
  },
  "individualised": {
    "pos": "adj.",
    "en_def": "planned for one particular person",
    "cn_def": "個別化的"
  },
  "co-educational": {
    "pos": "adj.",
    "en_def": "for both boys and girls together",
    "cn_def": "男女合校的"
  },
  "extracurricular": {
    "pos": "adj.",
    "en_def": "done at school but not part of normal lessons",
    "cn_def": "課外的"
  },
  "deaf": {
    "pos": "adj.",
    "en_def": "unable to hear, or not able to hear well",
    "cn_def": "聾的；聽障的"
  },
  "obstinate": {
    "pos": "adj.",
    "en_def": "refusing to change your opinion",
    "cn_def": "固執的"
  },
  "facile": {
    "pos": "adj.",
    "en_def": "too simple and not showing careful thought",
    "cn_def": "膚淺的；輕率的"
  },
  "debilitate": {
    "pos": "v.",
    "en_def": "to make someone or something very weak",
    "cn_def": "使衰弱"
  },
  "ostracise": {
    "pos": "v.",
    "en_def": "to refuse to include someone in a group",
    "cn_def": "排擠；排斥"
  },
  "proofread": {
    "pos": "v.",
    "en_def": "to read writing carefully to find and correct mistakes",
    "cn_def": "校對"
  },
  "chronological": {
    "pos": "adj.",
    "en_def": "arranged in the order in which events happened",
    "cn_def": "按時間順序的"
  },
  "professional": {
    "pos": "adj.",
    "en_def": "relating to a job that needs special training",
    "cn_def": "專業的"
  },
  "master": {
    "pos": "v.",
    "en_def": "to learn something completely and become very good at it",
    "cn_def": "精通；掌握"
  },
  "ameliorate": {
    "pos": "v.",
    "en_def": "to make a bad situation better",
    "cn_def": "改善"
  },
  "commentary": {
    "pos": "n.",
    "en_def": "a set of comments explaining or judging something",
    "cn_def": "評論；解說"
  },
  "brevity": {
    "pos": "n.",
    "en_def": "the quality of using few words",
    "cn_def": "簡潔；簡短"
  },
  "note-taking": {
    "pos": "n.",
    "en_def": "writing down the key points while listening or reading",
    "cn_def": "做筆記"
  },
  "absurd": {
    "pos": "adj.",
    "en_def": "completely silly or unreasonable",
    "cn_def": "荒謬的"
  },
  "naive": {
    "pos": "adj.",
    "en_def": "lacking experience and too ready to believe things",
    "cn_def": "天真的"
  },
  "perfunctory": {
    "pos": "adj.",
    "en_def": "done quickly with little care or interest",
    "cn_def": "敷衍的"
  },
  "underprivileged": {
    "pos": "adj.",
    "en_def": "having less money and fewer chances than most people",
    "cn_def": "弱勢的；貧困的"
  },
  "egalitarian": {
    "pos": "adj.",
    "en_def": "believing everyone should have equal rights and chances",
    "cn_def": "平等主義的"
  },
  "punctual": {
    "pos": "adj.",
    "en_def": "arriving or doing something at the right time",
    "cn_def": "準時的"
  },
  "summative": {
    "pos": "adj.",
    "en_def": "used at the end to judge what students have learned",
    "cn_def": "總結性的"
  },
  "gifted": {
    "pos": "adj.",
    "en_def": "having much greater natural ability than most people",
    "cn_def": "有天賦的；資優的"
  },
  "dexterity": {
    "pos": "n.",
    "en_def": "skill in using your hands or mind",
    "cn_def": "靈巧；熟練"
  },
  "reunion": {
    "pos": "n.",
    "en_def": "a meeting of people who have not seen each other for a long time",
    "cn_def": "重聚；同學會"
  },
  "scholarship": {
    "pos": "n.",
    "en_def": "money given to a student to help pay for education",
    "cn_def": "獎學金"
  },
  "digress": {
    "pos": "v.",
    "en_def": "to talk about something not connected to the main topic",
    "cn_def": "離題"
  },
  "redress": {
    "pos": "v.",
    "en_def": "to correct something unfair",
    "cn_def": "糾正；補救"
  },
  "relegate": {
    "pos": "v.",
    "en_def": "to move someone or something to a less important position",
    "cn_def": "降級；貶至次要地位"
  },
  "abridged": {
    "pos": "adj.",
    "en_def": "made shorter by removing some parts",
    "cn_def": "刪節的；簡寫的"
  },
  "opaque": {
    "pos": "adj.",
    "en_def": "difficult to understand; not clear",
    "cn_def": "不透明的；難懂的"
  },
  "intensive": {
    "pos": "adj.",
    "en_def": "involving a lot of work in a short time",
    "cn_def": "密集的"
  },
  "insular": {
    "pos": "adj.",
    "en_def": "interested only in your own small group or country",
    "cn_def": "狹隘的；封閉的"
  },
  "cursory": {
    "pos": "adj.",
    "en_def": "done quickly without paying attention to details",
    "cn_def": "粗略的；草率的"
  },
  "verbose": {
    "pos": "adj.",
    "en_def": "using more words than are needed",
    "cn_def": "冗長的；囉唆的"
  },
  "peculiar": {
    "pos": "adj.",
    "en_def": "strange or unusual",
    "cn_def": "奇怪的；特殊的"
  },
  "circumspect": {
    "pos": "adj.",
    "en_def": "careful not to take risks",
    "cn_def": "謹慎的"
  },
  "talented": {
    "pos": "adj.",
    "en_def": "having a natural ability to do something well",
    "cn_def": "有才華的"
  },
  "concerted": {
    "pos": "adj.",
    "en_def": "done by people working together with determination",
    "cn_def": "共同的；齊心協力的"
  },
  "cogent": {
    "pos": "adj.",
    "en_def": "clear, logical and able to persuade people",
    "cn_def": "有說服力的"
  },
  "dogmatic": {
    "pos": "adj.",
    "en_def": "sure that your beliefs are right and refusing other ideas",
    "cn_def": "武斷的；教條的"
  },
  "heterogeneous": {
    "pos": "adj.",
    "en_def": "made up of many different kinds",
    "cn_def": "異質的；多樣混雜的"
  },
  "open-book": {
    "pos": "adj.",
    "en_def": "allowing students to use books during the exam",
    "cn_def": "開書考的"
  },
  "wholesome": {
    "pos": "adj.",
    "en_def": "good for your health or your moral character",
    "cn_def": "有益身心的"
  },
  "exacting": {
    "pos": "adj.",
    "en_def": "needing a lot of care, effort and skill",
    "cn_def": "要求嚴格的；費力的"
  },
  "premature": {
    "pos": "adj.",
    "en_def": "happening too early",
    "cn_def": "過早的"
  },
  "colloquial": {
    "pos": "adj.",
    "en_def": "used in informal conversation, not formal writing",
    "cn_def": "口語的"
  },
  "didactic": {
    "pos": "adj.",
    "en_def": "intended to teach, often in a way that feels like a lecture",
    "cn_def": "說教的；教誨的"
  },
  "modest": {
    "pos": "adj.",
    "en_def": "not very large; or not talking much about your success",
    "cn_def": "適度的；謙虛的"
  },
  "fallible": {
    "pos": "adj.",
    "en_def": "able to make mistakes",
    "cn_def": "會犯錯的"
  },
  "competent": {
    "pos": "adj.",
    "en_def": "having enough skill to do something well",
    "cn_def": "有能力的；稱職的"
  },
  "bookworm": {
    "pos": "n.",
    "en_def": "a person who loves reading books",
    "cn_def": "書蟲"
  },
  "iq": {
    "pos": "n.",
    "en_def": "a number that measures a person's thinking ability",
    "cn_def": "智商"
  }
};

const EXTRA_GLOSSES = {};
