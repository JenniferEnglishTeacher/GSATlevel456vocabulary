// Topic 1 Subunit 16 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T01 S16 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "artificial intelligence",
    "pos": "n.phr.",
    "cn_def": "人工智慧",
    "en_def": "computer systems that can think and learn like people",
    "sentence": "{{BLANK}} is changing the way we study, because students can now get instant explanations for difficult problems at any time.",
    "cn": "人工智慧正在改變我們學習的方式,因為學生現在隨時都能針對困難的問題得到即時的解說。"
  },
  {
    "word": "machine learning",
    "pos": "n.phr.",
    "cn_def": "機器學習",
    "en_def": "a way for computers to learn from data without step-by-step instructions",
    "sentence": "The music app uses {{BLANK}} to study the songs you skip, so its suggestions get better every week.",
    "cn": "這個音樂應用程式使用機器學習來研究你跳過的歌曲,所以它的推薦每週都變得更好。"
  },
  {
    "word": "big data",
    "pos": "n.phr.",
    "cn_def": "大數據",
    "en_def": "extremely large amounts of information studied by computers",
    "sentence": "Supermarkets use {{BLANK}} to see what customers buy together, and then they place those products side by side.",
    "cn": "超市使用大數據來了解顧客會一起購買哪些商品,然後把那些商品並排擺放。"
  },
  {
    "word": "digital divide",
    "pos": "n.phr.",
    "cn_def": "數位落差",
    "en_def": "the gap between people who have technology and those who do not",
    "sentence": "The {{BLANK}} became clear during online classes, because some children had no computer while others had two.",
    "cn": "線上課程期間數位落差變得很明顯,因為有些孩子沒有電腦,而其他人卻有兩台。"
  },
  {
    "word": "digital footprint",
    "pos": "n.phr.",
    "cn_def": "數位足跡",
    "en_def": "the record of everything you do online",
    "sentence": "Everything you post leaves a {{BLANK}}, so think carefully before sharing photos that might embarrass you later.",
    "cn": "你貼出的每樣東西都會留下數位足跡,所以在分享日後可能讓你難堪的照片前要仔細想想。"
  },
  {
    "word": "at the cutting edge",
    "pos": "adj.phr.",
    "cn_def": "處於最尖端",
    "en_def": "using the newest and most advanced ideas",
    "sentence": "Taiwan's chip makers are {{BLANK}} of technology, so AI companies around the world depend on them.",
    "cn": "台灣的晶片製造商處於科技的最尖端,所以全世界的人工智慧公司都依賴它們。"
  },
  {
    "word": "job security",
    "pos": "n.phr.",
    "cn_def": "工作保障",
    "en_def": "the feeling that you will not lose your job",
    "sentence": "Many office workers worry about their {{BLANK}}, because AI can already write emails and reports in seconds.",
    "cn": "許多上班族擔心他們的工作保障,因為人工智慧已經能在幾秒內寫好電子郵件和報告。"
  },
  {
    "word": "academic integrity",
    "pos": "n.phr.",
    "cn_def": "學術誠信",
    "en_def": "being honest in schoolwork and not cheating",
    "sentence": "The university held a talk on {{BLANK}}, because more students were handing in essays written by chatbots.",
    "cn": "這所大學舉辦了一場關於學術誠信的講座,因為越來越多學生交出聊天機器人寫的作文。"
  },
  {
    "word": "a double-edged sword",
    "pos": "n.phr.",
    "cn_def": "雙面刃",
    "en_def": "something that has both good and bad effects",
    "sentence": "AI is {{BLANK}} for students, because it can explain hard ideas but also makes cheating very easy.",
    "cn": "人工智慧對學生來說是一把雙面刃,因為它能解釋困難的概念,但也讓作弊變得非常容易。"
  },
  {
    "word": "keep pace with",
    "pos": "v.phr.",
    "cn_def": "跟上",
    "en_def": "to change or move as fast as something else",
    "sentence": "Schools find it hard to {{BLANK}} new technology, so their rules are often out of date by the time they are published.",
    "cn": "學校發現很難跟上新科技,所以它們的規定在公布時往往已經過時了。"
  },
  {
    "word": "human error",
    "pos": "n.phr.",
    "cn_def": "人為疏失",
    "en_def": "a mistake made by a person, not a machine",
    "sentence": "Most car accidents are caused by {{BLANK}}, so supporters of driverless cars believe they will make roads safer.",
    "cn": "大多數車禍是由人為疏失造成的,所以無人駕駛車的支持者認為它們會讓道路更安全。"
  },
  {
    "word": "take over",
    "pos": "v.phr.",
    "cn_def": "接手;取代",
    "en_def": "to begin to do something that someone else did before",
    "sentence": "Robots have {{BLANK}} many dangerous factory jobs, but humans are still needed to repair and check them.",
    "cn": "機器人已經接手了許多危險的工廠工作,但仍需要人類來維修和檢查它們。"
  },
  {
    "word": "critical thinking",
    "pos": "n.phr.",
    "cn_def": "批判性思考",
    "en_def": "careful thinking to judge whether information is true or good",
    "sentence": "{{BLANK}} is more important than ever, because AI can produce answers that sound confident but are completely wrong.",
    "cn": "批判性思考比以往任何時候都更重要,因為人工智慧可能產生聽起來很有把握卻完全錯誤的答案。"
  },
  {
    "word": "the human touch",
    "pos": "n.phr.",
    "cn_def": "人情味;人性化的關懷",
    "en_def": "the kindness and understanding that only a person can give",
    "sentence": "The robot nurse is efficient, but patients say it lacks {{BLANK}}, so they still prefer a real nurse's smile.",
    "cn": "機器人護理師很有效率,但病人說它缺少人情味,所以他們仍偏好真人護理師的笑容。"
  },
  {
    "word": "raise concerns",
    "pos": "v.phr.",
    "cn_def": "引發擔憂",
    "en_def": "to make people worried about something",
    "sentence": "Facial scanning in schools has {{BLANK}} among parents, because nobody is sure how long the photos are kept.",
    "cn": "學校的臉部掃描已在家長之間引發擔憂,因為沒有人確定這些照片會保存多久。"
  },
  {
    "word": "pros and cons",
    "pos": "n.phr.",
    "cn_def": "優缺點;利弊",
    "en_def": "the advantages and disadvantages of something",
    "sentence": "Our class debated the {{BLANK}} of AI tutors, and most students agreed they are useful but cannot replace teachers.",
    "cn": "我們班辯論了人工智慧家教的利弊,大多數學生同意它們很有用,但無法取代老師。"
  },
  {
    "word": "in the long run",
    "pos": "phr.",
    "cn_def": "長遠來看",
    "en_def": "over a long period of time in the future",
    "sentence": "Learning to write well yourself takes effort, but {{BLANK}} it will help you much more than copying AI answers.",
    "cn": "自己學會寫好文章需要努力,但長遠來看,它對你的幫助會比抄人工智慧的答案大得多。"
  },
  {
    "word": "fall behind",
    "pos": "v.phr.",
    "cn_def": "落後",
    "en_def": "to fail to keep up with others",
    "sentence": "Workers who refuse to learn new digital skills may {{BLANK}}, so many companies offer free training courses.",
    "cn": "拒絕學習新數位技能的員工可能會落後,所以許多公司提供免費的培訓課程。"
  },
  {
    "word": "jump on the bandwagon",
    "pos": "v.phr.",
    "cn_def": "跟風;趕流行",
    "en_def": "to join something popular just because others are doing it",
    "sentence": "Many companies {{BLANK}} and added AI to their products, but some of these features are not useful at all.",
    "cn": "許多公司跟風,在產品中加入人工智慧,但其中有些功能根本沒有用。"
  },
  {
    "word": "game changer",
    "pos": "n.phr.",
    "cn_def": "改變局勢的事物;顛覆性創新",
    "en_def": "something that completely changes how things are done",
    "sentence": "Translation apps have been a {{BLANK}} for travellers, because they can now read signs and menus in any language.",
    "cn": "翻譯應用程式對旅客來說是顛覆性的創新,因為他們現在能讀懂任何語言的標誌和菜單。"
  }
];

