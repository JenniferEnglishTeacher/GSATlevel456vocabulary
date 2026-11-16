// Topic 223 Quiz Data: Living 生活；居住
// Source word list: https://www.examword.com/group-topic/living — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T223 - Living 生活；居住",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "district",
    "pos": "n.",
    "cn_def": "地區；區域",
    "en_def": "an area of a city or country",
    "sentence": "A: Our company is opening a new branch office next spring, so which part of the city do you think would be best for the staff who will move there? B: I'd recommend the business {{BLANK}} near the central station, because it has good restaurants, safe streets, and several apartment buildings within walking distance.",
    "cn": "A：我們公司明年春天要開新的分公司，你覺得城市的哪個地方最適合要搬過去的員工？ B：我會推薦中央車站附近的商業【區】，因為那裡有好餐廳、安全的街道，而且步行距離內就有好幾棟公寓大樓。"
  },
  {
    "word": "affordable",
    "pos": "adj.",
    "cn_def": "負擔得起的；價格合理的",
    "en_def": "not too expensive; cheap enough for most people",
    "sentence": "A: Many of our young employees say the rent near the office takes almost half of their monthly salary, so is the company planning to help them in any way? B: Yes, the HR team is working with a local builder to offer more {{BLANK}} apartments, and the first ones should be ready by next summer.",
    "cn": "A：我們很多年輕員工說辦公室附近的房租幾乎占了他們月薪的一半，公司有打算用什麼方式幫助他們嗎？ B：有的，人資團隊正和當地建商合作，提供更多【價格合理的】公寓，第一批應該明年夏天就能完工。"
  },
  {
    "word": "incredible",
    "pos": "adj.",
    "cn_def": "令人難以置信的；極好的",
    "en_def": "very surprising or very good; hard to believe",
    "sentence": "A: Did you get a chance to see the view from the new apartment that the company rented for visiting clients on the twentieth floor last week? B: Yes, I visited it on Friday evening, and the view of the river and the city lights was {{BLANK}}, so I'm sure our guests will love staying there.",
    "cn": "A：你上週有機會去看公司為來訪客戶租的那間二十樓新公寓的景觀嗎？ B：有，我週五晚上去看過了，河景和城市燈光真是【令人驚豔】，所以我確定我們的客人會很喜歡住在那裡。"
  },
  {
    "word": "skyrocket",
    "pos": "v.",
    "cn_def": "（價格等）飛漲；急升",
    "en_def": "to rise very quickly to a very high level",
    "sentence": "A: Why did the city council suddenly decide to build so many new public apartments in the eastern part of town this year? B: Because housing prices started to {{BLANK}} after the new subway line opened, and many families with ordinary incomes could no longer afford to rent or buy a home there.",
    "cn": "A：為什麼市議會今年突然決定在城東蓋這麼多新的公共住宅？ B：因為新的捷運線開通後房價開始【飛漲】，很多一般收入的家庭再也租不起或買不起那裡的房子了。"
  },
  {
    "word": "studio",
    "pos": "n.",
    "cn_def": "套房；單間公寓",
    "en_def": "a small apartment with one main room for living and sleeping",
    "sentence": "A: I'm moving to Taipei next month for my new job at the bank, but I live alone and don't need much space, so what kind of place should I look for? B: A {{BLANK}} near an MRT station would be perfect for you, since it's cheaper, easy to clean, and still has a small kitchen and bathroom.",
    "cn": "A：我下個月要搬到台北去銀行上新工作，不過我一個人住，不需要太大的空間，那我該找什麼樣的住處？ B：捷運站附近的【套房】對你來說最理想，因為比較便宜、容易打掃，而且還是有小廚房和浴室。"
  },
  {
    "word": "tiny",
    "pos": "adj.",
    "cn_def": "極小的",
    "en_def": "very small",
    "sentence": "A: How was the hotel room that the travel agency booked for you during the sales conference in Tokyo last week? B: It was clean and the staff were very polite, but the room was so {{BLANK}} that I could barely open my suitcase, so next time I'll ask for a larger one.",
    "cn": "A：上週你在東京參加業務會議時，旅行社幫你訂的飯店房間怎麼樣？ B：房間很乾淨，員工也很有禮貌，但房間【小】到我幾乎打不開行李箱，所以下次我會要求大一點的房間。"
  },
  {
    "word": "neat",
    "pos": "adj.",
    "cn_def": "整潔的；整齊的",
    "en_def": "clean and well organized",
    "sentence": "A: The landlord is bringing two possible new tenants to see the apartment tomorrow afternoon, so is there anything we should do before they arrive? B: We should keep the living room and kitchen {{BLANK}} by putting away the dishes and the piles of magazines, because a tidy home always makes a better first impression on visitors.",
    "cn": "A：房東明天下午要帶兩位可能的新房客來看公寓，在他們到之前我們有什麼該做的嗎？ B：我們應該把碗盤和成堆的雜誌收好，讓客廳和廚房保持【整潔】，因為整齊的家總是會給訪客比較好的第一印象。"
  },
  {
    "word": "shelter",
    "pos": "n.",
    "cn_def": "收容所；避難所",
    "en_def": "a place that protects people from bad weather or danger, or gives them a place to live",
    "sentence": "A: The typhoon is expected to hit the coast tonight, so where can the families who live in the old wooden houses near the beach stay safely? B: The city has opened the school gym as an emergency {{BLANK}}, and volunteers are already preparing blankets, bottled water, and hot meals for everyone who needs a place.",
    "cn": "A：颱風預計今晚會侵襲沿岸，那住在海邊老舊木屋的家庭可以在哪裡安全地待著？ B：市政府已經把學校體育館開放為緊急【避難所】，志工們已經在為所有需要地方住的人準備毯子、瓶裝水和熱食了。"
  },
  {
    "word": "outskirts",
    "pos": "n.",
    "cn_def": "郊區；市郊",
    "en_def": "the outer parts of a town or city",
    "sentence": "A: Why did your family decide to sell your apartment downtown and buy a house so far away from your office last year? B: We moved to the {{BLANK}} of the city because the houses there are bigger and cheaper, and our children can play outside in the park without worrying about heavy traffic.",
    "cn": "A：為什麼你們家去年決定賣掉市中心的公寓，買一棟離你辦公室這麼遠的房子？ B：我們搬到城市的【郊區】是因為那裡的房子比較大也比較便宜，而且孩子們可以在公園外面玩，不用擔心交通繁忙。"
  },
  {
    "word": "detached house",
    "pos": "n.phr.",
    "cn_def": "獨棟房屋",
    "en_def": "a house that stands alone and is not joined to another house",
    "sentence": "A: Since your new job lets you work from home three days a week, are you still planning to rent an apartment in the city center? B: Not anymore, we'd rather buy a {{BLANK}} in a quiet suburb, so we can have our own garden and never hear our neighbors' televisions through the walls again.",
    "cn": "A：既然你的新工作讓你一週可以在家工作三天，你還打算在市中心租公寓嗎？ B：不打算了，我們寧可在安靜的郊區買一棟【獨棟房屋】，這樣就能有自己的花園，而且再也不會隔著牆聽到鄰居的電視聲了。"
  },
  {
    "word": "two-storey",
    "pos": "adj.",
    "cn_def": "兩層樓的",
    "en_def": "having two floors",
    "sentence": "A: The real estate agent sent me photos of several homes for sale near the new science park, but which one do you think is best for a family with three children? B: I like the {{BLANK}} house on Maple Road, because the bedrooms are upstairs and the kitchen and living room are downstairs, so everyone has enough space.",
    "cn": "A：房仲寄給我好幾間新科學園區附近待售房屋的照片，你覺得哪一間最適合有三個孩子的家庭？ B：我喜歡楓樹路上那棟【兩層樓的】房子，因為臥室在樓上，廚房和客廳在樓下，所以每個人都有足夠的空間。"
  },
  {
    "word": "skyscraper",
    "pos": "n.",
    "cn_def": "摩天大樓",
    "en_def": "a very tall modern building in a city",
    "sentence": "A: Our sales team will be working in the new office building next to Taipei Main Station, so do you know how tall it actually is? B: It's a sixty-floor {{BLANK}}, and our office will be on the forty-second floor, so we'll have an amazing view of the mountains on clear days.",
    "cn": "A：我們的業務團隊將在台北車站旁的新辦公大樓工作，你知道那棟樓到底有多高嗎？ B：那是一棟六十層的【摩天大樓】，我們的辦公室會在四十二樓，所以天氣晴朗時我們能看到很棒的山景。"
  },
  {
    "word": "lawn",
    "pos": "n.",
    "cn_def": "草坪",
    "en_def": "an area of short grass around a house or building",
    "sentence": "A: The new tenants in the house next door asked me whether the rent includes garden service, so do you know who usually takes care of the grass in front? B: The landlord hires a gardener who comes every second Saturday to cut the {{BLANK}} and water the flowers, so the tenants don't have to do it themselves.",
    "cn": "A：隔壁房子的新房客問我租金有沒有包含花園維護，你知道前面的草通常是誰在照顧嗎？ B：房東請了一位園丁，每隔一週的星期六來修剪【草坪】和澆花，所以房客不必自己動手。"
  },
  {
    "word": "attractive",
    "pos": "adj.",
    "cn_def": "吸引人的；有吸引力的",
    "en_def": "pleasant to look at or interesting enough to make people want it",
    "sentence": "A: The new apartments near the harbor are a bit more expensive than the older ones, so why are so many young professionals signing contracts there? B: The location is very {{BLANK}} to them, because there's a fast ferry to the business district, a large gym in the building, and plenty of cafés along the water.",
    "cn": "A：港口附近的新公寓比舊公寓貴一些，為什麼這麼多年輕上班族都在那裡簽約？ B：那個地點對他們很【有吸引力】，因為有快速渡輪到商業區，大樓裡有大型健身房，而且水邊有很多咖啡館。"
  },
  {
    "word": "radius",
    "pos": "n.",
    "cn_def": "半徑；範圍",
    "en_def": "the distance from a center point in every direction",
    "sentence": "A: When you were looking for a new home after you started working at the hospital, what was the most important thing you considered? B: I only looked at apartments within a five-kilometer {{BLANK}} of the hospital, because I often work night shifts and wanted to get home quickly and safely after work.",
    "cn": "A：你開始在醫院工作後找新住處時，你最重視的是什麼？ B：我只看醫院方圓五公里【範圍】內的公寓，因為我常上夜班，想在下班後能快速又安全地回到家。"
  },
  {
    "word": "beloved",
    "pos": "adj.",
    "cn_def": "深受喜愛的；心愛的",
    "en_def": "loved very much by many people",
    "sentence": "A: I heard the old bakery on the corner of our street is going to close after forty years, so why are so many neighbors upset about it? B: It's a {{BLANK}} part of the neighborhood, because the owner always remembers everyone's name, and many families have bought their birthday cakes there for three generations.",
    "cn": "A：我聽說我們街角那家老麵包店開了四十年要關門了，為什麼那麼多鄰居為此難過？ B：它是社區裡【深受喜愛的】一部分，因為老闆總是記得每個人的名字，而且很多家庭三代都在那裡買生日蛋糕。"
  },
  {
    "word": "facility",
    "pos": "n.",
    "cn_def": "設施",
    "en_def": "a building, room, or piece of equipment provided for a particular use",
    "sentence": "A: The apartment complex you're thinking about renting seems expensive, so what do residents actually get for the extra monthly fee? B: Residents can use every {{BLANK}} in the building, including a swimming pool, a gym, a laundry room, and a meeting room that people who work from home can book for free.",
    "cn": "A：你在考慮租的那個公寓社區看起來很貴，住戶多付的每月費用到底能得到什麼？ B：住戶可以使用大樓裡的每一項【設施】，包括游泳池、健身房、洗衣間，還有一間在家工作的人可以免費預約的會議室。"
  },
  {
    "word": "feature",
    "pos": "n.",
    "cn_def": "特色；特點",
    "en_def": "an important or interesting part of something",
    "sentence": "A: The developer wants us to write an online advertisement for the new apartments, so what should we mention first to catch people's attention? B: The best {{BLANK}} of these apartments is the large balcony with a view of the mountains, so we should put a photo of it at the top of the page.",
    "cn": "A：建商要我們為新公寓寫一則網路廣告，我們應該先提什麼來吸引大家的注意？ B：這些公寓最好的【特色】是能看到山景的大陽台，所以我們應該把它的照片放在網頁最上方。"
  },
  {
    "word": "fountain",
    "pos": "n.",
    "cn_def": "噴泉",
    "en_def": "a structure that pushes water up into the air for decoration",
    "sentence": "A: The city has just finished repairing the square in front of the train station, so what has changed there since the summer? B: They built a large {{BLANK}} in the middle of the square, and now in the evenings families sit around it while the water shoots up and changes color with the music.",
    "cn": "A：市政府剛修好火車站前的廣場，從夏天到現在那裡有什麼改變？ B：他們在廣場中央蓋了一座大【噴泉】，現在到了傍晚，家家戶戶都坐在旁邊，看著水柱隨著音樂噴起並變換顏色。"
  },
  {
    "word": "contrary",
    "pos": "adj.",
    "cn_def": "相反的",
    "en_def": "completely different or opposite",
    "sentence": "A: My manager believes that living in the city center is always more expensive than living in the suburbs, so do you agree with her? B: The newest housing report shows {{BLANK}} results, because people in the suburbs often spend so much on gas and parking that their total monthly costs are actually higher.",
    "cn": "A：我經理認為住市中心一定比住郊區貴，你同意她的看法嗎？ B：最新的住房報告顯示了【相反的】結果，因為郊區居民常常花很多錢在油錢和停車上，結果每月總開銷其實更高。"
  },
  {
    "word": "frightening",
    "pos": "adj.",
    "cn_def": "令人害怕的",
    "en_def": "making you feel afraid",
    "sentence": "A: Why did you decide to move out of that cheap apartment near the old market after only three months? B: Walking home through the dark, empty alley after my late shifts was really {{BLANK}}, especially after a neighbor told me that someone had tried to break into her car there.",
    "cn": "A：為什麼你只住了三個月就決定搬離舊市場附近那間便宜的公寓？ B：上完晚班後走過那條又暗又空的小巷回家真的很【可怕】，尤其是有位鄰居告訴我有人曾在那裡試圖撬她的車之後。"
  },
  {
    "word": "unhygienic",
    "pos": "adj.",
    "cn_def": "不衛生的",
    "en_def": "dirty and likely to cause disease",
    "sentence": "A: The health inspector visited the staff dormitory yesterday afternoon, so what did she say about the shared kitchen on the second floor? B: She said it was {{BLANK}} because food had been left out for days and the trash wasn't emptied, so the company must hire a cleaning service before next week.",
    "cn": "A：衛生稽查員昨天下午來視察員工宿舍，她對二樓的共用廚房怎麼說？ B：她說那裡很【不衛生】，因為食物放了好幾天沒收，垃圾也沒倒，所以公司下週前必須請清潔公司。"
  },
  {
    "word": "convenient",
    "pos": "adj.",
    "cn_def": "方便的；便利的",
    "en_def": "easy to use or reach; useful because it saves time",
    "sentence": "A: You used to drive forty minutes to work every day, so how do you feel about your new apartment downtown? B: It's very {{BLANK}}, since the office is only a ten-minute walk away, and there's a supermarket, a post office, and a bus stop right outside my building.",
    "cn": "A：你以前每天開四十分鐘的車上班，你覺得市中心的新公寓怎麼樣？ B：非常【方便】，因為辦公室走路只要十分鐘，而且我住的大樓外面就有超市、郵局和公車站。"
  },
  {
    "word": "sufficient",
    "pos": "adj.",
    "cn_def": "足夠的；充分的",
    "en_def": "enough for a particular purpose",
    "sentence": "A: The bank has asked for more documents before it approves our home loan, so what do you think is missing from our application? B: They want proof that we have {{BLANK}} income to pay the monthly payments, so we need to send our last six months of salary statements by Friday.",
    "cn": "A：銀行在核准我們的房貸前要求更多文件，你覺得我們的申請少了什麼？ B：他們要證明我們有【足夠的】收入支付每月還款，所以我們得在週五前寄出最近六個月的薪資單。"
  },
  {
    "word": "intriguing",
    "pos": "adj.",
    "cn_def": "引人好奇的；有趣的",
    "en_def": "very interesting because it is unusual or mysterious",
    "sentence": "A: Have you read the article in this morning's newspaper about the young architects who are turning old shipping containers into homes? B: Yes, I found it really {{BLANK}}, because they showed how a few containers can become a bright, comfortable house with solar panels for less than half the normal price.",
    "cn": "A：你看過今天早報那篇關於年輕建築師把舊貨櫃改造成住家的文章嗎？ B：看過，我覺得非常【引人入勝】，因為他們展示了幾個貨櫃如何以不到一般價格一半的花費，變成有太陽能板、明亮舒適的房子。"
  },
  {
    "word": "move out",
    "pos": "v.phr.",
    "cn_def": "搬出去",
    "en_def": "to leave the home where you live and go to live somewhere else",
    "sentence": "A: Your roommate told me he's starting a new job in Kaohsiung next month, so what will you do about the second bedroom in your apartment? B: Since he plans to {{BLANK}} at the end of this month, I've already posted an online advertisement to find someone else to share the rent with me.",
    "cn": "A：你室友告訴我他下個月要去高雄開始新工作，那你公寓的第二間臥室怎麼辦？ B：既然他打算這個月底【搬出去】，我已經在網路上登廣告，要找別人跟我分攤房租了。"
  },
  {
    "word": "amiable",
    "pos": "adj.",
    "cn_def": "和藹可親的；友善的",
    "en_def": "friendly and pleasant",
    "sentence": "A: You've lived in your new building for only two weeks, so how are you getting along with the people on your floor? B: My neighbors are very {{BLANK}}, because the couple across the hall brought me homemade dumplings on my first night and even showed me where to put the recycling.",
    "cn": "A：你搬進新大樓才兩週，你和同層樓的人相處得怎麼樣？ B：我的鄰居都非常【友善】，對門那對夫妻在我搬來第一晚就帶了自製水餃給我，甚至告訴我資源回收要放在哪裡。"
  },
  {
    "word": "cooperative",
    "pos": "adj.",
    "cn_def": "合作的；樂於配合的",
    "en_def": "willing to help and work with other people",
    "sentence": "A: The building manager needs to shut off the water for repairs on Saturday morning, so do you think the residents will complain about it? B: Most residents have been very {{BLANK}} in the past, so if we post a notice in the elevator a week early, I'm sure they'll plan around it.",
    "cn": "A：大樓管理員週六早上需要停水維修，你覺得住戶會抱怨嗎？ B：大部分住戶過去都很【配合】，所以如果我們提早一週在電梯貼公告，我相信他們會事先做好安排。"
  },
  {
    "word": "harmony",
    "pos": "n.",
    "cn_def": "和睦；和諧",
    "en_def": "a situation in which people live or work together peacefully",
    "sentence": "A: Your apartment building has residents from so many different countries, so how does the management committee make sure everyone gets along? B: They hold a dinner party in the lobby every month, and this helps people of all ages and cultures live in {{BLANK}} because neighbors get to know each other.",
    "cn": "A：你住的公寓大樓有來自這麼多不同國家的住戶，管委會怎麼確保大家都能和睦相處？ B：他們每個月在大廳舉辦一次晚餐聚會，這幫助了各個年齡和文化的人【和睦】生活，因為鄰居們能夠互相認識。"
  },
  {
    "word": "dull",
    "pos": "adj.",
    "cn_def": "單調的；無聊的",
    "en_def": "boring and not interesting",
    "sentence": "A: You moved to that small farming town for a quieter life last year, so are you still happy living there now? B: Honestly, life there became a bit {{BLANK}} after a few months, because there's no cinema or shopping mall, so on weekends I usually take the train back to the city.",
    "cn": "A：你去年為了過比較安靜的生活搬到那個小農業鎮，你現在住在那裡還開心嗎？ B：說實話，幾個月後那裡的生活變得有點【無聊】，因為沒有電影院也沒有購物中心，所以週末我通常搭火車回城裡。"
  },
  {
    "word": "suitable",
    "pos": "adj.",
    "cn_def": "適合的",
    "en_def": "right or acceptable for a particular person or purpose",
    "sentence": "A: My parents are getting older and find it hard to climb the stairs in their old house, so what kind of home should we look for? B: An apartment with an elevator would be more {{BLANK}} for them, especially one on the ground floor near a clinic and a park where they can walk every morning.",
    "cn": "A：我爸媽年紀漸長，覺得爬老房子的樓梯很吃力，我們該找什麼樣的住處？ B：有電梯的公寓會比較【適合】他們，尤其是位在一樓、靠近診所和每天早上可以散步的公園的那種。"
  },
  {
    "word": "independently",
    "pos": "adv.",
    "cn_def": "獨立地；自主地",
    "en_def": "without help or control from other people",
    "sentence": "A: Your daughter has just finished university and found a job in another city, so is she still living with you and your husband? B: No, she wanted to learn to live {{BLANK}}, so she rented a small apartment near her office and now pays her own bills and cooks her own meals.",
    "cn": "A：你女兒剛大學畢業，在別的城市找到工作，她還跟你和你先生住在一起嗎？ B：沒有，她想學著【獨立】生活，所以在辦公室附近租了一間小公寓，現在自己付帳單、自己煮飯。"
  },
  {
    "word": "mature",
    "pos": "adj.",
    "cn_def": "成熟的",
    "en_def": "behaving in a sensible, adult way",
    "sentence": "A: The landlord seemed worried about renting the apartment to a twenty-year-old student, so why did he finally agree to sign the contract? B: After meeting her, he said she was very {{BLANK}} for her age, because she had a part-time job, a clear budget, and a letter from her former landlord.",
    "cn": "A：房東似乎擔心把公寓租給一個二十歲的學生，為什麼他最後還是同意簽約？ B：見過她之後，他說她以她的年紀來說非常【成熟】，因為她有兼職工作、清楚的預算，還有前任房東寫的推薦信。"
  },
  {
    "word": "sibling",
    "pos": "n.",
    "cn_def": "兄弟姊妹",
    "en_def": "a brother or sister",
    "sentence": "A: You mentioned that you're sharing a large apartment near the university now, so who are you living with this year? B: I'm living with my younger {{BLANK}}, because my brother just started his first year at the same university, and our parents thought sharing a place would save us both money.",
    "cn": "A：你提過你現在跟人合住在大學附近的一間大公寓，你今年跟誰住？ B：我跟我比較小的【手足】住，因為我弟弟剛在同一所大學讀一年級，爸媽覺得我們合住可以幫兩個人都省錢。"
  },
  {
    "word": "homebody",
    "pos": "n.",
    "cn_def": "喜歡待在家的人；宅男宅女",
    "en_def": "a person who likes to stay at home rather than go out",
    "sentence": "A: Our team is going to a karaoke bar after the project celebration on Friday night, so do you think Kevin from accounting will join us? B: Probably not, he's a real {{BLANK}} who prefers cooking dinner, reading, and watching movies in his apartment instead of going out late with groups of people.",
    "cn": "A：我們團隊週五晚上專案慶功後要去KTV，你覺得會計部的Kevin會來嗎？ B：大概不會，他是個真正的【宅男】，比起跟一群人出去玩到很晚，他比較喜歡在公寓裡煮晚餐、看書和看電影。"
  },
  {
    "word": "metropolis",
    "pos": "n.",
    "cn_def": "大都會",
    "en_def": "a very large and important city",
    "sentence": "A: You grew up in a small fishing village, so how did you feel when you first moved to Tokyo for your job at the trading company? B: At first I felt lost in such a huge {{BLANK}} with millions of people and endless trains, but after a year I learned to enjoy its energy and variety.",
    "cn": "A：你在小漁村長大，當你第一次為了貿易公司的工作搬到東京時感覺如何？ B：一開始在那樣一個有數百萬人和無數列車的巨大【都會】裡我感到很迷惘，但一年後我學會了享受它的活力與多樣性。"
  },
  {
    "word": "jungle",
    "pos": "n.",
    "cn_def": "叢林",
    "en_def": "a thick tropical forest; also a place that is hard and confusing",
    "sentence": "A: Our company is planning a team trip to Malaysia in March, so what kind of activities has the travel agency suggested for us? B: They suggested a guided walk through the {{BLANK}} near the national park, where we can see wild monkeys and colorful birds and then stay overnight in wooden cabins.",
    "cn": "A：我們公司計畫三月去馬來西亞員工旅遊，旅行社建議我們什麼樣的活動？ B：他們建議在國家公園附近的【叢林】裡進行導覽健行，我們可以看到野生猴子和色彩繽紛的鳥，然後晚上住在木屋裡。"
  },
  {
    "word": "concrete jungle",
    "pos": "n.phr.",
    "cn_def": "水泥叢林（缺乏綠地的城市）",
    "en_def": "a city area full of large, ugly buildings and with few trees or parks",
    "sentence": "A: You used to say you loved working downtown, so why are you now planning to move your family to a village in the mountains? B: After ten years in the {{BLANK}}, with no trees, heavy traffic, and gray office towers everywhere, I want my children to grow up near forests and clean rivers.",
    "cn": "A：你以前常說你很喜歡在市中心工作，為什麼現在打算把全家搬到山上的村莊？ B：在這個到處沒有樹、交通繁忙、滿是灰色辦公大樓的【水泥叢林】裡待了十年之後，我希望孩子能在森林和清澈的河流附近長大。"
  }
];

