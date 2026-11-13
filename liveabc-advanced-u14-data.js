// Unit 14 Quiz Data: spy – in public
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Advanced U14 - spy – in public",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "spied",
    "pos": "v.",
    "cn_def": "暗中監視；看見",
    "en_def": "to watch someone or something secretly, often to discover confidential information",
    "sentence": "Georgina {{BLANK}} on Nate for several days to find out exactly where he hid her birthday present.",
    "cn": "喬治娜暗中監視了奈特幾天，想準確查出他把她的生日禮物藏在哪裡。"
  },
  {
    "word": "spy",
    "pos": "n.",
    "cn_def": "間諜；密探",
    "en_def": "a person who secretly collects and reports information about the activities of a rival",
    "sentence": "The foreign {{BLANK}} was caught by security forces before he could give the classified information to his boss.",
    "cn": "這名外國間諜在未能將機密情報交給他的上司之前，就被安全部隊逮捕了。"
  },
  {
    "word": "spooky",
    "pos": "adj.",
    "cn_def": "幽靈般的；陰森恐怖的",
    "en_def": "strange and frightening in a way that suggests the presence of ghosts",
    "sentence": "I wouldn't dare go into that {{BLANK}} old abandoned house at night without a flashlight.",
    "cn": "如果晚上沒有手電筒，我絕不敢走進那棟陰森恐怖的廢棄老房子。"
  },
  {
    "word": "scared",
    "pos": "v.",
    "cn_def": "驚嚇；嚇跑",
    "en_def": "to frighten a person or animal suddenly, making them feel afraid",
    "sentence": "The bright flash of lightning {{BLANK}} the young puppy, making it hide under the sofa.",
    "cn": "突然閃現的明亮閃電嚇壞了小狗，使牠躲到了沙發下面。"
  },
  {
    "word": "scared away",
    "pos": "phr.",
    "cn_def": "嚇跑；驅逐",
    "en_def": "to make a person or animal leave immediately by frightening them",
    "sentence": "The bold burglar was {{BLANK}} when the family's large guard dog started barking loudly.",
    "cn": "當這家人那隻大型警衛犬開始大聲吠叫時，那名大膽的竊賊被嚇跑了。"
  },
  {
    "word": "foul",
    "pos": "n.",
    "cn_def": "（體育比賽）犯規",
    "en_def": "an unfair or illegal act against an opponent in a sports game",
    "sentence": "The soccer player got a critical {{BLANK}} for pushing a defender on the other team during the match.",
    "cn": "這名足球運動員因在比賽中推了對方球隊的防守球員，而被判了一次關鍵的犯規。"
  },
  {
    "word": "fouled",
    "pos": "v.",
    "cn_def": "污染；弄髒",
    "en_def": "to make something dirty, impure, or polluted, especially with chemicals",
    "sentence": "Hazardous chemicals from the local chemical factory {{BLANK}} the clean water in the nearby lake.",
    "cn": "來自當地化學工廠的危險化學品污染了附近湖泊中乾淨的水。"
  },
  {
    "word": "foul",
    "pos": "adj.",
    "cn_def": "惡臭的；粗俗的（髒話）",
    "en_def": "extremely unpleasant or offensive; containing bad or rude language",
    "sentence": "You should never use {{BLANK}} language when you talk to young children in the school classroom.",
    "cn": "當你在學校教室裡和年幼的孩子說話時，絕對不應該使用粗俗的語言。"
  },
  {
    "word": "foul play",
    "pos": "n.",
    "cn_def": "謀殺；不正當手段",
    "en_def": "criminal action or violent behavior, typically involving a murder",
    "sentence": "Police investigators suspected {{BLANK}} after finding the wealthy businessman dead inside his locked office.",
    "cn": "警方調查人員在發現這位富商死在鎖著的辦公室內後，懷疑背後有謀殺陰謀。"
  },
  {
    "word": "mostly",
    "pos": "adv.",
    "cn_def": "主要地；大部分地",
    "en_def": "mainly; for the most part; in most cases or scenarios",
    "sentence": "This historical building is used {{BLANK}} for storage, so you can safely put your moving boxes in here.",
    "cn": "這棟歷史建築主要用於儲藏，因此你可以安全地把搬家箱子放在這裡。"
  },
  {
    "word": "in large part",
    "pos": "phr.",
    "cn_def": "在很大程度上（等同於 mostly）",
    "en_def": "to a significant degree; mostly due to a specific reason",
    "sentence": "Our house is a complete mess {{BLANK}} because we are in the middle of moving to Taipei.",
    "cn": "我們家現在一片狼藉，在很大程度上是因為我們正處於搬家到台北的過程中。"
  },
  {
    "word": "innocent",
    "pos": "adj.",
    "cn_def": "無罪的；天真的",
    "en_def": "not guilty of a crime; naive or lacking knowledge of evil or harm",
    "sentence": "The jury declared that the suspect was completely {{BLANK}} of the serious financial fraud charges.",
    "cn": "陪審團宣布，這名嫌疑人對嚴重的財務詐欺指控是完全無罪的。"
  },
  {
    "word": "innocently",
    "pos": "adv.",
    "cn_def": "天真地；無意地",
    "en_def": "in a naive, harmless, or simple manner without intending any harm",
    "sentence": "Linda {{BLANK}} asked a personal question that accidentally made Kevin feel very uncomfortable and nervous.",
    "cn": "琳達天真地問了一個私人的問題，這不經意地讓凱文感到非常不舒服和緊張。"
  },
  {
    "word": "aggressive",
    "pos": "adj.",
    "cn_def": "具攻擊性的；好勝的",
    "en_def": "behaving in a hostile or forceful way, ready to fight or argue",
    "sentence": "Some business companies use highly {{BLANK}} marketing campaigns to capture a larger slice of the market.",
    "cn": "一些商業公司使用極具攻擊性的行銷活動，以獲取更大的市場份額。"
  },
  {
    "word": "aggressively",
    "pos": "adv.",
    "cn_def": "具攻擊性地；氣勢洶洶地",
    "en_def": "in a hostile, forceful, or competitive manner that shows a readiness to attack",
    "sentence": "The strange dog barked {{BLANK}} at the delivery man who was standing near the front gate.",
    "cn": "那隻陌生的狗氣勢洶洶地對著站在大門附近的快遞員吠叫。"
  },
  {
    "word": "aggressiveness",
    "pos": "n.",
    "cn_def": "攻擊性；好勝心",
    "en_def": "hostile or forceful behavior, or a strong readiness to compete aggressively",
    "sentence": "The coach praised the young athlete's {{BLANK}} on the basketball court during the final match.",
    "cn": "教練讚揚了這位年輕運動員在決賽期間在籃球場上的好勝心。"
  },
  {
    "word": "merely",
    "pos": "adv.",
    "cn_def": "僅僅；只不過",
    "en_def": "just; only; simply and nothing more than what is specified",
    "sentence": "John {{BLANK}} wanted to say he was sorry for his unprofessional behavior at the staff meeting.",
    "cn": "約翰僅僅是想為他在員工會議上的不專業行為表示歉意。"
  },
  {
    "word": "microphone",
    "pos": "n.",
    "cn_def": "麥克風",
    "en_def": "an electronic device used for making spoken sounds louder or recording them",
    "sentence": "After the classroom {{BLANK}} was finally fixed by the tech expert, Reggie went on with his presentation.",
    "cn": "在教室的麥克風終於被技術專家修復後，雷吉繼續進行他的簡報。"
  },
  {
    "word": "customized",
    "pos": "adj.",
    "cn_def": "客製化的；訂製的",
    "en_def": "modified or built according to a choice customer's specific requirements",
    "sentence": "The wealthy executive ordered a {{BLANK}} automobile with tinted windows and a unique audio system.",
    "cn": "這位富有的主管訂製了一輛帶有染色車窗和獨特音響系統的客製化汽車。"
  },
  {
    "word": "cyber security",
    "pos": "n.",
    "cn_def": "網路安全",
    "en_def": "the state of being protected against the criminal or unauthorized use of electronic data",
    "sentence": "The national government formed a specialized team to address recent global {{BLANK}} threats.",
    "cn": "國家政府成立了一個專業團隊，以應對近期全球的網路安全威脅。"
  },
  {
    "word": "cyber attack",
    "pos": "n.",
    "cn_def": "網路攻擊",
    "en_def": "an attempt by hackers to damage or destroy a computer network or system",
    "sentence": "The international bank's server room suffered a major {{BLANK}} that delayed financial transactions for hours.",
    "cn": "這家國際銀行的伺服器機房遭受了嚴重的網路攻擊，導致金融交易延誤了數小時。"
  },
  {
    "word": "coded",
    "pos": "v.",
    "cn_def": "編寫代碼；寫程式",
    "en_def": "to write computer programs or software using a system of technical laws",
    "sentence": "A dedicated team of software developers {{BLANK}} the new interactive English learning web application.",
    "cn": "一支熱忱的軟體開發團隊編寫了這款全新互動式英文學習網頁應用程式。"
  },
  {
    "word": "code",
    "pos": "n.",
    "cn_def": "密碼；道德準則；代碼",
    "en_def": "a system of words, letters, or symbols used to represent secrets; a set of moral laws",
    "sentence": "Everyone should have a strict moral {{BLANK}} that helps them determine what is right and wrong.",
    "cn": "每個人都應該有嚴格的道德準則，以幫助他們判斷什麼是正確和錯誤的。"
  },
  {
    "word": "assurances",
    "pos": "n.",
    "cn_def": "保證；擔保",
    "en_def": "a positive declaration intended to give confidence or remove doubt",
    "sentence": "Traditional parents wanted firm {{BLANK}} from the school that all fire safety equipment was working well.",
    "cn": "傳統的家長們希望學校能給予明確的保證，確保所有的消防安全設備都在良好運作。"
  },
  {
    "word": "reassurance",
    "pos": "n.",
    "cn_def": "安慰；放心",
    "en_def": "the act of removing someone's doubts or fears, restoring their confidence",
    "sentence": "The doctor's professional opinion provided great {{BLANK}} to the anxious patient before the surgery.",
    "cn": "醫生的專業意見在手術前給了這位焦慮的患者極大的安慰。"
  },
  {
    "word": "tolerance",
    "pos": "n.",
    "cn_def": "寬容；包容力",
    "en_def": "the ability or willingness to tolerate something, especially beliefs you don't agree with",
    "sentence": "Cultivating cultural {{BLANK}} is a fundamental framework for maintaining peace in a modern society.",
    "cn": "培養文化包容力是維持現代社會和平的根本框架。"
  },
  {
    "word": "Intolerant",
    "pos": "adj.",
    "cn_def": "不寬容的；無法容忍的",
    "en_def": "not willing to accept or respect beliefs or behavior that are different from one's own",
    "sentence": "{{BLANK}} people are usually not willing to listen politely to other citizens' diverse political views.",
    "cn": "不寬容的人通常不願意禮貌地傾聽其他公民多元的政治觀點。"
  },
  {
    "word": "deleted",
    "pos": "v.",
    "cn_def": "刪除",
    "en_def": "to remove or erase written text or electronic data completely from a system",
    "sentence": "I accidentally {{BLANK}} my entire academic essay before submitting it to the university portal.",
    "cn": "在將學術論文提交到大學入口網站之前，我不小心刪除了整篇論文。"
  },
  {
    "word": "deletion",
    "pos": "n.",
    "cn_def": "刪除（名詞）",
    "en_def": "the act of removing or erasing written text or electronic data from a system",
    "sentence": "The unexpected {{BLANK}} of critical data files from the company server caused a temporary panic.",
    "cn": "從公司伺服器中意外刪除關鍵資料檔案引起了短暫的恐慌。"
  },
  {
    "word": "psychological",
    "pos": "adj.",
    "cn_def": "心理的；心理學的",
    "en_def": "relating to the mental and emotional state of a person's mind",
    "sentence": "The major hospital has a specialized department that cares for patients' {{BLANK}} health and stability.",
    "cn": "這家大型醫院設有一個專業部門，專門照顧患者的心理健康與穩定。"
  },
  {
    "word": "psychologist",
    "pos": "n.",
    "cn_def": "心理學家",
    "en_def": "an expert or specialist who studies the human mind and psychological behavior",
    "sentence": "The professional {{BLANK}} conducted a thorough investigation into the mental causes of work stress.",
    "cn": "這位專業的心理學家對工作壓力產生的心理原因展開了徹底的調查。"
  },
  {
    "word": "exaggeration",
    "pos": "n.",
    "cn_def": "誇張；誇大",
    "en_def": "a statement that represents something as better or worse than it really is",
    "sentence": "My boss says he is smarter than Einstein, but I am completely sure that is an {{BLANK}}.",
    "cn": "我老闆說他比愛因斯坦更聰明，但我完全可以肯定那是一種誇大其詞。"
  },
  {
    "word": "exaggerate",
    "pos": "v.",
    "cn_def": "誇大；誇張",
    "en_def": "to represent something as being larger, better, or worse than it really is",
    "sentence": "Salesmen sometimes {{BLANK}} the practical benefits of their products to tempt customers into buying them.",
    "cn": "推銷員有時會誇大他們產品的實用好處，以引誘顧客購買牠們。"
  },
  {
    "word": "essentially",
    "pos": "adv.",
    "cn_def": "基本上；實質上",
    "en_def": "fundamentally; basically; in essence or central importance",
    "sentence": "The young band's overnight success is {{BLANK}} due to its massive popularity among high school teenagers.",
    "cn": "這支年輕樂團一夜之間的成功，基本上歸功於牠在高中青少年中的巨大受歡迎程度。"
  },
  {
    "word": "fundamentally",
    "pos": "adv.",
    "cn_def": "根本上；從根本而言",
    "en_def": "in a central or essential way that forms the basic foundation of something",
    "sentence": "The two traditional political leaders have {{BLANK}} different opinions regarding minimum wage regulations.",
    "cn": "這兩位傳統的政治領袖對於最低工資法規持有根本不同的觀點。"
  },
  {
    "word": "conscious",
    "pos": "adj.",
    "cn_def": "有意識的；自覺的",
    "en_def": "awake, alert, and aware of one's surroundings or a specific situation",
    "sentence": "The injured driver was still {{BLANK}} and able to answer the emergency doctor's questions logically.",
    "cn": "受傷的司機當時依然有意識，並且能夠邏輯地回答急診醫生的問題。"
  },
  {
    "word": "unconscious",
    "pos": "adj.",
    "cn_def": "失去知覺的；無意識的",
    "en_def": "not awake or aware of surroundings due to a severe injury, illness, or shock",
    "sentence": "The exhausted hiker was found {{BLANK}} near the crater after suffering from severe dehydration.",
    "cn": "這名力竭的登山客在遭受嚴重脫水後，被發現昏迷在隕石坑附近。"
  },
  {
    "word": "consciousness",
    "pos": "n.",
    "cn_def": "意識；知覺",
    "en_def": "the state of being awake, aware, and able to understand what is happening around you",
    "sentence": "The impact of the massive highway accident caused the passenger to lose {{BLANK}} for several hours.",
    "cn": "重大公路事故的撞擊導致這名乘客失去知覺達數個小時。"
  },
  {
    "word": "unconsciousness",
    "pos": "n.",
    "cn_def": "昏迷狀態；無知覺",
    "en_def": "the state of being deep asleep or completely insensible due to an injury or drug",
    "sentence": "The patient fell into a state of temporary {{BLANK}} shortly after the surgeon injected the medical drug.",
    "cn": "在外科醫生注射醫療藥物後不久，患者便陷入了暫時性的昏迷狀態。"
  },
  {
    "word": "regain consciousness",
    "pos": "phr.",
    "cn_def": "恢復意識；甦醒",
    "en_def": "to wake up or become alert again after being unconscious or in a coma",
    "sentence": "It took approximately forty minutes for the elderly woman to {{BLANK}} after the medical operation.",
    "cn": "這位年長的女士在手術後大約花了四十分鐘才恢復意識。"
  },
  {
    "word": "lose consciousness",
    "pos": "phr.",
    "cn_def": "失去知覺；昏過去",
    "en_def": "to become unconscious or faint because of a lack of oxygen, injury, or pain",
    "sentence": "If a person is deprived of oxygen for more than a few minutes, they will slowly {{BLANK}}.",
    "cn": "如果一個人被剝奪氧氣超過幾分鐘，他們就會慢慢失去知覺。"
  },
  {
    "word": "conscience",
    "pos": "n.",
    "cn_def": "良心；道德心",
    "en_def": "a moral sense of right and wrong that guides a person's behavior and decisions",
    "sentence": "The dishonest businessman's {{BLANK}} troubled him deeply after he committed the act of financial fraud.",
    "cn": "這名不誠實的商人在犯下財務詐欺行為後，他的良心深深刻責著他。"
  },
  {
    "word": "clear conscience",
    "pos": "n.",
    "cn_def": "問心無愧；清白的良心",
    "en_def": "a feeling that you have done nothing immoral, wrong, or harmful to anyone",
    "sentence": "You can maintain a {{BLANK}} if you always treat your matching peer group with absolute honesty.",
    "cn": "如果你總是對你的同儕群體抱持絕對誠實的態度，你就能保持問心無愧。"
  },
  {
    "word": "be fully aware of",
    "pos": "phr.",
    "cn_def": "察覺到...；知道...",
    "en_def": "to have knowledge, understanding, or realization of a specific fact or situation",
    "sentence": "Conservative investors must {{BLANK}} the financial risks before committing their life savings.",
    "cn": "保守的投資人在投入一生積蓄之前，必須完全察覺到財務風險。"
  },
  {
    "word": "beware of",
    "pos": "v phr.",
    "cn_def": "當心...；提防...",
    "en_def": "used to warn someone to be exceptionally careful of a dangerous person, animal, or situation",
    "sentence": "The sign on the fence warns visitors to {{BLANK}} the automated high-voltage electricity grid.",
    "cn": "圍欄上的告示牌警告訪客要當心自動化的高壓電網。"
  },
  {
    "word": "awareness",
    "pos": "n.",
    "cn_def": "意識；察覺（名詞）",
    "en_def": "knowledge or perception of a situation, fact, or important public issue",
    "sentence": "The research institute's study significantly raised public {{BLANK}} regarding the severity of global inflation.",
    "cn": "該研究所的研究顯著提升了公眾對全球通膨嚴重性的意識。"
  },
  {
    "word": "raise awareness",
    "pos": "phr.",
    "cn_def": "提升/喚起意識",
    "en_def": "to increase knowledge, understanding, or public care about a specific social problem",
    "sentence": "The environmental protection group organized a presentation to {{BLANK}} about ocean plastic pollution.",
    "cn": "環境保護團體組織了一場簡報，以喚起大眾對海洋塑膠污染的意識。"
  },
  {
    "word": "indifferent",
    "pos": "adj.",
    "cn_def": "漠不關心的；無所謂的",
    "en_def": "having no particular interest or sympathy; unconcerned or neutral",
    "sentence": "Ted tends to be {{BLANK}} to what his traditional parents are saying when he plays online video games.",
    "cn": "泰德玩線上電子遊戲時，往往對他傳統父母所說的話漠不關心。"
  },
  {
    "word": "indifference",
    "pos": "n.",
    "cn_def": "冷漠；漠不關心",
    "en_def": "lack of interest, concern, or sympathy for a person or situation",
    "sentence": "The politician's apparent {{BLANK}} to the problems of low-income citizens annoyed many voters.",
    "cn": "這位政治家對低收入公民問題的明顯冷漠激怒了許多選民。"
  },
  {
    "word": "precautions",
    "pos": "n.",
    "cn_def": "預防措施；防範",
    "en_def": "a measure taken in advance to prevent something dangerous or unpleasant from happening",
    "sentence": "If you take the right safety {{BLANK}}, you can have an exceptionally safe and marvelous trip abroad.",
    "cn": "如果您採取了正確的安全預防措施，您就可以在國外度過一次格外安全且絕妙的旅行。"
  },
  {
    "word": "take strict precautions",
    "pos": "phr.",
    "cn_def": "採取預防措施",
    "en_def": "to perform specific defensive actions in advance to ensure safety",
    "sentence": "You must {{BLANK}} against insect bites because many of them carry dangerous tropical diseases.",
    "cn": "你必須針對昆蟲叮咬採取嚴格的預防措施，因為其中許多昆蟲攜帶危險的熱帶疾病。"
  },
  {
    "word": "take strict measures",
    "pos": "phr.",
    "cn_def": "採取措施",
    "en_def": "to perform specific official actions or steps in order to achieve a particular goal or solve a problem",
    "sentence": "The city council decided to {{BLANK}} to minimize plastic pollution in the local river systems.",
    "cn": "市議會決定採取嚴格措施，以將當地河流系統中的塑膠污染降到最低。"
  },
  {
    "word": "take immediate action",
    "pos": "phr.",
    "cn_def": "採取行動",
    "en_def": "to do something officially or practically to deal with a severe situation or solve an issue",
    "sentence": "The central government must {{BLANK}} to address the rising inflation rate affecting low-income families.",
    "cn": "中央政府必須立刻採取行動，以解決影響低收入家庭的不斷上升的通膨率。"
  },
  {
    "word": "take the initiative",
    "pos": "phr.",
    "cn_def": "採取主動；帶頭",
    "en_def": "to be the first person to take action or make a decision before others do, showing active leadership",
    "sentence": "An ambitious intern should always {{BLANK}} to learn customizable software frameworks without being explicitly told.",
    "cn": "一名有抱負的實習生應該總是採取主動，在沒有被明確告知的情況下學習客製化的軟體架構。"
  },
  {
    "word": "privacy",
    "pos": "n.",
    "cn_def": "隱私",
    "en_def": "the state of being free from public attention, disturbance, or unauthorized snoopers",
    "sentence": "Maintaining personal {{BLANK}} is very important to Oscar, so don't be surprised if he ignores your questions.",
    "cn": "維持個人隱私對奧斯卡來說非常重要，因此如果他無視你的問題，請不要感到驚訝。"
  },
  {
    "word": "privacy settings",
    "pos": "n.",
    "cn_def": "隱私設定",
    "en_def": "electronic controls that let users restrict who can see their social media data",
    "sentence": "You should adjust your social media {{BLANK}} carefully to keep strangers from snooping on your photos.",
    "cn": "您應該仔細調整您的社群媒體隱私設定，以防止陌生人窺探您的照片。"
  },
  {
    "word": "private",
    "pos": "adj.",
    "cn_def": "私人的；不公開的",
    "en_def": "meant for or restricted to the use of a particular person, group, or class",
    "sentence": "The tech corporation organized a {{BLANK}} conference to discuss the safety features of its automated platform.",
    "cn": "這家科技公司組織了一場私人會議，以討論其自動化平台的安全功能。"
  },
  {
    "word": "in private",
    "pos": "phr.",
    "cn_def": "私底下；不公開地",
    "en_def": "in a place or situation that is hidden from public view; secretly or confidentially",
    "sentence": "The supportive coordinator preferred to talk to the struggling intern {{BLANK}} to protect her feelings.",
    "cn": "這位給予支持的協調員更傾向於私底下與陷入困境的實習生談話，以保護她的感受。"
  },
  {
    "word": "in public",
    "pos": "phr.",
    "cn_def": "公開地；在公共場合",
    "en_def": "in a place or situation where other people are present and can see or hear you",
    "sentence": "The prominent political figure refused to argue about the controversial minimum wage law {{BLANK}}.",
    "cn": "這位著名的政治人物拒絕在公共場合爭論具爭議性的最低工資法案。"
  }
];

