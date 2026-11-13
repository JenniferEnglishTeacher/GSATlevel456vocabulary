// Unit 7 Quiz Data: transport – monumental
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Basic U7 - transport – monumental",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "transport",
    "pos": "v. / n.",
    "cn_def": "運輸；運送",
    "en_def": "to carry goods or people from one place to another.",
    "sentence": "The large cargo ships are specifically designed to safely {{BLANK}} thousands of heavy containers across the deep ocean.",
    "cn": "這些大型貨輪被專門設計來安全地跨越深海運輸數千個沉重的貨櫃。"
  },
  {
    "word": "transportation",
    "pos": "n.",
    "cn_def": "運輸；交通工具",
    "en_def": "the action of transporting someone or something or the process of being transported.",
    "sentence": "Because she doesn't own a car, Lisa relies entirely on public {{BLANK}} to get to school every single morning.",
    "cn": "因為她沒有自己的車，麗莎每天早上完全依賴大眾運輸去上學。"
  },
  {
    "word": "public transportation",
    "pos": "phr.",
    "cn_def": "大眾運輸",
    "en_def": "buses, trains, and other forms of transport that are available to the public.",
    "sentence": "If you want to effectively reduce your daily carbon footprint, you should definitely start taking {{BLANK}} to work.",
    "cn": "如果你想有效地減少你每天的碳足跡，你絕對應該開始搭乘大眾運輸去上班。"
  },
  {
    "word": "means of transportation",
    "pos": "n.",
    "cn_def": "交通工具",
    "en_def": "any system, vehicle, or method used for moving passengers or goods from one geographic location to another",
    "sentence": "Utilizing public {{BLANK}} like trains and buses can significantly minimize carbon emissions in crowded cities.",
    "cn": "利用火車和公車等大眾交通工具可以顯著減少擁擠城市的碳排放。"
  },
  {
    "word": "traffic congestion",
    "pos": "n.",
    "cn_def": "交通堵塞",
    "en_def": "vehicles moving on a road or public highway.",
    "sentence": "There was a {{BLANK}} on the highway today because a terrible accident blocked two major lanes.",
    "cn": "今天高速公路上有大量的車流，因為一場可怕的車禍堵住了兩個主要車道。"
  },
  {
    "word": "vehicles",
    "pos": "n.",
    "cn_def": "車輛；手段（媒介）",
    "en_def": "a thing used for transporting people or goods, especially on land.",
    "sentence": "There are far too many heavy {{BLANK}} on the road today, and that is rapidly causing the city's air quality to become significantly worse.",
    "cn": "今天路上的重型車輛實在太多了，而這正迅速導致城市的空氣品質變得明顯更糟。"
  },
  {
    "word": "electric vehicle",
    "pos": "phr.",
    "cn_def": "電動車",
    "en_def": "a vehicle which uses one or more electric motors for propulsion.",
    "sentence": "To help save the planet, the government is currently offering generous discounts to anyone who buys a clean, new {{BLANK}}.",
    "cn": "為了幫助拯救地球，政府目前正向任何購買乾淨全新電動車的人提供慷慨的折扣。"
  },
  {
    "word": "private vehicle",
    "pos": "n.",
    "cn_def": "私人車輛",
    "en_def": "a personal car, motorcycle, or transport device owned by an individual rather than used for public service",
    "sentence": "The smart apartment complex features a large automated garage designated specifically for each resident's {{BLANK}}.",
    "cn": "這棟智慧公寓大樓擁有一個大型自動化車庫，專門供每位居民的私人車輛停放。"
  },
  {
    "word": "vehicle for",
    "pos": "phr.",
    "cn_def": "達成...的手段/媒介",
    "en_def": "a thing used to express, embody, or fulfill something.",
    "sentence": "Most hardworking students intelligently view a university degree as an essential {{BLANK}} eventually landing a highly successful and well-paying job.",
    "cn": "大多數努力的學生聰明地將大學學位視為最終獲得一份非常成功且高薪工作的重要手段。"
  },
  {
    "word": "departed from",
    "pos": "phr.",
    "cn_def": "從...出發/離開",
    "en_def": "to leave a specific place.",
    "sentence": "I unfortunately didn't meet Jack in person today because he had completely {{BLANK}} his home very early this morning.",
    "cn": "我今天不幸地沒有親自見到傑克，因為他今天一大早就完全從家裡離開了。"
  },
  {
    "word": "depart for",
    "pos": "phr.",
    "cn_def": "出發前往...",
    "en_def": "to leave in order to go to a specific destination.",
    "sentence": "The ambitious boss is urgently packing her bags right now and will officially {{BLANK}} Tokyo in less than four hours.",
    "cn": "雄心勃勃的老闆現在正緊急打包行李，並將在不到四小時內正式出發前往東京。"
  },
  {
    "word": "departure",
    "pos": "n.",
    "cn_def": "離開；出發",
    "en_def": "the action of leaving, typically to start a journey.",
    "sentence": "The angry passengers complained when they discovered that the busy train's time of {{BLANK}} had been unexpectedly delayed by thirty minutes.",
    "cn": "憤怒的乘客在發現這列繁忙火車的出發時間出乎意料地延誤了三十分鐘時，提出了抱怨。"
  },
  {
    "word": "arrive at",
    "pos": "phr.",
    "cn_def": "抵達、到達（特定地點/小地方）",
    "en_def": "To reach a specific building, small place, or precise location.",
    "sentence": "The tour bus will {{BLANK}} the hotel entrance at exactly eight o'clock, so please make sure you are waiting in the lobby.",
    "cn": "觀光巴士將在八點整抵達飯店門口，所以請確保您在大廳等候。"
  },
  {
    "word": "arrived in",
    "pos": "phr.",
    "cn_def": "抵達、到達（城市/國家/大地方）",
    "en_def": "To reach a large geographic area, such as a city, country, or town.",
    "sentence": "After a very long and exhausting flight across the ocean, the exchange students finally {{BLANK}} Tokyo to begin their winter study program.",
    "cn": "在經歷了一趟跨越海洋、漫長且令人筋疲力盡的飛行後，交換學生們終於抵達了東京，開始他們的冬季學習計畫。"
  },
  {
    "word": "arrival",
    "pos": "n.",
    "cn_def": "抵達",
    "en_def": "the action or process of arriving.",
    "sentence": "The excited children eagerly waited at the large airport gate for the safe {{BLANK}} of their beloved grandparents from Canada.",
    "cn": "興奮的孩子們在大型機場登機門熱切地等待著他們深愛的祖父母從加拿大安全抵達。"
  },
  {
    "word": "estimated time of arrival",
    "pos": "phr.",
    "cn_def": "預計抵達時間",
    "en_def": "The time when a vehicle, plane, or person is expected to reach a destination.",
    "sentence": "Because the heavy snowstorm delayed our train, our {{BLANK}} has been changed from 6:00 p.m. to 8:30 p.m.",
    "cn": "因為大暴風雪延誤了我們的火車，我們的預計抵達時間已經從晚上六點更改為晚上八點半。"
  },
  {
    "word": "create",
    "pos": "v.",
    "cn_def": "創造；建立",
    "en_def": "to bring something into existence.",
    "sentence": "The talented chef wanted to {{BLANK}} a completely unique and delicious menu for the grand opening of his restaurant.",
    "cn": "這位才華洋溢的廚師想為他餐廳的盛大開幕創造一份完全獨特且美味的菜單。"
  },
  {
    "word": "creation",
    "pos": "n.",
    "cn_def": "創造；發明",
    "en_def": "the action or process of bringing something into existence.",
    "sentence": "The brilliant {{BLANK}} of the telephone made global communication much more convenient than anyone could have ever imagined.",
    "cn": "電話的卓越發明使全球通訊變得比任何人能想像的還要方便許多。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的",
    "en_def": "relating to or involving the imagination or original ideas.",
    "sentence": "The marketing team came up with a highly {{BLANK}} advertising campaign that quickly caught the attention of young consumers.",
    "cn": "行銷團隊提出了一個極具有創意的廣告活動，迅速引起了年輕消費者的注意。"
  },
  {
    "word": "creativity",
    "pos": "n.",
    "cn_def": "創造力",
    "en_def": "the use of the imagination or original ideas.",
    "sentence": "Teachers should always encourage their young students to express their natural {{BLANK}} through engaging art and music projects.",
    "cn": "老師應該總是鼓勵年輕學生透過參與藝術和音樂專案來表達他們天生的創造力。"
  },
  {
    "word": "creature",
    "pos": "n.",
    "cn_def": "生物、動物",
    "en_def": "Any living being, such as an animal or insect, but not a plant.",
    "sentence": "Deep in the ocean, scientists discovered a strange {{BLANK}} that can glow in the dark to attract its food.",
    "cn": "在海洋深處，科學家們發現了一種能在黑暗中發光的奇特生物，以此來吸引牠的食物。"
  },
  {
    "word": "mythical creature",
    "pos": "phr.",
    "cn_def": "神話生物、傳說中的生物",
    "en_def": "An imaginary animal or being from ancient stories and legends.",
    "sentence": "The dragon is a famous {{BLANK}} in many cultures, often representing power and wisdom in Eastern folklore.",
    "cn": "龍在許多文化中都是著名的神話生物，在東方民間傳說中通常代表著力量與智慧。"
  },
  {
    "word": "content creator",
    "pos": "n.",
    "cn_def": "內容創作者",
    "en_def": "A person who invents, makes, or produces informational knowledge",
    "sentence": "The talented {{BLANK}} spent three days editing his travel video because he wanted to give his followers a high-quality experience.",
    "cn": "這位有才華的內容創作者花了三天時間剪輯他的旅遊影片，因為他想給他的追隨者們高質量的體驗。"
  },
  {
    "word": "recreation",
    "pos": "n.",
    "cn_def": "娛樂；休閒",
    "en_def": "activity done for enjoyment when one is not working.",
    "sentence": "After a long and stressful week at the busy office, John usually plays golf for his weekend {{BLANK}}.",
    "cn": "在繁忙的辦公室度過漫長且壓力大的一週後，約翰通常打高爾夫球作為他的週末休閒。"
  },
  {
    "word": "recreational",
    "pos": "adj.",
    "cn_def": "娛樂的、休閒的",
    "en_def": "Done for enjoyment or relaxation when you are not working.",
    "sentence": "The city government built a new park with many {{BLANK}} facilities, such as basketball courts and walking paths, for local residents.",
    "cn": "市政府建造了一座擁有許多休閒設施（例如籃球場和散步小徑）的新公園，供當地居民使用。"
  },
  {
    "word": "segment",
    "pos": "n. / v.",
    "cn_def": "部分；分割",
    "en_def": "each of the parts into which something is or may be divided.",
    "sentence": "A surprisingly small {{BLANK}} of this country's total population has unfortunately caught the terrible and highly infectious disease.",
    "cn": "令人驚訝的是，這個國家總人口中有一小部分不幸感染了這種可怕且高度傳染性的疾病。"
  },
  {
    "word": "market segment",
    "pos": "phr.",
    "cn_def": "市場區隔",
    "en_def": "a group of people who share one or more common characteristics for marketing purposes.",
    "sentence": "Our new cosmetic product is specifically designed to strongly appeal to a younger, more fashion-conscious {{BLANK}}.",
    "cn": "我們的新化妝品專門設計來強烈吸引更年輕、更具時尚意識的市場區隔。"
  },
  {
    "word": "a small segment of",
    "pos": "phr.",
    "cn_def": "...的一部分",
    "en_def": "a part or section of a whole.",
    "sentence": "Only {{BLANK}} the movie was actually filmed outdoors, while the rest was completed in a studio.",
    "cn": "這部電影只有一小部分實際上是在戶外拍攝的，而其餘的都是在攝影棚內完成的。"
  },
  {
    "word": "dynasty",
    "pos": "n.",
    "cn_def": "朝代；王朝",
    "en_def": "a line of hereditary rulers of a country.",
    "sentence": "The knowledgeable historian explained that these incredibly beautiful paintings are originally from the powerful Ming {{BLANK}}.",
    "cn": "這位知識淵博的歷史學家解釋說，這些極其美麗的畫作最初來自強大的明朝（代）。"
  },
  {
    "word": "complete",
    "pos": "v.",
    "cn_def": "完成",
    "en_def": "to finish making or doing",
    "sentence": "You must carefully {{BLANK}} all the required safety training courses before you are officially allowed to operate the heavy machinery.",
    "cn": "在你被正式允許操作重型機械之前，你必須仔細完成所有必要的安全訓練課程。"
  },
  {
    "word": "complete",
    "pos": "adj.",
    "cn_def": "完全的；完整的",
    "en_def": "having all the necessary parts, elements, or steps, or being perfect and total in degree",
    "sentence": "The software engineering team managed to achieve {{BLANK}} control over the database after implementing the new automated security frameworks.",
    "cn": "在實施新的自動化安全架構後，軟體工程團隊成功實現了對資料庫的完全控制。"
  },
  {
    "word": "completion",
    "pos": "n.",
    "cn_def": "完成；完工",
    "en_def": "the action or process of finishing something.",
    "sentence": "Because of numerous unexpected delays, the massive building project took exactly ten years to finally achieve full {{BLANK}}.",
    "cn": "由於許多意想不到的延誤，這個龐大的建築專案花了整整十年才最終達成完全完工。"
  },
  {
    "word": "completely",
    "pos": "adv.",
    "cn_def": "完全地",
    "en_def": "totally; utterly.",
    "sentence": "After hiking through the dense jungle for eight hours without resting, the exhausted explorers were {{BLANK}} out of energy.",
    "cn": "在茂密的叢林中徒步八小時沒有休息後，疲憊的探險家完全地耗盡了精力。"
  },
  {
    "word": "achieve completion",
    "pos": "phr.",
    "cn_def": "達成完工/完成",
    "en_def": "to successfully finish a project or task.",
    "sentence": "The team worked diligently over the weekend so that the important software update could {{BLANK}} before the deadline.",
    "cn": "團隊在週末勤奮地工作，以便這個重要的軟體更新能在截止日期前達成完工。"
  },
  {
    "word": "thorough",
    "pos": "adj.",
    "cn_def": "徹底的；詳盡的",
    "en_def": "performed or written with great care, attention to detail, and a focus on leaving nothing incomplete",
    "sentence": "The senior researcher requested a {{BLANK}} evaluation of the participants' data to ensure the methodology was completely rigorous.",
    "cn": "高級研究員要求對參與者的數據進行徹底的評估，以確保研究方法完全嚴謹。"
  },
  {
    "word": "thoroughly",
    "pos": "adv.",
    "cn_def": "徹底地；詳盡地",
    "en_def": "in a detailed, careful, and comprehensive manner that addresses every single part or aspect",
    "sentence": "The medical board checked the patient's records {{BLANK}} before authorizing the chief doctor to perform the major heart surgery.",
    "cn": "醫療委員會在授權主治醫生進行重大心臟手術之前，徹底地檢查了患者的紀錄。"
  },
  {
    "word": "milestone",
    "pos": "n.",
    "cn_def": "里程碑",
    "en_def": "an action or event marking a significant change or stage in development.",
    "sentence": "Our tech company reached an incredible {{BLANK}} last year with the successful sale of our one millionth electronic product.",
    "cn": "我們的科技公司去年成功售出第一百萬件電子產品，達到了一個令人難以置信的里程碑。"
  },
  {
    "word": "reach a major milestone",
    "pos": "phr.",
    "cn_def": "達到里程碑",
    "en_def": "to achieve a significant stage in a process.",
    "sentence": "The dedicated medical researchers will {{BLANK}} if they can finally discover a cure for the disease.",
    "cn": "如果這些專注的醫學研究人員最終能發現該疾病的療法，他們將達到一個重大的里程碑。"
  },
  {
    "word": "historic milestone",
    "pos": "phr.",
    "cn_def": "歷史性的里程碑",
    "en_def": "an event of great historical importance.",
    "sentence": "Landing the first human on the surface of the moon was a {{BLANK}} that completely changed space exploration forever.",
    "cn": "讓第一個人類登陸月球表面是一個徹底永遠改變太空探索的歷史性的里程碑。"
  },
  {
    "word": "landmark",
    "pos": "n.",
    "cn_def": "地標",
    "en_def": "A famous building or object that is easily recognized and helps you know where you are.",
    "sentence": "Taipei 101 is a famous {{BLANK}} in Taiwan, and thousands of tourists visit it every year to enjoy the beautiful city view.",
    "cn": "台北101是台灣著名的地標，每年都有數千名遊客造訪，來欣賞美麗的城市景觀。"
  },
  {
    "word": "landmark",
    "pos": "adj.",
    "cn_def": "里程碑式的、具重大歷史意義的",
    "en_def": "Extremely important and marking a major change or turning point in history.",
    "sentence": "The government signed a {{BLANK}} agreement yesterday to reduce carbon emissions, which experts believe will greatly protect the environment.",
    "cn": "政府昨天簽署了一項具重大歷史意義的協議來減少碳排放，專家認為這將大大保護環境。"
  },
  {
    "word": "tourist destination",
    "pos": "phr.",
    "cn_def": "觀光勝地、旅遊目的地",
    "en_def": "A place that many people travel to for a vacation or holiday.",
    "sentence": "With its beautiful beaches and historic temples, Kyoto has become a popular {{BLANK}} for travelers from all over the world.",
    "cn": "憑藉其美麗的海灘和歷史悠久的寺廟，京都已成為來自世界各地旅客的熱門旅遊目的地。"
  },
  {
    "word": "tourist attraction",
    "pos": "phr.",
    "cn_def": "觀光景點、旅遊景點",
    "en_def": "A famous place that tourists like to visit, such as a museum, monument, or amusement park.",
    "sentence": "The Eiffel Tower is a world-famous {{BLANK}} that draws millions of visitors to Paris every single year.",
    "cn": "艾菲爾鐵塔是世界聞名的觀光景點，每年都吸引數百萬名遊客前往巴黎。"
  },
  {
    "word": "scene",
    "pos": "n.",
    "cn_def": "場景；景色",
    "en_def": "a sequence of continuous action in a play, movie, opera, or book; a landscape.",
    "sentence": "John unfortunately missed a highly crucial and dramatic {{BLANK}} in the movie when he quickly went to visit the crowded snack bar.",
    "cn": "當約翰迅速去擁擠的點心吧時，他不幸地錯過了電影中一個極其關鍵且戲劇性的場景。"
  },
  {
    "word": "crime scene",
    "pos": "n.",
    "cn_def": "犯罪現場",
    "en_def": "the specific geographic location where an illegal act, violence, or offense has historically occurred",
    "sentence": "The forensic investigators thoroughly examined the {{BLANK}} to collect valuable evidence before the military zone was closed.",
    "cn": "鑑識調查人員在軍事管制區關閉之前，徹底檢查了犯罪現場以蒐集寶貴的證據。"
  },
  {
    "word": "at the scene",
    "pos": "phr.",
    "cn_def": "在現場",
    "en_def": "being present right at the exact place where an event, accident, or specific incident occurred",
    "sentence": "The emergency medical technicians arrived quickly {{BLANK}} to provide immediate first aid to the domestic violence victims.",
    "cn": "緊急醫療技術人員迅速抵達現場，為家庭暴力受害者提供即時的急救。"
  },
  {
    "word": "scenery",
    "pos": "n.",
    "cn_def": "風景；景色",
    "en_def": "the natural features of a landscape considered in terms of their appearance.",
    "sentence": "Before we safely drive back to the busy city, let's stop the car and take a beautiful picture of this magnificent {{BLANK}}.",
    "cn": "在我們安全開車回到繁忙的城市之前，讓我們停下車，為這壯麗的風景拍張美麗的照片。"
  },
  {
    "word": "scenic",
    "pos": "adj.",
    "cn_def": "風景優美的",
    "en_def": "providing or relating to views of impressive or beautiful natural scenery.",
    "sentence": "The adventurous couple decided to slowly drive along the highly {{BLANK}} coastal route to fully enjoy the absolutely breathtaking ocean views.",
    "cn": "這對喜歡冒險的夫婦決定沿著極其風景優美的沿海路線慢慢開車，以充分欣賞絕對令人驚嘆的海景。"
  },
  {
    "word": "scenic spot",
    "pos": "phr.",
    "cn_def": "風景區、景點",
    "en_def": "A place known for its beautiful natural scenery, views, or landscapes.",
    "sentence": "The travel guide recommends visiting this hidden {{BLANK}} early in the morning so you can avoid the large crowds of noisy tourists.",
    "cn": "旅遊指南建議在一大早造訪這個隱藏的風景區（景點），這樣你就能避開大批吵鬧的遊客。"
  },
  {
    "word": "overlook the view",
    "pos": "v.",
    "cn_def": "俯瞰景色",
    "en_def": "take in the sight or natural scenery.",
    "sentence": "The expensive hotel suites at the top of the tall building {{BLANK}} of the crystal clear blue ocean.",
    "cn": "在高聳建築頂端的昂貴飯店套房們俯瞰清澈的深藍色海洋景色。"
  },
  {
    "word": "sightseeing",
    "pos": "n.",
    "cn_def": "觀光、遊覽",
    "en_def": "The activity of visiting famous or interesting places, especially as a tourist.",
    "sentence": "After finishing their important business meetings, the colleagues rented a car to do some {{BLANK}} in the historic city center before flying back home.",
    "cn": "結束了重要的商務會議後，同事們租了一輛車在歷史悠久的市中心進行一些觀光（遊覽），然後才搭機返家。"
  },
  {
    "word": "go sightseeing",
    "pos": "phr.",
    "cn_def": "去觀光、去遊覽",
    "en_def": "To travel around a place to see the interesting places and landmarks.",
    "sentence": "If the weather is sunny tomorrow morning, we can {{BLANK}} along the beautiful coastline and take plenty of memorable photos.",
    "cn": "如果明天早上天氣晴朗，我們可以沿著美麗的海岸線去觀光，並拍下許多值得紀念的照片。"
  },
  {
    "word": "field trip",
    "pos": "n.",
    "cn_def": "郊遊；出遊",
    "en_def": "a short journey made for pleasure, education, or physical exercise.",
    "sentence": "Every single year, the generous technology company takes all of its hardworking employees on an exciting weekend {{BLANK}} or an outing to the mountains.",
    "cn": "每一年，這家慷慨的科技公司都會帶領所有辛勤工作的員工到山裡進行一場刺激的週末出遊。"
  },
  {
    "word": "excursion",
    "pos": "n.",
    "cn_def": "（短途的）遠足、短途旅行",
    "en_def": "A short journey or trip, usually for pleasure or education.",
    "sentence": "Our high school organized a weekend {{BLANK}} to the famous museum so that students could see the historical artifacts in person.",
    "cn": "我們的高中組織了一次去著名博物館的週末短途旅行（遠足），以便學生們能夠親自看到那些歷史文物。"
  },
  {
    "word": "expedition",
    "pos": "n.",
    "cn_def": "遠征、探險、考察隊",
    "en_def": "A long and carefully organized journey, often for scientific research or exploration.",
    "sentence": "The scientists planned a dangerous {{BLANK}} to the Arctic to study how climate change is affecting the thick layers of ice.",
    "cn": "科學家們計畫了一次前往北極的危險考察（探險），以研究氣候變遷如何影響厚厚的冰層。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索、探險、勘查",
    "en_def": "To travel around a new place to learn about it or search for something.",
    "sentence": "When the tourists arrived at the ancient town, they decided to {{BLANK}} the narrow streets and discover hidden local shops.",
    "cn": "當遊客抵達這座古鎮時，他們決定去探索那些狹窄的街道並發掘隱藏的在地小店。"
  },
  {
    "word": "exploration",
    "pos": "n.",
    "cn_def": "探索、探測、研究",
    "en_def": "The act of traveling through a place to learn about it or discover something new.",
    "sentence": "Space {{BLANK}} requires a massive amount of money and advanced technology, but it can help humans find potential resources on other planets.",
    "cn": "太空探索需要大量的資金和先進的科技，但它可以幫助人類在其他星球上尋找潛在的資源。"
  },
  {
    "word": "commute",
    "pos": "v. / n.",
    "cn_def": "通勤",
    "en_def": "to travel some distance between one's home and place of work on a regular basis.",
    "sentence": "Because of the terrible traffic, it usually takes Jane more than an hour to {{BLANK}} between her school and home.",
    "cn": "因為糟糕的交通，珍通常要花一個多小時在她的學校和家之間通勤。"
  },
  {
    "word": "commuters",
    "pos": "n.",
    "cn_def": "通勤者",
    "en_def": "a person who travels some distance to work on a regular basis.",
    "sentence": "During the incredibly busy morning rush hour, thousands of tired {{BLANK}} pack tightly into the subway trains heading downtown.",
    "cn": "在極其繁忙的早晨尖峰時段，成千上萬疲憊的通勤者緊緊地擠進開往市中心的捷運列車中。"
  },
  {
    "word": "commuting",
    "pos": "n.",
    "cn_def": "每日通勤；上下班往返",
    "en_def": "the activity of traveling regularly between one's place of residence and place of work or study",
    "sentence": "Relying on public transit can significantly minimize the overall stress of daily {{BLANK}} during the busy morning rush hour.",
    "cn": "在 busy morning rush hour 時段，依賴大眾運輸工具可以顯著減少每日通勤的整體壓力。"
  },
  {
    "word": "telecommute",
    "pos": "v.",
    "cn_def": "遠距辦公",
    "en_def": "to work from home, making use of the internet, email, and the telephone.",
    "sentence": "Thanks to highly advanced digital technology, many employees can now smoothly {{BLANK}} from the comfort of their own living rooms.",
    "cn": "多虧了高度先進的數位科技，許多員工現在可以順利地在自己舒適的客廳裡遠距辦公。"
  },
  {
    "word": "fulfilled",
    "pos": "v.",
    "cn_def": "實現；履行",
    "en_def": "to bring to completion or reality; achieve or realize.",
    "sentence": "Unfortunately, lazy Bill never actually {{BLANK}} my simple request to completely clean out the dirty garage on Sunday afternoon.",
    "cn": "不幸的是，懶惰的比爾從未實際履行我在星期天下午徹底清理骯髒車庫的簡單要求。"
  },
  {
    "word": "fulfill the dream",
    "pos": "phr.",
    "cn_def": "實現夢想",
    "en_def": "to achieve something that one has long desired.",
    "sentence": "Next year, courageous Lisa confidently plans to travel across India to finally {{BLANK}} of seeing the world.",
    "cn": "明年，勇敢的麗莎自信地計畫穿越印度去旅行，以最終實現她看世界的夢想。"
  },
  {
    "word": "carry out the objective",
    "pos": "phr.",
    "cn_def": "實踐目標",
    "en_def": "to act upon and achieve one's aspirations.",
    "sentence": "It requires an immense amount of dedication and consistent hard work to successfully {{BLANK}} in reality.",
    "cn": "要在現實中成功實踐某人的目標，需要大量的奉獻精神和持續的努力工作。"
  },
  {
    "word": "fulfilling",
    "pos": "adj.",
    "cn_def": "令人滿足的；有成就感的",
    "en_def": "making someone satisfied or happy because of fully developing their abilities.",
    "sentence": "Teaching young children how to read and write is a highly {{BLANK}} career that brings her a lot of daily joy.",
    "cn": "教導幼童如何閱讀和寫作是一份高度有成就感的職業，每天為她帶來許多快樂。"
  },
  {
    "word": "unfulfilled",
    "pos": "adj.",
    "cn_def": "未實現的",
    "en_def": "not carried out or brought to completion.",
    "sentence": "Despite achieving massive financial success, the wealthy businessman still felt deeply {{BLANK}} because he never pursued his artistic passions.",
    "cn": "儘管獲得了巨大的財務成功，這位富有的商人仍然感到深深的未實現的（不滿足的），因為他從未追求他的藝術熱情。"
  },
  {
    "word": "fulfillment",
    "pos": "n.",
    "cn_def": "實現；滿足感",
    "en_def": "the achievement of something desired, promised, or predicted.",
    "sentence": "After years of intense study and hard work, passing the medical exam brought him a deep sense of personal {{BLANK}}.",
    "cn": "經過多年的密集學習和努力工作，通過醫學考試為他帶來了深深的個人滿足感。"
  },
  {
    "word": "scenic spot",
    "pos": "phr.",
    "cn_def": "風景區、景點",
    "en_def": "A place known for its beautiful natural scenery, views, or landscapes.",
    "sentence": "We stopped at a quiet {{BLANK}} along the mountain highway to take pictures of the breathtaking green valley below.",
    "cn": "我們在山區公路旁一個安靜的風景區停了下來，拍下下方令人屏息的綠色山谷照片。"
  },
  {
    "word": "a sense of fulfillment",
    "pos": "phr.",
    "cn_def": "滿足感、成就感",
    "en_def": "A feeling of happiness and deep satisfaction because you are doing something meaningful or useful.",
    "sentence": "Volunteering at the local animal shelter gives Chloe {{BLANK}} because she loves helping helpless dogs find new homes.",
    "cn": "在當地動物庇護所當志工帶給克洛伊一種滿足感，因為她喜歡幫助無助的狗狗找到新家。"
  },
  {
    "word": "a sense of achievement",
    "pos": "phr.",
    "cn_def": "成就感",
    "en_def": "A proud and happy feeling when you successfully complete something difficult through effort.",
    "sentence": "After studying hard for several months, passing the advanced English exam gave Leo {{BLANK}} that made his parents very proud.",
    "cn": "在努力讀書幾個月之後，通過高級英文考試給了里歐一種成就感，這讓他的父母感到非常自豪。"
  },
  {
    "word": "a sense of accomplishment",
    "pos": "phr.",
    "cn_def": "成就感",
    "en_def": "A feeling of satisfaction from finishing a specific task or reaching a major goal.",
    "sentence": "Completing the twenty-kilometer marathon gave the young runner {{BLANK}}, even though his legs were extremely sore and tired.",
    "cn": "完成這場二十公里的馬拉松給了這位年輕跑者一種成就感，儘管他的雙腿非常酸痛且疲憊。"
  },
  {
    "word": "timber",
    "pos": "n.",
    "cn_def": "木材",
    "en_def": "wood prepared for use in building and carpentry.",
    "sentence": "Because it has massive tropical forests, high-quality {{BLANK}} remains one of Brazil's biggest and most profitable international exports.",
    "cn": "因為擁有巨大的熱帶森林，高品質的木材仍然是巴西最大、最賺錢的國際出口產品之一。"
  },
  {
    "word": "lumber",
    "pos": "n.",
    "cn_def": "木材（尤指鋸好的）",
    "en_def": "timber sawn into rough planks or otherwise partly prepared.",
    "sentence": "My father happily bought a large amount of sturdy {{BLANK}} from the hardware store in order to build a beautiful wooden porch.",
    "cn": "我父親高興地從五金行買了大量堅固的木材，為了建造一個美麗的木製門廊。"
  },
  {
    "word": "logs",
    "pos": "n.",
    "cn_def": "圓木；原木",
    "en_def": "a part of the trunk or a large branch of a tree that has fallen or been cut off.",
    "sentence": "The strong lumberjacks worked tirelessly all day to efficiently transport these massive {{BLANK}} to the factory to safely make paper.",
    "cn": "強壯的伐木工人不知疲倦地工作了一整天，有效率地將這些巨大的圓木運送到工廠去安全地造紙。"
  },
  {
    "word": "express",
    "pos": "n./adj.",
    "cn_def": "快遞；快捷的",
    "en_def": "a rapid and efficient postal or delivery service designed to transport packages or goods very quickly",
    "sentence": "Utilizing the international {{BLANK}} service allowed the ambitious entrepreneur to deliver the portable devices to global clients within 48 hours.",
    "cn": "利用國際快遞服務，讓這位雄心勃勃的企業家得以在 48 小時內將便攜式裝置送達全球客戶手中。"
  },
  {
    "word": "freight",
    "pos": "n.",
    "cn_def": "貨物；貨運",
    "en_def": "goods transported in bulk by truck, train, ship, or aircraft.",
    "sentence": "The experienced logistics manager explained that ground {{BLANK}} generally takes exactly twice the amount of time as flying things by air.",
    "cn": "經驗豐富的物流經理解釋說，陸路貨運通常需要整整兩倍於空運物品的時間。"
  },
  {
    "word": "cargo",
    "pos": "n.",
    "cn_def": "（大型交通工具裝載的）貨物",
    "en_def": "goods or merchandise carried on a large vehicle, such as a commercial ship, aircraft, or motor vehicle",
    "sentence": "The massive container ship slowly arrived at the port, carrying tons of valuable {{BLANK}} from the international technology corporation.",
    "cn": "這艘巨大的貨櫃船緩慢抵達港口，載著來自這家國際科技公司價值不菲的貨物。"
  },
  {
    "word": "harbor",
    "pos": "n.",
    "cn_def": "港灣；港口",
    "en_def": "a sheltered area of water next to the land where commercial ships or private boats can safely anchor",
    "sentence": "The experienced captain carefully steered the large ocean vessel into the peaceful {{BLANK}} before the severe winter storm arrived.",
    "cn": "在嚴重的冬季暴風雨來臨之前，經驗豐富的船長小心翼翼地將這艘大型海洋船隻駛入寧靜的港灣。"
  },
  {
    "word": "port",
    "pos": "n.",
    "cn_def": "港口；港市",
    "en_def": "a town or city with a harbor where commercial ships load or unload cargo smoothly",
    "sentence": "The massive container ship slowly docked at the busy {{BLANK}}, ready to unload tons of commercial goods.",
    "cn": "這艘巨大的貨櫃船緩慢停靠在繁忙的港口，準備卸下數噸的商業貨物。"
  },
  {
    "word": "import",
    "pos": "v.",
    "cn_def": "進口",
    "en_def": "to bring goods, merchandise, or services into a country from abroad for commercial sale",
    "sentence": "The international corporation plans to {{BLANK}} luxury automobiles from Europe to satisfy the growing local demand.",
    "cn": "這家國際公司計劃從歐洲進口豪華汽車，以滿足日益增長的本地需求。"
  },
  {
    "word": "tariff",
    "pos": "n.",
    "cn_def": "關税",
    "en_def": "a tax or duty imposed by a government on imported or exported goods to protect domestic industries",
    "sentence": "The new government policy imposed a strict {{BLANK}} on electronic products, causing significant friction in international trade.",
    "cn": "新政府政策對電子產品徵收嚴格的關稅，在國際貿易中引起了顯著的摩擦。"
  },
  {
    "word": "goods",
    "pos": "n.",
    "cn_def": "貨物；商品",
    "en_def": "merchandise or possessions.",
    "sentence": "The busy international port efficiently handles millions of tons of imported and exported {{BLANK}} from all around the globe daily.",
    "cn": "這個繁忙的國際港口每天有效率地處理數百萬噸來自全球各地的進出口貨物。"
  },
  {
    "word": "imported goods",
    "pos": "n.",
    "cn_def": "進口貨物",
    "en_def": "products, merchandise, or commodities that are brought into a country from a foreign nation",
    "sentence": "The customs officers thoroughly inspected all the {{BLANK}} to ensure they complied with national safety regulations.",
    "cn": "海關官員徹底檢查了所有進口貨物，以確保它們符合國家安全法規。"
  },
  {
    "word": "export",
    "pos": "v.",
    "cn_def": "出口",
    "en_def": "to send goods, merchandise, or services to another country for international sale or trade",
    "sentence": "Taiwan's technology sector continues to {{BLANK}} high-quality electronic components and portable devices to markets worldwide.",
    "cn": "台灣的科技部門持續向全球市場出口高品質的電子元件與便攜式裝置。"
  },
  {
    "word": "exported goods",
    "pos": "n.",
    "cn_def": "出口貨物",
    "en_def": "products, merchandise, or commodities sent to a foreign country for commercial sale",
    "sentence": "The logistics company arranged for an express delivery service to transport the {{BLANK}} to the harbor safely.",
    "cn": "這家物流公司安排了快捷的快遞服務，以將這些出口貨物安全地運送到港灣。"
  },
  {
    "word": "commodity",
    "pos": "n.",
    "cn_def": "商品；原物料",
    "en_def": "a raw material or primary agricultural product that can be bought and sold.",
    "sentence": "The manager confidently stated that every single new item our factories can make is another valuable {{BLANK}} we can effectively trade.",
    "cn": "經理自信地表示，我們工廠能製造的每一件新物品，都是我們可以有效交易的另一項有價值的商品。"
  },
  {
    "word": "product",
    "pos": "n.",
    "cn_def": "產品",
    "en_def": "an article or substance that is manufactured or refined for sale.",
    "sentence": "The highly innovative technology company is preparing to launch a revolutionary new {{BLANK}} that will completely change the digital market.",
    "cn": "這家高度創新的科技公司正準備推出一款將徹底改變數位市場的革命性新產品。"
  },
  {
    "word": "fresh produce",
    "pos": "n.",
    "cn_def": "新鮮蔬果、生鮮農產品",
    "en_def": "Fresh fruits and vegetables that are grown for food and sold to consumers.",
    "sentence": "My mother always goes to the local traditional market early in the morning, and she always chooses the best {{BLANK}} to cook a healthy dinner for our family.",
    "cn": "我母親總是在大清早去當地的傳統市場，而且她總是挑選最好的新鮮蔬果來為我們全家煮一頓健康的晚餐。"
  },
  {
    "word": "produce",
    "pos": "v.",
    "cn_def": "生產、製造、出產",
    "en_def": "To make, grow, or supply things, especially in large quantities.",
    "sentence": "The factory has upgraded its machines, so it can now {{BLANK}} thousands of eco-friendly water bottles every day to meet the increasing demand.",
    "cn": "這家工廠已經升級了機器，因此現在每天可以生產數千個環保水瓶，以滿足日益增長的需求。"
  },
  {
    "word": "productive",
    "pos": "adj.",
    "cn_def": "富有成效的、有生產力的",
    "en_def": "Achieving a lot or producing a good amount of useful results.",
    "sentence": "Since she started planning her schedule every morning, Chloe has become much more {{BLANK}} and always finishes her assignments before dinner.",
    "cn": "自從她開始每天早上規劃自己的行程表以來，克洛伊變得富有成效得多，且總是在晚餐前完成她的作業。"
  },
  {
    "word": "productivity",
    "pos": "n.",
    "cn_def": "生產力、生產效率",
    "en_def": "The rate at which a worker, company, or country completes tasks or produces goods.",
    "sentence": "The manager introduced a new flexible working hours policy because he believed it would improve employee {{BLANK}} and happiness.",
    "cn": "經理引入了新的彈性工作時間政策，因為他相信這能提升員工的生產力（生產效率）與幸福感。"
  },
  {
    "word": "merchandise",
    "pos": "n.",
    "cn_def": "商品、貨物",
    "en_def": "Goods or products that are bought and sold in a business or store.",
    "sentence": "The pop singer's official website offers a lot of exclusive {{BLANK}}, such as t-shirts, keychains, and posters for her loyal fans.",
    "cn": "這位流行歌手的官方網站為她的忠實粉絲提供了許多獨家商品，例如T恤、鑰匙圈和海報。"
  },
  {
    "word": "abandoned",
    "pos": "v.",
    "cn_def": "放棄；拋棄",
    "en_def": "to cease to support or look after; desert.",
    "sentence": "When the old car suddenly broke down on the dark highway, the frustrated driver foolishly {{BLANK}} it on the side of the road.",
    "cn": "當這輛舊車在黑暗的高速公路上突然拋錨時，受挫的司機愚蠢地把它拋棄在路邊。"
  },
  {
    "word": "abandoned",
    "pos": "adj.",
    "cn_def": "被拋棄的；廢棄的",
    "en_def": "having been deserted or cast off.",
    "sentence": "The adventurous teenagers bravely decided to cautiously explore the creepy {{BLANK}} hospital that had been completely empty for twenty years.",
    "cn": "愛冒險的青少年勇敢地決定小心探索那家已經完全空了二十年、令人毛骨悚然的廢棄的醫院。"
  },
  {
    "word": "deserted",
    "pos": "v.",
    "cn_def": "離棄；擅離職守",
    "en_def": "to leave a person, place, or organization in a way that is considered disloyal.",
    "sentence": "All of Steve's supposedly loyal friends cruelly {{BLANK}} him when he lost his job and desperately needed their help the most.",
    "cn": "當史蒂夫失業且最極度需要他們的幫助時，所有他所謂忠誠的朋友都殘酷地離棄了他。"
  },
  {
    "word": "deserted",
    "pos": "adj.",
    "cn_def": "荒涼的、空無一人的、被遺棄的",
    "en_def": "Empty of people; with no one there.",
    "sentence": "The old amusement park has been {{BLANK}} for years, and now the broken rides are covered in wild plants and weeds.",
    "cn": "這座舊遊樂園已經空無一人（被遺棄）多年了，現在損壞的遊樂設施都被野生植物和雜草覆蓋了。"
  },
  {
    "word": "desert",
    "pos": "n.",
    "cn_def": "沙漠",
    "en_def": "A large, dry area of land with very little water or plants, usually covered with sand.",
    "sentence": "Camels are perfectly adapted to live in the harsh {{BLANK}}, because they can travel for many days without drinking any water.",
    "cn": "駱駝完美地適應了在惡劣的沙漠中生活，因為牠們可以在不喝任何水的情況下旅行許多天。"
  },
  {
    "word": "dessert",
    "pos": "n.",
    "cn_def": "甜點",
    "en_def": "Sweet food eaten at the end of a meal.",
    "sentence": "Even though I was completely full after eating the large steak, I still ordered a delicious chocolate {{BLANK}} because I have a sweet tooth.",
    "cn": "儘管吃完大牛排後我已經完全飽了，但我還是點了一份美味的巧克力甜點，因為我非常喜歡吃甜食。"
  },
  {
    "word": "quit",
    "pos": "v.",
    "cn_def": "戒除:辭職；放棄",
    "en_def": "to leave usually permanently.",
    "sentence": "The doctor strictly warned him that he must permanently {{BLANK}} smoking immediately for the sake of his failing physical health.",
    "cn": "醫生嚴格警告他，為了他不斷衰退的身體健康，他必須立刻永久地放棄吸菸。"
  },
  {
    "word": "motor",
    "pos": "n. / adj.",
    "cn_def": "馬達；汽車的",
    "en_def": "a machine that supplies motive power for a vehicle or for some other device.",
    "sentence": "The mechanic explained that my car would not start because there was obviously a serious mechanical problem with the expensive {{BLANK}}.",
    "cn": "技師解釋說我的車發不動了，因為顯然那個昂貴的馬達有嚴重的機械問題。"
  },
  {
    "word": "motorist",
    "pos": "n.",
    "cn_def": "汽車駕駛",
    "en_def": "the driver of an automobile.",
    "sentence": "The local police strongly advised every {{BLANK}} to carefully slow down and drive safely during the unexpectedly heavy winter snowstorm.",
    "cn": "當地警方強烈建議每一位汽車駕駛在出乎意料的強烈冬季暴風雪中小心減速並安全駕駛。"
  },
  {
    "word": "motorcyclist",
    "pos": "n.",
    "cn_def": "機車騎士",
    "en_def": "a rider of a motorcycle.",
    "sentence": "The injured {{BLANK}} was rushed to the hospital after he unfortunately slipped on the wet road and heavily crashed into a tree.",
    "cn": "受傷的機車騎士在濕滑的道路上不幸滑倒並重重撞上樹後，被緊急送往醫院。"
  },
  {
    "word": "automobile",
    "pos": "n.",
    "cn_def": "汽車",
    "en_def": "a road vehicle, typically with four wheels, powered by an internal combustion engine or electric motor",
    "sentence": "Purchasing an electric {{BLANK}} has become increasingly popular among city residents who want to reduce environmental pollution.",
    "cn": "在想要減少環境污染的城市居民中，購買電動汽車已經變得越來越受歡迎。"
  },
  {
    "word": "mobile",
    "pos": "adj.",
    "cn_def": "可移動的；行動式的",
    "en_def": "able to move or be moved freely and easily, or relating to wireless mobile technology",
    "sentence": "The technology corporation developed a new {{BLANK}} application to help busy commuters track train schedules in real time.",
    "cn": "這家科技公司開發了一款全新的行動應用程式，以幫助忙碌的通勤族即時追蹤火車時刻表。"
  },
  {
    "word": "portable",
    "pos": "adj.",
    "cn_def": "手提式的；便攜式的",
    "en_def": "able to be easily carried or moved, especially because of being a lighter and smaller version than usual",
    "sentence": "The experienced traveler always brings a {{BLANK}} charger to ensure his digital devices never run out of battery during long trips.",
    "cn": "經驗豐富的旅行者總是會帶一個便攜式充電器，以確保他的數位設備在長途旅行中絕不會耗盡電量。"
  },
  {
    "word": "portable charger",
    "pos": "n.",
    "cn_def": "行動電源",
    "en_def": "a lightweight and compact external battery pack used to power electronics while traveling",
    "sentence": "The experienced traveler always brings a {{BLANK}} to ensure his digital devices never run out of battery during long trips.",
    "cn": "經驗豐富的旅行者總是會帶一個便攜式充電器，以確保他的數位設備在長途旅行中絕不會耗盡電量。"
  },
  {
    "word": "portable device",
    "pos": "n.",
    "cn_def": "便攜式裝置；行動設備",
    "en_def": "any small, lightweight electronic apparatus or gadget designed to be easily carried or operated by hand",
    "sentence": "The software engineering firm specifically developed a new mobile application to run smoothly on every {{BLANK}}.",
    "cn": "該軟體工程公司特別開發了一款全新的行動應用程式，以便在每台便攜式裝置上順利運行。"
  },
  {
    "word": "device",
    "pos": "n.",
    "cn_def": "裝置；設備；器具",
    "en_def": "a specialized mechanism, piece of equipment, or tool designed for a specific practical purpose",
    "sentence": "The tech corporation created an automated {{BLANK}} to help busy commuters track their local public transit schedules in real time.",
    "cn": "這家科技公司創建了一個自動化裝置，以幫助忙碌的通勤族即時追蹤當地的公共運輸時刻表。"
  },
  {
    "word": "devise",
    "pos": "v.",
    "cn_def": "構思；想出；設計",
    "en_def": "to carefully plan, invent, or design a complex methodology, strategy, or system through creative thinking",
    "sentence": "The leading researcher spent several months attempting to {{BLANK}} a rigorous methodology to protect indigenous wild animal species.",
    "cn": "首席研究員花了幾個月的時間，試圖構思出一套嚴謹的研究方法來保護當地的野生動物物種。"
  },
  {
    "word": "mechanic",
    "pos": "n.",
    "cn_def": "技工；機械工",
    "en_def": "a skilled worker who repairs and maintains automobile engines, heavy machinery, or mechanical devices",
    "sentence": "The experienced {{BLANK}} thoroughly inspected the imported automobile to find the source of the engine failure.",
    "cn": "經驗豐富的技工徹底檢查了那輛進口汽車，以找出引擎故障的源頭。"
  },
  {
    "word": "mechanical",
    "pos": "adj.",
    "cn_def": "機械的；機械製的",
    "en_def": "relating to, operated by, or caused by machinery, automated tools, or physical moving parts",
    "sentence": "The international tech corporation devises advanced {{BLANK}} arms to increase efficiency in its automated factories.",
    "cn": "這家國際科技公司設計了先進的機械手臂，以提高其自動化工廠的效率。"
  },
  {
    "word": "manual",
    "pos": "n..",
    "cn_def": "使用手冊",
    "en_def": "a handbook of instructions",
    "sentence": "The technician checked the operation {{BLANK}} to learn how to fix the database errors on the new portable device.",
    "cn": "技術人員查看了操作手冊，以了解如何修復這台全新可攜式裝置上的資料庫錯誤。"
  },
  {
    "word": "manual",
    "pos": "adj.",
    "cn_def": "手工的；用手操作的",
    "en_def": "involving physical work done with hands rather than automated computers or electronic devices",
    "sentence": "The traditional workers had to endure long hours of heavy {{BLANK}} labor in the import warehouse before automated cranes were deployed.",
    "cn": "在部署自動化起重機之前，傳統工人必須在進口倉庫裡忍受長達數小時的沉重手工勞動。"
  },
  {
    "word": "manually",
    "pos": "adv.",
    "cn_def": "用手地；手動地",
    "en_def": "operated or done by a person using their hands directly, rather than by an automated system or machine",
    "sentence": "Because the automated database system suddenly failed, the logistics staff had to input every single zip code {{BLANK}} to sort the express packages.",
    "cn": "由於自動化資料庫系統突然故障，物流人員必須手動輸入每一個郵遞區號來為快捷包裹分類。"
  },
  {
    "word": "blessed",
    "pos": "v.",
    "cn_def": "祝福；賜福",
    "en_def": "to ask for God's help and protection for someone or something.",
    "sentence": "The kind priest warmly {{BLANK}} all of the hopeful people who had quietly gathered inside the beautifully decorated historical church.",
    "cn": "善良的神父溫暖地祝福了所有安靜地聚集在裝飾美麗的歷史教堂內滿懷希望的人們。"
  },
  {
    "word": "blessing",
    "pos": "n.",
    "cn_def": "祝福；幸事",
    "en_def": "God's favor and protection.",
    "sentence": "Discovering that the serious medical test results were completely negative was a true {{BLANK}} for the terrified young woman and her family.",
    "cn": "發現嚴肅的醫學檢查結果完全是陰性的，對這位受驚的年輕女子及其家人來說是一件真正的幸事。"
  },
  {
    "word": "is always blessed with",
    "pos": "phr.",
    "cn_def": "有幸擁有...",
    "en_def": "to have a lot of a good or desirable thing.",
    "sentence": "Eric {{BLANK}} an incredibly great job, a beautifully comfortable home, and a loving family that fully supports him.",
    "cn": "艾瑞克總是有幸擁有一份極好的工作、一個美麗舒適的家，以及一個完全支持他的充滿愛的家庭。"
  },
  {
    "word": "give his blessing",
    "pos": "phr.",
    "cn_def": "給予准許/支持",
    "en_def": "to give approval or support.",
    "sentence": "Ben's wealthy father finally decided to {{BLANK}} for him to responsibly take a year off from medical school to travel independently.",
    "cn": "班富有的父親終於決定給予他的准許，讓他負責任地從醫學院休學一年去獨立旅行。"
  },
  {
    "word": "structure",
    "pos": "n.",
    "cn_def": "結構；建築物",
    "en_def": "the arrangement of and relations between the parts or elements of something complex.",
    "sentence": "The massive concrete parking {{BLANK}} is designed to easily hold up to 500 cars for people visiting the busy downtown shopping mall.",
    "cn": "這座巨大的混凝土停車建築物被設計來輕鬆容納多達500輛車，供參觀繁忙市中心購物中心的人們使用。"
  },
  {
    "word": "structural",
    "pos": "adj.",
    "cn_def": "結構的",
    "en_def": "of, relating to, or forming part of the structure of a building.",
    "sentence": "The powerful earthquake sadly caused severe {{BLANK}} damage to several historic buildings, making them completely unsafe for people to enter.",
    "cn": "強烈的地震令人遺憾地對幾座歷史建築造成了嚴重的結構的破壞，使人們進入其中完全不安全。"
  },
  {
    "word": "infrastructure",
    "pos": "n.",
    "cn_def": "基礎建設",
    "en_def": "the basic physical and organizational structures and facilities.",
    "sentence": "The ambitious mayor promised to finally repair the city's aging {{BLANK}}, which desperately needs better roads and safer bridges for the citizens.",
    "cn": "雄心勃勃的市長承諾將最終修復這座城市老舊的基礎建設，公民們極度需要更好的道路和更安全的橋樑。"
  },
  {
    "word": "monuments",
    "pos": "n.",
    "cn_def": "紀念碑",
    "en_def": "a statue, building, or other structure erected to commemorate a famous or notable person or event.",
    "sentence": "The tall, majestic Statue of Liberty is widely considered one of America's most deeply famous and instantly recognizable historical {{BLANK}}.",
    "cn": "高大雄偉的自由女神像被廣泛認為是美國最深具盛名且最能立即被認出的歷史紀念碑之一。"
  },
  {
    "word": "monumental",
    "pos": "adj.",
    "cn_def": "具紀念性的；巨大的",
    "en_def": "great in importance, extent, or size.",
    "sentence": "Rebuilding the completely destroyed city after the terrifying war was a truly {{BLANK}} task that required everyone's persistent hard work and cooperation.",
    "cn": "在可怕的戰爭後重建被徹底摧毀的城市是一項真正巨大的任務，需要每個人的持續努力和合作。"
  }
];

