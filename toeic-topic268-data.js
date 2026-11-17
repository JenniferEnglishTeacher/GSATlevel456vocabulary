// Topic 268 Quiz Data: Outer Space 外太空
// Source word list: https://www.examword.com/group-topic/outer-space — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T268 - Outer Space 外太空",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "universe",
    "pos": "n.",
    "cn_def": "宇宙；全世界",
    "en_def": "all of space and everything in it",
    "sentence": "A: Why did the science museum decide to stay open late every Friday this month, even though it costs extra to pay the security staff? B: The new exhibition about how the {{BLANK}} began is very popular with families and office workers, so the director wants more visitors to see it after work.",
    "cn": "A：為什麼科學博物館決定這個月每週五都延長開放時間，即使要多付保全人員的薪水？ B：關於【宇宙】如何起源的新展覽非常受家庭和上班族歡迎，所以館長希望讓更多人下班後能來參觀。"
  },
  {
    "word": "galaxy",
    "pos": "n.",
    "cn_def": "星系；銀河",
    "en_def": "a very large group of stars",
    "sentence": "A: What did the designer show at the marketing meeting for the new smartphone campaign that everyone liked so much? B: She showed a beautiful poster of a spiral {{BLANK}} full of bright stars behind the phone, and the manager said it made the product look modern and exciting for young customers.",
    "cn": "A：設計師在新手機宣傳活動的行銷會議上展示了什麼，讓大家這麼喜歡？ B：她展示了一張美麗的海報，手機後方是一個布滿明亮星星的螺旋【星系】，經理說這讓產品對年輕顧客來說看起來既現代又令人興奮。"
  },
  {
    "word": "solar system",
    "pos": "n.phr.",
    "cn_def": "太陽系",
    "en_def": "the sun and the planets that move around it",
    "sentence": "A: Is the planetarium's new show suitable for the children from our employees' families who are coming on the company trip next Saturday? B: Yes, it explains each planet in our {{BLANK}} with colorful pictures and simple language, and the guide will answer questions for about fifteen minutes after the show ends.",
    "cn": "A：天文館的新節目適合下週六參加公司旅遊的員工家庭小孩嗎？ B：適合，它用色彩豐富的圖片和簡單的語言介紹我們【太陽系】中的每一顆行星，表演結束後導覽員還會回答大約十五分鐘的問題。"
  },
  {
    "word": "planet",
    "pos": "n.",
    "cn_def": "行星",
    "en_def": "a large round object in space that moves around a star",
    "sentence": "A: Why are so many reporters waiting outside the research center this afternoon when the press conference doesn't start until five? B: The scientists have found a new {{BLANK}} that might have water on it, and they plan to share their photos and data with the public for the first time today.",
    "cn": "A：為什麼記者會五點才開始，今天下午卻有這麼多記者在研究中心外面等候？ B：科學家發現了一顆可能有水的新【行星】，他們打算今天首次向大眾公開他們的照片和數據。"
  },
  {
    "word": "star",
    "pos": "n.",
    "cn_def": "星星；恆星",
    "en_def": "a huge ball of burning gas that looks like a bright point in the night sky",
    "sentence": "A: Why did the hotel move the outdoor dinner for our guests from the garden to the rooftop terrace tonight? B: The rooftop is far from the city lights, so the guests can enjoy a clear view of every {{BLANK}} in the sky while they eat, and the manager thought it would be more memorable.",
    "cn": "A：飯店今晚為什麼把我們賓客的戶外晚餐從花園移到屋頂露台？ B：屋頂遠離城市燈光，所以賓客用餐時可以清楚看到天空中的每一顆【星星】，經理認為這樣會更令人難忘。"
  },
  {
    "word": "moon",
    "pos": "n.",
    "cn_def": "月亮；衛星",
    "en_def": "the large round object that moves around the Earth and shines at night",
    "sentence": "A: Have you decided on a date for the company's Mid-Autumn barbecue, since many staff members want to bring their families this year? B: We chose the Saturday when the {{BLANK}} is full, because the park will be bright at night, and the event team has already booked tables near the lake.",
    "cn": "A：你決定公司中秋烤肉的日期了嗎？今年很多員工想帶家人一起來。 B：我們選了【月亮】最圓的那個星期六，因為那晚公園會很明亮，活動團隊已經訂好了湖邊的桌子。"
  },
  {
    "word": "asteroid",
    "pos": "n.",
    "cn_def": "小行星",
    "en_def": "a large rock that moves around the sun",
    "sentence": "A: What was the documentary that the training team showed during lunch about, and why were people talking about it all afternoon? B: It was about a huge {{BLANK}} that passed close to the Earth last year, and it explained how scientists track dangerous space rocks and plan ways to protect our planet.",
    "cn": "A：培訓團隊午餐時播放的紀錄片是關於什麼的？為什麼大家整個下午都在討論？ B：內容是關於去年從地球附近經過的一顆巨大【小行星】，它解釋了科學家如何追蹤危險的太空岩石，並規劃保護地球的方法。"
  },
  {
    "word": "comet",
    "pos": "n.",
    "cn_def": "彗星",
    "en_def": "an object in space made of ice and dust with a long bright tail",
    "sentence": "A: Why did so many of our coworkers leave the office early yesterday and drive to the mountains together? B: The news said a bright {{BLANK}} with a long tail could be seen just after sunset, so they wanted to get away from the city lights and take photos before it disappeared for many years.",
    "cn": "A：為什麼昨天我們很多同事提早下班，一起開車上山？ B：新聞說日落後可以看到一顆拖著長尾巴的明亮【彗星】，所以他們想遠離城市燈光，在它消失許多年之前拍些照片。"
  },
  {
    "word": "meteor",
    "pos": "n.",
    "cn_def": "流星",
    "en_def": "a piece of rock from space that burns brightly as it falls",
    "sentence": "A: Did you see the email about the night tour that the travel agency is offering to our clients from Japan next week? B: Yes, they will take the group to a quiet beach where they can watch a {{BLANK}} shower, and the guide will provide blankets, hot drinks, and a short talk about the night sky.",
    "cn": "A：你有看到旅行社下週為我們日本客戶提供的夜間行程的電子郵件嗎？ B：有，他們會帶團體到一個安靜的海灘觀賞【流星】雨，導遊還會提供毯子、熱飲，並簡短介紹夜空。"
  },
  {
    "word": "orbit",
    "pos": "n.",
    "cn_def": "軌道",
    "en_def": "the curved path of an object moving around a planet or star",
    "sentence": "A: Why has the satellite company delayed the release of its new internet service in rural areas until next spring? B: One of its satellites did not reach the correct {{BLANK}} after the launch, so engineers need more time to fix the problem before thousands of customers can connect safely.",
    "cn": "A：為什麼衛星公司把鄉村地區新網路服務的推出延到明年春天？ B：它的一顆衛星在發射後沒有進入正確的【軌道】，所以工程師需要更多時間解決問題，才能讓數千名客戶安全連線。"
  },
  {
    "word": "astronaut",
    "pos": "n.",
    "cn_def": "太空人",
    "en_def": "a person who travels into space",
    "sentence": "A: Who is giving the keynote speech at this year's leadership conference, and why did the organizers choose that person? B: A retired {{BLANK}} who spent six months on a space station will speak, because she can share real stories about teamwork, stress, and making quick decisions in dangerous situations.",
    "cn": "A：今年領導力研討會的主題演講是誰？主辦單位為什麼選擇這個人？ B：一位曾在太空站待了六個月的退休【太空人】將會演講，因為她可以分享關於團隊合作、壓力以及在危險情況下快速做決定的真實故事。"
  },
  {
    "word": "rocket",
    "pos": "n.",
    "cn_def": "火箭",
    "en_def": "a vehicle shaped like a tube that flies into space",
    "sentence": "A: Why is the hotel near the coast fully booked for the second week of March, even though it is not a holiday? B: A private company is sending a {{BLANK}} into space from the nearby base that week, and thousands of visitors want to watch the launch from the beach.",
    "cn": "A：為什麼海邊附近的飯店三月第二週全部客滿，即使那不是假期？ B：那週有一家民間公司要從附近的基地把一枚【火箭】送上太空，數千名遊客想從海灘觀看發射。"
  },
  {
    "word": "satellite",
    "pos": "n.",
    "cn_def": "人造衛星",
    "en_def": "a machine sent into space to move around the Earth and send information",
    "sentence": "A: Why was the video call with our branch office in Kenya so clear today when it is usually slow and keeps freezing? B: They finally switched to a {{BLANK}} internet service last week, so the connection is much faster and more stable, even in their small town far from the city.",
    "cn": "A：今天和肯亞分公司的視訊通話為什麼這麼清楚？平常都很慢而且一直卡住。 B：他們上週終於改用【衛星】網路服務，所以即使在遠離城市的小鎮，連線也快得多、穩定得多。"
  },
  {
    "word": "telescope",
    "pos": "n.",
    "cn_def": "望遠鏡",
    "en_def": "an instrument that makes faraway things look bigger and closer",
    "sentence": "A: What did the sales team buy for the manager's retirement gift, since she always talks about watching the night sky? B: We bought her a small {{BLANK}} that is easy to carry, so she can look at the moon and planets from her garden or take it with her when she travels.",
    "cn": "A：既然經理總是說她喜歡看夜空，業務團隊買了什麼當她的退休禮物？ B：我們買了一台方便攜帶的小型【望遠鏡】給她，這樣她可以在花園裡看月亮和行星，或在旅行時帶著它。"
  },
  {
    "word": "gravity",
    "pos": "n.",
    "cn_def": "重力；地心引力",
    "en_def": "the force that pulls things toward the ground or toward a planet",
    "sentence": "A: Why did the science teacher bring a ball and a feather to the community workshop for parents last night? B: She wanted to show how {{BLANK}} pulls everything toward the ground, and she explained why the feather falls slowly because of the air, which helped the parents understand their children's homework.",
    "cn": "A：為什麼自然老師昨晚帶一顆球和一根羽毛到家長社區工作坊？ B：她想示範【重力】如何把所有東西拉向地面，並解釋羽毛因為空氣而掉得比較慢，這幫助家長理解孩子的作業。"
  },
  {
    "word": "zero gravity",
    "pos": "n.phr.",
    "cn_def": "無重力",
    "en_def": "a condition in which things have no weight and float",
    "sentence": "A: Why are the engineers testing the new coffee machine inside a special airplane that flies up and down? B: The machine is designed for astronauts, so they must check that it can pour drinks safely in {{BLANK}}, where liquids float in the air instead of falling into a cup.",
    "cn": "A：為什麼工程師在一架會上下飛行的特殊飛機裡測試新咖啡機？ B：這台機器是為太空人設計的，所以他們必須確認它能在【無重力】狀態下安全倒出飲料，因為在那裡液體會飄在空中，而不是落進杯子裡。"
  },
  {
    "word": "black hole",
    "pos": "n.phr.",
    "cn_def": "黑洞",
    "en_def": "an area in space that pulls in everything, even light",
    "sentence": "A: Why does the finance director keep calling the old marketing project a disaster in every budget meeting this quarter? B: He says it was like a {{BLANK}} that swallowed money for two years without bringing in any new customers, so he wants every future project to have clear goals and monthly reports.",
    "cn": "A：財務長為什麼這一季每次預算會議都把舊的行銷專案稱為一場災難？ B：他說那就像一個【黑洞】，兩年來吞掉大筆資金卻沒有帶來任何新客戶，所以他要求未來每個專案都要有明確目標和每月報告。"
  },
  {
    "word": "nebula",
    "pos": "n.",
    "cn_def": "星雲",
    "en_def": "a huge cloud of gas and dust in space",
    "sentence": "A: Where did you find the beautiful photo on the cover of our new company calendar, and do we have permission to use it? B: It shows a colorful {{BLANK}} taken by a space telescope, and the space agency allows businesses to use its images for free as long as we give them credit.",
    "cn": "A：你在哪裡找到我們新公司月曆封面那張漂亮的照片？我們有使用許可嗎？ B：那是太空望遠鏡拍攝的一團色彩繽紛的【星雲】，太空總署允許企業免費使用其圖片，只要我們註明出處就可以。"
  },
  {
    "word": "constellation",
    "pos": "n.",
    "cn_def": "星座",
    "en_def": "a group of stars that forms a shape or pattern",
    "sentence": "A: What activity has the camp leader planned for the employees on the second night of the team-building trip in the mountains? B: After dinner, she will teach everyone how to find a famous {{BLANK}} in the night sky using a simple map, and the team that finds the most shapes will win a prize.",
    "cn": "A：營隊領隊為員工在山上團隊建立旅行的第二晚安排了什麼活動？ B：晚餐後，她會教大家如何用簡單的星圖在夜空中找到一個著名的【星座】，找到最多圖形的隊伍將會獲得獎品。"
  },
  {
    "word": "cosmos",
    "pos": "n.",
    "cn_def": "宇宙",
    "en_def": "the universe, seen as an ordered system",
    "sentence": "A: Why did the bookstore put so many science books at the front of the store near the cash registers this month? B: A popular TV series about the {{BLANK}} started last week, and customers keep asking for books that explain the stars, planets, and the history of space in simple language.",
    "cn": "A：書店這個月為什麼把這麼多科學書放在店門口的收銀台附近？ B：一部關於【宇宙】的熱門電視影集上週開播了，顧客一直詢問用淺顯語言解釋星星、行星和太空歷史的書。"
  },
  {
    "word": "exploration",
    "pos": "n.",
    "cn_def": "探索；探險",
    "en_def": "the act of traveling to a place to learn about it",
    "sentence": "A: Why is the engineering firm hiring so many new staff members with experience in robotics and computer science this year? B: It just won a big contract to build machines for space {{BLANK}}, so it needs skilled workers to design robots that can study the surface of distant planets.",
    "cn": "A：工程公司今年為什麼要招募這麼多有機器人和電腦科學經驗的新員工？ B：它剛贏得一份為太空【探索】製造機器的大合約，所以需要技術熟練的人員來設計能研究遙遠行星表面的機器人。"
  },
  {
    "word": "launch",
    "pos": "v.",
    "cn_def": "發射；推出",
    "en_def": "to send a rocket or spacecraft into the sky",
    "sentence": "A: Why did the communications company reschedule its product presentation from Monday to Thursday afternoon? B: The team wanted to {{BLANK}} its new weather satellite first, and the engineers needed to wait for clear skies and calm winds before the rocket could leave the ground safely.",
    "cn": "A：通訊公司為什麼把產品發表會從星期一改到星期四下午？ B：團隊想先【發射】新的氣象衛星，工程師必須等到晴朗無雲、風平浪靜的天氣，火箭才能安全離開地面。"
  },
  {
    "word": "mission",
    "pos": "n.",
    "cn_def": "任務",
    "en_def": "an important trip or job, especially a trip into space",
    "sentence": "A: Why has the manager asked our team to prepare a short video about the new software for the space agency's visitors? B: The software helped control the robot during the recent {{BLANK}} to Mars, so the agency wants to show visitors how companies like ours support space research.",
    "cn": "A：經理為什麼要我們團隊為太空總署的訪客準備一段關於新軟體的短片？ B：這套軟體在最近的火星【任務】中協助控制機器人，所以太空總署想向訪客展示像我們這樣的公司如何支持太空研究。"
  },
  {
    "word": "spacecraft",
    "pos": "n.",
    "cn_def": "太空船；太空飛行器",
    "en_def": "a vehicle that travels in space",
    "sentence": "A: Why did our factory receive such a large order for special metal parts from a company in Florida last month? B: They are building a new {{BLANK}} that will carry people to the moon, and they need light but strong parts that can handle very high and very low temperatures.",
    "cn": "A：我們工廠上個月為什麼收到佛羅里達一家公司的大筆特殊金屬零件訂單？ B：他們正在建造一艘將載人前往月球的新【太空船】，需要能承受極高溫和極低溫、又輕又堅固的零件。"
  },
  {
    "word": "alien",
    "pos": "n.",
    "cn_def": "外星人",
    "en_def": "a creature from another planet",
    "sentence": "A: Why are there so many people wearing green costumes and silver masks in the hotel lobby this weekend? B: The hotel is hosting a science fiction fan convention, and many guests dressed up as an {{BLANK}} from their favorite movie, so the staff are taking photos with them at the front desk.",
    "cn": "A：這個週末飯店大廳為什麼有這麼多人穿著綠色服裝、戴著銀色面具？ B：飯店正在舉辦科幻迷大會，很多客人打扮成他們最喜歡的電影裡的【外星人】，所以工作人員在櫃台和他們合照。"
  },
  {
    "word": "astronomy",
    "pos": "n.",
    "cn_def": "天文學",
    "en_def": "the scientific study of stars, planets, and space",
    "sentence": "A: What kind of evening class did you sign up for at the community college, since you said you wanted to learn something new this year? B: I joined a beginner {{BLANK}} course that meets every Wednesday, and we learn how to use telescopes and recognize stars and planets from the roof of the science building.",
    "cn": "A：你今年說想學點新東西，你在社區大學報名了什麼夜間課程？ B：我參加了一門每週三上課的初級【天文學】課程，我們在科學館屋頂學習如何使用望遠鏡以及辨認星星和行星。"
  },
  {
    "word": "cosmic",
    "pos": "adj.",
    "cn_def": "宇宙的",
    "en_def": "relating to the universe or space",
    "sentence": "A: Why did the electronics company spend so much money last year testing its computer chips at a special laboratory in Switzerland? B: The chips will be used on satellites, so engineers had to check whether {{BLANK}} rays from deep space could damage them and cause errors in important data.",
    "cn": "A：電子公司去年為什麼花這麼多錢在瑞士的特殊實驗室測試它的電腦晶片？ B：這些晶片將用於衛星上，所以工程師必須確認來自深太空的【宇宙】射線是否會損壞晶片並造成重要數據出錯。"
  },
  {
    "word": "interstellar",
    "pos": "adj.",
    "cn_def": "星際的",
    "en_def": "between the stars",
    "sentence": "A: Why did the film company rent the largest theater in the city for the premiere of its new science fiction movie next Friday? B: The movie tells the story of an {{BLANK}} journey to a distant star, and the director wants the audience to enjoy the amazing sound and special effects on a giant screen.",
    "cn": "A：電影公司為什麼租下全市最大的戲院，作為下週五新科幻電影的首映場地？ B：這部電影講述一段前往遙遠恆星的【星際】旅程，導演希望觀眾能在巨大螢幕上享受驚人的音效和特效。"
  },
  {
    "word": "atmosphere",
    "pos": "n.",
    "cn_def": "大氣層；氣氛",
    "en_def": "the layer of gases around the Earth or another planet",
    "sentence": "A: Why did the weather company invite a scientist to speak to our staff during the training session this morning? B: She explained how pollution changes the Earth's {{BLANK}} and makes storms stronger, which helps our team give better advice to farmers and airlines that depend on our forecasts.",
    "cn": "A：氣象公司今天早上為什麼邀請一位科學家在培訓課程中向我們員工演講？ B：她解釋了汙染如何改變地球的【大氣層】並讓暴風雨變得更強烈，這幫助我們團隊為依賴我們預報的農民和航空公司提供更好的建議。"
  },
  {
    "word": "light-year",
    "pos": "n.",
    "cn_def": "光年",
    "en_def": "the distance that light travels in one year",
    "sentence": "A: Why did the visitors at the planetarium look so surprised when the guide talked about the star in the final part of the show? B: She explained that a {{BLANK}} is the distance light travels in one year, so the light they saw tonight actually left that star long before any of them were born.",
    "cn": "A：導覽員在節目最後談到那顆星星時，天文館的觀眾為什麼看起來這麼驚訝？ B：她解釋說一【光年】是光在一年內行進的距離，所以他們今晚看到的光其實早在他們出生之前就已經從那顆星星發出了。"
  },
  {
    "word": "space station",
    "pos": "n.phr.",
    "cn_def": "太空站",
    "en_def": "a large spacecraft where astronauts live and work for a long time",
    "sentence": "A: Why does the food company want to send samples of its new dried fruit snacks to the government research center? B: The center chooses meals for astronauts on the {{BLANK}}, and if our snacks are selected, it will be great advertising for the company all over the world.",
    "cn": "A：食品公司為什麼想把新的果乾點心樣品寄給政府研究中心？ B：該中心負責為【太空站】上的太空人挑選餐點，如果我們的點心被選中，對公司來說將是遍及全世界的絕佳廣告。"
  },
  {
    "word": "rover",
    "pos": "n.",
    "cn_def": "探測車",
    "en_def": "a vehicle that drives over the surface of a planet or moon to explore it",
    "sentence": "A: What is the engineering team working on in the large room that is always locked on the third floor? B: They are building a small {{BLANK}} with six wheels and cameras that can drive across rocky ground on Mars, and they must finish testing it before the deadline in June.",
    "cn": "A：工程團隊在三樓那間總是上鎖的大房間裡做什麼？ B：他們正在製造一台有六個輪子和攝影機的小型【探測車】，能在火星多岩石的地面上行駛，而且必須在六月截止日期前完成測試。"
  },
  {
    "word": "infinite",
    "pos": "adj.",
    "cn_def": "無限的；無窮的",
    "en_def": "without limits or end",
    "sentence": "A: Why does the new manager keep reminding us to choose only three main goals for the project instead of trying to do everything? B: She says our time and budget are not {{BLANK}}, so we must focus on the most important tasks and finish them well before we start anything new.",
    "cn": "A：新經理為什麼一直提醒我們專案只選三個主要目標，而不是什麼都想做？ B：她說我們的時間和預算並不是【無限的】，所以必須專注在最重要的任務上，把它們做好之後才開始新的工作。"
  }
];

