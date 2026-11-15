// Topic 93 Quiz Data: Culture 文化
// Source word list: https://www.examword.com/group-topic/culture — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T93 - Culture 文化",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "tradition",
    "pos": "n.",
    "cn_def": "傳統",
    "en_def": "a custom or belief that has existed for a long time",
    "sentence": "A: Why is the whole office going out for dinner together next Friday instead of having the usual year-end party at the hotel? B: It has become a {{BLANK}} in our company to eat a big meal together before the Lunar New Year holiday, and the boss always pays for everyone.",
    "cn": "A：為什麼下週五整個辦公室要一起出去吃晚餐，而不是像往常一樣在飯店辦尾牙？ B：在農曆新年假期前一起吃頓大餐已經成為我們公司的【傳統】，而且老闆總是請大家。"
  },
  {
    "word": "custom",
    "pos": "n.",
    "cn_def": "習俗；風俗",
    "en_def": "a usual way of doing something in a place or group",
    "sentence": "A: I'm flying to Tokyo next week to meet our new business partners for the first time, so is there anything I should know before the meeting? B: Yes, it's a local {{BLANK}} to exchange business cards with both hands and a small bow, so take plenty of cards and read each one carefully.",
    "cn": "A：我下週要飛去東京，第一次和我們的新商業夥伴見面，開會前有什麼我該知道的嗎？ B：有，用雙手交換名片並微微鞠躬是當地的【習俗】，所以多帶些名片，並仔細看每一張。"
  },
  {
    "word": "heritage",
    "pos": "n.",
    "cn_def": "遺產；傳統文化",
    "en_def": "the history, buildings and traditions of a place that are passed down",
    "sentence": "A: Why did the city council reject the plan to build a new shopping mall on the old street near the river last month? B: The buildings there are more than two hundred years old and are part of the city's cultural {{BLANK}}, so the council wants to protect them for future generations.",
    "cn": "A：為什麼市議會上個月否決了在河邊老街上興建新購物中心的計畫？ B：那裡的建築已有兩百多年歷史，是這座城市文化【遺產】的一部分，所以議會想為後代子孫保護它們。"
  },
  {
    "word": "identity",
    "pos": "n.",
    "cn_def": "身分；認同；特色",
    "en_def": "the qualities that make a person, group or brand different from others",
    "sentence": "A: Why did the coffee chain keep its old logo and shop design when it was bought by the large international company last year? B: The new owners understood that the brand's strong local {{BLANK}} was the main reason why loyal customers kept coming back, so they decided not to change it.",
    "cn": "A：去年那家咖啡連鎖店被大型國際公司收購時，為什麼還保留舊標誌和店面設計？ B：新老闆了解，這個品牌強烈的在地【特色】是忠實顧客不斷回流的主要原因，所以決定不改變它。"
  },
  {
    "word": "ethnic",
    "pos": "adj.",
    "cn_def": "種族的；民族的；異國風味的",
    "en_def": "connected with a group of people who share a culture, language or origin",
    "sentence": "A: What kind of restaurants can our visitors from the head office find near the hotel where they are staying this week? B: The area around the hotel has many small {{BLANK}} restaurants run by families from Vietnam, India and Thailand, so our guests can try a different kind of food every night.",
    "cn": "A：總公司來的訪客這週住的飯店附近，有哪些餐廳可以去？ B：飯店周圍有很多由越南、印度和泰國家庭經營的小型【異國風味】餐廳，所以我們的客人每晚都可以嘗試不同的料理。"
  },
  {
    "word": "diverse",
    "pos": "adj.",
    "cn_def": "多元的；各式各樣的",
    "en_def": "very different from each other; of many kinds",
    "sentence": "A: Why did the marketing team invite people from so many different age groups and countries to test the new mobile app last week? B: Our customers come from very {{BLANK}} backgrounds, so we wanted to make sure that the app is easy to use for everyone, not just for young people in Taipei.",
    "cn": "A：行銷團隊上週為什麼邀請這麼多不同年齡層和國家的人來測試新的手機應用程式？ B：我們的顧客來自非常【多元的】背景，所以我們想確保這個應用程式人人都容易使用，而不只是台北的年輕人。"
  },
  {
    "word": "multicultural",
    "pos": "adj.",
    "cn_def": "多元文化的",
    "en_def": "having people of many different cultures living together",
    "sentence": "A: Why do so many international companies choose to open their Asian head offices in Singapore rather than in other cities in the region? B: Singapore is a {{BLANK}} society where people speak English, Chinese, Malay and Tamil, so foreign staff often feel comfortable living and working there with their families.",
    "cn": "A：為什麼這麼多跨國公司選擇把亞洲總部設在新加坡，而不是這個地區的其他城市？ B：新加坡是一個【多元文化的】社會，人們說英語、華語、馬來語和坦米爾語，所以外籍員工和家人在那裡生活和工作常常感到很自在。"
  },
  {
    "word": "intercultural",
    "pos": "adj.",
    "cn_def": "跨文化的（不同文化之間的）",
    "en_def": "happening between people from different cultures",
    "sentence": "A: Why does the company ask every new manager to join a two-day training course before they start working with our overseas offices? B: The course teaches {{BLANK}} communication skills, such as how to give feedback politely to colleagues in Japan or Germany, because small misunderstandings can easily damage important business relationships.",
    "cn": "A：為什麼公司要求每位新任經理在開始和海外分公司合作前，參加為期兩天的訓練課程？ B：這門課教的是【跨文化】溝通技巧，例如如何禮貌地給日本或德國同事回饋意見，因為小誤會很容易破壞重要的商業關係。"
  },
  {
    "word": "cross-cultural",
    "pos": "adj.",
    "cn_def": "跨文化的（比較不同文化的）",
    "en_def": "comparing or involving two or more different cultures",
    "sentence": "A: What did the new sales director learn during her first year working with clients in the Middle East and South America? B: She said that {{BLANK}} differences in how people treat time and deadlines surprised her most, so she now plans extra days for every project in those regions.",
    "cn": "A：新任業務總監在中東和南美與客戶合作的第一年學到了什麼？ B：她說人們看待時間和截止期限的【跨文化】差異最讓她驚訝，所以她現在在那些地區的每個專案都會多預留幾天。"
  },
  {
    "word": "belief",
    "pos": "n.",
    "cn_def": "信念；信仰；看法",
    "en_def": "a strong feeling that something is true or right",
    "sentence": "A: Why does the hotel in Hong Kong not have a fourth floor, and why do the elevator buttons go straight from three to five? B: Many local guests hold a strong {{BLANK}} that the number four brings bad luck because it sounds like the word for death, so the owners decided to skip it.",
    "cn": "A：為什麼香港那家飯店沒有四樓，電梯按鈕直接從三跳到五？ B：許多當地客人有個強烈的【信念】，認為數字四會帶來厄運，因為它聽起來像「死」這個字，所以業主決定跳過它。"
  },
  {
    "word": "value",
    "pos": "n.",
    "cn_def": "價值觀；價值",
    "en_def": "an idea or quality that people think is important in life or work",
    "sentence": "A: Why did the company spend so much time choosing new staff for the customer service team this spring? B: The manager says that honesty is the most important {{BLANK}} in our company culture, so she only hires people who will tell customers the truth even when the news is bad.",
    "cn": "A：公司今年春天為什麼花這麼多時間挑選客服團隊的新員工？ B：經理說誠實是我們公司文化中最重要的【價值觀】，所以她只雇用即使消息不好也會對顧客說實話的人。"
  },
  {
    "word": "norm",
    "pos": "n.",
    "cn_def": "常態；規範",
    "en_def": "what is usual or expected in a group or society",
    "sentence": "A: Is it okay for me to leave the office at five o'clock sharp, or will my new manager think I am lazy? B: In this company it is the {{BLANK}} for most people to stay until about six, but nobody will complain if you finish all your work and go home on time.",
    "cn": "A：我五點整準時下班可以嗎？還是新主管會覺得我很懶？ B：在這家公司，大部分人待到六點左右是【常態】，但如果你完成所有工作並準時回家，沒人會抱怨。"
  },
  {
    "word": "ritual",
    "pos": "n.",
    "cn_def": "儀式；例行習慣",
    "en_def": "a set of actions that is always done in the same way",
    "sentence": "A: Why does the new team leader always buy coffee for everyone before the Monday morning meeting starts? B: It is a little {{BLANK}} that she started at her old company, because she believes that sharing a hot drink helps people relax and talk more openly about problems.",
    "cn": "A：為什麼新的組長總是在週一早上開會前請大家喝咖啡？ B：這是她在之前的公司開始的一個小【儀式】，因為她相信一起喝杯熱飲能幫助大家放鬆，更坦率地談論問題。"
  },
  {
    "word": "ceremony",
    "pos": "n.",
    "cn_def": "典禮；儀式",
    "en_def": "a formal public event held for a special occasion",
    "sentence": "A: What time should the guests arrive at the new factory on Friday, and will the mayor be there too? B: The opening {{BLANK}} begins at ten in the morning, when the mayor and our president will cut the red ribbon together, and then everyone is invited to a short tour and lunch.",
    "cn": "A：客人週五應該幾點到新工廠？市長也會出席嗎？ B：開幕【典禮】早上十點開始，市長和我們的總裁會一起剪綵，之後邀請大家參加簡短的參觀和午餐。"
  },
  {
    "word": "festival",
    "pos": "n.",
    "cn_def": "節慶；節日；藝術節",
    "en_def": "a special time or event when people celebrate something",
    "sentence": "A: Why are all the hotels in Tainan fully booked for the second weekend of February this year? B: The city is holding its famous lantern {{BLANK}} that weekend, and thousands of visitors from all over Taiwan and Japan are coming to see the lights and enjoy the street food.",
    "cn": "A：為什麼今年二月第二個週末台南的飯店全都客滿了？ B：那個週末這座城市要舉辦著名的燈籠【節】，成千上萬來自全台灣和日本的遊客會來看燈並享受街頭小吃。"
  },
  {
    "word": "folklore",
    "pos": "n.",
    "cn_def": "民間傳說；民俗",
    "en_def": "old stories and beliefs of a group of people",
    "sentence": "A: Why did the tourism office hire a local storyteller to lead the evening walking tours in the old town this summer? B: Visitors love hearing the {{BLANK}} of the area, such as old tales about ghosts in the temple and the fisherman who married a sea goddess, so the tours sell out every night.",
    "cn": "A：觀光局今年夏天為什麼聘請一位當地說故事的人帶領老城區的夜間徒步導覽？ B：遊客很喜歡聽這個地區的【民間傳說】，例如寺廟裡的鬼故事和娶了海神的漁夫，所以導覽每晚都賣光。"
  },
  {
    "word": "myth",
    "pos": "n.",
    "cn_def": "迷思；神話",
    "en_def": "an idea that many people believe but that is not true; an old story",
    "sentence": "A: Do you really think working from home makes employees less productive, as some managers say? B: That is a {{BLANK}}, actually, because our study last year showed that people who worked from home finished more tasks, took fewer sick days and were happier with their jobs.",
    "cn": "A：你真的認為在家工作會讓員工生產力降低嗎？就像有些經理說的那樣？ B：事實上那是個【迷思】，因為我們去年的研究顯示，在家工作的人完成更多任務、請更少病假，而且對工作更滿意。"
  },
  {
    "word": "art",
    "pos": "n.",
    "cn_def": "藝術；美術",
    "en_def": "paintings, drawings and other beautiful things that people create",
    "sentence": "A: Why did the bank decide to hang so many paintings in the main hall of its new head office downtown? B: The chairman loves modern {{BLANK}} and believes that beautiful pictures make both customers and staff feel calm, so he bought works from young painters in Taipei.",
    "cn": "A：銀行為什麼決定在市中心新總部的大廳掛這麼多畫？ B：董事長很喜愛現代【藝術】，相信美麗的畫作能讓顧客和員工都感到平靜，所以他向台北的年輕畫家買了作品。"
  },
  {
    "word": "music",
    "pos": "n.",
    "cn_def": "音樂",
    "en_def": "sounds arranged in a pleasant way by singing or playing instruments",
    "sentence": "A: What can we do to make the waiting room at the clinic feel less stressful for patients in the afternoon? B: We could play some soft {{BLANK}} in the background and add a few green plants, because research shows that calm sounds help people feel relaxed while they wait for their appointments.",
    "cn": "A：我們可以做什麼讓診所的候診室下午時對病人來說比較不緊張？ B：我們可以播放一些輕柔的背景【音樂】並加幾盆綠色植物，因為研究顯示平靜的聲音能幫助人們在等候看診時感到放鬆。"
  },
  {
    "word": "dance",
    "pos": "n.",
    "cn_def": "舞蹈；舞",
    "en_def": "a set of movements done to music",
    "sentence": "A: What kind of entertainment are we planning for the guests at the end of the international sales conference? B: A group of young performers will show a traditional Indigenous {{BLANK}} from eastern Taiwan, and afterward they will invite our guests onto the stage to learn a few simple steps.",
    "cn": "A：國際業務會議結束時，我們打算為客人安排什麼樣的娛樂表演？ B：一群年輕表演者會表演一支來自台灣東部的傳統原住民【舞蹈】，之後他們會邀請客人上台學幾個簡單的舞步。"
  },
  {
    "word": "literature",
    "pos": "n.",
    "cn_def": "文學",
    "en_def": "books, poems and plays, especially those thought to be of high quality",
    "sentence": "A: Why did the publishing company hire a new editor who speaks both Korean and Chinese last month? B: We plan to translate more modern Korean {{BLANK}}, especially popular novels and short stories, because readers in Taiwan have become very interested in them after watching so many Korean dramas.",
    "cn": "A：出版公司上個月為什麼聘請一位會說韓文和中文的新編輯？ B：我們打算翻譯更多現代韓國【文學】，特別是受歡迎的小說和短篇故事，因為台灣讀者看了這麼多韓劇後，對它們變得很有興趣。"
  },
  {
    "word": "language",
    "pos": "n.",
    "cn_def": "語言",
    "en_def": "the system of words that people of a country use to speak and write",
    "sentence": "A: What is the biggest challenge for our engineers who moved to the new factory in Vietnam this year? B: The {{BLANK}} barrier is the biggest problem at first, because most local workers do not speak English, so the company now pays for Vietnamese lessons twice a week after work.",
    "cn": "A：今年調到越南新工廠的工程師們，遇到最大的挑戰是什麼？ B：一開始最大的問題是【語言】障礙，因為大多數當地工人不會說英文，所以公司現在支付每週兩次下班後的越南語課程費用。"
  },
  {
    "word": "dialect",
    "pos": "n.",
    "cn_def": "方言",
    "en_def": "a form of a language spoken in one area",
    "sentence": "A: Why did the call center in Kaohsiung hire several older staff members who grew up in the countryside? B: Many of our elderly customers in southern Taiwan prefer to speak a local {{BLANK}} rather than Mandarin on the phone, so we need people who can understand them and answer their questions clearly.",
    "cn": "A：高雄的客服中心為什麼聘請了幾位在鄉下長大的年長員工？ B：南台灣許多年長顧客在電話中比較喜歡說當地【方言】而不是華語，所以我們需要能聽懂他們並清楚回答問題的人。"
  },
  {
    "word": "cuisine",
    "pos": "n.",
    "cn_def": "料理；菜餚",
    "en_def": "a style of cooking from a country or area",
    "sentence": "A: Where should we take the clients from Paris for dinner after the contract signing on Thursday evening? B: Let's book a table at the new restaurant near the station, because it serves excellent Taiwanese {{BLANK}} with a modern style, and the chef can explain each dish in French.",
    "cn": "A：週四晚上簽約後，我們該帶巴黎來的客戶去哪裡吃晚餐？ B：我們去車站附近那家新餐廳訂位吧，因為它供應風格現代的優質台灣【料理】，而且主廚可以用法文介紹每道菜。"
  },
  {
    "word": "costume",
    "pos": "n.",
    "cn_def": "服裝；戲服",
    "en_def": "clothes worn for a show, a festival or a special occasion",
    "sentence": "A: Why are the hotel staff wearing such colorful clothes at the front desk this week? B: The hotel is celebrating the Mid-Autumn Festival, so the manager asked everyone to wear a traditional Chinese {{BLANK}} to welcome guests and make the lobby feel more cheerful during the holiday.",
    "cn": "A：為什麼這週飯店櫃檯的員工穿著這麼鮮豔的衣服？ B：飯店正在慶祝中秋節，所以經理請大家穿傳統中式【服裝】迎接客人，讓大廳在假期間更有歡樂氣氛。"
  },
  {
    "word": "symbol",
    "pos": "n.",
    "cn_def": "象徵；符號",
    "en_def": "a picture or object that represents an idea",
    "sentence": "A: Why did the company choose a mountain for the new logo instead of the old blue circle? B: The designers wanted a {{BLANK}} of strength and growth that customers would remember easily, and Jade Mountain is famous all over Taiwan as the highest peak on the island.",
    "cn": "A：公司為什麼選擇一座山作為新標誌，而不是原本的藍色圓圈？ B：設計師想要一個代表力量和成長、顧客容易記住的【象徵】，而玉山是台灣最高峰，全台聞名。"
  },
  {
    "word": "diversity",
    "pos": "n.",
    "cn_def": "多元化；多樣性",
    "en_def": "the fact of including many different types of people or things",
    "sentence": "A: Why is the human resources department trying to hire more women and people from other countries this year? B: The board believes that greater {{BLANK}} in the workplace brings fresh ideas and helps us understand customers in different markets, so they have set clear goals for every team.",
    "cn": "A：人資部門今年為什麼努力雇用更多女性和來自其他國家的人？ B：董事會相信職場更加【多元化】能帶來新想法，並幫助我們了解不同市場的顧客，所以他們為每個團隊設定了明確的目標。"
  },
  {
    "word": "global",
    "pos": "adj.",
    "cn_def": "全球的",
    "en_def": "involving the whole world",
    "sentence": "A: Why did the electronics company move its main office from Hsinchu to Singapore last spring? B: The company wants to become a {{BLANK}} brand that sells products in more than fifty countries, and Singapore makes it easier to reach customers and partners in Asia, Europe and Australia.",
    "cn": "A：那家電子公司去年春天為什麼把總部從新竹搬到新加坡？ B：公司想成為在五十多個國家銷售產品的【全球】品牌，而新加坡讓它更容易接觸亞洲、歐洲和澳洲的顧客與夥伴。"
  },
  {
    "word": "local",
    "pos": "adj.",
    "cn_def": "當地的；在地的",
    "en_def": "belonging to the area where you live or work",
    "sentence": "A: Why does the new supermarket on Main Street sell so many vegetables from small farms near the city? B: The owner wants to support {{BLANK}} farmers and reduce transport costs, and customers are happy to pay a little more for fresh food that was picked only a day before.",
    "cn": "A：大街上那家新超市為什麼賣這麼多來自城市附近小農場的蔬菜？ B：老闆想支持【當地的】農民並降低運輸成本，而顧客也很樂意為前一天才採收的新鮮食物多付一點錢。"
  },
  {
    "word": "traditional",
    "pos": "adj.",
    "cn_def": "傳統的",
    "en_def": "following old customs or ways of doing things",
    "sentence": "A: What kind of gift should we give the Japanese clients when they visit our office next month? B: I think they would like something {{BLANK}} from Taiwan, such as a set of fine oolong tea and a handmade teapot, because it shows our culture and is easy to carry home.",
    "cn": "A：日本客戶下個月來訪時，我們該送什麼禮物？ B：我想他們會喜歡台灣【傳統的】東西，例如一套上等烏龍茶和手工茶壺，因為它展現我們的文化，而且方便帶回家。"
  },
  {
    "word": "modern",
    "pos": "adj.",
    "cn_def": "現代的；現代化的",
    "en_def": "new and using the latest ideas or designs",
    "sentence": "A: Why did so many young engineers apply for jobs at the new software company in Taichung this year? B: The company has a very {{BLANK}} office with standing desks, a gym and a quiet room for naps, and it also lets staff choose flexible working hours.",
    "cn": "A：今年為什麼這麼多年輕工程師應徵台中那家新軟體公司的工作？ B：那家公司有非常【現代化的】辦公室，有站立式辦公桌、健身房和可以小睡的安靜房間，還讓員工選擇彈性工時。"
  },
  {
    "word": "influence",
    "pos": "v.",
    "cn_def": "影響",
    "en_def": "to change how someone thinks or acts",
    "sentence": "A: Why is our marketing team paying a famous YouTuber to try our new running shoes and post a video about them? B: Our research shows that popular online stars strongly {{BLANK}} what young people decide to buy, so one good video can bring us thousands of new customers in a week.",
    "cn": "A：我們的行銷團隊為什麼付錢給知名YouTuber試穿我們的新跑鞋並發布影片？ B：我們的研究顯示，受歡迎的網路明星會強烈【影響】年輕人決定購買什麼，所以一支好影片在一週內就能為我們帶來數千名新顧客。"
  },
  {
    "word": "adapt",
    "pos": "v.",
    "cn_def": "使適應；改編",
    "en_def": "to change something so that it fits a new situation",
    "sentence": "A: How did the fast-food chain manage to become so popular in India, where many people do not eat beef? B: The company had to {{BLANK}} its menu to local tastes, so it created spicy chicken and vegetable burgers, and now its restaurants there are busier than the ones in America.",
    "cn": "A：那家速食連鎖店是怎麼在許多人不吃牛肉的印度變得這麼受歡迎的？ B：公司必須讓菜單【適應】當地口味，所以推出了辣味雞肉和蔬菜漢堡，現在那裡的餐廳比美國的還要忙。"
  },
  {
    "word": "preserve",
    "pos": "v.",
    "cn_def": "保存；保護",
    "en_def": "to keep something safe so that it continues to exist",
    "sentence": "A: Why is the old tea company in Pinglin still making tea by hand when machines would be much faster? B: The family wants to {{BLANK}} the skills that their grandparents taught them, and many tourists visit the shop because they want to see how tea was made a hundred years ago.",
    "cn": "A：坪林那家老茶行為什麼還用手工製茶，明明機器會快得多？ B：這個家族想【保存】祖父母傳授給他們的技術，而且很多遊客來店裡，是因為想看看一百年前茶是怎麼做的。"
  }
];

