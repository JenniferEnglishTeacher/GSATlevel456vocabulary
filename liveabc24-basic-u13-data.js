// Unit 13 Quiz Data: character – prime
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Basic U13 - character – prime",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "character",
    "pos": "n.",
    "cn_def": "角色",
    "en_def": "a person in a book, play or film",
    "sentence": "In the novel, the main {{BLANK}} faces many challenges.",
    "cn": "在小說中，主角面臨許多挑戰。"
  },
  {
    "word": "character",
    "pos": "n.",
    "cn_def": "漢文文字",
    "en_def": "a letter or sign used in writing, especially in Chinese",
    "sentence": "Each Chinese {{BLANK}} has its unique meaning and pronunciation.",
    "cn": "每個漢字都有其獨特的意義和發音。"
  },
  {
    "word": "character",
    "pos": "n.",
    "cn_def": "事務特性特質",
    "en_def": "the qualities that make a person or thing different from others",
    "sentence": "Honesty is an important {{BLANK}} in a good leader.",
    "cn": "誠實是優秀領導者的一個重要特質。"
  },
  {
    "word": "characteristic",
    "pos": "n.",
    "cn_def": "特色",
    "en_def": "a typical feature or quality that someone or something has",
    "sentence": "The {{BLANK}} of this wine is its rich aroma.",
    "cn": "這種葡萄酒的特色是其濃郁的香氣。"
  },
  {
    "word": "characteristic",
    "pos": "adj.",
    "cn_def": "特有的，表示出特性的",
    "en_def": "typical of a particular person or thing",
    "sentence": "This bird is known for its {{BLANK}} bright plumage.",
    "cn": "這種鳥以其特有的鮮豔羽毛聞名。"
  },
  {
    "word": "is characteristic of",
    "pos": "phr.",
    "cn_def": "是…的特徵",
    "en_def": "to be typical of a person or thing",
    "sentence": "The use of vivid colors {{BLANK}} her painting style.",
    "cn": "使用鮮豔的顏色是她的繪畫風格的特徵。"
  },
  {
    "word": "sparked",
    "pos": "v.",
    "cn_def": "引發",
    "en_def": "to cause something such as an argument or interest to start",
    "sentence": "The politician's speech {{BLANK}} a lot of public debate.",
    "cn": "政治家的演講引發了許多公共辯論。"
  },
  {
    "word": "sparks",
    "pos": "v.",
    "cn_def": "點燃火花",
    "en_def": "to make a fire start; to produce small flashes of fire",
    "sentence": "Rubbing the two stones together {{BLANK}} a fire.",
    "cn": "兩塊石頭摩擦在一起點燃了火。"
  },
  {
    "word": "spark",
    "pos": "n.",
    "cn_def": "點燃",
    "en_def": "a tiny bright piece of burning material that flies from a fire",
    "sentence": "The {{BLANK}} from the firework was beautiful.",
    "cn": "煙火的火花很美。"
  },
  {
    "word": "spark",
    "pos": "n.",
    "cn_def": "閃光",
    "en_def": "a small flash of light",
    "sentence": "The diamond ring had a bright {{BLANK}} in the sunlight.",
    "cn": "鑽石戒指在陽光下有亮麗的閃光。"
  },
  {
    "word": "sparkle",
    "pos": "v.",
    "cn_def": "閃耀",
    "en_def": "to shine brightly with small flashes of light",
    "sentence": "The stars {{BLANK}} in the night sky.",
    "cn": "星星在夜空中閃耀。"
  },
  {
    "word": "sparkling",
    "pos": "adj.",
    "cn_def": "閃閃發光的",
    "en_def": "shining brightly with small flashes of light",
    "sentence": "Her {{BLANK}} eyes revealed her excitement.",
    "cn": "她閃閃發光的眼睛透露出她的興奮。"
  },
  {
    "word": "intense",
    "pos": "adj.",
    "cn_def": "強烈的",
    "en_def": "very strong or great",
    "sentence": "The {{BLANK}} heat of the summer sun can be overwhelming.",
    "cn": "夏日烈日的強烈熱度可能令人難以承受。"
  },
  {
    "word": "intensified",
    "pos": "v.",
    "cn_def": "加劇",
    "en_def": "to become or make something stronger or greater",
    "sentence": "The debate {{BLANK}} as opinions clashed.",
    "cn": "隨著意見的衝突，辯論加劇了。"
  },
  {
    "word": "intensity",
    "pos": "n.",
    "cn_def": "強度",
    "en_def": "the strength or great degree of something",
    "sentence": "The {{BLANK}} of the workout left everyone exhausted.",
    "cn": "運動的強度讓每個人都筋疲力盡。"
  },
  {
    "word": "intensive",
    "pos": "adj.",
    "cn_def": "密集的",
    "en_def": "involving a lot of work or activity in a short time",
    "sentence": "The course offers {{BLANK}} language training.",
    "cn": "課程提供密集的語言訓練。"
  },
  {
    "word": "Intensive reading",
    "pos": "phr.",
    "cn_def": "精讀",
    "en_def": "reading a short text slowly and carefully to understand every detail",
    "sentence": "{{BLANK}} helps students to understand the text deeply.",
    "cn": "精讀幫助學生深入理解文本。"
  },
  {
    "word": "tense",
    "pos": "adj.",
    "cn_def": "緊張的",
    "en_def": "nervous and unable to relax",
    "sentence": "The atmosphere in the room was {{BLANK}} during the meeting.",
    "cn": "會議期間，房間內的氣氛很緊張。"
  },
  {
    "word": "tension",
    "pos": "n.",
    "cn_def": "緊張",
    "en_def": "a feeling of worry that makes it hard to relax; an unfriendly feeling between people",
    "sentence": "The {{BLANK}} between the two countries is rising.",
    "cn": "兩國之間的緊張局勢正在上升。"
  },
  {
    "word": "argue",
    "pos": "v.",
    "cn_def": "爭吵",
    "en_def": "to speak angrily to someone because you disagree",
    "sentence": "They often {{BLANK}} about trivial matters.",
    "cn": "他們經常為了瑣事爭吵。"
  },
  {
    "word": "argues",
    "pos": "v.",
    "cn_def": "主張",
    "en_def": "to give reasons why you think something is true or right",
    "sentence": "He {{BLANK}} that more research is needed on this topic.",
    "cn": "他主張這個話題需要更多研究。"
  },
  {
    "word": "argument",
    "pos": "n.",
    "cn_def": "爭吵",
    "en_def": "an angry disagreement between people",
    "sentence": "Their {{BLANK}} ended in a mutual apology.",
    "cn": "他們的爭吵以彼此道歉而結束。"
  },
  {
    "word": "argument",
    "pos": "n.",
    "cn_def": "論點",
    "en_def": "a reason or set of reasons given to support an idea",
    "sentence": "Her {{BLANK}} was supported by strong evidence and proof.",
    "cn": "她的論點得到了強有力的證據支持。"
  },
  {
    "word": "illustrated",
    "pos": "v.",
    "cn_def": "畫插圖",
    "en_def": "to add pictures to a book or magazine",
    "sentence": "The book is beautifully {{BLANK}} by a famous artist.",
    "cn": "這本書由一位著名藝術家精美插圖。"
  },
  {
    "word": "illustration",
    "pos": "n.",
    "cn_def": "插畫",
    "en_def": "a picture or drawing in a book or magazine",
    "sentence": "The {{BLANK}} in the book brought the story to life.",
    "cn": "書中的插畫使故事栩栩如生。"
  },
  {
    "word": "illustrate",
    "pos": "v.",
    "cn_def": "圖示，解說",
    "en_def": "to make the meaning of something clearer by using examples or pictures",
    "sentence": "The professor used a diagram to {{BLANK}} his point.",
    "cn": "教授用一個圖表來說明他的觀點。"
  },
  {
    "word": "illustration",
    "pos": "n.",
    "cn_def": "解說",
    "en_def": "an example or picture that makes something easier to understand",
    "sentence": "The {{BLANK}} on the board helped students understand the concept.",
    "cn": "黑板上的解說幫助學生理解概念。"
  },
  {
    "word": "Before long",
    "pos": "phr.",
    "cn_def": "不久",
    "en_def": "soon; after a short time",
    "sentence": "{{BLANK}}, she became proficient in three languages.",
    "cn": "不久，她精通了三種語言。"
  },
  {
    "word": "in no time",
    "pos": "phr.",
    "cn_def": "很快",
    "en_def": "very quickly; almost at once",
    "sentence": "He finished the task {{BLANK}}.",
    "cn": "他很快就完成了任務。"
  },
  {
    "word": "revise",
    "pos": "v.",
    "cn_def": "修訂",
    "en_def": "to change something written in order to correct or improve it",
    "sentence": "She had to {{BLANK}} her essay before submission.",
    "cn": "她必須在提交前修訂她的文章。"
  },
  {
    "word": "revised",
    "pos": "adj.",
    "cn_def": "經修訂的",
    "en_def": "changed in order to correct or improve it",
    "sentence": "The {{BLANK}} edition of the book included additional chapters.",
    "cn": "這本書的修訂版加入了額外的章節。"
  },
  {
    "word": "revisions",
    "pos": "n.",
    "cn_def": "修訂",
    "en_def": "a change made to correct or improve something written",
    "sentence": "The document went through several {{BLANK}} before final approval.",
    "cn": "這份文件在最終批准前經歷了好幾次修訂。"
  },
  {
    "word": "modified",
    "pos": "v.",
    "cn_def": "修改",
    "en_def": "to change something slightly to improve it or make it more suitable",
    "sentence": "The plan had to be {{BLANK}} to meet new requirements.",
    "cn": "計劃必須修改以滿足新的要求。"
  },
  {
    "word": "genetically-modified food",
    "pos": "phr.",
    "cn_def": "基因改造食品",
    "en_def": "food from plants or animals whose genes have been changed by scientists",
    "sentence": "Many people have concerns about the safety of {{BLANK}}.",
    "cn": "許多人對基因改造食品的安全性有所擔憂。"
  },
  {
    "word": "modifications",
    "pos": "n.",
    "cn_def": "修改",
    "en_def": "a small change made to improve something",
    "sentence": "The car underwent several {{BLANK}} to improve its performance.",
    "cn": "為了提高性能，這輛車進行了幾次修改。"
  },
  {
    "word": "lock",
    "pos": "v.",
    "cn_def": "鎖",
    "en_def": "to fasten a door or box with a key so that it cannot be opened",
    "sentence": "Remember to {{BLANK}} the door when you leave.",
    "cn": "離開時記得鎖門。"
  },
  {
    "word": "lock",
    "pos": "n.",
    "cn_def": "鎖",
    "en_def": "a device that keeps a door or box fastened and is opened with a key",
    "sentence": "She lost the key to the {{BLANK}}.",
    "cn": "她丟了鎖的鑰匙。"
  },
  {
    "word": "unlock",
    "pos": "v.",
    "cn_def": "解鎖",
    "en_def": "to open something using a key or code",
    "sentence": "He used the code to {{BLANK}} the safe.",
    "cn": "他用密碼來解開保險箱。"
  },
  {
    "word": "locker",
    "pos": "n.",
    "cn_def": "儲物櫃",
    "en_def": "a small cupboard that can be locked, where you keep your things",
    "sentence": "He stored his belongings in the {{BLANK}} at the gym.",
    "cn": "他在健身房的儲物櫃裡存放了他的個人物品。"
  },
  {
    "word": "voiced",
    "pos": "v.",
    "cn_def": "表明意見",
    "en_def": "to tell people your feelings or opinions",
    "sentence": "She {{BLANK}} her concerns at the meeting.",
    "cn": "她在會議上表達了她的擔憂。"
  },
  {
    "word": "voices",
    "pos": "v.",
    "cn_def": "配音旁白",
    "en_def": "to speak the words of a character in a cartoon or film",
    "sentence": "He {{BLANK}} a character in the animated film.",
    "cn": "他為動畫電影中的一個角色配音。"
  },
  {
    "word": "voice",
    "pos": "n.",
    "cn_def": "聲音",
    "en_def": "the sounds a person makes when speaking or singing",
    "sentence": "Her {{BLANK}} was soft and soothing.",
    "cn": "她的聲音柔和且舒緩。"
  },
  {
    "word": "voicemail",
    "pos": "n.",
    "cn_def": "語音郵件",
    "en_def": "an electronic system that records telephone messages",
    "sentence": "He left a message on her {{BLANK}}.",
    "cn": "他在她的語音郵件上留了消息。"
  },
  {
    "word": "gives voice to",
    "pos": "phr.",
    "cn_def": "表達",
    "en_def": "to express a feeling or opinion",
    "sentence": "The article {{BLANK}} the concerns of the community.",
    "cn": "這篇文章表達了社區的擔憂。"
  },
  {
    "word": "opinion",
    "pos": "n.",
    "cn_def": "意見",
    "en_def": "what you think or believe about something",
    "sentence": "In my {{BLANK}}, the plan is not feasible.",
    "cn": "我認為這個計劃是不可行的。"
  },
  {
    "word": "In my opinion",
    "pos": "phr.",
    "cn_def": "我認為",
    "en_def": "used to say what you personally think",
    "sentence": "{{BLANK}}, we should approach the problem differently.",
    "cn": "我認為，我們應該用不同的方式來處理這個問題。"
  },
  {
    "word": "voice your opinion",
    "pos": "phr.",
    "cn_def": "發表意見",
    "en_def": "to say what you think about something",
    "sentence": "It is important to {{BLANK}} in a democratic society.",
    "cn": "在民主社會中發表意見是很重要的。"
  },
  {
    "word": "proof",
    "pos": "n.",
    "cn_def": "證據",
    "en_def": "facts or information that show something is true",
    "sentence": "The {{BLANK}} of his innocence was undeniable.",
    "cn": "他清白的證據是不可否認的。"
  },
  {
    "word": "the proof is in the pudding",
    "pos": "phr.",
    "cn_def": "結果證明一切",
    "en_def": "you can only judge something by trying or testing it",
    "sentence": "We'll see if the plan works; {{BLANK}}.",
    "cn": "我們將看到計劃是否有效；結果證明一切。"
  },
  {
    "word": "water-proof",
    "pos": "adj.",
    "cn_def": "防水的",
    "en_def": "not letting water pass through",
    "sentence": "She bought a {{BLANK}} watch for her diving trip.",
    "cn": "她為她的潛水之旅買了一塊防水手錶。"
  },
  {
    "word": "wind-proof",
    "pos": "adj.",
    "cn_def": "防風的",
    "en_def": "protecting you from the wind",
    "sentence": "The {{BLANK}} jacket was perfect for the hike.",
    "cn": "這件防風夾克非常適合遠足。"
  },
  {
    "word": "bullet-proof",
    "pos": "adj.",
    "cn_def": "防彈的",
    "en_def": "able to stop bullets from passing through",
    "sentence": "The police wore {{BLANK}} vests during the operation.",
    "cn": "警察在行動中穿著防彈背心。"
  },
  {
    "word": "proved",
    "pos": "v.",
    "cn_def": "證明",
    "en_def": "to use facts to show that something is true",
    "sentence": "The experiment {{BLANK}} his theory to be correct.",
    "cn": "實驗證明他的理論是正確的。"
  },
  {
    "word": "proved",
    "pos": "adj.",
    "cn_def": "被證明的",
    "en_def": "shown by facts to be true",
    "sentence": "The {{BLANK}} benefits of exercise are numerous.",
    "cn": "運動被證明的好處是眾多的。"
  },
  {
    "word": "commented",
    "pos": "v.",
    "cn_def": "評論",
    "en_def": "to give your opinion about something",
    "sentence": "The teacher {{BLANK}} on the student's progress.",
    "cn": "老師評論了學生的進步。"
  },
  {
    "word": "comment",
    "pos": "n.",
    "cn_def": "評論",
    "en_def": "something you say or write that gives your opinion",
    "sentence": "His {{BLANK}} on the issue was insightful.",
    "cn": "他對這個問題的評論很有洞察力。"
  },
  {
    "word": "made a comment on",
    "pos": "phr.",
    "cn_def": "對…作評論",
    "en_def": "to say what you think about something",
    "sentence": "Many people {{BLANK}} the new policy.",
    "cn": "許多人對新政策作出了評論。"
  },
  {
    "word": "had no comment on",
    "pos": "phr.",
    "cn_def": "對…無可評論",
    "en_def": "to refuse to say anything about a subject",
    "sentence": "The official said he {{BLANK}} the ongoing investigation.",
    "cn": "官員說他對正在進行的調查無可評論。"
  },
  {
    "word": "imply",
    "pos": "v.",
    "cn_def": "暗示",
    "en_def": "to suggest that something is true without saying it directly",
    "sentence": "His silence seemed to {{BLANK}} disapproval.",
    "cn": "他的沉默似乎暗示著不贊同。"
  },
  {
    "word": "implied",
    "pos": "adj.",
    "cn_def": "被暗示的",
    "en_def": "suggested but not said directly",
    "sentence": "The {{BLANK}} meaning of his words was clear.",
    "cn": "他話語中被暗示的意思是清楚的。"
  },
  {
    "word": "implications",
    "pos": "n.",
    "cn_def": "暗示",
    "en_def": "a possible effect or result of an action; something suggested but not said directly",
    "sentence": "The {{BLANK}} of his statement were far-reaching.",
    "cn": "他的聲明所暗示的後果是深遠的。"
  },
  {
    "word": "interprets",
    "pos": "v.",
    "cn_def": "解釋",
    "en_def": "to explain or decide what something means",
    "sentence": "She {{BLANK}} the poem in a unique way.",
    "cn": "她以一種獨特的方式解釋了這首詩。"
  },
  {
    "word": "interpreted",
    "pos": "phr.",
    "cn_def": "把A解釋為B",
    "en_def": "to understand something as having a particular meaning",
    "sentence": "He {{BLANK}} her silence as agreement.",
    "cn": "他把她的沉默解釋為同意。"
  },
  {
    "word": "interpretations",
    "pos": "n.",
    "cn_def": "解釋",
    "en_def": "an explanation or opinion of what something means",
    "sentence": "Different experts had different {{BLANK}} of the data.",
    "cn": "不同的專家對數據有不同的解釋。"
  },
  {
    "word": "secondary",
    "pos": "adj.",
    "cn_def": "次要的",
    "en_def": "less important than something else; coming after the first stage",
    "sentence": "The {{BLANK}} effects of the medication were minimal.",
    "cn": "藥物的次要作用是微乎其微的。"
  },
  {
    "word": "primary",
    "pos": "adj.",
    "cn_def": "主要的",
    "en_def": "main; most important; coming first",
    "sentence": "The {{BLANK}} goal of the project was to improve safety.",
    "cn": "該項目的主要目標是提高安全性。"
  },
  {
    "word": "prime",
    "pos": "adj.",
    "cn_def": "主要的, 最重要的",
    "en_def": "main; most important; of the best quality",
    "sentence": "The building is in a {{BLANK}} location in the city center.",
    "cn": "這棟建築位於市中心的黃金位置。"
  },
  {
    "word": "prime",
    "pos": "n.",
    "cn_def": "鼎盛時期",
    "en_def": "the time in your life when you are strongest and most successful",
    "sentence": "Many believe that the athlete is now in his {{BLANK}}.",
    "cn": "許多人認為這位運動員現在正處於他的全盛時期。"
  }
];

