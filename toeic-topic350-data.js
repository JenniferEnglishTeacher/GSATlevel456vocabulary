// Topic 350 Quiz Data: Shoes 鞋子
// Source word list: https://www.examword.com/group-topic/shoes — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T350 - Shoes 鞋子",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "sneakers",
    "pos": "n.",
    "cn_def": "運動鞋",
    "en_def": "soft sports shoes with rubber bottoms",
    "sentence": "A: Our team is joining the company charity walk along the riverside on Saturday morning, so what kind of shoes do you think we should wear for the long route? B: I would bring a comfortable pair of {{BLANK}} because the path is about ten kilometers long, and leather office shoes will probably hurt your feet before lunch.",
    "cn": "A：我們團隊週六早上要參加沿著河岸的公司慈善健走，你覺得這段長路線該穿什麼鞋？ B：我會帶一雙舒適的【運動鞋】，因為那條路大約十公里長，皮製上班鞋大概午餐前就會讓你腳痛。"
  },
  {
    "word": "boots",
    "pos": "n.",
    "cn_def": "靴子",
    "en_def": "strong shoes that cover the foot and the lower part of the leg",
    "sentence": "A: The factory tour next Tuesday includes the construction area behind the main building, so is there anything special that visitors need to bring with them? B: Yes, everyone must wear safety {{BLANK}} with steel toes, because there are heavy tools and wet concrete on the ground, and the supervisor will not let anyone in without them.",
    "cn": "A：下週二的工廠參觀包含主建築後面的施工區，訪客需要帶什麼特別的東西嗎？ B：需要，每個人都必須穿鋼頭安全【靴】，因為地上有沉重的工具和未乾的水泥，沒穿的話主管不會讓任何人進去。"
  },
  {
    "word": "sandals",
    "pos": "n.",
    "cn_def": "涼鞋",
    "en_def": "open shoes held on the foot by straps",
    "sentence": "A: The hotel brochure says our sales conference in Kenting includes a free afternoon at the beach, so what should I pack besides my business suits? B: Bring a light shirt, some sunscreen, and a pair of {{BLANK}}, because the sand gets very hot by noon and you will want something open and cool on your feet.",
    "cn": "A：飯店手冊說我們在墾丁的業務會議包含一個下午的海灘自由時間，除了西裝外我還該帶什麼？ B：帶一件輕薄的襯衫、一些防曬乳和一雙【涼鞋】，因為中午沙子會變得很燙，你會想讓腳穿得開放涼爽一點。"
  },
  {
    "word": "heels",
    "pos": "n.",
    "cn_def": "高跟鞋",
    "en_def": "women's shoes with a high raised back part",
    "sentence": "A: You look really tired after the product launch tonight, so did something go wrong while you were greeting the guests at the entrance of the hall? B: Nothing went wrong with the event, but I stood for almost five hours in new high {{BLANK}}, and now my feet are so sore that I can hardly walk to the taxi.",
    "cn": "A：今晚產品發表會後你看起來好累，在大廳入口迎接賓客時出了什麼問題嗎？ B：活動本身沒出問題，但我穿著新的【高跟鞋】站了快五個小時，現在腳痠到幾乎走不到計程車那裡。"
  },
  {
    "word": "flats",
    "pos": "n.",
    "cn_def": "平底鞋",
    "en_def": "women's shoes with no raised back part",
    "sentence": "A: The new receptionist asked me whether she has to wear high-heeled shoes every day, since she walks between the front desk and the meeting rooms so often. B: Tell her that comfortable black {{BLANK}} are perfectly acceptable here, because our dress code only asks for a neat and professional look, not for a certain shoe height.",
    "cn": "A：新來的接待員問我她是否每天都得穿高跟鞋，因為她經常在櫃台和會議室之間走動。 B：告訴她舒適的黑色【平底鞋】在這裡完全可以接受，因為我們的服裝規定只要求整齊專業的外表，而非特定的鞋跟高度。"
  },
  {
    "word": "slippers",
    "pos": "n.",
    "cn_def": "室內拖鞋",
    "en_def": "soft, light shoes worn indoors",
    "sentence": "A: I heard the guesthouse we booked for the training retreat in the mountains asks guests to take off their shoes at the door, is that true? B: Yes, it is a Japanese-style building with wooden floors, so the staff will give every guest a pair of {{BLANK}} to wear inside the rooms and the dining hall.",
    "cn": "A：我聽說我們為山上培訓營訂的民宿要求客人在門口脫鞋，是真的嗎？ B：是的，那是一棟有木地板的日式建築，所以員工會給每位客人一雙【室內拖鞋】，在房間和餐廳裡穿。"
  },
  {
    "word": "loafers",
    "pos": "n.",
    "cn_def": "樂福鞋；懶人皮鞋",
    "en_def": "leather shoes without laces that you slide your feet into",
    "sentence": "A: I'm flying to Singapore for three days of client meetings, and I want to pack light, so which shoes would you take for both the office and dinner? B: I would take a pair of brown leather {{BLANK}}, because they look smart with a suit, they are easy to slip on at airport security, and they don't need laces.",
    "cn": "A：我要飛去新加坡和客戶開三天會，我想輕裝出行，你會帶哪雙鞋，辦公室和晚餐都能穿？ B：我會帶一雙棕色皮革【樂福鞋】，因為搭配西裝很體面，在機場安檢時容易穿脫，而且不需要綁鞋帶。"
  },
  {
    "word": "lace",
    "pos": "n.",
    "cn_def": "鞋帶",
    "en_def": "a thin string used to tie a shoe",
    "sentence": "A: Why did the delivery driver fall on the stairs outside the warehouse this afternoon, was the floor wet from the rain again? B: No, the floor was dry, but one {{BLANK}} on his work boot came untied, and he stepped on it while carrying a heavy box, so he lost his balance and hurt his knee.",
    "cn": "A：今天下午送貨司機為什麼在倉庫外的樓梯上跌倒，地板又因為下雨濕了嗎？ B：不是，地板是乾的，但他工作靴上的一條【鞋帶】鬆了，他搬重箱子時踩到它，所以失去平衡傷了膝蓋。"
  },
  {
    "word": "sole",
    "pos": "n.",
    "cn_def": "鞋底",
    "en_def": "the bottom part of a shoe that touches the ground",
    "sentence": "A: A customer returned these running shoes after only two weeks, saying they became dangerous on the wet floor of the gym, so what is the problem? B: Look at the bottom, the rubber {{BLANK}} is already worn smooth, so it has no grip at all, which means this batch may have a quality issue we should report to the factory.",
    "cn": "A：一位顧客才穿兩週就退回這雙跑鞋，說在健身房濕地板上變得很危險，問題出在哪裡？ B：看看底部，橡膠【鞋底】已經磨平了，完全沒有抓地力，這表示這批貨可能有品質問題，我們應該向工廠回報。"
  },
  {
    "word": "heel",
    "pos": "n.",
    "cn_def": "鞋跟",
    "en_def": "the raised back part of a shoe under your foot",
    "sentence": "A: Could you recommend a repair shop near the office, because I have an important interview this afternoon and something just happened to my shoe on the way here? B: Sure, there's a small shoe repair stand next to the subway exit, and they can fix a broken {{BLANK}} in about fifteen minutes while you wait.",
    "cn": "A：你能推薦辦公室附近的修鞋店嗎？我今天下午有個重要面試，來這裡的路上鞋子剛出了問題。 B：當然，地鐵出口旁有個小修鞋攤，他們大約十五分鐘就能修好斷掉的【鞋跟】，你可以在那裡等。"
  },
  {
    "word": "leather",
    "pos": "n.",
    "cn_def": "皮革",
    "en_def": "material made from animal skin",
    "sentence": "A: The supplier offered two kinds of material for the new uniform shoes for our hotel staff, so which one do you think we should choose? B: I suggest real {{BLANK}}, because although it costs a little more at first, it lasts for years, looks professional at the front desk, and is easy to clean when guests spill coffee.",
    "cn": "A：供應商為我們飯店員工的新制服鞋提供了兩種材質，你覺得我們該選哪一種？ B：我建議用真【皮革】，因為雖然一開始稍貴，但能穿好幾年，在櫃台看起來很專業，而且客人灑出咖啡時也容易清理。"
  },
  {
    "word": "suede",
    "pos": "n.",
    "cn_def": "麂皮；絨面皮革",
    "en_def": "soft leather with a rough, brushed surface",
    "sentence": "A: My manager gave me a beautiful pair of light brown shoes for my birthday, but the forecast says it will rain all week, so should I wear them to work? B: I would wait for a sunny day, because {{BLANK}} is very soft and easily damaged by water, and the stains are hard to remove even with a special brush.",
    "cn": "A：我主管送我一雙漂亮的淺棕色鞋當生日禮物，但天氣預報說整週都會下雨，我該穿去上班嗎？ B：我會等晴天再穿，因為【麂皮】非常柔軟又容易被水弄壞，即使用專用刷子污漬也很難去除。"
  },
  {
    "word": "canvas",
    "pos": "n.",
    "cn_def": "帆布",
    "en_def": "strong, heavy cotton cloth",
    "sentence": "A: Our marketing team wants cheap but cool shoes with the company logo printed on them for the summer festival, so what material would you recommend? B: Light {{BLANK}} would be a good choice, because it is cheap to produce, easy to print colorful pictures on, and it keeps people's feet cool during hot outdoor events.",
    "cn": "A：我們行銷團隊想為夏季音樂節做印有公司標誌、便宜又酷的鞋子，你推薦什麼材質？ B：輕薄的【帆布】是不錯的選擇，因為生產成本低、容易印上彩色圖案，而且在炎熱的戶外活動中能讓腳保持涼爽。"
  },
  {
    "word": "size",
    "pos": "n.",
    "cn_def": "尺寸；尺碼",
    "en_def": "how big or small something is; a shoe measurement number",
    "sentence": "A: I ordered the black work shoes from your online store last week, but they arrived much too small for me, so can I change them for a bigger pair? B: Of course, just fill in the return form, tell us which {{BLANK}} you need, and our courier will pick up the old pair and deliver the new one within three days.",
    "cn": "A：我上週在你們網路商店訂了黑色工作鞋，但送來的對我太小了，我可以換大一點的嗎？ B：當然可以，只要填寫退貨表格，告訴我們你需要哪個【尺碼】，我們的快遞會在三天內取走舊鞋並送來新的。"
  },
  {
    "word": "fit",
    "pos": "v.",
    "cn_def": "合身；尺寸合適",
    "en_def": "to be the right size and shape for someone",
    "sentence": "A: Could I try on these hiking boots in a size nine before I buy them for next month's team-building trip in the mountains? B: Sure, please sit down, put them on, and walk around the store for a few minutes, because they should {{BLANK}} well around your toes and ankles, or you will get painful blisters on the trail.",
    "cn": "A：下個月公司要去山上進行團隊建立活動，我買之前可以試穿九號的這雙登山靴嗎？ B：當然，請坐下穿上後在店裡走幾分鐘，因為鞋子在腳趾和腳踝周圍應該要【合腳】，不然在步道上會磨出很痛的水泡。"
  },
  {
    "word": "wear",
    "pos": "v.",
    "cn_def": "穿著；戴",
    "en_def": "to have clothes or shoes on your body",
    "sentence": "A: Is there a dress code for the annual awards dinner at the Grand Hotel next Friday evening, or can we come straight from the office in our usual clothes? B: The invitation says it is a formal event, so men should {{BLANK}} dark suits and polished shoes, and women are expected to choose evening dresses or smart outfits.",
    "cn": "A：下週五晚上在大飯店舉行的年度頒獎晚宴有服裝規定嗎？還是我們可以直接穿平常的衣服從辦公室過去？ B：邀請函說這是正式活動，所以男士應該【穿】深色西裝和擦亮的皮鞋，女士則應選擇晚禮服或得體的服裝。"
  },
  {
    "word": "polish",
    "pos": "v.",
    "cn_def": "擦亮",
    "en_def": "to rub something to make it clean and shiny",
    "sentence": "A: The general manager is visiting our branch tomorrow morning to check how the front desk staff present themselves to guests, so what should we prepare tonight? B: Make sure your uniforms are clean and ironed, and please {{BLANK}} your black shoes until they shine, because she always notices small details like dusty or scratched footwear.",
    "cn": "A：總經理明天早上要來我們分店，看看櫃台人員面對客人的儀容，我們今晚該準備什麼？ B：確保制服乾淨熨好，並請把黑皮鞋【擦亮】到發光，因為她總會注意到灰塵或刮痕之類的小細節。"
  },
  {
    "word": "slip",
    "pos": "v.",
    "cn_def": "滑倒；滑",
    "en_def": "to slide by accident and lose your balance",
    "sentence": "A: Why did the cleaning team put yellow warning signs all over the lobby this morning, is there some kind of repair work going on? B: No, they just mopped the marble floor, and it stays wet for about an hour, so the signs remind guests to walk carefully and not {{BLANK}} while carrying their luggage.",
    "cn": "A：為什麼清潔團隊今天早上在大廳到處放黃色警告標誌，是在進行什麼維修工程嗎？ B：不是，他們剛拖完大理石地板，大約一小時都會是濕的，所以標誌提醒客人提著行李時要小心走，不要【滑倒】。"
  },
  {
    "word": "comfortable",
    "pos": "adj.",
    "cn_def": "舒適的",
    "en_def": "pleasant to wear or use; not causing pain",
    "sentence": "A: Our nurses are on their feet for twelve hours a shift, and many of them have complained about back pain, so what kind of shoes should the hospital buy for them? B: We should choose shoes that are light and {{BLANK}}, with soft insoles and good support, because tired, sore feet make it harder for staff to focus on patients.",
    "cn": "A：我們的護理師每班要站十二個小時，很多人抱怨背痛，醫院該為她們買什麼樣的鞋？ B：我們應該選擇輕巧又【舒適】的鞋，有柔軟鞋墊和良好支撐，因為疲憊痠痛的腳會讓員工更難專心照顧病人。"
  },
  {
    "word": "tight",
    "pos": "adj.",
    "cn_def": "緊的",
    "en_def": "too small, so it presses on your body",
    "sentence": "A: You've been walking strangely since the meeting ended, so did you hurt your foot when you were moving those boxes into the storage room? B: No, I bought these shoes online without trying them on, and they are so {{BLANK}} that my toes are pressed together, so I can't wait to take them off.",
    "cn": "A：會議結束後你走路就怪怪的，是把那些箱子搬進儲藏室時傷到腳了嗎？ B：不是，我在網路上買了這雙鞋沒有試穿，結果太【緊】了，腳趾被擠在一起，我等不及要脫掉它們。"
  },
  {
    "word": "loose",
    "pos": "adj.",
    "cn_def": "鬆的；寬鬆的",
    "en_def": "too big; not firmly fixed in place",
    "sentence": "A: The children's shoes we sent to the store last month are getting many complaints, so what are parents saying about them in their online reviews? B: Most parents say the shoes are too {{BLANK}} around the ankle even after the straps are pulled firmly, so their kids' feet slide out while they are running at school.",
    "cn": "A：我們上個月送到店裡的童鞋收到很多投訴，家長在網路評論中怎麼說？ B：大多數家長說即使把綁帶拉緊，鞋子在腳踝處還是太【鬆】，孩子在學校跑步時腳會滑出來。"
  },
  {
    "word": "durable",
    "pos": "adj.",
    "cn_def": "耐用的",
    "en_def": "able to last a long time without breaking",
    "sentence": "A: The warehouse workers need new work shoes every six months, which is costing the company a lot of money, so should we switch to a different supplier? B: I think so, because the new supplier offers shoes that are much more {{BLANK}}, with thick rubber bottoms and strong stitching, and they promise each pair will last at least two years.",
    "cn": "A：倉庫工人每六個月就需要新的工作鞋，花了公司很多錢，我們該換供應商嗎？ B：我認為應該，因為新供應商提供的鞋子【耐用】得多，有厚橡膠底和堅固的縫線，他們保證每雙至少能穿兩年。"
  },
  {
    "word": "fashionable",
    "pos": "adj.",
    "cn_def": "流行的；時髦的",
    "en_def": "popular and in style at a certain time",
    "sentence": "A: Our sales of white sneakers rose sharply this spring, even though we didn't spend extra money on advertising, so what do you think caused the increase? B: Several popular singers wore them in music videos, so they quickly became {{BLANK}} among young people, and now teenagers want the same look for school and weekends.",
    "cn": "A：今年春天我們的白色運動鞋銷量大幅上升，即使我們沒有額外花錢打廣告，你覺得是什麼原因？ B：幾位受歡迎的歌手在音樂錄影帶中穿了它們，所以很快就在年輕人中變得【流行】，現在青少年上學和週末都想要同樣的造型。"
  },
  {
    "word": "casual",
    "pos": "adj.",
    "cn_def": "休閒的；非正式的",
    "en_def": "relaxed and not formal",
    "sentence": "A: I just started working here this week, and I noticed some people wear jeans and sneakers on Fridays, so is that really allowed in this office? B: Yes, Friday is our relaxed day, so {{BLANK}} clothes and shoes are fine, unless you have a meeting with clients, in which case you should still dress professionally.",
    "cn": "A：我這週剛開始在這裡工作，注意到有些人週五穿牛仔褲和運動鞋，這間辦公室真的允許嗎？ B：是的，週五是我們輕鬆的日子，所以【休閒的】服裝和鞋子都可以，除非你要跟客戶開會，那樣你還是應該穿得專業一點。"
  },
  {
    "word": "formal",
    "pos": "adj.",
    "cn_def": "正式的",
    "en_def": "suitable for serious or official events",
    "sentence": "A: I have a job interview at a large international bank on Monday, and I'm not sure whether I should wear my new white sneakers or something else. B: For a bank interview you should choose {{BLANK}} shoes, such as black leather lace-ups or simple pumps, because first impressions matter and sneakers may look too relaxed.",
    "cn": "A：我週一要去一家大型國際銀行面試，不確定該穿新的白色運動鞋還是別的。 B：銀行面試你應該選【正式的】鞋子，例如黑色綁帶皮鞋或簡單的包鞋，因為第一印象很重要，運動鞋可能看起來太隨意。"
  },
  {
    "word": "expensive",
    "pos": "adj.",
    "cn_def": "昂貴的",
    "en_def": "costing a lot of money",
    "sentence": "A: The sales clerk recommended these Italian dress shoes for my cousin's wedding, but when I looked at the price tag I almost dropped them on the floor. B: Yes, they are quite {{BLANK}}, but they are handmade with fine materials, and if you take good care of them, they could last you more than ten years.",
    "cn": "A：店員推薦我穿這雙義大利正裝鞋去參加表哥的婚禮，但我看到價格標籤時差點把它們掉到地上。 B：是的，它們相當【昂貴】，但它們是用上好材料手工製作的，如果你好好保養，可以穿十年以上。"
  },
  {
    "word": "cheap",
    "pos": "adj.",
    "cn_def": "便宜的",
    "en_def": "costing little money",
    "sentence": "A: Why did you buy three pairs of shoes from that street market during your business trip, didn't you say your suitcase was already full? B: They were really {{BLANK}}, only about ten dollars each, so I bought extra pairs for my kids, although I'm worried they might fall apart after a few weeks.",
    "cn": "A：你出差時為什麼在那個街頭市場買了三雙鞋？你不是說行李箱已經滿了嗎？ B：它們真的很【便宜】，每雙大約只要十美元，所以我多買幾雙給孩子，不過我擔心幾週後就會壞掉。"
  },
  {
    "word": "brand",
    "pos": "n.",
    "cn_def": "品牌",
    "en_def": "the name of a product made by a certain company",
    "sentence": "A: Our department store is planning a new sports shoe section on the third floor next season, so which companies are we hoping to sign contracts with? B: We are talking to a famous Japanese running {{BLANK}} that many marathon runners trust, and if the deal goes well, we will hold a big opening event in March.",
    "cn": "A：我們百貨公司計畫下一季在三樓新增運動鞋區，我們希望和哪些公司簽約？ B：我們正在和一個許多馬拉松跑者信賴的知名日本跑鞋【品牌】洽談，如果合作順利，我們會在三月舉辦盛大的開幕活動。"
  },
  {
    "word": "design",
    "pos": "n.",
    "cn_def": "設計",
    "en_def": "the shape, style and look of something",
    "sentence": "A: The customers at yesterday's focus group said our new hiking shoes were comfortable, but did they say anything negative that we should report to the product team? B: Several of them said the {{BLANK}} looked old-fashioned, with dull colors and too many straps, so the team may need to make the shoes look more modern before the launch.",
    "cn": "A：昨天焦點小組的顧客說我們的新登山鞋很舒適，但他們有說什麼負面意見我們應該回報給產品團隊嗎？ B：有幾位說【設計】看起來很過時，顏色暗淡、帶子太多，所以團隊在上市前可能需要讓鞋子看起來更現代。"
  },
  {
    "word": "pair",
    "pos": "n.",
    "cn_def": "一雙；一對",
    "en_def": "two things of the same kind used together",
    "sentence": "A: The shoe factory sent a shipment this morning, but the boxes look fewer than usual, so can you tell me how many are missing from our order? B: We ordered five hundred, but the staff counted only four hundred and eighty, so twenty are missing, and I've asked the supplier to send every missing {{BLANK}} by express before our weekend sale.",
    "cn": "A：鞋廠今天早上送來一批貨，但箱子看起來比平常少，你能告訴我我們的訂單少了多少嗎？ B：我們訂了五百雙，但員工只點到四百八十雙，所以少了二十雙，我已經請供應商在週末特賣前用快遞把每一【雙】缺少的鞋送來。"
  },
  {
    "word": "smooth",
    "pos": "adj.",
    "cn_def": "光滑的；平滑的",
    "en_def": "flat and even, with no rough parts",
    "sentence": "A: A customer fell in our store yesterday while trying on shoes, so what are we going to change to make the fitting area safer for everyone? B: The tiles in that area are very {{BLANK}} and shiny, so we will put down a soft carpet and add more seats, and staff will help older customers try on shoes.",
    "cn": "A：昨天一位顧客在我們店裡試穿鞋子時跌倒了，我們要做什麼改變讓試穿區對大家更安全？ B：那區的磁磚非常【光滑】又亮，所以我們會鋪上柔軟的地毯並增加座位，員工也會協助年長顧客試穿鞋子。"
  },
  {
    "word": "stylish",
    "pos": "adj.",
    "cn_def": "有型的；時髦的",
    "en_def": "attractive and fashionable",
    "sentence": "A: Our online shop is sending a gift to its top customers this year, so what kind of shoes do you think the marketing manager chose for them? B: She picked a pair of {{BLANK}} white leather sneakers with a gold logo, because they look modern and elegant, and they go well with both jeans and business suits.",
    "cn": "A：我們的網路商店今年要送禮物給頂級顧客，你覺得行銷經理選了什麼樣的鞋？ B：她挑了一雙【有型的】白色皮革運動鞋，上面有金色標誌，因為看起來現代又優雅，搭配牛仔褲或西裝都很好看。"
  },
  {
    "word": "quickly",
    "pos": "adv.",
    "cn_def": "快速地；很快地",
    "en_def": "fast; in a short time",
    "sentence": "A: The new store opened only an hour ago, but the shelf for the limited-edition basketball shoes is already empty, so what happened this morning? B: Hundreds of fans were waiting outside before the doors opened, so the shoes sold out very {{BLANK}}, and now we are taking orders for the next delivery in two weeks.",
    "cn": "A：新店才開一個小時，但限量版籃球鞋的架子已經空了，今天早上發生了什麼事？ B：開門前就有數百名粉絲在外面等，所以鞋子很【快】就賣光了，現在我們正在接受兩週後下一批到貨的訂單。"
  },
  {
    "word": "carefully",
    "pos": "adv.",
    "cn_def": "小心地；仔細地",
    "en_def": "with attention, so that you avoid mistakes or damage",
    "sentence": "A: I want to return these leather boots because one of the seams is coming apart, but I'm afraid the store won't accept them after a month. B: Check the receipt {{BLANK}} first, because many shoe stores offer a ninety-day warranty for defects, and the staff should replace them for free if the damage is not your fault.",
    "cn": "A：我想退這雙皮靴，因為其中一條縫線裂開了，但我怕過了一個月店家不會接受。 B：先【仔細】看看收據，因為很多鞋店對瑕疵提供九十天保固，如果損壞不是你的錯，店員應該會免費更換。"
  }
];

