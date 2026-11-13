// Unit 3 Quiz Data: equivalent – domain name
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Basic U3 - equivalent – domain name",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "equivalent",
    "pos": "adj.",
    "cn_def": "相等的；等值的",
    "en_def": "Equal in value, amount, function, or meaning.",
    "sentence": "The doctor said that drinking one large glass of this special juice is exactly {{BLANK}} to eating three servings of raw vegetables.",
    "cn": "醫生說喝一大杯這種特別的果汁完全相當於吃三份生菜。"
  },
  {
    "word": "negotiable",
    "pos": "adj.",
    "cn_def": "可協商的",
    "en_def": "Open to discussion or modification.",
    "sentence": "The starting salary for this position is fixed, but the number of vacation days is entirely {{BLANK}} depending on your experience.",
    "cn": "這個職位的起薪是固定的，但休假天數完全是可協商的，這取決於你的經驗。"
  },
  {
    "word": "transactional",
    "pos": "adj.",
    "cn_def": "交易的",
    "en_def": "Relating to the conducting of business or exchange.",
    "sentence": "Some people view modern relationships in a purely {{BLANK}} way, measuring exactly what they give and what they get in return.",
    "cn": "有些人以純粹交易的方式看待現代人際關係，精確地衡量他們付出了什麼以及得到了什麼回報。"
  },
  {
    "word": "exclusive",
    "pos": "adj.",
    "cn_def": "獨家的；專屬的",
    "en_def": "Restricted or limited to the person, group, or area concerned.",
    "sentence": "Residents of this luxury community enjoy the {{BLANK}} use of the large outdoor swimming pool and the fully equipped modern gym.",
    "cn": "這個豪華社區的居民享有大型戶外游泳池和設備齊全的現代化健身房的專屬的使用權。"
  },
  {
    "word": "cyber",
    "pos": "adj.",
    "cn_def": "網路的；電腦的",
    "en_def": "Relating to the culture of computers, information technology, and virtual reality.",
    "sentence": "The national government has hired a team of experts to protect the country's essential infrastructure from potential {{BLANK}} attacks by hackers.",
    "cn": "國家政府聘請了一個專家團隊來保護國家重要的基礎設施，免受駭客潛在的網路的攻擊。"
  },
  {
    "word": "roughly equivalent",
    "pos": "phr.",
    "cn_def": "大約相等的",
    "en_def": "Approximately equal in value or amount.",
    "sentence": "The amount of energy consumed by this small town is {{BLANK}} to the energy used by a single large factory.",
    "cn": "這個小鎮消耗的能源數量與一家大型工廠使用的能源大約相等的。"
  },
  {
    "word": "exclusively",
    "pos": "adv.",
    "cn_def": "專門地；獨家地",
    "en_def": "To the exclusion of others; only.",
    "sentence": "The expensive new restaurant caters {{BLANK}} to wealthy celebrities and powerful politicians who want a quiet place to eat in peace.",
    "cn": "這家昂貴的新餐廳專門地迎合想要一個安靜的地方和平用餐的富有的名人和有權勢的政治人物。"
  },
  {
    "word": "asset",
    "pos": "n.",
    "cn_def": "資產；有用的人或物",
    "en_def": "A useful or valuable thing, person, or quality.",
    "sentence": "The manager believes that Jason is a hard-working, intelligent employee who would undoubtedly be an {{BLANK}} to any company.",
    "cn": "經理相信傑森是一位努力工作且聰明的員工，他無疑會是任何公司的寶貴資產。"
  },
  {
    "word": "token",
    "pos": "n.",
    "cn_def": "代幣；象徵",
    "en_def": "A thing serving as a visible or tangible representation of a fact, quality, or feeling.",
    "sentence": "If you don't have a modern electronic travel card, you can simply buy a plastic {{BLANK}} from the vending machine.",
    "cn": "如果你沒有現代的電子交通卡，你可以直接從自動售票機買一枚塑膠代幣。"
  },
  {
    "word": "investment",
    "pos": "n.",
    "cn_def": "投資",
    "en_def": "The action or process of investing money for profit or material result.",
    "sentence": "Buying a house in this rapidly growing neighborhood is generally considered a very safe and profitable {{BLANK}} for the future.",
    "cn": "在這個快速發展的社區買房子，通常被認為是對未來非常安全且有利可圖的投資。"
  },
  {
    "word": "investor",
    "pos": "n.",
    "cn_def": "投資者",
    "en_def": "A person or organization that puts money into financial schemes.",
    "sentence": "The young entrepreneur is actively searching for a wealthy {{BLANK}} who can provide enough funding to start his new tech business.",
    "cn": "這位年輕的企業家正在積極尋找一位富有的投資者，以提供足夠的資金來啟動他的新科技事業。"
  },
  {
    "word": "equivalence",
    "pos": "n.",
    "cn_def": "相等；等值",
    "en_def": "The condition of being equal or equivalent in value, worth, or function.",
    "sentence": "The mathematics teacher spent the entire lesson explaining the logical {{BLANK}} between the two complex formulas written on the board.",
    "cn": "數學老師花了整節課解釋寫在黑板上的兩個複雜公式之間的邏輯相等關係。"
  },
  {
    "word": "property",
    "pos": "n.",
    "cn_def": "財產；特性",
    "en_def": "A thing or things belonging to someone; a characteristic.",
    "sentence": "Owen had always wanted to build a large wooden house on his own {{BLANK}}, far away from the noisy city streets.",
    "cn": "歐文一直想在自己的財產（土地）上建一棟大木屋，遠離喧囂的城市街道。"
  },
  {
    "word": "possessions",
    "pos": "n.",
    "cn_def": "擁有；所有物",
    "en_def": "The state of having, owning, or controlling something.",
    "sentence": "The tragic family lost all their valuable {{BLANK}} when their wooden house suddenly burned down during the terrible summer wildfire.",
    "cn": "這個悲慘的家庭失去了所有寶貴的所有物，當他們木造的房子在可怕的夏季野火中突然燒毀時。"
  },
  {
    "word": "negotiation",
    "pos": "n.",
    "cn_def": "談判",
    "en_def": "Discussion aimed at reaching an agreement.",
    "sentence": "After three days of intense {{BLANK}}, the labor union and the factory managers finally agreed on a fair salary increase for workers.",
    "cn": "經過三天的激烈談判，工會和工廠經理們終於同意為工人提供公平的加薪。"
  },
  {
    "word": "negotiator",
    "pos": "n.",
    "cn_def": "談判者",
    "en_def": "A person who conducts negotiations.",
    "sentence": "The police department sent in their best and most experienced {{BLANK}} to convince the armed bank robbers to release the terrified hostages.",
    "cn": "警察局派出了他們最優秀且經驗最豐富的談判者，以說服武裝的銀行搶匪釋放受驚的人質。"
  },
  {
    "word": "transaction",
    "pos": "n.",
    "cn_def": "交易",
    "en_def": "An instance of buying or selling something; a business deal.",
    "sentence": "John carefully checked his printed receipt after making a large {{BLANK}} at the local bank to ensure no mistakes were made.",
    "cn": "在當地銀行進行了一筆大額交易後，約翰仔細檢查了他列印出來的收據，以確保沒有發生錯誤。"
  },
  {
    "word": "trail",
    "pos": "n./v.",
    "cn_def": "痕跡；小徑",
    "en_def": "A mark or series of signs left behind; a path in the countryside.",
    "sentence": "The experienced hunters quietly followed the {{BLANK}} of fresh footprints in the deep snow to eventually find the large bear.",
    "cn": "經驗豐富的獵人安靜地沿著深雪中新鮮腳印的痕跡，最終找到了那隻大熊。"
  },
  {
    "word": "owner",
    "pos": "n.",
    "cn_def": "擁有者；主人",
    "en_def": "A person who owns something.",
    "sentence": "The proud {{BLANK}} of the newly opened bakery stood outside his shop, offering free samples of bread to passing customers.",
    "cn": "新開的麵包店自豪的老闆站在他的店外，向路過的顧客提供免費的麵包試吃。"
  },
  {
    "word": "ownership",
    "pos": "n.",
    "cn_def": "所有權",
    "en_def": "The act, state, or right of possessing something.",
    "sentence": "John now has the legal documents required to formally show his {{BLANK}} of the beautiful beach house that he just purchased.",
    "cn": "約翰現在擁有了正式顯示他對剛買的美麗海灘別墅的所有權所需的法律文件。"
  },
  {
    "word": "domain",
    "pos": "n.",
    "cn_def": "領土；領域",
    "en_def": "An area of territory owned or controlled; a specified sphere of activity or knowledge.",
    "sentence": "In historical times, the powerful king's {{BLANK}} spread from the western snowy mountains all the way to the hot eastern desert.",
    "cn": "在歷史時期，這位強大國王的領土從西邊的雪山一直延伸到東邊炎熱的沙漠。"
  },
  {
    "word": "inclusiveness",
    "pos": "n.",
    "cn_def": "包容性",
    "en_def": "The quality of including all sections of society.",
    "sentence": "The progressive school prides itself on its high level of {{BLANK}}, ensuring that students from all different backgrounds feel totally welcome.",
    "cn": "這所進步的學校為其高度的包容性感到自豪，確保來自所有不同背景的學生都感到完全受歡迎。"
  },
  {
    "word": "cryptocurrency",
    "pos": "n.",
    "cn_def": "加密貨幣",
    "en_def": "A digital currency in which transactions are verified by a decentralized system.",
    "sentence": "Many young investors believe that {{BLANK}} will eventually replace traditional banks and completely change the way we buy and sell goods.",
    "cn": "許多年輕投資者相信加密貨幣最終將取代傳統銀行，並徹底改變我們買賣商品的方式。"
  },
  {
    "word": "formatted",
    "pos": "v./n.",
    "cn_def": "格式；編排",
    "en_def": "To arrange or set out something in a particular way.",
    "sentence": "Katherine carefully {{BLANK}} the final financial report in an easy-to-read way so that the clients could understand it quickly.",
    "cn": "凱薩琳小心地將最終的財務報告編排成易於閱讀的方式，以便客戶能迅速理解。"
  },
  {
    "word": "embraced",
    "pos": "v./n.",
    "cn_def": "欣然接受；擁抱",
    "en_def": "To accept or support a belief or change willingly and enthusiastically; a hug.",
    "sentence": "The citizens happily {{BLANK}} the new safety law because they believed it would make the crowded city much safer for their children.",
    "cn": "公民們快樂地欣然接受了新的安全法律，因為他們相信這將使擁擠的城市對他們的孩子來說安全許多。"
  },
  {
    "word": "invest your savings wisely in",
    "pos": "v.",
    "cn_def": "投資",
    "en_def": "To put money into financial schemes, shares, property, or a commercial venture.",
    "sentence": "If you choose to {{BLANK}} the stock market, you could potentially double your money in just a few years.",
    "cn": "如果你選擇明智地將積蓄投資於股票市場，你可能會在短短幾年內讓你的錢翻倍。"
  },
  {
    "word": "possess",
    "pos": "v.",
    "cn_def": "擁有",
    "en_def": "To have or own something.",
    "sentence": "In order to become a successful detective, you must {{BLANK}} a highly logical mind and excellent problem-solving skills.",
    "cn": "為了成為一名成功的偵探，你必須擁有高度邏輯的頭腦和出色的解決問題技巧。"
  },
  {
    "word": "negotiate",
    "pos": "v.",
    "cn_def": "談判；協商",
    "en_def": "To try to reach an agreement or compromise by discussion with others.",
    "sentence": "The government firmly refuses to {{BLANK}} with terrorists because it would encourage them to commit even more violent crimes in the future.",
    "cn": "政府堅決拒絕與恐怖份子談判，因為這會鼓勵他們在未來犯下更暴力的罪行。"
  },
  {
    "word": "ensure",
    "pos": "v.",
    "cn_def": "確保（+事情）",
    "en_def": "To make certain that something shall occur or be the case.",
    "sentence": "Exercising every day will effectively {{BLANK}} that you fall into a deep and restful sleep when you go to bed at night.",
    "cn": "每天運動將有效地確保你在晚上上床睡覺時能進入深層且平靜的睡眠。"
  },
  {
    "word": "assured",
    "pos": "v.",
    "cn_def": "向某人保證",
    "en_def": "To tell someone something positively or confidently to dispel any doubts.",
    "sentence": "The experienced mechanic {{BLANK}} me that the car would be perfectly safe to drive after he completely repaired the damaged brakes.",
    "cn": "經驗豐富的技師向我保證，在他完全修好損壞的煞車後，這輛車開起來會非常安全。"
  },
  {
    "word": "guarantee",
    "pos": "v./n.",
    "cn_def": "保證；擔保",
    "en_def": "To promise; a formal promise or assurance.",
    "sentence": "I can confidently {{BLANK}} that you will be incredibly successful in your new career if you just continue to work hard.",
    "cn": "我可以自信地保證，如果你只是繼續努力工作，你在你的新職涯中將會難以置信地成功。"
  },
  {
    "word": "fully embrace",
    "pos": "v.",
    "cn_def": "完全接受",
    "en_def": "To accept something completely and enthusiastically.",
    "sentence": "To succeed in this fast-paced technology industry, you must {{BLANK}} new ideas and never stop learning from your mistakes.",
    "cn": "要在這個快節奏的科技產業中取得成功，你必須完全接受新想法，並且永遠不要停止從錯誤中學習。"
  },
  {
    "word": "physical asset",
    "pos": "phr.",
    "cn_def": "實體資產",
    "en_def": "An item of economic value that has a tangible existence.",
    "sentence": "The struggling business was forced to sell off a major {{BLANK}} to quickly pay its mounting debts to the bank.",
    "cn": "這家陷入困境的企業被迫賣掉一項主要的實體資產，以迅速償還其對銀行不斷增加的債務。"
  },
  {
    "word": "valuable asset",
    "pos": "phr.",
    "cn_def": "寶貴的資產",
    "en_def": "Something that is very useful or worth a lot of money.",
    "sentence": "Your ability to speak three different languages fluently is a {{BLANK}} in today's highly competitive global job market.",
    "cn": "你能流利地說三種不同語言的能力，在當今競爭激烈的全球就業市場中是一項寶貴的資產。"
  },
  {
    "word": "liquid assets",
    "pos": "phr.",
    "cn_def": "流動資產",
    "en_def": "Cash or an asset that can be readily converted to cash.",
    "sentence": "During the severe economic crisis, the investors wanted to ensure they had enough {{BLANK}} available to survive the year.",
    "cn": "在嚴重的經濟危機期間，投資者希望確保他們有足夠的流動資產來度過這一年。"
  },
  {
    "word": "single journey token",
    "pos": "phr.",
    "cn_def": "單程代幣",
    "en_def": "A coin-like object used to pay for one trip on public transport.",
    "sentence": "The tourist who was visiting Taipei for the first time bought a {{BLANK}} to take the MRT to the famous night market.",
    "cn": "第一次來台北旅遊的遊客買了一枚單程代幣，搭乘捷運去著名的夜市。"
  },
  {
    "word": "as a token of",
    "pos": "phr.",
    "cn_def": "作為...的象徵/表示",
    "en_def": "As a sign or symbol of something.",
    "sentence": "Edward gave his lovely girlfriend some expensive gold jewelry {{BLANK}} his deep and eternal love for her.",
    "cn": "愛德華給了他可愛的女朋友一些昂貴的金飾，作為他對她深切且永恆之愛的象徵。"
  },
  {
    "word": "by the same token",
    "pos": "phr.",
    "cn_def": "同理；同樣地",
    "en_def": "In the same way or for the same reason.",
    "sentence": "There isn't enough hard evidence to prove your claim, but {{BLANK}}, I cannot prove that you are entirely wrong either.",
    "cn": "沒有足夠的確鑿證據來證明你的主張，但同理，我也無法證明你完全錯了。"
  },
  {
    "word": "token of appreciation",
    "pos": "phr.",
    "cn_def": "感謝的表示",
    "en_def": "A small gift or gesture to express gratitude.",
    "sentence": "The boss gave everyone a small bonus at the end of the busy week as a {{BLANK}} for their hard work.",
    "cn": "在忙碌的一週結束時，老闆給了每個人一筆小獎金，作為對他們辛勤工作的感謝的表示。"
  },
  {
    "word": "format a document",
    "pos": "phr.",
    "cn_def": "將文件格式化/編排文件",
    "en_def": "To arrange the text and layout of a computer file.",
    "sentence": "It usually takes me about twenty minutes to {{BLANK}} properly before I send it to my university professor.",
    "cn": "在我將文件發送給大學教授之前，通常需要花大約二十分鐘來正確地編排文件。"
  },
  {
    "word": "electronic format",
    "pos": "phr.",
    "cn_def": "電子格式",
    "en_def": "The arrangement of data for computer processing or display.",
    "sentence": "In the modern age, most of these classic books are now widely available in {{BLANK}} for digital readers.",
    "cn": "在現代，大多數這些經典書籍現在都廣泛地以電子格式提供給數位閱讀器。"
  },
  {
    "word": "digital format",
    "pos": "phr.",
    "cn_def": "數位格式",
    "en_def": "Data that is stored in a binary form for computers.",
    "sentence": "We need to save all the old family photographs in a {{BLANK}} so they won't be ruined by moisture over time.",
    "cn": "我們需要將所有舊的家庭照片以數位格式保存，這樣它們才不會隨著時間的推移而被濕氣破壞。"
  },
  {
    "word": "standard format",
    "pos": "phr.",
    "cn_def": "標準格式",
    "en_def": "A usual or accepted way of arranging something.",
    "sentence": "When you write a formal business email, you should always follow the {{BLANK}} to maintain a professional appearance.",
    "cn": "當你寫正式的商業電子郵件時，你應該總是遵循標準格式以維持專業的形象。"
  },
  {
    "word": "warm embrace",
    "pos": "phr.",
    "cn_def": "溫暖的擁抱",
    "en_def": "A friendly and affectionate hug.",
    "sentence": "After being away for a whole year, she greeted her beloved mother at the airport with a very {{BLANK}}.",
    "cn": "離開整整一年後，她在機場用一個非常溫暖的擁抱迎接了她深愛的母親。"
  },
  {
    "word": "embrace change",
    "pos": "phr.",
    "cn_def": "欣然接受改變",
    "en_def": "To accept new situations and adapt to them willingly.",
    "sentence": "Some older employees find it difficult to {{BLANK}}, but it is absolutely necessary for the company to grow and evolve.",
    "cn": "一些較年長的員工覺得很難欣然接受改變，但這對於公司的成長和發展是絕對必要的。"
  },
  {
    "word": "overseas investment",
    "pos": "phr.",
    "cn_def": "海外投資",
    "en_def": "Money put into businesses or property in foreign countries.",
    "sentence": "The local government is currently trying to encourage {{BLANK}} to boost the economy and create more job opportunities for citizens.",
    "cn": "當地政府目前正試圖鼓勵海外投資，以刺激經濟並為公民創造更多就業機會。"
  },
  {
    "word": "return on investment",
    "pos": "phr.",
    "cn_def": "投資回報率",
    "en_def": "The profit from an activity compared to its cost.",
    "sentence": "Before buying the expensive new machinery, the factory manager carefully calculated the expected {{BLANK}} to ensure it was worthwhile.",
    "cn": "在購買昂貴的新機器之前，工廠經理仔細計算了預期的投資回報率，以確保這是值得的。"
  },
  {
    "word": "the equivalent of",
    "pos": "phr.",
    "cn_def": "...的等值物/等同於",
    "en_def": "Something that has the same value or meaning as another thing.",
    "sentence": "For young Alex, paying his monthly taxes was basically {{BLANK}} having a healthy tooth slowly pulled out by a dentist.",
    "cn": "對年輕的亞歷克斯來說，繳納每月的稅金基本上就等同於讓牙醫慢慢拔掉一顆健康的牙齒。"
  },
  {
    "word": "equivalent amount",
    "pos": "phr.",
    "cn_def": "等量",
    "en_def": "An equal quantity of something.",
    "sentence": "If you substitute honey for sugar in this recipe, you should use an {{BLANK}} to ensure the cake tastes sweet enough.",
    "cn": "如果你在這個食譜中用蜂蜜代替糖，你應該使用等量以確保蛋糕嚐起來夠甜。"
  },
  {
    "word": "personal property",
    "pos": "phr.",
    "cn_def": "個人財產",
    "en_def": "Movable belongings owned by an individual.",
    "sentence": "Please remember to take all your {{BLANK}} with you when leaving the train, including your bags, phones, and umbrellas.",
    "cn": "離開火車時，請記得帶走你所有的個人財產，包含你的包包、手機和雨傘。"
  },
  {
    "word": "public property",
    "pos": "phr.",
    "cn_def": "公共財產",
    "en_def": "Land, buildings, or equipment owned by the government.",
    "sentence": "The city's beautiful parks and outdoor sports facilities are considered {{BLANK}}, and they are strictly for the enjoyment of everyone.",
    "cn": "城市裡美麗的公園和戶外運動設施被認為是公共財產，且嚴格來說是為了讓大家享受的。"
  },
  {
    "word": "intellectual property",
    "pos": "phr.",
    "cn_def": "智慧財產",
    "en_def": "Intangible property that is the result of creativity, such as patents or copyrights.",
    "sentence": "The tech company takes {{BLANK}} theft very seriously, and they will immediately sue anyone who steals their software designs.",
    "cn": "這家科技公司非常重視智慧財產的竊盜，他們會立刻起訴任何竊取他們軟體設計的人。"
  },
  {
    "word": "healing property",
    "pos": "phr.",
    "cn_def": "療效；治療特性",
    "en_def": "The characteristic of a substance that helps cure illness.",
    "sentence": "I read in an ancient medical book that pure honey may actually have some remarkable {{BLANK}} for curing sore throats.",
    "cn": "我在一本古老的醫學書上讀到，純蜂蜜實際上可能對治癒喉嚨痛有一些顯著的療效。"
  },
  {
    "word": "took possession of",
    "pos": "phr.",
    "cn_def": "取得...的所有權",
    "en_def": "To begin to own or control something.",
    "sentence": "Valerie excitedly {{BLANK}} her shiny new sports car exactly two weeks after she paid the dealership in full.",
    "cn": "瓦萊麗在全額付給經銷商整整兩週後，興奮地取得了她閃亮新跑車的所有權。"
  },
  {
    "word": "in possession of",
    "pos": "phr.",
    "cn_def": "擁有...",
    "en_def": "Holding or owning something.",
    "sentence": "The police officer quickly discovered that Harold was {{BLANK}} the secret code needed to open the bank's main safe.",
    "cn": "警察很快就發現哈羅德擁有打開銀行主保險箱所需的密碼。"
  },
  {
    "word": "has it in his possession",
    "pos": "phr.",
    "cn_def": "擁有某物；持有某物",
    "en_def": "To physically hold or control an item.",
    "sentence": "A kind man called me this morning to say he found my lost wallet and currently {{BLANK}}.",
    "cn": "一位好心的男士今早打電話給我說他找到了我遺失的錢包，並且目前持有它。"
  },
  {
    "word": "refuse to negotiate",
    "pos": "phr.",
    "cn_def": "拒絕談判",
    "en_def": "To decline to discuss an agreement.",
    "sentence": "If the buyers stubbornly {{BLANK}} the high price of the house, we will just have to look for another buyer.",
    "cn": "如果買家固執地拒絕協商這棟房子的高昂價格，我們就只好尋找另一個買家了。"
  },
  {
    "word": "make a transaction",
    "pos": "phr.",
    "cn_def": "進行交易",
    "en_def": "To complete a business deal or payment.",
    "sentence": "Whenever you {{BLANK}} online, you should always double-check that the website is completely secure and highly trustworthy.",
    "cn": "每當你在線上進行交易時，你應該總是再次確認該網站是完全安全且高度值得信賴的。"
  },
  {
    "word": "business transaction",
    "pos": "phr.",
    "cn_def": "商業交易",
    "en_def": "An interaction between a buyer and a seller.",
    "sentence": "The two massive international companies finalized their complex {{BLANK}} after months of planning and consulting with expensive corporate lawyers.",
    "cn": "經過幾個月的計畫並諮詢了昂貴的企業律師後，這兩家龐大的國際公司最終完成了他們複雜的商業交易。"
  },
  {
    "word": "financial transaction",
    "pos": "phr.",
    "cn_def": "財務交易",
    "en_def": "An agreement or movement carried out between a buyer and a seller to exchange an asset for payment.",
    "sentence": "Modern banking apps allow users to track every single {{BLANK}} they make directly from their smartphones with incredible ease.",
    "cn": "現代銀行應用程式讓使用者能極其輕鬆地直接從他們的智慧型手機追蹤他們進行的每一筆財務交易。"
  },
  {
    "word": "follow the trail",
    "pos": "phr.",
    "cn_def": "沿著小徑/蹤跡走",
    "en_def": "To walk along a path or track.",
    "sentence": "If we just {{BLANK}} carefully through the thick forest, we will eventually reach the beautiful waterfall at the end.",
    "cn": "如果我們只是小心地沿著小徑走穿過茂密的森林，我們最終會到達盡頭美麗的瀑布。"
  },
  {
    "word": "off the trail",
    "pos": "phr.",
    "cn_def": "偏離小徑",
    "en_def": "Away from the designated path.",
    "sentence": "Jessica wandered {{BLANK}} to take some photos of the wild flowers and unfortunately got completely lost in the forest.",
    "cn": "潔西卡偏離小徑去拍一些野花的照片，不幸地完全在森林中迷路了。"
  },
  {
    "word": "leave a trail",
    "pos": "phr.",
    "cn_def": "留下痕跡",
    "en_def": "To create a series of marks or signs behind you.",
    "sentence": "The leaky pipe managed to {{BLANK}} of dirty water all the way from the kitchen to the front door.",
    "cn": "漏水的水管一路從廚房到前門留下了一道髒水的痕跡。"
  },
  {
    "word": "hiking trail",
    "pos": "phr.",
    "cn_def": "登山步道",
    "en_def": "A path created for people to walk through nature.",
    "sentence": "The national park boasts a famously difficult {{BLANK}} that attracts thousands of adventurous climbers from all over the world.",
    "cn": "這個國家公園擁有一條著名的困難登山步道，吸引了來自世界各地數千名熱愛冒險的攀岩者。"
  },
  {
    "word": "ensure safety",
    "pos": "phr.",
    "cn_def": "確保安全",
    "en_def": "To make certain that people are protected from harm.",
    "sentence": "The airline has introduced several new and strict regulations to {{BLANK}} for all passengers traveling during the harsh winter storm.",
    "cn": "該航空公司引入了幾項新的嚴格規定，以確保在惡劣冬季風暴期間旅行的所有乘客的安全。"
  },
  {
    "word": "I assure you",
    "pos": "phr.",
    "cn_def": "我向你保證",
    "en_def": "A phrase used to confidently tell someone that something is true.",
    "sentence": "{{BLANK}}, your pet pig will be well cared for and given plenty of delicious food while you are on vacation.",
    "cn": "我向你保證，在你度假期間，你的寵物豬會得到很好的照顧並獲得大量美味的食物。"
  },
  {
    "word": "make sure",
    "pos": "phr.",
    "cn_def": "確保；確定",
    "en_def": "To confirm or ensure that something happens.",
    "sentence": "You need to {{BLANK}} that all of your construction materials arrive at the building site in a timely and organized manner.",
    "cn": "你需要確保你所有的建築材料都能及時且有條理地抵達建築工地。"
  },
  {
    "word": "exclusive of",
    "pos": "phr.",
    "cn_def": "不包括",
    "en_def": "Not including something.",
    "sentence": "The beautiful silver watch costs exactly $200, {{BLANK}} the local sales tax that will be added at the cash register.",
    "cn": "這隻美麗的銀色手錶剛好要價200美元，不包括將在收銀台附加的當地營業稅。"
  },
  {
    "word": "exclusive right",
    "pos": "phr.",
    "cn_def": "獨家權利/專屬權利",
    "en_def": "The power to do something that is granted to only one person or group.",
    "sentence": "The author gave the publishing company the {{BLANK}} to print and distribute her brand new fantasy novel across North America.",
    "cn": "作者給予這家出版公司在整個北美印製和發行她全新奇幻小說的獨家權利。"
  },
  {
    "word": "joint ownership",
    "pos": "phr.",
    "cn_def": "共同擁有",
    "en_def": "The state of a property being owned by two or more people.",
    "sentence": "The two brothers have {{BLANK}} of the family farm, which unfortunately means they often argue over how to run it.",
    "cn": "這兩兄弟對家庭農場擁有共同擁有權，不幸的是這意味著他們經常為了如何經營它而爭吵。"
  },
  {
    "word": "money back guarantee",
    "pos": "phr.",
    "cn_def": "退款保證",
    "en_def": "A promise to return a buyer's money if they are not satisfied.",
    "sentence": "All of our company's high-quality electronic products come with a 30-day {{BLANK}} to ensure complete customer satisfaction and trust.",
    "cn": "我們公司所有高品質的電子產品都附有30天的退款保證，以確保顧客完全的滿意和信任。"
  },
  {
    "word": "lifetime guarantee",
    "pos": "phr.",
    "cn_def": "終身保固",
    "en_def": "A promise to repair or replace a product for the duration of its life.",
    "sentence": "The durable backpack comes with a {{BLANK}}, meaning the manufacturer will repair any ripped seams for free, forever.",
    "cn": "這個耐用的背包附有終身保固，這意味著製造商將永遠免費修理任何撕裂的縫線。"
  },
  {
    "word": "under guarantee",
    "pos": "phr.",
    "cn_def": "在保固期內",
    "en_def": "Covered by a warranty.",
    "sentence": "Luckily, my broken laptop is still {{BLANK}}, so the technology company will definitely fix the shattered screen without charging me.",
    "cn": "幸運的是，我壞掉的筆記型電腦仍在保固期內，所以科技公司絕對會免費修理碎裂的螢幕。"
  },
  {
    "word": "absolute guarantee",
    "pos": "phr.",
    "cn_def": "絕對保證",
    "en_def": "A promise made with complete certainty.",
    "sentence": "There is no {{BLANK}} that the stock market will go up tomorrow, so you must invest your money very carefully.",
    "cn": "沒有絕對保證股市明天會上漲，所以你必須非常謹慎地投資你的錢。"
  },
  {
    "word": "domain name",
    "pos": "phr.",
    "cn_def": "網域名稱",
    "en_def": "The part of a network address that identifies it as belonging to a particular domain.",
    "sentence": "Every modern business should have its own memorable {{BLANK}} for the internet so that customers can easily find their website.",
    "cn": "每個現代企業都應該擁有自己好記的網路網域名稱，這樣顧客才能輕鬆找到他們的網站。"
  }
];

