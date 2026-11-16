// Topic 121 Quiz Data: Energy 能源
// Source word list: https://www.examword.com/group-topic/energy — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T121 - Energy 能源",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "power",
    "pos": "n.",
    "cn_def": "電力；動力",
    "en_def": "the energy, especially electricity, used to make machines work",
    "sentence": "A: Why did everyone in the accounting department stop working at around two o'clock yesterday afternoon, just before the monthly reports were due? B: A strong storm knocked out the {{BLANK}} in the whole building for nearly three hours, so the computers, printers, and even the elevators stopped working until the repair crew arrived.",
    "cn": "A：為什麼昨天下午大約兩點，就在月報要交之前，會計部的每個人都停止工作了？ B：一場強烈的暴風雨讓整棟大樓的【電力】中斷了將近三個小時，所以電腦、印表機，甚至電梯都停止運作，直到維修人員抵達。"
  },
  {
    "word": "electricity",
    "pos": "n.",
    "cn_def": "電；電力",
    "en_def": "energy that is carried by wires and used for lights and machines",
    "sentence": "A: Our office bills have gone up a lot this winter, and the finance manager wants to know why we are spending so much more than last year. B: I think the new heaters in the meeting rooms use a lot of {{BLANK}}, so we should turn them off at night and on weekends when nobody is working there.",
    "cn": "A：今年冬天我們辦公室的帳單漲了很多，財務經理想知道為什麼我們比去年多花這麼多錢。 B：我想會議室裡的新暖氣用了很多【電】，所以我們應該在晚上和週末沒人在那裡工作時把它們關掉。"
  },
  {
    "word": "fuel",
    "pos": "n.",
    "cn_def": "燃料",
    "en_def": "something such as gas, oil, or coal that is burned to make heat or power",
    "sentence": "A: Why has the delivery company raised its prices again this month, even though the number of packages we send has stayed about the same? B: The manager explained that the cost of {{BLANK}} for their trucks has risen sharply since the summer, so they need to charge customers a little more to cover their expenses.",
    "cn": "A：為什麼這個月快遞公司又漲價了，儘管我們寄送的包裹數量大致相同？ B：經理解釋說，自從夏天以來他們卡車的【燃料】成本大幅上漲，所以他們需要向客戶多收一點費用來支付開銷。"
  },
  {
    "word": "battery",
    "pos": "n.",
    "cn_def": "電池",
    "en_def": "an object that stores electricity and gives power to a device",
    "sentence": "A: Can you lend me your laptop charger before the client meeting starts, because I forgot mine at home this morning? B: Sure, but you may not need it, since the {{BLANK}} in my laptop usually lasts about eight hours, and the meeting room also has several outlets near the long table.",
    "cn": "A：客戶會議開始前你可以借我筆電充電器嗎？因為我今天早上把我的忘在家裡了。 B：當然可以，不過你可能用不到，因為我筆電的【電池】通常可以用大約八個小時，而且會議室長桌附近也有好幾個插座。"
  },
  {
    "word": "charge",
    "pos": "v.",
    "cn_def": "充電",
    "en_def": "to put electricity into a battery or device",
    "sentence": "A: Is there anywhere in the airport lounge where I can {{BLANK}} my phone before my flight to Tokyo, because it is almost dead and I need to call my client? B: Yes, there are free outlets next to the coffee bar, and you can also borrow a power bank from the front desk if all the seats are taken.",
    "cn": "A：機場貴賓室裡有地方可以讓我在飛往東京前幫手機【充電】嗎？因為它快沒電了，我還需要打電話給客戶。 B：有的，咖啡吧旁邊有免費插座，如果座位都滿了，你也可以向櫃台借行動電源。"
  },
  {
    "word": "generator",
    "pos": "n.",
    "cn_def": "發電機",
    "en_def": "a machine that produces electricity",
    "sentence": "A: What will happen to the hospital's computer system and medical machines if the city loses electricity during the typhoon this weekend? B: Don't worry, the hospital has a large backup {{BLANK}} in the basement that starts automatically within seconds, so the important equipment will keep running until the main supply returns.",
    "cn": "A：如果這個週末颱風期間全市停電，醫院的電腦系統和醫療機器會怎麼樣？ B：別擔心，醫院地下室有一台大型備用【發電機】，幾秒內就會自動啟動，所以重要設備在主要電源恢復前都會持續運作。"
  },
  {
    "word": "renewable",
    "pos": "adj.",
    "cn_def": "可再生的",
    "en_def": "coming from a natural source that does not run out, like sun or wind",
    "sentence": "A: Why is the company planning to put solar panels on the roof of the new warehouse instead of just buying electricity from the city? B: The board wants us to use more {{BLANK}} energy over the next five years, because it lowers our long-term costs and also improves our image with customers who care about the environment.",
    "cn": "A：為什麼公司打算在新倉庫的屋頂裝太陽能板，而不是直接向市政府買電？ B：董事會希望我們在未來五年使用更多【可再生】能源，因為它可以降低我們的長期成本，也能提升我們在關心環境的客戶心中的形象。"
  },
  {
    "word": "nonrenewable",
    "pos": "adj.",
    "cn_def": "不可再生的",
    "en_def": "not able to be replaced after it is used up, like coal or oil",
    "sentence": "A: Why does our sustainability report say we must reduce our use of coal and natural gas at the factory as soon as possible? B: Because they are {{BLANK}} resources that will eventually run out, and their prices keep going up, so depending on them could seriously hurt our profits in the future.",
    "cn": "A：為什麼我們的永續報告說工廠必須盡快減少使用煤和天然氣？ B：因為它們是終將用完的【不可再生】資源，而且價格一直上漲，所以依賴它們未來可能會嚴重損害我們的利潤。"
  },
  {
    "word": "solar",
    "pos": "adj.",
    "cn_def": "太陽能的；太陽的",
    "en_def": "using or coming from the energy of the sun",
    "sentence": "A: How has the hotel managed to cut its monthly energy bill so much since last spring, even though it has more guests now? B: The owner installed {{BLANK}} panels on the roof and over the parking lot, so most of the hot water and lighting now comes from sunlight instead of the city's electricity.",
    "cn": "A：自從去年春天以來，雖然現在客人更多了，飯店是怎麼把每月的能源帳單降低這麼多的？ B：老闆在屋頂和停車場上方裝了【太陽能】板，所以現在大部分的熱水和照明都來自陽光，而不是市電。"
  },
  {
    "word": "wind",
    "pos": "n.",
    "cn_def": "風",
    "en_def": "air that moves outside, which can be used to make power",
    "sentence": "A: Why are there so many tall white towers along the coast near the new industrial park, and who owns them? B: They belong to an energy company that uses the strong {{BLANK}} from the sea to produce electricity, and several factories in the park have signed contracts to buy power from them.",
    "cn": "A：為什麼新工業區附近的海岸邊有那麼多高大的白色塔，它們是誰的？ B：它們屬於一家能源公司，利用海上的強【風】來發電，園區裡有好幾家工廠已經簽約向他們購買電力。"
  },
  {
    "word": "hydropower",
    "pos": "n.",
    "cn_def": "水力發電",
    "en_def": "electricity made from the force of moving water",
    "sentence": "A: Why did the government decide to build a large dam on the river in the mountains, even though the project is very expensive? B: The dam will produce {{BLANK}} for nearly half a million homes, and it will also help control flooding during the rainy season, so officials believe the cost is worth it.",
    "cn": "A：為什麼政府決定在山區的河流上興建大型水壩，儘管這項工程非常昂貴？ B：這座水壩將為將近五十萬戶家庭提供【水力發電】，而且在雨季也有助於控制洪水，所以官員認為這筆花費是值得的。"
  },
  {
    "word": "geothermal",
    "pos": "adj.",
    "cn_def": "地熱的",
    "en_def": "using the natural heat from deep inside the earth",
    "sentence": "A: I heard that the resort we are visiting for the company retreat in Iceland heats all its buildings without burning any oil or gas. Is that true? B: Yes, it uses {{BLANK}} energy from the hot water deep underground, which also supplies the warm outdoor pools that guests enjoy in the evening.",
    "cn": "A：我聽說我們公司員工旅遊要去的冰島度假村，所有建築物的暖氣都不用燒任何油或天然氣，是真的嗎？ B：是的，它使用來自地底深處熱水的【地熱】能源，這些熱水也供應客人晚上喜歡泡的戶外溫水池。"
  },
  {
    "word": "biomass",
    "pos": "n.",
    "cn_def": "生質物；生物質",
    "en_def": "plant or animal material, such as wood, used as fuel",
    "sentence": "A: What does the paper factory do with all the wood chips and tree bark left over after production every day? B: They burn the {{BLANK}} in a special boiler to make steam and electricity for the factory, which reduces waste and saves the company thousands of dollars on energy bills every month.",
    "cn": "A：造紙廠每天生產後剩下的木屑和樹皮都怎麼處理？ B：他們把這些【生質物】放在特殊鍋爐裡燃燒，為工廠產生蒸氣和電力，這減少了廢棄物，也讓公司每個月省下數千美元的能源費用。"
  },
  {
    "word": "nuclear",
    "pos": "adj.",
    "cn_def": "核能的；核子的",
    "en_def": "using the energy made when atoms are split",
    "sentence": "A: Why are so many people in the town attending tonight's public meeting at the community center? B: The government is planning to build a {{BLANK}} power plant near the coast, and many residents want to ask questions about safety, waste storage, and how the project will affect local jobs and property prices.",
    "cn": "A：為什麼鎮上有這麼多人要參加今晚在社區中心舉辦的公聽會？ B：政府計畫在海岸附近興建一座【核能】發電廠，許多居民想詢問有關安全、廢料儲存，以及這項計畫會如何影響當地工作和房價的問題。"
  },
  {
    "word": "efficiency",
    "pos": "n.",
    "cn_def": "效率",
    "en_def": "the ability to do a job well without wasting energy, time, or money",
    "sentence": "A: Why did the operations manager decide to replace all the old lights and air conditioners in the factory this year instead of next year? B: The new models have much higher energy {{BLANK}}, so they use less electricity to do the same work, and the savings will pay for the upgrade in about two years.",
    "cn": "A：為什麼營運經理決定今年就更換工廠所有舊的燈和冷氣，而不是明年？ B：新機型的能源【效率】高很多，所以做同樣的工作用電更少，省下的錢大約兩年就能付清這次升級的費用。"
  },
  {
    "word": "conservation",
    "pos": "n.",
    "cn_def": "節約；保護",
    "en_def": "the careful use of something so that it is not wasted",
    "sentence": "A: What was the main topic of the email that the building manager sent to all the tenants this morning? B: She asked everyone to support energy {{BLANK}} during the hot summer months by turning off unused lights, closing windows when the air conditioning is on, and shutting down computers before leaving work.",
    "cn": "A：大樓管理員今天早上寄給所有租戶的電子郵件主要在講什麼？ B：她請大家在炎熱的夏季月份支持能源【節約】，像是關掉沒用的燈、開冷氣時關窗，以及下班前將電腦關機。"
  },
  {
    "word": "consumption",
    "pos": "n.",
    "cn_def": "消耗量；消費",
    "en_def": "the amount of energy, fuel, or food that is used",
    "sentence": "A: Why did the facilities team put new meters in every department last month, and what are they planning to do with the information? B: They want to measure the energy {{BLANK}} of each floor, so they can find out which areas use the most electricity and then suggest ways to reduce waste.",
    "cn": "A：為什麼設施團隊上個月在每個部門都裝了新電表？他們打算怎麼使用這些資訊？ B：他們想測量每個樓層的能源【消耗量】，這樣就能找出哪些區域用電最多，然後建議減少浪費的方法。"
  },
  {
    "word": "output",
    "pos": "n.",
    "cn_def": "輸出量；產量",
    "en_def": "the amount of power or goods that something produces",
    "sentence": "A: How much electricity can the new solar farm outside the city produce, and will it be enough for the nearby factories? B: According to the engineer, its maximum {{BLANK}} is about fifty megawatts on a sunny day, which is enough for the three largest factories in the area during working hours.",
    "cn": "A：城外新的太陽能電廠可以生產多少電力？足夠附近的工廠使用嗎？ B：根據工程師的說法，它在晴天的最大【輸出量】大約是五十百萬瓦，足夠這個地區最大的三間工廠在上班時間使用。"
  },
  {
    "word": "input",
    "pos": "n.",
    "cn_def": "輸入；投入",
    "en_def": "the energy or material that is put into a machine or system",
    "sentence": "A: Why does the report say that the old furnace in the factory is wasting so much money every month? B: The furnace needs a very large energy {{BLANK}} of gas and electricity, but much of the heat escapes through the walls, so only a small part of what we pay for is actually used.",
    "cn": "A：為什麼報告說工廠裡的舊熔爐每個月浪費這麼多錢？ B：這座熔爐需要非常大量的瓦斯和電力能源【輸入】，但很多熱量從牆壁散失，所以我們付錢買的只有一小部分真正被使用到。"
  },
  {
    "word": "supply",
    "pos": "n.",
    "cn_def": "供應；供給",
    "en_def": "an amount of something that is provided for people to use",
    "sentence": "A: Is the factory going to stop production during the repairs to the city's power station next week? B: No, the manager arranged a temporary {{BLANK}} of electricity from a nearby company, so our machines can keep running, although we may have to cut back on lighting and air conditioning for a few days.",
    "cn": "A：下週市電廠維修期間工廠會停工嗎？ B：不會，經理已經安排從附近一家公司取得臨時的電力【供應】，所以我們的機器可以繼續運轉，不過幾天內我們可能得減少照明和冷氣的使用。"
  },
  {
    "word": "demand",
    "pos": "n.",
    "cn_def": "需求",
    "en_def": "the amount of something that people want or need to use",
    "sentence": "A: Why does the power company ask businesses to reduce their electricity use between two and five o'clock on summer afternoons? B: During those hours, {{BLANK}} for electricity is at its highest because offices, shops, and homes are all running air conditioners, so the system can become overloaded if everyone uses too much.",
    "cn": "A：為什麼電力公司要求企業在夏天下午兩點到五點之間減少用電？ B：在那段時間，電力的【需求】最高，因為辦公室、商店和住家都在開冷氣，所以如果每個人用太多，系統可能會超載。"
  },
  {
    "word": "grid",
    "pos": "n.",
    "cn_def": "電網",
    "en_def": "the network of wires that carries electricity to a large area",
    "sentence": "A: Can our company sell the extra electricity from the solar panels on our roof when we don't need it on weekends? B: Yes, we can send the extra power back to the national {{BLANK}}, and the electricity company will pay us for every unit we provide, which helps us recover the installation cost faster.",
    "cn": "A：週末我們用不到時，公司可以賣掉屋頂太陽能板多出來的電嗎？ B：可以，我們可以把多餘的電送回國家【電網】，電力公司會為我們提供的每一度電付錢，這有助於我們更快回收安裝成本。"
  },
  {
    "word": "turbine",
    "pos": "n.",
    "cn_def": "渦輪機",
    "en_def": "a machine with turning blades that makes power from wind, water, or steam",
    "sentence": "A: Why is the wind farm near the harbor not producing any electricity today, even though it is very windy outside? B: The engineers stopped every {{BLANK}} this morning for safety checks, because one of the large blades was damaged during last week's storm and they need to inspect the others carefully.",
    "cn": "A：為什麼今天外面風很大，港口附近的風場卻沒有發電？ B：工程師今天早上為了安全檢查把每一座【渦輪機】都停了，因為上週暴風雨期間其中一片大型葉片受損，他們需要仔細檢查其他的。"
  },
  {
    "word": "emission",
    "pos": "n.",
    "cn_def": "排放；排放物",
    "en_def": "gas or other material sent out into the air",
    "sentence": "A: Why is the logistics company replacing so many of its old diesel trucks with electric ones this year? B: The government has introduced strict new rules on the {{BLANK}} of carbon dioxide from delivery vehicles, and companies that fail to meet the limits will have to pay heavy fines, so the managers decided to act early.",
    "cn": "A：為什麼物流公司今年要把這麼多舊柴油卡車換成電動卡車？ B：政府對送貨車輛的二氧化碳【排放】實施了嚴格的新規定，未達標準的公司必須支付高額罰款，所以經理們決定提早行動。"
  },
  {
    "word": "sustainable",
    "pos": "adj.",
    "cn_def": "永續的；可持續的",
    "en_def": "able to continue for a long time without harming the environment",
    "sentence": "A: Why did our biggest customer ask so many questions about our factory's energy use during the meeting yesterday? B: They only want to work with suppliers that follow {{BLANK}} practices, such as using clean energy and reducing waste, because their own investors are paying close attention to environmental issues.",
    "cn": "A：為什麼我們最大的客戶昨天開會時問了那麼多關於我們工廠能源使用的問題？ B：他們只想和採取【永續】做法的供應商合作，例如使用乾淨能源和減少浪費，因為他們自己的投資人非常關注環境議題。"
  },
  {
    "word": "clean",
    "pos": "adj.",
    "cn_def": "乾淨的；無污染的",
    "en_def": "not making the air, water, or land dirty",
    "sentence": "A: Why is the city giving money to companies that install solar panels or buy electric delivery vans this year? B: The mayor wants to encourage businesses to use more {{BLANK}} energy that does not pollute the air, because the smog in the city center has become a serious problem for workers and residents.",
    "cn": "A：為什麼市政府今年要補助安裝太陽能板或購買電動送貨車的公司？ B：市長想鼓勵企業使用更多不會污染空氣的【乾淨】能源，因為市中心的霧霾已經成為上班族和居民的嚴重問題。"
  },
  {
    "word": "green",
    "pos": "adj.",
    "cn_def": "環保的；綠色的",
    "en_def": "good for the environment",
    "sentence": "A: Why does the new office tower downtown ask for higher rent than the older buildings on the same street? B: It is a {{BLANK}} building with solar panels, rainwater collection, and smart lighting, so tenants pay a little more rent but save a lot on utility bills and enjoy a healthier workplace.",
    "cn": "A：為什麼市中心新的辦公大樓租金比同一條街上的舊大樓高？ B：它是一棟有太陽能板、雨水回收和智慧照明的【環保】建築，所以租戶付的租金雖然稍高，卻能省下很多水電費，並享有更健康的工作環境。"
  },
  {
    "word": "intensity",
    "pos": "n.",
    "cn_def": "密集度；強度",
    "en_def": "the amount of energy used to produce something",
    "sentence": "A: Why did the consultant say our steel factory needs to change its production methods within the next three years? B: She found that the energy {{BLANK}} of our process is much higher than that of our competitors, which means we use far more electricity to make each ton of steel and lose money.",
    "cn": "A：為什麼顧問說我們的鋼鐵廠必須在未來三年內改變生產方式？ B：她發現我們製程的能源【密集度】遠高於競爭對手，這表示我們每生產一噸鋼要用更多電，因而虧錢。"
  },
  {
    "word": "storage",
    "pos": "n.",
    "cn_def": "儲存",
    "en_def": "the keeping of something, such as energy, until it is needed",
    "sentence": "A: What will the factory do with all the extra electricity that the solar panels produce at noon when the machines are not using it? B: The company bought a large battery {{BLANK}} system that keeps the extra power, so we can use it in the evening when electricity prices from the grid are much higher.",
    "cn": "A：中午機器沒在用時，工廠要怎麼處理太陽能板產生的多餘電力？ B：公司買了一套大型電池【儲存】系統來保存多餘的電力，這樣我們就能在晚上電網電價高很多的時候使用。"
  },
  {
    "word": "transmit",
    "pos": "v.",
    "cn_def": "輸送；傳送",
    "en_def": "to send electricity or signals from one place to another",
    "sentence": "A: Why does the power company need to build so many new tall towers and cables across the farmland outside the town? B: They need to {{BLANK}} electricity from the new wind farm on the coast to the large cities in the north, which are about two hundred kilometers away from the sea.",
    "cn": "A：為什麼電力公司需要在鎮外的農田上蓋那麼多新的高塔和電纜？ B：他們需要把電力從海岸新的風場【輸送】到北方的大城市，那些城市距離海邊大約兩百公里。"
  },
  {
    "word": "convert",
    "pos": "v.",
    "cn_def": "轉換；轉變",
    "en_def": "to change something into a different form",
    "sentence": "A: How do the panels on the roof of the shopping mall actually help reduce the monthly electricity bill for the store owners? B: The panels {{BLANK}} sunlight into electricity during the day, which powers the lights and escalators, so the mall buys much less power from the city and passes the savings to tenants.",
    "cn": "A：購物中心屋頂上的板子實際上是怎麼幫店家降低每月電費的？ B：這些板子白天把陽光【轉換】成電力，供應照明和手扶梯使用，所以購物中心向市電購買的電少很多，並把省下的錢回饋給租戶。"
  },
  {
    "word": "generate",
    "pos": "v.",
    "cn_def": "產生；發（電）",
    "en_def": "to produce energy such as electricity or heat",
    "sentence": "A: Is it true that the new sports stadium can produce its own electricity, even during big evening games with thousands of fans? B: Yes, the solar roof and small wind turbines {{BLANK}} enough power for the lights and screens on most days, and the stadium only buys extra electricity during the winter months.",
    "cn": "A：新體育館真的能自己發電嗎？即使是晚上有數千名球迷的大型比賽也可以？ B：是的，太陽能屋頂和小型風力渦輪機大多數日子都能【產生】足夠電力供應照明和螢幕，體育館只有在冬季幾個月才需要額外買電。"
  },
  {
    "word": "distribute",
    "pos": "v.",
    "cn_def": "分配；配送",
    "en_def": "to give or send something out to different people or places",
    "sentence": "A: After the earthquake, how did the city government make sure that the hospitals and schools still had electricity? B: Officials set up a plan to {{BLANK}} power from the remaining stations to the most important buildings first, and then slowly restored it to homes and shops over the next few days.",
    "cn": "A：地震過後，市政府是怎麼確保醫院和學校仍然有電的？ B：官員擬定計畫，先把剩餘電廠的電力【分配】給最重要的建築物，接著在之後幾天慢慢恢復住家和商店的供電。"
  },
  {
    "word": "efficient",
    "pos": "adj.",
    "cn_def": "有效率的；節能的",
    "en_def": "working well without wasting energy, time, or money",
    "sentence": "A: Should we buy the cheaper refrigerators for the staff kitchens, or spend a little more on the newer models from the other supplier? B: I think we should choose the newer models, because they are much more energy {{BLANK}} and will save us a lot of money on electricity over the next ten years.",
    "cn": "A：我們該為員工廚房買比較便宜的冰箱，還是多花一點錢買另一家供應商的新機型？ B：我認為我們應該選新機型，因為它們在能源上【有效率】得多，未來十年能幫我們省下很多電費。"
  },
  {
    "word": "energetic",
    "pos": "adj.",
    "cn_def": "精力充沛的",
    "en_def": "full of energy and very active",
    "sentence": "A: Who is going to lead the tour of the new solar power plant for the visiting investors next Friday morning? B: The manager chose Kevin, because he is very {{BLANK}} and friendly, knows the equipment well, and can keep a large group interested even during a long walk around the site in hot weather.",
    "cn": "A：下週五早上誰要帶來訪的投資人參觀新的太陽能發電廠？ B：經理選了凱文，因為他非常【精力充沛】又友善，熟悉設備，即使在炎熱天氣中繞場長時間走動，也能讓一大群人保持興趣。"
  }
];

