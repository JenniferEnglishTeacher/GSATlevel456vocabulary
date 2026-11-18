// Topic 371 Quiz Data: Statue 雕像
// Source word list: https://www.examword.com/group-topic/statue — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T371 - Statue 雕像",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "sculpture",
    "pos": "n.",
    "cn_def": "雕塑；雕刻品",
    "en_def": "a piece of art made by shaping stone, wood, metal or clay",
    "sentence": "A: Why is the lobby of our new headquarters closed this week, and where should visitors wait before their meetings with the sales team? B: Workers are installing a large metal {{BLANK}} that the CEO ordered from a local artist, so guests should wait in the second-floor lounge until the work is finished on Friday.",
    "cn": "A：為什麼我們新總部的大廳這週關閉？訪客在和業務團隊開會前應該在哪裡等候？ B：工人正在安裝一座執行長向當地藝術家訂製的大型金屬【雕塑】，所以在週五工程完成之前，客人應該在二樓休息室等候。"
  },
  {
    "word": "monument",
    "pos": "n.",
    "cn_def": "紀念碑；紀念建築",
    "en_def": "a building or statue built to remember a famous person or event",
    "sentence": "A: Our tour group from Tokyo has a free afternoon tomorrow, so what do you recommend they visit near the hotel before dinner? B: They should walk to the old stone {{BLANK}} in Central Square, which was built to honor the city's founders, and there is a small café nearby where they can rest afterward.",
    "cn": "A：我們來自東京的旅行團明天下午有空，你建議他們晚餐前去參觀飯店附近的哪裡？ B：他們應該走去中央廣場那座古老的石造【紀念碑】，那是為了紀念城市的創建者而建的，附近還有一家小咖啡館讓他們之後可以休息。"
  },
  {
    "word": "memorial",
    "pos": "n.",
    "cn_def": "紀念碑；紀念館",
    "en_def": "something built to help people remember people who have died",
    "sentence": "A: Why did the city council ask our construction company to change the design of the park entrance last week? B: They decided to build a {{BLANK}} for the firefighters who lost their lives in the factory fire, so they need extra space near the gate where families can leave flowers and sit quietly.",
    "cn": "A：為什麼市議會上週要求我們建設公司修改公園入口的設計？ B：他們決定為那場工廠火災中殉職的消防員建造一座【紀念碑】，所以需要在大門附近留出額外空間，讓家屬可以獻花並安靜地坐著。"
  },
  {
    "word": "bust",
    "pos": "n.",
    "cn_def": "半身像",
    "en_def": "a statue of a person's head, shoulders and chest",
    "sentence": "A: What gift is the board planning to give our founder at his retirement party next month, since he has worked here for forty years? B: They have ordered a bronze {{BLANK}} of his head and shoulders, and it will be placed in the main hallway so that every new employee can learn about the man who started the company.",
    "cn": "A：董事會打算在下個月我們創辦人的退休派對上送他什麼禮物？畢竟他已經在這裡工作四十年了。 B：他們訂製了一尊他頭部和肩膀的青銅【半身像】，將放在主要走廊上，讓每位新員工都能認識這位創立公司的人。"
  },
  {
    "word": "figure",
    "pos": "n.",
    "cn_def": "人像；雕像；人物造型",
    "en_def": "a statue or shape of a person or animal",
    "sentence": "A: Have you finished packing the items for the museum gift shop, and did the small statues arrive safely from the supplier? B: Most of them are fine, but one wooden {{BLANK}} of a dancer broke during shipping, so I have already called the supplier and asked them to send a replacement by next Tuesday.",
    "cn": "A：你把博物館禮品店的商品包裝好了嗎？那些小雕像有從供應商那邊安全送達嗎？ B：大部分都沒問題，但有一尊舞者的木製【人像】在運送途中摔壞了，所以我已經打電話給供應商，請他們在下週二前寄一個替換品過來。"
  },
  {
    "word": "carve",
    "pos": "v.",
    "cn_def": "雕刻",
    "en_def": "to cut wood or stone to make a shape or pattern",
    "sentence": "A: How long will it take the artist to finish the wooden sign for the entrance of our new mountain hotel? B: She plans to {{BLANK}} the hotel's name and a small bear into a thick piece of oak by hand, so it will take about three weeks, but the result will look much warmer than a plastic sign.",
    "cn": "A：藝術家要多久才能完成我們新山區飯店入口的木製招牌？ B：她打算用手工在一塊厚橡木上【雕刻】飯店的名字和一隻小熊，所以大約需要三週，但成品看起來會比塑膠招牌溫暖許多。"
  },
  {
    "word": "sculpt",
    "pos": "v.",
    "cn_def": "雕塑；雕刻",
    "en_def": "to make a statue or shape from stone, clay, metal, etc.",
    "sentence": "A: Why has the hospital hired a local artist, and what exactly will she be doing in the garden over the summer? B: She has agreed to {{BLANK}} a statue of a mother and child from white stone, and the patients will be able to watch her work through the windows of the waiting room every afternoon.",
    "cn": "A：醫院為什麼聘請了一位當地藝術家？她整個夏天在花園裡到底要做什麼？ B：她答應用白色石材【雕塑】一座母親與孩子的雕像，病人每天下午都能從候診室的窗戶看她工作。"
  },
  {
    "word": "cast",
    "pos": "v.",
    "cn_def": "鑄造",
    "en_def": "to make an object by pouring hot liquid metal into a shape",
    "sentence": "A: Why is the bronze statue for the city library going to cost much more than the plan we approved last spring? B: The factory has to {{BLANK}} the statue in three separate parts because it is so tall, and the price of metal has gone up a lot since we signed the contract.",
    "cn": "A：為什麼市立圖書館的銅像費用會比我們去年春天核准的計畫高出許多？ B：因為雕像太高，工廠必須分三個部分來【鑄造】，而且自從我們簽約以來，金屬價格上漲了很多。"
  },
  {
    "word": "mold",
    "pos": "v.",
    "cn_def": "塑造；用模子做",
    "en_def": "to press a soft material into a certain shape",
    "sentence": "A: What activity have you planned for the children at the company family day, since last year's games were a little boring? B: An art teacher will show them how to {{BLANK}} soft clay into small animals and statues, and each child can take home what they make after it dries in the sun.",
    "cn": "A：既然去年的遊戲有點無聊，你為公司家庭日的孩子們安排了什麼活動？ B：一位美術老師會教他們如何把軟黏土【塑造】成小動物和雕像，每個孩子都可以在作品曬乾後把它帶回家。"
  },
  {
    "word": "chisel",
    "pos": "n.",
    "cn_def": "鑿子",
    "en_def": "a metal tool with a sharp edge for cutting wood or stone",
    "sentence": "A: The repair team is fixing the damaged stone steps outside the bank today, so do they have all the tools they need? B: Almost, but the worker who is shaping the new stone pieces broke his {{BLANK}} this morning, so he went to the hardware store to buy a stronger one before lunch.",
    "cn": "A：維修團隊今天在修理銀行外面損壞的石階，他們需要的工具都齊全嗎？ B：差不多，但負責雕整新石塊的工人今天早上弄斷了他的【鑿子】，所以他在午餐前去五金行買一把更堅固的。"
  },
  {
    "word": "pedestal",
    "pos": "n.",
    "cn_def": "底座；基座",
    "en_def": "the base that a statue stands on",
    "sentence": "A: Why did the museum staff move the new statue away from the front window yesterday afternoon? B: The {{BLANK}} under it was not strong enough to hold such a heavy piece safely, so they are waiting for a thicker stone base to arrive before they put the statue back in its place.",
    "cn": "A：為什麼博物館人員昨天下午把新雕像從前窗移走了？ B：它下面的【底座】不夠堅固，無法安全地支撐這麼重的作品，所以他們在等一個更厚的石製基座送到，才會把雕像放回原位。"
  },
  {
    "word": "plaque",
    "pos": "n.",
    "cn_def": "匾額；紀念牌",
    "en_def": "a flat piece of metal or stone with writing on it, fixed to a wall",
    "sentence": "A: How will visitors know that the famous writer once lived in the apartment building we are now using as our office? B: The owners are putting a small {{BLANK}} on the wall next to the front door, and it will show his name, the years he lived here, and the title of his best-known novel.",
    "cn": "A：訪客要怎麼知道那位知名作家曾經住在我們現在當作辦公室的這棟公寓大樓？ B：屋主會在前門旁邊的牆上掛一塊小【紀念牌】，上面會寫著他的名字、他住在這裡的年份，以及他最知名小說的書名。"
  },
  {
    "word": "bronze",
    "pos": "n.",
    "cn_def": "青銅",
    "en_def": "a hard brown metal made from copper and tin",
    "sentence": "A: The city wants the new statue in the harbor park to last for at least a hundred years, so which material did the designers finally choose? B: They chose {{BLANK}} because it does not rust easily in the salty sea air, and it slowly turns a beautiful green color as the years go by.",
    "cn": "A：市政府希望港口公園的新雕像至少能保存一百年，設計師最後選了哪一種材料？ B：他們選了【青銅】，因為它在含鹽的海風中不容易生鏽，而且隨著時間推移會慢慢變成漂亮的綠色。"
  },
  {
    "word": "marble",
    "pos": "n.",
    "cn_def": "大理石",
    "en_def": "a hard smooth stone used for statues and buildings",
    "sentence": "A: Why does the lobby of the new five-star hotel downtown look so bright and expensive when you walk in? B: The floor and the large statue in the center are both made of white {{BLANK}} from Italy, and the lights in the ceiling make the smooth stone shine all day long.",
    "cn": "A：為什麼市中心那間新的五星級飯店一走進去大廳看起來就那麼明亮又高級？ B：地板和中央的大雕像都是用來自義大利的白色【大理石】製成的，天花板的燈光讓光滑的石材整天都閃閃發亮。"
  },
  {
    "word": "granite",
    "pos": "n.",
    "cn_def": "花崗岩",
    "en_def": "a very hard gray or pink stone",
    "sentence": "A: Our company is building a statue at the entrance of the factory, but why does the designer want such an expensive stone? B: She chose {{BLANK}} because it is extremely hard and will not be damaged by heavy rain, strong wind, or trucks driving past, so we will not have to repair it for many years.",
    "cn": "A：我們公司要在工廠入口建一座雕像，但設計師為什麼想用這麼昂貴的石材？ B：她選了【花崗岩】，因為它非常堅硬，不會被大雨、強風或經過的卡車損壞，所以我們很多年都不需要修理它。"
  },
  {
    "word": "lifelike",
    "pos": "adj.",
    "cn_def": "栩栩如生的；逼真的",
    "en_def": "looking very much like a real person or animal",
    "sentence": "A: Did the customers at the wax museum enjoy the new display of famous athletes that opened last weekend? B: Yes, they loved it, and many of them said the statues were so {{BLANK}} that they almost expected the figures to move, so the gift shop sold twice as many photos as usual.",
    "cn": "A：上週末開幕的知名運動員新展區，蠟像館的顧客喜歡嗎？ B：喜歡，他們很愛，很多人說那些雕像【栩栩如生】到幾乎以為人像會動起來，所以禮品店賣出的照片是平常的兩倍。"
  },
  {
    "word": "ancient",
    "pos": "adj.",
    "cn_def": "古代的；古老的",
    "en_def": "very old; from a long time ago",
    "sentence": "A: Why is the travel agency's tour to Greece so popular with our older customers this year? B: The trip includes visits to several {{BLANK}} temples and statues that are more than two thousand years old, and an expert guide explains the history of each place in simple English.",
    "cn": "A：為什麼今年旅行社的希臘行程這麼受我們年長客戶歡迎？ B：這趟旅程包括參觀好幾座超過兩千年歷史的【古代】神廟和雕像，而且有專業導遊用簡單的英文解說每個地方的歷史。"
  },
  {
    "word": "classical",
    "pos": "adj.",
    "cn_def": "古典的",
    "en_def": "related to the art and style of ancient Greece and Rome",
    "sentence": "A: The architect showed us two designs for the new courthouse, so which one did the city council finally choose? B: They picked the {{BLANK}} design with tall white columns and statues of Greek gods, because they felt it would look serious and fit well with the older buildings on the same street.",
    "cn": "A：建築師給我們看了新法院的兩種設計，市議會最後選了哪一種？ B：他們選了有高大白色柱子和希臘神祇雕像的【古典】設計，因為他們覺得那樣看起來莊重，也和同一條街上的老建築很搭。"
  },
  {
    "word": "artistic",
    "pos": "adj.",
    "cn_def": "藝術的；有藝術天分的",
    "en_def": "related to art or showing skill in art",
    "sentence": "A: Why did the mall manager choose a young designer from the local college instead of a famous company to create the holiday statues? B: He was impressed by her {{BLANK}} ideas and fresh style, and the college also offered a lower price, so the mall could save money while supporting a talented student.",
    "cn": "A：為什麼購物中心經理選了當地大學的一位年輕設計師，而不是知名公司，來製作節慶雕像？ B：他對她的【藝術】構想和新穎風格印象深刻，而且學校報價也比較低，所以購物中心既能省錢又能支持有才華的學生。"
  },
  {
    "word": "symbolic",
    "pos": "adj.",
    "cn_def": "象徵性的",
    "en_def": "representing an idea or meaning",
    "sentence": "A: Why does the statue in front of the bank show a woman holding a key instead of a famous business leader? B: The design is {{BLANK}}, because the key stands for safety and trust, which are the two values the bank wants every customer to think of when they walk through the door.",
    "cn": "A：為什麼銀行前面的雕像是一位手持鑰匙的女性，而不是一位知名的企業領袖？ B：這個設計是【象徵性的】，因為鑰匙代表安全與信任，這是銀行希望每位顧客走進門時都會想到的兩個價值。"
  },
  {
    "word": "majestic",
    "pos": "adj.",
    "cn_def": "雄偉的；壯麗的",
    "en_def": "very beautiful, large and impressive",
    "sentence": "A: What did the visitors from our Singapore office say about the city tour you organized for them on Saturday? B: They said the {{BLANK}} statue on top of the hill was the highlight of the day, especially when the evening sun lit it up and they could see the whole city from there.",
    "cn": "A：我們新加坡辦公室的訪客對你週六為他們安排的城市導覽有什麼評價？ B：他們說山頂上那座【雄偉的】雕像是當天的亮點，尤其是傍晚陽光照亮它的時候，他們還能從那裡看到整座城市。"
  },
  {
    "word": "ornate",
    "pos": "adj.",
    "cn_def": "華麗的；裝飾繁複的",
    "en_def": "having a lot of detailed decoration",
    "sentence": "A: Why did it take the cleaning company so long to finish the old theater before the opening night of the new musical? B: The building has many {{BLANK}} statues and gold decorations on the walls and ceiling, so the workers had to clean every small detail carefully by hand with soft brushes.",
    "cn": "A：為什麼清潔公司在新音樂劇首演之前花了那麼久才把老劇院清理完？ B：那棟建築的牆壁和天花板上有許多【華麗的】雕像和金色裝飾，所以工人必須用軟刷子小心地手工清理每個小細節。"
  },
  {
    "word": "monumental",
    "pos": "adj.",
    "cn_def": "巨大的；艱鉅的；不朽的",
    "en_def": "very large, difficult or important",
    "sentence": "A: How is the team handling the project to move the giant statue from the old train station to the new city museum? B: It is a {{BLANK}} task, because the statue weighs over twenty tons, so we need two cranes, a special truck, and permission from the police to close the roads at night.",
    "cn": "A：團隊要怎麼處理把巨大雕像從舊火車站搬到新市立博物館的專案？ B：這是一項【艱鉅的】任務，因為雕像重達二十多噸，所以我們需要兩台起重機、一輛特殊卡車，還要取得警方許可在夜間封路。"
  },
  {
    "word": "preserve",
    "pos": "v.",
    "cn_def": "保存；保護",
    "en_def": "to keep something in good condition",
    "sentence": "A: Why is the museum asking visitors not to touch the old statues in the main hall anymore? B: Oil from people's hands slowly damages the surface of the stone, so the staff want to {{BLANK}} the statues for future generations, and they have put up glass walls and small signs in several languages.",
    "cn": "A：為什麼博物館要求參觀者不要再觸摸主廳裡的古老雕像？ B：人們手上的油脂會慢慢損壞石材表面，所以工作人員希望為後代【保存】這些雕像，他們已經架設了玻璃牆和多種語言的小告示牌。"
  },
  {
    "word": "restore",
    "pos": "v.",
    "cn_def": "修復；整修",
    "en_def": "to repair something old so it looks as it did before",
    "sentence": "A: The statue in the town square has been covered with plastic sheets for weeks, so what exactly is happening to it? B: A team of experts is working to {{BLANK}} it, because years of rain and pollution have made the face and hands crack, and they hope to finish before the town's festival in June.",
    "cn": "A：城鎮廣場上的雕像已經被塑膠布蓋了好幾週，到底發生了什麼事？ B：一組專家正在【修復】它，因為多年的雨水和污染讓臉部和手部出現裂痕，他們希望在六月的城鎮慶典前完成。"
  },
  {
    "word": "dedicate",
    "pos": "v.",
    "cn_def": "獻給；題獻",
    "en_def": "to say officially that something is made to honor someone",
    "sentence": "A: Why are so many reporters and government officials coming to the park near our office tomorrow morning? B: The mayor will {{BLANK}} the new statue to the nurses who worked so hard during the flood last year, and there will be a short speech followed by music from the city band.",
    "cn": "A：為什麼明天早上會有那麼多記者和政府官員來我們辦公室附近的公園？ B：市長將把這座新雕像【獻給】去年水災期間辛苦工作的護理師們，屆時會有簡短的致詞，接著是市立樂隊的演奏。"
  },
  {
    "word": "unveil",
    "pos": "v.",
    "cn_def": "揭幕；首次公開",
    "en_def": "to remove the cover from something new at a special event; to show for the first time",
    "sentence": "A: What time does the ceremony start on Friday, and should our marketing team bring cameras for the company website? B: It starts at ten, when the CEO will {{BLANK}} the statue of our company's founder by pulling off the red cloth, so please bring cameras and arrive at least thirty minutes early.",
    "cn": "A：週五的典禮幾點開始？我們的行銷團隊應該帶相機去為公司網站拍照嗎？ B：十點開始，執行長會拉下紅布為我們公司創辦人的雕像【揭幕】，所以請帶相機，並至少提早三十分鐘到場。"
  },
  {
    "word": "commemorate",
    "pos": "v.",
    "cn_def": "紀念",
    "en_def": "to do something special to remember and honor a person or event",
    "sentence": "A: Why is the company paying for a new statue in the town center when we usually spend that money on advertising? B: We want to {{BLANK}} our fiftieth anniversary in a way that also helps the community, so the statue will show the first workers who built our factory in this town.",
    "cn": "A：我們平常把那筆錢花在廣告上，為什麼公司要出資在鎮中心建一座新雕像？ B：我們想用一種也能回饋社區的方式來【紀念】公司五十週年，所以這座雕像會呈現當年在這個小鎮建造我們工廠的第一批工人。"
  },
  {
    "word": "inscription",
    "pos": "n.",
    "cn_def": "碑文；銘文；題字",
    "en_def": "words written or cut into stone or metal",
    "sentence": "A: Can you read what is written on the bottom of the statue outside the train station, because the letters look very old? B: The {{BLANK}} says that the statue was a gift from a sister city in Japan in 1965, and it also includes a short message about friendship between the two places.",
    "cn": "A：你看得懂火車站外那座雕像底部寫了什麼嗎？那些字看起來很古老。 B：那段【碑文】寫著這座雕像是1965年日本一個姊妹市送的禮物，還附有一段關於兩地友誼的簡短訊息。"
  },
  {
    "word": "heritage",
    "pos": "n.",
    "cn_def": "遺產；文化遺產",
    "en_def": "important history, buildings and traditions passed down from the past",
    "sentence": "A: Why does the government give money to small towns that keep their old statues and temples in good condition? B: These places are part of the country's cultural {{BLANK}}, and they also bring in tourists who spend money at local shops, restaurants, and hotels, which helps the economy of the whole area.",
    "cn": "A：為什麼政府要撥款給那些把古老雕像和廟宇維護良好的小鎮？ B：這些地方是國家文化【遺產】的一部分，而且還能吸引觀光客到當地商店、餐廳和飯店消費，有助於整個地區的經濟。"
  },
  {
    "word": "landmark",
    "pos": "n.",
    "cn_def": "地標",
    "en_def": "a famous building or object that is easy to see and recognize",
    "sentence": "A: I'm meeting a new client downtown this afternoon, but I don't know the area well, so how will I find the restaurant? B: Just look for the tall statue of the horse near the river, because it is the best-known {{BLANK}} in the city, and the restaurant is right across the street from it.",
    "cn": "A：我今天下午要在市中心和一位新客戶碰面，但我不太熟那一區，要怎麼找到那家餐廳？ B：只要找河邊那座高大的馬雕像就好，因為它是城裡最知名的【地標】，餐廳就在它的正對面。"
  },
  {
    "word": "display",
    "pos": "n.",
    "cn_def": "展示；陳列",
    "en_def": "an arrangement of things for people to look at",
    "sentence": "A: Where should we put the small statues that our designer made for the trade show next month? B: Let's set up a {{BLANK}} near the main entrance of our booth with good lighting, so visitors can see the statues clearly as they walk by and stop to ask about our products.",
    "cn": "A：我們設計師為下個月商展製作的小雕像應該放在哪裡？ B：我們在攤位主要入口附近設一個燈光良好的【展示】區吧，這樣參觀者經過時就能清楚看到雕像，並停下來詢問我們的產品。"
  },
  {
    "word": "craftsmanship",
    "pos": "n.",
    "cn_def": "工藝；手藝",
    "en_def": "the skill of making things beautifully by hand",
    "sentence": "A: Why are the wooden statues from that small family workshop so much more expensive than the ones sold at the department store? B: Each one is carved by hand over several weeks, and customers are happy to pay more for that level of {{BLANK}}, because the details are much finer than in factory-made products.",
    "cn": "A：為什麼那家小型家庭工坊的木雕像比百貨公司賣的貴這麼多？ B：每一件都要花好幾週手工雕刻，而顧客樂意為那種水準的【工藝】多付錢，因為細節比工廠製造的產品精緻得多。"
  }
];

