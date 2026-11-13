// Unit 9 Quiz Data: saying – wealth
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Advanced U9 - saying – wealth",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "saying",
    "pos": "n.",
    "cn_def": "諺語、格言、俗話",
    "en_def": "a well-known wise statement or traditional proverb.",
    "sentence": "There is a popular {{BLANK}} that goes 'actions speak louder than words,' and it is still very true in everyday life.",
    "cn": "有句廣為人知的諺語說「行動勝於言辭」，在日常生活中仍非常真實。"
  },
  {
    "word": "folksy saying",
    "pos": "phr.",
    "cn_def": "民間諺語",
    "en_def": "a casual regional expression packed with old roots.",
    "sentence": "My grandmother always quoted a {{BLANK}} whenever we faced a problem, and her words always seemed to help somehow.",
    "cn": "每當我們面對問題時，祖母總是引用一句民間諺語，而她的話總是以某種方式有所幫助。"
  },
  {
    "word": "As the saying goes",
    "pos": "phr.",
    "cn_def": "常言道、正如俗話所說",
    "en_def": "echoing a classic piece of old wisdom.",
    "sentence": "{{BLANK}}, 'every cloud has a silver lining,' and losing that job eventually led to a much better opportunity.",
    "cn": "常言道「黑暗中必有曙光」，丟掉那份工作最終帶來了更好的機會。"
  },
  {
    "word": "old saying",
    "pos": "phr.",
    "cn_def": "古老諺語",
    "en_def": "a historic line of insight used across generations.",
    "sentence": "There is an {{BLANK}} that warns us not to judge a book by its cover, and this advice is as wise today as ever.",
    "cn": "有一句古老諺語警告我們不要以貌取人，這個忠告至今仍然非常有智慧。"
  },
  {
    "word": "beggar",
    "pos": "n.",
    "cn_def": "乞丐",
    "en_def": "a poor person who lives by asking peers for money.",
    "sentence": "A tired {{BLANK}} sat outside the station with a cardboard sign, hoping that commuters might spare some loose change.",
    "cn": "一個疲憊的乞丐坐在車站外，拿著一塊紙板，希望通勤者能給一些零錢。"
  },
  {
    "word": "beg",
    "pos": "v.",
    "cn_def": "乞討、懇求",
    "en_def": "to request cash or help in a desperate manner.",
    "sentence": "The stray dog sat by the table and began to {{BLANK}} for food scraps by pawing at the leg of the nearest chair.",
    "cn": "那隻流浪狗坐在桌旁，用爪子撥弄最近的椅腳，開始乞求食物殘渣。"
  },
  {
    "word": "begged for",
    "pos": "phr.",
    "cn_def": "乞求…",
    "en_def": "to ask with massive emotion for mercy or food.",
    "sentence": "The child {{BLANK}} one more hour of screen time before bed, but his parents firmly said no and turned off the TV.",
    "cn": "孩子懇求睡前再多一小時的螢幕時間，但父母堅決說不並關掉了電視。"
  },
  {
    "word": "charity",
    "pos": "n.",
    "cn_def": "慈善機構",
    "en_def": "an organization set up to give free help to needy peers.",
    "sentence": "She volunteers for a local {{BLANK}} every weekend, helping to pack and deliver food boxes to elderly residents nearby.",
    "cn": "她每個週末為一家本地慈善機構做義工，幫忙打包並將食物箱送到附近的老年居民家中。"
  },
  {
    "word": "charity",
    "pos": "n.",
    "cn_def": "慈善、施捨、仁慈",
    "en_def": "the act of giving funds or kindness to others.",
    "sentence": "He believed strongly in {{BLANK}} and always made a point of donating a portion of his monthly salary to those in need.",
    "cn": "他強烈相信慈善，總是堅持將每月薪水的一部分捐給有需要的人。"
  },
  {
    "word": "give to charity",
    "pos": "phr.",
    "cn_def": "捐助慈善",
    "en_def": "to donate excess assets to support poor teams.",
    "sentence": "After winning the prize, she decided to {{BLANK}} rather than spend the money on herself or luxury items.",
    "cn": "獲獎後，她決定將獎金捐助慈善，而不是將錢花在自己或奢侈品上。"
  },
  {
    "word": "charity work",
    "pos": "phr.",
    "cn_def": "慈善工作",
    "en_def": "active duties completed to support local poor lines.",
    "sentence": "The school encouraged students to participate in {{BLANK}} during the summer holidays to build empathy and community spirit.",
    "cn": "學校鼓勵學生在暑假期間參與慈善工作，以培養同理心和社區精神。"
  },
  {
    "word": "charitable",
    "pos": "adj.",
    "cn_def": "慈善的、仁慈的",
    "en_def": "generous in giving help or tracking kind minds.",
    "sentence": "The {{BLANK}} businessman donated millions to build a new children's hospital in the city where he grew up.",
    "cn": "這位慈善商人捐出數百萬元，在他成長的城市建造一所新的兒童醫院。"
  },
  {
    "word": "needy",
    "pos": "adj.",
    "cn_def": "貧困的、生活匱乏的",
    "en_def": "poor; lacking essential food, clothes, or support.",
    "sentence": "The organisation collects second-hand clothing and distributes it to {{BLANK}} families in rural areas every winter.",
    "cn": "這個組織收集二手衣物，每年冬天分發給農村地區的貧困家庭。"
  },
  {
    "word": "needy families",
    "pos": "phr.",
    "cn_def": "貧困家庭",
    "en_def": "family circles with limited revenue or assets.",
    "sentence": "The government scheme provides monthly food vouchers to {{BLANK}} who cannot afford basic groceries for their children.",
    "cn": "政府計劃向無法為孩子負擔基本食品雜貨的貧困家庭提供每月食品券。"
  },
  {
    "word": "the needy",
    "pos": "n.",
    "cn_def": "窮人、生活匱乏者",
    "en_def": "all citizens currently dealing with deep poverty.",
    "sentence": "The soup kitchen opened its doors every evening to feed {{BLANK}} in the neighbourhood, regardless of their background.",
    "cn": "這家愛心廚房每晚開門，為社區中的窮人提供餐食，不論其背景如何。"
  },
  {
    "word": "need",
    "pos": "v.",
    "cn_def": "需要",
    "en_def": "a requirement for an object or to want an asset.",
    "sentence": "There is a real {{BLANK}} for more affordable housing in the city, as many working families cannot pay the high rents.",
    "cn": "這座城市確實需要更多可負擔的住房，因為許多工薪家庭無法支付高昂的租金。"
  },
  {
    "word": "In terms of",
    "pos": "phr.",
    "cn_def": "就…而言、在…方面",
    "en_def": "in relation to a specific feature or angle.",
    "sentence": "{{BLANK}} academic results, this year's graduating class performed better than any group in the past ten years.",
    "cn": "就學業成績而言，今年的畢業班表現優於過去十年的任何一屆。"
  },
  {
    "word": "In terms of weather",
    "pos": "phr.",
    "cn_def": "就天氣而言",
    "en_def": "focusing strictly on climate quality during review.",
    "sentence": "{{BLANK}}, spring is the best season to visit the island because it is warm, dry, and rarely windy.",
    "cn": "就天氣而言，春天是遊覽這座島嶼的最佳季節，因為天氣溫暖乾燥，很少有風。"
  },
  {
    "word": "found",
    "pos": "v.",
    "cn_def": "創立、創辦、奠定",
    "en_def": "to establish or start a company or institution.",
    "sentence": "She used her life savings to {{BLANK}} a small bakery that has now grown into a well-known chain across five cities.",
    "cn": "她用畢生積蓄創立了一家小烘焙坊，如今已發展成橫跨五座城市的知名連鎖店。"
  },
  {
    "word": "found a company",
    "pos": "phr.",
    "cn_def": "創立公司",
    "en_def": "to invest initial cash to launch a new firm.",
    "sentence": "At only twenty-five years old, he managed to {{BLANK}} that specialised in developing affordable medical devices.",
    "cn": "他僅二十五歲就成功創立了一家專門開發經濟實惠醫療設備的公司。"
  },
  {
    "word": "school was founded",
    "pos": "phr.",
    "cn_def": "學校被創立",
    "en_def": "an academy set up its active campus via an agent.",
    "sentence": "The {{BLANK}} over one hundred years ago by a group of missionaries who wanted to provide education for local children.",
    "cn": "這所學校是一百多年前由一群希望為當地兒童提供教育的傳教士所創立的。"
  },
  {
    "word": "foundation",
    "pos": "n.",
    "cn_def": "基金會、基礎、地基",
    "en_def": "the baseline base or the start of an agency.",
    "sentence": "The billionaire set up a charitable {{BLANK}} to fund medical research and provide scholarships for students from low-income families.",
    "cn": "這位億萬富翁設立了一個慈善基金會，資助醫學研究並為低收入家庭的學生提供獎學金。"
  },
  {
    "word": "founder",
    "pos": "n.",
    "cn_def": "創辦人、奠基者",
    "en_def": "the central individual who launched an organization.",
    "sentence": "The {{BLANK}} of the company returned as its CEO after years away, hoping to restore the brand's original vision and values.",
    "cn": "這家公司的創辦人在多年離開後重返擔任執行長，希望恢復品牌最初的願景和價值觀。"
  },
  {
    "word": "advertising",
    "pos": "n.",
    "cn_def": "廣告業、廣告投放",
    "en_def": "the corporate business of making items popular.",
    "sentence": "She decided to study {{BLANK}} at university because she wanted a creative career that combined design, writing, and strategy.",
    "cn": "她決定在大學攻讀廣告學，因為她想要一份結合設計、寫作和策略的創意職業。"
  },
  {
    "word": "working in advertising",
    "pos": "phr.",
    "cn_def": "從事廣告業",
    "en_def": "to hold a job position designing market ads.",
    "sentence": "He always dreamed of {{BLANK}} and spent years building a portfolio before finally landing his first agency job.",
    "cn": "他一直夢想從事廣告業，花費多年建立作品集，才終於獲得第一份廣告公司的工作。"
  },
  {
    "word": "advertising medium",
    "pos": "phr.",
    "cn_def": "廣告媒介",
    "en_def": "the specific pipeline used to carry promotional lines.",
    "sentence": "Television remains a powerful {{BLANK}} for reaching older audiences, even as younger viewers shift to online platforms.",
    "cn": "即使年輕觀眾轉移到網路平台，電視仍是觸及年長受眾的強大廣告媒介。"
  },
  {
    "word": "Online advertising",
    "pos": "phr.",
    "cn_def": "網路廣告",
    "en_def": "promotional banners run across internet spots.",
    "sentence": "{{BLANK}} has completely transformed the marketing industry, allowing businesses to target specific audiences with great precision.",
    "cn": "網路廣告已徹底改變了行銷產業，使企業能夠以極高的精準度針對特定受眾進行投放。"
  },
  {
    "word": "advertise",
    "pos": "v.",
    "cn_def": "登廣告、做宣傳",
    "en_def": "to tell the public about a product to drive sales.",
    "sentence": "The restaurant decided to {{BLANK}} its new lunch menu on social media, and bookings increased significantly within a week.",
    "cn": "這家餐廳決定在社群媒體上宣傳其新午餐菜單，一週內預訂量大幅增加。"
  },
  {
    "word": "advertisement",
    "pos": "n.",
    "cn_def": "廣告（簡稱ad）",
    "en_def": "a specific public note designed to move an item.",
    "sentence": "The colourful {{BLANK}} on the back of the bus caught her eye and made her want to try the new ice cream flavour.",
    "cn": "公車後方那則色彩鮮豔的廣告吸引了她的目光，讓她想嘗試新口味的冰淇淋。"
  },
  {
    "word": "advertisers",
    "pos": "n.",
    "cn_def": "廣告商、廣告主",
    "en_def": "a corporate firm that pays cash to display ads.",
    "sentence": "The popular YouTube channel attracted many major {{BLANK}} because its videos consistently reached millions of viewers worldwide.",
    "cn": "這個熱門YouTube頻道吸引了許多大型廣告商，因為其影片持續觸及全球數百萬觀眾。"
  },
  {
    "word": "opportunity",
    "pos": "n.",
    "cn_def": "機會、時機",
    "en_def": "a chance to do something or achieve a major goal.",
    "sentence": "Studying abroad gave her the {{BLANK}} to experience a new culture and become fluent in a second language.",
    "cn": "出國留學給了她體驗新文化並流利掌握第二語言的機會。"
  },
  {
    "word": "opportunity of a lifetime",
    "pos": "phr.",
    "cn_def": "一生一次的難得機會",
    "en_def": "an incredible open door that rarely repeats.",
    "sentence": "Being selected to perform at the national concert hall was truly an {{BLANK}} that she would never forget.",
    "cn": "被選中在國家音樂廳演出真的是她永生難忘的一生一次難得機會。"
  },
  {
    "word": "take this opportunity",
    "pos": "phr.",
    "cn_def": "藉此機會",
    "en_def": "to actively use a moment to express state or thanks.",
    "sentence": "I would like to {{BLANK}} to thank everyone who supported the project and made this achievement possible.",
    "cn": "我想藉此機會感謝所有支持這個專案並使這一成就成為可能的人。"
  },
  {
    "word": "job opportunity",
    "pos": "phr.",
    "cn_def": "工作機會",
    "en_def": "a corporate opening allowing you to apply for work.",
    "sentence": "He spotted an exciting {{BLANK}} at a technology firm in the city and immediately updated his résumé to apply.",
    "cn": "他在城市一家科技公司發現了一個令人興奮的工作機會，立即更新履歷提出申請。"
  },
  {
    "word": "chance",
    "pos": "n.",
    "cn_def": "機會、機率",
    "en_def": "a casual opening or random luck factor.",
    "sentence": "She never had the {{BLANK}} to study piano as a child, so she enrolled in adult lessons and has loved it ever since.",
    "cn": "她小時候從來沒有機會學鋼琴，所以她報名了成人課程，此後一直非常喜歡。"
  },
  {
    "word": "exact",
    "pos": "adj.",
    "cn_def": "精確的、確切的",
    "en_def": "completely correct or precise in every single digit.",
    "sentence": "Could you tell me the {{BLANK}} time the train departs? I need to make sure I arrive at the station early enough.",
    "cn": "你能告訴我火車確切的出發時間嗎？我需要確保足夠早到達車站。"
  },
  {
    "word": "exact amount",
    "pos": "phr.",
    "cn_def": "確切金額",
    "en_def": "the specific currency cost matching a billing line.",
    "sentence": "Please pay the {{BLANK}} shown on the invoice, as the system does not accept rounded figures or partial payments.",
    "cn": "請支付發票上顯示的確切金額，因為系統不接受四捨五入的數字或部分付款。"
  },
  {
    "word": "precise",
    "pos": "adj.",
    "cn_def": "精準的",
    "en_def": "highly accurate; focusing on meticulous limits.",
    "sentence": "The surgeon's movements must be extremely {{BLANK}} during the operation to avoid causing any unnecessary damage to tissue.",
    "cn": "外科醫生在手術過程中的動作必須極為精準，以避免對組織造成任何不必要的損傷。"
  },
  {
    "word": "not exactly",
    "pos": "phr.",
    "cn_def": "不完全是、不見得",
    "en_def": "a phrase indicating a reply is partially false.",
    "sentence": "'Did you enjoy the concert?' 'Well, {{BLANK}} — the first half was great, but the second half was quite boring.'",
    "cn": "「你喜歡這場音樂會嗎？」「嗯，不完全是——上半場很棒，但下半場相當無聊。」"
  },
  {
    "word": "partner",
    "pos": "n.",
    "cn_def": "夥伴、搭檔、合夥人",
    "en_def": "a person or firm you complete shared work with.",
    "sentence": "She and her business {{BLANK}} have worked together for twelve years and have built the company into a regional success.",
    "cn": "她和她的商業夥伴已合作了十二年，將公司打造成一個區域性的成功企業。"
  },
  {
    "word": "partner",
    "pos": "v.",
    "cn_def": "合作、結為夥伴",
    "en_def": "to join forces with another agency to do a project.",
    "sentence": "The local school decided to {{BLANK}} with a nearby university to give students access to professional science laboratories.",
    "cn": "這所本地學校決定與附近一所大學合作，讓學生能夠使用專業的科學實驗室。"
  },
  {
    "word": "partner with",
    "pos": "phr.",
    "cn_def": "與…合作",
    "en_def": "to form an official alliance with a separate firm.",
    "sentence": "The charity decided to {{BLANK}} a well-known supermarket chain to collect food donations at every checkout counter.",
    "cn": "這家慈善機構決定與一家知名連鎖超市合作，在每個收銀台收集食物捐款。"
  },
  {
    "word": "tennis partner",
    "pos": "phr.",
    "cn_def": "網球拍檔",
    "en_def": "a peer who plays on your side of the court.",
    "sentence": "She asked her {{BLANK}} to practise with her every morning before school so that they could improve their doubles game.",
    "cn": "她請她的網球拍檔每天上學前與她一起練習，以便提升他們的雙打技術。"
  },
  {
    "word": "partnership",
    "pos": "n.",
    "cn_def": "合作關係、合夥企業",
    "en_def": "an ongoing alliance relationship between units.",
    "sentence": "The two companies announced a long-term {{BLANK}} to jointly develop new software solutions for the healthcare industry.",
    "cn": "這兩家公司宣布建立長期合作關係，共同為醫療保健產業開發新的軟體解決方案。"
  },
  {
    "word": "assemble",
    "pos": "v.",
    "cn_def": "集合、聚集",
    "en_def": "to come together or bring a group into one room.",
    "sentence": "All staff members were asked to {{BLANK}} in the main conference room at nine o'clock for an important company announcement.",
    "cn": "所有員工被要求在九點鐘在主要會議室集合，聆聽一項重要的公司公告。"
  },
  {
    "word": "assemble",
    "pos": "v.",
    "cn_def": "組裝（機器等）",
    "en_def": "to fit separate machine parts together to form a unit.",
    "sentence": "It took him over three hours to {{BLANK}} the flat-pack furniture, but the finished bookshelf looked exactly as pictured.",
    "cn": "他花了超過三個小時組裝這件平板包裝家具，但完成後的書架看起來和圖片一模一樣。"
  },
  {
    "word": "assemble students",
    "pos": "phr.",
    "cn_def": "集合學生",
    "en_def": "to herd pupils into a primary auditorium spot.",
    "sentence": "The principal asked the teachers to {{BLANK}} in the gymnasium before making an important announcement about the schedule.",
    "cn": "校長要求老師們在宣布重要課程通知前，先在體育館集合學生。"
  },
  {
    "word": "assemble outside",
    "pos": "phr.",
    "cn_def": "在室外集合",
    "en_def": "to form active lines out on an open sports field.",
    "sentence": "When the fire alarm rang, all students and teachers were instructed to {{BLANK}} on the school playground immediately.",
    "cn": "當火災警報響起時，所有學生和老師被指示立即在學校操場上集合。"
  },
  {
    "word": "assemble parts",
    "pos": "phr.",
    "cn_def": "組裝零件",
    "en_def": "to construct raw imports into finished products.",
    "sentence": "The factory workers were trained to {{BLANK}} quickly and accurately so that production targets could always be met.",
    "cn": "工廠工人接受了快速準確地組裝零件的培訓，以確保生產目標始終能夠達成。"
  },
  {
    "word": "assembly line",
    "pos": "phr.",
    "cn_def": "流水線、組裝線",
    "en_def": "a factory setup where items move past workers.",
    "sentence": "The introduction of the {{BLANK}} in the early twentieth century made it possible to produce cars at a much lower cost.",
    "cn": "二十世紀初流水線的引入使以低得多的成本生產汽車成為可能。"
  },
  {
    "word": "suitable",
    "pos": "adj.",
    "cn_def": "合適的、適宜的",
    "en_def": "right or acceptable for a specific scenario.",
    "sentence": "The committee reviewed several venues before choosing one that was {{BLANK}} for hosting both indoor and outdoor events.",
    "cn": "委員會審查了幾個場地，然後選擇了一個適合舉辦室內和戶外活動的地點。"
  },
  {
    "word": "suitable clothing",
    "pos": "phr.",
    "cn_def": "合適的衣著",
    "en_def": "garments that perfectly match current weather.",
    "sentence": "The school trip notice reminded parents to pack {{BLANK}} for the children, as the weather in the mountains can change quickly.",
    "cn": "學校旅行通知提醒家長為孩子準備合適的衣著，因為山區天氣變化很快。"
  },
  {
    "word": "suitable for",
    "pos": "phr.",
    "cn_def": "適合…的",
    "en_def": "tracking matching specifications for a dynamic activity.",
    "sentence": "This hiking trail is not {{BLANK}} young children because it involves steep sections and requires a lot of stamina.",
    "cn": "這條登山步道不適合年幼的孩子，因為它有陡峭的路段，需要大量體力。"
  },
  {
    "word": "suits",
    "pos": "v.",
    "cn_def": "適合、相配",
    "en_def": "to look right on someone or match their needs.",
    "sentence": "The blue jacket really {{BLANK}} you — it matches your eyes and makes you look very professional and confident.",
    "cn": "那件藍色夾克真的很適合你——它與你的眼睛相配，讓你看起來非常專業自信。"
  },
  {
    "word": "permission",
    "pos": "n.",
    "cn_def": "許可、准許",
    "en_def": "the official token or nod allowing an action.",
    "sentence": "Students must get written {{BLANK}} from a parent or guardian before they are allowed to join any off-campus school activity.",
    "cn": "學生在被允許參加任何校外學校活動之前，必須獲得父母或監護人的書面許可。"
  },
  {
    "word": "need permission",
    "pos": "phr.",
    "cn_def": "需要許可",
    "en_def": "requiring a signature from a parent before transit.",
    "sentence": "All visitors {{BLANK}} from the front office before they can enter the school building during teaching hours.",
    "cn": "所有訪客在教學時間內進入學校建築之前，都需要獲得前台辦公室的許可。"
  },
  {
    "word": "permit",
    "pos": "v.",
    "cn_def": "允許、准許",
    "en_def": "to allow an action to play out legally.",
    "sentence": "The park rules do not {{BLANK}} visitors to feed the wild animals, as it can disrupt their natural diet and behaviour.",
    "cn": "公園規則不允許訪客餵食野生動物，因為這可能會擾亂牠們的自然飲食和行為。"
  },
  {
    "word": "permit",
    "pos": "n.",
    "cn_def": "許可證、執照",
    "en_def": "a printed paper license showing an access right.",
    "sentence": "You will need a valid fishing {{BLANK}} before you can cast a line in this protected lake or you risk a heavy fine.",
    "cn": "在這個受保護的湖泊垂釣之前，你需要有效的釣魚許可證，否則可能面臨高額罰款。"
  },
  {
    "word": "prohibition",
    "pos": "n.",
    "cn_def": "禁止、禁令",
    "en_def": "an official rule blocking an entry or activity.",
    "sentence": "The {{BLANK}} on smoking inside all public buildings has significantly improved air quality and reduced health risks.",
    "cn": "在所有公共建築內禁止吸菸的禁令顯著改善了空氣品質並降低了健康風險。"
  },
  {
    "word": "authority",
    "pos": "n.",
    "cn_def": "當局、官方（常用複數）",
    "en_def": "the corporate group in power; a government body.",
    "sentence": "The local {{BLANK}} approved the construction of a new cycle path to encourage more residents to commute by bicycle.",
    "cn": "當地當局批准建造一條新的自行車道，以鼓勵更多居民騎自行車通勤。"
  },
  {
    "word": "authority",
    "pos": "n.",
    "cn_def": "權威、專家",
    "en_def": "an expert packed with massive specialized insight.",
    "sentence": "Professor Chen is widely regarded as a leading {{BLANK}} on ancient Chinese history and is often invited to speak globally.",
    "cn": "陳教授被廣泛認為是中國古代史的頂尖權威，經常受邀在全球各地演講。"
  },
  {
    "word": "The authorities",
    "pos": "phr.",
    "cn_def": "警方、官方、當局",
    "en_def": "the official police or management handling crime.",
    "sentence": "{{BLANK}} were alerted immediately after witnesses reported seeing suspicious activity near the bank late at night.",
    "cn": "目擊者報告在銀行附近深夜發現可疑活動後，當局立即接獲通報。"
  },
  {
    "word": "authority on history",
    "pos": "phr.",
    "cn_def": "歷史權威",
    "en_def": "an ultimate academic source for an era track.",
    "sentence": "She became a recognised {{BLANK}} after publishing three highly praised books on the Ming Dynasty.",
    "cn": "在出版了三本廣受好評的明朝著作後，她成為公認的歷史權威。"
  },
  {
    "word": "poster",
    "pos": "n.",
    "cn_def": "海報",
    "en_def": "a large printed picture displayed on a wall.",
    "sentence": "The students designed a colourful {{BLANK}} to promote the school's annual charity bake sale happening next Friday.",
    "cn": "學生們設計了一張色彩繽紛的海報，宣傳學校下週五舉行的年度慈善烘焙義賣活動。"
  },
  {
    "word": "host",
    "pos": "v.",
    "cn_def": "主辦、主持、招待",
    "en_def": "to organize or provide the space for a social party.",
    "sentence": "Our school will {{BLANK}} an international science competition next month, welcoming student teams from fifteen different countries.",
    "cn": "我們學校下個月將主辦一場國際科學競賽，歡迎來自十五個不同國家的學生團隊。"
  },
  {
    "word": "host",
    "pos": "n.",
    "cn_def": "主人、主持人",
    "en_def": "a person who receives and takes care of guests.",
    "sentence": "The {{BLANK}} greeted every guest warmly at the door and made sure everyone had a drink and felt welcome at the party.",
    "cn": "主人在門口熱情地迎接每位賓客，確保每個人都有飲料喝並在派對上感到賓至如歸。"
  },
  {
    "word": "host parties",
    "pos": "phr.",
    "cn_def": "舉辦派對",
    "en_def": "to throw a celebration inside your home space.",
    "sentence": "She loves to {{BLANK}} for her close friends, preparing homemade food and decorating her apartment beautifully.",
    "cn": "她喜歡為親密朋友舉辦派對，準備自製食物並將公寓裝飾得美麗動人。"
  },
  {
    "word": "party's host",
    "pos": "phr.",
    "cn_def": "派對主人",
    "en_def": "the central manager standing at the arrival door.",
    "sentence": "The {{BLANK}} spent the whole afternoon setting up decorations and preparing snacks before the guests began to arrive.",
    "cn": "派對主人花了整個下午布置裝飾並準備點心，然後賓客才開始陸續到來。"
  },
  {
    "word": "play host to",
    "pos": "phr.",
    "cn_def": "主辦…、充當…的主人",
    "en_def": "acting as the explicit city welcoming an event.",
    "sentence": "Taipei will {{BLANK}} the international film festival this year, attracting directors and actors from around the globe.",
    "cn": "台北今年將主辦國際電影節，吸引來自全球各地的導演和演員。"
  },
  {
    "word": "hostess",
    "pos": "n.",
    "cn_def": "女主人",
    "en_def": "a female agent welcoming arrivals at a dinner.",
    "sentence": "The {{BLANK}} welcomed each guest personally and guided them to their seats with a warm smile and a kind word.",
    "cn": "這位女主人親自迎接每位賓客，帶著溫暖的微笑和親切的話語引導他們入座。"
  },
  {
    "word": "poverty",
    "pos": "n.",
    "cn_def": "貧窮、貧困",
    "en_def": "the state of being extremely poor without resources.",
    "sentence": "Millions of people around the world still live in {{BLANK}} without access to clean water, food, or basic healthcare.",
    "cn": "全世界數百萬人仍生活在貧困中，無法獲得乾淨的水、食物或基本醫療保健。"
  },
  {
    "word": "live in poverty",
    "pos": "phr.",
    "cn_def": "生活在貧困中",
    "en_def": "spending daily cycles without basic food or safe beds.",
    "sentence": "Many children who {{BLANK}} struggle to focus at school because they are hungry or tired most of the time.",
    "cn": "許多生活在貧困中的孩子很難在學校集中注意力，因為他們大部分時間都感到飢餓或疲倦。"
  },
  {
    "word": "impoverish",
    "pos": "v.",
    "cn_def": "使貧困",
    "en_def": "to make an active region or peer extremely poor.",
    "sentence": "Years of conflict and drought continued to {{BLANK}} the region, leaving thousands of families without enough food to survive.",
    "cn": "多年的衝突和乾旱持續使這個地區陷入貧困，讓數千個家庭無法獲得足夠的食物維持生存。"
  },
  {
    "word": "impoverished",
    "pos": "adj.",
    "cn_def": "貧困的、赤貧的",
    "en_def": "describing a town or household hit by heavy loss.",
    "sentence": "The charity set up free tutoring centres in several {{BLANK}} neighbourhoods to help children access quality education.",
    "cn": "這家慈善機構在幾個貧困社區設立了免費輔導中心，幫助孩子們獲得優質教育。"
  },
  {
    "word": "wealth",
    "pos": "n.",
    "cn_def": "財富",
    "en_def": "a massive bundle of capital or available assets.",
    "sentence": "He inherited great {{BLANK}} from his family, but he chose to use most of it to fund scholarships for underprivileged students.",
    "cn": "他從家族繼承了巨大的財富，但他選擇將大部分用於資助弱勢學生的獎學金。"
  }
];

