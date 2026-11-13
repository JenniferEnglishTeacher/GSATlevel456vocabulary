// Unit 14 Quiz Data: battery – work miracles
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Basic U14 - battery – work miracles",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "battery",
    "pos": "n.",
    "cn_def": "電池",
    "en_def": "a container consisting of one or more cells, in which chemical energy is converted into electricity.",
    "sentence": "After playing the exciting video game for several hours, the {{BLANK}} in his wireless controller completely died.",
    "cn": "在玩了幾個小時刺激的電玩遊戲後，他無線控制器的電池完全沒電了。"
  },
  {
    "word": "dead battery",
    "pos": "phr.",
    "cn_def": "沒電的電池",
    "en_def": "a battery that no longer has electrical charge.",
    "sentence": "I was planning to quickly call my boss, but unfortunately my smartphone currently has a completely {{BLANK}}.",
    "cn": "我本來打算迅速打電話給我的老闆，但不幸的是我的智慧型手機目前有一顆完全沒電的電池。"
  },
  {
    "word": "charge the battery",
    "pos": "phr.",
    "cn_def": "為電池充電",
    "en_def": "to replenish the electrical power in a battery.",
    "sentence": "Before we finally leave for our long weekend camping trip, you must remember to fully {{BLANK}} of the flashlight.",
    "cn": "在我們最終出發去漫長的週末露營旅行之前，你必須記得為手電筒為電池充電（把電池充滿電）。"
  },
  {
    "word": "rechargeable battery",
    "pos": "phr.",
    "cn_def": "充電電池",
    "en_def": "a type of electrical battery which can be charged, discharged into a load, and recharged many times.",
    "sentence": "To help responsibly protect the environment and save some money, you should consider using a {{BLANK}} for your daily electronic devices.",
    "cn": "為了負責任地幫助保護環境並省點錢，你應該考慮為你的日常電子設備使用充電電池。"
  },
  {
    "word": "portable charger",
    "pos": "n. [C]",
    "cn_def": "行動電源",
    "en_def": "A small external device used to charge electronic items when you are away from a wall outlet.",
    "sentence": "I always keep a {{BLANK}} in my backpack so I can power up my phone during long trips.",
    "cn": "我總是在背包裡放一個行動電源，這樣在長途旅行中就能給手機充電。"
  },
  {
    "word": "charge",
    "pos": "v.",
    "cn_def": "給…充電",
    "en_def": "To pass electricity into a device or battery to store power for future use.",
    "sentence": "Remember to {{BLANK}} your wireless earphones tonight so they don't run out of power tomorrow.",
    "cn": "記得今晚給你的無線耳機充電，這樣明天才不會沒電。"
  },
  {
    "word": "charge",
    "pos": "v.",
    "cn_def": "收費、索價",
    "en_def": "To ask an amount of money for a service, activity, or item.",
    "sentence": "Most luxury hotels {{BLANK}} a premium price for high-speed Wi-Fi access in the guest rooms.",
    "cn": "大多數奢華飯店在客房內提供高速網路時都會收取高昂的費用。"
  },
  {
    "word": "charge",
    "pos": "n. [C, U]",
    "cn_def": "費用、價錢",
    "en_def": "The amount of money that you have to pay for a service or a product.",
    "sentence": "There is an extra {{BLANK}} for modifying your flight ticket details just three days before departure.",
    "cn": "在出發前三天修改機票細節需要額外支付一筆費用。"
  },
  {
    "word": "free of charge",
    "pos": "phr.",
    "cn_def": "免費地、不收費地",
    "en_def": "Without having to pay any money; completely free.",
    "sentence": "The museum offers guided tours {{BLANK}} every Saturday morning to all visitors.",
    "cn": "這家博物館每週六早上向所有遊客免費提供導覽服務。"
  },
  {
    "word": "be in charge of",
    "pos": "phr.",
    "cn_def": "負責…、掌管…",
    "en_def": "To be responsible for a group of people, a project, or a specific activity.",
    "sentence": "Chloe will {{BLANK}} organizing the annual company banquet this year.",
    "cn": "克洛伊今年將負責籌辦公司的一年一度尾牙晚宴。"
  },
  {
    "word": "charge",
    "pos": "v.",
    "cn_def": "猛衝、向前衝",
    "en_def": "To rush forward quickly and suddenly, often in an attack or out of excitement.",
    "sentence": "As soon as the store doors opened for the anniversary sale, the eager crowd began to {{BLANK}} inside.",
    "cn": "週年慶特賣會的店門一打開，熱切的人群便開始向前猛衝進去。"
  },
  {
    "word": "fee",
    "pos": "n. [C]",
    "cn_def": "費用、服務費、規費",
    "en_def": "An amount of money paid for a professional service, exam, or official privilege.",
    "sentence": "To maintain your gym membership active, you must pay a monthly {{BLANK}} by the first of each month.",
    "cn": "為了保持健身房會員資格有效，你必須在每月一號前支付月費。"
  },
  {
    "word": "service fee",
    "pos": "phr.",
    "cn_def": "服務費",
    "en_def": "An additional charge made for a particular service, often added to a restaurant bill.",
    "sentence": "Many dining establishments in Taipei automatically add a ten percent {{BLANK}} to the final bill.",
    "cn": "許多餐廳會自動在最終帳單上加收百分之十的服務費。"
  },
  {
    "word": "admission fee",
    "pos": "phr.",
    "cn_def": "門票、入場費",
    "en_def": "The fee paid to enter a place like a museum, theater, historical site, or theme park.",
    "sentence": "The historic palace charges a small {{BLANK}} to help cover the costs of building maintenance.",
    "cn": "這座歷史悠久的宮殿收取少許入場費（門票），以協助支付建築維護的成本。"
  },
  {
    "word": "shipping fee",
    "pos": "phr.",
    "cn_def": "運費（船運/空運商品等）",
    "en_def": "The money paid to transport large items or products, usually over longer distances or overseas.",
    "sentence": "Buying items from international websites often involves a high {{BLANK}} and potential import taxes.",
    "cn": "從國際網站購買商品通常涉及高昂的運費以及潛在的進口稅。"
  },
  {
    "word": "delivery fee",
    "pos": "phr.",
    "cn_def": "外送費、配送費",
    "en_def": "The cost charged by a company to bring goods, food, or packages directly to your door.",
    "sentence": "Ordering food through mobile apps during a heavy rainstorm might require a higher {{BLANK}}.",
    "cn": "在暴風雨中透過手機應用程式點餐可能需要支付較高的外送費（配送費）。"
  },
  {
    "word": "fare",
    "pos": "n. [C]",
    "cn_def": "票價、（車、船、機）費",
    "en_def": "The price you pay to travel on public transportation, such as a bus, train, or plane.",
    "sentence": "The local government decided to raise the public bus {{BLANK}} by two dollars starting next month.",
    "cn": "當地政府決定從下個月開始將公車票價調高兩元。"
  },
  {
    "word": "flight fare airfare",
    "pos": "phr. / n.",
    "cn_def": "機票票價、航空票價",
    "en_def": "The price of a ticket for traveling by airplane.",
    "sentence": "Booking your summer vacation tickets early will help you secure a much cheaper {{BLANK}}.",
    "cn": "提早預訂暑假假期的機票將有助於你取得更便宜的機票票價。"
  },
  {
    "word": "taxi fare",
    "pos": "phr.",
    "cn_def": "計程車車資",
    "en_def": "The amount of money you pay for a ride in a taxi cab.",
    "sentence": "Marcus split the {{BLANK}} with his coworkers since they were all traveling to the same conference center.",
    "cn": "馬庫斯和他的同事平分了計程車車資，因為他們全都要前往同一個會議中心。"
  },
  {
    "word": "permanent",
    "pos": "adj.",
    "cn_def": "永久的",
    "en_def": "lasting or intended to last or remain unchanged indefinitely.",
    "sentence": "The experienced doctor sadly informed Tony that the large scars on his face would likely not be completely {{BLANK}}.",
    "cn": "經驗豐富的醫生遺憾地通知東尼，他臉上的大疤痕很可能不會是完全永久的。"
  },
  {
    "word": "permanently",
    "pos": "adv.",
    "cn_def": "永久地",
    "en_def": "in a way that lasts or remains unchanged indefinitely.",
    "sentence": "After suffering from a terrible sports injury, the professional athlete was unfortunately forced to {{BLANK}} retire from the competitive game.",
    "cn": "在遭受可怕的運動傷害後，這位職業運動員不幸被迫永久地從競爭激烈的比賽中退休。"
  },
  {
    "word": "temporary",
    "pos": "adj.",
    "cn_def": "暫時的",
    "en_def": "lasting for only a limited period of time; not permanent.",
    "sentence": "Frank is currently working at a difficult {{BLANK}} job just to make some extra money before he officially goes to college.",
    "cn": "法蘭克目前正在做一份困難的暫時的工作，只是為了在他正式上大學前多賺點錢。"
  },
  {
    "word": "eternal",
    "pos": "adj.",
    "cn_def": "永恆的",
    "en_def": "lasting or existing forever; without end or beginning.",
    "sentence": "Some deeply religious people firmly believe that their souls will peacefully live an {{BLANK}} life in heaven after they die.",
    "cn": "一些非常虔誠的人堅信，他們死後靈魂將在天堂平靜地過著永恆的生活。"
  },
  {
    "word": "everlasting",
    "pos": "adj.",
    "cn_def": "持久的；永恆的",
    "en_def": "lasting forever or a very long time.",
    "sentence": "The young couple gave each other golden rings as a beautiful symbol of their deep and {{BLANK}} love for one another.",
    "cn": "這對年輕夫婦互相贈送金戒指，作為他們彼此深厚且持久的（永恆的）愛的象徵。"
  },
  {
    "word": "magnet",
    "pos": "n.",
    "cn_def": "磁鐵",
    "en_def": "a piece of iron that has its component atoms so ordered that the material exhibits properties of magnetism.",
    "sentence": "I quickly used a colorful {{BLANK}} to securely attach my important summer class schedule to the front door of the refrigerator.",
    "cn": "我迅速用一塊色彩鮮豔的磁鐵，將我重要的暑期課程表牢牢地貼在冰箱的前門上。"
  },
  {
    "word": "magnetic",
    "pos": "adj.",
    "cn_def": "有吸引力的；磁性的",
    "en_def": "exhibiting or relating to magnetism.",
    "sentence": "Because she naturally has a highly {{BLANK}} personality, everyone at the crowded party instantly wanted to become her best friend.",
    "cn": "因為她天生有著極具有吸引力的（磁性的）個性，擁擠派對上的每個人都立刻想成為她最好的朋友。"
  },
  {
    "word": "magnetic field",
    "pos": "phr.",
    "cn_def": "磁場",
    "en_def": "a region around a magnetic material or a moving electric charge within which the force of magnetism acts.",
    "sentence": "The knowledgeable astronomy teacher thoroughly explained that Jupiter's massive {{BLANK}} is surprisingly twenty thousand times stronger than Earth's.",
    "cn": "知識淵博的天文學老師詳細解釋說，木星巨大的磁場令人驚訝地比地球強兩萬倍。"
  },
  {
    "word": "inserted",
    "pos": "v.",
    "cn_def": "插入",
    "en_def": "to place, fit, or thrust something into another thing.",
    "sentence": "David carefully {{BLANK}} several shiny silver coins into the old vending machine and successfully bought a cold can of soda.",
    "cn": "大衛小心地將幾枚閃亮的銀幣插入這台舊自動販賣機中，並成功買到了一罐冰汽水。"
  },
  {
    "word": "insertion",
    "pos": "n.",
    "cn_def": "插入",
    "en_def": "the action of inserting something.",
    "sentence": "The delicate medical operation requires the highly precise {{BLANK}} of a tiny camera completely into the patient's damaged heart.",
    "cn": "這項精密的醫療手術需要將微型攝影機極其精確地插入病患受損的心臟中。"
  },
  {
    "word": "capsule",
    "pos": "n.",
    "cn_def": "膠囊",
    "en_def": "a small case or container, especially a round or cylindrical one.",
    "sentence": "This strong bitter medicine comes in the form of a small {{BLANK}} and must be swallowed whole with a large glass of water.",
    "cn": "這種強效的苦藥是小膠囊的形狀，必須搭配一大杯水整個吞下。"
  },
  {
    "word": "time capsule",
    "pos": "phr.",
    "cn_def": "時空膠囊",
    "en_def": "a container storing a selection of objects chosen as being typical of the present time, buried for discovery in the future.",
    "sentence": "The excited elementary school students buried a sealed {{BLANK}} containing modern photographs and letters for future generations to find.",
    "cn": "興奮的小學生埋下了一個密封的時空膠囊，裡面裝著現代照片和信件，留待後代去發現。"
  },
  {
    "word": "capsule hotel",
    "pos": "phr.",
    "cn_def": "膠囊旅館",
    "en_def": "a hotel system with extremely small rooms intended to provide cheap overnight accommodation.",
    "sentence": "Because he was traveling on a very strict budget, the tired tourist decided to sleep comfortably in a cheap {{BLANK}} downtown.",
    "cn": "因為他的旅行預算非常嚴格，疲憊的遊客決定在市中心一家便宜的膠囊旅館舒適地睡覺。"
  },
  {
    "word": "guidance",
    "pos": "n.",
    "cn_def": "指導；引導",
    "en_def": "advice or information aimed at resolving a problem or difficulty, especially as given by someone in authority.",
    "sentence": "We desperately need some highly expert {{BLANK}} on how to successfully handle the aggressive reporters waiting outside the main building.",
    "cn": "我們極度需要一些高度專業的指導，來了解如何成功應對在主建築物外等待的具攻擊性的記者。"
  },
  {
    "word": "Under the guidance of",
    "pos": "phr.",
    "cn_def": "在...的指導下",
    "en_def": "being directed or helped by someone.",
    "sentence": "{{BLANK}} her experienced personal trainer, Jane finally managed to successfully lose ten pounds in just two months.",
    "cn": "在她經驗豐富的私人教練的指導下，珍終於成功地在短短兩個月內減掉了十磅。"
  },
  {
    "word": "guide",
    "pos": "n.",
    "cn_def": "引導；嚮導",
    "en_def": "to show or indicate the way to someone; a person who advises or shows the way to others.",
    "sentence": "The friendly local {{BLANK}} safely led the curious tourists through the dark and extremely dangerous caves located deep in the mountains.",
    "cn": "友善的當地嚮導安全地帶領好奇的遊客穿過位於深山中黑暗且極其危險的洞穴。"
  },
  {
    "word": "tour guide",
    "pos": "n. [C]",
    "cn_def": "導遊",
    "en_def": "A person whose job is to show tourists around places of interest and give them information.",
    "sentence": "The friendly {{BLANK}} led the group through the ancient temple, explaining the history of each statue.",
    "cn": "這位友善的導遊帶領團隊穿過這座古老的寺廟，解釋每座雕像的歷史。"
  },
  {
    "word": "guide",
    "pos": "v.",
    "cn_def": "引導、帶路、指導",
    "en_def": "To show someone the way to a place, or to help them understand how to do something.",
    "sentence": "The experienced mentor will {{BLANK}} the new interns through their first week of complex projects at the company.",
    "cn": "這位經驗豐富的導師將引導新實習生度過他們在公司的第一週複雜專案。"
  },
  {
    "word": "lead",
    "pos": "v.",
    "cn_def": "帶領、引領、領路",
    "en_def": "To go in front of a group of people or animals to show them the way or direction.",
    "sentence": "The brave captain will {{BLANK}} his team onto the field for the championship game tonight.",
    "cn": "這位勇敢的隊長今晚將帶領他的球隊進入球場進行冠軍賽。"
  },
  {
    "word": "lead to",
    "pos": "phr. v.",
    "cn_def": "導致、造成",
    "en_def": "To cause something to happen as a final result; to result in a particular situation.",
    "sentence": "Making regular mistakes on financial reports can {{BLANK}} serious problems during the end-of-year audit.",
    "cn": "在財務報告上經常出錯可能會導致年終審計期間的嚴重問題。"
  },
  {
    "word": "leadership",
    "pos": "n. [U]",
    "cn_def": "領導能力、領導地位",
    "en_def": "The position of being a leader, or the ability to guide, manage, and inspire a group of people.",
    "sentence": "Under the strong {{BLANK}} of the new CEO, the technology company doubled its profits within a single year.",
    "cn": "在新任執行長強大的領導能力下，這家科技公司在短短一年內利潤翻倍。"
  },
  {
    "word": "direct",
    "pos": "v.",
    "cn_def": "指揮、引導、指示",
    "en_def": "To control, manage, or give official orders and instructions to a group of people or an activity.",
    "sentence": "Police officers had to {{BLANK}} traffic at the busy intersection after the traffic lights broke down suddenly.",
    "cn": "在交通號誌突然故障後，警員們不得不忙碌的十字路口指揮交通。"
  },
  {
    "word": "direct",
    "pos": "v.",
    "cn_def": "導演、執導（影片/電影）",
    "en_def": "To tell the actors, musicians, and camera operators what to do in order to make a movie, show, or video.",
    "sentence": "Spielberg was chosen to {{BLANK}} the new sci-fi movie because of his incredible storytelling skills.",
    "cn": "史匹柏因其驚人的敘事技巧而被選中來執導這部新的科幻電影。"
  },
  {
    "word": "director",
    "pos": "n. [C]",
    "cn_def": "導演",
    "en_def": "A person who is in charge of making a movie, play, or video, telling actors how to play their parts.",
    "sentence": "The movie {{BLANK}} asked the lead actress to repeat the emotional scene to get the perfect shot.",
    "cn": "電影導演要求女主角重拍那場情感豐富的戲，以獲得最完美的鏡頭。"
  },
  {
    "word": "direction",
    "pos": "n. [C, U]",
    "cn_def": "方向、方位",
    "en_def": "The position or path towards which someone or something moves, faces, or points.",
    "sentence": "If you walk in the wrong {{BLANK}}, you will end up at the train station instead of the museum.",
    "cn": "如果你走錯了方向，你最終會走到火車站而不是博物館。"
  },
  {
    "word": "in all directions",
    "pos": "phr.",
    "cn_def": "朝四面八方、向各個方向",
    "en_def": "Moving away from a central point towards every possible side, way, or area.",
    "sentence": "When the loud firecracker exploded in the park, the frightened pigeons flew off {{BLANK}}.",
    "cn": "當巨大的鞭炮在公園爆炸時，受驚的鴿子朝四面八方飛散。"
  },
  {
    "word": "direct",
    "pos": "adj.",
    "cn_def": "直接的、直達的",
    "en_def": "Going straight from one point to another without stopping, turning, or changing path.",
    "sentence": "Taking a {{BLANK}} flight from Taipei to Los Angeles saves a lot of travel time compared to having a long layover.",
    "cn": "與中途長時間停留相比，搭乘從台北到洛杉磯的直達（直接）航班可以節省大量的旅行時間。"
  },
  {
    "word": "indirect",
    "pos": "adj.",
    "cn_def": "間接的、迂迴的",
    "en_def": "Not happening or done in a straight way, or not immediately caused by something.",
    "sentence": "High stress at work can be an {{BLANK}} cause of severe sleep problems and poor eating habits.",
    "cn": "工作壓力大可能是嚴重睡眠問題和不良飲食習慣的間接原因。"
  },
  {
    "word": "external",
    "pos": "adj.",
    "cn_def": "外用的；外部的",
    "en_def": "belonging to or forming the outer surface or structure of something.",
    "sentence": "The pharmacist strictly warned the patient that this special medical skin cream is absolutely for {{BLANK}} use only and should not be eaten.",
    "cn": "藥劑師嚴格警告病患，這種特殊的醫療護膚霜絕對僅供外用的，不應食用。"
  },
  {
    "word": "exterior",
    "pos": "adj. / n.",
    "cn_def": "外部（的）",
    "en_def": "forming, situated on, or relating to the outside of something; the outer surface or structure.",
    "sentence": "The talented designer painted the entire {{BLANK}} of the beautiful modern house with an incredibly bright and cheerful yellow color.",
    "cn": "才華洋溢的設計師用極其明亮歡快的黃色，粉刷了這棟美麗現代房屋的整個外部。"
  },
  {
    "word": "outer",
    "pos": "adj.",
    "cn_def": "外面的；外部的",
    "en_def": "outside; external.",
    "sentence": "During the terribly cold winter storm, the hiker wore a thick waterproof jacket as his strong {{BLANK}} layer of protective clothing.",
    "cn": "在極其寒冷的冬季風暴中，登山客穿著一件厚實的防水外套作為他堅固的外面的防護衣物。"
  },
  {
    "word": "internal",
    "pos": "adj.",
    "cn_def": "內部的",
    "en_def": "of or situated on the inside.",
    "sentence": "The severe car accident unfortunately caused massive {{BLANK}} bleeding, requiring the injured driver to undergo immediate and highly dangerous emergency surgery.",
    "cn": "這起嚴重的車禍不幸造成了大量的內部的出血，需要受傷的駕駛立刻接受極其危險的緊急手術。"
  },
  {
    "word": "externally",
    "pos": "adv.",
    "cn_def": "外部地",
    "en_def": "with reference to the outer surface or structure of something; outside.",
    "sentence": "The grand historic building has been completely restored {{BLANK}}, but the entire inside still needs a significant amount of repair work.",
    "cn": "這座宏偉的歷史建築在外部地已經完全修復，但整個內部仍然需要大量的維修工作。"
  },
  {
    "word": "fetched",
    "pos": "v.",
    "cn_def": "拿來；去取",
    "en_def": "to go for and then bring back (someone or something) for someone.",
    "sentence": "The energetic young dog eagerly ran across the huge green park and quickly {{BLANK}} the wooden stick for its loving owner.",
    "cn": "充滿活力的年輕小狗熱切地跑過巨大的綠色公園，迅速為牠充滿愛心的主人拿來了木棍。"
  },
  {
    "word": "far-fetched",
    "pos": "adj.",
    "cn_def": "牽強的；難以置信的",
    "en_def": "unlikely and unconvincing; implausible.",
    "sentence": "The desperate student's excuse for not completing his difficult math homework sounded incredibly {{BLANK}} and completely unbelievable to the strict teacher.",
    "cn": "這名絕望的學生沒有完成困難數學作業的藉口，在嚴格的老師聽來極其牽強的且完全難以置信。"
  },
  {
    "word": "prospect",
    "pos": "n.",
    "cn_def": "前景；可能性",
    "en_def": "the possibility or likelihood of some future event occurring.",
    "sentence": "Allan diligently did absolutely everything he possibly could in order to effectively improve his future career {{BLANK}} in the banking industry.",
    "cn": "艾倫勤奮地做了他可能做的絕對一切，以有效地改善他未來在銀行業的職業前景。"
  },
  {
    "word": "prospective",
    "pos": "adj.",
    "cn_def": "潛在的；預期的",
    "en_def": "expected or expecting to be something particular in the future.",
    "sentence": "The ambitious real estate agent spent the entire afternoon showing the beautifully decorated modern apartment to several wealthy {{BLANK}} buyers.",
    "cn": "雄心勃勃的房地產仲介花了整個下午，向幾位富有的潛在的買家展示這間裝潢美麗的現代公寓。"
  },
  {
    "word": "outlook",
    "pos": "n.",
    "cn_def": "前景；觀點",
    "en_def": "a person's point of view or general attitude to life; a view of the future.",
    "sentence": "Despite facing numerous difficult challenges, the optimistic team maintained a highly positive {{BLANK}} regarding the final outcome of the complicated project.",
    "cn": "儘管面臨許多困難的挑戰，這支樂觀的團隊對這項複雜專案的最終結果仍然保持著高度積極的前景（觀點）。"
  },
  {
    "word": "efficient",
    "pos": "adj.",
    "cn_def": "有效率的",
    "en_def": "achieving maximum productivity with minimum wasted effort or expense.",
    "sentence": "Debbie is an incredibly {{BLANK}} and hardworking manager who absolutely never wastes any valuable time during the busy workday.",
    "cn": "黛比是一位極其有效率的且辛勤工作的經理，在繁忙的工作日裡絕對從不浪費任何寶貴的時間。"
  },
  {
    "word": "efficiency",
    "pos": "n.",
    "cn_def": "效率",
    "en_def": "the state or quality of being efficient.",
    "sentence": "The newly installed computer software successfully improved the overall {{BLANK}} of the entire office, allowing everyone to finish tasks much faster.",
    "cn": "新安裝的電腦軟體成功改善了整個辦公室整體的效率，讓每個人都能更快完成任務。"
  },
  {
    "word": "efficiently",
    "pos": "adv.",
    "cn_def": "有效率地",
    "en_def": "in a way that achieves maximum productivity with minimum wasted effort or expense.",
    "sentence": "The highly trained rescue team worked extremely {{BLANK}} to safely evacuate all the terrified residents from the burning apartment building.",
    "cn": "訓練有素的救援小組極其有效率地工作，將所有驚恐的居民從燃燒的公寓大樓中安全撤離。"
  },
  {
    "word": "inefficient",
    "pos": "adj.",
    "cn_def": "沒效率的",
    "en_def": "not achieving maximum productivity; wasting or failing to make the best use of time or resources.",
    "sentence": "Using an extremely old and slow computer to properly edit these massive video files is highly {{BLANK}} and incredibly frustrating.",
    "cn": "使用極其老舊且緩慢的電腦來適當地編輯這些龐大的影片檔案，是高度沒效率的且極度令人沮喪的。"
  },
  {
    "word": "effective",
    "pos": "adj.",
    "cn_def": "有效的",
    "en_def": "successful in producing a desired or intended result.",
    "sentence": "Taking this strong prescription medicine daily is widely considered the most {{BLANK}} way to completely cure your terrible throat infection.",
    "cn": "每天服用這種強效處方藥被廣泛認為是完全治癒你可怕喉嚨感染最有效的方法。"
  },
  {
    "word": "productive",
    "pos": "adj.",
    "cn_def": "多產的；有生產力的",
    "en_def": "producing or able to produce large amounts of goods, crops, or other commodities.",
    "sentence": "After enjoying a surprisingly relaxing weekend, the rested employees had a highly {{BLANK}} Monday morning at the busy corporate office.",
    "cn": "在享受了一個令人驚訝的放鬆週末後，休息過的員工在繁忙的企業辦公室度過了一個高度有生產力的星期一早晨。"
  },
  {
    "word": "agent",
    "pos": "n.",
    "cn_def": "媒介；代理人",
    "en_def": "a substance that brings about a chemical or physical effect; a person who acts on behalf of another.",
    "sentence": "Fresh lemons can effectively be used as a natural cleaning {{BLANK}} to quickly get rid of terrible smells inside the dirty refrigerator.",
    "cn": "新鮮檸檬可以有效地用作天然清潔媒介（劑），以迅速去除骯髒冰箱內的可怕氣味。"
  },
  {
    "word": "agency",
    "pos": "n.",
    "cn_def": "機構；代理處",
    "en_def": "a business or organization established to provide a particular service.",
    "sentence": "The ambitious young actor finally signed an exclusive contract with a highly prestigious talent {{BLANK}} located right in the center of Hollywood.",
    "cn": "這位雄心勃勃的年輕演員終於與一家位於好萊塢正中心的極具聲望的星探機構簽訂了獨家合約。"
  },
  {
    "word": "secret agent",
    "pos": "phr.",
    "cn_def": "特務；秘密情報員",
    "en_def": "a person employed by a government to obtain secret information or conduct operations.",
    "sentence": "The thrilling new action movie is about a highly skilled {{BLANK}} who is desperately trying to completely stop an evil global organization.",
    "cn": "這部驚險的新動作片講述了一位技術高超的特務，他正拚命地試圖徹底阻止一個邪惡的全球組織。"
  },
  {
    "word": "real estate agent",
    "pos": "phr.",
    "cn_def": "房地產仲介",
    "en_def": "a person who sells and rents out buildings and land for clients.",
    "sentence": "The friendly and knowledgeable {{BLANK}} carefully showed the wealthy family five beautifully designed modern homes near the private beach.",
    "cn": "友善且知識淵博的房地產仲介仔細地向這個富裕的家庭展示了五棟位於私人海灘附近、設計美麗的現代住宅。"
  },
  {
    "word": "mend",
    "pos": "v.",
    "cn_def": "修理；癒合",
    "en_def": "to repair (something that is broken or damaged).",
    "sentence": "Sarah urgently needs to undergo a complex medical surgery to properly {{BLANK}} her terribly broken collarbone before the important sports competition.",
    "cn": "莎拉急需進行一項複雜的醫療手術，以便在重要的體育比賽前適當地癒合（修復）她嚴重斷裂的鎖骨。"
  },
  {
    "word": "amend",
    "pos": "v.",
    "cn_def": "修改；修訂",
    "en_def": "to make minor changes in a text in order to make it fairer, more accurate, or more up-to-date.",
    "sentence": "The strict government officially decided to carefully {{BLANK}} the extremely outdated environmental law to better protect the beautiful natural forests.",
    "cn": "嚴格的政府正式決定仔細修改極度過時的環境法律，以更好地保護美麗的自然森林。"
  },
  {
    "word": "mend his ways",
    "pos": "phr.",
    "cn_def": "改過自新",
    "en_def": "to improve one's habits or behavior.",
    "sentence": "After many foolish years of carelessly fooling around, John finally realized his terrible mistakes and firmly decided to {{BLANK}}.",
    "cn": "經過許多年粗心大意地鬼混後，約翰終於意識到自己可怕的錯誤，並堅定地決定要改過自新。"
  },
  {
    "word": "mended fences",
    "pos": "phr.",
    "cn_def": "修復關係",
    "en_def": "to try to repair a relationship that has been damaged.",
    "sentence": "After the stressful corporate merger was finally complete, the senior management successfully {{BLANK}} with their bitter former business rivals.",
    "cn": "在充滿壓力的企業合併終於完成後，高階管理層成功地與他們昔日痛苦的商業競爭對手修復了關係。"
  },
  {
    "word": "surgery",
    "pos": "n.",
    "cn_def": "外科手術",
    "en_def": "the medical treatment of bodily injuries or diseases by incision or manipulation.",
    "sentence": "The friendly doctor happily informed me that my elderly father's complex knee {{BLANK}} went incredibly well and he will recover fully.",
    "cn": "友善的醫生高興地通知我，我年邁父親複雜的膝蓋外科手術進行得非常順利，他將會完全康復。"
  },
  {
    "word": "plastic surgery",
    "pos": "phr.",
    "cn_def": "整形手術",
    "en_def": "the process of reconstructing or repairing parts of the body, especially by the transfer of tissue.",
    "sentence": "The wealthy Hollywood actor secretly flew to a completely private medical clinic in Europe to undergo highly expensive {{BLANK}}.",
    "cn": "這位富有的好萊塢男演員秘密飛往歐洲一家完全私人的醫療診所，接受極其昂貴的整形手術。"
  },
  {
    "word": "surgeon",
    "pos": "n.",
    "cn_def": "外科醫生",
    "en_def": "a medical practitioner qualified to practice surgery.",
    "sentence": "The highly skilled and intensely focused {{BLANK}} successfully transplanted a healthy heart into the dangerously sick four-year-old boy yesterday morning.",
    "cn": "這位技術高超且高度專注的外科醫生昨天早上成功地將一顆健康的心臟移植到病情危險的四歲男孩體內。"
  },
  {
    "word": "operation",
    "pos": "n.",
    "cn_def": "手術；操作",
    "en_def": "an act of surgery performed on a patient.",
    "sentence": "Because the patient was in intense physical pain, the doctor recommended a dangerous back {{BLANK}} to permanently fix the completely ruined muscles.",
    "cn": "因為病患正處於劇烈的身體疼痛中，醫生建議進行一項危險的背部手術，以永久修復完全毀損的肌肉。"
  },
  {
    "word": "operation",
    "pos": "n. [U, C]",
    "cn_def": "操作、運作、運轉",
    "en_def": "The act, process, or method of working, running, or controlling something.",
    "sentence": "Reading the instruction manual carefully is necessary for the safe {{BLANK}} of this heavy factory equipment.",
    "cn": "仔細閱讀說明手冊對於安全操作（運作）這台重型工廠設備是必要的。"
  },
  {
    "word": "operate on a patient",
    "pos": "phr.",
    "cn_def": "為病人動手術、幫病人開刀",
    "en_def": "To perform a medical surgery or cut on someone to cure an illness or injury.",
    "sentence": "The experienced surgeon had to {{BLANK}} who suffered a severe injury from the car accident immediately.",
    "cn": "這位經驗豐富的外科醫生必須立刻為一位在車禍中受重傷的病人動手術（開刀）。"
  },
  {
    "word": "operate a machine",
    "pos": "phr.",
    "cn_def": "操作機器",
    "en_def": "To control, run, or work a piece of equipment or mechanism safely.",
    "sentence": "New factory workers must undergo intensive training before they are allowed to {{BLANK}} on their own.",
    "cn": "新工廠員工在被允許獨自操作機器之前，必須接受密集訓練。"
  },
  {
    "word": "business operation",
    "pos": "phr.",
    "cn_def": "商業營運、企業運作",
    "en_def": "The day-to-day activities, processes, and functions that a company performs to make a profit.",
    "sentence": "The global shipping crisis has severely disrupted the normal {{BLANK}} of many international trading companies.",
    "cn": "全球航運危機已嚴重打亂了許多國際貿易公司的正常商業營運（企業運作）。"
  },
  {
    "word": "sensor",
    "pos": "n.",
    "cn_def": "感測器",
    "en_def": "a device which detects or measures a physical property and records, indicates, or otherwise responds to it.",
    "sentence": "The highly advanced and extremely sensitive motion {{BLANK}} instantly detected a dangerous intruder sneaking around the dark and quiet office building.",
    "cn": "高度先進且極其敏感的動作感測器，立刻偵測到一名危險的入侵者在黑暗安靜的辦公大樓周圍偷偷摸摸。"
  },
  {
    "word": "sensory",
    "pos": "adj.",
    "cn_def": "感官的",
    "en_def": "of or relating to sensation or the physical senses; transmitted or perceived by the senses.",
    "sentence": "The fascinating interactive children's museum uses bright lights, loud sounds, and completely different textures to provide a deeply engaging {{BLANK}} experience.",
    "cn": "迷人的互動兒童博物館利用明亮的燈光、巨大的聲音和完全不同的紋理來提供深度參與的感官的體驗。"
  },
  {
    "word": "sense",
    "pos": "n.",
    "cn_def": "感覺；感官",
    "en_def": "a faculty by which the body perceives an external stimulus; to perceive by a sense.",
    "sentence": "Because dogs naturally have a highly acute {{BLANK}} of smell, they can easily locate hidden food from incredibly far away distances.",
    "cn": "因為狗天生有極其敏銳的嗅覺感官，牠們可以輕鬆地從極遠的距離找到隱藏的食物。"
  },
  {
    "word": "a keen sense of smell",
    "pos": "phr.",
    "cn_def": "敏銳的嗅覺",
    "en_def": "A sharp, highly developed, or very good ability to notice or recognize odors and scents.",
    "sentence": "Rescue dogs are chosen for their jobs because they have {{BLANK}} that allows them to track missing people easily.",
    "cn": "搜救犬被選中來執行工作是因為牠們擁有敏銳的嗅覺，這讓牠們依循氣味就能輕鬆地追蹤失蹤人員。"
  },
  {
    "word": "sense",
    "pos": "v.",
    "cn_def": "感覺到、察覺、意識到",
    "en_def": "To feel, realize, or become aware of something without being told directly.",
    "sentence": "Cats can often {{BLANK}} an impending earthquake or weather change long before humans notice anything unusual.",
    "cn": "貓通常能在人類注意到任何異常之前很久，就感覺到（察覺）即將發生的地震或天氣變化。"
  },
  {
    "word": "sensible",
    "pos": "adj.",
    "cn_def": "明智的、合理的、懂事的",
    "en_def": "Showing good judgment; practical, wise, and reasonable.",
    "sentence": "It is a {{BLANK}} decision to save a portion of your monthly income for emergencies rather than spending it all immediately.",
    "cn": "將每月收入的一部分存起來以備不時之需，而不是立刻全部花掉，這是一個明智的決定。"
  },
  {
    "word": "sensitive",
    "pos": "adj.",
    "cn_def": "敏感的、易受影響的",
    "en_def": "Easily hurt, damaged, or affected by something; or easily offended or upset by what people say.",
    "sentence": "People with {{BLANK}} skin need to be careful when choosing skincare products, as certain ingredients can cause redness.",
    "cn": "擁有敏感的肌膚的人在選擇保養品時需要格外小心，因為某些成分可能會導致皮膚發紅。"
  },
  {
    "word": "are very sensitive to",
    "pos": "phr.",
    "cn_def": "對…敏感、對…敏銳",
    "en_def": "To be easily affected by or highly responsive to something (like light, sound, cold, or criticism).",
    "sentence": "My teeth {{BLANK}} cold food, so I always experience a sharp pain whenever I bite into an ice cream cone.",
    "cn": "我的牙齒對冰冷的食物非常敏感，所以每當我咬冰淇淋甜筒時，總會感到一陣銳痛。"
  },
  {
    "word": "potential",
    "pos": "n.",
    "cn_def": "潛力；潛在的",
    "en_def": "latent qualities or abilities that may be developed and lead to future success; having the capacity to develop into something in the future.",
    "sentence": "Jeremy is a highly ambitious young man completely full of incredible {{BLANK}} who will undoubtedly achieve massive global success someday.",
    "cn": "傑瑞米是一個極具野心且完全充滿令人難以置信潛力的年輕人，總有一天無疑會取得巨大的全球成功。"
  },
  {
    "word": "potential",
    "pos": "adj.",
    "cn_def": "潛在的、可能的",
    "en_def": "Possible, or able to develop into something or happen in the future.",
    "sentence": "The product development team is analyzing {{BLANK}} problems that might arise before they launch the new software next month.",
    "cn": "產品開發團隊正在分析下個月推出新軟體前可能出現的潛在問題。"
  },
  {
    "word": "potential customer",
    "pos": "phr.",
    "cn_def": "潛在客戶",
    "en_def": "A person who might buy a product or service from a business in the future.",
    "sentence": "Giving out free samples at the front door of the bakery is a great way to attract a {{BLANK}} who passes by.",
    "cn": "在麵包店門口發放免費試用品是吸引路過潛在客戶的好方法。"
  },
  {
    "word": "target audience",
    "pos": "phr.",
    "cn_def": "目標客群、目標觀眾",
    "en_def": "The specific group of people that an advertisement, product, or program is aimed at.",
    "sentence": "The clothing brand's {{BLANK}} consists mainly of university students and young adults who love vintage styles.",
    "cn": "這個服飾品牌的目標客群（目標觀眾）主要由熱愛復古風格的大學生和年輕人組成。"
  },
  {
    "word": "potential threat",
    "pos": "phr.",
    "cn_def": "潛在威脅",
    "en_def": "A person, thing, or situation that is likely to cause harm, danger, or damage in the future.",
    "sentence": "Cybersecurity experts warn that using the same password for multiple websites poses a serious {{BLANK}} to personal privacy.",
    "cn": "網路安全專家警告，在多個網站上使用相同的密碼會對個人隱私構成嚴重的潛在威脅。"
  },
  {
    "word": "potential risk",
    "pos": "phr.",
    "cn_def": "潛在風險",
    "en_def": "A possibility of something bad, dangerous, or harmful happening as a result of an action or decision.",
    "sentence": "Before investing all his savings into the new business venture, Marcus carefully evaluated every {{BLANK}}.",
    "cn": "在將所有積蓄投入這項新創事業之前，馬庫斯仔細評估了每一個潛在風險。"
  },
  {
    "word": "potentially",
    "pos": "adv.",
    "cn_def": "潛在地；可能地",
    "en_def": "with the capacity to develop or happen in the future.",
    "sentence": "The strict doctor warned her that mixing those two strong medicines together could {{BLANK}} be extremely dangerous for her weak heart.",
    "cn": "嚴格的醫生警告她，將這兩種強效藥物混合在一起，可能地（潛在地）對她虛弱的心臟極其危險。"
  },
  {
    "word": "possibility",
    "pos": "n.",
    "cn_def": "可能性",
    "en_def": "a thing that may happen or be the case.",
    "sentence": "There is a very strong {{BLANK}} that the rapidly approaching winter storm will heavily delay completely all of the international flights today.",
    "cn": "迅速逼近的冬季風暴有非常強烈的可能性會嚴重延誤今天所有國際航班。"
  },
  {
    "word": "miracle",
    "pos": "n.",
    "cn_def": "奇蹟",
    "en_def": "a surprising and welcome event that is not explicable by natural or scientific laws and is considered to be the work of a divine agency.",
    "sentence": "It is an absolute {{BLANK}} that you somehow weren't seriously hurt when that massive heavy truck aggressively hit your tiny car.",
    "cn": "當那輛巨大的重型卡車猛烈撞擊你微小的汽車時，你不知怎麼的竟然沒有受重傷，這絕對是個奇蹟。"
  },
  {
    "word": "miraculous",
    "pos": "adj.",
    "cn_def": "奇蹟般的",
    "en_def": "occurring through divine or supernatural intervention, or manifesting such power.",
    "sentence": "Following a deeply terrible and highly destructive car crash, the young woman surprisingly made a completely {{BLANK}} recovery in just three weeks.",
    "cn": "在經歷了一場極其可怕且具高度破壞性的車禍後，這名年輕女子令人驚訝地在短短三週內取得了完全奇蹟般的康復。"
  },
  {
    "word": "work miracles",
    "pos": "phr.",
    "cn_def": "創造奇蹟",
    "en_def": "to bring about extremely good results.",
    "sentence": "Many people strongly believe that this specific kind of expensive essential oil can effortlessly {{BLANK}} on highly severe sleeping problems.",
    "cn": "許多人堅信，這種特定種類的昂貴精油能毫不費力地在極其嚴重的睡眠問題上創造奇蹟。"
  }
];

