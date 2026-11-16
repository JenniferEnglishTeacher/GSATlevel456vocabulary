// Topic 157 Quiz Data: Globalization 全球化
// Source word list: https://www.examword.com/group-topic/globalization — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T157 - Globalization 全球化",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "integration",
    "pos": "n.",
    "cn_def": "整合；融合",
    "en_def": "the process of joining different parts or groups so they work together as one",
    "sentence": "A: Why has the head office asked every branch manager to attend a two-day workshop in Singapore next month instead of the usual online meeting? B: The company bought two smaller firms in Asia last year, and the directors believe that the {{BLANK}} of their sales teams will be much smoother if everyone meets face to face.",
    "cn": "A：為什麼總公司要求每位分店經理下個月到新加坡參加為期兩天的研習，而不是平常的線上會議？ B：公司去年在亞洲收購了兩家較小的公司，董事們認為如果大家面對面見面，雙方銷售團隊的【整合】會順利得多。"
  },
  {
    "word": "multinational",
    "pos": "adj.",
    "cn_def": "跨國的；多國的",
    "en_def": "working in or involving many different countries",
    "sentence": "A: Are you still thinking about leaving the small design studio downtown, or have you decided to stay there for a few more years? B: I actually accepted an offer from a large {{BLANK}} company with offices in twelve countries, so I hope to work abroad for a while and improve my language skills.",
    "cn": "A：你還在考慮離開市中心那間小型設計工作室嗎，還是已經決定再待幾年？ B：其實我接受了一家在十二個國家設有辦公室的大型【跨國】公司的工作邀約，所以我希望能到國外工作一段時間，順便提升語言能力。"
  },
  {
    "word": "trade",
    "pos": "n.",
    "cn_def": "貿易；買賣",
    "en_def": "the activity of buying and selling goods between people, companies or countries",
    "sentence": "A: Why are so many local fruit farmers suddenly sending their mangoes to Japan and Korea instead of selling them at the night markets as they did before? B: The government signed a new agreement last spring that makes {{BLANK}} with those countries cheaper and easier, so farmers can now earn much higher prices overseas.",
    "cn": "A：為什麼這麼多本地果農突然把芒果賣到日本和韓國，而不像以前一樣在夜市販售？ B：政府去年春天簽署了一項新協議，讓與這些國家的【貿易】變得更便宜、更容易，所以農民現在在海外能賣到高得多的價格。"
  },
  {
    "word": "tariff",
    "pos": "n.",
    "cn_def": "關稅",
    "en_def": "a tax that a government puts on goods coming into or going out of a country",
    "sentence": "A: Have you noticed that the price of the imported cheese in the staff cafeteria went up by almost thirty percent this month? B: Yes, the manager explained that a new {{BLANK}} on European dairy products started in October, so the supplier had to pay more at the border and passed the cost on to us.",
    "cn": "A：你有沒有注意到員工餐廳裡進口起司的價格這個月漲了將近三成？ B：有啊，經理解釋說十月起對歐洲乳製品開始課徵一項新的【關稅】，所以供應商在通關時得付更多錢，就把成本轉嫁給我們了。"
  },
  {
    "word": "export",
    "pos": "v.",
    "cn_def": "出口；輸出",
    "en_def": "to send goods to another country to sell them",
    "sentence": "A: Our tea sales in Taiwan have been flat for two years, so what does the marketing director suggest we do to grow the business? B: She wants us to {{BLANK}} our premium oolong to Canada and Australia, because many health-conscious customers there are willing to pay more for high-quality products from Asia.",
    "cn": "A：我們在台灣的茶葉銷售兩年來都沒有成長，行銷總監建議我們怎麼擴展業務？ B：她希望我們把高級烏龍茶【出口】到加拿大和澳洲，因為那裡很多注重健康的顧客願意花更多錢購買來自亞洲的優質產品。"
  },
  {
    "word": "import",
    "pos": "v.",
    "cn_def": "進口；輸入",
    "en_def": "to bring goods into a country from another country to sell them",
    "sentence": "A: Why does the new furniture shop near the station have so many beautiful wooden tables that you cannot find anywhere else in the city? B: The owner travels to Indonesia twice a year, chooses the pieces herself, and then has them shipped here, because she prefers to {{BLANK}} handmade items rather than buy from local factories.",
    "cn": "A：為什麼車站附近那家新開的家具店有那麼多在城裡其他地方都找不到的漂亮木桌？ B：老闆每年去印尼兩次，親自挑選家具再運回來，因為她比較喜歡【進口】手工製品，而不是向本地工廠購買。"
  },
  {
    "word": "outsourcing",
    "pos": "n.",
    "cn_def": "外包",
    "en_def": "paying another company, often in another country, to do work that your company used to do itself",
    "sentence": "A: How did our accounting department manage to cut its costs so much this year without hiring fewer people or asking anyone to work overtime? B: The finance team started {{BLANK}} the monthly payroll to a specialist firm in Manila, which allowed our own staff to focus on budgeting and other more important tasks.",
    "cn": "A：今年我們會計部門是如何在不減少人手、也不要求任何人加班的情況下大幅降低成本的？ B：財務團隊開始把每月的薪資作業【外包】給馬尼拉一家專業公司，讓我們自己的員工能專注在預算編列和其他更重要的工作上。"
  },
  {
    "word": "supply chain",
    "pos": "n.phr.",
    "cn_def": "供應鏈",
    "en_def": "the whole series of companies and steps involved in making a product and getting it to customers",
    "sentence": "A: Why were the new laptops for the sales team delivered six weeks late, even though we placed the order back in January? B: The computer maker said a factory fire in one country and a shipping delay in another caused serious problems across its whole {{BLANK}}, so many customers around the world had to wait.",
    "cn": "A：為什麼業務團隊的新筆電晚了六週才送到，我們明明一月就下單了？ B：電腦製造商說，一個國家的工廠火災加上另一個國家的運輸延誤，讓他們整個【供應鏈】出現嚴重問題，所以全球很多客戶都得等待。"
  },
  {
    "word": "cultural exchange",
    "pos": "n.phr.",
    "cn_def": "文化交流",
    "en_def": "an activity in which people from different countries share and learn about each other's customs and way of life",
    "sentence": "A: What is the purpose of the program that brings twenty young engineers from Vietnam to work in our Taichung office for six months? B: Besides training them in new skills, the company sees it as a {{BLANK}}, since our local staff can learn about Vietnamese customs while the visitors experience daily life in Taiwan.",
    "cn": "A：讓二十位越南年輕工程師到我們台中辦公室工作六個月的這個計畫目的是什麼？ B：除了訓練他們新技能，公司也把它視為一種【文化交流】，因為我們的本地員工可以認識越南的習俗，而來訪者也能體驗台灣的日常生活。"
  },
  {
    "word": "migration",
    "pos": "n.",
    "cn_def": "遷移；移民",
    "en_def": "the movement of people from one place or country to another to live or work",
    "sentence": "A: Why is the city planning to build three new schools and a large hospital in the northern district over the next five years? B: The report showed that the {{BLANK}} of young families from the countryside into that area has grown quickly, because many new factories there are offering stable jobs and good salaries.",
    "cn": "A：為什麼市政府計畫在未來五年內於北區興建三所新學校和一間大型醫院？ B：報告顯示從鄉村【遷移】到該地區的年輕家庭快速增加，因為那裡很多新工廠提供穩定的工作和不錯的薪水。"
  },
  {
    "word": "urbanization",
    "pos": "n.",
    "cn_def": "都市化",
    "en_def": "the process by which more and more people leave the countryside to live in towns and cities",
    "sentence": "A: Our sales of small apartment furniture have doubled in Southeast Asia, but do you know what is driving this sudden demand? B: Rapid {{BLANK}} is the main reason, since millions of people are moving from farms into crowded cities, where they live in smaller homes and need furniture that saves space.",
    "cn": "A：我們的小坪數公寓家具在東南亞的銷量翻倍了，你知道是什麼帶動這股突然的需求嗎？ B：快速的【都市化】是主要原因，因為數百萬人從農村搬到擁擠的城市，住在較小的房子裡，需要節省空間的家具。"
  },
  {
    "word": "digitalization",
    "pos": "n.",
    "cn_def": "數位化",
    "en_def": "the change to using computers and digital technology to do work that was done on paper or by hand",
    "sentence": "A: Why did the bank close two of its branches downtown and move several tellers to the customer service center last year? B: Because of the {{BLANK}} of its services, most customers now open accounts, pay bills and transfer money on their phones, so far fewer people visit the branches in person.",
    "cn": "A：為什麼這家銀行去年關閉了市中心的兩間分行，還把幾位櫃員調到客服中心？ B：由於服務的【數位化】，現在大部分客戶都用手機開戶、繳費和轉帳，所以親自到分行的人少了很多。"
  },
  {
    "word": "connectivity",
    "pos": "n.",
    "cn_def": "連結性；連線能力",
    "en_def": "the ability of computers, phones or places to connect with each other or with the internet",
    "sentence": "A: Why did the conference organizers choose that new hotel by the river instead of the older one we used for the event last year? B: The new hotel offers much better internet {{BLANK}}, so speakers can show videos smoothly and guests from overseas can join the sessions online without any problems.",
    "cn": "A：為什麼會議主辦單位選了河邊那家新飯店，而不是我們去年辦活動用的那家舊飯店？ B：新飯店提供好得多的網路【連線能力】，講者可以順暢播放影片，海外來賓也能毫無問題地在線上參加議程。"
  },
  {
    "word": "free trade",
    "pos": "n.phr.",
    "cn_def": "自由貿易",
    "en_def": "trade between countries without taxes or limits on the goods that are bought and sold",
    "sentence": "A: Why are the car parts we buy from Thailand so much cheaper this year than they were when we first ordered them three years ago? B: The two governments signed a {{BLANK}} agreement last summer, which removed the extra taxes on many products, so our supplier can now offer us much lower prices.",
    "cn": "A：為什麼我們向泰國購買的汽車零件今年比三年前第一次訂購時便宜這麼多？ B：兩國政府去年夏天簽署了【自由貿易】協定，取消了許多產品的額外稅金，所以我們的供應商現在能提供低很多的價格。"
  },
  {
    "word": "liberalization",
    "pos": "n.",
    "cn_def": "自由化；開放",
    "en_def": "the act of making laws or rules less strict, especially so that business can grow",
    "sentence": "A: How were foreign banks able to open so many branches in that country over the last ten years when it used to be nearly impossible? B: After the financial {{BLANK}} in 2015, the government removed many strict rules on overseas firms, so international companies could finally enter the market and compete with local banks.",
    "cn": "A：過去十年外國銀行是怎麼在那個國家開設這麼多分行的？以前幾乎不可能啊。 B：在2015年金融【自由化】之後，政府取消了許多針對海外公司的嚴格規定，所以國際企業終於能進入市場，和本地銀行競爭。"
  },
  {
    "word": "investment",
    "pos": "n.",
    "cn_def": "投資",
    "en_def": "money that is put into a business or project in order to make a profit later",
    "sentence": "A: Why is the company suddenly hiring so many engineers and building a second factory outside Kaohsiung this year? B: A large Japanese firm made a major {{BLANK}} in our business last spring, giving us enough money to expand production and develop new products for customers in Asia and Europe.",
    "cn": "A：為什麼公司今年突然招募這麼多工程師，還在高雄郊區蓋第二座工廠？ B：一家日本大企業去年春天對我們公司做了一筆重大的【投資】，讓我們有足夠的資金擴大生產，並為亞洲和歐洲的客戶開發新產品。"
  },
  {
    "word": "deregulation",
    "pos": "n.",
    "cn_def": "解除管制；放寬管制",
    "en_def": "the removal of government rules and controls from an industry",
    "sentence": "A: Why are there so many cheap airlines offering flights between Taipei and other Asian cities these days compared with twenty years ago? B: The {{BLANK}} of the airline industry allowed new companies to set their own prices and routes, so competition increased and travelers can now find much lower fares.",
    "cn": "A：為什麼現在和二十年前相比，有這麼多廉價航空提供台北往返亞洲其他城市的航班？ B：航空業的【解除管制】讓新公司可以自訂票價和航線，於是競爭增加，旅客現在能找到便宜很多的機票。"
  },
  {
    "word": "cooperation",
    "pos": "n.",
    "cn_def": "合作",
    "en_def": "the act of working together with others to achieve a shared goal",
    "sentence": "A: How did the two rival electronics companies manage to finish the new charging station for electric scooters ahead of schedule? B: Thanks to close {{BLANK}} between their engineering teams, who shared ideas and test results every week, the project avoided many delays and was completed a full month early.",
    "cn": "A：那兩家互相競爭的電子公司是怎麼提前完成新的電動機車充電站的？ B：多虧兩家工程團隊的密切【合作】，他們每週分享想法和測試結果，這個專案避開了許多延誤，整整提早了一個月完成。"
  },
  {
    "word": "inequality",
    "pos": "n.",
    "cn_def": "不平等",
    "en_def": "an unfair situation in which some people have more money, chances or rights than others",
    "sentence": "A: What was the main topic of the speech that the economist gave at the business forum in Taipei yesterday afternoon? B: She talked about growing {{BLANK}} between rich and poor workers, explaining that while some people benefit from global markets, many factory workers have seen their wages stay the same for years.",
    "cn": "A：那位經濟學家昨天下午在台北商業論壇上的演講主題是什麼？ B：她談到富裕和貧窮勞工之間日益擴大的【不平等】，解釋說雖然有些人從全球市場中獲益，但許多工廠工人的薪水多年來都沒有增加。"
  },
  {
    "word": "homogenization",
    "pos": "n.",
    "cn_def": "同質化",
    "en_def": "the process of things becoming the same or very similar to each other",
    "sentence": "A: Why did the travel writer say in her latest article that many city centers around the world now feel almost exactly alike? B: She was worried about the {{BLANK}} of shopping streets, because the same coffee chains, fashion stores and fast-food restaurants have replaced many small local shops with their own special character.",
    "cn": "A：為什麼那位旅遊作家在最新文章中說世界各地許多市中心現在感覺幾乎一模一樣？ B：她擔心購物街的【同質化】，因為同樣的連鎖咖啡店、服飾店和速食餐廳已經取代了許多各具特色的在地小店。"
  },
  {
    "word": "localization",
    "pos": "n.",
    "cn_def": "在地化",
    "en_def": "the process of changing a product or service so that it suits the language and culture of a particular country",
    "sentence": "A: Our mobile game is very popular in Taiwan, so why can't we just launch the same version in Brazil next month? B: The game needs careful {{BLANK}} first, which means translating all the text into Portuguese, changing some holiday events and adjusting prices so that players there feel it was made for them.",
    "cn": "A：我們的手機遊戲在台灣很受歡迎，為什麼不能下個月直接在巴西推出同樣的版本？ B：遊戲需要先仔細做【在地化】，也就是把所有文字翻成葡萄牙文、修改一些節慶活動並調整價格，讓那裡的玩家覺得遊戲是為他們打造的。"
  },
  {
    "word": "sustainability",
    "pos": "n.",
    "cn_def": "永續性",
    "en_def": "the ability to continue for a long time without harming the environment or using up resources",
    "sentence": "A: Why did the board decide to switch to recycled packaging even though it costs the company about ten percent more? B: Many of our biggest overseas clients now ask suppliers to prove their {{BLANK}}, so reducing plastic waste helps us protect the environment and keep important contracts at the same time.",
    "cn": "A：為什麼董事會決定改用回收包裝，即使這會讓公司多花約一成的成本？ B：我們許多海外大客戶現在要求供應商證明自己的【永續性】，所以減少塑膠廢棄物能幫助我們保護環境，同時保住重要合約。"
  },
  {
    "word": "development",
    "pos": "n.",
    "cn_def": "發展；開發",
    "en_def": "the process of growing or improving, especially of a country's economy or a new product",
    "sentence": "A: Why is the bank lending so much money to build roads and power stations in that small country in Africa this year? B: The project supports the economic {{BLANK}} of the region, because better roads and reliable electricity will help local businesses grow and create thousands of new jobs for young people.",
    "cn": "A：為什麼這家銀行今年要借那麼多錢給非洲那個小國修建道路和發電廠？ B：這個計畫支持該地區的經濟【發展】，因為更好的道路和穩定的電力能幫助當地企業成長，並為年輕人創造數千個新工作。"
  },
  {
    "word": "infrastructure",
    "pos": "n.",
    "cn_def": "基礎建設",
    "en_def": "the basic systems a country or city needs, such as roads, bridges, power and water supply",
    "sentence": "A: Why did our company finally choose Vietnam instead of a nearby country for the new factory after visiting both places? B: The main reason was the {{BLANK}}, since the area in Vietnam already has modern highways, a large port and a stable power supply, which will make shipping our products much easier.",
    "cn": "A：為什麼公司在考察兩地之後，最後選擇越南而不是鄰近國家來設新工廠？ B：主要原因是【基礎建設】，因為越南那個地區已經有現代化的高速公路、大型港口和穩定的電力供應，運送產品會方便得多。"
  },
  {
    "word": "innovation",
    "pos": "n.",
    "cn_def": "創新",
    "en_def": "a new idea, method or product, or the act of creating one",
    "sentence": "A: How has that small software company from Hsinchu been able to win contracts against huge competitors from the United States? B: Its success comes from constant {{BLANK}}, because the team releases creative new features every few months and listens carefully to what customers need instead of copying other products.",
    "cn": "A：新竹那家小型軟體公司是怎麼在與美國大型競爭對手的較量中贏得合約的？ B：它的成功來自不斷的【創新】，因為團隊每隔幾個月就推出有創意的新功能，並且仔細傾聽客戶需求，而不是模仿其他產品。"
  },
  {
    "word": "competitiveness",
    "pos": "n.",
    "cn_def": "競爭力",
    "en_def": "the ability of a company or country to compete successfully with others",
    "sentence": "A: Why is the government offering free English and computer training courses to factory workers in central Taiwan this year? B: Officials hope to improve the {{BLANK}} of local manufacturers, since workers with better skills can help companies produce higher-quality goods and win more orders from foreign buyers.",
    "cn": "A：為什麼政府今年提供中台灣工廠工人免費的英文和電腦訓練課程？ B：官員希望提升本地製造商的【競爭力】，因為技能更好的工人能幫助公司生產品質更高的產品，並贏得更多外國買家的訂單。"
  },
  {
    "word": "diplomacy",
    "pos": "n.",
    "cn_def": "外交；外交手腕",
    "en_def": "the work of keeping good relations between the governments of different countries",
    "sentence": "A: Why did the president of our trade association travel to three European capitals last month to meet government officials? B: Her trip was part of an effort in economic {{BLANK}}, because building friendly relationships with those governments may help our members get fewer trade barriers and more business opportunities abroad.",
    "cn": "A：為什麼我們貿易協會的理事長上個月走訪三個歐洲首都和政府官員會面？ B：她的出訪是經濟【外交】工作的一部分，因為和那些政府建立友好關係，可能幫助我們的會員減少貿易障礙，並獲得更多海外商機。"
  },
  {
    "word": "interdependence",
    "pos": "n.",
    "cn_def": "相互依存",
    "en_def": "a situation in which people, companies or countries depend on each other",
    "sentence": "A: Why did a flood in one Southeast Asian country cause car factories in Japan and America to stop production for several weeks? B: It shows the strong {{BLANK}} of today's economies, since a single factory making small electronic parts can affect many manufacturers on the other side of the world.",
    "cn": "A：為什麼東南亞某個國家的一場水災，會讓日本和美國的汽車工廠停產好幾週？ B：這顯示出現今各經濟體之間高度的【相互依存】，因為一間製造小型電子零件的工廠，就可能影響世界另一端的許多製造商。"
  },
  {
    "word": "capitalism",
    "pos": "n.",
    "cn_def": "資本主義",
    "en_def": "an economic system in which businesses are owned by private people and run to make a profit",
    "sentence": "A: What did the professor focus on in his lecture about the history of the global economy at the business school last night? B: He explained how modern {{BLANK}} spread around the world after the 1990s, as more countries allowed private companies to own factories, compete freely and keep their profits.",
    "cn": "A：昨晚教授在商學院關於全球經濟史的講座中重點講了什麼？ B：他解釋了現代【資本主義】在1990年代之後如何擴散到全世界，因為越來越多國家允許私人公司擁有工廠、自由競爭並保留利潤。"
  },
  {
    "word": "market economy",
    "pos": "n.phr.",
    "cn_def": "市場經濟",
    "en_def": "an economic system in which prices and production are decided by supply and demand rather than by the government",
    "sentence": "A: Why are so many foreign companies now opening offices in that Eastern European country, which had very few businesses from abroad before? B: The country changed to a {{BLANK}} about twenty years ago, so prices are now set by supply and demand, and private firms can compete without strict government control.",
    "cn": "A：為什麼那個東歐國家以前幾乎沒有外國企業，現在卻有這麼多外國公司去設辦公室？ B：那個國家大約二十年前轉型為【市場經濟】，所以現在價格由供需決定，私人公司也能在沒有嚴格政府管控的情況下競爭。"
  },
  {
    "word": "diversification",
    "pos": "n.",
    "cn_def": "多角化；多樣化",
    "en_def": "the act of starting to sell different products or enter different markets to reduce risk",
    "sentence": "A: Why did the bicycle maker begin selling electric scooters and outdoor clothing when its bikes were already selling so well in Europe? B: The managers believe that {{BLANK}} reduces risk, because if demand for bicycles falls in one market, sales of the new products can still keep the company profitable.",
    "cn": "A：那家自行車製造商的自行車在歐洲已經賣得很好，為什麼還開始賣電動滑板車和戶外服飾？ B：經理們認為【多角化】能降低風險，因為如果某個市場的自行車需求下滑，新產品的銷售仍能讓公司維持獲利。"
  },
  {
    "word": "expansion",
    "pos": "n.",
    "cn_def": "擴張；擴展",
    "en_def": "the process of becoming larger, for example by opening new stores or entering new markets",
    "sentence": "A: Why is the bubble tea chain hiring so many new managers who can speak both English and Spanish this year? B: The company is planning a rapid {{BLANK}} into Mexico and the United States, where it hopes to open about fifty new stores in shopping malls and busy downtown areas.",
    "cn": "A：為什麼那家珍珠奶茶連鎖店今年招募這麼多會說英文和西班牙文的新經理？ B：公司正計畫快速【擴張】到墨西哥和美國，希望在購物中心和熱鬧的市中心開設約五十家新店。"
  },
  {
    "word": "collaboration",
    "pos": "n.",
    "cn_def": "合作；協作",
    "en_def": "the act of working together with another person or group to create or produce something",
    "sentence": "A: How did the Taiwanese sportswear brand manage to design such a popular running shoe for the international market so quickly? B: It was the result of a {{BLANK}} with a famous design studio in Italy, which shared its experience in style while our engineers focused on comfort and quality.",
    "cn": "A：那個台灣運動服飾品牌是怎麼這麼快就為國際市場設計出這麼受歡迎的跑鞋？ B：那是和義大利一家知名設計工作室【合作】的成果，對方分享了風格方面的經驗，而我們的工程師則專注在舒適度和品質上。"
  },
  {
    "word": "influence",
    "pos": "n.",
    "cn_def": "影響；影響力",
    "en_def": "the power to have an effect on people, things or the way something develops",
    "sentence": "A: Why do so many young people in Taipei now wear clothes and use phrases that come from Korean dramas and pop music? B: Korean entertainment has a strong {{BLANK}} on youth culture across Asia, because popular shows and singers are easy to watch online and quickly set new trends in fashion and language.",
    "cn": "A：為什麼台北現在有這麼多年輕人穿的衣服和說的用語都來自韓劇和流行音樂？ B：韓國娛樂對全亞洲的青年文化有很強的【影響】，因為熱門節目和歌手在網路上很容易看到，很快就帶起時尚和語言的新潮流。"
  }
];

