// Topic 394 Quiz Data: Tea 茶
// Source word list: https://www.examword.com/group-topic/tea — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T394 - Tea 茶",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "teapot",
    "pos": "n.",
    "cn_def": "茶壺",
    "en_def": "a container with a lid, handle and spout for making and serving tea",
    "sentence": "A: Could you help me set up the meeting room before our Japanese clients arrive at ten, because I still need to print the contracts? B: Sure, I'll put the large ceramic {{BLANK}} in the middle of the table, fill it with hot tea, and arrange the cups and napkins around it.",
    "cn": "A：我們的日本客戶十點抵達前，你能幫我布置會議室嗎？因為我還需要列印合約。 B：當然，我會把那個大的陶瓷【茶壺】放在桌子中央，裝滿熱茶，再把杯子和餐巾擺在周圍。"
  },
  {
    "word": "kettle",
    "pos": "n.",
    "cn_def": "水壺；燒水壺",
    "en_def": "a metal or plastic container used for boiling water",
    "sentence": "A: Why does everyone gather in the staff kitchen around three o'clock every afternoon, even when the office is really busy? B: Most of us take a short break then, so someone switches on the electric {{BLANK}} to boil water, and we chat for a few minutes while making coffee or tea.",
    "cn": "A：為什麼即使辦公室很忙，大家每天下午三點左右還是會聚在員工廚房？ B：我們大多數人那時會稍微休息一下，所以會有人打開電【水壺】燒開水，大家一邊泡咖啡或茶一邊聊幾分鐘。"
  },
  {
    "word": "teacup",
    "pos": "n.",
    "cn_def": "茶杯",
    "en_def": "a small cup with a handle, used for drinking tea",
    "sentence": "A: Did anything happen at the hotel restaurant this morning, because the manager looked quite upset during the breakfast service? B: A waiter accidentally dropped a tray, and an expensive porcelain {{BLANK}} from the hotel's special collection broke into pieces right in front of a group of guests.",
    "cn": "A：今天早上飯店餐廳發生什麼事了嗎？因為經理在早餐時段看起來很不高興。 B：一位服務生不小心把托盤掉了，飯店特別收藏中的一個昂貴瓷【茶杯】就在一群客人面前摔成碎片。"
  },
  {
    "word": "saucer",
    "pos": "n.",
    "cn_def": "茶碟；杯碟",
    "en_def": "a small round plate that you put a cup on",
    "sentence": "A: What should I check before the guests sit down at the hotel's afternoon reception, since this is my first time working at this kind of event? B: Make sure every cup is placed on a clean {{BLANK}} with a small spoon beside it, and that the sugar and napkins are within easy reach.",
    "cn": "A：飯店下午招待會的客人入座前，我該檢查什麼？因為這是我第一次在這種活動工作。 B：確認每個杯子都放在乾淨的【杯碟】上，旁邊附上一支小湯匙，而且糖和餐巾都要放在客人方便拿到的地方。"
  },
  {
    "word": "brew",
    "pos": "v.",
    "cn_def": "沖泡；煮（茶、咖啡）",
    "en_def": "to make tea or coffee by mixing it with hot water",
    "sentence": "A: The café downstairs is always crowded at lunchtime, so what makes their drinks so popular with office workers in this building? B: The owner trained in Taiwan for two years, and she carefully chooses the leaves and the water temperature before she starts to {{BLANK}} each pot for her customers.",
    "cn": "A：樓下的咖啡廳午餐時間總是很擁擠，為什麼他們的飲料這麼受這棟大樓上班族的歡迎？ B：老闆曾在台灣受訓兩年，她在為客人【沖泡】每一壺茶之前，都會仔細挑選茶葉和水溫。"
  },
  {
    "word": "steep",
    "pos": "v.",
    "cn_def": "浸泡",
    "en_def": "to leave something in hot liquid so that its flavor goes into the liquid",
    "sentence": "A: I followed the instructions on the box, but my tea tastes too strong and a little bitter, so what am I doing wrong? B: You probably left the leaves in the water too long, so next time just let them {{BLANK}} for about three minutes and then take them out.",
    "cn": "A：我照著盒子上的說明做，可是我的茶味道太濃又有點苦，我是哪裡做錯了？ B：你大概把茶葉留在水裡太久了，所以下次讓它們【浸泡】大約三分鐘就拿出來。"
  },
  {
    "word": "aroma",
    "pos": "n.",
    "cn_def": "香氣；芳香",
    "en_def": "a strong pleasant smell, especially from food or drink",
    "sentence": "A: Why did you decide to open your new tea shop near the train station instead of in the shopping mall downtown? B: Thousands of commuters walk past every morning, and when they notice the rich {{BLANK}} coming from our door, many of them stop to buy a drink on their way to work.",
    "cn": "A：你為什麼決定把新茶店開在火車站附近，而不是市中心的購物中心？ B：每天早上有好幾千名通勤族經過，當他們聞到從我們店門口飄出的濃郁【香氣】時，很多人會在上班途中停下來買杯飲料。"
  },
  {
    "word": "flavor",
    "pos": "n.",
    "cn_def": "味道；風味",
    "en_def": "the particular taste of a food or drink",
    "sentence": "A: Our sales of iced tea dropped last summer, so what do you think we should change for the new product line next year? B: The marketing team surveyed young customers, and they said they want a fruity new {{BLANK}}, like peach or mango, with less sugar and more natural ingredients.",
    "cn": "A：我們的冰茶銷量去年夏天下滑了，你認為明年的新產品線應該做什麼改變？ B：行銷團隊調查了年輕顧客，他們說希望有像水蜜桃或芒果這樣的水果新【口味】，糖少一點，天然成分多一點。"
  },
  {
    "word": "herbal",
    "pos": "adj.",
    "cn_def": "草本的；藥草的",
    "en_def": "made from plants that are used for medicine or taste",
    "sentence": "A: I've been drinking four cups of coffee a day because of the project deadline, and now I can't sleep well at night, so what should I do? B: Try switching to an {{BLANK}} drink like chamomile or mint in the evening, since it has no caffeine and helps many people relax.",
    "cn": "A：因為專案截止日期，我一天喝四杯咖啡，現在晚上都睡不好，我該怎麼辦？ B：試著在晚上改喝像洋甘菊或薄荷這類的【草本】飲品，因為它不含咖啡因，而且能幫助很多人放鬆。"
  },
  {
    "word": "green tea",
    "pos": "n.phr.",
    "cn_def": "綠茶",
    "en_def": "tea made from leaves that are dried but not fermented",
    "sentence": "A: The company cafeteria has started offering a lot of healthier drinks this month, so which one have you been ordering most often? B: I usually get a cup of Japanese {{BLANK}} after lunch, because it has a fresh grassy taste and gives me energy for the long afternoon meetings.",
    "cn": "A：公司餐廳這個月開始提供很多比較健康的飲品，你最常點哪一種？ B：我通常午餐後點一杯日本【綠茶】，因為它有清新的青草味，能讓我在漫長的下午會議中保持精神。"
  },
  {
    "word": "black tea",
    "pos": "n.phr.",
    "cn_def": "紅茶",
    "en_def": "tea made from leaves that are fully fermented, giving a dark color and strong taste",
    "sentence": "A: I'm ordering drinks for the training session tomorrow morning, so do you know what most of the British visitors usually prefer? B: Most of them like strong {{BLANK}} with a little milk, so please order two large pots of that along with some coffee for the others.",
    "cn": "A：我在訂明天早上培訓課程的飲料，你知道大部分英國訪客通常比較喜歡什麼嗎？ B：他們大多喜歡加一點牛奶的濃【紅茶】，所以請訂兩大壺，另外再為其他人訂一些咖啡。"
  },
  {
    "word": "oolong",
    "pos": "n.",
    "cn_def": "烏龍茶",
    "en_def": "a type of Chinese tea that is partly fermented",
    "sentence": "A: What kind of gift should I bring when I visit our supplier's head office in Germany next month, since I want something that represents Taiwan? B: A beautiful box of high-mountain {{BLANK}} from Alishan would be perfect, because many European business partners enjoy its smooth taste and flowery smell.",
    "cn": "A：下個月我去拜訪我們供應商在德國的總公司時，該帶什麼禮物？因為我想要能代表台灣的東西。 B：一盒精美的阿里山高山【烏龍茶】會很完美，因為許多歐洲商業夥伴都很喜歡它順口的口感和花香。"
  },
  {
    "word": "infusion",
    "pos": "n.",
    "cn_def": "浸泡飲品；花草茶",
    "en_def": "a drink made by leaving leaves, fruit or herbs in hot water",
    "sentence": "A: The new wellness menu at the hotel spa looks interesting, but what exactly are the drinks they serve after each massage? B: Guests receive a warm {{BLANK}} made from ginger, lemongrass and dried fruit, which the spa manager says helps the body relax and recover after treatment.",
    "cn": "A：飯店水療中心的新養生菜單看起來很有趣，不過他們在每次按摩後提供的飲料究竟是什麼？ B：客人會拿到一杯用薑、香茅和果乾泡成的溫熱【浸泡飲】，水療經理說它有助於身體在療程後放鬆和恢復。"
  },
  {
    "word": "caffeine",
    "pos": "n.",
    "cn_def": "咖啡因",
    "en_def": "a substance in coffee and tea that makes you feel more awake",
    "sentence": "A: Why did the doctor at the company health check tell you to stop drinking tea after dinner, even though you only have one cup? B: She said the {{BLANK}} in strong tea can stay in my body for several hours, which might explain why I keep waking up in the middle of the night.",
    "cn": "A：為什麼公司健康檢查的醫生叫你晚餐後不要再喝茶，即使你只喝一杯？ B：她說濃茶裡的【咖啡因】會在我體內停留好幾個小時，這可能就是我半夜一直醒來的原因。"
  },
  {
    "word": "refreshing",
    "pos": "adj.",
    "cn_def": "提神的；清爽的",
    "en_def": "making you feel less tired or hot",
    "sentence": "A: It was over thirty-five degrees during the outdoor trade fair yesterday, so how did the staff at our booth manage to stay cheerful all day? B: The organizers handed out bottles of cold lemon tea every hour, which was really {{BLANK}} and helped everyone keep talking to visitors with a smile.",
    "cn": "A：昨天戶外商展時氣溫超過三十五度，我們攤位的員工是怎麼整天保持好心情的？ B：主辦單位每小時發放一瓶冰檸檬茶，真的很【清爽提神】，讓大家能一直面帶微笑地和訪客交談。"
  },
  {
    "word": "soothing",
    "pos": "adj.",
    "cn_def": "舒緩的；使人平靜的",
    "en_def": "making you feel calm and relaxed",
    "sentence": "A: You seem much calmer than you did before the client presentation this morning, so what did you do during the lunch break? B: I went to the quiet tea house across the street, where they play {{BLANK}} music and serve chamomile tea, and I just sat there and read for half an hour.",
    "cn": "A：你看起來比今天早上客戶簡報前平靜多了，午休時你做了什麼？ B：我去了對街那家安靜的茶館，他們播放【舒緩的】音樂並供應洋甘菊茶，我就坐在那裡看了半小時的書。"
  },
  {
    "word": "bitter",
    "pos": "adj.",
    "cn_def": "苦的",
    "en_def": "having a strong, sharp taste that is not sweet",
    "sentence": "A: Several customers complained about the tea at our new branch this week, so did the area manager find out what the problem was? B: Yes, the new staff were using water that was too hot, so the tea tasted {{BLANK}}, and she has arranged extra training for them on Friday.",
    "cn": "A：這週有好幾位客人抱怨我們新分店的茶，區經理有查出問題出在哪裡嗎？ B：有，新員工用的水溫太高，所以茶喝起來很【苦】，她已經安排他們星期五接受額外訓練。"
  },
  {
    "word": "sweeten",
    "pos": "v.",
    "cn_def": "使變甜；加甜",
    "en_def": "to make food or drink taste sweeter",
    "sentence": "A: Our health-food company is launching a new line of bottled tea, so what will make it different from the drinks our competitors sell? B: Instead of using white sugar, we plan to {{BLANK}} every bottle with a small amount of natural honey, which our research shows is popular with health-conscious shoppers.",
    "cn": "A：我們的健康食品公司即將推出新的瓶裝茶系列，它和競爭對手的飲料會有什麼不同？ B：我們打算用少量天然蜂蜜來為每一瓶【增加甜味】，而不是用白糖，我們的研究顯示這很受注重健康的消費者歡迎。"
  },
  {
    "word": "honey",
    "pos": "n.",
    "cn_def": "蜂蜜",
    "en_def": "a sweet, sticky food made by bees",
    "sentence": "A: My throat has been sore since I gave that two-hour presentation yesterday, and I have another one this afternoon, so do you have any advice? B: Try drinking hot ginger tea with a spoonful of {{BLANK}} before you start, and keep a bottle of water on the table while you speak.",
    "cn": "A：自從昨天做了兩小時的簡報後我的喉嚨就一直很痛，今天下午還有另一場，你有什麼建議嗎？ B：開始前試著喝一杯加一匙【蜂蜜】的熱薑茶，演講時在桌上放一瓶水。"
  },
  {
    "word": "lemon",
    "pos": "n.",
    "cn_def": "檸檬",
    "en_def": "a yellow fruit with sour juice",
    "sentence": "A: The hotel guests on the conference floor keep asking for cold drinks this week, so what should we add to the self-service drink station? B: Let's provide a large jug of iced tea with fresh slices of {{BLANK}} and some mint leaves, because it looks attractive and is easy for guests to serve themselves.",
    "cn": "A：這週會議樓層的飯店客人一直要冷飲，我們應該在自助飲料區增加什麼？ B：我們提供一大壺加了新鮮【檸檬】片和薄荷葉的冰茶吧，因為它看起來很吸引人，客人也很容易自己取用。"
  },
  {
    "word": "milk",
    "pos": "n.",
    "cn_def": "牛奶",
    "en_def": "the white liquid produced by cows and other animals, used as a drink",
    "sentence": "A: The bubble tea shop near our office is giving away free drinks today, but what are they asking customers to do in return? B: They want people to try their new recipe made with fresh {{BLANK}} from a local farm and then fill out a short online survey about the taste.",
    "cn": "A：我們辦公室附近的珍珠奶茶店今天免費送飲料，但他們要求顧客做什麼作為回報？ B：他們希望大家試喝用在地農場新鮮【牛奶】做的新配方，然後填寫一份關於口味的簡短線上問卷。"
  },
  {
    "word": "sugar",
    "pos": "n.",
    "cn_def": "糖",
    "en_def": "a sweet substance used to make food and drinks taste sweet",
    "sentence": "A: Since the company started its employee health program, have you noticed any changes in the drinks people order from the café? B: Yes, many colleagues now ask for less {{BLANK}} in their milk tea, and some have even switched to plain tea or water during working hours.",
    "cn": "A：自從公司開始實施員工健康計畫後，你有注意到大家在咖啡廳點的飲料有什麼變化嗎？ B：有，很多同事現在點奶茶都要求少【糖】，有些人甚至在上班時間改喝無糖茶或白開水。"
  },
  {
    "word": "teabag",
    "pos": "n.",
    "cn_def": "茶包",
    "en_def": "a small paper bag with tea leaves inside, put in hot water to make tea",
    "sentence": "A: Our airline wants to improve its economy class service, so what small change have passengers suggested in the latest customer survey? B: Many travelers asked the cabin crew to offer a better {{BLANK}} with the hot water, since the current brand tastes weak and does not have much choice.",
    "cn": "A：我們的航空公司想改善經濟艙服務，乘客在最新的顧客調查中建議了什麼小改變？ B：很多旅客要求空服員隨熱水提供更好的【茶包】，因為目前的品牌味道淡，選擇也不多。"
  },
  {
    "word": "loose leaf",
    "pos": "n.phr.",
    "cn_def": "散茶；散裝茶葉",
    "en_def": "tea leaves sold without bags, which you put directly into a pot",
    "sentence": "A: The tea shop on the corner charges much more than the supermarket, so why do so many people still buy their tea there? B: The shop sells high-quality {{BLANK}} from small farms in Nantou, and many customers believe it has a much richer taste than the cheap tea bags.",
    "cn": "A：轉角那家茶行比超市貴很多，為什麼還是有那麼多人去那裡買茶？ B：這家店販售來自南投小農的高品質【散裝茶葉】，很多顧客認為它的味道比便宜的茶包濃郁得多。"
  },
  {
    "word": "strainer",
    "pos": "n.",
    "cn_def": "濾網；濾茶器",
    "en_def": "a kitchen tool with small holes used to separate liquid from solid pieces",
    "sentence": "A: I bought a box of loose tea leaves at the market, but when I made a cup this morning, there were small pieces floating everywhere, so what should I do? B: You just need a small metal {{BLANK}} to hold the leaves above your cup while you pour the hot water through it.",
    "cn": "A：我在市場買了一盒散茶，今天早上泡了一杯，結果到處都是漂浮的小碎葉，我該怎麼辦？ B：你只需要一個小的金屬【濾茶器】，在你倒熱水通過時把茶葉托在杯子上方。"
  },
  {
    "word": "ceremony",
    "pos": "n.",
    "cn_def": "儀式",
    "en_def": "a formal event performed in a traditional way",
    "sentence": "A: What activities have you planned for the overseas sales team when they visit our Kyoto office next month, apart from the business meetings? B: On the last afternoon, we're taking them to a traditional tea {{BLANK}}, where a master will show them how green tea is prepared and served with great care.",
    "cn": "A：下個月海外業務團隊來參觀我們京都辦公室時，除了商務會議之外，你為他們安排了什麼活動？ B：最後一天下午，我們會帶他們參加傳統茶道【儀式】，一位茶道大師會向他們展示如何用心準備並奉上綠茶。"
  },
  {
    "word": "tradition",
    "pos": "n.",
    "cn_def": "傳統",
    "en_def": "a custom or belief that has existed for a long time",
    "sentence": "A: Why does the general manager always invite the whole department for tea in the conference room on the first Monday of every month? B: It's a {{BLANK}} that the founder started thirty years ago, so that staff from different teams could relax together, share news and get to know each other better.",
    "cn": "A：為什麼總經理總是在每個月的第一個星期一邀請全部門到會議室喝茶？ B：這是創辦人三十年前開始的【傳統】，讓不同團隊的員工可以一起放鬆、分享消息，並更加認識彼此。"
  },
  {
    "word": "afternoon tea",
    "pos": "n.phr.",
    "cn_def": "下午茶",
    "en_def": "a light meal of tea, sandwiches and cakes eaten in the afternoon",
    "sentence": "A: We need to find a relaxing way to thank our top clients this year without holding another expensive formal dinner, so do you have any ideas? B: How about inviting them to an elegant {{BLANK}} at the Grand Hotel, with small sandwiches, scones and cakes served in the garden?",
    "cn": "A：今年我們需要找個輕鬆的方式來答謝頂級客戶，又不想再辦一場昂貴的正式晚宴，你有什麼點子嗎？ B：邀請他們到君悅飯店參加一場優雅的【下午茶】怎麼樣？在花園裡供應小三明治、司康和蛋糕。"
  },
  {
    "word": "steam",
    "pos": "n.",
    "cn_def": "蒸氣",
    "en_def": "the hot gas that comes from boiling water",
    "sentence": "A: Why did the fire alarm in the office kitchen go off this morning, since nobody was cooking anything at the time? B: The facilities manager said that the {{BLANK}} from the large hot-water machine rose straight into the smoke detector, so we're moving the machine to another corner tomorrow.",
    "cn": "A：今天早上辦公室廚房的火災警報器為什麼會響？當時根本沒人在煮東西。 B：設施經理說大型熱水機冒出的【蒸氣】直接升到了煙霧偵測器裡，所以我們明天要把機器移到另一個角落。"
  },
  {
    "word": "sip",
    "pos": "v.",
    "cn_def": "啜飲；小口喝",
    "en_def": "to drink something slowly, taking very small amounts",
    "sentence": "A: How did the negotiations with the new supplier go this afternoon, because I heard the meeting lasted almost four hours? B: It was tense at first, but their director kept smiling and would calmly {{BLANK}} her tea before answering each of our questions, so the discussion slowly became more relaxed.",
    "cn": "A：今天下午和新供應商的談判進行得怎麼樣？我聽說會議持續了將近四個小時。 B：一開始很緊張，但他們的主管一直面帶微笑，每次回答我們的問題前都會冷靜地【啜飲】一口茶，所以討論慢慢變得輕鬆了。"
  },
  {
    "word": "pour",
    "pos": "v.",
    "cn_def": "倒；灌",
    "en_def": "to make a liquid flow out of a container",
    "sentence": "A: What should I do first when the important guests from head office sit down in the meeting room this morning? B: Politely {{BLANK}} tea for the most senior visitor first, then serve the others, and remember to refill their cups whenever they are almost empty during the meeting.",
    "cn": "A：今天早上總公司的重要客人在會議室坐下後，我第一件事該做什麼？ B：先禮貌地為最資深的訪客【倒】茶，再為其他人服務，並記得在會議中只要他們的杯子快空了就要續杯。"
  },
  {
    "word": "blend",
    "pos": "n.",
    "cn_def": "混合物；綜合（茶）",
    "en_def": "a mixture of different types of something, such as tea",
    "sentence": "A: The new hotel in the city center gives a special tea to every guest who checks in, so where does it come from? B: The hotel worked with a local tea company to create its own {{BLANK}} of oolong, rose petals and dried orange peel, which guests can also buy in the gift shop.",
    "cn": "A：市中心那家新飯店會送每位入住的客人一款特別的茶，那是從哪裡來的？ B：飯店和一家在地茶葉公司合作，創造出自家烏龍茶、玫瑰花瓣和乾橘皮的【綜合茶】，客人也可以在禮品店買到。"
  },
  {
    "word": "fragrant",
    "pos": "adj.",
    "cn_def": "芳香的；香的",
    "en_def": "having a pleasant smell",
    "sentence": "A: The hotel lobby always smells wonderful when I arrive for meetings, so do you know what they use to create that atmosphere? B: The staff place bowls of dried jasmine flowers near the entrance and serve {{BLANK}} tea to guests who are waiting at the front desk.",
    "cn": "A：我每次到飯店開會時，大廳總是很好聞，你知道他們用什麼營造那種氛圍嗎？ B：員工會在入口附近擺放一碗碗乾燥茉莉花，並為在櫃檯等候的客人奉上【芳香的】茶。"
  },
  {
    "word": "warm",
    "pos": "adj.",
    "cn_def": "溫暖的；溫熱的",
    "en_def": "slightly hot, in a pleasant way",
    "sentence": "A: It's snowing heavily outside and the heating in the warehouse is broken again, so how can we help the delivery drivers this afternoon? B: Let's set up a table by the loading door with flasks of {{BLANK}} ginger tea, so the drivers can have a hot drink while we load their trucks.",
    "cn": "A：外面雪下得很大，倉庫的暖氣又壞了，我們今天下午可以怎麼幫助送貨司機？ B：我們在裝貨門旁擺張桌子，放幾壺【溫熱的】薑茶，讓司機在我們幫他們裝車時可以喝杯熱飲。"
  }
];

