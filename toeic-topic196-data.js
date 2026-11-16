// Topic 196 Quiz Data: International 國際
// Source word list: https://www.examword.com/group-topic/international — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T196 - International 國際",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "global",
    "pos": "adj.",
    "cn_def": "全球的；全世界的",
    "en_def": "relating to the whole world",
    "sentence": "A: Why does our marketing team need to hold so many video meetings late at night these days? B: Since the company launched its new {{BLANK}} campaign last month, we have to work closely with partners in Europe, Asia, and South America, so the meeting times are difficult for everyone.",
    "cn": "A：為什麼我們的行銷團隊最近需要在深夜開這麼多視訊會議？ B：自從公司上個月推出新的【全球】宣傳活動後，我們必須和歐洲、亞洲及南美洲的夥伴密切合作，所以會議時間對每個人來說都很難安排。"
  },
  {
    "word": "worldwide",
    "pos": "adj.",
    "cn_def": "全世界的；遍及全球的",
    "en_def": "happening or existing in all parts of the world",
    "sentence": "A: Have you heard any news about the new smartphone that our client is planning to release this spring? B: Yes, the manager told me it will have a {{BLANK}} launch on the same day in over fifty countries, so our factory must finish producing two million units by the end of February.",
    "cn": "A：你有聽到我們客戶打算今年春天推出的新智慧型手機的消息嗎？ B：有，經理告訴我它將在五十多個國家同一天進行【全球性的】上市，所以我們工廠必須在二月底前生產完兩百萬台。"
  },
  {
    "word": "overseas",
    "pos": "adv.",
    "cn_def": "在海外；到國外",
    "en_def": "in or to a foreign country across the sea",
    "sentence": "A: Why did Kevin suddenly quit his comfortable job at the bank downtown after working there for almost ten years? B: He received an exciting offer to work {{BLANK}} at a branch office in Singapore, and his wife thought it would be a great chance for their children to learn new languages.",
    "cn": "A：為什麼凱文在市中心的銀行工作了將近十年後，突然辭掉那份安穩的工作？ B：他收到一個令人興奮的機會，到新加坡的分公司【海外】工作，他太太認為這是讓孩子們學習新語言的好機會。"
  },
  {
    "word": "foreign",
    "pos": "adj.",
    "cn_def": "外國的",
    "en_def": "from or relating to another country",
    "sentence": "A: Why is the hotel front desk so busy this week, and why did the manager hire two extra part-time workers? B: A large group of {{BLANK}} tourists from Japan and Korea arrived for the music festival, so the staff need more help answering questions and arranging taxis to the city center.",
    "cn": "A：為什麼飯店櫃檯這週這麼忙，而且經理還多雇了兩名兼職員工？ B：一大群來自日本和韓國的【外國】觀光客為了音樂節來到這裡，所以員工需要更多人手幫忙回答問題和安排去市中心的計程車。"
  },
  {
    "word": "abroad",
    "pos": "adv.",
    "cn_def": "在國外；到國外",
    "en_def": "in or to a foreign country",
    "sentence": "A: Do you know why Linda has been taking evening Spanish classes after work for the past few months? B: She plans to study {{BLANK}} in Madrid next year for a business degree, and she wants to be able to talk with her classmates and teachers without any problems when she arrives.",
    "cn": "A：你知道為什麼琳達過去幾個月下班後都在上西班牙語夜間課程嗎？ B：她打算明年到【國外】的馬德里攻讀商業學位，她希望抵達時能和同學及老師順利交談。"
  },
  {
    "word": "multinational",
    "pos": "adj.",
    "cn_def": "跨國的；多國的",
    "en_def": "having offices or factories in many countries",
    "sentence": "A: Why are so many young graduates applying for jobs at that new office building next to the train station? B: A large {{BLANK}} company that has factories in twenty countries just opened its Asian headquarters there, and it offers good salaries, training programs, and chances to travel for work.",
    "cn": "A：為什麼有這麼多年輕畢業生去應徵火車站旁邊那棟新辦公大樓的工作？ B：一家在二十個國家設有工廠的大型【跨國】公司剛在那裡設立了亞洲總部，而且提供優渥的薪水、培訓課程，以及出差的機會。"
  },
  {
    "word": "transnational",
    "pos": "adj.",
    "cn_def": "跨國的；超越國界的",
    "en_def": "operating across the borders of several countries",
    "sentence": "A: Why did the police department invite experts from several countries to the meeting room this afternoon? B: They are working together to stop a {{BLANK}} crime group that steals credit card information online and moves the money through banks in different countries, so no single police force can handle it alone.",
    "cn": "A：為什麼警察局今天下午邀請了好幾個國家的專家到會議室？ B：他們正在合作阻止一個【跨國】犯罪集團，該集團在網路上竊取信用卡資料，並透過不同國家的銀行轉移金錢，所以沒有任何單一警力能獨自處理。"
  },
  {
    "word": "cross-border",
    "pos": "adj.",
    "cn_def": "跨境的",
    "en_def": "happening between two countries or across a border",
    "sentence": "A: Why has our online store started charging customers in Canada a higher shipping fee this month? B: Because {{BLANK}} deliveries now need extra customs forms and inspections, the shipping company raised its prices, and we decided to share some of the cost with our customers instead of paying it all ourselves.",
    "cn": "A：為什麼我們的網路商店這個月開始向加拿大顧客收取較高的運費？ B：因為【跨境】運送現在需要額外的海關表格和檢查，貨運公司調漲了價格，所以我們決定和顧客分擔一部分成本，而不是全部自己負擔。"
  },
  {
    "word": "diplomatic",
    "pos": "adj.",
    "cn_def": "圓滑的；外交的",
    "en_def": "skillful at dealing with people without upsetting them; relating to relations between countries",
    "sentence": "A: The two partner companies argued loudly during yesterday's meeting, so how did our manager manage to calm everyone down? B: She gave a very {{BLANK}} answer that respected both sides, suggested a short coffee break, and then helped them find a fair way to share the project costs.",
    "cn": "A：兩家合作公司在昨天的會議上吵得很大聲，我們經理最後是怎麼讓大家冷靜下來的？ B：她給了一個非常【圓融得體】的回答，尊重雙方立場，建議先短暫休息喝杯咖啡，然後幫助他們找到公平分攤專案費用的方法。"
  },
  {
    "word": "diplomacy",
    "pos": "n.",
    "cn_def": "外交；交際手腕",
    "en_def": "the work of managing relations between countries; skill in dealing with people",
    "sentence": "A: How did the two neighboring countries finally solve their long argument over the fishing rights near the islands? B: After months of careful {{BLANK}}, their leaders met in Geneva and agreed to share the fishing area, which pleased local fishermen and helped seafood companies in both countries plan for the future.",
    "cn": "A：這兩個鄰國最後是如何解決他們在島嶼附近漁權上的長期爭議？ B：經過數個月謹慎的【外交】斡旋，兩國領袖在日內瓦會面並同意共享漁區，這讓當地漁民很高興，也幫助兩國的海鮮公司規劃未來。"
  },
  {
    "word": "treaty",
    "pos": "n.",
    "cn_def": "條約；協定",
    "en_def": "a formal written agreement between countries",
    "sentence": "A: Why are the prices of imported cheese and wine at the supermarket so much lower than they were last year? B: Our government signed a free trade {{BLANK}} with several European countries in January, so import taxes on many food products were removed, and stores can now sell them more cheaply.",
    "cn": "A：為什麼超市裡進口起司和葡萄酒的價格比去年便宜這麼多？ B：我們政府在一月和幾個歐洲國家簽署了自由貿易【條約】，所以許多食品的進口稅被取消了，商店現在能以更便宜的價格販售。"
  },
  {
    "word": "alliance",
    "pos": "n.",
    "cn_def": "聯盟；結盟",
    "en_def": "an agreement between groups to work together for shared benefits",
    "sentence": "A: How will our small airline compete with the big companies now that fuel prices are rising so quickly? B: We are joining an {{BLANK}} with three other regional airlines, so we can share airport counters, sell each other's tickets, and offer passengers more destinations without buying new planes.",
    "cn": "A：既然燃料價格上漲得這麼快，我們這家小航空公司要如何和大公司競爭？ B：我們將和其他三家區域航空公司加入一個【聯盟】，這樣就能共用機場櫃台、互相銷售機票，並在不購買新飛機的情況下為乘客提供更多目的地。"
  },
  {
    "word": "cooperation",
    "pos": "n.",
    "cn_def": "合作；協力",
    "en_def": "the act of working together toward the same goal",
    "sentence": "A: How did the hospital manage to move all of its patients to the new building in just one weekend? B: It was possible because of the close {{BLANK}} between doctors, nurses, drivers, and city police, who planned every step carefully and worked long hours to keep the patients safe and comfortable.",
    "cn": "A：醫院是如何在短短一個週末內把所有病人搬到新大樓的？ B：這要歸功於醫生、護理師、司機和市警之間密切的【合作】，他們仔細規劃每一個步驟，並長時間工作以確保病人安全舒適。"
  },
  {
    "word": "collaboration",
    "pos": "n.",
    "cn_def": "合作；協作",
    "en_def": "the act of working with another person or group to create something",
    "sentence": "A: Who designed the beautiful new uniforms that the flight attendants started wearing last week? B: They were created in {{BLANK}} with a famous fashion designer from Paris, who visited our office several times to listen to the staff's ideas about comfort, color, and the local culture.",
    "cn": "A：空服員上週開始穿的漂亮新制服是誰設計的？ B：那是與一位來自巴黎的知名時尚設計師【合作】創作的，她來我們辦公室好幾次，聆聽員工對舒適度、顏色和在地文化的想法。"
  },
  {
    "word": "exchange",
    "pos": "n.",
    "cn_def": "交流；交換",
    "en_def": "the act of giving and receiving; a program in which people visit each other's countries",
    "sentence": "A: Why are there so many university students from Germany working in our engineering department this summer? B: They are part of a student {{BLANK}} program with a university in Berlin, and next year five of our young engineers will go there for three months to learn about German technology.",
    "cn": "A：為什麼今年夏天我們工程部有這麼多來自德國的大學生在工作？ B：他們參加的是和柏林一所大學合作的學生【交換】計畫，明年我們有五位年輕工程師也會去那裡三個月，學習德國的技術。"
  },
  {
    "word": "trade",
    "pos": "n.",
    "cn_def": "貿易",
    "en_def": "the buying and selling of goods between people or countries",
    "sentence": "A: Why is the port so crowded with container ships and trucks compared with this time last year? B: {{BLANK}} between our country and Southeast Asia has grown quickly since the new agreement was signed, so more goods like rice, electronics, and clothing are moving through the harbor every day.",
    "cn": "A：跟去年這個時候相比，為什麼港口擠滿了這麼多貨櫃船和卡車？ B：自從簽署新協議以來，我國與東南亞之間的【貿易】成長迅速，所以每天有更多像是稻米、電子產品和衣服的商品經過這個港口。"
  },
  {
    "word": "export",
    "pos": "v.",
    "cn_def": "出口；輸出",
    "en_def": "to send goods to another country to sell",
    "sentence": "A: Our tea farm has sold its products only in local markets for twenty years, so what is the plan for next year? B: The owner wants to {{BLANK}} our high-mountain oolong tea to Japan and Canada, so we are designing new packages with English labels and learning about the safety rules in those countries.",
    "cn": "A：我們的茶園二十年來都只在本地市場販售產品，那明年有什麼計畫？ B：老闆想把我們的高山烏龍茶【出口】到日本和加拿大，所以我們正在設計有英文標籤的新包裝，並了解那些國家的安全規定。"
  },
  {
    "word": "import",
    "pos": "v.",
    "cn_def": "進口；輸入",
    "en_def": "to bring goods from another country to sell",
    "sentence": "A: Why does this furniture store need such a big warehouse near the harbor when its showroom is quite small? B: The company has decided to {{BLANK}} most of its wooden tables and chairs from Indonesia and Vietnam, so it needs plenty of space to store the large shipments before delivering them to customers.",
    "cn": "A：這家家具店的展示間很小，為什麼還需要港口附近這麼大的倉庫？ B：公司決定從印尼和越南【進口】大部分的木製桌椅，所以需要足夠的空間存放大批貨物，再送到顧客手上。"
  },
  {
    "word": "tariff",
    "pos": "n.",
    "cn_def": "關稅",
    "en_def": "a tax on goods coming into or going out of a country",
    "sentence": "A: Why did the car company raise the price of its electric vehicles by almost ten percent this month? B: The government added a new {{BLANK}} on batteries and parts brought in from other countries, so the company's production costs went up, and it had to pass some of them on to buyers.",
    "cn": "A：為什麼這家汽車公司這個月把電動車的價格調漲了將近百分之十？ B：政府對從其他國家進口的電池和零件加徵了新的【關稅】，所以公司的生產成本上升，只好將部分成本轉嫁給買家。"
  },
  {
    "word": "visa",
    "pos": "n.",
    "cn_def": "簽證",
    "en_def": "an official document that lets you enter or stay in a country",
    "sentence": "A: Are you ready for your business trip to the trade show in Chicago at the end of next month? B: Not yet, because I still have to apply for a work {{BLANK}} at the American office downtown, and the travel agent said it can take up to three weeks to get approved.",
    "cn": "A：你準備好下個月底去芝加哥參加商展的出差了嗎？ B：還沒，因為我還得去市中心的美國辦事處申請工作【簽證】，旅行社說可能要花三週才會核准。"
  },
  {
    "word": "passport",
    "pos": "n.",
    "cn_def": "護照",
    "en_def": "an official document that shows who you are when you travel to other countries",
    "sentence": "A: Why are you looking through every drawer in your desk so nervously this morning before the flight? B: I can't find my {{BLANK}}, and without it I won't be allowed to board the plane to Tokyo for the client meeting, so please help me check the meeting room and the copy machine.",
    "cn": "A：你今天早上搭飛機前為什麼這麼緊張地翻找辦公桌的每個抽屜？ B：我找不到我的【護照】，沒有它我就不能登上飛往東京參加客戶會議的飛機，所以請幫我檢查會議室和影印機。"
  },
  {
    "word": "embassy",
    "pos": "n.",
    "cn_def": "大使館",
    "en_def": "the official office of a country's government in a foreign capital",
    "sentence": "A: Our engineer lost all his documents while working in Brazil last week, so what should he do now? B: He should go to our country's {{BLANK}} in the capital as soon as possible, because the officials there can give him a temporary travel document and help him contact his family.",
    "cn": "A：我們的工程師上週在巴西工作時遺失了所有證件，他現在該怎麼辦？ B：他應該盡快去首都的我國【大使館】，因為那裡的官員可以給他一份臨時旅行文件，並幫他聯絡家人。"
  },
  {
    "word": "consulate",
    "pos": "n.",
    "cn_def": "領事館",
    "en_def": "a government office in a foreign city that helps its citizens and handles visas",
    "sentence": "A: Do I have to fly all the way to the capital to get my documents signed for the job in Osaka? B: No, you can visit the Japanese {{BLANK}} here in our city instead, which handles visas and other papers for local residents, but remember to book an appointment online first.",
    "cn": "A：我必須一路飛到首都才能為大阪的工作把文件簽好嗎？ B：不用，你可以改去我們市區的日本【領事館】，那裡會為當地居民處理簽證和其他文件，但記得先上網預約。"
  },
  {
    "word": "summit",
    "pos": "n.",
    "cn_def": "高峰會",
    "en_def": "an important meeting between the leaders of governments",
    "sentence": "A: Why are the hotels near the convention center fully booked, and why are there so many police officers on the streets? B: Leaders from twenty countries are meeting at an economic {{BLANK}} there this weekend to discuss climate change and trade, so security is very tight around the whole area.",
    "cn": "A：為什麼會議中心附近的飯店都客滿了，街上還有這麼多警察？ B：二十個國家的領袖這個週末要在那裡參加一場經濟【高峰會】，討論氣候變遷和貿易，所以整個區域的保安非常嚴密。"
  },
  {
    "word": "conference",
    "pos": "n.",
    "cn_def": "會議；研討會",
    "en_def": "a large formal meeting where people discuss a subject",
    "sentence": "A: Will you be in the office next Tuesday to review the budget report with the finance team? B: No, I'll be in Seoul for three days attending an international {{BLANK}} on green energy, where I will give a short speech and meet possible partners from several Asian companies.",
    "cn": "A：下週二你會在辦公室和財務團隊一起檢查預算報告嗎？ B：不會，我會在首爾待三天參加一場關於綠色能源的國際【研討會】，我會在那裡做一個簡短演講，並與幾家亞洲公司的潛在夥伴見面。"
  },
  {
    "word": "organization",
    "pos": "n.",
    "cn_def": "組織；機構",
    "en_def": "a group of people who work together for a shared purpose",
    "sentence": "A: Why did you leave your job at the advertising company to work for much less money? B: I joined a non-profit {{BLANK}} that provides clean water to villages in Africa, and although the salary is lower, I feel proud that my work helps thousands of families every year.",
    "cn": "A：你為什麼離開廣告公司，去做一份薪水少很多的工作？ B：我加入了一個為非洲村莊提供乾淨用水的非營利【組織】，雖然薪水較低，但我很自豪我的工作每年能幫助數千個家庭。"
  },
  {
    "word": "ngo",
    "pos": "n.",
    "cn_def": "非政府組織",
    "en_def": "a non-governmental organization; a group that works for social causes without being part of a government",
    "sentence": "A: Who is paying for the free English classes that are held in the community center every Saturday morning? B: A local {{BLANK}} that receives donations from businesses and private citizens runs them, and our company sends two volunteers each week to help the teachers and prepare the learning materials.",
    "cn": "A：每週六早上在社區中心開設的免費英語課是誰出錢的？ B：是一個接受企業和民眾捐款的當地【非政府組織】舉辦的，我們公司每週會派兩名志工去協助老師並準備教材。"
  },
  {
    "word": "peacekeeping",
    "pos": "n.",
    "cn_def": "維和；維持和平",
    "en_def": "the work of keeping peace in an area, usually by international troops",
    "sentence": "A: Why has the city's largest hospital asked for volunteer doctors who can travel for six months? B: The United Nations is sending a {{BLANK}} team to a country recovering from a long war, and it needs medical staff to treat injured people and train local nurses while the soldiers protect the area.",
    "cn": "A：為什麼市內最大的醫院在徵求能出國六個月的志工醫師？ B：聯合國將派遣一支【維和】團隊到一個正從長期戰爭中復原的國家，需要醫護人員治療傷者並訓練當地護理師，同時由士兵保護該地區。"
  },
  {
    "word": "sanction",
    "pos": "n.",
    "cn_def": "制裁",
    "en_def": "an official order that limits trade or contact with a country to punish it",
    "sentence": "A: Why did our company suddenly stop shipping machine parts to that country last month? B: Several governments placed a strict {{BLANK}} on trade with it after it broke an international agreement, so we are not allowed to sell any equipment there until the rules change.",
    "cn": "A：為什麼我們公司上個月突然停止運送機械零件到那個國家？ B：在那個國家違反了一項國際協議後，好幾個國家政府對它的貿易實施了嚴格的【制裁】，所以在規定改變之前，我們不能在那裡販售任何設備。"
  },
  {
    "word": "negotiation",
    "pos": "n.",
    "cn_def": "談判；協商",
    "en_def": "formal discussion to reach an agreement",
    "sentence": "A: Has the purchasing team agreed on a final price with the steel supplier in Korea yet? B: Not yet, because the {{BLANK}} has taken longer than expected, but both sides are meeting again on Friday, and our director hopes to sign the contract before the end of the month.",
    "cn": "A：採購團隊和韓國的鋼鐵供應商談好最終價格了嗎？ B：還沒，因為【談判】花的時間比預期長，不過雙方週五會再見面，我們主管希望在月底前簽下合約。"
  },
  {
    "word": "integration",
    "pos": "n.",
    "cn_def": "融合；整合",
    "en_def": "the process of combining people or things so they work together as one",
    "sentence": "A: Why has the company hired so many trainers and translators since it bought the factory in Mexico? B: The managers want a smooth {{BLANK}} of the new workers into our company, so they are offering language lessons, training on our safety rules, and team activities to help everyone work well together.",
    "cn": "A：自從公司買下墨西哥的工廠後，為什麼雇用了這麼多培訓師和翻譯？ B：經理們希望新員工能順利【融入】我們公司，所以提供語言課程、安全規範訓練和團隊活動，幫助大家好好合作。"
  },
  {
    "word": "diversity",
    "pos": "n.",
    "cn_def": "多樣性；多元化",
    "en_def": "the state of including many different types of people or things",
    "sentence": "A: What do you like most about working at the new international design office in Singapore? B: I love the {{BLANK}} of the team, because my coworkers come from eight different countries, and their different cultures, languages, and experiences give us many creative ideas for our clients' products.",
    "cn": "A：你最喜歡在新加坡新的國際設計辦公室工作的哪一點？ B：我喜歡團隊的【多元性】，因為我的同事來自八個不同國家，他們不同的文化、語言和經驗為客戶的產品帶來許多創意點子。"
  },
  {
    "word": "mobility",
    "pos": "n.",
    "cn_def": "流動性；移動能力",
    "en_def": "the ability to move easily between places or jobs",
    "sentence": "A: Why do so many young engineers want to work for this large company even though the starting salary is average? B: The company offers excellent job {{BLANK}}, which means employees can easily move to its offices in London, Tokyo, or New York after two years and gain valuable international experience.",
    "cn": "A：即使起薪普通，為什麼還有這麼多年輕工程師想到這家大公司工作？ B：這家公司提供很好的工作【流動性】，也就是員工兩年後可以輕鬆調到倫敦、東京或紐約的辦公室，獲得寶貴的國際經驗。"
  },
  {
    "word": "connectivity",
    "pos": "n.",
    "cn_def": "連線能力；連通性",
    "en_def": "the ability to connect to networks or other systems",
    "sentence": "A: Why did the conference organizers choose this hotel instead of the cheaper one near the airport? B: This hotel offers much better internet {{BLANK}} in every meeting room, and since many speakers will join by video from other countries, a strong and stable connection is very important.",
    "cn": "A：為什麼會議主辦單位選擇這家飯店，而不是機場附近比較便宜的那家？ B：這家飯店每間會議室都有好得多的網路【連線品質】，而且因為許多講者會從其他國家透過視訊參加，穩定強大的連線非常重要。"
  },
  {
    "word": "interdependence",
    "pos": "n.",
    "cn_def": "相互依存",
    "en_def": "a situation in which people or countries depend on each other",
    "sentence": "A: Why did the factory in our town have to stop production when there was an earthquake in another country? B: It shows the strong {{BLANK}} of today's economies, because our factory depends on computer chips made there, and without those small parts we cannot finish building our machines.",
    "cn": "A：為什麼另一個國家發生地震時，我們鎮上的工廠必須停止生產？ B：這顯示出當今各經濟體之間強烈的【相互依存】，因為我們的工廠依賴那裡製造的電腦晶片，沒有那些小零件，我們就無法完成機器的組裝。"
  }
];

