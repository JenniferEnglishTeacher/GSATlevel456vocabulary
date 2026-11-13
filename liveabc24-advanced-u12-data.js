// Unit 12 Quiz Data: enthusiasm – make a difference
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Advanced U12 - enthusiasm – make a difference",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "enthusiasm",
    "pos": "n.",
    "cn_def": "熱情、熱忱",
    "en_def": "a feeling of energetic interest or excitement for a task.",
    "sentence": "Her {{BLANK}} for science was obvious from the way she asked questions and stayed after class to do extra experiments.",
    "cn": "她對科學的熱情從她提問的方式和課後留下來做額外實驗的行為中顯而易見。"
  },
  {
    "word": "enthusiastic",
    "pos": "adj.",
    "cn_def": "熱情的、熱心的",
    "en_def": "showing high excitement or eager interest in an event.",
    "sentence": "The crowd was incredibly {{BLANK}} during the concert, singing along to every song and cheering after each performance.",
    "cn": "音樂會期間，人群非常熱情，跟著每首歌一起唱，並在每次表演後歡呼喝彩。"
  },
  {
    "word": "tradition",
    "pos": "n.",
    "cn_def": "傳統",
    "en_def": "a custom or belief passed down across generations.",
    "sentence": "It is a family {{BLANK}} to gather at the grandparents' house every Lunar New Year and share a big meal together.",
    "cn": "每逢農曆新年，全家聚集在祖父母家共享豐盛大餐是一個家庭傳統。"
  },
  {
    "word": "traditional",
    "pos": "adj.",
    "cn_def": "傳統的",
    "en_def": "tracking old family baseline customs rather than new styles.",
    "sentence": "The museum displayed {{BLANK}} costumes from different Aboriginal tribes, each with its own unique patterns and colours.",
    "cn": "博物館展示了來自不同原住民部落的傳統服飾，每件都有其獨特的圖案和色彩。"
  },
  {
    "word": "unique",
    "pos": "adj.",
    "cn_def": "獨一無二的、獨特的",
    "en_def": "being the only one of its kind; highly unusual special.",
    "sentence": "Every snowflake has a {{BLANK}} pattern, meaning no two snowflakes in the world are ever exactly the same shape.",
    "cn": "每片雪花都有獨一無二的圖案，這意味著世界上沒有兩片雪花的形狀完全相同。"
  },
  {
    "word": "honor",
    "pos": "v.",
    "cn_def": "向…致敬、給予榮譽",
    "en_def": "to show immense public respect or reward an expert.",
    "sentence": "The community gathered to {{BLANK}} the retiring teacher with a special ceremony and a heartfelt thank-you card from students.",
    "cn": "社區聚集在一起，用特別儀式和學生們誠摯的感謝卡向即將退休的老師致敬。"
  },
  {
    "word": "honor",
    "pos": "n.",
    "cn_def": "榮譽、光榮、誠實",
    "en_def": "high respect, reputation, or an award token entry.",
    "sentence": "It is a great {{BLANK}} to be selected as the student representative to speak at the school's graduation ceremony.",
    "cn": "被選為學生代表在學校畢業典禮上發言是一份極大的榮譽。"
  },
  {
    "word": "in honor of",
    "pos": "phr.",
    "cn_def": "為了紀念…、向…致敬",
    "en_def": "dedicated directly to reward a historic pioneer agent.",
    "sentence": "A new park was named {{BLANK}} the scientist who discovered the cure that saved millions of lives worldwide.",
    "cn": "一座新公園以那位發現了拯救全球數百萬生命療法的科學家的名字命名，以紀念他。"
  },
  {
    "word": "honorable",
    "pos": "adj.",
    "cn_def": "可敬的、高尚的",
    "en_def": "tracking high moral standards; worthy of respect.",
    "sentence": "The soldier was praised for his {{BLANK}} conduct during the mission and was awarded a medal for exceptional bravery.",
    "cn": "這位士兵因在任務中的高尚行為而受到表彰，並獲得了一枚英勇勛章。"
  },
  {
    "word": "fortune",
    "pos": "n.",
    "cn_def": "運氣、機運",
    "en_def": "random chance or good luck impacting an individual.",
    "sentence": "It was his {{BLANK}} to be in the right place at the right time when the famous director was looking for a young actor.",
    "cn": "當著名導演在尋找年輕演員時，他恰好在正確的時間出現在正確的地方，這是他的運氣。"
  },
  {
    "word": "fortune",
    "pos": "n.",
    "cn_def": "大筆財富",
    "en_def": "a massive bundle of money, gold, or property assets.",
    "sentence": "She invested her savings wisely and managed to build a small {{BLANK}} over thirty years by living modestly and saving regularly.",
    "cn": "她明智地投資了她的積蓄，通過節儉生活和定期儲蓄，在三十年內積累了一筆小財富。"
  },
  {
    "word": "make a fortune by",
    "pos": "phr.",
    "cn_def": "靠…發大財",
    "en_def": "to successfully pile up millions via unique trade lines.",
    "sentence": "He managed to {{BLANK}} selling handmade furniture online during the pandemic when demand suddenly increased.",
    "cn": "他在疫情期間需求突然增加時，靠在網上銷售手工家具成功發了大財。"
  },
  {
    "word": "misfortune",
    "pos": "n.",
    "cn_def": "不幸、厄運",
    "en_def": "a streak of terrible events or bad luck accidents.",
    "sentence": "Despite facing great {{BLANK}} in his early life, he never lost his optimism and eventually built a very successful career.",
    "cn": "儘管早年遭受了巨大的不幸，他從未失去樂觀精神，最終建立了非常成功的事業。"
  },
  {
    "word": "fortunate",
    "pos": "adj.",
    "cn_def": "幸運的",
    "en_def": "lucky; tracking exceptional baseline outcomes.",
    "sentence": "We were very {{BLANK}} that the typhoon changed direction at the last moment and did not cause serious damage to the city.",
    "cn": "我們非常幸運，颱風在最後一刻改變了方向，沒有對這座城市造成嚴重損害。"
  },
  {
    "word": "unfortunate",
    "pos": "adj.",
    "cn_def": "不幸的",
    "en_def": "unlucky; hit by unexpected operational failures.",
    "sentence": "It was very {{BLANK}} that the main speaker fell ill the night before the conference and was unable to attend at all.",
    "cn": "主要演講者在會議前一晚生病，完全無法出席，這真的很不幸。"
  },
  {
    "word": "single",
    "pos": "adj.",
    "cn_def": "單一的、單身的",
    "en_def": "only one; separate; not married or combined.",
    "sentence": "She read every {{BLANK}} page of the contract carefully before signing it to make sure she understood all the terms.",
    "cn": "她在簽署合約之前仔細閱讀了每一頁，確保她理解所有條款。"
  },
  {
    "word": "not a single",
    "pos": "phr.",
    "cn_def": "連一個也（沒有）",
    "en_def": "absolutely zero units matching a specific description.",
    "sentence": "After the storm, {{BLANK}} tree in the orchard was left standing — the wind had knocked them all down overnight.",
    "cn": "暴風雨過後，果園裡連一棵樹都沒有剩下——風在一夜之間將它們全部吹倒了。"
  },
  {
    "word": "represent",
    "pos": "v.",
    "cn_def": "代表、代理",
    "en_def": "to speak or act officially on behalf of a team.",
    "sentence": "She was chosen to {{BLANK}} her school at the national debate competition and worked hard to prepare her arguments.",
    "cn": "她被選中代表學校參加全國辯論比賽，並努力準備她的論點。"
  },
  {
    "word": "represent",
    "pos": "v.",
    "cn_def": "象徵、表示",
    "en_def": "to stand as a clear graphical sign or symbol for a concept.",
    "sentence": "The dove has long been used to {{BLANK}} peace, and it appears on flags, artwork, and monuments around the world.",
    "cn": "鴿子長期以來被用來象徵和平，它出現在世界各地的旗幟、藝術品和紀念碑上。"
  },
  {
    "word": "representation",
    "pos": "n.",
    "cn_def": "代表、表現、描繪",
    "en_def": "the act of standing in for a major public body.",
    "sentence": "Many people feel that women's {{BLANK}} in leadership roles has improved significantly over the past twenty years.",
    "cn": "許多人認為女性在領導角色中的代表性在過去二十年中已顯著提升。"
  },
  {
    "word": "representative",
    "pos": "n.",
    "cn_def": "代表、代理人",
    "en_def": "an agent picked to state opinions for a corporate base.",
    "sentence": "A {{BLANK}} from the student council attended the school board meeting to share feedback about the new lunch menu.",
    "cn": "學生會的一名代表出席了學校董事會會議，分享有關新午餐菜單的意見。"
  },
  {
    "word": "wealth",
    "pos": "n.",
    "cn_def": "財富、富有",
    "en_def": "a large amount of money, land, or valuable goods.",
    "sentence": "The country's natural {{BLANK}} includes vast forests, mineral deposits, and fertile farmland that support millions of people.",
    "cn": "這個國家的自然財富包括廣闊的森林、礦藏和肥沃的農地，養活了數百萬人。"
  },
  {
    "word": "wealthy",
    "pos": "adj.",
    "cn_def": "富裕的、有錢的",
    "en_def": "rich; holding deep capital reserves and assets.",
    "sentence": "Even though his family was not {{BLANK}}, he received a full scholarship and was able to attend one of the top universities.",
    "cn": "儘管他的家庭並不富裕，但他獲得了全額獎學金，能夠就讀頂尖大學之一。"
  },
  {
    "word": "Whoever",
    "pos": "n.",
    "cn_def": "無論誰、任何人",
    "en_def": "any person who; no matter who performs the task.",
    "sentence": "{{BLANK}} finishes the assignment first can use the remaining class time to read freely or work on their own projects.",
    "cn": "無論誰先完成作業，都可以用剩餘的課堂時間自由閱讀或進行自己的項目。"
  },
  {
    "word": "whomever",
    "pos": "n.",
    "cn_def": "無論誰（受格）",
    "en_def": "any person who receives an action (object role).",
    "sentence": "The manager said she would give the promotion to {{BLANK}} demonstrated the most initiative and dedication over the year.",
    "cn": "經理說她會將晉升機會給予這一年中表現出最多主動性和奉獻精神的任何人。"
  },
  {
    "word": "Whatever",
    "pos": "n.",
    "cn_def": "無論什麼",
    "en_def": "anything or everything that plays out in a zone.",
    "sentence": "{{BLANK}} decision you make, make sure you have thought it through carefully and considered all the possible consequences.",
    "cn": "無論你做什麼決定，確保你已仔細考慮並考量了所有可能的後果。"
  },
  {
    "word": "whichever",
    "pos": "n.",
    "cn_def": "無論哪個",
    "en_def": "picking any unit cleanly out of a narrow set group.",
    "sentence": "You can order {{BLANK}} dish you like from the menu, as tonight's dinner is being paid for by the company.",
    "cn": "你可以從菜單上點任何你喜歡的菜，因為今晚的晚餐由公司買單。"
  },
  {
    "word": "reward",
    "pos": "n.",
    "cn_def": "報酬、獎賞",
    "en_def": "an item or cash given to thank someone for good work.",
    "sentence": "The company offered a generous {{BLANK}} to anyone who could provide useful information leading to the recovery of the stolen data.",
    "cn": "公司向任何能提供有助於追回被盜數據的有用資訊的人提供豐厚的獎賞。"
  },
  {
    "word": "rewarded",
    "pos": "v.",
    "cn_def": "獎賞、回報",
    "en_def": "to give someone a token to thank them for help tasks.",
    "sentence": "The school {{BLANK}} students who showed consistent improvement with a special certificate at the end of each term.",
    "cn": "學校在每學期末用特別證書獎賞那些持續進步的學生。"
  },
  {
    "word": "reward with",
    "pos": "phr.",
    "cn_def": "用…來獎勵",
    "en_def": "gifting an explicit asset item to praise top metrics.",
    "sentence": "The manager decided to {{BLANK}} a full day off and a catered lunch together.",
    "cn": "經理決定用一整天假期和一頓外燴午餐來獎勵表現最佳的團隊。"
  },
  {
    "word": "promise",
    "pos": "n.",
    "cn_def": "承諾、諾言",
    "en_def": "an explicit statement that you will definitely do a task.",
    "sentence": "She kept her {{BLANK}} to her younger brother and attended every one of his football matches throughout the entire season.",
    "cn": "她遵守了對弟弟的諾言，整個賽季出席了他的每一場足球比賽。"
  },
  {
    "word": "promise",
    "pos": "n.",
    "cn_def": "（前途）希望、潛力",
    "en_def": "a clear sign of future success or high talent traits.",
    "sentence": "The young musician showed great {{BLANK}} at such an early age that she was offered a place in the national youth orchestra.",
    "cn": "這位年輕音樂家在如此早的年齡就展現出巨大的潛力，以至於她獲得了加入國家青年管弦樂團的機會。"
  },
  {
    "word": "promised",
    "pos": "v.",
    "cn_def": "答應、承諾",
    "en_def": "to state firmly that you will deliver an item target.",
    "sentence": "He {{BLANK}} to help his classmate prepare for the exam and spent every evening that week reviewing difficult topics together.",
    "cn": "他答應幫助同學準備考試，那週每天晚上都和他一起複習困難的主題。"
  },
  {
    "word": "keep a promise",
    "pos": "phr.",
    "cn_def": "守信、履行諾言",
    "en_def": "executing a duty exactly as stated across old talks.",
    "sentence": "It is important to only make commitments you can realistically fulfil, because failing to {{BLANK}} damages trust.",
    "cn": "只做你實際上能履行的承諾非常重要，因為無法守信會破壞信任。"
  },
  {
    "word": "full of promise",
    "pos": "phr.",
    "cn_def": "很有前途的、大有可為的",
    "en_def": "showcasing exceptional baseline potential to win fields.",
    "sentence": "The young athlete is {{BLANK}} and coaches believe she could become a world champion within the next five years.",
    "cn": "這位年輕運動員很有前途，教練們相信她在未來五年內可能成為世界冠軍。"
  },
  {
    "word": "promising",
    "pos": "adj.",
    "cn_def": "有前途的、有希望的",
    "en_def": "showing signs of future success or fine performance.",
    "sentence": "The research results are very {{BLANK}} and suggest that the new vaccine could be ready for clinical trials by next year.",
    "cn": "研究結果非常有希望，表明新疫苗可能在明年準備好進行臨床試驗。"
  },
  {
    "word": "delighted",
    "pos": "adj.",
    "cn_def": "感到高興的、滿心歡喜的",
    "en_def": "incredibly happy and pleased about an outcome event.",
    "sentence": "She was absolutely {{BLANK}} when she found out she had passed all her exams with top marks and would receive a scholarship.",
    "cn": "當她得知自己以最高分通過了所有考試並將獲得獎學金時，她感到無比高興。"
  },
  {
    "word": "are delighted to",
    "pos": "phr.",
    "cn_def": "很榮幸去…、很高興去…",
    "en_def": "happily welcoming an opportunity to complete an action.",
    "sentence": "We {{BLANK}} announce that this year's award for best new teacher goes to Ms Chen from the science department.",
    "cn": "我們很榮幸地宣布，今年最佳新教師獎授予科學部門的陳老師。"
  },
  {
    "word": "delightful",
    "pos": "adj.",
    "cn_def": "令人愉快的、討人喜歡的",
    "en_def": "causing a huge wave of pleasure; highly charming.",
    "sentence": "The children put on a truly {{BLANK}} performance at the year-end concert that brought smiles to every parent in the audience.",
    "cn": "孩子們在年終音樂會上呈現了一場真正令人愉快的表演，讓觀眾席上的每位家長都面帶笑容。"
  },
  {
    "word": "delight",
    "pos": "v.",
    "cn_def": "欣喜、使高興",
    "en_def": "a source of joy or to give massive amusement to peers.",
    "sentence": "Watching the puppies play together was a pure {{BLANK}}, and everyone who saw them immediately felt happier and more relaxed.",
    "cn": "看著小狗們一起玩耍是純粹的欣喜，每個看到牠們的人都立刻感到更快樂、更放鬆。"
  },
  {
    "word": "approach",
    "pos": "v.",
    "cn_def": "接近、靠近",
    "en_def": "to move closer to a place, time, or numerical metric.",
    "sentence": "As the exam date began to {{BLANK}}, she increased her daily study time and started reviewing all her notes from the year.",
    "cn": "隨著考試日期的臨近，她增加了每日學習時間，並開始複習一整年的所有筆記。"
  },
  {
    "word": "approach",
    "pos": "n.",
    "cn_def": "方法、途徑",
    "en_def": "a specific method or way of handling a complex problem.",
    "sentence": "The teacher used a very creative {{BLANK}} to explain grammar rules, making the lessons fun and easy to remember.",
    "cn": "老師用一種非常有創意的方法來解釋語法規則，讓課程變得有趣且容易記憶。"
  },
  {
    "word": "approachable",
    "pos": "adj.",
    "cn_def": "親切的、易接近的",
    "en_def": "friendly and incredibly easy to talk to in person.",
    "sentence": "The new headmaster is very {{BLANK}}, and students feel comfortable going to his office whenever they need guidance.",
    "cn": "新校長非常親切易接近，學生們在需要指導時很自在地去他的辦公室。"
  },
  {
    "word": "symbol",
    "pos": "n.",
    "cn_def": "象徵、符號",
    "en_def": "a visual shape or sign that represents an idea concept.",
    "sentence": "The red cross is an internationally recognised {{BLANK}} of medical aid and emergency assistance across the world.",
    "cn": "紅十字是全球公認的醫療援助和緊急救助象徵。"
  },
  {
    "word": "symbolic",
    "pos": "adj.",
    "cn_def": "象徵性的",
    "en_def": "serving as an expression or sign of an invisible value.",
    "sentence": "Planting a tree together at the start of the school year has become a {{BLANK}} gesture representing growth and learning.",
    "cn": "在學年開始時一起種樹已成為一種象徵成長與學習的象徵性姿態。"
  },
  {
    "word": "symbolize",
    "pos": "v.",
    "cn_def": "象徵",
    "en_def": "to stand as a clear baseline indicator for an aura theme.",
    "sentence": "The white flag has long been used to {{BLANK}} surrender or a request for a ceasefire on the battlefield.",
    "cn": "白旗長期以來被用來象徵在戰場上的投降或停火請求。"
  },
  {
    "word": "plentiful",
    "pos": "adj.",
    "cn_def": "豐富的、充足的",
    "en_def": "existing in very large amounts; more than enough.",
    "sentence": "Food was {{BLANK}} at the harvest festival, with long tables covered in freshly grown vegetables, fruits, and homemade dishes.",
    "cn": "豐收節的食物非常豐富，長桌上擺滿了新鮮種植的蔬菜、水果和自製菜餚。"
  },
  {
    "word": "plenty",
    "pos": "n.",
    "cn_def": "豐富、充足、大量",
    "en_def": "a massive count of units ensuring zero scarcity flaws.",
    "sentence": "There is {{BLANK}} of time before the deadline, so take a short break and come back to the assignment feeling refreshed.",
    "cn": "截止日期前還有大量時間，所以休息一下，精神煥發地回來繼續完成作業。"
  },
  {
    "word": "historical",
    "pos": "adj.",
    "cn_def": "歷史的、史學的",
    "en_def": "connected with studying or recording human past eras.",
    "sentence": "The {{BLANK}} records found in the archive provided new evidence that changed how scholars understood the ancient trade route.",
    "cn": "在檔案館中發現的歷史記錄提供了新的證據，改變了學者對古代貿易路線的理解。"
  },
  {
    "word": "historical novel",
    "pos": "phr.",
    "cn_def": "歷史小說",
    "en_def": "a fictional book built directly over real past timelines.",
    "sentence": "She spent two years researching before writing the {{BLANK}}, ensuring every detail about the era was accurate.",
    "cn": "她在寫這部歷史小說之前花了兩年時間進行研究，確保每個關於那個時代的細節都是準確的。"
  },
  {
    "word": "historic",
    "pos": "adj.",
    "cn_def": "具歷史意義的、著名的",
    "en_def": "highly important or famous in human history records.",
    "sentence": "The signing of the peace agreement was a truly {{BLANK}} moment that brought an end to decades of conflict in the region.",
    "cn": "和平協議的簽署是一個真正具有歷史意義的時刻，結束了該地區數十年的衝突。"
  },
  {
    "word": "female",
    "pos": "adj.",
    "cn_def": "女性的、雌性的",
    "en_def": "relating to the sex that can lay eggs or give birth.",
    "sentence": "The wildlife researcher studied the behaviour of {{BLANK}} lions and found that they do most of the hunting for the pride.",
    "cn": "野生動物研究員研究了雌獅的行為，發現牠們為獅群完成了大部分的狩獵工作。"
  },
  {
    "word": "females",
    "pos": "n.",
    "cn_def": "女性、雌性動植物",
    "en_def": "a female person, animal, or wild plant organism unit.",
    "sentence": "The study found that {{BLANK}} in the programme were significantly more likely to complete their degree within four years.",
    "cn": "研究發現，參與該計劃的女性在四年內完成學位的可能性顯著更高。"
  },
  {
    "word": "male",
    "pos": "adj.",
    "cn_def": "男性的、雄性的",
    "en_def": "relating to the sex that fertilizes eggs outputs.",
    "sentence": "The {{BLANK}} penguin takes turns with his partner to keep the egg warm during the bitterly cold Antarctic winter months.",
    "cn": "雄企鵝在嚴寒的南極冬季與伴侶輪流保持蛋的溫暖。"
  },
  {
    "word": "dive",
    "pos": "v.",
    "cn_def": "跳水、潛水、俯衝",
    "en_def": "to jump headfirst into deep water channels.",
    "sentence": "The young swimmer learned to {{BLANK}} from the three-metre board after weeks of practice with her coach at the pool.",
    "cn": "這位年輕游泳選手在教練的指導下經過數週練習，學會了從三公尺跳板跳水。"
  },
  {
    "word": "scuba dive",
    "pos": "phr.",
    "cn_def": "水肺潛水",
    "en_def": "exploring deep ocean zones using oxygen gas packs.",
    "sentence": "They decided to {{BLANK}} in the coral reef area to see the colourful fish and marine life up close.",
    "cn": "他們決定在珊瑚礁區域水肺潛水，近距離觀看色彩繽紛的魚類和海洋生物。"
  },
  {
    "word": "Scuba diving",
    "pos": "n.",
    "cn_def": "水肺潛水（名詞）",
    "en_def": "the active leisure sport of underwater traversal.",
    "sentence": "{{BLANK}} is a popular activity in southern Taiwan, where the warm clear water is home to beautiful coral reefs.",
    "cn": "水肺潛水在台灣南部是一項受歡迎的活動，那裡溫暖清澈的海水是美麗珊瑚礁的家園。"
  },
  {
    "word": "freezing",
    "pos": "adj.",
    "cn_def": "極冷的、冰凍的",
    "en_def": "extremely cold; at or below the temperature water turns to ice.",
    "sentence": "The mountain summit was absolutely {{BLANK}} when they reached it, and they immediately put on every layer of clothing they had.",
    "cn": "當他們到達山頂時，天氣極度寒冷，他們立刻穿上了所有帶來的衣物。"
  },
  {
    "word": "freeze",
    "pos": "v.",
    "cn_def": "結冰、冷凍、凍結",
    "en_def": "to turn into ice via extreme exposure to cold winds.",
    "sentence": "The pond began to {{BLANK}} overnight as temperatures dropped well below zero, and children could skate on it by morning.",
    "cn": "隨著氣溫大幅降至零度以下，池塘在一夜之間開始結冰，到早上孩子們就能在上面溜冰了。"
  },
  {
    "word": "frozen food",
    "pos": "phr.",
    "cn_def": "冷凍食品",
    "en_def": "factory meals kept solid inside cold room racks.",
    "sentence": "She keeps a stock of {{BLANK}} in the freezer for busy weeknights when there is no time to cook from scratch.",
    "cn": "她在冰箱裡存放了一些冷凍食品，供繁忙的工作日晚上沒有時間從頭烹飪時使用。"
  },
  {
    "word": "similar",
    "pos": "adj.",
    "cn_def": "相似的、類似的",
    "en_def": "sharing matching features but not completely identical.",
    "sentence": "The twins have very {{BLANK}} personalities, but one enjoys outdoor sports while the other prefers reading indoors.",
    "cn": "這對雙胞胎有非常相似的個性，但一個喜歡戶外運動，而另一個更喜歡在室內閱讀。"
  },
  {
    "word": "similarity",
    "pos": "n.",
    "cn_def": "相似處",
    "en_def": "a specific matching point shared between distinct items.",
    "sentence": "Despite growing up in different countries, the two friends discovered a surprising {{BLANK}} in their childhood experiences.",
    "cn": "儘管在不同國家長大，這兩位朋友發現了他們童年經歷中令人驚訝的相似之處。"
  },
  {
    "word": "difference",
    "pos": "n.",
    "cn_def": "相異之處、差別",
    "en_def": "a point or way in which entities are not identical.",
    "sentence": "The {{BLANK}} between the two paintings is subtle — you have to look very closely at the brushwork to notice it.",
    "cn": "這兩幅畫之間的差別很微妙——你必須非常仔細地觀察筆觸才能注意到。"
  },
  {
    "word": "make a difference",
    "pos": "phr.",
    "cn_def": "產生影響、改善局勢",
    "en_def": "to cause an impactful change on a status line tracker.",
    "sentence": "Even donating just a small amount of money to a food bank can {{BLANK}} to a family struggling to eat.",
    "cn": "即使只向食物銀行捐贈少量金錢，也能對掙扎溫飽的家庭產生影響。"
  }
];

