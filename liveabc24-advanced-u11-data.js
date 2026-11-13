// Unit 11 Quiz Data: native – endangered species
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Advanced U11 - native – endangered species",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "native",
    "pos": "adj.",
    "cn_def": "本地的、原產的",
    "en_def": "relating to the place where you were born.",
    "sentence": "The documentary focused on the {{BLANK}} plants and animals of the island, many of which exist nowhere else on earth.",
    "cn": "這部紀錄片聚焦於這座島嶼的本地動植物，其中許多在地球上其他地方都不存在。"
  },
  {
    "word": "native",
    "pos": "n.",
    "cn_def": "本地人、土著",
    "en_def": "a person born in a specific city or region.",
    "sentence": "As a {{BLANK}} of the city, she knew every shortcut and hidden café that tourists would never find on their own.",
    "cn": "作為這座城市的本地人，她了解每條捷徑和遊客自己永遠找不到的隱藏咖啡館。"
  },
  {
    "word": "native to",
    "pos": "phr.",
    "cn_def": "原產於…的",
    "en_def": "describing a plant line organically from an area.",
    "sentence": "The kiwi bird is {{BLANK}} New Zealand and has become one of the most recognised national symbols of the country.",
    "cn": "奇異鳥原產於紐西蘭，已成為該國最具代表性的國家象徵之一。"
  },
  {
    "word": "native of",
    "pos": "phr.",
    "cn_def": "…的本地人",
    "en_def": "an individual tracking their birth root to a town.",
    "sentence": "As a {{BLANK}} Tainan, he took great pride in showing visitors the city's famous temples and traditional street food.",
    "cn": "作為台南的本地人，他非常自豪地帶訪客參觀這座城市著名的廟宇和傳統街頭美食。"
  },
  {
    "word": "native speaker",
    "pos": "phr.",
    "cn_def": "母語使用者",
    "en_def": "a peer who mastered a language inside early childhood.",
    "sentence": "Even though she is not a {{BLANK}}, her English pronunciation is so clear that most people assume she grew up abroad.",
    "cn": "儘管她不是母語使用者，但她的英語發音如此清晰，大多數人都以為她是在國外長大的。"
  },
  {
    "word": "weaken",
    "pos": "v.",
    "cn_def": "使變弱、削弱",
    "en_def": "to make something less strong, firm, or powerful.",
    "sentence": "Months of inactivity during recovery began to {{BLANK}} her muscles, so the doctor recommended gentle physiotherapy.",
    "cn": "康復期間數個月的不活動開始削弱她的肌肉，因此醫生建議進行溫和的物理治療。"
  },
  {
    "word": "strength",
    "pos": "n.",
    "cn_def": "力量、優勢",
    "en_def": "the physical power or durability of an object.",
    "sentence": "It takes both physical {{BLANK}} and mental endurance to complete a marathon, especially in hot and humid weather.",
    "cn": "完成馬拉松需要體力和精神耐力，尤其是在炎熱潮濕的天氣中。"
  },
  {
    "word": "strengthen",
    "pos": "v.",
    "cn_def": "加強、鞏固",
    "en_def": "to build up structures to withstand massive impact.",
    "sentence": "Regular practice in speaking English will gradually {{BLANK}} your confidence and help you communicate more fluently.",
    "cn": "定期練習英語口語將逐漸鞏固你的自信心，幫助你更流利地溝通。"
  },
  {
    "word": "eliminate",
    "pos": "v.",
    "cn_def": "消除、淘汰、移除",
    "en_def": "to completely remove or get rid of a baseline issue.",
    "sentence": "The new filtration system was designed to {{BLANK}} harmful bacteria from the drinking water supply across the entire city.",
    "cn": "新的過濾系統旨在消除整個城市飲用水供應中的有害細菌。"
  },
  {
    "word": "elimination",
    "pos": "n.",
    "cn_def": "消除、淘汰",
    "en_def": "the complete removal or dropping of low entries.",
    "sentence": "The {{BLANK}} of plastic straws from the restaurant menu was welcomed by environmental groups who praised the decision.",
    "cn": "從餐廳菜單中淘汰塑膠吸管受到了環保團體的歡迎，他們對這個決定給予讚揚。"
  },
  {
    "word": "eliminate bad smell",
    "pos": "phr.",
    "cn_def": "消除異味",
    "en_def": "using charcoal packs to filter out generic room odors.",
    "sentence": "She placed a bowl of baking soda in the fridge to help {{BLANK}} that had built up over several weeks.",
    "cn": "她在冰箱裡放了一碗小蘇打，幫助消除數週來積累的異味。"
  },
  {
    "word": "population",
    "pos": "n.",
    "cn_def": "人口（數量）",
    "en_def": "the total number of people living in a country or town.",
    "sentence": "The city's {{BLANK}} has grown rapidly over the past decade as more young people move there in search of better jobs.",
    "cn": "過去十年來，隨著越來越多的年輕人搬到那裡尋求更好的工作，這座城市的人口迅速增長。"
  },
  {
    "word": "populate",
    "pos": "v.",
    "cn_def": "居住於、移民於",
    "en_def": "to move citizens into an area to live there.",
    "sentence": "Early settlers began to {{BLANK}} the coastal region centuries ago, building fishing villages that still exist today.",
    "cn": "早期定居者數百年前開始在沿海地區定居，建立了至今仍然存在的漁村。"
  },
  {
    "word": "dense population",
    "pos": "phr.",
    "cn_def": "人口稠密",
    "en_def": "a tiny city containing massive masses of residents.",
    "sentence": "Areas with a {{BLANK}} tend to have higher demand for public transport, schools, and healthcare facilities.",
    "cn": "人口稠密的地區往往對公共交通、學校和醫療設施有更高的需求。"
  },
  {
    "word": "population explosion",
    "pos": "phr.",
    "cn_def": "人口激增",
    "en_def": "a massive sudden spike in global human birth rates.",
    "sentence": "The {{BLANK}} of the twentieth century put enormous pressure on natural resources, farmland, and urban infrastructure.",
    "cn": "二十世紀的人口激增對自然資源、農地和城市基礎設施造成了巨大壓力。"
  },
  {
    "word": "domestic",
    "pos": "adj.",
    "cn_def": "家庭的、家務的",
    "en_def": "relating to the home, household, or family circle.",
    "sentence": "She shared {{BLANK}} responsibilities equally with her partner, taking turns cooking, cleaning, and looking after the children.",
    "cn": "她與伴侶平等分擔家務責任，輪流做飯、打掃和照顧孩子。"
  },
  {
    "word": "domestic",
    "pos": "adj.",
    "cn_def": "國內的",
    "en_def": "inside one's own country; not foreign international.",
    "sentence": "The airline increased the number of {{BLANK}} flights to meet growing demand from travellers during the summer holiday season.",
    "cn": "這家航空公司增加了國內航班的數量，以滿足暑假旅行旺季不斷增長的旅客需求。"
  },
  {
    "word": "Domestic",
    "pos": "adj.",
    "cn_def": "馴養的、家養的",
    "en_def": "describing an animal kept on a farm or as a pet.",
    "sentence": "{{BLANK}} animals such as dogs and cats have lived alongside humans for thousands of years and depend on people for care.",
    "cn": "狗和貓等馴養動物與人類共同生活了數千年，依賴人類照料。"
  },
  {
    "word": "Domestic flights",
    "pos": "phr.",
    "cn_def": "國內航班",
    "en_def": "airplane routes tracking transits within single borders.",
    "sentence": "{{BLANK}} in Taiwan are very convenient and can get you from Taipei to Kaohsiung in just under an hour.",
    "cn": "台灣的國內航班非常方便，可以在不到一小時內將你從台北帶到高雄。"
  },
  {
    "word": "domestic violence",
    "pos": "phr.",
    "cn_def": "家暴、家庭暴力",
    "en_def": "physical harm committed within a household setup.",
    "sentence": "Hotlines for victims of {{BLANK}} are available around the clock, providing confidential support and safety advice.",
    "cn": "家暴受害者的熱線全天候開放，提供保密的支持和安全建議。"
  },
  {
    "word": "introduce",
    "pos": "v.",
    "cn_def": "介紹",
    "en_def": "to present a person by name to another team.",
    "sentence": "The teacher asked each student to stand up and {{BLANK}} themselves to the class on the first day of the new semester.",
    "cn": "老師要求每位學生在新學期第一天站起來向全班介紹自己。"
  },
  {
    "word": "introduce",
    "pos": "v.",
    "cn_def": "引進、傳入",
    "en_def": "to bring a new plant line or idea into a region first.",
    "sentence": "The government decided to {{BLANK}} a new recycling programme that would reward households for sorting their waste correctly.",
    "cn": "政府決定引進一項新的回收計劃，獎勵正確分類垃圾的家庭。"
  },
  {
    "word": "introduction",
    "pos": "n.",
    "cn_def": "介紹、引進、導論",
    "en_def": "the starting chapter of an educational book item.",
    "sentence": "The {{BLANK}} of the textbook provides a clear overview of the key topics students will study throughout the entire course.",
    "cn": "教科書的導論提供了學生在整個課程中將學習的關鍵主題的清晰概述。"
  },
  {
    "word": "settlers",
    "pos": "n.",
    "cn_def": "移居者、開拓者",
    "en_def": "a person who arrives in a new region to build homes.",
    "sentence": "The early {{BLANK}} faced incredibly harsh conditions, but they built communities that eventually became thriving towns.",
    "cn": "早期移居者面臨極其惡劣的條件，但他們建立了最終成為繁榮城鎮的社區。"
  },
  {
    "word": "settle",
    "pos": "v.",
    "cn_def": "解決、定居",
    "en_def": "to arrange a baseline deal or end an argument.",
    "sentence": "Both sides finally agreed to {{BLANK}} the dispute out of court, saving time and avoiding a lengthy legal battle.",
    "cn": "雙方最終同意庭外解決爭議，節省了時間並避免了漫長的法律訴訟。"
  },
  {
    "word": "settle down",
    "pos": "phr.",
    "cn_def": "定居下來、安頓下來",
    "en_def": "to marry, buy a house, and stop traveling around.",
    "sentence": "After years of travelling and working abroad, he finally decided to {{BLANK}} and start a family in his hometown.",
    "cn": "在多年旅行和在國外工作之後，他終於決定定居下來，在家鄉建立家庭。"
  },
  {
    "word": "desperate",
    "pos": "adj.",
    "cn_def": "絕望的、極其渴望的",
    "en_def": "feeling a severe, hopeless need for an entry asset.",
    "sentence": "The family was {{BLANK}} for financial help after the father lost his job and the bills began piling up rapidly.",
    "cn": "在父親失業、帳單開始迅速積累後，這家人迫切需要財務幫助。"
  },
  {
    "word": "desperate for help",
    "pos": "phr.",
    "cn_def": "急需幫助的",
    "en_def": "crying out with zero safety options remaining.",
    "sentence": "The injured hiker was {{BLANK}} and sent an emergency signal from his watch when his phone battery died.",
    "cn": "受傷的登山者急需幫助，在手機電量耗盡後從手錶發送了緊急信號。"
  },
  {
    "word": "desperately",
    "pos": "adv.",
    "cn_def": "絕望地、極其、拼命地",
    "en_def": "in an extreme, intense, or dangerous manner.",
    "sentence": "She {{BLANK}} wanted to pass the entrance exam, so she studied for twelve hours a day during the final two weeks.",
    "cn": "她極其渴望通過入學考試，因此在最後兩週每天學習十二個小時。"
  },
  {
    "word": "desperation",
    "pos": "n.",
    "cn_def": "絕望、孤注一擲",
    "en_def": "a baseline state of panic driven by zero options.",
    "sentence": "In a moment of {{BLANK}}, he called an old friend he had not spoken to in years and asked for a small loan.",
    "cn": "在絕望之際，他打電話給一位多年未聯繫的老朋友，請求借一小筆錢。"
  },
  {
    "word": "get rid of",
    "pos": "phr.",
    "cn_def": "除掉、擺脫、扔掉",
    "en_def": "to throw away, destroy, or clear out useless items.",
    "sentence": "She decided to {{BLANK}} all the old clothes in her wardrobe and donate them to a local charity shop.",
    "cn": "她決定清除衣櫃裡所有舊衣服，並將它們捐給當地的慈善商店。"
  },
  {
    "word": "altogether",
    "pos": "adv.",
    "cn_def": "完全地、總共、毫無疑問",
    "en_def": "completely, entirely, or considering everything.",
    "sentence": "The meeting was cancelled {{BLANK}} because the main speaker missed her connecting flight and could not arrive in time.",
    "cn": "會議被完全取消，因為主要演講者錯過了轉機航班，無法準時到達。"
  },
  {
    "word": "cattle",
    "pos": "n.",
    "cn_def": "牛群（總稱，複數）",
    "en_def": "cows, bulls, or oxen kept on farm fields for milk.",
    "sentence": "The farmer moved the {{BLANK}} to a new field every few weeks to ensure they always had enough fresh grass to graze on.",
    "cn": "農夫每隔幾週就將牛群移到新的田地，以確保牠們始終有足夠的新鮮草可以吃。"
  },
  {
    "word": "feed the cattle",
    "pos": "phr.",
    "cn_def": "餵牛",
    "en_def": "passing grain blocks to livestock inside farm pens.",
    "sentence": "He woke up before sunrise every morning to {{BLANK}} and check that all the animals were healthy.",
    "cn": "他每天日出前就起床，去餵牛並檢查所有動物是否健康。"
  },
  {
    "word": "bull",
    "pos": "n.",
    "cn_def": "公牛",
    "en_def": "an adult male cattle unit tracking zero milk output.",
    "sentence": "The farmer kept one large {{BLANK}} in a separate pen to prevent it from becoming aggressive towards the other animals.",
    "cn": "農夫將一頭大公牛關在單獨的圍欄裡，以防止它對其他動物產生攻擊性。"
  },
  {
    "word": "cow",
    "pos": "n.",
    "cn_def": "母牛",
    "en_def": "an adult female cattle unit optimized for dairy.",
    "sentence": "Each {{BLANK}} on the farm is milked twice a day, and the fresh milk is collected and sent to the local dairy factory.",
    "cn": "農場上的每頭母牛每天被擠奶兩次，新鮮牛奶被收集並送往當地的乳製品工廠。"
  },
  {
    "word": "ox",
    "pos": "n.",
    "cn_def": "公牛、工作牛",
    "en_def": "a massive castrated male cattle used for heavy pull.",
    "sentence": "Before modern machinery, farmers relied on the {{BLANK}} to pull heavy ploughs through the hard soil of the fields.",
    "cn": "在現代機械出現之前，農夫依靠工作牛拉動沉重的犁穿過田地的堅硬土壤。"
  },
  {
    "word": "seriously",
    "pos": "adv.",
    "cn_def": "嚴肅地、認真地、嚴重地",
    "en_def": "in a careful, severe, or truthful manner.",
    "sentence": "He was {{BLANK}} injured in the accident and had to spend three weeks in hospital before he was well enough to go home.",
    "cn": "他在事故中嚴重受傷，必須在醫院待三週才足夠康復可以回家。"
  },
  {
    "word": "serious",
    "pos": "adj.",
    "cn_def": "認真的、嚴重的",
    "en_def": "tracking zero jokes; critical or dangerous state.",
    "sentence": "The doctor warned that the infection was {{BLANK}} and that the patient needed to start treatment immediately without delay.",
    "cn": "醫生警告說感染情況嚴重，患者需要立即開始治療，不得拖延。"
  },
  {
    "word": "take seriously",
    "pos": "phr.",
    "cn_def": "認真對待某事",
    "en_def": "to treat a class project with extreme professional focus.",
    "sentence": "Students who {{BLANK}} their study habits in the first year usually perform much better in final examinations.",
    "cn": "在第一年認真對待學習習慣的學生通常在期末考試中表現好得多。"
  },
  {
    "word": "positive",
    "pos": "adj.",
    "cn_def": "積極的、正面的、陽性的",
    "en_def": "hopeful, constructive, or tracking high true values.",
    "sentence": "The doctor gave them {{BLANK}} news after the test results came back, saying there were no signs of the disease spreading.",
    "cn": "在測試結果出來後，醫生給了他們積極的消息，說沒有疾病擴散的跡象。"
  },
  {
    "word": "positive influence",
    "pos": "phr.",
    "cn_def": "正面影響",
    "en_def": "a model companion who drives you to study hard.",
    "sentence": "Her older sister has been a huge {{BLANK}} in her life, encouraging her to work hard and never give up.",
    "cn": "她的姐姐對她的生活產生了巨大的正面影響，鼓勵她努力工作，永不放棄。"
  },
  {
    "word": "negative",
    "pos": "adj.",
    "cn_def": "消極的、負面的、陰性的",
    "en_def": "tracking zero hope; destructive or critical lines.",
    "sentence": "He tried hard not to let the {{BLANK}} comments on social media affect his confidence or his enjoyment of his work.",
    "cn": "他努力不讓社群媒體上的負面評論影響他的自信心或他對工作的熱情。"
  },
  {
    "word": "increase",
    "pos": "v.",
    "cn_def": "增加、增長",
    "en_def": "to make or become larger in size, value, or count.",
    "sentence": "The school decided to {{BLANK}} the number of English lessons per week after exam results showed students needed more practice.",
    "cn": "在考試成績顯示學生需要更多練習後，學校決定增加每週英語課的數量。"
  },
  {
    "word": "increase",
    "pos": "n.",
    "cn_def": "增加、增長",
    "en_def": "a rise or growth in value, scale, or metrics counts.",
    "sentence": "There has been a significant {{BLANK}} in the number of people choosing to cycle to work since the new bike lanes opened.",
    "cn": "自從新的自行車道開通以來，選擇騎自行車上班的人數大幅增加。"
  },
  {
    "word": "increase taxes",
    "pos": "phr.",
    "cn_def": "提高稅收",
    "en_def": "a legislative move raising corporate fee rules.",
    "sentence": "The government announced plans to {{BLANK}} on luxury goods in order to fund new public hospitals and schools.",
    "cn": "政府宣布計劃提高對奢侈品的稅收，以資助新的公立醫院和學校。"
  },
  {
    "word": "decrease",
    "pos": "v.",
    "cn_def": "減少、降低",
    "en_def": "to shrink down or fall in baseline totals.",
    "sentence": "The number of students absent from school began to {{BLANK}} after the new health and hygiene campaign was launched.",
    "cn": "在新的健康衛生運動推出後，缺課的學生人數開始減少。"
  },
  {
    "word": "increasingly",
    "pos": "adv.",
    "cn_def": "漸增地、越來越…",
    "en_def": "more and more over a continuous duration timeline.",
    "sentence": "It is becoming {{BLANK}} difficult to find affordable housing in the city as more people move there for work each year.",
    "cn": "隨著每年越來越多的人搬到城市工作，在城市找到負擔得起的住房變得越來越困難。"
  },
  {
    "word": "add",
    "pos": "v.",
    "cn_def": "增加、加、補充說",
    "en_def": "to put elements together to calculate a grand total.",
    "sentence": "She decided to {{BLANK}} a pinch of chili to the soup to give it a little extra heat without making it too spicy.",
    "cn": "她決定在湯裡加一點辣椒，給它增添一點熱度，但不要讓它太辣。"
  },
  {
    "word": "plus",
    "pos": "n.",
    "cn_def": "加、加上、好處",
    "en_def": "added to; an extra advantage token in a review.",
    "sentence": "The apartment comes fully furnished, {{BLANK}} it is located just five minutes from the nearest train station.",
    "cn": "這間公寓提供全套家具，加上它距離最近的火車站只有五分鐘路程。"
  },
  {
    "word": "project",
    "pos": "n.",
    "cn_def": "計畫、專案、項目",
    "en_def": "a carefully planned piece of work or research task.",
    "sentence": "The students worked in groups of four to complete a science {{BLANK}} that involved designing a small working model bridge.",
    "cn": "學生們以四人為一組完成一個科學專案，涉及設計一個小型工作模型橋樑。"
  },
  {
    "word": "projected",
    "pos": "v.",
    "cn_def": "預測、推測",
    "en_def": "to estimate or calculate a future trend metric line.",
    "sentence": "Analysts {{BLANK}} that the company's profits would double within three years if the new product line performed well.",
    "cn": "分析師預測，如果新產品線表現良好，公司的利潤將在三年內翻倍。"
  },
  {
    "word": "projector",
    "pos": "n.",
    "cn_def": "投影機",
    "en_def": "an optical machine displaying slides onto walls.",
    "sentence": "The teacher connected her laptop to the {{BLANK}} and displayed the vocabulary list so everyone in the class could see.",
    "cn": "老師將筆記型電腦連接到投影機，顯示詞彙表，讓班上每個人都能看到。"
  },
  {
    "word": "current",
    "pos": "adj.",
    "cn_def": "現在的、當前的",
    "en_def": "happening or existing right now in the present era.",
    "sentence": "The {{BLANK}} situation in the housing market makes it very difficult for young people to buy their first home.",
    "cn": "當前的房市狀況使年輕人很難購買他們的第一套住房。"
  },
  {
    "word": "current",
    "pos": "n.",
    "cn_def": "水流、氣流、電流",
    "en_def": "a continuous moving stream of ocean water or air.",
    "sentence": "The swimmer was caught in a strong underwater {{BLANK}} that pulled her away from the shore faster than she could swim back.",
    "cn": "游泳者被一股強大的水下水流捲走，速度比她游回岸邊的速度還要快。"
  },
  {
    "word": "current job",
    "pos": "phr.",
    "cn_def": "目前的工作",
    "en_def": "the explicit firm you currently draw wages from.",
    "sentence": "Although she enjoys her {{BLANK}}, she is considering applying for a position at a larger company with better pay.",
    "cn": "儘管她喜歡目前的工作，但她正在考慮申請一家薪資更好的大公司的職位。"
  },
  {
    "word": "currently",
    "pos": "adv.",
    "cn_def": "目前、當前",
    "en_def": "at the present time; right now cleanly.",
    "sentence": "The library is {{BLANK}} closed for renovation but will reopen to the public at the start of next month.",
    "cn": "圖書館目前因裝修而關閉，但將於下個月初重新對公眾開放。"
  },
  {
    "word": "retirement",
    "pos": "n.",
    "cn_def": "退休（生活）",
    "en_def": "the period after you stop working completely due to age.",
    "sentence": "She planned to spend her {{BLANK}} travelling the world and learning new skills she never had time for while working.",
    "cn": "她計劃在退休後環遊世界，學習工作時從來沒有時間學習的新技能。"
  },
  {
    "word": "retire",
    "pos": "v.",
    "cn_def": "退休",
    "en_def": "to officially drop your corporate role at age 65.",
    "sentence": "After forty years of teaching, the beloved professor finally decided to {{BLANK}} and was given a grand farewell party.",
    "cn": "在執教四十年後，這位備受愛戴的教授終於決定退休，並獲得了盛大的告別派對。"
  },
  {
    "word": "retired",
    "pos": "adj.",
    "cn_def": "退休的",
    "en_def": "describing an old expert who no longer works jobs.",
    "sentence": "The {{BLANK}} engineer still volunteers his expertise to help young students with their science and robotics projects.",
    "cn": "這位退休工程師仍然自願貢獻他的專業知識，幫助年輕學生完成科學和機器人項目。"
  },
  {
    "word": "acquire",
    "pos": "v.",
    "cn_def": "獲得、取得、學得",
    "en_def": "to obtain, buy, or master a new skill asset over time.",
    "sentence": "Living abroad for two years helped her {{BLANK}} a much deeper understanding of the local culture and way of life.",
    "cn": "在國外生活兩年幫助她對當地文化和生活方式有了更深入的了解。"
  },
  {
    "word": "acquire an accent",
    "pos": "phr.",
    "cn_def": "染上…口音",
    "en_def": "naturally picking up a local tone after living there.",
    "sentence": "After spending three years in Ireland, he began to {{BLANK}} without even realising it was happening.",
    "cn": "在愛爾蘭待了三年後，他開始不知不覺地染上了當地口音。"
  },
  {
    "word": "acquirement",
    "pos": "n.",
    "cn_def": "取得、學得、才藝",
    "en_def": "a personal skill or asset gained through steady work.",
    "sentence": "The {{BLANK}} of a second language is one of the most valuable investments you can make in your personal development.",
    "cn": "學得第二語言是你在個人發展中所能做的最有價值的投資之一。"
  },
  {
    "word": "endangered",
    "pos": "adj.",
    "cn_def": "瀕臨絕滅的",
    "en_def": "tracking a high risk of dying out completely soon.",
    "sentence": "The wildlife reserve was set up to protect several {{BLANK}} bird species that nest exclusively in this coastal wetland.",
    "cn": "這個野生動物保護區的設立是為了保護幾種專門在這片沿海濕地築巢的瀕危鳥類。"
  },
  {
    "word": "endangered species",
    "pos": "phr.",
    "cn_def": "瀕危物種",
    "en_def": "animal groups flagged with critical survival rates.",
    "sentence": "The new law bans the trade of products made from {{BLANK}}, including ivory, certain furs, and rare bird feathers.",
    "cn": "新法律禁止交易由瀕危物種製成的產品，包括象牙、某些毛皮和稀有鳥類羽毛。"
  }
];