const MCQS = [
  {
    "q": "There is a popular ______ that goes 'actions speak louder than words,' and it is still very true in everyday life.",
    "options": [
      "authority",
      "saying",
      "advertising",
      "hostess"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "My grandmother always quoted a ______ whenever we faced a problem, and her words always seemed to help somehow.",
    "options": [
      "exact amount",
      "give to charity",
      "school was founded",
      "folksy saying"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "______, 'every cloud has a silver lining,' and losing that job eventually led to a much better opportunity.",
    "options": [
      "As the saying goes",
      "job opportunity",
      "party's host",
      "suitable clothing"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "There is an ______ that warns us not to judge a book by its cover, and this advice is as wise today as ever.",
    "options": [
      "advertising medium",
      "exact amount",
      "old saying",
      "take this opportunity"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "A tired ______ sat outside the station with a cardboard sign, hoping that commuters might spare some loose change.",
    "options": [
      "poverty",
      "advertising",
      "the needy",
      "beggar"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The stray dog sat by the table and began to ______ for food scraps by pawing at the leg of the nearest chair.",
    "options": [
      "impoverish",
      "beg",
      "host",
      "partner"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The child ______ one more hour of screen time before bed, but his parents firmly said no and turned off the TV.",
    "options": [
      "begged for",
      "assemble parts",
      "advertising medium",
      "old saying"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "She volunteers for a local ______ every weekend, helping to pack and deliver food boxes to elderly residents nearby.",
    "options": [
      "saying",
      "host",
      "charity",
      "hostess"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "He believed strongly in ______ and always made a point of donating a portion of his monthly salary to those in need.",
    "options": [
      "advertising",
      "charity",
      "permit",
      "poverty"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "After winning the prize, she decided to ______ rather than spend the money on herself or luxury items.",
    "options": [
      "job opportunity",
      "assemble parts",
      "give to charity",
      "not exactly"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The school encouraged students to participate in ______ during the summer holidays to build empathy and community spirit.",
    "options": [
      "charity work",
      "old saying",
      "assembly line",
      "school was founded"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The ______ businessman donated millions to build a new children's hospital in the city where he grew up.",
    "options": [
      "impoverished",
      "precise",
      "suitable",
      "charitable"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The organisation collects second-hand clothing and distributes it to ______ families in rural areas every winter.",
    "options": [
      "needy",
      "charitable",
      "impoverished",
      "suitable"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The government scheme provides monthly food vouchers to ______ who cannot afford basic groceries for their children.",
    "options": [
      "working in advertising",
      "found a company",
      "needy families",
      "folksy saying"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The soup kitchen opened its doors every evening to feed ______ in the neighbourhood, regardless of their background.",
    "options": [
      "saying",
      "the needy",
      "permit",
      "partner"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "There is a real ______ for more affordable housing in the city, as many working families cannot pay the high rents.",
    "options": [
      "found",
      "impoverish",
      "permit",
      "need"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "______ academic results, this year's graduating class performed better than any group in the past ten years.",
    "options": [
      "partner with",
      "job opportunity",
      "In terms of",
      "live in poverty"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "______, spring is the best season to visit the island because it is warm, dry, and rarely windy.",
    "options": [
      "found a company",
      "In terms of weather",
      "give to charity",
      "job opportunity"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "She used her life savings to ______ a small bakery that has now grown into a well-known chain across five cities.",
    "options": [
      "found",
      "permit",
      "assemble",
      "impoverish"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "At only twenty-five years old, he managed to ______ that specialised in developing affordable medical devices.",
    "options": [
      "assembly line",
      "party's host",
      "assemble outside",
      "found a company"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The ______ over one hundred years ago by a group of missionaries who wanted to provide education for local children.",
    "options": [
      "assemble outside",
      "working in advertising",
      "school was founded",
      "assemble parts"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The billionaire set up a charitable ______ to fund medical research and provide scholarships for students from low-income families.",
    "options": [
      "authority",
      "hostess",
      "host",
      "foundation"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The ______ of the company returned as its CEO after years away, hoping to restore the brand's original vision and values.",
    "options": [
      "partnership",
      "founder",
      "foundation",
      "permit"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "She decided to study ______ at university because she wanted a creative career that combined design, writing, and strategy.",
    "options": [
      "advertising",
      "opportunity",
      "chance",
      "charity"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "He always dreamed of ______ and spent years building a portfolio before finally landing his first agency job.",
    "options": [
      "school was founded",
      "begged for",
      "Online advertising",
      "working in advertising"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Television remains a powerful ______ for reaching older audiences, even as younger viewers shift to online platforms.",
    "options": [
      "advertising medium",
      "old saying",
      "take this opportunity",
      "exact amount"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "______ has completely transformed the marketing industry, allowing businesses to target specific audiences with great precision.",
    "options": [
      "give to charity",
      "Online advertising",
      "host parties",
      "assemble outside"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The restaurant decided to ______ its new lunch menu on social media, and bookings increased significantly within a week.",
    "options": [
      "need",
      "beg",
      "advertise",
      "assemble"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The colourful ______ on the back of the bus caught her eye and made her want to try the new ice cream flavour.",
    "options": [
      "chance",
      "prohibition",
      "foundation",
      "advertisement"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The popular YouTube channel attracted many major ______ because its videos consistently reached millions of viewers worldwide.",
    "options": [
      "founder",
      "advertisers",
      "prohibition",
      "hostess"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Studying abroad gave her the ______ to experience a new culture and become fluent in a second language.",
    "options": [
      "founder",
      "the needy",
      "opportunity",
      "permission"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Being selected to perform at the national concert hall was truly an ______ that she would never forget.",
    "options": [
      "opportunity of a lifetime",
      "needy families",
      "working in advertising",
      "The authorities"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "I would like to ______ to thank everyone who supported the project and made this achievement possible.",
    "options": [
      "play host to",
      "exact amount",
      "take this opportunity",
      "assemble outside"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "He spotted an exciting ______ at a technology firm in the city and immediately updated his résumé to apply.",
    "options": [
      "job opportunity",
      "suitable for",
      "partner with",
      "suitable clothing"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "She never had the ______ to study piano as a child, so she enrolled in adult lessons and has loved it ever since.",
    "options": [
      "founder",
      "chance",
      "partnership",
      "permission"
    ],
    "answer": 1,
    "vocabIndex": 34
  },
  {
    "q": "Could you tell me the ______ time the train departs? I need to make sure I arrive at the station early enough.",
    "options": [
      "precise",
      "impoverished",
      "charitable",
      "exact"
    ],
    "answer": 3,
    "vocabIndex": 35
  },
  {
    "q": "Please pay the ______ shown on the invoice, as the system does not accept rounded figures or partial payments.",
    "options": [
      "exact amount",
      "suitable clothing",
      "found a company",
      "need permission"
    ],
    "answer": 0,
    "vocabIndex": 36
  },
  {
    "q": "The surgeon's movements must be extremely ______ during the operation to avoid causing any unnecessary damage to tissue.",
    "options": [
      "charitable",
      "precise",
      "impoverished",
      "suitable"
    ],
    "answer": 1,
    "vocabIndex": 37
  },
  {
    "q": "'Did you enjoy the concert?' 'Well, ______ — the first half was great, but the second half was quite boring.'",
    "options": [
      "charity work",
      "job opportunity",
      "folksy saying",
      "not exactly"
    ],
    "answer": 3,
    "vocabIndex": 38
  },
  {
    "q": "She and her business ______ have worked together for twelve years and have built the company into a regional success.",
    "options": [
      "the needy",
      "host",
      "partner",
      "advertisement"
    ],
    "answer": 2,
    "vocabIndex": 39
  },
  {
    "q": "The local school decided to ______ with a nearby university to give students access to professional science laboratories.",
    "options": [
      "partner",
      "host",
      "suits",
      "need"
    ],
    "answer": 0,
    "vocabIndex": 40
  },
  {
    "q": "The charity decided to ______ a well-known supermarket chain to collect food donations at every checkout counter.",
    "options": [
      "charity work",
      "partner with",
      "suitable for",
      "party's host"
    ],
    "answer": 1,
    "vocabIndex": 41
  },
  {
    "q": "She asked her ______ to practise with her every morning before school so that they could improve their doubles game.",
    "options": [
      "folksy saying",
      "working in advertising",
      "old saying",
      "tennis partner"
    ],
    "answer": 3,
    "vocabIndex": 42
  },
  {
    "q": "The two companies announced a long-term ______ to jointly develop new software solutions for the healthcare industry.",
    "options": [
      "permit",
      "foundation",
      "partnership",
      "founder"
    ],
    "answer": 2,
    "vocabIndex": 43
  },
  {
    "q": "All staff members were asked to ______ in the main conference room at nine o'clock for an important company announcement.",
    "options": [
      "advertise",
      "assemble",
      "beg",
      "host"
    ],
    "answer": 1,
    "vocabIndex": 44
  },
  {
    "q": "It took him over three hours to ______ the flat-pack furniture, but the finished bookshelf looked exactly as pictured.",
    "options": [
      "host",
      "suits",
      "impoverish",
      "assemble"
    ],
    "answer": 3,
    "vocabIndex": 45
  },
  {
    "q": "The principal asked the teachers to ______ in the gymnasium before making an important announcement about the schedule.",
    "options": [
      "In terms of weather",
      "found a company",
      "assemble students",
      "needy families"
    ],
    "answer": 2,
    "vocabIndex": 46
  },
  {
    "q": "When the fire alarm rang, all students and teachers were instructed to ______ on the school playground immediately.",
    "options": [
      "assemble outside",
      "tennis partner",
      "needy families",
      "live in poverty"
    ],
    "answer": 0,
    "vocabIndex": 47
  },
  {
    "q": "The factory workers were trained to ______ quickly and accurately so that production targets could always be met.",
    "options": [
      "partner with",
      "assemble parts",
      "found a company",
      "take this opportunity"
    ],
    "answer": 1,
    "vocabIndex": 48
  },
  {
    "q": "The introduction of the ______ in the early twentieth century made it possible to produce cars at a much lower cost.",
    "options": [
      "give to charity",
      "party's host",
      "school was founded",
      "assembly line"
    ],
    "answer": 3,
    "vocabIndex": 49
  },
  {
    "q": "The committee reviewed several venues before choosing one that was ______ for hosting both indoor and outdoor events.",
    "options": [
      "needy",
      "exact",
      "suitable",
      "precise"
    ],
    "answer": 2,
    "vocabIndex": 50
  },
  {
    "q": "The school trip notice reminded parents to pack ______ for the children, as the weather in the mountains can change quickly.",
    "options": [
      "suitable clothing",
      "suitable for",
      "The authorities",
      "host parties"
    ],
    "answer": 0,
    "vocabIndex": 51
  },
  {
    "q": "This hiking trail is not ______ young children because it involves steep sections and requires a lot of stamina.",
    "options": [
      "authority on history",
      "suitable clothing",
      "take this opportunity",
      "suitable for"
    ],
    "answer": 3,
    "vocabIndex": 52
  },
  {
    "q": "The blue jacket really ______ you — it matches your eyes and makes you look very professional and confident.",
    "options": [
      "permit",
      "impoverish",
      "suits",
      "partner"
    ],
    "answer": 2,
    "vocabIndex": 53
  },
  {
    "q": "Students must get written ______ from a parent or guardian before they are allowed to join any off-campus school activity.",
    "options": [
      "advertisement",
      "permission",
      "founder",
      "prohibition"
    ],
    "answer": 1,
    "vocabIndex": 54
  },
  {
    "q": "All visitors ______ from the front office before they can enter the school building during teaching hours.",
    "options": [
      "need permission",
      "opportunity of a lifetime",
      "assembly line",
      "assemble parts"
    ],
    "answer": 0,
    "vocabIndex": 55
  },
  {
    "q": "The park rules do not ______ visitors to feed the wild animals, as it can disrupt their natural diet and behaviour.",
    "options": [
      "need",
      "permit",
      "beg",
      "advertise"
    ],
    "answer": 1,
    "vocabIndex": 56
  },
  {
    "q": "You will need a valid fishing ______ before you can cast a line in this protected lake or you risk a heavy fine.",
    "options": [
      "saying",
      "hostess",
      "beggar",
      "permit"
    ],
    "answer": 3,
    "vocabIndex": 57
  },
  {
    "q": "The ______ on smoking inside all public buildings has significantly improved air quality and reduced health risks.",
    "options": [
      "poster",
      "foundation",
      "prohibition",
      "permit"
    ],
    "answer": 2,
    "vocabIndex": 58
  },
  {
    "q": "The local ______ approved the construction of a new cycle path to encourage more residents to commute by bicycle.",
    "options": [
      "authority",
      "wealth",
      "permission",
      "advertisement"
    ],
    "answer": 0,
    "vocabIndex": 59
  },
  {
    "q": "Professor Chen is widely regarded as a leading ______ on ancient Chinese history and is often invited to speak globally.",
    "options": [
      "saying",
      "the needy",
      "charity",
      "authority"
    ],
    "answer": 3,
    "vocabIndex": 60
  },
  {
    "q": "______ were alerted immediately after witnesses reported seeing suspicious activity near the bank late at night.",
    "options": [
      "party's host",
      "needy families",
      "The authorities",
      "authority on history"
    ],
    "answer": 2,
    "vocabIndex": 61
  },
  {
    "q": "She became a recognised ______ after publishing three highly praised books on the Ming Dynasty.",
    "options": [
      "authority on history",
      "opportunity of a lifetime",
      "exact amount",
      "not exactly"
    ],
    "answer": 0,
    "vocabIndex": 62
  },
  {
    "q": "The students designed a colourful ______ to promote the school's annual charity bake sale happening next Friday.",
    "options": [
      "charity",
      "poster",
      "chance",
      "prohibition"
    ],
    "answer": 1,
    "vocabIndex": 63
  },
  {
    "q": "Our school will ______ an international science competition next month, welcoming student teams from fifteen different countries.",
    "options": [
      "host",
      "suits",
      "assemble",
      "found"
    ],
    "answer": 0,
    "vocabIndex": 64
  },
  {
    "q": "The ______ greeted every guest warmly at the door and made sure everyone had a drink and felt welcome at the party.",
    "options": [
      "saying",
      "partnership",
      "host",
      "permit"
    ],
    "answer": 2,
    "vocabIndex": 65
  },
  {
    "q": "She loves to ______ for her close friends, preparing homemade food and decorating her apartment beautifully.",
    "options": [
      "Online advertising",
      "host parties",
      "tennis partner",
      "old saying"
    ],
    "answer": 1,
    "vocabIndex": 66
  },
  {
    "q": "The ______ spent the whole afternoon setting up decorations and preparing snacks before the guests began to arrive.",
    "options": [
      "In terms of weather",
      "old saying",
      "host parties",
      "party's host"
    ],
    "answer": 3,
    "vocabIndex": 67
  },
  {
    "q": "Taipei will ______ the international film festival this year, attracting directors and actors from around the globe.",
    "options": [
      "The authorities",
      "play host to",
      "assemble students",
      "need permission"
    ],
    "answer": 1,
    "vocabIndex": 68
  },
  {
    "q": "The ______ welcomed each guest personally and guided them to their seats with a warm smile and a kind word.",
    "options": [
      "hostess",
      "permit",
      "authority",
      "saying"
    ],
    "answer": 0,
    "vocabIndex": 69
  },
  {
    "q": "Millions of people around the world still live in ______ without access to clean water, food, or basic healthcare.",
    "options": [
      "opportunity",
      "wealth",
      "founder",
      "poverty"
    ],
    "answer": 3,
    "vocabIndex": 70
  },
  {
    "q": "Many children who ______ struggle to focus at school because they are hungry or tired most of the time.",
    "options": [
      "old saying",
      "In terms of",
      "live in poverty",
      "assemble parts"
    ],
    "answer": 2,
    "vocabIndex": 71
  },
  {
    "q": "Years of conflict and drought continued to ______ the region, leaving thousands of families without enough food to survive.",
    "options": [
      "impoverish",
      "partner",
      "host",
      "suits"
    ],
    "answer": 0,
    "vocabIndex": 72
  },
  {
    "q": "The charity set up free tutoring centres in several ______ neighbourhoods to help children access quality education.",
    "options": [
      "precise",
      "impoverished",
      "charitable",
      "needy"
    ],
    "answer": 1,
    "vocabIndex": 73
  },
  {
    "q": "He inherited great ______ from his family, but he chose to use most of it to fund scholarships for underprivileged students.",
    "options": [
      "charity",
      "permission",
      "founder",
      "wealth"
    ],
    "answer": 3,
    "vocabIndex": 74
  }
];

const LOOKUP = {
  "saying": {
    "pos": "n.",
    "en_def": "a well-known wise statement or traditional proverb.",
    "cn_def": "諺語、格言、俗話",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a well-known wise statement or traditional proverb.",
        "cn_def": "諺語、格言、俗話"
      }
    ]
  },
  "folksy saying": {
    "pos": "phr.",
    "en_def": "a casual regional expression packed with old roots.",
    "cn_def": "民間諺語",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a casual regional expression packed with old roots.",
        "cn_def": "民間諺語"
      }
    ]
  },
  "as the saying goes": {
    "pos": "phr.",
    "en_def": "echoing a classic piece of old wisdom.",
    "cn_def": "常言道、正如俗話所說",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "echoing a classic piece of old wisdom.",
        "cn_def": "常言道、正如俗話所說"
      }
    ]
  },
  "old saying": {
    "pos": "phr.",
    "en_def": "a historic line of insight used across generations.",
    "cn_def": "古老諺語",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a historic line of insight used across generations.",
        "cn_def": "古老諺語"
      }
    ]
  },
  "beggar": {
    "pos": "n.",
    "en_def": "a poor person who lives by asking peers for money.",
    "cn_def": "乞丐",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a poor person who lives by asking peers for money.",
        "cn_def": "乞丐"
      }
    ]
  },
  "beg": {
    "pos": "v.",
    "en_def": "to request cash or help in a desperate manner.",
    "cn_def": "乞討、懇求",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to request cash or help in a desperate manner.",
        "cn_def": "乞討、懇求"
      }
    ]
  },
  "begged for": {
    "pos": "phr.",
    "en_def": "to ask with massive emotion for mercy or food.",
    "cn_def": "乞求…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to ask with massive emotion for mercy or food.",
        "cn_def": "乞求…"
      }
    ]
  },
  "beg for": {
    "pos": "phr.",
    "en_def": "to ask with massive emotion for mercy or food.",
    "cn_def": "乞求…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to ask with massive emotion for mercy or food.",
        "cn_def": "乞求…"
      }
    ]
  },
  "charity": {
    "pos": "n.",
    "en_def": "an organization set up to give free help to needy peers.",
    "cn_def": "慈善機構",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an organization set up to give free help to needy peers.",
        "cn_def": "慈善機構"
      },
      {
        "pos": "n.",
        "en_def": "the act of giving funds or kindness to others.",
        "cn_def": "慈善、施捨、仁慈"
      }
    ]
  },
  "give to charity": {
    "pos": "phr.",
    "en_def": "to donate excess assets to support poor teams.",
    "cn_def": "捐助慈善",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to donate excess assets to support poor teams.",
        "cn_def": "捐助慈善"
      }
    ]
  },
  "charity work": {
    "pos": "phr.",
    "en_def": "active duties completed to support local poor lines.",
    "cn_def": "慈善工作",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "active duties completed to support local poor lines.",
        "cn_def": "慈善工作"
      }
    ]
  },
  "charitable": {
    "pos": "adj.",
    "en_def": "generous in giving help or tracking kind minds.",
    "cn_def": "慈善的、仁慈的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "generous in giving help or tracking kind minds.",
        "cn_def": "慈善的、仁慈的"
      }
    ]
  },
  "needy": {
    "pos": "adj.",
    "en_def": "poor; lacking essential food, clothes, or support.",
    "cn_def": "貧困的、生活匱乏的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "poor; lacking essential food, clothes, or support.",
        "cn_def": "貧困的、生活匱乏的"
      }
    ]
  },
  "needy families": {
    "pos": "phr.",
    "en_def": "family circles with limited revenue or assets.",
    "cn_def": "貧困家庭",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "family circles with limited revenue or assets.",
        "cn_def": "貧困家庭"
      }
    ]
  },
  "the needy": {
    "pos": "n.",
    "en_def": "all citizens currently dealing with deep poverty.",
    "cn_def": "窮人、生活匱乏者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "all citizens currently dealing with deep poverty.",
        "cn_def": "窮人、生活匱乏者"
      }
    ]
  },
  "need": {
    "pos": "v.",
    "en_def": "a requirement for an object or to want an asset.",
    "cn_def": "需要",
    "combined": [
      {
        "pos": "v.",
        "en_def": "a requirement for an object or to want an asset.",
        "cn_def": "需要"
      }
    ]
  },
  "in terms of": {
    "pos": "phr.",
    "en_def": "in relation to a specific feature or angle.",
    "cn_def": "就…而言、在…方面",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "in relation to a specific feature or angle.",
        "cn_def": "就…而言、在…方面"
      }
    ]
  },
  "in terms of weather": {
    "pos": "phr.",
    "en_def": "focusing strictly on climate quality during review.",
    "cn_def": "就天氣而言",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "focusing strictly on climate quality during review.",
        "cn_def": "就天氣而言"
      }
    ]
  },
  "found": {
    "pos": "v.",
    "en_def": "to establish or start a company or institution.",
    "cn_def": "創立、創辦、奠定",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to establish or start a company or institution.",
        "cn_def": "創立、創辦、奠定"
      }
    ]
  },
  "found a company": {
    "pos": "phr.",
    "en_def": "to invest initial cash to launch a new firm.",
    "cn_def": "創立公司",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to invest initial cash to launch a new firm.",
        "cn_def": "創立公司"
      }
    ]
  },
  "school was founded": {
    "pos": "phr.",
    "en_def": "an academy set up its active campus via an agent.",
    "cn_def": "學校被創立",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an academy set up its active campus via an agent.",
        "cn_def": "學校被創立"
      }
    ]
  },
  "foundation": {
    "pos": "n.",
    "en_def": "the baseline base or the start of an agency.",
    "cn_def": "基金會、基礎、地基",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the baseline base or the start of an agency.",
        "cn_def": "基金會、基礎、地基"
      }
    ]
  },
  "founder": {
    "pos": "n.",
    "en_def": "the central individual who launched an organization.",
    "cn_def": "創辦人、奠基者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the central individual who launched an organization.",
        "cn_def": "創辦人、奠基者"
      }
    ]
  },
  "advertising": {
    "pos": "n.",
    "en_def": "the corporate business of making items popular.",
    "cn_def": "廣告業、廣告投放",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the corporate business of making items popular.",
        "cn_def": "廣告業、廣告投放"
      }
    ]
  },
  "working in advertising": {
    "pos": "phr.",
    "en_def": "to hold a job position designing market ads.",
    "cn_def": "從事廣告業",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to hold a job position designing market ads.",
        "cn_def": "從事廣告業"
      }
    ]
  },
  "work in advertising": {
    "pos": "phr.",
    "en_def": "to hold a job position designing market ads.",
    "cn_def": "從事廣告業",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to hold a job position designing market ads.",
        "cn_def": "從事廣告業"
      }
    ]
  },
  "advertising medium": {
    "pos": "phr.",
    "en_def": "the specific pipeline used to carry promotional lines.",
    "cn_def": "廣告媒介",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the specific pipeline used to carry promotional lines.",
        "cn_def": "廣告媒介"
      }
    ]
  },
  "online advertising": {
    "pos": "phr.",
    "en_def": "promotional banners run across internet spots.",
    "cn_def": "網路廣告",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "promotional banners run across internet spots.",
        "cn_def": "網路廣告"
      }
    ]
  },
  "advertise": {
    "pos": "v.",
    "en_def": "to tell the public about a product to drive sales.",
    "cn_def": "登廣告、做宣傳",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to tell the public about a product to drive sales.",
        "cn_def": "登廣告、做宣傳"
      }
    ]
  },
  "advertisement": {
    "pos": "n.",
    "en_def": "a specific public note designed to move an item.",
    "cn_def": "廣告（簡稱ad）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a specific public note designed to move an item.",
        "cn_def": "廣告（簡稱ad）"
      }
    ]
  },
  "advertiser": {
    "pos": "n.",
    "en_def": "a corporate firm that pays cash to display ads.",
    "cn_def": "廣告商、廣告主",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a corporate firm that pays cash to display ads.",
        "cn_def": "廣告商、廣告主"
      }
    ]
  },
  "advertisers": {
    "pos": "n.",
    "en_def": "a corporate firm that pays cash to display ads.",
    "cn_def": "廣告商、廣告主",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a corporate firm that pays cash to display ads.",
        "cn_def": "廣告商、廣告主"
      }
    ]
  },
  "opportunity": {
    "pos": "n.",
    "en_def": "a chance to do something or achieve a major goal.",
    "cn_def": "機會、時機",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a chance to do something or achieve a major goal.",
        "cn_def": "機會、時機"
      }
    ]
  },
  "opportunity of a lifetime": {
    "pos": "phr.",
    "en_def": "an incredible open door that rarely repeats.",
    "cn_def": "一生一次的難得機會",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an incredible open door that rarely repeats.",
        "cn_def": "一生一次的難得機會"
      }
    ]
  },
  "take this opportunity": {
    "pos": "phr.",
    "en_def": "to actively use a moment to express state or thanks.",
    "cn_def": "藉此機會",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to actively use a moment to express state or thanks.",
        "cn_def": "藉此機會"
      }
    ]
  },
  "job opportunity": {
    "pos": "phr.",
    "en_def": "a corporate opening allowing you to apply for work.",
    "cn_def": "工作機會",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a corporate opening allowing you to apply for work.",
        "cn_def": "工作機會"
      }
    ]
  },
  "chance": {
    "pos": "n.",
    "en_def": "a casual opening or random luck factor.",
    "cn_def": "機會、機率",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a casual opening or random luck factor.",
        "cn_def": "機會、機率"
      }
    ]
  },
  "exact": {
    "pos": "adj.",
    "en_def": "completely correct or precise in every single digit.",
    "cn_def": "精確的、確切的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "completely correct or precise in every single digit.",
        "cn_def": "精確的、確切的"
      }
    ]
  },
  "exact amount": {
    "pos": "phr.",
    "en_def": "the specific currency cost matching a billing line.",
    "cn_def": "確切金額",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the specific currency cost matching a billing line.",
        "cn_def": "確切金額"
      }
    ]
  },
  "precise": {
    "pos": "adj.",
    "en_def": "highly accurate; focusing on meticulous limits.",
    "cn_def": "精準的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "highly accurate; focusing on meticulous limits.",
        "cn_def": "精準的"
      }
    ]
  },
  "not exactly": {
    "pos": "phr.",
    "en_def": "a phrase indicating a reply is partially false.",
    "cn_def": "不完全是、不見得",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a phrase indicating a reply is partially false.",
        "cn_def": "不完全是、不見得"
      }
    ]
  },
  "partner": {
    "pos": "n.",
    "en_def": "a person or firm you complete shared work with.",
    "cn_def": "夥伴、搭檔、合夥人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or firm you complete shared work with.",
        "cn_def": "夥伴、搭檔、合夥人"
      },
      {
        "pos": "v.",
        "en_def": "to join forces with another agency to do a project.",
        "cn_def": "合作、結為夥伴"
      }
    ]
  },
  "partner with": {
    "pos": "phr.",
    "en_def": "to form an official alliance with a separate firm.",
    "cn_def": "與…合作",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to form an official alliance with a separate firm.",
        "cn_def": "與…合作"
      }
    ]
  },
  "tennis partner": {
    "pos": "phr.",
    "en_def": "a peer who plays on your side of the court.",
    "cn_def": "網球拍檔",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a peer who plays on your side of the court.",
        "cn_def": "網球拍檔"
      }
    ]
  },
  "partnership": {
    "pos": "n.",
    "en_def": "an ongoing alliance relationship between units.",
    "cn_def": "合作關係、合夥企業",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an ongoing alliance relationship between units.",
        "cn_def": "合作關係、合夥企業"
      }
    ]
  },
  "assemble": {
    "pos": "v.",
    "en_def": "to come together or bring a group into one room.",
    "cn_def": "集合、聚集",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to come together or bring a group into one room.",
        "cn_def": "集合、聚集"
      },
      {
        "pos": "v.",
        "en_def": "to fit separate machine parts together to form a unit.",
        "cn_def": "組裝（機器等）"
      }
    ]
  },
  "assemble students": {
    "pos": "phr.",
    "en_def": "to herd pupils into a primary auditorium spot.",
    "cn_def": "集合學生",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to herd pupils into a primary auditorium spot.",
        "cn_def": "集合學生"
      }
    ]
  },
  "assemble outside": {
    "pos": "phr.",
    "en_def": "to form active lines out on an open sports field.",
    "cn_def": "在室外集合",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to form active lines out on an open sports field.",
        "cn_def": "在室外集合"
      }
    ]
  },
  "assemble parts": {
    "pos": "phr.",
    "en_def": "to construct raw imports into finished products.",
    "cn_def": "組裝零件",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to construct raw imports into finished products.",
        "cn_def": "組裝零件"
      }
    ]
  },
  "assembly line": {
    "pos": "phr.",
    "en_def": "a factory setup where items move past workers.",
    "cn_def": "流水線、組裝線",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a factory setup where items move past workers.",
        "cn_def": "流水線、組裝線"
      }
    ]
  },
  "suitable": {
    "pos": "adj.",
    "en_def": "right or acceptable for a specific scenario.",
    "cn_def": "合適的、適宜的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "right or acceptable for a specific scenario.",
        "cn_def": "合適的、適宜的"
      }
    ]
  },
  "suitable clothing": {
    "pos": "phr.",
    "en_def": "garments that perfectly match current weather.",
    "cn_def": "合適的衣著",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "garments that perfectly match current weather.",
        "cn_def": "合適的衣著"
      }
    ]
  },
  "suitable for": {
    "pos": "phr.",
    "en_def": "tracking matching specifications for a dynamic activity.",
    "cn_def": "適合…的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "tracking matching specifications for a dynamic activity.",
        "cn_def": "適合…的"
      }
    ]
  },
  "suit": {
    "pos": "v.",
    "en_def": "to look right on someone or match their needs.",
    "cn_def": "適合、相配",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to look right on someone or match their needs.",
        "cn_def": "適合、相配"
      }
    ]
  },
  "suits": {
    "pos": "v.",
    "en_def": "to look right on someone or match their needs.",
    "cn_def": "適合、相配",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to look right on someone or match their needs.",
        "cn_def": "適合、相配"
      }
    ]
  },
  "permission": {
    "pos": "n.",
    "en_def": "the official token or nod allowing an action.",
    "cn_def": "許可、准許",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the official token or nod allowing an action.",
        "cn_def": "許可、准許"
      }
    ]
  },
  "need permission": {
    "pos": "phr.",
    "en_def": "requiring a signature from a parent before transit.",
    "cn_def": "需要許可",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "requiring a signature from a parent before transit.",
        "cn_def": "需要許可"
      }
    ]
  },
  "permit": {
    "pos": "v.",
    "en_def": "to allow an action to play out legally.",
    "cn_def": "允許、准許",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to allow an action to play out legally.",
        "cn_def": "允許、准許"
      },
      {
        "pos": "n.",
        "en_def": "a printed paper license showing an access right.",
        "cn_def": "許可證、執照"
      }
    ]
  },
  "prohibition": {
    "pos": "n.",
    "en_def": "an official rule blocking an entry or activity.",
    "cn_def": "禁止、禁令",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an official rule blocking an entry or activity.",
        "cn_def": "禁止、禁令"
      }
    ]
  },
  "authority": {
    "pos": "n.",
    "en_def": "the corporate group in power; a government body.",
    "cn_def": "當局、官方（常用複數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the corporate group in power; a government body.",
        "cn_def": "當局、官方（常用複數）"
      },
      {
        "pos": "n.",
        "en_def": "an expert packed with massive specialized insight.",
        "cn_def": "權威、專家"
      }
    ]
  },
  "the authorities": {
    "pos": "phr.",
    "en_def": "the official police or management handling crime.",
    "cn_def": "警方、官方、當局",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the official police or management handling crime.",
        "cn_def": "警方、官方、當局"
      }
    ]
  },
  "authority on history": {
    "pos": "phr.",
    "en_def": "an ultimate academic source for an era track.",
    "cn_def": "歷史權威",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an ultimate academic source for an era track.",
        "cn_def": "歷史權威"
      }
    ]
  },
  "poster": {
    "pos": "n.",
    "en_def": "a large printed picture displayed on a wall.",
    "cn_def": "海報",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large printed picture displayed on a wall.",
        "cn_def": "海報"
      }
    ]
  },
  "host": {
    "pos": "v.",
    "en_def": "to organize or provide the space for a social party.",
    "cn_def": "主辦、主持、招待",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to organize or provide the space for a social party.",
        "cn_def": "主辦、主持、招待"
      },
      {
        "pos": "n.",
        "en_def": "a person who receives and takes care of guests.",
        "cn_def": "主人、主持人"
      }
    ]
  },
  "host parties": {
    "pos": "phr.",
    "en_def": "to throw a celebration inside your home space.",
    "cn_def": "舉辦派對",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to throw a celebration inside your home space.",
        "cn_def": "舉辦派對"
      }
    ]
  },
  "party's host": {
    "pos": "phr.",
    "en_def": "the central manager standing at the arrival door.",
    "cn_def": "派對主人",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the central manager standing at the arrival door.",
        "cn_def": "派對主人"
      }
    ]
  },
  "play host to": {
    "pos": "phr.",
    "en_def": "acting as the explicit city welcoming an event.",
    "cn_def": "主辦…、充當…的主人",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "acting as the explicit city welcoming an event.",
        "cn_def": "主辦…、充當…的主人"
      }
    ]
  },
  "hostess": {
    "pos": "n.",
    "en_def": "a female agent welcoming arrivals at a dinner.",
    "cn_def": "女主人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a female agent welcoming arrivals at a dinner.",
        "cn_def": "女主人"
      }
    ]
  },
  "poverty": {
    "pos": "n.",
    "en_def": "the state of being extremely poor without resources.",
    "cn_def": "貧窮、貧困",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being extremely poor without resources.",
        "cn_def": "貧窮、貧困"
      }
    ]
  },
  "live in poverty": {
    "pos": "phr.",
    "en_def": "spending daily cycles without basic food or safe beds.",
    "cn_def": "生活在貧困中",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "spending daily cycles without basic food or safe beds.",
        "cn_def": "生活在貧困中"
      }
    ]
  },
  "impoverish": {
    "pos": "v.",
    "en_def": "to make an active region or peer extremely poor.",
    "cn_def": "使貧困",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make an active region or peer extremely poor.",
        "cn_def": "使貧困"
      }
    ]
  },
  "impoverished": {
    "pos": "adj.",
    "en_def": "describing a town or household hit by heavy loss.",
    "cn_def": "貧困的、赤貧的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "describing a town or household hit by heavy loss.",
        "cn_def": "貧困的、赤貧的"
      }
    ]
  },
  "wealth": {
    "pos": "n.",
    "en_def": "a massive bundle of capital or available assets.",
    "cn_def": "財富",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a massive bundle of capital or available assets.",
        "cn_def": "財富"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
