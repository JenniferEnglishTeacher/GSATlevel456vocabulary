// Topic 23 Quiz Data: Baking 烘焙
// Source word list: https://www.examword.com/group-topic/baking — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T23 - Baking 烘焙",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "bake",
    "pos": "v.",
    "cn_def": "烘烤；烘焙",
    "en_def": "to cook food such as bread or cake in an oven",
    "sentence": "A: Our café has been buying cakes from a big factory, but customers say they do not taste fresh, so what can we do to improve them? B: We could hire a pastry chef to {{BLANK}} cakes in our own kitchen every morning, so customers can enjoy fresh cakes and smell them as soon as they walk in.",
    "cn": "A：我們咖啡廳一直向大工廠買蛋糕，但顧客說吃起來不新鮮，我們能怎麼改善？ B：我們可以聘請一位甜點師每天早上在自己的廚房【烘烤】蛋糕，讓顧客能吃到新鮮的蛋糕，一走進來就聞得到香味。"
  },
  {
    "word": "oven",
    "pos": "n.",
    "cn_def": "烤箱",
    "en_def": "a box-shaped machine that heats and cooks food inside",
    "sentence": "A: The bakery is getting more and more orders for birthday cakes, but the bakers can only make ten cakes at a time, so how can we increase production? B: We should buy a second large {{BLANK}}, because then the bakers can cook twenty cakes at the same time and finish all the orders before noon.",
    "cn": "A：麵包店接到的生日蛋糕訂單越來越多，但烘焙師一次只能做十個，我們要怎麼提高產量？ B：我們應該再買一台大型【烤箱】，這樣烘焙師就能同時烤二十個蛋糕，在中午前完成所有訂單。"
  },
  {
    "word": "dough",
    "pos": "n.",
    "cn_def": "麵團",
    "en_def": "a thick mix of flour and water used to make bread",
    "sentence": "A: The new pizza restaurant near our office is always full at lunchtime, and people say the pizza base is soft but crispy, so what is their secret? B: The owner told me they make the {{BLANK}} by hand every night and let it rest in the fridge for twenty-four hours before they use it.",
    "cn": "A：我們辦公室附近的新披薩店午餐時總是客滿，大家都說餅皮又軟又脆，他們的秘訣是什麼？ B：老闆告訴我，他們每天晚上手工製作【麵團】，並讓它在冰箱裡靜置二十四小時後才使用。"
  },
  {
    "word": "batter",
    "pos": "n.",
    "cn_def": "麵糊",
    "en_def": "a liquid mix of flour, eggs, and milk used for cakes or pancakes",
    "sentence": "A: The breakfast shop is going to start selling pancakes next month, but the cooks are worried that they will be too slow during the morning rush, so what can they do? B: They can prepare the {{BLANK}} the night before and keep it in the fridge, so in the morning they only need to pour it onto the hot pan.",
    "cn": "A：早餐店下個月要開始賣鬆餅，但廚師擔心早上尖峰時段會做得太慢，他們能怎麼辦？ B：他們可以前一天晚上先準備好【麵糊】放在冰箱，這樣早上只要倒在熱鍋上就好。"
  },
  {
    "word": "flour",
    "pos": "n.",
    "cn_def": "麵粉",
    "en_def": "a powder made from wheat, used to make bread and cakes",
    "sentence": "A: The price of our bread has gone up twice this year, and some customers have started to complain, so why are our costs rising so fast? B: The price of {{BLANK}} has risen because of the bad wheat harvest in several countries, and it is the main ingredient in almost everything we bake.",
    "cn": "A：我們的麵包今年漲價兩次了，有些顧客開始抱怨，為什麼我們的成本漲得這麼快？ B：因為好幾個國家小麥歉收，【麵粉】的價格上漲了，而它幾乎是我們所有烘焙產品的主要原料。"
  },
  {
    "word": "yeast",
    "pos": "n.",
    "cn_def": "酵母",
    "en_def": "a substance used to make bread rise and become soft",
    "sentence": "A: The new baker's bread came out flat and hard this morning, and we had to throw away three trays of rolls, so what went wrong in the kitchen? B: He used old {{BLANK}} that had been open for months, so the dough could not grow, and we need to check the dates on everything in the storeroom.",
    "cn": "A：新烘焙師今天早上烤出來的麵包又扁又硬，我們只好丟掉三盤餐包，廚房裡出了什麼問題？ B：他用了開封好幾個月的舊【酵母】，所以麵團發不起來，我們需要檢查儲藏室裡所有東西的日期。"
  },
  {
    "word": "sugar",
    "pos": "n.",
    "cn_def": "糖",
    "en_def": "a sweet substance used in food and drinks",
    "sentence": "A: Many of our customers have asked for healthier cakes because they are trying to eat better, but they still want them to taste good, so what should we change? B: We can use less {{BLANK}} in our recipes and add fresh fruit instead, because the fruit makes the cakes sweet in a more natural way.",
    "cn": "A：很多顧客要求更健康的蛋糕，因為他們想吃得更好，但還是希望好吃，我們該改什麼？ B：我們可以在食譜中少用一點【糖】，改加新鮮水果，因為水果能讓蛋糕以更自然的方式變甜。"
  },
  {
    "word": "butter",
    "pos": "n.",
    "cn_def": "奶油",
    "en_def": "a soft yellow food made from cream",
    "sentence": "A: Our croissants are much more expensive than the ones at the supermarket, and some customers ask why they should pay more, so what should we tell them? B: Tell them we use real French {{BLANK}}, which gives our croissants their rich taste and many light, flaky layers that cheap ones do not have.",
    "cn": "A：我們的可頌比超市的貴很多，有些顧客問為什麼要多付錢，我們該怎麼告訴他們？ B：告訴他們我們用的是真正的法國【奶油】，讓我們的可頌有濃郁的風味和許多輕盈酥脆的層次，這是便宜可頌沒有的。"
  },
  {
    "word": "mix",
    "pos": "v.",
    "cn_def": "混合；攪拌",
    "en_def": "to put different things together and stir them",
    "sentence": "A: The new kitchen helper is making cookies for the first time, and she is not sure what to do after measuring all the ingredients, so can you help her? B: Tell her to {{BLANK}} the butter and sugar first until they are soft and smooth, and then slowly add the eggs and the flour.",
    "cn": "A：新來的廚房助手第一次做餅乾，她量好所有材料後不確定接下來要做什麼，你能幫她嗎？ B：告訴她先把奶油和糖【攪拌】到柔軟滑順，然後再慢慢加入蛋和麵粉。"
  },
  {
    "word": "knead",
    "pos": "v.",
    "cn_def": "揉（麵團）",
    "en_def": "to press and fold dough again and again with your hands",
    "sentence": "A: The bakery is thinking about buying a large machine for making bread dough, but it costs a lot of money, so is it really worth it? B: Yes, because our bakers spend almost two hours every morning trying to {{BLANK}} the dough by hand, and the machine can do the same job in fifteen minutes.",
    "cn": "A：麵包店考慮買一台製作麵團的大型機器，但要花很多錢，真的值得嗎？ B：值得，因為我們的烘焙師每天早上要花將近兩小時用手【揉】麵團，而機器只要十五分鐘就能做好同樣的工作。"
  },
  {
    "word": "rise",
    "pos": "v.",
    "cn_def": "（麵團）發酵膨脹",
    "en_def": "(of bread dough) to get bigger because of yeast",
    "sentence": "A: Why do the bakers come to work at four o'clock in the morning, when the shop does not open until seven thirty? B: The bread dough needs about two hours to {{BLANK}} before it goes into the oven, so they must start very early to have fresh bread ready when customers arrive.",
    "cn": "A：店裡七點半才開門，為什麼烘焙師凌晨四點就要來上班？ B：麵團進烤箱前大約需要兩個小時【發酵膨脹】，所以他們必須很早開始，才能在顧客到來時準備好新鮮麵包。"
  },
  {
    "word": "proof",
    "pos": "v.",
    "cn_def": "（使麵團）醒發；發酵",
    "en_def": "to let bread dough rest so it can grow before baking",
    "sentence": "A: Our kitchen is very cold in winter, and the bread has been coming out smaller and heavier than usual, so how can we fix this problem? B: We can buy a warm cabinet to {{BLANK}} the dough at the right temperature, so it grows properly before baking even on the coldest mornings.",
    "cn": "A：我們的廚房冬天很冷，烤出來的麵包比平常小又重，要怎麼解決這個問題？ B：我們可以買一個保溫櫃，讓麵團在適當溫度下【醒發】，這樣即使在最冷的早晨，它也能在烘烤前好好膨脹。"
  },
  {
    "word": "preheat",
    "pos": "v.",
    "cn_def": "預熱",
    "en_def": "to heat an oven to the right temperature before cooking",
    "sentence": "A: The cookies from the new baker's first tray were pale and soft in the middle, but the second tray was perfect, so why did that happen? B: He forgot to {{BLANK}} the oven before he put in the first tray, so the cookies started baking at a low temperature and did not cook evenly.",
    "cn": "A：新烘焙師第一盤餅乾顏色很淡、中間軟軟的，但第二盤卻很完美，為什麼會這樣？ B：他放第一盤之前忘了【預熱】烤箱，所以餅乾一開始是在低溫下烤，沒有烤得均勻。"
  },
  {
    "word": "pan",
    "pos": "n.",
    "cn_def": "烤盤；平底鍋",
    "en_def": "a metal container used for baking or cooking",
    "sentence": "A: Customers say our cakes sometimes break into pieces when we take them out for decorating, and we have wasted a lot of cakes this month, so what is the problem? B: We should put baking paper in each {{BLANK}} before we pour in the batter, so the cakes come out easily without sticking.",
    "cn": "A：顧客說我們的蛋糕在取出來裝飾時有時會碎掉，這個月我們浪費了很多蛋糕，問題出在哪？ B：我們應該在倒入麵糊前在每個【烤盤】裡鋪烘焙紙，這樣蛋糕就能輕鬆取出而不會沾黏。"
  },
  {
    "word": "measure",
    "pos": "v.",
    "cn_def": "測量；量",
    "en_def": "to find the exact amount or size of something",
    "sentence": "A: Our cakes taste a little different every day, and some customers have noticed it, so how can we make sure they always taste the same? B: Every baker must {{BLANK}} each ingredient with a digital scale instead of using cups or spoons, because even small differences can change the taste.",
    "cn": "A：我們的蛋糕每天吃起來都有點不一樣，有些顧客也注意到了，要怎麼確保味道始終如一？ B：每位烘焙師都必須用電子秤來【量】每一樣材料，而不是用量杯或湯匙，因為即使是小小的差異也會改變味道。"
  },
  {
    "word": "recipe",
    "pos": "n.",
    "cn_def": "食譜；配方",
    "en_def": "a set of instructions for making a type of food",
    "sentence": "A: Our pineapple cakes have been the most popular gift in the shop for twenty years, and a large company wants to buy our business, so what do they really want? B: They mainly want our secret {{BLANK}}, because it was created by the owner's grandmother, and no other bakery knows exactly how to make the filling.",
    "cn": "A：我們的鳳梨酥二十年來都是店裡最受歡迎的伴手禮，有家大公司想收購我們，他們真正想要的是什麼？ B：他們主要是想要我們的秘密【配方】，因為那是老闆的祖母創造的，沒有其他麵包店知道內餡確切的做法。"
  },
  {
    "word": "texture",
    "pos": "n.",
    "cn_def": "口感；質地",
    "en_def": "the way food feels in your mouth",
    "sentence": "A: The test group liked the taste of our new rice bread, but some people said it was a little too sticky, so what should we change? B: We can add a little more wheat flour to make the {{BLANK}} lighter and softer, and then we will ask the group to try it again next week.",
    "cn": "A：試吃小組喜歡我們新米麵包的味道，但有些人說有點太黏，我們該改什麼？ B：我們可以多加一點小麥麵粉，讓【口感】更輕盈柔軟，然後下週再請試吃小組試一次。"
  },
  {
    "word": "crust",
    "pos": "n.",
    "cn_def": "（麵包或派的）外皮",
    "en_def": "the hard outside part of bread or a pie",
    "sentence": "A: The French customer who comes in every morning said our baguettes are good, but not quite like the ones in Paris, so what is different? B: She wants a harder and crispier {{BLANK}}, so we should bake the bread a little longer at a higher temperature and add steam at the beginning.",
    "cn": "A：每天早上來的那位法國顧客說我們的法國長棍不錯，但不太像巴黎的，有什麼不一樣？ B：她想要更硬更脆的【外皮】，所以我們應該用稍高的溫度烤久一點，並在一開始加入蒸氣。"
  },
  {
    "word": "crumb",
    "pos": "n.",
    "cn_def": "麵包屑；麵包內部組織",
    "en_def": "a very small piece of bread or cake; also the soft inside of bread",
    "sentence": "A: The cleaning staff say there is a lot of mess under the tables in our café every evening, and it takes them a long time to clean, so what is causing it? B: Every small {{BLANK}} from the croissants falls on the floor, so we should serve them on larger plates and give customers more napkins.",
    "cn": "A：清潔人員說每天晚上咖啡廳桌子底下都很髒亂，要花很多時間清理，是什麼造成的？ B：可頌的每一小片【碎屑】都會掉到地上，所以我們應該用比較大的盤子盛裝，並給顧客多一點餐巾紙。"
  },
  {
    "word": "golden",
    "pos": "adj.",
    "cn_def": "金黃色的",
    "en_def": "having a warm yellow-brown color, like gold",
    "sentence": "A: How do the bakers know exactly when the egg tarts are ready to come out of the oven, because they do not use a timer? B: They watch the tops carefully, and when the pastry turns {{BLANK}} brown and the filling stops moving, they take the tray out right away.",
    "cn": "A：烘焙師沒有用計時器，他們怎麼知道蛋塔什麼時候可以出爐？ B：他們會仔細看塔的表面，當酥皮變成【金黃】褐色、內餡不再晃動時，就立刻把烤盤拿出來。"
  },
  {
    "word": "moist",
    "pos": "adj.",
    "cn_def": "濕潤的",
    "en_def": "slightly wet in a pleasant way, not dry",
    "sentence": "A: Several customers wrote online that our chocolate cake was too dry last week, and our rating dropped a little, so what should we do about it? B: We can add more butter and a little yogurt to keep the cake {{BLANK}}, and we should also store it in a sealed box instead of on the open shelf.",
    "cn": "A：上週有好幾位顧客在網路上留言說我們的巧克力蛋糕太乾，我們的評分也下降了一點，該怎麼辦？ B：我們可以多加點奶油和一些優格讓蛋糕保持【濕潤】，也應該把它存放在密封盒裡，而不是放在開放的架子上。"
  },
  {
    "word": "fluffy",
    "pos": "adj.",
    "cn_def": "鬆軟的；蓬鬆的",
    "en_def": "soft, light, and full of air",
    "sentence": "A: The Japanese pancakes at the new café are so popular that people wait in line for an hour, so what makes them so special? B: They are very tall and {{BLANK}}, because the cooks beat the egg whites until they are full of air, and the pancakes almost shake on the plate.",
    "cn": "A：新咖啡廳的日式鬆餅超受歡迎，大家要排一個小時，它們有什麼特別之處？ B：它們又高又【蓬鬆】，因為廚師把蛋白打到充滿空氣，鬆餅放在盤子上幾乎會晃動。"
  },
  {
    "word": "dense",
    "pos": "adj.",
    "cn_def": "紮實的；密實的",
    "en_def": "heavy and thick, with little air inside",
    "sentence": "A: Our new whole wheat bread is healthy, but some customers say it feels too heavy, and they do not buy it again, so how can we improve it? B: The bread is too {{BLANK}} because whole wheat flour is heavy, so we can mix in some white flour and let the dough rise a little longer.",
    "cn": "A：我們新的全麥麵包很健康，但有些顧客說感覺太重，不會再買，我們要怎麼改善？ B：因為全麥麵粉比較重，麵包太【紮實】了，所以我們可以混入一些白麵粉，並讓麵團發酵久一點。"
  },
  {
    "word": "sweet",
    "pos": "adj.",
    "cn_def": "甜的",
    "en_def": "having the taste of sugar",
    "sentence": "A: Our cakes sell very well in Japan, but the sales team in Korea says customers there think they taste too strong, so what should we change for that market? B: We can make them less {{BLANK}} for Korean customers by using half the sugar, and we can add more fresh cream and fruit instead.",
    "cn": "A：我們的蛋糕在日本賣得很好，但韓國的業務團隊說當地顧客覺得味道太重，我們該為那個市場改什麼？ B：我們可以只用一半的糖，讓蛋糕對韓國顧客來說不那麼【甜】，再改加更多鮮奶油和水果。"
  },
  {
    "word": "savory",
    "pos": "adj.",
    "cn_def": "鹹的；鹹香的",
    "en_def": "salty or spicy rather than sweet",
    "sentence": "A: Many office workers buy breakfast at our bakery, but some of them say they get tired of sweet buns every morning, so what new products could we offer? B: We could add more {{BLANK}} items, such as cheese and ham rolls or tuna sandwiches, because many people prefer salty food in the morning.",
    "cn": "A：很多上班族在我們麵包店買早餐，但有些人說每天早上吃甜麵包吃膩了，我們可以推出什麼新產品？ B：我們可以增加更多【鹹的】品項，例如起司火腿捲或鮪魚三明治，因為很多人早上比較喜歡吃鹹的。"
  },
  {
    "word": "cool",
    "pos": "v.",
    "cn_def": "冷卻；放涼",
    "en_def": "to become or make something less hot",
    "sentence": "A: The new staff member tried to put cream on the cakes as soon as they came out of the oven, and the cream melted everywhere, so what should she do next time? B: She should let the cakes {{BLANK}} on a rack for at least an hour first, because cream only stays firm on a cake that is completely cold.",
    "cn": "A：新員工在蛋糕一出爐時就想抹上奶油，結果奶油融得到處都是，她下次該怎麼做？ B：她應該先讓蛋糕在架子上【放涼】至少一小時，因為奶油只有在完全冷卻的蛋糕上才能保持定型。"
  },
  {
    "word": "decorate",
    "pos": "v.",
    "cn_def": "裝飾",
    "en_def": "to make something look nicer by adding things to it",
    "sentence": "A: A large company ordered fifty cakes for its twentieth anniversary party next Friday, and they want each cake to look special, so how much time will we need? B: We need two full days to {{BLANK}} the cakes with the company's logo, flowers made of sugar, and the words \"Happy 20th Anniversary\" on each one.",
    "cn": "A：一家大公司為下週五的二十週年派對訂了五十個蛋糕，他們希望每個蛋糕看起來都很特別，我們需要多少時間？ B：我們需要整整兩天，在每個蛋糕上用公司商標、糖做的花朵和「二十週年快樂」的字樣來【裝飾】。"
  },
  {
    "word": "icing",
    "pos": "n.",
    "cn_def": "糖霜",
    "en_def": "a sweet mix of sugar and liquid used to cover cakes",
    "sentence": "A: Children love the cupcakes at our shop, but their parents say they have too much sugar on top, so how can we make them healthier but still pretty? B: We can use a thinner layer of {{BLANK}} and add colorful fresh fruit on top, so the cupcakes still look fun but contain less sugar.",
    "cn": "A：小朋友很愛我們店裡的杯子蛋糕，但家長說上面的糖太多，我們要怎麼讓它更健康又一樣漂亮？ B：我們可以用薄一點的【糖霜】，再在上面放色彩繽紛的新鮮水果，這樣杯子蛋糕看起來還是很有趣，但含糖量比較少。"
  },
  {
    "word": "batch",
    "pos": "n.",
    "cn_def": "一批",
    "en_def": "an amount of food made at one time",
    "sentence": "A: The hotel has ordered two hundred cookies for the conference coffee break tomorrow, but our oven can only bake fifty at once, so can we finish them in time? B: Yes, each {{BLANK}} takes about fifteen minutes, so we can make all four in about one hour and still have time to pack them.",
    "cn": "A：飯店為明天的會議茶敘訂了兩百片餅乾，但我們的烤箱一次只能烤五十片，來得及做完嗎？ B：可以，每【一批】大約十五分鐘，所以四批大約一個小時就能做完，還有時間包裝。"
  },
  {
    "word": "aroma",
    "pos": "n.",
    "cn_def": "香氣；香味",
    "en_def": "a strong pleasant smell, especially of food",
    "sentence": "A: Our bakery is on a busy street, but many people walk past without coming in, so how can we attract more customers without spending a lot of money on advertising? B: We can open the front door when the bread comes out of the oven, because the warm {{BLANK}} of fresh bread often makes people stop and walk inside.",
    "cn": "A：我們麵包店在熱鬧的街上，但很多人經過卻沒進來，要怎麼在不花大錢打廣告的情況下吸引更多顧客？ B：我們可以在麵包出爐時打開前門，因為新鮮麵包溫暖的【香氣】常常會讓人停下腳步走進來。"
  }
];