const MCQS = [
  {
    "q": "The documentary focused on the ______ plants and animals of the island, many of which exist nowhere else on earth.",
    "options": [
      "native",
      "endangered",
      "retired",
      "positive"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "As a ______ of the city, she knew every shortcut and hidden café that tourists would never find on their own.",
    "options": [
      "elimination",
      "increase",
      "population",
      "native"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The kiwi bird is ______ New Zealand and has become one of the most recognised national symbols of the country.",
    "options": [
      "population explosion",
      "native to",
      "domestic violence",
      "endangered species"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "As a ______ Tainan, he took great pride in showing visitors the city's famous temples and traditional street food.",
    "options": [
      "take seriously",
      "eliminate bad smell",
      "native of",
      "current job"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Even though she is not a ______, her English pronunciation is so clear that most people assume she grew up abroad.",
    "options": [
      "settle down",
      "get rid of",
      "increase taxes",
      "native speaker"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Months of inactivity during recovery began to ______ her muscles, so the doctor recommended gentle physiotherapy.",
    "options": [
      "projected",
      "increase",
      "weaken",
      "eliminate"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "It takes both physical ______ and mental endurance to complete a marathon, especially in hot and humid weather.",
    "options": [
      "strength",
      "retirement",
      "desperation",
      "acquirement"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Regular practice in speaking English will gradually ______ your confidence and help you communicate more fluently.",
    "options": [
      "settle",
      "strengthen",
      "weaken",
      "introduce"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The new filtration system was designed to ______ harmful bacteria from the drinking water supply across the entire city.",
    "options": [
      "strengthen",
      "introduce",
      "eliminate",
      "projected"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The ______ of plastic straws from the restaurant menu was welcomed by environmental groups who praised the decision.",
    "options": [
      "elimination",
      "acquirement",
      "population",
      "cattle"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "She placed a bowl of baking soda in the fridge to help ______ that had built up over several weeks.",
    "options": [
      "endangered species",
      "domestic violence",
      "native to",
      "eliminate bad smell"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The city's ______ has grown rapidly over the past decade as more young people move there in search of better jobs.",
    "options": [
      "ox",
      "population",
      "project",
      "cow"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Early settlers began to ______ the coastal region centuries ago, building fishing villages that still exist today.",
    "options": [
      "populate",
      "projected",
      "eliminate",
      "acquire"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Areas with a ______ tend to have higher demand for public transport, schools, and healthcare facilities.",
    "options": [
      "Domestic flights",
      "dense population",
      "positive influence",
      "take seriously"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The ______ of the twentieth century put enormous pressure on natural resources, farmland, and urban infrastructure.",
    "options": [
      "current job",
      "settle down",
      "domestic violence",
      "population explosion"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "She shared ______ responsibilities equally with her partner, taking turns cooking, cleaning, and looking after the children.",
    "options": [
      "endangered",
      "retired",
      "domestic",
      "negative"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The airline increased the number of ______ flights to meet growing demand from travellers during the summer holiday season.",
    "options": [
      "domestic",
      "desperate",
      "retired",
      "negative"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "______ animals such as dogs and cats have lived alongside humans for thousands of years and depend on people for care.",
    "options": [
      "retired",
      "current",
      "positive",
      "Domestic"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "______ in Taiwan are very convenient and can get you from Taipei to Kaohsiung in just under an hour.",
    "options": [
      "native of",
      "increase taxes",
      "Domestic flights",
      "get rid of"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Hotlines for victims of ______ are available around the clock, providing confidential support and safety advice.",
    "options": [
      "current job",
      "domestic violence",
      "population explosion",
      "endangered species"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The teacher asked each student to stand up and ______ themselves to the class on the first day of the new semester.",
    "options": [
      "acquire",
      "retire",
      "introduce",
      "decrease"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The government decided to ______ a new recycling programme that would reward households for sorting their waste correctly.",
    "options": [
      "weaken",
      "introduce",
      "retire",
      "add"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The ______ of the textbook provides a clear overview of the key topics students will study throughout the entire course.",
    "options": [
      "introduction",
      "cow",
      "desperation",
      "acquirement"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The early ______ faced incredibly harsh conditions, but they built communities that eventually became thriving towns.",
    "options": [
      "ox",
      "elimination",
      "introduction",
      "settlers"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Both sides finally agreed to ______ the dispute out of court, saving time and avoiding a lengthy legal battle.",
    "options": [
      "settle",
      "retire",
      "introduce",
      "weaken"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "After years of travelling and working abroad, he finally decided to ______ and start a family in his hometown.",
    "options": [
      "feed the cattle",
      "desperate for help",
      "settle down",
      "eliminate bad smell"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The family was ______ for financial help after the father lost his job and the bills began piling up rapidly.",
    "options": [
      "negative",
      "native",
      "Domestic",
      "desperate"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The injured hiker was ______ and sent an emergency signal from his watch when his phone battery died.",
    "options": [
      "domestic violence",
      "desperate for help",
      "eliminate bad smell",
      "current job"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "She ______ wanted to pass the entrance exam, so she studied for twelve hours a day during the final two weeks.",
    "options": [
      "altogether",
      "increasingly",
      "currently",
      "desperately"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "In a moment of ______, he called an old friend he had not spoken to in years and asked for a small loan.",
    "options": [
      "desperation",
      "project",
      "population",
      "introduction"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "She decided to ______ all the old clothes in her wardrobe and donate them to a local charity shop.",
    "options": [
      "acquire an accent",
      "get rid of",
      "domestic violence",
      "take seriously"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The meeting was cancelled ______ because the main speaker missed her connecting flight and could not arrive in time.",
    "options": [
      "desperately",
      "seriously",
      "altogether",
      "increasingly"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The farmer moved the ______ to a new field every few weeks to ensure they always had enough fresh grass to graze on.",
    "options": [
      "bull",
      "acquirement",
      "settlers",
      "cattle"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "He woke up before sunrise every morning to ______ and check that all the animals were healthy.",
    "options": [
      "feed the cattle",
      "population explosion",
      "get rid of",
      "eliminate bad smell"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "The farmer kept one large ______ in a separate pen to prevent it from becoming aggressive towards the other animals.",
    "options": [
      "desperation",
      "bull",
      "native",
      "retirement"
    ],
    "answer": 1,
    "vocabIndex": 34
  },
  {
    "q": "Each ______ on the farm is milked twice a day, and the fresh milk is collected and sent to the local dairy factory.",
    "options": [
      "introduction",
      "population",
      "cow",
      "desperation"
    ],
    "answer": 2,
    "vocabIndex": 35
  },
  {
    "q": "Before modern machinery, farmers relied on the ______ to pull heavy ploughs through the hard soil of the fields.",
    "options": [
      "ox",
      "retirement",
      "desperation",
      "project"
    ],
    "answer": 0,
    "vocabIndex": 36
  },
  {
    "q": "He was ______ injured in the accident and had to spend three weeks in hospital before he was well enough to go home.",
    "options": [
      "desperately",
      "seriously",
      "currently",
      "increasingly"
    ],
    "answer": 1,
    "vocabIndex": 37
  },
  {
    "q": "The doctor warned that the infection was ______ and that the patient needed to start treatment immediately without delay.",
    "options": [
      "domestic",
      "current",
      "serious",
      "positive"
    ],
    "answer": 2,
    "vocabIndex": 38
  },
  {
    "q": "Students who ______ their study habits in the first year usually perform much better in final examinations.",
    "options": [
      "Domestic flights",
      "domestic violence",
      "settle down",
      "take seriously"
    ],
    "answer": 3,
    "vocabIndex": 39
  },
  {
    "q": "The doctor gave them ______ news after the test results came back, saying there were no signs of the disease spreading.",
    "options": [
      "retired",
      "domestic",
      "positive",
      "native"
    ],
    "answer": 2,
    "vocabIndex": 40
  },
  {
    "q": "Her older sister has been a huge ______ in her life, encouraging her to work hard and never give up.",
    "options": [
      "current job",
      "positive influence",
      "domestic violence",
      "desperate for help"
    ],
    "answer": 1,
    "vocabIndex": 41
  },
  {
    "q": "He tried hard not to let the ______ comments on social media affect his confidence or his enjoyment of his work.",
    "options": [
      "domestic",
      "positive",
      "endangered",
      "negative"
    ],
    "answer": 3,
    "vocabIndex": 42
  },
  {
    "q": "The school decided to ______ the number of English lessons per week after exam results showed students needed more practice.",
    "options": [
      "increase",
      "eliminate",
      "acquire",
      "strengthen"
    ],
    "answer": 0,
    "vocabIndex": 43
  },
  {
    "q": "There has been a significant ______ in the number of people choosing to cycle to work since the new bike lanes opened.",
    "options": [
      "project",
      "native",
      "increase",
      "elimination"
    ],
    "answer": 2,
    "vocabIndex": 44
  },
  {
    "q": "The government announced plans to ______ on luxury goods in order to fund new public hospitals and schools.",
    "options": [
      "increase taxes",
      "take seriously",
      "feed the cattle",
      "Domestic flights"
    ],
    "answer": 0,
    "vocabIndex": 45
  },
  {
    "q": "The number of students absent from school began to ______ after the new health and hygiene campaign was launched.",
    "options": [
      "populate",
      "retire",
      "acquire",
      "decrease"
    ],
    "answer": 3,
    "vocabIndex": 46
  },
  {
    "q": "It is becoming ______ difficult to find affordable housing in the city as more people move there for work each year.",
    "options": [
      "altogether",
      "increasingly",
      "seriously",
      "desperately"
    ],
    "answer": 1,
    "vocabIndex": 47
  },
  {
    "q": "She decided to ______ a pinch of chili to the soup to give it a little extra heat without making it too spicy.",
    "options": [
      "add",
      "settle",
      "weaken",
      "strengthen"
    ],
    "answer": 0,
    "vocabIndex": 48
  },
  {
    "q": "The apartment comes fully furnished, ______ it is located just five minutes from the nearest train station.",
    "options": [
      "project",
      "native",
      "plus",
      "acquirement"
    ],
    "answer": 2,
    "vocabIndex": 49
  },
  {
    "q": "The students worked in groups of four to complete a science ______ that involved designing a small working model bridge.",
    "options": [
      "settlers",
      "projector",
      "cow",
      "project"
    ],
    "answer": 3,
    "vocabIndex": 50
  },
  {
    "q": "Analysts ______ that the company's profits would double within three years if the new product line performed well.",
    "options": [
      "eliminate",
      "projected",
      "add",
      "settle"
    ],
    "answer": 1,
    "vocabIndex": 51
  },
  {
    "q": "The teacher connected her laptop to the ______ and displayed the vocabulary list so everyone in the class could see.",
    "options": [
      "acquirement",
      "population",
      "bull",
      "projector"
    ],
    "answer": 3,
    "vocabIndex": 52
  },
  {
    "q": "The ______ situation in the housing market makes it very difficult for young people to buy their first home.",
    "options": [
      "serious",
      "current",
      "negative",
      "desperate"
    ],
    "answer": 1,
    "vocabIndex": 53
  },
  {
    "q": "The swimmer was caught in a strong underwater ______ that pulled her away from the shore faster than she could swim back.",
    "options": [
      "retirement",
      "cow",
      "current",
      "cattle"
    ],
    "answer": 2,
    "vocabIndex": 54
  },
  {
    "q": "Although she enjoys her ______, she is considering applying for a position at a larger company with better pay.",
    "options": [
      "current job",
      "native speaker",
      "take seriously",
      "positive influence"
    ],
    "answer": 0,
    "vocabIndex": 55
  },
  {
    "q": "The library is ______ closed for renovation but will reopen to the public at the start of next month.",
    "options": [
      "seriously",
      "currently",
      "altogether",
      "desperately"
    ],
    "answer": 1,
    "vocabIndex": 56
  },
  {
    "q": "She planned to spend her ______ travelling the world and learning new skills she never had time for while working.",
    "options": [
      "cow",
      "population",
      "project",
      "retirement"
    ],
    "answer": 3,
    "vocabIndex": 57
  },
  {
    "q": "After forty years of teaching, the beloved professor finally decided to ______ and was given a grand farewell party.",
    "options": [
      "retire",
      "introduce",
      "projected",
      "strengthen"
    ],
    "answer": 0,
    "vocabIndex": 58
  },
  {
    "q": "The ______ engineer still volunteers his expertise to help young students with their science and robotics projects.",
    "options": [
      "native",
      "positive",
      "retired",
      "serious"
    ],
    "answer": 2,
    "vocabIndex": 59
  },
  {
    "q": "Living abroad for two years helped her ______ a much deeper understanding of the local culture and way of life.",
    "options": [
      "increase",
      "eliminate",
      "weaken",
      "acquire"
    ],
    "answer": 3,
    "vocabIndex": 60
  },
  {
    "q": "After spending three years in Ireland, he began to ______ without even realising it was happening.",
    "options": [
      "eliminate bad smell",
      "Domestic flights",
      "acquire an accent",
      "current job"
    ],
    "answer": 2,
    "vocabIndex": 61
  },
  {
    "q": "The ______ of a second language is one of the most valuable investments you can make in your personal development.",
    "options": [
      "acquirement",
      "strength",
      "retirement",
      "projector"
    ],
    "answer": 0,
    "vocabIndex": 62
  },
  {
    "q": "The wildlife reserve was set up to protect several ______ bird species that nest exclusively in this coastal wetland.",
    "options": [
      "current",
      "endangered",
      "serious",
      "desperate"
    ],
    "answer": 1,
    "vocabIndex": 63
  },
  {
    "q": "The new law bans the trade of products made from ______, including ivory, certain furs, and rare bird feathers.",
    "options": [
      "endangered species",
      "native of",
      "get rid of",
      "current job"
    ],
    "answer": 0,
    "vocabIndex": 64
  }
];

const LOOKUP = {
  "native": {
    "pos": "adj.",
    "en_def": "relating to the place where you were born.",
    "cn_def": "本地的、原產的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to the place where you were born.",
        "cn_def": "本地的、原產的"
      },
      {
        "pos": "n.",
        "en_def": "a person born in a specific city or region.",
        "cn_def": "本地人、土著"
      }
    ]
  },
  "native to": {
    "pos": "phr.",
    "en_def": "describing a plant line organically from an area.",
    "cn_def": "原產於…的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "describing a plant line organically from an area.",
        "cn_def": "原產於…的"
      }
    ]
  },
  "native of": {
    "pos": "phr.",
    "en_def": "an individual tracking their birth root to a town.",
    "cn_def": "…的本地人",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an individual tracking their birth root to a town.",
        "cn_def": "…的本地人"
      }
    ]
  },
  "native speaker": {
    "pos": "phr.",
    "en_def": "a peer who mastered a language inside early childhood.",
    "cn_def": "母語使用者",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a peer who mastered a language inside early childhood.",
        "cn_def": "母語使用者"
      }
    ]
  },
  "weaken": {
    "pos": "v.",
    "en_def": "to make something less strong, firm, or powerful.",
    "cn_def": "使變弱、削弱",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make something less strong, firm, or powerful.",
        "cn_def": "使變弱、削弱"
      }
    ]
  },
  "strength": {
    "pos": "n.",
    "en_def": "the physical power or durability of an object.",
    "cn_def": "力量、優勢",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the physical power or durability of an object.",
        "cn_def": "力量、優勢"
      }
    ]
  },
  "strengthen": {
    "pos": "v.",
    "en_def": "to build up structures to withstand massive impact.",
    "cn_def": "加強、鞏固",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to build up structures to withstand massive impact.",
        "cn_def": "加強、鞏固"
      }
    ]
  },
  "eliminate": {
    "pos": "v.",
    "en_def": "to completely remove or get rid of a baseline issue.",
    "cn_def": "消除、淘汰、移除",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to completely remove or get rid of a baseline issue.",
        "cn_def": "消除、淘汰、移除"
      }
    ]
  },
  "elimination": {
    "pos": "n.",
    "en_def": "the complete removal or dropping of low entries.",
    "cn_def": "消除、淘汰",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the complete removal or dropping of low entries.",
        "cn_def": "消除、淘汰"
      }
    ]
  },
  "eliminate bad smell": {
    "pos": "phr.",
    "en_def": "using charcoal packs to filter out generic room odors.",
    "cn_def": "消除異味",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "using charcoal packs to filter out generic room odors.",
        "cn_def": "消除異味"
      }
    ]
  },
  "population": {
    "pos": "n.",
    "en_def": "the total number of people living in a country or town.",
    "cn_def": "人口（數量）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the total number of people living in a country or town.",
        "cn_def": "人口（數量）"
      }
    ]
  },
  "populate": {
    "pos": "v.",
    "en_def": "to move citizens into an area to live there.",
    "cn_def": "居住於、移民於",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to move citizens into an area to live there.",
        "cn_def": "居住於、移民於"
      }
    ]
  },
  "dense population": {
    "pos": "phr.",
    "en_def": "a tiny city containing massive masses of residents.",
    "cn_def": "人口稠密",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a tiny city containing massive masses of residents.",
        "cn_def": "人口稠密"
      }
    ]
  },
  "population explosion": {
    "pos": "phr.",
    "en_def": "a massive sudden spike in global human birth rates.",
    "cn_def": "人口激增",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a massive sudden spike in global human birth rates.",
        "cn_def": "人口激增"
      }
    ]
  },
  "domestic": {
    "pos": "adj.",
    "en_def": "relating to the home, household, or family circle.",
    "cn_def": "家庭的、家務的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to the home, household, or family circle.",
        "cn_def": "家庭的、家務的"
      },
      {
        "pos": "adj.",
        "en_def": "inside one's own country; not foreign international.",
        "cn_def": "國內的"
      },
      {
        "pos": "adj.",
        "en_def": "describing an animal kept on a farm or as a pet.",
        "cn_def": "馴養的、家養的"
      }
    ]
  },
  "domestic flights": {
    "pos": "phr.",
    "en_def": "airplane routes tracking transits within single borders.",
    "cn_def": "國內航班",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "airplane routes tracking transits within single borders.",
        "cn_def": "國內航班"
      }
    ]
  },
  "domestic violence": {
    "pos": "phr.",
    "en_def": "physical harm committed within a household setup.",
    "cn_def": "家暴、家庭暴力",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "physical harm committed within a household setup.",
        "cn_def": "家暴、家庭暴力"
      }
    ]
  },
  "introduce": {
    "pos": "v.",
    "en_def": "to present a person by name to another team.",
    "cn_def": "介紹",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to present a person by name to another team.",
        "cn_def": "介紹"
      },
      {
        "pos": "v.",
        "en_def": "to bring a new plant line or idea into a region first.",
        "cn_def": "引進、傳入"
      }
    ]
  },
  "introduction": {
    "pos": "n.",
    "en_def": "the starting chapter of an educational book item.",
    "cn_def": "介紹、引進、導論",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the starting chapter of an educational book item.",
        "cn_def": "介紹、引進、導論"
      }
    ]
  },
  "settler": {
    "pos": "n.",
    "en_def": "a person who arrives in a new region to build homes.",
    "cn_def": "移居者、開拓者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who arrives in a new region to build homes.",
        "cn_def": "移居者、開拓者"
      }
    ]
  },
  "settlers": {
    "pos": "n.",
    "en_def": "a person who arrives in a new region to build homes.",
    "cn_def": "移居者、開拓者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who arrives in a new region to build homes.",
        "cn_def": "移居者、開拓者"
      }
    ]
  },
  "settle": {
    "pos": "v.",
    "en_def": "to arrange a baseline deal or end an argument.",
    "cn_def": "解決、定居",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to arrange a baseline deal or end an argument.",
        "cn_def": "解決、定居"
      }
    ]
  },
  "settle down": {
    "pos": "phr.",
    "en_def": "to marry, buy a house, and stop traveling around.",
    "cn_def": "定居下來、安頓下來",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to marry, buy a house, and stop traveling around.",
        "cn_def": "定居下來、安頓下來"
      }
    ]
  },
  "desperate": {
    "pos": "adj.",
    "en_def": "feeling a severe, hopeless need for an entry asset.",
    "cn_def": "絕望的、極其渴望的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling a severe, hopeless need for an entry asset.",
        "cn_def": "絕望的、極其渴望的"
      }
    ]
  },
  "desperate for help": {
    "pos": "phr.",
    "en_def": "crying out with zero safety options remaining.",
    "cn_def": "急需幫助的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "crying out with zero safety options remaining.",
        "cn_def": "急需幫助的"
      }
    ]
  },
  "desperately": {
    "pos": "adv.",
    "en_def": "in an extreme, intense, or dangerous manner.",
    "cn_def": "絕望地、極其、拼命地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in an extreme, intense, or dangerous manner.",
        "cn_def": "絕望地、極其、拼命地"
      }
    ]
  },
  "desperation": {
    "pos": "n.",
    "en_def": "a baseline state of panic driven by zero options.",
    "cn_def": "絕望、孤注一擲",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a baseline state of panic driven by zero options.",
        "cn_def": "絕望、孤注一擲"
      }
    ]
  },
  "get rid of": {
    "pos": "phr.",
    "en_def": "to throw away, destroy, or clear out useless items.",
    "cn_def": "除掉、擺脫、扔掉",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to throw away, destroy, or clear out useless items.",
        "cn_def": "除掉、擺脫、扔掉"
      }
    ]
  },
  "altogether": {
    "pos": "adv.",
    "en_def": "completely, entirely, or considering everything.",
    "cn_def": "完全地、總共、毫無疑問",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "completely, entirely, or considering everything.",
        "cn_def": "完全地、總共、毫無疑問"
      }
    ]
  },
  "cattle": {
    "pos": "n.",
    "en_def": "cows, bulls, or oxen kept on farm fields for milk.",
    "cn_def": "牛群（總稱，複數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "cows, bulls, or oxen kept on farm fields for milk.",
        "cn_def": "牛群（總稱，複數）"
      }
    ]
  },
  "feed the cattle": {
    "pos": "phr.",
    "en_def": "passing grain blocks to livestock inside farm pens.",
    "cn_def": "餵牛",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "passing grain blocks to livestock inside farm pens.",
        "cn_def": "餵牛"
      }
    ]
  },
  "bull": {
    "pos": "n.",
    "en_def": "an adult male cattle unit tracking zero milk output.",
    "cn_def": "公牛",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an adult male cattle unit tracking zero milk output.",
        "cn_def": "公牛"
      }
    ]
  },
  "cow": {
    "pos": "n.",
    "en_def": "an adult female cattle unit optimized for dairy.",
    "cn_def": "母牛",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an adult female cattle unit optimized for dairy.",
        "cn_def": "母牛"
      }
    ]
  },
  "ox": {
    "pos": "n.",
    "en_def": "a massive castrated male cattle used for heavy pull.",
    "cn_def": "公牛、工作牛",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a massive castrated male cattle used for heavy pull.",
        "cn_def": "公牛、工作牛"
      }
    ]
  },
  "seriously": {
    "pos": "adv.",
    "en_def": "in a careful, severe, or truthful manner.",
    "cn_def": "嚴肅地、認真地、嚴重地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a careful, severe, or truthful manner.",
        "cn_def": "嚴肅地、認真地、嚴重地"
      }
    ]
  },
  "serious": {
    "pos": "adj.",
    "en_def": "tracking zero jokes; critical or dangerous state.",
    "cn_def": "認真的、嚴重的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "tracking zero jokes; critical or dangerous state.",
        "cn_def": "認真的、嚴重的"
      }
    ]
  },
  "take seriously": {
    "pos": "phr.",
    "en_def": "to treat a class project with extreme professional focus.",
    "cn_def": "認真對待某事",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to treat a class project with extreme professional focus.",
        "cn_def": "認真對待某事"
      }
    ]
  },
  "take something seriously": {
    "pos": "phr.",
    "en_def": "to treat a class project with extreme professional focus.",
    "cn_def": "認真對待某事",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to treat a class project with extreme professional focus.",
        "cn_def": "認真對待某事"
      }
    ]
  },
  "positive": {
    "pos": "adj.",
    "en_def": "hopeful, constructive, or tracking high true values.",
    "cn_def": "積極的、正面的、陽性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "hopeful, constructive, or tracking high true values.",
        "cn_def": "積極的、正面的、陽性的"
      }
    ]
  },
  "positive influence": {
    "pos": "phr.",
    "en_def": "a model companion who drives you to study hard.",
    "cn_def": "正面影響",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a model companion who drives you to study hard.",
        "cn_def": "正面影響"
      }
    ]
  },
  "negative": {
    "pos": "adj.",
    "en_def": "tracking zero hope; destructive or critical lines.",
    "cn_def": "消極的、負面的、陰性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "tracking zero hope; destructive or critical lines.",
        "cn_def": "消極的、負面的、陰性的"
      }
    ]
  },
  "increase": {
    "pos": "v.",
    "en_def": "to make or become larger in size, value, or count.",
    "cn_def": "增加、增長",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make or become larger in size, value, or count.",
        "cn_def": "增加、增長"
      },
      {
        "pos": "n.",
        "en_def": "a rise or growth in value, scale, or metrics counts.",
        "cn_def": "增加、增長"
      }
    ]
  },
  "increase taxes": {
    "pos": "phr.",
    "en_def": "a legislative move raising corporate fee rules.",
    "cn_def": "提高稅收",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a legislative move raising corporate fee rules.",
        "cn_def": "提高稅收"
      }
    ]
  },
  "decrease": {
    "pos": "v.",
    "en_def": "to shrink down or fall in baseline totals.",
    "cn_def": "減少、降低",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to shrink down or fall in baseline totals.",
        "cn_def": "減少、降低"
      }
    ]
  },
  "increasingly": {
    "pos": "adv.",
    "en_def": "more and more over a continuous duration timeline.",
    "cn_def": "漸增地、越來越…",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "more and more over a continuous duration timeline.",
        "cn_def": "漸增地、越來越…"
      }
    ]
  },
  "add": {
    "pos": "v.",
    "en_def": "to put elements together to calculate a grand total.",
    "cn_def": "增加、加、補充說",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to put elements together to calculate a grand total.",
        "cn_def": "增加、加、補充說"
      }
    ]
  },
  "plus": {
    "pos": "n.",
    "en_def": "added to; an extra advantage token in a review.",
    "cn_def": "加、加上、好處",
    "combined": [
      {
        "pos": "n.",
        "en_def": "added to; an extra advantage token in a review.",
        "cn_def": "加、加上、好處"
      }
    ]
  },
  "project": {
    "pos": "n.",
    "en_def": "a carefully planned piece of work or research task.",
    "cn_def": "計畫、專案、項目",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a carefully planned piece of work or research task.",
        "cn_def": "計畫、專案、項目"
      },
      {
        "pos": "v.",
        "en_def": "to estimate or calculate a future trend metric line.",
        "cn_def": "預測、推測"
      }
    ]
  },
  "projected": {
    "pos": "v.",
    "en_def": "to estimate or calculate a future trend metric line.",
    "cn_def": "預測、推測",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to estimate or calculate a future trend metric line.",
        "cn_def": "預測、推測"
      }
    ]
  },
  "projector": {
    "pos": "n.",
    "en_def": "an optical machine displaying slides onto walls.",
    "cn_def": "投影機",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an optical machine displaying slides onto walls.",
        "cn_def": "投影機"
      }
    ]
  },
  "current": {
    "pos": "adj.",
    "en_def": "happening or existing right now in the present era.",
    "cn_def": "現在的、當前的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "happening or existing right now in the present era.",
        "cn_def": "現在的、當前的"
      },
      {
        "pos": "n.",
        "en_def": "a continuous moving stream of ocean water or air.",
        "cn_def": "水流、氣流、電流"
      }
    ]
  },
  "current job": {
    "pos": "phr.",
    "en_def": "the explicit firm you currently draw wages from.",
    "cn_def": "目前的工作",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the explicit firm you currently draw wages from.",
        "cn_def": "目前的工作"
      }
    ]
  },
  "currently": {
    "pos": "adv.",
    "en_def": "at the present time; right now cleanly.",
    "cn_def": "目前、當前",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "at the present time; right now cleanly.",
        "cn_def": "目前、當前"
      }
    ]
  },
  "retirement": {
    "pos": "n.",
    "en_def": "the period after you stop working completely due to age.",
    "cn_def": "退休（生活）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the period after you stop working completely due to age.",
        "cn_def": "退休（生活）"
      }
    ]
  },
  "retire": {
    "pos": "v.",
    "en_def": "to officially drop your corporate role at age 65.",
    "cn_def": "退休",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to officially drop your corporate role at age 65.",
        "cn_def": "退休"
      }
    ]
  },
  "retired": {
    "pos": "adj.",
    "en_def": "describing an old expert who no longer works jobs.",
    "cn_def": "退休的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "describing an old expert who no longer works jobs.",
        "cn_def": "退休的"
      }
    ]
  },
  "acquire": {
    "pos": "v.",
    "en_def": "to obtain, buy, or master a new skill asset over time.",
    "cn_def": "獲得、取得、學得",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to obtain, buy, or master a new skill asset over time.",
        "cn_def": "獲得、取得、學得"
      }
    ]
  },
  "acquire an accent": {
    "pos": "phr.",
    "en_def": "naturally picking up a local tone after living there.",
    "cn_def": "染上…口音",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "naturally picking up a local tone after living there.",
        "cn_def": "染上…口音"
      }
    ]
  },
  "acquirement": {
    "pos": "n.",
    "en_def": "a personal skill or asset gained through steady work.",
    "cn_def": "取得、學得、才藝",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a personal skill or asset gained through steady work.",
        "cn_def": "取得、學得、才藝"
      }
    ]
  },
  "endangered": {
    "pos": "adj.",
    "en_def": "tracking a high risk of dying out completely soon.",
    "cn_def": "瀕臨絕滅的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "tracking a high risk of dying out completely soon.",
        "cn_def": "瀕臨絕滅的"
      }
    ]
  },
  "endangered species": {
    "pos": "phr.",
    "en_def": "animal groups flagged with critical survival rates.",
    "cn_def": "瀕危物種",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "animal groups flagged with critical survival rates.",
        "cn_def": "瀕危物種"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
