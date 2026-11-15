// Topic 142 Quiz Data: Fishing 釣魚
// Source word list: https://www.examword.com/group-topic/fishing — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T142 - Fishing 釣魚",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "fish",
    "pos": "v.",
    "cn_def": "釣魚；捕魚",
    "en_def": "to try to catch fish",
    "sentence": "A: What are you and the other managers planning to do during the company retreat at the lake resort next weekend? B: Most of us want to rent a small boat early on Saturday morning and {{BLANK}} for trout for a few hours, and then we will cook lunch together near the water.",
    "cn": "A：你和其他經理們打算在下週末湖邊度假村的公司旅遊期間做什麼？ B：我們大多數人想在星期六一大早租一艘小船，【釣】幾個小時的鱒魚，然後一起在水邊煮午餐。"
  },
  {
    "word": "angler",
    "pos": "n.",
    "cn_def": "釣客；垂釣者",
    "en_def": "a person who catches fish with a rod as a hobby",
    "sentence": "A: Why is the small hotel near the river always fully booked in early spring, even though it is not a famous tourist area? B: Every March, almost every serious {{BLANK}} in the region comes to try the clear water there, so the owner has to take reservations several months in advance.",
    "cn": "A：為什麼河邊那家小旅館每年早春總是客滿，即使那裡並不是有名的觀光區？ B：每年三月，這個地區幾乎每位認真的【釣客】都會來那裡試試清澈的河水，所以老闆必須提前好幾個月接受訂房。"
  },
  {
    "word": "rod",
    "pos": "n.",
    "cn_def": "釣竿",
    "en_def": "a long thin stick with a line, used for catching fish",
    "sentence": "A: Have you decided what to buy for Mr. Chen's retirement gift, since he told everyone he plans to spend more time at the lake? B: Yes, the team agreed to buy him a light carbon fishing {{BLANK}} from the sports shop downtown, and we will also include a card signed by everyone in the office.",
    "cn": "A：你們決定好要買什麼送陳先生當退休禮物了嗎？他跟大家說他打算花更多時間待在湖邊。 B：決定了，團隊同意從市中心的運動用品店買一支輕量碳纖維【釣竿】給他，我們也會附上一張辦公室每個人都簽了名的卡片。"
  },
  {
    "word": "reel",
    "pos": "n.",
    "cn_def": "捲線器",
    "en_def": "a round device on a fishing rod that winds the line",
    "sentence": "A: Why did the customer bring his fishing equipment back to the store only two days after he bought it from us? B: He said the {{BLANK}} made a strange noise and would not wind the line in smoothly, so I checked it, found a broken part, and gave him a new one right away.",
    "cn": "A：為什麼那位顧客在跟我們買了釣具才兩天就拿回店裡？ B：他說【捲線器】發出奇怪的聲音，而且無法順暢地收線，所以我檢查了一下，發現有個零件壞了，就立刻換了一個新的給他。"
  },
  {
    "word": "line",
    "pos": "n.",
    "cn_def": "釣線",
    "en_def": "a thin, strong string used for fishing",
    "sentence": "A: Why didn't you bring home any fish yesterday when you said the river was full of big ones at this time of year? B: I had one large carp on my hook for nearly ten minutes, but the {{BLANK}} was too thin and it suddenly broke just before I could pull the fish onto the bank.",
    "cn": "A：你不是說每年這個時候河裡都是大魚嗎？為什麼你昨天一條魚都沒帶回家？ B：我的魚鉤上鉤住一條大鯉魚將近十分鐘，但是【釣線】太細了，就在我快把魚拉上岸之前突然斷了。"
  },
  {
    "word": "hook",
    "pos": "n.",
    "cn_def": "魚鉤",
    "en_def": "a small curved piece of metal that catches the fish",
    "sentence": "A: What should the new staff at our outdoor shop tell children who want to try fishing at the pond for the first time? B: They should explain that the sharp metal {{BLANK}} can easily hurt small fingers, so an adult must always help put the bait on and take the fish off safely.",
    "cn": "A：我們戶外用品店的新員工應該如何告訴第一次想在池塘釣魚的孩子們？ B：他們應該說明尖銳的金屬【魚鉤】很容易刺傷小手指，所以一定要由大人幫忙裝上魚餌並安全地取下魚。"
  },
  {
    "word": "bait",
    "pos": "n.",
    "cn_def": "魚餌；誘餌",
    "en_def": "food put on a hook to attract fish",
    "sentence": "A: Why did the tour guide stop at the small shop beside the harbor before taking our group out on the fishing boat? B: He needed to buy fresh shrimp and worms for {{BLANK}}, because he said the fish in this bay only bite when the food on the hook smells natural and fresh.",
    "cn": "A：為什麼導遊在帶我們這團搭釣魚船出海之前，先在港邊的小店停了一下？ B：他需要買新鮮的蝦子和蟲來當【魚餌】，因為他說這個海灣的魚只有在鉤上的食物聞起來自然又新鮮時才會咬餌。"
  },
  {
    "word": "lure",
    "pos": "n.",
    "cn_def": "假餌；擬餌",
    "en_def": "an artificial object that looks like food, used to attract fish",
    "sentence": "A: Our customers keep asking about the bright plastic fish in the display case near the front door, so what exactly are they used for? B: Each one is a {{BLANK}} that moves like a small injured fish in the water, so bigger fish attack it, and anglers like them because they never need live worms.",
    "cn": "A：我們的顧客一直問起前門附近展示櫃裡那些鮮豔的塑膠魚，它們到底是做什麼用的？ B：每一個都是【假餌】，在水裡會像一條受傷的小魚一樣游動，所以大魚會攻擊它，釣客喜歡它們是因為完全不需要用活的蟲。"
  },
  {
    "word": "net",
    "pos": "n.",
    "cn_def": "網；漁網",
    "en_def": "a material with holes, used to catch or lift fish",
    "sentence": "A: How do the workers at the fish farm move hundreds of fish from one pond to another without hurting them? B: Two workers hold a large soft {{BLANK}} at each end and slowly walk through the shallow water, and then they lift the fish into a tank on the truck very gently.",
    "cn": "A：養魚場的工人如何在不傷害魚的情況下，把數百條魚從一個池塘移到另一個池塘？ B：兩位工人各拿著一張柔軟大【網】的一端，慢慢走過淺水，然後非常輕柔地把魚撈進卡車上的水箱裡。"
  },
  {
    "word": "tackle",
    "pos": "n.",
    "cn_def": "釣具",
    "en_def": "all the equipment used for fishing",
    "sentence": "A: Where should I put all the rods, boxes of hooks, and other equipment after our team-building fishing trip ends this afternoon? B: Please store the {{BLANK}} in the gray cabinet in the warehouse, and make sure everything is dry first, because the metal parts can rust quickly if they stay wet.",
    "cn": "A：今天下午團隊建立釣魚活動結束後，我應該把所有的釣竿、魚鉤盒和其他裝備放在哪裡？ B：請把【釣具】收進倉庫的灰色櫃子裡，並先確定所有東西都是乾的，因為金屬零件如果一直潮濕的話很快就會生鏽。"
  },
  {
    "word": "boat",
    "pos": "n.",
    "cn_def": "船；小船",
    "en_def": "a small vehicle that travels on water",
    "sentence": "A: How are the visitors from our Japanese office getting to the island for tomorrow's fishing tour, since there is no bridge? B: The travel agency has booked a small {{BLANK}} with a captain who knows the area well, and it will leave the harbor at seven o'clock and return before dinner.",
    "cn": "A：既然沒有橋，我們日本分公司的訪客明天要怎麼去島上參加釣魚行程？ B：旅行社已經預訂了一艘小【船】，船長很熟悉這一帶，船會在七點離港，並在晚餐前回來。"
  },
  {
    "word": "dock",
    "pos": "n.",
    "cn_def": "碼頭",
    "en_def": "a structure where boats stop so people can get on and off",
    "sentence": "A: Where should the delivery driver leave the boxes of ice and drinks for the fishing tournament this Saturday morning? B: Tell him to bring everything to the wooden {{BLANK}} at the end of Harbor Road, where the boats will be tied up, so the crew can load them directly.",
    "cn": "A：送貨司機這個星期六早上應該把釣魚比賽要用的冰塊和飲料箱放在哪裡？ B：告訴他把所有東西送到港口路盡頭的木造【碼頭】，船會停靠在那裡，這樣船員就可以直接搬上船。"
  },
  {
    "word": "river",
    "pos": "n.",
    "cn_def": "河；河流",
    "en_def": "a long natural flow of water across the land",
    "sentence": "A: Why did the city government close the popular walking path near the old bridge for the whole month? B: Heavy rain last week made the {{BLANK}} rise quickly and flood part of the path, so workers need time to repair the damage before families and anglers can safely return.",
    "cn": "A：為什麼市政府把舊橋附近那條熱門步道封閉一整個月？ B：上週的大雨讓【河】水迅速上漲並淹沒了部分步道，所以工人需要時間修復損壞，家庭和釣客才能安全地回來。"
  },
  {
    "word": "lake",
    "pos": "n.",
    "cn_def": "湖",
    "en_def": "a large area of water surrounded by land",
    "sentence": "A: Which location did the HR team finally choose for this year's company picnic, after looking at so many parks? B: They picked the park beside the {{BLANK}} in the mountains, because there is a quiet area for fishing, a big lawn for games, and enough parking for all the employees.",
    "cn": "A：人資團隊看了那麼多公園之後，最後選了哪裡作為今年公司野餐的地點？ B：他們選了山中【湖】旁邊的公園，因為那裡有安靜的釣魚區、可以玩遊戲的大草坪，還有足夠讓所有員工停車的位置。"
  },
  {
    "word": "sea",
    "pos": "n.",
    "cn_def": "海；海洋",
    "en_def": "the salt water that covers much of the earth",
    "sentence": "A: Why was this morning's fishing trip for the visiting clients canceled only an hour before departure? B: The captain checked the latest report and said the {{BLANK}} was too rough because of strong winds, so he decided it was not safe to take the boat out until tomorrow.",
    "cn": "A：為什麼今天早上為來訪客戶安排的釣魚行程在出發前一小時被取消？ B：船長查看了最新的報告，說因為強風【海】面太過洶湧，所以他決定明天之前開船出去都不安全。"
  },
  {
    "word": "shore",
    "pos": "n.",
    "cn_def": "岸邊；海岸",
    "en_def": "the land along the edge of a sea or lake",
    "sentence": "A: Do I need to rent a boat if I want to catch some fish during my business trip to the coast next month? B: Not really, because many people stand on the rocks along the {{BLANK}} near the hotel in the evening, and they often catch plenty of fish without going out on the water.",
    "cn": "A：如果我下個月去海邊出差時想釣一些魚，需要租船嗎？ B：其實不用，因為傍晚時有很多人站在飯店附近【岸邊】的岩石上，他們常常不用出海就釣到很多魚。"
  },
  {
    "word": "catch",
    "pos": "v.",
    "cn_def": "捕捉；釣到",
    "en_def": "to take hold of a fish or animal",
    "sentence": "A: What is the main goal of the fishing competition that our sales department is sponsoring next weekend? B: Each team has four hours to {{BLANK}} as many fish as possible, but they must put most of them back in the lake, and the winners will receive gift cards and a trophy.",
    "cn": "A：我們業務部下週末贊助的釣魚比賽主要目標是什麼？ B：每一隊有四個小時盡可能【釣到】越多魚越好，但大部分的魚必須放回湖裡，優勝者將獲得禮物卡和一座獎盃。"
  },
  {
    "word": "cast",
    "pos": "v.",
    "cn_def": "拋（竿）；甩出（釣線）",
    "en_def": "to throw a fishing line into the water",
    "sentence": "A: How did the instructor at the fishing class help the beginners who kept getting their lines stuck in the trees? B: He showed them how to {{BLANK}} the line with a smooth movement of the wrist instead of swinging the whole arm, and after some practice most of them could reach the middle of the pond.",
    "cn": "A：釣魚課的教練是如何幫助那些釣線一直卡在樹上的初學者？ B：他示範如何用手腕平順的動作來【拋】出釣線，而不是揮動整隻手臂，經過一些練習後，大部分的人都能拋到池塘中央。"
  },
  {
    "word": "float",
    "pos": "v.",
    "cn_def": "漂浮",
    "en_def": "to stay on the surface of water",
    "sentence": "A: Why does the safety officer want every passenger on the fishing tour to wear a life jacket, even good swimmers? B: The jacket helps you {{BLANK}} on the surface if you fall into the cold water, so you can stay calm and wait for the crew to pull you back onto the boat.",
    "cn": "A：為什麼安全官要求釣魚行程上的每位乘客都穿救生衣，即使是很會游泳的人也一樣？ B：如果你掉進冰冷的水裡，救生衣能幫助你【漂浮】在水面上，這樣你就可以保持冷靜，等待船員把你拉回船上。"
  },
  {
    "word": "sink",
    "pos": "v.",
    "cn_def": "下沉；沉沒",
    "en_def": "to go down below the surface of water",
    "sentence": "A: Why did you add those small metal weights to the line before you started fishing in the deep part of the lake? B: The weights make the bait {{BLANK}} quickly to the bottom, where the big fish usually feed during the hot afternoon, instead of staying near the surface.",
    "cn": "A：為什麼你在湖的深水區開始釣魚前，要在釣線上加那些小金屬重物？ B：這些重物能讓魚餌迅速【沉】到底部，大魚在炎熱的下午通常在那裡覓食，而不是讓魚餌停留在水面附近。"
  },
  {
    "word": "patience",
    "pos": "n.",
    "cn_def": "耐心",
    "en_def": "the ability to wait calmly without getting upset",
    "sentence": "A: Why does our manager say that fishing is good training for people who want to work in sales? B: She believes that both activities need a lot of {{BLANK}}, because you often wait for hours without any results, and you must stay positive until a customer or a fish finally responds.",
    "cn": "A：為什麼我們經理說釣魚對想從事業務工作的人來說是很好的訓練？ B：她認為這兩種活動都需要很大的【耐心】，因為你常常等了好幾個小時都沒有任何結果，而且必須保持正面態度，直到客戶或魚終於有了回應。"
  },
  {
    "word": "calm",
    "pos": "adj.",
    "cn_def": "平靜的；風平浪靜的",
    "en_def": "still, without big waves or strong wind",
    "sentence": "A: What time do you think we should leave the hotel tomorrow if we want to go fishing before the client meeting? B: We should leave around five thirty, because the water in the bay is usually {{BLANK}} early in the morning, and the wind gets much stronger after nine o'clock.",
    "cn": "A：如果我們想在客戶會議前去釣魚，你覺得明天應該幾點離開飯店？ B：我們應該五點半左右出發，因為海灣的水面在清晨通常很【平靜】，九點以後風會變得強很多。"
  },
  {
    "word": "deep",
    "pos": "adj.",
    "cn_def": "深的",
    "en_def": "going a long way down from the top",
    "sentence": "A: Why did the fishing guide tell the children to stay in the shallow area near the shore this afternoon? B: The water becomes very {{BLANK}} only a few meters from the beach, and the current there is strong, so he did not want any of the young visitors to get into trouble.",
    "cn": "A：為什麼釣魚嚮導今天下午叫孩子們待在靠近岸邊的淺水區？ B：離海灘才幾公尺遠，水就變得非常【深】，而且那裡的水流很強，所以他不希望任何年輕的訪客遇到危險。"
  },
  {
    "word": "freshwater",
    "pos": "adj.",
    "cn_def": "淡水的",
    "en_def": "living in or relating to water that is not salty",
    "sentence": "A: Why did the restaurant change its menu after the new chef arrived from the mountain region last month? B: He prefers cooking {{BLANK}} fish like trout and carp from local rivers and lakes, so he replaced several ocean dishes with recipes from his hometown, and customers seem to love them.",
    "cn": "A：為什麼上個月那位來自山區的新主廚到任後，餐廳就更換了菜單？ B：他偏好烹調當地河川和湖泊的鱒魚和鯉魚等【淡水】魚，所以他把幾道海鮮料理換成了家鄉的食譜，而顧客似乎都很喜歡。"
  },
  {
    "word": "saltwater",
    "pos": "adj.",
    "cn_def": "海水的；鹹水的",
    "en_def": "living in or relating to sea water",
    "sentence": "A: Why does the shop owner tell customers to wash their equipment carefully after a fishing trip at the beach? B: Fishing in {{BLANK}} areas is hard on rods and reels, because the sea air and water make metal parts rust, so a quick rinse with clean water keeps the equipment working for years.",
    "cn": "A：為什麼店老闆告訴顧客在海邊釣魚後要仔細清洗裝備？ B：在【海水】區域釣魚對釣竿和捲線器的損耗很大，因為海風和海水會讓金屬零件生鏽，所以快速用清水沖洗一下，就能讓裝備使用好幾年。"
  },
  {
    "word": "species",
    "pos": "n.",
    "cn_def": "物種；種類",
    "en_def": "a group of animals or plants of the same type",
    "sentence": "A: What did the scientists from the university find when they studied the lake behind our factory last summer? B: They counted more than twenty different {{BLANK}} of fish living there, which shows the water is still healthy, and our company plans to share the report with the local community.",
    "cn": "A：大學的科學家們去年夏天研究我們工廠後面的湖時發現了什麼？ B：他們算出有超過二十種不同【種類】的魚生活在那裡，這顯示湖水仍然很健康，我們公司打算和當地社區分享這份報告。"
  },
  {
    "word": "tide",
    "pos": "n.",
    "cn_def": "潮汐；潮水",
    "en_def": "the regular rise and fall of the sea",
    "sentence": "A: Why do the fishermen in this town go out at different times every day instead of keeping a regular schedule? B: They plan their trips around the {{BLANK}}, because when the water comes in, many fish swim closer to the coast to feed, so the catch is usually much better.",
    "cn": "A：為什麼這個小鎮的漁夫每天出海的時間都不同，而不是維持固定的時間表？ B：他們依照【潮汐】安排出海時間，因為漲潮時許多魚會游到靠近海岸的地方覓食，所以漁獲量通常會好很多。"
  },
  {
    "word": "weather",
    "pos": "n.",
    "cn_def": "天氣",
    "en_def": "the conditions of sun, rain, and wind at a certain time",
    "sentence": "A: Should we still hold the fishing event for our customers on Sunday, or should we move it to another date? B: Let's check the {{BLANK}} forecast again on Friday afternoon, and if there is a chance of thunderstorms, we will send everyone an email and move the event to the following weekend.",
    "cn": "A：我們星期天還要為客戶舉辦釣魚活動嗎？還是應該改到別的日期？ B：我們星期五下午再查一次【天氣】預報，如果有雷雨的可能，我們會寄電子郵件給大家，並把活動延到下個週末。"
  },
  {
    "word": "license",
    "pos": "n.",
    "cn_def": "執照；許可證",
    "en_def": "an official document that gives permission to do something",
    "sentence": "A: Can our foreign guests go fishing in the national park during their stay, or is there a special rule for visitors? B: They must buy a short-term fishing {{BLANK}} at the visitor center first, because park rangers check documents regularly, and anyone fishing without one may have to pay a large fine.",
    "cn": "A：我們的外國賓客在停留期間可以去國家公園釣魚嗎？還是對遊客有特別的規定？ B：他們必須先在遊客中心購買短期釣魚【許可證】，因為公園管理員會定期檢查證件，沒有許可證就釣魚的人可能要支付高額罰款。"
  },
  {
    "word": "harvest",
    "pos": "n.",
    "cn_def": "收穫量；漁獲量",
    "en_def": "the amount of fish or crops that is collected",
    "sentence": "A: Why are fish prices at the market so much higher than usual this month, according to the restaurant suppliers? B: The fishing companies reported a much smaller {{BLANK}} this season because of warmer ocean water, so there is less supply, and restaurants have to pay more for the same amount.",
    "cn": "A：根據餐廳供應商的說法，為什麼這個月市場上的魚價比平常高這麼多？ B：漁業公司回報說，由於海水變暖，這一季的【漁獲量】少了很多，所以供應減少，餐廳必須花更多錢買同樣的分量。"
  },
  {
    "word": "release",
    "pos": "v.",
    "cn_def": "放生；釋放",
    "en_def": "to let a fish go back into the water",
    "sentence": "A: What happens to all the fish that people catch at the river during the charity competition next month? B: After the judges measure and photograph each one, the anglers {{BLANK}} them back into the water right away, because the event organizers want to protect the river and its wildlife.",
    "cn": "A：下個月慈善比賽期間大家在河裡釣到的魚會怎麼處理？ B：評審測量並拍下每一條魚之後，釣客會立刻把牠們【放】回水裡，因為活動主辦單位希望保護這條河和河中的野生動物。"
  },
  {
    "word": "fillet",
    "pos": "n.",
    "cn_def": "魚排；魚片",
    "en_def": "a piece of fish or meat with the bones removed",
    "sentence": "A: What would you recommend from today's lunch menu for a client who does not like eating fish with small bones? B: I would suggest the grilled salmon {{BLANK}}, because the chef removes all the bones in the kitchen, and it comes with fresh vegetables and a light lemon sauce.",
    "cn": "A：今天的午餐菜單中，你會推薦什麼給不喜歡吃有小刺的魚的客戶？ B：我會推薦烤鮭魚【魚排】，因為主廚在廚房裡把所有的刺都去掉了，而且還搭配新鮮蔬菜和清爽的檸檬醬。"
  },
  {
    "word": "scale",
    "pos": "n.",
    "cn_def": "魚鱗",
    "en_def": "one of the small hard plates that cover a fish's skin",
    "sentence": "A: Why does the cook at the seafood restaurant use that special metal tool before he cuts the fish open? B: He uses it to remove every {{BLANK}} from the skin quickly, because customers complain if they find small hard pieces in their food, and the tool also saves a lot of time.",
    "cn": "A：為什麼海鮮餐廳的廚師在剖開魚之前要使用那個特殊的金屬工具？ B：他用它快速去除魚皮上的每一片【魚鱗】，因為顧客如果在食物裡吃到小硬片就會抱怨，而且這個工具也能節省很多時間。"
  },
  {
    "word": "clean",
    "pos": "v.",
    "cn_def": "清理（魚的內臟）",
    "en_def": "to remove the inside parts of a fish before cooking it",
    "sentence": "A: What should we do with the fish we caught this morning before we give them to the hotel kitchen for dinner? B: We should {{BLANK}} them at the washing station on the dock by removing the insides and rinsing them well, so the chef can start cooking as soon as we arrive.",
    "cn": "A：我們把今天早上釣到的魚交給飯店廚房做晚餐之前，應該先怎麼處理？ B：我們應該在碼頭上的清洗區把牠們【清理】乾淨，去除內臟並好好沖洗，這樣我們一到，主廚就可以馬上開始烹煮。"
  },
  {
    "word": "grill",
    "pos": "v.",
    "cn_def": "燒烤；炙烤",
    "en_def": "to cook food over direct heat",
    "sentence": "A: What is the plan for dinner after the fishing trip, since the restaurant near the lake is closed on Mondays? B: The campsite has several barbecue areas, so we will {{BLANK}} the fish we catch over charcoal with some salt and lemon, and everyone can bring a side dish to share.",
    "cn": "A：既然湖邊的餐廳星期一公休，釣魚之後的晚餐有什麼計畫？ B：營地有好幾個烤肉區，所以我們會用木炭加點鹽和檸檬【烤】我們釣到的魚，每個人也可以帶一道配菜來分享。"
  }
];

