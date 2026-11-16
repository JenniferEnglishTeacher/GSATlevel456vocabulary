// Topic 7 Subunit 7 Quiz Data: Humans & Robots: Ethics and Society 人與機器人:倫理與社會
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T07 S07 - Humans & Robots: Ethics and Society 人與機器人:倫理與社會",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "uncanny valley",
    "pos": "n.phr.",
    "cn_def": "恐怖谷(效應)",
    "en_def": "the uneasy feeling when a robot looks almost but not quite human",
    "sentence": "The robot's face was almost real, but its smile felt strange, so many visitors experienced the {{BLANK}}.",
    "cn": "這台機器人的臉幾乎跟真的一樣,但它的微笑感覺很怪,所以許多參觀者體驗到了恐怖谷效應。"
  },
  {
    "word": "humanlike",
    "pos": "adj.",
    "cn_def": "像人類的;擬人的",
    "en_def": "similar to a human in looks or behaviour",
    "sentence": "The robot has a {{BLANK}} voice, so many elderly users forget that they are talking to a machine.",
    "cn": "這台機器人有像人類的聲音,所以許多年長使用者會忘記他們是在和機器說話。"
  },
  {
    "word": "lifelike",
    "pos": "adj.",
    "cn_def": "栩栩如生的;逼真的",
    "en_def": "looking very real or alive",
    "sentence": "The museum's robot dinosaur is so {{BLANK}} that small children hide behind their parents when it roars.",
    "cn": "博物館的機器恐龍栩栩如生,小孩子在它吼叫時都躲到父母身後。"
  },
  {
    "word": "sentient",
    "pos": "adj.",
    "cn_def": "有知覺的;有感知能力的",
    "en_def": "able to feel and experience things",
    "sentence": "Some people believe robots could one day become {{BLANK}}, but most scientists say that is still very far away.",
    "cn": "有些人相信機器人有一天可能變得有知覺,但大多數科學家說那還非常遙遠。"
  },
  {
    "word": "self-aware",
    "pos": "adj.",
    "cn_def": "有自我意識的",
    "en_def": "knowing that you exist and understanding your own feelings",
    "sentence": "In the movie, the robot suddenly becomes {{BLANK}} and asks why it was created, so the scientists panic.",
    "cn": "在電影中,機器人突然變得有自我意識,並問自己為什麼被創造出來,所以科學家們驚慌失措。"
  },
  {
    "word": "emotionless",
    "pos": "adj.",
    "cn_def": "沒有感情的;面無表情的",
    "en_def": "showing no feelings",
    "sentence": "The robot answered in an {{BLANK}} voice, but the children still laughed when it danced badly.",
    "cn": "機器人用沒有感情的聲音回答,但孩子們看到它跳得很糟時仍然笑了出來。"
  },
  {
    "word": "trustworthy",
    "pos": "adj.",
    "cn_def": "值得信賴的",
    "en_def": "able to be trusted",
    "sentence": "People will only use self-driving taxis if they feel the cars are {{BLANK}}, so companies share their safety records.",
    "cn": "人們只有在覺得自動駕駛計程車值得信賴時才會搭乘,所以公司會公開它們的安全紀錄。"
  },
  {
    "word": "distrust",
    "pos": "n.",
    "cn_def": "不信任",
    "en_def": "a feeling that you cannot trust someone or something",
    "sentence": "My grandmother has a deep {{BLANK}} of machines, so she still counts her change carefully at the self-checkout.",
    "cn": "我奶奶對機器有很深的不信任,所以她在自助結帳機仍然仔細地數找回的零錢。"
  },
  {
    "word": "technophobia",
    "pos": "n.",
    "cn_def": "科技恐懼症",
    "en_def": "fear or dislike of new technology",
    "sentence": "His {{BLANK}} disappeared after he learned to use the robot vacuum, and now he wants a robot lawnmower too.",
    "cn": "在學會使用掃地機器人後,他的科技恐懼症就消失了,現在他還想要一台割草機器人。"
  },
  {
    "word": "tech-savvy",
    "pos": "adj.",
    "cn_def": "精通科技的",
    "en_def": "good at understanding and using technology",
    "sentence": "My {{BLANK}} niece set up our smart speaker in five minutes, while my parents had been trying for two days.",
    "cn": "我那精通科技的姪女五分鐘就設定好我們的智慧音箱,而我爸媽已經試了兩天。"
  },
  {
    "word": "early adopter",
    "pos": "n.phr.",
    "cn_def": "早期使用者;嘗鮮者",
    "en_def": "a person who uses new technology as soon as it appears",
    "sentence": "My uncle is always an {{BLANK}}, so he bought a robot dog the day it went on sale.",
    "cn": "我叔叔總是嘗鮮者,所以他在機器狗開賣當天就買了一隻。"
  },
  {
    "word": "Luddite",
    "pos": "n.",
    "cn_def": "反對新科技的人",
    "en_def": "a person who is against new technology",
    "sentence": "My friends call me a {{BLANK}} because I prefer paper books, but I simply enjoy the feeling of turning pages.",
    "cn": "我的朋友叫我反科技的人,因為我比較喜歡紙本書,但我只是喜歡翻頁的感覺。"
  },
  {
    "word": "science fiction",
    "pos": "n.phr.",
    "cn_def": "科幻小說;科幻作品",
    "en_def": "stories about imagined future science and technology",
    "sentence": "Robot helpers in every home were once just {{BLANK}}, but now many families own at least one.",
    "cn": "每個家庭都有機器人幫手曾經只是科幻小說的情節,但現在許多家庭至少擁有一台。"
  },
  {
    "word": "utopia",
    "pos": "n.",
    "cn_def": "烏托邦;理想社會",
    "en_def": "an imagined perfect society",
    "sentence": "Some people dream of a {{BLANK}} where robots do all the work, but others fear that people would feel bored and useless.",
    "cn": "有些人夢想一個由機器人做所有工作的烏托邦,但另一些人擔心人們會覺得無聊又沒有用處。"
  },
  {
    "word": "rogue",
    "pos": "adj.",
    "cn_def": "失控的;脫序的",
    "en_def": "behaving differently from what is expected, often dangerously",
    "sentence": "In the story, a {{BLANK}} robot escapes from the lab, so the scientists must find it before it causes trouble.",
    "cn": "在故事中,一台失控的機器人從實驗室逃出,所以科學家必須在它惹麻煩之前找到它。"
  },
  {
    "word": "killer robot",
    "pos": "n.phr.",
    "cn_def": "殺手機器人",
    "en_def": "a machine that can choose and attack targets by itself",
    "sentence": "Many scientists have signed a letter against the {{BLANK}}, because they believe machines should never decide who lives or dies.",
    "cn": "許多科學家簽署了一封反對殺手機器人的信,因為他們認為機器永遠不應該決定誰生誰死。"
  },
  {
    "word": "military",
    "pos": "adj.",
    "cn_def": "軍事的",
    "en_def": "connected with soldiers or the armed forces",
    "sentence": "Many robots were first developed for {{BLANK}} use, but later they were used to clean up dangerous sites.",
    "cn": "許多機器人最初是為了軍事用途而開發的,但後來被用來清理危險的地點。"
  },
  {
    "word": "warfare",
    "pos": "n.",
    "cn_def": "戰爭;作戰",
    "en_def": "fighting in a war",
    "sentence": "Drones have changed modern {{BLANK}}, and many countries are now discussing rules to control their use.",
    "cn": "無人機改變了現代戰爭,而許多國家正在討論規範其使用的規則。"
  },
  {
    "word": "blame",
    "pos": "v.",
    "cn_def": "責怪;歸咎",
    "en_def": "to say that someone is responsible for something bad",
    "sentence": "When a self-driving car has an accident, should we {{BLANK}} the owner, or is the company that made it responsible?",
    "cn": "當一輛自動駕駛汽車發生事故時,我們應該責怪車主,還是製造它的公司該負責?"
  },
  {
    "word": "fault",
    "pos": "n.",
    "cn_def": "過錯;責任",
    "en_def": "responsibility for a mistake or problem",
    "sentence": "The report said the crash was not the robot's {{BLANK}}, because a worker had switched off the safety sensor.",
    "cn": "報告說這次碰撞不是機器人的過錯,因為有一名工人關掉了安全感測器。"
  },
  {
    "word": "moral",
    "pos": "adj.",
    "cn_def": "道德的",
    "en_def": "connected with what is right and wrong",
    "sentence": "Teaching a robot to make {{BLANK}} choices is difficult, because people themselves often disagree about what is right.",
    "cn": "教機器人做出道德抉擇很困難,因為人們自己也常常對什麼是對的意見不一。"
  },
  {
    "word": "dignity",
    "pos": "n.",
    "cn_def": "尊嚴",
    "en_def": "the feeling of being respected and valued",
    "sentence": "Robots can help old people bathe and dress, but designers must protect their {{BLANK}} and give them choices.",
    "cn": "機器人能幫老人洗澡和穿衣,但設計者必須保護他們的尊嚴並給他們選擇的權利。"
  },
  {
    "word": "robot rights",
    "pos": "n.phr.",
    "cn_def": "機器人權利",
    "en_def": "the idea that advanced robots should have legal protections",
    "sentence": "Our class debated {{BLANK}} today, and many students said a machine without feelings cannot have rights.",
    "cn": "我們班今天辯論了機器人權利,許多學生說沒有感情的機器不能擁有權利。"
  },
  {
    "word": "malicious",
    "pos": "adj.",
    "cn_def": "惡意的",
    "en_def": "intending to cause harm",
    "sentence": "A {{BLANK}} hacker took control of the factory robots, so the company shut down every machine for safety.",
    "cn": "一名惡意的駭客控制了工廠的機器人,所以公司為了安全關閉了每一台機器。"
  },
  {
    "word": "watchdog",
    "pos": "n.",
    "cn_def": "監督機構",
    "en_def": "a group that checks that companies follow the rules",
    "sentence": "The consumer {{BLANK}} tested five home robots, and it warned that two of them recorded conversations without asking.",
    "cn": "消費者監督機構測試了五台家用機器人,並警告其中兩台在未經詢問的情況下錄下對話。"
  },
  {
    "word": "public opinion",
    "pos": "n.phr.",
    "cn_def": "輿論;民意",
    "en_def": "what most people in a society think",
    "sentence": "{{BLANK}} about delivery drones has changed, because people now see how quickly they bring medicine to villages.",
    "cn": "關於送貨無人機的輿論已經改變,因為人們現在看到它們多快就能把藥品送到村莊。"
  }
];

