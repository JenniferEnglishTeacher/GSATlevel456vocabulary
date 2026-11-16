// Topic 14 Subunit 2 Quiz Data: Broadcasting & Traditional Media 廣播與傳統媒體
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T14 S02 - Broadcasting & Traditional Media 廣播與傳統媒體",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "broadcast",
    "pos": "v.",
    "cn_def": "播出；廣播",
    "en_def": "to send out a programme on TV or radio",
    "sentence": "The final match was {{BLANK}} live on national television, so millions of people watched it at home and in restaurants.",
    "cn": "那場決賽在全國電視台現場播出，所以數百萬人在家裡和餐廳收看。"
  },
  {
    "word": "broadcaster",
    "pos": "n.",
    "cn_def": "廣播公司；播報員",
    "en_def": "a company or person that makes TV or radio programmes",
    "sentence": "The public {{BLANK}} does not show adverts, because it is paid for by taxes rather than by companies.",
    "cn": "那家公共廣播公司不播放廣告，因為它的經費來自稅收而不是企業。"
  },
  {
    "word": "television",
    "pos": "n.",
    "cn_def": "電視",
    "en_def": "a system or machine for watching programmes",
    "sentence": "Fewer young people watch {{BLANK}} in the evening now, because they prefer short videos on their phones.",
    "cn": "現在晚上看電視的年輕人比較少了，因為他們比較喜歡在手機上看短影片。"
  },
  {
    "word": "programme",
    "pos": "n.",
    "cn_def": "節目",
    "en_def": "a show on TV or radio",
    "sentence": "My favourite {{BLANK}} is a science show for teenagers, and each episode explains one strange fact about nature.",
    "cn": "我最喜歡的節目是一個給青少年看的科學節目，每一集都解釋一個關於大自然的奇特事實。"
  },
  {
    "word": "documentary",
    "pos": "n.",
    "cn_def": "紀錄片",
    "en_def": "a film or programme that gives facts about a real topic",
    "sentence": "We watched a {{BLANK}} about plastic in the ocean, and afterwards the whole class decided to stop using plastic straws.",
    "cn": "我們看了一部關於海洋塑膠的紀錄片，之後全班決定不再使用塑膠吸管。"
  },
  {
    "word": "talk show",
    "pos": "n.phr.",
    "cn_def": "脫口秀；談話節目",
    "en_def": "a programme where a host chats with guests",
    "sentence": "The actor appeared on a late-night {{BLANK}}, and he told funny stories about the mistakes he made while filming.",
    "cn": "那位演員上了一個深夜談話節目，他講了一些拍片時犯錯的趣事。"
  },
  {
    "word": "sitcom",
    "pos": "n.",
    "cn_def": "情境喜劇",
    "en_def": "a funny TV series about the same characters",
    "sentence": "My parents love an old American {{BLANK}} about six friends in New York, so they watch the episodes again and again.",
    "cn": "我爸媽很喜歡一部關於紐約六個朋友的老美國情境喜劇，所以他們一再重看那些集數。"
  },
  {
    "word": "soap opera",
    "pos": "n.phr.",
    "cn_def": "肥皂劇；連續劇",
    "en_def": "a long-running drama series about people's lives",
    "sentence": "My grandmother never misses her favourite {{BLANK}}, and she gets very upset when the characters argue or fall in love.",
    "cn": "我奶奶從不錯過她最愛的連續劇，而且劇中人物吵架或談戀愛時她都會很激動。"
  },
  {
    "word": "reality show",
    "pos": "n.phr.",
    "cn_def": "真人實境秀",
    "en_def": "a programme that films ordinary people in real situations",
    "sentence": "The {{BLANK}} claims to show real life, but some contestants later admitted that many scenes had been planned in advance.",
    "cn": "那個真人實境秀聲稱呈現真實生活，但有些參賽者後來承認許多場景是事先安排好的。"
  },
  {
    "word": "viewer",
    "pos": "n.",
    "cn_def": "觀眾",
    "en_def": "a person who watches TV or videos",
    "sentence": "Many {{BLANK}} complained about the violent scenes, so the channel moved the programme to a later time.",
    "cn": "許多觀眾抱怨那些暴力場面，所以電視台把節目移到較晚的時段。"
  },
  {
    "word": "audience",
    "pos": "n.",
    "cn_def": "觀眾；聽眾；受眾",
    "en_def": "the people who watch, read or listen to something",
    "sentence": "The speaker made a joke at the beginning, and the whole {{BLANK}} laughed, so she felt much more relaxed.",
    "cn": "講者在一開始開了個玩笑，全場聽眾都笑了，所以她感覺放鬆多了。"
  },
  {
    "word": "ratings",
    "pos": "n.",
    "cn_def": "收視率",
    "en_def": "numbers showing how many people watch a programme",
    "sentence": "The show's {{BLANK}} fell sharply after the main actor left, so the network decided to cancel it.",
    "cn": "那位主角離開後，節目的收視率急劇下滑，所以電視網決定停播。"
  },
  {
    "word": "prime time",
    "pos": "n.phr.",
    "cn_def": "黃金時段",
    "en_def": "the evening hours when most people watch TV",
    "sentence": "Adverts shown during {{BLANK}} are very expensive, because that is when the largest number of families are watching.",
    "cn": "在黃金時段播出的廣告非常昂貴，因為那時收看的家庭最多。"
  },
  {
    "word": "commercial break",
    "pos": "n.phr.",
    "cn_def": "廣告時間；進廣告",
    "en_def": "a pause in a programme for adverts",
    "sentence": "During the {{BLANK}} I quickly made some tea, but I missed the start of the next part of the film.",
    "cn": "廣告時間的時候我很快泡了杯茶，但我錯過了電影下一段的開頭。"
  },
  {
    "word": "host",
    "pos": "n.",
    "cn_def": "主持人",
    "en_def": "the person who introduces a show and talks to guests",
    "sentence": "The {{BLANK}} of the quiz show was friendly and calm, so even nervous contestants were able to answer well.",
    "cn": "那個益智節目的主持人友善又沉穩，所以連緊張的參賽者都能回答得很好。"
  },
  {
    "word": "presenter",
    "pos": "n.",
    "cn_def": "節目主持人；主播",
    "en_def": "a person who introduces a TV or radio programme",
    "sentence": "The weather {{BLANK}} pointed to the map and warned that heavy rain would arrive by the weekend, so people prepared early.",
    "cn": "氣象主播指著地圖警告大雨將在週末前到來，所以民眾提早做好準備。"
  },
  {
    "word": "newsreader",
    "pos": "n.",
    "cn_def": "新聞播報員；主播",
    "en_def": "a person who reads the news on TV or radio",
    "sentence": "The {{BLANK}} stayed calm while she reported the disaster, but viewers could see that she was deeply affected.",
    "cn": "那位新聞主播報導災難時保持冷靜，但觀眾看得出她深受影響。"
  },
  {
    "word": "episode",
    "pos": "n.",
    "cn_def": "（一）集",
    "en_def": "one part of a TV or radio series",
    "sentence": "The last {{BLANK}} of the series ended with a big surprise, and fans have been discussing it online ever since.",
    "cn": "那部影集的最後一集以一個大驚喜收尾，粉絲們從那時起就一直在網路上討論。"
  },
  {
    "word": "studio",
    "pos": "n.",
    "cn_def": "攝影棚；錄音室",
    "en_def": "a room where TV, radio or music is recorded",
    "sentence": "We visited a TV {{BLANK}} on our school trip, and we were surprised by how small the set looked in real life.",
    "cn": "我們校外教學參觀了一間電視攝影棚，我們很驚訝實際上的布景看起來那麼小。"
  },
  {
    "word": "podcast",
    "pos": "n.",
    "cn_def": "播客；Podcast節目",
    "en_def": "a recorded audio programme you can download or stream",
    "sentence": "I listen to an English {{BLANK}} on the bus every morning, and it has really improved my listening skills.",
    "cn": "我每天早上在公車上聽一個英文播客節目，它真的提升了我的聽力。"
  },
  {
    "word": "airwaves",
    "pos": "n.",
    "cn_def": "廣播電波；廣播節目",
    "en_def": "the radio signals used for broadcasting",
    "sentence": "The song was all over the {{BLANK}} that summer, so you could hear it in shops, taxis and almost every café.",
    "cn": "那年夏天那首歌充斥廣播電台，所以在商店、計程車和幾乎每家咖啡廳都聽得到。"
  },
  {
    "word": "newscast",
    "pos": "n.",
    "cn_def": "新聞報導節目",
    "en_def": "a news programme on TV or radio",
    "sentence": "My parents watch the evening {{BLANK}} every day at seven, and they always discuss the main stories during dinner.",
    "cn": "晚間新聞節目是我爸媽每天七點必看的，晚餐時他們總是討論其中的主要新聞。"
  },
  {
    "word": "on-demand",
    "pos": "adj.",
    "cn_def": "隨選的",
    "en_def": "available whenever you want it",
    "sentence": "The {{BLANK}} service lets you watch shows whenever you like, so you no longer need to wait for a fixed time.",
    "cn": "這個隨選服務讓你隨時想看就看，所以你不再需要等固定的時段。"
  },
  {
    "word": "magazine",
    "pos": "n.",
    "cn_def": "雜誌",
    "en_def": "a thin weekly or monthly publication with articles and pictures",
    "sentence": "She bought a science {{BLANK}} at the airport, and the article about space travel kept her busy during the long flight.",
    "cn": "她在機場買了一本科學雜誌，那篇關於太空旅行的文章讓她在漫長的航程中不無聊。"
  },
  {
    "word": "edition",
    "pos": "n.",
    "cn_def": "版；版本；期",
    "en_def": "one printed version of a newspaper, book or magazine",
    "sentence": "The morning {{BLANK}} of the paper had already been printed, so the late news about the election appeared online first.",
    "cn": "報紙的早報版已經印好了，所以選舉的最新消息先出現在網路上。"
  },
  {
    "word": "print media",
    "pos": "n.phr.",
    "cn_def": "平面媒體",
    "en_def": "newspapers and magazines printed on paper",
    "sentence": "{{BLANK}} has lost many readers to the internet, but some people still trust printed newspapers more than websites.",
    "cn": "平面媒體已經因網路流失了許多讀者，但有些人仍然比較相信紙本報紙而不是網站。"
  },
  {
    "word": "mass media",
    "pos": "n.phr.",
    "cn_def": "大眾傳播媒體",
    "en_def": "TV, radio and newspapers that reach large numbers of people",
    "sentence": "The {{BLANK}} can shape public opinion quickly, so it has a responsibility to report facts carefully.",
    "cn": "大眾傳媒能迅速塑造輿論，所以它有責任謹慎地報導事實。"
  },
  {
    "word": "subtitle",
    "pos": "n.",
    "cn_def": "字幕",
    "en_def": "words at the bottom of the screen translating speech",
    "sentence": "I watch Korean dramas with English {{BLANK}}, because it helps me learn new words while I enjoy the story.",
    "cn": "我看韓劇時開英文字幕，因為這能幫助我在享受劇情的同時學新單字。"
  },
  {
    "word": "listener",
    "pos": "n.",
    "cn_def": "聽眾",
    "en_def": "a person who listens to a radio programme",
    "sentence": "One {{BLANK}} called the radio station to share her story, and the host thanked her for being so honest.",
    "cn": "一位聽眾打電話到電台分享她的故事，主持人感謝她如此坦誠。"
  }
];