const MCQS = [
  {
    "q": "The storm last night damaged several lines outside the office. The _____ was not restored until nine o'clock this morning.",
    "options": [
      "power",
      "fuel",
      "turbine",
      "emission"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our monthly bill shows that the office used more _____ in July. Most of it was used by the air conditioners on hot afternoons.",
    "options": [
      "generator",
      "electricity",
      "turbine",
      "emission"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The airline added a small surcharge to every ticket this quarter. Rising _____ prices have greatly increased the cost of each flight.",
    "options": [
      "grid",
      "turbine",
      "fuel",
      "generator"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Please remember to bring a charger to the trade show. The _____ in the tablet usually runs out after about five hours of use.",
    "options": [
      "grid",
      "turbine",
      "emission",
      "battery"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Visitors can _____ their mobile phones at the stations near the main entrance. The service is free for all guests at the conference.",
    "options": [
      "transmit",
      "charge",
      "distribute",
      "convert"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The hotel turned on its diesel _____ when the typhoon cut the city's power. Guests were able to use the elevators throughout the night.",
    "options": [
      "generator",
      "grid",
      "emission",
      "storage"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The company has promised to use only _____ energy by 2030. It will rely on solar panels and wind farms instead of coal.",
    "options": [
      "nuclear",
      "energetic",
      "efficient",
      "renewable"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The new parking lot has _____ panels on its roof. They collect sunlight during the day and power the lights at night.",
    "options": [
      "nuclear",
      "geothermal",
      "solar",
      "energetic"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Strong _____ along the coast makes the area perfect for turbines. The new farm will supply electricity to about ten thousand homes.",
    "options": [
      "wind",
      "fuel",
      "storage",
      "battery"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The dam on the river produces _____ for the whole region. During dry summers, however, low water levels reduce the amount of electricity.",
    "options": [
      "biomass",
      "emission",
      "hydropower",
      "battery"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The spa heats its pools with _____ energy from hot rocks deep underground. As a result, it does not need to burn any gas.",
    "options": [
      "solar",
      "geothermal",
      "nuclear",
      "energetic"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The government will close the old _____ power plant next year. Engineers will spend a decade safely removing its radioactive fuel.",
    "options": [
      "solar",
      "geothermal",
      "efficient",
      "nuclear"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The new air conditioners have improved the building's energy _____ by thirty percent. Our electricity bills have dropped noticeably since installation.",
    "options": [
      "efficiency",
      "emission",
      "grid",
      "turbine"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The city has started an energy _____ campaign this summer. It asks residents to turn off lights and unplug devices they are not using.",
    "options": [
      "output",
      "turbine",
      "grid",
      "conservation"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Fuel _____ at our factory rose sharply last quarter. The manager believes the old boilers are burning far more gas than necessary.",
    "options": [
      "turbine",
      "consumption",
      "grid",
      "generator"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The power station increased its _____ to meet the high demand during the heat wave. It produced twenty percent more electricity than usual.",
    "options": [
      "battery",
      "conservation",
      "output",
      "turbine"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The storm damaged the main cables near the station. The electricity _____ to the business district was cut off for six hours.",
    "options": [
      "efficiency",
      "emission",
      "intensity",
      "supply"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "_____ for air conditioners usually rises sharply in June. Retailers increase their orders in spring so they do not run out of stock.",
    "options": [
      "demand",
      "storage",
      "emission",
      "output"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Our rooftop solar system is connected to the national _____. Any extra power we produce is sold back to the electricity company.",
    "options": [
      "turbine",
      "battery",
      "grid",
      "emission"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Each wind _____ on the hill can produce enough electricity for about one thousand homes. Engineers inspect the blades every spring.",
    "options": [
      "battery",
      "turbine",
      "grid",
      "fuel"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The factory has reduced the _____ of harmful gases from its chimneys. Local residents say the air quality has clearly improved.",
    "options": [
      "emission",
      "efficiency",
      "demand",
      "turbine"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The hotel chain aims to become fully _____ within ten years. It plans to cut waste, save water, and use only clean energy.",
    "options": [
      "nuclear",
      "solar",
      "energetic",
      "sustainable"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Coal and oil are _____ resources that cannot be replaced once they are used up. Many companies are therefore investing in solar power.",
    "options": [
      "renewable",
      "geothermal",
      "nonrenewable",
      "energetic"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The warehouse has installed a large battery _____ system. It keeps extra solar power so the building can use it after dark.",
    "options": [
      "emission",
      "storage",
      "demand",
      "intensity"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "High-voltage cables _____ electricity from the power plant to cities hundreds of kilometers away. Very little energy is lost along the way.",
    "options": [
      "charge",
      "generate",
      "convert",
      "transmit"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Solar panels _____ sunlight into electricity for the office building. On cloudy days, however, they produce much less power.",
    "options": [
      "convert",
      "charge",
      "distribute",
      "transmit"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The rooftop panels will _____ about forty percent of the electricity the factory uses each day. The rest will still come from the grid.",
    "options": [
      "charge",
      "generate",
      "convert",
      "transmit"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "After the earthquake, the utility company had to _____ the limited power carefully. Hospitals and emergency centers received electricity first.",
    "options": [
      "convert",
      "charge",
      "distribute",
      "generate"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "These LED lights are much more energy _____ than the old bulbs. They use eighty percent less electricity and last for years.",
    "options": [
      "efficient",
      "nuclear",
      "solar",
      "energetic"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "Our new sales trainer is cheerful and _____ in every workshop. Even after long sessions, she keeps the whole team awake and interested.",
    "options": [
      "nuclear",
      "nonrenewable",
      "geothermal",
      "energetic"
    ],
    "answer": 3,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "power": {
    "pos": "n.",
    "en_def": "the energy, especially electricity, used to make machines work",
    "cn_def": "電力；動力"
  },
  "electricity": {
    "pos": "n.",
    "en_def": "energy that is carried by wires and used for lights and machines",
    "cn_def": "電；電力"
  },
  "fuel": {
    "pos": "n.",
    "en_def": "something such as gas, oil, or coal that is burned to make heat or power",
    "cn_def": "燃料"
  },
  "battery": {
    "pos": "n.",
    "en_def": "an object that stores electricity and gives power to a device",
    "cn_def": "電池"
  },
  "charge": {
    "pos": "v.",
    "en_def": "to put electricity into a battery or device",
    "cn_def": "充電"
  },
  "generator": {
    "pos": "n.",
    "en_def": "a machine that produces electricity",
    "cn_def": "發電機"
  },
  "renewable": {
    "pos": "adj.",
    "en_def": "coming from a natural source that does not run out, like sun or wind",
    "cn_def": "可再生的"
  },
  "nonrenewable": {
    "pos": "adj.",
    "en_def": "not able to be replaced after it is used up, like coal or oil",
    "cn_def": "不可再生的"
  },
  "solar": {
    "pos": "adj.",
    "en_def": "using or coming from the energy of the sun",
    "cn_def": "太陽能的；太陽的"
  },
  "wind": {
    "pos": "n.",
    "en_def": "air that moves outside, which can be used to make power",
    "cn_def": "風"
  },
  "hydropower": {
    "pos": "n.",
    "en_def": "electricity made from the force of moving water",
    "cn_def": "水力發電"
  },
  "geothermal": {
    "pos": "adj.",
    "en_def": "using the natural heat from deep inside the earth",
    "cn_def": "地熱的"
  },
  "biomass": {
    "pos": "n.",
    "en_def": "plant or animal material, such as wood, used as fuel",
    "cn_def": "生質物；生物質"
  },
  "nuclear": {
    "pos": "adj.",
    "en_def": "using the energy made when atoms are split",
    "cn_def": "核能的；核子的"
  },
  "efficiency": {
    "pos": "n.",
    "en_def": "the ability to do a job well without wasting energy, time, or money",
    "cn_def": "效率"
  },
  "conservation": {
    "pos": "n.",
    "en_def": "the careful use of something so that it is not wasted",
    "cn_def": "節約；保護"
  },
  "consumption": {
    "pos": "n.",
    "en_def": "the amount of energy, fuel, or food that is used",
    "cn_def": "消耗量；消費"
  },
  "output": {
    "pos": "n.",
    "en_def": "the amount of power or goods that something produces",
    "cn_def": "輸出量；產量"
  },
  "input": {
    "pos": "n.",
    "en_def": "the energy or material that is put into a machine or system",
    "cn_def": "輸入；投入"
  },
  "supply": {
    "pos": "n.",
    "en_def": "an amount of something that is provided for people to use",
    "cn_def": "供應；供給"
  },
  "demand": {
    "pos": "n.",
    "en_def": "the amount of something that people want or need to use",
    "cn_def": "需求"
  },
  "grid": {
    "pos": "n.",
    "en_def": "the network of wires that carries electricity to a large area",
    "cn_def": "電網"
  },
  "turbine": {
    "pos": "n.",
    "en_def": "a machine with turning blades that makes power from wind, water, or steam",
    "cn_def": "渦輪機"
  },
  "emission": {
    "pos": "n.",
    "en_def": "gas or other material sent out into the air",
    "cn_def": "排放；排放物"
  },
  "sustainable": {
    "pos": "adj.",
    "en_def": "able to continue for a long time without harming the environment",
    "cn_def": "永續的；可持續的"
  },
  "clean": {
    "pos": "adj.",
    "en_def": "not making the air, water, or land dirty",
    "cn_def": "乾淨的；無污染的"
  },
  "green": {
    "pos": "adj.",
    "en_def": "good for the environment",
    "cn_def": "環保的；綠色的"
  },
  "intensity": {
    "pos": "n.",
    "en_def": "the amount of energy used to produce something",
    "cn_def": "密集度；強度"
  },
  "storage": {
    "pos": "n.",
    "en_def": "the keeping of something, such as energy, until it is needed",
    "cn_def": "儲存"
  },
  "transmit": {
    "pos": "v.",
    "en_def": "to send electricity or signals from one place to another",
    "cn_def": "輸送；傳送"
  },
  "convert": {
    "pos": "v.",
    "en_def": "to change something into a different form",
    "cn_def": "轉換；轉變"
  },
  "generate": {
    "pos": "v.",
    "en_def": "to produce energy such as electricity or heat",
    "cn_def": "產生；發（電）"
  },
  "distribute": {
    "pos": "v.",
    "en_def": "to give or send something out to different people or places",
    "cn_def": "分配；配送"
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "working well without wasting energy, time, or money",
    "cn_def": "有效率的；節能的"
  },
  "energetic": {
    "pos": "adj.",
    "en_def": "full of energy and very active",
    "cn_def": "精力充沛的"
  }
};

const EXTRA_GLOSSES = {};
