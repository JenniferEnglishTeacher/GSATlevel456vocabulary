// Topic 7 Subunit 5 Quiz Data: Robots in Sport & Officiating 運動中的機器人與裁判科技
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T07 S05 - Robots in Sport & Officiating 運動中的機器人與裁判科技",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "umpire",
    "pos": "n.",
    "cn_def": "裁判(網球、棒球等)",
    "en_def": "an official who makes decisions in tennis, cricket or baseball",
    "sentence": "The league is testing a robot {{BLANK}} that calls balls and strikes, but some players say it takes the fun out of baseball.",
    "cn": "聯盟正在測試一位判定好壞球的機器人裁判,但有些球員說這讓棒球失去了樂趣。"
  },
  {
    "word": "referee",
    "pos": "n.",
    "cn_def": "裁判(足球、籃球等)",
    "en_def": "an official who controls a football or basketball game",
    "sentence": "The {{BLANK}} checked the video screen before giving the goal, so the angry fans finally calmed down.",
    "cn": "裁判在判定進球之前先查看了影像螢幕,所以憤怒的球迷終於冷靜下來。"
  },
  {
    "word": "line judge",
    "pos": "n.phr.",
    "cn_def": "司線員;邊線裁判",
    "en_def": "an official who decides if a ball is in or out",
    "sentence": "Many tennis tournaments no longer use a {{BLANK}}, because electronic cameras can call the lines more accurately.",
    "cn": "許多網球賽不再使用司線員,因為電子攝影機能更精準地判定界線。"
  },
  {
    "word": "officiate",
    "pos": "v.",
    "cn_def": "擔任裁判;主持",
    "en_def": "to act as the official in charge of a game",
    "sentence": "My uncle used to {{BLANK}} local football matches, but now he says the video system makes the job very different.",
    "cn": "我叔叔以前常擔任地方足球賽的裁判,但他現在說影像系統讓這份工作變得很不一樣。"
  },
  {
    "word": "ruling",
    "pos": "n.",
    "cn_def": "裁決;判決",
    "en_def": "an official decision",
    "sentence": "The player was unhappy with the {{BLANK}}, but he accepted it after the replay showed the ball was out.",
    "cn": "這位球員對裁決不滿,但在重播顯示球出界後他接受了。"
  },
  {
    "word": "overturn",
    "pos": "v.",
    "cn_def": "推翻;撤銷(判決)",
    "en_def": "to officially change a decision",
    "sentence": "The video referee decided to {{BLANK}} the penalty, because the replay showed that the defender never touched the striker.",
    "cn": "影像裁判決定推翻這個罰球判決,因為重播顯示防守球員從未碰到前鋒。"
  },
  {
    "word": "replay",
    "pos": "n.",
    "cn_def": "重播",
    "en_def": "a recording of part of a game shown again",
    "sentence": "The {{BLANK}} showed that the runner was safe, so the umpire changed his call and the crowd cheered.",
    "cn": "重播顯示跑者是安全上壘,所以裁判改變了判決,觀眾都歡呼起來。"
  },
  {
    "word": "slow motion",
    "pos": "n.phr.",
    "cn_def": "慢動作",
    "en_def": "showing a video more slowly than real speed",
    "sentence": "In {{BLANK}}, you can see the ball just touch the line, but it was impossible to see with the eye.",
    "cn": "在慢動作中,你能看到球剛好碰到線,但用肉眼是不可能看清楚的。"
  },
  {
    "word": "goal-line technology",
    "pos": "n.phr.",
    "cn_def": "門線技術",
    "en_def": "cameras that show whether a ball crossed the goal line",
    "sentence": "{{BLANK}} tells the referee within one second whether the ball went in, so there are fewer arguments after big matches.",
    "cn": "門線技術在一秒內告訴裁判球是否進門,所以大比賽後的爭議少了很多。"
  },
  {
    "word": "offside",
    "pos": "adj.",
    "cn_def": "越位的",
    "en_def": "in a position on the field that breaks the rules",
    "sentence": "The striker was {{BLANK}} by only a few centimetres, but the computer lines showed it clearly and the goal was cancelled.",
    "cn": "這名前鋒只越位了幾公分,但電腦畫線清楚地顯示出來,所以進球被取消了。"
  },
  {
    "word": "foul",
    "pos": "n.",
    "cn_def": "犯規",
    "en_def": "an action that breaks the rules of a game",
    "sentence": "The referee missed the {{BLANK}} at first, but the video assistant told him to look at the screen again.",
    "cn": "裁判一開始漏看了這次犯規,但影像助理請他再看一次螢幕。"
  },
  {
    "word": "strike zone",
    "pos": "n.phr.",
    "cn_def": "好球帶",
    "en_def": "the area over home plate where a pitch counts as a strike",
    "sentence": "Every batter has a slightly different {{BLANK}}, so the robot umpire must measure each player's height.",
    "cn": "每位打者的好球帶都略有不同,所以機器人裁判必須測量每位球員的身高。"
  },
  {
    "word": "pitcher",
    "pos": "n.",
    "cn_def": "投手",
    "en_def": "the baseball player who throws the ball to the batter",
    "sentence": "The {{BLANK}} threw the ball very fast, and the robot umpire called it a strike before the crowd could even see it.",
    "cn": "投手把球投得非常快,觀眾還沒看清楚,機器人裁判就判定是好球了。"
  },
  {
    "word": "batter",
    "pos": "n.",
    "cn_def": "打者",
    "en_def": "the baseball player who tries to hit the ball",
    "sentence": "The {{BLANK}} argued that the ball was too low, but the computer showed it had touched the edge of the zone.",
    "cn": "打者爭辯說那球太低,但電腦顯示它碰到了好球帶的邊緣。"
  },
  {
    "word": "court",
    "pos": "n.",
    "cn_def": "球場(網球、籃球等)",
    "en_def": "an area marked for playing tennis or basketball",
    "sentence": "Cameras around the tennis {{BLANK}} track the ball at high speed, so players can challenge any call they disagree with.",
    "cn": "網球場周圍的攝影機高速追蹤球,所以球員可以對任何不同意的判決提出挑戰。"
  },
  {
    "word": "rally",
    "pos": "n.",
    "cn_def": "(網球等)來回對打",
    "en_def": "a long series of hits in tennis or badminton",
    "sentence": "The two players had a forty-shot {{BLANK}}, and the crowd stood up to clap when it finally ended.",
    "cn": "兩位選手進行了四十拍的來回對打,當它終於結束時,觀眾都站起來鼓掌。"
  },
  {
    "word": "spectator",
    "pos": "n.",
    "cn_def": "觀眾",
    "en_def": "a person who watches a sports event",
    "sentence": "Every {{BLANK}} in the stadium could see the replay on the big screen, so nobody doubted the referee's final decision.",
    "cn": "體育場裡的每一位觀眾都能在大螢幕上看到重播,所以沒有人懷疑裁判的最後決定。"
  },
  {
    "word": "stadium",
    "pos": "n.",
    "cn_def": "體育場",
    "en_def": "a large sports ground with seats around it",
    "sentence": "The new {{BLANK}} has robots that deliver snacks to fans' seats, so nobody misses the action while queuing.",
    "cn": "新的體育場有把點心送到球迷座位的機器人,所以沒有人會因為排隊而錯過精彩畫面。"
  },
  {
    "word": "tournament",
    "pos": "n.",
    "cn_def": "錦標賽;聯賽",
    "en_def": "a sports competition with many games or rounds",
    "sentence": "The robot football {{BLANK}} attracted teams from twenty countries, and our school's team reached the final round.",
    "cn": "機器人足球錦標賽吸引了來自二十個國家的隊伍,而我們學校的隊伍打進了決賽。"
  },
  {
    "word": "league",
    "pos": "n.",
    "cn_def": "聯盟",
    "en_def": "a group of teams that play against each other",
    "sentence": "The baseball {{BLANK}} plans to use electronic umpires next season, but the players' union wants more tests first.",
    "cn": "棒球聯盟計畫下一季使用電子裁判,但球員工會希望先做更多測試。"
  },
  {
    "word": "athlete",
    "pos": "n.",
    "cn_def": "運動員",
    "en_def": "a person who is good at sports and trains hard",
    "sentence": "Wearable sensors tell each {{BLANK}} how fast they are running, so coaches can plan better training sessions.",
    "cn": "穿戴式感測器告訴每位運動員他們跑得多快,所以教練能規劃更好的訓練課程。"
  },
  {
    "word": "coach",
    "pos": "n.",
    "cn_def": "教練",
    "en_def": "a person who trains a sports team or player",
    "sentence": "Our {{BLANK}} uses video software to study every match, and she shows us exactly where we made mistakes.",
    "cn": "我們的教練使用影像軟體研究每一場比賽,她會清楚地告訴我們哪裡犯了錯。"
  },
  {
    "word": "opponent",
    "pos": "n.",
    "cn_def": "對手",
    "en_def": "the person or team you play against",
    "sentence": "The table tennis robot is a tireless {{BLANK}}, so players can practise for hours without needing a partner.",
    "cn": "這台桌球機器人是一個永不疲倦的對手,所以選手能練習好幾個小時而不需要搭檔。"
  },
  {
    "word": "scoreboard",
    "pos": "n.",
    "cn_def": "記分板",
    "en_def": "a large board showing the score of a game",
    "sentence": "The {{BLANK}} showed the speed of every serve, and the fans cheered when it reached two hundred kilometres per hour.",
    "cn": "記分板顯示每一次發球的速度,當它達到每小時兩百公里時球迷都歡呼了。"
  },
  {
    "word": "tiebreak",
    "pos": "n.",
    "cn_def": "搶七;決勝局",
    "en_def": "an extra game played to decide a winner when scores are equal",
    "sentence": "The match went to a {{BLANK}}, and one close line call decided who would win the whole tournament.",
    "cn": "這場比賽進入了搶七,而一個接近邊線的判決決定了誰會贏得整個錦標賽。"
  },
  {
    "word": "analytics",
    "pos": "n.",
    "cn_def": "數據分析",
    "en_def": "the study of data to find useful patterns",
    "sentence": "Teams now use {{BLANK}} to choose players, but some fans think numbers cannot measure a player's heart.",
    "cn": "球隊現在用數據分析來挑選球員,但有些球迷認為數字無法衡量一位球員的鬥志。"
  },
  {
    "word": "motion capture",
    "pos": "n.phr.",
    "cn_def": "動作捕捉",
    "en_def": "recording body movements with sensors to study them",
    "sentence": "The golfer trained with {{BLANK}}, so she could see on a screen exactly how her body moved during each swing.",
    "cn": "這位高爾夫球員使用動作捕捉訓練,所以她能在螢幕上清楚看到每次揮桿時身體如何移動。"
  },
  {
    "word": "esports",
    "pos": "n.",
    "cn_def": "電子競技",
    "en_def": "competitive video gaming watched by audiences",
    "sentence": "My cousin plays {{BLANK}} professionally, and millions of fans watch his matches online every weekend.",
    "cn": "我表哥以職業身分打電子競技,每個週末有數百萬名粉絲在網路上觀看他的比賽。"
  },
  {
    "word": "championship",
    "pos": "n.",
    "cn_def": "冠軍賽;錦標賽",
    "en_def": "a competition to find the best player or team",
    "sentence": "The robot dance {{BLANK}} was held in Taipei this year, and teams spent months preparing their routines.",
    "cn": "機器人舞蹈錦標賽今年在台北舉行,各隊花了好幾個月準備他們的表演。"
  },
  {
    "word": "sportsmanship",
    "pos": "n.",
    "cn_def": "運動家精神",
    "en_def": "fair and polite behaviour when playing sports",
    "sentence": "The young player showed great {{BLANK}} when he admitted the ball was out, although the camera had not seen it.",
    "cn": "這位年輕選手承認球出界了,展現了很好的運動家精神,雖然攝影機並沒有拍到。"
  }
];

