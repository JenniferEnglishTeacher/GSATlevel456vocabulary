// Topic 16 Subunit 10 Quiz Data: Academic Words 學術單字 3 (sample size – proxy)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T16 S10 - Academic Words 學術單字 3 (sample size – proxy)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "sample size",
    "pos": "n.phr.",
    "cn_def": "樣本數",
    "en_def": "the number of people or things studied",
    "sentence": "The {{BLANK}} was only twelve athletes, so the results are interesting but we should not trust them completely.",
    "cn": "樣本數只有十二位運動員，所以這些結果很有趣，但我們不應完全相信。"
  },
  {
    "word": "control group",
    "pos": "n.phr.",
    "cn_def": "對照組",
    "en_def": "a group that does not receive the treatment being tested",
    "sentence": "One group drank the new sports drink while the {{BLANK}} drank plain water, and both groups ran the same distance.",
    "cn": "一組喝新的運動飲料，而對照組喝白開水，兩組都跑了相同的距離。"
  },
  {
    "word": "margin of error",
    "pos": "n.phr.",
    "cn_def": "誤差範圍",
    "en_def": "the amount by which a result may be wrong",
    "sentence": "The timing system has a tiny {{BLANK}}, but in sprinting even one hundredth of a second matters.",
    "cn": "計時系統有極小的誤差範圍，但在短跑中即使百分之一秒也很重要。"
  },
  {
    "word": "case study",
    "pos": "n.phr.",
    "cn_def": "個案研究",
    "en_def": "a detailed study of one person or situation",
    "sentence": "The textbook includes a {{BLANK}} of one injured swimmer, and it follows her recovery over eighteen months.",
    "cn": "這本教科書包含一位受傷泳者的個案研究，並追蹤她十八個月的康復過程。"
  },
  {
    "word": "raw data",
    "pos": "n.phr.",
    "cn_def": "原始資料",
    "en_def": "information collected before it has been organised",
    "sentence": "The team published its {{BLANK}} online, so other scientists could check the calculations themselves.",
    "cn": "團隊把原始資料公布在網路上，讓其他科學家能自己核對計算。"
  },
  {
    "word": "body of evidence",
    "pos": "n.phr.",
    "cn_def": "眾多證據",
    "en_def": "all the information that supports an idea",
    "sentence": "A large {{BLANK}} now supports daily exercise, and doctors recommend it for almost every age group.",
    "cn": "現在有大量的證據支持每日運動，而醫生幾乎為每個年齡層推薦它。"
  },
  {
    "word": "frame of reference",
    "pos": "n.phr.",
    "cn_def": "參考框架",
    "en_def": "the set of ideas you use to judge something",
    "sentence": "Young players have a narrow {{BLANK}}, so they often think their own club's method is the only one.",
    "cn": "年輕球員的參考框架較狹窄，所以他們常以為自己俱樂部的方法是唯一的。"
  },
  {
    "word": "line of reasoning",
    "pos": "n.phr.",
    "cn_def": "推理思路",
    "en_def": "the series of steps in an argument",
    "sentence": "Her {{BLANK}} was easy to follow, and by the end even the doubters agreed with her conclusion.",
    "cn": "她的推理思路很容易理解，而到最後連懷疑的人也同意她的結論。"
  },
  {
    "word": "working hypothesis",
    "pos": "n.phr.",
    "cn_def": "工作假設",
    "en_def": "an idea used as a starting point for research",
    "sentence": "Their {{BLANK}} was that cold baths speed up recovery, but the first results did not support it.",
    "cn": "他們的工作假設是冰浴能加速恢復，但最初的結果並不支持它。"
  },
  {
    "word": "placebo effect",
    "pos": "n.phr.",
    "cn_def": "安慰劑效應",
    "en_def": "an improvement caused by belief rather than real treatment",
    "sentence": "Some of the benefit may be the {{BLANK}}, because athletes feel stronger simply when they expect to.",
    "cn": "部分效果可能是安慰劑效應，因為運動員只要預期會變強就會感覺更強。"
  },
  {
    "word": "antipathy",
    "pos": "n.",
    "cn_def": "反感；厭惡",
    "en_def": "a strong feeling of dislike",
    "sentence": "His {{BLANK}} towards running came from school, where PE lessons had been a punishment rather than a pleasure.",
    "cn": "他對跑步的反感源自學校，當時體育課是一種處罰而不是樂趣。"
  },
  {
    "word": "remit",
    "pos": "n.",
    "cn_def": "職責範圍",
    "en_def": "the area of work a person or group is responsible for",
    "sentence": "Injury prevention is outside the referee's {{BLANK}}, but she still warned the players about the slippery surface.",
    "cn": "預防受傷不在裁判的職責範圍內，但她還是提醒球員注意濕滑的場地。"
  },
  {
    "word": "legislature",
    "pos": "n.",
    "cn_def": "立法機關",
    "en_def": "the group of people who make a country's laws",
    "sentence": "The {{BLANK}} voted to fund school sport, and new gyms opened in dozens of rural towns.",
    "cn": "立法機關投票通過資助校園運動，而數十個偏鄉小鎮開設了新的體育館。"
  },
  {
    "word": "upside",
    "pos": "n.",
    "cn_def": "好的一面；優點",
    "en_def": "the positive side of a situation",
    "sentence": "The {{BLANK}} of her long injury was extra study time, so she finished the year with excellent grades.",
    "cn": "她長期受傷好的一面是多出了讀書時間，所以她那一年成績優異。"
  },
  {
    "word": "touchstone",
    "pos": "n.",
    "cn_def": "判斷標準；試金石",
    "en_def": "a standard used for judging other things",
    "sentence": "That final has become a {{BLANK}} for great matches, and commentators still compare new games with it.",
    "cn": "那場決賽已成為精彩比賽的試金石，而評論員至今仍把新比賽與它相比。"
  },
  {
    "word": "knock-on effect",
    "pos": "n.phr.",
    "cn_def": "連帶影響",
    "en_def": "an indirect result that follows something else",
    "sentence": "Closing the pool had a {{BLANK}}, because the swimming club lost half of its younger members.",
    "cn": "關閉游泳池造成了連帶影響，因為游泳社團失去了一半的年輕成員。"
  },
  {
    "word": "ripple effect",
    "pos": "n.phr.",
    "cn_def": "漣漪效應",
    "en_def": "a spreading series of results from one event",
    "sentence": "One local champion created a {{BLANK}}, and the number of children joining the club tripled.",
    "cn": "一位當地冠軍帶來了漣漪效應，而加入社團的孩子人數增加了三倍。"
  },
  {
    "word": "false positive",
    "pos": "n.phr.",
    "cn_def": "偽陽性",
    "en_def": "a test result that wrongly shows something is there",
    "sentence": "The first test was a {{BLANK}}, so his name was cleared after a second sample was examined.",
    "cn": "第一次檢測是偽陽性，所以在第二份樣本檢驗後他的名聲得以恢復。"
  },
  {
    "word": "trend line",
    "pos": "n.phr.",
    "cn_def": "趨勢線",
    "en_def": "a line on a graph showing the general direction of change",
    "sentence": "The {{BLANK}} on the chart rises slowly, so her fitness is improving even though single tests go up and down.",
    "cn": "圖表上的趨勢線緩慢上升，所以她的體能正在進步，儘管單次測驗時高時低。"
  },
  {
    "word": "average",
    "pos": "n.",
    "cn_def": "平均值",
    "en_def": "the usual amount, found by adding and dividing",
    "sentence": "Her {{BLANK}} over ten races was strong, but her best single run was more than a second faster.",
    "cn": "她十場比賽的平均成績很好，但她單場最佳的一次快了一秒多。"
  },
  {
    "word": "time frame",
    "pos": "n.phr.",
    "cn_def": "時程；時間範圍",
    "en_def": "the period during which something happens",
    "sentence": "The doctor gave a {{BLANK}} of eight weeks, and he reminded her that bones heal at different speeds.",
    "cn": "醫生給出八週的時程，並提醒她骨頭癒合的速度各有不同。"
  },
  {
    "word": "data point",
    "pos": "n.phr.",
    "cn_def": "資料點",
    "en_def": "one single piece of information in a set",
    "sentence": "A single {{BLANK}} proves nothing, so the scientists collected measurements every week for two years.",
    "cn": "單一資料點無法證明任何事，所以科學家連續兩年每週收集數據。"
  },
  {
    "word": "contributing factor",
    "pos": "n.phr.",
    "cn_def": "促成因素",
    "en_def": "one of several causes of a result",
    "sentence": "Poor sleep was only one {{BLANK}}, because the players had also travelled for nine hours that day.",
    "cn": "睡眠不足只是其中一個促成因素，因為球員們那天還旅行了九個小時。"
  },
  {
    "word": "causal link",
    "pos": "n.phr.",
    "cn_def": "因果關聯",
    "en_def": "a connection in which one thing makes another happen",
    "sentence": "Scientists have not proved a {{BLANK}} between the supplement and faster recovery, so they urge athletes to be careful.",
    "cn": "科學家尚未證明這種補充品與恢復更快之間有因果關聯，所以他們呼籲運動員謹慎。"
  },
  {
    "word": "proxy",
    "pos": "n.",
    "cn_def": "替代指標",
    "en_def": "something used to represent or measure another thing",
    "sentence": "Resting heart rate is often used as a {{BLANK}} for fitness, although it is affected by stress and sleep too.",
    "cn": "靜止心率常被用作體能的替代指標，雖然它也受到壓力和睡眠影響。"
  }
];

