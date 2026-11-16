// Topic 7 Subunit 16 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T07 S16 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "wear and tear",
    "pos": "n.phr.",
    "cn_def": "(正常使用造成的)磨損",
    "en_def": "damage that happens through normal use over time",
    "sentence": "After five years of daily use, the robot showed signs of {{BLANK}}, so the company replaced its wheels and joints.",
    "cn": "經過五年的每日使用,這台機器人出現了磨損的跡象,所以公司更換了它的輪子和關節。"
  },
  {
    "word": "around the clock",
    "pos": "phr.",
    "cn_def": "日以繼夜;全天候",
    "en_def": "all day and all night without stopping",
    "sentence": "Robots in the warehouse work {{BLANK}}, so customers can receive their orders even on public holidays.",
    "cn": "倉庫裡的機器人全天候工作,所以顧客即使在國定假日也能收到訂單。"
  },
  {
    "word": "put to the test",
    "pos": "v.phr.",
    "cn_def": "接受考驗;測試",
    "en_def": "to check how good something is by using it in a hard situation",
    "sentence": "The rescue robot was {{BLANK}} after the earthquake, and it found three people under the broken building.",
    "cn": "救援機器人在地震後接受了考驗,它在倒塌的建築下找到了三個人。"
  },
  {
    "word": "come into play",
    "pos": "v.phr.",
    "cn_def": "開始發揮作用",
    "en_def": "to start to have an effect",
    "sentence": "Human judgement must {{BLANK}} when the robot faces a new situation, because it only knows what it has learned.",
    "cn": "當機器人面臨新情況時,人類的判斷力就必須開始發揮作用,因為它只知道它學過的東西。"
  },
  {
    "word": "at the push of a button",
    "pos": "phr.",
    "cn_def": "一按按鈕就;輕而易舉地",
    "en_def": "very easily, by just pressing a button",
    "sentence": "You can start the robot vacuum {{BLANK}}, and it will clean the whole flat by itself.",
    "cn": "你一按按鈕就能啟動掃地機器人,它會自己打掃整間公寓。"
  },
  {
    "word": "phase in",
    "pos": "v.phr.",
    "cn_def": "逐步採用;分階段實施",
    "en_def": "to introduce something gradually",
    "sentence": "The city plans to {{BLANK}} robot buses over five years, so drivers will have time to train for new jobs.",
    "cn": "市政府計畫在五年內逐步引進機器人公車,這樣司機就有時間接受新工作的訓練。"
  },
  {
    "word": "step in",
    "pos": "v.phr.",
    "cn_def": "介入;出面",
    "en_def": "to become involved to help or stop a problem",
    "sentence": "If the robot cannot answer a customer's question, a staff member will {{BLANK}} and help them right away.",
    "cn": "如果機器人無法回答顧客的問題,員工會介入並立即協助他們。"
  },
  {
    "word": "keep an eye on",
    "pos": "v.phr.",
    "cn_def": "留意;看管",
    "en_def": "to watch something carefully",
    "sentence": "A supervisor must {{BLANK}} the robots during the night shift, because a small problem can quickly become serious.",
    "cn": "夜班期間必須有一位主管留意機器人,因為小問題很快就可能變得嚴重。"
  },
  {
    "word": "level the playing field",
    "pos": "v.phr.",
    "cn_def": "創造公平的競爭環境",
    "en_def": "to make a situation fair for everyone",
    "sentence": "Video technology helps {{BLANK}} in sport, because every team gets the same fair decisions.",
    "cn": "影像科技有助於在運動中創造公平的競爭環境,因為每支隊伍都得到同樣公正的判決。"
  },
  {
    "word": "the benefit of the doubt",
    "pos": "n.phr.",
    "cn_def": "(在不確定時)姑且相信",
    "en_def": "believing someone when you are not completely sure",
    "sentence": "Human umpires sometimes gave popular players {{BLANK}}, but the robot treats everyone exactly the same.",
    "cn": "人類裁判有時會對受歡迎的球員姑且相信,但機器人對每個人都一視同仁。"
  },
  {
    "word": "call the shots",
    "pos": "v.phr.",
    "cn_def": "發號施令;做主",
    "en_def": "to be the person who makes the important decisions",
    "sentence": "Robots may do the work, but humans still {{BLANK}}, so we decide what the machines should and should not do.",
    "cn": "機器人也許負責做事,但人類仍然發號施令,所以由我們決定機器該做和不該做什麼。"
  },
  {
    "word": "at a standstill",
    "pos": "phr.",
    "cn_def": "陷入停頓;停滯",
    "en_def": "not moving or making any progress",
    "sentence": "The whole warehouse was {{BLANK}} after the computer crashed, so hundreds of parcels were delivered late.",
    "cn": "電腦當機後整個倉庫陷入停頓,所以數百個包裹延遲送達。"
  },
  {
    "word": "up and running",
    "pos": "adj.phr.",
    "cn_def": "開始運作;正常運轉",
    "en_def": "working properly after being set up or repaired",
    "sentence": "The technicians got the robots {{BLANK}} again within an hour, so the factory lost very little time.",
    "cn": "技術人員在一小時內就讓機器人重新正常運轉,所以工廠幾乎沒有損失時間。"
  },
  {
    "word": "second nature",
    "pos": "n.phr.",
    "cn_def": "第二天性;習以為常",
    "en_def": "something you do easily without thinking",
    "sentence": "Using voice commands has become {{BLANK}} for my children, so they talk to the smart speaker like a friend.",
    "cn": "使用語音指令對我的孩子們來說已經成為第二天性,所以他們像跟朋友一樣和智慧音箱說話。"
  },
  {
    "word": "move with the times",
    "pos": "v.phr.",
    "cn_def": "與時俱進",
    "en_def": "to change your ideas or methods as the world changes",
    "sentence": "Older shop owners must {{BLANK}}, or they may lose customers to stores that use modern technology.",
    "cn": "年長的店主必須與時俱進,否則他們可能會把顧客輸給使用現代科技的商店。"
  },
  {
    "word": "pave the way for",
    "pos": "v.phr.",
    "cn_def": "為…鋪路",
    "en_def": "to make it possible for something to happen later",
    "sentence": "Early factory robots helped {{BLANK}} today's home robots, because they proved that machines could work safely.",
    "cn": "早期的工廠機器人幫忙為今日的家用機器人鋪路,因為它們證明了機器可以安全地工作。"
  },
  {
    "word": "here to stay",
    "pos": "adj.phr.",
    "cn_def": "會一直存在;不會消失",
    "en_def": "accepted and likely to continue for a long time",
    "sentence": "Some people still dislike robot waiters, but most experts agree that this technology is {{BLANK}}.",
    "cn": "有些人仍然不喜歡機器人服務生,但大多數專家都同意這項技術會一直存在。"
  },
  {
    "word": "by hand",
    "pos": "phr.",
    "cn_def": "用手;手工",
    "en_def": "using your hands, not a machine",
    "sentence": "My grandmother still washes her clothes {{BLANK}}, although we bought her a washing machine last year.",
    "cn": "我奶奶仍然用手洗衣服,雖然我們去年買了一台洗衣機給她。"
  },
  {
    "word": "a close call",
    "pos": "n.phr.",
    "cn_def": "千鈞一髮;險些出事",
    "en_def": "a situation where something bad almost happened",
    "sentence": "It was {{BLANK}} when the robot arm nearly hit a worker, so the factory moved the safety line further back.",
    "cn": "當機器手臂差點撞到一名工人時真是千鈞一髮,所以工廠把安全線往後移。"
  },
  {
    "word": "on the line",
    "pos": "phr.",
    "cn_def": "岌岌可危;面臨風險",
    "en_def": "at risk of being lost or damaged",
    "sentence": "Thousands of jobs are {{BLANK}} because of the new robots, so the union is meeting the company next week.",
    "cn": "因為新機器人,數千個工作岌岌可危,所以工會下週將和公司會面。"
  }
];

