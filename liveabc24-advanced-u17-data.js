// Unit 17 Quiz Data: annual – remain cheerful
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Advanced U17 - annual – remain cheerful",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "annual",
    "pos": "adj.",
    "cn_def": "每年的、年度的",
    "en_def": "happening or done once every single year.",
    "sentence": "The school holds its {{BLANK}} sports day in October, and students spend weeks training for their chosen events.",
    "cn": "學校在十月舉行年度運動會，學生們花了數週時間為他們選擇的項目進行訓練。"
  },
  {
    "word": "annual sale",
    "pos": "phr.",
    "cn_def": "年度大拍賣",
    "en_def": "a yearly store event driving massive arrival lines.",
    "sentence": "She saved up for months just to attend the department store's {{BLANK}}, where discounts reached up to seventy percent.",
    "cn": "她存了幾個月的錢，就是為了參加百貨公司的年度大拍賣，折扣高達七折。"
  },
  {
    "word": "turned out",
    "pos": "phr.",
    "cn_def": "出席、結果是",
    "en_def": "to arrive or assemble at an event to participate.",
    "sentence": "Hundreds of residents {{BLANK}} to support the charity marathon despite the cold and rainy weather conditions.",
    "cn": "儘管天氣寒冷多雨，數百名居民仍然出席支持慈善馬拉松。"
  },
  {
    "word": "turn out to be",
    "pos": "phr.",
    "cn_def": "結果竟然是…",
    "en_def": "proving to be something else unexpected in the end.",
    "sentence": "The film that nobody expected much from {{BLANK}} one of the biggest box office hits of the entire year.",
    "cn": "沒有人對這部電影抱有太大期望，結果它竟然是全年最大的票房大片之一。"
  },
  {
    "word": "admired",
    "pos": "v.",
    "cn_def": "欽佩、欣賞、讚賞",
    "en_def": "to respect and approve of someone's talents or skill.",
    "sentence": "She has always {{BLANK}} her grandmother's patience and kindness, and hopes to develop those same qualities herself.",
    "cn": "她一直欽佩祖母的耐心和善良，希望自己也能培養出這些相同的品質。"
  },
  {
    "word": "admirable",
    "pos": "adj.",
    "cn_def": "令人欽佩的、值得讚賞的",
    "en_def": "deserving deep respect; tracking flawless traits.",
    "sentence": "Her dedication to volunteering every single weekend despite her busy schedule is truly {{BLANK}} and inspires everyone around her.",
    "cn": "儘管行程繁忙，她仍然每個週末堅持做義工，這真的令人欽佩，並激勵了周圍的每個人。"
  },
  {
    "word": "admiration",
    "pos": "n.",
    "cn_def": "欽佩、讚賞",
    "en_def": "a feeling of deep respect and approval for a peer.",
    "sentence": "She looked at the stunning mountain view with deep {{BLANK}} and felt grateful to have made the difficult climb.",
    "cn": "她帶著深深的欽佩欣賞著令人嘆為觀止的山景，並為自己完成了艱難的攀登而感到感激。"
  },
  {
    "word": "wrapped",
    "pos": "v.",
    "cn_def": "包裹、纏繞",
    "en_def": "to cover something completely by folding cloth around it.",
    "sentence": "She carefully {{BLANK}} each fragile ornament in tissue paper before placing it in the box for storage.",
    "cn": "她在將每個易碎裝飾品放入儲物箱之前，仔細地用薄棉紙包裹起來。"
  },
  {
    "word": "wrap up",
    "pos": "phr.",
    "cn_def": "結束、圓滿完成（工作等）",
    "en_def": "to bring a hard day's work to a successful finish.",
    "sentence": "Let's {{BLANK}} the meeting in the next ten minutes so everyone can leave before the evening rush hour.",
    "cn": "讓我們在接下來的十分鐘內結束會議，這樣每個人都可以在晚高峰前離開。"
  },
  {
    "word": "wrap a scarf",
    "pos": "phr.",
    "cn_def": "圍圍巾",
    "en_def": "twisting wool around the neck to withstand cold air.",
    "sentence": "Her mother reminded her to {{BLANK}} around her neck tightly before heading out into the freezing winter morning.",
    "cn": "媽媽提醒她在外出到寒冷的冬天早晨之前，要把圍巾緊緊圍在脖子上。"
  },
  {
    "word": "in advance",
    "pos": "phr.",
    "cn_def": "預先、事先",
    "en_def": "before a particular time or event; beforehand.",
    "sentence": "Tickets for the popular concert must be booked well {{BLANK}}, as they tend to sell out within hours of release.",
    "cn": "這場熱門音樂會的門票必須提前預訂，因為它們往往在發售後幾小時內就售罄。"
  },
  {
    "word": "advance",
    "pos": "v.",
    "cn_def": "前進、進步",
    "en_def": "to move forward or a step forward in development.",
    "sentence": "Technology continues to {{BLANK}} at an incredible pace, changing the way people work, communicate, and spend their time.",
    "cn": "技術繼續以令人難以置信的速度進步，改變著人們工作、溝通和消磨時間的方式。"
  },
  {
    "word": "advanced",
    "pos": "adj.",
    "cn_def": "先進的、高級的",
    "en_def": "using modern complex technology or high level math.",
    "sentence": "She enrolled in an {{BLANK}} mathematics course at the university to deepen her understanding of statistics and data analysis.",
    "cn": "她在大學選修了一門高級數學課程，以加深她對統計學和數據分析的理解。"
  },
  {
    "word": "advancement",
    "pos": "n.",
    "cn_def": "提升、前進、進步",
    "en_def": "an improvement or promotion inside a corporate role.",
    "sentence": "Rapid {{BLANK}} in medical technology has made it possible to detect serious diseases much earlier than ever before.",
    "cn": "醫療技術的快速進步使得比以往更早發現嚴重疾病成為可能。"
  },
  {
    "word": "expert",
    "pos": "n.",
    "cn_def": "專家",
    "en_def": "a person with high knowledge or skill in a field.",
    "sentence": "The hospital brought in a leading {{BLANK}} in cardiology to perform the complex surgery that local doctors could not do.",
    "cn": "醫院請來了心臟病學的頂尖專家，進行當地醫生無法完成的複雜手術。"
  },
  {
    "word": "expert",
    "pos": "adj.",
    "cn_def": "專家的、內行的",
    "en_def": "tracking massive professional mastery over a task.",
    "sentence": "She received {{BLANK}} guidance from a professional chef who taught her how to prepare traditional French sauces correctly.",
    "cn": "她從一位職業廚師那裡獲得了專業指導，教她如何正確製作傳統法式醬汁。"
  },
  {
    "word": "expert builder",
    "pos": "phr.",
    "cn_def": "建築專家",
    "en_def": "a seasoned master who solves foundational house leaks.",
    "sentence": "The homeowner hired an {{BLANK}} to fix the structural damage caused by years of water leaking through the roof.",
    "cn": "房主聘請了一位建築專家來修復多年屋頂漏水造成的結構性損壞。"
  },
  {
    "word": "expert at",
    "pos": "phr.",
    "cn_def": "擅長…的專家",
    "en_def": "an individual highly skilled at baking top pizza dishes.",
    "sentence": "She is an absolute {{BLANK}} making sourdough bread, and people come from across the city to buy her loaves.",
    "cn": "她是製作酸麵團麵包的絕對專家，人們從城市各地趕來購買她的麵包。"
  },
  {
    "word": "expertise",
    "pos": "n.",
    "cn_def": "專門知識、專業技能",
    "en_def": "high specialized knowledge mastered over years of work.",
    "sentence": "Her {{BLANK}} in environmental law made her the ideal candidate to lead the international climate negotiations.",
    "cn": "她在環境法方面的專業技能使她成為領導國際氣候談判的理想人選。"
  },
  {
    "word": "instrument",
    "pos": "n.",
    "cn_def": "樂器",
    "en_def": "an object used for producing beautiful music tracks.",
    "sentence": "Learning to play a musical {{BLANK}} as a child is known to improve memory, focus, and creative thinking skills.",
    "cn": "據說兒時學習演奏樂器可以提高記憶力、專注力和創造性思維能力。"
  },
  {
    "word": "instrument",
    "pos": "n.",
    "cn_def": "儀器、工具（書寫等）",
    "en_def": "a hand tool used for writing or precise science tasks.",
    "sentence": "The surgeon carefully selected the surgical {{BLANK}} needed for the operation and made sure everything was fully sterilised.",
    "cn": "外科醫生仔細選擇了手術所需的外科器械，並確保所有器械都已完全消毒。"
  },
  {
    "word": "musical instruments",
    "pos": "phr.",
    "cn_def": "樂器",
    "en_def": "a device like a piano or guitar kept inside schools.",
    "sentence": "The school donated several second-hand {{BLANK}} to the community centre so that local children could learn music.",
    "cn": "學校向社區中心捐贈了幾件二手樂器，讓當地兒童能夠學習音樂。"
  },
  {
    "word": "writing instrument",
    "pos": "phr.",
    "cn_def": "書寫工具",
    "en_def": "tool units like pens or pencils used to complete tests.",
    "sentence": "Students are reminded to bring their own {{BLANK}} to the examination hall as none will be provided on the day.",
    "cn": "提醒學生自行帶書寫工具到考場，考試當天不提供任何書寫工具。"
  },
  {
    "word": "instrumental",
    "pos": "adj.",
    "cn_def": "起重要作用的、有幫助的",
    "en_def": "being a highly important factor in causing a result.",
    "sentence": "She was {{BLANK}} in securing the funding that allowed the community garden project to go ahead after years of planning.",
    "cn": "她在確保資金方面起了重要作用，使社區花園項目在多年規劃後得以繼續推進。"
  },
  {
    "word": "decorations",
    "pos": "n.",
    "cn_def": "裝飾品、裝飾",
    "en_def": "items added to a room to make it look attractive.",
    "sentence": "The students made paper {{BLANK}} to hang around the classroom before the school's end-of-year celebration party.",
    "cn": "學生們製作了紙質裝飾品，在學校年終慶祝派對前掛在教室周圍。"
  },
  {
    "word": "decorating",
    "pos": "v.",
    "cn_def": "裝飾、布置",
    "en_def": "to paint or add festive items to a bedroom space.",
    "sentence": "The family spent the whole Saturday morning {{BLANK}} the house with fairy lights and wreaths for the holiday season.",
    "cn": "全家人花了整個週六早上用串燈和花環裝飾房子，迎接節日季節。"
  },
  {
    "word": "christmas decorations",
    "pos": "phr.",
    "cn_def": "聖誕裝飾",
    "en_def": "lights and ornaments put up by children in December.",
    "sentence": "The children helped put up the {{BLANK}} on the first weekend of December and were very proud of the result.",
    "cn": "孩子們在十二月的第一個週末幫忙掛上聖誕裝飾，對結果感到非常自豪。"
  },
  {
    "word": "decorative",
    "pos": "adj.",
    "cn_def": "裝飾性的",
    "en_def": "designed purely to look pretty rather than be useful.",
    "sentence": "The {{BLANK}} tiles on the kitchen wall added a splash of colour to the room without serving any practical function.",
    "cn": "廚房牆上的裝飾性瓷磚為房間增添了一抹色彩，但沒有任何實際功能。"
  },
  {
    "word": "crisp",
    "pos": "adj.",
    "cn_def": "涼爽的、清新的（空氣等）",
    "en_def": "pleasantly cool, dry, and fresh (describing weather).",
    "sentence": "The morning air was {{BLANK}} and cool as they set off on their hike through the autumn forest just after sunrise.",
    "cn": "日出後不久，他們出發在秋天的森林中徒步時，清晨的空氣清新涼爽。"
  },
  {
    "word": "crisp",
    "pos": "adj.",
    "cn_def": "酥脆的（食物等）",
    "en_def": "hard, dry, and easily broken in a pleasant way.",
    "sentence": "She bit into the {{BLANK}} apple with a satisfying crunch and enjoyed the sweet, refreshing juice that followed.",
    "cn": "她咬了一口酥脆的蘋果，發出令人滿足的嘎吱聲，享受著隨之而來的甜蜜清爽果汁。"
  },
  {
    "word": "crispy",
    "pos": "adj.",
    "cn_def": "酥脆的",
    "en_def": "tracking a perfect crunchy texture from being fried.",
    "sentence": "The golden, {{BLANK}} skin of the roast duck was the highlight of the meal and everyone reached for extra pieces.",
    "cn": "烤鴨金黃酥脆的皮是這頓飯的亮點，每個人都伸手要更多。"
  },
  {
    "word": "crispy chicken",
    "pos": "phr.",
    "cn_def": "脆皮炸雞",
    "en_def": "poultry meat fried to perfection and dusted with spices.",
    "sentence": "The restaurant is famous for its {{BLANK}}, which is marinated for twenty-four hours before being deep fried.",
    "cn": "這家餐廳以其脆皮炸雞聞名，炸雞在油炸前醃製了二十四小時。"
  },
  {
    "word": "crisp air",
    "pos": "phr.",
    "cn_def": "清新的空氣",
    "en_def": "the refreshing scent of autumn morning breezes.",
    "sentence": "She opened her bedroom window to breathe in the {{BLANK}} of the countryside early on an autumn morning.",
    "cn": "她在秋天早晨打開臥室窗戶，呼吸農村的清新空氣。"
  },
  {
    "word": "beam",
    "pos": "n.",
    "cn_def": "光線、光束",
    "en_def": "a narrow line of light shining from a star or laser.",
    "sentence": "A single {{BLANK}} of sunlight broke through the storm clouds and lit up a small patch of the grey ocean below.",
    "cn": "一道陽光穿破暴風雲，照亮了下方灰色海洋的一小片區域。"
  },
  {
    "word": "beams of light",
    "pos": "phr.",
    "cn_def": "束光、光芒",
    "en_def": "strange bright streaks observed up in the night sky.",
    "sentence": "Visitors to the northern regions were treated to spectacular {{BLANK}} dancing across the night sky.",
    "cn": "前往北部地區的遊客欣賞到了壯觀的束光在夜空中舞動的景象。"
  },
  {
    "word": "entire",
    "pos": "adj.",
    "cn_def": "全部的、整個的",
    "en_def": "whole or complete, with absolutely zero parts missing.",
    "sentence": "She read the {{BLANK}} novel in one sitting because the plot was so gripping that she simply could not put it down.",
    "cn": "她一口氣讀完了整本小說，因為情節太引人入勝，她根本無法放下書本。"
  },
  {
    "word": "entire pizza",
    "pos": "phr.",
    "cn_def": "整塊披薩",
    "en_def": "eating a whole baked pie alone without sharing.",
    "sentence": "After the long hike, he was so hungry that he ordered an {{BLANK}} and finished every single slice himself.",
    "cn": "長途徒步後，他非常飢餓，點了一整塊披薩，並自己吃完了每一片。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索、探險、研究",
    "en_def": "to travel around an unknown place to learn about it.",
    "sentence": "During their gap year, they decided to {{BLANK}} Southeast Asia by travelling through six countries on a tight budget.",
    "cn": "在間隔年期間，他們決定以有限的預算穿越六個國家，探索東南亞。"
  },
  {
    "word": "exploration",
    "pos": "n.",
    "cn_def": "探索、探查",
    "en_def": "the active traversal of deep caves or outer space.",
    "sentence": "The {{BLANK}} of deep-sea environments has revealed hundreds of new species that science had never documented before.",
    "cn": "對深海環境的探索揭示了數百個科學從未記錄過的新物種。"
  },
  {
    "word": "explorer",
    "pos": "n.",
    "cn_def": "探險家",
    "en_def": "a brave traveler mapping out hidden wild zones.",
    "sentence": "The {{BLANK}} spent three years mapping uncharted rainforest territory and discovered several previously unknown rivers.",
    "cn": "這位探險家花了三年時間繪製未知的雨林地圖，並發現了幾條以前未知的河流。"
  },
  {
    "word": "explore a cave",
    "pos": "phr.",
    "cn_def": "探索洞穴",
    "en_def": "divers moving through dangerous deep water channels.",
    "sentence": "The group hired an experienced guide to help them safely {{BLANK}} deep in the jungle during their trip.",
    "cn": "這個小組聘請了一位有經驗的導遊，幫助他們在旅行期間安全探索叢林深處的洞穴。"
  },
  {
    "word": "explore how",
    "pos": "phr.",
    "cn_def": "探究、研究如何…",
    "en_def": "a study checking how sleep logs impact school grades.",
    "sentence": "Researchers are keen to {{BLANK}} technology can be used to support students with different learning needs.",
    "cn": "研究人員急於探究技術如何能夠支持有不同學習需求的學生。"
  },
  {
    "word": "fee",
    "pos": "n.",
    "cn_def": "費用、服務費、會費",
    "en_def": "an amount of money paid for a specific service or entry.",
    "sentence": "The membership {{BLANK}} for the fitness centre covers unlimited access to all classes and equipment throughout the year.",
    "cn": "健身中心的會員費涵蓋全年無限次進入所有課程和設備的機會。"
  },
  {
    "word": "movie club fee",
    "pos": "phr.",
    "cn_def": "電影俱樂部會費",
    "en_def": "a forty dollar currency requirement to join a group.",
    "sentence": "The {{BLANK}} is very affordable and covers the cost of all screenings and events for one full year.",
    "cn": "電影俱樂部的會費非常實惠，涵蓋整整一年所有放映和活動的費用。"
  },
  {
    "word": "admission fee",
    "pos": "phr.",
    "cn_def": "門票、入場費",
    "en_def": "cash required at a front gate to enter theme parks.",
    "sentence": "The museum charges a small {{BLANK}} for adults, but children under twelve can always enter completely free of charge.",
    "cn": "博物館對成人收取小額入場費，但十二歲以下的兒童始終可以完全免費入場。"
  },
  {
    "word": "introduction",
    "pos": "n.",
    "cn_def": "序言、引言、導論",
    "en_def": "the opening chapter of a book providing base facts.",
    "sentence": "The {{BLANK}} of the textbook gave students a clear overview of what they would study throughout the entire academic year.",
    "cn": "教科書的導論讓學生對整個學年將學習的內容有了清晰的概述。"
  },
  {
    "word": "introduction",
    "pos": "n.",
    "cn_def": "介紹",
    "en_def": "the presentation of a person by name to a crowd.",
    "sentence": "The host made a warm {{BLANK}} before each speaker came on stage, highlighting their achievements and background.",
    "cn": "主持人在每位演講者上台前做了熱情的介紹，強調了他們的成就和背景。"
  },
  {
    "word": "introduce",
    "pos": "v.",
    "cn_def": "介紹、引進",
    "en_def": "to present a peer or bring a new plant line to a town.",
    "sentence": "She was nervous about having to {{BLANK}} herself to the new class on the first day, but everyone was very welcoming.",
    "cn": "她對第一天必須向新班級自我介紹感到緊張，但每個人都非常熱情歡迎。"
  },
  {
    "word": "clear introduction",
    "pos": "phr.",
    "cn_def": "清晰的介紹",
    "en_def": "an easy textbook chapter explaining historic roots.",
    "sentence": "The professor gave a {{BLANK}} to the topic that made even the most complex concepts easy to understand.",
    "cn": "教授對這個話題做了清晰的介紹，使即使是最複雜的概念也變得容易理解。"
  },
  {
    "word": "make the introductions",
    "pos": "phr.",
    "cn_def": "做介紹、引見",
    "en_def": "the master of ceremonies naming guests before a show.",
    "sentence": "As the host, it was her job to {{BLANK}} and ensure that all the guests knew who they were sitting next to.",
    "cn": "作為主持人，她的工作是做介紹，確保所有賓客都知道他們旁邊坐的是誰。"
  },
  {
    "word": "changeable",
    "pos": "adj.",
    "cn_def": "易變的、可改變的",
    "en_def": "often shifting; able to be altered easily.",
    "sentence": "Spring weather in this region is very {{BLANK}}, so visitors are always advised to pack both a raincoat and sunscreen.",
    "cn": "這個地區的春季天氣非常多變，所以建議遊客始終攜帶雨衣和防曬霜。"
  },
  {
    "word": "change",
    "pos": "v.",
    "cn_def": "改變",
    "en_def": "to make an asset different; a shift in conditions.",
    "sentence": "The sudden {{BLANK}} in weather forced the outdoor event to be moved indoors at very short notice.",
    "cn": "天氣的突然變化迫使戶外活動在很短的時間內移至室內舉行。"
  },
  {
    "word": "changeable plans",
    "pos": "phr.",
    "cn_def": "可變動的計畫",
    "en_def": "next week's schedule track that can be rescheduled.",
    "sentence": "Our {{BLANK}} for the weekend depend entirely on the weather forecast, so we will decide on Saturday morning.",
    "cn": "我們週末的可變動計畫完全取決於天氣預報，所以我們將在週六早上做決定。"
  },
  {
    "word": "challenge",
    "pos": "n.",
    "cn_def": "挑戰",
    "en_def": "a difficult task testing an individual's abilities.",
    "sentence": "Moving to a new country is a huge {{BLANK}}, but it also offers incredible opportunities to grow and learn.",
    "cn": "搬到一個新國家是一個巨大的挑戰，但它也提供了令人難以置信的成長和學習機會。"
  },
  {
    "word": "challenged",
    "pos": "v.",
    "cn_def": "挑戰、考驗",
    "en_def": "to test someone's limits or invite them to compete.",
    "sentence": "The coach {{BLANK}} his players to push beyond their comfort zones and attempt techniques they had never tried before.",
    "cn": "教練挑戰球員們超越自己的舒適圈，嘗試他們以前從未嘗試過的技術。"
  },
  {
    "word": "challenging",
    "pos": "adj.",
    "cn_def": "具挑戰性的",
    "en_def": "tough but highly interesting; demanding hard work.",
    "sentence": "She finds her new role very {{BLANK}} but also incredibly rewarding because every day brings a different problem to solve.",
    "cn": "她發現自己的新職位非常具有挑戰性，但也極為有成就感，因為每天都有不同的問題需要解決。"
  },
  {
    "word": "face a challenge",
    "pos": "phr.",
    "cn_def": "面臨挑戰",
    "en_def": "a sports team gearing up to play a dominant rival.",
    "sentence": "Every athlete must {{BLANK}} at some point in their career, and how they respond often defines them.",
    "cn": "每位運動員在職業生涯的某個時候都必須面臨挑戰，他們的應對方式往往定義了他們。"
  },
  {
    "word": "melt",
    "pos": "v.",
    "cn_def": "融化、熔化",
    "en_def": "to turn from a solid into a liquid state via heat.",
    "sentence": "The snow on the mountain began to {{BLANK}} in early spring, causing the river below to rise significantly.",
    "cn": "山上的雪在早春開始融化，導致下方的河流顯著上漲。"
  },
  {
    "word": "Ice cream melts",
    "pos": "phr.",
    "cn_def": "冰淇淋融化",
    "en_def": "a dairy dessert turning into fluid under hot sun.",
    "sentence": "{{BLANK}} very quickly on a hot summer day, so it is best to eat it in a shaded spot right away.",
    "cn": "冰淇淋在炎熱的夏天融化得非常快，所以最好立刻在陰涼的地方吃掉它。"
  },
  {
    "word": "temperature",
    "pos": "n.",
    "cn_def": "溫度、體溫",
    "en_def": "a measurement of how hot or cold a place or body is.",
    "sentence": "The nurse took the patient's {{BLANK}} and found it was slightly above normal, so she called the doctor immediately.",
    "cn": "護士量了病人的體溫，發現略高於正常值，於是立即叫了醫生。"
  },
  {
    "word": "high temperature",
    "pos": "phr.",
    "cn_def": "高溫、發燒",
    "en_def": "a diagnostic fever spike shown on medical checks.",
    "sentence": "The child was kept home from school because of a {{BLANK}} that had not come down despite two days of rest.",
    "cn": "孩子因為持續兩天休息後仍未退燒而留在家中沒有上學。"
  },
  {
    "word": "check temperature",
    "pos": "phr.",
    "cn_def": "檢查溫度",
    "en_def": "scanning climate charts before choosing daily clothes.",
    "sentence": "She always {{BLANK}} on her weather app before getting dressed so she knows how many layers to wear.",
    "cn": "她在穿衣服之前總是在天氣應用程式上查看溫度，以便知道要穿多少層衣物。"
  },
  {
    "word": "adjust",
    "pos": "v.",
    "cn_def": "調整、調節",
    "en_def": "to change something slightly to make it work better.",
    "sentence": "She had to {{BLANK}} her study schedule after joining the school choir, which rehearsed three times a week.",
    "cn": "加入每週排練三次的學校合唱團後，她不得不調整自己的學習計劃。"
  },
  {
    "word": "adjustments",
    "pos": "n.",
    "cn_def": "調整",
    "en_def": "a small modification made to a setting or machine.",
    "sentence": "Moving to a new city required several {{BLANK}} to her daily routine, including finding new places to shop and exercise.",
    "cn": "搬到新城市需要對她的日常生活進行幾項調整，包括找到新的購物和運動場所。"
  },
  {
    "word": "adjust the speed",
    "pos": "phr.",
    "cn_def": "調節速度",
    "en_def": "turning a dial to control a washing machine cycle.",
    "sentence": "The cycling instructor asked participants to {{BLANK}} on their bikes to match the pace of the music.",
    "cn": "單車教練要求參加者調節自行車速度，以配合音樂的節奏。"
  },
  {
    "word": "make adjustments to",
    "pos": "phr.",
    "cn_def": "對…做出調整",
    "en_def": "altering corporate strategy to fit current markets.",
    "sentence": "After reviewing the feedback, the team decided to {{BLANK}} the original design before the final launch.",
    "cn": "在審查反饋後，團隊決定在最終發布前對原始設計做出調整。"
  },
  {
    "word": "absorb",
    "pos": "v.",
    "cn_def": "吸收",
    "en_def": "to take in liquid, gas, or data completely.",
    "sentence": "A sponge can {{BLANK}} many times its own weight in water, making it very useful for cleaning up large spills quickly.",
    "cn": "海綿能吸收比自身重量多許多倍的水，使其在快速清理大量溢出物時非常有用。"
  },
  {
    "word": "rice absorbed water",
    "pos": "phr.",
    "cn_def": "米吸收了水分",
    "en_def": "grain units soaking up fluid until ready to eat.",
    "sentence": "After thirty minutes of soaking, the {{BLANK}} fully and was ready to be cooked on the stove.",
    "cn": "浸泡三十分鐘後，米充分吸收了水分，準備好在爐子上烹煮。"
  },
  {
    "word": "absorption",
    "pos": "n.",
    "cn_def": "吸收（名詞）",
    "en_def": "the biological process of taking in nutrients cleanly.",
    "sentence": "Vitamin D plays a crucial role in the {{BLANK}} of calcium, which is essential for maintaining strong and healthy bones.",
    "cn": "維生素D在鈣的吸收中起著至關重要的作用，這對維持強健的骨骼至關重要。"
  },
  {
    "word": "surrounding",
    "pos": "adj.",
    "cn_def": "周圍的、環繞的",
    "en_def": "existing entirely around a central point or object.",
    "sentence": "The forest fire quickly spread to the {{BLANK}} villages, and residents were evacuated within hours of the alarm.",
    "cn": "森林大火迅速蔓延到周圍的村莊，居民在警報發出後數小時內被疏散。"
  },
  {
    "word": "surrounded",
    "pos": "v.",
    "cn_def": "環繞、圍繞",
    "en_def": "to move all the way around an entry to close it in.",
    "sentence": "Tall pine trees {{BLANK}} the small mountain cabin, providing natural shade and shelter from the cold winter winds.",
    "cn": "高大的松樹環繞著山上的小木屋，提供了天然的陰涼和抵禦寒冷冬風的庇護。"
  },
  {
    "word": "surroundings",
    "pos": "n.",
    "cn_def": "環境、周圍事物（固定複數）",
    "en_def": "the physical environment or conditions around you.",
    "sentence": "It took her a few weeks to get used to her new {{BLANK}} after moving to the countryside from the busy city.",
    "cn": "從繁忙的城市搬到農村後，她花了幾週時間才適應新的環境。"
  },
  {
    "word": "surrounding land",
    "pos": "phr.",
    "cn_def": "周圍的土地",
    "en_def": "corporate fields located right next to a home asset.",
    "sentence": "The developer bought the {{BLANK}} next to the old factory and plans to build a new residential community.",
    "cn": "開發商購買了舊工廠旁邊的周圍土地，計劃建設新的住宅社區。"
  },
  {
    "word": "environmental",
    "pos": "adj.",
    "cn_def": "環境的、保護環境的",
    "en_def": "relating to the natural world of air, water, and land.",
    "sentence": "The company has made several {{BLANK}} commitments, including reducing carbon emissions by fifty percent within ten years.",
    "cn": "該公司做出了幾項環境承諾，包括在十年內將碳排放量減少百分之五十。"
  },
  {
    "word": "environment",
    "pos": "n.",
    "cn_def": "環境",
    "en_def": "the natural conditions or context inside a zone.",
    "sentence": "Protecting the natural {{BLANK}} is everyone's responsibility, not just governments and large corporations.",
    "cn": "保護自然環境是每個人的責任，而不只是政府和大型企業的責任。"
  },
  {
    "word": "environmentally friendly",
    "pos": "phr.",
    "cn_def": "環保的、對環境友善的",
    "en_def": "taking a local transit bus to reduce fuel emissions.",
    "sentence": "More consumers are choosing {{BLANK}} products, forcing companies to change how they manufacture and package goods.",
    "cn": "越來越多的消費者選擇環保產品，迫使公司改變他們製造和包裝商品的方式。"
  },
  {
    "word": "environmental law",
    "pos": "phr.",
    "cn_def": "環境保護法",
    "en_def": "state rules controlling corporate factory waste outputs.",
    "sentence": "The firm was fined heavily for violating {{BLANK}} by dumping chemical waste into the river near the factory.",
    "cn": "該公司因向工廠附近的河流傾倒化學廢料而違反環境保護法，被重罰。"
  },
  {
    "word": "impact",
    "pos": "n.",
    "cn_def": "影響、衝擊",
    "en_def": "a powerful effect or influence on a scenario state.",
    "sentence": "The new highway had a significant {{BLANK}} on the local economy, making it much easier for businesses to transport goods.",
    "cn": "新高速公路對當地經濟產生了顯著的影響，使企業運輸貨物變得更加容易。"
  },
  {
    "word": "impact",
    "pos": "v.",
    "cn_def": "影響、對…產生衝擊",
    "en_def": "to produce a clear, notable change in something.",
    "sentence": "Rising sea levels are beginning to {{BLANK}} coastal communities around the world, threatening homes and livelihoods.",
    "cn": "海平面上升開始影響世界各地的沿海社區，威脅著家園和生計。"
  },
  {
    "word": "impression",
    "pos": "n.",
    "cn_def": "印象、想法",
    "en_def": "an opinion or feeling formed about a peer or event.",
    "sentence": "She made an excellent first {{BLANK}} at the job interview by arriving early, dressing professionally, and speaking clearly.",
    "cn": "她在工作面試中通過提前到達、穿著專業和清晰表達，給人留下了出色的第一印象。"
  },
  {
    "word": "impress",
    "pos": "v.",
    "cn_def": "給…留下深刻印象、使欽佩",
    "en_def": "to make someone admire or notice your top talents.",
    "sentence": "The young chef managed to {{BLANK}} the panel of judges with her creative dish that combined local and international flavours.",
    "cn": "這位年輕廚師以融合本地和國際風味的創意菜餚，成功給評委小組留下了深刻印象。"
  },
  {
    "word": "impressive",
    "pos": "adj.",
    "cn_def": "令人印象深刻的、出眾的",
    "en_def": "making a deep impact due to being excellent or large.",
    "sentence": "The student delivered an {{BLANK}} speech that left the entire audience silent for a moment before they burst into applause.",
    "cn": "這位學生發表了一篇令人印象深刻的演講，讓整個觀眾沉默了片刻，然後爆發出掌聲。"
  },
  {
    "word": "get the impression",
    "pos": "phr.",
    "cn_def": "得到…的印象、覺得",
    "en_def": "forming an internal feeling that a peer likes you.",
    "sentence": "She {{BLANK}} that her manager was not happy with her work, even though nothing was said directly.",
    "cn": "她得到了經理對她的工作不滿意的印象，儘管沒有直接說出來任何話。"
  },
  {
    "word": "remained",
    "pos": "v.",
    "cn_def": "保持、依然、留下",
    "en_def": "to stay in the same place or keep a specific state.",
    "sentence": "Despite the heavy criticism from online reviewers, the restaurant {{BLANK}} popular with its loyal local customers.",
    "cn": "儘管受到網路評論者的嚴厲批評，這家餐廳仍然受到其忠實本地顧客的歡迎。"
  },
  {
    "word": "remains",
    "pos": "n.",
    "cn_def": "剩餘物、遺跡、遺體（複數）",
    "en_def": "the pieces left behind after an object breaks down.",
    "sentence": "The archaeologists carefully excavated the {{BLANK}} of the ancient settlement, which had been buried for over two thousand years.",
    "cn": "考古學家們仔細挖掘了這個已被埋藏兩千多年的古代聚落的遺跡。"
  },
  {
    "word": "remain cheerful",
    "pos": "phr.",
    "cn_def": "保持樂觀/開朗",
    "en_def": "keeping a happy face despite recent operational trouble.",
    "sentence": "She managed to {{BLANK}} throughout the difficult period and her positive energy helped lift the whole team.",
    "cn": "她在困難時期設法保持樂觀，她積極的能量幫助提振了整個團隊的士氣。"
  }
];

