// Topic 207 Quiz Data: Joke 笑話
// Source word list: https://www.examword.com/group-topic/joke — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T207 - Joke 笑話",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "humor",
    "pos": "n.",
    "cn_def": "幽默；幽默感",
    "en_def": "the quality of being funny, or the ability to see what is funny",
    "sentence": "A: The new sales manager seems very serious, so how did she manage to make everyone relax during her first team meeting yesterday? B: She used a little gentle {{BLANK}} about her own terrible sense of direction, telling us how she got lost in the parking garage, and suddenly the whole room felt much friendlier.",
    "cn": "A：新來的業務經理看起來很嚴肅，她昨天第一次開團隊會議時是怎麼讓大家放鬆的？ B：她用了一點溫和的【幽默】，講她自己方向感很差的事，說她如何在停車場迷路，整個會議室突然就變得友善多了。"
  },
  {
    "word": "funny",
    "pos": "adj.",
    "cn_def": "好笑的；有趣的",
    "en_def": "making you laugh or smile",
    "sentence": "A: Did you watch the video that the marketing team made for the company's anniversary party last Friday evening? B: Yes, it was really {{BLANK}}, especially the part where the CEO pretended to be a delivery driver, and I think customers will enjoy it when we post it online next week.",
    "cn": "A：你看了行銷團隊為上週五晚上公司週年派對製作的影片嗎？ B：看了，真的很【好笑】，尤其是執行長假扮成送貨司機的那一段，我想我們下週把它放上網路時，顧客會很喜歡。"
  },
  {
    "word": "laugh",
    "pos": "v.",
    "cn_def": "笑；發笑",
    "en_def": "to make sounds with your voice because something is funny",
    "sentence": "A: Why was everyone in the break room so noisy during lunch, and did something happen with the new coffee machine? B: Kevin told a story about spilling coffee on his laptop during an online meeting with a client, and we couldn't stop ourselves, so we started to {{BLANK}} loudly for almost five minutes.",
    "cn": "A：為什麼午餐時間休息室裡大家這麼吵，是新咖啡機出了什麼事嗎？ B：凱文講了他在跟客戶開線上會議時把咖啡灑在筆電上的故事，我們忍不住，就開始大聲【笑】了將近五分鐘。"
  },
  {
    "word": "laughter",
    "pos": "n.",
    "cn_def": "笑聲；笑",
    "en_def": "the sound or act of laughing",
    "sentence": "A: How did the training workshop go this afternoon, and were the new employees interested in the safety rules? B: It went well, because the trainer acted out some common mistakes in a funny way, and the room was full of {{BLANK}}, so people remembered the rules much better than usual.",
    "cn": "A：今天下午的培訓工作坊進行得怎麼樣，新員工對安全規則有興趣嗎？ B：很順利，因為講師用有趣的方式演出一些常見錯誤，整個房間充滿了【笑聲】，所以大家比平常更記得那些規則。"
  },
  {
    "word": "punchline",
    "pos": "n.",
    "cn_def": "笑點；（笑話的）妙語",
    "en_def": "the last part of a joke that makes it funny",
    "sentence": "A: You looked a bit embarrassed after your speech at the retirement dinner for Mr. Lin last night, so what went wrong? B: I told a joke about his famous long meetings, but I was so nervous that I forgot the {{BLANK}}, so the guests just waited in silence until I moved on to the next part.",
    "cn": "A：昨晚林先生的退休晚宴上，你演講完看起來有點尷尬，出了什麼問題？ B：我講了一個關於他著名的冗長會議的笑話，但我太緊張，忘了【笑點】，所以賓客們只是安靜地等著，直到我繼續講下一段。"
  },
  {
    "word": "comedian",
    "pos": "n.",
    "cn_def": "喜劇演員；諧星",
    "en_def": "a person whose job is to make people laugh",
    "sentence": "A: Who are we inviting to perform at the year-end party, since the band we booked last year was too expensive for our budget? B: The events committee hired a local {{BLANK}} who tells jokes about office life, and she will do a thirty-minute show right after the awards ceremony and dinner.",
    "cn": "A：我們要邀請誰在尾牙表演？去年訂的樂團對我們的預算來說太貴了。 B：活動委員會請了一位當地的【喜劇演員】，她講的是關於辦公室生活的笑話，會在頒獎典禮和晚餐之後表演三十分鐘。"
  },
  {
    "word": "comedy",
    "pos": "n.",
    "cn_def": "喜劇",
    "en_def": "a funny film, play, or show",
    "sentence": "A: Which movie should we choose for the staff movie night on Friday, since many people are tired after the busy quarter? B: I think a light {{BLANK}} would be best, because everyone needs something relaxing and funny, not a long serious drama that makes them feel even more stressed.",
    "cn": "A：週五員工電影之夜我們該選哪部電影？忙碌的一季過後很多人都很累。 B：我覺得輕鬆的【喜劇】最好，因為大家需要一些放鬆又有趣的東西，而不是一部讓人更有壓力的冗長嚴肅劇情片。"
  },
  {
    "word": "wit",
    "pos": "n.",
    "cn_def": "機智；風趣",
    "en_def": "the ability to say clever and funny things quickly",
    "sentence": "A: What makes our new spokesperson so popular with reporters at the press conferences every month? B: She answers difficult questions with quick {{BLANK}}, making clever comments that make reporters smile, but she still gives clear information about our products, so the news stories about us are usually positive.",
    "cn": "A：我們的新發言人為什麼在每個月的記者會上這麼受記者歡迎？ B：她用敏捷的【機智】回答困難的問題，說出讓記者微笑的巧妙評論，但仍然清楚提供產品資訊，所以關於我們的新聞報導通常都很正面。"
  },
  {
    "word": "sarcasm",
    "pos": "n.",
    "cn_def": "諷刺；挖苦",
    "en_def": "saying the opposite of what you mean to show you are annoyed or to be funny",
    "sentence": "A: When Tom said, 'Great, another meeting,' during the planning session this morning, was he really happy about it? B: No, that was {{BLANK}}, because he already has six meetings today, and he actually meant that he was tired of spending so much time in conference rooms instead of finishing his reports.",
    "cn": "A：今天早上規劃會議時，湯姆說「太好了，又一場會議」，他真的很高興嗎？ B：不，那是【諷刺】，因為他今天已經有六場會議了，他其實是說他厭倦了花這麼多時間待在會議室，而不是完成他的報告。"
  },
  {
    "word": "irony",
    "pos": "n.",
    "cn_def": "諷刺；反諷",
    "en_def": "a situation that is funny or strange because it is the opposite of what you expect",
    "sentence": "A: Did you hear that the company selling time-management software delivered its own product to customers three months late? B: Yes, the {{BLANK}} was clear to everyone in the industry, and many people joked online that the developers should have used their own planning app to meet the deadline.",
    "cn": "A：你有沒有聽說那家賣時間管理軟體的公司，自己的產品晚了三個月才交給客戶？ B：有，其中的【諷刺意味】業界每個人都看得很清楚，很多人在網路上開玩笑說開發人員應該用自己的規劃應用程式來趕上截止日期。"
  },
  {
    "word": "satire",
    "pos": "n.",
    "cn_def": "諷刺作品；諷刺文學",
    "en_def": "writing or drawing that uses humor to criticize people or ideas",
    "sentence": "A: Why is the cartoon in this morning's business newspaper getting so much attention on social media today? B: It is a clever {{BLANK}} of big banks, showing managers giving themselves huge bonuses while customers wait in long lines, and many readers think it criticizes the industry in a smart way.",
    "cn": "A：今天早上商業報紙上的那則漫畫為什麼在社群媒體上引起這麼多關注？ B：那是一則對大銀行的巧妙【諷刺作品】，畫出經理們給自己發巨額獎金，而顧客卻在大排長龍，很多讀者認為它以聰明的方式批評了這個產業。"
  },
  {
    "word": "tease",
    "pos": "v.",
    "cn_def": "取笑；逗弄",
    "en_def": "to laugh at someone or make jokes about them, in a friendly or unkind way",
    "sentence": "A: Why did Amy look a little upset after the team lunch at the Italian restaurant near the office today? B: Some colleagues started to {{BLANK}} her about her new haircut, and although they were only joking, she felt uncomfortable, so I told them to stop and talk about something else.",
    "cn": "A：今天在公司附近的義大利餐廳團隊午餐後，艾美為什麼看起來有點不高興？ B：有些同事開始【取笑】她的新髮型，雖然他們只是開玩笑，她還是覺得不舒服，所以我叫他們停下來，聊點別的。"
  },
  {
    "word": "giggle",
    "pos": "v.",
    "cn_def": "咯咯地笑；傻笑",
    "en_def": "to laugh in a quiet, silly way",
    "sentence": "A: Was the children's tour of our chocolate factory successful, and did the young visitors behave well yesterday? B: Yes, they listened carefully, but they began to {{BLANK}} when the guide wore a funny chef's hat, and they kept smiling and whispering to each other until the tour ended.",
    "cn": "A：昨天孩子們參觀我們巧克力工廠的導覽成功嗎？小訪客們表現得好嗎？ B：很好，他們聽得很認真，但當導覽員戴上一頂滑稽的廚師帽時，他們開始【咯咯地笑】，一直微笑並互相低聲說話，直到導覽結束。"
  },
  {
    "word": "chuckle",
    "pos": "v.",
    "cn_def": "輕聲笑；暗笑",
    "en_def": "to laugh quietly, often with your mouth closed",
    "sentence": "A: How did the board members react when the finance director showed the cartoon about the coffee budget during the meeting? B: Most of them began to {{BLANK}} quietly, because the picture was clever but not too silly, and then they continued the serious discussion about next year's spending plan.",
    "cn": "A：財務長在會議中展示那張關於咖啡預算的漫畫時，董事們有什麼反應？ B：他們大多開始【輕聲笑】了起來，因為那張圖很巧妙但又不會太傻氣，然後他們繼續認真討論明年的支出計畫。"
  },
  {
    "word": "amuse",
    "pos": "v.",
    "cn_def": "逗樂；使開心",
    "en_def": "to make someone laugh or keep them happy and busy",
    "sentence": "A: What can we do to keep customers' children busy while their parents wait for the car repairs at our service center? B: We could put a small play area with colorful books and toys in the lobby, which would {{BLANK}} the kids for an hour, so parents can relax and read the price list.",
    "cn": "A：顧客在我們的服務中心等修車時，我們能做什麼讓他們的孩子有事做？ B：我們可以在大廳設一個小遊戲區，放些彩色的書和玩具，可以【逗樂】孩子們一個小時，讓家長能放鬆並看看價目表。"
  },
  {
    "word": "amusing",
    "pos": "adj.",
    "cn_def": "有趣的；好笑的",
    "en_def": "funny and enjoyable",
    "sentence": "A: Did you enjoy the guest speaker at the marketing conference in Taichung, or was the talk too long for you? B: I enjoyed it a lot, because he shared many {{BLANK}} stories about mistakes he made when he started his company, and those stories also taught us useful lessons about advertising.",
    "cn": "A：你喜歡台中行銷研討會的客座講者嗎？還是對你來說演講太長了？ B：我很喜歡，因為他分享了很多他創業時犯錯的【有趣】故事，那些故事也教了我們關於廣告的實用課程。"
  },
  {
    "word": "hilarious",
    "pos": "adj.",
    "cn_def": "非常好笑的；爆笑的",
    "en_def": "extremely funny",
    "sentence": "A: Have you seen the new television advertisement for our sports drinks, which started showing on all major channels this week? B: Yes, it is absolutely {{BLANK}}, especially when the old man beats the young athletes in the race, and my whole family laughed so hard that we watched it three times online.",
    "cn": "A：你看過我們運動飲料的新電視廣告了嗎？這週開始在所有主要頻道播出。 B：看了，簡直【爆笑】，尤其是那位老先生在比賽中打敗年輕運動員的時候，我們全家笑到不行，還在網路上看了三遍。"
  },
  {
    "word": "silly",
    "pos": "adj.",
    "cn_def": "傻氣的；愚蠢的",
    "en_def": "not serious or sensible; a little foolish",
    "sentence": "A: Should I wear the reindeer hat that the human resources team gave us to the client meeting this afternoon? B: No, it might look {{BLANK}} in front of an important client, so keep it for the office holiday party next week, when everyone will be wearing fun costumes anyway.",
    "cn": "A：今天下午的客戶會議，我該戴人資部發給我們的麋鹿帽嗎？ B：不要，在重要客戶面前可能會顯得很【傻氣】，留著下週辦公室節日派對再戴吧，反正到時候大家都會穿有趣的服裝。"
  },
  {
    "word": "ridiculous",
    "pos": "adj.",
    "cn_def": "荒謬的；可笑的",
    "en_def": "very silly or unreasonable",
    "sentence": "A: Did you see that the hotel near the convention center is charging eight hundred dollars a night during the trade fair next month? B: Yes, that price is {{BLANK}} for such a small room, so I booked a cheaper place near the train station and will take a taxi every morning instead.",
    "cn": "A：你有沒有看到會展中心附近那家飯店，下個月商展期間一晚要價八百美元？ B：看到了，那麼小的房間這個價格太【荒謬】了，所以我訂了火車站附近比較便宜的地方，每天早上改搭計程車。"
  },
  {
    "word": "playful",
    "pos": "adj.",
    "cn_def": "愛玩的；活潑逗趣的",
    "en_def": "full of fun and not serious",
    "sentence": "A: What kind of style do you want for the new advertisements for our children's snack brand, which will appear on buses next month? B: We want a {{BLANK}} design with bright colors and cartoon animals, because parents and kids should feel happy and relaxed when they see our products.",
    "cn": "A：我們兒童零食品牌的新廣告，下個月會出現在公車上，你想要什麼樣的風格？ B：我們想要一種【活潑逗趣】的設計，有明亮的色彩和卡通動物，因為家長和孩子看到我們的產品時應該感到開心和放鬆。"
  },
  {
    "word": "banter",
    "pos": "n.",
    "cn_def": "玩笑話；打趣",
    "en_def": "friendly joking talk between people",
    "sentence": "A: Do the sales and design teams get along well, or is there tension between them since the new office layout was introduced? B: They get along very well, and there is always some friendly {{BLANK}} between them during coffee breaks, which makes the long project meetings feel much more relaxed.",
    "cn": "A：業務團隊和設計團隊相處得好嗎？自從新的辦公室格局實施後，他們之間有緊張關係嗎？ B：他們相處得很好，休息喝咖啡時彼此總有一些友善的【玩笑話】，讓冗長的專案會議感覺輕鬆多了。"
  },
  {
    "word": "prank",
    "pos": "n.",
    "cn_def": "惡作劇",
    "en_def": "a trick done to someone to make others laugh",
    "sentence": "A: Why was the manager so angry when he arrived at the office early this morning, before most of the staff came in? B: Someone played a {{BLANK}} on him by covering his whole desk with sticky notes, and although it was funny, it took him almost an hour to clean everything up.",
    "cn": "A：經理今天一早在大多數員工到之前進辦公室時，為什麼那麼生氣？ B：有人對他【惡作劇】，把他整張桌子都貼滿便利貼，雖然很好笑，但他花了將近一個小時才清理乾淨。"
  },
  {
    "word": "trick",
    "pos": "n.",
    "cn_def": "把戲；戲法；詭計",
    "en_def": "a clever action that surprises or fools people, often for fun",
    "sentence": "A: How did the magician at the client appreciation dinner make the guests so excited last night? B: He did a card {{BLANK}} where he found the chairman's card inside a sealed envelope on the table, and nobody could explain how he did it, so people talked about it all evening.",
    "cn": "A：昨晚客戶答謝晚宴上的魔術師是怎麼讓賓客這麼興奮的？ B：他表演了一個紙牌【戲法】，在桌上一個密封的信封裡找到董事長選的牌，沒人能解釋他是怎麼做到的，所以大家整晚都在討論。"
  },
  {
    "word": "gag",
    "pos": "n.",
    "cn_def": "笑話；搞笑橋段",
    "en_def": "a short joke or funny action",
    "sentence": "A: Why did the audience laugh so much during the opening of the new product video at the launch event yesterday? B: There was a visual {{BLANK}} where the robot vacuum kept chasing the company's cat around the living room, and it showed the product's features in a funny and memorable way.",
    "cn": "A：昨天發表會上新產品影片開場時，觀眾為什麼笑得這麼厲害？ B：裡面有一個視覺【搞笑橋段】，掃地機器人一直在客廳裡追著公司的貓跑，以有趣又令人難忘的方式展示了產品功能。"
  },
  {
    "word": "clown",
    "pos": "n.",
    "cn_def": "小丑",
    "en_def": "a performer with funny clothes and a painted face who makes people laugh",
    "sentence": "A: Are we hiring any entertainers for the family day at the company sports park next Saturday afternoon? B: Yes, we booked a {{BLANK}} with a red nose and giant shoes who will make balloon animals for the children, while the adults join the cooking competition near the lake.",
    "cn": "A：下週六下午在公司運動園區舉行的家庭日，我們有請表演者嗎？ B：有，我們訂了一位戴紅鼻子、穿巨大鞋子的【小丑】，他會為孩子們做氣球動物，同時大人們參加湖邊的烹飪比賽。"
  },
  {
    "word": "mimic",
    "pos": "v.",
    "cn_def": "模仿",
    "en_def": "to copy the way someone talks or moves, often to be funny",
    "sentence": "A: Why is our new sales trainee so popular with customers in the shop, even though she only started last week? B: She can {{BLANK}} the voices of famous cartoon characters perfectly, so children love talking to her, and their parents usually stay longer and buy more toys.",
    "cn": "A：我們的新業務實習生才上週開始，為什麼這麼受店裡顧客歡迎？ B：她能完美【模仿】知名卡通人物的聲音，所以孩子們都很喜歡跟她說話，他們的父母通常也會待更久、買更多玩具。"
  },
  {
    "word": "exaggerate",
    "pos": "v.",
    "cn_def": "誇大；誇張",
    "en_def": "to make something seem bigger, better, or worse than it really is",
    "sentence": "A: Did Mark really say that thousands of people visited our booth at the trade show in Singapore last week? B: He likes to {{BLANK}} when he tells stories, because actually about three hundred people came, but that is still a good result for a small company like ours.",
    "cn": "A：馬克真的說上週新加坡商展有成千上萬的人參觀我們的攤位嗎？ B：他講故事時喜歡【誇大】，其實大約只有三百人來，不過對我們這樣的小公司來說，那仍然是不錯的成果。"
  },
  {
    "word": "entertain",
    "pos": "v.",
    "cn_def": "娛樂；招待",
    "en_def": "to keep people interested and happy, or to give guests food and drinks",
    "sentence": "A: What is your plan for the visitors from our Japanese partner company who arrive on Thursday evening? B: After the factory tour, we will {{BLANK}} them at a traditional restaurant with live music, because building a friendly relationship is important before we discuss the new contract on Friday.",
    "cn": "A：我們日本合作公司的訪客週四晚上抵達，你有什麼計畫？ B：工廠參觀後，我們會在一家有現場音樂的傳統餐廳【招待】他們，因為在週五討論新合約之前，建立友好關係很重要。"
  },
  {
    "word": "lighthearted",
    "pos": "adj.",
    "cn_def": "輕鬆愉快的",
    "en_def": "cheerful and not serious",
    "sentence": "A: How should I write the opening of the company newsletter this month, since we have both good news and some difficult changes? B: Start with a {{BLANK}} story about the office dog to keep the mood positive, and then explain the changes clearly and honestly in the next section.",
    "cn": "A：這個月的公司電子報開頭我該怎麼寫？我們既有好消息，也有一些困難的變動。 B：先用一則關於辦公室狗狗的【輕鬆愉快】的故事來保持正面氣氛，然後在下一段清楚誠實地說明那些變動。"
  },
  {
    "word": "comic",
    "pos": "adj.",
    "cn_def": "喜劇的；滑稽的",
    "en_def": "funny; related to comedy",
    "sentence": "A: What kind of books sell best in our bookstore near the train station, especially among young office workers? B: Light {{BLANK}} novels with silly characters and short chapters are very popular, because people enjoy reading something cheerful during their long commute home after work.",
    "cn": "A：我們火車站附近的書店裡，哪類書賣得最好，尤其是在年輕上班族之間？ B：有傻氣角色和短章節的輕鬆【喜劇】小說非常受歡迎，因為人們喜歡在下班回家的漫長通勤中讀些愉快的東西。"
  },
  {
    "word": "witty",
    "pos": "adj.",
    "cn_def": "風趣機智的",
    "en_def": "clever and funny in what you say",
    "sentence": "A: Who do you think should host the annual awards ceremony this year, since last year's host spoke too slowly? B: I suggest Linda from public relations, because she is very {{BLANK}} and always makes clever remarks, yet she also keeps the program moving on time.",
    "cn": "A：你覺得今年的年度頒獎典禮該由誰主持？去年的主持人說話太慢了。 B：我建議公關部的琳達，因為她非常【風趣機智】，總能說出巧妙的話，同時也能讓節目準時進行。"
  },
  {
    "word": "laughable",
    "pos": "adj.",
    "cn_def": "可笑的；荒唐的",
    "en_def": "so silly or poor that it should not be taken seriously",
    "sentence": "A: What did you think of the offer that the buyer made for our old office building downtown yesterday afternoon? B: Frankly, the amount was {{BLANK}}, only about half of the market value, so we rejected it immediately and will wait for a more serious buyer next month.",
    "cn": "A：你覺得買家昨天下午對我們市中心舊辦公大樓的出價如何？ B：坦白說，那個金額【可笑】，只有市價的一半左右，所以我們立刻拒絕了，下個月再等一位更有誠意的買家。"
  },
  {
    "word": "jokingly",
    "pos": "adv.",
    "cn_def": "開玩笑地",
    "en_def": "in a way that is not serious; as a joke",
    "sentence": "A: Is it true that the general manager plans to move the whole marketing department to the roof of the building? B: No, he only said that {{BLANK}} because our office is so crowded, but he really is looking for a bigger floor for us in the new building next year.",
    "cn": "A：總經理真的打算把整個行銷部門搬到大樓屋頂嗎？ B：不是，他只是【開玩笑地】那樣說，因為我們辦公室太擠了，不過他確實在為我們尋找明年新大樓裡更大的樓層。"
  },
  {
    "word": "cheerfully",
    "pos": "adv.",
    "cn_def": "愉快地；欣然地",
    "en_def": "in a happy and positive way",
    "sentence": "A: How did the hotel receptionist handle the guest who complained loudly about the noisy air conditioner last night? B: She smiled and answered {{BLANK}}, then quickly moved him to a quieter room with a better view, and the next morning he even left a positive review online.",
    "cn": "A：昨晚那位大聲抱怨冷氣很吵的房客，飯店櫃檯人員是怎麼處理的？ B：她微笑著【愉快地】回應，然後迅速把他換到一間更安靜、景觀更好的房間，隔天早上他甚至在網路上留了好評。"
  }
];

