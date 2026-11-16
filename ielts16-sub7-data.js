// Topic 16 Subunit 7 Quiz Data: Sport Psychology, Fair Play & Society 運動心理、公平競賽與社會
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T16 S07 - Sport Psychology, Fair Play & Society 運動心理、公平競賽與社會",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "mental toughness",
    "pos": "n.phr.",
    "cn_def": "心理韌性",
    "en_def": "the ability to stay strong when things get hard",
    "sentence": "{{BLANK}} separates good players from great ones, because everyone can play well when the score is comfortable.",
    "cn": "心理韌性區分了優秀與偉大的球員，因為在分數安全時每個人都能打得好。"
  },
  {
    "word": "mental imagery",
    "pos": "n.phr.",
    "cn_def": "心像；心理想像",
    "en_def": "picturing a perfect performance in your mind",
    "sentence": "She uses {{BLANK}} before every jump, so she pictures a perfect landing while she waits for her turn.",
    "cn": "她在每次跳躍前都使用心像練習，所以她等待輪到自己時會想像完美的落地。"
  },
  {
    "word": "self-talk",
    "pos": "n.",
    "cn_def": "自我對話",
    "en_def": "the words you say to yourself in your head",
    "sentence": "Positive {{BLANK}} helped him through the last kilometre, because he kept repeating that he had trained for this moment.",
    "cn": "正面的自我對話幫助他撐過最後一公里，因為他不斷重複說自己為這一刻訓練過。"
  },
  {
    "word": "composure",
    "pos": "n.",
    "cn_def": "沉著；冷靜",
    "en_def": "the ability to stay calm under pressure",
    "sentence": "The young striker showed great {{BLANK}} in front of goal, and he scored while three defenders were running at him.",
    "cn": "那位年輕前鋒在球門前展現了極佳的沉著，而他在三名後衛衝向他時進了球。"
  },
  {
    "word": "morale",
    "pos": "n.",
    "cn_def": "士氣",
    "en_def": "the level of confidence and hope in a group",
    "sentence": "Team {{BLANK}} dropped after four defeats, so the coach organised a barbecue and let the players simply enjoy themselves.",
    "cn": "四連敗後球隊士氣低落，所以教練辦了一場烤肉，讓球員單純放鬆享受。"
  },
  {
    "word": "team spirit",
    "pos": "n.phr.",
    "cn_def": "團隊精神",
    "en_def": "a feeling of loyalty and friendship within a team",
    "sentence": "Our {{BLANK}} is the reason we keep winning, because every player works hard for the person beside them.",
    "cn": "我們的團隊精神是我們持續獲勝的原因，因為每位球員都為身旁的隊友努力。"
  },
  {
    "word": "doping",
    "pos": "n.",
    "cn_def": "使用禁藥",
    "en_def": "the illegal use of drugs to improve sports performance",
    "sentence": "{{BLANK}} ruined the sport's reputation in the 1990s, and it took many years to win back the public's trust.",
    "cn": "1990年代使用禁藥毀了這項運動的名聲，而要贏回大眾的信任花了很多年。"
  },
  {
    "word": "drug test",
    "pos": "n.phr.",
    "cn_def": "藥檢",
    "en_def": "an examination to find out whether an athlete has taken banned drugs",
    "sentence": "Every medallist must take a {{BLANK}} immediately, so officials wait outside the changing room after each final.",
    "cn": "每位獎牌得主都必須立刻接受藥檢，所以官員在每場決賽後都在更衣室外等候。"
  },
  {
    "word": "performance-enhancing",
    "pos": "adj.",
    "cn_def": "提升表現的",
    "en_def": "making an athlete stronger or faster, often illegally",
    "sentence": "He was found with {{BLANK}} drugs in his bag, so the federation removed his results from the record books.",
    "cn": "有人在他的包裡發現提升運動表現的藥物，所以聯盟把他的成績從紀錄中刪除。"
  },
  {
    "word": "banned substance",
    "pos": "n.phr.",
    "cn_def": "禁用物質",
    "en_def": "a drug that athletes are not allowed to use",
    "sentence": "Her cold medicine contained a {{BLANK}}, so she now checks every tablet with the team doctor first.",
    "cn": "她的感冒藥含有禁用物質，所以她現在每顆藥都先請隊醫確認。"
  },
  {
    "word": "steroid",
    "pos": "n.",
    "cn_def": "類固醇",
    "en_def": "a drug that builds muscle quickly but harms health",
    "sentence": "Taking a {{BLANK}} may add muscle fast, but it can damage the heart and liver within a few years.",
    "cn": "服用類固醇可能快速增加肌肉，但它可能在幾年內損害心臟和肝臟。"
  },
  {
    "word": "disqualify",
    "pos": "v.",
    "cn_def": "取消資格",
    "en_def": "to stop someone from taking part because of a rule break",
    "sentence": "The judges had to {{BLANK}} him for stepping outside his lane, even though he had crossed the line first.",
    "cn": "裁判必須因為他跨出跑道而取消他的資格，儘管他是第一個通過終點線的。"
  },
  {
    "word": "fair play",
    "pos": "n.phr.",
    "cn_def": "公平競賽；運動家精神",
    "en_def": "honest and respectful behaviour in sport",
    "sentence": "He kicked the ball back to the other team after the injury, and the crowd applauded his sense of {{BLANK}}.",
    "cn": "受傷事件後他把球踢回給對方球隊，而觀眾為他的運動家精神鼓掌。"
  },
  {
    "word": "match-fixing",
    "pos": "n.",
    "cn_def": "作假比賽；打假球",
    "en_def": "arranging the result of a game dishonestly",
    "sentence": "Two players were jailed for {{BLANK}}, and the league now trains every young professional about the risks.",
    "cn": "兩名球員因打假球入獄，而聯盟現在會對每位年輕職業選手宣導其風險。"
  },
  {
    "word": "grassroots",
    "pos": "adj.",
    "cn_def": "基層的",
    "en_def": "happening at a local, ordinary level",
    "sentence": "{{BLANK}} sport needs more funding, because children in small towns often have no safe place to play.",
    "cn": "基層運動需要更多經費，因為小鎮的孩子往往沒有安全的地方可以運動。"
  },
  {
    "word": "scout",
    "pos": "n.",
    "cn_def": "球探",
    "en_def": "a person who looks for talented young players",
    "sentence": "A {{BLANK}} from a professional club watched our school match, and he spoke to two of our defenders afterwards.",
    "cn": "一位職業俱樂部的球探觀看了我們學校的比賽，而他之後找了我們兩名後衛談話。"
  },
  {
    "word": "youth academy",
    "pos": "n.phr.",
    "cn_def": "青訓學院",
    "en_def": "a school run by a club to train young players",
    "sentence": "He joined the club's {{BLANK}} at thirteen, so he studied in the morning and trained every afternoon.",
    "cn": "他十三歲就加入俱樂部的青訓學院，所以他早上讀書，每天下午訓練。"
  },
  {
    "word": "talent identification",
    "pos": "n.phr.",
    "cn_def": "選才；人才發掘",
    "en_def": "the process of finding young people with ability",
    "sentence": "Good {{BLANK}} looks at more than size and speed, because attitude and learning ability matter just as much.",
    "cn": "良好的選才看的不只是身材和速度，因為態度和學習能力同樣重要。"
  },
  {
    "word": "para-athlete",
    "pos": "n.",
    "cn_def": "帕拉運動員",
    "en_def": "an athlete with a disability who competes in adapted sport",
    "sentence": "The {{BLANK}} swam the 100 metres faster than most people can run it, and the stadium rose to its feet.",
    "cn": "那位帕拉運動員游完一百公尺的時間比大多數人跑的還快，而全場觀眾起立致敬。"
  },
  {
    "word": "Paralympics",
    "pos": "n.",
    "cn_def": "帕拉林匹克運動會",
    "en_def": "the international sports competition for athletes with disabilities",
    "sentence": "The {{BLANK}} now attracts millions of viewers, and many of its stars have become household names at home.",
    "cn": "帕拉林匹克運動會現在吸引數百萬觀眾，而它的許多明星已成為國內家喻戶曉的名字。"
  },
  {
    "word": "gender gap",
    "pos": "n.phr.",
    "cn_def": "性別差距",
    "en_def": "an unfair difference between men and women",
    "sentence": "There is still a {{BLANK}} in sports coverage, because women's matches receive far less television time.",
    "cn": "運動報導上仍存在性別差距，因為女性賽事獲得的電視時段少得多。"
  },
  {
    "word": "physical education",
    "pos": "n.phr.",
    "cn_def": "體育（課）",
    "en_def": "the school subject in which students exercise and play sport",
    "sentence": "{{BLANK}} should be fun for everyone, because children who enjoy moving are far more likely to stay active as adults.",
    "cn": "體育課應該讓每個人都覺得有趣，因為喜歡活動的孩子長大後更可能保持運動習慣。"
  },
  {
    "word": "spectator sport",
    "pos": "n.phr.",
    "cn_def": "觀賞性運動",
    "en_def": "a sport that many people enjoy watching",
    "sentence": "Baseball is the biggest {{BLANK}} in Taiwan, and families often spend a whole evening at the ballpark together.",
    "cn": "棒球是台灣最大的觀賞性運動，而家庭常常一整個晚上都在球場一起度過。"
  },
  {
    "word": "sports science",
    "pos": "n.phr.",
    "cn_def": "運動科學",
    "en_def": "the study of the body and mind in sport",
    "sentence": "She studies {{BLANK}} at university, and her dream is to work with a national team at the Olympics.",
    "cn": "她在大學念運動科學，而她的夢想是在奧運與國家隊共事。"
  },
  {
    "word": "work ethic",
    "pos": "n.phr.",
    "cn_def": "工作態度；努力的習慣",
    "en_def": "the habit of working hard and seriously",
    "sentence": "His {{BLANK}} impressed the coaches more than his talent, because he was always the first to arrive at training.",
    "cn": "他的努力態度比他的天賦更令教練印象深刻，因為他總是第一個到訓練場。"
  },
  {
    "word": "pep talk",
    "pos": "n.phr.",
    "cn_def": "激勵講話",
    "en_def": "a short encouraging speech before or during a match",
    "sentence": "The coach gave a quiet {{BLANK}} at half-time, and the players walked out looking far more confident.",
    "cn": "教練在中場休息時做了一段平靜的激勵講話，而球員走出場時看起來自信多了。"
  },
  {
    "word": "gamesmanship",
    "pos": "n.",
    "cn_def": "耍小手段",
    "en_def": "the use of unfair tricks that are not quite against the rules",
    "sentence": "Wasting time at the end of a match is {{BLANK}}, and most supporters dislike it even when their own team does it.",
    "cn": "比賽尾聲拖延時間是一種耍小手段，而大多數球迷即使是自己球隊這麼做也不喜歡。"
  },
  {
    "word": "athleticism",
    "pos": "n.",
    "cn_def": "運動能力",
    "en_def": "natural physical skill, strength and speed",
    "sentence": "Her {{BLANK}} amazed the scouts, but she still spent two seasons learning the tactics of the professional game.",
    "cn": "她的運動能力讓球探驚嘆，但她仍花了兩個球季學習職業賽的戰術。"
  }
];

