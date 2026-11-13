// Lesson 41 Quiz Data: Personal Character, Intelligence & Negative Traits
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 41 - Personal Character, Intelligence & Negative Traits",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "rude",
    "pos": "adj.",
    "cn_def": "無禮的；粗魯的",
    "en_def": "not polite; having bad manners toward others",
    "sentence": "When the waiter dropped the tray, the angry customer shouted {{BLANK}} words, but everyone else remained calm and polite.",
    "cn": "當服務生打翻托盤時，憤怒的顧客大聲說出無禮的話語，但其他人都保持冷靜與禮貌。"
  },
  {
    "word": "unique",
    "pos": "adj.",
    "cn_def": "獨特的；獨一無二的",
    "en_def": "being the only one of its kind; very special",
    "sentence": "The small island has its own {{BLANK}} wildlife and culture, so thousands of scientists travel there to study each year.",
    "cn": "這座小島擁有其獨特的野生動植物與文化，因此每年都有成千上萬的科學家前往研究。"
  },
  {
    "word": "selfish",
    "pos": "adj.",
    "cn_def": "自私的",
    "en_def": "caring only about oneself and not about other people",
    "sentence": "The greedy boy refused to share his toys with his cousins, and his {{BLANK}} behavior made everyone at the party feel unhappy.",
    "cn": "那個貪婪的男孩拒絕與他的表兄弟分享玩具，他的自私行為讓派對上的每個人都不開心。"
  },
  {
    "word": "stingy",
    "pos": "adj.",
    "cn_def": "小氣的；吝嗇的",
    "en_def": "unwilling to spend money or share things; mean",
    "sentence": "Although Mr. Davis earned a high salary at the bank, he was so {{BLANK}} that he never bought gifts for his children.",
    "cn": "雖然戴維斯先生在銀行領取高薪，但他非常小氣，從不給他的孩子們買禮物。"
  },
  {
    "word": "greedy",
    "pos": "adj.",
    "cn_def": "貪婪的；貪心的",
    "en_def": "wanting more money, food, or power than one needs",
    "sentence": "The businessman was so {{BLANK}} for wealth that he took illegal shortcuts, and he eventually lost everything he had owned.",
    "cn": "那位商人對財富如此貪婪，以至於採取非法捷徑，最終失去了他所擁有的一切。"
  },
  {
    "word": "clever",
    "pos": "adj.",
    "cn_def": "聰明的；機敏的",
    "en_def": "quick at learning and understanding things; skillful",
    "sentence": "The young detective found several clues in the quiet room, and her {{BLANK}} analysis helped the police catch the thief quickly.",
    "cn": "年輕女偵探在安靜的房間裡發現了幾條線索，她機敏的分析幫助警方迅速抓獲了小偷。"
  },
  {
    "word": "intelligent",
    "pos": "adj.",
    "cn_def": "有聰明才智的；有靈性的",
    "en_def": "having a high ability to learn, think, and understand",
    "sentence": "Dolphins are known to be highly {{BLANK}} marine animals, and they can easily communicate with one another using special sounds.",
    "cn": "海豚被公認為極富聰明才智的海洋動物，牠們能使用特殊的聲音輕鬆地相互交流。"
  },
  {
    "word": "diligent",
    "pos": "adj.",
    "cn_def": "勤勉的；用功的",
    "en_def": "showing care and steady effort in work or studies",
    "sentence": "Mary was a {{BLANK}} student throughout high school, so she always reviewed her lessons every night and passed all exams.",
    "cn": "瑪麗在整個高中階段都是一名勤勉的學生，因此她每晚總是複習功課並通過了所有考試。"
  },
  {
    "word": "fool",
    "pos": "n. / v.",
    "cn_def": "傻瓜；愚人；愚弄",
    "en_def": "a person without good sense; to trick someone",
    "sentence": "Kevin pretended that he was completely sick to avoid the test, but he could not {{BLANK}} his experienced teacher for a minute.",
    "cn": "凱文假裝自己完全生病以逃避考試，但他連一分鐘都無法愚弄他經驗豐富的老師。"
  },
  {
    "word": "foolish",
    "pos": "adj.",
    "cn_def": "愚蠢的；不明智的",
    "en_def": "lacking good sense or judgment; silly",
    "sentence": "It was very {{BLANK}} of Tom to drive in such heavy snow, and his car slid off the road into a ditch.",
    "cn": "湯姆在如此大雪中開車是非常愚蠢的，他的車子滑出了道路衝進了水溝。"
  }
];

