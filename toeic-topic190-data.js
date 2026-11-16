// Topic 190 Quiz Data: Insect 昆蟲
// Source word list: https://www.examword.com/group-topic/insect — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T190 - Insect 昆蟲",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "adore",
    "pos": "v.",
    "cn_def": "非常喜愛；熱愛",
    "en_def": "to love or like something very much",
    "sentence": "A: I heard you are organizing the children's science day at the city museum next month, so which activity do you think the young visitors will enjoy most? B: Kids absolutely {{BLANK}} the butterfly garden, so we will give every family a free guided tour there and finish with a short drawing class.",
    "cn": "A：我聽說你正在籌劃下個月在市立博物館舉辦的兒童科學日，你認為年輕的參觀者最喜歡哪個活動？ B：孩子們非常【喜愛】蝴蝶花園，所以我們會為每個家庭提供免費的導覽，最後再上一堂簡短的繪畫課。"
  },
  {
    "word": "hair-raising",
    "pos": "adj.",
    "cn_def": "令人毛骨悚然的；驚險的",
    "en_def": "very frightening but often exciting",
    "sentence": "A: How was the business trip to the research station in the mountains last week, and did your team manage to collect all the samples on time? B: The drive along the narrow cliff road was truly {{BLANK}} because of the heavy rain, but we arrived safely and finished the work a day early.",
    "cn": "A：上週去山上研究站的出差怎麼樣？你們團隊有準時採集完所有樣本嗎？ B：因為下大雨，沿著狹窄懸崖道路開車真的很【驚險】，但我們平安抵達，還提早一天完成了工作。"
  },
  {
    "word": "living organism",
    "pos": "n.phr.",
    "cn_def": "生物；有機體",
    "en_def": "a living thing, such as a plant, animal or bacterium",
    "sentence": "A: Why does the new laboratory manager keep reminding everyone to wear gloves and close the containers when we handle the soil samples from the farm? B: Even a small spoonful of that soil can hide a tiny {{BLANK}} such as a bacterium or an insect egg, so we must protect both ourselves and the accuracy of our test results.",
    "cn": "A：為什麼新的實驗室主管一直提醒大家，在處理農場的土壤樣本時要戴手套並蓋好容器？ B：就算只是一小匙土壤，也可能藏著細菌或昆蟲卵之類的微小【生物】，所以我們必須保護自己，也要確保檢測結果的準確性。"
  },
  {
    "word": "pollinate",
    "pos": "v.",
    "cn_def": "給（植物）授粉",
    "en_def": "to move pollen to a flower so it can make seeds or fruit",
    "sentence": "A: Why did the fruit company decide to rent dozens of beehives from a local farmer before the apple trees started to bloom this spring? B: Without enough bees to {{BLANK}} the flowers, the trees would give us far fewer apples, and we would lose a large part of our yearly income.",
    "cn": "A：為什麼這家水果公司決定在今年春天蘋果樹開花前，向當地農夫租用幾十個蜂箱？ B：如果沒有足夠的蜜蜂為花朵【授粉】，果樹結的蘋果會少很多，我們就會損失很大一部分的年收入。"
  },
  {
    "word": "produce",
    "pos": "v.",
    "cn_def": "生產；製造",
    "en_def": "to make or grow something",
    "sentence": "A: Our marketing team wants to sell local honey in the hotel gift shop, but do you know how much honey one beehive can actually make in a year? B: A healthy hive can {{BLANK}} around twenty kilograms of honey each season, so a small farm nearby could easily supply our shop every month.",
    "cn": "A：我們的行銷團隊想在飯店禮品店販售當地蜂蜜，但你知道一個蜂箱一年實際能產出多少蜂蜜嗎？ B：一個健康的蜂巢每季可以【生產】大約二十公斤的蜂蜜，所以附近的小農場就能輕鬆地每個月供貨給我們的店。"
  },
  {
    "word": "loathe",
    "pos": "v.",
    "cn_def": "極度厭惡；痛恨",
    "en_def": "to hate something very much",
    "sentence": "A: Why does the new receptionist always ask someone else to open the windows in the waiting room during the summer, even when it is really hot? B: She told me she really does {{BLANK}} mosquitoes and flies, and she is afraid they will fly inside and bother the guests while they are waiting.",
    "cn": "A：為什麼新來的接待員夏天總是請別人去開候客室的窗戶，即使天氣真的很熱？ B：她告訴我她非常【痛恨】蚊子和蒼蠅，怕牠們飛進來打擾正在等候的客人。"
  },
  {
    "word": "no-brainer",
    "pos": "n.",
    "cn_def": "不用多想的事；顯而易見的決定",
    "en_def": "a decision that is very easy to make",
    "sentence": "A: The supplier offered us a free upgrade to the better pest control service if we sign a two-year contract, so should we discuss it with the board first? B: Honestly, it is a {{BLANK}} because the price stays the same and the restaurant passed every health inspection after using their service last year.",
    "cn": "A：供應商說如果我們簽兩年合約，就免費升級成更好的除蟲服務，我們要先和董事會討論嗎？ B：說真的，這根本是【不用多想的決定】，因為價格不變，而且餐廳去年使用他們的服務後通過了每一次衛生檢查。"
  },
  {
    "word": "frightened",
    "pos": "adj.",
    "cn_def": "受驚嚇的；害怕的",
    "en_def": "feeling afraid",
    "sentence": "A: Why did the little girl at table five start crying and run to her parents in the middle of the outdoor company picnic this afternoon? B: She was {{BLANK}} by a large spider that climbed onto her plate, so one of the waiters gently carried it away and brought her a fresh dessert.",
    "cn": "A：今天下午公司戶外野餐進行到一半時，五號桌的小女孩為什麼突然哭著跑向她父母？ B：她被一隻爬上她盤子的大蜘蛛【嚇到】了，所以一位服務生輕輕把蜘蛛帶走，並給她送來一份新的甜點。"
  },
  {
    "word": "hornet",
    "pos": "n.",
    "cn_def": "大黃蜂；虎頭蜂",
    "en_def": "a large wasp that can give a painful sting",
    "sentence": "A: Why has the park closed the walking path behind the visitor center, and when do you think it will be open again for the tour groups? B: Workers found a huge {{BLANK}} nest under the wooden bridge, and those large wasps can be dangerous, so experts will remove it safely by Friday.",
    "cn": "A：公園為什麼封閉了遊客中心後面的步道？你覺得什麼時候會重新開放給旅行團？ B：工人在木橋下發現了一個巨大的【虎頭蜂】窩，那種大型胡蜂可能很危險，所以專家會在星期五前把它安全移除。"
  },
  {
    "word": "life-threatening",
    "pos": "adj.",
    "cn_def": "危及生命的",
    "en_def": "able to cause death",
    "sentence": "A: Why must every staff member at the summer camp complete the first-aid course before the children arrive next week? B: Some people have serious allergies, and a single bee sting can become {{BLANK}} within minutes, so we all need to know how to act quickly and call an ambulance.",
    "cn": "A：為什麼夏令營的每位工作人員都必須在下週孩子們抵達前完成急救課程？ B：有些人有嚴重過敏，一次蜂螫就可能在幾分鐘內變得【危及生命】，所以我們都必須知道如何迅速處理並叫救護車。"
  },
  {
    "word": "endearing",
    "pos": "adj.",
    "cn_def": "惹人喜愛的；討喜的",
    "en_def": "making people feel love or affection",
    "sentence": "A: What did the customers say about the new cartoon ladybug that the design team created as the mascot for our organic vegetable brand? B: Most of them found its big eyes and shy smile very {{BLANK}}, and several parents said their children now ask for our vegetables at the supermarket.",
    "cn": "A：顧客對設計團隊為我們有機蔬菜品牌創作的新卡通瓢蟲吉祥物有什麼看法？ B：大部分人覺得牠的大眼睛和害羞的笑容非常【討喜】，還有幾位家長說他們的孩子現在會在超市指名要買我們的蔬菜。"
  },
  {
    "word": "insecticide",
    "pos": "n.",
    "cn_def": "殺蟲劑",
    "en_def": "a chemical used to kill insects",
    "sentence": "A: The farm manager says the cabbages in the north field have holes in their leaves again, so what should we do before the harvest next month? B: We could spray a natural {{BLANK}} that is approved for organic farms, because it kills the caterpillars without harming the soil or our customers' trust in our brand.",
    "cn": "A：農場經理說北邊田裡的高麗菜葉子又出現破洞了，下個月收成前我們該怎麼辦？ B：我們可以噴灑經有機農場認證的天然【殺蟲劑】，因為它能殺死毛毛蟲，又不會傷害土壤或顧客對我們品牌的信任。"
  },
  {
    "word": "irritating",
    "pos": "adj.",
    "cn_def": "惱人的；令人煩躁的",
    "en_def": "making you feel annoyed",
    "sentence": "A: Why did so many guests leave the outdoor wedding reception at the hotel garden before the dessert was even served last night? B: Clouds of small flies kept landing on the food and buzzing around people's faces, which was very {{BLANK}}, so the manager has ordered new fans for the terrace.",
    "cn": "A：昨晚飯店花園的戶外婚宴，為什麼那麼多賓客在甜點還沒上之前就離開了？ B：成群的小蒼蠅不斷停在食物上，還在大家臉旁嗡嗡飛，非常【惱人】，所以經理已經為露台訂購了新的電風扇。"
  },
  {
    "word": "firefly",
    "pos": "n.",
    "cn_def": "螢火蟲",
    "en_def": "a small flying insect whose body gives off light at night",
    "sentence": "A: Our travel agency wants a special evening activity for the tour group visiting the countryside in June, so do you have any good ideas? B: They could take a quiet walk by the river after dinner, because that is the season when every {{BLANK}} lights up the dark fields like tiny stars.",
    "cn": "A：我們旅行社想為六月去鄉間的旅行團安排特別的晚間活動，你有什麼好點子嗎？ B：他們可以在晚餐後沿著河邊安靜散步，因為那正是每一隻【螢火蟲】像小星星般照亮黑暗田野的季節。"
  },
  {
    "word": "butterfly",
    "pos": "n.",
    "cn_def": "蝴蝶",
    "en_def": "an insect with large, colorful wings",
    "sentence": "A: What is the main attraction at the new botanical park that our company is sponsoring, and why do you think families will want to visit? B: There is a large glass house where you can watch a colorful {{BLANK}} come out of its cocoon, and children love taking photos of them in the flowers.",
    "cn": "A：我們公司贊助的新植物園，主要景點是什麼？你為什麼認為家庭遊客會想去？ B：那裡有一座大型玻璃溫室，你可以看到色彩繽紛的【蝴蝶】破繭而出，孩子們很喜歡在花叢中幫牠們拍照。"
  },
  {
    "word": "bee",
    "pos": "n.",
    "cn_def": "蜜蜂",
    "en_def": "a flying insect that makes honey and can sting",
    "sentence": "A: Why is the hotel putting small wooden boxes on the roof garden, and will they cause any problems for the guests who relax up there? B: Each box is a home for a {{BLANK}} colony that will make honey for our breakfast buffet, and the boxes are far from the seating area, so guests will be safe.",
    "cn": "A：飯店為什麼要在屋頂花園放小木箱？會對在那裡休息的客人造成任何問題嗎？ B：每個木箱都是一個【蜜蜂】群的家，牠們會為我們的早餐自助吧生產蜂蜜，而且木箱離座位區很遠，所以客人會很安全。"
  },
  {
    "word": "beetle",
    "pos": "n.",
    "cn_def": "甲蟲",
    "en_def": "an insect with a hard, shiny shell covering its wings",
    "sentence": "A: The museum curator said the insect exhibition needs one more interesting display before it opens to the public next Monday, so what can we add? B: We could show a rare {{BLANK}} with a shiny green shell from South America, since its hard wings look like jewelry and visitors will surely want to take photos.",
    "cn": "A：博物館策展人說昆蟲展在下週一對外開放前還需要再一個有趣的展品，我們可以加什麼？ B：我們可以展出一隻來自南美洲、有著閃亮綠色外殼的稀有【甲蟲】，因為牠堅硬的翅膀看起來像珠寶，參觀者一定會想拍照。"
  },
  {
    "word": "stunning",
    "pos": "adj.",
    "cn_def": "令人驚豔的；極美的",
    "en_def": "extremely beautiful or impressive",
    "sentence": "A: Did the photographer we hired for the nature magazine finish the pictures of the butterflies in the national park yesterday? B: Yes, and the close-up shots are absolutely {{BLANK}}, with bright wings and perfect light, so the editor wants to use one of them on the cover of the next issue.",
    "cn": "A：我們為自然雜誌請的攝影師昨天拍完國家公園裡蝴蝶的照片了嗎？ B：拍完了，而且特寫照片絕對【令人驚豔】，翅膀色彩鮮豔、光線完美，所以編輯想用其中一張當下一期的封面。"
  },
  {
    "word": "ecosystem",
    "pos": "n.",
    "cn_def": "生態系統",
    "en_def": "all the living things in an area and how they depend on each other",
    "sentence": "A: Why is the government asking the construction company to change its plan for the new shopping mall near the wetland area? B: The wetland is part of a fragile {{BLANK}} where birds, frogs, and many insects depend on each other, so building there could cause serious damage to the environment.",
    "cn": "A：政府為什麼要求建設公司修改濕地附近新購物中心的計畫？ B：那片濕地屬於一個脆弱的【生態系統】，鳥類、青蛙和許多昆蟲彼此依存，所以在那裡興建可能會對環境造成嚴重破壞。"
  },
  {
    "word": "sketch",
    "pos": "v.",
    "cn_def": "畫素描；畫草圖",
    "en_def": "to draw something quickly and simply",
    "sentence": "A: How will the design team create the new insect illustrations for the children's science textbook before the printing deadline at the end of the month? B: First, our artist will {{BLANK}} each insect roughly with a pencil while looking at real specimens, and then she will add color on the computer.",
    "cn": "A：設計團隊要如何在月底印刷截止日前，為兒童科學課本完成新的昆蟲插圖？ B：首先，我們的畫家會一邊觀察真正的標本，一邊用鉛筆把每隻昆蟲粗略地【畫成草圖】，然後再用電腦上色。"
  },
  {
    "word": "biodiverse",
    "pos": "adj.",
    "cn_def": "生物多樣性豐富的",
    "en_def": "having many different kinds of plants and animals",
    "sentence": "A: Why does the travel company want to promote eco-tours to this small island in its new brochure for European customers? B: The island is one of the most {{BLANK}} places in the region, with hundreds of kinds of plants, birds, and insects, so nature lovers will gladly pay extra to explore it.",
    "cn": "A：旅遊公司為什麼想在給歐洲客戶的新手冊中推廣這座小島的生態旅遊？ B：這座島是該地區【生物多樣性最豐富】的地方之一，有數百種植物、鳥類和昆蟲，所以大自然愛好者會很樂意多付錢去探索。"
  },
  {
    "word": "jungles",
    "pos": "n.",
    "cn_def": "叢林（複數）",
    "en_def": "thick tropical forests with many trees and plants",
    "sentence": "A: Where did the research team find the new kinds of insects that the science museum will show in its special exhibition this winter? B: They spent three months exploring the thick {{BLANK}} of Southeast Asia, where it rains almost every day and many animals have never been studied by scientists before.",
    "cn": "A：研究團隊是在哪裡發現科學博物館今年冬天特展要展出的新種昆蟲？ B：他們花了三個月探索東南亞茂密的【叢林】，那裡幾乎天天下雨，而且許多動物從未被科學家研究過。"
  },
  {
    "word": "rainforest",
    "pos": "n.",
    "cn_def": "雨林",
    "en_def": "a thick forest in a warm place where it rains a lot",
    "sentence": "A: Our coffee company wants to use a new supplier from South America next year, but how can we make sure the farm treats nature responsibly? B: We should choose a farm that grows coffee under the trees instead of cutting down the {{BLANK}}, since that protects the many insects and birds living there.",
    "cn": "A：我們咖啡公司明年想採用一家南美洲的新供應商，但要怎麼確保農場以負責任的方式對待大自然？ B：我們應該選擇在樹下種植咖啡、而不是砍伐【雨林】的農場，因為這樣能保護住在那裡的許多昆蟲和鳥類。"
  },
  {
    "word": "botanical",
    "pos": "adj.",
    "cn_def": "植物的；植物學的",
    "en_def": "related to plants or the study of plants",
    "sentence": "A: Where should we take the overseas clients on Saturday afternoon if they want a relaxing activity away from the busy downtown offices? B: The city's {{BLANK}} garden is a great choice because it has thousands of plants, a beautiful butterfly house, and a quiet café where we can continue talking business.",
    "cn": "A：如果海外客戶星期六下午想做些遠離繁忙市中心辦公室的輕鬆活動，我們該帶他們去哪裡？ B：市立【植物】園是很好的選擇，因為那裡有數千種植物、一座漂亮的蝴蝶館，還有一間安靜的咖啡館，我們可以繼續談生意。"
  },
  {
    "word": "shape",
    "pos": "n.",
    "cn_def": "形狀；外形",
    "en_def": "the outer form or outline of something",
    "sentence": "A: How did the designer come up with the idea for the new company logo that everyone in the meeting seemed to like so much? B: She studied the {{BLANK}} of a dragonfly's wings for several days, then turned those thin, elegant lines into a simple symbol that shows speed and lightness.",
    "cn": "A：設計師是怎麼想出那個會議上大家似乎都非常喜歡的新公司標誌？ B：她花了好幾天研究蜻蜓翅膀的【形狀】，然後把那些纖細優雅的線條變成一個代表速度與輕盈的簡單符號。"
  },
  {
    "word": "documentary",
    "pos": "n.",
    "cn_def": "紀錄片",
    "en_def": "a film or TV program that gives facts about a real subject",
    "sentence": "A: What kind of program is the television station planning for the nature channel next season, and how big is the budget for it? B: They are making a six-part {{BLANK}} about the secret life of ants, and the producers will spend almost a year filming in forests and deserts around the world.",
    "cn": "A：電視台下一季為自然頻道規劃了什麼樣的節目？預算有多少？ B：他們正在製作一部關於螞蟻秘密生活的六集【紀錄片】，製作人將花將近一年的時間在世界各地的森林和沙漠拍攝。"
  },
  {
    "word": "portray",
    "pos": "v.",
    "cn_def": "描繪；描寫",
    "en_def": "to show or describe someone or something in a certain way",
    "sentence": "A: Why are the entomology experts unhappy with the new animated film about insects that the studio released last month? B: They feel the movie tends to {{BLANK}} spiders and wasps as evil monsters, which could make children afraid of creatures that actually help farmers by eating harmful pests.",
    "cn": "A：為什麼昆蟲學專家對製片廠上個月推出的那部昆蟲動畫電影不滿意？ B：他們覺得這部電影常把蜘蛛和胡蜂【描繪】成邪惡的怪物，這可能會讓孩子害怕這些其實會吃掉害蟲、幫助農夫的生物。"
  },
  {
    "word": "sting",
    "pos": "v.",
    "cn_def": "螫；叮",
    "en_def": "(of an insect) to hurt someone by pushing a sharp part into the skin",
    "sentence": "A: Why is the gardener wearing a thick jacket, gloves, and a net over his face when it is so hot outside this afternoon? B: He has to move the beehives near the parking lot, and the bees may {{BLANK}} him if they feel that their home is in danger, so he is not taking any chances.",
    "cn": "A：今天下午外面這麼熱，園丁為什麼還穿著厚外套、戴手套和面網？ B：他必須搬動停車場附近的蜂箱，如果蜜蜂覺得牠們的家有危險，可能會【螫】他，所以他不想冒任何風險。"
  },
  {
    "word": "stinger",
    "pos": "n.",
    "cn_def": "螫針",
    "en_def": "the sharp part of an insect that it uses to sting",
    "sentence": "A: The hotel nurse said a guest was hurt by a bee near the pool, so what should the lifeguards do if this happens again tomorrow? B: They should first remove the {{BLANK}} from the skin carefully with a card, wash the area with soap and water, and then put some ice on it to reduce the swelling.",
    "cn": "A：飯店護士說有位客人在泳池邊被蜜蜂所傷，如果明天又發生這種事，救生員該怎麼做？ B：他們應該先用卡片小心地把【螫針】從皮膚上刮出，用肥皂和水清洗傷處，然後冰敷以減輕腫脹。"
  },
  {
    "word": "rash",
    "pos": "n.",
    "cn_def": "疹子；皮疹",
    "en_def": "an area of red spots on the skin",
    "sentence": "A: Why did the employee from the warehouse leave work early today, and will he be able to come back tomorrow morning? B: He developed a red, itchy {{BLANK}} on his arms after moving some boxes full of insects and dust, so the doctor gave him some cream and told him to rest.",
    "cn": "A：倉庫那位員工今天為什麼提早下班？他明天早上能回來上班嗎？ B：他搬了一些滿是蟲子和灰塵的箱子後，手臂上長出又紅又癢的【疹子】，所以醫生給了他一些藥膏，要他好好休息。"
  },
  {
    "word": "aesthetically",
    "pos": "adv.",
    "cn_def": "在美學上；在外觀上",
    "en_def": "in a way that relates to beauty and how things look",
    "sentence": "A: Why did the architect choose to cover the walls of the new office lobby with hundreds of plants and colorful butterfly paintings? B: She wanted the space to be {{BLANK}} pleasing for visitors while also making the air cleaner, so employees and guests would feel calmer the moment they walked in.",
    "cn": "A：建築師為什麼選擇在新辦公大廳的牆上布滿數百株植物和色彩繽紛的蝴蝶畫？ B：她希望這個空間在【外觀上】讓訪客賞心悅目，同時也讓空氣更乾淨，讓員工和客人一走進來就感到更平靜。"
  },
  {
    "word": "textures",
    "pos": "n.",
    "cn_def": "質地；觸感（複數）",
    "en_def": "the ways surfaces feel when you touch them, such as rough or smooth",
    "sentence": "A: What makes the new insect exhibit at the science museum so popular with schools, and why do teachers keep booking extra visits? B: Children can touch models that copy the different {{BLANK}} of real insects, such as rough beetle shells and soft butterfly wings, which helps them learn through their hands.",
    "cn": "A：科學博物館新的昆蟲展為什麼這麼受學校歡迎？老師們為什麼一直加訂參觀？ B：孩子們可以觸摸模仿真實昆蟲各種【質地】的模型，例如粗糙的甲蟲外殼和柔軟的蝴蝶翅膀，這讓他們透過雙手學習。"
  }
];