const MCQS = [
  {
    "q": "Employees joining Saturday's charity fun run should wear light running _____. Leather dress shoes are not suitable for the five-kilometer route.",
    "options": [
      "sneakers",
      "loafers",
      "heels",
      "slippers"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "All visitors to the construction site must wear steel-toed safety _____. Ordinary office shoes do not protect your feet from falling tools.",
    "options": [
      "sandals",
      "flats",
      "boots",
      "loafers"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The resort recommends that guests bring open-toed _____ for the beach. The sand becomes very hot in the afternoon sun.",
    "options": [
      "boots",
      "sandals",
      "loafers",
      "sneakers"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Many hostesses at the trade show stood for hours in high _____. By evening, several of them had changed into comfortable flat shoes.",
    "options": [
      "sandals",
      "slippers",
      "loafers",
      "heels"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Guests at the hot spring hotel must remove their shoes at the entrance. Soft indoor _____ are provided for walking around the building.",
    "options": [
      "boots",
      "heels",
      "slippers",
      "sneakers"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Daniel prefers leather _____ on business trips. He can slip them on and off easily at airport security without untying any laces.",
    "options": [
      "loafers",
      "boots",
      "sneakers",
      "heels"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Please tie the _____ on your work boots tightly before entering the warehouse. A loose one could make you trip on the stairs.",
    "options": [
      "sole",
      "size",
      "brand",
      "lace"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The thick rubber _____ of these hiking boots gives excellent grip on wet rocks. It also protects your feet from sharp stones.",
    "options": [
      "lace",
      "sole",
      "brand",
      "pair"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "These office shoes are made of genuine _____ imported from Italy. With regular polishing, they will keep their shape and shine for years.",
    "options": [
      "leather",
      "canvas",
      "size",
      "design"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Avoid wearing your new _____ shoes in the rain. The soft, brushed material stains easily and is difficult to clean.",
    "options": [
      "size",
      "brand",
      "suede",
      "design"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The online store will exchange your shoes for free if they are one _____ too small. Simply return them within thirty days with the receipt.",
    "options": [
      "pair",
      "size",
      "brand",
      "sole"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Please try on both shoes to check that they _____ your feet properly. Many customers return shoes simply because they bought the wrong size.",
    "options": [
      "polish",
      "slip",
      "wear",
      "fit"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "All front desk staff must _____ black shoes and a dark uniform during working hours. Colorful sneakers are only allowed on casual Fridays.",
    "options": [
      "fit",
      "polish",
      "wear",
      "slip"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Please _____ your shoes until they shine before the manager's visit tomorrow. She always notices dusty or scratched footwear on the front desk staff.",
    "options": [
      "polish",
      "wear",
      "fit",
      "slip"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The marble floor in the lobby is still wet after cleaning. Please walk carefully so that you do not _____ and fall.",
    "options": [
      "fit",
      "wear",
      "polish",
      "slip"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Nurses who stand during long shifts need light and _____ shoes. Soft insoles and good support help reduce back and foot pain.",
    "options": [
      "formal",
      "comfortable",
      "expensive",
      "tight"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "These shoes are too _____ for me, and my toes are pressed together. Could I try the next size up instead?",
    "options": [
      "tight",
      "loose",
      "smooth",
      "casual"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The children's shoes are too _____ around the ankle. Even with the straps pulled firmly, the kids' feet slide out when they run.",
    "options": [
      "tight",
      "durable",
      "loose",
      "formal"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The company switched suppliers because the new work boots are far more _____. Each pair now lasts at least two years instead of six months.",
    "options": [
      "fashionable",
      "durable",
      "casual",
      "smooth"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "White sneakers became extremely _____ among teenagers this spring. Several pop singers wore them in music videos, and sales rose sharply.",
    "options": [
      "durable",
      "formal",
      "tight",
      "fashionable"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "On Fridays, employees may wear _____ clothes such as jeans and sneakers. However, staff meeting clients should still dress professionally.",
    "options": [
      "formal",
      "tight",
      "casual",
      "expensive"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The awards dinner is a _____ event, so guests should wear dark suits or evening dresses. Sneakers and jeans will not be permitted.",
    "options": [
      "formal",
      "casual",
      "loose",
      "cheap"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "These handmade Italian shoes are quite _____, costing over five hundred dollars a pair. However, they can last more than ten years with proper care.",
    "options": [
      "cheap",
      "loose",
      "casual",
      "expensive"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The shoes at the street market were very _____, only ten dollars a pair. Unfortunately, they fell apart after just a few weeks.",
    "options": [
      "expensive",
      "cheap",
      "formal",
      "stylish"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Our store has signed a contract with a famous Japanese running shoe _____. Its products are trusted by many professional marathon runners.",
    "options": [
      "brand",
      "design",
      "sole",
      "size"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Customers liked the comfort of the new hiking shoes but disliked their old-fashioned _____. The team will update the colors and straps before launch.",
    "options": [
      "brand",
      "size",
      "design",
      "pair"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Each customer who spends over one hundred dollars will receive a free _____ of socks. The offer is valid until the end of this month.",
    "options": [
      "size",
      "pair",
      "brand",
      "sole"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The marketing team chose _____ white leather sneakers as gifts for top customers. They look modern and elegant with both jeans and suits.",
    "options": [
      "loose",
      "tight",
      "cheap",
      "stylish"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The limited-edition basketball shoes sold out very _____ after the store opened. Hundreds of fans had been waiting outside since early morning.",
    "options": [
      "carefully",
      "rarely",
      "quickly",
      "loudly"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Handle the glass display shelves _____ when you arrange the new shoes. They break easily if you push them too hard.",
    "options": [
      "carefully",
      "quickly",
      "loudly",
      "rarely"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "sneakers": {
    "pos": "n.",
    "en_def": "soft sports shoes with rubber bottoms",
    "cn_def": "運動鞋"
  },
  "boots": {
    "pos": "n.",
    "en_def": "strong shoes that cover the foot and the lower part of the leg",
    "cn_def": "靴子"
  },
  "sandals": {
    "pos": "n.",
    "en_def": "open shoes held on the foot by straps",
    "cn_def": "涼鞋"
  },
  "heels": {
    "pos": "n.",
    "en_def": "women's shoes with a high raised back part",
    "cn_def": "高跟鞋"
  },
  "flats": {
    "pos": "n.",
    "en_def": "women's shoes with no raised back part",
    "cn_def": "平底鞋"
  },
  "slippers": {
    "pos": "n.",
    "en_def": "soft, light shoes worn indoors",
    "cn_def": "室內拖鞋"
  },
  "loafers": {
    "pos": "n.",
    "en_def": "leather shoes without laces that you slide your feet into",
    "cn_def": "樂福鞋；懶人皮鞋"
  },
  "lace": {
    "pos": "n.",
    "en_def": "a thin string used to tie a shoe",
    "cn_def": "鞋帶"
  },
  "sole": {
    "pos": "n.",
    "en_def": "the bottom part of a shoe that touches the ground",
    "cn_def": "鞋底"
  },
  "heel": {
    "pos": "n.",
    "en_def": "the raised back part of a shoe under your foot",
    "cn_def": "鞋跟"
  },
  "leather": {
    "pos": "n.",
    "en_def": "material made from animal skin",
    "cn_def": "皮革"
  },
  "suede": {
    "pos": "n.",
    "en_def": "soft leather with a rough, brushed surface",
    "cn_def": "麂皮；絨面皮革"
  },
  "canvas": {
    "pos": "n.",
    "en_def": "strong, heavy cotton cloth",
    "cn_def": "帆布"
  },
  "size": {
    "pos": "n.",
    "en_def": "how big or small something is; a shoe measurement number",
    "cn_def": "尺寸；尺碼"
  },
  "fit": {
    "pos": "v.",
    "en_def": "to be the right size and shape for someone",
    "cn_def": "合身；尺寸合適"
  },
  "wear": {
    "pos": "v.",
    "en_def": "to have clothes or shoes on your body",
    "cn_def": "穿著；戴"
  },
  "polish": {
    "pos": "v.",
    "en_def": "to rub something to make it clean and shiny",
    "cn_def": "擦亮"
  },
  "slip": {
    "pos": "v.",
    "en_def": "to slide by accident and lose your balance",
    "cn_def": "滑倒；滑"
  },
  "comfortable": {
    "pos": "adj.",
    "en_def": "pleasant to wear or use; not causing pain",
    "cn_def": "舒適的"
  },
  "tight": {
    "pos": "adj.",
    "en_def": "too small, so it presses on your body",
    "cn_def": "緊的"
  },
  "loose": {
    "pos": "adj.",
    "en_def": "too big; not firmly fixed in place",
    "cn_def": "鬆的；寬鬆的"
  },
  "durable": {
    "pos": "adj.",
    "en_def": "able to last a long time without breaking",
    "cn_def": "耐用的"
  },
  "fashionable": {
    "pos": "adj.",
    "en_def": "popular and in style at a certain time",
    "cn_def": "流行的；時髦的"
  },
  "casual": {
    "pos": "adj.",
    "en_def": "relaxed and not formal",
    "cn_def": "休閒的；非正式的"
  },
  "formal": {
    "pos": "adj.",
    "en_def": "suitable for serious or official events",
    "cn_def": "正式的"
  },
  "expensive": {
    "pos": "adj.",
    "en_def": "costing a lot of money",
    "cn_def": "昂貴的"
  },
  "cheap": {
    "pos": "adj.",
    "en_def": "costing little money",
    "cn_def": "便宜的"
  },
  "brand": {
    "pos": "n.",
    "en_def": "the name of a product made by a certain company",
    "cn_def": "品牌"
  },
  "design": {
    "pos": "n.",
    "en_def": "the shape, style and look of something",
    "cn_def": "設計"
  },
  "pair": {
    "pos": "n.",
    "en_def": "two things of the same kind used together",
    "cn_def": "一雙；一對"
  },
  "smooth": {
    "pos": "adj.",
    "en_def": "flat and even, with no rough parts",
    "cn_def": "光滑的；平滑的"
  },
  "stylish": {
    "pos": "adj.",
    "en_def": "attractive and fashionable",
    "cn_def": "有型的；時髦的"
  },
  "quickly": {
    "pos": "adv.",
    "en_def": "fast; in a short time",
    "cn_def": "快速地；很快地"
  },
  "carefully": {
    "pos": "adv.",
    "en_def": "with attention, so that you avoid mistakes or damage",
    "cn_def": "小心地；仔細地"
  }
};

const EXTRA_GLOSSES = {};