const MCQS = [
  {
    "q": "Georgina ______ on Nate for several days to find out exactly where he hid her birthday present.",
    "options": [
      "clear conscience",
      "foul play",
      "privacy settings",
      "spied"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The foreign ______ was caught by security forces before he could give the classified information to his boss.",
    "options": [
      "microphone",
      "tolerance",
      "spy",
      "indifference"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "I wouldn't dare go into that ______ old abandoned house at night without a flashlight.",
    "options": [
      "spooky",
      "aggressive",
      "customized",
      "innocent"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The bright flash of lightning ______ the young puppy, making it hide under the sofa.",
    "options": [
      "deleted",
      "scared",
      "exaggerate",
      "fouled"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The bold burglar was ______ when the family's large guard dog started barking loudly.",
    "options": [
      "scared away",
      "privacy settings",
      "cyber attack",
      "cyber security"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The soccer player got a critical ______ for pushing a defender on the other team during the match.",
    "options": [
      "precautions",
      "foul",
      "indifference",
      "assurances"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Hazardous chemicals from the local chemical factory ______ the clean water in the nearby lake.",
    "options": [
      "exaggerate",
      "deleted",
      "coded",
      "fouled"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "You should never use ______ language when you talk to young children in the school classroom.",
    "options": [
      "spooky",
      "psychological",
      "foul",
      "innocent"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Police investigators suspected ______ after finding the wealthy businessman dead inside his locked office.",
    "options": [
      "foul play",
      "in public",
      "clear conscience",
      "cyber attack"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "This historical building is used ______ for storage, so you can safely put your moving boxes in here.",
    "options": [
      "innocently",
      "mostly",
      "merely",
      "aggressively"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Our house is a complete mess ______ because we are in the middle of moving to Taipei.",
    "options": [
      "scared away",
      "in public",
      "lose consciousness",
      "in large part"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The jury declared that the suspect was completely ______ of the serious financial fraud charges.",
    "options": [
      "conscious",
      "customized",
      "innocent",
      "private"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Linda ______ asked a personal question that accidentally made Kevin feel very uncomfortable and nervous.",
    "options": [
      "innocently",
      "fundamentally",
      "essentially",
      "aggressively"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Some business companies use highly ______ marketing campaigns to capture a larger slice of the market.",
    "options": [
      "conscious",
      "unconscious",
      "aggressive",
      "innocent"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The strange dog barked ______ at the delivery man who was standing near the front gate.",
    "options": [
      "innocently",
      "aggressively",
      "fundamentally",
      "essentially"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The coach praised the young athlete's ______ on the basketball court during the final match.",
    "options": [
      "tolerance",
      "deletion",
      "unconsciousness",
      "aggressiveness"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "John ______ wanted to say he was sorry for his unprofessional behavior at the staff meeting.",
    "options": [
      "merely",
      "fundamentally",
      "mostly",
      "aggressively"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "After the classroom ______ was finally fixed by the tech expert, Reggie went on with his presentation.",
    "options": [
      "consciousness",
      "aggressiveness",
      "code",
      "microphone"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The wealthy executive ordered a ______ automobile with tinted windows and a unique audio system.",
    "options": [
      "Intolerant",
      "foul",
      "customized",
      "aggressive"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The national government formed a specialized team to address recent global ______ threats.",
    "options": [
      "privacy settings",
      "cyber security",
      "in public",
      "take the initiative"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The international bank's server room suffered a major ______ that delayed financial transactions for hours.",
    "options": [
      "beware of",
      "take strict measures",
      "in large part",
      "cyber attack"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "A dedicated team of software developers ______ the new interactive English learning web application.",
    "options": [
      "exaggerate",
      "coded",
      "deleted",
      "scared"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Everyone should have a strict moral ______ that helps them determine what is right and wrong.",
    "options": [
      "code",
      "microphone",
      "deletion",
      "tolerance"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Traditional parents wanted firm ______ from the school that all fire safety equipment was working well.",
    "options": [
      "tolerance",
      "aggressiveness",
      "assurances",
      "precautions"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The doctor's professional opinion provided great ______ to the anxious patient before the surgery.",
    "options": [
      "exaggeration",
      "tolerance",
      "precautions",
      "reassurance"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Cultivating cultural ______ is a fundamental framework for maintaining peace in a modern society.",
    "options": [
      "privacy",
      "unconsciousness",
      "tolerance",
      "indifference"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "______ people are usually not willing to listen politely to other citizens' diverse political views.",
    "options": [
      "indifferent",
      "Intolerant",
      "foul",
      "unconscious"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "I accidentally ______ my entire academic essay before submitting it to the university portal.",
    "options": [
      "deleted",
      "coded",
      "scared",
      "exaggerate"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The unexpected ______ of critical data files from the company server caused a temporary panic.",
    "options": [
      "tolerance",
      "foul",
      "assurances",
      "deletion"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The major hospital has a specialized department that cares for patients' ______ health and stability.",
    "options": [
      "unconscious",
      "psychological",
      "foul",
      "customized"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The professional ______ conducted a thorough investigation into the mental causes of work stress.",
    "options": [
      "exaggeration",
      "privacy",
      "psychologist",
      "microphone"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "My boss says he is smarter than Einstein, but I am completely sure that is an ______.",
    "options": [
      "exaggeration",
      "conscience",
      "precautions",
      "privacy"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "Salesmen sometimes ______ the practical benefits of their products to tempt customers into buying them.",
    "options": [
      "fouled",
      "coded",
      "exaggerate",
      "deleted"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The young band's overnight success is ______ due to its massive popularity among high school teenagers.",
    "options": [
      "essentially",
      "merely",
      "innocently",
      "fundamentally"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "The two traditional political leaders have ______ different opinions regarding minimum wage regulations.",
    "options": [
      "merely",
      "fundamentally",
      "aggressively",
      "essentially"
    ],
    "answer": 1,
    "vocabIndex": 34
  },
  {
    "q": "The injured driver was still ______ and able to answer the emergency doctor's questions logically.",
    "options": [
      "foul",
      "psychological",
      "unconscious",
      "conscious"
    ],
    "answer": 3,
    "vocabIndex": 35
  },
  {
    "q": "The exhausted hiker was found ______ near the crater after suffering from severe dehydration.",
    "options": [
      "spooky",
      "foul",
      "unconscious",
      "conscious"
    ],
    "answer": 2,
    "vocabIndex": 36
  },
  {
    "q": "The impact of the massive highway accident caused the passenger to lose ______ for several hours.",
    "options": [
      "reassurance",
      "consciousness",
      "awareness",
      "exaggeration"
    ],
    "answer": 1,
    "vocabIndex": 37
  },
  {
    "q": "The patient fell into a state of temporary ______ shortly after the surgeon injected the medical drug.",
    "options": [
      "unconsciousness",
      "aggressiveness",
      "exaggeration",
      "psychologist"
    ],
    "answer": 0,
    "vocabIndex": 38
  },
  {
    "q": "It took approximately forty minutes for the elderly woman to ______ after the medical operation.",
    "options": [
      "cyber security",
      "foul play",
      "cyber attack",
      "regain consciousness"
    ],
    "answer": 3,
    "vocabIndex": 39
  },
  {
    "q": "If a person is deprived of oxygen for more than a few minutes, they will slowly ______.",
    "options": [
      "privacy settings",
      "in public",
      "lose consciousness",
      "clear conscience"
    ],
    "answer": 2,
    "vocabIndex": 40
  },
  {
    "q": "The dishonest businessman's ______ troubled him deeply after he committed the act of financial fraud.",
    "options": [
      "conscience",
      "consciousness",
      "psychologist",
      "awareness"
    ],
    "answer": 0,
    "vocabIndex": 41
  },
  {
    "q": "You can maintain a ______ if you always treat your matching peer group with absolute honesty.",
    "options": [
      "take immediate action",
      "clear conscience",
      "take strict measures",
      "be fully aware of"
    ],
    "answer": 1,
    "vocabIndex": 42
  },
  {
    "q": "Conservative investors must ______ the financial risks before committing their life savings.",
    "options": [
      "cyber security",
      "take the initiative",
      "lose consciousness",
      "be fully aware of"
    ],
    "answer": 3,
    "vocabIndex": 43
  },
  {
    "q": "The sign on the fence warns visitors to ______ the automated high-voltage electricity grid.",
    "options": [
      "be fully aware of",
      "regain consciousness",
      "beware of",
      "take immediate action"
    ],
    "answer": 2,
    "vocabIndex": 44
  },
  {
    "q": "The research institute's study significantly raised public ______ regarding the severity of global inflation.",
    "options": [
      "awareness",
      "microphone",
      "assurances",
      "psychologist"
    ],
    "answer": 0,
    "vocabIndex": 45
  },
  {
    "q": "The environmental protection group organized a presentation to ______ about ocean plastic pollution.",
    "options": [
      "clear conscience",
      "raise awareness",
      "cyber security",
      "lose consciousness"
    ],
    "answer": 1,
    "vocabIndex": 46
  },
  {
    "q": "Ted tends to be ______ to what his traditional parents are saying when he plays online video games.",
    "options": [
      "foul",
      "customized",
      "spooky",
      "indifferent"
    ],
    "answer": 3,
    "vocabIndex": 47
  },
  {
    "q": "The politician's apparent ______ to the problems of low-income citizens annoyed many voters.",
    "options": [
      "privacy",
      "code",
      "indifference",
      "reassurance"
    ],
    "answer": 2,
    "vocabIndex": 48
  },
  {
    "q": "If you take the right safety ______, you can have an exceptionally safe and marvelous trip abroad.",
    "options": [
      "assurances",
      "precautions",
      "conscience",
      "awareness"
    ],
    "answer": 1,
    "vocabIndex": 49
  },
  {
    "q": "You must ______ against insect bites because many of them carry dangerous tropical diseases.",
    "options": [
      "take strict precautions",
      "lose consciousness",
      "cyber security",
      "take the initiative"
    ],
    "answer": 0,
    "vocabIndex": 50
  },
  {
    "q": "The city council decided to ______ to minimize plastic pollution in the local river systems.",
    "options": [
      "raise awareness",
      "beware of",
      "be fully aware of",
      "take strict measures"
    ],
    "answer": 3,
    "vocabIndex": 51
  },
  {
    "q": "The central government must ______ to address the rising inflation rate affecting low-income families.",
    "options": [
      "take the initiative",
      "take immediate action",
      "in private",
      "beware of"
    ],
    "answer": 1,
    "vocabIndex": 52
  },
  {
    "q": "An ambitious intern should always ______ to learn customizable software frameworks without being explicitly told.",
    "options": [
      "take the initiative",
      "raise awareness",
      "clear conscience",
      "take strict precautions"
    ],
    "answer": 0,
    "vocabIndex": 53
  },
  {
    "q": "Maintaining personal ______ is very important to Oscar, so don't be surprised if he ignores your questions.",
    "options": [
      "tolerance",
      "indifference",
      "privacy",
      "reassurance"
    ],
    "answer": 2,
    "vocabIndex": 54
  },
  {
    "q": "You should adjust your social media ______ carefully to keep strangers from snooping on your photos.",
    "options": [
      "lose consciousness",
      "spied",
      "scared away",
      "privacy settings"
    ],
    "answer": 3,
    "vocabIndex": 55
  },
  {
    "q": "The tech corporation organized a ______ conference to discuss the safety features of its automated platform.",
    "options": [
      "Intolerant",
      "private",
      "unconscious",
      "customized"
    ],
    "answer": 1,
    "vocabIndex": 56
  },
  {
    "q": "The supportive coordinator preferred to talk to the struggling intern ______ to protect her feelings.",
    "options": [
      "take strict measures",
      "in public",
      "take the initiative",
      "in private"
    ],
    "answer": 3,
    "vocabIndex": 57
  },
  {
    "q": "The prominent political figure refused to argue about the controversial minimum wage law ______.",
    "options": [
      "in public",
      "spied",
      "take immediate action",
      "cyber attack"
    ],
    "answer": 0,
    "vocabIndex": 58
  }
];

const LOOKUP = {
  "spied": {
    "pos": "v.",
    "en_def": "to watch someone or something secretly, often to discover confidential information",
    "cn_def": "暗中監視；看見",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to watch someone or something secretly, often to discover confidential information",
        "cn_def": "暗中監視；看見"
      }
    ]
  },
  "spy": {
    "pos": "v.",
    "en_def": "to watch someone or something secretly, often to discover confidential information",
    "cn_def": "暗中監視；看見",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to watch someone or something secretly, often to discover confidential information",
        "cn_def": "暗中監視；看見"
      },
      {
        "pos": "n.",
        "en_def": "a person who secretly collects and reports information about the activities of a rival",
        "cn_def": "間諜；密探"
      }
    ]
  },
  "spooky": {
    "pos": "adj.",
    "en_def": "strange and frightening in a way that suggests the presence of ghosts",
    "cn_def": "幽靈般的；陰森恐怖的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "strange and frightening in a way that suggests the presence of ghosts",
        "cn_def": "幽靈般的；陰森恐怖的"
      }
    ]
  },
  "scare": {
    "pos": "v.",
    "en_def": "to frighten a person or animal suddenly, making them feel afraid",
    "cn_def": "驚嚇；嚇跑",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to frighten a person or animal suddenly, making them feel afraid",
        "cn_def": "驚嚇；嚇跑"
      }
    ]
  },
  "scared": {
    "pos": "v.",
    "en_def": "to frighten a person or animal suddenly, making them feel afraid",
    "cn_def": "驚嚇；嚇跑",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to frighten a person or animal suddenly, making them feel afraid",
        "cn_def": "驚嚇；嚇跑"
      }
    ]
  },
  "scared away": {
    "pos": "phr.",
    "en_def": "to make a person or animal leave immediately by frightening them",
    "cn_def": "嚇跑；驅逐",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make a person or animal leave immediately by frightening them",
        "cn_def": "嚇跑；驅逐"
      }
    ]
  },
  "scare away": {
    "pos": "phr.",
    "en_def": "to make a person or animal leave immediately by frightening them",
    "cn_def": "嚇跑；驅逐",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make a person or animal leave immediately by frightening them",
        "cn_def": "嚇跑；驅逐"
      }
    ]
  },
  "foul": {
    "pos": "n.",
    "en_def": "an unfair or illegal act against an opponent in a sports game",
    "cn_def": "（體育比賽）犯規",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an unfair or illegal act against an opponent in a sports game",
        "cn_def": "（體育比賽）犯規"
      },
      {
        "pos": "v.",
        "en_def": "to make something dirty, impure, or polluted, especially with chemicals",
        "cn_def": "污染；弄髒"
      },
      {
        "pos": "adj.",
        "en_def": "extremely unpleasant or offensive; containing bad or rude language",
        "cn_def": "惡臭的；粗俗的（髒話）"
      }
    ]
  },
  "fouled": {
    "pos": "v.",
    "en_def": "to make something dirty, impure, or polluted, especially with chemicals",
    "cn_def": "污染；弄髒",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make something dirty, impure, or polluted, especially with chemicals",
        "cn_def": "污染；弄髒"
      }
    ]
  },
  "foul play": {
    "pos": "n.",
    "en_def": "criminal action or violent behavior, typically involving a murder",
    "cn_def": "謀殺；不正當手段",
    "combined": [
      {
        "pos": "n.",
        "en_def": "criminal action or violent behavior, typically involving a murder",
        "cn_def": "謀殺；不正當手段"
      }
    ]
  },
  "mostly": {
    "pos": "adv.",
    "en_def": "mainly; for the most part; in most cases or scenarios",
    "cn_def": "主要地；大部分地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "mainly; for the most part; in most cases or scenarios",
        "cn_def": "主要地；大部分地"
      }
    ]
  },
  "in large part": {
    "pos": "phr.",
    "en_def": "to a significant degree; mostly due to a specific reason",
    "cn_def": "在很大程度上（等同於 mostly）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to a significant degree; mostly due to a specific reason",
        "cn_def": "在很大程度上（等同於 mostly）"
      }
    ]
  },
  "in large part / in great part": {
    "pos": "phr.",
    "en_def": "to a significant degree; mostly due to a specific reason",
    "cn_def": "在很大程度上（等同於 mostly）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to a significant degree; mostly due to a specific reason",
        "cn_def": "在很大程度上（等同於 mostly）"
      }
    ]
  },
  "innocent": {
    "pos": "adj.",
    "en_def": "not guilty of a crime; naive or lacking knowledge of evil or harm",
    "cn_def": "無罪的；天真的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not guilty of a crime; naive or lacking knowledge of evil or harm",
        "cn_def": "無罪的；天真的"
      }
    ]
  },
  "innocently": {
    "pos": "adv.",
    "en_def": "in a naive, harmless, or simple manner without intending any harm",
    "cn_def": "天真地；無意地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a naive, harmless, or simple manner without intending any harm",
        "cn_def": "天真地；無意地"
      }
    ]
  },
  "aggressive": {
    "pos": "adj.",
    "en_def": "behaving in a hostile or forceful way, ready to fight or argue",
    "cn_def": "具攻擊性的；好勝的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "behaving in a hostile or forceful way, ready to fight or argue",
        "cn_def": "具攻擊性的；好勝的"
      }
    ]
  },
  "aggressively": {
    "pos": "adv.",
    "en_def": "in a hostile, forceful, or competitive manner that shows a readiness to attack",
    "cn_def": "具攻擊性地；氣勢洶洶地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a hostile, forceful, or competitive manner that shows a readiness to attack",
        "cn_def": "具攻擊性地；氣勢洶洶地"
      }
    ]
  },
  "aggressiveness": {
    "pos": "n.",
    "en_def": "hostile or forceful behavior, or a strong readiness to compete aggressively",
    "cn_def": "攻擊性；好勝心",
    "combined": [
      {
        "pos": "n.",
        "en_def": "hostile or forceful behavior, or a strong readiness to compete aggressively",
        "cn_def": "攻擊性；好勝心"
      }
    ]
  },
  "merely": {
    "pos": "adv.",
    "en_def": "just; only; simply and nothing more than what is specified",
    "cn_def": "僅僅；只不過",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "just; only; simply and nothing more than what is specified",
        "cn_def": "僅僅；只不過"
      }
    ]
  },
  "microphone": {
    "pos": "n.",
    "en_def": "an electronic device used for making spoken sounds louder or recording them",
    "cn_def": "麥克風",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an electronic device used for making spoken sounds louder or recording them",
        "cn_def": "麥克風"
      }
    ]
  },
  "customized": {
    "pos": "adj.",
    "en_def": "modified or built according to a choice customer's specific requirements",
    "cn_def": "客製化的；訂製的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "modified or built according to a choice customer's specific requirements",
        "cn_def": "客製化的；訂製的"
      }
    ]
  },
  "cyber security": {
    "pos": "n.",
    "en_def": "the state of being protected against the criminal or unauthorized use of electronic data",
    "cn_def": "網路安全",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being protected against the criminal or unauthorized use of electronic data",
        "cn_def": "網路安全"
      }
    ]
  },
  "cyber attack": {
    "pos": "n.",
    "en_def": "an attempt by hackers to damage or destroy a computer network or system",
    "cn_def": "網路攻擊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an attempt by hackers to damage or destroy a computer network or system",
        "cn_def": "網路攻擊"
      }
    ]
  },
  "coded": {
    "pos": "v.",
    "en_def": "to write computer programs or software using a system of technical laws",
    "cn_def": "編寫代碼；寫程式",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to write computer programs or software using a system of technical laws",
        "cn_def": "編寫代碼；寫程式"
      }
    ]
  },
  "code": {
    "pos": "v.",
    "en_def": "to write computer programs or software using a system of technical laws",
    "cn_def": "編寫代碼；寫程式",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to write computer programs or software using a system of technical laws",
        "cn_def": "編寫代碼；寫程式"
      },
      {
        "pos": "n.",
        "en_def": "a system of words, letters, or symbols used to represent secrets; a set of moral laws",
        "cn_def": "密碼；道德準則；代碼"
      }
    ]
  },
  "assurance": {
    "pos": "n.",
    "en_def": "a positive declaration intended to give confidence or remove doubt",
    "cn_def": "保證；擔保",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a positive declaration intended to give confidence or remove doubt",
        "cn_def": "保證；擔保"
      }
    ]
  },
  "assurances": {
    "pos": "n.",
    "en_def": "a positive declaration intended to give confidence or remove doubt",
    "cn_def": "保證；擔保",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a positive declaration intended to give confidence or remove doubt",
        "cn_def": "保證；擔保"
      }
    ]
  },
  "reassurance": {
    "pos": "n.",
    "en_def": "the act of removing someone's doubts or fears, restoring their confidence",
    "cn_def": "安慰；放心",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of removing someone's doubts or fears, restoring their confidence",
        "cn_def": "安慰；放心"
      }
    ]
  },
  "tolerance": {
    "pos": "n.",
    "en_def": "the ability or willingness to tolerate something, especially beliefs you don't agree with",
    "cn_def": "寬容；包容力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability or willingness to tolerate something, especially beliefs you don't agree with",
        "cn_def": "寬容；包容力"
      }
    ]
  },
  "intolerant": {
    "pos": "adj.",
    "en_def": "not willing to accept or respect beliefs or behavior that are different from one's own",
    "cn_def": "不寬容的；無法容忍的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not willing to accept or respect beliefs or behavior that are different from one's own",
        "cn_def": "不寬容的；無法容忍的"
      }
    ]
  },
  "delete": {
    "pos": "v.",
    "en_def": "to remove or erase written text or electronic data completely from a system",
    "cn_def": "刪除",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to remove or erase written text or electronic data completely from a system",
        "cn_def": "刪除"
      }
    ]
  },
  "deleted": {
    "pos": "v.",
    "en_def": "to remove or erase written text or electronic data completely from a system",
    "cn_def": "刪除",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to remove or erase written text or electronic data completely from a system",
        "cn_def": "刪除"
      }
    ]
  },
  "deletion": {
    "pos": "n.",
    "en_def": "the act of removing or erasing written text or electronic data from a system",
    "cn_def": "刪除（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of removing or erasing written text or electronic data from a system",
        "cn_def": "刪除（名詞）"
      }
    ]
  },
  "psychological": {
    "pos": "adj.",
    "en_def": "relating to the mental and emotional state of a person's mind",
    "cn_def": "心理的；心理學的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to the mental and emotional state of a person's mind",
        "cn_def": "心理的；心理學的"
      }
    ]
  },
  "psychologist": {
    "pos": "n.",
    "en_def": "an expert or specialist who studies the human mind and psychological behavior",
    "cn_def": "心理學家",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an expert or specialist who studies the human mind and psychological behavior",
        "cn_def": "心理學家"
      }
    ]
  },
  "exaggeration": {
    "pos": "n.",
    "en_def": "a statement that represents something as better or worse than it really is",
    "cn_def": "誇張；誇大",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a statement that represents something as better or worse than it really is",
        "cn_def": "誇張；誇大"
      }
    ]
  },
  "exaggerate": {
    "pos": "v.",
    "en_def": "to represent something as being larger, better, or worse than it really is",
    "cn_def": "誇大；誇張",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to represent something as being larger, better, or worse than it really is",
        "cn_def": "誇大；誇張"
      }
    ]
  },
  "essentially": {
    "pos": "adv.",
    "en_def": "fundamentally; basically; in essence or central importance",
    "cn_def": "基本上；實質上",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "fundamentally; basically; in essence or central importance",
        "cn_def": "基本上；實質上"
      }
    ]
  },
  "fundamentally": {
    "pos": "adv.",
    "en_def": "in a central or essential way that forms the basic foundation of something",
    "cn_def": "根本上；從根本而言",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a central or essential way that forms the basic foundation of something",
        "cn_def": "根本上；從根本而言"
      }
    ]
  },
  "conscious": {
    "pos": "adj.",
    "en_def": "awake, alert, and aware of one's surroundings or a specific situation",
    "cn_def": "有意識的；自覺的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "awake, alert, and aware of one's surroundings or a specific situation",
        "cn_def": "有意識的；自覺的"
      }
    ]
  },
  "unconscious": {
    "pos": "adj.",
    "en_def": "not awake or aware of surroundings due to a severe injury, illness, or shock",
    "cn_def": "失去知覺的；無意識的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not awake or aware of surroundings due to a severe injury, illness, or shock",
        "cn_def": "失去知覺的；無意識的"
      }
    ]
  },
  "consciousness": {
    "pos": "n.",
    "en_def": "the state of being awake, aware, and able to understand what is happening around you",
    "cn_def": "意識；知覺",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being awake, aware, and able to understand what is happening around you",
        "cn_def": "意識；知覺"
      }
    ]
  },
  "unconsciousness": {
    "pos": "n.",
    "en_def": "the state of being deep asleep or completely insensible due to an injury or drug",
    "cn_def": "昏迷狀態；無知覺",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being deep asleep or completely insensible due to an injury or drug",
        "cn_def": "昏迷狀態；無知覺"
      }
    ]
  },
  "regain consciousness": {
    "pos": "phr.",
    "en_def": "to wake up or become alert again after being unconscious or in a coma",
    "cn_def": "恢復意識；甦醒",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to wake up or become alert again after being unconscious or in a coma",
        "cn_def": "恢復意識；甦醒"
      }
    ]
  },
  "lose consciousness": {
    "pos": "phr.",
    "en_def": "to become unconscious or faint because of a lack of oxygen, injury, or pain",
    "cn_def": "失去知覺；昏過去",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to become unconscious or faint because of a lack of oxygen, injury, or pain",
        "cn_def": "失去知覺；昏過去"
      }
    ]
  },
  "conscience": {
    "pos": "n.",
    "en_def": "a moral sense of right and wrong that guides a person's behavior and decisions",
    "cn_def": "良心；道德心",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a moral sense of right and wrong that guides a person's behavior and decisions",
        "cn_def": "良心；道德心"
      }
    ]
  },
  "clear conscience": {
    "pos": "n.",
    "en_def": "a feeling that you have done nothing immoral, wrong, or harmful to anyone",
    "cn_def": "問心無愧；清白的良心",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling that you have done nothing immoral, wrong, or harmful to anyone",
        "cn_def": "問心無愧；清白的良心"
      }
    ]
  },
  "be fully aware of": {
    "pos": "phr.",
    "en_def": "to have knowledge, understanding, or realization of a specific fact or situation",
    "cn_def": "察覺到...；知道...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to have knowledge, understanding, or realization of a specific fact or situation",
        "cn_def": "察覺到...；知道..."
      }
    ]
  },
  "be aware of": {
    "pos": "phr.",
    "en_def": "to have knowledge, understanding, or realization of a specific fact or situation",
    "cn_def": "察覺到...；知道...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to have knowledge, understanding, or realization of a specific fact or situation",
        "cn_def": "察覺到...；知道..."
      }
    ]
  },
  "beware of": {
    "pos": "v phr.",
    "en_def": "used to warn someone to be exceptionally careful of a dangerous person, animal, or situation",
    "cn_def": "當心...；提防...",
    "combined": [
      {
        "pos": "v phr.",
        "en_def": "used to warn someone to be exceptionally careful of a dangerous person, animal, or situation",
        "cn_def": "當心...；提防..."
      }
    ]
  },
  "awareness": {
    "pos": "n.",
    "en_def": "knowledge or perception of a situation, fact, or important public issue",
    "cn_def": "意識；察覺（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "knowledge or perception of a situation, fact, or important public issue",
        "cn_def": "意識；察覺（名詞）"
      }
    ]
  },
  "raise awareness": {
    "pos": "phr.",
    "en_def": "to increase knowledge, understanding, or public care about a specific social problem",
    "cn_def": "提升/喚起意識",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to increase knowledge, understanding, or public care about a specific social problem",
        "cn_def": "提升/喚起意識"
      }
    ]
  },
  "indifferent": {
    "pos": "adj.",
    "en_def": "having no particular interest or sympathy; unconcerned or neutral",
    "cn_def": "漠不關心的；無所謂的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having no particular interest or sympathy; unconcerned or neutral",
        "cn_def": "漠不關心的；無所謂的"
      }
    ]
  },
  "indifference": {
    "pos": "n.",
    "en_def": "lack of interest, concern, or sympathy for a person or situation",
    "cn_def": "冷漠；漠不關心",
    "combined": [
      {
        "pos": "n.",
        "en_def": "lack of interest, concern, or sympathy for a person or situation",
        "cn_def": "冷漠；漠不關心"
      }
    ]
  },
  "precautions": {
    "pos": "n.",
    "en_def": "a measure taken in advance to prevent something dangerous or unpleasant from happening",
    "cn_def": "預防措施；防範",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a measure taken in advance to prevent something dangerous or unpleasant from happening",
        "cn_def": "預防措施；防範"
      }
    ]
  },
  "precaution": {
    "pos": "n.",
    "en_def": "a measure taken in advance to prevent something dangerous or unpleasant from happening",
    "cn_def": "預防措施；防範",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a measure taken in advance to prevent something dangerous or unpleasant from happening",
        "cn_def": "預防措施；防範"
      }
    ]
  },
  "take strict precautions": {
    "pos": "phr.",
    "en_def": "to perform specific defensive actions in advance to ensure safety",
    "cn_def": "採取預防措施",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to perform specific defensive actions in advance to ensure safety",
        "cn_def": "採取預防措施"
      }
    ]
  },
  "take precautions": {
    "pos": "phr.",
    "en_def": "to perform specific defensive actions in advance to ensure safety",
    "cn_def": "採取預防措施",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to perform specific defensive actions in advance to ensure safety",
        "cn_def": "採取預防措施"
      }
    ]
  },
  "take strict measures": {
    "pos": "phr.",
    "en_def": "to perform specific official actions or steps in order to achieve a particular goal or solve a problem",
    "cn_def": "採取措施",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to perform specific official actions or steps in order to achieve a particular goal or solve a problem",
        "cn_def": "採取措施"
      }
    ]
  },
  "take measures": {
    "pos": "phr.",
    "en_def": "to perform specific official actions or steps in order to achieve a particular goal or solve a problem",
    "cn_def": "採取措施",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to perform specific official actions or steps in order to achieve a particular goal or solve a problem",
        "cn_def": "採取措施"
      }
    ]
  },
  "take action": {
    "pos": "phr.",
    "en_def": "to do something officially or practically to deal with a severe situation or solve an issue",
    "cn_def": "採取行動",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to do something officially or practically to deal with a severe situation or solve an issue",
        "cn_def": "採取行動"
      }
    ]
  },
  "take immediate action": {
    "pos": "phr.",
    "en_def": "to do something officially or practically to deal with a severe situation or solve an issue",
    "cn_def": "採取行動",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to do something officially or practically to deal with a severe situation or solve an issue",
        "cn_def": "採取行動"
      }
    ]
  },
  "take the initiative": {
    "pos": "phr.",
    "en_def": "to be the first person to take action or make a decision before others do, showing active leadership",
    "cn_def": "採取主動；帶頭",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be the first person to take action or make a decision before others do, showing active leadership",
        "cn_def": "採取主動；帶頭"
      }
    ]
  },
  "privacy": {
    "pos": "n.",
    "en_def": "the state of being free from public attention, disturbance, or unauthorized snoopers",
    "cn_def": "隱私",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being free from public attention, disturbance, or unauthorized snoopers",
        "cn_def": "隱私"
      }
    ]
  },
  "privacy setting": {
    "pos": "n.",
    "en_def": "electronic controls that let users restrict who can see their social media data",
    "cn_def": "隱私設定",
    "combined": [
      {
        "pos": "n.",
        "en_def": "electronic controls that let users restrict who can see their social media data",
        "cn_def": "隱私設定"
      }
    ]
  },
  "privacy settings": {
    "pos": "n.",
    "en_def": "electronic controls that let users restrict who can see their social media data",
    "cn_def": "隱私設定",
    "combined": [
      {
        "pos": "n.",
        "en_def": "electronic controls that let users restrict who can see their social media data",
        "cn_def": "隱私設定"
      }
    ]
  },
  "private": {
    "pos": "adj.",
    "en_def": "meant for or restricted to the use of a particular person, group, or class",
    "cn_def": "私人的；不公開的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "meant for or restricted to the use of a particular person, group, or class",
        "cn_def": "私人的；不公開的"
      }
    ]
  },
  "in private": {
    "pos": "phr.",
    "en_def": "in a place or situation that is hidden from public view; secretly or confidentially",
    "cn_def": "私底下；不公開地",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "in a place or situation that is hidden from public view; secretly or confidentially",
        "cn_def": "私底下；不公開地"
      }
    ]
  },
  "in public": {
    "pos": "phr.",
    "en_def": "in a place or situation where other people are present and can see or hear you",
    "cn_def": "公開地；在公共場合",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "in a place or situation where other people are present and can see or hear you",
        "cn_def": "公開地；在公共場合"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
