// Topic 16 Subunit 6 Quiz Data: Competition & Peak Performance 競賽與巔峰表現
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T16 S06 - Competition & Peak Performance 競賽與巔峰表現",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "personal best",
    "pos": "n.phr.",
    "cn_def": "個人最佳成績",
    "en_def": "your own fastest or highest result so far",
    "sentence": "She did not win a medal, but she set a new {{BLANK}} by four seconds, so her coach was delighted.",
    "cn": "她沒有拿到獎牌，但她把個人最佳成績推進了四秒，所以她的教練非常高興。"
  },
  {
    "word": "world record",
    "pos": "n.phr.",
    "cn_def": "世界紀錄",
    "en_def": "the best result ever achieved in the world",
    "sentence": "The young swimmer broke the {{BLANK}} in the morning heats, and then she broke it again in the evening final.",
    "cn": "那位年輕泳將在早上的預賽打破世界紀錄，接著又在晚上的決賽再次刷新它。"
  },
  {
    "word": "record-breaking",
    "pos": "adj.",
    "cn_def": "破紀錄的",
    "en_def": "better than anything done before",
    "sentence": "It was a {{BLANK}} season for our school, because we won three regional titles for the first time ever.",
    "cn": "這對我們學校來說是破紀錄的一季，因為我們首度贏得三個區域冠軍。"
  },
  {
    "word": "podium",
    "pos": "n.",
    "cn_def": "頒獎台",
    "en_def": "the raised platform where the top three athletes stand",
    "sentence": "Standing on the {{BLANK}} with her parents watching was the proudest moment of her life, and she cried during the anthem.",
    "cn": "在父母注視下站上頒獎台是她人生中最驕傲的時刻，而她在國歌響起時哭了。"
  },
  {
    "word": "medallist",
    "pos": "n.",
    "cn_def": "獎牌得主",
    "en_def": "a person who has won a medal",
    "sentence": "An Olympic {{BLANK}} visited our school last week, and she let every student hold her silver medal.",
    "cn": "一位奧運獎牌得主上週造訪我們學校，而她讓每位學生都摸了她的銀牌。"
  },
  {
    "word": "qualify",
    "pos": "v.",
    "cn_def": "取得資格；晉級",
    "en_def": "to reach the standard needed to enter a competition",
    "sentence": "He had to run under eleven seconds to {{BLANK}} for the national finals, and he managed it on his third attempt.",
    "cn": "他必須跑進十一秒才能取得全國決賽資格，而他在第三次嘗試時成功了。"
  },
  {
    "word": "qualifier",
    "pos": "n.",
    "cn_def": "資格賽",
    "en_def": "a match or race used to decide who enters a competition",
    "sentence": "Our team lost the first {{BLANK}} badly, but we won the next two and reached the main tournament.",
    "cn": "我們球隊第一場資格賽輸得很慘，但我們贏了接下來兩場並打進主賽。"
  },
  {
    "word": "heat",
    "pos": "n.",
    "cn_def": "預賽",
    "en_def": "one of several early races used to choose the finalists",
    "sentence": "She jogged easily through her {{BLANK}} in the morning, because she wanted to save her energy for the final.",
    "cn": "她早上輕鬆跑完預賽，因為她想為決賽保留體力。"
  },
  {
    "word": "semi-final",
    "pos": "n.",
    "cn_def": "準決賽",
    "en_def": "the match before the final",
    "sentence": "Our volleyball team reached the {{BLANK}} for the first time, although we lost to the eventual champions.",
    "cn": "我們排球隊首次打進準決賽，雖然我們輸給了最終的冠軍。"
  },
  {
    "word": "knockout stage",
    "pos": "n.phr.",
    "cn_def": "淘汰賽階段",
    "en_def": "the part of a competition where the loser goes out",
    "sentence": "Once you reach the {{BLANK}}, one bad afternoon can end your season, so every team plays very carefully.",
    "cn": "一旦進入淘汰賽階段，一個下午的失常就可能結束你的球季，所以每支球隊都打得非常謹慎。"
  },
  {
    "word": "seeded",
    "pos": "adj.",
    "cn_def": "種子的；排名的",
    "en_def": "ranked as one of the best players before a competition",
    "sentence": "She was {{BLANK}} second in the draw, so she did not have to face the top player until the final.",
    "cn": "她在籤表中被列為第二種子，所以她直到決賽才需要面對頭號選手。"
  },
  {
    "word": "underdog",
    "pos": "n.",
    "cn_def": "弱隊；不被看好的一方",
    "en_def": "a player or team not expected to win",
    "sentence": "Everyone called us the {{BLANK}} before the match, but we scored twice in the last ten minutes and won.",
    "cn": "賽前每個人都說我們是不被看好的一方，但我們在最後十分鐘進了兩球並贏了。"
  },
  {
    "word": "home advantage",
    "pos": "n.phr.",
    "cn_def": "主場優勢",
    "en_def": "the benefit of playing in your own stadium",
    "sentence": "{{BLANK}} really matters in this league, because visiting teams must travel for six hours by bus.",
    "cn": "主場優勢在這個聯賽真的很重要，因為客隊必須搭六小時的巴士。"
  },
  {
    "word": "away game",
    "pos": "n.phr.",
    "cn_def": "客場比賽",
    "en_def": "a match played at the opponent's ground",
    "sentence": "We lost the {{BLANK}} by one goal, but we still went through because we had won at home.",
    "cn": "我們客場比賽以一球落敗，但我們仍然晉級，因為我們在主場贏過。"
  },
  {
    "word": "squad",
    "pos": "n.",
    "cn_def": "球隊名單；隊伍",
    "en_def": "the whole group of players a team can choose from",
    "sentence": "The coach named a {{BLANK}} of eighteen players, so four of us had to watch the final from the stands.",
    "cn": "教練公布了十八人的球隊名單，所以我們有四個人必須在看台上觀看決賽。"
  },
  {
    "word": "line-up",
    "pos": "n.",
    "cn_def": "先發陣容",
    "en_def": "the list of players chosen to start a match",
    "sentence": "My name was in the starting {{BLANK}} for the first time, and I was so excited that I could hardly sleep.",
    "cn": "我的名字第一次出現在先發陣容中，而我興奮得幾乎睡不著。"
  },
  {
    "word": "captain",
    "pos": "n.",
    "cn_def": "隊長",
    "en_def": "the player who leads a team",
    "sentence": "As {{BLANK}}, she encouraged the younger players after every mistake, so nobody was afraid to try something difficult.",
    "cn": "身為隊長，她在每次失誤後都鼓勵較年輕的球員，所以沒有人害怕嘗試困難的動作。"
  },
  {
    "word": "half-time",
    "pos": "n.",
    "cn_def": "中場休息",
    "en_def": "the break in the middle of a match",
    "sentence": "At {{BLANK}} we were two goals behind, but the coach changed our shape and we scored three times after the break.",
    "cn": "中場休息時我們落後兩球，但教練改變了陣型，而我們在下半場進了三球。"
  },
  {
    "word": "extra time",
    "pos": "n.phr.",
    "cn_def": "延長賽",
    "en_def": "additional playing time when the scores are equal",
    "sentence": "The game went to {{BLANK}}, and both teams looked exhausted as they ran into the final minutes.",
    "cn": "比賽進入延長賽，而兩隊跑到最後幾分鐘時都顯得筋疲力盡。"
  },
  {
    "word": "penalty shoot-out",
    "pos": "n.phr.",
    "cn_def": "十二碼大戰",
    "en_def": "a way of deciding a drawn match by single kicks at goal",
    "sentence": "Our goalkeeper saved two shots in the {{BLANK}}, so the whole school celebrated for the rest of the week.",
    "cn": "我們的守門員在十二碼大戰中擋下兩球，所以全校接下來一整週都在慶祝。"
  },
  {
    "word": "runner-up",
    "pos": "n.",
    "cn_def": "第二名",
    "en_def": "the person or team that finishes second",
    "sentence": "She was the {{BLANK}} at the city championships last year, but this season she finally took first place.",
    "cn": "她去年在市錦標賽拿到第二名，但本季她終於奪得第一。"
  },
  {
    "word": "debut",
    "pos": "n.",
    "cn_def": "初次登場",
    "en_def": "a player's first appearance for a team",
    "sentence": "He made his {{BLANK}} at only sixteen, and he scored within twenty minutes of coming onto the pitch.",
    "cn": "他年僅十六歲就初次登場，而他上場後二十分鐘內就得分了。"
  },
  {
    "word": "veteran",
    "pos": "n.",
    "cn_def": "老將",
    "en_def": "an experienced older player",
    "sentence": "The team's {{BLANK}} played his last match on Sunday, and the crowd stood and clapped for a full minute.",
    "cn": "球隊的老將星期天打了他的最後一場比賽，而觀眾全體起立鼓掌整整一分鐘。"
  },
  {
    "word": "rookie",
    "pos": "n.",
    "cn_def": "新人；菜鳥",
    "en_def": "a player in their first season",
    "sentence": "The {{BLANK}} looked nervous in his first few games, but by December he was one of the best players in the league.",
    "cn": "那位新人在頭幾場比賽看起來很緊張，但到十二月他已是聯賽中最好的球員之一。"
  },
  {
    "word": "outclass",
    "pos": "v.",
    "cn_def": "技高一籌地擊敗",
    "en_def": "to be much better than an opponent",
    "sentence": "The champions completely {{BLANK}} us in the first half, so we were just happy to score once in the second.",
    "cn": "冠軍隊在上半場徹底壓制我們，所以我們只為了下半場進一球就很高興了。"
  },
  {
    "word": "prize money",
    "pos": "n.phr.",
    "cn_def": "獎金",
    "en_def": "money given to the winners of a competition",
    "sentence": "The {{BLANK}} in women's events is now equal at this tournament, and many players fought for years to achieve that.",
    "cn": "這項賽事女子組的獎金現在已經同等，而許多選手為此奮鬥了多年。"
  },
  {
    "word": "home crowd",
    "pos": "n.phr.",
    "cn_def": "主場觀眾",
    "en_def": "the supporters watching in their own stadium",
    "sentence": "The {{BLANK}} sang for ninety minutes, and the players said the noise made them run harder when they were tired.",
    "cn": "主場觀眾唱了九十分鐘，而球員說那股聲浪讓他們在疲累時跑得更拚。"
  },
  {
    "word": "head-to-head",
    "pos": "adj.",
    "cn_def": "對決的；正面交鋒的",
    "en_def": "directly against one other person or team",
    "sentence": "Their {{BLANK}} record is almost equal, so nobody could predict who would win Saturday's match.",
    "cn": "他們的正面交鋒戰績幾乎相等，所以沒有人能預測星期六誰會贏。"
  }
];

