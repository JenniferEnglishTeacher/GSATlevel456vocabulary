// Unit 15 Quiz Data: trace – unemployment rate
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Basic U15 - trace – unemployment rate",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "trace",
    "pos": "v.",
    "cn_def": "追蹤",
    "en_def": "to find or discover by investigation; a mark, object, or other indication of the existence or passing of something.",
    "sentence": "The experienced police detectives worked tirelessly to carefully {{BLANK}} the mysterious email back to the person who originally sent it.",
    "cn": "經驗豐富的警探不知疲倦地工作，以仔細地將這封神祕的電子郵件追蹤回最初發送它的人。"
  },
  {
    "word": "traced the ancient roots",
    "pos": "phr.",
    "cn_def": "追溯...的根源",
    "en_def": "to find the origin of something.",
    "sentence": "The knowledgeable historians have successfully {{BLANK}} of this fascinating story back to a popular Greek myth.",
    "cn": "知識淵博的歷史學家已成功將這個迷人故事的古老根源追溯到一個受歡迎的希臘神話。"
  },
  {
    "word": "trace",
    "pos": "v.",
    "cn_def": "描摹、照著描",
    "en_def": "To copy a drawing or pattern by drawing over its lines on a transparent sheet.",
    "sentence": "The young art student used a piece of thin paper to {{BLANK}} the beautiful drawing from the ancient textbook so that she could practice her shading techniques.",
    "cn": "這位年輕的美術系學生用了一張薄紙來描摹這本古老教科書上的美麗畫作，以便她能練習自己的陰影技巧。"
  },
  {
    "word": "trace",
    "pos": "n.",
    "cn_def": "痕跡、蹤跡",
    "en_def": "A sign, mark, or object showing that something has existed or happened.",
    "sentence": "The police searched the entire house carefully, but they could not find any {{BLANK}} of the thief who broke into the building last night.",
    "cn": "警方仔細搜尋了整棟房子，但他們找不到任何昨晚闖入大樓的竊賊的痕跡（蹤跡）。"
  },
  {
    "word": "follow the trace",
    "pos": "phr.",
    "cn_def": "順著痕跡尋找、追蹤蹤跡",
    "en_def": "To find or chase someone or something by looking at the marks or signs they left behind.",
    "sentence": "The experienced hunters decided to {{BLANK}} of the wild bear in the snow, hoping to find its hidden cave before sunset.",
    "cn": "經驗豐富的獵人們決定在雪地裡順著野熊的痕跡尋找，希望能在日落前找到牠隱蔽的洞穴。"
  },
  {
    "word": "traces of",
    "pos": "phr.",
    "cn_def": "...的痕跡",
    "en_def": "marks, objects, or other indications of the existence of something.",
    "sentence": "The terrified campers quickly packed their tents after they shockingly found fresh {{BLANK}} dangerous bear activity in their backyard.",
    "cn": "受驚的露營者在令人震驚地發現他們後院有危險熊活動的新鮮痕跡後，迅速收拾了他們的帳篷。"
  },
  {
    "word": "track",
    "pos": "v.",
    "cn_def": "追蹤、記錄...的進展",
    "en_def": "To follow the movements or progress of someone or something, especially by using electronics or signs.",
    "sentence": "Online shoppers can use the mobile app to {{BLANK}} their packages in real time, so they know exactly when the delivery guy will arrive.",
    "cn": "線上購物者可以使用手機應用程式即時追蹤他們的包裹，這樣他們就能確切知道送貨員何時會到達。"
  },
  {
    "word": "track",
    "pos": "n.",
    "cn_def": "跑道、小徑、足跡",
    "en_def": "A rough path or road made by people or animals, or a mark left by a wheel or foot.",
    "sentence": "The athletes lined up on the running {{BLANK}} and waited for the starting gun, because they all wanted to win the gold medal this afternoon.",
    "cn": "運動員們在跑步跑道上排好隊，等待起跑槍響，裝因為他們今天下午都想贏得金牌。"
  },
  {
    "word": "keep track of",
    "pos": "phr.",
    "cn_def": "記錄、掌握...的動態",
    "en_def": "To continue to know about where someone or something is, or how something is changing.",
    "sentence": "It is necessary for college students to {{BLANK}} their expenses every week, otherwise they might run out of pocket money before the month ends.",
    "cn": "大學生每週記錄（掌握）自己的花銷是必要的，否則他們可能會在月底前就把零用錢花光。"
  },
  {
    "word": "railway",
    "pos": "n.",
    "cn_def": "鐵路、鐵道",
    "en_def": "A system of tracks on which trains travel, or the organization that operates them.",
    "sentence": "The government is building a new high-speed {{BLANK}} to connect the remote mountain villages with the big cities, which will make travel much more convenient.",
    "cn": "政府正在建造一條新的高速鐵路，將偏遠的山村與大城市連接起來，這將使交通變得更加便利。"
  },
  {
    "word": "path",
    "pos": "n.",
    "cn_def": "小徑、小路",
    "en_def": "A narrow track or way made for walking, or a line along which something moves.",
    "sentence": "We followed a narrow {{BLANK}} through the thick forest, and it finally led us to a beautiful secret waterfall that few people knew about.",
    "cn": "我們沿著一條穿過茂密森林的狹窄小徑前行，它最終引導我們來到了一個很少人知道的美麗秘密瀑布。"
  },
  {
    "word": "idiom",
    "pos": "n.",
    "cn_def": "慣用語；成語",
    "en_def": "a group of words established by usage as having a meaning not deducible from those of the individual words.",
    "sentence": "\"It's raining cats and dogs\" is a very popular English {{BLANK}} that is frequently used to say it's raining heavily.",
    "cn": "「下傾盆大雨」是一個非常受歡迎的英文慣用語，經常被用來表示雨下得很大。"
  },
  {
    "word": "heel",
    "pos": "n.",
    "cn_def": "腳跟；鞋跟",
    "en_def": "the back part of the human foot below the ankle.",
    "sentence": "Poor Chloe accidentally cut her right {{BLANK}} on some broken glass that was unfortunately hidden deep in the soft sand.",
    "cn": "可憐的克洛伊不小心在不幸隱藏在柔軟沙子深處的一些碎玻璃上割傷了她的右腳跟。"
  },
  {
    "word": "high heels",
    "pos": "phr.",
    "cn_def": "高跟鞋",
    "en_def": "women's shoes in which the heels are raised high off the ground.",
    "sentence": "Because she isn't used to wearing expensive {{BLANK}}, Janice's feet hurt terribly after walking around the party all night.",
    "cn": "因為她不習慣穿昂貴的高跟鞋，珍妮絲在派對上走了一整晚後腳痛得要命。"
  },
  {
    "word": "fell head over heels for",
    "pos": "phr.",
    "cn_def": "徹底愛上、為...神魂顛倒",
    "en_def": "To fall deeply and completely in love with someone.",
    "sentence": "Although they only met a few weeks ago at a summer camp, Ethan completely {{BLANK}} Olivia because of her kind heart and wonderful sense of humor.",
    "cn": "雖然他們幾週前才在夏令營認識，但伊森因為奧莉維亞善良的心和極佳的幽默感而徹底愛上了她。"
  },
  {
    "word": "Nowadays",
    "pos": "adv.",
    "cn_def": "現今；如今",
    "en_def": "at the present time, in contrast with the past.",
    "sentence": "{{BLANK}}, younger people usually spend several continuous hours a day staring at their computers and ignoring their tired family members.",
    "cn": "現今，較年輕的人通常每天花連續幾個小時盯著他們的電腦，並忽略了他們疲憊的家人。"
  },
  {
    "word": "recently",
    "pos": "adv.",
    "cn_def": "最近",
    "en_def": "at a recent time; not long ago.",
    "sentence": "I haven't seen my busy sister {{BLANK}}, as she has been constantly working late nights at the large corporate office.",
    "cn": "我最近沒見到我忙碌的妹妹，因為她一直在大型企業辦公室持續深夜加班。"
  },
  {
    "word": "lately",
    "pos": "adv.",
    "cn_def": "最近；近來",
    "en_def": "recently; not long ago.",
    "sentence": "Has the demanding manager been acting strangely {{BLANK}}, or is he just stressed about the incredibly tight project deadlines?",
    "cn": "這位要求嚴格的經理最近表現得奇怪嗎，還是他只是對極其緊迫的專案截止日期感到壓力？"
  },
  {
    "word": "these days",
    "pos": "phr.",
    "cn_def": "如今；現在",
    "en_def": "used to talk about the present time, in comparison with the past.",
    "sentence": "Finding a cheap and comfortable apartment in the crowded city center is becoming incredibly difficult to do {{BLANK}}.",
    "cn": "如今，在擁擠的市中心找到一間便宜且舒適的公寓正變得極其困難。"
  },
  {
    "word": "the latest",
    "pos": "phr.",
    "cn_def": "最新的、最近的",
    "en_def": "The newest or most recent item, news, or product.",
    "sentence": "Have you read the article about {{BLANK}} smartphone from that tech company, which features a revolutionary battery that can last for three days?",
    "cn": "你讀了關於那家科技公司最新智慧型手機的文章嗎？它配備了能持續使用三天的革命性電池。"
  },
  {
    "word": "the last",
    "pos": "phr.",
    "cn_def": "最後的、上一個的",
    "en_def": "The final one, or the one right before the present moment.",
    "sentence": "We must hurry to the station because this is {{BLANK}} train leaving for Taipei tonight, or we will have to take an expensive taxi.",
    "cn": "我們必須趕快去車站，開往台北的最後一班列車，否則我們就必須搭昂貴的計程車了。"
  },
  {
    "word": "the latter",
    "pos": "phr.",
    "cn_def": "後者（兩者之中的第二個）",
    "en_def": "The second of two people or things that have just been mentioned.",
    "sentence": "Tina likes both playing the piano and painting, but she spends more time on {{BLANK}} because she wants to become a professional artist.",
    "cn": "蒂娜喜歡彈鋼琴和畫畫，但她花更多時間在後者上，因為她想成為一名專業的藝術家。"
  },
  {
    "word": "enormous",
    "pos": "adj.",
    "cn_def": "巨大的",
    "en_def": "very large in size, quantity, or extent.",
    "sentence": "As the terrifying winter storm rapidly approached, the quiet beach was heavily buffeted by absolutely {{BLANK}} and destructive ocean waves.",
    "cn": "隨著可怕的冬季風暴迅速逼近，安靜的海灘受到了絕對巨大的且具破壞性的海浪的猛烈衝擊。"
  },
  {
    "word": "grand",
    "pos": "adj.",
    "cn_def": "宏偉的；盛大的",
    "en_def": "magnificent and imposing in appearance, size, or style.",
    "sentence": "The victorious army officially held a truly {{BLANK}} and colorful parade right through the center of the completely ruined city.",
    "cn": "勝利的軍隊正式在徹底毀壞的城市中心舉行了一場真正宏偉的且色彩繽紛的遊行。"
  },
  {
    "word": "tremendous",
    "pos": "adj.",
    "cn_def": "極大的；巨大的",
    "en_def": "very great in amount, scale, or intensity.",
    "sentence": "The dedicated student successfully put a {{BLANK}} amount of effort into his final project and ultimately received the highest grade.",
    "cn": "盡責的學生成功地在他期末專案上投入了極大的努力，並最終獲得了最高分。"
  },
  {
    "word": "massive",
    "pos": "adj.",
    "cn_def": "巨大的、大量的",
    "en_def": "Very large, heavy, and solid; huge.",
    "sentence": "The company suffered a {{BLANK}} loss because their main factory caught fire last week, forcing them to cancel many orders.",
    "cn": "該公司上週因主要工廠失火而遭受巨大的損失，迫使他們取消了許多訂單。"
  },
  {
    "word": "magnificent",
    "pos": "adj.",
    "cn_def": "壯麗的、宏偉的",
    "en_def": "Extremely beautiful, impressive, or grand.",
    "sentence": "When we reached the top of the mountain, we saw a {{BLANK}} view of the ocean that made us forget how tired we were.",
    "cn": "當我們到達山頂時，我們看到了壯麗的海景，這讓林們忘記了自己有多累。"
  },
  {
    "word": "fascinating",
    "pos": "adj.",
    "cn_def": "迷人的、引人入勝的",
    "en_def": "Extremely interesting and attractive.",
    "sentence": "The museum tour guide shared many {{BLANK}} stories about ancient Egypt, so all the students listened carefully without getting bored.",
    "cn": "博物館導遊分享了許多關於古埃及的迷人故事，所以所有學生都認真聽講，一點也不覺得無聊。"
  },
  {
    "word": "remarkable",
    "pos": "adj.",
    "cn_def": "非凡的、值得注意的",
    "en_def": "Unusual or surprising in a way that causes people to take notice.",
    "sentence": "Kevin showed a {{BLANK}} talent for playing the violin at a young age, and he won his first international competition yesterday.",
    "cn": "凱文在年紀還小的時候就展現了非凡的小提琴天賦，並在昨天贏得了他的第一場國際比賽。"
  },
  {
    "word": "exceptional",
    "pos": "adj.",
    "cn_def": "傑出的、異常優秀的",
    "en_def": "Much better than average; unusual and outstanding.",
    "sentence": "Because of her {{BLANK}} performance during the training program, the manager decided to give Linda a promotion and a higher salary.",
    "cn": "由於她在培訓計劃期間傑出的表現，經理決定給琳達升職並加薪。"
  },
  {
    "word": "distinguished",
    "pos": "adj.",
    "cn_def": "卓越的、著名的",
    "en_def": "Successful, authoritative, and commanding great respect.",
    "sentence": "The university invited a {{BLANK}} professor to give a speech about climate change, and the main auditorium was completely packed with students.",
    "cn": "這所大學邀請了一位卓越的教授發表關於氣候變遷的演講，主禮堂完全擠滿了學生。"
  },
  {
    "word": "celebrated",
    "pos": "adj.",
    "cn_def": "著名的、馳名的",
    "en_def": "Famous and praised by many people.",
    "sentence": "This restaurant is a {{BLANK}} spot for local seafood, so you usually have to book a table several weeks in advance.",
    "cn": "這家餐廳是著名的在地海鮮餐廳，所以你通常必須提前幾週訂位。"
  },
  {
    "word": "noted",
    "pos": "adj.",
    "cn_def": "有名的、著名的",
    "en_def": "Well-known and respected for a particular quality or ability.",
    "sentence": "Mr. Wang is a {{BLANK}} expert in computer science, and he has written several textbooks that are used all over the country.",
    "cn": "王先生是著名的電腦科學專家，他寫了幾本在全國各地使用的教科書。"
  },
  {
    "word": "renowned",
    "pos": "adj.",
    "cn_def": "有名的、聲譽卓著的",
    "en_def": "Famous and respected for something specific.",
    "sentence": "The French chef is {{BLANK}} for his delicious desserts, which attract thousands of food lovers to his bakery every single month.",
    "cn": "這位法國廚師以其美味的甜點而聞名，這每個月都吸引了數千名美食愛好者光顧他的烘焙坊。"
  },
  {
    "word": "glamorous",
    "pos": "adj.",
    "cn_def": "迷人的、光鮮亮麗的",
    "en_def": "Especially attractive, exciting, and connected with wealth or success.",
    "sentence": "Many young people think that working in the fashion industry is a {{BLANK}} job, but it actually requires a lot of hard work.",
    "cn": "許多年輕人認為在時尚界工作是一份光鮮亮麗的工作，但它實際上需要付出很多努力。"
  },
  {
    "word": "lavish",
    "pos": "adj.",
    "cn_def": "奢華的、豪華的",
    "en_def": "Large in amount, expensive, and impressive.",
    "sentence": "The rich businessman hosted a {{BLANK}} party at a five-star hotel to celebrate his company's anniversary, inviting hundreds of important guests.",
    "cn": "這位富商在一家五星級飯店舉辦了一場奢華的派對來慶祝公司週年，邀請了數百位重要貴賓。"
  },
  {
    "word": "lush",
    "pos": "adj.",
    "cn_def": "茂盛的、草木聰蘢的",
    "en_def": "Growing thickly and strongly; green and healthy.",
    "sentence": "After raining heavily for several days, the valley became filled with {{BLANK}} green grass and beautiful flowers that attracted many tourists.",
    "cn": "連續幾天降下大雨後，山谷裡長滿了茂盛的綠草和美麗的花朵，吸引了許多遊客。"
  },
  {
    "word": "significant",
    "pos": "adj.",
    "cn_def": "顯著的、重要的",
    "en_def": "Large or important enough to have a noticeable effect.",
    "sentence": "Regular exercise and a balanced diet can make a {{BLANK}} difference to your overall health, so you should start today.",
    "cn": "規律運動和均衡飲食能對你的整體健康產生顯著的改變，所以你今天就應該開始。"
  },
  {
    "word": "significantly",
    "pos": "adv.",
    "cn_def": "顯著地、相當地",
    "en_def": "In a way that is large or important enough to be noticed.",
    "sentence": "The new train system has {{BLANK}} reduced travel time between the two cities, making it much easier for people to commute.",
    "cn": "新的鐵路系統顯著地減少了兩座城市之間的交通時間，使人們通勤變得更加容易。"
  },
  {
    "word": "considerable",
    "pos": "adj.",
    "cn_def": "相當大（多）的",
    "en_def": "Great in amount, size, or importance.",
    "sentence": "The government spent a {{BLANK}} amount of money on building the new library, but the local citizens think it was worth it.",
    "cn": "政府在建造新圖書館上花費了相當多的資金，但當地市民資源認為這是值得的。"
  },
  {
    "word": "considerably",
    "pos": "adv.",
    "cn_def": "相當地、非常",
    "en_def": "Much or a lot; to a large degree.",
    "sentence": "The price of vegetables increased {{BLANK}} after the typhoon hit the island, causing many families to complain about the high costs.",
    "cn": "颱風襲擊該島後，蔬菜價格相當地上漲，導致許多家庭抱怨生活成本過高。"
  },
  {
    "word": "rapid",
    "pos": "adj.",
    "cn_def": "快速的、迅速的",
    "en_def": "Happening or moving very quickly.",
    "sentence": "Thanks to the {{BLANK}} development of technology, people can now connect with their friends instantly no matter where they live.",
    "cn": "多虧了科技的快速發展，現在不論人們住在哪裡，都能立即與朋友取得聯絡。"
  },
  {
    "word": "rapidly",
    "pos": "adv.",
    "cn_def": "迅速地、很快地",
    "en_def": "Very quickly; at a fast rate.",
    "sentence": "The water level in the river rose {{BLANK}} during the heavy storm, so the police advised everyone to stay away from the banks.",
    "cn": "暴風雨期間河川水位迅速地上漲，因此警方建議大家遠離河岸。"
  },
  {
    "word": "moderate",
    "pos": "adj.",
    "cn_def": "適度的、中等的",
    "en_def": "Neither too much nor too little; average in amount or intensity.",
    "sentence": "Doctors recommend that doing a {{BLANK}} amount of exercise every week can help protect your heart and reduce daily stress.",
    "cn": "醫生建議每週進行適度的運動量可以幫助保護心臟並減輕日常壓力。"
  },
  {
    "word": "moderately",
    "pos": "adv.",
    "cn_def": "適度地、普通地",
    "en_def": "To a medium degree; not excessively.",
    "sentence": "Although the new restaurant is only {{BLANK}} priced, the food they serve is of high quality and tastes absolutely delicious.",
    "cn": "雖然這家新餐廳的價位算適度地（價位中等），但他們供應的食物品質很高且味道絕對美味。"
  },
  {
    "word": "slight",
    "pos": "adj.",
    "cn_def": "輕微的、微小的",
    "en_def": "Small in amount or degree; not noticeably big.",
    "sentence": "There was a {{BLANK}} delay in the flight schedule due to the bad weather, but all passengers arrived safely at their destination.",
    "cn": "由於惡劣的天氣，航班行程出現了輕微的延誤，但所有乘客都安全抵達了目的地。"
  },
  {
    "word": "slightly",
    "pos": "adv.",
    "cn_def": "稍微、輕微地",
    "en_def": "A little bit; to a small degree.",
    "sentence": "This year's exam was {{BLANK}} more difficult than last year's, but most students still passed because they studied very hard.",
    "cn": "今年的考試比去年的稍微難了一點，但大多數學生因為非常努力複習，所以還是通過了。"
  },
  {
    "word": "outer",
    "pos": "adj.",
    "cn_def": "外面的；外部的",
    "en_def": "outside; external.",
    "sentence": "The teacher carefully drew two shapes and noted that the {{BLANK}} circle was significantly bigger than the inner circle.",
    "cn": "老師仔細地畫了兩個形狀，並指出外面的圓圈明顯比裡面的圓圈大。"
  },
  {
    "word": "inner",
    "pos": "adj.",
    "cn_def": "內部的；裡面的",
    "en_def": "situated inside or further in; internal.",
    "sentence": "The frightened child nervously hid deep inside the dark and completely silent {{BLANK}} room of the massive abandoned wooden house.",
    "cn": "受驚的孩子緊張地躲在巨大廢棄木屋黑暗且完全安靜的裡面的（內部的）房間深處。"
  },
  {
    "word": "outer edge",
    "pos": "phr.",
    "cn_def": "外緣",
    "en_def": "the outside boundary or surface of something.",
    "sentence": "The brave explorers cautiously walked along the steep {{BLANK}} of the dangerous mountain cliff while looking at the sea.",
    "cn": "勇敢的探險家小心翼翼地沿著危險山崖陡峭的外緣行走，同時看著大海。"
  },
  {
    "word": "outer surface",
    "pos": "phr.",
    "cn_def": "外表面",
    "en_def": "the external layer or outside part.",
    "sentence": "The protective {{BLANK}} of the advanced spacecraft is completely designed to safely withstand the intense heat during re-entry.",
    "cn": "先進太空船具保護性的外表面完全被設計來安全地承受重返大氣層時的強烈高溫。"
  },
  {
    "word": "deceive",
    "pos": "v.",
    "cn_def": "欺騙",
    "en_def": "to cause someone to believe something that is not true.",
    "sentence": "Sue's unfaithful boyfriend foolishly promised that he would never ever {{BLANK}} her again, but she simply didn't trust him anymore.",
    "cn": "蘇不忠的男友愚蠢地承諾他絕對不會再欺騙她，但她就是不再信任他了。"
  },
  {
    "word": "deceptive",
    "pos": "adj.",
    "cn_def": "欺騙性的",
    "en_def": "giving an appearance or impression different from the true one; misleading.",
    "sentence": "The highly {{BLANK}} advertisement smoothly made the incredibly cheap product seem much more valuable than it actually was in reality.",
    "cn": "這個極具欺騙性的廣告順利地讓這個極其便宜的產品看起來比現實中實際上有價值許多。"
  },
  {
    "word": "deception",
    "pos": "n.",
    "cn_def": "欺騙；騙局",
    "en_def": "the action of deceiving someone.",
    "sentence": "The intelligent detective quickly realized that the criminal's complex story was entirely based on cleverly planned lies and dark {{BLANK}}.",
    "cn": "聰明的警探迅速意識到，罪犯複雜的故事完全是基於巧妙計畫的謊言和黑暗的騙局。"
  },
  {
    "word": "tricked",
    "pos": "v. / n.",
    "cn_def": "欺騙；詭計",
    "en_def": "a cunning or skillful act or scheme intended to deceive or outwit someone.",
    "sentence": "I still honestly can't believe that my supposed best friends completely {{BLANK}} me into coming to this extremely boring party.",
    "cn": "我老實說仍然不敢相信我所謂的最好朋友們完全欺騙（拐騙）我來參加這個極其無聊的派對。"
  },
  {
    "word": "trick the old man into",
    "pos": "phr.",
    "cn_def": "誘騙某人做...、騙某人去做某事",
    "en_def": "To make someone do something by deceiving or lying to them.",
    "sentence": "The online scammer tried to {{BLANK}} sending money by pretending to be his long-lost friend on social media.",
    "cn": "網路詐騙犯在社群媒體上假裝成老先生失散多年的朋友，試圖誘騙他匯款。"
  },
  {
    "word": "trick",
    "pos": "n.",
    "cn_def": "把戲、詭計、惡作劇",
    "en_def": "A clever action used to deceive someone, either as a joke or a scam.",
    "sentence": "The magician performed an amazing {{BLANK}} with a deck of cards, and nobody in the audience could figure out how he did it.",
    "cn": "這位魔術師用一副撲克牌表演了一個令人驚嘆的把戲，現場觀眾沒有人能弄清楚他是怎麼做到的。"
  },
  {
    "word": "play a trick on",
    "pos": "phr.",
    "cn_def": "捉弄某人、對某人惡作劇",
    "en_def": "To deceive or cheat someone as a joke or a prank.",
    "sentence": "On April Fools' Day, the mischievous students decided to {{BLANK}} their homeroom teacher by hiding her favorite chalk.",
    "cn": "在愚人節那天，那些調皮的學生決定藏起班導師最喜歡的粉筆來捉弄她。"
  },
  {
    "word": "naive",
    "pos": "adj.",
    "cn_def": "天真的；幼稚的",
    "en_def": "showing a lack of experience, wisdom, or judgment.",
    "sentence": "The young and highly {{BLANK}} student completely trusted the friendly stranger who secretly wanted to steal his expensive new smartphone.",
    "cn": "年輕且極其天真的學生完全信任了那個暗中想偷他昂貴新智慧型手機的友善陌生人。"
  },
  {
    "word": "act so naively",
    "pos": "phr.",
    "cn_def": "表現得天真",
    "en_def": "to behave in a foolishly simple or gullible way.",
    "sentence": "You simply cannot afford to {{BLANK}} when you are formally negotiating such an incredibly important and valuable contract.",
    "cn": "當你正式談判如此極其重要且有價值的合約時，你根本承受不起表現得如此天真的後果。"
  },
  {
    "word": "aware",
    "pos": "adj.",
    "cn_def": "意識到的",
    "en_def": "having knowledge or perception of a situation or fact.",
    "sentence": "The strict principal made absolutely sure that every single student was fully {{BLANK}} of the brand new school safety regulations.",
    "cn": "嚴格的校長絕對確保每一位學生都完全意識到了全新的學校安全規定。"
  },
  {
    "word": "be aware of",
    "pos": "phr.",
    "cn_def": "意識到、注意到、知道",
    "en_def": "Knowing or realizing something; having knowledge or consciousness.",
    "sentence": "Drivers must {{BLANK}} the speed limits on the highway, because the police often set up speed cameras to catch reckless drivers.",
    "cn": "駕駛人必須注意到高速公路上的速度限制，因為警方經常設置測速照相機來捕捉魯莽的駕駛。"
  },
  {
    "word": "beware",
    "pos": "v.",
    "cn_def": "當心；提防",
    "en_def": "be cautious and alert to the dangers of.",
    "sentence": "When you cautiously walk in these dark and dense woods, you should always {{BLANK}} of dangerous and highly venomous snakes.",
    "cn": "當你在這些黑暗茂密的樹林裡小心翼翼地行走時，你應該總是當心危險且具劇毒的蛇。"
  },
  {
    "word": "beware of",
    "pos": "phr.",
    "cn_def": "當心...",
    "en_def": "to be careful of something.",
    "sentence": "The bright yellow traffic sign clearly warned the tired drivers to heavily {{BLANK}} the unexpected sharp curve up ahead.",
    "cn": "明亮的黃色交通標誌清楚地警告疲憊的駕駛要高度當心前方出乎意料的急轉彎。"
  },
  {
    "word": "awareness",
    "pos": "n.",
    "cn_def": "意識；察覺",
    "en_def": "knowledge or perception of a situation or fact.",
    "sentence": "The massive environmental campaign successfully raised global {{BLANK}} about the tragic destruction of the beautiful and delicate ancient rainforests.",
    "cn": "大型的環保活動成功提升了全球對美麗且脆弱的古老雨林遭到悲慘破壞的意識。"
  },
  {
    "word": "raise the awareness of",
    "pos": "phr.",
    "cn_def": "提高...的意識、喚起對...的關注",
    "en_def": "To increase people's knowledge or understanding about an important issue.",
    "sentence": "The school decided to host an Earth Day event to {{BLANK}} environmental protection among young students.",
    "cn": "學校決定舉辦地球日活動，以提高年輕學生對環境保護的意識。"
  },
  {
    "word": "raise the question",
    "pos": "phr.",
    "cn_def": "提出問題、引發疑問",
    "en_def": "To mention a topic or doubt that needs to be discussed or considered.",
    "sentence": "The sudden change in the company's policy might {{BLANK}} of whether the manager plans to cut down the employees' benefits.",
    "cn": "公司政策的突然改變可能會引發經理是否計畫削減員工福利的疑問。"
  },
  {
    "word": "raise the issue",
    "pos": "phr.",
    "cn_def": "提出議題、提出問題（討論）",
    "en_def": "To bring up a problem or topic so that people can talk about it.",
    "sentence": "During the monthly meeting, the sales team decided to {{BLANK}} of declining customer satisfaction over the past quarter.",
    "cn": "在月會期間，銷售團隊決定提出過去一季顧客滿意度下降的議題。"
  },
  {
    "word": "raise funds",
    "pos": "phr.",
    "cn_def": "籌措資金、募款",
    "en_def": "To collect money for a specific purpose, especially for a charity or project.",
    "sentence": "The local charity group organized a charity concert to {{BLANK}} for the families who lost their homes in the recent earthquake.",
    "cn": "當地的慈善團體舉辦了一場慈善音樂會，為在近期地震中失去家園的家庭籌措資金。"
  },
  {
    "word": "raise children",
    "pos": "phr.",
    "cn_def": "養育小孩、撫養子女",
    "en_def": "To take care of kids and help them grow up until they are adults.",
    "sentence": "It can be very challenging for working parents to {{BLANK}} while maintaining a full-time job in a busy city like Taipei.",
    "cn": "對於雙薪父母來說，在像台北這樣繁忙的城市裡，一邊維持全職工作一邊養育小孩是非常具有挑戰性的。"
  },
  {
    "word": "raise hands",
    "pos": "phr.",
    "cn_def": "舉手",
    "en_def": "To lift hands up in the air to ask a question or show agreement.",
    "sentence": "The teacher told the students to {{BLANK}} if they knew the answer, but nobody in the classroom volunteered to speak.",
    "cn": "老師告訴學生們如果知道答案就舉手，但教室裡沒有人自願發言。"
  },
  {
    "word": "get a raise",
    "pos": "phr.",
    "cn_def": "加薪、獲得調薪",
    "en_def": "To receive an increase in the amount of money you earn from your job.",
    "sentence": "After working hard and completing several successful projects this year, Sharon finally managed to {{BLANK}} from her boss.",
    "cn": "在今年努力工作並完成了幾個成功的專案之後，莎倫終於成功從她老闆那裡獲得加薪。"
  },
  {
    "word": "moreover",
    "pos": "adv.",
    "cn_def": "此外；而且",
    "en_def": "as a further matter; besides.",
    "sentence": "This delicious hot soup is much less expensive than that greasy hamburger; {{BLANK}}, it is significantly healthier and more nutritious.",
    "cn": "這碗美味的熱湯比那個油膩的漢堡便宜得多；而且（此外），它明顯更健康、更有營養。"
  },
  {
    "word": "furthermore",
    "pos": "adv.",
    "cn_def": "此外；而且",
    "en_def": "in addition; besides.",
    "sentence": "The newly hired employee is highly intelligent and consistently works hard; {{BLANK}}, he is incredibly friendly to all his colleagues.",
    "cn": "新聘請的員工非常聰明且始終努力工作；此外，他對所有同事都極其友善。"
  },
  {
    "word": "In addition",
    "pos": "phr.",
    "cn_def": "此外",
    "en_def": "as an extra person, thing, or circumstance.",
    "sentence": "{{BLANK}} to providing excellent medical benefits, the generous company also surprisingly offers its workers four weeks of paid vacation.",
    "cn": "此外（除了...之外）提供極佳的醫療福利，這家慷慨的公司令人驚訝地還為其員工提供四週的帶薪休假。"
  },
  {
    "word": "additionally",
    "pos": "adv.",
    "cn_def": "此外",
    "en_def": "as an extra factor or circumstance.",
    "sentence": "The luxurious hotel room features a beautifully comfortable bed, and {{BLANK}}, it has a truly magnificent view of the ocean.",
    "cn": "豪華的飯店房間配有漂亮舒適的床，此外，它還擁有真正壯麗的海景。"
  },
  {
    "word": "compromise",
    "pos": "n.",
    "cn_def": "妥協；損害",
    "en_def": "an agreement reached by each side making concessions; to weaken or harm.",
    "sentence": "The strict boss finally {{BLANK}}, generously giving all the exhausted workers extra paid holidays but absolutely no permanent salary raise.",
    "cn": "嚴格的老闆終於妥協了，慷慨地給予所有疲憊的員工額外的帶薪休假，但絕對沒有永久加薪。"
  },
  {
    "word": "reach a fair compromise",
    "pos": "phr.",
    "cn_def": "達成妥協",
    "en_def": "to come to an agreement where both sides make concessions.",
    "sentence": "The two extremely stubborn businessmen finally managed to {{BLANK}} after having an incredibly long and stressful meeting.",
    "cn": "在經歷了一場極其漫長且充滿壓力的會議後，兩位極度固執的商人終於設法達成了一個公平的妥協。"
  },
  {
    "word": "compromises",
    "pos": "v.",
    "cn_def": "損害；危及",
    "en_def": "to accept standards that are lower than is desirable.",
    "sentence": "Continuously smoking heavy cigarettes severely {{BLANK}} your physical health by slowly and permanently damaging your vital heart and lungs.",
    "cn": "持續抽濃菸會透過緩慢且永久地破壞你重要的心臟和肺部，嚴重損害你的身體健康。"
  },
  {
    "word": "give and take",
    "pos": "phr.",
    "cn_def": "互相讓步；妥協",
    "en_def": "mutual concessions and compromises.",
    "sentence": "Any healthy and deeply romantic relationship naturally requires a certain amount of {{BLANK}} to successfully survive difficult challenges.",
    "cn": "任何健康且深刻浪漫的關係自然需要一定程度的互相讓步，才能成功地在困難的挑戰中倖存下來。"
  },
  {
    "word": "defeated",
    "pos": "v.",
    "cn_def": "擊敗",
    "en_def": "win a victory over someone in a battle or other contest.",
    "sentence": "The skilled blue team successfully {{BLANK}} the aggressive red team in the highly competitive and incredibly exciting championship football game.",
    "cn": "技巧高超的藍隊在競爭高度激烈且極其刺激的美式足球冠軍賽中，成功地擊敗了具攻擊性的紅隊。"
  },
  {
    "word": "defeat",
    "pos": "n.",
    "cn_def": "失敗；戰敗",
    "en_def": "an instance of defeating or being defeated.",
    "sentence": "The confident players on the national baseball team were deeply upset and crying after their terrible and completely unexpected {{BLANK}}.",
    "cn": "國家棒球隊充滿自信的球員們在經歷了可怕且完全出乎意料的失敗後，感到深深的沮喪並哭了起來。"
  },
  {
    "word": "defeated",
    "pos": "adj.",
    "cn_def": "覺得挫敗的；被擊敗的",
    "en_def": "demoralized and overcome by adversity.",
    "sentence": "After failing the difficult medical exam for the third time, the exhausted student understandably felt completely {{BLANK}} and totally hopeless.",
    "cn": "在第三次未能通過困難的醫學考試後，疲憊的學生可以理解地感到完全被擊敗的（覺得挫敗的）且完全絕望。"
  },
  {
    "word": "suffered a devastating defeat",
    "pos": "phr.",
    "cn_def": "遭受失敗",
    "en_def": "to lose in a battle, contest, or election.",
    "sentence": "The powerful military forces unfortunately {{BLANK}} during the long and brutally cold winter battle in the mountains.",
    "cn": "強大的軍隊在深山中漫長且殘酷寒冷的冬季戰鬥中，不幸地遭受了一場毀滅性的失敗。"
  },
  {
    "word": "tragic",
    "pos": "adj.",
    "cn_def": "悲慘的；悲劇的",
    "en_def": "causing or characterized by extreme distress or sorrow.",
    "sentence": "The incredibly {{BLANK}} and heartbreaking love story of Romeo and Juliet is widely known by millions of emotional people worldwide.",
    "cn": "羅密歐與茱麗葉極其悲慘的且令人心碎的愛情故事，被全世界數百萬充滿情感的人廣為人知。"
  },
  {
    "word": "tragically",
    "pos": "adv.",
    "cn_def": "悲慘地",
    "en_def": "in a way that involves or causes extreme distress or sorrow.",
    "sentence": "The brilliant and highly popular young musician {{BLANK}} died in a terrible car accident when he was only twenty years old.",
    "cn": "這位才華洋溢且極受歡迎的年輕音樂家，在他只有二十歲時悲慘地死於一場可怕的車禍。"
  },
  {
    "word": "tragedy",
    "pos": "n.",
    "cn_def": "悲劇；災難",
    "en_def": "an event causing great suffering, destruction, and distress.",
    "sentence": "It will certainly be an incredibly long time before the completely destroyed island eventually recovers from the terrifying natural {{BLANK}}.",
    "cn": "在這座被徹底摧毀的島嶼最終從可怕的自然悲劇（災難）中復原之前，肯定還需要極其漫長的時間。"
  },
  {
    "word": "comic",
    "pos": "adj.",
    "cn_def": "喜劇的；滑稽的",
    "en_def": "causing or meant to cause laughter.",
    "sentence": "Instead of watching a dark drama, the tired family decided to watch a lighthearted and highly {{BLANK}} movie to relax completely.",
    "cn": "疲憊的家庭沒有看黑暗的戲劇，而是決定看一部輕鬆且高度喜劇的電影來徹底放鬆。"
  },
  {
    "word": "comedy",
    "pos": "n.",
    "cn_def": "喜劇、喜劇片",
    "en_def": "A movie, play, or show that is funny and makes people laugh.",
    "sentence": "We decided to watch a popular {{BLANK}} at the movie theater last night because we needed a good laugh after a stressful week of final exams.",
    "cn": "我們昨天晚上決定去電影院看一部熱門的喜劇，因為在經歷了壓力很大的期末考週之後，我們需要好好大笑一場。"
  },
  {
    "word": "comedian",
    "pos": "n.",
    "cn_def": "喜劇演員、脫口秀演員",
    "en_def": "A person whose job is to entertain people by making them laugh.",
    "sentence": "The famous {{BLANK}} told many funny jokes during the live show, which made the entire audience laugh out loud throughout the evening.",
    "cn": "那位著名的喜劇演員在現場表演中講了許多搞笑的笑話，這讓全場觀眾整晚都大笑不止。"
  },
  {
    "word": "myth",
    "pos": "n.",
    "cn_def": "神話；迷思",
    "en_def": "a traditional story concerning the early history of a people or explaining some natural or social phenomenon.",
    "sentence": "Every ancient culture has its own fascinating traditional {{BLANK}} about how the vast and complex world was originally created miraculously.",
    "cn": "每個古老的文化都有其自身迷人的傳統神話，講述廣闊且複雜的世界最初是如何奇蹟般地被創造出來的。"
  },
  {
    "word": "mythical",
    "pos": "adj.",
    "cn_def": "神話的；虛構的",
    "en_def": "occurring in or characteristic of myths or folk tales.",
    "sentence": "The brave and strong hero heroically fought against an incredibly dangerous and fire-breathing {{BLANK}} dragon to safely save the beautiful princess.",
    "cn": "勇敢強壯的英雄英勇地與一隻極度危險且會噴火的神話的龍戰鬥，以安全地拯救美麗的公主。"
  },
  {
    "word": "legend",
    "pos": "n.",
    "cn_def": "傳說；傳奇人物",
    "en_def": "a traditional story sometimes popularly regarded as historical but unauthenticated.",
    "sentence": "According to the famous old {{BLANK}}, courageous Robin Hood cleverly stole money from the rich and generously gave it to the poor.",
    "cn": "根據著名古老的傳說，勇敢的羅賓漢聰明地從富人那裡偷錢，並慷慨地把它分給窮人。"
  },
  {
    "word": "myth",
    "pos": "n.",
    "cn_def": "迷思、錯誤的看法、神話",
    "en_def": "A commonly believed story or idea that is actually false.",
    "sentence": "Many people still believe the {{BLANK}} that drinking coffee stunts your growth, but scientific studies have proven that this idea is completely wrong.",
    "cn": "許多人仍然相信喝咖啡會阻礙發育的迷思，但科學研究已經證明這種觀念是完全錯誤的。"
  },
  {
    "word": "popular myth",
    "pos": "phr.",
    "cn_def": "普遍的迷思",
    "en_def": "a widely held but false belief or idea.",
    "sentence": "The brilliant scientist wrote a detailed book to carefully debunk the {{BLANK}} that eating chocolate constantly causes bad skin.",
    "cn": "這位才華洋溢的科學家寫了一本詳細的書，以仔細揭穿不斷吃巧克力會導致皮膚變差的普遍的迷思。"
  },
  {
    "word": "debunk a myth",
    "pos": "phr.",
    "cn_def": "揭穿迷思、破除迷思",
    "en_def": "To prove that a commonly believed story or idea is false.",
    "sentence": "The doctor wrote an article to {{BLANK}} about fad diets, explaining that starving yourself is actually very dangerous for your health.",
    "cn": "醫生寫了一篇文章來揭穿關於盲目減肥的迷思，並解釋挨餓對你的身體健康實際上是非常危險的。"
  },
  {
    "word": "validate the fact",
    "pos": "phr.",
    "cn_def": "證實事實、確認事實",
    "en_def": "To prove or confirm that a statement or piece of information is true.",
    "sentence": "Scientists need to conduct multiple experiments to {{BLANK}} before they can publish their new discovery in a famous medical journal.",
    "cn": "科學家需要進行多次實驗來證實事實，然後才能將他們的新發現發表在著名的醫學期刊上。"
  },
  {
    "word": "mystery",
    "pos": "n.",
    "cn_def": "謎、神秘的事物",
    "en_def": "Something that is difficult or impossible to understand or explain.",
    "sentence": "The sudden disappearance of the ancient civilization remains a total {{BLANK}}, as archaeologists have found very few clues to explain what happened to them.",
    "cn": "這個古老文明的突然消失仍然是一個未解之謎，因為考古學家發現了極少能解釋他們究竟發生了什麼事的線索。"
  },
  {
    "word": "mysterious",
    "pos": "adj.",
    "cn_def": "神秘的、難以理解的",
    "en_def": "Strange, unknown, or difficult to understand or explain.",
    "sentence": "A {{BLANK}} package arrived at my house this morning without a return address, so I was afraid to open it until my parents came home.",
    "cn": "今天早上一個神秘的包裹寄到了我家，上面沒有寄件人地址，所以我不敢打開它，直到我父母回家。"
  },
  {
    "word": "curiosity",
    "pos": "n.",
    "cn_def": "好奇心；奇特的事物",
    "en_def": "a strong desire to know or learn something.",
    "sentence": "Most energetic young children naturally possess a lot of intense {{BLANK}} about the completely unknown things that physically surround them.",
    "cn": "大多數精力充沛的幼童天生對物理上圍繞他們完全未知的事物擁有許多強烈的好奇心。"
  },
  {
    "word": "out of curiosity",
    "pos": "phr.",
    "cn_def": "出於好奇",
    "en_def": "because of a desire to know or learn something.",
    "sentence": "Merely {{BLANK}}, the deeply fascinated children carefully opened the large wooden box to see what was hidden inside.",
    "cn": "僅僅出於好奇，深深著迷的孩子們仔細地打開了那個大木箱，想看看裡面藏了什麼。"
  },
  {
    "word": "curiosity killed the cat",
    "pos": "phr.",
    "cn_def": "好奇心害死貓",
    "en_def": "being inquisitive about other people's affairs may get you into trouble.",
    "sentence": "You really shouldn't secretly investigate your demanding boss's highly private financial matters, because you know that {{BLANK}}.",
    "cn": "你真的不應該秘密調查你要求嚴格老闆高度私人的財務問題，因為你知道好奇心害死貓。"
  },
  {
    "word": "curious",
    "pos": "adj.",
    "cn_def": "好奇的",
    "en_def": "eager to know or learn something.",
    "sentence": "The incredibly {{BLANK}} tourist couldn't stop asking the tired local guide dozens of complex questions about the town's hidden history.",
    "cn": "這位極度好奇的遊客忍不住問了疲憊的當地導遊幾十個關於該鎮隱藏歷史的複雜問題。"
  },
  {
    "word": "curious about",
    "pos": "phr.",
    "cn_def": "對...感到好奇",
    "en_def": "Wanting to know or learn more about something.",
    "sentence": "Young children are naturally {{BLANK}} the world around them, so they always ask their parents a lot of questions.",
    "cn": "幼小的孩童天生對周遭的世界感到好奇，所以他們總是會問父母許多問題。"
  },
  {
    "word": "enthusiastic",
    "pos": "adj.",
    "cn_def": "熱情的、熱心的",
    "en_def": "Showing a lot of excitement and interest in something.",
    "sentence": "The students were very {{BLANK}} about the upcoming school trip, and they spent the whole afternoon discussing what to pack.",
    "cn": "學生們對即將到來的學校旅行感到非常熱情，他們花了整個下午討論要打包什麼行李。"
  },
  {
    "word": "enthusiasm",
    "pos": "n.",
    "cn_def": "熱情、熱忱",
    "en_def": "A strong feeling of excitement and interest in an activity.",
    "sentence": "Although the project was difficult, Mary never lost her {{BLANK}} and she continued to work hard until it was completely finished.",
    "cn": "雖然這個專案很困難，但瑪麗從未失去她的熱情，她繼續努力工作直到它完全完成。"
  },
  {
    "word": "passion",
    "pos": "n.",
    "cn_def": "熱愛、強烈的愛好",
    "en_def": "A very strong feeling of love, interest, or enthusiasm for an activity.",
    "sentence": "David has a true {{BLANK}} for photography, so he spends all his weekends taking beautiful pictures of birds in the local park.",
    "cn": "大衛對攝影有著真正的熱愛，所以他把所有的週末都花在當地的公園裡拍攝鳥類的漂亮照片。"
  },
  {
    "word": "passionate",
    "pos": "adj.",
    "cn_def": "熱情的、熱愛的",
    "en_def": "Having or showing strong feelings of enthusiasm or love for something.",
    "sentence": "The young chef is extremely {{BLANK}} about cooking, and he hopes to open his own Italian restaurant in Taipei next year.",
    "cn": "這位年輕的廚師對烹飪極具熱情，他希望明年能在台北開一家屬於自己的義式餐廳。"
  },
  {
    "word": "companion",
    "pos": "n.",
    "cn_def": "同伴；伴侶",
    "en_def": "a person or animal with whom one spends a lot of time or with whom one travels.",
    "sentence": "The brave medieval hero and his loyal {{BLANK}} had many incredibly dangerous and exciting adventures together while traveling the kingdom.",
    "cn": "勇敢的中世紀英雄和他忠誠的同伴在遊歷王國時，一起經歷了許多極其危險且刺激的冒險。"
  },
  {
    "word": "traveling companion",
    "pos": "phr.",
    "cn_def": "旅伴",
    "en_def": "someone you travel with.",
    "sentence": "I genuinely hope to eventually find a highly reliable and extremely fun {{BLANK}} to comfortably travel through Europe with me next summer.",
    "cn": "我真心希望能最終找到一位高度可靠且極其有趣的旅伴，明年夏天能舒服地和我一起去歐洲旅行。"
  },
  {
    "word": "company",
    "pos": "n.",
    "cn_def": "陪伴、作伴",
    "en_def": "The state of being with someone so they do not feel lonely.",
    "sentence": "After her husband passed away, Mrs. Lin adopted a cute little dog because she really needed some {{BLANK}} during those long, quiet evenings.",
    "cn": "在她丈夫過世後，林太太領養了一隻可愛的小狗，因為在那些漫長而安靜的夜晚，她真的很需要一些陪伴。"
  },
  {
    "word": "keep her company",
    "pos": "phr.",
    "cn_def": "陪伴某人",
    "en_def": "To spend time with someone so that they are not alone.",
    "sentence": "Because Sarah was feeling sick and had to stay home alone, her best friend went over to {{BLANK}} for the entire afternoon.",
    "cn": "因為莎拉覺得不舒服且必須獨自待在家裡，她最好的朋友過去陪伴她度過了一整個下午。"
  },
  {
    "word": "company",
    "pos": "n.",
    "cn_def": "公司",
    "en_def": "A business organization that makes money by selling goods or services.",
    "sentence": "After graduating from university, Jason started working for a famous technology {{BLANK}} that develops educational software for high school students across the country.",
    "cn": "大學畢業後，傑森開始為一家著名的科技公司工作，該公司為全國的高中生開發教育軟體。"
  },
  {
    "word": "accompany",
    "pos": "v.",
    "cn_def": "陪同、陪伴",
    "en_def": "To go somewhere with someone as a companion or escort.",
    "sentence": "Children under the age of twelve are not allowed to enter the museum unless an adult can {{BLANK}} them during the entire visit.",
    "cn": "十二歲以下的兒童不允許進入這家博物館，除非有成年人能在整個參觀期間陪同他們。"
  },
  {
    "word": "be accompanied by",
    "pos": "phr.",
    "cn_def": "由...陪同、伴隨著...",
    "en_def": "To go together with someone or happen together with something else.",
    "sentence": "The president will {{BLANK}} his wife and several important officials during his official visit to Japan next week.",
    "cn": "總統下週正式訪問日本期間，將由他的妻子和幾位重要官員陪同。"
  },
  {
    "word": "colleague",
    "pos": "n.",
    "cn_def": "同事",
    "en_def": "a person with whom one works in a profession or business.",
    "sentence": "The friendly manager happily invited absolutely all of his hardworking office {{BLANK}} to a grand dinner to enthusiastically celebrate the massive success.",
    "cn": "友善的經理快樂地邀請了他所有辛勤工作的辦公室同事參加一場盛大的晚宴，以熱情地慶祝巨大的成功。"
  },
  {
    "word": "partner",
    "pos": "n.",
    "cn_def": "夥伴；合夥人",
    "en_def": "a person who takes part in an undertaking with another or others.",
    "sentence": "Wealthy Bruce is currently looking for an experienced and highly trustworthy business {{BLANK}} to help completely fund his brand new startup company.",
    "cn": "富有的布魯斯目前正在尋找一位經驗豐富且極度值得信賴的商業夥伴（合夥人），以幫助完全資助他全新的新創公司。"
  },
  {
    "word": "manager",
    "pos": "n.",
    "cn_def": "經理、主管",
    "en_def": "A person who is in charge of a department, business, or team.",
    "sentence": "The hotel {{BLANK}} apologized to the guests for the loud noise and offered them a free breakfast the next morning.",
    "cn": "飯店經理向賓客因巨大的噪音而致歉，並在隔天早上為他們提供免費的早餐。"
  },
  {
    "word": "manage",
    "pos": "v.",
    "cn_def": "管理、經營",
    "en_def": "To be in control of a business, team, organization, or time.",
    "sentence": "Mr. Lin has to {{BLANK}} a large team of software engineers, so he always arrives at the office early to plan their daily tasks.",
    "cn": "林先生必須管理一個由軟體工程師組成的大型團隊，因此他總是提早到達辦公室來規劃他們每日的任務。"
  },
  {
    "word": "managed to finish",
    "pos": "phr.",
    "cn_def": "設法做到...、成功做到...",
    "en_def": "To succeed in doing something difficult, especially after trying hard.",
    "sentence": "Although the project was extremely difficult, the team {{BLANK}} it just a few hours before the strict deadline.",
    "cn": "雖然這個專案非常困難，但團隊還是設法在嚴格的截止日期前幾個小時完成了它。"
  },
  {
    "word": "supervise",
    "pos": "v.",
    "cn_def": "監督、指導",
    "en_def": "To watch a person or activity to make sure everything is done correctly and safely.",
    "sentence": "The science teacher must {{BLANK}} the students while they are doing chemistry experiments, because some of the liquids can be dangerous.",
    "cn": "自然老師在學生做化學實驗時必須監督他們，因為某些液體可能具有危險性。"
  },
  {
    "word": "supervisor",
    "pos": "n.",
    "cn_def": "主管、監工",
    "en_def": "A person who is in charge of a group of people or an area of work.",
    "sentence": "If you want to take a day off next week, you need to get permission from your {{BLANK}} before submitting the application form.",
    "cn": "如果你下週想請一天假，你在提交申請表之前需要先得到你主管的允許。"
  },
  {
    "word": "monitor",
    "pos": "v.",
    "cn_def": "監測、監控",
    "en_def": "To check, watch, or test something regularly to see how it progresses.",
    "sentence": "Doctors use special machines to {{BLANK}} the patient's heartbeat after the long surgery, ensuring that there are no unexpected problems.",
    "cn": "醫生在漫長的手術後使用特殊機器來監測病人的心跳，以確保不會出現意外的問題。"
  },
  {
    "word": "monitor",
    "pos": "n.",
    "cn_def": "顯示器、螢幕",
    "en_def": "A screen that shows information or images, or a device used for checking something.",
    "sentence": "The graphic designer decided to buy a larger computer {{BLANK}} because it would help him see the details of his drawings more clearly.",
    "cn": "這位平面設計師決定買一個更大的電腦顯示器（螢幕），因為這將能幫助他更清楚地看見他畫作的細節。"
  },
  {
    "word": "employ",
    "pos": "v.",
    "cn_def": "雇用",
    "en_def": "To pay someone to work for your company or organization.",
    "sentence": "The new international restaurant plans to {{BLANK}} thirty local workers, which will create many great job opportunities for young people in this town.",
    "cn": "這家新的國際餐廳計畫雇用三十名當地員工，這將為這個小鎮的年輕人創造許多棒的工作機會。"
  },
  {
    "word": "employee",
    "pos": "n.",
    "cn_def": "員工、雇員",
    "en_def": "A person who is paid to work for someone else or a company.",
    "sentence": "Every {{BLANK}} in this company receives a special bonus at the end of the year if the sales targets are successfully achieved.",
    "cn": "如果銷售目標成功達成，這家公司的每位員工在年底都會收到一筆特別的獎金。"
  },
  {
    "word": "employer",
    "pos": "n.",
    "cn_def": "雇主、老闆",
    "en_def": "A person or organization that pays people to work for them.",
    "sentence": "A good {{BLANK}} should provide a safe working environment and treat all workers fairly, rather than just focusing on making profits.",
    "cn": "一位好雇主應該要提供安全的工作環境並公平對待所有勞工，而不是僅僅專注於賺取利潤。"
  },
  {
    "word": "employment",
    "pos": "n.",
    "cn_def": "就業、工作",
    "en_def": "The state of having a paid job, or the act of employing someone.",
    "sentence": "It is difficult for university graduates to find stable {{BLANK}} during an economic crisis, so many choose to continue their studies instead.",
    "cn": "在經濟危機期間，大學畢業生很難找到穩定的工作（就業機會），因此許多人選擇繼續他們的學業。"
  },
  {
    "word": "employment rate",
    "pos": "phr.",
    "cn_def": "就業率",
    "en_def": "The percentage of the working-age population that currently has a paid job.",
    "sentence": "The government announced that the {{BLANK}} has increased this year because several new factories opened and hired thousands of citizens.",
    "cn": "政府宣布今年的就業率有所上升，因為幾家新工廠開業並雇用了數千名市民。"
  },
  {
    "word": "unemployment rate",
    "pos": "phr.",
    "cn_def": "失業率",
    "en_def": "The percentage of people in the workforce who do not have a job but are looking for one.",
    "sentence": "When the economy is weak, the {{BLANK}} usually goes up because many businesses are forced to close down or reduce their staff.",
    "cn": "當經濟疲軟時，失業率通常會上升，因為許多企業被迫倒閉或縮減員工人數。"
  }
];

