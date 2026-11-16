// Topic 16 Subunit 11 Quiz Data: Academic Words 學術單字 4 (predictor – equivocal)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T16 S11 - Academic Words 學術單字 4 (predictor – equivocal)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "predictor",
    "pos": "n.",
    "cn_def": "預測指標",
    "en_def": "something that shows what is likely to happen",
    "sentence": "Grip strength is a surprisingly good {{BLANK}} of general health, so doctors now measure it during check-ups.",
    "cn": "握力是整體健康令人意外的好預測指標，所以醫生現在在健康檢查時會測量它。"
  },
  {
    "word": "best practice",
    "pos": "n.phr.",
    "cn_def": "最佳做法",
    "en_def": "the methods accepted as the most effective",
    "sentence": "The federation published a guide to {{BLANK}}, and every club received a printed copy by post.",
    "cn": "聯盟出版了一本最佳做法指南，而每個俱樂部都收到一本郵寄的印刷版。"
  },
  {
    "word": "key finding",
    "pos": "n.phr.",
    "cn_def": "主要發現",
    "en_def": "the most important result of a study",
    "sentence": "The {{BLANK}} was simple: athletes who slept nine hours were injured far less often than those who slept six.",
    "cn": "主要發現很簡單：睡九小時的運動員受傷的次數遠少於睡六小時的人。"
  },
  {
    "word": "pilot study",
    "pos": "n.phr.",
    "cn_def": "先導研究",
    "en_def": "a small study done before a larger one",
    "sentence": "The {{BLANK}} involved just one school, but its promising results led to a national project.",
    "cn": "這項先導研究只涉及一所學校，但它可期的結果促成了一項全國計畫。"
  },
  {
    "word": "follow-up study",
    "pos": "n.phr.",
    "cn_def": "後續研究",
    "en_def": "a later study that checks earlier results",
    "sentence": "A {{BLANK}} five years later found that most of the young runners were still active.",
    "cn": "五年後的一項後續研究發現，大多數年輕跑者仍保持運動習慣。"
  },
  {
    "word": "advisable",
    "pos": "adj.",
    "cn_def": "明智的；可取的",
    "en_def": "sensible and worth doing",
    "sentence": "It is {{BLANK}} to see a doctor before starting hard training, especially if you have not exercised for years.",
    "cn": "開始激烈訓練前去看醫生是明智的，尤其如果你已經好幾年沒運動。"
  },
  {
    "word": "alleged",
    "pos": "adj.",
    "cn_def": "被指稱的",
    "en_def": "said to be true but not yet proved",
    "sentence": "The {{BLANK}} rule-breaking was reported in every newspaper, but the hearing cleared the player two months later.",
    "cn": "被指稱的違規行為登上了每家報紙，但兩個月後的聽證會還了那位球員清白。"
  },
  {
    "word": "attributable",
    "pos": "adj.",
    "cn_def": "可歸因於…的",
    "en_def": "able to be explained as being caused by something",
    "sentence": "Most of her improvement is {{BLANK}} to better sleep, although she also changed her diet last winter.",
    "cn": "她大部分的進步可歸因於更好的睡眠，雖然她去年冬天也改變了飲食。"
  },
  {
    "word": "collaborative",
    "pos": "adj.",
    "cn_def": "合作的",
    "en_def": "involving people working together",
    "sentence": "The project was highly {{BLANK}}, because doctors, coaches and teachers all met once a month.",
    "cn": "這個計畫高度合作，因為醫生、教練和老師每個月都會開一次會。"
  },
  {
    "word": "concurrent",
    "pos": "adj.",
    "cn_def": "同時發生的",
    "en_def": "happening at the same time",
    "sentence": "Two {{BLANK}} studies reached the same conclusion, so the findings were taken seriously straight away.",
    "cn": "兩項同時進行的研究得出相同結論，所以這些發現立刻受到重視。"
  },
  {
    "word": "consequential",
    "pos": "adj.",
    "cn_def": "影響重大的",
    "en_def": "important because it leads to serious results",
    "sentence": "The most {{BLANK}} decision of the season was made in June, when the club replaced its head coach.",
    "cn": "本季影響最重大的決定是在六月做出的，當時俱樂部換掉了總教練。"
  },
  {
    "word": "illustrative",
    "pos": "adj.",
    "cn_def": "具說明性的",
    "en_def": "useful as an example",
    "sentence": "Her career is {{BLANK}} of a wider change, because many athletes now study while they compete.",
    "cn": "她的職涯說明了一種更廣泛的變化，因為許多運動員現在一邊比賽一邊讀書。"
  },
  {
    "word": "marked",
    "pos": "adj.",
    "cn_def": "明顯的",
    "en_def": "clear and easy to notice",
    "sentence": "There was a {{BLANK}} difference after six weeks, and even the players themselves could feel the change.",
    "cn": "六週後出現明顯的差異，而連球員自己都能感覺到這個變化。"
  },
  {
    "word": "normative",
    "pos": "adj.",
    "cn_def": "規範性的",
    "en_def": "describing what is considered normal or correct",
    "sentence": "The chart gives {{BLANK}} values for teenagers, so you can compare your own result with the usual range.",
    "cn": "這張圖表提供青少年的規範性數值，所以你可以把自己的結果與一般範圍比較。"
  },
  {
    "word": "pending",
    "pos": "adj.",
    "cn_def": "待決的；未決的",
    "en_def": "waiting to be decided or dealt with",
    "sentence": "His appeal is still {{BLANK}}, so he may not play in any official match until the committee decides.",
    "cn": "他的申訴仍未決，所以在委員會做出決定前他可能無法參加任何正式比賽。"
  },
  {
    "word": "practicable",
    "pos": "adj.",
    "cn_def": "行得通的",
    "en_def": "able to be done successfully",
    "sentence": "Training twice a day is not {{BLANK}} for students, because they also need time for homework and sleep.",
    "cn": "一天訓練兩次對學生來說行不通，因為他們也需要時間做功課和睡覺。"
  },
  {
    "word": "predictive",
    "pos": "adj.",
    "cn_def": "有預測力的",
    "en_def": "able to show what will probably happen",
    "sentence": "The test has some {{BLANK}} value, but no single number can tell you who will become a champion.",
    "cn": "這項測驗有一定的預測價值，但沒有任何單一數字能告訴你誰會成為冠軍。"
  },
  {
    "word": "proportionate",
    "pos": "adj.",
    "cn_def": "相稱的；成比例的",
    "en_def": "matching something else in size or importance",
    "sentence": "The punishment should be {{BLANK}} to the offence, so a first small mistake rarely leads to a long ban.",
    "cn": "處罰應該與違規行為相稱，所以初次的小錯誤很少導致長期禁賽。"
  },
  {
    "word": "relative",
    "pos": "adj.",
    "cn_def": "相對的",
    "en_def": "considered in comparison with something else",
    "sentence": "Her {{BLANK}} strength is excellent, because she lifts twice her own body weight despite being quite small.",
    "cn": "她的相對力量非常出色，因為儘管她身材相當小，卻能舉起自身體重的兩倍。"
  },
  {
    "word": "requisite",
    "pos": "adj.",
    "cn_def": "必要的",
    "en_def": "needed for a particular purpose",
    "sentence": "He lacked the {{BLANK}} experience for the national squad, so the selectors asked him to wait another year.",
    "cn": "他缺乏進國家隊所必要的經驗，所以選拔委員請他再等一年。"
  },
  {
    "word": "respective",
    "pos": "adj.",
    "cn_def": "各自的",
    "en_def": "belonging separately to each person mentioned",
    "sentence": "The two runners returned to their {{BLANK}} clubs after the camp, and they met again at the final.",
    "cn": "訓練營結束後兩位跑者回到各自的俱樂部，而他們在決賽中再次相遇。"
  },
  {
    "word": "unilateral",
    "pos": "adj.",
    "cn_def": "單方面的",
    "en_def": "done by one side only",
    "sentence": "The club made a {{BLANK}} decision to cancel the tour, and the players only heard about it on the news.",
    "cn": "俱樂部單方面決定取消巡迴賽，而球員們只是從新聞上得知。"
  },
  {
    "word": "avoidable",
    "pos": "adj.",
    "cn_def": "可避免的",
    "en_def": "able to be prevented",
    "sentence": "Most of these ankle injuries are {{BLANK}}, because a proper warm-up takes only ten minutes of your time.",
    "cn": "這些腳踝傷害大多是可避免的，因為適當的熱身只需要花你十分鐘。"
  },
  {
    "word": "debilitating",
    "pos": "adj.",
    "cn_def": "使人虛弱的",
    "en_def": "making someone very weak",
    "sentence": "The illness was {{BLANK}}, so she could not train for three months, but she returned stronger in the spring.",
    "cn": "那場病使她非常虛弱，所以她三個月無法訓練，但她在春天以更強的狀態回歸。"
  },
  {
    "word": "equivocal",
    "pos": "adj.",
    "cn_def": "含糊的；模稜兩可的",
    "en_def": "unclear and open to more than one meaning",
    "sentence": "The results were {{BLANK}}, so the scientists refused to recommend the method until more work had been done.",
    "cn": "結果模稜兩可，所以科學家在更多研究完成前拒絕推薦這個方法。"
  }
];

