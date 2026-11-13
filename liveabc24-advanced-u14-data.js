// Unit 14 Quiz Data: assure – be guilty of
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Advanced U14 - assure – be guilty of",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "assured",
    "pos": "v.",
    "cn_def": "向…保證、使確信",
    "en_def": "to promise someone that something is definitely true.",
    "sentence": "The doctor {{BLANK}} the patient that the operation was routine and that he would feel much better within a week.",
    "cn": "醫生向病人保證手術是例行性的，他在一週內就會感覺好多了。"
  },
  {
    "word": "assure",
    "pos": "v.",
    "cn_def": "確保、保障",
    "en_def": "to make a positive outcome certain to happen.",
    "sentence": "Hard work and careful planning can {{BLANK}} the success of a project, but unexpected challenges can still arise.",
    "cn": "努力工作和仔細規劃可以確保項目的成功，但意外的挑戰仍然可能出現。"
  },
  {
    "word": "reassure",
    "pos": "v.",
    "cn_def": "使安心、使放心",
    "en_def": "to say words to stop someone from worrying.",
    "sentence": "She called her parents right after landing to {{BLANK}} them that she had arrived safely and that everything was fine.",
    "cn": "她一落地就打電話給父母，讓他們放心她已安全抵達，一切都很好。"
  },
  {
    "word": "assurance",
    "pos": "n.",
    "cn_def": "保證、把握、自信",
    "en_def": "a firm promise or a high state of self confidence.",
    "sentence": "Despite his {{BLANK}} that the report would be ready by Friday, it was not submitted until the following Monday morning.",
    "cn": "儘管他保證報告將在週五前完成，但它直到下週一早上才提交。"
  },
  {
    "word": "assured us that",
    "pos": "phr.",
    "cn_def": "向某人保證…",
    "en_def": "to tell a peer clearly that a task will finish.",
    "sentence": "The manager {{BLANK}} the project would be delivered on time and within the agreed budget.",
    "cn": "經理向團隊保證該項目將按時交付，並在商定的預算範圍內完成。"
  },
  {
    "word": "assure them of",
    "pos": "phr.",
    "cn_def": "讓某人確信某事",
    "en_def": "to make a manager feel fully safe about a trait.",
    "sentence": "She tried to {{BLANK}} her full commitment to the role during the job interview by sharing specific examples.",
    "cn": "她在工作面試中通過分享具體例子，試圖讓面試官確信她對這個職位的完全承諾。"
  },
  {
    "word": "destroyed",
    "pos": "v.",
    "cn_def": "破壞、毀滅",
    "en_def": "to damage something so badly that it cannot be fixed.",
    "sentence": "The fire completely {{BLANK}} three houses on the street before firefighters managed to bring it under control.",
    "cn": "火災完全摧毀了街上的三棟房子，然後消防員才設法將其控制住。"
  },
  {
    "word": "destruction",
    "pos": "n.",
    "cn_def": "破壞、毀滅",
    "en_def": "the act or process of ruining an asset completely.",
    "sentence": "The {{BLANK}} caused by the flood left thousands of families without homes and forced the government to act quickly.",
    "cn": "洪水造成的破壞使數千個家庭無家可歸，迫使政府迅速採取行動。"
  },
  {
    "word": "destructive",
    "pos": "adj.",
    "cn_def": "破壞性的、毀滅性的",
    "en_def": "causing a huge amount of deep damage or harm.",
    "sentence": "The typhoon was one of the most {{BLANK}} storms to hit the island in decades, damaging roads, bridges, and farmland.",
    "cn": "這場颱風是數十年來襲擊這個島嶼最具破壞性的風暴之一，損壞了道路、橋樑和農地。"
  },
  {
    "word": "damaged",
    "pos": "v.",
    "cn_def": "損害、損壞",
    "en_def": "to harm an item; a loss in value or beauty.",
    "sentence": "Heavy rain {{BLANK}} the roof of the school gymnasium, and repairs had to be completed before classes could resume.",
    "cn": "大雨損壞了學校體育館的屋頂，必須在課程恢復之前完成修繕。"
  },
  {
    "word": "ruined",
    "pos": "v.",
    "cn_def": "毀掉、搞砸",
    "en_def": "to completely spoil or destroy a plan or dish.",
    "sentence": "Leaving the milk out of the fridge overnight completely {{BLANK}} it, and she had to throw the whole carton away.",
    "cn": "將牛奶在冰箱外放置一夜完全毀掉了它，她不得不把整個紙盒扔掉。"
  },
  {
    "word": "reliable",
    "pos": "adj.",
    "cn_def": "可靠的、可信賴的",
    "en_def": "able to be trusted to work or behave well.",
    "sentence": "She has always been the most {{BLANK}} member of the team, always meeting deadlines and producing high-quality work.",
    "cn": "她一直是團隊中最可靠的成員，總是按時完成任務並產出高質量的工作。"
  },
  {
    "word": "rely",
    "pos": "v.",
    "cn_def": "依靠、信賴",
    "en_def": "to depend on or trust someone fully.",
    "sentence": "You cannot always {{BLANK}} on others to solve your problems — developing independence is an important life skill.",
    "cn": "你不能總是依靠別人來解決你的問題——培養獨立性是一項重要的生活技能。"
  },
  {
    "word": "rely on",
    "pos": "phr.",
    "cn_def": "依賴…、信任…",
    "en_def": "to place your full success in a peer's hands.",
    "sentence": "Farmers in this region still {{BLANK}} seasonal rainfall to water their crops instead of using irrigation systems.",
    "cn": "這個地區的農民仍然依賴季節性降雨來灌溉他們的農作物，而不是使用灌溉系統。"
  },
  {
    "word": "reliance",
    "pos": "n.",
    "cn_def": "依賴、信任",
    "en_def": "the state of needing or trusting an outside item.",
    "sentence": "The country's heavy {{BLANK}} on imported oil made it very vulnerable when global fuel prices suddenly increased.",
    "cn": "這個國家對進口石油的過度依賴使其在全球燃料價格突然上漲時非常脆弱。"
  },
  {
    "word": "searched",
    "pos": "v.",
    "cn_def": "搜尋、搜查",
    "en_def": "to look carefully across an area to find an item.",
    "sentence": "Police officers {{BLANK}} the entire building for clues after a valuable painting was reported stolen from the gallery.",
    "cn": "在一幅珍貴的畫作被報告從畫廊失竊後，警察搜查了整棟建築尋找線索。"
  },
  {
    "word": "search",
    "pos": "n.",
    "cn_def": "搜尋、搜查",
    "en_def": "an active process of hunting for a missing target.",
    "sentence": "The {{BLANK}} for the missing hiker lasted three days before he was finally found sheltering in a cave on the hillside.",
    "cn": "對失蹤登山者的搜尋持續了三天，最後終於在山坡上的一個洞穴中找到了他。"
  },
  {
    "word": "searched for",
    "pos": "phr.",
    "cn_def": "尋找…",
    "en_def": "to try to find a specific lost tool or person.",
    "sentence": "She {{BLANK}} her glasses for twenty minutes before realising she had left them on top of her own head.",
    "cn": "她尋找眼鏡找了二十分鐘，然後才意識到她把眼鏡放在了自己頭頂上。"
  },
  {
    "word": "searched high and low",
    "pos": "phr.",
    "cn_def": "到處尋找、翻箱倒櫃",
    "en_def": "to look everywhere imaginable for a lost object.",
    "sentence": "He {{BLANK}} for his passport the morning of the flight but could not find it anywhere in the house.",
    "cn": "他在飛行當天早上翻箱倒櫃地尋找護照，但在家裡任何地方都找不到。"
  },
  {
    "word": "in search of",
    "pos": "phr.",
    "cn_def": "尋找…",
    "en_def": "traversing a zone with the goal of finding assets.",
    "sentence": "Thousands of people left their villages {{BLANK}} better opportunities in the rapidly growing capital city.",
    "cn": "數千人離開村莊，前往快速發展的首都尋找更好的機會。"
  },
  {
    "word": "search engine",
    "pos": "n.",
    "cn_def": "搜尋引擎",
    "en_def": "a computer program used to find websites online.",
    "sentence": "She typed the name of the restaurant into the {{BLANK}} and found its menu, reviews, and opening hours instantly.",
    "cn": "她在搜尋引擎中輸入餐廳名稱，立即找到了其菜單、評論和營業時間。"
  },
  {
    "word": "clue",
    "pos": "n.",
    "cn_def": "線索、提示",
    "en_def": "a sign or fact that helps solve a crime puzzle.",
    "sentence": "The detective found a single {{BLANK}} at the scene — a muddy footprint near the back door — that broke the case open.",
    "cn": "偵探在現場發現了一個線索——後門附近的一個泥濘腳印——這打開了案件的突破口。"
  },
  {
    "word": "have no clue",
    "pos": "phr.",
    "cn_def": "毫無頭緒、一無所知",
    "en_def": "to be completely ignorant about an event background.",
    "sentence": "I {{BLANK}} how to fix this error in the code, so I asked my more experienced colleague for help.",
    "cn": "我對如何修復代碼中的這個錯誤毫無頭緒，所以我向更有經驗的同事尋求幫助。"
  },
  {
    "word": "clueless",
    "pos": "adj.",
    "cn_def": "毫無頭緒的、愚蠢的",
    "en_def": "tracking zero knowledge about a current topic task.",
    "sentence": "He felt completely {{BLANK}} during the advanced mathematics lesson, as he had missed the previous week's foundational class.",
    "cn": "他在高等數學課上感到完全毫無頭緒，因為他錯過了上週的基礎課。"
  },
  {
    "word": "obtain",
    "pos": "v.",
    "cn_def": "獲得、贏得、買到",
    "en_def": "to get something after an effort or official request.",
    "sentence": "Students must {{BLANK}} a special permit from the office before they are allowed to use the advanced science laboratory.",
    "cn": "學生必須從辦公室獲得特別許可，才能使用高級科學實驗室。"
  },
  {
    "word": "acquire",
    "pos": "v.",
    "cn_def": "獲得、學得",
    "en_def": "to pick up a local habit or buy a property firm.",
    "sentence": "She managed to {{BLANK}} three new languages during her years of working overseas in Europe and South America.",
    "cn": "她在歐洲和南美洲工作的幾年裡，成功學得了三門新語言。"
  },
  {
    "word": "attain",
    "pos": "v.",
    "cn_def": "達到、實現",
    "en_def": "to reach a high milestone score after years of work.",
    "sentence": "After years of dedicated practice, she finally managed to {{BLANK}} the level of fluency needed to teach English professionally.",
    "cn": "經過多年的專注練習，她終於達到了專業教授英語所需的流利程度。"
  },
  {
    "word": "witness",
    "pos": "n.",
    "cn_def": "目擊者、證人",
    "en_def": "a person who saw a crime or accident happen.",
    "sentence": "A key {{BLANK}} came forward to give testimony after seeing the robbery take place from across the street.",
    "cn": "一位關鍵目擊者在從街對面看到搶劫發生後，站出來提供了證詞。"
  },
  {
    "word": "witness",
    "pos": "v.",
    "cn_def": "目擊、看到",
    "en_def": "to see an event take place with your own eyes.",
    "sentence": "She was lucky enough to {{BLANK}} the rare northern lights display while on a holiday trip to Iceland last winter.",
    "cn": "她去年冬天在冰島度假時，有幸親眼目睹了罕見的北極光表演。"
  },
  {
    "word": "bore witness to",
    "pos": "phr.",
    "cn_def": "證明、見證",
    "en_def": "to show clear proof that a baseline fact is true.",
    "sentence": "The ancient ruins {{BLANK}} the incredible skill of the architects who built them thousands of years ago.",
    "cn": "這些古代遺跡見證了數千年前建造它們的建築師令人難以置信的技藝。"
  },
  {
    "word": "doubt",
    "pos": "n.",
    "cn_def": "懷疑、疑問",
    "en_def": "a feeling of being unsure about a statement truth.",
    "sentence": "There is some {{BLANK}} about whether the project can be completed on time, given the number of issues encountered so far.",
    "cn": "考慮到目前遇到的問題數量，對於項目能否按時完成存在一些疑問。"
  },
  {
    "word": "doubt",
    "pos": "v.",
    "cn_def": "懷疑、不信",
    "en_def": "to think that something is unlikely or untrue.",
    "sentence": "She began to {{BLANK}} her decision to move abroad after hearing negative stories from friends who had done the same thing.",
    "cn": "在聽到做了同樣事情的朋友的負面故事後，她開始懷疑自己移居海外的決定。"
  },
  {
    "word": "no doubt",
    "pos": "phr.",
    "cn_def": "毫無疑問地、肯定",
    "en_def": "certainly; tracking zero chance of being false.",
    "sentence": "She is, {{BLANK}}, one of the most talented writers of her generation and will be remembered for decades to come.",
    "cn": "她毫無疑問是她那一代最有才華的作家之一，將被銘記數十年。"
  },
  {
    "word": "doubtful",
    "pos": "adj.",
    "cn_def": "懷疑的、不確定的",
    "en_def": "unlikely to be true; tracking low confidence values.",
    "sentence": "It seems {{BLANK}} that the construction will be finished by the original deadline given the delays caused by bad weather.",
    "cn": "考慮到惡劣天氣造成的延誤，建設工程能否在原定截止日期前完成似乎令人懷疑。"
  },
  {
    "word": "suspect",
    "pos": "v.",
    "cn_def": "懷疑、猜想（某人有罪）",
    "en_def": "to think that someone is guilty of a major felony.",
    "sentence": "The investigators began to {{BLANK}} that the fire had been started deliberately after finding traces of accelerant at the scene.",
    "cn": "調查人員在現場發現助燃劑的痕跡後，開始懷疑火災是故意放火引起的。"
  },
  {
    "word": "suspect",
    "pos": "n.",
    "cn_def": "嫌疑犯",
    "en_def": "a person whom the police think committed a crime.",
    "sentence": "Police arrested a {{BLANK}} early this morning in connection with the robbery that took place at the bank last Friday.",
    "cn": "警方今天早上逮捕了一名與上週五銀行搶劫案有關的嫌疑犯。"
  },
  {
    "word": "assigned",
    "pos": "v.",
    "cn_def": "分派、指派、分配",
    "en_def": "to give someone a specific job, task, or duty.",
    "sentence": "The teacher {{BLANK}} each student a different country to research for the geography project due next Friday.",
    "cn": "老師為每位學生分派了一個不同的國家進行研究，以完成下週五到期的地理項目。"
  },
  {
    "word": "assignment",
    "pos": "n.",
    "cn_def": "任務、功課、作業",
    "en_def": "a piece of work given to a student or employee.",
    "sentence": "She spent the whole weekend working on her history {{BLANK}}, which required her to analyse three primary source documents.",
    "cn": "她整個週末都在做她的歷史作業，這需要她分析三個主要來源文件。"
  },
  {
    "word": "aims",
    "pos": "v.",
    "cn_def": "對準、旨在、企圖",
    "en_def": "to point a weapon at a target; to intend to win.",
    "sentence": "The new education policy {{BLANK}} to reduce the gap between students from wealthy and low-income backgrounds.",
    "cn": "新教育政策旨在縮小來自富裕和低收入背景學生之間的差距。"
  },
  {
    "word": "aim",
    "pos": "n.",
    "cn_def": "目標、目的",
    "en_def": "a goal or purpose that you want to achieve.",
    "sentence": "The {{BLANK}} of the workshop is to help participants develop practical skills they can use immediately in the workplace.",
    "cn": "工作坊的目標是幫助參與者培養他們可以立即在職場中使用的實用技能。"
  },
  {
    "word": "aim to",
    "pos": "phr.",
    "cn_def": "旨在…、力求…",
    "en_def": "setting up an internal milestone to learn a skill.",
    "sentence": "She {{BLANK}} finish her novel by the end of the year and has been writing for two hours every morning.",
    "cn": "她力求在年底前完成她的小說，每天早上已經寫了兩個小時。"
  },
  {
    "word": "aim at",
    "pos": "phr.",
    "cn_def": "瞄準…",
    "en_def": "pointing a camera or gun directly at an entity.",
    "sentence": "The campaign is {{BLANK}} reducing plastic waste by encouraging shoppers to use reusable bags and containers.",
    "cn": "該活動旨在通過鼓勵購物者使用可重複使用的袋子和容器來減少塑膠廢棄物。"
  },
  {
    "word": "angle",
    "pos": "n.",
    "cn_def": "角度、觀點、立足點",
    "en_def": "the space between two lines; a viewpoint angle.",
    "sentence": "The photographer moved around the subject to find the perfect {{BLANK}} that would show off its best features.",
    "cn": "攝影師在被攝主體周圍移動，尋找能夠展示其最佳特色的完美角度。"
  },
  {
    "word": "from another angle",
    "pos": "phr.",
    "cn_def": "從另一個角度來看",
    "en_def": "reviewing a social crisis using a fresh perspective.",
    "sentence": "If you look at the problem {{BLANK}}, you might find that the solution is actually quite straightforward.",
    "cn": "如果你從另一個角度看這個問題，你可能會發現解決方案實際上相當簡單。"
  },
  {
    "word": "fate",
    "pos": "n.",
    "cn_def": "命運",
    "en_def": "an outside power that controls what happens to you.",
    "sentence": "She believed that meeting her best friend at that café was not an accident — it was {{BLANK}} bringing them together.",
    "cn": "她相信在那家咖啡館遇見她最好的朋友不是偶然——是命運將他們帶到了一起。"
  },
  {
    "word": "fatal",
    "pos": "adj.",
    "cn_def": "致命的",
    "en_def": "causing complete death or total operation failure.",
    "sentence": "The doctor confirmed that the injuries sustained in the crash were {{BLANK}} and that there was nothing more they could do.",
    "cn": "醫生確認在撞車事故中受到的傷害是致命的，他們已無能為力。"
  },
  {
    "word": "innocent",
    "pos": "adj.",
    "cn_def": "無罪的、清白的、天真的",
    "en_def": "not guilty of committing a specific crime.",
    "sentence": "After ten years in prison, new DNA evidence finally proved that he was {{BLANK}} and he was released immediately.",
    "cn": "在監獄待了十年後，新的DNA證據終於證明他是無罪的，他立即獲釋。"
  },
  {
    "word": "innocence",
    "pos": "n.",
    "cn_def": "無罪、清白、天真",
    "en_def": "the state of being clear of all generic charges.",
    "sentence": "The lawyer worked tirelessly to prove his client's {{BLANK}} and spent months gathering new evidence for the appeal.",
    "cn": "律師不知疲倦地工作，以證明客戶的清白，並花了數月時間收集新的上訴證據。"
  },
  {
    "word": "prison",
    "pos": "n.",
    "cn_def": "監獄",
    "en_def": "a secure government building where criminals stay.",
    "sentence": "He was sentenced to five years in {{BLANK}} for his role in the financial fraud that affected thousands of investors.",
    "cn": "他因在影響數千名投資者的金融詐欺中的角色而被判入獄五年。"
  },
  {
    "word": "jail",
    "pos": "n.",
    "cn_def": "監獄、拘留所",
    "en_def": "a short-term cell used to lock up local offenders.",
    "sentence": "The suspect was held in {{BLANK}} overnight while investigators gathered more evidence before deciding whether to charge him.",
    "cn": "嫌疑犯被關押在拘留所過夜，調查人員在決定是否起訴他之前收集了更多證據。"
  },
  {
    "word": "prisoner",
    "pos": "n.",
    "cn_def": "囚犯、犯人",
    "en_def": "a person locked up inside a cell room.",
    "sentence": "The {{BLANK}} had been serving a twelve-year sentence and was finally granted early release for good behaviour.",
    "cn": "這名囚犯已服滿十二年的刑期，終於因表現良好而獲得提前釋放。"
  },
  {
    "word": "imprisoned",
    "pos": "v.",
    "cn_def": "監禁、關押",
    "en_def": "to lock a citizen away behind iron bars legally.",
    "sentence": "The activist was {{BLANK}} for two years after publicly speaking out against the government's unfair housing policies.",
    "cn": "這名社運人士在公開反對政府不公平的住房政策後被監禁了兩年。"
  },
  {
    "word": "criminal",
    "pos": "n.",
    "cn_def": "犯罪者、罪犯",
    "en_def": "a person who committed a major breaking of law.",
    "sentence": "The police worked with international agencies to track down the {{BLANK}} who had been operating across several countries.",
    "cn": "警方與國際機構合作，追蹤在幾個國家活動的罪犯。"
  },
  {
    "word": "criminal",
    "pos": "adj.",
    "cn_def": "犯罪的、刑事的",
    "en_def": "relating to crime or illegal court matters.",
    "sentence": "The company faced a {{BLANK}} investigation after auditors discovered that millions of dollars had gone missing from its accounts.",
    "cn": "審計人員發現數百萬元從其帳戶中消失後，該公司面臨刑事調查。"
  },
  {
    "word": "crime",
    "pos": "n.",
    "cn_def": "罪行、犯罪行為",
    "en_def": "an illegal act that is punishable by state courts.",
    "sentence": "The neighbourhood watch programme helped reduce the rate of petty {{BLANK}} in the area by thirty percent last year.",
    "cn": "社區守望計劃幫助去年將該地區的輕微犯罪率降低了百分之三十。"
  },
  {
    "word": "guilty",
    "pos": "adj.",
    "cn_def": "有罪的",
    "en_def": "responsible for breaking a law in a court room.",
    "sentence": "The jury found the defendant {{BLANK}} on all three counts after deliberating for less than two hours.",
    "cn": "陪審團在審議不到兩小時後，裁定被告三項罪名全部成立。"
  },
  {
    "word": "guilty",
    "pos": "adj.",
    "cn_def": "內疚的、有罪惡感的",
    "en_def": "feeling bad because you did an incorrect action.",
    "sentence": "She felt {{BLANK}} about forgetting her friend's birthday and immediately went out to buy a belated card and gift.",
    "cn": "她對忘記朋友的生日感到內疚，立即出去買了一張遲到的卡片和禮物。"
  },
  {
    "word": "guilt",
    "pos": "n.",
    "cn_def": "罪責、內疚、罪惡感",
    "en_def": "a heavy mental load from doing wrong actions.",
    "sentence": "The {{BLANK}} of having lied to his parents weighed on him for weeks until he finally sat down and told them the truth.",
    "cn": "對父母撒謊的內疚感困擾了他好幾週，直到他終於坐下來告訴他們真相。"
  },
  {
    "word": "feel guilty",
    "pos": "phr.",
    "cn_def": "感到內疚",
    "en_def": "tracking ongoing internal regret over an old choice.",
    "sentence": "She {{BLANK}} about eating the last piece of cake when she realized her brother had been saving it for later.",
    "cn": "當她意識到弟弟一直在留著那塊蛋糕以後再吃時，她對吃掉最後一塊蛋糕感到內疚。"
  },
  {
    "word": "was guilty of",
    "pos": "phr.",
    "cn_def": "犯了…罪、對…感到內疚",
    "en_def": "officially flagged for a specific bad behavior line.",
    "sentence": "The report concluded that the company {{BLANK}} misleading customers about the contents of its products.",
    "cn": "報告得出結論，該公司犯了誤導顧客關於其產品內容的罪行。"
  }
];

