// Unit 13 Quiz Data: magnificent – adulthood
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Advanced U13 - magnificent – adulthood",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "magnificent",
    "pos": "adj.",
    "cn_def": "壯麗的、宏偉的、極好的",
    "en_def": "extremely beautiful, elaborate, or impressive.",
    "sentence": "The view from the top of the mountain was absolutely {{BLANK}}, and no photograph could truly capture its beauty.",
    "cn": "山頂的景色絕對壯麗，沒有任何照片能真正捕捉到其美麗。"
  },
  {
    "word": "magnificence",
    "pos": "n.",
    "cn_def": "壯麗、宏偉、華麗",
    "en_def": "the quality of being grand, large, or beautiful.",
    "sentence": "Tourists were left speechless by the {{BLANK}} of the ancient palace, which had stood for over eight hundred years.",
    "cn": "遊客們被這座已矗立八百多年的古老宮殿的宏偉所震撼，說不出話來。"
  },
  {
    "word": "magnify",
    "pos": "v.",
    "cn_def": "放大、誇大",
    "en_def": "to make something look larger than it really is.",
    "sentence": "The microscope can {{BLANK}} objects up to a thousand times, allowing scientists to study tiny cells in detail.",
    "cn": "顯微鏡能將物體放大多達一千倍，讓科學家能詳細研究微小細胞。"
  },
  {
    "word": "magnitude",
    "pos": "n.",
    "cn_def": "巨大、重大、震級",
    "en_def": "the great size, scale, or importance of something.",
    "sentence": "The {{BLANK}} of the earthquake surprised everyone — it measured 7.2 on the Richter scale and was felt across the region.",
    "cn": "這場地震的震級讓所有人感到驚訝——它在芮氏規模達7.2，整個地區都有震感。"
  },
  {
    "word": "mystery",
    "pos": "n.",
    "cn_def": "神秘的事物、謎",
    "en_def": "something strange that cannot be explained or understood.",
    "sentence": "The disappearance of the old lighthouse keeper remains a complete {{BLANK}} that no one has been able to solve.",
    "cn": "老燈塔看守人的失蹤至今仍是一個完整的謎，沒有人能夠解開。"
  },
  {
    "word": "mysterious",
    "pos": "adj.",
    "cn_def": "神秘的、不可思議的",
    "en_def": "strange, unknown, or difficult to understand.",
    "sentence": "A {{BLANK}} package arrived at her door with no return address and no note explaining what it was or who sent it.",
    "cn": "一個神秘的包裹送到她門口，沒有回寄地址，也沒有說明它是什麼或是誰寄來的。"
  },
  {
    "word": "mysteriously",
    "pos": "adv.",
    "cn_def": "神秘地、不可思議地",
    "en_def": "in a way that is strange or secret.",
    "sentence": "The keys {{BLANK}} vanished from the table overnight, and nobody in the house could explain where they had gone.",
    "cn": "鑰匙神秘地在一夜之間從桌上消失了，家裡沒有人能解釋它們去了哪裡。"
  },
  {
    "word": "unusual",
    "pos": "adj.",
    "cn_def": "不尋常的、獨特的",
    "en_def": "different from what is normal or common; rare.",
    "sentence": "It is quite {{BLANK}} for it to snow in this part of Taiwan, so children were very excited when it happened last winter.",
    "cn": "在台灣這個地方下雪相當不尋常，所以去年冬天下雪時孩子們都非常興奮。"
  },
  {
    "word": "unusually",
    "pos": "adv.",
    "cn_def": "異常地、非常",
    "en_def": "in a way that is modern, rare, or remarkable.",
    "sentence": "The weather was {{BLANK}} warm for January, and many people went to the beach to enjoy the sunshine.",
    "cn": "對一月來說天氣異常溫暖，許多人去海灘享受陽光。"
  },
  {
    "word": "usual",
    "pos": "adj.",
    "cn_def": "通常的、慣常的",
    "en_def": "normal; happening in the regular way.",
    "sentence": "She arrived at work earlier than {{BLANK}} because she had an important presentation to prepare before the morning meeting.",
    "cn": "她比平常更早到達公司，因為她需要在早上的會議前準備一個重要的簡報。"
  },
  {
    "word": "unexpected",
    "pos": "adj.",
    "cn_def": "出乎意料的",
    "en_def": "surprising because you did not think it would happen.",
    "sentence": "The {{BLANK}} visit from her old university friend made her day, and they stayed up talking until almost midnight.",
    "cn": "老大學朋友的出乎意料造訪讓她喜出望外，他們聊天聊到將近午夜。"
  },
  {
    "word": "existence",
    "pos": "n.",
    "cn_def": "存在、生存",
    "en_def": "the state of being real or living in the world.",
    "sentence": "The discovery of the ancient ruins provided the first solid proof of the civilisation's {{BLANK}} over two thousand years ago.",
    "cn": "這些古代遺跡的發現提供了兩千多年前該文明存在的第一個確鑿證明。"
  },
  {
    "word": "exist",
    "pos": "v.",
    "cn_def": "存在、生存",
    "en_def": "to be real; to live or be found in a place.",
    "sentence": "Some scientists believe that life may {{BLANK}} on other planets, but no solid proof has been found yet.",
    "cn": "一些科學家相信其他星球上可能存在生命，但目前尚未找到確切的證明。"
  },
  {
    "word": "existent",
    "pos": "adj.",
    "cn_def": "現存的、存在的",
    "en_def": "currently real or existing right now.",
    "sentence": "The committee reviewed all {{BLANK}} policies before deciding which ones needed to be updated or removed entirely.",
    "cn": "委員會審查了所有現存的政策，然後決定哪些需要更新或完全廢除。"
  },
  {
    "word": "coexistence",
    "pos": "n.",
    "cn_def": "共存",
    "en_def": "living peacefully together at the same time.",
    "sentence": "The nature reserve promotes the {{BLANK}} of different wildlife species by protecting their habitats from human activity.",
    "cn": "這個自然保護區通過保護各種野生動物的棲息地免受人類活動影響，促進不同物種的共存。"
  },
  {
    "word": "came into existence",
    "pos": "phr.",
    "cn_def": "開始存在、成立",
    "en_def": "to begin to be real or start being made.",
    "sentence": "The organization {{BLANK}} in 1998, when a group of volunteers decided to help homeless youth in the city.",
    "cn": "這個組織於1998年成立，當時一群義工決定幫助城市中無家可歸的青少年。"
  },
  {
    "word": "live a quiet existence",
    "pos": "phr.",
    "cn_def": "過著清靜的生活",
    "en_def": "to spend your days in a peaceful, simple way.",
    "sentence": "After retiring from the busy city, he chose to {{BLANK}} in a small village near the mountains.",
    "cn": "從繁忙的城市退休後，他選擇在山區附近的一個小村莊過著清靜的生活。"
  },
  {
    "word": "curled",
    "pos": "adj.",
    "cn_def": "捲曲的",
    "en_def": "formed into a twisted, spiral, or curved shape.",
    "sentence": "The cat lay in a {{BLANK}} position at the end of the bed, fast asleep with its tail wrapped around its nose.",
    "cn": "貓蜷縮在床尾，熟睡著，尾巴繞在鼻子周圍。"
  },
  {
    "word": "curl",
    "pos": "v.",
    "cn_def": "使捲曲、蜷縮",
    "en_def": "to twist or bend into a curve or loop.",
    "sentence": "Her hair naturally tends to {{BLANK}} in humid weather, so she always keeps a small bottle of anti-frizz serum in her bag.",
    "cn": "在潮濕的天氣裡，她的頭髮自然地捲曲，所以她總是在包包裡放一小瓶防毛躁精華液。"
  },
  {
    "word": "curl up",
    "pos": "phr.",
    "cn_def": "蜷縮、身體抱成團",
    "en_def": "to sit or lie with your arms and legs close to you.",
    "sentence": "On cold winter evenings, she loves to {{BLANK}} on the sofa with a warm blanket and a cup of hot cocoa.",
    "cn": "在寒冷的冬夜，她喜歡蜷縮在沙發上，裹著溫暖的毯子，喝著一杯熱可可。"
  },
  {
    "word": "tiny",
    "pos": "adj.",
    "cn_def": "極小的、微小的",
    "en_def": "extremely small in size, amount, or scale.",
    "sentence": "A {{BLANK}} spider had built a beautiful web in the corner of the window, catching droplets of morning dew.",
    "cn": "一隻極小的蜘蛛在窗角織了一張美麗的網，捕捉著清晨的露珠。"
  },
  {
    "word": "micro",
    "pos": "adj.",
    "cn_def": "微型的、微觀的",
    "en_def": "completely small; relating to electronic chips.",
    "sentence": "The scientist used a {{BLANK}} camera to film the behaviour of insects underground without disturbing their natural habitat.",
    "cn": "科學家使用微型攝影機拍攝地下昆蟲的行為，而不打擾牠們的自然棲息地。"
  },
  {
    "word": "regularly",
    "pos": "adv.",
    "cn_def": "定期地、規律地、經常",
    "en_def": "happening often or at the same time intervals.",
    "sentence": "She visits her elderly grandmother {{BLANK}} every Sunday afternoon and always brings fresh flowers from the market.",
    "cn": "她每週日下午定期拜訪年邁的祖母，總是從市場帶去新鮮的花朵。"
  },
  {
    "word": "regular",
    "pos": "adj.",
    "cn_def": "規律的、定期的、普通的",
    "en_def": "happening or done often; following a fixed pattern.",
    "sentence": "Getting enough sleep and having {{BLANK}} meals are two of the most important habits for maintaining good health.",
    "cn": "充足的睡眠和規律的飲食是保持良好健康最重要的兩個習慣。"
  },
  {
    "word": "regulate",
    "pos": "v.",
    "cn_def": "管制、調整、調節",
    "en_def": "to control a process or speed with official rules.",
    "sentence": "The government introduced new laws to {{BLANK}} the use of social media platforms and protect users from harmful content.",
    "cn": "政府引入了新法律來管制社群媒體平台的使用，保護用戶免受有害內容的影響。"
  },
  {
    "word": "regulation",
    "pos": "n.",
    "cn_def": "規章、法規、管制",
    "en_def": "an official rule made by a government or firm.",
    "sentence": "The new food safety {{BLANK}} requires all restaurants to display hygiene scores on their front door for customers to see.",
    "cn": "新的食品安全法規要求所有餐廳在前門展示衛生評分，供顧客查看。"
  },
  {
    "word": "direction",
    "pos": "n.",
    "cn_def": "方向、方位",
    "en_def": "the way or path along which something moves.",
    "sentence": "The wind changed {{BLANK}} suddenly during the race, which made it much harder for the sailors to control their boats.",
    "cn": "比賽中風向突然改變，讓水手們更難控制他們的船隻。"
  },
  {
    "word": "directions",
    "pos": "n.",
    "cn_def": "指引、路線說明（常用複數）",
    "en_def": "instructions on how to get to a place or do a job.",
    "sentence": "She asked a local shopkeeper for {{BLANK}} to the nearest bus stop because her phone had run out of battery.",
    "cn": "她的手機沒電了，於是向當地店主詢問前往最近公車站的路線說明。"
  },
  {
    "word": "direct",
    "pos": "adj.",
    "cn_def": "直接的",
    "en_def": "straight; going from point to point with no stops.",
    "sentence": "The most {{BLANK}} route to the airport takes only twenty minutes, but it involves paying a toll on the expressway.",
    "cn": "前往機場最直接的路線只需二十分鐘，但需要在高速公路上繳費。"
  },
  {
    "word": "direct",
    "pos": "v.",
    "cn_def": "指引、導演、對準",
    "en_def": "to aim something at a target; to show the way.",
    "sentence": "The police officer stood in the middle of the intersection to {{BLANK}} traffic after the traffic lights stopped working.",
    "cn": "在交通燈故障後，警察站在十字路口中間指揮交通。"
  },
  {
    "word": "directly",
    "pos": "adv.",
    "cn_def": "直接地、立刻",
    "en_def": "honestly; without any stops or delayed waiting.",
    "sentence": "After the concert, she went {{BLANK}} home without stopping anywhere because she had an early flight the next morning.",
    "cn": "音樂會結束後，她直接回家，沒有在任何地方停留，因為第二天早上有早班機。"
  },
  {
    "word": "director",
    "pos": "n.",
    "cn_def": "經理、主管、導演",
    "en_def": "the manager of a company department or movie film.",
    "sentence": "The film {{BLANK}} spent three years developing the script before finally finding the right cast for each role.",
    "cn": "這位電影導演花了三年時間開發劇本，才最終為每個角色找到合適的演員。"
  },
  {
    "word": "balloons",
    "pos": "n.",
    "cn_def": "氣球",
    "en_def": "a small rubber bag that becomes large when filled with air.",
    "sentence": "The children decorated the room with colourful {{BLANK}} and streamers to celebrate their friend's birthday party.",
    "cn": "孩子們用彩色氣球和彩帶裝飾房間，慶祝朋友的生日派對。"
  },
  {
    "word": "ballooned",
    "pos": "v.",
    "cn_def": "激增、如氣球般膨脹",
    "en_def": "to quickly become very large or swell out.",
    "sentence": "The project's budget {{BLANK}} to twice its original amount after several unexpected delays and material cost increases.",
    "cn": "在幾次意外延誤和材料成本增加後，該項目的預算膨脹到原來金額的兩倍。"
  },
  {
    "word": "weave",
    "pos": "v.",
    "cn_def": "編織",
    "en_def": "to make cloth by crossing threads over and under each other.",
    "sentence": "The skilled craftwoman could {{BLANK}} a beautiful pattern into the fabric without even looking at what her hands were doing.",
    "cn": "這位技藝精湛的工匠甚至不需要看自己的手，就能將美麗的圖案編織進布料中。"
  },
  {
    "word": "weave strings into",
    "pos": "phr.",
    "cn_def": "將線編入…中",
    "en_def": "to twist colorful hair threads together into styles.",
    "sentence": "She learned how to {{BLANK}} her daughter's braids to create a traditional style.",
    "cn": "她學會了如何將彩色線條編入女兒的辮子中，創造出傳統風格。"
  },
  {
    "word": "weaver",
    "pos": "n.",
    "cn_def": "織布工、編織者",
    "en_def": "a craft person who specializes in making cloth garments.",
    "sentence": "The {{BLANK}} worked at a traditional wooden loom for hours each day, producing beautiful handmade scarves and shawls.",
    "cn": "這位織布工每天在傳統木製織布機上工作數小時，製作美麗的手工圍巾和披肩。"
  },
  {
    "word": "shot",
    "pos": "v.",
    "cn_def": "發射、射擊、投籃",
    "en_def": "to fire a bullet from a gun or kick a sports ball.",
    "sentence": "The basketball player {{BLANK}} the ball from the three-point line and it went straight through the hoop without touching the rim.",
    "cn": "籃球運動員從三分線投籃，球直接穿過籃框而沒有碰到框。"
  },
  {
    "word": "shoot",
    "pos": "v.",
    "cn_def": "拍攝、攝影",
    "en_def": "to film a scene or make a music video.",
    "sentence": "The director decided to {{BLANK}} the final scene at sunrise to capture the golden light reflecting off the ocean.",
    "cn": "導演決定在日出時拍攝最後一幕，捕捉金色陽光在海洋上的倒影。"
  },
  {
    "word": "shot",
    "pos": "v.",
    "cn_def": "衝過、飛馳而過",
    "en_def": "to move past someone very quickly and suddenly.",
    "sentence": "The sports car {{BLANK}} past the traffic lights so fast that nobody could even read the number plate on its bumper.",
    "cn": "那輛跑車以如此快的速度飛馳過交通燈，以至於沒有人能讀出車牌號碼。"
  },
  {
    "word": "shooting star",
    "pos": "phr.",
    "cn_def": "流星",
    "en_def": "a meteor that makes a bright line across the sky.",
    "sentence": "They lay on the grass and waited patiently until they finally saw a {{BLANK}} streak across the dark sky.",
    "cn": "他們躺在草地上耐心等待，直到終於看到一顆流星劃過黑暗的天空。"
  },
  {
    "word": "shoot out",
    "pos": "phr.",
    "cn_def": "噴出、射出",
    "en_def": "to suddenly explode or send fire lines out of a slot.",
    "sentence": "Sparks began to {{BLANK}} from the damaged electrical panel, so the technician cut the power immediately.",
    "cn": "受損的電氣面板開始噴出火花，技術人員立即切斷了電源。"
  },
  {
    "word": "shot up",
    "pos": "phr.",
    "cn_def": "暴漲、猛增",
    "en_def": "to rise or increase very fast in price or height.",
    "sentence": "The price of vegetables {{BLANK}} after the typhoon damaged most of the crops in the southern farming regions.",
    "cn": "颱風損壞了南部農業區大部分農作物後，蔬菜價格暴漲。"
  },
  {
    "word": "shot down",
    "pos": "phr.",
    "cn_def": "否決（提議等）、擊落",
    "en_def": "to reject a plan or suggestion completely.",
    "sentence": "Her creative proposal was {{BLANK}} by the manager without any explanation, which left her feeling very frustrated.",
    "cn": "她的創意提案被經理毫無解釋地否決，讓她感到非常沮喪。"
  },
  {
    "word": "shoot for",
    "pos": "phr.",
    "cn_def": "以…為目標、爭取",
    "en_def": "to set a major metric target as your top career goal.",
    "sentence": "The young athlete decided to {{BLANK}} a spot on the national team by training twice as hard as before.",
    "cn": "這位年輕運動員決定通過加倍努力訓練，以爭取國家隊的一個名額為目標。"
  },
  {
    "word": "force",
    "pos": "n.",
    "cn_def": "力量、暴力、軍隊",
    "en_def": "physical power, strength, or military soldiers group.",
    "sentence": "The {{BLANK}} of the storm was so powerful that it knocked down trees and damaged dozens of buildings across the city.",
    "cn": "暴風雨的力量如此強大，它推倒了樹木並損壞了城市各地數十棟建築物。"
  },
  {
    "word": "forced",
    "pos": "v.",
    "cn_def": "強迫、迫使",
    "en_def": "to make someone do something they do not want to do.",
    "sentence": "No one should be {{BLANK}} to work overtime without proper compensation, as it is both unfair and against the law.",
    "cn": "沒有人應該被強迫在沒有適當補償的情況下加班，因為這既不公平又違法。"
  },
  {
    "word": "forceful",
    "pos": "adj.",
    "cn_def": "有力的、強烈的、有說服力的",
    "en_def": "expressing opinions with huge energy or power.",
    "sentence": "The lawyer delivered a {{BLANK}} argument in court that convinced the jury and led to the defendant being found innocent.",
    "cn": "律師在法庭上提出了有力的論點，說服了陪審團，最終被告被裁定無罪。"
  },
  {
    "word": "enforce",
    "pos": "v.",
    "cn_def": "執行、實施（法律等）",
    "en_def": "to make sure that a law or rule is obeyed properly.",
    "sentence": "The school hired additional staff to {{BLANK}} the new mobile phone policy during lunch breaks and class time.",
    "cn": "學校聘請了額外的員工在午休和上課時間執行新的手機政策。"
  },
  {
    "word": "reinforce",
    "pos": "v.",
    "cn_def": "加強、加固、增援",
    "en_def": "to make a material structure or army group stronger.",
    "sentence": "The engineer recommended using steel beams to {{BLANK}} the old bridge so that it could safely carry heavier vehicles.",
    "cn": "工程師建議使用鋼梁加固舊橋，使其能夠安全地承載更重的車輛。"
  },
  {
    "word": "workforce",
    "pos": "n.",
    "cn_def": "勞動力、全體員工",
    "en_def": "all the available workers inside a country or plant.",
    "sentence": "The company invested in training to upskill its {{BLANK}} and prepare employees for the challenges of new technology.",
    "cn": "公司投資於培訓，以提升員工技能，讓全體員工為新技術的挑戰做好準備。"
  },
  {
    "word": "sales force",
    "pos": "phr.",
    "cn_def": "銷售團隊",
    "en_def": "the corporate department that sells goods directly.",
    "sentence": "The company expanded its {{BLANK}} by hiring twenty new representatives to cover the northern region of the country.",
    "cn": "公司通過聘請二十名新代表負責國家北部地區，擴大了其銷售團隊。"
  },
  {
    "word": "afterwards",
    "pos": "adv.",
    "cn_def": "之後、後來",
    "en_def": "at a later time; after something else has happened.",
    "sentence": "The ceremony lasted for two hours, and {{BLANK}} everyone was invited to the reception hall for food and drinks.",
    "cn": "典禮持續了兩個小時，之後每個人都被邀請到接待廳享用食物和飲料。"
  },
  {
    "word": "beforehand",
    "pos": "adv.",
    "cn_def": "預先、事先",
    "en_def": "earlier; before a specific event takes place.",
    "sentence": "Please make sure you read all the instructions {{BLANK}} so that you understand exactly what to do during the fire drill.",
    "cn": "請確保你事先閱讀所有指示，這樣你就能清楚地了解在消防演習中應該做什麼。"
  },
  {
    "word": "return",
    "pos": "v.",
    "cn_def": "返回、歸還",
    "en_def": "to come or go back to a place; to give an item back.",
    "sentence": "She promised to {{BLANK}} the library books before the deadline to avoid paying a late fee for each overdue day.",
    "cn": "她承諾在截止日期前歸還圖書館的書籍，以避免為每個逾期日支付罰款。"
  },
  {
    "word": "return",
    "pos": "n.",
    "cn_def": "返回、收益、利潤",
    "en_def": "the act of coming back to a spot or a profit value.",
    "sentence": "His {{BLANK}} to the stage after a three-year absence was met with a standing ovation from the delighted audience.",
    "cn": "他在三年缺席後重返舞台，受到欣喜若狂的觀眾起立鼓掌的歡迎。"
  },
  {
    "word": "in return",
    "pos": "phr.",
    "cn_def": "作為回報、作為交換",
    "en_def": "as a reaction, exchange, or reward for something.",
    "sentence": "She helped her neighbour with grocery shopping every week, and {{BLANK}}, he kept an eye on her apartment when she travelled.",
    "cn": "她每週幫助鄰居購物，作為回報，他在她旅行時幫忙看顧她的公寓。"
  },
  {
    "word": "difficulty",
    "pos": "n.",
    "cn_def": "困難、難題",
    "en_def": "a problem or a fact of being hard to complete.",
    "sentence": "She had great {{BLANK}} concentrating in the open office because of the constant noise from her colleagues nearby.",
    "cn": "她在開放式辦公室裡難以集中注意力，因為附近同事不斷發出的噪音。"
  },
  {
    "word": "difficult",
    "pos": "adj.",
    "cn_def": "困難的",
    "en_def": "tough to handle; tracking complex layers.",
    "sentence": "Learning to drive on the left side of the road was very {{BLANK}} for her at first, but she eventually got used to it.",
    "cn": "最初在左側車道開車對她來說非常困難，但她最終習慣了。"
  },
  {
    "word": "hardship",
    "pos": "n.",
    "cn_def": "艱苦、困苦",
    "en_def": "severe suffering or lacking basic life assets.",
    "sentence": "Despite years of {{BLANK}} and poverty, she never gave up her dream of becoming a doctor and helping her community.",
    "cn": "儘管多年艱苦和貧困，她從未放棄成為醫生並幫助社區的夢想。"
  },
  {
    "word": "adults",
    "pos": "n.",
    "cn_def": "成人",
    "en_def": "a person or animal that is fully grown up.",
    "sentence": "The programme is designed for {{BLANK}} who want to improve their literacy skills and return to education later in life.",
    "cn": "該計劃為希望提高識字技能並在以後的人生中重返教育的成人而設計。"
  },
  {
    "word": "adult",
    "pos": "adj.",
    "cn_def": "成年的、成熟的",
    "en_def": "fully developed or suitable only for grown ups.",
    "sentence": "The film carries an {{BLANK}} rating because it contains scenes of violence that are not suitable for younger viewers.",
    "cn": "這部電影帶有成人評級，因為它包含不適合年輕觀眾的暴力場景。"
  },
  {
    "word": "adulthood",
    "pos": "n.",
    "cn_def": "成年期",
    "en_def": "the period of time when you are a grown citizen.",
    "sentence": "The transition from childhood to {{BLANK}} can be challenging, especially when young people face big decisions about their future.",
    "cn": "從童年到成年期的轉變可能很具挑戰性，尤其是當年輕人面臨關於未來的重大決定時。"
  }
];

