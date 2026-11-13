// Unit 17 Quiz Data: prejudice – intuitively
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Advanced U17 - prejudice – intuitively",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "prejudice",
    "pos": "n.",
    "cn_def": "偏見；成見",
    "en_def": "an unfair and unreasonable opinion or feeling, especially when formed without enough thought",
    "sentence": "Laws should be designed to eliminate {{BLANK}} against minority groups and ensure true social equality.",
    "cn": "法律的設計應該要消除對少數族群的偏見，並確保真正的社會平等。"
  },
  {
    "word": "prejudice",
    "pos": "v.",
    "cn_def": "使有偏見；損害",
    "en_def": "to unfairly influence someone's opinion, or to cause harm or injury to a legal right",
    "sentence": "The negative media reports could seriously {{BLANK}} the jury before the criminal trial even begins.",
    "cn": "負面的媒體報導可能會在刑事審判開始前，就嚴重使審判團產生偏見。"
  },
  {
    "word": "prejudiced",
    "pos": "adj.",
    "cn_def": "有偏見的",
    "en_def": "showing an unreasonable dislike of or misjudgment toward a specific group of people",
    "sentence": "Traditional employers who are {{BLANK}} against older workers might overlook their valuable experience.",
    "cn": "對年長員工持有偏見的傳統雇主可能會忽略他們寶貴的經驗。"
  },
  {
    "word": "racial prejudice",
    "pos": "n.",
    "cn_def": "種族偏見",
    "en_def": "unfair negative opinions or treatment directed against someone based strictly on their ethnicity",
    "sentence": "The human rights foundation launched a massive campaign to combat {{BLANK}} in modern workplaces.",
    "cn": "人權基金會發起了一場大型運動，以對抗現代職場中的種族偏見。"
  },
  {
    "word": "stereotype",
    "pos": "n.",
    "cn_def": "刻板印象",
    "en_def": "a fixed, oversimplified, and often unfair belief regarding a specific type of person or group",
    "sentence": "Media publications should avoid promoting the traditional {{BLANK}} that women are not good at mathematics.",
    "cn": "媒體出版物應該避免助長女性不擅長數學的傳統刻板印象。"
  },
  {
    "word": "stereotype",
    "pos": "v.",
    "cn_def": "對...產生刻板印象",
    "en_def": "to form a fixed, oversimplified, and often unfair opinion about a particular group",
    "sentence": "Society tends to {{BLANK}} adolescents as lazy and rebellious, which is fundamentally incorrect.",
    "cn": "社會往往對青少年產生懶惰和叛逆的刻板印象，這從根本上是錯誤的。"
  },
  {
    "word": "stereotypical",
    "pos": "adj.",
    "cn_def": "刻板的；老套的",
    "en_def": "conforming to a fixed and oversimplified image or generalized belief",
    "sentence": "The film choices to use a {{BLANK}} villain who laughs loudly while committing a serious crime.",
    "cn": "這部電影選擇使用一個在犯下嚴重罪行時大聲冷笑的老套反派角色。"
  },
  {
    "word": "objective",
    "pos": "adj.",
    "cn_def": "客觀的",
    "en_def": "based on real facts and evidence rather than personal feelings or opinions",
    "sentence": "The environmental protection agency conducted an {{BLANK}} study on the river's high pollution levels.",
    "cn": "環境保護局對該河流高水平的污染程度進行了一項客觀的研究。"
  },
  {
    "word": "objective",
    "pos": "n.",
    "cn_def": "目標",
    "en_def": "something that you plan to achieve; a distinct goal or milestone",
    "sentence": "The primary {{BLANK}} of this company's project is to minimize operational costs and speed up delivery.",
    "cn": "該公司專案的主要目標是將營運成本降至最低並加快交付速度。"
  },
  {
    "word": "objectivity",
    "pos": "n.",
    "cn_def": "客觀性",
    "en_def": "the quality of being objective, fair, and based strictly on evidence rather than feelings",
    "sentence": "Journalists must maintain their professional {{BLANK}} when reporting on controversial political issues.",
    "cn": "新聞記者在報導具爭議性的政治議題時，必須保持其專業的客觀性。"
  },
  {
    "word": "subjective",
    "pos": "adj.",
    "cn_def": "主觀的",
    "en_def": "based on or influenced by personal feelings, tastes, or opinions rather than facts",
    "sentence": "Art criticism is highly {{BLANK}}, so a masterpiece to one critic might seem worthless to another.",
    "cn": "藝術評論是高度主觀的，因此對一位評論家來說是傑作，對另一位來說可能毫無價值。"
  },
  {
    "word": "subjectively",
    "pos": "adv.",
    "cn_def": "主觀地",
    "en_def": "in a way that is influenced by personal feelings, individual tastes, or opinions",
    "sentence": "The panel of judges evaluated the beauty contest {{BLANK}}, which caused many contestants to protest.",
    "cn": "評審團主觀地評估了這場選美比賽，這導致許多參賽者提出抗議。"
  },
  {
    "word": "subjectivity",
    "pos": "n.",
    "cn_def": "主觀性",
    "en_def": "the quality of being influenced by personal feelings, tastes, or individual opinions",
    "sentence": "The essay explored the {{BLANK}} of human memories and how they change from generation to generation.",
    "cn": "這篇論文探討了人類記憶的主觀性，以及它們是如何代代相傳地發生改變。"
  },
  {
    "word": "subject",
    "pos": "n.",
    "cn_def": "議題；主題；科目",
    "en_def": "a matter, topic, or issue that is being discussed, described, or studied",
    "sentence": "The environmental protection committee discussed the critical {{BLANK}} of plastic pollution in our oceans during the conference.",
    "cn": "環境保護委員會在會議期間討論了關於海洋塑膠污染的重要議題。"
  },
  {
    "word": "subject",
    "pos": "n.",
    "cn_def": "臣民；國民",
    "en_def": "a person who lives in a country that is ruled by a traditional king or queen",
    "sentence": "The traditional king promised to protect the human rights and safety of every loyal {{BLANK}} in his country.",
    "cn": "傳統的國王承諾會保護他國家裡每位忠實臣民的人權與安全。"
  },
  {
    "word": "subject",
    "pos": "n.",
    "cn_def": "被研究對象；受試者",
    "en_def": "a person or animal that is chosen to be actively studied or tested in an experiment",
    "sentence": "The professional psychologists monitored each human {{BLANK}} thoroughly to analyze the mental causes of severe work stress.",
    "cn": "專業心理學家徹底監測了每位人類受試者，以分析嚴重工作強度的心理原因。"
  },
  {
    "word": "be subject to",
    "pos": "phr.",
    "cn_def": "易遭受...的；受...管制/支配",
    "en_def": "to be likely to experience, suffer, or be affected by something unpleasant under a framework",
    "sentence": "International delivery vehicles traveling through this regional zone will {{BLANK}} strict customs inspection procedures.",
    "cn": "行經該區域的國際運送車輛將會受到嚴格海關檢查程序的管制。"
  },
  {
    "word": "are subject to change",
    "pos": "phr.",
    "cn_def": "可能會有所變動",
    "en_def": "used for warning people that official details, prices, or schedules might be modified",
    "sentence": "Please note that the departure times on the airport flight calendar {{BLANK}} without prior notice.",
    "cn": "請注意，機場航班行事曆上的起飛時間可能會有所變動，恕不另行通知。"
  },
  {
    "word": "be highly susceptible to",
    "pos": "phr.",
    "cn_def": "易被感染...的",
    "en_def": "to be easily influenced, harmed, or affected by a specific physical or mental factor",
    "sentence": "Elderly citizens with weak immunity tend to {{BLANK}} respiratory diseases during the cold winter months.",
    "cn": "免疫力較弱的年長公民在寒冷的冬月份往往高度容易感染呼吸道疾病。"
  },
  {
    "word": "vulnerable to",
    "pos": "phr.",
    "cn_def": "易受...傷害的",
    "en_def": "to be in a weak position where you can easily be hurt, attacked, or damaged",
    "sentence": "The country's strong reliance on foreign oil makes its entire economy {{BLANK}} sudden global price changes.",
    "cn": "該國對外國石油的強烈依賴，使其整體經濟極易受到全球價格突發變動的影響。"
  },
  {
    "word": "susceptible",
    "pos": "adj.",
    "cn_def": "易受負面影響的",
    "en_def": "easily influenced or harmed by a specific thing; lacking defense or stability",
    "sentence": "Teenagers can be very {{BLANK}} to peer pressure, which heavily shapes their behavioral routines and choices.",
    "cn": "青少年很容易受到同儕壓力的影響，這在很大程度上形塑了他們的行為常規與選擇。"
  },
  {
    "word": "vulnerable",
    "pos": "adj.",
    "cn_def": "脆弱的；易受傷的",
    "en_def": "able to be easily physically or emotionally hurt, influenced, or attacked",
    "sentence": "Without a strict cyber security framework, your customizable computer system remains {{BLANK}} to severe hacker attacks.",
    "cn": "如果沒有嚴格的網路安全架構，您的客製化電腦系統面對嚴重的駭客攻擊時依然是脆弱的。"
  },
  {
    "word": "fragile",
    "pos": "adj.",
    "cn_def": "脆弱的；易碎的",
    "en_def": "easily broken, damaged, or destroyed; physically weak or unstable",
    "sentence": "The economic recovery of the historic town remains {{BLANK}} after suffering the massive impact of globalization.",
    "cn": "在遭受全球化的巨大衝擊之後，這座歷史小鎮的經濟復甦依然顯得脆弱。"
  },
  {
    "word": "delicate",
    "pos": "adj.",
    "cn_def": "細緻精美的；嬌貴容易被破壞的",
    "en_def": "easily damaged or broken because of being very fine, thin, or beautifully soft",
    "sentence": "The professional chef carefully inspected each {{BLANK}} flower before using it as an ornament for the dessert.",
    "cn": "專業主廚在將每朵精美的花朵用作甜點裝飾之前，都對其進行了仔細的檢查。"
  },
  {
    "word": "bias",
    "pos": "n.",
    "cn_def": "偏頗；偏見",
    "en_def": "a distinct limitation or unfair preference that prevents objective consideration of facts",
    "sentence": "The independent report was praised because it was completely free from any political {{BLANK}}.",
    "cn": "這份獨立報告受到了讚揚，因為它完全沒有任何政治偏見。"
  },
  {
    "word": "biased",
    "pos": "adj.",
    "cn_def": "有偏見的；偏頗的",
    "en_def": "unfairly showing favoritism toward or dislike of a specific side or group",
    "sentence": "We cannot accept this research data because it was gathered using an unscientific and {{BLANK}} method.",
    "cn": "我們無法接受這項研究數據，因為它是使用一種不科學且具偏見的方法收集的。"
  },
  {
    "word": "unbiased",
    "pos": "adj.",
    "cn_def": "客觀公正的；無偏見的",
    "en_def": "completely objective, fair, and impartial, showing no favoritism to any side",
    "sentence": "To ensure a fair trial, the judge must remain completely {{BLANK}} throughout the legal procedure.",
    "cn": "為了確保審判公平，法官在整個法律程序中必須保持完全客觀公正。"
  },
  {
    "word": "impartial",
    "pos": "adj.",
    "cn_def": "公正的；不偏不倚的",
    "en_def": "treating all rivals or disputants equally; fair and just",
    "sentence": "An {{BLANK}} committee was appointed to conduct a thorough investigation into the company's financial matters.",
    "cn": "一個公正的委員會被任命對公司的財務問題展開徹底調查。"
  },
  {
    "word": "discriminate",
    "pos": "v.",
    "cn_def": "歧視",
    "en_def": "to treat a person or group unfairly based on their ethnicity, age, or gender",
    "sentence": "The tech company cannot {{BLANK}} on the grounds of age when hiring new automated platform programmers.",
    "cn": "這家科技公司在雇用新的自動化平台程式設計師時，不能以年齡為由進行歧視。"
  },
  {
    "word": "discrimination",
    "pos": "n.",
    "cn_def": "歧視（名詞）",
    "en_def": "the unjust or prejudicial treatment of different categories of people or things",
    "sentence": "Most modern countries have strict laws preventing {{BLANK}} in corporate hiring practices.",
    "cn": "大多數現代國家都有嚴格的法律，來防止公司招聘實務中的歧視行為。"
  },
  {
    "word": "racial discrimination",
    "pos": "n.",
    "cn_def": "種族歧視",
    "en_def": "unfair treatment of a person or group based strictly on their ethnicity",
    "sentence": "The passage of the civil rights law made {{BLANK}} completely illegal in the United States.",
    "cn": "民權法的通過使得種族歧視在美國完全成為非法行為。"
  },
  {
    "word": "gender discrimination",
    "pos": "n.",
    "cn_def": "性別歧視",
    "en_def": "unfair treatment of an individual based strictly on their gender or sex",
    "sentence": "The new regulation aims to eliminate {{BLANK}} and ensure equal pay for all staff members.",
    "cn": "新法規旨在消除性別歧視，並確保所有員工獲得平等的薪酬。"
  },
  {
    "word": "skeptical",
    "pos": "adj.",
    "cn_def": "懷疑的；抱持懷疑態度的",
    "en_def": "doubting that something is true, useful, or reliable; showing caution",
    "sentence": "Many conservative experts remain {{BLANK}} about the automated platform's ability to maintain data security.",
    "cn": "許多保守的專家對於自動化平台維持資料安全的能力依然抱持懷疑態度。"
  },
  {
    "word": "skepticism",
    "pos": "n.",
    "cn_def": "懷疑論；懷疑態度",
    "en_def": "an attitude of doubting the truth of something or expecting evidence before believing",
    "sentence": "The manager's innovative proposal was met with a great deal of {{BLANK}} from senior staff members.",
    "cn": "經理的創新提案遭到了資深員工很大程度的懷疑。"
  },
  {
    "word": "suspect",
    "pos": "n.",
    "cn_def": "嫌疑犯；嫌疑人",
    "en_def": "a person who is officially believed to be possibly guilty of committing a crime",
    "sentence": "The experienced detective searched the office thoroughly to look for clues about the prime {{BLANK}}.",
    "cn": "經驗豐富的偵探徹底搜尋了辦公室，以尋找關於主要嫌疑人的線索。"
  },
  {
    "word": "suspicious",
    "pos": "adj.",
    "cn_def": "可疑的",
    "en_def": "making you feel that something is illegal, wrong, or dishonest",
    "sentence": "The security guard refused admittance to a man who was acting in a {{BLANK}} manner near the gate.",
    "cn": "保全人員拒絕了一名在大門附近舉止可疑的男子的進入。"
  },
  {
    "word": "suspicion",
    "pos": "n.",
    "cn_def": "懷疑；嫌疑",
    "en_def": "a feeling or belief that someone has done something wrong or dishonest",
    "sentence": "Police investigators arrested the wealthy executive on {{BLANK}} of financial fraud and data theft.",
    "cn": "警方調查人員以涉嫌財務詐欺和資料竊盜為由，逮捕了這位富有的高階主管。"
  },
  {
    "word": "doubt",
    "pos": "v.",
    "cn_def": "懷疑；不信",
    "en_def": "to feel uncertain about something, or to think that something is unlikely to be true",
    "sentence": "Many conservative experts {{BLANK}} whether the automated platform can truly maintain data security.",
    "cn": "許多保守的專家懷疑自動化平台是否真的能維護資料安全。"
  },
  {
    "word": "doubt",
    "pos": "n.",
    "cn_def": "懷疑；疑問",
    "en_def": "a feeling of uncertainty or lack of conviction about a statement or decision",
    "sentence": "The technician's brilliant explanation removed all {{BLANK}} regarding the stability of the new computer server.",
    "cn": "技術人員精彩的解釋消除了所有關於新電腦伺服器穩定性的疑問。"
  },
  {
    "word": "undoubtedly",
    "pos": "adv.",
    "cn_def": "毫無疑問地",
    "en_def": "used to emphasize that something is completely true and cannot be denied",
    "sentence": "Winning the international science competition is {{BLANK}} the most important milestone in her academic career.",
    "cn": "在國際科學比賽中獲勝，毫無疑問是她學術生涯中最重要的里程碑。"
  },
  {
    "word": "without a doubt",
    "pos": "phr.",
    "cn_def": "毫無疑問地",
    "en_def": "indubitably; certainly true in a way that leaves no room for uncertainty",
    "sentence": "The historic cathedral features {{BLANK}} the most impressive architectural design in the city.",
    "cn": "這座歷史悠久的大教堂毫無疑問擁有這座城市中最令人印象深刻的建築設計。"
  },
  {
    "word": "doubtful",
    "pos": "adj.",
    "cn_def": "懷疑的；不太可能的",
    "en_def": "uncertain about something, or unlikely to happen or be successful",
    "sentence": "It is highly {{BLANK}} that our understaffed team can finish the framework before the strict deadline.",
    "cn": "我們人手不足的團隊要在嚴格的截止日期前完成這個架構，是極其不太可能的。"
  },
  {
    "word": "emotions",
    "pos": "n.",
    "cn_def": "情感；情緒",
    "en_def": "a strong feeling such as love, anger, fear, or jealousy, as distinct from reasoning",
    "sentence": "The professional psychologist helped the patient analyze the intense {{BLANK}} that caused her work stress.",
    "cn": "專業的心理學家幫助患者分析引發她工作壓力的強烈情緒。"
  },
  {
    "word": "emotional",
    "pos": "adj.",
    "cn_def": "情感的；情緒化的",
    "en_def": "relating to a person's emotions, or showing strong feelings easily",
    "sentence": "During a severe financial crisis, it is vital to make rational decisions rather than {{BLANK}} ones.",
    "cn": "在嚴重的財務危機期間，做出理性的決定比做出情緒化的決定至關重要。"
  },
  {
    "word": "ration",
    "pos": "n.",
    "cn_def": "限額；配給量",
    "en_def": "a fixed amount of a commodity officially allowed to each person during a shortage",
    "sentence": "The government introduced a strict monthly fuel {{BLANK}} to cope with the severe regional energy crisis.",
    "cn": "政府推出了嚴格的每月燃料配給量，以應對嚴重的區域能源危機。"
  },
  {
    "word": "rational",
    "pos": "adj.",
    "cn_def": "理性的；合理的",
    "en_def": "based on or in clear accordance with reason, logic, or sensible facts",
    "sentence": "During a severe financial crisis, it is important to make {{BLANK}} decisions rather than emotional ones.",
    "cn": "在嚴重的財務危機期間，做出理性的決定比做出感性的決定更重要。"
  },
  {
    "word": "irrational",
    "pos": "adj.",
    "cn_def": "不理性的；盲目的",
    "en_def": "not based on logical reason, clear facts, or common sense; unpredictable",
    "sentence": "Phobias can cause people to experience an {{BLANK}} fear of ordinary objects like harmless insects.",
    "cn": "恐懼症會導致人們對普通的物品（例如無害的昆蟲）產生不理性的恐懼。"
  },
  {
    "word": "rationale",
    "pos": "n.",
    "cn_def": "根本原因；邏輯依據",
    "en_def": "the fundamental reasons or logical framework that explains a specific decision or belief",
    "sentence": "The minister provided a clear {{BLANK}} for the government's controversial new traffic regulations.",
    "cn": "部長為政府具爭議性的新交通法規提供了清晰的邏輯依據。"
  },
  {
    "word": "senses",
    "pos": "n.",
    "cn_def": "感官；感覺；觀念",
    "en_def": "a faculty by which the body perceives an external stimulus; an understanding",
    "sentence": "Owls have highly acute {{BLANK}} of hearing and eyesight, which helps them hunt successfully at night.",
    "cn": "貓頭鷹具有高度敏銳的聽覺和視力，這有助於牠們在夜間成功進行捕獵。"
  },
  {
    "word": "make sense",
    "pos": "phr.",
    "cn_def": "有道理；行得通；講得通",
    "en_def": "to be easy to understand; to be a logical or sensible action to take",
    "sentence": "The technician's brilliant explanation did not {{BLANK}} to the conservative board members at all.",
    "cn": "技術人員精彩的解釋對保守的董事會成員來說，根本是一點也講不通。"
  },
  {
    "word": "sensible",
    "pos": "adj.",
    "cn_def": "明智的；合理的；務實的",
    "en_def": "based on or acting with good judgment, practical reason, or common sense",
    "sentence": "During a severe financial crisis, it is vital to make {{BLANK}} decisions regarding your monthly budget.",
    "cn": "在嚴重的財務危機期間，針對你的每月預算做出明智的決定是至關重要的。"
  },
  {
    "word": "sensitive",
    "pos": "adj.",
    "cn_def": "敏感的",
    "en_def": "easily hurt or damaged; quick to detect or respond to slight changes",
    "sentence": "The modern automated detector is so {{BLANK}} that it can notice the presence of hazardous chemical pollutants immediately.",
    "cn": "這款現代自動化偵測器非常敏感，以至於能立刻察覺到危險化學污染物的存在。"
  },
  {
    "word": "be highly sensitive to",
    "pos": "phr.",
    "cn_def": "對...敏感的",
    "en_def": "to be easily affected or influenced by a specific physical or emotional stimulus",
    "sentence": "Young children tend to {{BLANK}} loud sounds and bright flashes of lightning.",
    "cn": "幼兒往往對巨大的聲音和明亮的閃電光芒高度敏感。"
  },
  {
    "word": "intuition",
    "pos": "n.",
    "cn_def": "直覺",
    "en_def": "an ability to understand or know something immediately based on feelings rather than facts",
    "sentence": "Experienced detectives often rely on their {{BLANK}} when they search for clues at a crime scene.",
    "cn": "經驗豐富的偵探在犯罪現場尋找線索時，往往依賴他們的直覺。"
  },
  {
    "word": "intuitive",
    "pos": "adj.",
    "cn_def": "直覺的；易懂的",
    "en_def": "easily understood or known immediately by feelings or simple regular patterns",
    "sentence": "The designer customized the software's interface to make it completely {{BLANK}} for young children.",
    "cn": "設計師客製化了軟體的介面，使其對幼兒來說完全直覺易懂。"
  },
  {
    "word": "intuitively",
    "pos": "adv.",
    "cn_def": "直覺地",
    "en_def": "in a way that involves direct awareness or immediate feeling without active logic",
    "sentence": "She {{BLANK}} knew that something was wrong when her normally energetic dog refused to eat its food.",
    "cn": "當她平時活力充沛的狗拒絕吃東西時，她直覺地知道有些不對勁。"
  }
];

