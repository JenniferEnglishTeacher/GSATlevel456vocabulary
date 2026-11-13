// Unit 13 Quiz Data: straightforward – potentially
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Advanced U13 - straightforward – potentially",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "straightforward",
    "pos": "adj.",
    "cn_def": "直率的；簡單易懂的",
    "en_def": "honest and open; easy to do or understand, presenting no difficulty",
    "sentence": "Benjamin always takes a {{BLANK}} approach to business, which makes his partners trust him.",
    "cn": "班傑明在商業上總是採取直率的做法，這讓他的合夥人都很信任他。"
  },
  {
    "word": "onward",
    "pos": "adv. adj.",
    "cn_def": "向前的；從...開始",
    "en_def": "moving forward in time or space, continuing a journey or process",
    "sentence": "The traveler packed her heavy bags and continued her journey {{BLANK}} toward the next city.",
    "cn": "旅客收拾好沉重的行李，繼續向前朝著下一個城市前行。"
  },
  {
    "word": "forward / forwards",
    "pos": "adv. adj.",
    "cn_def": "向前",
    "en_def": "toward the direction that is in front; progressing toward a better state",
    "sentence": "The project management team is looking {{BLANK}} to introducing the new online platform next month.",
    "cn": "專案管理團隊正期待著下個月推出全新的線上平台。"
  },
  {
    "word": "backward / backwards",
    "pos": "adv. adj.",
    "cn_def": "向後；倒退地",
    "en_def": "toward the direction that is behind; returning to an earlier or worse state",
    "sentence": "To exit the narrow garage safely, you need to drive the automobile slowly {{BLANK}}.",
    "cn": "為了安全駛出狹窄的車庫，你需要將汽車緩慢地向後倒車。"
  },
  {
    "word": "outward / outwards",
    "pos": "adv. adj.",
    "cn_def": "向外的；外表的",
    "en_def": "relating to how something looks on the outside; moving away from a center",
    "sentence": "Although he felt extremely nervous during the initial interview, his {{BLANK}} appearance was calm.",
    "cn": "儘管在最初的面試中他感到極其緊張，但他外表看起來卻很鎮定。"
  },
  {
    "word": "afterward / afterwards",
    "pos": "adv.",
    "cn_def": "之後；後來",
    "en_def": "at a later time or after a specific event has already happened",
    "sentence": "We thoroughly enjoyed the classical music recital and went out for a gourmet dinner {{BLANK}}.",
    "cn": "我們非常享受那場古典音樂獨奏會，後來便出去享用了一頓精緻的晚餐。"
  },
  {
    "word": "automatic",
    "pos": "adj.",
    "cn_def": "自動的",
    "en_def": "happening by itself; done without active thinking or conscious effort",
    "sentence": "Modern luxury cars are equipped with {{BLANK}} safety features to minimize the risk of accidents.",
    "cn": "現代豪華汽車配備有自動安全功能，以將事故風險降至最低。"
  },
  {
    "word": "automatically",
    "pos": "adv.",
    "cn_def": "自動地",
    "en_def": "in a way that happens independently or without choice human control",
    "sentence": "The energy-saving lights in the seminar room will turn on {{BLANK}} when you walk in.",
    "cn": "研討室內的節能燈會在您走進來時自動開啟。"
  },
  {
    "word": "automated",
    "pos": "adj.",
    "cn_def": "自動化的",
    "en_def": "operated by largely automatic equipment or systems with minimal human labor",
    "sentence": "The international technology manufacturer uses {{BLANK}} machinery to speed up the product assembly line.",
    "cn": "這家國際科技製造商使用自動化機械來加快產品裝配線的速度。"
  },
  {
    "word": "automation",
    "pos": "n.",
    "cn_def": "自動化",
    "en_def": "the use of automatic equipment and computer software to operate a process",
    "sentence": "Implementing factory {{BLANK}} successfully minimized production costs and boosted industrial working efficiency.",
    "cn": "成功實施工廠自動化將生產成本降到了最低，並提高了工業工作效率。"
  },
  {
    "word": "automobile",
    "pos": "n.",
    "cn_def": "汽車",
    "en_def": "a road vehicle, typically with four wheels, powered by an internal engine",
    "sentence": "The prominent tech corporation manufactured an eco-friendly {{BLANK}} powered completely by green electricity.",
    "cn": "這家著名的科技公司製造了一輛完全由綠色電力驅動的環保汽車。"
  },
  {
    "word": "drone",
    "pos": "n.",
    "cn_def": "無人機",
    "en_def": "an aircraft without a human pilot on board, controlled remotely or autonomously",
    "sentence": "The research staff deployed a high-tech {{BLANK}} to capture geographic data of the remote forest zone.",
    "cn": "研究人員部署了一架高科技無人機，以獲取偏遠森林地區的地理數據。"
  },
  {
    "word": "self-driving vehicle",
    "pos": "n.",
    "cn_def": "自動駕駛車輛",
    "en_def": "a car or truck capable of sensing its environment and operating without human input",
    "sentence": "The modern logistics firm utilizes a certified {{BLANK}} to deliver customizable packages safely.",
    "cn": "這家現代物流公司利用合格的自動駕駛車輛安全地運送客製化的包裹。"
  },
  {
    "word": "vending machine",
    "pos": "n.",
    "cn_def": "自動販賣機",
    "en_def": "an automated machine that provides items such as snacks and beverages after cash input",
    "sentence": "You can find a convenient {{BLANK}} near the central station entrance that operates around the clock.",
    "cn": "您可以在中央車站入口附近找到一台全天候運作的便利自動販賣機。"
  },
  {
    "word": "self-checkout store",
    "pos": "n.",
    "cn_def": "自助結帳商店",
    "en_def": "a retail shop where consumers scan and pay for their purchased items themselves",
    "sentence": "Shopping at a modern {{BLANK}} can significantly minimize the time spent waiting in a long line.",
    "cn": "在現代化的自助結帳商店購物，可以顯著減少在長龍中排隊等待的時間。"
  },
  {
    "word": "serve",
    "pos": "v.",
    "cn_def": "上菜；服務",
    "en_def": "to provide food or drinks to a guest during a meal at a restaurant",
    "sentence": "The polite waiters will {{BLANK}} the delicious main course as soon as all the primary guests arrive.",
    "cn": "只要所有主要賓客一到，禮貌的服務生們就會立刻上主菜。"
  },
  {
    "word": "server",
    "pos": "n.",
    "cn_def": "服務生",
    "en_def": "a waiter in a restaurant.",
    "sentence": "The polite {{BLANK}} came over to our table promptly and refilled our clean glasses with water.",
    "cn": "禮貌的服務生迅速走到我們桌旁，並在我們乾淨的玻璃杯裡加滿了水。"
  },
  {
    "word": "server",
    "pos": "n.",
    "cn_def": "伺服器",
    "en_def": "a central computer or program that manages access to a centralized resource or network",
    "sentence": "The technological accident caused the primary database {{BLANK}} to shut down unexpectedly last night.",
    "cn": "這場技術故障導致主要的資料庫伺服器在昨晚無預警地關機。"
  },
  {
    "word": "serve as",
    "pos": "phr.",
    "cn_def": "充當...；作為...",
    "en_def": "to function in a specific capacity or fulfill a particular role or purpose",
    "sentence": "This preliminary framework will {{BLANK}} a useful guide for the understaffed curriculum design team.",
    "cn": "這個初步的架構將作為人手不足的課程設計團隊的實用指南。"
  },
  {
    "word": "act as",
    "pos": "phr.",
    "cn_def": "充當...；扮演...的角色",
    "en_def": "to perform the functions or duties of a particular person, role, or object",
    "sentence": "The senior project coordinator agreed to {{BLANK}} a mediator during the controversial budget meeting.",
    "cn": "資深專案協調員同意在具爭議性的預算會議中充當調解人。"
  },
  {
    "word": "function as",
    "pos": "phr.",
    "cn_def": "發揮...功能；適合作...之用",
    "en_def": "to operate or work in a specific role, or to serve a particular practical purpose",
    "sentence": "The customizable digital application can {{BLANK}} an automated financial assistant for active adolescents.",
    "cn": "這款客製化的數位應用程式可以充當活潑青少年的自動化財務助手。"
  },
  {
    "word": "work as",
    "pos": "phr.",
    "cn_def": "擔任...工作；做為...",
    "en_def": "to be employed in a specific professional job, position, or occupation",
    "sentence": "Veronica decided to {{BLANK}} an intern at the prestigious international research institute this summer.",
    "cn": "維安妮卡決定今年夏天在著名的國際研究所擔任實習生。"
  },
  {
    "word": "reserve",
    "pos": "v.",
    "cn_def": "預約；保留",
    "en_def": "to arrange for a room, seat, or table to be kept for the use of a specific person",
    "sentence": "You should {{BLANK}} a table immediately because this celebrated Japanese buffet restaurant is always crowded.",
    "cn": "您應該立刻預約座位，因為這家著名的日本料理吃到飽餐廳總是客滿。"
  },
  {
    "word": "reservation",
    "pos": "n.",
    "cn_def": "預約；訂位（名詞）",
    "en_def": "an arrangement to secure a seat, room, or table at a particular future time",
    "sentence": "The tech manufacturer confirmed their dining {{BLANK}} at the premium Thai noodle restaurant via email.",
    "cn": "這家科技製造商透過電子郵件確認了他們在高級泰式麵食餐廳的用餐預約。"
  },
  {
    "word": "make a reservation",
    "pos": "phr.",
    "cn_def": "進行預約/訂位",
    "en_def": "to complete the action of booking a seat, room, or table in advance",
    "sentence": "It is highly recommended to {{BLANK}} at least three weeks before your scheduled wellness vacation.",
    "cn": "強烈建議在您排定的溫泉度假行程前至少三週進行預約。"
  },
  {
    "word": "preserve",
    "pos": "v.",
    "cn_def": "保存；保護；維持",
    "en_def": "to maintain something in its original state or protect it from decay or destruction",
    "sentence": "The environmental group works diligently to {{BLANK}} the natural habitat of several rare bird species.",
    "cn": "環境團體勤奮工作，以保護幾種罕見鳥類的天然棲息地。"
  },
  {
    "word": "preservation",
    "pos": "n.",
    "cn_def": "保存；維護（名詞）",
    "en_def": "the practical act of keeping something safe, functioning, or pristine over time",
    "sentence": "The historic art gallery is completely dedicated to the {{BLANK}} of unique classical cultural masterpieces.",
    "cn": "這家歷史悠久的藝廊完全專注於獨特古典文化傑作的保存。"
  },
  {
    "word": "observe",
    "pos": "v.",
    "cn_def": "觀察；注意到",
    "en_def": "to watch someone or something carefully and attentively to gain knowledge",
    "sentence": "The research staff deployed a drone to {{BLANK}} the behavioral routines of the wild animals safely.",
    "cn": "研究人員部署了一架無人機，以安全地觀察野生動物的行為慣性。"
  },
  {
    "word": "observation",
    "pos": "n.",
    "cn_def": "觀察（名詞）",
    "en_def": "the systematic process of watching something closely or a remark based on monitoring",
    "sentence": "Accurate medical {{BLANK}} showed that the patient began to regain consciousness shortly after the operation.",
    "cn": "精確的醫療觀察顯示，患者在手術後不久便開始恢復意識。"
  },
  {
    "word": "deserves",
    "pos": "v.",
    "cn_def": "值得；應得",
    "en_def": "to be worthy of or earned a specific treatment, reward, or punishment due to actions",
    "sentence": "The dedicated engineering team thoroughly {{BLANK}} high praise for developing the automated security framework.",
    "cn": "這支敬業的工程團隊因開發出自動化安全架構，完全值得高度讚賞。"
  },
  {
    "word": "precise",
    "pos": "adj.",
    "cn_def": "精準的；確切的",
    "en_def": "exact, accurate, and careful about small details, leaving no doubt",
    "sentence": "Can you give me a {{BLANK}} figure for how many international guests you expect to arrive?",
    "cn": "您能給我一個關於您預計會有多少位國際貴賓抵達的確切數字嗎？"
  },
  {
    "word": "to be precise",
    "pos": "phr.",
    "cn_def": "準確來說",
    "en_def": "used when you are giving more exact information about a fact",
    "sentence": "The historical museum is located 23.7 kilometers from here, {{BLANK}}.",
    "cn": "準確來說，那座歷史博物館距離這裡有二十三點七公里。"
  },
  {
    "word": "precisely",
    "pos": "adv.",
    "cn_def": "精準地；確實如此",
    "en_def": "exactly or accurately in a way that matches a particular fact",
    "sentence": "The automated systems measured the raw materials {{BLANK}} to ensure the best product quality.",
    "cn": "自動化系統精準地測量了原物料，以確保最佳的產品品質。"
  },
  {
    "word": "precision",
    "pos": "n.",
    "cn_def": "精密；精準度",
    "en_def": "the quality or state of being exceptionally accurate and exact",
    "sentence": "Operating on a patient's vital signs requires immense skill and high technical {{BLANK}}.",
    "cn": "對病人的生命徵象進行手術需要極高的技術與高度的技術精密性。"
  },
  {
    "word": "overnight",
    "pos": "adj. adv.",
    "cn_def": "一夜之間的；整夜的",
    "en_def": "happening or continuing during the entire night; sudden and unexpected",
    "sentence": "The creative Broadway show was an {{BLANK}} success and brought its lead actor worldwide fame.",
    "cn": "這部富有創意的百老匯劇作獲得了一夜之間的成功，並為其男主角帶來了世界性的聲譽。"
  },
  {
    "word": "establish",
    "pos": "v.",
    "cn_def": "建立；設立；創辦",
    "en_def": "to set up, found, or start an organization, system, or permanent set of rules",
    "sentence": "The prestigious international university plans to {{BLANK}} a new research institute for advanced cybersecurity frameworks.",
    "cn": "這所著名的國際大學計劃建立一個高階網路安全架構的新研究所。"
  },
  {
    "word": "established",
    "pos": "adj.",
    "cn_def": "確立的；既定的；著名的",
    "en_def": "recognized, accepted, and well-known over a long period due to successful operations",
    "sentence": "The experienced executive preferred to follow the {{BLANK}} routines of the firm rather than experiment with radical plans.",
    "cn": "這位經驗豐富的高階主管更傾向於遵循公司既定的常規，而不是去嘗試激進的計劃。"
  },
  {
    "word": "establishment",
    "pos": "n.",
    "cn_def": "商家；企業；建立",
    "en_def": "a business, shop, or commercial organization; the act of starting a system",
    "sentence": "John owns this popular dining {{BLANK}}, which he founded exactly thirty years ago.",
    "cn": "約翰擁有這家受歡迎的餐飲商家，這恰好是在三十年前由他所創立的。"
  },
  {
    "word": "wage",
    "pos": "n.",
    "cn_def": "薪資（通常指計時或計週的工資）",
    "en_def": "a regular payment earned for work or services, typically paid daily or weekly",
    "sentence": "While Marjorie's company doesn't pay a high {{BLANK}}, it offers many other substantial benefits.",
    "cn": "雖然馬喬麗的公司沒有支付高薪，但它提供了許多其他實質性的福利。"
  },
  {
    "word": "wages",
    "pos": "n.",
    "cn_def": "靠薪資生活的人",
    "en_def": "a person who works for a regular wage, especially as the main support of a family",
    "sentence": "The government introduced new tax regulation policies to assist low-income {{BLANK}} in the city.",
    "cn": "政府推出了新的稅收調節政策，以幫助城市裡的低收入工薪階層。"
  },
  {
    "word": "salaries",
    "pos": "n.",
    "cn_def": "薪水（通常指固定月薪或年薪）",
    "en_def": "a fixed regular payment, typically paid on a monthly basis to professional workers",
    "sentence": "Professional corporate lawyers earn very high {{BLANK}} that easily exceed fifty thousand US dollars a year.",
    "cn": "專業的公司律師賺取非常高的薪水，每年很容易就超過五萬美元。"
  },
  {
    "word": "bonus",
    "pos": "n.",
    "cn_def": "獎金；紅利",
    "en_def": "an extra amount of money given to an employee as a reward for hard work",
    "sentence": "Because of your constant diligence and dedication, the board decided to give you a substantial {{BLANK}}.",
    "cn": "由於您一貫的勤勉與奉獻，董事會決定給您一筆豐厚的獎金。"
  },
  {
    "word": "income",
    "pos": "n.",
    "cn_def": "收入；所得",
    "en_def": "money received, especially on a regular basis, for work or through investments",
    "sentence": "The supportive psychologist analyzed how a sudden drop in household {{BLANK}} can trigger severe mental stress.",
    "cn": "给予支持的心理學家分析了家庭收入的突然下降如何引發嚴重的心理壓力。"
  },
  {
    "word": "revenue",
    "pos": "n.",
    "cn_def": "總收益；營收",
    "en_def": "the total amount of money received by a company or organization from its business activities",
    "sentence": "The tech manufacturer's annual {{BLANK}} reached record highs after launching the innovative automated server framework.",
    "cn": "該科技製造商在推出創新的自動化伺服器架構後，其年度總收益達到了歷史新高。"
  },
  {
    "word": "profit",
    "pos": "n.",
    "cn_def": "利潤；淨利",
    "en_def": "a financial gain, especially the difference between the amount earned and the amount spent",
    "sentence": "The private corporation distributed a major portion of its net {{BLANK}} to all dedicated engineering staff members.",
    "cn": "這家私有公司將其大部分的淨利潤分配給了所有敬業的工程團隊成員。"
  },
  {
    "word": "make profit",
    "pos": "phr.",
    "cn_def": "獲利；賺取利潤",
    "en_def": "to earn more money than you spend on producing, buying, or selling goods or services",
    "sentence": "It is difficult for an understaffed retail shop to {{BLANK}} during a period of severe global economic inflation.",
    "cn": "在嚴重的全球經濟通膨時期，一家人手不足的零售商店很難賺取利潤。"
  },
  {
    "word": "profitable",
    "pos": "adj.",
    "cn_def": "有利可圖的；賺錢的",
    "en_def": "yielding profit or financial gain; financially beneficial over a sustained period",
    "sentence": "Implementing factory automation proved to be highly {{BLANK}} because it successfully minimized unnecessary labor spending.",
    "cn": "事實證明實施工廠自動化是非常賺錢的，因為它成功地將不必要的勞動力支出降到最低。"
  },
  {
    "word": "lucrative",
    "pos": "adj.",
    "cn_def": "獲利豐厚的；賺大錢的",
    "en_def": "producing a great deal of profit or wealth; exceptionally rewarding financially",
    "sentence": "The ambitious executive left his stable position to pursue a more {{BLANK}} business opportunity in real estate.",
    "cn": "這位野心勃勃的高階主管離開了穩定的職位，去房地產領域尋求獲利更豐厚的商業機會。"
  },
  {
    "word": "necessary",
    "pos": "adj.",
    "cn_def": "必要的；必需的",
    "en_def": "needed to be done, achieved, or present; essential or completely required",
    "sentence": "Having a stable internet connection is absolutely {{BLANK}} for students who want to participate in the online mock test.",
    "cn": "對於想要參加線上模擬測驗的學生來說，擁有穩定的網路連線是絕對必要的。"
  },
  {
    "word": "unnecessary",
    "pos": "adj.",
    "cn_def": "不必要的；多餘的",
    "en_def": "not needed or required; more than what is essential and leading to waste",
    "sentence": "Implementing faceless factory automation successfully minimized {{BLANK}} labor spending and boosted industrial working efficiency.",
    "cn": "成功實施工廠自動化，有效地將不必要的勞動力支出降到最低，並提高了工業工作效率。"
  },
  {
    "word": "necessity",
    "pos": "n.",
    "cn_def": "必需品；必要性",
    "en_def": "something that is absolutely essential or required for a survival process",
    "sentence": "Designer clothing blocks are considered a luxury fashion choice, not a basic daily {{BLANK}}.",
    "cn": "設計師服飾大樓被視為一種奢侈的時尚選擇，而不是基本的生活必需品。"
  },
  {
    "word": "daily necessity",
    "pos": "n.",
    "cn_def": "日常必需品",
    "en_def": "a product or item that is essential for a person's everyday life, such as food or water",
    "sentence": "Fresh vegetables and clean drinking water are viewed as a basic {{BLANK}} in every modern community.",
    "cn": "新鮮蔬菜和乾淨的飲用水在每個現代社區都被視為基本的日常必需品。"
  },
  {
    "word": "out of necessity",
    "pos": "phr.",
    "cn_def": "出於迫於無奈；出於必要",
    "en_def": "performing an action because there is no other choice possible due to a situation",
    "sentence": "Some people work for fun or social connection, but most must work {{BLANK}}.",
    "cn": "有些人工作是為了樂趣或社交聯繫，但大多數人工作則是出於生活必要。"
  },
  {
    "word": "sufficient",
    "pos": "adj.",
    "cn_def": "充足的；足夠的",
    "en_def": "enough for a particular purpose or requirement; satisfactory in amount",
    "sentence": "Do you have {{BLANK}} gas in your automobile tank to get home safely tonight?",
    "cn": "您的汽車油箱裡有足夠的汽油能讓您今晚安全回家嗎？"
  },
  {
    "word": "insufficient",
    "pos": "adj.",
    "cn_def": "不足的；不夠的",
    "en_def": "not enough to meet a requirement or achieve a desirable goal",
    "sentence": "The initial research framework was deemed {{BLANK}} to support the scientist's new medical theory.",
    "cn": "最初的研究架構被認為不足以支持這位科學家的全新醫學理論。"
  },
  {
    "word": "sufficiently",
    "pos": "adv.",
    "cn_def": "充足地；足夠地",
    "en_def": "to a degree that is large or satisfactory enough for a specific purpose",
    "sentence": "The mechanics checked the engines thoroughly to ensure they were {{BLANK}} stable for the long flight.",
    "cn": "機械師們徹底檢查了發動機，以確保它們有足夠的穩定性來進行長途飛行。"
  },
  {
    "word": "self-sufficient",
    "pos": "adj.",
    "cn_def": "自給自足的",
    "en_def": "able to provide everything that you need for yourself without outside aid",
    "sentence": "The agricultural community plans to become completely {{BLANK}} in terms of clean energy and food.",
    "cn": "這個農業社區計劃在乾淨能源與糧食方面完全達到自給自足。"
  },
  {
    "word": "protested",
    "pos": "v.",
    "cn_def": "抗議；反對",
    "en_def": "to formally express strong disapproval or objection to a decision, law, or policy",
    "sentence": "Environmental activists {{BLANK}} against the sudden opening of a massive factory near the nature reserve.",
    "cn": "環保運動人士強烈抗議在自然保護區附近突然開設大型工廠的行為。"
  },
  {
    "word": "protest",
    "pos": "n.",
    "cn_def": "抗議；抗議活動",
    "en_def": "an organized public demonstration to express strong objection to something",
    "sentence": "The university students held a peaceful {{BLANK}} against animal testing in cosmetic medical research.",
    "cn": "大學生們舉行了一場和平抗議活動，反對在化妝品醫學研究中進行動物實驗。"
  },
  {
    "word": "protesters",
    "pos": "n.",
    "cn_def": "抗議者",
    "en_def": "a person who publicly demonstrates to object to a specific policy or rule",
    "sentence": "Hundreds of {{BLANK}} gathered outside the government building demanding a stricter minimum wage law.",
    "cn": "數百名抗議者聚集在政府大樓外，要求制定更嚴格的最低工資法。"
  },
  {
    "word": "protest rally",
    "pos": "n.",
    "cn_def": "抗議集會",
    "en_def": "a large public meeting organized to protest against a specific decision",
    "sentence": "The political group organized a massive {{BLANK}} in the central plaza yesterday afternoon.",
    "cn": "該政治團體昨天下午在中央廣場組織了一場大型的抗議集會。"
  },
  {
    "word": "demonstrate",
    "pos": "v.",
    "cn_def": "示威；遊行",
    "en_def": "to take part in a public meeting or march to protest against something",
    "sentence": "Thousands of citizens gathered in public to {{BLANK}} against the controversial new minimum wage law yesterday.",
    "cn": "昨天，數千名公民聚集在公共場合，抗議這項具爭議性的新最低工資法。"
  },
  {
    "word": "demonstrators",
    "pos": "n.",
    "cn_def": "示威者",
    "en_def": "a person who takes part in a public protest meeting or march",
    "sentence": "The local police monitored the crowd closely to ensure that the {{BLANK}} remained peaceful during the rally.",
    "cn": "當地警方密切監視人群，以確保示威者在集會期間保持和平。"
  },
  {
    "word": "demonstration",
    "pos": "n.",
    "cn_def": "示威運動；遊行抗議",
    "en_def": "a public meeting or march at which people show that they are protesting against something",
    "sentence": "The environmental protection group organized a massive {{BLANK}} to raise public awareness about ocean pollution.",
    "cn": "環境保護團體組織了一場大型示威運動，以喚起大眾對海洋污染的意識。"
  },
  {
    "word": "demonstrate",
    "pos": "v.",
    "cn_def": "展現；證實；論證",
    "en_def": "to show clearly that something is true or exists by providing proof or evidence",
    "sentence": "The experienced engineering team managed to {{BLANK}} the safety features of their new automated framework.",
    "cn": "經驗豐富的工程團隊成功展現了他們全新自動化架構的安全功能。"
  },
  {
    "word": "demonstration",
    "pos": "n.",
    "cn_def": "展現；示範說明（名詞）",
    "en_def": "an act of showing someone how something works or is done, or a clear display of a quality",
    "sentence": "The tech manufacturer gave a live {{BLANK}} of how the customizable smartphone utilizes green electricity.",
    "cn": "該科技製造商現場示範說明了這款客製化智慧型手機如何利用綠色電力。"
  },
  {
    "word": "present",
    "pos": "v.",
    "cn_def": "呈現；提出；呈獻",
    "en_def": "to give, provide, or introduce something formally to a group of people",
    "sentence": "The ambitious intern will {{BLANK}} her preliminary layout for the school library project tomorrow morning.",
    "cn": "這位野心勃勃的實習生將於明天上午提出她對學校圖書館專案的初步規劃。"
  },
  {
    "word": "presentation",
    "pos": "n.",
    "cn_def": "簡報；報告（名詞）",
    "en_def": "a formal talk or speech in which a new product, idea, or piece of work is shown to an audience",
    "sentence": "The supportive coordinator delivered a brilliant {{BLANK}} to clarify the company's annual revenue goals.",
    "cn": "這位給予支持的協調員發表了一場精彩的簡報，以闡明公司的年度營收目標。"
  },
  {
    "word": "make a presentation",
    "pos": "phr.",
    "cn_def": "進行簡報/報告",
    "en_def": "to perform the action of delivering a formal talk or displaying data to an audience",
    "sentence": "The financial analyst had to {{BLANK}} regarding why the firm's net profit dropped unexpectedly.",
    "cn": "財務分析師必須針對公司淨利潤為何無預警下降進行一場簡報。"
  },
  {
    "word": "represent",
    "pos": "v.",
    "cn_def": "代表；代理（動詞）",
    "en_def": "to speak, act, or official be present on behalf of another individual or group",
    "sentence": "The senior corporate attorney was hired to {{BLANK}} the private technology firm in the contract dispute.",
    "cn": "這位資深公司律師被雇用來代表這家私人科技公司處理合約糾紛。"
  },
  {
    "word": "representative",
    "pos": "n.",
    "cn_def": "代表（名詞）",
    "en_def": "a person chosen or elected to speak and act on behalf of a specific community or group",
    "sentence": "A customer service {{BLANK}} sent a thoughtful email to resolve the technical accident for the potential client.",
    "cn": "一位客戶服務代表發送了一封體貼的電子郵件，為這位潛在客戶解決技術故障。"
  },
  {
    "word": "representation",
    "pos": "n.",
    "cn_def": "代表；代表權；表現（名詞）",
    "en_def": "the state of having someone speak or act on your behalf, or a depiction of something",
    "sentence": "Low-income wage earners demanded better {{BLANK}} on the executive board to secure their fundamental rights.",
    "cn": "低收入工薪階層要求在執行董事會中擁有更好的代表權，以保障他們的基本權益。"
  },
  {
    "word": "go on a strike",
    "pos": "phr.",
    "cn_def": "進行罷工",
    "en_def": "to refuse to work as a form of organized protest, typically to secure better pay or working conditions",
    "sentence": "The disgruntled railway factory workers decided to {{BLANK}} to demand fair annual revenue bonuses.",
    "cn": "不滿的鐵路工廠工人決定進行罷工，以要求公平的年度營收獎金。"
  },
  {
    "word": "labor union",
    "pos": "n.",
    "cn_def": "工會",
    "en_def": "an organized association of workers, often in a trade or profession, formed to protect their rights",
    "sentence": "The experienced representatives of the {{BLANK}} negotiated firmly with the corporate board to resolve the dispute.",
    "cn": "工會經驗豐富的代表們與公司董事會進行了堅定的談判，以解決這場糾紛。"
  },
  {
    "word": "staff",
    "pos": "n.",
    "cn_def": "全體員工；職員",
    "en_def": "the group of people who work for an organization or business",
    "sentence": "The experienced manager thanked the members of her dedicated {{BLANK}} for their exceptional hard work.",
    "cn": "經驗豐富的經理感謝她熱忱的員工團隊所付出的卓越努力。"
  },
  {
    "word": "understaffed",
    "pos": "adj.",
    "cn_def": "人手不足的",
    "en_def": "having too few employees to perform the required work efficiently",
    "sentence": "The emergency room was severely {{BLANK}} during the long weekend holiday, which delayed medical treatment.",
    "cn": "急診室在漫長的週末假期期間嚴重人手不足，這導致了醫療延誤。"
  },
  {
    "word": "lay off",
    "pos": "phr.",
    "cn_def": "裁員",
    "en_def": "to reduce the total number of employees in a company to save money",
    "sentence": "In order for the corporation to survive the fiscal crisis, it must {{BLANK}} the staff by 40%.",
    "cn": "為了讓公司在財政危機中生存下來，它必須裁員百分之四十。"
  },
  {
    "word": "responsible",
    "pos": "adj.",
    "cn_def": "負責的；可靠的；有責任感的",
    "en_def": "having an obligation to do something, or being rational and capable of making good decisions",
    "sentence": "The executive board is looking for a {{BLANK}} manager to supervise the newly established financial investment department.",
    "cn": "執行董事會正在尋找一位有責任感的經理，來監督新成立的財務投資部門。"
  },
  {
    "word": "be responsible for",
    "pos": "phr.",
    "cn_def": "對...負責；是...的原因",
    "en_def": "having an official duty to take care of something, or being the main cause of a situation",
    "sentence": "The senior engineer will {{BLANK}} monitoring data security and maintaining the automated server framework.",
    "cn": "資深工程師將負責監控資料安全並維護自動化伺服器架構。"
  },
  {
    "word": "responsibility",
    "pos": "n.",
    "cn_def": "責任；職責",
    "en_def": "a duty or task that you are officially expected or required to handle",
    "sentence": "Owning a domestic pet like a dog is a serious {{BLANK}} that requires constant care.",
    "cn": "擁有像狗這樣的家養寵物是一項沉重的責任，需要持續的照顧。"
  },
  {
    "word": "took the responsibility for",
    "pos": "phr.",
    "cn_def": "承擔...的責任",
    "en_def": "to officially accept the blame or control for a situation or action",
    "sentence": "Kyle wisely {{BLANK}} the serious operational mistake at work yesterday.",
    "cn": "凱爾昨天明智地承擔了工作上嚴重操作錯誤的責任。"
  },
  {
    "word": "a sense of responsibility",
    "pos": "n.",
    "cn_def": "責任感",
    "en_def": "an internal awareness of one's duties and the desire to perform them well",
    "sentence": "Educators try to cultivate a strong {{BLANK}} in young children through community service.",
    "cn": "教育工作者試圖透過社區服務來培養幼兒強烈的責任感。"
  },
  {
    "word": "architect",
    "pos": "n.",
    "cn_def": "建築師；締造者",
    "en_def": "a person who designs buildings; the chief planner or creator of a project",
    "sentence": "Blair is considered the chief {{BLANK}} of the successful business merger between the tech companies.",
    "cn": "布萊爾被認為是這兩家科技公司之間成功商業合併的主要締造者。"
  },
  {
    "word": "architecture",
    "pos": "n.",
    "cn_def": "建築學；建築風格；（電腦）架構",
    "en_def": "the art or practice of designing and constructing buildings, or the complex structure of a system",
    "sentence": "The historic European city is celebrated globally for its unique combination of classical and modern {{BLANK}}.",
    "cn": "這座歷史悠久的歐洲城市以其結合古典與現代的獨特建築風格而聞名全球。"
  },
  {
    "word": "hospitable",
    "pos": "adj.",
    "cn_def": "熱情好客的",
    "en_def": "friendly, welcoming, and generous to guests or strangers",
    "sentence": "The villagers were extremely {{BLANK}} and provided us with sufficient food and comfortable storage rooms.",
    "cn": "村民們非常熱情好客，為我們提供了充足的食物和舒適的儲藏室。"
  },
  {
    "word": "hospitality",
    "pos": "n.",
    "cn_def": "款待；熱情好客",
    "en_def": "the friendly and generous reception and entertainment of guests or strangers",
    "sentence": "The local family showed exceptional {{BLANK}} to the lost traveler by inviting him in for dinner.",
    "cn": "當地家庭對迷路的旅人展現了格外的熱情好客，邀請他進來共進晚餐。"
  },
  {
    "word": "stingy",
    "pos": "adj.",
    "cn_def": "吝嗇的",
    "en_def": "reluctant to give or spend; not generous with money or resources",
    "sentence": "Eric isn't {{BLANK}} at all; he is just extremely careful with how he manages his daily budget.",
    "cn": "艾瑞克一點也不吝嗇；他只是對於如何管理自己的日常預算極其小心。"
  },
  {
    "word": "bumped",
    "pos": "v.",
    "cn_def": "碰撞；升等",
    "en_def": "to knock or run into something with a jolt; to upgrade someone's status",
    "sentence": "I accidentally {{BLANK}} into an expensive crystal vase and broke it into thin pieces.",
    "cn": "我不小心撞到了一個昂貴的水晶花瓶，把它砸成了碎片。"
  },
  {
    "word": "a bump in the road",
    "pos": "n.",
    "cn_def": "小挫折；小插曲",
    "en_def": "a small, temporary problem or delay that stalls progress slightly",
    "sentence": "Stan's vacation plans hit {{BLANK}} when the airport lost his excess luggage.",
    "cn": "當機場弄丟他的超額行李時，史丹的度假計劃遇到了一個小插曲。"
  },
  {
    "word": "bumped into",
    "pos": "phr.",
    "cn_def": "巧遇某人",
    "en_def": "to meet a person completely by chance without any prior arrangement",
    "sentence": "You will never guess who I {{BLANK}} at the morning fresh vegetable market—Paul!",
    "cn": "你絕對猜不到我今天早上在新鮮蔬菜市場巧遇了誰——是保羅！"
  },
  {
    "word": "hence",
    "pos": "adv.",
    "cn_def": "因此",
    "en_def": "as a consequence; for this reason; therefore",
    "sentence": "The captain has already given his official orders; {{BLANK}}, we must follow the procedures immediately.",
    "cn": "船長已經下達了官方命令；因此，我們必須立即遵循這些程序。"
  },
  {
    "word": "hence the name",
    "pos": "phr.",
    "cn_def": "因此得名",
    "en_def": "used to explain the reason why a specific title or label was given",
    "sentence": "Death Valley is the hottest location in North America, {{BLANK}}.",
    "cn": "死神谷是北美最炎熱的地方，因此得名。"
  },
  {
    "word": "voluntary",
    "pos": "adj.",
    "cn_def": "自願的；志願的",
    "en_def": "done, given, or acting of one's own free will; without payment",
    "sentence": "Dana does valuable {{BLANK}} work at the local hospital to assist understaffed nursing teams.",
    "cn": "黛娜在當地醫院從事珍貴的志願工作，以協助人手不足的護理團隊。"
  },
  {
    "word": "involuntary",
    "pos": "adj.",
    "cn_def": "不自覺的；非自願的",
    "en_def": "done without conscious control or against one's free will; automatic",
    "sentence": "High-speed filming captured the patient's {{BLANK}} eye movements during the medical examination.",
    "cn": "高速攝影捕捉到了患者在醫療檢查期間不自覺的眼球運動。"
  },
  {
    "word": "yields",
    "pos": "v.",
    "cn_def": "產出",
    "en_def": "to produce a crop or profit",
    "sentence": "The beautiful apple tree in my secure backyard {{BLANK}} a large amount of fresh fruit every year.",
    "cn": "我安全後院裡那棵美麗的蘋果樹每年都會產出大量的鮮果。"
  },
  {
    "word": "yield",
    "pos": "n.",
    "cn_def": "產量",
    "en_def": "the total amount of an agricultural or industrial product produced",
    "sentence": "After a mild summer with plenty of rainfall, the total crop {{BLANK}} at harvest was exceptional.",
    "cn": "在經歷了一個降雨充足的溫和夏天之後，收穫時的農作物總產量非常喜人。"
  },
  {
    "word": "yielded my seat on the train to",
    "pos": "phr.",
    "cn_def": "讓座給...",
    "en_def": "to give up your seat on a bus or train to a person who needs it more",
    "sentence": "I willingly {{BLANK}} an elderly lady who looked exhausted.",
    "cn": "我自願把火車上的座位讓給了一位看起來筋疲力盡的年長女士。"
  },
  {
    "word": "yield to",
    "pos": "phr.",
    "cn_def": "屈服於...；讓步於...",
    "en_def": "to allow oneself to be overcome by a specific pressure, temptation, or superior force",
    "sentence": "The local government refused to {{BLANK}} the intense public pressure regarding the controversial minimum wage law.",
    "cn": "地方政府拒絕屈服於關於這項具爭議性最低工資法的強烈公眾壓力。"
  },
  {
    "word": "give in to",
    "pos": "phr.",
    "cn_def": "屈服於...；向...妥協",
    "en_def": "to finally agree to what someone wants after refusing for a long period of time",
    "sentence": "Parents should not routinely {{BLANK}} their children's unreasonable demands for expensive character-themed merchandise.",
    "cn": "父母不應該經常向孩子們索要昂貴角色主題商品的無理要求妥協。"
  },
  {
    "word": "surrender to",
    "pos": "phr.",
    "cn_def": "投降於...；聽任...擺佈",
    "en_def": "to stop resisting an opponent or a strong emotion and officially submit to their authority",
    "sentence": "The defeated soldiers had no viable choice but to {{BLANK}} the enemy forces near the regional border zone.",
    "cn": "被擊敗的士兵們別無選擇，只能在區域邊界地帶附近向敵軍投降。"
  },
  {
    "word": "obsession",
    "pos": "n.",
    "cn_def": "執念；著迷",
    "en_def": "an idea or thought that continually preoccupies or intrudes on a person's mind",
    "sentence": "Carl's constant {{BLANK}} with making virtual cash is beginning to affect his social life negatively.",
    "cn": "卡爾對賺取虛擬現金的持續執念，正開始對他的社交生活產生負面影響。"
  },
  {
    "word": "obsessed with",
    "pos": "phr.",
    "cn_def": "對...著迷",
    "en_def": "completely unable to stop thinking about a specific person or object",
    "sentence": "Gina is completely {{BLANK}} the famous cartoon character and decorated her room with its mugs.",
    "cn": "吉娜完全對那個著名的卡通人物著迷，並用它的馬克杯裝飾了自己的房間。"
  },
  {
    "word": "potential",
    "pos": "adj.",
    "cn_def": "潛在的；可能的",
    "en_def": "having or showing the capacity to develop into something specified in the future",
    "sentence": "The marketing department launched an interactive campaign to attract {{BLANK}} buyers to our automated platform.",
    "cn": "行銷部門推出了一項互動式活動，以吸引潛在的買家加入我們的自動化平台。"
  },
  {
    "word": "potential customer",
    "pos": "n.",
    "cn_def": "潛在客戶",
    "en_def": "a person or organization that might be willing to buy a product or service in the future",
    "sentence": "The sales representative sent a thoughtful email to follow up with the {{BLANK}} this morning.",
    "cn": "銷售代表今天上午發送了一封體貼的電子郵件，以跟進這位潛在客戶。"
  },
  {
    "word": "potential",
    "pos": "n.",
    "cn_def": "潛力；潛能（名詞）",
    "en_def": "latent qualities or abilities that may be developed and lead to future success or usefulness",
    "sentence": "The experienced financial mentor immediately recognized the young intern's immense {{BLANK}} for wealth management.",
    "cn": "這位經驗豐富的財務導師立刻發現了這位年輕實習生在財富管理方面的巨大潛力。"
  },
  {
    "word": "fulfill their full potential",
    "pos": "phr.",
    "cn_def": "發揮潛力/潛能",
    "en_def": "to develop or use all of one's natural abilities and qualities to achieve complete success",
    "sentence": "The supportive teacher designed customizable lesson blueprints to help every single adolescent {{BLANK}}.",
    "cn": "這位給予支持的老師設計了客製化的課程藍圖，以幫助每一位青少年發揮他們全部的潛力。"
  },
  {
    "word": "potentially",
    "pos": "adv.",
    "cn_def": "潛在地；可能地",
    "en_def": "with a possibility of happening or developing into something in the future",
    "sentence": "The strict high school bans clothing that features {{BLANK}} offensive language or artistic content.",
    "cn": "這所嚴格的高中禁止帶有潛在冒犯性語言或藝術內容的服裝。"
  }
];

