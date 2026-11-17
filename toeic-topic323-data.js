// Topic 323 Quiz Data: Recycle 回收
// Source word list: https://www.examword.com/group-topic/recycle — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T323 - Recycle 回收",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "observe",
    "pos": "v.",
    "cn_def": "遵守（規定）；觀察",
    "en_def": "to follow a rule or law",
    "sentence": "A: Our building manager sent another email about the garbage room today, so what exactly are tenants complaining about this time? B: Several families still do not {{BLANK}} the new sorting rules, so plastic bottles and food scraps end up mixed together, and the collection company has threatened to charge us extra every month.",
    "cn": "A：我們大樓管理員今天又寄了一封關於垃圾間的電子郵件，這次住戶到底在抱怨什麼？ B：有好幾戶人家仍然沒有【遵守】新的分類規定，所以塑膠瓶和廚餘被混在一起，清運公司已經威脅每個月要向我們額外收費。"
  },
  {
    "word": "purpose",
    "pos": "n.",
    "cn_def": "目的；用途",
    "en_def": "the reason why something is done",
    "sentence": "A: Why did the company put three different colored bins next to every printer and in the break room on our floor last week? B: The main {{BLANK}} is to make sorting paper, cans, and plastic easier for staff, because management wants to cut our office garbage in half before the end of the year.",
    "cn": "A：為什麼公司上週在我們樓層的每台印表機旁邊和茶水間都放了三個不同顏色的垃圾桶？ B：主要的【目的】是讓員工更容易分類紙類、罐子和塑膠，因為管理階層希望在年底前把辦公室的垃圾量減少一半。"
  },
  {
    "word": "multifarious",
    "pos": "adj.",
    "cn_def": "多種多樣的；五花八門的",
    "en_def": "of many different kinds",
    "sentence": "A: Why does the recycling center near the train station need so many workers on every shift, even though it is not a very large building? B: People bring {{BLANK}} items there every day, from old phones and batteries to broken chairs and glass jars, so each object has to be checked and sorted by hand.",
    "cn": "A：火車站附近的回收中心明明不是很大的建築，為什麼每一班都需要這麼多工作人員？ B：人們每天都把【各式各樣的】物品帶到那裡，從舊手機、電池到壞掉的椅子和玻璃罐都有，所以每件東西都必須用人工檢查和分類。"
  },
  {
    "word": "reduce",
    "pos": "v.",
    "cn_def": "減少",
    "en_def": "to make something smaller or less",
    "sentence": "A: The finance director said our cleaning costs went up again this quarter, so do you have any ideas that could help the office save money? B: If we stop buying bottled water and give every employee a reusable cup, we could {{BLANK}} the amount of plastic we throw away and also lower the cost of garbage collection.",
    "cn": "A：財務長說我們這一季的清潔費用又上升了，你有沒有什麼點子能幫辦公室省錢？ B：如果我們不再購買瓶裝水，並發給每位員工一個可重複使用的杯子，我們就能【減少】丟掉的塑膠量，也能降低垃圾清運的費用。"
  },
  {
    "word": "waste",
    "pos": "n.",
    "cn_def": "廢棄物；垃圾",
    "en_def": "things that are thrown away because they are not needed",
    "sentence": "A: Why did the restaurant owner hire an outside company to collect the leftover food from the kitchen every night after closing time? B: The company turns the food {{BLANK}} into fertilizer for local farms, so the restaurant pays less to the city for garbage and also gets good publicity from customers who care about the environment.",
    "cn": "A：為什麼餐廳老闆要聘請外面的公司在每晚打烊後收走廚房的剩菜？ B：那家公司會把食物【廢棄物】變成給當地農場用的肥料，所以餐廳付給市政府的垃圾費比較少，也能從關心環境的顧客那裡獲得好口碑。"
  },
  {
    "word": "landfill",
    "pos": "n.",
    "cn_def": "垃圾掩埋場",
    "en_def": "a place where garbage is buried under the ground",
    "sentence": "A: Why is the city council suddenly asking every household to separate paper and plastic more carefully starting next month? B: The only {{BLANK}} outside town will be completely full in about three years, and building a new one would cost millions of dollars, so officials want people to throw away much less garbage.",
    "cn": "A：為什麼市議會突然要求每個家庭從下個月開始更仔細地分類紙類和塑膠？ B：鎮外唯一的【垃圾掩埋場】大約三年內就會完全填滿，而蓋一座新的要花好幾百萬美元，所以官員希望大家丟的垃圾少很多。"
  },
  {
    "word": "dispose",
    "pos": "v.",
    "cn_def": "處理掉；丟棄",
    "en_def": "to get rid of something (dispose of)",
    "sentence": "A: Our team is moving to the new office next week, so what should we do with the old computers and printers that nobody uses anymore? B: Please do not put them in the regular garbage, because the IT department has hired a licensed company to {{BLANK}} of electronic equipment safely and recycle the metal parts.",
    "cn": "A：我們團隊下週要搬到新辦公室，那些沒有人再用的舊電腦和印表機該怎麼辦？ B：請不要把它們丟進一般垃圾，因為資訊部門已經聘請一家合格的公司來安全地【處理】電子設備並回收金屬零件。"
  },
  {
    "word": "domestic",
    "pos": "adj.",
    "cn_def": "家庭的；家用的",
    "en_def": "relating to the home or family",
    "sentence": "A: Why does the new apartment complex have a large sorting room in the basement instead of just a few garbage cans by the entrance? B: The developer wanted to handle all {{BLANK}} garbage in one place, so residents can bring their bottles, boxes, and food scraps downstairs any time and sort them correctly.",
    "cn": "A：為什麼新的公寓社區在地下室有一間大型分類室，而不是在入口處放幾個垃圾桶就好？ B：建商希望把所有的【家庭】垃圾集中在一個地方處理，所以住戶可以隨時把瓶子、紙箱和廚餘拿到樓下並正確分類。"
  },
  {
    "word": "appropriately",
    "pos": "adv.",
    "cn_def": "適當地；恰當地",
    "en_def": "in a way that is correct or suitable",
    "sentence": "A: The new cleaning staff seem confused about which bins to empty first, so should we print some simple instructions for them? B: Yes, and if every bin is labeled {{BLANK}} with clear pictures and words in two languages, both the cleaners and the visitors will know exactly where each item should go.",
    "cn": "A：新的清潔人員似乎搞不清楚要先清哪些垃圾桶，我們是否應該印一些簡單的說明給他們？ B：是的，如果每個垃圾桶都用清楚的圖片和兩種語言的文字【適當地】標示，清潔人員和訪客都會清楚知道每樣物品該丟到哪裡。"
  },
  {
    "word": "trash",
    "pos": "n.",
    "cn_def": "垃圾",
    "en_def": "things that you throw away",
    "sentence": "A: Why did the hotel manager ask the housekeeping team to check every guest room twice before the new guests arrive this afternoon? B: Last week a guest complained online after finding old {{BLANK}} under the bed, such as paper cups and snack wrappers, so the manager wants to make sure every room is completely clean before check-in.",
    "cn": "A：為什麼飯店經理要求房務團隊在今天下午新客人抵達前把每間客房檢查兩遍？ B：上週有位客人在床底下發現舊【垃圾】，像是紙杯和零食包裝，之後就在網路上抱怨，所以經理想確保每間房在入住前都完全乾淨。"
  },
  {
    "word": "aluminum",
    "pos": "n.",
    "cn_def": "鋁",
    "en_def": "a light, silver-colored metal",
    "sentence": "A: Why does the vending machine company give the school a small payment every month for the empty soda cans collected in the cafeteria? B: Old {{BLANK}} cans can be melted down and made into new ones very quickly, so the company actually saves money by buying them back instead of producing new metal.",
    "cn": "A：為什麼販賣機公司每個月都為了學生餐廳收集到的空汽水罐付給學校一小筆錢？ B：舊的【鋁】罐可以很快地熔化並製成新罐，所以公司把它們買回來，比生產新金屬還要省錢。"
  },
  {
    "word": "pouch",
    "pos": "n.",
    "cn_def": "小袋子；袋裝包裝",
    "en_def": "a small soft bag or package",
    "sentence": "A: Why did customers start complaining about the new coffee packaging that the marketing team launched last month? B: The coffee now comes in a plastic {{BLANK}} with a metal layer inside, and many people are angry because the recycling center will not accept it, so it must go in the regular garbage.",
    "cn": "A：為什麼行銷團隊上個月推出的新咖啡包裝開始招來顧客抱怨？ B：咖啡現在裝在內層有金屬的塑膠【袋】裡，很多人很生氣，因為回收中心不收這種包裝，所以只能丟進一般垃圾。"
  },
  {
    "word": "decommission",
    "pos": "v.",
    "cn_def": "停用；除役",
    "en_def": "to officially stop using a machine, ship, or building",
    "sentence": "A: What will happen to the old power plant near the river after the new solar farm starts producing electricity next spring? B: The government plans to {{BLANK}} it by the end of the year, and engineers will remove the steel and copper so that most of the materials can be recycled.",
    "cn": "A：等明年春天新的太陽能發電廠開始發電後，河邊那座舊發電廠會怎麼樣？ B：政府計畫在年底前讓它【除役】，工程師會拆下鋼材和銅，讓大部分的材料都能回收再利用。"
  },
  {
    "word": "aesthetically",
    "pos": "adv.",
    "cn_def": "美觀地；在美感上",
    "en_def": "in a way that relates to beauty or appearance",
    "sentence": "A: Why did the design team spend so much time choosing the new recycling bins for the hotel lobby when cheap plastic ones were available? B: The manager wanted bins that are {{BLANK}} pleasing and match the wooden furniture, because guests are more likely to use them if they look good instead of ugly.",
    "cn": "A：明明有便宜的塑膠回收桶可以用，為什麼設計團隊要花那麼多時間挑選飯店大廳的新回收桶？ B：經理想要【在外觀上】令人賞心悅目且能搭配木製家具的回收桶，因為如果它們好看而不醜，客人比較可能會使用。"
  },
  {
    "word": "conscious",
    "pos": "adj.",
    "cn_def": "有…意識的；注重…的",
    "en_def": "aware of something and caring about it",
    "sentence": "A: Why has our café started selling so many more drinks since we changed to paper straws and gave a discount for bringing your own cup? B: Young customers today are very environmentally {{BLANK}}, so they prefer to buy from shops that try to cut plastic and show that they care about the planet.",
    "cn": "A：自從我們改用紙吸管並給自備杯子的人折扣後，為什麼咖啡店的飲料銷量增加這麼多？ B：現在的年輕顧客非常有環保【意識】，所以他們偏好向努力減少塑膠並表現出關心地球的店家購買。"
  },
  {
    "word": "spotless",
    "pos": "adj.",
    "cn_def": "一塵不染的；非常乾淨的",
    "en_def": "completely clean",
    "sentence": "A: The health inspector is coming to check our restaurant kitchen tomorrow morning, so what should the staff do before they go home tonight? B: Everyone must empty the garbage and recycling bins, wash the floors, and wipe every counter until the whole kitchen is {{BLANK}}, because we cannot afford another warning this year.",
    "cn": "A：衛生稽查員明天早上要來檢查我們餐廳的廚房，員工今晚回家前應該做些什麼？ B：每個人都必須清空垃圾桶和回收桶、洗地板，並擦拭每個檯面，直到整個廚房【一塵不染】，因為我們今年承受不起再被警告一次。"
  },
  {
    "word": "belongings",
    "pos": "n.",
    "cn_def": "個人物品；財物",
    "en_def": "the things that a person owns",
    "sentence": "A: Why are so many students leaving old clothes, books, and lamps in the dormitory hallway at the end of the semester? B: They are moving out this weekend and cannot carry all their {{BLANK}} home, so the university set up a donation corner where unwanted items can be collected and reused by new students.",
    "cn": "A：為什麼學期末有這麼多學生把舊衣服、書和檯燈留在宿舍走廊？ B：他們這個週末要搬出去，沒辦法把所有的【個人物品】帶回家，所以大學設立了一個捐贈角落，讓不要的物品可以被收集起來給新生再利用。"
  },
  {
    "word": "blatantly",
    "pos": "adv.",
    "cn_def": "公然地；明目張膽地",
    "en_def": "in a very obvious way, without trying to hide something bad",
    "sentence": "A: Why did the building manager put up security cameras near the recycling area behind the parking lot last week? B: Some people were {{BLANK}} dumping old sofas and broken TVs there in the middle of the day, even though a large sign clearly says that large items need to be booked for special collection.",
    "cn": "A：為什麼大樓管理員上週在停車場後面的回收區附近裝了監視器？ B：有些人大白天就【明目張膽地】把舊沙發和壞掉的電視丟在那裡，即使有一個大告示牌清楚寫著大型物品需要預約特別清運。"
  },
  {
    "word": "opt",
    "pos": "v.",
    "cn_def": "選擇",
    "en_def": "to choose (opt for / opt to)",
    "sentence": "A: Did the marketing department decide whether to print the product catalogs this year or simply post them on the company website? B: After a long discussion, they decided to {{BLANK}} for a digital version, because printing thousands of paper copies is expensive and most of them end up in the recycling bin anyway.",
    "cn": "A：行銷部門決定今年要印製產品型錄，還是直接放在公司網站上了嗎？ B：經過很長的討論後，他們決定【選擇】數位版本，因為印好幾千份紙本很貴，而且大部分最後還是被丟進回收桶。"
  },
  {
    "word": "integrate",
    "pos": "v.",
    "cn_def": "整合；融入",
    "en_def": "to combine things so they work together",
    "sentence": "A: How will the new software help the city track how much paper and plastic each neighborhood collects every week? B: It will {{BLANK}} data from the garbage trucks' scales with the map system, so managers can quickly see which areas need more education and which ones are doing a great job.",
    "cn": "A：新軟體要如何幫助市政府追蹤每個社區每週收集多少紙類和塑膠？ B：它會把垃圾車磅秤的數據和地圖系統【整合】在一起，讓主管能迅速看出哪些地區需要更多宣導，哪些地區做得很好。"
  },
  {
    "word": "lack",
    "pos": "n.",
    "cn_def": "缺乏；不足",
    "en_def": "the state of not having enough of something",
    "sentence": "A: Why do you think so few employees put their used paper in the blue boxes even after the manager sent several reminders? B: I think the real problem is a {{BLANK}} of convenient bins, because there is only one box on each floor, and most people are too busy to walk all the way to the kitchen.",
    "cn": "A：你認為為什麼即使經理寄了好幾次提醒，還是很少員工把用過的紙放進藍色箱子？ B：我認為真正的問題是【缺乏】方便的回收箱，因為每層樓只有一個箱子，而大部分的人都太忙，不想一路走到茶水間。"
  },
  {
    "word": "self-discipline",
    "pos": "n.",
    "cn_def": "自律",
    "en_def": "the ability to control yourself and do what you should do",
    "sentence": "A: My roommate always says she will start sorting our garbage properly, but she never actually does it, so how can I help her change? B: Building good habits takes a lot of {{BLANK}} at first, so maybe you could put a simple chart on the fridge and check your progress together every evening.",
    "cn": "A：我室友總是說她要開始好好分類我們的垃圾，但她從來沒有真的做到，我要怎麼幫她改變？ B：一開始培養好習慣需要很多【自律】，所以也許你們可以在冰箱上貼一張簡單的表格，每天晚上一起檢查進度。"
  },
  {
    "word": "habit",
    "pos": "n.",
    "cn_def": "習慣",
    "en_def": "something you do often and regularly",
    "sentence": "A: How did your department manage to cut its paper use by almost forty percent in just six months? B: We made printing on both sides the default setting on every machine, and after a few weeks it became a normal {{BLANK}} for everyone, so nobody even thinks about it anymore.",
    "cn": "A：你們部門是怎麼在短短六個月內把用紙量減少將近百分之四十的？ B：我們把每台機器的預設值設為雙面列印，幾週後這就成了大家正常的【習慣】，所以現在根本沒有人會特別去想這件事。"
  },
  {
    "word": "regulation",
    "pos": "n.",
    "cn_def": "規定；法規",
    "en_def": "an official rule made by a government or organization",
    "sentence": "A: Why did our factory have to buy new containers for used oil and chemicals this year when the old ones still work fine? B: A new government {{BLANK}} requires all factories to store dangerous liquids in sealed, labeled containers, and companies that do not follow it may have to pay a large penalty.",
    "cn": "A：為什麼我們工廠今年得為廢油和化學品買新的容器，舊的明明還很好用？ B：一項新的政府【法規】要求所有工廠把危險液體存放在密封且有標示的容器中，沒有遵守的公司可能必須繳一大筆罰款。"
  },
  {
    "word": "beloved",
    "pos": "adj.",
    "cn_def": "心愛的；深受喜愛的",
    "en_def": "loved very much",
    "sentence": "A: Why was everyone in the neighborhood so upset when they heard the old park along the river might become a parking lot? B: It is a {{BLANK}} place where families have picnics every weekend, and the local volunteers have kept it clean for twenty years by picking up bottles and organizing recycling events.",
    "cn": "A：為什麼鄰居們聽說河邊那座老公園可能要變成停車場時，大家都那麼難過？ B：那是一個【深受喜愛的】地方，每個週末都有家庭在那裡野餐，當地志工二十年來一直撿拾瓶罐並舉辦回收活動來維持它的整潔。"
  },
  {
    "word": "abide",
    "pos": "v.",
    "cn_def": "遵守",
    "en_def": "to accept and follow a rule (abide by)",
    "sentence": "A: The new tenants on the fifth floor keep leaving cardboard boxes in the hallway, so what should the building committee do about it? B: We should remind them politely that all residents must {{BLANK}} by the building's recycling rules, and if they still ignore them, the manager can give a formal written warning.",
    "cn": "A：五樓的新房客一直把紙箱留在走廊上，大樓管委會應該怎麼處理？ B：我們應該客氣地提醒他們，所有住戶都必須【遵守】大樓的回收規定，如果他們還是不理會，管理員可以給予正式的書面警告。"
  },
  {
    "word": "penalize",
    "pos": "v.",
    "cn_def": "處罰；懲罰",
    "en_def": "to punish someone for breaking a rule",
    "sentence": "A: Is it true that the city will start checking garbage bags to see whether people have separated their bottles and paper correctly? B: Yes, starting in March, inspectors will {{BLANK}} households that mix recyclable items with regular garbage, and repeated offenders could pay up to three hundred dollars.",
    "cn": "A：市政府真的要開始檢查垃圾袋，看看大家是否有正確分開瓶罐和紙類嗎？ B：是的，從三月開始，稽查員會【處罰】把可回收物和一般垃圾混在一起的家庭，屢犯者可能要付高達三百美元。"
  },
  {
    "word": "fine",
    "pos": "n.",
    "cn_def": "罰款",
    "en_def": "money you must pay as a punishment",
    "sentence": "A: Why does the convenience store manager check the garbage bags so carefully before putting them outside at night? B: Last month the store had to pay a big {{BLANK}} because a worker put plastic bottles in the regular garbage, and the owner does not want that mistake to happen again.",
    "cn": "A：為什麼便利商店店長晚上把垃圾袋拿到外面前要檢查得那麼仔細？ B：上個月店裡被開了一大筆【罰款】，因為有位員工把塑膠瓶丟進一般垃圾，老闆不希望這種錯誤再發生。"
  },
  {
    "word": "advocate",
    "pos": "v.",
    "cn_def": "提倡；擁護",
    "en_def": "to publicly support an idea",
    "sentence": "A: Why did the city invite the owner of that small zero-waste grocery store to speak at the business conference next month? B: She has been working hard to {{BLANK}} reusable packaging for years, and many local shop owners want to learn how she lowered costs while also attracting younger customers.",
    "cn": "A：為什麼市政府邀請那家小型零浪費雜貨店的老闆在下個月的商業研討會上演講？ B：她多年來一直努力【提倡】可重複使用的包裝，很多當地店家老闆都想學習她如何在吸引年輕顧客的同時降低成本。"
  },
  {
    "word": "obligation",
    "pos": "n.",
    "cn_def": "義務；責任",
    "en_def": "something you must do because of a law or duty",
    "sentence": "A: Why does our company publish a report every year that shows how much garbage our factories produce and how much water and electricity they use? B: Large companies have a legal {{BLANK}} to share this information with the government and the public, and it also helps investors see that we are serious about protecting the environment.",
    "cn": "A：為什麼我們公司每年都要發布一份報告，說明我們工廠產生多少垃圾、使用多少水電？ B：大公司有法律上的【義務】要向政府和大眾公開這些資訊，這也能讓投資人看到我們是認真在保護環境。"
  },
  {
    "word": "walk away",
    "pos": "v.phr.",
    "cn_def": "一走了之；走開",
    "en_def": "to leave a place or situation without dealing with it",
    "sentence": "A: What made you so angry during the company picnic at the beach last Saturday afternoon? B: Some people from another group finished their lunch and just decided to {{BLANK}} from the table, leaving plastic plates, cups, and food everywhere, so our team had to clean up everything before we could go home.",
    "cn": "A：上週六下午公司在海邊野餐時，是什麼事讓你這麼生氣？ B：另一群人吃完午餐後就決定直接從桌邊【一走了之】，留下滿地的塑膠盤、杯子和食物，所以我們團隊得先把所有東西清乾淨才能回家。"
  },
  {
    "word": "litter",
    "pos": "n.",
    "cn_def": "（公共場所的）垃圾",
    "en_def": "small pieces of garbage left on the ground in public places",
    "sentence": "A: Why did the shopping mall decide to hire two extra cleaners for the outdoor parking area this summer? B: After the weekend night market started, customers left so much {{BLANK}} on the ground, such as paper bags and drink cups, that the area looked terrible on Monday mornings.",
    "cn": "A：為什麼購物中心決定今年夏天為戶外停車場多聘兩位清潔人員？ B：週末夜市開始後，顧客在地上留下了好多【垃圾】，像是紙袋和飲料杯，讓那個區域在週一早上看起來糟透了。"
  },
  {
    "word": "cleanup",
    "pos": "n.",
    "cn_def": "清理；清潔活動",
    "en_def": "the process of cleaning a place",
    "sentence": "A: Is our department really going to the beach on Saturday instead of having the usual team dinner at a restaurant this month? B: Yes, the company is organizing a {{BLANK}} event with a local environmental group, and after we collect bottles and plastic from the sand, there will be a barbecue for all the volunteers.",
    "cn": "A：我們部門這個月真的要在週六去海邊，而不是像平常一樣在餐廳辦團隊聚餐嗎？ B：是的，公司和當地一個環保團體合辦一場【清潔】活動，我們把沙灘上的瓶子和塑膠撿完之後，會為所有志工舉辦烤肉。"
  },
  {
    "word": "implementation",
    "pos": "n.",
    "cn_def": "實施；執行",
    "en_def": "the process of putting a plan into action",
    "sentence": "A: The board approved the new recycling plan for all our stores last month, so when will customers actually start to see changes? B: The {{BLANK}} will begin in the downtown branches in January, and if everything goes smoothly, the other forty stores will follow over the next six months.",
    "cn": "A：董事會上個月通過了所有門市的新回收計畫，顧客什麼時候才會真正開始看到改變？ B：一月會先從市中心的分店開始【實施】，如果一切順利，其他四十家門市會在接下來六個月陸續跟進。"
  },
  {
    "word": "law-abiding",
    "pos": "adj.",
    "cn_def": "守法的",
    "en_def": "obeying the law",
    "sentence": "A: Why are so many residents angry about the new garbage inspection program that the city started last week? B: Most of them are {{BLANK}} citizens who always sort their trash carefully, so they feel insulted when inspectors open their bags as if they had done something wrong.",
    "cn": "A：為什麼這麼多居民對市政府上週開始的新垃圾稽查計畫感到憤怒？ B：他們大多數是一向仔細分類垃圾的【守法】公民，所以當稽查員打開他們的垃圾袋，好像他們做錯了什麼事時，他們覺得受到侮辱。"
  },
  {
    "word": "conserve",
    "pos": "v.",
    "cn_def": "節約；保護",
    "en_def": "to protect something or use it carefully so it is not wasted",
    "sentence": "A: Why did the hotel put small cards in every bathroom asking guests to hang up their towels if they want to use them again? B: The hotel is trying to {{BLANK}} water and energy, because washing hundreds of towels every day uses a lot of both and also adds to the monthly operating costs.",
    "cn": "A：為什麼飯店在每間浴室放小卡片，請想重複使用毛巾的客人把毛巾掛起來？ B：飯店正努力【節約】水和能源，因為每天洗幾百條毛巾會用掉大量的水電，也會增加每月的營運成本。"
  },
  {
    "word": "fruition",
    "pos": "n.",
    "cn_def": "實現；成果",
    "en_def": "the point when a plan or project succeeds",
    "sentence": "A: Is it true that the community composting project your team proposed two years ago is finally opening next week? B: Yes, after many meetings with the city and local farmers, the plan has finally come to {{BLANK}}, and we expect it to turn about two tons of food scraps into soil every month.",
    "cn": "A：你們團隊兩年前提出的社區堆肥計畫真的終於要在下週啟用了嗎？ B：是的，在和市政府及當地農民開過許多會議後，這個計畫終於【實現】了，我們預計它每個月能把大約兩噸廚餘變成土壤。"
  }
];