const MCQS = [
  {
    "q": "The experienced police detectives worked tirelessly to carefully ______ the mysterious email back to the person who originally sent it.",
    "options": [
      "supervise",
      "trace",
      "track",
      "manage"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The knowledgeable historians have successfully ______ of this fascinating story back to a popular Greek myth.",
    "options": [
      "debunk a myth",
      "managed to finish",
      "traces of",
      "traced the ancient roots"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The young art student used a piece of thin paper to ______ the beautiful drawing from the ancient textbook so that she could practice her shading techniques.",
    "options": [
      "supervise",
      "accompany",
      "trace",
      "deceive"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The police searched the entire house carefully, but they could not find any ______ of the thief who broke into the building last night.",
    "options": [
      "trace",
      "companion",
      "idiom",
      "defeat"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The experienced hunters decided to ______ of the wild bear in the snow, hoping to find its hidden cave before sunset.",
    "options": [
      "these days",
      "be accompanied by",
      "curious about",
      "follow the trace"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The terrified campers quickly packed their tents after they shockingly found fresh ______ dangerous bear activity in their backyard.",
    "options": [
      "unemployment rate",
      "act so naively",
      "traces of",
      "beware of"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Online shoppers can use the mobile app to ______ their packages in real time, so they know exactly when the delivery guy will arrive.",
    "options": [
      "track",
      "supervise",
      "manage",
      "beware"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The athletes lined up on the running ______ and waited for the starting gun, because they all wanted to win the gold medal this afternoon.",
    "options": [
      "tragedy",
      "track",
      "monitor",
      "colleague"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "It is necessary for college students to ______ their expenses every week, otherwise they might run out of pocket money before the month ends.",
    "options": [
      "these days",
      "raise the question",
      "raise hands",
      "keep track of"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The government is building a new high-speed ______ to connect the remote mountain villages with the big cities, which will make travel much more convenient.",
    "options": [
      "path",
      "employment",
      "railway",
      "heel"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "We followed a narrow ______ through the thick forest, and it finally led us to a beautiful secret waterfall that few people knew about.",
    "options": [
      "employer",
      "path",
      "railway",
      "tragedy"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "\"It's raining cats and dogs\" is a very popular English ______ that is frequently used to say it's raining heavily.",
    "options": [
      "idiom",
      "path",
      "curiosity",
      "track"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Poor Chloe accidentally cut her right ______ on some broken glass that was unfortunately hidden deep in the soft sand.",
    "options": [
      "employment",
      "heel",
      "comedian",
      "legend"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Because she isn't used to wearing expensive ______, Janice's feet hurt terribly after walking around the party all night.",
    "options": [
      "high heels",
      "traveling companion",
      "outer surface",
      "raise funds"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Although they only met a few weeks ago at a summer camp, Ethan completely ______ Olivia because of her kind heart and wonderful sense of humor.",
    "options": [
      "employment rate",
      "outer edge",
      "suffered a devastating defeat",
      "fell head over heels for"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "______, younger people usually spend several continuous hours a day staring at their computers and ignoring their tired family members.",
    "options": [
      "moreover",
      "rapidly",
      "Nowadays",
      "considerably"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "I haven't seen my busy sister ______, as she has been constantly working late nights at the large corporate office.",
    "options": [
      "significantly",
      "rapidly",
      "moderately",
      "recently"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Has the demanding manager been acting strangely ______, or is he just stressed about the incredibly tight project deadlines?",
    "options": [
      "lately",
      "furthermore",
      "additionally",
      "moreover"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Finding a cheap and comfortable apartment in the crowded city center is becoming incredibly difficult to do ______.",
    "options": [
      "act so naively",
      "get a raise",
      "these days",
      "keep track of"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Have you read the article about ______ smartphone from that tech company, which features a revolutionary battery that can last for three days?",
    "options": [
      "raise funds",
      "the latest",
      "be accompanied by",
      "trick the old man into"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "We must hurry to the station because this is ______ train leaving for Taipei tonight, or we will have to take an expensive taxi.",
    "options": [
      "the last",
      "beware of",
      "traces of",
      "out of curiosity"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Tina likes both playing the piano and painting, but she spends more time on ______ because she wants to become a professional artist.",
    "options": [
      "managed to finish",
      "the latter",
      "In addition",
      "raise hands"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "As the terrifying winter storm rapidly approached, the quiet beach was heavily buffeted by absolutely ______ and destructive ocean waves.",
    "options": [
      "deceptive",
      "distinguished",
      "enormous",
      "slight"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The victorious army officially held a truly ______ and colorful parade right through the center of the completely ruined city.",
    "options": [
      "mythical",
      "defeated",
      "naive",
      "grand"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The dedicated student successfully put a ______ amount of effort into his final project and ultimately received the highest grade.",
    "options": [
      "tremendous",
      "noted",
      "remarkable",
      "mysterious"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The company suffered a ______ loss because their main factory caught fire last week, forcing them to cancel many orders.",
    "options": [
      "significant",
      "massive",
      "aware",
      "passionate"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "When we reached the top of the mountain, we saw a ______ view of the ocean that made us forget how tired we were.",
    "options": [
      "enormous",
      "renowned",
      "rapid",
      "magnificent"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The museum tour guide shared many ______ stories about ancient Egypt, so all the students listened carefully without getting bored.",
    "options": [
      "exceptional",
      "remarkable",
      "fascinating",
      "massive"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Kevin showed a ______ talent for playing the violin at a young age, and he won his first international competition yesterday.",
    "options": [
      "enormous",
      "remarkable",
      "deceptive",
      "slight"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Because of her ______ performance during the training program, the manager decided to give Linda a promotion and a higher salary.",
    "options": [
      "tremendous",
      "fascinating",
      "curious",
      "exceptional"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The university invited a ______ professor to give a speech about climate change, and the main auditorium was completely packed with students.",
    "options": [
      "distinguished",
      "noted",
      "moderate",
      "enthusiastic"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "This restaurant is a ______ spot for local seafood, so you usually have to book a table several weeks in advance.",
    "options": [
      "enthusiastic",
      "massive",
      "celebrated",
      "outer"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Mr. Wang is a ______ expert in computer science, and he has written several textbooks that are used all over the country.",
    "options": [
      "mysterious",
      "noted",
      "naive",
      "exceptional"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The French chef is ______ for his delicious desserts, which attract thousands of food lovers to his bakery every single month.",
    "options": [
      "renowned",
      "tremendous",
      "aware",
      "fascinating"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "Many young people think that working in the fashion industry is a ______ job, but it actually requires a lot of hard work.",
    "options": [
      "renowned",
      "magnificent",
      "remarkable",
      "glamorous"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "The rich businessman hosted a ______ party at a five-star hotel to celebrate his company's anniversary, inviting hundreds of important guests.",
    "options": [
      "celebrated",
      "curious",
      "lavish",
      "moderate"
    ],
    "answer": 2,
    "vocabIndex": 35
  },
  {
    "q": "After raining heavily for several days, the valley became filled with ______ green grass and beautiful flowers that attracted many tourists.",
    "options": [
      "tremendous",
      "lush",
      "celebrated",
      "grand"
    ],
    "answer": 1,
    "vocabIndex": 36
  },
  {
    "q": "Regular exercise and a balanced diet can make a ______ difference to your overall health, so you should start today.",
    "options": [
      "comic",
      "massive",
      "significant",
      "enthusiastic"
    ],
    "answer": 2,
    "vocabIndex": 37
  },
  {
    "q": "The new train system has ______ reduced travel time between the two cities, making it much easier for people to commute.",
    "options": [
      "furthermore",
      "considerably",
      "moderately",
      "significantly"
    ],
    "answer": 3,
    "vocabIndex": 38
  },
  {
    "q": "The government spent a ______ amount of money on building the new library, but the local citizens think it was worth it.",
    "options": [
      "considerable",
      "exceptional",
      "renowned",
      "naive"
    ],
    "answer": 0,
    "vocabIndex": 39
  },
  {
    "q": "The price of vegetables increased ______ after the typhoon hit the island, causing many families to complain about the high costs.",
    "options": [
      "furthermore",
      "rapidly",
      "moderately",
      "considerably"
    ],
    "answer": 3,
    "vocabIndex": 40
  },
  {
    "q": "Thanks to the ______ development of technology, people can now connect with their friends instantly no matter where they live.",
    "options": [
      "rapid",
      "tremendous",
      "mysterious",
      "naive"
    ],
    "answer": 0,
    "vocabIndex": 41
  },
  {
    "q": "The water level in the river rose ______ during the heavy storm, so the police advised everyone to stay away from the banks.",
    "options": [
      "considerably",
      "rapidly",
      "significantly",
      "moderately"
    ],
    "answer": 1,
    "vocabIndex": 42
  },
  {
    "q": "Doctors recommend that doing a ______ amount of exercise every week can help protect your heart and reduce daily stress.",
    "options": [
      "tremendous",
      "lavish",
      "moderate",
      "passionate"
    ],
    "answer": 2,
    "vocabIndex": 43
  },
  {
    "q": "Although the new restaurant is only ______ priced, the food they serve is of high quality and tastes absolutely delicious.",
    "options": [
      "moderately",
      "furthermore",
      "considerably",
      "tragically"
    ],
    "answer": 0,
    "vocabIndex": 44
  },
  {
    "q": "There was a ______ delay in the flight schedule due to the bad weather, but all passengers arrived safely at their destination.",
    "options": [
      "moderate",
      "remarkable",
      "slight",
      "significant"
    ],
    "answer": 2,
    "vocabIndex": 45
  },
  {
    "q": "This year's exam was ______ more difficult than last year's, but most students still passed because they studied very hard.",
    "options": [
      "significantly",
      "slightly",
      "moreover",
      "rapidly"
    ],
    "answer": 1,
    "vocabIndex": 46
  },
  {
    "q": "The teacher carefully drew two shapes and noted that the ______ circle was significantly bigger than the inner circle.",
    "options": [
      "defeated",
      "magnificent",
      "fascinating",
      "outer"
    ],
    "answer": 3,
    "vocabIndex": 47
  },
  {
    "q": "The frightened child nervously hid deep inside the dark and completely silent ______ room of the massive abandoned wooden house.",
    "options": [
      "enormous",
      "inner",
      "considerable",
      "tragic"
    ],
    "answer": 1,
    "vocabIndex": 48
  },
  {
    "q": "The brave explorers cautiously walked along the steep ______ of the dangerous mountain cliff while looking at the sea.",
    "options": [
      "outer edge",
      "raise the question",
      "outer surface",
      "unemployment rate"
    ],
    "answer": 0,
    "vocabIndex": 49
  },
  {
    "q": "The protective ______ of the advanced spacecraft is completely designed to safely withstand the intense heat during re-entry.",
    "options": [
      "popular myth",
      "traces of",
      "traveling companion",
      "outer surface"
    ],
    "answer": 3,
    "vocabIndex": 50
  },
  {
    "q": "Sue's unfaithful boyfriend foolishly promised that he would never ever ______ her again, but she simply didn't trust him anymore.",
    "options": [
      "track",
      "compromises",
      "deceive",
      "trace"
    ],
    "answer": 2,
    "vocabIndex": 51
  },
  {
    "q": "The highly ______ advertisement smoothly made the incredibly cheap product seem much more valuable than it actually was in reality.",
    "options": [
      "renowned",
      "inner",
      "tragic",
      "deceptive"
    ],
    "answer": 3,
    "vocabIndex": 52
  },
  {
    "q": "The intelligent detective quickly realized that the criminal's complex story was entirely based on cleverly planned lies and dark ______.",
    "options": [
      "deception",
      "employment",
      "manager",
      "railway"
    ],
    "answer": 0,
    "vocabIndex": 53
  },
  {
    "q": "I still honestly can't believe that my supposed best friends completely ______ me into coming to this extremely boring party.",
    "options": [
      "partner",
      "tricked",
      "idiom",
      "colleague"
    ],
    "answer": 1,
    "vocabIndex": 54
  },
  {
    "q": "The online scammer tried to ______ sending money by pretending to be his long-lost friend on social media.",
    "options": [
      "suffered a devastating defeat",
      "raise the awareness of",
      "trick the old man into",
      "employment rate"
    ],
    "answer": 2,
    "vocabIndex": 55
  },
  {
    "q": "The magician performed an amazing ______ with a deck of cards, and nobody in the audience could figure out how he did it.",
    "options": [
      "supervisor",
      "defeat",
      "mystery",
      "trick"
    ],
    "answer": 3,
    "vocabIndex": 56
  },
  {
    "q": "On April Fools' Day, the mischievous students decided to ______ their homeroom teacher by hiding her favorite chalk.",
    "options": [
      "play a trick on",
      "keep track of",
      "raise funds",
      "validate the fact"
    ],
    "answer": 0,
    "vocabIndex": 57
  },
  {
    "q": "The young and highly ______ student completely trusted the friendly stranger who secretly wanted to steal his expensive new smartphone.",
    "options": [
      "glamorous",
      "lavish",
      "naive",
      "passionate"
    ],
    "answer": 2,
    "vocabIndex": 58
  },
  {
    "q": "You simply cannot afford to ______ when you are formally negotiating such an incredibly important and valuable contract.",
    "options": [
      "keep track of",
      "act so naively",
      "the last",
      "raise the issue"
    ],
    "answer": 1,
    "vocabIndex": 59
  },
  {
    "q": "The strict principal made absolutely sure that every single student was fully ______ of the brand new school safety regulations.",
    "options": [
      "rapid",
      "tremendous",
      "moderate",
      "aware"
    ],
    "answer": 3,
    "vocabIndex": 60
  },
  {
    "q": "Drivers must ______ the speed limits on the highway, because the police often set up speed cameras to catch reckless drivers.",
    "options": [
      "act so naively",
      "employment rate",
      "be aware of",
      "out of curiosity"
    ],
    "answer": 2,
    "vocabIndex": 61
  },
  {
    "q": "When you cautiously walk in these dark and dense woods, you should always ______ of dangerous and highly venomous snakes.",
    "options": [
      "beware",
      "compromises",
      "supervise",
      "employ"
    ],
    "answer": 0,
    "vocabIndex": 62
  },
  {
    "q": "The bright yellow traffic sign clearly warned the tired drivers to heavily ______ the unexpected sharp curve up ahead.",
    "options": [
      "raise funds",
      "beware of",
      "trick the old man into",
      "raise the issue"
    ],
    "answer": 1,
    "vocabIndex": 63
  },
  {
    "q": "The massive environmental campaign successfully raised global ______ about the tragic destruction of the beautiful and delicate ancient rainforests.",
    "options": [
      "awareness",
      "tragedy",
      "mystery",
      "partner"
    ],
    "answer": 0,
    "vocabIndex": 64
  },
  {
    "q": "The school decided to host an Earth Day event to ______ environmental protection among young students.",
    "options": [
      "the last",
      "these days",
      "raise the awareness of",
      "be aware of"
    ],
    "answer": 2,
    "vocabIndex": 65
  },
  {
    "q": "The sudden change in the company's policy might ______ of whether the manager plans to cut down the employees' benefits.",
    "options": [
      "keep track of",
      "raise the question",
      "curious about",
      "curiosity killed the cat"
    ],
    "answer": 1,
    "vocabIndex": 66
  },
  {
    "q": "During the monthly meeting, the sales team decided to ______ of declining customer satisfaction over the past quarter.",
    "options": [
      "validate the fact",
      "get a raise",
      "employment rate",
      "raise the issue"
    ],
    "answer": 3,
    "vocabIndex": 67
  },
  {
    "q": "The local charity group organized a charity concert to ______ for the families who lost their homes in the recent earthquake.",
    "options": [
      "raise funds",
      "keep her company",
      "suffered a devastating defeat",
      "act so naively"
    ],
    "answer": 0,
    "vocabIndex": 68
  },
  {
    "q": "It can be very challenging for working parents to ______ while maintaining a full-time job in a busy city like Taipei.",
    "options": [
      "employment rate",
      "raise funds",
      "raise children",
      "reach a fair compromise"
    ],
    "answer": 2,
    "vocabIndex": 69
  },
  {
    "q": "The teacher told the students to ______ if they knew the answer, but nobody in the classroom volunteered to speak.",
    "options": [
      "curiosity killed the cat",
      "raise hands",
      "debunk a myth",
      "suffered a devastating defeat"
    ],
    "answer": 1,
    "vocabIndex": 70
  },
  {
    "q": "After working hard and completing several successful projects this year, Sharon finally managed to ______ from her boss.",
    "options": [
      "trick the old man into",
      "raise the issue",
      "act so naively",
      "get a raise"
    ],
    "answer": 3,
    "vocabIndex": 71
  },
  {
    "q": "This delicious hot soup is much less expensive than that greasy hamburger; ______, it is significantly healthier and more nutritious.",
    "options": [
      "rapidly",
      "moreover",
      "significantly",
      "tragically"
    ],
    "answer": 1,
    "vocabIndex": 72
  },
  {
    "q": "The newly hired employee is highly intelligent and consistently works hard; ______, he is incredibly friendly to all his colleagues.",
    "options": [
      "furthermore",
      "additionally",
      "slightly",
      "lately"
    ],
    "answer": 0,
    "vocabIndex": 73
  },
  {
    "q": "______ to providing excellent medical benefits, the generous company also surprisingly offers its workers four weeks of paid vacation.",
    "options": [
      "the last",
      "follow the trace",
      "In addition",
      "raise funds"
    ],
    "answer": 2,
    "vocabIndex": 74
  },
  {
    "q": "The luxurious hotel room features a beautifully comfortable bed, and ______, it has a truly magnificent view of the ocean.",
    "options": [
      "lately",
      "Nowadays",
      "moreover",
      "additionally"
    ],
    "answer": 3,
    "vocabIndex": 75
  },
  {
    "q": "The strict boss finally ______, generously giving all the exhausted workers extra paid holidays but absolutely no permanent salary raise.",
    "options": [
      "railway",
      "compromise",
      "supervisor",
      "defeat"
    ],
    "answer": 1,
    "vocabIndex": 76
  },
  {
    "q": "The two extremely stubborn businessmen finally managed to ______ after having an incredibly long and stressful meeting.",
    "options": [
      "reach a fair compromise",
      "employment rate",
      "raise hands",
      "keep her company"
    ],
    "answer": 0,
    "vocabIndex": 77
  },
  {
    "q": "Continuously smoking heavy cigarettes severely ______ your physical health by slowly and permanently damaging your vital heart and lungs.",
    "options": [
      "manage",
      "monitor",
      "compromises",
      "defeated"
    ],
    "answer": 2,
    "vocabIndex": 78
  },
  {
    "q": "Any healthy and deeply romantic relationship naturally requires a certain amount of ______ to successfully survive difficult challenges.",
    "options": [
      "the latest",
      "follow the trace",
      "curiosity killed the cat",
      "give and take"
    ],
    "answer": 3,
    "vocabIndex": 79
  },
  {
    "q": "The skilled blue team successfully ______ the aggressive red team in the highly competitive and incredibly exciting championship football game.",
    "options": [
      "manage",
      "track",
      "defeated",
      "deceive"
    ],
    "answer": 2,
    "vocabIndex": 80
  },
  {
    "q": "The confident players on the national baseball team were deeply upset and crying after their terrible and completely unexpected ______.",
    "options": [
      "passion",
      "comedy",
      "manager",
      "defeat"
    ],
    "answer": 3,
    "vocabIndex": 81
  },
  {
    "q": "After failing the difficult medical exam for the third time, the exhausted student understandably felt completely ______ and totally hopeless.",
    "options": [
      "defeated",
      "passionate",
      "aware",
      "tremendous"
    ],
    "answer": 0,
    "vocabIndex": 82
  },
  {
    "q": "The powerful military forces unfortunately ______ during the long and brutally cold winter battle in the mountains.",
    "options": [
      "the latter",
      "suffered a devastating defeat",
      "get a raise",
      "curious about"
    ],
    "answer": 1,
    "vocabIndex": 83
  },
  {
    "q": "The incredibly ______ and heartbreaking love story of Romeo and Juliet is widely known by millions of emotional people worldwide.",
    "options": [
      "tragic",
      "passionate",
      "remarkable",
      "tremendous"
    ],
    "answer": 0,
    "vocabIndex": 84
  },
  {
    "q": "The brilliant and highly popular young musician ______ died in a terrible car accident when he was only twenty years old.",
    "options": [
      "Nowadays",
      "tragically",
      "furthermore",
      "moderately"
    ],
    "answer": 1,
    "vocabIndex": 85
  },
  {
    "q": "It will certainly be an incredibly long time before the completely destroyed island eventually recovers from the terrifying natural ______.",
    "options": [
      "path",
      "railway",
      "tragedy",
      "deception"
    ],
    "answer": 2,
    "vocabIndex": 86
  },
  {
    "q": "Instead of watching a dark drama, the tired family decided to watch a lighthearted and highly ______ movie to relax completely.",
    "options": [
      "enormous",
      "tremendous",
      "slight",
      "comic"
    ],
    "answer": 3,
    "vocabIndex": 87
  },
  {
    "q": "We decided to watch a popular ______ at the movie theater last night because we needed a good laugh after a stressful week of final exams.",
    "options": [
      "awareness",
      "comedy",
      "deception",
      "employee"
    ],
    "answer": 1,
    "vocabIndex": 88
  },
  {
    "q": "The famous ______ told many funny jokes during the live show, which made the entire audience laugh out loud throughout the evening.",
    "options": [
      "companion",
      "employee",
      "manager",
      "comedian"
    ],
    "answer": 3,
    "vocabIndex": 89
  },
  {
    "q": "Every ancient culture has its own fascinating traditional ______ about how the vast and complex world was originally created miraculously.",
    "options": [
      "myth",
      "legend",
      "colleague",
      "railway"
    ],
    "answer": 0,
    "vocabIndex": 90
  },
  {
    "q": "The brave and strong hero heroically fought against an incredibly dangerous and fire-breathing ______ dragon to safely save the beautiful princess.",
    "options": [
      "naive",
      "exceptional",
      "mythical",
      "significant"
    ],
    "answer": 2,
    "vocabIndex": 91
  },
  {
    "q": "According to the famous old ______, courageous Robin Hood cleverly stole money from the rich and generously gave it to the poor.",
    "options": [
      "tricked",
      "company",
      "track",
      "legend"
    ],
    "answer": 3,
    "vocabIndex": 92
  },
  {
    "q": "Many people still believe the ______ that drinking coffee stunts your growth, but scientific studies have proven that this idea is completely wrong.",
    "options": [
      "curiosity",
      "supervisor",
      "myth",
      "passion"
    ],
    "answer": 2,
    "vocabIndex": 93
  },
  {
    "q": "The brilliant scientist wrote a detailed book to carefully debunk the ______ that eating chocolate constantly causes bad skin.",
    "options": [
      "popular myth",
      "raise the question",
      "high heels",
      "the last"
    ],
    "answer": 0,
    "vocabIndex": 94
  },
  {
    "q": "The doctor wrote an article to ______ about fad diets, explaining that starving yourself is actually very dangerous for your health.",
    "options": [
      "raise hands",
      "debunk a myth",
      "validate the fact",
      "keep track of"
    ],
    "answer": 1,
    "vocabIndex": 95
  },
  {
    "q": "Scientists need to conduct multiple experiments to ______ before they can publish their new discovery in a famous medical journal.",
    "options": [
      "In addition",
      "outer surface",
      "traced the ancient roots",
      "validate the fact"
    ],
    "answer": 3,
    "vocabIndex": 96
  },
  {
    "q": "The sudden disappearance of the ancient civilization remains a total ______, as archaeologists have found very few clues to explain what happened to them.",
    "options": [
      "defeat",
      "company",
      "mystery",
      "employment"
    ],
    "answer": 2,
    "vocabIndex": 97
  },
  {
    "q": "A ______ package arrived at my house this morning without a return address, so I was afraid to open it until my parents came home.",
    "options": [
      "mysterious",
      "outer",
      "inner",
      "celebrated"
    ],
    "answer": 0,
    "vocabIndex": 98
  },
  {
    "q": "Most energetic young children naturally possess a lot of intense ______ about the completely unknown things that physically surround them.",
    "options": [
      "myth",
      "curiosity",
      "railway",
      "trick"
    ],
    "answer": 1,
    "vocabIndex": 99
  },
  {
    "q": "Merely ______, the deeply fascinated children carefully opened the large wooden box to see what was hidden inside.",
    "options": [
      "popular myth",
      "these days",
      "out of curiosity",
      "fell head over heels for"
    ],
    "answer": 2,
    "vocabIndex": 100
  },
  {
    "q": "You really shouldn't secretly investigate your demanding boss's highly private financial matters, because you know that ______.",
    "options": [
      "curiosity killed the cat",
      "be aware of",
      "curious about",
      "managed to finish"
    ],
    "answer": 0,
    "vocabIndex": 101
  },
  {
    "q": "The incredibly ______ tourist couldn't stop asking the tired local guide dozens of complex questions about the town's hidden history.",
    "options": [
      "celebrated",
      "curious",
      "significant",
      "considerable"
    ],
    "answer": 1,
    "vocabIndex": 102
  },
  {
    "q": "Young children are naturally ______ the world around them, so they always ask their parents a lot of questions.",
    "options": [
      "traveling companion",
      "the last",
      "get a raise",
      "curious about"
    ],
    "answer": 3,
    "vocabIndex": 103
  },
  {
    "q": "The students were very ______ about the upcoming school trip, and they spent the whole afternoon discussing what to pack.",
    "options": [
      "enormous",
      "enthusiastic",
      "exceptional",
      "outer"
    ],
    "answer": 1,
    "vocabIndex": 104
  },
  {
    "q": "Although the project was difficult, Mary never lost her ______ and she continued to work hard until it was completely finished.",
    "options": [
      "compromise",
      "heel",
      "enthusiasm",
      "trace"
    ],
    "answer": 2,
    "vocabIndex": 105
  },
  {
    "q": "David has a true ______ for photography, so he spends all his weekends taking beautiful pictures of birds in the local park.",
    "options": [
      "compromise",
      "comedy",
      "tricked",
      "passion"
    ],
    "answer": 3,
    "vocabIndex": 106
  },
  {
    "q": "The young chef is extremely ______ about cooking, and he hopes to open his own Italian restaurant in Taipei next year.",
    "options": [
      "passionate",
      "mysterious",
      "enormous",
      "considerable"
    ],
    "answer": 0,
    "vocabIndex": 107
  },
  {
    "q": "The brave medieval hero and his loyal ______ had many incredibly dangerous and exciting adventures together while traveling the kingdom.",
    "options": [
      "trace",
      "railway",
      "companion",
      "mystery"
    ],
    "answer": 2,
    "vocabIndex": 108
  },
  {
    "q": "I genuinely hope to eventually find a highly reliable and extremely fun ______ to comfortably travel through Europe with me next summer.",
    "options": [
      "curiosity killed the cat",
      "traveling companion",
      "managed to finish",
      "raise the question"
    ],
    "answer": 1,
    "vocabIndex": 109
  },
  {
    "q": "After her husband passed away, Mrs. Lin adopted a cute little dog because she really needed some ______ during those long, quiet evenings.",
    "options": [
      "employee",
      "tricked",
      "manager",
      "company"
    ],
    "answer": 3,
    "vocabIndex": 110
  },
  {
    "q": "Because Sarah was feeling sick and had to stay home alone, her best friend went over to ______ for the entire afternoon.",
    "options": [
      "keep her company",
      "unemployment rate",
      "raise children",
      "In addition"
    ],
    "answer": 0,
    "vocabIndex": 111
  },
  {
    "q": "After graduating from university, Jason started working for a famous technology ______ that develops educational software for high school students across the country.",
    "options": [
      "trick",
      "compromise",
      "colleague",
      "company"
    ],
    "answer": 3,
    "vocabIndex": 112
  },
  {
    "q": "Children under the age of twelve are not allowed to enter the museum unless an adult can ______ them during the entire visit.",
    "options": [
      "compromises",
      "defeated",
      "accompany",
      "trace"
    ],
    "answer": 2,
    "vocabIndex": 113
  },
  {
    "q": "The president will ______ his wife and several important officials during his official visit to Japan next week.",
    "options": [
      "be accompanied by",
      "employment rate",
      "debunk a myth",
      "reach a fair compromise"
    ],
    "answer": 0,
    "vocabIndex": 114
  },
  {
    "q": "The friendly manager happily invited absolutely all of his hardworking office ______ to a grand dinner to enthusiastically celebrate the massive success.",
    "options": [
      "passion",
      "colleague",
      "enthusiasm",
      "legend"
    ],
    "answer": 1,
    "vocabIndex": 115
  },
  {
    "q": "Wealthy Bruce is currently looking for an experienced and highly trustworthy business ______ to help completely fund his brand new startup company.",
    "options": [
      "partner",
      "colleague",
      "passion",
      "companion"
    ],
    "answer": 0,
    "vocabIndex": 116
  },
  {
    "q": "The hotel ______ apologized to the guests for the loud noise and offered them a free breakfast the next morning.",
    "options": [
      "companion",
      "tricked",
      "compromise",
      "manager"
    ],
    "answer": 3,
    "vocabIndex": 117
  },
  {
    "q": "Mr. Lin has to ______ a large team of software engineers, so he always arrives at the office early to plan their daily tasks.",
    "options": [
      "supervise",
      "manage",
      "deceive",
      "employ"
    ],
    "answer": 1,
    "vocabIndex": 118
  },
  {
    "q": "Although the project was extremely difficult, the team ______ it just a few hours before the strict deadline.",
    "options": [
      "fell head over heels for",
      "out of curiosity",
      "managed to finish",
      "curious about"
    ],
    "answer": 2,
    "vocabIndex": 119
  },
  {
    "q": "The science teacher must ______ the students while they are doing chemistry experiments, because some of the liquids can be dangerous.",
    "options": [
      "accompany",
      "supervise",
      "monitor",
      "defeated"
    ],
    "answer": 1,
    "vocabIndex": 120
  },
  {
    "q": "If you want to take a day off next week, you need to get permission from your ______ before submitting the application form.",
    "options": [
      "railway",
      "colleague",
      "deception",
      "supervisor"
    ],
    "answer": 3,
    "vocabIndex": 121
  },
  {
    "q": "Doctors use special machines to ______ the patient's heartbeat after the long surgery, ensuring that there are no unexpected problems.",
    "options": [
      "monitor",
      "track",
      "accompany",
      "defeated"
    ],
    "answer": 0,
    "vocabIndex": 122
  },
  {
    "q": "The graphic designer decided to buy a larger computer ______ because it would help him see the details of his drawings more clearly.",
    "options": [
      "comedian",
      "manager",
      "monitor",
      "tricked"
    ],
    "answer": 2,
    "vocabIndex": 123
  },
  {
    "q": "The new international restaurant plans to ______ thirty local workers, which will create many great job opportunities for young people in this town.",
    "options": [
      "accompany",
      "compromises",
      "monitor",
      "employ"
    ],
    "answer": 3,
    "vocabIndex": 124
  },
  {
    "q": "Every ______ in this company receives a special bonus at the end of the year if the sales targets are successfully achieved.",
    "options": [
      "trace",
      "tricked",
      "employee",
      "tragedy"
    ],
    "answer": 2,
    "vocabIndex": 125
  },
  {
    "q": "A good ______ should provide a safe working environment and treat all workers fairly, rather than just focusing on making profits.",
    "options": [
      "compromise",
      "employer",
      "deception",
      "partner"
    ],
    "answer": 1,
    "vocabIndex": 126
  },
  {
    "q": "It is difficult for university graduates to find stable ______ during an economic crisis, so many choose to continue their studies instead.",
    "options": [
      "employment",
      "passion",
      "partner",
      "myth"
    ],
    "answer": 0,
    "vocabIndex": 127
  },
  {
    "q": "The government announced that the ______ has increased this year because several new factories opened and hired thousands of citizens.",
    "options": [
      "outer surface",
      "raise the awareness of",
      "unemployment rate",
      "employment rate"
    ],
    "answer": 3,
    "vocabIndex": 128
  },
  {
    "q": "When the economy is weak, the ______ usually goes up because many businesses are forced to close down or reduce their staff.",
    "options": [
      "out of curiosity",
      "outer surface",
      "unemployment rate",
      "outer edge"
    ],
    "answer": 2,
    "vocabIndex": 129
  }
];

const LOOKUP = {
  "trace": {
    "pos": "v.",
    "en_def": "to find or discover by investigation; a mark, object, or other indication of the existence or passing of something.",
    "cn_def": "追蹤",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to find or discover by investigation; a mark, object, or other indication of the existence or passing of something.",
        "cn_def": "追蹤"
      },
      {
        "pos": "v.",
        "en_def": "To copy a drawing or pattern by drawing over its lines on a transparent sheet.",
        "cn_def": "描摹、照著描"
      },
      {
        "pos": "n.",
        "en_def": "A sign, mark, or object showing that something has existed or happened.",
        "cn_def": "痕跡、蹤跡"
      }
    ]
  },
  "trace something's roots": {
    "pos": "phr.",
    "en_def": "to find the origin of something.",
    "cn_def": "追溯...的根源",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to find the origin of something.",
        "cn_def": "追溯...的根源"
      }
    ]
  },
  "traced the ancient roots": {
    "pos": "phr.",
    "en_def": "to find the origin of something.",
    "cn_def": "追溯...的根源",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to find the origin of something.",
        "cn_def": "追溯...的根源"
      }
    ]
  },
  "follow the trace": {
    "pos": "phr.",
    "en_def": "To find or chase someone or something by looking at the marks or signs they left behind.",
    "cn_def": "順著痕跡尋找、追蹤蹤跡",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To find or chase someone or something by looking at the marks or signs they left behind.",
        "cn_def": "順著痕跡尋找、追蹤蹤跡"
      }
    ]
  },
  "traces of": {
    "pos": "phr.",
    "en_def": "marks, objects, or other indications of the existence of something.",
    "cn_def": "...的痕跡",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "marks, objects, or other indications of the existence of something.",
        "cn_def": "...的痕跡"
      }
    ]
  },
  "track": {
    "pos": "v.",
    "en_def": "To follow the movements or progress of someone or something, especially by using electronics or signs.",
    "cn_def": "追蹤、記錄...的進展",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To follow the movements or progress of someone or something, especially by using electronics or signs.",
        "cn_def": "追蹤、記錄...的進展"
      },
      {
        "pos": "n.",
        "en_def": "A rough path or road made by people or animals, or a mark left by a wheel or foot.",
        "cn_def": "跑道、小徑、足跡"
      }
    ]
  },
  "keep track of": {
    "pos": "phr.",
    "en_def": "To continue to know about where someone or something is, or how something is changing.",
    "cn_def": "記錄、掌握...的動態",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To continue to know about where someone or something is, or how something is changing.",
        "cn_def": "記錄、掌握...的動態"
      }
    ]
  },
  "railway": {
    "pos": "n.",
    "en_def": "A system of tracks on which trains travel, or the organization that operates them.",
    "cn_def": "鐵路、鐵道",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A system of tracks on which trains travel, or the organization that operates them.",
        "cn_def": "鐵路、鐵道"
      }
    ]
  },
  "path": {
    "pos": "n.",
    "en_def": "A narrow track or way made for walking, or a line along which something moves.",
    "cn_def": "小徑、小路",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A narrow track or way made for walking, or a line along which something moves.",
        "cn_def": "小徑、小路"
      }
    ]
  },
  "idiom": {
    "pos": "n.",
    "en_def": "a group of words established by usage as having a meaning not deducible from those of the individual words.",
    "cn_def": "慣用語；成語",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a group of words established by usage as having a meaning not deducible from those of the individual words.",
        "cn_def": "慣用語；成語"
      }
    ]
  },
  "heel": {
    "pos": "n.",
    "en_def": "the back part of the human foot below the ankle.",
    "cn_def": "腳跟；鞋跟",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the back part of the human foot below the ankle.",
        "cn_def": "腳跟；鞋跟"
      }
    ]
  },
  "high heels": {
    "pos": "phr.",
    "en_def": "women's shoes in which the heels are raised high off the ground.",
    "cn_def": "高跟鞋",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "women's shoes in which the heels are raised high off the ground.",
        "cn_def": "高跟鞋"
      }
    ]
  },
  "fell head over heels for": {
    "pos": "phr.",
    "en_def": "To fall deeply and completely in love with someone.",
    "cn_def": "徹底愛上、為...神魂顛倒",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To fall deeply and completely in love with someone.",
        "cn_def": "徹底愛上、為...神魂顛倒"
      }
    ]
  },
  "fall head over heels for": {
    "pos": "phr.",
    "en_def": "To fall deeply and completely in love with someone.",
    "cn_def": "徹底愛上、為...神魂顛倒",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To fall deeply and completely in love with someone.",
        "cn_def": "徹底愛上、為...神魂顛倒"
      }
    ]
  },
  "nowadays": {
    "pos": "adv.",
    "en_def": "at the present time, in contrast with the past.",
    "cn_def": "現今；如今",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "at the present time, in contrast with the past.",
        "cn_def": "現今；如今"
      }
    ]
  },
  "recently": {
    "pos": "adv.",
    "en_def": "at a recent time; not long ago.",
    "cn_def": "最近",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "at a recent time; not long ago.",
        "cn_def": "最近"
      }
    ]
  },
  "lately": {
    "pos": "adv.",
    "en_def": "recently; not long ago.",
    "cn_def": "最近；近來",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "recently; not long ago.",
        "cn_def": "最近；近來"
      }
    ]
  },
  "these days": {
    "pos": "phr.",
    "en_def": "used to talk about the present time, in comparison with the past.",
    "cn_def": "如今；現在",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "used to talk about the present time, in comparison with the past.",
        "cn_def": "如今；現在"
      }
    ]
  },
  "the latest": {
    "pos": "phr.",
    "en_def": "The newest or most recent item, news, or product.",
    "cn_def": "最新的、最近的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The newest or most recent item, news, or product.",
        "cn_def": "最新的、最近的"
      }
    ]
  },
  "the last": {
    "pos": "phr.",
    "en_def": "The final one, or the one right before the present moment.",
    "cn_def": "最後的、上一個的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The final one, or the one right before the present moment.",
        "cn_def": "最後的、上一個的"
      }
    ]
  },
  "the latter": {
    "pos": "phr.",
    "en_def": "The second of two people or things that have just been mentioned.",
    "cn_def": "後者（兩者之中的第二個）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The second of two people or things that have just been mentioned.",
        "cn_def": "後者（兩者之中的第二個）"
      }
    ]
  },
  "enormous": {
    "pos": "adj.",
    "en_def": "very large in size, quantity, or extent.",
    "cn_def": "巨大的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very large in size, quantity, or extent.",
        "cn_def": "巨大的"
      }
    ]
  },
  "grand": {
    "pos": "adj.",
    "en_def": "magnificent and imposing in appearance, size, or style.",
    "cn_def": "宏偉的；盛大的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "magnificent and imposing in appearance, size, or style.",
        "cn_def": "宏偉的；盛大的"
      }
    ]
  },
  "tremendous": {
    "pos": "adj.",
    "en_def": "very great in amount, scale, or intensity.",
    "cn_def": "極大的；巨大的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very great in amount, scale, or intensity.",
        "cn_def": "極大的；巨大的"
      }
    ]
  },
  "massive": {
    "pos": "adj.",
    "en_def": "Very large, heavy, and solid; huge.",
    "cn_def": "巨大的、大量的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Very large, heavy, and solid; huge.",
        "cn_def": "巨大的、大量的"
      }
    ]
  },
  "magnificent": {
    "pos": "adj.",
    "en_def": "Extremely beautiful, impressive, or grand.",
    "cn_def": "壯麗的、宏偉的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Extremely beautiful, impressive, or grand.",
        "cn_def": "壯麗的、宏偉的"
      }
    ]
  },
  "fascinating": {
    "pos": "adj.",
    "en_def": "Extremely interesting and attractive.",
    "cn_def": "迷人的、引人入勝的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Extremely interesting and attractive.",
        "cn_def": "迷人的、引人入勝的"
      }
    ]
  },
  "remarkable": {
    "pos": "adj.",
    "en_def": "Unusual or surprising in a way that causes people to take notice.",
    "cn_def": "非凡的、值得注意的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Unusual or surprising in a way that causes people to take notice.",
        "cn_def": "非凡的、值得注意的"
      }
    ]
  },
  "exceptional": {
    "pos": "adj.",
    "en_def": "Much better than average; unusual and outstanding.",
    "cn_def": "傑出的、異常優秀的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Much better than average; unusual and outstanding.",
        "cn_def": "傑出的、異常優秀的"
      }
    ]
  },
  "distinguished": {
    "pos": "adj.",
    "en_def": "Successful, authoritative, and commanding great respect.",
    "cn_def": "卓越的、著名的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Successful, authoritative, and commanding great respect.",
        "cn_def": "卓越的、著名的"
      }
    ]
  },
  "celebrated": {
    "pos": "adj.",
    "en_def": "Famous and praised by many people.",
    "cn_def": "著名的、馳名的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Famous and praised by many people.",
        "cn_def": "著名的、馳名的"
      }
    ]
  },
  "noted": {
    "pos": "adj.",
    "en_def": "Well-known and respected for a particular quality or ability.",
    "cn_def": "有名的、著名的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Well-known and respected for a particular quality or ability.",
        "cn_def": "有名的、著名的"
      }
    ]
  },
  "renowned": {
    "pos": "adj.",
    "en_def": "Famous and respected for something specific.",
    "cn_def": "有名的、聲譽卓著的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Famous and respected for something specific.",
        "cn_def": "有名的、聲譽卓著的"
      }
    ]
  },
  "glamorous": {
    "pos": "adj.",
    "en_def": "Especially attractive, exciting, and connected with wealth or success.",
    "cn_def": "迷人的、光鮮亮麗的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Especially attractive, exciting, and connected with wealth or success.",
        "cn_def": "迷人的、光鮮亮麗的"
      }
    ]
  },
  "lavish": {
    "pos": "adj.",
    "en_def": "Large in amount, expensive, and impressive.",
    "cn_def": "奢華的、豪華的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Large in amount, expensive, and impressive.",
        "cn_def": "奢華的、豪華的"
      }
    ]
  },
  "lush": {
    "pos": "adj.",
    "en_def": "Growing thickly and strongly; green and healthy.",
    "cn_def": "茂盛的、草木聰蘢的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Growing thickly and strongly; green and healthy.",
        "cn_def": "茂盛的、草木聰蘢的"
      }
    ]
  },
  "significant": {
    "pos": "adj.",
    "en_def": "Large or important enough to have a noticeable effect.",
    "cn_def": "顯著的、重要的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Large or important enough to have a noticeable effect.",
        "cn_def": "顯著的、重要的"
      }
    ]
  },
  "significantly": {
    "pos": "adv.",
    "en_def": "In a way that is large or important enough to be noticed.",
    "cn_def": "顯著地、相當地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "In a way that is large or important enough to be noticed.",
        "cn_def": "顯著地、相當地"
      }
    ]
  },
  "considerable": {
    "pos": "adj.",
    "en_def": "Great in amount, size, or importance.",
    "cn_def": "相當大（多）的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Great in amount, size, or importance.",
        "cn_def": "相當大（多）的"
      }
    ]
  },
  "considerably": {
    "pos": "adv.",
    "en_def": "Much or a lot; to a large degree.",
    "cn_def": "相當地、非常",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "Much or a lot; to a large degree.",
        "cn_def": "相當地、非常"
      }
    ]
  },
  "rapid": {
    "pos": "adj.",
    "en_def": "Happening or moving very quickly.",
    "cn_def": "快速的、迅速的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Happening or moving very quickly.",
        "cn_def": "快速的、迅速的"
      }
    ]
  },
  "rapidly": {
    "pos": "adv.",
    "en_def": "Very quickly; at a fast rate.",
    "cn_def": "迅速地、很快地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "Very quickly; at a fast rate.",
        "cn_def": "迅速地、很快地"
      }
    ]
  },
  "moderate": {
    "pos": "adj.",
    "en_def": "Neither too much nor too little; average in amount or intensity.",
    "cn_def": "適度的、中等的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Neither too much nor too little; average in amount or intensity.",
        "cn_def": "適度的、中等的"
      }
    ]
  },
  "moderately": {
    "pos": "adv.",
    "en_def": "To a medium degree; not excessively.",
    "cn_def": "適度地、普通地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "To a medium degree; not excessively.",
        "cn_def": "適度地、普通地"
      }
    ]
  },
  "slight": {
    "pos": "adj.",
    "en_def": "Small in amount or degree; not noticeably big.",
    "cn_def": "輕微的、微小的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Small in amount or degree; not noticeably big.",
        "cn_def": "輕微的、微小的"
      }
    ]
  },
  "slightly": {
    "pos": "adv.",
    "en_def": "A little bit; to a small degree.",
    "cn_def": "稍微、輕微地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "A little bit; to a small degree.",
        "cn_def": "稍微、輕微地"
      }
    ]
  },
  "outer": {
    "pos": "adj.",
    "en_def": "outside; external.",
    "cn_def": "外面的；外部的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "outside; external.",
        "cn_def": "外面的；外部的"
      }
    ]
  },
  "inner": {
    "pos": "adj.",
    "en_def": "situated inside or further in; internal.",
    "cn_def": "內部的；裡面的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "situated inside or further in; internal.",
        "cn_def": "內部的；裡面的"
      }
    ]
  },
  "outer edge": {
    "pos": "phr.",
    "en_def": "the outside boundary or surface of something.",
    "cn_def": "外緣",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the outside boundary or surface of something.",
        "cn_def": "外緣"
      }
    ]
  },
  "outer surface": {
    "pos": "phr.",
    "en_def": "the external layer or outside part.",
    "cn_def": "外表面",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the external layer or outside part.",
        "cn_def": "外表面"
      }
    ]
  },
  "deceive": {
    "pos": "v.",
    "en_def": "to cause someone to believe something that is not true.",
    "cn_def": "欺騙",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause someone to believe something that is not true.",
        "cn_def": "欺騙"
      }
    ]
  },
  "deceptive": {
    "pos": "adj.",
    "en_def": "giving an appearance or impression different from the true one; misleading.",
    "cn_def": "欺騙性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "giving an appearance or impression different from the true one; misleading.",
        "cn_def": "欺騙性的"
      }
    ]
  },
  "deception": {
    "pos": "n.",
    "en_def": "the action of deceiving someone.",
    "cn_def": "欺騙；騙局",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of deceiving someone.",
        "cn_def": "欺騙；騙局"
      }
    ]
  },
  "trick": {
    "pos": "v. / n.",
    "en_def": "a cunning or skillful act or scheme intended to deceive or outwit someone.",
    "cn_def": "欺騙；詭計",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "a cunning or skillful act or scheme intended to deceive or outwit someone.",
        "cn_def": "欺騙；詭計"
      },
      {
        "pos": "n.",
        "en_def": "A clever action used to deceive someone, either as a joke or a scam.",
        "cn_def": "把戲、詭計、惡作劇"
      }
    ]
  },
  "tricked": {
    "pos": "v. / n.",
    "en_def": "a cunning or skillful act or scheme intended to deceive or outwit someone.",
    "cn_def": "欺騙；詭計",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "a cunning or skillful act or scheme intended to deceive or outwit someone.",
        "cn_def": "欺騙；詭計"
      }
    ]
  },
  "trick someone into ving": {
    "pos": "phr.",
    "en_def": "To make someone do something by deceiving or lying to them.",
    "cn_def": "誘騙某人做...、騙某人去做某事",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To make someone do something by deceiving or lying to them.",
        "cn_def": "誘騙某人做...、騙某人去做某事"
      }
    ]
  },
  "trick the old man into": {
    "pos": "phr.",
    "en_def": "To make someone do something by deceiving or lying to them.",
    "cn_def": "誘騙某人做...、騙某人去做某事",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To make someone do something by deceiving or lying to them.",
        "cn_def": "誘騙某人做...、騙某人去做某事"
      }
    ]
  },
  "play a trick on": {
    "pos": "phr.",
    "en_def": "To deceive or cheat someone as a joke or a prank.",
    "cn_def": "捉弄某人、對某人惡作劇",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To deceive or cheat someone as a joke or a prank.",
        "cn_def": "捉弄某人、對某人惡作劇"
      }
    ]
  },
  "naive": {
    "pos": "adj.",
    "en_def": "showing a lack of experience, wisdom, or judgment.",
    "cn_def": "天真的；幼稚的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing a lack of experience, wisdom, or judgment.",
        "cn_def": "天真的；幼稚的"
      }
    ]
  },
  "act so naively": {
    "pos": "phr.",
    "en_def": "to behave in a foolishly simple or gullible way.",
    "cn_def": "表現得天真",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to behave in a foolishly simple or gullible way.",
        "cn_def": "表現得天真"
      }
    ]
  },
  "act naively": {
    "pos": "phr.",
    "en_def": "to behave in a foolishly simple or gullible way.",
    "cn_def": "表現得天真",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to behave in a foolishly simple or gullible way.",
        "cn_def": "表現得天真"
      }
    ]
  },
  "aware": {
    "pos": "adj.",
    "en_def": "having knowledge or perception of a situation or fact.",
    "cn_def": "意識到的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having knowledge or perception of a situation or fact.",
        "cn_def": "意識到的"
      }
    ]
  },
  "be aware of": {
    "pos": "phr.",
    "en_def": "Knowing or realizing something; having knowledge or consciousness.",
    "cn_def": "意識到、注意到、知道",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Knowing or realizing something; having knowledge or consciousness.",
        "cn_def": "意識到、注意到、知道"
      }
    ]
  },
  "beware": {
    "pos": "v.",
    "en_def": "be cautious and alert to the dangers of.",
    "cn_def": "當心；提防",
    "combined": [
      {
        "pos": "v.",
        "en_def": "be cautious and alert to the dangers of.",
        "cn_def": "當心；提防"
      }
    ]
  },
  "beware of": {
    "pos": "phr.",
    "en_def": "to be careful of something.",
    "cn_def": "當心...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be careful of something.",
        "cn_def": "當心..."
      }
    ]
  },
  "awareness": {
    "pos": "n.",
    "en_def": "knowledge or perception of a situation or fact.",
    "cn_def": "意識；察覺",
    "combined": [
      {
        "pos": "n.",
        "en_def": "knowledge or perception of a situation or fact.",
        "cn_def": "意識；察覺"
      }
    ]
  },
  "raise the awareness of": {
    "pos": "phr.",
    "en_def": "To increase people's knowledge or understanding about an important issue.",
    "cn_def": "提高...的意識、喚起對...的關注",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To increase people's knowledge or understanding about an important issue.",
        "cn_def": "提高...的意識、喚起對...的關注"
      }
    ]
  },
  "raise the question": {
    "pos": "phr.",
    "en_def": "To mention a topic or doubt that needs to be discussed or considered.",
    "cn_def": "提出問題、引發疑問",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To mention a topic or doubt that needs to be discussed or considered.",
        "cn_def": "提出問題、引發疑問"
      }
    ]
  },
  "raise the issue": {
    "pos": "phr.",
    "en_def": "To bring up a problem or topic so that people can talk about it.",
    "cn_def": "提出議題、提出問題（討論）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To bring up a problem or topic so that people can talk about it.",
        "cn_def": "提出議題、提出問題（討論）"
      }
    ]
  },
  "raise funds": {
    "pos": "phr.",
    "en_def": "To collect money for a specific purpose, especially for a charity or project.",
    "cn_def": "籌措資金、募款",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To collect money for a specific purpose, especially for a charity or project.",
        "cn_def": "籌措資金、募款"
      }
    ]
  },
  "raise children": {
    "pos": "phr.",
    "en_def": "To take care of kids and help them grow up until they are adults.",
    "cn_def": "養育小孩、撫養子女",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To take care of kids and help them grow up until they are adults.",
        "cn_def": "養育小孩、撫養子女"
      }
    ]
  },
  "raise hands": {
    "pos": "phr.",
    "en_def": "To lift hands up in the air to ask a question or show agreement.",
    "cn_def": "舉手",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To lift hands up in the air to ask a question or show agreement.",
        "cn_def": "舉手"
      }
    ]
  },
  "get a raise": {
    "pos": "phr.",
    "en_def": "To receive an increase in the amount of money you earn from your job.",
    "cn_def": "加薪、獲得調薪",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To receive an increase in the amount of money you earn from your job.",
        "cn_def": "加薪、獲得調薪"
      }
    ]
  },
  "moreover": {
    "pos": "adv.",
    "en_def": "as a further matter; besides.",
    "cn_def": "此外；而且",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "as a further matter; besides.",
        "cn_def": "此外；而且"
      }
    ]
  },
  "furthermore": {
    "pos": "adv.",
    "en_def": "in addition; besides.",
    "cn_def": "此外；而且",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in addition; besides.",
        "cn_def": "此外；而且"
      }
    ]
  },
  "in addition": {
    "pos": "phr.",
    "en_def": "as an extra person, thing, or circumstance.",
    "cn_def": "此外",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "as an extra person, thing, or circumstance.",
        "cn_def": "此外"
      }
    ]
  },
  "additionally": {
    "pos": "adv.",
    "en_def": "as an extra factor or circumstance.",
    "cn_def": "此外",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "as an extra factor or circumstance.",
        "cn_def": "此外"
      }
    ]
  },
  "compromise": {
    "pos": "n.",
    "en_def": "an agreement reached by each side making concessions; to weaken or harm.",
    "cn_def": "妥協；損害",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an agreement reached by each side making concessions; to weaken or harm.",
        "cn_def": "妥協；損害"
      },
      {
        "pos": "v.",
        "en_def": "to accept standards that are lower than is desirable.",
        "cn_def": "損害；危及"
      }
    ]
  },
  "reach a compromise": {
    "pos": "phr.",
    "en_def": "to come to an agreement where both sides make concessions.",
    "cn_def": "達成妥協",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to come to an agreement where both sides make concessions.",
        "cn_def": "達成妥協"
      }
    ]
  },
  "reach a fair compromise": {
    "pos": "phr.",
    "en_def": "to come to an agreement where both sides make concessions.",
    "cn_def": "達成妥協",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to come to an agreement where both sides make concessions.",
        "cn_def": "達成妥協"
      }
    ]
  },
  "compromises": {
    "pos": "v.",
    "en_def": "to accept standards that are lower than is desirable.",
    "cn_def": "損害；危及",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to accept standards that are lower than is desirable.",
        "cn_def": "損害；危及"
      }
    ]
  },
  "give and take": {
    "pos": "phr.",
    "en_def": "mutual concessions and compromises.",
    "cn_def": "互相讓步；妥協",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "mutual concessions and compromises.",
        "cn_def": "互相讓步；妥協"
      }
    ]
  },
  "defeated": {
    "pos": "v.",
    "en_def": "win a victory over someone in a battle or other contest.",
    "cn_def": "擊敗",
    "combined": [
      {
        "pos": "v.",
        "en_def": "win a victory over someone in a battle or other contest.",
        "cn_def": "擊敗"
      },
      {
        "pos": "adj.",
        "en_def": "demoralized and overcome by adversity.",
        "cn_def": "覺得挫敗的；被擊敗的"
      }
    ]
  },
  "defeat": {
    "pos": "v.",
    "en_def": "win a victory over someone in a battle or other contest.",
    "cn_def": "擊敗",
    "combined": [
      {
        "pos": "v.",
        "en_def": "win a victory over someone in a battle or other contest.",
        "cn_def": "擊敗"
      },
      {
        "pos": "n.",
        "en_def": "an instance of defeating or being defeated.",
        "cn_def": "失敗；戰敗"
      }
    ]
  },
  "suffer a defeat": {
    "pos": "phr.",
    "en_def": "to lose in a battle, contest, or election.",
    "cn_def": "遭受失敗",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to lose in a battle, contest, or election.",
        "cn_def": "遭受失敗"
      }
    ]
  },
  "suffered a devastating defeat": {
    "pos": "phr.",
    "en_def": "to lose in a battle, contest, or election.",
    "cn_def": "遭受失敗",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to lose in a battle, contest, or election.",
        "cn_def": "遭受失敗"
      }
    ]
  },
  "tragic": {
    "pos": "adj.",
    "en_def": "causing or characterized by extreme distress or sorrow.",
    "cn_def": "悲慘的；悲劇的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing or characterized by extreme distress or sorrow.",
        "cn_def": "悲慘的；悲劇的"
      }
    ]
  },
  "tragically": {
    "pos": "adv.",
    "en_def": "in a way that involves or causes extreme distress or sorrow.",
    "cn_def": "悲慘地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that involves or causes extreme distress or sorrow.",
        "cn_def": "悲慘地"
      }
    ]
  },
  "tragedy": {
    "pos": "n.",
    "en_def": "an event causing great suffering, destruction, and distress.",
    "cn_def": "悲劇；災難",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an event causing great suffering, destruction, and distress.",
        "cn_def": "悲劇；災難"
      }
    ]
  },
  "comic": {
    "pos": "adj.",
    "en_def": "causing or meant to cause laughter.",
    "cn_def": "喜劇的；滑稽的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing or meant to cause laughter.",
        "cn_def": "喜劇的；滑稽的"
      }
    ]
  },
  "comedy": {
    "pos": "n.",
    "en_def": "A movie, play, or show that is funny and makes people laugh.",
    "cn_def": "喜劇、喜劇片",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A movie, play, or show that is funny and makes people laugh.",
        "cn_def": "喜劇、喜劇片"
      }
    ]
  },
  "comedian": {
    "pos": "n.",
    "en_def": "A person whose job is to entertain people by making them laugh.",
    "cn_def": "喜劇演員、脫口秀演員",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A person whose job is to entertain people by making them laugh.",
        "cn_def": "喜劇演員、脫口秀演員"
      }
    ]
  },
  "myth": {
    "pos": "n.",
    "en_def": "a traditional story concerning the early history of a people or explaining some natural or social phenomenon.",
    "cn_def": "神話；迷思",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a traditional story concerning the early history of a people or explaining some natural or social phenomenon.",
        "cn_def": "神話；迷思"
      },
      {
        "pos": "n.",
        "en_def": "A commonly believed story or idea that is actually false.",
        "cn_def": "迷思、錯誤的看法、神話"
      }
    ]
  },
  "mythical": {
    "pos": "adj.",
    "en_def": "occurring in or characteristic of myths or folk tales.",
    "cn_def": "神話的；虛構的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "occurring in or characteristic of myths or folk tales.",
        "cn_def": "神話的；虛構的"
      }
    ]
  },
  "legend": {
    "pos": "n.",
    "en_def": "a traditional story sometimes popularly regarded as historical but unauthenticated.",
    "cn_def": "傳說；傳奇人物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a traditional story sometimes popularly regarded as historical but unauthenticated.",
        "cn_def": "傳說；傳奇人物"
      }
    ]
  },
  "popular myth": {
    "pos": "phr.",
    "en_def": "a widely held but false belief or idea.",
    "cn_def": "普遍的迷思",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a widely held but false belief or idea.",
        "cn_def": "普遍的迷思"
      }
    ]
  },
  "debunk a myth": {
    "pos": "phr.",
    "en_def": "To prove that a commonly believed story or idea is false.",
    "cn_def": "揭穿迷思、破除迷思",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To prove that a commonly believed story or idea is false.",
        "cn_def": "揭穿迷思、破除迷思"
      }
    ]
  },
  "validate the fact": {
    "pos": "phr.",
    "en_def": "To prove or confirm that a statement or piece of information is true.",
    "cn_def": "證實事實、確認事實",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To prove or confirm that a statement or piece of information is true.",
        "cn_def": "證實事實、確認事實"
      }
    ]
  },
  "mystery": {
    "pos": "n.",
    "en_def": "Something that is difficult or impossible to understand or explain.",
    "cn_def": "謎、神秘的事物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "Something that is difficult or impossible to understand or explain.",
        "cn_def": "謎、神秘的事物"
      }
    ]
  },
  "mysterious": {
    "pos": "adj.",
    "en_def": "Strange, unknown, or difficult to understand or explain.",
    "cn_def": "神秘的、難以理解的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Strange, unknown, or difficult to understand or explain.",
        "cn_def": "神秘的、難以理解的"
      }
    ]
  },
  "curiosity": {
    "pos": "n.",
    "en_def": "a strong desire to know or learn something.",
    "cn_def": "好奇心；奇特的事物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a strong desire to know or learn something.",
        "cn_def": "好奇心；奇特的事物"
      }
    ]
  },
  "out of curiosity": {
    "pos": "phr.",
    "en_def": "because of a desire to know or learn something.",
    "cn_def": "出於好奇",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "because of a desire to know or learn something.",
        "cn_def": "出於好奇"
      }
    ]
  },
  "curiosity killed the cat": {
    "pos": "phr.",
    "en_def": "being inquisitive about other people's affairs may get you into trouble.",
    "cn_def": "好奇心害死貓",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "being inquisitive about other people's affairs may get you into trouble.",
        "cn_def": "好奇心害死貓"
      }
    ]
  },
  "curious": {
    "pos": "adj.",
    "en_def": "eager to know or learn something.",
    "cn_def": "好奇的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "eager to know or learn something.",
        "cn_def": "好奇的"
      }
    ]
  },
  "be curious about": {
    "pos": "phr.",
    "en_def": "Wanting to know or learn more about something.",
    "cn_def": "對...感到好奇",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Wanting to know or learn more about something.",
        "cn_def": "對...感到好奇"
      }
    ]
  },
  "curious about": {
    "pos": "phr.",
    "en_def": "Wanting to know or learn more about something.",
    "cn_def": "對...感到好奇",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Wanting to know or learn more about something.",
        "cn_def": "對...感到好奇"
      }
    ]
  },
  "enthusiastic": {
    "pos": "adj.",
    "en_def": "Showing a lot of excitement and interest in something.",
    "cn_def": "熱情的、熱心的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Showing a lot of excitement and interest in something.",
        "cn_def": "熱情的、熱心的"
      }
    ]
  },
  "enthusiasm": {
    "pos": "n.",
    "en_def": "A strong feeling of excitement and interest in an activity.",
    "cn_def": "熱情、熱忱",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A strong feeling of excitement and interest in an activity.",
        "cn_def": "熱情、熱忱"
      }
    ]
  },
  "passion": {
    "pos": "n.",
    "en_def": "A very strong feeling of love, interest, or enthusiasm for an activity.",
    "cn_def": "熱愛、強烈的愛好",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A very strong feeling of love, interest, or enthusiasm for an activity.",
        "cn_def": "熱愛、強烈的愛好"
      }
    ]
  },
  "passionate": {
    "pos": "adj.",
    "en_def": "Having or showing strong feelings of enthusiasm or love for something.",
    "cn_def": "熱情的、熱愛的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Having or showing strong feelings of enthusiasm or love for something.",
        "cn_def": "熱情的、熱愛的"
      }
    ]
  },
  "companion": {
    "pos": "n.",
    "en_def": "a person or animal with whom one spends a lot of time or with whom one travels.",
    "cn_def": "同伴；伴侶",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or animal with whom one spends a lot of time or with whom one travels.",
        "cn_def": "同伴；伴侶"
      }
    ]
  },
  "traveling companion": {
    "pos": "phr.",
    "en_def": "someone you travel with.",
    "cn_def": "旅伴",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "someone you travel with.",
        "cn_def": "旅伴"
      }
    ]
  },
  "company": {
    "pos": "n.",
    "en_def": "The state of being with someone so they do not feel lonely.",
    "cn_def": "陪伴、作伴",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The state of being with someone so they do not feel lonely.",
        "cn_def": "陪伴、作伴"
      },
      {
        "pos": "n.",
        "en_def": "A business organization that makes money by selling goods or services.",
        "cn_def": "公司"
      }
    ]
  },
  "keep someone company": {
    "pos": "phr.",
    "en_def": "To spend time with someone so that they are not alone.",
    "cn_def": "陪伴某人",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To spend time with someone so that they are not alone.",
        "cn_def": "陪伴某人"
      }
    ]
  },
  "keep her company": {
    "pos": "phr.",
    "en_def": "To spend time with someone so that they are not alone.",
    "cn_def": "陪伴某人",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To spend time with someone so that they are not alone.",
        "cn_def": "陪伴某人"
      }
    ]
  },
  "accompany": {
    "pos": "v.",
    "en_def": "To go somewhere with someone as a companion or escort.",
    "cn_def": "陪同、陪伴",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To go somewhere with someone as a companion or escort.",
        "cn_def": "陪同、陪伴"
      }
    ]
  },
  "be accompanied by": {
    "pos": "phr.",
    "en_def": "To go together with someone or happen together with something else.",
    "cn_def": "由...陪同、伴隨著...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To go together with someone or happen together with something else.",
        "cn_def": "由...陪同、伴隨著..."
      }
    ]
  },
  "colleague": {
    "pos": "n.",
    "en_def": "a person with whom one works in a profession or business.",
    "cn_def": "同事",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person with whom one works in a profession or business.",
        "cn_def": "同事"
      }
    ]
  },
  "partner": {
    "pos": "n.",
    "en_def": "a person who takes part in an undertaking with another or others.",
    "cn_def": "夥伴；合夥人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who takes part in an undertaking with another or others.",
        "cn_def": "夥伴；合夥人"
      }
    ]
  },
  "manager": {
    "pos": "n.",
    "en_def": "A person who is in charge of a department, business, or team.",
    "cn_def": "經理、主管",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A person who is in charge of a department, business, or team.",
        "cn_def": "經理、主管"
      }
    ]
  },
  "manage": {
    "pos": "v.",
    "en_def": "To be in control of a business, team, organization, or time.",
    "cn_def": "管理、經營",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To be in control of a business, team, organization, or time.",
        "cn_def": "管理、經營"
      }
    ]
  },
  "managed to finish": {
    "pos": "phr.",
    "en_def": "To succeed in doing something difficult, especially after trying hard.",
    "cn_def": "設法做到...、成功做到...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To succeed in doing something difficult, especially after trying hard.",
        "cn_def": "設法做到...、成功做到..."
      }
    ]
  },
  "manage to v": {
    "pos": "phr.",
    "en_def": "To succeed in doing something difficult, especially after trying hard.",
    "cn_def": "設法做到...、成功做到...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To succeed in doing something difficult, especially after trying hard.",
        "cn_def": "設法做到...、成功做到..."
      }
    ]
  },
  "supervise": {
    "pos": "v.",
    "en_def": "To watch a person or activity to make sure everything is done correctly and safely.",
    "cn_def": "監督、指導",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To watch a person or activity to make sure everything is done correctly and safely.",
        "cn_def": "監督、指導"
      }
    ]
  },
  "supervisor": {
    "pos": "n.",
    "en_def": "A person who is in charge of a group of people or an area of work.",
    "cn_def": "主管、監工",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A person who is in charge of a group of people or an area of work.",
        "cn_def": "主管、監工"
      }
    ]
  },
  "monitor": {
    "pos": "v.",
    "en_def": "To check, watch, or test something regularly to see how it progresses.",
    "cn_def": "監測、監控",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To check, watch, or test something regularly to see how it progresses.",
        "cn_def": "監測、監控"
      },
      {
        "pos": "n.",
        "en_def": "A screen that shows information or images, or a device used for checking something.",
        "cn_def": "顯示器、螢幕"
      }
    ]
  },
  "employ": {
    "pos": "v.",
    "en_def": "To pay someone to work for your company or organization.",
    "cn_def": "雇用",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To pay someone to work for your company or organization.",
        "cn_def": "雇用"
      }
    ]
  },
  "employee": {
    "pos": "n.",
    "en_def": "A person who is paid to work for someone else or a company.",
    "cn_def": "員工、雇員",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A person who is paid to work for someone else or a company.",
        "cn_def": "員工、雇員"
      }
    ]
  },
  "employer": {
    "pos": "n.",
    "en_def": "A person or organization that pays people to work for them.",
    "cn_def": "雇主、老闆",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A person or organization that pays people to work for them.",
        "cn_def": "雇主、老闆"
      }
    ]
  },
  "employment": {
    "pos": "n.",
    "en_def": "The state of having a paid job, or the act of employing someone.",
    "cn_def": "就業、工作",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The state of having a paid job, or the act of employing someone.",
        "cn_def": "就業、工作"
      }
    ]
  },
  "employment rate": {
    "pos": "phr.",
    "en_def": "The percentage of the working-age population that currently has a paid job.",
    "cn_def": "就業率",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The percentage of the working-age population that currently has a paid job.",
        "cn_def": "就業率"
      }
    ]
  },
  "unemployment rate": {
    "pos": "phr.",
    "en_def": "The percentage of people in the workforce who do not have a job but are looking for one.",
    "cn_def": "失業率",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The percentage of people in the workforce who do not have a job but are looking for one.",
        "cn_def": "失業率"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
