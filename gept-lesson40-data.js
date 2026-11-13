// Lesson 40 Quiz Data: Personal Character, Temperament & Moral Traits
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 40 - Personal Character, Temperament & Moral Traits",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "jealous",
    "pos": "adj.",
    "cn_def": "嫉妒的；吃醋的",
    "en_def": "feeling envious of someone's achievements or possessions",
    "sentence": "The spoiled child was intensely {{BLANK}} when his classmate received a brand new bicycle for his birthday.",
    "cn": "當同學在生日那天收到一輛全新腳踏車時，那個被寵壞的孩子內心極度嫉妒眼紅。"
  },
  {
    "word": "envy",
    "pos": "n. / v.",
    "cn_def": "羨慕；嫉妒",
    "en_def": "a feeling of discontented longing aroused by someone else's possessions",
    "sentence": "I truly {{BLANK}} my best friend because she can speak four foreign languages fluently without any difficulty.",
    "cn": "我由衷羨慕我的摯友，因為她能夠毫不費力、流利地說四種外國語言。"
  },
  {
    "word": "curious",
    "pos": "adj.",
    "cn_def": "好奇的",
    "en_def": "eager to know or learn something new",
    "sentence": "The {{BLANK}} kitten poked its nose into the open shopping bag, sniffing every strange item inside inquisitively.",
    "cn": "好奇的小貓把鼻子探進敞開的購物袋裡，好奇地聞著裡面每一件陌生的物品。"
  },
  {
    "word": "generous",
    "pos": "adj.",
    "cn_def": "慷慨的；大方的",
    "en_def": "showing a readiness to give more of something than is strictly necessary",
    "sentence": "Uncle Robert is a very {{BLANK}} philanthropist who donates substantial funds to orphanages every winter.",
    "cn": "羅伯特叔叔是一位非常慷慨的慈善家，每年冬天都會向孤兒院捐贈大筆資金善款。"
  },
  {
    "word": "humorous",
    "pos": "adj.",
    "cn_def": "幽默的；詼諧的",
    "en_def": "causing lighthearted laughter and amusement; comical",
    "sentence": "Our English teacher always tells {{BLANK}} stories about his college days, making everyone in class laugh out loud.",
    "cn": "我們的英語老師總是講述他大學時代的幽默詼諧故事，逗得全班同學大笑不止。"
  },
  {
    "word": "humor",
    "pos": "n.",
    "cn_def": "幽默；幽默感",
    "en_def": "the quality of being amusing or comic",
    "sentence": "Having a healthy sense of {{BLANK}} helps people cope with daily stress and maintain a sunny positive attitude.",
    "cn": "擁有健康的幽默感有助於人們應對日常壓力，並保持陽光正向的生活態度。"
  },
  {
    "word": "confident",
    "pos": "adj.",
    "cn_def": "有信心的；自信的",
    "en_def": "feeling or showing certainty about something or one's own ability",
    "sentence": "After practicing his violin solo every day for three months, Lucas felt completely {{BLANK}} on stage.",
    "cn": "在連續三個月每天苦練小提琴獨奏之後，盧卡斯在舞台上顯得完全充滿自信。"
  },
  {
    "word": "independent",
    "pos": "adj.",
    "cn_def": "獨立的；自主的",
    "en_def": "free from outside control; not depending on another's authority",
    "sentence": "Living alone in a foreign city taught Rachel how to cook, manage finances, and become truly {{BLANK}}.",
    "cn": "獨自生活在異國城市教會了瑞秋如何烹飪、打理財務，並成為一個真正獨立自主的人。"
  },
  {
    "word": "cruel",
    "pos": "adj.",
    "cn_def": "殘忍的；殘暴的",
    "en_def": "willfully causing pain or suffering to others without feeling mercy",
    "sentence": "Leaving a pet locked inside a hot car during summer is an unimaginably {{BLANK}} and dangerous act.",
    "cn": "在炎熱夏天把寵物反鎖在悶熱的汽車裡，是一種難以想像的殘忍且極度危險的行為。"
  },
  {
    "word": "naughty",
    "pos": "adj.",
    "cn_def": "頑皮的；淘氣的",
    "en_def": "badly behaved; disobedient, especially of children",
    "sentence": "The {{BLANK}} little boy hid his sister's favorite doll on top of the high refrigerator just to tease her.",
    "cn": "那個淘氣頑皮的小男孩把他妹妹最愛的洋娃娃藏在高高的冰箱頂上，只為了捉弄嘲弄她。"
  }
];

