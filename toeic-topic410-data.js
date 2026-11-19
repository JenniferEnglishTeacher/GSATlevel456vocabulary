// Topic 410 Quiz Data: Tradition 傳統
// Source word list: https://www.examword.com/group-topic/tradition — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T410 - Tradition 傳統",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "custom",
    "pos": "n.",
    "cn_def": "習俗；慣例",
    "en_def": "a usual way of doing something in a place or group",
    "sentence": "A: Our new client from Japan is visiting the Taipei office next Monday, so should I prepare a small gift before the first meeting starts? B: Yes, it is a common {{BLANK}} there to exchange gifts at the first business meeting, so choose something simple and wrap it nicely in plain paper.",
    "cn": "A：我們來自日本的新客戶下週一要拜訪台北辦公室，我需要在第一次會議開始前準備一份小禮物嗎？ B：需要，在那裡第一次商務會議時交換禮物是很常見的【習俗】，所以挑個簡單的東西，用素色的紙好好包起來。"
  },
  {
    "word": "culture",
    "pos": "n.",
    "cn_def": "文化",
    "en_def": "the ideas, habits and way of life of a group of people",
    "sentence": "A: Why did the company decide to send all the new managers to the Singapore branch for two weeks before they start their jobs? B: The directors want them to understand the local business {{BLANK}}, such as how people make decisions, share opinions in meetings, and build trust with customers.",
    "cn": "A：為什麼公司決定讓所有新任經理在上任前先到新加坡分公司待兩週？ B：董事們希望他們了解當地的商業【文化】，例如人們如何做決定、在會議中如何表達意見，以及如何與客戶建立信任。"
  },
  {
    "word": "heritage",
    "pos": "n.",
    "cn_def": "遺產；傳承",
    "en_def": "old traditions, buildings and history passed from the past",
    "sentence": "A: Why is the tourism board spending so much money on repairing the old temples and tea houses in the mountain village this year? B: They believe the village's cultural {{BLANK}} attracts visitors from around the world, so protecting these buildings will bring more jobs and income to local families.",
    "cn": "A：為什麼觀光局今年花這麼多錢修復山村裡的老廟宇和茶館？ B：他們相信這個村莊的文化【遺產】能吸引世界各地的遊客，所以保護這些建築會為當地家庭帶來更多工作和收入。"
  },
  {
    "word": "ritual",
    "pos": "n.",
    "cn_def": "儀式；例行做法",
    "en_def": "an action that is always done in the same way, often for a special reason",
    "sentence": "A: I noticed that the whole sales team stands up and claps at nine o'clock every Monday morning, so what is the reason for that? B: It is a weekly {{BLANK}} our manager started three years ago to celebrate last week's results and give everyone some energy before the busy week begins.",
    "cn": "A：我注意到整個業務團隊每週一早上九點都會站起來鼓掌，這是為什麼呢？ B：那是我們經理三年前開始的每週【例行儀式】，用來慶祝上週的成績，並在忙碌的一週開始前為大家打氣。"
  },
  {
    "word": "ceremony",
    "pos": "n.",
    "cn_def": "典禮；儀式",
    "en_def": "a formal public event for a special occasion",
    "sentence": "A: Will the president of the company be at the opening of our new factory in Taichung next Friday afternoon? B: Yes, she will give a short speech and cut the ribbon at the {{BLANK}}, and after that all the guests are invited to a tour of the building and a light lunch.",
    "cn": "A：公司總裁下週五下午會出席我們台中新工廠的開幕嗎？ B：會，她會在【典禮】上簡短致詞並剪綵，之後所有來賓都受邀參觀廠房並享用簡單的午餐。"
  },
  {
    "word": "festival",
    "pos": "n.",
    "cn_def": "節日；節慶",
    "en_def": "a special day or time when people celebrate something",
    "sentence": "A: Why are the hotel rooms in the city center so expensive during the second week of February, even for business travelers? B: That is when the lantern {{BLANK}} takes place, and thousands of tourists come to watch the parades and lights, so most hotels raise their prices and fill up quickly.",
    "cn": "A：為什麼二月第二週市中心的飯店房價這麼貴，連商務旅客也一樣？ B：那時正是燈【節】舉辦的時候，成千上萬的遊客會來看遊行和燈飾，所以大部分飯店都會漲價，而且很快就客滿。"
  },
  {
    "word": "ancestor",
    "pos": "n.",
    "cn_def": "祖先",
    "en_def": "a family member who lived a long time ago",
    "sentence": "A: Why does your family drive to the hillside cemetery every spring, even though everyone is so busy with work and school? B: We go there to clean the grave of an important {{BLANK}} who started our family's tea business about two hundred years ago, and my parents think we should never forget where we came from.",
    "cn": "A：為什麼你們家每年春天都要開車去山坡上的墓園，即使大家工作和上學都那麼忙？ B：我們去那裡打掃一位重要【祖先】的墳墓，他大約兩百年前創立了我們家的茶葉生意，我父母認為我們永遠不該忘記自己的根。"
  },
  {
    "word": "generation",
    "pos": "n.",
    "cn_def": "世代；一代",
    "en_def": "all the people in a family or society born around the same time",
    "sentence": "A: How long has your family been running this small noodle restaurant near the train station, and who will take over next? B: My grandfather opened it in 1965, so I belong to the third {{BLANK}} to work here, and my daughter has already started learning the recipes after school.",
    "cn": "A：你們家在火車站附近經營這間小麵店多久了？下一個接手的會是誰？ B：我祖父在1965年開了這家店，所以我是在這裡工作的第三【代】，而我女兒放學後已經開始學習這些食譜了。"
  },
  {
    "word": "belief",
    "pos": "n.",
    "cn_def": "信念；看法",
    "en_def": "an idea that people think is true",
    "sentence": "A: Why does the marketing team avoid using the number four on any of our products or advertisements in this region? B: There is a common {{BLANK}} here that the number brings bad luck because it sounds like the word for death, so we don't want customers to feel uncomfortable when they shop.",
    "cn": "A：為什麼行銷團隊在這個地區的產品或廣告上都避免使用數字四？ B：這裡普遍有一種【看法】，認為這個數字會帶來厄運，因為它聽起來像「死」，所以我們不希望顧客在購物時感到不舒服。"
  },
  {
    "word": "value",
    "pos": "n.",
    "cn_def": "價值觀",
    "en_def": "an important idea about what is right and good",
    "sentence": "A: What do you think helped our company keep so many loyal customers during the difficult years after the economic crisis? B: I think our most important {{BLANK}} has always been honesty, so even when sales were low, we told customers the truth about delivery times and product quality.",
    "cn": "A：你認為是什麼幫助我們公司在經濟危機後的艱困年間留住這麼多忠實顧客？ B：我認為我們最重要的【價值觀】一直是誠實，所以即使業績不好，我們也會把交貨時間和產品品質的真實情況告訴顧客。"
  },
  {
    "word": "folk",
    "pos": "adj.",
    "cn_def": "民間的；民俗的",
    "en_def": "coming from the ordinary people and traditions of a place",
    "sentence": "A: What kind of entertainment are you planning for the welcome dinner with our overseas partners next month? B: We have hired a local {{BLANK}} music group that plays old instruments from the countryside, because our partners said they wanted to experience something different from the usual hotel band.",
    "cn": "A：下個月和海外合作夥伴的歡迎晚宴，你打算安排什麼樣的娛樂節目？ B：我們請了一個當地的【民俗】音樂團體，他們演奏鄉間的傳統樂器，因為合作夥伴說想體驗一些和一般飯店樂團不一樣的東西。"
  },
  {
    "word": "legend",
    "pos": "n.",
    "cn_def": "傳說",
    "en_def": "an old story that many people tell but may not be true",
    "sentence": "A: Why is that small lake behind the hotel so popular with tourists, even though it is quite far from the city? B: According to a local {{BLANK}}, a dragon once lived in the water and protected the village, so visitors like to throw coins in it and make a wish for good luck.",
    "cn": "A：為什麼飯店後面那座小湖這麼受遊客歡迎，即使它離市區相當遠？ B：根據當地的【傳說】，曾經有一條龍住在湖裡保護村莊，所以遊客喜歡往湖裡丟硬幣並許願求好運。"
  },
  {
    "word": "myth",
    "pos": "n.",
    "cn_def": "迷思；神話",
    "en_def": "an idea that many people believe but is not true; an ancient story",
    "sentence": "A: Is it true that working late every night always makes employees more productive and helps the company earn more money? B: No, that is just a {{BLANK}}, because our research shows that tired staff make more mistakes, so the manager now encourages everyone to leave the office by six o'clock.",
    "cn": "A：每晚加班真的總是能讓員工更有效率、幫公司賺更多錢嗎？ B：不，那只是個【迷思】，因為我們的研究顯示疲累的員工會犯更多錯，所以經理現在鼓勵大家六點前離開辦公室。"
  },
  {
    "word": "celebrate",
    "pos": "v.",
    "cn_def": "慶祝",
    "en_def": "to do something enjoyable for a special event",
    "sentence": "A: Our team finally finished the big software project two weeks ahead of schedule, so what should we do this Friday? B: Let's {{BLANK}} with a nice dinner at the Italian restaurant across the street, and I will ask the manager if the company can pay for part of the bill.",
    "cn": "A：我們團隊終於提前兩週完成了大型軟體專案，這週五我們該做些什麼？ B：我們去對街的義大利餐廳吃頓好的來【慶祝】吧，我會問問經理公司能不能幫忙付一部分帳單。"
  },
  {
    "word": "observe",
    "pos": "v.",
    "cn_def": "遵守；過（節）",
    "en_def": "to follow the customs of a holiday or religious day",
    "sentence": "A: Will the Malaysian office be open next Tuesday, because I need them to send me the signed contract before noon? B: Probably not, since most of the staff there {{BLANK}} an important religious holiday that day, so you should email them today and ask for the documents by Monday.",
    "cn": "A：馬來西亞辦公室下週二會上班嗎？因為我需要他們在中午前把簽好的合約寄給我。 B：可能不會，因為那裡大部分員工那天要【過】一個重要的宗教節日，所以你應該今天就寄電子郵件，請他們週一前提供文件。"
  },
  {
    "word": "preserve",
    "pos": "v.",
    "cn_def": "保存；保護",
    "en_def": "to keep something in good condition so it lasts",
    "sentence": "A: Why has the city government decided not to tear down the old railway station, even though developers want to build a shopping mall there? B: Many citizens asked the mayor to {{BLANK}} the building because it is over one hundred years old, so it will become a museum about the history of local trains.",
    "cn": "A：為什麼市政府決定不拆除舊火車站，即使開發商想在那裡蓋購物中心？ B：許多市民請市長【保存】這棟建築，因為它已有一百多年歷史，所以它將變成一座介紹當地火車歷史的博物館。"
  },
  {
    "word": "pass down",
    "pos": "v.phr.",
    "cn_def": "傳承；傳下去",
    "en_def": "to give knowledge or things to younger people in a family or group",
    "sentence": "A: Your bakery's pineapple cakes taste so different from the ones sold in the department stores, so what is your secret? B: My grandmother created the recipe sixty years ago, and in our family we {{BLANK}} the recipe and her baking skills to whoever runs the shop next, so every cake is still made by hand.",
    "cn": "A：你們烘焙坊的鳳梨酥吃起來和百貨公司賣的很不一樣，你們的秘訣是什麼？ B：我祖母六十年前創了這個食譜，我們家會把食譜和她的烘焙技術【傳承】給下一位經營店鋪的人，所以每塊鳳梨酥仍然是手工製作的。"
  },
  {
    "word": "ancient",
    "pos": "adj.",
    "cn_def": "古代的；古老的",
    "en_def": "very old; from a long time ago",
    "sentence": "A: Are you going to have any free time during your business trip to Greece next month, or will you be in meetings all week? B: I have one free afternoon, so I plan to visit the {{BLANK}} temples near Athens, which were built more than two thousand years ago and are still very impressive.",
    "cn": "A：你下個月去希臘出差時會有空閒時間嗎？還是整週都要開會？ B：我有一個下午有空，所以打算去參觀雅典附近的【古老】神廟，它們建於兩千多年前，至今仍非常壯觀。"
  },
  {
    "word": "traditional",
    "pos": "adj.",
    "cn_def": "傳統的",
    "en_def": "following ways that have existed for a long time",
    "sentence": "A: What should I wear to the wedding of my Indian colleague next Saturday, because I have never been to one before? B: Many guests will wear {{BLANK}} clothes like colorful saris, but a simple suit or dress is also fine, and the bride's family will be happy that you came.",
    "cn": "A：下週六我印度同事的婚禮我該穿什麼？因為我以前從沒參加過。 B：很多賓客會穿色彩鮮豔的紗麗等【傳統】服裝，但簡單的西裝或洋裝也可以，新娘家人會很高興你來參加。"
  },
  {
    "word": "modern",
    "pos": "adj.",
    "cn_def": "現代的；新式的",
    "en_def": "new and using the latest ideas or technology",
    "sentence": "A: The old office looked so dark and crowded, so what changes did the designers make during the renovation last summer? B: They gave the whole floor a bright, {{BLANK}} style with glass walls, comfortable furniture, and fast wireless internet, so the staff now enjoy coming to work much more than before.",
    "cn": "A：舊辦公室看起來又暗又擁擠，設計師去年夏天整修時做了哪些改變？ B：他們讓整層樓呈現明亮的【現代】風格，有玻璃牆、舒適的家具和快速的無線網路，所以員工現在比以前更喜歡來上班。"
  },
  {
    "word": "sacred",
    "pos": "adj.",
    "cn_def": "神聖的",
    "en_def": "very special and important for religious reasons",
    "sentence": "A: Can our tour group take photos inside the mountain temple tomorrow, or are there any rules we should follow? B: The monks consider the main hall a {{BLANK}} place, so photos are not allowed there, and visitors must also take off their shoes and speak quietly while they walk around.",
    "cn": "A：我們旅行團明天可以在山上的寺廟裡拍照嗎？還是有什麼規定要遵守？ B：僧侶們認為大殿是【神聖】的地方，所以那裡禁止拍照，而且遊客四處走動時必須脫鞋並輕聲說話。"
  },
  {
    "word": "symbol",
    "pos": "n.",
    "cn_def": "象徵；標誌",
    "en_def": "a sign or picture that represents an idea",
    "sentence": "A: Why did the design team put a small green leaf next to the company name on the new logo? B: The leaf is a {{BLANK}} of our promise to protect the environment, because we started using recycled packaging last year and want customers to remember that when they see our products.",
    "cn": "A：為什麼設計團隊在新標誌的公司名稱旁放了一片綠色小葉子？ B：那片葉子是我們保護環境承諾的【象徵】，因為我們去年開始使用回收包裝，希望顧客看到我們的產品時能記得這一點。"
  },
  {
    "word": "community",
    "pos": "n.",
    "cn_def": "社區；社群",
    "en_def": "the people who live in one area",
    "sentence": "A: Why does our bank let local groups use the meeting room on the first floor for free every weekend? B: The bank wants to support the local {{BLANK}}, so neighbors can hold language classes, health talks, and children's events there, and in return more families choose to open accounts with us.",
    "cn": "A：為什麼我們銀行每個週末都讓當地團體免費使用一樓的會議室？ B：銀行想支持當地【社區】，讓鄰居們可以在那裡舉辦語言課、健康講座和兒童活動，而作為回報，更多家庭選擇在我們這裡開戶。"
  },
  {
    "word": "gathering",
    "pos": "n.",
    "cn_def": "聚會",
    "en_def": "a meeting of people for a social or special purpose",
    "sentence": "A: Are you going back to your hometown in Tainan for the Lunar New Year holiday, or staying in Taipei this time? B: I am taking the high-speed train home on Friday because we always have a big family {{BLANK}} on New Year's Eve, with about thirty relatives eating dinner together at my grandparents' house.",
    "cn": "A：農曆新年假期你要回台南老家，還是這次留在台北？ B：我週五要搭高鐵回家，因為我們除夕總是會有盛大的家族【聚會】，大約三十位親戚在我祖父母家一起吃年夜飯。"
  },
  {
    "word": "respect",
    "pos": "n.",
    "cn_def": "尊敬；尊重",
    "en_def": "a feeling that someone is important and should be treated well",
    "sentence": "A: Why do the employees in the Seoul office always bow slightly when they meet senior managers in the hallway? B: It is a way to show {{BLANK}} for people who are older or more experienced, and new staff from other countries are usually taught this during their first week of training.",
    "cn": "A：為什麼首爾辦公室的員工在走廊遇到資深經理時總會微微鞠躬？ B：那是對年長或較有經驗的人表示【尊敬】的方式，來自其他國家的新員工通常在第一週培訓時就會學到這一點。"
  },
  {
    "word": "honor",
    "pos": "v.",
    "cn_def": "向…致敬；表揚",
    "en_def": "to show public praise and thanks to someone",
    "sentence": "A: What is the reason for the special dinner at the hotel next Thursday evening, because I saw it on the company calendar? B: The company wants to {{BLANK}} Mr. Chen, who is retiring after thirty-five years, so his family and many former coworkers have been invited to give short speeches.",
    "cn": "A：下週四晚上在飯店的特別晚宴是為了什麼？我在公司行事曆上看到的。 B：公司想【表揚】服務三十五年後即將退休的陳先生，所以邀請了他的家人和許多前同事來簡短致詞。"
  },
  {
    "word": "practice",
    "pos": "n.",
    "cn_def": "慣例；習慣做法",
    "en_def": "something people usually or regularly do",
    "sentence": "A: Why do so many shops on this street close early on the fifteenth day of the lunar month? B: It is a common local {{BLANK}} for shop owners to go home early and pray to their gods that evening, so if you need anything, you should do your shopping before five o'clock.",
    "cn": "A：為什麼這條街上很多商店在農曆十五都提早關門？ B：店主那天晚上提早回家拜神是當地常見的【習俗做法】，所以如果你需要買什麼，應該在五點前去購物。"
  },
  {
    "word": "origin",
    "pos": "n.",
    "cn_def": "起源；來源",
    "en_def": "the place or point where something comes from or begins",
    "sentence": "A: Our customers keep asking where the coffee beans in our new product line come from, so what should I tell them? B: You can explain that the {{BLANK}} of the beans is a small farm in Ethiopia, and we buy directly from the farmers so they receive a fair price for their hard work.",
    "cn": "A：顧客一直問我們新產品線的咖啡豆是從哪裡來的，我該怎麼回答？ B：你可以說明這些咖啡豆的【來源】是衣索比亞的一座小農場，我們直接向農民購買，讓他們的辛勞得到合理的價格。"
  },
  {
    "word": "identity",
    "pos": "n.",
    "cn_def": "身分；特色",
    "en_def": "the qualities that make a person, group or brand who or what they are",
    "sentence": "A: Why did the company spend so much time and money designing new uniforms, signs, and business cards this year? B: After the merger, the directors wanted a clear brand {{BLANK}}, so customers could easily recognize us and understand that the two companies are now working together as one team.",
    "cn": "A：為什麼公司今年花那麼多時間和金錢設計新制服、招牌和名片？ B：合併之後，董事們希望有清楚的品牌【形象】，讓顧客能輕易認出我們，並了解兩家公司現在已合為一個團隊。"
  },
  {
    "word": "ceremonial",
    "pos": "adj.",
    "cn_def": "儀式的；禮儀上的",
    "en_def": "used in or related to a formal ceremony",
    "sentence": "A: Why is the new hotel manager wearing such a long red robe in the photos from yesterday's opening event? B: It was a {{BLANK}} robe that local leaders wear at important public events, and the village chief gave it to her as a gift to welcome the hotel to their town.",
    "cn": "A：為什麼新任飯店經理在昨天開幕活動的照片中穿著那麼長的紅袍？ B：那是當地領袖在重要公開場合穿的【禮儀用】長袍，村長把它當作禮物送給她，歡迎飯店來到他們的小鎮。"
  },
  {
    "word": "heritage site",
    "pos": "n.phr.",
    "cn_def": "文化遺址；古蹟",
    "en_def": "a place that is protected because of its history or culture",
    "sentence": "A: Why is the tour company charging extra for the trip to the old castle on the second day of the conference? B: The castle is a World {{BLANK}}, so visitors need to buy special entry tickets, and the guide must have a government license to explain its history to tour groups.",
    "cn": "A：為什麼旅行社對會議第二天去古堡的行程要另外收費？ B：那座城堡是世界【文化遺址】，所以遊客需要購買特別的入場券，而且導遊必須持有政府執照才能向旅行團講解它的歷史。"
  },
  {
    "word": "continuity",
    "pos": "n.",
    "cn_def": "連續性；延續",
    "en_def": "the state of continuing without stopping or changing",
    "sentence": "A: Since our project leader is moving to the London office next month, how can we make sure the work goes smoothly? B: She will train her replacement for two weeks before she leaves to ensure {{BLANK}}, so our clients won't notice any changes in the quality or schedule of the project.",
    "cn": "A：既然我們的專案負責人下個月要調到倫敦辦公室，我們要怎麼確保工作順利進行？ B：她離開前會花兩週訓練接替的人以確保工作的【延續性】，這樣客戶就不會察覺專案品質或進度有任何變化。"
  },
  {
    "word": "belief system",
    "pos": "n.phr.",
    "cn_def": "信仰體系；價值體系",
    "en_def": "a set of ideas a group believes about life and the world",
    "sentence": "A: Why did the training department add a new course about different cultures for staff who work with international clients? B: Each culture has its own {{BLANK}} about time, money, and family, so understanding these differences helps our staff avoid misunderstandings and build better relationships with customers.",
    "cn": "A：為什麼培訓部門為與國際客戶合作的員工新增了一門關於不同文化的課程？ B：每種文化對時間、金錢和家庭都有自己的【價值體系】，所以了解這些差異能幫助員工避免誤會，並與客戶建立更好的關係。"
  },
  {
    "word": "ancestral",
    "pos": "adj.",
    "cn_def": "祖傳的；祖先的",
    "en_def": "belonging to or coming from your family members who lived long ago",
    "sentence": "A: Why is your manager flying back to Scotland next week, even though the busy season has already started? B: His family is selling their {{BLANK}} home, where his relatives have lived for over two hundred years, so he wants to visit it one last time and help sort out the old furniture.",
    "cn": "A：為什麼你的經理下週要飛回蘇格蘭，即使旺季已經開始了？ B：他家要賣掉【祖傳的】老家，他的親戚已在那裡住了兩百多年，所以他想最後一次回去看看，並幫忙整理舊家具。"
  },
  {
    "word": "commemorate",
    "pos": "v.",
    "cn_def": "紀念",
    "en_def": "to do something special to remember an important person or event",
    "sentence": "A: Why are there so many flags and flowers in front of the city hall this morning, and why is the road closed? B: The city is holding an event to {{BLANK}} the fiftieth anniversary of the bridge's opening, so the mayor will give a speech and there will be a free concert in the park.",
    "cn": "A：為什麼今天早上市政府前有這麼多旗子和花，而且道路還封閉了？ B：市府正在舉辦活動【紀念】大橋通車五十週年，所以市長會致詞，公園裡還會有免費音樂會。"
  }
];

