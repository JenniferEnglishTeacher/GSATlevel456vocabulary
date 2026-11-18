// Topic 375 Quiz Data: Story 故事
// Source word list: https://www.examword.com/group-topic/story — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T375 - Story 故事",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "plot",
    "pos": "n.",
    "cn_def": "情節",
    "en_def": "the main events of a story",
    "sentence": "A: Why did the marketing team choose this novel for the company book club, and do you think the new employees will enjoy reading it? B: They chose it because the {{BLANK}} is exciting from the first page, with a young manager who discovers a secret at her firm, so even busy staff will want to finish it quickly.",
    "cn": "A：為什麼行銷團隊選這本小說作為公司讀書會的書？你覺得新員工會喜歡讀嗎？ B：他們選它是因為這本書的【情節】從第一頁就很精彩，講述一位年輕經理在公司發現了一個秘密，所以即使是忙碌的員工也會想很快讀完。"
  },
  {
    "word": "character",
    "pos": "n.",
    "cn_def": "角色；人物",
    "en_def": "a person in a story, film, or play",
    "sentence": "A: Have you finished reading the script for the new training video, and what do you think about the people in it? B: Yes, I read it last night, and my favorite {{BLANK}} is the friendly receptionist who helps every visitor, because she shows our staff exactly how to treat customers politely and patiently.",
    "cn": "A：你看完新訓練影片的腳本了嗎？你覺得裡面的人物怎麼樣？ B：看完了，我昨晚讀的，我最喜歡的【角色】是那位幫助每位訪客的親切接待員，因為她清楚示範了員工應該如何有禮貌又有耐心地對待顧客。"
  },
  {
    "word": "setting",
    "pos": "n.",
    "cn_def": "背景；場景",
    "en_def": "the time and place where a story happens",
    "sentence": "A: Where does the new mystery series take place, and will the production company need to travel overseas to film it next spring? B: The {{BLANK}} is a small fishing town in Scotland in the 1950s, so the crew will spend three months there building old shops and finding costumes for the actors.",
    "cn": "A：新的推理影集故事發生在哪裡？製作公司明年春天需要出國拍攝嗎？ B：故事的【背景】是一九五〇年代蘇格蘭的一個小漁村，所以工作人員將在那裡待三個月，搭建老式商店並為演員尋找戲服。"
  },
  {
    "word": "theme",
    "pos": "n.",
    "cn_def": "主題",
    "en_def": "the main idea or message of a story",
    "sentence": "A: What message did the author want to share in her new book, and why are so many companies buying copies for their employees? B: The main {{BLANK}} is teamwork, because the story shows how a group of ordinary workers solve a big problem together, and managers believe it will encourage their staff to cooperate.",
    "cn": "A：作者想在她的新書中傳達什麼訊息？為什麼這麼多公司為員工購買這本書？ B：主要【主題】是團隊合作，因為故事描述一群普通員工如何一起解決大問題，經理們相信這能鼓勵員工互相合作。"
  },
  {
    "word": "conflict",
    "pos": "n.",
    "cn_def": "衝突",
    "en_def": "a struggle or problem between characters",
    "sentence": "A: Why does the second half of the play feel so much more exciting than the first half, according to the reviews in this morning's newspaper? B: The reviewers say that the {{BLANK}} between the two business partners finally becomes serious after the intermission, when they argue about selling the family company to a large foreign corporation.",
    "cn": "A：根據今天早報的評論，為什麼這齣戲的下半場比上半場刺激許多？ B：評論家說，兩位事業夥伴之間的【衝突】在中場休息後終於變得嚴重，他們為了是否把家族企業賣給一家大型外國公司而爭吵。"
  },
  {
    "word": "climax",
    "pos": "n.",
    "cn_def": "高潮",
    "en_def": "the most exciting or important part of a story",
    "sentence": "A: Did you enjoy the movie that the company showed at the staff party on Friday evening, or did you leave early to catch your train? B: I stayed until the end, and the {{BLANK}} was amazing, when the young engineer finally saved the factory from the fire just seconds before the whole building exploded.",
    "cn": "A：你喜歡公司在週五晚上員工派對上播放的電影嗎？還是你為了趕火車提早離開了？ B：我待到最後，電影的【高潮】很精彩，年輕工程師終於在整棟建築爆炸前幾秒鐘把工廠從大火中救了出來。"
  },
  {
    "word": "ending",
    "pos": "n.",
    "cn_def": "結局",
    "en_def": "the last part of a story",
    "sentence": "A: Why are so many readers writing angry comments on the publisher's website about the final book in the popular detective series? B: They are upset because the {{BLANK}} is very sad, and the famous detective leaves the city forever, so many fans feel that the author did not give them the happy conclusion they wanted.",
    "cn": "A：為什麼這麼多讀者在出版社網站上對這套熱門偵探系列的最後一本書留下憤怒的評論？ B：他們很不高興，因為【結局】非常悲傷，那位知名偵探永遠離開了城市，許多書迷覺得作者沒有給他們想要的快樂收場。"
  },
  {
    "word": "beginning",
    "pos": "n.",
    "cn_def": "開頭；開端",
    "en_def": "the first part of a story",
    "sentence": "A: Should I keep reading the novel that my manager lent me, even though I found the first few chapters a little boring last weekend? B: Yes, you should, because the {{BLANK}} is slow while the author introduces the family and their small bakery, but the story becomes much more interesting once the business starts to fail.",
    "cn": "A：我應該繼續讀經理借我的那本小說嗎？雖然上週末我覺得前幾章有點無聊。 B：是的，你應該繼續，因為作者在介紹那個家庭和他們的小麵包店時，【開頭】比較慢，但一旦生意開始失敗，故事就變得有趣多了。"
  },
  {
    "word": "narrator",
    "pos": "n.",
    "cn_def": "敘述者；旁白",
    "en_def": "the person who tells the story",
    "sentence": "A: Who is going to read the story aloud in the audiobook version that our publishing company is producing for international customers this year? B: We have hired a well-known actor as the {{BLANK}}, because his clear voice and calm style will help listeners who are learning English follow every event in the book easily.",
    "cn": "A：我們出版公司今年為國際顧客製作的有聲書版本，要由誰來朗讀故事？ B：我們請了一位知名演員擔任【旁白】，因為他清晰的聲音和沉穩的風格能幫助正在學英文的聽眾輕鬆跟上書中的每個情節。"
  },
  {
    "word": "dialogue",
    "pos": "n.",
    "cn_def": "對話",
    "en_def": "the words that characters say to each other",
    "sentence": "A: What changes did the director ask you to make to the script before the actors start rehearsing on Monday morning at the studio? B: She asked me to make the {{BLANK}} sound more natural, because the conversations between the two coworkers were too formal, and real people in an office would speak in a more relaxed way.",
    "cn": "A：導演要求你在演員週一早上到攝影棚排練之前，對劇本做哪些修改？ B：她要我讓【對話】聽起來更自然，因為兩位同事之間的交談太正式了，辦公室裡的真人說話會更輕鬆隨意。"
  },
  {
    "word": "scene",
    "pos": "n.",
    "cn_def": "場景；一幕",
    "en_def": "one part of a play or film that happens in one place",
    "sentence": "A: Why is the film crew still working at the train station so late tonight, when they told the manager they would finish by six o'clock? B: They are filming one more {{BLANK}}, in which the main actor says goodbye to his daughter on the platform, and the director wants to repeat it until the lighting is perfect.",
    "cn": "A：為什麼攝影團隊今晚還在火車站工作到這麼晚？他們明明告訴站長六點前會結束。 B：他們還在拍最後一個【場景】，主角在月台上和女兒道別，導演想一直重拍直到燈光完美為止。"
  },
  {
    "word": "chapter",
    "pos": "n.",
    "cn_def": "章；章節",
    "en_def": "one of the main parts of a book",
    "sentence": "A: How much of the company history book have you finished writing, and will it be ready before the anniversary celebration in December? B: I have finished the first {{BLANK}}, which describes how the founder opened a tiny shop in 1985, but I still need to interview several retired employees before I can write the rest.",
    "cn": "A：公司歷史書你寫完多少了？十二月的週年慶祝活動前能完成嗎？ B：我已經寫完第一【章】，內容描述創辦人在一九八五年如何開了一家小店，但我還需要訪問幾位退休員工才能寫剩下的部分。"
  },
  {
    "word": "twist",
    "pos": "n.",
    "cn_def": "轉折；意外發展",
    "en_def": "a sudden, surprising change in a story",
    "sentence": "A: Why did everyone in the audience gasp near the end of the play that the theater club performed at the community center last night? B: There was a surprising {{BLANK}} when the quiet assistant turned out to be the real owner of the hotel, and nobody had guessed it, not even the people who had read the script.",
    "cn": "A：昨晚劇團在社區中心演出的那齣戲快結束時，為什麼全場觀眾都倒抽一口氣？ B：劇情出現了一個令人驚訝的【轉折】，那位安靜的助理原來才是飯店真正的老闆，沒有人猜到，連讀過劇本的人也沒想到。"
  },
  {
    "word": "fiction",
    "pos": "n.",
    "cn_def": "小說；虛構作品",
    "en_def": "stories about imaginary people and events",
    "sentence": "A: Which section of the bookstore should we move to the front of the shop for the holiday sale, since the business books are not selling well? B: I think we should move {{BLANK}} to the front, because novels about imaginary families and adventures are popular gifts in December, and customers often buy several at once.",
    "cn": "A：既然商業類書籍賣得不好，假期特賣時我們應該把書店的哪一區移到店面前方？ B：我認為應該把【小說】區移到前面，因為描寫虛構家庭和冒險的小說是十二月很受歡迎的禮物，顧客常常一次買好幾本。"
  },
  {
    "word": "nonfiction",
    "pos": "n.",
    "cn_def": "非小說；紀實文學",
    "en_def": "writing about real facts, people, and events",
    "sentence": "A: What kind of books does the new library manager want to buy for the employee reading room on the third floor of our office? B: She wants to buy more {{BLANK}}, such as biographies of successful business leaders and true stories about famous companies, because staff can learn useful lessons from real events and real people.",
    "cn": "A：新的圖書館管理員想為我們辦公室三樓的員工閱覽室購買哪一類書？ B：她想多買一些【非小說類】書籍，例如成功企業領袖的傳記和知名公司的真實故事，因為員工能從真實事件和真實人物身上學到有用的經驗。"
  },
  {
    "word": "legend",
    "pos": "n.",
    "cn_def": "傳說",
    "en_def": "an old story that may or may not be true",
    "sentence": "A: Why is the tour guide taking our group to that old bridge outside the village before we visit the factory this afternoon? B: According to a local {{BLANK}}, a brave farmer built the bridge in one night to save his town from a flood, and tourists always want to take photos there and hear the story.",
    "cn": "A：今天下午參觀工廠之前，導遊為什麼要帶我們這團去村外那座古老的橋？ B：根據當地的一個【傳說】，一位勇敢的農夫在一夜之間建造了這座橋，拯救他的城鎮免於洪水，遊客總是想在那裡拍照並聽聽這個故事。"
  },
  {
    "word": "myth",
    "pos": "n.",
    "cn_def": "神話",
    "en_def": "an ancient story about gods or heroes",
    "sentence": "A: What is the new children's museum exhibition about, and do you think it will attract more families during the summer vacation this year? B: It is about an ancient Greek {{BLANK}} in which gods and monsters fight over the sea, and the designers have added colorful games and videos, so I expect it to be very popular.",
    "cn": "A：兒童博物館的新展覽是關於什麼的？你覺得今年暑假會吸引更多家庭嗎？ B：它是關於一個古希臘【神話】，故事中眾神和怪物爭奪大海，設計師還加入了色彩繽紛的遊戲和影片，所以我預期會非常受歡迎。"
  },
  {
    "word": "fairy tale",
    "pos": "n.phr.",
    "cn_def": "童話故事",
    "en_def": "a traditional children's story with magic",
    "sentence": "A: What will the volunteers from our company read to the children at the hospital when they visit next Saturday afternoon? B: They plan to read a classic {{BLANK}} about a poor girl, a kind witch, and a magic pumpkin, because the young patients love stories with princesses, castles, and happy endings.",
    "cn": "A：我們公司的志工下週六下午去醫院探訪時，要唸什麼給孩子們聽？ B：他們打算唸一個經典的【童話故事】，內容是一個貧窮女孩、一位善良的女巫和一顆魔法南瓜，因為年幼的病童喜歡有公主、城堡和快樂結局的故事。"
  },
  {
    "word": "fable",
    "pos": "n.",
    "cn_def": "寓言",
    "en_def": "a short story, often about animals, that teaches a lesson",
    "sentence": "A: How did the trainer begin the workshop on time management that all new sales staff had to attend yesterday morning? B: She began by telling a short {{BLANK}} about a slow turtle and a fast rabbit, and then she explained that steady work every day is often more effective than rushing at the last minute.",
    "cn": "A：昨天早上所有新進業務人員都必須參加的時間管理工作坊，講師是怎麼開場的？ B：她先講了一則關於慢烏龜和快兔子的簡短【寓言】，然後解釋每天穩定地工作往往比在最後一刻趕工更有效。"
  },
  {
    "word": "moral",
    "pos": "n.",
    "cn_def": "寓意；教訓",
    "en_def": "the lesson that a story teaches",
    "sentence": "A: Why does the manager tell the same story about the honest shopkeeper at every training session for new customer service staff? B: She tells it because the {{BLANK}} of the story is that honesty always builds trust, and she wants every new employee to remember that lesson whenever they deal with an unhappy customer.",
    "cn": "A：為什麼經理在每次新進客服人員的訓練課程中，都講同一個關於誠實店主的故事？ B：她講這個故事是因為它的【寓意】是誠實總能建立信任，她希望每位新員工在面對不滿的顧客時都能記住這個教訓。"
  },
  {
    "word": "adventure",
    "pos": "n.",
    "cn_def": "冒險",
    "en_def": "an exciting or unusual experience or journey",
    "sentence": "A: What kind of movie should we show at the family day event that the company is holding in the park next month? B: I think an {{BLANK}} film would be best, maybe one about explorers searching for treasure in the jungle, because both children and parents enjoy exciting journeys and brave heroes.",
    "cn": "A：公司下個月在公園舉辦的家庭日活動，我們應該播放哪種電影？ B：我覺得【冒險】片最好，也許是一部關於探險家在叢林中尋寶的電影，因為孩子和家長都喜歡刺激的旅程和勇敢的英雄。"
  },
  {
    "word": "mystery",
    "pos": "n.",
    "cn_def": "推理小說；懸疑故事",
    "en_def": "a story about a crime or secret that must be solved",
    "sentence": "A: What are you reading on the train every morning, since you always look so surprised when you turn the pages? B: It is a {{BLANK}} novel about a missing painting at a London hotel, and I keep trying to guess which guest stole it, but the author gives new clues in every chapter.",
    "cn": "A：你每天早上在火車上讀什麼？你翻頁時總是一臉驚訝的樣子。 B：那是一本【推理】小說，講的是倫敦一家飯店裡一幅失蹤的畫，我一直試著猜是哪位房客偷的，但作者每一章都會給出新的線索。"
  },
  {
    "word": "romance",
    "pos": "n.",
    "cn_def": "愛情故事",
    "en_def": "a story about love",
    "sentence": "A: Why did the publishing company decide to print twice as many copies of Ms. Lee's new book before Valentine's Day this year? B: Her last {{BLANK}} about two coworkers who fall in love during a business trip sold very well, and the sales team expects even more readers to buy this new love story as a gift.",
    "cn": "A：為什麼出版公司決定在今年情人節前，把李小姐新書的印量增加一倍？ B：她上一本關於兩位同事在出差期間墜入愛河的【愛情小說】賣得非常好，業務團隊預期會有更多讀者買這本新的愛情故事當禮物。"
  },
  {
    "word": "tragedy",
    "pos": "n.",
    "cn_def": "悲劇",
    "en_def": "a serious play or story with a sad ending",
    "sentence": "A: Is the play at the City Theater suitable for our clients on Friday night, or should we choose something lighter and more cheerful? B: It might be too heavy, because it is a {{BLANK}} in which the main character loses his family and his business, and most people leave the theater feeling very sad.",
    "cn": "A：市立劇院的這齣戲適合週五晚上招待我們的客戶嗎？還是我們應該選擇輕鬆愉快一點的？ B：可能太沉重了，因為那是一齣【悲劇】，主角失去了家人和事業，大部分觀眾離開劇院時都感到非常悲傷。"
  },
  {
    "word": "comedy",
    "pos": "n.",
    "cn_def": "喜劇",
    "en_def": "a funny play, film, or story",
    "sentence": "A: What did you think of the show that the hotel arranged for the conference guests after dinner on the last night of the event? B: It was a {{BLANK}} about a confused waiter who keeps bringing the wrong food to the tables, and everyone laughed so much that the actors had to stop and wait several times.",
    "cn": "A：你覺得飯店在活動最後一晚晚餐後為與會來賓安排的表演怎麼樣？ B：那是一齣【喜劇】，講一位糊塗的服務生不斷把錯的菜送到各桌，大家笑得很厲害，演員好幾次都得停下來等待。"
  },
  {
    "word": "hero",
    "pos": "n.",
    "cn_def": "英雄；男主角",
    "en_def": "the main good character who does brave things",
    "sentence": "A: Why do so many young employees love the new animated movie that everyone in the design department keeps talking about this week? B: They love it because the {{BLANK}} is an ordinary delivery driver who saves the city with courage and kindness, and many workers feel that he is just like them.",
    "cn": "A：為什麼設計部門這週大家一直在談論的那部新動畫電影，這麼多年輕員工都很喜歡？ B：他們喜歡是因為片中的【英雄】是一位普通的送貨司機，他憑著勇氣與善良拯救了城市，許多員工覺得他就跟自己一樣。"
  },
  {
    "word": "villain",
    "pos": "n.",
    "cn_def": "反派；壞人",
    "en_def": "the bad character in a story",
    "sentence": "A: How did the young actor feel about playing the dishonest bank manager in the new TV drama that started last month? B: He enjoyed playing the {{BLANK}}, even though some viewers sent him angry messages online, because he thinks that a strong bad character makes the whole story more exciting for the audience.",
    "cn": "A：那位年輕演員對於在上個月開播的新電視劇中飾演不誠實的銀行經理，感覺如何？ B：他很享受飾演【反派】，雖然有些觀眾在網路上傳給他憤怒的訊息，因為他認為一個有力的壞角色會讓整個故事對觀眾來說更刺激。"
  },
  {
    "word": "protagonist",
    "pos": "n.",
    "cn_def": "主角",
    "en_def": "the main character in a story",
    "sentence": "A: Who is the main person in the novel that the human resources department chose for this year's reading challenge for all employees? B: The {{BLANK}} is a shy accountant who moves to Tokyo for a new job, and readers follow her as she learns the language, makes friends, and becomes a confident team leader.",
    "cn": "A：人資部門為今年全體員工閱讀挑戰所選的小說中，主要人物是誰？ B：【主角】是一位害羞的會計師，她為了新工作搬到東京，讀者跟著她學習語言、結交朋友，並成為一位自信的團隊領導者。"
  },
  {
    "word": "antagonist",
    "pos": "n.",
    "cn_def": "對手；反派角色",
    "en_def": "the character who works against the main character",
    "sentence": "A: Why is the jealous coworker in the play so important, even though she only appears in three short scenes during the whole performance? B: She is the {{BLANK}}, so she creates problems for the main character by stealing his ideas, and without her there would be no struggle and no reason for him to change.",
    "cn": "A：為什麼劇中那位善妒的同事這麼重要？她在整場演出中只出現在三個短場景裡。 B：她是【對手角色】，所以她藉由竊取主角的點子來為他製造問題，沒有她就沒有衝突，主角也沒有改變的理由。"
  },
  {
    "word": "flashback",
    "pos": "n.",
    "cn_def": "倒敘；回憶片段",
    "en_def": "a part of a story that shows events from the past",
    "sentence": "A: I was confused by the middle of the film last night, because the main actor suddenly looked twenty years younger; did you understand what happened? B: Yes, that part was a {{BLANK}} showing his childhood on his grandfather's farm, and it explains why he later decided to leave his city job and become a farmer.",
    "cn": "A：昨晚那部電影的中段讓我很困惑，因為主角突然看起來年輕了二十歲，你看懂發生什麼事了嗎？ B：看懂了，那段是【倒敘】，呈現他在祖父農場的童年，也解釋了為什麼他後來決定辭去城市的工作去當農夫。"
  },
  {
    "word": "suspense",
    "pos": "n.",
    "cn_def": "懸疑；緊張感",
    "en_def": "a nervous, excited feeling while waiting to find out what happens",
    "sentence": "A: Why did the director wait until the last five minutes of the movie to show the face of the thief who stole the company's secret files? B: She wanted to keep the {{BLANK}} until the very end, so the audience would stay nervous and curious, and nobody would leave their seat before discovering who the thief was.",
    "cn": "A：為什麼導演等到電影最後五分鐘才揭露偷走公司機密檔案的小偷長相？ B：她想把【懸疑感】保持到最後一刻，讓觀眾一直緊張又好奇，在發現小偷是誰之前沒有人會離開座位。"
  },
  {
    "word": "narrative",
    "pos": "n.",
    "cn_def": "敘事；故事",
    "en_def": "a story or an account of events",
    "sentence": "A: What did the investors think of the presentation that our marketing director gave about the company's history at the meeting this morning? B: They liked it a lot, because she told a clear {{BLANK}} about how the business grew from a small garage workshop into an international brand, and the story made our numbers more memorable.",
    "cn": "A：投資人對我們行銷總監今天早上在會議上關於公司歷史的簡報有什麼看法？ B：他們非常喜歡，因為她清楚地講述了一段公司如何從一間小車庫工作室成長為國際品牌的【敘事】，這個故事讓我們的數據更令人難忘。"
  },
  {
    "word": "description",
    "pos": "n.",
    "cn_def": "描述；描寫",
    "en_def": "words that tell what something or someone is like",
    "sentence": "A: Why do readers say that the author's new travel novel makes them want to book a holiday in Portugal as soon as possible? B: Her {{BLANK}} of the sunny beaches, small cafés, and friendly local markets is so detailed and beautiful that readers feel as if they are walking through the streets themselves.",
    "cn": "A：為什麼讀者說作者的新旅遊小說讓他們想盡快預訂去葡萄牙的假期？ B：她對陽光海灘、小咖啡館和親切的當地市場的【描寫】非常細膩優美，讓讀者覺得彷彿自己正走在那些街道上。"
  },
  {
    "word": "imagination",
    "pos": "n.",
    "cn_def": "想像力",
    "en_def": "the ability to form pictures and ideas in your mind",
    "sentence": "A: How did the children's book writer create such an amazing world with flying trains and talking trees for her popular new series? B: She says she used her {{BLANK}} and memories of her childhood, and she also spent many afternoons drawing pictures with her young nieces, who gave her lots of funny and creative ideas.",
    "cn": "A：那位童書作家是如何為她熱門的新系列創造出有會飛的火車和會說話的樹這樣奇妙的世界？ B：她說她運用了自己的【想像力】和童年回憶，也花了許多個下午和年幼的姪女們一起畫畫，她們給了她很多有趣又有創意的點子。"
  }
];