const MCQS = [
  {
    "q": "After five years of daily use, the robot showed signs of _____, so the company replaced its wheels and joints.",
    "options": [
      "conveyor belt",
      "robot rights",
      "wear and tear",
      "uncanny valley"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Robots in the warehouse work _____, so customers can receive their orders even on public holidays.",
    "options": [
      "at the push of a button",
      "on the line",
      "by hand",
      "around the clock"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The rescue robot was _____ after the earthquake, and it found three people under the broken building.",
    "options": [
      "pave the way for",
      "put to the test",
      "come into play",
      "level the playing field"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Human judgement must _____ when the robot faces a new situation, because it only knows what it has learned.",
    "options": [
      "come into play",
      "level the playing field",
      "phase in",
      "step in"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "You can start the robot vacuum _____, and it will clean the whole flat by itself.",
    "options": [
      "around the clock",
      "at the push of a button",
      "at a standstill",
      "by hand"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The city plans to _____ robot buses over five years, so drivers will have time to train for new jobs.",
    "options": [
      "pave the way for",
      "move with the times",
      "phase in",
      "step in"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "If the robot cannot answer a customer's question, a staff member will _____ and help them right away.",
    "options": [
      "step in",
      "come into play",
      "move with the times",
      "level the playing field"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "A supervisor must _____ the robots during the night shift, because a small problem can quickly become serious.",
    "options": [
      "move with the times",
      "come into play",
      "phase in",
      "keep an eye on"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Video technology helps _____ in sport, because every team gets the same fair decisions.",
    "options": [
      "pave the way for",
      "move with the times",
      "level the playing field",
      "call the shots"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Human umpires sometimes gave popular players _____, but the robot treats everyone exactly the same.",
    "options": [
      "line judge",
      "the benefit of the doubt",
      "robot tax",
      "goal-line technology"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Robots may do the work, but humans still _____, so we decide what the machines should and should not do.",
    "options": [
      "call the shots",
      "step in",
      "pave the way for",
      "phase in"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The whole warehouse was _____ after the computer crashed, so hundreds of parcels were delivered late.",
    "options": [
      "on the line",
      "at the push of a button",
      "around the clock",
      "at a standstill"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The technicians got the robots _____ again within an hour, so the factory lost very little time.",
    "options": [
      "supply chain",
      "the benefit of the doubt",
      "up and running",
      "market share"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Using voice commands has become _____ for my children, so they talk to the smart speaker like a friend.",
    "options": [
      "quality control",
      "economies of scale",
      "market share",
      "second nature"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Older shop owners must _____, or they may lose customers to stores that use modern technology.",
    "options": [
      "move with the times",
      "phase in",
      "keep an eye on",
      "put to the test"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Early factory robots helped _____ today's home robots, because they proved that machines could work safely.",
    "options": [
      "come into play",
      "pave the way for",
      "move with the times",
      "put to the test"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Some people still dislike robot waiters, but most experts agree that this technology is _____.",
    "options": [
      "here to stay",
      "second nature",
      "level the playing field",
      "at the push of a button"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "My grandmother still washes her clothes _____, although we bought her a washing machine last year.",
    "options": [
      "around the clock",
      "at a standstill",
      "on the line",
      "by hand"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "It was _____ when the robot arm nearly hit a worker, so the factory moved the safety line further back.",
    "options": [
      "motion capture",
      "a close call",
      "conveyor belt",
      "quality control"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Thousands of jobs are _____ because of the new robots, so the union is meeting the company next week.",
    "options": [
      "at the push of a button",
      "around the clock",
      "on the line",
      "at a standstill"
    ],
    "answer": 2,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "wear and tear": {
    "pos": "n.phr.",
    "en_def": "damage that happens through normal use over time",
    "cn_def": "(正常使用造成的)磨損"
  },
  "around the clock": {
    "pos": "phr.",
    "en_def": "all day and all night without stopping",
    "cn_def": "日以繼夜;全天候"
  },
  "put to the test": {
    "pos": "v.phr.",
    "en_def": "to check how good something is by using it in a hard situation",
    "cn_def": "接受考驗;測試"
  },
  "come into play": {
    "pos": "v.phr.",
    "en_def": "to start to have an effect",
    "cn_def": "開始發揮作用"
  },
  "at the push of a button": {
    "pos": "phr.",
    "en_def": "very easily, by just pressing a button",
    "cn_def": "一按按鈕就;輕而易舉地"
  },
  "phase in": {
    "pos": "v.phr.",
    "en_def": "to introduce something gradually",
    "cn_def": "逐步採用;分階段實施"
  },
  "step in": {
    "pos": "v.phr.",
    "en_def": "to become involved to help or stop a problem",
    "cn_def": "介入;出面"
  },
  "keep an eye on": {
    "pos": "v.phr.",
    "en_def": "to watch something carefully",
    "cn_def": "留意;看管"
  },
  "level the playing field": {
    "pos": "v.phr.",
    "en_def": "to make a situation fair for everyone",
    "cn_def": "創造公平的競爭環境"
  },
  "the benefit of the doubt": {
    "pos": "n.phr.",
    "en_def": "believing someone when you are not completely sure",
    "cn_def": "(在不確定時)姑且相信"
  },
  "call the shots": {
    "pos": "v.phr.",
    "en_def": "to be the person who makes the important decisions",
    "cn_def": "發號施令;做主"
  },
  "at a standstill": {
    "pos": "phr.",
    "en_def": "not moving or making any progress",
    "cn_def": "陷入停頓;停滯"
  },
  "up and running": {
    "pos": "adj.phr.",
    "en_def": "working properly after being set up or repaired",
    "cn_def": "開始運作;正常運轉"
  },
  "second nature": {
    "pos": "n.phr.",
    "en_def": "something you do easily without thinking",
    "cn_def": "第二天性;習以為常"
  },
  "move with the times": {
    "pos": "v.phr.",
    "en_def": "to change your ideas or methods as the world changes",
    "cn_def": "與時俱進"
  },
  "pave the way for": {
    "pos": "v.phr.",
    "en_def": "to make it possible for something to happen later",
    "cn_def": "為…鋪路"
  },
  "here to stay": {
    "pos": "adj.phr.",
    "en_def": "accepted and likely to continue for a long time",
    "cn_def": "會一直存在;不會消失"
  },
  "by hand": {
    "pos": "phr.",
    "en_def": "using your hands, not a machine",
    "cn_def": "用手;手工"
  },
  "a close call": {
    "pos": "n.phr.",
    "en_def": "a situation where something bad almost happened",
    "cn_def": "千鈞一髮;險些出事"
  },
  "on the line": {
    "pos": "phr.",
    "en_def": "at risk of being lost or damaged",
    "cn_def": "岌岌可危;面臨風險"
  },
  "conveyor belt": {
    "pos": "n.phr.",
    "en_def": "a moving belt that carries things from place to place",
    "cn_def": "輸送帶"
  },
  "robot rights": {
    "pos": "n.phr.",
    "en_def": "the idea that advanced robots should have legal protections",
    "cn_def": "機器人權利"
  },
  "uncanny valley": {
    "pos": "n.phr.",
    "en_def": "the uneasy feeling when a robot looks almost but not quite human",
    "cn_def": "恐怖谷(效應)"
  },
  "line judge": {
    "pos": "n.phr.",
    "en_def": "an official who decides if a ball is in or out",
    "cn_def": "司線員;邊線裁判"
  },
  "robot tax": {
    "pos": "n.phr.",
    "en_def": "a tax on companies that use robots instead of workers",
    "cn_def": "機器人稅"
  },
  "goal-line technology": {
    "pos": "n.phr.",
    "en_def": "cameras that show whether a ball crossed the goal line",
    "cn_def": "門線技術"
  },
  "supply chain": {
    "pos": "n.phr.",
    "en_def": "all the steps from making a product to selling it",
    "cn_def": "供應鏈"
  },
  "market share": {
    "pos": "n.phr.",
    "en_def": "the part of total sales a company has",
    "cn_def": "市占率"
  },
  "quality control": {
    "pos": "n.phr.",
    "en_def": "checking that products are made correctly",
    "cn_def": "品質管制;品管"
  },
  "economies of scale": {
    "pos": "n.phr.",
    "en_def": "lower costs per item when you produce a lot",
    "cn_def": "規模經濟"
  },
  "motion capture": {
    "pos": "n.phr.",
    "en_def": "recording body movements with sensors to study them",
    "cn_def": "動作捕捉"
  }
};

const EXTRA_GLOSSES = {};
