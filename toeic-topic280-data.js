// Topic 280 Quiz Data: Pets 寵物
// Source word list: https://www.examword.com/group-topic/pets — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T280 - Pets 寵物",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "puppy",
    "pos": "n.",
    "cn_def": "小狗；幼犬",
    "en_def": "a young dog",
    "sentence": "A: Why is the receptionist leaving the office early today, and who will answer the phones while she is out this afternoon? B: She just adopted a ten-week-old {{BLANK}} from a breeder, so she has to take it home, and Tom from sales agreed to cover the front desk until five.",
    "cn": "A：為什麼接待員今天提早離開辦公室？她今天下午不在時誰來接電話？ B：她剛從一位繁殖業者那裡領養了一隻十週大的【小狗】，所以必須帶牠回家，業務部的湯姆同意幫忙顧櫃台到五點。"
  },
  {
    "word": "kitten",
    "pos": "n.",
    "cn_def": "小貓",
    "en_def": "a young cat",
    "sentence": "A: Why did the hotel staff move the guests from Room 204 to another floor late last night? B: A stray {{BLANK}} had climbed into the air vent and was crying loudly for hours, so the guests could not sleep until the maintenance team carefully pulled it out and took it to the local shelter.",
    "cn": "A：為什麼飯店員工昨晚深夜把204號房的客人換到另一層樓？ B：一隻流浪【小貓】爬進了通風管，大聲哭叫了好幾個小時，客人無法入睡，直到維修團隊小心地把牠拉出來並送到當地收容所。"
  },
  {
    "word": "owner",
    "pos": "n.",
    "cn_def": "飼主；擁有者",
    "en_def": "a person who has something, such as a pet",
    "sentence": "A: Has anyone called about the brown dog that was found sleeping in our office parking lot this morning? B: Yes, its {{BLANK}} phoned the front desk about an hour ago, and she explained that the dog escaped from her yard during the storm, so she is driving over to pick it up after lunch.",
    "cn": "A：今天早上在我們辦公室停車場睡覺的那隻棕色狗，有人打電話來問嗎？ B：有，牠的【飼主】大約一小時前打電話到櫃台，她說狗在暴風雨時從她家院子跑出去了，所以她午餐後會開車過來接牠。"
  },
  {
    "word": "adopt",
    "pos": "v.",
    "cn_def": "領養",
    "en_def": "to take an animal or child into your home as your own",
    "sentence": "A: Our company is planning a volunteer day next month, so do you have any ideas about where the team could help? B: The animal shelter on Main Street needs people to clean cages and walk dogs, and staff members who fall in love with a pet can even {{BLANK}} one at a discount after the event.",
    "cn": "A：我們公司計劃下個月舉辦志工日，你對團隊可以去哪裡幫忙有什麼想法嗎？ B：緬因街的動物收容所需要人手清理籠子和遛狗，愛上某隻寵物的員工甚至可以在活動結束後以優惠價格【領養】一隻。"
  },
  {
    "word": "shelter",
    "pos": "n.",
    "cn_def": "收容所",
    "en_def": "a place where homeless animals are kept and cared for",
    "sentence": "A: Where are we donating the old blankets and towels that the hotel replaced during last month's renovation? B: The manager arranged for a van to take them to the animal {{BLANK}} across town, because the staff there said they need soft bedding for the dogs and cats during the cold winter months.",
    "cn": "A：飯店上個月整修時換下的舊毯子和毛巾，我們要捐到哪裡？ B：經理安排了一輛廂型車把它們送到城另一頭的動物【收容所】，因為那裡的工作人員說冬天寒冷的幾個月需要柔軟的墊子給貓狗使用。"
  },
  {
    "word": "breed",
    "pos": "n.",
    "cn_def": "品種",
    "en_def": "a particular type of animal",
    "sentence": "A: Do you know which kind of dog would be best for my manager's small apartment near the office? B: I would tell her to choose a quiet {{BLANK}} that does not need a lot of space or exercise, because she works long hours and can only take the dog for short walks before and after work.",
    "cn": "A：你知道哪種狗最適合我主管在辦公室附近的小公寓嗎？ B：我會建議她選一種安靜、不需要太多空間或運動量的【品種】，因為她工作時間很長，只能在上下班前後帶狗短暫散步。"
  },
  {
    "word": "fur",
    "pos": "n.",
    "cn_def": "毛；毛皮",
    "en_def": "the soft thick hair on an animal's body",
    "sentence": "A: Why does the cleaning company charge extra for the apartment on the third floor every month? B: The tenant has two large cats, and their {{BLANK}} gets stuck in the carpet and on the sofa, so the cleaners need special machines and almost an extra hour to remove all of it properly.",
    "cn": "A：為什麼清潔公司每個月對三樓那間公寓額外收費？ B：房客養了兩隻大貓，牠們的【毛】會卡在地毯和沙發上，所以清潔人員需要特別的機器，還要多花將近一小時才能把它們徹底清除。"
  },
  {
    "word": "tail",
    "pos": "n.",
    "cn_def": "尾巴",
    "en_def": "the part at the back of an animal's body that it can move",
    "sentence": "A: How did you know the client's dog was friendly before you walked into her house for the meeting? B: When I rang the doorbell, the dog ran to the gate and wagged its {{BLANK}} happily, and the client also told me that he loves visitors and has never bitten anyone in his life.",
    "cn": "A：你在進客戶家開會前，怎麼知道她的狗很友善？ B：我按門鈴時，那隻狗跑到門口開心地搖【尾巴】，客戶也告訴我牠很喜歡訪客，這輩子從來沒咬過人。"
  },
  {
    "word": "whisker",
    "pos": "n.",
    "cn_def": "鬍鬚",
    "en_def": "one of the long stiff hairs near a cat's mouth",
    "sentence": "A: Why did the pet store manager tell the new employee not to cut anything on the cat's face? B: Each {{BLANK}} helps a cat feel the space around it and move safely in the dark, so cutting them can confuse the animal and make it nervous, even though the hairs may look a little messy.",
    "cn": "A：為什麼寵物店經理告訴新員工不要剪貓臉上的任何東西？ B：每一根【鬍鬚】都幫助貓感知周圍的空間並在黑暗中安全移動，所以剪掉它們會讓動物困惑和緊張，雖然那些毛看起來可能有點凌亂。"
  },
  {
    "word": "collar",
    "pos": "n.",
    "cn_def": "項圈",
    "en_def": "a band put around an animal's neck",
    "sentence": "A: How did the security guard find the owner of the little dog that was running around the shopping mall? B: The dog was wearing a red {{BLANK}} with a small metal tag that showed the owner's phone number, so the guard called her right away, and she arrived within ten minutes to take it home.",
    "cn": "A：保全怎麼找到在購物中心到處亂跑的那隻小狗的主人？ B：那隻狗戴著一個紅色【項圈】，上面有個小金屬牌寫著主人的電話號碼，所以保全立刻打給她，她十分鐘內就到了並把狗帶回家。"
  },
  {
    "word": "leash",
    "pos": "n.",
    "cn_def": "牽繩",
    "en_def": "a long strap used to hold and control a dog",
    "sentence": "A: Are employees allowed to bring their dogs to the company picnic in the park this Saturday afternoon? B: Yes, but the park has strict rules, so every dog must stay on a {{BLANK}} at all times, and owners have to clean up after their pets and keep them away from the food tables.",
    "cn": "A：員工可以帶狗參加這週六下午在公園舉辦的公司野餐嗎？ B：可以，但公園規定很嚴格，所以每隻狗都必須隨時繫著【牽繩】，飼主也必須清理寵物的排泄物，並讓牠們遠離食物桌。"
  },
  {
    "word": "veterinarian",
    "pos": "n.",
    "cn_def": "獸醫",
    "en_def": "an animal doctor",
    "sentence": "A: Why did Maria ask to leave the office two hours early on Thursday afternoon? B: Her old dog has not been eating well for a few days, so she made an appointment with a {{BLANK}} at the animal clinic near her home, and she promised to finish the sales report before she goes.",
    "cn": "A：為什麼瑪莉亞要求週四下午提早兩小時下班？ B：她的老狗好幾天都吃得不好，所以她在家附近的動物診所跟【獸醫】約了時間，她答應走之前會完成業務報告。"
  },
  {
    "word": "vaccination",
    "pos": "n.",
    "cn_def": "疫苗接種",
    "en_def": "an injection that protects against a disease",
    "sentence": "A: What documents do guests need to show before they can check into the hotel with their pets? B: They must bring a recent {{BLANK}} record from their vet, which proves the animal is protected against serious diseases, and they also need to sign a form that says they will pay for any damage.",
    "cn": "A：客人帶寵物入住飯店前需要出示什麼文件？ B：他們必須帶著獸醫開立的近期【疫苗接種】紀錄，證明動物已預防嚴重疾病，他們還需要簽一份表格，表示會賠償任何損壞。"
  },
  {
    "word": "feed",
    "pos": "v.",
    "cn_def": "餵",
    "en_def": "to give food to a person or animal",
    "sentence": "A: Who is going to take care of the fish in the office aquarium while you are away at the conference next week? B: I asked Kevin from accounting to {{BLANK}} them once a day before lunch, and I left a small note on the tank explaining exactly how much food they need each time.",
    "cn": "A：你下週去參加研討會時，誰會照顧辦公室水族箱裡的魚？ B：我請會計部的凱文每天午餐前【餵】牠們一次，我也在魚缸上留了一張小紙條，說明每次需要多少飼料。"
  },
  {
    "word": "groom",
    "pos": "v.",
    "cn_def": "梳理；幫（動物）美容",
    "en_def": "to clean and brush an animal's fur",
    "sentence": "A: Why is the new pet salon downtown always so busy on Saturday mornings? B: Many owners work long hours during the week, so they bring their dogs in on weekends, and the staff there can wash, dry, and {{BLANK}} a large dog in about an hour while the owners shop nearby.",
    "cn": "A：為什麼市中心那家新的寵物美容店週六早上總是那麼忙？ B：很多飼主平日工作時間很長，所以週末才帶狗過來，那裡的員工大約一小時就能把一隻大狗洗好、吹乾並【梳理】乾淨，飼主則在附近逛街。"
  },
  {
    "word": "obedient",
    "pos": "adj.",
    "cn_def": "順從的；聽話的",
    "en_def": "willing to do what you are told",
    "sentence": "A: Why does the hotel allow the guide dog to stay in the lobby when other pets have to stay in the rooms? B: Guide dogs are trained for many months to be calm and {{BLANK}}, so they follow their owner's commands, never bark at guests, and help people who cannot see move around the building safely.",
    "cn": "A：為什麼其他寵物必須待在房間裡，飯店卻允許導盲犬待在大廳？ B：導盲犬經過好幾個月的訓練，變得冷靜又【聽話】，所以牠們會服從主人的指令，從不對客人吠叫，還能幫助看不見的人在建築物裡安全移動。"
  },
  {
    "word": "loyal",
    "pos": "adj.",
    "cn_def": "忠誠的",
    "en_def": "always supporting and staying with someone",
    "sentence": "A: Why did your manager decide to bring his old dog to the office every Friday afternoon? B: He says the dog has been a {{BLANK}} friend for twelve years and stayed by his side through hard times, so he wants it to spend more time with him now that it is getting older and weaker.",
    "cn": "A：為什麼你的經理決定每週五下午帶他的老狗來辦公室？ B：他說那隻狗十二年來一直是他【忠誠的】朋友，在困難時期都陪在他身邊，所以既然牠越來越老、越來越虛弱，他想讓牠多跟自己相處。"
  },
  {
    "word": "playful",
    "pos": "adj.",
    "cn_def": "愛玩的；頑皮的",
    "en_def": "full of fun and liking to play",
    "sentence": "A: How was your first week working at the pet daycare center, and do the animals give you much trouble? B: Most of the dogs are very {{BLANK}} in the morning, so they chase balls and run around the yard for hours, but by the afternoon they are tired and usually sleep quietly until their owners come.",
    "cn": "A：你在寵物日托中心第一週工作得怎麼樣？動物們會給你帶來很多麻煩嗎？ B：大部分的狗早上都非常【愛玩】，會追球、在院子裡跑好幾個小時，但到了下午牠們就累了，通常會安靜地睡到主人來接。"
  },
  {
    "word": "affectionate",
    "pos": "adj.",
    "cn_def": "深情的；親人的",
    "en_def": "showing love and care",
    "sentence": "A: Why did the nursing home decide to keep a cat in the common room for the residents? B: The staff found a gentle and {{BLANK}} cat that enjoys sitting on people's laps, and since it arrived, many lonely older residents have become happier and more willing to talk with one another.",
    "cn": "A：為什麼養老院決定在交誼廳為住戶養一隻貓？ B：工作人員找到一隻溫和又【親人】的貓，牠喜歡坐在人們的腿上，自從牠來了以後，許多孤單的年長住戶變得更快樂，也更願意彼此交談。"
  },
  {
    "word": "companion",
    "pos": "n.",
    "cn_def": "伴侶；同伴",
    "en_def": "someone or something you spend time with",
    "sentence": "A: Why did the doctor suggest that Mr. Lee get a pet after he retired from the bank last year? B: Mr. Lee lives alone and was feeling bored at home, so the doctor believed a small dog would be a good {{BLANK}} that would keep him active and give him a reason to walk outside every day.",
    "cn": "A：為什麼李先生去年從銀行退休後，醫生建議他養寵物？ B：李先生獨居，在家感到很無聊，所以醫生認為一隻小狗會是很好的【伴侶】，能讓他保持活躍，並給他每天出門散步的理由。"
  },
  {
    "word": "scratch",
    "pos": "v.",
    "cn_def": "抓；刮",
    "en_def": "to rub or damage a surface with sharp nails",
    "sentence": "A: Why does the furniture store suggest that customers with cats buy the leather sofa with a special cover? B: Cats often {{BLANK}} the sides of sofas and chairs with their sharp claws, so the cover protects the expensive leather from damage and saves owners a lot of money on repairs later.",
    "cn": "A：為什麼家具店建議養貓的顧客購買附特殊套子的皮沙發？ B：貓常常用尖銳的爪子【抓】沙發和椅子的側面，所以套子能保護昂貴的皮革不受損，日後為飼主省下很多修理費。"
  },
  {
    "word": "bark",
    "pos": "v.",
    "cn_def": "吠叫",
    "en_def": "to make the loud short sound a dog makes",
    "sentence": "A: Why did the neighbors complain to the building manager about the apartment on the fifth floor? B: The family leaves their dog alone all day while they are at work, and it starts to {{BLANK}} loudly every time someone walks past the door, so people working from home cannot concentrate.",
    "cn": "A：為什麼鄰居向大樓管理員抱怨五樓那間公寓？ B：那家人上班時整天把狗單獨留在家，每次有人經過門口牠就開始大聲【吠叫】，所以在家工作的人無法專心。"
  },
  {
    "word": "meow",
    "pos": "v.",
    "cn_def": "喵喵叫",
    "en_def": "to make the sound a cat makes",
    "sentence": "A: How did the warehouse workers discover the cat that was trapped inside the shipping container yesterday? B: One of the drivers heard it {{BLANK}} softly when he opened the door, so the team stopped unloading the boxes, searched carefully, and found a frightened gray cat hiding behind the last row of boxes.",
    "cn": "A：倉庫工人昨天是怎麼發現被困在貨櫃裡的那隻貓的？ B：其中一位司機打開門時聽到牠輕聲【喵喵叫】，所以團隊停止卸貨，仔細搜索，在最後一排箱子後面發現一隻受驚的灰貓躲在那裡。"
  },
  {
    "word": "cage",
    "pos": "n.",
    "cn_def": "籠子",
    "en_def": "a box made of wire or bars for keeping animals",
    "sentence": "A: What do passengers need to prepare if they want to take a small pet on the airline's flights to Tokyo? B: The pet must travel in a strong {{BLANK}} that fits under the seat, and passengers must book a space for it in advance, because each flight only allows two animals in the cabin.",
    "cn": "A：乘客如果想帶小型寵物搭乘航空公司飛往東京的班機，需要準備什麼？ B：寵物必須裝在可放在座位下方的堅固【籠子】裡，乘客必須提前預訂位置，因為每個航班客艙只允許兩隻動物。"
  },
  {
    "word": "aquarium",
    "pos": "n.",
    "cn_def": "水族箱",
    "en_def": "a glass container where fish are kept",
    "sentence": "A: What did the dentist add to the waiting room to help nervous patients feel more relaxed before their appointments? B: She put a large {{BLANK}} full of colorful tropical fish next to the reception desk, and many children now enjoy watching the fish swim instead of worrying about their checkups.",
    "cn": "A：牙醫在候診室加了什麼來幫助緊張的病人在看診前放鬆？ B：她在掛號櫃台旁放了一個裝滿色彩繽紛熱帶魚的大型【水族箱】，現在很多小孩喜歡看魚游來游去，而不再擔心檢查。"
  },
  {
    "word": "hamster",
    "pos": "n.",
    "cn_def": "倉鼠",
    "en_def": "a small animal like a mouse, often kept as a pet",
    "sentence": "A: What kind of pet did the teacher choose for her classroom, and who takes care of it during the holidays? B: She bought a small brown {{BLANK}} that lives in a cage with a running wheel, and during the holidays a different student takes it home each week to give it food and fresh water.",
    "cn": "A：老師為她的教室選了什麼樣的寵物？假期期間誰照顧牠？ B：她買了一隻棕色的小【倉鼠】，住在有滾輪的籠子裡，假期期間每週由不同的學生帶回家，給牠食物和乾淨的水。"
  },
  {
    "word": "parrot",
    "pos": "n.",
    "cn_def": "鸚鵡",
    "en_def": "a brightly colored bird that can copy human speech",
    "sentence": "A: Why did the restaurant customers keep laughing near the entrance during dinner last night? B: The owner keeps a green {{BLANK}} in a large cage by the door, and it has learned to say \"Welcome\" and \"Thank you\" to guests, so many people stop to talk to it before leaving.",
    "cn": "A：為什麼昨晚晚餐時餐廳客人在入口附近一直笑？ B：老闆在門邊的大籠子裡養了一隻綠色【鸚鵡】，牠學會對客人說「歡迎光臨」和「謝謝」，所以很多人離開前會停下來跟牠說話。"
  },
  {
    "word": "rabbit",
    "pos": "n.",
    "cn_def": "兔子",
    "en_def": "a small animal with long ears and soft fur",
    "sentence": "A: What will the children see at the farm that the school is visiting on Friday morning? B: The farm has a petting area where kids can feed carrots to a white {{BLANK}} with long ears, and the farmer will also explain how to hold small animals gently so they do not get hurt.",
    "cn": "A：學校週五早上參觀的農場裡，孩子們會看到什麼？ B：農場有一個觸摸區，孩子們可以餵一隻長耳朵的白【兔子】吃紅蘿蔔，農夫也會說明如何溫柔地抱小動物，以免牠們受傷。"
  },
  {
    "word": "turtle",
    "pos": "n.",
    "cn_def": "烏龜",
    "en_def": "a reptile with a hard shell",
    "sentence": "A: Why does the hotel have a small pond in the garden behind the main building? B: The original owner kept a {{BLANK}} there more than thirty years ago, and the animal still lives in the pond today, so guests often take photos of it resting on the rocks in the warm afternoon sun.",
    "cn": "A：為什麼飯店主建築後方的花園裡有個小池塘？ B：原本的老闆三十多年前在那裡養了一隻【烏龜】，那隻動物至今仍住在池塘裡，所以客人常常拍下牠在溫暖午後陽光下趴在石頭上休息的照片。"
  },
  {
    "word": "responsibility",
    "pos": "n.",
    "cn_def": "責任",
    "en_def": "a duty to take care of something or someone",
    "sentence": "A: Should I let my ten-year-old son get a dog, even though I work long hours at the bank? B: A pet is a big {{BLANK}}, so you should first discuss who will walk it, feed it, and take it to the vet, and make sure your son understands that the dog will need care every single day.",
    "cn": "A：雖然我在銀行工作時間很長，我應該讓我十歲的兒子養狗嗎？ B：養寵物是很大的【責任】，所以你應該先討論誰來遛狗、餵牠、帶牠去看獸醫，並確保你兒子了解狗每天都需要照顧。"
  },
  {
    "word": "training",
    "pos": "n.",
    "cn_def": "訓練",
    "en_def": "the process of teaching an animal or person skills",
    "sentence": "A: Why does the security company spend so much money on its dogs every year? B: Each dog needs months of professional {{BLANK}} before it can work at the airport, where it must learn to find dangerous items in bags and stay calm in large, noisy crowds of travelers.",
    "cn": "A：為什麼保全公司每年在狗身上花那麼多錢？ B：每隻狗在能到機場工作之前都需要好幾個月的專業【訓練】，牠們必須學會在行李中找出危險物品，並在龐大吵雜的旅客人群中保持冷靜。"
  },
  {
    "word": "rescue",
    "pos": "v.",
    "cn_def": "救援；救出",
    "en_def": "to save someone or something from danger",
    "sentence": "A: Why were firefighters standing outside the office building across the street this morning? B: A cat had climbed onto a narrow window ledge on the eighth floor and could not get down, so they used a tall ladder to {{BLANK}} it while dozens of office workers watched from the street below.",
    "cn": "A：為什麼今天早上消防員站在對街的辦公大樓外面？ B：一隻貓爬上了八樓狹窄的窗台下不來，所以他們用高梯子把牠【救】下來，同時有幾十位上班族在下方街上觀看。"
  },
  {
    "word": "habitat",
    "pos": "n.",
    "cn_def": "棲息地",
    "en_def": "the natural home of an animal or plant",
    "sentence": "A: Why did the pet shop stop selling that rare kind of lizard from South America? B: The manager learned that the animal's natural {{BLANK}} is being destroyed by farming, and catching wild lizards for sale makes the problem worse, so she decided to sell only animals bred in safe conditions.",
    "cn": "A：為什麼那家寵物店停止販售那種來自南美洲的稀有蜥蜴？ B：店長得知那種動物的自然【棲息地】正因農業開發而遭到破壞，而捕捉野生蜥蜴來賣會讓問題更嚴重，所以她決定只賣在安全環境下繁殖的動物。"
  },
  {
    "word": "bond",
    "pos": "n.",
    "cn_def": "情感聯繫；羈絆",
    "en_def": "a close connection between people or animals",
    "sentence": "A: Why does the hospital let therapy dogs visit children in the long-term care ward every week? B: The doctors noticed that a strong {{BLANK}} forms between the young patients and the dogs, and that close relationship helps the children feel less afraid and recover more quickly from their treatments.",
    "cn": "A：為什麼醫院讓治療犬每週探望長期照護病房的孩子？ B：醫生注意到年幼的病人和狗之間會形成深厚的【情感聯繫】，那種親密關係幫助孩子們感到比較不害怕，治療後也恢復得更快。"
  }
];