const MCQS = [
  {
    "q": "Our new team leader has a great sense of _____. She often makes everyone smile during long and stressful planning meetings.",
    "options": [
      "humor",
      "prank",
      "clown",
      "banter"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Isn't it _____ how things work out? We missed the morning train but met our biggest client at the station café.",
    "options": [
      "playful",
      "witty",
      "funny",
      "comic"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The manager told a short joke at the start of the meeting. Everyone began to _____ out loud, and the tense mood quickly disappeared.",
    "options": [
      "tease",
      "laugh",
      "mimic",
      "amuse"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The audience burst into _____ when the robot fell over during the demonstration. Fortunately, the engineers fixed it within a minute.",
    "options": [
      "comedy",
      "satire",
      "irony",
      "laughter"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Mike forgot the _____ of his joke at the sales dinner. Everyone waited politely, but nobody laughed at the end.",
    "options": [
      "sarcasm",
      "clown",
      "punchline",
      "banter"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The company hired a stand-up _____ for the year-end party. He told jokes about office life for almost forty minutes.",
    "options": [
      "comedian",
      "satire",
      "prank",
      "wit"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "My wife and I watched a romantic _____ on the flight to Tokyo. It was light and funny, so the long trip passed quickly.",
    "options": [
      "irony",
      "banter",
      "gag",
      "comedy"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The new spokesperson is famous for her quick _____. She answers difficult questions from reporters with clever and polite comments.",
    "options": [
      "prank",
      "wit",
      "clown",
      "punchline"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "There was a clear tone of _____ in her voice when she called the plan brilliant. Everyone knew she actually hated it.",
    "options": [
      "sarcasm",
      "comedy",
      "clown",
      "prank"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The _____ is that the safety inspector slipped and fell in the factory. He had just finished a speech about preventing accidents.",
    "options": [
      "comedy",
      "banter",
      "clown",
      "irony"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The magazine is known for its sharp political _____. Its cartoons make fun of government leaders and their unrealistic promises every week.",
    "options": [
      "prank",
      "clown",
      "satire",
      "punchline"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Please do not _____ new employees about their accents. It can make them feel uncomfortable during their first weeks at the company.",
    "options": [
      "amuse",
      "tease",
      "entertain",
      "exaggerate"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The director began to _____ to himself as he read the funny email from his old friend. Then he forwarded it to his assistant.",
    "options": [
      "mimic",
      "tease",
      "exaggerate",
      "chuckle"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The museum offers puzzles and games to _____ young visitors. Parents can enjoy the exhibits while their children stay busy and happy.",
    "options": [
      "amuse",
      "tease",
      "mimic",
      "exaggerate"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The tour guide shared an _____ story about the castle's first owner. Everyone in the group smiled and asked him to tell another.",
    "options": [
      "silly",
      "amusing",
      "playful",
      "comic"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Checking the address twice would have prevented that _____ mistake. Now the package has been sent to the wrong city.",
    "options": [
      "playful",
      "witty",
      "silly",
      "comic"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The hotel charges a _____ price of thirty dollars for a small bottle of water. Most guests buy drinks at the shop next door.",
    "options": [
      "ridiculous",
      "playful",
      "witty",
      "lighthearted"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The puppy in our office is very _____ and loves chasing balls. Staff members enjoy playing with it during their lunch breaks.",
    "options": [
      "witty",
      "playful",
      "comic",
      "ridiculous"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The two radio hosts are popular for their friendly _____ every morning. Listeners enjoy their jokes as much as the music.",
    "options": [
      "irony",
      "clown",
      "punchline",
      "banter"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "On April Fools' Day, someone played a _____ on the manager by hiding his chair. He laughed when he finally found it.",
    "options": [
      "wit",
      "satire",
      "prank",
      "irony"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The magician performed a card _____ at the client dinner. Nobody could explain how he found the chairman's card in a sealed envelope.",
    "options": [
      "satire",
      "trick",
      "banter",
      "irony"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The children laughed when the _____ with a red nose and huge shoes fell off his tiny bicycle. It was the highlight of family day.",
    "options": [
      "satire",
      "punchline",
      "wit",
      "clown"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Our parrot can _____ the sound of the office phone perfectly. Visitors often look around for a phone that is not ringing.",
    "options": [
      "mimic",
      "tease",
      "amuse",
      "exaggerate"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Please do not _____ the benefits of the product in the advertisement. Customers will complain if the results do not match our claims.",
    "options": [
      "tease",
      "mimic",
      "exaggerate",
      "chuckle"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The sales team will _____ the visiting clients at a seafood restaurant tonight. They hope the dinner will help close the deal.",
    "options": [
      "tease",
      "mimic",
      "exaggerate",
      "entertain"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The CEO began his speech on a _____ note with a joke about the weather. Then he discussed the serious financial results.",
    "options": [
      "hilarious",
      "lighthearted",
      "ridiculous",
      "laughable"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The actor is best known for his _____ roles in family films. However, his new movie is a serious drama about war.",
    "options": [
      "comic",
      "laughable",
      "ridiculous",
      "silly"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The host of the awards show made several _____ remarks about the long speeches. The audience appreciated her clever sense of humor.",
    "options": [
      "ridiculous",
      "laughable",
      "witty",
      "silly"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The manager _____ suggested holding the next meeting on the beach. Everyone laughed, but nobody took the idea seriously.",
    "options": [
      "officially",
      "jokingly",
      "carefully",
      "formally"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The receptionist greeted every guest _____ with a big smile. Her friendly attitude made the hotel feel warm and welcoming.",
    "options": [
      "angrily",
      "rudely",
      "nervously",
      "cheerfully"
    ],
    "answer": 3,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "humor": {
    "pos": "n.",
    "en_def": "the quality of being funny, or the ability to see what is funny",
    "cn_def": "幽默；幽默感"
  },
  "funny": {
    "pos": "adj.",
    "en_def": "making you laugh or smile",
    "cn_def": "好笑的；有趣的"
  },
  "laugh": {
    "pos": "v.",
    "en_def": "to make sounds with your voice because something is funny",
    "cn_def": "笑；發笑"
  },
  "laughter": {
    "pos": "n.",
    "en_def": "the sound or act of laughing",
    "cn_def": "笑聲；笑"
  },
  "punchline": {
    "pos": "n.",
    "en_def": "the last part of a joke that makes it funny",
    "cn_def": "笑點；（笑話的）妙語"
  },
  "comedian": {
    "pos": "n.",
    "en_def": "a person whose job is to make people laugh",
    "cn_def": "喜劇演員；諧星"
  },
  "comedy": {
    "pos": "n.",
    "en_def": "a funny film, play, or show",
    "cn_def": "喜劇"
  },
  "wit": {
    "pos": "n.",
    "en_def": "the ability to say clever and funny things quickly",
    "cn_def": "機智；風趣"
  },
  "sarcasm": {
    "pos": "n.",
    "en_def": "saying the opposite of what you mean to show you are annoyed or to be funny",
    "cn_def": "諷刺；挖苦"
  },
  "irony": {
    "pos": "n.",
    "en_def": "a situation that is funny or strange because it is the opposite of what you expect",
    "cn_def": "諷刺；反諷"
  },
  "satire": {
    "pos": "n.",
    "en_def": "writing or drawing that uses humor to criticize people or ideas",
    "cn_def": "諷刺作品；諷刺文學"
  },
  "tease": {
    "pos": "v.",
    "en_def": "to laugh at someone or make jokes about them, in a friendly or unkind way",
    "cn_def": "取笑；逗弄"
  },
  "giggle": {
    "pos": "v.",
    "en_def": "to laugh in a quiet, silly way",
    "cn_def": "咯咯地笑；傻笑"
  },
  "chuckle": {
    "pos": "v.",
    "en_def": "to laugh quietly, often with your mouth closed",
    "cn_def": "輕聲笑；暗笑"
  },
  "amuse": {
    "pos": "v.",
    "en_def": "to make someone laugh or keep them happy and busy",
    "cn_def": "逗樂；使開心"
  },
  "amusing": {
    "pos": "adj.",
    "en_def": "funny and enjoyable",
    "cn_def": "有趣的；好笑的"
  },
  "hilarious": {
    "pos": "adj.",
    "en_def": "extremely funny",
    "cn_def": "非常好笑的；爆笑的"
  },
  "silly": {
    "pos": "adj.",
    "en_def": "not serious or sensible; a little foolish",
    "cn_def": "傻氣的；愚蠢的"
  },
  "ridiculous": {
    "pos": "adj.",
    "en_def": "very silly or unreasonable",
    "cn_def": "荒謬的；可笑的"
  },
  "playful": {
    "pos": "adj.",
    "en_def": "full of fun and not serious",
    "cn_def": "愛玩的；活潑逗趣的"
  },
  "banter": {
    "pos": "n.",
    "en_def": "friendly joking talk between people",
    "cn_def": "玩笑話；打趣"
  },
  "prank": {
    "pos": "n.",
    "en_def": "a trick done to someone to make others laugh",
    "cn_def": "惡作劇"
  },
  "trick": {
    "pos": "n.",
    "en_def": "a clever action that surprises or fools people, often for fun",
    "cn_def": "把戲；戲法；詭計"
  },
  "gag": {
    "pos": "n.",
    "en_def": "a short joke or funny action",
    "cn_def": "笑話；搞笑橋段"
  },
  "clown": {
    "pos": "n.",
    "en_def": "a performer with funny clothes and a painted face who makes people laugh",
    "cn_def": "小丑"
  },
  "mimic": {
    "pos": "v.",
    "en_def": "to copy the way someone talks or moves, often to be funny",
    "cn_def": "模仿"
  },
  "exaggerate": {
    "pos": "v.",
    "en_def": "to make something seem bigger, better, or worse than it really is",
    "cn_def": "誇大；誇張"
  },
  "entertain": {
    "pos": "v.",
    "en_def": "to keep people interested and happy, or to give guests food and drinks",
    "cn_def": "娛樂；招待"
  },
  "lighthearted": {
    "pos": "adj.",
    "en_def": "cheerful and not serious",
    "cn_def": "輕鬆愉快的"
  },
  "comic": {
    "pos": "adj.",
    "en_def": "funny; related to comedy",
    "cn_def": "喜劇的；滑稽的"
  },
  "witty": {
    "pos": "adj.",
    "en_def": "clever and funny in what you say",
    "cn_def": "風趣機智的"
  },
  "laughable": {
    "pos": "adj.",
    "en_def": "so silly or poor that it should not be taken seriously",
    "cn_def": "可笑的；荒唐的"
  },
  "jokingly": {
    "pos": "adv.",
    "en_def": "in a way that is not serious; as a joke",
    "cn_def": "開玩笑地"
  },
  "cheerfully": {
    "pos": "adv.",
    "en_def": "in a happy and positive way",
    "cn_def": "愉快地；欣然地"
  }
};

const EXTRA_GLOSSES = {};