const MCQS = [
  {
    "q": "The view from the top of the mountain was absolutely ______, and no photograph could truly capture its beauty.",
    "options": [
      "unexpected",
      "magnificent",
      "micro",
      "regular"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Tourists were left speechless by the ______ of the ancient palace, which had stood for over eight hundred years.",
    "options": [
      "mystery",
      "return",
      "magnificence",
      "coexistence"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The microscope can ______ objects up to a thousand times, allowing scientists to study tiny cells in detail.",
    "options": [
      "magnify",
      "ballooned",
      "return",
      "direct"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The ______ of the earthquake surprised everyone — it measured 7.2 on the Richter scale and was felt across the region.",
    "options": [
      "mystery",
      "balloons",
      "adulthood",
      "magnitude"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The disappearance of the old lighthouse keeper remains a complete ______ that no one has been able to solve.",
    "options": [
      "mystery",
      "balloons",
      "adulthood",
      "weaver"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "A ______ package arrived at her door with no return address and no note explaining what it was or who sent it.",
    "options": [
      "micro",
      "forceful",
      "difficult",
      "mysterious"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The keys ______ vanished from the table overnight, and nobody in the house could explain where they had gone.",
    "options": [
      "afterwards",
      "mysteriously",
      "unusually",
      "beforehand"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "It is quite ______ for it to snow in this part of Taiwan, so children were very excited when it happened last winter.",
    "options": [
      "difficult",
      "existent",
      "unusual",
      "tiny"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The weather was ______ warm for January, and many people went to the beach to enjoy the sunshine.",
    "options": [
      "mysteriously",
      "unusually",
      "directly",
      "beforehand"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "She arrived at work earlier than ______ because she had an important presentation to prepare before the morning meeting.",
    "options": [
      "difficult",
      "regular",
      "usual",
      "direct"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The ______ visit from her old university friend made her day, and they stayed up talking until almost midnight.",
    "options": [
      "unexpected",
      "mysterious",
      "regular",
      "tiny"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The discovery of the ancient ruins provided the first solid proof of the civilisation's ______ over two thousand years ago.",
    "options": [
      "mystery",
      "coexistence",
      "workforce",
      "existence"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Some scientists believe that life may ______ on other planets, but no solid proof has been found yet.",
    "options": [
      "exist",
      "magnify",
      "regulate",
      "shoot"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The committee reviewed all ______ policies before deciding which ones needed to be updated or removed entirely.",
    "options": [
      "difficult",
      "existent",
      "regular",
      "adult"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The nature reserve promotes the ______ of different wildlife species by protecting their habitats from human activity.",
    "options": [
      "workforce",
      "adulthood",
      "coexistence",
      "adults"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The organization ______ in 1998, when a group of volunteers decided to help homeless youth in the city.",
    "options": [
      "shot up",
      "shooting star",
      "shoot for",
      "came into existence"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "After retiring from the busy city, he chose to ______ in a small village near the mountains.",
    "options": [
      "sales force",
      "live a quiet existence",
      "shot down",
      "shoot for"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The cat lay in a ______ position at the end of the bed, fast asleep with its tail wrapped around its nose.",
    "options": [
      "direct",
      "unusual",
      "curled",
      "unexpected"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Her hair naturally tends to ______ in humid weather, so she always keeps a small bottle of anti-frizz serum in her bag.",
    "options": [
      "ballooned",
      "reinforce",
      "shoot",
      "curl"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "On cold winter evenings, she loves to ______ on the sofa with a warm blanket and a cup of hot cocoa.",
    "options": [
      "curl up",
      "live a quiet existence",
      "shot up",
      "shoot for"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "A ______ spider had built a beautiful web in the corner of the window, catching droplets of morning dew.",
    "options": [
      "difficult",
      "tiny",
      "direct",
      "forceful"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The scientist used a ______ camera to film the behaviour of insects underground without disturbing their natural habitat.",
    "options": [
      "curled",
      "existent",
      "difficult",
      "micro"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "She visits her elderly grandmother ______ every Sunday afternoon and always brings fresh flowers from the market.",
    "options": [
      "regularly",
      "unusually",
      "mysteriously",
      "afterwards"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Getting enough sleep and having ______ meals are two of the most important habits for maintaining good health.",
    "options": [
      "tiny",
      "unusual",
      "regular",
      "difficult"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The government introduced new laws to ______ the use of social media platforms and protect users from harmful content.",
    "options": [
      "shoot",
      "forced",
      "ballooned",
      "regulate"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The new food safety ______ requires all restaurants to display hygiene scores on their front door for customers to see.",
    "options": [
      "magnificence",
      "director",
      "regulation",
      "adults"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The wind changed ______ suddenly during the race, which made it much harder for the sailors to control their boats.",
    "options": [
      "direction",
      "mystery",
      "adults",
      "existence"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "She asked a local shopkeeper for ______ to the nearest bus stop because her phone had run out of battery.",
    "options": [
      "magnificence",
      "directions",
      "adults",
      "difficulty"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The most ______ route to the airport takes only twenty minutes, but it involves paying a toll on the expressway.",
    "options": [
      "forceful",
      "curled",
      "direct",
      "magnificent"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The police officer stood in the middle of the intersection to ______ traffic after the traffic lights stopped working.",
    "options": [
      "direct",
      "exist",
      "forced",
      "enforce"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "After the concert, she went ______ home without stopping anywhere because she had an early flight the next morning.",
    "options": [
      "regularly",
      "directly",
      "unusually",
      "beforehand"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The film ______ spent three years developing the script before finally finding the right cast for each role.",
    "options": [
      "existence",
      "workforce",
      "weaver",
      "director"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The children decorated the room with colourful ______ and streamers to celebrate their friend's birthday party.",
    "options": [
      "magnificence",
      "balloons",
      "adults",
      "adulthood"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The project's budget ______ to twice its original amount after several unexpected delays and material cost increases.",
    "options": [
      "shoot",
      "exist",
      "curl",
      "ballooned"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "The skilled craftwoman could ______ a beautiful pattern into the fabric without even looking at what her hands were doing.",
    "options": [
      "ballooned",
      "return",
      "weave",
      "shot"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "She learned how to ______ her daughter's braids to create a traditional style.",
    "options": [
      "weave strings into",
      "shot down",
      "live a quiet existence",
      "sales force"
    ],
    "answer": 0,
    "vocabIndex": 35
  },
  {
    "q": "The ______ worked at a traditional wooden loom for hours each day, producing beautiful handmade scarves and shawls.",
    "options": [
      "direction",
      "weaver",
      "coexistence",
      "magnificence"
    ],
    "answer": 1,
    "vocabIndex": 36
  },
  {
    "q": "The basketball player ______ the ball from the three-point line and it went straight through the hoop without touching the rim.",
    "options": [
      "curl",
      "direct",
      "shot",
      "return"
    ],
    "answer": 2,
    "vocabIndex": 37
  },
  {
    "q": "The director decided to ______ the final scene at sunrise to capture the golden light reflecting off the ocean.",
    "options": [
      "shoot",
      "exist",
      "forced",
      "direct"
    ],
    "answer": 0,
    "vocabIndex": 38
  },
  {
    "q": "The sports car ______ past the traffic lights so fast that nobody could even read the number plate on its bumper.",
    "options": [
      "forced",
      "exist",
      "reinforce",
      "shot"
    ],
    "answer": 3,
    "vocabIndex": 39
  },
  {
    "q": "They lay on the grass and waited patiently until they finally saw a ______ streak across the dark sky.",
    "options": [
      "came into existence",
      "live a quiet existence",
      "shooting star",
      "in return"
    ],
    "answer": 2,
    "vocabIndex": 40
  },
  {
    "q": "Sparks began to ______ from the damaged electrical panel, so the technician cut the power immediately.",
    "options": [
      "in return",
      "weave strings into",
      "live a quiet existence",
      "shoot out"
    ],
    "answer": 3,
    "vocabIndex": 41
  },
  {
    "q": "The price of vegetables ______ after the typhoon damaged most of the crops in the southern farming regions.",
    "options": [
      "shot up",
      "weave strings into",
      "in return",
      "shooting star"
    ],
    "answer": 0,
    "vocabIndex": 42
  },
  {
    "q": "Her creative proposal was ______ by the manager without any explanation, which left her feeling very frustrated.",
    "options": [
      "shoot out",
      "shot down",
      "shoot for",
      "came into existence"
    ],
    "answer": 1,
    "vocabIndex": 43
  },
  {
    "q": "The young athlete decided to ______ a spot on the national team by training twice as hard as before.",
    "options": [
      "shoot out",
      "came into existence",
      "shoot for",
      "in return"
    ],
    "answer": 2,
    "vocabIndex": 44
  },
  {
    "q": "The ______ of the storm was so powerful that it knocked down trees and damaged dozens of buildings across the city.",
    "options": [
      "force",
      "mystery",
      "hardship",
      "coexistence"
    ],
    "answer": 0,
    "vocabIndex": 45
  },
  {
    "q": "No one should be ______ to work overtime without proper compensation, as it is both unfair and against the law.",
    "options": [
      "weave",
      "exist",
      "enforce",
      "forced"
    ],
    "answer": 3,
    "vocabIndex": 46
  },
  {
    "q": "The lawyer delivered a ______ argument in court that convinced the jury and led to the defendant being found innocent.",
    "options": [
      "direct",
      "forceful",
      "curled",
      "unusual"
    ],
    "answer": 1,
    "vocabIndex": 47
  },
  {
    "q": "The school hired additional staff to ______ the new mobile phone policy during lunch breaks and class time.",
    "options": [
      "regulate",
      "curl",
      "enforce",
      "forced"
    ],
    "answer": 2,
    "vocabIndex": 48
  },
  {
    "q": "The engineer recommended using steel beams to ______ the old bridge so that it could safely carry heavier vehicles.",
    "options": [
      "magnify",
      "reinforce",
      "forced",
      "exist"
    ],
    "answer": 1,
    "vocabIndex": 49
  },
  {
    "q": "The company invested in training to upskill its ______ and prepare employees for the challenges of new technology.",
    "options": [
      "direction",
      "weaver",
      "regulation",
      "workforce"
    ],
    "answer": 3,
    "vocabIndex": 50
  },
  {
    "q": "The company expanded its ______ by hiring twenty new representatives to cover the northern region of the country.",
    "options": [
      "sales force",
      "shoot for",
      "shot down",
      "in return"
    ],
    "answer": 0,
    "vocabIndex": 51
  },
  {
    "q": "The ceremony lasted for two hours, and ______ everyone was invited to the reception hall for food and drinks.",
    "options": [
      "directly",
      "mysteriously",
      "unusually",
      "afterwards"
    ],
    "answer": 3,
    "vocabIndex": 52
  },
  {
    "q": "Please make sure you read all the instructions ______ so that you understand exactly what to do during the fire drill.",
    "options": [
      "beforehand",
      "mysteriously",
      "directly",
      "afterwards"
    ],
    "answer": 0,
    "vocabIndex": 53
  },
  {
    "q": "She promised to ______ the library books before the deadline to avoid paying a late fee for each overdue day.",
    "options": [
      "enforce",
      "curl",
      "return",
      "regulate"
    ],
    "answer": 2,
    "vocabIndex": 54
  },
  {
    "q": "His ______ to the stage after a three-year absence was met with a standing ovation from the delighted audience.",
    "options": [
      "directions",
      "return",
      "workforce",
      "adulthood"
    ],
    "answer": 1,
    "vocabIndex": 55
  },
  {
    "q": "She helped her neighbour with grocery shopping every week, and ______, he kept an eye on her apartment when she travelled.",
    "options": [
      "in return",
      "weave strings into",
      "shooting star",
      "shot down"
    ],
    "answer": 0,
    "vocabIndex": 56
  },
  {
    "q": "She had great ______ concentrating in the open office because of the constant noise from her colleagues nearby.",
    "options": [
      "adulthood",
      "difficulty",
      "mystery",
      "regulation"
    ],
    "answer": 1,
    "vocabIndex": 57
  },
  {
    "q": "Learning to drive on the left side of the road was very ______ for her at first, but she eventually got used to it.",
    "options": [
      "tiny",
      "existent",
      "difficult",
      "direct"
    ],
    "answer": 2,
    "vocabIndex": 58
  },
  {
    "q": "Despite years of ______ and poverty, she never gave up her dream of becoming a doctor and helping her community.",
    "options": [
      "magnitude",
      "coexistence",
      "direction",
      "hardship"
    ],
    "answer": 3,
    "vocabIndex": 59
  },
  {
    "q": "The programme is designed for ______ who want to improve their literacy skills and return to education later in life.",
    "options": [
      "adults",
      "regulation",
      "existence",
      "difficulty"
    ],
    "answer": 0,
    "vocabIndex": 60
  },
  {
    "q": "The film carries an ______ rating because it contains scenes of violence that are not suitable for younger viewers.",
    "options": [
      "unexpected",
      "adult",
      "curled",
      "usual"
    ],
    "answer": 1,
    "vocabIndex": 61
  },
  {
    "q": "The transition from childhood to ______ can be challenging, especially when young people face big decisions about their future.",
    "options": [
      "coexistence",
      "mystery",
      "magnificence",
      "adulthood"
    ],
    "answer": 3,
    "vocabIndex": 62
  }
];

const LOOKUP = {
  "magnificent": {
    "pos": "adj.",
    "en_def": "extremely beautiful, elaborate, or impressive.",
    "cn_def": "壯麗的、宏偉的、極好的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "extremely beautiful, elaborate, or impressive.",
        "cn_def": "壯麗的、宏偉的、極好的"
      }
    ]
  },
  "magnificence": {
    "pos": "n.",
    "en_def": "the quality of being grand, large, or beautiful.",
    "cn_def": "壯麗、宏偉、華麗",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of being grand, large, or beautiful.",
        "cn_def": "壯麗、宏偉、華麗"
      }
    ]
  },
  "magnify": {
    "pos": "v.",
    "en_def": "to make something look larger than it really is.",
    "cn_def": "放大、誇大",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make something look larger than it really is.",
        "cn_def": "放大、誇大"
      }
    ]
  },
  "magnitude": {
    "pos": "n.",
    "en_def": "the great size, scale, or importance of something.",
    "cn_def": "巨大、重大、震級",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the great size, scale, or importance of something.",
        "cn_def": "巨大、重大、震級"
      }
    ]
  },
  "mystery": {
    "pos": "n.",
    "en_def": "something strange that cannot be explained or understood.",
    "cn_def": "神秘的事物、謎",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something strange that cannot be explained or understood.",
        "cn_def": "神秘的事物、謎"
      }
    ]
  },
  "mysterious": {
    "pos": "adj.",
    "en_def": "strange, unknown, or difficult to understand.",
    "cn_def": "神秘的、不可思議的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "strange, unknown, or difficult to understand.",
        "cn_def": "神秘的、不可思議的"
      }
    ]
  },
  "mysteriously": {
    "pos": "adv.",
    "en_def": "in a way that is strange or secret.",
    "cn_def": "神秘地、不可思議地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that is strange or secret.",
        "cn_def": "神秘地、不可思議地"
      }
    ]
  },
  "unusual": {
    "pos": "adj.",
    "en_def": "different from what is normal or common; rare.",
    "cn_def": "不尋常的、獨特的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "different from what is normal or common; rare.",
        "cn_def": "不尋常的、獨特的"
      }
    ]
  },
  "unusually": {
    "pos": "adv.",
    "en_def": "in a way that is modern, rare, or remarkable.",
    "cn_def": "異常地、非常",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that is modern, rare, or remarkable.",
        "cn_def": "異常地、非常"
      }
    ]
  },
  "usual": {
    "pos": "adj.",
    "en_def": "normal; happening in the regular way.",
    "cn_def": "通常的、慣常的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "normal; happening in the regular way.",
        "cn_def": "通常的、慣常的"
      }
    ]
  },
  "unexpected": {
    "pos": "adj.",
    "en_def": "surprising because you did not think it would happen.",
    "cn_def": "出乎意料的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "surprising because you did not think it would happen.",
        "cn_def": "出乎意料的"
      }
    ]
  },
  "existence": {
    "pos": "n.",
    "en_def": "the state of being real or living in the world.",
    "cn_def": "存在、生存",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being real or living in the world.",
        "cn_def": "存在、生存"
      }
    ]
  },
  "exist": {
    "pos": "v.",
    "en_def": "to be real; to live or be found in a place.",
    "cn_def": "存在、生存",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to be real; to live or be found in a place.",
        "cn_def": "存在、生存"
      }
    ]
  },
  "existent": {
    "pos": "adj.",
    "en_def": "currently real or existing right now.",
    "cn_def": "現存的、存在的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "currently real or existing right now.",
        "cn_def": "現存的、存在的"
      }
    ]
  },
  "coexistence": {
    "pos": "n.",
    "en_def": "living peacefully together at the same time.",
    "cn_def": "共存",
    "combined": [
      {
        "pos": "n.",
        "en_def": "living peacefully together at the same time.",
        "cn_def": "共存"
      }
    ]
  },
  "come into existence": {
    "pos": "phr.",
    "en_def": "to begin to be real or start being made.",
    "cn_def": "開始存在、成立",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to begin to be real or start being made.",
        "cn_def": "開始存在、成立"
      }
    ]
  },
  "came into existence": {
    "pos": "phr.",
    "en_def": "to begin to be real or start being made.",
    "cn_def": "開始存在、成立",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to begin to be real or start being made.",
        "cn_def": "開始存在、成立"
      }
    ]
  },
  "live a quiet existence": {
    "pos": "phr.",
    "en_def": "to spend your days in a peaceful, simple way.",
    "cn_def": "過著清靜的生活",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to spend your days in a peaceful, simple way.",
        "cn_def": "過著清靜的生活"
      }
    ]
  },
  "curled": {
    "pos": "adj.",
    "en_def": "formed into a twisted, spiral, or curved shape.",
    "cn_def": "捲曲的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "formed into a twisted, spiral, or curved shape.",
        "cn_def": "捲曲的"
      }
    ]
  },
  "curl": {
    "pos": "v.",
    "en_def": "to twist or bend into a curve or loop.",
    "cn_def": "使捲曲、蜷縮",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to twist or bend into a curve or loop.",
        "cn_def": "使捲曲、蜷縮"
      }
    ]
  },
  "curl up": {
    "pos": "phr.",
    "en_def": "to sit or lie with your arms and legs close to you.",
    "cn_def": "蜷縮、身體抱成團",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to sit or lie with your arms and legs close to you.",
        "cn_def": "蜷縮、身體抱成團"
      }
    ]
  },
  "tiny": {
    "pos": "adj.",
    "en_def": "extremely small in size, amount, or scale.",
    "cn_def": "極小的、微小的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "extremely small in size, amount, or scale.",
        "cn_def": "極小的、微小的"
      }
    ]
  },
  "micro": {
    "pos": "adj.",
    "en_def": "completely small; relating to electronic chips.",
    "cn_def": "微型的、微觀的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "completely small; relating to electronic chips.",
        "cn_def": "微型的、微觀的"
      }
    ]
  },
  "regularly": {
    "pos": "adv.",
    "en_def": "happening often or at the same time intervals.",
    "cn_def": "定期地、規律地、經常",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "happening often or at the same time intervals.",
        "cn_def": "定期地、規律地、經常"
      }
    ]
  },
  "regular": {
    "pos": "adj.",
    "en_def": "happening or done often; following a fixed pattern.",
    "cn_def": "規律的、定期的、普通的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "happening or done often; following a fixed pattern.",
        "cn_def": "規律的、定期的、普通的"
      }
    ]
  },
  "regulate": {
    "pos": "v.",
    "en_def": "to control a process or speed with official rules.",
    "cn_def": "管制、調整、調節",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to control a process or speed with official rules.",
        "cn_def": "管制、調整、調節"
      }
    ]
  },
  "regulation": {
    "pos": "n.",
    "en_def": "an official rule made by a government or firm.",
    "cn_def": "規章、法規、管制",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an official rule made by a government or firm.",
        "cn_def": "規章、法規、管制"
      }
    ]
  },
  "direction": {
    "pos": "n.",
    "en_def": "the way or path along which something moves.",
    "cn_def": "方向、方位",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the way or path along which something moves.",
        "cn_def": "方向、方位"
      }
    ]
  },
  "directions": {
    "pos": "n.",
    "en_def": "instructions on how to get to a place or do a job.",
    "cn_def": "指引、路線說明（常用複數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "instructions on how to get to a place or do a job.",
        "cn_def": "指引、路線說明（常用複數）"
      }
    ]
  },
  "direct": {
    "pos": "adj.",
    "en_def": "straight; going from point to point with no stops.",
    "cn_def": "直接的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "straight; going from point to point with no stops.",
        "cn_def": "直接的"
      },
      {
        "pos": "v.",
        "en_def": "to aim something at a target; to show the way.",
        "cn_def": "指引、導演、對準"
      }
    ]
  },
  "directly": {
    "pos": "adv.",
    "en_def": "honestly; without any stops or delayed waiting.",
    "cn_def": "直接地、立刻",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "honestly; without any stops or delayed waiting.",
        "cn_def": "直接地、立刻"
      }
    ]
  },
  "director": {
    "pos": "n.",
    "en_def": "the manager of a company department or movie film.",
    "cn_def": "經理、主管、導演",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the manager of a company department or movie film.",
        "cn_def": "經理、主管、導演"
      }
    ]
  },
  "balloon": {
    "pos": "n.",
    "en_def": "a small rubber bag that becomes large when filled with air.",
    "cn_def": "氣球",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small rubber bag that becomes large when filled with air.",
        "cn_def": "氣球"
      },
      {
        "pos": "v.",
        "en_def": "to quickly become very large or swell out.",
        "cn_def": "激增、如氣球般膨脹"
      }
    ]
  },
  "balloons": {
    "pos": "n.",
    "en_def": "a small rubber bag that becomes large when filled with air.",
    "cn_def": "氣球",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small rubber bag that becomes large when filled with air.",
        "cn_def": "氣球"
      }
    ]
  },
  "ballooned": {
    "pos": "v.",
    "en_def": "to quickly become very large or swell out.",
    "cn_def": "激增、如氣球般膨脹",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to quickly become very large or swell out.",
        "cn_def": "激增、如氣球般膨脹"
      }
    ]
  },
  "weave": {
    "pos": "v.",
    "en_def": "to make cloth by crossing threads over and under each other.",
    "cn_def": "編織",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make cloth by crossing threads over and under each other.",
        "cn_def": "編織"
      }
    ]
  },
  "weave / wove / woven": {
    "pos": "v.",
    "en_def": "to make cloth by crossing threads over and under each other.",
    "cn_def": "編織",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make cloth by crossing threads over and under each other.",
        "cn_def": "編織"
      }
    ]
  },
  "weave strings into": {
    "pos": "phr.",
    "en_def": "to twist colorful hair threads together into styles.",
    "cn_def": "將線編入…中",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to twist colorful hair threads together into styles.",
        "cn_def": "將線編入…中"
      }
    ]
  },
  "weaver": {
    "pos": "n.",
    "en_def": "a craft person who specializes in making cloth garments.",
    "cn_def": "織布工、編織者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a craft person who specializes in making cloth garments.",
        "cn_def": "織布工、編織者"
      }
    ]
  },
  "shoot / shot / shot": {
    "pos": "v.",
    "en_def": "to fire a bullet from a gun or kick a sports ball.",
    "cn_def": "發射、射擊、投籃",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to fire a bullet from a gun or kick a sports ball.",
        "cn_def": "發射、射擊、投籃"
      },
      {
        "pos": "v.",
        "en_def": "to film a scene or make a music video.",
        "cn_def": "拍攝、攝影"
      },
      {
        "pos": "v.",
        "en_def": "to move past someone very quickly and suddenly.",
        "cn_def": "衝過、飛馳而過"
      }
    ]
  },
  "shot": {
    "pos": "v.",
    "en_def": "to fire a bullet from a gun or kick a sports ball.",
    "cn_def": "發射、射擊、投籃",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to fire a bullet from a gun or kick a sports ball.",
        "cn_def": "發射、射擊、投籃"
      },
      {
        "pos": "v.",
        "en_def": "to move past someone very quickly and suddenly.",
        "cn_def": "衝過、飛馳而過"
      }
    ]
  },
  "shoot": {
    "pos": "v.",
    "en_def": "to film a scene or make a music video.",
    "cn_def": "拍攝、攝影",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to film a scene or make a music video.",
        "cn_def": "拍攝、攝影"
      }
    ]
  },
  "shooting star": {
    "pos": "phr.",
    "en_def": "a meteor that makes a bright line across the sky.",
    "cn_def": "流星",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a meteor that makes a bright line across the sky.",
        "cn_def": "流星"
      }
    ]
  },
  "shoot out": {
    "pos": "phr.",
    "en_def": "to suddenly explode or send fire lines out of a slot.",
    "cn_def": "噴出、射出",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to suddenly explode or send fire lines out of a slot.",
        "cn_def": "噴出、射出"
      }
    ]
  },
  "shoot up": {
    "pos": "phr.",
    "en_def": "to rise or increase very fast in price or height.",
    "cn_def": "暴漲、猛增",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to rise or increase very fast in price or height.",
        "cn_def": "暴漲、猛增"
      }
    ]
  },
  "shot up": {
    "pos": "phr.",
    "en_def": "to rise or increase very fast in price or height.",
    "cn_def": "暴漲、猛增",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to rise or increase very fast in price or height.",
        "cn_def": "暴漲、猛增"
      }
    ]
  },
  "shoot down": {
    "pos": "phr.",
    "en_def": "to reject a plan or suggestion completely.",
    "cn_def": "否決（提議等）、擊落",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to reject a plan or suggestion completely.",
        "cn_def": "否決（提議等）、擊落"
      }
    ]
  },
  "shot down": {
    "pos": "phr.",
    "en_def": "to reject a plan or suggestion completely.",
    "cn_def": "否決（提議等）、擊落",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to reject a plan or suggestion completely.",
        "cn_def": "否決（提議等）、擊落"
      }
    ]
  },
  "shoot for": {
    "pos": "phr.",
    "en_def": "to set a major metric target as your top career goal.",
    "cn_def": "以…為目標、爭取",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to set a major metric target as your top career goal.",
        "cn_def": "以…為目標、爭取"
      }
    ]
  },
  "force": {
    "pos": "n.",
    "en_def": "physical power, strength, or military soldiers group.",
    "cn_def": "力量、暴力、軍隊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "physical power, strength, or military soldiers group.",
        "cn_def": "力量、暴力、軍隊"
      },
      {
        "pos": "v.",
        "en_def": "to make someone do something they do not want to do.",
        "cn_def": "強迫、迫使"
      }
    ]
  },
  "forced": {
    "pos": "v.",
    "en_def": "to make someone do something they do not want to do.",
    "cn_def": "強迫、迫使",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make someone do something they do not want to do.",
        "cn_def": "強迫、迫使"
      }
    ]
  },
  "forceful": {
    "pos": "adj.",
    "en_def": "expressing opinions with huge energy or power.",
    "cn_def": "有力的、強烈的、有說服力的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "expressing opinions with huge energy or power.",
        "cn_def": "有力的、強烈的、有說服力的"
      }
    ]
  },
  "enforce": {
    "pos": "v.",
    "en_def": "to make sure that a law or rule is obeyed properly.",
    "cn_def": "執行、實施（法律等）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make sure that a law or rule is obeyed properly.",
        "cn_def": "執行、實施（法律等）"
      }
    ]
  },
  "reinforce": {
    "pos": "v.",
    "en_def": "to make a material structure or army group stronger.",
    "cn_def": "加強、加固、增援",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make a material structure or army group stronger.",
        "cn_def": "加強、加固、增援"
      }
    ]
  },
  "workforce": {
    "pos": "n.",
    "en_def": "all the available workers inside a country or plant.",
    "cn_def": "勞動力、全體員工",
    "combined": [
      {
        "pos": "n.",
        "en_def": "all the available workers inside a country or plant.",
        "cn_def": "勞動力、全體員工"
      }
    ]
  },
  "sales force": {
    "pos": "phr.",
    "en_def": "the corporate department that sells goods directly.",
    "cn_def": "銷售團隊",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the corporate department that sells goods directly.",
        "cn_def": "銷售團隊"
      }
    ]
  },
  "afterwards": {
    "pos": "adv.",
    "en_def": "at a later time; after something else has happened.",
    "cn_def": "之後、後來",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "at a later time; after something else has happened.",
        "cn_def": "之後、後來"
      }
    ]
  },
  "beforehand": {
    "pos": "adv.",
    "en_def": "earlier; before a specific event takes place.",
    "cn_def": "預先、事先",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "earlier; before a specific event takes place.",
        "cn_def": "預先、事先"
      }
    ]
  },
  "return": {
    "pos": "v.",
    "en_def": "to come or go back to a place; to give an item back.",
    "cn_def": "返回、歸還",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to come or go back to a place; to give an item back.",
        "cn_def": "返回、歸還"
      },
      {
        "pos": "n.",
        "en_def": "the act of coming back to a spot or a profit value.",
        "cn_def": "返回、收益、利潤"
      }
    ]
  },
  "in return": {
    "pos": "phr.",
    "en_def": "as a reaction, exchange, or reward for something.",
    "cn_def": "作為回報、作為交換",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "as a reaction, exchange, or reward for something.",
        "cn_def": "作為回報、作為交換"
      }
    ]
  },
  "difficulty": {
    "pos": "n.",
    "en_def": "a problem or a fact of being hard to complete.",
    "cn_def": "困難、難題",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a problem or a fact of being hard to complete.",
        "cn_def": "困難、難題"
      }
    ]
  },
  "difficult": {
    "pos": "adj.",
    "en_def": "tough to handle; tracking complex layers.",
    "cn_def": "困難的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "tough to handle; tracking complex layers.",
        "cn_def": "困難的"
      }
    ]
  },
  "hardship": {
    "pos": "n.",
    "en_def": "severe suffering or lacking basic life assets.",
    "cn_def": "艱苦、困苦",
    "combined": [
      {
        "pos": "n.",
        "en_def": "severe suffering or lacking basic life assets.",
        "cn_def": "艱苦、困苦"
      }
    ]
  },
  "adult": {
    "pos": "n.",
    "en_def": "a person or animal that is fully grown up.",
    "cn_def": "成人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or animal that is fully grown up.",
        "cn_def": "成人"
      },
      {
        "pos": "adj.",
        "en_def": "fully developed or suitable only for grown ups.",
        "cn_def": "成年的、成熟的"
      }
    ]
  },
  "adults": {
    "pos": "n.",
    "en_def": "a person or animal that is fully grown up.",
    "cn_def": "成人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or animal that is fully grown up.",
        "cn_def": "成人"
      }
    ]
  },
  "adulthood": {
    "pos": "n.",
    "en_def": "the period of time when you are a grown citizen.",
    "cn_def": "成年期",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the period of time when you are a grown citizen.",
        "cn_def": "成年期"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