const MCQS = [
  {
    "q": "The final match was _____ live on national television, so millions of people watched it at home and in restaurants.",
    "options": [
      "broadcast",
      "obfuscate",
      "woo",
      "eschew"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The public _____ does not show adverts, because it is paid for by taxes rather than by companies.",
    "options": [
      "retraction",
      "broadcaster",
      "cliché",
      "anthology"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Fewer young people watch _____ in the evening now, because they prefer short videos on their phones.",
    "options": [
      "takedown",
      "selfie",
      "television",
      "outreach"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "My favourite _____ is a science show for teenagers, and each episode explains one strange fact about nature.",
    "options": [
      "spectacle",
      "advertisement",
      "spokesperson",
      "programme"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "We watched a _____ about plastic in the ocean, and afterwards the whole class decided to stop using plastic straws.",
    "options": [
      "innuendo",
      "brand",
      "documentary",
      "vlogger"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The actor appeared on a late-night _____, and he told funny stories about the mistakes he made while filming.",
    "options": [
      "breaking news",
      "talk show",
      "direct message",
      "media literacy"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "My parents love an old American _____ about six friends in New York, so they watch the episodes again and again.",
    "options": [
      "impostor",
      "disclaimer",
      "marketing",
      "sitcom"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "My grandmother never misses her favourite _____, and she gets very upset when the characters argue or fall in love.",
    "options": [
      "soap opera",
      "direct message",
      "media literacy",
      "lateral reading"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The _____ claims to show real life, but some contestants later admitted that many scenes had been planned in advance.",
    "options": [
      "echo chamber",
      "reality show",
      "reverse image search",
      "smear campaign"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Many _____ complained about the violent scenes, so the channel moved the programme to a later time.",
    "options": [
      "viewer",
      "troll",
      "tirade",
      "spin"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The speaker made a joke at the beginning, and the whole _____ laughed, so she felt much more relaxed.",
    "options": [
      "catchphrase",
      "logo",
      "furore",
      "audience"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The show's _____ fell sharply after the main actor left, so the network decided to cancel it.",
    "options": [
      "profile",
      "byline",
      "ratings",
      "blunder"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Adverts shown during _____ are very expensive, because that is when the largest number of families are watching.",
    "options": [
      "public relations",
      "eye contact",
      "screen time",
      "prime time"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "During the _____ I quickly made some tea, but I missed the start of the next part of the film.",
    "options": [
      "commercial break",
      "word of mouth",
      "active listening",
      "media literacy"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The _____ of the quiz show was friendly and calm, so even nervous contestants were able to answer well.",
    "options": [
      "scoop",
      "frenzy",
      "host",
      "journalism"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The weather _____ pointed to the map and warned that heavy rain would arrive by the weekend, so people prepared early.",
    "options": [
      "brand",
      "presenter",
      "cliché",
      "anthology"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The _____ stayed calm while she reported the disaster, but viewers could see that she was deeply affected.",
    "options": [
      "takedown",
      "voicemail",
      "selfie",
      "newsreader"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The last _____ of the series ended with a big surprise, and fans have been discussing it online ever since.",
    "options": [
      "hearsay",
      "spectacle",
      "episode",
      "journalist"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "We visited a TV _____ on our school trip, and we were surprised by how small the set looked in real life.",
    "options": [
      "folly",
      "studio",
      "editor",
      "bot"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "I listen to an English _____ on the bus every morning, and it has really improved my listening skills.",
    "options": [
      "podcast",
      "slander",
      "bombardment",
      "eyewitness"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The song was all over the _____ that summer, so you could hear it in shops, taxis and almost every café.",
    "options": [
      "testimony",
      "conversation",
      "flyer",
      "airwaves"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "My parents watch the evening _____ every day at seven, and they always discuss the main stories during dinner.",
    "options": [
      "newscast",
      "marketing",
      "etiquette",
      "polemic"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The _____ service lets you watch shows whenever you like, so you no longer need to wait for a fixed time.",
    "options": [
      "scathing",
      "opinionated",
      "on-demand",
      "pejorative"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "She bought a science _____ at the airport, and the article about space travel kept her busy during the long flight.",
    "options": [
      "poster",
      "magazine",
      "oratory",
      "advertiser"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The morning _____ of the paper had already been printed, so the late news about the election appeared online first.",
    "options": [
      "edition",
      "dialogue",
      "trepidation",
      "advertisement"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "_____ has lost many readers to the internet, but some people still trust printed newspapers more than websites.",
    "options": [
      "front page",
      "social media",
      "small talk",
      "print media"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The _____ can shape public opinion quickly, so it has a responsibility to report facts carefully.",
    "options": [
      "breaking news",
      "lateral reading",
      "mass media",
      "word of mouth"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "I watch Korean dramas with English _____, because it helps me learn new words while I enjoy the story.",
    "options": [
      "treatise",
      "subtitle",
      "semblance",
      "correction"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "One _____ called the radio station to share her story, and the host thanked her for being so honest.",
    "options": [
      "sensationalism",
      "misstep",
      "listener",
      "gesture"
    ],
    "answer": 2,
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "broadcast": {
    "pos": "v.",
    "en_def": "to send out a programme on TV or radio",
    "cn_def": "播出；廣播"
  },
  "broadcaster": {
    "pos": "n.",
    "en_def": "a company or person that makes TV or radio programmes",
    "cn_def": "廣播公司；播報員"
  },
  "television": {
    "pos": "n.",
    "en_def": "a system or machine for watching programmes",
    "cn_def": "電視"
  },
  "programme": {
    "pos": "n.",
    "en_def": "a show on TV or radio",
    "cn_def": "節目"
  },
  "documentary": {
    "pos": "n.",
    "en_def": "a film or programme that gives facts about a real topic",
    "cn_def": "紀錄片"
  },
  "talk show": {
    "pos": "n.phr.",
    "en_def": "a programme where a host chats with guests",
    "cn_def": "脫口秀；談話節目"
  },
  "sitcom": {
    "pos": "n.",
    "en_def": "a funny TV series about the same characters",
    "cn_def": "情境喜劇"
  },
  "soap opera": {
    "pos": "n.phr.",
    "en_def": "a long-running drama series about people's lives",
    "cn_def": "肥皂劇；連續劇"
  },
  "reality show": {
    "pos": "n.phr.",
    "en_def": "a programme that films ordinary people in real situations",
    "cn_def": "真人實境秀"
  },
  "viewer": {
    "pos": "n.",
    "en_def": "a person who watches TV or videos",
    "cn_def": "觀眾"
  },
  "audience": {
    "pos": "n.",
    "en_def": "the people who watch, read or listen to something",
    "cn_def": "觀眾；聽眾；受眾"
  },
  "ratings": {
    "pos": "n.",
    "en_def": "numbers showing how many people watch a programme",
    "cn_def": "收視率"
  },
  "prime time": {
    "pos": "n.phr.",
    "en_def": "the evening hours when most people watch TV",
    "cn_def": "黃金時段"
  },
  "commercial break": {
    "pos": "n.phr.",
    "en_def": "a pause in a programme for adverts",
    "cn_def": "廣告時間；進廣告"
  },
  "host": {
    "pos": "n.",
    "en_def": "the person who introduces a show and talks to guests",
    "cn_def": "主持人"
  },
  "presenter": {
    "pos": "n.",
    "en_def": "a person who introduces a TV or radio programme",
    "cn_def": "節目主持人；主播"
  },
  "newsreader": {
    "pos": "n.",
    "en_def": "a person who reads the news on TV or radio",
    "cn_def": "新聞播報員；主播"
  },
  "episode": {
    "pos": "n.",
    "en_def": "one part of a TV or radio series",
    "cn_def": "（一）集"
  },
  "studio": {
    "pos": "n.",
    "en_def": "a room where TV, radio or music is recorded",
    "cn_def": "攝影棚；錄音室"
  },
  "podcast": {
    "pos": "n.",
    "en_def": "a recorded audio programme you can download or stream",
    "cn_def": "播客；Podcast節目"
  },
  "airwaves": {
    "pos": "n.",
    "en_def": "the radio signals used for broadcasting",
    "cn_def": "廣播電波；廣播節目"
  },
  "newscast": {
    "pos": "n.",
    "en_def": "a news programme on TV or radio",
    "cn_def": "新聞報導節目"
  },
  "on-demand": {
    "pos": "adj.",
    "en_def": "available whenever you want it",
    "cn_def": "隨選的"
  },
  "magazine": {
    "pos": "n.",
    "en_def": "a thin weekly or monthly publication with articles and pictures",
    "cn_def": "雜誌"
  },
  "edition": {
    "pos": "n.",
    "en_def": "one printed version of a newspaper, book or magazine",
    "cn_def": "版；版本；期"
  },
  "print media": {
    "pos": "n.phr.",
    "en_def": "newspapers and magazines printed on paper",
    "cn_def": "平面媒體"
  },
  "mass media": {
    "pos": "n.phr.",
    "en_def": "TV, radio and newspapers that reach large numbers of people",
    "cn_def": "大眾傳播媒體"
  },
  "subtitle": {
    "pos": "n.",
    "en_def": "words at the bottom of the screen translating speech",
    "cn_def": "字幕"
  },
  "listener": {
    "pos": "n.",
    "en_def": "a person who listens to a radio programme",
    "cn_def": "聽眾"
  },
  "obfuscate": {
    "pos": "v.",
    "en_def": "to make something deliberately unclear",
    "cn_def": "使模糊；混淆"
  },
  "woo": {
    "pos": "v.",
    "en_def": "to try to get someone's support",
    "cn_def": "爭取；拉攏"
  },
  "eschew": {
    "pos": "v.",
    "en_def": "to avoid something on purpose",
    "cn_def": "刻意避開；避免"
  },
  "retraction": {
    "pos": "n.",
    "en_def": "a statement saying something published earlier was wrong",
    "cn_def": "撤回聲明；撤稿"
  },
  "cliché": {
    "pos": "n.",
    "en_def": "an idea or phrase used so often it is no longer interesting",
    "cn_def": "陳腔濫調"
  },
  "anthology": {
    "pos": "n.",
    "en_def": "a book of works by different writers",
    "cn_def": "選集；文集"
  },
  "takedown": {
    "pos": "n.",
    "en_def": "the removal of content from a website",
    "cn_def": "下架；移除"
  },
  "selfie": {
    "pos": "n.",
    "en_def": "a photo you take of yourself",
    "cn_def": "自拍照"
  },
  "outreach": {
    "pos": "n.",
    "en_def": "efforts to give help or information to people",
    "cn_def": "推廣服務；外展活動"
  },
  "spectacle": {
    "pos": "n.",
    "en_def": "an event that is exciting or shocking to watch",
    "cn_def": "奇觀；引人注目的場面"
  },
  "advertisement": {
    "pos": "n.",
    "en_def": "a notice or video that tries to sell something",
    "cn_def": "廣告"
  },
  "spokesperson": {
    "pos": "n.",
    "en_def": "a person who speaks officially for a group",
    "cn_def": "發言人"
  },
  "innuendo": {
    "pos": "n.",
    "en_def": "an indirect remark suggesting something bad",
    "cn_def": "含沙射影的話；影射"
  },
  "brand": {
    "pos": "n.",
    "en_def": "a product name made by a particular company",
    "cn_def": "品牌"
  },
  "vlogger": {
    "pos": "n.",
    "en_def": "a person who makes video blogs",
    "cn_def": "影音部落客；Vlogger"
  },
  "breaking news": {
    "pos": "n.phr.",
    "en_def": "news about something that is happening right now",
    "cn_def": "即時新聞；快訊"
  },
  "direct message": {
    "pos": "n.phr.",
    "en_def": "a private message sent on social media",
    "cn_def": "私訊"
  },
  "media literacy": {
    "pos": "n.phr.",
    "en_def": "the ability to judge and understand news and media",
    "cn_def": "媒體素養"
  },
  "impostor": {
    "pos": "n.",
    "en_def": "a person who pretends to be someone else",
    "cn_def": "冒牌貨；冒名者"
  },
  "disclaimer": {
    "pos": "n.",
    "en_def": "a statement saying you are not responsible for something",
    "cn_def": "免責聲明"
  },
  "marketing": {
    "pos": "n.",
    "en_def": "the work of promoting and selling products",
    "cn_def": "行銷"
  },
  "lateral reading": {
    "pos": "n.phr.",
    "en_def": "checking a site by reading what other sites say about it",
    "cn_def": "橫向閱讀"
  },
  "echo chamber": {
    "pos": "n.phr.",
    "en_def": "an online space where you only hear opinions like your own",
    "cn_def": "同溫層；回音室"
  },
  "reverse image search": {
    "pos": "n.phr.",
    "en_def": "a search that finds where a picture first appeared",
    "cn_def": "以圖搜圖；反向圖片搜尋"
  },
  "smear campaign": {
    "pos": "n.phr.",
    "en_def": "an organised effort to damage someone's reputation with lies",
    "cn_def": "抹黑行動"
  },
  "troll": {
    "pos": "n.",
    "en_def": "a person who posts rude messages to upset others",
    "cn_def": "網路酸民"
  },
  "tirade": {
    "pos": "n.",
    "en_def": "a long, angry speech criticising someone",
    "cn_def": "激烈的長篇抨擊"
  },
  "spin": {
    "pos": "n.",
    "en_def": "presenting information in a way that makes you look good",
    "cn_def": "（對消息的）粉飾；操弄說法"
  },
  "catchphrase": {
    "pos": "n.",
    "en_def": "a short phrase that a famous person often says",
    "cn_def": "口頭禪；流行語"
  },
  "logo": {
    "pos": "n.",
    "en_def": "a symbol that represents a company",
    "cn_def": "商標；標誌"
  },
  "furore": {
    "pos": "n.",
    "en_def": "a sudden expression of public anger",
    "cn_def": "騷動；公憤"
  },
  "profile": {
    "pos": "n.",
    "en_def": "the page with information about a user",
    "cn_def": "個人檔案；個人頁面"
  },
  "byline": {
    "pos": "n.",
    "en_def": "the line that shows who wrote an article",
    "cn_def": "署名欄（作者署名）"
  },
  "blunder": {
    "pos": "n.",
    "en_def": "a careless and embarrassing mistake",
    "cn_def": "大錯；愚蠢的失誤"
  },
  "public relations": {
    "pos": "n.phr.",
    "en_def": "the work of creating a good image for an organisation",
    "cn_def": "公共關係；公關"
  },
  "eye contact": {
    "pos": "n.phr.",
    "en_def": "looking directly into someone's eyes",
    "cn_def": "眼神接觸"
  },
  "screen time": {
    "pos": "n.phr.",
    "en_def": "the time you spend looking at a screen",
    "cn_def": "螢幕使用時間"
  },
  "word of mouth": {
    "pos": "n.phr.",
    "en_def": "information passed from person to person by talking",
    "cn_def": "口耳相傳；口碑"
  },
  "active listening": {
    "pos": "n.phr.",
    "en_def": "listening carefully and showing that you understand",
    "cn_def": "主動聆聽；積極傾聽"
  },
  "scoop": {
    "pos": "n.",
    "en_def": "an important story one newspaper reports first",
    "cn_def": "獨家新聞"
  },
  "frenzy": {
    "pos": "n.",
    "en_def": "a state of wild excitement",
    "cn_def": "狂熱；瘋狂"
  },
  "journalism": {
    "pos": "n.",
    "en_def": "the work of collecting and writing news",
    "cn_def": "新聞業；新聞工作"
  },
  "voicemail": {
    "pos": "n.",
    "en_def": "a spoken message left on a phone",
    "cn_def": "語音留言"
  },
  "hearsay": {
    "pos": "n.",
    "en_def": "information you heard from others but cannot prove",
    "cn_def": "傳聞；道聽塗說"
  },
  "journalist": {
    "pos": "n.",
    "en_def": "a person who writes or reports the news",
    "cn_def": "記者；新聞工作者"
  },
  "folly": {
    "pos": "n.",
    "en_def": "a foolish action or idea",
    "cn_def": "愚蠢；愚行"
  },
  "editor": {
    "pos": "n.",
    "en_def": "a person who checks and decides what is published",
    "cn_def": "編輯；主編"
  },
  "bot": {
    "pos": "n.",
    "en_def": "a computer program that acts like a real user online",
    "cn_def": "機器人帳號；網軍程式"
  },
  "slander": {
    "pos": "n.",
    "en_def": "false spoken statements that damage someone's reputation",
    "cn_def": "（口頭）誹謗；中傷"
  },
  "bombardment": {
    "pos": "n.",
    "en_def": "a very large number of things directed at someone",
    "cn_def": "轟炸；大量湧入"
  },
  "eyewitness": {
    "pos": "n.",
    "en_def": "a person who saw an event happen",
    "cn_def": "目擊者"
  },
  "testimony": {
    "pos": "n.",
    "en_def": "a formal statement about what someone saw or knows",
    "cn_def": "證詞"
  },
  "conversation": {
    "pos": "n.",
    "en_def": "a talk between two or more people",
    "cn_def": "對話；談話"
  },
  "flyer": {
    "pos": "n.",
    "en_def": "a printed paper giving information about an event or offer",
    "cn_def": "傳單"
  },
  "etiquette": {
    "pos": "n.",
    "en_def": "the rules of polite behaviour",
    "cn_def": "禮節；禮儀"
  },
  "polemic": {
    "pos": "n.",
    "en_def": "a strong written or spoken attack on an idea",
    "cn_def": "論戰文章；猛烈抨擊"
  },
  "scathing": {
    "pos": "adj.",
    "en_def": "criticising very strongly",
    "cn_def": "尖刻的；嚴厲的"
  },
  "opinionated": {
    "pos": "adj.",
    "en_def": "having strong views and expressing them too often",
    "cn_def": "固執己見的"
  },
  "pejorative": {
    "pos": "adj.",
    "en_def": "expressing disapproval or a low opinion",
    "cn_def": "貶義的"
  },
  "poster": {
    "pos": "n.",
    "en_def": "a large printed picture or notice on a wall",
    "cn_def": "海報"
  },
  "oratory": {
    "pos": "n.",
    "en_def": "the skill of making powerful public speeches",
    "cn_def": "演說技巧；雄辯術"
  },
  "advertiser": {
    "pos": "n.",
    "en_def": "a company that pays for adverts",
    "cn_def": "廣告主；廣告商"
  },
  "dialogue": {
    "pos": "n.",
    "en_def": "a discussion between groups to solve a problem",
    "cn_def": "對話；交流"
  },
  "trepidation": {
    "pos": "n.",
    "en_def": "a feeling of fear about something that may happen",
    "cn_def": "惶恐；憂慮"
  },
  "front page": {
    "pos": "n.phr.",
    "en_def": "the first page of a newspaper with the main news",
    "cn_def": "頭版"
  },
  "social media": {
    "pos": "n.phr.",
    "en_def": "websites and apps where people share content and talk",
    "cn_def": "社群媒體"
  },
  "small talk": {
    "pos": "n.phr.",
    "en_def": "polite conversation about unimportant things",
    "cn_def": "閒聊；寒暄"
  },
  "treatise": {
    "pos": "n.",
    "en_def": "a long, serious piece of writing on a subject",
    "cn_def": "專著；論文"
  },
  "semblance": {
    "pos": "n.",
    "en_def": "a situation that looks like something but may not be",
    "cn_def": "表象；外觀"
  },
  "correction": {
    "pos": "n.",
    "en_def": "a notice that fixes a mistake in a report",
    "cn_def": "更正啟事；更正"
  },
  "sensationalism": {
    "pos": "n.",
    "en_def": "presenting news in a shocking way to attract attention",
    "cn_def": "譁眾取寵的報導手法；煽情主義"
  },
  "misstep": {
    "pos": "n.",
    "en_def": "a mistake in action or judgement",
    "cn_def": "失策；失誤"
  },
  "gesture": {
    "pos": "n.",
    "en_def": "a movement of the hand or head to show meaning",
    "cn_def": "手勢；姿態"
  }
};

const EXTRA_GLOSSES = {};
