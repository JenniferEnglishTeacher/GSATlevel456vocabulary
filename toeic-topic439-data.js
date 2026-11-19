// Topic 439 Quiz Data: Weather 天氣
// Source word list: https://www.examword.com/group-topic/weather — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T439 - Weather 天氣",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "forecast",
    "pos": "n.",
    "cn_def": "預報；預測",
    "en_def": "a statement about what the weather will be like soon",
    "sentence": "A: Should we still hold the company picnic at the riverside park on Saturday, or would it be safer to book the hotel ballroom instead? B: The latest weather {{BLANK}} says heavy thunderstorms will arrive around noon, so I think we should reserve the ballroom today and email everyone the new location.",
    "cn": "A：我們星期六還要在河濱公園舉辦公司野餐嗎？還是改訂飯店宴會廳比較安全？ B：最新的天氣【預報】說中午左右會有強烈雷雨，所以我認為我們今天就應該預訂宴會廳，並寄電子郵件通知大家新地點。"
  },
  {
    "word": "degrees Celsius",
    "pos": "n.phr.",
    "cn_def": "攝氏度",
    "en_def": "units for measuring temperature in which water freezes at 0",
    "sentence": "A: How hot is it expected to get in Singapore next week, because I need to decide what to pack for the trade show? B: The hotel staff told me it will reach about thirty-four {{BLANK}} every afternoon, so bring light cotton shirts and keep a jacket for the air-conditioned exhibition hall.",
    "cn": "A：新加坡下週預計會有多熱？因為我需要決定參加貿易展要帶什麼衣服。 B：飯店員工告訴我每天下午大約會到三十四【攝氏度】，所以帶輕薄的棉質襯衫，並準備一件外套在冷氣很強的展覽館穿。"
  },
  {
    "word": "mild",
    "pos": "adj.",
    "cn_def": "溫和的；暖和的",
    "en_def": "not too hot and not too cold",
    "sentence": "A: Is this a good time of year to bring our overseas clients to visit the tea farms in the mountains outside Taipei? B: Yes, the weather in spring is usually {{BLANK}}, not too hot and not too cold, so they can walk around the farms comfortably and enjoy the view without heavy coats.",
    "cn": "A：一年中的這個時候適合帶我們的海外客戶去參觀台北郊區山上的茶園嗎？ B：適合，春天的天氣通常很【溫和】，不太熱也不太冷，所以他們可以舒服地在茶園裡走走，不用穿厚重的外套就能欣賞風景。"
  },
  {
    "word": "warm",
    "pos": "adj.",
    "cn_def": "溫暖的；保暖的",
    "en_def": "a little hot in a pleasant way; keeping you from feeling cold",
    "sentence": "A: Do you think the new receptionist will need a heavier uniform jacket when the lobby doors keep opening in December? B: Probably, because the front desk is right next to the entrance, so we should order her a {{BLANK}} wool jacket before the cold weather arrives next month.",
    "cn": "A：十二月大廳的門一直開開關關，你覺得新來的接待員會需要比較厚的制服外套嗎？ B：大概需要，因為櫃台就在入口旁邊，所以我們應該在下個月冷天來臨前幫她訂一件【保暖的】羊毛外套。"
  },
  {
    "word": "chilly",
    "pos": "adj.",
    "cn_def": "寒冷的；涼颼颼的",
    "en_def": "cold enough to make you feel uncomfortable",
    "sentence": "A: Should I turn on the heater in the meeting room before the board members arrive at eight tomorrow morning? B: Yes, please do, because the room gets quite {{BLANK}} early in the morning after the building has been empty all night, and nobody can concentrate when their hands feel cold.",
    "cn": "A：明天早上八點董事會成員到之前，我要先打開會議室的暖氣嗎？ B：要，麻煩你，因為大樓整晚沒人之後，清晨會議室會變得相當【寒冷】，手冰冰的時候沒有人能專心。"
  },
  {
    "word": "freezing cold",
    "pos": "adj.phr.",
    "cn_def": "冷得刺骨的；極冷的",
    "en_def": "extremely cold",
    "sentence": "A: Why did the delivery driver ask to wait inside the warehouse office instead of staying in his truck as usual? B: The heater in his truck broke down this morning, and it was {{BLANK}} outside with strong winds, so the manager let him sit by the radiator and have some hot coffee.",
    "cn": "A：送貨司機為什麼要求在倉庫辦公室裡等，而不是像平常一樣待在卡車上？ B：他卡車上的暖氣今天早上壞了，外面又【冷得刺骨】還颳著強風，所以經理讓他坐在暖氣旁邊喝杯熱咖啡。"
  },
  {
    "word": "gloomy",
    "pos": "adj.",
    "cn_def": "陰沉的；昏暗的",
    "en_def": "dark and grey, often making people feel sad",
    "sentence": "A: Why does everyone in the sales department seem so tired and quiet this week, even though our numbers are good? B: It has been dark, rainy, and {{BLANK}} for seven days in a row, so the manager is planning to buy brighter lights and bring in snacks to lift people's mood.",
    "cn": "A：為什麼業務部的大家這週看起來都那麼疲倦又安靜，即使我們的業績很好？ B：已經連續七天又暗又下雨又【陰沉】，所以經理打算買亮一點的燈，並帶點心來提振大家的心情。"
  },
  {
    "word": "clear",
    "pos": "adj.",
    "cn_def": "晴朗的；無雲的",
    "en_def": "with no clouds or fog",
    "sentence": "A: Will the helicopter tour of the coastline for our visiting investors still go ahead this afternoon as planned? B: Yes, the pilot just called to confirm that the sky is completely {{BLANK}} now that the morning fog has gone, so the investors will have a perfect view of the new resort site.",
    "cn": "A：為來訪投資人安排的海岸線直升機導覽，今天下午還會照計畫進行嗎？ B：會，飛行員剛打電話確認，早上的霧已經散了，現在天空完全【晴朗】，所以投資人可以清楚看到新度假村的預定地。"
  },
  {
    "word": "drizzle",
    "pos": "n.",
    "cn_def": "毛毛雨；細雨",
    "en_def": "very light rain in small drops",
    "sentence": "A: Do we really need to cancel the outdoor product photo shoot just because it is a little wet outside today? B: No, it is only a light {{BLANK}}, so the photographer suggests moving the models under the café's large umbrellas and continuing the shoot as long as the cameras stay dry.",
    "cn": "A：只因為今天外面有點濕，我們真的需要取消戶外產品拍攝嗎？ B：不用，只是輕微的【毛毛雨】，所以攝影師建議把模特兒移到咖啡廳的大傘下面，只要相機保持乾燥就繼續拍攝。"
  },
  {
    "word": "humid",
    "pos": "adj.",
    "cn_def": "潮濕的；濕熱的",
    "en_def": "with a lot of water in the air, often hot and sticky",
    "sentence": "A: Why are the paper samples in the storage room curling up at the edges, even though we kept them in boxes? B: The air in that room is very {{BLANK}} during the summer rainy season, so we should buy a dehumidifier and keep the windows closed to protect the paper from moisture.",
    "cn": "A：儲藏室裡的紙張樣品為什麼邊緣都捲起來了，我們明明都放在箱子裡？ B：夏季雨季時那個房間的空氣非常【潮濕】，所以我們應該買一台除濕機並關好窗戶，保護紙張不受濕氣影響。"
  },
  {
    "word": "snow-covered",
    "pos": "adj.",
    "cn_def": "被雪覆蓋的",
    "en_def": "covered with snow",
    "sentence": "A: How did the sales team get to the ski resort for the client meeting after the roads were closed last night? B: The resort sent a special bus with chains on its tires, and it drove slowly up the {{BLANK}} mountain road, so they arrived safely just before the meeting started.",
    "cn": "A：昨晚道路封閉後，業務團隊是怎麼到滑雪度假村參加客戶會議的？ B：度假村派了一輛輪胎裝有雪鏈的專車，慢慢開上【被雪覆蓋的】山路，所以他們在會議開始前及時安全抵達。"
  },
  {
    "word": "heavy snow",
    "pos": "n.phr.",
    "cn_def": "大雪",
    "en_def": "a large amount of snow falling",
    "sentence": "A: Why was the shipment of office chairs from our supplier in Hokkaido delayed by almost a week? B: Days of {{BLANK}} in northern Japan closed the airport and several main roads, so the trucks could not reach the port until the weather finally improved last Friday, and our order left on the next ship.",
    "cn": "A：我們北海道供應商的辦公椅貨物為什麼延誤了將近一個星期？ B：日本北部連續好幾天下【大雪】，機場和幾條主要道路都封閉了，所以卡車直到上週五天氣終於好轉才抵達港口，我們的訂單才搭上下一班船出貨。"
  },
  {
    "word": "frosty",
    "pos": "adj.",
    "cn_def": "結霜的；嚴寒的",
    "en_def": "so cold that a thin white layer of ice forms on things",
    "sentence": "A: Why did the gardener cover all the young plants outside the office entrance with plastic sheets last night? B: The weather report warned that the ground would be {{BLANK}} early this morning, and the gardener was worried the ice crystals would damage the leaves before the sun came out.",
    "cn": "A：園丁昨晚為什麼要用塑膠布把辦公室入口外面所有的幼苗都蓋起來？ B：天氣報告警告今天清晨地面會【結霜】，園丁擔心太陽出來之前冰晶會傷害葉子。"
  },
  {
    "word": "snowstorm",
    "pos": "n.",
    "cn_def": "暴風雪",
    "en_def": "a storm with a lot of snow and strong wind",
    "sentence": "A: Is the sales conference in Chicago still happening, or should I ask the travel agent to change my flight? B: A big {{BLANK}} is expected to hit the city on Thursday, and the organizers have already moved the event online, so you should cancel your flight and ask for a refund.",
    "cn": "A：芝加哥的業務會議還會照常舉行嗎？還是我應該請旅行社幫我改機票？ B：預計星期四會有一場大【暴風雪】侵襲該市，主辦單位已經把活動改成線上舉行了，所以你應該取消機票並申請退款。"
  },
  {
    "word": "hail",
    "pos": "n.",
    "cn_def": "冰雹",
    "en_def": "small balls of ice that fall from the sky like rain",
    "sentence": "A: Why are there so many small dents on the roofs of the new cars parked in the dealership's front lot? B: A sudden storm brought {{BLANK}} the size of golf balls yesterday afternoon, and we did not have time to move the cars indoors, so the insurance company is sending someone to check them.",
    "cn": "A：經銷商前面停車場停的新車車頂上為什麼有那麼多小凹痕？ B：昨天下午一場突如其來的暴風雨下了高爾夫球大小的【冰雹】，我們來不及把車移到室內，所以保險公司要派人來檢查。"
  },
  {
    "word": "high wind",
    "pos": "n.phr.",
    "cn_def": "強風",
    "en_def": "very strong wind",
    "sentence": "A: Why have the workers stopped putting up the large advertising sign on the roof of the shopping mall? B: The weather office issued a {{BLANK}} warning for this afternoon, and the safety manager decided it was too dangerous to lift the heavy sign with the crane until tomorrow.",
    "cn": "A：工人為什麼停止在購物中心屋頂上架設大型廣告看板？ B：氣象局發布了今天下午的【強風】警報，安全主管認為在明天之前用吊車吊起沉重的看板太危險了。"
  },
  {
    "word": "breeze",
    "pos": "n.",
    "cn_def": "微風",
    "en_def": "a light, gentle wind",
    "sentence": "A: Is it comfortable to have lunch on the restaurant's rooftop terrace in July, or will our guests feel too hot? B: It is actually very pleasant up there, because a cool {{BLANK}} comes in from the harbor in the afternoon, and the waiters also put up large umbrellas for shade.",
    "cn": "A：七月在餐廳的屋頂露台吃午餐舒服嗎？還是我們的客人會覺得太熱？ B：其實上面非常舒服，因為下午會有涼爽的【微風】從港口吹來，服務生也會撐起大傘遮陽。"
  },
  {
    "word": "smog",
    "pos": "n.",
    "cn_def": "霧霾；煙霧",
    "en_def": "dirty air made of smoke, fog and pollution",
    "sentence": "A: Why did the hotel recommend that our visitors stay indoors and use the gym instead of jogging along the river this morning? B: There was thick {{BLANK}} over the city because of traffic and factory pollution, and the air quality was so poor that people with breathing problems were told to avoid exercise outside.",
    "cn": "A：飯店為什麼建議我們的訪客今天早上待在室內使用健身房，而不要沿著河邊慢跑？ B：因為交通和工廠污染，城市上空籠罩著濃厚的【霧霾】，空氣品質差到有呼吸問題的人都被告知要避免在戶外運動。"
  },
  {
    "word": "light rain",
    "pos": "n.phr.",
    "cn_def": "小雨",
    "en_def": "rain that falls gently and not very much",
    "sentence": "A: Should we put up the tent over the registration desk for the charity run, or will the weather stay nice? B: The forecast says there will only be some {{BLANK}} in the morning, but I think we should still put up the tent so that the volunteers and the forms stay dry.",
    "cn": "A：我們要在慈善路跑的報到桌上方搭帳篷嗎？還是天氣會一直很好？ B：預報說早上只會下一點【小雨】，但我認為我們還是應該搭帳篷，讓志工和表格保持乾燥。"
  },
  {
    "word": "downpour",
    "pos": "n.",
    "cn_def": "傾盆大雨",
    "en_def": "a lot of rain falling suddenly in a short time",
    "sentence": "A: Why are your shoes and trousers completely wet, and did you not bring an umbrella to the client's office today? B: I did bring one, but a sudden {{BLANK}} started just as I left the subway station, and the wind was so strong that my umbrella turned inside out in seconds.",
    "cn": "A：你的鞋子和褲子為什麼全濕了？你今天去客戶辦公室沒帶傘嗎？ B：我有帶，但我一走出地鐵站就突然下起【傾盆大雨】，風又大到我的傘幾秒鐘就被吹得翻過去了。"
  },
  {
    "word": "boiling hot",
    "pos": "adj.phr.",
    "cn_def": "酷熱的；熱得要命的",
    "en_def": "extremely hot",
    "sentence": "A: Why did the construction company change the workers' hours so that they now start at five in the morning? B: It has been {{BLANK}} every afternoon this month, often over thirty-seven degrees, so the company decided to finish outdoor work before noon to protect the workers' health.",
    "cn": "A：建設公司為什麼把工人的工時改成現在早上五點就開始？ B：這個月每天下午都【熱得要命】，常常超過三十七度，所以公司決定在中午前完成戶外工作，以保護工人的健康。"
  },
  {
    "word": "sunshine",
    "pos": "n.",
    "cn_def": "陽光",
    "en_def": "the light and heat that come from the sun",
    "sentence": "A: Why are so many hotels on the island fully booked in March, even though it is not a holiday season? B: Visitors from northern Europe want to escape their dark winters, and the island offers bright {{BLANK}} almost every day, so tour companies send large groups there at that time.",
    "cn": "A：島上這麼多飯店為什麼三月都客滿了，即使那時候不是假期旺季？ B：來自北歐的遊客想逃離他們黑暗的冬天，而這座島幾乎每天都有明亮的【陽光】，所以旅行社會在那時候送大批旅行團過去。"
  },
  {
    "word": "dry",
    "pos": "adj.",
    "cn_def": "乾燥的；乾旱的",
    "en_def": "with little or no rain or water",
    "sentence": "A: Why did the farm supplier raise the price of fresh vegetables for our company cafeteria this month? B: The weather has been very {{BLANK}} with almost no rain since June, so farmers have had to pay much more for water, and many crops have grown smaller than usual.",
    "cn": "A：農產品供應商這個月為什麼調漲了我們公司餐廳的新鮮蔬菜價格？ B：從六月以來天氣一直非常【乾燥】，幾乎沒下雨，所以農民必須花更多錢買水，很多作物也長得比平常小。"
  },
  {
    "word": "heat stroke",
    "pos": "n.phr.",
    "cn_def": "中暑",
    "en_def": "a serious illness caused by staying too long in great heat",
    "sentence": "A: Why did the event manager set up extra water stations and shaded rest areas for the outdoor music festival? B: Last year two staff members suffered {{BLANK}} after working for hours in the strong sun, so this year she wants everyone to drink water often and take regular breaks.",
    "cn": "A：活動經理為什麼在戶外音樂節增設了額外的飲水站和遮蔭休息區？ B：去年有兩名工作人員在烈日下工作好幾個小時後【中暑】，所以今年她希望每個人都常喝水並定時休息。"
  }
];