const MCQS = [
  {
    "q": "_____ separates good players from great ones, because everyone can play well when the score is comfortable.",
    "options": [
      "mental toughness",
      "working hypothesis",
      "best practice",
      "key finding"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "She uses _____ before every jump, so she pictures a perfect landing while she waits for her turn.",
    "options": [
      "shin splints",
      "mental imagery",
      "sample size",
      "home advantage"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Positive _____ helped him through the last kilometre, because he kept repeating that he had trained for this moment.",
    "options": [
      "warm-up",
      "biceps",
      "self-talk",
      "blister"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The young striker showed great _____ in front of goal, and he scored while three defenders were running at him.",
    "options": [
      "squad",
      "swelling",
      "mouthguard",
      "composure"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Team _____ dropped after four defeats, so the coach organised a barbecue and let the players simply enjoy themselves.",
    "options": [
      "rookie",
      "morale",
      "proxy",
      "optimisation"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Our _____ is the reason we keep winning, because every player works hard for the person beside them.",
    "options": [
      "ice pack",
      "personal best",
      "team spirit",
      "centre of gravity"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "_____ ruined the sport's reputation in the 1990s, and it took many years to win back the public's trust.",
    "options": [
      "doping",
      "pedometer",
      "debut",
      "goggles"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Every medallist must take a _____ immediately, so officials wait outside the changing room after each final.",
    "options": [
      "home advantage",
      "knock-on effect",
      "raw data",
      "drug test"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "He was found with _____ drugs in his bag, so the federation removed his results from the record books.",
    "options": [
      "unavoidable",
      "predictive",
      "performance-enhancing",
      "wide-ranging"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Her cold medicine contained a _____, so she now checks every tablet with the team doctor first.",
    "options": [
      "banned substance",
      "the home stretch",
      "world record",
      "high-speed camera"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Taking a _____ may add muscle fast, but it can damage the heart and liver within a few years.",
    "options": [
      "subtlety",
      "steroid",
      "creatine",
      "endurance"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The judges had to _____ him for stepping outside his lane, even though he had crossed the line first.",
    "options": [
      "fine-tune",
      "penalise",
      "dislocate",
      "disqualify"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "He kicked the ball back to the other team after the injury, and the crowd applauded his sense of _____.",
    "options": [
      "fair play",
      "trend line",
      "data point",
      "sports medicine"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Two players were jailed for _____, and the league now trains every young professional about the risks.",
    "options": [
      "cardio",
      "match-fixing",
      "ankle",
      "oxygen"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "_____ sport needs more funding, because children in small towns often have no safe place to play.",
    "options": [
      "data-driven",
      "transferable",
      "grassroots",
      "reasoned"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "A _____ from a professional club watched our school match, and he spoke to two of our defenders afterwards.",
    "options": [
      "push-up",
      "periphery",
      "haemoglobin",
      "scout"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "He joined the club's _____ at thirteen, so he studied in the morning and trained every afternoon.",
    "options": [
      "high-speed camera",
      "case study",
      "youth academy",
      "sports medicine"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Good _____ looks at more than size and speed, because attitude and learning ability matter just as much.",
    "options": [
      "talent identification",
      "force plate",
      "team doctor",
      "centre of gravity"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The _____ swam the 100 metres faster than most people can run it, and the stadium rose to its feet.",
    "options": [
      "gait",
      "para-athlete",
      "appraisal",
      "stewardship"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The _____ now attracts millions of viewers, and many of its stars have become household names at home.",
    "options": [
      "exemption",
      "anti-inflammatory",
      "barbell",
      "Paralympics"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "There is still a _____ in sports coverage, because women's matches receive far less television time.",
    "options": [
      "technical suit",
      "line of reasoning",
      "gender gap",
      "prize money"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "_____ should be fun for everyone, because children who enjoy moving are far more likely to stay active as adults.",
    "options": [
      "compression garment",
      "physical education",
      "time frame",
      "personal trainer"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Baseball is the biggest _____ in Taiwan, and families often spend a whole evening at the ballpark together.",
    "options": [
      "false positive",
      "heart-rate monitor",
      "energy bar",
      "spectator sport"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "She studies _____ at university, and her dream is to work with a national team at the Olympics.",
    "options": [
      "sports science",
      "world record",
      "penalty shoot-out",
      "shin pad"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "His _____ impressed the coaches more than his talent, because he was always the first to arrive at training.",
    "options": [
      "sports medicine",
      "sports drink",
      "team doctor",
      "work ethic"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The coach gave a quiet _____ at half-time, and the players walked out looking far more confident.",
    "options": [
      "lactic acid",
      "raw data",
      "pep talk",
      "wind tunnel"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Wasting time at the end of a match is _____, and most supporters dislike it even when their own team does it.",
    "options": [
      "gamesmanship",
      "regimen",
      "haemoglobin",
      "specification"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Her _____ amazed the scouts, but she still spent two seasons learning the tactics of the professional game.",
    "options": [
      "rejection",
      "athleticism",
      "physiotherapist",
      "antipathy"
    ],
    "answer": 1,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "mental toughness": {
    "pos": "n.phr.",
    "en_def": "the ability to stay strong when things get hard",
    "cn_def": "心理韌性"
  },
  "mental imagery": {
    "pos": "n.phr.",
    "en_def": "picturing a perfect performance in your mind",
    "cn_def": "心像；心理想像"
  },
  "self-talk": {
    "pos": "n.",
    "en_def": "the words you say to yourself in your head",
    "cn_def": "自我對話"
  },
  "composure": {
    "pos": "n.",
    "en_def": "the ability to stay calm under pressure",
    "cn_def": "沉著；冷靜"
  },
  "morale": {
    "pos": "n.",
    "en_def": "the level of confidence and hope in a group",
    "cn_def": "士氣"
  },
  "team spirit": {
    "pos": "n.phr.",
    "en_def": "a feeling of loyalty and friendship within a team",
    "cn_def": "團隊精神"
  },
  "doping": {
    "pos": "n.",
    "en_def": "the illegal use of drugs to improve sports performance",
    "cn_def": "使用禁藥"
  },
  "drug test": {
    "pos": "n.phr.",
    "en_def": "an examination to find out whether an athlete has taken banned drugs",
    "cn_def": "藥檢"
  },
  "performance-enhancing": {
    "pos": "adj.",
    "en_def": "making an athlete stronger or faster, often illegally",
    "cn_def": "提升表現的"
  },
  "banned substance": {
    "pos": "n.phr.",
    "en_def": "a drug that athletes are not allowed to use",
    "cn_def": "禁用物質"
  },
  "steroid": {
    "pos": "n.",
    "en_def": "a drug that builds muscle quickly but harms health",
    "cn_def": "類固醇"
  },
  "disqualify": {
    "pos": "v.",
    "en_def": "to stop someone from taking part because of a rule break",
    "cn_def": "取消資格"
  },
  "fair play": {
    "pos": "n.phr.",
    "en_def": "honest and respectful behaviour in sport",
    "cn_def": "公平競賽；運動家精神"
  },
  "match-fixing": {
    "pos": "n.",
    "en_def": "arranging the result of a game dishonestly",
    "cn_def": "作假比賽；打假球"
  },
  "grassroots": {
    "pos": "adj.",
    "en_def": "happening at a local, ordinary level",
    "cn_def": "基層的"
  },
  "scout": {
    "pos": "n.",
    "en_def": "a person who looks for talented young players",
    "cn_def": "球探"
  },
  "youth academy": {
    "pos": "n.phr.",
    "en_def": "a school run by a club to train young players",
    "cn_def": "青訓學院"
  },
  "talent identification": {
    "pos": "n.phr.",
    "en_def": "the process of finding young people with ability",
    "cn_def": "選才；人才發掘"
  },
  "para-athlete": {
    "pos": "n.",
    "en_def": "an athlete with a disability who competes in adapted sport",
    "cn_def": "帕拉運動員"
  },
  "paralympics": {
    "pos": "n.",
    "en_def": "the international sports competition for athletes with disabilities",
    "cn_def": "帕拉林匹克運動會"
  },
  "gender gap": {
    "pos": "n.phr.",
    "en_def": "an unfair difference between men and women",
    "cn_def": "性別差距"
  },
  "physical education": {
    "pos": "n.phr.",
    "en_def": "the school subject in which students exercise and play sport",
    "cn_def": "體育（課）"
  },
  "spectator sport": {
    "pos": "n.phr.",
    "en_def": "a sport that many people enjoy watching",
    "cn_def": "觀賞性運動"
  },
  "sports science": {
    "pos": "n.phr.",
    "en_def": "the study of the body and mind in sport",
    "cn_def": "運動科學"
  },
  "work ethic": {
    "pos": "n.phr.",
    "en_def": "the habit of working hard and seriously",
    "cn_def": "工作態度；努力的習慣"
  },
  "pep talk": {
    "pos": "n.phr.",
    "en_def": "a short encouraging speech before or during a match",
    "cn_def": "激勵講話"
  },
  "gamesmanship": {
    "pos": "n.",
    "en_def": "the use of unfair tricks that are not quite against the rules",
    "cn_def": "耍小手段"
  },
  "athleticism": {
    "pos": "n.",
    "en_def": "natural physical skill, strength and speed",
    "cn_def": "運動能力"
  },
  "working hypothesis": {
    "pos": "n.phr.",
    "en_def": "an idea used as a starting point for research",
    "cn_def": "工作假設"
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
  "shin splints": {
    "pos": "n.phr.",
    "en_def": "pain along the front of the lower leg from running",
    "cn_def": "脛前疼痛"
  },
  "sample size": {
    "pos": "n.phr.",
    "en_def": "the number of people or things studied",
    "cn_def": "樣本數"
  },
  "home advantage": {
    "pos": "n.phr.",
    "en_def": "the benefit of playing in your own stadium",
    "cn_def": "主場優勢"
  },
  "warm-up": {
    "pos": "n.",
    "en_def": "gentle exercise you do before hard exercise",
    "cn_def": "熱身"
  },
  "biceps": {
    "pos": "n.",
    "en_def": "the muscle at the front of the upper arm",
    "cn_def": "二頭肌"
  },
  "blister": {
    "pos": "n.",
    "en_def": "a small painful bubble of skin, often from rubbing",
    "cn_def": "水泡"
  },
  "squad": {
    "pos": "n.",
    "en_def": "the whole group of players a team can choose from",
    "cn_def": "球隊名單；隊伍"
  },
  "swelling": {
    "pos": "n.",
    "en_def": "the state of a body part becoming larger because of injury",
    "cn_def": "腫脹"
  },
  "mouthguard": {
    "pos": "n.",
    "en_def": "a soft plastic shield worn to protect the teeth",
    "cn_def": "護齒套"
  },
  "rookie": {
    "pos": "n.",
    "en_def": "a player in their first season",
    "cn_def": "新人；菜鳥"
  },
  "proxy": {
    "pos": "n.",
    "en_def": "something used to represent or measure another thing",
    "cn_def": "替代指標"
  },
  "optimisation": {
    "pos": "n.",
    "en_def": "the act of making something as good as possible",
    "cn_def": "最佳化"
  },
  "ice pack": {
    "pos": "n.phr.",
    "en_def": "a cold bag put on an injury to reduce swelling",
    "cn_def": "冰敷袋"
  },
  "personal best": {
    "pos": "n.phr.",
    "en_def": "your own fastest or highest result so far",
    "cn_def": "個人最佳成績"
  },
  "centre of gravity": {
    "pos": "n.phr.",
    "en_def": "the point where the weight of a body is balanced",
    "cn_def": "重心"
  },
  "pedometer": {
    "pos": "n.",
    "en_def": "a device that counts how many steps you take",
    "cn_def": "計步器"
  },
  "debut": {
    "pos": "n.",
    "en_def": "a player's first appearance for a team",
    "cn_def": "初次登場"
  },
  "goggles": {
    "pos": "n.",
    "en_def": "special glasses that protect the eyes",
    "cn_def": "蛙鏡；護目鏡"
  },
  "knock-on effect": {
    "pos": "n.phr.",
    "en_def": "an indirect result that follows something else",
    "cn_def": "連帶影響"
  },
  "raw data": {
    "pos": "n.phr.",
    "en_def": "information collected before it has been organised",
    "cn_def": "原始資料"
  },
  "unavoidable": {
    "pos": "adj.",
    "en_def": "impossible to prevent",
    "cn_def": "無法避免的"
  },
  "predictive": {
    "pos": "adj.",
    "en_def": "able to show what will probably happen",
    "cn_def": "有預測力的"
  },
  "wide-ranging": {
    "pos": "adj.",
    "en_def": "covering many different subjects",
    "cn_def": "範圍廣泛的"
  },
  "the home stretch": {
    "pos": "n.phr.",
    "en_def": "the last part of a race or task",
    "cn_def": "最後階段"
  },
  "world record": {
    "pos": "n.phr.",
    "en_def": "the best result ever achieved in the world",
    "cn_def": "世界紀錄"
  },
  "high-speed camera": {
    "pos": "n.phr.",
    "en_def": "a camera that records very fast movement in detail",
    "cn_def": "高速攝影機"
  },
  "subtlety": {
    "pos": "n.",
    "en_def": "a small detail that is not easy to notice",
    "cn_def": "細微之處"
  },
  "creatine": {
    "pos": "n.",
    "en_def": "a natural substance taken to help with short, powerful exercise",
    "cn_def": "肌酸"
  },
  "endurance": {
    "pos": "n.",
    "en_def": "the ability to keep doing a hard activity for a long time",
    "cn_def": "耐力"
  },
  "fine-tune": {
    "pos": "v.",
    "en_def": "to make small changes that improve something",
    "cn_def": "微調"
  },
  "penalise": {
    "pos": "v.",
    "en_def": "to punish someone for breaking a rule",
    "cn_def": "處罰"
  },
  "dislocate": {
    "pos": "v.",
    "en_def": "to push a bone out of its normal place",
    "cn_def": "脫臼"
  },
  "trend line": {
    "pos": "n.phr.",
    "en_def": "a line on a graph showing the general direction of change",
    "cn_def": "趨勢線"
  },
  "data point": {
    "pos": "n.phr.",
    "en_def": "one single piece of information in a set",
    "cn_def": "資料點"
  },
  "sports medicine": {
    "pos": "n.phr.",
    "en_def": "the area of medicine dealing with exercise and injuries",
    "cn_def": "運動醫學"
  },
  "cardio": {
    "pos": "n.",
    "en_def": "exercise that makes your heart and lungs work harder",
    "cn_def": "有氧運動"
  },
  "ankle": {
    "pos": "n.",
    "en_def": "the joint between the foot and the leg",
    "cn_def": "腳踝"
  },
  "oxygen": {
    "pos": "n.",
    "en_def": "the gas in the air that our bodies need",
    "cn_def": "氧氣"
  },
  "data-driven": {
    "pos": "adj.",
    "en_def": "based on information and numbers",
    "cn_def": "數據驅動的"
  },
  "transferable": {
    "pos": "adj.",
    "en_def": "able to be used in a different situation",
    "cn_def": "可轉移的"
  },
  "reasoned": {
    "pos": "adj.",
    "en_def": "based on careful thinking",
    "cn_def": "有理有據的"
  },
  "push-up": {
    "pos": "n.",
    "en_def": "an exercise where you push your body up from the floor with your arms",
    "cn_def": "伏地挺身"
  },
  "periphery": {
    "pos": "n.",
    "en_def": "the outer edge of an area",
    "cn_def": "周邊；邊緣"
  },
  "haemoglobin": {
    "pos": "n.",
    "en_def": "the substance in red blood cells that carries oxygen",
    "cn_def": "血紅素"
  },
  "case study": {
    "pos": "n.phr.",
    "en_def": "a detailed study of one person or situation",
    "cn_def": "個案研究"
  },
  "force plate": {
    "pos": "n.phr.",
    "en_def": "a board that measures the push of a foot on the ground",
    "cn_def": "測力板"
  },
  "team doctor": {
    "pos": "n.phr.",
    "en_def": "the doctor who looks after a sports team",
    "cn_def": "隊醫"
  },
  "gait": {
    "pos": "n.",
    "en_def": "the way a person walks or runs",
    "cn_def": "步態"
  },
  "appraisal": {
    "pos": "n.",
    "en_def": "a careful judgement of how good or useful something is",
    "cn_def": "評估；評價"
  },
  "stewardship": {
    "pos": "n.",
    "en_def": "the careful management of something you are responsible for",
    "cn_def": "管理責任；監管"
  },
  "exemption": {
    "pos": "n.",
    "en_def": "permission not to do or pay something",
    "cn_def": "豁免；免除"
  },
  "anti-inflammatory": {
    "pos": "n.",
    "en_def": "a medicine that reduces heat and swelling in the body",
    "cn_def": "抗發炎藥"
  },
  "barbell": {
    "pos": "n.",
    "en_def": "a long bar with heavy weights on both ends",
    "cn_def": "槓鈴"
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
  "prize money": {
    "pos": "n.phr.",
    "en_def": "money given to the winners of a competition",
    "cn_def": "獎金"
  },
  "compression garment": {
    "pos": "n.phr.",
    "en_def": "tight clothing that presses on muscles to help blood flow",
    "cn_def": "壓縮衣"
  },
  "time frame": {
    "pos": "n.phr.",
    "en_def": "the period during which something happens",
    "cn_def": "時程；時間範圍"
  },
  "personal trainer": {
    "pos": "n.phr.",
    "en_def": "a professional who plans exercise for one client",
    "cn_def": "私人教練"
  },
  "false positive": {
    "pos": "n.phr.",
    "en_def": "a test result that wrongly shows something is there",
    "cn_def": "偽陽性"
  },
  "heart-rate monitor": {
    "pos": "n.phr.",
    "en_def": "a device that measures how fast your heart beats",
    "cn_def": "心率監測器"
  },
  "energy bar": {
    "pos": "n.phr.",
    "en_def": "a small snack bar that gives quick energy",
    "cn_def": "能量棒"
  },
  "penalty shoot-out": {
    "pos": "n.phr.",
    "en_def": "a way of deciding a drawn match by single kicks at goal",
    "cn_def": "十二碼大戰"
  },
  "shin pad": {
    "pos": "n.phr.",
    "en_def": "a hard cover that protects the front of the lower leg",
    "cn_def": "護脛"
  },
  "sports drink": {
    "pos": "n.phr.",
    "en_def": "a drink with sugar and salts for people who exercise",
    "cn_def": "運動飲料"
  },
  "lactic acid": {
    "pos": "n.phr.",
    "en_def": "a substance made in muscles during very hard exercise",
    "cn_def": "乳酸"
  },
  "wind tunnel": {
    "pos": "n.phr.",
    "en_def": "a room where air is blown over a person to test their shape",
    "cn_def": "風洞"
  },
  "regimen": {
    "pos": "n.",
    "en_def": "a strict plan for training, diet or health",
    "cn_def": "（嚴格的）養生法；訓練計畫"
  },
  "specification": {
    "pos": "n.",
    "en_def": "a detailed description of how something should be made",
    "cn_def": "規格；規範"
  },
  "rejection": {
    "pos": "n.",
    "en_def": "the act of refusing to accept something",
    "cn_def": "拒絕"
  },
  "physiotherapist": {
    "pos": "n.",
    "en_def": "a person trained to treat injuries with exercise and massage",
    "cn_def": "物理治療師"
  },
  "antipathy": {
    "pos": "n.",
    "en_def": "a strong feeling of dislike",
    "cn_def": "反感；厭惡"
  }
};

const EXTRA_GLOSSES = {};
