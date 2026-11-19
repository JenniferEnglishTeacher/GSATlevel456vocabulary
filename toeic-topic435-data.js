// Topic 435 Quiz Data: Wasting 浪費
// Source word list: https://www.examword.com/group-topic/wasting — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T435 - Wasting 浪費",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "squander",
    "pos": "v.",
    "cn_def": "揮霍；浪費",
    "en_def": "to waste money, time, or chances in a foolish way",
    "sentence": "A: Why does the finance director look so upset after this morning's budget meeting with the marketing team? B: She found out that they managed to {{BLANK}} almost half of their yearly budget on expensive TV ads that brought in very few new customers, so she wants a full report by Friday.",
    "cn": "A：為什麼財務長在今天早上和行銷團隊開完預算會議後看起來那麼不高興？ B：她發現他們把將近一半的年度預算【揮霍】在昂貴的電視廣告上，卻幾乎沒帶來新客戶，所以她要求週五前交一份完整報告。"
  },
  {
    "word": "consume",
    "pos": "v.",
    "cn_def": "消耗；消費",
    "en_def": "to use up energy, fuel, time, or goods",
    "sentence": "A: Should we replace the old printers on the third floor, or can they keep working until the end of the year? B: I think we should replace them soon, because those machines {{BLANK}} far more power than the new models, and our electricity bill has gone up every month since spring.",
    "cn": "A：我們該換掉三樓的舊印表機嗎，還是它們可以用到年底？ B：我覺得應該盡快換，因為那些機器比新機型【消耗】更多電力，而且從春天以來我們的電費每個月都在上漲。"
  },
  {
    "word": "use",
    "pos": "v.",
    "cn_def": "使用；利用",
    "en_def": "to do something with a thing for a purpose",
    "sentence": "A: Our team keeps running out of paper in the copy room, and the supply order does not arrive until next Thursday. What should we do? B: Let's ask everyone to {{BLANK}} both sides of each sheet and to send documents by email whenever possible, so we can make the paper last longer.",
    "cn": "A：我們團隊影印室的紙一直不夠用，而且補貨要到下週四才會到。我們該怎麼辦？ B：我們請大家每張紙都【使用】兩面，並盡可能用電子郵件寄送文件，這樣紙就能撐久一點。"
  },
  {
    "word": "overuse",
    "pos": "v.",
    "cn_def": "過度使用",
    "en_def": "to use something too much or too often",
    "sentence": "A: Why did the hotel manager put new signs in all the guest bathrooms last week? B: Many guests tend to {{BLANK}} towels during their stay, asking for fresh ones every day, so the signs politely encourage them to hang towels up and reuse them to save water and laundry costs.",
    "cn": "A：飯店經理上週為什麼在所有客房浴室放了新的告示？ B：很多房客住宿期間常常【過度使用】毛巾，每天都要求換新的，所以告示禮貌地鼓勵他們把毛巾掛起來重複使用，以節省水和洗衣成本。"
  },
  {
    "word": "misuse",
    "pos": "v.",
    "cn_def": "濫用；誤用",
    "en_def": "to use something in a wrong or dishonest way",
    "sentence": "A: Why does the IT department now require a manager's approval before anyone can order new software for the office? B: Last year a few employees began to {{BLANK}} the company credit card by buying programs they never needed, which cost the firm thousands of dollars, so the new rule keeps spending under control.",
    "cn": "A：為什麼資訊部門現在要求任何人訂購新軟體前都要有主管核准？ B：去年有幾位員工開始【濫用】公司信用卡購買根本用不到的程式，讓公司損失了數千美元，所以新規定是為了控制支出。"
  },
  {
    "word": "throw away",
    "pos": "v.phr.",
    "cn_def": "丟掉；扔掉",
    "en_def": "to put something in the trash because you do not want it",
    "sentence": "A: What should we do with all the old brochures and price lists that have been sitting in the storage room since we changed our logo? B: Please don't {{BLANK}} the whole pile, because the back pages are still blank, and the design team can cut them up and use them as notepads for meetings.",
    "cn": "A：自從我們換了標誌後，那些放在倉庫的舊手冊和價目表該怎麼處理？ B：請不要把整疊都【丟掉】，因為背面還是空白的，設計團隊可以把它們裁開，當作開會用的便條紙。"
  },
  {
    "word": "discard",
    "pos": "v.",
    "cn_def": "丟棄；拋棄",
    "en_def": "to get rid of something you no longer need",
    "sentence": "A: The new laptops arrived this morning, but what will happen to the old computers that the accounting staff used for five years? B: We will not simply {{BLANK}} them, because the IT team plans to repair the best ones and donate them to a local school that cannot afford new equipment.",
    "cn": "A：新的筆記型電腦今天早上到了，但會計人員用了五年的舊電腦要怎麼處理？ B：我們不會直接把它們【丟棄】，因為資訊團隊打算修好狀況最好的幾台，捐給一所買不起新設備的當地學校。"
  },
  {
    "word": "trash",
    "pos": "n.",
    "cn_def": "垃圾",
    "en_def": "things that people throw away",
    "sentence": "A: Why is the cleaning crew complaining about the kitchen on our floor after every Friday lunch party? B: People leave plates, cups, and pizza boxes everywhere, and the {{BLANK}} often piles up beside the bins, so the crew needs an extra hour to clean before they can go home.",
    "cn": "A：為什麼清潔人員每次在週五午餐聚會後都抱怨我們樓層的廚房？ B：大家把盤子、杯子和披薩盒到處亂放，【垃圾】常常堆在垃圾桶旁邊，所以清潔人員要多花一個小時打掃才能下班。"
  },
  {
    "word": "garbage",
    "pos": "n.",
    "cn_def": "垃圾；廚餘",
    "en_def": "waste such as old food and paper that is thrown away",
    "sentence": "A: Why did the restaurant owner decide to buy a new kitchen scale last month? B: She wanted to measure exactly how much {{BLANK}} the cooks produce each night, because the collection company charges by weight, and she believes better planning could cut the monthly bill in half.",
    "cn": "A：餐廳老闆上個月為什麼決定買一台新的廚房秤？ B：她想精確測量廚師們每晚產生多少【垃圾】，因為清運公司是按重量收費，她相信更好的規劃可以讓每月帳單減半。"
  },
  {
    "word": "rubbish",
    "pos": "n.",
    "cn_def": "垃圾；廢物",
    "en_def": "waste material that people throw away (British English)",
    "sentence": "A: Have you seen the area behind our office building since the new shopping center opened next door? B: Yes, it looks terrible, because shoppers keep dropping {{BLANK}} like plastic bags and coffee cups on the grass, so our building manager has asked the city to put in more bins.",
    "cn": "A：自從隔壁新的購物中心開幕後，你有看到我們辦公大樓後面的區域嗎？ B：有，看起來很糟糕，因為購物的人一直把塑膠袋和咖啡杯之類的【垃圾】丟在草地上，所以我們的大樓管理員已經請市政府多設幾個垃圾桶。"
  },
  {
    "word": "pollution",
    "pos": "n.",
    "cn_def": "污染",
    "en_def": "dirty or harmful things in the air, water, or land",
    "sentence": "A: Why did the factory spend so much money on new equipment this year when sales were not very strong? B: The government introduced stricter rules about air quality, and the old machines created too much {{BLANK}}, so the company had to upgrade them or pay very large fines every month.",
    "cn": "A：今年銷售並不理想，為什麼工廠還花那麼多錢買新設備？ B：政府對空氣品質實施了更嚴格的規定，而舊機器造成太多【污染】，所以公司必須升級設備，否則每個月都要繳很高的罰款。"
  },
  {
    "word": "resource",
    "pos": "n.",
    "cn_def": "資源",
    "en_def": "something useful, such as money, people, or materials, that you can use",
    "sentence": "A: Why is the manager asking every department to share one meeting room instead of booking separate rooms all day? B: Office space is a limited {{BLANK}} in our building, and several rooms sit empty for hours after people book them, so sharing helps us save space and avoid renting another floor.",
    "cn": "A：經理為什麼要求每個部門共用一間會議室，而不是整天各自預訂不同的房間？ B：辦公空間在我們大樓是有限的【資源】，而且有好幾間會議室被預訂後空了好幾個小時，所以共用能幫我們節省空間，避免再多租一層樓。"
  },
  {
    "word": "energy",
    "pos": "n.",
    "cn_def": "能源",
    "en_def": "power from electricity, fuel, or the sun that makes things work",
    "sentence": "A: Why are the lights in the hallway turning off by themselves when nobody is walking past? B: The building owner installed motion sensors last month to save {{BLANK}}, because the lights used to stay on all night, and the monthly power bill for the whole building was much too high.",
    "cn": "A：為什麼走廊沒人經過時燈會自己關掉？ B：大樓業主上個月安裝了動作感應器來節省【能源】，因為以前燈會整晚開著，整棟大樓每月的電費實在太高了。"
  },
  {
    "word": "electricity",
    "pos": "n.",
    "cn_def": "電；電力",
    "en_def": "power that comes through wires and makes machines and lights work",
    "sentence": "A: Should I leave my computer on when I go home tonight so it can install the updates? B: No, please shut it down, because the company wants to cut the amount of {{BLANK}} we use at night, and the updates can run automatically tomorrow morning when you log in.",
    "cn": "A：我今晚回家時要不要讓電腦開著，好讓它安裝更新？ B：不用，請關機，因為公司想減少我們晚上使用的【電】量，而且更新明天早上你登入時就會自動執行。"
  },
  {
    "word": "water",
    "pos": "n.",
    "cn_def": "水",
    "en_def": "the clear liquid that people drink and use for washing",
    "sentence": "A: Why did the gym replace all the showers in the locker rooms during the holiday break? B: The old showers wasted a lot of {{BLANK}} because they kept running even after people left, so the new ones turn off automatically after five minutes, which also lowers the monthly utility costs.",
    "cn": "A：健身房為什麼在假期期間把更衣室所有的淋浴設備都換掉？ B：舊的淋浴設備在人離開後還會一直流，浪費很多【水】，所以新的會在五分鐘後自動關閉，也降低了每月的水電費。"
  },
  {
    "word": "food",
    "pos": "n.",
    "cn_def": "食物",
    "en_def": "things that people eat",
    "sentence": "A: Why does the hotel restaurant donate its leftover meals to the shelter every evening now? B: The manager noticed that the breakfast buffet threw out too much {{BLANK}} each day, so she started working with a local charity to give the extra dishes to people who really need them.",
    "cn": "A：飯店餐廳為什麼現在每天晚上都把剩餘餐點捐給收容所？ B：經理發現自助早餐每天丟掉太多【食物】，所以她開始和當地慈善機構合作，把多餘的菜餚送給真正需要的人。"
  },
  {
    "word": "time",
    "pos": "n.",
    "cn_def": "時間",
    "en_def": "the minutes, hours, and days that pass",
    "sentence": "A: Why does our new team leader always start meetings exactly on schedule, even if some people are late? B: She says long meetings that start late waste everyone's {{BLANK}}, so she sends the agenda the day before and expects us to arrive prepared and finish within thirty minutes.",
    "cn": "A：為什麼我們的新組長總是準時開會，即使有人遲到也一樣？ B：她說延遲開始的冗長會議浪費大家的【時間】，所以她會在前一天寄出議程，並期望我們準備好再來，三十分鐘內結束。"
  },
  {
    "word": "money",
    "pos": "n.",
    "cn_def": "錢；金錢",
    "en_def": "the coins, bills, and funds used to buy things",
    "sentence": "A: Why did the company stop sending printed catalogs to all of our customers this year? B: Most customers now shop online, and the printing and shipping costs were very high, so the managers felt we were throwing {{BLANK}} away on catalogs that people usually put straight into the recycling bin.",
    "cn": "A：公司今年為什麼不再寄紙本型錄給所有客戶？ B：現在大部分客戶都在網路上購物，而印刷和運費又很高，所以主管們覺得我們把【錢】浪費在大家通常直接丟進回收桶的型錄上。"
  },
  {
    "word": "valuable",
    "pos": "adj.",
    "cn_def": "寶貴的；有價值的",
    "en_def": "very useful or important; worth a lot",
    "sentence": "A: Why does the sales manager want us to stop checking our email every few minutes during the workday? B: She thinks it breaks our focus and wastes {{BLANK}} hours that we could spend calling clients, so she suggests checking messages only three times a day, at nine, at one, and at four.",
    "cn": "A：為什麼業務經理要我們在工作時間不要每隔幾分鐘就查看電子郵件？ B：她認為這會打斷我們的專注力，浪費我們可以用來打電話給客戶的【寶貴】時間，所以她建議一天只在九點、一點和四點查看三次訊息。"
  },
  {
    "word": "careless",
    "pos": "adj.",
    "cn_def": "粗心的；不小心的",
    "en_def": "not paying enough attention, so mistakes happen",
    "sentence": "A: Why did the warehouse lose so many boxes of fresh fruit last week before they reached the stores? B: A {{BLANK}} worker left the cold room door open overnight, so the fruit became too warm and spoiled, and the company had to throw everything out and order a new shipment.",
    "cn": "A：倉庫上週為什麼在送到店家前損失了那麼多箱新鮮水果？ B：一位【粗心的】員工整晚沒關冷藏室的門，水果變得太熱而壞掉，公司只好全部丟掉，重新訂一批貨。"
  },
  {
    "word": "unnecessary",
    "pos": "adj.",
    "cn_def": "不必要的",
    "en_def": "not needed",
    "sentence": "A: Why did the director cancel the weekly status meeting that everyone has attended for the past two years? B: She decided it was {{BLANK}} because the team already shares progress updates in an online chat, and the meeting took an hour away from real work every Monday morning.",
    "cn": "A：主管為什麼取消了大家過去兩年都參加的每週進度會議？ B：她認為那是【不必要的】，因為團隊已經在線上聊天室分享進度，而且那個會議每週一早上都佔用了一小時的實際工作時間。"
  },
  {
    "word": "excessive",
    "pos": "adj.",
    "cn_def": "過度的；過多的",
    "en_def": "much more than is needed or reasonable",
    "sentence": "A: Why did the store manager speak to the night staff about the air conditioning in the shop? B: They had been running it at a very low temperature all night, even when the store was closed, which led to {{BLANK}} power use and a bill that was twice as high as usual.",
    "cn": "A：店長為什麼找夜班員工談店裡冷氣的事？ B：他們整晚都把冷氣開在很低的溫度，即使商店已經打烊也一樣，導致【過度的】用電，電費比平常高出一倍。"
  },
  {
    "word": "reduce",
    "pos": "v.",
    "cn_def": "減少；降低",
    "en_def": "to make something smaller in amount or size",
    "sentence": "A: What is the main goal of the new green program that the head office announced at the meeting yesterday? B: The company wants every branch to {{BLANK}} its paper use by thirty percent before next summer, so we will switch to digital forms and print only documents that customers must sign.",
    "cn": "A：總公司昨天在會議上宣布的新環保計畫主要目標是什麼？ B：公司希望每間分公司在明年夏天之前把用紙量【減少】百分之三十，所以我們會改用電子表格，只列印客戶必須簽名的文件。"
  },
  {
    "word": "reuse",
    "pos": "v.",
    "cn_def": "重複使用",
    "en_def": "to use something again instead of throwing it away",
    "sentence": "A: What should we do with the cardboard boxes that the new office chairs came in this morning? B: Let's fold them flat and keep them in the storage room, because we can {{BLANK}} them next month when we ship the old furniture to our branch office in the south.",
    "cn": "A：今天早上新辦公椅送來時的紙箱該怎麼處理？ B：我們把它們壓平放在倉庫，因為下個月把舊家具運到南部分公司時可以【重複使用】它們。"
  },
  {
    "word": "recycle",
    "pos": "v.",
    "cn_def": "回收；再利用",
    "en_def": "to treat used things so they can be made into new things",
    "sentence": "A: Why are there now three different colored bins next to the printer in the main office? B: The company wants us to {{BLANK}} paper, plastic, and cans separately, because the building's cleaning service can sell clean materials to a factory, and that helps lower our monthly service fee.",
    "cn": "A：為什麼主辦公室的印表機旁邊現在有三個不同顏色的垃圾桶？ B：公司希望我們把紙類、塑膠和鐵罐分開【回收】，因為大樓的清潔公司可以把乾淨的材料賣給工廠，這有助於降低我們每月的服務費。"
  },
  {
    "word": "conserve",
    "pos": "v.",
    "cn_def": "節約；保存",
    "en_def": "to use carefully so that it is not wasted",
    "sentence": "A: Why did the hotel send an email asking guests to take shorter showers during their stay this summer? B: The city is facing a long dry season with very little rain, so all local businesses have been asked to {{BLANK}} water until the reservoirs fill up again in the autumn.",
    "cn": "A：飯店今年夏天為什麼寄電子郵件請房客在住宿期間縮短淋浴時間？ B：這座城市正面臨很少下雨的漫長乾季，所以所有當地企業都被要求【節約】用水，直到秋天水庫再次蓄滿為止。"
  },
  {
    "word": "limit",
    "pos": "v.",
    "cn_def": "限制",
    "en_def": "to keep something below a certain amount",
    "sentence": "A: How can we stop the team from ordering so many office supplies that nobody ever uses? B: The manager plans to {{BLANK}} each person to one supply order per month, and anyone who needs more must explain the reason, which should stop people from filling their drawers with extra pens.",
    "cn": "A：我們要怎樣才能阻止團隊訂購那麼多根本沒人用的辦公用品？ B：經理打算把每個人【限制】為每月只能下一次用品訂單，需要更多的人必須說明原因，這應該能阻止大家把抽屜塞滿多餘的筆。"
  },
  {
    "word": "efficient",
    "pos": "adj.",
    "cn_def": "有效率的；節能的",
    "en_def": "working well without wasting time, money, or energy",
    "sentence": "A: Why did the company decide to replace all the old heaters in the warehouse before winter? B: The new heaters are much more {{BLANK}}, so they warm the building faster while using less fuel, and the managers expect them to pay for themselves within about three years.",
    "cn": "A：公司為什麼決定在冬天之前更換倉庫所有的舊暖氣？ B：新的暖氣【有效率】得多，能更快讓建築物變暖又耗用較少燃料，主管們預計大約三年內就能回本。"
  },
  {
    "word": "wasteful",
    "pos": "adj.",
    "cn_def": "浪費的",
    "en_def": "using more than is needed, or using things badly",
    "sentence": "A: Why did the new owner stop the free printed newspapers that used to be delivered to every hotel room? B: Most guests never opened them and just left them on the desk, so she felt the service was {{BLANK}}, and now guests can read the news on the hotel's free app instead.",
    "cn": "A：新老闆為什麼停止了以前每間客房都會送的免費紙本報紙？ B：大部分房客從來不翻開，只是放在桌上，所以她覺得這項服務很【浪費】，現在房客可以改用飯店的免費應用程式看新聞。"
  },
  {
    "word": "carefully",
    "pos": "adv.",
    "cn_def": "仔細地；謹慎地",
    "en_def": "with attention, to avoid mistakes or waste",
    "sentence": "A: How can we make sure the new budget for the training program lasts until the end of the year? B: We need to plan every event {{BLANK}}, compare prices from several suppliers, and avoid booking expensive hotels, because the director will not give us any extra money after June.",
    "cn": "A：我們要如何確保新的培訓計畫預算能撐到年底？ B：我們需要【仔細地】規劃每一場活動，比較幾家供應商的價格，並避免預訂昂貴的飯店，因為六月之後主管不會再多給我們任何經費。"
  },
  {
    "word": "environment",
    "pos": "n.",
    "cn_def": "環境",
    "en_def": "the air, water, and land where people, animals, and plants live",
    "sentence": "A: Why does our company give a small bonus to staff who come to work by bicycle or bus? B: The owners want to show that they care about the {{BLANK}}, and fewer cars in the parking lot means less traffic, cleaner air, and a better image for the company in the local community.",
    "cn": "A：我們公司為什麼會給騎腳踏車或搭公車上班的員工一點獎金？ B：老闆們想表現出他們關心【環境】，而停車場裡車子少一點，代表交通較順暢、空氣更乾淨，公司在當地社區的形象也會更好。"
  },
  {
    "word": "protect",
    "pos": "v.",
    "cn_def": "保護",
    "en_def": "to keep someone or something safe from harm",
    "sentence": "A: Why is the factory planting so many trees along the river behind the main building this spring? B: The managers want to {{BLANK}} the riverbank from heavy rain and show the community that the company takes its responsibility for the local area seriously, especially after last year's flood.",
    "cn": "A：工廠今年春天為什麼在主建築後面的河邊種那麼多樹？ B：主管們想【保護】河岸免受大雨侵蝕，並向社區表明公司認真看待對當地的責任，特別是在去年的水災之後。"
  }
];