const MCQS = [
  {
    "q": "The large cargo ships are specifically designed to safely ______ thousands of heavy containers across the deep ocean.",
    "options": [
      "transport",
      "merchandise",
      "landmark",
      "port"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Because she doesn't own a car, Lisa relies entirely on public ______ to get to school every single morning.",
    "options": [
      "recreation",
      "product",
      "creativity",
      "transportation"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "If you want to effectively reduce your daily carbon footprint, you should definitely start taking ______ to work.",
    "options": [
      "field trip",
      "public transportation",
      "arrive at",
      "a sense of accomplishment"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Utilizing public ______ like trains and buses can significantly minimize carbon emissions in crowded cities.",
    "options": [
      "private vehicle",
      "departed from",
      "means of transportation",
      "scenic spot"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "There was a ______ on the highway today because a terrible accident blocked two major lanes.",
    "options": [
      "electric vehicle",
      "traffic congestion",
      "tourist attraction",
      "arrive at"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "There are far too many heavy ______ on the road today, and that is rapidly causing the city's air quality to become significantly worse.",
    "options": [
      "freight",
      "departure",
      "vehicles",
      "completion"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "To help save the planet, the government is currently offering generous discounts to anyone who buys a clean, new ______.",
    "options": [
      "tourist destination",
      "content creator",
      "traffic congestion",
      "electric vehicle"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The smart apartment complex features a large automated garage designated specifically for each resident's ______.",
    "options": [
      "private vehicle",
      "a sense of achievement",
      "portable device",
      "market segment"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Most hardworking students intelligently view a university degree as an essential ______ eventually landing a highly successful and well-paying job.",
    "options": [
      "electric vehicle",
      "vehicle for",
      "achieve completion",
      "content creator"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "I unfortunately didn't meet Jack in person today because he had completely ______ his home very early this morning.",
    "options": [
      "estimated time of arrival",
      "reach a major milestone",
      "departed from",
      "market segment"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The ambitious boss is urgently packing her bags right now and will officially ______ Tokyo in less than four hours.",
    "options": [
      "go sightseeing",
      "exported goods",
      "tourist attraction",
      "depart for"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The angry passengers complained when they discovered that the busy train's time of ______ had been unexpectedly delayed by thirty minutes.",
    "options": [
      "departure",
      "automobile",
      "vehicles",
      "mechanic"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The tour bus will ______ the hotel entrance at exactly eight o'clock, so please make sure you are waiting in the lobby.",
    "options": [
      "portable charger",
      "exported goods",
      "arrive at",
      "public transportation"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "After a very long and exhausting flight across the ocean, the exchange students finally ______ Tokyo to begin their winter study program.",
    "options": [
      "arrived in",
      "a sense of accomplishment",
      "imported goods",
      "portable device"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The excited children eagerly waited at the large airport gate for the safe ______ of their beloved grandparents from Canada.",
    "options": [
      "creativity",
      "excursion",
      "timber",
      "arrival"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Because the heavy snowstorm delayed our train, our ______ has been changed from 6:00 p.m. to 8:30 p.m.",
    "options": [
      "a small segment of",
      "estimated time of arrival",
      "fresh produce",
      "electric vehicle"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The talented chef wanted to ______ a completely unique and delicious menu for the grand opening of his restaurant.",
    "options": [
      "produce",
      "import",
      "create",
      "blessed"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The brilliant ______ of the telephone made global communication much more convenient than anyone could have ever imagined.",
    "options": [
      "creation",
      "scene",
      "lumber",
      "scenery"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The marketing team came up with a highly ______ advertising campaign that quickly caught the attention of young consumers.",
    "options": [
      "deserted",
      "mobile",
      "scenic",
      "creative"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Teachers should always encourage their young students to express their natural ______ through engaging art and music projects.",
    "options": [
      "arrival",
      "creativity",
      "dynasty",
      "exploration"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Deep in the ocean, scientists discovered a strange ______ that can glow in the dark to attract its food.",
    "options": [
      "freight",
      "commuting",
      "creature",
      "scenery"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The dragon is a famous ______ in many cultures, often representing power and wisdom in Eastern folklore.",
    "options": [
      "mythical creature",
      "overlook the view",
      "electric vehicle",
      "crime scene"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The talented ______ spent three days editing his travel video because he wanted to give his followers a high-quality experience.",
    "options": [
      "market segment",
      "achieve completion",
      "carry out the objective",
      "content creator"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "After a long and stressful week at the busy office, John usually plays golf for his weekend ______.",
    "options": [
      "creation",
      "recreation",
      "tariff",
      "dynasty"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The city government built a new park with many ______ facilities, such as basketball courts and walking paths, for local residents.",
    "options": [
      "recreational",
      "deserted",
      "mechanical",
      "unfulfilled"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "A surprisingly small ______ of this country's total population has unfortunately caught the terrible and highly infectious disease.",
    "options": [
      "goods",
      "infrastructure",
      "commute",
      "segment"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Our new cosmetic product is specifically designed to strongly appeal to a younger, more fashion-conscious ______.",
    "options": [
      "mythical creature",
      "a sense of accomplishment",
      "market segment",
      "give his blessing"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Only ______ the movie was actually filmed outdoors, while the rest was completed in a studio.",
    "options": [
      "depart for",
      "a small segment of",
      "public transportation",
      "a sense of achievement"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The knowledgeable historian explained that these incredibly beautiful paintings are originally from the powerful Ming ______.",
    "options": [
      "dynasty",
      "tariff",
      "logs",
      "vehicles"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "You must carefully ______ all the required safety training courses before you are officially allowed to operate the heavy machinery.",
    "options": [
      "fulfilled",
      "create",
      "complete",
      "produce"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The software engineering team managed to achieve ______ control over the database after implementing the new automated security frameworks.",
    "options": [
      "monumental",
      "complete",
      "mobile",
      "unfulfilled"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Because of numerous unexpected delays, the massive building project took exactly ten years to finally achieve full ______.",
    "options": [
      "departure",
      "segment",
      "expedition",
      "completion"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "After hiking through the dense jungle for eight hours without resting, the exhausted explorers were ______ out of energy.",
    "options": [
      "completely",
      "devise",
      "crime scene",
      "exploration"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The team worked diligently over the weekend so that the important software update could ______ before the deadline.",
    "options": [
      "a sense of fulfillment",
      "achieve completion",
      "arrived in",
      "content creator"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "The senior researcher requested a ______ evaluation of the participants' data to ensure the methodology was completely rigorous.",
    "options": [
      "scenic",
      "express",
      "motor",
      "thorough"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "The medical board checked the patient's records ______ before authorizing the chief doctor to perform the major heart surgery.",
    "options": [
      "unfulfilled",
      "blessing",
      "thoroughly",
      "product"
    ],
    "answer": 2,
    "vocabIndex": 35
  },
  {
    "q": "Our tech company reached an incredible ______ last year with the successful sale of our one millionth electronic product.",
    "options": [
      "motorcyclist",
      "milestone",
      "scenery",
      "manual"
    ],
    "answer": 1,
    "vocabIndex": 36
  },
  {
    "q": "The dedicated medical researchers will ______ if they can finally discover a cure for the disease.",
    "options": [
      "vehicle for",
      "achieve completion",
      "reach a major milestone",
      "field trip"
    ],
    "answer": 2,
    "vocabIndex": 37
  },
  {
    "q": "Landing the first human on the surface of the moon was a ______ that completely changed space exploration forever.",
    "options": [
      "historic milestone",
      "tourist attraction",
      "a sense of achievement",
      "public transportation"
    ],
    "answer": 0,
    "vocabIndex": 38
  },
  {
    "q": "Taipei 101 is a famous ______ in Taiwan, and thousands of tourists visit it every year to enjoy the beautiful city view.",
    "options": [
      "segment",
      "commuting",
      "transportation",
      "landmark"
    ],
    "answer": 3,
    "vocabIndex": 39
  },
  {
    "q": "The government signed a ______ agreement yesterday to reduce carbon emissions, which experts believe will greatly protect the environment.",
    "options": [
      "landmark",
      "manual",
      "creative",
      "mobile"
    ],
    "answer": 0,
    "vocabIndex": 40
  },
  {
    "q": "With its beautiful beaches and historic temples, Kyoto has become a popular ______ for travelers from all over the world.",
    "options": [
      "traffic congestion",
      "scenic spot",
      "reach a major milestone",
      "tourist destination"
    ],
    "answer": 3,
    "vocabIndex": 41
  },
  {
    "q": "The Eiffel Tower is a world-famous ______ that draws millions of visitors to Paris every single year.",
    "options": [
      "mythical creature",
      "tourist attraction",
      "a small segment of",
      "crime scene"
    ],
    "answer": 1,
    "vocabIndex": 42
  },
  {
    "q": "John unfortunately missed a highly crucial and dramatic ______ in the movie when he quickly went to visit the crowded snack bar.",
    "options": [
      "expedition",
      "commute",
      "scene",
      "timber"
    ],
    "answer": 2,
    "vocabIndex": 43
  },
  {
    "q": "The forensic investigators thoroughly examined the ______ to collect valuable evidence before the military zone was closed.",
    "options": [
      "crime scene",
      "go sightseeing",
      "mythical creature",
      "private vehicle"
    ],
    "answer": 0,
    "vocabIndex": 44
  },
  {
    "q": "The emergency medical technicians arrived quickly ______ to provide immediate first aid to the domestic violence victims.",
    "options": [
      "overlook the view",
      "at the scene",
      "depart for",
      "private vehicle"
    ],
    "answer": 1,
    "vocabIndex": 45
  },
  {
    "q": "Before we safely drive back to the busy city, let's stop the car and take a beautiful picture of this magnificent ______.",
    "options": [
      "merchandise",
      "product",
      "scenery",
      "timber"
    ],
    "answer": 2,
    "vocabIndex": 46
  },
  {
    "q": "The adventurous couple decided to slowly drive along the highly ______ coastal route to fully enjoy the absolutely breathtaking ocean views.",
    "options": [
      "fulfilling",
      "mechanical",
      "monumental",
      "scenic"
    ],
    "answer": 3,
    "vocabIndex": 47
  },
  {
    "q": "The travel guide recommends visiting this hidden ______ early in the morning so you can avoid the large crowds of noisy tourists.",
    "options": [
      "depart for",
      "exported goods",
      "scenic spot",
      "is always blessed with"
    ],
    "answer": 2,
    "vocabIndex": 48
  },
  {
    "q": "The expensive hotel suites at the top of the tall building ______ of the crystal clear blue ocean.",
    "options": [
      "go sightseeing",
      "overlook the view",
      "public transportation",
      "sightseeing"
    ],
    "answer": 1,
    "vocabIndex": 49
  },
  {
    "q": "After finishing their important business meetings, the colleagues rented a car to do some ______ in the historic city center before flying back home.",
    "options": [
      "give his blessing",
      "historic milestone",
      "go sightseeing",
      "sightseeing"
    ],
    "answer": 3,
    "vocabIndex": 50
  },
  {
    "q": "If the weather is sunny tomorrow morning, we can ______ along the beautiful coastline and take plenty of memorable photos.",
    "options": [
      "go sightseeing",
      "sightseeing",
      "carry out the objective",
      "tourist destination"
    ],
    "answer": 0,
    "vocabIndex": 51
  },
  {
    "q": "Every single year, the generous technology company takes all of its hardworking employees on an exciting weekend ______ or an outing to the mountains.",
    "options": [
      "carry out the objective",
      "content creator",
      "electric vehicle",
      "field trip"
    ],
    "answer": 3,
    "vocabIndex": 52
  },
  {
    "q": "Our high school organized a weekend ______ to the famous museum so that students could see the historical artifacts in person.",
    "options": [
      "scene",
      "creature",
      "excursion",
      "dynasty"
    ],
    "answer": 2,
    "vocabIndex": 53
  },
  {
    "q": "The scientists planned a dangerous ______ to the Arctic to study how climate change is affecting the thick layers of ice.",
    "options": [
      "mechanic",
      "expedition",
      "dessert",
      "scene"
    ],
    "answer": 1,
    "vocabIndex": 54
  },
  {
    "q": "When the tourists arrived at the ancient town, they decided to ______ the narrow streets and discover hidden local shops.",
    "options": [
      "explore",
      "create",
      "blessed",
      "abandoned"
    ],
    "answer": 0,
    "vocabIndex": 55
  },
  {
    "q": "Space ______ requires a massive amount of money and advanced technology, but it can help humans find potential resources on other planets.",
    "options": [
      "commuters",
      "desert",
      "milestone",
      "exploration"
    ],
    "answer": 3,
    "vocabIndex": 56
  },
  {
    "q": "Because of the terrible traffic, it usually takes Jane more than an hour to ______ between her school and home.",
    "options": [
      "logs",
      "commute",
      "creation",
      "scenery"
    ],
    "answer": 1,
    "vocabIndex": 57
  },
  {
    "q": "During the incredibly busy morning rush hour, thousands of tired ______ pack tightly into the subway trains heading downtown.",
    "options": [
      "cargo",
      "arrival",
      "commuters",
      "merchandise"
    ],
    "answer": 2,
    "vocabIndex": 58
  },
  {
    "q": "Relying on public transit can significantly minimize the overall stress of daily ______ during the busy morning rush hour.",
    "options": [
      "commuting",
      "transport",
      "commute",
      "commodity"
    ],
    "answer": 0,
    "vocabIndex": 59
  },
  {
    "q": "Thanks to highly advanced digital technology, many employees can now smoothly ______ from the comfort of their own living rooms.",
    "options": [
      "produce",
      "telecommute",
      "quit",
      "blessed"
    ],
    "answer": 1,
    "vocabIndex": 60
  },
  {
    "q": "Unfortunately, lazy Bill never actually ______ my simple request to completely clean out the dirty garage on Sunday afternoon.",
    "options": [
      "create",
      "deserted",
      "import",
      "fulfilled"
    ],
    "answer": 3,
    "vocabIndex": 61
  },
  {
    "q": "Next year, courageous Lisa confidently plans to travel across India to finally ______ of seeing the world.",
    "options": [
      "content creator",
      "private vehicle",
      "fulfill the dream",
      "is always blessed with"
    ],
    "answer": 2,
    "vocabIndex": 62
  },
  {
    "q": "It requires an immense amount of dedication and consistent hard work to successfully ______ in reality.",
    "options": [
      "carry out the objective",
      "a sense of fulfillment",
      "electric vehicle",
      "a sense of accomplishment"
    ],
    "answer": 0,
    "vocabIndex": 63
  },
  {
    "q": "Teaching young children how to read and write is a highly ______ career that brings her a lot of daily joy.",
    "options": [
      "motor",
      "productive",
      "fulfilling",
      "scenic"
    ],
    "answer": 2,
    "vocabIndex": 64
  },
  {
    "q": "Despite achieving massive financial success, the wealthy businessman still felt deeply ______ because he never pursued his artistic passions.",
    "options": [
      "unfulfilled",
      "mechanical",
      "motor",
      "mobile"
    ],
    "answer": 0,
    "vocabIndex": 65
  },
  {
    "q": "After years of intense study and hard work, passing the medical exam brought him a deep sense of personal ______.",
    "options": [
      "desert",
      "fulfillment",
      "creativity",
      "expedition"
    ],
    "answer": 1,
    "vocabIndex": 66
  },
  {
    "q": "We stopped at a quiet ______ along the mountain highway to take pictures of the breathtaking green valley below.",
    "options": [
      "departed from",
      "a sense of accomplishment",
      "tourist attraction",
      "scenic spot"
    ],
    "answer": 3,
    "vocabIndex": 67
  },
  {
    "q": "Volunteering at the local animal shelter gives Chloe ______ because she loves helping helpless dogs find new homes.",
    "options": [
      "a sense of fulfillment",
      "give his blessing",
      "arrive at",
      "mythical creature"
    ],
    "answer": 0,
    "vocabIndex": 68
  },
  {
    "q": "After studying hard for several months, passing the advanced English exam gave Leo ______ that made his parents very proud.",
    "options": [
      "fresh produce",
      "is always blessed with",
      "private vehicle",
      "a sense of achievement"
    ],
    "answer": 3,
    "vocabIndex": 69
  },
  {
    "q": "Completing the twenty-kilometer marathon gave the young runner ______, even though his legs were extremely sore and tired.",
    "options": [
      "estimated time of arrival",
      "at the scene",
      "a sense of accomplishment",
      "portable device"
    ],
    "answer": 2,
    "vocabIndex": 70
  },
  {
    "q": "Because it has massive tropical forests, high-quality ______ remains one of Brazil's biggest and most profitable international exports.",
    "options": [
      "commuters",
      "timber",
      "product",
      "recreation"
    ],
    "answer": 1,
    "vocabIndex": 71
  },
  {
    "q": "My father happily bought a large amount of sturdy ______ from the hardware store in order to build a beautiful wooden porch.",
    "options": [
      "product",
      "commodity",
      "dynasty",
      "lumber"
    ],
    "answer": 3,
    "vocabIndex": 72
  },
  {
    "q": "The strong lumberjacks worked tirelessly all day to efficiently transport these massive ______ to the factory to safely make paper.",
    "options": [
      "desert",
      "logs",
      "commuting",
      "blessing"
    ],
    "answer": 1,
    "vocabIndex": 73
  },
  {
    "q": "Utilizing the international ______ service allowed the ambitious entrepreneur to deliver the portable devices to global clients within 48 hours.",
    "options": [
      "express",
      "monumental",
      "recreational",
      "thorough"
    ],
    "answer": 0,
    "vocabIndex": 74
  },
  {
    "q": "The experienced logistics manager explained that ground ______ generally takes exactly twice the amount of time as flying things by air.",
    "options": [
      "creativity",
      "commuting",
      "freight",
      "departure"
    ],
    "answer": 2,
    "vocabIndex": 75
  },
  {
    "q": "The massive container ship slowly arrived at the port, carrying tons of valuable ______ from the international technology corporation.",
    "options": [
      "lumber",
      "cargo",
      "product",
      "mechanic"
    ],
    "answer": 1,
    "vocabIndex": 76
  },
  {
    "q": "The experienced captain carefully steered the large ocean vessel into the peaceful ______ before the severe winter storm arrived.",
    "options": [
      "scene",
      "manual",
      "automobile",
      "harbor"
    ],
    "answer": 3,
    "vocabIndex": 77
  },
  {
    "q": "The massive container ship slowly docked at the busy ______, ready to unload tons of commercial goods.",
    "options": [
      "port",
      "monuments",
      "exploration",
      "tariff"
    ],
    "answer": 0,
    "vocabIndex": 78
  },
  {
    "q": "The international corporation plans to ______ luxury automobiles from Europe to satisfy the growing local demand.",
    "options": [
      "quit",
      "fulfilled",
      "import",
      "blessed"
    ],
    "answer": 2,
    "vocabIndex": 79
  },
  {
    "q": "The new government policy imposed a strict ______ on electronic products, causing significant friction in international trade.",
    "options": [
      "desert",
      "tariff",
      "expedition",
      "motorist"
    ],
    "answer": 1,
    "vocabIndex": 80
  },
  {
    "q": "The busy international port efficiently handles millions of tons of imported and exported ______ from all around the globe daily.",
    "options": [
      "expedition",
      "logs",
      "goods",
      "milestone"
    ],
    "answer": 2,
    "vocabIndex": 81
  },
  {
    "q": "The customs officers thoroughly inspected all the ______ to ensure they complied with national safety regulations.",
    "options": [
      "imported goods",
      "mythical creature",
      "field trip",
      "traffic congestion"
    ],
    "answer": 0,
    "vocabIndex": 82
  },
  {
    "q": "Taiwan's technology sector continues to ______ high-quality electronic components and portable devices to markets worldwide.",
    "options": [
      "deserted",
      "quit",
      "abandoned",
      "export"
    ],
    "answer": 3,
    "vocabIndex": 83
  },
  {
    "q": "The logistics company arranged for an express delivery service to transport the ______ to the harbor safely.",
    "options": [
      "give his blessing",
      "exported goods",
      "depart for",
      "a sense of achievement"
    ],
    "answer": 1,
    "vocabIndex": 84
  },
  {
    "q": "The manager confidently stated that every single new item our factories can make is another valuable ______ we can effectively trade.",
    "options": [
      "timber",
      "departure",
      "excursion",
      "commodity"
    ],
    "answer": 3,
    "vocabIndex": 85
  },
  {
    "q": "The highly innovative technology company is preparing to launch a revolutionary new ______ that will completely change the digital market.",
    "options": [
      "product",
      "mechanic",
      "commuters",
      "transportation"
    ],
    "answer": 0,
    "vocabIndex": 86
  },
  {
    "q": "My mother always goes to the local traditional market early in the morning, and she always chooses the best ______ to cook a healthy dinner for our family.",
    "options": [
      "field trip",
      "sightseeing",
      "fresh produce",
      "traffic congestion"
    ],
    "answer": 2,
    "vocabIndex": 87
  },
  {
    "q": "The factory has upgraded its machines, so it can now ______ thousands of eco-friendly water bottles every day to meet the increasing demand.",
    "options": [
      "produce",
      "complete",
      "export",
      "telecommute"
    ],
    "answer": 0,
    "vocabIndex": 88
  },
  {
    "q": "Since she started planning her schedule every morning, Chloe has become much more ______ and always finishes her assignments before dinner.",
    "options": [
      "thorough",
      "creative",
      "productive",
      "fulfilling"
    ],
    "answer": 2,
    "vocabIndex": 89
  },
  {
    "q": "The manager introduced a new flexible working hours policy because he believed it would improve employee ______ and happiness.",
    "options": [
      "creativity",
      "productivity",
      "port",
      "timber"
    ],
    "answer": 1,
    "vocabIndex": 90
  },
  {
    "q": "The pop singer's official website offers a lot of exclusive ______, such as t-shirts, keychains, and posters for her loyal fans.",
    "options": [
      "device",
      "dynasty",
      "lumber",
      "merchandise"
    ],
    "answer": 3,
    "vocabIndex": 91
  },
  {
    "q": "When the old car suddenly broke down on the dark highway, the frustrated driver foolishly ______ it on the side of the road.",
    "options": [
      "create",
      "import",
      "abandoned",
      "fulfilled"
    ],
    "answer": 2,
    "vocabIndex": 92
  },
  {
    "q": "The adventurous teenagers bravely decided to cautiously explore the creepy ______ hospital that had been completely empty for twenty years.",
    "options": [
      "creative",
      "complete",
      "mobile",
      "abandoned"
    ],
    "answer": 3,
    "vocabIndex": 93
  },
  {
    "q": "All of Steve's supposedly loyal friends cruelly ______ him when he lost his job and desperately needed their help the most.",
    "options": [
      "deserted",
      "import",
      "explore",
      "create"
    ],
    "answer": 0,
    "vocabIndex": 94
  },
  {
    "q": "The old amusement park has been ______ for years, and now the broken rides are covered in wild plants and weeds.",
    "options": [
      "productive",
      "deserted",
      "mechanical",
      "manual"
    ],
    "answer": 1,
    "vocabIndex": 95
  },
  {
    "q": "Camels are perfectly adapted to live in the harsh ______, because they can travel for many days without drinking any water.",
    "options": [
      "vehicles",
      "infrastructure",
      "desert",
      "arrival"
    ],
    "answer": 2,
    "vocabIndex": 96
  },
  {
    "q": "Even though I was completely full after eating the large steak, I still ordered a delicious chocolate ______ because I have a sweet tooth.",
    "options": [
      "dynasty",
      "completion",
      "goods",
      "dessert"
    ],
    "answer": 3,
    "vocabIndex": 97
  },
  {
    "q": "The doctor strictly warned him that he must permanently ______ smoking immediately for the sake of his failing physical health.",
    "options": [
      "abandoned",
      "quit",
      "export",
      "deserted"
    ],
    "answer": 1,
    "vocabIndex": 98
  },
  {
    "q": "The mechanic explained that my car would not start because there was obviously a serious mechanical problem with the expensive ______.",
    "options": [
      "motor",
      "deserted",
      "productive",
      "mechanical"
    ],
    "answer": 0,
    "vocabIndex": 99
  },
  {
    "q": "The local police strongly advised every ______ to carefully slow down and drive safely during the unexpectedly heavy winter snowstorm.",
    "options": [
      "merchandise",
      "transportation",
      "motorist",
      "blessing"
    ],
    "answer": 2,
    "vocabIndex": 100
  },
  {
    "q": "The injured ______ was rushed to the hospital after he unfortunately slipped on the wet road and heavily crashed into a tree.",
    "options": [
      "creativity",
      "motorcyclist",
      "scenery",
      "commuting"
    ],
    "answer": 1,
    "vocabIndex": 101
  },
  {
    "q": "Purchasing an electric ______ has become increasingly popular among city residents who want to reduce environmental pollution.",
    "options": [
      "recreation",
      "commodity",
      "lumber",
      "automobile"
    ],
    "answer": 3,
    "vocabIndex": 102
  },
  {
    "q": "The technology corporation developed a new ______ application to help busy commuters track train schedules in real time.",
    "options": [
      "mobile",
      "motor",
      "deserted",
      "landmark"
    ],
    "answer": 0,
    "vocabIndex": 103
  },
  {
    "q": "The experienced traveler always brings a ______ charger to ensure his digital devices never run out of battery during long trips.",
    "options": [
      "monumental",
      "thorough",
      "portable",
      "mechanical"
    ],
    "answer": 2,
    "vocabIndex": 104
  },
  {
    "q": "The experienced traveler always brings a ______ to ensure his digital devices never run out of battery during long trips.",
    "options": [
      "tourist attraction",
      "portable charger",
      "go sightseeing",
      "is always blessed with"
    ],
    "answer": 1,
    "vocabIndex": 105
  },
  {
    "q": "The software engineering firm specifically developed a new mobile application to run smoothly on every ______.",
    "options": [
      "portable device",
      "crime scene",
      "at the scene",
      "historic milestone"
    ],
    "answer": 0,
    "vocabIndex": 106
  },
  {
    "q": "The tech corporation created an automated ______ to help busy commuters track their local public transit schedules in real time.",
    "options": [
      "cargo",
      "mechanic",
      "logs",
      "device"
    ],
    "answer": 3,
    "vocabIndex": 107
  },
  {
    "q": "The leading researcher spent several months attempting to ______ a rigorous methodology to protect indigenous wild animal species.",
    "options": [
      "complete",
      "create",
      "devise",
      "blessed"
    ],
    "answer": 2,
    "vocabIndex": 108
  },
  {
    "q": "The experienced ______ thoroughly inspected the imported automobile to find the source of the engine failure.",
    "options": [
      "mechanic",
      "timber",
      "monuments",
      "milestone"
    ],
    "answer": 0,
    "vocabIndex": 109
  },
  {
    "q": "The international tech corporation devises advanced ______ arms to increase efficiency in its automated factories.",
    "options": [
      "abandoned",
      "creative",
      "scenic",
      "mechanical"
    ],
    "answer": 3,
    "vocabIndex": 110
  },
  {
    "q": "The technician checked the operation ______ to learn how to fix the database errors on the new portable device.",
    "options": [
      "cargo",
      "manual",
      "structure",
      "commuters"
    ],
    "answer": 1,
    "vocabIndex": 111
  },
  {
    "q": "The traditional workers had to endure long hours of heavy ______ labor in the import warehouse before automated cranes were deployed.",
    "options": [
      "manual",
      "landmark",
      "mobile",
      "thorough"
    ],
    "answer": 0,
    "vocabIndex": 112
  },
  {
    "q": "Because the automated database system suddenly failed, the logistics staff had to input every single zip code ______ to sort the express packages.",
    "options": [
      "milestone",
      "manually",
      "dessert",
      "give his blessing"
    ],
    "answer": 1,
    "vocabIndex": 113
  },
  {
    "q": "The kind priest warmly ______ all of the hopeful people who had quietly gathered inside the beautifully decorated historical church.",
    "options": [
      "abandoned",
      "fulfilled",
      "produce",
      "blessed"
    ],
    "answer": 3,
    "vocabIndex": 114
  },
  {
    "q": "Discovering that the serious medical test results were completely negative was a true ______ for the terrified young woman and her family.",
    "options": [
      "cargo",
      "milestone",
      "blessing",
      "product"
    ],
    "answer": 2,
    "vocabIndex": 115
  },
  {
    "q": "Eric ______ an incredibly great job, a beautifully comfortable home, and a loving family that fully supports him.",
    "options": [
      "mythical creature",
      "imported goods",
      "public transportation",
      "is always blessed with"
    ],
    "answer": 3,
    "vocabIndex": 116
  },
  {
    "q": "Ben's wealthy father finally decided to ______ for him to responsibly take a year off from medical school to travel independently.",
    "options": [
      "give his blessing",
      "a sense of achievement",
      "a sense of accomplishment",
      "private vehicle"
    ],
    "answer": 0,
    "vocabIndex": 117
  },
  {
    "q": "The massive concrete parking ______ is designed to easily hold up to 500 cars for people visiting the busy downtown shopping mall.",
    "options": [
      "harbor",
      "structure",
      "segment",
      "timber"
    ],
    "answer": 1,
    "vocabIndex": 118
  },
  {
    "q": "The powerful earthquake sadly caused severe ______ damage to several historic buildings, making them completely unsafe for people to enter.",
    "options": [
      "recreational",
      "scenic",
      "structural",
      "monumental"
    ],
    "answer": 2,
    "vocabIndex": 119
  },
  {
    "q": "The ambitious mayor promised to finally repair the city's aging ______, which desperately needs better roads and safer bridges for the citizens.",
    "options": [
      "infrastructure",
      "port",
      "milestone",
      "dynasty"
    ],
    "answer": 0,
    "vocabIndex": 120
  },
  {
    "q": "The tall, majestic Statue of Liberty is widely considered one of America's most deeply famous and instantly recognizable historical ______.",
    "options": [
      "commuting",
      "timber",
      "manual",
      "monuments"
    ],
    "answer": 3,
    "vocabIndex": 121
  },
  {
    "q": "Rebuilding the completely destroyed city after the terrifying war was a truly ______ task that required everyone's persistent hard work and cooperation.",
    "options": [
      "recreational",
      "productive",
      "monumental",
      "unfulfilled"
    ],
    "answer": 2,
    "vocabIndex": 122
  }
];

const LOOKUP = {
  "transport": {
    "pos": "v. / n.",
    "en_def": "to carry goods or people from one place to another.",
    "cn_def": "運輸；運送",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to carry goods or people from one place to another.",
        "cn_def": "運輸；運送"
      }
    ]
  },
  "transportation": {
    "pos": "n.",
    "en_def": "the action of transporting someone or something or the process of being transported.",
    "cn_def": "運輸；交通工具",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of transporting someone or something or the process of being transported.",
        "cn_def": "運輸；交通工具"
      }
    ]
  },
  "public transportation": {
    "pos": "phr.",
    "en_def": "buses, trains, and other forms of transport that are available to the public.",
    "cn_def": "大眾運輸",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "buses, trains, and other forms of transport that are available to the public.",
        "cn_def": "大眾運輸"
      }
    ]
  },
  "means of transportation": {
    "pos": "n.",
    "en_def": "any system, vehicle, or method used for moving passengers or goods from one geographic location to another",
    "cn_def": "交通工具",
    "combined": [
      {
        "pos": "n.",
        "en_def": "any system, vehicle, or method used for moving passengers or goods from one geographic location to another",
        "cn_def": "交通工具"
      }
    ]
  },
  "traffic congestion": {
    "pos": "n.",
    "en_def": "vehicles moving on a road or public highway.",
    "cn_def": "交通堵塞",
    "combined": [
      {
        "pos": "n.",
        "en_def": "vehicles moving on a road or public highway.",
        "cn_def": "交通堵塞"
      }
    ]
  },
  "vehicle": {
    "pos": "n.",
    "en_def": "a thing used for transporting people or goods, especially on land.",
    "cn_def": "車輛；手段（媒介）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thing used for transporting people or goods, especially on land.",
        "cn_def": "車輛；手段（媒介）"
      }
    ]
  },
  "vehicles": {
    "pos": "n.",
    "en_def": "a thing used for transporting people or goods, especially on land.",
    "cn_def": "車輛；手段（媒介）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thing used for transporting people or goods, especially on land.",
        "cn_def": "車輛；手段（媒介）"
      }
    ]
  },
  "electric vehicle": {
    "pos": "phr.",
    "en_def": "a vehicle which uses one or more electric motors for propulsion.",
    "cn_def": "電動車",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a vehicle which uses one or more electric motors for propulsion.",
        "cn_def": "電動車"
      }
    ]
  },
  "private vehicle": {
    "pos": "n.",
    "en_def": "a personal car, motorcycle, or transport device owned by an individual rather than used for public service",
    "cn_def": "私人車輛",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a personal car, motorcycle, or transport device owned by an individual rather than used for public service",
        "cn_def": "私人車輛"
      }
    ]
  },
  "vehicle for": {
    "pos": "phr.",
    "en_def": "a thing used to express, embody, or fulfill something.",
    "cn_def": "達成...的手段/媒介",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a thing used to express, embody, or fulfill something.",
        "cn_def": "達成...的手段/媒介"
      }
    ]
  },
  "a vehicle for": {
    "pos": "phr.",
    "en_def": "a thing used to express, embody, or fulfill something.",
    "cn_def": "達成...的手段/媒介",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a thing used to express, embody, or fulfill something.",
        "cn_def": "達成...的手段/媒介"
      }
    ]
  },
  "departed from": {
    "pos": "phr.",
    "en_def": "to leave a specific place.",
    "cn_def": "從...出發/離開",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to leave a specific place.",
        "cn_def": "從...出發/離開"
      }
    ]
  },
  "depart from": {
    "pos": "phr.",
    "en_def": "to leave a specific place.",
    "cn_def": "從...出發/離開",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to leave a specific place.",
        "cn_def": "從...出發/離開"
      }
    ]
  },
  "depart for": {
    "pos": "phr.",
    "en_def": "to leave in order to go to a specific destination.",
    "cn_def": "出發前往...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to leave in order to go to a specific destination.",
        "cn_def": "出發前往..."
      }
    ]
  },
  "departure": {
    "pos": "n.",
    "en_def": "the action of leaving, typically to start a journey.",
    "cn_def": "離開；出發",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of leaving, typically to start a journey.",
        "cn_def": "離開；出發"
      }
    ]
  },
  "arrive at": {
    "pos": "phr.",
    "en_def": "To reach a specific building, small place, or precise location.",
    "cn_def": "抵達、到達（特定地點/小地方）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To reach a specific building, small place, or precise location.",
        "cn_def": "抵達、到達（特定地點/小地方）"
      }
    ]
  },
  "arrive in": {
    "pos": "phr.",
    "en_def": "To reach a large geographic area, such as a city, country, or town.",
    "cn_def": "抵達、到達（城市/國家/大地方）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To reach a large geographic area, such as a city, country, or town.",
        "cn_def": "抵達、到達（城市/國家/大地方）"
      }
    ]
  },
  "arrived in": {
    "pos": "phr.",
    "en_def": "To reach a large geographic area, such as a city, country, or town.",
    "cn_def": "抵達、到達（城市/國家/大地方）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To reach a large geographic area, such as a city, country, or town.",
        "cn_def": "抵達、到達（城市/國家/大地方）"
      }
    ]
  },
  "arrival": {
    "pos": "n.",
    "en_def": "the action or process of arriving.",
    "cn_def": "抵達",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action or process of arriving.",
        "cn_def": "抵達"
      }
    ]
  },
  "estimated time of arrival": {
    "pos": "phr.",
    "en_def": "The time when a vehicle, plane, or person is expected to reach a destination.",
    "cn_def": "預計抵達時間",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The time when a vehicle, plane, or person is expected to reach a destination.",
        "cn_def": "預計抵達時間"
      }
    ]
  },
  "create": {
    "pos": "v.",
    "en_def": "to bring something into existence.",
    "cn_def": "創造；建立",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to bring something into existence.",
        "cn_def": "創造；建立"
      }
    ]
  },
  "creation": {
    "pos": "n.",
    "en_def": "the action or process of bringing something into existence.",
    "cn_def": "創造；發明",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action or process of bringing something into existence.",
        "cn_def": "創造；發明"
      }
    ]
  },
  "creative": {
    "pos": "adj.",
    "en_def": "relating to or involving the imagination or original ideas.",
    "cn_def": "有創意的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to or involving the imagination or original ideas.",
        "cn_def": "有創意的"
      }
    ]
  },
  "creativity": {
    "pos": "n.",
    "en_def": "the use of the imagination or original ideas.",
    "cn_def": "創造力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the use of the imagination or original ideas.",
        "cn_def": "創造力"
      }
    ]
  },
  "creature": {
    "pos": "n.",
    "en_def": "Any living being, such as an animal or insect, but not a plant.",
    "cn_def": "生物、動物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "Any living being, such as an animal or insect, but not a plant.",
        "cn_def": "生物、動物"
      }
    ]
  },
  "mythical creature": {
    "pos": "phr.",
    "en_def": "An imaginary animal or being from ancient stories and legends.",
    "cn_def": "神話生物、傳說中的生物",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "An imaginary animal or being from ancient stories and legends.",
        "cn_def": "神話生物、傳說中的生物"
      }
    ]
  },
  "content creator": {
    "pos": "n.",
    "en_def": "A person who invents, makes, or produces informational knowledge",
    "cn_def": "內容創作者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A person who invents, makes, or produces informational knowledge",
        "cn_def": "內容創作者"
      }
    ]
  },
  "recreation": {
    "pos": "n.",
    "en_def": "activity done for enjoyment when one is not working.",
    "cn_def": "娛樂；休閒",
    "combined": [
      {
        "pos": "n.",
        "en_def": "activity done for enjoyment when one is not working.",
        "cn_def": "娛樂；休閒"
      }
    ]
  },
  "recreational": {
    "pos": "adj.",
    "en_def": "Done for enjoyment or relaxation when you are not working.",
    "cn_def": "娛樂的、休閒的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Done for enjoyment or relaxation when you are not working.",
        "cn_def": "娛樂的、休閒的"
      }
    ]
  },
  "segment": {
    "pos": "n. / v.",
    "en_def": "each of the parts into which something is or may be divided.",
    "cn_def": "部分；分割",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "each of the parts into which something is or may be divided.",
        "cn_def": "部分；分割"
      }
    ]
  },
  "market segment": {
    "pos": "phr.",
    "en_def": "a group of people who share one or more common characteristics for marketing purposes.",
    "cn_def": "市場區隔",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a group of people who share one or more common characteristics for marketing purposes.",
        "cn_def": "市場區隔"
      }
    ]
  },
  "a segment of": {
    "pos": "phr.",
    "en_def": "a part or section of a whole.",
    "cn_def": "...的一部分",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a part or section of a whole.",
        "cn_def": "...的一部分"
      }
    ]
  },
  "a small segment of": {
    "pos": "phr.",
    "en_def": "a part or section of a whole.",
    "cn_def": "...的一部分",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a part or section of a whole.",
        "cn_def": "...的一部分"
      }
    ]
  },
  "dynasty": {
    "pos": "n.",
    "en_def": "a line of hereditary rulers of a country.",
    "cn_def": "朝代；王朝",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a line of hereditary rulers of a country.",
        "cn_def": "朝代；王朝"
      }
    ]
  },
  "complete": {
    "pos": "v.",
    "en_def": "to finish making or doing",
    "cn_def": "完成",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to finish making or doing",
        "cn_def": "完成"
      },
      {
        "pos": "adj.",
        "en_def": "having all the necessary parts, elements, or steps, or being perfect and total in degree",
        "cn_def": "完全的；完整的"
      }
    ]
  },
  "completion": {
    "pos": "n.",
    "en_def": "the action or process of finishing something.",
    "cn_def": "完成；完工",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action or process of finishing something.",
        "cn_def": "完成；完工"
      }
    ]
  },
  "completely": {
    "pos": "adv.",
    "en_def": "totally; utterly.",
    "cn_def": "完全地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "totally; utterly.",
        "cn_def": "完全地"
      }
    ]
  },
  "achieve completion": {
    "pos": "phr.",
    "en_def": "to successfully finish a project or task.",
    "cn_def": "達成完工/完成",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to successfully finish a project or task.",
        "cn_def": "達成完工/完成"
      }
    ]
  },
  "thorough": {
    "pos": "adj.",
    "en_def": "performed or written with great care, attention to detail, and a focus on leaving nothing incomplete",
    "cn_def": "徹底的；詳盡的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "performed or written with great care, attention to detail, and a focus on leaving nothing incomplete",
        "cn_def": "徹底的；詳盡的"
      }
    ]
  },
  "thoroughly": {
    "pos": "adv.",
    "en_def": "in a detailed, careful, and comprehensive manner that addresses every single part or aspect",
    "cn_def": "徹底地；詳盡地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a detailed, careful, and comprehensive manner that addresses every single part or aspect",
        "cn_def": "徹底地；詳盡地"
      }
    ]
  },
  "milestone": {
    "pos": "n.",
    "en_def": "an action or event marking a significant change or stage in development.",
    "cn_def": "里程碑",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an action or event marking a significant change or stage in development.",
        "cn_def": "里程碑"
      }
    ]
  },
  "reach a milestone": {
    "pos": "phr.",
    "en_def": "to achieve a significant stage in a process.",
    "cn_def": "達到里程碑",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to achieve a significant stage in a process.",
        "cn_def": "達到里程碑"
      }
    ]
  },
  "reach a major milestone": {
    "pos": "phr.",
    "en_def": "to achieve a significant stage in a process.",
    "cn_def": "達到里程碑",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to achieve a significant stage in a process.",
        "cn_def": "達到里程碑"
      }
    ]
  },
  "historic milestone": {
    "pos": "phr.",
    "en_def": "an event of great historical importance.",
    "cn_def": "歷史性的里程碑",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an event of great historical importance.",
        "cn_def": "歷史性的里程碑"
      }
    ]
  },
  "landmark": {
    "pos": "n.",
    "en_def": "A famous building or object that is easily recognized and helps you know where you are.",
    "cn_def": "地標",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A famous building or object that is easily recognized and helps you know where you are.",
        "cn_def": "地標"
      },
      {
        "pos": "adj.",
        "en_def": "Extremely important and marking a major change or turning point in history.",
        "cn_def": "里程碑式的、具重大歷史意義的"
      }
    ]
  },
  "tourist destination": {
    "pos": "phr.",
    "en_def": "A place that many people travel to for a vacation or holiday.",
    "cn_def": "觀光勝地、旅遊目的地",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A place that many people travel to for a vacation or holiday.",
        "cn_def": "觀光勝地、旅遊目的地"
      }
    ]
  },
  "tourist attraction": {
    "pos": "phr.",
    "en_def": "A famous place that tourists like to visit, such as a museum, monument, or amusement park.",
    "cn_def": "觀光景點、旅遊景點",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A famous place that tourists like to visit, such as a museum, monument, or amusement park.",
        "cn_def": "觀光景點、旅遊景點"
      }
    ]
  },
  "scene": {
    "pos": "n.",
    "en_def": "a sequence of continuous action in a play, movie, opera, or book; a landscape.",
    "cn_def": "場景；景色",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sequence of continuous action in a play, movie, opera, or book; a landscape.",
        "cn_def": "場景；景色"
      }
    ]
  },
  "crime scene": {
    "pos": "n.",
    "en_def": "the specific geographic location where an illegal act, violence, or offense has historically occurred",
    "cn_def": "犯罪現場",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the specific geographic location where an illegal act, violence, or offense has historically occurred",
        "cn_def": "犯罪現場"
      }
    ]
  },
  "at the scene": {
    "pos": "phr.",
    "en_def": "being present right at the exact place where an event, accident, or specific incident occurred",
    "cn_def": "在現場",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "being present right at the exact place where an event, accident, or specific incident occurred",
        "cn_def": "在現場"
      }
    ]
  },
  "scenery": {
    "pos": "n.",
    "en_def": "the natural features of a landscape considered in terms of their appearance.",
    "cn_def": "風景；景色",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the natural features of a landscape considered in terms of their appearance.",
        "cn_def": "風景；景色"
      }
    ]
  },
  "scenic": {
    "pos": "adj.",
    "en_def": "providing or relating to views of impressive or beautiful natural scenery.",
    "cn_def": "風景優美的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "providing or relating to views of impressive or beautiful natural scenery.",
        "cn_def": "風景優美的"
      }
    ]
  },
  "scenic spot": {
    "pos": "phr.",
    "en_def": "A place known for its beautiful natural scenery, views, or landscapes.",
    "cn_def": "風景區、景點",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A place known for its beautiful natural scenery, views, or landscapes.",
        "cn_def": "風景區、景點"
      },
      {
        "pos": "phr.",
        "en_def": "A place known for its beautiful natural scenery, views, or landscapes.",
        "cn_def": "風景區、景點"
      }
    ]
  },
  "overlook the view": {
    "pos": "v.",
    "en_def": "take in the sight or natural scenery.",
    "cn_def": "俯瞰景色",
    "combined": [
      {
        "pos": "v.",
        "en_def": "take in the sight or natural scenery.",
        "cn_def": "俯瞰景色"
      }
    ]
  },
  "sight-seeing / sightseeing": {
    "pos": "n.",
    "en_def": "The activity of visiting famous or interesting places, especially as a tourist.",
    "cn_def": "觀光、遊覽",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The activity of visiting famous or interesting places, especially as a tourist.",
        "cn_def": "觀光、遊覽"
      }
    ]
  },
  "sightseeing": {
    "pos": "n.",
    "en_def": "The activity of visiting famous or interesting places, especially as a tourist.",
    "cn_def": "觀光、遊覽",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The activity of visiting famous or interesting places, especially as a tourist.",
        "cn_def": "觀光、遊覽"
      }
    ]
  },
  "go sightseeing": {
    "pos": "phr.",
    "en_def": "To travel around a place to see the interesting places and landmarks.",
    "cn_def": "去觀光、去遊覽",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To travel around a place to see the interesting places and landmarks.",
        "cn_def": "去觀光、去遊覽"
      }
    ]
  },
  "field trip": {
    "pos": "n.",
    "en_def": "a short journey made for pleasure, education, or physical exercise.",
    "cn_def": "郊遊；出遊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a short journey made for pleasure, education, or physical exercise.",
        "cn_def": "郊遊；出遊"
      }
    ]
  },
  "excursion": {
    "pos": "n.",
    "en_def": "A short journey or trip, usually for pleasure or education.",
    "cn_def": "（短途的）遠足、短途旅行",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A short journey or trip, usually for pleasure or education.",
        "cn_def": "（短途的）遠足、短途旅行"
      }
    ]
  },
  "expedition": {
    "pos": "n.",
    "en_def": "A long and carefully organized journey, often for scientific research or exploration.",
    "cn_def": "遠征、探險、考察隊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A long and carefully organized journey, often for scientific research or exploration.",
        "cn_def": "遠征、探險、考察隊"
      }
    ]
  },
  "explore": {
    "pos": "v.",
    "en_def": "To travel around a new place to learn about it or search for something.",
    "cn_def": "探索、探險、勘查",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To travel around a new place to learn about it or search for something.",
        "cn_def": "探索、探險、勘查"
      }
    ]
  },
  "exploration": {
    "pos": "n.",
    "en_def": "The act of traveling through a place to learn about it or discover something new.",
    "cn_def": "探索、探測、研究",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The act of traveling through a place to learn about it or discover something new.",
        "cn_def": "探索、探測、研究"
      }
    ]
  },
  "commute": {
    "pos": "v. / n.",
    "en_def": "to travel some distance between one's home and place of work on a regular basis.",
    "cn_def": "通勤",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to travel some distance between one's home and place of work on a regular basis.",
        "cn_def": "通勤"
      }
    ]
  },
  "commuters": {
    "pos": "n.",
    "en_def": "a person who travels some distance to work on a regular basis.",
    "cn_def": "通勤者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who travels some distance to work on a regular basis.",
        "cn_def": "通勤者"
      }
    ]
  },
  "commuter": {
    "pos": "n.",
    "en_def": "a person who travels some distance to work on a regular basis.",
    "cn_def": "通勤者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who travels some distance to work on a regular basis.",
        "cn_def": "通勤者"
      }
    ]
  },
  "commuting": {
    "pos": "n.",
    "en_def": "the activity of traveling regularly between one's place of residence and place of work or study",
    "cn_def": "每日通勤；上下班往返",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the activity of traveling regularly between one's place of residence and place of work or study",
        "cn_def": "每日通勤；上下班往返"
      }
    ]
  },
  "telecommute": {
    "pos": "v.",
    "en_def": "to work from home, making use of the internet, email, and the telephone.",
    "cn_def": "遠距辦公",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to work from home, making use of the internet, email, and the telephone.",
        "cn_def": "遠距辦公"
      }
    ]
  },
  "fulfilled": {
    "pos": "v.",
    "en_def": "to bring to completion or reality; achieve or realize.",
    "cn_def": "實現；履行",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to bring to completion or reality; achieve or realize.",
        "cn_def": "實現；履行"
      }
    ]
  },
  "fulfill": {
    "pos": "v.",
    "en_def": "to bring to completion or reality; achieve or realize.",
    "cn_def": "實現；履行",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to bring to completion or reality; achieve or realize.",
        "cn_def": "實現；履行"
      }
    ]
  },
  "fulfill the dream": {
    "pos": "phr.",
    "en_def": "to achieve something that one has long desired.",
    "cn_def": "實現夢想",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to achieve something that one has long desired.",
        "cn_def": "實現夢想"
      }
    ]
  },
  "carry out the objective": {
    "pos": "phr.",
    "en_def": "to act upon and achieve one's aspirations.",
    "cn_def": "實踐目標",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to act upon and achieve one's aspirations.",
        "cn_def": "實踐目標"
      }
    ]
  },
  "fulfilling": {
    "pos": "adj.",
    "en_def": "making someone satisfied or happy because of fully developing their abilities.",
    "cn_def": "令人滿足的；有成就感的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "making someone satisfied or happy because of fully developing their abilities.",
        "cn_def": "令人滿足的；有成就感的"
      }
    ]
  },
  "unfulfilled": {
    "pos": "adj.",
    "en_def": "not carried out or brought to completion.",
    "cn_def": "未實現的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not carried out or brought to completion.",
        "cn_def": "未實現的"
      }
    ]
  },
  "fulfillment": {
    "pos": "n.",
    "en_def": "the achievement of something desired, promised, or predicted.",
    "cn_def": "實現；滿足感",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the achievement of something desired, promised, or predicted.",
        "cn_def": "實現；滿足感"
      }
    ]
  },
  "a sense of fulfillment": {
    "pos": "phr.",
    "en_def": "A feeling of happiness and deep satisfaction because you are doing something meaningful or useful.",
    "cn_def": "滿足感、成就感",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A feeling of happiness and deep satisfaction because you are doing something meaningful or useful.",
        "cn_def": "滿足感、成就感"
      }
    ]
  },
  "a sense of achievement": {
    "pos": "phr.",
    "en_def": "A proud and happy feeling when you successfully complete something difficult through effort.",
    "cn_def": "成就感",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A proud and happy feeling when you successfully complete something difficult through effort.",
        "cn_def": "成就感"
      }
    ]
  },
  "a sense of accomplishment": {
    "pos": "phr.",
    "en_def": "A feeling of satisfaction from finishing a specific task or reaching a major goal.",
    "cn_def": "成就感",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A feeling of satisfaction from finishing a specific task or reaching a major goal.",
        "cn_def": "成就感"
      }
    ]
  },
  "timber": {
    "pos": "n.",
    "en_def": "wood prepared for use in building and carpentry.",
    "cn_def": "木材",
    "combined": [
      {
        "pos": "n.",
        "en_def": "wood prepared for use in building and carpentry.",
        "cn_def": "木材"
      }
    ]
  },
  "lumber": {
    "pos": "n.",
    "en_def": "timber sawn into rough planks or otherwise partly prepared.",
    "cn_def": "木材（尤指鋸好的）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "timber sawn into rough planks or otherwise partly prepared.",
        "cn_def": "木材（尤指鋸好的）"
      }
    ]
  },
  "logs": {
    "pos": "n.",
    "en_def": "a part of the trunk or a large branch of a tree that has fallen or been cut off.",
    "cn_def": "圓木；原木",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a part of the trunk or a large branch of a tree that has fallen or been cut off.",
        "cn_def": "圓木；原木"
      }
    ]
  },
  "log": {
    "pos": "n.",
    "en_def": "a part of the trunk or a large branch of a tree that has fallen or been cut off.",
    "cn_def": "圓木；原木",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a part of the trunk or a large branch of a tree that has fallen or been cut off.",
        "cn_def": "圓木；原木"
      }
    ]
  },
  "express": {
    "pos": "n./adj.",
    "en_def": "a rapid and efficient postal or delivery service designed to transport packages or goods very quickly",
    "cn_def": "快遞；快捷的",
    "combined": [
      {
        "pos": "n./adj.",
        "en_def": "a rapid and efficient postal or delivery service designed to transport packages or goods very quickly",
        "cn_def": "快遞；快捷的"
      }
    ]
  },
  "freight": {
    "pos": "n.",
    "en_def": "goods transported in bulk by truck, train, ship, or aircraft.",
    "cn_def": "貨物；貨運",
    "combined": [
      {
        "pos": "n.",
        "en_def": "goods transported in bulk by truck, train, ship, or aircraft.",
        "cn_def": "貨物；貨運"
      }
    ]
  },
  "cargo": {
    "pos": "n.",
    "en_def": "goods or merchandise carried on a large vehicle, such as a commercial ship, aircraft, or motor vehicle",
    "cn_def": "（大型交通工具裝載的）貨物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "goods or merchandise carried on a large vehicle, such as a commercial ship, aircraft, or motor vehicle",
        "cn_def": "（大型交通工具裝載的）貨物"
      }
    ]
  },
  "harbor": {
    "pos": "n.",
    "en_def": "a sheltered area of water next to the land where commercial ships or private boats can safely anchor",
    "cn_def": "港灣；港口",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sheltered area of water next to the land where commercial ships or private boats can safely anchor",
        "cn_def": "港灣；港口"
      }
    ]
  },
  "port": {
    "pos": "n.",
    "en_def": "a town or city with a harbor where commercial ships load or unload cargo smoothly",
    "cn_def": "港口；港市",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a town or city with a harbor where commercial ships load or unload cargo smoothly",
        "cn_def": "港口；港市"
      }
    ]
  },
  "import": {
    "pos": "v.",
    "en_def": "to bring goods, merchandise, or services into a country from abroad for commercial sale",
    "cn_def": "進口",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to bring goods, merchandise, or services into a country from abroad for commercial sale",
        "cn_def": "進口"
      }
    ]
  },
  "tariff": {
    "pos": "n.",
    "en_def": "a tax or duty imposed by a government on imported or exported goods to protect domestic industries",
    "cn_def": "關税",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a tax or duty imposed by a government on imported or exported goods to protect domestic industries",
        "cn_def": "關税"
      }
    ]
  },
  "goods": {
    "pos": "n.",
    "en_def": "merchandise or possessions.",
    "cn_def": "貨物；商品",
    "combined": [
      {
        "pos": "n.",
        "en_def": "merchandise or possessions.",
        "cn_def": "貨物；商品"
      }
    ]
  },
  "imported goods": {
    "pos": "n.",
    "en_def": "products, merchandise, or commodities that are brought into a country from a foreign nation",
    "cn_def": "進口貨物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "products, merchandise, or commodities that are brought into a country from a foreign nation",
        "cn_def": "進口貨物"
      }
    ]
  },
  "export": {
    "pos": "v.",
    "en_def": "to send goods, merchandise, or services to another country for international sale or trade",
    "cn_def": "出口",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to send goods, merchandise, or services to another country for international sale or trade",
        "cn_def": "出口"
      }
    ]
  },
  "exported goods": {
    "pos": "n.",
    "en_def": "products, merchandise, or commodities sent to a foreign country for commercial sale",
    "cn_def": "出口貨物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "products, merchandise, or commodities sent to a foreign country for commercial sale",
        "cn_def": "出口貨物"
      }
    ]
  },
  "commodity": {
    "pos": "n.",
    "en_def": "a raw material or primary agricultural product that can be bought and sold.",
    "cn_def": "商品；原物料",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a raw material or primary agricultural product that can be bought and sold.",
        "cn_def": "商品；原物料"
      }
    ]
  },
  "product": {
    "pos": "n.",
    "en_def": "an article or substance that is manufactured or refined for sale.",
    "cn_def": "產品",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an article or substance that is manufactured or refined for sale.",
        "cn_def": "產品"
      }
    ]
  },
  "fresh produce": {
    "pos": "n.",
    "en_def": "Fresh fruits and vegetables that are grown for food and sold to consumers.",
    "cn_def": "新鮮蔬果、生鮮農產品",
    "combined": [
      {
        "pos": "n.",
        "en_def": "Fresh fruits and vegetables that are grown for food and sold to consumers.",
        "cn_def": "新鮮蔬果、生鮮農產品"
      }
    ]
  },
  "produce": {
    "pos": "v.",
    "en_def": "To make, grow, or supply things, especially in large quantities.",
    "cn_def": "生產、製造、出產",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To make, grow, or supply things, especially in large quantities.",
        "cn_def": "生產、製造、出產"
      }
    ]
  },
  "productive": {
    "pos": "adj.",
    "en_def": "Achieving a lot or producing a good amount of useful results.",
    "cn_def": "富有成效的、有生產力的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Achieving a lot or producing a good amount of useful results.",
        "cn_def": "富有成效的、有生產力的"
      }
    ]
  },
  "productivity": {
    "pos": "n.",
    "en_def": "The rate at which a worker, company, or country completes tasks or produces goods.",
    "cn_def": "生產力、生產效率",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The rate at which a worker, company, or country completes tasks or produces goods.",
        "cn_def": "生產力、生產效率"
      }
    ]
  },
  "merchandise": {
    "pos": "n.",
    "en_def": "Goods or products that are bought and sold in a business or store.",
    "cn_def": "商品、貨物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "Goods or products that are bought and sold in a business or store.",
        "cn_def": "商品、貨物"
      }
    ]
  },
  "abandon": {
    "pos": "v.",
    "en_def": "to cease to support or look after; desert.",
    "cn_def": "放棄；拋棄",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cease to support or look after; desert.",
        "cn_def": "放棄；拋棄"
      }
    ]
  },
  "abandoned": {
    "pos": "v.",
    "en_def": "to cease to support or look after; desert.",
    "cn_def": "放棄；拋棄",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cease to support or look after; desert.",
        "cn_def": "放棄；拋棄"
      },
      {
        "pos": "adj.",
        "en_def": "having been deserted or cast off.",
        "cn_def": "被拋棄的；廢棄的"
      }
    ]
  },
  "desert": {
    "pos": "v.",
    "en_def": "to leave a person, place, or organization in a way that is considered disloyal.",
    "cn_def": "離棄；擅離職守",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to leave a person, place, or organization in a way that is considered disloyal.",
        "cn_def": "離棄；擅離職守"
      },
      {
        "pos": "n.",
        "en_def": "A large, dry area of land with very little water or plants, usually covered with sand.",
        "cn_def": "沙漠"
      }
    ]
  },
  "deserted": {
    "pos": "v.",
    "en_def": "to leave a person, place, or organization in a way that is considered disloyal.",
    "cn_def": "離棄；擅離職守",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to leave a person, place, or organization in a way that is considered disloyal.",
        "cn_def": "離棄；擅離職守"
      },
      {
        "pos": "adj.",
        "en_def": "Empty of people; with no one there.",
        "cn_def": "荒涼的、空無一人的、被遺棄的"
      }
    ]
  },
  "dessert": {
    "pos": "n.",
    "en_def": "Sweet food eaten at the end of a meal.",
    "cn_def": "甜點",
    "combined": [
      {
        "pos": "n.",
        "en_def": "Sweet food eaten at the end of a meal.",
        "cn_def": "甜點"
      }
    ]
  },
  "quit": {
    "pos": "v.",
    "en_def": "to leave usually permanently.",
    "cn_def": "戒除:辭職；放棄",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to leave usually permanently.",
        "cn_def": "戒除:辭職；放棄"
      }
    ]
  },
  "motor": {
    "pos": "n. / adj.",
    "en_def": "a machine that supplies motive power for a vehicle or for some other device.",
    "cn_def": "馬達；汽車的",
    "combined": [
      {
        "pos": "n. / adj.",
        "en_def": "a machine that supplies motive power for a vehicle or for some other device.",
        "cn_def": "馬達；汽車的"
      }
    ]
  },
  "motorist": {
    "pos": "n.",
    "en_def": "the driver of an automobile.",
    "cn_def": "汽車駕駛",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the driver of an automobile.",
        "cn_def": "汽車駕駛"
      }
    ]
  },
  "motorcyclist": {
    "pos": "n.",
    "en_def": "a rider of a motorcycle.",
    "cn_def": "機車騎士",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a rider of a motorcycle.",
        "cn_def": "機車騎士"
      }
    ]
  },
  "automobile": {
    "pos": "n.",
    "en_def": "a road vehicle, typically with four wheels, powered by an internal combustion engine or electric motor",
    "cn_def": "汽車",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a road vehicle, typically with four wheels, powered by an internal combustion engine or electric motor",
        "cn_def": "汽車"
      }
    ]
  },
  "mobile": {
    "pos": "adj.",
    "en_def": "able to move or be moved freely and easily, or relating to wireless mobile technology",
    "cn_def": "可移動的；行動式的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to move or be moved freely and easily, or relating to wireless mobile technology",
        "cn_def": "可移動的；行動式的"
      }
    ]
  },
  "portable": {
    "pos": "adj.",
    "en_def": "able to be easily carried or moved, especially because of being a lighter and smaller version than usual",
    "cn_def": "手提式的；便攜式的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to be easily carried or moved, especially because of being a lighter and smaller version than usual",
        "cn_def": "手提式的；便攜式的"
      }
    ]
  },
  "portable charger": {
    "pos": "n.",
    "en_def": "a lightweight and compact external battery pack used to power electronics while traveling",
    "cn_def": "行動電源",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a lightweight and compact external battery pack used to power electronics while traveling",
        "cn_def": "行動電源"
      }
    ]
  },
  "portable device": {
    "pos": "n.",
    "en_def": "any small, lightweight electronic apparatus or gadget designed to be easily carried or operated by hand",
    "cn_def": "便攜式裝置；行動設備",
    "combined": [
      {
        "pos": "n.",
        "en_def": "any small, lightweight electronic apparatus or gadget designed to be easily carried or operated by hand",
        "cn_def": "便攜式裝置；行動設備"
      }
    ]
  },
  "device": {
    "pos": "n.",
    "en_def": "a specialized mechanism, piece of equipment, or tool designed for a specific practical purpose",
    "cn_def": "裝置；設備；器具",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a specialized mechanism, piece of equipment, or tool designed for a specific practical purpose",
        "cn_def": "裝置；設備；器具"
      }
    ]
  },
  "devise": {
    "pos": "v.",
    "en_def": "to carefully plan, invent, or design a complex methodology, strategy, or system through creative thinking",
    "cn_def": "構思；想出；設計",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to carefully plan, invent, or design a complex methodology, strategy, or system through creative thinking",
        "cn_def": "構思；想出；設計"
      }
    ]
  },
  "mechanic": {
    "pos": "n.",
    "en_def": "a skilled worker who repairs and maintains automobile engines, heavy machinery, or mechanical devices",
    "cn_def": "技工；機械工",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a skilled worker who repairs and maintains automobile engines, heavy machinery, or mechanical devices",
        "cn_def": "技工；機械工"
      }
    ]
  },
  "mechanical": {
    "pos": "adj.",
    "en_def": "relating to, operated by, or caused by machinery, automated tools, or physical moving parts",
    "cn_def": "機械的；機械製的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to, operated by, or caused by machinery, automated tools, or physical moving parts",
        "cn_def": "機械的；機械製的"
      }
    ]
  },
  "manual": {
    "pos": "n..",
    "en_def": "a handbook of instructions",
    "cn_def": "使用手冊",
    "combined": [
      {
        "pos": "n..",
        "en_def": "a handbook of instructions",
        "cn_def": "使用手冊"
      },
      {
        "pos": "adj.",
        "en_def": "involving physical work done with hands rather than automated computers or electronic devices",
        "cn_def": "手工的；用手操作的"
      }
    ]
  },
  "manually": {
    "pos": "adv.",
    "en_def": "operated or done by a person using their hands directly, rather than by an automated system or machine",
    "cn_def": "用手地；手動地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "operated or done by a person using their hands directly, rather than by an automated system or machine",
        "cn_def": "用手地；手動地"
      }
    ]
  },
  "blessed": {
    "pos": "v.",
    "en_def": "to ask for God's help and protection for someone or something.",
    "cn_def": "祝福；賜福",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to ask for God's help and protection for someone or something.",
        "cn_def": "祝福；賜福"
      }
    ]
  },
  "bless": {
    "pos": "v.",
    "en_def": "to ask for God's help and protection for someone or something.",
    "cn_def": "祝福；賜福",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to ask for God's help and protection for someone or something.",
        "cn_def": "祝福；賜福"
      }
    ]
  },
  "blessing": {
    "pos": "n.",
    "en_def": "God's favor and protection.",
    "cn_def": "祝福；幸事",
    "combined": [
      {
        "pos": "n.",
        "en_def": "God's favor and protection.",
        "cn_def": "祝福；幸事"
      }
    ]
  },
  "be blessed with": {
    "pos": "phr.",
    "en_def": "to have a lot of a good or desirable thing.",
    "cn_def": "有幸擁有...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to have a lot of a good or desirable thing.",
        "cn_def": "有幸擁有..."
      }
    ]
  },
  "is always blessed with": {
    "pos": "phr.",
    "en_def": "to have a lot of a good or desirable thing.",
    "cn_def": "有幸擁有...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to have a lot of a good or desirable thing.",
        "cn_def": "有幸擁有..."
      }
    ]
  },
  "give his blessing": {
    "pos": "phr.",
    "en_def": "to give approval or support.",
    "cn_def": "給予准許/支持",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to give approval or support.",
        "cn_def": "給予准許/支持"
      }
    ]
  },
  "structure": {
    "pos": "n.",
    "en_def": "the arrangement of and relations between the parts or elements of something complex.",
    "cn_def": "結構；建築物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the arrangement of and relations between the parts or elements of something complex.",
        "cn_def": "結構；建築物"
      }
    ]
  },
  "structural": {
    "pos": "adj.",
    "en_def": "of, relating to, or forming part of the structure of a building.",
    "cn_def": "結構的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "of, relating to, or forming part of the structure of a building.",
        "cn_def": "結構的"
      }
    ]
  },
  "infrastructure": {
    "pos": "n.",
    "en_def": "the basic physical and organizational structures and facilities.",
    "cn_def": "基礎建設",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the basic physical and organizational structures and facilities.",
        "cn_def": "基礎建設"
      }
    ]
  },
  "monuments": {
    "pos": "n.",
    "en_def": "a statue, building, or other structure erected to commemorate a famous or notable person or event.",
    "cn_def": "紀念碑",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a statue, building, or other structure erected to commemorate a famous or notable person or event.",
        "cn_def": "紀念碑"
      }
    ]
  },
  "monument": {
    "pos": "n.",
    "en_def": "a statue, building, or other structure erected to commemorate a famous or notable person or event.",
    "cn_def": "紀念碑",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a statue, building, or other structure erected to commemorate a famous or notable person or event.",
        "cn_def": "紀念碑"
      }
    ]
  },
  "monumental": {
    "pos": "adj.",
    "en_def": "great in importance, extent, or size.",
    "cn_def": "具紀念性的；巨大的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "great in importance, extent, or size.",
        "cn_def": "具紀念性的；巨大的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
