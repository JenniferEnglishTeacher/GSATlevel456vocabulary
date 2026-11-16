// Topic 240 Quiz Data: Mini-Series 迷你影集
// Source word list: https://www.examword.com/group-topic/mini-series — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T240 - Mini-Series 迷你影集",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "episode",
    "pos": "n.",
    "cn_def": "（影集的）一集",
    "en_def": "one part of a TV series shown at one time",
    "sentence": "A: Why do you look so tired this morning, and did you finish the sales report that the manager asked for yesterday afternoon? B: I finished the report, but then I started a new crime series on my laptop and stayed up until two to watch one more {{BLANK}} before going to sleep.",
    "cn": "A：你今天早上為什麼看起來這麼累？你有完成經理昨天下午要的業務報告嗎？ B：報告我完成了，但後來我在筆電上開始看一部新的犯罪影集，熬夜到兩點，為了在睡前多看一【集】。"
  },
  {
    "word": "limited",
    "pos": "adj.",
    "cn_def": "有限的",
    "en_def": "with a fixed small number or amount",
    "sentence": "A: Is the new historical drama going to run for several years like the cooking show our office team loves to watch at lunch? B: No, it is a {{BLANK}} series with only six parts, so the producers spent their whole budget on great actors, costumes, and filming in real castles.",
    "cn": "A：這部新的歷史劇會像我們辦公室團隊午餐時愛看的烹飪節目一樣播好幾年嗎？ B：不會，它是只有六集的【限定】影集，所以製作人把全部預算花在優秀演員、服裝以及在真正城堡裡拍攝上。"
  },
  {
    "word": "serial",
    "pos": "n.",
    "cn_def": "連續劇；連載故事",
    "en_def": "a story that is told in parts over a period of time",
    "sentence": "A: Before television became popular, how did families in small towns enjoy stories together in the evening after work and dinner? B: My grandmother told me they listened to a radio {{BLANK}} every night, and each part ended at an exciting moment, so everyone waited eagerly for the next evening.",
    "cn": "A：在電視普及以前，小鎮上的家庭在下班和晚餐後的晚上是怎麼一起享受故事的？ B：我祖母告訴我，他們每晚都收聽一齣廣播【連續劇】，每一段都在精彩的時刻結束，所以大家都熱切地等待第二天晚上。"
  },
  {
    "word": "drama",
    "pos": "n.",
    "cn_def": "戲劇；劇集",
    "en_def": "a serious play, film, or TV show about people's lives",
    "sentence": "A: Which kind of show should our company sponsor if we want to reach working parents who watch television after the children go to bed? B: Our research shows that a family {{BLANK}} about real problems at home and at work attracts that group much more than sports or late-night comedy programs.",
    "cn": "A：如果我們想接觸到孩子上床後才看電視的上班族父母，公司應該贊助哪一種節目？ B：我們的研究顯示，一部描寫家庭和職場真實問題的家庭【劇】，比體育或深夜喜劇節目更能吸引這個族群。"
  },
  {
    "word": "plot",
    "pos": "n.",
    "cn_def": "情節",
    "en_def": "the series of events that make up a story",
    "sentence": "A: Did you enjoy the mystery series that everyone in the marketing department has been talking about during coffee breaks this week? B: The acting was wonderful, but the {{BLANK}} was so complicated, with so many secrets and sudden changes, that I had to read a summary online to understand the ending.",
    "cn": "A：你喜歡行銷部每個人這週在咖啡休息時間都在談論的那部懸疑影集嗎？ B：演技很棒，但【情節】太複雜了，有那麼多秘密和突然的轉折，我必須上網看摘要才看得懂結局。"
  },
  {
    "word": "character",
    "pos": "n.",
    "cn_def": "角色；人物",
    "en_def": "a person in a book, film, or play",
    "sentence": "A: Why did you choose that famous actress for the lead role when her fee is much higher than our original budget for the project? B: She understands the main {{BLANK}} perfectly, a tough lawyer who secretly struggles with her family, and viewers already trust her, so we expect much higher ratings.",
    "cn": "A：既然那位知名女演員的片酬遠高於我們這個專案原本的預算，你為什麼還選她擔任主角？ B：她完全理解主要【角色】——一位私下為家庭所苦的強悍律師——而且觀眾已經信任她，所以我們預期收視率會高很多。"
  },
  {
    "word": "adaptation",
    "pos": "n.",
    "cn_def": "改編作品",
    "en_def": "a film or show made from a book or play",
    "sentence": "A: Have you read the best-selling novel about the family hotel business that the bookstore near our office keeps putting in its window? B: Yes, and I heard a streaming company has just bought the rights, so a television {{BLANK}} with a famous director should be ready by the end of next year.",
    "cn": "A：你讀過我們辦公室附近書店一直放在櫥窗裡的那本關於家族飯店生意的暢銷小說嗎？ B：讀過，我聽說一家串流公司剛買下了版權，所以由知名導演執導的電視【改編作品】應該會在明年底前完成。"
  },
  {
    "word": "screenplay",
    "pos": "n.",
    "cn_def": "電影劇本",
    "en_def": "the written text of a film, with words and directions",
    "sentence": "A: How long did it take the writing team to prepare the story before the actors could start rehearsing for the new series? B: They spent almost eight months on the {{BLANK}}, because the director kept asking them to change the dialogue and add more scenes that show the characters' feelings.",
    "cn": "A：在演員開始為新影集排練之前，編劇團隊花了多久時間準備故事？ B：他們在【劇本】上花了將近八個月，因為導演一直要求他們修改對白，並加入更多呈現角色情感的場景。"
  },
  {
    "word": "cast",
    "pos": "n.",
    "cn_def": "演員陣容",
    "en_def": "all the actors in a film, play, or show",
    "sentence": "A: Why are so many reporters waiting outside the hotel lobby this afternoon, and should we ask our guests to use the side entrance? B: Yes, please do, because the whole {{BLANK}} of the new spy series is holding a press conference upstairs, and fans have been arriving since early this morning.",
    "cn": "A：今天下午為什麼有這麼多記者在飯店大廳外等候？我們應該請客人走側門嗎？ B：是的，請這麼做，因為新諜報影集的全體【演員陣容】正在樓上舉行記者會，而粉絲從今天一大早就陸續抵達了。"
  },
  {
    "word": "director",
    "pos": "n.",
    "cn_def": "導演",
    "en_def": "the person who tells the actors and crew what to do in a film",
    "sentence": "A: Who decided to film the final scenes on the beach at sunrise instead of in the studio, which would have been much cheaper for us? B: The {{BLANK}} insisted on real light and waves, because she believes viewers can feel the difference, even though it meant waking the whole crew at four.",
    "cn": "A：是誰決定在日出時到海灘拍最後幾場戲，而不是在攝影棚拍？在棚內拍對我們來說會便宜很多。 B：是【導演】堅持要真實的光線和海浪，因為她相信觀眾感受得到差別，即使這代表要在四點叫醒整個劇組。"
  },
  {
    "word": "producer",
    "pos": "n.",
    "cn_def": "製作人",
    "en_def": "a person who controls the money and planning of a film or show",
    "sentence": "A: Who should I contact about the delay in payments for the camera equipment that our company rented to the film crew last month? B: You should email the {{BLANK}} directly, because she manages the budget, signs all the contracts, and decides when suppliers like us get paid.",
    "cn": "A：關於我們公司上個月租給拍攝團隊的攝影器材延遲付款的事，我應該聯絡誰？ B：你應該直接寄電子郵件給【製作人】，因為她管理預算、簽署所有合約，並決定像我們這樣的供應商何時拿到款項。"
  },
  {
    "word": "cinematography",
    "pos": "n.",
    "cn_def": "攝影藝術；電影攝影",
    "en_def": "the art of filming and lighting a movie",
    "sentence": "A: The story of that series was quite simple, so why did it win so many awards at the festival in Berlin last week? B: Most critics praised the {{BLANK}}, especially the beautiful mountain shots and the careful use of light and shadow, which made every scene look like a painting.",
    "cn": "A：那部影集的故事相當簡單，為什麼上週在柏林的影展上贏得這麼多獎項？ B：大多數影評讚揚它的【攝影】，尤其是美麗的山景鏡頭以及對光影的細心運用，讓每一場戲看起來都像一幅畫。"
  },
  {
    "word": "soundtrack",
    "pos": "n.",
    "cn_def": "原聲帶；配樂",
    "en_def": "the music used in a film or show",
    "sentence": "A: I keep hearing the same song in every coffee shop downtown, and I wonder where it comes from. Do you know? B: It is from the {{BLANK}} of that popular romantic series, and since the show was released, the album has stayed at the top of the music charts for weeks.",
    "cn": "A：我在市中心每家咖啡店都一直聽到同一首歌，我很好奇它是從哪裡來的。你知道嗎？ B：它來自那部熱門愛情影集的【原聲帶】，自從影集上映後，這張專輯已經在音樂排行榜上蟬聯冠軍好幾週了。"
  },
  {
    "word": "premiere",
    "pos": "n.",
    "cn_def": "首映",
    "en_def": "the first public showing of a film or show",
    "sentence": "A: Are you free on Friday evening, or do you already have plans with your clients from the Singapore office after the meeting? B: I am going to the {{BLANK}} of my cousin's new series at the city theater, where the actors will walk the red carpet before the first episode is shown.",
    "cn": "A：你週五晚上有空嗎？還是開完會後已經和新加坡辦公室的客戶有約了？ B：我要去市立劇院參加我表哥新影集的【首映】，演員們會在第一集播出前走紅毯。"
  },
  {
    "word": "finale",
    "pos": "n.",
    "cn_def": "大結局；終場",
    "en_def": "the last part or episode of a show",
    "sentence": "A: Why did so many employees ask to leave work early on Sunday night, and is there some kind of important event happening? B: The {{BLANK}} of the most popular detective series is on television at nine, and everyone wants to find out who the killer is before reading anything online.",
    "cn": "A：為什麼這麼多員工週日晚上要求提早下班？是有什麼重要的活動嗎？ B：最受歡迎的偵探影集的【大結局】九點在電視上播出，大家都想在網路上看到任何消息前先知道兇手是誰。"
  },
  {
    "word": "cliffhanger",
    "pos": "n.",
    "cn_def": "懸念結局",
    "en_def": "an exciting ending that leaves you wanting to know what happens next",
    "sentence": "A: You promised to watch only one episode last night, so why were you still awake at three in the morning before our big meeting? B: Every episode ended with a {{BLANK}}, like the hero hanging from a bridge or a secret letter appearing, so I simply could not stop watching.",
    "cn": "A：你昨晚答應只看一集，為什麼在我們的大型會議前還熬到凌晨三點？ B：每一集都以【懸念結局】收尾，像是主角吊在橋上或出現一封秘密信件，所以我就是停不下來。"
  },
  {
    "word": "flashback",
    "pos": "n.",
    "cn_def": "倒敘；閃回",
    "en_def": "a scene that shows events from the past",
    "sentence": "A: How does the series explain why the main character left her hometown and never spoke to her brother again? B: In the third episode, a long {{BLANK}} shows her as a teenager working in the family restaurant, and we finally see the argument that destroyed their relationship many years earlier.",
    "cn": "A：這部影集怎麼解釋主角為什麼離開家鄉，而且再也沒和她哥哥說過話？ B：在第三集裡，一段很長的【倒敘】呈現她青少年時在家族餐廳工作的情景，我們終於看到多年前破壞他們關係的那場爭吵。"
  },
  {
    "word": "narrative",
    "pos": "n.",
    "cn_def": "敘事；故事",
    "en_def": "a story or a description of events",
    "sentence": "A: What makes this documentary series different from the many other programs about the history of our city? B: Instead of using experts, it builds a personal {{BLANK}} through interviews with three ordinary families, so viewers learn about the past through their memories, photos, and old letters.",
    "cn": "A：這部紀錄影集和其他許多關於我們城市歷史的節目有什麼不同？ B：它不找專家，而是透過訪問三個普通家庭建構出個人的【敘事】，讓觀眾透過他們的回憶、照片和舊信件了解過去。"
  },
  {
    "word": "theme",
    "pos": "n.",
    "cn_def": "主題",
    "en_def": "the main subject or idea of a story",
    "sentence": "A: The new series takes place in a small fishing village, but why do so many young office workers in big cities love it? B: Its main {{BLANK}} is the pressure to choose between family duty and personal dreams, and many people working long hours far from home feel the same way.",
    "cn": "A：這部新影集的背景在一個小漁村，但為什麼大城市裡那麼多年輕上班族都喜歡它？ B：它的主要【主題】是在家庭責任和個人夢想之間做選擇的壓力，許多離家長時間工作的人也有同樣的感受。"
  },
  {
    "word": "genre",
    "pos": "n.",
    "cn_def": "類型",
    "en_def": "a type of film, music, or writing, such as comedy or horror",
    "sentence": "A: Our streaming platform wants to attract more older viewers next year, so what kind of shows should we start buying? B: Our survey shows that the most popular {{BLANK}} among people over fifty is historical drama, followed by cooking competitions and travel programs filmed in quiet countryside areas.",
    "cn": "A：我們的串流平台明年想吸引更多年長觀眾，那我們應該開始購買哪一種節目？ B：我們的調查顯示，五十歲以上的人最喜歡的【類型】是歷史劇，其次是烹飪比賽和在寧靜鄉村拍攝的旅遊節目。"
  },
  {
    "word": "streaming",
    "pos": "n.",
    "cn_def": "串流（播放）",
    "en_def": "watching or listening to video or music directly from the internet",
    "sentence": "A: Why did the cable company lose so many customers in our region over the past two years, even after lowering its prices? B: Most families now prefer online {{BLANK}}, because they can watch whole series whenever they want on their phones or laptops without waiting for a fixed schedule.",
    "cn": "A：為什麼即使降價了，有線電視公司在過去兩年仍然在我們地區流失這麼多客戶？ B：現在大多數家庭偏好線上【串流】，因為他們可以隨時在手機或筆電上看整部影集，不必等固定的播出時間。"
  },
  {
    "word": "binge-watch",
    "pos": "v.",
    "cn_def": "狂追（影集）",
    "en_def": "to watch many episodes of a show one after another",
    "sentence": "A: What are you planning to do during the long holiday weekend now that the office will be closed for four days? B: I am going to stay home, order some food, and {{BLANK}} the whole spy series my colleagues keep recommending, because I never have time for it during busy weeks.",
    "cn": "A：辦公室要休四天，你這個連假打算做什麼？ B：我打算待在家，叫些外賣，然後【一口氣追完】同事們一直推薦的整部諜報影集，因為忙碌的時候我根本沒時間看。"
  },
  {
    "word": "viewer",
    "pos": "n.",
    "cn_def": "觀眾",
    "en_def": "a person who watches television or a show",
    "sentence": "A: Did the network receive any comments after it changed the ending of the medical series that ran last month? B: Yes, one {{BLANK}} wrote a long letter saying she was very disappointed, and soon thousands of people online agreed with her, so the producers apologized in a public statement.",
    "cn": "A：電視台更改上個月播出的醫療影集結局後，有收到任何意見嗎？ B：有，一位【觀眾】寫了一封長信說她非常失望，很快網路上就有數千人附和她，所以製作人發表了公開聲明道歉。"
  },
  {
    "word": "ratings",
    "pos": "n.",
    "cn_def": "收視率",
    "en_def": "numbers showing how many people watch a show",
    "sentence": "A: Why did the television station suddenly cancel the comedy series after only four episodes, even though the actors were famous? B: Its {{BLANK}} were very low from the first night, so advertisers stopped buying time during the show, and the station could not cover its production costs.",
    "cn": "A：雖然演員都很有名，為什麼電視台在只播了四集之後就突然停播那部喜劇影集？ B：它的【收視率】從第一晚起就非常低，所以廣告商不再購買節目時段，電視台無法負擔製作成本。"
  },
  {
    "word": "scripted",
    "pos": "adj.",
    "cn_def": "有劇本的；照稿演出的",
    "en_def": "written in advance, not made up while filming",
    "sentence": "A: Is that popular cooking competition real, or do the chefs know what is going to happen before they start filming each week? B: Several former contestants say most of the arguments are {{BLANK}}, because the producers want more excitement, so the chefs follow a plan written by the writers.",
    "cn": "A：那個熱門烹飪比賽是真實的嗎？還是廚師們在每週開拍前就知道會發生什麼事？ B：幾位前參賽者說，大部分的爭吵都是【照劇本演出的】，因為製作人想要更刺激，所以廚師們照著編劇寫好的安排走。"
  },
  {
    "word": "fictional",
    "pos": "adj.",
    "cn_def": "虛構的",
    "en_def": "invented and not real",
    "sentence": "A: Is the small town in that series a real place, because my wife wants to plan a weekend trip there with her colleagues? B: Unfortunately, the town is completely {{BLANK}}, although the scenes were filmed in three different villages along the coast, so she could still visit those locations.",
    "cn": "A：那部影集裡的小鎮是真實存在的地方嗎？因為我太太想和同事安排去那裡週末旅行。 B：很可惜，那個小鎮完全是【虛構的】，不過那些場景是在沿海三個不同的村莊拍攝的，所以她還是可以去參觀那些地點。"
  },
  {
    "word": "historical",
    "pos": "adj.",
    "cn_def": "歷史的",
    "en_def": "about or from the past",
    "sentence": "A: Why did the production team spend so much money on costumes and old furniture for the new series about the royal family? B: It is a {{BLANK}} series set in the eighteenth century, so the director wanted every detail, from the dresses to the candles, to match that period exactly.",
    "cn": "A：製作團隊為什麼要在那部關於皇室的新影集上花這麼多錢買服裝和古董家具？ B：它是一部以十八世紀為背景的【歷史】劇，所以導演要求從禮服到蠟燭的每個細節都必須完全符合那個時代。"
  },
  {
    "word": "suspenseful",
    "pos": "adj.",
    "cn_def": "懸疑的；扣人心弦的",
    "en_def": "making you feel excited or nervous about what will happen",
    "sentence": "A: Would you recommend the new crime series to my parents, who usually prefer quiet stories about families and travel? B: Probably not, because it is very {{BLANK}}, with dark scenes, secret plans, and danger in every episode, and they might find it too stressful to watch before bed.",
    "cn": "A：你會推薦那部新犯罪影集給我父母嗎？他們通常比較喜歡關於家庭和旅遊的平靜故事。 B：大概不會，因為它非常【懸疑】，每一集都有黑暗的場面、秘密計畫和危險，他們可能會覺得睡前看壓力太大。"
  },
  {
    "word": "emotional",
    "pos": "adj.",
    "cn_def": "感人的；情緒激動的",
    "en_def": "making people feel strong feelings",
    "sentence": "A: Why were so many people in the meeting room crying during the preview of our company's new television series this afternoon? B: The final scene, where the old father finally forgives his son at the hospital, was very {{BLANK}}, and many of us thought about our own families.",
    "cn": "A：今天下午公司新電視影集試映時，為什麼會議室裡那麼多人在哭？ B：最後那場年邁父親終於在醫院原諒兒子的戲非常【感人】，我們很多人都想到了自己的家人。"
  },
  {
    "word": "concise",
    "pos": "adj.",
    "cn_def": "簡潔的",
    "en_def": "short and clear, using few words",
    "sentence": "A: The network has asked us to send a summary of our new series before the meeting next week, so how long should it be? B: Keep it {{BLANK}}, just one page with the main story, the target audience, and the budget, because the managers read dozens of proposals every week.",
    "cn": "A：電視台要求我們在下週的會議前寄送新影集的摘要，那應該寫多長？ B：保持【簡潔】，只要一頁，寫出主要故事、目標觀眾和預算就好，因為經理們每週要讀幾十份提案。"
  },
  {
    "word": "engaging",
    "pos": "adj.",
    "cn_def": "吸引人的",
    "en_def": "interesting and holding your attention",
    "sentence": "A: Our training videos for new staff are very long, so how can we keep employees interested until the end? B: We could make them more {{BLANK}} by turning each lesson into a short story with characters, like a mini-series, so staff want to know what happens next.",
    "cn": "A：我們給新員工的訓練影片很長，要怎麼讓員工一直保持興趣到最後？ B：我們可以把每一課變成有角色的短篇故事，就像迷你影集一樣，讓它們更【吸引人】，這樣員工就會想知道接下來會發生什麼事。"
  },
  {
    "word": "realistic",
    "pos": "adj.",
    "cn_def": "寫實的；逼真的",
    "en_def": "showing things as they really are",
    "sentence": "A: Many nurses at our hospital say they enjoy the new medical series, which surprised me, so what do they like about it? B: They say it is very {{BLANK}}, because the writers worked with real doctors, so the long shifts, the stress, and the equipment all look exactly like their daily work.",
    "cn": "A：我們醫院的很多護理師說她們喜歡那部新的醫療影集，這讓我很驚訝，她們喜歡它的哪一點？ B：她們說它非常【寫實】，因為編劇和真正的醫生合作，所以長時間輪班、壓力和設備看起來都和她們的日常工作一模一樣。"
  },
  {
    "word": "compelling",
    "pos": "adj.",
    "cn_def": "引人入勝的；令人信服的",
    "en_def": "so interesting that you must pay attention",
    "sentence": "A: How did a small production company with no famous actors manage to sell its series to an international streaming platform? B: The writers created a {{BLANK}} story about immigrant workers building a business, and the buyers said they could not stop watching even the first rough episode.",
    "cn": "A：一家沒有知名演員的小製作公司，是怎麼把影集賣給國際串流平台的？ B：編劇創作了一個關於移工創業、【引人入勝的】故事，買家說連粗剪的第一集都讓他們停不下來。"
  },
  {
    "word": "critically",
    "pos": "adv.",
    "cn_def": "在評論上；受評論界（地）",
    "en_def": "in a way that shows the opinions of experts who review art",
    "sentence": "A: Did the mini-series make a lot of money for the studio after it was released in theaters and online last spring? B: It was {{BLANK}} praised by reviewers in every major newspaper, but sadly it did not attract a large audience, so the studio lost money on it.",
    "cn": "A：那部迷你影集去年春天在戲院和網路上映後，有替製片公司賺很多錢嗎？ B：它【在評論上】獲得各大報影評人的讚揚，但可惜沒有吸引大量觀眾，所以製片公司在這部片上虧了錢。"
  }
];