const MCQS = [
  {
    "q": "The new science center explains how the _____ began billions of years ago. Visitors can watch a short film about it in the main hall.",
    "options": [
      "universe",
      "rover",
      "telescope",
      "satellite"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our planet is just one small part of the Milky Way _____. It contains billions of stars, according to the guide.",
    "options": [
      "orbit",
      "galaxy",
      "rocket",
      "mission"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Jupiter is the largest planet in our _____. The museum's new model shows it next to the sun and the other planets.",
    "options": [
      "black hole",
      "space station",
      "solar system",
      "zero gravity"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Scientists believe the newly discovered _____ may have water on its surface. They will study it with a powerful telescope next year.",
    "options": [
      "mission",
      "rocket",
      "atmosphere",
      "planet"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The sun is the closest _____ to the Earth. Its light reaches us in about eight minutes, the speaker explained.",
    "options": [
      "rocket",
      "star",
      "rover",
      "satellite"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Tonight the _____ will be full and very bright. The hotel has set up chairs on the roof so guests can enjoy the view.",
    "options": [
      "moon",
      "comet",
      "orbit",
      "galaxy"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "A large _____ will pass safely between the Earth and the moon next week. Experts say there is no danger of a collision.",
    "options": [
      "telescope",
      "astronaut",
      "mission",
      "asteroid"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The bright _____ had a long tail of ice and dust behind it. Many people drove to the hills to photograph it.",
    "options": [
      "satellite",
      "galaxy",
      "comet",
      "rover"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Thousands of tourists gathered on the beach to watch the _____ shower. The local hotels were fully booked for three nights.",
    "options": [
      "meteor",
      "rocket",
      "planet",
      "gravity"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The new weather satellite reached its correct _____ two hours after launch. It now circles the Earth every ninety minutes.",
    "options": [
      "galaxy",
      "telescope",
      "orbit",
      "astronomy"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The _____ spent six months living and working on the space station. She will share her experiences at our conference in May.",
    "options": [
      "rover",
      "astronaut",
      "satellite",
      "telescope"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The company plans to send its first _____ into space from the coast next spring. Hotels near the base are already fully booked.",
    "options": [
      "asteroid",
      "galaxy",
      "astronomy",
      "rocket"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Our branch office in the countryside now uses _____ internet. The connection is much faster than the old phone line.",
    "options": [
      "comet",
      "galaxy",
      "satellite",
      "meteor"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "You can see the rings of Saturn clearly through this _____. The museum lets visitors use it every Friday night.",
    "options": [
      "telescope",
      "orbit",
      "comet",
      "mission"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The Earth's _____ keeps the moon moving around our planet. Without this force, it would simply float away into space.",
    "options": [
      "astronomy",
      "exploration",
      "mission",
      "gravity"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Liquids float in the air in _____, so astronauts drink from special bags. The new design keeps drinks from escaping.",
    "options": [
      "solar system",
      "zero gravity",
      "black hole",
      "space station"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Light cannot escape from a _____ because its gravity is extremely strong. Scientists study them with special equipment.",
    "options": [
      "black hole",
      "space station",
      "solar system",
      "zero gravity"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "On the camping trip, the guide showed us how to find the _____ called Orion. It looks like a hunter made of stars.",
    "options": [
      "asteroid",
      "rover",
      "astronaut",
      "constellation"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The firm won a large contract to build robots for space _____. It will hire forty engineers this year.",
    "options": [
      "gravity",
      "exploration",
      "atmosphere",
      "astronomy"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The agency will _____ the satellite on Thursday if the weather is clear. Engineers are checking the rocket one last time.",
    "options": [
      "explore",
      "breathe",
      "launch",
      "orbit"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The robot completed its two-year _____ on Mars last month. The team will present the results at the conference.",
    "options": [
      "gravity",
      "galaxy",
      "telescope",
      "mission"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The new _____ can carry four astronauts to the moon and back. Our factory supplies some of its metal parts.",
    "options": [
      "spacecraft",
      "planet",
      "comet",
      "telescope"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "In the movie, an _____ from another planet visits a small town. Children loved the friendly green creature with big eyes.",
    "options": [
      "asteroid",
      "orbit",
      "alien",
      "atmosphere"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "My sister joined an _____ club at the community college. Members meet on the roof every Wednesday to study the stars.",
    "options": [
      "orbit",
      "astronomy",
      "asteroid",
      "atmosphere"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Engineers tested the computer chips to see if _____ rays from deep space could damage them. The chips passed every test.",
    "options": [
      "cosmic",
      "infinite",
      "empty",
      "ancient"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Pollution is changing the Earth's _____ and making storms stronger. The scientist explained this during our training session.",
    "options": [
      "galaxy",
      "atmosphere",
      "telescope",
      "astronomy"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "A _____ is the distance that light travels in one year. The guide used this unit to describe how far the stars are.",
    "options": [
      "orbit",
      "meteor",
      "rover",
      "light-year"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The astronauts on the _____ grow vegetables in a small garden. They send photos back to Earth every week.",
    "options": [
      "black hole",
      "solar system",
      "space station",
      "zero gravity"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The six-wheeled _____ drove across the rocky surface of Mars. Its cameras sent thousands of photos to the team.",
    "options": [
      "comet",
      "galaxy",
      "nebula",
      "rover"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Our budget is not _____, so we must choose only the most important projects. The manager will decide by Friday.",
    "options": [
      "infinite",
      "cosmic",
      "interstellar",
      "ancient"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "universe": {
    "pos": "n.",
    "en_def": "all of space and everything in it",
    "cn_def": "宇宙；全世界"
  },
  "galaxy": {
    "pos": "n.",
    "en_def": "a very large group of stars",
    "cn_def": "星系；銀河"
  },
  "solar system": {
    "pos": "n.phr.",
    "en_def": "the sun and the planets that move around it",
    "cn_def": "太陽系"
  },
  "planet": {
    "pos": "n.",
    "en_def": "a large round object in space that moves around a star",
    "cn_def": "行星"
  },
  "star": {
    "pos": "n.",
    "en_def": "a huge ball of burning gas that looks like a bright point in the night sky",
    "cn_def": "星星；恆星"
  },
  "moon": {
    "pos": "n.",
    "en_def": "the large round object that moves around the Earth and shines at night",
    "cn_def": "月亮；衛星"
  },
  "asteroid": {
    "pos": "n.",
    "en_def": "a large rock that moves around the sun",
    "cn_def": "小行星"
  },
  "comet": {
    "pos": "n.",
    "en_def": "an object in space made of ice and dust with a long bright tail",
    "cn_def": "彗星"
  },
  "meteor": {
    "pos": "n.",
    "en_def": "a piece of rock from space that burns brightly as it falls",
    "cn_def": "流星"
  },
  "orbit": {
    "pos": "n.",
    "en_def": "the curved path of an object moving around a planet or star",
    "cn_def": "軌道"
  },
  "astronaut": {
    "pos": "n.",
    "en_def": "a person who travels into space",
    "cn_def": "太空人"
  },
  "rocket": {
    "pos": "n.",
    "en_def": "a vehicle shaped like a tube that flies into space",
    "cn_def": "火箭"
  },
  "satellite": {
    "pos": "n.",
    "en_def": "a machine sent into space to move around the Earth and send information",
    "cn_def": "人造衛星"
  },
  "telescope": {
    "pos": "n.",
    "en_def": "an instrument that makes faraway things look bigger and closer",
    "cn_def": "望遠鏡"
  },
  "gravity": {
    "pos": "n.",
    "en_def": "the force that pulls things toward the ground or toward a planet",
    "cn_def": "重力；地心引力"
  },
  "zero gravity": {
    "pos": "n.phr.",
    "en_def": "a condition in which things have no weight and float",
    "cn_def": "無重力"
  },
  "black hole": {
    "pos": "n.phr.",
    "en_def": "an area in space that pulls in everything, even light",
    "cn_def": "黑洞"
  },
  "nebula": {
    "pos": "n.",
    "en_def": "a huge cloud of gas and dust in space",
    "cn_def": "星雲"
  },
  "constellation": {
    "pos": "n.",
    "en_def": "a group of stars that forms a shape or pattern",
    "cn_def": "星座"
  },
  "cosmos": {
    "pos": "n.",
    "en_def": "the universe, seen as an ordered system",
    "cn_def": "宇宙"
  },
  "exploration": {
    "pos": "n.",
    "en_def": "the act of traveling to a place to learn about it",
    "cn_def": "探索；探險"
  },
  "launch": {
    "pos": "v.",
    "en_def": "to send a rocket or spacecraft into the sky",
    "cn_def": "發射；推出"
  },
  "mission": {
    "pos": "n.",
    "en_def": "an important trip or job, especially a trip into space",
    "cn_def": "任務"
  },
  "spacecraft": {
    "pos": "n.",
    "en_def": "a vehicle that travels in space",
    "cn_def": "太空船；太空飛行器"
  },
  "alien": {
    "pos": "n.",
    "en_def": "a creature from another planet",
    "cn_def": "外星人"
  },
  "astronomy": {
    "pos": "n.",
    "en_def": "the scientific study of stars, planets, and space",
    "cn_def": "天文學"
  },
  "cosmic": {
    "pos": "adj.",
    "en_def": "relating to the universe or space",
    "cn_def": "宇宙的"
  },
  "interstellar": {
    "pos": "adj.",
    "en_def": "between the stars",
    "cn_def": "星際的"
  },
  "atmosphere": {
    "pos": "n.",
    "en_def": "the layer of gases around the Earth or another planet",
    "cn_def": "大氣層；氣氛"
  },
  "light-year": {
    "pos": "n.",
    "en_def": "the distance that light travels in one year",
    "cn_def": "光年"
  },
  "space station": {
    "pos": "n.phr.",
    "en_def": "a large spacecraft where astronauts live and work for a long time",
    "cn_def": "太空站"
  },
  "rover": {
    "pos": "n.",
    "en_def": "a vehicle that drives over the surface of a planet or moon to explore it",
    "cn_def": "探測車"
  },
  "infinite": {
    "pos": "adj.",
    "en_def": "without limits or end",
    "cn_def": "無限的；無窮的"
  }
};

const EXTRA_GLOSSES = {};
