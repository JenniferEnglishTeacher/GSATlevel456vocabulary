// Topic 172 Quiz Data: Historical Books 歷史書籍
// Source word list: https://www.examword.com/group-topic/historical-books — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T172 - Historical Books 歷史書籍",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "history",
    "pos": "n.",
    "cn_def": "歷史；歷史學",
    "en_def": "the study or story of past events",
    "sentence": "A: Why is the city library holding a special exhibition on the second floor this month, and who is organizing all the events for local families? B: The library wants to celebrate the {{BLANK}} of our town, so volunteers have collected old photos, maps, and letters showing how the area grew over the last two hundred years.",
    "cn": "A：為什麼市立圖書館這個月在二樓舉辦特展？是誰為當地家庭籌劃所有活動？ B：圖書館想慶祝我們小鎮的【歷史】，所以志工收集了舊照片、地圖和信件，展示這個地區過去兩百年來的發展。"
  },
  {
    "word": "chronicle",
    "pos": "n.",
    "cn_def": "編年史；紀事",
    "en_def": "a written record of events in the order they happened",
    "sentence": "A: What kind of book is the publishing team preparing for the company's fiftieth anniversary celebration next spring? B: They are writing a detailed {{BLANK}} of the company's growth, describing each important year in order, from the first small office downtown to the opening of our factories in Asia.",
    "cn": "A：出版團隊正在為明年春天公司五十週年慶祝活動準備什麼樣的書？ B：他們正在撰寫一部詳細的公司發展【編年史】，依序描述每個重要的年份，從市中心第一間小辦公室到我們在亞洲的工廠開幕。"
  },
  {
    "word": "archive",
    "pos": "n.",
    "cn_def": "檔案館；檔案室",
    "en_def": "a place where old records and documents are kept",
    "sentence": "A: Where can I find the original contracts we signed with our first overseas supplier back in the 1980s? B: You should check the company {{BLANK}} in the basement, where all the old paper records are stored in labeled boxes, but remember to ask the librarian for a key before you go down there.",
    "cn": "A：我在哪裡可以找到我們在1980年代與第一家海外供應商簽訂的原始合約？ B：你應該去查看地下室的公司【檔案室】，所有舊的紙本紀錄都存放在貼有標籤的箱子裡，但記得下去之前要先向管理員拿鑰匙。"
  },
  {
    "word": "manuscript",
    "pos": "n.",
    "cn_def": "手稿；原稿",
    "en_def": "a book or document written by hand or not yet printed",
    "sentence": "A: Why is the museum keeping that old book behind thick glass in a dark room with such a low temperature? B: It is a rare {{BLANK}} written by hand by a monk about eight hundred years ago, and the paper is so fragile that strong light and warm air could easily damage the pages.",
    "cn": "A：為什麼博物館要把那本舊書放在溫度很低的暗室裡、隔著厚玻璃保存？ B：那是一份大約八百年前由一位修士親手寫成的珍貴【手稿】，紙張非常脆弱，強光和溫暖的空氣很容易損壞書頁。"
  },
  {
    "word": "biography",
    "pos": "n.",
    "cn_def": "傳記",
    "en_def": "the story of a person's life written by someone else",
    "sentence": "A: Have you finished reading the book about the founder of that famous electronics company that the manager recommended at the meeting? B: Yes, the {{BLANK}} was written by a journalist who interviewed his family and former coworkers, and it explains how he turned a small repair shop into a global business.",
    "cn": "A：你讀完經理在會議上推薦的那本關於知名電子公司創辦人的書了嗎？ B：讀完了，這本【傳記】是由一位記者寫的，他採訪了創辦人的家人和以前的同事，書中說明了他如何把一間小修理店變成全球企業。"
  },
  {
    "word": "memoir",
    "pos": "n.",
    "cn_def": "回憶錄",
    "en_def": "a book a person writes about their own life and experiences",
    "sentence": "A: What is the retired CEO planning to do now that she has left the company and has more free time at home? B: She is writing a {{BLANK}} about her own experiences in the business world, including the difficult decisions she made during the financial crisis and the lessons she learned from her mistakes.",
    "cn": "A：那位退休的執行長離開公司、在家有更多空閒時間後打算做什麼？ B：她正在寫一本關於自己在商界經歷的【回憶錄】，包括她在金融危機期間做出的艱難決定，以及她從錯誤中學到的教訓。"
  },
  {
    "word": "era",
    "pos": "n.",
    "cn_def": "時代；年代",
    "en_def": "a long period of time with a special character",
    "sentence": "A: Why does the new hotel lobby have such old-fashioned furniture, black-and-white photos, and jazz music playing all day? B: The designers wanted guests to feel like they had traveled back to the {{BLANK}} of the 1920s, when the building first opened as a luxury hotel for wealthy travelers.",
    "cn": "A：為什麼新飯店大廳擺著那麼老式的家具、黑白照片，還整天播放爵士樂？ B：設計師希望客人感覺像回到了1920年代的那個【時代】，那時這棟建築剛以豪華飯店之姿開幕，接待富有的旅客。"
  },
  {
    "word": "period",
    "pos": "n.",
    "cn_def": "時期；期間",
    "en_def": "a length of time in history",
    "sentence": "A: Which part of the past does the professor's new book on clothing and daily life mainly focus on? B: It covers the {{BLANK}} between 1850 and 1900, when factories changed how people worked, and it shows how ordinary families dressed, cooked, and spent their weekends during those busy years.",
    "cn": "A：教授那本關於服裝與日常生活的新書主要聚焦在過去的哪一段？ B：它涵蓋1850年到1900年之間的【時期】，當時工廠改變了人們的工作方式，書中呈現一般家庭在那些忙碌的年代如何穿著、做飯和度過週末。"
  },
  {
    "word": "civilization",
    "pos": "n.",
    "cn_def": "文明",
    "en_def": "a developed society with its own culture and way of life",
    "sentence": "A: What did the tour guide say about the stone buildings and water channels we saw near the river this morning? B: She explained that an ancient {{BLANK}} built them more than three thousand years ago, and that its people already understood farming, mathematics, and trade with neighboring regions.",
    "cn": "A：導遊對我們今天早上在河邊看到的石造建築和水道說了什麼？ B：她解釋說，一個古老的【文明】在三千多年前建造了它們，而且當時的人們已經懂得農耕、數學，以及和鄰近地區貿易。"
  },
  {
    "word": "empire",
    "pos": "n.",
    "cn_def": "帝國；（商業）王國",
    "en_def": "a group of countries ruled by one leader or government; a large group of businesses",
    "sentence": "A: Why does the history book have so many maps showing different parts of Europe, Africa, and Asia in the same color? B: Those areas were all once part of one huge {{BLANK}} that was controlled by a single emperor in Rome, and the maps show how its borders grew and later became smaller.",
    "cn": "A：為什麼那本歷史書有這麼多地圖，把歐洲、非洲和亞洲的不同地區塗成同一種顏色？ B：那些地區曾經都屬於一個由羅馬的一位皇帝統治的龐大【帝國】，地圖顯示了它的疆界如何擴張，後來又如何縮小。"
  },
  {
    "word": "dynasty",
    "pos": "n.",
    "cn_def": "王朝；朝代",
    "en_def": "a series of rulers from the same family",
    "sentence": "A: Why are visitors from abroad so interested in the old palace that our travel agency includes in the city tour? B: Emperors from the same family lived there for nearly three hundred years, so the guides explain how that {{BLANK}} ruled the country and why it finally lost power in 1912.",
    "cn": "A：為什麼國外遊客對我們旅行社在市區導覽中安排的那座古老宮殿這麼感興趣？ B：同一個家族的皇帝在那裡住了將近三百年，所以導遊會解說那個【王朝】如何統治國家，以及它為什麼在1912年終於失去政權。"
  },
  {
    "word": "revolution",
    "pos": "n.",
    "cn_def": "革命；巨大變革",
    "en_def": "a big change in a government or in the way things are done",
    "sentence": "A: Why did the speaker at the technology conference keep comparing smartphones to the steam engines of the 1800s? B: She believes mobile devices have started a {{BLANK}} in the way we work and shop, just as steam power completely changed factories, transportation, and daily life two centuries ago.",
    "cn": "A：為什麼科技研討會上的講者一直把智慧型手機比作1800年代的蒸汽機？ B：她認為行動裝置在我們工作和購物的方式上掀起了一場【革命】，就像兩個世紀前蒸汽動力徹底改變了工廠、交通和日常生活一樣。"
  },
  {
    "word": "warfare",
    "pos": "n.",
    "cn_def": "戰爭；作戰方式",
    "en_def": "fighting in a war; the methods used in war",
    "sentence": "A: What is the main topic of the military museum's new exhibit that opens on the third floor next weekend? B: It shows how {{BLANK}} changed over the centuries, from soldiers fighting with swords and horses to modern armies using tanks, airplanes, and computers to plan their attacks.",
    "cn": "A：軍事博物館下週末在三樓開幕的新展覽主題是什麼？ B：它展示了【戰爭方式】幾世紀以來如何演變，從士兵用刀劍和馬匹作戰，到現代軍隊使用坦克、飛機和電腦來規劃攻擊。"
  },
  {
    "word": "treaty",
    "pos": "n.",
    "cn_def": "條約",
    "en_def": "a formal written agreement between countries",
    "sentence": "A: Why are the two governments sending their trade ministers to Geneva for meetings that will last the whole week? B: They hope to sign a {{BLANK}} that will reduce taxes on imported goods and protect fishing rights, but both sides still disagree about several important details in the final agreement.",
    "cn": "A：為什麼兩國政府要派貿易部長到日內瓦開整整一週的會議？ B：他們希望簽署一項【條約】來降低進口商品的稅並保護捕魚權，但雙方對最終協議中的幾個重要細節仍有分歧。"
  },
  {
    "word": "colonial",
    "pos": "adj.",
    "cn_def": "殖民的；殖民時期的",
    "en_def": "relating to a time when one country ruled another country",
    "sentence": "A: What makes the old neighborhood near the harbor so popular with tourists who come to take photos on weekends? B: Many of the buildings there were built during the {{BLANK}} period, when the area was ruled by a European country, so they have tall windows, wide balconies, and red brick walls.",
    "cn": "A：港口附近的老街區為什麼這麼受週末來拍照的遊客歡迎？ B：那裡許多建築是在【殖民】時期建造的，當時該地區由一個歐洲國家統治，所以它們有高窗、寬陽台和紅磚牆。"
  },
  {
    "word": "medieval",
    "pos": "adj.",
    "cn_def": "中世紀的",
    "en_def": "relating to the Middle Ages, about 500 to 1500",
    "sentence": "A: Where are we going on Saturday during the company trip, and do I need to bring anything special? B: We are visiting a {{BLANK}} castle with high stone walls and towers that were built about seven hundred years ago, so wear comfortable shoes because there are many steep stairs to climb.",
    "cn": "A：公司旅遊星期六要去哪裡？我需要帶什麼特別的東西嗎？ B：我們要參觀一座【中世紀的】城堡，它有大約七百年前建造的高大石牆和塔樓，所以要穿舒適的鞋子，因為有很多陡峭的樓梯要爬。"
  },
  {
    "word": "ancient",
    "pos": "adj.",
    "cn_def": "古代的；古老的",
    "en_def": "very old; from a very long time ago",
    "sentence": "A: Why did the construction company have to stop work on the new shopping center for almost three months? B: Workers found {{BLANK}} coins and pottery from about two thousand years ago while digging the foundation, so experts from the university came to study the site before building could continue.",
    "cn": "A：為什麼建設公司必須停止新購物中心的工程將近三個月？ B：工人在挖地基時發現了大約兩千年前的【古代】錢幣和陶器，所以大學的專家來研究這個地點，之後才能繼續施工。"
  },
  {
    "word": "primary",
    "pos": "adj.",
    "cn_def": "第一手的；主要的",
    "en_def": "first-hand; made at the time of the event; main",
    "sentence": "A: How should I support the arguments in my report about the factory strike of 1965 for the history department? B: Try to use {{BLANK}} sources, such as letters, diaries, and newspaper articles written by people who were actually there, because they give the most direct evidence of what happened.",
    "cn": "A：我要交給歷史系、關於1965年工廠罷工的報告，該如何支持我的論點？ B：試著使用【第一手】資料，例如由實際在場的人寫的信件、日記和報紙文章，因為它們提供了最直接的事件證據。"
  },
  {
    "word": "secondary",
    "pos": "adj.",
    "cn_def": "第二手的；次要的",
    "en_def": "based on other people's work, not first-hand; less important",
    "sentence": "A: Is it acceptable to include textbooks and online encyclopedias in the list of materials for my research paper? B: Yes, those are {{BLANK}} sources, which explain and discuss events using other writers' work, and they are useful for background, but you should also include some original documents from the time.",
    "cn": "A：我的研究報告參考資料清單中可以放教科書和線上百科全書嗎？ B：可以，那些是【第二手】資料，它們是利用其他作者的研究來解釋和討論事件，對背景知識很有用，但你也應該加入一些當時的原始文件。"
  },
  {
    "word": "narrative",
    "pos": "n.",
    "cn_def": "敘事；故事",
    "en_def": "a story or description of events",
    "sentence": "A: Why do so many readers say the new book about the 1906 earthquake is hard to put down, even though it is about history? B: The author tells a powerful {{BLANK}} through the eyes of three ordinary families, so readers follow their struggles and hopes like characters in a novel while still learning real facts.",
    "cn": "A：為什麼很多讀者說那本關於1906年地震的新書讓人愛不釋手，即使它講的是歷史？ B：作者透過三個普通家庭的視角講述了一段動人的【敘事】，所以讀者像在讀小說一樣跟著他們的掙扎和希望，同時還能學到真實的史實。"
  },
  {
    "word": "account",
    "pos": "n.",
    "cn_def": "描述；記述",
    "en_def": "a written or spoken description of an event",
    "sentence": "A: Why is the old soldier's diary so valuable to the researchers who are writing about the famous battle? B: It gives a detailed {{BLANK}} of what happened each day, including the weather, the food, and the fear the young men felt, which official military reports from that time never mention.",
    "cn": "A：為什麼那位老兵的日記對研究那場著名戰役的學者來說這麼珍貴？ B：它對每天發生的事情提供了詳細的【記述】，包括天氣、食物以及年輕士兵感受到的恐懼，這些都是當時官方軍事報告從未提到的。"
  },
  {
    "word": "interpretation",
    "pos": "n.",
    "cn_def": "解讀；詮釋",
    "en_def": "an explanation of the meaning of something",
    "sentence": "A: Why did the two historians argue so strongly during the panel discussion at the book festival yesterday afternoon? B: They read the same letters from the king but came to very different conclusions, and each one believed the other's {{BLANK}} of the documents was completely wrong.",
    "cn": "A：為什麼昨天下午書展的座談會上那兩位歷史學家爭論得那麼激烈？ B：他們讀了國王的同一批信件，卻得出非常不同的結論，而且彼此都認為對方對這些文件的【解讀】完全錯誤。"
  },
  {
    "word": "documentation",
    "pos": "n.",
    "cn_def": "文件記錄；證明文件",
    "en_def": "written records or papers that prove or support something",
    "sentence": "A: What do I need to bring when I apply for permission to study the old city records at the national library? B: You must provide proper {{BLANK}}, such as a letter from your university and a copy of your ID, because the staff only allow registered researchers to handle such valuable papers.",
    "cn": "A：我去國家圖書館申請研究舊市政紀錄時需要帶什麼？ B：你必須提供適當的【證明文件】，例如大學的信函和身分證影本，因為工作人員只允許已登記的研究人員接觸這麼珍貴的文件。"
  },
  {
    "word": "timeline",
    "pos": "n.",
    "cn_def": "時間軸；年表；時程表",
    "en_def": "a list or line showing events in the order they happened",
    "sentence": "A: How can we help new employees quickly understand the major changes our company has gone through since it was founded? B: Let's put a large {{BLANK}} on the wall of the training room that shows every key event in order, from our first product launch to the merger with our biggest competitor.",
    "cn": "A：我們要如何幫助新員工快速了解公司創立以來經歷的重大變化？ B：我們在培訓室的牆上放一張大型【時間軸】吧，依序呈現每一個重要事件，從我們第一個產品上市到與最大競爭對手合併。"
  },
  {
    "word": "heritage",
    "pos": "n.",
    "cn_def": "遺產；傳統文化",
    "en_def": "the history, traditions, and buildings a country or group has from the past",
    "sentence": "A: Why has the city government decided not to tear down the old train station even though developers offered a lot of money? B: Local residents argued that the building is an important part of the town's cultural {{BLANK}}, so officials plan to repair it and turn it into a museum and café.",
    "cn": "A：為什麼市政府決定不拆除舊火車站，即使開發商出了很多錢？ B：當地居民主張這棟建築是小鎮文化【遺產】的重要部分，所以官員計劃修復它，並把它改建成博物館和咖啡館。"
  },
  {
    "word": "artifact",
    "pos": "n.",
    "cn_def": "文物；手工藝品",
    "en_def": "an object made by people long ago that has historical interest",
    "sentence": "A: What will visitors be able to see at the new exhibition that opens at the city museum next Monday? B: The most famous {{BLANK}} on display is a golden cup that farmers discovered in a field last year, and it will be shown beside tools, jewelry, and pottery from the same ancient village.",
    "cn": "A：市立博物館下週一開幕的新展覽中，參觀者可以看到什麼？ B：展出的最著名【文物】是農夫去年在田裡發現的一個金杯，它將和同一個古村落的工具、珠寶和陶器一起展示。"
  },
  {
    "word": "legacy",
    "pos": "n.",
    "cn_def": "遺產；留下的影響",
    "en_def": "something that a person leaves behind for people in the future",
    "sentence": "A: Why are so many employees attending the ceremony for the founder who passed away last month? B: People want to honor his {{BLANK}}, because the hospital, the scholarship fund, and the training programs he started will continue to help thousands of people in this city for many years.",
    "cn": "A：為什麼這麼多員工出席上個月過世的創辦人的紀念儀式？ B：大家想要表彰他留下的【遺澤】，因為他創辦的醫院、獎學金基金和培訓計畫，將在未來很多年繼續幫助這座城市的成千上萬人。"
  },
  {
    "word": "context",
    "pos": "n.",
    "cn_def": "背景；脈絡",
    "en_def": "the situation or background in which something happens",
    "sentence": "A: Why did the professor tell us to read about the economy of the 1930s before discussing the novel in class next week? B: She said we need to understand the historical {{BLANK}}, because the characters' money problems and hard choices only make sense when you know how many people were out of work then.",
    "cn": "A：為什麼教授叫我們在下週課堂討論那本小說之前，先閱讀關於1930年代經濟的資料？ B：她說我們需要了解歷史【背景】，因為只有知道當時有多少人失業，角色們的金錢問題和艱難選擇才說得通。"
  },
  {
    "word": "scholar",
    "pos": "n.",
    "cn_def": "學者",
    "en_def": "a person who studies a subject deeply, especially at a university",
    "sentence": "A: Who is giving the opening speech at the history conference that our company is sponsoring at the convention center? B: A well-known {{BLANK}} from Oxford University will speak first, since she has spent over thirty years studying ancient trade routes and has published several books on the subject.",
    "cn": "A：我們公司在會展中心贊助的歷史研討會，開幕演講由誰主講？ B：一位來自牛津大學的知名【學者】將首先演講，因為她花了三十多年研究古代貿易路線，並出版了好幾本相關的書。"
  },
  {
    "word": "research",
    "pos": "n.",
    "cn_def": "研究",
    "en_def": "careful study to discover new facts",
    "sentence": "A: How long did it take the writer to finish her new book about the railway workers who built the line through the mountains? B: She spent almost six years doing {{BLANK}} in libraries and museums, reading old letters, and interviewing the grandchildren of workers before she even started writing the first chapter.",
    "cn": "A：那位作家花了多久時間完成她那本關於修建穿山鐵路工人的新書？ B：她花了將近六年在圖書館和博物館做【研究】、閱讀舊信件，還訪問了工人的孫輩，然後才開始寫第一章。"
  },
  {
    "word": "analysis",
    "pos": "n.",
    "cn_def": "分析",
    "en_def": "a careful study of something to understand it",
    "sentence": "A: What did the experts discover when they examined the ink and paper of the letter that was supposedly written by the famous general? B: Their {{BLANK}} showed that the paper was made in a factory about fifty years after his death, so the letter must be a fake created by a clever collector.",
    "cn": "A：專家檢驗那封據說是名將所寫的信的墨水和紙張時發現了什麼？ B：他們的【分析】顯示，那張紙是在他死後大約五十年才在工廠製造的，所以這封信一定是某位精明收藏家偽造的。"
  },
  {
    "word": "reference",
    "pos": "n.",
    "cn_def": "參考；參考資料",
    "en_def": "the act of looking at a book or source for information; a source used this way",
    "sentence": "A: Can I borrow the large dictionary of historical place names from the library desk and take it home over the weekend? B: I'm sorry, but that book is for {{BLANK}} only, which means you can read it in the reading room or make copies of a few pages, but it cannot leave the building.",
    "cn": "A：我可以從圖書館櫃檯借那本大部頭的歷史地名辭典，週末帶回家嗎？ B：很抱歉，那本書僅供【參考】，也就是說你可以在閱覽室閱讀或影印幾頁，但不能帶出館外。"
  },
  {
    "word": "illustrated",
    "pos": "adj.",
    "cn_def": "有插圖的；圖解的",
    "en_def": "having pictures or drawings",
    "sentence": "A: Which book would you recommend as a gift for my nephew, who is ten years old and loves learning about pirates and ships? B: I'd choose the {{BLANK}} edition of the history of sailing, because it has colorful drawings and maps on almost every page, which make the stories much easier for children to follow.",
    "cn": "A：我十歲的姪子很喜歡學習海盜和船的知識，你會推薦哪本書當禮物？ B：我會選那本航海史的【插圖】版，因為幾乎每一頁都有彩色圖畫和地圖，讓孩子更容易理解書中的故事。"
  },
  {
    "word": "scholarly",
    "pos": "adj.",
    "cn_def": "學術的；學者的",
    "en_def": "related to serious academic study",
    "sentence": "A: Why did the publisher reject the history professor's book even though the topic was so interesting? B: The editors said the writing was too {{BLANK}} for ordinary readers, with long footnotes and difficult academic language, so they suggested she send it to a university press instead.",
    "cn": "A：為什麼出版社拒絕了那位歷史教授的書，即使主題這麼有趣？ B：編輯說內容寫得太【學術】，不適合一般讀者，有長長的註腳和艱深的學術用語，所以他們建議她改投大學出版社。"
  },
  {
    "word": "comprehensive",
    "pos": "adj.",
    "cn_def": "全面的；詳盡的",
    "en_def": "including everything or almost everything",
    "sentence": "A: Is there one book that covers the whole story of our country, from the earliest settlers to the present day? B: Yes, the national library just published a {{BLANK}} guide in five volumes that includes every major event, important person, and economic change, so many teachers already use it in their classes.",
    "cn": "A：有沒有一本書涵蓋我們國家的完整歷史，從最早的移民到現今？ B：有，國家圖書館剛出版了一套五冊的【全面】指南，收錄了每一個重大事件、重要人物和經濟變化，所以很多老師已經在課堂上使用。"
  }
];