const MCQS = [
  {
    "q": "The hotel kitchen staff _____ fresh bread every morning for the breakfast buffet. Guests love the warm rolls and croissants.",
    "options": [
      "knead",
      "bake",
      "proof",
      "measure"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The new _____ can bake forty loaves of bread at once. It has helped the bakery double its daily production.",
    "options": [
      "crumb",
      "icing",
      "batter",
      "oven"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The chef rolled out the pizza _____ on the table. Then she added tomato sauce and cheese on top.",
    "options": [
      "dough",
      "batter",
      "icing",
      "aroma"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Pour the pancake _____ into a hot pan. Cook each side for about two minutes until it turns brown.",
    "options": [
      "dough",
      "crust",
      "batter",
      "crumb"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The bakery uses fifty kilograms of _____ every day. Most of it is used to make bread and noodles.",
    "options": [
      "flour",
      "aroma",
      "texture",
      "batch"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Bread will not grow without _____. It makes the dough soft and full of small air bubbles.",
    "options": [
      "icing",
      "crumb",
      "batch",
      "yeast"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Many customers want drinks with less _____. The café now offers a healthier choice on its menu.",
    "options": [
      "dough",
      "sugar",
      "crust",
      "yeast"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Spread a little _____ on the warm toast. It melts quickly and gives the bread a rich taste.",
    "options": [
      "flour",
      "yeast",
      "butter",
      "batter"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Please _____ the flour and eggs slowly in a large bowl. Stop when the batter becomes smooth and thick.",
    "options": [
      "cool",
      "mix",
      "rise",
      "proof"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "You need to _____ the dough for about ten minutes. Press and fold it until it feels soft and smooth.",
    "options": [
      "cool",
      "rise",
      "decorate",
      "knead"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Leave the dough in a warm place so it can _____. It should double in size in about one hour.",
    "options": [
      "rise",
      "knead",
      "measure",
      "decorate"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Bakers often _____ the dough overnight in the fridge. This slow rest gives the bread a better flavor.",
    "options": [
      "decorate",
      "measure",
      "proof",
      "rise"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Please _____ the oven to 200 degrees before baking. The cookies will not cook evenly in a cold oven.",
    "options": [
      "knead",
      "decorate",
      "rise",
      "preheat"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Put some baking paper in the _____ before adding the batter. This stops the cake from sticking to the metal.",
    "options": [
      "pan",
      "aroma",
      "crumb",
      "texture"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Carefully _____ the ingredients with a scale. A small mistake can change the taste of the whole cake.",
    "options": [
      "rise",
      "measure",
      "cool",
      "proof"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "This _____ has been in the owner's family for three generations. Nobody outside the family knows all the steps.",
    "options": [
      "crumb",
      "icing",
      "recipe",
      "crust"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The new cookies have a light, crispy _____. Customers say they almost melt in the mouth.",
    "options": [
      "texture",
      "batch",
      "recipe",
      "oven"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The pie has a thin, crispy _____. The apple filling inside is soft, sweet, and warm.",
    "options": [
      "batter",
      "yeast",
      "aroma",
      "crust"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Please wipe every _____ off the tables after customers leave. The café must look clean for the next guests.",
    "options": [
      "recipe",
      "aroma",
      "crumb",
      "texture"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Bake the bread until the top turns _____ brown. It usually takes about thirty minutes in a hot oven.",
    "options": [
      "moist",
      "golden",
      "dense",
      "savory"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The banana cake is soft and _____. It stays fresh for three days in a closed box.",
    "options": [
      "golden",
      "savory",
      "moist",
      "dense"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The café is famous for its light and _____ pancakes. They are so soft that they shake on the plate.",
    "options": [
      "fluffy",
      "dense",
      "savory",
      "golden"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "This dark rye bread is heavy and _____. One slice is very filling and keeps you full for hours.",
    "options": [
      "fluffy",
      "dense",
      "savory",
      "golden"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Our new cake is less _____ than the old one. We cut the sugar by thirty percent.",
    "options": [
      "savory",
      "golden",
      "dense",
      "sweet"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The bakery added more _____ items to its menu. Its new cheese and bacon rolls are popular at lunchtime.",
    "options": [
      "sweet",
      "fluffy",
      "savory",
      "moist"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Let the bread _____ on a rack before you slice it. Cutting it while hot will make it sticky.",
    "options": [
      "cool",
      "preheat",
      "knead",
      "rise"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The staff will _____ the store with lights and flowers for the holidays. The work will be done on Sunday night.",
    "options": [
      "proof",
      "decorate",
      "knead",
      "measure"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The birthday cake was covered in pink _____. All of the children at the party loved the sweet, colorful top.",
    "options": [
      "crumb",
      "crust",
      "yeast",
      "icing"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The factory produces a new _____ of cookies every twenty minutes. Each one is checked before it is packed.",
    "options": [
      "aroma",
      "texture",
      "batch",
      "crumb"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The _____ of fresh coffee fills the office every morning. It helps many workers wake up and start the day.",
    "options": [
      "batch",
      "crust",
      "recipe",
      "aroma"
    ],
    "answer": 3,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "bake": {
    "pos": "v.",
    "en_def": "to cook food such as bread or cake in an oven",
    "cn_def": "烘烤；烘焙"
  },
  "oven": {
    "pos": "n.",
    "en_def": "a box-shaped machine that heats and cooks food inside",
    "cn_def": "烤箱"
  },
  "dough": {
    "pos": "n.",
    "en_def": "a thick mix of flour and water used to make bread",
    "cn_def": "麵團"
  },
  "batter": {
    "pos": "n.",
    "en_def": "a liquid mix of flour, eggs, and milk used for cakes or pancakes",
    "cn_def": "麵糊"
  },
  "flour": {
    "pos": "n.",
    "en_def": "a powder made from wheat, used to make bread and cakes",
    "cn_def": "麵粉"
  },
  "yeast": {
    "pos": "n.",
    "en_def": "a substance used to make bread rise and become soft",
    "cn_def": "酵母"
  },
  "sugar": {
    "pos": "n.",
    "en_def": "a sweet substance used in food and drinks",
    "cn_def": "糖"
  },
  "butter": {
    "pos": "n.",
    "en_def": "a soft yellow food made from cream",
    "cn_def": "奶油"
  },
  "mix": {
    "pos": "v.",
    "en_def": "to put different things together and stir them",
    "cn_def": "混合；攪拌"
  },
  "knead": {
    "pos": "v.",
    "en_def": "to press and fold dough again and again with your hands",
    "cn_def": "揉（麵團）"
  },
  "rise": {
    "pos": "v.",
    "en_def": "(of bread dough) to get bigger because of yeast",
    "cn_def": "（麵團）發酵膨脹"
  },
  "proof": {
    "pos": "v.",
    "en_def": "to let bread dough rest so it can grow before baking",
    "cn_def": "（使麵團）醒發；發酵"
  },
  "preheat": {
    "pos": "v.",
    "en_def": "to heat an oven to the right temperature before cooking",
    "cn_def": "預熱"
  },
  "pan": {
    "pos": "n.",
    "en_def": "a metal container used for baking or cooking",
    "cn_def": "烤盤；平底鍋"
  },
  "measure": {
    "pos": "v.",
    "en_def": "to find the exact amount or size of something",
    "cn_def": "測量；量"
  },
  "recipe": {
    "pos": "n.",
    "en_def": "a set of instructions for making a type of food",
    "cn_def": "食譜；配方"
  },
  "texture": {
    "pos": "n.",
    "en_def": "the way food feels in your mouth",
    "cn_def": "口感；質地"
  },
  "crust": {
    "pos": "n.",
    "en_def": "the hard outside part of bread or a pie",
    "cn_def": "（麵包或派的）外皮"
  },
  "crumb": {
    "pos": "n.",
    "en_def": "a very small piece of bread or cake; also the soft inside of bread",
    "cn_def": "麵包屑；麵包內部組織"
  },
  "golden": {
    "pos": "adj.",
    "en_def": "having a warm yellow-brown color, like gold",
    "cn_def": "金黃色的"
  },
  "moist": {
    "pos": "adj.",
    "en_def": "slightly wet in a pleasant way, not dry",
    "cn_def": "濕潤的"
  },
  "fluffy": {
    "pos": "adj.",
    "en_def": "soft, light, and full of air",
    "cn_def": "鬆軟的；蓬鬆的"
  },
  "dense": {
    "pos": "adj.",
    "en_def": "heavy and thick, with little air inside",
    "cn_def": "紮實的；密實的"
  },
  "sweet": {
    "pos": "adj.",
    "en_def": "having the taste of sugar",
    "cn_def": "甜的"
  },
  "savory": {
    "pos": "adj.",
    "en_def": "salty or spicy rather than sweet",
    "cn_def": "鹹的；鹹香的"
  },
  "cool": {
    "pos": "v.",
    "en_def": "to become or make something less hot",
    "cn_def": "冷卻；放涼"
  },
  "decorate": {
    "pos": "v.",
    "en_def": "to make something look nicer by adding things to it",
    "cn_def": "裝飾"
  },
  "icing": {
    "pos": "n.",
    "en_def": "a sweet mix of sugar and liquid used to cover cakes",
    "cn_def": "糖霜"
  },
  "batch": {
    "pos": "n.",
    "en_def": "an amount of food made at one time",
    "cn_def": "一批"
  },
  "aroma": {
    "pos": "n.",
    "en_def": "a strong pleasant smell, especially of food",
    "cn_def": "香氣；香味"
  }
};

const EXTRA_GLOSSES = {};