const MCQS = [
  {
    "q": "The wealthy landlord refused to donate even a single dollar to the local school, so many residents considered him very ______.",
    "options": [
      "diligent",
      "clever",
      "stingy",
      "intelligent"
    ],
    "answer": 2,
    "cn": "富有的房東拒絕向當地學校捐贈哪怕是一美元，所以許多居民認為他非常吝嗇。 【選項解析】(A) diligent 勤勉的  (B) stingy 吝嗇的  (C) clever 聰明的  (D) intelligent 有智慧的。由 refused to donate even a single dollar 可知選 stingy。",
    "vocabIndex": 3
  },
  {
    "q": "Because the new phone software incorporates a completely ______ interface, it quickly attracted millions of young users worldwide.",
    "options": [
      "rude",
      "unique",
      "selfish",
      "foolish"
    ],
    "answer": 1,
    "cn": "因為這款新手機軟體融合了完全獨特的介面，它迅速吸引了全球數百萬年輕用戶。 【選項解析】(A) unique 獨特的  (B) rude 無禮的  (C) selfish 自私的  (D) foolish 愚蠢的。由 completely... interface 吸引用戶可知選 unique。",
    "vocabIndex": 1
  },
  {
    "q": "When asking for directions in a foreign country, you should speak politely because it is ______ to interrupt people abruptly.",
    "options": [
      "diligent",
      "clever",
      "intelligent",
      "rude"
    ],
    "answer": 3,
    "cn": "在國外問路時你應該禮貌地說話，因為突然打斷別人是非常無禮的。 【選項解析】(A) diligent 勤勉的  (B) clever 聰明的  (C) rude 無禮的  (D) intelligent 聰穎的。abruptly interrupt people（突然打斷人）屬於 rude。",
    "vocabIndex": 0
  },
  {
    "q": "The little girl spent all her pocket money on delicious candies and ate them alone, which was considered quite ______ by her brother.",
    "options": [
      "selfish",
      "unique",
      "diligent",
      "clever"
    ],
    "answer": 0,
    "cn": "小女孩把所有零用錢都花在美味糖果上並獨自吃掉，這被她哥哥認為相當自私。 【選項解析】(A) selfish 自私的  (B) unique 獨特的  (C) diligent 勤奮的  (D) clever 機靈的。獨吞糖果不分享為 selfish。",
    "vocabIndex": 2
  },
  {
    "q": "Elephants have remarkable memories and complex social bonds, proving that they are among the most ______ creatures on Earth.",
    "options": [
      "stingy",
      "intelligent",
      "rude",
      "foolish"
    ],
    "answer": 1,
    "cn": "大象擁有非凡的記憶力與複雜的社交紐帶，證明牠們是地球上最具智慧的生物之一。 【選項解析】(A) stingy 吝嗇的  (B) rude 粗暴的  (C) intelligent 聰穎的  (D) foolish 愚昧的。記憶與社交結構證明其 intelligent。",
    "vocabIndex": 6
  },
  {
    "q": "Samuel studied ten hours every weekend to prepare for the medical entrance exam, and his ______ attitude impressed all his tutors.",
    "options": [
      "diligent",
      "selfish",
      "greedy",
      "rude"
    ],
    "answer": 0,
    "cn": "塞繆爾每個週末學習十個小時來準備醫學入學考試，他的勤勉態度給所有導師留下了深刻印象。 【選項解析】(A) selfish 自私的  (B) diligent 勤奮的  (C) greedy 貪心的  (D) rude 無禮的。每週末讀書十小時為 diligent。",
    "vocabIndex": 7
  },
  {
    "q": "The king in the old fairy tale collected tons of gold in his palace, but his ______ nature made him unhappy and lonely.",
    "options": [
      "diligent",
      "clever",
      "unique",
      "greedy"
    ],
    "answer": 3,
    "cn": "古老童話中的國王在宮殿裡收集了成噸的黃金，但他貪婪的天性使他痛苦而孤獨。 【選項解析】(A) greedy 貪婪的  (B) clever 聰敏的  (C) unique 獨特的  (D) diligent 勤奮的。囤積黃金無法滿足為 greedy。",
    "vocabIndex": 4
  },
  {
    "q": "Leaving your front door completely unlocked overnight in a busy city is a very ______ decision that invites serious danger.",
    "options": [
      "intelligent",
      "diligent",
      "foolish",
      "unique"
    ],
    "answer": 2,
    "cn": "在繁忙的城市中夜間完全不鎖大門是一個非常愚蠢的決定，會招來嚴重的危險。 【選項解析】(A) intelligent 聰明的  (B) foolish 愚蠢的  (C) diligent 勤勉的  (D) unique 特殊的。夜不閉戶招致危險是 foolish。",
    "vocabIndex": 9
  },
  {
    "q": "The monkey used a long slender stick to retrieve food from the narrow box, showing how ______ it was at solving problems.",
    "options": [
      "clever",
      "stingy",
      "selfish",
      "rude"
    ],
    "answer": 0,
    "cn": "猴子用一根細長的樹枝從狹窄的盒子裡取回食物，展示了它在解決問題方面是多麼機靈。 【選項解析】(A) clever 機敏的  (B) stingy 小氣的  (C) selfish 自私的  (D) rude 粗野的。使用工具取食展現 clever。",
    "vocabIndex": 5
  },
  {
    "q": "You should never try to ______ your parents by telling lies, because they will easily discover the real truth sooner or later.",
    "options": [
      "praise",
      "fool",
      "harm",
      "touch"
    ],
    "answer": 1,
    "cn": "你絕不應該試圖透過說謊來愚弄你的父母，因為他們遲早會輕易發現真正的真相。 【選項解析】(A) fool 愚弄  (B) praise 稱讚  (C) harm 傷害  (D) touch 感動。fool sb. by telling lies（藉由說謊愚弄某人）。",
    "vocabIndex": 8
  },
  {
    "q": "It was very ______ of the young driver to race through the crowded street, and police officers immediately pulled him over.",
    "options": [
      "intelligent",
      "clever",
      "foolish",
      "unique"
    ],
    "answer": 2,
    "cn": "年輕司機在擁擠的街道上狂飆是非常愚蠢的，警官們立刻將他攔了下來。 【選項解析】(A) intelligent 有智慧的  (B) foolish 愚蠢的  (C) clever 聰穎的  (D) unique 獨特的。鬧區飆車為 foolish 行為。",
    "vocabIndex": 9
  },
  {
    "q": "The artist combined traditional Chinese painting with modern Western oil techniques, creating a wonderfully ______ artistic style.",
    "options": [
      "rude",
      "stingy",
      "selfish",
      "unique"
    ],
    "answer": 3,
    "cn": "這位藝術家將傳統國畫與現代西方油畫技法相結合，創造出一種極其獨特的藝術風格。 【選項解析】(A) unique 獨特的  (B) stingy 吝嗇的  (C) selfish 自私的  (D) rude 粗鄙的。融合中西技法形成 unique 風格。",
    "vocabIndex": 1
  },
  {
    "q": "The manager reprimanded the sales clerk because she gave a ______ response when an elderly customer asked a simple question.",
    "options": [
      "diligent",
      "clever",
      "rude",
      "unique"
    ],
    "answer": 2,
    "cn": "經理訓斥了那名女售貨員，因為當一位年長顧客提出一個簡單問題時，她給出了粗魯的回答。 【選項解析】(A) diligent 勤奮的  (B) rude 無禮的  (C) clever 聰穎的  (D) unique 獨樹一幟的。服務態度不佳為 rude。",
    "vocabIndex": 0
  },
  {
    "q": "Jack always takes the largest portion of the cake and leaves nothing for others, displaying his ______ and inconsiderate personality.",
    "options": [
      "selfish",
      "intelligent",
      "clever",
      "diligent"
    ],
    "answer": 0,
    "cn": "傑克總是拿走最大份的蛋糕而不給別人留任何東西，展現了他自私且不體貼的性格。 【選項解析】(A) selfish 自私的  (B) intelligent 聰明的  (C) clever 伶俐的  (D) diligent 勤勉的。佔據最多不顧他人為 selfish。",
    "vocabIndex": 2
  },
  {
    "q": "The dishonest trader hoarded all the rice during the drought to sell it at high prices, demonstrating his ______ greed for profit.",
    "options": [
      "intelligent",
      "polite",
      "unique",
      "greedy"
    ],
    "answer": 3,
    "cn": "不誠實的商人在旱災期間囤積所有大米以高價出售，展現了他對利潤貪婪的欲望。 【選項解析】(A) intelligent 有才智的  (B) greedy 貪心的  (C) unique 獨有的  (D) polite 禮貌的。囤積居奇為 greedy。",
    "vocabIndex": 4
  },
  {
    "q": "Although he had plenty of warm blankets in the closet, the ______ man would not lend any to the shivering neighbors.",
    "options": [
      "clever",
      "stingy",
      "intelligent",
      "unique"
    ],
    "answer": 1,
    "cn": "雖然衣櫥裡有許多保暖毯子，但那個小氣的男人不願借給發抖的鄰居任何一條。 【選項解析】(A) stingy 吝嗇的  (B) clever 聰明的  (C) intelligent 聰穎的  (D) unique 奇特的。有富餘卻不願借人為 stingy。",
    "vocabIndex": 3
  },
  {
    "q": "Solving complex mathematical equations requires high logical ability, and the ______ professor solved them within minutes.",
    "options": [
      "rude",
      "foolish",
      "intelligent",
      "stingy"
    ],
    "answer": 2,
    "cn": "解決複雜的數學方程式需要高度的邏輯能力，而聰明的教授在幾分鐘內就解開了它們。 【選項解析】(A) rude 粗魯的  (B) intelligent 聰穎的  (C) foolish 愚昧的  (D) stingy 吝嗇的。快速解複雜難題展現 intelligent。",
    "vocabIndex": 6
  },
  {
    "q": "The young mechanic worked late into the night checking every bolt on the airplane, proving that he was an exceptionally ______ worker.",
    "options": [
      "diligent",
      "selfish",
      "foolish",
      "rude"
    ],
    "answer": 0,
    "cn": "年輕技工工作到深夜檢查飛機上的每一個螺栓，證明他是一位特別勤勉的工人。 【選項解析】(A) diligent 勤奮的  (B) selfish 自私的  (C) foolish 愚笨的  (D) rude 粗暴的。徹夜認真檢查展示 diligent。",
    "vocabIndex": 7
  },
  {
    "q": "Using a hairpin to unlock the jammed drawer was a very ______ trick, and it allowed us to retrieve the passport quickly.",
    "options": [
      "rude",
      "stingy",
      "greedy",
      "clever"
    ],
    "answer": 3,
    "cn": "用髮夾打開卡住的抽屜是一個非常巧妙的技巧，它讓我們迅速取回了護照。 【選項解析】(A) clever 巧妙的  (B) stingy 小氣的  (C) greedy 貪婪的  (D) rude 無禮的。善用手邊工具開鎖為 clever。",
    "vocabIndex": 5
  },
  {
    "q": "He felt like an absolute ______ when he realized that he had worn two completely different socks to the job interview.",
    "options": [
      "hero",
      "fool",
      "prince",
      "judge"
    ],
    "answer": 1,
    "cn": "當他意識到自己穿了兩隻完全不同的襪子去參加求職面試時，他觉得自己簡直像個十足的傻瓜。 【選項解析】(A) fool 傻瓜  (B) hero 英雄  (C) prince 王子  (D) judge 法官。felt like an absolute fool（覺得自己像個大傻瓜）。",
    "vocabIndex": 8
  },
  {
    "q": "Snatching toys away from younger toddlers without asking permission is extremely ______ and unacceptable on the playground.",
    "options": [
      "clever",
      "intelligent",
      "diligent",
      "rude"
    ],
    "answer": 3,
    "cn": "在操場上未經允許就從幼兒手裡搶奪玩具是非常粗魯且不可接受的。 【選項解析】(A) clever 聰明的  (B) rude 無禮的  (C) diligent 勤勉的  (D) intelligent 聰穎的。搶幼童玩具屬於 rude。",
    "vocabIndex": 0
  },
  {
    "q": "Each person's fingerprint has a pattern that is completely ______, which makes it an ideal method for personal identification.",
    "options": [
      "unique",
      "selfish",
      "foolish",
      "stingy"
    ],
    "answer": 0,
    "cn": "每個人的指紋都具有完全獨一無二的紋路，這使它成為個人身分識別的理想方法。 【選項解析】(A) unique 獨特的  (B) selfish 自私的  (C) foolish 愚蠢的  (D) stingy 吝嗇的。指紋為 unique 特徵。",
    "vocabIndex": 1
  },
  {
    "q": "The farmer was so ______ that he planted extra crops on his neighbor's land without permission, causing a fierce legal dispute.",
    "options": [
      "intelligent",
      "greedy",
      "diligent",
      "polite"
    ],
    "answer": 1,
    "cn": "那名農夫太過貪心，未經允許就在鄰居的土地上種植額外作物，引發了激烈的法律糾紛。 【選項解析】(A) intelligent 聰明的  (B) greedy 貪婪的  (C) diligent 勤懇的  (D) polite 有禮的。侵佔土地種植為 greedy。",
    "vocabIndex": 4
  },
  {
    "q": "The scientist designed a very ______ experiment that tested three hypotheses simultaneously while saving time and resources.",
    "options": [
      "stingy",
      "rude",
      "clever",
      "foolish"
    ],
    "answer": 2,
    "cn": "科學家設計了一個非常巧妙的實驗，同時測試了三個假設並節省了時間和資源。 【選項解析】(A) clever 巧妙的  (B) rude 無禮的  (C) stingy 小氣的  (D) foolish 愚笨的。設計高效率實驗為 clever。",
    "vocabIndex": 5
  },
  {
    "q": "Spending your entire monthly paycheck on video games during the first week is a ______ habit that causes serious financial distress.",
    "options": [
      "unique",
      "foolish",
      "clever",
      "diligent"
    ],
    "answer": 1,
    "cn": "在第一週就把整個月薪水花在電玩遊戲上是一種會導致嚴重財務困境的愚蠢習慣。 【選項解析】(A) unique 獨特的  (B) foolish 愚蠢的  (C) clever 機敏的  (D) diligent 勤奮的。揮霍薪水為 foolish 行為。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "rude": {
    "pos": "adj.",
    "en_def": "not polite; having bad manners toward others",
    "cn_def": "無禮的；粗魯的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not polite; having bad manners toward others",
        "cn_def": "無禮的；粗魯的"
      }
    ]
  },
  "unique": {
    "pos": "adj.",
    "en_def": "being the only one of its kind; very special",
    "cn_def": "獨特的；獨一無二的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "being the only one of its kind; very special",
        "cn_def": "獨特的；獨一無二的"
      }
    ]
  },
  "selfish": {
    "pos": "adj.",
    "en_def": "caring only about oneself and not about other people",
    "cn_def": "自私的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "caring only about oneself and not about other people",
        "cn_def": "自私的"
      }
    ]
  },
  "stingy": {
    "pos": "adj.",
    "en_def": "unwilling to spend money or share things; mean",
    "cn_def": "小氣的；吝嗇的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "unwilling to spend money or share things; mean",
        "cn_def": "小氣的；吝嗇的"
      }
    ]
  },
  "greedy": {
    "pos": "adj.",
    "en_def": "wanting more money, food, or power than one needs",
    "cn_def": "貪婪的；貪心的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "wanting more money, food, or power than one needs",
        "cn_def": "貪婪的；貪心的"
      }
    ]
  },
  "clever": {
    "pos": "adj.",
    "en_def": "quick at learning and understanding things; skillful",
    "cn_def": "聰明的；機敏的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "quick at learning and understanding things; skillful",
        "cn_def": "聰明的；機敏的"
      }
    ]
  },
  "intelligent": {
    "pos": "adj.",
    "en_def": "having a high ability to learn, think, and understand",
    "cn_def": "有聰明才智的；有靈性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a high ability to learn, think, and understand",
        "cn_def": "有聰明才智的；有靈性的"
      }
    ]
  },
  "diligent": {
    "pos": "adj.",
    "en_def": "showing care and steady effort in work or studies",
    "cn_def": "勤勉的；用功的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing care and steady effort in work or studies",
        "cn_def": "勤勉的；用功的"
      }
    ]
  },
  "fool": {
    "pos": "n. / v.",
    "en_def": "a person without good sense; to trick someone",
    "cn_def": "傻瓜；愚人；愚弄",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a person without good sense; to trick someone",
        "cn_def": "傻瓜；愚人；愚弄"
      }
    ]
  },
  "foolish": {
    "pos": "adj.",
    "en_def": "lacking good sense or judgment; silly",
    "cn_def": "愚蠢的；不明智的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "lacking good sense or judgment; silly",
        "cn_def": "愚蠢的；不明智的"
      }
    ]
  },
  "praise": {
    "pos": "",
    "en_def": "",
    "cn_def": "稱讚",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "稱讚"
      }
    ]
  },
  "harm": {
    "pos": "",
    "en_def": "",
    "cn_def": "傷害",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "傷害"
      }
    ]
  },
  "touch": {
    "pos": "",
    "en_def": "",
    "cn_def": "感動",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "感動"
      }
    ]
  },
  "polite": {
    "pos": "",
    "en_def": "",
    "cn_def": "禮貌的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "禮貌的"
      }
    ]
  },
  "hero": {
    "pos": "",
    "en_def": "",
    "cn_def": "英雄",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "英雄"
      }
    ]
  },
  "prince": {
    "pos": "",
    "en_def": "",
    "cn_def": "王子",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "王子"
      }
    ]
  },
  "judge": {
    "pos": "",
    "en_def": "",
    "cn_def": "法官",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "法官"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
