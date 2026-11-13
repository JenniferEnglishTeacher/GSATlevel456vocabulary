// Unit 12 Quiz Data: hesitate – doggy bag
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Advanced U12 - hesitate – doggy bag",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "hesitate",
    "pos": "v.",
    "cn_def": "猶豫；遲疑",
    "en_def": "to pause before you do or say something, often because you are uncertain",
    "sentence": "Please do not {{BLANK}} to contact our customer service department if you have any questions.",
    "cn": "如果您有任何問題，請毫不猶豫地與我們的客戶服務部門聯繫。"
  },
  {
    "word": "hesitation",
    "pos": "n.",
    "cn_def": "猶豫；躊躇",
    "en_def": "the act of pausing before doing something because you are uncertain or nervous",
    "sentence": "There was a noticeable moment of {{BLANK}} before the nervous woman finally said, \"I do.\"",
    "cn": "在這位緊張的女子最終說出「我願意」之前，現場有一段明顯的猶豫時刻。"
  },
  {
    "word": "hesitant",
    "pos": "adj.",
    "cn_def": "猶豫的；遲疑的",
    "en_def": "tentative, unsure, or slow in acting or speaking due to uncertainty",
    "sentence": "The young boy was {{BLANK}} about jumping into the deep swimming pool without his life jacket.",
    "cn": "這個小男孩對於在沒有救生衣的情況下跳入深水游泳池感到有些遲疑。"
  },
  {
    "word": "discarded",
    "pos": "v.",
    "cn_def": "丟棄；拋棄",
    "en_def": "to throw something away because it is useless, broken, or no longer wanted",
    "sentence": "The man {{BLANK}} most of the old, broken furniture that was left in his new apartment.",
    "cn": "男子丟棄了留在他新公寓裡的大部分老舊破損家具。"
  },
  {
    "word": "get rid of",
    "pos": "phr.",
    "cn_def": "扔掉；拋棄（等同於 discard）",
    "en_def": "to throw away something that you no longer need by putting it in the trash",
    "sentence": "It is time to {{BLANK}} those old magazines that have been gathering dust in the corner.",
    "cn": "是時候扔掉那些在角落裡落灰的舊雜誌了。"
  },
  {
    "word": "issues",
    "pos": "n.",
    "cn_def": "議題；（刊物的）期號",
    "en_def": "an important topic or problem for debate; a particular edition of a magazine",
    "sentence": "Politicians should pay more attention to environmental {{BLANK}} like global warming and pollution.",
    "cn": "政治家應該多加關注全球暖化與污染等環境議題。"
  },
  {
    "word": "recent issues",
    "pos": "n.",
    "cn_def": "近期刊物",
    "en_def": "a copy of a magazine or newspaper published not long ago",
    "sentence": "Readers said that {{BLANK}} of the fashion magazine have been much more interesting.",
    "cn": "讀者表示，這本時尚雜誌的近期刊物內容變得有趣得多了。"
  },
  {
    "word": "issued",
    "pos": "v.",
    "cn_def": "發行；發布；核發",
    "en_def": "to officially produce, give out, or publish something for the public",
    "sentence": "The major drug company {{BLANK}} a strict warning for one of its new medical products.",
    "cn": "這家大型藥品公司為其一款新醫療產品發布了嚴格的警告。"
  },
  {
    "word": "tons",
    "pos": "n.",
    "cn_def": "噸；大量",
    "en_def": "a unit of weight equal to 1,000 kilograms; a very large amount",
    "sentence": "How many {{BLANK}} does a mature African elephant usually weigh under normal circumstances?",
    "cn": "在正常情況下，一隻成年的非洲大象通常體重有多少公噸？"
  },
  {
    "word": "a ton of",
    "pos": "phr.",
    "cn_def": "大量的...；許多...",
    "en_def": "a very large quantity or amount of people, things, or work",
    "sentence": "I have {{BLANK}} work to do tonight, so I cannot go to dinner with you.",
    "cn": "我今晚有大量的工做要做，所以無法和你們一起去吃晚餐。"
  },
  {
    "word": "heap",
    "pos": "n.",
    "cn_def": "一堆",
    "en_def": "an untidy collection of objects placed on top of each other",
    "sentence": "A messy {{BLANK}} of dirty clothes sat on the wooden floor of the teenager's room.",
    "cn": "一堆凌亂的髒衣服堆在這位青少年的房間木地板上。"
  },
  {
    "word": "heaped",
    "pos": "v.",
    "cn_def": "堆積；大量給予",
    "en_def": "to put things into an untidy pile, or to give someone a lot of praise",
    "sentence": "The children {{BLANK}} their bags and heavy coats on benches and ran toward the playground.",
    "cn": "孩子們把他們的書包和厚重外套堆在長椅上，然後朝著遊樂場跑去。"
  },
  {
    "word": "excludes",
    "pos": "v.",
    "cn_def": "排除；不包括",
    "en_def": "to deliberately prevent someone or something from entering a place or group",
    "sentence": "Doris is trying to stick to a new diet that {{BLANK}} foods containing processed sugar.",
    "cn": "多莉絲正試圖堅持一種不包括含有加工糖食品的新飲食習慣。"
  },
  {
    "word": "exclusion",
    "pos": "n.",
    "cn_def": "排除；排斥",
    "en_def": "the act of officially excluding someone or something from a place or group",
    "sentence": "The strict {{BLANK}} of foreign vehicles from downtown residential streets reduced traffic congestion.",
    "cn": "嚴格禁止外國車輛進入市中心住宅區街道的規定減少了交通擁堵。"
  },
  {
    "word": "exclusive",
    "pos": "adj.",
    "cn_def": "獨家的；專屬的高級",
    "en_def": "limited to a single choice person or group, or expensive and high-quality",
    "sentence": "The luxury fashion resort hosted an {{BLANK}} party for its most creditworthy VIP customers.",
    "cn": "這家豪華時尚度假村為其最享有信譽的 VIP 客戶舉辦了一場專屬的派對。"
  },
  {
    "word": "substantial",
    "pos": "adj.",
    "cn_def": "大量的；實質的；重大的",
    "en_def": "large in size, value, amount, or central importance",
    "sentence": "Maria spends a {{BLANK}} amount of her free time each week reading classic English novels.",
    "cn": "瑪利亞每週都花費大量的空閒時間來閱讀經典的英文小說。"
  },
  {
    "word": "considerable",
    "pos": "adj.",
    "cn_def": "相當大/多的",
    "en_def": "large or important enough to have a noticeable effect or to be noticed",
    "sentence": "The international tech firm made a {{BLANK}} profit after launching its automated platform.",
    "cn": "這家國際科技公司在推出自動化平台後賺取了相當豐厚的利潤。"
  },
  {
    "word": "economically",
    "pos": "adv.",
    "cn_def": "經濟上；節約地",
    "en_def": "in a way that relates to the economy, or in a way that saves money",
    "sentence": "The historic city could benefit {{BLANK}} from the creation of more local tourist attractions.",
    "cn": "這座歷史悠久的城市可以從創造更多當地旅遊景點中獲得經濟上的利益。"
  },
  {
    "word": "economic",
    "pos": "adj.",
    "cn_def": "經濟的；經濟學的",
    "en_def": "relating to the trade, industry, and money management of a country",
    "sentence": "The prime minister's {{BLANK}} advisors are searching for ways to minimize the inflation rate.",
    "cn": "首相的經濟顧問正在尋找將通貨膨脹率降至最低的方法。"
  },
  {
    "word": "economy",
    "pos": "n.",
    "cn_def": "經濟；節約",
    "en_def": "the state of a country or region in terms of the production of goods",
    "sentence": "The global {{BLANK}} is facing severe challenges due to recent trade restriction policies.",
    "cn": "由於近期的貿易限制政策，全球經濟正隨之面臨嚴峻的挑戰。"
  },
  {
    "word": "emit",
    "pos": "v.",
    "cn_def": "排放；發出",
    "en_def": "to send out a beam of light, clean heat, loud sound, or dangerous gas",
    "sentence": "Active volcanoes {{BLANK}} large amounts of toxic gas and grey ash into the atmosphere.",
    "cn": "活火山會向大氣中排放大量的有毒氣體和灰色火山灰。"
  },
  {
    "word": "emissions",
    "pos": "n.",
    "cn_def": "排放；排放物",
    "en_def": "the production and discharge of something, especially gas or radiation",
    "sentence": "Riding a bicycle and walking to work can help reduce carbon {{BLANK}} in big cities.",
    "cn": "在大城市中，騎自行車和步行上班可以幫助減少碳排放量。"
  },
  {
    "word": "intend",
    "pos": "v.",
    "cn_def": "打算；企圖",
    "en_def": "to have a plan or purpose in mind when performing an action",
    "sentence": "What do you {{BLANK}} to do after you graduate from this prestigious university next year?",
    "cn": "你明年從這所著名大學畢業後打算做什麼？"
  },
  {
    "word": "intention",
    "pos": "n.",
    "cn_def": "意圖；打算",
    "en_def": "an aim, purpose, or specific plan that guides someone's behavior",
    "sentence": "He joined the local environmental campaign with the clear {{BLANK}} of protecting wildlife.",
    "cn": "他加入當地的環保運動，其明確意圖是為了保護野生動物。"
  },
  {
    "word": "intentionally",
    "pos": "adv.",
    "cn_def": "故意地；有意地",
    "en_def": "deliberately; done on purpose rather than by an accident",
    "sentence": "The soccer player was heavily penalized for {{BLANK}} tripping his opponent during the match.",
    "cn": "這位足球運動員因在比賽中故意絆倒對手而受到重罰。"
  },
  {
    "word": "unintentional",
    "pos": "adj.",
    "cn_def": "無意的；非故意的",
    "en_def": "accidental; not done on purpose or with a specific plan",
    "sentence": "The minor spelling mistake in the official financial document was completely {{BLANK}}.",
    "cn": "官方財務文件中的這處微小拼寫錯誤完全是無意的。"
  },
  {
    "word": "banned",
    "pos": "v. banned/banned",
    "cn_def": "禁止",
    "en_def": "to officially forbid or prohibit someone from doing something",
    "sentence": "The owner {{BLANK}} customers from bringing outside food and drinks into her restaurant.",
    "cn": "老闆禁止顧客將外食和飲料帶入她的餐廳。"
  },
  {
    "word": "ban",
    "pos": "n.",
    "cn_def": "禁令",
    "en_def": "an official order that forbids something from being done or used",
    "sentence": "Smokers want the government to lift the strict {{BLANK}} on smoking in public places.",
    "cn": "吸菸者希望政府解除在公共場所吸菸的嚴格禁令。"
  },
  {
    "word": "lift a ban",
    "pos": "phr.",
    "cn_def": "解除禁令",
    "en_def": "to officially end a law, rule, or restriction that prevents people from doing something",
    "sentence": "The central government finally decided to {{BLANK}} on international travel after the severe inflation stabilized.",
    "cn": "中央政府在嚴重的通膨穩定後，終於決定解除對國際旅遊的禁令。"
  },
  {
    "word": "initiated",
    "pos": "v.",
    "cn_def": "開始；發起；創始",
    "en_def": "to cause a process or action to begin officially or formally",
    "sentence": "The tax authorities {{BLANK}} a thorough investigation of the electronics manufacturing company.",
    "cn": "稅務機關對這家電子製造公司展開了徹底的調查。"
  },
  {
    "word": "initiative",
    "pos": "n.",
    "cn_def": "倡議；主動性",
    "en_def": "the ability to assess and start things independently; a new plan",
    "sentence": "The community group launched a new {{BLANK}} to reduce plastic waste in local parks.",
    "cn": "該社區團體發起了一項全新倡議，以減少當地公園的塑膠垃圾。"
  },
  {
    "word": "take the initiative",
    "pos": "phr.",
    "cn_def": "採取主動；帶頭",
    "en_def": "to be the first person to take action or make a decision before others do, showing active leadership",
    "sentence": "An ambitious intern should always {{BLANK}} to learn customizable software frameworks without being explicitly told.",
    "cn": "一名有抱負的實習生應該總是採取主動，在沒有被明確告知的情況下學習客製化的軟體架構。"
  },
  {
    "word": "inspected",
    "pos": "v.",
    "cn_def": "檢查；視察",
    "en_def": "to look at something carefully, especially to check its quality or safety",
    "sentence": "The professional chef carefully {{BLANK}} each red apple for soft spots before buying them.",
    "cn": "這位專業主廚在購買之前，仔細檢查了每顆紅蘋果是否有軟爛的部位。"
  },
  {
    "word": "inspection",
    "pos": "n.",
    "cn_def": "檢查；視察",
    "en_def": "an official visit to check that rules are being obeyed or safety is adequate",
    "sentence": "Government officials conducted a routine {{BLANK}} of the factory to ensure worker safety.",
    "cn": "政府官員對工廠進行了例行檢查，以確保工人的安全。"
  },
  {
    "word": "inspector",
    "pos": "n.",
    "cn_def": "檢查員；督學",
    "en_def": "an official whose job is to check that regulations are being followed correctly",
    "sentence": "The health {{BLANK}} ordered the restaurant to close temporarily due to poor hygiene conditions.",
    "cn": "由於衛生條件差，衛生檢查員下令該餐廳暫時停業。"
  },
  {
    "word": "reflect",
    "pos": "v.",
    "cn_def": "反映；反射；映射",
    "en_def": "to throw back heat, light, or sound without absorbing it; to show or manifest",
    "sentence": "The many errors in your report {{BLANK}} your lack of care for what you do.",
    "cn": "你報告中的諸多錯誤反映了你對自己所做的事情缺乏細心。"
  },
  {
    "word": "reflect on",
    "pos": "phr.",
    "cn_def": "認真思考；反省",
    "en_def": "to think deeply and carefully about a past experience or decision",
    "sentence": "This is an important career decision, so you should {{BLANK}} it very carefully.",
    "cn": "這是一個重要的職業決定，因此你應該非常認真地對此進行思考。"
  },
  {
    "word": "reflection",
    "pos": "n.",
    "cn_def": "倒影；反射",
    "en_def": "an image seen in a mirror or shiny surface, or deep thought",
    "sentence": "The young girl stood quietly by the peaceful lake, looking at her clear {{BLANK}} in the water.",
    "cn": "年輕女孩靜靜地站在平靜的湖邊，看著水面中自己清晰的倒影。"
  },
  {
    "word": "reflection",
    "pos": "n.",
    "cn_def": "反思；深思；反射",
    "en_def": "serious thought or consideration about past events, experiences, or one's own behavior",
    "sentence": "Writing a personal journal regularly provides a valuable opportunity for deep self-{{BLANK}} and emotional balance.",
    "cn": "定期寫個人日記為深刻的自我反思與情緒平衡提供了珍貴的機會。"
  },
  {
    "word": "instituted",
    "pos": "v.",
    "cn_def": "制定；設立",
    "en_def": "to introduce or establish a new system, regulation, or official rule",
    "sentence": "The government {{BLANK}} new traffic regulations for foreign delivery workers yesterday.",
    "cn": "政府昨天為外國外送人員制定了新的交通法規。"
  },
  {
    "word": "institute",
    "pos": "n.",
    "cn_def": "學院；研究所",
    "en_def": "an organization having a particular purpose, especially one involved with science",
    "sentence": "The private research {{BLANK}} is known worldwide for its pioneering cancer medical research.",
    "cn": "這家私人研究所以其開創性的癌症醫學研究而聞名於世。"
  },
  {
    "word": "institution",
    "pos": "n.",
    "cn_def": "機構；制度",
    "en_def": "a large important organization such as a university, bank, or hospital",
    "sentence": "A university is an educational {{BLANK}} that provides high academic standards for its students.",
    "cn": "大學是一家為學生提供高學術標準的教育機構。"
  },
  {
    "word": "livestock",
    "pos": "n.",
    "cn_def": "家畜",
    "en_def": "farm animals regarded as an asset or kept for commercial profit",
    "sentence": "My hard-working aunt raises several types of {{BLANK}} on her farm, including cows and sheep.",
    "cn": "我勤勞的阿姨在她的農場裡飼養了幾種家畜，包括牛和羊。"
  },
  {
    "word": "shepherd",
    "pos": "n.",
    "cn_def": "牧羊人",
    "en_def": "a person whose professional job is to tend, herd, guard, and care for flocks of sheep",
    "sentence": "The dedicated {{BLANK}} stayed awake all night to protect his vulnerable flock from wild wolves near the mountain crater.",
    "cn": "這位敬業的牧羊人整晚保持清醒，以保護他脆弱的羊群免受山地隕石坑附近野狼的侵害。"
  },
  {
    "word": "ranch",
    "pos": "n.",
    "cn_def": "農場；大牧場",
    "en_def": "a very large farm, especially in North America, where cattle or other animals are bred and raised",
    "sentence": "The wealthy businessman decided to purchase a historic {{BLANK}} in Texas to raise high-quality cattle for additional revenue.",
    "cn": "這位富有的 businessman 決定在德州購買一座歷史悠久的農場，以飼養高品質的牛隻來賺取額外的營收。"
  },
  {
    "word": "corporate",
    "pos": "adj.",
    "cn_def": "公司的；法人的；共同的",
    "en_def": "relating to a large company or business group, or shared by all members of a group",
    "sentence": "The executive board organized a rigorous {{BLANK}} training seminar to boost the working efficiency of the engineering staff.",
    "cn": "執行董事會組織了一場嚴格的公司培訓研討會，以提高工程人員的工作效率。"
  },
  {
    "word": "corporation",
    "pos": "n.",
    "cn_def": "大公司；集團公司；法人",
    "en_def": "a large company or a group of companies authorized to act as a single entity",
    "sentence": "The prominent technology {{BLANK}} decided to invest massive resources into developing an automated data security framework.",
    "cn": "這家著名的科技大公司決定投入巨大資源來開發自動化資料安全架構。"
  },
  {
    "word": "cooperate",
    "pos": "v.",
    "cn_def": "合作",
    "en_def": "to work together with another person or group to achieve a goal",
    "sentence": "Local citizens were urged to {{BLANK}} with the police to catch the dangerous bank thief.",
    "cn": "當局敦促當地公民與警方合作，以抓捕危險的銀行竊賊。"
  },
  {
    "word": "cooperation",
    "pos": "n.",
    "cn_def": "合作",
    "en_def": "the process of working together to the same end or for a shared purpose",
    "sentence": "The project succeeded thanks to the close {{BLANK}} between the two research teams.",
    "cn": "由於兩個研究團隊之間的密切合作，這項計畫成功了。"
  },
  {
    "word": "cooperative",
    "pos": "adj.",
    "cn_def": "合作的；樂意配合的",
    "en_def": "willing to help or do what is asked, or involving mutual cooperation",
    "sentence": "The suspect was surprisingly {{BLANK}} during the interview and answered all the detective's questions.",
    "cn": "嫌疑人在接受偵訊時出人意料地配合，回答了偵探所有的問題。"
  },
  {
    "word": "mission",
    "pos": "n.",
    "cn_def": "任務；使命",
    "en_def": "an important assignment given to a person or group, typically involving travel",
    "sentence": "The core {{BLANK}} of this non-profit group is to help poor people plant gardens in the city.",
    "cn": "這個非營利組織的核心使命是幫助城市裡的窮人種植花園。"
  },
  {
    "word": "tempted",
    "pos": "v.",
    "cn_def": "誘惑；引誘",
    "en_def": "to entice or try to invite someone to do something, especially something wrong",
    "sentence": "Jerry {{BLANK}} the small cat down from the tall tree with a piece of fresh fish.",
    "cn": "傑瑞用一片新鮮的魚引誘那隻小貓從高高的樹上下來。"
  },
  {
    "word": "tempted to",
    "pos": "phr.",
    "cn_def": "很想做...；受誘惑去做...",
    "en_def": "to feel a strong desire to do something, especially something unwise",
    "sentence": "Peter was {{BLANK}} eat another large bowl of chocolate ice cream, but he was too full.",
    "cn": "彼得變得很想再吃一大碗巧克力冰淇淋，但他實在太飽了。"
  },
  {
    "word": "tempting",
    "pos": "adj.",
    "cn_def": "誘人的",
    "en_def": "attractive or appealing, causing a strong desire to have or do something",
    "sentence": "The tech company offered him a very {{BLANK}} job with a substantial monthly salary and bonuses.",
    "cn": "這家科技公司為他提供了一份非常誘人的工作，並伴隨著豐厚的月薪與獎金。"
  },
  {
    "word": "temptation",
    "pos": "n.",
    "cn_def": "誘惑",
    "en_def": "the desire to do something, especially something wrong or unwise",
    "sentence": "When you are trying to stick to a strict diet, sweets are a major {{BLANK}} to avoid.",
    "cn": "當你試圖堅持嚴格的飲食習慣時，甜食是一個需要避免的主要誘惑。"
  },
  {
    "word": "guidelines",
    "pos": "n.",
    "cn_def": "指導方針；準則",
    "en_def": "a general rule, principle, or piece of advice that guides behavior",
    "sentence": "Please complete the official application form carefully according to the {{BLANK}} provided below.",
    "cn": "請根據下面提供的指導方針，仔細填寫官方申請表。"
  },
  {
    "word": "gobbled",
    "pos": "v.",
    "cn_def": "狼吞虎嚥",
    "en_def": "to eat something hurriedly and noisily, like an aggressive animal",
    "sentence": "The hungry dog {{BLANK}} up all of the delicious meat that had fallen to the kitchen floor.",
    "cn": "飢餓的狗狼吞虎嚥地吃光了掉到廚房地板上的所有美味肉塊。"
  },
  {
    "word": "leftover",
    "pos": "n. adj.",
    "cn_def": "剩菜剩飯",
    "en_def": "food remaining uneaten at the end of a meal, kept for future use",
    "sentence": "We stored the {{BLANK}} chicken soup in the refrigerator so we could heat it up for dinner tomorrow.",
    "cn": "我們將剩下來的雞湯存放在冰箱裡，這樣明天晚餐就可以加熱來喝。"
  },
  {
    "word": "doggy bag",
    "pos": "n.",
    "cn_def": "打包袋（餐廳剩菜用）",
    "en_def": "a bag or container used to take remaining food home from a restaurant",
    "sentence": "She asked the polite waiter for a {{BLANK}} to take the leftover pizza home to her kids.",
    "cn": "她向禮貌的服務生要了一個打包袋，以便把剩下來的披薩帶回家給她的孩子們。"
  }
];