const MCQS = [
  {
    "q": "The hotel owner paid an artist to create a large steel _____ for the garden. Guests often take photos beside it.",
    "options": [
      "sculpture",
      "heritage",
      "craftsmanship",
      "inscription"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The city built a tall stone _____ in the main square. It honors the soldiers who defended the town long ago.",
    "options": [
      "chisel",
      "display",
      "monument",
      "craftsmanship"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The craftsman will _____ the customer's name into the wooden door by hand. The work should take about two days.",
    "options": [
      "restore",
      "carve",
      "unveil",
      "commemorate"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Families gathered at the _____ to lay flowers for the miners who died. A short service was held there at noon.",
    "options": [
      "chisel",
      "craftsmanship",
      "heritage",
      "memorial"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "A bronze _____ of the company founder stands in the lobby. It shows only his head, shoulders, and upper chest.",
    "options": [
      "heritage",
      "chisel",
      "bust",
      "inscription"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The art students will _____ small figures from soft clay this afternoon. Their best pieces will be shown at the open day.",
    "options": [
      "sculpt",
      "dedicate",
      "commemorate",
      "preserve"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The foundry will _____ the statue in bronze next week. Hot liquid metal will be poured into a large shaped container.",
    "options": [
      "dedicate",
      "unveil",
      "preserve",
      "cast"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The stonemason struck the _____ with a hammer to shape the block. Small pieces of rock fell onto the workshop floor.",
    "options": [
      "plaque",
      "chisel",
      "inscription",
      "landmark"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The statue stands on a marble _____ about one meter high. Visitors must look up to see the figure's face clearly.",
    "options": [
      "pedestal",
      "heritage",
      "craftsmanship",
      "inscription"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "A small metal _____ was fixed to the wall beside the entrance. It explains that the building first opened in 1920.",
    "options": [
      "chisel",
      "heritage",
      "plaque",
      "landmark"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The statue is made of _____, a metal produced by mixing copper and tin. Over many years its surface slowly turns green.",
    "options": [
      "marble",
      "bronze",
      "heritage",
      "craftsmanship"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The palace floors are covered with smooth white _____ from Italy. Cleaners polish the stone every morning before tourists arrive.",
    "options": [
      "bronze",
      "plaque",
      "chisel",
      "marble"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The wax figures in the museum are so _____ that visitors sometimes speak to them. Each one takes months to finish.",
    "options": [
      "ancient",
      "monumental",
      "lifelike",
      "symbolic"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "These stone statues were carved in _____ times, long before modern tools existed. Some are over three thousand years old.",
    "options": [
      "ancient",
      "lifelike",
      "ornate",
      "majestic"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The museum's _____ collection includes many Greek and Roman statues. Visitors can join a free tour of these works every Sunday.",
    "options": [
      "lifelike",
      "ornate",
      "symbolic",
      "classical"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The young designer showed great _____ talent in the company's statue contest. She won first prize and a cash award.",
    "options": [
      "ancient",
      "artistic",
      "monumental",
      "ornate"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The dove in the statue's hand is _____ of peace between the two nations. Many visitors stop to read about its meaning.",
    "options": [
      "symbolic",
      "lifelike",
      "ornate",
      "ancient"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "From the hilltop, guests enjoyed a _____ view of the giant statue against the sunset. Many said it was the trip's highlight.",
    "options": [
      "ancient",
      "classical",
      "majestic",
      "symbolic"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The old theater has _____ ceilings covered with gold patterns and tiny carved angels. Cleaning them takes a lot of time.",
    "options": [
      "lifelike",
      "ornate",
      "symbolic",
      "monumental"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Moving the twenty-ton statue across the city was a _____ task for the small team. It required two cranes and a police escort.",
    "options": [
      "lifelike",
      "ornate",
      "classical",
      "monumental"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Glass walls were added to _____ the fragile statues for future generations. Visitors can still view them from every side.",
    "options": [
      "carve",
      "cast",
      "preserve",
      "unveil"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Experts are working to _____ the damaged statue after the earthquake. They hope it will look as it did before by spring.",
    "options": [
      "restore",
      "carve",
      "dedicate",
      "commemorate"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The school will _____ the new garden statue to its first principal. His name will appear on a sign below it.",
    "options": [
      "carve",
      "cast",
      "restore",
      "dedicate"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The city plans to _____ the restored statue at a public event next Saturday. A band will play when the cover is removed.",
    "options": [
      "carve",
      "unveil",
      "sculpt",
      "preserve"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The town built a statue to _____ the hundredth anniversary of the railway. The celebration will last for three days.",
    "options": [
      "commemorate",
      "carve",
      "cast",
      "restore"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The _____ on the base of the statue is written in Latin. A guide translated the words for our tour group.",
    "options": [
      "pedestal",
      "chisel",
      "inscription",
      "landmark"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The old temple and its statues are an important part of the region's cultural _____. The government spends money each year to protect them.",
    "options": [
      "chisel",
      "heritage",
      "plaque",
      "pedestal"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The giant golden statue by the river is the city's best-known _____. Taxi drivers often use it to give directions to visitors.",
    "options": [
      "chisel",
      "bronze",
      "inscription",
      "landmark"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The small statues are now on _____ in the hotel lobby. Guests may look at them but should not touch them.",
    "options": [
      "heritage",
      "chisel",
      "display",
      "craftsmanship"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Customers pay high prices for the workshop's statues because of their fine _____. Every detail is carved carefully by hand.",
    "options": [
      "craftsmanship",
      "heritage",
      "pedestal",
      "landmark"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "sculpture": {
    "pos": "n.",
    "en_def": "a piece of art made by shaping stone, wood, metal or clay",
    "cn_def": "雕塑；雕刻品"
  },
  "monument": {
    "pos": "n.",
    "en_def": "a building or statue built to remember a famous person or event",
    "cn_def": "紀念碑；紀念建築"
  },
  "memorial": {
    "pos": "n.",
    "en_def": "something built to help people remember people who have died",
    "cn_def": "紀念碑；紀念館"
  },
  "bust": {
    "pos": "n.",
    "en_def": "a statue of a person's head, shoulders and chest",
    "cn_def": "半身像"
  },
  "figure": {
    "pos": "n.",
    "en_def": "a statue or shape of a person or animal",
    "cn_def": "人像；雕像；人物造型"
  },
  "carve": {
    "pos": "v.",
    "en_def": "to cut wood or stone to make a shape or pattern",
    "cn_def": "雕刻"
  },
  "sculpt": {
    "pos": "v.",
    "en_def": "to make a statue or shape from stone, clay, metal, etc.",
    "cn_def": "雕塑；雕刻"
  },
  "cast": {
    "pos": "v.",
    "en_def": "to make an object by pouring hot liquid metal into a shape",
    "cn_def": "鑄造"
  },
  "mold": {
    "pos": "v.",
    "en_def": "to press a soft material into a certain shape",
    "cn_def": "塑造；用模子做"
  },
  "chisel": {
    "pos": "n.",
    "en_def": "a metal tool with a sharp edge for cutting wood or stone",
    "cn_def": "鑿子"
  },
  "pedestal": {
    "pos": "n.",
    "en_def": "the base that a statue stands on",
    "cn_def": "底座；基座"
  },
  "plaque": {
    "pos": "n.",
    "en_def": "a flat piece of metal or stone with writing on it, fixed to a wall",
    "cn_def": "匾額；紀念牌"
  },
  "bronze": {
    "pos": "n.",
    "en_def": "a hard brown metal made from copper and tin",
    "cn_def": "青銅"
  },
  "marble": {
    "pos": "n.",
    "en_def": "a hard smooth stone used for statues and buildings",
    "cn_def": "大理石"
  },
  "granite": {
    "pos": "n.",
    "en_def": "a very hard gray or pink stone",
    "cn_def": "花崗岩"
  },
  "lifelike": {
    "pos": "adj.",
    "en_def": "looking very much like a real person or animal",
    "cn_def": "栩栩如生的；逼真的"
  },
  "ancient": {
    "pos": "adj.",
    "en_def": "very old; from a long time ago",
    "cn_def": "古代的；古老的"
  },
  "classical": {
    "pos": "adj.",
    "en_def": "related to the art and style of ancient Greece and Rome",
    "cn_def": "古典的"
  },
  "artistic": {
    "pos": "adj.",
    "en_def": "related to art or showing skill in art",
    "cn_def": "藝術的；有藝術天分的"
  },
  "symbolic": {
    "pos": "adj.",
    "en_def": "representing an idea or meaning",
    "cn_def": "象徵性的"
  },
  "majestic": {
    "pos": "adj.",
    "en_def": "very beautiful, large and impressive",
    "cn_def": "雄偉的；壯麗的"
  },
  "ornate": {
    "pos": "adj.",
    "en_def": "having a lot of detailed decoration",
    "cn_def": "華麗的；裝飾繁複的"
  },
  "monumental": {
    "pos": "adj.",
    "en_def": "very large, difficult or important",
    "cn_def": "巨大的；艱鉅的；不朽的"
  },
  "preserve": {
    "pos": "v.",
    "en_def": "to keep something in good condition",
    "cn_def": "保存；保護"
  },
  "restore": {
    "pos": "v.",
    "en_def": "to repair something old so it looks as it did before",
    "cn_def": "修復；整修"
  },
  "dedicate": {
    "pos": "v.",
    "en_def": "to say officially that something is made to honor someone",
    "cn_def": "獻給；題獻"
  },
  "unveil": {
    "pos": "v.",
    "en_def": "to remove the cover from something new at a special event; to show for the first time",
    "cn_def": "揭幕；首次公開"
  },
  "commemorate": {
    "pos": "v.",
    "en_def": "to do something special to remember and honor a person or event",
    "cn_def": "紀念"
  },
  "inscription": {
    "pos": "n.",
    "en_def": "words written or cut into stone or metal",
    "cn_def": "碑文；銘文；題字"
  },
  "heritage": {
    "pos": "n.",
    "en_def": "important history, buildings and traditions passed down from the past",
    "cn_def": "遺產；文化遺產"
  },
  "landmark": {
    "pos": "n.",
    "en_def": "a famous building or object that is easy to see and recognize",
    "cn_def": "地標"
  },
  "display": {
    "pos": "n.",
    "en_def": "an arrangement of things for people to look at",
    "cn_def": "展示；陳列"
  },
  "craftsmanship": {
    "pos": "n.",
    "en_def": "the skill of making things beautifully by hand",
    "cn_def": "工藝；手藝"
  }
};

const EXTRA_GLOSSES = {};
