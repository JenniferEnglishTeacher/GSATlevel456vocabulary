// Topic 88 Quiz Data: Creative Person 有創意的人
// Source word list: https://www.examword.com/group-topic/creative-person — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T88 - Creative Person 有創意的人",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的；創造性的",
    "en_def": "good at making new and interesting ideas or things",
    "sentence": "A: Why did the hotel chain hire a new advertising agency instead of keeping the old one that worked with them for ten years? B: The managers felt the old ads looked the same every year, and they wanted a more {{BLANK}} team that could think of fresh ideas to attract younger travelers.",
    "cn": "A：為什麼這家連鎖飯店要聘請新的廣告公司，而不繼續和合作了十年的舊公司合作？ B：經理們覺得舊的廣告每年看起來都一樣，他們想要一個更有【創意】的團隊，能想出新點子來吸引年輕旅客。"
  },
  {
    "word": "creativity",
    "pos": "n.",
    "cn_def": "創造力；創意",
    "en_def": "the ability to make new ideas or things",
    "sentence": "A: What did the trainer say about the long meetings we have every Monday morning in the main conference room? B: She said that sitting in the same room for three hours kills {{BLANK}}, so she suggested short walking meetings outside, where people feel relaxed and share new ideas more easily.",
    "cn": "A：訓練師對我們每週一早上在主會議室開的冗長會議有什麼看法？ B：她說在同一個房間坐三個小時會扼殺【創造力】，所以她建議改在戶外舉行簡短的步行會議，讓大家感到放鬆，也更容易分享新點子。"
  },
  {
    "word": "imaginative",
    "pos": "adj.",
    "cn_def": "富有想像力的",
    "en_def": "having or showing new and unusual ideas",
    "sentence": "A: How did the small bakery near the station become so popular on social media in only a few months? B: The owner came up with an {{BLANK}} idea to bake cakes that look like famous buildings, and customers love taking photos of them before they eat them.",
    "cn": "A：車站附近那家小麵包店怎麼在短短幾個月內就在社群媒體上爆紅？ B：老闆想出一個很有【想像力】的點子，把蛋糕做成知名建築的樣子，顧客很喜歡在吃之前先拍照。"
  },
  {
    "word": "innovative",
    "pos": "adj.",
    "cn_def": "創新的",
    "en_def": "using new methods or ideas",
    "sentence": "A: Why are so many investors interested in that young technology company from Taichung this year? B: It has developed an {{BLANK}} app that helps restaurants reduce food waste by predicting how many customers will come each day, and several large hotel groups have already signed contracts.",
    "cn": "A：為什麼今年有這麼多投資人對那家來自台中的年輕科技公司感興趣？ B：它開發了一款【創新的】應用程式，能預測每天會有多少顧客上門，幫助餐廳減少食物浪費，而且好幾家大型飯店集團已經簽約了。"
  },
  {
    "word": "original",
    "pos": "adj.",
    "cn_def": "原創的；新穎的",
    "en_def": "new and different from others",
    "sentence": "A: Did the marketing director like the slogans that the summer interns wrote for the new juice drink? B: She liked most of them, but she said one slogan was too similar to a competitor's, so she asked the interns to come up with something more {{BLANK}} by Friday.",
    "cn": "A：行銷總監喜歡暑期實習生為新果汁飲料寫的標語嗎？ B：她大部分都喜歡，但她說有一句標語和競爭對手的太像了，所以她要求實習生在星期五前想出更【有原創性】的內容。"
  },
  {
    "word": "inventive",
    "pos": "adj.",
    "cn_def": "有發明才能的；善於創新的",
    "en_def": "able to think of new and clever ways to do things",
    "sentence": "A: How did the warehouse staff solve the problem of boxes falling off the high shelves last month? B: One {{BLANK}} worker built a simple wooden barrier from leftover materials, and it worked so well that the manager decided to install the same design in all three warehouses.",
    "cn": "A：上個月倉庫員工怎麼解決箱子從高架子上掉下來的問題？ B：一位很【有發明才能】的員工用剩下的材料做了一個簡單的木製擋板，效果好到經理決定在三間倉庫都安裝同樣的設計。"
  },
  {
    "word": "visionary",
    "pos": "adj.",
    "cn_def": "有遠見的；有眼光的",
    "en_def": "able to imagine how the future could be",
    "sentence": "A: Why do so many employees still talk about the woman who started this company thirty years ago? B: She was a {{BLANK}} leader who believed people would shop online long before most companies did, and her plans helped us grow from a tiny office into an international business.",
    "cn": "A：為什麼還有那麼多員工在談論三十年前創辦這家公司的那位女士？ B：她是一位很有【遠見的】領導者，早在大多數公司之前就相信人們會在網路上購物，她的規劃幫助我們從一間小辦公室成長為國際企業。"
  },
  {
    "word": "artist",
    "pos": "n.",
    "cn_def": "藝術家；畫家",
    "en_def": "a person who paints, draws or makes other art",
    "sentence": "A: Who painted the colorful picture of the harbor that hangs on the wall behind the reception desk? B: A local {{BLANK}} from Keelung made it for us last year, and many guests ask the receptionist where they can buy her other paintings of the city.",
    "cn": "A：掛在接待櫃台後面牆上那幅色彩繽紛的港口畫是誰畫的？ B：是去年一位基隆在地的【藝術家】為我們畫的，很多客人都會問接待人員在哪裡可以買到她其他描繪這座城市的畫作。"
  },
  {
    "word": "designer",
    "pos": "n.",
    "cn_def": "設計師",
    "en_def": "a person whose job is to plan how things will look",
    "sentence": "A: Have you decided who will plan the new look of our restaurant before it opens again in March? B: Yes, we hired a young interior {{BLANK}} who has worked on several popular cafés downtown, and she will show us her drawings and color samples next Tuesday.",
    "cn": "A：你決定好由誰在三月重新開幕前規劃我們餐廳的新風格了嗎？ B：決定了，我們聘請了一位年輕的室內【設計師】，她曾經參與市中心好幾家熱門咖啡館的設計，下週二會給我們看她的草圖和色樣。"
  },
  {
    "word": "writer",
    "pos": "n.",
    "cn_def": "作家；撰稿人",
    "en_def": "a person who writes books, articles or other texts",
    "sentence": "A: Who is going to prepare the English text for our new company website and the product brochures? B: We found a freelance {{BLANK}} who used to work for a travel magazine, and she promised to send us the first draft of every page within two weeks.",
    "cn": "A：誰要負責準備我們新公司網站和產品手冊的英文內容？ B：我們找到一位以前在旅遊雜誌工作過的自由【撰稿人】，她答應在兩週內把每一頁的初稿寄給我們。"
  },
  {
    "word": "musician",
    "pos": "n.",
    "cn_def": "音樂家",
    "en_def": "a person who plays or writes music",
    "sentence": "A: Are we going to play recorded music at the company's year-end party at the hotel again this time? B: No, the planning team booked a {{BLANK}} who plays the piano and sings, so guests can enjoy live performances while they have dinner and wait for the awards.",
    "cn": "A：這次公司在飯店舉辦的尾牙，我們還是要播放錄好的音樂嗎？ B：不是，籌備小組請了一位會彈鋼琴又會唱歌的【音樂家】，讓賓客在吃晚餐和等待頒獎時能欣賞現場表演。"
  },
  {
    "word": "inventor",
    "pos": "n.",
    "cn_def": "發明家",
    "en_def": "a person who makes something new that did not exist before",
    "sentence": "A: Why is there a small museum on the first floor of the factory that visitors can walk through? B: It tells the story of the {{BLANK}} who designed our first electric fan in 1965, and it shows his early drawings, tools and the machines he built in his garage.",
    "cn": "A：為什麼工廠一樓有一間訪客可以參觀的小型博物館？ B：它講述了在1965年設計出我們第一台電風扇的那位【發明家】的故事，並展示了他早期的草圖、工具，以及他在車庫裡做出來的機器。"
  },
  {
    "word": "creator",
    "pos": "n.",
    "cn_def": "創作者；創造者",
    "en_def": "a person who makes something new",
    "sentence": "A: Why did the bank invite that young woman with the popular cooking videos to its financial planning event? B: She is the {{BLANK}} of a well-known online channel with over a million followers, and the bank hopes she can help explain saving money to younger customers.",
    "cn": "A：為什麼銀行邀請那位拍熱門烹飪影片的年輕女生參加理財規劃活動？ B：她是一個擁有超過一百萬追蹤者的知名網路頻道的【創作者】，銀行希望她能幫忙向年輕顧客解釋存錢的觀念。"
  },
  {
    "word": "talented",
    "pos": "adj.",
    "cn_def": "有才華的；有天分的",
    "en_def": "having a natural ability to do something well",
    "sentence": "A: Why did the sales department decide to send Kevin to the international trade fair in Singapore next month? B: He is a very {{BLANK}} speaker who can explain our products clearly in three languages, and customers always remember him after his short presentations at the booth.",
    "cn": "A：為什麼業務部決定下個月派Kevin去新加坡參加國際商展？ B：他是一位非常【有才華的】講者，能用三種語言清楚介紹我們的產品，而且顧客在攤位上聽完他簡短的介紹後總是對他印象深刻。"
  },
  {
    "word": "gifted",
    "pos": "adj.",
    "cn_def": "有天賦的；資優的",
    "en_def": "having a special natural ability",
    "sentence": "A: Is it true that the new accountant also plays the violin in a city orchestra on weekends? B: Yes, she is a {{BLANK}} violinist who started playing when she was four, and she will perform a short piece at the opening of our charity concert next month.",
    "cn": "A：新來的會計師週末也在市立管弦樂團拉小提琴，是真的嗎？ B：是的，她是一位很有【天賦的】小提琴手，四歲就開始拉琴，下個月她會在我們慈善音樂會的開場演奏一首短曲。"
  },
  {
    "word": "skilled",
    "pos": "adj.",
    "cn_def": "熟練的；有技能的",
    "en_def": "having the training and experience to do a job well",
    "sentence": "A: Why is the furniture factory offering such high salaries in its job advertisements this spring? B: It is very hard to find {{BLANK}} workers who can build wooden tables and chairs by hand, so the company must pay more to attract experienced people from other cities.",
    "cn": "A：為什麼這家家具工廠今年春天在徵人廣告上開出這麼高的薪水？ B：要找到能手工製作木桌和木椅的【熟練】工人非常困難，所以公司必須付更多薪水，才能吸引其他城市有經驗的人。"
  },
  {
    "word": "resourceful",
    "pos": "adj.",
    "cn_def": "足智多謀的；善於應變的",
    "en_def": "good at finding quick and clever ways to solve problems",
    "sentence": "A: How did the tour guide handle the problem when the bus broke down on the mountain road last weekend? B: She was very {{BLANK}}; she called a local taxi company, found a small café where everyone could wait, and still got the group to the hotel before dinner.",
    "cn": "A：上週末巴士在山路上拋錨時，導遊是怎麼處理的？ B：她非常【足智多謀】；她打電話給當地計程車行，找了一家小咖啡館讓大家等候，最後還是在晚餐前把團員送到飯店。"
  },
  {
    "word": "expressive",
    "pos": "adj.",
    "cn_def": "富有表現力的；表情豐富的",
    "en_def": "showing feelings or ideas clearly",
    "sentence": "A: Why did the director choose that actor for our new television commercial instead of a more famous star? B: He has a very {{BLANK}} face, so he can show surprise, joy and worry without saying a word, which is perfect for a short ad with no dialogue.",
    "cn": "A：為什麼導演選那位演員拍我們新的電視廣告，而不是找更有名的明星？ B：他的臉部表情非常【豐富】，不用說一句話就能表現出驚訝、喜悅和擔憂，非常適合沒有對白的短廣告。"
  },
  {
    "word": "inspired",
    "pos": "adj.",
    "cn_def": "受到啟發的；有靈感的",
    "en_def": "filled with new ideas and a strong wish to do something",
    "sentence": "A: What made the chef add so many new Thai dishes to the restaurant's menu this autumn? B: She felt {{BLANK}} after spending two weeks at a cooking school in Bangkok, and she wanted to share the fresh flavors she discovered at the night markets with her customers.",
    "cn": "A：是什麼讓主廚今年秋天在餐廳菜單上加了這麼多新的泰式料理？ B：她在曼谷的烹飪學校待了兩週後深受【啟發】，想把她在夜市發現的新鮮風味分享給顧客。"
  },
  {
    "word": "inspiration",
    "pos": "n.",
    "cn_def": "靈感；鼓舞",
    "en_def": "something that gives you new ideas",
    "sentence": "A: Where did the designer get the idea for the blue and white pattern on our new coffee cups? B: She said the old tiles in her grandmother's kitchen in Tainan were her main {{BLANK}}, and she wanted the cups to feel warm and familiar to local customers.",
    "cn": "A：設計師是從哪裡得到我們新咖啡杯上藍白圖案的點子？ B：她說她外婆在台南廚房裡的舊磁磚是她主要的【靈感來源】，她希望這些杯子讓在地顧客感到溫暖又熟悉。"
  },
  {
    "word": "brainstorm",
    "pos": "v.",
    "cn_def": "腦力激盪；集思廣益",
    "en_def": "to share many ideas quickly in a group",
    "sentence": "A: How are we going to choose a name for the new snack product before the launch in December? B: The manager wants the whole team to {{BLANK}} together on Thursday afternoon, and everyone should write down at least five ideas before we vote on the best one.",
    "cn": "A：在十二月上市前，我們要怎麼為新的零食產品取名字？ B：經理希望整個團隊星期四下午一起【腦力激盪】，每個人在投票選出最好的名字之前，至少要寫下五個點子。"
  },
  {
    "word": "imagine",
    "pos": "v.",
    "cn_def": "想像",
    "en_def": "to form a picture of something in your mind",
    "sentence": "A: Why did the architect bring virtual reality glasses to the meeting with the hotel owners yesterday? B: She wanted to help them {{BLANK}} what the new lobby will look like, because it is hard for most people to understand a building just from flat drawings on paper.",
    "cn": "A：為什麼建築師昨天和飯店業主開會時帶了虛擬實境眼鏡？ B：她想幫助他們【想像】新大廳會是什麼樣子，因為大多數人很難只靠紙上的平面圖就理解一棟建築。"
  },
  {
    "word": "create",
    "pos": "v.",
    "cn_def": "創造；建立",
    "en_def": "to make something new or cause something to exist",
    "sentence": "A: What is the main goal of the new training program that the human resources department started this month? B: It aims to {{BLANK}} a friendly working environment where new employees feel comfortable asking questions, so they can learn faster and stay with the company longer.",
    "cn": "A：人資部這個月開始的新訓練計畫，主要目標是什麼？ B：它的目的是【營造】一個友善的工作環境，讓新進員工能自在地發問，這樣他們能學得更快，也會在公司待得更久。"
  },
  {
    "word": "design",
    "pos": "v.",
    "cn_def": "設計",
    "en_def": "to plan and draw how something will look or work",
    "sentence": "A: Who is responsible for the new uniforms that the airline's flight attendants will start wearing next year? B: A famous fashion company was asked to {{BLANK}} them, and it chose light fabric and soft colors so the staff can stay comfortable on long international flights.",
    "cn": "A：航空公司空服員明年開始穿的新制服是由誰負責的？ B：一家知名時裝公司受邀【設計】制服，他們選用輕薄的布料和柔和的顏色，讓員工在長途國際航班上也能保持舒適。"
  },
  {
    "word": "compose",
    "pos": "v.",
    "cn_def": "作曲；創作；撰寫",
    "en_def": "to write music, a poem or a letter",
    "sentence": "A: Did the marketing team buy the background music for our new television commercial from an online library? B: No, we paid a young musician to {{BLANK}} a short, cheerful song just for us, so no other company can use the same music in their ads.",
    "cn": "A：行銷團隊是從線上音樂庫購買新電視廣告的背景音樂嗎？ B：不是，我們付錢請了一位年輕音樂家專門為我們【創作】一首輕快的短曲，這樣其他公司就不能在廣告中使用同樣的音樂。"
  },
  {
    "word": "craft",
    "pos": "v.",
    "cn_def": "精心製作；手工製作",
    "en_def": "to make something carefully and with skill",
    "sentence": "A: Why are the leather bags from that small shop in Taipei so much more expensive than the ones in department stores? B: The owner and her two assistants {{BLANK}} every bag by hand in their workshop, so each one takes about three days to make, and they use only the best leather from Italy.",
    "cn": "A：為什麼台北那家小店的皮包比百貨公司的貴那麼多？ B：老闆和她的兩位助理在工作室裡用手工【精心製作】每一個包包，所以每個大約要花三天才能完成，而且他們只用來自義大利的最好皮革。"
  },
  {
    "word": "experiment",
    "pos": "v.",
    "cn_def": "實驗；嘗試",
    "en_def": "to try new ways of doing something to see what happens",
    "sentence": "A: Why does the new coffee shop downstairs change its menu almost every week? B: The young owner likes to {{BLANK}} with different flavors, such as oolong tea lattes and honey cold brew, and she asks regular customers to give feedback before she adds a drink permanently.",
    "cn": "A：為什麼樓下新開的咖啡店幾乎每週都換菜單？ B：年輕的老闆喜歡【嘗試】不同的口味，例如烏龍茶拿鐵和蜂蜜冷萃，而且她在正式加入一款飲料之前，會請常客提供意見。"
  },
  {
    "word": "express",
    "pos": "v.",
    "cn_def": "表達；表示",
    "en_def": "to show a feeling or idea in words or actions",
    "sentence": "A: Why did the manager ask everyone to fill out an anonymous survey after the office moved to the new building? B: She wanted to give employees a safe way to {{BLANK}} their opinions about the new space, because some people feel nervous about complaining in front of their team.",
    "cn": "A：為什麼經理在辦公室搬到新大樓後，要求大家填寫一份匿名問卷？ B：她想讓員工有一個安全的方式來【表達】對新空間的意見，因為有些人不敢在團隊面前抱怨。"
  },
  {
    "word": "curious",
    "pos": "adj.",
    "cn_def": "好奇的",
    "en_def": "wanting to know or learn about something",
    "sentence": "A: Why did so many people stop at our booth at the technology fair even though we are a small company? B: They were {{BLANK}} about the robot arm that was making coffee in front of the booth, so they came closer to watch, and then our staff explained our products.",
    "cn": "A：我們只是一家小公司，為什麼在科技展上有那麼多人在我們的攤位停下來？ B：他們對攤位前那隻正在煮咖啡的機器手臂感到很【好奇】，所以走近來看，然後我們的員工就向他們介紹產品。"
  },
  {
    "word": "open-minded",
    "pos": "adj.",
    "cn_def": "思想開明的；心胸開闊的",
    "en_def": "willing to accept new and different ideas",
    "sentence": "A: What kind of person are you looking for to lead the new team that will work with partners in Japan and Vietnam? B: We need someone who is {{BLANK}} and willing to listen to different ideas, because people from each country have their own ways of doing business.",
    "cn": "A：你們在找什麼樣的人來帶領這個要和日本及越南夥伴合作的新團隊？ B：我們需要一個【思想開明】、願意聆聽不同想法的人，因為每個國家的人都有自己做生意的方式。"
  },
  {
    "word": "bold",
    "pos": "adj.",
    "cn_def": "大膽的；勇敢的",
    "en_def": "brave and willing to take risks",
    "sentence": "A: Why are people in the industry so surprised by the new advertising campaign from that small phone company? B: It made a very {{BLANK}} decision to compare its phones directly with the market leader's on huge billboards downtown, and the campaign has already doubled its online sales.",
    "cn": "A：為什麼業界對那家小手機公司的新廣告活動這麼驚訝？ B：它做了一個非常【大膽的】決定，在市中心的巨型看板上直接把自家手機和市場龍頭的手機做比較，而這個活動已經讓它的網路銷售翻倍了。"
  },
  {
    "word": "playful",
    "pos": "adj.",
    "cn_def": "愛玩的；俏皮的；活潑的",
    "en_def": "full of fun; not serious",
    "sentence": "A: Why does the new children's clothing brand use cartoon animals in all of its shop windows and online ads? B: The company wants a {{BLANK}} image that makes parents smile and children want to come inside, so even the price tags have small drawings of rabbits and bears.",
    "cn": "A：為什麼新的童裝品牌在所有櫥窗和網路廣告中都使用卡通動物？ B：公司想要一個【活潑有趣的】形象，讓家長會心一笑、孩子想走進店裡，所以連價格標籤上都畫有小兔子和小熊。"
  },
  {
    "word": "unique",
    "pos": "adj.",
    "cn_def": "獨特的；獨一無二的",
    "en_def": "being the only one of its kind",
    "sentence": "A: Why do so many tourists visit that small hotel in the mountains even though it is far from the train station? B: Every room has a {{BLANK}} theme based on a local legend, and guests enjoy staying in a different room each time they come back with their friends.",
    "cn": "A：那家山上的小旅館離火車站很遠，為什麼還有那麼多觀光客去住？ B：每個房間都有一個以當地傳說為基礎的【獨特】主題，客人很喜歡每次和朋友回來時都住不同的房間。"
  },
  {
    "word": "distinctive",
    "pos": "adj.",
    "cn_def": "有特色的；與眾不同的",
    "en_def": "easy to notice because it is different from others",
    "sentence": "A: How can customers recognize our company's delivery trucks so easily, even from far away on the highway? B: All of the trucks are painted a {{BLANK}} bright orange with a large green leaf on the side, so people notice them immediately, and it works like free advertising.",
    "cn": "A：為什麼顧客即使在高速公路上離很遠，也能輕易認出我們公司的送貨卡車？ B：所有卡車都漆成【很有特色的】亮橘色，側面還有一片大大的綠葉，所以大家馬上就會注意到，這就像免費廣告一樣。"
  },
  {
    "word": "creatively",
    "pos": "adv.",
    "cn_def": "有創意地",
    "en_def": "in a way that uses new and original ideas",
    "sentence": "A: Our department's budget for the year-end party was cut in half, so how are we going to make it fun this time? B: We'll have to think {{BLANK}}, for example, by holding the party in the office garden, asking colleagues to bring homemade food, and organizing simple games instead of hiring performers.",
    "cn": "A：我們部門的尾牙預算被砍了一半，這次要怎麼辦得好玩？ B：我們得【發揮創意】思考，例如在辦公室花園辦派對、請同事帶自製料理，以及安排簡單的遊戲，而不是請表演者。"
  }
];

