// Lesson 44 Quiz Data: Human Beings, Aesthetics, Competition & Conflict
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 44 - Human Beings, Aesthetics, Competition & Conflict",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "lovely",
    "pos": "adj.",
    "cn_def": "可愛的；美好的",
    "en_def": "attractive, delightful, or very pleasant",
    "sentence": "The small mountain town looked very {{BLANK}} in the autumn morning, and many tourists took wonderful pictures of the scenery.",
    "cn": "這座山區小鎮在秋天早晨看起來非常美好，許多遊客拍攝了絕妙的風景照片。"
  },
  {
    "word": "ugly",
    "pos": "adj.",
    "cn_def": "醜陋的；難看的",
    "en_def": "unpleasant to look at; not attractive",
    "sentence": "The old factory building was dirty and {{BLANK}}, so the city council decided to rebuild it into a modern art center.",
    "cn": "那棟舊工廠建築又髒又醜陋，因此市議會決定將其改建為一座現代藝術中心。"
  },
  {
    "word": "winner",
    "pos": "n.",
    "cn_def": "贏家；勝利者",
    "en_def": "a person or team that wins a game or competition",
    "sentence": "When the final whistle blew, the captain of the football team stepped forward to receive the gold trophy as the proud {{BLANK}}.",
    "cn": "當終場哨聲響起時，足球隊隊長走上前去，作為自豪的贏家接過黃金獎盃。"
  },
  {
    "word": "loser",
    "pos": "n.",
    "cn_def": "輸家；失敗者",
    "en_def": "a person or team that is defeated in a competition",
    "sentence": "Nobody enjoys being the {{BLANK}} in a competitive match, but good sportsmanship teaches us to respect our opponents.",
    "cn": "在激烈的比賽中沒有人喜歡當失敗者，但良好的運動家精神教會我們要尊重對手。"
  },
  {
    "word": "race",
    "pos": "n. / v.",
    "cn_def": "賽跑；競賽；種族；狂奔",
    "en_def": "a running contest of speed; ethnic group; to compete",
    "sentence": "Hundreds of athletic students gathered on the school track to participate in the exciting annual relay {{BLANK}}.",
    "cn": "數百名熱愛運動的學生聚集在學校跑道上，參加令人興奮的年度接力賽跑。"
  },
  {
    "word": "human",
    "pos": "n. / adj.",
    "cn_def": "人類；人；人類的",
    "en_def": "a person; characteristic of people",
    "sentence": "Unlike most animals, {{BLANK}} beings have the unique ability to create complex languages and record history.",
    "cn": "與大多數動物不同，人類具備創造複雜語言並記錄歷史的獨特能力。"
  },
  {
    "word": "soul",
    "pos": "n.",
    "cn_def": "靈魂；精神；心靈",
    "en_def": "the spiritual or immaterial part of a human being",
    "sentence": "Listening to classical piano music late at night brought peaceful comfort to her tired {{BLANK}} after a long workday.",
    "cn": "深夜聆聽古典鋼琴音樂，為她漫長工作日後疲憊的心靈帶來了平靜的安慰。"
  },
  {
    "word": "monster",
    "pos": "n.",
    "cn_def": "怪獸；怪物",
    "en_def": "a cruel, frightening, or imaginary creature",
    "sentence": "The scary movie featured a giant green {{BLANK}} that rose from the deep ocean and terrified the peaceful city.",
    "cn": "那部恐怖電影描繪了一隻從深海中爬出並驚嚇寧靜城市的巨大綠色怪獸。"
  },
  {
    "word": "war",
    "pos": "n.",
    "cn_def": "戰爭",
    "en_def": "armed fighting between countries or groups",
    "sentence": "Peaceful negotiations were held between leaders, because nobody wanted a destructive {{BLANK}} to ruin both nations.",
    "cn": "各國領袖之間舉行了和平談判，因為沒有人希望一場具毀滅性的戰爭摧毀兩個國家。"
  },
  {
    "word": "army",
    "pos": "n.",
    "cn_def": "陸軍；軍隊",
    "en_def": "a large, organized military force for fighting on land",
    "sentence": "After completing his university degree, Samuel decided to join the national {{BLANK}} and serve his country proudly.",
    "cn": "完成大學學業後，塞繆爾決定加入國家陸軍並自豪地為國效力。"
  }
];

