// Topic 289 Quiz Data: Plants 植物
// Source word list: https://www.examword.com/group-topic/plants — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T289 - Plants 植物",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "flower",
    "pos": "n.",
    "cn_def": "花",
    "en_def": "the colorful part of a plant that produces seeds",
    "sentence": "A: What should we put on the reception desk for the visitors arriving from Tokyo on Monday morning, since the lobby looks a little empty? B: I think a single bright {{BLANK}} in a glass vase would look elegant, and the florist across the street can deliver one early before the guests arrive at nine.",
    "cn": "A：週一早上從東京來的訪客就要到了，大廳看起來有點空，我們該在接待櫃台放些什麼？ B：我覺得在玻璃花瓶裡放一朵鮮豔的【花】會很典雅，而且對街的花店可以在客人九點抵達前一早送來。"
  },
  {
    "word": "tree",
    "pos": "n.",
    "cn_def": "樹",
    "en_def": "a tall plant with a wooden trunk and branches",
    "sentence": "A: Why did the city close the road beside our office building this morning, and how long will the delivery drivers have to take the long way around? B: A large old {{BLANK}} fell across the street during last night's storm, so workers are cutting it into pieces, and the road should reopen by late afternoon.",
    "cn": "A：市政府今天早上為什麼封閉了我們辦公大樓旁的道路？送貨司機還得繞遠路多久？ B：昨晚暴風雨時一棵高大的老【樹】倒在街上，工人正在把它鋸成小段，道路應該在傍晚前重新開放。"
  },
  {
    "word": "shrub",
    "pos": "n.",
    "cn_def": "灌木",
    "en_def": "a low plant with many woody stems, smaller than a tree",
    "sentence": "A: The new hotel entrance looks very bare, so what kind of plants would you suggest for the narrow space beside the front steps? B: A low {{BLANK}} would be perfect there, because it stays small, needs little water, and the gardener can easily trim it into a neat shape every month.",
    "cn": "A：新飯店的入口看起來很空，前面台階旁那塊窄小的空間，你建議種什麼植物？ B：種一株低矮的【灌木】會很完美，因為它長不大、不太需要水，而且園丁每個月都能輕鬆把它修剪成整齊的形狀。"
  },
  {
    "word": "grass",
    "pos": "n.",
    "cn_def": "草；草地",
    "en_def": "a common low green plant that covers lawns and fields",
    "sentence": "A: Why is the company picnic moving from the park to the indoor hall next Saturday, when everyone was looking forward to sitting outside? B: The {{BLANK}} in the park is still very wet after three days of heavy rain, and the manager worried that guests would ruin their shoes and slip while carrying food.",
    "cn": "A：大家都很期待坐在戶外，為什麼下週六的公司野餐要從公園改到室內大廳？ B：連下三天大雨後，公園裡的【草地】還是很濕，經理擔心客人會弄壞鞋子，而且端食物時會滑倒。"
  },
  {
    "word": "leaf",
    "pos": "n.",
    "cn_def": "葉子",
    "en_def": "one of the flat green parts that grow from a plant's stem",
    "sentence": "A: Did you notice that the small plant on the reception desk looks unhealthy, and do you know who is supposed to water it each week? B: Yes, every {{BLANK}} is turning yellow at the edges, so I'll ask the office assistant to move it closer to the window and give it more water on Fridays.",
    "cn": "A：你有注意到接待櫃台上的小盆栽看起來不太健康嗎？你知道每週該由誰來澆水嗎？ B：有，每一片【葉子】的邊緣都在變黃，所以我會請辦公室助理把它移到靠窗的地方，並在每週五多澆點水。"
  },
  {
    "word": "petal",
    "pos": "n.",
    "cn_def": "花瓣",
    "en_def": "one of the soft colored parts of a flower",
    "sentence": "A: The wedding planner asked about decorations for the hotel ballroom, so do you have any ideas that are both beautiful and not too expensive? B: We could place a single pink rose {{BLANK}} on every napkin beside the candles, which looks romantic in photos and costs much less than full flower arrangements.",
    "cn": "A：婚禮企劃問到飯店宴會廳的布置，你有沒有既漂亮又不太貴的點子？ B：我們可以在蠟燭旁的每條餐巾上放一片粉紅色的玫瑰【花瓣】，拍照起來很浪漫，而且比整盆插花便宜得多。"
  },
  {
    "word": "stem",
    "pos": "n.",
    "cn_def": "莖；花梗",
    "en_def": "the long thin main part of a plant that holds the leaves and flowers",
    "sentence": "A: The roses we ordered for the client dinner tonight look a bit tired already, so is there anything we can do to keep them fresh until evening? B: Cut about two centimeters off the bottom of each {{BLANK}} with sharp scissors, then put them in cool water, and they should stay fresh for several more hours.",
    "cn": "A：我們為今晚客戶晚宴訂的玫瑰已經有點沒精神了，有什麼辦法讓它們保持新鮮到晚上嗎？ B：用鋒利的剪刀把每根【花莖】底部剪掉大約兩公分，再放進涼水裡，應該就能再保持新鮮好幾個小時。"
  },
  {
    "word": "root",
    "pos": "n.",
    "cn_def": "根",
    "en_def": "the part of a plant that grows under the ground and takes in water",
    "sentence": "A: Why is the gardening team digging up the old plant near the parking garage, when it looked perfectly fine to me last week? B: Its {{BLANK}} has grown so long under the ground that it started cracking the concrete, so they are moving the plant to a larger open area behind the building.",
    "cn": "A：停車場旁那棵老植物上週看起來還好好的，園藝團隊為什麼要把它挖起來？ B：它的【根】在地底下長得太長，開始把水泥撐裂了，所以他們要把它移到大樓後面一塊較大的空地。"
  },
  {
    "word": "branch",
    "pos": "n.",
    "cn_def": "樹枝",
    "en_def": "a part of a tree that grows out from the trunk",
    "sentence": "A: Is it safe to park my car under the big tree in the visitor lot, since a strong wind is expected this evening? B: I wouldn't, because a heavy {{BLANK}} broke off and fell on a delivery van there last winter, so security now asks drivers to park on the other side.",
    "cn": "A：今晚預計會颳強風，把車停在訪客停車場那棵大樹下安全嗎？ B：我不會停那裡，因為去年冬天有一根粗重的【樹枝】斷掉砸在一輛送貨車上，所以警衛現在都請駕駛停到另一邊。"
  },
  {
    "word": "trunk",
    "pos": "n.",
    "cn_def": "樹幹",
    "en_def": "the thick main wooden stem of a tree",
    "sentence": "A: The landscape company wants to remove the oldest tree in the courtyard, but why do they think it is dangerous when it still has green leaves? B: They found that the {{BLANK}} is hollow inside near the bottom, so a strong storm could easily knock the whole tree over onto the café's outdoor seating area.",
    "cn": "A：景觀公司想移除庭院裡最老的那棵樹，但它還有綠葉，他們為什麼認為它很危險？ B：他們發現【樹幹】靠近底部的地方裡面是空心的，所以一場強烈的暴風雨就可能輕易把整棵樹吹倒在咖啡廳的戶外座位區上。"
  },
  {
    "word": "blossom",
    "pos": "n.",
    "cn_def": "（果樹的）花；花朵",
    "en_def": "the flowers on a fruit tree or bush",
    "sentence": "A: Our clients from Singapore are visiting Taipei in early spring, so where could we take them for a relaxing afternoon after the meetings? B: Yangmingshan would be lovely then, because the cherry {{BLANK}} covers the hillsides in pink, and there is a quiet tea house where we can enjoy the view together.",
    "cn": "A：我們的新加坡客戶初春要來台北，開完會後可以帶他們去哪裡度過悠閒的下午？ B：那時候的陽明山會很美，因為櫻【花】把山坡染成一片粉紅，而且那裡有一間安靜的茶館，我們可以一起欣賞風景。"
  },
  {
    "word": "bud",
    "pos": "n.",
    "cn_def": "花苞；芽",
    "en_def": "a small part of a plant that will open into a flower or leaf",
    "sentence": "A: The orchids the supplier delivered for the hotel lobby have no open flowers yet, so should we send them back and ask for new ones? B: No, each small green {{BLANK}} on the stem will open within a few days, so by the time the conference starts next week, the plants will look full and colorful.",
    "cn": "A：供應商送來放飯店大廳的蘭花還沒有開花，我們要不要退回去換新的？ B：不用，莖上每個綠色的小【花苞】幾天內就會開，所以等下週會議開始時，這些花會看起來很飽滿又繽紛。"
  },
  {
    "word": "thorn",
    "pos": "n.",
    "cn_def": "刺",
    "en_def": "a sharp pointed part on the stem of some plants",
    "sentence": "A: Why is the florist wearing thick gloves while she prepares the rose bouquets for tonight's awards dinner at the hotel? B: Each sharp {{BLANK}} on the rose stems can easily cut her fingers, so she protects her hands until she has removed all of them with a special tool.",
    "cn": "A：花藝師在準備今晚飯店頒獎晚宴的玫瑰花束時，為什麼要戴厚手套？ B：玫瑰莖上每根尖銳的【刺】都很容易割傷她的手指，所以在用特殊工具把刺全部去掉之前，她會先保護好雙手。"
  },
  {
    "word": "vine",
    "pos": "n.",
    "cn_def": "藤蔓",
    "en_def": "a plant with long thin stems that climbs up walls or other plants",
    "sentence": "A: The old brick wall outside our new café looks rather plain, so do you have any ideas to make it more attractive for customers? B: We could grow a climbing {{BLANK}} along the wall, because in a year or two it will cover the bricks with green leaves and give the patio a cozy, natural feeling.",
    "cn": "A：我們新咖啡廳外面那道舊磚牆看起來很單調，你有什麼點子能讓它更吸引客人嗎？ B：我們可以沿著牆種一株攀緣的【藤蔓】，因為一兩年後它就會用綠葉覆蓋磚牆，讓露台有溫馨自然的感覺。"
  },
  {
    "word": "cactus",
    "pos": "n.",
    "cn_def": "仙人掌",
    "en_def": "a desert plant with thick stems and sharp points that stores water",
    "sentence": "A: I travel a lot for work and I'm often away for two weeks, so what kind of plant could I keep on my office desk? B: A small {{BLANK}} would be ideal, since it stores water inside, needs sunlight more than care, and can easily survive without water while you are on business trips.",
    "cn": "A：我常因工作出差，一走就是兩個星期，辦公桌上可以放什麼植物？ B：一小盆【仙人掌】最理想，因為它會在體內儲水，比起照顧更需要陽光，你出差時它不澆水也能輕鬆存活。"
  },
  {
    "word": "fern",
    "pos": "n.",
    "cn_def": "蕨類植物",
    "en_def": "a green plant with feathery leaves and no flowers",
    "sentence": "A: The meeting room on the north side gets almost no direct sunlight, so which plant would grow well in there without much light? B: A {{BLANK}} would be a good choice, because it naturally grows on shady forest floors, likes a little humidity, and its soft green leaves will make the room feel fresh.",
    "cn": "A：北側的會議室幾乎照不到直射陽光，哪種植物在光線不多的地方也能長得好？ B：【蕨類植物】是不錯的選擇，因為它本來就長在陰涼的森林地面，喜歡一點濕氣，而且柔軟的綠葉會讓房間感覺很清新。"
  },
  {
    "word": "herb",
    "pos": "n.",
    "cn_def": "香草；草本植物",
    "en_def": "a plant whose leaves are used to add flavor to food or as medicine",
    "sentence": "A: The restaurant manager wants to reduce costs and serve fresher food, so what small change could the kitchen team make this season? B: They could grow a fresh {{BLANK}} like basil in pots on the rooftop, which saves money on deliveries and gives the chef something fragrant to add to every dish.",
    "cn": "A：餐廳經理想降低成本並供應更新鮮的食物，廚房團隊這一季可以做什麼小改變？ B：他們可以在頂樓用盆子種像羅勒這樣的新鮮【香草】，既能省下送貨的錢，也讓主廚每道菜都能加點香氣。"
  },
  {
    "word": "bush",
    "pos": "n.",
    "cn_def": "矮樹叢",
    "en_def": "a plant with many branches that is smaller than a tree",
    "sentence": "A: Where exactly should the delivery driver leave the package if nobody answers the door at the office this afternoon? B: Please ask him to place it behind the large green {{BLANK}} next to the side entrance, where it will be hidden from people walking past on the street.",
    "cn": "A：如果今天下午辦公室沒人應門，送貨司機該把包裹放在哪裡？ B：請他把包裹放在側門旁那叢綠色大【矮樹叢】後面，這樣街上經過的人就看不到。"
  },
  {
    "word": "seed",
    "pos": "n.",
    "cn_def": "種子",
    "en_def": "a small hard part of a plant from which a new plant grows",
    "sentence": "A: The company is giving gifts to every guest at the environmental fair next month, so what simple item would match our green message? B: We could hand out a small paper packet containing a sunflower {{BLANK}}, along with a card explaining how to plant it, which is cheap and easy to remember.",
    "cn": "A：公司下個月要在環保博覽會送每位來賓禮物，有什麼簡單的東西能符合我們的綠色理念？ B：我們可以發一個裝著向日葵【種子】的小紙袋，附上一張說明如何種植的卡片，既便宜又讓人容易記住。"
  },
  {
    "word": "fruit",
    "pos": "n.",
    "cn_def": "水果",
    "en_def": "the sweet part of a plant that contains seeds and can be eaten",
    "sentence": "A: The staff have been asking for healthier snacks in the break room, so what should we order instead of cookies and chips? B: Let's order a basket of fresh seasonal {{BLANK}} from the local market every Monday, because it is affordable, and apples and bananas will give everyone energy for afternoon meetings.",
    "cn": "A：員工一直希望休息室有更健康的點心，我們該訂什麼來取代餅乾和洋芋片？ B：我們每週一向當地市場訂一籃新鮮的當季【水果】吧，因為價格實惠，而且蘋果和香蕉能讓大家有精神參加下午的會議。"
  },
  {
    "word": "pollen",
    "pos": "n.",
    "cn_def": "花粉",
    "en_def": "a fine powder made by flowers that can cause sneezing",
    "sentence": "A: Why are so many employees sneezing and asking for tissues at work this week, even though nobody seems to have a cold? B: The trees around the business park are flowering right now, and the wind is carrying a lot of {{BLANK}} through the open windows, so facilities will keep them closed until next month.",
    "cn": "A：這週為什麼有那麼多員工在上班時打噴嚏、要面紙，可是好像沒人感冒？ B：商業園區周圍的樹正在開花，風把大量【花粉】從敞開的窗戶吹進來，所以總務部會把窗戶關到下個月。"
  },
  {
    "word": "evergreen",
    "pos": "adj.",
    "cn_def": "常綠的",
    "en_def": "having green leaves all year round",
    "sentence": "A: The office courtyard looks empty and brown every winter, so what kind of trees should we plant to keep it green all year? B: We should choose an {{BLANK}} tree such as a pine, because it keeps its leaves through the cold months, so visitors will always see some color outside the lobby.",
    "cn": "A：辦公室庭院每到冬天就看起來光禿禿又一片枯黃，我們該種哪種樹讓它一整年都綠意盎然？ B：我們應該選擇像松樹這樣的【常綠】樹，因為它在寒冷的月份也不落葉，所以訪客在大廳外總能看到一些顏色。"
  },
  {
    "word": "deciduous",
    "pos": "adj.",
    "cn_def": "落葉的",
    "en_def": "losing all its leaves every autumn",
    "sentence": "A: Why does the parking lot get covered with leaves every November, and who is responsible for cleaning them up before customers arrive? B: The trees along the edge are a {{BLANK}} type that drops all its leaves in autumn, so the cleaning crew sweeps the lot every morning until early December.",
    "cn": "A：停車場為什麼每年十一月都鋪滿落葉？在客人到之前該由誰負責清掃？ B：停車場邊緣的樹是秋天會掉光葉子的【落葉】樹種，所以清潔人員每天早上都會清掃，一直到十二月初。"
  },
  {
    "word": "tropical",
    "pos": "adj.",
    "cn_def": "熱帶的",
    "en_def": "from or relating to the hot, wet parts of the world",
    "sentence": "A: Why is our sales team holding the summer conference in Kenting instead of in Taipei, which is more convenient for most of our staff? B: The manager wanted a relaxing {{BLANK}} location with warm beaches and palm trees, and the resort there offered us a large discount on meeting rooms and hotel rooms.",
    "cn": "A：台北對大部分員工比較方便，為什麼我們業務團隊的夏季會議要辦在墾丁？ B：經理想要一個有溫暖海灘和棕櫚樹、能放鬆的【熱帶】地點，而且那裡的度假村給了我們會議室和客房很大的折扣。"
  },
  {
    "word": "aquatic",
    "pos": "adj.",
    "cn_def": "水生的",
    "en_def": "living or growing in water",
    "sentence": "A: The new shopping mall is building an indoor pond near the main entrance, so what will they put in it besides the fish? B: They plan to add several {{BLANK}} plants such as water lilies, which grow directly in the water and help keep it clean, so the pond will look natural and fresh.",
    "cn": "A：新購物中心正在主入口附近建一座室內池塘，除了魚之外他們還會放什麼？ B：他們打算加入幾種像睡蓮這樣的【水生】植物，它們直接長在水中，還能幫助保持水質乾淨，所以池塘看起來會自然又清新。"
  },
  {
    "word": "wild",
    "pos": "adj.",
    "cn_def": "野生的",
    "en_def": "growing naturally without being planted by people",
    "sentence": "A: The tour company wants to add a hiking trip to its weekend packages, so what could make the experience special for city visitors? B: The guides could teach them to recognize the {{BLANK}} flowers growing along the mountain path, since most visitors have never seen plants that grow naturally without anyone planting them.",
    "cn": "A：旅行社想在週末套裝行程中加入健行活動，有什麼能讓城市遊客覺得特別？ B：導遊可以教他們辨認山路沿途生長的【野】花，因為大多數遊客從沒見過沒人種植、自然生長的植物。"
  },
  {
    "word": "native",
    "pos": "adj.",
    "cn_def": "本土的；原生的",
    "en_def": "growing naturally in a particular place from the beginning",
    "sentence": "A: Why did the city choose these particular plants for the new park instead of the colorful imported flowers people usually see downtown? B: They decided to use {{BLANK}} species that have always grown in this region, because they need less water, attract local birds and insects, and are cheaper to maintain.",
    "cn": "A：市政府為什麼為新公園選了這些植物，而不是市中心常見的那些色彩繽紛的進口花卉？ B：他們決定採用一直生長在這個地區的【原生】物種，因為這些植物比較不需要水、會吸引當地的鳥類和昆蟲，而且維護成本較低。"
  },
  {
    "word": "exotic",
    "pos": "adj.",
    "cn_def": "外來的；奇異的",
    "en_def": "coming from a faraway country and unusual",
    "sentence": "A: Why is the botanical garden expecting so many visitors this weekend, and should we arrange extra buses for our company outing? B: It's opening a new greenhouse full of {{BLANK}} plants from South America and Africa, which most people here have never seen, so I'd definitely book two more buses.",
    "cn": "A：植物園這個週末為什麼預計會有那麼多遊客？我們公司出遊要不要多安排幾輛巴士？ B：它要開放一座新溫室，裡面全是來自南美和非洲的【奇異】植物，這裡大多數人都沒見過，所以我一定會再多訂兩輛巴士。"
  },
  {
    "word": "poisonous",
    "pos": "adj.",
    "cn_def": "有毒的",
    "en_def": "able to make you sick or kill you if you eat or touch it",
    "sentence": "A: The daycare center next to our office asked us about the plants in our shared garden, so what were they worried about? B: They wanted to be sure that no {{BLANK}} plant is growing near the playground, because young children sometimes put leaves or berries in their mouths and could get seriously sick.",
    "cn": "A：我們辦公室隔壁的托兒所問起共用花園裡的植物，他們在擔心什麼？ B：他們想確定遊樂場附近沒有長任何【有毒的】植物，因為小孩子有時會把葉子或漿果放進嘴裡，可能會病得很嚴重。"
  },
  {
    "word": "fragrant",
    "pos": "adj.",
    "cn_def": "芳香的",
    "en_def": "having a sweet or pleasant smell",
    "sentence": "A: The hotel guests have been complaining that the lobby smells a little like cleaning products, so how can we make it more pleasant? B: We could place some {{BLANK}} jasmine plants near the entrance and the elevators, because their sweet natural smell will cover the chemical odor and welcome guests warmly.",
    "cn": "A：飯店客人一直抱怨大廳聞起來有點像清潔劑的味道，我們要怎麼讓它更宜人？ B：我們可以在入口和電梯附近放幾盆【芳香的】茉莉，因為它們甜美的自然香氣能蓋過化學味，溫暖地迎接客人。"
  },
  {
    "word": "wither",
    "pos": "v.",
    "cn_def": "枯萎",
    "en_def": "to become dry and weak and start to die",
    "sentence": "A: I'm going on a two-week business trip to Germany next Monday, so could someone please take care of the plants on my desk? B: Sure, I'll water them every few days, because if nobody looks after them while you're away, the leaves will {{BLANK}} and turn brown in this dry air-conditioned office.",
    "cn": "A：我下週一要去德國出差兩週，可以請人幫忙照顧我桌上的植物嗎？ B：當然，我每隔幾天會幫它們澆水，因為你不在時如果沒人照顧，葉子在這間乾燥的冷氣辦公室裡會【枯萎】變成褐色。"
  },
  {
    "word": "germinate",
    "pos": "v.",
    "cn_def": "發芽",
    "en_def": "(of a seed) to start to grow",
    "sentence": "A: The research team planted the new rice seeds in the lab two weeks ago, so have they started growing yet, or is something wrong? B: Most of them have started to {{BLANK}} and show tiny green shoots, but a few in the colder corner have not changed, so the scientists are moving those trays near the heater.",
    "cn": "A：研究團隊兩週前在實驗室種下新的稻米種子，它們開始生長了嗎？還是出了什麼問題？ B：大部分已經開始【發芽】並冒出小小的綠芽，但較冷角落的幾盤沒什麼變化，所以科學家正把那些盤子移到暖氣旁。"
  },
  {
    "word": "photosynthesis",
    "pos": "n.",
    "cn_def": "光合作用",
    "en_def": "the process by which green plants use sunlight to make food",
    "sentence": "A: The science museum asked our design team to make a poster for children, so what topic about plants should it explain clearly? B: It should explain {{BLANK}}, the process in which green leaves use sunlight, water, and carbon dioxide to make food and release fresh oxygen into the air we breathe.",
    "cn": "A：科學博物館請我們設計團隊為兒童做一張海報，應該清楚說明哪個關於植物的主題？ B：應該說明【光合作用】，也就是綠葉利用陽光、水和二氧化碳製造養分，並把新鮮氧氣釋放到我們呼吸的空氣中的過程。"
  },
  {
    "word": "bloom",
    "pos": "v.",
    "cn_def": "開花；綻放",
    "en_def": "to produce flowers; to open as a flower",
    "sentence": "A: When is the best time to hold the company's spring garden party at the botanical park, since we need to book the space soon? B: Late March would be perfect, because that is when the tulips and azaleas usually {{BLANK}}, so the whole park will be full of color for the guests and photographers.",
    "cn": "A：我們得盡快預訂場地，公司春季花園派對辦在植物公園的什麼時候最好？ B：三月下旬最完美，因為那時鬱金香和杜鵑花通常會【綻放】，整座公園對來賓和攝影師來說都會色彩繽紛。"
  }
];