const MCQS = [
  {
    "q": "Some students felt secretly ______ of Marcus because he consistently won first prize in every math contest.",
    "options": [
      "confident",
      "generous",
      "jealous",
      "independent"
    ],
    "answer": 2,
    "cn": "有些學生暗自嫉妒馬可斯，因為他總是能在每場數學競賽中輕鬆斬獲第一名頭獎。 【選項解析】(A) jealous 嫉妒的  (B) generous 慷慨的  (C) confident 自信的  (D) independent 獨立的。jealous of achievements（嫉妒成就）。",
    "vocabIndex": 0
  },
  {
    "q": "It is completely natural to look with admiration and mild ______ upon someone who has achieved immense career success.",
    "options": [
      "humor",
      "envy",
      "sense",
      "feeling"
    ],
    "answer": 1,
    "cn": "對於在事業上取得巨大成功的優秀人士，抱持著欽佩與些許輕微的羨慕之情是完全人之常情。 【選項解析】(A) humor 幽默  (B) envy 羨慕  (C) sense 感官  (D) feeling 感覺。look with admiration and envy（帶著欽佩與羨慕看待）。",
    "vocabIndex": 1
  },
  {
    "q": "The science teacher encouraged students to remain ______ about the universe and ask questions constantly.",
    "options": [
      "curious",
      "naughty",
      "cruel",
      "jealous"
    ],
    "answer": 0,
    "cn": "自然科學老師鼓勵全體同學對這個浩瀚宇宙永遠保持好奇心，並持之以恆地提出深刻問題。 【選項解析】(A) cruel 殘忍的  (B) naughty 淘氣的  (C) curious 好奇的  (D) jealous 嫉妒的。remain curious about universe（對宇宙保持好奇）。",
    "vocabIndex": 2
  },
  {
    "q": "The local business tycoon was extraordinarily ______ and provided scholarships to cover tuition for fifty needy students.",
    "options": [
      "cruel",
      "jealous",
      "naughty",
      "generous"
    ],
    "answer": 3,
    "cn": "當地的商業巨擘極為慷慨大方，資助設立了全額獎學金，為五十位清寒學子支付學雜費。 【選項解析】(A) cruel 殘忍的  (B) jealous 嫉妒的  (C) naughty 頑皮的  (D) generous 慷慨大方的。extraordinarily generous with scholarships（在獎學金上極為大方慷慨）。",
    "vocabIndex": 3
  },
  {
    "q": "Mark Twain was famous for writing ______ essays that used wit and satire to critique human follies amusingly.",
    "options": [
      "cruel",
      "humorous",
      "naughty",
      "jealous"
    ],
    "answer": 1,
    "cn": "馬克·吐溫以撰寫幽默詼諧的散文著稱，善用過人機智與諷刺手法風趣調侃人類的愚行。 【選項解析】(A) humorous 幽默詼諧的  (B) cruel 殘忍的  (C) naughty 淘氣的  (D) jealous 嫉妒的。humorous essays（幽默散文）。",
    "vocabIndex": 4
  },
  {
    "q": "A dry, self-deprecating sense of ______ allowed the wounded soldier to keep his spirits high during physical therapy.",
    "options": [
      "envy",
      "fear",
      "humor",
      "pleasure"
    ],
    "answer": 2,
    "cn": "一種冷面自嘲的健全幽默感，讓這位受傷的軍人在漫長的物理復健療程中始終保持高昂士氣。 【選項解析】(A) envy 羨慕  (B) humor 幽默  (C) fear 恐懼  (D) pleasure 樂趣。sense of humor（幽默感）。",
    "vocabIndex": 5
  },
  {
    "q": "Having mastered every single grammar concept, Angela was entirely ______ that she would pass the English proficiency test.",
    "options": [
      "confident",
      "naughty",
      "cruel",
      "jealous"
    ],
    "answer": 0,
    "cn": "在熟練掌握了每一個核心文法觀念之後，安潔拉對自己能夠通過英語檢定測驗充滿了完全的信心。 【選項解析】(A) cruel 殘忍的  (B) naughty 淘氣的  (C) confident 充滿信心的  (D) jealous 嫉妒的。entirely confident of passing（完全有信心通過）。",
    "vocabIndex": 6
  },
  {
    "q": "Leaving home to attend university in Taipei made David learn practical life skills and become genuinely ______.",
    "options": [
      "cruel",
      "naughty",
      "jealous",
      "independent"
    ],
    "answer": 3,
    "cn": "離家前往台北就讀大學，教會了戴維實用的生活自理技能，並蛻變成為一個真正獨立自主的人。 【選項解析】(A) cruel 殘忍的  (B) naughty 淘氣的  (C) jealous 嫉妒的  (D) independent 獨立自主的。become genuinely independent（變得真正獨立）。",
    "vocabIndex": 7
  },
  {
    "q": "Laws against animal abuse impose severe prison sentences on individuals who commit ______ acts against domestic pets.",
    "options": [
      "confident",
      "generous",
      "cruel",
      "humorous"
    ],
    "answer": 2,
    "cn": "防止虐待動物法案對那些對寵物家禽犯下殘忍殘暴罪行的人士，處以極為嚴厲的刑期制裁。 【選項解析】(A) cruel 殘忍的  (B) generous 慷慨的  (C) confident 自信的  (D) humorous 幽默的。cruel acts against pets（虐待寵物的殘忍行徑）。",
    "vocabIndex": 8
  },
  {
    "q": "The ______ puppy chewed through three pairs of leather shoes while its owners were away at work yesterday.",
    "options": [
      "naughty",
      "generous",
      "confident",
      "independent"
    ],
    "answer": 0,
    "cn": "昨天主人外出上班時，那隻調皮搗蛋的幼犬一口氣咬爛撕毀了三雙名貴的皮鞋。 【選項解析】(A) generous 慷慨的  (B) naughty 頑皮搗蛋的  (C) confident 自信的  (D) independent 獨立的。naughty puppy chewed shoes（搗蛋小狗咬鞋）。",
    "vocabIndex": 9
  },
  {
    "q": "Don't be so petty and ______; celebrate your sister's graduation with joy rather than grumbling about her honors.",
    "options": [
      "generous",
      "confident",
      "humorous",
      "jealous"
    ],
    "answer": 3,
    "cn": "別那麼心胸狹窄且愛嫉妒；帶著由衷的喜悅為你姐姐的畢業喝采，而不是對她的榮譽嘀咕抱怨。 【選項解析】(A) generous 慷慨的  (B) confident 自信的  (C) jealous 嫉妒心重的  (D) humorous 幽默的。petty and jealous（小氣且愛嫉妒）。",
    "vocabIndex": 0
  },
  {
    "q": "Many young artists secretly ______ the prodigy's effortless painting technique and natural sense of color harmony.",
    "options": [
      "rock",
      "envy",
      "desert",
      "plant"
    ],
    "answer": 1,
    "cn": "許多青年藝術家暗地裡十分羨慕這位神童毫不費力的作畫技巧，以及與生俱來的色彩和諧敏銳度。 【選項解析】(A) rock 搖晃  (B) plant 種植  (C) desert 拋棄  (D) envy 羨慕。envy painting technique（羨慕繪畫技巧）。",
    "vocabIndex": 1
  },
  {
    "q": "The detective was intensely ______ about the mysterious locked drawer and searched everywhere for its brass key.",
    "options": [
      "curious",
      "cruel",
      "naughty",
      "jealous"
    ],
    "answer": 0,
    "cn": "偵探對那個神秘上鎖的抽屜感到強烈好奇，四處搜尋希望能找到能開啟它的黃銅鑰匙。 【選項解析】(A) curious 好奇的  (B) cruel 殘忍的  (C) naughty 頑皮的  (D) jealous 嫉妒的。intensely curious about drawer（對抽屜強烈好奇）。",
    "vocabIndex": 2
  },
  {
    "q": "Our grandmother was notoriously ______ with her time and affection, always baking sweet treats for all neighborhood children.",
    "options": [
      "cruel",
      "naughty",
      "generous",
      "jealous"
    ],
    "answer": 2,
    "cn": "我們的祖母在付出時間與關愛上一向以慷慨大方出名，總是為鄰里所有孩子烘烤甜美點心。 【選項解析】(A) cruel 殘忍的  (B) generous 慷慨大方的  (C) naughty 淘氣的  (D) jealous 嫉妒的。generous with time and affection（慷慨給予時間與關愛）。",
    "vocabIndex": 3
  },
  {
    "q": "The comedian delivered a ______ monologue highlighting the funny awkwardness of modern romantic dating.",
    "options": [
      "cruel",
      "humorous",
      "naughty",
      "jealous"
    ],
    "answer": 1,
    "cn": "這位喜劇脫口秀演員發表了一段幽默風趣的獨白，惟妙惟肖地點出當代男女約會的滑稽尷尬。 【選項解析】(A) cruel 殘忍的  (B) naughty 淘氣的  (C) humorous 幽默詼諧的  (D) jealous 嫉妒的。humorous monologue（幽默獨白）。",
    "vocabIndex": 4
  },
  {
    "q": "Good comedy writers must have keen observational skills and a razor-sharp understanding of human ______.",
    "options": [
      "fear",
      "envy",
      "pleasure",
      "humor"
    ],
    "answer": 3,
    "cn": "優秀的喜劇編劇家必須具備敏銳深邃的觀察力，並對人性的幽默機制擁有如剃刀般鋒利的理解。 【選項解析】(A) fear 恐懼  (B) envy 嫉妒  (C) pleasure 樂趣  (D) humor 幽默。understanding of human humor（對人性幽默的理解）。",
    "vocabIndex": 5
  },
  {
    "q": "Standing tall with shoulders back and maintaining steady eye contact makes a speaker project a ______ presence.",
    "options": [
      "confident",
      "cruel",
      "naughty",
      "jealous"
    ],
    "answer": 0,
    "cn": "挺直腰桿、雙肩展開並保持穩定的眼神接觸，能讓一位講者在台上散發出自信從容的強大氣場。 【選項解析】(A) confident 自信沉著的  (B) cruel 殘暴的  (C) naughty 淘氣的  (D) jealous 嫉妒的。confident presence（自信風采）。",
    "vocabIndex": 6
  },
  {
    "q": "Taiwan's judicial court system operates as an ______ branch of government, free from political pressure or bias.",
    "options": [
      "jealous",
      "naughty",
      "cruel",
      "independent"
    ],
    "answer": 3,
    "cn": "台灣的司法法院審判體系作為政府中獨立自主運作的權力分支，免受任何政治壓力或偏見干涉。 【選項解析】(A) jealous 嫉妒的  (B) independent 獨立超然的  (C) cruel 殘暴的  (D) naughty 頑皮的。independent branch of government（獨立政府分支）。",
    "vocabIndex": 7
  },
  {
    "q": "Ancient Roman emperors were infamous for their ______ gladiatorial games, where enslaved combatants fought to the death.",
    "options": [
      "generous",
      "cruel",
      "confident",
      "humorous"
    ],
    "answer": 1,
    "cn": "古羅馬帝國統治者以舉辦殘忍嗜血的角鬥士競賽惡名昭彰，強迫被奴役的戰士們互相殘殺至死。 【選項解析】(A) generous 慷慨的  (B) confident 自信的  (C) cruel 殘忍嗜血的  (D) humorous 幽默的。cruel gladiatorial games（殘忍的角鬥士競賽）。",
    "vocabIndex": 8
  },
  {
    "q": "The teacher scolded the ______ students who threw wet paper wads at the blackboard when she turned around.",
    "options": [
      "generous",
      "confident",
      "naughty",
      "independent"
    ],
    "answer": 2,
    "cn": "老師厲聲訓斥了那些頑皮淘氣的學生，他們趁著老師一轉身就在黑板上扔擲濕紙團搗亂。 【選項解析】(A) generous 慷慨的  (B) confident 自信的  (C) independent 獨立的  (D) naughty 頑皮搗蛋的。scolded naughty students（訓斥調皮學生）。",
    "vocabIndex": 9
  },
  {
    "q": "Beware of toxic friends who act sweet to your face but harbor green-eyed ______ behind your back whenever you succeed.",
    "options": [
      "jealousy",
      "humor",
      "pleasure",
      "sense"
    ],
    "answer": 0,
    "cn": "當心那些當面甜言蜜語，但每當你獲得成功時卻在背後暗懷眼紅嫉妒的有毒心態不良朋友。 【選項解析】(A) jealousy 嫉妒  (B) humor 幽默  (C) pleasure 樂趣  (D) sense 感覺。green-eyed jealousy（眼紅嫉妒）。",
    "vocabIndex": 0
  },
  {
    "q": "I can't help but ______ his ability to remain totally calm and articulate even during the most chaotic press conferences.",
    "options": [
      "plant",
      "desert",
      "envy",
      "pollute"
    ],
    "answer": 2,
    "cn": "我忍不住由衷羨慕他在最混亂失序的記者會場合中，依然能夠保持完全冷靜且條理分明的過人能力。 【選項解析】(A) plant 種植  (B) envy 羨慕  (C) desert 拋棄  (D) pollute 污染。envy his ability（羨慕他的能力）。",
    "vocabIndex": 1
  },
  {
    "q": "An inquisitive mind that is genuinely ______ about diverse world cultures is the greatest asset for an international diplomat.",
    "options": [
      "cruel",
      "curious",
      "naughty",
      "jealous"
    ],
    "answer": 1,
    "cn": "一顆真正對世界多元文化充滿好奇探求的求知心態，是國際外交官最無可替代的寶貴資產。 【選項解析】(A) cruel 殘忍的  (B) naughty 頑皮的  (C) curious 好奇求知的  (D) jealous 嫉妒的。curious about diverse cultures（對多元文化好奇）。",
    "vocabIndex": 2
  },
  {
    "q": "The foundation made a tremendously ______ endowment to fund cancer research facilities at the teaching hospital.",
    "options": [
      "cruel",
      "naughty",
      "jealous",
      "generous"
    ],
    "answer": 3,
    "cn": "該基金會捐贈了一筆極為慷慨龐大的基金，用以資助教學醫院興建癌症醫學研究實驗大樓。 【選項解析】(A) cruel 殘忍的  (B) naughty 淘氣的  (C) jealous 嫉妒的  (D) generous 慷慨龐大的。generous endowment（慷慨大筆的捐贈）。",
    "vocabIndex": 3
  },
  {
    "q": "Although her sharp criticism sounded harsh, there was absolutely no ______ intent behind her honest professional feedback.",
    "options": [
      "cruel",
      "generous",
      "confident",
      "humorous"
    ],
    "answer": 0,
    "cn": "雖然她的針砭批評聽起來直白嚴厲，但她誠懇專業的意見回饋背後絕無絲毫刻薄殘忍的惡意。 【選項解析】(A) cruel 殘忍刻薄的  (B) generous 慷慨的  (C) confident 自信的  (D) humorous 幽默的。no cruel intent（毫無刻薄惡意）。",
    "vocabIndex": 8
  }
];