const MCQS = [
  {
    "q": "The school holds its ______ sports day in October, and students spend weeks training for their chosen events.",
    "options": [
      "instrumental",
      "annual",
      "advanced",
      "challenging"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "She saved up for months just to attend the department store's ______, where discounts reached up to seventy percent.",
    "options": [
      "clear introduction",
      "musical instruments",
      "annual sale",
      "in advance"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Hundreds of residents ______ to support the charity marathon despite the cold and rainy weather conditions.",
    "options": [
      "turned out",
      "clear introduction",
      "rice absorbed water",
      "expert builder"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The film that nobody expected much from ______ one of the biggest box office hits of the entire year.",
    "options": [
      "explore how",
      "admission fee",
      "make adjustments to",
      "turn out to be"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "She has always ______ her grandmother's patience and kindness, and hopes to develop those same qualities herself.",
    "options": [
      "introduce",
      "admired",
      "absorb",
      "challenged"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Her dedication to volunteering every single weekend despite her busy schedule is truly ______ and inspires everyone around her.",
    "options": [
      "admirable",
      "advanced",
      "entire",
      "decorative"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "She looked at the stunning mountain view with deep ______ and felt grateful to have made the difficult climb.",
    "options": [
      "environment",
      "decorations",
      "admiration",
      "absorption"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "She carefully ______ each fragile ornament in tissue paper before placing it in the box for storage.",
    "options": [
      "adjust",
      "absorb",
      "impact",
      "wrapped"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Let's ______ the meeting in the next ten minutes so everyone can leave before the evening rush hour.",
    "options": [
      "in advance",
      "high temperature",
      "wrap up",
      "crispy chicken"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Her mother reminded her to ______ around her neck tightly before heading out into the freezing winter morning.",
    "options": [
      "wrap a scarf",
      "christmas decorations",
      "clear introduction",
      "admission fee"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Tickets for the popular concert must be booked well ______, as they tend to sell out within hours of release.",
    "options": [
      "musical instruments",
      "environmental law",
      "rice absorbed water",
      "in advance"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Technology continues to ______ at an incredible pace, changing the way people work, communicate, and spend their time.",
    "options": [
      "introduce",
      "advance",
      "challenged",
      "impress"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "She enrolled in an ______ mathematics course at the university to deepen her understanding of statistics and data analysis.",
    "options": [
      "advanced",
      "annual",
      "surrounding",
      "decorative"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Rapid ______ in medical technology has made it possible to detect serious diseases much earlier than ever before.",
    "options": [
      "explorer",
      "advancement",
      "admiration",
      "remains"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The hospital brought in a leading ______ in cardiology to perform the complex surgery that local doctors could not do.",
    "options": [
      "expertise",
      "advancement",
      "exploration",
      "expert"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "She received ______ guidance from a professional chef who taught her how to prepare traditional French sauces correctly.",
    "options": [
      "entire",
      "changeable",
      "expert",
      "crisp"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The homeowner hired an ______ to fix the structural damage caused by years of water leaking through the roof.",
    "options": [
      "explore a cave",
      "remain cheerful",
      "rice absorbed water",
      "expert builder"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "She is an absolute ______ making sourdough bread, and people come from across the city to buy her loaves.",
    "options": [
      "in advance",
      "expert at",
      "changeable plans",
      "environmentally friendly"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Her ______ in environmental law made her the ideal candidate to lead the international climate negotiations.",
    "options": [
      "introduction",
      "impact",
      "expertise",
      "environment"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Learning to play a musical ______ as a child is known to improve memory, focus, and creative thinking skills.",
    "options": [
      "instrument",
      "exploration",
      "decorations",
      "remains"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The surgeon carefully selected the surgical ______ needed for the operation and made sure everything was fully sterilised.",
    "options": [
      "explorer",
      "instrument",
      "adjustments",
      "expertise"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The school donated several second-hand ______ to the community centre so that local children could learn music.",
    "options": [
      "high temperature",
      "christmas decorations",
      "musical instruments",
      "annual sale"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Students are reminded to bring their own ______ to the examination hall as none will be provided on the day.",
    "options": [
      "writing instrument",
      "clear introduction",
      "expert at",
      "environmental law"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "She was ______ in securing the funding that allowed the community garden project to go ahead after years of planning.",
    "options": [
      "environmental",
      "advanced",
      "crisp",
      "instrumental"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The students made paper ______ to hang around the classroom before the school's end-of-year celebration party.",
    "options": [
      "decorations",
      "remains",
      "expert",
      "fee"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The family spent the whole Saturday morning ______ the house with fairy lights and wreaths for the holiday season.",
    "options": [
      "challenged",
      "absorb",
      "decorating",
      "wrapped"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The children helped put up the ______ on the first weekend of December and were very proud of the result.",
    "options": [
      "crispy chicken",
      "christmas decorations",
      "wrap a scarf",
      "remain cheerful"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The ______ tiles on the kitchen wall added a splash of colour to the room without serving any practical function.",
    "options": [
      "surrounding",
      "instrumental",
      "crispy",
      "decorative"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The morning air was ______ and cool as they set off on their hike through the autumn forest just after sunrise.",
    "options": [
      "changeable",
      "challenging",
      "crisp",
      "admirable"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "She bit into the ______ apple with a satisfying crunch and enjoyed the sweet, refreshing juice that followed.",
    "options": [
      "crisp",
      "surrounding",
      "admirable",
      "impressive"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The golden, ______ skin of the roast duck was the highlight of the meal and everyone reached for extra pieces.",
    "options": [
      "expert",
      "impressive",
      "advanced",
      "crispy"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The restaurant is famous for its ______, which is marinated for twenty-four hours before being deep fried.",
    "options": [
      "wrap a scarf",
      "crispy chicken",
      "make the introductions",
      "writing instrument"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "She opened her bedroom window to breathe in the ______ of the countryside early on an autumn morning.",
    "options": [
      "wrap a scarf",
      "admission fee",
      "high temperature",
      "crisp air"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "A single ______ of sunlight broke through the storm clouds and lit up a small patch of the grey ocean below.",
    "options": [
      "beam",
      "impression",
      "introduction",
      "instrument"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "Visitors to the northern regions were treated to spectacular ______ dancing across the night sky.",
    "options": [
      "wrap up",
      "in advance",
      "beams of light",
      "musical instruments"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "She read the ______ novel in one sitting because the plot was so gripping that she simply could not put it down.",
    "options": [
      "impressive",
      "entire",
      "instrumental",
      "crispy"
    ],
    "answer": 1,
    "vocabIndex": 35
  },
  {
    "q": "After the long hike, he was so hungry that he ordered an ______ and finished every single slice himself.",
    "options": [
      "entire pizza",
      "make the introductions",
      "surrounding land",
      "admission fee"
    ],
    "answer": 0,
    "vocabIndex": 36
  },
  {
    "q": "During their gap year, they decided to ______ Southeast Asia by travelling through six countries on a tight budget.",
    "options": [
      "admired",
      "impact",
      "explore",
      "absorb"
    ],
    "answer": 2,
    "vocabIndex": 37
  },
  {
    "q": "The ______ of deep-sea environments has revealed hundreds of new species that science had never documented before.",
    "options": [
      "explorer",
      "expertise",
      "beam",
      "exploration"
    ],
    "answer": 3,
    "vocabIndex": 38
  },
  {
    "q": "The ______ spent three years mapping uncharted rainforest territory and discovered several previously unknown rivers.",
    "options": [
      "expert",
      "explorer",
      "expertise",
      "exploration"
    ],
    "answer": 1,
    "vocabIndex": 39
  },
  {
    "q": "The group hired an experienced guide to help them safely ______ deep in the jungle during their trip.",
    "options": [
      "get the impression",
      "entire pizza",
      "turned out",
      "explore a cave"
    ],
    "answer": 3,
    "vocabIndex": 40
  },
  {
    "q": "Researchers are keen to ______ technology can be used to support students with different learning needs.",
    "options": [
      "get the impression",
      "explore how",
      "high temperature",
      "movie club fee"
    ],
    "answer": 1,
    "vocabIndex": 41
  },
  {
    "q": "The membership ______ for the fitness centre covers unlimited access to all classes and equipment throughout the year.",
    "options": [
      "fee",
      "impact",
      "introduction",
      "exploration"
    ],
    "answer": 0,
    "vocabIndex": 42
  },
  {
    "q": "The ______ is very affordable and covers the cost of all screenings and events for one full year.",
    "options": [
      "wrap a scarf",
      "turned out",
      "movie club fee",
      "turn out to be"
    ],
    "answer": 2,
    "vocabIndex": 43
  },
  {
    "q": "The museum charges a small ______ for adults, but children under twelve can always enter completely free of charge.",
    "options": [
      "expert builder",
      "admission fee",
      "explore how",
      "remain cheerful"
    ],
    "answer": 1,
    "vocabIndex": 44
  },
  {
    "q": "The ______ of the textbook gave students a clear overview of what they would study throughout the entire academic year.",
    "options": [
      "exploration",
      "beam",
      "admiration",
      "introduction"
    ],
    "answer": 3,
    "vocabIndex": 45
  },
  {
    "q": "The host made a warm ______ before each speaker came on stage, highlighting their achievements and background.",
    "options": [
      "exploration",
      "challenge",
      "introduction",
      "expertise"
    ],
    "answer": 2,
    "vocabIndex": 46
  },
  {
    "q": "She was nervous about having to ______ herself to the new class on the first day, but everyone was very welcoming.",
    "options": [
      "introduce",
      "challenged",
      "explore",
      "change"
    ],
    "answer": 0,
    "vocabIndex": 47
  },
  {
    "q": "The professor gave a ______ to the topic that made even the most complex concepts easy to understand.",
    "options": [
      "make the introductions",
      "turn out to be",
      "environmentally friendly",
      "clear introduction"
    ],
    "answer": 3,
    "vocabIndex": 48
  },
  {
    "q": "As the host, it was her job to ______ and ensure that all the guests knew who they were sitting next to.",
    "options": [
      "wrap up",
      "make the introductions",
      "movie club fee",
      "admission fee"
    ],
    "answer": 1,
    "vocabIndex": 49
  },
  {
    "q": "Spring weather in this region is very ______, so visitors are always advised to pack both a raincoat and sunscreen.",
    "options": [
      "advanced",
      "crispy",
      "changeable",
      "admirable"
    ],
    "answer": 2,
    "vocabIndex": 50
  },
  {
    "q": "The sudden ______ in weather forced the outdoor event to be moved indoors at very short notice.",
    "options": [
      "change",
      "adjust",
      "decorating",
      "absorb"
    ],
    "answer": 0,
    "vocabIndex": 51
  },
  {
    "q": "Our ______ for the weekend depend entirely on the weather forecast, so we will decide on Saturday morning.",
    "options": [
      "rice absorbed water",
      "wrap a scarf",
      "expert at",
      "changeable plans"
    ],
    "answer": 3,
    "vocabIndex": 52
  },
  {
    "q": "Moving to a new country is a huge ______, but it also offers incredible opportunities to grow and learn.",
    "options": [
      "introduction",
      "adjustments",
      "challenge",
      "impact"
    ],
    "answer": 2,
    "vocabIndex": 53
  },
  {
    "q": "The coach ______ his players to push beyond their comfort zones and attempt techniques they had never tried before.",
    "options": [
      "challenged",
      "impress",
      "adjust",
      "melt"
    ],
    "answer": 0,
    "vocabIndex": 54
  },
  {
    "q": "She finds her new role very ______ but also incredibly rewarding because every day brings a different problem to solve.",
    "options": [
      "surrounding",
      "challenging",
      "impressive",
      "decorative"
    ],
    "answer": 1,
    "vocabIndex": 55
  },
  {
    "q": "Every athlete must ______ at some point in their career, and how they respond often defines them.",
    "options": [
      "face a challenge",
      "high temperature",
      "beams of light",
      "environmentally friendly"
    ],
    "answer": 0,
    "vocabIndex": 56
  },
  {
    "q": "The snow on the mountain began to ______ in early spring, causing the river below to rise significantly.",
    "options": [
      "adjust",
      "explore",
      "melt",
      "impress"
    ],
    "answer": 2,
    "vocabIndex": 57
  },
  {
    "q": "______ very quickly on a hot summer day, so it is best to eat it in a shaded spot right away.",
    "options": [
      "expert at",
      "turned out",
      "clear introduction",
      "Ice cream melts"
    ],
    "answer": 3,
    "vocabIndex": 58
  },
  {
    "q": "The nurse took the patient's ______ and found it was slightly above normal, so she called the doctor immediately.",
    "options": [
      "decorations",
      "temperature",
      "challenge",
      "beam"
    ],
    "answer": 1,
    "vocabIndex": 59
  },
  {
    "q": "The child was kept home from school because of a ______ that had not come down despite two days of rest.",
    "options": [
      "high temperature",
      "explore how",
      "clear introduction",
      "annual sale"
    ],
    "answer": 0,
    "vocabIndex": 60
  },
  {
    "q": "She always ______ on her weather app before getting dressed so she knows how many layers to wear.",
    "options": [
      "Ice cream melts",
      "wrap a scarf",
      "check temperature",
      "clear introduction"
    ],
    "answer": 2,
    "vocabIndex": 61
  },
  {
    "q": "She had to ______ her study schedule after joining the school choir, which rehearsed three times a week.",
    "options": [
      "remained",
      "melt",
      "wrapped",
      "adjust"
    ],
    "answer": 3,
    "vocabIndex": 62
  },
  {
    "q": "Moving to a new city required several ______ to her daily routine, including finding new places to shop and exercise.",
    "options": [
      "surroundings",
      "adjustments",
      "expert",
      "absorption"
    ],
    "answer": 1,
    "vocabIndex": 63
  },
  {
    "q": "The cycling instructor asked participants to ______ on their bikes to match the pace of the music.",
    "options": [
      "admission fee",
      "annual sale",
      "adjust the speed",
      "Ice cream melts"
    ],
    "answer": 2,
    "vocabIndex": 64
  },
  {
    "q": "After reviewing the feedback, the team decided to ______ the original design before the final launch.",
    "options": [
      "make adjustments to",
      "get the impression",
      "surrounding land",
      "make the introductions"
    ],
    "answer": 0,
    "vocabIndex": 65
  },
  {
    "q": "A sponge can ______ many times its own weight in water, making it very useful for cleaning up large spills quickly.",
    "options": [
      "challenged",
      "admired",
      "impact",
      "absorb"
    ],
    "answer": 3,
    "vocabIndex": 66
  },
  {
    "q": "After thirty minutes of soaking, the ______ fully and was ready to be cooked on the stove.",
    "options": [
      "clear introduction",
      "rice absorbed water",
      "remain cheerful",
      "face a challenge"
    ],
    "answer": 1,
    "vocabIndex": 67
  },
  {
    "q": "Vitamin D plays a crucial role in the ______ of calcium, which is essential for maintaining strong and healthy bones.",
    "options": [
      "remains",
      "introduction",
      "environment",
      "absorption"
    ],
    "answer": 3,
    "vocabIndex": 68
  },
  {
    "q": "The forest fire quickly spread to the ______ villages, and residents were evacuated within hours of the alarm.",
    "options": [
      "surrounding",
      "changeable",
      "annual",
      "decorative"
    ],
    "answer": 0,
    "vocabIndex": 69
  },
  {
    "q": "Tall pine trees ______ the small mountain cabin, providing natural shade and shelter from the cold winter winds.",
    "options": [
      "decorating",
      "impact",
      "surrounded",
      "wrapped"
    ],
    "answer": 2,
    "vocabIndex": 70
  },
  {
    "q": "It took her a few weeks to get used to her new ______ after moving to the countryside from the busy city.",
    "options": [
      "introduction",
      "surroundings",
      "environment",
      "explorer"
    ],
    "answer": 1,
    "vocabIndex": 71
  },
  {
    "q": "The developer bought the ______ next to the old factory and plans to build a new residential community.",
    "options": [
      "make the introductions",
      "Ice cream melts",
      "in advance",
      "surrounding land"
    ],
    "answer": 3,
    "vocabIndex": 72
  },
  {
    "q": "The company has made several ______ commitments, including reducing carbon emissions by fifty percent within ten years.",
    "options": [
      "crisp",
      "annual",
      "environmental",
      "decorative"
    ],
    "answer": 2,
    "vocabIndex": 73
  },
  {
    "q": "Protecting the natural ______ is everyone's responsibility, not just governments and large corporations.",
    "options": [
      "surroundings",
      "environment",
      "absorption",
      "adjustments"
    ],
    "answer": 1,
    "vocabIndex": 74
  },
  {
    "q": "More consumers are choosing ______ products, forcing companies to change how they manufacture and package goods.",
    "options": [
      "environmentally friendly",
      "explore a cave",
      "Ice cream melts",
      "check temperature"
    ],
    "answer": 0,
    "vocabIndex": 75
  },
  {
    "q": "The firm was fined heavily for violating ______ by dumping chemical waste into the river near the factory.",
    "options": [
      "christmas decorations",
      "get the impression",
      "explore a cave",
      "environmental law"
    ],
    "answer": 3,
    "vocabIndex": 76
  },
  {
    "q": "The new highway had a significant ______ on the local economy, making it much easier for businesses to transport goods.",
    "options": [
      "challenge",
      "fee",
      "impact",
      "expert"
    ],
    "answer": 2,
    "vocabIndex": 77
  },
  {
    "q": "Rising sea levels are beginning to ______ coastal communities around the world, threatening homes and livelihoods.",
    "options": [
      "introduce",
      "impact",
      "adjust",
      "advance"
    ],
    "answer": 1,
    "vocabIndex": 78
  },
  {
    "q": "She made an excellent first ______ at the job interview by arriving early, dressing professionally, and speaking clearly.",
    "options": [
      "impression",
      "instrument",
      "temperature",
      "impact"
    ],
    "answer": 0,
    "vocabIndex": 79
  },
  {
    "q": "The young chef managed to ______ the panel of judges with her creative dish that combined local and international flavours.",
    "options": [
      "surrounded",
      "impress",
      "challenged",
      "introduce"
    ],
    "answer": 1,
    "vocabIndex": 80
  },
  {
    "q": "The student delivered an ______ speech that left the entire audience silent for a moment before they burst into applause.",
    "options": [
      "challenging",
      "annual",
      "impressive",
      "admirable"
    ],
    "answer": 2,
    "vocabIndex": 81
  },
  {
    "q": "She ______ that her manager was not happy with her work, even though nothing was said directly.",
    "options": [
      "get the impression",
      "changeable plans",
      "crisp air",
      "wrap a scarf"
    ],
    "answer": 0,
    "vocabIndex": 82
  },
  {
    "q": "Despite the heavy criticism from online reviewers, the restaurant ______ popular with its loyal local customers.",
    "options": [
      "challenged",
      "decorating",
      "impact",
      "remained"
    ],
    "answer": 3,
    "vocabIndex": 83
  },
  {
    "q": "The archaeologists carefully excavated the ______ of the ancient settlement, which had been buried for over two thousand years.",
    "options": [
      "advancement",
      "remains",
      "absorption",
      "environment"
    ],
    "answer": 1,
    "vocabIndex": 84
  },
  {
    "q": "She managed to ______ throughout the difficult period and her positive energy helped lift the whole team.",
    "options": [
      "remain cheerful",
      "make adjustments to",
      "face a challenge",
      "explore a cave"
    ],
    "answer": 0,
    "vocabIndex": 85
  }
];

const LOOKUP = {
  "annual": {
    "pos": "adj.",
    "en_def": "happening or done once every single year.",
    "cn_def": "每年的、年度的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "happening or done once every single year.",
        "cn_def": "每年的、年度的"
      }
    ]
  },
  "annual sale": {
    "pos": "phr.",
    "en_def": "a yearly store event driving massive arrival lines.",
    "cn_def": "年度大拍賣",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a yearly store event driving massive arrival lines.",
        "cn_def": "年度大拍賣"
      }
    ]
  },
  "turned out": {
    "pos": "phr.",
    "en_def": "to arrive or assemble at an event to participate.",
    "cn_def": "出席、結果是",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to arrive or assemble at an event to participate.",
        "cn_def": "出席、結果是"
      }
    ]
  },
  "turn out": {
    "pos": "phr.",
    "en_def": "to arrive or assemble at an event to participate.",
    "cn_def": "出席、結果是",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to arrive or assemble at an event to participate.",
        "cn_def": "出席、結果是"
      }
    ]
  },
  "turn out to be": {
    "pos": "phr.",
    "en_def": "proving to be something else unexpected in the end.",
    "cn_def": "結果竟然是…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "proving to be something else unexpected in the end.",
        "cn_def": "結果竟然是…"
      }
    ]
  },
  "admired": {
    "pos": "v.",
    "en_def": "to respect and approve of someone's talents or skill.",
    "cn_def": "欽佩、欣賞、讚賞",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to respect and approve of someone's talents or skill.",
        "cn_def": "欽佩、欣賞、讚賞"
      }
    ]
  },
  "admire": {
    "pos": "v.",
    "en_def": "to respect and approve of someone's talents or skill.",
    "cn_def": "欽佩、欣賞、讚賞",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to respect and approve of someone's talents or skill.",
        "cn_def": "欽佩、欣賞、讚賞"
      }
    ]
  },
  "admirable": {
    "pos": "adj.",
    "en_def": "deserving deep respect; tracking flawless traits.",
    "cn_def": "令人欽佩的、值得讚賞的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "deserving deep respect; tracking flawless traits.",
        "cn_def": "令人欽佩的、值得讚賞的"
      }
    ]
  },
  "admiration": {
    "pos": "n.",
    "en_def": "a feeling of deep respect and approval for a peer.",
    "cn_def": "欽佩、讚賞",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling of deep respect and approval for a peer.",
        "cn_def": "欽佩、讚賞"
      }
    ]
  },
  "wrapped": {
    "pos": "v.",
    "en_def": "to cover something completely by folding cloth around it.",
    "cn_def": "包裹、纏繞",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cover something completely by folding cloth around it.",
        "cn_def": "包裹、纏繞"
      }
    ]
  },
  "wrap": {
    "pos": "v.",
    "en_def": "to cover something completely by folding cloth around it.",
    "cn_def": "包裹、纏繞",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cover something completely by folding cloth around it.",
        "cn_def": "包裹、纏繞"
      }
    ]
  },
  "wrap up": {
    "pos": "phr.",
    "en_def": "to bring a hard day's work to a successful finish.",
    "cn_def": "結束、圓滿完成（工作等）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to bring a hard day's work to a successful finish.",
        "cn_def": "結束、圓滿完成（工作等）"
      }
    ]
  },
  "wrap a scarf": {
    "pos": "phr.",
    "en_def": "twisting wool around the neck to withstand cold air.",
    "cn_def": "圍圍巾",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "twisting wool around the neck to withstand cold air.",
        "cn_def": "圍圍巾"
      }
    ]
  },
  "in advance": {
    "pos": "phr.",
    "en_def": "before a particular time or event; beforehand.",
    "cn_def": "預先、事先",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "before a particular time or event; beforehand.",
        "cn_def": "預先、事先"
      }
    ]
  },
  "advance": {
    "pos": "v.",
    "en_def": "to move forward or a step forward in development.",
    "cn_def": "前進、進步",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to move forward or a step forward in development.",
        "cn_def": "前進、進步"
      }
    ]
  },
  "advanced": {
    "pos": "adj.",
    "en_def": "using modern complex technology or high level math.",
    "cn_def": "先進的、高級的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "using modern complex technology or high level math.",
        "cn_def": "先進的、高級的"
      }
    ]
  },
  "advancement": {
    "pos": "n.",
    "en_def": "an improvement or promotion inside a corporate role.",
    "cn_def": "提升、前進、進步",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an improvement or promotion inside a corporate role.",
        "cn_def": "提升、前進、進步"
      }
    ]
  },
  "expert": {
    "pos": "n.",
    "en_def": "a person with high knowledge or skill in a field.",
    "cn_def": "專家",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person with high knowledge or skill in a field.",
        "cn_def": "專家"
      },
      {
        "pos": "adj.",
        "en_def": "tracking massive professional mastery over a task.",
        "cn_def": "專家的、內行的"
      }
    ]
  },
  "expert builder": {
    "pos": "phr.",
    "en_def": "a seasoned master who solves foundational house leaks.",
    "cn_def": "建築專家",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a seasoned master who solves foundational house leaks.",
        "cn_def": "建築專家"
      }
    ]
  },
  "expert at": {
    "pos": "phr.",
    "en_def": "an individual highly skilled at baking top pizza dishes.",
    "cn_def": "擅長…的專家",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an individual highly skilled at baking top pizza dishes.",
        "cn_def": "擅長…的專家"
      }
    ]
  },
  "expertise": {
    "pos": "n.",
    "en_def": "high specialized knowledge mastered over years of work.",
    "cn_def": "專門知識、專業技能",
    "combined": [
      {
        "pos": "n.",
        "en_def": "high specialized knowledge mastered over years of work.",
        "cn_def": "專門知識、專業技能"
      }
    ]
  },
  "instrument": {
    "pos": "n.",
    "en_def": "an object used for producing beautiful music tracks.",
    "cn_def": "樂器",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an object used for producing beautiful music tracks.",
        "cn_def": "樂器"
      },
      {
        "pos": "n.",
        "en_def": "a hand tool used for writing or precise science tasks.",
        "cn_def": "儀器、工具（書寫等）"
      }
    ]
  },
  "musical instrument": {
    "pos": "phr.",
    "en_def": "a device like a piano or guitar kept inside schools.",
    "cn_def": "樂器",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a device like a piano or guitar kept inside schools.",
        "cn_def": "樂器"
      }
    ]
  },
  "musical instruments": {
    "pos": "phr.",
    "en_def": "a device like a piano or guitar kept inside schools.",
    "cn_def": "樂器",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a device like a piano or guitar kept inside schools.",
        "cn_def": "樂器"
      }
    ]
  },
  "writing instrument": {
    "pos": "phr.",
    "en_def": "tool units like pens or pencils used to complete tests.",
    "cn_def": "書寫工具",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "tool units like pens or pencils used to complete tests.",
        "cn_def": "書寫工具"
      }
    ]
  },
  "instrumental": {
    "pos": "adj.",
    "en_def": "being a highly important factor in causing a result.",
    "cn_def": "起重要作用的、有幫助的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "being a highly important factor in causing a result.",
        "cn_def": "起重要作用的、有幫助的"
      }
    ]
  },
  "decorations": {
    "pos": "n.",
    "en_def": "items added to a room to make it look attractive.",
    "cn_def": "裝飾品、裝飾",
    "combined": [
      {
        "pos": "n.",
        "en_def": "items added to a room to make it look attractive.",
        "cn_def": "裝飾品、裝飾"
      }
    ]
  },
  "decoration": {
    "pos": "n.",
    "en_def": "items added to a room to make it look attractive.",
    "cn_def": "裝飾品、裝飾",
    "combined": [
      {
        "pos": "n.",
        "en_def": "items added to a room to make it look attractive.",
        "cn_def": "裝飾品、裝飾"
      }
    ]
  },
  "decorate": {
    "pos": "v.",
    "en_def": "to paint or add festive items to a bedroom space.",
    "cn_def": "裝飾、布置",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to paint or add festive items to a bedroom space.",
        "cn_def": "裝飾、布置"
      }
    ]
  },
  "decorating": {
    "pos": "v.",
    "en_def": "to paint or add festive items to a bedroom space.",
    "cn_def": "裝飾、布置",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to paint or add festive items to a bedroom space.",
        "cn_def": "裝飾、布置"
      }
    ]
  },
  "christmas decorations": {
    "pos": "phr.",
    "en_def": "lights and ornaments put up by children in December.",
    "cn_def": "聖誕裝飾",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "lights and ornaments put up by children in December.",
        "cn_def": "聖誕裝飾"
      }
    ]
  },
  "decorative": {
    "pos": "adj.",
    "en_def": "designed purely to look pretty rather than be useful.",
    "cn_def": "裝飾性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "designed purely to look pretty rather than be useful.",
        "cn_def": "裝飾性的"
      }
    ]
  },
  "crisp": {
    "pos": "adj.",
    "en_def": "pleasantly cool, dry, and fresh (describing weather).",
    "cn_def": "涼爽的、清新的（空氣等）",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "pleasantly cool, dry, and fresh (describing weather).",
        "cn_def": "涼爽的、清新的（空氣等）"
      },
      {
        "pos": "adj.",
        "en_def": "hard, dry, and easily broken in a pleasant way.",
        "cn_def": "酥脆的（食物等）"
      }
    ]
  },
  "crispy": {
    "pos": "adj.",
    "en_def": "tracking a perfect crunchy texture from being fried.",
    "cn_def": "酥脆的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "tracking a perfect crunchy texture from being fried.",
        "cn_def": "酥脆的"
      }
    ]
  },
  "crispy chicken": {
    "pos": "phr.",
    "en_def": "poultry meat fried to perfection and dusted with spices.",
    "cn_def": "脆皮炸雞",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "poultry meat fried to perfection and dusted with spices.",
        "cn_def": "脆皮炸雞"
      }
    ]
  },
  "crisp air": {
    "pos": "phr.",
    "en_def": "the refreshing scent of autumn morning breezes.",
    "cn_def": "清新的空氣",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the refreshing scent of autumn morning breezes.",
        "cn_def": "清新的空氣"
      }
    ]
  },
  "beam": {
    "pos": "n.",
    "en_def": "a narrow line of light shining from a star or laser.",
    "cn_def": "光線、光束",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a narrow line of light shining from a star or laser.",
        "cn_def": "光線、光束"
      }
    ]
  },
  "beams of light": {
    "pos": "phr.",
    "en_def": "strange bright streaks observed up in the night sky.",
    "cn_def": "束光、光芒",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "strange bright streaks observed up in the night sky.",
        "cn_def": "束光、光芒"
      }
    ]
  },
  "entire": {
    "pos": "adj.",
    "en_def": "whole or complete, with absolutely zero parts missing.",
    "cn_def": "全部的、整個的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "whole or complete, with absolutely zero parts missing.",
        "cn_def": "全部的、整個的"
      }
    ]
  },
  "entire pizza": {
    "pos": "phr.",
    "en_def": "eating a whole baked pie alone without sharing.",
    "cn_def": "整塊披薩",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "eating a whole baked pie alone without sharing.",
        "cn_def": "整塊披薩"
      }
    ]
  },
  "explore": {
    "pos": "v.",
    "en_def": "to travel around an unknown place to learn about it.",
    "cn_def": "探索、探險、研究",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to travel around an unknown place to learn about it.",
        "cn_def": "探索、探險、研究"
      }
    ]
  },
  "exploration": {
    "pos": "n.",
    "en_def": "the active traversal of deep caves or outer space.",
    "cn_def": "探索、探查",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the active traversal of deep caves or outer space.",
        "cn_def": "探索、探查"
      }
    ]
  },
  "explorer": {
    "pos": "n.",
    "en_def": "a brave traveler mapping out hidden wild zones.",
    "cn_def": "探險家",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a brave traveler mapping out hidden wild zones.",
        "cn_def": "探險家"
      }
    ]
  },
  "explore a cave": {
    "pos": "phr.",
    "en_def": "divers moving through dangerous deep water channels.",
    "cn_def": "探索洞穴",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "divers moving through dangerous deep water channels.",
        "cn_def": "探索洞穴"
      }
    ]
  },
  "explore how": {
    "pos": "phr.",
    "en_def": "a study checking how sleep logs impact school grades.",
    "cn_def": "探究、研究如何…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a study checking how sleep logs impact school grades.",
        "cn_def": "探究、研究如何…"
      }
    ]
  },
  "fee": {
    "pos": "n.",
    "en_def": "an amount of money paid for a specific service or entry.",
    "cn_def": "費用、服務費、會費",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an amount of money paid for a specific service or entry.",
        "cn_def": "費用、服務費、會費"
      }
    ]
  },
  "movie club fee": {
    "pos": "phr.",
    "en_def": "a forty dollar currency requirement to join a group.",
    "cn_def": "電影俱樂部會費",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a forty dollar currency requirement to join a group.",
        "cn_def": "電影俱樂部會費"
      }
    ]
  },
  "admission fee": {
    "pos": "phr.",
    "en_def": "cash required at a front gate to enter theme parks.",
    "cn_def": "門票、入場費",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "cash required at a front gate to enter theme parks.",
        "cn_def": "門票、入場費"
      }
    ]
  },
  "introduction": {
    "pos": "n.",
    "en_def": "the opening chapter of a book providing base facts.",
    "cn_def": "序言、引言、導論",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the opening chapter of a book providing base facts.",
        "cn_def": "序言、引言、導論"
      },
      {
        "pos": "n.",
        "en_def": "the presentation of a person by name to a crowd.",
        "cn_def": "介紹"
      }
    ]
  },
  "introduce": {
    "pos": "v.",
    "en_def": "to present a peer or bring a new plant line to a town.",
    "cn_def": "介紹、引進",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to present a peer or bring a new plant line to a town.",
        "cn_def": "介紹、引進"
      }
    ]
  },
  "clear introduction": {
    "pos": "phr.",
    "en_def": "an easy textbook chapter explaining historic roots.",
    "cn_def": "清晰的介紹",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an easy textbook chapter explaining historic roots.",
        "cn_def": "清晰的介紹"
      }
    ]
  },
  "make the introductions": {
    "pos": "phr.",
    "en_def": "the master of ceremonies naming guests before a show.",
    "cn_def": "做介紹、引見",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the master of ceremonies naming guests before a show.",
        "cn_def": "做介紹、引見"
      }
    ]
  },
  "changeable": {
    "pos": "adj.",
    "en_def": "often shifting; able to be altered easily.",
    "cn_def": "易變的、可改變的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "often shifting; able to be altered easily.",
        "cn_def": "易變的、可改變的"
      }
    ]
  },
  "change": {
    "pos": "v.",
    "en_def": "to make an asset different; a shift in conditions.",
    "cn_def": "改變",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make an asset different; a shift in conditions.",
        "cn_def": "改變"
      }
    ]
  },
  "changeable plans": {
    "pos": "phr.",
    "en_def": "next week's schedule track that can be rescheduled.",
    "cn_def": "可變動的計畫",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "next week's schedule track that can be rescheduled.",
        "cn_def": "可變動的計畫"
      }
    ]
  },
  "challenge": {
    "pos": "n.",
    "en_def": "a difficult task testing an individual's abilities.",
    "cn_def": "挑戰",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a difficult task testing an individual's abilities.",
        "cn_def": "挑戰"
      },
      {
        "pos": "v.",
        "en_def": "to test someone's limits or invite them to compete.",
        "cn_def": "挑戰、考驗"
      }
    ]
  },
  "challenged": {
    "pos": "v.",
    "en_def": "to test someone's limits or invite them to compete.",
    "cn_def": "挑戰、考驗",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to test someone's limits or invite them to compete.",
        "cn_def": "挑戰、考驗"
      }
    ]
  },
  "challenging": {
    "pos": "adj.",
    "en_def": "tough but highly interesting; demanding hard work.",
    "cn_def": "具挑戰性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "tough but highly interesting; demanding hard work.",
        "cn_def": "具挑戰性的"
      }
    ]
  },
  "face a challenge": {
    "pos": "phr.",
    "en_def": "a sports team gearing up to play a dominant rival.",
    "cn_def": "面臨挑戰",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a sports team gearing up to play a dominant rival.",
        "cn_def": "面臨挑戰"
      }
    ]
  },
  "melt": {
    "pos": "v.",
    "en_def": "to turn from a solid into a liquid state via heat.",
    "cn_def": "融化、熔化",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to turn from a solid into a liquid state via heat.",
        "cn_def": "融化、熔化"
      }
    ]
  },
  "ice cream melts": {
    "pos": "phr.",
    "en_def": "a dairy dessert turning into fluid under hot sun.",
    "cn_def": "冰淇淋融化",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a dairy dessert turning into fluid under hot sun.",
        "cn_def": "冰淇淋融化"
      }
    ]
  },
  "temperature": {
    "pos": "n.",
    "en_def": "a measurement of how hot or cold a place or body is.",
    "cn_def": "溫度、體溫",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a measurement of how hot or cold a place or body is.",
        "cn_def": "溫度、體溫"
      }
    ]
  },
  "high temperature": {
    "pos": "phr.",
    "en_def": "a diagnostic fever spike shown on medical checks.",
    "cn_def": "高溫、發燒",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a diagnostic fever spike shown on medical checks.",
        "cn_def": "高溫、發燒"
      }
    ]
  },
  "check temperature": {
    "pos": "phr.",
    "en_def": "scanning climate charts before choosing daily clothes.",
    "cn_def": "檢查溫度",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "scanning climate charts before choosing daily clothes.",
        "cn_def": "檢查溫度"
      }
    ]
  },
  "adjust": {
    "pos": "v.",
    "en_def": "to change something slightly to make it work better.",
    "cn_def": "調整、調節",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to change something slightly to make it work better.",
        "cn_def": "調整、調節"
      }
    ]
  },
  "adjustment": {
    "pos": "n.",
    "en_def": "a small modification made to a setting or machine.",
    "cn_def": "調整",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small modification made to a setting or machine.",
        "cn_def": "調整"
      }
    ]
  },
  "adjustments": {
    "pos": "n.",
    "en_def": "a small modification made to a setting or machine.",
    "cn_def": "調整",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small modification made to a setting or machine.",
        "cn_def": "調整"
      }
    ]
  },
  "adjust the speed": {
    "pos": "phr.",
    "en_def": "turning a dial to control a washing machine cycle.",
    "cn_def": "調節速度",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "turning a dial to control a washing machine cycle.",
        "cn_def": "調節速度"
      }
    ]
  },
  "make adjustments to": {
    "pos": "phr.",
    "en_def": "altering corporate strategy to fit current markets.",
    "cn_def": "對…做出調整",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "altering corporate strategy to fit current markets.",
        "cn_def": "對…做出調整"
      }
    ]
  },
  "absorb": {
    "pos": "v.",
    "en_def": "to take in liquid, gas, or data completely.",
    "cn_def": "吸收",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take in liquid, gas, or data completely.",
        "cn_def": "吸收"
      }
    ]
  },
  "rice absorbed water": {
    "pos": "phr.",
    "en_def": "grain units soaking up fluid until ready to eat.",
    "cn_def": "米吸收了水分",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "grain units soaking up fluid until ready to eat.",
        "cn_def": "米吸收了水分"
      }
    ]
  },
  "absorption": {
    "pos": "n.",
    "en_def": "the biological process of taking in nutrients cleanly.",
    "cn_def": "吸收（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the biological process of taking in nutrients cleanly.",
        "cn_def": "吸收（名詞）"
      }
    ]
  },
  "surrounding": {
    "pos": "adj.",
    "en_def": "existing entirely around a central point or object.",
    "cn_def": "周圍的、環繞的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "existing entirely around a central point or object.",
        "cn_def": "周圍的、環繞的"
      }
    ]
  },
  "surround": {
    "pos": "v.",
    "en_def": "to move all the way around an entry to close it in.",
    "cn_def": "環繞、圍繞",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to move all the way around an entry to close it in.",
        "cn_def": "環繞、圍繞"
      }
    ]
  },
  "surrounded": {
    "pos": "v.",
    "en_def": "to move all the way around an entry to close it in.",
    "cn_def": "環繞、圍繞",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to move all the way around an entry to close it in.",
        "cn_def": "環繞、圍繞"
      }
    ]
  },
  "surroundings": {
    "pos": "n.",
    "en_def": "the physical environment or conditions around you.",
    "cn_def": "環境、周圍事物（固定複數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the physical environment or conditions around you.",
        "cn_def": "環境、周圍事物（固定複數）"
      }
    ]
  },
  "surrounding land": {
    "pos": "phr.",
    "en_def": "corporate fields located right next to a home asset.",
    "cn_def": "周圍的土地",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "corporate fields located right next to a home asset.",
        "cn_def": "周圍的土地"
      }
    ]
  },
  "environmental": {
    "pos": "adj.",
    "en_def": "relating to the natural world of air, water, and land.",
    "cn_def": "環境的、保護環境的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to the natural world of air, water, and land.",
        "cn_def": "環境的、保護環境的"
      }
    ]
  },
  "environment": {
    "pos": "n.",
    "en_def": "the natural conditions or context inside a zone.",
    "cn_def": "環境",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the natural conditions or context inside a zone.",
        "cn_def": "環境"
      }
    ]
  },
  "environmentally friendly": {
    "pos": "phr.",
    "en_def": "taking a local transit bus to reduce fuel emissions.",
    "cn_def": "環保的、對環境友善的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "taking a local transit bus to reduce fuel emissions.",
        "cn_def": "環保的、對環境友善的"
      }
    ]
  },
  "environmental law": {
    "pos": "phr.",
    "en_def": "state rules controlling corporate factory waste outputs.",
    "cn_def": "環境保護法",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "state rules controlling corporate factory waste outputs.",
        "cn_def": "環境保護法"
      }
    ]
  },
  "impact": {
    "pos": "n.",
    "en_def": "a powerful effect or influence on a scenario state.",
    "cn_def": "影響、衝擊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a powerful effect or influence on a scenario state.",
        "cn_def": "影響、衝擊"
      },
      {
        "pos": "v.",
        "en_def": "to produce a clear, notable change in something.",
        "cn_def": "影響、對…產生衝擊"
      }
    ]
  },
  "impression": {
    "pos": "n.",
    "en_def": "an opinion or feeling formed about a peer or event.",
    "cn_def": "印象、想法",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an opinion or feeling formed about a peer or event.",
        "cn_def": "印象、想法"
      }
    ]
  },
  "impress": {
    "pos": "v.",
    "en_def": "to make someone admire or notice your top talents.",
    "cn_def": "給…留下深刻印象、使欽佩",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make someone admire or notice your top talents.",
        "cn_def": "給…留下深刻印象、使欽佩"
      }
    ]
  },
  "impressive": {
    "pos": "adj.",
    "en_def": "making a deep impact due to being excellent or large.",
    "cn_def": "令人印象深刻的、出眾的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "making a deep impact due to being excellent or large.",
        "cn_def": "令人印象深刻的、出眾的"
      }
    ]
  },
  "get the impression": {
    "pos": "phr.",
    "en_def": "forming an internal feeling that a peer likes you.",
    "cn_def": "得到…的印象、覺得",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "forming an internal feeling that a peer likes you.",
        "cn_def": "得到…的印象、覺得"
      }
    ]
  },
  "remain": {
    "pos": "v.",
    "en_def": "to stay in the same place or keep a specific state.",
    "cn_def": "保持、依然、留下",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to stay in the same place or keep a specific state.",
        "cn_def": "保持、依然、留下"
      }
    ]
  },
  "remained": {
    "pos": "v.",
    "en_def": "to stay in the same place or keep a specific state.",
    "cn_def": "保持、依然、留下",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to stay in the same place or keep a specific state.",
        "cn_def": "保持、依然、留下"
      }
    ]
  },
  "remains": {
    "pos": "n.",
    "en_def": "the pieces left behind after an object breaks down.",
    "cn_def": "剩餘物、遺跡、遺體（複數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the pieces left behind after an object breaks down.",
        "cn_def": "剩餘物、遺跡、遺體（複數）"
      }
    ]
  },
  "remain cheerful": {
    "pos": "phr.",
    "en_def": "keeping a happy face despite recent operational trouble.",
    "cn_def": "保持樂觀/開朗",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "keeping a happy face despite recent operational trouble.",
        "cn_def": "保持樂觀/開朗"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
