// Topic 205 Quiz Data: Jewelry 珠寶
// Source word list: https://www.examword.com/group-topic/jewelry — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T205 - Jewelry 珠寶",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "jewel",
    "pos": "n.",
    "cn_def": "寶石；珠寶",
    "en_def": "a valuable stone that has been cut and polished",
    "sentence": "A: Why is the security guard standing next to the glass display case near the front entrance of the store today? B: The manager just placed a rare blue {{BLANK}} from a famous collection there, and the insurance company asked us to protect it carefully during the three-day exhibition.",
    "cn": "A：為什麼今天警衛站在店門口附近的玻璃展示櫃旁邊？ B：經理剛把一顆來自知名收藏的稀有藍色【寶石】放在那裡，保險公司要求我們在為期三天的展覽期間小心保護它。"
  },
  {
    "word": "gem",
    "pos": "n.",
    "cn_def": "寶石",
    "en_def": "a beautiful stone that is cut and used in jewelry",
    "sentence": "A: Did the supplier from Thailand send the samples we ordered for the new spring collection last month? B: Yes, the package arrived this morning, and each green {{BLANK}} was wrapped in soft cloth, so our designers can start choosing which stones to use in the rings.",
    "cn": "A：泰國的供應商有寄來我們上個月為新春季系列訂購的樣品嗎？ B：有，包裹今天早上到了，每顆綠色【寶石】都用軟布包著，所以我們的設計師可以開始挑選要用在戒指上的石頭了。"
  },
  {
    "word": "diamond",
    "pos": "n.",
    "cn_def": "鑽石",
    "en_def": "a very hard, clear and valuable stone",
    "sentence": "A: Why did the young customer spend almost an hour at the counter talking with our senior sales assistant this afternoon? B: He is planning to propose to his girlfriend next month, so he wanted to compare the size, color, and price of every {{BLANK}} we have in stock.",
    "cn": "A：為什麼那位年輕顧客今天下午在櫃檯和我們的資深銷售助理談了將近一個小時？ B：他打算下個月向女朋友求婚，所以想比較我們店裡每一顆【鑽石】的大小、顏色和價格。"
  },
  {
    "word": "gold",
    "pos": "n.",
    "cn_def": "黃金；金",
    "en_def": "a valuable yellow metal",
    "sentence": "A: Why have so many customers been asking about our prices since the news report on Monday morning? B: The price of {{BLANK}} rose sharply this week because investors are worried about the economy, so people want to buy necklaces and coins before they become even more expensive.",
    "cn": "A：為什麼從星期一早上的新聞報導之後，就有這麼多顧客來詢問我們的價格？ B：因為投資人擔心經濟狀況，這週【黃金】的價格大幅上漲，所以大家想在項鍊和硬幣變得更貴之前先買。"
  },
  {
    "word": "silver",
    "pos": "n.",
    "cn_def": "銀",
    "en_def": "a shiny gray-white valuable metal",
    "sentence": "A: What kind of gift did the human resources team choose for employees who have worked here for ten years? B: They ordered small photo frames made of {{BLANK}}, because the metal looks bright and classic, and it costs much less than the gold watches we gave last year.",
    "cn": "A：人資團隊為在這裡工作滿十年的員工選了什麼禮物？ B：他們訂了【銀】製的小相框，因為這種金屬看起來明亮又經典，而且比我們去年送的金錶便宜得多。"
  },
  {
    "word": "platinum",
    "pos": "n.",
    "cn_def": "鉑；白金",
    "en_def": "a very valuable, heavy silver-white metal",
    "sentence": "A: Why is this wedding band so much more expensive than the white gold one in the next tray? B: It is made of {{BLANK}}, which is heavier, rarer, and stronger, so it will keep its color for many years and will not cause skin problems for most customers.",
    "cn": "A：為什麼這枚婚戒比隔壁托盤裡的白K金戒指貴這麼多？ B：它是用【鉑金】做的，比較重、比較稀有也更堅固，所以多年後顏色也不會變，而且大多數顧客戴了也不會有皮膚問題。"
  },
  {
    "word": "necklace",
    "pos": "n.",
    "cn_def": "項鍊",
    "en_def": "a piece of jewelry worn around the neck",
    "sentence": "A: What should I wear with my black dress for the company's annual dinner at the hotel on Friday night? B: A simple {{BLANK}} with one small pearl would look lovely around your neck, and it won't take attention away from the elegant design of the dress.",
    "cn": "A：星期五晚上公司在飯店的年度晚宴，我的黑色洋裝要搭配什麼？ B：一條只有一顆小珍珠的簡單【項鍊】戴在你脖子上會很好看，而且不會搶走洋裝優雅設計的風采。"
  },
  {
    "word": "ring",
    "pos": "n.",
    "cn_def": "戒指",
    "en_def": "a small circle of metal worn on a finger",
    "sentence": "A: Why does the receptionist look so worried while she is searching under the desks in the lobby this morning? B: She took off her wedding {{BLANK}} to wash her hands before the meeting, and now she can't find it anywhere, so we are all helping her look.",
    "cn": "A：為什麼接待員今天早上在大廳的桌子底下找東西時看起來這麼擔心？ B：她開會前把結婚【戒指】拿下來洗手，現在到處都找不到，所以我們都在幫她找。"
  },
  {
    "word": "bracelet",
    "pos": "n.",
    "cn_def": "手鍊；手環",
    "en_def": "a piece of jewelry worn around the wrist",
    "sentence": "A: Have you decided what to buy your manager for her retirement party next Thursday after work? B: Yes, our team collected money together, and we chose a thin gold {{BLANK}} that she can wear on her wrist every day to remember her twenty years with us.",
    "cn": "A：你決定好下週四下班後要買什麼給經理當退休派對的禮物了嗎？ B：決定了，我們團隊一起湊了錢，選了一條細細的金【手鍊】，她可以每天戴在手腕上，紀念和我們共事的二十年。"
  },
  {
    "word": "earring",
    "pos": "n.",
    "cn_def": "耳環",
    "en_def": "a piece of jewelry worn on the ear",
    "sentence": "A: Why did the customer return to the shop only two days after buying that pair of gold hoops? B: One {{BLANK}} fell off while she was riding the bus to work, so she wants to know if we can make a new one that matches the other perfectly.",
    "cn": "A：為什麼那位顧客買了那對金色圈形耳環才兩天就回到店裡？ B：她搭公車上班時掉了一隻【耳環】，所以想知道我們能不能做一隻和另一隻完全相配的新的。"
  },
  {
    "word": "pendant",
    "pos": "n.",
    "cn_def": "墜子；吊墜",
    "en_def": "a small piece of jewelry that hangs from a chain",
    "sentence": "A: Is there anything special about the necklace that the sales team is giving to our top client this year? B: Yes, the chain is quite simple, but the heart-shaped {{BLANK}} hanging from it opens up, so she can put a small photo of her family inside.",
    "cn": "A：今年銷售團隊要送給我們最大客戶的項鍊有什麼特別之處嗎？ B：有，鍊子很簡單，但掛在上面的心形【墜子】可以打開，所以她可以在裡面放一張家人的小照片。"
  },
  {
    "word": "brooch",
    "pos": "n.",
    "cn_def": "胸針",
    "en_def": "a piece of jewelry fastened to clothes with a pin",
    "sentence": "A: What did the speaker wear on her jacket during the opening ceremony of the trade fair yesterday morning? B: She pinned a large {{BLANK}} shaped like a butterfly near her collar, and many visitors asked her where they could buy one after the speech.",
    "cn": "A：昨天早上貿易展開幕典禮時，演講者的外套上戴了什麼？ B：她在衣領附近別了一個蝴蝶形狀的大【胸針】，演講結束後很多參觀者問她在哪裡可以買到。"
  },
  {
    "word": "anklet",
    "pos": "n.",
    "cn_def": "腳鍊",
    "en_def": "a chain or band worn around the ankle",
    "sentence": "A: Which items sell best at our beach resort gift shop during the hot summer months each year? B: Tourists love the thin silver {{BLANK}} with tiny shells, because they can wear it around the ankle with sandals while walking along the sand.",
    "cn": "A：每年炎熱的夏季月份，我們海灘度假村的禮品店裡哪些商品賣得最好？ B：遊客很喜歡綴有小貝殼的細銀【腳鍊】，因為走在沙灘上時可以搭配涼鞋戴在腳踝上。"
  },
  {
    "word": "bead",
    "pos": "n.",
    "cn_def": "珠子",
    "en_def": "a small ball with a hole, used to make jewelry",
    "sentence": "A: What activity has the community center planned for the children's workshop on Saturday afternoon this weekend? B: The volunteers will teach the kids to make simple bracelets, and each child can choose a colorful glass {{BLANK}} for every letter of their name before putting them on a string.",
    "cn": "A：社區中心這週六下午的兒童工作坊安排了什麼活動？ B：志工會教孩子們做簡單的手鍊，每個孩子可以為名字的每個字母選一顆彩色玻璃【珠子】，再把它們串在線上。"
  },
  {
    "word": "pearl",
    "pos": "n.",
    "cn_def": "珍珠",
    "en_def": "a small, smooth, white ball that grows inside an oyster",
    "sentence": "A: Why are the earrings in this display case cheaper than the ones in the window near the entrance? B: Each {{BLANK}} in this case was grown on a farm, while the ones in the window were found naturally in the ocean, which makes them much rarer and more valuable.",
    "cn": "A：為什麼這個展示櫃裡的耳環比入口附近櫥窗裡的便宜？ B：這個櫃子裡的每顆【珍珠】都是養殖的，而櫥窗裡的是在海裡天然找到的，所以稀有和珍貴得多。"
  },
  {
    "word": "crystal",
    "pos": "n.",
    "cn_def": "水晶",
    "en_def": "a clear, high-quality glass or mineral that shines",
    "sentence": "A: What did the hotel decide to put in the main ballroom before the international conference opens next month? B: They hung a huge light made of {{BLANK}} from the ceiling, and when the lamps are switched on, the clear pieces send small rainbows across the walls.",
    "cn": "A：飯店決定在下個月國際會議開幕前，在主宴會廳放什麼？ B：他們在天花板上掛了一盞用【水晶】做的巨大吊燈，燈一打開，那些透明的小片就會在牆上映出小小的彩虹。"
  },
  {
    "word": "ornament",
    "pos": "n.",
    "cn_def": "裝飾品",
    "en_def": "an object used to decorate something",
    "sentence": "A: What should we buy to make the reception area look more festive before the holiday season starts next week? B: Let's order a small tree and hang a shiny {{BLANK}} on each branch, so visitors feel welcome as soon as they walk into our office.",
    "cn": "A：下週假期季開始前，我們該買什麼讓接待區看起來更有節慶氣氛？ B：我們訂一棵小樹，在每根樹枝上掛一個閃亮的【裝飾品】，這樣訪客一走進辦公室就會覺得受到歡迎。"
  },
  {
    "word": "accessory",
    "pos": "n.",
    "cn_def": "配件；飾品",
    "en_def": "a small item like a belt or scarf worn with clothes",
    "sentence": "A: Why are our scarf and belt sales growing faster than our dress sales this quarter, according to the report? B: Many shoppers want to update their old outfits without spending much money, so a cheap {{BLANK}} like a colorful scarf is an easy way to look fresh.",
    "cn": "A：根據報告，為什麼這一季我們圍巾和皮帶的銷售成長得比洋裝快？ B：很多購物者想不花太多錢就讓舊衣服有新感覺，所以像彩色圍巾這樣便宜的【配件】是讓自己看起來煥然一新的簡單方法。"
  },
  {
    "word": "sparkle",
    "pos": "v.",
    "cn_def": "閃耀；閃閃發光",
    "en_def": "to shine with many small flashes of light",
    "sentence": "A: Why did the store manager ask the electricians to change all the lights above the display cases yesterday? B: The old bulbs were too yellow and weak, but the new bright lights make the diamonds {{BLANK}} beautifully, which helps customers notice them from across the room.",
    "cn": "A：為什麼店經理昨天要電工把展示櫃上方的燈全部換掉？ B：舊燈泡太黃又太暗，但新的明亮燈光讓鑽石美麗地【閃閃發光】，有助於顧客從房間另一頭就注意到它們。"
  },
  {
    "word": "polish",
    "pos": "v.",
    "cn_def": "擦亮；拋光",
    "en_def": "to rub something to make it clean and shiny",
    "sentence": "A: How often do the staff need to clean the silver jewelry that we keep in the front window? B: We should {{BLANK}} every piece with a soft cloth at least twice a week, because the metal slowly turns dark when it is exposed to air and sunlight.",
    "cn": "A：員工多久需要清潔一次我們放在前面櫥窗裡的銀飾？ B：我們應該至少每週兩次用軟布把每一件【擦亮】，因為這種金屬暴露在空氣和陽光下會慢慢變黑。"
  },
  {
    "word": "engrave",
    "pos": "v.",
    "cn_def": "雕刻；刻上",
    "en_def": "to cut words or pictures into a hard surface",
    "sentence": "A: Can your shop add the date of our company's founding to the back of these watches before the anniversary party? B: Certainly, our technician can {{BLANK}} the date and your logo on each one, but it will take about five working days to finish all fifty pieces.",
    "cn": "A：周年派對之前，你們店可以在這些手錶背面加上我們公司成立的日期嗎？ B：當然可以，我們的技師可以在每一支上【刻上】日期和你們的標誌，但完成全部五十支大約需要五個工作天。"
  },
  {
    "word": "craft",
    "pos": "v.",
    "cn_def": "精心製作；手工打造",
    "en_def": "to make something skillfully, often by hand",
    "sentence": "A: Why are the rings from that small family workshop so popular with our customers in the city? B: The owners {{BLANK}} each piece by hand in their studio, using traditional tools and methods, so no two rings look exactly the same, and buyers feel they own something unique.",
    "cn": "A：為什麼那家小型家庭工作室的戒指這麼受我們城市顧客的歡迎？ B：老闆們在工作室裡用傳統工具和方法手工【精心製作】每一件作品，所以沒有兩枚戒指看起來完全一樣，買家會覺得自己擁有獨一無二的東西。"
  },
  {
    "word": "design",
    "pos": "v.",
    "cn_def": "設計",
    "en_def": "to plan and draw how something will look",
    "sentence": "A: Who is responsible for creating the new wedding collection that we plan to launch at the fashion show in March? B: Our team has hired a young artist from Milan to {{BLANK}} the rings and necklaces, and she will share her first sketches with us next Monday.",
    "cn": "A：誰負責打造我們打算三月在時裝秀上推出的新婚禮系列？ B：我們團隊請了一位來自米蘭的年輕藝術家來【設計】戒指和項鍊，她下週一會和我們分享她的初稿。"
  },
  {
    "word": "luxury",
    "pos": "n.",
    "cn_def": "奢華；奢侈",
    "en_def": "great comfort and expensive things",
    "sentence": "A: Why did the company decide to open its new jewelry store in the most expensive shopping district downtown? B: Our main customers are wealthy business people who enjoy {{BLANK}}, so being next to famous fashion brands helps us attract buyers who are willing to pay high prices.",
    "cn": "A：為什麼公司決定把新珠寶店開在市中心最昂貴的購物區？ B：我們的主要客群是喜歡【奢華】的富有商務人士，所以開在知名時尚品牌旁邊有助於吸引願意付高價的買家。"
  },
  {
    "word": "precious",
    "pos": "adj.",
    "cn_def": "珍貴的；貴重的",
    "en_def": "rare and worth a lot of money",
    "sentence": "A: Why does the insurance company want a full list of every item in our safe before the end of the month? B: We keep many {{BLANK}} stones like rubies and emeralds there, and the insurer needs to know their exact value in case they are stolen or damaged.",
    "cn": "A：為什麼保險公司要在月底前拿到我們保險箱裡每件物品的完整清單？ B：我們在那裡存放了許多紅寶石和祖母綠之類的【貴重】寶石，保險公司需要知道它們的確切價值，以防被偷或損壞。"
  },
  {
    "word": "delicate",
    "pos": "adj.",
    "cn_def": "精緻的；易損壞的",
    "en_def": "fine and easy to break or damage",
    "sentence": "A: Should I put this thin gold chain in the same box as the heavy watches when I pack the order? B: No, please wrap it separately in tissue paper, because the chain is very {{BLANK}} and could easily break or get tangled during shipping to the customer.",
    "cn": "A：我包裝訂單時，應該把這條細金鍊和那些重手錶放在同一個盒子裡嗎？ B：不行，請用薄紙另外包好，因為這條鍊子非常【精細易損】，寄給客戶的途中很容易斷掉或纏在一起。"
  },
  {
    "word": "elegant",
    "pos": "adj.",
    "cn_def": "優雅的",
    "en_def": "graceful and attractive in a simple way",
    "sentence": "A: What style of jewelry would you suggest for the actress who is attending the film awards ceremony next weekend? B: I recommend a simple diamond necklace and small matching earrings, because that {{BLANK}} look will go well with her long silk gown on the red carpet.",
    "cn": "A：你會建議下週末出席電影頒獎典禮的那位女演員戴什麼風格的珠寶？ B：我推薦一條簡單的鑽石項鍊和一對相配的小耳環，因為那種【優雅的】造型很適合她在紅毯上穿的絲質長禮服。"
  },
  {
    "word": "stylish",
    "pos": "adj.",
    "cn_def": "時髦的",
    "en_def": "fashionable and attractive",
    "sentence": "A: Why do you think so many young office workers have been visiting our new shop near the train station? B: We sell modern, {{BLANK}} earrings and rings at reasonable prices, so they can follow the latest fashion trends without spending their whole monthly salary.",
    "cn": "A：你覺得為什麼有這麼多年輕上班族來我們在火車站附近的新店？ B：我們以合理的價格販售新潮又【時髦的】耳環和戒指，所以他們不用花掉整個月的薪水就能跟上最新的時尚潮流。"
  },
  {
    "word": "shiny",
    "pos": "adj.",
    "cn_def": "閃亮的",
    "en_def": "bright and reflecting light",
    "sentence": "A: How can we tell whether this old ring is real gold or just cheap metal covered with paint? B: Let's ask the expert to test it, because a surface that looks {{BLANK}} and new is not always proof that the metal inside is valuable.",
    "cn": "A：我們要怎麼分辨這枚舊戒指是真金，還是只是塗了漆的便宜金屬？ B：我們請專家來檢測吧，因為表面看起來【閃亮】又新，不一定能證明裡面的金屬很值錢。"
  },
  {
    "word": "ornamental",
    "pos": "adj.",
    "cn_def": "裝飾性的",
    "en_def": "used for decoration, not for a practical purpose",
    "sentence": "A: Do the small gold buttons on this designer jacket actually close the front, or are they just there for decoration? B: They are purely {{BLANK}}, so the jacket is held closed by a hidden zipper, but customers love how the buttons catch the light in the store.",
    "cn": "A：這件設計師外套上的小金扣真的能扣上前襟，還是只是裝飾用的？ B：它們純粹是【裝飾性的】，外套是靠隱藏式拉鍊扣合，但顧客很喜歡那些扣子在店裡反射光線的樣子。"
  },
  {
    "word": "custom",
    "pos": "adj.",
    "cn_def": "訂製的",
    "en_def": "made specially for one customer",
    "sentence": "A: Our client wants a ring that nobody else in the world has, with her initials and a special stone. Is that possible? B: Yes, we offer {{BLANK}} pieces made to each customer's exact wishes, but the process usually takes six weeks and costs more than our regular items.",
    "cn": "A：我們的客戶想要一枚世界上沒有別人擁有的戒指，上面要有她名字的縮寫和一顆特別的寶石。這可能嗎？ B：可以，我們提供完全依照每位顧客要求製作的【訂製】作品，但流程通常需要六週，而且比一般商品貴。"
  },
  {
    "word": "vintage",
    "pos": "adj.",
    "cn_def": "古董的；復古的",
    "en_def": "old, of high quality, and from an earlier time",
    "sentence": "A: Where did you find that beautiful old brooch you wore to the client meeting yesterday afternoon? B: I bought it at a {{BLANK}} shop in London last summer, and the seller told me it was made in the 1950s and once belonged to a famous actress.",
    "cn": "A：你昨天下午去見客戶時戴的那枚漂亮的舊胸針是在哪裡找到的？ B：我去年夏天在倫敦一家【古董】店買的，賣家告訴我它是1950年代製作的，而且曾經屬於一位著名女演員。"
  },
  {
    "word": "authentic",
    "pos": "adj.",
    "cn_def": "真正的；真品的",
    "en_def": "real and not a copy",
    "sentence": "A: How can our online customers be sure that the expensive watches and diamonds we sell on our website are real? B: Every item comes with a certificate from an independent expert, which proves the piece is {{BLANK}} and not a copy made by another company.",
    "cn": "A：我們的網路顧客要怎麼確定我們在網站上賣的昂貴手錶和鑽石是真的？ B：每件商品都附有獨立專家的證書，證明這件商品是【真品】，而不是其他公司做的仿冒品。"
  },
  {
    "word": "beautifully",
    "pos": "adv.",
    "cn_def": "漂亮地；精美地",
    "en_def": "in a very pleasing or attractive way",
    "sentence": "A: Did the customer like the anniversary gift box that our team prepared for his wife last week? B: He was very happy, because the necklace was {{BLANK}} wrapped in silk with a handwritten card, and he said it looked even better than the photos online.",
    "cn": "A：那位顧客喜歡我們團隊上週為他太太準備的週年紀念禮盒嗎？ B：他非常開心，因為項鍊用絲綢【精美地】包裝，還附了一張手寫卡片，他說看起來比網路上的照片還要好。"
  }
];

