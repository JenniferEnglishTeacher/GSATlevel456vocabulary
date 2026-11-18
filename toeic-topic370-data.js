// Topic 370 Quiz Data: Star 星星
// Source word list: https://www.examword.com/group-topic/star — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T370 - Star 星星",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "planet",
    "pos": "n.",
    "cn_def": "行星",
    "en_def": "a large round object in space that moves around a star",
    "sentence": "A: Why did the science museum decide to stay open late every Friday this month, and are many families actually coming? B: They are showing a new film about every {{BLANK}} in our solar system, so lots of parents bring their children after work, and the gift shop is selling more space books than ever.",
    "cn": "A：為什麼科學博物館這個月決定每週五都延長開放時間？真的有很多家庭來參觀嗎？ B：他們正在放映一部介紹太陽系中每顆【行星】的新影片，所以很多家長下班後帶孩子來，而且禮品店的太空書籍賣得比以往都好。"
  },
  {
    "word": "galaxy",
    "pos": "n.",
    "cn_def": "星系；銀河",
    "en_def": "a very large group of stars, gas and dust in space",
    "sentence": "A: What kind of picture should we use on the cover of the new company calendar, since the marketing team wants something modern and exciting? B: I suggest a colorful photo of a distant {{BLANK}} taken by a space telescope, because it looks beautiful and matches our slogan about reaching for bigger goals next year.",
    "cn": "A：新的公司月曆封面該用什麼樣的圖片？行銷團隊想要現代又令人興奮的感覺。 B：我建議用一張由太空望遠鏡拍攝的遙遠【星系】彩色照片，因為它看起來很美，也符合我們明年追求更遠大目標的標語。"
  },
  {
    "word": "universe",
    "pos": "n.",
    "cn_def": "宇宙",
    "en_def": "all of space and everything that exists in it",
    "sentence": "A: Did you enjoy the guest speaker at yesterday's training session, or did you find the topic too difficult to follow after a long day? B: I really enjoyed it, because she compared our small company to a tiny star in a huge {{BLANK}} and explained clearly how we can still shine brightly in a big market.",
    "cn": "A：你喜歡昨天培訓課程的客座講者嗎？還是你覺得在忙了一整天之後，那個主題太難理解？ B：我真的很喜歡，因為她把我們的小公司比喻成廣大【宇宙】中的一顆小星星，並清楚解釋我們如何仍能在大市場中閃閃發光。"
  },
  {
    "word": "constellation",
    "pos": "n.",
    "cn_def": "星座",
    "en_def": "a group of stars that forms a shape or pattern in the sky",
    "sentence": "A: What did the children learn during the night camping trip that the travel agency organized for our employees' families last weekend? B: A local guide showed them how to find a famous {{BLANK}} that looks like a hunter, and the kids were so excited that they drew pictures of it in their notebooks.",
    "cn": "A：上週末旅行社為我們員工家庭舉辦的夜間露營活動中，孩子們學到了什麼？ B：一位當地導遊教他們如何找到一個看起來像獵人的著名【星座】，孩子們興奮得在筆記本上把它畫了下來。"
  },
  {
    "word": "orbit",
    "pos": "v.",
    "cn_def": "繞……運行",
    "en_def": "to move in a circle around a planet, star or moon",
    "sentence": "A: Why is the engineering department hiring so many new staff members this year, and what exactly will the new team be working on? B: We signed a contract to build a small satellite that will {{BLANK}} the Earth to collect weather information, so we need more people to design and test the equipment before next spring.",
    "cn": "A：工程部門今年為什麼要招聘這麼多新員工？新團隊確切會做什麼工作？ B：我們簽了一份合約，要製造一顆小型衛星，它將【繞著】地球【運行】來蒐集氣象資訊，所以在明年春天之前，我們需要更多人來設計和測試設備。"
  },
  {
    "word": "shine",
    "pos": "v.",
    "cn_def": "照耀；發光",
    "en_def": "to give out or reflect bright light",
    "sentence": "A: Should we move the outdoor dinner for our overseas clients indoors, or do you think the weather will be good enough tonight? B: Let's keep it outside, because the forecast says the sky will be clear, and the stars will {{BLANK}} above the garden, which will make the evening feel special for our guests.",
    "cn": "A：我們應該把招待海外客戶的戶外晚宴移到室內嗎？還是你覺得今晚的天氣會夠好？ B：我們還是辦在戶外吧，因為天氣預報說今晚天空晴朗，星星會在花園上方【閃耀】，這會讓客人覺得這個夜晚很特別。"
  },
  {
    "word": "sparkle",
    "pos": "v.",
    "cn_def": "閃耀；閃閃發光",
    "en_def": "to shine with many small flashes of light",
    "sentence": "A: How did the hotel staff decorate the ballroom for the company's year-end party, and did the managers like the final result? B: They hung hundreds of tiny silver lights from the ceiling so that they would {{BLANK}} like stars in the night sky, and everyone said it was the most beautiful party we have had.",
    "cn": "A：飯店員工是怎麼布置公司尾牙的宴會廳？經理們喜歡最後的成果嗎？ B：他們在天花板上掛了數百顆銀色小燈，讓它們像夜空中的星星一樣【閃閃發光】，大家都說這是我們辦過最漂亮的派對。"
  },
  {
    "word": "twinkle",
    "pos": "v.",
    "cn_def": "（星星）閃爍",
    "en_def": "to shine with a light that changes quickly from bright to weak",
    "sentence": "A: Why do you always choose the mountain hotel when you need a quiet weekend away from the busy office in the city? B: Because the air there is clean and there are no bright city lights, so I can sit on the balcony after dinner and watch thousands of stars {{BLANK}} above the trees.",
    "cn": "A：當你需要遠離城市裡忙碌的辦公室、度過安靜的週末時，為什麼總是選擇那家山上的飯店？ B：因為那裡空氣乾淨，又沒有明亮的城市燈光，所以晚餐後我可以坐在陽台上，看著樹梢上數千顆星星【閃爍】。"
  },
  {
    "word": "glow",
    "pos": "v.",
    "cn_def": "發出微光；發亮",
    "en_def": "to give out a soft, steady light",
    "sentence": "A: Have you seen the new safety signs that were installed in the parking garage, and do you think they really work at night? B: Yes, I noticed them yesterday, because they {{BLANK}} softly in the dark after the lights go off, so drivers and walkers can easily find the exits even during a power failure.",
    "cn": "A：你看到停車場新裝的安全標誌了嗎？你覺得它們晚上真的有用嗎？ B：有，我昨天注意到了，因為燈關掉後它們會在黑暗中柔和地【發光】，所以即使停電，駕駛和行人也能輕鬆找到出口。"
  },
  {
    "word": "bright",
    "pos": "adj.",
    "cn_def": "明亮的；光亮的",
    "en_def": "giving out or full of strong light",
    "sentence": "A: Is it possible to see any stars from the rooftop of our office building, or is there too much light pollution downtown? B: You can usually see only one or two {{BLANK}} stars on clear nights, but if you want to see more, you should drive out to the countryside, where the sky is much darker.",
    "cn": "A：從我們辦公大樓的屋頂能看到星星嗎？還是市中心的光害太嚴重了？ B：在晴朗的夜晚，通常只能看到一兩顆【明亮的】星星，但如果你想看到更多，就應該開車到鄉下，那裡的天空暗得多。"
  },
  {
    "word": "dim",
    "pos": "adj.",
    "cn_def": "昏暗的；暗淡的",
    "en_def": "not bright; giving only a little light",
    "sentence": "A: Why did several guests complain about the restaurant where we held the client dinner on Thursday evening, even though the food was excellent? B: The lights in the dining room were so {{BLANK}} that some older guests could not read the menu, and a few people had to use their phones as flashlights to choose their dishes.",
    "cn": "A：雖然食物很棒，為什麼還有好幾位客人抱怨我們週四晚上招待客戶的那家餐廳？ B：餐廳的燈光太【昏暗】了，有些年長的客人看不清菜單，還有幾個人得用手機當手電筒才能點菜。"
  },
  {
    "word": "distant",
    "pos": "adj.",
    "cn_def": "遙遠的",
    "en_def": "far away in space or time",
    "sentence": "A: What is the topic of the documentary that the education channel asked our production company to make for next season? B: It is about how scientists search for planets around {{BLANK}} stars, so we will travel to several observatories in South America and interview researchers who study the night sky every day.",
    "cn": "A：教育頻道請我們製作公司為下一季拍攝的紀錄片主題是什麼？ B：是關於科學家如何在【遙遠的】恆星周圍尋找行星，所以我們會到南美洲幾座天文台，訪問每天研究夜空的研究人員。"
  },
  {
    "word": "celestial",
    "pos": "adj.",
    "cn_def": "天空的；天體的",
    "en_def": "relating to the sky or outer space",
    "sentence": "A: Why is the new hotel lobby getting so much attention on social media, and are more guests booking rooms because of it? B: The designer painted a huge map of {{BLANK}} objects such as stars, planets and comets on the ceiling, and many visitors take photos of it, which has helped bookings go up quickly.",
    "cn": "A：新的飯店大廳為什麼在社群媒體上這麼受注目？有更多客人因此訂房嗎？ B：設計師在天花板上畫了一幅巨大的【天體】地圖，上面有恆星、行星和彗星，許多訪客都會拍照，這讓訂房數量迅速增加。"
  },
  {
    "word": "astronomy",
    "pos": "n.",
    "cn_def": "天文學",
    "en_def": "the scientific study of stars, planets and space",
    "sentence": "A: What kind of summer program is the community center offering for teenagers this year, and how many students have signed up so far? B: It is offering a two-week {{BLANK}} course where students learn how to use telescopes and read star maps, and more than fifty students have already registered, so they may add another class.",
    "cn": "A：社區中心今年為青少年提供什麼樣的暑期課程？目前有多少學生報名了？ B：中心開設了為期兩週的【天文學】課程，學生會學習如何使用望遠鏡和看星圖，已經有超過五十名學生報名，所以他們可能會再加開一班。"
  },
  {
    "word": "astronomer",
    "pos": "n.",
    "cn_def": "天文學家",
    "en_def": "a scientist who studies stars, planets and space",
    "sentence": "A: Who will give the main speech at the science fair that our company is sponsoring at the convention center next month? B: A famous {{BLANK}} from the national observatory has agreed to come, and she will talk about her research on new stars, so we expect a large crowd of students and teachers.",
    "cn": "A：我們公司下個月在會展中心贊助的科學博覽會，主講人是誰？ B：國家天文台一位著名的【天文學家】已經答應出席，她會談論自己對新恆星的研究，所以我們預計會有大批學生和老師前來。"
  },
  {
    "word": "telescope",
    "pos": "n.",
    "cn_def": "望遠鏡",
    "en_def": "a tube-shaped tool that makes distant objects look bigger and closer",
    "sentence": "A: What gift should we give the retiring manager who has worked here for thirty years and loves looking at the night sky? B: Let's buy him a good {{BLANK}} for his garden, because he told us he finally wants to spend more time watching the stars and planets after he stops working.",
    "cn": "A：我們該送什麼禮物給那位在這裡工作了三十年、又熱愛觀賞夜空的退休經理？ B：我們買一架好的【望遠鏡】給他放在花園吧，因為他說退休後終於想花更多時間觀賞星星和行星。"
  },
  {
    "word": "supernova",
    "pos": "n.",
    "cn_def": "超新星",
    "en_def": "a very bright explosion of a large star",
    "sentence": "A: Why were the science magazine's online articles suddenly read by so many people last week, and did it affect our advertising sales? B: Scientists reported a {{BLANK}} that was bright enough to see without special equipment, so many readers visited the website for news, and our advertisers were very happy with the extra views.",
    "cn": "A：為什麼上週那本科學雜誌的線上文章突然有這麼多人閱讀？這對我們的廣告銷售有影響嗎？ B：科學家發現了一顆亮到不需特殊設備就能看到的【超新星】，所以很多讀者上網站看新聞，我們的廣告客戶對額外的瀏覽量非常滿意。"
  },
  {
    "word": "nebula",
    "pos": "n.",
    "cn_def": "星雲",
    "en_def": "a huge cloud of gas and dust in space where stars are formed",
    "sentence": "A: How did the design team choose the colors for the new line of phone cases that will be released in stores this winter? B: They were inspired by a space photo of a {{BLANK}}, which shows clouds of purple, pink and blue gas, so they used those soft colors to create a dreamy look for young customers.",
    "cn": "A：設計團隊是怎麼為今年冬天要上市的新系列手機殼選擇顏色的？ B：他們的靈感來自一張【星雲】的太空照片，照片中有紫色、粉色和藍色的氣體雲，所以他們用這些柔和的顏色為年輕顧客打造夢幻的感覺。"
  },
  {
    "word": "cluster",
    "pos": "n.",
    "cn_def": "群；簇；星團",
    "en_def": "a group of similar things that are close together",
    "sentence": "A: What can visitors see from the new observation deck at the mountain resort, and is it worth the extra ticket price? B: On clear nights, they can see a small {{BLANK}} of stars that looks like a tiny group of diamonds, and most guests say it is the highlight of their trip, so the price is worth it.",
    "cn": "A：遊客從山區度假村的新觀景台能看到什麼？值得多付門票錢嗎？ B：在晴朗的夜晚，他們能看到一個小小的星【團】，看起來就像一小群鑽石，大部分客人都說這是旅程的亮點，所以值得這個價錢。"
  },
  {
    "word": "comet",
    "pos": "n.",
    "cn_def": "彗星",
    "en_def": "an object in space made of ice and dust with a bright tail",
    "sentence": "A: Why are so many hotels near the national park fully booked for the second weekend of next month, even though it is not a holiday? B: A {{BLANK}} with a long, bright tail will be visible in the sky that weekend, and thousands of people want to watch it from the park, where there are almost no city lights.",
    "cn": "A：雖然不是假日，為什麼國家公園附近這麼多飯店在下個月第二個週末都客滿了？ B：那個週末天空中會出現一顆拖著明亮長尾巴的【彗星】，成千上萬的人想在幾乎沒有城市燈光的公園裡觀賞它。"
  },
  {
    "word": "satellite",
    "pos": "n.",
    "cn_def": "人造衛星",
    "en_def": "a machine sent into space to move around the Earth and send information",
    "sentence": "A: Why was the video conference with our partners in Australia cancelled at the last minute this morning, and when will we try again? B: A problem with the {{BLANK}} that carries their internet signal caused the connection to fail, so the technicians are fixing it now, and we will try again tomorrow at the same time.",
    "cn": "A：今天早上和澳洲合作夥伴的視訊會議為什麼臨時取消了？我們什麼時候再試一次？ B：傳送他們網路訊號的【衛星】出了問題，導致連線失敗，所以技術人員正在修理，我們明天同一時間再試一次。"
  },
  {
    "word": "radiant",
    "pos": "adj.",
    "cn_def": "光芒四射的；容光煥發的",
    "en_def": "shining brightly; also looking very happy",
    "sentence": "A: How did the bride look at the wedding reception that you attended at the seaside hotel last Saturday afternoon? B: She looked absolutely {{BLANK}} in her white dress, and she smiled all evening as guests congratulated her, so the photographer took hundreds of pictures to make sure the couple would remember the day.",
    "cn": "A：上週六下午你參加的那場在海邊飯店舉行的婚宴，新娘看起來怎麼樣？ B：她穿著白色禮服，看起來【容光煥發】，整晚都在客人祝賀時微笑著，所以攝影師拍了數百張照片，確保新人會記得這一天。"
  },
  {
    "word": "luminous",
    "pos": "adj.",
    "cn_def": "發光的；夜光的",
    "en_def": "giving out light, so it is easy to see in the dark",
    "sentence": "A: Why did the factory ask all night-shift workers to wear the new safety vests starting next Monday, and are they comfortable? B: The vests have {{BLANK}} strips that are easy to see in the dark, so forklift drivers can notice workers more quickly, and most staff say the material is light and comfortable.",
    "cn": "A：為什麼工廠要求所有夜班工人從下週一開始穿新的安全背心？穿起來舒服嗎？ B：背心上有在黑暗中很容易看見的【夜光】條，所以堆高機駕駛能更快注意到工人，大多數員工也說材質輕盈又舒適。"
  },
  {
    "word": "massive",
    "pos": "adj.",
    "cn_def": "巨大的；大量的",
    "en_def": "very large, heavy and solid",
    "sentence": "A: How much damage did the storm cause at the outdoor concert stage, and will the event still go ahead this weekend as planned? B: A {{BLANK}} tree fell onto the roof of the stage, so the workers need at least three days to remove it and repair the lights, but the organizers hope to open on Sunday.",
    "cn": "A：暴風雨對戶外演唱會舞台造成了多大損壞？這週末的活動還會照計畫進行嗎？ B：一棵【巨大的】樹倒在舞台頂上，工人至少需要三天時間移除它並修好燈光，但主辦單位希望週日能開放。"
  },
  {
    "word": "cosmic",
    "pos": "adj.",
    "cn_def": "宇宙的",
    "en_def": "relating to the whole universe or outer space",
    "sentence": "A: What is the theme of the new exhibition that the art gallery downtown is preparing, and when does it open to the public? B: It is called \"Journey Through Space,\" and the artists use light and sound to show {{BLANK}} events like the birth of stars, so it should attract a lot of families when it opens in March.",
    "cn": "A：市中心那家美術館正在籌備的新展覽主題是什麼？什麼時候對外開放？ B：展覽叫做「太空之旅」，藝術家們用光和聲音呈現像恆星誕生這樣的【宇宙】事件，所以三月開展時應該會吸引很多家庭。"
  },
  {
    "word": "infinite",
    "pos": "adj.",
    "cn_def": "無限的；無窮的",
    "en_def": "without limits or an end",
    "sentence": "A: Why does the head of customer service always stay calm, even when angry customers shout at her on the phone for a long time? B: She seems to have {{BLANK}} patience, and she says listening carefully is the best way to solve problems, so most callers feel better and thank her by the end of the conversation.",
    "cn": "A：為什麼客服主管總是能保持冷靜，即使憤怒的客戶在電話中對她大吼很久也一樣？ B：她似乎有【無限的】耐心，她說仔細傾聽是解決問題的最好方法，所以大部分來電者到通話結束時都會感覺好一些，還會向她道謝。"
  },
  {
    "word": "stellar",
    "pos": "adj.",
    "cn_def": "出色的；恆星的",
    "en_def": "excellent; also relating to stars",
    "sentence": "A: Did the new sales manager meet her targets during her first year, or does the director think she needs more training next year? B: She did a {{BLANK}} job and doubled the number of overseas clients, so the director plans to give her a bonus and ask her to lead the team in Singapore as well.",
    "cn": "A：新的業務經理第一年有達成目標嗎？還是總監認為她明年需要更多訓練？ B：她表現【出色】，海外客戶數量翻了一倍，所以總監打算給她獎金，並請她也負責帶領新加坡的團隊。"
  },
  {
    "word": "formation",
    "pos": "n.",
    "cn_def": "形成；構成",
    "en_def": "the process of something being made or the shape it forms",
    "sentence": "A: What will the guest scientist talk about at the public lecture that the university library is holding next Thursday evening? B: She will explain the {{BLANK}} of new stars inside huge clouds of gas, and she will also show photos from a space telescope, so I think both students and adults will find it interesting.",
    "cn": "A：下週四晚上大學圖書館舉辦的公開講座，客座科學家會談什麼？ B：她會解釋新恆星如何在巨大的氣體雲中【形成】，還會展示太空望遠鏡拍攝的照片，所以我想學生和成人都會覺得很有趣。"
  },
  {
    "word": "eclipse",
    "pos": "n.",
    "cn_def": "日蝕；月蝕",
    "en_def": "a time when the sun or moon is hidden by another object",
    "sentence": "A: Why did the office manager tell everyone to take a break at two o'clock tomorrow afternoon, and is the meeting still happening? B: There will be a solar {{BLANK}} at that time, so she wants staff to go up to the roof with special glasses to watch it, and the meeting has been moved to three thirty.",
    "cn": "A：辦公室經理為什麼叫大家明天下午兩點休息一下？會議還照常開嗎？ B：那時會有日【蝕】，所以她希望員工戴上特殊眼鏡到屋頂觀看，會議已經改到三點半了。"
  },
  {
    "word": "horizon",
    "pos": "n.",
    "cn_def": "地平線；視野",
    "en_def": "the line where the earth or sea seems to meet the sky",
    "sentence": "A: What did you enjoy most about the business trip to the coast, besides meeting the new suppliers at their factory? B: Every evening after work, I walked along the beach and watched the first stars appear just above the {{BLANK}}, where the dark sea seemed to meet the sky, and it helped me relax.",
    "cn": "A：除了在工廠和新供應商見面之外，這次到海岸出差你最喜歡什麼？ B：每天下班後，我會沿著海灘散步，看著第一批星星出現在【地平線】上方，那裡黑暗的海面彷彿與天空相接，這讓我很放鬆。"
  },
  {
    "word": "midnight",
    "pos": "n.",
    "cn_def": "午夜；半夜十二點",
    "en_def": "twelve o'clock at night",
    "sentence": "A: How late did the team have to stay at the office to finish the project report for the client presentation this morning? B: We worked until {{BLANK}}, and when we finally left the building, the sky was full of stars, so we were tired but happy that the report was ready on time.",
    "cn": "A：為了完成今天早上客戶簡報要用的專案報告，團隊得在辦公室待到多晚？ B：我們一直工作到【午夜】，終於離開大樓時，天空滿是星星，所以我們雖然累，但很高興報告準時完成了。"
  },
  {
    "word": "gravity",
    "pos": "n.",
    "cn_def": "地心引力；重力",
    "en_def": "the force that pulls objects toward the earth or other large bodies",
    "sentence": "A: Why did the children's science show at the shopping mall attract such a big crowd on Saturday morning? B: The presenter dropped different objects from a high platform to show how {{BLANK}} pulls everything down at the same speed, and the kids loved shouting out guesses about which item would land first.",
    "cn": "A：為什麼週六早上購物中心的兒童科學秀吸引了那麼多人？ B：主持人從高台上丟下不同的物品，示範【地心引力】如何以相同速度把所有東西往下拉，孩子們很喜歡大聲猜哪個東西會先落地。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索；探險",
    "en_def": "to travel around a place to learn about it",
    "sentence": "A: What does the travel company plan to offer customers next year, since many of them say they want something more adventurous? B: It will launch desert tours where guests can {{BLANK}} the sand dunes during the day and look at the stars at night, and the first trips are already almost fully booked.",
    "cn": "A：既然很多顧客說想要更具冒險性的行程，旅行社明年打算提供什麼？ B：他們將推出沙漠之旅，遊客白天可以【探索】沙丘，晚上欣賞星空，第一批行程已經幾乎額滿了。"
  },
  {
    "word": "observe",
    "pos": "v.",
    "cn_def": "觀察；觀測",
    "en_def": "to watch something carefully",
    "sentence": "A: Why did the research team rent a cabin high in the mountains for the whole week, instead of staying at the hotel in town? B: They need to {{BLANK}} the stars every night without any city lights, so the cabin is the best place for their equipment, even though it takes an hour to drive there.",
    "cn": "A：研究團隊為什麼整個星期都租了山上高處的小木屋，而不是住在鎮上的飯店？ B：他們每晚都需要在沒有城市燈光的情況下【觀測】星星，所以雖然開車要一個小時，小木屋還是放置設備的最佳地點。"
  }
];

