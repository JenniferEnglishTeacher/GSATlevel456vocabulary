// Topic 115 Quiz Data: Eating 飲食
// Source word list: https://www.examword.com/group-topic/eating — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T115 - Eating 飲食",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "eat",
    "pos": "v.",
    "cn_def": "吃",
    "en_def": "to put food in your mouth and swallow it",
    "sentence": "A: Do you know where the new interns usually go at lunchtime, because I want to invite them to join our team for a welcome event this week? B: Most of them {{BLANK}} at the small Italian café across the street, since it is cheap, fast, and only two minutes from the office.",
    "cn": "A：你知道新來的實習生午餐時間通常去哪裡嗎？因為我想邀請他們本週參加我們團隊的歡迎活動。 B：他們大多數人在對街那家小義大利咖啡館【吃飯】，因為那裡便宜、快速，而且離辦公室只要兩分鐘。"
  },
  {
    "word": "consume",
    "pos": "v.",
    "cn_def": "食用；消耗",
    "en_def": "to eat or drink something; to use something up",
    "sentence": "A: Why did the cafeteria manager put up a new sign next to the drink machines in the staff lounge yesterday afternoon? B: She wants to remind employees that they should {{BLANK}} food and drinks only in the break room, not at their desks, because crumbs are attracting insects to the office.",
    "cn": "A：餐廳經理昨天下午為什麼在員工休息室的飲料機旁邊貼了一張新告示？ B：她想提醒員工，只能在休息室裡【食用】食物和飲料，不要在座位上吃，因為碎屑正把蟲子引進辦公室。"
  },
  {
    "word": "devour",
    "pos": "v.",
    "cn_def": "狼吞虎嚥；吞食",
    "en_def": "to eat something very quickly because you are very hungry",
    "sentence": "A: How did the warehouse staff react when you brought those boxes of pizza after the long inventory check on Saturday? B: They were so hungry after working for nine hours without a proper break that they managed to {{BLANK}} all six pizzas in less than ten minutes and then thanked me many times.",
    "cn": "A：週六那場漫長的盤點結束後，你帶那幾盒披薩過去，倉庫員工有什麼反應？ B：他們連續工作九個小時都沒有好好休息，餓壞了，不到十分鐘就把六個披薩全部【狼吞虎嚥地吃光】，然後向我道謝了好多次。"
  },
  {
    "word": "nibble",
    "pos": "v.",
    "cn_def": "小口地吃；啃",
    "en_def": "to eat something in small bites, slowly",
    "sentence": "A: Will there be a full lunch at the product training session, or should I bring something to eat during the afternoon? B: There will only be light snacks, so most trainees just {{BLANK}} on crackers and fruit while they listen, and then they go out for a real dinner after the session ends at six.",
    "cn": "A：產品培訓課程會提供完整的午餐嗎？還是我下午應該自己帶點東西吃？ B：只會有輕食點心，所以大多數學員一邊聽課一邊【小口吃】餅乾和水果，等六點課程結束後再出去好好吃頓晚餐。"
  },
  {
    "word": "chew",
    "pos": "v.",
    "cn_def": "咀嚼；嚼",
    "en_def": "to bite food many times with your teeth before swallowing it",
    "sentence": "A: Why did the dentist at the company health fair tell everyone to slow down at lunch and avoid eating at their desks? B: He explained that people who {{BLANK}} their food slowly and carefully usually feel better in the afternoon, because their stomachs do not have to work so hard after a big meal.",
    "cn": "A：公司健康博覽會上的牙醫為什麼要大家午餐吃慢一點，並避免在座位上吃飯？ B：他解釋說，慢慢且仔細【咀嚼】食物的人下午通常感覺比較好，因為飽餐後胃不必那麼辛苦地工作。"
  },
  {
    "word": "swallow",
    "pos": "v.",
    "cn_def": "吞下；嚥下",
    "en_def": "to make food or drink go down your throat",
    "sentence": "A: Did the pharmacist give you any special instructions when you picked up the medicine for your business trip to Singapore? B: Yes, she told me to {{BLANK}} one tablet with a full glass of water after breakfast every morning, and she warned me not to take it on an empty stomach.",
    "cn": "A：你去領新加坡出差要用的藥時，藥劑師有沒有給你什麼特別的指示？ B：有，她叫我每天早上早餐後配一整杯水【吞服】一顆藥錠，並提醒我不要空腹服用。"
  },
  {
    "word": "savor",
    "pos": "v.",
    "cn_def": "細細品嚐；品味",
    "en_def": "to eat or drink something slowly so you can enjoy it fully",
    "sentence": "A: Why did you choose such an expensive French restaurant for the dinner with our new partners from Tokyo next Friday night? B: The chef serves seven small courses over three hours, so our guests can relax, {{BLANK}} every dish, and talk about the contract in a calm and friendly atmosphere.",
    "cn": "A：下週五晚上和東京新合作夥伴的晚餐，你為什麼選了這麼昂貴的法國餐廳？ B：主廚會在三小時內上七道小份料理，讓我們的客人可以放鬆、【細細品嚐】每道菜，並在平靜友好的氣氛中討論合約。"
  },
  {
    "word": "dine",
    "pos": "v.",
    "cn_def": "用餐；進餐",
    "en_def": "to eat dinner, especially a formal one",
    "sentence": "A: Where are the conference speakers going after the awards ceremony on Thursday evening, and do they need a bus from the hotel? B: They will {{BLANK}} at the rooftop restaurant on the twentieth floor of the same hotel, so they can simply take the elevator upstairs after the ceremony ends.",
    "cn": "A：週四晚上頒獎典禮結束後，研討會講者要去哪裡？他們需要從飯店搭巴士嗎？ B：他們會在同一家飯店二十樓的屋頂餐廳【用餐】，所以典禮結束後只要搭電梯上樓就可以了。"
  },
  {
    "word": "gorge",
    "pos": "v.",
    "cn_def": "大吃特吃；吃撐",
    "en_def": "to eat far too much food",
    "sentence": "A: Why do you always feel so sleepy during the Monday afternoon sales meeting, even when you go to bed early on Sunday night? B: I think it is because I {{BLANK}} on fried chicken and noodles at the company buffet every Monday, and that heavy food makes it very hard to concentrate afterward.",
    "cn": "A：為什麼你在週一下午的業務會議上總是很想睡，即使週日晚上很早就上床睡覺？ B：我想是因為我每週一都在公司自助餐【大吃特吃】炸雞和麵，那些油膩的食物讓我之後很難專心。"
  },
  {
    "word": "overeat",
    "pos": "v.",
    "cn_def": "吃太多；暴食",
    "en_def": "to eat more food than your body needs",
    "sentence": "A: Do you have any advice for the new staff who are attending the three-day sales conference with a free buffet at every meal? B: Yes, I always tell them not to {{BLANK}} at lunch, because they need to stay alert for the afternoon workshops and the long networking events in the evening.",
    "cn": "A：對於要參加三天業務研討會、每餐都有免費自助餐的新員工，你有什麼建議嗎？ B：有，我總是告訴他們午餐不要【吃太多】，因為他們需要保持清醒，參加下午的工作坊和晚上漫長的交流活動。"
  },
  {
    "word": "undereat",
    "pos": "v.",
    "cn_def": "吃得不夠；進食不足",
    "en_def": "to eat less food than your body needs",
    "sentence": "A: Why did the coach of our company running team ask everyone to write down their meals before the city marathon next month? B: He worries that some busy runners {{BLANK}} during long work weeks, and without enough food they will not have the energy to finish the race safely.",
    "cn": "A：我們公司跑步隊的教練為什麼要大家在下個月的城市馬拉松之前記錄自己的餐點？ B：他擔心有些忙碌的跑者在漫長的工作週裡【吃得不夠】，沒有足夠的食物，他們就沒有體力安全地跑完比賽。"
  },
  {
    "word": "appetite",
    "pos": "n.",
    "cn_def": "食慾；胃口",
    "en_def": "the feeling that you want to eat",
    "sentence": "A: Is the new manager feeling better now, or is he still tired after flying back from the trade show in Berlin last week? B: He is much better, and his {{BLANK}} has finally returned, so he ordered a big lunch today and even asked the team where to find good local food.",
    "cn": "A：新經理現在好點了嗎？還是上週從柏林商展飛回來後還是很累？ B：他好多了，【胃口】也終於恢復了，所以他今天點了一份豐盛的午餐，甚至還問團隊哪裡有好吃的在地美食。"
  },
  {
    "word": "hunger",
    "pos": "n.",
    "cn_def": "飢餓",
    "en_def": "the feeling that you need food",
    "sentence": "A: Why did the factory decide to provide free breakfast for workers on the early morning shift starting next month? B: Many workers said that {{BLANK}} made it hard for them to focus before lunch, and the safety manager believes a warm breakfast will reduce mistakes on the production line.",
    "cn": "A：工廠為什麼決定從下個月開始為清晨班的工人提供免費早餐？ B：很多工人說【飢餓】讓他們在午餐前很難專心，而安全主管認為一份熱騰騰的早餐能減少生產線上的錯誤。"
  },
  {
    "word": "full",
    "pos": "adj.",
    "cn_def": "飽的",
    "en_def": "having eaten so much that you do not want more",
    "sentence": "A: Would you like to try a piece of the chocolate cake that the marketing team brought to celebrate our successful product launch? B: Thank you, but I am completely {{BLANK}} after the large business lunch with our clients, so could you please save me a small piece for tomorrow morning?",
    "cn": "A：你要不要嚐一塊行銷團隊為慶祝產品成功上市帶來的巧克力蛋糕？ B：謝謝，不過和客戶吃完那頓豐盛的商務午餐後，我已經完全【吃飽】了，可以幫我留一小塊明天早上吃嗎？"
  },
  {
    "word": "satisfied",
    "pos": "adj.",
    "cn_def": "滿足的；滿意的",
    "en_def": "pleased because you got what you wanted or needed",
    "sentence": "A: Did the guests at the hotel conference center like the new lunch menu that the kitchen staff prepared for the medical seminar yesterday? B: Yes, most of them said they were very {{BLANK}} with the fresh salads and grilled fish, and several people even asked the chef for his recipes.",
    "cn": "A：飯店會議中心的賓客喜歡廚房人員昨天為醫學研討會準備的新午餐菜單嗎？ B：喜歡，大多數人說他們對新鮮沙拉和烤魚非常【滿意】，還有幾個人甚至向主廚要了食譜。"
  },
  {
    "word": "hungry",
    "pos": "adj.",
    "cn_def": "餓的",
    "en_def": "wanting or needing food",
    "sentence": "A: Should we order some sandwiches for the board meeting, or do you think it will finish before lunchtime today? B: Let's order them now, because the meeting may run until two o'clock, and people make poor decisions when they are tired and {{BLANK}} after a long morning.",
    "cn": "A：我們要為董事會會議訂一些三明治嗎？還是你覺得今天會議會在午餐前結束？ B：現在就訂吧，因為會議可能會開到兩點，而人在經過漫長的早上又累又【餓】的時候，會做出不好的決定。"
  },
  {
    "word": "starving",
    "pos": "adj.",
    "cn_def": "餓壞了的",
    "en_def": "very hungry",
    "sentence": "A: You look tired, so did you have time for breakfast before your early flight back from the client meeting in Seoul? B: No, the flight was delayed for three hours and the airport shops were closed, so I am absolutely {{BLANK}} and need to find a restaurant before I return to the office.",
    "cn": "A：你看起來很累，從首爾客戶會議搭早班機回來之前，你有時間吃早餐嗎？ B：沒有，班機延誤了三個小時，機場的商店又都關門了，所以我真的【餓壞了】，回辦公室前得先找間餐廳。"
  },
  {
    "word": "nutritious",
    "pos": "adj.",
    "cn_def": "有營養的",
    "en_def": "full of things your body needs to stay healthy",
    "sentence": "A: Why is the company cafeteria changing its menu next month, and will the prices for lunch go up as a result? B: The prices will stay the same, but the new supplier will offer more {{BLANK}} dishes, such as vegetable soups and brown rice, because employees asked for better options.",
    "cn": "A：公司餐廳下個月為什麼要更換菜單？午餐價格會因此上漲嗎？ B：價格會維持不變，但新的供應商會提供更多【有營養的】菜色，例如蔬菜湯和糙米飯，因為員工要求更好的選擇。"
  },
  {
    "word": "healthy",
    "pos": "adj.",
    "cn_def": "健康的",
    "en_def": "good for your body",
    "sentence": "A: Have you noticed that the vending machines on the third floor now sell fruit and yogurt instead of chips and candy? B: Yes, the human resources team replaced the snacks because they want to encourage {{BLANK}} eating habits, and so far most employees seem quite happy with the change.",
    "cn": "A：你有沒有注意到三樓的自動販賣機現在賣的是水果和優格，而不是洋芋片和糖果？ B：有，人資團隊換掉了那些零食，因為他們想鼓勵【健康的】飲食習慣，到目前為止大多數員工似乎都很滿意這個改變。"
  },
  {
    "word": "balanced",
    "pos": "adj.",
    "cn_def": "均衡的",
    "en_def": "having the right amounts of different kinds of food",
    "sentence": "A: What did the nutrition expert talk about at the employee wellness workshop that you attended last Wednesday afternoon? B: She explained that a {{BLANK}} diet with vegetables, protein, and whole grains helps office workers stay focused, and she gave us some simple lunch ideas that we can prepare at home.",
    "cn": "A：你上週三下午參加的員工健康工作坊上，營養專家講了什麼？ B：她解釋說，包含蔬菜、蛋白質和全穀物的【均衡】飲食能幫助上班族保持專注，她還給了我們一些可以在家準備的簡單午餐點子。"
  },
  {
    "word": "flavorful",
    "pos": "adj.",
    "cn_def": "味道濃郁的；美味的",
    "en_def": "having a lot of strong, pleasant taste",
    "sentence": "A: How did the customers respond to the new chicken curry that our restaurant added to the lunch menu last month? B: Many regular customers said it was the most {{BLANK}} dish on the menu because of the fresh herbs and spices, so we plan to offer it every day from now on.",
    "cn": "A：顧客對我們餐廳上個月新增到午餐菜單的雞肉咖哩反應如何？ B：很多常客說因為用了新鮮香草和香料，它是菜單上【味道最濃郁】的一道菜，所以我們打算從現在起每天供應。"
  },
  {
    "word": "savory",
    "pos": "adj.",
    "cn_def": "鹹的；鹹香的",
    "en_def": "salty or spicy rather than sweet",
    "sentence": "A: What kind of snacks should we prepare for the afternoon break at the client workshop, since many guests do not like sugar? B: Let's order some {{BLANK}} items like cheese crackers, mini sausage rolls, and vegetable chips, and we can also offer a small plate of fruit for anyone who prefers it.",
    "cn": "A：客戶工作坊下午休息時間我們該準備什麼點心？因為很多客人不喜歡甜食。 B：我們訂一些【鹹的】點心吧，像是起司餅乾、迷你香腸捲和蔬菜脆片，也可以為喜歡水果的人準備一小盤水果。"
  },
  {
    "word": "sweet",
    "pos": "adj.",
    "cn_def": "甜的",
    "en_def": "tasting like sugar",
    "sentence": "A: Why did the bakery near our office lose so many customers after it changed its recipes at the beginning of the year? B: People complained that the new cakes were far too {{BLANK}}, and many office workers who wanted a light treat with their afternoon coffee started buying from the shop across the street instead.",
    "cn": "A：我們辦公室附近那家麵包店年初改了食譜之後，為什麼流失了那麼多顧客？ B：大家抱怨新的蛋糕太【甜】了，很多想在下午喝咖啡時配點清爽點心的上班族就改去對街那家店買了。"
  },
  {
    "word": "spicy",
    "pos": "adj.",
    "cn_def": "辣的",
    "en_def": "having a strong, hot taste from spices",
    "sentence": "A: Do you think our visitors from London will enjoy the Sichuan restaurant that you booked for dinner tomorrow night? B: I called the restaurant this morning and asked the chef to make some dishes less {{BLANK}}, because our guests told me they cannot handle very hot food at all.",
    "cn": "A：你覺得我們來自倫敦的訪客會喜歡你為明晚晚餐訂的那家川菜餐廳嗎？ B：我今天早上打電話給餐廳，請主廚把一些菜做得沒那麼【辣】，因為我們的客人跟我說他們完全吃不了太辣的食物。"
  },
  {
    "word": "bland",
    "pos": "adj.",
    "cn_def": "清淡無味的",
    "en_def": "having very little taste",
    "sentence": "A: Why are so many patients leaving negative comments about the meals at the hospital where your sister works as a manager? B: They say the food is too {{BLANK}} because the kitchen uses very little salt or seasoning, so the hospital is now hiring a new chef to improve the menu.",
    "cn": "A：為什麼有那麼多病人對你姊姊擔任主管的那家醫院的餐點留下負評？ B：他們說食物太【淡而無味】，因為廚房幾乎不用鹽或調味料，所以醫院現在正在聘請新主廚來改善菜單。"
  },
  {
    "word": "delicious",
    "pos": "adj.",
    "cn_def": "美味的",
    "en_def": "tasting very good",
    "sentence": "A: How was the catering company that we hired for the retirement party of our finance director last Friday evening? B: Everyone said the food was absolutely {{BLANK}}, especially the roast beef and the lemon tart, so I think we should use the same company for the holiday party in December.",
    "cn": "A：上週五晚上我們為財務總監的退休派對請的外燴公司表現如何？ B：大家都說食物非常【美味】，尤其是烤牛肉和檸檬塔，所以我覺得十二月的節慶派對也該找同一家公司。"
  },
  {
    "word": "tasty",
    "pos": "adj.",
    "cn_def": "好吃的",
    "en_def": "having a good flavor",
    "sentence": "A: Is there anywhere near the convention center where we can buy a quick lunch between the morning and afternoon sessions? B: There is a small food truck in the parking lot that sells cheap but very {{BLANK}} noodles, and the line usually moves quickly, so we can get back before the next session.",
    "cn": "A：會展中心附近有沒有地方可以在上午和下午場次之間快速買個午餐？ B：停車場有一輛小餐車，賣便宜但非常【好吃】的麵，排隊通常很快，所以我們可以在下一場開始前回來。"
  },
  {
    "word": "digest",
    "pos": "v.",
    "cn_def": "消化",
    "en_def": "to break down food in the stomach so the body can use it",
    "sentence": "A: Why did the doctor suggest that you take a short walk after lunch instead of going straight back to your desk? B: She said a fifteen-minute walk helps the body {{BLANK}} food more easily, and it also gives me more energy for the long meetings that I usually have in the afternoon.",
    "cn": "A：醫生為什麼建議你午餐後去散個步，而不是直接回到座位上？ B：她說散步十五分鐘可以幫助身體更容易【消化】食物，也能讓我在下午通常要開的長時間會議中更有精神。"
  },
  {
    "word": "digestion",
    "pos": "n.",
    "cn_def": "消化",
    "en_def": "the process of breaking down food in the body",
    "sentence": "A: Why does the new health drink that our company is launching next month contain so much fiber and ginger? B: Our research team found that both ingredients support good {{BLANK}}, so we will market the drink to busy office workers who often eat heavy lunches very quickly.",
    "cn": "A：我們公司下個月要推出的新健康飲品為什麼含有那麼多纖維和薑？ B：我們的研究團隊發現這兩種成分都有助於良好的【消化】，所以我們會把這款飲品推銷給常常很快吃完油膩午餐的忙碌上班族。"
  },
  {
    "word": "portion",
    "pos": "n.",
    "cn_def": "一份（食物）",
    "en_def": "an amount of food for one person",
    "sentence": "A: Why are some customers complaining about our restaurant on the review website, even though they say the food tastes great? B: They think each {{BLANK}} is too small for the price, so the owner has decided to serve larger plates of pasta and add a free salad at lunchtime.",
    "cn": "A：為什麼有些顧客在評論網站上抱怨我們餐廳，即使他們說食物很好吃？ B：他們覺得以這個價格來說每【份】太少了，所以老闆決定提供更大盤的義大利麵，並在午餐時段加送免費沙拉。"
  },
  {
    "word": "leftovers",
    "pos": "n.",
    "cn_def": "剩菜；剩飯",
    "en_def": "food that is not eaten at the end of a meal",
    "sentence": "A: What should we do with all the extra sandwiches and salads from the staff training session that ended early this afternoon? B: Let's put the {{BLANK}} in the office refrigerator and send an email to everyone, so people working late tonight can have a free dinner instead of ordering takeout.",
    "cn": "A：今天下午提早結束的員工培訓課程剩下那麼多三明治和沙拉，我們該怎麼處理？ B：我們把【剩菜】放進辦公室冰箱，再寄電子郵件通知大家，這樣今晚加班的人就可以吃免費晚餐，不必叫外賣。"
  },
  {
    "word": "meal",
    "pos": "n.",
    "cn_def": "一餐；餐點",
    "en_def": "the food you eat at one time, such as breakfast, lunch, or dinner",
    "sentence": "A: Does the company pay for food when we travel overseas for the trade show in Frankfurt next month? B: Yes, you can claim up to fifty dollars for each {{BLANK}}, but remember to keep every receipt and submit them to the finance department within one week after you return.",
    "cn": "A：下個月我們出國參加法蘭克福商展時，公司會支付餐費嗎？ B：會，你每【餐】最多可以申報五十美元，但記得保留每張收據，並在回國後一週內交給財務部。"
  }
];

