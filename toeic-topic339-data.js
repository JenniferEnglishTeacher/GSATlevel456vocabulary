// Topic 339 Quiz Data: Running 跑步
// Source word list: https://www.examword.com/group-topic/running — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T339 - Running 跑步",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "admit",
    "pos": "v.",
    "cn_def": "承認",
    "en_def": "to agree, often unwillingly, that something is true",
    "sentence": "A: How did your first company relay race go last Saturday, and did your team manage to finish before the lunch break started? B: I have to {{BLANK}} that I was not ready at all, because I stopped training two months ago and had to walk most of the last kilometer while my coworkers waited.",
    "cn": "A：你們上週六第一次參加公司接力賽的情況如何？你們隊有在午餐休息開始前跑完嗎？ B：我必須【承認】我完全沒準備好，因為我兩個月前就停止訓練了，最後一公里大部分都是用走的，同事們只好在終點等我。"
  },
  {
    "word": "enthusiastic",
    "pos": "adj.",
    "cn_def": "熱衷的；熱情的",
    "en_def": "showing strong interest and excitement",
    "sentence": "A: Is it true that the marketing department wants to organize a charity run for the hospital next spring, even though they are so busy? B: Yes, they are really {{BLANK}} about the idea, and the manager has already asked three local sponsors to provide T-shirts, water and prizes for the runners.",
    "cn": "A：行銷部門真的想在明年春天為醫院舉辦一場慈善路跑嗎？他們明明那麼忙。 B：是的，他們對這個點子非常【熱衷】，經理已經請三家在地贊助商為跑者提供T恤、飲用水和獎品了。"
  },
  {
    "word": "be into",
    "pos": "v.phr.",
    "cn_def": "熱衷於；很喜歡",
    "en_def": "to be very interested in an activity",
    "sentence": "A: I noticed that the new accountant always brings running shoes to the office and leaves right at six o'clock every evening, so what is she doing? B: She seems to {{BLANK}} long-distance running these days, and she trains by the river with a local club because she wants to finish a marathon next year.",
    "cn": "A：我注意到新來的會計每天都帶跑鞋到辦公室，而且每晚六點準時離開，她在做什麼呢？ B：她最近似乎很【熱衷於】長跑，她和一個在地社團在河邊訓練，因為她想在明年跑完一場馬拉松。"
  },
  {
    "word": "exhausting",
    "pos": "adj.",
    "cn_def": "令人筋疲力盡的",
    "en_def": "making you feel extremely tired",
    "sentence": "A: You look very tired this morning, so did you stay up late to finish the sales report for the meeting with the overseas clients? B: No, the report was done early, but yesterday's hill race was so {{BLANK}} that I could hardly climb the stairs to my apartment after I got home last night.",
    "cn": "A：你今天早上看起來很累，你是熬夜趕和海外客戶開會用的銷售報告嗎？ B：不是，報告早就做完了，但昨天的山坡賽跑實在太【令人筋疲力盡】，我昨晚回家後幾乎爬不上樓梯回到公寓。"
  },
  {
    "word": "fascinated",
    "pos": "adj.",
    "cn_def": "著迷的；深感興趣的",
    "en_def": "extremely interested in something",
    "sentence": "A: Why did your son spend the whole afternoon at the sports museum instead of going to the shopping mall with the rest of the family? B: He was completely {{BLANK}} by the old photos of famous Olympic runners, and he read every sign about their training methods until the guards told us the museum was closing.",
    "cn": "A：你兒子為什麼整個下午都待在運動博物館，而不跟家人一起去購物中心？ B：他完全被那些著名奧運跑者的老照片【迷住了】，他把每一塊介紹訓練方法的告示都讀完了，直到警衛告訴我們博物館要關門了。"
  },
  {
    "word": "end up",
    "pos": "v.phr.",
    "cn_def": "最後落得；結果成為",
    "en_def": "to finally be in a place or situation you did not plan",
    "sentence": "A: Why didn't you take the shuttle bus to the race this morning, since the company paid for tickets for all the employees? B: I missed it by two minutes, so I had to take a taxi through heavy traffic and I almost {{BLANK}} missing the start of the race completely.",
    "cn": "A：公司幫所有員工付了票錢，你今天早上為什麼沒搭接駁車去比賽？ B：我晚了兩分鐘沒趕上，只好搭計程車穿過擁擠的車陣，【結果】差點完全錯過比賽的起跑。"
  },
  {
    "word": "fatigue",
    "pos": "n.",
    "cn_def": "疲勞；疲倦",
    "en_def": "a feeling of being very tired",
    "sentence": "A: The new delivery drivers keep making small mistakes in the afternoon, so do you think they need more training before the holiday season? B: I think the real problem is {{BLANK}}, because they start very early, take no proper breaks, and many of them also run long distances to train for the city marathon.",
    "cn": "A：新的送貨司機下午老是犯些小錯，你認為在假期旺季前他們需要更多訓練嗎？ B：我認為真正的問題是【疲勞】，因為他們很早就開工、沒有適當休息，而且很多人還在為城市馬拉松進行長跑訓練。"
  },
  {
    "word": "indulge",
    "pos": "v.",
    "cn_def": "沉溺於；盡情享受",
    "en_def": "to allow yourself to enjoy something special",
    "sentence": "A: Are you going to keep following that strict diet after the race, or will you finally eat something sweet with the rest of the team tonight? B: I think I will {{BLANK}} in a big piece of chocolate cake at the celebration dinner, because I have not had any dessert for three whole months.",
    "cn": "A：比賽結束後你還要繼續那個嚴格的飲食計畫嗎？還是今晚終於要跟大家一起吃點甜的？ B：我想我會在慶功晚宴上【盡情享受】一大塊巧克力蛋糕，因為我已經整整三個月沒吃任何甜點了。"
  },
  {
    "word": "exquisite",
    "pos": "adj.",
    "cn_def": "精美的；精緻的",
    "en_def": "extremely beautiful and delicate",
    "sentence": "A: What do the winners of this year's international marathon receive besides the prize money and the usual photos with the mayor? B: Each winner gets an {{BLANK}} glass trophy made by a famous local artist, and the designs are so beautiful that many runners keep them in their offices.",
    "cn": "A：今年國際馬拉松的優勝者除了獎金和照例跟市長合照之外，還能得到什麼？ B：每位優勝者都會得到一座由知名在地藝術家製作的【精美】玻璃獎盃，設計得非常漂亮，許多跑者都把它擺在辦公室裡。"
  },
  {
    "word": "undergo",
    "pos": "v.",
    "cn_def": "經歷；接受（檢查、治療等）",
    "en_def": "to experience a process, such as a test or treatment",
    "sentence": "A: Why isn't Michael joining the company team for the relay race this year, since he won a medal for us last autumn? B: He has to {{BLANK}} knee surgery next week, and the doctor told him he cannot run for at least four months while he recovers at home.",
    "cn": "A：麥可去年秋天幫我們拿了獎牌，為什麼今年不參加公司的接力賽隊伍？ B：他下週必須【接受】膝蓋手術，醫生說他在家休養期間至少四個月不能跑步。"
  },
  {
    "word": "equipment",
    "pos": "n.",
    "cn_def": "設備；器材",
    "en_def": "the tools or things needed for an activity",
    "sentence": "A: Do I need to buy anything expensive before I join the running club that meets every Wednesday evening near the train station? B: Not really, because the only {{BLANK}} you need is a pair of comfortable shoes and a water bottle, and the club lends lights and safety vests to new members.",
    "cn": "A：我加入每週三晚上在火車站附近聚會的跑步社團之前，需要買什麼昂貴的東西嗎？ B：不太需要，因為你唯一需要的【器材】就是一雙舒適的鞋子和一個水壺，社團還會借頭燈和安全背心給新會員。"
  },
  {
    "word": "relieve",
    "pos": "v.",
    "cn_def": "減輕；緩解",
    "en_def": "to make pain or a problem less serious",
    "sentence": "A: You have been sitting at your computer for nine hours finishing the budget, so why don't you take a short break before the meeting? B: That is a good idea, because a quick run around the park usually helps me {{BLANK}} the stress and the pain in my shoulders after a long day.",
    "cn": "A：你已經坐在電腦前九個小時做預算了，何不在開會前稍微休息一下？ B：好主意，因為在公園快跑一圈通常能幫我【減輕】漫長一天後的壓力和肩膀痠痛。"
  },
  {
    "word": "spectacular",
    "pos": "adj.",
    "cn_def": "壯觀的；精彩的",
    "en_def": "extremely impressive and exciting to see",
    "sentence": "A: Why did the tourism office choose the coastal road for the international marathon instead of the usual route through the business district? B: The coastal road has {{BLANK}} views of the cliffs and the ocean, so they hope that television coverage of the race will attract more visitors to the city.",
    "cn": "A：觀光局為什麼選擇海岸公路舉辦國際馬拉松，而不是平常穿過商業區的路線？ B：海岸公路有懸崖和海洋的【壯觀】景色，所以他們希望比賽的電視轉播能吸引更多遊客來這座城市。"
  },
  {
    "word": "massive",
    "pos": "adj.",
    "cn_def": "巨大的；大量的",
    "en_def": "very large in size or amount",
    "sentence": "A: How many people do you think will come to watch the city marathon this weekend, and will the shops downtown open late? B: The police are expecting a {{BLANK}} crowd of over fifty thousand people, so most shops will stay open until midnight and the subway will run extra trains.",
    "cn": "A：你覺得這週末會有多少人來看城市馬拉松？市中心的商店會營業到很晚嗎？ B：警方預計會有超過五萬人的【龐大】人潮，所以大多數商店會營業到午夜，捷運也會加開班次。"
  },
  {
    "word": "moss",
    "pos": "n.",
    "cn_def": "青苔；苔蘚",
    "en_def": "a small soft green plant that grows on stones, trees, or wet ground",
    "sentence": "A: Why did the park staff close the forest running trail behind the office park for the whole week after the heavy rain? B: The stone steps were covered in thick green {{BLANK}}, and two runners slipped and hurt themselves on Monday, so the workers are cleaning the path before it opens again.",
    "cn": "A：大雨過後，公園人員為什麼把辦公園區後方的森林跑步步道封閉了整整一週？ B：石階上長滿了厚厚的綠色【青苔】，週一有兩名跑者滑倒受傷，所以工人正在清理步道，之後才會重新開放。"
  },
  {
    "word": "packed",
    "pos": "adj.",
    "cn_def": "擠滿人的；爆滿的",
    "en_def": "extremely full of people",
    "sentence": "A: Should we go to the fitness center after work today to try the new running machines that the company paid for last month? B: I would rather go early tomorrow morning, because the place is always {{BLANK}} between six and eight in the evening and you usually have to wait twenty minutes for a machine.",
    "cn": "A：我們今天下班後要不要去健身中心試試公司上個月出錢買的新跑步機？ B：我寧願明天一大早去，因為晚上六點到八點那裡總是【擠滿了人】，通常要等二十分鐘才有機器可用。"
  },
  {
    "word": "breathtaking",
    "pos": "adj.",
    "cn_def": "令人驚嘆的；美得令人屏息的",
    "en_def": "so beautiful or surprising that it takes your breath away",
    "sentence": "A: Was it really worth waking up at four in the morning to join the mountain sunrise run that the travel agency organized for its staff? B: Absolutely, because when we reached the top, the view of the clouds and the city below was {{BLANK}}, and everyone forgot how tired and cold they were.",
    "cn": "A：清晨四點起床參加旅行社為員工舉辦的山上日出路跑，真的值得嗎？ B：絕對值得，因為我們到達山頂時，雲海和山下城市的景色【美得令人屏息】，大家都忘了自己有多累多冷。"
  },
  {
    "word": "underestimate",
    "pos": "v.",
    "cn_def": "低估",
    "en_def": "to think something is smaller, easier, or less important than it really is",
    "sentence": "A: Why did so many runners need medical help during the half marathon yesterday, even though the course was flat and short? B: Many of them seemed to {{BLANK}} how hot and humid it would be at noon, so they did not drink enough water and some of them fainted near the finish line.",
    "cn": "A：昨天的半程馬拉松路線平坦又不長，為什麼有那麼多跑者需要醫療協助？ B：很多人似乎【低估】了中午會有多熱多潮濕，所以沒喝足夠的水，有些人在終點線附近昏倒了。"
  },
  {
    "word": "improve",
    "pos": "v.",
    "cn_def": "改善；增進",
    "en_def": "to make something better",
    "sentence": "A: Have you noticed any changes since you started running before work three times a week with the other people from the design team? B: Yes, it has helped me {{BLANK}} my sleep and my mood, and I can concentrate much better during long meetings in the afternoon than I could before.",
    "cn": "A：自從你開始和設計團隊的其他人每週三次上班前跑步之後，有注意到什麼改變嗎？ B：有，它幫助我【改善】了睡眠和心情，而且我在下午冗長的會議中比以前專心得多。"
  },
  {
    "word": "cardiovascular",
    "pos": "adj.",
    "cn_def": "心血管的",
    "en_def": "related to the heart and blood vessels",
    "sentence": "A: Why is the company offering free running lessons to all employees this year, even though the budget for staff activities was cut? B: The health report showed that many office workers have weak {{BLANK}} fitness, and the insurance company said regular exercise could lower our medical costs in the long run.",
    "cn": "A：公司今年的員工活動預算被刪減了，為什麼還要提供所有員工免費的跑步課程？ B：健康報告顯示許多上班族的【心血管】體能很差，而保險公司說規律運動長期下來可以降低我們的醫療費用。"
  },
  {
    "word": "variety",
    "pos": "n.",
    "cn_def": "多樣性；各種各樣",
    "en_def": "a number of different types of things",
    "sentence": "A: What kind of classes does the new sports center near our office offer, and are they suitable for people who are just starting to exercise? B: It has a wide {{BLANK}} of programs, from beginner running groups to yoga and swimming, so everyone in the department can find something that fits their schedule.",
    "cn": "A：我們辦公室附近新開的運動中心提供哪些課程？適合剛開始運動的人嗎？ B：它有【各式各樣】的課程，從初學者跑步團到瑜伽和游泳都有，所以部門裡每個人都能找到適合自己時間的課。"
  },
  {
    "word": "warm-up",
    "pos": "n.",
    "cn_def": "暖身運動",
    "en_def": "gentle exercise done to prepare your body before sport",
    "sentence": "A: Why did the coach make everyone stretch and walk for ten minutes before the company race started, when we were all ready to go? B: She said a proper {{BLANK}} prepares the muscles and heart for hard exercise, and that skipping it is one of the main reasons runners get injured.",
    "cn": "A：大家都準備好要跑了，為什麼教練在公司比賽開始前要每個人先伸展和走路十分鐘？ B：她說適當的【暖身運動】可以讓肌肉和心臟為激烈運動做好準備，而跳過它是跑者受傷的主要原因之一。"
  },
  {
    "word": "gymnasium",
    "pos": "n.",
    "cn_def": "體育館；健身房",
    "en_def": "a large room or building with equipment for sports and exercise",
    "sentence": "A: The weather report says it will rain heavily all weekend, so are we going to cancel the company sports day that we planned for months? B: No, we have booked the city {{BLANK}} instead, and it has an indoor running track that is large enough for all the relay races.",
    "cn": "A：天氣預報說整個週末都會下大雨，我們要取消籌劃了好幾個月的公司運動會嗎？ B：不用，我們改租了市立【體育館】，那裡有室內跑道，大到足以舉行所有接力賽。"
  },
  {
    "word": "pace",
    "pos": "n.",
    "cn_def": "步調；速度",
    "en_def": "the speed at which someone walks, runs, or moves",
    "sentence": "A: I want to join the ten-kilometer race next month, but I am worried that I will be too slow and everyone will leave me behind. B: Just run at a comfortable {{BLANK}} from the start, and you will finish without problems, because many people in the race walk part of the way anyway.",
    "cn": "A：我想參加下個月的十公里賽跑，但我擔心自己會太慢，大家都會把我甩在後面。 B：只要從一開始就用舒服的【速度】跑，你就能順利完賽，反正比賽中很多人也會走一段路。"
  },
  {
    "word": "rill",
    "pos": "n.",
    "cn_def": "小溪；細流",
    "en_def": "a very small stream",
    "sentence": "A: Is the new trail behind the hotel suitable for guests who want to go running early in the morning before their business meetings? B: Yes, it is a gentle path that follows a narrow {{BLANK}} through the forest, and guests say the sound of the water makes the run very peaceful.",
    "cn": "A：飯店後面的新步道適合想在商務會議前一大早去跑步的房客嗎？ B：適合，那是一條沿著森林裡一道窄窄【小溪】而行的平緩小路，房客們說水聲讓跑步變得非常寧靜。"
  },
  {
    "word": "endurance",
    "pos": "n.",
    "cn_def": "耐力",
    "en_def": "the ability to keep doing something difficult for a long time",
    "sentence": "A: How is your training for the full marathon going, and do you think you will be ready by the race in early December? B: My speed is fine, but I still need to build more {{BLANK}}, so my coach wants me to add two extra kilometers to my long run every Sunday.",
    "cn": "A：你的全程馬拉松訓練進行得如何？你覺得十二月初比賽前能準備好嗎？ B：我的速度沒問題，但我還需要培養更多【耐力】，所以教練要我每週日的長跑再多加兩公里。"
  },
  {
    "word": "treadmill",
    "pos": "n.",
    "cn_def": "跑步機",
    "en_def": "an exercise machine with a moving belt that you run or walk on",
    "sentence": "A: How do you keep training when it rains for weeks during the typhoon season and the riverside park is closed to the public? B: I run on the {{BLANK}} in my apartment building's gym, and I usually watch the evening news or listen to a podcast so the time passes faster.",
    "cn": "A：颱風季連下好幾週雨、河濱公園又不對外開放的時候，你怎麼繼續訓練？ B：我在公寓大樓的健身房用【跑步機】跑步，通常一邊看晚間新聞或聽播客，讓時間過得快一點。"
  },
  {
    "word": "lap",
    "pos": "n.",
    "cn_def": "（跑道的）一圈",
    "en_def": "one complete trip around a track",
    "sentence": "A: How far do you usually run when you go to the sports field next to the university after you finish work in the evening? B: Each {{BLANK}} of that track is four hundred meters, so I normally go around it twelve times, which is almost five kilometers, before I head home for dinner.",
    "cn": "A：你晚上下班後去大學旁邊的運動場時，通常跑多遠？ B：那條跑道每【一圈】是四百公尺，所以我通常跑十二圈，大約快五公里，然後再回家吃晚餐。"
  },
  {
    "word": "fairly",
    "pos": "adv.",
    "cn_def": "相當地；頗",
    "en_def": "more than a little but not very",
    "sentence": "A: How difficult was the new hill course for the charity run, and do you think older employees should try it next year? B: It was {{BLANK}} challenging in the middle section because of the steep climb, but the rest was flat and easy, so I think most people could finish if they walk sometimes.",
    "cn": "A：慈善路跑的新山坡路線有多難？你覺得年長的員工明年應該試試看嗎？ B：中段因為陡坡所以【相當】有挑戰性，但其餘路段平坦又輕鬆，所以我想大多數人只要偶爾用走的都能完賽。"
  },
  {
    "word": "intrigue",
    "pos": "v.",
    "cn_def": "激起……的好奇心；引起興趣",
    "en_def": "to make someone very interested and curious",
    "sentence": "A: Why do you think the new smart running watch sold out in only two days at our electronics store downtown? B: Its special features seem to {{BLANK}} customers who love technology, because it can measure heart rate, sleep and running speed, and it even gives advice through a phone app.",
    "cn": "A：你覺得那款新的智慧跑步手錶為什麼在我們市中心的電器行只兩天就賣完了？ B：它的特殊功能似乎很能【引起】愛好科技的顧客的【興趣】，因為它能測量心率、睡眠和跑步速度，甚至還能透過手機應用程式提供建議。"
  },
  {
    "word": "prestigious",
    "pos": "adj.",
    "cn_def": "享有聲望的；有名望的",
    "en_def": "respected and admired as very important or high quality",
    "sentence": "A: Why is our sportswear company spending so much money to sponsor the Boston Marathon this year instead of local races? B: It is one of the most {{BLANK}} races in the world, so having our logo on the runners' shirts will make our brand look more professional to international buyers.",
    "cn": "A：我們運動服飾公司今年為什麼要花這麼多錢贊助波士頓馬拉松，而不是在地的比賽？ B：它是世界上最【享有盛名】的賽事之一，所以讓我們的標誌出現在跑者的衣服上，會讓我們的品牌在國際買家眼中更專業。"
  },
  {
    "word": "dash",
    "pos": "n.",
    "cn_def": "短跑；衝刺",
    "en_def": "a short race run very fast",
    "sentence": "A: Which event at the company sports day was the most exciting for the people watching from the stands last weekend? B: The hundred-meter {{BLANK}} was the most exciting, because a young engineer beat the manager who had won every year, and the whole crowd stood up and cheered.",
    "cn": "A：上週末公司運動會上，哪一個項目最讓看台上的觀眾興奮？ B：一百公尺【短跑】最刺激，因為一位年輕工程師打敗了每年都奪冠的經理，全場觀眾都站起來歡呼。"
  },
  {
    "word": "sprinter",
    "pos": "n.",
    "cn_def": "短跑選手",
    "en_def": "a person who runs very fast over short distances",
    "sentence": "A: Who did the sports drink company choose for its new television advertisement, and why did they pick that person? B: They chose a young {{BLANK}} who broke the national record in the two-hundred-meter race, because they want the ad to show speed, energy and confidence.",
    "cn": "A：運動飲料公司選了誰拍新的電視廣告？為什麼選那個人？ B：他們選了一位打破兩百公尺全國紀錄的年輕【短跑選手】，因為他們希望廣告展現速度、活力和自信。"
  },
  {
    "word": "jog",
    "pos": "v.",
    "cn_def": "慢跑",
    "en_def": "to run slowly and steadily for exercise",
    "sentence": "A: Where do you go during your lunch break, since I never see you in the staff cafeteria with the rest of the team? B: I usually {{BLANK}} around the lake behind the office for twenty minutes, then take a quick shower and eat a sandwich at my desk before the afternoon meetings.",
    "cn": "A：午休時間你都去哪裡？我從沒在員工餐廳看到你跟大家一起吃飯。 B：我通常在辦公室後面的湖邊【慢跑】二十分鐘，然後很快沖個澡，在下午開會前於座位上吃個三明治。"
  },
  {
    "word": "keep fit",
    "pos": "v.phr.",
    "cn_def": "保持健康；維持體態",
    "en_def": "to stay healthy and strong through exercise",
    "sentence": "A: How does your father manage to stay so active at seventy, since he still walks to the market and works in the garden every day? B: He runs slowly in the park every morning to {{BLANK}}, and he says the friends he meets there also help him stay cheerful and busy.",
    "cn": "A：你父親七十歲了還每天走路去市場、在花園工作，他怎麼能保持這麼活躍？ B：他每天早上在公園慢慢跑步來【保持健康】，他說在那裡認識的朋友也讓他保持開朗和忙碌。"
  }
];