const MCQS = [
  {
    "q": "The second _____ of the business series explains how the company opened its first store. It will be online next Monday.",
    "options": [
      "episode",
      "genre",
      "producer",
      "viewer"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Tickets for the special screening are _____ to two per person. Please book early because the theater has only fifty seats.",
    "options": [
      "fictional",
      "limited",
      "concise",
      "emotional"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The station will show a new hospital _____ every Thursday night. Each episode follows a young doctor during her first year.",
    "options": [
      "soundtrack",
      "premiere",
      "drama",
      "ratings"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The writers changed the _____ several times during filming. As a result, the ending surprised even some of the actors.",
    "options": [
      "cast",
      "viewer",
      "finale",
      "plot"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The actor gained ten kilograms to play his _____ in the new series. The role is a retired boxer who opens a gym.",
    "options": [
      "genre",
      "character",
      "premiere",
      "streaming"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The company bought the rights to the bestselling business book. A television _____ is planned for release next year.",
    "options": [
      "adaptation",
      "cliffhanger",
      "viewer",
      "soundtrack"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The writer finished the _____ for all six episodes last month. Filming will begin as soon as the actors are chosen.",
    "options": [
      "cinematography",
      "ratings",
      "flashback",
      "screenplay"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The full _____ of the comedy will meet fans at the shopping mall on Saturday. Autographs will be given from noon to two.",
    "options": [
      "plot",
      "theme",
      "cast",
      "narrative"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The _____ asked the actors to repeat the scene twelve times. She wanted the light to be perfect before moving on.",
    "options": [
      "director",
      "viewer",
      "serial",
      "character"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The _____ found new investors after the budget ran out. Thanks to her, filming continued without any delay.",
    "options": [
      "episode",
      "genre",
      "producer",
      "flashback"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The series won an award for its _____ at the film festival. The ocean scenes were shot with special underwater cameras.",
    "options": [
      "finale",
      "cinematography",
      "viewer",
      "serial"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Sales of the _____ rose sharply after the final episode aired. Many fans wanted to listen to the songs again.",
    "options": [
      "plot",
      "screenplay",
      "adaptation",
      "soundtrack"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Guests at the _____ of the new series must arrive by seven. The first episode will start at seven thirty.",
    "options": [
      "premiere",
      "narrative",
      "theme",
      "character"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Over five million people watched the _____ of the series on Sunday night. It was the station's biggest audience this year.",
    "options": [
      "flashback",
      "finale",
      "genre",
      "screenplay"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The third episode ended with a dramatic _____ that shocked viewers. Many people complained they had to wait a week to learn more.",
    "options": [
      "producer",
      "cast",
      "soundtrack",
      "cliffhanger"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "A short _____ in the first episode shows the hero as a child. It helps viewers understand why he fears water.",
    "options": [
      "premiere",
      "ratings",
      "flashback",
      "cast"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Friendship at work is the main _____ of the new office comedy. Each episode shows colleagues helping each other through problems.",
    "options": [
      "theme",
      "director",
      "finale",
      "cliffhanger"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Science fiction is the fastest-growing _____ on the platform this year. The company plans to buy more shows of this type.",
    "options": [
      "producer",
      "premiere",
      "episode",
      "genre"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The company launched a new _____ service for its customers last month. Members can watch films on any device for a monthly fee.",
    "options": [
      "screenplay",
      "streaming",
      "cliffhanger",
      "character"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Many subscribers _____ entire seasons over a single weekend. The platform therefore releases all episodes on the same day.",
    "options": [
      "premiere",
      "direct",
      "binge-watch",
      "script"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Each _____ can rate the show from one to five stars. The results help the platform decide which series to continue.",
    "options": [
      "plot",
      "genre",
      "soundtrack",
      "viewer"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The comedy's _____ improved after the station moved it to Friday nights. Advertisers are now willing to pay more for each slot.",
    "options": [
      "ratings",
      "flashback",
      "narrative",
      "adaptation"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The reality program is partly _____, according to a former producer. Some arguments between the contestants were planned in advance.",
    "options": [
      "concise",
      "limited",
      "scripted",
      "historical"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The company in the series is _____, but it is based on a real bank. The writers changed the names to avoid legal problems.",
    "options": [
      "critical",
      "fictional",
      "suspenseful",
      "engaging"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The museum lent several _____ objects to the production team. They appear in scenes set in the nineteenth century.",
    "options": [
      "historical",
      "scripted",
      "concise",
      "limited"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The final ten minutes were extremely _____ for most viewers. Nobody knew whether the pilot would land the plane safely.",
    "options": [
      "concise",
      "limited",
      "fictional",
      "suspenseful"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The ceremony became very _____ when the actor thanked his late mother. Many people in the audience had tears in their eyes.",
    "options": [
      "scripted",
      "emotional",
      "concise",
      "historical"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Please keep your proposal _____ and to the point. The committee has only ten minutes to review each one.",
    "options": [
      "suspenseful",
      "emotional",
      "concise",
      "fictional"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The office scenes are very _____ because the writers once worked in finance. Viewers from banks say the details are accurate.",
    "options": [
      "fictional",
      "limited",
      "scripted",
      "realistic"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The documentary makes a _____ case for protecting local fishing jobs. Several lawmakers have asked to watch it together.",
    "options": [
      "compelling",
      "scripted",
      "limited",
      "historical"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "episode": {
    "pos": "n.",
    "en_def": "one part of a TV series shown at one time",
    "cn_def": "（影集的）一集"
  },
  "limited": {
    "pos": "adj.",
    "en_def": "with a fixed small number or amount",
    "cn_def": "有限的"
  },
  "serial": {
    "pos": "n.",
    "en_def": "a story that is told in parts over a period of time",
    "cn_def": "連續劇；連載故事"
  },
  "drama": {
    "pos": "n.",
    "en_def": "a serious play, film, or TV show about people's lives",
    "cn_def": "戲劇；劇集"
  },
  "plot": {
    "pos": "n.",
    "en_def": "the series of events that make up a story",
    "cn_def": "情節"
  },
  "character": {
    "pos": "n.",
    "en_def": "a person in a book, film, or play",
    "cn_def": "角色；人物"
  },
  "adaptation": {
    "pos": "n.",
    "en_def": "a film or show made from a book or play",
    "cn_def": "改編作品"
  },
  "screenplay": {
    "pos": "n.",
    "en_def": "the written text of a film, with words and directions",
    "cn_def": "電影劇本"
  },
  "cast": {
    "pos": "n.",
    "en_def": "all the actors in a film, play, or show",
    "cn_def": "演員陣容"
  },
  "director": {
    "pos": "n.",
    "en_def": "the person who tells the actors and crew what to do in a film",
    "cn_def": "導演"
  },
  "producer": {
    "pos": "n.",
    "en_def": "a person who controls the money and planning of a film or show",
    "cn_def": "製作人"
  },
  "cinematography": {
    "pos": "n.",
    "en_def": "the art of filming and lighting a movie",
    "cn_def": "攝影藝術；電影攝影"
  },
  "soundtrack": {
    "pos": "n.",
    "en_def": "the music used in a film or show",
    "cn_def": "原聲帶；配樂"
  },
  "premiere": {
    "pos": "n.",
    "en_def": "the first public showing of a film or show",
    "cn_def": "首映"
  },
  "finale": {
    "pos": "n.",
    "en_def": "the last part or episode of a show",
    "cn_def": "大結局；終場"
  },
  "cliffhanger": {
    "pos": "n.",
    "en_def": "an exciting ending that leaves you wanting to know what happens next",
    "cn_def": "懸念結局"
  },
  "flashback": {
    "pos": "n.",
    "en_def": "a scene that shows events from the past",
    "cn_def": "倒敘；閃回"
  },
  "narrative": {
    "pos": "n.",
    "en_def": "a story or a description of events",
    "cn_def": "敘事；故事"
  },
  "theme": {
    "pos": "n.",
    "en_def": "the main subject or idea of a story",
    "cn_def": "主題"
  },
  "genre": {
    "pos": "n.",
    "en_def": "a type of film, music, or writing, such as comedy or horror",
    "cn_def": "類型"
  },
  "streaming": {
    "pos": "n.",
    "en_def": "watching or listening to video or music directly from the internet",
    "cn_def": "串流（播放）"
  },
  "binge-watch": {
    "pos": "v.",
    "en_def": "to watch many episodes of a show one after another",
    "cn_def": "狂追（影集）"
  },
  "viewer": {
    "pos": "n.",
    "en_def": "a person who watches television or a show",
    "cn_def": "觀眾"
  },
  "ratings": {
    "pos": "n.",
    "en_def": "numbers showing how many people watch a show",
    "cn_def": "收視率"
  },
  "scripted": {
    "pos": "adj.",
    "en_def": "written in advance, not made up while filming",
    "cn_def": "有劇本的；照稿演出的"
  },
  "fictional": {
    "pos": "adj.",
    "en_def": "invented and not real",
    "cn_def": "虛構的"
  },
  "historical": {
    "pos": "adj.",
    "en_def": "about or from the past",
    "cn_def": "歷史的"
  },
  "suspenseful": {
    "pos": "adj.",
    "en_def": "making you feel excited or nervous about what will happen",
    "cn_def": "懸疑的；扣人心弦的"
  },
  "emotional": {
    "pos": "adj.",
    "en_def": "making people feel strong feelings",
    "cn_def": "感人的；情緒激動的"
  },
  "concise": {
    "pos": "adj.",
    "en_def": "short and clear, using few words",
    "cn_def": "簡潔的"
  },
  "engaging": {
    "pos": "adj.",
    "en_def": "interesting and holding your attention",
    "cn_def": "吸引人的"
  },
  "realistic": {
    "pos": "adj.",
    "en_def": "showing things as they really are",
    "cn_def": "寫實的；逼真的"
  },
  "compelling": {
    "pos": "adj.",
    "en_def": "so interesting that you must pay attention",
    "cn_def": "引人入勝的；令人信服的"
  },
  "critically": {
    "pos": "adv.",
    "en_def": "in a way that shows the opinions of experts who review art",
    "cn_def": "在評論上；受評論界（地）"
  }
};

const EXTRA_GLOSSES = {};