const MCQS = [
  {
    "q": "The museum's most famous _____ is a large red ruby that once belonged to a queen. Thousands of tourists line up to see it every day.",
    "options": [
      "jewel",
      "bracelet",
      "silver",
      "luxury"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "_____ is the hardest natural material on Earth, so it is also used in tools that cut glass. Its clear stones are also popular in rings.",
    "options": [
      "Silver",
      "Pearl",
      "Diamond",
      "Gold"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Our sales of 18-karat _____ jewelry rose by 15 percent last quarter. Customers seem to prefer the warm yellow color this year.",
    "options": [
      "silver",
      "gold",
      "platinum",
      "crystal"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Sterling _____ turns dark when it is exposed to air for a long time. Staff should clean these gray-white spoons and rings every week.",
    "options": [
      "gold",
      "pearl",
      "diamond",
      "silver"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The ring is made of _____, a rare white metal that is even heavier than gold. It is the most expensive item in our catalog.",
    "options": [
      "silver",
      "crystal",
      "platinum",
      "pearl"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The model wore a long _____ that hung down to the middle of her chest. It had twenty small pearls on a thin chain.",
    "options": [
      "necklace",
      "bracelet",
      "earring",
      "brooch"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "He slid the _____ onto her finger during the wedding ceremony. Everyone in the hall stood up and clapped loudly.",
    "options": [
      "bracelet",
      "necklace",
      "pendant",
      "ring"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Please measure your wrist before ordering this _____ online. It comes in three sizes and has a small safety clasp.",
    "options": [
      "necklace",
      "bracelet",
      "earring",
      "brooch"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "She lost one gold _____ while talking on the phone at her desk. It fell from her ear and rolled under the cabinet.",
    "options": [
      "earring",
      "bracelet",
      "necklace",
      "pendant"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The necklace has a small heart-shaped _____ hanging from the center of the chain. Customers can have initials engraved on its back.",
    "options": [
      "bracelet",
      "earring",
      "pendant",
      "ring"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The director fastened a silver _____ to the collar of her blazer with a pin. It was shaped like a small flower.",
    "options": [
      "bracelet",
      "brooch",
      "earring",
      "necklace"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Each wooden _____ on this bracelet has a small hole through its center. The craftsman threads them onto a strong cord.",
    "options": [
      "brooch",
      "earring",
      "gem",
      "bead"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "A _____ forms slowly inside an oyster when a tiny piece of sand gets trapped in its shell. Farmers in Japan grow them in calm bays.",
    "options": [
      "diamond",
      "crystal",
      "pearl",
      "bead"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Each employee was asked to bring one _____ to hang on the office holiday tree. The decorations will stay up until January.",
    "options": [
      "ornament",
      "accessory",
      "bracelet",
      "luxury"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "A leather belt is a useful _____ that can make a simple outfit look more professional. Our store sells them near the checkout.",
    "options": [
      "ornament",
      "jewel",
      "luxury",
      "accessory"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Under the bright showroom lights, the diamonds began to _____ like stars. Several customers stopped to look at the window display.",
    "options": [
      "polish",
      "sparkle",
      "engrave",
      "design"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Please _____ the silver trays with a soft cloth before the guests arrive. They look dull after being stored in the cupboard.",
    "options": [
      "polish",
      "engrave",
      "sparkle",
      "craft"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The jeweler can _____ the couple's names and wedding date inside the ring. This service is free for all customers this month.",
    "options": [
      "polish",
      "sparkle",
      "engrave",
      "design"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Our artisans _____ each silver spoon from a single sheet of metal using only hand tools. The process takes about three hours per spoon.",
    "options": [
      "sparkle",
      "craft",
      "polish",
      "engrave"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "We hired a famous architect to _____ the interior of our new flagship store. Her plans include glass walls and soft lighting.",
    "options": [
      "engrave",
      "polish",
      "sparkle",
      "design"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The hotel offers guests a life of _____ with gold bathroom fittings and silk sheets. Rooms cost over one thousand dollars per night.",
    "options": [
      "accessory",
      "ornament",
      "luxury",
      "jewel"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Gold, silver, and platinum are known as _____ metals because they are rare and valuable. Their prices change every day on world markets.",
    "options": [
      "precious",
      "delicate",
      "stylish",
      "shiny"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "This lace collar is very _____, so please wash it by hand in cold water. Machine washing could easily tear the thin threads.",
    "options": [
      "authentic",
      "custom",
      "stylish",
      "delicate"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The bride looked graceful and _____ in her simple white gown and pearl earrings. Guests said she had excellent taste.",
    "options": [
      "authentic",
      "elegant",
      "custom",
      "precious"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Young shoppers want _____ phone cases that follow the latest fashion trends. Our bright, modern designs sell out quickly.",
    "options": [
      "stylish",
      "precious",
      "authentic",
      "delicate"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "After the car was washed and waxed, its paint was so _____ that you could see your face in it. The owner was very pleased.",
    "options": [
      "authentic",
      "custom",
      "shiny",
      "precious"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Our workshop makes _____ wedding rings designed to each couple's exact wishes. Orders take about six weeks to complete.",
    "options": [
      "vintage",
      "custom",
      "authentic",
      "shiny"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "This _____ watch was made in the 1960s and still works perfectly. Collectors pay high prices for such old models.",
    "options": [
      "custom",
      "delicate",
      "stylish",
      "vintage"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The expert confirmed that the painting is _____ and not a copy. Its value immediately rose to over two million dollars.",
    "options": [
      "delicate",
      "shiny",
      "authentic",
      "vintage"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The ballroom was _____ decorated with flowers and candles for the company's anniversary dinner. Every guest took photos of the tables.",
    "options": [
      "beautifully",
      "rarely",
      "angrily",
      "barely"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "jewel": {
    "pos": "n.",
    "en_def": "a valuable stone that has been cut and polished",
    "cn_def": "寶石；珠寶"
  },
  "gem": {
    "pos": "n.",
    "en_def": "a beautiful stone that is cut and used in jewelry",
    "cn_def": "寶石"
  },
  "diamond": {
    "pos": "n.",
    "en_def": "a very hard, clear and valuable stone",
    "cn_def": "鑽石"
  },
  "gold": {
    "pos": "n.",
    "en_def": "a valuable yellow metal",
    "cn_def": "黃金；金"
  },
  "silver": {
    "pos": "n.",
    "en_def": "a shiny gray-white valuable metal",
    "cn_def": "銀"
  },
  "platinum": {
    "pos": "n.",
    "en_def": "a very valuable, heavy silver-white metal",
    "cn_def": "鉑；白金"
  },
  "necklace": {
    "pos": "n.",
    "en_def": "a piece of jewelry worn around the neck",
    "cn_def": "項鍊"
  },
  "ring": {
    "pos": "n.",
    "en_def": "a small circle of metal worn on a finger",
    "cn_def": "戒指"
  },
  "bracelet": {
    "pos": "n.",
    "en_def": "a piece of jewelry worn around the wrist",
    "cn_def": "手鍊；手環"
  },
  "earring": {
    "pos": "n.",
    "en_def": "a piece of jewelry worn on the ear",
    "cn_def": "耳環"
  },
  "pendant": {
    "pos": "n.",
    "en_def": "a small piece of jewelry that hangs from a chain",
    "cn_def": "墜子；吊墜"
  },
  "brooch": {
    "pos": "n.",
    "en_def": "a piece of jewelry fastened to clothes with a pin",
    "cn_def": "胸針"
  },
  "anklet": {
    "pos": "n.",
    "en_def": "a chain or band worn around the ankle",
    "cn_def": "腳鍊"
  },
  "bead": {
    "pos": "n.",
    "en_def": "a small ball with a hole, used to make jewelry",
    "cn_def": "珠子"
  },
  "pearl": {
    "pos": "n.",
    "en_def": "a small, smooth, white ball that grows inside an oyster",
    "cn_def": "珍珠"
  },
  "crystal": {
    "pos": "n.",
    "en_def": "a clear, high-quality glass or mineral that shines",
    "cn_def": "水晶"
  },
  "ornament": {
    "pos": "n.",
    "en_def": "an object used to decorate something",
    "cn_def": "裝飾品"
  },
  "accessory": {
    "pos": "n.",
    "en_def": "a small item like a belt or scarf worn with clothes",
    "cn_def": "配件；飾品"
  },
  "sparkle": {
    "pos": "v.",
    "en_def": "to shine with many small flashes of light",
    "cn_def": "閃耀；閃閃發光"
  },
  "polish": {
    "pos": "v.",
    "en_def": "to rub something to make it clean and shiny",
    "cn_def": "擦亮；拋光"
  },
  "engrave": {
    "pos": "v.",
    "en_def": "to cut words or pictures into a hard surface",
    "cn_def": "雕刻；刻上"
  },
  "craft": {
    "pos": "v.",
    "en_def": "to make something skillfully, often by hand",
    "cn_def": "精心製作；手工打造"
  },
  "design": {
    "pos": "v.",
    "en_def": "to plan and draw how something will look",
    "cn_def": "設計"
  },
  "luxury": {
    "pos": "n.",
    "en_def": "great comfort and expensive things",
    "cn_def": "奢華；奢侈"
  },
  "precious": {
    "pos": "adj.",
    "en_def": "rare and worth a lot of money",
    "cn_def": "珍貴的；貴重的"
  },
  "delicate": {
    "pos": "adj.",
    "en_def": "fine and easy to break or damage",
    "cn_def": "精緻的；易損壞的"
  },
  "elegant": {
    "pos": "adj.",
    "en_def": "graceful and attractive in a simple way",
    "cn_def": "優雅的"
  },
  "stylish": {
    "pos": "adj.",
    "en_def": "fashionable and attractive",
    "cn_def": "時髦的"
  },
  "shiny": {
    "pos": "adj.",
    "en_def": "bright and reflecting light",
    "cn_def": "閃亮的"
  },
  "ornamental": {
    "pos": "adj.",
    "en_def": "used for decoration, not for a practical purpose",
    "cn_def": "裝飾性的"
  },
  "custom": {
    "pos": "adj.",
    "en_def": "made specially for one customer",
    "cn_def": "訂製的"
  },
  "vintage": {
    "pos": "adj.",
    "en_def": "old, of high quality, and from an earlier time",
    "cn_def": "古董的；復古的"
  },
  "authentic": {
    "pos": "adj.",
    "en_def": "real and not a copy",
    "cn_def": "真正的；真品的"
  },
  "beautifully": {
    "pos": "adv.",
    "en_def": "in a very pleasing or attractive way",
    "cn_def": "漂亮地；精美地"
  }
};

const EXTRA_GLOSSES = {};