const MCQS = [
  {
    "q": "Our team needs fresh ideas for the new ad campaign. Please share any _____ suggestions at Friday's meeting, even if they seem unusual.",
    "options": [
      "creative",
      "curious",
      "skilled",
      "talented"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The company lets staff spend one afternoon a week on personal projects. Managers believe this freedom encourages _____ and new product ideas.",
    "options": [
      "writer",
      "inventor",
      "musician",
      "creativity"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The children's museum hired an artist whose _____ designs turn plain rooms into jungles and castles. Families love visiting on weekends.",
    "options": [
      "curious",
      "open-minded",
      "imaginative",
      "resourceful"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The start-up won an award for its _____ recycling machine. The machine turns used plastic bottles into building materials in minutes.",
    "options": [
      "curious",
      "innovative",
      "talented",
      "open-minded"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The judges rejected the logo because it looked too similar to another brand. They asked the designer to submit a more _____ version.",
    "options": [
      "skilled",
      "curious",
      "original",
      "talented"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Facing a shortage of parts, the _____ mechanic built a new tool from old bicycle pieces. The repair was finished on time.",
    "options": [
      "unique",
      "inventive",
      "distinctive",
      "expressive"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The hotel lobby displays paintings by a local _____. Guests can buy prints of her work at the gift shop near the entrance.",
    "options": [
      "inventor",
      "writer",
      "musician",
      "artist"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The fashion company hired a new _____ to plan its spring collection. She will present her sketches of dresses and jackets next week.",
    "options": [
      "designer",
      "musician",
      "inventor",
      "writer"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The travel magazine is looking for a freelance _____. The person must produce two articles a month about hotels and restaurants in Asia.",
    "options": [
      "inventor",
      "musician",
      "designer",
      "writer"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "A _____ will play the guitar and sing at the restaurant every Friday night. Customers can request their favorite songs during dinner.",
    "options": [
      "writer",
      "designer",
      "musician",
      "inventor"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The _____ of the folding bicycle received a patent last year. Now several large companies want to buy the rights to his idea.",
    "options": [
      "inventor",
      "musician",
      "artist",
      "writer"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The popular phone game was made by one person working at home. The game's _____ now earns money from millions of players worldwide.",
    "options": [
      "musician",
      "creator",
      "artist",
      "inspiration"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The orchestra is searching for _____ young violinists. Applicants must play two pieces of music in front of the judges in March.",
    "options": [
      "talented",
      "curious",
      "playful",
      "open-minded"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The factory needs _____ welders with at least five years of experience. The company provides training only for its newest machines.",
    "options": [
      "playful",
      "skilled",
      "curious",
      "bold"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "When the projector broke, the _____ trainer used a whiteboard and printed handouts instead. The workshop continued without any delay.",
    "options": [
      "distinctive",
      "unique",
      "expressive",
      "resourceful"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The architect said that ocean waves were the _____ for the curved roof of the new library. Many visitors take photos of it.",
    "options": [
      "inventor",
      "musician",
      "inspiration",
      "writer"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Before the product launch, the team will meet to _____ ideas for the slogan. Everyone should bring at least three suggestions.",
    "options": [
      "compose",
      "craft",
      "experiment",
      "brainstorm"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "It is hard to _____ how busy the airport will be during the holidays. Please arrive at least three hours before your flight.",
    "options": [
      "imagine",
      "compose",
      "craft",
      "brainstorm"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The new shopping mall is expected to _____ about two thousand jobs. Most of the positions will be in retail and restaurants.",
    "options": [
      "compose",
      "create",
      "express",
      "imagine"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The city hired an architect to _____ a new bridge over the river. Construction will begin as soon as the plans are approved.",
    "options": [
      "express",
      "compose",
      "design",
      "experiment"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The famous pianist agreed to _____ a short song for the company's anniversary. It will be played at the celebration next month.",
    "options": [
      "compose",
      "brainstorm",
      "experiment",
      "express"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "In the small workshop, three carpenters _____ wooden chairs entirely by hand. Each chair takes about a week to complete.",
    "options": [
      "imagine",
      "express",
      "craft",
      "brainstorm"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The chef likes to _____ with new ingredients every season. This spring, she added dishes made with local flowers and herbs.",
    "options": [
      "compose",
      "experiment",
      "express",
      "imagine"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Customers can _____ their opinions about our service by filling out the short online survey. We read every comment carefully.",
    "options": [
      "craft",
      "design",
      "compose",
      "express"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Many shoppers were _____ about the new robot at the store entrance. They stopped to watch it greet customers and hand out coupons.",
    "options": [
      "skilled",
      "distinctive",
      "curious",
      "original"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Our new manager is very _____. She listens carefully to every suggestion, even when it is different from her own opinion.",
    "options": [
      "distinctive",
      "unique",
      "original",
      "open-minded"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Lowering prices by fifty percent was a _____ move for such a small company. Fortunately, sales tripled within the first month.",
    "options": [
      "curious",
      "bold",
      "open-minded",
      "talented"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The children's bookstore has a _____ atmosphere with colorful walls and toy animals. Kids love spending hours there on weekends.",
    "options": [
      "playful",
      "skilled",
      "talented",
      "curious"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "Each guest room in the boutique hotel has a _____ design. No two rooms have the same furniture, colors or artwork.",
    "options": [
      "curious",
      "talented",
      "unique",
      "skilled"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Shoppers can easily find our snacks in the supermarket. The _____ red and yellow packaging stands out on crowded shelves.",
    "options": [
      "curious",
      "talented",
      "open-minded",
      "distinctive"
    ],
    "answer": 3,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "creative": {
    "pos": "adj.",
    "en_def": "good at making new and interesting ideas or things",
    "cn_def": "有創意的；創造性的"
  },
  "creativity": {
    "pos": "n.",
    "en_def": "the ability to make new ideas or things",
    "cn_def": "創造力；創意"
  },
  "imaginative": {
    "pos": "adj.",
    "en_def": "having or showing new and unusual ideas",
    "cn_def": "富有想像力的"
  },
  "innovative": {
    "pos": "adj.",
    "en_def": "using new methods or ideas",
    "cn_def": "創新的"
  },
  "original": {
    "pos": "adj.",
    "en_def": "new and different from others",
    "cn_def": "原創的；新穎的"
  },
  "inventive": {
    "pos": "adj.",
    "en_def": "able to think of new and clever ways to do things",
    "cn_def": "有發明才能的；善於創新的"
  },
  "visionary": {
    "pos": "adj.",
    "en_def": "able to imagine how the future could be",
    "cn_def": "有遠見的；有眼光的"
  },
  "artist": {
    "pos": "n.",
    "en_def": "a person who paints, draws or makes other art",
    "cn_def": "藝術家；畫家"
  },
  "designer": {
    "pos": "n.",
    "en_def": "a person whose job is to plan how things will look",
    "cn_def": "設計師"
  },
  "writer": {
    "pos": "n.",
    "en_def": "a person who writes books, articles or other texts",
    "cn_def": "作家；撰稿人"
  },
  "musician": {
    "pos": "n.",
    "en_def": "a person who plays or writes music",
    "cn_def": "音樂家"
  },
  "inventor": {
    "pos": "n.",
    "en_def": "a person who makes something new that did not exist before",
    "cn_def": "發明家"
  },
  "creator": {
    "pos": "n.",
    "en_def": "a person who makes something new",
    "cn_def": "創作者；創造者"
  },
  "talented": {
    "pos": "adj.",
    "en_def": "having a natural ability to do something well",
    "cn_def": "有才華的；有天分的"
  },
  "gifted": {
    "pos": "adj.",
    "en_def": "having a special natural ability",
    "cn_def": "有天賦的；資優的"
  },
  "skilled": {
    "pos": "adj.",
    "en_def": "having the training and experience to do a job well",
    "cn_def": "熟練的；有技能的"
  },
  "resourceful": {
    "pos": "adj.",
    "en_def": "good at finding quick and clever ways to solve problems",
    "cn_def": "足智多謀的；善於應變的"
  },
  "expressive": {
    "pos": "adj.",
    "en_def": "showing feelings or ideas clearly",
    "cn_def": "富有表現力的；表情豐富的"
  },
  "inspired": {
    "pos": "adj.",
    "en_def": "filled with new ideas and a strong wish to do something",
    "cn_def": "受到啟發的；有靈感的"
  },
  "inspiration": {
    "pos": "n.",
    "en_def": "something that gives you new ideas",
    "cn_def": "靈感；鼓舞"
  },
  "brainstorm": {
    "pos": "v.",
    "en_def": "to share many ideas quickly in a group",
    "cn_def": "腦力激盪；集思廣益"
  },
  "imagine": {
    "pos": "v.",
    "en_def": "to form a picture of something in your mind",
    "cn_def": "想像"
  },
  "create": {
    "pos": "v.",
    "en_def": "to make something new or cause something to exist",
    "cn_def": "創造；建立"
  },
  "design": {
    "pos": "v.",
    "en_def": "to plan and draw how something will look or work",
    "cn_def": "設計"
  },
  "compose": {
    "pos": "v.",
    "en_def": "to write music, a poem or a letter",
    "cn_def": "作曲；創作；撰寫"
  },
  "craft": {
    "pos": "v.",
    "en_def": "to make something carefully and with skill",
    "cn_def": "精心製作；手工製作"
  },
  "experiment": {
    "pos": "v.",
    "en_def": "to try new ways of doing something to see what happens",
    "cn_def": "實驗；嘗試"
  },
  "express": {
    "pos": "v.",
    "en_def": "to show a feeling or idea in words or actions",
    "cn_def": "表達；表示"
  },
  "curious": {
    "pos": "adj.",
    "en_def": "wanting to know or learn about something",
    "cn_def": "好奇的"
  },
  "open-minded": {
    "pos": "adj.",
    "en_def": "willing to accept new and different ideas",
    "cn_def": "思想開明的；心胸開闊的"
  },
  "bold": {
    "pos": "adj.",
    "en_def": "brave and willing to take risks",
    "cn_def": "大膽的；勇敢的"
  },
  "playful": {
    "pos": "adj.",
    "en_def": "full of fun; not serious",
    "cn_def": "愛玩的；俏皮的；活潑的"
  },
  "unique": {
    "pos": "adj.",
    "en_def": "being the only one of its kind",
    "cn_def": "獨特的；獨一無二的"
  },
  "distinctive": {
    "pos": "adj.",
    "en_def": "easy to notice because it is different from others",
    "cn_def": "有特色的；與眾不同的"
  },
  "creatively": {
    "pos": "adv.",
    "en_def": "in a way that uses new and original ideas",
    "cn_def": "有創意地"
  }
};

const EXTRA_GLOSSES = {};
