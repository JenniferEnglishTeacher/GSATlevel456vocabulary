// Topic 255 Quiz Data: Neighbor 鄰居
// Source word list: https://www.examword.com/group-topic/neighbor — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T255 - Neighbor 鄰居",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "neighborhood",
    "pos": "n.",
    "cn_def": "街坊；社區；鄰近地區",
    "en_def": "the area around a place where people live",
    "sentence": "A: Why did you and your husband decide to rent a house so far from the office instead of staying downtown near the bank? B: We wanted a safe {{BLANK}} with good schools, a large park, and friendly shops nearby, even if it means driving forty minutes to work every day.",
    "cn": "A：你和你先生為什麼決定租一間離公司這麼遠的房子，而不是繼續住在銀行附近的市中心？ B：我們想要一個安全的【社區】，附近有好學校、大公園和友善的商店，即使這代表每天要開四十分鐘的車去上班。"
  },
  {
    "word": "community",
    "pos": "n.",
    "cn_def": "社區；社群",
    "en_def": "a group of people living in the same area",
    "sentence": "A: Is the company still planning to help clean up the riverside park this Saturday, or was the event canceled because of the weather forecast? B: It is still happening, and many local families from the {{BLANK}} have signed up to join our staff, so we have ordered extra gloves, trash bags, and lunch boxes.",
    "cn": "A：公司這個星期六還打算幫忙清理河濱公園嗎？還是活動因為天氣預報取消了？ B：活動照常舉行，而且很多【社區】裡的當地家庭都報名要和我們的員工一起參加，所以我們多訂了手套、垃圾袋和便當。"
  },
  {
    "word": "resident",
    "pos": "n.",
    "cn_def": "居民；住戶",
    "en_def": "a person who lives in a particular place",
    "sentence": "A: Can anyone park in the underground garage of this building, or do visitors have to find a space on the street when they come for meetings? B: Only a {{BLANK}} with a valid parking card can use the garage, so your clients will need to use the public lot across the road.",
    "cn": "A：任何人都可以在這棟大樓的地下停車場停車嗎？還是來開會的訪客必須在街上找車位？ B：只有持有效停車卡的【住戶】才能使用停車場，所以你的客戶需要使用對面馬路的公共停車場。"
  },
  {
    "word": "apartment",
    "pos": "n.",
    "cn_def": "公寓",
    "en_def": "a set of rooms for living in, usually on one floor of a building",
    "sentence": "A: Have you found a place to live yet now that the company is transferring you to the Kaohsiung branch next month? B: Yes, I signed a one-year lease for a small two-bedroom {{BLANK}} on the fifth floor, and it is only a ten-minute walk from the new office.",
    "cn": "A：公司下個月要把你調到高雄分公司，你找到住的地方了嗎？ B：找到了，我簽了一年的租約，租下五樓一間兩房的小【公寓】，走路到新辦公室只要十分鐘。"
  },
  {
    "word": "household",
    "pos": "n.",
    "cn_def": "家庭；一戶",
    "en_def": "all the people living together in one home",
    "sentence": "A: Why is the city sending everyone a new set of recycling bins this month, and do we have to pay anything for them? B: Every {{BLANK}} in the district gets three free bins, because the government wants families to separate paper, plastic, and food waste more carefully at home.",
    "cn": "A：市政府這個月為什麼寄給大家一組新的回收桶？我們需要付錢嗎？ B：區內每一【戶】都可以免費拿到三個回收桶，因為政府希望家庭在家中更仔細地分類紙類、塑膠和廚餘。"
  },
  {
    "word": "friendly",
    "pos": "adj.",
    "cn_def": "友善的",
    "en_def": "kind and pleasant to other people",
    "sentence": "A: How do you like the new building you moved into last month, and have you met any of the people who live on your floor yet? B: I really like it, because the people next door are very {{BLANK}} and even brought us homemade cookies on the first weekend we were there.",
    "cn": "A：你喜歡上個月搬進去的新大樓嗎？你已經見過同一層樓的住戶了嗎？ B：我非常喜歡，因為隔壁的人非常【友善】，甚至在我們住進去的第一個週末就送來自己做的餅乾。"
  },
  {
    "word": "helpful",
    "pos": "adj.",
    "cn_def": "樂於助人的；有幫助的",
    "en_def": "willing to help; useful",
    "sentence": "A: How did you manage to carry that heavy new sofa up to the fourth floor when the elevator in your building was broken all week? B: The man who lives across the hall was very {{BLANK}}, so he and his son carried it upstairs with me after dinner on Tuesday.",
    "cn": "A：你們大樓的電梯整個星期都壞了，你是怎麼把那張很重的新沙發搬上四樓的？ B：住在走廊對面的那位先生非常【樂於助人】，所以星期二晚餐後他和他兒子一起幫我把它搬上樓。"
  },
  {
    "word": "noisy",
    "pos": "adj.",
    "cn_def": "吵鬧的",
    "en_def": "making a lot of loud sound",
    "sentence": "A: You look really tired this morning, so did you stay up late working on the sales report for today's meeting? B: No, the people upstairs had a very {{BLANK}} party until two in the morning, so I could not sleep at all because of the loud music and shouting.",
    "cn": "A：你今天早上看起來真的很累，你是熬夜做今天開會要用的銷售報告嗎？ B：不是，樓上的人開了一場非常【吵鬧的】派對，一直到凌晨兩點，大聲的音樂和叫喊聲讓我完全睡不著。"
  },
  {
    "word": "quiet",
    "pos": "adj.",
    "cn_def": "安靜的",
    "en_def": "making little or no noise",
    "sentence": "A: Why did you choose an apartment in the suburbs instead of one near the train station that would make your commute much shorter? B: I work from home three days a week, so I needed a {{BLANK}} place where I could join video calls without traffic sounds in the background.",
    "cn": "A：你為什麼選擇郊區的公寓，而不是選擇火車站附近能讓你通勤時間短很多的公寓？ B：我一週有三天在家工作，所以我需要一個【安靜的】地方，讓我開視訊會議時背景沒有車流的聲音。"
  },
  {
    "word": "greet",
    "pos": "v.",
    "cn_def": "打招呼；迎接",
    "en_def": "to say hello to someone when you meet them",
    "sentence": "A: What should the new receptionist do when the building residents come down to the lobby in the morning? B: She should smile and {{BLANK}} each person warmly by name, because the management company wants everyone to feel welcome and at home when they walk through the front door.",
    "cn": "A：大樓住戶早上下樓到大廳時，新來的櫃檯人員應該怎麼做？ B：她應該面帶微笑，親切地叫出每個人的名字【打招呼】，因為管理公司希望每個人走進大門時都感到受歡迎、像回到家一樣。"
  },
  {
    "word": "visit",
    "pos": "v.",
    "cn_def": "拜訪；探望；參觀",
    "en_def": "to go to see a person or place",
    "sentence": "A: Are you going to take any time off during the long holiday weekend, or will you stay in town and finish the project? B: I am going to {{BLANK}} my elderly neighbor in the hospital on Saturday, and then I will spend Sunday finishing the report at home.",
    "cn": "A：連假週末你要休息一下嗎？還是會留在市區把專案做完？ B：星期六我要去醫院【探望】我年長的鄰居，然後星期天在家把報告完成。"
  },
  {
    "word": "borrow",
    "pos": "v.",
    "cn_def": "借（入）",
    "en_def": "to take something from someone and promise to give it back",
    "sentence": "A: Did you buy a ladder to change the light bulbs in the hallway, or did you ask the building manager to send a worker? B: Neither, actually, because I was able to {{BLANK}} a tall ladder from the family next door, and I will return it to them tomorrow morning.",
    "cn": "A：你是買了梯子來換走廊的燈泡，還是請大樓管理員派工人來？ B：其實都沒有，因為我向隔壁那家人【借】到了一把高梯子，明天早上就會還給他們。"
  },
  {
    "word": "lend",
    "pos": "v.",
    "cn_def": "借（出）",
    "en_def": "to give something to someone for a short time",
    "sentence": "A: My car is in the repair shop until Friday, so do you know how I can get to the client meeting across town tomorrow? B: My neighbor said she could {{BLANK}} you her car for the day, as long as you fill up the gas tank before you bring it back.",
    "cn": "A：我的車要在修車廠待到星期五，你知道我明天要怎麼去城市另一頭參加客戶會議嗎？ B：我的鄰居說她可以把車【借】你一天，只要你還車前把油加滿就好。"
  },
  {
    "word": "introduce",
    "pos": "v.",
    "cn_def": "介紹",
    "en_def": "to tell people each other's names when they first meet",
    "sentence": "A: Since you have lived in this building for ten years, could you help me get to know some of the other residents? B: Of course, I will {{BLANK}} you to the members of the residents' committee at the monthly meeting in the lobby on Thursday evening.",
    "cn": "A：你已經在這棟大樓住了十年，能幫我認識一些其他住戶嗎？ B：當然，星期四晚上在大廳舉行的月會上，我會把你【介紹】給住戶委員會的成員。"
  },
  {
    "word": "respect",
    "pos": "v.",
    "cn_def": "尊重",
    "en_def": "to treat someone or something with care and consideration",
    "sentence": "A: Why did the management office put up new signs about the rules for using the swimming pool and the gym? B: They want all residents to {{BLANK}} other people's need for rest and keep the noise down after ten at night, because several families with young children have complained recently.",
    "cn": "A：管理室為什麼貼出關於游泳池和健身房使用規則的新告示？ B：他們希望所有住戶【尊重】別人休息的需要，晚上十點以後降低音量，因為最近有好幾個有小孩的家庭提出抱怨。"
  },
  {
    "word": "privacy",
    "pos": "n.",
    "cn_def": "隱私",
    "en_def": "the state of being alone and not watched by others",
    "sentence": "A: Why are you planting such tall trees along the side of your garden, when the old ones still look perfectly healthy? B: The new office building next door has large windows that look straight into our yard, so we want more {{BLANK}} when the children are playing outside.",
    "cn": "A：舊的樹看起來還很健康，你為什麼要沿著花園旁邊種這麼高的樹？ B：隔壁新蓋的辦公大樓有大窗戶可以直接看進我們的院子，所以孩子在外面玩的時候，我們想要多一點【隱私】。"
  },
  {
    "word": "cooperate",
    "pos": "v.",
    "cn_def": "合作；配合",
    "en_def": "to work together with others to do something",
    "sentence": "A: How is the building going to repair the water pipes without turning off everyone's water for several days? B: The engineers will work on one floor at a time, so all residents need to {{BLANK}} with them and stay home during their scheduled two-hour repair period.",
    "cn": "A：大樓要怎麼修理水管，而不讓每個人都停水好幾天？ B：工程師會一次處理一層樓，所以所有住戶都必須【配合】他們，在排定的兩小時維修時段待在家裡。"
  },
  {
    "word": "complaint",
    "pos": "n.",
    "cn_def": "抱怨；投訴",
    "en_def": "a statement that something is wrong or not good enough",
    "sentence": "A: Why did the building manager call a meeting with the restaurant owners on the ground floor this afternoon? B: He received a {{BLANK}} from several residents about the strong smell of cooking oil coming up through the air vents every evening during dinner time.",
    "cn": "A：大樓經理今天下午為什麼找一樓餐廳的老闆們開會？ B：他收到好幾位住戶的【投訴】，說每天晚餐時間都有濃濃的油煙味從通風口飄上來。"
  },
  {
    "word": "conflict",
    "pos": "n.",
    "cn_def": "衝突",
    "en_def": "a serious disagreement between people",
    "sentence": "A: What happened between the two families on the third floor, and why were they arguing so loudly in the hallway last night? B: There has been a {{BLANK}} between them about shared parking spaces for months, and the management office is now trying to find a fair solution for both.",
    "cn": "A：三樓那兩戶人家發生了什麼事？他們昨晚為什麼在走廊大聲爭吵？ B：他們之間因為共用停車位已經有好幾個月的【衝突】，管理室現在正試著為雙方找出公平的解決辦法。"
  },
  {
    "word": "support",
    "pos": "n.",
    "cn_def": "支持；幫助",
    "en_def": "help and encouragement",
    "sentence": "A: How did you manage to take care of your newborn baby and still finish the big marketing project on time last spring? B: I had a lot of {{BLANK}} from my neighbors, who cooked meals for us and looked after the baby whenever I had an important meeting.",
    "cn": "A：去年春天你是怎麼一邊照顧剛出生的寶寶，一邊準時完成那個大型行銷專案的？ B：我得到鄰居們很多【支持】，他們幫我們煮飯，每當我有重要會議時就幫忙照顧寶寶。"
  },
  {
    "word": "trust",
    "pos": "v.",
    "cn_def": "信任",
    "en_def": "to believe that someone is honest and will not harm you",
    "sentence": "A: Do you really give your house keys to the woman next door every time you go away on a business trip? B: Yes, I completely {{BLANK}} her, because she has watered my plants and fed my cat for five years without ever causing any problems.",
    "cn": "A：你真的每次出差都把家裡鑰匙交給隔壁那位女士嗎？ B：是的，我完全【信任】她，因為她五年來一直幫我澆花、餵貓，從來沒出過任何問題。"
  },
  {
    "word": "relationship",
    "pos": "n.",
    "cn_def": "關係",
    "en_def": "the way people feel and behave toward each other",
    "sentence": "A: Why does your company sponsor so many events in the neighborhood, like the summer festival and the children's sports day? B: We want to build a good {{BLANK}} with the people who live around our factory, because their opinions matter when we apply to expand the building.",
    "cn": "A：你們公司為什麼在社區贊助這麼多活動，像是夏日祭和兒童運動會？ B：我們想和工廠周圍的居民建立良好的【關係】，因為當我們申請擴建廠房時，他們的意見很重要。"
  },
  {
    "word": "gathering",
    "pos": "n.",
    "cn_def": "聚會",
    "en_def": "a meeting of people for a social purpose",
    "sentence": "A: Are you free on Saturday evening, or do you already have plans with your family after the long work week? B: We are going to a small {{BLANK}} in the garden of our building, where all the residents bring a dish to share and get to know each other better.",
    "cn": "A：你星期六晚上有空嗎？還是忙了一整週之後已經和家人有計畫了？ B：我們要去參加大樓花園裡的一場小型【聚會】，所有住戶都會帶一道菜來分享，彼此多認識一下。"
  },
  {
    "word": "celebrate",
    "pos": "v.",
    "cn_def": "慶祝",
    "en_def": "to do something enjoyable for a special occasion",
    "sentence": "A: Why is the lobby of our apartment building decorated with balloons and flowers this morning? B: The residents' committee decided to {{BLANK}} Mrs. Chen's ninetieth birthday with a small party this afternoon, since she has lived here longer than anyone else in the building.",
    "cn": "A：我們公寓大樓的大廳今天早上為什麼用氣球和花布置起來？ B：住戶委員會決定今天下午辦一場小派對來【慶祝】陳太太的九十歲生日，因為她是整棟大樓住得最久的人。"
  },
  {
    "word": "security",
    "pos": "n.",
    "cn_def": "安全；保全",
    "en_def": "protection from crime or danger",
    "sentence": "A: Why did the building install new cameras at the entrance and ask everyone to use a key card for the elevator? B: There were two break-ins on the second floor last month, so the management wants to improve {{BLANK}} and keep strangers out of the residential floors.",
    "cn": "A：大樓為什麼在入口裝了新的監視器，還要大家搭電梯時使用感應卡？ B：上個月二樓發生了兩起闖空門事件，所以管理單位想要加強【保全】，不讓陌生人進入住宅樓層。"
  },
  {
    "word": "fence",
    "pos": "n.",
    "cn_def": "圍籬；籬笆",
    "en_def": "a wall made of wood or wire around a yard or field",
    "sentence": "A: Your dog keeps running into the yard next door and digging holes in the garden, so what are you going to do about it? B: I have already called a company to build a taller {{BLANK}} between our two houses, and the workers will start on Monday morning.",
    "cn": "A：你的狗一直跑到隔壁院子裡在花園挖洞，你打算怎麼處理？ B：我已經打電話請一家公司在我們兩家之間蓋一道更高的【圍籬】，工人星期一早上就會開始施工。"
  },
  {
    "word": "driveway",
    "pos": "n.",
    "cn_def": "車道",
    "en_def": "a short private road from the street to a house or garage",
    "sentence": "A: Why were you so late for the morning meeting, when you usually arrive at the office before everyone else? B: A delivery truck was parked across my {{BLANK}} for almost half an hour, so I could not get my car out of the garage until the driver came back.",
    "cn": "A：你平常都比大家早到辦公室，今天早上開會為什麼遲到這麼久？ B：一輛送貨卡車橫停在我家【車道】上將近半小時，所以司機回來之前我都沒辦法把車開出車庫。"
  },
  {
    "word": "courtyard",
    "pos": "n.",
    "cn_def": "庭院；中庭",
    "en_def": "an open space with walls or buildings around it",
    "sentence": "A: Where would be a good place to hold the welcome party for the new tenants if the weather is nice this weekend? B: We could set up some tables in the {{BLANK}} in the middle of the building, because it has trees for shade and enough space for about fifty people.",
    "cn": "A：如果這個週末天氣好，在哪裡舉辦新房客的歡迎派對比較好？ B：我們可以在大樓中間的【中庭】擺幾張桌子，因為那裡有樹可以遮陰，空間也足夠容納大約五十個人。"
  },
  {
    "word": "considerate",
    "pos": "adj.",
    "cn_def": "體貼的",
    "en_def": "thinking about other people's feelings and needs",
    "sentence": "A: Did the family who lives below you ever complain about your children running around the apartment in the evenings? B: No, because we put thick carpets on the floor and tried to be {{BLANK}}, and we also told them to call us directly if the noise ever bothered them.",
    "cn": "A：住在你們樓下的那家人有沒有抱怨過你的孩子晚上在家裡跑來跑去？ B：沒有，因為我們在地板上鋪了厚地毯，盡量做到【體貼】別人，也告訴他們如果噪音打擾到他們，可以直接打電話給我們。"
  },
  {
    "word": "rude",
    "pos": "adj.",
    "cn_def": "無禮的",
    "en_def": "not polite",
    "sentence": "A: Why did the management company decide to replace the night guard who worked at the front desk last month? B: Several residents said he was very {{BLANK}} to them, because he often shouted at visitors and refused to answer simple questions about the building.",
    "cn": "A：管理公司為什麼決定撤換上個月在前台工作的夜班警衛？ B：好幾位住戶說他對他們非常【無禮】，因為他常常對訪客大吼，而且拒絕回答關於大樓的簡單問題。"
  },
  {
    "word": "generous",
    "pos": "adj.",
    "cn_def": "慷慨的",
    "en_def": "willing to give money, time, or help",
    "sentence": "A: How did the community center raise enough money to buy new books and computers for the children's study room? B: A {{BLANK}} businessman who lives on our street gave a large donation, and many local shops also offered gift cards for the fundraising raffle.",
    "cn": "A：社區活動中心是怎麼募到足夠的錢，替兒童自習室買新書和電腦的？ B：一位住在我們這條街上的【慷慨的】商人捐了一大筆錢，很多當地商店也提供禮物卡作為募款抽獎的獎品。"
  },
  {
    "word": "chat",
    "pos": "v.",
    "cn_def": "聊天",
    "en_def": "to talk in a friendly and informal way",
    "sentence": "A: I saw you standing outside the elevator for a long time this morning, so was there a problem with the building? B: No, I just stopped to {{BLANK}} with my neighbor about the new café on the corner and the weekend weather, and I nearly missed my train.",
    "cn": "A：我今天早上看到你在電梯外面站了很久，大樓出了什麼問題嗎？ B：沒有，我只是停下來和鄰居【聊天】，聊轉角那家新咖啡館和週末的天氣，差點錯過火車。"
  },
  {
    "word": "watchful",
    "pos": "adj.",
    "cn_def": "警覺的；留意的",
    "en_def": "paying close attention to what is happening",
    "sentence": "A: How did the police catch the man who was stealing packages from the doorsteps of houses on our street? B: An elderly resident who is always {{BLANK}} noticed a stranger carrying boxes into a van, so she wrote down the license plate number and called the police immediately.",
    "cn": "A：警察是怎麼抓到那個在我們這條街上偷走家門口包裹的男子的？ B：一位總是很【警覺】的年長住戶注意到有個陌生人把箱子搬上廂型車，就記下車牌號碼並立刻報警。"
  },
  {
    "word": "move in",
    "pos": "v.phr.",
    "cn_def": "搬入；遷入",
    "en_def": "to start living in a new home",
    "sentence": "A: When can the new employee from the Tokyo office start living in the company apartment near the station? B: The painters are finishing the walls and the furniture will arrive on Thursday, so she can {{BLANK}} this weekend and start work at the office on Monday.",
    "cn": "A：從東京分公司來的新員工什麼時候可以開始住進車站附近的公司宿舍？ B：油漆工正在完成牆面，家具星期四會送到，所以她這個週末就可以【搬進去】，星期一開始到辦公室上班。"
  },
  {
    "word": "move out",
    "pos": "v.phr.",
    "cn_def": "搬出；遷出",
    "en_def": "to leave your home and go to live somewhere else",
    "sentence": "A: Why is there a big truck parked in front of the building, and why are workers carrying furniture down the stairs? B: The family on the sixth floor has to {{BLANK}} by the end of the month, because the father got a new job in another city.",
    "cn": "A：大樓前面為什麼停了一輛大卡車，工人還把家具從樓梯搬下來？ B：六樓那家人月底前得【搬走】，因為爸爸在另一個城市找到了新工作。"
  },
  {
    "word": "courtesy",
    "pos": "n.",
    "cn_def": "禮貌；禮節",
    "en_def": "polite behavior that shows respect for others",
    "sentence": "A: Should I tell the people next door before I start the kitchen renovation, or is it enough to get permission from the building office? B: It is a common {{BLANK}} to leave them a short note explaining the work hours, so they will not be surprised by the drilling noise.",
    "cn": "A：我在開始裝修廚房前應該先告訴隔壁的人嗎？還是只要取得大樓管理室的許可就夠了？ B：留一張簡短的字條說明施工時間是一種常見的【禮貌】，這樣他們就不會被鑽孔的噪音嚇到。"
  },
  {
    "word": "disturb",
    "pos": "v.",
    "cn_def": "打擾",
    "en_def": "to interrupt or bother someone",
    "sentence": "A: Is it okay if I practice the piano in my apartment in the evening after I get home from the office? B: You can play until nine o'clock, but please close the windows so the music does not {{BLANK}} the elderly couple next door who go to bed very early.",
    "cn": "A：我下班回家後晚上在公寓裡練鋼琴可以嗎？ B：你可以彈到九點，但請關上窗戶，這樣音樂才不會【打擾】很早睡覺的隔壁老夫婦。"
  }
];

