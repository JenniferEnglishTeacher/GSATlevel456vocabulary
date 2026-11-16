// Topic 16 Subunit 15 Quiz Data: Academic Words 學術單字 8 (interrelate – log)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T16 S15 - Academic Words 學術單字 8 (interrelate – log)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "interrelate",
    "pos": "v.",
    "cn_def": "相互關聯",
    "en_def": "to be connected with and affect each other",
    "sentence": "Sleep, diet and mood all {{BLANK}}, so changing one of them usually changes the other two as well.",
    "cn": "睡眠、飲食和情緒全都相互關聯，所以改變其中之一通常也會改變另外兩項。"
  },
  {
    "word": "itemise",
    "pos": "v.",
    "cn_def": "逐項列出",
    "en_def": "to list things separately",
    "sentence": "Please {{BLANK}} every piece of equipment you need, and the school will tell you what the budget can cover.",
    "cn": "請逐項列出你需要的每一件器材，而學校會告訴你預算能支付哪些。"
  },
  {
    "word": "misjudge",
    "pos": "v.",
    "cn_def": "誤判",
    "en_def": "to form a wrong opinion about something",
    "sentence": "The goalkeeper {{BLANK}} the flight of the ball, so it bounced over his hands and into the net.",
    "cn": "守門員誤判了球的飛行路線，所以球彈過他的手飛進球網。"
  },
  {
    "word": "rank",
    "pos": "v.",
    "cn_def": "排名",
    "en_def": "to put things in order of quality or importance",
    "sentence": "The magazine tried to {{BLANK}} the world's hardest races, but readers argued about the order for weeks.",
    "cn": "那本雜誌試圖為世界上最艱難的比賽排名，但讀者為排序爭論了好幾週。"
  },
  {
    "word": "rationalise",
    "pos": "v.",
    "cn_def": "使合理化；精簡",
    "en_def": "to make something simpler and more efficient",
    "sentence": "The federation plans to {{BLANK}} the competition calendar, because players currently travel almost every weekend.",
    "cn": "聯盟計畫精簡賽程表，因為球員目前幾乎每個週末都在奔波。"
  },
  {
    "word": "recalibrate",
    "pos": "v.",
    "cn_def": "重新校準",
    "en_def": "to adjust a measuring device or a plan",
    "sentence": "The staff must {{BLANK}} the timing gates each morning, or the recorded speeds will be slightly wrong.",
    "cn": "工作人員每天早上必須重新校準計時門，否則記錄的速度會稍有偏差。"
  },
  {
    "word": "reclassify",
    "pos": "v.",
    "cn_def": "重新分類",
    "en_def": "to put something into a different group",
    "sentence": "Officials decided to {{BLANK}} the event as high-risk, so medical staff must now be present throughout.",
    "cn": "官員決定把這項賽事重新分類為高風險，所以現在醫護人員必須全程在場。"
  },
  {
    "word": "reconfigure",
    "pos": "v.",
    "cn_def": "重新配置",
    "en_def": "to arrange something in a different way",
    "sentence": "The gym was {{BLANK}} over the summer, and the free-weight area is now twice as large.",
    "cn": "健身房在暑假期間重新配置，而自由重量區現在大了兩倍。"
  },
  {
    "word": "redesign",
    "pos": "v.",
    "cn_def": "重新設計",
    "en_def": "to plan or make something again in a new way",
    "sentence": "Engineers had to {{BLANK}} the helmet, because tests showed that it moved too easily on impact.",
    "cn": "工程師必須重新設計那款頭盔，因為測試顯示它在撞擊時太容易移位。"
  },
  {
    "word": "reformulate",
    "pos": "v.",
    "cn_def": "重新擬定；重新調配",
    "en_def": "to express or make something in a new form",
    "sentence": "The company had to {{BLANK}} the drink after one ingredient was banned, and the new version tastes less sweet.",
    "cn": "在一種成分被禁用後，公司必須重新調配這款飲料，而新版本嘗起來比較不甜。"
  },
  {
    "word": "synchronise",
    "pos": "v.",
    "cn_def": "使同步",
    "en_def": "to make things happen at exactly the same time",
    "sentence": "The pair must {{BLANK}} every movement, because even a tiny difference loses marks in this event.",
    "cn": "這組選手必須讓每個動作同步，因為在這個項目中即使微小的差異也會失分。"
  },
  {
    "word": "forewarn",
    "pos": "v.",
    "cn_def": "預先警告",
    "en_def": "to tell someone about a problem before it happens",
    "sentence": "The doctor {{BLANK}} her that recovery would be slow, so she was not shocked when progress took months.",
    "cn": "醫生事先警告她復原會很慢，所以當進展花了好幾個月時她並不驚訝。"
  },
  {
    "word": "overcompensate",
    "pos": "v.",
    "cn_def": "過度補償",
    "en_def": "to do too much to make up for a problem",
    "sentence": "Injured runners often {{BLANK}} with the other leg, and that is why a second injury appears so often.",
    "cn": "受傷的跑者常用另一條腿過度補償，而這就是第二次受傷如此常見的原因。"
  },
  {
    "word": "pre-empt",
    "pos": "v.",
    "cn_def": "先行阻止；搶先",
    "en_def": "to act first in order to prevent something",
    "sentence": "Good coaches {{BLANK}} arguments by explaining their selections to the whole squad before the team sheet goes up.",
    "cn": "好教練會在名單公布前向全隊解釋選人理由，以搶先避免爭吵。"
  },
  {
    "word": "rebalance",
    "pos": "v.",
    "cn_def": "重新平衡",
    "en_def": "to change the proportions of something",
    "sentence": "He had to {{BLANK}} his week, so he now trains four days and studies on the other three.",
    "cn": "他必須重新平衡自己的一週，所以他現在訓練四天，另外三天讀書。"
  },
  {
    "word": "redouble",
    "pos": "v.",
    "cn_def": "加倍（努力）",
    "en_def": "to greatly increase your effort",
    "sentence": "After the narrow defeat the squad {{BLANK}} its efforts, and the players arrived early every morning.",
    "cn": "在那場惜敗後，隊伍加倍努力，而球員每天早上都提早到場。"
  },
  {
    "word": "reorient",
    "pos": "v.",
    "cn_def": "重新定位",
    "en_def": "to change the direction or focus of something",
    "sentence": "The club wants to {{BLANK}} its programme towards enjoyment, because too many teenagers were giving up.",
    "cn": "俱樂部想把課程重新定位於樂趣，因為太多青少年中途放棄。"
  },
  {
    "word": "shortlist",
    "pos": "v.",
    "cn_def": "列入最終名單",
    "en_def": "to choose a small group from many applicants",
    "sentence": "The selectors will {{BLANK}} twenty players next week, and the final squad will be named in May.",
    "cn": "選拔委員下週會挑出二十位球員進入最終名單，而正式名單將在五月公布。"
  },
  {
    "word": "vet",
    "pos": "v.",
    "cn_def": "審查",
    "en_def": "to check someone or something carefully before accepting them",
    "sentence": "The club must {{BLANK}} every volunteer coach, because anyone working with children needs a background check.",
    "cn": "俱樂部必須審查每位志工教練，因為任何與兒童共事的人都需要背景調查。"
  },
  {
    "word": "scale up",
    "pos": "v.phr.",
    "cn_def": "擴大規模",
    "en_def": "to make something bigger or available to more people",
    "sentence": "The city wants to {{BLANK}} the free swimming scheme, so every primary school will join by next year.",
    "cn": "市政府希望擴大免費游泳計畫的規模，所以明年前每所小學都會加入。"
  },
  {
    "word": "roll out",
    "pos": "v.phr.",
    "cn_def": "推出；全面實施",
    "en_def": "to introduce a new plan or product widely",
    "sentence": "The league will {{BLANK}} the new concussion test in August, and all referees are being trained now.",
    "cn": "聯盟將在八月全面推行新的腦部撞擊檢測，而所有裁判現在都在接受訓練。"
  },
  {
    "word": "fine-tune",
    "pos": "v.",
    "cn_def": "微調",
    "en_def": "to make small changes that improve something",
    "sentence": "She spent the winter trying to {{BLANK}} her start, and she gained a tenth of a second by spring.",
    "cn": "她整個冬天都在試著微調起跑，而到春天她進步了十分之一秒。"
  },
  {
    "word": "triangulate",
    "pos": "v.",
    "cn_def": "三角驗證",
    "en_def": "to check a finding by using three different sources",
    "sentence": "The researchers {{BLANK}} their results with interviews, video and lab tests, so their conclusions were hard to argue with.",
    "cn": "研究人員用訪談、影片和實驗室檢測三角驗證結果，所以他們的結論難以反駁。"
  },
  {
    "word": "deselect",
    "pos": "v.",
    "cn_def": "不予選入；剔除",
    "en_def": "to leave a player out of a team",
    "sentence": "The coach had to {{BLANK}} two popular players, and she explained her reasons to them in private first.",
    "cn": "教練必須不選入兩位受歡迎的球員，而她先私下向他們解釋了理由。"
  },
  {
    "word": "log",
    "pos": "v.",
    "cn_def": "記錄",
    "en_def": "to write down a record of something regularly",
    "sentence": "Athletes {{BLANK}} their training in an app, so the coach can spot problems before an injury happens.",
    "cn": "運動員用應用程式記錄訓練，所以教練能在受傷發生前發現問題。"
  }
];