const MCQS = [
  {
    "q": "At the hotel breakfast buffet, guests can order tea at the table. The server brings a small _____ and a cup for each person.",
    "options": [
      "teapot",
      "kettle",
      "strainer",
      "saucer"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The staff kitchen now has a new electric _____ on the counter. Employees can boil water for instant noodles or tea in two minutes.",
    "options": [
      "teacup",
      "kettle",
      "saucer",
      "teabag"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The gift shop sells a fine porcelain _____ painted with blue flowers. Many tourists buy one as a souvenir of the museum.",
    "options": [
      "kettle",
      "strainer",
      "teacup",
      "teabag"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The café uses a machine to _____ fresh tea every hour. Customers always receive a drink that tastes rich and smooth.",
    "options": [
      "sip",
      "pour",
      "sweeten",
      "brew"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "For the best taste, let the leaves _____ in hot water for three minutes. Leaving them longer may make the tea bitter.",
    "options": [
      "pour",
      "steep",
      "sip",
      "blend"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Customers often stop outside the shop because of the pleasant _____ of roasted tea. It fills the whole street every morning.",
    "options": [
      "ceremony",
      "caffeine",
      "aroma",
      "tradition"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The company is launching a new _____ of iced tea this summer. It combines peach and jasmine for a light, fruity taste.",
    "options": [
      "steam",
      "ceremony",
      "saucer",
      "flavor"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The doctor recommended an _____ drink such as chamomile before bed. It contains no caffeine and may help you sleep better.",
    "options": [
      "herbal",
      "bitter",
      "warm",
      "fragrant"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Many health experts recommend drinking _____ every day. It is made from unfermented leaves and has a fresh, grassy taste.",
    "options": [
      "black tea",
      "afternoon tea",
      "green tea",
      "loose leaf"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "British visitors often ask for strong _____ with a little milk. The hotel kitchen keeps several brands ready for them.",
    "options": [
      "green tea",
      "afternoon tea",
      "oolong",
      "black tea"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Taiwan is famous for its high-mountain _____, which is partly fermented. Many foreign buyers order it directly from farms in Alishan.",
    "options": [
      "oolong",
      "caffeine",
      "saucer",
      "steam"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Tea contains less _____ than coffee, but it can still keep you awake. Avoid strong tea late in the evening.",
    "options": [
      "honey",
      "caffeine",
      "aroma",
      "flavor"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "After the long hike, the guide handed out cold lemon tea. Everyone agreed it was a very _____ drink on such a hot day.",
    "options": [
      "bitter",
      "soothing",
      "fragrant",
      "refreshing"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The spa plays _____ music in every treatment room. Guests also receive a cup of warm chamomile tea to help them relax.",
    "options": [
      "soothing",
      "bitter",
      "herbal",
      "refreshing"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "If the water is too hot, green tea can taste _____. Staff should use water at about eighty degrees for the best result.",
    "options": [
      "warm",
      "bitter",
      "fragrant",
      "refreshing"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Some customers prefer to _____ their tea with honey instead of sugar. The café now offers both choices at the counter.",
    "options": [
      "steep",
      "brew",
      "sweeten",
      "sip"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "For a sore throat, try hot ginger tea with a spoonful of _____. It is natural and gentle on your voice before a presentation.",
    "options": [
      "honey",
      "caffeine",
      "steam",
      "lemon"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The hotel serves iced tea with fresh slices of _____ by the pool. The sour taste makes the drink cool and refreshing.",
    "options": [
      "sugar",
      "lemon",
      "milk",
      "teabag"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Bubble tea shops are popular because they mix black tea with fresh _____. Many young customers also add chewy tapioca pearls.",
    "options": [
      "lemon",
      "steam",
      "milk",
      "honey"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Health experts suggest ordering milk tea with less _____. Too many sweet drinks can lead to weight gain and other problems.",
    "options": [
      "steam",
      "aroma",
      "caffeine",
      "sugar"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The airline offers a _____ and hot water to passengers on long flights. Travelers can choose green, black or herbal tea.",
    "options": [
      "teapot",
      "teabag",
      "kettle",
      "saucer"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Serious tea lovers often prefer _____ tea to tea bags. They believe the whole leaves give a richer and more natural taste.",
    "options": [
      "afternoon tea",
      "black tea",
      "loose leaf",
      "green tea"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "When you use loose leaves, place a _____ over the cup. It stops small pieces from falling into your drink.",
    "options": [
      "saucer",
      "kettle",
      "teacup",
      "strainer"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Visitors to Kyoto can join a traditional tea _____ in an old wooden house. A master shows each step of preparing the tea.",
    "options": [
      "ceremony",
      "aroma",
      "steam",
      "caffeine"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Drinking tea with the family after dinner is a long _____ in many Asian homes. It gives everyone time to talk and relax.",
    "options": [
      "steam",
      "caffeine",
      "tradition",
      "saucer"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The hotel serves _____ in the garden every day from three to five. Guests enjoy small sandwiches, scones and cakes with their drinks.",
    "options": [
      "green tea",
      "black tea",
      "loose leaf",
      "afternoon tea"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "At the meeting, the director paused to _____ her tea slowly. Then she calmly answered the questions from the supplier.",
    "options": [
      "sip",
      "brew",
      "steep",
      "sweeten"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "In many Asian offices, the youngest staff member will _____ tea for senior guests first. This shows respect during business meetings.",
    "options": [
      "steep",
      "pour",
      "blend",
      "sweeten"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The tea company created a special _____ of oolong and rose petals. It has become the best-selling gift item in its shops.",
    "options": [
      "ceremony",
      "aroma",
      "steam",
      "blend"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Jasmine tea is very _____ because the leaves are stored with fresh flowers. The pleasant smell fills the room when you pour it.",
    "options": [
      "fragrant",
      "bitter",
      "warm",
      "refreshing"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "teapot": {
    "pos": "n.",
    "en_def": "a container with a lid, handle and spout for making and serving tea",
    "cn_def": "茶壺"
  },
  "kettle": {
    "pos": "n.",
    "en_def": "a metal or plastic container used for boiling water",
    "cn_def": "水壺；燒水壺"
  },
  "teacup": {
    "pos": "n.",
    "en_def": "a small cup with a handle, used for drinking tea",
    "cn_def": "茶杯"
  },
  "saucer": {
    "pos": "n.",
    "en_def": "a small round plate that you put a cup on",
    "cn_def": "茶碟；杯碟"
  },
  "brew": {
    "pos": "v.",
    "en_def": "to make tea or coffee by mixing it with hot water",
    "cn_def": "沖泡；煮（茶、咖啡）"
  },
  "steep": {
    "pos": "v.",
    "en_def": "to leave something in hot liquid so that its flavor goes into the liquid",
    "cn_def": "浸泡"
  },
  "aroma": {
    "pos": "n.",
    "en_def": "a strong pleasant smell, especially from food or drink",
    "cn_def": "香氣；芳香"
  },
  "flavor": {
    "pos": "n.",
    "en_def": "the particular taste of a food or drink",
    "cn_def": "味道；風味"
  },
  "herbal": {
    "pos": "adj.",
    "en_def": "made from plants that are used for medicine or taste",
    "cn_def": "草本的；藥草的"
  },
  "green tea": {
    "pos": "n.phr.",
    "en_def": "tea made from leaves that are dried but not fermented",
    "cn_def": "綠茶"
  },
  "black tea": {
    "pos": "n.phr.",
    "en_def": "tea made from leaves that are fully fermented, giving a dark color and strong taste",
    "cn_def": "紅茶"
  },
  "oolong": {
    "pos": "n.",
    "en_def": "a type of Chinese tea that is partly fermented",
    "cn_def": "烏龍茶"
  },
  "infusion": {
    "pos": "n.",
    "en_def": "a drink made by leaving leaves, fruit or herbs in hot water",
    "cn_def": "浸泡飲品；花草茶"
  },
  "caffeine": {
    "pos": "n.",
    "en_def": "a substance in coffee and tea that makes you feel more awake",
    "cn_def": "咖啡因"
  },
  "refreshing": {
    "pos": "adj.",
    "en_def": "making you feel less tired or hot",
    "cn_def": "提神的；清爽的"
  },
  "soothing": {
    "pos": "adj.",
    "en_def": "making you feel calm and relaxed",
    "cn_def": "舒緩的；使人平靜的"
  },
  "bitter": {
    "pos": "adj.",
    "en_def": "having a strong, sharp taste that is not sweet",
    "cn_def": "苦的"
  },
  "sweeten": {
    "pos": "v.",
    "en_def": "to make food or drink taste sweeter",
    "cn_def": "使變甜；加甜"
  },
  "honey": {
    "pos": "n.",
    "en_def": "a sweet, sticky food made by bees",
    "cn_def": "蜂蜜"
  },
  "lemon": {
    "pos": "n.",
    "en_def": "a yellow fruit with sour juice",
    "cn_def": "檸檬"
  },
  "milk": {
    "pos": "n.",
    "en_def": "the white liquid produced by cows and other animals, used as a drink",
    "cn_def": "牛奶"
  },
  "sugar": {
    "pos": "n.",
    "en_def": "a sweet substance used to make food and drinks taste sweet",
    "cn_def": "糖"
  },
  "teabag": {
    "pos": "n.",
    "en_def": "a small paper bag with tea leaves inside, put in hot water to make tea",
    "cn_def": "茶包"
  },
  "loose leaf": {
    "pos": "n.phr.",
    "en_def": "tea leaves sold without bags, which you put directly into a pot",
    "cn_def": "散茶；散裝茶葉"
  },
  "strainer": {
    "pos": "n.",
    "en_def": "a kitchen tool with small holes used to separate liquid from solid pieces",
    "cn_def": "濾網；濾茶器"
  },
  "ceremony": {
    "pos": "n.",
    "en_def": "a formal event performed in a traditional way",
    "cn_def": "儀式"
  },
  "tradition": {
    "pos": "n.",
    "en_def": "a custom or belief that has existed for a long time",
    "cn_def": "傳統"
  },
  "afternoon tea": {
    "pos": "n.phr.",
    "en_def": "a light meal of tea, sandwiches and cakes eaten in the afternoon",
    "cn_def": "下午茶"
  },
  "steam": {
    "pos": "n.",
    "en_def": "the hot gas that comes from boiling water",
    "cn_def": "蒸氣"
  },
  "sip": {
    "pos": "v.",
    "en_def": "to drink something slowly, taking very small amounts",
    "cn_def": "啜飲；小口喝"
  },
  "pour": {
    "pos": "v.",
    "en_def": "to make a liquid flow out of a container",
    "cn_def": "倒；灌"
  },
  "blend": {
    "pos": "n.",
    "en_def": "a mixture of different types of something, such as tea",
    "cn_def": "混合物；綜合（茶）"
  },
  "fragrant": {
    "pos": "adj.",
    "en_def": "having a pleasant smell",
    "cn_def": "芳香的；香的"
  },
  "warm": {
    "pos": "adj.",
    "en_def": "slightly hot, in a pleasant way",
    "cn_def": "溫暖的；溫熱的"
  }
};

const EXTRA_GLOSSES = {};
