// Topic 102 Quiz Data: Description Letter 描述信
// Source word list: https://www.examword.com/group-topic/description-letter — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T102 - Description Letter 描述信",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "detail",
    "pos": "n.",
    "cn_def": "細節",
    "en_def": "a small fact or piece of information",
    "sentence": "A: Did the hotel send us any information about the meeting rooms before we sign the contract for next month's sales conference? B: Yes, the manager wrote a long letter that describes every {{BLANK}} of the main hall, including the number of seats, the lighting and the sound system, so we can plan everything easily.",
    "cn": "A：在我們簽下下個月業務會議的合約之前，飯店有寄來任何關於會議室的資料嗎？ B：有，經理寫了一封長信，描述主廳的每一個【細節】，包括座位數、燈光和音響系統，所以我們可以輕鬆規劃一切。"
  },
  {
    "word": "explain",
    "pos": "v.",
    "cn_def": "解釋；說明",
    "en_def": "to make something clear or easy to understand",
    "sentence": "A: Why did the customer write to us again this week after we had already replaced her broken coffee machine? B: She wanted to {{BLANK}} that the new machine makes a loud noise every morning, and she asked us to send a technician to her café before the weekend rush begins.",
    "cn": "A：我們已經更換了她壞掉的咖啡機，為什麼那位顧客這週又寫信給我們？ B：她想【說明】新機器每天早上都會發出很大的噪音，並要求我們在週末人潮開始前派一位技師到她的咖啡店。"
  },
  {
    "word": "mention",
    "pos": "v.",
    "cn_def": "提到；提及",
    "en_def": "to speak or write about something briefly",
    "sentence": "A: Did the new employee's letter of introduction say anything about her previous work in Japan? B: Yes, she was careful to {{BLANK}} that she worked for a travel agency in Tokyo for three years, which is very useful because we are planning to open a branch office there next spring.",
    "cn": "A：新員工的自我介紹信有提到她以前在日本的工作嗎？ B：有，她特別【提到】她曾在東京一家旅行社工作三年，這非常有用，因為我們計畫明年春天在那裡開設分公司。"
  },
  {
    "word": "introduce",
    "pos": "v.",
    "cn_def": "介紹；引進",
    "en_def": "to tell people someone's name or present something new",
    "sentence": "A: How should I start the letter to the new supplier in Vietnam, since we have never worked with them before? B: To begin with, you should {{BLANK}} yourself and our company in a few short sentences, and after that describe the products we need and the date when we hope to receive them.",
    "cn": "A：因為我們以前從未和越南的新供應商合作過，我該如何開始寫給他們的信？ B：一開始，你應該用幾句簡短的話【介紹】你自己和我們公司，之後再描述我們需要的產品以及希望收到貨的日期。"
  },
  {
    "word": "share",
    "pos": "v.",
    "cn_def": "分享",
    "en_def": "to let others have or know something you have",
    "sentence": "A: Why is the marketing manager asking all the staff to write about their trip to the trade fair in Singapore last month? B: She wants everyone to {{BLANK}} their ideas and photos in a short letter, so she can put the best parts in the company newsletter that goes out in December.",
    "cn": "A：行銷經理為什麼要求所有員工寫下上個月去新加坡參加貿易展的經過？ B：她希望每個人都能在一封簡短的信中【分享】他們的想法和照片，這樣她就能把最精彩的部分放進十二月發行的公司電子報。"
  },
  {
    "word": "experience",
    "pos": "n.",
    "cn_def": "經驗；經歷",
    "en_def": "something that happens to you and affects how you feel",
    "sentence": "A: What did the guest write in the letter she sent to the hotel manager after her stay last weekend? B: She described her {{BLANK}} at the hotel in a very positive way, saying the staff were friendly, the room was spotless, and breakfast was the best she had ever had on a business trip.",
    "cn": "A：那位客人上週末住宿後寄給飯店經理的信裡寫了什麼？ B：她以非常正面的方式描述了她在飯店的【經驗】，說員工很友善、房間一塵不染，而且早餐是她出差以來吃過最好的。"
  },
  {
    "word": "event",
    "pos": "n.",
    "cn_def": "活動；事件",
    "en_def": "a planned public or social occasion",
    "sentence": "A: Why does the director want a letter describing last Friday's charity dinner for the company website? B: The {{BLANK}} raised more than ten thousand dollars for the local children's hospital, and she believes that a clear description with photos will encourage more employees to join us next year.",
    "cn": "A：為什麼主任想要一封描述上週五慈善晚宴的信放在公司網站上？ B：這場【活動】為當地兒童醫院募得超過一萬美元，她相信附上照片的清楚描述會鼓勵更多員工明年加入我們。"
  },
  {
    "word": "situation",
    "pos": "n.",
    "cn_def": "情況；處境",
    "en_def": "the things that are happening at a certain time and place",
    "sentence": "A: Why did the store manager send such a long letter to the head office in Taipei yesterday afternoon? B: She needed to describe the {{BLANK}} at her branch after the heavy rain, because water came into the storage room and damaged boxes of shoes worth several thousand dollars.",
    "cn": "A：店長昨天下午為什麼寄了一封這麼長的信給台北總公司？ B：她需要描述大雨過後她分店的【情況】，因為水流進了倉庫，損壞了價值數千美元的好幾箱鞋子。"
  },
  {
    "word": "story",
    "pos": "n.",
    "cn_def": "故事；經過",
    "en_def": "a description of events that happened",
    "sentence": "A: What will the company newsletter include this month, now that the new factory in Kaohsiung is open at last? B: It will tell the {{BLANK}} of how the building team completed the project two months early, with interviews and photos showing how hard everyone worked during the hot summer.",
    "cn": "A：既然高雄的新工廠終於開幕了，這個月的公司電子報會包含什麼內容？ B：它會講述建廠團隊如何提早兩個月完成工程的【故事】，並附上訪談和照片，呈現大家在炎熱夏天裡有多努力工作。"
  },
  {
    "word": "background",
    "pos": "n.",
    "cn_def": "背景",
    "en_def": "a person's education, family and past experience",
    "sentence": "A: What should I write in the first part of my cover letter for the accountant position at the bank? B: You should describe your educational {{BLANK}}, including your degree in finance, and after that talk about the jobs you have had and the skills you learned in each one.",
    "cn": "A：應徵銀行會計職位的求職信第一段我應該寫什麼？ B：你應該描述你的學歷【背景】，包括你的財務學位，之後再談談你做過的工作以及在每份工作中學到的技能。"
  },
  {
    "word": "appearance",
    "pos": "n.",
    "cn_def": "外觀；外表",
    "en_def": "the way someone or something looks",
    "sentence": "A: Why did the landlord send us a letter with so many photos of the office before we signed the lease? B: He wanted to show the {{BLANK}} of the rooms after the repairs, because the old carpet was replaced, the walls were painted white and new lights were put in every room.",
    "cn": "A：為什麼房東在我們簽租約前寄給我們一封附有這麼多辦公室照片的信？ B：他想展示房間修繕後的【外觀】，因為舊地毯換掉了，牆壁漆成白色，而且每個房間都裝了新的燈。"
  },
  {
    "word": "feature",
    "pos": "n.",
    "cn_def": "特色；特點",
    "en_def": "an important or interesting part of something",
    "sentence": "A: What did the sales team say in the letter they sent to customers about the new laptop model? B: They described the most important {{BLANK}}, which is a battery that lasts up to twenty hours, so people who travel often can work all day without looking for a place to charge it.",
    "cn": "A：業務團隊寄給顧客的那封關於新款筆電的信裡說了什麼？ B：他們描述了最重要的【特色】，也就是電池可以持續長達二十小時，所以常出差的人可以工作一整天而不用找地方充電。"
  },
  {
    "word": "characteristic",
    "pos": "n.",
    "cn_def": "特質；特徵",
    "en_def": "a typical quality of a person or thing",
    "sentence": "A: Why does the human resources manager want a letter describing each candidate before the last interviews next week? B: She wants to know the main {{BLANK}} of each person, like whether they are patient, organized or creative, so she can decide who would work best with the current team.",
    "cn": "A：為什麼人資經理希望在下週最後一輪面試前，收到一封描述每位應徵者的信？ B：她想知道每個人的主要【特質】，像是他們是否有耐心、有條理或有創意，這樣她才能決定誰最適合與現有團隊合作。"
  },
  {
    "word": "atmosphere",
    "pos": "n.",
    "cn_def": "氣氛；氛圍",
    "en_def": "the feeling or mood of a place",
    "sentence": "A: How did the restaurant owner describe her new café in the letter she sent to the local newspaper? B: She said the {{BLANK}} is warm and relaxing, with soft music, comfortable chairs and big windows, so it is a good place for people to meet friends or work quietly on weekday afternoons.",
    "cn": "A：餐廳老闆在寄給當地報紙的信中如何描述她的新咖啡店？ B：她說店裡的【氣氛】溫暖又放鬆，有輕柔的音樂、舒適的椅子和大片窗戶，所以是人們平日下午和朋友見面或安靜工作的好地方。"
  },
  {
    "word": "environment",
    "pos": "n.",
    "cn_def": "環境",
    "en_def": "the conditions around you where you live or work",
    "sentence": "A: Why did so many employees write positive letters about the company's new head office this year? B: They like the working {{BLANK}} much better now, because the office has fresh plants, quiet meeting rooms and a kitchen where everyone can have lunch together instead of eating at their desks.",
    "cn": "A：為什麼今年有這麼多員工寫信讚美公司的新總部？ B：他們現在更喜歡這個工作【環境】，因為辦公室有新鮮的植物、安靜的會議室，還有一間大家可以一起吃午餐的廚房，而不用在座位上吃。"
  },
  {
    "word": "location",
    "pos": "n.",
    "cn_def": "地點；位置",
    "en_def": "the place where something is",
    "sentence": "A: Why did the conference organizer choose the hotel near the train station for next month's meeting? B: She said in her letter that the {{BLANK}} is very convenient, because guests can walk there in five minutes from the station, and there are many shops and restaurants nearby.",
    "cn": "A：會議主辦人為什麼選擇火車站附近的飯店舉辦下個月的會議？ B：她在信中說那個【地點】非常方便，因為客人從車站步行五分鐘就能到，而且附近有很多商店和餐廳。"
  },
  {
    "word": "view",
    "pos": "n.",
    "cn_def": "景色；視野",
    "en_def": "what you can see from a place",
    "sentence": "A: Why are the hotel rooms on the twentieth floor so much more expensive than the rooms on the lower floors? B: The letter from the hotel says those rooms have a lovely {{BLANK}} of the harbor and the mountains, and guests can watch the sunset from their balconies every evening.",
    "cn": "A：為什麼二十樓的飯店房間比低樓層的房間貴這麼多？ B：飯店的信上說那些房間有港口和山的美麗【景色】，客人每天傍晚都可以在陽台上看夕陽。"
  },
  {
    "word": "scenery",
    "pos": "n.",
    "cn_def": "風景；景色",
    "en_def": "the natural features of an area, such as mountains and rivers",
    "sentence": "A: What did the travel agency write in its letter to the company about the staff trip to Hualien in October? B: It said the {{BLANK}} along the coast is wonderful, with high cliffs and blue ocean, so employees should bring cameras and plan to stop often during the bus ride.",
    "cn": "A：旅行社在給公司關於十月花蓮員工旅遊的信中寫了什麼？ B：信中說沿海的【風景】非常美妙，有高聳的懸崖和藍色的海洋，所以員工應該帶相機，並計畫在搭巴士途中多次停下來。"
  },
  {
    "word": "beautiful",
    "pos": "adj.",
    "cn_def": "美麗的；漂亮的",
    "en_def": "very nice to look at",
    "sentence": "A: What did the bride's mother write in her thank-you letter to the hotel after the wedding party last Saturday? B: She said the hall looked {{BLANK}}, with white flowers on every table and soft lights on the ceiling, and all the guests praised the staff for their excellent service.",
    "cn": "A：新娘的母親在上週六婚宴後寫給飯店的感謝信裡說了什麼？ B：她說宴會廳看起來很【漂亮】，每張桌子上都有白色的花，天花板上有柔和的燈光，所有賓客都稱讚員工的服務很出色。"
  },
  {
    "word": "impressive",
    "pos": "adj.",
    "cn_def": "令人印象深刻的",
    "en_def": "making you admire it because it is very good or big",
    "sentence": "A: Why did the investors decide to put more money into our company after they visited the factory last month? B: In their letter, they said the new production line was very {{BLANK}}, because it can make twice as many products as before while using much less electricity and fewer workers.",
    "cn": "A：為什麼投資人上個月參觀工廠後，決定對我們公司投入更多資金？ B：他們在信中說新的生產線非常【令人印象深刻】，因為它能生產兩倍於以往的產品，同時使用更少的電力和人力。"
  },
  {
    "word": "interesting",
    "pos": "adj.",
    "cn_def": "有趣的",
    "en_def": "making you want to know more",
    "sentence": "A: Did you read the letter from the new intern describing her first week in the design department? B: Yes, it was very {{BLANK}}, because she described how the team creates a new package from the early sketches to the finished product, and she included some funny stories about the meetings.",
    "cn": "A：你讀了新實習生描述她在設計部第一週的信嗎？ B：讀了，內容很【有趣】，因為她描述了團隊如何從早期草圖到完成品製作新包裝，還寫了一些關於開會的好笑故事。"
  },
  {
    "word": "amazing",
    "pos": "adj.",
    "cn_def": "驚人的；令人驚嘆的",
    "en_def": "very surprising and wonderful",
    "sentence": "A: How did the customers describe the new theme park in the letters they sent to the tourism office? B: Most of them said the light show at night was {{BLANK}}, and many families wrote that it was the best part of their holiday, even better than the rides.",
    "cn": "A：顧客在寄給觀光局的信中如何描述新的主題樂園？ B：他們大多數說夜間的燈光秀很【令人驚嘆】，許多家庭寫道那是他們假期中最棒的部分，甚至比遊樂設施還好。"
  },
  {
    "word": "peaceful",
    "pos": "adj.",
    "cn_def": "寧靜的；平靜的",
    "en_def": "quiet and calm",
    "sentence": "A: Why did the manager book a small hotel in the mountains for the team's planning meeting next week? B: The hotel's letter describes it as a {{BLANK}} place far from the noisy city, so she thinks we can focus on our plans without phone calls or other interruptions.",
    "cn": "A：經理為什麼為下週的團隊規劃會議預訂了山上的一間小飯店？ B：飯店的信把它描述成一個遠離吵雜城市的【寧靜】地方，所以她認為我們可以專心討論計畫，不受電話或其他干擾。"
  },
  {
    "word": "crowded",
    "pos": "adj.",
    "cn_def": "擁擠的",
    "en_def": "full of too many people",
    "sentence": "A: Why did the customer write a letter to complain about the shopping mall's holiday sale last weekend? B: She said the stores were so {{BLANK}} that she waited more than forty minutes to pay, and there were not enough staff to help people find the right sizes.",
    "cn": "A：那位顧客為什麼寫信抱怨購物中心上週末的假日特賣？ B：她說店裡太【擁擠】了，她等了四十多分鐘才結帳，而且沒有足夠的店員幫大家找到合適的尺寸。"
  },
  {
    "word": "busy",
    "pos": "adj.",
    "cn_def": "忙碌的；繁忙的",
    "en_def": "having a lot to do; full of activity",
    "sentence": "A: Why didn't the restaurant answer our letter about booking a table for the year-end party until today? B: The owner wrote back that December is always very {{BLANK}} for them, with big groups almost every night, so she needed time to check which evenings were still available.",
    "cn": "A：為什麼那家餐廳直到今天才回覆我們預約尾牙桌位的信？ B：老闆回信說十二月對他們來說總是非常【忙碌】，幾乎每晚都有大型團體，所以她需要時間確認哪些晚上還有空位。"
  },
  {
    "word": "large",
    "pos": "adj.",
    "cn_def": "大的；大量的",
    "en_def": "big in size or amount",
    "sentence": "A: What did the real estate agent describe in her letter about the new office space on Main Street? B: She said the meeting room is {{BLANK}} enough for forty people, and it also has a kitchen and a storage area, which would be perfect for our growing sales team.",
    "cn": "A：房仲在她關於大街新辦公空間的信中描述了什麼？ B：她說會議室【大】到足以容納四十人，而且還有廚房和儲藏區，對我們不斷成長的業務團隊來說非常理想。"
  },
  {
    "word": "small",
    "pos": "adj.",
    "cn_def": "小的",
    "en_def": "little in size or amount",
    "sentence": "A: Why did the guest ask to change rooms in the letter she sent to the hotel manager on Tuesday? B: She wrote that her room was too {{BLANK}} for her and her two children, because there was only one bed and no space for their suitcases, so she wanted a family room instead.",
    "cn": "A：那位客人為什麼在週二寄給飯店經理的信中要求換房？ B：她寫道她的房間對她和兩個孩子來說太【小】了，因為只有一張床，也沒有地方放行李箱，所以她想改住家庭房。"
  },
  {
    "word": "modern",
    "pos": "adj.",
    "cn_def": "現代的；現代化的",
    "en_def": "new and using the latest ideas or technology",
    "sentence": "A: How does the brochure describe the new training center that the company opened in Taichung last month? B: It describes the building as very {{BLANK}}, with smart screens in every classroom, fast wireless internet and a system that controls the lights and air conditioning automatically.",
    "cn": "A：公司上個月在台中開設的新訓練中心，在簡介手冊中是如何描述的？ B：手冊把這棟建築描述得非常【現代化】，每間教室都有智慧螢幕、快速的無線網路，還有一套自動控制燈光和空調的系統。"
  },
  {
    "word": "traditional",
    "pos": "adj.",
    "cn_def": "傳統的",
    "en_def": "following old ways that have existed for a long time",
    "sentence": "A: What kind of restaurant did you describe in the letter to our Japanese clients who are visiting next week? B: I described a {{BLANK}} Taiwanese restaurant in an old house, where they serve dishes that have been cooked the same way for over a hundred years by the same family.",
    "cn": "A：你在給下週來訪的日本客戶的信中描述了哪種餐廳？ B：我描述了一家位於老房子裡的【傳統】台灣餐廳，那裡供應同一個家族用相同方法烹調了一百多年的菜餚。"
  },
  {
    "word": "popular",
    "pos": "adj.",
    "cn_def": "受歡迎的",
    "en_def": "liked by many people",
    "sentence": "A: Why did the bakery owner write to the newspaper about her shop's new pineapple cake? B: She wanted to describe how {{BLANK}} the cake has become, since tourists from Japan and Korea now wait in long lines every morning, and she has hired five more workers to keep up with orders.",
    "cn": "A：麵包店老闆為什麼寫信給報社介紹她店裡的新款鳳梨酥？ B：她想描述這款鳳梨酥變得有多【受歡迎】，因為現在每天早上都有日本和韓國觀光客大排長龍，她還多雇了五名員工來應付訂單。"
  },
  {
    "word": "famous",
    "pos": "adj.",
    "cn_def": "有名的；著名的",
    "en_def": "known by many people",
    "sentence": "A: Why does the hotel's letter say that guests should book a table at its restaurant early? B: The restaurant is {{BLANK}} for its fresh seafood and its chef, who has won several international cooking awards, so tables are often fully booked weeks before the weekend.",
    "cn": "A：為什麼飯店的信說客人應該提早預訂餐廳的位子？ B：這家餐廳以新鮮海鮮和主廚【聞名】，主廚贏得過好幾個國際廚藝獎，所以週末前好幾週位子常常就被訂滿了。"
  },
  {
    "word": "mainly",
    "pos": "adv.",
    "cn_def": "主要地",
    "en_def": "mostly; more than anything else",
    "sentence": "A: What did the customers write about in the survey letters we received after the summer sale? B: They {{BLANK}} described problems with delivery, because many packages arrived a week late, but a few people also said that our website was difficult to use on their phones.",
    "cn": "A：我們在夏季特賣後收到的問卷信中，顧客寫了些什麼？ B：他們【主要】描述了送貨的問題，因為很多包裹晚了一週才到，但也有少數人說我們的網站用手機很難操作。"
  },
  {
    "word": "especially",
    "pos": "adv.",
    "cn_def": "尤其；特別",
    "en_def": "more than usual; above all",
    "sentence": "A: Did the visitors from the Tokyo office enjoy their tour of our factory and offices yesterday? B: Yes, in their thank-you letter they said they liked everything, {{BLANK}} the new packing machines, which they want to buy for their own factory in Osaka next year.",
    "cn": "A：東京辦公室的訪客昨天參觀我們的工廠和辦公室時玩得愉快嗎？ B：是的，他們在感謝信中說他們什麼都喜歡，【尤其】是新的包裝機，他們明年想為大阪自己的工廠購買。"
  },
  {
    "word": "particularly",
    "pos": "adv.",
    "cn_def": "特別地；尤其",
    "en_def": "more than usual; very",
    "sentence": "A: Why did the director write a letter to thank the customer service team at the end of the year? B: She was {{BLANK}} pleased with the way they handled hundreds of calls during the system problem in November, and she wanted to describe their hard work to the whole company.",
    "cn": "A：主任為什麼在年底寫信感謝客服團隊？ B：她【特別】滿意他們在十一月系統出問題時處理數百通電話的方式，並想向全公司描述他們的辛勞。"
  },
  {
    "word": "clearly",
    "pos": "adv.",
    "cn_def": "清楚地",
    "en_def": "in a way that is easy to see or understand",
    "sentence": "A: Why did the manager return my letter to the client and ask me to write it again before sending it? B: She said I should describe the delivery problem more {{BLANK}}, with the exact dates and order numbers, so the client can understand what happened without calling us.",
    "cn": "A：經理為什麼把我給客戶的信退回，要我在寄出前重寫？ B：她說我應該更【清楚地】描述送貨問題，附上確切的日期和訂單編號，這樣客戶不用打電話給我們就能了解發生了什麼事。"
  },
  {
    "word": "briefly",
    "pos": "adv.",
    "cn_def": "簡短地；短暫地",
    "en_def": "in a few words; for a short time",
    "sentence": "A: How long should my letter to the hotel be when I describe the room problems from my business trip? B: You only need to {{BLANK}} describe what went wrong in two or three sentences, and then ask them politely for a partial refund or a free night on your next visit.",
    "cn": "A：我寫信給飯店描述出差時遇到的房間問題，信要寫多長？ B：你只需要用兩三句話【簡短地】描述出了什麼問題，然後禮貌地要求部分退款或下次入住免費一晚。"
  },
  {
    "word": "in detail",
    "pos": "phr.",
    "cn_def": "詳細地",
    "en_def": "including all the small facts",
    "sentence": "A: Why did the insurance company ask you to write another letter about the car accident outside the warehouse? B: They want me to describe the accident {{BLANK}}, including the exact time, the weather, the speed of each truck and the names of everyone who saw it happen.",
    "cn": "A：保險公司為什麼要你再寫一封關於倉庫外車禍的信？ B：他們要我【詳細地】描述這起事故，包括確切時間、天氣、每輛卡車的速度，以及所有目擊者的姓名。"
  },
  {
    "word": "for example",
    "pos": "phr.",
    "cn_def": "例如；舉例來說",
    "en_def": "used to give a case that shows what you mean",
    "sentence": "A: How can I make my letter describing our new cleaning service more useful for hotel managers? B: Give them real cases; {{BLANK}}, you could describe how we cleaned all two hundred rooms at a big hotel in one day after a major conference ended.",
    "cn": "A：我要如何讓描述我們新清潔服務的信對飯店經理更有用？ B：給他們真實的案例；【例如】，你可以描述我們如何在一場大型會議結束後，一天內清潔完一家大飯店的全部兩百間客房。"
  },
  {
    "word": "such as",
    "pos": "phr.",
    "cn_def": "例如；像是",
    "en_def": "used before giving examples",
    "sentence": "A: What information should we include in the letter describing the new office building to employees? B: We should list the useful services, {{BLANK}} the gym on the third floor, the free parking area and the coffee shop in the lobby, so people feel excited about the move next month.",
    "cn": "A：在向員工描述新辦公大樓的信中，我們應該放入哪些資訊？ B：我們應該列出實用的設施，【例如】三樓的健身房、免費停車區和大廳的咖啡店，讓大家對下個月的搬遷感到興奮。"
  },
  {
    "word": "overall",
    "pos": "adv.",
    "cn_def": "整體來說；大致上",
    "en_def": "when you think about everything together",
    "sentence": "A: What did the guests think of the company's annual dinner, based on the letters and emails we received? B: A few people said the food was cold, but {{BLANK}}, most guests described the evening as fun and well organized, and they hope we hold it at the same hotel next year.",
    "cn": "A：根據我們收到的信件和電子郵件，賓客們覺得公司年度晚宴如何？ B：有少數人說食物冷掉了，但【整體來說】，大多數賓客形容那個晚上很有趣而且安排得很好，希望明年在同一家飯店舉辦。"
  },
  {
    "word": "in general",
    "pos": "phr.",
    "cn_def": "一般來說；大體上",
    "en_def": "usually; in most cases",
    "sentence": "A: How do customers usually describe our online store when they write reviews or send us letters? B: Customers {{BLANK}} seem happy with us, because they say the website is easy to use and the prices are fair, but some want more payment choices and faster delivery to small towns.",
    "cn": "A：顧客寫評論或寄信給我們時，通常如何描述我們的網路商店？ B：顧客【一般來說】似乎對我們很滿意，因為他們說網站很容易使用、價格也公道，但有些人希望有更多付款方式，並加快寄到小鎮的速度。"
  },
  {
    "word": "first",
    "pos": "adv.",
    "cn_def": "首先；第一",
    "en_def": "before anything else",
    "sentence": "A: How should I organize my letter describing the problems with the new printers in our office? B: You should {{BLANK}} describe what the printers are doing wrong, then say how long the problem has lasted, and finally ask the supplier to send someone to repair them this week.",
    "cn": "A：我該如何組織那封描述辦公室新印表機問題的信？ B：你應該【首先】描述印表機出了什麼問題，接著說明問題持續了多久，最後請供應商這週派人來修理。"
  },
  {
    "word": "then",
    "pos": "adv.",
    "cn_def": "然後；接著",
    "en_def": "after that; next",
    "sentence": "A: What did the tour guide write in her letter about our team's schedule for the trip to Kyoto? B: We will visit an old temple in the morning and {{BLANK}} have lunch at a famous noodle shop before taking the train to Osaka in the afternoon.",
    "cn": "A：導遊在信中如何寫我們團隊京都之旅的行程？ B：我們早上會參觀一座古老的寺廟，【然後】在一家有名的麵店吃午餐，下午再搭火車去大阪。"
  },
  {
    "word": "finally",
    "pos": "adv.",
    "cn_def": "終於；最後",
    "en_def": "after a long time; at the end",
    "sentence": "A: Did the client ever reply to the long letter describing our new design for their office lobby? B: Yes, after three weeks of waiting, she {{BLANK}} wrote back yesterday to say that her board liked the design and wants us to start work in January.",
    "cn": "A：客戶有回覆那封描述我們為她辦公室大廳所做新設計的長信嗎？ B：有，等了三個星期後，她昨天【終於】回信說她的董事會喜歡這個設計，希望我們一月開始動工。"
  }
];