const MCQS = [
  {
    "q": "During the intense marathon ______, runners from thirty different countries competed fiercely under the scorching sun.",
    "options": [
      "war",
      "race",
      "army",
      "soul"
    ],
    "answer": 1,
    "cn": "在激烈的馬拉松賽跑中，來自三十個不同國家的跑者在烈日下激烈競爭。 【選項解析】(A) race 賽跑  (B) war 戰爭  (C) army 軍隊  (D) soul 靈魂。marathon race（馬拉松賽跑）。",
    "vocabIndex": 4
  },
  {
    "q": "The fairy tale tells the story of an ______ duckling that eventually grew up into a magnificent white swan.",
    "options": [
      "ugly",
      "lovely",
      "human",
      "gentle"
    ],
    "answer": 0,
    "cn": "這則童話故事講述了一隻醜小鴨最終長成一隻美麗壯觀的白天鵝的故事。 【選項解析】(A) lovely 可愛美好的  (B) ugly 醜陋的  (C) human 人類的  (D) gentle 溫柔的。ugly duckling（醜小鴨）。",
    "vocabIndex": 1
  },
  {
    "q": "The proud ______ of the English speech contest was awarded a shiny medal and a trip to London.",
    "options": [
      "human",
      "loser",
      "monster",
      "winner"
    ],
    "answer": 3,
    "cn": "英語演講比賽自豪的優勝者被授予了一枚閃亮的獎牌與一次倫敦之旅。 【選項解析】(A) winner 贏家  (B) loser 輸家  (C) monster 怪物  (D) human 人類。獲得金牌與旅遊獎勵者為 winner。",
    "vocabIndex": 2
  },
  {
    "q": "Millions of soldiers and civilians lost their lives during World ______ II, causing unprecedented global sorrow.",
    "options": [
      "Soul",
      "Race",
      "War",
      "Army"
    ],
    "answer": 2,
    "cn": "在第二次世界大戰期間，數百萬士兵和平民喪生，造成了空前的全球悲痛。 【選項解析】(A) War 戰爭  (B) Race 競賽  (C) Soul 靈魂  (D) Army 軍隊。World War II（第二次世界大戰）。",
    "vocabIndex": 8
  },
  {
    "q": "We spent a truly ______ afternoon sitting on the sunlit terrace, enjoying warm tea and chocolate cookies.",
    "options": [
      "ugly",
      "lovely",
      "sneaky",
      "evil"
    ],
    "answer": 1,
    "cn": "我們坐在陽光灑落的露台上度過了一個非常美好的下午，享用著熱茶與巧克力餅乾。 【選項解析】(A) lovely 美好的  (B) ugly 難看的  (C) sneaky 鬼祟的  (D) evil 罪惡的。愉快下午為 lovely afternoon。",
    "vocabIndex": 0
  },
  {
    "q": "Scientists are still studying whether ______ beings can safely establish permanent colonies on planet Mars.",
    "options": [
      "winner",
      "monster",
      "human",
      "loser"
    ],
    "answer": 2,
    "cn": "科學家仍在研究人類是否能夠在火星上安全建立永久殖民地。 【選項解析】(A) human 人類的  (B) monster 怪物的  (C) winner 贏家的  (D) loser 失敗者的。human beings（人類）。",
    "vocabIndex": 5
  },
  {
    "q": "The young novelist believed that poetry is the ultimate expression of the human ______ and its deep emotions.",
    "options": [
      "war",
      "race",
      "army",
      "soul"
    ],
    "answer": 3,
    "cn": "那位年輕小說家認為詩歌是人類心靈及其深層情感的極致表達。 【選項解析】(A) soul 心靈  (B) race 種族  (C) army 軍隊  (D) war 戰爭。human soul（人類心靈）。",
    "vocabIndex": 6
  },
  {
    "q": "The government deployed the ______ to assist rescue teams and build temporary shelters after the massive earthquake.",
    "options": [
      "army",
      "soul",
      "race",
      "monster"
    ],
    "answer": 0,
    "cn": "強震發生後，政府調動軍隊協助救援隊伍並搭建臨時避難所。 【選項解析】(A) army 軍隊  (B) soul 靈魂  (C) race 競賽  (D) monster 怪物。調派軍隊救災為 deploy the army。",
    "vocabIndex": 9
  },
  {
    "q": "In the frightening legend, a horrible sea ______ attacked wooden fishing vessels whenever thunder echoed across the bay.",
    "options": [
      "winner",
      "monster",
      "human",
      "gentleman"
    ],
    "answer": 1,
    "cn": "在令人毛骨悚然的傳說中，每當雷聲在海灣迴響，可怕的海怪就會襲擊木製漁船。 【選項解析】(A) monster 怪物  (B) winner 贏家  (C) human 人類  (D) gentleman 紳士。傳說中的海中巨獸為 sea monster。",
    "vocabIndex": 7
  },
  {
    "q": "Even though our basketball team was the ______ in the final championship game, the coach commended our brave effort.",
    "options": [
      "monster",
      "winner",
      "loser",
      "gentleman"
    ],
    "answer": 2,
    "cn": "即使我們的籃球隊在總決賽中落敗成為輸家，教練依然讚揚了我們英勇的努力。 【選項解析】(A) loser 輸家  (B) winner 贏家  (C) monster 怪物  (D) gentleman 紳士。決賽落敗的一方為 loser。",
    "vocabIndex": 3
  },
  {
    "q": "Discrimination based on ______ or skin color is strictly prohibited by human rights declarations worldwide.",
    "options": [
      "race",
      "soul",
      "war",
      "army"
    ],
    "answer": 0,
    "cn": "全球人權宣言嚴格禁止基於種族或膚色的任何歧視行為。 【選項解析】(A) race 種族  (B) soul 靈魂  (C) war 戰爭  (D) army 軍隊。基於種族的歧視為 discrimination based on race。",
    "vocabIndex": 4
  },
  {
    "q": "The historical museum exhibits military uniforms, heavy guns, and weapons used by the continental ______.",
    "options": [
      "winner",
      "soul",
      "race",
      "army"
    ],
    "answer": 3,
    "cn": "歷史博物館展出了大陸軍部隊曾使用過的軍服、重型槍枝與各類武器。 【選項解析】(A) army 軍隊  (B) soul 靈魂  (C) race 賽跑  (D) winner 獲勝者。continental army（大陸軍）。",
    "vocabIndex": 9
  },
  {
    "q": "The grandmother planted fragrant roses and sweet lavender, turning her front yard into a ______ floral garden.",
    "options": [
      "ugly",
      "lovely",
      "sneaky",
      "wild"
    ],
    "answer": 1,
    "cn": "祖母種植了芬芳的玫瑰與香甜的薰衣草，將她的前院變成了一座美麗的花卉花園。 【選項解析】(A) lovely 令人愉悅美麗的  (B) ugly 醜陋的  (C) sneaky 鬼祟的  (D) wild 野蠻的。美麗庭園為 lovely floral garden。",
    "vocabIndex": 0
  },
  {
    "q": "It is essential for democratic nations to avoid useless ______ and solve international conflicts through diplomatic talks.",
    "options": [
      "soul",
      "race",
      "war",
      "army"
    ],
    "answer": 2,
    "cn": "民主國家必須避免無謂的戰爭，並透過外交對話解決國際衝突。 【選項解析】(A) war 戰爭  (B) race 競賽  (C) soul 靈魂  (D) army 軍隊。avoid useless war（避免無謂戰爭）。",
    "vocabIndex": 8
  },
  {
    "q": "True champions show great modesty in victory and treat the defeated ______ with kindness and sympathy.",
    "options": [
      "loser",
      "winner",
      "monster",
      "human"
    ],
    "answer": 0,
    "cn": "真正的冠軍在獲勝時表現謙遜，並以友善與同理心對待落敗的輸家。 【選項解析】(A) loser 輸家  (B) winner 贏家  (C) monster 怪物  (D) human 人類。defeat the loser（擊敗對手/輸家）。",
    "vocabIndex": 3
  },
  {
    "q": "Leaving piles of plastic trash and broken bottles on the scenic beach makes the coastline look terribly ______.",
    "options": [
      "gentle",
      "lovely",
      "slender",
      "ugly"
    ],
    "answer": 3,
    "cn": "在風景優美的海灘上遺留成堆塑膠垃圾和碎玻璃瓶，會讓海岸線看起來難看至極。 【選項解析】(A) ugly 難看醜陋的  (B) lovely 美麗的  (C) slender 苗條的  (D) gentle 溫柔的。垃圾破壞景觀顯得 ugly。",
    "vocabIndex": 1
  },
  {
    "q": "Compassion and kindness toward weaker members of society are fundamental virtues of any civilized ______ society.",
    "options": [
      "monster",
      "human",
      "winner",
      "loser"
    ],
    "answer": 1,
    "cn": "對社會中弱勢成員的同情與善良，是任何文明人類社會的基本美德。 【選項解析】(A) human 人類的  (B) monster 怪獸的  (C) winner 贏家的  (D) loser 輸家的。human society（人類社會）。",
    "vocabIndex": 5
  },
  {
    "q": "Listening to the quiet rain falling against the window seemed to refresh her spirit and calm her troubled ______.",
    "options": [
      "soul",
      "race",
      "army",
      "war"
    ],
    "answer": 0,
    "cn": "聆聽窗外靜靜落下的雨聲，似乎能撫平並提振她煩亂的心靈。 【選項解析】(A) soul 心靈  (B) race 種族  (C) army 軍隊  (D) war 戰爭。calm her troubled soul（撫平不安的心靈）。",
    "vocabIndex": 6
  },
  {
    "q": "The children screamed with excitement when a person dressed as a fluffy blue ______ entered the birthday party.",
    "options": [
      "human",
      "winner",
      "loser",
      "monster"
    ],
    "answer": 3,
    "cn": "當一個打扮成蓬鬆藍色怪獸的人走進生日派對時，孩子們興奮地尖叫起來。 【選項解析】(A) monster 怪獸  (B) winner 贏家  (C) loser 輸家  (D) human 人類。裝扮成絨毛怪獸為 fluffy monster。",
    "vocabIndex": 7
  },
  {
    "q": "The first runner to cross the finish line in the hundred-meter sprint was celebrated as the undisputed ______.",
    "options": [
      "monster",
      "loser",
      "winner",
      "human"
    ],
    "answer": 2,
    "cn": "在百米短跑中第一個衝過終點線的選手，被譽為無可爭議的獲勝者。 【選項解析】(A) winner 贏家  (B) loser 輸家  (C) monster 怪物  (D) human 人類。短跑奪冠者為 undisputed winner。",
    "vocabIndex": 2
  },
  {
    "q": "Thousands of spectators cheered loudly as the cars sped down the track during the Grand Prix motor ______.",
    "options": [
      "army",
      "war",
      "soul",
      "race"
    ],
    "answer": 3,
    "cn": "在大獎賽賽車比賽期間，當賽車在賽道上飛馳時，數千名觀眾大聲歡呼。 【選項解析】(A) race 競賽；賽車  (B) war 戰爭  (C) soul 靈魂  (D) army 軍隊。motor race（賽車競賽）。",
    "vocabIndex": 4
  },
  {
    "q": "The elderly woman possessed a gentle smile and a warm personality, making her a ______ companion to everyone.",
    "options": [
      "evil",
      "ugly",
      "lovely",
      "sneaky"
    ],
    "answer": 2,
    "cn": "那位年長女士擁有溫柔的笑容和熱情的個性，這讓她成為每個人身邊親切可愛的伴侶。 【選項解析】(A) lovely 令人喜愛的  (B) ugly 醜陋的  (C) evil 邪惡的  (D) sneaky 鬼祟的。lovely companion（討人喜歡的同伴）。",
    "vocabIndex": 0
  },
  {
    "q": "To prevent unnecessary bloodshed, the general ordered his entire ______ to withdraw from the border immediately.",
    "options": [
      "race",
      "army",
      "soul",
      "monster"
    ],
    "answer": 1,
    "cn": "為了防止不必要的流血衝突，將軍命令他的整個軍隊立刻從邊界撤退。 【選項解析】(A) army 軍隊  (B) race 競賽  (C) soul 靈魂  (D) monster 怪物。將軍統領軍隊為 army。",
    "vocabIndex": 9
  },
  {
    "q": "The terrifying roar of the mythical cave ______ made all the adventurous treasure hunters freeze in terror.",
    "options": [
      "monster",
      "human",
      "winner",
      "gentleman"
    ],
    "answer": 0,
    "cn": "神話中洞穴怪獸可怕的咆哮聲，讓所有冒險尋寶者嚇得動彈不得。 【選項解析】(A) monster 怪獸  (B) human 人類  (C) winner 贏家  (D) gentleman 紳士。洞穴巨怪為 cave monster。",
    "vocabIndex": 7
  },
  {
    "q": "Civil ______ tore the country apart for decades, destroying historic towns and displacing millions of families.",
    "options": [
      "soul",
      "race",
      "war",
      "army"
    ],
    "answer": 2,
    "cn": "內戰摧毀了這個國家數十年，破壞了歷史古鎮並使數百萬家庭流離失所。 【選項解析】(A) war 戰爭  (B) race 種族  (C) soul 靈魂  (D) army 軍隊。Civil war（內戰）。",
    "vocabIndex": 8
  }
];

