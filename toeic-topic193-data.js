// Topic 193 Quiz Data: Interesting 有趣的
// Source word list: https://www.examword.com/group-topic/interesting — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T193 - Interesting 有趣的",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "fascinating",
    "pos": "adj.",
    "cn_def": "極有趣的；迷人的",
    "en_def": "extremely interesting",
    "sentence": "A: Did you go to the factory tour that the marketing team organized for the new interns last Friday afternoon? B: Yes, and it was truly {{BLANK}}, because the engineer showed us how the robots pack thousands of boxes every hour without making a single mistake.",
    "cn": "A：你有去參加行銷團隊上週五下午為新實習生安排的工廠參觀嗎？ B：有，而且真的非常【引人入勝】，因為工程師讓我們看機器人如何每小時包裝數千個箱子而且一個錯誤都沒有。"
  },
  {
    "word": "engaging",
    "pos": "adj.",
    "cn_def": "吸引人參與的；有魅力的",
    "en_def": "interesting and able to keep people involved",
    "sentence": "A: How did the new trainer do during the customer service workshop yesterday, since the last one made everyone fall asleep? B: She was very {{BLANK}}, so she asked us lots of questions, used short role-plays, and kept the whole room talking and laughing until the session ended at five.",
    "cn": "A：新的講師昨天在客服工作坊表現得如何？上一位讓大家都睡著了。 B：她非常【吸引人參與】，問了我們很多問題、用了簡短的角色扮演，讓整個教室一直討論和歡笑到五點課程結束。"
  },
  {
    "word": "captivating",
    "pos": "adj.",
    "cn_def": "迷人的；令人著迷的",
    "en_def": "so attractive that you keep watching or listening",
    "sentence": "A: Why were so many shoppers standing in front of the department store window on Saturday evening instead of going inside? B: The store had set up a {{BLANK}} light show with moving snowflakes and music, and people stopped to watch it for several minutes before they continued shopping.",
    "cn": "A：為什麼週六晚上有那麼多購物者站在百貨公司櫥窗前而不進去？ B：店家布置了一場有飄動雪花和音樂的【迷人】燈光秀，人們停下來看了好幾分鐘才繼續逛街。"
  },
  {
    "word": "intriguing",
    "pos": "adj.",
    "cn_def": "耐人尋味的；引起好奇的",
    "en_def": "strange or unusual in a way that makes you want to know more",
    "sentence": "A: Have you read the email from the new supplier in Osaka that arrived this morning, because I don't understand their offer? B: Yes, it is quite {{BLANK}}, since they say they can cut our shipping costs by half, but they haven't explained how, so I want to call them.",
    "cn": "A：你看了今天早上大阪新供應商寄來的電子郵件嗎？我看不懂他們的報價。 B：看了，內容相當【耐人尋味】，因為他們說可以把我們的運費減半，卻沒說明怎麼做，所以我想打電話問他們。"
  },
  {
    "word": "absorbing",
    "pos": "adj.",
    "cn_def": "引人入勝的；令人全神貫注的",
    "en_def": "so interesting that it holds all your attention",
    "sentence": "A: You missed your train stop yesterday evening, didn't you, and arrived late for the team dinner at the restaurant? B: I did, because the mystery book my manager lent me was so {{BLANK}} that I forgot where I was until the train reached the last station.",
    "cn": "A：你昨晚坐過站了，對吧？所以團隊聚餐才遲到。 B：對，因為經理借我的推理小說太【引人入勝】了，我忘了自己在哪裡，直到火車開到終點站。"
  },
  {
    "word": "entertaining",
    "pos": "adj.",
    "cn_def": "有娛樂性的；令人愉快的",
    "en_def": "fun to watch or listen to",
    "sentence": "A: What kind of speaker should we invite to the company's year-end party, since last year's guest was rather boring? B: Let's hire someone {{BLANK}}, like a comedian or a magician, because staff want to relax, laugh, and enjoy the evening after working so hard all year.",
    "cn": "A：公司尾牙我們該邀請哪種講者？去年的來賓相當無聊。 B：我們請個【有娛樂性】的人吧，像喜劇演員或魔術師，因為員工辛苦工作一整年後想放鬆、大笑、享受這個晚上。"
  },
  {
    "word": "amusing",
    "pos": "adj.",
    "cn_def": "好笑的；有趣的",
    "en_def": "funny and making people smile or laugh",
    "sentence": "A: Why was everyone in the office laughing so loudly after lunch, and should I be worried about the noise? B: Not at all, the sales manager just shared an {{BLANK}} story about how his dog ran into the video meeting yesterday and barked at the clients during his presentation.",
    "cn": "A：為什麼午餐後辦公室裡大家笑得那麼大聲？我需要擔心這些噪音嗎？ B：完全不用，業務經理剛剛分享了一個【好笑】的故事，說他的狗昨天在他簡報時衝進視訊會議對著客戶叫。"
  },
  {
    "word": "compelling",
    "pos": "adj.",
    "cn_def": "有說服力的；令人信服的",
    "en_def": "very strong and convincing",
    "sentence": "A: Do you think the board will approve the plan to open a second branch in Kaohsiung next spring? B: I think so, because the finance team prepared a {{BLANK}} report showing strong demand, low rent, and enough skilled workers, so the directors will find it hard to say no.",
    "cn": "A：你認為董事會會核准明年春天在高雄開第二家分店的計畫嗎？ B：我想會，因為財務團隊準備了一份【有說服力的】報告，顯示需求強勁、租金低廉且有足夠的熟練員工，董事們很難拒絕。"
  },
  {
    "word": "stimulating",
    "pos": "adj.",
    "cn_def": "激發思考的；刺激的",
    "en_def": "full of new ideas that make you think",
    "sentence": "A: How was the two-day leadership course that the company paid for in Taichung last week? B: It was really {{BLANK}}, because the discussions made us think about our own problems in new ways, and I came back to the office with many fresh ideas for my team.",
    "cn": "A：公司上週在台中出錢讓你參加的兩天領導力課程怎麼樣？ B：真的很【激發思考】，因為討論讓我們用新的方式思考自己的問題，我回到辦公室時帶著許多給團隊的新點子。"
  },
  {
    "word": "thought-provoking",
    "pos": "adj.",
    "cn_def": "發人深省的",
    "en_def": "making people think seriously about something",
    "sentence": "A: Why did the department manager ask all of us to watch that short documentary before the meeting on Monday morning? B: She said it was a {{BLANK}} film about how small companies waste energy, and she hopes it will make us question our own habits and suggest real changes.",
    "cn": "A：部門經理為什麼要我們在週一早上開會前看那部短紀錄片？ B：她說那是一部關於小公司如何浪費能源的【發人深省】的影片，希望讓我們反思自己的習慣並提出真正的改變。"
  },
  {
    "word": "exciting",
    "pos": "adj.",
    "cn_def": "令人興奮的",
    "en_def": "making you feel happy and full of energy",
    "sentence": "A: Have you heard the news that our company will launch its new electric scooter at the Taipei trade show next month? B: Yes, it's very {{BLANK}} for everyone in the design team, because we have worked on this product for two years and finally people will see it.",
    "cn": "A：你聽說公司下個月要在台北商展推出新款電動機車了嗎？ B：聽說了，這對設計團隊每個人來說都非常【令人興奮】，因為我們做這個產品兩年了，終於能讓大家看到。"
  },
  {
    "word": "appealing",
    "pos": "adj.",
    "cn_def": "吸引人的；有魅力的",
    "en_def": "attractive or interesting to someone",
    "sentence": "A: Why did the restaurant change its menu design after only three months, since the old one looked fine to me? B: The owner wanted it to be more {{BLANK}} to young customers, so she added bright photos, shorter descriptions, and cheaper lunch sets that office workers can afford.",
    "cn": "A：為什麼那家餐廳才三個月就改了菜單設計？我覺得舊的看起來還不錯。 B：老闆想讓它對年輕顧客更【有吸引力】，所以加了鮮豔的照片、更短的說明，以及上班族負擔得起的平價午餐套餐。"
  },
  {
    "word": "curious",
    "pos": "adj.",
    "cn_def": "好奇的",
    "en_def": "wanting to know or learn about something",
    "sentence": "A: Why does the new receptionist ask so many questions about every department in the building during her lunch break? B: She is simply {{BLANK}} and wants to understand how the whole company works, so she can direct visitors to the right office quickly and answer phone calls better.",
    "cn": "A：為什麼新來的接待員午休時問那麼多關於大樓裡每個部門的問題？ B：她只是很【好奇】，想了解整間公司如何運作，這樣她就能很快把訪客帶到正確的辦公室，也能更好地接聽電話。"
  },
  {
    "word": "remarkable",
    "pos": "adj.",
    "cn_def": "非凡的；值得注意的",
    "en_def": "unusual or special in a way that people notice",
    "sentence": "A: How did the small online shop manage to double its sales in just six months, even during a slow economy? B: It was a {{BLANK}} achievement, because the owner used social media cleverly, offered free delivery, and answered every customer message within one hour, even late at night.",
    "cn": "A：那家小網路商店怎麼能在經濟不景氣時只花六個月就讓營業額翻倍？ B：那是個【非凡的】成就，因為老闆巧妙運用社群媒體、提供免運，而且即使深夜也在一小時內回覆每則顧客訊息。"
  },
  {
    "word": "noteworthy",
    "pos": "adj.",
    "cn_def": "值得注意的",
    "en_def": "important or interesting enough to notice",
    "sentence": "A: Is there anything special in the quarterly report that I should mention when I present it to the director tomorrow? B: The most {{BLANK}} point is that customer complaints dropped by forty percent after we hired more staff, so you should put that on the first slide.",
    "cn": "A：季報裡有什麼特別的內容是我明天向主管報告時應該提到的嗎？ B：最【值得注意的】一點是我們增聘人手後客訴下降了百分之四十，所以你應該把它放在第一張投影片。"
  },
  {
    "word": "impressive",
    "pos": "adj.",
    "cn_def": "令人印象深刻的",
    "en_def": "making people admire it",
    "sentence": "A: What did the visiting clients from Singapore think of our new headquarters when they came for the tour this morning? B: They found it very {{BLANK}}, especially the glass meeting rooms, the rooftop garden, and the solar panels that provide almost half of the building's electricity.",
    "cn": "A：今天早上來參觀的新加坡客戶覺得我們的新總部怎麼樣？ B：他們覺得非常【令人印象深刻】，尤其是玻璃會議室、屋頂花園，以及提供大樓將近一半電力的太陽能板。"
  },
  {
    "word": "colorful",
    "pos": "adj.",
    "cn_def": "色彩繽紛的",
    "en_def": "having many bright colors",
    "sentence": "A: Which brochure design should we choose for the summer travel promotion, the plain blue one or the other? B: I prefer the {{BLANK}} one with bright pictures of beaches, markets, and festivals, because it will catch people's eyes when they walk past our counter at the mall.",
    "cn": "A：夏季旅遊促銷我們該選哪個手冊設計，素藍色的還是另一個？ B：我比較喜歡那個有海灘、市集和節慶鮮豔圖片的【色彩繽紛】版本，因為人們經過我們在商場的櫃位時會被吸引目光。"
  },
  {
    "word": "lively",
    "pos": "adj.",
    "cn_def": "熱鬧的；活潑的",
    "en_def": "full of energy and activity",
    "sentence": "A: How was the networking event at the hotel last night, since I couldn't stay after the opening speech? B: It was very {{BLANK}}, with live music, lots of food, and about two hundred guests chatting and exchanging business cards until the staff finally turned off the lights at eleven.",
    "cn": "A：昨晚在飯店的交流活動怎麼樣？開幕致詞後我就沒辦法留下來了。 B：非常【熱鬧】，有現場音樂、很多食物，大約兩百位來賓一直聊天、交換名片，直到十一點工作人員終於關燈。"
  },
  {
    "word": "dynamic",
    "pos": "adj.",
    "cn_def": "有活力的；充滿幹勁的",
    "en_def": "full of energy and new ideas",
    "sentence": "A: What kind of person is the company looking for to lead the new marketing team in Hong Kong? B: They want a {{BLANK}} leader who is full of energy, can make quick decisions in a fast-changing market, and can encourage young staff to try new ideas without fear.",
    "cn": "A：公司在找什麼樣的人來帶領香港的新行銷團隊？ B：他們要一位【有活力的】領導者，精力充沛、能在快速變化的市場中迅速決策，並能鼓勵年輕員工無懼地嘗試新點子。"
  },
  {
    "word": "novel",
    "pos": "adj.",
    "cn_def": "新穎的；新奇的",
    "en_def": "new and different from anything before",
    "sentence": "A: How is the startup planning to reduce food waste in supermarkets, since many companies have already tried and failed? B: They have a {{BLANK}} idea that nobody has used before, which is an app that tells shoppers when fresh food will be discounted near closing time each day.",
    "cn": "A：那家新創公司打算怎麼減少超市的食物浪費？許多公司都試過也失敗了。 B：他們有一個前所未有的【新穎】點子，是一個應用程式，會告訴購物者每天快打烊時哪些生鮮食品會打折。"
  },
  {
    "word": "unique",
    "pos": "adj.",
    "cn_def": "獨特的；獨一無二的",
    "en_def": "being the only one of its kind",
    "sentence": "A: Why are tourists willing to pay so much more to stay at that small hotel in the mountains? B: The hotel offers a {{BLANK}} experience that you can't find anywhere else, because every room is built inside an old tea factory and guests can pick tea leaves in the morning.",
    "cn": "A：為什麼遊客願意花多那麼多錢住那間山上的小旅館？ B：那間旅館提供在別處找不到的【獨特】體驗，因為每間客房都蓋在一座老茶廠裡，房客早上還能採茶。"
  },
  {
    "word": "unusual",
    "pos": "adj.",
    "cn_def": "不尋常的；罕見的",
    "en_def": "different from what is normal or expected",
    "sentence": "A: Did anything strange happen at the warehouse last night, because the security guard called me very early this morning? B: Yes, he noticed something {{BLANK}}, since the back door was open and the lights were on, although everyone had left at six, so he checked the cameras right away.",
    "cn": "A：昨晚倉庫發生什麼怪事了嗎？保全今天一大早就打電話給我。 B：是的，他注意到一些【不尋常】的情況，雖然大家六點就離開了，但後門開著、燈也亮著，所以他立刻檢查了監視器。"
  },
  {
    "word": "refreshing",
    "pos": "adj.",
    "cn_def": "令人耳目一新的",
    "en_def": "pleasantly new and different",
    "sentence": "A: What did you think of the new manager's first speech to the staff at the meeting this morning? B: It was {{BLANK}} to hear a boss admit his own mistakes and ask for honest feedback, because our last manager never listened to anyone and always blamed the team instead.",
    "cn": "A：你覺得新經理今天早上在會議上對員工的第一次談話如何？ B：聽到老闆承認自己的錯誤並請大家給真誠的意見，真是【令人耳目一新】，因為我們前一任經理從不聽任何人說話，總是怪罪團隊。"
  },
  {
    "word": "enjoyable",
    "pos": "adj.",
    "cn_def": "令人愉快的",
    "en_def": "giving pleasure",
    "sentence": "A: How was your business trip to Tokyo last week, and did you have any free time after the meetings? B: It was very {{BLANK}}, because the clients were friendly, the meetings went smoothly, and on the last evening I visited a famous market and tried some excellent local food.",
    "cn": "A：你上週去東京出差怎麼樣？開完會後有空閒時間嗎？ B：非常【愉快】，因為客戶很友善、會議很順利，最後一晚我還去了一個有名的市場，品嚐了一些很棒的當地美食。"
  },
  {
    "word": "fun",
    "pos": "adj.",
    "cn_def": "好玩的；有趣的",
    "en_def": "enjoyable and entertaining",
    "sentence": "A: Should we plan a team-building activity for the new employees before the busy season starts next month? B: Yes, let's organize a cooking class or a bowling night, because it will be {{BLANK}} for everyone and help people from different departments get to know each other better.",
    "cn": "A：我們要不要在下個月旺季開始前為新員工規劃一個團隊建立活動？ B：好，我們來辦烹飪課或保齡球之夜吧，因為大家都會覺得很【好玩】，也能幫助不同部門的人更認識彼此。"
  },
  {
    "word": "riveting",
    "pos": "adj.",
    "cn_def": "極吸引人的；扣人心弦的",
    "en_def": "so interesting that you cannot stop paying attention",
    "sentence": "A: Why did the conference room stay full after the final session, even though it was already past six o'clock? B: The guest speaker gave a {{BLANK}} talk about how she rebuilt her failing company, and nobody wanted to leave before she answered the last question from the audience.",
    "cn": "A：為什麼最後一場議程結束後會議室還是坐滿人，明明已經過了六點？ B：客座講者發表了一場關於她如何重建瀕臨倒閉公司的【扣人心弦的】演講，在她回答完觀眾最後一個問題前沒有人想離開。"
  },
  {
    "word": "spellbinding",
    "pos": "adj.",
    "cn_def": "令人著迷的；迷人的",
    "en_def": "holding your attention completely, as if by magic",
    "sentence": "A: Did you see the dance performance at the opening ceremony of the international trade fair yesterday afternoon? B: Yes, it was absolutely {{BLANK}}, because the dancers moved so beautifully with the lights and music that the whole hall became silent and many visitors recorded it on their phones.",
    "cn": "A：你昨天下午有看到國際商展開幕典禮上的舞蹈表演嗎？ B：有，真是太【令人著迷】了，舞者隨著燈光和音樂跳得那麼美，整個大廳都安靜下來，很多參觀者用手機錄了下來。"
  },
  {
    "word": "memorable",
    "pos": "adj.",
    "cn_def": "難忘的",
    "en_def": "special and easy to remember",
    "sentence": "A: What would you like to do for the company's tenth anniversary celebration in December, since it's a big event? B: I'd like to make it truly {{BLANK}} for our staff and clients, so let's rent a boat for a dinner cruise and give everyone a special photo book as a gift.",
    "cn": "A：公司十二月的十週年慶祝活動你想怎麼辦？這可是件大事。 B：我想讓它對員工和客戶來說真正【難忘】，所以我們租一艘船辦晚餐遊船，並送每個人一本特別的相簿當禮物。"
  },
  {
    "word": "vivid",
    "pos": "adj.",
    "cn_def": "鮮明的；生動的",
    "en_def": "very clear and detailed in your mind",
    "sentence": "A: Can you describe the man who came into the shop and left without paying for the camera yesterday? B: I have a {{BLANK}} picture of him in my mind, because he wore a bright red jacket, a yellow cap, and black sunglasses, so I can tell the police exactly what he looked like.",
    "cn": "A：你能描述昨天進店裡拿了相機沒付錢就離開的那個男人嗎？ B：我腦中對他有很【鮮明的】印象，因為他穿著亮紅色外套、戴黃色帽子和黑色太陽眼鏡，所以我可以準確告訴警方他的長相。"
  },
  {
    "word": "charismatic",
    "pos": "adj.",
    "cn_def": "有魅力的；有領袖氣質的",
    "en_def": "having a strong personal charm that attracts people",
    "sentence": "A: Why do so many young employees want to join the team led by Ms. Lin, even though the work is hard? B: She is a {{BLANK}} leader who speaks with warmth and confidence, and people naturally trust her, so they feel excited to follow her ideas and work long hours.",
    "cn": "A：為什麼這麼多年輕員工想加入林小姐帶領的團隊，即使工作很辛苦？ B：她是一位【有魅力的】領導者，說話溫暖又有自信，大家自然信任她，所以很樂意跟隨她的想法並長時間工作。"
  },
  {
    "word": "alluring",
    "pos": "adj.",
    "cn_def": "誘人的；極具吸引力的",
    "en_def": "very attractive and tempting",
    "sentence": "A: Why did the travel agency's new advertisement bring in so many customers during the first week of the campaign? B: It showed an {{BLANK}} image of a quiet island with clear blue water and white sand, and many tired office workers immediately wanted to book a holiday there.",
    "cn": "A：為什麼旅行社的新廣告在活動第一週就吸引了那麼多客人？ B：廣告呈現了一座有清澈藍色海水和白沙的寧靜小島的【誘人】畫面，許多疲憊的上班族立刻想去那裡訂假期。"
  },
  {
    "word": "gripping",
    "pos": "adj.",
    "cn_def": "扣人心弦的；吸引人的",
    "en_def": "very exciting and holding your attention",
    "sentence": "A: Are you still watching that detective series that everyone in the accounting department keeps talking about at lunch? B: Yes, the story is so {{BLANK}} that I watched three episodes last night instead of sleeping, and now I'm very tired, but I really want to know the ending.",
    "cn": "A：你還在看會計部大家午餐時一直在聊的那部偵探影集嗎？ B：是啊，劇情太【扣人心弦】了，我昨晚沒睡覺連看了三集，現在很累，但我真的很想知道結局。"
  },
  {
    "word": "absorptive",
    "pos": "adj.",
    "cn_def": "有吸收力的",
    "en_def": "able to soak up liquid",
    "sentence": "A: Which type of floor mat should we order for the entrance of the hotel lobby before the rainy season starts? B: We should buy the thick {{BLANK}} mats, because they soak up water from guests' shoes and umbrellas quickly, which keeps the marble floor dry and prevents people from slipping.",
    "cn": "A：雨季開始前，我們該為飯店大廳入口訂哪種地墊？ B：我們應該買厚的【吸水】地墊，因為它們能快速吸乾客人鞋子和雨傘上的水，讓大理石地板保持乾燥，避免有人滑倒。"
  },
  {
    "word": "pleasing",
    "pos": "adj.",
    "cn_def": "令人愉悅的；悅目的",
    "en_def": "nice to look at, hear, or experience",
    "sentence": "A: What did the customers say about the new packaging for our green tea products in the survey last month? B: Most of them said the soft colors and simple design were very {{BLANK}} to the eye, and several mentioned that the boxes looked elegant enough to give as gifts.",
    "cn": "A：上個月的調查中，顧客對我們綠茶產品的新包裝有什麼看法？ B：大多數人說柔和的色彩和簡單的設計看起來很【賞心悅目】，還有幾位提到盒子看起來高雅，很適合拿來送禮。"
  }
];