const MCQS = [
  {
    "q": "The town newspaper kept a careful _____ of local events for over a century. Researchers now use it to study how the community changed.",
    "options": [
      "chronicle",
      "dynasty",
      "treaty",
      "artifact"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The law firm stores its older contracts in a secure _____ in the basement. Staff must sign a form before removing any files.",
    "options": [
      "empire",
      "archive",
      "warfare",
      "legacy"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The author sent the first _____ of her novel to three publishers last month. Two editors have already asked to see more chapters.",
    "options": [
      "treaty",
      "dynasty",
      "manuscript",
      "heritage"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The film is based on a popular _____ of the inventor written by a respected journalist. It describes his life from childhood to old age.",
    "options": [
      "timeline",
      "warfare",
      "artifact",
      "biography"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "After forty years as a pilot, Captain Lee wrote a _____ describing his own adventures. The book quickly became a bestseller at airport shops.",
    "options": [
      "memoir",
      "treaty",
      "dynasty",
      "archive"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Smartphones have brought us into a new _____ of instant communication. Few people today can imagine daily life without them.",
    "options": [
      "treaty",
      "era",
      "manuscript",
      "scholar"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The Maya built a great _____ with large cities, calendars, and advanced farming methods. Many of their stone temples still stand today.",
    "options": [
      "treaty",
      "timeline",
      "civilization",
      "memoir"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Through smart investments, the young businessman built a hotel _____ that now stretches across twelve countries. He started with one small inn.",
    "options": [
      "memoir",
      "chronicle",
      "manuscript",
      "empire"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The Ming _____ ruled China for nearly three hundred years. During that time, the Great Wall was greatly expanded and repaired.",
    "options": [
      "dynasty",
      "treaty",
      "narrative",
      "archive"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The arrival of online shopping caused a _____ in the retail industry. Many traditional stores had to change the way they sell products.",
    "options": [
      "heritage",
      "revolution",
      "manuscript",
      "scholar"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The documentary explains how _____ changed after airplanes were first used in battle. It includes rare film from the First World War.",
    "options": [
      "heritage",
      "research",
      "warfare",
      "reference"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "After months of talks, the two countries finally signed a peace _____ in Geneva. Both leaders shook hands in front of reporters.",
    "options": [
      "memoir",
      "archive",
      "timeline",
      "treaty"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The old government offices were built in a _____ style while the island was ruled by Britain. Tourists often photograph their white columns.",
    "options": [
      "colonial",
      "illustrated",
      "scholarly",
      "comprehensive"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The company held its annual party in a _____ castle built in the thirteenth century. Guests enjoyed dinner beneath the old stone towers.",
    "options": [
      "illustrated",
      "medieval",
      "primary",
      "comprehensive"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Archaeologists discovered _____ tools near the river that are about five thousand years old. The objects will be displayed at the national museum.",
    "options": [
      "illustrated",
      "scholarly",
      "ancient",
      "comprehensive"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "For her report, the student used _____ sources such as diaries and letters written during the war. Her teacher praised the strong evidence.",
    "options": [
      "medieval",
      "illustrated",
      "comprehensive",
      "primary"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The novel's _____ is told from the point of view of a young servant. Readers see the royal palace through her eyes.",
    "options": [
      "narrative",
      "archive",
      "treaty",
      "dynasty"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The witness gave the police a clear _____ of what happened during the robbery. Her description helped officers find the suspect quickly.",
    "options": [
      "dynasty",
      "account",
      "empire",
      "artifact"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Each student offered a different _____ of the poem's meaning during the class discussion. The teacher accepted any idea supported by the text.",
    "options": [
      "warfare",
      "heritage",
      "interpretation",
      "civilization"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Travelers must show proper _____ such as a passport and visa at the border. Without these papers, they will not be allowed to enter.",
    "options": [
      "interpretation",
      "warfare",
      "civilization",
      "documentation"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The project manager created a detailed _____ showing when each task must be completed. Everyone on the team received a copy by email.",
    "options": [
      "timeline",
      "dynasty",
      "heritage",
      "empire"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The old temple is an important part of the city's cultural _____. The government spends money every year to protect and repair it.",
    "options": [
      "warfare",
      "heritage",
      "analysis",
      "timeline"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Every _____ in the museum's new exhibit was found during construction of the subway line. Some of the objects are over a thousand years old.",
    "options": [
      "treaty",
      "scholar",
      "artifact",
      "memoir"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The famous scientist left a lasting _____ that still inspires young researchers today. Several schools around the country have been named after her.",
    "options": [
      "warfare",
      "timeline",
      "treaty",
      "legacy"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Professor Chen is a respected _____ who has studied Japanese history for over thirty years. Her university lectures are always fully booked.",
    "options": [
      "scholar",
      "treaty",
      "empire",
      "archive"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The company spent two years doing market _____ before launching its new product. The results showed strong demand among young adults.",
    "options": [
      "warfare",
      "research",
      "heritage",
      "civilization"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The financial team completed a careful _____ of last year's sales figures. It showed that online orders had doubled since the previous year.",
    "options": [
      "dynasty",
      "memoir",
      "analysis",
      "treaty"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Please keep this printer manual on your desk for future _____. It explains how to solve the most common problems in the office.",
    "options": [
      "warfare",
      "heritage",
      "civilization",
      "reference"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The children's book about ancient Egypt is beautifully _____ with colorful drawings of pyramids. Young readers love looking at the pictures.",
    "options": [
      "illustrated",
      "colonial",
      "medieval",
      "scholarly"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The new employee handbook provides a _____ guide to all company rules and benefits. It covers everything from vacation days to health insurance.",
    "options": [
      "medieval",
      "comprehensive",
      "colonial",
      "ancient"
    ],
    "answer": 1,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "history": {
    "pos": "n.",
    "en_def": "the study or story of past events",
    "cn_def": "歷史；歷史學"
  },
  "chronicle": {
    "pos": "n.",
    "en_def": "a written record of events in the order they happened",
    "cn_def": "編年史；紀事"
  },
  "archive": {
    "pos": "n.",
    "en_def": "a place where old records and documents are kept",
    "cn_def": "檔案館；檔案室"
  },
  "manuscript": {
    "pos": "n.",
    "en_def": "a book or document written by hand or not yet printed",
    "cn_def": "手稿；原稿"
  },
  "biography": {
    "pos": "n.",
    "en_def": "the story of a person's life written by someone else",
    "cn_def": "傳記"
  },
  "memoir": {
    "pos": "n.",
    "en_def": "a book a person writes about their own life and experiences",
    "cn_def": "回憶錄"
  },
  "era": {
    "pos": "n.",
    "en_def": "a long period of time with a special character",
    "cn_def": "時代；年代"
  },
  "period": {
    "pos": "n.",
    "en_def": "a length of time in history",
    "cn_def": "時期；期間"
  },
  "civilization": {
    "pos": "n.",
    "en_def": "a developed society with its own culture and way of life",
    "cn_def": "文明"
  },
  "empire": {
    "pos": "n.",
    "en_def": "a group of countries ruled by one leader or government; a large group of businesses",
    "cn_def": "帝國；（商業）王國"
  },
  "dynasty": {
    "pos": "n.",
    "en_def": "a series of rulers from the same family",
    "cn_def": "王朝；朝代"
  },
  "revolution": {
    "pos": "n.",
    "en_def": "a big change in a government or in the way things are done",
    "cn_def": "革命；巨大變革"
  },
  "warfare": {
    "pos": "n.",
    "en_def": "fighting in a war; the methods used in war",
    "cn_def": "戰爭；作戰方式"
  },
  "treaty": {
    "pos": "n.",
    "en_def": "a formal written agreement between countries",
    "cn_def": "條約"
  },
  "colonial": {
    "pos": "adj.",
    "en_def": "relating to a time when one country ruled another country",
    "cn_def": "殖民的；殖民時期的"
  },
  "medieval": {
    "pos": "adj.",
    "en_def": "relating to the Middle Ages, about 500 to 1500",
    "cn_def": "中世紀的"
  },
  "ancient": {
    "pos": "adj.",
    "en_def": "very old; from a very long time ago",
    "cn_def": "古代的；古老的"
  },
  "primary": {
    "pos": "adj.",
    "en_def": "first-hand; made at the time of the event; main",
    "cn_def": "第一手的；主要的"
  },
  "secondary": {
    "pos": "adj.",
    "en_def": "based on other people's work, not first-hand; less important",
    "cn_def": "第二手的；次要的"
  },
  "narrative": {
    "pos": "n.",
    "en_def": "a story or description of events",
    "cn_def": "敘事；故事"
  },
  "account": {
    "pos": "n.",
    "en_def": "a written or spoken description of an event",
    "cn_def": "描述；記述"
  },
  "interpretation": {
    "pos": "n.",
    "en_def": "an explanation of the meaning of something",
    "cn_def": "解讀；詮釋"
  },
  "documentation": {
    "pos": "n.",
    "en_def": "written records or papers that prove or support something",
    "cn_def": "文件記錄；證明文件"
  },
  "timeline": {
    "pos": "n.",
    "en_def": "a list or line showing events in the order they happened",
    "cn_def": "時間軸；年表；時程表"
  },
  "heritage": {
    "pos": "n.",
    "en_def": "the history, traditions, and buildings a country or group has from the past",
    "cn_def": "遺產；傳統文化"
  },
  "artifact": {
    "pos": "n.",
    "en_def": "an object made by people long ago that has historical interest",
    "cn_def": "文物；手工藝品"
  },
  "legacy": {
    "pos": "n.",
    "en_def": "something that a person leaves behind for people in the future",
    "cn_def": "遺產；留下的影響"
  },
  "context": {
    "pos": "n.",
    "en_def": "the situation or background in which something happens",
    "cn_def": "背景；脈絡"
  },
  "scholar": {
    "pos": "n.",
    "en_def": "a person who studies a subject deeply, especially at a university",
    "cn_def": "學者"
  },
  "research": {
    "pos": "n.",
    "en_def": "careful study to discover new facts",
    "cn_def": "研究"
  },
  "analysis": {
    "pos": "n.",
    "en_def": "a careful study of something to understand it",
    "cn_def": "分析"
  },
  "reference": {
    "pos": "n.",
    "en_def": "the act of looking at a book or source for information; a source used this way",
    "cn_def": "參考；參考資料"
  },
  "illustrated": {
    "pos": "adj.",
    "en_def": "having pictures or drawings",
    "cn_def": "有插圖的；圖解的"
  },
  "scholarly": {
    "pos": "adj.",
    "en_def": "related to serious academic study",
    "cn_def": "學術的；學者的"
  },
  "comprehensive": {
    "pos": "adj.",
    "en_def": "including everything or almost everything",
    "cn_def": "全面的；詳盡的"
  }
};

const EXTRA_GLOSSES = {};