const MCQS = [
  {
    "q": "Her ______ for science was obvious from the way she asked questions and stayed after class to do extra experiments.",
    "options": [
      "enthusiasm",
      "honor",
      "misfortune",
      "representative"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The crowd was incredibly ______ during the concert, singing along to every song and cheering after each performance.",
    "options": [
      "male",
      "approachable",
      "enthusiastic",
      "unique"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "It is a family ______ to gather at the grandparents' house every Lunar New Year and share a big meal together.",
    "options": [
      "representation",
      "tradition",
      "Whoever",
      "difference"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The museum displayed ______ costumes from different Aboriginal tribes, each with its own unique patterns and colours.",
    "options": [
      "promising",
      "plentiful",
      "fortunate",
      "traditional"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Every snowflake has a ______ pattern, meaning no two snowflakes in the world are ever exactly the same shape.",
    "options": [
      "plentiful",
      "honorable",
      "unique",
      "single"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The community gathered to ______ the retiring teacher with a special ceremony and a heartfelt thank-you card from students.",
    "options": [
      "symbolize",
      "honor",
      "freeze",
      "approach"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "It is a great ______ to be selected as the student representative to speak at the school's graduation ceremony.",
    "options": [
      "honor",
      "Whoever",
      "wealth",
      "whomever"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "A new park was named ______ the scientist who discovered the cure that saved millions of lives worldwide.",
    "options": [
      "make a fortune by",
      "not a single",
      "frozen food",
      "in honor of"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The soldier was praised for his ______ conduct during the mission and was awarded a medal for exceptional bravery.",
    "options": [
      "honorable",
      "freezing",
      "unfortunate",
      "fortunate"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "It was his ______ to be in the right place at the right time when the famous director was looking for a young actor.",
    "options": [
      "whichever",
      "whomever",
      "representation",
      "fortune"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "She invested her savings wisely and managed to build a small ______ over thirty years by living modestly and saving regularly.",
    "options": [
      "Whatever",
      "fortune",
      "approach",
      "wealth"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "He managed to ______ selling handmade furniture online during the pandemic when demand suddenly increased.",
    "options": [
      "in honor of",
      "make a difference",
      "make a fortune by",
      "are delighted to"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Despite facing great ______ in his early life, he never lost his optimism and eventually built a very successful career.",
    "options": [
      "reward",
      "misfortune",
      "whomever",
      "wealth"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "We were very ______ that the typhoon changed direction at the last moment and did not cause serious damage to the city.",
    "options": [
      "approachable",
      "male",
      "single",
      "fortunate"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "It was very ______ that the main speaker fell ill the night before the conference and was unable to attend at all.",
    "options": [
      "similar",
      "symbolic",
      "unfortunate",
      "enthusiastic"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "She read every ______ page of the contract carefully before signing it to make sure she understood all the terms.",
    "options": [
      "single",
      "delightful",
      "male",
      "historical"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "After the storm, ______ tree in the orchard was left standing — the wind had knocked them all down overnight.",
    "options": [
      "keep a promise",
      "frozen food",
      "make a fortune by",
      "not a single"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "She was chosen to ______ her school at the national debate competition and worked hard to prepare her arguments.",
    "options": [
      "dive",
      "freeze",
      "represent",
      "honor"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The dove has long been used to ______ peace, and it appears on flags, artwork, and monuments around the world.",
    "options": [
      "represent",
      "honor",
      "promised",
      "freeze"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Many people feel that women's ______ in leadership roles has improved significantly over the past twenty years.",
    "options": [
      "whomever",
      "representation",
      "wealth",
      "promise"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "A ______ from the student council attended the school board meeting to share feedback about the new lunch menu.",
    "options": [
      "symbol",
      "representation",
      "wealth",
      "representative"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The country's natural ______ includes vast forests, mineral deposits, and fertile farmland that support millions of people.",
    "options": [
      "tradition",
      "representation",
      "wealth",
      "approach"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Even though his family was not ______, he received a full scholarship and was able to attend one of the top universities.",
    "options": [
      "wealthy",
      "single",
      "honorable",
      "unique"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "______ finishes the assignment first can use the remaining class time to read freely or work on their own projects.",
    "options": [
      "wealth",
      "Whoever",
      "enthusiasm",
      "honor"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The manager said she would give the promotion to ______ demonstrated the most initiative and dedication over the year.",
    "options": [
      "wealth",
      "Whoever",
      "representative",
      "whomever"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "______ decision you make, make sure you have thought it through carefully and considered all the possible consequences.",
    "options": [
      "whichever",
      "Whatever",
      "Scuba diving",
      "tradition"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "You can order ______ dish you like from the menu, as tonight's dinner is being paid for by the company.",
    "options": [
      "difference",
      "females",
      "whichever",
      "reward"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The company offered a generous ______ to anyone who could provide useful information leading to the recovery of the stolen data.",
    "options": [
      "reward",
      "wealth",
      "difference",
      "Whatever"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The school ______ students who showed consistent improvement with a special certificate at the end of each term.",
    "options": [
      "promised",
      "approach",
      "honor",
      "rewarded"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The manager decided to ______ a full day off and a catered lunch together.",
    "options": [
      "not a single",
      "full of promise",
      "reward with",
      "frozen food"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "She kept her ______ to her younger brother and attended every one of his football matches throughout the entire season.",
    "options": [
      "similarity",
      "promise",
      "Whoever",
      "plenty"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The young musician showed great ______ at such an early age that she was offered a place in the national youth orchestra.",
    "options": [
      "promise",
      "enthusiasm",
      "Scuba diving",
      "whichever"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "He ______ to help his classmate prepare for the exam and spent every evening that week reviewing difficult topics together.",
    "options": [
      "freeze",
      "dive",
      "delight",
      "promised"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "It is important to only make commitments you can realistically fulfil, because failing to ______ damages trust.",
    "options": [
      "scuba dive",
      "keep a promise",
      "in honor of",
      "historical novel"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "The young athlete is ______ and coaches believe she could become a world champion within the next five years.",
    "options": [
      "are delighted to",
      "scuba dive",
      "full of promise",
      "keep a promise"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "The research results are very ______ and suggest that the new vaccine could be ready for clinical trials by next year.",
    "options": [
      "promising",
      "historic",
      "delighted",
      "approachable"
    ],
    "answer": 0,
    "vocabIndex": 35
  },
  {
    "q": "She was absolutely ______ when she found out she had passed all her exams with top marks and would receive a scholarship.",
    "options": [
      "plentiful",
      "single",
      "delighted",
      "similar"
    ],
    "answer": 2,
    "vocabIndex": 36
  },
  {
    "q": "We ______ announce that this year's award for best new teacher goes to Ms Chen from the science department.",
    "options": [
      "make a difference",
      "are delighted to",
      "scuba dive",
      "reward with"
    ],
    "answer": 1,
    "vocabIndex": 37
  },
  {
    "q": "The children put on a truly ______ performance at the year-end concert that brought smiles to every parent in the audience.",
    "options": [
      "delightful",
      "delighted",
      "similar",
      "traditional"
    ],
    "answer": 0,
    "vocabIndex": 38
  },
  {
    "q": "Watching the puppies play together was a pure ______, and everyone who saw them immediately felt happier and more relaxed.",
    "options": [
      "symbolize",
      "promised",
      "rewarded",
      "delight"
    ],
    "answer": 3,
    "vocabIndex": 39
  },
  {
    "q": "As the exam date began to ______, she increased her daily study time and started reviewing all her notes from the year.",
    "options": [
      "freeze",
      "approach",
      "honor",
      "dive"
    ],
    "answer": 1,
    "vocabIndex": 40
  },
  {
    "q": "The teacher used a very creative ______ to explain grammar rules, making the lessons fun and easy to remember.",
    "options": [
      "whichever",
      "representation",
      "approach",
      "promise"
    ],
    "answer": 2,
    "vocabIndex": 41
  },
  {
    "q": "The new headmaster is very ______, and students feel comfortable going to his office whenever they need guidance.",
    "options": [
      "approachable",
      "unfortunate",
      "fortunate",
      "honorable"
    ],
    "answer": 0,
    "vocabIndex": 42
  },
  {
    "q": "The red cross is an internationally recognised ______ of medical aid and emergency assistance across the world.",
    "options": [
      "tradition",
      "representation",
      "whomever",
      "symbol"
    ],
    "answer": 3,
    "vocabIndex": 43
  },
  {
    "q": "Planting a tree together at the start of the school year has become a ______ gesture representing growth and learning.",
    "options": [
      "symbolic",
      "promising",
      "male",
      "fortunate"
    ],
    "answer": 0,
    "vocabIndex": 44
  },
  {
    "q": "The white flag has long been used to ______ surrender or a request for a ceasefire on the battlefield.",
    "options": [
      "rewarded",
      "freeze",
      "delight",
      "symbolize"
    ],
    "answer": 3,
    "vocabIndex": 45
  },
  {
    "q": "Food was ______ at the harvest festival, with long tables covered in freshly grown vegetables, fruits, and homemade dishes.",
    "options": [
      "traditional",
      "freezing",
      "plentiful",
      "similar"
    ],
    "answer": 2,
    "vocabIndex": 46
  },
  {
    "q": "There is ______ of time before the deadline, so take a short break and come back to the assignment feeling refreshed.",
    "options": [
      "wealth",
      "plenty",
      "difference",
      "fortune"
    ],
    "answer": 1,
    "vocabIndex": 47
  },
  {
    "q": "The ______ records found in the archive provided new evidence that changed how scholars understood the ancient trade route.",
    "options": [
      "honorable",
      "approachable",
      "unique",
      "historical"
    ],
    "answer": 3,
    "vocabIndex": 48
  },
  {
    "q": "She spent two years researching before writing the ______, ensuring every detail about the era was accurate.",
    "options": [
      "in honor of",
      "historical novel",
      "full of promise",
      "keep a promise"
    ],
    "answer": 1,
    "vocabIndex": 49
  },
  {
    "q": "The signing of the peace agreement was a truly ______ moment that brought an end to decades of conflict in the region.",
    "options": [
      "unique",
      "historical",
      "historic",
      "enthusiastic"
    ],
    "answer": 2,
    "vocabIndex": 50
  },
  {
    "q": "The wildlife researcher studied the behaviour of ______ lions and found that they do most of the hunting for the pride.",
    "options": [
      "female",
      "symbolic",
      "historical",
      "enthusiastic"
    ],
    "answer": 0,
    "vocabIndex": 51
  },
  {
    "q": "The study found that ______ in the programme were significantly more likely to complete their degree within four years.",
    "options": [
      "promise",
      "females",
      "honor",
      "whomever"
    ],
    "answer": 1,
    "vocabIndex": 52
  },
  {
    "q": "The ______ penguin takes turns with his partner to keep the egg warm during the bitterly cold Antarctic winter months.",
    "options": [
      "approachable",
      "female",
      "unique",
      "male"
    ],
    "answer": 3,
    "vocabIndex": 53
  },
  {
    "q": "The young swimmer learned to ______ from the three-metre board after weeks of practice with her coach at the pool.",
    "options": [
      "dive",
      "delight",
      "honor",
      "approach"
    ],
    "answer": 0,
    "vocabIndex": 54
  },
  {
    "q": "They decided to ______ in the coral reef area to see the colourful fish and marine life up close.",
    "options": [
      "keep a promise",
      "frozen food",
      "scuba dive",
      "make a fortune by"
    ],
    "answer": 2,
    "vocabIndex": 55
  },
  {
    "q": "______ is a popular activity in southern Taiwan, where the warm clear water is home to beautiful coral reefs.",
    "options": [
      "difference",
      "Scuba diving",
      "honor",
      "plenty"
    ],
    "answer": 1,
    "vocabIndex": 56
  },
  {
    "q": "The mountain summit was absolutely ______ when they reached it, and they immediately put on every layer of clothing they had.",
    "options": [
      "delightful",
      "delighted",
      "unique",
      "freezing"
    ],
    "answer": 3,
    "vocabIndex": 57
  },
  {
    "q": "The pond began to ______ overnight as temperatures dropped well below zero, and children could skate on it by morning.",
    "options": [
      "freeze",
      "rewarded",
      "delight",
      "dive"
    ],
    "answer": 0,
    "vocabIndex": 58
  },
  {
    "q": "She keeps a stock of ______ in the freezer for busy weeknights when there is no time to cook from scratch.",
    "options": [
      "historical novel",
      "scuba dive",
      "frozen food",
      "make a difference"
    ],
    "answer": 2,
    "vocabIndex": 59
  },
  {
    "q": "The twins have very ______ personalities, but one enjoys outdoor sports while the other prefers reading indoors.",
    "options": [
      "female",
      "symbolic",
      "male",
      "similar"
    ],
    "answer": 3,
    "vocabIndex": 60
  },
  {
    "q": "Despite growing up in different countries, the two friends discovered a surprising ______ in their childhood experiences.",
    "options": [
      "similarity",
      "females",
      "symbol",
      "promise"
    ],
    "answer": 0,
    "vocabIndex": 61
  },
  {
    "q": "The ______ between the two paintings is subtle — you have to look very closely at the brushwork to notice it.",
    "options": [
      "symbol",
      "difference",
      "whomever",
      "enthusiasm"
    ],
    "answer": 1,
    "vocabIndex": 62
  },
  {
    "q": "Even donating just a small amount of money to a food bank can ______ to a family struggling to eat.",
    "options": [
      "in honor of",
      "keep a promise",
      "make a difference",
      "reward with"
    ],
    "answer": 2,
    "vocabIndex": 63
  }
];

const LOOKUP = {
  "enthusiasm": {
    "pos": "n.",
    "en_def": "a feeling of energetic interest or excitement for a task.",
    "cn_def": "熱情、熱忱",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling of energetic interest or excitement for a task.",
        "cn_def": "熱情、熱忱"
      }
    ]
  },
  "enthusiastic": {
    "pos": "adj.",
    "en_def": "showing high excitement or eager interest in an event.",
    "cn_def": "熱情的、熱心的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing high excitement or eager interest in an event.",
        "cn_def": "熱情的、熱心的"
      }
    ]
  },
  "tradition": {
    "pos": "n.",
    "en_def": "a custom or belief passed down across generations.",
    "cn_def": "傳統",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a custom or belief passed down across generations.",
        "cn_def": "傳統"
      }
    ]
  },
  "traditional": {
    "pos": "adj.",
    "en_def": "tracking old family baseline customs rather than new styles.",
    "cn_def": "傳統的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "tracking old family baseline customs rather than new styles.",
        "cn_def": "傳統的"
      }
    ]
  },
  "unique": {
    "pos": "adj.",
    "en_def": "being the only one of its kind; highly unusual special.",
    "cn_def": "獨一無二的、獨特的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "being the only one of its kind; highly unusual special.",
        "cn_def": "獨一無二的、獨特的"
      }
    ]
  },
  "honor": {
    "pos": "v.",
    "en_def": "to show immense public respect or reward an expert.",
    "cn_def": "向…致敬、給予榮譽",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to show immense public respect or reward an expert.",
        "cn_def": "向…致敬、給予榮譽"
      },
      {
        "pos": "n.",
        "en_def": "high respect, reputation, or an award token entry.",
        "cn_def": "榮譽、光榮、誠實"
      }
    ]
  },
  "in honor of": {
    "pos": "phr.",
    "en_def": "dedicated directly to reward a historic pioneer agent.",
    "cn_def": "為了紀念…、向…致敬",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "dedicated directly to reward a historic pioneer agent.",
        "cn_def": "為了紀念…、向…致敬"
      }
    ]
  },
  "honorable": {
    "pos": "adj.",
    "en_def": "tracking high moral standards; worthy of respect.",
    "cn_def": "可敬的、高尚的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "tracking high moral standards; worthy of respect.",
        "cn_def": "可敬的、高尚的"
      }
    ]
  },
  "fortune": {
    "pos": "n.",
    "en_def": "random chance or good luck impacting an individual.",
    "cn_def": "運氣、機運",
    "combined": [
      {
        "pos": "n.",
        "en_def": "random chance or good luck impacting an individual.",
        "cn_def": "運氣、機運"
      },
      {
        "pos": "n.",
        "en_def": "a massive bundle of money, gold, or property assets.",
        "cn_def": "大筆財富"
      }
    ]
  },
  "make a fortune by": {
    "pos": "phr.",
    "en_def": "to successfully pile up millions via unique trade lines.",
    "cn_def": "靠…發大財",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to successfully pile up millions via unique trade lines.",
        "cn_def": "靠…發大財"
      }
    ]
  },
  "misfortune": {
    "pos": "n.",
    "en_def": "a streak of terrible events or bad luck accidents.",
    "cn_def": "不幸、厄運",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a streak of terrible events or bad luck accidents.",
        "cn_def": "不幸、厄運"
      }
    ]
  },
  "fortunate": {
    "pos": "adj.",
    "en_def": "lucky; tracking exceptional baseline outcomes.",
    "cn_def": "幸運的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "lucky; tracking exceptional baseline outcomes.",
        "cn_def": "幸運的"
      }
    ]
  },
  "unfortunate": {
    "pos": "adj.",
    "en_def": "unlucky; hit by unexpected operational failures.",
    "cn_def": "不幸的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "unlucky; hit by unexpected operational failures.",
        "cn_def": "不幸的"
      }
    ]
  },
  "single": {
    "pos": "adj.",
    "en_def": "only one; separate; not married or combined.",
    "cn_def": "單一的、單身的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "only one; separate; not married or combined.",
        "cn_def": "單一的、單身的"
      }
    ]
  },
  "not a single": {
    "pos": "phr.",
    "en_def": "absolutely zero units matching a specific description.",
    "cn_def": "連一個也（沒有）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "absolutely zero units matching a specific description.",
        "cn_def": "連一個也（沒有）"
      }
    ]
  },
  "represent": {
    "pos": "v.",
    "en_def": "to speak or act officially on behalf of a team.",
    "cn_def": "代表、代理",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to speak or act officially on behalf of a team.",
        "cn_def": "代表、代理"
      },
      {
        "pos": "v.",
        "en_def": "to stand as a clear graphical sign or symbol for a concept.",
        "cn_def": "象徵、表示"
      }
    ]
  },
  "representation": {
    "pos": "n.",
    "en_def": "the act of standing in for a major public body.",
    "cn_def": "代表、表現、描繪",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of standing in for a major public body.",
        "cn_def": "代表、表現、描繪"
      }
    ]
  },
  "representative": {
    "pos": "n.",
    "en_def": "an agent picked to state opinions for a corporate base.",
    "cn_def": "代表、代理人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an agent picked to state opinions for a corporate base.",
        "cn_def": "代表、代理人"
      }
    ]
  },
  "wealth": {
    "pos": "n.",
    "en_def": "a large amount of money, land, or valuable goods.",
    "cn_def": "財富、富有",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large amount of money, land, or valuable goods.",
        "cn_def": "財富、富有"
      }
    ]
  },
  "wealthy": {
    "pos": "adj.",
    "en_def": "rich; holding deep capital reserves and assets.",
    "cn_def": "富裕的、有錢的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "rich; holding deep capital reserves and assets.",
        "cn_def": "富裕的、有錢的"
      }
    ]
  },
  "whoever": {
    "pos": "n.",
    "en_def": "any person who; no matter who performs the task.",
    "cn_def": "無論誰、任何人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "any person who; no matter who performs the task.",
        "cn_def": "無論誰、任何人"
      }
    ]
  },
  "whomever": {
    "pos": "n.",
    "en_def": "any person who receives an action (object role).",
    "cn_def": "無論誰（受格）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "any person who receives an action (object role).",
        "cn_def": "無論誰（受格）"
      }
    ]
  },
  "whatever": {
    "pos": "n.",
    "en_def": "anything or everything that plays out in a zone.",
    "cn_def": "無論什麼",
    "combined": [
      {
        "pos": "n.",
        "en_def": "anything or everything that plays out in a zone.",
        "cn_def": "無論什麼"
      }
    ]
  },
  "whichever": {
    "pos": "n.",
    "en_def": "picking any unit cleanly out of a narrow set group.",
    "cn_def": "無論哪個",
    "combined": [
      {
        "pos": "n.",
        "en_def": "picking any unit cleanly out of a narrow set group.",
        "cn_def": "無論哪個"
      }
    ]
  },
  "reward": {
    "pos": "n.",
    "en_def": "an item or cash given to thank someone for good work.",
    "cn_def": "報酬、獎賞",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an item or cash given to thank someone for good work.",
        "cn_def": "報酬、獎賞"
      },
      {
        "pos": "v.",
        "en_def": "to give someone a token to thank them for help tasks.",
        "cn_def": "獎賞、回報"
      }
    ]
  },
  "rewarded": {
    "pos": "v.",
    "en_def": "to give someone a token to thank them for help tasks.",
    "cn_def": "獎賞、回報",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give someone a token to thank them for help tasks.",
        "cn_def": "獎賞、回報"
      }
    ]
  },
  "reward with": {
    "pos": "phr.",
    "en_def": "gifting an explicit asset item to praise top metrics.",
    "cn_def": "用…來獎勵",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "gifting an explicit asset item to praise top metrics.",
        "cn_def": "用…來獎勵"
      }
    ]
  },
  "promise": {
    "pos": "n.",
    "en_def": "an explicit statement that you will definitely do a task.",
    "cn_def": "承諾、諾言",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an explicit statement that you will definitely do a task.",
        "cn_def": "承諾、諾言"
      },
      {
        "pos": "n.",
        "en_def": "a clear sign of future success or high talent traits.",
        "cn_def": "（前途）希望、潛力"
      },
      {
        "pos": "v.",
        "en_def": "to state firmly that you will deliver an item target.",
        "cn_def": "答應、承諾"
      }
    ]
  },
  "promised": {
    "pos": "v.",
    "en_def": "to state firmly that you will deliver an item target.",
    "cn_def": "答應、承諾",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to state firmly that you will deliver an item target.",
        "cn_def": "答應、承諾"
      }
    ]
  },
  "keep a promise": {
    "pos": "phr.",
    "en_def": "executing a duty exactly as stated across old talks.",
    "cn_def": "守信、履行諾言",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "executing a duty exactly as stated across old talks.",
        "cn_def": "守信、履行諾言"
      }
    ]
  },
  "full of promise": {
    "pos": "phr.",
    "en_def": "showcasing exceptional baseline potential to win fields.",
    "cn_def": "很有前途的、大有可為的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "showcasing exceptional baseline potential to win fields.",
        "cn_def": "很有前途的、大有可為的"
      }
    ]
  },
  "promising": {
    "pos": "adj.",
    "en_def": "showing signs of future success or fine performance.",
    "cn_def": "有前途的、有希望的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing signs of future success or fine performance.",
        "cn_def": "有前途的、有希望的"
      }
    ]
  },
  "delighted": {
    "pos": "adj.",
    "en_def": "incredibly happy and pleased about an outcome event.",
    "cn_def": "感到高興的、滿心歡喜的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "incredibly happy and pleased about an outcome event.",
        "cn_def": "感到高興的、滿心歡喜的"
      }
    ]
  },
  "are delighted to": {
    "pos": "phr.",
    "en_def": "happily welcoming an opportunity to complete an action.",
    "cn_def": "很榮幸去…、很高興去…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "happily welcoming an opportunity to complete an action.",
        "cn_def": "很榮幸去…、很高興去…"
      }
    ]
  },
  "be delighted to": {
    "pos": "phr.",
    "en_def": "happily welcoming an opportunity to complete an action.",
    "cn_def": "很榮幸去…、很高興去…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "happily welcoming an opportunity to complete an action.",
        "cn_def": "很榮幸去…、很高興去…"
      }
    ]
  },
  "delightful": {
    "pos": "adj.",
    "en_def": "causing a huge wave of pleasure; highly charming.",
    "cn_def": "令人愉快的、討人喜歡的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing a huge wave of pleasure; highly charming.",
        "cn_def": "令人愉快的、討人喜歡的"
      }
    ]
  },
  "delight": {
    "pos": "v.",
    "en_def": "a source of joy or to give massive amusement to peers.",
    "cn_def": "欣喜、使高興",
    "combined": [
      {
        "pos": "v.",
        "en_def": "a source of joy or to give massive amusement to peers.",
        "cn_def": "欣喜、使高興"
      }
    ]
  },
  "approach": {
    "pos": "v.",
    "en_def": "to move closer to a place, time, or numerical metric.",
    "cn_def": "接近、靠近",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to move closer to a place, time, or numerical metric.",
        "cn_def": "接近、靠近"
      },
      {
        "pos": "n.",
        "en_def": "a specific method or way of handling a complex problem.",
        "cn_def": "方法、途徑"
      }
    ]
  },
  "approachable": {
    "pos": "adj.",
    "en_def": "friendly and incredibly easy to talk to in person.",
    "cn_def": "親切的、易接近的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "friendly and incredibly easy to talk to in person.",
        "cn_def": "親切的、易接近的"
      }
    ]
  },
  "symbol": {
    "pos": "n.",
    "en_def": "a visual shape or sign that represents an idea concept.",
    "cn_def": "象徵、符號",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a visual shape or sign that represents an idea concept.",
        "cn_def": "象徵、符號"
      }
    ]
  },
  "symbolic": {
    "pos": "adj.",
    "en_def": "serving as an expression or sign of an invisible value.",
    "cn_def": "象徵性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "serving as an expression or sign of an invisible value.",
        "cn_def": "象徵性的"
      }
    ]
  },
  "symbolize": {
    "pos": "v.",
    "en_def": "to stand as a clear baseline indicator for an aura theme.",
    "cn_def": "象徵",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to stand as a clear baseline indicator for an aura theme.",
        "cn_def": "象徵"
      }
    ]
  },
  "plentiful": {
    "pos": "adj.",
    "en_def": "existing in very large amounts; more than enough.",
    "cn_def": "豐富的、充足的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "existing in very large amounts; more than enough.",
        "cn_def": "豐富的、充足的"
      }
    ]
  },
  "plenty": {
    "pos": "n.",
    "en_def": "a massive count of units ensuring zero scarcity flaws.",
    "cn_def": "豐富、充足、大量",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a massive count of units ensuring zero scarcity flaws.",
        "cn_def": "豐富、充足、大量"
      }
    ]
  },
  "historical": {
    "pos": "adj.",
    "en_def": "connected with studying or recording human past eras.",
    "cn_def": "歷史的、史學的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "connected with studying or recording human past eras.",
        "cn_def": "歷史的、史學的"
      }
    ]
  },
  "historical novel": {
    "pos": "phr.",
    "en_def": "a fictional book built directly over real past timelines.",
    "cn_def": "歷史小說",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a fictional book built directly over real past timelines.",
        "cn_def": "歷史小說"
      }
    ]
  },
  "historic": {
    "pos": "adj.",
    "en_def": "highly important or famous in human history records.",
    "cn_def": "具歷史意義的、著名的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "highly important or famous in human history records.",
        "cn_def": "具歷史意義的、著名的"
      }
    ]
  },
  "female": {
    "pos": "adj.",
    "en_def": "relating to the sex that can lay eggs or give birth.",
    "cn_def": "女性的、雌性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to the sex that can lay eggs or give birth.",
        "cn_def": "女性的、雌性的"
      },
      {
        "pos": "n.",
        "en_def": "a female person, animal, or wild plant organism unit.",
        "cn_def": "女性、雌性動植物"
      }
    ]
  },
  "females": {
    "pos": "n.",
    "en_def": "a female person, animal, or wild plant organism unit.",
    "cn_def": "女性、雌性動植物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a female person, animal, or wild plant organism unit.",
        "cn_def": "女性、雌性動植物"
      }
    ]
  },
  "male": {
    "pos": "adj.",
    "en_def": "relating to the sex that fertilizes eggs outputs.",
    "cn_def": "男性的、雄性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to the sex that fertilizes eggs outputs.",
        "cn_def": "男性的、雄性的"
      }
    ]
  },
  "dive": {
    "pos": "v.",
    "en_def": "to jump headfirst into deep water channels.",
    "cn_def": "跳水、潛水、俯衝",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to jump headfirst into deep water channels.",
        "cn_def": "跳水、潛水、俯衝"
      }
    ]
  },
  "scuba dive": {
    "pos": "phr.",
    "en_def": "exploring deep ocean zones using oxygen gas packs.",
    "cn_def": "水肺潛水",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "exploring deep ocean zones using oxygen gas packs.",
        "cn_def": "水肺潛水"
      }
    ]
  },
  "scuba diving": {
    "pos": "n.",
    "en_def": "the active leisure sport of underwater traversal.",
    "cn_def": "水肺潛水（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the active leisure sport of underwater traversal.",
        "cn_def": "水肺潛水（名詞）"
      }
    ]
  },
  "freezing": {
    "pos": "adj.",
    "en_def": "extremely cold; at or below the temperature water turns to ice.",
    "cn_def": "極冷的、冰凍的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "extremely cold; at or below the temperature water turns to ice.",
        "cn_def": "極冷的、冰凍的"
      }
    ]
  },
  "freeze": {
    "pos": "v.",
    "en_def": "to turn into ice via extreme exposure to cold winds.",
    "cn_def": "結冰、冷凍、凍結",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to turn into ice via extreme exposure to cold winds.",
        "cn_def": "結冰、冷凍、凍結"
      }
    ]
  },
  "frozen food": {
    "pos": "phr.",
    "en_def": "factory meals kept solid inside cold room racks.",
    "cn_def": "冷凍食品",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "factory meals kept solid inside cold room racks.",
        "cn_def": "冷凍食品"
      }
    ]
  },
  "similar": {
    "pos": "adj.",
    "en_def": "sharing matching features but not completely identical.",
    "cn_def": "相似的、類似的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "sharing matching features but not completely identical.",
        "cn_def": "相似的、類似的"
      }
    ]
  },
  "similarity": {
    "pos": "n.",
    "en_def": "a specific matching point shared between distinct items.",
    "cn_def": "相似處",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a specific matching point shared between distinct items.",
        "cn_def": "相似處"
      }
    ]
  },
  "difference": {
    "pos": "n.",
    "en_def": "a point or way in which entities are not identical.",
    "cn_def": "相異之處、差別",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a point or way in which entities are not identical.",
        "cn_def": "相異之處、差別"
      }
    ]
  },
  "make a difference": {
    "pos": "phr.",
    "en_def": "to cause an impactful change on a status line tracker.",
    "cn_def": "產生影響、改善局勢",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to cause an impactful change on a status line tracker.",
        "cn_def": "產生影響、改善局勢"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