const MCQS = [
  {
    "q": "Benjamin always takes a ______ approach to business, which makes his partners trust him.",
    "options": [
      "straightforward",
      "necessary",
      "stingy",
      "involuntary"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The traveler packed her heavy bags and continued her journey ______ toward the next city.",
    "options": [
      "outward / outwards",
      "a sense of responsibility",
      "onward",
      "to be precise"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The project management team is looking ______ to introducing the new online platform next month.",
    "options": [
      "protest rally",
      "forward / forwards",
      "out of necessity",
      "to be precise"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "To exit the narrow garage safely, you need to drive the automobile slowly ______.",
    "options": [
      "outward / outwards",
      "out of necessity",
      "serve as",
      "backward / backwards"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Although he felt extremely nervous during the initial interview, his ______ appearance was calm.",
    "options": [
      "outward / outwards",
      "protest rally",
      "out of necessity",
      "onward"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "We thoroughly enjoyed the classical music recital and went out for a gourmet dinner ______.",
    "options": [
      "make a presentation",
      "give in to",
      "yield to",
      "afterward / afterwards"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Modern luxury cars are equipped with ______ safety features to minimize the risk of accidents.",
    "options": [
      "automated",
      "unnecessary",
      "automatic",
      "voluntary"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The energy-saving lights in the seminar room will turn on ______ when you walk in.",
    "options": [
      "potentially",
      "automatically",
      "hence",
      "precisely"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The international technology manufacturer uses ______ machinery to speed up the product assembly line.",
    "options": [
      "automated",
      "self-sufficient",
      "straightforward",
      "automatic"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Implementing factory ______ successfully minimized production costs and boosted industrial working efficiency.",
    "options": [
      "demonstrators",
      "automation",
      "presentation",
      "wage"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The prominent tech corporation manufactured an eco-friendly ______ powered completely by green electricity.",
    "options": [
      "protesters",
      "revenue",
      "automobile",
      "wage"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The research staff deployed a high-tech ______ to capture geographic data of the remote forest zone.",
    "options": [
      "reservation",
      "responsibility",
      "precision",
      "drone"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The modern logistics firm utilizes a certified ______ to deliver customizable packages safely.",
    "options": [
      "function as",
      "self-driving vehicle",
      "surrender to",
      "outward / outwards"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "You can find a convenient ______ near the central station entrance that operates around the clock.",
    "options": [
      "potential customer",
      "a sense of responsibility",
      "out of necessity",
      "vending machine"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Shopping at a modern ______ can significantly minimize the time spent waiting in a long line.",
    "options": [
      "took the responsibility for",
      "a sense of responsibility",
      "self-checkout store",
      "to be precise"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The polite waiters will ______ the delicious main course as soon as all the primary guests arrive.",
    "options": [
      "serve",
      "protested",
      "bumped",
      "deserves"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The polite ______ came over to our table promptly and refilled our clean glasses with water.",
    "options": [
      "obsession",
      "potential",
      "staff",
      "server"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The technological accident caused the primary database ______ to shut down unexpectedly last night.",
    "options": [
      "obsession",
      "staff",
      "server",
      "precision"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "This preliminary framework will ______ a useful guide for the understaffed curriculum design team.",
    "options": [
      "out of necessity",
      "serve as",
      "make a reservation",
      "a sense of responsibility"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The senior project coordinator agreed to ______ a mediator during the controversial budget meeting.",
    "options": [
      "act as",
      "yield to",
      "daily necessity",
      "make a presentation"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The customizable digital application can ______ an automated financial assistant for active adolescents.",
    "options": [
      "yield to",
      "backward / backwards",
      "function as",
      "vending machine"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Veronica decided to ______ an intern at the prestigious international research institute this summer.",
    "options": [
      "work as",
      "self-checkout store",
      "bumped into",
      "a sense of responsibility"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "You should ______ a table immediately because this celebrated Japanese buffet restaurant is always crowded.",
    "options": [
      "protested",
      "reserve",
      "present",
      "observe"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The tech manufacturer confirmed their dining ______ at the premium Thai noodle restaurant via email.",
    "options": [
      "automobile",
      "profit",
      "architect",
      "reservation"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "It is highly recommended to ______ at least three weeks before your scheduled wellness vacation.",
    "options": [
      "fulfill their full potential",
      "hence the name",
      "make a reservation",
      "protest rally"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The environmental group works diligently to ______ the natural habitat of several rare bird species.",
    "options": [
      "preserve",
      "establish",
      "represent",
      "reserve"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The historic art gallery is completely dedicated to the ______ of unique classical cultural masterpieces.",
    "options": [
      "establishment",
      "preservation",
      "necessity",
      "bonus"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The research staff deployed a drone to ______ the behavioral routines of the wild animals safely.",
    "options": [
      "present",
      "deserves",
      "demonstrate",
      "observe"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Accurate medical ______ showed that the patient began to regain consciousness shortly after the operation.",
    "options": [
      "observation",
      "protest",
      "hospitality",
      "obsession"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The dedicated engineering team thoroughly ______ high praise for developing the automated security framework.",
    "options": [
      "demonstrate",
      "serve",
      "deserves",
      "reserve"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Can you give me a ______ figure for how many international guests you expect to arrive?",
    "options": [
      "automatic",
      "precise",
      "unnecessary",
      "self-sufficient"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The historical museum is located 23.7 kilometers from here, ______.",
    "options": [
      "daily necessity",
      "potential customer",
      "surrender to",
      "to be precise"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The automated systems measured the raw materials ______ to ensure the best product quality.",
    "options": [
      "hence",
      "potentially",
      "precisely",
      "automatically"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Operating on a patient's vital signs requires immense skill and high technical ______.",
    "options": [
      "demonstrators",
      "automation",
      "potential",
      "precision"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "The creative Broadway show was an ______ success and brought its lead actor worldwide fame.",
    "options": [
      "lucrative",
      "overnight",
      "straightforward",
      "hospitable"
    ],
    "answer": 1,
    "vocabIndex": 34
  },
  {
    "q": "The prestigious international university plans to ______ a new research institute for advanced cybersecurity frameworks.",
    "options": [
      "establish",
      "demonstrate",
      "present",
      "yields"
    ],
    "answer": 0,
    "vocabIndex": 35
  },
  {
    "q": "The experienced executive preferred to follow the ______ routines of the firm rather than experiment with radical plans.",
    "options": [
      "self-sufficient",
      "established",
      "understaffed",
      "automated"
    ],
    "answer": 1,
    "vocabIndex": 36
  },
  {
    "q": "John owns this popular dining ______, which he founded exactly thirty years ago.",
    "options": [
      "server",
      "bonus",
      "architect",
      "establishment"
    ],
    "answer": 3,
    "vocabIndex": 37
  },
  {
    "q": "While Marjorie's company doesn't pay a high ______, it offers many other substantial benefits.",
    "options": [
      "wage",
      "automobile",
      "representation",
      "salaries"
    ],
    "answer": 0,
    "vocabIndex": 38
  },
  {
    "q": "The government introduced new tax regulation policies to assist low-income ______ in the city.",
    "options": [
      "protest rally",
      "serve as",
      "wages",
      "make a presentation"
    ],
    "answer": 2,
    "vocabIndex": 39
  },
  {
    "q": "Professional corporate lawyers earn very high ______ that easily exceed fifty thousand US dollars a year.",
    "options": [
      "reservation",
      "yield",
      "obsession",
      "salaries"
    ],
    "answer": 3,
    "vocabIndex": 40
  },
  {
    "q": "Because of your constant diligence and dedication, the board decided to give you a substantial ______.",
    "options": [
      "staff",
      "representative",
      "bonus",
      "server"
    ],
    "answer": 2,
    "vocabIndex": 41
  },
  {
    "q": "The supportive psychologist analyzed how a sudden drop in household ______ can trigger severe mental stress.",
    "options": [
      "income",
      "automation",
      "drone",
      "architecture"
    ],
    "answer": 0,
    "vocabIndex": 42
  },
  {
    "q": "The tech manufacturer's annual ______ reached record highs after launching the innovative automated server framework.",
    "options": [
      "architect",
      "revenue",
      "demonstration",
      "precision"
    ],
    "answer": 1,
    "vocabIndex": 43
  },
  {
    "q": "The private corporation distributed a major portion of its net ______ to all dedicated engineering staff members.",
    "options": [
      "profit",
      "bonus",
      "responsibility",
      "precision"
    ],
    "answer": 0,
    "vocabIndex": 44
  },
  {
    "q": "It is difficult for an understaffed retail shop to ______ during a period of severe global economic inflation.",
    "options": [
      "lay off",
      "vending machine",
      "be responsible for",
      "make profit"
    ],
    "answer": 3,
    "vocabIndex": 45
  },
  {
    "q": "Implementing factory automation proved to be highly ______ because it successfully minimized unnecessary labor spending.",
    "options": [
      "unnecessary",
      "automatic",
      "profitable",
      "automated"
    ],
    "answer": 2,
    "vocabIndex": 46
  },
  {
    "q": "The ambitious executive left his stable position to pursue a more ______ business opportunity in real estate.",
    "options": [
      "straightforward",
      "lucrative",
      "self-sufficient",
      "involuntary"
    ],
    "answer": 1,
    "vocabIndex": 47
  },
  {
    "q": "Having a stable internet connection is absolutely ______ for students who want to participate in the online mock test.",
    "options": [
      "automated",
      "involuntary",
      "necessary",
      "hospitable"
    ],
    "answer": 2,
    "vocabIndex": 48
  },
  {
    "q": "Implementing faceless factory automation successfully minimized ______ labor spending and boosted industrial working efficiency.",
    "options": [
      "understaffed",
      "automated",
      "voluntary",
      "unnecessary"
    ],
    "answer": 3,
    "vocabIndex": 49
  },
  {
    "q": "Designer clothing blocks are considered a luxury fashion choice, not a basic daily ______.",
    "options": [
      "necessity",
      "representation",
      "revenue",
      "reservation"
    ],
    "answer": 0,
    "vocabIndex": 50
  },
  {
    "q": "Fresh vegetables and clean drinking water are viewed as a basic ______ in every modern community.",
    "options": [
      "make a reservation",
      "daily necessity",
      "serve as",
      "backward / backwards"
    ],
    "answer": 1,
    "vocabIndex": 51
  },
  {
    "q": "Some people work for fun or social connection, but most must work ______.",
    "options": [
      "self-driving vehicle",
      "make profit",
      "out of necessity",
      "a sense of responsibility"
    ],
    "answer": 2,
    "vocabIndex": 52
  },
  {
    "q": "Do you have ______ gas in your automobile tank to get home safely tonight?",
    "options": [
      "sufficient",
      "unnecessary",
      "potential",
      "overnight"
    ],
    "answer": 0,
    "vocabIndex": 53
  },
  {
    "q": "The initial research framework was deemed ______ to support the scientist's new medical theory.",
    "options": [
      "necessary",
      "insufficient",
      "voluntary",
      "responsible"
    ],
    "answer": 1,
    "vocabIndex": 54
  },
  {
    "q": "The mechanics checked the engines thoroughly to ensure they were ______ stable for the long flight.",
    "options": [
      "potentially",
      "precisely",
      "automatically",
      "sufficiently"
    ],
    "answer": 3,
    "vocabIndex": 55
  },
  {
    "q": "The agricultural community plans to become completely ______ in terms of clean energy and food.",
    "options": [
      "responsible",
      "self-sufficient",
      "straightforward",
      "automated"
    ],
    "answer": 1,
    "vocabIndex": 56
  },
  {
    "q": "Environmental activists ______ against the sudden opening of a massive factory near the nature reserve.",
    "options": [
      "yields",
      "preserve",
      "protested",
      "observe"
    ],
    "answer": 2,
    "vocabIndex": 57
  },
  {
    "q": "The university students held a peaceful ______ against animal testing in cosmetic medical research.",
    "options": [
      "responsibility",
      "presentation",
      "precision",
      "protest"
    ],
    "answer": 3,
    "vocabIndex": 58
  },
  {
    "q": "Hundreds of ______ gathered outside the government building demanding a stricter minimum wage law.",
    "options": [
      "protesters",
      "precision",
      "profit",
      "hospitality"
    ],
    "answer": 0,
    "vocabIndex": 59
  },
  {
    "q": "The political group organized a massive ______ in the central plaza yesterday afternoon.",
    "options": [
      "surrender to",
      "took the responsibility for",
      "obsessed with",
      "protest rally"
    ],
    "answer": 3,
    "vocabIndex": 60
  },
  {
    "q": "Thousands of citizens gathered in public to ______ against the controversial new minimum wage law yesterday.",
    "options": [
      "demonstrate",
      "protested",
      "bumped",
      "present"
    ],
    "answer": 0,
    "vocabIndex": 61
  },
  {
    "q": "The local police monitored the crowd closely to ensure that the ______ remained peaceful during the rally.",
    "options": [
      "architecture",
      "revenue",
      "demonstrators",
      "automobile"
    ],
    "answer": 2,
    "vocabIndex": 62
  },
  {
    "q": "The environmental protection group organized a massive ______ to raise public awareness about ocean pollution.",
    "options": [
      "automation",
      "demonstration",
      "protesters",
      "preservation"
    ],
    "answer": 1,
    "vocabIndex": 63
  },
  {
    "q": "The experienced engineering team managed to ______ the safety features of their new automated framework.",
    "options": [
      "demonstrate",
      "preserve",
      "reserve",
      "bumped"
    ],
    "answer": 0,
    "vocabIndex": 64
  },
  {
    "q": "The tech manufacturer gave a live ______ of how the customizable smartphone utilizes green electricity.",
    "options": [
      "architect",
      "demonstration",
      "revenue",
      "precision"
    ],
    "answer": 1,
    "vocabIndex": 65
  },
  {
    "q": "The ambitious intern will ______ her preliminary layout for the school library project tomorrow morning.",
    "options": [
      "preserve",
      "reserve",
      "serve",
      "present"
    ],
    "answer": 3,
    "vocabIndex": 66
  },
  {
    "q": "The supportive coordinator delivered a brilliant ______ to clarify the company's annual revenue goals.",
    "options": [
      "protesters",
      "representative",
      "presentation",
      "automation"
    ],
    "answer": 2,
    "vocabIndex": 67
  },
  {
    "q": "The financial analyst had to ______ regarding why the firm's net profit dropped unexpectedly.",
    "options": [
      "make a presentation",
      "vending machine",
      "daily necessity",
      "wages"
    ],
    "answer": 0,
    "vocabIndex": 68
  },
  {
    "q": "The senior corporate attorney was hired to ______ the private technology firm in the contract dispute.",
    "options": [
      "establish",
      "serve",
      "bumped",
      "represent"
    ],
    "answer": 3,
    "vocabIndex": 69
  },
  {
    "q": "A customer service ______ sent a thoughtful email to resolve the technical accident for the potential client.",
    "options": [
      "presentation",
      "necessity",
      "representative",
      "representation"
    ],
    "answer": 2,
    "vocabIndex": 70
  },
  {
    "q": "Low-income wage earners demanded better ______ on the executive board to secure their fundamental rights.",
    "options": [
      "protesters",
      "representation",
      "wage",
      "necessity"
    ],
    "answer": 1,
    "vocabIndex": 71
  },
  {
    "q": "The disgruntled railway factory workers decided to ______ to demand fair annual revenue bonuses.",
    "options": [
      "lay off",
      "bumped into",
      "out of necessity",
      "go on a strike"
    ],
    "answer": 3,
    "vocabIndex": 72
  },
  {
    "q": "The experienced representatives of the ______ negotiated firmly with the corporate board to resolve the dispute.",
    "options": [
      "obsessed with",
      "labor union",
      "yielded my seat on the train to",
      "self-driving vehicle"
    ],
    "answer": 1,
    "vocabIndex": 73
  },
  {
    "q": "The experienced manager thanked the members of her dedicated ______ for their exceptional hard work.",
    "options": [
      "staff",
      "architect",
      "drone",
      "automation"
    ],
    "answer": 0,
    "vocabIndex": 74
  },
  {
    "q": "The emergency room was severely ______ during the long weekend holiday, which delayed medical treatment.",
    "options": [
      "responsible",
      "automated",
      "understaffed",
      "self-sufficient"
    ],
    "answer": 2,
    "vocabIndex": 75
  },
  {
    "q": "In order for the corporation to survive the fiscal crisis, it must ______ the staff by 40%.",
    "options": [
      "lay off",
      "forward / forwards",
      "yielded my seat on the train to",
      "serve as"
    ],
    "answer": 0,
    "vocabIndex": 76
  },
  {
    "q": "The executive board is looking for a ______ manager to supervise the newly established financial investment department.",
    "options": [
      "necessary",
      "responsible",
      "insufficient",
      "potential"
    ],
    "answer": 1,
    "vocabIndex": 77
  },
  {
    "q": "The senior engineer will ______ monitoring data security and maintaining the automated server framework.",
    "options": [
      "give in to",
      "protest rally",
      "be responsible for",
      "function as"
    ],
    "answer": 2,
    "vocabIndex": 78
  },
  {
    "q": "Owning a domestic pet like a dog is a serious ______ that requires constant care.",
    "options": [
      "obsession",
      "hospitality",
      "protest",
      "responsibility"
    ],
    "answer": 3,
    "vocabIndex": 79
  },
  {
    "q": "Kyle wisely ______ the serious operational mistake at work yesterday.",
    "options": [
      "go on a strike",
      "took the responsibility for",
      "backward / backwards",
      "outward / outwards"
    ],
    "answer": 1,
    "vocabIndex": 80
  },
  {
    "q": "Educators try to cultivate a strong ______ in young children through community service.",
    "options": [
      "make a reservation",
      "surrender to",
      "bumped into",
      "a sense of responsibility"
    ],
    "answer": 3,
    "vocabIndex": 81
  },
  {
    "q": "Blair is considered the chief ______ of the successful business merger between the tech companies.",
    "options": [
      "income",
      "preservation",
      "architect",
      "obsession"
    ],
    "answer": 2,
    "vocabIndex": 82
  },
  {
    "q": "The historic European city is celebrated globally for its unique combination of classical and modern ______.",
    "options": [
      "architecture",
      "precision",
      "bonus",
      "protest"
    ],
    "answer": 0,
    "vocabIndex": 83
  },
  {
    "q": "The villagers were extremely ______ and provided us with sufficient food and comfortable storage rooms.",
    "options": [
      "responsible",
      "sufficient",
      "necessary",
      "hospitable"
    ],
    "answer": 3,
    "vocabIndex": 84
  },
  {
    "q": "The local family showed exceptional ______ to the lost traveler by inviting him in for dinner.",
    "options": [
      "income",
      "reservation",
      "hospitality",
      "automation"
    ],
    "answer": 2,
    "vocabIndex": 85
  },
  {
    "q": "Eric isn't ______ at all; he is just extremely careful with how he manages his daily budget.",
    "options": [
      "stingy",
      "lucrative",
      "potential",
      "precise"
    ],
    "answer": 0,
    "vocabIndex": 86
  },
  {
    "q": "I accidentally ______ into an expensive crystal vase and broke it into thin pieces.",
    "options": [
      "establish",
      "bumped",
      "preserve",
      "observe"
    ],
    "answer": 1,
    "vocabIndex": 87
  },
  {
    "q": "Stan's vacation plans hit ______ when the airport lost his excess luggage.",
    "options": [
      "self-driving vehicle",
      "potential customer",
      "a bump in the road",
      "protest rally"
    ],
    "answer": 2,
    "vocabIndex": 88
  },
  {
    "q": "You will never guess who I ______ at the morning fresh vegetable market—Paul!",
    "options": [
      "protest rally",
      "bumped into",
      "serve as",
      "go on a strike"
    ],
    "answer": 1,
    "vocabIndex": 89
  },
  {
    "q": "The captain has already given his official orders; ______, we must follow the procedures immediately.",
    "options": [
      "precisely",
      "potentially",
      "automatically",
      "hence"
    ],
    "answer": 3,
    "vocabIndex": 90
  },
  {
    "q": "Death Valley is the hottest location in North America, ______.",
    "options": [
      "hence the name",
      "took the responsibility for",
      "potential customer",
      "serve as"
    ],
    "answer": 0,
    "vocabIndex": 91
  },
  {
    "q": "Dana does valuable ______ work at the local hospital to assist understaffed nursing teams.",
    "options": [
      "established",
      "voluntary",
      "profitable",
      "straightforward"
    ],
    "answer": 1,
    "vocabIndex": 92
  },
  {
    "q": "High-speed filming captured the patient's ______ eye movements during the medical examination.",
    "options": [
      "automated",
      "automatic",
      "sufficient",
      "involuntary"
    ],
    "answer": 3,
    "vocabIndex": 93
  },
  {
    "q": "The beautiful apple tree in my secure backyard ______ a large amount of fresh fruit every year.",
    "options": [
      "yields",
      "reserve",
      "bumped",
      "present"
    ],
    "answer": 0,
    "vocabIndex": 94
  },
  {
    "q": "After a mild summer with plenty of rainfall, the total crop ______ at harvest was exceptional.",
    "options": [
      "preservation",
      "server",
      "yield",
      "automation"
    ],
    "answer": 2,
    "vocabIndex": 95
  },
  {
    "q": "I willingly ______ an elderly lady who looked exhausted.",
    "options": [
      "out of necessity",
      "bumped into",
      "lay off",
      "yielded my seat on the train to"
    ],
    "answer": 3,
    "vocabIndex": 96
  },
  {
    "q": "The local government refused to ______ the intense public pressure regarding the controversial minimum wage law.",
    "options": [
      "a bump in the road",
      "yield to",
      "daily necessity",
      "self-driving vehicle"
    ],
    "answer": 1,
    "vocabIndex": 97
  },
  {
    "q": "Parents should not routinely ______ their children's unreasonable demands for expensive character-themed merchandise.",
    "options": [
      "afterward / afterwards",
      "potential customer",
      "give in to",
      "labor union"
    ],
    "answer": 2,
    "vocabIndex": 98
  },
  {
    "q": "The defeated soldiers had no viable choice but to ______ the enemy forces near the regional border zone.",
    "options": [
      "surrender to",
      "hence the name",
      "to be precise",
      "wages"
    ],
    "answer": 0,
    "vocabIndex": 99
  },
  {
    "q": "Carl's constant ______ with making virtual cash is beginning to affect his social life negatively.",
    "options": [
      "representative",
      "demonstrators",
      "establishment",
      "obsession"
    ],
    "answer": 3,
    "vocabIndex": 100
  },
  {
    "q": "Gina is completely ______ the famous cartoon character and decorated her room with its mugs.",
    "options": [
      "bumped into",
      "obsessed with",
      "make a reservation",
      "vending machine"
    ],
    "answer": 1,
    "vocabIndex": 101
  },
  {
    "q": "The marketing department launched an interactive campaign to attract ______ buyers to our automated platform.",
    "options": [
      "insufficient",
      "unnecessary",
      "potential",
      "overnight"
    ],
    "answer": 2,
    "vocabIndex": 102
  },
  {
    "q": "The sales representative sent a thoughtful email to follow up with the ______ this morning.",
    "options": [
      "potential customer",
      "to be precise",
      "work as",
      "serve as"
    ],
    "answer": 0,
    "vocabIndex": 103
  },
  {
    "q": "The experienced financial mentor immediately recognized the young intern's immense ______ for wealth management.",
    "options": [
      "protest",
      "protesters",
      "automation",
      "potential"
    ],
    "answer": 3,
    "vocabIndex": 104
  },
  {
    "q": "The supportive teacher designed customizable lesson blueprints to help every single adolescent ______.",
    "options": [
      "fulfill their full potential",
      "onward",
      "labor union",
      "surrender to"
    ],
    "answer": 0,
    "vocabIndex": 105
  },
  {
    "q": "The strict high school bans clothing that features ______ offensive language or artistic content.",
    "options": [
      "automatically",
      "precisely",
      "potentially",
      "sufficiently"
    ],
    "answer": 2,
    "vocabIndex": 106
  }
];

const LOOKUP = {
  "straightforward": {
    "pos": "adj.",
    "en_def": "honest and open; easy to do or understand, presenting no difficulty",
    "cn_def": "直率的；簡單易懂的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "honest and open; easy to do or understand, presenting no difficulty",
        "cn_def": "直率的；簡單易懂的"
      }
    ]
  },
  "onward": {
    "pos": "adv. adj.",
    "en_def": "moving forward in time or space, continuing a journey or process",
    "cn_def": "向前的；從...開始",
    "combined": [
      {
        "pos": "adv. adj.",
        "en_def": "moving forward in time or space, continuing a journey or process",
        "cn_def": "向前的；從...開始"
      }
    ]
  },
  "onward / onwards": {
    "pos": "adv. adj.",
    "en_def": "moving forward in time or space, continuing a journey or process",
    "cn_def": "向前的；從...開始",
    "combined": [
      {
        "pos": "adv. adj.",
        "en_def": "moving forward in time or space, continuing a journey or process",
        "cn_def": "向前的；從...開始"
      }
    ]
  },
  "forward / forwards": {
    "pos": "adv. adj.",
    "en_def": "toward the direction that is in front; progressing toward a better state",
    "cn_def": "向前",
    "combined": [
      {
        "pos": "adv. adj.",
        "en_def": "toward the direction that is in front; progressing toward a better state",
        "cn_def": "向前"
      }
    ]
  },
  "backward / backwards": {
    "pos": "adv. adj.",
    "en_def": "toward the direction that is behind; returning to an earlier or worse state",
    "cn_def": "向後；倒退地",
    "combined": [
      {
        "pos": "adv. adj.",
        "en_def": "toward the direction that is behind; returning to an earlier or worse state",
        "cn_def": "向後；倒退地"
      }
    ]
  },
  "outward / outwards": {
    "pos": "adv. adj.",
    "en_def": "relating to how something looks on the outside; moving away from a center",
    "cn_def": "向外的；外表的",
    "combined": [
      {
        "pos": "adv. adj.",
        "en_def": "relating to how something looks on the outside; moving away from a center",
        "cn_def": "向外的；外表的"
      }
    ]
  },
  "afterward / afterwards": {
    "pos": "adv.",
    "en_def": "at a later time or after a specific event has already happened",
    "cn_def": "之後；後來",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "at a later time or after a specific event has already happened",
        "cn_def": "之後；後來"
      }
    ]
  },
  "automatic": {
    "pos": "adj.",
    "en_def": "happening by itself; done without active thinking or conscious effort",
    "cn_def": "自動的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "happening by itself; done without active thinking or conscious effort",
        "cn_def": "自動的"
      }
    ]
  },
  "automatically": {
    "pos": "adv.",
    "en_def": "in a way that happens independently or without choice human control",
    "cn_def": "自動地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that happens independently or without choice human control",
        "cn_def": "自動地"
      }
    ]
  },
  "automated": {
    "pos": "adj.",
    "en_def": "operated by largely automatic equipment or systems with minimal human labor",
    "cn_def": "自動化的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "operated by largely automatic equipment or systems with minimal human labor",
        "cn_def": "自動化的"
      }
    ]
  },
  "automation": {
    "pos": "n.",
    "en_def": "the use of automatic equipment and computer software to operate a process",
    "cn_def": "自動化",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the use of automatic equipment and computer software to operate a process",
        "cn_def": "自動化"
      }
    ]
  },
  "automobile": {
    "pos": "n.",
    "en_def": "a road vehicle, typically with four wheels, powered by an internal engine",
    "cn_def": "汽車",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a road vehicle, typically with four wheels, powered by an internal engine",
        "cn_def": "汽車"
      }
    ]
  },
  "drone": {
    "pos": "n.",
    "en_def": "an aircraft without a human pilot on board, controlled remotely or autonomously",
    "cn_def": "無人機",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an aircraft without a human pilot on board, controlled remotely or autonomously",
        "cn_def": "無人機"
      }
    ]
  },
  "self-driving vehicle": {
    "pos": "n.",
    "en_def": "a car or truck capable of sensing its environment and operating without human input",
    "cn_def": "自動駕駛車輛",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a car or truck capable of sensing its environment and operating without human input",
        "cn_def": "自動駕駛車輛"
      }
    ]
  },
  "vending machine": {
    "pos": "n.",
    "en_def": "an automated machine that provides items such as snacks and beverages after cash input",
    "cn_def": "自動販賣機",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an automated machine that provides items such as snacks and beverages after cash input",
        "cn_def": "自動販賣機"
      }
    ]
  },
  "self-checkout store": {
    "pos": "n.",
    "en_def": "a retail shop where consumers scan and pay for their purchased items themselves",
    "cn_def": "自助結帳商店",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a retail shop where consumers scan and pay for their purchased items themselves",
        "cn_def": "自助結帳商店"
      }
    ]
  },
  "serve": {
    "pos": "v.",
    "en_def": "to provide food or drinks to a guest during a meal at a restaurant",
    "cn_def": "上菜；服務",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to provide food or drinks to a guest during a meal at a restaurant",
        "cn_def": "上菜；服務"
      }
    ]
  },
  "server": {
    "pos": "n.",
    "en_def": "a waiter in a restaurant.",
    "cn_def": "服務生",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a waiter in a restaurant.",
        "cn_def": "服務生"
      },
      {
        "pos": "n.",
        "en_def": "a central computer or program that manages access to a centralized resource or network",
        "cn_def": "伺服器"
      }
    ]
  },
  "serve as": {
    "pos": "phr.",
    "en_def": "to function in a specific capacity or fulfill a particular role or purpose",
    "cn_def": "充當...；作為...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to function in a specific capacity or fulfill a particular role or purpose",
        "cn_def": "充當...；作為..."
      }
    ]
  },
  "act as": {
    "pos": "phr.",
    "en_def": "to perform the functions or duties of a particular person, role, or object",
    "cn_def": "充當...；扮演...的角色",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to perform the functions or duties of a particular person, role, or object",
        "cn_def": "充當...；扮演...的角色"
      }
    ]
  },
  "function as": {
    "pos": "phr.",
    "en_def": "to operate or work in a specific role, or to serve a particular practical purpose",
    "cn_def": "發揮...功能；適合作...之用",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to operate or work in a specific role, or to serve a particular practical purpose",
        "cn_def": "發揮...功能；適合作...之用"
      }
    ]
  },
  "work as": {
    "pos": "phr.",
    "en_def": "to be employed in a specific professional job, position, or occupation",
    "cn_def": "擔任...工作；做為...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be employed in a specific professional job, position, or occupation",
        "cn_def": "擔任...工作；做為..."
      }
    ]
  },
  "reserve": {
    "pos": "v.",
    "en_def": "to arrange for a room, seat, or table to be kept for the use of a specific person",
    "cn_def": "預約；保留",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to arrange for a room, seat, or table to be kept for the use of a specific person",
        "cn_def": "預約；保留"
      }
    ]
  },
  "reservation": {
    "pos": "n.",
    "en_def": "an arrangement to secure a seat, room, or table at a particular future time",
    "cn_def": "預約；訂位（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an arrangement to secure a seat, room, or table at a particular future time",
        "cn_def": "預約；訂位（名詞）"
      }
    ]
  },
  "make a reservation": {
    "pos": "phr.",
    "en_def": "to complete the action of booking a seat, room, or table in advance",
    "cn_def": "進行預約/訂位",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to complete the action of booking a seat, room, or table in advance",
        "cn_def": "進行預約/訂位"
      }
    ]
  },
  "preserve": {
    "pos": "v.",
    "en_def": "to maintain something in its original state or protect it from decay or destruction",
    "cn_def": "保存；保護；維持",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to maintain something in its original state or protect it from decay or destruction",
        "cn_def": "保存；保護；維持"
      }
    ]
  },
  "preservation": {
    "pos": "n.",
    "en_def": "the practical act of keeping something safe, functioning, or pristine over time",
    "cn_def": "保存；維護（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the practical act of keeping something safe, functioning, or pristine over time",
        "cn_def": "保存；維護（名詞）"
      }
    ]
  },
  "observe": {
    "pos": "v.",
    "en_def": "to watch someone or something carefully and attentively to gain knowledge",
    "cn_def": "觀察；注意到",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to watch someone or something carefully and attentively to gain knowledge",
        "cn_def": "觀察；注意到"
      }
    ]
  },
  "observation": {
    "pos": "n.",
    "en_def": "the systematic process of watching something closely or a remark based on monitoring",
    "cn_def": "觀察（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the systematic process of watching something closely or a remark based on monitoring",
        "cn_def": "觀察（名詞）"
      }
    ]
  },
  "deserves": {
    "pos": "v.",
    "en_def": "to be worthy of or earned a specific treatment, reward, or punishment due to actions",
    "cn_def": "值得；應得",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to be worthy of or earned a specific treatment, reward, or punishment due to actions",
        "cn_def": "值得；應得"
      }
    ]
  },
  "deserve": {
    "pos": "v.",
    "en_def": "to be worthy of or earned a specific treatment, reward, or punishment due to actions",
    "cn_def": "值得；應得",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to be worthy of or earned a specific treatment, reward, or punishment due to actions",
        "cn_def": "值得；應得"
      }
    ]
  },
  "precise": {
    "pos": "adj.",
    "en_def": "exact, accurate, and careful about small details, leaving no doubt",
    "cn_def": "精準的；確切的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "exact, accurate, and careful about small details, leaving no doubt",
        "cn_def": "精準的；確切的"
      }
    ]
  },
  "to be precise": {
    "pos": "phr.",
    "en_def": "used when you are giving more exact information about a fact",
    "cn_def": "準確來說",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "used when you are giving more exact information about a fact",
        "cn_def": "準確來說"
      }
    ]
  },
  "precisely": {
    "pos": "adv.",
    "en_def": "exactly or accurately in a way that matches a particular fact",
    "cn_def": "精準地；確實如此",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "exactly or accurately in a way that matches a particular fact",
        "cn_def": "精準地；確實如此"
      }
    ]
  },
  "precision": {
    "pos": "n.",
    "en_def": "the quality or state of being exceptionally accurate and exact",
    "cn_def": "精密；精準度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality or state of being exceptionally accurate and exact",
        "cn_def": "精密；精準度"
      }
    ]
  },
  "overnight": {
    "pos": "adj. adv.",
    "en_def": "happening or continuing during the entire night; sudden and unexpected",
    "cn_def": "一夜之間的；整夜的",
    "combined": [
      {
        "pos": "adj. adv.",
        "en_def": "happening or continuing during the entire night; sudden and unexpected",
        "cn_def": "一夜之間的；整夜的"
      }
    ]
  },
  "establish": {
    "pos": "v.",
    "en_def": "to set up, found, or start an organization, system, or permanent set of rules",
    "cn_def": "建立；設立；創辦",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to set up, found, or start an organization, system, or permanent set of rules",
        "cn_def": "建立；設立；創辦"
      }
    ]
  },
  "established": {
    "pos": "adj.",
    "en_def": "recognized, accepted, and well-known over a long period due to successful operations",
    "cn_def": "確立的；既定的；著名的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "recognized, accepted, and well-known over a long period due to successful operations",
        "cn_def": "確立的；既定的；著名的"
      }
    ]
  },
  "establishment": {
    "pos": "n.",
    "en_def": "a business, shop, or commercial organization; the act of starting a system",
    "cn_def": "商家；企業；建立",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a business, shop, or commercial organization; the act of starting a system",
        "cn_def": "商家；企業；建立"
      }
    ]
  },
  "wage": {
    "pos": "n.",
    "en_def": "a regular payment earned for work or services, typically paid daily or weekly",
    "cn_def": "薪資（通常指計時或計週的工資）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a regular payment earned for work or services, typically paid daily or weekly",
        "cn_def": "薪資（通常指計時或計週的工資）"
      }
    ]
  },
  "wages": {
    "pos": "n.",
    "en_def": "a person who works for a regular wage, especially as the main support of a family",
    "cn_def": "靠薪資生活的人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who works for a regular wage, especially as the main support of a family",
        "cn_def": "靠薪資生活的人"
      }
    ]
  },
  "wage earner": {
    "pos": "n.",
    "en_def": "a person who works for a regular wage, especially as the main support of a family",
    "cn_def": "靠薪資生活的人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who works for a regular wage, especially as the main support of a family",
        "cn_def": "靠薪資生活的人"
      }
    ]
  },
  "salaries": {
    "pos": "n.",
    "en_def": "a fixed regular payment, typically paid on a monthly basis to professional workers",
    "cn_def": "薪水（通常指固定月薪或年薪）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a fixed regular payment, typically paid on a monthly basis to professional workers",
        "cn_def": "薪水（通常指固定月薪或年薪）"
      }
    ]
  },
  "salary": {
    "pos": "n.",
    "en_def": "a fixed regular payment, typically paid on a monthly basis to professional workers",
    "cn_def": "薪水（通常指固定月薪或年薪）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a fixed regular payment, typically paid on a monthly basis to professional workers",
        "cn_def": "薪水（通常指固定月薪或年薪）"
      }
    ]
  },
  "bonus": {
    "pos": "n.",
    "en_def": "an extra amount of money given to an employee as a reward for hard work",
    "cn_def": "獎金；紅利",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an extra amount of money given to an employee as a reward for hard work",
        "cn_def": "獎金；紅利"
      }
    ]
  },
  "income": {
    "pos": "n.",
    "en_def": "money received, especially on a regular basis, for work or through investments",
    "cn_def": "收入；所得",
    "combined": [
      {
        "pos": "n.",
        "en_def": "money received, especially on a regular basis, for work or through investments",
        "cn_def": "收入；所得"
      }
    ]
  },
  "revenue": {
    "pos": "n.",
    "en_def": "the total amount of money received by a company or organization from its business activities",
    "cn_def": "總收益；營收",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the total amount of money received by a company or organization from its business activities",
        "cn_def": "總收益；營收"
      }
    ]
  },
  "profit": {
    "pos": "n.",
    "en_def": "a financial gain, especially the difference between the amount earned and the amount spent",
    "cn_def": "利潤；淨利",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a financial gain, especially the difference between the amount earned and the amount spent",
        "cn_def": "利潤；淨利"
      }
    ]
  },
  "make profit": {
    "pos": "phr.",
    "en_def": "to earn more money than you spend on producing, buying, or selling goods or services",
    "cn_def": "獲利；賺取利潤",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to earn more money than you spend on producing, buying, or selling goods or services",
        "cn_def": "獲利；賺取利潤"
      }
    ]
  },
  "make profit / make a profit": {
    "pos": "phr.",
    "en_def": "to earn more money than you spend on producing, buying, or selling goods or services",
    "cn_def": "獲利；賺取利潤",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to earn more money than you spend on producing, buying, or selling goods or services",
        "cn_def": "獲利；賺取利潤"
      }
    ]
  },
  "profitable": {
    "pos": "adj.",
    "en_def": "yielding profit or financial gain; financially beneficial over a sustained period",
    "cn_def": "有利可圖的；賺錢的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "yielding profit or financial gain; financially beneficial over a sustained period",
        "cn_def": "有利可圖的；賺錢的"
      }
    ]
  },
  "lucrative": {
    "pos": "adj.",
    "en_def": "producing a great deal of profit or wealth; exceptionally rewarding financially",
    "cn_def": "獲利豐厚的；賺大錢的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "producing a great deal of profit or wealth; exceptionally rewarding financially",
        "cn_def": "獲利豐厚的；賺大錢的"
      }
    ]
  },
  "necessary": {
    "pos": "adj.",
    "en_def": "needed to be done, achieved, or present; essential or completely required",
    "cn_def": "必要的；必需的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "needed to be done, achieved, or present; essential or completely required",
        "cn_def": "必要的；必需的"
      }
    ]
  },
  "unnecessary": {
    "pos": "adj.",
    "en_def": "not needed or required; more than what is essential and leading to waste",
    "cn_def": "不必要的；多餘的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not needed or required; more than what is essential and leading to waste",
        "cn_def": "不必要的；多餘的"
      }
    ]
  },
  "necessity": {
    "pos": "n.",
    "en_def": "something that is absolutely essential or required for a survival process",
    "cn_def": "必需品；必要性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that is absolutely essential or required for a survival process",
        "cn_def": "必需品；必要性"
      }
    ]
  },
  "daily necessity": {
    "pos": "n.",
    "en_def": "a product or item that is essential for a person's everyday life, such as food or water",
    "cn_def": "日常必需品",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a product or item that is essential for a person's everyday life, such as food or water",
        "cn_def": "日常必需品"
      }
    ]
  },
  "out of necessity": {
    "pos": "phr.",
    "en_def": "performing an action because there is no other choice possible due to a situation",
    "cn_def": "出於迫於無奈；出於必要",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "performing an action because there is no other choice possible due to a situation",
        "cn_def": "出於迫於無奈；出於必要"
      }
    ]
  },
  "sufficient": {
    "pos": "adj.",
    "en_def": "enough for a particular purpose or requirement; satisfactory in amount",
    "cn_def": "充足的；足夠的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "enough for a particular purpose or requirement; satisfactory in amount",
        "cn_def": "充足的；足夠的"
      }
    ]
  },
  "insufficient": {
    "pos": "adj.",
    "en_def": "not enough to meet a requirement or achieve a desirable goal",
    "cn_def": "不足的；不夠的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not enough to meet a requirement or achieve a desirable goal",
        "cn_def": "不足的；不夠的"
      }
    ]
  },
  "sufficiently": {
    "pos": "adv.",
    "en_def": "to a degree that is large or satisfactory enough for a specific purpose",
    "cn_def": "充足地；足夠地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "to a degree that is large or satisfactory enough for a specific purpose",
        "cn_def": "充足地；足夠地"
      }
    ]
  },
  "self-sufficient": {
    "pos": "adj.",
    "en_def": "able to provide everything that you need for yourself without outside aid",
    "cn_def": "自給自足的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to provide everything that you need for yourself without outside aid",
        "cn_def": "自給自足的"
      }
    ]
  },
  "protested": {
    "pos": "v.",
    "en_def": "to formally express strong disapproval or objection to a decision, law, or policy",
    "cn_def": "抗議；反對",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to formally express strong disapproval or objection to a decision, law, or policy",
        "cn_def": "抗議；反對"
      }
    ]
  },
  "protest": {
    "pos": "v.",
    "en_def": "to formally express strong disapproval or objection to a decision, law, or policy",
    "cn_def": "抗議；反對",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to formally express strong disapproval or objection to a decision, law, or policy",
        "cn_def": "抗議；反對"
      },
      {
        "pos": "n.",
        "en_def": "an organized public demonstration to express strong objection to something",
        "cn_def": "抗議；抗議活動"
      }
    ]
  },
  "protesters": {
    "pos": "n.",
    "en_def": "a person who publicly demonstrates to object to a specific policy or rule",
    "cn_def": "抗議者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who publicly demonstrates to object to a specific policy or rule",
        "cn_def": "抗議者"
      }
    ]
  },
  "protester": {
    "pos": "n.",
    "en_def": "a person who publicly demonstrates to object to a specific policy or rule",
    "cn_def": "抗議者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who publicly demonstrates to object to a specific policy or rule",
        "cn_def": "抗議者"
      }
    ]
  },
  "protest rally": {
    "pos": "n.",
    "en_def": "a large public meeting organized to protest against a specific decision",
    "cn_def": "抗議集會",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large public meeting organized to protest against a specific decision",
        "cn_def": "抗議集會"
      }
    ]
  },
  "demonstrate": {
    "pos": "v.",
    "en_def": "to take part in a public meeting or march to protest against something",
    "cn_def": "示威；遊行",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take part in a public meeting or march to protest against something",
        "cn_def": "示威；遊行"
      },
      {
        "pos": "v.",
        "en_def": "to show clearly that something is true or exists by providing proof or evidence",
        "cn_def": "展現；證實；論證"
      }
    ]
  },
  "demonstrator": {
    "pos": "n.",
    "en_def": "a person who takes part in a public protest meeting or march",
    "cn_def": "示威者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who takes part in a public protest meeting or march",
        "cn_def": "示威者"
      }
    ]
  },
  "demonstrators": {
    "pos": "n.",
    "en_def": "a person who takes part in a public protest meeting or march",
    "cn_def": "示威者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who takes part in a public protest meeting or march",
        "cn_def": "示威者"
      }
    ]
  },
  "demonstration": {
    "pos": "n.",
    "en_def": "a public meeting or march at which people show that they are protesting against something",
    "cn_def": "示威運動；遊行抗議",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a public meeting or march at which people show that they are protesting against something",
        "cn_def": "示威運動；遊行抗議"
      },
      {
        "pos": "n.",
        "en_def": "an act of showing someone how something works or is done, or a clear display of a quality",
        "cn_def": "展現；示範說明（名詞）"
      }
    ]
  },
  "present": {
    "pos": "v.",
    "en_def": "to give, provide, or introduce something formally to a group of people",
    "cn_def": "呈現；提出；呈獻",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give, provide, or introduce something formally to a group of people",
        "cn_def": "呈現；提出；呈獻"
      }
    ]
  },
  "presentation": {
    "pos": "n.",
    "en_def": "a formal talk or speech in which a new product, idea, or piece of work is shown to an audience",
    "cn_def": "簡報；報告（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a formal talk or speech in which a new product, idea, or piece of work is shown to an audience",
        "cn_def": "簡報；報告（名詞）"
      }
    ]
  },
  "make a presentation": {
    "pos": "phr.",
    "en_def": "to perform the action of delivering a formal talk or displaying data to an audience",
    "cn_def": "進行簡報/報告",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to perform the action of delivering a formal talk or displaying data to an audience",
        "cn_def": "進行簡報/報告"
      }
    ]
  },
  "represent": {
    "pos": "v.",
    "en_def": "to speak, act, or official be present on behalf of another individual or group",
    "cn_def": "代表；代理（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to speak, act, or official be present on behalf of another individual or group",
        "cn_def": "代表；代理（動詞）"
      }
    ]
  },
  "representative": {
    "pos": "n.",
    "en_def": "a person chosen or elected to speak and act on behalf of a specific community or group",
    "cn_def": "代表（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person chosen or elected to speak and act on behalf of a specific community or group",
        "cn_def": "代表（名詞）"
      }
    ]
  },
  "representation": {
    "pos": "n.",
    "en_def": "the state of having someone speak or act on your behalf, or a depiction of something",
    "cn_def": "代表；代表權；表現（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of having someone speak or act on your behalf, or a depiction of something",
        "cn_def": "代表；代表權；表現（名詞）"
      }
    ]
  },
  "go on a strike": {
    "pos": "phr.",
    "en_def": "to refuse to work as a form of organized protest, typically to secure better pay or working conditions",
    "cn_def": "進行罷工",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to refuse to work as a form of organized protest, typically to secure better pay or working conditions",
        "cn_def": "進行罷工"
      }
    ]
  },
  "go on a strike / go on strike": {
    "pos": "phr.",
    "en_def": "to refuse to work as a form of organized protest, typically to secure better pay or working conditions",
    "cn_def": "進行罷工",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to refuse to work as a form of organized protest, typically to secure better pay or working conditions",
        "cn_def": "進行罷工"
      }
    ]
  },
  "labor union": {
    "pos": "n.",
    "en_def": "an organized association of workers, often in a trade or profession, formed to protect their rights",
    "cn_def": "工會",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an organized association of workers, often in a trade or profession, formed to protect their rights",
        "cn_def": "工會"
      }
    ]
  },
  "staff": {
    "pos": "n.",
    "en_def": "the group of people who work for an organization or business",
    "cn_def": "全體員工；職員",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the group of people who work for an organization or business",
        "cn_def": "全體員工；職員"
      }
    ]
  },
  "understaffed": {
    "pos": "adj.",
    "en_def": "having too few employees to perform the required work efficiently",
    "cn_def": "人手不足的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having too few employees to perform the required work efficiently",
        "cn_def": "人手不足的"
      }
    ]
  },
  "lay off": {
    "pos": "phr.",
    "en_def": "to reduce the total number of employees in a company to save money",
    "cn_def": "裁員",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to reduce the total number of employees in a company to save money",
        "cn_def": "裁員"
      }
    ]
  },
  "responsible": {
    "pos": "adj.",
    "en_def": "having an obligation to do something, or being rational and capable of making good decisions",
    "cn_def": "負責的；可靠的；有責任感的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having an obligation to do something, or being rational and capable of making good decisions",
        "cn_def": "負責的；可靠的；有責任感的"
      }
    ]
  },
  "be responsible for": {
    "pos": "phr.",
    "en_def": "having an official duty to take care of something, or being the main cause of a situation",
    "cn_def": "對...負責；是...的原因",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "having an official duty to take care of something, or being the main cause of a situation",
        "cn_def": "對...負責；是...的原因"
      }
    ]
  },
  "responsibility": {
    "pos": "n.",
    "en_def": "a duty or task that you are officially expected or required to handle",
    "cn_def": "責任；職責",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a duty or task that you are officially expected or required to handle",
        "cn_def": "責任；職責"
      }
    ]
  },
  "took the responsibility for": {
    "pos": "phr.",
    "en_def": "to officially accept the blame or control for a situation or action",
    "cn_def": "承擔...的責任",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to officially accept the blame or control for a situation or action",
        "cn_def": "承擔...的責任"
      }
    ]
  },
  "take the responsibility for": {
    "pos": "phr.",
    "en_def": "to officially accept the blame or control for a situation or action",
    "cn_def": "承擔...的責任",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to officially accept the blame or control for a situation or action",
        "cn_def": "承擔...的責任"
      }
    ]
  },
  "a sense of responsibility": {
    "pos": "n.",
    "en_def": "an internal awareness of one's duties and the desire to perform them well",
    "cn_def": "責任感",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an internal awareness of one's duties and the desire to perform them well",
        "cn_def": "責任感"
      }
    ]
  },
  "architect": {
    "pos": "n.",
    "en_def": "a person who designs buildings; the chief planner or creator of a project",
    "cn_def": "建築師；締造者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who designs buildings; the chief planner or creator of a project",
        "cn_def": "建築師；締造者"
      }
    ]
  },
  "architecture": {
    "pos": "n.",
    "en_def": "the art or practice of designing and constructing buildings, or the complex structure of a system",
    "cn_def": "建築學；建築風格；（電腦）架構",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the art or practice of designing and constructing buildings, or the complex structure of a system",
        "cn_def": "建築學；建築風格；（電腦）架構"
      }
    ]
  },
  "hospitable": {
    "pos": "adj.",
    "en_def": "friendly, welcoming, and generous to guests or strangers",
    "cn_def": "熱情好客的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "friendly, welcoming, and generous to guests or strangers",
        "cn_def": "熱情好客的"
      }
    ]
  },
  "hospitality": {
    "pos": "n.",
    "en_def": "the friendly and generous reception and entertainment of guests or strangers",
    "cn_def": "款待；熱情好客",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the friendly and generous reception and entertainment of guests or strangers",
        "cn_def": "款待；熱情好客"
      }
    ]
  },
  "stingy": {
    "pos": "adj.",
    "en_def": "reluctant to give or spend; not generous with money or resources",
    "cn_def": "吝嗇的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "reluctant to give or spend; not generous with money or resources",
        "cn_def": "吝嗇的"
      }
    ]
  },
  "bumped": {
    "pos": "v.",
    "en_def": "to knock or run into something with a jolt; to upgrade someone's status",
    "cn_def": "碰撞；升等",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to knock or run into something with a jolt; to upgrade someone's status",
        "cn_def": "碰撞；升等"
      }
    ]
  },
  "bump": {
    "pos": "v.",
    "en_def": "to knock or run into something with a jolt; to upgrade someone's status",
    "cn_def": "碰撞；升等",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to knock or run into something with a jolt; to upgrade someone's status",
        "cn_def": "碰撞；升等"
      }
    ]
  },
  "a bump in the road": {
    "pos": "n.",
    "en_def": "a small, temporary problem or delay that stalls progress slightly",
    "cn_def": "小挫折；小插曲",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small, temporary problem or delay that stalls progress slightly",
        "cn_def": "小挫折；小插曲"
      }
    ]
  },
  "bumped into": {
    "pos": "phr.",
    "en_def": "to meet a person completely by chance without any prior arrangement",
    "cn_def": "巧遇某人",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to meet a person completely by chance without any prior arrangement",
        "cn_def": "巧遇某人"
      }
    ]
  },
  "bump into": {
    "pos": "phr.",
    "en_def": "to meet a person completely by chance without any prior arrangement",
    "cn_def": "巧遇某人",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to meet a person completely by chance without any prior arrangement",
        "cn_def": "巧遇某人"
      }
    ]
  },
  "hence": {
    "pos": "adv.",
    "en_def": "as a consequence; for this reason; therefore",
    "cn_def": "因此",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "as a consequence; for this reason; therefore",
        "cn_def": "因此"
      }
    ]
  },
  "hence the name": {
    "pos": "phr.",
    "en_def": "used to explain the reason why a specific title or label was given",
    "cn_def": "因此得名",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "used to explain the reason why a specific title or label was given",
        "cn_def": "因此得名"
      }
    ]
  },
  "voluntary": {
    "pos": "adj.",
    "en_def": "done, given, or acting of one's own free will; without payment",
    "cn_def": "自願的；志願的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "done, given, or acting of one's own free will; without payment",
        "cn_def": "自願的；志願的"
      }
    ]
  },
  "involuntary": {
    "pos": "adj.",
    "en_def": "done without conscious control or against one's free will; automatic",
    "cn_def": "不自覺的；非自願的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "done without conscious control or against one's free will; automatic",
        "cn_def": "不自覺的；非自願的"
      }
    ]
  },
  "yield": {
    "pos": "v.",
    "en_def": "to produce a crop or profit",
    "cn_def": "產出",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to produce a crop or profit",
        "cn_def": "產出"
      },
      {
        "pos": "n.",
        "en_def": "the total amount of an agricultural or industrial product produced",
        "cn_def": "產量"
      }
    ]
  },
  "yields": {
    "pos": "v.",
    "en_def": "to produce a crop or profit",
    "cn_def": "產出",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to produce a crop or profit",
        "cn_def": "產出"
      }
    ]
  },
  "yielded my seat on the train to": {
    "pos": "phr.",
    "en_def": "to give up your seat on a bus or train to a person who needs it more",
    "cn_def": "讓座給...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to give up your seat on a bus or train to a person who needs it more",
        "cn_def": "讓座給..."
      }
    ]
  },
  "yield one's seat to": {
    "pos": "phr.",
    "en_def": "to give up your seat on a bus or train to a person who needs it more",
    "cn_def": "讓座給...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to give up your seat on a bus or train to a person who needs it more",
        "cn_def": "讓座給..."
      }
    ]
  },
  "yield to": {
    "pos": "phr.",
    "en_def": "to allow oneself to be overcome by a specific pressure, temptation, or superior force",
    "cn_def": "屈服於...；讓步於...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to allow oneself to be overcome by a specific pressure, temptation, or superior force",
        "cn_def": "屈服於...；讓步於..."
      }
    ]
  },
  "give in to": {
    "pos": "phr.",
    "en_def": "to finally agree to what someone wants after refusing for a long period of time",
    "cn_def": "屈服於...；向...妥協",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to finally agree to what someone wants after refusing for a long period of time",
        "cn_def": "屈服於...；向...妥協"
      }
    ]
  },
  "surrender to": {
    "pos": "phr.",
    "en_def": "to stop resisting an opponent or a strong emotion and officially submit to their authority",
    "cn_def": "投降於...；聽任...擺佈",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to stop resisting an opponent or a strong emotion and officially submit to their authority",
        "cn_def": "投降於...；聽任...擺佈"
      }
    ]
  },
  "obsession": {
    "pos": "n.",
    "en_def": "an idea or thought that continually preoccupies or intrudes on a person's mind",
    "cn_def": "執念；著迷",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an idea or thought that continually preoccupies or intrudes on a person's mind",
        "cn_def": "執念；著迷"
      }
    ]
  },
  "obsessed with": {
    "pos": "phr.",
    "en_def": "completely unable to stop thinking about a specific person or object",
    "cn_def": "對...著迷",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "completely unable to stop thinking about a specific person or object",
        "cn_def": "對...著迷"
      }
    ]
  },
  "be obsessed with": {
    "pos": "phr.",
    "en_def": "completely unable to stop thinking about a specific person or object",
    "cn_def": "對...著迷",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "completely unable to stop thinking about a specific person or object",
        "cn_def": "對...著迷"
      }
    ]
  },
  "potential": {
    "pos": "adj.",
    "en_def": "having or showing the capacity to develop into something specified in the future",
    "cn_def": "潛在的；可能的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having or showing the capacity to develop into something specified in the future",
        "cn_def": "潛在的；可能的"
      },
      {
        "pos": "n.",
        "en_def": "latent qualities or abilities that may be developed and lead to future success or usefulness",
        "cn_def": "潛力；潛能（名詞）"
      }
    ]
  },
  "potential customer": {
    "pos": "n.",
    "en_def": "a person or organization that might be willing to buy a product or service in the future",
    "cn_def": "潛在客戶",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or organization that might be willing to buy a product or service in the future",
        "cn_def": "潛在客戶"
      }
    ]
  },
  "fulfill potential": {
    "pos": "phr.",
    "en_def": "to develop or use all of one's natural abilities and qualities to achieve complete success",
    "cn_def": "發揮潛力/潛能",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to develop or use all of one's natural abilities and qualities to achieve complete success",
        "cn_def": "發揮潛力/潛能"
      }
    ]
  },
  "fulfill their full potential": {
    "pos": "phr.",
    "en_def": "to develop or use all of one's natural abilities and qualities to achieve complete success",
    "cn_def": "發揮潛力/潛能",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to develop or use all of one's natural abilities and qualities to achieve complete success",
        "cn_def": "發揮潛力/潛能"
      }
    ]
  },
  "potentially": {
    "pos": "adv.",
    "en_def": "with a possibility of happening or developing into something in the future",
    "cn_def": "潛在地；可能地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "with a possibility of happening or developing into something in the future",
        "cn_def": "潛在地；可能地"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