const MCQS = [
  {
    "q": "The magazine interviewed a famous _____ who has caught fish in over forty countries. He shared tips for choosing the best spots.",
    "options": [
      "harvest",
      "tide",
      "license",
      "angler"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Kevin bent his new _____ so far that it almost broke. The large tuna pulled hard for twenty minutes.",
    "options": [
      "rod",
      "tide",
      "species",
      "harvest"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Turn the handle on the _____ slowly to bring the line back in. Turning it too fast may tangle everything.",
    "options": [
      "shore",
      "reel",
      "patience",
      "weather"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The fish was so strong that it broke the _____ and swam away. Next time, Tom will buy a thicker one.",
    "options": [
      "dock",
      "license",
      "line",
      "species"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Be careful when you remove the _____ from the fish's mouth. Its sharp point can easily cut your fingers.",
    "options": [
      "hook",
      "tide",
      "weather",
      "harvest"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The shop sells live worms and shrimp to use as _____. Fish here rarely bite on anything else.",
    "options": [
      "river",
      "patience",
      "bait",
      "shore"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "This shiny metal _____ moves like a small injured fish. Big hungry fish often attack it within minutes.",
    "options": [
      "weather",
      "lure",
      "license",
      "harvest"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The fisherman used a large _____ to lift the heavy salmon out of the water. Without it, the fish might have escaped.",
    "options": [
      "tide",
      "patience",
      "weather",
      "net"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Passengers should meet at the _____ at seven o'clock sharp. The fishing boat will leave the harbor right after that.",
    "options": [
      "bait",
      "species",
      "dock",
      "hook"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The company picnic will be held beside a quiet mountain _____. Employees can swim, fish, or rent small boats there.",
    "options": [
      "tackle",
      "fillet",
      "reel",
      "lake"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "You do not need a boat to fish here. Many people catch sea bass while standing on the rocky _____.",
    "options": [
      "bait",
      "shore",
      "fillet",
      "license"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Fishing teaches children _____ because they may wait for an hour before anything bites. It is a useful lesson for life.",
    "options": [
      "patience",
      "tackle",
      "net",
      "tide"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Researchers found three new _____ of fish living in the deep river. They plan to publish their study next spring.",
    "options": [
      "hook",
      "species",
      "dock",
      "reel"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The fishermen waited for the _____ to come in before going out. Rising water brings more fish close to the coast.",
    "options": [
      "rod",
      "angler",
      "tide",
      "license"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Visitors must buy a fishing _____ at the park office before they start. Rangers check permits and give fines to anyone without one.",
    "options": [
      "license",
      "harvest",
      "shore",
      "tide"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Warm ocean water led to a poor fish _____ this year. As a result, seafood prices at the market rose sharply.",
    "options": [
      "angler",
      "reel",
      "hook",
      "harvest"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The chef removed every bone, so the salmon _____ is safe for young children. It is served with rice and steamed vegetables.",
    "options": [
      "dock",
      "fillet",
      "shore",
      "tackle"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "Use the back of a knife to scrape off each _____ from the fish's skin. Then rinse the fish under cold water.",
    "options": [
      "net",
      "lake",
      "scale",
      "boat"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Our team rented a small _____ with a captain for the day. We sailed out to the island and fished until sunset.",
    "options": [
      "bait",
      "patience",
      "species",
      "boat"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "On weekends, my uncle likes to _____ for trout in the mountain streams. He usually brings home enough for dinner.",
    "options": [
      "fish",
      "grill",
      "sink",
      "float"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Last Sunday, Linda managed to _____ a huge tuna on her first deep-sea trip. Everyone on the boat took photos of it.",
    "options": [
      "float",
      "sink",
      "catch",
      "cast"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Hold the rod with both hands and _____ the line far into the lake. Then wait quietly for a fish to bite.",
    "options": [
      "grill",
      "clean",
      "float",
      "cast"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Plastic bottles _____ on the water, so the beach volunteers can collect them easily with nets. Heavier trash is much harder to find.",
    "options": [
      "float",
      "grill",
      "catch",
      "clean"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Add a small weight to the line so the bait will _____ to the bottom. Large fish feed near the lakebed in summer.",
    "options": [
      "grill",
      "sink",
      "fish",
      "release"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "This park has a strict rule for every angler. You must _____ all fish back into the river after taking a photo.",
    "options": [
      "grill",
      "sink",
      "release",
      "catch"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Before cooking, please _____ the fish by removing the insides and washing it well. The kitchen staff will then prepare it.",
    "options": [
      "cast",
      "float",
      "catch",
      "clean"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "Tonight we will _____ the fresh fish over charcoal at the campsite. Bring some lemons and salt if you can.",
    "options": [
      "grill",
      "sink",
      "cast",
      "float"
    ],
    "answer": 0,
    "vocabIndex": 34
  },
  {
    "q": "The sea is usually _____ early in the morning, with almost no wind. That is the best time for small boats to go out.",
    "options": [
      "deep",
      "calm",
      "saltwater",
      "freshwater"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Children should not swim past the yellow rope. The water there is more than five meters _____.",
    "options": [
      "deep",
      "calm",
      "freshwater",
      "saltwater"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Trout and carp are popular _____ fish in Taiwan's rivers and lakes. Tuna, on the other hand, lives in the ocean.",
    "options": [
      "saltwater",
      "calm",
      "deep",
      "freshwater"
    ],
    "answer": 3,
    "vocabIndex": 23
  }
];

const LOOKUP = {
  "fish": {
    "pos": "v.",
    "en_def": "to try to catch fish",
    "cn_def": "釣魚；捕魚"
  },
  "angler": {
    "pos": "n.",
    "en_def": "a person who catches fish with a rod as a hobby",
    "cn_def": "釣客；垂釣者"
  },
  "rod": {
    "pos": "n.",
    "en_def": "a long thin stick with a line, used for catching fish",
    "cn_def": "釣竿"
  },
  "reel": {
    "pos": "n.",
    "en_def": "a round device on a fishing rod that winds the line",
    "cn_def": "捲線器"
  },
  "line": {
    "pos": "n.",
    "en_def": "a thin, strong string used for fishing",
    "cn_def": "釣線"
  },
  "hook": {
    "pos": "n.",
    "en_def": "a small curved piece of metal that catches the fish",
    "cn_def": "魚鉤"
  },
  "bait": {
    "pos": "n.",
    "en_def": "food put on a hook to attract fish",
    "cn_def": "魚餌；誘餌"
  },
  "lure": {
    "pos": "n.",
    "en_def": "an artificial object that looks like food, used to attract fish",
    "cn_def": "假餌；擬餌"
  },
  "net": {
    "pos": "n.",
    "en_def": "a material with holes, used to catch or lift fish",
    "cn_def": "網；漁網"
  },
  "tackle": {
    "pos": "n.",
    "en_def": "all the equipment used for fishing",
    "cn_def": "釣具"
  },
  "boat": {
    "pos": "n.",
    "en_def": "a small vehicle that travels on water",
    "cn_def": "船；小船"
  },
  "dock": {
    "pos": "n.",
    "en_def": "a structure where boats stop so people can get on and off",
    "cn_def": "碼頭"
  },
  "river": {
    "pos": "n.",
    "en_def": "a long natural flow of water across the land",
    "cn_def": "河；河流"
  },
  "lake": {
    "pos": "n.",
    "en_def": "a large area of water surrounded by land",
    "cn_def": "湖"
  },
  "sea": {
    "pos": "n.",
    "en_def": "the salt water that covers much of the earth",
    "cn_def": "海；海洋"
  },
  "shore": {
    "pos": "n.",
    "en_def": "the land along the edge of a sea or lake",
    "cn_def": "岸邊；海岸"
  },
  "catch": {
    "pos": "v.",
    "en_def": "to take hold of a fish or animal",
    "cn_def": "捕捉；釣到"
  },
  "cast": {
    "pos": "v.",
    "en_def": "to throw a fishing line into the water",
    "cn_def": "拋（竿）；甩出（釣線）"
  },
  "float": {
    "pos": "v.",
    "en_def": "to stay on the surface of water",
    "cn_def": "漂浮"
  },
  "sink": {
    "pos": "v.",
    "en_def": "to go down below the surface of water",
    "cn_def": "下沉；沉沒"
  },
  "patience": {
    "pos": "n.",
    "en_def": "the ability to wait calmly without getting upset",
    "cn_def": "耐心"
  },
  "calm": {
    "pos": "adj.",
    "en_def": "still, without big waves or strong wind",
    "cn_def": "平靜的；風平浪靜的"
  },
  "deep": {
    "pos": "adj.",
    "en_def": "going a long way down from the top",
    "cn_def": "深的"
  },
  "freshwater": {
    "pos": "adj.",
    "en_def": "living in or relating to water that is not salty",
    "cn_def": "淡水的"
  },
  "saltwater": {
    "pos": "adj.",
    "en_def": "living in or relating to sea water",
    "cn_def": "海水的；鹹水的"
  },
  "species": {
    "pos": "n.",
    "en_def": "a group of animals or plants of the same type",
    "cn_def": "物種；種類"
  },
  "tide": {
    "pos": "n.",
    "en_def": "the regular rise and fall of the sea",
    "cn_def": "潮汐；潮水"
  },
  "weather": {
    "pos": "n.",
    "en_def": "the conditions of sun, rain, and wind at a certain time",
    "cn_def": "天氣"
  },
  "license": {
    "pos": "n.",
    "en_def": "an official document that gives permission to do something",
    "cn_def": "執照；許可證"
  },
  "harvest": {
    "pos": "n.",
    "en_def": "the amount of fish or crops that is collected",
    "cn_def": "收穫量；漁獲量"
  },
  "release": {
    "pos": "v.",
    "en_def": "to let a fish go back into the water",
    "cn_def": "放生；釋放"
  },
  "fillet": {
    "pos": "n.",
    "en_def": "a piece of fish or meat with the bones removed",
    "cn_def": "魚排；魚片"
  },
  "scale": {
    "pos": "n.",
    "en_def": "one of the small hard plates that cover a fish's skin",
    "cn_def": "魚鱗"
  },
  "clean": {
    "pos": "v.",
    "en_def": "to remove the inside parts of a fish before cooking it",
    "cn_def": "清理（魚的內臟）"
  },
  "grill": {
    "pos": "v.",
    "en_def": "to cook food over direct heat",
    "cn_def": "燒烤；炙烤"
  }
};

const EXTRA_GLOSSES = {};
