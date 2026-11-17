// Topic 309 Quiz Data: Production 生產製造
// Source word list: https://www.examword.com/group-topic/production — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T309 - Production 生產製造",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "manufacture",
    "pos": "v.",
    "cn_def": "製造",
    "en_def": "to make goods in large numbers, usually with machines",
    "sentence": "A: Our customers in Europe keep asking whether we can produce the new kitchen blenders ourselves instead of buying them from another company. B: Yes, after we buy the new machines next spring, we plan to {{BLANK}} about five thousand blenders a month at our factory in Taichung.",
    "cn": "A：我們歐洲的客戶一直在問，我們能不能自己生產新的廚房果汁機，而不是向別的公司購買。 B：可以，等我們明年春天買了新機器之後，我們計畫在台中的工廠每個月【製造】大約五千台果汁機。"
  },
  {
    "word": "factory",
    "pos": "n.",
    "cn_def": "工廠",
    "en_def": "a building where workers and machines make goods",
    "sentence": "A: Why does the delivery driver need a visitor pass before he can drive into the parking area this afternoon? B: The {{BLANK}} has new safety rules, so everyone who enters the building where the workers make our furniture must sign in at the front gate and wear a hard hat.",
    "cn": "A：為什麼送貨司機今天下午開進停車區之前需要訪客證？ B：【工廠】有新的安全規定，所以每個進入工人製作我們家具的大樓的人，都必須在前門登記並戴上安全帽。"
  },
  {
    "word": "plant",
    "pos": "n.",
    "cn_def": "工廠；廠房",
    "en_def": "a large factory where a product is made",
    "sentence": "A: I heard the company is opening a new place to produce car batteries, but where will it be built? B: The new {{BLANK}} will be built outside the city near the highway, and it should create about three hundred jobs for local people when it opens next year.",
    "cn": "A：我聽說公司要開一個新的地方來生產汽車電池，但會蓋在哪裡呢？ B：新的【廠房】會蓋在城外靠近高速公路的地方，明年啟用時應該會為當地人創造大約三百個工作機會。"
  },
  {
    "word": "assembly",
    "pos": "n.",
    "cn_def": "組裝",
    "en_def": "the work of putting parts together to make something",
    "sentence": "A: How long does it usually take your team to put together one of the new office chairs before it is ready to ship? B: The {{BLANK}} of each chair takes about twenty minutes, because the workers have to fix the wheels, the seat, and the arms carefully before checking that everything is safe.",
    "cn": "A：你們團隊組好一張新辦公椅、讓它準備好出貨，通常需要多久？ B：每張椅子的【組裝】大約需要二十分鐘，因為工人必須仔細裝好輪子、座椅和扶手，然後再檢查一切是否安全。"
  },
  {
    "word": "assembly line",
    "pos": "n.phr.",
    "cn_def": "裝配線；生產線",
    "en_def": "a line of workers and machines where a product is built step by step as it moves along",
    "sentence": "A: Why did the managers stop all the work on the ground floor for almost two hours this morning? B: One of the machines on the {{BLANK}} broke down, so the cars could not move from one worker to the next, and the engineers had to repair it before anyone could continue.",
    "cn": "A：為什麼經理們今天早上讓一樓所有工作停了將近兩個小時？ B：【裝配線】上有一台機器故障了，所以汽車沒辦法從一個工人移到下一個工人那裡，工程師必須先修好它，大家才能繼續工作。"
  },
  {
    "word": "output",
    "pos": "n.",
    "cn_def": "產量",
    "en_def": "the amount of something that is produced",
    "sentence": "A: Did the factory make more shoes last month after we hired the extra workers for the night shift? B: Yes, our total {{BLANK}} rose by almost twenty percent, so we were finally able to send every order to the stores in Kaohsiung before the holiday sales began.",
    "cn": "A：我們為夜班多僱了工人之後，工廠上個月有做出更多鞋子嗎？ B：有，我們的總【產量】增加了將近百分之二十，所以我們終於能在假期促銷開始前，把每筆訂單都送到高雄的店裡。"
  },
  {
    "word": "capacity",
    "pos": "n.",
    "cn_def": "產能；容量",
    "en_def": "the largest amount a factory or machine can produce",
    "sentence": "A: Can we accept the large order from the hotel chain, or will it be too much for us to handle this quarter? B: Our machines are already working at full {{BLANK}}, so we would need to rent extra equipment or ask another company to help if we want to accept it.",
    "cn": "A：我們能接下那家連鎖飯店的大訂單嗎？還是這一季對我們來說會太多處理不來？ B：我們的機器已經在滿【產能】運轉了，所以如果想接下這筆訂單，我們需要租用額外的設備，或請另一家公司幫忙。"
  },
  {
    "word": "efficiency",
    "pos": "n.",
    "cn_def": "效率",
    "en_def": "doing work well without wasting time, money, or energy",
    "sentence": "A: Why did the manager decide to move the packing tables closer to the loading area last week? B: She wanted to improve {{BLANK}}, because workers were wasting a lot of time walking back and forth, and now they can pack and send boxes much faster than before.",
    "cn": "A：為什麼經理上週決定把包裝桌移到更靠近裝貨區的地方？ B：她想提高【效率】，因為工人來回走動浪費了很多時間，現在他們包裝和寄送箱子比以前快多了。"
  },
  {
    "word": "productivity",
    "pos": "n.",
    "cn_def": "生產力",
    "en_def": "how much work a person or company produces in a certain time",
    "sentence": "A: Has the new training course for the factory staff made any real difference since it started in March? B: Definitely, our {{BLANK}} has gone up a lot, because each worker can now finish more products every hour without making as many mistakes as they did before.",
    "cn": "A：工廠員工的新訓練課程從三月開始以來，真的有帶來什麼改變嗎？ B：當然有，我們的【生產力】提高了很多，因為現在每位工人每小時都能完成更多產品，而且不像以前那樣常出錯。"
  },
  {
    "word": "raw material",
    "pos": "n.phr.",
    "cn_def": "原料",
    "en_def": "a basic natural material used to make products",
    "sentence": "A: Why are we going to raise the price of our paper cups again at the beginning of next month? B: The cost of the main {{BLANK}} we buy from our supplier, which is wood pulp, has increased sharply this year, so we cannot keep our prices the same anymore.",
    "cn": "A：為什麼我們下個月初又要調漲紙杯的價格？ B：我們向供應商購買的主要【原料】，也就是木漿，今年的成本大幅上漲，所以我們沒辦法再維持原價了。"
  },
  {
    "word": "component",
    "pos": "n.",
    "cn_def": "零件；組成部分",
    "en_def": "one of the parts that make up a machine or product",
    "sentence": "A: Why haven't the new printers been sent to our customers yet, even though the order was placed three weeks ago? B: One small electronic {{BLANK}} inside each printer comes from a supplier in Japan, and that shipment was delayed, so we cannot finish building them until it arrives.",
    "cn": "A：為什麼新印表機到現在還沒送到客戶手上，明明訂單三週前就下了？ B：每台印表機裡面有一個小型電子【零件】是日本供應商提供的，那批貨延誤了，所以在它送到之前我們沒辦法完成組裝。"
  },
  {
    "word": "equipment",
    "pos": "n.",
    "cn_def": "設備；器材",
    "en_def": "the tools and machines needed for a job",
    "sentence": "A: Do the new workers need to bring anything special when they start their first shift at the factory on Monday? B: No, the company provides all the safety {{BLANK}}, such as gloves, helmets, and protective glasses, so they only need to wear comfortable shoes and arrive fifteen minutes early.",
    "cn": "A：新進員工週一在工廠上第一個班時，需要帶什麼特別的東西嗎？ B：不用，公司會提供所有安全【設備】，例如手套、安全帽和護目鏡，所以他們只需要穿舒適的鞋子，並提早十五分鐘到。"
  },
  {
    "word": "machinery",
    "pos": "n.",
    "cn_def": "機器；機械",
    "en_def": "machines as a group, especially large ones",
    "sentence": "A: Why is the factory closing for the whole week of the Lunar New Year holiday instead of just three days? B: We are replacing most of the old {{BLANK}} on the production floor with modern machines, and the engineers need several quiet days to install and test everything properly.",
    "cn": "A：為什麼工廠農曆新年要休整整一週，而不是只休三天？ B：我們要把生產區大部分舊【機器】換成現代化的設備，工程師需要好幾天安靜的時間來妥善安裝和測試所有東西。"
  },
  {
    "word": "operator",
    "pos": "n.",
    "cn_def": "操作員",
    "en_def": "a person whose job is to control a machine",
    "sentence": "A: Who should I call if the cutting machine stops working again while I am on the night shift? B: Please contact the machine {{BLANK}}, who controls it every evening, because he has been trained to fix small problems and knows how to restart it safely.",
    "cn": "A：如果我值夜班時切割機又停止運作，我該打電話給誰？ B：請聯絡每天晚上負責操控它的機器【操作員】，因為他受過訓練能修理小問題，也知道如何安全地重新啟動。"
  },
  {
    "word": "supervisor",
    "pos": "n.",
    "cn_def": "主管；監督者",
    "en_def": "a person who watches and directs other workers",
    "sentence": "A: I need to leave work two hours early on Friday to take my son to the doctor, so who should I ask? B: You should talk to your {{BLANK}} first, because she makes the work schedule for our team and will need to find someone else to cover your station.",
    "cn": "A：我週五需要提早兩小時下班帶兒子去看醫生，我應該問誰？ B：你應該先跟你的【主管】談，因為她負責排我們團隊的班表，需要找其他人來代替你的工作崗位。"
  },
  {
    "word": "inspection",
    "pos": "n.",
    "cn_def": "檢查；檢驗",
    "en_def": "a careful check to make sure something is correct or safe",
    "sentence": "A: Why are all the workers cleaning the floors and putting away boxes so carefully this afternoon? B: A government officer is coming tomorrow morning for a safety {{BLANK}}, and if she finds any serious problems, the factory might have to pay a fine or stop work.",
    "cn": "A：為什麼今天下午所有工人都這麼仔細地清潔地板、收拾箱子？ B：明天早上有一位政府官員要來做安全【檢查】，如果她發現任何嚴重問題，工廠可能要付罰款或停工。"
  },
  {
    "word": "quality control",
    "pos": "n.phr.",
    "cn_def": "品質管制；品管",
    "en_def": "checking products to make sure they are good enough",
    "sentence": "A: How did we find out that some of the bottles had cracks before they were sent to the supermarkets? B: Our {{BLANK}} team checks a sample from every box at the end of the line, and they noticed the problem early enough to stop the shipment.",
    "cn": "A：我們是怎麼在瓶子送到超市之前，發現有些瓶子有裂縫的？ B：我們的【品管】團隊會在生產線末端從每一箱抽樣檢查，他們及早發現了問題，來得及攔下那批貨。"
  },
  {
    "word": "standardize",
    "pos": "v.",
    "cn_def": "使標準化",
    "en_def": "to make things follow the same rules or be the same",
    "sentence": "A: Why do the factories in Vietnam and Taiwan produce the same jacket in slightly different sizes? B: They use different measuring methods, so next year we plan to {{BLANK}} the process in both places, which means every worker will follow exactly the same rules and the sizes will match.",
    "cn": "A：為什麼越南和台灣的工廠生產同一款外套，尺寸卻有些不同？ B：他們使用不同的測量方法，所以明年我們打算把兩地的流程【標準化】，也就是說每個工人都會遵守完全相同的規則，尺寸就會一致。"
  },
  {
    "word": "automate",
    "pos": "v.",
    "cn_def": "使自動化",
    "en_def": "to use machines or computers to do work instead of people",
    "sentence": "A: Will the company need to hire more packers when the busy season starts again in November? B: Probably not, because we are going to {{BLANK}} the packing area with robots that can fold boxes and seal them, so our current staff can focus on checking quality instead.",
    "cn": "A：十一月旺季再次開始時，公司需要僱用更多包裝人員嗎？ B：大概不用，因為我們要用能摺箱和封箱的機器人讓包裝區【自動化】，這樣現有的員工就能專心做品質檢查。"
  },
  {
    "word": "streamline",
    "pos": "v.",
    "cn_def": "簡化；使更有效率",
    "en_def": "to make a system simpler and faster",
    "sentence": "A: Customers are complaining that it takes almost two weeks for their orders to leave our building, so what can we do? B: We should {{BLANK}} the ordering steps by removing some of the paperwork and letting the computer system send orders straight to the factory floor.",
    "cn": "A：客戶抱怨他們的訂單要將近兩週才會離開我們的大樓，我們能怎麼辦？ B：我們應該【簡化】下單的步驟，去掉一些文書作業，讓電腦系統把訂單直接送到工廠生產區。"
  },
  {
    "word": "mass production",
    "pos": "n.phr.",
    "cn_def": "大量生產；量產",
    "en_def": "making very large numbers of the same product with machines",
    "sentence": "A: The design team has finished testing the new electric scooter, so when can we start selling it in stores? B: We will begin {{BLANK}} in July, when the factory starts making thousands of scooters each week, and the first ones should reach shops by September.",
    "cn": "A：設計團隊已經完成新電動滑板車的測試了，我們什麼時候可以開始在店裡販售？ B：我們會在七月開始【大量生產】，那時工廠每週會開始製造數千台滑板車，第一批應該在九月前送到店裡。"
  },
  {
    "word": "batch",
    "pos": "n.",
    "cn_def": "一批",
    "en_def": "a group of things made or handled at the same time",
    "sentence": "A: Why did the bakery throw away so many cookies this morning before the shop even opened? B: One {{BLANK}} was left in the oven for too long because the timer broke, so all two hundred cookies made at that time were burned and could not be sold.",
    "cn": "A：為什麼麵包店今天早上還沒開店就丟掉這麼多餅乾？ B：因為計時器壞了，有一【批】在烤箱裡放太久，所以那時做的兩百片餅乾全都烤焦了，不能拿來賣。"
  },
  {
    "word": "supply chain",
    "pos": "n.phr.",
    "cn_def": "供應鏈",
    "en_def": "all the companies and steps involved in making a product and getting it to buyers",
    "sentence": "A: Why are so many electronics companies having trouble getting their products to customers on time this year? B: There are problems all along the {{BLANK}}, from the mines that provide metals to the ships that carry finished goods, so even one delay can affect everyone.",
    "cn": "A：為什麼今年這麼多電子公司都很難準時把產品交給客戶？ B：整個【供應鏈】都出現問題，從提供金屬的礦場到運送成品的船隻都是，所以即使只有一個延誤也會影響到所有人。"
  },
  {
    "word": "logistics",
    "pos": "n.",
    "cn_def": "物流",
    "en_def": "the planning of moving and storing goods",
    "sentence": "A: Who is responsible for planning which trucks take our products to the stores and when they leave? B: Our {{BLANK}} department handles all of that, and they also make sure we have enough storage space and that every delivery arrives at the right place on time.",
    "cn": "A：誰負責規劃哪些卡車把我們的產品送到店裡，以及什麼時候出發？ B：我們的【物流】部門負責所有這些事，他們也會確保我們有足夠的儲存空間，並讓每批貨準時送到正確的地方。"
  },
  {
    "word": "warehouse",
    "pos": "n.",
    "cn_def": "倉庫",
    "en_def": "a large building where goods are stored",
    "sentence": "A: Where should we keep the extra boxes of air conditioners until the summer sales begin next month? B: Let's put them in the {{BLANK}} next to the highway, because it is big enough for thousands of boxes and the delivery trucks can easily load them from there.",
    "cn": "A：在下個月夏季促銷開始前，我們該把多出來的冷氣機箱子放在哪裡？ B：我們把它們放在高速公路旁的【倉庫】吧，因為那裡大到可以放數千箱，送貨卡車也能輕鬆從那裡裝貨。"
  },
  {
    "word": "shipment",
    "pos": "n.",
    "cn_def": "一批貨；運送",
    "en_def": "a load of goods sent together",
    "sentence": "A: Has the customer in Singapore received the two hundred laptops we sent to her office last Tuesday? B: Not yet, because the {{BLANK}} was held at the port for an extra check, but the shipping company told me it should be delivered to her office on Friday.",
    "cn": "A：新加坡那位客戶收到我們上週二寄到她辦公室的兩百台筆電了嗎？ B：還沒，因為那批【貨】在港口被扣下做額外檢查，不過貨運公司跟我說應該週五會送到她的辦公室。"
  },
  {
    "word": "deadline",
    "pos": "n.",
    "cn_def": "截止期限",
    "en_def": "the time or date by which something must be finished",
    "sentence": "A: Do you think the factory can finish all five thousand uniforms for the airline before the end of this month? B: It will be difficult, but the {{BLANK}} is the thirtieth, so the workers will need to stay late every night this week if we want to deliver everything on time.",
    "cn": "A：你覺得工廠能在這個月底前完成航空公司的五千套制服嗎？ B：會很困難，但【截止期限】是三十號，所以如果我們想準時交貨，工人這週每天晚上都得加班。"
  },
  {
    "word": "scale",
    "pos": "n.",
    "cn_def": "規模",
    "en_def": "the size or level of something",
    "sentence": "A: Our small workshop makes about fifty handmade bags a week, but a big department store wants a thousand every month. B: That is a much larger {{BLANK}} than we are used to, so we would need a bigger building, more sewing machines, and at least twenty new workers to do it.",
    "cn": "A：我們的小工作坊一週大約做五十個手工包，但一家大型百貨公司每個月想要一千個。 B：那比我們習慣的【規模】大得多，所以我們需要更大的建築、更多縫紉機，以及至少二十名新員工才能做到。"
  },
  {
    "word": "assemble",
    "pos": "v.",
    "cn_def": "組裝",
    "en_def": "to put the parts of something together",
    "sentence": "A: Do customers have to build the bookshelf themselves, or does it arrive at their homes already complete? B: They need to {{BLANK}} it at home, but we include clear instructions and all the tools they need, so most people can finish it in about thirty minutes.",
    "cn": "A：顧客必須自己組書架，還是送到家時就已經是完成品？ B：他們需要在家自己【組裝】，不過我們附上清楚的說明和所有需要的工具，所以大部分人大約三十分鐘就能完成。"
  },
  {
    "word": "fabricate",
    "pos": "v.",
    "cn_def": "製作；建造",
    "en_def": "to make or build something from different materials, often metal",
    "sentence": "A: Can your company make the special metal frames we need for the new shopping mall entrance? B: Yes, we can {{BLANK}} them in our workshop from steel sheets, and after our welders finish, we will paint them and deliver them to the building site by truck.",
    "cn": "A：貴公司能製作新購物中心入口需要的特殊金屬框架嗎？ B：可以，我們能在工作坊用鋼板【製作】這些框架，等焊工完成後，我們會上漆，再用卡車送到工地。"
  },
  {
    "word": "refine",
    "pos": "v.",
    "cn_def": "改進；精煉",
    "en_def": "to improve something by making small changes",
    "sentence": "A: The new coffee machine works well, but some customers say it is too loud, so what will the engineers do next? B: They plan to {{BLANK}} the design over the next few months by adding softer parts inside, so the machine will be quieter before we start selling it widely.",
    "cn": "A：新咖啡機運作得不錯，但有些顧客說它太吵，工程師接下來會怎麼做？ B：他們計畫在接下來幾個月【改進】設計，在裡面加裝較柔軟的零件，讓機器在我們大量販售前變得更安靜。"
  },
  {
    "word": "industrial",
    "pos": "adj.",
    "cn_def": "工業的",
    "en_def": "connected with factories and industry",
    "sentence": "A: Why is our company moving the main factory away from the city center next year? B: The city wants to turn the old area into homes and parks, so we are moving to a new {{BLANK}} zone outside town where many other factories and warehouses are already located.",
    "cn": "A：為什麼我們公司明年要把主要工廠從市中心遷走？ B：市政府想把舊區改建成住宅和公園，所以我們要搬到城外一個新的【工業】區，那裡已經有許多其他工廠和倉庫。"
  },
  {
    "word": "mechanized",
    "pos": "adj.",
    "cn_def": "機械化的",
    "en_def": "done by machines instead of people or animals",
    "sentence": "A: How can such a small farm produce so many boxes of rice every year with only four employees? B: Most of the work there is {{BLANK}}, so large machines plant, water, and harvest the rice, while the workers mainly check the equipment and drive the trucks to the market.",
    "cn": "A：這麼小的農場只有四名員工，怎麼每年能生產這麼多箱稻米？ B：那裡大部分的工作都是【機械化的】，所以由大型機器負責種植、灌溉和收割稻米，工人主要負責檢查設備和開卡車到市場。"
  }
];

