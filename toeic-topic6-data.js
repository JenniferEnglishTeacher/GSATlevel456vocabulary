// Topic 6 Quiz Data: Ad 廣告
// Source word list: https://www.examword.com/group-topic/ad — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T06 - Ad 廣告",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "advertise",
    "pos": "v.",
    "cn_def": "做廣告；刊登廣告",
    "en_def": "to tell people about a product, service, or job in public so they will want it",
    "sentence": "A: Our new bakery opened last week, but very few customers have come in, so what do you think we should do to bring in more people from the neighborhood? B: I think we should {{BLANK}} on the local radio station and in the community newspaper, because many older residents still listen and read them every morning before work.",
    "cn": "A：我們的新麵包店上週開幕了，但很少有客人上門，你覺得我們該怎麼做才能吸引更多附近的居民？ B：我認為我們應該在地方廣播電台和社區報紙上【刊登廣告】，因為許多年長的居民每天早上上班前仍然會收聽和閱讀它們。"
  },
  {
    "word": "advertising",
    "pos": "n.",
    "cn_def": "廣告業；廣告活動",
    "en_def": "the business or activity of making and showing ads",
    "sentence": "A: Why did the marketing director ask for a much larger budget at yesterday's meeting with the finance team? B: She explained that our competitors spend twice as much on {{BLANK}} as we do, and if we don't increase our spending on television and online ads, we will lose customers to them this year.",
    "cn": "A：為什麼行銷總監在昨天和財務團隊的會議上要求大幅增加預算？ B：她解釋說，我們的競爭對手在【廣告】上的花費是我們的兩倍，如果我們不增加電視和網路廣告的支出，今年就會把客戶輸給他們。"
  },
  {
    "word": "promotion",
    "pos": "n.",
    "cn_def": "促銷；宣傳活動",
    "en_def": "an activity, such as a special price, that helps sell a product",
    "sentence": "A: Have you seen all the customers waiting outside the electronics store this morning, even before the doors opened? B: Yes, the store is running a special {{BLANK}} this weekend, so anyone who buys a new laptop gets a free printer and a two-year warranty, and many people want to take advantage of it.",
    "cn": "A：你有看到今天早上電子產品店外面等候的那些客人嗎？甚至在開門之前就在排了。 B：有啊，這家店這個週末在舉辦特別【促銷活動】，任何購買新筆電的人都能獲得一台免費印表機和兩年保固，所以很多人想好好把握。"
  },
  {
    "word": "promote",
    "pos": "v.",
    "cn_def": "推廣；促銷；宣傳",
    "en_def": "to help sell something by telling people about it",
    "sentence": "A: The company is launching a new line of healthy snacks next month, so how are we going to tell people about them? B: We plan to {{BLANK}} the snacks at gyms and sports events, where we will hand out free samples and discount coupons to customers who care about eating well.",
    "cn": "A：公司下個月要推出新的健康零食系列，我們要怎麼讓大家知道呢？ B：我們打算在健身房和運動賽事上【推廣】這些零食，在那裡發送免費試吃品和折價券給重視飲食健康的顧客。"
  },
  {
    "word": "campaign",
    "pos": "n.",
    "cn_def": "（廣告）宣傳活動",
    "en_def": "a planned series of activities to sell a product or reach a goal",
    "sentence": "A: Why is everyone in the marketing department staying late at the office every evening this week? B: They are preparing a big {{BLANK}} for our new phone, which includes TV ads, posters in train stations, and online videos, and everything has to be ready before the product goes on sale next Monday.",
    "cn": "A：為什麼行銷部的每個人這週每天晚上都在辦公室待到很晚？ B：他們正在為我們的新手機準備一個大型【宣傳活動】，包括電視廣告、火車站的海報和網路影片，而且一切都必須在產品下週一開賣前準備好。"
  },
  {
    "word": "brand",
    "pos": "n.",
    "cn_def": "品牌；商標",
    "en_def": "the name of a product made by a particular company",
    "sentence": "A: Why do so many shoppers pay more for this coffee when the supermarket's own coffee looks almost the same? B: Most people trust this {{BLANK}} because it has been popular for over fifty years, and they believe the quality is always good, so they are happy to spend a little extra money for it.",
    "cn": "A：為什麼這麼多購物者願意花更多錢買這款咖啡，而超市自有的咖啡看起來幾乎一樣？ B：大多數人信任這個【品牌】，因為它已經流行了五十多年，而且他們相信品質一直都很好，所以他們很樂意為它多花一點錢。"
  },
  {
    "word": "branding",
    "pos": "n.",
    "cn_def": "品牌形象；品牌塑造",
    "en_def": "the design, name, and image a company uses so people recognize it",
    "sentence": "A: Our small tea shop has good products, so why did the owner hire a design company to change our logo and cups? B: She thinks our {{BLANK}} looks old-fashioned, and a fresh logo, modern colors, and matching packaging will help young customers remember us and recognize our shop from across the street.",
    "cn": "A：我們的小茶店產品很好，為什麼老闆要請設計公司更換我們的標誌和杯子？ B：她認為我們的【品牌形象】看起來很過時，而新的標誌、現代的顏色和搭配的包裝能幫助年輕顧客記住我們，並且從對街就認出我們的店。"
  },
  {
    "word": "commercial",
    "pos": "n.",
    "cn_def": "（電視或廣播）廣告",
    "en_def": "an ad on television or radio",
    "sentence": "A: How did you first hear about the new sports drink that everyone in the office is talking about? B: I saw a funny thirty-second {{BLANK}} on TV during the basketball game last night, and it showed famous players drinking it after a hard practice, so I bought a bottle on my way to work.",
    "cn": "A：你最初是怎麼聽說辦公室裡大家都在談論的那款新運動飲料的？ B：我昨晚看籃球比賽時在電視上看到一支有趣的三十秒【廣告】，畫面中知名球員在辛苦練習後喝它，所以我在上班途中買了一瓶。"
  },
  {
    "word": "slogan",
    "pos": "n.",
    "cn_def": "標語；口號",
    "en_def": "a short, easy-to-remember phrase used in ads",
    "sentence": "A: The design team has finished the new poster for our airline, but do you think the words at the bottom are good enough? B: I think the {{BLANK}} is too long, because customers only look at a poster for a few seconds, so we need a short and simple phrase that people can remember easily.",
    "cn": "A：設計團隊已經完成了我們航空公司的新海報，但你覺得底部的文字夠好嗎？ B：我認為那句【標語】太長了，因為顧客只會看海報幾秒鐘，所以我們需要一句簡短又容易讓人記住的話。"
  },
  {
    "word": "headline",
    "pos": "n.",
    "cn_def": "標題；大標",
    "en_def": "the title in large letters at the top of an article or ad",
    "sentence": "A: Why did the editor ask us to rewrite the top of the advertisement for the newspaper before it goes to print tomorrow? B: She said the {{BLANK}} was not exciting enough, and since most readers only see the large words at the top of the page, they must be strong enough to make people stop and read more.",
    "cn": "A：為什麼編輯要求我們在明天付印前重寫報紙廣告的頂端部分？ B：她說那個【標題】不夠吸引人，而因為大部分讀者只會看到頁面頂端的大字，所以它們必須夠有力，才能讓人停下來繼續閱讀。"
  },
  {
    "word": "copy",
    "pos": "n.",
    "cn_def": "廣告文案；廣告文字",
    "en_def": "the written words used in an ad",
    "sentence": "A: The pictures for our new hotel brochure look beautiful, but who is going to write the text that goes next to them? B: We hired a freelance writer to prepare the {{BLANK}}, and she will describe the rooms, the pool, and the restaurant in a friendly way that makes families want to book a holiday with us.",
    "cn": "A：我們新飯店手冊的照片看起來很漂亮，但誰要撰寫旁邊的文字呢？ B：我們聘請了一位自由撰稿人來準備【廣告文案】，她會以親切的方式描述客房、游泳池和餐廳，讓家庭想要向我們預訂假期。"
  },
  {
    "word": "target",
    "pos": "v.",
    "cn_def": "以…為目標；鎖定",
    "en_def": "to aim a product or ad at a particular group of people",
    "sentence": "A: Our new video game is selling well in Japan, but why are sales so low in Europe and North America? B: The marketing team decided to {{BLANK}} teenagers in those regions with ads on social media apps, but most of our real players are adults in their thirties who rarely use those apps at all.",
    "cn": "A：我們的新電玩遊戲在日本賣得很好，但為什麼在歐洲和北美的銷量這麼低？ B：行銷團隊決定在那些地區透過社群媒體應用程式的廣告來【鎖定】青少年，但我們真正的玩家大多是三十多歲的成年人，他們很少使用那些應用程式。"
  },
  {
    "word": "audience",
    "pos": "n.",
    "cn_def": "觀眾；聽眾；受眾",
    "en_def": "the people who watch, read, or listen to something",
    "sentence": "A: Should we show our new advertisement during the late-night news or during the morning cartoons on Saturday? B: Since our product is a toy for young children, the morning time is better, because the {{BLANK}} at that hour is mostly kids and their parents, who are exactly the people we want to sell to.",
    "cn": "A：我們應該在深夜新聞時段還是週六早上的卡通時段播放我們的新廣告？ B：既然我們的產品是給幼童的玩具，早上的時段比較好，因為那個時間的【觀眾】大多是孩子和他們的父母，正是我們想要銷售的對象。"
  },
  {
    "word": "reach",
    "pos": "v.",
    "cn_def": "觸及；接觸到（受眾）",
    "en_def": "to be seen or heard by a group of people",
    "sentence": "A: Why did the company decide to put its ads on a popular music app instead of in printed magazines this year? B: The manager believes we can {{BLANK}} millions of young listeners every day through the app, while magazine sales have fallen a lot, so fewer people would see our ads in print.",
    "cn": "A：為什麼公司今年決定把廣告放在熱門音樂應用程式上，而不是印刷雜誌上？ B：經理相信透過這個應用程式，我們每天可以【觸及】數百萬年輕聽眾，而雜誌銷量已經大幅下滑，所以在紙本上看到我們廣告的人會比較少。"
  },
  {
    "word": "impression",
    "pos": "n.",
    "cn_def": "（廣告）曝光次數；印象",
    "en_def": "one time that an online ad is shown to a person",
    "sentence": "A: The report says our online banner ad was shown two million times last month, but why are the managers still unhappy? B: Each {{BLANK}} only means the ad appeared on someone's screen, so although the number looks big, very few people actually opened it or bought anything from our website.",
    "cn": "A：報告說我們的網路橫幅廣告上個月被顯示了兩百萬次，但為什麼經理們還是不滿意？ B：每一次【曝光】只代表廣告出現在某人的螢幕上，所以雖然數字看起來很大，但實際上打開它或在我們網站上購買東西的人非常少。"
  },
  {
    "word": "engagement",
    "pos": "n.",
    "cn_def": "互動；參與度",
    "en_def": "how much people react to and take part in content, such as liking or sharing",
    "sentence": "A: Our posts on social media get thousands of views, so why does the marketing manager want to change our strategy? B: She is worried about low {{BLANK}}, because people see the posts but rarely like, share, or comment on them, which means they are not really interested in our products or our company.",
    "cn": "A：我們在社群媒體上的貼文有數千次瀏覽，為什麼行銷經理想要改變我們的策略？ B：她擔心【互動】程度偏低，因為人們看到貼文，卻很少按讚、分享或留言，這表示他們對我們的產品或公司並不是真的感興趣。"
  },
  {
    "word": "click",
    "pos": "n.",
    "cn_def": "點擊",
    "en_def": "the act of pressing a mouse button or tapping a link on a screen",
    "sentence": "A: How do we know whether people are interested in the new online ad for our cooking classes? B: Every {{BLANK}} on the ad takes a visitor to our sign-up page, so the system counts how many people want more information, and so far more than five hundred people have visited the page this week.",
    "cn": "A：我們怎麼知道大家是否對我們烹飪課的新網路廣告感興趣？ B：廣告上的每一次【點擊】都會把訪客帶到我們的報名頁面，所以系統會計算有多少人想要更多資訊，到目前為止，這週已經有超過五百人造訪了該頁面。"
  },
  {
    "word": "conversion",
    "pos": "n.",
    "cn_def": "轉換（指訪客變成顧客）",
    "en_def": "the act of a visitor or viewer becoming a paying customer",
    "sentence": "A: Thousands of people visited our online shoe store after the holiday ads started, so why are sales still disappointing? B: Our {{BLANK}} rate is very low, which means most visitors look at the shoes but leave without buying, so we need to make the checkout page faster and offer free delivery to change their minds.",
    "cn": "A：假期廣告開始後，有數千人造訪我們的網路鞋店，為什麼銷量還是令人失望？ B：我們的【轉換】率非常低，這表示大部分訪客看了鞋子卻沒買就離開了，所以我們需要讓結帳頁面更快，並提供免運來改變他們的想法。"
  },
  {
    "word": "endorsement",
    "pos": "n.",
    "cn_def": "代言；背書",
    "en_def": "public support for a product by a famous person, often for money",
    "sentence": "A: Sales of our running shoes doubled in only two months, so what was the main reason for this sudden success? B: We got an {{BLANK}} from a famous Olympic runner, and after she said in interviews that she wears our shoes every day, many sports fans started trusting our products and buying them.",
    "cn": "A：我們的跑鞋銷量在短短兩個月內翻倍，這突然成功的主要原因是什麼？ B：我們獲得了一位知名奧運跑者的【代言】，在她於訪談中說她每天都穿我們的鞋之後，許多運動迷開始信任並購買我們的產品。"
  },
  {
    "word": "testimonial",
    "pos": "n.",
    "cn_def": "推薦；（顧客）見證",
    "en_def": "a statement from a customer saying a product or service is good",
    "sentence": "A: Our website explains all the features of the language software, but how can we make new visitors trust us more? B: We could add a {{BLANK}} from a happy customer, such as a nurse who passed her English test after using our program for three months, because people believe real users more than companies.",
    "cn": "A：我們的網站說明了這款語言軟體的所有功能，但我們要怎麼讓新訪客更信任我們？ B：我們可以加入一位滿意顧客的【推薦見證】，例如一位使用我們的程式三個月後就通過英文考試的護理師，因為人們比較相信真正的使用者，而不是公司。"
  },
  {
    "word": "influencer",
    "pos": "n.",
    "cn_def": "網紅；有影響力的人",
    "en_def": "a person who affects what others buy, often through social media",
    "sentence": "A: Why is our cosmetics company paying a young woman to post videos about our new lipstick on her social media account? B: She is a popular {{BLANK}} with over a million followers, and when she shows a product in her videos, many of her fans go online and buy it within a few days.",
    "cn": "A：為什麼我們的化妝品公司要付錢給一位年輕女性，請她在社群媒體帳號上發布關於我們新口紅的影片？ B：她是一位擁有超過一百萬名追蹤者的熱門【網紅】，當她在影片中展示一項產品時，她的許多粉絲會在幾天內上網購買。"
  },
  {
    "word": "placement",
    "pos": "n.",
    "cn_def": "（商品或廣告的）擺放位置；置入",
    "en_def": "the position where a product or ad is put so people will see it",
    "sentence": "A: The supermarket has agreed to sell our new cereal, but why are we paying an extra fee to the store? B: The fee is for better {{BLANK}}, so our boxes will sit at eye level near the entrance instead of on the bottom shelf, where busy shoppers might walk past without noticing them.",
    "cn": "A：超市已經同意販售我們的新穀片，但為什麼我們還要付額外的費用給店家？ B：那筆費用是為了取得更好的【陳列位置】，這樣我們的盒子就會擺在入口附近、與視線同高的地方，而不是在最底層的架子上，因為忙碌的購物者可能會走過去而沒注意到。"
  },
  {
    "word": "display",
    "pos": "n.",
    "cn_def": "陳列；展示",
    "en_def": "an arrangement of products for people to look at in a store",
    "sentence": "A: The new perfume arrives at our department store on Friday, so how should we show it to customers in the busy holiday season? B: Let's set up a large {{BLANK}} near the main entrance with bright lights, flowers, and free samples, so everyone who walks into the store will notice the perfume right away.",
    "cn": "A：新香水週五會到我們百貨公司，在繁忙的假期季節中，我們該如何展示給顧客看？ B：我們在主要入口附近布置一個大型【展示區】，搭配明亮的燈光、花卉和免費試用品，讓每個走進店裡的人都能馬上注意到這款香水。"
  },
  {
    "word": "broadcast",
    "pos": "v.",
    "cn_def": "播放；廣播",
    "en_def": "to send out a program or ad on TV or radio",
    "sentence": "A: Our company paid a lot of money for a two-minute ad, so when will people actually be able to watch it on television? B: The TV station will {{BLANK}} it during the final match of the football championship next Sunday evening, when millions of fans across the country will be sitting in front of their screens.",
    "cn": "A：我們公司為一支兩分鐘的廣告付了很多錢，那麼大家到底什麼時候能在電視上看到它？ B：電視台將在下週日晚上的足球錦標賽決賽期間【播放】它，屆時全國數百萬名球迷都會坐在螢幕前。"
  },
  {
    "word": "sponsor",
    "pos": "v.",
    "cn_def": "贊助",
    "en_def": "to pay for an event or team in return for advertising",
    "sentence": "A: Why does our bank's logo appear on the shirts of the local basketball team this season? B: Our bank decided to {{BLANK}} the team, which means we pay for their uniforms and travel costs, and in return our name is shown at every game, so thousands of local families see it each week.",
    "cn": "A：為什麼這一季我們銀行的標誌出現在本地籃球隊的球衣上？ B：我們銀行決定【贊助】這支球隊，也就是說我們支付他們的制服和交通費用，作為回報，我們的名字會在每場比賽中出現，所以每週都有數千個本地家庭看到它。"
  },
  {
    "word": "persuasive",
    "pos": "adj.",
    "cn_def": "有說服力的",
    "en_def": "able to make people believe or do something",
    "sentence": "A: Your sales presentation to the hotel group went very well, so how did you convince them to sign a three-year contract? B: I think my argument was {{BLANK}} because I showed them clear numbers proving that our cleaning service saves money, and I also shared positive comments from other hotels we work with.",
    "cn": "A：你對飯店集團的銷售簡報非常成功，你是怎麼說服他們簽下三年合約的？ B：我想我的論點很有【說服力】，因為我向他們展示了明確的數據，證明我們的清潔服務能省錢，而且我也分享了其他合作飯店的正面評價。"
  },
  {
    "word": "promotional",
    "pos": "adj.",
    "cn_def": "促銷的；宣傳的",
    "en_def": "used to advertise a product or company",
    "sentence": "A: We have a lot of extra pens, bags, and T-shirts with our company logo, so what should we do with them? B: Let's give them away at the trade fair next month as {{BLANK}} gifts, because visitors love free items, and every time they use them, they will be reminded of our company and our services.",
    "cn": "A：我們有很多印有公司標誌的多餘筆、袋子和T恤，該怎麼處理它們？ B：我們下個月在商展上把它們當作【宣傳】贈品送出去吧，因為參觀者喜歡免費物品，而且每次使用時，都會讓他們想起我們公司和我們的服務。"
  },
  {
    "word": "viral",
    "pos": "adj.",
    "cn_def": "（網路上）迅速傳播的；爆紅的",
    "en_def": "spreading very quickly to many people on the internet",
    "sentence": "A: I heard that our small restaurant suddenly became busy last week, so what happened to bring in all those new customers? B: A customer filmed our chef making noodles by hand and posted it online, and the video went {{BLANK}}, so millions of people watched it in just three days and many came to try our food.",
    "cn": "A：我聽說我們的小餐廳上週突然變得很忙，到底發生什麼事，帶來了這麼多新客人？ B：一位顧客拍下我們的主廚手工製作麵條的影片並上傳到網路上，結果那支影片【爆紅】，短短三天內就有數百萬人觀看，很多人都來品嚐我們的食物。"
  },
  {
    "word": "catchy",
    "pos": "adj.",
    "cn_def": "易記的；朗朗上口的",
    "en_def": "easy to remember and pleasant to hear",
    "sentence": "A: Why do so many people in the office keep singing the same little song while they work this week? B: It's from the new ice cream ad on the radio, and the music is so {{BLANK}} that once you hear it, you cannot stop humming it all day, which is exactly what the company wanted.",
    "cn": "A：為什麼這週辦公室裡這麼多人一邊工作一邊哼著同一首小歌？ B：那是電台新冰淇淋廣告裡的歌，旋律非常【朗朗上口】，你一聽到就會一整天停不下來地哼，這正是那家公司想要的效果。"
  },
  {
    "word": "compelling",
    "pos": "adj.",
    "cn_def": "引人入勝的；令人信服的",
    "en_def": "so interesting or strong that you pay attention or are convinced",
    "sentence": "A: Many companies made short films for the charity competition, so why did the judges choose our video as the winner? B: They said our story about the old fisherman and his daughter was very {{BLANK}}, and it made viewers feel strong emotions, so they wanted to keep watching until the very end.",
    "cn": "A：很多公司都為慈善比賽拍攝了短片，為什麼評審選擇我們的影片為冠軍？ B：他們說我們關於老漁夫和他女兒的故事非常【引人入勝】，讓觀眾產生強烈的情感，所以他們想一直看到最後。"
  },
  {
    "word": "strategically",
    "pos": "adv.",
    "cn_def": "策略性地；戰略上",
    "en_def": "in a carefully planned way to reach a goal",
    "sentence": "A: Why did the coffee chain open its new branches next to train stations and large office buildings instead of in quiet neighborhoods? B: The company placed them {{BLANK}}, because thousands of busy workers pass those places every morning, and many of them want a quick cup of coffee on their way to work.",
    "cn": "A：為什麼那家咖啡連鎖店把新分店開在火車站和大型辦公大樓旁邊，而不是安靜的住宅區？ B：公司是【策略性地】安排它們的位置，因為每天早上都有數千名忙碌的上班族經過那些地方，其中很多人在上班途中想要一杯快速取得的咖啡。"
  },
  {
    "word": "creatively",
    "pos": "adv.",
    "cn_def": "有創意地；創造性地",
    "en_def": "in a new and imaginative way",
    "sentence": "A: Our marketing budget is very small this year, so how can we compete with the big companies that spend millions on TV? B: We have to think {{BLANK}}, for example by making funny short videos with our own staff, running online contests, and working with local shops to share customers at no extra cost.",
    "cn": "A：我們今年的行銷預算很少，要怎麼和那些在電視上花數百萬的大公司競爭？ B：我們必須【有創意地】思考，例如用自己的員工拍攝有趣的短片、舉辦網路競賽，並和本地商店合作互相分享顧客，而且不需額外費用。"
  }
];