const MCQS = [
  {
    "q": "Employees are not allowed to _____ at the front desk. Please use the break room on the second floor during your lunch hour.",
    "options": [
      "eat",
      "digest",
      "savor",
      "consume"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The new office printers _____ much less electricity than the old ones. The company expects to save money on energy bills this year.",
    "options": [
      "chew",
      "digest",
      "consume",
      "swallow"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The interns had skipped lunch to finish the sales report. We watched them _____ three large pizzas in less than ten minutes.",
    "options": [
      "nibble",
      "devour",
      "savor",
      "digest"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "During the long budget meeting, the director only had time to _____ on a few crackers. She was very hungry when it finally ended.",
    "options": [
      "dine",
      "digest",
      "swallow",
      "nibble"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Please do not _____ gum during the job interview. It can make you look careless in front of the hiring manager.",
    "options": [
      "swallow",
      "savor",
      "chew",
      "digest"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Take one tablet with water every morning. If the pill is too large to _____, ask the pharmacist for a liquid version.",
    "options": [
      "swallow",
      "dine",
      "savor",
      "nibble"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The tasting menu has eight small courses. Guests are encouraged to eat slowly and _____ the unique flavor of each dish.",
    "options": [
      "gorge",
      "swallow",
      "digest",
      "savor"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Hotel guests can _____ in the rooftop restaurant every evening. Reservations are required for groups of more than six people.",
    "options": [
      "chew",
      "dine",
      "swallow",
      "digest"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Try not to _____ on cookies at the welcome reception. A full dinner will be served in the main hall at seven o'clock.",
    "options": [
      "gorge",
      "dine",
      "savor",
      "digest"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Many business travelers _____ at hotel buffets because the food is free. Nutritionists suggest using a small plate to control how much you take.",
    "options": [
      "digest",
      "chew",
      "overeat",
      "swallow"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "After the long overnight flight, the sales director had no _____ at all. He skipped dinner and went straight to bed at the hotel.",
    "options": [
      "portion",
      "appetite",
      "digestion",
      "leftovers"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The charity collects unsold food from local restaurants every night. Its goal is to reduce _____ among homeless people in the city center.",
    "options": [
      "appetite",
      "digestion",
      "leftovers",
      "hunger"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "No dessert for me, thank you. I am already _____ after that large steak and the big bowl of soup.",
    "options": [
      "hungry",
      "starving",
      "full",
      "bland"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The survey shows that most customers are _____ with the new lunch menu. Only a few people asked for more vegetarian choices.",
    "options": [
      "satisfied",
      "hungry",
      "spicy",
      "bland"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The workshop will run until two o'clock without a break. Please bring a snack in case you get _____ during the morning.",
    "options": [
      "full",
      "satisfied",
      "nutritious",
      "hungry"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "I skipped breakfast and lunch because of back-to-back meetings. I am absolutely _____, so let's find a restaurant right now.",
    "options": [
      "full",
      "starving",
      "bland",
      "balanced"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Our cafeteria now offers soups full of fresh vegetables and beans. These _____ meals give workers energy for the whole afternoon.",
    "options": [
      "nutritious",
      "bland",
      "starving",
      "hungry"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The company gym opened a juice bar last month. Staff can now buy fresh fruit drinks as a _____ alternative to soda.",
    "options": [
      "hungry",
      "starving",
      "healthy",
      "full"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "A _____ diet includes protein, vegetables, and whole grains. The nutrition expert will explain this at Friday's wellness seminar for all staff.",
    "options": [
      "starving",
      "balanced",
      "bland",
      "spicy"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The chef adds fresh herbs and garlic to every sauce. As a result, the dishes are rich and _____ without too much salt.",
    "options": [
      "bland",
      "hungry",
      "full",
      "flavorful"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Guests who do not like sweets can choose from the _____ snacks. These include cheese crackers, sausage rolls, and salted nuts.",
    "options": [
      "sweet",
      "hungry",
      "savory",
      "satisfied"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The bakery now uses much less sugar in its cakes. Customers had complained that the old recipes were far too _____.",
    "options": [
      "sweet",
      "hungry",
      "starving",
      "nutritious"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Some of our foreign visitors cannot eat very hot food. Please ask the kitchen to make the curry less _____ for tonight's dinner.",
    "options": [
      "hungry",
      "satisfied",
      "balanced",
      "spicy"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The hospital kitchen uses almost no salt or pepper. As a result, many patients say the food tastes _____ and boring.",
    "options": [
      "spicy",
      "bland",
      "hungry",
      "starving"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The caterer's roast beef was absolutely _____. Several guests asked for the company's phone number before they left the retirement party.",
    "options": [
      "delicious",
      "hungry",
      "starving",
      "full"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The doctor told the manager to walk for fifteen minutes after lunch. Light exercise helps the body _____ food more easily.",
    "options": [
      "savor",
      "nibble",
      "digest",
      "dine"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Ginger and fiber are added to the new health drink. Both ingredients are known to support good _____ after heavy meals.",
    "options": [
      "hunger",
      "digestion",
      "leftovers",
      "portion"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Customers complained that each _____ was too small for the price. The owner now serves larger plates of pasta at lunchtime.",
    "options": [
      "appetite",
      "hunger",
      "digestion",
      "portion"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Please put the _____ from the lunch meeting in the refrigerator. Staff working late tonight can eat them for dinner.",
    "options": [
      "appetite",
      "hunger",
      "leftovers",
      "digestion"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Employees on business trips can claim up to fifty dollars per _____. Please keep all receipts for the finance department.",
    "options": [
      "meal",
      "appetite",
      "hunger",
      "digestion"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "eat": {
    "pos": "v.",
    "en_def": "to put food in your mouth and swallow it",
    "cn_def": "吃"
  },
  "consume": {
    "pos": "v.",
    "en_def": "to eat or drink something; to use something up",
    "cn_def": "食用；消耗"
  },
  "devour": {
    "pos": "v.",
    "en_def": "to eat something very quickly because you are very hungry",
    "cn_def": "狼吞虎嚥；吞食"
  },
  "nibble": {
    "pos": "v.",
    "en_def": "to eat something in small bites, slowly",
    "cn_def": "小口地吃；啃"
  },
  "chew": {
    "pos": "v.",
    "en_def": "to bite food many times with your teeth before swallowing it",
    "cn_def": "咀嚼；嚼"
  },
  "swallow": {
    "pos": "v.",
    "en_def": "to make food or drink go down your throat",
    "cn_def": "吞下；嚥下"
  },
  "savor": {
    "pos": "v.",
    "en_def": "to eat or drink something slowly so you can enjoy it fully",
    "cn_def": "細細品嚐；品味"
  },
  "dine": {
    "pos": "v.",
    "en_def": "to eat dinner, especially a formal one",
    "cn_def": "用餐；進餐"
  },
  "gorge": {
    "pos": "v.",
    "en_def": "to eat far too much food",
    "cn_def": "大吃特吃；吃撐"
  },
  "overeat": {
    "pos": "v.",
    "en_def": "to eat more food than your body needs",
    "cn_def": "吃太多；暴食"
  },
  "undereat": {
    "pos": "v.",
    "en_def": "to eat less food than your body needs",
    "cn_def": "吃得不夠；進食不足"
  },
  "appetite": {
    "pos": "n.",
    "en_def": "the feeling that you want to eat",
    "cn_def": "食慾；胃口"
  },
  "hunger": {
    "pos": "n.",
    "en_def": "the feeling that you need food",
    "cn_def": "飢餓"
  },
  "full": {
    "pos": "adj.",
    "en_def": "having eaten so much that you do not want more",
    "cn_def": "飽的"
  },
  "satisfied": {
    "pos": "adj.",
    "en_def": "pleased because you got what you wanted or needed",
    "cn_def": "滿足的；滿意的"
  },
  "hungry": {
    "pos": "adj.",
    "en_def": "wanting or needing food",
    "cn_def": "餓的"
  },
  "starving": {
    "pos": "adj.",
    "en_def": "very hungry",
    "cn_def": "餓壞了的"
  },
  "nutritious": {
    "pos": "adj.",
    "en_def": "full of things your body needs to stay healthy",
    "cn_def": "有營養的"
  },
  "healthy": {
    "pos": "adj.",
    "en_def": "good for your body",
    "cn_def": "健康的"
  },
  "balanced": {
    "pos": "adj.",
    "en_def": "having the right amounts of different kinds of food",
    "cn_def": "均衡的"
  },
  "flavorful": {
    "pos": "adj.",
    "en_def": "having a lot of strong, pleasant taste",
    "cn_def": "味道濃郁的；美味的"
  },
  "savory": {
    "pos": "adj.",
    "en_def": "salty or spicy rather than sweet",
    "cn_def": "鹹的；鹹香的"
  },
  "sweet": {
    "pos": "adj.",
    "en_def": "tasting like sugar",
    "cn_def": "甜的"
  },
  "spicy": {
    "pos": "adj.",
    "en_def": "having a strong, hot taste from spices",
    "cn_def": "辣的"
  },
  "bland": {
    "pos": "adj.",
    "en_def": "having very little taste",
    "cn_def": "清淡無味的"
  },
  "delicious": {
    "pos": "adj.",
    "en_def": "tasting very good",
    "cn_def": "美味的"
  },
  "tasty": {
    "pos": "adj.",
    "en_def": "having a good flavor",
    "cn_def": "好吃的"
  },
  "digest": {
    "pos": "v.",
    "en_def": "to break down food in the stomach so the body can use it",
    "cn_def": "消化"
  },
  "digestion": {
    "pos": "n.",
    "en_def": "the process of breaking down food in the body",
    "cn_def": "消化"
  },
  "portion": {
    "pos": "n.",
    "en_def": "an amount of food for one person",
    "cn_def": "一份（食物）"
  },
  "leftovers": {
    "pos": "n.",
    "en_def": "food that is not eaten at the end of a meal",
    "cn_def": "剩菜；剩飯"
  },
  "meal": {
    "pos": "n.",
    "en_def": "the food you eat at one time, such as breakfast, lunch, or dinner",
    "cn_def": "一餐；餐點"
  }
};

const EXTRA_GLOSSES = {};