const MCQS = [
  {
    "q": "The client asked for more information about the hotel rooms. Please check every _____ in the letter before you send it.",
    "options": [
      "atmosphere",
      "scenery",
      "background",
      "detail"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Our delivery was late again this week. Please write to the customer and _____ why the shipment did not arrive on time.",
    "options": [
      "explain",
      "introduce",
      "share",
      "mention"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Ms. Lin will join our sales team on Monday. At the morning meeting, the manager will _____ her to everyone.",
    "options": [
      "explain",
      "introduce",
      "share",
      "mention"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The trip to the trade fair was very useful. Please _____ your notes and photos with the rest of the team.",
    "options": [
      "explain",
      "introduce",
      "share",
      "mention"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Many guests wrote reviews after their stay last month. Most of them described a pleasant _____ at our seaside hotel.",
    "options": [
      "experience",
      "background",
      "characteristic",
      "appearance"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "More than three hundred people came to the charity dinner. The _____ raised enough money to build a new library.",
    "options": [
      "story",
      "situation",
      "event",
      "scenery"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The heavy rain flooded the storage room last night. The manager wrote a letter to explain the _____ to head office.",
    "options": [
      "scenery",
      "feature",
      "view",
      "situation"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The job requires a strong knowledge of finance. Candidates with a _____ in accounting are welcome to apply.",
    "options": [
      "atmosphere",
      "background",
      "view",
      "scenery"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The new phone has a camera that works well at night. This is the most popular _____ among young buyers.",
    "options": [
      "location",
      "scenery",
      "atmosphere",
      "feature"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The café has soft music and comfortable sofas. Customers love its relaxing _____ and often stay for hours.",
    "options": [
      "atmosphere",
      "background",
      "story",
      "characteristic"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The new office is only two minutes from the subway station. Its convenient _____ makes it easy for clients to visit.",
    "options": [
      "atmosphere",
      "characteristic",
      "location",
      "scenery"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Our rooms on the top floor face the harbor. Guests can enjoy a wonderful _____ of the ships from their windows.",
    "options": [
      "story",
      "view",
      "event",
      "background"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The company added plants and quiet rooms to the office. Staff say the working _____ is much better now.",
    "options": [
      "environment",
      "event",
      "story",
      "scenery"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The store was painted and given new lights last month. Its fresh _____ has attracted many new customers.",
    "options": [
      "background",
      "characteristic",
      "situation",
      "appearance"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The hall was full of white flowers and soft lights. Everyone agreed that it looked _____ for the wedding party.",
    "options": [
      "famous",
      "popular",
      "beautiful",
      "busy"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The new machine can make twice as many products as the old one. The investors found the results very _____.",
    "options": [
      "crowded",
      "impressive",
      "small",
      "traditional"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The mall was full of shoppers during the holiday sale. It was so _____ that people had to wait an hour to pay.",
    "options": [
      "peaceful",
      "modern",
      "crowded",
      "famous"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The hotel is far from the noisy city center. Guests say it is a quiet and _____ place to relax.",
    "options": [
      "crowded",
      "busy",
      "famous",
      "peaceful"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The family has cooked the same dishes the same way for a century. It is a truly _____ Taiwanese restaurant.",
    "options": [
      "traditional",
      "modern",
      "crowded",
      "peaceful"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Tourists wait in long lines every morning to buy the bakery's cakes. They have become very _____ in the past year.",
    "options": [
      "peaceful",
      "popular",
      "small",
      "traditional"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The chef has won several international awards. The restaurant is _____ for its fresh seafood dishes.",
    "options": [
      "busy",
      "large",
      "interesting",
      "famous"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The new training center has smart screens and automatic lights. It is one of the most _____ buildings in the city.",
    "options": [
      "peaceful",
      "small",
      "modern",
      "traditional"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The guest's room had only one bed and no space for suitcases. She said it was too _____ for her family.",
    "options": [
      "small",
      "large",
      "modern",
      "famous"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Most of the complaints were about slow delivery. Customers _____ wrote about packages that arrived a week late.",
    "options": [
      "especially",
      "mainly",
      "particularly",
      "overall"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The visitors liked everything in the factory. They were _____ interested in the new packing machines from Germany.",
    "options": [
      "especially",
      "finally",
      "briefly",
      "then"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The client could not understand our first letter. Please write again and describe the problem more _____.",
    "options": [
      "mainly",
      "especially",
      "clearly",
      "finally"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "The manager only has five minutes before her flight. Please describe the problem _____ in one or two sentences.",
    "options": [
      "especially",
      "mainly",
      "then",
      "briefly"
    ],
    "answer": 3,
    "vocabIndex": 35
  },
  {
    "q": "We waited three weeks for the client's answer. She _____ replied yesterday and accepted our new design.",
    "options": [
      "mainly",
      "finally",
      "especially",
      "particularly"
    ],
    "answer": 1,
    "vocabIndex": 43
  },
  {
    "q": "The insurance company needs to know exactly what happened. Please describe the accident _____ in your report.",
    "options": [
      "such as",
      "for example",
      "in general",
      "in detail"
    ],
    "answer": 3,
    "vocabIndex": 36
  },
  {
    "q": "The new building has many useful services. Staff can use facilities _____ a gym, a café and free parking.",
    "options": [
      "in detail",
      "for example",
      "such as",
      "in general"
    ],
    "answer": 2,
    "vocabIndex": 38
  }
];

const LOOKUP = {
  "detail": {
    "pos": "n.",
    "en_def": "a small fact or piece of information",
    "cn_def": "細節"
  },
  "explain": {
    "pos": "v.",
    "en_def": "to make something clear or easy to understand",
    "cn_def": "解釋；說明"
  },
  "mention": {
    "pos": "v.",
    "en_def": "to speak or write about something briefly",
    "cn_def": "提到；提及"
  },
  "introduce": {
    "pos": "v.",
    "en_def": "to tell people someone's name or present something new",
    "cn_def": "介紹；引進"
  },
  "share": {
    "pos": "v.",
    "en_def": "to let others have or know something you have",
    "cn_def": "分享"
  },
  "experience": {
    "pos": "n.",
    "en_def": "something that happens to you and affects how you feel",
    "cn_def": "經驗；經歷"
  },
  "event": {
    "pos": "n.",
    "en_def": "a planned public or social occasion",
    "cn_def": "活動；事件"
  },
  "situation": {
    "pos": "n.",
    "en_def": "the things that are happening at a certain time and place",
    "cn_def": "情況；處境"
  },
  "story": {
    "pos": "n.",
    "en_def": "a description of events that happened",
    "cn_def": "故事；經過"
  },
  "background": {
    "pos": "n.",
    "en_def": "a person's education, family and past experience",
    "cn_def": "背景"
  },
  "appearance": {
    "pos": "n.",
    "en_def": "the way someone or something looks",
    "cn_def": "外觀；外表"
  },
  "feature": {
    "pos": "n.",
    "en_def": "an important or interesting part of something",
    "cn_def": "特色；特點"
  },
  "characteristic": {
    "pos": "n.",
    "en_def": "a typical quality of a person or thing",
    "cn_def": "特質；特徵"
  },
  "atmosphere": {
    "pos": "n.",
    "en_def": "the feeling or mood of a place",
    "cn_def": "氣氛；氛圍"
  },
  "environment": {
    "pos": "n.",
    "en_def": "the conditions around you where you live or work",
    "cn_def": "環境"
  },
  "location": {
    "pos": "n.",
    "en_def": "the place where something is",
    "cn_def": "地點；位置"
  },
  "view": {
    "pos": "n.",
    "en_def": "what you can see from a place",
    "cn_def": "景色；視野"
  },
  "scenery": {
    "pos": "n.",
    "en_def": "the natural features of an area, such as mountains and rivers",
    "cn_def": "風景；景色"
  },
  "beautiful": {
    "pos": "adj.",
    "en_def": "very nice to look at",
    "cn_def": "美麗的；漂亮的"
  },
  "impressive": {
    "pos": "adj.",
    "en_def": "making you admire it because it is very good or big",
    "cn_def": "令人印象深刻的"
  },
  "interesting": {
    "pos": "adj.",
    "en_def": "making you want to know more",
    "cn_def": "有趣的"
  },
  "amazing": {
    "pos": "adj.",
    "en_def": "very surprising and wonderful",
    "cn_def": "驚人的；令人驚嘆的"
  },
  "peaceful": {
    "pos": "adj.",
    "en_def": "quiet and calm",
    "cn_def": "寧靜的；平靜的"
  },
  "crowded": {
    "pos": "adj.",
    "en_def": "full of too many people",
    "cn_def": "擁擠的"
  },
  "busy": {
    "pos": "adj.",
    "en_def": "having a lot to do; full of activity",
    "cn_def": "忙碌的；繁忙的"
  },
  "large": {
    "pos": "adj.",
    "en_def": "big in size or amount",
    "cn_def": "大的；大量的"
  },
  "small": {
    "pos": "adj.",
    "en_def": "little in size or amount",
    "cn_def": "小的"
  },
  "modern": {
    "pos": "adj.",
    "en_def": "new and using the latest ideas or technology",
    "cn_def": "現代的；現代化的"
  },
  "traditional": {
    "pos": "adj.",
    "en_def": "following old ways that have existed for a long time",
    "cn_def": "傳統的"
  },
  "popular": {
    "pos": "adj.",
    "en_def": "liked by many people",
    "cn_def": "受歡迎的"
  },
  "famous": {
    "pos": "adj.",
    "en_def": "known by many people",
    "cn_def": "有名的；著名的"
  },
  "mainly": {
    "pos": "adv.",
    "en_def": "mostly; more than anything else",
    "cn_def": "主要地"
  },
  "especially": {
    "pos": "adv.",
    "en_def": "more than usual; above all",
    "cn_def": "尤其；特別"
  },
  "particularly": {
    "pos": "adv.",
    "en_def": "more than usual; very",
    "cn_def": "特別地；尤其"
  },
  "clearly": {
    "pos": "adv.",
    "en_def": "in a way that is easy to see or understand",
    "cn_def": "清楚地"
  },
  "briefly": {
    "pos": "adv.",
    "en_def": "in a few words; for a short time",
    "cn_def": "簡短地；短暫地"
  },
  "in detail": {
    "pos": "phr.",
    "en_def": "including all the small facts",
    "cn_def": "詳細地"
  },
  "for example": {
    "pos": "phr.",
    "en_def": "used to give a case that shows what you mean",
    "cn_def": "例如；舉例來說"
  },
  "such as": {
    "pos": "phr.",
    "en_def": "used before giving examples",
    "cn_def": "例如；像是"
  },
  "overall": {
    "pos": "adv.",
    "en_def": "when you think about everything together",
    "cn_def": "整體來說；大致上"
  },
  "in general": {
    "pos": "phr.",
    "en_def": "usually; in most cases",
    "cn_def": "一般來說；大體上"
  },
  "first": {
    "pos": "adv.",
    "en_def": "before anything else",
    "cn_def": "首先；第一"
  },
  "then": {
    "pos": "adv.",
    "en_def": "after that; next",
    "cn_def": "然後；接著"
  },
  "finally": {
    "pos": "adv.",
    "en_def": "after a long time; at the end",
    "cn_def": "終於；最後"
  }
};

const EXTRA_GLOSSES = {};
