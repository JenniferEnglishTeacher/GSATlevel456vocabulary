// Topic 54 Quiz Data: Childhood Activities 童年活動
// Source word list: https://www.examword.com/group-topic/childhood-activities — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T54 - Childhood Activities 童年活動",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "play",
    "pos": "v.",
    "cn_def": "玩耍",
    "en_def": "to do things for fun, especially as a child",
    "sentence": "A: The new apartment complex near our office has a large green yard, so do you think families with young kids will like living there? B: Definitely, because parents can watch their children {{BLANK}} safely outside while they cook dinner, and the security guard checks the gate every evening.",
    "cn": "A：我們辦公室附近的新公寓社區有一大片綠色庭院，你覺得有小孩的家庭會喜歡住在那裡嗎？ B：當然，因為父母煮晚餐時可以看著孩子在外面安全地【玩耍】，而且保全每天晚上都會檢查大門。"
  },
  {
    "word": "game",
    "pos": "n.",
    "cn_def": "遊戲",
    "en_def": "an activity with rules that people play for fun",
    "sentence": "A: We need an activity for the children at the company family day next Saturday, but the weather might be rainy, so what should we prepare? B: Let's set up a simple board {{BLANK}} in the meeting room, because it only needs a table and some chairs, and kids of different ages can join in together.",
    "cn": "A：下週六公司家庭日我們需要為孩子準備一個活動，但天氣可能會下雨，我們該準備什麼？ B：我們在會議室擺一個簡單的桌上【遊戲】吧，因為只需要一張桌子和幾把椅子，不同年齡的孩子都能一起參加。"
  },
  {
    "word": "hide-and-seek",
    "pos": "n.",
    "cn_def": "捉迷藏",
    "en_def": "a game in which one child looks for the others who are hiding",
    "sentence": "A: The kindergarten teachers want a cheap activity for the open house that keeps the children busy in the garden, so do you have any ideas? B: They could organize a round of {{BLANK}}, where one child closes their eyes and counts to twenty while the others find secret places behind the trees and bushes.",
    "cn": "A：幼兒園老師想在開放日辦一個便宜的活動，讓孩子們在花園裡玩得忙不停，你有什麼點子嗎？ B：他們可以辦一輪【捉迷藏】，一個孩子閉上眼睛數到二十，其他孩子則在樹木和灌木叢後面找祕密的地方躲起來。"
  },
  {
    "word": "tag",
    "pos": "n.",
    "cn_def": "鬼抓人",
    "en_def": "a children's game in which one player chases and touches the others",
    "sentence": "A: Why were the children at the summer camp so tired and hungry when they came back to the hotel lobby this afternoon? B: They spent almost an hour playing {{BLANK}} on the beach, so whoever was 'it' had to chase the others and touch them before they reached the big umbrella.",
    "cn": "A：夏令營的孩子們今天下午回到飯店大廳時，為什麼又累又餓？ B：他們在海灘上玩了將近一小時的【鬼抓人】，當鬼的人必須追其他人，並在他們跑到大陽傘之前碰到他們。"
  },
  {
    "word": "outdoor play",
    "pos": "n.phr.",
    "cn_def": "戶外遊戲",
    "en_def": "games and activities that children do outside",
    "sentence": "A: The new daycare center downtown charges more than the one near the station, so why are so many working parents choosing it? B: It has a large garden, and the staff plan two hours of {{BLANK}} every day, which helps the children stay healthy, sleep better at night, and make new friends.",
    "cn": "A：市中心的新托兒所收費比車站附近那家貴，為什麼還有這麼多上班族父母選擇它？ B：它有一個大花園，而且工作人員每天安排兩小時的【戶外遊戲】，能幫助孩子保持健康、晚上睡得更好，還能交到新朋友。"
  },
  {
    "word": "imagination",
    "pos": "n.",
    "cn_def": "想像力",
    "en_def": "the ability to form new pictures and ideas in your mind",
    "sentence": "A: The toy company's new advertisement shows only a cardboard box and a little girl, so why did the marketing team choose such a simple idea? B: They wanted to show that a child's {{BLANK}} can turn an empty box into a spaceship or a castle, and parents responded very positively to that message online.",
    "cn": "A：玩具公司的新廣告只有一個紙箱和一個小女孩，行銷團隊為什麼選這麼簡單的點子？ B：他們想表達孩子的【想像力】可以把空箱子變成太空船或城堡，而家長們在網路上對這個訊息的反應非常正面。"
  },
  {
    "word": "imaginative",
    "pos": "adj.",
    "cn_def": "富有想像力的",
    "en_def": "having or showing new and creative ideas",
    "sentence": "A: The publisher received over two hundred stories for its children's writing contest this year, so how did the judges choose the winner? B: They picked a ten-year-old boy's very {{BLANK}} story about a talking bicycle that travels around Taiwan, because it was original, funny, and full of surprising ideas.",
    "cn": "A：出版社今年的兒童寫作比賽收到超過兩百篇故事，評審是怎麼選出優勝者的？ B：他們選了一個十歲男孩非常【富有想像力】的故事，講一輛會說話的腳踏車環遊台灣，因為它很有原創性、很有趣，而且充滿令人驚喜的點子。"
  },
  {
    "word": "pretend",
    "pos": "v.",
    "cn_def": "假裝",
    "en_def": "to act as if something is true when it is not, often in play",
    "sentence": "A: Your daughter was talking to her stuffed animals in the waiting room for twenty minutes, so was she bored while you were seeing the bank manager? B: Not at all, she loves to {{BLANK}} that she owns a small restaurant, so she was taking their orders and serving them imaginary noodles.",
    "cn": "A：你女兒在等候室跟她的絨毛玩具說了二十分鐘的話，你和銀行經理談事情時她覺得無聊嗎？ B：一點也不，她很喜歡【假裝】自己開了一家小餐廳，所以她在幫它們點餐，還端上想像出來的麵。"
  },
  {
    "word": "role-play",
    "pos": "n.",
    "cn_def": "角色扮演",
    "en_def": "an activity in which people act as different characters",
    "sentence": "A: How did the English teacher help the young students feel less nervous about speaking at the school's international day? B: She set up a short {{BLANK}} in which the children acted as shop owners and customers, so they practiced asking prices and saying thank you before they met the foreign visitors.",
    "cn": "A：英文老師是怎麼幫助年幼的學生在學校國際日時說話不那麼緊張的？ B：她安排了一段簡短的【角色扮演】，讓孩子們扮成店主和顧客，所以他們在見到外國訪客之前就練習了問價錢和說謝謝。"
  },
  {
    "word": "drawing",
    "pos": "n.",
    "cn_def": "圖畫；素描",
    "en_def": "a picture made with a pencil, pen, or crayon",
    "sentence": "A: I noticed a colorful picture of a house and a big sun on your office wall, so did you buy it at the art fair last weekend? B: No, it is a {{BLANK}} my five-year-old son made with crayons for my birthday, and I put it there because it makes me smile during long meetings.",
    "cn": "A：我注意到你辦公室牆上有一幅色彩鮮豔、畫著房子和大太陽的畫，是你上週末在藝術市集買的嗎？ B：不是，那是我五歲兒子用蠟筆為我生日畫的【圖畫】，我把它掛在那裡，因為在冗長的會議中它會讓我微笑。"
  },
  {
    "word": "coloring",
    "pos": "n.",
    "cn_def": "著色；塗色",
    "en_def": "the activity of adding color to pictures, often with crayons",
    "sentence": "A: The family restaurant on the corner gets very busy on Sunday afternoons, so how do the waiters keep the young customers quiet while they wait for food? B: They give every child a box of crayons and some {{BLANK}} pages with animals and cartoon cars, so the kids stay at the table and the parents can relax.",
    "cn": "A：轉角那家家庭餐廳週日下午很忙，服務生是怎麼讓小客人在等餐時保持安靜的？ B：他們給每個孩子一盒蠟筆和幾張畫有動物和卡通汽車的【著色】頁，這樣孩子就會待在餐桌旁，父母也能放鬆。"
  },
  {
    "word": "painting",
    "pos": "n.",
    "cn_def": "繪畫",
    "en_def": "the activity of making pictures with paint",
    "sentence": "A: The community center is offering several weekend classes for kids this spring, so which one do you think your daughter will choose? B: She will probably sign up for {{BLANK}}, because she loves mixing bright colors with a brush and wants to make a picture of our cat for her grandmother.",
    "cn": "A：社區中心今年春天開了幾堂週末兒童課程，你覺得你女兒會選哪一堂？ B：她大概會報名【繪畫】課，因為她喜歡用畫筆調出鮮豔的顏色，還想畫一張我們家貓咪的畫送給奶奶。"
  },
  {
    "word": "craft",
    "pos": "n.",
    "cn_def": "手工藝",
    "en_def": "something made by hand with skill, or the activity of making it",
    "sentence": "A: What will the children do during the holiday workshop at the department store while their parents are shopping on the upper floors? B: The staff will help them make a simple paper {{BLANK}}, such as a lantern or a card, using glue, scissors, and colored paper that the store provides for free.",
    "cn": "A：家長在百貨公司樓上購物時，孩子們在假日工作坊裡會做什麼？ B：工作人員會幫他們做一個簡單的紙【手工藝品】，例如燈籠或卡片，用的是百貨公司免費提供的膠水、剪刀和色紙。"
  },
  {
    "word": "sing",
    "pos": "v.",
    "cn_def": "唱歌",
    "en_def": "to make music with your voice",
    "sentence": "A: The kindergarten is holding a small concert for parents at the end of the term, so what will your son's class perform on stage? B: The children will {{BLANK}} three short songs in English while their teacher plays the piano, and they have been practicing every morning after breakfast for two weeks.",
    "cn": "A：幼兒園學期末要為家長辦一場小型音樂會，你兒子的班上要表演什麼？ B：孩子們會在老師彈鋼琴時用英文【唱】三首短歌，他們已經每天早餐後練習兩個星期了。"
  },
  {
    "word": "dance",
    "pos": "v.",
    "cn_def": "跳舞",
    "en_def": "to move your body to music",
    "sentence": "A: Why was the hotel ballroom so noisy during the wedding reception last night, even though the band had already finished? B: The DJ played some popular children's songs, and all the little guests hurried to the middle of the room to {{BLANK}} and spin around until almost eleven o'clock.",
    "cn": "A：昨晚的婚宴上樂團已經演奏完了，為什麼飯店宴會廳還這麼吵？ B：DJ放了一些熱門兒歌，所有的小賓客都趕到廳中央【跳舞】、轉圈圈，一直到快十一點。"
  },
  {
    "word": "nursery rhyme",
    "pos": "n.phr.",
    "cn_def": "童謠",
    "en_def": "a short traditional poem or song for young children",
    "sentence": "A: The children's bookstore wants to attract more young families on weekday mornings, so what new event are the managers planning? B: They will hold a free music hour where a teacher leads parents and babies in singing a classic {{BLANK}} like 'Twinkle, Twinkle, Little Star' with simple hand movements.",
    "cn": "A：童書店想在平日早上吸引更多年輕家庭，經理們在規劃什麼新活動？ B：他們會辦一個免費的音樂時段，由一位老師帶領家長和寶寶一起唱經典【童謠】，例如〈一閃一閃亮晶晶〉，並搭配簡單的手部動作。"
  },
  {
    "word": "storytelling",
    "pos": "n.",
    "cn_def": "說故事",
    "en_def": "the activity of telling or reading stories to people",
    "sentence": "A: The public library has many visitors on Saturday afternoons, so which event do the young children enjoy most there? B: They love the {{BLANK}} hour, when a volunteer reads a picture book aloud with funny voices and asks the kids questions about what might happen next in the plot.",
    "cn": "A：公共圖書館週六下午有很多訪客，小朋友在那裡最喜歡哪個活動？ B：他們最喜歡【說故事】時間，一位志工會用逗趣的聲音朗讀繪本，還會問孩子接下來的情節可能會怎麼發展。"
  },
  {
    "word": "reading",
    "pos": "n.",
    "cn_def": "閱讀",
    "en_def": "the activity of looking at and understanding written words",
    "sentence": "A: The school asked parents to limit screen time at home, so how are you keeping your kids busy in the evenings now? B: We have made thirty minutes of {{BLANK}} part of their bedtime routine, and every Friday we visit the library so they can choose new books about animals and space.",
    "cn": "A：學校請家長在家限制孩子使用螢幕的時間，你現在晚上都怎麼讓孩子有事做？ B：我們把三十分鐘的【閱讀】變成他們睡前的固定習慣，而且每週五都去圖書館，讓他們挑選關於動物和太空的新書。"
  },
  {
    "word": "listen",
    "pos": "v.",
    "cn_def": "聆聽",
    "en_def": "to pay attention to sounds or to what someone says",
    "sentence": "A: The training company is running a weekend program that teaches young children how to behave well during group activities, so what is the first skill they practice? B: The coaches first teach them to {{BLANK}} carefully when someone else is speaking, so they wait for their turn instead of shouting out answers.",
    "cn": "A：那家培訓公司正在辦一個週末課程，教小朋友在團體活動中守規矩，他們第一個練習的技能是什麼？ B：教練們會先教他們在別人說話時仔細【聆聽】，讓他們等輪到自己再說，而不是大聲喊出答案。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索",
    "en_def": "to travel around a place to learn about it",
    "sentence": "A: Our family is staying at a farm resort in Yilan next month, so what activities does the resort offer for young guests? B: The kids can {{BLANK}} the forest trail with a guide, look for insects under the leaves, and visit a small river where they can see fish and frogs.",
    "cn": "A：我們家下個月要住宜蘭的一間農場度假村，那裡有什麼給小房客的活動？ B：孩子們可以跟著導覽員【探索】森林步道、在樹葉底下找昆蟲，還可以去一條小河看魚和青蛙。"
  },
  {
    "word": "exploration",
    "pos": "n.",
    "cn_def": "探索",
    "en_def": "the act of looking around a place or thing to discover more",
    "sentence": "A: Why does the new science museum let children touch almost everything instead of keeping the exhibits behind glass? B: The designers believe that hands-on {{BLANK}} helps kids remember what they learn, so visitors can build bridges, test magnets, and dig for model dinosaur bones in a large sand pit.",
    "cn": "A：新的科學博物館為什麼讓孩子幾乎什麼都能摸，而不是把展品放在玻璃後面？ B：設計師相信親自動手的【探索】能幫助孩子記住所學，所以參觀者可以搭橋、測試磁鐵，還能在大沙坑裡挖恐龍骨頭模型。"
  },
  {
    "word": "climb",
    "pos": "v.",
    "cn_def": "爬；攀爬",
    "en_def": "to go up something using your hands and feet",
    "sentence": "A: The building manager asked us to check the new play area in the lobby before it opens on Monday, so is everything safe for the children? B: Mostly, but the rope wall is too high, and kids could {{BLANK}} over the top and fall onto the hard floor, so we need thicker mats.",
    "cn": "A：大樓管理員請我們在週一開放前檢查大廳新的遊戲區，對孩子來說一切都安全嗎？ B：大致上是，但繩網牆太高了，孩子可能會【爬】過頂端掉到堅硬的地板上，所以我們需要更厚的墊子。"
  },
  {
    "word": "run",
    "pos": "v.",
    "cn_def": "跑",
    "en_def": "to move quickly on your feet",
    "sentence": "A: Why did the school decide to remove some of the old benches from the sports field during the summer holiday? B: The children needed more open space to {{BLANK}} around safely at lunchtime, and the teachers were worried that someone would trip over the benches and get hurt.",
    "cn": "A：學校為什麼決定在暑假期間移走運動場上一些舊長椅？ B：孩子們午餐時間需要更多空地可以安全地【跑】來跑去，而且老師們擔心有人會被長椅絆倒受傷。"
  },
  {
    "word": "jump",
    "pos": "v.",
    "cn_def": "跳",
    "en_def": "to push yourself off the ground into the air with your legs",
    "sentence": "A: The trampoline park near the shopping mall is offering a discount for company groups, so should we take our team's children there next month? B: Good idea, the kids can {{BLANK}} as high as they want on the soft surfaces, and there is a café where the parents can sit and chat.",
    "cn": "A：購物中心附近的彈跳床樂園有公司團體優惠，我們下個月要不要帶團隊同事的孩子去？ B：好主意，孩子們可以在柔軟的彈跳床上盡情地【跳】，那裡還有一間咖啡館讓家長坐著聊天。"
  },
  {
    "word": "ride",
    "pos": "v.",
    "cn_def": "騎",
    "en_def": "to sit on and control a bicycle, horse, etc.",
    "sentence": "A: The city just finished building a new riverside park with wide paths, so what will families be able to do there on weekends? B: Children can {{BLANK}} their bicycles along the river without worrying about cars, and there is a rental shop near the entrance for families who don't have their own.",
    "cn": "A：市政府剛蓋好一座有寬敞步道的河濱公園，週末家庭可以在那裡做什麼？ B：孩子們可以沿著河邊【騎】腳踏車，不用擔心汽車，而且入口附近有一家出租店，給沒有自己車子的家庭使用。"
  },
  {
    "word": "bike riding",
    "pos": "n.phr.",
    "cn_def": "騎腳踏車",
    "en_def": "the activity of riding a bicycle for fun or exercise",
    "sentence": "A: Your son seems much more confident and active than he was last year, so has he joined any new after-school clubs recently? B: Yes, he has taken up {{BLANK}} with his father every weekend, and they usually travel about ten kilometers along the coast before stopping for breakfast at a small café.",
    "cn": "A：你兒子看起來比去年更有自信、更活潑了，他最近有參加什麼新的課後社團嗎？ B：有，他每個週末都跟爸爸去【騎腳踏車】，他們通常沿著海岸騎大約十公里，再停在一家小咖啡館吃早餐。"
  },
  {
    "word": "sports",
    "pos": "n.",
    "cn_def": "運動",
    "en_def": "games or activities in which people use their bodies and often compete",
    "sentence": "A: The company is planning a family fun day at the stadium in October, so what kind of activities should we include for employees' children? B: We should offer several team {{BLANK}} like soccer and relay races, because they are easy to organize, and the kids will learn to cooperate with new friends.",
    "cn": "A：公司打算十月在體育場辦家庭同樂日，我們應該為員工的孩子安排哪些活動？ B：我們應該提供幾項團隊【運動】，例如足球和接力賽，因為它們容易安排，孩子們也能學著和新朋友合作。"
  },
  {
    "word": "swimming",
    "pos": "n.",
    "cn_def": "游泳",
    "en_def": "the activity of moving through water using your arms and legs",
    "sentence": "A: The hotel we booked for our business trip to Kenting has a large pool, so do you think your kids will enjoy staying there? B: Absolutely, they love {{BLANK}} more than any other summer activity, and they took lessons at the sports center for three months, so they can now float and kick without help.",
    "cn": "A：我們出差去墾丁訂的飯店有一個大泳池，你覺得你的孩子會喜歡住那裡嗎？ B：當然，他們最愛【游泳】，勝過任何其他夏日活動，而且他們在運動中心上了三個月的課，現在不用別人幫忙就能漂浮和踢水了。"
  },
  {
    "word": "playground",
    "pos": "n.",
    "cn_def": "遊樂場",
    "en_def": "an outdoor area with equipment for children to play on",
    "sentence": "A: The property developer says the new housing project will attract young families, so what facilities are they adding to the site? B: They are building a large {{BLANK}} with slides, swings, and a sandbox in the center of the complex, so parents can watch their children from the windows of their apartments.",
    "cn": "A：建商說新的住宅案會吸引年輕家庭，他們在基地上增加了哪些設施？ B：他們正在社區中央蓋一座有溜滑梯、鞦韆和沙坑的大型【遊樂場】，讓父母可以從公寓窗戶看著孩子。"
  },
  {
    "word": "picnic",
    "pos": "n.",
    "cn_def": "野餐",
    "en_def": "a meal eaten outdoors, often in a park",
    "sentence": "A: The weather forecast says it will be sunny and warm on Sunday, so do you have any plans with your family this weekend? B: We are going to have a {{BLANK}} by the lake in Daan Park, and the kids will help me make sandwiches and pack fruit and cold drinks in the morning.",
    "cn": "A：天氣預報說週日會晴朗溫暖，這個週末你和家人有什麼計畫嗎？ B：我們要去大安公園的湖邊【野餐】，孩子們早上會幫我做三明治，並把水果和冷飲打包好。"
  },
  {
    "word": "collect",
    "pos": "v.",
    "cn_def": "收集",
    "en_def": "to get and keep things of the same type as a hobby",
    "sentence": "A: Why is your son so excited about the new convenience store promotion that started at the beginning of this month? B: He likes to {{BLANK}} the small cartoon stickers that come with each purchase, and he wants to fill the whole album before the event ends in December.",
    "cn": "A：你兒子為什麼對這個月初開始的便利商店新促銷活動這麼興奮？ B：他喜歡【收集】每次購物附贈的小卡通貼紙，而且想在活動十二月結束前把整本集點冊貼滿。"
  },
  {
    "word": "collection",
    "pos": "n.",
    "cn_def": "收藏品",
    "en_def": "a group of similar things that someone has gathered",
    "sentence": "A: The toy museum is asking local residents to lend items for its new exhibition about childhood in the 1980s, so are you going to help? B: Yes, my father still has his {{BLANK}} of old metal cars from his school days, and he is happy to let the museum display them for three months.",
    "cn": "A：玩具博物館正在請當地居民出借物品，舉辦一個關於1980年代童年的新展覽，你會幫忙嗎？ B：會，我父親還留著他學生時代的舊金屬小汽車【收藏】，他很樂意讓博物館展出三個月。"
  },
  {
    "word": "help out",
    "pos": "v.phr.",
    "cn_def": "幫忙",
    "en_def": "to help someone, especially by doing a share of the work",
    "sentence": "A: The children at your neighbor's house seem very busy in the garden every Saturday morning, so what are they doing out there? B: Their grandparents grow vegetables, and the kids {{BLANK}} by watering the plants and picking tomatoes, which teaches them responsibility and earns them a little pocket money.",
    "cn": "A：你鄰居家的孩子每週六早上在花園裡看起來都很忙，他們在那裡做什麼？ B：他們的祖父母種菜，孩子們會【幫忙】澆水和摘番茄，這能培養他們的責任感，還能賺一點零用錢。"
  },
  {
    "word": "chores",
    "pos": "n.",
    "cn_def": "家務；雜事",
    "en_def": "small regular jobs at home, like cleaning or washing dishes",
    "sentence": "A: How do you get your kids to stop watching cartoons and do something useful on weekend mornings at home? B: We made a simple chart of household {{BLANK}}, such as feeding the dog and folding laundry, and they earn a sticker for each task they finish before lunch.",
    "cn": "A：週末早上在家，你是怎麼讓孩子不再看卡通、做點有用的事？ B：我們做了一張簡單的【家務】表，例如餵狗和摺衣服，他們每在午餐前完成一項就能得到一張貼紙。"
  },
  {
    "word": "hobby",
    "pos": "n.",
    "cn_def": "嗜好",
    "en_def": "an activity you do for fun in your free time",
    "sentence": "A: The manager asked about your childhood during the job interview this morning, so what did you tell her? B: I said that my favorite {{BLANK}} was building model airplanes, because it taught me patience and attention to detail, which are useful skills for an engineering position like this one.",
    "cn": "A：今天早上面試時經理問了你的童年，你怎麼回答她？ B：我說我最喜歡的【嗜好】是做模型飛機，因為它教會我耐心和注重細節，這些對像這樣的工程職位都是很有用的技能。"
  }
];