const LOOKUP = {
  "jealous": {
    "pos": "adj.",
    "en_def": "feeling envious of someone's achievements or possessions",
    "cn_def": "嫉妒的；吃醋的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling envious of someone's achievements or possessions",
        "cn_def": "嫉妒的；吃醋的"
      }
    ]
  },
  "envy": {
    "pos": "n. / v.",
    "en_def": "a feeling of discontented longing aroused by someone else's possessions",
    "cn_def": "羨慕；嫉妒",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a feeling of discontented longing aroused by someone else's possessions",
        "cn_def": "羨慕；嫉妒"
      }
    ]
  },
  "curious": {
    "pos": "adj.",
    "en_def": "eager to know or learn something new",
    "cn_def": "好奇的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "eager to know or learn something new",
        "cn_def": "好奇的"
      }
    ]
  },
  "generous": {
    "pos": "adj.",
    "en_def": "showing a readiness to give more of something than is strictly necessary",
    "cn_def": "慷慨的；大方的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing a readiness to give more of something than is strictly necessary",
        "cn_def": "慷慨的；大方的"
      }
    ]
  },
  "humorous": {
    "pos": "adj.",
    "en_def": "causing lighthearted laughter and amusement; comical",
    "cn_def": "幽默的；詼諧的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing lighthearted laughter and amusement; comical",
        "cn_def": "幽默的；詼諧的"
      }
    ]
  },
  "humor": {
    "pos": "n.",
    "en_def": "the quality of being amusing or comic",
    "cn_def": "幽默；幽默感",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of being amusing or comic",
        "cn_def": "幽默；幽默感"
      }
    ]
  },
  "confident": {
    "pos": "adj.",
    "en_def": "feeling or showing certainty about something or one's own ability",
    "cn_def": "有信心的；自信的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling or showing certainty about something or one's own ability",
        "cn_def": "有信心的；自信的"
      }
    ]
  },
  "independent": {
    "pos": "adj.",
    "en_def": "free from outside control; not depending on another's authority",
    "cn_def": "獨立的；自主的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "free from outside control; not depending on another's authority",
        "cn_def": "獨立的；自主的"
      }
    ]
  },
  "cruel": {
    "pos": "adj.",
    "en_def": "willfully causing pain or suffering to others without feeling mercy",
    "cn_def": "殘忍的；殘暴的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "willfully causing pain or suffering to others without feeling mercy",
        "cn_def": "殘忍的；殘暴的"
      }
    ]
  },
  "naughty": {
    "pos": "adj.",
    "en_def": "badly behaved; disobedient, especially of children",
    "cn_def": "頑皮的；淘氣的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "badly behaved; disobedient, especially of children",
        "cn_def": "頑皮的；淘氣的"
      }
    ]
  },
  "sense": {
    "pos": "",
    "en_def": "",
    "cn_def": "感官",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "感官"
      }
    ]
  },
  "feeling": {
    "pos": "",
    "en_def": "",
    "cn_def": "感覺",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "感覺"
      }
    ]
  },
  "fear": {
    "pos": "",
    "en_def": "",
    "cn_def": "恐懼",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "恐懼"
      }
    ]
  },
  "pleasure": {
    "pos": "",
    "en_def": "",
    "cn_def": "樂趣",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "樂趣"
      }
    ]
  },
  "rock": {
    "pos": "",
    "en_def": "",
    "cn_def": "搖晃",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "搖晃"
      }
    ]
  },
  "desert": {
    "pos": "",
    "en_def": "",
    "cn_def": "拋棄",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "拋棄"
      }
    ]
  },
  "plant": {
    "pos": "",
    "en_def": "",
    "cn_def": "種植",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "種植"
      }
    ]
  },
  "jealousy": {
    "pos": "",
    "en_def": "",
    "cn_def": "嫉妒",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "嫉妒"
      }
    ]
  },
  "pollute": {
    "pos": "",
    "en_def": "",
    "cn_def": "污染",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "污染"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
