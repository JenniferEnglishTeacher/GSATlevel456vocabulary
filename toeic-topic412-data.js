// Topic 412 Quiz Data: Traditional Story 傳統故事
// Source word list: https://www.examword.com/group-topic/traditional-story — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T412 - Traditional Story 傳統故事",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "folktale",
    "pos": "n.",
    "cn_def": "民間故事",
    "en_def": "a traditional story passed on by ordinary people",
    "sentence": "A: Our marketing team needs a fresh idea for the new tea packaging, so do you have any suggestions before the meeting on Friday afternoon? B: We could print a short {{BLANK}} from Taiwan on each box, because customers enjoy reading old village stories while they wait for their tea to cool down.",
    "cn": "A：我們的行銷團隊需要為新的茶葉包裝想個新點子，所以在星期五下午的會議之前你有什麼建議嗎？ B：我們可以在每個盒子上印一則台灣的簡短【民間故事】，因為顧客喜歡在等茶變涼的時候閱讀古老的鄉村故事。"
  },
  {
    "word": "legend",
    "pos": "n.",
    "cn_def": "傳說",
    "en_def": "an old story that many people believe, but that may not be true",
    "sentence": "A: Why does the hotel in the mountains attract so many international guests every autumn, even though the rooms are quite expensive? B: According to a local {{BLANK}}, a golden dragon once lived in the lake behind the hotel, and many tourists come hoping to take photos of the famous water.",
    "cn": "A：為什麼山上那間飯店每年秋天都吸引這麼多國際旅客，儘管房間相當昂貴？ B：根據當地的一個【傳說】，曾經有一條金龍住在飯店後面的湖裡，許多遊客來這裡希望拍下那片有名的湖水。"
  },
  {
    "word": "myth",
    "pos": "n.",
    "cn_def": "神話；迷思",
    "en_def": "an ancient story about gods or heroes; also a false idea many people believe",
    "sentence": "A: I heard that the new museum exhibition is mostly for children, so do you think adults from our office would enjoy the trip next month? B: Yes, the exhibition explains an ancient Greek {{BLANK}} about gods and the sea, and it also shows how those stories shaped modern art and films.",
    "cn": "A：我聽說新的博物館展覽主要是給孩子看的，你覺得我們辦公室的大人會喜歡下個月的這趟參觀嗎？ B：會的，這個展覽講解了一則關於眾神與大海的古希臘【神話】，還展示了那些故事如何影響現代藝術和電影。"
  },
  {
    "word": "fable",
    "pos": "n.",
    "cn_def": "寓言",
    "en_def": "a short story, often with animals, that teaches a lesson",
    "sentence": "A: The training manager wants to start the workshop on teamwork with something short and memorable, but she does not want to show another long video. B: She could tell a {{BLANK}} about a tortoise and a rabbit, since the animals in the story clearly show why steady effort beats speed and pride.",
    "cn": "A：培訓經理想用一些簡短又好記的內容來開始團隊合作工作坊，但她不想再播放一部很長的影片。 B：她可以講一則關於烏龜和兔子的【寓言】，因為故事裡的動物清楚地說明了為什麼穩定的努力能勝過速度和驕傲。"
  },
  {
    "word": "fairy tale",
    "pos": "n.phr.",
    "cn_def": "童話",
    "en_def": "a children's story about magic, princes, princesses or fairies",
    "sentence": "A: What theme did the wedding planner suggest for the reception at the castle hotel, and will it cost much more than our original budget? B: She suggested a {{BLANK}} style with princess dresses, glass shoes and white horses, but she promised the extra decorations would only add about ten percent.",
    "cn": "A：婚禮策劃師為城堡飯店的喜宴建議了什麼主題？費用會比我們原本的預算高很多嗎？ B：她建議用有公主禮服、玻璃鞋和白馬的【童話】風格，但她保證額外的裝飾大約只會增加百分之十。"
  },
  {
    "word": "oral",
    "pos": "adj.",
    "cn_def": "口頭的；口述的",
    "en_def": "spoken, not written",
    "sentence": "A: How did the researchers collect so many old stories for the new book about the fishing villages along the east coast? B: They recorded {{BLANK}} histories from elderly residents, because most of the stories had never been written down and were only shared by speaking at family dinners.",
    "cn": "A：研究人員是怎麼為那本關於東海岸漁村的新書蒐集到這麼多古老故事的？ B：他們錄下了年長居民的【口述】歷史，因為大部分的故事從未被寫下來，只在家庭晚餐時用說的方式分享。"
  },
  {
    "word": "ancestor",
    "pos": "n.",
    "cn_def": "祖先",
    "en_def": "a family member who lived a long time before you",
    "sentence": "A: Why is your family flying back to the countryside next weekend when the office is so busy with the quarterly reports? B: Every spring we visit the hometown of my great-grandfather, because my parents believe it is important to clean the graves and honor each {{BLANK}} who worked hard for our family.",
    "cn": "A：辦公室為了季報這麼忙，為什麼你們家下週末還要飛回鄉下？ B：每年春天我們都會去我曾祖父的家鄉，因為我父母認為清掃墳墓並向每一位為我們家族辛苦付出的【祖先】致敬是很重要的。"
  },
  {
    "word": "heritage",
    "pos": "n.",
    "cn_def": "遺產；傳統文化",
    "en_def": "the history, traditions and buildings that a country or group has had for a long time",
    "sentence": "A: The city government has asked our design company to plan the new visitor center, so what should we focus on in the first proposal? B: We should highlight the local cultural {{BLANK}}, such as old temples, handmade crafts and traditional stories, so that tourists understand the long history of the area.",
    "cn": "A：市政府請我們設計公司規劃新的遊客中心，那我們在第一份提案中應該著重什麼？ B：我們應該突顯當地的文化【遺產】，例如古老的寺廟、手工藝品和傳統故事，讓遊客了解這個地區悠久的歷史。"
  },
  {
    "word": "moral",
    "pos": "n.",
    "cn_def": "寓意；教訓",
    "en_def": "the lesson about right and wrong that a story teaches",
    "sentence": "A: My son keeps asking me to read the same story about the boy who cried wolf every night, and I am getting a little bored of it. B: Maybe he likes the clear {{BLANK}} at the end, which teaches children that people will stop believing you if you tell lies too often.",
    "cn": "A：我兒子每天晚上一直要我唸那個放羊的孩子的故事，我有點唸膩了。 B：也許他喜歡結尾清楚的【寓意】，它教導孩子們如果太常說謊，人們就不會再相信你。"
  },
  {
    "word": "hero",
    "pos": "n.",
    "cn_def": "英雄；男主角",
    "en_def": "a brave person who is admired, or the main man in a story",
    "sentence": "A: Have you finished reading the novel that the book club chose for this month, and what did you think of the main story? B: I loved it, especially the young farmer who becomes a {{BLANK}} after he saves his whole village from a terrible flood by building a wall overnight.",
    "cn": "A：你讀完讀書會這個月選的小說了嗎？你覺得主要故事怎麼樣？ B：我很喜歡，尤其是那個年輕農夫，他在一夜之間築起一道牆，從可怕的洪水中救了整個村莊，因此成為【英雄】。"
  },
  {
    "word": "heroine",
    "pos": "n.",
    "cn_def": "女英雄；女主角",
    "en_def": "a brave woman who is admired, or the main woman in a story",
    "sentence": "A: Which part of the new animated film did the children in your class enjoy most when you took them to the cinema on Friday? B: They really admired the brave {{BLANK}}, a clever girl who travels across the desert alone to find medicine for her sick mother and her younger brother.",
    "cn": "A：你星期五帶班上的孩子去電影院時，他們最喜歡那部新動畫電影的哪個部分？ B：他們非常欣賞那位勇敢的【女主角】，一個聰明的女孩，為了替生病的母親和弟弟找藥，獨自穿越沙漠。"
  },
  {
    "word": "villain",
    "pos": "n.",
    "cn_def": "反派；壞人",
    "en_def": "the bad person in a story or film",
    "sentence": "A: Why are so many viewers complaining about the final episode of the drama series on social media this week? B: Many fans were angry because the {{BLANK}}, who had cheated and hurt so many people in the earlier episodes, escaped without any punishment at the end of the season.",
    "cn": "A：為什麼這週有這麼多觀眾在社群媒體上抱怨那部連續劇的最後一集？ B：許多粉絲很生氣，因為那個在前幾集欺騙和傷害了那麼多人的【反派】，在這一季結尾竟然沒有受到任何懲罰就逃走了。"
  },
  {
    "word": "character",
    "pos": "n.",
    "cn_def": "角色；人物",
    "en_def": "a person or animal in a story, play or film",
    "sentence": "A: The children's theater group is looking for volunteers this summer, but I have never acted before, so would I still be useful? B: Of course, you could play a small {{BLANK}} like the old shopkeeper, who only has a few lines but helps the young hero find the secret map.",
    "cn": "A：兒童劇團今年夏天在找志工，但我從來沒有演過戲，我還派得上用場嗎？ B：當然可以，你可以演一個小【角色】，像是那位老店主，他只有幾句台詞，但會幫助年輕的主角找到秘密地圖。"
  },
  {
    "word": "plot",
    "pos": "n.",
    "cn_def": "情節",
    "en_def": "the events that happen in a story",
    "sentence": "A: Did you enjoy the mystery novel I lent you last week, or was it too difficult to read on the train every morning? B: The {{BLANK}} was a bit complicated, with many surprising events and changes, but I could not stop reading because I wanted to know who stole the jewels.",
    "cn": "A：我上週借你的那本推理小說你喜歡嗎？還是在每天早上的火車上讀太難了？ B：【情節】有點複雜，有很多令人驚訝的事件和轉折，但我停不下來，因為我想知道是誰偷了珠寶。"
  },
  {
    "word": "setting",
    "pos": "n.",
    "cn_def": "背景；場景",
    "en_def": "the place and time where a story happens",
    "sentence": "A: Why did the film company choose that small island for their new movie when it is so hard for the crew to get there? B: The director believed it was the perfect {{BLANK}} for the story, because the old fishing houses and quiet beaches look exactly like a village from two hundred years ago.",
    "cn": "A：拍攝團隊要到那座小島這麼困難，為什麼電影公司還選那裡拍新電影？ B：導演認為那裡是這個故事最完美的【背景】，因為那些古老的漁屋和安靜的海灘看起來就像兩百年前的村莊。"
  },
  {
    "word": "theme",
    "pos": "n.",
    "cn_def": "主題",
    "en_def": "the main idea or subject of a story, talk or event",
    "sentence": "A: What should the students write about in their essays for the reading contest that our company is sponsoring next semester? B: They should explain the main {{BLANK}} of the story they choose, such as friendship, family love or honesty, and give examples from their own daily lives.",
    "cn": "A：學生在我們公司下學期贊助的閱讀比賽作文中應該寫些什麼？ B：他們應該說明所選故事的中心【主題】，例如友誼、家人之愛或誠實，並舉出自己日常生活中的例子。"
  },
  {
    "word": "conflict",
    "pos": "n.",
    "cn_def": "衝突",
    "en_def": "a serious disagreement or fight; the main problem in a story",
    "sentence": "A: The new play at the community center sounds interesting, but what exactly happens in the story between the two brothers? B: The main {{BLANK}} begins when their father leaves the family farm to only one of them, and the brothers argue for years until a storm forces them to work together.",
    "cn": "A：社區中心的新戲聽起來很有趣，但兩兄弟之間的故事到底發生了什麼事？ B：主要的【衝突】開始於父親把家族農場只留給其中一人，兩兄弟爭吵了好幾年，直到一場暴風雨迫使他們合作。"
  },
  {
    "word": "resolution",
    "pos": "n.",
    "cn_def": "結局；解決",
    "en_def": "the way a problem in a story is solved at the end",
    "sentence": "A: Many readers said the ending of the popular comic series felt rushed, so do you agree with their opinion after reading it? B: Yes, the {{BLANK}} came too quickly, because the two enemies suddenly became friends in the last two pages without any clear reason or explanation.",
    "cn": "A：許多讀者說那部熱門漫畫系列的結局感覺很倉促，你讀完之後同意他們的看法嗎？ B：同意，【結局】來得太快了，因為兩個敵人在最後兩頁突然變成朋友，沒有任何清楚的原因或解釋。"
  },
  {
    "word": "narrator",
    "pos": "n.",
    "cn_def": "敘述者；旁白",
    "en_def": "the person who tells a story",
    "sentence": "A: The publisher wants to turn our children's book into an audiobook, so who should we hire to read it aloud in the recording studio? B: We need a {{BLANK}} with a warm and friendly voice, because the person telling the story must keep young listeners interested for almost two hours.",
    "cn": "A：出版社想把我們的童書做成有聲書，我們應該請誰在錄音室裡朗讀呢？ B：我們需要一位聲音溫暖親切的【旁白】，因為講故事的人必須讓年輕聽眾維持將近兩小時的興趣。"
  },
  {
    "word": "tradition",
    "pos": "n.",
    "cn_def": "傳統",
    "en_def": "a custom or belief that has existed for a long time",
    "sentence": "A: Why does your department always hold a storytelling night before the Lunar New Year holiday instead of a normal year-end party? B: It is a {{BLANK}} that our first manager started twenty years ago, and everyone still enjoys sharing funny family stories while eating dumplings together.",
    "cn": "A：為什麼你們部門總是在農曆新年假期前舉辦說故事之夜，而不是一般的尾牙？ B：這是我們第一任經理二十年前開始的【傳統】，大家至今仍喜歡一邊吃水餃，一邊分享有趣的家庭故事。"
  },
  {
    "word": "symbol",
    "pos": "n.",
    "cn_def": "象徵；符號",
    "en_def": "a picture or thing that represents an idea",
    "sentence": "A: Why did the bank choose a crane for its new logo when most other banks use simple letters or coins in their designs? B: In many Asian stories, the crane is a {{BLANK}} of long life and good luck, so the managers felt it would make customers trust the bank more.",
    "cn": "A：大多數其他銀行在設計中都使用簡單的字母或硬幣，為什麼這家銀行選擇用鶴作為新標誌？ B：在許多亞洲故事中，鶴是長壽與好運的【象徵】，所以經理們覺得這會讓顧客更信任這家銀行。"
  },
  {
    "word": "magic",
    "pos": "n.",
    "cn_def": "魔法；魔術",
    "en_def": "special power to make impossible things happen; tricks that seem impossible",
    "sentence": "A: The toy store downtown is planning a special event for families during the summer vacation, so what kind of activities will they offer? B: They will hire a performer who uses {{BLANK}} to make coins disappear and flowers appear, and afterward children can listen to old stories about wizards.",
    "cn": "A：市中心的玩具店正在規劃暑假期間的家庭特別活動，他們會提供哪些活動呢？ B：他們會請一位表演者用【魔術】讓硬幣消失、讓花朵出現，之後孩子們可以聽關於巫師的古老故事。"
  },
  {
    "word": "creature",
    "pos": "n.",
    "cn_def": "生物；怪物",
    "en_def": "a living thing, often a strange or imaginary animal",
    "sentence": "A: What did the visitors think of the new exhibition about mountain legends at the city library last weekend? B: Most of them were impressed by the huge model of a {{BLANK}} with wings and a long tail, which villagers once believed protected the forest from fire.",
    "cn": "A：上週末參觀者對市立圖書館關於山中傳說的新展覽有什麼看法？ B：大部分人都對一個有翅膀和長尾巴的巨大【生物】模型印象深刻，村民們曾經相信牠保護森林免於火災。"
  },
  {
    "word": "quest",
    "pos": "n.",
    "cn_def": "探尋；追求",
    "en_def": "a long search for something important",
    "sentence": "A: Why is the new mobile game from that small company suddenly so popular among office workers in Taipei? B: Players go on a long {{BLANK}} to find a lost treasure, and they can finish each short stage during their lunch break or while they ride the MRT home.",
    "cn": "A：為什麼那家小公司推出的新手機遊戲突然在台北上班族之間這麼受歡迎？ B：玩家要展開一段漫長的【探險旅程】來找到失落的寶藏，而且他們可以在午休時間或搭捷運回家時完成每個短關卡。"
  },
  {
    "word": "wisdom",
    "pos": "n.",
    "cn_def": "智慧",
    "en_def": "good judgment that comes from knowledge and experience",
    "sentence": "A: My grandmother always tells old stories when our family has problems, but do you think they really help in modern life? B: I think so, because those stories contain the {{BLANK}} of many generations, and they often give practical advice about patience, kindness and hard work.",
    "cn": "A：我奶奶總是在我們家遇到問題時講古老的故事，你覺得它們在現代生活中真的有幫助嗎？ B：我覺得有，因為那些故事蘊含了好幾代人的【智慧】，而且經常提供關於耐心、善良和努力的實用建議。"
  },
  {
    "word": "courage",
    "pos": "n.",
    "cn_def": "勇氣",
    "en_def": "the ability to do something difficult or dangerous without fear",
    "sentence": "A: The sales team looks nervous about presenting to the large client from Japan tomorrow, so how can we help them feel better? B: You could share the story of the little mouse who saved the lion, because it reminds people that even small team members can show great {{BLANK}} when it matters.",
    "cn": "A：業務團隊對明天要向日本大客戶簡報看起來很緊張，我們要怎麼幫助他們感覺好一點？ B：你可以分享那隻救了獅子的小老鼠的故事，因為它提醒大家，即使是小小的團隊成員，在關鍵時刻也能展現極大的【勇氣】。"
  },
  {
    "word": "ancient",
    "pos": "adj.",
    "cn_def": "古老的；古代的",
    "en_def": "very old; from a time long ago",
    "sentence": "A: Why are the tour buses to the temple always full on weekends, even though the trip from the city takes almost three hours? B: Visitors want to see the {{BLANK}} stone carvings, which are more than a thousand years old and show famous scenes from traditional stories.",
    "cn": "A：為什麼去那座寺廟的遊覽車週末總是客滿，即使從市區出發要將近三個小時？ B：遊客想看那些【古老的】石雕，它們有一千多年的歷史，描繪了傳統故事中的著名場景。"
  },
  {
    "word": "imaginary",
    "pos": "adj.",
    "cn_def": "想像中的；虛構的",
    "en_def": "existing only in the mind, not real",
    "sentence": "A: My daughter talks to a friend named Lulu every evening, but nobody in her class has that name, so should I be worried? B: Do not worry, many young children have an {{BLANK}} friend, and experts say it actually helps them develop creativity and language skills before they start school.",
    "cn": "A：我女兒每天晚上都在跟一個叫露露的朋友說話，但她班上沒有人叫這個名字，我該擔心嗎？ B：別擔心，許多年幼的孩子都有【想像中的】朋友，專家說這其實有助於他們在上學前發展創造力和語言能力。"
  },
  {
    "word": "mysterious",
    "pos": "adj.",
    "cn_def": "神秘的",
    "en_def": "strange and difficult to understand or explain",
    "sentence": "A: Have you heard why the old bookstore near the station suddenly closed last month after being open for fifty years? B: Nobody knows the real reason, and the owner left a {{BLANK}} note on the door saying only that he had gone to find the end of an old story.",
    "cn": "A：你有聽說車站附近那間開了五十年的老書店上個月為什麼突然關門嗎？ B：沒有人知道真正的原因，店主在門上留了一張【神秘的】紙條，只寫著他去尋找一個古老故事的結局了。"
  },
  {
    "word": "dramatic",
    "pos": "adj.",
    "cn_def": "戲劇性的；巨大的",
    "en_def": "exciting and full of strong feeling; sudden and large",
    "sentence": "A: How did the audience react to the final scene of the play at the National Theater on Saturday night? B: It was very {{BLANK}}, because the lights went off suddenly, thunder filled the hall, and the hero appeared on the roof just in time to save the princess.",
    "cn": "A：週六晚上國家戲劇院那齣戲的最後一幕，觀眾有什麼反應？ B：那一幕非常【戲劇性】，因為燈光突然熄滅，雷聲充滿整個大廳，而主角及時出現在屋頂上救了公主。"
  },
  {
    "word": "lesson",
    "pos": "n.",
    "cn_def": "教訓；課",
    "en_def": "something you learn from an experience or a story",
    "sentence": "A: Why did the new manager start the staff meeting with a short story about a greedy dog and a bone? B: She wanted to teach us a {{BLANK}} about being satisfied with what we have, because several departments have been fighting over the budget for next year.",
    "cn": "A：新經理為什麼用一則關於貪心的狗和骨頭的小故事來開始員工會議？ B：她想教我們一個關於知足的【教訓】，因為好幾個部門一直在爭奪明年的預算。"
  },
  {
    "word": "traditionally",
    "pos": "adv.",
    "cn_def": "傳統上",
    "en_def": "in a way that has been done for a long time",
    "sentence": "A: Our restaurant is planning a special menu for the Mid-Autumn Festival, so do you know what customers usually expect during the holiday? B: Families {{BLANK}} eat mooncakes and pomelos while they look at the full moon, and parents often tell children the story of the lady who flew to the moon.",
    "cn": "A：我們餐廳正在規劃中秋節的特別菜單，你知道顧客在這個節日通常期待什麼嗎？ B：家家戶戶【傳統上】會一邊賞月一邊吃月餅和柚子，父母也常跟孩子講嫦娥奔月的故事。"
  },
  {
    "word": "generation",
    "pos": "n.",
    "cn_def": "世代；一代",
    "en_def": "all the people born around the same time",
    "sentence": "A: Why does the publishing company want to print the old folk stories again when they already sold thousands of copies in the 1980s? B: They believe the younger {{BLANK}} should also read them, so they will add colorful pictures and a free app that reads each story aloud.",
    "cn": "A：出版公司在1980年代已經賣出數千本那些古老民間故事，為什麼還想再次印刷？ B：他們認為年輕的【一代】也應該讀這些故事，所以會加上彩色插圖和一個能朗讀每則故事的免費應用程式。"
  },
  {
    "word": "folklore",
    "pos": "n.",
    "cn_def": "民間傳說；民俗",
    "en_def": "the traditional stories, beliefs and customs of a group of people",
    "sentence": "A: What is the professor's new research project about, and why did she ask our travel agency for help? B: She is studying the {{BLANK}} of mountain villages, including songs, beliefs and old stories, so she needs us to arrange transportation and local guides for her team.",
    "cn": "A：教授的新研究計畫是關於什麼的？她為什麼請我們旅行社幫忙？ B：她正在研究山區村莊的【民俗傳說】，包括歌曲、信仰和古老故事，所以她需要我們為她的團隊安排交通和當地導遊。"
  },
  {
    "word": "storytelling",
    "pos": "n.",
    "cn_def": "說故事",
    "en_def": "the activity of telling or reading stories to people",
    "sentence": "A: The library wants more parents to bring their children on Saturday mornings, so what new activity should we try this month? B: Let's organize a {{BLANK}} session where volunteers read old fables with puppets and music, because young kids love interactive shows more than quiet reading.",
    "cn": "A：圖書館希望更多家長在星期六早上帶孩子來，我們這個月該嘗試什麼新活動？ B：我們來辦一場【說故事】活動，讓志工搭配布偶和音樂朗讀古老的寓言，因為小孩子比起安靜閱讀更喜歡互動式的表演。"
  }
];