const MCQS = [
  {
    "q": "_____ is changing the way we study, because students can now get instant explanations for difficult problems at any time.",
    "options": [
      "artificial intelligence",
      "digital footprint",
      "job security",
      "big data"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The music app uses _____ to study the songs you skip, so its suggestions get better every week.",
    "options": [
      "a double-edged sword",
      "digital footprint",
      "big data",
      "machine learning"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Supermarkets use _____ to see what customers buy together, and then they place those products side by side.",
    "options": [
      "digital divide",
      "big data",
      "a double-edged sword",
      "human error"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The _____ became clear during online classes, because some children had no computer while others had two.",
    "options": [
      "critical thinking",
      "human error",
      "digital divide",
      "game changer"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Everything you post leaves a _____, so think carefully before sharing photos that might embarrass you later.",
    "options": [
      "critical thinking",
      "big data",
      "artificial intelligence",
      "digital footprint"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Taiwan's chip makers are _____ of technology, so AI companies around the world depend on them.",
    "options": [
      "digital footprint",
      "keep pace with",
      "at the cutting edge",
      "critical thinking"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Many office workers worry about their _____, because AI can already write emails and reports in seconds.",
    "options": [
      "the human touch",
      "job security",
      "digital footprint",
      "game changer"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The university held a talk on _____, because more students were handing in essays written by chatbots.",
    "options": [
      "academic integrity",
      "big data",
      "machine learning",
      "pros and cons"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "AI is _____ for students, because it can explain hard ideas but also makes cheating very easy.",
    "options": [
      "digital footprint",
      "machine learning",
      "the human touch",
      "a double-edged sword"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Schools find it hard to _____ new technology, so their rules are often out of date by the time they are published.",
    "options": [
      "take over",
      "keep pace with",
      "raise concerns",
      "jump on the bandwagon"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Most car accidents are caused by _____, so supporters of driverless cars believe they will make roads safer.",
    "options": [
      "big data",
      "job security",
      "human error",
      "digital footprint"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Robots have _____ many dangerous factory jobs, but humans are still needed to repair and check them.",
    "options": [
      "take over",
      "fall behind",
      "raise concerns",
      "keep pace with"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "_____ is more important than ever, because AI can produce answers that sound confident but are completely wrong.",
    "options": [
      "machine learning",
      "digital footprint",
      "game changer",
      "critical thinking"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The robot nurse is efficient, but patients say it lacks _____, so they still prefer a real nurse's smile.",
    "options": [
      "the human touch",
      "digital divide",
      "pros and cons",
      "critical thinking"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Facial scanning in schools has _____ among parents, because nobody is sure how long the photos are kept.",
    "options": [
      "take over",
      "raise concerns",
      "jump on the bandwagon",
      "keep pace with"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Our class debated the _____ of AI tutors, and most students agreed they are useful but cannot replace teachers.",
    "options": [
      "machine learning",
      "digital footprint",
      "pros and cons",
      "big data"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Learning to write well yourself takes effort, but _____ it will help you much more than copying AI answers.",
    "options": [
      "academic integrity",
      "take over",
      "at the cutting edge",
      "in the long run"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Workers who refuse to learn new digital skills may _____, so many companies offer free training courses.",
    "options": [
      "take over",
      "fall behind",
      "keep pace with",
      "raise concerns"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Many companies _____ and added AI to their products, but some of these features are not useful at all.",
    "options": [
      "keep pace with",
      "raise concerns",
      "jump on the bandwagon",
      "fall behind"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Translation apps have been a _____ for travellers, because they can now read signs and menus in any language.",
    "options": [
      "game changer",
      "human error",
      "job security",
      "digital footprint"
    ],
    "answer": 0,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "artificial intelligence": {
    "pos": "n.phr.",
    "en_def": "computer systems that can think and learn like people",
    "cn_def": "人工智慧"
  },
  "machine learning": {
    "pos": "n.phr.",
    "en_def": "a way for computers to learn from data without step-by-step instructions",
    "cn_def": "機器學習"
  },
  "big data": {
    "pos": "n.phr.",
    "en_def": "extremely large amounts of information studied by computers",
    "cn_def": "大數據"
  },
  "digital divide": {
    "pos": "n.phr.",
    "en_def": "the gap between people who have technology and those who do not",
    "cn_def": "數位落差"
  },
  "digital footprint": {
    "pos": "n.phr.",
    "en_def": "the record of everything you do online",
    "cn_def": "數位足跡"
  },
  "at the cutting edge": {
    "pos": "adj.phr.",
    "en_def": "using the newest and most advanced ideas",
    "cn_def": "處於最尖端"
  },
  "job security": {
    "pos": "n.phr.",
    "en_def": "the feeling that you will not lose your job",
    "cn_def": "工作保障"
  },
  "academic integrity": {
    "pos": "n.phr.",
    "en_def": "being honest in schoolwork and not cheating",
    "cn_def": "學術誠信"
  },
  "a double-edged sword": {
    "pos": "n.phr.",
    "en_def": "something that has both good and bad effects",
    "cn_def": "雙面刃"
  },
  "keep pace with": {
    "pos": "v.phr.",
    "en_def": "to change or move as fast as something else",
    "cn_def": "跟上"
  },
  "human error": {
    "pos": "n.phr.",
    "en_def": "a mistake made by a person, not a machine",
    "cn_def": "人為疏失"
  },
  "take over": {
    "pos": "v.phr.",
    "en_def": "to begin to do something that someone else did before",
    "cn_def": "接手;取代"
  },
  "critical thinking": {
    "pos": "n.phr.",
    "en_def": "careful thinking to judge whether information is true or good",
    "cn_def": "批判性思考"
  },
  "the human touch": {
    "pos": "n.phr.",
    "en_def": "the kindness and understanding that only a person can give",
    "cn_def": "人情味;人性化的關懷"
  },
  "raise concerns": {
    "pos": "v.phr.",
    "en_def": "to make people worried about something",
    "cn_def": "引發擔憂"
  },
  "pros and cons": {
    "pos": "n.phr.",
    "en_def": "the advantages and disadvantages of something",
    "cn_def": "優缺點;利弊"
  },
  "in the long run": {
    "pos": "phr.",
    "en_def": "over a long period of time in the future",
    "cn_def": "長遠來看"
  },
  "fall behind": {
    "pos": "v.phr.",
    "en_def": "to fail to keep up with others",
    "cn_def": "落後"
  },
  "jump on the bandwagon": {
    "pos": "v.phr.",
    "en_def": "to join something popular just because others are doing it",
    "cn_def": "跟風;趕流行"
  },
  "game changer": {
    "pos": "n.phr.",
    "en_def": "something that completely changes how things are done",
    "cn_def": "改變局勢的事物;顛覆性創新"
  }
};

const EXTRA_GLOSSES = {};