const MCQS = [
  {
    "q": "The coffee chain has become a _____ brand with stores on every continent. Its logo is now recognized by customers almost everywhere.",
    "options": [
      "global",
      "diplomatic",
      "empty",
      "polite"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The singer's new album became a _____ success within a few weeks. It reached the top of the charts in more than thirty countries.",
    "options": [
      "diplomatic",
      "foreign",
      "worldwide",
      "multinational"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "After ten years in the Taipei office, Henry Lin was transferred _____ to manage the London branch. His family will join him next spring.",
    "options": [
      "upstairs",
      "overseas",
      "backward",
      "apart"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Travelers can change their money into _____ currency at the counter near Gate 5. The service is open twenty-four hours a day.",
    "options": [
      "diplomatic",
      "generous",
      "nervous",
      "foreign"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Many college graduates choose to work _____ for a few years after school. They gain language skills and valuable international experience.",
    "options": [
      "upward",
      "aside",
      "abroad",
      "apart"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Lisa works for a large _____ corporation with offices in twelve countries. She often travels to meetings in Asia and Europe.",
    "options": [
      "multinational",
      "diplomatic",
      "curious",
      "careless"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The new bridge has made _____ shopping between the two countries much easier. Thousands of people now cross it every weekend.",
    "options": [
      "diplomatic",
      "multinational",
      "worldwide",
      "cross-border"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The manager gave a _____ reply to the angry customer's complaint. She stayed polite and calm while explaining the company's refund policy.",
    "options": [
      "foreign",
      "diplomatic",
      "global",
      "worldwide"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The two governments avoided a trade war through months of quiet _____. Their leaders finally agreed on new rules for steel imports.",
    "options": [
      "diplomacy",
      "passport",
      "tariff",
      "visa"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The neighboring countries signed a peace _____ in Geneva after years of conflict. The agreement opened their borders to tourism and business.",
    "options": [
      "passport",
      "consulate",
      "treaty",
      "visa"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Three regional airlines formed an _____ to share routes and airport lounges. Passengers can now earn miles on all three carriers.",
    "options": [
      "embassy",
      "alliance",
      "tariff",
      "passport"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The festival ran smoothly thanks to the close _____ between city officials and local businesses. Everyone worked together to manage the large crowds.",
    "options": [
      "passport",
      "tariff",
      "sanction",
      "cooperation"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The sports brand released a new line of shoes in _____ with a famous Korean artist. The limited designs sold out within hours.",
    "options": [
      "embassy",
      "visa",
      "collaboration",
      "tariff"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Our university runs a student _____ program with schools in France and Spain. Each semester, ten students study abroad for credit.",
    "options": [
      "exchange",
      "tariff",
      "embassy",
      "sanction"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "_____ between the two countries has doubled since the new agreement took effect. Ships now carry more electronics and farm products every month.",
    "options": [
      "visa",
      "consulate",
      "passport",
      "trade"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The farm plans to _____ its fresh mangoes to Japan and Korea next year. It has already passed the strict food safety inspections there.",
    "options": [
      "import",
      "export",
      "refuse",
      "borrow"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Our store will _____ more wooden furniture from Indonesia this year. The pieces will arrive by ship at the southern port in March.",
    "options": [
      "import",
      "export",
      "refuse",
      "explain"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The government placed a ten percent _____ on imported cars last spring. As a result, local car dealers raised their prices.",
    "options": [
      "embassy",
      "alliance",
      "tariff",
      "passport"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Before you start your new job in Canada, you must apply for a work _____. The process usually takes about six weeks.",
    "options": [
      "treaty",
      "visa",
      "summit",
      "alliance"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Please make sure your _____ is valid for at least six months before booking international flights. Some countries refuse entry to travelers otherwise.",
    "options": [
      "summit",
      "alliance",
      "tariff",
      "passport"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Citizens who lose their documents abroad should contact their country's _____ in the capital immediately. Staff there can issue emergency travel papers.",
    "options": [
      "tariff",
      "treaty",
      "embassy",
      "sanction"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The Japanese _____ in Kaohsiung handles visa applications for residents of southern Taiwan. Applicants should book an appointment online before visiting.",
    "options": [
      "consulate",
      "treaty",
      "tariff",
      "sanction"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "World leaders will meet at the climate _____ in Paris next month. They hope to agree on new targets for reducing pollution.",
    "options": [
      "passport",
      "visa",
      "tariff",
      "summit"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "More than two thousand experts attended the medical _____ at the convention center. Speakers shared the latest research on heart disease.",
    "options": [
      "tariff",
      "conference",
      "passport",
      "visa"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Mary volunteers every weekend for a non-profit _____ that helps homeless families. She sorts donated clothes and serves hot meals.",
    "options": [
      "organization",
      "tariff",
      "passport",
      "treaty"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Several countries imposed a strict _____ on the government after it ignored the peace agreement. The penalty stopped most of its oil exports.",
    "options": [
      "passport",
      "visa",
      "sanction",
      "consulate"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "After three weeks of difficult _____, the union and the company finally reached an agreement. Workers will receive a five percent raise.",
    "options": [
      "passport",
      "negotiation",
      "embassy",
      "visa"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The city offers free language classes to support the _____ of new residents into the community. Many newcomers also join local volunteer groups.",
    "options": [
      "tariff",
      "passport",
      "summit",
      "integration"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The company is proud of the _____ of its staff, who come from fifteen countries. Different backgrounds help the team create fresh ideas.",
    "options": [
      "tariff",
      "passport",
      "diversity",
      "treaty"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The new subway line will greatly improve the _____ of workers who live in the suburbs. Commuting times will drop by nearly thirty minutes.",
    "options": [
      "mobility",
      "tariff",
      "treaty",
      "passport"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "global": {
    "pos": "adj.",
    "en_def": "relating to the whole world",
    "cn_def": "全球的；全世界的"
  },
  "worldwide": {
    "pos": "adj.",
    "en_def": "happening or existing in all parts of the world",
    "cn_def": "全世界的；遍及全球的"
  },
  "overseas": {
    "pos": "adv.",
    "en_def": "in or to a foreign country across the sea",
    "cn_def": "在海外；到國外"
  },
  "foreign": {
    "pos": "adj.",
    "en_def": "from or relating to another country",
    "cn_def": "外國的"
  },
  "abroad": {
    "pos": "adv.",
    "en_def": "in or to a foreign country",
    "cn_def": "在國外；到國外"
  },
  "multinational": {
    "pos": "adj.",
    "en_def": "having offices or factories in many countries",
    "cn_def": "跨國的；多國的"
  },
  "transnational": {
    "pos": "adj.",
    "en_def": "operating across the borders of several countries",
    "cn_def": "跨國的；超越國界的"
  },
  "cross-border": {
    "pos": "adj.",
    "en_def": "happening between two countries or across a border",
    "cn_def": "跨境的"
  },
  "diplomatic": {
    "pos": "adj.",
    "en_def": "skillful at dealing with people without upsetting them; relating to relations between countries",
    "cn_def": "圓滑的；外交的"
  },
  "diplomacy": {
    "pos": "n.",
    "en_def": "the work of managing relations between countries; skill in dealing with people",
    "cn_def": "外交；交際手腕"
  },
  "treaty": {
    "pos": "n.",
    "en_def": "a formal written agreement between countries",
    "cn_def": "條約；協定"
  },
  "alliance": {
    "pos": "n.",
    "en_def": "an agreement between groups to work together for shared benefits",
    "cn_def": "聯盟；結盟"
  },
  "cooperation": {
    "pos": "n.",
    "en_def": "the act of working together toward the same goal",
    "cn_def": "合作；協力"
  },
  "collaboration": {
    "pos": "n.",
    "en_def": "the act of working with another person or group to create something",
    "cn_def": "合作；協作"
  },
  "exchange": {
    "pos": "n.",
    "en_def": "the act of giving and receiving; a program in which people visit each other's countries",
    "cn_def": "交流；交換"
  },
  "trade": {
    "pos": "n.",
    "en_def": "the buying and selling of goods between people or countries",
    "cn_def": "貿易"
  },
  "export": {
    "pos": "v.",
    "en_def": "to send goods to another country to sell",
    "cn_def": "出口；輸出"
  },
  "import": {
    "pos": "v.",
    "en_def": "to bring goods from another country to sell",
    "cn_def": "進口；輸入"
  },
  "tariff": {
    "pos": "n.",
    "en_def": "a tax on goods coming into or going out of a country",
    "cn_def": "關稅"
  },
  "visa": {
    "pos": "n.",
    "en_def": "an official document that lets you enter or stay in a country",
    "cn_def": "簽證"
  },
  "passport": {
    "pos": "n.",
    "en_def": "an official document that shows who you are when you travel to other countries",
    "cn_def": "護照"
  },
  "embassy": {
    "pos": "n.",
    "en_def": "the official office of a country's government in a foreign capital",
    "cn_def": "大使館"
  },
  "consulate": {
    "pos": "n.",
    "en_def": "a government office in a foreign city that helps its citizens and handles visas",
    "cn_def": "領事館"
  },
  "summit": {
    "pos": "n.",
    "en_def": "an important meeting between the leaders of governments",
    "cn_def": "高峰會"
  },
  "conference": {
    "pos": "n.",
    "en_def": "a large formal meeting where people discuss a subject",
    "cn_def": "會議；研討會"
  },
  "organization": {
    "pos": "n.",
    "en_def": "a group of people who work together for a shared purpose",
    "cn_def": "組織；機構"
  },
  "ngo": {
    "pos": "n.",
    "en_def": "a non-governmental organization; a group that works for social causes without being part of a government",
    "cn_def": "非政府組織"
  },
  "peacekeeping": {
    "pos": "n.",
    "en_def": "the work of keeping peace in an area, usually by international troops",
    "cn_def": "維和；維持和平"
  },
  "sanction": {
    "pos": "n.",
    "en_def": "an official order that limits trade or contact with a country to punish it",
    "cn_def": "制裁"
  },
  "negotiation": {
    "pos": "n.",
    "en_def": "formal discussion to reach an agreement",
    "cn_def": "談判；協商"
  },
  "integration": {
    "pos": "n.",
    "en_def": "the process of combining people or things so they work together as one",
    "cn_def": "融合；整合"
  },
  "diversity": {
    "pos": "n.",
    "en_def": "the state of including many different types of people or things",
    "cn_def": "多樣性；多元化"
  },
  "mobility": {
    "pos": "n.",
    "en_def": "the ability to move easily between places or jobs",
    "cn_def": "流動性；移動能力"
  },
  "connectivity": {
    "pos": "n.",
    "en_def": "the ability to connect to networks or other systems",
    "cn_def": "連線能力；連通性"
  },
  "interdependence": {
    "pos": "n.",
    "en_def": "a situation in which people or countries depend on each other",
    "cn_def": "相互依存"
  }
};

const EXTRA_GLOSSES = {};