const MCQS = [
  {
    "q": "After playing the exciting video game for several hours, the ______ in his wireless controller completely died.",
    "options": [
      "agent",
      "sensor",
      "battery",
      "charge"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "I was planning to quickly call my boss, but unfortunately my smartphone currently has a completely ______.",
    "options": [
      "are very sensitive to",
      "time capsule",
      "charge the battery",
      "dead battery"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Before we finally leave for our long weekend camping trip, you must remember to fully ______ of the flashlight.",
    "options": [
      "charge the battery",
      "plastic surgery",
      "real estate agent",
      "be in charge of"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "To help responsibly protect the environment and save some money, you should consider using a ______ for your daily electronic devices.",
    "options": [
      "flight fare airfare",
      "rechargeable battery",
      "mend his ways",
      "portable charger"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "I always keep a ______ in my backpack so I can power up my phone during long trips.",
    "options": [
      "rechargeable battery",
      "taxi fare",
      "admission fee",
      "portable charger"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Remember to ______ your wireless earphones tonight so they don't run out of power tomorrow.",
    "options": [
      "charge",
      "lead",
      "guide",
      "direct"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Most luxury hotels ______ a premium price for high-speed Wi-Fi access in the guest rooms.",
    "options": [
      "mend",
      "inserted",
      "charge",
      "direct"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "There is an extra ______ for modifying your flight ticket details just three days before departure.",
    "options": [
      "outlook",
      "charge",
      "agent",
      "surgery"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The museum offers guided tours ______ every Saturday morning to all visitors.",
    "options": [
      "free of charge",
      "taxi fare",
      "dead battery",
      "are very sensitive to"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Chloe will ______ organizing the annual company banquet this year.",
    "options": [
      "flight fare airfare",
      "potential customer",
      "tour guide",
      "be in charge of"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "As soon as the store doors opened for the anniversary sale, the eager crowd began to ______ inside.",
    "options": [
      "fetched",
      "charge",
      "inserted",
      "sense"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "To maintain your gym membership active, you must pay a monthly ______ by the first of each month.",
    "options": [
      "agent",
      "surgeon",
      "fee",
      "battery"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Many dining establishments in Taipei automatically add a ten percent ______ to the final bill.",
    "options": [
      "service fee",
      "shipping fee",
      "capsule hotel",
      "free of charge"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The historic palace charges a small ______ to help cover the costs of building maintenance.",
    "options": [
      "are very sensitive to",
      "admission fee",
      "be in charge of",
      "in all directions"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Buying items from international websites often involves a high ______ and potential import taxes.",
    "options": [
      "tour guide",
      "business operation",
      "a keen sense of smell",
      "shipping fee"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Ordering food through mobile apps during a heavy rainstorm might require a higher ______.",
    "options": [
      "a keen sense of smell",
      "free of charge",
      "delivery fee",
      "business operation"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The local government decided to raise the public bus ______ by two dollars starting next month.",
    "options": [
      "fare",
      "miracle",
      "agent",
      "guidance"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Booking your summer vacation tickets early will help you secure a much cheaper ______.",
    "options": [
      "lead to",
      "flight fare airfare",
      "real estate agent",
      "capsule hotel"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Marcus split the ______ with his coworkers since they were all traveling to the same conference center.",
    "options": [
      "lead to",
      "a keen sense of smell",
      "target audience",
      "taxi fare"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The experienced doctor sadly informed Tony that the large scars on his face would likely not be completely ______.",
    "options": [
      "prospective",
      "effective",
      "permanent",
      "direct"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "After suffering from a terrible sports injury, the professional athlete was unfortunately forced to ______ retire from the competitive game.",
    "options": [
      "permanently",
      "externally",
      "efficiently",
      "potentially"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Frank is currently working at a difficult ______ job just to make some extra money before he officially goes to college.",
    "options": [
      "far-fetched",
      "permanent",
      "prospective",
      "temporary"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Some deeply religious people firmly believe that their souls will peacefully live an ______ life in heaven after they die.",
    "options": [
      "internal",
      "productive",
      "eternal",
      "miraculous"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The young couple gave each other golden rings as a beautiful symbol of their deep and ______ love for one another.",
    "options": [
      "internal",
      "everlasting",
      "inefficient",
      "potential"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "I quickly used a colorful ______ to securely attach my important summer class schedule to the front door of the refrigerator.",
    "options": [
      "magnet",
      "battery",
      "leadership",
      "direction"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Because she naturally has a highly ______ personality, everyone at the crowded party instantly wanted to become her best friend.",
    "options": [
      "potential",
      "magnetic",
      "permanent",
      "sensory"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The knowledgeable astronomy teacher thoroughly explained that Jupiter's massive ______ is surprisingly twenty thousand times stronger than Earth's.",
    "options": [
      "capsule hotel",
      "free of charge",
      "secret agent",
      "magnetic field"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "David carefully ______ several shiny silver coins into the old vending machine and successfully bought a cold can of soda.",
    "options": [
      "direct",
      "sense",
      "inserted",
      "lead"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The delicate medical operation requires the highly precise ______ of a tiny camera completely into the patient's damaged heart.",
    "options": [
      "insertion",
      "efficiency",
      "outlook",
      "charge"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "This strong bitter medicine comes in the form of a small ______ and must be swallowed whole with a large glass of water.",
    "options": [
      "potential",
      "director",
      "miracle",
      "capsule"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The excited elementary school students buried a sealed ______ containing modern photographs and letters for future generations to find.",
    "options": [
      "magnetic field",
      "rechargeable battery",
      "time capsule",
      "in all directions"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Because he was traveling on a very strict budget, the tired tourist decided to sleep comfortably in a cheap ______ downtown.",
    "options": [
      "potential risk",
      "capsule hotel",
      "dead battery",
      "taxi fare"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "We desperately need some highly expert ______ on how to successfully handle the aggressive reporters waiting outside the main building.",
    "options": [
      "guidance",
      "potential",
      "capsule",
      "sense"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "______ her experienced personal trainer, Jane finally managed to successfully lose ten pounds in just two months.",
    "options": [
      "business operation",
      "delivery fee",
      "Under the guidance of",
      "magnetic field"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The friendly local ______ safely led the curious tourists through the dark and extremely dangerous caves located deep in the mountains.",
    "options": [
      "capsule",
      "operation",
      "efficiency",
      "guide"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "The friendly ______ led the group through the ancient temple, explaining the history of each statue.",
    "options": [
      "real estate agent",
      "tour guide",
      "time capsule",
      "service fee"
    ],
    "answer": 1,
    "vocabIndex": 35
  },
  {
    "q": "The experienced mentor will ______ the new interns through their first week of complex projects at the company.",
    "options": [
      "guide",
      "sense",
      "lead",
      "inserted"
    ],
    "answer": 0,
    "vocabIndex": 36
  },
  {
    "q": "The brave captain will ______ his team onto the field for the championship game tonight.",
    "options": [
      "amend",
      "mend",
      "lead",
      "sense"
    ],
    "answer": 2,
    "vocabIndex": 37
  },
  {
    "q": "Making regular mistakes on financial reports can ______ serious problems during the end-of-year audit.",
    "options": [
      "potential threat",
      "lead to",
      "capsule hotel",
      "are very sensitive to"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "Under the strong ______ of the new CEO, the technology company doubled its profits within a single year.",
    "options": [
      "fare",
      "miracle",
      "capsule",
      "leadership"
    ],
    "answer": 3,
    "vocabIndex": 39
  },
  {
    "q": "Police officers had to ______ traffic at the busy intersection after the traffic lights broke down suddenly.",
    "options": [
      "fetched",
      "lead",
      "direct",
      "charge"
    ],
    "answer": 2,
    "vocabIndex": 40
  },
  {
    "q": "Spielberg was chosen to ______ the new sci-fi movie because of his incredible storytelling skills.",
    "options": [
      "inserted",
      "guide",
      "fetched",
      "direct"
    ],
    "answer": 3,
    "vocabIndex": 41
  },
  {
    "q": "The movie ______ asked the lead actress to repeat the emotional scene to get the perfect shot.",
    "options": [
      "outlook",
      "director",
      "guide",
      "agent"
    ],
    "answer": 1,
    "vocabIndex": 42
  },
  {
    "q": "If you walk in the wrong ______, you will end up at the train station instead of the museum.",
    "options": [
      "direction",
      "surgeon",
      "prospect",
      "magnet"
    ],
    "answer": 0,
    "vocabIndex": 43
  },
  {
    "q": "When the loud firecracker exploded in the park, the frightened pigeons flew off ______.",
    "options": [
      "potential threat",
      "in all directions",
      "taxi fare",
      "are very sensitive to"
    ],
    "answer": 1,
    "vocabIndex": 44
  },
  {
    "q": "Taking a ______ flight from Taipei to Los Angeles saves a lot of travel time compared to having a long layover.",
    "options": [
      "miraculous",
      "prospective",
      "temporary",
      "direct"
    ],
    "answer": 3,
    "vocabIndex": 45
  },
  {
    "q": "High stress at work can be an ______ cause of severe sleep problems and poor eating habits.",
    "options": [
      "sensible",
      "exterior",
      "indirect",
      "effective"
    ],
    "answer": 2,
    "vocabIndex": 46
  },
  {
    "q": "The pharmacist strictly warned the patient that this special medical skin cream is absolutely for ______ use only and should not be eaten.",
    "options": [
      "external",
      "internal",
      "exterior",
      "indirect"
    ],
    "answer": 0,
    "vocabIndex": 47
  },
  {
    "q": "The talented designer painted the entire ______ of the beautiful modern house with an incredibly bright and cheerful yellow color.",
    "options": [
      "everlasting",
      "indirect",
      "sensible",
      "exterior"
    ],
    "answer": 3,
    "vocabIndex": 48
  },
  {
    "q": "During the terribly cold winter storm, the hiker wore a thick waterproof jacket as his strong ______ layer of protective clothing.",
    "options": [
      "eternal",
      "outer",
      "efficient",
      "potential"
    ],
    "answer": 1,
    "vocabIndex": 49
  },
  {
    "q": "The severe car accident unfortunately caused massive ______ bleeding, requiring the injured driver to undergo immediate and highly dangerous emergency surgery.",
    "options": [
      "permanent",
      "magnetic",
      "internal",
      "productive"
    ],
    "answer": 2,
    "vocabIndex": 50
  },
  {
    "q": "The grand historic building has been completely restored ______, but the entire inside still needs a significant amount of repair work.",
    "options": [
      "externally",
      "efficiently",
      "potentially",
      "permanently"
    ],
    "answer": 0,
    "vocabIndex": 51
  },
  {
    "q": "The energetic young dog eagerly ran across the huge green park and quickly ______ the wooden stick for its loving owner.",
    "options": [
      "sense",
      "direct",
      "fetched",
      "guide"
    ],
    "answer": 2,
    "vocabIndex": 52
  },
  {
    "q": "The desperate student's excuse for not completing his difficult math homework sounded incredibly ______ and completely unbelievable to the strict teacher.",
    "options": [
      "efficient",
      "indirect",
      "outer",
      "far-fetched"
    ],
    "answer": 3,
    "vocabIndex": 53
  },
  {
    "q": "Allan diligently did absolutely everything he possibly could in order to effectively improve his future career ______ in the banking industry.",
    "options": [
      "prospect",
      "sensor",
      "leadership",
      "possibility"
    ],
    "answer": 0,
    "vocabIndex": 54
  },
  {
    "q": "The ambitious real estate agent spent the entire afternoon showing the beautifully decorated modern apartment to several wealthy ______ buyers.",
    "options": [
      "sensitive",
      "prospective",
      "far-fetched",
      "internal"
    ],
    "answer": 1,
    "vocabIndex": 55
  },
  {
    "q": "Despite facing numerous difficult challenges, the optimistic team maintained a highly positive ______ regarding the final outcome of the complicated project.",
    "options": [
      "outlook",
      "direction",
      "battery",
      "guide"
    ],
    "answer": 0,
    "vocabIndex": 56
  },
  {
    "q": "Debbie is an incredibly ______ and hardworking manager who absolutely never wastes any valuable time during the busy workday.",
    "options": [
      "eternal",
      "efficient",
      "sensitive",
      "indirect"
    ],
    "answer": 1,
    "vocabIndex": 57
  },
  {
    "q": "The newly installed computer software successfully improved the overall ______ of the entire office, allowing everyone to finish tasks much faster.",
    "options": [
      "sense",
      "surgeon",
      "efficiency",
      "insertion"
    ],
    "answer": 2,
    "vocabIndex": 58
  },
  {
    "q": "The highly trained rescue team worked extremely ______ to safely evacuate all the terrified residents from the burning apartment building.",
    "options": [
      "externally",
      "permanently",
      "potentially",
      "efficiently"
    ],
    "answer": 3,
    "vocabIndex": 59
  },
  {
    "q": "Using an extremely old and slow computer to properly edit these massive video files is highly ______ and incredibly frustrating.",
    "options": [
      "inefficient",
      "sensitive",
      "sensible",
      "exterior"
    ],
    "answer": 0,
    "vocabIndex": 60
  },
  {
    "q": "Taking this strong prescription medicine daily is widely considered the most ______ way to completely cure your terrible throat infection.",
    "options": [
      "permanent",
      "effective",
      "productive",
      "prospective"
    ],
    "answer": 1,
    "vocabIndex": 61
  },
  {
    "q": "After enjoying a surprisingly relaxing weekend, the rested employees had a highly ______ Monday morning at the busy corporate office.",
    "options": [
      "sensitive",
      "external",
      "potential",
      "productive"
    ],
    "answer": 3,
    "vocabIndex": 62
  },
  {
    "q": "Fresh lemons can effectively be used as a natural cleaning ______ to quickly get rid of terrible smells inside the dirty refrigerator.",
    "options": [
      "potential",
      "battery",
      "agent",
      "fare"
    ],
    "answer": 2,
    "vocabIndex": 63
  },
  {
    "q": "The ambitious young actor finally signed an exclusive contract with a highly prestigious talent ______ located right in the center of Hollywood.",
    "options": [
      "agency",
      "direction",
      "guide",
      "fee"
    ],
    "answer": 0,
    "vocabIndex": 64
  },
  {
    "q": "The thrilling new action movie is about a highly skilled ______ who is desperately trying to completely stop an evil global organization.",
    "options": [
      "charge the battery",
      "real estate agent",
      "service fee",
      "secret agent"
    ],
    "answer": 3,
    "vocabIndex": 65
  },
  {
    "q": "The friendly and knowledgeable ______ carefully showed the wealthy family five beautifully designed modern homes near the private beach.",
    "options": [
      "Under the guidance of",
      "real estate agent",
      "admission fee",
      "mend his ways"
    ],
    "answer": 1,
    "vocabIndex": 66
  },
  {
    "q": "Sarah urgently needs to undergo a complex medical surgery to properly ______ her terribly broken collarbone before the important sports competition.",
    "options": [
      "fetched",
      "amend",
      "mend",
      "lead"
    ],
    "answer": 2,
    "vocabIndex": 67
  },
  {
    "q": "The strict government officially decided to carefully ______ the extremely outdated environmental law to better protect the beautiful natural forests.",
    "options": [
      "guide",
      "charge",
      "sense",
      "amend"
    ],
    "answer": 3,
    "vocabIndex": 68
  },
  {
    "q": "After many foolish years of carelessly fooling around, John finally realized his terrible mistakes and firmly decided to ______.",
    "options": [
      "admission fee",
      "rechargeable battery",
      "mend his ways",
      "service fee"
    ],
    "answer": 2,
    "vocabIndex": 69
  },
  {
    "q": "After the stressful corporate merger was finally complete, the senior management successfully ______ with their bitter former business rivals.",
    "options": [
      "mended fences",
      "operate on a patient",
      "potential customer",
      "time capsule"
    ],
    "answer": 0,
    "vocabIndex": 70
  },
  {
    "q": "The friendly doctor happily informed me that my elderly father's complex knee ______ went incredibly well and he will recover fully.",
    "options": [
      "magnet",
      "surgery",
      "guide",
      "outlook"
    ],
    "answer": 1,
    "vocabIndex": 71
  },
  {
    "q": "The wealthy Hollywood actor secretly flew to a completely private medical clinic in Europe to undergo highly expensive ______.",
    "options": [
      "mend his ways",
      "Under the guidance of",
      "plastic surgery",
      "magnetic field"
    ],
    "answer": 2,
    "vocabIndex": 72
  },
  {
    "q": "The highly skilled and intensely focused ______ successfully transplanted a healthy heart into the dangerously sick four-year-old boy yesterday morning.",
    "options": [
      "prospect",
      "surgeon",
      "potential",
      "operation"
    ],
    "answer": 1,
    "vocabIndex": 73
  },
  {
    "q": "Because the patient was in intense physical pain, the doctor recommended a dangerous back ______ to permanently fix the completely ruined muscles.",
    "options": [
      "director",
      "miracle",
      "sense",
      "operation"
    ],
    "answer": 3,
    "vocabIndex": 74
  },
  {
    "q": "Reading the instruction manual carefully is necessary for the safe ______ of this heavy factory equipment.",
    "options": [
      "operation",
      "fare",
      "insertion",
      "agency"
    ],
    "answer": 0,
    "vocabIndex": 75
  },
  {
    "q": "The experienced surgeon had to ______ who suffered a severe injury from the car accident immediately.",
    "options": [
      "in all directions",
      "operate on a patient",
      "target audience",
      "flight fare airfare"
    ],
    "answer": 1,
    "vocabIndex": 76
  },
  {
    "q": "New factory workers must undergo intensive training before they are allowed to ______ on their own.",
    "options": [
      "mend his ways",
      "time capsule",
      "mended fences",
      "operate a machine"
    ],
    "answer": 3,
    "vocabIndex": 77
  },
  {
    "q": "The global shipping crisis has severely disrupted the normal ______ of many international trading companies.",
    "options": [
      "business operation",
      "magnetic field",
      "secret agent",
      "potential risk"
    ],
    "answer": 0,
    "vocabIndex": 78
  },
  {
    "q": "The highly advanced and extremely sensitive motion ______ instantly detected a dangerous intruder sneaking around the dark and quiet office building.",
    "options": [
      "outlook",
      "agent",
      "sensor",
      "sense"
    ],
    "answer": 2,
    "vocabIndex": 79
  },
  {
    "q": "The fascinating interactive children's museum uses bright lights, loud sounds, and completely different textures to provide a deeply engaging ______ experience.",
    "options": [
      "sensory",
      "exterior",
      "magnetic",
      "prospective"
    ],
    "answer": 0,
    "vocabIndex": 80
  },
  {
    "q": "Because dogs naturally have a highly acute ______ of smell, they can easily locate hidden food from incredibly far away distances.",
    "options": [
      "prospect",
      "efficiency",
      "potential",
      "sense"
    ],
    "answer": 3,
    "vocabIndex": 81
  },
  {
    "q": "Rescue dogs are chosen for their jobs because they have ______ that allows them to track missing people easily.",
    "options": [
      "potential threat",
      "are very sensitive to",
      "a keen sense of smell",
      "portable charger"
    ],
    "answer": 2,
    "vocabIndex": 82
  },
  {
    "q": "Cats can often ______ an impending earthquake or weather change long before humans notice anything unusual.",
    "options": [
      "lead",
      "sense",
      "amend",
      "inserted"
    ],
    "answer": 1,
    "vocabIndex": 83
  },
  {
    "q": "It is a ______ decision to save a portion of your monthly income for emergencies rather than spending it all immediately.",
    "options": [
      "outer",
      "temporary",
      "sensible",
      "sensory"
    ],
    "answer": 2,
    "vocabIndex": 84
  },
  {
    "q": "People with ______ skin need to be careful when choosing skincare products, as certain ingredients can cause redness.",
    "options": [
      "potential",
      "sensitive",
      "everlasting",
      "magnetic"
    ],
    "answer": 1,
    "vocabIndex": 85
  },
  {
    "q": "My teeth ______ cold food, so I always experience a sharp pain whenever I bite into an ice cream cone.",
    "options": [
      "a keen sense of smell",
      "plastic surgery",
      "magnetic field",
      "are very sensitive to"
    ],
    "answer": 3,
    "vocabIndex": 86
  },
  {
    "q": "Jeremy is a highly ambitious young man completely full of incredible ______ who will undoubtedly achieve massive global success someday.",
    "options": [
      "potential",
      "direction",
      "possibility",
      "outlook"
    ],
    "answer": 0,
    "vocabIndex": 87
  },
  {
    "q": "The product development team is analyzing ______ problems that might arise before they launch the new software next month.",
    "options": [
      "miraculous",
      "prospective",
      "sensory",
      "potential"
    ],
    "answer": 3,
    "vocabIndex": 88
  },
  {
    "q": "Giving out free samples at the front door of the bakery is a great way to attract a ______ who passes by.",
    "options": [
      "a keen sense of smell",
      "potential customer",
      "real estate agent",
      "are very sensitive to"
    ],
    "answer": 1,
    "vocabIndex": 89
  },
  {
    "q": "The clothing brand's ______ consists mainly of university students and young adults who love vintage styles.",
    "options": [
      "taxi fare",
      "in all directions",
      "target audience",
      "lead to"
    ],
    "answer": 2,
    "vocabIndex": 90
  },
  {
    "q": "Cybersecurity experts warn that using the same password for multiple websites poses a serious ______ to personal privacy.",
    "options": [
      "potential threat",
      "operate a machine",
      "time capsule",
      "dead battery"
    ],
    "answer": 0,
    "vocabIndex": 91
  },
  {
    "q": "Before investing all his savings into the new business venture, Marcus carefully evaluated every ______.",
    "options": [
      "charge the battery",
      "lead to",
      "potential risk",
      "free of charge"
    ],
    "answer": 2,
    "vocabIndex": 92
  },
  {
    "q": "The strict doctor warned her that mixing those two strong medicines together could ______ be extremely dangerous for her weak heart.",
    "options": [
      "externally",
      "permanently",
      "efficiently",
      "potentially"
    ],
    "answer": 3,
    "vocabIndex": 93
  },
  {
    "q": "There is a very strong ______ that the rapidly approaching winter storm will heavily delay completely all of the international flights today.",
    "options": [
      "fare",
      "possibility",
      "surgeon",
      "battery"
    ],
    "answer": 1,
    "vocabIndex": 94
  },
  {
    "q": "It is an absolute ______ that you somehow weren't seriously hurt when that massive heavy truck aggressively hit your tiny car.",
    "options": [
      "miracle",
      "battery",
      "guide",
      "sensor"
    ],
    "answer": 0,
    "vocabIndex": 95
  },
  {
    "q": "Following a deeply terrible and highly destructive car crash, the young woman surprisingly made a completely ______ recovery in just three weeks.",
    "options": [
      "effective",
      "exterior",
      "indirect",
      "miraculous"
    ],
    "answer": 3,
    "vocabIndex": 96
  },
  {
    "q": "Many people strongly believe that this specific kind of expensive essential oil can effortlessly ______ on highly severe sleeping problems.",
    "options": [
      "potential threat",
      "work miracles",
      "plastic surgery",
      "delivery fee"
    ],
    "answer": 1,
    "vocabIndex": 97
  }
];

const LOOKUP = {
  "battery": {
    "pos": "n.",
    "en_def": "a container consisting of one or more cells, in which chemical energy is converted into electricity.",
    "cn_def": "電池",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a container consisting of one or more cells, in which chemical energy is converted into electricity.",
        "cn_def": "電池"
      }
    ]
  },
  "dead battery": {
    "pos": "phr.",
    "en_def": "a battery that no longer has electrical charge.",
    "cn_def": "沒電的電池",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a battery that no longer has electrical charge.",
        "cn_def": "沒電的電池"
      }
    ]
  },
  "charge the battery": {
    "pos": "phr.",
    "en_def": "to replenish the electrical power in a battery.",
    "cn_def": "為電池充電",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to replenish the electrical power in a battery.",
        "cn_def": "為電池充電"
      }
    ]
  },
  "rechargeable battery": {
    "pos": "phr.",
    "en_def": "a type of electrical battery which can be charged, discharged into a load, and recharged many times.",
    "cn_def": "充電電池",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a type of electrical battery which can be charged, discharged into a load, and recharged many times.",
        "cn_def": "充電電池"
      }
    ]
  },
  "portable charger": {
    "pos": "n. [C]",
    "en_def": "A small external device used to charge electronic items when you are away from a wall outlet.",
    "cn_def": "行動電源",
    "combined": [
      {
        "pos": "n. [C]",
        "en_def": "A small external device used to charge electronic items when you are away from a wall outlet.",
        "cn_def": "行動電源"
      }
    ]
  },
  "charge": {
    "pos": "v.",
    "en_def": "To pass electricity into a device or battery to store power for future use.",
    "cn_def": "給…充電",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To pass electricity into a device or battery to store power for future use.",
        "cn_def": "給…充電"
      },
      {
        "pos": "v.",
        "en_def": "To ask an amount of money for a service, activity, or item.",
        "cn_def": "收費、索價"
      },
      {
        "pos": "n. [C, U]",
        "en_def": "The amount of money that you have to pay for a service or a product.",
        "cn_def": "費用、價錢"
      },
      {
        "pos": "v.",
        "en_def": "To rush forward quickly and suddenly, often in an attack or out of excitement.",
        "cn_def": "猛衝、向前衝"
      }
    ]
  },
  "free of charge": {
    "pos": "phr.",
    "en_def": "Without having to pay any money; completely free.",
    "cn_def": "免費地、不收費地",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Without having to pay any money; completely free.",
        "cn_def": "免費地、不收費地"
      }
    ]
  },
  "be in charge of": {
    "pos": "phr.",
    "en_def": "To be responsible for a group of people, a project, or a specific activity.",
    "cn_def": "負責…、掌管…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To be responsible for a group of people, a project, or a specific activity.",
        "cn_def": "負責…、掌管…"
      }
    ]
  },
  "fee": {
    "pos": "n. [C]",
    "en_def": "An amount of money paid for a professional service, exam, or official privilege.",
    "cn_def": "費用、服務費、規費",
    "combined": [
      {
        "pos": "n. [C]",
        "en_def": "An amount of money paid for a professional service, exam, or official privilege.",
        "cn_def": "費用、服務費、規費"
      }
    ]
  },
  "service fee": {
    "pos": "phr.",
    "en_def": "An additional charge made for a particular service, often added to a restaurant bill.",
    "cn_def": "服務費",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "An additional charge made for a particular service, often added to a restaurant bill.",
        "cn_def": "服務費"
      }
    ]
  },
  "admission fee": {
    "pos": "phr.",
    "en_def": "The fee paid to enter a place like a museum, theater, historical site, or theme park.",
    "cn_def": "門票、入場費",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The fee paid to enter a place like a museum, theater, historical site, or theme park.",
        "cn_def": "門票、入場費"
      }
    ]
  },
  "admission(s) fee": {
    "pos": "phr.",
    "en_def": "The fee paid to enter a place like a museum, theater, historical site, or theme park.",
    "cn_def": "門票、入場費",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The fee paid to enter a place like a museum, theater, historical site, or theme park.",
        "cn_def": "門票、入場費"
      }
    ]
  },
  "shipping fee": {
    "pos": "phr.",
    "en_def": "The money paid to transport large items or products, usually over longer distances or overseas.",
    "cn_def": "運費（船運/空運商品等）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The money paid to transport large items or products, usually over longer distances or overseas.",
        "cn_def": "運費（船運/空運商品等）"
      }
    ]
  },
  "delivery fee": {
    "pos": "phr.",
    "en_def": "The cost charged by a company to bring goods, food, or packages directly to your door.",
    "cn_def": "外送費、配送費",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The cost charged by a company to bring goods, food, or packages directly to your door.",
        "cn_def": "外送費、配送費"
      }
    ]
  },
  "fare": {
    "pos": "n. [C]",
    "en_def": "The price you pay to travel on public transportation, such as a bus, train, or plane.",
    "cn_def": "票價、（車、船、機）費",
    "combined": [
      {
        "pos": "n. [C]",
        "en_def": "The price you pay to travel on public transportation, such as a bus, train, or plane.",
        "cn_def": "票價、（車、船、機）費"
      }
    ]
  },
  "flight fare airfare": {
    "pos": "phr. / n.",
    "en_def": "The price of a ticket for traveling by airplane.",
    "cn_def": "機票票價、航空票價",
    "combined": [
      {
        "pos": "phr. / n.",
        "en_def": "The price of a ticket for traveling by airplane.",
        "cn_def": "機票票價、航空票價"
      }
    ]
  },
  "taxi fare": {
    "pos": "phr.",
    "en_def": "The amount of money you pay for a ride in a taxi cab.",
    "cn_def": "計程車車資",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The amount of money you pay for a ride in a taxi cab.",
        "cn_def": "計程車車資"
      }
    ]
  },
  "permanent": {
    "pos": "adj.",
    "en_def": "lasting or intended to last or remain unchanged indefinitely.",
    "cn_def": "永久的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "lasting or intended to last or remain unchanged indefinitely.",
        "cn_def": "永久的"
      }
    ]
  },
  "permanently": {
    "pos": "adv.",
    "en_def": "in a way that lasts or remains unchanged indefinitely.",
    "cn_def": "永久地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that lasts or remains unchanged indefinitely.",
        "cn_def": "永久地"
      }
    ]
  },
  "temporary": {
    "pos": "adj.",
    "en_def": "lasting for only a limited period of time; not permanent.",
    "cn_def": "暫時的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "lasting for only a limited period of time; not permanent.",
        "cn_def": "暫時的"
      }
    ]
  },
  "eternal": {
    "pos": "adj.",
    "en_def": "lasting or existing forever; without end or beginning.",
    "cn_def": "永恆的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "lasting or existing forever; without end or beginning.",
        "cn_def": "永恆的"
      }
    ]
  },
  "everlasting": {
    "pos": "adj.",
    "en_def": "lasting forever or a very long time.",
    "cn_def": "持久的；永恆的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "lasting forever or a very long time.",
        "cn_def": "持久的；永恆的"
      }
    ]
  },
  "magnet": {
    "pos": "n.",
    "en_def": "a piece of iron that has its component atoms so ordered that the material exhibits properties of magnetism.",
    "cn_def": "磁鐵",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of iron that has its component atoms so ordered that the material exhibits properties of magnetism.",
        "cn_def": "磁鐵"
      }
    ]
  },
  "magnetic": {
    "pos": "adj.",
    "en_def": "exhibiting or relating to magnetism.",
    "cn_def": "有吸引力的；磁性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "exhibiting or relating to magnetism.",
        "cn_def": "有吸引力的；磁性的"
      }
    ]
  },
  "magnetic field": {
    "pos": "phr.",
    "en_def": "a region around a magnetic material or a moving electric charge within which the force of magnetism acts.",
    "cn_def": "磁場",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a region around a magnetic material or a moving electric charge within which the force of magnetism acts.",
        "cn_def": "磁場"
      }
    ]
  },
  "insert": {
    "pos": "v.",
    "en_def": "to place, fit, or thrust something into another thing.",
    "cn_def": "插入",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to place, fit, or thrust something into another thing.",
        "cn_def": "插入"
      }
    ]
  },
  "inserted": {
    "pos": "v.",
    "en_def": "to place, fit, or thrust something into another thing.",
    "cn_def": "插入",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to place, fit, or thrust something into another thing.",
        "cn_def": "插入"
      }
    ]
  },
  "insertion": {
    "pos": "n.",
    "en_def": "the action of inserting something.",
    "cn_def": "插入",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of inserting something.",
        "cn_def": "插入"
      }
    ]
  },
  "capsule": {
    "pos": "n.",
    "en_def": "a small case or container, especially a round or cylindrical one.",
    "cn_def": "膠囊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small case or container, especially a round or cylindrical one.",
        "cn_def": "膠囊"
      }
    ]
  },
  "time capsule": {
    "pos": "phr.",
    "en_def": "a container storing a selection of objects chosen as being typical of the present time, buried for discovery in the future.",
    "cn_def": "時空膠囊",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a container storing a selection of objects chosen as being typical of the present time, buried for discovery in the future.",
        "cn_def": "時空膠囊"
      }
    ]
  },
  "capsule hotel": {
    "pos": "phr.",
    "en_def": "a hotel system with extremely small rooms intended to provide cheap overnight accommodation.",
    "cn_def": "膠囊旅館",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a hotel system with extremely small rooms intended to provide cheap overnight accommodation.",
        "cn_def": "膠囊旅館"
      }
    ]
  },
  "guidance": {
    "pos": "n.",
    "en_def": "advice or information aimed at resolving a problem or difficulty, especially as given by someone in authority.",
    "cn_def": "指導；引導",
    "combined": [
      {
        "pos": "n.",
        "en_def": "advice or information aimed at resolving a problem or difficulty, especially as given by someone in authority.",
        "cn_def": "指導；引導"
      }
    ]
  },
  "under the guidance of": {
    "pos": "phr.",
    "en_def": "being directed or helped by someone.",
    "cn_def": "在...的指導下",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "being directed or helped by someone.",
        "cn_def": "在...的指導下"
      }
    ]
  },
  "guide": {
    "pos": "n.",
    "en_def": "to show or indicate the way to someone; a person who advises or shows the way to others.",
    "cn_def": "引導；嚮導",
    "combined": [
      {
        "pos": "n.",
        "en_def": "to show or indicate the way to someone; a person who advises or shows the way to others.",
        "cn_def": "引導；嚮導"
      },
      {
        "pos": "v.",
        "en_def": "To show someone the way to a place, or to help them understand how to do something.",
        "cn_def": "引導、帶路、指導"
      }
    ]
  },
  "tour guide": {
    "pos": "n. [C]",
    "en_def": "A person whose job is to show tourists around places of interest and give them information.",
    "cn_def": "導遊",
    "combined": [
      {
        "pos": "n. [C]",
        "en_def": "A person whose job is to show tourists around places of interest and give them information.",
        "cn_def": "導遊"
      }
    ]
  },
  "lead": {
    "pos": "v.",
    "en_def": "To go in front of a group of people or animals to show them the way or direction.",
    "cn_def": "帶領、引領、領路",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To go in front of a group of people or animals to show them the way or direction.",
        "cn_def": "帶領、引領、領路"
      }
    ]
  },
  "lead to": {
    "pos": "phr. v.",
    "en_def": "To cause something to happen as a final result; to result in a particular situation.",
    "cn_def": "導致、造成",
    "combined": [
      {
        "pos": "phr. v.",
        "en_def": "To cause something to happen as a final result; to result in a particular situation.",
        "cn_def": "導致、造成"
      }
    ]
  },
  "leadership": {
    "pos": "n. [U]",
    "en_def": "The position of being a leader, or the ability to guide, manage, and inspire a group of people.",
    "cn_def": "領導能力、領導地位",
    "combined": [
      {
        "pos": "n. [U]",
        "en_def": "The position of being a leader, or the ability to guide, manage, and inspire a group of people.",
        "cn_def": "領導能力、領導地位"
      }
    ]
  },
  "direct": {
    "pos": "v.",
    "en_def": "To control, manage, or give official orders and instructions to a group of people or an activity.",
    "cn_def": "指揮、引導、指示",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To control, manage, or give official orders and instructions to a group of people or an activity.",
        "cn_def": "指揮、引導、指示"
      },
      {
        "pos": "v.",
        "en_def": "To tell the actors, musicians, and camera operators what to do in order to make a movie, show, or video.",
        "cn_def": "導演、執導（影片/電影）"
      },
      {
        "pos": "adj.",
        "en_def": "Going straight from one point to another without stopping, turning, or changing path.",
        "cn_def": "直接的、直達的"
      }
    ]
  },
  "director": {
    "pos": "n. [C]",
    "en_def": "A person who is in charge of making a movie, play, or video, telling actors how to play their parts.",
    "cn_def": "導演",
    "combined": [
      {
        "pos": "n. [C]",
        "en_def": "A person who is in charge of making a movie, play, or video, telling actors how to play their parts.",
        "cn_def": "導演"
      }
    ]
  },
  "direction": {
    "pos": "n. [C, U]",
    "en_def": "The position or path towards which someone or something moves, faces, or points.",
    "cn_def": "方向、方位",
    "combined": [
      {
        "pos": "n. [C, U]",
        "en_def": "The position or path towards which someone or something moves, faces, or points.",
        "cn_def": "方向、方位"
      }
    ]
  },
  "in all directions": {
    "pos": "phr.",
    "en_def": "Moving away from a central point towards every possible side, way, or area.",
    "cn_def": "朝四面八方、向各個方向",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Moving away from a central point towards every possible side, way, or area.",
        "cn_def": "朝四面八方、向各個方向"
      }
    ]
  },
  "indirect": {
    "pos": "adj.",
    "en_def": "Not happening or done in a straight way, or not immediately caused by something.",
    "cn_def": "間接的、迂迴的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Not happening or done in a straight way, or not immediately caused by something.",
        "cn_def": "間接的、迂迴的"
      }
    ]
  },
  "external": {
    "pos": "adj.",
    "en_def": "belonging to or forming the outer surface or structure of something.",
    "cn_def": "外用的；外部的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "belonging to or forming the outer surface or structure of something.",
        "cn_def": "外用的；外部的"
      }
    ]
  },
  "exterior": {
    "pos": "adj. / n.",
    "en_def": "forming, situated on, or relating to the outside of something; the outer surface or structure.",
    "cn_def": "外部（的）",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "forming, situated on, or relating to the outside of something; the outer surface or structure.",
        "cn_def": "外部（的）"
      }
    ]
  },
  "outer": {
    "pos": "adj.",
    "en_def": "outside; external.",
    "cn_def": "外面的；外部的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "outside; external.",
        "cn_def": "外面的；外部的"
      }
    ]
  },
  "internal": {
    "pos": "adj.",
    "en_def": "of or situated on the inside.",
    "cn_def": "內部的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "of or situated on the inside.",
        "cn_def": "內部的"
      }
    ]
  },
  "externally": {
    "pos": "adv.",
    "en_def": "with reference to the outer surface or structure of something; outside.",
    "cn_def": "外部地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "with reference to the outer surface or structure of something; outside.",
        "cn_def": "外部地"
      }
    ]
  },
  "fetched": {
    "pos": "v.",
    "en_def": "to go for and then bring back (someone or something) for someone.",
    "cn_def": "拿來；去取",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to go for and then bring back (someone or something) for someone.",
        "cn_def": "拿來；去取"
      }
    ]
  },
  "fetch": {
    "pos": "v.",
    "en_def": "to go for and then bring back (someone or something) for someone.",
    "cn_def": "拿來；去取",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to go for and then bring back (someone or something) for someone.",
        "cn_def": "拿來；去取"
      }
    ]
  },
  "far-fetched": {
    "pos": "adj.",
    "en_def": "unlikely and unconvincing; implausible.",
    "cn_def": "牽強的；難以置信的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "unlikely and unconvincing; implausible.",
        "cn_def": "牽強的；難以置信的"
      }
    ]
  },
  "prospect": {
    "pos": "n.",
    "en_def": "the possibility or likelihood of some future event occurring.",
    "cn_def": "前景；可能性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the possibility or likelihood of some future event occurring.",
        "cn_def": "前景；可能性"
      }
    ]
  },
  "prospective": {
    "pos": "adj.",
    "en_def": "expected or expecting to be something particular in the future.",
    "cn_def": "潛在的；預期的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "expected or expecting to be something particular in the future.",
        "cn_def": "潛在的；預期的"
      }
    ]
  },
  "outlook": {
    "pos": "n.",
    "en_def": "a person's point of view or general attitude to life; a view of the future.",
    "cn_def": "前景；觀點",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person's point of view or general attitude to life; a view of the future.",
        "cn_def": "前景；觀點"
      }
    ]
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "achieving maximum productivity with minimum wasted effort or expense.",
    "cn_def": "有效率的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "achieving maximum productivity with minimum wasted effort or expense.",
        "cn_def": "有效率的"
      }
    ]
  },
  "efficiency": {
    "pos": "n.",
    "en_def": "the state or quality of being efficient.",
    "cn_def": "效率",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state or quality of being efficient.",
        "cn_def": "效率"
      }
    ]
  },
  "efficiently": {
    "pos": "adv.",
    "en_def": "in a way that achieves maximum productivity with minimum wasted effort or expense.",
    "cn_def": "有效率地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that achieves maximum productivity with minimum wasted effort or expense.",
        "cn_def": "有效率地"
      }
    ]
  },
  "inefficient": {
    "pos": "adj.",
    "en_def": "not achieving maximum productivity; wasting or failing to make the best use of time or resources.",
    "cn_def": "沒效率的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not achieving maximum productivity; wasting or failing to make the best use of time or resources.",
        "cn_def": "沒效率的"
      }
    ]
  },
  "effective": {
    "pos": "adj.",
    "en_def": "successful in producing a desired or intended result.",
    "cn_def": "有效的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "successful in producing a desired or intended result.",
        "cn_def": "有效的"
      }
    ]
  },
  "productive": {
    "pos": "adj.",
    "en_def": "producing or able to produce large amounts of goods, crops, or other commodities.",
    "cn_def": "多產的；有生產力的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "producing or able to produce large amounts of goods, crops, or other commodities.",
        "cn_def": "多產的；有生產力的"
      }
    ]
  },
  "agent": {
    "pos": "n.",
    "en_def": "a substance that brings about a chemical or physical effect; a person who acts on behalf of another.",
    "cn_def": "媒介；代理人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a substance that brings about a chemical or physical effect; a person who acts on behalf of another.",
        "cn_def": "媒介；代理人"
      }
    ]
  },
  "agency": {
    "pos": "n.",
    "en_def": "a business or organization established to provide a particular service.",
    "cn_def": "機構；代理處",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a business or organization established to provide a particular service.",
        "cn_def": "機構；代理處"
      }
    ]
  },
  "secret agent": {
    "pos": "phr.",
    "en_def": "a person employed by a government to obtain secret information or conduct operations.",
    "cn_def": "特務；秘密情報員",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a person employed by a government to obtain secret information or conduct operations.",
        "cn_def": "特務；秘密情報員"
      }
    ]
  },
  "real estate agent": {
    "pos": "phr.",
    "en_def": "a person who sells and rents out buildings and land for clients.",
    "cn_def": "房地產仲介",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a person who sells and rents out buildings and land for clients.",
        "cn_def": "房地產仲介"
      }
    ]
  },
  "mend": {
    "pos": "v.",
    "en_def": "to repair (something that is broken or damaged).",
    "cn_def": "修理；癒合",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to repair (something that is broken or damaged).",
        "cn_def": "修理；癒合"
      }
    ]
  },
  "amend": {
    "pos": "v.",
    "en_def": "to make minor changes in a text in order to make it fairer, more accurate, or more up-to-date.",
    "cn_def": "修改；修訂",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make minor changes in a text in order to make it fairer, more accurate, or more up-to-date.",
        "cn_def": "修改；修訂"
      }
    ]
  },
  "mend one's ways": {
    "pos": "phr.",
    "en_def": "to improve one's habits or behavior.",
    "cn_def": "改過自新",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to improve one's habits or behavior.",
        "cn_def": "改過自新"
      }
    ]
  },
  "mend his ways": {
    "pos": "phr.",
    "en_def": "to improve one's habits or behavior.",
    "cn_def": "改過自新",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to improve one's habits or behavior.",
        "cn_def": "改過自新"
      }
    ]
  },
  "mended fences": {
    "pos": "phr.",
    "en_def": "to try to repair a relationship that has been damaged.",
    "cn_def": "修復關係",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to try to repair a relationship that has been damaged.",
        "cn_def": "修復關係"
      }
    ]
  },
  "mend fences": {
    "pos": "phr.",
    "en_def": "to try to repair a relationship that has been damaged.",
    "cn_def": "修復關係",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to try to repair a relationship that has been damaged.",
        "cn_def": "修復關係"
      }
    ]
  },
  "surgery": {
    "pos": "n.",
    "en_def": "the medical treatment of bodily injuries or diseases by incision or manipulation.",
    "cn_def": "外科手術",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the medical treatment of bodily injuries or diseases by incision or manipulation.",
        "cn_def": "外科手術"
      }
    ]
  },
  "plastic surgery": {
    "pos": "phr.",
    "en_def": "the process of reconstructing or repairing parts of the body, especially by the transfer of tissue.",
    "cn_def": "整形手術",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the process of reconstructing or repairing parts of the body, especially by the transfer of tissue.",
        "cn_def": "整形手術"
      }
    ]
  },
  "surgeon": {
    "pos": "n.",
    "en_def": "a medical practitioner qualified to practice surgery.",
    "cn_def": "外科醫生",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a medical practitioner qualified to practice surgery.",
        "cn_def": "外科醫生"
      }
    ]
  },
  "operation": {
    "pos": "n.",
    "en_def": "an act of surgery performed on a patient.",
    "cn_def": "手術；操作",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an act of surgery performed on a patient.",
        "cn_def": "手術；操作"
      },
      {
        "pos": "n. [U, C]",
        "en_def": "The act, process, or method of working, running, or controlling something.",
        "cn_def": "操作、運作、運轉"
      }
    ]
  },
  "operate on a patient": {
    "pos": "phr.",
    "en_def": "To perform a medical surgery or cut on someone to cure an illness or injury.",
    "cn_def": "為病人動手術、幫病人開刀",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To perform a medical surgery or cut on someone to cure an illness or injury.",
        "cn_def": "為病人動手術、幫病人開刀"
      }
    ]
  },
  "operate a machine": {
    "pos": "phr.",
    "en_def": "To control, run, or work a piece of equipment or mechanism safely.",
    "cn_def": "操作機器",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To control, run, or work a piece of equipment or mechanism safely.",
        "cn_def": "操作機器"
      }
    ]
  },
  "business operation": {
    "pos": "phr.",
    "en_def": "The day-to-day activities, processes, and functions that a company performs to make a profit.",
    "cn_def": "商業營運、企業運作",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The day-to-day activities, processes, and functions that a company performs to make a profit.",
        "cn_def": "商業營運、企業運作"
      }
    ]
  },
  "sensor": {
    "pos": "n.",
    "en_def": "a device which detects or measures a physical property and records, indicates, or otherwise responds to it.",
    "cn_def": "感測器",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a device which detects or measures a physical property and records, indicates, or otherwise responds to it.",
        "cn_def": "感測器"
      }
    ]
  },
  "sensory": {
    "pos": "adj.",
    "en_def": "of or relating to sensation or the physical senses; transmitted or perceived by the senses.",
    "cn_def": "感官的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "of or relating to sensation or the physical senses; transmitted or perceived by the senses.",
        "cn_def": "感官的"
      }
    ]
  },
  "sense": {
    "pos": "n.",
    "en_def": "a faculty by which the body perceives an external stimulus; to perceive by a sense.",
    "cn_def": "感覺；感官",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a faculty by which the body perceives an external stimulus; to perceive by a sense.",
        "cn_def": "感覺；感官"
      },
      {
        "pos": "v.",
        "en_def": "To feel, realize, or become aware of something without being told directly.",
        "cn_def": "感覺到、察覺、意識到"
      }
    ]
  },
  "a keen sense of smell": {
    "pos": "phr.",
    "en_def": "A sharp, highly developed, or very good ability to notice or recognize odors and scents.",
    "cn_def": "敏銳的嗅覺",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A sharp, highly developed, or very good ability to notice or recognize odors and scents.",
        "cn_def": "敏銳的嗅覺"
      }
    ]
  },
  "sensible": {
    "pos": "adj.",
    "en_def": "Showing good judgment; practical, wise, and reasonable.",
    "cn_def": "明智的、合理的、懂事的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Showing good judgment; practical, wise, and reasonable.",
        "cn_def": "明智的、合理的、懂事的"
      }
    ]
  },
  "sensitive": {
    "pos": "adj.",
    "en_def": "Easily hurt, damaged, or affected by something; or easily offended or upset by what people say.",
    "cn_def": "敏感的、易受影響的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Easily hurt, damaged, or affected by something; or easily offended or upset by what people say.",
        "cn_def": "敏感的、易受影響的"
      }
    ]
  },
  "are very sensitive to": {
    "pos": "phr.",
    "en_def": "To be easily affected by or highly responsive to something (like light, sound, cold, or criticism).",
    "cn_def": "對…敏感、對…敏銳",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To be easily affected by or highly responsive to something (like light, sound, cold, or criticism).",
        "cn_def": "對…敏感、對…敏銳"
      }
    ]
  },
  "be sensitive to": {
    "pos": "phr.",
    "en_def": "To be easily affected by or highly responsive to something (like light, sound, cold, or criticism).",
    "cn_def": "對…敏感、對…敏銳",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To be easily affected by or highly responsive to something (like light, sound, cold, or criticism).",
        "cn_def": "對…敏感、對…敏銳"
      }
    ]
  },
  "potential": {
    "pos": "n.",
    "en_def": "latent qualities or abilities that may be developed and lead to future success; having the capacity to develop into something in the future.",
    "cn_def": "潛力；潛在的",
    "combined": [
      {
        "pos": "n.",
        "en_def": "latent qualities or abilities that may be developed and lead to future success; having the capacity to develop into something in the future.",
        "cn_def": "潛力；潛在的"
      },
      {
        "pos": "adj.",
        "en_def": "Possible, or able to develop into something or happen in the future.",
        "cn_def": "潛在的、可能的"
      }
    ]
  },
  "potential customer": {
    "pos": "phr.",
    "en_def": "A person who might buy a product or service from a business in the future.",
    "cn_def": "潛在客戶",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A person who might buy a product or service from a business in the future.",
        "cn_def": "潛在客戶"
      }
    ]
  },
  "target audience": {
    "pos": "phr.",
    "en_def": "The specific group of people that an advertisement, product, or program is aimed at.",
    "cn_def": "目標客群、目標觀眾",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The specific group of people that an advertisement, product, or program is aimed at.",
        "cn_def": "目標客群、目標觀眾"
      }
    ]
  },
  "potential threat": {
    "pos": "phr.",
    "en_def": "A person, thing, or situation that is likely to cause harm, danger, or damage in the future.",
    "cn_def": "潛在威脅",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A person, thing, or situation that is likely to cause harm, danger, or damage in the future.",
        "cn_def": "潛在威脅"
      }
    ]
  },
  "potential risk": {
    "pos": "phr.",
    "en_def": "A possibility of something bad, dangerous, or harmful happening as a result of an action or decision.",
    "cn_def": "潛在風險",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A possibility of something bad, dangerous, or harmful happening as a result of an action or decision.",
        "cn_def": "潛在風險"
      }
    ]
  },
  "potentially": {
    "pos": "adv.",
    "en_def": "with the capacity to develop or happen in the future.",
    "cn_def": "潛在地；可能地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "with the capacity to develop or happen in the future.",
        "cn_def": "潛在地；可能地"
      }
    ]
  },
  "possibility": {
    "pos": "n.",
    "en_def": "a thing that may happen or be the case.",
    "cn_def": "可能性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thing that may happen or be the case.",
        "cn_def": "可能性"
      }
    ]
  },
  "miracle": {
    "pos": "n.",
    "en_def": "a surprising and welcome event that is not explicable by natural or scientific laws and is considered to be the work of a divine agency.",
    "cn_def": "奇蹟",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a surprising and welcome event that is not explicable by natural or scientific laws and is considered to be the work of a divine agency.",
        "cn_def": "奇蹟"
      }
    ]
  },
  "miraculous": {
    "pos": "adj.",
    "en_def": "occurring through divine or supernatural intervention, or manifesting such power.",
    "cn_def": "奇蹟般的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "occurring through divine or supernatural intervention, or manifesting such power.",
        "cn_def": "奇蹟般的"
      }
    ]
  },
  "work miracles": {
    "pos": "phr.",
    "en_def": "to bring about extremely good results.",
    "cn_def": "創造奇蹟",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to bring about extremely good results.",
        "cn_def": "創造奇蹟"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