const MCQS = [
  {
    "q": "The company is building a new office in a busy _____ downtown. Many employees will be able to walk to work from home.",
    "options": [
      "neighborhood",
      "courtesy",
      "privacy",
      "complaint"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The bank donated money to build a new library for the local _____. Residents of all ages can now borrow books for free.",
    "options": [
      "fence",
      "driveway",
      "community",
      "complaint"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Every _____ of the building received a letter about the elevator repairs. The work will take place next Tuesday and Wednesday.",
    "options": [
      "privacy",
      "resident",
      "gathering",
      "security"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The new manager rented a small _____ near the train station. It has one bedroom, a kitchen, and a balcony with a city view.",
    "options": [
      "conflict",
      "complaint",
      "courtesy",
      "apartment"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The electricity company says the average _____ uses more power in summer. Air conditioners are the main reason for the higher bills.",
    "options": [
      "fence",
      "courtyard",
      "household",
      "privacy"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The staff at the front desk are always _____ and welcoming. They smile at every guest and make new visitors feel at home.",
    "options": [
      "friendly",
      "noisy",
      "rude",
      "watchful"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The online guide was very _____ for our new employees. It explained how to use the printer and book meeting rooms.",
    "options": [
      "rude",
      "noisy",
      "watchful",
      "helpful"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The meeting room next to the kitchen is too _____ for phone calls. Please use the small room on the third floor instead.",
    "options": [
      "generous",
      "noisy",
      "considerate",
      "helpful"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Please keep your voice down in the library area. Staff members need a _____ space to concentrate on their work.",
    "options": [
      "quiet",
      "rude",
      "noisy",
      "generous"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "A hotel manager will _____ the guests at the entrance when they arrive. Then the staff will show them to their rooms.",
    "options": [
      "borrow",
      "lend",
      "greet",
      "disturb"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "If you forget your laptop charger, you can _____ one from the IT department. Please return it before you leave the office.",
    "options": [
      "lend",
      "borrow",
      "greet",
      "cooperate"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Our bank can _____ small businesses up to fifty thousand dollars. The money must be paid back within three years.",
    "options": [
      "borrow",
      "visit",
      "greet",
      "lend"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "At the start of the meeting, the director will _____ the new sales manager to the team. Everyone should be in the room by nine.",
    "options": [
      "borrow",
      "disturb",
      "introduce",
      "celebrate"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "All visitors must _____ the privacy of the patients in the hospital. Please do not take photos in the waiting areas.",
    "options": [
      "respect",
      "greet",
      "lend",
      "chat"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Hotel guests expect complete _____ in their rooms. Cleaning staff should always knock and wait before entering.",
    "options": [
      "fence",
      "gathering",
      "driveway",
      "privacy"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The two departments must _____ closely to finish the project on time. They will share all data through the online system.",
    "options": [
      "disturb",
      "cooperate",
      "borrow",
      "greet"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The restaurant received a _____ about slow service on Friday night. The manager called the customer to apologize the next day.",
    "options": [
      "complaint",
      "fence",
      "courtyard",
      "household"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The manager met with both employees to solve the _____ between them. They had disagreed about the project schedule for weeks.",
    "options": [
      "courtesy",
      "driveway",
      "conflict",
      "privacy"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Visitors must show their ID cards to the _____ guard at the main gate. This rule helps protect everyone in the factory.",
    "options": [
      "gathering",
      "security",
      "complaint",
      "household"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The workers put up a tall _____ around the construction site. It keeps children and animals away from the dangerous machines.",
    "options": [
      "courtesy",
      "privacy",
      "relationship",
      "fence"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Please do not park in front of the garage. The _____ must be kept clear for delivery trucks at all times.",
    "options": [
      "gathering",
      "complaint",
      "driveway",
      "courtesy"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Our neighbors are very _____ people. They always turn their music down after ten so that we can sleep.",
    "options": [
      "considerate",
      "rude",
      "noisy",
      "watchful"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The customer was very _____ to the cashier and shouted at her. The store manager asked him politely to leave.",
    "options": [
      "generous",
      "helpful",
      "considerate",
      "rude"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The company gave a _____ donation to the local children's hospital. The money will be used to buy new medical equipment.",
    "options": [
      "noisy",
      "generous",
      "rude",
      "watchful"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The team will _____ the successful product launch with a dinner on Friday. All staff members and their families are invited.",
    "options": [
      "celebrate",
      "disturb",
      "borrow",
      "cooperate"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Please do not _____ the speaker during the presentation. You can ask your questions at the end of the session.",
    "options": [
      "greet",
      "celebrate",
      "disturb",
      "lend"
    ],
    "answer": 2,
    "vocabIndex": 36
  },
  {
    "q": "The new tenants plan to _____ next Saturday morning. The landlord will give them the keys on Friday afternoon.",
    "options": [
      "move out",
      "move in",
      "cooperate",
      "chat"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "Tenants who wish to _____ must give the landlord one month's notice. They must also clean the apartment before returning the keys.",
    "options": [
      "move in",
      "greet",
      "celebrate",
      "move out"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "Good customer service helps us build a long-term _____ with our clients. Happy customers often recommend us to their friends.",
    "options": [
      "fence",
      "complaint",
      "relationship",
      "driveway"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "As a _____, the hotel offers free coffee to guests waiting in the lobby. Staff will also store luggage for early arrivals.",
    "options": [
      "courtesy",
      "conflict",
      "fence",
      "complaint"
    ],
    "answer": 0,
    "vocabIndex": 35
  }
];

const LOOKUP = {
  "neighborhood": {
    "pos": "n.",
    "en_def": "the area around a place where people live",
    "cn_def": "街坊；社區；鄰近地區"
  },
  "community": {
    "pos": "n.",
    "en_def": "a group of people living in the same area",
    "cn_def": "社區；社群"
  },
  "resident": {
    "pos": "n.",
    "en_def": "a person who lives in a particular place",
    "cn_def": "居民；住戶"
  },
  "apartment": {
    "pos": "n.",
    "en_def": "a set of rooms for living in, usually on one floor of a building",
    "cn_def": "公寓"
  },
  "household": {
    "pos": "n.",
    "en_def": "all the people living together in one home",
    "cn_def": "家庭；一戶"
  },
  "friendly": {
    "pos": "adj.",
    "en_def": "kind and pleasant to other people",
    "cn_def": "友善的"
  },
  "helpful": {
    "pos": "adj.",
    "en_def": "willing to help; useful",
    "cn_def": "樂於助人的；有幫助的"
  },
  "noisy": {
    "pos": "adj.",
    "en_def": "making a lot of loud sound",
    "cn_def": "吵鬧的"
  },
  "quiet": {
    "pos": "adj.",
    "en_def": "making little or no noise",
    "cn_def": "安靜的"
  },
  "greet": {
    "pos": "v.",
    "en_def": "to say hello to someone when you meet them",
    "cn_def": "打招呼；迎接"
  },
  "visit": {
    "pos": "v.",
    "en_def": "to go to see a person or place",
    "cn_def": "拜訪；探望；參觀"
  },
  "borrow": {
    "pos": "v.",
    "en_def": "to take something from someone and promise to give it back",
    "cn_def": "借（入）"
  },
  "lend": {
    "pos": "v.",
    "en_def": "to give something to someone for a short time",
    "cn_def": "借（出）"
  },
  "introduce": {
    "pos": "v.",
    "en_def": "to tell people each other's names when they first meet",
    "cn_def": "介紹"
  },
  "respect": {
    "pos": "v.",
    "en_def": "to treat someone or something with care and consideration",
    "cn_def": "尊重"
  },
  "privacy": {
    "pos": "n.",
    "en_def": "the state of being alone and not watched by others",
    "cn_def": "隱私"
  },
  "cooperate": {
    "pos": "v.",
    "en_def": "to work together with others to do something",
    "cn_def": "合作；配合"
  },
  "complaint": {
    "pos": "n.",
    "en_def": "a statement that something is wrong or not good enough",
    "cn_def": "抱怨；投訴"
  },
  "conflict": {
    "pos": "n.",
    "en_def": "a serious disagreement between people",
    "cn_def": "衝突"
  },
  "support": {
    "pos": "n.",
    "en_def": "help and encouragement",
    "cn_def": "支持；幫助"
  },
  "trust": {
    "pos": "v.",
    "en_def": "to believe that someone is honest and will not harm you",
    "cn_def": "信任"
  },
  "relationship": {
    "pos": "n.",
    "en_def": "the way people feel and behave toward each other",
    "cn_def": "關係"
  },
  "gathering": {
    "pos": "n.",
    "en_def": "a meeting of people for a social purpose",
    "cn_def": "聚會"
  },
  "celebrate": {
    "pos": "v.",
    "en_def": "to do something enjoyable for a special occasion",
    "cn_def": "慶祝"
  },
  "security": {
    "pos": "n.",
    "en_def": "protection from crime or danger",
    "cn_def": "安全；保全"
  },
  "fence": {
    "pos": "n.",
    "en_def": "a wall made of wood or wire around a yard or field",
    "cn_def": "圍籬；籬笆"
  },
  "driveway": {
    "pos": "n.",
    "en_def": "a short private road from the street to a house or garage",
    "cn_def": "車道"
  },
  "courtyard": {
    "pos": "n.",
    "en_def": "an open space with walls or buildings around it",
    "cn_def": "庭院；中庭"
  },
  "considerate": {
    "pos": "adj.",
    "en_def": "thinking about other people's feelings and needs",
    "cn_def": "體貼的"
  },
  "rude": {
    "pos": "adj.",
    "en_def": "not polite",
    "cn_def": "無禮的"
  },
  "generous": {
    "pos": "adj.",
    "en_def": "willing to give money, time, or help",
    "cn_def": "慷慨的"
  },
  "chat": {
    "pos": "v.",
    "en_def": "to talk in a friendly and informal way",
    "cn_def": "聊天"
  },
  "watchful": {
    "pos": "adj.",
    "en_def": "paying close attention to what is happening",
    "cn_def": "警覺的；留意的"
  },
  "move in": {
    "pos": "v.phr.",
    "en_def": "to start living in a new home",
    "cn_def": "搬入；遷入"
  },
  "move out": {
    "pos": "v.phr.",
    "en_def": "to leave your home and go to live somewhere else",
    "cn_def": "搬出；遷出"
  },
  "courtesy": {
    "pos": "n.",
    "en_def": "polite behavior that shows respect for others",
    "cn_def": "禮貌；禮節"
  },
  "disturb": {
    "pos": "v.",
    "en_def": "to interrupt or bother someone",
    "cn_def": "打擾"
  }
};

const EXTRA_GLOSSES = {};