const MCQS = [
  {
    "q": "The movie had famous actors and beautiful music. However, critics said the _____ was too confusing to follow.",
    "options": [
      "villain",
      "plot",
      "chapter",
      "narrator"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Readers love the novel's main _____, a brave nurse named Emma. She appears on almost every page of the book.",
    "options": [
      "setting",
      "theme",
      "climax",
      "character"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The film's _____ is a busy hospital in New York in 1920. Every scene was shot inside an old building downtown.",
    "options": [
      "setting",
      "moral",
      "dialogue",
      "twist"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The central _____ of the novel is friendship. Every chapter shows how true friends support each other in hard times.",
    "options": [
      "narrator",
      "theme",
      "scene",
      "villain"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The story becomes interesting when a _____ develops between the two brothers. They disagree about how to run the family hotel.",
    "options": [
      "chapter",
      "fable",
      "setting",
      "conflict"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The _____ of the play comes in the final act. That is when the detective finally reveals who stole the diamonds.",
    "options": [
      "climax",
      "beginning",
      "narrator",
      "legend"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Many fans were disappointed by the movie's sad _____. They had hoped the two main characters would finally be together.",
    "options": [
      "setting",
      "narrator",
      "ending",
      "fiction"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The _____ of the novel is slow and quiet. Things only become exciting after the first fifty pages of the book.",
    "options": [
      "climax",
      "beginning",
      "ending",
      "moral"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The story is told by an old fisherman who acts as the _____. His calm voice guides listeners through every event.",
    "options": [
      "narrator",
      "villain",
      "climax",
      "setting"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The script's _____ sounds very natural and relaxed. The characters speak just like real people in a busy office.",
    "options": [
      "setting",
      "climax",
      "dialogue",
      "fable"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The director filmed the final _____ at the airport yesterday. It shows the hero saying goodbye to his family at the gate.",
    "options": [
      "chapter",
      "scene",
      "moral",
      "theme"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The training manual is divided into ten parts. The first _____ is only twelve pages long and explains basic safety rules.",
    "options": [
      "climax",
      "moral",
      "legend",
      "chapter"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The novel has a surprising _____ near the end. The kind old teacher turns out to be the thief everyone was looking for.",
    "options": [
      "twist",
      "setting",
      "narrator",
      "fable"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Although the story feels very real, it is a work of _____. The author invented every person and event in it.",
    "options": [
      "nonfiction",
      "comedy",
      "legend",
      "fiction"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The bookstore's _____ section includes biographies and history books. Every title there is based on real facts and events.",
    "options": [
      "fiction",
      "romance",
      "nonfiction",
      "mystery"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "According to local _____, a dragon once lived in the lake near the village. Tourists still look for it today.",
    "options": [
      "comedy",
      "legend",
      "narrator",
      "chapter"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The museum's new exhibit is based on an ancient Greek _____. It tells how the god of the sea created the first horse.",
    "options": [
      "narrator",
      "flashback",
      "villain",
      "myth"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "My daughter's favorite bedtime story is a _____ about a princess and a magic frog. She asks me to read it every night.",
    "options": [
      "fairy tale",
      "tragedy",
      "nonfiction",
      "flashback"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Aesop's famous _____ about the ant and the grasshopper teaches children to work hard. The animals in it can talk.",
    "options": [
      "tragedy",
      "fable",
      "flashback",
      "narrator"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The _____ of the story is simple: hard work pays off. Teachers often use it to encourage their students.",
    "options": [
      "moral",
      "setting",
      "climax",
      "villain"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The film follows three friends on an exciting _____ through the Amazon jungle. Children and adults will both enjoy it.",
    "options": [
      "tragedy",
      "description",
      "narrator",
      "adventure"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The detective novel is a classic murder _____. Readers must guess who killed the hotel owner before the last page.",
    "options": [
      "mystery",
      "flashback",
      "fable",
      "romance"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The film is a sweet _____ about two strangers who fall in love on a train. It will be released on Valentine's Day.",
    "options": [
      "tragedy",
      "legend",
      "romance",
      "myth"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Shakespeare's play Hamlet is a famous _____. Almost every main character dies by the end of the story.",
    "options": [
      "tragedy",
      "comedy",
      "fable",
      "romance"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The audience laughed from start to finish at the new _____. It is the funniest show in the city this year.",
    "options": [
      "tragedy",
      "mystery",
      "comedy",
      "legend"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "In the movie, the _____ saves the passengers from a burning plane. Everyone in the theater cheered loudly for him.",
    "options": [
      "villain",
      "hero",
      "narrator",
      "antagonist"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The _____ in the film tries to steal money from a children's hospital. Audiences love to hate this evil character.",
    "options": [
      "hero",
      "narrator",
      "villain",
      "protagonist"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The _____ of the novel is a young doctor named Sam. The whole story follows his first year at a busy hospital.",
    "options": [
      "antagonist",
      "fable",
      "setting",
      "protagonist"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "In the story, the jealous manager is the main _____. She keeps creating problems for the hero at every step.",
    "options": [
      "protagonist",
      "antagonist",
      "narrator",
      "theme"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The film suddenly shows the hero as a little boy. This _____ explains why he is afraid of deep water.",
    "options": [
      "climax",
      "theme",
      "flashback",
      "legend"
    ],
    "answer": 2,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "plot": {
    "pos": "n.",
    "en_def": "the main events of a story",
    "cn_def": "情節"
  },
  "character": {
    "pos": "n.",
    "en_def": "a person in a story, film, or play",
    "cn_def": "角色；人物"
  },
  "setting": {
    "pos": "n.",
    "en_def": "the time and place where a story happens",
    "cn_def": "背景；場景"
  },
  "theme": {
    "pos": "n.",
    "en_def": "the main idea or message of a story",
    "cn_def": "主題"
  },
  "conflict": {
    "pos": "n.",
    "en_def": "a struggle or problem between characters",
    "cn_def": "衝突"
  },
  "climax": {
    "pos": "n.",
    "en_def": "the most exciting or important part of a story",
    "cn_def": "高潮"
  },
  "ending": {
    "pos": "n.",
    "en_def": "the last part of a story",
    "cn_def": "結局"
  },
  "beginning": {
    "pos": "n.",
    "en_def": "the first part of a story",
    "cn_def": "開頭；開端"
  },
  "narrator": {
    "pos": "n.",
    "en_def": "the person who tells the story",
    "cn_def": "敘述者；旁白"
  },
  "dialogue": {
    "pos": "n.",
    "en_def": "the words that characters say to each other",
    "cn_def": "對話"
  },
  "scene": {
    "pos": "n.",
    "en_def": "one part of a play or film that happens in one place",
    "cn_def": "場景；一幕"
  },
  "chapter": {
    "pos": "n.",
    "en_def": "one of the main parts of a book",
    "cn_def": "章；章節"
  },
  "twist": {
    "pos": "n.",
    "en_def": "a sudden, surprising change in a story",
    "cn_def": "轉折；意外發展"
  },
  "fiction": {
    "pos": "n.",
    "en_def": "stories about imaginary people and events",
    "cn_def": "小說；虛構作品"
  },
  "nonfiction": {
    "pos": "n.",
    "en_def": "writing about real facts, people, and events",
    "cn_def": "非小說；紀實文學"
  },
  "legend": {
    "pos": "n.",
    "en_def": "an old story that may or may not be true",
    "cn_def": "傳說"
  },
  "myth": {
    "pos": "n.",
    "en_def": "an ancient story about gods or heroes",
    "cn_def": "神話"
  },
  "fairy tale": {
    "pos": "n.phr.",
    "en_def": "a traditional children's story with magic",
    "cn_def": "童話故事"
  },
  "fable": {
    "pos": "n.",
    "en_def": "a short story, often about animals, that teaches a lesson",
    "cn_def": "寓言"
  },
  "moral": {
    "pos": "n.",
    "en_def": "the lesson that a story teaches",
    "cn_def": "寓意；教訓"
  },
  "adventure": {
    "pos": "n.",
    "en_def": "an exciting or unusual experience or journey",
    "cn_def": "冒險"
  },
  "mystery": {
    "pos": "n.",
    "en_def": "a story about a crime or secret that must be solved",
    "cn_def": "推理小說；懸疑故事"
  },
  "romance": {
    "pos": "n.",
    "en_def": "a story about love",
    "cn_def": "愛情故事"
  },
  "tragedy": {
    "pos": "n.",
    "en_def": "a serious play or story with a sad ending",
    "cn_def": "悲劇"
  },
  "comedy": {
    "pos": "n.",
    "en_def": "a funny play, film, or story",
    "cn_def": "喜劇"
  },
  "hero": {
    "pos": "n.",
    "en_def": "the main good character who does brave things",
    "cn_def": "英雄；男主角"
  },
  "villain": {
    "pos": "n.",
    "en_def": "the bad character in a story",
    "cn_def": "反派；壞人"
  },
  "protagonist": {
    "pos": "n.",
    "en_def": "the main character in a story",
    "cn_def": "主角"
  },
  "antagonist": {
    "pos": "n.",
    "en_def": "the character who works against the main character",
    "cn_def": "對手；反派角色"
  },
  "flashback": {
    "pos": "n.",
    "en_def": "a part of a story that shows events from the past",
    "cn_def": "倒敘；回憶片段"
  },
  "suspense": {
    "pos": "n.",
    "en_def": "a nervous, excited feeling while waiting to find out what happens",
    "cn_def": "懸疑；緊張感"
  },
  "narrative": {
    "pos": "n.",
    "en_def": "a story or an account of events",
    "cn_def": "敘事；故事"
  },
  "description": {
    "pos": "n.",
    "en_def": "words that tell what something or someone is like",
    "cn_def": "描述；描寫"
  },
  "imagination": {
    "pos": "n.",
    "en_def": "the ability to form pictures and ideas in your mind",
    "cn_def": "想像力"
  }
};

const EXTRA_GLOSSES = {};