const MCQS = [
  {
    "q": "Every December, the staff decorate a big tree in the lobby. This _____ began when the company opened its first office in 1985.",
    "options": [
      "tradition",
      "myth",
      "symbol",
      "dialect"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "In some countries, it is a _____ to bring a small gift when visiting a client's home. Our guidebook explains these habits for travelers.",
    "options": [
      "cuisine",
      "custom",
      "literature",
      "costume"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The old train station is now a protected _____ site. The city will turn it into a museum instead of tearing it down.",
    "options": [
      "dance",
      "music",
      "heritage",
      "norm"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "After the merger, many employees worried that the small firm would lose its _____. The new owners promised to keep its name and culture.",
    "options": [
      "cuisine",
      "ceremony",
      "dialect",
      "identity"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The survey asked workers about their age, gender and _____ background. The results will help the company build a more balanced team.",
    "options": [
      "global",
      "modern",
      "ethnic",
      "traditional"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Our clients come from a _____ range of industries. They include banks, hospitals, farms and small fashion shops.",
    "options": [
      "ethnic",
      "diverse",
      "traditional",
      "local"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Toronto is a truly _____ city where over half of the people were born in another country. More than 150 languages are spoken there.",
    "options": [
      "cross-cultural",
      "intercultural",
      "ethnic",
      "multicultural"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The researcher is doing a _____ study of shopping habits in Japan, Brazil and Germany. She compares how people in each country choose brands.",
    "options": [
      "cross-cultural",
      "local",
      "ethnic",
      "modern"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The company was built on the _____ that every customer deserves fast service. This idea still guides all of our staff training.",
    "options": [
      "costume",
      "cuisine",
      "belief",
      "dance"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Teamwork is a core _____ at our firm. We reward staff who help their coworkers finish projects on time.",
    "options": [
      "festival",
      "dialect",
      "myth",
      "value"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Working on weekends has become the _____ in the tech industry. However, our company wants staff to rest on Saturdays and Sundays.",
    "options": [
      "norm",
      "symbol",
      "literature",
      "cuisine"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The museum works hard to _____ old photographs and letters from the 1900s. It keeps them in a cool, dry room.",
    "options": [
      "adapt",
      "preserve",
      "influence",
      "value"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "The awards _____ will be held in the hotel ballroom on Friday evening. All employees are invited to attend with one guest.",
    "options": [
      "cuisine",
      "myth",
      "identity",
      "ceremony"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The city's film _____ attracts thousands of visitors each autumn. Many hotels raise their prices during the ten-day event.",
    "options": [
      "norm",
      "festival",
      "belief",
      "dialect"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Many people think that working longer hours always means more work gets done. Our study shows this is a _____.",
    "options": [
      "ceremony",
      "costume",
      "myth",
      "cuisine"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The new hotel displays local _____ in every room. Guests can buy the paintings at the front desk if they like them.",
    "options": [
      "art",
      "language",
      "dialect",
      "norm"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The café plays soft jazz _____ in the morning. The owner says it helps customers relax while they read or work.",
    "options": [
      "cuisine",
      "music",
      "folklore",
      "heritage"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The hotel offers free salsa _____ lessons every Friday night. Guests can learn basic steps from a professional teacher.",
    "options": [
      "myth",
      "symbol",
      "dance",
      "belief"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Ms. Chen studied English _____ at university and loves classic novels. She now edits books for a publisher in Taipei.",
    "options": [
      "literature",
      "cuisine",
      "ceremony",
      "costume"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Applicants must speak at least one foreign _____ fluently. Japanese or Korean is preferred for this sales position.",
    "options": [
      "festival",
      "ritual",
      "symbol",
      "language"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The tour guide speaks the local _____ of the mountain villages. This helps visitors talk with elderly farmers who do not speak Mandarin.",
    "options": [
      "costume",
      "ceremony",
      "dialect",
      "cuisine"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The restaurant on the top floor serves fine French _____. Reservations should be made at least one week in advance.",
    "options": [
      "dialect",
      "norm",
      "identity",
      "cuisine"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Online reviews strongly _____ which hotels travelers book. Therefore, our staff reply politely to every comment, good or bad.",
    "options": [
      "influence",
      "adapt",
      "preserve",
      "value"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The green leaf on our packaging is a _____ of our promise to protect nature. Customers recognize it in stores around the world.",
    "options": [
      "dialect",
      "symbol",
      "cuisine",
      "ceremony"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The company is proud of the _____ of its workforce. Its 300 employees come from 25 countries and speak many languages.",
    "options": [
      "diversity",
      "folklore",
      "myth",
      "ritual"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Rising oil prices have affected the _____ economy this year. Companies in almost every country are paying more for transport.",
    "options": [
      "ethnic",
      "traditional",
      "cross-cultural",
      "global"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The hotel restaurant buys its fruit from _____ farms near the city. This keeps the food fresh and supports small growers in the area.",
    "options": [
      "global",
      "multicultural",
      "local",
      "intercultural"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The shop sells _____ Taiwanese teapots made by hand in the same way as a hundred years ago. They make popular gifts for visitors.",
    "options": [
      "modern",
      "traditional",
      "global",
      "diverse"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The old factory was turned into a bright, _____ office with glass walls and smart lighting. Young tech companies now rent space there.",
    "options": [
      "ethnic",
      "traditional",
      "cross-cultural",
      "modern"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "Foreign managers often need several months to _____ to life in a new country. The company offers language classes to help them.",
    "options": [
      "adapt",
      "preserve",
      "influence",
      "value"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "tradition": {
    "pos": "n.",
    "en_def": "a custom or belief that has existed for a long time",
    "cn_def": "傳統"
  },
  "custom": {
    "pos": "n.",
    "en_def": "a usual way of doing something in a place or group",
    "cn_def": "習俗；風俗"
  },
  "heritage": {
    "pos": "n.",
    "en_def": "the history, buildings and traditions of a place that are passed down",
    "cn_def": "遺產；傳統文化"
  },
  "identity": {
    "pos": "n.",
    "en_def": "the qualities that make a person, group or brand different from others",
    "cn_def": "身分；認同；特色"
  },
  "ethnic": {
    "pos": "adj.",
    "en_def": "connected with a group of people who share a culture, language or origin",
    "cn_def": "種族的；民族的；異國風味的"
  },
  "diverse": {
    "pos": "adj.",
    "en_def": "very different from each other; of many kinds",
    "cn_def": "多元的；各式各樣的"
  },
  "multicultural": {
    "pos": "adj.",
    "en_def": "having people of many different cultures living together",
    "cn_def": "多元文化的"
  },
  "intercultural": {
    "pos": "adj.",
    "en_def": "happening between people from different cultures",
    "cn_def": "跨文化的（不同文化之間的）"
  },
  "cross-cultural": {
    "pos": "adj.",
    "en_def": "comparing or involving two or more different cultures",
    "cn_def": "跨文化的（比較不同文化的）"
  },
  "belief": {
    "pos": "n.",
    "en_def": "a strong feeling that something is true or right",
    "cn_def": "信念；信仰；看法"
  },
  "value": {
    "pos": "n.",
    "en_def": "an idea or quality that people think is important in life or work",
    "cn_def": "價值觀；價值"
  },
  "norm": {
    "pos": "n.",
    "en_def": "what is usual or expected in a group or society",
    "cn_def": "常態；規範"
  },
  "ritual": {
    "pos": "n.",
    "en_def": "a set of actions that is always done in the same way",
    "cn_def": "儀式；例行習慣"
  },
  "ceremony": {
    "pos": "n.",
    "en_def": "a formal public event held for a special occasion",
    "cn_def": "典禮；儀式"
  },
  "festival": {
    "pos": "n.",
    "en_def": "a special time or event when people celebrate something",
    "cn_def": "節慶；節日；藝術節"
  },
  "folklore": {
    "pos": "n.",
    "en_def": "old stories and beliefs of a group of people",
    "cn_def": "民間傳說；民俗"
  },
  "myth": {
    "pos": "n.",
    "en_def": "an idea that many people believe but that is not true; an old story",
    "cn_def": "迷思；神話"
  },
  "art": {
    "pos": "n.",
    "en_def": "paintings, drawings and other beautiful things that people create",
    "cn_def": "藝術；美術"
  },
  "music": {
    "pos": "n.",
    "en_def": "sounds arranged in a pleasant way by singing or playing instruments",
    "cn_def": "音樂"
  },
  "dance": {
    "pos": "n.",
    "en_def": "a set of movements done to music",
    "cn_def": "舞蹈；舞"
  },
  "literature": {
    "pos": "n.",
    "en_def": "books, poems and plays, especially those thought to be of high quality",
    "cn_def": "文學"
  },
  "language": {
    "pos": "n.",
    "en_def": "the system of words that people of a country use to speak and write",
    "cn_def": "語言"
  },
  "dialect": {
    "pos": "n.",
    "en_def": "a form of a language spoken in one area",
    "cn_def": "方言"
  },
  "cuisine": {
    "pos": "n.",
    "en_def": "a style of cooking from a country or area",
    "cn_def": "料理；菜餚"
  },
  "costume": {
    "pos": "n.",
    "en_def": "clothes worn for a show, a festival or a special occasion",
    "cn_def": "服裝；戲服"
  },
  "symbol": {
    "pos": "n.",
    "en_def": "a picture or object that represents an idea",
    "cn_def": "象徵；符號"
  },
  "diversity": {
    "pos": "n.",
    "en_def": "the fact of including many different types of people or things",
    "cn_def": "多元化；多樣性"
  },
  "global": {
    "pos": "adj.",
    "en_def": "involving the whole world",
    "cn_def": "全球的"
  },
  "local": {
    "pos": "adj.",
    "en_def": "belonging to the area where you live or work",
    "cn_def": "當地的；在地的"
  },
  "traditional": {
    "pos": "adj.",
    "en_def": "following old customs or ways of doing things",
    "cn_def": "傳統的"
  },
  "modern": {
    "pos": "adj.",
    "en_def": "new and using the latest ideas or designs",
    "cn_def": "現代的；現代化的"
  },
  "influence": {
    "pos": "v.",
    "en_def": "to change how someone thinks or acts",
    "cn_def": "影響"
  },
  "adapt": {
    "pos": "v.",
    "en_def": "to change something so that it fits a new situation",
    "cn_def": "使適應；改編"
  },
  "preserve": {
    "pos": "v.",
    "en_def": "to keep something safe so that it continues to exist",
    "cn_def": "保存；保護"
  }
};

const EXTRA_GLOSSES = {};