const MCQS = [
  {
    "q": "In the novel, the main ______ faces many challenges.",
    "options": [
      "voice",
      "implications",
      "character",
      "characteristic"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Each Chinese ______ has its unique meaning and pronunciation.",
    "options": [
      "intensity",
      "voicemail",
      "opinion",
      "character"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Honesty is an important ______ in a good leader.",
    "options": [
      "character",
      "lock",
      "voicemail",
      "illustration"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The ______ of this wine is its rich aroma.",
    "options": [
      "spark",
      "characteristic",
      "character",
      "tension"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "This bird is known for its ______ bright plumage.",
    "options": [
      "sparkling",
      "secondary",
      "bullet-proof",
      "characteristic"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The use of vivid colors ______ her painting style.",
    "options": [
      "is characteristic of",
      "Intensive reading",
      "gives voice to",
      "genetically-modified food"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The politician's speech ______ a lot of public debate.",
    "options": [
      "lock",
      "sparked",
      "argue",
      "sparkle"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Rubbing the two stones together ______ a fire.",
    "options": [
      "modified",
      "argue",
      "sparks",
      "lock"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The ______ from the firework was beautiful.",
    "options": [
      "interpretations",
      "locker",
      "characteristic",
      "spark"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The diamond ring had a bright ______ in the sunlight.",
    "options": [
      "interpretations",
      "spark",
      "opinion",
      "implications"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The stars ______ in the night sky.",
    "options": [
      "sparkle",
      "voices",
      "revise",
      "illustrated"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Her ______ eyes revealed her excitement.",
    "options": [
      "primary",
      "secondary",
      "sparkling",
      "proved"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The ______ heat of the summer sun can be overwhelming.",
    "options": [
      "intense",
      "tense",
      "proved",
      "secondary"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The debate ______ as opinions clashed.",
    "options": [
      "imply",
      "proved",
      "sparkle",
      "intensified"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The ______ of the workout left everyone exhausted.",
    "options": [
      "argument",
      "implications",
      "intensity",
      "opinion"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The course offers ______ language training.",
    "options": [
      "prime",
      "intensive",
      "primary",
      "water-proof"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "______ helps students to understand the text deeply.",
    "options": [
      "is characteristic of",
      "In my opinion",
      "interpreted",
      "Intensive reading"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The atmosphere in the room was ______ during the meeting.",
    "options": [
      "sparkling",
      "characteristic",
      "tense",
      "proved"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The ______ between the two countries is rising.",
    "options": [
      "spark",
      "tension",
      "voice",
      "voicemail"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "They often ______ about trivial matters.",
    "options": [
      "argue",
      "illustrate",
      "voiced",
      "revise"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "He ______ that more research is needed on this topic.",
    "options": [
      "revise",
      "proved",
      "intensified",
      "argues"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Their ______ ended in a mutual apology.",
    "options": [
      "comment",
      "spark",
      "argument",
      "tension"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Her ______ was supported by strong evidence and proof.",
    "options": [
      "argument",
      "voice",
      "illustration",
      "tension"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The book is beautifully ______ by a famous artist.",
    "options": [
      "intensified",
      "illustrated",
      "sparkle",
      "interprets"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The ______ in the book brought the story to life.",
    "options": [
      "characteristic",
      "opinion",
      "illustration",
      "voice"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The professor used a diagram to ______ his point.",
    "options": [
      "commented",
      "lock",
      "sparkle",
      "illustrate"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The ______ on the board helped students understand the concept.",
    "options": [
      "illustration",
      "interpretations",
      "voicemail",
      "revisions"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "______, she became proficient in three languages.",
    "options": [
      "the proof is in the pudding",
      "Before long",
      "is characteristic of",
      "Intensive reading"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "He finished the task ______.",
    "options": [
      "genetically-modified food",
      "made a comment on",
      "gives voice to",
      "in no time"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "She had to ______ her essay before submission.",
    "options": [
      "voiced",
      "commented",
      "revise",
      "illustrated"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The ______ edition of the book included additional chapters.",
    "options": [
      "revised",
      "intensive",
      "implied",
      "tense"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The document went through several ______ before final approval.",
    "options": [
      "interpretations",
      "revisions",
      "modifications",
      "spark"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The plan had to be ______ to meet new requirements.",
    "options": [
      "sparked",
      "illustrated",
      "modified",
      "voices"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Many people have concerns about the safety of ______.",
    "options": [
      "is characteristic of",
      "genetically-modified food",
      "interpreted",
      "In my opinion"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "The car underwent several ______ to improve its performance.",
    "options": [
      "modifications",
      "tension",
      "comment",
      "intensity"
    ],
    "answer": 0,
    "vocabIndex": 34
  },
  {
    "q": "Remember to ______ the door when you leave.",
    "options": [
      "sparked",
      "sparkle",
      "voiced",
      "lock"
    ],
    "answer": 3,
    "vocabIndex": 35
  },
  {
    "q": "She lost the key to the ______.",
    "options": [
      "intensity",
      "voicemail",
      "lock",
      "characteristic"
    ],
    "answer": 2,
    "vocabIndex": 36
  },
  {
    "q": "He used the code to ______ the safe.",
    "options": [
      "lock",
      "illustrate",
      "sparked",
      "unlock"
    ],
    "answer": 3,
    "vocabIndex": 37
  },
  {
    "q": "He stored his belongings in the ______ at the gym.",
    "options": [
      "prime",
      "locker",
      "character",
      "comment"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "She ______ her concerns at the meeting.",
    "options": [
      "voiced",
      "argues",
      "commented",
      "argue"
    ],
    "answer": 0,
    "vocabIndex": 39
  },
  {
    "q": "He ______ a character in the animated film.",
    "options": [
      "unlock",
      "revise",
      "voices",
      "commented"
    ],
    "answer": 2,
    "vocabIndex": 40
  },
  {
    "q": "Her ______ was soft and soothing.",
    "options": [
      "voicemail",
      "voice",
      "argument",
      "illustration"
    ],
    "answer": 1,
    "vocabIndex": 41
  },
  {
    "q": "He left a message on her ______.",
    "options": [
      "voicemail",
      "interpretations",
      "opinion",
      "illustration"
    ],
    "answer": 0,
    "vocabIndex": 42
  },
  {
    "q": "The article ______ the concerns of the community.",
    "options": [
      "interpreted",
      "Intensive reading",
      "In my opinion",
      "gives voice to"
    ],
    "answer": 3,
    "vocabIndex": 43
  },
  {
    "q": "In my ______, the plan is not feasible.",
    "options": [
      "spark",
      "opinion",
      "tension",
      "voicemail"
    ],
    "answer": 1,
    "vocabIndex": 44
  },
  {
    "q": "______, we should approach the problem differently.",
    "options": [
      "the proof is in the pudding",
      "is characteristic of",
      "In my opinion",
      "Before long"
    ],
    "answer": 2,
    "vocabIndex": 45
  },
  {
    "q": "It is important to ______ in a democratic society.",
    "options": [
      "voice your opinion",
      "gives voice to",
      "Before long",
      "had no comment on"
    ],
    "answer": 0,
    "vocabIndex": 46
  },
  {
    "q": "The ______ of his innocence was undeniable.",
    "options": [
      "spark",
      "revisions",
      "intensity",
      "proof"
    ],
    "answer": 3,
    "vocabIndex": 47
  },
  {
    "q": "We'll see if the plan works; ______.",
    "options": [
      "had no comment on",
      "the proof is in the pudding",
      "genetically-modified food",
      "voice your opinion"
    ],
    "answer": 1,
    "vocabIndex": 48
  },
  {
    "q": "She bought a ______ watch for her diving trip.",
    "options": [
      "proved",
      "sparkling",
      "water-proof",
      "revised"
    ],
    "answer": 2,
    "vocabIndex": 49
  },
  {
    "q": "The ______ jacket was perfect for the hike.",
    "options": [
      "revised",
      "proved",
      "primary",
      "wind-proof"
    ],
    "answer": 3,
    "vocabIndex": 50
  },
  {
    "q": "The police wore ______ vests during the operation.",
    "options": [
      "bullet-proof",
      "intense",
      "primary",
      "revised"
    ],
    "answer": 0,
    "vocabIndex": 51
  },
  {
    "q": "The experiment ______ his theory to be correct.",
    "options": [
      "modified",
      "illustrated",
      "proved",
      "commented"
    ],
    "answer": 2,
    "vocabIndex": 52
  },
  {
    "q": "The ______ benefits of exercise are numerous.",
    "options": [
      "proved",
      "wind-proof",
      "water-proof",
      "intense"
    ],
    "answer": 0,
    "vocabIndex": 53
  },
  {
    "q": "The teacher ______ on the student's progress.",
    "options": [
      "proved",
      "sparks",
      "sparked",
      "commented"
    ],
    "answer": 3,
    "vocabIndex": 54
  },
  {
    "q": "His ______ on the issue was insightful.",
    "options": [
      "opinion",
      "comment",
      "argument",
      "revisions"
    ],
    "answer": 1,
    "vocabIndex": 55
  },
  {
    "q": "Many people ______ the new policy.",
    "options": [
      "interpreted",
      "the proof is in the pudding",
      "In my opinion",
      "made a comment on"
    ],
    "answer": 3,
    "vocabIndex": 56
  },
  {
    "q": "The official said he ______ the ongoing investigation.",
    "options": [
      "in no time",
      "had no comment on",
      "made a comment on",
      "voice your opinion"
    ],
    "answer": 1,
    "vocabIndex": 57
  },
  {
    "q": "His silence seemed to ______ disapproval.",
    "options": [
      "argue",
      "revise",
      "imply",
      "lock"
    ],
    "answer": 2,
    "vocabIndex": 58
  },
  {
    "q": "The ______ meaning of his words was clear.",
    "options": [
      "implied",
      "bullet-proof",
      "revised",
      "primary"
    ],
    "answer": 0,
    "vocabIndex": 59
  },
  {
    "q": "The ______ of his statement were far-reaching.",
    "options": [
      "prime",
      "implications",
      "character",
      "voicemail"
    ],
    "answer": 1,
    "vocabIndex": 60
  },
  {
    "q": "She ______ the poem in a unique way.",
    "options": [
      "interprets",
      "unlock",
      "sparkle",
      "modified"
    ],
    "answer": 0,
    "vocabIndex": 61
  },
  {
    "q": "He ______ her silence as agreement.",
    "options": [
      "In my opinion",
      "made a comment on",
      "had no comment on",
      "interpreted"
    ],
    "answer": 3,
    "vocabIndex": 62
  },
  {
    "q": "Different experts had different ______ of the data.",
    "options": [
      "prime",
      "implications",
      "interpretations",
      "spark"
    ],
    "answer": 2,
    "vocabIndex": 63
  },
  {
    "q": "The ______ effects of the medication were minimal.",
    "options": [
      "secondary",
      "prime",
      "implied",
      "revised"
    ],
    "answer": 0,
    "vocabIndex": 64
  },
  {
    "q": "The ______ goal of the project was to improve safety.",
    "options": [
      "bullet-proof",
      "characteristic",
      "primary",
      "intensive"
    ],
    "answer": 2,
    "vocabIndex": 65
  },
  {
    "q": "The building is in a ______ location in the city center.",
    "options": [
      "sparkling",
      "prime",
      "bullet-proof",
      "intensive"
    ],
    "answer": 1,
    "vocabIndex": 66
  },
  {
    "q": "Many believe that the athlete is now in his ______.",
    "options": [
      "illustration",
      "revisions",
      "character",
      "prime"
    ],
    "answer": 3,
    "vocabIndex": 67
  }
];

const LOOKUP = {
  "character": {
    "pos": "n.",
    "en_def": "a person in a book, play or film",
    "cn_def": "角色",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person in a book, play or film",
        "cn_def": "角色"
      },
      {
        "pos": "n.",
        "en_def": "a letter or sign used in writing, especially in Chinese",
        "cn_def": "漢文文字"
      },
      {
        "pos": "n.",
        "en_def": "the qualities that make a person or thing different from others",
        "cn_def": "事務特性特質"
      }
    ]
  },
  "characteristic": {
    "pos": "n.",
    "en_def": "a typical feature or quality that someone or something has",
    "cn_def": "特色",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a typical feature or quality that someone or something has",
        "cn_def": "特色"
      },
      {
        "pos": "adj.",
        "en_def": "typical of a particular person or thing",
        "cn_def": "特有的，表示出特性的"
      }
    ]
  },
  "is characteristic of": {
    "pos": "phr.",
    "en_def": "to be typical of a person or thing",
    "cn_def": "是…的特徵",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be typical of a person or thing",
        "cn_def": "是…的特徵"
      }
    ]
  },
  "be characteristic of": {
    "pos": "phr.",
    "en_def": "to be typical of a person or thing",
    "cn_def": "是…的特徵",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be typical of a person or thing",
        "cn_def": "是…的特徵"
      }
    ]
  },
  "sparked": {
    "pos": "v.",
    "en_def": "to cause something such as an argument or interest to start",
    "cn_def": "引發",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause something such as an argument or interest to start",
        "cn_def": "引發"
      }
    ]
  },
  "spark": {
    "pos": "v.",
    "en_def": "to cause something such as an argument or interest to start",
    "cn_def": "引發",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause something such as an argument or interest to start",
        "cn_def": "引發"
      },
      {
        "pos": "v.",
        "en_def": "to make a fire start; to produce small flashes of fire",
        "cn_def": "點燃火花"
      },
      {
        "pos": "n.",
        "en_def": "a tiny bright piece of burning material that flies from a fire",
        "cn_def": "點燃"
      },
      {
        "pos": "n.",
        "en_def": "a small flash of light",
        "cn_def": "閃光"
      }
    ]
  },
  "sparks": {
    "pos": "v.",
    "en_def": "to make a fire start; to produce small flashes of fire",
    "cn_def": "點燃火花",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make a fire start; to produce small flashes of fire",
        "cn_def": "點燃火花"
      }
    ]
  },
  "sparkle": {
    "pos": "v.",
    "en_def": "to shine brightly with small flashes of light",
    "cn_def": "閃耀",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to shine brightly with small flashes of light",
        "cn_def": "閃耀"
      }
    ]
  },
  "sparkling": {
    "pos": "adj.",
    "en_def": "shining brightly with small flashes of light",
    "cn_def": "閃閃發光的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "shining brightly with small flashes of light",
        "cn_def": "閃閃發光的"
      }
    ]
  },
  "intense": {
    "pos": "adj.",
    "en_def": "very strong or great",
    "cn_def": "強烈的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very strong or great",
        "cn_def": "強烈的"
      }
    ]
  },
  "intensified": {
    "pos": "v.",
    "en_def": "to become or make something stronger or greater",
    "cn_def": "加劇",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to become or make something stronger or greater",
        "cn_def": "加劇"
      }
    ]
  },
  "intensify": {
    "pos": "v.",
    "en_def": "to become or make something stronger or greater",
    "cn_def": "加劇",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to become or make something stronger or greater",
        "cn_def": "加劇"
      }
    ]
  },
  "intensity": {
    "pos": "n.",
    "en_def": "the strength or great degree of something",
    "cn_def": "強度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the strength or great degree of something",
        "cn_def": "強度"
      }
    ]
  },
  "intensive": {
    "pos": "adj.",
    "en_def": "involving a lot of work or activity in a short time",
    "cn_def": "密集的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "involving a lot of work or activity in a short time",
        "cn_def": "密集的"
      }
    ]
  },
  "intensive reading": {
    "pos": "phr.",
    "en_def": "reading a short text slowly and carefully to understand every detail",
    "cn_def": "精讀",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "reading a short text slowly and carefully to understand every detail",
        "cn_def": "精讀"
      }
    ]
  },
  "tense": {
    "pos": "adj.",
    "en_def": "nervous and unable to relax",
    "cn_def": "緊張的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "nervous and unable to relax",
        "cn_def": "緊張的"
      }
    ]
  },
  "tension": {
    "pos": "n.",
    "en_def": "a feeling of worry that makes it hard to relax; an unfriendly feeling between people",
    "cn_def": "緊張",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling of worry that makes it hard to relax; an unfriendly feeling between people",
        "cn_def": "緊張"
      }
    ]
  },
  "argue": {
    "pos": "v.",
    "en_def": "to speak angrily to someone because you disagree",
    "cn_def": "爭吵",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to speak angrily to someone because you disagree",
        "cn_def": "爭吵"
      },
      {
        "pos": "v.",
        "en_def": "to give reasons why you think something is true or right",
        "cn_def": "主張"
      }
    ]
  },
  "argues": {
    "pos": "v.",
    "en_def": "to give reasons why you think something is true or right",
    "cn_def": "主張",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give reasons why you think something is true or right",
        "cn_def": "主張"
      }
    ]
  },
  "argument": {
    "pos": "n.",
    "en_def": "an angry disagreement between people",
    "cn_def": "爭吵",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an angry disagreement between people",
        "cn_def": "爭吵"
      },
      {
        "pos": "n.",
        "en_def": "a reason or set of reasons given to support an idea",
        "cn_def": "論點"
      }
    ]
  },
  "illustrate": {
    "pos": "v.",
    "en_def": "to add pictures to a book or magazine",
    "cn_def": "畫插圖",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to add pictures to a book or magazine",
        "cn_def": "畫插圖"
      },
      {
        "pos": "v.",
        "en_def": "to make the meaning of something clearer by using examples or pictures",
        "cn_def": "圖示，解說"
      }
    ]
  },
  "illustrated": {
    "pos": "v.",
    "en_def": "to add pictures to a book or magazine",
    "cn_def": "畫插圖",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to add pictures to a book or magazine",
        "cn_def": "畫插圖"
      }
    ]
  },
  "illustration": {
    "pos": "n.",
    "en_def": "a picture or drawing in a book or magazine",
    "cn_def": "插畫",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a picture or drawing in a book or magazine",
        "cn_def": "插畫"
      },
      {
        "pos": "n.",
        "en_def": "an example or picture that makes something easier to understand",
        "cn_def": "解說"
      }
    ]
  },
  "before long": {
    "pos": "phr.",
    "en_def": "soon; after a short time",
    "cn_def": "不久",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "soon; after a short time",
        "cn_def": "不久"
      }
    ]
  },
  "in no time": {
    "pos": "phr.",
    "en_def": "very quickly; almost at once",
    "cn_def": "很快",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "very quickly; almost at once",
        "cn_def": "很快"
      }
    ]
  },
  "revise": {
    "pos": "v.",
    "en_def": "to change something written in order to correct or improve it",
    "cn_def": "修訂",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to change something written in order to correct or improve it",
        "cn_def": "修訂"
      }
    ]
  },
  "revised": {
    "pos": "adj.",
    "en_def": "changed in order to correct or improve it",
    "cn_def": "經修訂的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "changed in order to correct or improve it",
        "cn_def": "經修訂的"
      }
    ]
  },
  "revision": {
    "pos": "n.",
    "en_def": "a change made to correct or improve something written",
    "cn_def": "修訂",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a change made to correct or improve something written",
        "cn_def": "修訂"
      }
    ]
  },
  "revisions": {
    "pos": "n.",
    "en_def": "a change made to correct or improve something written",
    "cn_def": "修訂",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a change made to correct or improve something written",
        "cn_def": "修訂"
      }
    ]
  },
  "modified": {
    "pos": "v.",
    "en_def": "to change something slightly to improve it or make it more suitable",
    "cn_def": "修改",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to change something slightly to improve it or make it more suitable",
        "cn_def": "修改"
      }
    ]
  },
  "modify": {
    "pos": "v.",
    "en_def": "to change something slightly to improve it or make it more suitable",
    "cn_def": "修改",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to change something slightly to improve it or make it more suitable",
        "cn_def": "修改"
      }
    ]
  },
  "genetically-modified food": {
    "pos": "phr.",
    "en_def": "food from plants or animals whose genes have been changed by scientists",
    "cn_def": "基因改造食品",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "food from plants or animals whose genes have been changed by scientists",
        "cn_def": "基因改造食品"
      }
    ]
  },
  "modification": {
    "pos": "n.",
    "en_def": "a small change made to improve something",
    "cn_def": "修改",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small change made to improve something",
        "cn_def": "修改"
      }
    ]
  },
  "modifications": {
    "pos": "n.",
    "en_def": "a small change made to improve something",
    "cn_def": "修改",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small change made to improve something",
        "cn_def": "修改"
      }
    ]
  },
  "lock": {
    "pos": "v.",
    "en_def": "to fasten a door or box with a key so that it cannot be opened",
    "cn_def": "鎖",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to fasten a door or box with a key so that it cannot be opened",
        "cn_def": "鎖"
      },
      {
        "pos": "n.",
        "en_def": "a device that keeps a door or box fastened and is opened with a key",
        "cn_def": "鎖"
      }
    ]
  },
  "unlock": {
    "pos": "v.",
    "en_def": "to open something using a key or code",
    "cn_def": "解鎖",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to open something using a key or code",
        "cn_def": "解鎖"
      }
    ]
  },
  "locker": {
    "pos": "n.",
    "en_def": "a small cupboard that can be locked, where you keep your things",
    "cn_def": "儲物櫃",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small cupboard that can be locked, where you keep your things",
        "cn_def": "儲物櫃"
      }
    ]
  },
  "voice": {
    "pos": "v.",
    "en_def": "to tell people your feelings or opinions",
    "cn_def": "表明意見",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to tell people your feelings or opinions",
        "cn_def": "表明意見"
      },
      {
        "pos": "v.",
        "en_def": "to speak the words of a character in a cartoon or film",
        "cn_def": "配音旁白"
      },
      {
        "pos": "n.",
        "en_def": "the sounds a person makes when speaking or singing",
        "cn_def": "聲音"
      }
    ]
  },
  "voiced": {
    "pos": "v.",
    "en_def": "to tell people your feelings or opinions",
    "cn_def": "表明意見",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to tell people your feelings or opinions",
        "cn_def": "表明意見"
      }
    ]
  },
  "voices": {
    "pos": "v.",
    "en_def": "to speak the words of a character in a cartoon or film",
    "cn_def": "配音旁白",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to speak the words of a character in a cartoon or film",
        "cn_def": "配音旁白"
      }
    ]
  },
  "voicemail": {
    "pos": "n.",
    "en_def": "an electronic system that records telephone messages",
    "cn_def": "語音郵件",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an electronic system that records telephone messages",
        "cn_def": "語音郵件"
      }
    ]
  },
  "gives voice to": {
    "pos": "phr.",
    "en_def": "to express a feeling or opinion",
    "cn_def": "表達",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to express a feeling or opinion",
        "cn_def": "表達"
      }
    ]
  },
  "give voice to": {
    "pos": "phr.",
    "en_def": "to express a feeling or opinion",
    "cn_def": "表達",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to express a feeling or opinion",
        "cn_def": "表達"
      }
    ]
  },
  "opinion": {
    "pos": "n.",
    "en_def": "what you think or believe about something",
    "cn_def": "意見",
    "combined": [
      {
        "pos": "n.",
        "en_def": "what you think or believe about something",
        "cn_def": "意見"
      }
    ]
  },
  "in my opinion": {
    "pos": "phr.",
    "en_def": "used to say what you personally think",
    "cn_def": "我認為",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "used to say what you personally think",
        "cn_def": "我認為"
      }
    ]
  },
  "voice your opinion": {
    "pos": "phr.",
    "en_def": "to say what you think about something",
    "cn_def": "發表意見",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to say what you think about something",
        "cn_def": "發表意見"
      }
    ]
  },
  "voice one's opinion": {
    "pos": "phr.",
    "en_def": "to say what you think about something",
    "cn_def": "發表意見",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to say what you think about something",
        "cn_def": "發表意見"
      }
    ]
  },
  "proof": {
    "pos": "n.",
    "en_def": "facts or information that show something is true",
    "cn_def": "證據",
    "combined": [
      {
        "pos": "n.",
        "en_def": "facts or information that show something is true",
        "cn_def": "證據"
      }
    ]
  },
  "the proof is in the pudding": {
    "pos": "phr.",
    "en_def": "you can only judge something by trying or testing it",
    "cn_def": "結果證明一切",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "you can only judge something by trying or testing it",
        "cn_def": "結果證明一切"
      }
    ]
  },
  "water-proof": {
    "pos": "adj.",
    "en_def": "not letting water pass through",
    "cn_def": "防水的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not letting water pass through",
        "cn_def": "防水的"
      }
    ]
  },
  "wind-proof": {
    "pos": "adj.",
    "en_def": "protecting you from the wind",
    "cn_def": "防風的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "protecting you from the wind",
        "cn_def": "防風的"
      }
    ]
  },
  "bullet-proof": {
    "pos": "adj.",
    "en_def": "able to stop bullets from passing through",
    "cn_def": "防彈的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to stop bullets from passing through",
        "cn_def": "防彈的"
      }
    ]
  },
  "proved": {
    "pos": "v.",
    "en_def": "to use facts to show that something is true",
    "cn_def": "證明",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to use facts to show that something is true",
        "cn_def": "證明"
      },
      {
        "pos": "adj.",
        "en_def": "shown by facts to be true",
        "cn_def": "被證明的"
      }
    ]
  },
  "prove": {
    "pos": "v.",
    "en_def": "to use facts to show that something is true",
    "cn_def": "證明",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to use facts to show that something is true",
        "cn_def": "證明"
      }
    ]
  },
  "commented": {
    "pos": "v.",
    "en_def": "to give your opinion about something",
    "cn_def": "評論",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give your opinion about something",
        "cn_def": "評論"
      }
    ]
  },
  "comment": {
    "pos": "v.",
    "en_def": "to give your opinion about something",
    "cn_def": "評論",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give your opinion about something",
        "cn_def": "評論"
      },
      {
        "pos": "n.",
        "en_def": "something you say or write that gives your opinion",
        "cn_def": "評論"
      }
    ]
  },
  "make a comment on": {
    "pos": "phr.",
    "en_def": "to say what you think about something",
    "cn_def": "對…作評論",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to say what you think about something",
        "cn_def": "對…作評論"
      }
    ]
  },
  "made a comment on": {
    "pos": "phr.",
    "en_def": "to say what you think about something",
    "cn_def": "對…作評論",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to say what you think about something",
        "cn_def": "對…作評論"
      }
    ]
  },
  "had no comment on": {
    "pos": "phr.",
    "en_def": "to refuse to say anything about a subject",
    "cn_def": "對…無可評論",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to refuse to say anything about a subject",
        "cn_def": "對…無可評論"
      }
    ]
  },
  "have no comment on/about": {
    "pos": "phr.",
    "en_def": "to refuse to say anything about a subject",
    "cn_def": "對…無可評論",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to refuse to say anything about a subject",
        "cn_def": "對…無可評論"
      }
    ]
  },
  "imply": {
    "pos": "v.",
    "en_def": "to suggest that something is true without saying it directly",
    "cn_def": "暗示",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to suggest that something is true without saying it directly",
        "cn_def": "暗示"
      }
    ]
  },
  "implied": {
    "pos": "adj.",
    "en_def": "suggested but not said directly",
    "cn_def": "被暗示的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "suggested but not said directly",
        "cn_def": "被暗示的"
      }
    ]
  },
  "implications": {
    "pos": "n.",
    "en_def": "a possible effect or result of an action; something suggested but not said directly",
    "cn_def": "暗示",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a possible effect or result of an action; something suggested but not said directly",
        "cn_def": "暗示"
      }
    ]
  },
  "implication": {
    "pos": "n.",
    "en_def": "a possible effect or result of an action; something suggested but not said directly",
    "cn_def": "暗示",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a possible effect or result of an action; something suggested but not said directly",
        "cn_def": "暗示"
      }
    ]
  },
  "interprets": {
    "pos": "v.",
    "en_def": "to explain or decide what something means",
    "cn_def": "解釋",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to explain or decide what something means",
        "cn_def": "解釋"
      }
    ]
  },
  "interpret": {
    "pos": "v.",
    "en_def": "to explain or decide what something means",
    "cn_def": "解釋",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to explain or decide what something means",
        "cn_def": "解釋"
      }
    ]
  },
  "interpreted": {
    "pos": "phr.",
    "en_def": "to understand something as having a particular meaning",
    "cn_def": "把A解釋為B",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to understand something as having a particular meaning",
        "cn_def": "把A解釋為B"
      }
    ]
  },
  "interpret a as b": {
    "pos": "phr.",
    "en_def": "to understand something as having a particular meaning",
    "cn_def": "把A解釋為B",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to understand something as having a particular meaning",
        "cn_def": "把A解釋為B"
      }
    ]
  },
  "interpretation": {
    "pos": "n.",
    "en_def": "an explanation or opinion of what something means",
    "cn_def": "解釋",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an explanation or opinion of what something means",
        "cn_def": "解釋"
      }
    ]
  },
  "interpretations": {
    "pos": "n.",
    "en_def": "an explanation or opinion of what something means",
    "cn_def": "解釋",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an explanation or opinion of what something means",
        "cn_def": "解釋"
      }
    ]
  },
  "secondary": {
    "pos": "adj.",
    "en_def": "less important than something else; coming after the first stage",
    "cn_def": "次要的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "less important than something else; coming after the first stage",
        "cn_def": "次要的"
      }
    ]
  },
  "primary": {
    "pos": "adj.",
    "en_def": "main; most important; coming first",
    "cn_def": "主要的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "main; most important; coming first",
        "cn_def": "主要的"
      }
    ]
  },
  "prime": {
    "pos": "adj.",
    "en_def": "main; most important; of the best quality",
    "cn_def": "主要的, 最重要的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "main; most important; of the best quality",
        "cn_def": "主要的, 最重要的"
      },
      {
        "pos": "n.",
        "en_def": "the time in your life when you are strongest and most successful",
        "cn_def": "鼎盛時期"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