const MCQS = [
  {
    "q": "Mars is often called the red _____ because of its color. Our new travel game lets children visit it on a virtual tour.",
    "options": [
      "planet",
      "galaxy",
      "comet",
      "horizon"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our solar system is only a small part of the Milky Way. This _____ contains billions of stars and huge clouds of gas.",
    "options": [
      "planet",
      "galaxy",
      "satellite",
      "horizon"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The museum's new film shows how stars and planets began. It explains scientists' ideas about the beginning of the _____.",
    "options": [
      "telescope",
      "horizon",
      "universe",
      "midnight"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The guide pointed at a group of stars shaped like a bear. She said this _____ is easy to find in winter.",
    "options": [
      "satellite",
      "telescope",
      "gravity",
      "constellation"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The communication company will launch three new satellites next year. They will _____ the Earth and improve phone service in rural areas.",
    "options": [
      "observe",
      "orbit",
      "shine",
      "glow"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Please close the blinds in the meeting room before the presentation. The afternoon sun will _____ directly on the screen.",
    "options": [
      "shine",
      "orbit",
      "explore",
      "observe"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The jewelry store cleaned every ring before the holiday sale. Under the bright lights, the diamonds seemed to _____ in their cases.",
    "options": [
      "orbit",
      "explore",
      "observe",
      "sparkle"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Far from the city lights, the night sky was full of stars. The campers lay on the grass and watched them _____ above.",
    "options": [
      "orbit",
      "explore",
      "twinkle",
      "observe"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The new emergency signs are made with special paint. They _____ in the dark, so workers can find the exits during a blackout.",
    "options": [
      "glow",
      "orbit",
      "explore",
      "observe"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The office needs better lighting near the reception desk. Visitors have said the area is not _____ enough for signing forms.",
    "options": [
      "distant",
      "massive",
      "bright",
      "infinite"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The lights in the old warehouse are very weak. Workers find it hard to read the labels in such _____ conditions.",
    "options": [
      "stellar",
      "dim",
      "massive",
      "cosmic"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The company hopes to expand into Asian markets in the _____ future. For now, it is focusing on customers in Europe.",
    "options": [
      "luminous",
      "bright",
      "radiant",
      "distant"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Ancient sailors used the stars to find their way at sea. They studied the movements of _____ bodies very carefully.",
    "options": [
      "massive",
      "dim",
      "celestial",
      "stellar"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Ms. Lin studied _____ at university before joining our company. She still enjoys looking at stars with her telescope on weekends.",
    "options": [
      "astronomy",
      "gravity",
      "formation",
      "eclipse"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The observatory has hired a new _____ to lead its research team. She has studied distant stars for more than twenty years.",
    "options": [
      "satellite",
      "telescope",
      "constellation",
      "astronomer"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The science center bought a powerful new _____ for its rooftop. Visitors can now see the rings of Saturn on clear nights.",
    "options": [
      "satellite",
      "telescope",
      "comet",
      "horizon"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "A huge star exploded in a distant galaxy last month. Scientists say the _____ was bright enough to see for several weeks.",
    "options": [
      "supernova",
      "nebula",
      "horizon",
      "constellation"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The new office buildings are built in a small _____ near the train station. Employees can walk between them in a few minutes.",
    "options": [
      "horizon",
      "eclipse",
      "cluster",
      "gravity"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Viewers will see a _____ with a long, bright tail next week. The best time to watch it is just before sunrise.",
    "options": [
      "planet",
      "galaxy",
      "nebula",
      "comet"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Bad weather damaged the antenna on our roof yesterday. As a result, the _____ television service in the lobby is not working.",
    "options": [
      "comet",
      "satellite",
      "telescope",
      "nebula"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The award winner gave a _____ smile as she walked onto the stage. Her colleagues stood up and cheered loudly for her.",
    "options": [
      "luminous",
      "distant",
      "radiant",
      "dim"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Night-shift staff must wear vests with _____ strips. Drivers in the parking area can then see them easily in the dark.",
    "options": [
      "luminous",
      "distant",
      "infinite",
      "celestial"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The storm caused _____ damage to the factory roof last night. Repairs will take at least two weeks to finish.",
    "options": [
      "dim",
      "massive",
      "bright",
      "distant"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Our customer service manager has almost _____ patience. She stays calm even when callers become rude and angry.",
    "options": [
      "massive",
      "bright",
      "cosmic",
      "infinite"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The sales team delivered a _____ performance this quarter. Profits rose by thirty percent, so everyone will receive a bonus.",
    "options": [
      "stellar",
      "dim",
      "distant",
      "celestial"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The board approved the _____ of a new research team last week. It will focus on developing products for younger customers.",
    "options": [
      "gravity",
      "eclipse",
      "horizon",
      "formation"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "A total solar _____ will happen on Friday afternoon. Staff may go to the roof, but they must wear special glasses.",
    "options": [
      "horizon",
      "gravity",
      "eclipse",
      "nebula"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "As our plane landed, the sun was sinking below the _____. The whole sky turned orange and pink over the sea.",
    "options": [
      "eclipse",
      "horizon",
      "gravity",
      "galaxy"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The new manager plans to _____ new markets in South America next year. She will visit Brazil and Chile in March.",
    "options": [
      "explore",
      "orbit",
      "twinkle",
      "glow"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "Trainees will _____ experienced staff for the first two weeks. After that, they will begin serving customers on their own.",
    "options": [
      "orbit",
      "twinkle",
      "observe",
      "sparkle"
    ],
    "answer": 2,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "planet": {
    "pos": "n.",
    "en_def": "a large round object in space that moves around a star",
    "cn_def": "行星"
  },
  "galaxy": {
    "pos": "n.",
    "en_def": "a very large group of stars, gas and dust in space",
    "cn_def": "星系；銀河"
  },
  "universe": {
    "pos": "n.",
    "en_def": "all of space and everything that exists in it",
    "cn_def": "宇宙"
  },
  "constellation": {
    "pos": "n.",
    "en_def": "a group of stars that forms a shape or pattern in the sky",
    "cn_def": "星座"
  },
  "orbit": {
    "pos": "v.",
    "en_def": "to move in a circle around a planet, star or moon",
    "cn_def": "繞……運行"
  },
  "shine": {
    "pos": "v.",
    "en_def": "to give out or reflect bright light",
    "cn_def": "照耀；發光"
  },
  "sparkle": {
    "pos": "v.",
    "en_def": "to shine with many small flashes of light",
    "cn_def": "閃耀；閃閃發光"
  },
  "twinkle": {
    "pos": "v.",
    "en_def": "to shine with a light that changes quickly from bright to weak",
    "cn_def": "（星星）閃爍"
  },
  "glow": {
    "pos": "v.",
    "en_def": "to give out a soft, steady light",
    "cn_def": "發出微光；發亮"
  },
  "bright": {
    "pos": "adj.",
    "en_def": "giving out or full of strong light",
    "cn_def": "明亮的；光亮的"
  },
  "dim": {
    "pos": "adj.",
    "en_def": "not bright; giving only a little light",
    "cn_def": "昏暗的；暗淡的"
  },
  "distant": {
    "pos": "adj.",
    "en_def": "far away in space or time",
    "cn_def": "遙遠的"
  },
  "celestial": {
    "pos": "adj.",
    "en_def": "relating to the sky or outer space",
    "cn_def": "天空的；天體的"
  },
  "astronomy": {
    "pos": "n.",
    "en_def": "the scientific study of stars, planets and space",
    "cn_def": "天文學"
  },
  "astronomer": {
    "pos": "n.",
    "en_def": "a scientist who studies stars, planets and space",
    "cn_def": "天文學家"
  },
  "telescope": {
    "pos": "n.",
    "en_def": "a tube-shaped tool that makes distant objects look bigger and closer",
    "cn_def": "望遠鏡"
  },
  "supernova": {
    "pos": "n.",
    "en_def": "a very bright explosion of a large star",
    "cn_def": "超新星"
  },
  "nebula": {
    "pos": "n.",
    "en_def": "a huge cloud of gas and dust in space where stars are formed",
    "cn_def": "星雲"
  },
  "cluster": {
    "pos": "n.",
    "en_def": "a group of similar things that are close together",
    "cn_def": "群；簇；星團"
  },
  "comet": {
    "pos": "n.",
    "en_def": "an object in space made of ice and dust with a bright tail",
    "cn_def": "彗星"
  },
  "satellite": {
    "pos": "n.",
    "en_def": "a machine sent into space to move around the Earth and send information",
    "cn_def": "人造衛星"
  },
  "radiant": {
    "pos": "adj.",
    "en_def": "shining brightly; also looking very happy",
    "cn_def": "光芒四射的；容光煥發的"
  },
  "luminous": {
    "pos": "adj.",
    "en_def": "giving out light, so it is easy to see in the dark",
    "cn_def": "發光的；夜光的"
  },
  "massive": {
    "pos": "adj.",
    "en_def": "very large, heavy and solid",
    "cn_def": "巨大的；大量的"
  },
  "cosmic": {
    "pos": "adj.",
    "en_def": "relating to the whole universe or outer space",
    "cn_def": "宇宙的"
  },
  "infinite": {
    "pos": "adj.",
    "en_def": "without limits or an end",
    "cn_def": "無限的；無窮的"
  },
  "stellar": {
    "pos": "adj.",
    "en_def": "excellent; also relating to stars",
    "cn_def": "出色的；恆星的"
  },
  "formation": {
    "pos": "n.",
    "en_def": "the process of something being made or the shape it forms",
    "cn_def": "形成；構成"
  },
  "eclipse": {
    "pos": "n.",
    "en_def": "a time when the sun or moon is hidden by another object",
    "cn_def": "日蝕；月蝕"
  },
  "horizon": {
    "pos": "n.",
    "en_def": "the line where the earth or sea seems to meet the sky",
    "cn_def": "地平線；視野"
  },
  "midnight": {
    "pos": "n.",
    "en_def": "twelve o'clock at night",
    "cn_def": "午夜；半夜十二點"
  },
  "gravity": {
    "pos": "n.",
    "en_def": "the force that pulls objects toward the earth or other large bodies",
    "cn_def": "地心引力；重力"
  },
  "explore": {
    "pos": "v.",
    "en_def": "to travel around a place to learn about it",
    "cn_def": "探索；探險"
  },
  "observe": {
    "pos": "v.",
    "en_def": "to watch something carefully",
    "cn_def": "觀察；觀測"
  }
};

const EXTRA_GLOSSES = {};