const MCQS = [
  {
    "q": "The league is testing a robot _____ that calls balls and strikes, but some players say it takes the fun out of baseball.",
    "options": [
      "self-checkout",
      "machinery",
      "umpire",
      "pension"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The _____ checked the video screen before giving the goal, so the angry fans finally calmed down.",
    "options": [
      "monopoly",
      "referee",
      "agenda",
      "demise"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Many tennis tournaments no longer use a _____, because electronic cameras can call the lines more accurately.",
    "options": [
      "line judge",
      "heavy lifting",
      "care home",
      "quality control"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "My uncle used to _____ local football matches, but now he says the video system makes the job very different.",
    "options": [
      "halt",
      "reskill",
      "disinfect",
      "officiate"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The player was unhappy with the _____, but he accepted it after the replay showed the ball was out.",
    "options": [
      "ruling",
      "engineer",
      "android",
      "logistics"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The video referee decided to _____ the penalty, because the replay showed that the defender never touched the striker.",
    "options": [
      "manoeuvre",
      "mount",
      "redefine",
      "overturn"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The _____ showed that the runner was safe, so the umpire changed his call and the crowd cheered.",
    "options": [
      "logistics",
      "replay",
      "legacy",
      "ingredient"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "In _____, you can see the ball just touch the line, but it was impossible to see with the eye.",
    "options": [
      "job loss",
      "early adopter",
      "slow motion",
      "market share"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "_____ tells the referee within one second whether the ball went in, so there are fewer arguments after big matches.",
    "options": [
      "science fiction",
      "care home",
      "keyhole surgery",
      "goal-line technology"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The striker was _____ by only a few centimetres, but the computer lines showed it clearly and the goal was cancelled.",
    "options": [
      "humanlike",
      "offside",
      "costly",
      "lightweight"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The referee missed the _____ at first, but the video assistant told him to look at the screen again.",
    "options": [
      "foul",
      "parcel",
      "workstation",
      "autopilot"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Every batter has a slightly different _____, so the robot umpire must measure each player's height.",
    "options": [
      "robot vacuum",
      "keyhole surgery",
      "strike zone",
      "computer vision"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The _____ threw the ball very fast, and the robot umpire called it a strike before the crowd could even see it.",
    "options": [
      "pitcher",
      "upkeep",
      "limb",
      "pallet"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The _____ argued that the ball was too low, but the computer showed it had touched the edge of the zone.",
    "options": [
      "inception",
      "advancement",
      "batter",
      "vacancy"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Cameras around the tennis _____ track the ball at high speed, so players can challenge any call they disagree with.",
    "options": [
      "titanium",
      "court",
      "logistics",
      "mapping"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The two players had a forty-shot _____, and the crowd stood up to clap when it finally ended.",
    "options": [
      "forum",
      "cable",
      "joystick",
      "rally"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Every _____ in the stadium could see the replay on the big screen, so nobody doubted the referee's final decision.",
    "options": [
      "spectator",
      "appliance",
      "arena",
      "receptionist"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The new _____ has robots that deliver snacks to fans' seats, so nobody misses the action while queuing.",
    "options": [
      "vacancy",
      "tablet",
      "pallet",
      "stadium"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The robot football _____ attracted teams from twenty countries, and our school's team reached the final round.",
    "options": [
      "arena",
      "tournament",
      "forum",
      "adversary"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The baseball _____ plans to use electronic umpires next season, but the players' union wants more tests first.",
    "options": [
      "workweek",
      "operator",
      "league",
      "blueprint"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Wearable sensors tell each _____ how fast they are running, so coaches can plan better training sessions.",
    "options": [
      "pulley",
      "colleague",
      "proposition",
      "athlete"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Our _____ uses video software to study every match, and she shows us exactly where we made mistakes.",
    "options": [
      "waiter",
      "blueprint",
      "coach",
      "foothold"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The table tennis robot is a tireless _____, so players can practise for hours without needing a partner.",
    "options": [
      "distrust",
      "opponent",
      "inception",
      "craftsman"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The _____ showed the speed of every serve, and the fans cheered when it reached two hundred kilometres per hour.",
    "options": [
      "scoreboard",
      "dishwasher",
      "array",
      "engineer"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The match went to a _____, and one close line call decided who would win the whole tournament.",
    "options": [
      "android",
      "tiebreak",
      "chore",
      "lens"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Teams now use _____ to choose players, but some fans think numbers cannot measure a player's heart.",
    "options": [
      "analytics",
      "cashier",
      "friction",
      "incision"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The golfer trained with _____, so she could see on a screen exactly how her body moved during each swing.",
    "options": [
      "loading dock",
      "second nature",
      "motion capture",
      "smart home"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "My cousin plays _____ professionally, and millions of fans watch his matches online every weekend.",
    "options": [
      "currency",
      "patent",
      "showcase",
      "esports"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The robot dance _____ was held in Taipei this year, and teams spent months preparing their routines.",
    "options": [
      "ingredient",
      "technophobia",
      "championship",
      "GPS"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The young player showed great _____ when he admitted the ball was out, although the camera had not seen it.",
    "options": [
      "sportsmanship",
      "hurdle",
      "waiter",
      "bottleneck"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "umpire": {
    "pos": "n.",
    "en_def": "an official who makes decisions in tennis, cricket or baseball",
    "cn_def": "裁判(網球、棒球等)"
  },
  "referee": {
    "pos": "n.",
    "en_def": "an official who controls a football or basketball game",
    "cn_def": "裁判(足球、籃球等)"
  },
  "line judge": {
    "pos": "n.phr.",
    "en_def": "an official who decides if a ball is in or out",
    "cn_def": "司線員;邊線裁判"
  },
  "officiate": {
    "pos": "v.",
    "en_def": "to act as the official in charge of a game",
    "cn_def": "擔任裁判;主持"
  },
  "ruling": {
    "pos": "n.",
    "en_def": "an official decision",
    "cn_def": "裁決;判決"
  },
  "overturn": {
    "pos": "v.",
    "en_def": "to officially change a decision",
    "cn_def": "推翻;撤銷(判決)"
  },
  "replay": {
    "pos": "n.",
    "en_def": "a recording of part of a game shown again",
    "cn_def": "重播"
  },
  "slow motion": {
    "pos": "n.phr.",
    "en_def": "showing a video more slowly than real speed",
    "cn_def": "慢動作"
  },
  "goal-line technology": {
    "pos": "n.phr.",
    "en_def": "cameras that show whether a ball crossed the goal line",
    "cn_def": "門線技術"
  },
  "offside": {
    "pos": "adj.",
    "en_def": "in a position on the field that breaks the rules",
    "cn_def": "越位的"
  },
  "foul": {
    "pos": "n.",
    "en_def": "an action that breaks the rules of a game",
    "cn_def": "犯規"
  },
  "strike zone": {
    "pos": "n.phr.",
    "en_def": "the area over home plate where a pitch counts as a strike",
    "cn_def": "好球帶"
  },
  "pitcher": {
    "pos": "n.",
    "en_def": "the baseball player who throws the ball to the batter",
    "cn_def": "投手"
  },
  "batter": {
    "pos": "n.",
    "en_def": "the baseball player who tries to hit the ball",
    "cn_def": "打者"
  },
  "court": {
    "pos": "n.",
    "en_def": "an area marked for playing tennis or basketball",
    "cn_def": "球場(網球、籃球等)"
  },
  "rally": {
    "pos": "n.",
    "en_def": "a long series of hits in tennis or badminton",
    "cn_def": "(網球等)來回對打"
  },
  "spectator": {
    "pos": "n.",
    "en_def": "a person who watches a sports event",
    "cn_def": "觀眾"
  },
  "stadium": {
    "pos": "n.",
    "en_def": "a large sports ground with seats around it",
    "cn_def": "體育場"
  },
  "tournament": {
    "pos": "n.",
    "en_def": "a sports competition with many games or rounds",
    "cn_def": "錦標賽;聯賽"
  },
  "league": {
    "pos": "n.",
    "en_def": "a group of teams that play against each other",
    "cn_def": "聯盟"
  },
  "athlete": {
    "pos": "n.",
    "en_def": "a person who is good at sports and trains hard",
    "cn_def": "運動員"
  },
  "coach": {
    "pos": "n.",
    "en_def": "a person who trains a sports team or player",
    "cn_def": "教練"
  },
  "opponent": {
    "pos": "n.",
    "en_def": "the person or team you play against",
    "cn_def": "對手"
  },
  "scoreboard": {
    "pos": "n.",
    "en_def": "a large board showing the score of a game",
    "cn_def": "記分板"
  },
  "tiebreak": {
    "pos": "n.",
    "en_def": "an extra game played to decide a winner when scores are equal",
    "cn_def": "搶七;決勝局"
  },
  "analytics": {
    "pos": "n.",
    "en_def": "the study of data to find useful patterns",
    "cn_def": "數據分析"
  },
  "motion capture": {
    "pos": "n.phr.",
    "en_def": "recording body movements with sensors to study them",
    "cn_def": "動作捕捉"
  },
  "esports": {
    "pos": "n.",
    "en_def": "competitive video gaming watched by audiences",
    "cn_def": "電子競技"
  },
  "championship": {
    "pos": "n.",
    "en_def": "a competition to find the best player or team",
    "cn_def": "冠軍賽;錦標賽"
  },
  "sportsmanship": {
    "pos": "n.",
    "en_def": "fair and polite behaviour when playing sports",
    "cn_def": "運動家精神"
  },
  "self-checkout": {
    "pos": "n.",
    "en_def": "a machine where shoppers pay without a cashier",
    "cn_def": "自助結帳機"
  },
  "machinery": {
    "pos": "n.",
    "en_def": "machines in general, especially large ones",
    "cn_def": "機械;機器(總稱)"
  },
  "pension": {
    "pos": "n.",
    "en_def": "money paid regularly to people after they stop working",
    "cn_def": "退休金;養老金"
  },
  "monopoly": {
    "pos": "n.",
    "en_def": "complete control of a market by one company",
    "cn_def": "壟斷;獨占"
  },
  "agenda": {
    "pos": "n.",
    "en_def": "a list of things to discuss or plans to carry out",
    "cn_def": "議程;待辦事項"
  },
  "demise": {
    "pos": "n.",
    "en_def": "the end or failure of something",
    "cn_def": "消亡;倒閉"
  },
  "heavy lifting": {
    "pos": "n.phr.",
    "en_def": "the work of picking up and moving heavy things",
    "cn_def": "搬運重物;粗重工作"
  },
  "care home": {
    "pos": "n.phr.",
    "en_def": "a place where old people live and are looked after",
    "cn_def": "安養院;養護中心"
  },
  "quality control": {
    "pos": "n.phr.",
    "en_def": "checking that products are made correctly",
    "cn_def": "品質管制;品管"
  },
  "halt": {
    "pos": "v.",
    "en_def": "to stop something completely",
    "cn_def": "停止;中止"
  },
  "reskill": {
    "pos": "v.",
    "en_def": "to learn new skills for a different job",
    "cn_def": "再培訓;學習新技能"
  },
  "disinfect": {
    "pos": "v.",
    "en_def": "to clean something to kill germs",
    "cn_def": "消毒"
  },
  "engineer": {
    "pos": "n.",
    "en_def": "a person who designs and builds machines",
    "cn_def": "工程師"
  },
  "android": {
    "pos": "n.",
    "en_def": "a robot made to look very much like a human",
    "cn_def": "仿生人;擬真機器人"
  },
  "logistics": {
    "pos": "n.",
    "en_def": "organising how goods are stored and moved",
    "cn_def": "物流"
  },
  "manoeuvre": {
    "pos": "v.",
    "en_def": "to move something carefully through a difficult space",
    "cn_def": "(靈活)操控;移動"
  },
  "mount": {
    "pos": "v.",
    "en_def": "to fix something onto a wall, stand or vehicle",
    "cn_def": "安裝;架設"
  },
  "redefine": {
    "pos": "v.",
    "en_def": "to change the meaning or nature of something",
    "cn_def": "重新定義"
  },
  "legacy": {
    "pos": "n.",
    "en_def": "something left behind from the past that still has effects",
    "cn_def": "遺產;遺留影響"
  },
  "ingredient": {
    "pos": "n.",
    "en_def": "one of the things needed to make something successful",
    "cn_def": "要素;成分"
  },
  "job loss": {
    "pos": "n.phr.",
    "en_def": "when people lose their jobs",
    "cn_def": "失業;工作流失"
  },
  "early adopter": {
    "pos": "n.phr.",
    "en_def": "a person who uses new technology as soon as it appears",
    "cn_def": "早期使用者;嘗鮮者"
  },
  "market share": {
    "pos": "n.phr.",
    "en_def": "the part of total sales a company has",
    "cn_def": "市占率"
  },
  "science fiction": {
    "pos": "n.phr.",
    "en_def": "stories about imagined future science and technology",
    "cn_def": "科幻小說;科幻作品"
  },
  "keyhole surgery": {
    "pos": "n.phr.",
    "en_def": "an operation done through very small cuts",
    "cn_def": "微創手術;內視鏡手術"
  },
  "humanlike": {
    "pos": "adj.",
    "en_def": "similar to a human in looks or behaviour",
    "cn_def": "像人類的;擬人的"
  },
  "costly": {
    "pos": "adj.",
    "en_def": "expensive; causing loss or damage",
    "cn_def": "昂貴的;代價高的"
  },
  "lightweight": {
    "pos": "adj.",
    "en_def": "not heavy; easy to carry",
    "cn_def": "輕量的;重量輕的"
  },
  "parcel": {
    "pos": "n.",
    "en_def": "a package sent by post or delivery",
    "cn_def": "包裹"
  },
  "workstation": {
    "pos": "n.",
    "en_def": "the place where a worker or machine does a job",
    "cn_def": "工作站;工作台"
  },
  "autopilot": {
    "pos": "n.",
    "en_def": "a system that flies a plane or drives a car automatically",
    "cn_def": "自動駕駛(系統)"
  },
  "robot vacuum": {
    "pos": "n.phr.",
    "en_def": "a small machine that cleans floors by itself",
    "cn_def": "掃地機器人"
  },
  "computer vision": {
    "pos": "n.phr.",
    "en_def": "technology that lets computers understand images",
    "cn_def": "電腦視覺"
  },
  "upkeep": {
    "pos": "n.",
    "en_def": "the cost or work of keeping something in good condition",
    "cn_def": "維護(費用);保養"
  },
  "limb": {
    "pos": "n.",
    "en_def": "an arm or a leg",
    "cn_def": "肢體;四肢"
  },
  "pallet": {
    "pos": "n.",
    "en_def": "a flat wooden frame that goods are stacked on",
    "cn_def": "棧板;貨板"
  },
  "inception": {
    "pos": "n.",
    "en_def": "the start of an organisation or activity",
    "cn_def": "開端;創立"
  },
  "advancement": {
    "pos": "n.",
    "en_def": "progress or development in something",
    "cn_def": "進步;發展"
  },
  "vacancy": {
    "pos": "n.",
    "en_def": "a job that is available for someone to do",
    "cn_def": "職缺"
  },
  "titanium": {
    "pos": "n.",
    "en_def": "a strong, light, silver-coloured metal",
    "cn_def": "鈦"
  },
  "mapping": {
    "pos": "n.",
    "en_def": "making a map or plan of an area",
    "cn_def": "製圖;建立地圖"
  },
  "forum": {
    "pos": "n.",
    "en_def": "a meeting or website where people discuss ideas",
    "cn_def": "論壇"
  },
  "cable": {
    "pos": "n.",
    "en_def": "a thick wire that carries electricity or signals",
    "cn_def": "電纜;纜線"
  },
  "joystick": {
    "pos": "n.",
    "en_def": "a stick you move to control a machine or game",
    "cn_def": "搖桿;操縱桿"
  },
  "appliance": {
    "pos": "n.",
    "en_def": "a machine used in the home, like a fridge",
    "cn_def": "家電;家用電器"
  },
  "arena": {
    "pos": "n.",
    "en_def": "a large place for sports or shows; an area of activity",
    "cn_def": "競技場;舞台(領域)"
  },
  "receptionist": {
    "pos": "n.",
    "en_def": "a person who greets visitors at a front desk",
    "cn_def": "接待員;櫃台人員"
  },
  "tablet": {
    "pos": "n.",
    "en_def": "a small flat computer with a touchscreen",
    "cn_def": "平板電腦"
  },
  "adversary": {
    "pos": "n.",
    "en_def": "an enemy or opponent",
    "cn_def": "對手;敵手"
  },
  "workweek": {
    "pos": "n.",
    "en_def": "the number of hours or days people work each week",
    "cn_def": "工作週;每週工時"
  },
  "operator": {
    "pos": "n.",
    "en_def": "a person who controls a machine",
    "cn_def": "操作員"
  },
  "blueprint": {
    "pos": "n.",
    "en_def": "a detailed plan or drawing for building something",
    "cn_def": "藍圖;設計圖"
  },
  "pulley": {
    "pos": "n.",
    "en_def": "a wheel with a rope used to lift things",
    "cn_def": "滑輪"
  },
  "colleague": {
    "pos": "n.",
    "en_def": "a person you work with",
    "cn_def": "同事"
  },
  "proposition": {
    "pos": "n.",
    "en_def": "an idea, offer or plan to consider",
    "cn_def": "提議;主張"
  },
  "waiter": {
    "pos": "n.",
    "en_def": "a person who serves food in a restaurant",
    "cn_def": "服務生"
  },
  "foothold": {
    "pos": "n.",
    "en_def": "a secure position from which to make progress",
    "cn_def": "立足點;據點"
  },
  "distrust": {
    "pos": "n.",
    "en_def": "a feeling that you cannot trust someone or something",
    "cn_def": "不信任"
  },
  "craftsman": {
    "pos": "n.",
    "en_def": "a skilled person who makes things by hand",
    "cn_def": "工匠;手藝人"
  },
  "dishwasher": {
    "pos": "n.",
    "en_def": "a machine that washes plates and cups",
    "cn_def": "洗碗機"
  },
  "array": {
    "pos": "n.",
    "en_def": "a large group or range of things",
    "cn_def": "一系列;大量"
  },
  "chore": {
    "pos": "n.",
    "en_def": "a small, regular job in the house",
    "cn_def": "家事;雜務"
  },
  "lens": {
    "pos": "n.",
    "en_def": "curved glass that helps a camera see clearly",
    "cn_def": "鏡頭;透鏡"
  },
  "cashier": {
    "pos": "n.",
    "en_def": "a person who takes money in a shop",
    "cn_def": "收銀員"
  },
  "friction": {
    "pos": "n.",
    "en_def": "disagreement between people; or rubbing between surfaces",
    "cn_def": "摩擦;衝突"
  },
  "incision": {
    "pos": "n.",
    "en_def": "a cut made into the body during an operation",
    "cn_def": "切口"
  },
  "loading dock": {
    "pos": "n.phr.",
    "en_def": "the place where trucks are filled or emptied",
    "cn_def": "裝卸區;卸貨平台"
  },
  "second nature": {
    "pos": "n.phr.",
    "en_def": "something you do easily without thinking",
    "cn_def": "第二天性;習以為常"
  },
  "smart home": {
    "pos": "n.phr.",
    "en_def": "a house where devices are controlled by the internet",
    "cn_def": "智慧家庭;智慧住宅"
  },
  "currency": {
    "pos": "n.",
    "en_def": "the money used in a country",
    "cn_def": "貨幣"
  },
  "patent": {
    "pos": "n.",
    "en_def": "an official right to be the only one to make an invention",
    "cn_def": "專利"
  },
  "showcase": {
    "pos": "n.",
    "en_def": "an event that shows the best qualities of something",
    "cn_def": "展示會;展示的機會"
  },
  "technophobia": {
    "pos": "n.",
    "en_def": "fear or dislike of new technology",
    "cn_def": "科技恐懼症"
  },
  "gps": {
    "pos": "n.",
    "en_def": "a system that uses satellites to show your location",
    "cn_def": "全球定位系統"
  },
  "hurdle": {
    "pos": "n.",
    "en_def": "a problem you must solve before you can make progress",
    "cn_def": "障礙;難關"
  },
  "bottleneck": {
    "pos": "n.",
    "en_def": "a point where things slow down and cause delays",
    "cn_def": "瓶頸"
  }
};

const EXTRA_GLOSSES = {};