const MCQS = [
  {
    "q": "The new CEO warned the managers not to _____ the company's savings on luxury trips. She wants every dollar spent on growth.",
    "options": [
      "squander",
      "recycle",
      "protect",
      "conserve"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Large air conditioners _____ a huge amount of electricity in summer. The office manager plans to replace them with smaller units.",
    "options": [
      "recycle",
      "protect",
      "consume",
      "limit"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Please _____ the stairs instead of the elevator when you go up only one floor. This small change saves power every day.",
    "options": [
      "recycle",
      "use",
      "discard",
      "squander"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Staff who _____ the shared printer cause it to break down often. The manager asked everyone to print only what is necessary.",
    "options": [
      "recycle",
      "conserve",
      "protect",
      "overuse"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Employees who _____ company vehicles for personal trips will lose their driving privileges. The policy takes effect next Monday.",
    "options": [
      "reduce",
      "conserve",
      "misuse",
      "recycle"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Before you _____ old receipts, check whether the accounting team still needs them. Some must be kept for five years.",
    "options": [
      "throw away",
      "set up",
      "carry out",
      "turn on"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The lab must safely _____ used chemicals according to government rules. A special company collects them every two weeks.",
    "options": [
      "protect",
      "consume",
      "limit",
      "discard"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Please take the _____ out to the bins behind the building before you leave. The cleaners will not come in tomorrow.",
    "options": [
      "energy",
      "trash",
      "resource",
      "pollution"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Heavy traffic near the factory causes serious air _____ in the area. The city plans to build a new bus line to help.",
    "options": [
      "pollution",
      "energy",
      "money",
      "food"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Skilled workers are our most important _____. The company invests heavily in training to keep them happy and productive.",
    "options": [
      "pollution",
      "trash",
      "resource",
      "electricity"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Solar panels on the roof now supply most of the _____ the warehouse needs. The monthly power bill has dropped sharply.",
    "options": [
      "food",
      "energy",
      "trash",
      "pollution"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "A storm cut off the _____ to the whole office park this morning. Staff worked by window light until the power returned.",
    "options": [
      "food",
      "money",
      "trash",
      "electricity"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The leaking pipe in the kitchen wasted hundreds of liters of _____ last month. A plumber will fix it this afternoon.",
    "options": [
      "money",
      "electricity",
      "water",
      "time"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The cafeteria now cooks smaller portions so that less _____ ends up in the trash. Guests can always ask for a second serving.",
    "options": [
      "food",
      "pollution",
      "energy",
      "electricity"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Long meetings without a clear agenda waste a lot of _____. Our manager now limits them to thirty minutes.",
    "options": [
      "trash",
      "pollution",
      "environment",
      "time"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "By switching to online invoices, the firm saves a lot of _____ on paper and postage. Those savings will fund new laptops.",
    "options": [
      "pollution",
      "money",
      "environment",
      "trash"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Our clients' trust is extremely _____ to us. We answer every complaint within one business day.",
    "options": [
      "valuable",
      "wasteful",
      "careless",
      "excessive"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "A _____ mistake in the order form sent five hundred boxes to the wrong store. The clerk has promised to check more closely.",
    "options": [
      "valuable",
      "efficient",
      "careless",
      "excessive"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "To avoid _____ costs, please get approval before booking any business trips. The finance team will review each request.",
    "options": [
      "careless",
      "unnecessary",
      "efficient",
      "valuable"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The delivery driver was fined for _____ speed on the highway near the airport. Police said he was going 150 kilometers per hour.",
    "options": [
      "valuable",
      "efficient",
      "careless",
      "excessive"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The new software helped us _____ processing time by forty percent. Orders now ship on the same day.",
    "options": [
      "conserve",
      "protect",
      "reduce",
      "recycle"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Guests who _____ their towels for more than one night receive a free coffee voucher. The program saves water and detergent.",
    "options": [
      "reuse",
      "consume",
      "discard",
      "squander"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The city now pays residents who _____ glass bottles at the collection center. Each bottle earns two cents.",
    "options": [
      "overuse",
      "squander",
      "misuse",
      "recycle"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "During the dry season, all hotels must _____ water by turning off fountains and garden sprinklers. Those who break the rule may be fined.",
    "options": [
      "consume",
      "conserve",
      "squander",
      "overuse"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "To control costs, the company will _____ each employee to two business trips per year. Exceptions need the director's approval.",
    "options": [
      "limit",
      "protect",
      "recycle",
      "consume"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The new delivery system is far more _____ than the old one. Packages now reach customers a full day earlier.",
    "options": [
      "careless",
      "wasteful",
      "efficient",
      "excessive"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Printing every email is a _____ habit that uses tons of paper. Please read messages on your screen instead.",
    "options": [
      "valuable",
      "wasteful",
      "efficient",
      "accurate"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Please check the figures _____ before you send the report to the client. Even a small error could cost us the contract.",
    "options": [
      "rarely",
      "loudly",
      "hardly",
      "carefully"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Our new packaging is made from paper, which is better for the _____ than plastic. Customers have praised the change online.",
    "options": [
      "resource",
      "pollution",
      "environment",
      "electricity"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Workers must wear gloves to _____ their hands when handling broken glass. Safety equipment is stored next to the loading dock.",
    "options": [
      "protect",
      "reduce",
      "recycle",
      "consume"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "squander": {
    "pos": "v.",
    "en_def": "to waste money, time, or chances in a foolish way",
    "cn_def": "揮霍；浪費"
  },
  "consume": {
    "pos": "v.",
    "en_def": "to use up energy, fuel, time, or goods",
    "cn_def": "消耗；消費"
  },
  "use": {
    "pos": "v.",
    "en_def": "to do something with a thing for a purpose",
    "cn_def": "使用；利用"
  },
  "overuse": {
    "pos": "v.",
    "en_def": "to use something too much or too often",
    "cn_def": "過度使用"
  },
  "misuse": {
    "pos": "v.",
    "en_def": "to use something in a wrong or dishonest way",
    "cn_def": "濫用；誤用"
  },
  "throw away": {
    "pos": "v.phr.",
    "en_def": "to put something in the trash because you do not want it",
    "cn_def": "丟掉；扔掉"
  },
  "discard": {
    "pos": "v.",
    "en_def": "to get rid of something you no longer need",
    "cn_def": "丟棄；拋棄"
  },
  "trash": {
    "pos": "n.",
    "en_def": "things that people throw away",
    "cn_def": "垃圾"
  },
  "garbage": {
    "pos": "n.",
    "en_def": "waste such as old food and paper that is thrown away",
    "cn_def": "垃圾；廚餘"
  },
  "rubbish": {
    "pos": "n.",
    "en_def": "waste material that people throw away (British English)",
    "cn_def": "垃圾；廢物"
  },
  "pollution": {
    "pos": "n.",
    "en_def": "dirty or harmful things in the air, water, or land",
    "cn_def": "污染"
  },
  "resource": {
    "pos": "n.",
    "en_def": "something useful, such as money, people, or materials, that you can use",
    "cn_def": "資源"
  },
  "energy": {
    "pos": "n.",
    "en_def": "power from electricity, fuel, or the sun that makes things work",
    "cn_def": "能源"
  },
  "electricity": {
    "pos": "n.",
    "en_def": "power that comes through wires and makes machines and lights work",
    "cn_def": "電；電力"
  },
  "water": {
    "pos": "n.",
    "en_def": "the clear liquid that people drink and use for washing",
    "cn_def": "水"
  },
  "food": {
    "pos": "n.",
    "en_def": "things that people eat",
    "cn_def": "食物"
  },
  "time": {
    "pos": "n.",
    "en_def": "the minutes, hours, and days that pass",
    "cn_def": "時間"
  },
  "money": {
    "pos": "n.",
    "en_def": "the coins, bills, and funds used to buy things",
    "cn_def": "錢；金錢"
  },
  "valuable": {
    "pos": "adj.",
    "en_def": "very useful or important; worth a lot",
    "cn_def": "寶貴的；有價值的"
  },
  "careless": {
    "pos": "adj.",
    "en_def": "not paying enough attention, so mistakes happen",
    "cn_def": "粗心的；不小心的"
  },
  "unnecessary": {
    "pos": "adj.",
    "en_def": "not needed",
    "cn_def": "不必要的"
  },
  "excessive": {
    "pos": "adj.",
    "en_def": "much more than is needed or reasonable",
    "cn_def": "過度的；過多的"
  },
  "reduce": {
    "pos": "v.",
    "en_def": "to make something smaller in amount or size",
    "cn_def": "減少；降低"
  },
  "reuse": {
    "pos": "v.",
    "en_def": "to use something again instead of throwing it away",
    "cn_def": "重複使用"
  },
  "recycle": {
    "pos": "v.",
    "en_def": "to treat used things so they can be made into new things",
    "cn_def": "回收；再利用"
  },
  "conserve": {
    "pos": "v.",
    "en_def": "to use carefully so that it is not wasted",
    "cn_def": "節約；保存"
  },
  "limit": {
    "pos": "v.",
    "en_def": "to keep something below a certain amount",
    "cn_def": "限制"
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "working well without wasting time, money, or energy",
    "cn_def": "有效率的；節能的"
  },
  "wasteful": {
    "pos": "adj.",
    "en_def": "using more than is needed, or using things badly",
    "cn_def": "浪費的"
  },
  "carefully": {
    "pos": "adv.",
    "en_def": "with attention, to avoid mistakes or waste",
    "cn_def": "仔細地；謹慎地"
  },
  "environment": {
    "pos": "n.",
    "en_def": "the air, water, and land where people, animals, and plants live",
    "cn_def": "環境"
  },
  "protect": {
    "pos": "v.",
    "en_def": "to keep someone or something safe from harm",
    "cn_def": "保護"
  }
};

const EXTRA_GLOSSES = {};