const MCQS = [
  {
    "q": "The doctor said that drinking one large glass of this special juice is exactly ______ to eating three servings of raw vegetables.",
    "options": [
      "equivalent",
      "exclusive",
      "roughly equivalent",
      "cyber"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The starting salary for this position is fixed, but the number of vacation days is entirely ______ depending on your experience.",
    "options": [
      "equivalent",
      "negotiable",
      "transactional",
      "cyber"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Some people view modern relationships in a purely ______ way, measuring exactly what they give and what they get in return.",
    "options": [
      "exclusive",
      "cyber",
      "equivalent",
      "transactional"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Residents of this luxury community enjoy the ______ use of the large outdoor swimming pool and the fully equipped modern gym.",
    "options": [
      "equivalent",
      "cyber",
      "exclusive",
      "negotiable"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The national government has hired a team of experts to protect the country's essential infrastructure from potential ______ attacks by hackers.",
    "options": [
      "equivalent",
      "cyber",
      "negotiable",
      "exclusive"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The amount of energy consumed by this small town is ______ to the energy used by a single large factory.",
    "options": [
      "roughly equivalent",
      "transactional",
      "equivalent",
      "exclusive"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The expensive new restaurant caters ______ to wealthy celebrities and powerful politicians who want a quiet place to eat in peace.",
    "options": [
      "possessions",
      "digital format",
      "exclusively",
      "exclusive"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The manager believes that Jason is a hard-working, intelligent employee who would undoubtedly be an ______ to any company.",
    "options": [
      "investor",
      "domain",
      "token",
      "asset"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "If you don't have a modern electronic travel card, you can simply buy a plastic ______ from the vending machine.",
    "options": [
      "possessions",
      "token",
      "investor",
      "property"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Buying a house in this rapidly growing neighborhood is generally considered a very safe and profitable ______ for the future.",
    "options": [
      "investor",
      "ownership",
      "investment",
      "cryptocurrency"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The young entrepreneur is actively searching for a wealthy ______ who can provide enough funding to start his new tech business.",
    "options": [
      "owner",
      "domain",
      "transaction",
      "investor"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The mathematics teacher spent the entire lesson explaining the logical ______ between the two complex formulas written on the board.",
    "options": [
      "equivalence",
      "investor",
      "trail",
      "possessions"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Owen had always wanted to build a large wooden house on his own ______, far away from the noisy city streets.",
    "options": [
      "cryptocurrency",
      "owner",
      "negotiator",
      "property"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The tragic family lost all their valuable ______ when their wooden house suddenly burned down during the terrible summer wildfire.",
    "options": [
      "possessions",
      "investor",
      "negotiation",
      "investment"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "After three days of intense ______, the labor union and the factory managers finally agreed on a fair salary increase for workers.",
    "options": [
      "ownership",
      "cryptocurrency",
      "negotiation",
      "trail"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The police department sent in their best and most experienced ______ to convince the armed bank robbers to release the terrified hostages.",
    "options": [
      "investment",
      "negotiator",
      "domain",
      "equivalence"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "John carefully checked his printed receipt after making a large ______ at the local bank to ensure no mistakes were made.",
    "options": [
      "possessions",
      "domain",
      "transaction",
      "negotiator"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The experienced hunters quietly followed the ______ of fresh footprints in the deep snow to eventually find the large bear.",
    "options": [
      "negotiator",
      "equivalence",
      "ownership",
      "trail"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The proud ______ of the newly opened bakery stood outside his shop, offering free samples of bread to passing customers.",
    "options": [
      "negotiation",
      "owner",
      "trail",
      "investor"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "John now has the legal documents required to formally show his ______ of the beautiful beach house that he just purchased.",
    "options": [
      "ownership",
      "negotiator",
      "investment",
      "owner"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "In historical times, the powerful king's ______ spread from the western snowy mountains all the way to the hot eastern desert.",
    "options": [
      "cryptocurrency",
      "domain",
      "possessions",
      "asset"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The progressive school prides itself on its high level of ______, ensuring that students from all different backgrounds feel totally welcome.",
    "options": [
      "inclusiveness",
      "negotiation",
      "equivalence",
      "negotiator"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Many young investors believe that ______ will eventually replace traditional banks and completely change the way we buy and sell goods.",
    "options": [
      "possessions",
      "property",
      "ownership",
      "cryptocurrency"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Katherine carefully ______ the final financial report in an easy-to-read way so that the clients could understand it quickly.",
    "options": [
      "invest your savings wisely in",
      "assured",
      "formatted",
      "embraced"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The citizens happily ______ the new safety law because they believed it would make the crowded city much safer for their children.",
    "options": [
      "ensure",
      "embraced",
      "guarantee",
      "formatted"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "If you choose to ______ the stock market, you could potentially double your money in just a few years.",
    "options": [
      "negotiate",
      "embraced",
      "fully embrace",
      "invest your savings wisely in"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "In order to become a successful detective, you must ______ a highly logical mind and excellent problem-solving skills.",
    "options": [
      "possess",
      "assured",
      "negotiate",
      "fully embrace"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The government firmly refuses to ______ with terrorists because it would encourage them to commit even more violent crimes in the future.",
    "options": [
      "fully embrace",
      "formatted",
      "negotiate",
      "ensure"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Exercising every day will effectively ______ that you fall into a deep and restful sleep when you go to bed at night.",
    "options": [
      "assured",
      "ensure",
      "fully embrace",
      "negotiate"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The experienced mechanic ______ me that the car would be perfectly safe to drive after he completely repaired the damaged brakes.",
    "options": [
      "embraced",
      "guarantee",
      "formatted",
      "assured"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "I can confidently ______ that you will be incredibly successful in your new career if you just continue to work hard.",
    "options": [
      "guarantee",
      "assured",
      "ensure",
      "invest your savings wisely in"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "To succeed in this fast-paced technology industry, you must ______ new ideas and never stop learning from your mistakes.",
    "options": [
      "ensure",
      "invest your savings wisely in",
      "fully embrace",
      "guarantee"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The struggling business was forced to sell off a major ______ to quickly pay its mounting debts to the bank.",
    "options": [
      "physical asset",
      "make sure",
      "took possession of",
      "hiking trail"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "Your ability to speak three different languages fluently is a ______ in today's highly competitive global job market.",
    "options": [
      "embrace change",
      "make a transaction",
      "format a document",
      "valuable asset"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "During the severe economic crisis, the investors wanted to ensure they had enough ______ available to survive the year.",
    "options": [
      "lifetime guarantee",
      "embrace change",
      "liquid assets",
      "exclusive right"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "The tourist who was visiting Taipei for the first time bought a ______ to take the MRT to the famous night market.",
    "options": [
      "public property",
      "single journey token",
      "electronic format",
      "intellectual property"
    ],
    "answer": 1,
    "vocabIndex": 35
  },
  {
    "q": "Edward gave his lovely girlfriend some expensive gold jewelry ______ his deep and eternal love for her.",
    "options": [
      "the equivalent of",
      "hiking trail",
      "has it in his possession",
      "as a token of"
    ],
    "answer": 3,
    "vocabIndex": 36
  },
  {
    "q": "There isn't enough hard evidence to prove your claim, but ______, I cannot prove that you are entirely wrong either.",
    "options": [
      "by the same token",
      "digital format",
      "make sure",
      "format a document"
    ],
    "answer": 0,
    "vocabIndex": 37
  },
  {
    "q": "The boss gave everyone a small bonus at the end of the busy week as a ______ for their hard work.",
    "options": [
      "single journey token",
      "token of appreciation",
      "financial transaction",
      "warm embrace"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "It usually takes me about twenty minutes to ______ properly before I send it to my university professor.",
    "options": [
      "I assure you",
      "joint ownership",
      "format a document",
      "business transaction"
    ],
    "answer": 2,
    "vocabIndex": 39
  },
  {
    "q": "In the modern age, most of these classic books are now widely available in ______ for digital readers.",
    "options": [
      "electronic format",
      "by the same token",
      "under guarantee",
      "absolute guarantee"
    ],
    "answer": 0,
    "vocabIndex": 40
  },
  {
    "q": "We need to save all the old family photographs in a ______ so they won't be ruined by moisture over time.",
    "options": [
      "format a document",
      "electronic format",
      "digital format",
      "physical asset"
    ],
    "answer": 2,
    "vocabIndex": 41
  },
  {
    "q": "When you write a formal business email, you should always follow the ______ to maintain a professional appearance.",
    "options": [
      "overseas investment",
      "standard format",
      "off the trail",
      "under guarantee"
    ],
    "answer": 1,
    "vocabIndex": 42
  },
  {
    "q": "After being away for a whole year, she greeted her beloved mother at the airport with a very ______.",
    "options": [
      "has it in his possession",
      "healing property",
      "electronic format",
      "warm embrace"
    ],
    "answer": 3,
    "vocabIndex": 43
  },
  {
    "q": "Some older employees find it difficult to ______, but it is absolutely necessary for the company to grow and evolve.",
    "options": [
      "embrace change",
      "lifetime guarantee",
      "the equivalent of",
      "by the same token"
    ],
    "answer": 0,
    "vocabIndex": 44
  },
  {
    "q": "The local government is currently trying to encourage ______ to boost the economy and create more job opportunities for citizens.",
    "options": [
      "make a transaction",
      "single journey token",
      "by the same token",
      "overseas investment"
    ],
    "answer": 3,
    "vocabIndex": 45
  },
  {
    "q": "Before buying the expensive new machinery, the factory manager carefully calculated the expected ______ to ensure it was worthwhile.",
    "options": [
      "as a token of",
      "in possession of",
      "return on investment",
      "electronic format"
    ],
    "answer": 2,
    "vocabIndex": 46
  },
  {
    "q": "For young Alex, paying his monthly taxes was basically ______ having a healthy tooth slowly pulled out by a dentist.",
    "options": [
      "under guarantee",
      "the equivalent of",
      "financial transaction",
      "money back guarantee"
    ],
    "answer": 1,
    "vocabIndex": 47
  },
  {
    "q": "If you substitute honey for sugar in this recipe, you should use an ______ to ensure the cake tastes sweet enough.",
    "options": [
      "equivalent amount",
      "single journey token",
      "money back guarantee",
      "by the same token"
    ],
    "answer": 0,
    "vocabIndex": 48
  },
  {
    "q": "Please remember to take all your ______ with you when leaving the train, including your bags, phones, and umbrellas.",
    "options": [
      "joint ownership",
      "the equivalent of",
      "personal property",
      "as a token of"
    ],
    "answer": 2,
    "vocabIndex": 49
  },
  {
    "q": "The city's beautiful parks and outdoor sports facilities are considered ______, and they are strictly for the enjoyment of everyone.",
    "options": [
      "off the trail",
      "public property",
      "absolute guarantee",
      "physical asset"
    ],
    "answer": 1,
    "vocabIndex": 50
  },
  {
    "q": "The tech company takes ______ theft very seriously, and they will immediately sue anyone who steals their software designs.",
    "options": [
      "make sure",
      "liquid assets",
      "as a token of",
      "intellectual property"
    ],
    "answer": 3,
    "vocabIndex": 51
  },
  {
    "q": "I read in an ancient medical book that pure honey may actually have some remarkable ______ for curing sore throats.",
    "options": [
      "healing property",
      "intellectual property",
      "standard format",
      "embrace change"
    ],
    "answer": 0,
    "vocabIndex": 52
  },
  {
    "q": "Valerie excitedly ______ her shiny new sports car exactly two weeks after she paid the dealership in full.",
    "options": [
      "single journey token",
      "took possession of",
      "healing property",
      "ensure safety"
    ],
    "answer": 1,
    "vocabIndex": 53
  },
  {
    "q": "The police officer quickly discovered that Harold was ______ the secret code needed to open the bank's main safe.",
    "options": [
      "off the trail",
      "embrace change",
      "make sure",
      "in possession of"
    ],
    "answer": 3,
    "vocabIndex": 54
  },
  {
    "q": "A kind man called me this morning to say he found my lost wallet and currently ______.",
    "options": [
      "as a token of",
      "personal property",
      "has it in his possession",
      "warm embrace"
    ],
    "answer": 2,
    "vocabIndex": 55
  },
  {
    "q": "If the buyers stubbornly ______ the high price of the house, we will just have to look for another buyer.",
    "options": [
      "physical asset",
      "by the same token",
      "the equivalent of",
      "refuse to negotiate"
    ],
    "answer": 3,
    "vocabIndex": 56
  },
  {
    "q": "Whenever you ______ online, you should always double-check that the website is completely secure and highly trustworthy.",
    "options": [
      "digital format",
      "make a transaction",
      "physical asset",
      "the equivalent of"
    ],
    "answer": 1,
    "vocabIndex": 57
  },
  {
    "q": "The two massive international companies finalized their complex ______ after months of planning and consulting with expensive corporate lawyers.",
    "options": [
      "business transaction",
      "follow the trail",
      "valuable asset",
      "exclusive of"
    ],
    "answer": 0,
    "vocabIndex": 58
  },
  {
    "q": "Modern banking apps allow users to track every single ______ they make directly from their smartphones with incredible ease.",
    "options": [
      "follow the trail",
      "embrace change",
      "financial transaction",
      "make sure"
    ],
    "answer": 2,
    "vocabIndex": 59
  },
  {
    "q": "If we just ______ carefully through the thick forest, we will eventually reach the beautiful waterfall at the end.",
    "options": [
      "valuable asset",
      "follow the trail",
      "under guarantee",
      "make sure"
    ],
    "answer": 1,
    "vocabIndex": 60
  },
  {
    "q": "Jessica wandered ______ to take some photos of the wild flowers and unfortunately got completely lost in the forest.",
    "options": [
      "healing property",
      "make sure",
      "off the trail",
      "as a token of"
    ],
    "answer": 2,
    "vocabIndex": 61
  },
  {
    "q": "The leaky pipe managed to ______ of dirty water all the way from the kitchen to the front door.",
    "options": [
      "warm embrace",
      "equivalent amount",
      "public property",
      "leave a trail"
    ],
    "answer": 3,
    "vocabIndex": 62
  },
  {
    "q": "The national park boasts a famously difficult ______ that attracts thousands of adventurous climbers from all over the world.",
    "options": [
      "hiking trail",
      "intellectual property",
      "as a token of",
      "the equivalent of"
    ],
    "answer": 0,
    "vocabIndex": 63
  },
  {
    "q": "The airline has introduced several new and strict regulations to ______ for all passengers traveling during the harsh winter storm.",
    "options": [
      "took possession of",
      "financial transaction",
      "ensure safety",
      "in possession of"
    ],
    "answer": 2,
    "vocabIndex": 64
  },
  {
    "q": "______, your pet pig will be well cared for and given plenty of delicious food while you are on vacation.",
    "options": [
      "intellectual property",
      "off the trail",
      "make sure",
      "I assure you"
    ],
    "answer": 3,
    "vocabIndex": 65
  },
  {
    "q": "You need to ______ that all of your construction materials arrive at the building site in a timely and organized manner.",
    "options": [
      "make sure",
      "equivalent amount",
      "under guarantee",
      "single journey token"
    ],
    "answer": 0,
    "vocabIndex": 66
  },
  {
    "q": "The beautiful silver watch costs exactly $200, ______ the local sales tax that will be added at the cash register.",
    "options": [
      "I assure you",
      "exclusive of",
      "valuable asset",
      "as a token of"
    ],
    "answer": 1,
    "vocabIndex": 67
  },
  {
    "q": "The author gave the publishing company the ______ to print and distribute her brand new fantasy novel across North America.",
    "options": [
      "exclusive right",
      "embrace change",
      "refuse to negotiate",
      "overseas investment"
    ],
    "answer": 0,
    "vocabIndex": 68
  },
  {
    "q": "The two brothers have ______ of the family farm, which unfortunately means they often argue over how to run it.",
    "options": [
      "the equivalent of",
      "public property",
      "joint ownership",
      "overseas investment"
    ],
    "answer": 2,
    "vocabIndex": 69
  },
  {
    "q": "All of our company's high-quality electronic products come with a 30-day ______ to ensure complete customer satisfaction and trust.",
    "options": [
      "make a transaction",
      "money back guarantee",
      "in possession of",
      "make sure"
    ],
    "answer": 1,
    "vocabIndex": 70
  },
  {
    "q": "The durable backpack comes with a ______, meaning the manufacturer will repair any ripped seams for free, forever.",
    "options": [
      "embrace change",
      "the equivalent of",
      "digital format",
      "lifetime guarantee"
    ],
    "answer": 3,
    "vocabIndex": 71
  },
  {
    "q": "Luckily, my broken laptop is still ______, so the technology company will definitely fix the shattered screen without charging me.",
    "options": [
      "money back guarantee",
      "under guarantee",
      "exclusive of",
      "single journey token"
    ],
    "answer": 1,
    "vocabIndex": 72
  },
  {
    "q": "There is no ______ that the stock market will go up tomorrow, so you must invest your money very carefully.",
    "options": [
      "domain name",
      "the equivalent of",
      "in possession of",
      "absolute guarantee"
    ],
    "answer": 3,
    "vocabIndex": 73
  },
  {
    "q": "Every modern business should have its own memorable ______ for the internet so that customers can easily find their website.",
    "options": [
      "the equivalent of",
      "exclusive right",
      "domain name",
      "digital format"
    ],
    "answer": 2,
    "vocabIndex": 74
  }
];

const LOOKUP = {
  "equivalent": {
    "pos": "adj.",
    "en_def": "Equal in value, amount, function, or meaning.",
    "cn_def": "相等的；等值的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Equal in value, amount, function, or meaning.",
        "cn_def": "相等的；等值的"
      }
    ]
  },
  "negotiable": {
    "pos": "adj.",
    "en_def": "Open to discussion or modification.",
    "cn_def": "可協商的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Open to discussion or modification.",
        "cn_def": "可協商的"
      }
    ]
  },
  "transactional": {
    "pos": "adj.",
    "en_def": "Relating to the conducting of business or exchange.",
    "cn_def": "交易的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Relating to the conducting of business or exchange.",
        "cn_def": "交易的"
      }
    ]
  },
  "exclusive": {
    "pos": "adj.",
    "en_def": "Restricted or limited to the person, group, or area concerned.",
    "cn_def": "獨家的；專屬的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Restricted or limited to the person, group, or area concerned.",
        "cn_def": "獨家的；專屬的"
      }
    ]
  },
  "cyber": {
    "pos": "adj.",
    "en_def": "Relating to the culture of computers, information technology, and virtual reality.",
    "cn_def": "網路的；電腦的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Relating to the culture of computers, information technology, and virtual reality.",
        "cn_def": "網路的；電腦的"
      }
    ]
  },
  "roughly equivalent": {
    "pos": "phr.",
    "en_def": "Approximately equal in value or amount.",
    "cn_def": "大約相等的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Approximately equal in value or amount.",
        "cn_def": "大約相等的"
      }
    ]
  },
  "exclusively": {
    "pos": "adv.",
    "en_def": "To the exclusion of others; only.",
    "cn_def": "專門地；獨家地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "To the exclusion of others; only.",
        "cn_def": "專門地；獨家地"
      }
    ]
  },
  "asset": {
    "pos": "n.",
    "en_def": "A useful or valuable thing, person, or quality.",
    "cn_def": "資產；有用的人或物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A useful or valuable thing, person, or quality.",
        "cn_def": "資產；有用的人或物"
      }
    ]
  },
  "token": {
    "pos": "n.",
    "en_def": "A thing serving as a visible or tangible representation of a fact, quality, or feeling.",
    "cn_def": "代幣；象徵",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A thing serving as a visible or tangible representation of a fact, quality, or feeling.",
        "cn_def": "代幣；象徵"
      }
    ]
  },
  "investment": {
    "pos": "n.",
    "en_def": "The action or process of investing money for profit or material result.",
    "cn_def": "投資",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The action or process of investing money for profit or material result.",
        "cn_def": "投資"
      }
    ]
  },
  "investor": {
    "pos": "n.",
    "en_def": "A person or organization that puts money into financial schemes.",
    "cn_def": "投資者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A person or organization that puts money into financial schemes.",
        "cn_def": "投資者"
      }
    ]
  },
  "equivalence": {
    "pos": "n.",
    "en_def": "The condition of being equal or equivalent in value, worth, or function.",
    "cn_def": "相等；等值",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The condition of being equal or equivalent in value, worth, or function.",
        "cn_def": "相等；等值"
      }
    ]
  },
  "property": {
    "pos": "n.",
    "en_def": "A thing or things belonging to someone; a characteristic.",
    "cn_def": "財產；特性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A thing or things belonging to someone; a characteristic.",
        "cn_def": "財產；特性"
      }
    ]
  },
  "possessions": {
    "pos": "n.",
    "en_def": "The state of having, owning, or controlling something.",
    "cn_def": "擁有；所有物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The state of having, owning, or controlling something.",
        "cn_def": "擁有；所有物"
      }
    ]
  },
  "possession": {
    "pos": "n.",
    "en_def": "The state of having, owning, or controlling something.",
    "cn_def": "擁有；所有物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The state of having, owning, or controlling something.",
        "cn_def": "擁有；所有物"
      }
    ]
  },
  "negotiation": {
    "pos": "n.",
    "en_def": "Discussion aimed at reaching an agreement.",
    "cn_def": "談判",
    "combined": [
      {
        "pos": "n.",
        "en_def": "Discussion aimed at reaching an agreement.",
        "cn_def": "談判"
      }
    ]
  },
  "negotiator": {
    "pos": "n.",
    "en_def": "A person who conducts negotiations.",
    "cn_def": "談判者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A person who conducts negotiations.",
        "cn_def": "談判者"
      }
    ]
  },
  "transaction": {
    "pos": "n.",
    "en_def": "An instance of buying or selling something; a business deal.",
    "cn_def": "交易",
    "combined": [
      {
        "pos": "n.",
        "en_def": "An instance of buying or selling something; a business deal.",
        "cn_def": "交易"
      }
    ]
  },
  "trail": {
    "pos": "n./v.",
    "en_def": "A mark or series of signs left behind; a path in the countryside.",
    "cn_def": "痕跡；小徑",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "A mark or series of signs left behind; a path in the countryside.",
        "cn_def": "痕跡；小徑"
      }
    ]
  },
  "owner": {
    "pos": "n.",
    "en_def": "A person who owns something.",
    "cn_def": "擁有者；主人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A person who owns something.",
        "cn_def": "擁有者；主人"
      }
    ]
  },
  "ownership": {
    "pos": "n.",
    "en_def": "The act, state, or right of possessing something.",
    "cn_def": "所有權",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The act, state, or right of possessing something.",
        "cn_def": "所有權"
      }
    ]
  },
  "domain": {
    "pos": "n.",
    "en_def": "An area of territory owned or controlled; a specified sphere of activity or knowledge.",
    "cn_def": "領土；領域",
    "combined": [
      {
        "pos": "n.",
        "en_def": "An area of territory owned or controlled; a specified sphere of activity or knowledge.",
        "cn_def": "領土；領域"
      }
    ]
  },
  "inclusiveness": {
    "pos": "n.",
    "en_def": "The quality of including all sections of society.",
    "cn_def": "包容性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The quality of including all sections of society.",
        "cn_def": "包容性"
      }
    ]
  },
  "cryptocurrency": {
    "pos": "n.",
    "en_def": "A digital currency in which transactions are verified by a decentralized system.",
    "cn_def": "加密貨幣",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A digital currency in which transactions are verified by a decentralized system.",
        "cn_def": "加密貨幣"
      }
    ]
  },
  "format": {
    "pos": "v./n.",
    "en_def": "To arrange or set out something in a particular way.",
    "cn_def": "格式；編排",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "To arrange or set out something in a particular way.",
        "cn_def": "格式；編排"
      }
    ]
  },
  "formatted": {
    "pos": "v./n.",
    "en_def": "To arrange or set out something in a particular way.",
    "cn_def": "格式；編排",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "To arrange or set out something in a particular way.",
        "cn_def": "格式；編排"
      }
    ]
  },
  "embrace": {
    "pos": "v./n.",
    "en_def": "To accept or support a belief or change willingly and enthusiastically; a hug.",
    "cn_def": "欣然接受；擁抱",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "To accept or support a belief or change willingly and enthusiastically; a hug.",
        "cn_def": "欣然接受；擁抱"
      }
    ]
  },
  "embraced": {
    "pos": "v./n.",
    "en_def": "To accept or support a belief or change willingly and enthusiastically; a hug.",
    "cn_def": "欣然接受；擁抱",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "To accept or support a belief or change willingly and enthusiastically; a hug.",
        "cn_def": "欣然接受；擁抱"
      }
    ]
  },
  "invest your savings wisely in": {
    "pos": "v.",
    "en_def": "To put money into financial schemes, shares, property, or a commercial venture.",
    "cn_def": "投資",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To put money into financial schemes, shares, property, or a commercial venture.",
        "cn_def": "投資"
      }
    ]
  },
  "invest in": {
    "pos": "v.",
    "en_def": "To put money into financial schemes, shares, property, or a commercial venture.",
    "cn_def": "投資",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To put money into financial schemes, shares, property, or a commercial venture.",
        "cn_def": "投資"
      }
    ]
  },
  "possess": {
    "pos": "v.",
    "en_def": "To have or own something.",
    "cn_def": "擁有",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To have or own something.",
        "cn_def": "擁有"
      }
    ]
  },
  "negotiate": {
    "pos": "v.",
    "en_def": "To try to reach an agreement or compromise by discussion with others.",
    "cn_def": "談判；協商",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To try to reach an agreement or compromise by discussion with others.",
        "cn_def": "談判；協商"
      }
    ]
  },
  "ensure": {
    "pos": "v.",
    "en_def": "To make certain that something shall occur or be the case.",
    "cn_def": "確保（+事情）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To make certain that something shall occur or be the case.",
        "cn_def": "確保（+事情）"
      }
    ]
  },
  "assure": {
    "pos": "v.",
    "en_def": "To tell someone something positively or confidently to dispel any doubts.",
    "cn_def": "向某人保證",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To tell someone something positively or confidently to dispel any doubts.",
        "cn_def": "向某人保證"
      }
    ]
  },
  "assured": {
    "pos": "v.",
    "en_def": "To tell someone something positively or confidently to dispel any doubts.",
    "cn_def": "向某人保證",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To tell someone something positively or confidently to dispel any doubts.",
        "cn_def": "向某人保證"
      }
    ]
  },
  "guarantee": {
    "pos": "v./n.",
    "en_def": "To promise; a formal promise or assurance.",
    "cn_def": "保證；擔保",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "To promise; a formal promise or assurance.",
        "cn_def": "保證；擔保"
      }
    ]
  },
  "fully embrace": {
    "pos": "v.",
    "en_def": "To accept something completely and enthusiastically.",
    "cn_def": "完全接受",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To accept something completely and enthusiastically.",
        "cn_def": "完全接受"
      }
    ]
  },
  "physical asset": {
    "pos": "phr.",
    "en_def": "An item of economic value that has a tangible existence.",
    "cn_def": "實體資產",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "An item of economic value that has a tangible existence.",
        "cn_def": "實體資產"
      }
    ]
  },
  "valuable asset": {
    "pos": "phr.",
    "en_def": "Something that is very useful or worth a lot of money.",
    "cn_def": "寶貴的資產",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Something that is very useful or worth a lot of money.",
        "cn_def": "寶貴的資產"
      }
    ]
  },
  "liquid assets": {
    "pos": "phr.",
    "en_def": "Cash or an asset that can be readily converted to cash.",
    "cn_def": "流動資產",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Cash or an asset that can be readily converted to cash.",
        "cn_def": "流動資產"
      }
    ]
  },
  "liquid asset": {
    "pos": "phr.",
    "en_def": "Cash or an asset that can be readily converted to cash.",
    "cn_def": "流動資產",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Cash or an asset that can be readily converted to cash.",
        "cn_def": "流動資產"
      }
    ]
  },
  "single journey token": {
    "pos": "phr.",
    "en_def": "A coin-like object used to pay for one trip on public transport.",
    "cn_def": "單程代幣",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A coin-like object used to pay for one trip on public transport.",
        "cn_def": "單程代幣"
      }
    ]
  },
  "as a token of": {
    "pos": "phr.",
    "en_def": "As a sign or symbol of something.",
    "cn_def": "作為...的象徵/表示",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "As a sign or symbol of something.",
        "cn_def": "作為...的象徵/表示"
      }
    ]
  },
  "by the same token": {
    "pos": "phr.",
    "en_def": "In the same way or for the same reason.",
    "cn_def": "同理；同樣地",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "In the same way or for the same reason.",
        "cn_def": "同理；同樣地"
      }
    ]
  },
  "token of appreciation": {
    "pos": "phr.",
    "en_def": "A small gift or gesture to express gratitude.",
    "cn_def": "感謝的表示",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A small gift or gesture to express gratitude.",
        "cn_def": "感謝的表示"
      }
    ]
  },
  "format a document": {
    "pos": "phr.",
    "en_def": "To arrange the text and layout of a computer file.",
    "cn_def": "將文件格式化/編排文件",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To arrange the text and layout of a computer file.",
        "cn_def": "將文件格式化/編排文件"
      }
    ]
  },
  "electronic format": {
    "pos": "phr.",
    "en_def": "The arrangement of data for computer processing or display.",
    "cn_def": "電子格式",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The arrangement of data for computer processing or display.",
        "cn_def": "電子格式"
      }
    ]
  },
  "digital format": {
    "pos": "phr.",
    "en_def": "Data that is stored in a binary form for computers.",
    "cn_def": "數位格式",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Data that is stored in a binary form for computers.",
        "cn_def": "數位格式"
      }
    ]
  },
  "standard format": {
    "pos": "phr.",
    "en_def": "A usual or accepted way of arranging something.",
    "cn_def": "標準格式",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A usual or accepted way of arranging something.",
        "cn_def": "標準格式"
      }
    ]
  },
  "warm embrace": {
    "pos": "phr.",
    "en_def": "A friendly and affectionate hug.",
    "cn_def": "溫暖的擁抱",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A friendly and affectionate hug.",
        "cn_def": "溫暖的擁抱"
      }
    ]
  },
  "embrace change": {
    "pos": "phr.",
    "en_def": "To accept new situations and adapt to them willingly.",
    "cn_def": "欣然接受改變",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To accept new situations and adapt to them willingly.",
        "cn_def": "欣然接受改變"
      }
    ]
  },
  "overseas investment": {
    "pos": "phr.",
    "en_def": "Money put into businesses or property in foreign countries.",
    "cn_def": "海外投資",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Money put into businesses or property in foreign countries.",
        "cn_def": "海外投資"
      }
    ]
  },
  "return on investment": {
    "pos": "phr.",
    "en_def": "The profit from an activity compared to its cost.",
    "cn_def": "投資回報率",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The profit from an activity compared to its cost.",
        "cn_def": "投資回報率"
      }
    ]
  },
  "the equivalent of": {
    "pos": "phr.",
    "en_def": "Something that has the same value or meaning as another thing.",
    "cn_def": "...的等值物/等同於",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Something that has the same value or meaning as another thing.",
        "cn_def": "...的等值物/等同於"
      }
    ]
  },
  "equivalent amount": {
    "pos": "phr.",
    "en_def": "An equal quantity of something.",
    "cn_def": "等量",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "An equal quantity of something.",
        "cn_def": "等量"
      }
    ]
  },
  "personal property": {
    "pos": "phr.",
    "en_def": "Movable belongings owned by an individual.",
    "cn_def": "個人財產",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Movable belongings owned by an individual.",
        "cn_def": "個人財產"
      }
    ]
  },
  "public property": {
    "pos": "phr.",
    "en_def": "Land, buildings, or equipment owned by the government.",
    "cn_def": "公共財產",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Land, buildings, or equipment owned by the government.",
        "cn_def": "公共財產"
      }
    ]
  },
  "intellectual property": {
    "pos": "phr.",
    "en_def": "Intangible property that is the result of creativity, such as patents or copyrights.",
    "cn_def": "智慧財產",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Intangible property that is the result of creativity, such as patents or copyrights.",
        "cn_def": "智慧財產"
      }
    ]
  },
  "healing property": {
    "pos": "phr.",
    "en_def": "The characteristic of a substance that helps cure illness.",
    "cn_def": "療效；治療特性",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The characteristic of a substance that helps cure illness.",
        "cn_def": "療效；治療特性"
      }
    ]
  },
  "take possession of": {
    "pos": "phr.",
    "en_def": "To begin to own or control something.",
    "cn_def": "取得...的所有權",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To begin to own or control something.",
        "cn_def": "取得...的所有權"
      }
    ]
  },
  "took possession of": {
    "pos": "phr.",
    "en_def": "To begin to own or control something.",
    "cn_def": "取得...的所有權",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To begin to own or control something.",
        "cn_def": "取得...的所有權"
      }
    ]
  },
  "in possession of": {
    "pos": "phr.",
    "en_def": "Holding or owning something.",
    "cn_def": "擁有...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Holding or owning something.",
        "cn_def": "擁有..."
      }
    ]
  },
  "has it in his possession": {
    "pos": "phr.",
    "en_def": "To physically hold or control an item.",
    "cn_def": "擁有某物；持有某物",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To physically hold or control an item.",
        "cn_def": "擁有某物；持有某物"
      }
    ]
  },
  "have something in one's possession": {
    "pos": "phr.",
    "en_def": "To physically hold or control an item.",
    "cn_def": "擁有某物；持有某物",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To physically hold or control an item.",
        "cn_def": "擁有某物；持有某物"
      }
    ]
  },
  "refuse to negotiate": {
    "pos": "phr.",
    "en_def": "To decline to discuss an agreement.",
    "cn_def": "拒絕談判",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To decline to discuss an agreement.",
        "cn_def": "拒絕談判"
      }
    ]
  },
  "make a transaction": {
    "pos": "phr.",
    "en_def": "To complete a business deal or payment.",
    "cn_def": "進行交易",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To complete a business deal or payment.",
        "cn_def": "進行交易"
      }
    ]
  },
  "business transaction": {
    "pos": "phr.",
    "en_def": "An interaction between a buyer and a seller.",
    "cn_def": "商業交易",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "An interaction between a buyer and a seller.",
        "cn_def": "商業交易"
      }
    ]
  },
  "financial transaction": {
    "pos": "phr.",
    "en_def": "An agreement or movement carried out between a buyer and a seller to exchange an asset for payment.",
    "cn_def": "財務交易",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "An agreement or movement carried out between a buyer and a seller to exchange an asset for payment.",
        "cn_def": "財務交易"
      }
    ]
  },
  "follow the trail": {
    "pos": "phr.",
    "en_def": "To walk along a path or track.",
    "cn_def": "沿著小徑/蹤跡走",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To walk along a path or track.",
        "cn_def": "沿著小徑/蹤跡走"
      }
    ]
  },
  "off the trail": {
    "pos": "phr.",
    "en_def": "Away from the designated path.",
    "cn_def": "偏離小徑",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Away from the designated path.",
        "cn_def": "偏離小徑"
      }
    ]
  },
  "leave a trail": {
    "pos": "phr.",
    "en_def": "To create a series of marks or signs behind you.",
    "cn_def": "留下痕跡",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To create a series of marks or signs behind you.",
        "cn_def": "留下痕跡"
      }
    ]
  },
  "hiking trail": {
    "pos": "phr.",
    "en_def": "A path created for people to walk through nature.",
    "cn_def": "登山步道",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A path created for people to walk through nature.",
        "cn_def": "登山步道"
      }
    ]
  },
  "ensure safety": {
    "pos": "phr.",
    "en_def": "To make certain that people are protected from harm.",
    "cn_def": "確保安全",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To make certain that people are protected from harm.",
        "cn_def": "確保安全"
      }
    ]
  },
  "i assure you": {
    "pos": "phr.",
    "en_def": "A phrase used to confidently tell someone that something is true.",
    "cn_def": "我向你保證",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A phrase used to confidently tell someone that something is true.",
        "cn_def": "我向你保證"
      }
    ]
  },
  "make sure": {
    "pos": "phr.",
    "en_def": "To confirm or ensure that something happens.",
    "cn_def": "確保；確定",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To confirm or ensure that something happens.",
        "cn_def": "確保；確定"
      }
    ]
  },
  "exclusive of": {
    "pos": "phr.",
    "en_def": "Not including something.",
    "cn_def": "不包括",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Not including something.",
        "cn_def": "不包括"
      }
    ]
  },
  "exclusive right": {
    "pos": "phr.",
    "en_def": "The power to do something that is granted to only one person or group.",
    "cn_def": "獨家權利/專屬權利",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The power to do something that is granted to only one person or group.",
        "cn_def": "獨家權利/專屬權利"
      }
    ]
  },
  "joint ownership": {
    "pos": "phr.",
    "en_def": "The state of a property being owned by two or more people.",
    "cn_def": "共同擁有",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The state of a property being owned by two or more people.",
        "cn_def": "共同擁有"
      }
    ]
  },
  "money back guarantee": {
    "pos": "phr.",
    "en_def": "A promise to return a buyer's money if they are not satisfied.",
    "cn_def": "退款保證",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A promise to return a buyer's money if they are not satisfied.",
        "cn_def": "退款保證"
      }
    ]
  },
  "lifetime guarantee": {
    "pos": "phr.",
    "en_def": "A promise to repair or replace a product for the duration of its life.",
    "cn_def": "終身保固",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A promise to repair or replace a product for the duration of its life.",
        "cn_def": "終身保固"
      }
    ]
  },
  "under guarantee": {
    "pos": "phr.",
    "en_def": "Covered by a warranty.",
    "cn_def": "在保固期內",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Covered by a warranty.",
        "cn_def": "在保固期內"
      }
    ]
  },
  "absolute guarantee": {
    "pos": "phr.",
    "en_def": "A promise made with complete certainty.",
    "cn_def": "絕對保證",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A promise made with complete certainty.",
        "cn_def": "絕對保證"
      }
    ]
  },
  "domain name": {
    "pos": "phr.",
    "en_def": "The part of a network address that identifies it as belonging to a particular domain.",
    "cn_def": "網域名稱",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The part of a network address that identifies it as belonging to a particular domain.",
        "cn_def": "網域名稱"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