const MCQS = [
  {
    "q": "Before booking the outdoor venue, the planner checked the weekly weather _____. It predicted sunny skies for the entire weekend.",
    "options": [
      "forecast",
      "smog",
      "hail",
      "breeze"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The warehouse must keep the medicine below eight _____ at all times. Higher temperatures could make the products unsafe for patients.",
    "options": [
      "heavy snow",
      "high wind",
      "degrees Celsius",
      "light rain"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Our branch in southern Spain enjoys _____ winters with temperatures rarely below ten degrees. Staff there seldom need heavy coats.",
    "options": [
      "frosty",
      "mild",
      "snow-covered",
      "boiling hot"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Please bring a _____ sweater to the mountain retreat next week. Evenings there can be quite cold, even in early autumn.",
    "options": [
      "humid",
      "frosty",
      "gloomy",
      "warm"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The air conditioning in the meeting room was set too low. Several guests felt _____ and asked for the temperature to be raised.",
    "options": [
      "humid",
      "mild",
      "chilly",
      "dry"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The heating system in the warehouse broke down during the night. By morning the building was _____, and workers wore their coats inside.",
    "options": [
      "freezing cold",
      "boiling hot",
      "humid",
      "mild"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "After a week of dark, _____ skies, the sun finally came out on Friday. Many employees went outside to enjoy their lunch break.",
    "options": [
      "clear",
      "dry",
      "boiling hot",
      "gloomy"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The pilot announced that the skies over Tokyo were _____ with no clouds at all. Passengers on the left side would see Mount Fuji.",
    "options": [
      "gloomy",
      "clear",
      "humid",
      "frosty"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "It was only a light _____ when the guests arrived at the garden party. Most of them did not even open their umbrellas.",
    "options": [
      "drizzle",
      "downpour",
      "snowstorm",
      "smog"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Hong Kong is very hot and _____ in August. Visitors should choose light clothing that dries quickly and lets air pass through.",
    "options": [
      "frosty",
      "chilly",
      "humid",
      "snow-covered"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The ski resort's brochure shows guests skiing down _____ slopes under a bright blue sky. Bookings usually increase after the first winter storm.",
    "options": [
      "humid",
      "snow-covered",
      "boiling hot",
      "gloomy"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "All flights out of Denver were canceled because of _____ overnight. The airport needed several hours to clear the runways with snowplows.",
    "options": [
      "light rain",
      "sunshine",
      "heat stroke",
      "heavy snow"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "On _____ mornings, the parking lot can become slippery with thin ice. Please drive slowly when you arrive at the office.",
    "options": [
      "humid",
      "boiling hot",
      "frosty",
      "dry"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The trade fair in Montreal was postponed because a severe _____ was expected. Deep snow and strong winds could make travel dangerous.",
    "options": [
      "snowstorm",
      "drizzle",
      "breeze",
      "sunshine"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The storm brought large pieces of _____ that broke several windows in the factory. Workers swept up the ice before production restarted.",
    "options": [
      "smog",
      "sunshine",
      "breeze",
      "hail"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Because of a _____ warning, the outdoor concert stage was taken down early. Organizers feared the lights and speakers might be blown over.",
    "options": [
      "light rain",
      "high wind",
      "degrees Celsius",
      "heat stroke"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The hotel's seaside café is popular in summer. A gentle _____ from the ocean keeps customers cool even on hot afternoons.",
    "options": [
      "breeze",
      "hail",
      "smog",
      "snowstorm"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "City officials asked drivers to use public transportation for three days. Heavy _____ caused by traffic had made the air dangerous to breathe.",
    "options": [
      "breeze",
      "sunshine",
      "smog",
      "drizzle"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The forecast shows only _____ tomorrow morning, so the outdoor training will continue. Please bring a raincoat just in case.",
    "options": [
      "heavy snow",
      "light rain",
      "heat stroke",
      "degrees Celsius"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "A sudden _____ flooded the street outside our store within minutes. Customers waited inside until the heavy rain finally stopped.",
    "options": [
      "breeze",
      "drizzle",
      "smog",
      "downpour"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The bus's air conditioning stopped working on the way to the airport. Inside it was _____, and passengers were sweating heavily.",
    "options": [
      "freezing cold",
      "frosty",
      "boiling hot",
      "snow-covered"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The resort promises guests more than three hundred days of _____ each year. It is a perfect place for anyone who loves the beach.",
    "options": [
      "sunshine",
      "smog",
      "hail",
      "drizzle"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Please water the plants in the lobby every morning. The air in the building is very _____ because the heaters run all day.",
    "options": [
      "humid",
      "frosty",
      "gloomy",
      "dry"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Two delivery workers were treated for _____ after unloading trucks under the hot afternoon sun. The company now provides cold drinks.",
    "options": [
      "high wind",
      "heat stroke",
      "light rain",
      "heavy snow"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "According to the latest _____, the typhoon will reach the coast on Tuesday. The factory will close early to protect its staff.",
    "options": [
      "forecast",
      "breeze",
      "sunshine",
      "drizzle"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Once the fog lifted, the view from the conference room became _____. Guests could see all the way across the bay.",
    "options": [
      "gloomy",
      "humid",
      "clear",
      "frosty"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The wooden furniture in the storage room has started to bend. The room becomes extremely _____ during the rainy season.",
    "options": [
      "chilly",
      "humid",
      "frosty",
      "snow-covered"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "We opened all the windows to let in the evening _____. The fresh air made the crowded office feel much more comfortable.",
    "options": [
      "hail",
      "smog",
      "downpour",
      "breeze"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The marathon was stopped halfway through by a heavy _____. Runners could barely see the road through the falling rain.",
    "options": [
      "breeze",
      "sunshine",
      "downpour",
      "smog"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The region has had almost no rain for five months. Because the land is so _____, fires spread quickly through the forests.",
    "options": [
      "dry",
      "humid",
      "chilly",
      "gloomy"
    ],
    "answer": 0,
    "vocabIndex": 22
  }
];

const LOOKUP = {
  "forecast": {
    "pos": "n.",
    "en_def": "a statement about what the weather will be like soon",
    "cn_def": "預報；預測"
  },
  "degrees celsius": {
    "pos": "n.phr.",
    "en_def": "units for measuring temperature in which water freezes at 0",
    "cn_def": "攝氏度"
  },
  "mild": {
    "pos": "adj.",
    "en_def": "not too hot and not too cold",
    "cn_def": "溫和的；暖和的"
  },
  "warm": {
    "pos": "adj.",
    "en_def": "a little hot in a pleasant way; keeping you from feeling cold",
    "cn_def": "溫暖的；保暖的"
  },
  "chilly": {
    "pos": "adj.",
    "en_def": "cold enough to make you feel uncomfortable",
    "cn_def": "寒冷的；涼颼颼的"
  },
  "freezing cold": {
    "pos": "adj.phr.",
    "en_def": "extremely cold",
    "cn_def": "冷得刺骨的；極冷的"
  },
  "gloomy": {
    "pos": "adj.",
    "en_def": "dark and grey, often making people feel sad",
    "cn_def": "陰沉的；昏暗的"
  },
  "clear": {
    "pos": "adj.",
    "en_def": "with no clouds or fog",
    "cn_def": "晴朗的；無雲的"
  },
  "drizzle": {
    "pos": "n.",
    "en_def": "very light rain in small drops",
    "cn_def": "毛毛雨；細雨"
  },
  "humid": {
    "pos": "adj.",
    "en_def": "with a lot of water in the air, often hot and sticky",
    "cn_def": "潮濕的；濕熱的"
  },
  "snow-covered": {
    "pos": "adj.",
    "en_def": "covered with snow",
    "cn_def": "被雪覆蓋的"
  },
  "heavy snow": {
    "pos": "n.phr.",
    "en_def": "a large amount of snow falling",
    "cn_def": "大雪"
  },
  "frosty": {
    "pos": "adj.",
    "en_def": "so cold that a thin white layer of ice forms on things",
    "cn_def": "結霜的；嚴寒的"
  },
  "snowstorm": {
    "pos": "n.",
    "en_def": "a storm with a lot of snow and strong wind",
    "cn_def": "暴風雪"
  },
  "hail": {
    "pos": "n.",
    "en_def": "small balls of ice that fall from the sky like rain",
    "cn_def": "冰雹"
  },
  "high wind": {
    "pos": "n.phr.",
    "en_def": "very strong wind",
    "cn_def": "強風"
  },
  "breeze": {
    "pos": "n.",
    "en_def": "a light, gentle wind",
    "cn_def": "微風"
  },
  "smog": {
    "pos": "n.",
    "en_def": "dirty air made of smoke, fog and pollution",
    "cn_def": "霧霾；煙霧"
  },
  "light rain": {
    "pos": "n.phr.",
    "en_def": "rain that falls gently and not very much",
    "cn_def": "小雨"
  },
  "downpour": {
    "pos": "n.",
    "en_def": "a lot of rain falling suddenly in a short time",
    "cn_def": "傾盆大雨"
  },
  "boiling hot": {
    "pos": "adj.phr.",
    "en_def": "extremely hot",
    "cn_def": "酷熱的；熱得要命的"
  },
  "sunshine": {
    "pos": "n.",
    "en_def": "the light and heat that come from the sun",
    "cn_def": "陽光"
  },
  "dry": {
    "pos": "adj.",
    "en_def": "with little or no rain or water",
    "cn_def": "乾燥的；乾旱的"
  },
  "heat stroke": {
    "pos": "n.phr.",
    "en_def": "a serious illness caused by staying too long in great heat",
    "cn_def": "中暑"
  }
};

const EXTRA_GLOSSES = {};