const MCQS = [
  {
    "q": "All staff must _____ the new sorting rules in the break room. Cans and bottles go in the blue bin only.",
    "options": [
      "reduce",
      "dispose",
      "penalize",
      "observe"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The main _____ of the meeting is to explain the new recycling plan. Every manager is expected to attend on Friday.",
    "options": [
      "purpose",
      "habit",
      "landfill",
      "fine"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The company hopes to _____ paper use by thirty percent this year. Employees are asked to print only when necessary.",
    "options": [
      "observe",
      "reduce",
      "abide",
      "penalize"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The factory produces large amounts of chemical _____ every month. A licensed company collects it and treats it safely.",
    "options": [
      "waste",
      "purpose",
      "habit",
      "obligation"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Most of the city's garbage is buried at a _____ outside town. Officials say the site will be full within five years.",
    "options": [
      "litter",
      "habit",
      "landfill",
      "cleanup"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Please _____ of old batteries in the special box near reception. They must never be thrown into the regular bins.",
    "options": [
      "abide",
      "opt",
      "conserve",
      "dispose"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The new law covers both industrial and _____ waste. Families will need to separate food scraps from plastic starting in May.",
    "options": [
      "spotless",
      "domestic",
      "beloved",
      "conscious"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Visitors are reminded to dress _____ for the factory tour. Closed shoes and long pants are required in the recycling area.",
    "options": [
      "blatantly",
      "aesthetically",
      "appropriately",
      "rarely"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Please take out the _____ before you leave the office tonight. The cleaners will not come in until Monday morning.",
    "options": [
      "fruition",
      "obligation",
      "purpose",
      "trash"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Empty _____ cans should be rinsed before you put them in the recycling bin. The metal is melted down and used again.",
    "options": [
      "aluminum",
      "landfill",
      "habit",
      "lack"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Our customers are very environmentally _____, so we switched to paper bags. Sales have increased since the change last spring.",
    "options": [
      "spotless",
      "conscious",
      "domestic",
      "law-abiding"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The hotel lobby must be _____ before the guests arrive at noon. The manager will check every corner herself.",
    "options": [
      "conscious",
      "beloved",
      "domestic",
      "spotless"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Please take all your personal _____ with you when you leave the train. Items left behind will be sent to the lost-and-found office.",
    "options": [
      "belongings",
      "regulations",
      "habits",
      "fines"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Many shoppers now _____ for reusable bags instead of plastic ones. The store gives a small discount for each bag.",
    "options": [
      "observe",
      "reduce",
      "integrate",
      "opt"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The new app will _____ recycling data with the city's map system. Managers can then see results for each neighborhood.",
    "options": [
      "penalize",
      "integrate",
      "dispose",
      "observe"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The project failed because of a _____ of funding. The city could not afford to buy enough recycling trucks.",
    "options": [
      "habit",
      "fine",
      "lack",
      "purpose"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Bringing your own cup to work is a good _____ to form. It saves money and reduces plastic waste.",
    "options": [
      "lack",
      "landfill",
      "fruition",
      "habit"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Under the new _____, restaurants must separate food scraps from other garbage. Inspectors will begin checking kitchens next month.",
    "options": [
      "landfill",
      "regulation",
      "fruition",
      "litter"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The _____ city park will be cleaned by volunteers this Saturday. Many families have enjoyed it for over fifty years.",
    "options": [
      "beloved",
      "law-abiding",
      "conscious",
      "domestic"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "All tenants must _____ by the building's recycling rules. Those who do not may receive a written warning.",
    "options": [
      "opt",
      "observe",
      "abide",
      "integrate"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The city will _____ shops that put plastic in the regular garbage. Each violation could cost the owner two hundred dollars.",
    "options": [
      "advocate",
      "penalize",
      "conserve",
      "opt"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The restaurant had to pay a heavy _____ for dumping cooking oil into the river. The owner promised it would never happen again.",
    "options": [
      "habit",
      "lack",
      "fine",
      "cleanup"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The environmental group continues to _____ stricter recycling laws. Its members spoke at the city council meeting last week.",
    "options": [
      "dispose",
      "abide",
      "opt",
      "advocate"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Companies have a legal _____ to report how much waste they produce. The information is published online every year.",
    "options": [
      "obligation",
      "habit",
      "purpose",
      "cleanup"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Visitors who drop _____ in the park may be fined. Bins are placed along every path for paper cups and wrappers.",
    "options": [
      "fruition",
      "obligation",
      "litter",
      "habit"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Over two hundred volunteers joined the beach _____ on Sunday morning. They collected more than five hundred kilograms of plastic.",
    "options": [
      "cleanup",
      "lack",
      "purpose",
      "regulation"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The _____ of the new recycling program will begin in January. All branches should be ready by the end of March.",
    "options": [
      "obligation",
      "fruition",
      "implementation",
      "habit"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "Most residents are _____ citizens who sort their garbage correctly. Only a few people still ignore the rules.",
    "options": [
      "spotless",
      "domestic",
      "multifarious",
      "law-abiding"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "Please turn off the lights when you leave to _____ energy. The company wants to lower its electricity bill this year.",
    "options": [
      "penalize",
      "conserve",
      "abide",
      "dispose"
    ],
    "answer": 1,
    "vocabIndex": 35
  },
  {
    "q": "After three years of planning, the composting project finally came to _____. It now turns food scraps into soil for local farms.",
    "options": [
      "fruition",
      "lack",
      "litter",
      "obligation"
    ],
    "answer": 0,
    "vocabIndex": 36
  }
];

const LOOKUP = {
  "observe": {
    "pos": "v.",
    "en_def": "to follow a rule or law",
    "cn_def": "遵守（規定）；觀察"
  },
  "purpose": {
    "pos": "n.",
    "en_def": "the reason why something is done",
    "cn_def": "目的；用途"
  },
  "multifarious": {
    "pos": "adj.",
    "en_def": "of many different kinds",
    "cn_def": "多種多樣的；五花八門的"
  },
  "reduce": {
    "pos": "v.",
    "en_def": "to make something smaller or less",
    "cn_def": "減少"
  },
  "waste": {
    "pos": "n.",
    "en_def": "things that are thrown away because they are not needed",
    "cn_def": "廢棄物；垃圾"
  },
  "landfill": {
    "pos": "n.",
    "en_def": "a place where garbage is buried under the ground",
    "cn_def": "垃圾掩埋場"
  },
  "dispose": {
    "pos": "v.",
    "en_def": "to get rid of something (dispose of)",
    "cn_def": "處理掉；丟棄"
  },
  "domestic": {
    "pos": "adj.",
    "en_def": "relating to the home or family",
    "cn_def": "家庭的；家用的"
  },
  "appropriately": {
    "pos": "adv.",
    "en_def": "in a way that is correct or suitable",
    "cn_def": "適當地；恰當地"
  },
  "trash": {
    "pos": "n.",
    "en_def": "things that you throw away",
    "cn_def": "垃圾"
  },
  "aluminum": {
    "pos": "n.",
    "en_def": "a light, silver-colored metal",
    "cn_def": "鋁"
  },
  "pouch": {
    "pos": "n.",
    "en_def": "a small soft bag or package",
    "cn_def": "小袋子；袋裝包裝"
  },
  "decommission": {
    "pos": "v.",
    "en_def": "to officially stop using a machine, ship, or building",
    "cn_def": "停用；除役"
  },
  "aesthetically": {
    "pos": "adv.",
    "en_def": "in a way that relates to beauty or appearance",
    "cn_def": "美觀地；在美感上"
  },
  "conscious": {
    "pos": "adj.",
    "en_def": "aware of something and caring about it",
    "cn_def": "有…意識的；注重…的"
  },
  "spotless": {
    "pos": "adj.",
    "en_def": "completely clean",
    "cn_def": "一塵不染的；非常乾淨的"
  },
  "belongings": {
    "pos": "n.",
    "en_def": "the things that a person owns",
    "cn_def": "個人物品；財物"
  },
  "blatantly": {
    "pos": "adv.",
    "en_def": "in a very obvious way, without trying to hide something bad",
    "cn_def": "公然地；明目張膽地"
  },
  "opt": {
    "pos": "v.",
    "en_def": "to choose (opt for / opt to)",
    "cn_def": "選擇"
  },
  "integrate": {
    "pos": "v.",
    "en_def": "to combine things so they work together",
    "cn_def": "整合；融入"
  },
  "lack": {
    "pos": "n.",
    "en_def": "the state of not having enough of something",
    "cn_def": "缺乏；不足"
  },
  "self-discipline": {
    "pos": "n.",
    "en_def": "the ability to control yourself and do what you should do",
    "cn_def": "自律"
  },
  "habit": {
    "pos": "n.",
    "en_def": "something you do often and regularly",
    "cn_def": "習慣"
  },
  "regulation": {
    "pos": "n.",
    "en_def": "an official rule made by a government or organization",
    "cn_def": "規定；法規"
  },
  "beloved": {
    "pos": "adj.",
    "en_def": "loved very much",
    "cn_def": "心愛的；深受喜愛的"
  },
  "abide": {
    "pos": "v.",
    "en_def": "to accept and follow a rule (abide by)",
    "cn_def": "遵守"
  },
  "penalize": {
    "pos": "v.",
    "en_def": "to punish someone for breaking a rule",
    "cn_def": "處罰；懲罰"
  },
  "fine": {
    "pos": "n.",
    "en_def": "money you must pay as a punishment",
    "cn_def": "罰款"
  },
  "advocate": {
    "pos": "v.",
    "en_def": "to publicly support an idea",
    "cn_def": "提倡；擁護"
  },
  "obligation": {
    "pos": "n.",
    "en_def": "something you must do because of a law or duty",
    "cn_def": "義務；責任"
  },
  "walk away": {
    "pos": "v.phr.",
    "en_def": "to leave a place or situation without dealing with it",
    "cn_def": "一走了之；走開"
  },
  "litter": {
    "pos": "n.",
    "en_def": "small pieces of garbage left on the ground in public places",
    "cn_def": "（公共場所的）垃圾"
  },
  "cleanup": {
    "pos": "n.",
    "en_def": "the process of cleaning a place",
    "cn_def": "清理；清潔活動"
  },
  "implementation": {
    "pos": "n.",
    "en_def": "the process of putting a plan into action",
    "cn_def": "實施；執行"
  },
  "law-abiding": {
    "pos": "adj.",
    "en_def": "obeying the law",
    "cn_def": "守法的"
  },
  "conserve": {
    "pos": "v.",
    "en_def": "to protect something or use it carefully so it is not wasted",
    "cn_def": "節約；保護"
  },
  "fruition": {
    "pos": "n.",
    "en_def": "the point when a plan or project succeeds",
    "cn_def": "實現；成果"
  }
};

const EXTRA_GLOSSES = {};