const MCQS = [
  {
    "q": "Laws should be designed to eliminate ______ against minority groups and ensure true social equality.",
    "options": [
      "discrimination",
      "prejudice",
      "objective",
      "suspicion"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The negative media reports could seriously ______ the jury before the criminal trial even begins.",
    "options": [
      "discriminate",
      "stereotype",
      "prejudice",
      "doubt"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Traditional employers who are ______ against older workers might overlook their valuable experience.",
    "options": [
      "prejudiced",
      "impartial",
      "emotional",
      "subjective"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The human rights foundation launched a massive campaign to combat ______ in modern workplaces.",
    "options": [
      "vulnerable to",
      "racial discrimination",
      "be highly sensitive to",
      "racial prejudice"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Media publications should avoid promoting the traditional ______ that women are not good at mathematics.",
    "options": [
      "stereotype",
      "suspicion",
      "intuition",
      "rationale"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Society tends to ______ adolescents as lazy and rebellious, which is fundamentally incorrect.",
    "options": [
      "discriminate",
      "prejudice",
      "stereotype",
      "doubt"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The film choices to use a ______ villain who laughs loudly while committing a serious crime.",
    "options": [
      "unbiased",
      "irrational",
      "vulnerable",
      "stereotypical"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The environmental protection agency conducted an ______ study on the river's high pollution levels.",
    "options": [
      "sensible",
      "objective",
      "stereotypical",
      "prejudiced"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The primary ______ of this company's project is to minimize operational costs and speed up delivery.",
    "options": [
      "objectivity",
      "emotions",
      "objective",
      "senses"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Journalists must maintain their professional ______ when reporting on controversial political issues.",
    "options": [
      "objectivity",
      "objective",
      "rationale",
      "suspicion"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Art criticism is highly ______, so a masterpiece to one critic might seem worthless to another.",
    "options": [
      "unbiased",
      "skeptical",
      "susceptible",
      "subjective"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The panel of judges evaluated the beauty contest ______, which caused many contestants to protest.",
    "options": [
      "are subject to change",
      "subjectively",
      "susceptible",
      "ration"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The essay explored the ______ of human memories and how they change from generation to generation.",
    "options": [
      "suspect",
      "prejudice",
      "subjectivity",
      "senses"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The environmental protection committee discussed the critical ______ of plastic pollution in our oceans during the conference.",
    "options": [
      "subject",
      "prejudice",
      "ration",
      "objectivity"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The traditional king promised to protect the human rights and safety of every loyal ______ in his country.",
    "options": [
      "objective",
      "subject",
      "doubt",
      "prejudice"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The professional psychologists monitored each human ______ thoroughly to analyze the mental causes of severe work stress.",
    "options": [
      "intuition",
      "suspect",
      "emotions",
      "subject"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "International delivery vehicles traveling through this regional zone will ______ strict customs inspection procedures.",
    "options": [
      "be subject to",
      "be highly susceptible to",
      "vulnerable to",
      "gender discrimination"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Please note that the departure times on the airport flight calendar ______ without prior notice.",
    "options": [
      "make sense",
      "racial discrimination",
      "are subject to change",
      "be highly sensitive to"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Elderly citizens with weak immunity tend to ______ respiratory diseases during the cold winter months.",
    "options": [
      "gender discrimination",
      "be highly susceptible to",
      "make sense",
      "are subject to change"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The country's strong reliance on foreign oil makes its entire economy ______ sudden global price changes.",
    "options": [
      "racial discrimination",
      "make sense",
      "be highly susceptible to",
      "vulnerable to"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Teenagers can be very ______ to peer pressure, which heavily shapes their behavioral routines and choices.",
    "options": [
      "susceptible",
      "delicate",
      "vulnerable",
      "intuitive"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Without a strict cyber security framework, your customizable computer system remains ______ to severe hacker attacks.",
    "options": [
      "biased",
      "vulnerable",
      "doubtful",
      "subjective"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The economic recovery of the historic town remains ______ after suffering the massive impact of globalization.",
    "options": [
      "intuitive",
      "suspicious",
      "susceptible",
      "fragile"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The professional chef carefully inspected each ______ flower before using it as an ornament for the dessert.",
    "options": [
      "objective",
      "emotional",
      "delicate",
      "sensible"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The independent report was praised because it was completely free from any political ______.",
    "options": [
      "bias",
      "subject",
      "discrimination",
      "doubt"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "We cannot accept this research data because it was gathered using an unscientific and ______ method.",
    "options": [
      "intuitive",
      "biased",
      "stereotypical",
      "delicate"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "To ensure a fair trial, the judge must remain completely ______ throughout the legal procedure.",
    "options": [
      "sensitive",
      "intuitive",
      "unbiased",
      "doubtful"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "An ______ committee was appointed to conduct a thorough investigation into the company's financial matters.",
    "options": [
      "rational",
      "irrational",
      "skeptical",
      "impartial"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The tech company cannot ______ on the grounds of age when hiring new automated platform programmers.",
    "options": [
      "stereotype",
      "prejudice",
      "discriminate",
      "doubt"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Most modern countries have strict laws preventing ______ in corporate hiring practices.",
    "options": [
      "discrimination",
      "senses",
      "bias",
      "emotions"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The passage of the civil rights law made ______ completely illegal in the United States.",
    "options": [
      "without a doubt",
      "racial discrimination",
      "be highly susceptible to",
      "be subject to"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The new regulation aims to eliminate ______ and ensure equal pay for all staff members.",
    "options": [
      "be highly susceptible to",
      "be highly sensitive to",
      "be subject to",
      "gender discrimination"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Many conservative experts remain ______ about the automated platform's ability to maintain data security.",
    "options": [
      "skeptical",
      "objective",
      "unbiased",
      "susceptible"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The manager's innovative proposal was met with a great deal of ______ from senior staff members.",
    "options": [
      "objective",
      "skepticism",
      "subjectivity",
      "doubt"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "The experienced detective searched the office thoroughly to look for clues about the prime ______.",
    "options": [
      "rationale",
      "skepticism",
      "suspect",
      "emotions"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "The security guard refused admittance to a man who was acting in a ______ manner near the gate.",
    "options": [
      "prejudiced",
      "stereotypical",
      "objective",
      "suspicious"
    ],
    "answer": 3,
    "vocabIndex": 35
  },
  {
    "q": "Police investigators arrested the wealthy executive on ______ of financial fraud and data theft.",
    "options": [
      "suspicion",
      "ration",
      "bias",
      "intuition"
    ],
    "answer": 0,
    "vocabIndex": 36
  },
  {
    "q": "Many conservative experts ______ whether the automated platform can truly maintain data security.",
    "options": [
      "stereotype",
      "discriminate",
      "doubt",
      "prejudice"
    ],
    "answer": 2,
    "vocabIndex": 37
  },
  {
    "q": "The technician's brilliant explanation removed all ______ regarding the stability of the new computer server.",
    "options": [
      "suspicion",
      "objectivity",
      "prejudice",
      "doubt"
    ],
    "answer": 3,
    "vocabIndex": 38
  },
  {
    "q": "Winning the international science competition is ______ the most important milestone in her academic career.",
    "options": [
      "emotions",
      "undoubtedly",
      "intuitively",
      "vulnerable to"
    ],
    "answer": 1,
    "vocabIndex": 39
  },
  {
    "q": "The historic cathedral features ______ the most impressive architectural design in the city.",
    "options": [
      "without a doubt",
      "make sense",
      "be highly susceptible to",
      "racial prejudice"
    ],
    "answer": 0,
    "vocabIndex": 40
  },
  {
    "q": "It is highly ______ that our understaffed team can finish the framework before the strict deadline.",
    "options": [
      "sensible",
      "irrational",
      "delicate",
      "doubtful"
    ],
    "answer": 3,
    "vocabIndex": 41
  },
  {
    "q": "The professional psychologist helped the patient analyze the intense ______ that caused her work stress.",
    "options": [
      "intuition",
      "stereotype",
      "emotions",
      "subjectivity"
    ],
    "answer": 2,
    "vocabIndex": 42
  },
  {
    "q": "During a severe financial crisis, it is vital to make rational decisions rather than ______ ones.",
    "options": [
      "rational",
      "emotional",
      "irrational",
      "susceptible"
    ],
    "answer": 1,
    "vocabIndex": 43
  },
  {
    "q": "The government introduced a strict monthly fuel ______ to cope with the severe regional energy crisis.",
    "options": [
      "suspect",
      "objectivity",
      "subjectivity",
      "ration"
    ],
    "answer": 3,
    "vocabIndex": 44
  },
  {
    "q": "During a severe financial crisis, it is important to make ______ decisions rather than emotional ones.",
    "options": [
      "rational",
      "prejudiced",
      "stereotypical",
      "emotional"
    ],
    "answer": 0,
    "vocabIndex": 45
  },
  {
    "q": "Phobias can cause people to experience an ______ fear of ordinary objects like harmless insects.",
    "options": [
      "biased",
      "sensible",
      "irrational",
      "sensitive"
    ],
    "answer": 2,
    "vocabIndex": 46
  },
  {
    "q": "The minister provided a clear ______ for the government's controversial new traffic regulations.",
    "options": [
      "suspect",
      "rationale",
      "ration",
      "doubt"
    ],
    "answer": 1,
    "vocabIndex": 47
  },
  {
    "q": "Owls have highly acute ______ of hearing and eyesight, which helps them hunt successfully at night.",
    "options": [
      "objectivity",
      "discrimination",
      "objective",
      "senses"
    ],
    "answer": 3,
    "vocabIndex": 48
  },
  {
    "q": "The technician's brilliant explanation did not ______ to the conservative board members at all.",
    "options": [
      "make sense",
      "be highly susceptible to",
      "vulnerable to",
      "gender discrimination"
    ],
    "answer": 0,
    "vocabIndex": 49
  },
  {
    "q": "During a severe financial crisis, it is vital to make ______ decisions regarding your monthly budget.",
    "options": [
      "stereotypical",
      "biased",
      "sensible",
      "doubtful"
    ],
    "answer": 2,
    "vocabIndex": 50
  },
  {
    "q": "The modern automated detector is so ______ that it can notice the presence of hazardous chemical pollutants immediately.",
    "options": [
      "intuitive",
      "sensitive",
      "emotional",
      "sensible"
    ],
    "answer": 1,
    "vocabIndex": 51
  },
  {
    "q": "Young children tend to ______ loud sounds and bright flashes of lightning.",
    "options": [
      "are subject to change",
      "be subject to",
      "make sense",
      "be highly sensitive to"
    ],
    "answer": 3,
    "vocabIndex": 52
  },
  {
    "q": "Experienced detectives often rely on their ______ when they search for clues at a crime scene.",
    "options": [
      "doubt",
      "discrimination",
      "intuition",
      "bias"
    ],
    "answer": 2,
    "vocabIndex": 53
  },
  {
    "q": "The designer customized the software's interface to make it completely ______ for young children.",
    "options": [
      "intuitive",
      "susceptible",
      "impartial",
      "suspicious"
    ],
    "answer": 0,
    "vocabIndex": 54
  },
  {
    "q": "She ______ knew that something was wrong when her normally energetic dog refused to eat its food.",
    "options": [
      "subjectively",
      "intuitively",
      "intuitive",
      "doubtful"
    ],
    "answer": 1,
    "vocabIndex": 55
  }
];

const LOOKUP = {
  "prejudice": {
    "pos": "n.",
    "en_def": "an unfair and unreasonable opinion or feeling, especially when formed without enough thought",
    "cn_def": "偏見；成見",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an unfair and unreasonable opinion or feeling, especially when formed without enough thought",
        "cn_def": "偏見；成見"
      },
      {
        "pos": "v.",
        "en_def": "to unfairly influence someone's opinion, or to cause harm or injury to a legal right",
        "cn_def": "使有偏見；損害"
      }
    ]
  },
  "prejudiced": {
    "pos": "adj.",
    "en_def": "showing an unreasonable dislike of or misjudgment toward a specific group of people",
    "cn_def": "有偏見的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing an unreasonable dislike of or misjudgment toward a specific group of people",
        "cn_def": "有偏見的"
      }
    ]
  },
  "racial prejudice": {
    "pos": "n.",
    "en_def": "unfair negative opinions or treatment directed against someone based strictly on their ethnicity",
    "cn_def": "種族偏見",
    "combined": [
      {
        "pos": "n.",
        "en_def": "unfair negative opinions or treatment directed against someone based strictly on their ethnicity",
        "cn_def": "種族偏見"
      }
    ]
  },
  "stereotype": {
    "pos": "n.",
    "en_def": "a fixed, oversimplified, and often unfair belief regarding a specific type of person or group",
    "cn_def": "刻板印象",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a fixed, oversimplified, and often unfair belief regarding a specific type of person or group",
        "cn_def": "刻板印象"
      },
      {
        "pos": "v.",
        "en_def": "to form a fixed, oversimplified, and often unfair opinion about a particular group",
        "cn_def": "對...產生刻板印象"
      }
    ]
  },
  "stereotypical": {
    "pos": "adj.",
    "en_def": "conforming to a fixed and oversimplified image or generalized belief",
    "cn_def": "刻板的；老套的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "conforming to a fixed and oversimplified image or generalized belief",
        "cn_def": "刻板的；老套的"
      }
    ]
  },
  "objective": {
    "pos": "adj.",
    "en_def": "based on real facts and evidence rather than personal feelings or opinions",
    "cn_def": "客觀的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "based on real facts and evidence rather than personal feelings or opinions",
        "cn_def": "客觀的"
      },
      {
        "pos": "n.",
        "en_def": "something that you plan to achieve; a distinct goal or milestone",
        "cn_def": "目標"
      }
    ]
  },
  "objectivity": {
    "pos": "n.",
    "en_def": "the quality of being objective, fair, and based strictly on evidence rather than feelings",
    "cn_def": "客觀性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of being objective, fair, and based strictly on evidence rather than feelings",
        "cn_def": "客觀性"
      }
    ]
  },
  "subjective": {
    "pos": "adj.",
    "en_def": "based on or influenced by personal feelings, tastes, or opinions rather than facts",
    "cn_def": "主觀的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "based on or influenced by personal feelings, tastes, or opinions rather than facts",
        "cn_def": "主觀的"
      }
    ]
  },
  "subjectively": {
    "pos": "adv.",
    "en_def": "in a way that is influenced by personal feelings, individual tastes, or opinions",
    "cn_def": "主觀地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that is influenced by personal feelings, individual tastes, or opinions",
        "cn_def": "主觀地"
      }
    ]
  },
  "subjectivity": {
    "pos": "n.",
    "en_def": "the quality of being influenced by personal feelings, tastes, or individual opinions",
    "cn_def": "主觀性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of being influenced by personal feelings, tastes, or individual opinions",
        "cn_def": "主觀性"
      }
    ]
  },
  "subject": {
    "pos": "n.",
    "en_def": "a matter, topic, or issue that is being discussed, described, or studied",
    "cn_def": "議題；主題；科目",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a matter, topic, or issue that is being discussed, described, or studied",
        "cn_def": "議題；主題；科目"
      },
      {
        "pos": "n.",
        "en_def": "a person who lives in a country that is ruled by a traditional king or queen",
        "cn_def": "臣民；國民"
      },
      {
        "pos": "n.",
        "en_def": "a person or animal that is chosen to be actively studied or tested in an experiment",
        "cn_def": "被研究對象；受試者"
      }
    ]
  },
  "be subject to": {
    "pos": "phr.",
    "en_def": "to be likely to experience, suffer, or be affected by something unpleasant under a framework",
    "cn_def": "易遭受...的；受...管制/支配",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be likely to experience, suffer, or be affected by something unpleasant under a framework",
        "cn_def": "易遭受...的；受...管制/支配"
      }
    ]
  },
  "are subject to change": {
    "pos": "phr.",
    "en_def": "used for warning people that official details, prices, or schedules might be modified",
    "cn_def": "可能會有所變動",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "used for warning people that official details, prices, or schedules might be modified",
        "cn_def": "可能會有所變動"
      }
    ]
  },
  "be subject to change": {
    "pos": "phr.",
    "en_def": "used for warning people that official details, prices, or schedules might be modified",
    "cn_def": "可能會有所變動",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "used for warning people that official details, prices, or schedules might be modified",
        "cn_def": "可能會有所變動"
      }
    ]
  },
  "be highly susceptible to": {
    "pos": "phr.",
    "en_def": "to be easily influenced, harmed, or affected by a specific physical or mental factor",
    "cn_def": "易被感染...的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be easily influenced, harmed, or affected by a specific physical or mental factor",
        "cn_def": "易被感染...的"
      }
    ]
  },
  "be susceptible to": {
    "pos": "phr.",
    "en_def": "to be easily influenced, harmed, or affected by a specific physical or mental factor",
    "cn_def": "易被感染...的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be easily influenced, harmed, or affected by a specific physical or mental factor",
        "cn_def": "易被感染...的"
      }
    ]
  },
  "vulnerable to": {
    "pos": "phr.",
    "en_def": "to be in a weak position where you can easily be hurt, attacked, or damaged",
    "cn_def": "易受...傷害的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be in a weak position where you can easily be hurt, attacked, or damaged",
        "cn_def": "易受...傷害的"
      }
    ]
  },
  "be vulnerable to": {
    "pos": "phr.",
    "en_def": "to be in a weak position where you can easily be hurt, attacked, or damaged",
    "cn_def": "易受...傷害的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be in a weak position where you can easily be hurt, attacked, or damaged",
        "cn_def": "易受...傷害的"
      }
    ]
  },
  "susceptible": {
    "pos": "adj.",
    "en_def": "easily influenced or harmed by a specific thing; lacking defense or stability",
    "cn_def": "易受負面影響的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "easily influenced or harmed by a specific thing; lacking defense or stability",
        "cn_def": "易受負面影響的"
      }
    ]
  },
  "vulnerable": {
    "pos": "adj.",
    "en_def": "able to be easily physically or emotionally hurt, influenced, or attacked",
    "cn_def": "脆弱的；易受傷的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to be easily physically or emotionally hurt, influenced, or attacked",
        "cn_def": "脆弱的；易受傷的"
      }
    ]
  },
  "fragile": {
    "pos": "adj.",
    "en_def": "easily broken, damaged, or destroyed; physically weak or unstable",
    "cn_def": "脆弱的；易碎的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "easily broken, damaged, or destroyed; physically weak or unstable",
        "cn_def": "脆弱的；易碎的"
      }
    ]
  },
  "delicate": {
    "pos": "adj.",
    "en_def": "easily damaged or broken because of being very fine, thin, or beautifully soft",
    "cn_def": "細緻精美的；嬌貴容易被破壞的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "easily damaged or broken because of being very fine, thin, or beautifully soft",
        "cn_def": "細緻精美的；嬌貴容易被破壞的"
      }
    ]
  },
  "bias": {
    "pos": "n.",
    "en_def": "a distinct limitation or unfair preference that prevents objective consideration of facts",
    "cn_def": "偏頗；偏見",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a distinct limitation or unfair preference that prevents objective consideration of facts",
        "cn_def": "偏頗；偏見"
      }
    ]
  },
  "biased": {
    "pos": "adj.",
    "en_def": "unfairly showing favoritism toward or dislike of a specific side or group",
    "cn_def": "有偏見的；偏頗的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "unfairly showing favoritism toward or dislike of a specific side or group",
        "cn_def": "有偏見的；偏頗的"
      }
    ]
  },
  "unbiased": {
    "pos": "adj.",
    "en_def": "completely objective, fair, and impartial, showing no favoritism to any side",
    "cn_def": "客觀公正的；無偏見的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "completely objective, fair, and impartial, showing no favoritism to any side",
        "cn_def": "客觀公正的；無偏見的"
      }
    ]
  },
  "impartial": {
    "pos": "adj.",
    "en_def": "treating all rivals or disputants equally; fair and just",
    "cn_def": "公正的；不偏不倚的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "treating all rivals or disputants equally; fair and just",
        "cn_def": "公正的；不偏不倚的"
      }
    ]
  },
  "discriminate": {
    "pos": "v.",
    "en_def": "to treat a person or group unfairly based on their ethnicity, age, or gender",
    "cn_def": "歧視",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to treat a person or group unfairly based on their ethnicity, age, or gender",
        "cn_def": "歧視"
      }
    ]
  },
  "discrimination": {
    "pos": "n.",
    "en_def": "the unjust or prejudicial treatment of different categories of people or things",
    "cn_def": "歧視（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the unjust or prejudicial treatment of different categories of people or things",
        "cn_def": "歧視（名詞）"
      }
    ]
  },
  "racial discrimination": {
    "pos": "n.",
    "en_def": "unfair treatment of a person or group based strictly on their ethnicity",
    "cn_def": "種族歧視",
    "combined": [
      {
        "pos": "n.",
        "en_def": "unfair treatment of a person or group based strictly on their ethnicity",
        "cn_def": "種族歧視"
      }
    ]
  },
  "gender discrimination": {
    "pos": "n.",
    "en_def": "unfair treatment of an individual based strictly on their gender or sex",
    "cn_def": "性別歧視",
    "combined": [
      {
        "pos": "n.",
        "en_def": "unfair treatment of an individual based strictly on their gender or sex",
        "cn_def": "性別歧視"
      }
    ]
  },
  "skeptical": {
    "pos": "adj.",
    "en_def": "doubting that something is true, useful, or reliable; showing caution",
    "cn_def": "懷疑的；抱持懷疑態度的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "doubting that something is true, useful, or reliable; showing caution",
        "cn_def": "懷疑的；抱持懷疑態度的"
      }
    ]
  },
  "skepticism": {
    "pos": "n.",
    "en_def": "an attitude of doubting the truth of something or expecting evidence before believing",
    "cn_def": "懷疑論；懷疑態度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an attitude of doubting the truth of something or expecting evidence before believing",
        "cn_def": "懷疑論；懷疑態度"
      }
    ]
  },
  "suspect": {
    "pos": "n.",
    "en_def": "a person who is officially believed to be possibly guilty of committing a crime",
    "cn_def": "嫌疑犯；嫌疑人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who is officially believed to be possibly guilty of committing a crime",
        "cn_def": "嫌疑犯；嫌疑人"
      }
    ]
  },
  "suspicious": {
    "pos": "adj.",
    "en_def": "making you feel that something is illegal, wrong, or dishonest",
    "cn_def": "可疑的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "making you feel that something is illegal, wrong, or dishonest",
        "cn_def": "可疑的"
      }
    ]
  },
  "suspicion": {
    "pos": "n.",
    "en_def": "a feeling or belief that someone has done something wrong or dishonest",
    "cn_def": "懷疑；嫌疑",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling or belief that someone has done something wrong or dishonest",
        "cn_def": "懷疑；嫌疑"
      }
    ]
  },
  "doubt": {
    "pos": "v.",
    "en_def": "to feel uncertain about something, or to think that something is unlikely to be true",
    "cn_def": "懷疑；不信",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to feel uncertain about something, or to think that something is unlikely to be true",
        "cn_def": "懷疑；不信"
      },
      {
        "pos": "n.",
        "en_def": "a feeling of uncertainty or lack of conviction about a statement or decision",
        "cn_def": "懷疑；疑問"
      }
    ]
  },
  "undoubtedly": {
    "pos": "adv.",
    "en_def": "used to emphasize that something is completely true and cannot be denied",
    "cn_def": "毫無疑問地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "used to emphasize that something is completely true and cannot be denied",
        "cn_def": "毫無疑問地"
      }
    ]
  },
  "without a doubt": {
    "pos": "phr.",
    "en_def": "indubitably; certainly true in a way that leaves no room for uncertainty",
    "cn_def": "毫無疑問地",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "indubitably; certainly true in a way that leaves no room for uncertainty",
        "cn_def": "毫無疑問地"
      }
    ]
  },
  "doubtful": {
    "pos": "adj.",
    "en_def": "uncertain about something, or unlikely to happen or be successful",
    "cn_def": "懷疑的；不太可能的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "uncertain about something, or unlikely to happen or be successful",
        "cn_def": "懷疑的；不太可能的"
      }
    ]
  },
  "emotion": {
    "pos": "n.",
    "en_def": "a strong feeling such as love, anger, fear, or jealousy, as distinct from reasoning",
    "cn_def": "情感；情緒",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a strong feeling such as love, anger, fear, or jealousy, as distinct from reasoning",
        "cn_def": "情感；情緒"
      }
    ]
  },
  "emotions": {
    "pos": "n.",
    "en_def": "a strong feeling such as love, anger, fear, or jealousy, as distinct from reasoning",
    "cn_def": "情感；情緒",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a strong feeling such as love, anger, fear, or jealousy, as distinct from reasoning",
        "cn_def": "情感；情緒"
      }
    ]
  },
  "emotional": {
    "pos": "adj.",
    "en_def": "relating to a person's emotions, or showing strong feelings easily",
    "cn_def": "情感的；情緒化的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to a person's emotions, or showing strong feelings easily",
        "cn_def": "情感的；情緒化的"
      }
    ]
  },
  "ration": {
    "pos": "n.",
    "en_def": "a fixed amount of a commodity officially allowed to each person during a shortage",
    "cn_def": "限額；配給量",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a fixed amount of a commodity officially allowed to each person during a shortage",
        "cn_def": "限額；配給量"
      }
    ]
  },
  "rational": {
    "pos": "adj.",
    "en_def": "based on or in clear accordance with reason, logic, or sensible facts",
    "cn_def": "理性的；合理的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "based on or in clear accordance with reason, logic, or sensible facts",
        "cn_def": "理性的；合理的"
      }
    ]
  },
  "irrational": {
    "pos": "adj.",
    "en_def": "not based on logical reason, clear facts, or common sense; unpredictable",
    "cn_def": "不理性的；盲目的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not based on logical reason, clear facts, or common sense; unpredictable",
        "cn_def": "不理性的；盲目的"
      }
    ]
  },
  "rationale": {
    "pos": "n.",
    "en_def": "the fundamental reasons or logical framework that explains a specific decision or belief",
    "cn_def": "根本原因；邏輯依據",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the fundamental reasons or logical framework that explains a specific decision or belief",
        "cn_def": "根本原因；邏輯依據"
      }
    ]
  },
  "sense": {
    "pos": "n.",
    "en_def": "a faculty by which the body perceives an external stimulus; an understanding",
    "cn_def": "感官；感覺；觀念",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a faculty by which the body perceives an external stimulus; an understanding",
        "cn_def": "感官；感覺；觀念"
      }
    ]
  },
  "senses": {
    "pos": "n.",
    "en_def": "a faculty by which the body perceives an external stimulus; an understanding",
    "cn_def": "感官；感覺；觀念",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a faculty by which the body perceives an external stimulus; an understanding",
        "cn_def": "感官；感覺；觀念"
      }
    ]
  },
  "make sense": {
    "pos": "phr.",
    "en_def": "to be easy to understand; to be a logical or sensible action to take",
    "cn_def": "有道理；行得通；講得通",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be easy to understand; to be a logical or sensible action to take",
        "cn_def": "有道理；行得通；講得通"
      }
    ]
  },
  "sensible": {
    "pos": "adj.",
    "en_def": "based on or acting with good judgment, practical reason, or common sense",
    "cn_def": "明智的；合理的；務實的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "based on or acting with good judgment, practical reason, or common sense",
        "cn_def": "明智的；合理的；務實的"
      }
    ]
  },
  "sensitive": {
    "pos": "adj.",
    "en_def": "easily hurt or damaged; quick to detect or respond to slight changes",
    "cn_def": "敏感的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "easily hurt or damaged; quick to detect or respond to slight changes",
        "cn_def": "敏感的"
      }
    ]
  },
  "be highly sensitive to": {
    "pos": "phr.",
    "en_def": "to be easily affected or influenced by a specific physical or emotional stimulus",
    "cn_def": "對...敏感的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be easily affected or influenced by a specific physical or emotional stimulus",
        "cn_def": "對...敏感的"
      }
    ]
  },
  "be sensitive to": {
    "pos": "phr.",
    "en_def": "to be easily affected or influenced by a specific physical or emotional stimulus",
    "cn_def": "對...敏感的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be easily affected or influenced by a specific physical or emotional stimulus",
        "cn_def": "對...敏感的"
      }
    ]
  },
  "intuition": {
    "pos": "n.",
    "en_def": "an ability to understand or know something immediately based on feelings rather than facts",
    "cn_def": "直覺",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an ability to understand or know something immediately based on feelings rather than facts",
        "cn_def": "直覺"
      }
    ]
  },
  "intuitive": {
    "pos": "adj.",
    "en_def": "easily understood or known immediately by feelings or simple regular patterns",
    "cn_def": "直覺的；易懂的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "easily understood or known immediately by feelings or simple regular patterns",
        "cn_def": "直覺的；易懂的"
      }
    ]
  },
  "intuitively": {
    "pos": "adv.",
    "en_def": "in a way that involves direct awareness or immediate feeling without active logic",
    "cn_def": "直覺地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that involves direct awareness or immediate feeling without active logic",
        "cn_def": "直覺地"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
