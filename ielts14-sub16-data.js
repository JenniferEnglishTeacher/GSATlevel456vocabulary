// Topic 14 Subunit 16 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T14 S16 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "go viral",
    "pos": "v.phr.",
    "cn_def": "爆紅；瘋傳",
    "en_def": "to spread very quickly online",
    "sentence": "Her video of the rescue {{BLANK}} within hours, and soon TV stations from other countries wanted to interview her.",
    "cn": "她的救援影片在幾小時內就爆紅，很快其他國家的電視台都想採訪她。"
  },
  {
    "word": "spread like wildfire",
    "pos": "v.phr.",
    "cn_def": "迅速蔓延；像野火般傳開",
    "en_def": "to spread very quickly",
    "sentence": "The rumour about the exam {{BLANK}}, so by lunchtime every student in the school was talking about it.",
    "cn": "關於考試的謠言像野火般迅速傳開，所以到了午餐時間，全校每個學生都在談論它。"
  },
  {
    "word": "with a pinch of salt",
    "pos": "phr.",
    "cn_def": "半信半疑地；有所保留地",
    "en_def": "with some doubt, not believing everything",
    "sentence": "You should take celebrity diet tips {{BLANK}}, because most stars have personal trainers and chefs.",
    "cn": "你應該對名人的減肥秘訣持保留態度，因為大多數明星都有私人教練和廚師。"
  },
  {
    "word": "hit the headlines",
    "pos": "v.phr.",
    "cn_def": "登上頭條；成為新聞焦點",
    "en_def": "to become important news everywhere",
    "sentence": "The small village {{BLANK}} when a student found a rare fossil, and tourists began to visit every weekend.",
    "cn": "一名學生發現了一塊罕見化石後，那個小村莊登上了頭條，遊客開始每個週末都來參觀。"
  },
  {
    "word": "off the record",
    "pos": "phr.",
    "cn_def": "私下說的；不得公開的",
    "en_def": "said privately, not to be published",
    "sentence": "The official spoke {{BLANK}}, so the reporter could use the information but could not print his name.",
    "cn": "那位官員是私下透露的，所以記者可以使用這些資訊，但不能刊出他的名字。"
  },
  {
    "word": "word of mouth",
    "pos": "n.phr.",
    "cn_def": "口耳相傳；口碑",
    "en_def": "information passed from person to person by talking",
    "sentence": "The small café never advertised, but {{BLANK}} brought so many customers that there is always a queue.",
    "cn": "那家小咖啡店從不打廣告，但口碑帶來了大量顧客，所以門口總是大排長龍。"
  },
  {
    "word": "behind closed doors",
    "pos": "phr.",
    "cn_def": "私下；閉門",
    "en_def": "in private, without the public knowing",
    "sentence": "The decision was made {{BLANK}}, so the public only learned about it after the new rules started.",
    "cn": "那項決定是閉門做出的，所以大眾直到新規定開始實施後才得知。"
  },
  {
    "word": "get the message across",
    "pos": "v.phr.",
    "cn_def": "把意思傳達清楚",
    "en_def": "to make people understand what you mean",
    "sentence": "The poster used simple pictures to {{BLANK}}, because many of the visitors could not read Chinese.",
    "cn": "那張海報使用簡單的圖片來把訊息傳達清楚，因為許多遊客看不懂中文。"
  },
  {
    "word": "beat around the bush",
    "pos": "v.phr.",
    "cn_def": "拐彎抹角；說話繞圈子",
    "en_def": "to avoid talking about the main topic",
    "sentence": "Please stop {{BLANK}} and tell me what happened, because I am really worried about you.",
    "cn": "請不要再拐彎抹角了，直接告訴我發生了什麼事，因為我真的很擔心你。"
  },
  {
    "word": "read the room",
    "pos": "v.phr.",
    "cn_def": "察言觀色；看場合",
    "en_def": "to understand how people around you feel",
    "sentence": "The comedian failed to {{BLANK}}, so he told jokes at a sad event and many guests were offended.",
    "cn": "那位喜劇演員沒能察言觀色，所以他在一個哀傷的場合講笑話，許多賓客都覺得被冒犯。"
  },
  {
    "word": "lost in translation",
    "pos": "adj.phr.",
    "cn_def": "在翻譯中失去原意",
    "en_def": "losing meaning when changed into another language",
    "sentence": "The joke was very funny in Japanese, but most of it was {{BLANK}}, so the English audience did not laugh.",
    "cn": "那個笑話在日文裡非常好笑，但大部分在翻譯中失去了原意，所以英語觀眾沒有笑。"
  },
  {
    "word": "the elephant in the room",
    "pos": "n.phr.",
    "cn_def": "大家避而不談的明顯問題",
    "en_def": "an obvious problem that nobody wants to talk about",
    "sentence": "Everyone discussed the new logo, but nobody mentioned {{BLANK}}, which was the company's falling sales.",
    "cn": "大家都在討論新標誌，卻沒有人提到那個明擺著卻沒人敢談的問題，也就是公司銷售額下滑。"
  },
  {
    "word": "in a nutshell",
    "pos": "phr.",
    "cn_def": "簡而言之；總之",
    "en_def": "in a few words; briefly",
    "sentence": "{{BLANK}}, the report says that most teenagers trust videos more than newspapers, and this worries many teachers.",
    "cn": "簡而言之，那份報告說大多數青少年相信影片勝過報紙，而這讓許多老師感到擔憂。"
  },
  {
    "word": "through the grapevine",
    "pos": "phr.",
    "cn_def": "透過小道消息；輾轉聽說",
    "en_def": "through informal talk between people",
    "sentence": "I heard {{BLANK}} that our teacher is leaving, but I am not sure whether it is true.",
    "cn": "我透過小道消息聽說我們老師要離職了，但我不確定是不是真的。"
  },
  {
    "word": "spill the beans",
    "pos": "v.phr.",
    "cn_def": "洩露秘密",
    "en_def": "to tell a secret too early",
    "sentence": "We planned a surprise party for Mum, but my little brother {{BLANK}} at breakfast, so she knew everything.",
    "cn": "我們為媽媽策劃了一場驚喜派對，但我弟弟在早餐時洩露了秘密，所以她全都知道了。"
  },
  {
    "word": "twist one's words",
    "pos": "v.phr.",
    "cn_def": "扭曲某人的話",
    "en_def": "to change the meaning of what someone said",
    "sentence": "The reporter {{BLANK}}, because I said the plan had problems, not that it was a complete failure.",
    "cn": "那位記者扭曲了我的話，因為我說的是那個計畫有問題，不是說它徹底失敗。"
  },
  {
    "word": "out of context",
    "pos": "phr.",
    "cn_def": "斷章取義；脫離上下文",
    "en_def": "separated from the situation that explains its meaning",
    "sentence": "The clip took her comment {{BLANK}}, so it sounded rude, although she was actually making a joke.",
    "cn": "那段短片把她的評論斷章取義，所以聽起來很無禮，儘管她其實是在開玩笑。"
  },
  {
    "word": "set the record straight",
    "pos": "v.phr.",
    "cn_def": "澄清事實；以正視聽",
    "en_def": "to correct a false story",
    "sentence": "The singer posted a video to {{BLANK}}, because many fans believed the false rumours about her marriage.",
    "cn": "那位歌手發布了一支影片來澄清事實，因為許多粉絲相信了關於她婚姻的不實謠言。"
  },
  {
    "word": "speak one's mind",
    "pos": "v.phr.",
    "cn_def": "說出心裡話；直言",
    "en_def": "to say honestly what you think",
    "sentence": "Our teacher encourages us to {{BLANK}} in class discussions, but she also asks us to respect other people's views.",
    "cn": "老師鼓勵我們在課堂討論中說出自己的想法，但她也要求我們尊重別人的觀點。"
  },
  {
    "word": "on the same page",
    "pos": "adj.phr.",
    "cn_def": "看法一致；有共識",
    "en_def": "agreeing about what to do",
    "sentence": "Before the interview, the team met to make sure everyone was {{BLANK}}, so nobody gave different answers.",
    "cn": "採訪前團隊開了會，確保大家有共識，這樣就不會有人給出不同的答案。"
  }
];

