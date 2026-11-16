// Topic 1 Subunit 14 Quiz Data: Academic Words 學術單字 7 (abundant – negotiate)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T01 S14 - Academic Words 學術單字 7 (abundant – negotiate)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "abundant",
    "pos": "adj.",
    "cn_def": "豐富的;大量的",
    "en_def": "existing in large amounts",
    "sentence": "Information is {{BLANK}} online, but good judgement is rare, so students must learn to choose the best sources.",
    "cn": "網路上的資訊豐富,但良好的判斷力卻很少見,所以學生必須學會選擇最好的資料來源。"
  },
  {
    "word": "scarce",
    "pos": "adj.",
    "cn_def": "稀少的;缺乏的",
    "en_def": "not easy to find; not enough",
    "sentence": "Skilled AI engineers are {{BLANK}} in many countries, so companies offer very high salaries to attract them.",
    "cn": "許多國家都缺乏熟練的人工智慧工程師,所以公司提供非常高的薪水來吸引他們。"
  },
  {
    "word": "diverse",
    "pos": "adj.",
    "cn_def": "多樣的;多元的",
    "en_def": "including many different types of people or things",
    "sentence": "The company hired a {{BLANK}} team to test its AI, because people from different backgrounds notice different problems.",
    "cn": "這家公司聘請了一支多元的團隊來測試它的人工智慧,因為來自不同背景的人會注意到不同的問題。"
  },
  {
    "word": "diversity",
    "pos": "n.",
    "cn_def": "多樣性",
    "en_def": "a range of many different people or things",
    "sentence": "There is little {{BLANK}} in the photos used to train some AI systems, so they make more mistakes with certain faces.",
    "cn": "用來訓練某些人工智慧系統的照片缺乏多樣性,所以它們在某些臉孔上犯更多錯。"
  },
  {
    "word": "distinct",
    "pos": "adj.",
    "cn_def": "不同的;明顯的",
    "en_def": "clearly different or separate",
    "sentence": "Human writing and AI writing used to be quite {{BLANK}}, but now even teachers sometimes cannot tell them apart.",
    "cn": "人類的寫作和人工智慧的寫作過去相當不同,但現在連老師有時都分辨不出來。"
  },
  {
    "word": "distinguish",
    "pos": "v.",
    "cn_def": "區分;辨別",
    "en_def": "to see the difference between things",
    "sentence": "Young children often cannot {{BLANK}} between real videos and AI videos, so parents should watch with them.",
    "cn": "幼童常常無法區分真實影片和人工智慧影片,所以家長應該陪他們一起看。"
  },
  {
    "word": "differentiate",
    "pos": "v.",
    "cn_def": "區別;區分",
    "en_def": "to show or find the difference between things",
    "sentence": "Good teachers {{BLANK}} their lessons for different learners, and AI tools can help them prepare tasks at several levels.",
    "cn": "好老師會針對不同的學習者區分教學內容,而人工智慧工具能幫助他們準備不同程度的任務。"
  },
  {
    "word": "categorise",
    "pos": "v.",
    "cn_def": "將…分類",
    "en_def": "to put things into groups",
    "sentence": "The email app {{BLANK}}s messages into work, shopping and social, so I can find important emails more quickly.",
    "cn": "這個郵件應用程式把訊息分類成工作、購物和社交,所以我能更快找到重要的郵件。"
  },
  {
    "word": "identify",
    "pos": "v.",
    "cn_def": "辨識;找出",
    "en_def": "to recognise and name someone or something",
    "sentence": "The app can {{BLANK}} a plant from a single photo, so our class used it during the school field trip.",
    "cn": "這個應用程式能從一張照片辨識出植物,所以我們班在校外教學時用了它。"
  },
  {
    "word": "define",
    "pos": "v.",
    "cn_def": "定義",
    "en_def": "to explain the exact meaning of a word or idea",
    "sentence": "It is hard to {{BLANK}} creativity, but most people agree that it involves new ideas, not just copying old ones.",
    "cn": "定義創造力很難,但大多數人同意它涉及新的想法,而不只是模仿舊的。"
  },
  {
    "word": "specify",
    "pos": "v.",
    "cn_def": "明確指出;具體說明",
    "en_def": "to state something clearly and in detail",
    "sentence": "The teacher asked us to {{BLANK}} which parts of our project used AI, so she could fairly judge our own work.",
    "cn": "老師要我們具體說明專題中哪些部分用了人工智慧,這樣她才能公平地評斷我們自己的作品。"
  },
  {
    "word": "restrict",
    "pos": "v.",
    "cn_def": "限制",
    "en_def": "to limit what someone can do",
    "sentence": "Some parents {{BLANK}} their children's screen use to one hour a day, but the children often find ways around the rules.",
    "cn": "有些家長把孩子使用螢幕的時間限制在一天一小時,但孩子們常常找到規避規定的方法。"
  },
  {
    "word": "restriction",
    "pos": "n.",
    "cn_def": "限制;規定",
    "en_def": "a rule that limits what you can do",
    "sentence": "The new {{BLANK}}s on AI in exams are strict, so students who break them may have to take the test again.",
    "cn": "考試中使用人工智慧的新規定很嚴格,所以違反的學生可能必須重考。"
  },
  {
    "word": "prohibit",
    "pos": "v.",
    "cn_def": "禁止",
    "en_def": "to officially forbid something",
    "sentence": "The rules {{BLANK}} students from recording teachers without permission, because it could break their privacy.",
    "cn": "規定禁止學生未經允許錄下老師的影音,因為這可能侵犯他們的隱私。"
  },
  {
    "word": "permit",
    "pos": "v.",
    "cn_def": "允許;准許",
    "en_def": "to allow something officially",
    "sentence": "Our school {{BLANK}}s AI for brainstorming, but it does not allow students to copy AI answers into their essays.",
    "cn": "我們學校允許用人工智慧腦力激盪,但不准學生把人工智慧的答案抄進作文裡。"
  },
  {
    "word": "comply",
    "pos": "v.",
    "cn_def": "遵守;服從",
    "en_def": "to obey a rule or request",
    "sentence": "All apps sold in Europe must {{BLANK}} with strict data laws, so some companies changed their products for those markets.",
    "cn": "所有在歐洲販售的應用程式都必須遵守嚴格的資料法規,所以有些公司為那些市場修改了產品。"
  },
  {
    "word": "enforce",
    "pos": "v.",
    "cn_def": "執行;強制實施",
    "en_def": "to make sure that people obey a rule or law",
    "sentence": "It is difficult to {{BLANK}} the no-AI rule at home, so teachers now give more writing tasks in class.",
    "cn": "在家裡很難執行禁用人工智慧的規定,所以老師們現在在課堂上給更多寫作任務。"
  },
  {
    "word": "impose",
    "pos": "v.",
    "cn_def": "強制實施;施加",
    "en_def": "to force people to accept a rule or cost",
    "sentence": "The government plans to {{BLANK}} heavy fines on companies that make deepfakes without clear labels.",
    "cn": "政府計畫對製作深偽影片卻未清楚標示的公司處以高額罰款。"
  },
  {
    "word": "authority",
    "pos": "n.",
    "cn_def": "當局;權力",
    "en_def": "the power to make decisions, or an official group with this power",
    "sentence": "The education {{BLANK}} will decide next month whether students can use AI in the national exams.",
    "cn": "教育當局將在下個月決定學生是否能在全國考試中使用人工智慧。"
  },
  {
    "word": "institution",
    "pos": "n.",
    "cn_def": "機構",
    "en_def": "a large important organisation, like a university or bank",
    "sentence": "Every {{BLANK}} needs its own AI policy, because a hospital and a school face very different risks.",
    "cn": "每個機構都需要自己的人工智慧政策,因為醫院和學校面臨的風險非常不同。"
  },
  {
    "word": "sustainable",
    "pos": "adj.",
    "cn_def": "永續的;可持續的",
    "en_def": "able to continue without harming the environment",
    "sentence": "AI uses a lot of energy, so companies are looking for more {{BLANK}} ways to power their data centres.",
    "cn": "人工智慧使用大量能源,所以公司正在尋找更永續的方式為它們的資料中心供電。"
  },
  {
    "word": "participate",
    "pos": "v.",
    "cn_def": "參與;參加",
    "en_def": "to take part in an activity",
    "sentence": "Shy students often {{BLANK}} more in online discussions, because they have time to think before they type.",
    "cn": "害羞的學生在線上討論中通常參與得更多,因為他們在打字之前有時間思考。"
  },
  {
    "word": "collaborate",
    "pos": "v.",
    "cn_def": "合作",
    "en_def": "to work together with others",
    "sentence": "Students from Taiwan and Japan {{BLANK}}d on a project using online tools, and they presented it together on video.",
    "cn": "台灣和日本的學生用線上工具合作完成一項專題,並一起用視訊發表。"
  },
  {
    "word": "cooperation",
    "pos": "n.",
    "cn_def": "合作;協力",
    "en_def": "working together to reach a shared goal",
    "sentence": "International {{BLANK}} is needed to control AI, because the internet does not stop at any country's border.",
    "cn": "管控人工智慧需要國際合作,因為網路不會在任何國家的邊界停下來。"
  },
  {
    "word": "negotiate",
    "pos": "v.",
    "cn_def": "協商;談判",
    "en_def": "to discuss something to reach an agreement",
    "sentence": "The workers' union {{BLANK}}d with the company, so staff who lost jobs to AI will get training and extra pay.",
    "cn": "工會與公司協商,所以因人工智慧而失業的員工將獲得培訓和額外補償。"
  }
];

