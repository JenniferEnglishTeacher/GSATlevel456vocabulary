// Topic 60 Quiz Data: Climate 氣候
// Source word list: https://www.examword.com/group-topic/climate — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T60 - Climate 氣候",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "climate",
    "pos": "n.",
    "cn_def": "氣候",
    "en_def": "the usual weather conditions in a place over a long time",
    "sentence": "A: Our company is thinking about opening a new factory in the south of the country next year, so what do managers need to consider before they choose the location? B: They should study the local {{BLANK}} carefully, because hot and wet conditions all year round can damage machines and raise cooling costs.",
    "cn": "A：我們公司正考慮明年在國家南部開設一間新工廠，經理們在選擇地點前需要考慮什麼？ B：他們應該仔細研究當地的【氣候】，因為全年炎熱潮濕的環境會損壞機器並提高冷卻成本。"
  },
  {
    "word": "weather",
    "pos": "n.",
    "cn_def": "天氣",
    "en_def": "the conditions in the air at a particular time, such as rain, sun or wind",
    "sentence": "A: The outdoor product launch is planned for Saturday afternoon in the park, but I heard it might rain, so should we prepare a backup plan just in case? B: Yes, let's check the {{BLANK}} report again on Thursday, and if it looks bad, we can move the event into the hotel ballroom.",
    "cn": "A：戶外產品發表會預定在週六下午於公園舉行，但我聽說可能會下雨，我們要不要準備一個備案以防萬一？ B：要，我們週四再查一次【天氣】預報，如果看起來不好，就把活動移到飯店宴會廳。"
  },
  {
    "word": "temperature",
    "pos": "n.",
    "cn_def": "溫度；氣溫",
    "en_def": "how hot or cold something is",
    "sentence": "A: Several employees on the third floor have complained that the office feels too cold in the afternoons, so is there anything the building manager can do? B: He said he will raise the {{BLANK}} on the air conditioner by two degrees and also check whether any windows near the meeting rooms are leaking.",
    "cn": "A：三樓有好幾位員工抱怨下午辦公室太冷，大樓管理員能做些什麼嗎？ B：他說會把冷氣的【溫度】調高兩度，也會檢查會議室附近是否有窗戶漏風。"
  },
  {
    "word": "rainfall",
    "pos": "n.",
    "cn_def": "降雨量",
    "en_def": "the amount of rain that falls in an area",
    "sentence": "A: The farmers who supply vegetables to our restaurant chain say prices may go up this autumn, so do you know why that is happening? B: The total {{BLANK}} this summer was much lower than usual, so many fields were too dry and the harvest will be smaller than last year's.",
    "cn": "A：供應我們連鎖餐廳蔬菜的農民說今年秋天價格可能會上漲，你知道為什麼嗎？ B：今年夏天的總【降雨量】比平常少很多，所以許多田地太乾，收成會比去年少。"
  },
  {
    "word": "humidity",
    "pos": "n.",
    "cn_def": "濕度",
    "en_def": "the amount of water in the air",
    "sentence": "A: The paper in our storage room keeps getting soft and wavy before we can use it in the printers, so what do you think the problem is? B: The {{BLANK}} in that room is very high during the rainy season, so we should buy a dehumidifier and keep the door closed.",
    "cn": "A：我們儲藏室裡的紙在放進印表機前總是變軟變皺，你覺得問題出在哪裡？ B：那個房間在雨季時【濕度】很高，所以我們應該買一台除濕機，並且把門關好。"
  },
  {
    "word": "atmosphere",
    "pos": "n.",
    "cn_def": "大氣（層）",
    "en_def": "the mixture of gases around the earth",
    "sentence": "A: I'm preparing a short presentation for our environmental training next week, so could you help me explain why factory smoke is such a serious problem? B: Sure, you can say that the smoke releases harmful gases into the {{BLANK}}, where they trap heat and make the air dirtier for everyone who lives nearby.",
    "cn": "A：我正在為下週的環保訓練準備一個簡短報告，你能幫我解釋為什麼工廠排煙是這麼嚴重的問題嗎？ B：當然，你可以說煙會把有害氣體排放到【大氣】中，這些氣體會留住熱量，並讓附近居民呼吸的空氣更髒。"
  },
  {
    "word": "season",
    "pos": "n.",
    "cn_def": "季節",
    "en_def": "one of the four periods of the year, such as spring or winter",
    "sentence": "A: Our travel agency is planning special tour packages to Japan, so which time of year do you think will attract the most customers from Taiwan? B: I think spring is the best {{BLANK}} because the cherry blossoms are beautiful, the temperature is comfortable, and many families take vacations in early April.",
    "cn": "A：我們旅行社正在規劃前往日本的特別旅遊行程，你認為一年中哪個時候最能吸引台灣客人？ B：我認為春天是最好的【季節】，因為櫻花很美、氣溫舒適，而且許多家庭在四月初會去度假。"
  },
  {
    "word": "seasonal",
    "pos": "adj.",
    "cn_def": "季節性的",
    "en_def": "happening or needed only at a certain time of year",
    "sentence": "A: Our ice cream shop always gets very busy from June to August, but we don't need as many workers in winter, so how should we handle staffing? B: We could hire {{BLANK}} workers, such as university students on summer break, who are happy to work for three months and then return to school.",
    "cn": "A：我們的冰淇淋店每年六月到八月都很忙，但冬天不需要那麼多員工，我們該如何安排人力？ B：我們可以雇用【季節性的】工作人員，例如放暑假的大學生，他們很樂意工作三個月然後回學校。"
  },
  {
    "word": "tropical",
    "pos": "adj.",
    "cn_def": "熱帶的",
    "en_def": "from or like the hot, wet areas near the equator",
    "sentence": "A: The marketing team wants to hold next year's sales conference somewhere warm and relaxing, so do you have any ideas for a good place? B: How about a {{BLANK}} island in Southeast Asia, where the weather is hot, the beaches are beautiful, and the resort hotels have large meeting rooms?",
    "cn": "A：行銷團隊希望明年的業務會議在溫暖又放鬆的地方舉行，你有什麼好地點的建議嗎？ B：東南亞的【熱帶】島嶼怎麼樣？那裡天氣炎熱、海灘漂亮，而且度假飯店有大型會議室。"
  },
  {
    "word": "temperate",
    "pos": "adj.",
    "cn_def": "溫帶的；溫和的",
    "en_def": "not very hot and not very cold",
    "sentence": "A: Our company is choosing between two cities for its new European office, so why did the director say that the weather was an important factor? B: She prefers the city with a {{BLANK}} climate, because staff will not suffer from extreme heat in summer or heavy snow that stops trains in winter.",
    "cn": "A：公司正在兩個城市中為新的歐洲辦公室做選擇，為什麼主管說天氣是重要因素？ B：她偏好【溫帶】氣候的城市，因為員工夏天不會受酷熱之苦，冬天也不會遇到讓火車停駛的大雪。"
  },
  {
    "word": "arid",
    "pos": "adj.",
    "cn_def": "乾旱的",
    "en_def": "very dry, with little or no rain",
    "sentence": "A: The engineers are designing a new water system for the factory we are building in the desert region, so why does it cost so much more than usual? B: The land there is extremely {{BLANK}}, with almost no rain for most of the year, so they must pipe water in from a river eighty kilometers away.",
    "cn": "A：工程師正在為我們在沙漠地區興建的工廠設計新的供水系統，為什麼費用比平常高這麼多？ B：那裡的土地極度【乾旱】，一年中大部分時間幾乎不下雨，所以他們必須從八十公里外的河流引水過來。"
  },
  {
    "word": "polar",
    "pos": "adj.",
    "cn_def": "極地的",
    "en_def": "relating to the very cold areas around the North or South Pole",
    "sentence": "A: I saw that the science museum downtown has a new exhibition this month, so do you think it would be a good trip for our staff family day? B: Yes, the {{BLANK}} exhibition is perfect for kids, because they can learn about penguins, ice, and how animals survive in the coldest places on earth.",
    "cn": "A：我看到市中心的科學博物館這個月有新展覽，你覺得那適合當作我們員工家庭日的行程嗎？ B：適合，那個【極地】展覽很適合小孩，因為他們可以認識企鵝、冰，以及動物如何在地球上最冷的地方生存。"
  },
  {
    "word": "forecast",
    "pos": "n.",
    "cn_def": "預報；預測",
    "en_def": "a statement about what will probably happen, especially with the weather",
    "sentence": "A: We are supposed to fly to Okinawa for the client meeting on Monday morning, but I'm worried about the typhoon, so what did the news say? B: The latest {{BLANK}} says the storm will arrive on Sunday night, so the airline may cancel our flight and we should call the client today.",
    "cn": "A：我們預定週一早上飛到沖繩和客戶開會，但我擔心颱風，新聞怎麼說？ B：最新的【預報】說暴風會在週日晚上抵達，所以航空公司可能會取消我們的航班，我們今天應該打電話給客戶。"
  },
  {
    "word": "drought",
    "pos": "n.",
    "cn_def": "乾旱",
    "en_def": "a long period with little or no rain",
    "sentence": "A: The coffee supplier just told us that bean prices will rise by twenty percent next quarter, so did they explain the reason for such a big increase? B: Yes, a long {{BLANK}} in Brazil lasted for almost six months, and many coffee farms lost a large part of their crop because there was no water.",
    "cn": "A：咖啡供應商剛告訴我們下一季咖啡豆價格會上漲百分之二十，他們有解釋漲這麼多的原因嗎？ B：有，巴西一場長期【乾旱】持續了將近六個月，許多咖啡農場因為缺水損失了大部分作物。"
  },
  {
    "word": "flood",
    "pos": "n.",
    "cn_def": "洪水；水災",
    "en_def": "a large amount of water covering land that is usually dry",
    "sentence": "A: Why is the warehouse team moving all the boxes from the ground floor up to the second floor this afternoon? B: The river next to the building rose quickly after three days of heavy rain, and the city warned that a {{BLANK}} could reach our area tonight, so we want to protect the products.",
    "cn": "A：倉庫團隊今天下午為什麼要把一樓的箱子全部搬到二樓？ B：連續下了三天大雨後，大樓旁邊的河水迅速上漲，市政府警告今晚【洪水】可能淹到我們這一區，所以我們想保護產品。"
  },
  {
    "word": "storm",
    "pos": "n.",
    "cn_def": "暴風雨",
    "en_def": "very bad weather with strong winds and heavy rain",
    "sentence": "A: The power went off in the whole office building around two o'clock, and my computer shut down before I saved my report, so what happened? B: A strong {{BLANK}} with heavy rain and lightning passed over the city, and it damaged some power lines near the train station.",
    "cn": "A：兩點左右整棟辦公大樓停電了，我的電腦在我存檔報告前就關機了，發生了什麼事？ B：一場夾帶大雨和閃電的強烈【暴風雨】經過市區，損壞了火車站附近的一些電線。"
  },
  {
    "word": "heatwave",
    "pos": "n.",
    "cn_def": "熱浪",
    "en_def": "a period of unusually hot weather",
    "sentence": "A: Sales of fans and air conditioners at our electronics stores have doubled this week, so did the marketing team start a special promotion? B: No, the main reason is the {{BLANK}}, because temperatures have stayed above thirty-seven degrees for six days and many people cannot sleep at night.",
    "cn": "A：我們電器行的電風扇和冷氣銷量這週翻倍了，是行銷團隊開始了特別促銷嗎？ B：不是，主要原因是【熱浪】，因為氣溫已經連續六天超過三十七度，很多人晚上都睡不著。"
  },
  {
    "word": "cold spell",
    "pos": "n.phr.",
    "cn_def": "寒流；一段寒冷期",
    "en_def": "a short period of very cold weather",
    "sentence": "A: The vegetable prices at the market went up suddenly this week, and our restaurant's food costs are much higher, so what caused the change? B: A sudden {{BLANK}} last weekend brought freezing temperatures to the farms in central Taiwan, and many leafy vegetables were damaged by the frost.",
    "cn": "A：這週市場的菜價突然上漲，我們餐廳的食材成本高了很多，是什麼造成的？ B：上週末一波突如其來的【寒流】讓中台灣的農場出現低溫，許多葉菜都被霜凍壞了。"
  },
  {
    "word": "wind",
    "pos": "n.",
    "cn_def": "風",
    "en_def": "air that moves quickly across the land",
    "sentence": "A: Why did the construction company stop using the tall crane on the new office tower this afternoon? B: The {{BLANK}} became too strong after lunch, and the safety manager decided it was dangerous to lift heavy steel beams that high, so the workers will continue tomorrow morning if it is calmer.",
    "cn": "A：建設公司今天下午為什麼停止使用新辦公大樓上的高塔吊車？ B：午餐後【風】變得太強，安全經理認為把沉重的鋼樑吊到那麼高很危險，所以如果明天早上比較平靜，工人會繼續施工。"
  },
  {
    "word": "cloud cover",
    "pos": "n.phr.",
    "cn_def": "雲層覆蓋；雲量",
    "en_def": "the amount of the sky that is covered by clouds",
    "sentence": "A: The photography team wants to take pictures of the new hotel from the air using a drone, so is tomorrow a good day to do it? B: Probably not, because thick {{BLANK}} is expected all morning, so the sky will look gray and the building will not stand out in the photos.",
    "cn": "A：攝影團隊想用無人機從空中拍新飯店的照片，明天是適合拍攝的日子嗎？ B：可能不是，因為預計整個早上都會有厚厚的【雲層覆蓋】，天空看起來會灰灰的，建築物在照片中不會突出。"
  },
  {
    "word": "sunlight",
    "pos": "n.",
    "cn_def": "陽光",
    "en_def": "the light that comes from the sun",
    "sentence": "A: The interior designer is planning the layout of our new office, so where does she suggest we put the main work area for the staff? B: She wants it next to the large windows on the east side, because the room gets plenty of natural {{BLANK}} in the morning and people will feel more awake.",
    "cn": "A：室內設計師正在規劃我們新辦公室的配置，她建議把員工的主要工作區放在哪裡？ B：她想把它放在東側的大窗戶旁邊，因為那個房間早上有充足的自然【陽光】，大家會覺得比較有精神。"
  },
  {
    "word": "greenhouse effect",
    "pos": "n.phr.",
    "cn_def": "溫室效應",
    "en_def": "the warming of the earth because gases in the air trap the sun's heat",
    "sentence": "A: Our company is making a short environmental video for customers, and I need to explain why the earth is getting warmer, so can you help me with the script? B: You could start with the {{BLANK}}, which happens when gases like carbon dioxide trap heat from the sun and stop it from escaping into space.",
    "cn": "A：我們公司正在為客戶製作一支簡短的環保影片，我需要解釋地球為什麼越來越暖，你可以幫我寫腳本嗎？ B：你可以從【溫室效應】開始講，它是指像二氧化碳這類氣體留住太陽的熱，使熱無法散逸到太空中。"
  },
  {
    "word": "global warming",
    "pos": "n.phr.",
    "cn_def": "全球暖化",
    "en_def": "the slow rise in the earth's average temperature",
    "sentence": "A: The insurance company sent us a letter saying our business insurance will cost more next year, so did they explain why the price is going up? B: They said {{BLANK}} is causing more typhoons and floods every year, so they must pay for more damage and are raising prices for all customers.",
    "cn": "A：保險公司寄信給我們說明年的商業保險費會變貴，他們有解釋為什麼漲價嗎？ B：他們說【全球暖化】每年造成更多颱風和水災，所以他們必須支付更多損失，因此對所有客戶調漲價格。"
  },
  {
    "word": "climate change",
    "pos": "n.phr.",
    "cn_def": "氣候變遷",
    "en_def": "long-term changes in the earth's weather patterns, mainly caused by people",
    "sentence": "A: Our board of directors asked every department to suggest ways to cut energy use this year, so why are they suddenly so interested in this issue? B: Many investors now worry about {{BLANK}}, and they want companies to show clear plans for reducing pollution and protecting the environment in the future.",
    "cn": "A：董事會要求每個部門今年提出減少能源使用的方法，他們為什麼突然這麼關心這個議題？ B：現在許多投資人擔心【氣候變遷】，他們希望公司提出明確的計畫來減少污染並保護未來的環境。"
  },
  {
    "word": "emissions",
    "pos": "n.",
    "cn_def": "排放物；排放量",
    "en_def": "gases or other substances sent out into the air",
    "sentence": "A: The government announced new environmental rules for factories last month, so what does our plant need to change before the deadline in December? B: We must reduce our carbon {{BLANK}} by fifteen percent, so the engineers are replacing the old boilers and adding filters to the chimneys.",
    "cn": "A：政府上個月公布了新的工廠環保規定，我們工廠在十二月截止日前需要做哪些改變？ B：我們必須把碳【排放量】減少百分之十五，所以工程師正在更換舊鍋爐，並在煙囪加裝濾網。"
  },
  {
    "word": "carbon",
    "pos": "n.",
    "cn_def": "碳",
    "en_def": "a chemical element; often used to mean the carbon dioxide released into the air",
    "sentence": "A: Our customers keep asking whether our delivery service is environmentally friendly, so what should I tell them when they call the hotline? B: Tell them we switched to electric vans last year, which cut the amount of {{BLANK}} our trucks release by almost half, and we plan to replace the rest by 2028.",
    "cn": "A：客戶一直問我們的配送服務是否環保，他們打客服專線時我該怎麼回答？ B：告訴他們我們去年改用電動貨車，讓車隊排放的【碳】減少了將近一半，而且我們計畫在2028年前汰換其餘車輛。"
  },
  {
    "word": "sustainable",
    "pos": "adj.",
    "cn_def": "永續的；可持續的",
    "en_def": "able to continue for a long time without harming the environment",
    "sentence": "A: The new hotel owner wants to attract younger travelers who care about the environment, so what changes is she planning for the building? B: She wants to make the hotel more {{BLANK}} by installing solar panels, collecting rainwater for the gardens, and serving food from local farms instead of imported products.",
    "cn": "A：新的飯店老闆想吸引重視環保的年輕旅客，她打算對建築物做哪些改變？ B：她想透過安裝太陽能板、收集雨水澆花園，以及供應當地農場的食物而非進口產品，讓飯店更加【永續】。"
  },
  {
    "word": "extreme",
    "pos": "adj.",
    "cn_def": "極端的",
    "en_def": "very great or severe; much more than usual",
    "sentence": "A: Why did the airport cancel so many flights yesterday, even though the sky looked clear here in the city? B: The problem was at the other end, because {{BLANK}} weather in northern Japan, including heavy snow and freezing winds, closed three airports there for most of the day.",
    "cn": "A：昨天這裡市區的天空看起來很晴朗，機場為什麼還取消了這麼多航班？ B：問題出在另一端，因為日本北部的【極端】天氣，包括大雪和冰冷的強風，讓那裡三座機場大半天都關閉了。"
  },
  {
    "word": "variable",
    "pos": "adj.",
    "cn_def": "多變的；易變的",
    "en_def": "likely to change often",
    "sentence": "A: I'm going to London for a week of meetings with our British partners next month, so what kind of clothes do you think I should pack? B: The weather there is very {{BLANK}} in spring, so it might be sunny in the morning and rainy in the afternoon, and you should bring a light jacket and an umbrella.",
    "cn": "A：我下個月要去倫敦和英國夥伴開一週的會，你覺得我該帶什麼樣的衣服？ B：那裡春天的天氣非常【多變】，可能早上晴天、下午下雨，你應該帶一件薄外套和一把雨傘。"
  },
  {
    "word": "mild",
    "pos": "adj.",
    "cn_def": "溫和的；暖和的",
    "en_def": "not too hot and not too cold; pleasant",
    "sentence": "A: Our company is choosing a place for the annual staff trip in January, so why did the planning committee choose southern Taiwan instead of the mountains? B: The winter weather in the south is usually {{BLANK}}, around twenty-three degrees, so people can enjoy outdoor activities without thick coats or the risk of icy roads.",
    "cn": "A：公司正在為一月的年度員工旅遊選地點，為什麼籌備委員會選擇南台灣而不是山區？ B：南部冬天的天氣通常很【溫和】，大約二十三度，大家不用穿厚外套，也不必擔心路面結冰，就能享受戶外活動。"
  },
  {
    "word": "predictable",
    "pos": "adj.",
    "cn_def": "可預測的",
    "en_def": "able to be known or expected before it happens",
    "sentence": "A: Why do the managers at the beach resort plan their busy summer schedule so early, even in February? B: The weather there is quite {{BLANK}}, with sunny days from June to September almost every year, so they can confidently hire extra staff and book tour groups many months ahead.",
    "cn": "A：海灘度假村的經理們為什麼這麼早，甚至在二月就規劃夏季旺季的排班？ B：那裡的天氣相當【可預測】，幾乎每年六月到九月都是晴天，所以他們可以放心地提前好幾個月加聘人手和預訂旅行團。"
  },
  {
    "word": "unstable",
    "pos": "adj.",
    "cn_def": "不穩定的",
    "en_def": "likely to change suddenly; not steady",
    "sentence": "A: The hiking club from our company planned to climb Jade Mountain this weekend, so why did the leader suddenly postpone the trip? B: The weather in the mountains has been very {{BLANK}} this week, with sudden thunderstorms in the afternoons, so she thought it was too risky for the group.",
    "cn": "A：公司的登山社原本計畫這週末去爬玉山，為什麼領隊突然延期了？ B：這週山上的天氣非常【不穩定】，下午常有突如其來的雷陣雨，所以她認為對團體來說太危險了。"
  },
  {
    "word": "long-term",
    "pos": "adj.",
    "cn_def": "長期的",
    "en_def": "continuing for a long time into the future",
    "sentence": "A: Why did the city council decide to build a new seawall along the harbor, when it will take ten years to finish? B: They are thinking about the {{BLANK}} risk of rising sea levels, because experts say that many shops and homes near the port could be under water in fifty years.",
    "cn": "A：市議會為什麼決定沿著港口興建新的海堤，明明要花十年才能完工？ B：他們考量的是海平面上升的【長期】風險，因為專家說港口附近的許多商店和住家五十年後可能會被淹沒。"
  },
  {
    "word": "average",
    "pos": "adj.",
    "cn_def": "平均的",
    "en_def": "usual or typical; found by adding amounts and dividing by the number of them",
    "sentence": "A: The new branch manager is moving from Taipei to Hualien next month, so is she worried about how the weather there will be different? B: Not really, because the {{BLANK}} temperature in Hualien is only about one degree lower than in Taipei, although she says it rains more in the winter months.",
    "cn": "A：新的分店經理下個月要從台北搬到花蓮，她會擔心那裡的天氣不一樣嗎？ B：不太會，因為花蓮的【平均】氣溫只比台北低大約一度，不過她說冬季月份那裡比較常下雨。"
  }
];