const MCQS = [
  {
    "q": "Her video of the rescue _____ within hours, and soon TV stations from other countries wanted to interview her.",
    "options": [
      "read the room",
      "go viral",
      "spread like wildfire",
      "beat around the bush"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The rumour about the exam _____, so by lunchtime every student in the school was talking about it.",
    "options": [
      "spread like wildfire",
      "hit the headlines",
      "beat around the bush",
      "set the record straight"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "You should take celebrity diet tips _____, because most stars have personal trainers and chefs.",
    "options": [
      "behind closed doors",
      "out of context",
      "with a pinch of salt",
      "off the record"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The small village _____ when a student found a rare fossil, and tourists began to visit every weekend.",
    "options": [
      "spread like wildfire",
      "beat around the bush",
      "go viral",
      "hit the headlines"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The official spoke _____, so the reporter could use the information but could not print his name.",
    "options": [
      "off the record",
      "through the grapevine",
      "out of context",
      "in a nutshell"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The small café never advertised, but _____ brought so many customers that there is always a queue.",
    "options": [
      "public speaking",
      "troll farm",
      "media literacy",
      "word of mouth"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The decision was made _____, so the public only learned about it after the new rules started.",
    "options": [
      "out of context",
      "through the grapevine",
      "behind closed doors",
      "off the record"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The poster used simple pictures to _____, because many of the visitors could not read Chinese.",
    "options": [
      "spread like wildfire",
      "get the message across",
      "spill the beans",
      "set the record straight"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Please stop _____ and tell me what happened, because I am really worried about you.",
    "options": [
      "hit the headlines",
      "spread like wildfire",
      "speak one's mind",
      "beat around the bush"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The comedian failed to _____, so he told jokes at a sad event and many guests were offended.",
    "options": [
      "go viral",
      "read the room",
      "spread like wildfire",
      "beat around the bush"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The joke was very funny in Japanese, but most of it was _____, so the English audience did not laugh.",
    "options": [
      "twist one's words",
      "vantage point",
      "lost in translation",
      "talk show"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Everyone discussed the new logo, but nobody mentioned _____, which was the company's falling sales.",
    "options": [
      "the elephant in the room",
      "press freedom",
      "product placement",
      "prime time"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "_____, the report says that most teenagers trust videos more than newspapers, and this worries many teachers.",
    "options": [
      "off the record",
      "out of context",
      "through the grapevine",
      "in a nutshell"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "I heard _____ that our teacher is leaving, but I am not sure whether it is true.",
    "options": [
      "off the record",
      "through the grapevine",
      "behind closed doors",
      "in a nutshell"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "We planned a surprise party for Mum, but my little brother _____ at breakfast, so she knew everything.",
    "options": [
      "set the record straight",
      "twist one's words",
      "spill the beans",
      "get the message across"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The reporter _____, because I said the plan had problems, not that it was a complete failure.",
    "options": [
      "twist one's words",
      "spread like wildfire",
      "speak one's mind",
      "get the message across"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The clip took her comment _____, so it sounded rude, although she was actually making a joke.",
    "options": [
      "with a pinch of salt",
      "out of context",
      "in a nutshell",
      "through the grapevine"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The singer posted a video to _____, because many fans believed the false rumours about her marriage.",
    "options": [
      "get the message across",
      "go viral",
      "set the record straight",
      "read the room"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Our teacher encourages us to _____ in class discussions, but she also asks us to respect other people's views.",
    "options": [
      "speak one's mind",
      "spill the beans",
      "twist one's words",
      "get the message across"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Before the interview, the team met to make sure everyone was _____, so nobody gave different answers.",
    "options": [
      "eye contact",
      "with a pinch of salt",
      "lost in translation",
      "on the same page"
    ],
    "answer": 3,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "go viral": {
    "pos": "v.phr.",
    "en_def": "to spread very quickly online",
    "cn_def": "爆紅；瘋傳"
  },
  "spread like wildfire": {
    "pos": "v.phr.",
    "en_def": "to spread very quickly",
    "cn_def": "迅速蔓延；像野火般傳開"
  },
  "with a pinch of salt": {
    "pos": "phr.",
    "en_def": "with some doubt, not believing everything",
    "cn_def": "半信半疑地；有所保留地"
  },
  "hit the headlines": {
    "pos": "v.phr.",
    "en_def": "to become important news everywhere",
    "cn_def": "登上頭條；成為新聞焦點"
  },
  "off the record": {
    "pos": "phr.",
    "en_def": "said privately, not to be published",
    "cn_def": "私下說的；不得公開的"
  },
  "word of mouth": {
    "pos": "n.phr.",
    "en_def": "information passed from person to person by talking",
    "cn_def": "口耳相傳；口碑"
  },
  "behind closed doors": {
    "pos": "phr.",
    "en_def": "in private, without the public knowing",
    "cn_def": "私下；閉門"
  },
  "get the message across": {
    "pos": "v.phr.",
    "en_def": "to make people understand what you mean",
    "cn_def": "把意思傳達清楚"
  },
  "beat around the bush": {
    "pos": "v.phr.",
    "en_def": "to avoid talking about the main topic",
    "cn_def": "拐彎抹角；說話繞圈子"
  },
  "read the room": {
    "pos": "v.phr.",
    "en_def": "to understand how people around you feel",
    "cn_def": "察言觀色；看場合"
  },
  "lost in translation": {
    "pos": "adj.phr.",
    "en_def": "losing meaning when changed into another language",
    "cn_def": "在翻譯中失去原意"
  },
  "the elephant in the room": {
    "pos": "n.phr.",
    "en_def": "an obvious problem that nobody wants to talk about",
    "cn_def": "大家避而不談的明顯問題"
  },
  "in a nutshell": {
    "pos": "phr.",
    "en_def": "in a few words; briefly",
    "cn_def": "簡而言之；總之"
  },
  "through the grapevine": {
    "pos": "phr.",
    "en_def": "through informal talk between people",
    "cn_def": "透過小道消息；輾轉聽說"
  },
  "spill the beans": {
    "pos": "v.phr.",
    "en_def": "to tell a secret too early",
    "cn_def": "洩露秘密"
  },
  "twist one's words": {
    "pos": "v.phr.",
    "en_def": "to change the meaning of what someone said",
    "cn_def": "扭曲某人的話"
  },
  "out of context": {
    "pos": "phr.",
    "en_def": "separated from the situation that explains its meaning",
    "cn_def": "斷章取義；脫離上下文"
  },
  "set the record straight": {
    "pos": "v.phr.",
    "en_def": "to correct a false story",
    "cn_def": "澄清事實；以正視聽"
  },
  "speak one's mind": {
    "pos": "v.phr.",
    "en_def": "to say honestly what you think",
    "cn_def": "說出心裡話；直言"
  },
  "on the same page": {
    "pos": "adj.phr.",
    "en_def": "agreeing about what to do",
    "cn_def": "看法一致；有共識"
  },
  "public speaking": {
    "pos": "n.phr.",
    "en_def": "speaking in front of a large group of people",
    "cn_def": "公開演說"
  },
  "troll farm": {
    "pos": "n.phr.",
    "en_def": "a group paid to post false or angry comments online",
    "cn_def": "網軍工廠"
  },
  "media literacy": {
    "pos": "n.phr.",
    "en_def": "the ability to judge and understand news and media",
    "cn_def": "媒體素養"
  },
  "vantage point": {
    "pos": "n.phr.",
    "en_def": "a position from which you can see or understand something well",
    "cn_def": "有利位置；觀點"
  },
  "talk show": {
    "pos": "n.phr.",
    "en_def": "a programme where a host chats with guests",
    "cn_def": "脫口秀；談話節目"
  },
  "press freedom": {
    "pos": "n.phr.",
    "en_def": "the right of the media to report without government control",
    "cn_def": "新聞自由"
  },
  "product placement": {
    "pos": "n.phr.",
    "en_def": "showing a brand inside a film or show to advertise it",
    "cn_def": "置入性行銷"
  },
  "prime time": {
    "pos": "n.phr.",
    "en_def": "the evening hours when most people watch TV",
    "cn_def": "黃金時段"
  },
  "eye contact": {
    "pos": "n.phr.",
    "en_def": "looking directly into someone's eyes",
    "cn_def": "眼神接觸"
  }
};

const EXTRA_GLOSSES = {};