const MCQS = [
  {
    "q": "Parents in the neighborhood let their children _____ football in the park after school. The kids usually stay outside until dinner is ready.",
    "options": [
      "play",
      "pretend",
      "listen",
      "collect"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The software company released a new educational _____ for young children last month. Kids answer math questions to win points and unlock new levels.",
    "options": [
      "picnic",
      "chores",
      "game",
      "playground"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The daycare center added a large garden to encourage more _____. Teachers believe fresh air and sunlight help children grow strong and healthy.",
    "options": [
      "nursery rhyme",
      "coloring",
      "collection",
      "outdoor play"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The toy store sells simple wooden blocks instead of electronic toys. The owner says these blocks allow a child's _____ to grow freely.",
    "options": [
      "picnic",
      "imagination",
      "swimming",
      "chores"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "My little brother likes to _____ that he is a pilot. He wears a paper hat and makes airplane noises around the living room.",
    "options": [
      "pretend",
      "climb",
      "listen",
      "collect"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The teacher divided the class into pairs for a short _____. One student acted as a waiter, and the other ordered food from a menu.",
    "options": [
      "hobby",
      "collection",
      "role-play",
      "playground"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "My daughter made a pencil _____ of our family for her school project. She showed everyone smiling in front of our apartment building.",
    "options": [
      "picnic",
      "drawing",
      "chores",
      "sports"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The airline gives young passengers a free _____ book and crayons on long flights. It keeps children busy and quiet for hours.",
    "options": [
      "bike riding",
      "swimming",
      "exploration",
      "coloring"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The art center offers a weekend _____ class for children aged six to ten. Students learn to mix colors and use different brushes.",
    "options": [
      "painting",
      "picnic",
      "swimming",
      "reading"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "At the holiday market, children can make a simple _____ from paper and glue. Many parents hang the finished stars on their Christmas trees.",
    "options": [
      "reading",
      "hobby",
      "craft",
      "sports"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The choir teacher asked the children to _____ the school song at the opening ceremony. They practiced it every morning for two weeks.",
    "options": [
      "climb",
      "jump",
      "ride",
      "sing"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "When the band started playing, the children hurried to the middle of the hall to _____. They moved happily to the music all evening.",
    "options": [
      "explore",
      "dance",
      "collect",
      "pretend"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The music teacher taught the babies and their parents a short _____. Everyone clapped their hands while singing about a little star.",
    "options": [
      "exploration",
      "playground",
      "collection",
      "nursery rhyme"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The library holds a free _____ session every Saturday morning. A volunteer reads picture books aloud using funny voices for each character.",
    "options": [
      "swimming",
      "sports",
      "storytelling",
      "bike riding"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Doctors recommend twenty minutes of _____ with young children every night. Looking at books together improves their vocabulary and attention.",
    "options": [
      "swimming",
      "reading",
      "chores",
      "sports"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The guide asked the children to _____ carefully to the safety rules before the tour. Nobody was allowed to touch the machines in the factory.",
    "options": [
      "listen",
      "ride",
      "climb",
      "dance"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Visitors to the national park can _____ the forest trails with a trained guide. They often see monkeys, birds, and rare plants along the way.",
    "options": [
      "sing",
      "listen",
      "pretend",
      "explore"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The science museum encourages hands-on _____ instead of just looking at displays. Children can touch rocks, test magnets, and build simple machines.",
    "options": [
      "nursery rhyme",
      "exploration",
      "chores",
      "picnic"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The hotel playroom has a rope wall where kids can _____ up to a small tower. Thick mats on the floor keep them safe.",
    "options": [
      "sing",
      "listen",
      "climb",
      "collect"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "At the trampoline park, children can _____ as high as they like on soft mats. Staff members watch carefully to make sure nobody gets hurt.",
    "options": [
      "jump",
      "pretend",
      "collect",
      "listen"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The city opened a new path where kids can safely _____ their bicycles along the river. Bike rentals are available near the main entrance.",
    "options": [
      "pretend",
      "listen",
      "ride",
      "sing"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "My son has taken up _____ with his friends on weekends. They wear helmets and follow the path along the river for ten kilometers.",
    "options": [
      "imagination",
      "coloring",
      "storytelling",
      "bike riding"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The school encourages every student to join at least one of its team _____. Basketball and volleyball are the most popular choices this year.",
    "options": [
      "sports",
      "imagination",
      "picnic",
      "chores"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The hotel pool is open for _____ from early morning until late at night. Children under eight must wear arm floats in the water.",
    "options": [
      "painting",
      "swimming",
      "coloring",
      "storytelling"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The new apartment complex has a _____ with slides and swings in its central garden. Parents can watch their children from the benches nearby.",
    "options": [
      "hobby",
      "imagination",
      "reading",
      "playground"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Our department is planning a _____ in the park next Friday afternoon. Everyone should bring some food, a drink, and a blanket to sit on.",
    "options": [
      "picnic",
      "role-play",
      "exploration",
      "coloring"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "My nephew loves to _____ stickers from the convenience store promotion. He has already filled half of his album this month.",
    "options": [
      "dance",
      "collect",
      "jump",
      "climb"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The museum displays a large _____ of old toys from local families. Some of the metal cars are fifty years old.",
    "options": [
      "hobby",
      "playground",
      "collection",
      "picnic"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Many parents give their children small household _____ like washing dishes or feeding pets. It teaches kids to be responsible at home.",
    "options": [
      "imagination",
      "chores",
      "exploration",
      "storytelling"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "Collecting stamps became my father's favorite _____ after he retired from the bank. He spends hours every weekend sorting them into albums.",
    "options": [
      "hobby",
      "playground",
      "picnic",
      "chores"
    ],
    "answer": 0,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "play": {
    "pos": "v.",
    "en_def": "to do things for fun, especially as a child",
    "cn_def": "玩耍"
  },
  "game": {
    "pos": "n.",
    "en_def": "an activity with rules that people play for fun",
    "cn_def": "遊戲"
  },
  "hide-and-seek": {
    "pos": "n.",
    "en_def": "a game in which one child looks for the others who are hiding",
    "cn_def": "捉迷藏"
  },
  "tag": {
    "pos": "n.",
    "en_def": "a children's game in which one player chases and touches the others",
    "cn_def": "鬼抓人"
  },
  "outdoor play": {
    "pos": "n.phr.",
    "en_def": "games and activities that children do outside",
    "cn_def": "戶外遊戲"
  },
  "imagination": {
    "pos": "n.",
    "en_def": "the ability to form new pictures and ideas in your mind",
    "cn_def": "想像力"
  },
  "imaginative": {
    "pos": "adj.",
    "en_def": "having or showing new and creative ideas",
    "cn_def": "富有想像力的"
  },
  "pretend": {
    "pos": "v.",
    "en_def": "to act as if something is true when it is not, often in play",
    "cn_def": "假裝"
  },
  "role-play": {
    "pos": "n.",
    "en_def": "an activity in which people act as different characters",
    "cn_def": "角色扮演"
  },
  "drawing": {
    "pos": "n.",
    "en_def": "a picture made with a pencil, pen, or crayon",
    "cn_def": "圖畫；素描"
  },
  "coloring": {
    "pos": "n.",
    "en_def": "the activity of adding color to pictures, often with crayons",
    "cn_def": "著色；塗色"
  },
  "painting": {
    "pos": "n.",
    "en_def": "the activity of making pictures with paint",
    "cn_def": "繪畫"
  },
  "craft": {
    "pos": "n.",
    "en_def": "something made by hand with skill, or the activity of making it",
    "cn_def": "手工藝"
  },
  "sing": {
    "pos": "v.",
    "en_def": "to make music with your voice",
    "cn_def": "唱歌"
  },
  "dance": {
    "pos": "v.",
    "en_def": "to move your body to music",
    "cn_def": "跳舞"
  },
  "nursery rhyme": {
    "pos": "n.phr.",
    "en_def": "a short traditional poem or song for young children",
    "cn_def": "童謠"
  },
  "storytelling": {
    "pos": "n.",
    "en_def": "the activity of telling or reading stories to people",
    "cn_def": "說故事"
  },
  "reading": {
    "pos": "n.",
    "en_def": "the activity of looking at and understanding written words",
    "cn_def": "閱讀"
  },
  "listen": {
    "pos": "v.",
    "en_def": "to pay attention to sounds or to what someone says",
    "cn_def": "聆聽"
  },
  "explore": {
    "pos": "v.",
    "en_def": "to travel around a place to learn about it",
    "cn_def": "探索"
  },
  "exploration": {
    "pos": "n.",
    "en_def": "the act of looking around a place or thing to discover more",
    "cn_def": "探索"
  },
  "climb": {
    "pos": "v.",
    "en_def": "to go up something using your hands and feet",
    "cn_def": "爬；攀爬"
  },
  "run": {
    "pos": "v.",
    "en_def": "to move quickly on your feet",
    "cn_def": "跑"
  },
  "jump": {
    "pos": "v.",
    "en_def": "to push yourself off the ground into the air with your legs",
    "cn_def": "跳"
  },
  "ride": {
    "pos": "v.",
    "en_def": "to sit on and control a bicycle, horse, etc.",
    "cn_def": "騎"
  },
  "bike riding": {
    "pos": "n.phr.",
    "en_def": "the activity of riding a bicycle for fun or exercise",
    "cn_def": "騎腳踏車"
  },
  "sports": {
    "pos": "n.",
    "en_def": "games or activities in which people use their bodies and often compete",
    "cn_def": "運動"
  },
  "swimming": {
    "pos": "n.",
    "en_def": "the activity of moving through water using your arms and legs",
    "cn_def": "游泳"
  },
  "playground": {
    "pos": "n.",
    "en_def": "an outdoor area with equipment for children to play on",
    "cn_def": "遊樂場"
  },
  "picnic": {
    "pos": "n.",
    "en_def": "a meal eaten outdoors, often in a park",
    "cn_def": "野餐"
  },
  "collect": {
    "pos": "v.",
    "en_def": "to get and keep things of the same type as a hobby",
    "cn_def": "收集"
  },
  "collection": {
    "pos": "n.",
    "en_def": "a group of similar things that someone has gathered",
    "cn_def": "收藏品"
  },
  "help out": {
    "pos": "v.phr.",
    "en_def": "to help someone, especially by doing a share of the work",
    "cn_def": "幫忙"
  },
  "chores": {
    "pos": "n.",
    "en_def": "small regular jobs at home, like cleaning or washing dishes",
    "cn_def": "家務；雜事"
  },
  "hobby": {
    "pos": "n.",
    "en_def": "an activity you do for fun in your free time",
    "cn_def": "嗜好"
  }
};

const EXTRA_GLOSSES = {};