const MCQS = [
  {
    "q": "According to _____, the old bridge was built by a giant in one night. The tourism office prints this story on every brochure.",
    "options": [
      "legend",
      "plot",
      "heritage",
      "symbol"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Many people believe that eating carrots greatly improves night vision. However, doctors say this popular _____ is not supported by scientific evidence.",
    "options": [
      "villain",
      "myth",
      "setting",
      "courage"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The couple held a _____ wedding in a castle with horse-drawn carriages. Guests said it looked like a scene from a children's book.",
    "options": [
      "rush hour",
      "board game",
      "fairy tale",
      "free time"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The museum is recording the _____ histories of elderly fishermen before their memories are lost. Volunteers interview them and transcribe every conversation.",
    "options": [
      "imaginary",
      "dramatic",
      "mysterious",
      "oral"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "During the Tomb Sweeping Festival, many employees return to their hometowns. They clean family graves and offer food to honor each _____.",
    "options": [
      "narrator",
      "ancestor",
      "villain",
      "creature"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The old tea factory has been named a cultural _____ site by the city. It will be repaired and opened to visitors next spring.",
    "options": [
      "heritage",
      "conflict",
      "wisdom",
      "magic"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The trainer ended the workshop with a short story about two farmers. The _____ of the story was that cooperation brings better results than competition.",
    "options": [
      "setting",
      "narrator",
      "creature",
      "moral"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The firefighter who rescued three children from the burning apartment was praised as a local _____. The mayor gave him a medal on Monday.",
    "options": [
      "plot",
      "theme",
      "hero",
      "setting"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "In the new action movie, the famous actor plays the _____ for the first time. His character tries to steal money from the national bank.",
    "options": [
      "villain",
      "ancestor",
      "heritage",
      "wisdom"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The children's author spent months designing the main _____ of her new book. The brave little rabbit has already become popular with young readers.",
    "options": [
      "resolution",
      "character",
      "tradition",
      "heritage"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Critics praised the novel for its complicated _____ full of surprising twists. Readers could not guess the ending until the very last page.",
    "options": [
      "ancestor",
      "wisdom",
      "plot",
      "symbol"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The director chose a quiet mountain village as the _____ for the historical drama. The old wooden houses made the scenes look realistic.",
    "options": [
      "moral",
      "courage",
      "lesson",
      "setting"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Friendship is the central _____ of the company's new advertising campaign. Every video shows coworkers helping each other through difficult times.",
    "options": [
      "villain",
      "theme",
      "narrator",
      "creature"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The story begins when two neighbors argue about a shared garden. This _____ continues until a flood forces them to work together.",
    "options": [
      "conflict",
      "heritage",
      "symbol",
      "wisdom"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Many viewers felt the series ended too quickly. They wanted a more satisfying _____ to the long fight between the two families.",
    "options": [
      "ancestor",
      "narrator",
      "heritage",
      "resolution"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The audiobook company hired a famous actor as the _____ of the children's novel. His warm voice keeps young listeners interested for hours.",
    "options": [
      "creature",
      "ancestor",
      "narrator",
      "symbol"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "It is a company _____ to hold a storytelling night before the Lunar New Year. Staff members share funny family stories over dinner.",
    "options": [
      "tradition",
      "conflict",
      "plot",
      "villain"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "In many Asian cultures, the crane is a _____ of long life. That is why the insurance company uses it in its logo.",
    "options": [
      "quest",
      "symbol",
      "moral",
      "conflict"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The performer used _____ to make a coin disappear in front of the guests. The children at the company picnic cheered loudly.",
    "options": [
      "wisdom",
      "courage",
      "magic",
      "heritage"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The museum displays a model of a strange _____ with wings and a long tail. Villagers once believed it protected the forest.",
    "options": [
      "plot",
      "theme",
      "moral",
      "creature"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "My grandmother's advice is full of _____ gained from eighty years of experience. I always ask her opinion before making big decisions.",
    "options": [
      "villain",
      "wisdom",
      "setting",
      "plot"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "It took great _____ for the new employee to point out the mistake in the manager's report. Everyone admired her honesty afterward.",
    "options": [
      "courage",
      "magic",
      "heritage",
      "theme"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Tourists come from around the world to see the _____ temple carvings. Some of them are more than a thousand years old.",
    "options": [
      "oral",
      "imaginary",
      "brief",
      "ancient"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Many young children talk to an _____ friend that nobody else can see. Experts say this habit helps develop creativity.",
    "options": [
      "ancient",
      "oral",
      "imaginary",
      "dramatic"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The police are still investigating the _____ disappearance of the famous painting from the gallery. Nobody knows how the thief got inside.",
    "options": [
      "mysterious",
      "oral",
      "ancient",
      "imaginary"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Sales showed a _____ increase after the company launched its new advertising campaign. The marketing team was surprised by the sudden growth.",
    "options": [
      "oral",
      "dramatic",
      "ancient",
      "imaginary"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "After losing the important client, the sales team learned a valuable _____. They now reply to every customer email within one day.",
    "options": [
      "villain",
      "creature",
      "lesson",
      "symbol"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "During the Mid-Autumn Festival, families _____ eat mooncakes and look at the full moon. Many companies give boxes of mooncakes to employees.",
    "options": [
      "suddenly",
      "loudly",
      "barely",
      "traditionally"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The publisher hopes the younger _____ will also enjoy these old folk stories. It added colorful pictures and an app that reads them aloud.",
    "options": [
      "villain",
      "generation",
      "conflict",
      "setting"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The library holds a _____ session every Saturday morning for young children. Volunteers read fables aloud using puppets and music.",
    "options": [
      "storytelling",
      "resolution",
      "conflict",
      "wisdom"
    ],
    "answer": 0,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "folktale": {
    "pos": "n.",
    "en_def": "a traditional story passed on by ordinary people",
    "cn_def": "民間故事"
  },
  "legend": {
    "pos": "n.",
    "en_def": "an old story that many people believe, but that may not be true",
    "cn_def": "傳說"
  },
  "myth": {
    "pos": "n.",
    "en_def": "an ancient story about gods or heroes; also a false idea many people believe",
    "cn_def": "神話；迷思"
  },
  "fable": {
    "pos": "n.",
    "en_def": "a short story, often with animals, that teaches a lesson",
    "cn_def": "寓言"
  },
  "fairy tale": {
    "pos": "n.phr.",
    "en_def": "a children's story about magic, princes, princesses or fairies",
    "cn_def": "童話"
  },
  "oral": {
    "pos": "adj.",
    "en_def": "spoken, not written",
    "cn_def": "口頭的；口述的"
  },
  "ancestor": {
    "pos": "n.",
    "en_def": "a family member who lived a long time before you",
    "cn_def": "祖先"
  },
  "heritage": {
    "pos": "n.",
    "en_def": "the history, traditions and buildings that a country or group has had for a long time",
    "cn_def": "遺產；傳統文化"
  },
  "moral": {
    "pos": "n.",
    "en_def": "the lesson about right and wrong that a story teaches",
    "cn_def": "寓意；教訓"
  },
  "hero": {
    "pos": "n.",
    "en_def": "a brave person who is admired, or the main man in a story",
    "cn_def": "英雄；男主角"
  },
  "heroine": {
    "pos": "n.",
    "en_def": "a brave woman who is admired, or the main woman in a story",
    "cn_def": "女英雄；女主角"
  },
  "villain": {
    "pos": "n.",
    "en_def": "the bad person in a story or film",
    "cn_def": "反派；壞人"
  },
  "character": {
    "pos": "n.",
    "en_def": "a person or animal in a story, play or film",
    "cn_def": "角色；人物"
  },
  "plot": {
    "pos": "n.",
    "en_def": "the events that happen in a story",
    "cn_def": "情節"
  },
  "setting": {
    "pos": "n.",
    "en_def": "the place and time where a story happens",
    "cn_def": "背景；場景"
  },
  "theme": {
    "pos": "n.",
    "en_def": "the main idea or subject of a story, talk or event",
    "cn_def": "主題"
  },
  "conflict": {
    "pos": "n.",
    "en_def": "a serious disagreement or fight; the main problem in a story",
    "cn_def": "衝突"
  },
  "resolution": {
    "pos": "n.",
    "en_def": "the way a problem in a story is solved at the end",
    "cn_def": "結局；解決"
  },
  "narrator": {
    "pos": "n.",
    "en_def": "the person who tells a story",
    "cn_def": "敘述者；旁白"
  },
  "tradition": {
    "pos": "n.",
    "en_def": "a custom or belief that has existed for a long time",
    "cn_def": "傳統"
  },
  "symbol": {
    "pos": "n.",
    "en_def": "a picture or thing that represents an idea",
    "cn_def": "象徵；符號"
  },
  "magic": {
    "pos": "n.",
    "en_def": "special power to make impossible things happen; tricks that seem impossible",
    "cn_def": "魔法；魔術"
  },
  "creature": {
    "pos": "n.",
    "en_def": "a living thing, often a strange or imaginary animal",
    "cn_def": "生物；怪物"
  },
  "quest": {
    "pos": "n.",
    "en_def": "a long search for something important",
    "cn_def": "探尋；追求"
  },
  "wisdom": {
    "pos": "n.",
    "en_def": "good judgment that comes from knowledge and experience",
    "cn_def": "智慧"
  },
  "courage": {
    "pos": "n.",
    "en_def": "the ability to do something difficult or dangerous without fear",
    "cn_def": "勇氣"
  },
  "ancient": {
    "pos": "adj.",
    "en_def": "very old; from a time long ago",
    "cn_def": "古老的；古代的"
  },
  "imaginary": {
    "pos": "adj.",
    "en_def": "existing only in the mind, not real",
    "cn_def": "想像中的；虛構的"
  },
  "mysterious": {
    "pos": "adj.",
    "en_def": "strange and difficult to understand or explain",
    "cn_def": "神秘的"
  },
  "dramatic": {
    "pos": "adj.",
    "en_def": "exciting and full of strong feeling; sudden and large",
    "cn_def": "戲劇性的；巨大的"
  },
  "lesson": {
    "pos": "n.",
    "en_def": "something you learn from an experience or a story",
    "cn_def": "教訓；課"
  },
  "traditionally": {
    "pos": "adv.",
    "en_def": "in a way that has been done for a long time",
    "cn_def": "傳統上"
  },
  "generation": {
    "pos": "n.",
    "en_def": "all the people born around the same time",
    "cn_def": "世代；一代"
  },
  "folklore": {
    "pos": "n.",
    "en_def": "the traditional stories, beliefs and customs of a group of people",
    "cn_def": "民間傳說；民俗"
  },
  "storytelling": {
    "pos": "n.",
    "en_def": "the activity of telling or reading stories to people",
    "cn_def": "說故事"
  }
};

const EXTRA_GLOSSES = {};