const MCQS = [
  {
    "q": "The _____ was only twelve athletes, so the results are interesting but we should not trust them completely.",
    "options": [
      "sports science",
      "high-speed camera",
      "heart rate",
      "sample size"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "One group drank the new sports drink while the _____ drank plain water, and both groups ran the same distance.",
    "options": [
      "control group",
      "lactic acid",
      "fitness tracker",
      "high-speed camera"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The timing system has a tiny _____, but in sprinting even one hundredth of a second matters.",
    "options": [
      "heart-rate monitor",
      "home advantage",
      "margin of error",
      "prize money"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The textbook includes a _____ of one injured swimmer, and it follows her recovery over eighteen months.",
    "options": [
      "talent identification",
      "case study",
      "rib cage",
      "lactic acid"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The team published its _____ online, so other scientists could check the calculations themselves.",
    "options": [
      "personal trainer",
      "team doctor",
      "pilot study",
      "raw data"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "A large _____ now supports daily exercise, and doctors recommend it for almost every age group.",
    "options": [
      "artificial turf",
      "world record",
      "body of evidence",
      "physical education"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Young players have a narrow _____, so they often think their own club's method is the only one.",
    "options": [
      "frame of reference",
      "compression garment",
      "best practice",
      "knockout stage"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Her _____ was easy to follow, and by the end even the doubters agreed with her conclusion.",
    "options": [
      "compression garment",
      "line of reasoning",
      "gender gap",
      "sports medicine"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Their _____ was that cold baths speed up recovery, but the first results did not support it.",
    "options": [
      "working hypothesis",
      "lactic acid",
      "physical education",
      "youth academy"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Some of the benefit may be the _____, because athletes feel stronger simply when they expect to.",
    "options": [
      "bone density",
      "placebo effect",
      "heart rate",
      "overuse injury"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "His _____ towards running came from school, where PE lessons had been a punishment rather than a pleasure.",
    "options": [
      "squad",
      "predictor",
      "cool-down",
      "antipathy"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Injury prevention is outside the referee's _____, but she still warned the players about the slippery surface.",
    "options": [
      "simplification",
      "rejection",
      "remit",
      "rookie"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The _____ voted to fund school sport, and new gyms opened in dozens of rural towns.",
    "options": [
      "lane",
      "legislature",
      "underdog",
      "spike"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The _____ of her long injury was extra study time, so she finished the year with excellent grades.",
    "options": [
      "veteran",
      "differentiation",
      "upside",
      "overtraining"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "That final has become a _____ for great matches, and commentators still compare new games with it.",
    "options": [
      "touchstone",
      "physiotherapist",
      "cardio",
      "predominance"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Closing the pool had a _____, because the swimming club lost half of its younger members.",
    "options": [
      "bone density",
      "wind tunnel",
      "compression garment",
      "knock-on effect"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "One local champion created a _____, and the number of children joining the club tripled.",
    "options": [
      "key finding",
      "stride length",
      "ripple effect",
      "shin splints"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The first test was a _____, so his name was cleared after a second sample was examined.",
    "options": [
      "knockout stage",
      "best practice",
      "extra time",
      "false positive"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The _____ on the chart rises slowly, so her fitness is improving even though single tests go up and down.",
    "options": [
      "trend line",
      "fitness tracker",
      "talent identification",
      "lactic acid"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Her _____ over ten races was strong, but her best single run was more than a second faster.",
    "options": [
      "steroid",
      "average",
      "subtlety",
      "qualifier"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The doctor gave a _____ of eight weeks, and he reminded her that bones heal at different speeds.",
    "options": [
      "energy bar",
      "knockout stage",
      "home crowd",
      "time frame"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "A single _____ proves nothing, so the scientists collected measurements every week for two years.",
    "options": [
      "lactic acid",
      "data point",
      "body fat",
      "penalty shoot-out"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Poor sleep was only one _____, because the players had also travelled for nine hours that day.",
    "options": [
      "resistance band",
      "power nap",
      "contributing factor",
      "whey protein"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Scientists have not proved a _____ between the supplement and faster recovery, so they urge athletes to be careful.",
    "options": [
      "causal link",
      "knee brace",
      "protein shake",
      "pilot study"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Resting heart rate is often used as a _____ for fitness, although it is affected by stress and sleep too.",
    "options": [
      "differentiation",
      "veteran",
      "proxy",
      "gamesmanship"
    ],
    "answer": 2,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "sample size": {
    "pos": "n.phr.",
    "en_def": "the number of people or things studied",
    "cn_def": "樣本數"
  },
  "control group": {
    "pos": "n.phr.",
    "en_def": "a group that does not receive the treatment being tested",
    "cn_def": "對照組"
  },
  "margin of error": {
    "pos": "n.phr.",
    "en_def": "the amount by which a result may be wrong",
    "cn_def": "誤差範圍"
  },
  "case study": {
    "pos": "n.phr.",
    "en_def": "a detailed study of one person or situation",
    "cn_def": "個案研究"
  },
  "raw data": {
    "pos": "n.phr.",
    "en_def": "information collected before it has been organised",
    "cn_def": "原始資料"
  },
  "body of evidence": {
    "pos": "n.phr.",
    "en_def": "all the information that supports an idea",
    "cn_def": "眾多證據"
  },
  "frame of reference": {
    "pos": "n.phr.",
    "en_def": "the set of ideas you use to judge something",
    "cn_def": "參考框架"
  },
  "line of reasoning": {
    "pos": "n.phr.",
    "en_def": "the series of steps in an argument",
    "cn_def": "推理思路"
  },
  "working hypothesis": {
    "pos": "n.phr.",
    "en_def": "an idea used as a starting point for research",
    "cn_def": "工作假設"
  },
  "placebo effect": {
    "pos": "n.phr.",
    "en_def": "an improvement caused by belief rather than real treatment",
    "cn_def": "安慰劑效應"
  },
  "antipathy": {
    "pos": "n.",
    "en_def": "a strong feeling of dislike",
    "cn_def": "反感；厭惡"
  },
  "remit": {
    "pos": "n.",
    "en_def": "the area of work a person or group is responsible for",
    "cn_def": "職責範圍"
  },
  "legislature": {
    "pos": "n.",
    "en_def": "the group of people who make a country's laws",
    "cn_def": "立法機關"
  },
  "upside": {
    "pos": "n.",
    "en_def": "the positive side of a situation",
    "cn_def": "好的一面；優點"
  },
  "touchstone": {
    "pos": "n.",
    "en_def": "a standard used for judging other things",
    "cn_def": "判斷標準；試金石"
  },
  "knock-on effect": {
    "pos": "n.phr.",
    "en_def": "an indirect result that follows something else",
    "cn_def": "連帶影響"
  },
  "ripple effect": {
    "pos": "n.phr.",
    "en_def": "a spreading series of results from one event",
    "cn_def": "漣漪效應"
  },
  "false positive": {
    "pos": "n.phr.",
    "en_def": "a test result that wrongly shows something is there",
    "cn_def": "偽陽性"
  },
  "trend line": {
    "pos": "n.phr.",
    "en_def": "a line on a graph showing the general direction of change",
    "cn_def": "趨勢線"
  },
  "average": {
    "pos": "n.",
    "en_def": "the usual amount, found by adding and dividing",
    "cn_def": "平均值"
  },
  "time frame": {
    "pos": "n.phr.",
    "en_def": "the period during which something happens",
    "cn_def": "時程；時間範圍"
  },
  "data point": {
    "pos": "n.phr.",
    "en_def": "one single piece of information in a set",
    "cn_def": "資料點"
  },
  "contributing factor": {
    "pos": "n.phr.",
    "en_def": "one of several causes of a result",
    "cn_def": "促成因素"
  },
  "causal link": {
    "pos": "n.phr.",
    "en_def": "a connection in which one thing makes another happen",
    "cn_def": "因果關聯"
  },
  "proxy": {
    "pos": "n.",
    "en_def": "something used to represent or measure another thing",
    "cn_def": "替代指標"
  },
  "sports science": {
    "pos": "n.phr.",
    "en_def": "the study of the body and mind in sport",
    "cn_def": "運動科學"
  },
  "high-speed camera": {
    "pos": "n.phr.",
    "en_def": "a camera that records very fast movement in detail",
    "cn_def": "高速攝影機"
  },
  "heart rate": {
    "pos": "n.phr.",
    "en_def": "how many times your heart beats in one minute",
    "cn_def": "心率；心跳速率"
  },
  "lactic acid": {
    "pos": "n.phr.",
    "en_def": "a substance made in muscles during very hard exercise",
    "cn_def": "乳酸"
  },
  "fitness tracker": {
    "pos": "n.phr.",
    "en_def": "a wristband that records steps, sleep and heart rate",
    "cn_def": "健身追蹤器；運動手環"
  },
  "heart-rate monitor": {
    "pos": "n.phr.",
    "en_def": "a device that measures how fast your heart beats",
    "cn_def": "心率監測器"
  },
  "home advantage": {
    "pos": "n.phr.",
    "en_def": "the benefit of playing in your own stadium",
    "cn_def": "主場優勢"
  },
  "prize money": {
    "pos": "n.phr.",
    "en_def": "money given to the winners of a competition",
    "cn_def": "獎金"
  },
  "talent identification": {
    "pos": "n.phr.",
    "en_def": "the process of finding young people with ability",
    "cn_def": "選才；人才發掘"
  },
  "rib cage": {
    "pos": "n.phr.",
    "en_def": "the bones that curve around your chest",
    "cn_def": "胸腔；肋骨"
  },
  "personal trainer": {
    "pos": "n.phr.",
    "en_def": "a professional who plans exercise for one client",
    "cn_def": "私人教練"
  },
  "team doctor": {
    "pos": "n.phr.",
    "en_def": "the doctor who looks after a sports team",
    "cn_def": "隊醫"
  },
  "pilot study": {
    "pos": "n.phr.",
    "en_def": "a small study done before a larger one",
    "cn_def": "先導研究"
  },
  "artificial turf": {
    "pos": "n.phr.",
    "en_def": "a surface of plastic grass used for sports",
    "cn_def": "人工草皮"
  },
  "world record": {
    "pos": "n.phr.",
    "en_def": "the best result ever achieved in the world",
    "cn_def": "世界紀錄"
  },
  "physical education": {
    "pos": "n.phr.",
    "en_def": "the school subject in which students exercise and play sport",
    "cn_def": "體育（課）"
  },
  "compression garment": {
    "pos": "n.phr.",
    "en_def": "tight clothing that presses on muscles to help blood flow",
    "cn_def": "壓縮衣"
  },
  "best practice": {
    "pos": "n.phr.",
    "en_def": "the methods accepted as the most effective",
    "cn_def": "最佳做法"
  },
  "knockout stage": {
    "pos": "n.phr.",
    "en_def": "the part of a competition where the loser goes out",
    "cn_def": "淘汰賽階段"
  },
  "gender gap": {
    "pos": "n.phr.",
    "en_def": "an unfair difference between men and women",
    "cn_def": "性別差距"
  },
  "sports medicine": {
    "pos": "n.phr.",
    "en_def": "the area of medicine dealing with exercise and injuries",
    "cn_def": "運動醫學"
  },
  "youth academy": {
    "pos": "n.phr.",
    "en_def": "a school run by a club to train young players",
    "cn_def": "青訓學院"
  },
  "bone density": {
    "pos": "n.phr.",
    "en_def": "how strong and thick your bones are",
    "cn_def": "骨質密度"
  },
  "overuse injury": {
    "pos": "n.phr.",
    "en_def": "damage caused by repeating the same movement too often",
    "cn_def": "過度使用傷害"
  },
  "squad": {
    "pos": "n.",
    "en_def": "the whole group of players a team can choose from",
    "cn_def": "球隊名單；隊伍"
  },
  "predictor": {
    "pos": "n.",
    "en_def": "something that shows what is likely to happen",
    "cn_def": "預測指標"
  },
  "cool-down": {
    "pos": "n.",
    "en_def": "easy exercise you do after hard exercise to relax the body",
    "cn_def": "緩和運動；收操"
  },
  "simplification": {
    "pos": "n.",
    "en_def": "the act of making something easier to understand",
    "cn_def": "簡化"
  },
  "rejection": {
    "pos": "n.",
    "en_def": "the act of refusing to accept something",
    "cn_def": "拒絕"
  },
  "rookie": {
    "pos": "n.",
    "en_def": "a player in their first season",
    "cn_def": "新人；菜鳥"
  },
  "lane": {
    "pos": "n.",
    "en_def": "one of the marked paths on a track or in a pool",
    "cn_def": "跑道；水道"
  },
  "underdog": {
    "pos": "n.",
    "en_def": "a player or team not expected to win",
    "cn_def": "弱隊；不被看好的一方"
  },
  "spike": {
    "pos": "n.",
    "en_def": "a sharp point on the bottom of a sports shoe",
    "cn_def": "釘鞋釘"
  },
  "veteran": {
    "pos": "n.",
    "en_def": "an experienced older player",
    "cn_def": "老將"
  },
  "differentiation": {
    "pos": "n.",
    "en_def": "the process of showing or finding differences",
    "cn_def": "區別；差異化"
  },
  "overtraining": {
    "pos": "n.",
    "en_def": "training too much without enough rest, which harms performance",
    "cn_def": "過度訓練"
  },
  "physiotherapist": {
    "pos": "n.",
    "en_def": "a person trained to treat injuries with exercise and massage",
    "cn_def": "物理治療師"
  },
  "cardio": {
    "pos": "n.",
    "en_def": "exercise that makes your heart and lungs work harder",
    "cn_def": "有氧運動"
  },
  "predominance": {
    "pos": "n.",
    "en_def": "the state of being the largest or strongest part",
    "cn_def": "佔多數；主導地位"
  },
  "wind tunnel": {
    "pos": "n.phr.",
    "en_def": "a room where air is blown over a person to test their shape",
    "cn_def": "風洞"
  },
  "key finding": {
    "pos": "n.phr.",
    "en_def": "the most important result of a study",
    "cn_def": "主要發現"
  },
  "stride length": {
    "pos": "n.phr.",
    "en_def": "the distance covered in one step while running",
    "cn_def": "步幅"
  },
  "shin splints": {
    "pos": "n.phr.",
    "en_def": "pain along the front of the lower leg from running",
    "cn_def": "脛前疼痛"
  },
  "extra time": {
    "pos": "n.phr.",
    "en_def": "additional playing time when the scores are equal",
    "cn_def": "延長賽"
  },
  "steroid": {
    "pos": "n.",
    "en_def": "a drug that builds muscle quickly but harms health",
    "cn_def": "類固醇"
  },
  "subtlety": {
    "pos": "n.",
    "en_def": "a small detail that is not easy to notice",
    "cn_def": "細微之處"
  },
  "qualifier": {
    "pos": "n.",
    "en_def": "a match or race used to decide who enters a competition",
    "cn_def": "資格賽"
  },
  "energy bar": {
    "pos": "n.phr.",
    "en_def": "a small snack bar that gives quick energy",
    "cn_def": "能量棒"
  },
  "home crowd": {
    "pos": "n.phr.",
    "en_def": "the supporters watching in their own stadium",
    "cn_def": "主場觀眾"
  },
  "body fat": {
    "pos": "n.phr.",
    "en_def": "the amount of fat in the body",
    "cn_def": "體脂肪"
  },
  "penalty shoot-out": {
    "pos": "n.phr.",
    "en_def": "a way of deciding a drawn match by single kicks at goal",
    "cn_def": "十二碼大戰"
  },
  "resistance band": {
    "pos": "n.phr.",
    "en_def": "a stretchy elastic band used for exercise",
    "cn_def": "彈力帶"
  },
  "power nap": {
    "pos": "n.phr.",
    "en_def": "a short sleep of about 20 minutes to get energy back",
    "cn_def": "能量小睡"
  },
  "whey protein": {
    "pos": "n.phr.",
    "en_def": "a milk protein powder used to help muscles recover",
    "cn_def": "乳清蛋白"
  },
  "knee brace": {
    "pos": "n.phr.",
    "en_def": "a support worn around the knee",
    "cn_def": "護膝支架"
  },
  "protein shake": {
    "pos": "n.phr.",
    "en_def": "a drink with a lot of protein, often taken after exercise",
    "cn_def": "蛋白飲；高蛋白奶昔"
  },
  "gamesmanship": {
    "pos": "n.",
    "en_def": "the use of unfair tricks that are not quite against the rules",
    "cn_def": "耍小手段"
  }
};

const EXTRA_GLOSSES = {};