const LOOKUP = {
  "lovely": {
    "pos": "adj.",
    "en_def": "attractive, delightful, or very pleasant",
    "cn_def": "可愛的；美好的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "attractive, delightful, or very pleasant",
        "cn_def": "可愛的；美好的"
      }
    ]
  },
  "ugly": {
    "pos": "adj.",
    "en_def": "unpleasant to look at; not attractive",
    "cn_def": "醜陋的；難看的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "unpleasant to look at; not attractive",
        "cn_def": "醜陋的；難看的"
      }
    ]
  },
  "winner": {
    "pos": "n.",
    "en_def": "a person or team that wins a game or competition",
    "cn_def": "贏家；勝利者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or team that wins a game or competition",
        "cn_def": "贏家；勝利者"
      }
    ]
  },
  "loser": {
    "pos": "n.",
    "en_def": "a person or team that is defeated in a competition",
    "cn_def": "輸家；失敗者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or team that is defeated in a competition",
        "cn_def": "輸家；失敗者"
      }
    ]
  },
  "race": {
    "pos": "n. / v.",
    "en_def": "a running contest of speed; ethnic group; to compete",
    "cn_def": "賽跑；競賽；種族；狂奔",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a running contest of speed; ethnic group; to compete",
        "cn_def": "賽跑；競賽；種族；狂奔"
      }
    ]
  },
  "human": {
    "pos": "n. / adj.",
    "en_def": "a person; characteristic of people",
    "cn_def": "人類；人；人類的",
    "combined": [
      {
        "pos": "n. / adj.",
        "en_def": "a person; characteristic of people",
        "cn_def": "人類；人；人類的"
      }
    ]
  },
  "soul": {
    "pos": "n.",
    "en_def": "the spiritual or immaterial part of a human being",
    "cn_def": "靈魂；精神；心靈",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the spiritual or immaterial part of a human being",
        "cn_def": "靈魂；精神；心靈"
      }
    ]
  },
  "monster": {
    "pos": "n.",
    "en_def": "a cruel, frightening, or imaginary creature",
    "cn_def": "怪獸；怪物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a cruel, frightening, or imaginary creature",
        "cn_def": "怪獸；怪物"
      }
    ]
  },
  "war": {
    "pos": "n.",
    "en_def": "armed fighting between countries or groups",
    "cn_def": "戰爭",
    "combined": [
      {
        "pos": "n.",
        "en_def": "armed fighting between countries or groups",
        "cn_def": "戰爭"
      }
    ]
  },
  "army": {
    "pos": "n.",
    "en_def": "a large, organized military force for fighting on land",
    "cn_def": "陸軍；軍隊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large, organized military force for fighting on land",
        "cn_def": "陸軍；軍隊"
      }
    ]
  },
  "gentle": {
    "pos": "",
    "en_def": "",
    "cn_def": "溫柔的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "溫柔的"
      }
    ]
  },
  "sneaky": {
    "pos": "",
    "en_def": "",
    "cn_def": "鬼祟的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "鬼祟的"
      }
    ]
  },
  "evil": {
    "pos": "",
    "en_def": "",
    "cn_def": "罪惡的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "罪惡的"
      }
    ]
  },
  "gentleman": {
    "pos": "",
    "en_def": "",
    "cn_def": "紳士",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "紳士"
      }
    ]
  },
  "wild": {
    "pos": "",
    "en_def": "",
    "cn_def": "野蠻的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "野蠻的"
      }
    ]
  },
  "slender": {
    "pos": "",
    "en_def": "",
    "cn_def": "苗條的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "苗條的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