const MCQS = [
  {
    "q": "The Lees bought a _____ for their son's birthday. It is only eight weeks old and still learning to walk on a leash.",
    "options": [
      "puppy",
      "aquarium",
      "cage",
      "collar"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "A tiny _____ was found under a car in the office parking lot. Staff gave it warm milk until its mother cat was found.",
    "options": [
      "leash",
      "kitten",
      "shelter",
      "breed"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Every pet _____ in the building must register their animal with the front desk. Unregistered pets may be asked to leave.",
    "options": [
      "breed",
      "cage",
      "owner",
      "habitat"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Families who wish to _____ a dog must visit the shelter twice. Staff want to make sure each animal goes to a suitable home.",
    "options": [
      "bark",
      "scratch",
      "meow",
      "adopt"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The city animal _____ is full this winter. It is asking residents to foster dogs and cats until permanent homes are found.",
    "options": [
      "collar",
      "shelter",
      "tail",
      "breed"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The golden retriever is a popular _____ among families. It is gentle with children and easy to train.",
    "options": [
      "breed",
      "cage",
      "leash",
      "owner"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Please use the lint roller before your client meeting. Your jacket is covered in cat _____ from this morning.",
    "options": [
      "tail",
      "collar",
      "cage",
      "fur"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The dog wagged its _____ excitedly when its owner came home. It had been waiting by the door all afternoon.",
    "options": [
      "leash",
      "cage",
      "tail",
      "shelter"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Make sure your dog wears a _____ with an ID tag. If it gets lost, anyone can call you right away.",
    "options": [
      "collar",
      "habitat",
      "bond",
      "breed"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Dogs must be kept on a _____ in all public parks. Owners who let their dogs run free may be fined.",
    "options": [
      "tail",
      "leash",
      "fur",
      "habitat"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "If your cat stops eating for more than two days, take it to a _____. Loss of appetite can be a sign of illness.",
    "options": [
      "companion",
      "bond",
      "veterinarian",
      "breed"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "All dogs staying at our hotel need a valid rabies _____ certificate. Please bring it with you when you check in.",
    "options": [
      "habitat",
      "bond",
      "companion",
      "vaccination"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Please do not _____ the animals at the petting zoo. They follow a special diet prepared by the staff.",
    "options": [
      "bark",
      "feed",
      "meow",
      "rescue"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The salon will wash and _____ your dog while you shop. The service includes a haircut and nail trim.",
    "options": [
      "groom",
      "bark",
      "adopt",
      "rescue"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Our trainer can turn even a wild puppy into an _____ dog. After six lessons, most dogs follow basic commands.",
    "options": [
      "playful",
      "loyal",
      "affectionate",
      "obedient"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The dog waited at the station every day for years after its owner died. People called it the most _____ dog in Japan.",
    "options": [
      "playful",
      "noisy",
      "loyal",
      "obedient"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Young kittens are very _____ and love chasing toys. Give them plenty of time to run and jump every day.",
    "options": [
      "playful",
      "loyal",
      "obedient",
      "quiet"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Our cat is very _____ and loves to sit on our laps. She purrs whenever someone strokes her back.",
    "options": [
      "obedient",
      "affectionate",
      "wild",
      "hungry"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "For many elderly people living alone, a pet is a valued _____. It gives them comfort and a reason to stay active.",
    "options": [
      "cage",
      "breed",
      "companion",
      "vaccination"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Cats need a special post to _____ indoors. Otherwise, they may damage your sofa with their sharp claws.",
    "options": [
      "feed",
      "adopt",
      "groom",
      "scratch"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Our neighbor's dog starts to _____ whenever the mail carrier arrives. The noise wakes the baby every afternoon.",
    "options": [
      "adopt",
      "bark",
      "feed",
      "groom"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The parrot sleeps in a large metal _____ at night. During the day, it is allowed to fly around the living room.",
    "options": [
      "cage",
      "collar",
      "leash",
      "tail"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The restaurant installed a huge _____ along one wall. Diners enjoy watching the tropical fish while they eat.",
    "options": [
      "shelter",
      "leash",
      "collar",
      "aquarium"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The _____ in the hotel lobby can say hello in three languages. Guests often stop to listen to the colorful bird.",
    "options": [
      "rabbit",
      "turtle",
      "parrot",
      "hamster"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The children fed carrots to the white _____ at the farm. Its long ears moved every time someone spoke.",
    "options": [
      "rabbit",
      "parrot",
      "turtle",
      "aquarium"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Owning a pet is a long-term _____. You must care for the animal every day for many years.",
    "options": [
      "habitat",
      "responsibility",
      "breed",
      "vaccination"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The dog's poor behavior improved after four weeks of _____. Now it sits and waits patiently before every meal.",
    "options": [
      "habitat",
      "shelter",
      "training",
      "fur"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Volunteers worked through the night to _____ dogs trapped by the flood. All forty animals were taken to safety by morning.",
    "options": [
      "groom",
      "bark",
      "scratch",
      "rescue"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Pet fish need water that matches their natural _____. Tropical species, for example, require warm water and plants.",
    "options": [
      "collar",
      "habitat",
      "owner",
      "leash"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "Walking your dog every day helps build a strong _____ between you. The animal learns to trust you more.",
    "options": [
      "bond",
      "cage",
      "breed",
      "leash"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "puppy": {
    "pos": "n.",
    "en_def": "a young dog",
    "cn_def": "小狗；幼犬"
  },
  "kitten": {
    "pos": "n.",
    "en_def": "a young cat",
    "cn_def": "小貓"
  },
  "owner": {
    "pos": "n.",
    "en_def": "a person who has something, such as a pet",
    "cn_def": "飼主；擁有者"
  },
  "adopt": {
    "pos": "v.",
    "en_def": "to take an animal or child into your home as your own",
    "cn_def": "領養"
  },
  "shelter": {
    "pos": "n.",
    "en_def": "a place where homeless animals are kept and cared for",
    "cn_def": "收容所"
  },
  "breed": {
    "pos": "n.",
    "en_def": "a particular type of animal",
    "cn_def": "品種"
  },
  "fur": {
    "pos": "n.",
    "en_def": "the soft thick hair on an animal's body",
    "cn_def": "毛；毛皮"
  },
  "tail": {
    "pos": "n.",
    "en_def": "the part at the back of an animal's body that it can move",
    "cn_def": "尾巴"
  },
  "whisker": {
    "pos": "n.",
    "en_def": "one of the long stiff hairs near a cat's mouth",
    "cn_def": "鬍鬚"
  },
  "collar": {
    "pos": "n.",
    "en_def": "a band put around an animal's neck",
    "cn_def": "項圈"
  },
  "leash": {
    "pos": "n.",
    "en_def": "a long strap used to hold and control a dog",
    "cn_def": "牽繩"
  },
  "veterinarian": {
    "pos": "n.",
    "en_def": "an animal doctor",
    "cn_def": "獸醫"
  },
  "vaccination": {
    "pos": "n.",
    "en_def": "an injection that protects against a disease",
    "cn_def": "疫苗接種"
  },
  "feed": {
    "pos": "v.",
    "en_def": "to give food to a person or animal",
    "cn_def": "餵"
  },
  "groom": {
    "pos": "v.",
    "en_def": "to clean and brush an animal's fur",
    "cn_def": "梳理；幫（動物）美容"
  },
  "obedient": {
    "pos": "adj.",
    "en_def": "willing to do what you are told",
    "cn_def": "順從的；聽話的"
  },
  "loyal": {
    "pos": "adj.",
    "en_def": "always supporting and staying with someone",
    "cn_def": "忠誠的"
  },
  "playful": {
    "pos": "adj.",
    "en_def": "full of fun and liking to play",
    "cn_def": "愛玩的；頑皮的"
  },
  "affectionate": {
    "pos": "adj.",
    "en_def": "showing love and care",
    "cn_def": "深情的；親人的"
  },
  "companion": {
    "pos": "n.",
    "en_def": "someone or something you spend time with",
    "cn_def": "伴侶；同伴"
  },
  "scratch": {
    "pos": "v.",
    "en_def": "to rub or damage a surface with sharp nails",
    "cn_def": "抓；刮"
  },
  "bark": {
    "pos": "v.",
    "en_def": "to make the loud short sound a dog makes",
    "cn_def": "吠叫"
  },
  "meow": {
    "pos": "v.",
    "en_def": "to make the sound a cat makes",
    "cn_def": "喵喵叫"
  },
  "cage": {
    "pos": "n.",
    "en_def": "a box made of wire or bars for keeping animals",
    "cn_def": "籠子"
  },
  "aquarium": {
    "pos": "n.",
    "en_def": "a glass container where fish are kept",
    "cn_def": "水族箱"
  },
  "hamster": {
    "pos": "n.",
    "en_def": "a small animal like a mouse, often kept as a pet",
    "cn_def": "倉鼠"
  },
  "parrot": {
    "pos": "n.",
    "en_def": "a brightly colored bird that can copy human speech",
    "cn_def": "鸚鵡"
  },
  "rabbit": {
    "pos": "n.",
    "en_def": "a small animal with long ears and soft fur",
    "cn_def": "兔子"
  },
  "turtle": {
    "pos": "n.",
    "en_def": "a reptile with a hard shell",
    "cn_def": "烏龜"
  },
  "responsibility": {
    "pos": "n.",
    "en_def": "a duty to take care of something or someone",
    "cn_def": "責任"
  },
  "training": {
    "pos": "n.",
    "en_def": "the process of teaching an animal or person skills",
    "cn_def": "訓練"
  },
  "rescue": {
    "pos": "v.",
    "en_def": "to save someone or something from danger",
    "cn_def": "救援；救出"
  },
  "habitat": {
    "pos": "n.",
    "en_def": "the natural home of an animal or plant",
    "cn_def": "棲息地"
  },
  "bond": {
    "pos": "n.",
    "en_def": "a close connection between people or animals",
    "cn_def": "情感聯繫；羈絆"
  }
};

const EXTRA_GLOSSES = {};