const MCQS = [
  {
    "q": "The new runner was too proud to ask anyone for help. Eventually he had to _____ that the training plan was too hard.",
    "options": [
      "relieve",
      "indulge",
      "admit",
      "jog"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Our staff members were very _____ about the company fun run. More than eighty employees signed up within the first two hours.",
    "options": [
      "enthusiastic",
      "massive",
      "cardiovascular",
      "exquisite"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Running ten kilometers in the summer heat was _____ for everyone. Most of the participants needed a long rest afterward.",
    "options": [
      "prestigious",
      "fascinated",
      "cardiovascular",
      "exhausting"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The visitors were _____ by the robot that measured each runner's speed. They stood and watched it for almost an hour.",
    "options": [
      "exhausting",
      "fascinated",
      "massive",
      "prestigious"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "If you skip stretching before a race, you may _____ with a painful injury. Always stretch for at least ten minutes.",
    "options": [
      "end up",
      "keep fit",
      "be into",
      "look into"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "After working night shifts all week, the nurse felt great _____ during her morning run. She decided to rest at home instead.",
    "options": [
      "equipment",
      "variety",
      "fatigue",
      "treadmill"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "After finishing the half marathon, Kevin decided to _____ in a large chocolate cake. He felt that he had earned the treat.",
    "options": [
      "undergo",
      "indulge",
      "relieve",
      "improve"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The hotel restaurant near the race course serves _____ French desserts. Each one is beautifully decorated by the head chef.",
    "options": [
      "exhausting",
      "cardiovascular",
      "fascinated",
      "exquisite"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "All new members must _____ a short fitness test before using the club's machines. The test takes about twenty minutes.",
    "options": [
      "indulge",
      "intrigue",
      "undergo",
      "admit"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The sports store is offering a twenty percent discount on running _____ this weekend. Shoes, watches and water bottles are all included.",
    "options": [
      "fatigue",
      "equipment",
      "endurance",
      "pace"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Gentle stretching after a long run can help _____ pain in your legs. Our trainer recommends doing it for ten minutes.",
    "options": [
      "relieve",
      "underestimate",
      "intrigue",
      "admit"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The coastal marathon route offers _____ views of the ocean and cliffs. Many runners stop to take photos along the way.",
    "options": [
      "cardiovascular",
      "enthusiastic",
      "fascinated",
      "spectacular"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "A _____ crowd of fifty thousand people gathered downtown to watch the race. Police closed several streets for the whole day.",
    "options": [
      "cardiovascular",
      "massive",
      "exquisite",
      "breathtaking"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The fitness center is always _____ after work, so it is hard to find a free machine. Try coming early in the morning instead.",
    "options": [
      "exquisite",
      "cardiovascular",
      "packed",
      "prestigious"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "From the top of the mountain trail, the runners enjoyed a _____ view of the city. It was worth the difficult climb.",
    "options": [
      "exhausting",
      "enthusiastic",
      "cardiovascular",
      "breathtaking"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Do not _____ how hot it can get during the summer race. Bring plenty of water and wear a hat to protect yourself.",
    "options": [
      "underestimate",
      "indulge",
      "relieve",
      "undergo"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Running three times a week can greatly _____ your sleep and mood. Many office workers notice the change within a month.",
    "options": [
      "admit",
      "undergo",
      "improve",
      "indulge"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Regular running strengthens the heart and supports _____ health. Doctors often suggest it for patients with high blood pressure.",
    "options": [
      "cardiovascular",
      "exquisite",
      "packed",
      "fascinated"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The new gym offers a wide _____ of classes, from yoga to interval running. Members can join any class for free.",
    "options": [
      "fatigue",
      "variety",
      "pace",
      "endurance"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Every training session begins with a ten-minute _____ to prepare the muscles. Skipping it increases the risk of injury.",
    "options": [
      "treadmill",
      "sprinter",
      "fatigue",
      "warm-up"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Because of the heavy rain, the company sports day was moved to the school _____. Luckily, it has an indoor running track.",
    "options": [
      "gymnasium",
      "endurance",
      "fatigue",
      "pace"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Beginners should run at a slow, steady _____ for the first few weeks. They can speed up once they feel stronger.",
    "options": [
      "equipment",
      "pace",
      "gymnasium",
      "sprinter"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Long-distance runners need great _____ to finish a full marathon. They build it slowly by adding a few kilometers each week.",
    "options": [
      "equipment",
      "gymnasium",
      "endurance",
      "treadmill"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "When the weather is bad, Lisa runs on the _____ in her building's gym. She usually watches the news while she exercises.",
    "options": [
      "pace",
      "fatigue",
      "variety",
      "treadmill"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Each _____ of the track at the sports center is four hundred meters. Jason usually runs ten of them before work.",
    "options": [
      "fatigue",
      "lap",
      "variety",
      "equipment"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The new smart running shoes will certainly _____ customers who love technology. They can track speed, distance and heart rate.",
    "options": [
      "intrigue",
      "relieve",
      "undergo",
      "admit"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Winning the Boston Marathon is one of the most _____ honors in running. Only the best athletes in the world achieve it.",
    "options": [
      "cardiovascular",
      "packed",
      "fascinated",
      "prestigious"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The 100-meter _____ is the shortest and fastest race at the company sports day. It usually finishes in under fifteen seconds.",
    "options": [
      "endurance",
      "fatigue",
      "dash",
      "variety"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The young _____ broke the national record in the 200-meter race last night. Her coach said she was the fastest runner he had trained.",
    "options": [
      "sprinter",
      "treadmill",
      "gymnasium",
      "warm-up"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "Many employees _____ around the park during their lunch break. It helps them stay alert for the afternoon meetings.",
    "options": [
      "undergo",
      "admit",
      "relieve",
      "jog"
    ],
    "answer": 3,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "admit": {
    "pos": "v.",
    "en_def": "to agree, often unwillingly, that something is true",
    "cn_def": "承認"
  },
  "enthusiastic": {
    "pos": "adj.",
    "en_def": "showing strong interest and excitement",
    "cn_def": "熱衷的；熱情的"
  },
  "be into": {
    "pos": "v.phr.",
    "en_def": "to be very interested in an activity",
    "cn_def": "熱衷於；很喜歡"
  },
  "exhausting": {
    "pos": "adj.",
    "en_def": "making you feel extremely tired",
    "cn_def": "令人筋疲力盡的"
  },
  "fascinated": {
    "pos": "adj.",
    "en_def": "extremely interested in something",
    "cn_def": "著迷的；深感興趣的"
  },
  "end up": {
    "pos": "v.phr.",
    "en_def": "to finally be in a place or situation you did not plan",
    "cn_def": "最後落得；結果成為"
  },
  "fatigue": {
    "pos": "n.",
    "en_def": "a feeling of being very tired",
    "cn_def": "疲勞；疲倦"
  },
  "indulge": {
    "pos": "v.",
    "en_def": "to allow yourself to enjoy something special",
    "cn_def": "沉溺於；盡情享受"
  },
  "exquisite": {
    "pos": "adj.",
    "en_def": "extremely beautiful and delicate",
    "cn_def": "精美的；精緻的"
  },
  "undergo": {
    "pos": "v.",
    "en_def": "to experience a process, such as a test or treatment",
    "cn_def": "經歷；接受（檢查、治療等）"
  },
  "equipment": {
    "pos": "n.",
    "en_def": "the tools or things needed for an activity",
    "cn_def": "設備；器材"
  },
  "relieve": {
    "pos": "v.",
    "en_def": "to make pain or a problem less serious",
    "cn_def": "減輕；緩解"
  },
  "spectacular": {
    "pos": "adj.",
    "en_def": "extremely impressive and exciting to see",
    "cn_def": "壯觀的；精彩的"
  },
  "massive": {
    "pos": "adj.",
    "en_def": "very large in size or amount",
    "cn_def": "巨大的；大量的"
  },
  "moss": {
    "pos": "n.",
    "en_def": "a small soft green plant that grows on stones, trees, or wet ground",
    "cn_def": "青苔；苔蘚"
  },
  "packed": {
    "pos": "adj.",
    "en_def": "extremely full of people",
    "cn_def": "擠滿人的；爆滿的"
  },
  "breathtaking": {
    "pos": "adj.",
    "en_def": "so beautiful or surprising that it takes your breath away",
    "cn_def": "令人驚嘆的；美得令人屏息的"
  },
  "underestimate": {
    "pos": "v.",
    "en_def": "to think something is smaller, easier, or less important than it really is",
    "cn_def": "低估"
  },
  "improve": {
    "pos": "v.",
    "en_def": "to make something better",
    "cn_def": "改善；增進"
  },
  "cardiovascular": {
    "pos": "adj.",
    "en_def": "related to the heart and blood vessels",
    "cn_def": "心血管的"
  },
  "variety": {
    "pos": "n.",
    "en_def": "a number of different types of things",
    "cn_def": "多樣性；各種各樣"
  },
  "warm-up": {
    "pos": "n.",
    "en_def": "gentle exercise done to prepare your body before sport",
    "cn_def": "暖身運動"
  },
  "gymnasium": {
    "pos": "n.",
    "en_def": "a large room or building with equipment for sports and exercise",
    "cn_def": "體育館；健身房"
  },
  "pace": {
    "pos": "n.",
    "en_def": "the speed at which someone walks, runs, or moves",
    "cn_def": "步調；速度"
  },
  "rill": {
    "pos": "n.",
    "en_def": "a very small stream",
    "cn_def": "小溪；細流"
  },
  "endurance": {
    "pos": "n.",
    "en_def": "the ability to keep doing something difficult for a long time",
    "cn_def": "耐力"
  },
  "treadmill": {
    "pos": "n.",
    "en_def": "an exercise machine with a moving belt that you run or walk on",
    "cn_def": "跑步機"
  },
  "lap": {
    "pos": "n.",
    "en_def": "one complete trip around a track",
    "cn_def": "（跑道的）一圈"
  },
  "fairly": {
    "pos": "adv.",
    "en_def": "more than a little but not very",
    "cn_def": "相當地；頗"
  },
  "intrigue": {
    "pos": "v.",
    "en_def": "to make someone very interested and curious",
    "cn_def": "激起……的好奇心；引起興趣"
  },
  "prestigious": {
    "pos": "adj.",
    "en_def": "respected and admired as very important or high quality",
    "cn_def": "享有聲望的；有名望的"
  },
  "dash": {
    "pos": "n.",
    "en_def": "a short race run very fast",
    "cn_def": "短跑；衝刺"
  },
  "sprinter": {
    "pos": "n.",
    "en_def": "a person who runs very fast over short distances",
    "cn_def": "短跑選手"
  },
  "jog": {
    "pos": "v.",
    "en_def": "to run slowly and steadily for exercise",
    "cn_def": "慢跑"
  },
  "keep fit": {
    "pos": "v.phr.",
    "en_def": "to stay healthy and strong through exercise",
    "cn_def": "保持健康；維持體態"
  }
};

const EXTRA_GLOSSES = {};