const MCQS = [
  {
    "q": "The city library needs more volunteers for its summer reading program. It plans to _____ the positions on its website and in local cafés.",
    "options": [
      "sponsor",
      "target",
      "reach",
      "advertise"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Online _____ has become cheaper than television ads for small firms. Many shop owners now spend most of their marketing budget on social media.",
    "options": [
      "slogan",
      "testimonial",
      "advertising",
      "audience"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The hotel is offering a summer _____ for local residents. Guests who book two nights before June receive a third night free.",
    "options": [
      "headline",
      "promotion",
      "audience",
      "copy"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The author will visit five bookstores next month to _____ her new novel. She will read short parts of the book and sign copies.",
    "options": [
      "promote",
      "target",
      "reach",
      "broadcast"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The city has started a three-month _____ to encourage people to recycle. Posters, radio ads, and school visits are all part of the plan.",
    "options": [
      "click",
      "campaign",
      "impression",
      "testimonial"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Many customers prefer this _____ of running shoes because the company has a long history. Its products are known for being light and comfortable.",
    "options": [
      "slogan",
      "headline",
      "brand",
      "conversion"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The startup spent a lot on _____ before its first product was released. It hired designers to create a memorable name, logo, and color scheme.",
    "options": [
      "engagement",
      "conversion",
      "audience",
      "branding"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The company paid a famous actor to appear in its new television _____. The thirty-second ad will be shown during the evening news.",
    "options": [
      "commercial",
      "slogan",
      "headline",
      "click"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The airline's new _____ is \"Fly Happy, Arrive Relaxed.\" Travelers often repeat the short phrase because it is easy to remember.",
    "options": [
      "placement",
      "conversion",
      "audience",
      "slogan"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The newspaper printed the _____ in large red letters across the top of the front page. Readers could see it from across the room.",
    "options": [
      "endorsement",
      "headline",
      "conversion",
      "click"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The writer finished the _____ for the new car advertisement this morning. The manager asked her to make the text shorter and clearer.",
    "options": [
      "copy",
      "audience",
      "placement",
      "engagement"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The new energy drink is designed for students and young workers. The company will _____ this group with ads on music and gaming apps.",
    "options": [
      "advertise",
      "broadcast",
      "target",
      "sponsor"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The speaker was nervous because the _____ in the hall was much larger than expected. More than eight hundred people came to hear her talk.",
    "options": [
      "slogan",
      "copy",
      "conversion",
      "audience"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The bakery's video was shared thousands of times online. It helped the small shop _____ customers in other cities for the first time.",
    "options": [
      "broadcast",
      "sponsor",
      "reach",
      "advertise"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The report shows that our banner ad was displayed online fifty thousand times. Each _____ is counted when the ad appears on a screen.",
    "options": [
      "testimonial",
      "impression",
      "headline",
      "copy"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The museum's posts receive many likes, comments, and shares every day. This high level of _____ shows that visitors enjoy its online content.",
    "options": [
      "engagement",
      "placement",
      "slogan",
      "copy"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Customers can open the order page with a single _____. The button is placed at the top of every page of the website.",
    "options": [
      "impression",
      "brand",
      "commercial",
      "click"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Many people visit our online shop, but few of them actually buy anything. We need to improve our _____ rate before the holiday season.",
    "options": [
      "headline",
      "slogan",
      "conversion",
      "commercial"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The tennis star signed a contract to support a new sportswear line. Her _____ is expected to increase sales among young athletes.",
    "options": [
      "placement",
      "endorsement",
      "click",
      "headline"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The hotel's website includes a _____ from a guest who stayed there last summer. She wrote that the staff were friendly and the rooms were spotless.",
    "options": [
      "testimonial",
      "commercial",
      "click",
      "conversion"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The skincare company sent free samples to a popular _____ with two million followers. She reviewed the products in a video the next day.",
    "options": [
      "audience",
      "slogan",
      "placement",
      "influencer"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The cereal company paid extra for better shelf _____ in the supermarket. Its boxes are now displayed at eye level near the entrance.",
    "options": [
      "placement",
      "endorsement",
      "conversion",
      "headline"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The bookstore created a colorful _____ of travel guides near the front door. Customers could see the books as soon as they entered.",
    "options": [
      "impression",
      "display",
      "engagement",
      "conversion"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The radio station will _____ the company's new ad every hour this weekend. Listeners across the country will hear it many times.",
    "options": [
      "target",
      "sponsor",
      "broadcast",
      "reach"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Several local businesses agreed to _____ the charity marathon this year. They will pay for the water stations and the runners' T-shirts.",
    "options": [
      "sponsor",
      "target",
      "reach",
      "broadcast"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The sales manager gave a very _____ speech at the meeting. By the end, every client agreed to try the new software.",
    "options": [
      "viral",
      "catchy",
      "promotional",
      "persuasive"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Visitors to the trade show received free _____ items such as pens and bags. Each item was printed with the company's name and website.",
    "options": [
      "persuasive",
      "compelling",
      "promotional",
      "viral"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The funny video of the office cat went _____ within hours. By the next morning, it had more than three million views worldwide.",
    "options": [
      "catchy",
      "viral",
      "persuasive",
      "promotional"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Children across the country love the cereal's short, _____ song. Many of them sing it at school long after the ad has ended.",
    "options": [
      "persuasive",
      "promotional",
      "compelling",
      "catchy"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The documentary tells a _____ story about a family that rebuilt their business after a flood. Many viewers said they could not stop watching.",
    "options": [
      "compelling",
      "catchy",
      "promotional",
      "persuasive"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "advertise": {
    "pos": "v.",
    "en_def": "to tell people about a product, service, or job in public so they will want it",
    "cn_def": "做廣告；刊登廣告"
  },
  "advertising": {
    "pos": "n.",
    "en_def": "the business or activity of making and showing ads",
    "cn_def": "廣告業；廣告活動"
  },
  "promotion": {
    "pos": "n.",
    "en_def": "an activity, such as a special price, that helps sell a product",
    "cn_def": "促銷；宣傳活動"
  },
  "promote": {
    "pos": "v.",
    "en_def": "to help sell something by telling people about it",
    "cn_def": "推廣；促銷；宣傳"
  },
  "campaign": {
    "pos": "n.",
    "en_def": "a planned series of activities to sell a product or reach a goal",
    "cn_def": "（廣告）宣傳活動"
  },
  "brand": {
    "pos": "n.",
    "en_def": "the name of a product made by a particular company",
    "cn_def": "品牌；商標"
  },
  "branding": {
    "pos": "n.",
    "en_def": "the design, name, and image a company uses so people recognize it",
    "cn_def": "品牌形象；品牌塑造"
  },
  "commercial": {
    "pos": "n.",
    "en_def": "an ad on television or radio",
    "cn_def": "（電視或廣播）廣告"
  },
  "slogan": {
    "pos": "n.",
    "en_def": "a short, easy-to-remember phrase used in ads",
    "cn_def": "標語；口號"
  },
  "headline": {
    "pos": "n.",
    "en_def": "the title in large letters at the top of an article or ad",
    "cn_def": "標題；大標"
  },
  "copy": {
    "pos": "n.",
    "en_def": "the written words used in an ad",
    "cn_def": "廣告文案；廣告文字"
  },
  "target": {
    "pos": "v.",
    "en_def": "to aim a product or ad at a particular group of people",
    "cn_def": "以…為目標；鎖定"
  },
  "audience": {
    "pos": "n.",
    "en_def": "the people who watch, read, or listen to something",
    "cn_def": "觀眾；聽眾；受眾"
  },
  "reach": {
    "pos": "v.",
    "en_def": "to be seen or heard by a group of people",
    "cn_def": "觸及；接觸到（受眾）"
  },
  "impression": {
    "pos": "n.",
    "en_def": "one time that an online ad is shown to a person",
    "cn_def": "（廣告）曝光次數；印象"
  },
  "engagement": {
    "pos": "n.",
    "en_def": "how much people react to and take part in content, such as liking or sharing",
    "cn_def": "互動；參與度"
  },
  "click": {
    "pos": "n.",
    "en_def": "the act of pressing a mouse button or tapping a link on a screen",
    "cn_def": "點擊"
  },
  "conversion": {
    "pos": "n.",
    "en_def": "the act of a visitor or viewer becoming a paying customer",
    "cn_def": "轉換（指訪客變成顧客）"
  },
  "endorsement": {
    "pos": "n.",
    "en_def": "public support for a product by a famous person, often for money",
    "cn_def": "代言；背書"
  },
  "testimonial": {
    "pos": "n.",
    "en_def": "a statement from a customer saying a product or service is good",
    "cn_def": "推薦；（顧客）見證"
  },
  "influencer": {
    "pos": "n.",
    "en_def": "a person who affects what others buy, often through social media",
    "cn_def": "網紅；有影響力的人"
  },
  "placement": {
    "pos": "n.",
    "en_def": "the position where a product or ad is put so people will see it",
    "cn_def": "（商品或廣告的）擺放位置；置入"
  },
  "display": {
    "pos": "n.",
    "en_def": "an arrangement of products for people to look at in a store",
    "cn_def": "陳列；展示"
  },
  "broadcast": {
    "pos": "v.",
    "en_def": "to send out a program or ad on TV or radio",
    "cn_def": "播放；廣播"
  },
  "sponsor": {
    "pos": "v.",
    "en_def": "to pay for an event or team in return for advertising",
    "cn_def": "贊助"
  },
  "persuasive": {
    "pos": "adj.",
    "en_def": "able to make people believe or do something",
    "cn_def": "有說服力的"
  },
  "promotional": {
    "pos": "adj.",
    "en_def": "used to advertise a product or company",
    "cn_def": "促銷的；宣傳的"
  },
  "viral": {
    "pos": "adj.",
    "en_def": "spreading very quickly to many people on the internet",
    "cn_def": "（網路上）迅速傳播的；爆紅的"
  },
  "catchy": {
    "pos": "adj.",
    "en_def": "easy to remember and pleasant to hear",
    "cn_def": "易記的；朗朗上口的"
  },
  "compelling": {
    "pos": "adj.",
    "en_def": "so interesting or strong that you pay attention or are convinced",
    "cn_def": "引人入勝的；令人信服的"
  },
  "strategically": {
    "pos": "adv.",
    "en_def": "in a carefully planned way to reach a goal",
    "cn_def": "策略性地；戰略上"
  },
  "creatively": {
    "pos": "adv.",
    "en_def": "in a new and imaginative way",
    "cn_def": "有創意地；創造性地"
  }
};

const EXTRA_GLOSSES = {};