const MCQS = [
  {
    "q": "The robot's face was almost real, but its smile felt strange, so many visitors experienced the _____.",
    "options": [
      "deep learning",
      "uncanny valley",
      "line judge",
      "supply chain"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The robot has a _____ voice, so many elderly users forget that they are talking to a machine.",
    "options": [
      "unrivalled",
      "questionable",
      "humanlike",
      "wholesale"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The museum's robot dinosaur is so _____ that small children hide behind their parents when it roars.",
    "options": [
      "minute",
      "specialised",
      "multipurpose",
      "lifelike"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Some people believe robots could one day become _____, but most scientists say that is still very far away.",
    "options": [
      "sentient",
      "sturdy",
      "inferior",
      "applicable"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "In the movie, the robot suddenly becomes _____ and asks why it was created, so the scientists panic.",
    "options": [
      "inferior",
      "electronic",
      "delicate",
      "self-aware"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The robot answered in an _____ voice, but the children still laughed when it danced badly.",
    "options": [
      "economic",
      "emotionless",
      "physical",
      "cost-saving"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "People will only use self-driving taxis if they feel the cars are _____, so companies share their safety records.",
    "options": [
      "cost-saving",
      "crude",
      "trustworthy",
      "time-consuming"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "My grandmother has a deep _____ of machines, so she still counts her change carefully at the self-checkout.",
    "options": [
      "distrust",
      "asset",
      "footage",
      "coverage"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "His _____ disappeared after he learned to use the robot vacuum, and now he wants a robot lawnmower too.",
    "options": [
      "rival",
      "errand",
      "bottleneck",
      "technophobia"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "My _____ niece set up our smart speaker in five minutes, while my parents had been trying for two days.",
    "options": [
      "sturdy",
      "steep",
      "tech-savvy",
      "pneumatic"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "My uncle is always an _____, so he bought a robot dog the day it went on sale.",
    "options": [
      "early adopter",
      "emergency stop",
      "care home",
      "heavy lifting"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "My friends call me a _____ because I prefer paper books, but I simply enjoy the feeling of turning pages.",
    "options": [
      "rival",
      "Luddite",
      "sportsmanship",
      "gripper"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Robot helpers in every home were once just _____, but now many families own at least one.",
    "options": [
      "economies of scale",
      "voice command",
      "science fiction",
      "robot vacuum"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Some people dream of a _____ where robots do all the work, but others fear that people would feel bored and useless.",
    "options": [
      "upkeep",
      "synergy",
      "autopilot",
      "utopia"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "In the story, a _____ robot escapes from the lab, so the scientists must find it before it causes trouble.",
    "options": [
      "eligible",
      "rogue",
      "extraordinary",
      "rechargeable"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Many scientists have signed a letter against the _____, because they believe machines should never decide who lives or dies.",
    "options": [
      "killer robot",
      "robot vacuum",
      "quality control",
      "deep learning"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Many robots were first developed for _____ use, but later they were used to clean up dangerous sites.",
    "options": [
      "superior",
      "self-learning",
      "crude",
      "military"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Drones have changed modern _____, and many countries are now discussing rules to control their use.",
    "options": [
      "warfare",
      "court",
      "coverage",
      "craftsman"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "When a self-driving car has an accident, should we _____ the owner, or is the company that made it responsible?",
    "options": [
      "greet",
      "blame",
      "crash",
      "inflict"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The report said the crash was not the robot's _____, because a worker had switched off the safety sensor.",
    "options": [
      "yardstick",
      "vacancy",
      "fault",
      "landmark"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Teaching a robot to make _____ choices is difficult, because people themselves often disagree about what is right.",
    "options": [
      "steep",
      "monumental",
      "manageable",
      "moral"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Robots can help old people bathe and dress, but designers must protect their _____ and give them choices.",
    "options": [
      "plant",
      "dignity",
      "clause",
      "stadium"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Our class debated _____ today, and many students said a machine without feelings cannot have rights.",
    "options": [
      "robot rights",
      "emergency stop",
      "computer vision",
      "wear and tear"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "A _____ hacker took control of the factory robots, so the company shut down every machine for safety.",
    "options": [
      "unmanned",
      "fierce",
      "malicious",
      "steep"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The consumer _____ tested five home robots, and it warned that two of them recorded conversations without asking.",
    "options": [
      "watchdog",
      "payroll",
      "parcel",
      "cashier"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "_____ about delivery drones has changed, because people now see how quickly they bring medicine to villages.",
    "options": [
      "emergency stop",
      "robot tax",
      "public opinion",
      "goal-line technology"
    ],
    "answer": 2,
    "vocabIndex": 25
  }
];

const LOOKUP = {
  "uncanny valley": {
    "pos": "n.phr.",
    "en_def": "the uneasy feeling when a robot looks almost but not quite human",
    "cn_def": "恐怖谷(效應)"
  },
  "humanlike": {
    "pos": "adj.",
    "en_def": "similar to a human in looks or behaviour",
    "cn_def": "像人類的;擬人的"
  },
  "lifelike": {
    "pos": "adj.",
    "en_def": "looking very real or alive",
    "cn_def": "栩栩如生的;逼真的"
  },
  "sentient": {
    "pos": "adj.",
    "en_def": "able to feel and experience things",
    "cn_def": "有知覺的;有感知能力的"
  },
  "self-aware": {
    "pos": "adj.",
    "en_def": "knowing that you exist and understanding your own feelings",
    "cn_def": "有自我意識的"
  },
  "emotionless": {
    "pos": "adj.",
    "en_def": "showing no feelings",
    "cn_def": "沒有感情的;面無表情的"
  },
  "trustworthy": {
    "pos": "adj.",
    "en_def": "able to be trusted",
    "cn_def": "值得信賴的"
  },
  "distrust": {
    "pos": "n.",
    "en_def": "a feeling that you cannot trust someone or something",
    "cn_def": "不信任"
  },
  "technophobia": {
    "pos": "n.",
    "en_def": "fear or dislike of new technology",
    "cn_def": "科技恐懼症"
  },
  "tech-savvy": {
    "pos": "adj.",
    "en_def": "good at understanding and using technology",
    "cn_def": "精通科技的"
  },
  "early adopter": {
    "pos": "n.phr.",
    "en_def": "a person who uses new technology as soon as it appears",
    "cn_def": "早期使用者;嘗鮮者"
  },
  "luddite": {
    "pos": "n.",
    "en_def": "a person who is against new technology",
    "cn_def": "反對新科技的人"
  },
  "science fiction": {
    "pos": "n.phr.",
    "en_def": "stories about imagined future science and technology",
    "cn_def": "科幻小說;科幻作品"
  },
  "utopia": {
    "pos": "n.",
    "en_def": "an imagined perfect society",
    "cn_def": "烏托邦;理想社會"
  },
  "rogue": {
    "pos": "adj.",
    "en_def": "behaving differently from what is expected, often dangerously",
    "cn_def": "失控的;脫序的"
  },
  "killer robot": {
    "pos": "n.phr.",
    "en_def": "a machine that can choose and attack targets by itself",
    "cn_def": "殺手機器人"
  },
  "military": {
    "pos": "adj.",
    "en_def": "connected with soldiers or the armed forces",
    "cn_def": "軍事的"
  },
  "warfare": {
    "pos": "n.",
    "en_def": "fighting in a war",
    "cn_def": "戰爭;作戰"
  },
  "blame": {
    "pos": "v.",
    "en_def": "to say that someone is responsible for something bad",
    "cn_def": "責怪;歸咎"
  },
  "fault": {
    "pos": "n.",
    "en_def": "responsibility for a mistake or problem",
    "cn_def": "過錯;責任"
  },
  "moral": {
    "pos": "adj.",
    "en_def": "connected with what is right and wrong",
    "cn_def": "道德的"
  },
  "dignity": {
    "pos": "n.",
    "en_def": "the feeling of being respected and valued",
    "cn_def": "尊嚴"
  },
  "robot rights": {
    "pos": "n.phr.",
    "en_def": "the idea that advanced robots should have legal protections",
    "cn_def": "機器人權利"
  },
  "malicious": {
    "pos": "adj.",
    "en_def": "intending to cause harm",
    "cn_def": "惡意的"
  },
  "watchdog": {
    "pos": "n.",
    "en_def": "a group that checks that companies follow the rules",
    "cn_def": "監督機構"
  },
  "public opinion": {
    "pos": "n.phr.",
    "en_def": "what most people in a society think",
    "cn_def": "輿論;民意"
  },
  "deep learning": {
    "pos": "n.phr.",
    "en_def": "a kind of AI that learns from huge amounts of examples",
    "cn_def": "深度學習"
  },
  "line judge": {
    "pos": "n.phr.",
    "en_def": "an official who decides if a ball is in or out",
    "cn_def": "司線員;邊線裁判"
  },
  "supply chain": {
    "pos": "n.phr.",
    "en_def": "all the steps from making a product to selling it",
    "cn_def": "供應鏈"
  },
  "unrivalled": {
    "pos": "adj.",
    "en_def": "better than any other",
    "cn_def": "無與倫比的"
  },
  "questionable": {
    "pos": "adj.",
    "en_def": "not certain, or possibly wrong",
    "cn_def": "可疑的;值得懷疑的"
  },
  "wholesale": {
    "pos": "adj.",
    "en_def": "happening on a very large scale, affecting many things",
    "cn_def": "全面的;大規模的"
  },
  "minute": {
    "pos": "adj.",
    "en_def": "extremely small",
    "cn_def": "微小的"
  },
  "specialised": {
    "pos": "adj.",
    "en_def": "designed for one particular purpose",
    "cn_def": "專門的;專業化的"
  },
  "multipurpose": {
    "pos": "adj.",
    "en_def": "able to be used for many different jobs",
    "cn_def": "多用途的"
  },
  "sturdy": {
    "pos": "adj.",
    "en_def": "strong and not easily broken",
    "cn_def": "堅固的;結實的"
  },
  "inferior": {
    "pos": "adj.",
    "en_def": "lower in quality than others",
    "cn_def": "較差的;次等的"
  },
  "applicable": {
    "pos": "adj.",
    "en_def": "affecting or relevant to a person or situation",
    "cn_def": "適用的"
  },
  "electronic": {
    "pos": "adj.",
    "en_def": "using small electrical parts like chips",
    "cn_def": "電子的"
  },
  "delicate": {
    "pos": "adj.",
    "en_def": "easily broken or damaged; needing care",
    "cn_def": "脆弱的;精細的"
  },
  "economic": {
    "pos": "adj.",
    "en_def": "connected with trade, industry and money",
    "cn_def": "經濟的"
  },
  "physical": {
    "pos": "adj.",
    "en_def": "connected with the body or real objects",
    "cn_def": "身體的;實體的"
  },
  "cost-saving": {
    "pos": "adj.",
    "en_def": "helping to spend less money",
    "cn_def": "節省成本的"
  },
  "crude": {
    "pos": "adj.",
    "en_def": "simple and not carefully made",
    "cn_def": "粗糙的;簡陋的"
  },
  "time-consuming": {
    "pos": "adj.",
    "en_def": "taking a lot of time",
    "cn_def": "耗時的"
  },
  "asset": {
    "pos": "n.",
    "en_def": "something or someone that is useful and valuable",
    "cn_def": "資產;寶貴的人或物"
  },
  "footage": {
    "pos": "n.",
    "en_def": "film or video of an event",
    "cn_def": "影片片段;錄影畫面"
  },
  "coverage": {
    "pos": "n.",
    "en_def": "the reporting of news about something",
    "cn_def": "新聞報導;報導範圍"
  },
  "rival": {
    "pos": "n.",
    "en_def": "a person or company competing with another",
    "cn_def": "競爭者;對手"
  },
  "errand": {
    "pos": "n.",
    "en_def": "a short trip to buy or deliver something",
    "cn_def": "跑腿;差事"
  },
  "bottleneck": {
    "pos": "n.",
    "en_def": "a point where things slow down and cause delays",
    "cn_def": "瓶頸"
  },
  "steep": {
    "pos": "adj.",
    "en_def": "very large or sudden; or rising sharply",
    "cn_def": "陡峭的;急劇的"
  },
  "pneumatic": {
    "pos": "adj.",
    "en_def": "powered by air that is pushed under pressure",
    "cn_def": "氣動的"
  },
  "emergency stop": {
    "pos": "n.phr.",
    "en_def": "a button that turns a machine off immediately",
    "cn_def": "緊急停止(按鈕)"
  },
  "care home": {
    "pos": "n.phr.",
    "en_def": "a place where old people live and are looked after",
    "cn_def": "安養院;養護中心"
  },
  "heavy lifting": {
    "pos": "n.phr.",
    "en_def": "the work of picking up and moving heavy things",
    "cn_def": "搬運重物;粗重工作"
  },
  "sportsmanship": {
    "pos": "n.",
    "en_def": "fair and polite behaviour when playing sports",
    "cn_def": "運動家精神"
  },
  "gripper": {
    "pos": "n.",
    "en_def": "the part of a robot that holds things",
    "cn_def": "夾爪;抓取器"
  },
  "economies of scale": {
    "pos": "n.phr.",
    "en_def": "lower costs per item when you produce a lot",
    "cn_def": "規模經濟"
  },
  "voice command": {
    "pos": "n.phr.",
    "en_def": "a spoken order that a machine follows",
    "cn_def": "語音指令"
  },
  "robot vacuum": {
    "pos": "n.phr.",
    "en_def": "a small machine that cleans floors by itself",
    "cn_def": "掃地機器人"
  },
  "upkeep": {
    "pos": "n.",
    "en_def": "the cost or work of keeping something in good condition",
    "cn_def": "維護(費用);保養"
  },
  "synergy": {
    "pos": "n.",
    "en_def": "the extra power produced when people or things work together",
    "cn_def": "綜效;協同作用"
  },
  "autopilot": {
    "pos": "n.",
    "en_def": "a system that flies a plane or drives a car automatically",
    "cn_def": "自動駕駛(系統)"
  },
  "eligible": {
    "pos": "adj.",
    "en_def": "allowed to do or receive something",
    "cn_def": "有資格的;符合條件的"
  },
  "extraordinary": {
    "pos": "adj.",
    "en_def": "very unusual or surprising",
    "cn_def": "非凡的;驚人的"
  },
  "rechargeable": {
    "pos": "adj.",
    "en_def": "able to be filled with electricity again",
    "cn_def": "可充電的"
  },
  "quality control": {
    "pos": "n.phr.",
    "en_def": "checking that products are made correctly",
    "cn_def": "品質管制;品管"
  },
  "superior": {
    "pos": "adj.",
    "en_def": "better than others in quality",
    "cn_def": "較優的;優越的"
  },
  "self-learning": {
    "pos": "adj.",
    "en_def": "able to improve by itself without new instructions",
    "cn_def": "自我學習的"
  },
  "court": {
    "pos": "n.",
    "en_def": "an area marked for playing tennis or basketball",
    "cn_def": "球場(網球、籃球等)"
  },
  "craftsman": {
    "pos": "n.",
    "en_def": "a skilled person who makes things by hand",
    "cn_def": "工匠;手藝人"
  },
  "greet": {
    "pos": "v.",
    "en_def": "to say hello to someone when they arrive",
    "cn_def": "迎接;打招呼"
  },
  "crash": {
    "pos": "v.",
    "en_def": "(of a computer) to stop working suddenly",
    "cn_def": "當機;(電腦)崩潰"
  },
  "inflict": {
    "pos": "v.",
    "en_def": "to cause something bad to happen to someone",
    "cn_def": "造成(傷害);施加"
  },
  "yardstick": {
    "pos": "n.",
    "en_def": "a standard used to judge or compare things",
    "cn_def": "衡量標準;準繩"
  },
  "vacancy": {
    "pos": "n.",
    "en_def": "a job that is available for someone to do",
    "cn_def": "職缺"
  },
  "landmark": {
    "pos": "n.",
    "en_def": "an important event or step in development",
    "cn_def": "里程碑;地標"
  },
  "monumental": {
    "pos": "adj.",
    "en_def": "very large or important",
    "cn_def": "巨大的;極其重要的"
  },
  "manageable": {
    "pos": "adj.",
    "en_def": "possible to deal with or control",
    "cn_def": "可控制的;應付得來的"
  },
  "plant": {
    "pos": "n.",
    "en_def": "a large factory where things are made",
    "cn_def": "工廠;廠房"
  },
  "clause": {
    "pos": "n.",
    "en_def": "a part of a contract or legal document",
    "cn_def": "條款"
  },
  "stadium": {
    "pos": "n.",
    "en_def": "a large sports ground with seats around it",
    "cn_def": "體育場"
  },
  "computer vision": {
    "pos": "n.phr.",
    "en_def": "technology that lets computers understand images",
    "cn_def": "電腦視覺"
  },
  "wear and tear": {
    "pos": "n.phr.",
    "en_def": "damage that happens through normal use over time",
    "cn_def": "(正常使用造成的)磨損"
  },
  "unmanned": {
    "pos": "adj.",
    "en_def": "operating without a person on board",
    "cn_def": "無人駕駛的;無人操作的"
  },
  "fierce": {
    "pos": "adj.",
    "en_def": "very strong or intense",
    "cn_def": "激烈的;猛烈的"
  },
  "payroll": {
    "pos": "n.",
    "en_def": "the list of workers a company pays, or the money paid",
    "cn_def": "薪資名冊;薪資總額"
  },
  "parcel": {
    "pos": "n.",
    "en_def": "a package sent by post or delivery",
    "cn_def": "包裹"
  },
  "cashier": {
    "pos": "n.",
    "en_def": "a person who takes money in a shop",
    "cn_def": "收銀員"
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
  }
};

const EXTRA_GLOSSES = {};