const MCQS = [
  {
    "q": "The merger will require the full _____ of both companies' computer systems. IT staff expect the work to take about six months.",
    "options": [
      "integration",
      "inequality",
      "diplomacy",
      "migration"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Kenji works for a _____ firm with branches in over twenty countries. He often joins video calls with colleagues in Europe and South America.",
    "options": [
      "decrepit",
      "multinational",
      "illegible",
      "tearful"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Taiwan's _____ with Southeast Asia has grown steadily. Exports of machinery and electronics to the region reached a record high last year.",
    "options": [
      "urbanization",
      "homogenization",
      "trade",
      "sustainability"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The government placed a 15 percent _____ on imported steel. Local construction firms now pay more for building materials.",
    "options": [
      "innovation",
      "cooperation",
      "collaboration",
      "tariff"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The winery plans to _____ its red wines to Japan next year. It has already found a distributor in Osaka.",
    "options": [
      "export",
      "relax",
      "resolve",
      "linger"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Most supermarkets in the area _____ their bananas from the Philippines. Prices rise when storms damage the farms there.",
    "options": [
      "settle",
      "import",
      "strive",
      "praise"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "To lower costs, the airline began _____ its call center to a firm in India. Customer complaints, however, have increased since then.",
    "options": [
      "diplomacy",
      "inequality",
      "outsourcing",
      "capitalism"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The port strike caused delays throughout the _____. Several retailers could not restock their shelves before the holiday sales.",
    "options": [
      "market economy",
      "cultural exchange",
      "free trade",
      "supply chain"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Our university runs a summer _____ with a school in Kyoto. Students share traditional food, music and festivals from both countries.",
    "options": [
      "cultural exchange",
      "supply chain",
      "market economy",
      "free trade"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The steady _____ of workers from rural villages has changed the city. Housing demand near the industrial park keeps rising.",
    "options": [
      "deregulation",
      "migration",
      "localization",
      "competitiveness"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Rapid _____ has created traffic and pollution problems in many Asian cities. Planners are now building more subway lines.",
    "options": [
      "diplomacy",
      "interdependence",
      "urbanization",
      "cooperation"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The _____ of medical records allows doctors to share patient files instantly. Paper folders are no longer needed at the clinic.",
    "options": [
      "homogenization",
      "inequality",
      "migration",
      "digitalization"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Remote villages still suffer from poor internet _____. Students there often struggle to join online classes.",
    "options": [
      "connectivity",
      "diversification",
      "liberalization",
      "expansion"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Supporters of _____ say that removing import taxes helps consumers. Critics worry that small local farms cannot compete.",
    "options": [
      "supply chain",
      "free trade",
      "cultural exchange",
      "market economy"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Foreign investors welcomed the _____ of the banking sector. Many outdated restrictions on overseas ownership were removed.",
    "options": [
      "connectivity",
      "hygiene",
      "liberalization",
      "infrastructure"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The new airport attracted significant foreign _____. Several hotel groups have already announced plans to build near the terminal.",
    "options": [
      "migration",
      "inequality",
      "interdependence",
      "investment"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The _____ of the telecom industry let new companies enter the market. Mobile phone prices dropped sharply within two years.",
    "options": [
      "deregulation",
      "connectivity",
      "localization",
      "heritage"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The festival was organized with the _____ of local businesses. Several restaurants donated food for the volunteers.",
    "options": [
      "tariff",
      "cooperation",
      "inequality",
      "urbanization"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The report shows that income _____ has widened in many developed countries. The gap between the richest and poorest households keeps growing.",
    "options": [
      "innovation",
      "sustainability",
      "inequality",
      "connectivity"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The app's success in Japan came from careful _____. Developers changed the design, menus and payment methods for local users.",
    "options": [
      "capitalism",
      "deregulation",
      "migration",
      "localization"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Investors increasingly judge companies on their _____. Firms that waste energy or water may find it harder to raise money.",
    "options": [
      "sustainability",
      "urbanization",
      "migration",
      "homogenization"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The city has set aside land for the _____ of a new technology park. Construction is expected to begin next spring.",
    "options": [
      "inequality",
      "development",
      "diplomacy",
      "influence"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Heavy rain damaged roads, bridges and other public _____. Repairs will cost the city millions of dollars.",
    "options": [
      "diplomacy",
      "capitalism",
      "infrastructure",
      "liberalization"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The award recognizes _____ in green technology. This year's winner designed a cheaper battery for electric buses.",
    "options": [
      "tariff",
      "migration",
      "deregulation",
      "innovation"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Rising labor costs have weakened the _____ of the country's textile industry. Many factories have moved production overseas.",
    "options": [
      "competitiveness",
      "hospitality",
      "migration",
      "localization"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Skilled _____ helped the two nations settle their fishing dispute. Both sides agreed to share the waters peacefully.",
    "options": [
      "urbanization",
      "diplomacy",
      "digitalization",
      "outsourcing"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Analysts say that a _____ allows prices to adjust to supply and demand. The government no longer sets the cost of rice.",
    "options": [
      "supply chain",
      "free trade",
      "market economy",
      "cultural exchange"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The firm's _____ into healthcare products helped it survive the slowdown. Its electronics sales had fallen by twenty percent.",
    "options": [
      "inequality",
      "diplomacy",
      "connectivity",
      "diversification"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The coffee chain announced the _____ of its delivery service to ten more cities. Customers can now order through a new app.",
    "options": [
      "expansion",
      "inequality",
      "homogenization",
      "diplomacy"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "Social media stars have a growing _____ on what young shoppers buy. Brands now pay them to promote new products.",
    "options": [
      "tariff",
      "influence",
      "infrastructure",
      "urbanization"
    ],
    "answer": 1,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "integration": {
    "pos": "n.",
    "en_def": "the process of joining different parts or groups so they work together as one",
    "cn_def": "整合；融合"
  },
  "multinational": {
    "pos": "adj.",
    "en_def": "working in or involving many different countries",
    "cn_def": "跨國的；多國的"
  },
  "trade": {
    "pos": "n.",
    "en_def": "the activity of buying and selling goods between people, companies or countries",
    "cn_def": "貿易；買賣"
  },
  "tariff": {
    "pos": "n.",
    "en_def": "a tax that a government puts on goods coming into or going out of a country",
    "cn_def": "關稅"
  },
  "export": {
    "pos": "v.",
    "en_def": "to send goods to another country to sell them",
    "cn_def": "出口；輸出"
  },
  "import": {
    "pos": "v.",
    "en_def": "to bring goods into a country from another country to sell them",
    "cn_def": "進口；輸入"
  },
  "outsourcing": {
    "pos": "n.",
    "en_def": "paying another company, often in another country, to do work that your company used to do itself",
    "cn_def": "外包"
  },
  "supply chain": {
    "pos": "n.phr.",
    "en_def": "the whole series of companies and steps involved in making a product and getting it to customers",
    "cn_def": "供應鏈"
  },
  "cultural exchange": {
    "pos": "n.phr.",
    "en_def": "an activity in which people from different countries share and learn about each other's customs and way of life",
    "cn_def": "文化交流"
  },
  "migration": {
    "pos": "n.",
    "en_def": "the movement of people from one place or country to another to live or work",
    "cn_def": "遷移；移民"
  },
  "urbanization": {
    "pos": "n.",
    "en_def": "the process by which more and more people leave the countryside to live in towns and cities",
    "cn_def": "都市化"
  },
  "digitalization": {
    "pos": "n.",
    "en_def": "the change to using computers and digital technology to do work that was done on paper or by hand",
    "cn_def": "數位化"
  },
  "connectivity": {
    "pos": "n.",
    "en_def": "the ability of computers, phones or places to connect with each other or with the internet",
    "cn_def": "連結性；連線能力"
  },
  "free trade": {
    "pos": "n.phr.",
    "en_def": "trade between countries without taxes or limits on the goods that are bought and sold",
    "cn_def": "自由貿易"
  },
  "liberalization": {
    "pos": "n.",
    "en_def": "the act of making laws or rules less strict, especially so that business can grow",
    "cn_def": "自由化；開放"
  },
  "investment": {
    "pos": "n.",
    "en_def": "money that is put into a business or project in order to make a profit later",
    "cn_def": "投資"
  },
  "deregulation": {
    "pos": "n.",
    "en_def": "the removal of government rules and controls from an industry",
    "cn_def": "解除管制；放寬管制"
  },
  "cooperation": {
    "pos": "n.",
    "en_def": "the act of working together with others to achieve a shared goal",
    "cn_def": "合作"
  },
  "inequality": {
    "pos": "n.",
    "en_def": "an unfair situation in which some people have more money, chances or rights than others",
    "cn_def": "不平等"
  },
  "homogenization": {
    "pos": "n.",
    "en_def": "the process of things becoming the same or very similar to each other",
    "cn_def": "同質化"
  },
  "localization": {
    "pos": "n.",
    "en_def": "the process of changing a product or service so that it suits the language and culture of a particular country",
    "cn_def": "在地化"
  },
  "sustainability": {
    "pos": "n.",
    "en_def": "the ability to continue for a long time without harming the environment or using up resources",
    "cn_def": "永續性"
  },
  "development": {
    "pos": "n.",
    "en_def": "the process of growing or improving, especially of a country's economy or a new product",
    "cn_def": "發展；開發"
  },
  "infrastructure": {
    "pos": "n.",
    "en_def": "the basic systems a country or city needs, such as roads, bridges, power and water supply",
    "cn_def": "基礎建設"
  },
  "innovation": {
    "pos": "n.",
    "en_def": "a new idea, method or product, or the act of creating one",
    "cn_def": "創新"
  },
  "competitiveness": {
    "pos": "n.",
    "en_def": "the ability of a company or country to compete successfully with others",
    "cn_def": "競爭力"
  },
  "diplomacy": {
    "pos": "n.",
    "en_def": "the work of keeping good relations between the governments of different countries",
    "cn_def": "外交；外交手腕"
  },
  "interdependence": {
    "pos": "n.",
    "en_def": "a situation in which people, companies or countries depend on each other",
    "cn_def": "相互依存"
  },
  "capitalism": {
    "pos": "n.",
    "en_def": "an economic system in which businesses are owned by private people and run to make a profit",
    "cn_def": "資本主義"
  },
  "market economy": {
    "pos": "n.phr.",
    "en_def": "an economic system in which prices and production are decided by supply and demand rather than by the government",
    "cn_def": "市場經濟"
  },
  "diversification": {
    "pos": "n.",
    "en_def": "the act of starting to sell different products or enter different markets to reduce risk",
    "cn_def": "多角化；多樣化"
  },
  "expansion": {
    "pos": "n.",
    "en_def": "the process of becoming larger, for example by opening new stores or entering new markets",
    "cn_def": "擴張；擴展"
  },
  "collaboration": {
    "pos": "n.",
    "en_def": "the act of working together with another person or group to create or produce something",
    "cn_def": "合作；協作"
  },
  "influence": {
    "pos": "n.",
    "en_def": "the power to have an effect on people, things or the way something develops",
    "cn_def": "影響；影響力"
  }
};

const EXTRA_GLOSSES = {};