const MCQS = [
  {
    "q": "The doctor ______ the patient that the operation was routine and that he would feel much better within a week.",
    "options": [
      "assured",
      "imprisoned",
      "doubt",
      "ruined"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Hard work and careful planning can ______ the success of a project, but unexpected challenges can still arise.",
    "options": [
      "rely",
      "assure",
      "suspect",
      "aims"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "She called her parents right after landing to ______ them that she had arrived safely and that everything was fine.",
    "options": [
      "suspect",
      "damaged",
      "witness",
      "reassure"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Despite his ______ that the report would be ready by Friday, it was not submitted until the following Monday morning.",
    "options": [
      "search",
      "destruction",
      "assurance",
      "criminal"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The manager ______ the project would be delivered on time and within the agreed budget.",
    "options": [
      "in search of",
      "feel guilty",
      "aim at",
      "assured us that"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "She tried to ______ her full commitment to the role during the job interview by sharing specific examples.",
    "options": [
      "aim to",
      "rely on",
      "assure them of",
      "assured us that"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The fire completely ______ three houses on the street before firefighters managed to bring it under control.",
    "options": [
      "destroyed",
      "imprisoned",
      "aims",
      "obtain"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The ______ caused by the flood left thousands of families without homes and forced the government to act quickly.",
    "options": [
      "crime",
      "destruction",
      "guilt",
      "innocence"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The typhoon was one of the most ______ storms to hit the island in decades, damaging roads, bridges, and farmland.",
    "options": [
      "criminal",
      "doubtful",
      "destructive",
      "reliable"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Heavy rain ______ the roof of the school gymnasium, and repairs had to be completed before classes could resume.",
    "options": [
      "obtain",
      "damaged",
      "reassure",
      "ruined"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Leaving the milk out of the fridge overnight completely ______ it, and she had to throw the whole carton away.",
    "options": [
      "ruined",
      "witness",
      "aims",
      "searched"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "She has always been the most ______ member of the team, always meeting deadlines and producing high-quality work.",
    "options": [
      "destructive",
      "guilty",
      "clueless",
      "reliable"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "You cannot always ______ on others to solve your problems — developing independence is an important life skill.",
    "options": [
      "rely",
      "suspect",
      "assigned",
      "destroyed"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Farmers in this region still ______ seasonal rainfall to water their crops instead of using irrigation systems.",
    "options": [
      "aim at",
      "rely on",
      "bore witness to",
      "in search of"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The country's heavy ______ on imported oil made it very vulnerable when global fuel prices suddenly increased.",
    "options": [
      "innocence",
      "jail",
      "reliance",
      "clue"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Police officers ______ the entire building for clues after a valuable painting was reported stolen from the gallery.",
    "options": [
      "damaged",
      "acquire",
      "doubt",
      "searched"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The ______ for the missing hiker lasted three days before he was finally found sheltering in a cave on the hillside.",
    "options": [
      "crime",
      "search",
      "search engine",
      "angle"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "She ______ her glasses for twenty minutes before realising she had left them on top of her own head.",
    "options": [
      "searched for",
      "aim at",
      "rely on",
      "aim to"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "He ______ for his passport the morning of the flight but could not find it anywhere in the house.",
    "options": [
      "aim at",
      "have no clue",
      "was guilty of",
      "searched high and low"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Thousands of people left their villages ______ better opportunities in the rapidly growing capital city.",
    "options": [
      "searched for",
      "from another angle",
      "in search of",
      "feel guilty"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "She typed the name of the restaurant into the ______ and found its menu, reviews, and opening hours instantly.",
    "options": [
      "search engine",
      "doubt",
      "guilt",
      "criminal"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The detective found a single ______ at the scene — a muddy footprint near the back door — that broke the case open.",
    "options": [
      "guilt",
      "crime",
      "clue",
      "jail"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "I ______ how to fix this error in the code, so I asked my more experienced colleague for help.",
    "options": [
      "feel guilty",
      "have no clue",
      "searched high and low",
      "bore witness to"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "He felt completely ______ during the advanced mathematics lesson, as he had missed the previous week's foundational class.",
    "options": [
      "reliable",
      "fatal",
      "destructive",
      "clueless"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Students must ______ a special permit from the office before they are allowed to use the advanced science laboratory.",
    "options": [
      "obtain",
      "destroyed",
      "assigned",
      "imprisoned"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "She managed to ______ three new languages during her years of working overseas in Europe and South America.",
    "options": [
      "rely",
      "assure",
      "reassure",
      "acquire"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "After years of dedicated practice, she finally managed to ______ the level of fluency needed to teach English professionally.",
    "options": [
      "acquire",
      "destroyed",
      "attain",
      "rely"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "A key ______ came forward to give testimony after seeing the robbery take place from across the street.",
    "options": [
      "criminal",
      "witness",
      "fate",
      "guilt"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "She was lucky enough to ______ the rare northern lights display while on a holiday trip to Iceland last winter.",
    "options": [
      "aims",
      "doubt",
      "witness",
      "assigned"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The ancient ruins ______ the incredible skill of the architects who built them thousands of years ago.",
    "options": [
      "in search of",
      "bore witness to",
      "searched for",
      "rely on"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "There is some ______ about whether the project can be completed on time, given the number of issues encountered so far.",
    "options": [
      "suspect",
      "destruction",
      "fate",
      "doubt"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "She began to ______ her decision to move abroad after hearing negative stories from friends who had done the same thing.",
    "options": [
      "doubt",
      "aims",
      "acquire",
      "attain"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "She is, ______, one of the most talented writers of her generation and will be remembered for decades to come.",
    "options": [
      "have no clue",
      "searched high and low",
      "no doubt",
      "feel guilty"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "It seems ______ that the construction will be finished by the original deadline given the delays caused by bad weather.",
    "options": [
      "doubtful",
      "criminal",
      "reliable",
      "clueless"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "The investigators began to ______ that the fire had been started deliberately after finding traces of accelerant at the scene.",
    "options": [
      "rely",
      "attain",
      "aims",
      "suspect"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "Police arrested a ______ early this morning in connection with the robbery that took place at the bank last Friday.",
    "options": [
      "assignment",
      "suspect",
      "prisoner",
      "search engine"
    ],
    "answer": 1,
    "vocabIndex": 35
  },
  {
    "q": "The teacher ______ each student a different country to research for the geography project due next Friday.",
    "options": [
      "aims",
      "damaged",
      "assigned",
      "acquire"
    ],
    "answer": 2,
    "vocabIndex": 36
  },
  {
    "q": "She spent the whole weekend working on her history ______, which required her to analyse three primary source documents.",
    "options": [
      "search",
      "innocence",
      "prisoner",
      "assignment"
    ],
    "answer": 3,
    "vocabIndex": 37
  },
  {
    "q": "The new education policy ______ to reduce the gap between students from wealthy and low-income backgrounds.",
    "options": [
      "assured",
      "aims",
      "doubt",
      "assure"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "The ______ of the workshop is to help participants develop practical skills they can use immediately in the workplace.",
    "options": [
      "aim",
      "reliance",
      "witness",
      "prison"
    ],
    "answer": 0,
    "vocabIndex": 39
  },
  {
    "q": "She ______ finish her novel by the end of the year and has been writing for two hours every morning.",
    "options": [
      "from another angle",
      "feel guilty",
      "assure them of",
      "aim to"
    ],
    "answer": 3,
    "vocabIndex": 40
  },
  {
    "q": "The campaign is ______ reducing plastic waste by encouraging shoppers to use reusable bags and containers.",
    "options": [
      "searched for",
      "aim at",
      "searched high and low",
      "have no clue"
    ],
    "answer": 1,
    "vocabIndex": 41
  },
  {
    "q": "The photographer moved around the subject to find the perfect ______ that would show off its best features.",
    "options": [
      "prison",
      "suspect",
      "angle",
      "prisoner"
    ],
    "answer": 2,
    "vocabIndex": 42
  },
  {
    "q": "If you look at the problem ______, you might find that the solution is actually quite straightforward.",
    "options": [
      "from another angle",
      "aim at",
      "assure them of",
      "searched for"
    ],
    "answer": 0,
    "vocabIndex": 43
  },
  {
    "q": "She believed that meeting her best friend at that café was not an accident — it was ______ bringing them together.",
    "options": [
      "prison",
      "search",
      "fate",
      "guilt"
    ],
    "answer": 2,
    "vocabIndex": 44
  },
  {
    "q": "The doctor confirmed that the injuries sustained in the crash were ______ and that there was nothing more they could do.",
    "options": [
      "criminal",
      "innocent",
      "reliable",
      "fatal"
    ],
    "answer": 3,
    "vocabIndex": 45
  },
  {
    "q": "After ten years in prison, new DNA evidence finally proved that he was ______ and he was released immediately.",
    "options": [
      "innocent",
      "criminal",
      "reliable",
      "doubtful"
    ],
    "answer": 0,
    "vocabIndex": 46
  },
  {
    "q": "The lawyer worked tirelessly to prove his client's ______ and spent months gathering new evidence for the appeal.",
    "options": [
      "prison",
      "innocence",
      "suspect",
      "search engine"
    ],
    "answer": 1,
    "vocabIndex": 47
  },
  {
    "q": "He was sentenced to five years in ______ for his role in the financial fraud that affected thousands of investors.",
    "options": [
      "fate",
      "destruction",
      "prison",
      "suspect"
    ],
    "answer": 2,
    "vocabIndex": 48
  },
  {
    "q": "The suspect was held in ______ overnight while investigators gathered more evidence before deciding whether to charge him.",
    "options": [
      "angle",
      "reliance",
      "suspect",
      "jail"
    ],
    "answer": 3,
    "vocabIndex": 49
  },
  {
    "q": "The ______ had been serving a twelve-year sentence and was finally granted early release for good behaviour.",
    "options": [
      "prisoner",
      "aim",
      "criminal",
      "search engine"
    ],
    "answer": 0,
    "vocabIndex": 50
  },
  {
    "q": "The activist was ______ for two years after publicly speaking out against the government's unfair housing policies.",
    "options": [
      "ruined",
      "imprisoned",
      "rely",
      "obtain"
    ],
    "answer": 1,
    "vocabIndex": 51
  },
  {
    "q": "The police worked with international agencies to track down the ______ who had been operating across several countries.",
    "options": [
      "criminal",
      "doubt",
      "search engine",
      "prisoner"
    ],
    "answer": 0,
    "vocabIndex": 52
  },
  {
    "q": "The company faced a ______ investigation after auditors discovered that millions of dollars had gone missing from its accounts.",
    "options": [
      "fatal",
      "criminal",
      "clueless",
      "innocent"
    ],
    "answer": 1,
    "vocabIndex": 53
  },
  {
    "q": "The neighbourhood watch programme helped reduce the rate of petty ______ in the area by thirty percent last year.",
    "options": [
      "search",
      "prison",
      "crime",
      "prisoner"
    ],
    "answer": 2,
    "vocabIndex": 54
  },
  {
    "q": "The jury found the defendant ______ on all three counts after deliberating for less than two hours.",
    "options": [
      "doubtful",
      "innocent",
      "clueless",
      "guilty"
    ],
    "answer": 3,
    "vocabIndex": 55
  },
  {
    "q": "She felt ______ about forgetting her friend's birthday and immediately went out to buy a belated card and gift.",
    "options": [
      "doubtful",
      "reliable",
      "guilty",
      "innocent"
    ],
    "answer": 2,
    "vocabIndex": 56
  },
  {
    "q": "The ______ of having lied to his parents weighed on him for weeks until he finally sat down and told them the truth.",
    "options": [
      "guilt",
      "suspect",
      "doubt",
      "assurance"
    ],
    "answer": 0,
    "vocabIndex": 57
  },
  {
    "q": "She ______ about eating the last piece of cake when she realized her brother had been saving it for later.",
    "options": [
      "searched high and low",
      "from another angle",
      "in search of",
      "feel guilty"
    ],
    "answer": 3,
    "vocabIndex": 58
  },
  {
    "q": "The report concluded that the company ______ misleading customers about the contents of its products.",
    "options": [
      "searched for",
      "was guilty of",
      "from another angle",
      "have no clue"
    ],
    "answer": 1,
    "vocabIndex": 59
  }
];

const LOOKUP = {
  "assured": {
    "pos": "v.",
    "en_def": "to promise someone that something is definitely true.",
    "cn_def": "向…保證、使確信",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to promise someone that something is definitely true.",
        "cn_def": "向…保證、使確信"
      }
    ]
  },
  "assure": {
    "pos": "v.",
    "en_def": "to promise someone that something is definitely true.",
    "cn_def": "向…保證、使確信",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to promise someone that something is definitely true.",
        "cn_def": "向…保證、使確信"
      },
      {
        "pos": "v.",
        "en_def": "to make a positive outcome certain to happen.",
        "cn_def": "確保、保障"
      }
    ]
  },
  "reassure": {
    "pos": "v.",
    "en_def": "to say words to stop someone from worrying.",
    "cn_def": "使安心、使放心",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to say words to stop someone from worrying.",
        "cn_def": "使安心、使放心"
      }
    ]
  },
  "assurance": {
    "pos": "n.",
    "en_def": "a firm promise or a high state of self confidence.",
    "cn_def": "保證、把握、自信",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a firm promise or a high state of self confidence.",
        "cn_def": "保證、把握、自信"
      }
    ]
  },
  "assured us that": {
    "pos": "phr.",
    "en_def": "to tell a peer clearly that a task will finish.",
    "cn_def": "向某人保證…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to tell a peer clearly that a task will finish.",
        "cn_def": "向某人保證…"
      }
    ]
  },
  "assure someone that": {
    "pos": "phr.",
    "en_def": "to tell a peer clearly that a task will finish.",
    "cn_def": "向某人保證…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to tell a peer clearly that a task will finish.",
        "cn_def": "向某人保證…"
      }
    ]
  },
  "assure someone of": {
    "pos": "phr.",
    "en_def": "to make a manager feel fully safe about a trait.",
    "cn_def": "讓某人確信某事",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make a manager feel fully safe about a trait.",
        "cn_def": "讓某人確信某事"
      }
    ]
  },
  "assure them of": {
    "pos": "phr.",
    "en_def": "to make a manager feel fully safe about a trait.",
    "cn_def": "讓某人確信某事",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make a manager feel fully safe about a trait.",
        "cn_def": "讓某人確信某事"
      }
    ]
  },
  "destroyed": {
    "pos": "v.",
    "en_def": "to damage something so badly that it cannot be fixed.",
    "cn_def": "破壞、毀滅",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to damage something so badly that it cannot be fixed.",
        "cn_def": "破壞、毀滅"
      }
    ]
  },
  "destroy": {
    "pos": "v.",
    "en_def": "to damage something so badly that it cannot be fixed.",
    "cn_def": "破壞、毀滅",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to damage something so badly that it cannot be fixed.",
        "cn_def": "破壞、毀滅"
      }
    ]
  },
  "destruction": {
    "pos": "n.",
    "en_def": "the act or process of ruining an asset completely.",
    "cn_def": "破壞、毀滅",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act or process of ruining an asset completely.",
        "cn_def": "破壞、毀滅"
      }
    ]
  },
  "destructive": {
    "pos": "adj.",
    "en_def": "causing a huge amount of deep damage or harm.",
    "cn_def": "破壞性的、毀滅性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing a huge amount of deep damage or harm.",
        "cn_def": "破壞性的、毀滅性的"
      }
    ]
  },
  "damage": {
    "pos": "v.",
    "en_def": "to harm an item; a loss in value or beauty.",
    "cn_def": "損害、損壞",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to harm an item; a loss in value or beauty.",
        "cn_def": "損害、損壞"
      }
    ]
  },
  "damaged": {
    "pos": "v.",
    "en_def": "to harm an item; a loss in value or beauty.",
    "cn_def": "損害、損壞",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to harm an item; a loss in value or beauty.",
        "cn_def": "損害、損壞"
      }
    ]
  },
  "ruin": {
    "pos": "v.",
    "en_def": "to completely spoil or destroy a plan or dish.",
    "cn_def": "毀掉、搞砸",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to completely spoil or destroy a plan or dish.",
        "cn_def": "毀掉、搞砸"
      }
    ]
  },
  "ruined": {
    "pos": "v.",
    "en_def": "to completely spoil or destroy a plan or dish.",
    "cn_def": "毀掉、搞砸",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to completely spoil or destroy a plan or dish.",
        "cn_def": "毀掉、搞砸"
      }
    ]
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "able to be trusted to work or behave well.",
    "cn_def": "可靠的、可信賴的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to be trusted to work or behave well.",
        "cn_def": "可靠的、可信賴的"
      }
    ]
  },
  "rely": {
    "pos": "v.",
    "en_def": "to depend on or trust someone fully.",
    "cn_def": "依靠、信賴",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to depend on or trust someone fully.",
        "cn_def": "依靠、信賴"
      }
    ]
  },
  "rely on": {
    "pos": "phr.",
    "en_def": "to place your full success in a peer's hands.",
    "cn_def": "依賴…、信任…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to place your full success in a peer's hands.",
        "cn_def": "依賴…、信任…"
      }
    ]
  },
  "reliance": {
    "pos": "n.",
    "en_def": "the state of needing or trusting an outside item.",
    "cn_def": "依賴、信任",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of needing or trusting an outside item.",
        "cn_def": "依賴、信任"
      }
    ]
  },
  "searched": {
    "pos": "v.",
    "en_def": "to look carefully across an area to find an item.",
    "cn_def": "搜尋、搜查",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to look carefully across an area to find an item.",
        "cn_def": "搜尋、搜查"
      }
    ]
  },
  "search": {
    "pos": "v.",
    "en_def": "to look carefully across an area to find an item.",
    "cn_def": "搜尋、搜查",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to look carefully across an area to find an item.",
        "cn_def": "搜尋、搜查"
      },
      {
        "pos": "n.",
        "en_def": "an active process of hunting for a missing target.",
        "cn_def": "搜尋、搜查"
      }
    ]
  },
  "searched for": {
    "pos": "phr.",
    "en_def": "to try to find a specific lost tool or person.",
    "cn_def": "尋找…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to try to find a specific lost tool or person.",
        "cn_def": "尋找…"
      }
    ]
  },
  "search for": {
    "pos": "phr.",
    "en_def": "to try to find a specific lost tool or person.",
    "cn_def": "尋找…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to try to find a specific lost tool or person.",
        "cn_def": "尋找…"
      }
    ]
  },
  "searched high and low": {
    "pos": "phr.",
    "en_def": "to look everywhere imaginable for a lost object.",
    "cn_def": "到處尋找、翻箱倒櫃",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to look everywhere imaginable for a lost object.",
        "cn_def": "到處尋找、翻箱倒櫃"
      }
    ]
  },
  "search high and low": {
    "pos": "phr.",
    "en_def": "to look everywhere imaginable for a lost object.",
    "cn_def": "到處尋找、翻箱倒櫃",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to look everywhere imaginable for a lost object.",
        "cn_def": "到處尋找、翻箱倒櫃"
      }
    ]
  },
  "in search of": {
    "pos": "phr.",
    "en_def": "traversing a zone with the goal of finding assets.",
    "cn_def": "尋找…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "traversing a zone with the goal of finding assets.",
        "cn_def": "尋找…"
      }
    ]
  },
  "search engine": {
    "pos": "n.",
    "en_def": "a computer program used to find websites online.",
    "cn_def": "搜尋引擎",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a computer program used to find websites online.",
        "cn_def": "搜尋引擎"
      }
    ]
  },
  "clue": {
    "pos": "n.",
    "en_def": "a sign or fact that helps solve a crime puzzle.",
    "cn_def": "線索、提示",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sign or fact that helps solve a crime puzzle.",
        "cn_def": "線索、提示"
      }
    ]
  },
  "have no clue": {
    "pos": "phr.",
    "en_def": "to be completely ignorant about an event background.",
    "cn_def": "毫無頭緒、一無所知",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be completely ignorant about an event background.",
        "cn_def": "毫無頭緒、一無所知"
      }
    ]
  },
  "clueless": {
    "pos": "adj.",
    "en_def": "tracking zero knowledge about a current topic task.",
    "cn_def": "毫無頭緒的、愚蠢的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "tracking zero knowledge about a current topic task.",
        "cn_def": "毫無頭緒的、愚蠢的"
      }
    ]
  },
  "obtain": {
    "pos": "v.",
    "en_def": "to get something after an effort or official request.",
    "cn_def": "獲得、贏得、買到",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to get something after an effort or official request.",
        "cn_def": "獲得、贏得、買到"
      }
    ]
  },
  "acquire": {
    "pos": "v.",
    "en_def": "to pick up a local habit or buy a property firm.",
    "cn_def": "獲得、學得",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to pick up a local habit or buy a property firm.",
        "cn_def": "獲得、學得"
      }
    ]
  },
  "attain": {
    "pos": "v.",
    "en_def": "to reach a high milestone score after years of work.",
    "cn_def": "達到、實現",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to reach a high milestone score after years of work.",
        "cn_def": "達到、實現"
      }
    ]
  },
  "witness": {
    "pos": "n.",
    "en_def": "a person who saw a crime or accident happen.",
    "cn_def": "目擊者、證人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who saw a crime or accident happen.",
        "cn_def": "目擊者、證人"
      },
      {
        "pos": "v.",
        "en_def": "to see an event take place with your own eyes.",
        "cn_def": "目擊、看到"
      }
    ]
  },
  "bore witness to": {
    "pos": "phr.",
    "en_def": "to show clear proof that a baseline fact is true.",
    "cn_def": "證明、見證",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to show clear proof that a baseline fact is true.",
        "cn_def": "證明、見證"
      }
    ]
  },
  "bear witness to": {
    "pos": "phr.",
    "en_def": "to show clear proof that a baseline fact is true.",
    "cn_def": "證明、見證",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to show clear proof that a baseline fact is true.",
        "cn_def": "證明、見證"
      }
    ]
  },
  "doubt": {
    "pos": "n.",
    "en_def": "a feeling of being unsure about a statement truth.",
    "cn_def": "懷疑、疑問",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling of being unsure about a statement truth.",
        "cn_def": "懷疑、疑問"
      },
      {
        "pos": "v.",
        "en_def": "to think that something is unlikely or untrue.",
        "cn_def": "懷疑、不信"
      }
    ]
  },
  "no doubt": {
    "pos": "phr.",
    "en_def": "certainly; tracking zero chance of being false.",
    "cn_def": "毫無疑問地、肯定",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "certainly; tracking zero chance of being false.",
        "cn_def": "毫無疑問地、肯定"
      }
    ]
  },
  "doubtful": {
    "pos": "adj.",
    "en_def": "unlikely to be true; tracking low confidence values.",
    "cn_def": "懷疑的、不確定的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "unlikely to be true; tracking low confidence values.",
        "cn_def": "懷疑的、不確定的"
      }
    ]
  },
  "suspect": {
    "pos": "v.",
    "en_def": "to think that someone is guilty of a major felony.",
    "cn_def": "懷疑、猜想（某人有罪）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to think that someone is guilty of a major felony.",
        "cn_def": "懷疑、猜想（某人有罪）"
      },
      {
        "pos": "n.",
        "en_def": "a person whom the police think committed a crime.",
        "cn_def": "嫌疑犯"
      }
    ]
  },
  "assigned": {
    "pos": "v.",
    "en_def": "to give someone a specific job, task, or duty.",
    "cn_def": "分派、指派、分配",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give someone a specific job, task, or duty.",
        "cn_def": "分派、指派、分配"
      }
    ]
  },
  "assign": {
    "pos": "v.",
    "en_def": "to give someone a specific job, task, or duty.",
    "cn_def": "分派、指派、分配",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give someone a specific job, task, or duty.",
        "cn_def": "分派、指派、分配"
      }
    ]
  },
  "assignment": {
    "pos": "n.",
    "en_def": "a piece of work given to a student or employee.",
    "cn_def": "任務、功課、作業",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of work given to a student or employee.",
        "cn_def": "任務、功課、作業"
      }
    ]
  },
  "aim": {
    "pos": "v.",
    "en_def": "to point a weapon at a target; to intend to win.",
    "cn_def": "對準、旨在、企圖",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to point a weapon at a target; to intend to win.",
        "cn_def": "對準、旨在、企圖"
      },
      {
        "pos": "n.",
        "en_def": "a goal or purpose that you want to achieve.",
        "cn_def": "目標、目的"
      }
    ]
  },
  "aims": {
    "pos": "v.",
    "en_def": "to point a weapon at a target; to intend to win.",
    "cn_def": "對準、旨在、企圖",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to point a weapon at a target; to intend to win.",
        "cn_def": "對準、旨在、企圖"
      }
    ]
  },
  "aim to": {
    "pos": "phr.",
    "en_def": "setting up an internal milestone to learn a skill.",
    "cn_def": "旨在…、力求…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "setting up an internal milestone to learn a skill.",
        "cn_def": "旨在…、力求…"
      }
    ]
  },
  "aim at": {
    "pos": "phr.",
    "en_def": "pointing a camera or gun directly at an entity.",
    "cn_def": "瞄準…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "pointing a camera or gun directly at an entity.",
        "cn_def": "瞄準…"
      }
    ]
  },
  "angle": {
    "pos": "n.",
    "en_def": "the space between two lines; a viewpoint angle.",
    "cn_def": "角度、觀點、立足點",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the space between two lines; a viewpoint angle.",
        "cn_def": "角度、觀點、立足點"
      }
    ]
  },
  "from another angle": {
    "pos": "phr.",
    "en_def": "reviewing a social crisis using a fresh perspective.",
    "cn_def": "從另一個角度來看",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "reviewing a social crisis using a fresh perspective.",
        "cn_def": "從另一個角度來看"
      }
    ]
  },
  "fate": {
    "pos": "n.",
    "en_def": "an outside power that controls what happens to you.",
    "cn_def": "命運",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an outside power that controls what happens to you.",
        "cn_def": "命運"
      }
    ]
  },
  "fatal": {
    "pos": "adj.",
    "en_def": "causing complete death or total operation failure.",
    "cn_def": "致命的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing complete death or total operation failure.",
        "cn_def": "致命的"
      }
    ]
  },
  "innocent": {
    "pos": "adj.",
    "en_def": "not guilty of committing a specific crime.",
    "cn_def": "無罪的、清白的、天真的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not guilty of committing a specific crime.",
        "cn_def": "無罪的、清白的、天真的"
      }
    ]
  },
  "innocence": {
    "pos": "n.",
    "en_def": "the state of being clear of all generic charges.",
    "cn_def": "無罪、清白、天真",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being clear of all generic charges.",
        "cn_def": "無罪、清白、天真"
      }
    ]
  },
  "prison": {
    "pos": "n.",
    "en_def": "a secure government building where criminals stay.",
    "cn_def": "監獄",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a secure government building where criminals stay.",
        "cn_def": "監獄"
      }
    ]
  },
  "jail": {
    "pos": "n.",
    "en_def": "a short-term cell used to lock up local offenders.",
    "cn_def": "監獄、拘留所",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a short-term cell used to lock up local offenders.",
        "cn_def": "監獄、拘留所"
      }
    ]
  },
  "prisoner": {
    "pos": "n.",
    "en_def": "a person locked up inside a cell room.",
    "cn_def": "囚犯、犯人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person locked up inside a cell room.",
        "cn_def": "囚犯、犯人"
      }
    ]
  },
  "imprisoned": {
    "pos": "v.",
    "en_def": "to lock a citizen away behind iron bars legally.",
    "cn_def": "監禁、關押",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to lock a citizen away behind iron bars legally.",
        "cn_def": "監禁、關押"
      }
    ]
  },
  "imprison": {
    "pos": "v.",
    "en_def": "to lock a citizen away behind iron bars legally.",
    "cn_def": "監禁、關押",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to lock a citizen away behind iron bars legally.",
        "cn_def": "監禁、關押"
      }
    ]
  },
  "criminal": {
    "pos": "n.",
    "en_def": "a person who committed a major breaking of law.",
    "cn_def": "犯罪者、罪犯",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who committed a major breaking of law.",
        "cn_def": "犯罪者、罪犯"
      },
      {
        "pos": "adj.",
        "en_def": "relating to crime or illegal court matters.",
        "cn_def": "犯罪的、刑事的"
      }
    ]
  },
  "crime": {
    "pos": "n.",
    "en_def": "an illegal act that is punishable by state courts.",
    "cn_def": "罪行、犯罪行為",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an illegal act that is punishable by state courts.",
        "cn_def": "罪行、犯罪行為"
      }
    ]
  },
  "guilty": {
    "pos": "adj.",
    "en_def": "responsible for breaking a law in a court room.",
    "cn_def": "有罪的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "responsible for breaking a law in a court room.",
        "cn_def": "有罪的"
      },
      {
        "pos": "adj.",
        "en_def": "feeling bad because you did an incorrect action.",
        "cn_def": "內疚的、有罪惡感的"
      }
    ]
  },
  "guilt": {
    "pos": "n.",
    "en_def": "a heavy mental load from doing wrong actions.",
    "cn_def": "罪責、內疚、罪惡感",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a heavy mental load from doing wrong actions.",
        "cn_def": "罪責、內疚、罪惡感"
      }
    ]
  },
  "feel guilty": {
    "pos": "phr.",
    "en_def": "tracking ongoing internal regret over an old choice.",
    "cn_def": "感到內疚",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "tracking ongoing internal regret over an old choice.",
        "cn_def": "感到內疚"
      }
    ]
  },
  "be guilty of": {
    "pos": "phr.",
    "en_def": "officially flagged for a specific bad behavior line.",
    "cn_def": "犯了…罪、對…感到內疚",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "officially flagged for a specific bad behavior line.",
        "cn_def": "犯了…罪、對…感到內疚"
      }
    ]
  },
  "was guilty of": {
    "pos": "phr.",
    "en_def": "officially flagged for a specific bad behavior line.",
    "cn_def": "犯了…罪、對…感到內疚",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "officially flagged for a specific bad behavior line.",
        "cn_def": "犯了…罪、對…感到內疚"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