const MCQS = [
  {
    "q": "Many young guests _____ the hotel's butterfly garden. They often ask their parents to visit it again before checking out.",
    "options": [
      "adore",
      "pollinate",
      "portray",
      "sketch"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The night tour through the dark cave was truly _____. Several visitors screamed when bats suddenly flew right over their heads.",
    "options": [
      "endearing",
      "biodiverse",
      "hair-raising",
      "botanical"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Farmers rent beehives every spring so that the bees can _____ the apple blossoms. This greatly increases the size of the harvest.",
    "options": [
      "portray",
      "pollinate",
      "sketch",
      "loathe"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The factory plans to _____ ten thousand bottles of honey next quarter. It has hired twenty extra workers to meet the demand.",
    "options": [
      "portray",
      "pollinate",
      "sting",
      "produce"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Many office workers _____ the mosquitoes that enter the building in summer. The manager has therefore installed new screens on every window.",
    "options": [
      "produce",
      "sketch",
      "loathe",
      "pollinate"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Accepting the free pest control upgrade was a _____. The price stayed the same, and the service quality improved a lot.",
    "options": [
      "no-brainer",
      "stinger",
      "rash",
      "documentary"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The child was _____ when a large spider crawled across the picnic table. Her father quickly picked her up and calmed her down.",
    "options": [
      "stunning",
      "biodiverse",
      "botanical",
      "frightened"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Workers discovered a huge _____ nest under the roof of the warehouse. They called a professional company to remove it safely.",
    "options": [
      "firefly",
      "hornet",
      "rainforest",
      "documentary"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "For people with severe allergies, a single insect bite can be _____. Staff must keep emergency medicine in the first-aid kit.",
    "options": [
      "life-threatening",
      "stunning",
      "biodiverse",
      "endearing"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Customers find the cartoon ladybug on our packaging very _____. Its shy smile and big round eyes make children want to buy our products.",
    "options": [
      "life-threatening",
      "hair-raising",
      "endearing",
      "biodiverse"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The farm sprays a natural _____ to keep caterpillars away from the cabbages. The product is approved for use on organic farms.",
    "options": [
      "rash",
      "insecticide",
      "ecosystem",
      "documentary"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The constant buzzing of flies in the outdoor café was very _____. Many guests complained and asked to move to a table inside.",
    "options": [
      "botanical",
      "biodiverse",
      "stunning",
      "irritating"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "On summer nights, every _____ in the valley lights up the fields like a tiny star. Tour groups come from the city to see them.",
    "options": [
      "hornet",
      "beetle",
      "firefly",
      "stinger"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Visitors to the glass house can watch a colorful _____ come out of its cocoon. Photography is allowed, but touching the wings is not.",
    "options": [
      "butterfly",
      "hornet",
      "stinger",
      "rash"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Each wooden box on the hotel roof is home to a _____ colony. The honey it makes is served at the breakfast buffet.",
    "options": [
      "beetle",
      "firefly",
      "rash",
      "bee"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The museum will display a rare _____ with a shiny green shell. Its hard wing covers look almost like expensive jewelry.",
    "options": [
      "butterfly",
      "beetle",
      "stinger",
      "rash"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The photographer's close-up pictures of the butterflies are absolutely _____. The editor plans to put one on the cover of next month's magazine.",
    "options": [
      "stunning",
      "irritating",
      "frightened",
      "life-threatening"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Building a mall near the wetland could damage the local _____. Birds, frogs, and insects there all depend on one another to survive.",
    "options": [
      "documentary",
      "stinger",
      "ecosystem",
      "rash"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Before painting, the artist likes to _____ each insect roughly with a pencil. She then adds color and detail on her computer.",
    "options": [
      "sting",
      "sketch",
      "pollinate",
      "loathe"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The island is one of the most _____ places in the region. Scientists have recorded hundreds of species of plants, birds, and insects there.",
    "options": [
      "irritating",
      "frightened",
      "hair-raising",
      "biodiverse"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The research team spent three months exploring the thick _____ of Southeast Asia. They discovered several insect species never recorded before.",
    "options": [
      "textures",
      "rashes",
      "jungles",
      "hornets"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The coffee farm grows its beans under tall trees instead of cutting down the _____. This protects the many animals living in the area.",
    "options": [
      "rainforest",
      "insecticide",
      "stinger",
      "documentary"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The clients enjoyed their visit to the city's _____ garden on Saturday. They especially liked the greenhouse filled with tropical plants.",
    "options": [
      "frightened",
      "irritating",
      "life-threatening",
      "botanical"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The designer studied the _____ of a dragonfly's wings for several days. She then turned those elegant lines into the company's new logo.",
    "options": [
      "rash",
      "shape",
      "stinger",
      "ecosystem"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The nature channel is producing a six-part _____ about the secret life of ants. Filming will take nearly a year in several countries.",
    "options": [
      "documentary",
      "insecticide",
      "stinger",
      "rash"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Some cartoons _____ wasps as evil monsters that attack people for fun. Experts worry this gives children the wrong idea about insects.",
    "options": [
      "pollinate",
      "produce",
      "portray",
      "sting"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Bees may _____ people who come too close to their hive. The gardener therefore wears gloves and a face net when he works.",
    "options": [
      "sketch",
      "sting",
      "portray",
      "adore"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "If a bee stings a guest, the lifeguard should gently remove the _____ from the skin. Then the area should be washed with soap and water.",
    "options": [
      "shape",
      "ecosystem",
      "documentary",
      "stinger"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "After handling the dusty boxes, the warehouse worker developed an itchy red _____ on his arms. The doctor gave him cream and told him to rest.",
    "options": [
      "beetle",
      "documentary",
      "rash",
      "ecosystem"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Children at the exhibit can touch models that copy the different _____ of insects. Rough beetle shells and soft wings help them learn by feeling.",
    "options": [
      "textures",
      "jungles",
      "ecosystems",
      "documentaries"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "adore": {
    "pos": "v.",
    "en_def": "to love or like something very much",
    "cn_def": "非常喜愛；熱愛"
  },
  "hair-raising": {
    "pos": "adj.",
    "en_def": "very frightening but often exciting",
    "cn_def": "令人毛骨悚然的；驚險的"
  },
  "living organism": {
    "pos": "n.phr.",
    "en_def": "a living thing, such as a plant, animal or bacterium",
    "cn_def": "生物；有機體"
  },
  "pollinate": {
    "pos": "v.",
    "en_def": "to move pollen to a flower so it can make seeds or fruit",
    "cn_def": "給（植物）授粉"
  },
  "produce": {
    "pos": "v.",
    "en_def": "to make or grow something",
    "cn_def": "生產；製造"
  },
  "loathe": {
    "pos": "v.",
    "en_def": "to hate something very much",
    "cn_def": "極度厭惡；痛恨"
  },
  "no-brainer": {
    "pos": "n.",
    "en_def": "a decision that is very easy to make",
    "cn_def": "不用多想的事；顯而易見的決定"
  },
  "frightened": {
    "pos": "adj.",
    "en_def": "feeling afraid",
    "cn_def": "受驚嚇的；害怕的"
  },
  "hornet": {
    "pos": "n.",
    "en_def": "a large wasp that can give a painful sting",
    "cn_def": "大黃蜂；虎頭蜂"
  },
  "life-threatening": {
    "pos": "adj.",
    "en_def": "able to cause death",
    "cn_def": "危及生命的"
  },
  "endearing": {
    "pos": "adj.",
    "en_def": "making people feel love or affection",
    "cn_def": "惹人喜愛的；討喜的"
  },
  "insecticide": {
    "pos": "n.",
    "en_def": "a chemical used to kill insects",
    "cn_def": "殺蟲劑"
  },
  "irritating": {
    "pos": "adj.",
    "en_def": "making you feel annoyed",
    "cn_def": "惱人的；令人煩躁的"
  },
  "firefly": {
    "pos": "n.",
    "en_def": "a small flying insect whose body gives off light at night",
    "cn_def": "螢火蟲"
  },
  "butterfly": {
    "pos": "n.",
    "en_def": "an insect with large, colorful wings",
    "cn_def": "蝴蝶"
  },
  "bee": {
    "pos": "n.",
    "en_def": "a flying insect that makes honey and can sting",
    "cn_def": "蜜蜂"
  },
  "beetle": {
    "pos": "n.",
    "en_def": "an insect with a hard, shiny shell covering its wings",
    "cn_def": "甲蟲"
  },
  "stunning": {
    "pos": "adj.",
    "en_def": "extremely beautiful or impressive",
    "cn_def": "令人驚豔的；極美的"
  },
  "ecosystem": {
    "pos": "n.",
    "en_def": "all the living things in an area and how they depend on each other",
    "cn_def": "生態系統"
  },
  "sketch": {
    "pos": "v.",
    "en_def": "to draw something quickly and simply",
    "cn_def": "畫素描；畫草圖"
  },
  "biodiverse": {
    "pos": "adj.",
    "en_def": "having many different kinds of plants and animals",
    "cn_def": "生物多樣性豐富的"
  },
  "jungles": {
    "pos": "n.",
    "en_def": "thick tropical forests with many trees and plants",
    "cn_def": "叢林（複數）"
  },
  "rainforest": {
    "pos": "n.",
    "en_def": "a thick forest in a warm place where it rains a lot",
    "cn_def": "雨林"
  },
  "botanical": {
    "pos": "adj.",
    "en_def": "related to plants or the study of plants",
    "cn_def": "植物的；植物學的"
  },
  "shape": {
    "pos": "n.",
    "en_def": "the outer form or outline of something",
    "cn_def": "形狀；外形"
  },
  "documentary": {
    "pos": "n.",
    "en_def": "a film or TV program that gives facts about a real subject",
    "cn_def": "紀錄片"
  },
  "portray": {
    "pos": "v.",
    "en_def": "to show or describe someone or something in a certain way",
    "cn_def": "描繪；描寫"
  },
  "sting": {
    "pos": "v.",
    "en_def": "(of an insect) to hurt someone by pushing a sharp part into the skin",
    "cn_def": "螫；叮"
  },
  "stinger": {
    "pos": "n.",
    "en_def": "the sharp part of an insect that it uses to sting",
    "cn_def": "螫針"
  },
  "rash": {
    "pos": "n.",
    "en_def": "an area of red spots on the skin",
    "cn_def": "疹子；皮疹"
  },
  "aesthetically": {
    "pos": "adv.",
    "en_def": "in a way that relates to beauty and how things look",
    "cn_def": "在美學上；在外觀上"
  },
  "textures": {
    "pos": "n.",
    "en_def": "the ways surfaces feel when you touch them, such as rough or smooth",
    "cn_def": "質地；觸感（複數）"
  }
};

const EXTRA_GLOSSES = {};