const MCQS = [
  {
    "q": "Many young workers now live in the eastern _____ of the city. It has cheap rent and good bus connections.",
    "options": [
      "district",
      "fountain",
      "lawn",
      "sibling"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The company built small but _____ apartments for its new staff. Rent costs only a quarter of their monthly salary.",
    "options": [
      "frightening",
      "affordable",
      "dull",
      "unhygienic"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Rental prices near the new science park could _____ next year. Many technology firms are moving their offices there.",
    "options": [
      "move out",
      "harmony",
      "skyrocket",
      "shelter"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Ms. Lin rented a small _____ near the station for her one-year contract. It has a bed, a desk, and a kitchenette.",
    "options": [
      "radius",
      "outskirts",
      "feature",
      "studio"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Please keep your desk and shared kitchen _____ at all times. The building manager will inspect the dormitory on Friday.",
    "options": [
      "neat",
      "beloved",
      "contrary",
      "tiny"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The charity runs a _____ for homeless families in the old train station. It provides beds and warm meals every night.",
    "options": [
      "skyscraper",
      "shelter",
      "fountain",
      "metropolis"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The new factory will be built on the _____ of Taichung. Land there is much cheaper than in the city center.",
    "options": [
      "district",
      "radius",
      "outskirts",
      "facility"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The bank's new headquarters is a fifty-floor _____ in the financial district. It is the tallest building in the city.",
    "options": [
      "lawn",
      "shelter",
      "sibling",
      "skyscraper"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Residents are asked not to park their bicycles on the _____ in front of the building. The grass was just replanted.",
    "options": [
      "lawn",
      "fountain",
      "studio",
      "jungle"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The free shuttle bus makes the apartment more _____ to young families. It runs to the school every fifteen minutes.",
    "options": [
      "frightening",
      "attractive",
      "unhygienic",
      "dull"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Our delivery service covers every home within a ten-kilometer _____ of the store. Orders arrive within two hours.",
    "options": [
      "harmony",
      "feature",
      "radius",
      "sibling"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The old bookstore has been a _____ meeting place for local residents for decades. Its closing surprised the whole neighborhood.",
    "options": [
      "frightening",
      "contrary",
      "unhygienic",
      "beloved"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The new laundry _____ is located in the basement of Building B. Residents can use it from 7 a.m. to 10 p.m.",
    "options": [
      "facility",
      "outskirts",
      "radius",
      "homebody"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "A rooftop garden is the most popular _____ of the new apartment complex. Residents often hold barbecues there on weekends.",
    "options": [
      "shelter",
      "feature",
      "lawn",
      "district"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The report's findings were _____ to what most housing experts had predicted. Rents actually rose by eight percent this year.",
    "options": [
      "contrary",
      "beloved",
      "cooperative",
      "neat"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The old dormitory kitchen was found to be _____ by health inspectors. It will be closed until it is fully cleaned.",
    "options": [
      "attractive",
      "convenient",
      "unhygienic",
      "mature"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The new office is in a very _____ location for most employees. It is only two minutes from the subway station.",
    "options": [
      "dull",
      "frightening",
      "contrary",
      "convenient"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Applicants must show _____ income to pay the monthly rent. A recent bank statement is usually required.",
    "options": [
      "sufficient",
      "tiny",
      "amiable",
      "beloved"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The architect presented an _____ design for homes built from recycled materials. Several investors asked for more details afterward.",
    "options": [
      "unhygienic",
      "intriguing",
      "frightening",
      "dull"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Tenants who plan to _____ must give the landlord one month's written notice. The deposit will be returned after an inspection.",
    "options": [
      "skyrocket",
      "feature",
      "move out",
      "harmony"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Most residents were very _____ during the elevator repairs last month. They used the stairs without complaining.",
    "options": [
      "tiny",
      "unhygienic",
      "contrary",
      "cooperative"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The housing committee hopes residents of all ages can live in _____. It organizes a neighborhood picnic every spring.",
    "options": [
      "harmony",
      "radius",
      "facility",
      "district"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Some new hires find small-town life a little _____ at first. There are few restaurants and no shopping malls nearby.",
    "options": [
      "beloved",
      "dull",
      "convenient",
      "sufficient"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "This apartment is not _____ for families with small children. The balcony railing is too low and the stairs are steep.",
    "options": [
      "frightening",
      "intriguing",
      "suitable",
      "amiable"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The program helps young adults learn to live _____ after leaving home. They practice budgeting, cooking, and paying bills.",
    "options": [
      "neatly",
      "quietly",
      "loudly",
      "independently"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The landlord rented the apartment to Mr. Chen because he seemed _____ and responsible. He also had excellent references from former landlords.",
    "options": [
      "mature",
      "tiny",
      "unhygienic",
      "dull"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "Many employees share apartments with a _____ to save money. Brothers and sisters often move to the city together.",
    "options": [
      "skyscraper",
      "sibling",
      "fountain",
      "district"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "Ben is a real _____ who rarely joins after-work dinners. He prefers cooking at home and reading in the evenings.",
    "options": [
      "metropolis",
      "radius",
      "homebody",
      "shelter"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "Shanghai is a busy _____ with over twenty million residents. Our company opened its Asian headquarters there last year.",
    "options": [
      "lawn",
      "studio",
      "fountain",
      "metropolis"
    ],
    "answer": 3,
    "vocabIndex": 35
  },
  {
    "q": "After years in the _____, the Wangs bought a farmhouse in Hualien. They wanted more trees and fresh air for their children.",
    "options": [
      "concrete jungle",
      "fountain",
      "shelter",
      "facility"
    ],
    "answer": 0,
    "vocabIndex": 37
  }
];

const LOOKUP = {
  "district": {
    "pos": "n.",
    "en_def": "an area of a city or country",
    "cn_def": "地區；區域"
  },
  "affordable": {
    "pos": "adj.",
    "en_def": "not too expensive; cheap enough for most people",
    "cn_def": "負擔得起的；價格合理的"
  },
  "incredible": {
    "pos": "adj.",
    "en_def": "very surprising or very good; hard to believe",
    "cn_def": "令人難以置信的；極好的"
  },
  "skyrocket": {
    "pos": "v.",
    "en_def": "to rise very quickly to a very high level",
    "cn_def": "（價格等）飛漲；急升"
  },
  "studio": {
    "pos": "n.",
    "en_def": "a small apartment with one main room for living and sleeping",
    "cn_def": "套房；單間公寓"
  },
  "tiny": {
    "pos": "adj.",
    "en_def": "very small",
    "cn_def": "極小的"
  },
  "neat": {
    "pos": "adj.",
    "en_def": "clean and well organized",
    "cn_def": "整潔的；整齊的"
  },
  "shelter": {
    "pos": "n.",
    "en_def": "a place that protects people from bad weather or danger, or gives them a place to live",
    "cn_def": "收容所；避難所"
  },
  "outskirts": {
    "pos": "n.",
    "en_def": "the outer parts of a town or city",
    "cn_def": "郊區；市郊"
  },
  "detached house": {
    "pos": "n.phr.",
    "en_def": "a house that stands alone and is not joined to another house",
    "cn_def": "獨棟房屋"
  },
  "two-storey": {
    "pos": "adj.",
    "en_def": "having two floors",
    "cn_def": "兩層樓的"
  },
  "skyscraper": {
    "pos": "n.",
    "en_def": "a very tall modern building in a city",
    "cn_def": "摩天大樓"
  },
  "lawn": {
    "pos": "n.",
    "en_def": "an area of short grass around a house or building",
    "cn_def": "草坪"
  },
  "attractive": {
    "pos": "adj.",
    "en_def": "pleasant to look at or interesting enough to make people want it",
    "cn_def": "吸引人的；有吸引力的"
  },
  "radius": {
    "pos": "n.",
    "en_def": "the distance from a center point in every direction",
    "cn_def": "半徑；範圍"
  },
  "beloved": {
    "pos": "adj.",
    "en_def": "loved very much by many people",
    "cn_def": "深受喜愛的；心愛的"
  },
  "facility": {
    "pos": "n.",
    "en_def": "a building, room, or piece of equipment provided for a particular use",
    "cn_def": "設施"
  },
  "feature": {
    "pos": "n.",
    "en_def": "an important or interesting part of something",
    "cn_def": "特色；特點"
  },
  "fountain": {
    "pos": "n.",
    "en_def": "a structure that pushes water up into the air for decoration",
    "cn_def": "噴泉"
  },
  "contrary": {
    "pos": "adj.",
    "en_def": "completely different or opposite",
    "cn_def": "相反的"
  },
  "frightening": {
    "pos": "adj.",
    "en_def": "making you feel afraid",
    "cn_def": "令人害怕的"
  },
  "unhygienic": {
    "pos": "adj.",
    "en_def": "dirty and likely to cause disease",
    "cn_def": "不衛生的"
  },
  "convenient": {
    "pos": "adj.",
    "en_def": "easy to use or reach; useful because it saves time",
    "cn_def": "方便的；便利的"
  },
  "sufficient": {
    "pos": "adj.",
    "en_def": "enough for a particular purpose",
    "cn_def": "足夠的；充分的"
  },
  "intriguing": {
    "pos": "adj.",
    "en_def": "very interesting because it is unusual or mysterious",
    "cn_def": "引人好奇的；有趣的"
  },
  "move out": {
    "pos": "v.phr.",
    "en_def": "to leave the home where you live and go to live somewhere else",
    "cn_def": "搬出去"
  },
  "amiable": {
    "pos": "adj.",
    "en_def": "friendly and pleasant",
    "cn_def": "和藹可親的；友善的"
  },
  "cooperative": {
    "pos": "adj.",
    "en_def": "willing to help and work with other people",
    "cn_def": "合作的；樂於配合的"
  },
  "harmony": {
    "pos": "n.",
    "en_def": "a situation in which people live or work together peacefully",
    "cn_def": "和睦；和諧"
  },
  "dull": {
    "pos": "adj.",
    "en_def": "boring and not interesting",
    "cn_def": "單調的；無聊的"
  },
  "suitable": {
    "pos": "adj.",
    "en_def": "right or acceptable for a particular person or purpose",
    "cn_def": "適合的"
  },
  "independently": {
    "pos": "adv.",
    "en_def": "without help or control from other people",
    "cn_def": "獨立地；自主地"
  },
  "mature": {
    "pos": "adj.",
    "en_def": "behaving in a sensible, adult way",
    "cn_def": "成熟的"
  },
  "sibling": {
    "pos": "n.",
    "en_def": "a brother or sister",
    "cn_def": "兄弟姊妹"
  },
  "homebody": {
    "pos": "n.",
    "en_def": "a person who likes to stay at home rather than go out",
    "cn_def": "喜歡待在家的人；宅男宅女"
  },
  "metropolis": {
    "pos": "n.",
    "en_def": "a very large and important city",
    "cn_def": "大都會"
  },
  "jungle": {
    "pos": "n.",
    "en_def": "a thick tropical forest; also a place that is hard and confusing",
    "cn_def": "叢林"
  },
  "concrete jungle": {
    "pos": "n.phr.",
    "en_def": "a city area full of large, ugly buildings and with few trees or parks",
    "cn_def": "水泥叢林（缺乏綠地的城市）"
  }
};

const EXTRA_GLOSSES = {};