const MCQS = [
  {
    "q": "The receptionist places a fresh _____ in the vase every Monday. Visitors often say it makes the lobby feel warm and welcoming.",
    "options": [
      "flower",
      "thorn",
      "root",
      "trunk"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Workers planted a young _____ beside the new office tower last week. In ten years, it will provide shade for the outdoor café.",
    "options": [
      "petal",
      "pollen",
      "tree",
      "thorn"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The gardener trimmed the low _____ near the hotel entrance into a neat round shape. Guests often take photos beside it.",
    "options": [
      "pollen",
      "shrub",
      "fruit",
      "trunk"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Please do not walk on the _____ in front of the headquarters. It was just planted and needs several weeks to grow.",
    "options": [
      "petal",
      "bud",
      "thorn",
      "grass"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "A single yellow _____ fell from the plant onto the manager's keyboard. She realized the plant needed more water and sunlight.",
    "options": [
      "root",
      "trunk",
      "leaf",
      "pollen"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The bride's assistant dropped a rose _____ on every table at the reception. The soft pink color matched the napkins perfectly.",
    "options": [
      "petal",
      "trunk",
      "root",
      "thorn"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The florist cut each rose _____ at an angle before placing the flowers in water. This helps them stay fresh for longer.",
    "options": [
      "trunk",
      "pollen",
      "seed",
      "stem"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The plant's _____ had grown through the bottom of its small pot. The office manager moved it into a much larger container.",
    "options": [
      "petal",
      "root",
      "blossom",
      "pollen"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "A strong wind broke a large _____ off the oak tree in the parking lot. Fortunately, it did not hit any cars.",
    "options": [
      "branch",
      "petal",
      "seed",
      "pollen"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The old tree has a thick _____ that three people cannot reach around. It is the most famous landmark in the company courtyard.",
    "options": [
      "petal",
      "bud",
      "trunk",
      "seed"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Tourists from Europe visit Japan in April to see the cherry _____. Many hotels are fully booked during this short season.",
    "options": [
      "thorn",
      "blossom",
      "root",
      "trunk"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Each orchid has a small green _____ that will open next week. The plants should look beautiful in time for the conference.",
    "options": [
      "trunk",
      "root",
      "pollen",
      "bud"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Wear gloves when you handle these roses. A sharp _____ on the stem can easily cut your fingers.",
    "options": [
      "petal",
      "bud",
      "thorn",
      "seed"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The sales director keeps a small _____ on her desk because she travels often. It needs very little water to survive.",
    "options": [
      "cactus",
      "petal",
      "branch",
      "thorn"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The chef picks a fresh _____ such as basil from the rooftop garden. He adds it to salads and pasta dishes every evening.",
    "options": [
      "trunk",
      "thorn",
      "branch",
      "herb"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The farmer planted each _____ about two centimeters deep in the soil. After a week of rain, small green shoots appeared.",
    "options": [
      "petal",
      "seed",
      "trunk",
      "branch"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The office now provides fresh _____ such as apples and bananas in the break room. Employees say it is healthier than cookies.",
    "options": [
      "fruit",
      "pollen",
      "grass",
      "thorn"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Many workers sneeze in spring because the air is full of _____ from flowering trees. Some keep the windows closed all season.",
    "options": [
      "fruit",
      "bud",
      "pollen",
      "root"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The designer chose _____ trees for the courtyard. They keep their green leaves all through the cold winter months.",
    "options": [
      "deciduous",
      "evergreen",
      "poisonous",
      "aquatic"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The parking lot is full of leaves every November. The trees around it are _____ and drop all their leaves in autumn.",
    "options": [
      "evergreen",
      "aquatic",
      "fragrant",
      "deciduous"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Palm trees and bananas grow well in this _____ climate. The temperature rarely falls below twenty degrees, even in winter.",
    "options": [
      "deciduous",
      "poisonous",
      "tropical",
      "native"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The hiking guide pointed out several _____ flowers growing beside the mountain path. Nobody had planted them there.",
    "options": [
      "wild",
      "deciduous",
      "aquatic",
      "evergreen"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "These trees are _____ to Taiwan and have grown on the island for thousands of years. They need little extra care.",
    "options": [
      "exotic",
      "poisonous",
      "tropical",
      "native"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The botanical garden opened a greenhouse of rare _____ plants from South America. Most local visitors have never seen them before.",
    "options": [
      "native",
      "exotic",
      "ordinary",
      "familiar"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The daycare center removed every _____ plant from its garden. Young children might eat the berries and become seriously sick.",
    "options": [
      "poisonous",
      "fragrant",
      "tropical",
      "evergreen"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The hotel placed _____ jasmine near the entrance to cover the smell of cleaning products. Guests now notice a sweet scent.",
    "options": [
      "poisonous",
      "deciduous",
      "fragrant",
      "aquatic"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "If no one waters the plants during the holiday, their leaves will _____ and turn brown. Please ask someone to help.",
    "options": [
      "germinate",
      "wither",
      "bloom",
      "migrate"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The seeds need warm, moist soil to _____. In the cold lab, very few of them showed any green shoots.",
    "options": [
      "wither",
      "bloom",
      "melt",
      "germinate"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Green leaves use sunlight to make food through a process called _____. This process also releases oxygen into the air.",
    "options": [
      "pollen",
      "blossom",
      "photosynthesis",
      "evaporation"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The tulips in the business park usually _____ in late March. That is the best time to hold the spring garden party.",
    "options": [
      "bloom",
      "wither",
      "germinate",
      "melt"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "flower": {
    "pos": "n.",
    "en_def": "the colorful part of a plant that produces seeds",
    "cn_def": "花"
  },
  "tree": {
    "pos": "n.",
    "en_def": "a tall plant with a wooden trunk and branches",
    "cn_def": "樹"
  },
  "shrub": {
    "pos": "n.",
    "en_def": "a low plant with many woody stems, smaller than a tree",
    "cn_def": "灌木"
  },
  "grass": {
    "pos": "n.",
    "en_def": "a common low green plant that covers lawns and fields",
    "cn_def": "草；草地"
  },
  "leaf": {
    "pos": "n.",
    "en_def": "one of the flat green parts that grow from a plant's stem",
    "cn_def": "葉子"
  },
  "petal": {
    "pos": "n.",
    "en_def": "one of the soft colored parts of a flower",
    "cn_def": "花瓣"
  },
  "stem": {
    "pos": "n.",
    "en_def": "the long thin main part of a plant that holds the leaves and flowers",
    "cn_def": "莖；花梗"
  },
  "root": {
    "pos": "n.",
    "en_def": "the part of a plant that grows under the ground and takes in water",
    "cn_def": "根"
  },
  "branch": {
    "pos": "n.",
    "en_def": "a part of a tree that grows out from the trunk",
    "cn_def": "樹枝"
  },
  "trunk": {
    "pos": "n.",
    "en_def": "the thick main wooden stem of a tree",
    "cn_def": "樹幹"
  },
  "blossom": {
    "pos": "n.",
    "en_def": "the flowers on a fruit tree or bush",
    "cn_def": "（果樹的）花；花朵"
  },
  "bud": {
    "pos": "n.",
    "en_def": "a small part of a plant that will open into a flower or leaf",
    "cn_def": "花苞；芽"
  },
  "thorn": {
    "pos": "n.",
    "en_def": "a sharp pointed part on the stem of some plants",
    "cn_def": "刺"
  },
  "vine": {
    "pos": "n.",
    "en_def": "a plant with long thin stems that climbs up walls or other plants",
    "cn_def": "藤蔓"
  },
  "cactus": {
    "pos": "n.",
    "en_def": "a desert plant with thick stems and sharp points that stores water",
    "cn_def": "仙人掌"
  },
  "fern": {
    "pos": "n.",
    "en_def": "a green plant with feathery leaves and no flowers",
    "cn_def": "蕨類植物"
  },
  "herb": {
    "pos": "n.",
    "en_def": "a plant whose leaves are used to add flavor to food or as medicine",
    "cn_def": "香草；草本植物"
  },
  "bush": {
    "pos": "n.",
    "en_def": "a plant with many branches that is smaller than a tree",
    "cn_def": "矮樹叢"
  },
  "seed": {
    "pos": "n.",
    "en_def": "a small hard part of a plant from which a new plant grows",
    "cn_def": "種子"
  },
  "fruit": {
    "pos": "n.",
    "en_def": "the sweet part of a plant that contains seeds and can be eaten",
    "cn_def": "水果"
  },
  "pollen": {
    "pos": "n.",
    "en_def": "a fine powder made by flowers that can cause sneezing",
    "cn_def": "花粉"
  },
  "evergreen": {
    "pos": "adj.",
    "en_def": "having green leaves all year round",
    "cn_def": "常綠的"
  },
  "deciduous": {
    "pos": "adj.",
    "en_def": "losing all its leaves every autumn",
    "cn_def": "落葉的"
  },
  "tropical": {
    "pos": "adj.",
    "en_def": "from or relating to the hot, wet parts of the world",
    "cn_def": "熱帶的"
  },
  "aquatic": {
    "pos": "adj.",
    "en_def": "living or growing in water",
    "cn_def": "水生的"
  },
  "wild": {
    "pos": "adj.",
    "en_def": "growing naturally without being planted by people",
    "cn_def": "野生的"
  },
  "native": {
    "pos": "adj.",
    "en_def": "growing naturally in a particular place from the beginning",
    "cn_def": "本土的；原生的"
  },
  "exotic": {
    "pos": "adj.",
    "en_def": "coming from a faraway country and unusual",
    "cn_def": "外來的；奇異的"
  },
  "poisonous": {
    "pos": "adj.",
    "en_def": "able to make you sick or kill you if you eat or touch it",
    "cn_def": "有毒的"
  },
  "fragrant": {
    "pos": "adj.",
    "en_def": "having a sweet or pleasant smell",
    "cn_def": "芳香的"
  },
  "wither": {
    "pos": "v.",
    "en_def": "to become dry and weak and start to die",
    "cn_def": "枯萎"
  },
  "germinate": {
    "pos": "v.",
    "en_def": "(of a seed) to start to grow",
    "cn_def": "發芽"
  },
  "photosynthesis": {
    "pos": "n.",
    "en_def": "the process by which green plants use sunlight to make food",
    "cn_def": "光合作用"
  },
  "bloom": {
    "pos": "v.",
    "en_def": "to produce flowers; to open as a flower",
    "cn_def": "開花；綻放"
  }
};

const EXTRA_GLOSSES = {};