const MCQS = [
  {
    "q": "Sleep, diet and mood all _____, so changing one of them usually changes the other two as well.",
    "options": [
      "disband",
      "cross-reference",
      "sideline",
      "interrelate"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Please _____ every piece of equipment you need, and the school will tell you what the budget can cover.",
    "options": [
      "incapacitate",
      "itemise",
      "disentangle",
      "canvass"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The goalkeeper _____ the flight of the ball, so it bounced over his hands and into the net.",
    "options": [
      "misjudge",
      "realign",
      "qualify",
      "cross-reference"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The magazine tried to _____ the world's hardest races, but readers argued about the order for weeks.",
    "options": [
      "castigate",
      "disentangle",
      "rank",
      "dislocate"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The federation plans to _____ the competition calendar, because players currently travel almost every weekend.",
    "options": [
      "rationalise",
      "desist",
      "penalise",
      "broach"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The staff must _____ the timing gates each morning, or the recorded speeds will be slightly wrong.",
    "options": [
      "castigate",
      "downsize",
      "vanquish",
      "recalibrate"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Officials decided to _____ the event as high-risk, so medical staff must now be present throughout.",
    "options": [
      "bemoan",
      "reclassify",
      "tear",
      "vanquish"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The gym was _____ over the summer, and the free-weight area is now twice as large.",
    "options": [
      "hydrate",
      "institutionalise",
      "reconfigure",
      "repeal"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Engineers had to _____ the helmet, because tests showed that it moved too easily on impact.",
    "options": [
      "dislocate",
      "destabilise",
      "avail",
      "redesign"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The company had to _____ the drink after one ingredient was banned, and the new version tastes less sweet.",
    "options": [
      "reformulate",
      "decelerate",
      "institutionalise",
      "cross-reference"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The pair must _____ every movement, because even a tiny difference loses marks in this event.",
    "options": [
      "incapacitate",
      "jog",
      "synchronise",
      "sideline"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The doctor _____ her that recovery would be slow, so she was not shocked when progress took months.",
    "options": [
      "jog",
      "forewarn",
      "limp",
      "sideline"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Injured runners often _____ with the other leg, and that is why a second injury appears so often.",
    "options": [
      "overcompensate",
      "repeal",
      "avail",
      "jog"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Good coaches _____ arguments by explaining their selections to the whole squad before the team sheet goes up.",
    "options": [
      "outclass",
      "pre-empt",
      "disband",
      "vanquish"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "He had to _____ his week, so he now trains four days and studies on the other three.",
    "options": [
      "repeal",
      "destabilise",
      "rebalance",
      "vanquish"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "After the narrow defeat the squad _____ its efforts, and the players arrived early every morning.",
    "options": [
      "normalise",
      "rehydrate",
      "dislocate",
      "redouble"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The club wants to _____ its programme towards enjoyment, because too many teenagers were giving up.",
    "options": [
      "cross-reference",
      "hydrate",
      "reorient",
      "incapacitate"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The selectors will _____ twenty players next week, and the final squad will be named in May.",
    "options": [
      "shortlist",
      "vanquish",
      "disentangle",
      "sideline"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The club must _____ every volunteer coach, because anyone working with children needs a background check.",
    "options": [
      "vanquish",
      "sideline",
      "disqualify",
      "vet"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The city wants to _____ the free swimming scheme, so every primary school will join by next year.",
    "options": [
      "win hands down",
      "scale up",
      "raise the bar",
      "hit one's stride"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The league will _____ the new concussion test in August, and all referees are being trained now.",
    "options": [
      "jump the gun",
      "raise the bar",
      "roll out",
      "bounce back"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "She spent the winter trying to _____ her start, and she gained a tenth of a second by spring.",
    "options": [
      "fine-tune",
      "bemoan",
      "equalise",
      "qualify"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The researchers _____ their results with interviews, video and lab tests, so their conclusions were hard to argue with.",
    "options": [
      "sideline",
      "triangulate",
      "stretch",
      "formalise"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The coach had to _____ two popular players, and she explained her reasons to them in private first.",
    "options": [
      "sideline",
      "disband",
      "taper",
      "deselect"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Athletes _____ their training in an app, so the coach can spot problems before an injury happens.",
    "options": [
      "contextualise",
      "penalise",
      "log",
      "incentivise"
    ],
    "answer": 2,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "interrelate": {
    "pos": "v.",
    "en_def": "to be connected with and affect each other",
    "cn_def": "相互關聯"
  },
  "itemise": {
    "pos": "v.",
    "en_def": "to list things separately",
    "cn_def": "逐項列出"
  },
  "misjudge": {
    "pos": "v.",
    "en_def": "to form a wrong opinion about something",
    "cn_def": "誤判"
  },
  "rank": {
    "pos": "v.",
    "en_def": "to put things in order of quality or importance",
    "cn_def": "排名"
  },
  "rationalise": {
    "pos": "v.",
    "en_def": "to make something simpler and more efficient",
    "cn_def": "使合理化；精簡"
  },
  "recalibrate": {
    "pos": "v.",
    "en_def": "to adjust a measuring device or a plan",
    "cn_def": "重新校準"
  },
  "reclassify": {
    "pos": "v.",
    "en_def": "to put something into a different group",
    "cn_def": "重新分類"
  },
  "reconfigure": {
    "pos": "v.",
    "en_def": "to arrange something in a different way",
    "cn_def": "重新配置"
  },
  "redesign": {
    "pos": "v.",
    "en_def": "to plan or make something again in a new way",
    "cn_def": "重新設計"
  },
  "reformulate": {
    "pos": "v.",
    "en_def": "to express or make something in a new form",
    "cn_def": "重新擬定；重新調配"
  },
  "synchronise": {
    "pos": "v.",
    "en_def": "to make things happen at exactly the same time",
    "cn_def": "使同步"
  },
  "forewarn": {
    "pos": "v.",
    "en_def": "to tell someone about a problem before it happens",
    "cn_def": "預先警告"
  },
  "overcompensate": {
    "pos": "v.",
    "en_def": "to do too much to make up for a problem",
    "cn_def": "過度補償"
  },
  "pre-empt": {
    "pos": "v.",
    "en_def": "to act first in order to prevent something",
    "cn_def": "先行阻止；搶先"
  },
  "rebalance": {
    "pos": "v.",
    "en_def": "to change the proportions of something",
    "cn_def": "重新平衡"
  },
  "redouble": {
    "pos": "v.",
    "en_def": "to greatly increase your effort",
    "cn_def": "加倍（努力）"
  },
  "reorient": {
    "pos": "v.",
    "en_def": "to change the direction or focus of something",
    "cn_def": "重新定位"
  },
  "shortlist": {
    "pos": "v.",
    "en_def": "to choose a small group from many applicants",
    "cn_def": "列入最終名單"
  },
  "vet": {
    "pos": "v.",
    "en_def": "to check someone or something carefully before accepting them",
    "cn_def": "審查"
  },
  "scale up": {
    "pos": "v.phr.",
    "en_def": "to make something bigger or available to more people",
    "cn_def": "擴大規模"
  },
  "roll out": {
    "pos": "v.phr.",
    "en_def": "to introduce a new plan or product widely",
    "cn_def": "推出；全面實施"
  },
  "fine-tune": {
    "pos": "v.",
    "en_def": "to make small changes that improve something",
    "cn_def": "微調"
  },
  "triangulate": {
    "pos": "v.",
    "en_def": "to check a finding by using three different sources",
    "cn_def": "三角驗證"
  },
  "deselect": {
    "pos": "v.",
    "en_def": "to leave a player out of a team",
    "cn_def": "不予選入；剔除"
  },
  "log": {
    "pos": "v.",
    "en_def": "to write down a record of something regularly",
    "cn_def": "記錄"
  },
  "disband": {
    "pos": "v.",
    "en_def": "to break up a group or team",
    "cn_def": "解散"
  },
  "cross-reference": {
    "pos": "v.",
    "en_def": "to compare information from two different sources",
    "cn_def": "交叉比對"
  },
  "sideline": {
    "pos": "v.",
    "en_def": "to stop someone from playing because of injury",
    "cn_def": "使無法上場"
  },
  "incapacitate": {
    "pos": "v.",
    "en_def": "to make someone unable to do things",
    "cn_def": "使失去能力"
  },
  "disentangle": {
    "pos": "v.",
    "en_def": "to separate things that are mixed together",
    "cn_def": "釐清；解開"
  },
  "canvass": {
    "pos": "v.",
    "en_def": "to ask many people for their opinions",
    "cn_def": "徵詢意見"
  },
  "realign": {
    "pos": "v.",
    "en_def": "to change the position or arrangement of something",
    "cn_def": "重新調整"
  },
  "qualify": {
    "pos": "v.",
    "en_def": "to reach the standard needed to enter a competition",
    "cn_def": "取得資格；晉級"
  },
  "castigate": {
    "pos": "v.",
    "en_def": "to criticise someone severely",
    "cn_def": "嚴厲批評"
  },
  "dislocate": {
    "pos": "v.",
    "en_def": "to push a bone out of its normal place",
    "cn_def": "脫臼"
  },
  "desist": {
    "pos": "v.",
    "en_def": "to stop doing something",
    "cn_def": "停止"
  },
  "penalise": {
    "pos": "v.",
    "en_def": "to punish someone for breaking a rule",
    "cn_def": "處罰"
  },
  "broach": {
    "pos": "v.",
    "en_def": "to begin talking about a difficult subject",
    "cn_def": "開始談論（難題）"
  },
  "downsize": {
    "pos": "v.",
    "en_def": "to make an organisation smaller",
    "cn_def": "縮編；精簡"
  },
  "vanquish": {
    "pos": "v.",
    "en_def": "to defeat someone completely",
    "cn_def": "徹底擊敗"
  },
  "bemoan": {
    "pos": "v.",
    "en_def": "to complain about something",
    "cn_def": "抱怨；哀嘆"
  },
  "tear": {
    "pos": "v.",
    "en_def": "to pull something apart or damage it by pulling",
    "cn_def": "撕裂"
  },
  "hydrate": {
    "pos": "v.",
    "en_def": "to drink enough water for your body",
    "cn_def": "補充水分"
  },
  "institutionalise": {
    "pos": "v.",
    "en_def": "to make a practice part of an organisation's system",
    "cn_def": "制度化"
  },
  "repeal": {
    "pos": "v.",
    "en_def": "to officially end a law or rule",
    "cn_def": "廢除"
  },
  "destabilise": {
    "pos": "v.",
    "en_def": "to make something less steady or secure",
    "cn_def": "使不穩定"
  },
  "avail": {
    "pos": "v.",
    "en_def": "to make use of something that is offered",
    "cn_def": "利用"
  },
  "decelerate": {
    "pos": "v.",
    "en_def": "to slow down",
    "cn_def": "減速"
  },
  "jog": {
    "pos": "v.",
    "en_def": "to run slowly and steadily for exercise",
    "cn_def": "慢跑"
  },
  "limp": {
    "pos": "v.",
    "en_def": "to walk with difficulty because one leg hurts",
    "cn_def": "跛行"
  },
  "outclass": {
    "pos": "v.",
    "en_def": "to be much better than an opponent",
    "cn_def": "技高一籌地擊敗"
  },
  "normalise": {
    "pos": "v.",
    "en_def": "to make something become usual or accepted",
    "cn_def": "使正常化"
  },
  "rehydrate": {
    "pos": "v.",
    "en_def": "to drink water again after losing a lot of it",
    "cn_def": "重新補水"
  },
  "disqualify": {
    "pos": "v.",
    "en_def": "to stop someone from taking part because of a rule break",
    "cn_def": "取消資格"
  },
  "win hands down": {
    "pos": "v.phr.",
    "en_def": "to win very easily",
    "cn_def": "輕鬆取勝"
  },
  "raise the bar": {
    "pos": "v.phr.",
    "en_def": "to set a higher standard than before",
    "cn_def": "提高標準"
  },
  "hit one's stride": {
    "pos": "v.phr.",
    "en_def": "to begin doing something confidently and well",
    "cn_def": "進入狀況；找到節奏"
  },
  "jump the gun": {
    "pos": "v.phr.",
    "en_def": "to start too early",
    "cn_def": "搶跑；過早行動"
  },
  "bounce back": {
    "pos": "v.phr.",
    "en_def": "to recover quickly after a defeat or problem",
    "cn_def": "迅速復原；重新振作"
  },
  "equalise": {
    "pos": "v.",
    "en_def": "to score so that both sides have the same points",
    "cn_def": "追成平手"
  },
  "stretch": {
    "pos": "v.",
    "en_def": "to make your muscles longer by reaching or bending",
    "cn_def": "伸展；拉筋"
  },
  "formalise": {
    "pos": "v.",
    "en_def": "to make something official",
    "cn_def": "使正式化"
  },
  "taper": {
    "pos": "v.",
    "en_def": "to train less in the days before an important race",
    "cn_def": "（賽前）減量訓練"
  },
  "contextualise": {
    "pos": "v.",
    "en_def": "to explain something by describing its situation",
    "cn_def": "置於脈絡中解釋"
  },
  "incentivise": {
    "pos": "v.",
    "en_def": "to encourage people by offering a reward",
    "cn_def": "以誘因激勵"
  }
};

const EXTRA_GLOSSES = {};
