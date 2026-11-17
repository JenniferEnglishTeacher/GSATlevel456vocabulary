// Topic 324 Quiz Data: Relatives 親戚
// Source word list: https://www.examword.com/group-topic/relatives — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T324 - Relatives 親戚",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "oriented",
    "pos": "adj.",
    "cn_def": "以……為導向的；注重……的",
    "en_def": "focused on or directed toward a particular thing or group",
    "sentence": "A: Your cousin just opened a bakery downtown, so what makes her shop different from the three other bakeries on the same street? B: Her business is very family-{{BLANK}}, so she offers cheap birthday cakes for parents, a play corner for kids, and a special discount every Sunday for grandparents who visit with their grandchildren.",
    "cn": "A：你表姊剛在市中心開了一家麵包店，她的店和同一條街上另外三家麵包店有什麼不同？ B：她的店非常以家庭為【導向】，所以她為父母提供便宜的生日蛋糕、為孩子設置遊戲區，而且每週日給帶孫子孫女來的祖父母特別折扣。"
  },
  {
    "word": "every now and again",
    "pos": "phr.",
    "cn_def": "偶爾；有時",
    "en_def": "sometimes, but not often",
    "sentence": "A: Since your grandparents moved to the countryside after they retired, how often do you manage to see them with your busy work schedule? B: I visit them {{BLANK}}, usually on a long weekend when the trains are not too crowded, but I call them every Sunday evening to hear about their garden and their neighbors.",
    "cn": "A：自從你祖父母退休後搬到鄉下，以你忙碌的工作行程，你多久能去看他們一次？ B：我【偶爾】會去探望他們，通常是在火車不太擠的連假，不過我每個星期天晚上都會打電話給他們，聽聽他們聊菜園和鄰居的事。"
  },
  {
    "word": "reside",
    "pos": "v.",
    "cn_def": "居住；定居",
    "en_def": "to live in a particular place",
    "sentence": "A: The new employee form asks where my closest family members live, so should I write down my parents' address or my sister's? B: Write down the address of the relative who will {{BLANK}} nearest to the office this year, because the human resources team needs someone they can contact quickly in an emergency.",
    "cn": "A：新進員工表格要填寫最親近家人的住址，我應該寫我父母的地址還是我姊姊的？ B：寫今年【居住】在離公司最近的那位親戚的地址，因為人資部門需要一位緊急時能很快聯絡到的人。"
  },
  {
    "word": "keep in touch",
    "pos": "v.phr.",
    "cn_def": "保持聯絡",
    "en_def": "to continue to communicate with someone",
    "sentence": "A: Now that your cousin has moved to Canada for her new engineering job, is it hard for your family to stay close to her? B: Not really, because we {{BLANK}} through a family group chat, and every Saturday morning we have a video call so she can see her nephews and tell us about her work.",
    "cn": "A：既然你表妹為了新的工程師工作搬到加拿大，你們家要和她保持親近會很難嗎？ B：不太會，因為我們透過家族群組聊天【保持聯絡】，而且每週六早上都會視訊，讓她可以看看她的姪子們，並告訴我們她工作的情況。"
  },
  {
    "word": "pay a visit to",
    "pos": "v.phr.",
    "cn_def": "拜訪；去看望",
    "en_def": "to go to see a person or place",
    "sentence": "A: Are you taking the whole week off after the trade show in Tainan, or are you flying straight back to the office on Friday? B: I'm staying two extra days so I can {{BLANK}} my uncle and aunt, who run a small fruit farm outside the city and haven't seen me since my wedding three years ago.",
    "cn": "A：你在台南的商展結束後要請一整週的假，還是星期五就直接飛回公司？ B：我會多留兩天，好去【拜訪】我的叔叔和嬸嬸，他們在市郊經營一座小果園，自從三年前我的婚禮之後就沒見過我了。"
  },
  {
    "word": "update someone about something",
    "pos": "v.phr.",
    "cn_def": "向某人報告某事的最新情況",
    "en_def": "to give someone the newest information about a matter",
    "sentence": "A: Grandma's surgery is tomorrow morning, but I have an important meeting with the bank, so I can't stay at the hospital all day. B: Don't worry, I'll be there the whole time, and I'll {{BLANK}} by text message as soon as the doctor comes out, so you can focus on your meeting.",
    "cn": "A：奶奶的手術在明天早上，可是我和銀行有個重要的會議，所以沒辦法整天待在醫院。 B：別擔心，我會全程在那裡，醫生一出來我就會傳簡訊【向你報告最新情況】，讓你能專心開會。"
  },
  {
    "word": "luxury of time",
    "pos": "n.phr.",
    "cn_def": "充裕的時間（難得的餘裕）",
    "en_def": "the rare situation of having plenty of time",
    "sentence": "A: Your brother is getting married next month, so will you help him plan the reception like you did for your sister's wedding? B: I'd love to, but with the year-end audit at work, I don't have the {{BLANK}} this year, so I'll only help him choose the restaurant and send the invitations to our relatives.",
    "cn": "A：你哥哥下個月要結婚了，你會像幫你姊姊辦婚禮那樣幫他籌備喜宴嗎？ B：我很想，但因為公司年底的稽核，我今年沒有【充裕的時間】，所以我只會幫他挑餐廳，並寄喜帖給親戚們。"
  },
  {
    "word": "bunch",
    "pos": "n.",
    "cn_def": "一群；一串；一束",
    "en_def": "a group of things or people",
    "sentence": "A: Who were all those people waiting in the hotel lobby when we arrived for the sales conference this morning? B: That was a big {{BLANK}} of the manager's relatives from Kaohsiung, who came to the city for her daughter's graduation ceremony and decided to stay at the same hotel for the weekend.",
    "cn": "A：我們今天早上到飯店參加業務會議時，在大廳等候的那些人是誰？ B：那是經理從高雄來的【一大群】親戚，他們為了她女兒的畢業典禮來到這座城市，並決定週末住在同一間飯店。"
  },
  {
    "word": "vibrant",
    "pos": "adj.",
    "cn_def": "充滿活力的；鮮豔的",
    "en_def": "full of life, energy and color",
    "sentence": "A: What was the Lunar New Year dinner at your aunt's house like, since you said almost thirty relatives were coming? B: It was loud and {{BLANK}}, with children running around, uncles telling old stories, and red decorations everywhere, and even my quiet grandfather sang a song before we gave out the red envelopes.",
    "cn": "A：你說有將近三十個親戚要來，那你阿姨家的除夕年夜飯怎麼樣？ B：既熱鬧又【充滿活力】，小孩到處跑、叔叔伯伯們講著往事、到處都是紅色裝飾，連我那安靜的爺爺都在發紅包前唱了一首歌。"
  },
  {
    "word": "nothing but",
    "pos": "phr.",
    "cn_def": "只有；僅僅",
    "en_def": "only; just",
    "sentence": "A: How did your cousin's first week go at the new accounting firm where you helped her get the interview? B: She had {{BLANK}} good things to say about it, because her manager is patient, her coworkers invited her to lunch every day, and the office is only ten minutes from her apartment.",
    "cn": "A：你幫你表妹爭取到面試的那家新會計事務所，她第一週過得怎麼樣？ B：她對那裡【只有】好話，因為她的主管很有耐心，同事每天都約她吃午餐，而且辦公室離她的公寓只要十分鐘。"
  },
  {
    "word": "nosy",
    "pos": "adj.",
    "cn_def": "愛打聽的；好管閒事的",
    "en_def": "too interested in other people's private lives",
    "sentence": "A: Why do you look so tired after the family reunion dinner, when you said the food at the restaurant was excellent? B: My {{BLANK}} aunt kept asking me how much my salary is, when I will get married, and why I haven't bought an apartment yet, so I spent the whole evening trying to change the subject.",
    "cn": "A：你說餐廳的菜很棒，為什麼家族聚餐後你看起來這麼累？ B：我那【愛打聽】的阿姨一直問我薪水多少、什麼時候結婚、為什麼還沒買房子，所以我整個晚上都在想辦法轉移話題。"
  },
  {
    "word": "latter",
    "pos": "n.",
    "cn_def": "後者",
    "en_def": "the second of two people or things just mentioned",
    "sentence": "A: For the holiday trip with your parents and grandparents, are you choosing the beach resort in Kenting or the hot spring hotel in Beitou? B: We chose the {{BLANK}}, because the hot springs are good for my grandmother's back, the hotel is near the train station, and nobody has to drive for five hours.",
    "cn": "A：你和父母、祖父母的假期旅行，要選墾丁的海灘度假村還是北投的溫泉飯店？ B：我們選了【後者】，因為溫泉對我奶奶的背很好，飯店離火車站很近，而且沒有人需要開五個小時的車。"
  },
  {
    "word": "undeniably",
    "pos": "adv.",
    "cn_def": "不可否認地；無疑地",
    "en_def": "in a way that is clearly true",
    "sentence": "A: Do you think your nephew is ready to take over the family's hardware store when your brother retires at the end of next year? B: He is {{BLANK}} talented with customers and numbers, but he still needs a few more months of training on ordering stock and managing the two part-time workers.",
    "cn": "A：你覺得你姪子準備好在你哥哥明年底退休時接手家裡的五金行了嗎？ B：他在應對客戶和處理數字方面【無疑】很有天分，但在進貨和管理兩名兼職員工方面，他還需要再受訓幾個月。"
  },
  {
    "word": "uncomfortable",
    "pos": "adj.",
    "cn_def": "不自在的；不舒服的",
    "en_def": "feeling worried, embarrassed or not relaxed",
    "sentence": "A: Why didn't your brother-in-law say anything during the family meeting about selling your grandparents' old house? B: He felt {{BLANK}} giving his opinion, because he only joined the family two years ago and didn't want to start an argument about money with the older relatives.",
    "cn": "A：在討論賣掉祖父母老房子的家庭會議上，你姊夫為什麼一句話都沒說？ B：他覺得發表意見很【不自在】，因為他兩年前才成為家族的一員，不想和長輩們因為錢起爭執。"
  },
  {
    "word": "loathe",
    "pos": "v.",
    "cn_def": "極度厭惡",
    "en_def": "to hate something very much",
    "sentence": "A: Will you drive your family down to your grandparents' house for the Moon Festival this year, or take the train again? B: I'll take the train again, because I {{BLANK}} sitting in holiday traffic for six hours, and I'd rather spend that time reading reports or playing cards with my kids on the way.",
    "cn": "A：今年中秋節你會開車載家人去祖父母家，還是又搭火車？ B：我還是會搭火車，因為我【極度討厭】在假日車潮裡塞六個小時，我寧願在路上把時間拿來看報告或和孩子們玩牌。"
  }
];