const MCQS = [
  {
    "q": "Grip strength is a surprisingly good _____ of general health, so doctors now measure it during check-ups.",
    "options": [
      "glycogen",
      "derivation",
      "fracture",
      "predictor"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The federation published a guide to _____, and every club received a printed copy by post.",
    "options": [
      "best practice",
      "bone density",
      "stride length",
      "causal link"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The _____ was simple: athletes who slept nine hours were injured far less often than those who slept six.",
    "options": [
      "overuse injury",
      "key finding",
      "ripple effect",
      "body fat"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The _____ involved just one school, but its promising results led to a national project.",
    "options": [
      "margin of error",
      "high-speed camera",
      "pilot study",
      "protein shake"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "A _____ five years later found that most of the young runners were still active.",
    "options": [
      "wind tunnel",
      "centre of gravity",
      "knee brace",
      "follow-up study"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "It is _____ to see a doctor before starting hard training, especially if you have not exercised for years.",
    "options": [
      "advisable",
      "transferable",
      "abdominal",
      "perceptive"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The _____ rule-breaking was reported in every newspaper, but the hearing cleared the player two months later.",
    "options": [
      "record-breaking",
      "lean",
      "alleged",
      "stiff"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Most of her improvement is _____ to better sleep, although she also changed her diet last winter.",
    "options": [
      "impractical",
      "attributable",
      "slow-twitch",
      "lean"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The project was highly _____, because doctors, coaches and teachers all met once a month.",
    "options": [
      "short-term",
      "lean",
      "wide-ranging",
      "collaborative"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Two _____ studies reached the same conclusion, so the findings were taken seriously straight away.",
    "options": [
      "abdominal",
      "concurrent",
      "anaerobic",
      "unproven"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The most _____ decision of the season was made in June, when the club replaced its head coach.",
    "options": [
      "consequential",
      "unfavourable",
      "wide-ranging",
      "insightful"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Her career is _____ of a wider change, because many athletes now study while they compete.",
    "options": [
      "impractical",
      "aerodynamic",
      "illustrative",
      "long-term"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "There was a _____ difference after six weeks, and even the players themselves could feel the change.",
    "options": [
      "abdominal",
      "marked",
      "repeatable",
      "obtainable"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The chart gives _____ values for teenagers, so you can compare your own result with the usual range.",
    "options": [
      "anaerobic",
      "large-scale",
      "normative",
      "head-to-head"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "His appeal is still _____, so he may not play in any official match until the committee decides.",
    "options": [
      "pending",
      "lean",
      "numb",
      "replicable"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Training twice a day is not _____ for students, because they also need time for homework and sleep.",
    "options": [
      "permissible",
      "anaerobic",
      "undesirable",
      "practicable"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The test has some _____ value, but no single number can tell you who will become a champion.",
    "options": [
      "stiff",
      "fast-twitch",
      "predictive",
      "slow-twitch"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The punishment should be _____ to the offence, so a first small mistake rarely leads to a long ban.",
    "options": [
      "cross-sectional",
      "wide-ranging",
      "record-breaking",
      "proportionate"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Her _____ strength is excellent, because she lifts twice her own body weight despite being quite small.",
    "options": [
      "relative",
      "underrated",
      "sore",
      "short-term"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "He lacked the _____ experience for the national squad, so the selectors asked him to wait another year.",
    "options": [
      "perceptive",
      "requisite",
      "unfavourable",
      "grassroots"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The two runners returned to their _____ clubs after the camp, and they met again at the final.",
    "options": [
      "uncontrolled",
      "unavoidable",
      "respective",
      "wide-ranging"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The club made a _____ decision to cancel the tour, and the players only heard about it on the news.",
    "options": [
      "unilateral",
      "undesirable",
      "numb",
      "favourable"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Most of these ankle injuries are _____, because a proper warm-up takes only ten minutes of your time.",
    "options": [
      "repeatable",
      "avoidable",
      "large-scale",
      "fast-twitch"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The illness was _____, so she could not train for three months, but she returned stronger in the spring.",
    "options": [
      "swollen",
      "favourable",
      "cross-sectional",
      "debilitating"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The results were _____, so the scientists refused to recommend the method until more work had been done.",
    "options": [
      "unavoidable",
      "replicable",
      "equivocal",
      "metabolic"
    ],
    "answer": 2,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "predictor": {
    "pos": "n.",
    "en_def": "something that shows what is likely to happen",
    "cn_def": "預測指標"
  },
  "best practice": {
    "pos": "n.phr.",
    "en_def": "the methods accepted as the most effective",
    "cn_def": "最佳做法"
  },
  "key finding": {
    "pos": "n.phr.",
    "en_def": "the most important result of a study",
    "cn_def": "主要發現"
  },
  "pilot study": {
    "pos": "n.phr.",
    "en_def": "a small study done before a larger one",
    "cn_def": "先導研究"
  },
  "follow-up study": {
    "pos": "n.phr.",
    "en_def": "a later study that checks earlier results",
    "cn_def": "後續研究"
  },
  "advisable": {
    "pos": "adj.",
    "en_def": "sensible and worth doing",
    "cn_def": "明智的；可取的"
  },
  "alleged": {
    "pos": "adj.",
    "en_def": "said to be true but not yet proved",
    "cn_def": "被指稱的"
  },
  "attributable": {
    "pos": "adj.",
    "en_def": "able to be explained as being caused by something",
    "cn_def": "可歸因於…的"
  },
  "collaborative": {
    "pos": "adj.",
    "en_def": "involving people working together",
    "cn_def": "合作的"
  },
  "concurrent": {
    "pos": "adj.",
    "en_def": "happening at the same time",
    "cn_def": "同時發生的"
  },
  "consequential": {
    "pos": "adj.",
    "en_def": "important because it leads to serious results",
    "cn_def": "影響重大的"
  },
  "illustrative": {
    "pos": "adj.",
    "en_def": "useful as an example",
    "cn_def": "具說明性的"
  },
  "marked": {
    "pos": "adj.",
    "en_def": "clear and easy to notice",
    "cn_def": "明顯的"
  },
  "normative": {
    "pos": "adj.",
    "en_def": "describing what is considered normal or correct",
    "cn_def": "規範性的"
  },
  "pending": {
    "pos": "adj.",
    "en_def": "waiting to be decided or dealt with",
    "cn_def": "待決的；未決的"
  },
  "practicable": {
    "pos": "adj.",
    "en_def": "able to be done successfully",
    "cn_def": "行得通的"
  },
  "predictive": {
    "pos": "adj.",
    "en_def": "able to show what will probably happen",
    "cn_def": "有預測力的"
  },
  "proportionate": {
    "pos": "adj.",
    "en_def": "matching something else in size or importance",
    "cn_def": "相稱的；成比例的"
  },
  "relative": {
    "pos": "adj.",
    "en_def": "considered in comparison with something else",
    "cn_def": "相對的"
  },
  "requisite": {
    "pos": "adj.",
    "en_def": "needed for a particular purpose",
    "cn_def": "必要的"
  },
  "respective": {
    "pos": "adj.",
    "en_def": "belonging separately to each person mentioned",
    "cn_def": "各自的"
  },
  "unilateral": {
    "pos": "adj.",
    "en_def": "done by one side only",
    "cn_def": "單方面的"
  },
  "avoidable": {
    "pos": "adj.",
    "en_def": "able to be prevented",
    "cn_def": "可避免的"
  },
  "debilitating": {
    "pos": "adj.",
    "en_def": "making someone very weak",
    "cn_def": "使人虛弱的"
  },
  "equivocal": {
    "pos": "adj.",
    "en_def": "unclear and open to more than one meaning",
    "cn_def": "含糊的；模稜兩可的"
  },
  "glycogen": {
    "pos": "n.",
    "en_def": "the form in which the body stores sugar for energy",
    "cn_def": "肝醣"
  },
  "derivation": {
    "pos": "n.",
    "en_def": "the origin of something, or where it comes from",
    "cn_def": "由來；起源"
  },
  "fracture": {
    "pos": "n.",
    "en_def": "a crack or break in a bone",
    "cn_def": "骨折；裂傷"
  },
  "bone density": {
    "pos": "n.phr.",
    "en_def": "how strong and thick your bones are",
    "cn_def": "骨質密度"
  },
  "stride length": {
    "pos": "n.phr.",
    "en_def": "the distance covered in one step while running",
    "cn_def": "步幅"
  },
  "causal link": {
    "pos": "n.phr.",
    "en_def": "a connection in which one thing makes another happen",
    "cn_def": "因果關聯"
  },
  "overuse injury": {
    "pos": "n.phr.",
    "en_def": "damage caused by repeating the same movement too often",
    "cn_def": "過度使用傷害"
  },
  "ripple effect": {
    "pos": "n.phr.",
    "en_def": "a spreading series of results from one event",
    "cn_def": "漣漪效應"
  },
  "body fat": {
    "pos": "n.phr.",
    "en_def": "the amount of fat in the body",
    "cn_def": "體脂肪"
  },
  "margin of error": {
    "pos": "n.phr.",
    "en_def": "the amount by which a result may be wrong",
    "cn_def": "誤差範圍"
  },
  "high-speed camera": {
    "pos": "n.phr.",
    "en_def": "a camera that records very fast movement in detail",
    "cn_def": "高速攝影機"
  },
  "protein shake": {
    "pos": "n.phr.",
    "en_def": "a drink with a lot of protein, often taken after exercise",
    "cn_def": "蛋白飲；高蛋白奶昔"
  },
  "wind tunnel": {
    "pos": "n.phr.",
    "en_def": "a room where air is blown over a person to test their shape",
    "cn_def": "風洞"
  },
  "centre of gravity": {
    "pos": "n.phr.",
    "en_def": "the point where the weight of a body is balanced",
    "cn_def": "重心"
  },
  "knee brace": {
    "pos": "n.phr.",
    "en_def": "a support worn around the knee",
    "cn_def": "護膝支架"
  },
  "transferable": {
    "pos": "adj.",
    "en_def": "able to be used in a different situation",
    "cn_def": "可轉移的"
  },
  "abdominal": {
    "pos": "adj.",
    "en_def": "relating to the stomach area",
    "cn_def": "腹部的"
  },
  "perceptive": {
    "pos": "adj.",
    "en_def": "quick to notice and understand things",
    "cn_def": "敏銳的"
  },
  "record-breaking": {
    "pos": "adj.",
    "en_def": "better than anything done before",
    "cn_def": "破紀錄的"
  },
  "lean": {
    "pos": "adj.",
    "en_def": "thin and healthy, with little fat",
    "cn_def": "精瘦的"
  },
  "stiff": {
    "pos": "adj.",
    "en_def": "hard to move and a little painful",
    "cn_def": "僵硬的"
  },
  "impractical": {
    "pos": "adj.",
    "en_def": "not sensible or possible in real life",
    "cn_def": "不切實際的"
  },
  "slow-twitch": {
    "pos": "adj.",
    "en_def": "describing muscle fibres that work for a long time without tiring",
    "cn_def": "慢縮型的"
  },
  "short-term": {
    "pos": "adj.",
    "en_def": "lasting only a short period",
    "cn_def": "短期的"
  },
  "wide-ranging": {
    "pos": "adj.",
    "en_def": "covering many different subjects",
    "cn_def": "範圍廣泛的"
  },
  "anaerobic": {
    "pos": "adj.",
    "en_def": "describing short, intense exercise that does not use much oxygen",
    "cn_def": "無氧的"
  },
  "unproven": {
    "pos": "adj.",
    "en_def": "not yet shown to be true or effective",
    "cn_def": "未經證實的"
  },
  "unfavourable": {
    "pos": "adj.",
    "en_def": "not helpful or good for you",
    "cn_def": "不利的"
  },
  "insightful": {
    "pos": "adj.",
    "en_def": "showing clear and deep understanding",
    "cn_def": "有洞見的"
  },
  "aerodynamic": {
    "pos": "adj.",
    "en_def": "shaped so that air passes over it easily",
    "cn_def": "空氣力學的；流線的"
  },
  "long-term": {
    "pos": "adj.",
    "en_def": "continuing for a long period",
    "cn_def": "長期的"
  },
  "repeatable": {
    "pos": "adj.",
    "en_def": "able to be done again in the same way",
    "cn_def": "可重複的"
  },
  "obtainable": {
    "pos": "adj.",
    "en_def": "able to be got or achieved",
    "cn_def": "可獲得的"
  },
  "large-scale": {
    "pos": "adj.",
    "en_def": "involving many people or a wide area",
    "cn_def": "大規模的"
  },
  "head-to-head": {
    "pos": "adj.",
    "en_def": "directly against one other person or team",
    "cn_def": "對決的；正面交鋒的"
  },
  "numb": {
    "pos": "adj.",
    "en_def": "unable to feel anything",
    "cn_def": "麻木的"
  },
  "replicable": {
    "pos": "adj.",
    "en_def": "able to be copied exactly by other researchers",
    "cn_def": "可複製的"
  },
  "permissible": {
    "pos": "adj.",
    "en_def": "allowed by the rules",
    "cn_def": "允許的"
  },
  "undesirable": {
    "pos": "adj.",
    "en_def": "not wanted because it causes problems",
    "cn_def": "不良的；不受歡迎的"
  },
  "fast-twitch": {
    "pos": "adj.",
    "en_def": "describing muscle fibres that work quickly for short bursts",
    "cn_def": "快縮型的"
  },
  "cross-sectional": {
    "pos": "adj.",
    "en_def": "looking at many people at one point in time",
    "cn_def": "橫斷面的"
  },
  "underrated": {
    "pos": "adj.",
    "en_def": "not valued as highly as it should be",
    "cn_def": "被低估的"
  },
  "sore": {
    "pos": "adj.",
    "en_def": "painful, especially after exercise",
    "cn_def": "痠痛的"
  },
  "grassroots": {
    "pos": "adj.",
    "en_def": "happening at a local, ordinary level",
    "cn_def": "基層的"
  },
  "uncontrolled": {
    "pos": "adj.",
    "en_def": "not managed or limited",
    "cn_def": "未受控制的"
  },
  "unavoidable": {
    "pos": "adj.",
    "en_def": "impossible to prevent",
    "cn_def": "無法避免的"
  },
  "favourable": {
    "pos": "adj.",
    "en_def": "good for you or helpful",
    "cn_def": "有利的"
  },
  "swollen": {
    "pos": "adj.",
    "en_def": "larger than normal because of injury or illness",
    "cn_def": "腫起來的"
  },
  "metabolic": {
    "pos": "adj.",
    "en_def": "relating to how the body uses energy",
    "cn_def": "新陳代謝的"
  }
};

const EXTRA_GLOSSES = {};