const MCQS = [
  {
    "q": "In many Asian countries, it is a _____ to remove your shoes before entering a home. Visitors should follow this rule politely.",
    "options": [
      "custom",
      "myth",
      "symbol",
      "origin"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The new hires need time to adjust to the company _____. Their mentors explain how meetings, emails, and decisions usually work here.",
    "options": [
      "legend",
      "culture",
      "gathering",
      "ritual"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The museum displays tools, clothing, and photographs that show the region's rich cultural _____. Admission is free for local residents on Sundays.",
    "options": [
      "ceremony",
      "gathering",
      "heritage",
      "festival"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Every morning, the chef sharpens his knives and checks every ingredient before opening. This careful _____ helps the kitchen run smoothly all day.",
    "options": [
      "legend",
      "origin",
      "ancestor",
      "ritual"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Employees who reach twenty years of service will receive a gold watch at an awards _____. The event will be held in the main hall.",
    "options": [
      "myth",
      "ceremony",
      "belief",
      "symbol"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The town's annual food _____ attracts thousands of visitors every October. Local restaurants set up stalls along the river to sell their best dishes.",
    "options": [
      "festival",
      "ancestor",
      "belief",
      "origin"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The family's earliest known _____ arrived in Taiwan from Fujian about three hundred years ago. His old wooden chest is still kept in the living room.",
    "options": [
      "legend",
      "custom",
      "symbol",
      "ancestor"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The survey found that the younger _____ prefers shopping online rather than in stores. Retailers are changing their marketing plans as a result.",
    "options": [
      "ceremony",
      "origin",
      "generation",
      "custom"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Our founder had a strong _____ that every customer deserves fast and friendly service. This idea still guides how we train our staff today.",
    "options": [
      "belief",
      "festival",
      "ancestor",
      "gathering"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Teamwork is a core _____ at our company. Every employee is encouraged to share ideas and help colleagues finish projects on time.",
    "options": [
      "legend",
      "ritual",
      "value",
      "myth"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "At the welcome dinner, a local band played traditional _____ songs that farmers once sang in the rice fields. Our overseas guests enjoyed the music.",
    "options": [
      "modern",
      "folk",
      "ceremonial",
      "sacred"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "According to local _____, a white snake once lived in the cave behind the temple. Tour guides tell this story to every group.",
    "options": [
      "value",
      "custom",
      "generation",
      "legend"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "It is a common _____ that working longer hours always produces better results. Studies show that rested employees are often more productive.",
    "options": [
      "ritual",
      "ceremony",
      "myth",
      "heritage"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The staff gathered in the conference room to _____ the company's tenth anniversary. Cake and drinks were served after the president's speech.",
    "options": [
      "celebrate",
      "preserve",
      "pass down",
      "honor"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Several of our clients _____ Ramadan, so please avoid scheduling lunch meetings with them next month. Afternoon calls would be more suitable.",
    "options": [
      "preserve",
      "pass down",
      "commemorate",
      "observe"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The city plans to _____ the old warehouse district by turning the buildings into shops and cafés. Construction will begin next spring.",
    "options": [
      "observe",
      "preserve",
      "celebrate",
      "honor"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Many family businesses _____ their skills from parents to children. This helps keep the quality of their products high for decades.",
    "options": [
      "pass down",
      "observe",
      "celebrate",
      "commemorate"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The construction workers stopped digging after they found _____ coins buried under the parking lot. Experts believe the coins are two thousand years old.",
    "options": [
      "modern",
      "ancient",
      "folk",
      "ceremonial"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The cafeteria menu includes _____ dishes like beef noodle soup as well as new recipes from our young chefs. Prices start at ninety dollars.",
    "options": [
      "ancient",
      "sacred",
      "traditional",
      "ceremonial"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The company moved into a _____ office building with energy-saving lights and high-speed elevators. Employees no longer have to wait long in the lobby.",
    "options": [
      "ancient",
      "sacred",
      "folk",
      "modern"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Visitors must remain silent inside the temple because it is a _____ place for local people. Photography is also not allowed in the main hall.",
    "options": [
      "modern",
      "sacred",
      "folk",
      "traditional"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The red envelope is a _____ of good luck in Chinese culture. Many companies give them to employees before the Lunar New Year.",
    "options": [
      "custom",
      "legend",
      "ancestor",
      "symbol"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The supermarket donates fresh vegetables to the local _____ center every week. The center uses them to cook free meals for elderly residents.",
    "options": [
      "community",
      "heritage",
      "ceremony",
      "legend"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The annual staff _____ will take place at a lakeside resort this year. All employees and their families are welcome to attend.",
    "options": [
      "origin",
      "symbol",
      "gathering",
      "myth"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Managers should treat every team member with _____, even during stressful periods. Polite communication helps build a positive workplace.",
    "options": [
      "origin",
      "heritage",
      "legend",
      "respect"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The association will _____ three volunteers for their hard work at tonight's dinner. Each of them will receive a special award.",
    "options": [
      "honor",
      "preserve",
      "observe",
      "pass down"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "It is standard _____ to send customers a confirmation email after they place an order. This reduces mistakes and builds trust.",
    "options": [
      "legend",
      "ancestor",
      "practice",
      "festival"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Shoppers increasingly want to know the _____ of the food they buy. Our labels now show the farm and country where each product was grown.",
    "options": [
      "ceremony",
      "origin",
      "myth",
      "gathering"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The marketing team created a new logo and slogan to strengthen the brand's _____. Customers should now recognize our products more easily.",
    "options": [
      "ancestor",
      "ceremony",
      "legend",
      "identity"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "A bronze statue was built in the park to _____ the workers who built the railway. A short ceremony will be held there every year.",
    "options": [
      "preserve",
      "observe",
      "commemorate",
      "pass down"
    ],
    "answer": 2,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "custom": {
    "pos": "n.",
    "en_def": "a usual way of doing something in a place or group",
    "cn_def": "習俗；慣例"
  },
  "culture": {
    "pos": "n.",
    "en_def": "the ideas, habits and way of life of a group of people",
    "cn_def": "文化"
  },
  "heritage": {
    "pos": "n.",
    "en_def": "old traditions, buildings and history passed from the past",
    "cn_def": "遺產；傳承"
  },
  "ritual": {
    "pos": "n.",
    "en_def": "an action that is always done in the same way, often for a special reason",
    "cn_def": "儀式；例行做法"
  },
  "ceremony": {
    "pos": "n.",
    "en_def": "a formal public event for a special occasion",
    "cn_def": "典禮；儀式"
  },
  "festival": {
    "pos": "n.",
    "en_def": "a special day or time when people celebrate something",
    "cn_def": "節日；節慶"
  },
  "ancestor": {
    "pos": "n.",
    "en_def": "a family member who lived a long time ago",
    "cn_def": "祖先"
  },
  "generation": {
    "pos": "n.",
    "en_def": "all the people in a family or society born around the same time",
    "cn_def": "世代；一代"
  },
  "belief": {
    "pos": "n.",
    "en_def": "an idea that people think is true",
    "cn_def": "信念；看法"
  },
  "value": {
    "pos": "n.",
    "en_def": "an important idea about what is right and good",
    "cn_def": "價值觀"
  },
  "folk": {
    "pos": "adj.",
    "en_def": "coming from the ordinary people and traditions of a place",
    "cn_def": "民間的；民俗的"
  },
  "legend": {
    "pos": "n.",
    "en_def": "an old story that many people tell but may not be true",
    "cn_def": "傳說"
  },
  "myth": {
    "pos": "n.",
    "en_def": "an idea that many people believe but is not true; an ancient story",
    "cn_def": "迷思；神話"
  },
  "celebrate": {
    "pos": "v.",
    "en_def": "to do something enjoyable for a special event",
    "cn_def": "慶祝"
  },
  "observe": {
    "pos": "v.",
    "en_def": "to follow the customs of a holiday or religious day",
    "cn_def": "遵守；過（節）"
  },
  "preserve": {
    "pos": "v.",
    "en_def": "to keep something in good condition so it lasts",
    "cn_def": "保存；保護"
  },
  "pass down": {
    "pos": "v.phr.",
    "en_def": "to give knowledge or things to younger people in a family or group",
    "cn_def": "傳承；傳下去"
  },
  "ancient": {
    "pos": "adj.",
    "en_def": "very old; from a long time ago",
    "cn_def": "古代的；古老的"
  },
  "traditional": {
    "pos": "adj.",
    "en_def": "following ways that have existed for a long time",
    "cn_def": "傳統的"
  },
  "modern": {
    "pos": "adj.",
    "en_def": "new and using the latest ideas or technology",
    "cn_def": "現代的；新式的"
  },
  "sacred": {
    "pos": "adj.",
    "en_def": "very special and important for religious reasons",
    "cn_def": "神聖的"
  },
  "symbol": {
    "pos": "n.",
    "en_def": "a sign or picture that represents an idea",
    "cn_def": "象徵；標誌"
  },
  "community": {
    "pos": "n.",
    "en_def": "the people who live in one area",
    "cn_def": "社區；社群"
  },
  "gathering": {
    "pos": "n.",
    "en_def": "a meeting of people for a social or special purpose",
    "cn_def": "聚會"
  },
  "respect": {
    "pos": "n.",
    "en_def": "a feeling that someone is important and should be treated well",
    "cn_def": "尊敬；尊重"
  },
  "honor": {
    "pos": "v.",
    "en_def": "to show public praise and thanks to someone",
    "cn_def": "向…致敬；表揚"
  },
  "practice": {
    "pos": "n.",
    "en_def": "something people usually or regularly do",
    "cn_def": "慣例；習慣做法"
  },
  "origin": {
    "pos": "n.",
    "en_def": "the place or point where something comes from or begins",
    "cn_def": "起源；來源"
  },
  "identity": {
    "pos": "n.",
    "en_def": "the qualities that make a person, group or brand who or what they are",
    "cn_def": "身分；特色"
  },
  "ceremonial": {
    "pos": "adj.",
    "en_def": "used in or related to a formal ceremony",
    "cn_def": "儀式的；禮儀上的"
  },
  "heritage site": {
    "pos": "n.phr.",
    "en_def": "a place that is protected because of its history or culture",
    "cn_def": "文化遺址；古蹟"
  },
  "continuity": {
    "pos": "n.",
    "en_def": "the state of continuing without stopping or changing",
    "cn_def": "連續性；延續"
  },
  "belief system": {
    "pos": "n.phr.",
    "en_def": "a set of ideas a group believes about life and the world",
    "cn_def": "信仰體系；價值體系"
  },
  "ancestral": {
    "pos": "adj.",
    "en_def": "belonging to or coming from your family members who lived long ago",
    "cn_def": "祖傳的；祖先的"
  },
  "commemorate": {
    "pos": "v.",
    "en_def": "to do something special to remember an important person or event",
    "cn_def": "紀念"
  }
};

const EXTRA_GLOSSES = {};