const MCQS = [
  {
    "q": "Information is _____ online, but good judgement is rare, so students must learn to choose the best sources.",
    "options": [
      "empirical",
      "responsible",
      "abundant",
      "widespread"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Skilled AI engineers are _____ in many countries, so companies offer very high salaries to attract them.",
    "options": [
      "scarce",
      "accessible",
      "considerable",
      "redundant"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The company hired a _____ team to test its AI, because people from different backgrounds notice different problems.",
    "options": [
      "dependent",
      "diverse",
      "controversial",
      "innovative"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "There is little _____ in the photos used to train some AI systems, so they make more mistakes with certain faces.",
    "options": [
      "programmer",
      "subscription",
      "tutoring",
      "diversity"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Human writing and AI writing used to be quite _____, but now even teachers sometimes cannot tell them apart.",
    "options": [
      "artificial",
      "distinct",
      "objective",
      "sceptical"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Young children often cannot _____ between real videos and AI videos, so parents should watch with them.",
    "options": [
      "acknowledge",
      "replace",
      "malfunction",
      "distinguish"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Good teachers _____ their lessons for different learners, and AI tools can help them prepare tasks at several levels.",
    "options": [
      "incorporate",
      "upskill",
      "differentiate",
      "customise"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The email app _____s messages into work, shopping and social, so I can find important emails more quickly.",
    "options": [
      "categorise",
      "automate",
      "assume",
      "resolve"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The app can _____ a plant from a single photo, so our class used it during the school field trip.",
    "options": [
      "ban",
      "confront",
      "forecast",
      "identify"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "It is hard to _____ creativity, but most people agree that it involves new ideas, not just copying old ones.",
    "options": [
      "affect",
      "define",
      "adjust",
      "simulate"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The teacher asked us to _____ which parts of our project used AI, so she could fairly judge our own work.",
    "options": [
      "expand",
      "anticipate",
      "specify",
      "alter"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Some parents _____ their children's screen use to one hour a day, but the children often find ways around the rules.",
    "options": [
      "restrict",
      "discriminate",
      "maximise",
      "forecast"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The new _____s on AI in exams are strict, so students who break them may have to take the test again.",
    "options": [
      "function",
      "server",
      "premise",
      "restriction"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The rules _____ students from recording teachers without permission, because it could break their privacy.",
    "options": [
      "enable",
      "prohibit",
      "concede",
      "acknowledge"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Our school _____s AI for brainstorming, but it does not allow students to copy AI answers into their essays.",
    "options": [
      "permit",
      "mimic",
      "alter",
      "resolve"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "All apps sold in Europe must _____ with strict data laws, so some companies changed their products for those markets.",
    "options": [
      "establish",
      "retrain",
      "comply",
      "undermine"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "It is difficult to _____ the no-AI rule at home, so teachers now give more writing tasks in class.",
    "options": [
      "acknowledge",
      "analyse",
      "overcome",
      "enforce"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The government plans to _____ heavy fines on companies that make deepfakes without clear labels.",
    "options": [
      "impose",
      "assume",
      "edit",
      "manipulate"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The education _____ will decide next month whether students can use AI in the national exams.",
    "options": [
      "discrimination",
      "breach",
      "authority",
      "theory"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Every _____ needs its own AI policy, because a hospital and a school face very different risks.",
    "options": [
      "impact",
      "institution",
      "profit",
      "survey"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "AI uses a lot of energy, so companies are looking for more _____ ways to power their data centres.",
    "options": [
      "random",
      "remote",
      "sustainable",
      "generative"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Shy students often _____ more in online discussions, because they have time to think before they type.",
    "options": [
      "participate",
      "outsource",
      "paraphrase",
      "predict"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Students from Taiwan and Japan _____d on a project using online tools, and they presented it together on video.",
    "options": [
      "enrol",
      "digitise",
      "track",
      "collaborate"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "International _____ is needed to control AI, because the internet does not stop at any country's border.",
    "options": [
      "divide",
      "cooperation",
      "constraint",
      "bandwidth"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The workers' union _____d with the company, so staff who lost jobs to AI will get training and extra pay.",
    "options": [
      "hack",
      "facilitate",
      "negotiate",
      "ensure"
    ],
    "answer": 2,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "abundant": {
    "pos": "adj.",
    "en_def": "existing in large amounts",
    "cn_def": "豐富的;大量的"
  },
  "scarce": {
    "pos": "adj.",
    "en_def": "not easy to find; not enough",
    "cn_def": "稀少的;缺乏的"
  },
  "diverse": {
    "pos": "adj.",
    "en_def": "including many different types of people or things",
    "cn_def": "多樣的;多元的"
  },
  "diversity": {
    "pos": "n.",
    "en_def": "a range of many different people or things",
    "cn_def": "多樣性"
  },
  "distinct": {
    "pos": "adj.",
    "en_def": "clearly different or separate",
    "cn_def": "不同的;明顯的"
  },
  "distinguish": {
    "pos": "v.",
    "en_def": "to see the difference between things",
    "cn_def": "區分;辨別"
  },
  "differentiate": {
    "pos": "v.",
    "en_def": "to show or find the difference between things",
    "cn_def": "區別;區分"
  },
  "categorise": {
    "pos": "v.",
    "en_def": "to put things into groups",
    "cn_def": "將…分類"
  },
  "identify": {
    "pos": "v.",
    "en_def": "to recognise and name someone or something",
    "cn_def": "辨識;找出"
  },
  "define": {
    "pos": "v.",
    "en_def": "to explain the exact meaning of a word or idea",
    "cn_def": "定義"
  },
  "specify": {
    "pos": "v.",
    "en_def": "to state something clearly and in detail",
    "cn_def": "明確指出;具體說明"
  },
  "restrict": {
    "pos": "v.",
    "en_def": "to limit what someone can do",
    "cn_def": "限制"
  },
  "restriction": {
    "pos": "n.",
    "en_def": "a rule that limits what you can do",
    "cn_def": "限制;規定"
  },
  "prohibit": {
    "pos": "v.",
    "en_def": "to officially forbid something",
    "cn_def": "禁止"
  },
  "permit": {
    "pos": "v.",
    "en_def": "to allow something officially",
    "cn_def": "允許;准許"
  },
  "comply": {
    "pos": "v.",
    "en_def": "to obey a rule or request",
    "cn_def": "遵守;服從"
  },
  "enforce": {
    "pos": "v.",
    "en_def": "to make sure that people obey a rule or law",
    "cn_def": "執行;強制實施"
  },
  "impose": {
    "pos": "v.",
    "en_def": "to force people to accept a rule or cost",
    "cn_def": "強制實施;施加"
  },
  "authority": {
    "pos": "n.",
    "en_def": "the power to make decisions, or an official group with this power",
    "cn_def": "當局;權力"
  },
  "institution": {
    "pos": "n.",
    "en_def": "a large important organisation, like a university or bank",
    "cn_def": "機構"
  },
  "sustainable": {
    "pos": "adj.",
    "en_def": "able to continue without harming the environment",
    "cn_def": "永續的;可持續的"
  },
  "participate": {
    "pos": "v.",
    "en_def": "to take part in an activity",
    "cn_def": "參與;參加"
  },
  "collaborate": {
    "pos": "v.",
    "en_def": "to work together with others",
    "cn_def": "合作"
  },
  "cooperation": {
    "pos": "n.",
    "en_def": "working together to reach a shared goal",
    "cn_def": "合作;協力"
  },
  "negotiate": {
    "pos": "v.",
    "en_def": "to discuss something to reach an agreement",
    "cn_def": "協商;談判"
  },
  "empirical": {
    "pos": "adj.",
    "en_def": "based on real experiments or observation, not theory",
    "cn_def": "實證的;以經驗為依據的"
  },
  "responsible": {
    "pos": "adj.",
    "en_def": "careful and sensible in how you behave",
    "cn_def": "負責任的"
  },
  "widespread": {
    "pos": "adj.",
    "en_def": "happening in many places or among many people",
    "cn_def": "普遍的;廣泛的"
  },
  "accessible": {
    "pos": "adj.",
    "en_def": "easy to reach, use or understand",
    "cn_def": "易取得的;無障礙的"
  },
  "considerable": {
    "pos": "adj.",
    "en_def": "fairly large in size or amount",
    "cn_def": "相當大的"
  },
  "redundant": {
    "pos": "adj.",
    "en_def": "no longer needed for a job, so dismissed",
    "cn_def": "被裁員的;多餘的"
  },
  "dependent": {
    "pos": "adj.",
    "en_def": "needing someone or something to survive or work",
    "cn_def": "依賴的"
  },
  "controversial": {
    "pos": "adj.",
    "en_def": "causing a lot of disagreement",
    "cn_def": "有爭議的"
  },
  "innovative": {
    "pos": "adj.",
    "en_def": "using new ideas or methods",
    "cn_def": "創新的"
  },
  "programmer": {
    "pos": "n.",
    "en_def": "a person who writes computer programs",
    "cn_def": "程式設計師"
  },
  "subscription": {
    "pos": "n.",
    "en_def": "money you pay regularly to use a service",
    "cn_def": "訂閱"
  },
  "tutoring": {
    "pos": "n.",
    "en_def": "extra private teaching for one student or a small group",
    "cn_def": "課業輔導;家教"
  },
  "artificial": {
    "pos": "adj.",
    "en_def": "made by people, not natural",
    "cn_def": "人造的;人工的"
  },
  "objective": {
    "pos": "adj.",
    "en_def": "based on facts, not personal feelings",
    "cn_def": "客觀的"
  },
  "sceptical": {
    "pos": "adj.",
    "en_def": "doubting whether something is true or useful",
    "cn_def": "懷疑的"
  },
  "acknowledge": {
    "pos": "v.",
    "en_def": "to accept or admit that something is true",
    "cn_def": "承認"
  },
  "replace": {
    "pos": "v.",
    "en_def": "to take the place of someone or something",
    "cn_def": "取代"
  },
  "malfunction": {
    "pos": "v.",
    "en_def": "to fail to work in the correct way",
    "cn_def": "故障;運作失常"
  },
  "incorporate": {
    "pos": "v.",
    "en_def": "to include something as part of a larger thing",
    "cn_def": "納入;結合"
  },
  "upskill": {
    "pos": "v.",
    "en_def": "to learn new skills to do your job better",
    "cn_def": "提升技能"
  },
  "customise": {
    "pos": "v.",
    "en_def": "to change something to suit your own needs",
    "cn_def": "客製化;自訂"
  },
  "automate": {
    "pos": "v.",
    "en_def": "to make a machine or computer do a job without people",
    "cn_def": "使自動化"
  },
  "assume": {
    "pos": "v.",
    "en_def": "to think something is true without checking",
    "cn_def": "假定;認為"
  },
  "resolve": {
    "pos": "v.",
    "en_def": "to find a solution to a problem",
    "cn_def": "解決"
  },
  "ban": {
    "pos": "v.",
    "en_def": "to officially say something is not allowed",
    "cn_def": "禁止"
  },
  "confront": {
    "pos": "v.",
    "en_def": "to face and deal with a difficult problem",
    "cn_def": "面對;正視"
  },
  "forecast": {
    "pos": "v.",
    "en_def": "to say what will probably happen, often with weather or money",
    "cn_def": "預測;預報"
  },
  "affect": {
    "pos": "v.",
    "en_def": "to cause a change in someone or something",
    "cn_def": "影響"
  },
  "adjust": {
    "pos": "v.",
    "en_def": "to change something slightly to make it work better",
    "cn_def": "調整"
  },
  "simulate": {
    "pos": "v.",
    "en_def": "to copy how something happens in real life using a computer",
    "cn_def": "模擬"
  },
  "expand": {
    "pos": "v.",
    "en_def": "to become or make bigger",
    "cn_def": "擴大;擴展"
  },
  "anticipate": {
    "pos": "v.",
    "en_def": "to expect something and prepare for it",
    "cn_def": "預期;預料"
  },
  "alter": {
    "pos": "v.",
    "en_def": "to change something, usually slightly",
    "cn_def": "改變;修改"
  },
  "discriminate": {
    "pos": "v.",
    "en_def": "to treat a person or group unfairly",
    "cn_def": "歧視"
  },
  "maximise": {
    "pos": "v.",
    "en_def": "to make something as large as possible",
    "cn_def": "使最大化"
  },
  "function": {
    "pos": "n.",
    "en_def": "the job that something is designed to do",
    "cn_def": "功能"
  },
  "server": {
    "pos": "n.",
    "en_def": "a powerful computer that stores data and runs services for others",
    "cn_def": "伺服器"
  },
  "premise": {
    "pos": "n.",
    "en_def": "an idea that an argument or plan is based on",
    "cn_def": "前提"
  },
  "enable": {
    "pos": "v.",
    "en_def": "to make it possible for someone to do something",
    "cn_def": "使能夠"
  },
  "concede": {
    "pos": "v.",
    "en_def": "to admit, often unwillingly, that something is true",
    "cn_def": "(勉強)承認;讓步"
  },
  "mimic": {
    "pos": "v.",
    "en_def": "to copy the way someone talks or behaves",
    "cn_def": "模仿"
  },
  "establish": {
    "pos": "v.",
    "en_def": "to start or create something that will last",
    "cn_def": "建立;設立"
  },
  "retrain": {
    "pos": "v.",
    "en_def": "to learn or teach new skills for a different job",
    "cn_def": "再培訓;重新訓練"
  },
  "undermine": {
    "pos": "v.",
    "en_def": "to slowly make something weaker",
    "cn_def": "逐漸削弱;破壞"
  },
  "analyse": {
    "pos": "v.",
    "en_def": "to study something carefully to understand it",
    "cn_def": "分析"
  },
  "overcome": {
    "pos": "v.",
    "en_def": "to succeed in dealing with a problem",
    "cn_def": "克服"
  },
  "edit": {
    "pos": "v.",
    "en_def": "to correct and improve a piece of writing or a video",
    "cn_def": "編輯;修改"
  },
  "manipulate": {
    "pos": "v.",
    "en_def": "to control people or facts in a dishonest way",
    "cn_def": "操弄;操縱"
  },
  "discrimination": {
    "pos": "n.",
    "en_def": "unfair treatment of people because of who they are",
    "cn_def": "歧視"
  },
  "breach": {
    "pos": "n.",
    "en_def": "an event where private information is stolen or shown",
    "cn_def": "外洩;違反"
  },
  "theory": {
    "pos": "n.",
    "en_def": "an idea that tries to explain something",
    "cn_def": "理論"
  },
  "impact": {
    "pos": "n.",
    "en_def": "a strong effect on something",
    "cn_def": "影響;衝擊"
  },
  "profit": {
    "pos": "n.",
    "en_def": "money a business makes after paying its costs",
    "cn_def": "利潤;獲利"
  },
  "survey": {
    "pos": "n.",
    "en_def": "a set of questions asked to many people to learn their opinions",
    "cn_def": "調查;問卷"
  },
  "random": {
    "pos": "adj.",
    "en_def": "happening without any plan or pattern",
    "cn_def": "隨機的"
  },
  "remote": {
    "pos": "adj.",
    "en_def": "done from a distance, not in the same place",
    "cn_def": "遠距的;遠端的"
  },
  "generative": {
    "pos": "adj.",
    "en_def": "able to create new text, pictures or sound",
    "cn_def": "生成式的"
  },
  "outsource": {
    "pos": "v.",
    "en_def": "to pay another company to do some of your work",
    "cn_def": "外包"
  },
  "paraphrase": {
    "pos": "v.",
    "en_def": "to say something again using different words",
    "cn_def": "改寫;換句話說"
  },
  "predict": {
    "pos": "v.",
    "en_def": "to say what will happen in the future",
    "cn_def": "預測"
  },
  "enrol": {
    "pos": "v.",
    "en_def": "to officially join a course or school",
    "cn_def": "註冊;報名"
  },
  "digitise": {
    "pos": "v.",
    "en_def": "to change paper documents or pictures into computer files",
    "cn_def": "數位化"
  },
  "track": {
    "pos": "v.",
    "en_def": "to follow where someone goes or what they do",
    "cn_def": "追蹤"
  },
  "divide": {
    "pos": "n.",
    "en_def": "a large difference between two groups",
    "cn_def": "差距;鴻溝"
  },
  "constraint": {
    "pos": "n.",
    "en_def": "something that limits what you can do",
    "cn_def": "限制;約束"
  },
  "bandwidth": {
    "pos": "n.",
    "en_def": "the amount of data an internet connection can carry",
    "cn_def": "頻寬"
  },
  "hack": {
    "pos": "v.",
    "en_def": "to secretly get into someone's computer or account",
    "cn_def": "入侵(電腦);駭入"
  },
  "facilitate": {
    "pos": "v.",
    "en_def": "to make an action or process easier",
    "cn_def": "促進;使便利"
  },
  "ensure": {
    "pos": "v.",
    "en_def": "to make certain that something happens",
    "cn_def": "確保"
  }
};

const EXTRA_GLOSSES = {};