const MCQS = [
  {
    "q": "Please do not ______ to contact our customer service department if you have any questions.",
    "options": [
      "discarded",
      "hesitate",
      "issued",
      "cooperate"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "There was a noticeable moment of ______ before the nervous woman finally said, \"I do.\"",
    "options": [
      "hesitation",
      "inspection",
      "ranch",
      "inspector"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The young boy was ______ about jumping into the deep swimming pool without his life jacket.",
    "options": [
      "considerable",
      "leftover",
      "cooperative",
      "hesitant"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The man ______ most of the old, broken furniture that was left in his new apartment.",
    "options": [
      "excludes",
      "inspected",
      "discarded",
      "issued"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "It is time to ______ those old magazines that have been gathering dust in the corner.",
    "options": [
      "reflect on",
      "get rid of",
      "a ton of",
      "lift a ban"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Politicians should pay more attention to environmental ______ like global warming and pollution.",
    "options": [
      "heap",
      "cooperation",
      "reflection",
      "issues"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Readers said that ______ of the fashion magazine have been much more interesting.",
    "options": [
      "recent issues",
      "tempted to",
      "intend",
      "a ton of"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The major drug company ______ a strict warning for one of its new medical products.",
    "options": [
      "cooperate",
      "initiated",
      "issued",
      "hesitate"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "How many ______ does a mature African elephant usually weigh under normal circumstances?",
    "options": [
      "tons",
      "inspector",
      "guidelines",
      "hesitation"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "I have ______ work to do tonight, so I cannot go to dinner with you.",
    "options": [
      "emit",
      "a ton of",
      "recent issues",
      "tempted to"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "A messy ______ of dirty clothes sat on the wooden floor of the teenager's room.",
    "options": [
      "initiative",
      "economy",
      "heap",
      "inspection"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The children ______ their bags and heavy coats on benches and ran toward the playground.",
    "options": [
      "reflect",
      "issued",
      "tempted",
      "heaped"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Doris is trying to stick to a new diet that ______ foods containing processed sugar.",
    "options": [
      "banned",
      "initiated",
      "excludes",
      "gobbled"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The strict ______ of foreign vehicles from downtown residential streets reduced traffic congestion.",
    "options": [
      "exclusion",
      "guidelines",
      "inspector",
      "ranch"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The luxury fashion resort hosted an ______ party for its most creditworthy VIP customers.",
    "options": [
      "substantial",
      "corporate",
      "hesitant",
      "exclusive"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Maria spends a ______ amount of her free time each week reading classic English novels.",
    "options": [
      "unintentional",
      "substantial",
      "cooperative",
      "exclusive"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The international tech firm made a ______ profit after launching its automated platform.",
    "options": [
      "leftover",
      "exclusive",
      "considerable",
      "unintentional"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The historic city could benefit ______ from the creation of more local tourist attractions.",
    "options": [
      "tempting",
      "economically",
      "banned",
      "gobbled"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The prime minister's ______ advisors are searching for ways to minimize the inflation rate.",
    "options": [
      "economic",
      "leftover",
      "hesitant",
      "substantial"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The global ______ is facing severe challenges due to recent trade restriction policies.",
    "options": [
      "corporation",
      "initiative",
      "intention",
      "economy"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Active volcanoes ______ large amounts of toxic gas and grey ash into the atmosphere.",
    "options": [
      "emit",
      "intend",
      "take the initiative",
      "doggy bag"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Riding a bicycle and walking to work can help reduce carbon ______ in big cities.",
    "options": [
      "heap",
      "emissions",
      "guidelines",
      "issues"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "What do you ______ to do after you graduate from this prestigious university next year?",
    "options": [
      "tempted to",
      "emit",
      "intend",
      "lift a ban"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "He joined the local environmental campaign with the clear ______ of protecting wildlife.",
    "options": [
      "corporation",
      "ban",
      "hesitation",
      "intention"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The soccer player was heavily penalized for ______ tripping his opponent during the match.",
    "options": [
      "exclusive",
      "intentionally",
      "economic",
      "leftover"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The minor spelling mistake in the official financial document was completely ______.",
    "options": [
      "leftover",
      "corporate",
      "tempting",
      "unintentional"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The owner ______ customers from bringing outside food and drinks into her restaurant.",
    "options": [
      "banned",
      "gobbled",
      "heaped",
      "cooperate"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Smokers want the government to lift the strict ______ on smoking in public places.",
    "options": [
      "ranch",
      "reflection",
      "ban",
      "exclusion"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The central government finally decided to ______ on international travel after the severe inflation stabilized.",
    "options": [
      "emit",
      "doggy bag",
      "take the initiative",
      "lift a ban"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The tax authorities ______ a thorough investigation of the electronics manufacturing company.",
    "options": [
      "heaped",
      "initiated",
      "inspected",
      "excludes"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The community group launched a new ______ to reduce plastic waste in local parks.",
    "options": [
      "initiative",
      "inspection",
      "institution",
      "guidelines"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "An ambitious intern should always ______ to learn customizable software frameworks without being explicitly told.",
    "options": [
      "reflect on",
      "intend",
      "take the initiative",
      "emit"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The professional chef carefully ______ each red apple for soft spots before buying them.",
    "options": [
      "hesitate",
      "instituted",
      "banned",
      "inspected"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "Government officials conducted a routine ______ of the factory to ensure worker safety.",
    "options": [
      "mission",
      "livestock",
      "inspection",
      "institution"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The health ______ ordered the restaurant to close temporarily due to poor hygiene conditions.",
    "options": [
      "shepherd",
      "inspector",
      "issues",
      "institute"
    ],
    "answer": 1,
    "vocabIndex": 34
  },
  {
    "q": "The many errors in your report ______ your lack of care for what you do.",
    "options": [
      "reflect",
      "tempted",
      "banned",
      "inspected"
    ],
    "answer": 0,
    "vocabIndex": 35
  },
  {
    "q": "This is an important career decision, so you should ______ it very carefully.",
    "options": [
      "get rid of",
      "tempted to",
      "reflect on",
      "take the initiative"
    ],
    "answer": 2,
    "vocabIndex": 36
  },
  {
    "q": "The young girl stood quietly by the peaceful lake, looking at her clear ______ in the water.",
    "options": [
      "intention",
      "hesitation",
      "institute",
      "reflection"
    ],
    "answer": 3,
    "vocabIndex": 37
  },
  {
    "q": "Writing a personal journal regularly provides a valuable opportunity for deep self-______ and emotional balance.",
    "options": [
      "inspection",
      "reflection",
      "mission",
      "shepherd"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "The government ______ new traffic regulations for foreign delivery workers yesterday.",
    "options": [
      "instituted",
      "banned",
      "excludes",
      "tempted"
    ],
    "answer": 0,
    "vocabIndex": 39
  },
  {
    "q": "The private research ______ is known worldwide for its pioneering cancer medical research.",
    "options": [
      "ranch",
      "institute",
      "inspection",
      "shepherd"
    ],
    "answer": 1,
    "vocabIndex": 40
  },
  {
    "q": "A university is an educational ______ that provides high academic standards for its students.",
    "options": [
      "heap",
      "livestock",
      "tons",
      "institution"
    ],
    "answer": 3,
    "vocabIndex": 41
  },
  {
    "q": "My hard-working aunt raises several types of ______ on her farm, including cows and sheep.",
    "options": [
      "livestock",
      "mission",
      "inspector",
      "economy"
    ],
    "answer": 0,
    "vocabIndex": 42
  },
  {
    "q": "The dedicated ______ stayed awake all night to protect his vulnerable flock from wild wolves near the mountain crater.",
    "options": [
      "ranch",
      "livestock",
      "shepherd",
      "corporation"
    ],
    "answer": 2,
    "vocabIndex": 43
  },
  {
    "q": "The wealthy businessman decided to purchase a historic ______ in Texas to raise high-quality cattle for additional revenue.",
    "options": [
      "inspector",
      "initiative",
      "emissions",
      "ranch"
    ],
    "answer": 3,
    "vocabIndex": 44
  },
  {
    "q": "The executive board organized a rigorous ______ training seminar to boost the working efficiency of the engineering staff.",
    "options": [
      "hesitant",
      "unintentional",
      "corporate",
      "substantial"
    ],
    "answer": 2,
    "vocabIndex": 45
  },
  {
    "q": "The prominent technology ______ decided to invest massive resources into developing an automated data security framework.",
    "options": [
      "issues",
      "corporation",
      "tons",
      "guidelines"
    ],
    "answer": 1,
    "vocabIndex": 46
  },
  {
    "q": "Local citizens were urged to ______ with the police to catch the dangerous bank thief.",
    "options": [
      "cooperate",
      "excludes",
      "tempted",
      "hesitate"
    ],
    "answer": 0,
    "vocabIndex": 47
  },
  {
    "q": "The project succeeded thanks to the close ______ between the two research teams.",
    "options": [
      "issues",
      "temptation",
      "institute",
      "cooperation"
    ],
    "answer": 3,
    "vocabIndex": 48
  },
  {
    "q": "The suspect was surprisingly ______ during the interview and answered all the detective's questions.",
    "options": [
      "economic",
      "cooperative",
      "tempting",
      "hesitant"
    ],
    "answer": 1,
    "vocabIndex": 49
  },
  {
    "q": "The core ______ of this non-profit group is to help poor people plant gardens in the city.",
    "options": [
      "mission",
      "inspector",
      "issues",
      "hesitation"
    ],
    "answer": 0,
    "vocabIndex": 50
  },
  {
    "q": "Jerry ______ the small cat down from the tall tree with a piece of fresh fish.",
    "options": [
      "banned",
      "excludes",
      "tempted",
      "heaped"
    ],
    "answer": 2,
    "vocabIndex": 51
  },
  {
    "q": "Peter was ______ eat another large bowl of chocolate ice cream, but he was too full.",
    "options": [
      "recent issues",
      "tempted to",
      "reflect on",
      "get rid of"
    ],
    "answer": 1,
    "vocabIndex": 52
  },
  {
    "q": "The tech company offered him a very ______ job with a substantial monthly salary and bonuses.",
    "options": [
      "corporate",
      "cooperative",
      "hesitant",
      "tempting"
    ],
    "answer": 3,
    "vocabIndex": 53
  },
  {
    "q": "When you are trying to stick to a strict diet, sweets are a major ______ to avoid.",
    "options": [
      "temptation",
      "institute",
      "tons",
      "initiative"
    ],
    "answer": 0,
    "vocabIndex": 54
  },
  {
    "q": "Please complete the official application form carefully according to the ______ provided below.",
    "options": [
      "inspector",
      "shepherd",
      "guidelines",
      "tons"
    ],
    "answer": 2,
    "vocabIndex": 55
  },
  {
    "q": "The hungry dog ______ up all of the delicious meat that had fallen to the kitchen floor.",
    "options": [
      "excludes",
      "gobbled",
      "discarded",
      "reflect"
    ],
    "answer": 1,
    "vocabIndex": 56
  },
  {
    "q": "We stored the ______ chicken soup in the refrigerator so we could heat it up for dinner tomorrow.",
    "options": [
      "leftover",
      "economic",
      "exclusive",
      "tempting"
    ],
    "answer": 0,
    "vocabIndex": 57
  },
  {
    "q": "She asked the polite waiter for a ______ to take the leftover pizza home to her kids.",
    "options": [
      "recent issues",
      "tempted to",
      "doggy bag",
      "emit"
    ],
    "answer": 2,
    "vocabIndex": 58
  }
];

const LOOKUP = {
  "hesitate": {
    "pos": "v.",
    "en_def": "to pause before you do or say something, often because you are uncertain",
    "cn_def": "猶豫；遲疑",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to pause before you do or say something, often because you are uncertain",
        "cn_def": "猶豫；遲疑"
      }
    ]
  },
  "hesitation": {
    "pos": "n.",
    "en_def": "the act of pausing before doing something because you are uncertain or nervous",
    "cn_def": "猶豫；躊躇",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of pausing before doing something because you are uncertain or nervous",
        "cn_def": "猶豫；躊躇"
      }
    ]
  },
  "hesitant": {
    "pos": "adj.",
    "en_def": "tentative, unsure, or slow in acting or speaking due to uncertainty",
    "cn_def": "猶豫的；遲疑的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "tentative, unsure, or slow in acting or speaking due to uncertainty",
        "cn_def": "猶豫的；遲疑的"
      }
    ]
  },
  "discarded": {
    "pos": "v.",
    "en_def": "to throw something away because it is useless, broken, or no longer wanted",
    "cn_def": "丟棄；拋棄",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to throw something away because it is useless, broken, or no longer wanted",
        "cn_def": "丟棄；拋棄"
      }
    ]
  },
  "discard": {
    "pos": "v.",
    "en_def": "to throw something away because it is useless, broken, or no longer wanted",
    "cn_def": "丟棄；拋棄",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to throw something away because it is useless, broken, or no longer wanted",
        "cn_def": "丟棄；拋棄"
      }
    ]
  },
  "get rid of": {
    "pos": "phr.",
    "en_def": "to throw away something that you no longer need by putting it in the trash",
    "cn_def": "扔掉；拋棄（等同於 discard）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to throw away something that you no longer need by putting it in the trash",
        "cn_def": "扔掉；拋棄（等同於 discard）"
      }
    ]
  },
  "issue": {
    "pos": "n.",
    "en_def": "an important topic or problem for debate; a particular edition of a magazine",
    "cn_def": "議題；（刊物的）期號",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an important topic or problem for debate; a particular edition of a magazine",
        "cn_def": "議題；（刊物的）期號"
      },
      {
        "pos": "v.",
        "en_def": "to officially produce, give out, or publish something for the public",
        "cn_def": "發行；發布；核發"
      }
    ]
  },
  "issues": {
    "pos": "n.",
    "en_def": "an important topic or problem for debate; a particular edition of a magazine",
    "cn_def": "議題；（刊物的）期號",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an important topic or problem for debate; a particular edition of a magazine",
        "cn_def": "議題；（刊物的）期號"
      }
    ]
  },
  "recent issue": {
    "pos": "n.",
    "en_def": "a copy of a magazine or newspaper published not long ago",
    "cn_def": "近期刊物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a copy of a magazine or newspaper published not long ago",
        "cn_def": "近期刊物"
      }
    ]
  },
  "recent issues": {
    "pos": "n.",
    "en_def": "a copy of a magazine or newspaper published not long ago",
    "cn_def": "近期刊物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a copy of a magazine or newspaper published not long ago",
        "cn_def": "近期刊物"
      }
    ]
  },
  "issued": {
    "pos": "v.",
    "en_def": "to officially produce, give out, or publish something for the public",
    "cn_def": "發行；發布；核發",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to officially produce, give out, or publish something for the public",
        "cn_def": "發行；發布；核發"
      }
    ]
  },
  "ton": {
    "pos": "n.",
    "en_def": "a unit of weight equal to 1,000 kilograms; a very large amount",
    "cn_def": "噸；大量",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a unit of weight equal to 1,000 kilograms; a very large amount",
        "cn_def": "噸；大量"
      }
    ]
  },
  "tons": {
    "pos": "n.",
    "en_def": "a unit of weight equal to 1,000 kilograms; a very large amount",
    "cn_def": "噸；大量",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a unit of weight equal to 1,000 kilograms; a very large amount",
        "cn_def": "噸；大量"
      }
    ]
  },
  "a ton of": {
    "pos": "phr.",
    "en_def": "a very large quantity or amount of people, things, or work",
    "cn_def": "大量的...；許多...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a very large quantity or amount of people, things, or work",
        "cn_def": "大量的...；許多..."
      }
    ]
  },
  "a ton of / tons of": {
    "pos": "phr.",
    "en_def": "a very large quantity or amount of people, things, or work",
    "cn_def": "大量的...；許多...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a very large quantity or amount of people, things, or work",
        "cn_def": "大量的...；許多..."
      }
    ]
  },
  "heap": {
    "pos": "n.",
    "en_def": "an untidy collection of objects placed on top of each other",
    "cn_def": "一堆",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an untidy collection of objects placed on top of each other",
        "cn_def": "一堆"
      },
      {
        "pos": "v.",
        "en_def": "to put things into an untidy pile, or to give someone a lot of praise",
        "cn_def": "堆積；大量給予"
      }
    ]
  },
  "heaped": {
    "pos": "v.",
    "en_def": "to put things into an untidy pile, or to give someone a lot of praise",
    "cn_def": "堆積；大量給予",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to put things into an untidy pile, or to give someone a lot of praise",
        "cn_def": "堆積；大量給予"
      }
    ]
  },
  "exclude": {
    "pos": "v.",
    "en_def": "to deliberately prevent someone or something from entering a place or group",
    "cn_def": "排除；不包括",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to deliberately prevent someone or something from entering a place or group",
        "cn_def": "排除；不包括"
      }
    ]
  },
  "excludes": {
    "pos": "v.",
    "en_def": "to deliberately prevent someone or something from entering a place or group",
    "cn_def": "排除；不包括",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to deliberately prevent someone or something from entering a place or group",
        "cn_def": "排除；不包括"
      }
    ]
  },
  "exclusion": {
    "pos": "n.",
    "en_def": "the act of officially excluding someone or something from a place or group",
    "cn_def": "排除；排斥",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of officially excluding someone or something from a place or group",
        "cn_def": "排除；排斥"
      }
    ]
  },
  "exclusive": {
    "pos": "adj.",
    "en_def": "limited to a single choice person or group, or expensive and high-quality",
    "cn_def": "獨家的；專屬的高級",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "limited to a single choice person or group, or expensive and high-quality",
        "cn_def": "獨家的；專屬的高級"
      }
    ]
  },
  "substantial": {
    "pos": "adj.",
    "en_def": "large in size, value, amount, or central importance",
    "cn_def": "大量的；實質的；重大的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "large in size, value, amount, or central importance",
        "cn_def": "大量的；實質的；重大的"
      }
    ]
  },
  "considerable": {
    "pos": "adj.",
    "en_def": "large or important enough to have a noticeable effect or to be noticed",
    "cn_def": "相當大/多的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "large or important enough to have a noticeable effect or to be noticed",
        "cn_def": "相當大/多的"
      }
    ]
  },
  "economically": {
    "pos": "adv.",
    "en_def": "in a way that relates to the economy, or in a way that saves money",
    "cn_def": "經濟上；節約地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that relates to the economy, or in a way that saves money",
        "cn_def": "經濟上；節約地"
      }
    ]
  },
  "economic": {
    "pos": "adj.",
    "en_def": "relating to the trade, industry, and money management of a country",
    "cn_def": "經濟的；經濟學的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to the trade, industry, and money management of a country",
        "cn_def": "經濟的；經濟學的"
      }
    ]
  },
  "economy": {
    "pos": "n.",
    "en_def": "the state of a country or region in terms of the production of goods",
    "cn_def": "經濟；節約",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of a country or region in terms of the production of goods",
        "cn_def": "經濟；節約"
      }
    ]
  },
  "emit": {
    "pos": "v.",
    "en_def": "to send out a beam of light, clean heat, loud sound, or dangerous gas",
    "cn_def": "排放；發出",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to send out a beam of light, clean heat, loud sound, or dangerous gas",
        "cn_def": "排放；發出"
      }
    ]
  },
  "emission": {
    "pos": "n.",
    "en_def": "the production and discharge of something, especially gas or radiation",
    "cn_def": "排放；排放物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the production and discharge of something, especially gas or radiation",
        "cn_def": "排放；排放物"
      }
    ]
  },
  "emissions": {
    "pos": "n.",
    "en_def": "the production and discharge of something, especially gas or radiation",
    "cn_def": "排放；排放物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the production and discharge of something, especially gas or radiation",
        "cn_def": "排放；排放物"
      }
    ]
  },
  "intend to v": {
    "pos": "v.",
    "en_def": "to have a plan or purpose in mind when performing an action",
    "cn_def": "打算；企圖",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to have a plan or purpose in mind when performing an action",
        "cn_def": "打算；企圖"
      }
    ]
  },
  "intend": {
    "pos": "v.",
    "en_def": "to have a plan or purpose in mind when performing an action",
    "cn_def": "打算；企圖",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to have a plan or purpose in mind when performing an action",
        "cn_def": "打算；企圖"
      }
    ]
  },
  "intention": {
    "pos": "n.",
    "en_def": "an aim, purpose, or specific plan that guides someone's behavior",
    "cn_def": "意圖；打算",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an aim, purpose, or specific plan that guides someone's behavior",
        "cn_def": "意圖；打算"
      }
    ]
  },
  "intentionally": {
    "pos": "adv.",
    "en_def": "deliberately; done on purpose rather than by an accident",
    "cn_def": "故意地；有意地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "deliberately; done on purpose rather than by an accident",
        "cn_def": "故意地；有意地"
      }
    ]
  },
  "unintentional": {
    "pos": "adj.",
    "en_def": "accidental; not done on purpose or with a specific plan",
    "cn_def": "無意的；非故意的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "accidental; not done on purpose or with a specific plan",
        "cn_def": "無意的；非故意的"
      }
    ]
  },
  "ban...from...": {
    "pos": "v. banned/banned",
    "en_def": "to officially forbid or prohibit someone from doing something",
    "cn_def": "禁止",
    "combined": [
      {
        "pos": "v. banned/banned",
        "en_def": "to officially forbid or prohibit someone from doing something",
        "cn_def": "禁止"
      }
    ]
  },
  "banned": {
    "pos": "v. banned/banned",
    "en_def": "to officially forbid or prohibit someone from doing something",
    "cn_def": "禁止",
    "combined": [
      {
        "pos": "v. banned/banned",
        "en_def": "to officially forbid or prohibit someone from doing something",
        "cn_def": "禁止"
      }
    ]
  },
  "ban": {
    "pos": "n.",
    "en_def": "an official order that forbids something from being done or used",
    "cn_def": "禁令",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an official order that forbids something from being done or used",
        "cn_def": "禁令"
      }
    ]
  },
  "lift a ban": {
    "pos": "phr.",
    "en_def": "to officially end a law, rule, or restriction that prevents people from doing something",
    "cn_def": "解除禁令",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to officially end a law, rule, or restriction that prevents people from doing something",
        "cn_def": "解除禁令"
      }
    ]
  },
  "initiate": {
    "pos": "v.",
    "en_def": "to cause a process or action to begin officially or formally",
    "cn_def": "開始；發起；創始",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause a process or action to begin officially or formally",
        "cn_def": "開始；發起；創始"
      }
    ]
  },
  "initiated": {
    "pos": "v.",
    "en_def": "to cause a process or action to begin officially or formally",
    "cn_def": "開始；發起；創始",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause a process or action to begin officially or formally",
        "cn_def": "開始；發起；創始"
      }
    ]
  },
  "initiative": {
    "pos": "n.",
    "en_def": "the ability to assess and start things independently; a new plan",
    "cn_def": "倡議；主動性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability to assess and start things independently; a new plan",
        "cn_def": "倡議；主動性"
      }
    ]
  },
  "take the initiative": {
    "pos": "phr.",
    "en_def": "to be the first person to take action or make a decision before others do, showing active leadership",
    "cn_def": "採取主動；帶頭",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be the first person to take action or make a decision before others do, showing active leadership",
        "cn_def": "採取主動；帶頭"
      }
    ]
  },
  "inspected": {
    "pos": "v.",
    "en_def": "to look at something carefully, especially to check its quality or safety",
    "cn_def": "檢查；視察",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to look at something carefully, especially to check its quality or safety",
        "cn_def": "檢查；視察"
      }
    ]
  },
  "inspect": {
    "pos": "v.",
    "en_def": "to look at something carefully, especially to check its quality or safety",
    "cn_def": "檢查；視察",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to look at something carefully, especially to check its quality or safety",
        "cn_def": "檢查；視察"
      }
    ]
  },
  "inspection": {
    "pos": "n.",
    "en_def": "an official visit to check that rules are being obeyed or safety is adequate",
    "cn_def": "檢查；視察",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an official visit to check that rules are being obeyed or safety is adequate",
        "cn_def": "檢查；視察"
      }
    ]
  },
  "inspector": {
    "pos": "n.",
    "en_def": "an official whose job is to check that regulations are being followed correctly",
    "cn_def": "檢查員；督學",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an official whose job is to check that regulations are being followed correctly",
        "cn_def": "檢查員；督學"
      }
    ]
  },
  "reflect": {
    "pos": "v.",
    "en_def": "to throw back heat, light, or sound without absorbing it; to show or manifest",
    "cn_def": "反映；反射；映射",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to throw back heat, light, or sound without absorbing it; to show or manifest",
        "cn_def": "反映；反射；映射"
      }
    ]
  },
  "reflect on / upon": {
    "pos": "phr.",
    "en_def": "to think deeply and carefully about a past experience or decision",
    "cn_def": "認真思考；反省",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to think deeply and carefully about a past experience or decision",
        "cn_def": "認真思考；反省"
      }
    ]
  },
  "reflect on": {
    "pos": "phr.",
    "en_def": "to think deeply and carefully about a past experience or decision",
    "cn_def": "認真思考；反省",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to think deeply and carefully about a past experience or decision",
        "cn_def": "認真思考；反省"
      }
    ]
  },
  "reflection": {
    "pos": "n.",
    "en_def": "an image seen in a mirror or shiny surface, or deep thought",
    "cn_def": "倒影；反射",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an image seen in a mirror or shiny surface, or deep thought",
        "cn_def": "倒影；反射"
      },
      {
        "pos": "n.",
        "en_def": "serious thought or consideration about past events, experiences, or one's own behavior",
        "cn_def": "反思；深思；反射"
      }
    ]
  },
  "instituted": {
    "pos": "v.",
    "en_def": "to introduce or establish a new system, regulation, or official rule",
    "cn_def": "制定；設立",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to introduce or establish a new system, regulation, or official rule",
        "cn_def": "制定；設立"
      }
    ]
  },
  "institute": {
    "pos": "v.",
    "en_def": "to introduce or establish a new system, regulation, or official rule",
    "cn_def": "制定；設立",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to introduce or establish a new system, regulation, or official rule",
        "cn_def": "制定；設立"
      },
      {
        "pos": "n.",
        "en_def": "an organization having a particular purpose, especially one involved with science",
        "cn_def": "學院；研究所"
      }
    ]
  },
  "institution": {
    "pos": "n.",
    "en_def": "a large important organization such as a university, bank, or hospital",
    "cn_def": "機構；制度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large important organization such as a university, bank, or hospital",
        "cn_def": "機構；制度"
      }
    ]
  },
  "livestock": {
    "pos": "n.",
    "en_def": "farm animals regarded as an asset or kept for commercial profit",
    "cn_def": "家畜",
    "combined": [
      {
        "pos": "n.",
        "en_def": "farm animals regarded as an asset or kept for commercial profit",
        "cn_def": "家畜"
      }
    ]
  },
  "shepherd": {
    "pos": "n.",
    "en_def": "a person whose professional job is to tend, herd, guard, and care for flocks of sheep",
    "cn_def": "牧羊人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person whose professional job is to tend, herd, guard, and care for flocks of sheep",
        "cn_def": "牧羊人"
      }
    ]
  },
  "ranch": {
    "pos": "n.",
    "en_def": "a very large farm, especially in North America, where cattle or other animals are bred and raised",
    "cn_def": "農場；大牧場",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a very large farm, especially in North America, where cattle or other animals are bred and raised",
        "cn_def": "農場；大牧場"
      }
    ]
  },
  "corporate": {
    "pos": "adj.",
    "en_def": "relating to a large company or business group, or shared by all members of a group",
    "cn_def": "公司的；法人的；共同的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to a large company or business group, or shared by all members of a group",
        "cn_def": "公司的；法人的；共同的"
      }
    ]
  },
  "corporation": {
    "pos": "n.",
    "en_def": "a large company or a group of companies authorized to act as a single entity",
    "cn_def": "大公司；集團公司；法人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large company or a group of companies authorized to act as a single entity",
        "cn_def": "大公司；集團公司；法人"
      }
    ]
  },
  "cooperate": {
    "pos": "v.",
    "en_def": "to work together with another person or group to achieve a goal",
    "cn_def": "合作",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to work together with another person or group to achieve a goal",
        "cn_def": "合作"
      }
    ]
  },
  "cooperation": {
    "pos": "n.",
    "en_def": "the process of working together to the same end or for a shared purpose",
    "cn_def": "合作",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the process of working together to the same end or for a shared purpose",
        "cn_def": "合作"
      }
    ]
  },
  "cooperative": {
    "pos": "adj.",
    "en_def": "willing to help or do what is asked, or involving mutual cooperation",
    "cn_def": "合作的；樂意配合的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "willing to help or do what is asked, or involving mutual cooperation",
        "cn_def": "合作的；樂意配合的"
      }
    ]
  },
  "mission": {
    "pos": "n.",
    "en_def": "an important assignment given to a person or group, typically involving travel",
    "cn_def": "任務；使命",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an important assignment given to a person or group, typically involving travel",
        "cn_def": "任務；使命"
      }
    ]
  },
  "tempt": {
    "pos": "v.",
    "en_def": "to entice or try to invite someone to do something, especially something wrong",
    "cn_def": "誘惑；引誘",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to entice or try to invite someone to do something, especially something wrong",
        "cn_def": "誘惑；引誘"
      }
    ]
  },
  "tempted": {
    "pos": "v.",
    "en_def": "to entice or try to invite someone to do something, especially something wrong",
    "cn_def": "誘惑；引誘",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to entice or try to invite someone to do something, especially something wrong",
        "cn_def": "誘惑；引誘"
      }
    ]
  },
  "tempted to": {
    "pos": "phr.",
    "en_def": "to feel a strong desire to do something, especially something unwise",
    "cn_def": "很想做...；受誘惑去做...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to feel a strong desire to do something, especially something unwise",
        "cn_def": "很想做...；受誘惑去做..."
      }
    ]
  },
  "be tempted to": {
    "pos": "phr.",
    "en_def": "to feel a strong desire to do something, especially something unwise",
    "cn_def": "很想做...；受誘惑去做...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to feel a strong desire to do something, especially something unwise",
        "cn_def": "很想做...；受誘惑去做..."
      }
    ]
  },
  "tempting": {
    "pos": "adj.",
    "en_def": "attractive or appealing, causing a strong desire to have or do something",
    "cn_def": "誘人的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "attractive or appealing, causing a strong desire to have or do something",
        "cn_def": "誘人的"
      }
    ]
  },
  "temptation": {
    "pos": "n.",
    "en_def": "the desire to do something, especially something wrong or unwise",
    "cn_def": "誘惑",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the desire to do something, especially something wrong or unwise",
        "cn_def": "誘惑"
      }
    ]
  },
  "guidelines": {
    "pos": "n.",
    "en_def": "a general rule, principle, or piece of advice that guides behavior",
    "cn_def": "指導方針；準則",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a general rule, principle, or piece of advice that guides behavior",
        "cn_def": "指導方針；準則"
      }
    ]
  },
  "guideline": {
    "pos": "n.",
    "en_def": "a general rule, principle, or piece of advice that guides behavior",
    "cn_def": "指導方針；準則",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a general rule, principle, or piece of advice that guides behavior",
        "cn_def": "指導方針；準則"
      }
    ]
  },
  "gobbled": {
    "pos": "v.",
    "en_def": "to eat something hurriedly and noisily, like an aggressive animal",
    "cn_def": "狼吞虎嚥",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to eat something hurriedly and noisily, like an aggressive animal",
        "cn_def": "狼吞虎嚥"
      }
    ]
  },
  "gobble": {
    "pos": "v.",
    "en_def": "to eat something hurriedly and noisily, like an aggressive animal",
    "cn_def": "狼吞虎嚥",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to eat something hurriedly and noisily, like an aggressive animal",
        "cn_def": "狼吞虎嚥"
      }
    ]
  },
  "leftover": {
    "pos": "n. adj.",
    "en_def": "food remaining uneaten at the end of a meal, kept for future use",
    "cn_def": "剩菜剩飯",
    "combined": [
      {
        "pos": "n. adj.",
        "en_def": "food remaining uneaten at the end of a meal, kept for future use",
        "cn_def": "剩菜剩飯"
      }
    ]
  },
  "doggy bag": {
    "pos": "n.",
    "en_def": "a bag or container used to take remaining food home from a restaurant",
    "cn_def": "打包袋（餐廳剩菜用）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a bag or container used to take remaining food home from a restaurant",
        "cn_def": "打包袋（餐廳剩菜用）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