const MCQS = [
  {
    "q": "Our company plans to _____ solar panels in Taiwan next year. The new machines will make about two thousand panels every day.",
    "options": [
      "manufacture",
      "standardize",
      "streamline",
      "automate"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The shoe _____ on Green Road employs about four hundred workers. Most of them work on the morning shift from seven to three.",
    "options": [
      "deadline",
      "batch",
      "factory",
      "inspection"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The car company is building a new _____ near the port. When it opens, it will produce two hundred vehicles a day.",
    "options": [
      "deadline",
      "plant",
      "operator",
      "batch"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Each worker on the _____ adds one part to the phone as it moves past. The finished phones reach the end every thirty seconds.",
    "options": [
      "supply chain",
      "raw material",
      "quality control",
      "assembly line"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "After the new machines were installed, the factory's daily _____ doubled. It now makes six thousand bottles every day instead of three thousand.",
    "options": [
      "deadline",
      "operator",
      "output",
      "logistics"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The plant is running at full _____ this month. It cannot accept any more orders until the busy season ends in December.",
    "options": [
      "capacity",
      "inspection",
      "supervisor",
      "shipment"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The new lights use far less electricity than the old ones. They have improved the energy _____ of the whole building.",
    "options": [
      "inspection",
      "machinery",
      "deadline",
      "efficiency"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Workers who take short breaks often show higher _____ than those who work without stopping. They finish more tasks each hour.",
    "options": [
      "machinery",
      "productivity",
      "logistics",
      "warehouse"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Cotton is the main _____ used in our T-shirt factory. We buy most of it from farmers in India every spring.",
    "options": [
      "raw material",
      "quality control",
      "supply chain",
      "assembly line"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The battery is the most expensive _____ inside the electric bicycle. Replacing it costs almost half the price of a new bike.",
    "options": [
      "operator",
      "deadline",
      "component",
      "warehouse"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "All visitors to the production area must wear safety _____ such as helmets and glasses. These items can be borrowed at the front desk.",
    "options": [
      "logistics",
      "equipment",
      "capacity",
      "output"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The farm bought new heavy _____ to harvest its rice more quickly. The machines cost a lot but save hundreds of working hours.",
    "options": [
      "deadline",
      "inspection",
      "productivity",
      "machinery"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The crane _____ must check the weather before lifting heavy loads. Strong winds can make the work very dangerous for everyone below.",
    "options": [
      "warehouse",
      "component",
      "operator",
      "batch"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "If you need to change your shift, please speak with your _____ first. She is responsible for the weekly work schedule of the team.",
    "options": [
      "supervisor",
      "component",
      "shipment",
      "capacity"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The factory passed its annual safety _____ last week. The officers found no serious problems with the machines or the fire exits.",
    "options": [
      "component",
      "batch",
      "warehouse",
      "inspection"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Every product is checked by our _____ team before it leaves the factory. Items with even small defects are removed and repaired.",
    "options": [
      "raw material",
      "quality control",
      "mass production",
      "supply chain"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The company wants to _____ its training methods in all twelve branches. Every new worker will receive exactly the same instructions.",
    "options": [
      "standardize",
      "fabricate",
      "manufacture",
      "assemble"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Many banks have decided to _____ simple tasks like checking forms. Computers now do this work faster and with fewer mistakes than people.",
    "options": [
      "assemble",
      "fabricate",
      "automate",
      "manufacture"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The manager wants to _____ the hiring process by removing unnecessary steps. New staff should be able to start work within one week.",
    "options": [
      "fabricate",
      "streamline",
      "assemble",
      "manufacture"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The new toy became so popular that the company started _____ in March. Factories now make fifty thousand toys every week.",
    "options": [
      "quality control",
      "raw material",
      "supply chain",
      "mass production"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The chef bakes a fresh _____ of bread every two hours. This way, customers can always buy warm loaves throughout the day.",
    "options": [
      "capacity",
      "deadline",
      "batch",
      "operator"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The storm in Southeast Asia caused problems across the entire _____. Many stores could not get electronics for several weeks.",
    "options": [
      "supply chain",
      "quality control",
      "raw material",
      "assembly line"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Our _____ team plans the delivery routes for all forty trucks. They make sure every order reaches the customer on time.",
    "options": [
      "machinery",
      "capacity",
      "productivity",
      "logistics"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The extra stock is kept in a large _____ near the airport. From there, trucks carry the goods to stores across the island.",
    "options": [
      "component",
      "warehouse",
      "deadline",
      "operator"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The latest _____ of coffee beans arrived from Brazil this morning. Workers are now unloading the bags from the container.",
    "options": [
      "shipment",
      "operator",
      "capacity",
      "inspection"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The designers must finish the new catalog before the _____ on Friday. Otherwise, it will not be printed in time for the trade show.",
    "options": [
      "component",
      "operator",
      "deadline",
      "warehouse"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "It took my brother three hours to _____ the new desk he bought online. The instructions were confusing and several screws were missing.",
    "options": [
      "automate",
      "assemble",
      "standardize",
      "streamline"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The city plans to build a new _____ park for electronics companies. It will be located far away from homes and schools.",
    "options": [
      "mechanized",
      "punctual",
      "curious",
      "industrial"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Farming in this region has become highly _____ over the past twenty years. Large machines now do most of the planting and harvesting.",
    "options": [
      "punctual",
      "curious",
      "mechanized",
      "generous"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The engineers need more time to _____ the design of the new engine. Small changes could make it much quieter and more efficient.",
    "options": [
      "refine",
      "fabricate",
      "assemble",
      "automate"
    ],
    "answer": 0,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "manufacture": {
    "pos": "v.",
    "en_def": "to make goods in large numbers, usually with machines",
    "cn_def": "製造"
  },
  "factory": {
    "pos": "n.",
    "en_def": "a building where workers and machines make goods",
    "cn_def": "工廠"
  },
  "plant": {
    "pos": "n.",
    "en_def": "a large factory where a product is made",
    "cn_def": "工廠；廠房"
  },
  "assembly": {
    "pos": "n.",
    "en_def": "the work of putting parts together to make something",
    "cn_def": "組裝"
  },
  "assembly line": {
    "pos": "n.phr.",
    "en_def": "a line of workers and machines where a product is built step by step as it moves along",
    "cn_def": "裝配線；生產線"
  },
  "output": {
    "pos": "n.",
    "en_def": "the amount of something that is produced",
    "cn_def": "產量"
  },
  "capacity": {
    "pos": "n.",
    "en_def": "the largest amount a factory or machine can produce",
    "cn_def": "產能；容量"
  },
  "efficiency": {
    "pos": "n.",
    "en_def": "doing work well without wasting time, money, or energy",
    "cn_def": "效率"
  },
  "productivity": {
    "pos": "n.",
    "en_def": "how much work a person or company produces in a certain time",
    "cn_def": "生產力"
  },
  "raw material": {
    "pos": "n.phr.",
    "en_def": "a basic natural material used to make products",
    "cn_def": "原料"
  },
  "component": {
    "pos": "n.",
    "en_def": "one of the parts that make up a machine or product",
    "cn_def": "零件；組成部分"
  },
  "equipment": {
    "pos": "n.",
    "en_def": "the tools and machines needed for a job",
    "cn_def": "設備；器材"
  },
  "machinery": {
    "pos": "n.",
    "en_def": "machines as a group, especially large ones",
    "cn_def": "機器；機械"
  },
  "operator": {
    "pos": "n.",
    "en_def": "a person whose job is to control a machine",
    "cn_def": "操作員"
  },
  "supervisor": {
    "pos": "n.",
    "en_def": "a person who watches and directs other workers",
    "cn_def": "主管；監督者"
  },
  "inspection": {
    "pos": "n.",
    "en_def": "a careful check to make sure something is correct or safe",
    "cn_def": "檢查；檢驗"
  },
  "quality control": {
    "pos": "n.phr.",
    "en_def": "checking products to make sure they are good enough",
    "cn_def": "品質管制；品管"
  },
  "standardize": {
    "pos": "v.",
    "en_def": "to make things follow the same rules or be the same",
    "cn_def": "使標準化"
  },
  "automate": {
    "pos": "v.",
    "en_def": "to use machines or computers to do work instead of people",
    "cn_def": "使自動化"
  },
  "streamline": {
    "pos": "v.",
    "en_def": "to make a system simpler and faster",
    "cn_def": "簡化；使更有效率"
  },
  "mass production": {
    "pos": "n.phr.",
    "en_def": "making very large numbers of the same product with machines",
    "cn_def": "大量生產；量產"
  },
  "batch": {
    "pos": "n.",
    "en_def": "a group of things made or handled at the same time",
    "cn_def": "一批"
  },
  "supply chain": {
    "pos": "n.phr.",
    "en_def": "all the companies and steps involved in making a product and getting it to buyers",
    "cn_def": "供應鏈"
  },
  "logistics": {
    "pos": "n.",
    "en_def": "the planning of moving and storing goods",
    "cn_def": "物流"
  },
  "warehouse": {
    "pos": "n.",
    "en_def": "a large building where goods are stored",
    "cn_def": "倉庫"
  },
  "shipment": {
    "pos": "n.",
    "en_def": "a load of goods sent together",
    "cn_def": "一批貨；運送"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "the time or date by which something must be finished",
    "cn_def": "截止期限"
  },
  "scale": {
    "pos": "n.",
    "en_def": "the size or level of something",
    "cn_def": "規模"
  },
  "assemble": {
    "pos": "v.",
    "en_def": "to put the parts of something together",
    "cn_def": "組裝"
  },
  "fabricate": {
    "pos": "v.",
    "en_def": "to make or build something from different materials, often metal",
    "cn_def": "製作；建造"
  },
  "refine": {
    "pos": "v.",
    "en_def": "to improve something by making small changes",
    "cn_def": "改進；精煉"
  },
  "industrial": {
    "pos": "adj.",
    "en_def": "connected with factories and industry",
    "cn_def": "工業的"
  },
  "mechanized": {
    "pos": "adj.",
    "en_def": "done by machines instead of people or animals",
    "cn_def": "機械化的"
  }
};

const EXTRA_GLOSSES = {};
