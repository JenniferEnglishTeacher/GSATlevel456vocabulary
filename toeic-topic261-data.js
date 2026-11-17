// Topic 261 Quiz Data: Object 物品
// Source word list: https://www.examword.com/group-topic/object — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T261 - Object 物品",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "item",
    "pos": "n.",
    "cn_def": "項目；品項；物品",
    "en_def": "a single thing on a list or in a group",
    "sentence": "A: Excuse me, I ordered five office supplies online last week, but the box that arrived this morning only had four of them inside. What should I do? B: I'm sorry about that. Please tell me which {{BLANK}} is missing, and I will ask our warehouse team to send it to your office by express delivery tomorrow.",
    "cn": "A：不好意思，我上週在網路上訂了五樣辦公用品，但今天早上送到的箱子裡只有四樣。我該怎麼辦？ B：很抱歉。請告訴我是哪一個【品項】不見了，我會請倉庫團隊明天用快遞寄到您的辦公室。"
  },
  {
    "word": "thing",
    "pos": "n.",
    "cn_def": "東西；物品",
    "en_def": "an object that you do not name exactly",
    "sentence": "A: I'm packing for the three-day business trip to Singapore, and my suitcase is already full. Do you think I really need to bring my heavy laptop charger? B: Yes, that is the one {{BLANK}} you should never leave behind, because the hotel probably won't have the right cable for your computer.",
    "cn": "A：我正在為去新加坡三天的出差打包，我的行李箱已經滿了。你覺得我真的需要帶那個很重的筆電充電器嗎？ B：需要，那是你絕對不能遺漏的一樣【東西】，因為飯店可能不會有適合你電腦的線。"
  },
  {
    "word": "material",
    "pos": "n.",
    "cn_def": "材料；原料",
    "en_def": "what something is made of",
    "sentence": "A: Why did the furniture company raise the price of its office chairs again this year, even though the design looks exactly the same as before? B: The cost of the {{BLANK}} they use for the seats has gone up a lot, and they also pay their factory workers higher wages now.",
    "cn": "A：為什麼那家家具公司今年又調漲辦公椅的價格，即使設計看起來和以前一模一樣？ B：他們用在椅墊上的【材料】成本漲了很多，而且他們現在也付給工廠員工更高的薪水。"
  },
  {
    "word": "shape",
    "pos": "n.",
    "cn_def": "形狀",
    "en_def": "the outer form of something",
    "sentence": "A: The client said she liked our new logo, but she asked us to change one part before Friday's meeting. Do you know what she wants? B: She thinks the round {{BLANK}} looks too simple for a bank, so she would like a design with straight lines that looks more serious and modern.",
    "cn": "A：客戶說她喜歡我們的新標誌，但她要求我們在週五開會前修改一個部分。你知道她想要什麼嗎？ B：她認為圓的【形狀】對一家銀行來說看起來太簡單了，所以她想要有直線、看起來更正式又現代的設計。"
  },
  {
    "word": "size",
    "pos": "n.",
    "cn_def": "尺寸；大小",
    "en_def": "how big or small something is",
    "sentence": "A: I'd like to order new uniforms for the twelve staff members at our front desk, but I'm not sure what to put on the form. B: Just ask each employee to write down their {{BLANK}} on this list, and we can deliver all the shirts to your hotel within two weeks.",
    "cn": "A：我想為我們櫃檯的十二位員工訂購新制服，但我不確定表格上要填什麼。 B：只要請每位員工在這張清單上寫下他們的【尺寸】，我們就可以在兩週內把所有襯衫送到你們飯店。"
  },
  {
    "word": "weight",
    "pos": "n.",
    "cn_def": "重量",
    "en_def": "how heavy something is",
    "sentence": "A: How much will it cost to send these product samples to our partner in London by air, and how long will they take to arrive? B: The price depends on the total {{BLANK}} of the package, so let me put it on the scale first, and then I can tell you about the delivery time.",
    "cn": "A：把這些產品樣品空運寄給我們在倫敦的合作夥伴要多少錢？要多久才會送到？ B：價格取決於包裹的總【重量】，所以讓我先把它放到秤上，然後我就能告訴你送達時間。"
  },
  {
    "word": "surface",
    "pos": "n.",
    "cn_def": "表面",
    "en_def": "the top or outside layer of something",
    "sentence": "A: The cleaning staff asked whether they can use the strong chemical spray on the new meeting room tables this evening. What should I tell them? B: Please tell them to use only soap and water, because the glass {{BLANK}} scratches easily and the tables were very expensive to replace last year.",
    "cn": "A：清潔人員問今晚能不能在新會議室的桌子上用強效化學噴劑。我該怎麼跟他們說？ B：請告訴他們只用肥皂和水，因為玻璃【表面】很容易刮傷，而且去年那些桌子換新時非常貴。"
  },
  {
    "word": "texture",
    "pos": "n.",
    "cn_def": "質地；觸感",
    "en_def": "the way something feels when you touch it",
    "sentence": "A: Customers keep returning the new towels we started selling last month, and the store manager wants to know the main reason. B: Most of them say the {{BLANK}} feels rough and hard after they wash the towels once or twice, so they don't think the product is worth the price.",
    "cn": "A：顧客一直退回我們上個月開始販售的新毛巾，店經理想知道主要原因。 B：大部分人說毛巾洗過一兩次之後，【觸感】摸起來粗糙又硬，所以他們認為這個產品不值那個價錢。"
  },
  {
    "word": "solid",
    "pos": "adj.",
    "cn_def": "堅固的；實心的；固體的",
    "en_def": "hard and firm; not liquid or gas",
    "sentence": "A: Our team is moving to the new office next week, and I'm worried that the shelves won't hold all our heavy files and books. B: Don't worry, the shelves are made of {{BLANK}} wood instead of cheap plastic, so they can easily carry the weight of everything in your department.",
    "cn": "A：我們團隊下週要搬到新辦公室，我擔心架子承受不了我們所有沉重的檔案和書。 B：別擔心，那些架子是用【實心】木頭而不是便宜的塑膠做的，所以能輕鬆承受你們部門所有東西的重量。"
  },
  {
    "word": "liquid",
    "pos": "n.",
    "cn_def": "液體",
    "en_def": "a substance like water that can flow",
    "sentence": "A: I'm flying to Tokyo for the trade fair tomorrow morning. Can I bring this large bottle of hand cream in my carry-on bag? B: No, airport security only allows small bottles, so any {{BLANK}} over one hundred milliliters has to go in your checked suitcase, or they will throw it away.",
    "cn": "A：我明天早上要飛去東京參加貿易展。我可以把這大瓶護手霜放在隨身行李裡嗎？ B：不行，機場安檢只允許小瓶的，所以任何超過一百毫升的【液體】都必須放在托運行李箱裡，否則會被丟掉。"
  },
  {
    "word": "fragile",
    "pos": "adj.",
    "cn_def": "易碎的；脆弱的",
    "en_def": "easily broken or damaged",
    "sentence": "A: These glass awards for the annual sales dinner are going to the hotel by courier this afternoon. Is there anything special I should do? B: Yes, please put a large {{BLANK}} sticker on every box, and ask the driver to keep them on the floor of the van, not on the shelves.",
    "cn": "A：年度業績晚宴用的這些玻璃獎座今天下午會用快遞送去飯店。我需要特別注意什麼嗎？ B：需要，請在每個箱子上貼一張大大的【易碎】貼紙，並請司機把它們放在貨車的地板上，不要放在架子上。"
  },
  {
    "word": "durable",
    "pos": "adj.",
    "cn_def": "耐用的；持久的",
    "en_def": "able to last a long time without breaking",
    "sentence": "A: Why did the purchasing department choose these work boots for the warehouse staff when there were cheaper ones in the catalog? B: The cheaper ones fell apart after two months, but these are much more {{BLANK}}, so in the long run the company will actually save money.",
    "cn": "A：型錄裡明明有更便宜的工作靴，採購部為什麼替倉庫員工選了這一款？ B：便宜的那款兩個月就壞了，但這款【耐用】得多，所以長遠來看公司其實會省錢。"
  },
  {
    "word": "portable",
    "pos": "adj.",
    "cn_def": "可攜帶的；手提式的",
    "en_def": "light and easy to carry",
    "sentence": "A: Our sales representatives travel to different cities every week, and they often need to show product videos to customers. What should we buy for them? B: I suggest a small {{BLANK}} projector that fits in a laptop bag, because it is light and works with both phones and computers.",
    "cn": "A：我們的業務代表每週到不同城市出差，而且常常需要給客戶看產品影片。我們該買什麼給他們？ B：我建議買一台能放進筆電包的小型【攜帶式】投影機，因為它很輕，而且手機和電腦都能用。"
  },
  {
    "word": "useful",
    "pos": "adj.",
    "cn_def": "有用的；實用的",
    "en_def": "helpful for doing something",
    "sentence": "A: I just started working in the marketing department, and there are so many reports on the shared drive. Where should I begin? B: The customer survey from last spring is the most {{BLANK}} one to read first, because it explains what our buyers want and why they choose us.",
    "cn": "A：我剛開始在行銷部工作，共用硬碟裡有好多報告。我應該從哪裡開始？ B：去年春天的顧客調查是最【有用】、最該先讀的一份，因為它說明了我們的買家想要什麼以及他們為什麼選擇我們。"
  },
  {
    "word": "useless",
    "pos": "adj.",
    "cn_def": "無用的；沒用的",
    "en_def": "not helpful or not working at all",
    "sentence": "A: Should we keep the old fax machine in the corner of the office, or can the cleaning company take it away on Friday? B: Let them take it, because nobody has sent a fax in years, and that {{BLANK}} machine is just taking up space we need for the new printer.",
    "cn": "A：我們應該留著辦公室角落那台舊傳真機，還是週五讓清潔公司搬走？ B：讓他們搬走吧，因為好幾年都沒人傳真了，那台【沒用的】機器只是佔了我們放新印表機需要的空間。"
  },
  {
    "word": "device",
    "pos": "n.",
    "cn_def": "裝置；設備",
    "en_def": "a machine or tool made for a special purpose",
    "sentence": "A: The IT department sent an email saying that everyone must update their phones before Monday. Why is it so urgent? B: They found a security problem, so any {{BLANK}} that connects to the company network needs the new software, or it may be blocked from accessing our files.",
    "cn": "A：資訊部寄了電子郵件說每個人都必須在週一前更新手機。為什麼這麼緊急？ B：他們發現了一個資安問題，所以任何連上公司網路的【裝置】都需要安裝新軟體，否則可能會被禁止存取我們的檔案。"
  },
  {
    "word": "tool",
    "pos": "n.",
    "cn_def": "工具",
    "en_def": "something you hold in your hand to do a job",
    "sentence": "A: The technician is here to fix the broken air conditioner in the meeting room, but he says he left something in his van. What does he need? B: He needs a special {{BLANK}} to open the cover safely, so he went downstairs to get it from the parking lot and will be back in five minutes.",
    "cn": "A：技術人員來修會議室壞掉的冷氣了，但他說他把東西忘在貨車上。他需要什麼？ B：他需要一種特殊的【工具】才能安全地打開外蓋，所以他下樓去停車場拿，五分鐘後就會回來。"
  },
  {
    "word": "equipment",
    "pos": "n.",
    "cn_def": "設備；器材",
    "en_def": "the machines and tools needed for a job or activity",
    "sentence": "A: The new gym on the fifth floor looks great, but when will employees be allowed to start using it before and after work? B: The opening has been delayed until next month, because some of the exercise {{BLANK}} arrived damaged and the supplier has to send replacements from Germany.",
    "cn": "A：五樓的新健身房看起來很棒，但員工什麼時候可以開始在上下班前後使用？ B：開放時間延到下個月了，因為有些運動【器材】送到時已損壞，供應商必須從德國寄來替換品。"
  },
  {
    "word": "property",
    "pos": "n.",
    "cn_def": "財產；所有物",
    "en_def": "a thing or things that someone owns",
    "sentence": "A: One of our guests left a laptop and a jacket in the hotel lobby last night. Should I keep them at the front desk? B: No, please take them to the security office, where all lost {{BLANK}} is recorded and kept safely until the owners come back to collect it.",
    "cn": "A：昨晚有位客人把筆電和外套遺留在飯店大廳。我應該把它們放在櫃檯嗎？ B：不，請把它們拿到保全室，所有遺失的【物品】都會在那裡登記並妥善保管，直到失主回來領取。"
  },
  {
    "word": "belonging",
    "pos": "n.",
    "cn_def": "所有物；隨身物品",
    "en_def": "something that a person owns and can carry",
    "sentence": "A: We're moving all the desks to the new building this weekend, and the moving company will arrive early on Saturday morning. What should staff do today? B: Please remind everyone to put a name label on every personal {{BLANK}} they want to keep, because anything left without a name may be thrown away.",
    "cn": "A：我們這個週末要把所有辦公桌搬到新大樓，搬家公司星期六一早就會到。員工今天應該做什麼？ B：請提醒大家在每一件想保留的個人【物品】上貼名字標籤，因為沒有標名字的東西都可能被丟掉。"
  },
  {
    "word": "container",
    "pos": "n.",
    "cn_def": "容器；貨櫃",
    "en_def": "a box, bottle, etc. used to hold or carry things",
    "sentence": "A: The cafeteria wants to stop using plastic bags for lunch orders next month. What will employees carry their food in instead? B: Each staff member will get a free glass {{BLANK}} with a lid, and they can bring it back to the counter every day to be washed and filled again.",
    "cn": "A：員工餐廳下個月想停止用塑膠袋裝午餐。員工改用什麼裝食物呢？ B：每位員工會得到一個免費的附蓋玻璃【容器】，每天可以拿回櫃台清洗並重新裝餐。"
  },
  {
    "word": "box",
    "pos": "n.",
    "cn_def": "箱子；盒子",
    "en_def": "a container with flat sides, often made of cardboard",
    "sentence": "A: Where should I put all the brochures that the printing company delivered for next week's trade show in Taichung? B: Please pack them into a large {{BLANK}}, write the name of the event on the side, and leave it near the back door so the driver can load it into the van.",
    "cn": "A：印刷公司送來下週台中貿易展要用的所有宣傳手冊，我該放在哪裡？ B：請把它們裝進一個大【箱子】，在側面寫上活動名稱，然後放在後門附近，讓司機可以搬上貨車。"
  },
  {
    "word": "package",
    "pos": "n.",
    "cn_def": "包裹",
    "en_def": "something wrapped up and sent by mail or courier",
    "sentence": "A: I'm expecting some important contracts from our lawyer in Taipei today, but I have meetings all afternoon. Could you help me? B: Of course. When the {{BLANK}} arrives, I'll sign for it at reception and put it on your desk, and then I'll send you a quick text message.",
    "cn": "A：我今天在等台北律師寄來的重要合約，但我整個下午都在開會。你能幫我嗎？ B：當然。【包裹】送到時，我會在接待處簽收並放在你桌上，然後傳個簡訊給你。"
  },
  {
    "word": "collection",
    "pos": "n.",
    "cn_def": "收藏；收藏品；系列",
    "en_def": "a group of similar things kept together",
    "sentence": "A: Have you visited the new history museum near the train station yet? My manager said it's a good place to take our overseas visitors. B: Yes, I went last weekend, and its {{BLANK}} of old Chinese coins and maps is amazing, so I think our guests from Canada would really enjoy it.",
    "cn": "A：你去過火車站附近的新歷史博物館了嗎？我主管說那是帶海外訪客去的好地方。 B：去過了，我上週末去的，那裡的古代中國錢幣和地圖【收藏】很驚人，所以我想我們的加拿大客人一定會很喜歡。"
  },
  {
    "word": "artifact",
    "pos": "n.",
    "cn_def": "文物；古器物",
    "en_def": "an old object made by people, often kept in a museum",
    "sentence": "A: Why is the museum closing the Egyptian exhibition room for two weeks when it is so popular with tourists this summer? B: Each {{BLANK}} in that room needs to be cleaned and checked by experts, because the humidity last month may have caused some damage to the old pottery.",
    "cn": "A：今年夏天埃及展覽室這麼受觀光客歡迎，博物館為什麼要關閉它兩週？ B：那間展覽室裡的每一件【文物】都需要由專家清潔和檢查，因為上個月的濕氣可能對古老的陶器造成了一些損壞。"
  },
  {
    "word": "ornament",
    "pos": "n.",
    "cn_def": "裝飾品；擺飾",
    "en_def": "a small object used to decorate a room or a tree",
    "sentence": "A: The lobby looks quite plain this year, and the holiday party is only one week away. Do we have anything to decorate it with? B: There is a box in the storage room with lights and a large glass {{BLANK}} for the top of the tree, so let's put everything up tomorrow morning.",
    "cn": "A：今年大廳看起來挺單調的，而且離節日派對只剩一週。我們有任何東西可以佈置嗎？ B：儲藏室裡有一個箱子，裡面有燈飾和一個放在樹頂的大型玻璃【裝飾品】，所以我們明天早上把所有東西都掛上去吧。"
  },
  {
    "word": "gadget",
    "pos": "n.",
    "cn_def": "小器具；小裝置",
    "en_def": "a small, clever machine or tool",
    "sentence": "A: What should we give our top clients as a thank-you gift this year, since they already received chocolates and wine last December? B: How about a small {{BLANK}} like a wireless phone charger with our logo on it, because people use those every day at home and at work?",
    "cn": "A：今年我們該送什麼當感謝禮給頂級客戶呢？他們去年十二月已經收過巧克力和紅酒了。 B：送一個像印有我們標誌的無線手機充電器這樣的小【裝置】如何？因為大家每天在家和工作時都會用到。"
  },
  {
    "word": "component",
    "pos": "n.",
    "cn_def": "零件；組成部分",
    "en_def": "one of the parts of a machine or system",
    "sentence": "A: Why has the factory stopped producing the new coffee machines this week when we have so many orders from stores? B: One important electronic {{BLANK}} comes from a supplier in Korea, and the shipment is late because of a storm, so the assembly line has nothing to work with.",
    "cn": "A：我們收到這麼多店家的訂單，工廠這週為什麼停止生產新咖啡機？ B：有一個重要的電子【零件】來自韓國的供應商，因為暴風雨的關係貨運延誤了，所以生產線沒有東西可以組裝。"
  },
  {
    "word": "structure",
    "pos": "n.",
    "cn_def": "結構；建築物",
    "en_def": "something that has been built, such as a building or bridge",
    "sentence": "A: Why are there engineers walking around the old warehouse with notebooks and cameras today? Is the company planning to sell it? B: No, after last week's earthquake, the manager wants them to check whether the {{BLANK}} is still safe before workers are allowed to go back inside.",
    "cn": "A：今天為什麼有工程師拿著筆記本和相機在舊倉庫附近走來走去？公司打算把它賣掉嗎？ B：不是，上週地震後，經理要他們在允許工人回到裡面之前，先檢查這個【建築結構】是否仍然安全。"
  },
  {
    "word": "manufacture",
    "pos": "v.",
    "cn_def": "製造；生產",
    "en_def": "to make goods in large numbers in a factory",
    "sentence": "A: Our sales in Southeast Asia have doubled this year, and shipping products from Europe is getting very expensive. What is the board planning to do? B: They want to open a new factory in Vietnam next year, so we can {{BLANK}} our kitchen appliances closer to our customers and lower delivery costs.",
    "cn": "A：我們今年在東南亞的銷售額翻倍了，而從歐洲運送產品變得非常昂貴。董事會打算怎麼做？ B：他們想明年在越南開設一間新工廠，這樣我們就能在更靠近客戶的地方【製造】廚房家電，並降低運費。"
  },
  {
    "word": "design",
    "pos": "v.",
    "cn_def": "設計",
    "en_def": "to plan how something will look and work",
    "sentence": "A: The marketing team needs a new poster for the summer sale, but our usual artist is on vacation until the end of the month. B: I know a talented freelancer who can {{BLANK}} it for us in three days, and her prices are reasonable, so I'll send you her portfolio this afternoon.",
    "cn": "A：行銷團隊需要一張夏季特賣的新海報，但我們平常合作的美術人員休假到月底。 B：我認識一位很有才華的自由工作者，她能在三天內幫我們【設計】，而且價格合理，我今天下午把她的作品集寄給你。"
  },
  {
    "word": "assemble",
    "pos": "v.",
    "cn_def": "組裝；裝配",
    "en_def": "to put the parts of something together",
    "sentence": "A: The new desks for the training room were delivered this morning, but they are still in flat boxes. Who is going to put them together? B: The furniture company will send two workers tomorrow to {{BLANK}} them, and it should take about three hours, so the room will be ready by Thursday.",
    "cn": "A：訓練室的新桌子今天早上送到了，但還裝在扁平的箱子裡。誰要把它們組合起來？ B：家具公司明天會派兩位工人來【組裝】，大約需要三個小時，所以房間週四前就會準備好。"
  },
  {
    "word": "construct",
    "pos": "v.",
    "cn_def": "建造；建築",
    "en_def": "to build something such as a building, road or bridge",
    "sentence": "A: I heard that the city is going to build a new bridge near our factory. Will that affect our deliveries next year? B: Yes, they plan to {{BLANK}} it over the next eighteen months, so some roads will be closed and our trucks may need to take a longer route.",
    "cn": "A：我聽說市政府要在我們工廠附近蓋一座新橋。這會影響我們明年的送貨嗎？ B：會，他們計畫在接下來十八個月內【建造】這座橋，所以有些道路會封閉，我們的卡車可能需要繞遠路。"
  },
  {
    "word": "polish",
    "pos": "v.",
    "cn_def": "擦亮；磨光",
    "en_def": "to rub something to make it clean and shiny",
    "sentence": "A: The company president is visiting our branch on Monday morning, and the reception area doesn't look its best right now. What can we do? B: Let's ask the cleaning team to {{BLANK}} the wooden floor and the metal door handles on Sunday evening, so everything shines when she walks in.",
    "cn": "A：總裁星期一早上要來我們分公司視察，接待區現在看起來不太好。我們能做什麼？ B：我們請清潔團隊在週日晚上把木地板和金屬門把【擦亮】，這樣她走進來時一切都閃閃發亮。"
  },
  {
    "word": "display",
    "pos": "v.",
    "cn_def": "展示；陳列",
    "en_def": "to put things where people can see them easily",
    "sentence": "A: Our new line of handbags arrives at the store tomorrow, and the manager wants customers to notice them right away. Where should we put them? B: Let's {{BLANK}} them in the front window under the bright lights, because everyone walking past on the street will be able to see them clearly.",
    "cn": "A：我們的新款手提包明天會送到店裡，經理希望顧客馬上注意到它們。我們應該放在哪裡？ B：我們把它們【陳列】在前面櫥窗的明亮燈光下吧，這樣街上每個路過的人都能清楚看到。"
  },
  {
    "word": "ordinary",
    "pos": "adj.",
    "cn_def": "普通的；平凡的",
    "en_def": "normal and not special",
    "sentence": "A: Why are customers willing to pay twice as much for the coffee mugs from that small shop downtown? They look quite simple to me. B: They may look {{BLANK}}, but each one is made by hand by a local artist, and the special clay keeps drinks hot for a long time.",
    "cn": "A：為什麼顧客願意花兩倍的錢買市中心那家小店的咖啡杯？我覺得它們看起來挺簡單的。 B：它們也許看起來很【普通】，但每一個都是當地藝術家手工製作的，而且特殊的陶土能讓飲料長時間保溫。"
  },
  {
    "word": "unique",
    "pos": "adj.",
    "cn_def": "獨特的；獨一無二的",
    "en_def": "being the only one of its kind",
    "sentence": "A: Our hotel wants to give guests a special gift when they check in, but most hotels already give chocolates or small bottles of water. B: Why not offer a {{BLANK}} handmade bookmark with a picture of our city on it, since guests can't find it anywhere else and will remember us?",
    "cn": "A：我們飯店想在客人入住時送一份特別的禮物，但大多數飯店都已經送巧克力或小瓶水了。 B：何不送一個印有我們城市圖片的【獨特】手工書籤？因為客人在別處都找不到，而且會記得我們。"
  }
];