const MCQS = [
  {
    "q": "She did not win a medal, but she set a new _____ by four seconds, so her coach was delighted.",
    "options": [
      "body fat",
      "work ethic",
      "personal best",
      "video analysis"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The young swimmer broke the _____ in the morning heats, and then she broke it again in the evening final.",
    "options": [
      "world record",
      "tennis elbow",
      "foam roller",
      "body of evidence"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "It was a _____ season for our school, because we won three regional titles for the first time ever.",
    "options": [
      "respective",
      "reliant",
      "preventable",
      "record-breaking"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Standing on the _____ with her parents watching was the proudest moment of her life, and she cried during the anthem.",
    "options": [
      "stud",
      "podium",
      "defibrillator",
      "physiotherapist"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "An Olympic _____ visited our school last week, and she let every student hold her silver medal.",
    "options": [
      "enactment",
      "compliance",
      "medallist",
      "squat"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "He had to run under eleven seconds to _____ for the national finals, and he managed it on his third attempt.",
    "options": [
      "desist",
      "pre-empt",
      "adduce",
      "qualify"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Our team lost the first _____ badly, but we won the next two and reached the main tournament.",
    "options": [
      "artery",
      "qualifier",
      "soreness",
      "blister"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "She jogged easily through her _____ in the morning, because she wanted to save her energy for the final.",
    "options": [
      "heat",
      "treadmill",
      "rejection",
      "Paralympics"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Our volleyball team reached the _____ for the first time, although we lost to the eventual champions.",
    "options": [
      "predominance",
      "kneecap",
      "hamstring",
      "semi-final"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Once you reach the _____, one bad afternoon can end your season, so every team plays very carefully.",
    "options": [
      "knockout stage",
      "compression garment",
      "wind tunnel",
      "ripple effect"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "She was _____ second in the draw, so she did not have to face the top player until the final.",
    "options": [
      "reasoned",
      "slow-twitch",
      "seeded",
      "underrated"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Everyone called us the _____ before the match, but we scored twice in the last ten minutes and won.",
    "options": [
      "sprain",
      "underdog",
      "synthesis",
      "enactment"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "_____ really matters in this league, because visiting teams must travel for six hours by bus.",
    "options": [
      "technical suit",
      "line of reasoning",
      "mental imagery",
      "home advantage"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "We lost the _____ by one goal, but we still went through because we had won at home.",
    "options": [
      "interval training",
      "away game",
      "margin of error",
      "fair play"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The coach named a _____ of eighteen players, so four of us had to watch the final from the stands.",
    "options": [
      "squad",
      "ankle",
      "depiction",
      "biceps"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "My name was in the starting _____ for the first time, and I was so excited that I could hardly sleep.",
    "options": [
      "marathon",
      "cushioning",
      "line-up",
      "exertion"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "As _____, she encouraged the younger players after every mistake, so nobody was afraid to try something difficult.",
    "options": [
      "captain",
      "gym",
      "kneecap",
      "physiotherapist"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "At _____ we were two goals behind, but the coach changed our shape and we scored three times after the break.",
    "options": [
      "swelling",
      "half-time",
      "soreness",
      "compliance"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The game went to _____, and both teams looked exhausted as they ran into the final minutes.",
    "options": [
      "best practice",
      "protein shake",
      "work ethic",
      "extra time"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Our goalkeeper saved two shots in the _____, so the whole school celebrated for the rest of the week.",
    "options": [
      "foam roller",
      "MRI scan",
      "penalty shoot-out",
      "whey protein"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "She was the _____ at the city championships last year, but this season she finally took first place.",
    "options": [
      "runner-up",
      "soreness",
      "repetition",
      "stipulation"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "He made his _____ at only sixteen, and he scored within twenty minutes of coming onto the pitch.",
    "options": [
      "tendon",
      "cushioning",
      "revision",
      "debut"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The team's _____ played his last match on Sunday, and the crowd stood and clapped for a full minute.",
    "options": [
      "barbell",
      "veteran",
      "upside",
      "replication"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The _____ looked nervous in his first few games, but by December he was one of the best players in the league.",
    "options": [
      "bloodstream",
      "kneecap",
      "rookie",
      "endowment"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The champions completely _____ us in the first half, so we were just happy to score once in the second.",
    "options": [
      "equalise",
      "outclass",
      "taper",
      "hydrate"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The _____ in women's events is now equal at this tournament, and many players fought for years to achieve that.",
    "options": [
      "prize money",
      "pep talk",
      "knee brace",
      "key finding"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The _____ sang for ninety minutes, and the players said the noise made them run harder when they were tired.",
    "options": [
      "team doctor",
      "mental toughness",
      "control group",
      "home crowd"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Their _____ record is almost equal, so nobody could predict who would win Saturday's match.",
    "options": [
      "performance-enhancing",
      "respective",
      "head-to-head",
      "normative"
    ],
    "answer": 2,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "personal best": {
    "pos": "n.phr.",
    "en_def": "your own fastest or highest result so far",
    "cn_def": "個人最佳成績"
  },
  "world record": {
    "pos": "n.phr.",
    "en_def": "the best result ever achieved in the world",
    "cn_def": "世界紀錄"
  },
  "record-breaking": {
    "pos": "adj.",
    "en_def": "better than anything done before",
    "cn_def": "破紀錄的"
  },
  "podium": {
    "pos": "n.",
    "en_def": "the raised platform where the top three athletes stand",
    "cn_def": "頒獎台"
  },
  "medallist": {
    "pos": "n.",
    "en_def": "a person who has won a medal",
    "cn_def": "獎牌得主"
  },
  "qualify": {
    "pos": "v.",
    "en_def": "to reach the standard needed to enter a competition",
    "cn_def": "取得資格；晉級"
  },
  "qualifier": {
    "pos": "n.",
    "en_def": "a match or race used to decide who enters a competition",
    "cn_def": "資格賽"
  },
  "heat": {
    "pos": "n.",
    "en_def": "one of several early races used to choose the finalists",
    "cn_def": "預賽"
  },
  "semi-final": {
    "pos": "n.",
    "en_def": "the match before the final",
    "cn_def": "準決賽"
  },
  "knockout stage": {
    "pos": "n.phr.",
    "en_def": "the part of a competition where the loser goes out",
    "cn_def": "淘汰賽階段"
  },
  "seeded": {
    "pos": "adj.",
    "en_def": "ranked as one of the best players before a competition",
    "cn_def": "種子的；排名的"
  },
  "underdog": {
    "pos": "n.",
    "en_def": "a player or team not expected to win",
    "cn_def": "弱隊；不被看好的一方"
  },
  "home advantage": {
    "pos": "n.phr.",
    "en_def": "the benefit of playing in your own stadium",
    "cn_def": "主場優勢"
  },
  "away game": {
    "pos": "n.phr.",
    "en_def": "a match played at the opponent's ground",
    "cn_def": "客場比賽"
  },
  "squad": {
    "pos": "n.",
    "en_def": "the whole group of players a team can choose from",
    "cn_def": "球隊名單；隊伍"
  },
  "line-up": {
    "pos": "n.",
    "en_def": "the list of players chosen to start a match",
    "cn_def": "先發陣容"
  },
  "captain": {
    "pos": "n.",
    "en_def": "the player who leads a team",
    "cn_def": "隊長"
  },
  "half-time": {
    "pos": "n.",
    "en_def": "the break in the middle of a match",
    "cn_def": "中場休息"
  },
  "extra time": {
    "pos": "n.phr.",
    "en_def": "additional playing time when the scores are equal",
    "cn_def": "延長賽"
  },
  "penalty shoot-out": {
    "pos": "n.phr.",
    "en_def": "a way of deciding a drawn match by single kicks at goal",
    "cn_def": "十二碼大戰"
  },
  "runner-up": {
    "pos": "n.",
    "en_def": "the person or team that finishes second",
    "cn_def": "第二名"
  },
  "debut": {
    "pos": "n.",
    "en_def": "a player's first appearance for a team",
    "cn_def": "初次登場"
  },
  "veteran": {
    "pos": "n.",
    "en_def": "an experienced older player",
    "cn_def": "老將"
  },
  "rookie": {
    "pos": "n.",
    "en_def": "a player in their first season",
    "cn_def": "新人；菜鳥"
  },
  "outclass": {
    "pos": "v.",
    "en_def": "to be much better than an opponent",
    "cn_def": "技高一籌地擊敗"
  },
  "prize money": {
    "pos": "n.phr.",
    "en_def": "money given to the winners of a competition",
    "cn_def": "獎金"
  },
  "home crowd": {
    "pos": "n.phr.",
    "en_def": "the supporters watching in their own stadium",
    "cn_def": "主場觀眾"
  },
  "head-to-head": {
    "pos": "adj.",
    "en_def": "directly against one other person or team",
    "cn_def": "對決的；正面交鋒的"
  },
  "body fat": {
    "pos": "n.phr.",
    "en_def": "the amount of fat in the body",
    "cn_def": "體脂肪"
  },
  "work ethic": {
    "pos": "n.phr.",
    "en_def": "the habit of working hard and seriously",
    "cn_def": "工作態度；努力的習慣"
  },
  "video analysis": {
    "pos": "n.phr.",
    "en_def": "studying recorded film to improve performance",
    "cn_def": "影像分析"
  },
  "tennis elbow": {
    "pos": "n.phr.",
    "en_def": "pain in the outside of the elbow from overuse",
    "cn_def": "網球肘"
  },
  "foam roller": {
    "pos": "n.phr.",
    "en_def": "a tube of hard foam you roll on to relax tight muscles",
    "cn_def": "滾筒；泡沫軸"
  },
  "body of evidence": {
    "pos": "n.phr.",
    "en_def": "all the information that supports an idea",
    "cn_def": "眾多證據"
  },
  "respective": {
    "pos": "adj.",
    "en_def": "belonging separately to each person mentioned",
    "cn_def": "各自的"
  },
  "reliant": {
    "pos": "adj.",
    "en_def": "depending on someone or something",
    "cn_def": "依賴的"
  },
  "preventable": {
    "pos": "adj.",
    "en_def": "able to be stopped before it happens",
    "cn_def": "可預防的"
  },
  "stud": {
    "pos": "n.",
    "en_def": "a small lump on the bottom of a football boot",
    "cn_def": "鞋釘；防滑釘"
  },
  "defibrillator": {
    "pos": "n.",
    "en_def": "a machine that gives an electric shock to restart the heart",
    "cn_def": "去顫器；電擊器"
  },
  "physiotherapist": {
    "pos": "n.",
    "en_def": "a person trained to treat injuries with exercise and massage",
    "cn_def": "物理治療師"
  },
  "enactment": {
    "pos": "n.",
    "en_def": "the act of making something into law",
    "cn_def": "制定（法律）"
  },
  "compliance": {
    "pos": "n.",
    "en_def": "the act of obeying a rule or request",
    "cn_def": "遵守；合規"
  },
  "squat": {
    "pos": "n.",
    "en_def": "an exercise where you bend your knees and lower your body",
    "cn_def": "深蹲"
  },
  "desist": {
    "pos": "v.",
    "en_def": "to stop doing something",
    "cn_def": "停止"
  },
  "pre-empt": {
    "pos": "v.",
    "en_def": "to act first in order to prevent something",
    "cn_def": "先行阻止；搶先"
  },
  "adduce": {
    "pos": "v.",
    "en_def": "to give evidence or reasons for something",
    "cn_def": "舉出（證據）"
  },
  "artery": {
    "pos": "n.",
    "en_def": "a tube that carries blood away from the heart",
    "cn_def": "動脈"
  },
  "soreness": {
    "pos": "n.",
    "en_def": "a feeling of pain in the muscles",
    "cn_def": "痠痛感"
  },
  "blister": {
    "pos": "n.",
    "en_def": "a small painful bubble of skin, often from rubbing",
    "cn_def": "水泡"
  },
  "treadmill": {
    "pos": "n.",
    "en_def": "a machine with a moving belt that you walk or run on",
    "cn_def": "跑步機"
  },
  "rejection": {
    "pos": "n.",
    "en_def": "the act of refusing to accept something",
    "cn_def": "拒絕"
  },
  "paralympics": {
    "pos": "n.",
    "en_def": "the international sports competition for athletes with disabilities",
    "cn_def": "帕拉林匹克運動會"
  },
  "predominance": {
    "pos": "n.",
    "en_def": "the state of being the largest or strongest part",
    "cn_def": "佔多數；主導地位"
  },
  "kneecap": {
    "pos": "n.",
    "en_def": "the small round bone at the front of the knee",
    "cn_def": "膝蓋骨；髕骨"
  },
  "hamstring": {
    "pos": "n.",
    "en_def": "a muscle at the back of the upper leg",
    "cn_def": "大腿後肌；膕繩肌"
  },
  "compression garment": {
    "pos": "n.phr.",
    "en_def": "tight clothing that presses on muscles to help blood flow",
    "cn_def": "壓縮衣"
  },
  "wind tunnel": {
    "pos": "n.phr.",
    "en_def": "a room where air is blown over a person to test their shape",
    "cn_def": "風洞"
  },
  "ripple effect": {
    "pos": "n.phr.",
    "en_def": "a spreading series of results from one event",
    "cn_def": "漣漪效應"
  },
  "reasoned": {
    "pos": "adj.",
    "en_def": "based on careful thinking",
    "cn_def": "有理有據的"
  },
  "slow-twitch": {
    "pos": "adj.",
    "en_def": "describing muscle fibres that work for a long time without tiring",
    "cn_def": "慢縮型的"
  },
  "underrated": {
    "pos": "adj.",
    "en_def": "not valued as highly as it should be",
    "cn_def": "被低估的"
  },
  "sprain": {
    "pos": "n.",
    "en_def": "an injury where a joint is twisted and hurt",
    "cn_def": "扭傷"
  },
  "synthesis": {
    "pos": "n.",
    "en_def": "the combining of different ideas into one whole",
    "cn_def": "綜合；整合"
  },
  "technical suit": {
    "pos": "n.phr.",
    "en_def": "a special tight suit worn to swim faster",
    "cn_def": "競技泳衣"
  },
  "line of reasoning": {
    "pos": "n.phr.",
    "en_def": "the series of steps in an argument",
    "cn_def": "推理思路"
  },
  "mental imagery": {
    "pos": "n.phr.",
    "en_def": "picturing a perfect performance in your mind",
    "cn_def": "心像；心理想像"
  },
  "interval training": {
    "pos": "n.phr.",
    "en_def": "exercise that mixes very hard periods with easy rest periods",
    "cn_def": "間歇訓練"
  },
  "margin of error": {
    "pos": "n.phr.",
    "en_def": "the amount by which a result may be wrong",
    "cn_def": "誤差範圍"
  },
  "fair play": {
    "pos": "n.phr.",
    "en_def": "honest and respectful behaviour in sport",
    "cn_def": "公平競賽；運動家精神"
  },
  "ankle": {
    "pos": "n.",
    "en_def": "the joint between the foot and the leg",
    "cn_def": "腳踝"
  },
  "depiction": {
    "pos": "n.",
    "en_def": "a description or picture of something",
    "cn_def": "描繪；描寫"
  },
  "biceps": {
    "pos": "n.",
    "en_def": "the muscle at the front of the upper arm",
    "cn_def": "二頭肌"
  },
  "marathon": {
    "pos": "n.",
    "en_def": "a running race of about 42 kilometres",
    "cn_def": "馬拉松"
  },
  "cushioning": {
    "pos": "n.",
    "en_def": "soft material that reduces the shock of landing",
    "cn_def": "緩衝；避震"
  },
  "exertion": {
    "pos": "n.",
    "en_def": "great physical or mental effort",
    "cn_def": "費力；用力"
  },
  "gym": {
    "pos": "n.",
    "en_def": "a room or building with equipment for exercise",
    "cn_def": "健身房"
  },
  "swelling": {
    "pos": "n.",
    "en_def": "the state of a body part becoming larger because of injury",
    "cn_def": "腫脹"
  },
  "best practice": {
    "pos": "n.phr.",
    "en_def": "the methods accepted as the most effective",
    "cn_def": "最佳做法"
  },
  "protein shake": {
    "pos": "n.phr.",
    "en_def": "a drink with a lot of protein, often taken after exercise",
    "cn_def": "蛋白飲；高蛋白奶昔"
  },
  "mri scan": {
    "pos": "n.phr.",
    "en_def": "a detailed picture of the inside of the body made by a machine",
    "cn_def": "磁振造影掃描"
  },
  "whey protein": {
    "pos": "n.phr.",
    "en_def": "a milk protein powder used to help muscles recover",
    "cn_def": "乳清蛋白"
  },
  "repetition": {
    "pos": "n.",
    "en_def": "one complete movement of an exercise",
    "cn_def": "重複次數；一下"
  },
  "stipulation": {
    "pos": "n.",
    "en_def": "a condition that must be accepted",
    "cn_def": "規定；條件"
  },
  "tendon": {
    "pos": "n.",
    "en_def": "a strong band that joins a muscle to a bone",
    "cn_def": "肌腱"
  },
  "revision": {
    "pos": "n.",
    "en_def": "a change made to improve something",
    "cn_def": "修訂；修改"
  },
  "barbell": {
    "pos": "n.",
    "en_def": "a long bar with heavy weights on both ends",
    "cn_def": "槓鈴"
  },
  "upside": {
    "pos": "n.",
    "en_def": "the positive side of a situation",
    "cn_def": "好的一面；優點"
  },
  "replication": {
    "pos": "n.",
    "en_def": "the act of repeating a study to check its results",
    "cn_def": "重複驗證"
  },
  "bloodstream": {
    "pos": "n.",
    "en_def": "the blood flowing around the body",
    "cn_def": "血液循環；血流"
  },
  "endowment": {
    "pos": "n.",
    "en_def": "a large gift of money given to an institution",
    "cn_def": "捐贈基金"
  },
  "equalise": {
    "pos": "v.",
    "en_def": "to score so that both sides have the same points",
    "cn_def": "追成平手"
  },
  "taper": {
    "pos": "v.",
    "en_def": "to train less in the days before an important race",
    "cn_def": "（賽前）減量訓練"
  },
  "hydrate": {
    "pos": "v.",
    "en_def": "to drink enough water for your body",
    "cn_def": "補充水分"
  },
  "pep talk": {
    "pos": "n.phr.",
    "en_def": "a short encouraging speech before or during a match",
    "cn_def": "激勵講話"
  },
  "knee brace": {
    "pos": "n.phr.",
    "en_def": "a support worn around the knee",
    "cn_def": "護膝支架"
  },
  "key finding": {
    "pos": "n.phr.",
    "en_def": "the most important result of a study",
    "cn_def": "主要發現"
  },
  "team doctor": {
    "pos": "n.phr.",
    "en_def": "the doctor who looks after a sports team",
    "cn_def": "隊醫"
  },
  "mental toughness": {
    "pos": "n.phr.",
    "en_def": "the ability to stay strong when things get hard",
    "cn_def": "心理韌性"
  },
  "control group": {
    "pos": "n.phr.",
    "en_def": "a group that does not receive the treatment being tested",
    "cn_def": "對照組"
  },
  "performance-enhancing": {
    "pos": "adj.",
    "en_def": "making an athlete stronger or faster, often illegally",
    "cn_def": "提升表現的"
  },
  "normative": {
    "pos": "adj.",
    "en_def": "describing what is considered normal or correct",
    "cn_def": "規範性的"
  }
};

const EXTRA_GLOSSES = {};