const MCQS = [
  {
    "q": "Many retired couples move to southern Spain because of its warm _____. They enjoy sunny days for most of the year.",
    "options": [
      "drought",
      "emissions",
      "cloud cover",
      "climate"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The outdoor company picnic was moved indoors because of the bad _____. It rained heavily all morning in the park.",
    "options": [
      "weather",
      "sunlight",
      "carbon",
      "greenhouse effect"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Please keep the _____ in the server room below twenty degrees. The computers can overheat and stop working if it gets too warm.",
    "options": [
      "rainfall",
      "temperature",
      "drought",
      "season"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The farm had a poor harvest this year because _____ was far below normal. The fields received only half the usual amount of rain.",
    "options": [
      "heatwave",
      "wind",
      "rainfall",
      "carbon"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The museum uses special machines to control _____ in the gallery. Too much moisture in the air can damage old paintings.",
    "options": [
      "forecast",
      "drought",
      "storm",
      "humidity"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Smoke from the forest fires rose high into the _____. Air quality in nearby cities was poor for several days.",
    "options": [
      "season",
      "atmosphere",
      "drought",
      "rainfall"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The department store hires _____ staff every December. These extra workers help with the busy holiday shopping period.",
    "options": [
      "seasonal",
      "arid",
      "polar",
      "unstable"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Bananas and mangoes grow well in _____ regions near the equator. The hot and wet weather there is perfect for these fruits.",
    "options": [
      "polar",
      "arid",
      "tropical",
      "predictable"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Most of Western Europe has a _____ climate. Summers are warm but not too hot, and winters are cool rather than freezing.",
    "options": [
      "tropical",
      "temperate",
      "arid",
      "polar"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Very few plants can survive in the _____ desert areas of the region. It sometimes does not rain there for several years.",
    "options": [
      "tropical",
      "seasonal",
      "average",
      "arid"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The research team spent six months studying ice in the _____ regions. They lived at a base near the South Pole.",
    "options": [
      "tropical",
      "sustainable",
      "polar",
      "mild"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "According to the weather _____, it will be sunny on Saturday. That is good news for the outdoor concert in the park.",
    "options": [
      "forecast",
      "drought",
      "humidity",
      "atmosphere"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The long _____ forced the city to limit water use for six months. Residents could not water their gardens or wash their cars.",
    "options": [
      "flood",
      "storm",
      "drought",
      "humidity"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "After the river rose quickly, a _____ covered the main road with water. Drivers had to find another route to the airport.",
    "options": [
      "flood",
      "drought",
      "heatwave",
      "sunlight"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The ferry service was canceled because a strong _____ was approaching the island. Waves were expected to reach five meters.",
    "options": [
      "drought",
      "sunlight",
      "season",
      "storm"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "During the summer _____, temperatures stayed above thirty-eight degrees for a week. Many offices allowed staff to work from home.",
    "options": [
      "flood",
      "heatwave",
      "cold spell",
      "rainfall"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "A sudden _____ brought freezing temperatures to the north last week. Many people bought heaters and thick blankets.",
    "options": [
      "heatwave",
      "drought",
      "sunlight",
      "cold spell"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The strong _____ blew several umbrellas inside out on the bridge. Pedestrians held on tightly to their hats and bags.",
    "options": [
      "wind",
      "sunlight",
      "rainfall",
      "humidity"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Tomato plants need at least six hours of direct _____ every day. Place them near a south-facing window for the best results.",
    "options": [
      "humidity",
      "wind",
      "sunlight",
      "drought"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Gases such as carbon dioxide trap heat near the earth's surface. Scientists call this process the _____.",
    "options": [
      "cold spell",
      "greenhouse effect",
      "forecast",
      "rainfall"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Rising sea levels and melting ice are clear signs of _____. The earth's average temperature has increased over the past century.",
    "options": [
      "humidity",
      "rainfall",
      "global warming",
      "cold spell"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "World leaders met in Paris to discuss how to fight _____. They agreed to cut pollution and protect forests.",
    "options": [
      "climate change",
      "sunlight",
      "season",
      "humidity"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The car maker promised to cut _____ from its factories by thirty percent. The company is switching to cleaner energy sources.",
    "options": [
      "sunlight",
      "rainfall",
      "season",
      "emissions"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The new office building uses solar power and recycled materials. It is one of the most _____ buildings in the city.",
    "options": [
      "arid",
      "sustainable",
      "polar",
      "unstable"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Workers should avoid outdoor jobs during _____ heat in the afternoon. The temperature can rise above forty degrees at that time.",
    "options": [
      "average",
      "temperate",
      "extreme",
      "predictable"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "We enjoyed a very _____ winter this year, with few cold days. The heating bills for our office were much lower than usual.",
    "options": [
      "mild",
      "arid",
      "polar",
      "unstable"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Island weather is not always _____, so tour plans can change at short notice. Guests should check the schedule each morning.",
    "options": [
      "polar",
      "arid",
      "sustainable",
      "predictable"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The weather has been _____ all week, with sunshine one hour and heavy rain the next. Please bring an umbrella to the factory tour.",
    "options": [
      "arid",
      "unstable",
      "polar",
      "long-term"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The company is creating a _____ plan to reduce energy use by 2040. The first steps will begin next year.",
    "options": [
      "long-term",
      "arid",
      "polar",
      "tropical"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The _____ temperature in Taipei in July is about thirty degrees. Some days are hotter, and some are a little cooler.",
    "options": [
      "arid",
      "polar",
      "sustainable",
      "average"
    ],
    "answer": 3,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "climate": {
    "pos": "n.",
    "en_def": "the usual weather conditions in a place over a long time",
    "cn_def": "氣候"
  },
  "weather": {
    "pos": "n.",
    "en_def": "the conditions in the air at a particular time, such as rain, sun or wind",
    "cn_def": "天氣"
  },
  "temperature": {
    "pos": "n.",
    "en_def": "how hot or cold something is",
    "cn_def": "溫度；氣溫"
  },
  "rainfall": {
    "pos": "n.",
    "en_def": "the amount of rain that falls in an area",
    "cn_def": "降雨量"
  },
  "humidity": {
    "pos": "n.",
    "en_def": "the amount of water in the air",
    "cn_def": "濕度"
  },
  "atmosphere": {
    "pos": "n.",
    "en_def": "the mixture of gases around the earth",
    "cn_def": "大氣（層）"
  },
  "season": {
    "pos": "n.",
    "en_def": "one of the four periods of the year, such as spring or winter",
    "cn_def": "季節"
  },
  "seasonal": {
    "pos": "adj.",
    "en_def": "happening or needed only at a certain time of year",
    "cn_def": "季節性的"
  },
  "tropical": {
    "pos": "adj.",
    "en_def": "from or like the hot, wet areas near the equator",
    "cn_def": "熱帶的"
  },
  "temperate": {
    "pos": "adj.",
    "en_def": "not very hot and not very cold",
    "cn_def": "溫帶的；溫和的"
  },
  "arid": {
    "pos": "adj.",
    "en_def": "very dry, with little or no rain",
    "cn_def": "乾旱的"
  },
  "polar": {
    "pos": "adj.",
    "en_def": "relating to the very cold areas around the North or South Pole",
    "cn_def": "極地的"
  },
  "forecast": {
    "pos": "n.",
    "en_def": "a statement about what will probably happen, especially with the weather",
    "cn_def": "預報；預測"
  },
  "drought": {
    "pos": "n.",
    "en_def": "a long period with little or no rain",
    "cn_def": "乾旱"
  },
  "flood": {
    "pos": "n.",
    "en_def": "a large amount of water covering land that is usually dry",
    "cn_def": "洪水；水災"
  },
  "storm": {
    "pos": "n.",
    "en_def": "very bad weather with strong winds and heavy rain",
    "cn_def": "暴風雨"
  },
  "heatwave": {
    "pos": "n.",
    "en_def": "a period of unusually hot weather",
    "cn_def": "熱浪"
  },
  "cold spell": {
    "pos": "n.phr.",
    "en_def": "a short period of very cold weather",
    "cn_def": "寒流；一段寒冷期"
  },
  "wind": {
    "pos": "n.",
    "en_def": "air that moves quickly across the land",
    "cn_def": "風"
  },
  "cloud cover": {
    "pos": "n.phr.",
    "en_def": "the amount of the sky that is covered by clouds",
    "cn_def": "雲層覆蓋；雲量"
  },
  "sunlight": {
    "pos": "n.",
    "en_def": "the light that comes from the sun",
    "cn_def": "陽光"
  },
  "greenhouse effect": {
    "pos": "n.phr.",
    "en_def": "the warming of the earth because gases in the air trap the sun's heat",
    "cn_def": "溫室效應"
  },
  "global warming": {
    "pos": "n.phr.",
    "en_def": "the slow rise in the earth's average temperature",
    "cn_def": "全球暖化"
  },
  "climate change": {
    "pos": "n.phr.",
    "en_def": "long-term changes in the earth's weather patterns, mainly caused by people",
    "cn_def": "氣候變遷"
  },
  "emissions": {
    "pos": "n.",
    "en_def": "gases or other substances sent out into the air",
    "cn_def": "排放物；排放量"
  },
  "carbon": {
    "pos": "n.",
    "en_def": "a chemical element; often used to mean the carbon dioxide released into the air",
    "cn_def": "碳"
  },
  "sustainable": {
    "pos": "adj.",
    "en_def": "able to continue for a long time without harming the environment",
    "cn_def": "永續的；可持續的"
  },
  "extreme": {
    "pos": "adj.",
    "en_def": "very great or severe; much more than usual",
    "cn_def": "極端的"
  },
  "variable": {
    "pos": "adj.",
    "en_def": "likely to change often",
    "cn_def": "多變的；易變的"
  },
  "mild": {
    "pos": "adj.",
    "en_def": "not too hot and not too cold; pleasant",
    "cn_def": "溫和的；暖和的"
  },
  "predictable": {
    "pos": "adj.",
    "en_def": "able to be known or expected before it happens",
    "cn_def": "可預測的"
  },
  "unstable": {
    "pos": "adj.",
    "en_def": "likely to change suddenly; not steady",
    "cn_def": "不穩定的"
  },
  "long-term": {
    "pos": "adj.",
    "en_def": "continuing for a long time into the future",
    "cn_def": "長期的"
  },
  "average": {
    "pos": "adj.",
    "en_def": "usual or typical; found by adding amounts and dividing by the number of them",
    "cn_def": "平均的"
  }
};

const EXTRA_GLOSSES = {};