const MCQS = [
  {
    "q": "Our firm offers customer-_____ service at every branch. Staff are trained to listen carefully and solve each problem quickly.",
    "options": [
      "oriented",
      "nosy",
      "vibrant",
      "uncomfortable"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "My uncle lives near our office, so he stops by for lunch _____. He usually comes on Fridays when the cafeteria serves noodles.",
    "options": [
      "nothing but",
      "every now and again",
      "in advance",
      "by mistake"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Most of the company's overseas staff _____ in apartments near the main office. The firm pays part of their monthly rent.",
    "options": [
      "loathe",
      "depart",
      "reside",
      "attend"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "After she retired, Ms. Lin promised to _____ with her former coworkers. She sends them a holiday card every December.",
    "options": [
      "pay a visit to",
      "take part in",
      "look up to",
      "keep in touch"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "While in Seoul for the conference, Mr. Park will _____ our branch office. He wants to meet the new team in person.",
    "options": [
      "pay a visit to",
      "keep in touch",
      "get rid of",
      "look up to"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Please call the client and _____ before noon. She needs to know the new delivery date for her order.",
    "options": [
      "get rid of",
      "update someone about something",
      "look up to",
      "take part in"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "With the deadline moved up to Friday, we do not have the _____. Everyone must work overtime this week.",
    "options": [
      "point of view",
      "piece of cake",
      "luxury of time",
      "sense of humor"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The receptionist placed a _____ of fresh flowers on the front desk. Visitors often comment on how nice the lobby looks.",
    "options": [
      "latter",
      "receipt",
      "schedule",
      "bunch"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The new office has _____ colors on every wall. Employees say the bright design makes them feel more energetic.",
    "options": [
      "vibrant",
      "nosy",
      "punctual",
      "oriented"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The hotel guests had _____ praise for the friendly staff. Many of them have already booked rooms for next year.",
    "options": [
      "every now and again",
      "nothing but",
      "in advance",
      "by mistake"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Please do not be _____ about your coworkers' private lives. Questions about salary or family problems can make people upset.",
    "options": [
      "vibrant",
      "oriented",
      "nosy",
      "punctual"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "We can ship the goods by air or by sea. Because the order is not urgent, we will choose the _____.",
    "options": [
      "bunch",
      "receipt",
      "invoice",
      "latter"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The new product launch was _____ successful. Sales doubled in the first month, and customer reviews were very positive.",
    "options": [
      "undeniably",
      "barely",
      "rarely",
      "loudly"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Many employees felt _____ when the manager criticized them in front of clients. She has since agreed to give feedback privately.",
    "options": [
      "vibrant",
      "uncomfortable",
      "oriented",
      "punctual"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Most drivers _____ the heavy traffic on the bridge each morning. Many of them now take the subway to work instead.",
    "options": [
      "reside",
      "depart",
      "loathe",
      "attend"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The new manager is very results-_____ and sets clear monthly targets. She rewards teams that reach their sales goals early.",
    "options": [
      "vibrant",
      "nosy",
      "uncomfortable",
      "oriented"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The printer is old but still works well. It only jams _____, so we will not replace it this year.",
    "options": [
      "every now and again",
      "nothing but",
      "in advance",
      "on purpose"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Applicants must _____ in the city for at least one year. Please attach a copy of your lease to the form.",
    "options": [
      "attend",
      "reside",
      "depart",
      "loathe"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Our sales reps _____ with clients through monthly newsletters. This helps them remember our new products and special offers.",
    "options": [
      "pay a visit to",
      "take part in",
      "keep in touch",
      "get rid of"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The inspector plans to _____ the factory next Tuesday. Please make sure all safety signs are clearly posted.",
    "options": [
      "get rid of",
      "look up to",
      "keep in touch",
      "pay a visit to"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The project leader will _____ at Monday's meeting. Everyone wants to hear how the new software test went.",
    "options": [
      "update someone about something",
      "get rid of",
      "look up to",
      "take part in"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Busy managers rarely enjoy the _____ to read every report closely. That is why short summaries are so useful.",
    "options": [
      "point of view",
      "luxury of time",
      "piece of cake",
      "sense of humor"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "A whole _____ of interns joined the marketing team this summer. Each of them will work on a different project.",
    "options": [
      "receipt",
      "latter",
      "bunch",
      "schedule"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The city's night market is busy and _____ until midnight. Many tourists visit it after their business meetings end.",
    "options": [
      "nosy",
      "oriented",
      "punctual",
      "vibrant"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The new copier has caused _____ trouble since it arrived. We have called the repair company four times this month.",
    "options": [
      "nothing but",
      "every now and again",
      "in advance",
      "by mistake"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The _____ neighbor kept asking the movers where the family worked. The new owners politely refused to answer her questions.",
    "options": [
      "vibrant",
      "nosy",
      "punctual",
      "oriented"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Ms. Wu and Mr. Chen both applied for the job. The _____ has more experience, so he got the position.",
    "options": [
      "bunch",
      "invoice",
      "latter",
      "receipt"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Ms. Lee is _____ the best negotiator on our team. She has closed more deals than anyone else this year.",
    "options": [
      "loudly",
      "barely",
      "rarely",
      "undeniably"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The old office chairs were so _____ that staff complained of back pain. The company bought new ones last month.",
    "options": [
      "uncomfortable",
      "nosy",
      "oriented",
      "vibrant"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Some staff members _____ long meetings that have no clear goal. The manager now sends an agenda to everyone the day before.",
    "options": [
      "reside",
      "loathe",
      "depart",
      "inherit"
    ],
    "answer": 1,
    "vocabIndex": 14
  }
];

const LOOKUP = {
  "oriented": {
    "pos": "adj.",
    "en_def": "focused on or directed toward a particular thing or group",
    "cn_def": "以……為導向的；注重……的"
  },
  "every now and again": {
    "pos": "phr.",
    "en_def": "sometimes, but not often",
    "cn_def": "偶爾；有時"
  },
  "reside": {
    "pos": "v.",
    "en_def": "to live in a particular place",
    "cn_def": "居住；定居"
  },
  "keep in touch": {
    "pos": "v.phr.",
    "en_def": "to continue to communicate with someone",
    "cn_def": "保持聯絡"
  },
  "pay a visit to": {
    "pos": "v.phr.",
    "en_def": "to go to see a person or place",
    "cn_def": "拜訪；去看望"
  },
  "update someone about something": {
    "pos": "v.phr.",
    "en_def": "to give someone the newest information about a matter",
    "cn_def": "向某人報告某事的最新情況"
  },
  "luxury of time": {
    "pos": "n.phr.",
    "en_def": "the rare situation of having plenty of time",
    "cn_def": "充裕的時間（難得的餘裕）"
  },
  "bunch": {
    "pos": "n.",
    "en_def": "a group of things or people",
    "cn_def": "一群；一串；一束"
  },
  "vibrant": {
    "pos": "adj.",
    "en_def": "full of life, energy and color",
    "cn_def": "充滿活力的；鮮豔的"
  },
  "nothing but": {
    "pos": "phr.",
    "en_def": "only; just",
    "cn_def": "只有；僅僅"
  },
  "nosy": {
    "pos": "adj.",
    "en_def": "too interested in other people's private lives",
    "cn_def": "愛打聽的；好管閒事的"
  },
  "latter": {
    "pos": "n.",
    "en_def": "the second of two people or things just mentioned",
    "cn_def": "後者"
  },
  "undeniably": {
    "pos": "adv.",
    "en_def": "in a way that is clearly true",
    "cn_def": "不可否認地；無疑地"
  },
  "uncomfortable": {
    "pos": "adj.",
    "en_def": "feeling worried, embarrassed or not relaxed",
    "cn_def": "不自在的；不舒服的"
  },
  "loathe": {
    "pos": "v.",
    "en_def": "to hate something very much",
    "cn_def": "極度厭惡"
  }
};

const EXTRA_GLOSSES = {};