const MCQS = [
  {
    "q": "The lawyer presented _____ evidence that the supplier had broken the contract. As a result, the judge ruled in our company's favor.",
    "options": [
      "compelling",
      "fragile",
      "delayed",
      "temporary"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Even twenty years later, the founder still has _____ memories of opening her first small shop. She can describe every detail of that day.",
    "options": [
      "costly",
      "vivid",
      "empty",
      "annual"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The engineers developed a _____ approach to recycling plastic that no other company had tried. The method has already reduced waste by thirty percent.",
    "options": [
      "former",
      "hollow",
      "novel",
      "rigid"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Customers were _____ about the strange green box in the shop window. Many of them came inside to ask what it contained.",
    "options": [
      "absent",
      "punctual",
      "expired",
      "curious"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The research team measured the _____ capacity of the new sponge material. It can hold up to ten times its own weight in water.",
    "options": [
      "musical",
      "absorptive",
      "verbal",
      "ethical"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The designer added bright red, yellow, and green images to the brochure. It is now much more _____ than last year's plain black version.",
    "options": [
      "colorful",
      "punctual",
      "legal",
      "silent"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Sales rose by two hundred percent in one quarter, a _____ achievement for such a small firm. The CEO thanked every employee personally.",
    "options": [
      "careless",
      "doubtful",
      "routine",
      "remarkable"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The night market was _____ with music, crowds, and food stalls until midnight. Tourists said it was the busiest place they visited in Taipei.",
    "options": [
      "empty",
      "silent",
      "lively",
      "closed"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "We are looking for a _____ sales manager with plenty of energy and fresh ideas. The candidate must adapt quickly to a fast-changing market.",
    "options": [
      "dynamic",
      "retired",
      "passive",
      "sleepy"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Each handmade bag is _____, so no two customers will ever own the same design. That is why the prices are higher than in ordinary stores.",
    "options": [
      "identical",
      "standard",
      "unique",
      "common"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "It is _____ for the CEO to visit the factory floor, so the workers were surprised to see him. He usually stays at the head office.",
    "options": [
      "typical",
      "unusual",
      "normal",
      "routine"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "After months of complaints, it was _____ to receive a thank-you letter from a happy customer. The whole team felt encouraged by her kind words.",
    "options": [
      "illegal",
      "overdue",
      "expensive",
      "refreshing"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The new headquarters, with its rooftop garden and glass walls, looks very _____. Visitors often stop to take photos of the front entrance.",
    "options": [
      "damaged",
      "shabby",
      "impressive",
      "hidden"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The company wants this year's anniversary dinner to be truly _____ for all guests. Each person will receive a photo album to remember the evening.",
    "options": [
      "memorable",
      "forgettable",
      "invisible",
      "temporary"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The new director is so _____ that employees naturally trust and follow her. Her warm voice and confident smile make every meeting feel positive.",
    "options": [
      "hostile",
      "charismatic",
      "invisible",
      "careless"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The detective series was so _____ that I watched five episodes in one night. I could not stop until I found out who the thief was.",
    "options": [
      "dull",
      "boring",
      "tedious",
      "gripping"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The speaker asked a _____ question about whether growth is always good for a company. Many people were still discussing it during lunch.",
    "options": [
      "thought-provoking",
      "meaningless",
      "trivial",
      "pointless"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The sales report included an _____ cartoon of a tired cat sitting on a pile of invoices. Everyone in the meeting laughed when they saw it.",
    "options": [
      "official",
      "urgent",
      "expensive",
      "amusing"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The magician gave an _____ show for the children during the long wedding dinner. Parents were grateful because their kids stayed happy and quiet.",
    "options": [
      "outdated",
      "entertaining",
      "unsafe",
      "invalid"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "To make the menu more _____ to young office workers, the restaurant added cheaper lunch sets. Since then, lunchtime sales have increased steadily.",
    "options": [
      "hostile",
      "harmful",
      "appealing",
      "costly"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The trainer's _____ style kept everyone involved, with frequent questions and short group activities. Nobody looked at a phone during the entire workshop.",
    "options": [
      "boring",
      "silent",
      "lazy",
      "engaging"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Working with talented colleagues from many countries is intellectually _____. I learn something new from my team almost every single day.",
    "options": [
      "stimulating",
      "illegal",
      "expired",
      "damaged"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The most _____ result of the customer survey was a forty percent drop in complaints. The manager highlighted this point on her first slide.",
    "options": [
      "careless",
      "silent",
      "noteworthy",
      "absent"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The launch of our first electric car is an _____ moment for the whole company. Staff have worked on the project for more than five years.",
    "options": [
      "idle",
      "exciting",
      "empty",
      "ordinary"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Visitors found the factory tour _____, especially the robots that packed boxes at high speed. Many asked if they could return with their families.",
    "options": [
      "fascinating",
      "tiresome",
      "pointless",
      "unbearable"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The author gave a _____ reading of her new mystery book at the bookstore. The audience sat perfectly still and listened to every word.",
    "options": [
      "dull",
      "riveting",
      "careless",
      "rusty"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Thanks to friendly clients and smooth meetings, my business trip to Tokyo was very _____. I even had time to visit a famous local market.",
    "options": [
      "stressful",
      "disastrous",
      "unpleasant",
      "enjoyable"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "It was a really _____ day, with games, a cooking contest, and a barbecue. Everyone agreed that we should hold the event again next year.",
    "options": [
      "dull",
      "gloomy",
      "fun",
      "miserable"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The travel advertisement showed an _____ picture of a quiet island with clear blue water. Many tired office workers immediately wanted to book a holiday.",
    "options": [
      "ugly",
      "awful",
      "empty",
      "alluring"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The soft colors of the new packaging are very _____ to the eye. Customers say the boxes look elegant enough to give as gifts.",
    "options": [
      "pleasing",
      "harmful",
      "painful",
      "rude"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "fascinating": {
    "pos": "adj.",
    "en_def": "extremely interesting",
    "cn_def": "極有趣的；迷人的"
  },
  "engaging": {
    "pos": "adj.",
    "en_def": "interesting and able to keep people involved",
    "cn_def": "吸引人參與的；有魅力的"
  },
  "captivating": {
    "pos": "adj.",
    "en_def": "so attractive that you keep watching or listening",
    "cn_def": "迷人的；令人著迷的"
  },
  "intriguing": {
    "pos": "adj.",
    "en_def": "strange or unusual in a way that makes you want to know more",
    "cn_def": "耐人尋味的；引起好奇的"
  },
  "absorbing": {
    "pos": "adj.",
    "en_def": "so interesting that it holds all your attention",
    "cn_def": "引人入勝的；令人全神貫注的"
  },
  "entertaining": {
    "pos": "adj.",
    "en_def": "fun to watch or listen to",
    "cn_def": "有娛樂性的；令人愉快的"
  },
  "amusing": {
    "pos": "adj.",
    "en_def": "funny and making people smile or laugh",
    "cn_def": "好笑的；有趣的"
  },
  "compelling": {
    "pos": "adj.",
    "en_def": "very strong and convincing",
    "cn_def": "有說服力的；令人信服的"
  },
  "stimulating": {
    "pos": "adj.",
    "en_def": "full of new ideas that make you think",
    "cn_def": "激發思考的；刺激的"
  },
  "thought-provoking": {
    "pos": "adj.",
    "en_def": "making people think seriously about something",
    "cn_def": "發人深省的"
  },
  "exciting": {
    "pos": "adj.",
    "en_def": "making you feel happy and full of energy",
    "cn_def": "令人興奮的"
  },
  "appealing": {
    "pos": "adj.",
    "en_def": "attractive or interesting to someone",
    "cn_def": "吸引人的；有魅力的"
  },
  "curious": {
    "pos": "adj.",
    "en_def": "wanting to know or learn about something",
    "cn_def": "好奇的"
  },
  "remarkable": {
    "pos": "adj.",
    "en_def": "unusual or special in a way that people notice",
    "cn_def": "非凡的；值得注意的"
  },
  "noteworthy": {
    "pos": "adj.",
    "en_def": "important or interesting enough to notice",
    "cn_def": "值得注意的"
  },
  "impressive": {
    "pos": "adj.",
    "en_def": "making people admire it",
    "cn_def": "令人印象深刻的"
  },
  "colorful": {
    "pos": "adj.",
    "en_def": "having many bright colors",
    "cn_def": "色彩繽紛的"
  },
  "lively": {
    "pos": "adj.",
    "en_def": "full of energy and activity",
    "cn_def": "熱鬧的；活潑的"
  },
  "dynamic": {
    "pos": "adj.",
    "en_def": "full of energy and new ideas",
    "cn_def": "有活力的；充滿幹勁的"
  },
  "novel": {
    "pos": "adj.",
    "en_def": "new and different from anything before",
    "cn_def": "新穎的；新奇的"
  },
  "unique": {
    "pos": "adj.",
    "en_def": "being the only one of its kind",
    "cn_def": "獨特的；獨一無二的"
  },
  "unusual": {
    "pos": "adj.",
    "en_def": "different from what is normal or expected",
    "cn_def": "不尋常的；罕見的"
  },
  "refreshing": {
    "pos": "adj.",
    "en_def": "pleasantly new and different",
    "cn_def": "令人耳目一新的"
  },
  "enjoyable": {
    "pos": "adj.",
    "en_def": "giving pleasure",
    "cn_def": "令人愉快的"
  },
  "fun": {
    "pos": "adj.",
    "en_def": "enjoyable and entertaining",
    "cn_def": "好玩的；有趣的"
  },
  "riveting": {
    "pos": "adj.",
    "en_def": "so interesting that you cannot stop paying attention",
    "cn_def": "極吸引人的；扣人心弦的"
  },
  "spellbinding": {
    "pos": "adj.",
    "en_def": "holding your attention completely, as if by magic",
    "cn_def": "令人著迷的；迷人的"
  },
  "memorable": {
    "pos": "adj.",
    "en_def": "special and easy to remember",
    "cn_def": "難忘的"
  },
  "vivid": {
    "pos": "adj.",
    "en_def": "very clear and detailed in your mind",
    "cn_def": "鮮明的；生動的"
  },
  "charismatic": {
    "pos": "adj.",
    "en_def": "having a strong personal charm that attracts people",
    "cn_def": "有魅力的；有領袖氣質的"
  },
  "alluring": {
    "pos": "adj.",
    "en_def": "very attractive and tempting",
    "cn_def": "誘人的；極具吸引力的"
  },
  "gripping": {
    "pos": "adj.",
    "en_def": "very exciting and holding your attention",
    "cn_def": "扣人心弦的；吸引人的"
  },
  "absorptive": {
    "pos": "adj.",
    "en_def": "able to soak up liquid",
    "cn_def": "有吸收力的"
  },
  "pleasing": {
    "pos": "adj.",
    "en_def": "nice to look at, hear, or experience",
    "cn_def": "令人愉悅的；悅目的"
  }
};

const EXTRA_GLOSSES = {};
