// Unit 10 Quiz Data: therapy – depressed
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Basic U10 - therapy – depressed",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "therapy",
    "pos": "n.",
    "cn_def": "治療；療法",
    "en_def": "treatment intended to relieve or heal a disorder.",
    "sentence": "Doris severely hurt her muscles while playing sports, so she needed intensive physical {{BLANK}} to help heal them.",
    "cn": "朵莉絲在做運動時嚴重拉傷了肌肉，所以她需要密集的物理治療來幫助復原。"
  },
  {
    "word": "physical therapy",
    "pos": "phr.",
    "cn_def": "物理治療",
    "en_def": "the treatment of disease, injury, or deformity by physical methods such as massage or exercise.",
    "sentence": "After his serious car accident, the young man had to attend {{BLANK}} twice a week for several months.",
    "cn": "在嚴重的車禍後，這名年輕人必須連續幾個月每週參加兩次物理治療。"
  },
  {
    "word": "ancient",
    "pos": "adj.",
    "cn_def": "古老的",
    "en_def": "belonging to the very distant past and no longer in existence.",
    "sentence": "The ambitious university professor was extremely excited when he discovered the ruined buildings of a magnificent {{BLANK}} city.",
    "cn": "當這位雄心勃勃的大學教授發現一座宏偉古老的城市的建築遺跡時，他感到極度興奮。"
  },
  {
    "word": "elderly",
    "pos": "adj.",
    "cn_def": "年長的",
    "en_def": "old or aging.",
    "sentence": "Tim is a very devoted son who makes sure to visit his {{BLANK}} parents every single Sunday morning.",
    "cn": "提姆是個非常孝順的兒子，他確保每個星期天早上都會去探望他年長的父母。"
  },
  {
    "word": "the elderly",
    "pos": "n.",
    "cn_def": "年長者（集合名詞）",
    "en_def": "old people considered as a group.",
    "sentence": "The local government recently started a brand new social program specifically designed to care for {{BLANK}} in our community.",
    "cn": "當地政府最近啟動了一個全新的社會計畫，專門設計來照顧我們社區的年長者。"
  },
  {
    "word": "aged",
    "pos": "adj.",
    "cn_def": "...歲的；年老的",
    "en_def": "having lived for a specified length of time; having grown old.",
    "sentence": "Mike dutifully looks after his {{BLANK}} parents who can no longer comfortably take care of themselves at home.",
    "cn": "麥克盡責地照顧他那無法再舒適地在家自理的年老的父母。"
  },
  {
    "word": "middle-aged",
    "pos": "adj.",
    "cn_def": "中年的",
    "en_def": "Being in the period of life between youth and old age, typically from about 40 to 60 years old.",
    "sentence": "The {{BLANK}} man decided to join a local marathon to stay healthy and energetic as he approached his fifties.",
    "cn": "這位中年的男子決定參加當地的馬拉松比賽，以便在接近五十歲時保持健康與活力。"
  },
  {
    "word": "middle class",
    "pos": "n. [C]",
    "cn_def": "中產階級",
    "en_def": "A social group between the rich and the poor, including professional and business people.",
    "sentence": "Most families living in this suburban neighborhood belong to the {{BLANK}}, earning a stable income and owning their homes.",
    "cn": "居住在這個郊區社區的大多數家庭都屬於中產階級，擁有穩定的收入並擁有自己的房子。"
  },
  {
    "word": "aging",
    "pos": "adj.",
    "cn_def": "變老的、高齡化的、老化的",
    "en_def": "Becoming older, or showing signs of growing old.",
    "sentence": "The government is building more nursing homes to provide better medical care for the country's {{BLANK}} population.",
    "cn": "政府正在建造更多養老院，以便為該國高齡化的（變老的）人口提供更好的醫療照護。"
  },
  {
    "word": "ageing society",
    "pos": "n.",
    "cn_def": "高齡化社會",
    "en_def": "A society where the average age of the population increases because of falling birth rates and longer life-spans.",
    "sentence": "Taiwan has officially become an {{BLANK}}, which means there are fewer young workers to support the retired population.",
    "cn": "台灣已正式成為一個高齡化社會，這意味著能扶養退休人口的年輕勞動力變少了。"
  },
  {
    "word": "senior",
    "pos": "n. / adj.",
    "cn_def": "年長者；資深的",
    "en_def": "an older person; of a more advanced age.",
    "sentence": "The local movie theater kindly offers much cheaper movie tickets to students and {{BLANK}} during the weekday afternoons.",
    "cn": "當地電影院親切地在平日下午為學生和年長者提供便宜許多的電影票。"
  },
  {
    "word": "senior citizen",
    "pos": "n.",
    "cn_def": "老年人、銀髮族",
    "en_def": "An older person, usually someone who has retired from work (often over 65).",
    "sentence": "Every {{BLANK}} living in this city can take public transportation for free by showing their special identity card.",
    "cn": "居住在這座城市的每位老年人（銀髮族）大只要出示他們的特殊身分證，就可以免費搭乘大眾運輸。"
  },
  {
    "word": "is senior to",
    "pos": "phr.",
    "cn_def": "職位比…高、資歷比…深",
    "en_def": "To have a higher rank, position, or status than someone else in an organization or company.",
    "sentence": "Although Marcus is much younger than Kevin, he {{BLANK}} Kevin because he was promoted to manager last year.",
    "cn": "雖然馬庫斯比凱文年輕得多，但在公司裡他的職位比凱文高（資歷比凱文深），因為他去年被晉升為經理。"
  },
  {
    "word": "is junior to",
    "pos": "phr.",
    "cn_def": "職位比…低、資歷比…淺",
    "en_def": "To have a lower rank, position, or status than someone else in an organization or company.",
    "sentence": "Since Chloe just joined the accounting department last week, she {{BLANK}} everyone else in terms of work experience.",
    "cn": "由於克洛伊上週才加入會計部，就工作經驗而言，她的職位比其他人低（資歷比其他人淺）。"
  },
  {
    "word": "limit",
    "pos": "v. n.",
    "cn_def": "限制；極限",
    "en_def": "a point or level beyond which something does not or may not extend or pass.",
    "sentence": "If you genuinely want to lose some extra weight, you must set a {{BLANK}} the amount of sweet food you eat.",
    "cn": "如果你真的想減掉一些多餘的體重，你必須嚴格制定醣類攝取限制量和限制你吃的甜食數量。"
  },
  {
    "word": "set a speed limit",
    "pos": "phr.",
    "cn_def": "設定速限",
    "en_def": "to establish a legal maximum or minimum speed allowed for vehicles traveling on a specific road",
    "sentence": "The city council decided to {{BLANK}} along the busy residential area to minimize traffic accidents and ensure pedestrian safety.",
    "cn": "市議會決定沿著繁忙的住宅區設定速限，以減少交通事故並確保行人安全。"
  },
  {
    "word": "limitation",
    "pos": "n.",
    "cn_def": "限制；極限",
    "en_def": "a limiting rule or circumstance; a restriction.",
    "sentence": "His only noticeable {{BLANK}} as a professional fashion model is that he is actually a little bit too short.",
    "cn": "他作為職業時裝模特兒唯一明顯的限制，是他實際上稍微太矮了一點。"
  },
  {
    "word": "strict limitation",
    "pos": "phr.",
    "cn_def": "嚴格的限制",
    "en_def": "a severe or unyielding restriction.",
    "sentence": "Because of the terrible water shortage, the city council imposed a {{BLANK}} on washing cars and watering gardens.",
    "cn": "因為可怕的水資源短缺，市議會對洗車和澆花實施了嚴格的限制。"
  },
  {
    "word": "restrict",
    "pos": "v.",
    "cn_def": "限制；限定（動詞）",
    "en_def": "to put a limit on someone or something, or to keep something within strict legal boundaries",
    "sentence": "The government decided to {{BLANK}} civilian access to the military zone to protect top-secret scientific experiments.",
    "cn": "政府決定限制平民進入軍事管制區，以保護絕密的科學實驗。"
  },
  {
    "word": "restriction",
    "pos": "n.",
    "cn_def": "限制（名詞）",
    "en_def": "an official rule, statute, or law that limits what people can do or how a total system operates",
    "sentence": "The prestigious law firm thoroughly evaluated the new trade {{BLANK}} imposed on imported goods at the port.",
    "cn": "這家聲譽卓著的法律事務所徹底評估了港口對進口貨物所施加的新貿易限制。"
  },
  {
    "word": "ban private vehicles from",
    "pos": "phr.",
    "cn_def": "禁止...做...",
    "en_def": "to officially or legally forbid someone from doing something, entering a place, or using a service",
    "sentence": "The strict city council intends to {{BLANK}} entering the crowded commercial area during rush hours.",
    "cn": "嚴格的市議會打算在尖峰時段禁止私人車輛進入擁擠的商業區。"
  },
  {
    "word": "lift the ban",
    "pos": "phr.",
    "cn_def": "解除禁令",
    "en_def": "to officially remove or cancel a legal prohibition or restriction that was previously established",
    "sentence": "The president decided to {{BLANK}} on foreign technology products after the trade agreement went smoothly.",
    "cn": "在貿易協定順利進行後，總統決定解除對外國科技產品的禁令。"
  },
  {
    "word": "prohibit",
    "pos": "v.",
    "cn_def": "禁止；不准（動詞）",
    "en_def": "to officially or legally forbid something by a law, rule, statue, or authoritative decree",
    "sentence": "New traffic regulations strictly {{BLANK}} the parking of any private vehicle along the narrow streets of the residential area.",
    "cn": "新的交通法規嚴格禁止在住宅區的狹窄街道上停放任何私人車輛。"
  },
  {
    "word": "prohibit unauthorized staff from",
    "pos": "phr.",
    "cn_def": "禁止...做...",
    "en_def": "to formally prevent or legally stop an individual or group from doing a specific activity",
    "sentence": "The strict company policy will {{BLANK}} gaining access to the secure database framework of the corporation.",
    "cn": "公司嚴格的政策將禁止未經授權的人員獲取公司安全資料庫架構的存取權。"
  },
  {
    "word": "inhibit the logistics workers from",
    "pos": "phr.",
    "cn_def": "阻礙...做...；抑制...",
    "en_def": "to prevent, slow down, or hinder someone or something from making progress or developing naturally",
    "sentence": "Extreme winter weather will heavily {{BLANK}} delivering the express cargo to the harbor.",
    "cn": "極端寒冬的天氣將嚴重阻礙物流工人將快捷貨物運送到港口。"
  },
  {
    "word": "inhibition",
    "pos": "n.",
    "cn_def": "拘束；顧忌；壓抑",
    "en_def": "a feeling of embarrassment or worry that prevents you from saying or doing what you truly want",
    "sentence": "The student successfully overcame her initial {{BLANK}} and made an active attempt to state her opinion clearly.",
    "cn": "這名學生成功克服了她起初的顧忌，並大膽嘗試清楚地陳述她的觀點。"
  },
  {
    "word": "refrain from",
    "pos": "phr.",
    "cn_def": "克制不去做...；忍住...",
    "en_def": "to intentionally choose to stop oneself from doing something, especially an undesirable habit",
    "sentence": "All participants in the scientific experiment must {{BLANK}} smoking before the leading researcher begins the assessment.",
    "cn": "在首席研究員開始評估之前，科學實驗的所有參與者都必須克制不去吸菸。"
  },
  {
    "word": "restraint",
    "pos": "n.",
    "cn_def": "克制；抑制；約束（名詞）",
    "en_def": "controlled behavior, self-control, or a legal/physical restriction that limits someone's freedom or actions",
    "sentence": "The police officers exercised remarkable {{BLANK}} when dealing with the highly aggressive protesters at the crime scene.",
    "cn": "警員在犯罪現場應對極具攻擊性的抗議者時，表現出了驚人的克制。"
  },
  {
    "word": "exercise strict control",
    "pos": "phr.",
    "cn_def": "施加控制；進行管理 (補充)",
    "en_def": "to actively direct, influence, or manage the behavior, operation, or development of something",
    "sentence": "The central bank attempts to {{BLANK}} over the national currency to prevent sudden inflation in the market.",
    "cn": "中央銀行試圖對國家貨幣實施嚴格控制，以防止市場上突然發生通貨膨脹。"
  },
  {
    "word": "exercise self-discipline",
    "pos": "phr.",
    "cn_def": "展現自律；實踐自我克制",
    "en_def": "to systematically control one's own desires, emotions, and behaviors to achieve long-term goals",
    "sentence": "The ambitious student needs to {{BLANK}} to study for the standardized exam instead of playing video games.",
    "cn": "這名雄心勃勃的學生需要展現自律來準備標準化考試，而不是玩電子遊戲。"
  },
  {
    "word": "exercise caution",
    "pos": "phr.",
    "cn_def": "保持謹慎；格外小心",
    "en_def": "to be purposefully careful and alert in order to avoid potential danger, mistakes, or accidents",
    "sentence": "Drivers must {{BLANK}} when navigating the narrow and slippery mountain roads during a severe winter storm.",
    "cn": "在嚴重的冬季暴風雨中行駛於狹窄且濕滑的山路時，駕駛人必須保持謹慎。"
  },
  {
    "word": "exercise patience",
    "pos": "phr.",
    "cn_def": "保持耐心",
    "en_def": "to intentionally remain calm and controlled while waiting for something or dealing with difficulties",
    "sentence": "The leading researcher reminded his young assistants to {{BLANK}} while waiting for the scientific data to compile.",
    "cn": "首席研究員提醒他的年輕助手們，在等待科學數據彙編時要保持耐心。"
  },
  {
    "word": "exercise the authority",
    "pos": "phr.",
    "cn_def": "行使公權力；行使職權",
    "en_def": "to officially use legal power, command, or directional control over an organization or state",
    "sentence": "The newly appointed military commander decided to {{BLANK}} to restrict civilian access to the critical crime scene.",
    "cn": "新上任的軍事指揮官決定行使職權，限制平民進入關鍵的犯罪現場。"
  },
  {
    "word": "exercise civil rights",
    "pos": "phr.",
    "cn_def": "行使公民權利",
    "en_def": "to formally use or apply a legal prerogative, freedom, or privilege guaranteed by the law",
    "sentence": "All citizens are heavily encouraged to {{BLANK}} to vote in the upcoming presidential election and referendum next month.",
    "cn": "所有公民都被強烈鼓勵在下個月即將舉行的總統大選和公投中行使投票權。"
  },
  {
    "word": "election",
    "pos": "n.",
    "cn_def": "選舉",
    "en_def": "a formal and organized choice by vote of a person for a political office or other position",
    "sentence": "The progressive political party urged every single citizen to exercise their legal right to vote in the upcoming presidential {{BLANK}}.",
    "cn": "進步派政黨敦促每一位公民在即將到來的總統選舉中行使他們的合法投票權。"
  },
  {
    "word": "referendum",
    "pos": "n.",
    "cn_def": "公民投票；公投",
    "en_def": "a general vote by the electorate on a single political question which has been referred to them for a direct decision",
    "sentence": "The government decided to conduct a national {{BLANK}} to let citizens directly determine whether to alter the existing tariff laws.",
    "cn": "政府決定舉行全民公投，讓公民直接決定是否修改現行的關稅法律。"
  },
  {
    "word": "practice a religious ritual",
    "pos": "phr.",
    "cn_def": "履行宗教儀式",
    "en_def": "to systematically perform a traditional ceremony, custom, or service associated with a faith",
    "sentence": "The local tribe gathered at the ancient temple to {{BLANK}} to pray for a bountiful autumn harvest.",
    "cn": "當地部落聚集在古老的寺廟裡履行宗教儀式，以祈求秋季豐收。"
  },
  {
    "word": "practice law",
    "pos": "phr.",
    "cn_def": "執業（律師）；從事法律工作",
    "en_def": "to officially work as a professional lawyer or legal advisor within a specific legislative framework",
    "sentence": "After passing the rigorous bar exam, the progressive lawyer decided to {{BLANK}} at a prestigious international law firm.",
    "cn": "在通過嚴格的律師資格考試後，這位進步派律師決定在一家聲譽卓著的國際法律事務所執業。"
  },
  {
    "word": "practice medicine",
    "pos": "phr.",
    "cn_def": "執業（醫生）；從事醫療工作",
    "en_def": "to officially work as a qualified medical doctor, treating patients and prescribing therapies",
    "sentence": "The skilled surgeon obtained her official license and began to {{BLANK}} in a remote rural community that lacked facilities.",
    "cn": "這位技術熟練的外科醫生獲得了她的正式執照，並開始在一個缺乏設施的偏遠農村社區從事醫療工作。"
  },
  {
    "word": "perform a surgery",
    "pos": "phr.",
    "cn_def": "進行手術",
    "en_def": "to systematically carry out a medical operation on a patient to treat a physical injury or illness",
    "sentence": "The experienced chief surgeon will {{BLANK}} tomorrow morning to repair the patient's severely damaged mechanical heart.",
    "cn": "經驗豐富的總外科醫生將於明天上午進行手術，以修復患者嚴重受損的機械心臟。"
  },
  {
    "word": "perform a duty",
    "pos": "phr.",
    "cn_def": "履行職責；執行任務",
    "en_def": "to actively execute, fulfill, or carry out a moral obligation, legal responsibility, or assigned task",
    "sentence": "Every loyal police officer is fully expected to {{BLANK}} with complete integrity and protect local communities.",
    "cn": "每位忠誠的警員都被充分期望能以完全正直的態度履行職責，並保護當地社群。"
  },
  {
    "word": "perform an act of kindness",
    "pos": "phr.",
    "cn_def": "做出善行",
    "en_def": "to intentionally do a helpful, generous, or considerate action for another individual without expecting reward",
    "sentence": "Even a small gesture can make a significant difference when you {{BLANK}} for a complete stranger.",
    "cn": "當你為一個完全陌生的人做出善行時，即使是一個小小的舉動也能帶來重大的改變。"
  },
  {
    "word": "conduct an experiment",
    "pos": "phr.",
    "cn_def": "進行實驗",
    "en_def": "to systematically organize and carry out a scientific test or trial to discover or verify facts",
    "sentence": "The software engineering team plans to {{BLANK}} to assess whether the new automated system operates smoothly.",
    "cn": "軟體工程團隊計劃進行一項實驗，以評估這個新的自動化系統是否運作順利。"
  },
  {
    "word": "conduct a research project",
    "pos": "phr.",
    "cn_def": "主導研究計畫",
    "en_def": "to professionally organize, manage, and execute a systematic academic investigation or deep study",
    "sentence": "The leading university received a massive government grant to {{BLANK}} on endangered wild animal species.",
    "cn": "這所頂尖大學獲得了巨額的政府補助，以主導一項關於瀕危野生動物物種的研究計畫。"
  },
  {
    "word": "conduct a survey",
    "pos": "phr.",
    "cn_def": "進行調查",
    "en_def": "to systematically gather specific opinions, data, or facts from a targeted group of participants",
    "sentence": "The marketing firm decided to {{BLANK}} to evaluate consumer satisfaction regarding the new portable devices.",
    "cn": "這家行銷公司決定進行一項調查，以評估消費者對這款全新便攜式裝置的滿意度。"
  },
  {
    "word": "conduct an interview",
    "pos": "phr.",
    "cn_def": "舉辦面試",
    "en_def": "to formally host, guide, and ask questions during a structured meeting with a prospective candidate",
    "sentence": "The human resources department will {{BLANK}} tomorrow to assess the applicant's mechanical engineering skills.",
    "cn": "人力資源部門明天將進行面試，以評估應徵者的機械工程技能。"
  },
  {
    "word": "conduct an orchestra",
    "pos": "phr.",
    "cn_def": "指揮交響樂團",
    "en_def": "to actively direct and coordinate the performance of a large musical group using hand gestures or a baton",
    "sentence": "The world-renowned musician was invited to {{BLANK}} during the international charity concert next weekend.",
    "cn": "這位世界聞名的音樂家受邀在下週末的國際慈善音樂會上指揮交響樂團。"
  },
  {
    "word": "conduct heat",
    "pos": "phr.",
    "cn_def": "傳導熱",
    "en_def": "to efficiently transmit thermal energy or warmth directly through a specific material or substance",
    "sentence": "Copper and aluminum are highly valued in manufacturing because they can {{BLANK}} much faster than plastic materials.",
    "cn": "銅和鋁在製造業中受到高度重視，因為它們傳導熱的速度比塑膠材料快得多。"
  },
  {
    "word": "conduct electricity",
    "pos": "phr.",
    "cn_def": "導電",
    "en_def": "to efficiently allow an electrical current or energy flow to pass smoothly through a physical substance",
    "sentence": "Pure water itself is a poor conductor, but dissolved minerals allow the liquid to {{BLANK}} very efficiently.",
    "cn": "純水本身是個不良導體，但溶解的礦物質能讓這種液體非常高效地導電。"
  },
  {
    "word": "hold a ceremony",
    "pos": "phr.",
    "cn_def": "舉行儀式；舉辦典禮",
    "en_def": "to formally organize and conduct a traditional, official, or ritualistic public event",
    "sentence": "The indigenous tribe gathered near the ancient harbor to {{BLANK}} to pray for a bountiful and safe fishing season.",
    "cn": "原住民部落聚集在古老的港口附近舉行儀式，以祈求豐收且安全的捕魚季節。"
  },
  {
    "word": "throw a party",
    "pos": "phr.",
    "cn_def": "舉辦派對；辦宴會",
    "en_def": "to informally organize, host, and fund a celebratory social gathering for friends or colleagues",
    "sentence": "The ambitious entrepreneur decided to {{BLANK}} to celebrate the international corporation's successful business expansion.",
    "cn": "這位雄心勃勃的企業家決定舉辦一場派對，以慶祝這家國際公司的業務擴展圓滿成功。"
  },
  {
    "word": "notice",
    "pos": "v.",
    "cn_def": "注意（到）",
    "en_def": "to become aware of; the fact of observing or paying attention to something.",
    "sentence": "Did you happen to {{BLANK}} that Sarah was wearing a completely different dress when she returned from the bathroom?",
    "cn": "你有碰巧注意到莎拉從洗手間回來時穿著一件完全不同的洋裝嗎？"
  },
  {
    "word": "notice",
    "pos": "n.",
    "cn_def": "公告、通知、啟事",
    "en_def": "A written or printed announcement or warning displayed for everyone to see.",
    "sentence": "The school principal put up a large {{BLANK}} next to the main entrance to inform students that the annual sports day has been postponed.",
    "cn": "校長在主入口旁張貼了一份大型公告，以通知學生年度運動會已延期。"
  },
  {
    "word": "noticeable",
    "pos": "adj.",
    "cn_def": "明顯的；引人注目的",
    "en_def": "easily seen or noticed; clear or apparent.",
    "sentence": "After he finally left his stressful home environment, there was a highly {{BLANK}} change in his overall daily attitude.",
    "cn": "在他終於離開壓力沉重的家庭環境後，他整體的日常態度有了非常明顯的改變。"
  },
  {
    "word": "bulletin",
    "pos": "n.",
    "cn_def": "（官方的）簡報、公告、新聞快報",
    "en_def": "A short official statement or news report about an important matter of public interest.",
    "sentence": "The hospital issued a regular medical {{BLANK}} regarding the president's health condition to keep the anxious public informed.",
    "cn": "醫院發布了關於總統健康狀況的定期醫療簡報（公告），以讓焦慮的公眾知情。"
  },
  {
    "word": "bulletin board",
    "pos": "phr.",
    "cn_def": "佈告欄、公告欄",
    "en_def": "A board on a wall where people can pin notices, advertisements, or messages.",
    "sentence": "Students frequently check the {{BLANK}} in the hallway to see the latest updates about club activities and school events.",
    "cn": "學生們經常查看走廊上的佈告欄，以了解社團活動和學校事件的最新動態。"
  },
  {
    "word": "apparent",
    "pos": "adj.",
    "cn_def": "明顯的；顯而易見的",
    "en_def": "clearly visible or understood; obvious.",
    "sentence": "It was quite {{BLANK}} to everyone in the room that the nervous man was lying about his true identity.",
    "cn": "房間裡的每個人都很明顯的看出這個緊張的男人在說謊掩飾他的真實身分。"
  },
  {
    "word": "obvious",
    "pos": "adj.",
    "cn_def": "明顯的、顯而易見的",
    "en_def": "Easy to see, recognize, or understand.",
    "sentence": "It was {{BLANK}} to everyone in the room that Leo was nervous, because his hands were shaking violently during the presentation.",
    "cn": "房間裡的每個人都很明顯地看出里歐很緊張，因為他在簡報時雙手抖得很厲害。"
  },
  {
    "word": "ambiguous",
    "pos": "adj.",
    "cn_def": "模稜兩可的",
    "en_def": "open to more than one interpretation; having a double meaning.",
    "sentence": "The politician's completely {{BLANK}} answer to the journalist's serious question left the entire audience feeling extremely confused and frustrated.",
    "cn": "這位政治人物對記者嚴肅問題完全模稜兩可的回答，讓全場觀眾感到極度困惑和沮喪。"
  },
  {
    "word": "vague",
    "pos": "adj.",
    "cn_def": "模糊的、含糊的、不明確的",
    "en_def": "Not clear, definite, or specific in thought, expression, or details.",
    "sentence": "The detective found the witness's description of the suspect very {{BLANK}}, as she could only remember that he was wearing a dark jacket.",
    "cn": "偵探發現證人對嫌犯的描述非常含糊（模糊），因為她只記得他穿著一件深色外套。"
  },
  {
    "word": "blurry",
    "pos": "adj.",
    "cn_def": "模糊的、（影像）不清晰的",
    "en_def": "Not clear or sharp, especially when referring to images, photos, or vision.",
    "sentence": "Because Chloe accidentally moved her hand while clicking the shutter, the photo she took of the beautiful sunset turned out completely {{BLANK}}.",
    "cn": "因為克洛伊在按下快門時不小心動了手，她拍的那張美麗落日的照片結果完全是模糊的。"
  },
  {
    "word": "abstract",
    "pos": "adj.",
    "cn_def": "抽象的",
    "en_def": "Existing as an idea, feeling, or quality rather than a physical or material object.",
    "sentence": "Truth and justice are {{BLANK}} concepts that can be difficult for young children to understand, as they usually prefer concrete examples they can see.",
    "cn": "真理和正義是幼童可能很難理解的抽象概念，因爲他們通常更喜歡看得見的具體例子。"
  },
  {
    "word": "facility",
    "pos": "n.",
    "cn_def": "設施；機構",
    "en_def": "space or equipment necessary for doing something.",
    "sentence": "When the man suddenly collapsed on the street, the ambulance rushed him directly to a nearby medical {{BLANK}}.",
    "cn": "當那名男子突然在街上倒下時，救護車將他直接送往附近的醫療機構。"
  },
  {
    "word": "medical facility",
    "pos": "phr.",
    "cn_def": "醫療機構",
    "en_def": "a place where healthcare is provided.",
    "sentence": "In rural areas, it can sometimes take hours to drive a sick patient to the nearest fully equipped {{BLANK}}.",
    "cn": "在鄉村地區，有時可能需要開車數小時才能將生病的病患送到最近且設備齊全的醫療機構。"
  },
  {
    "word": "facilitate",
    "pos": "v.",
    "cn_def": "促進；使便利",
    "en_def": "to make an action or process easy or easier.",
    "sentence": "The new interactive teaching software is specifically designed to deeply {{BLANK}} faster and more effective learning for young children.",
    "cn": "這個新的互動教學軟體專門設計來深入促進幼童更快、更有效的學習。"
  },
  {
    "word": "wheelchair",
    "pos": "n.",
    "cn_def": "輪椅",
    "en_def": "a chair fitted with wheels for use as a means of transport by a person who is unable to walk.",
    "sentence": "The poor old man unfortunately can't walk anymore and desperately needs a {{BLANK}} just to get around his house.",
    "cn": "可憐的老人不幸地再也無法走路，極度需要一張輪椅才能在他的房子裡四處走動。"
  },
  {
    "word": "wheelchair bound",
    "pos": "adj.",
    "cn_def": "必須坐輪椅的",
    "en_def": "unable to walk and thus forced to use a wheelchair.",
    "sentence": "Despite being entirely {{BLANK}} for most of his adult life, the inspiring man managed to write three brilliant books.",
    "cn": "儘管在他的成年生活中大多是完全必須坐輪椅的，這位激勵人心的人還是成功寫出了三本才華洋溢的書。"
  },
  {
    "word": "motorized wheelchair",
    "pos": "phr.",
    "cn_def": "電動輪椅",
    "en_def": "a wheelchair propelled by an electric motor.",
    "sentence": "Thanks to his highly advanced {{BLANK}}, the disabled veteran can easily navigate the busy city streets completely by himself.",
    "cn": "多虧了他高度先進的電動輪椅，這位殘障的退伍軍人能完全靠自己輕鬆地在繁忙的城市街道上穿梭。"
  },
  {
    "word": "interaction",
    "pos": "n.",
    "cn_def": "互動",
    "en_def": "reciprocal action or influence; communication.",
    "sentence": "Because Carol doesn't have any classes with Sam, they unfortunately don't have much personal {{BLANK}} during the long school day.",
    "cn": "因為卡蘿沒有和山姆同班的課，他們在漫長的上學日中不幸地沒有多少個人的互動。"
  },
  {
    "word": "interact with",
    "pos": "v.",
    "cn_def": "互動；交流",
    "en_def": "to act in such a way as to have an effect on another; to communicate.",
    "sentence": "The friendly kindergarten teacher always strongly encourages her shy students to confidently {{BLANK}} each other during outdoor playtime.",
    "cn": "友善的幼稚園老師總是強烈鼓勵她害羞的學生在戶外遊戲時間自信地互相互動。"
  },
  {
    "word": "interactive",
    "pos": "adj.",
    "cn_def": "互動式的",
    "en_def": "allowing a two-way flow of information between a computer and a computer-user; responding to a user's input.",
    "sentence": "The fascinating science museum features many brilliant {{BLANK}} exhibits that brilliantly allow children to physically test out physics principles.",
    "cn": "迷人的科學博物館擁有許多出色的互動式的展覽，出色地讓孩子們能實際測試物理原理。"
  },
  {
    "word": "social interaction",
    "pos": "phr.",
    "cn_def": "社交互動",
    "en_def": "the process of acting and reacting to the people around us.",
    "sentence": "Maintaining regular and positive {{BLANK}} is incredibly important for preserving an elderly person's mental health and overall happiness.",
    "cn": "維持規律且積極的社交互動，對於保存年長者的心理健康和整體幸福感極其重要。"
  },
  {
    "word": "magical",
    "pos": "adj.",
    "cn_def": "魔法的；神奇的",
    "en_def": "relating to, using, or resembling magic.",
    "sentence": "The beautifully decorated theme park creates a truly {{BLANK}} experience for young children visiting it for the very first time.",
    "cn": "裝飾美麗的主題樂園為第一次造訪的幼童創造了真正神奇的體驗。"
  },
  {
    "word": "magically",
    "pos": "adv.",
    "cn_def": "如魔法般地；神奇地",
    "en_def": "by or as if by magic.",
    "sentence": "During the impressive performance, the floating cup appeared to {{BLANK}} hover completely unsupported right above the wooden desk.",
    "cn": "在令人印象深刻的表演中，漂浮的杯子似乎神奇地完全無支撐地盤旋在木製書桌正上方。"
  },
  {
    "word": "miracle",
    "pos": "n.",
    "cn_def": "奇蹟",
    "en_def": "an extraordinary and welcome event that is not explicable by natural or scientific laws and is considered to be the work of a divine agency",
    "sentence": "The chief surgeon stated that it was a complete {{BLANK}} that the patient survived such a severe heart failure during the operation.",
    "cn": "主治醫生聲稱，病人在手術過程中經歷了如此嚴重的生命心臟衰竭卻能活下來，完全是一個奇蹟。"
  },
  {
    "word": "miraculous",
    "pos": "adj.",
    "cn_def": "奇蹟般的；不可思議的",
    "en_def": "occurring through divine or extraordinary intervention; highly improbable and extraordinarily wonderful",
    "sentence": "The injured athlete made a {{BLANK}} recovery just a few weeks before the highly anticipated international programming tournament.",
    "cn": "這名受傷的運動員在備受期待的國際程式設計大賽舉行前幾週，做出了奇蹟般的康復。"
  },
  {
    "word": "miraculously",
    "pos": "adv.",
    "cn_def": "奇蹟般地",
    "en_def": "in a way that resembles or suggests a miracle; extraordinarily, unexpectedly, or completely by chance",
    "sentence": "Despite driving through a severe winter storm on the narrow mountain road, the entire family {{BLANK}} arrived home safely without any accidents.",
    "cn": "儘管在狹窄的山路上開車穿過嚴重的冬季暴風雨，全家人依然奇蹟般地安全抵達家門，沒有發生任何意外。"
  },
  {
    "word": "appear magically",
    "pos": "phr.",
    "cn_def": "神奇地出現",
    "en_def": "to suddenly show up as if brought by magic.",
    "sentence": "Just when we desperately needed a taxi in the pouring rain, one seemed to {{BLANK}} right at the corner.",
    "cn": "正當我們在傾盆大雨中極度需要計程車時，一輛計程車似乎神奇地出現在轉角處。"
  },
  {
    "word": "transformed",
    "pos": "v.",
    "cn_def": "改變；改造",
    "en_def": "to make a thorough or dramatic change in the form, appearance, or character of.",
    "sentence": "Buying that expensive new modern furniture completely {{BLANK}} their dark and boring living room into a bright, stylish space.",
    "cn": "買下那套昂貴的新現代家具，徹底將他們黑暗無聊的客廳改造成一個明亮、時尚的空間。"
  },
  {
    "word": "transform a into b",
    "pos": "phr.",
    "cn_def": "把A變成B",
    "en_def": "to completely change one thing into another.",
    "sentence": "The ambitious city government officially plans to successfully {{BLANK}} a beautiful large shopping complex.",
    "cn": "雄心勃勃的市政府正式計畫成功地把廢棄的舊工廠建築變成一個美麗的大型購物中心。"
  },
  {
    "word": "transformation",
    "pos": "n.",
    "cn_def": "轉變；變形",
    "en_def": "a thorough or dramatic change in form or appearance.",
    "sentence": "The butterfly's miraculous physical {{BLANK}} from a tiny, creeping caterpillar is widely considered one of nature's most beautiful processes.",
    "cn": "蝴蝶從一隻微小爬行的毛毛蟲發生的奇蹟般物理轉變，被廣泛認為是自然界最美麗的過程之一。"
  },
  {
    "word": "convert",
    "pos": "v.",
    "cn_def": "轉換；改變",
    "en_def": "to cause to change in form, character, or function.",
    "sentence": "The wealthy businessman decided to expensively {{BLANK}} his massive basement into a fully equipped private cinema for his family.",
    "cn": "富有的商人決定花大錢將他巨大的地下室改裝（轉換）成一個設備齊全的家庭私人電影院。"
  },
  {
    "word": "relax",
    "pos": "v.",
    "cn_def": "放鬆",
    "en_def": "to rest from work or engage in an enjoyable activity so as to become less tired or anxious.",
    "sentence": "After successfully finishing his incredibly difficult final exams, Ian finally had the opportunity to just sit down and {{BLANK}}.",
    "cn": "在成功完成極其困難的期末考後，伊恩終於有機會直接坐下來放鬆。"
  },
  {
    "word": "relaxation",
    "pos": "n.",
    "cn_def": "放鬆；消遣",
    "en_def": "the state of being free from tension and anxiety.",
    "sentence": "Exhausted Sasha firmly told me that she specifically wants her upcoming summer vacation to be entirely about rest and {{BLANK}}.",
    "cn": "疲憊的莎夏堅定地告訴我，她特別希望即將到來的暑假能完全是關於休息和放鬆。"
  },
  {
    "word": "relaxed",
    "pos": "adj.",
    "cn_def": "放鬆的；從容的",
    "en_def": "free from tension and anxiety; at ease.",
    "sentence": "The manager's calm and highly {{BLANK}} leadership style surprisingly helps the entire office remain highly productive during stressful deadlines.",
    "cn": "經理平靜且高度從容的領導風格，出人意料地幫助整個辦公室在充滿壓力的截止日期期間保持高生產力。"
  },
  {
    "word": "relaxing",
    "pos": "adj.",
    "cn_def": "令人放鬆的",
    "en_def": "reducing tension or anxiety.",
    "sentence": "Getting a professional deep tissue massage after a terribly stressful week at work is arguably the most {{BLANK}} experience possible.",
    "cn": "在工作了極度充滿壓力的一週後，接受專業的深層組織按摩可以說是可能最令人放鬆的體驗了。"
  },
  {
    "word": "tension",
    "pos": "n.",
    "cn_def": "緊張；拉力",
    "en_def": "the state of being stretched tight; mental or emotional strain.",
    "sentence": "The unbearable physical {{BLANK}} in his sore shoulders finally began to disappear after he took a long, hot shower.",
    "cn": "在洗了個舒服的熱水澡後，他痠痛肩膀上難以忍受的身體緊張（緊繃）終於開始消失了。"
  },
  {
    "word": "presence",
    "pos": "n.",
    "cn_def": "出席；存在",
    "en_def": "the state or fact of existing, occurring, or being present in a place or thing.",
    "sentence": "You don't have to come to the party, but your pleasant {{BLANK}} would undoubtedly make everyone there incredibly happy.",
    "cn": "你不必來參加派對，但你令人愉快的出席無疑會讓在那裡的每個人都非常高興。"
  },
  {
    "word": "in the presence of",
    "pos": "phr.",
    "cn_def": "在...的面前",
    "en_def": "in front of or existing with someone else.",
    "sentence": "Naughty Ted surprisingly always acts extremely well-behaved and polite whenever he is {{BLANK}} his strict parents.",
    "cn": "頑皮的泰德令人驚訝地每當他在他嚴格父母的面前時，總是表現得極度守規矩且有禮貌。"
  },
  {
    "word": "present",
    "pos": "adj.",
    "cn_def": "在場的；現在的",
    "en_def": "existing or occurring now; in a particular place.",
    "sentence": "The principal demanded to ensure that every single senior student was actually physically {{BLANK}} in the auditorium for the speech.",
    "cn": "校長要求確保每一位高三學生實際上都確實在場於禮堂聆聽演講。"
  },
  {
    "word": "absence",
    "pos": "n.",
    "cn_def": "缺席；不在",
    "en_def": "the state of being away from a place or person.",
    "sentence": "The manager noted that John's continued and entirely unexplained {{BLANK}} from the important weekly meetings was becoming a serious issue.",
    "cn": "經理指出，約翰持續且完全無法解釋的對重要週會的缺席，正成為一個嚴重的問題。"
  },
  {
    "word": "orphan",
    "pos": "n. / v.",
    "cn_def": "孤兒；使成為孤兒",
    "en_def": "a child whose parents are dead; to make a child an orphan.",
    "sentence": "The generous charity specifically works hard to securely provide safe housing and good food for every homeless {{BLANK}} in the city.",
    "cn": "這家慷慨的慈善機構特別努力為城市裡每一位無家可歸的孤兒穩妥地提供安全的住所和良好的食物。"
  },
  {
    "word": "orphanage",
    "pos": "n.",
    "cn_def": "孤兒院",
    "en_def": "a residential institution for the care and education of orphans.",
    "sentence": "Poor John sadly grew up in a crowded local {{BLANK}} after his loving parents tragically passed away in a car accident.",
    "cn": "可憐的約翰在他充滿愛的父母於車禍中悲慘離世後，令人遺憾地在擁擠的當地孤兒院長大。"
  },
  {
    "word": "express",
    "pos": "v.",
    "cn_def": "表達",
    "en_def": "to convey a thought or feeling in words or by gestures and conduct.",
    "sentence": "Because the quiet man was not naturally {{BLANK}}, I simply didn't know what he actually wanted from the store.",
    "cn": "因為這個安靜的男人天生不擅表達，我根本不知道他實際上想從店裡得到什麼。"
  },
  {
    "word": "expressive",
    "pos": "adj.",
    "cn_def": "富於表情的；善於表達的",
    "en_def": "effectively conveying thought or feeling.",
    "sentence": "The incredibly talented actor's highly {{BLANK}} face perfectly communicated his deep sorrow without him ever needing to speak a word.",
    "cn": "這位才華洋溢的演員極其富於表情的臉龐，完美地傳達了他深深的悲傷，而不需要他說出任何一個字。"
  },
  {
    "word": "expression",
    "pos": "n.",
    "cn_def": "表達；表情",
    "en_def": "the process of making known one's thoughts or feelings.",
    "sentence": "Writing incredibly beautiful poetry was her absolute favorite form of emotional {{BLANK}} whenever she felt lonely or deeply misunderstood.",
    "cn": "每當她感到孤單或深深被誤解時，寫出極其美麗的詩是她絕對最喜歡的情感表達形式。"
  },
  {
    "word": "talkative",
    "pos": "adj.",
    "cn_def": "健談的；多話的",
    "en_def": "fond of or given to talking.",
    "sentence": "Unlike her exceptionally quiet sister, Maria is a highly {{BLANK}} person who can easily chat with complete strangers for hours.",
    "cn": "不同於她異常安靜的妹妹，瑪麗亞是個極其健談的人，可以輕鬆地與完全陌生的人聊上幾個小時。"
  },
  {
    "word": "collective",
    "pos": "adj.",
    "cn_def": "集體的；共同的",
    "en_def": "done by people acting as a group.",
    "sentence": "Rebuilding the completely destroyed town after the terrible earthquake clearly required an immense {{BLANK}} effort from every single surviving citizen.",
    "cn": "在可怕的地震後重建被徹底摧毀的城鎮，顯然需要每一位倖存公民付出巨大的集體的努力。"
  },
  {
    "word": "tense",
    "pos": "adj.",
    "cn_def": "緊張的；緊繃的",
    "en_def": "stretched tight or unable to relax; causing anxiety.",
    "sentence": "Alice unfortunately feels extremely {{BLANK}} most of the time because her demanding corporate job is very difficult and highly stressful.",
    "cn": "艾莉絲不幸地大部分時間都感到極度緊張的，因為她要求極高的企業工作非常困難且壓力極大。"
  },
  {
    "word": "feel incredibly tense",
    "pos": "phr.",
    "cn_def": "感到緊張",
    "en_def": "to experience physical or emotional tightness.",
    "sentence": "It is completely natural to {{BLANK}} and anxious right before delivering an important speech to a large, silent audience.",
    "cn": "在向大批安靜的觀眾發表重要演講之前，感到極度緊張和焦慮是完全自然的。"
  },
  {
    "word": "tense mood",
    "pos": "phr.",
    "cn_def": "緊張的氣氛",
    "en_def": "a heavily strained atmosphere.",
    "sentence": "The unpredictable {{BLANK}} in the dark room was palpable as the angry family awkwardly ate their dinner in complete silence.",
    "cn": "當這個憤怒的家庭在完全的沉默中尷尬地吃著晚餐時，黑暗房間裡不可預測的緊張的氣氛是顯而易見的。"
  },
  {
    "word": "tension",
    "pos": "n.",
    "cn_def": "緊張（關係）；局勢緊張",
    "en_def": "a feeling of fear, distrust, or anxiety caused by tight relationships or unresolved conflict",
    "sentence": "The rising political {{BLANK}} between the two neighbouring countries forced the international border to close temporarily.",
    "cn": "兩國之間日益加劇的政治緊張關係迫使國際邊界暫時關閉。"
  },
  {
    "word": "relieve the terrible physical tension",
    "pos": "phr.",
    "cn_def": "緩解緊張",
    "en_def": "to reduce mental or emotional strain.",
    "sentence": "Engaging in regular deep breathing exercises can effectively {{BLANK}} that builds up during a long workday.",
    "cn": "進行規律的深呼吸運動可以有效地緩解在漫長工作日中累積的可怕身體緊張。"
  },
  {
    "word": "intensive",
    "pos": "adj.",
    "cn_def": "密集的；集中的",
    "en_def": "involving a high degree of concentrated effort, massive resources, or energy within a short time",
    "sentence": "The engineering team underwent {{BLANK}} training to master the newly deployed automated server frameworks.",
    "cn": "工程團隊接受了密集的培訓，以掌握新部署的自動化伺服器架構。"
  },
  {
    "word": "intensive course",
    "pos": "n.",
    "cn_def": "密集課程",
    "en_def": "a highly concentrated educational program designed to teach extensive knowledge very quickly",
    "sentence": "Joining an {{BLANK}} in asset management helped the young intern quickly fulfill his professional potential.",
    "cn": "參加資產管理的密集課程幫助這位年輕實習生迅速發揮了他的專業潛力。"
  },
  {
    "word": "relieve",
    "pos": "v.",
    "cn_def": "減輕；緩解",
    "en_def": "to cause pain, distress, or difficulty to become less severe or serious.",
    "sentence": "Gus cautiously took some expensive prescription medicine to quickly {{BLANK}} the sharp, shooting pain in his lower back.",
    "cn": "葛斯謹慎地吃了一些昂貴的處方藥，以迅速緩解他下背部劇烈刺痛的疼痛。"
  },
  {
    "word": "relief",
    "pos": "n.",
    "cn_def": "如釋重負；解脫",
    "en_def": "a feeling of reassurance and relaxation following release from anxiety or distress.",
    "sentence": "Joe immediately felt a huge sense of deep {{BLANK}} after the experienced doctor told him he would definitely recover completely.",
    "cn": "在經驗豐富的醫生告訴他絕對會完全康復後，喬立刻感到了一種巨大的深深的如釋重負。"
  },
  {
    "word": "relieved",
    "pos": "adj.",
    "cn_def": "感到寬慰的",
    "en_def": "no longer feeling distressed or anxious; reassured.",
    "sentence": "The terribly worried parents were visibly {{BLANK}} when the brave police officer safely brought their missing little boy back home.",
    "cn": "當勇敢的警察安全地把他們失蹤的小男孩帶回家時，極度擔憂的父母明顯地感到寬慰的。"
  },
  {
    "word": "anxiety",
    "pos": "n.",
    "cn_def": "焦慮",
    "en_def": "a feeling of worry, nervousness, or unease, typically about an imminent event.",
    "sentence": "Poor Chris has tragically suffered from crippling {{BLANK}} for much of his difficult adult life, making it hard to socialize.",
    "cn": "可憐的克里斯在他艱難的成年生活中大部分時間都悲慘地遭受嚴重焦慮的折磨，使他難以社交。"
  },
  {
    "word": "anxious",
    "pos": "adj.",
    "cn_def": "焦慮的；渴望的",
    "en_def": "experiencing worry, nervousness, or unease.",
    "sentence": "The young job applicant felt incredibly {{BLANK}} and sweaty while sitting quietly in the cold waiting room before his interview.",
    "cn": "年輕的求職者在面試前安靜地坐在寒冷的候診室時，感到極度焦慮的且流汗。"
  },
  {
    "word": "anxiously",
    "pos": "adv.",
    "cn_def": "焦急地",
    "en_def": "in a manner resulting from or revealing anxiety.",
    "sentence": "The loving mother stood by the window and completely {{BLANK}} watched the dark street, waiting for her teenage daughter's return.",
    "cn": "慈愛的母親站在窗邊，完全焦急地看著黑暗的街道，等待著她十幾歲的女兒歸來。"
  },
  {
    "word": "anxiety disorder",
    "pos": "phr.",
    "cn_def": "焦慮症",
    "en_def": "a mental health disorder characterized by feelings of worry or fear.",
    "sentence": "It is highly recommended to seek professional psychological help if you constantly suspect you might officially have an {{BLANK}}.",
    "cn": "如果你不斷懷疑自己可能正式患有焦慮症，強烈建議尋求專業心理協助。"
  },
  {
    "word": "depression",
    "pos": "n.",
    "cn_def": "憂鬱症；沮喪",
    "en_def": "a persistent mental health condition characterized by severe long-term sadness, low energy, and loss of interest",
    "sentence": "The experienced counselor provided professional guidance to help the young student overcome her severe academic {{BLANK}}.",
    "cn": "經驗豐富的輔導老師提供了專業的指導，以幫助這名年輕學生克服她嚴重的學業沮喪。"
  },
  {
    "word": "depressed",
    "pos": "adj.",
    "cn_def": "感到憂鬱的；沮喪的",
    "en_def": "feeling deeply sad, hopeless, and discouraged about life or a specific unfortunate situation",
    "sentence": "Feeling heavily {{BLANK}} after the sudden business failure, the ambitious entrepreneur decided to take a short break to restore his energy.",
    "cn": "在突如其來的商業失敗後感到非常沮喪，這位雄心勃勃的企業家決定休個短假以恢復精力。"
  }
];