const MCQS = [
  {
    "q": "The online store sells over two thousand products. Each _____ in the catalog has a photo, a price, and a short description.",
    "options": [
      "item",
      "weight",
      "texture",
      "surface"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "These shopping bags are made from recycled plastic bottles. The company chose this _____ because it is strong and good for the environment.",
    "options": [
      "ornament",
      "collection",
      "material",
      "artifact"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The new office building has an unusual design. From the air, it has the _____ of a large star with five points.",
    "options": [
      "weight",
      "shape",
      "texture",
      "material"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "These shoes are too small for me. Do you have them in a larger _____, maybe one number up?",
    "options": [
      "weight",
      "surface",
      "structure",
      "size"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Each checked suitcase must not be more than twenty-three kilograms. Please put your bag on the scale so we can check its _____.",
    "options": [
      "shape",
      "texture",
      "weight",
      "collection"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Do not put hot cups directly on the new wooden table. The _____ can be damaged easily by heat and water.",
    "options": [
      "surface",
      "device",
      "package",
      "gadget"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "This fabric feels very soft and smooth when you touch it. Customers love its _____ and often buy it for baby clothes.",
    "options": [
      "weight",
      "structure",
      "equipment",
      "texture"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Please handle these glass vases very carefully. They are extremely _____ and may break if the box is dropped.",
    "options": [
      "durable",
      "fragile",
      "portable",
      "useful"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "These hiking boots are made from thick leather and strong rubber. They are very _____ and can last for many years.",
    "options": [
      "durable",
      "fragile",
      "useless",
      "ordinary"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The new speaker is small and light enough to carry in one hand. This _____ model is perfect for outdoor parties.",
    "options": [
      "fragile",
      "ordinary",
      "portable",
      "useless"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The training guide explains every step clearly with pictures. New employees find it very _____ during their first week.",
    "options": [
      "useless",
      "useful",
      "fragile",
      "solid"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Please turn off your phone before the concert begins. Any electronic _____ that makes noise will disturb the performers.",
    "options": [
      "ornament",
      "material",
      "texture",
      "device"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "A hammer is the most basic _____ for building furniture. You can use it to put nails into wood.",
    "options": [
      "liquid",
      "texture",
      "tool",
      "surface"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The hospital bought new medical _____ for its emergency room. The machines will help doctors treat patients more quickly.",
    "options": [
      "equipment",
      "ornament",
      "texture",
      "collection"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The hotel is not responsible for lost or stolen _____. Guests should keep their valuables in the safe in their room.",
    "options": [
      "shape",
      "texture",
      "structure",
      "property"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Please store the leftover soup in a plastic _____ with a tight lid. Then put it in the refrigerator overnight.",
    "options": [
      "ornament",
      "container",
      "structure",
      "texture"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The courier delivered a large _____ to the front desk this morning. It contains the brochures for next week's conference.",
    "options": [
      "package",
      "texture",
      "surface",
      "structure"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The museum has a famous _____ of Japanese paintings. More than three hundred works are shown in the east wing.",
    "options": [
      "texture",
      "component",
      "collection",
      "surface"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The workers found an ancient clay pot while digging the subway tunnel. Experts believe this _____ is over two thousand years old.",
    "options": [
      "gadget",
      "artifact",
      "component",
      "equipment"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "We hung a small glass bird on the Christmas tree in the lobby. The colorful _____ was a gift from a client in Germany.",
    "options": [
      "equipment",
      "liquid",
      "property",
      "ornament"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "My brother loves new technology and always buys the latest phones. His favorite _____ is a tiny camera that clips onto his glasses.",
    "options": [
      "artifact",
      "liquid",
      "gadget",
      "texture"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The car factory stopped production because of a parts shortage. Every engine needs this small electronic _____ to start.",
    "options": [
      "component",
      "collection",
      "ornament",
      "texture"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The old bridge was badly damaged in the storm. Engineers must check whether the whole _____ is still safe for traffic.",
    "options": [
      "texture",
      "liquid",
      "gadget",
      "structure"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Our company plans to _____ electric bicycles in a new factory. Production will start in Kaohsiung next spring.",
    "options": [
      "polish",
      "manufacture",
      "display",
      "construct"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The bookshelf comes in a flat box with screws and instructions. It takes about thirty minutes to _____ it at home.",
    "options": [
      "assemble",
      "display",
      "manufacture",
      "design"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The city will _____ a new sports center next to the train station. The building should be finished in two years.",
    "options": [
      "polish",
      "assemble",
      "construct",
      "display"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The silver trophies look dull after a year in the glass case. Please _____ them with a soft cloth before the award ceremony.",
    "options": [
      "construct",
      "polish",
      "manufacture",
      "assemble"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "The bakery likes to _____ its fresh cakes in the front window. People walking by can see them from the street.",
    "options": [
      "construct",
      "manufacture",
      "polish",
      "display"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "This pen looks quite _____ from the outside, just like any other pen. In fact, it can also record voice messages.",
    "options": [
      "fragile",
      "portable",
      "ordinary",
      "durable"
    ],
    "answer": 2,
    "vocabIndex": 35
  },
  {
    "q": "Every piece of jewelry in this shop is handmade by local artists. No two pieces are the same, so each one is _____.",
    "options": [
      "unique",
      "ordinary",
      "useless",
      "fragile"
    ],
    "answer": 0,
    "vocabIndex": 36
  }
];

const LOOKUP = {
  "item": {
    "pos": "n.",
    "en_def": "a single thing on a list or in a group",
    "cn_def": "項目；品項；物品"
  },
  "thing": {
    "pos": "n.",
    "en_def": "an object that you do not name exactly",
    "cn_def": "東西；物品"
  },
  "material": {
    "pos": "n.",
    "en_def": "what something is made of",
    "cn_def": "材料；原料"
  },
  "shape": {
    "pos": "n.",
    "en_def": "the outer form of something",
    "cn_def": "形狀"
  },
  "size": {
    "pos": "n.",
    "en_def": "how big or small something is",
    "cn_def": "尺寸；大小"
  },
  "weight": {
    "pos": "n.",
    "en_def": "how heavy something is",
    "cn_def": "重量"
  },
  "surface": {
    "pos": "n.",
    "en_def": "the top or outside layer of something",
    "cn_def": "表面"
  },
  "texture": {
    "pos": "n.",
    "en_def": "the way something feels when you touch it",
    "cn_def": "質地；觸感"
  },
  "solid": {
    "pos": "adj.",
    "en_def": "hard and firm; not liquid or gas",
    "cn_def": "堅固的；實心的；固體的"
  },
  "liquid": {
    "pos": "n.",
    "en_def": "a substance like water that can flow",
    "cn_def": "液體"
  },
  "fragile": {
    "pos": "adj.",
    "en_def": "easily broken or damaged",
    "cn_def": "易碎的；脆弱的"
  },
  "durable": {
    "pos": "adj.",
    "en_def": "able to last a long time without breaking",
    "cn_def": "耐用的；持久的"
  },
  "portable": {
    "pos": "adj.",
    "en_def": "light and easy to carry",
    "cn_def": "可攜帶的；手提式的"
  },
  "useful": {
    "pos": "adj.",
    "en_def": "helpful for doing something",
    "cn_def": "有用的；實用的"
  },
  "useless": {
    "pos": "adj.",
    "en_def": "not helpful or not working at all",
    "cn_def": "無用的；沒用的"
  },
  "device": {
    "pos": "n.",
    "en_def": "a machine or tool made for a special purpose",
    "cn_def": "裝置；設備"
  },
  "tool": {
    "pos": "n.",
    "en_def": "something you hold in your hand to do a job",
    "cn_def": "工具"
  },
  "equipment": {
    "pos": "n.",
    "en_def": "the machines and tools needed for a job or activity",
    "cn_def": "設備；器材"
  },
  "property": {
    "pos": "n.",
    "en_def": "a thing or things that someone owns",
    "cn_def": "財產；所有物"
  },
  "belonging": {
    "pos": "n.",
    "en_def": "something that a person owns and can carry",
    "cn_def": "所有物；隨身物品"
  },
  "container": {
    "pos": "n.",
    "en_def": "a box, bottle, etc. used to hold or carry things",
    "cn_def": "容器；貨櫃"
  },
  "box": {
    "pos": "n.",
    "en_def": "a container with flat sides, often made of cardboard",
    "cn_def": "箱子；盒子"
  },
  "package": {
    "pos": "n.",
    "en_def": "something wrapped up and sent by mail or courier",
    "cn_def": "包裹"
  },
  "collection": {
    "pos": "n.",
    "en_def": "a group of similar things kept together",
    "cn_def": "收藏；收藏品；系列"
  },
  "artifact": {
    "pos": "n.",
    "en_def": "an old object made by people, often kept in a museum",
    "cn_def": "文物；古器物"
  },
  "ornament": {
    "pos": "n.",
    "en_def": "a small object used to decorate a room or a tree",
    "cn_def": "裝飾品；擺飾"
  },
  "gadget": {
    "pos": "n.",
    "en_def": "a small, clever machine or tool",
    "cn_def": "小器具；小裝置"
  },
  "component": {
    "pos": "n.",
    "en_def": "one of the parts of a machine or system",
    "cn_def": "零件；組成部分"
  },
  "structure": {
    "pos": "n.",
    "en_def": "something that has been built, such as a building or bridge",
    "cn_def": "結構；建築物"
  },
  "manufacture": {
    "pos": "v.",
    "en_def": "to make goods in large numbers in a factory",
    "cn_def": "製造；生產"
  },
  "design": {
    "pos": "v.",
    "en_def": "to plan how something will look and work",
    "cn_def": "設計"
  },
  "assemble": {
    "pos": "v.",
    "en_def": "to put the parts of something together",
    "cn_def": "組裝；裝配"
  },
  "construct": {
    "pos": "v.",
    "en_def": "to build something such as a building, road or bridge",
    "cn_def": "建造；建築"
  },
  "polish": {
    "pos": "v.",
    "en_def": "to rub something to make it clean and shiny",
    "cn_def": "擦亮；磨光"
  },
  "display": {
    "pos": "v.",
    "en_def": "to put things where people can see them easily",
    "cn_def": "展示；陳列"
  },
  "ordinary": {
    "pos": "adj.",
    "en_def": "normal and not special",
    "cn_def": "普通的；平凡的"
  },
  "unique": {
    "pos": "adj.",
    "en_def": "being the only one of its kind",
    "cn_def": "獨特的；獨一無二的"
  }
};

const EXTRA_GLOSSES = {};