const MCQS = [
  {
    "q": "Doris severely hurt her muscles while playing sports, so she needed intensive physical ______ to help heal them.",
    "options": [
      "tension",
      "therapy",
      "restraint",
      "anxiety"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "After his serious car accident, the young man had to attend ______ twice a week for several months.",
    "options": [
      "anxiety disorder",
      "medical facility",
      "hold a ceremony",
      "physical therapy"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The ambitious university professor was extremely excited when he discovered the ruined buildings of a magnificent ______ city.",
    "options": [
      "senior",
      "blurry",
      "ancient",
      "middle-aged"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Tim is a very devoted son who makes sure to visit his ______ parents every single Sunday morning.",
    "options": [
      "elderly",
      "talkative",
      "senior",
      "intensive"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The local government recently started a brand new social program specifically designed to care for ______ in our community.",
    "options": [
      "practice a religious ritual",
      "practice law",
      "the elderly",
      "intensive course"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Mike dutifully looks after his ______ parents who can no longer comfortably take care of themselves at home.",
    "options": [
      "depressed",
      "relaxed",
      "senior",
      "aged"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The ______ man decided to join a local marathon to stay healthy and energetic as he approached his fifties.",
    "options": [
      "middle-aged",
      "relieved",
      "miraculous",
      "relaxing"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Most families living in this suburban neighborhood belong to the ______, earning a stable income and owning their homes.",
    "options": [
      "exercise the authority",
      "middle class",
      "motorized wheelchair",
      "ban private vehicles from"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The government is building more nursing homes to provide better medical care for the country's ______ population.",
    "options": [
      "aging",
      "social interaction",
      "refrain from",
      "is senior to"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Taiwan has officially become an ______, which means there are fewer young workers to support the retired population.",
    "options": [
      "feel incredibly tense",
      "conduct an orchestra",
      "prohibit unauthorized staff from",
      "ageing society"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The local movie theater kindly offers much cheaper movie tickets to students and ______ during the weekday afternoons.",
    "options": [
      "relaxing",
      "senior",
      "intensive",
      "ancient"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Every ______ living in this city can take public transportation for free by showing their special identity card.",
    "options": [
      "lift the ban",
      "tense mood",
      "senior citizen",
      "conduct an orchestra"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Although Marcus is much younger than Kevin, he ______ Kevin because he was promoted to manager last year.",
    "options": [
      "perform an act of kindness",
      "middle class",
      "conduct heat",
      "is senior to"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Since Chloe just joined the accounting department last week, she ______ everyone else in terms of work experience.",
    "options": [
      "conduct an interview",
      "is junior to",
      "intensive course",
      "motorized wheelchair"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "If you genuinely want to lose some extra weight, you must set a ______ the amount of sweet food you eat.",
    "options": [
      "limit",
      "restraint",
      "referendum",
      "inhibition"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The city council decided to ______ along the busy residential area to minimize traffic accidents and ensure pedestrian safety.",
    "options": [
      "exercise strict control",
      "perform an act of kindness",
      "set a speed limit",
      "conduct an orchestra"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "His only noticeable ______ as a professional fashion model is that he is actually a little bit too short.",
    "options": [
      "presence",
      "limitation",
      "relief",
      "inhibition"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Because of the terrible water shortage, the city council imposed a ______ on washing cars and watering gardens.",
    "options": [
      "strict limitation",
      "is junior to",
      "anxiety disorder",
      "hold a ceremony"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The government decided to ______ civilian access to the military zone to protect top-secret scientific experiments.",
    "options": [
      "facilitate",
      "notice",
      "prohibit",
      "restrict"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The prestigious law firm thoroughly evaluated the new trade ______ imposed on imported goods at the port.",
    "options": [
      "inhibition",
      "relaxation",
      "restriction",
      "restraint"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The strict city council intends to ______ entering the crowded commercial area during rush hours.",
    "options": [
      "conduct a survey",
      "set a speed limit",
      "transform a into b",
      "ban private vehicles from"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The president decided to ______ on foreign technology products after the trade agreement went smoothly.",
    "options": [
      "ban private vehicles from",
      "lift the ban",
      "practice a religious ritual",
      "exercise patience"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "New traffic regulations strictly ______ the parking of any private vehicle along the narrow streets of the residential area.",
    "options": [
      "prohibit",
      "facilitate",
      "convert",
      "restrict"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The strict company policy will ______ gaining access to the secure database framework of the corporation.",
    "options": [
      "exercise caution",
      "intensive course",
      "prohibit unauthorized staff from",
      "exercise the authority"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Extreme winter weather will heavily ______ delivering the express cargo to the harbor.",
    "options": [
      "the elderly",
      "conduct an orchestra",
      "refrain from",
      "inhibit the logistics workers from"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The student successfully overcame her initial ______ and made an active attempt to state her opinion clearly.",
    "options": [
      "inhibition",
      "miracle",
      "restriction",
      "absence"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "All participants in the scientific experiment must ______ smoking before the leading researcher begins the assessment.",
    "options": [
      "interact with",
      "refrain from",
      "bulletin board",
      "social interaction"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The police officers exercised remarkable ______ when dealing with the highly aggressive protesters at the crime scene.",
    "options": [
      "miracle",
      "limitation",
      "restraint",
      "notice"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The central bank attempts to ______ over the national currency to prevent sudden inflation in the market.",
    "options": [
      "conduct a research project",
      "exercise strict control",
      "interact with",
      "senior citizen"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The ambitious student needs to ______ to study for the standardized exam instead of playing video games.",
    "options": [
      "exercise civil rights",
      "practice a religious ritual",
      "interact with",
      "exercise self-discipline"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Drivers must ______ when navigating the narrow and slippery mountain roads during a severe winter storm.",
    "options": [
      "perform a surgery",
      "is junior to",
      "exercise caution",
      "conduct an interview"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The leading researcher reminded his young assistants to ______ while waiting for the scientific data to compile.",
    "options": [
      "exercise patience",
      "bulletin board",
      "ageing society",
      "feel incredibly tense"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The newly appointed military commander decided to ______ to restrict civilian access to the critical crime scene.",
    "options": [
      "medical facility",
      "exercise the authority",
      "is senior to",
      "ban private vehicles from"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "All citizens are heavily encouraged to ______ to vote in the upcoming presidential election and referendum next month.",
    "options": [
      "interact with",
      "social interaction",
      "intensive course",
      "exercise civil rights"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "The progressive political party urged every single citizen to exercise their legal right to vote in the upcoming presidential ______.",
    "options": [
      "bulletin",
      "presence",
      "election",
      "anxiety"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "The government decided to conduct a national ______ to let citizens directly determine whether to alter the existing tariff laws.",
    "options": [
      "referendum",
      "bulletin",
      "restraint",
      "relaxation"
    ],
    "answer": 0,
    "vocabIndex": 35
  },
  {
    "q": "The local tribe gathered at the ancient temple to ______ to pray for a bountiful autumn harvest.",
    "options": [
      "exercise the authority",
      "practice a religious ritual",
      "refrain from",
      "social interaction"
    ],
    "answer": 1,
    "vocabIndex": 36
  },
  {
    "q": "After passing the rigorous bar exam, the progressive lawyer decided to ______ at a prestigious international law firm.",
    "options": [
      "practice medicine",
      "the elderly",
      "practice law",
      "feel incredibly tense"
    ],
    "answer": 2,
    "vocabIndex": 37
  },
  {
    "q": "The skilled surgeon obtained her official license and began to ______ in a remote rural community that lacked facilities.",
    "options": [
      "tense mood",
      "relieve the terrible physical tension",
      "conduct a research project",
      "practice medicine"
    ],
    "answer": 3,
    "vocabIndex": 38
  },
  {
    "q": "The experienced chief surgeon will ______ tomorrow morning to repair the patient's severely damaged mechanical heart.",
    "options": [
      "perform a surgery",
      "conduct a survey",
      "prohibit unauthorized staff from",
      "ban private vehicles from"
    ],
    "answer": 0,
    "vocabIndex": 39
  },
  {
    "q": "Every loyal police officer is fully expected to ______ with complete integrity and protect local communities.",
    "options": [
      "practice medicine",
      "perform a duty",
      "strict limitation",
      "tense mood"
    ],
    "answer": 1,
    "vocabIndex": 40
  },
  {
    "q": "Even a small gesture can make a significant difference when you ______ for a complete stranger.",
    "options": [
      "perform an act of kindness",
      "practice medicine",
      "exercise strict control",
      "medical facility"
    ],
    "answer": 0,
    "vocabIndex": 41
  },
  {
    "q": "The software engineering team plans to ______ to assess whether the new automated system operates smoothly.",
    "options": [
      "ban private vehicles from",
      "perform a surgery",
      "motorized wheelchair",
      "conduct an experiment"
    ],
    "answer": 3,
    "vocabIndex": 42
  },
  {
    "q": "The leading university received a massive government grant to ______ on endangered wild animal species.",
    "options": [
      "feel incredibly tense",
      "exercise strict control",
      "conduct a research project",
      "throw a party"
    ],
    "answer": 2,
    "vocabIndex": 43
  },
  {
    "q": "The marketing firm decided to ______ to evaluate consumer satisfaction regarding the new portable devices.",
    "options": [
      "conduct a survey",
      "hold a ceremony",
      "perform a surgery",
      "physical therapy"
    ],
    "answer": 0,
    "vocabIndex": 44
  },
  {
    "q": "The human resources department will ______ tomorrow to assess the applicant's mechanical engineering skills.",
    "options": [
      "perform a duty",
      "conduct an interview",
      "conduct an experiment",
      "wheelchair bound"
    ],
    "answer": 1,
    "vocabIndex": 45
  },
  {
    "q": "The world-renowned musician was invited to ______ during the international charity concert next weekend.",
    "options": [
      "conduct a survey",
      "conduct electricity",
      "conduct an orchestra",
      "practice law"
    ],
    "answer": 2,
    "vocabIndex": 46
  },
  {
    "q": "Copper and aluminum are highly valued in manufacturing because they can ______ much faster than plastic materials.",
    "options": [
      "lift the ban",
      "appear magically",
      "strict limitation",
      "conduct heat"
    ],
    "answer": 3,
    "vocabIndex": 47
  },
  {
    "q": "Pure water itself is a poor conductor, but dissolved minerals allow the liquid to ______ very efficiently.",
    "options": [
      "exercise self-discipline",
      "conduct electricity",
      "conduct a survey",
      "conduct heat"
    ],
    "answer": 1,
    "vocabIndex": 48
  },
  {
    "q": "The indigenous tribe gathered near the ancient harbor to ______ to pray for a bountiful and safe fishing season.",
    "options": [
      "ban private vehicles from",
      "tense mood",
      "set a speed limit",
      "hold a ceremony"
    ],
    "answer": 3,
    "vocabIndex": 49
  },
  {
    "q": "The ambitious entrepreneur decided to ______ to celebrate the international corporation's successful business expansion.",
    "options": [
      "throw a party",
      "conduct heat",
      "strict limitation",
      "exercise patience"
    ],
    "answer": 0,
    "vocabIndex": 50
  },
  {
    "q": "Did you happen to ______ that Sarah was wearing a completely different dress when she returned from the bathroom?",
    "options": [
      "prohibit",
      "facilitate",
      "notice",
      "convert"
    ],
    "answer": 2,
    "vocabIndex": 51
  },
  {
    "q": "The school principal put up a large ______ next to the main entrance to inform students that the annual sports day has been postponed.",
    "options": [
      "notice",
      "election",
      "inhibition",
      "bulletin"
    ],
    "answer": 0,
    "vocabIndex": 52
  },
  {
    "q": "After he finally left his stressful home environment, there was a highly ______ change in his overall daily attitude.",
    "options": [
      "senior",
      "present",
      "abstract",
      "noticeable"
    ],
    "answer": 3,
    "vocabIndex": 53
  },
  {
    "q": "The hospital issued a regular medical ______ regarding the president's health condition to keep the anxious public informed.",
    "options": [
      "inhibition",
      "restraint",
      "bulletin",
      "orphan"
    ],
    "answer": 2,
    "vocabIndex": 54
  },
  {
    "q": "Students frequently check the ______ in the hallway to see the latest updates about club activities and school events.",
    "options": [
      "social interaction",
      "bulletin board",
      "tense mood",
      "middle class"
    ],
    "answer": 1,
    "vocabIndex": 55
  },
  {
    "q": "It was quite ______ to everyone in the room that the nervous man was lying about his true identity.",
    "options": [
      "abstract",
      "tense",
      "relaxing",
      "apparent"
    ],
    "answer": 3,
    "vocabIndex": 56
  },
  {
    "q": "It was ______ to everyone in the room that Leo was nervous, because his hands were shaking violently during the presentation.",
    "options": [
      "intensive",
      "obvious",
      "present",
      "middle-aged"
    ],
    "answer": 1,
    "vocabIndex": 57
  },
  {
    "q": "The politician's completely ______ answer to the journalist's serious question left the entire audience feeling extremely confused and frustrated.",
    "options": [
      "middle-aged",
      "relaxed",
      "ambiguous",
      "obvious"
    ],
    "answer": 2,
    "vocabIndex": 58
  },
  {
    "q": "The detective found the witness's description of the suspect very ______, as she could only remember that he was wearing a dark jacket.",
    "options": [
      "vague",
      "noticeable",
      "senior",
      "apparent"
    ],
    "answer": 0,
    "vocabIndex": 59
  },
  {
    "q": "Because Chloe accidentally moved her hand while clicking the shutter, the photo she took of the beautiful sunset turned out completely ______.",
    "options": [
      "obvious",
      "blurry",
      "expressive",
      "aged"
    ],
    "answer": 1,
    "vocabIndex": 60
  },
  {
    "q": "Truth and justice are ______ concepts that can be difficult for young children to understand, as they usually prefer concrete examples they can see.",
    "options": [
      "apparent",
      "intensive",
      "magical",
      "abstract"
    ],
    "answer": 3,
    "vocabIndex": 61
  },
  {
    "q": "When the man suddenly collapsed on the street, the ambulance rushed him directly to a nearby medical ______.",
    "options": [
      "facility",
      "limit",
      "interaction",
      "relaxation"
    ],
    "answer": 0,
    "vocabIndex": 62
  },
  {
    "q": "In rural areas, it can sometimes take hours to drive a sick patient to the nearest fully equipped ______.",
    "options": [
      "social interaction",
      "wheelchair bound",
      "medical facility",
      "conduct an orchestra"
    ],
    "answer": 2,
    "vocabIndex": 63
  },
  {
    "q": "The new interactive teaching software is specifically designed to deeply ______ faster and more effective learning for young children.",
    "options": [
      "prohibit",
      "facilitate",
      "relieve",
      "restrict"
    ],
    "answer": 1,
    "vocabIndex": 64
  },
  {
    "q": "The poor old man unfortunately can't walk anymore and desperately needs a ______ just to get around his house.",
    "options": [
      "orphan",
      "limit",
      "bulletin",
      "wheelchair"
    ],
    "answer": 3,
    "vocabIndex": 65
  },
  {
    "q": "Despite being entirely ______ for most of his adult life, the inspiring man managed to write three brilliant books.",
    "options": [
      "wheelchair bound",
      "anxiety disorder",
      "middle class",
      "transform a into b"
    ],
    "answer": 0,
    "vocabIndex": 66
  },
  {
    "q": "Thanks to his highly advanced ______, the disabled veteran can easily navigate the busy city streets completely by himself.",
    "options": [
      "strict limitation",
      "exercise caution",
      "motorized wheelchair",
      "refrain from"
    ],
    "answer": 2,
    "vocabIndex": 67
  },
  {
    "q": "Because Carol doesn't have any classes with Sam, they unfortunately don't have much personal ______ during the long school day.",
    "options": [
      "depression",
      "interaction",
      "therapy",
      "restraint"
    ],
    "answer": 1,
    "vocabIndex": 68
  },
  {
    "q": "The friendly kindergarten teacher always strongly encourages her shy students to confidently ______ each other during outdoor playtime.",
    "options": [
      "physical therapy",
      "middle class",
      "exercise caution",
      "interact with"
    ],
    "answer": 3,
    "vocabIndex": 69
  },
  {
    "q": "The fascinating science museum features many brilliant ______ exhibits that brilliantly allow children to physically test out physics principles.",
    "options": [
      "collective",
      "present",
      "interactive",
      "intensive"
    ],
    "answer": 2,
    "vocabIndex": 70
  },
  {
    "q": "Maintaining regular and positive ______ is incredibly important for preserving an elderly person's mental health and overall happiness.",
    "options": [
      "social interaction",
      "throw a party",
      "wheelchair bound",
      "intensive course"
    ],
    "answer": 0,
    "vocabIndex": 71
  },
  {
    "q": "The beautifully decorated theme park creates a truly ______ experience for young children visiting it for the very first time.",
    "options": [
      "talkative",
      "vague",
      "relaxed",
      "magical"
    ],
    "answer": 3,
    "vocabIndex": 72
  },
  {
    "q": "During the impressive performance, the floating cup appeared to ______ hover completely unsupported right above the wooden desk.",
    "options": [
      "magically",
      "expression",
      "physical therapy",
      "anxiety"
    ],
    "answer": 0,
    "vocabIndex": 73
  },
  {
    "q": "The chief surgeon stated that it was a complete ______ that the patient survived such a severe heart failure during the operation.",
    "options": [
      "depression",
      "miracle",
      "relief",
      "referendum"
    ],
    "answer": 1,
    "vocabIndex": 74
  },
  {
    "q": "The injured athlete made a ______ recovery just a few weeks before the highly anticipated international programming tournament.",
    "options": [
      "blurry",
      "magical",
      "miraculous",
      "relaxed"
    ],
    "answer": 2,
    "vocabIndex": 75
  },
  {
    "q": "Despite driving through a severe winter storm on the narrow mountain road, the entire family ______ arrived home safely without any accidents.",
    "options": [
      "restrict",
      "middle-aged",
      "election",
      "miraculously"
    ],
    "answer": 3,
    "vocabIndex": 76
  },
  {
    "q": "Just when we desperately needed a taxi in the pouring rain, one seemed to ______ right at the corner.",
    "options": [
      "inhibit the logistics workers from",
      "appear magically",
      "conduct an orchestra",
      "medical facility"
    ],
    "answer": 1,
    "vocabIndex": 77
  },
  {
    "q": "Buying that expensive new modern furniture completely ______ their dark and boring living room into a bright, stylish space.",
    "options": [
      "relieve",
      "convert",
      "transformed",
      "notice"
    ],
    "answer": 2,
    "vocabIndex": 78
  },
  {
    "q": "The ambitious city government officially plans to successfully ______ a beautiful large shopping complex.",
    "options": [
      "transform a into b",
      "perform an act of kindness",
      "bulletin board",
      "is junior to"
    ],
    "answer": 0,
    "vocabIndex": 79
  },
  {
    "q": "The butterfly's miraculous physical ______ from a tiny, creeping caterpillar is widely considered one of nature's most beautiful processes.",
    "options": [
      "relaxation",
      "orphan",
      "restriction",
      "transformation"
    ],
    "answer": 3,
    "vocabIndex": 80
  },
  {
    "q": "The wealthy businessman decided to expensively ______ his massive basement into a fully equipped private cinema for his family.",
    "options": [
      "transformed",
      "convert",
      "relax",
      "express"
    ],
    "answer": 1,
    "vocabIndex": 81
  },
  {
    "q": "After successfully finishing his incredibly difficult final exams, Ian finally had the opportunity to just sit down and ______.",
    "options": [
      "restrict",
      "transformed",
      "relax",
      "prohibit"
    ],
    "answer": 2,
    "vocabIndex": 82
  },
  {
    "q": "Exhausted Sasha firmly told me that she specifically wants her upcoming summer vacation to be entirely about rest and ______.",
    "options": [
      "relaxation",
      "wheelchair",
      "miracle",
      "therapy"
    ],
    "answer": 0,
    "vocabIndex": 83
  },
  {
    "q": "The manager's calm and highly ______ leadership style surprisingly helps the entire office remain highly productive during stressful deadlines.",
    "options": [
      "vague",
      "abstract",
      "middle-aged",
      "relaxed"
    ],
    "answer": 3,
    "vocabIndex": 84
  },
  {
    "q": "Getting a professional deep tissue massage after a terribly stressful week at work is arguably the most ______ experience possible.",
    "options": [
      "depressed",
      "middle-aged",
      "relaxing",
      "vague"
    ],
    "answer": 2,
    "vocabIndex": 85
  },
  {
    "q": "The unbearable physical ______ in his sore shoulders finally began to disappear after he took a long, hot shower.",
    "options": [
      "orphanage",
      "tension",
      "interaction",
      "referendum"
    ],
    "answer": 1,
    "vocabIndex": 86
  },
  {
    "q": "You don't have to come to the party, but your pleasant ______ would undoubtedly make everyone there incredibly happy.",
    "options": [
      "presence",
      "interaction",
      "orphan",
      "wheelchair"
    ],
    "answer": 0,
    "vocabIndex": 87
  },
  {
    "q": "Naughty Ted surprisingly always acts extremely well-behaved and polite whenever he is ______ his strict parents.",
    "options": [
      "set a speed limit",
      "conduct an experiment",
      "physical therapy",
      "in the presence of"
    ],
    "answer": 3,
    "vocabIndex": 88
  },
  {
    "q": "The principal demanded to ensure that every single senior student was actually physically ______ in the auditorium for the speech.",
    "options": [
      "relaxed",
      "talkative",
      "present",
      "apparent"
    ],
    "answer": 2,
    "vocabIndex": 89
  },
  {
    "q": "The manager noted that John's continued and entirely unexplained ______ from the important weekly meetings was becoming a serious issue.",
    "options": [
      "orphanage",
      "absence",
      "restraint",
      "anxiety"
    ],
    "answer": 1,
    "vocabIndex": 90
  },
  {
    "q": "The generous charity specifically works hard to securely provide safe housing and good food for every homeless ______ in the city.",
    "options": [
      "orphan",
      "interaction",
      "facility",
      "referendum"
    ],
    "answer": 0,
    "vocabIndex": 91
  },
  {
    "q": "Poor John sadly grew up in a crowded local ______ after his loving parents tragically passed away in a car accident.",
    "options": [
      "orphan",
      "relief",
      "miracle",
      "orphanage"
    ],
    "answer": 3,
    "vocabIndex": 92
  },
  {
    "q": "Because the quiet man was not naturally ______, I simply didn't know what he actually wanted from the store.",
    "options": [
      "facilitate",
      "transformed",
      "express",
      "relax"
    ],
    "answer": 2,
    "vocabIndex": 93
  },
  {
    "q": "The incredibly talented actor's highly ______ face perfectly communicated his deep sorrow without him ever needing to speak a word.",
    "options": [
      "expressive",
      "obvious",
      "present",
      "senior"
    ],
    "answer": 0,
    "vocabIndex": 94
  },
  {
    "q": "Writing incredibly beautiful poetry was her absolute favorite form of emotional ______ whenever she felt lonely or deeply misunderstood.",
    "options": [
      "election",
      "expression",
      "relief",
      "absence"
    ],
    "answer": 1,
    "vocabIndex": 95
  },
  {
    "q": "Unlike her exceptionally quiet sister, Maria is a highly ______ person who can easily chat with complete strangers for hours.",
    "options": [
      "expressive",
      "relieved",
      "talkative",
      "tense"
    ],
    "answer": 2,
    "vocabIndex": 96
  },
  {
    "q": "Rebuilding the completely destroyed town after the terrible earthquake clearly required an immense ______ effort from every single surviving citizen.",
    "options": [
      "interactive",
      "collective",
      "ambiguous",
      "intensive"
    ],
    "answer": 1,
    "vocabIndex": 97
  },
  {
    "q": "Alice unfortunately feels extremely ______ most of the time because her demanding corporate job is very difficult and highly stressful.",
    "options": [
      "tense",
      "abstract",
      "middle-aged",
      "ambiguous"
    ],
    "answer": 0,
    "vocabIndex": 98
  },
  {
    "q": "It is completely natural to ______ and anxious right before delivering an important speech to a large, silent audience.",
    "options": [
      "appear magically",
      "practice medicine",
      "aging",
      "feel incredibly tense"
    ],
    "answer": 3,
    "vocabIndex": 99
  },
  {
    "q": "The unpredictable ______ in the dark room was palpable as the angry family awkwardly ate their dinner in complete silence.",
    "options": [
      "tense mood",
      "exercise self-discipline",
      "inhibit the logistics workers from",
      "aging"
    ],
    "answer": 0,
    "vocabIndex": 100
  },
  {
    "q": "The rising political ______ between the two neighbouring countries forced the international border to close temporarily.",
    "options": [
      "anxiety",
      "restraint",
      "notice",
      "tension"
    ],
    "answer": 3,
    "vocabIndex": 101
  },
  {
    "q": "Engaging in regular deep breathing exercises can effectively ______ that builds up during a long workday.",
    "options": [
      "exercise caution",
      "relieve the terrible physical tension",
      "inhibit the logistics workers from",
      "tense mood"
    ],
    "answer": 1,
    "vocabIndex": 102
  },
  {
    "q": "The engineering team underwent ______ training to master the newly deployed automated server frameworks.",
    "options": [
      "anxious",
      "obvious",
      "intensive",
      "present"
    ],
    "answer": 2,
    "vocabIndex": 103
  },
  {
    "q": "Joining an ______ in asset management helped the young intern quickly fulfill his professional potential.",
    "options": [
      "appear magically",
      "refrain from",
      "anxiety disorder",
      "intensive course"
    ],
    "answer": 3,
    "vocabIndex": 104
  },
  {
    "q": "Gus cautiously took some expensive prescription medicine to quickly ______ the sharp, shooting pain in his lower back.",
    "options": [
      "express",
      "relieve",
      "transformed",
      "prohibit"
    ],
    "answer": 1,
    "vocabIndex": 105
  },
  {
    "q": "Joe immediately felt a huge sense of deep ______ after the experienced doctor told him he would definitely recover completely.",
    "options": [
      "referendum",
      "inhibition",
      "relief",
      "limit"
    ],
    "answer": 2,
    "vocabIndex": 106
  },
  {
    "q": "The terribly worried parents were visibly ______ when the brave police officer safely brought their missing little boy back home.",
    "options": [
      "relieved",
      "apparent",
      "ambiguous",
      "vague"
    ],
    "answer": 0,
    "vocabIndex": 107
  },
  {
    "q": "Poor Chris has tragically suffered from crippling ______ for much of his difficult adult life, making it hard to socialize.",
    "options": [
      "notice",
      "relaxation",
      "anxiety",
      "transformation"
    ],
    "answer": 2,
    "vocabIndex": 108
  },
  {
    "q": "The young job applicant felt incredibly ______ and sweaty while sitting quietly in the cold waiting room before his interview.",
    "options": [
      "anxious",
      "present",
      "tense",
      "talkative"
    ],
    "answer": 0,
    "vocabIndex": 109
  },
  {
    "q": "The loving mother stood by the window and completely ______ watched the dark street, waiting for her teenage daughter's return.",
    "options": [
      "limitation",
      "anxiously",
      "notice",
      "ancient"
    ],
    "answer": 1,
    "vocabIndex": 110
  },
  {
    "q": "It is highly recommended to seek professional psychological help if you constantly suspect you might officially have an ______.",
    "options": [
      "intensive course",
      "refrain from",
      "medical facility",
      "anxiety disorder"
    ],
    "answer": 3,
    "vocabIndex": 111
  },
  {
    "q": "The experienced counselor provided professional guidance to help the young student overcome her severe academic ______.",
    "options": [
      "limitation",
      "restraint",
      "depression",
      "therapy"
    ],
    "answer": 2,
    "vocabIndex": 112
  },
  {
    "q": "Feeling heavily ______ after the sudden business failure, the ambitious entrepreneur decided to take a short break to restore his energy.",
    "options": [
      "miraculous",
      "depressed",
      "relaxed",
      "tense"
    ],
    "answer": 1,
    "vocabIndex": 113
  }
];

const LOOKUP = {
  "therapy": {
    "pos": "n.",
    "en_def": "treatment intended to relieve or heal a disorder.",
    "cn_def": "治療；療法",
    "combined": [
      {
        "pos": "n.",
        "en_def": "treatment intended to relieve or heal a disorder.",
        "cn_def": "治療；療法"
      }
    ]
  },
  "physical therapy": {
    "pos": "phr.",
    "en_def": "the treatment of disease, injury, or deformity by physical methods such as massage or exercise.",
    "cn_def": "物理治療",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the treatment of disease, injury, or deformity by physical methods such as massage or exercise.",
        "cn_def": "物理治療"
      }
    ]
  },
  "ancient": {
    "pos": "adj.",
    "en_def": "belonging to the very distant past and no longer in existence.",
    "cn_def": "古老的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "belonging to the very distant past and no longer in existence.",
        "cn_def": "古老的"
      }
    ]
  },
  "elderly": {
    "pos": "adj.",
    "en_def": "old or aging.",
    "cn_def": "年長的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "old or aging.",
        "cn_def": "年長的"
      }
    ]
  },
  "the elderly": {
    "pos": "n.",
    "en_def": "old people considered as a group.",
    "cn_def": "年長者（集合名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "old people considered as a group.",
        "cn_def": "年長者（集合名詞）"
      }
    ]
  },
  "aged": {
    "pos": "adj.",
    "en_def": "having lived for a specified length of time; having grown old.",
    "cn_def": "...歲的；年老的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having lived for a specified length of time; having grown old.",
        "cn_def": "...歲的；年老的"
      }
    ]
  },
  "middle-aged": {
    "pos": "adj.",
    "en_def": "Being in the period of life between youth and old age, typically from about 40 to 60 years old.",
    "cn_def": "中年的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Being in the period of life between youth and old age, typically from about 40 to 60 years old.",
        "cn_def": "中年的"
      }
    ]
  },
  "middle class": {
    "pos": "n. [C]",
    "en_def": "A social group between the rich and the poor, including professional and business people.",
    "cn_def": "中產階級",
    "combined": [
      {
        "pos": "n. [C]",
        "en_def": "A social group between the rich and the poor, including professional and business people.",
        "cn_def": "中產階級"
      }
    ]
  },
  "aging": {
    "pos": "adj.",
    "en_def": "Becoming older, or showing signs of growing old.",
    "cn_def": "變老的、高齡化的、老化的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Becoming older, or showing signs of growing old.",
        "cn_def": "變老的、高齡化的、老化的"
      }
    ]
  },
  "ageing / aging": {
    "pos": "adj.",
    "en_def": "Becoming older, or showing signs of growing old.",
    "cn_def": "變老的、高齡化的、老化的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Becoming older, or showing signs of growing old.",
        "cn_def": "變老的、高齡化的、老化的"
      }
    ]
  },
  "ageing society": {
    "pos": "n.",
    "en_def": "A society where the average age of the population increases because of falling birth rates and longer life-spans.",
    "cn_def": "高齡化社會",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A society where the average age of the population increases because of falling birth rates and longer life-spans.",
        "cn_def": "高齡化社會"
      }
    ]
  },
  "senior": {
    "pos": "n. / adj.",
    "en_def": "an older person; of a more advanced age.",
    "cn_def": "年長者；資深的",
    "combined": [
      {
        "pos": "n. / adj.",
        "en_def": "an older person; of a more advanced age.",
        "cn_def": "年長者；資深的"
      }
    ]
  },
  "senior citizen": {
    "pos": "n.",
    "en_def": "An older person, usually someone who has retired from work (often over 65).",
    "cn_def": "老年人、銀髮族",
    "combined": [
      {
        "pos": "n.",
        "en_def": "An older person, usually someone who has retired from work (often over 65).",
        "cn_def": "老年人、銀髮族"
      }
    ]
  },
  "is senior to": {
    "pos": "phr.",
    "en_def": "To have a higher rank, position, or status than someone else in an organization or company.",
    "cn_def": "職位比…高、資歷比…深",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To have a higher rank, position, or status than someone else in an organization or company.",
        "cn_def": "職位比…高、資歷比…深"
      }
    ]
  },
  "is junior to": {
    "pos": "phr.",
    "en_def": "To have a lower rank, position, or status than someone else in an organization or company.",
    "cn_def": "職位比…低、資歷比…淺",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To have a lower rank, position, or status than someone else in an organization or company.",
        "cn_def": "職位比…低、資歷比…淺"
      }
    ]
  },
  "limit": {
    "pos": "v. n.",
    "en_def": "a point or level beyond which something does not or may not extend or pass.",
    "cn_def": "限制；極限",
    "combined": [
      {
        "pos": "v. n.",
        "en_def": "a point or level beyond which something does not or may not extend or pass.",
        "cn_def": "限制；極限"
      }
    ]
  },
  "set a speed limit": {
    "pos": "phr.",
    "en_def": "to establish a legal maximum or minimum speed allowed for vehicles traveling on a specific road",
    "cn_def": "設定速限",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to establish a legal maximum or minimum speed allowed for vehicles traveling on a specific road",
        "cn_def": "設定速限"
      }
    ]
  },
  "limitation": {
    "pos": "n.",
    "en_def": "a limiting rule or circumstance; a restriction.",
    "cn_def": "限制；極限",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a limiting rule or circumstance; a restriction.",
        "cn_def": "限制；極限"
      }
    ]
  },
  "strict limitation": {
    "pos": "phr.",
    "en_def": "a severe or unyielding restriction.",
    "cn_def": "嚴格的限制",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a severe or unyielding restriction.",
        "cn_def": "嚴格的限制"
      }
    ]
  },
  "restrict": {
    "pos": "v.",
    "en_def": "to put a limit on someone or something, or to keep something within strict legal boundaries",
    "cn_def": "限制；限定（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to put a limit on someone or something, or to keep something within strict legal boundaries",
        "cn_def": "限制；限定（動詞）"
      }
    ]
  },
  "restriction": {
    "pos": "n.",
    "en_def": "an official rule, statute, or law that limits what people can do or how a total system operates",
    "cn_def": "限制（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an official rule, statute, or law that limits what people can do or how a total system operates",
        "cn_def": "限制（名詞）"
      }
    ]
  },
  "ban ...from": {
    "pos": "phr.",
    "en_def": "to officially or legally forbid someone from doing something, entering a place, or using a service",
    "cn_def": "禁止...做...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to officially or legally forbid someone from doing something, entering a place, or using a service",
        "cn_def": "禁止...做..."
      }
    ]
  },
  "ban private vehicles from": {
    "pos": "phr.",
    "en_def": "to officially or legally forbid someone from doing something, entering a place, or using a service",
    "cn_def": "禁止...做...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to officially or legally forbid someone from doing something, entering a place, or using a service",
        "cn_def": "禁止...做..."
      }
    ]
  },
  "lift the ban": {
    "pos": "phr.",
    "en_def": "to officially remove or cancel a legal prohibition or restriction that was previously established",
    "cn_def": "解除禁令",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to officially remove or cancel a legal prohibition or restriction that was previously established",
        "cn_def": "解除禁令"
      }
    ]
  },
  "prohibit": {
    "pos": "v.",
    "en_def": "to officially or legally forbid something by a law, rule, statue, or authoritative decree",
    "cn_def": "禁止；不准（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to officially or legally forbid something by a law, rule, statue, or authoritative decree",
        "cn_def": "禁止；不准（動詞）"
      }
    ]
  },
  "prohibit ...from": {
    "pos": "phr.",
    "en_def": "to formally prevent or legally stop an individual or group from doing a specific activity",
    "cn_def": "禁止...做...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to formally prevent or legally stop an individual or group from doing a specific activity",
        "cn_def": "禁止...做..."
      }
    ]
  },
  "prohibit unauthorized staff from": {
    "pos": "phr.",
    "en_def": "to formally prevent or legally stop an individual or group from doing a specific activity",
    "cn_def": "禁止...做...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to formally prevent or legally stop an individual or group from doing a specific activity",
        "cn_def": "禁止...做..."
      }
    ]
  },
  "inhibit the logistics workers from": {
    "pos": "phr.",
    "en_def": "to prevent, slow down, or hinder someone or something from making progress or developing naturally",
    "cn_def": "阻礙...做...；抑制...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to prevent, slow down, or hinder someone or something from making progress or developing naturally",
        "cn_def": "阻礙...做...；抑制..."
      }
    ]
  },
  "inhibit...from": {
    "pos": "phr.",
    "en_def": "to prevent, slow down, or hinder someone or something from making progress or developing naturally",
    "cn_def": "阻礙...做...；抑制...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to prevent, slow down, or hinder someone or something from making progress or developing naturally",
        "cn_def": "阻礙...做...；抑制..."
      }
    ]
  },
  "inhibition": {
    "pos": "n.",
    "en_def": "a feeling of embarrassment or worry that prevents you from saying or doing what you truly want",
    "cn_def": "拘束；顧忌；壓抑",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling of embarrassment or worry that prevents you from saying or doing what you truly want",
        "cn_def": "拘束；顧忌；壓抑"
      }
    ]
  },
  "refrain from": {
    "pos": "phr.",
    "en_def": "to intentionally choose to stop oneself from doing something, especially an undesirable habit",
    "cn_def": "克制不去做...；忍住...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to intentionally choose to stop oneself from doing something, especially an undesirable habit",
        "cn_def": "克制不去做...；忍住..."
      }
    ]
  },
  "restraint": {
    "pos": "n.",
    "en_def": "controlled behavior, self-control, or a legal/physical restriction that limits someone's freedom or actions",
    "cn_def": "克制；抑制；約束（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "controlled behavior, self-control, or a legal/physical restriction that limits someone's freedom or actions",
        "cn_def": "克制；抑制；約束（名詞）"
      }
    ]
  },
  "exercise strict control": {
    "pos": "phr.",
    "en_def": "to actively direct, influence, or manage the behavior, operation, or development of something",
    "cn_def": "施加控制；進行管理 (補充)",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to actively direct, influence, or manage the behavior, operation, or development of something",
        "cn_def": "施加控制；進行管理 (補充)"
      }
    ]
  },
  "exercise control": {
    "pos": "phr.",
    "en_def": "to actively direct, influence, or manage the behavior, operation, or development of something",
    "cn_def": "施加控制；進行管理 (補充)",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to actively direct, influence, or manage the behavior, operation, or development of something",
        "cn_def": "施加控制；進行管理 (補充)"
      }
    ]
  },
  "exercise self-discipline": {
    "pos": "phr.",
    "en_def": "to systematically control one's own desires, emotions, and behaviors to achieve long-term goals",
    "cn_def": "展現自律；實踐自我克制",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to systematically control one's own desires, emotions, and behaviors to achieve long-term goals",
        "cn_def": "展現自律；實踐自我克制"
      }
    ]
  },
  "exercise caution": {
    "pos": "phr.",
    "en_def": "to be purposefully careful and alert in order to avoid potential danger, mistakes, or accidents",
    "cn_def": "保持謹慎；格外小心",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be purposefully careful and alert in order to avoid potential danger, mistakes, or accidents",
        "cn_def": "保持謹慎；格外小心"
      }
    ]
  },
  "exercise patience": {
    "pos": "phr.",
    "en_def": "to intentionally remain calm and controlled while waiting for something or dealing with difficulties",
    "cn_def": "保持耐心",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to intentionally remain calm and controlled while waiting for something or dealing with difficulties",
        "cn_def": "保持耐心"
      }
    ]
  },
  "exercise the authority": {
    "pos": "phr.",
    "en_def": "to officially use legal power, command, or directional control over an organization or state",
    "cn_def": "行使公權力；行使職權",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to officially use legal power, command, or directional control over an organization or state",
        "cn_def": "行使公權力；行使職權"
      }
    ]
  },
  "exercise civil rights": {
    "pos": "phr.",
    "en_def": "to formally use or apply a legal prerogative, freedom, or privilege guaranteed by the law",
    "cn_def": "行使公民權利",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to formally use or apply a legal prerogative, freedom, or privilege guaranteed by the law",
        "cn_def": "行使公民權利"
      }
    ]
  },
  "election": {
    "pos": "n.",
    "en_def": "a formal and organized choice by vote of a person for a political office or other position",
    "cn_def": "選舉",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a formal and organized choice by vote of a person for a political office or other position",
        "cn_def": "選舉"
      }
    ]
  },
  "referendum": {
    "pos": "n.",
    "en_def": "a general vote by the electorate on a single political question which has been referred to them for a direct decision",
    "cn_def": "公民投票；公投",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a general vote by the electorate on a single political question which has been referred to them for a direct decision",
        "cn_def": "公民投票；公投"
      }
    ]
  },
  "practice a religious ritual": {
    "pos": "phr.",
    "en_def": "to systematically perform a traditional ceremony, custom, or service associated with a faith",
    "cn_def": "履行宗教儀式",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to systematically perform a traditional ceremony, custom, or service associated with a faith",
        "cn_def": "履行宗教儀式"
      }
    ]
  },
  "practice law": {
    "pos": "phr.",
    "en_def": "to officially work as a professional lawyer or legal advisor within a specific legislative framework",
    "cn_def": "執業（律師）；從事法律工作",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to officially work as a professional lawyer or legal advisor within a specific legislative framework",
        "cn_def": "執業（律師）；從事法律工作"
      }
    ]
  },
  "practice medicine": {
    "pos": "phr.",
    "en_def": "to officially work as a qualified medical doctor, treating patients and prescribing therapies",
    "cn_def": "執業（醫生）；從事醫療工作",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to officially work as a qualified medical doctor, treating patients and prescribing therapies",
        "cn_def": "執業（醫生）；從事醫療工作"
      }
    ]
  },
  "perform a surgery": {
    "pos": "phr.",
    "en_def": "to systematically carry out a medical operation on a patient to treat a physical injury or illness",
    "cn_def": "進行手術",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to systematically carry out a medical operation on a patient to treat a physical injury or illness",
        "cn_def": "進行手術"
      }
    ]
  },
  "perform a duty": {
    "pos": "phr.",
    "en_def": "to actively execute, fulfill, or carry out a moral obligation, legal responsibility, or assigned task",
    "cn_def": "履行職責；執行任務",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to actively execute, fulfill, or carry out a moral obligation, legal responsibility, or assigned task",
        "cn_def": "履行職責；執行任務"
      }
    ]
  },
  "perform an act of kindness": {
    "pos": "phr.",
    "en_def": "to intentionally do a helpful, generous, or considerate action for another individual without expecting reward",
    "cn_def": "做出善行",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to intentionally do a helpful, generous, or considerate action for another individual without expecting reward",
        "cn_def": "做出善行"
      }
    ]
  },
  "conduct an experiment": {
    "pos": "phr.",
    "en_def": "to systematically organize and carry out a scientific test or trial to discover or verify facts",
    "cn_def": "進行實驗",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to systematically organize and carry out a scientific test or trial to discover or verify facts",
        "cn_def": "進行實驗"
      }
    ]
  },
  "conduct a research project": {
    "pos": "phr.",
    "en_def": "to professionally organize, manage, and execute a systematic academic investigation or deep study",
    "cn_def": "主導研究計畫",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to professionally organize, manage, and execute a systematic academic investigation or deep study",
        "cn_def": "主導研究計畫"
      }
    ]
  },
  "conduct a survey": {
    "pos": "phr.",
    "en_def": "to systematically gather specific opinions, data, or facts from a targeted group of participants",
    "cn_def": "進行調查",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to systematically gather specific opinions, data, or facts from a targeted group of participants",
        "cn_def": "進行調查"
      }
    ]
  },
  "conduct an interview": {
    "pos": "phr.",
    "en_def": "to formally host, guide, and ask questions during a structured meeting with a prospective candidate",
    "cn_def": "舉辦面試",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to formally host, guide, and ask questions during a structured meeting with a prospective candidate",
        "cn_def": "舉辦面試"
      }
    ]
  },
  "conduct an orchestra": {
    "pos": "phr.",
    "en_def": "to actively direct and coordinate the performance of a large musical group using hand gestures or a baton",
    "cn_def": "指揮交響樂團",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to actively direct and coordinate the performance of a large musical group using hand gestures or a baton",
        "cn_def": "指揮交響樂團"
      }
    ]
  },
  "conduct heat": {
    "pos": "phr.",
    "en_def": "to efficiently transmit thermal energy or warmth directly through a specific material or substance",
    "cn_def": "傳導熱",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to efficiently transmit thermal energy or warmth directly through a specific material or substance",
        "cn_def": "傳導熱"
      }
    ]
  },
  "conduct electricity": {
    "pos": "phr.",
    "en_def": "to efficiently allow an electrical current or energy flow to pass smoothly through a physical substance",
    "cn_def": "導電",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to efficiently allow an electrical current or energy flow to pass smoothly through a physical substance",
        "cn_def": "導電"
      }
    ]
  },
  "hold a ceremony": {
    "pos": "phr.",
    "en_def": "to formally organize and conduct a traditional, official, or ritualistic public event",
    "cn_def": "舉行儀式；舉辦典禮",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to formally organize and conduct a traditional, official, or ritualistic public event",
        "cn_def": "舉行儀式；舉辦典禮"
      }
    ]
  },
  "throw a party": {
    "pos": "phr.",
    "en_def": "to informally organize, host, and fund a celebratory social gathering for friends or colleagues",
    "cn_def": "舉辦派對；辦宴會",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to informally organize, host, and fund a celebratory social gathering for friends or colleagues",
        "cn_def": "舉辦派對；辦宴會"
      }
    ]
  },
  "notice": {
    "pos": "v.",
    "en_def": "to become aware of; the fact of observing or paying attention to something.",
    "cn_def": "注意（到）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to become aware of; the fact of observing or paying attention to something.",
        "cn_def": "注意（到）"
      },
      {
        "pos": "n.",
        "en_def": "A written or printed announcement or warning displayed for everyone to see.",
        "cn_def": "公告、通知、啟事"
      }
    ]
  },
  "noticeable": {
    "pos": "adj.",
    "en_def": "easily seen or noticed; clear or apparent.",
    "cn_def": "明顯的；引人注目的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "easily seen or noticed; clear or apparent.",
        "cn_def": "明顯的；引人注目的"
      }
    ]
  },
  "bulletin": {
    "pos": "n.",
    "en_def": "A short official statement or news report about an important matter of public interest.",
    "cn_def": "（官方的）簡報、公告、新聞快報",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A short official statement or news report about an important matter of public interest.",
        "cn_def": "（官方的）簡報、公告、新聞快報"
      }
    ]
  },
  "bulletin board": {
    "pos": "phr.",
    "en_def": "A board on a wall where people can pin notices, advertisements, or messages.",
    "cn_def": "佈告欄、公告欄",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A board on a wall where people can pin notices, advertisements, or messages.",
        "cn_def": "佈告欄、公告欄"
      }
    ]
  },
  "apparent": {
    "pos": "adj.",
    "en_def": "clearly visible or understood; obvious.",
    "cn_def": "明顯的；顯而易見的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "clearly visible or understood; obvious.",
        "cn_def": "明顯的；顯而易見的"
      }
    ]
  },
  "obvious": {
    "pos": "adj.",
    "en_def": "Easy to see, recognize, or understand.",
    "cn_def": "明顯的、顯而易見的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Easy to see, recognize, or understand.",
        "cn_def": "明顯的、顯而易見的"
      }
    ]
  },
  "ambiguous": {
    "pos": "adj.",
    "en_def": "open to more than one interpretation; having a double meaning.",
    "cn_def": "模稜兩可的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "open to more than one interpretation; having a double meaning.",
        "cn_def": "模稜兩可的"
      }
    ]
  },
  "vague": {
    "pos": "adj.",
    "en_def": "Not clear, definite, or specific in thought, expression, or details.",
    "cn_def": "模糊的、含糊的、不明確的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Not clear, definite, or specific in thought, expression, or details.",
        "cn_def": "模糊的、含糊的、不明確的"
      }
    ]
  },
  "blurry": {
    "pos": "adj.",
    "en_def": "Not clear or sharp, especially when referring to images, photos, or vision.",
    "cn_def": "模糊的、（影像）不清晰的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Not clear or sharp, especially when referring to images, photos, or vision.",
        "cn_def": "模糊的、（影像）不清晰的"
      }
    ]
  },
  "abstract": {
    "pos": "adj.",
    "en_def": "Existing as an idea, feeling, or quality rather than a physical or material object.",
    "cn_def": "抽象的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Existing as an idea, feeling, or quality rather than a physical or material object.",
        "cn_def": "抽象的"
      }
    ]
  },
  "facility": {
    "pos": "n.",
    "en_def": "space or equipment necessary for doing something.",
    "cn_def": "設施；機構",
    "combined": [
      {
        "pos": "n.",
        "en_def": "space or equipment necessary for doing something.",
        "cn_def": "設施；機構"
      }
    ]
  },
  "medical facility": {
    "pos": "phr.",
    "en_def": "a place where healthcare is provided.",
    "cn_def": "醫療機構",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a place where healthcare is provided.",
        "cn_def": "醫療機構"
      }
    ]
  },
  "facilitate": {
    "pos": "v.",
    "en_def": "to make an action or process easy or easier.",
    "cn_def": "促進；使便利",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make an action or process easy or easier.",
        "cn_def": "促進；使便利"
      }
    ]
  },
  "wheelchair": {
    "pos": "n.",
    "en_def": "a chair fitted with wheels for use as a means of transport by a person who is unable to walk.",
    "cn_def": "輪椅",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a chair fitted with wheels for use as a means of transport by a person who is unable to walk.",
        "cn_def": "輪椅"
      }
    ]
  },
  "wheelchair bound": {
    "pos": "adj.",
    "en_def": "unable to walk and thus forced to use a wheelchair.",
    "cn_def": "必須坐輪椅的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "unable to walk and thus forced to use a wheelchair.",
        "cn_def": "必須坐輪椅的"
      }
    ]
  },
  "motorized wheelchair": {
    "pos": "phr.",
    "en_def": "a wheelchair propelled by an electric motor.",
    "cn_def": "電動輪椅",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a wheelchair propelled by an electric motor.",
        "cn_def": "電動輪椅"
      }
    ]
  },
  "interaction": {
    "pos": "n.",
    "en_def": "reciprocal action or influence; communication.",
    "cn_def": "互動",
    "combined": [
      {
        "pos": "n.",
        "en_def": "reciprocal action or influence; communication.",
        "cn_def": "互動"
      }
    ]
  },
  "interact with": {
    "pos": "v.",
    "en_def": "to act in such a way as to have an effect on another; to communicate.",
    "cn_def": "互動；交流",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to act in such a way as to have an effect on another; to communicate.",
        "cn_def": "互動；交流"
      }
    ]
  },
  "interactive": {
    "pos": "adj.",
    "en_def": "allowing a two-way flow of information between a computer and a computer-user; responding to a user's input.",
    "cn_def": "互動式的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "allowing a two-way flow of information between a computer and a computer-user; responding to a user's input.",
        "cn_def": "互動式的"
      }
    ]
  },
  "social interaction": {
    "pos": "phr.",
    "en_def": "the process of acting and reacting to the people around us.",
    "cn_def": "社交互動",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the process of acting and reacting to the people around us.",
        "cn_def": "社交互動"
      }
    ]
  },
  "magical": {
    "pos": "adj.",
    "en_def": "relating to, using, or resembling magic.",
    "cn_def": "魔法的；神奇的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to, using, or resembling magic.",
        "cn_def": "魔法的；神奇的"
      }
    ]
  },
  "magically": {
    "pos": "adv.",
    "en_def": "by or as if by magic.",
    "cn_def": "如魔法般地；神奇地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "by or as if by magic.",
        "cn_def": "如魔法般地；神奇地"
      }
    ]
  },
  "miracle": {
    "pos": "n.",
    "en_def": "an extraordinary and welcome event that is not explicable by natural or scientific laws and is considered to be the work of a divine agency",
    "cn_def": "奇蹟",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an extraordinary and welcome event that is not explicable by natural or scientific laws and is considered to be the work of a divine agency",
        "cn_def": "奇蹟"
      }
    ]
  },
  "miraculous": {
    "pos": "adj.",
    "en_def": "occurring through divine or extraordinary intervention; highly improbable and extraordinarily wonderful",
    "cn_def": "奇蹟般的；不可思議的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "occurring through divine or extraordinary intervention; highly improbable and extraordinarily wonderful",
        "cn_def": "奇蹟般的；不可思議的"
      }
    ]
  },
  "miraculously": {
    "pos": "adv.",
    "en_def": "in a way that resembles or suggests a miracle; extraordinarily, unexpectedly, or completely by chance",
    "cn_def": "奇蹟般地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that resembles or suggests a miracle; extraordinarily, unexpectedly, or completely by chance",
        "cn_def": "奇蹟般地"
      }
    ]
  },
  "appear magically": {
    "pos": "phr.",
    "en_def": "to suddenly show up as if brought by magic.",
    "cn_def": "神奇地出現",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to suddenly show up as if brought by magic.",
        "cn_def": "神奇地出現"
      }
    ]
  },
  "transform": {
    "pos": "v.",
    "en_def": "to make a thorough or dramatic change in the form, appearance, or character of.",
    "cn_def": "改變；改造",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make a thorough or dramatic change in the form, appearance, or character of.",
        "cn_def": "改變；改造"
      }
    ]
  },
  "transformed": {
    "pos": "v.",
    "en_def": "to make a thorough or dramatic change in the form, appearance, or character of.",
    "cn_def": "改變；改造",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make a thorough or dramatic change in the form, appearance, or character of.",
        "cn_def": "改變；改造"
      }
    ]
  },
  "transform a into b": {
    "pos": "phr.",
    "en_def": "to completely change one thing into another.",
    "cn_def": "把A變成B",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to completely change one thing into another.",
        "cn_def": "把A變成B"
      }
    ]
  },
  "transformation": {
    "pos": "n.",
    "en_def": "a thorough or dramatic change in form or appearance.",
    "cn_def": "轉變；變形",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thorough or dramatic change in form or appearance.",
        "cn_def": "轉變；變形"
      }
    ]
  },
  "convert": {
    "pos": "v.",
    "en_def": "to cause to change in form, character, or function.",
    "cn_def": "轉換；改變",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause to change in form, character, or function.",
        "cn_def": "轉換；改變"
      }
    ]
  },
  "relax": {
    "pos": "v.",
    "en_def": "to rest from work or engage in an enjoyable activity so as to become less tired or anxious.",
    "cn_def": "放鬆",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to rest from work or engage in an enjoyable activity so as to become less tired or anxious.",
        "cn_def": "放鬆"
      }
    ]
  },
  "relaxation": {
    "pos": "n.",
    "en_def": "the state of being free from tension and anxiety.",
    "cn_def": "放鬆；消遣",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being free from tension and anxiety.",
        "cn_def": "放鬆；消遣"
      }
    ]
  },
  "relaxed": {
    "pos": "adj.",
    "en_def": "free from tension and anxiety; at ease.",
    "cn_def": "放鬆的；從容的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "free from tension and anxiety; at ease.",
        "cn_def": "放鬆的；從容的"
      }
    ]
  },
  "relaxing": {
    "pos": "adj.",
    "en_def": "reducing tension or anxiety.",
    "cn_def": "令人放鬆的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "reducing tension or anxiety.",
        "cn_def": "令人放鬆的"
      }
    ]
  },
  "tension": {
    "pos": "n.",
    "en_def": "the state of being stretched tight; mental or emotional strain.",
    "cn_def": "緊張；拉力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being stretched tight; mental or emotional strain.",
        "cn_def": "緊張；拉力"
      },
      {
        "pos": "n.",
        "en_def": "a feeling of fear, distrust, or anxiety caused by tight relationships or unresolved conflict",
        "cn_def": "緊張（關係）；局勢緊張"
      }
    ]
  },
  "presence": {
    "pos": "n.",
    "en_def": "the state or fact of existing, occurring, or being present in a place or thing.",
    "cn_def": "出席；存在",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state or fact of existing, occurring, or being present in a place or thing.",
        "cn_def": "出席；存在"
      }
    ]
  },
  "in the presence of": {
    "pos": "phr.",
    "en_def": "in front of or existing with someone else.",
    "cn_def": "在...的面前",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "in front of or existing with someone else.",
        "cn_def": "在...的面前"
      }
    ]
  },
  "present": {
    "pos": "adj.",
    "en_def": "existing or occurring now; in a particular place.",
    "cn_def": "在場的；現在的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "existing or occurring now; in a particular place.",
        "cn_def": "在場的；現在的"
      }
    ]
  },
  "absence": {
    "pos": "n.",
    "en_def": "the state of being away from a place or person.",
    "cn_def": "缺席；不在",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being away from a place or person.",
        "cn_def": "缺席；不在"
      }
    ]
  },
  "orphan": {
    "pos": "n. / v.",
    "en_def": "a child whose parents are dead; to make a child an orphan.",
    "cn_def": "孤兒；使成為孤兒",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a child whose parents are dead; to make a child an orphan.",
        "cn_def": "孤兒；使成為孤兒"
      }
    ]
  },
  "orphanage": {
    "pos": "n.",
    "en_def": "a residential institution for the care and education of orphans.",
    "cn_def": "孤兒院",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a residential institution for the care and education of orphans.",
        "cn_def": "孤兒院"
      }
    ]
  },
  "express": {
    "pos": "v.",
    "en_def": "to convey a thought or feeling in words or by gestures and conduct.",
    "cn_def": "表達",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to convey a thought or feeling in words or by gestures and conduct.",
        "cn_def": "表達"
      }
    ]
  },
  "expressive": {
    "pos": "adj.",
    "en_def": "effectively conveying thought or feeling.",
    "cn_def": "富於表情的；善於表達的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "effectively conveying thought or feeling.",
        "cn_def": "富於表情的；善於表達的"
      }
    ]
  },
  "expression": {
    "pos": "n.",
    "en_def": "the process of making known one's thoughts or feelings.",
    "cn_def": "表達；表情",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the process of making known one's thoughts or feelings.",
        "cn_def": "表達；表情"
      }
    ]
  },
  "talkative": {
    "pos": "adj.",
    "en_def": "fond of or given to talking.",
    "cn_def": "健談的；多話的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "fond of or given to talking.",
        "cn_def": "健談的；多話的"
      }
    ]
  },
  "collective": {
    "pos": "adj.",
    "en_def": "done by people acting as a group.",
    "cn_def": "集體的；共同的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "done by people acting as a group.",
        "cn_def": "集體的；共同的"
      }
    ]
  },
  "tense": {
    "pos": "adj.",
    "en_def": "stretched tight or unable to relax; causing anxiety.",
    "cn_def": "緊張的；緊繃的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "stretched tight or unable to relax; causing anxiety.",
        "cn_def": "緊張的；緊繃的"
      }
    ]
  },
  "feel incredibly tense": {
    "pos": "phr.",
    "en_def": "to experience physical or emotional tightness.",
    "cn_def": "感到緊張",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to experience physical or emotional tightness.",
        "cn_def": "感到緊張"
      }
    ]
  },
  "feel tense": {
    "pos": "phr.",
    "en_def": "to experience physical or emotional tightness.",
    "cn_def": "感到緊張",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to experience physical or emotional tightness.",
        "cn_def": "感到緊張"
      }
    ]
  },
  "tense mood": {
    "pos": "phr.",
    "en_def": "a heavily strained atmosphere.",
    "cn_def": "緊張的氣氛",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a heavily strained atmosphere.",
        "cn_def": "緊張的氣氛"
      }
    ]
  },
  "relieve tension": {
    "pos": "phr.",
    "en_def": "to reduce mental or emotional strain.",
    "cn_def": "緩解緊張",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to reduce mental or emotional strain.",
        "cn_def": "緩解緊張"
      }
    ]
  },
  "relieve the terrible physical tension": {
    "pos": "phr.",
    "en_def": "to reduce mental or emotional strain.",
    "cn_def": "緩解緊張",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to reduce mental or emotional strain.",
        "cn_def": "緩解緊張"
      }
    ]
  },
  "intensive": {
    "pos": "adj.",
    "en_def": "involving a high degree of concentrated effort, massive resources, or energy within a short time",
    "cn_def": "密集的；集中的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "involving a high degree of concentrated effort, massive resources, or energy within a short time",
        "cn_def": "密集的；集中的"
      }
    ]
  },
  "intensive course": {
    "pos": "n.",
    "en_def": "a highly concentrated educational program designed to teach extensive knowledge very quickly",
    "cn_def": "密集課程",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a highly concentrated educational program designed to teach extensive knowledge very quickly",
        "cn_def": "密集課程"
      }
    ]
  },
  "relieve": {
    "pos": "v.",
    "en_def": "to cause pain, distress, or difficulty to become less severe or serious.",
    "cn_def": "減輕；緩解",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause pain, distress, or difficulty to become less severe or serious.",
        "cn_def": "減輕；緩解"
      }
    ]
  },
  "relief": {
    "pos": "n.",
    "en_def": "a feeling of reassurance and relaxation following release from anxiety or distress.",
    "cn_def": "如釋重負；解脫",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling of reassurance and relaxation following release from anxiety or distress.",
        "cn_def": "如釋重負；解脫"
      }
    ]
  },
  "relieved": {
    "pos": "adj.",
    "en_def": "no longer feeling distressed or anxious; reassured.",
    "cn_def": "感到寬慰的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "no longer feeling distressed or anxious; reassured.",
        "cn_def": "感到寬慰的"
      }
    ]
  },
  "anxiety": {
    "pos": "n.",
    "en_def": "a feeling of worry, nervousness, or unease, typically about an imminent event.",
    "cn_def": "焦慮",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling of worry, nervousness, or unease, typically about an imminent event.",
        "cn_def": "焦慮"
      }
    ]
  },
  "anxious": {
    "pos": "adj.",
    "en_def": "experiencing worry, nervousness, or unease.",
    "cn_def": "焦慮的；渴望的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "experiencing worry, nervousness, or unease.",
        "cn_def": "焦慮的；渴望的"
      }
    ]
  },
  "anxiously": {
    "pos": "adv.",
    "en_def": "in a manner resulting from or revealing anxiety.",
    "cn_def": "焦急地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a manner resulting from or revealing anxiety.",
        "cn_def": "焦急地"
      }
    ]
  },
  "anxiety disorder": {
    "pos": "phr.",
    "en_def": "a mental health disorder characterized by feelings of worry or fear.",
    "cn_def": "焦慮症",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a mental health disorder characterized by feelings of worry or fear.",
        "cn_def": "焦慮症"
      }
    ]
  },
  "depression": {
    "pos": "n.",
    "en_def": "a persistent mental health condition characterized by severe long-term sadness, low energy, and loss of interest",
    "cn_def": "憂鬱症；沮喪",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a persistent mental health condition characterized by severe long-term sadness, low energy, and loss of interest",
        "cn_def": "憂鬱症；沮喪"
      }
    ]
  },
  "depressed": {
    "pos": "adj.",
    "en_def": "feeling deeply sad, hopeless, and discouraged about life or a specific unfortunate situation",
    "cn_def": "感到憂鬱的；沮喪的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling deeply sad, hopeless, and discouraged about life or a specific unfortunate situation",
        "cn_def": "感到憂鬱的；沮喪的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
