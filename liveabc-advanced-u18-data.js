// Unit 18 Quiz Data: preach – impressionist
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Advanced U18 - preach – impressionist",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "preach",
    "pos": "v.",
    "cn_def": "傳教；宣講",
    "en_def": "to deliver a religious sermon or talk to an audience",
    "sentence": "The dedicated priest traveled to many remote mountain villages to {{BLANK}} the gospel to local residents.",
    "cn": "這位熱忱的牧師前往許多偏遠的山村，向當地居民宣講福音。"
  },
  {
    "word": "preaching",
    "pos": "v.",
    "cn_def": "說教",
    "en_def": "to give moral advice to someone in an annoying or forcefully repetitive way",
    "sentence": "I wish my traditional parents would stop {{BLANK}} at me about how I should manage my monthly salary.",
    "cn": "我希望我傳統的父母不要再對我如何管理每月薪水嘮叨說教了。"
  },
  {
    "word": "preacher",
    "pos": "n.",
    "cn_def": "傳教士；說教者",
    "en_def": "a person who delivers sermons or religious talks as an occupation",
    "sentence": "The eloquent {{BLANK}} captured the entire audience's imagination during his inspiring Sunday sermon.",
    "cn": "這位雄辯的傳教士在引人入勝的星期日佈道中，擄獲了全場聽眾的想像力。"
  },
  {
    "word": "preach what one practices",
    "pos": "phr.",
    "cn_def": "言行一致；身體力行",
    "en_def": "to behave in a way that matches the moral advice that one gives to others",
    "sentence": "Good educators should always {{BLANK}}, showing high moral principles to young children.",
    "cn": "優秀的教育工作者應該始終身體力行，向幼兒展現高尚的道德原則。"
  },
  {
    "word": "prayed",
    "pos": "v.",
    "cn_def": "祈禱；祈求",
    "en_def": "to speak to a god or a holy power to give thanks or ask for help",
    "sentence": "The anxious parents {{BLANK}} tonight that their daughter would survive the complex medical operation safely.",
    "cn": "焦慮的父母今晚祈禱著他們的女兒能安全地挺過這場複雜的醫療手術。"
  },
  {
    "word": "pray for",
    "pos": "phr.",
    "cn_def": "為...祈禱；祈求",
    "en_def": "to make a specific request to a higher power for peace, health, or rain",
    "sentence": "Farmers in the agricultural community gathered at the shrine to {{BLANK}} a mild summer with plenty of rainfall.",
    "cn": "農業社區的農民聚集在神龕前，祈求一個降雨充足的溫和夏天。"
  },
  {
    "word": "prayer",
    "pos": "n.",
    "cn_def": "祈禱；禱詞",
    "en_def": "the words spoken when speaking to a god, or the act of praying",
    "sentence": "The priest led the congregation in a deeply earnest {{BLANK}} for world peace and cultural tolerance.",
    "cn": "牧師帶領會眾進行了極其真誠的祈禱，祈求世界和平與文化包容。"
  },
  {
    "word": "worship",
    "pos": "v.",
    "cn_def": "敬拜；信奉；崇拜",
    "en_def": "to show strong religious love and respect to a god or a holy power",
    "sentence": "Ancient people used to {{BLANK}} the sun and the moon as powerful gods that controlled the agricultural harvest.",
    "cn": "古代人曾將太陽和月亮當作控制農業收成、具有強大力量的神明來敬拜。"
  },
  {
    "word": "worship",
    "pos": "n.",
    "cn_def": "敬拜；禮拜；崇拜",
    "en_def": "the act of showing strong religious love and respect to a god",
    "sentence": "The giant stone cathedral is a historic place of {{BLANK}} where hundreds of citizens gather every Sunday morning.",
    "cn": "這座巨大的石頭大教堂是一處歷史悠久的敬拜場所，每週日早上都有數百名市民聚集於此。"
  },
  {
    "word": "worshippers",
    "pos": "n.",
    "cn_def": "朝拜者；信徒",
    "en_def": "a person who goes to a religious building to show respect to a god",
    "sentence": "The ancient temple was crammed with eager {{BLANK}} who brought fresh fruit and fragrant lilies as ornaments.",
    "cn": "這座古老的寺廟裡擠滿了熱切的朝拜者，他們帶來新鮮水果和芬芳的百合花作為裝飾品。"
  },
  {
    "word": "freedom of worship",
    "pos": "n.",
    "cn_def": "信仰自由",
    "en_def": "the legal right of citizens to practice any religion they choose",
    "sentence": "Our national government guarantees {{BLANK}} as a fundamental human right for every minority group.",
    "cn": "我們國家政府保證信仰自由，並將其視為每個少數族群根本的人權。"
  },
  {
    "word": "pilgrims",
    "pos": "n.",
    "cn_def": "朝聖者",
    "en_def": "a person who travels to a holy place for serious religious reasons",
    "sentence": "The exhausted {{BLANK}} finally reached the mountain shrine after walking diligently across the rough landscape for weeks.",
    "cn": "疲憊的朝聖者們在崎嶇的土地上辛勤行走了幾週後，終於抵達了山上的神龕。"
  },
  {
    "word": "pilgrimage",
    "pos": "n.",
    "cn_def": "朝聖之旅",
    "en_def": "a long journey to a holy place made by a religious person",
    "sentence": "Making an annual {{BLANK}} to the ancient cathedral is an important routine for many traditional families in Europe.",
    "cn": "每年到古老的大教堂進行朝聖之旅，是歐洲許多傳統家庭的重要日常常規。"
  },
  {
    "word": "shrine",
    "pos": "n.",
    "cn_def": "神龕；聖地；神廟",
    "en_def": "a holy place for worship, often associated with a choice saint or ancestor",
    "sentence": "The historic temple includes a small marble {{BLANK}} that is beautifully ornamented with golden beads and pearls.",
    "cn": "這座歷史悠久的寺廟包含一個小巧的大理石神龕，上面用金珠和珍珠裝飾得十分美麗。"
  },
  {
    "word": "temple",
    "pos": "n.",
    "cn_def": "寺廟；廟宇",
    "en_def": "a building used for religious worship, especially in Buddhism or Hinduism",
    "sentence": "The archaeologist discovered a rare ancient statue inside the stone {{BLANK}} that left the research staff completely speechless.",
    "cn": "考古學家在石廟內發現了一座罕見的古代雕像，這讓研究人員完全說不出話來。"
  },
  {
    "word": "Buddhism",
    "pos": "n.",
    "cn_def": "佛教",
    "en_def": "an eastern religion based on the original teachings of Siddhartha Gautama",
    "sentence": "The elderly scholar spent his entire academic career studying the social impact of modern {{BLANK}} on Asian culture.",
    "cn": "這位年長的學者將他整個學術生涯都奉獻於研究現代佛教對亞洲文化的社會影響。"
  },
  {
    "word": "cathedral",
    "pos": "n.",
    "cn_def": "大教堂",
    "en_def": "a very large and grand stone church, typically the main church in an area",
    "sentence": "It took almost one hundred years to construct the giant stone {{BLANK}} that defines the city's modern cityscape.",
    "cn": "建造這座界定了城市現代城市景觀的巨大石頭大教堂，花費了將近一百年的時間。"
  },
  {
    "word": "Christianity",
    "pos": "n.",
    "cn_def": "基督教",
    "en_def": "a western religion based on the life and teachings of Jesus Christ",
    "sentence": "The history textbook provides a general framework for understanding how {{BLANK}} spread across the European continent.",
    "cn": "這本歷史教科書提供了一個通用框架，用以理解基督教是如何在歐洲大陸上傳播開來的。"
  },
  {
    "word": "Christian",
    "pos": "n.",
    "cn_def": "基督徒",
    "en_def": "a person who believes in Christianity and follows its teachings",
    "sentence": "The dedicated {{BLANK}} routinely attends church services every Sunday to offer earnest prayers for his family.",
    "cn": "這位熱忱的基督徒每週日通常都會參加教堂禮拜，為他的家人進行真誠的祈禱。"
  },
  {
    "word": "Christian",
    "pos": "adj.",
    "cn_def": "基督教的",
    "en_def": "relating to or associated with Christianity or its historical traditions",
    "sentence": "The historic town is world-famous for its magnificent {{BLANK}} architecture and well-preserved ancient structures.",
    "cn": "這座歷史悠久的小鎮以其宏偉的基督教建築和保存完好的古老結構而聞名於世。"
  },
  {
    "word": "mosque",
    "pos": "n.",
    "cn_def": "清真寺",
    "en_def": "a building where Muslims gather together to perform religious worship",
    "sentence": "The architectural design of the new {{BLANK}} features elegant symmetry and a beautiful white marble dome.",
    "cn": "這座新清真寺的建築設計以優雅的對稱和美麗的白色大理石圓頂為特色。"
  },
  {
    "word": "Islam",
    "pos": "n.",
    "cn_def": "伊斯蘭教",
    "en_def": "the religion of Muslims, based on the words and teachings of Muhammad",
    "sentence": "Learning the fundamental principles of {{BLANK}} is necessary for building cultural tolerance and mutual respect in society.",
    "cn": "學習伊斯蘭教的根本原則對於在社會中建立文化包容力與相互尊重是必要的。"
  },
  {
    "word": "Islamic",
    "pos": "adj.",
    "cn_def": "伊斯蘭的；伊斯蘭教的",
    "en_def": "relating to or characteristic of Islam, its culture, or its people",
    "sentence": "The gallery displays a valuable collection of {{BLANK}} art that dates back to the eighth century.",
    "cn": "該畫廊展示了一批珍貴的伊斯蘭藝術收藏，其歷史可以追溯到第八世紀。"
  },
  {
    "word": "religion",
    "pos": "n.",
    "cn_def": "宗教",
    "en_def": "a systematic belief in and worship of a god or a higher spiritual power",
    "sentence": "The prime minister stated firmly that the government should not discriminate against citizens based on their {{BLANK}}.",
    "cn": "首相堅定地表示，政府不應根據公民的宗教信仰而對其進行歧視。"
  },
  {
    "word": "religious",
    "pos": "adj.",
    "cn_def": "宗教的；虔誠的",
    "en_def": "relating to religion, or showing a strong dedication to a spiritual belief",
    "sentence": "The historic temple is of great importance to the country's {{BLANK}} heritage and ancient traditions.",
    "cn": "這座歷史悠久的寺廟對該國的宗教遺產與古代傳統具有極大的重要性。"
  },
  {
    "word": "religious ritual",
    "pos": "n.",
    "cn_def": "宗教儀式",
    "en_def": "a set of fixed actions performed regularly as part of a formal ceremony",
    "sentence": "Performing the ancient {{BLANK}} requires immense precision and a deep understanding of traditional principles.",
    "cn": "舉行古代的宗教儀式需要極高的精密性，以及對傳統原則的深刻理解。"
  },
  {
    "word": "religious practice",
    "pos": "n.",
    "cn_def": "宗教習俗；宗教實踐",
    "en_def": "an action or habit that is commonly done as part of practicing a religion",
    "sentence": "Fasting during specific months is an important {{BLANK}} that is common in many different cultures worldwide.",
    "cn": "在特定月份進行齋戒是一項重要的宗教習俗，在全球許多不同的文化中都很常見。"
  },
  {
    "word": "religious beliefs",
    "pos": "n.",
    "cn_def": "宗教信仰",
    "en_def": "a firm spiritual conviction or faith that is based on a specific religion",
    "sentence": "The law ensures that large companies cannot refuse admission to employees on the grounds of their {{BLANK}}.",
    "cn": "法律確保了大型公司不能以員工的宗教信仰為由而拒絕其入職。"
  },
  {
    "word": "practice religion",
    "pos": "phr.",
    "cn_def": "信仰宗教；實踐宗教儀式",
    "en_def": "to actively perform the rituals and follow the rules of a spiritual belief",
    "sentence": "The constitution guarantees that every minority group has the clear legal right to {{BLANK}} freely.",
    "cn": "憲法保證每個少數族群都擁有自由信仰宗教的明確法律權利。"
  },
  {
    "word": "region",
    "pos": "n.",
    "cn_def": "地區；區域",
    "en_def": "a distinctive area or division of a country or part of the world",
    "sentence": "The agricultural {{BLANK}} suffered severe economic losses after an unexpected summer ice storm damaged the crops.",
    "cn": "在一場意料之外的夏季冰暴損害了農作物後，這個農業地區遭受了嚴重的經濟損失。"
  },
  {
    "word": "regional",
    "pos": "adj.",
    "cn_def": "地區的；區域性的",
    "en_def": "relating to or characteristic of a specific area, district, or territory",
    "sentence": "The company decided to establish a new {{BLANK}} office in Taipei to manage its expanding commercial affairs.",
    "cn": "該公司決定在台北成立一個全新的區域辦公室，以管理其不斷擴展的商業事務。"
  },
  {
    "word": "scheme",
    "pos": "n.",
    "cn_def": "方案；計劃",
    "en_def": "a large-scale systematic plan or arrangement for attaining a specific object",
    "sentence": "The city government introduced an innovative {{BLANK}} to improve public transportation and minimize traffic.",
    "cn": "市政府推出了一項創新方案，以改善公共交通並將交通擁堵降至最低。"
  },
  {
    "word": "scheme",
    "pos": "n.",
    "cn_def": "陰謀；詭計",
    "en_def": "a secret and dishonest plan or plot manufactured to deceive others",
    "sentence": "The clever financial {{BLANK}} designed by the suspect tempted many innocent elderly citizens into investing.",
    "cn": "嫌疑人設計的聰明金融陰謀，引誘了許多無辜的年長公民參與投資。"
  },
  {
    "word": "scheming",
    "pos": "v.",
    "cn_def": "密謀；策劃",
    "en_def": "to make secret and dishonest plans to damage or deceive someone",
    "sentence": "The corporate rivals were secretly {{BLANK}} to steal the technology manufacturer's new software framework.",
    "cn": "那些商業對手正在秘密策劃，企圖竊取這家科技製造商全新的軟體架構。"
  },
  {
    "word": "strategy",
    "pos": "n.",
    "cn_def": "策略；戰略",
    "en_def": "a detailed plan for achieving success in business, war, or a long-term goal",
    "sentence": "The tech company developed a clever marketing {{BLANK}} to capture a larger slice of the competitive market.",
    "cn": "這家科技公司制定了聰明的行銷策略，以在競爭激烈的市場中獲取更大的份額。"
  },
  {
    "word": "business strategy",
    "pos": "n.",
    "cn_def": "商業策略",
    "en_def": "a clear plan that helps a commercial company achieve its long-term financial objectives",
    "sentence": "The board spent hours discussing a new {{BLANK}} to minimize operational costs and maximize revenue.",
    "cn": "董事會花了幾個小時討論一項新的商業策略，以將營運成本降至最低並實現營收最大化。"
  },
  {
    "word": "strategic",
    "pos": "adj.",
    "cn_def": "戰略性的；策略上的",
    "en_def": "helping to achieve a plan, especially in a business or political scenario",
    "sentence": "The executive made a {{BLANK}} decision to establish a new regional branch office in downtown Taipei.",
    "cn": "高階主管做出了一個戰略性的決定：在台北市中心成立一個全新的區域分公司。"
  },
  {
    "word": "strategically",
    "pos": "adv.",
    "cn_def": "戰略性地；策略性地",
    "en_def": "in a way that is carefully planned to achieve a specific long-term objective",
    "sentence": "The automated server rooms are {{BLANK}} located across the country to maintain data security and stability.",
    "cn": "自動化伺服器房在全國進行了策略性的佈局，以維持資料的安全與穩定。"
  },
  {
    "word": "strategic location",
    "pos": "n.",
    "cn_def": "戰略要地；極佳的地理位置",
    "en_def": "a dynamic place that provides a distinct advantage in business, transportation, or war",
    "sentence": "Taiwan is situated in a {{BLANK}} in East Asia, which makes it an important center for international trade.",
    "cn": "台灣位於東亞的戰略要地，這使其成為國際貿易的重要中心。"
  },
  {
    "word": "tactics",
    "pos": "n.",
    "cn_def": "戰術；策略；手法",
    "en_def": "a specific action or method planned to achieve a short-term goal",
    "sentence": "The aggressive competitor used clever sales {{BLANK}} to tempt customers into buying the customized product.",
    "cn": "這名具攻擊性的競爭者使用聰明的銷售戰術，以引誘顧客購買這款客製化的產品。"
  },
  {
    "word": "tactical",
    "pos": "adj.",
    "cn_def": "戰術上的；策略性的",
    "en_def": "relating to small-scale, short-term actions done to achieve a larger strategic goal",
    "sentence": "The manager made several {{BLANK}} adjustments to the ad campaign to react swiftly to the changing market.",
    "cn": "經理對廣告宣傳活動進行了幾處戰術上的調整，以對多變的市場做出迅速反應。"
  },
  {
    "word": "technique",
    "pos": "n.",
    "cn_def": "技巧；技術",
    "en_def": "a specialized and practical way of doing an activity that needs skill or training",
    "sentence": "Winning the international competition milestone required great artistic {{BLANK}} and years of diligent practice.",
    "cn": "在國際比賽里程碑中獲勝需要極高的藝術技巧與多年勤奮的練習。"
  },
  {
    "word": "technical",
    "pos": "adj.",
    "cn_def": "技術的；專門的",
    "en_def": "relating to practical skills, automated machinery, or a specialized branch of science",
    "sentence": "The {{BLANK}} software engineer offered a detailed explanation regarding the complex framework of the server.",
    "cn": "這位專門的軟體工程師對伺服器複雜的架構提供了詳細的說明。"
  },
  {
    "word": "method",
    "pos": "n.",
    "cn_def": "方法；方式",
    "en_def": "a systematic and regular way of doing something, especially an academic study",
    "sentence": "Environmental scientists are searching for an objective {{BLANK}} to reduce chemical pollutants in local rivers.",
    "cn": "環境科學家正在尋找一種客觀的方法，以減少當地河流中的化學污染物。"
  },
  {
    "word": "methodical",
    "pos": "adj.",
    "cn_def": "有條理的；井然有序的",
    "en_def": "done in a very orderly, careful, and systematic way, leaving nothing overlooked",
    "sentence": "The experienced detective took a {{BLANK}} approach when he searched the business office for any clues.",
    "cn": "經驗豐富的偵探在商業辦公室搜尋線索時，採取了井然有序的方法。"
  },
  {
    "word": "alternative method",
    "pos": "n.",
    "cn_def": "替代方法",
    "en_def": "a different choice or way of performing an action to achieve the same end",
    "sentence": "The factory developed an {{BLANK}} to manufacture medical equipment during the recent fiscal crisis.",
    "cn": "這家工廠在近期的財政危機中，開發出了一種製造醫療設備的替代方法。"
  },
  {
    "word": "approach",
    "pos": "n.",
    "cn_def": "方法；途徑",
    "en_def": "a systematic method of dealing with a complex matter or an academic task",
    "sentence": "To bridge the generation gap, parents should adopt a more flexible and understanding {{BLANK}} with teenagers.",
    "cn": "為了消除代溝，家長對青少年應該採取一種更具彈性且包容的方法。"
  },
  {
    "word": "approaching",
    "pos": "v.",
    "cn_def": "靠近；接近",
    "en_def": "to come closer to a specific person, place, or dynamic point in time",
    "sentence": "The heavy storm is {{BLANK}} the island, so the government issued a severe weather warning for coastal areas.",
    "cn": "暴風雨正在接近該島，因此政府對沿海地區發布了嚴重的惡劣天氣警告。"
  },
  {
    "word": "approaching",
    "pos": "adj.",
    "cn_def": "逼近的；即將到來的",
    "en_def": "coming closer in space or time; happening very soon",
    "sentence": "The diligent students are studying hard around the clock to prepare themselves for the {{BLANK}} academic exams.",
    "cn": "努力的學生們正全天候地努力學習，以讓自己為即將到來的學術考試做好準備。"
  },
  {
    "word": "minimize",
    "pos": "v.",
    "cn_def": "減到最低；使最小化",
    "en_def": "to reduce something undesirable to the smallest possible amount or degree",
    "sentence": "The new automated safety features are specifically designed to {{BLANK}} the risk of industrial accidents.",
    "cn": "全新自動化安全功能的特殊設計，是為了將工業事故的風險降到最低。"
  },
  {
    "word": "minimal",
    "pos": "adj.",
    "cn_def": "極小的；微小的",
    "en_def": "very small in amount, or the least possible degree allowed or reached",
    "sentence": "The minor computer hacking accident caused only {{BLANK}} damage to the international bank's server.",
    "cn": "這起微小的電腦遭駭事件僅對這家國際銀行的伺服器造成了微小的損害。"
  },
  {
    "word": "minimum",
    "pos": "n. adj.",
    "cn_def": "最低限度；最低的",
    "en_def": "the smallest amount or lowest level of something that is required or possible",
    "sentence": "You will need a {{BLANK}} of forty minutes to walk from here to the central post office.",
    "cn": "從這裡步行到中央郵政總局，你將需要至少四十分鐘的時間。"
  },
  {
    "word": "maximization",
    "pos": "n.",
    "cn_def": "最大化",
    "en_def": "the act of making something as large or great as possible, like profits",
    "sentence": "The primary objective of the corporate merger is the {{BLANK}} of market share and revenue.",
    "cn": "這場企業合併的主要目標是實現市場份額與營收的最大化。"
  },
  {
    "word": "maximize",
    "pos": "v.",
    "cn_def": "加到最大；使最大化",
    "en_def": "to make something as large or great as possible, or to use something fully",
    "sentence": "Each hard-working student tries to {{BLANK}} their study time right before the academic exam.",
    "cn": "每位努力的學生都在學術考試前夕試圖將自己的溫書時間利用到最大。"
  },
  {
    "word": "maximum",
    "pos": "n. adj.",
    "cn_def": "最大的；最高限度的",
    "en_def": "being the greatest or highest possible in amount, intensity, or degree",
    "sentence": "To achieve {{BLANK}} efficiency, the tech firm routinely updates its automated data operating system.",
    "cn": "為了達到最高限度的效率，這家科技公司通常會定期更新其自動化數據作業系統。"
  },
  {
    "word": "particles",
    "pos": "n.",
    "cn_def": "微粒；顆粒",
    "en_def": "a minute portion of matter; a very small piece of something",
    "sentence": "Air pollution contains harmful dust {{BLANK}} that pose a severe threat to our breathing health.",
    "cn": "空氣污染含有有害的灰塵微粒，對我們的呼吸健康造成了嚴重的威脅。"
  },
  {
    "word": "dust particles",
    "pos": "n.",
    "cn_def": "灰塵微粒",
    "en_def": "a tiny speck of dry solid matter floating around in the atmosphere",
    "sentence": "The bright sunlight shone through the window, making thousands of {{BLANK}} visible in the air.",
    "cn": "明亮的陽光透過窗戶照了進來，使空氣中成千上萬的灰塵微粒變得清晰可見。"
  },
  {
    "word": "particulate matter",
    "pos": "n.",
    "cn_def": "懸浮微粒（如 PM2.5）",
    "en_def": "a complex mixture of extremely small particles and liquid droplets in the air",
    "sentence": "Environmental protection agencies are launching campaigns to monitor {{BLANK}} levels in big cities.",
    "cn": "環境保護機構正發起運動，以監測大城市中的懸浮微粒水平。"
  },
  {
    "word": "romantic",
    "pos": "adj.",
    "cn_def": "浪漫的",
    "en_def": "relating to or expressive of love, imagination, and strong emotional feelings",
    "sentence": "The young couple thoroughly enjoyed their {{BLANK}} dinner at a gourmet restaurant by the ocean.",
    "cn": "這對年輕夫婦在海邊的一家精緻餐廳裡非常享受他們的浪漫晚餐。"
  },
  {
    "word": "romance",
    "pos": "n.",
    "cn_def": "浪漫；戀情",
    "en_def": "a feeling of excitement and mystery associated with love; a love affair",
    "sentence": "The historical movie tells a fascinating story of {{BLANK}} and devotion during World War II.",
    "cn": "這部歷史電影講述了一個在第二次世界大戰期間充滿浪漫與奉獻的迷人故事。"
  },
  {
    "word": "romanticize",
    "pos": "v.",
    "cn_def": "使浪漫化；美化",
    "en_def": "to represent something as being better or more exciting than it really is",
    "sentence": "Society tends to {{BLANK}} the dynamic lifestyle of an entrepreneur, overlooking the massive risks involved.",
    "cn": "社會往往會美化企業家的活力生活方式，而忽略了其中涉及的巨大風險。"
  },
  {
    "word": "romanticism",
    "pos": "n.",
    "cn_def": "浪漫主義",
    "en_def": "a historical movement in the arts and literature that emphasized inspiration and emotion",
    "sentence": "The academic scholar gave a brilliant speech regarding the influence of {{BLANK}} on modern oil paintings.",
    "cn": "這位學術學者發表了一場精彩的演講，深入探討了浪漫主義對現代油畫的影響。"
  },
  {
    "word": "romantic relationship",
    "pos": "n.",
    "cn_def": "戀愛關係",
    "en_def": "a close and loving connection between two romantic partners",
    "sentence": "Building a stable {{BLANK}} requires constant cooperation, mutual trust, and effective communication.",
    "cn": "建立穩定的戀愛關係需要持續的合作、相互的信任以及有效的溝通。"
  },
  {
    "word": "realized",
    "pos": "v.",
    "cn_def": "明白",
    "en_def": "to understand a situation clearly",
    "sentence": "The young entrepreneur finally {{BLANK}} that running a business requires lots of patience and strategic planning.",
    "cn": "這位年輕的企業家最終明白，經營一家公司需要大量的耐心和策略規劃。"
  },
  {
    "word": "realized",
    "pos": "v.",
    "cn_def": "實現；使變為現實",
    "en_def": "to achieve something that you have planned or hoped for",
    "sentence": "With strategic planning and wise investment, the company finally {{BLANK}} its long-term financial goals.",
    "cn": "透過策略規劃與明智的投資，這家公司最終實現了其長期的財務目標。"
  },
  {
    "word": "realize a dream",
    "pos": "phr.",
    "cn_def": "實現夢想",
    "en_def": "to make your most desirable hope or ambition become a reality",
    "sentence": "The dedicated chef worked diligently for ten years to {{BLANK}} of opening her own gourmet restaurant.",
    "cn": "這位熱忱的主廚勤奮工作了十年，以實現開設自己精緻餐廳的夢想。"
  },
  {
    "word": "realize their potential",
    "pos": "phr.",
    "cn_def": "發揮潛力",
    "en_def": "to achieve all that you are capable of doing in your career or life",
    "sentence": "The supportive teacher always encourages her students to {{BLANK}} through hard work and diligence.",
    "cn": "這位給予支持的老師總是鼓勵她的學生們透過努力與勤勉來發揮他們的潛力。"
  },
  {
    "word": "realization",
    "pos": "n.",
    "cn_def": "實現；成為現實",
    "en_def": "the act of achieving something that you have planned or hoped for",
    "sentence": "The successful launch of the new online platform was the {{BLANK}} of the engineering staff's hard work.",
    "cn": "全新線上平台的成功推出，是全體工程人員努力工作的實現。"
  },
  {
    "word": "realization",
    "pos": "n.",
    "cn_def": "明白；意識到",
    "en_def": "the state of understanding something clearly, or the act of making a plan real",
    "sentence": "The sudden {{BLANK}} of his operational mistake at work made the manager feel extremely nervous.",
    "cn": "在工作中突然意識到自己的操作錯誤，讓經理感到極其緊張。"
  },
  {
    "word": "came to the realization",
    "pos": "phr.",
    "cn_def": "意識到；明白",
    "en_def": "to gradually understand or become aware of a specific fact or situation",
    "sentence": "After analyzing the latest market data, the businessman {{BLANK}} that his business strategy had to be revised.",
    "cn": "在分析了最新的市場數據後，這位商人意識到他的商業策略必須進行修正。"
  },
  {
    "word": "realistic",
    "pos": "adj.",
    "cn_def": "實際的；現實的；逼真的",
    "en_def": "accepting things as they are and dealing with them in a practical way",
    "sentence": "We must set a {{BLANK}} deadline for the computer software project so that the tech staff won't feel overwhelmed.",
    "cn": "我們必須為這個電腦軟體專案設定一個實際的截止日期，好讓技術人員不會感到不堪重負。"
  },
  {
    "word": "realism",
    "pos": "n.",
    "cn_def": "現實主義",
    "en_def": "a style of art or literature that shows things as they are in real life",
    "sentence": "The historic art gallery displays several classic oil paintings that represent the beauty of nineteenth-century {{BLANK}}.",
    "cn": "這家歷史悠久的藝廊展示了幾幅呈現十九世紀現實主義之美的經典油畫。"
  },
  {
    "word": "practical",
    "pos": "adj.",
    "cn_def": "實用的；實際的；務實的",
    "en_def": "relating to experience, real situations, or actions rather than ideas or theories",
    "sentence": "The supportive teacher focused on teaching {{BLANK}} language skills that students can use in regular daily life.",
    "cn": "給予支持的老師專注於教授學生可以在日常生活中使用的實用語言技能。"
  },
  {
    "word": "feasible",
    "pos": "adj.",
    "cn_def": "可行的；行得通的",
    "en_def": "possible to do easily or conveniently; able to be achieved successfully",
    "sentence": "After analyzing the latest market data, the board decided that the new promotional campaign was completely {{BLANK}}.",
    "cn": "在分析了最新的市場數據後，董事會判定這項全新的促銷活動是完全可行的。"
  },
  {
    "word": "unfeasible",
    "pos": "adj.",
    "cn_def": "不可行的",
    "en_def": "not practical or convenient; impossible to achieve successfully under a specific framework",
    "sentence": "Launching the automated platform this Friday evening is {{BLANK}} because the server room is still undergoing inspection.",
    "cn": "本週五晚上推出自動化平台是不可行的，因為伺服器房目前仍在接受檢查。"
  },
  {
    "word": "feasibility",
    "pos": "n.",
    "cn_def": "可行性",
    "en_def": "the state or degree of being easily or conveniently done; practical possibility",
    "sentence": "The private research institute conducted a thorough study to evaluate the economic {{BLANK}} of the alternative method.",
    "cn": "這家私人研究所進行了一項徹底的研究，以評估該替代方法的經濟可行性。"
  },
  {
    "word": "impress",
    "pos": "v.",
    "cn_def": "給...留下深刻印象",
    "en_def": "to cause someone to admire or respect you because of your exceptional skills",
    "sentence": "The young pianist tried her best to {{BLANK}} the panel of judges during the classical music recital.",
    "cn": "這位年輕的鋼琴家在古典音樂獨奏會上盡最大努力，試圖給評審團留下深刻印象。"
  },
  {
    "word": "impressive",
    "pos": "adj.",
    "cn_def": "令人印象深刻的；雄偉壯麗的",
    "en_def": "making a strong impression; causing admiration because of being exceptionally good",
    "sentence": "The ancient cathedral features an {{BLANK}} architectural design that instantly captures every tourist's imagination.",
    "cn": "這座古老的大教堂以令人印象深刻的建築設計為特色，立刻擄獲了每位遊客的想像力。"
  },
  {
    "word": "impressed",
    "pos": "adj.",
    "cn_def": "感到印象深刻的",
    "en_def": "feeling admiration, respect, or strong approval toward someone or something",
    "sentence": "The conservative board members were deeply {{BLANK}} by your innovative business strategy for the online platform.",
    "cn": "保守的董事會成員對您針對線上平台所提出的創新商業策略感到印象深刻。"
  },
  {
    "word": "was thoroughly impressed with",
    "pos": "phr.",
    "cn_def": "對...留下深刻印象；佩服",
    "en_def": "to feel deep admiration or respect for a person's skill or an object's quality",
    "sentence": "I {{BLANK}} the exceptional hospitality and traditional cuisine provided by the local family.",
    "cn": "我對這家人所提供的格外熱情好客與傳統料理留下了由衷深刻的印象。"
  },
  {
    "word": "impressions",
    "pos": "n.",
    "cn_def": "印象",
    "en_def": "an idea, feeling, or opinion about something, especially one formed without much thought",
    "sentence": "First {{BLANK}} are very important when you are interviewing for a high-paying professional career path.",
    "cn": "當你在面試一份高薪的專業職業生涯道路時，第一印象是非常重要的。"
  },
  {
    "word": "makeleave an impression on",
    "pos": "phr.",
    "cn_def": "給...留下印象",
    "en_def": "to cause someone to notice, admire, or remember you strongly",
    "sentence": "The diligent intern managed to {{BLANK}} the chairman during the strategic presentation.",
    "cn": "這位勤奮的實習生在策略簡報期間成功給主席留下了深刻的印象。"
  },
  {
    "word": "impressionism",
    "pos": "n.",
    "cn_def": "印象派；印象主義",
    "en_def": "a style of modern painting that focuses on the visual effects of light and color",
    "sentence": "The academic scholar gave a brilliant speech regarding the historical development of French {{BLANK}} in the late nineteenth century.",
    "cn": "這位學術學者發表了一場精彩的演講，探討了十九世紀末法國印象派的歷史發展。"
  },
  {
    "word": "impressionist",
    "pos": "n.",
    "cn_def": "印象派畫家",
    "en_def": "an artist or painter who paints in the style of impressionism",
    "sentence": "Monet is a world-famous {{BLANK}} whose unique techniques influenced many generations of modern artists.",
    "cn": "莫內是一位聞名世界的印象派畫家，他獨特的技巧影響了許多世代的現代藝術家。"
  }
];

const MCQS = [
  {
    "q": "The dedicated priest traveled to many remote mountain villages to ______ the gospel to local residents.",
    "options": [
      "maximize",
      "approaching",
      "preach",
      "minimize"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "I wish my traditional parents would stop ______ at me about how I should manage my monthly salary.",
    "options": [
      "preaching",
      "realized",
      "worship",
      "prayed"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The eloquent ______ captured the entire audience's imagination during his inspiring Sunday sermon.",
    "options": [
      "region",
      "particles",
      "Buddhism",
      "preacher"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Good educators should always ______, showing high moral principles to young children.",
    "options": [
      "strategic location",
      "preach what one practices",
      "unfeasible",
      "religious ritual"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The anxious parents ______ tonight that their daughter would survive the complex medical operation safely.",
    "options": [
      "approaching",
      "impress",
      "maximize",
      "prayed"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Farmers in the agricultural community gathered at the shrine to ______ a mild summer with plenty of rainfall.",
    "options": [
      "religious ritual",
      "pray for",
      "preach what one practices",
      "realize a dream"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The priest led the congregation in a deeply earnest ______ for world peace and cultural tolerance.",
    "options": [
      "Christianity",
      "impressions",
      "prayer",
      "realism"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Ancient people used to ______ the sun and the moon as powerful gods that controlled the agricultural harvest.",
    "options": [
      "worship",
      "romanticize",
      "maximize",
      "prayed"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The giant stone cathedral is a historic place of ______ where hundreds of citizens gather every Sunday morning.",
    "options": [
      "Buddhism",
      "method",
      "scheme",
      "worship"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The ancient temple was crammed with eager ______ who brought fresh fruit and fragrant lilies as ornaments.",
    "options": [
      "temple",
      "tactics",
      "worshippers",
      "impressions"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Our national government guarantees ______ as a fundamental human right for every minority group.",
    "options": [
      "freedom of worship",
      "religious beliefs",
      "romantic relationship",
      "practice religion"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The exhausted ______ finally reached the mountain shrine after walking diligently across the rough landscape for weeks.",
    "options": [
      "scheme",
      "pilgrims",
      "impressions",
      "tactics"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Making an annual ______ to the ancient cathedral is an important routine for many traditional families in Europe.",
    "options": [
      "scheme",
      "impressions",
      "strategy",
      "pilgrimage"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The historic temple includes a small marble ______ that is beautifully ornamented with golden beads and pearls.",
    "options": [
      "shrine",
      "preacher",
      "religion",
      "pilgrims"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The archaeologist discovered a rare ancient statue inside the stone ______ that left the research staff completely speechless.",
    "options": [
      "Christian",
      "temple",
      "Islam",
      "prayer"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The elderly scholar spent his entire academic career studying the social impact of modern ______ on Asian culture.",
    "options": [
      "approach",
      "worshippers",
      "Buddhism",
      "temple"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "It took almost one hundred years to construct the giant stone ______ that defines the city's modern cityscape.",
    "options": [
      "temple",
      "cathedral",
      "prayer",
      "romance"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The history textbook provides a general framework for understanding how ______ spread across the European continent.",
    "options": [
      "realization",
      "worshippers",
      "Christianity",
      "impressionism"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The dedicated ______ routinely attends church services every Sunday to offer earnest prayers for his family.",
    "options": [
      "Christian",
      "particles",
      "strategy",
      "temple"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The historic town is world-famous for its magnificent ______ architecture and well-preserved ancient structures.",
    "options": [
      "minimal",
      "romantic",
      "tactical",
      "Christian"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The architectural design of the new ______ features elegant symmetry and a beautiful white marble dome.",
    "options": [
      "region",
      "mosque",
      "impressionist",
      "romanticism"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Learning the fundamental principles of ______ is necessary for building cultural tolerance and mutual respect in society.",
    "options": [
      "worship",
      "religion",
      "maximization",
      "Islam"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The gallery displays a valuable collection of ______ art that dates back to the eighth century.",
    "options": [
      "Islamic",
      "religious",
      "methodical",
      "Christian"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The prime minister stated firmly that the government should not discriminate against citizens based on their ______.",
    "options": [
      "tactics",
      "worshippers",
      "religion",
      "shrine"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The historic temple is of great importance to the country's ______ heritage and ancient traditions.",
    "options": [
      "religious",
      "approaching",
      "realistic",
      "minimum"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Performing the ancient ______ requires immense precision and a deep understanding of traditional principles.",
    "options": [
      "unfeasible",
      "freedom of worship",
      "religious ritual",
      "preach what one practices"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Fasting during specific months is an important ______ that is common in many different cultures worldwide.",
    "options": [
      "religious ritual",
      "religious practice",
      "strategic location",
      "came to the realization"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The law ensures that large companies cannot refuse admission to employees on the grounds of their ______.",
    "options": [
      "religious ritual",
      "was thoroughly impressed with",
      "strategic location",
      "religious beliefs"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The constitution guarantees that every minority group has the clear legal right to ______ freely.",
    "options": [
      "business strategy",
      "practice religion",
      "pray for",
      "particulate matter"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The agricultural ______ suffered severe economic losses after an unexpected summer ice storm damaged the crops.",
    "options": [
      "region",
      "strategy",
      "pilgrims",
      "impressionism"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The company decided to establish a new ______ office in Taipei to manage its expanding commercial affairs.",
    "options": [
      "technical",
      "minimum",
      "maximum",
      "regional"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The city government introduced an innovative ______ to improve public transportation and minimize traffic.",
    "options": [
      "approach",
      "Buddhism",
      "scheme",
      "realism"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The clever financial ______ designed by the suspect tempted many innocent elderly citizens into investing.",
    "options": [
      "pilgrimage",
      "maximization",
      "pilgrims",
      "scheme"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The corporate rivals were secretly ______ to steal the technology manufacturer's new software framework.",
    "options": [
      "worship",
      "preaching",
      "scheming",
      "realized"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The tech company developed a clever marketing ______ to capture a larger slice of the competitive market.",
    "options": [
      "strategy",
      "mosque",
      "realism",
      "approach"
    ],
    "answer": 0,
    "vocabIndex": 34
  },
  {
    "q": "The board spent hours discussing a new ______ to minimize operational costs and maximize revenue.",
    "options": [
      "realize their potential",
      "business strategy",
      "makeleave an impression on",
      "religious practice"
    ],
    "answer": 1,
    "vocabIndex": 35
  },
  {
    "q": "The executive made a ______ decision to establish a new regional branch office in downtown Taipei.",
    "options": [
      "strategic",
      "realistic",
      "religious",
      "technical"
    ],
    "answer": 0,
    "vocabIndex": 36
  },
  {
    "q": "The automated server rooms are ______ located across the country to maintain data security and stability.",
    "options": [
      "religion",
      "strategic",
      "romantic",
      "strategically"
    ],
    "answer": 3,
    "vocabIndex": 37
  },
  {
    "q": "Taiwan is situated in a ______ in East Asia, which makes it an important center for international trade.",
    "options": [
      "came to the realization",
      "strategic location",
      "religious practice",
      "makeleave an impression on"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "The aggressive competitor used clever sales ______ to tempt customers into buying the customized product.",
    "options": [
      "cathedral",
      "shrine",
      "tactics",
      "worshippers"
    ],
    "answer": 2,
    "vocabIndex": 39
  },
  {
    "q": "The manager made several ______ adjustments to the ad campaign to react swiftly to the changing market.",
    "options": [
      "tactical",
      "maximum",
      "impressed",
      "strategic"
    ],
    "answer": 0,
    "vocabIndex": 40
  },
  {
    "q": "Winning the international competition milestone required great artistic ______ and years of diligent practice.",
    "options": [
      "worshippers",
      "religion",
      "impressionism",
      "technique"
    ],
    "answer": 3,
    "vocabIndex": 41
  },
  {
    "q": "The ______ software engineer offered a detailed explanation regarding the complex framework of the server.",
    "options": [
      "religious",
      "impressive",
      "technical",
      "methodical"
    ],
    "answer": 2,
    "vocabIndex": 42
  },
  {
    "q": "Environmental scientists are searching for an objective ______ to reduce chemical pollutants in local rivers.",
    "options": [
      "temple",
      "method",
      "feasibility",
      "cathedral"
    ],
    "answer": 1,
    "vocabIndex": 43
  },
  {
    "q": "The experienced detective took a ______ approach when he searched the business office for any clues.",
    "options": [
      "impressive",
      "impressed",
      "methodical",
      "approaching"
    ],
    "answer": 2,
    "vocabIndex": 44
  },
  {
    "q": "The factory developed an ______ to manufacture medical equipment during the recent fiscal crisis.",
    "options": [
      "pray for",
      "alternative method",
      "particulate matter",
      "realize a dream"
    ],
    "answer": 1,
    "vocabIndex": 45
  },
  {
    "q": "To bridge the generation gap, parents should adopt a more flexible and understanding ______ with teenagers.",
    "options": [
      "impressionist",
      "Islam",
      "prayer",
      "approach"
    ],
    "answer": 3,
    "vocabIndex": 46
  },
  {
    "q": "The heavy storm is ______ the island, so the government issued a severe weather warning for coastal areas.",
    "options": [
      "approaching",
      "minimize",
      "preaching",
      "scheming"
    ],
    "answer": 0,
    "vocabIndex": 47
  },
  {
    "q": "The diligent students are studying hard around the clock to prepare themselves for the ______ academic exams.",
    "options": [
      "methodical",
      "approaching",
      "Islamic",
      "technical"
    ],
    "answer": 1,
    "vocabIndex": 48
  },
  {
    "q": "The new automated safety features are specifically designed to ______ the risk of industrial accidents.",
    "options": [
      "minimize",
      "approaching",
      "preach",
      "worship"
    ],
    "answer": 0,
    "vocabIndex": 49
  },
  {
    "q": "The minor computer hacking accident caused only ______ damage to the international bank's server.",
    "options": [
      "impressive",
      "tactical",
      "impressed",
      "minimal"
    ],
    "answer": 3,
    "vocabIndex": 50
  },
  {
    "q": "You will need a ______ of forty minutes to walk from here to the central post office.",
    "options": [
      "strategic",
      "tactical",
      "minimum",
      "maximum"
    ],
    "answer": 2,
    "vocabIndex": 51
  },
  {
    "q": "The primary objective of the corporate merger is the ______ of market share and revenue.",
    "options": [
      "Buddhism",
      "realization",
      "romanticism",
      "maximization"
    ],
    "answer": 3,
    "vocabIndex": 52
  },
  {
    "q": "Each hard-working student tries to ______ their study time right before the academic exam.",
    "options": [
      "minimize",
      "maximize",
      "preaching",
      "realized"
    ],
    "answer": 1,
    "vocabIndex": 53
  },
  {
    "q": "To achieve ______ efficiency, the tech firm routinely updates its automated data operating system.",
    "options": [
      "realistic",
      "Islamic",
      "maximum",
      "practical"
    ],
    "answer": 2,
    "vocabIndex": 54
  },
  {
    "q": "Air pollution contains harmful dust ______ that pose a severe threat to our breathing health.",
    "options": [
      "particles",
      "Christian",
      "prayer",
      "romance"
    ],
    "answer": 0,
    "vocabIndex": 55
  },
  {
    "q": "The bright sunlight shone through the window, making thousands of ______ visible in the air.",
    "options": [
      "alternative method",
      "strategic location",
      "dust particles",
      "unfeasible"
    ],
    "answer": 2,
    "vocabIndex": 56
  },
  {
    "q": "Environmental protection agencies are launching campaigns to monitor ______ levels in big cities.",
    "options": [
      "particulate matter",
      "religious ritual",
      "realize a dream",
      "religious beliefs"
    ],
    "answer": 0,
    "vocabIndex": 57
  },
  {
    "q": "The young couple thoroughly enjoyed their ______ dinner at a gourmet restaurant by the ocean.",
    "options": [
      "regional",
      "minimal",
      "impressed",
      "romantic"
    ],
    "answer": 3,
    "vocabIndex": 58
  },
  {
    "q": "The historical movie tells a fascinating story of ______ and devotion during World War II.",
    "options": [
      "mosque",
      "romance",
      "tactics",
      "technique"
    ],
    "answer": 1,
    "vocabIndex": 59
  },
  {
    "q": "Society tends to ______ the dynamic lifestyle of an entrepreneur, overlooking the massive risks involved.",
    "options": [
      "approaching",
      "impress",
      "preach",
      "romanticize"
    ],
    "answer": 3,
    "vocabIndex": 60
  },
  {
    "q": "The academic scholar gave a brilliant speech regarding the influence of ______ on modern oil paintings.",
    "options": [
      "romanticism",
      "approach",
      "impressionist",
      "cathedral"
    ],
    "answer": 0,
    "vocabIndex": 61
  },
  {
    "q": "Building a stable ______ requires constant cooperation, mutual trust, and effective communication.",
    "options": [
      "realize their potential",
      "romantic relationship",
      "freedom of worship",
      "particulate matter"
    ],
    "answer": 1,
    "vocabIndex": 62
  },
  {
    "q": "The young entrepreneur finally ______ that running a business requires lots of patience and strategic planning.",
    "options": [
      "worship",
      "romanticize",
      "realized",
      "approaching"
    ],
    "answer": 2,
    "vocabIndex": 63
  },
  {
    "q": "With strategic planning and wise investment, the company finally ______ its long-term financial goals.",
    "options": [
      "preach",
      "approaching",
      "scheming",
      "realized"
    ],
    "answer": 3,
    "vocabIndex": 64
  },
  {
    "q": "The dedicated chef worked diligently for ten years to ______ of opening her own gourmet restaurant.",
    "options": [
      "strategic location",
      "religious beliefs",
      "realize a dream",
      "freedom of worship"
    ],
    "answer": 2,
    "vocabIndex": 65
  },
  {
    "q": "The supportive teacher always encourages her students to ______ through hard work and diligence.",
    "options": [
      "came to the realization",
      "realize their potential",
      "dust particles",
      "alternative method"
    ],
    "answer": 1,
    "vocabIndex": 66
  },
  {
    "q": "The successful launch of the new online platform was the ______ of the engineering staff's hard work.",
    "options": [
      "realization",
      "technique",
      "particles",
      "realism"
    ],
    "answer": 0,
    "vocabIndex": 67
  },
  {
    "q": "The sudden ______ of his operational mistake at work made the manager feel extremely nervous.",
    "options": [
      "particles",
      "realization",
      "technique",
      "worship"
    ],
    "answer": 1,
    "vocabIndex": 68
  },
  {
    "q": "After analyzing the latest market data, the businessman ______ that his business strategy had to be revised.",
    "options": [
      "came to the realization",
      "dust particles",
      "romantic relationship",
      "religious practice"
    ],
    "answer": 0,
    "vocabIndex": 69
  },
  {
    "q": "We must set a ______ deadline for the computer software project so that the tech staff won't feel overwhelmed.",
    "options": [
      "impressed",
      "approaching",
      "realistic",
      "Christian"
    ],
    "answer": 2,
    "vocabIndex": 70
  },
  {
    "q": "The historic art gallery displays several classic oil paintings that represent the beauty of nineteenth-century ______.",
    "options": [
      "cathedral",
      "pilgrimage",
      "approach",
      "realism"
    ],
    "answer": 3,
    "vocabIndex": 71
  },
  {
    "q": "The supportive teacher focused on teaching ______ language skills that students can use in regular daily life.",
    "options": [
      "impressive",
      "maximum",
      "practical",
      "regional"
    ],
    "answer": 2,
    "vocabIndex": 72
  },
  {
    "q": "After analyzing the latest market data, the board decided that the new promotional campaign was completely ______.",
    "options": [
      "realistic",
      "impressive",
      "practical",
      "feasible"
    ],
    "answer": 3,
    "vocabIndex": 73
  },
  {
    "q": "Launching the automated platform this Friday evening is ______ because the server room is still undergoing inspection.",
    "options": [
      "dust particles",
      "unfeasible",
      "business strategy",
      "religious practice"
    ],
    "answer": 1,
    "vocabIndex": 74
  },
  {
    "q": "The private research institute conducted a thorough study to evaluate the economic ______ of the alternative method.",
    "options": [
      "feasibility",
      "prayer",
      "scheme",
      "impressions"
    ],
    "answer": 0,
    "vocabIndex": 75
  },
  {
    "q": "The young pianist tried her best to ______ the panel of judges during the classical music recital.",
    "options": [
      "worship",
      "preach",
      "scheming",
      "impress"
    ],
    "answer": 3,
    "vocabIndex": 76
  },
  {
    "q": "The ancient cathedral features an ______ architectural design that instantly captures every tourist's imagination.",
    "options": [
      "romantic",
      "impressed",
      "impressive",
      "tactical"
    ],
    "answer": 2,
    "vocabIndex": 77
  },
  {
    "q": "The conservative board members were deeply ______ by your innovative business strategy for the online platform.",
    "options": [
      "tactical",
      "impressed",
      "regional",
      "minimal"
    ],
    "answer": 1,
    "vocabIndex": 78
  },
  {
    "q": "I ______ the exceptional hospitality and traditional cuisine provided by the local family.",
    "options": [
      "was thoroughly impressed with",
      "preach what one practices",
      "romantic relationship",
      "realize a dream"
    ],
    "answer": 0,
    "vocabIndex": 79
  },
  {
    "q": "First ______ are very important when you are interviewing for a high-paying professional career path.",
    "options": [
      "romanticism",
      "impressions",
      "realization",
      "pilgrims"
    ],
    "answer": 1,
    "vocabIndex": 80
  },
  {
    "q": "The diligent intern managed to ______ the chairman during the strategic presentation.",
    "options": [
      "dust particles",
      "religious beliefs",
      "makeleave an impression on",
      "unfeasible"
    ],
    "answer": 2,
    "vocabIndex": 81
  },
  {
    "q": "The academic scholar gave a brilliant speech regarding the historical development of French ______ in the late nineteenth century.",
    "options": [
      "pilgrimage",
      "cathedral",
      "shrine",
      "impressionism"
    ],
    "answer": 3,
    "vocabIndex": 82
  },
  {
    "q": "Monet is a world-famous ______ whose unique techniques influenced many generations of modern artists.",
    "options": [
      "impressionist",
      "shrine",
      "Christian",
      "approach"
    ],
    "answer": 0,
    "vocabIndex": 83
  }
];

const LOOKUP = {
  "preach": {
    "pos": "v.",
    "en_def": "to deliver a religious sermon or talk to an audience",
    "cn_def": "傳教；宣講",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to deliver a religious sermon or talk to an audience",
        "cn_def": "傳教；宣講"
      },
      {
        "pos": "v.",
        "en_def": "to give moral advice to someone in an annoying or forcefully repetitive way",
        "cn_def": "說教"
      }
    ]
  },
  "preaching": {
    "pos": "v.",
    "en_def": "to give moral advice to someone in an annoying or forcefully repetitive way",
    "cn_def": "說教",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give moral advice to someone in an annoying or forcefully repetitive way",
        "cn_def": "說教"
      }
    ]
  },
  "preacher": {
    "pos": "n.",
    "en_def": "a person who delivers sermons or religious talks as an occupation",
    "cn_def": "傳教士；說教者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who delivers sermons or religious talks as an occupation",
        "cn_def": "傳教士；說教者"
      }
    ]
  },
  "preach what one practices": {
    "pos": "phr.",
    "en_def": "to behave in a way that matches the moral advice that one gives to others",
    "cn_def": "言行一致；身體力行",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to behave in a way that matches the moral advice that one gives to others",
        "cn_def": "言行一致；身體力行"
      }
    ]
  },
  "prayed": {
    "pos": "v.",
    "en_def": "to speak to a god or a holy power to give thanks or ask for help",
    "cn_def": "祈禱；祈求",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to speak to a god or a holy power to give thanks or ask for help",
        "cn_def": "祈禱；祈求"
      }
    ]
  },
  "pray": {
    "pos": "v.",
    "en_def": "to speak to a god or a holy power to give thanks or ask for help",
    "cn_def": "祈禱；祈求",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to speak to a god or a holy power to give thanks or ask for help",
        "cn_def": "祈禱；祈求"
      }
    ]
  },
  "pray for": {
    "pos": "phr.",
    "en_def": "to make a specific request to a higher power for peace, health, or rain",
    "cn_def": "為...祈禱；祈求",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make a specific request to a higher power for peace, health, or rain",
        "cn_def": "為...祈禱；祈求"
      }
    ]
  },
  "prayer": {
    "pos": "n.",
    "en_def": "the words spoken when speaking to a god, or the act of praying",
    "cn_def": "祈禱；禱詞",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the words spoken when speaking to a god, or the act of praying",
        "cn_def": "祈禱；禱詞"
      }
    ]
  },
  "worship": {
    "pos": "v.",
    "en_def": "to show strong religious love and respect to a god or a holy power",
    "cn_def": "敬拜；信奉；崇拜",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to show strong religious love and respect to a god or a holy power",
        "cn_def": "敬拜；信奉；崇拜"
      },
      {
        "pos": "n.",
        "en_def": "the act of showing strong religious love and respect to a god",
        "cn_def": "敬拜；禮拜；崇拜"
      }
    ]
  },
  "worshippers": {
    "pos": "n.",
    "en_def": "a person who goes to a religious building to show respect to a god",
    "cn_def": "朝拜者；信徒",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who goes to a religious building to show respect to a god",
        "cn_def": "朝拜者；信徒"
      }
    ]
  },
  "worshipper": {
    "pos": "n.",
    "en_def": "a person who goes to a religious building to show respect to a god",
    "cn_def": "朝拜者；信徒",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who goes to a religious building to show respect to a god",
        "cn_def": "朝拜者；信徒"
      }
    ]
  },
  "freedom of worship": {
    "pos": "n.",
    "en_def": "the legal right of citizens to practice any religion they choose",
    "cn_def": "信仰自由",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the legal right of citizens to practice any religion they choose",
        "cn_def": "信仰自由"
      }
    ]
  },
  "pilgrim": {
    "pos": "n.",
    "en_def": "a person who travels to a holy place for serious religious reasons",
    "cn_def": "朝聖者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who travels to a holy place for serious religious reasons",
        "cn_def": "朝聖者"
      }
    ]
  },
  "pilgrims": {
    "pos": "n.",
    "en_def": "a person who travels to a holy place for serious religious reasons",
    "cn_def": "朝聖者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who travels to a holy place for serious religious reasons",
        "cn_def": "朝聖者"
      }
    ]
  },
  "pilgrimage": {
    "pos": "n.",
    "en_def": "a long journey to a holy place made by a religious person",
    "cn_def": "朝聖之旅",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a long journey to a holy place made by a religious person",
        "cn_def": "朝聖之旅"
      }
    ]
  },
  "shrine": {
    "pos": "n.",
    "en_def": "a holy place for worship, often associated with a choice saint or ancestor",
    "cn_def": "神龕；聖地；神廟",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a holy place for worship, often associated with a choice saint or ancestor",
        "cn_def": "神龕；聖地；神廟"
      }
    ]
  },
  "temple": {
    "pos": "n.",
    "en_def": "a building used for religious worship, especially in Buddhism or Hinduism",
    "cn_def": "寺廟；廟宇",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a building used for religious worship, especially in Buddhism or Hinduism",
        "cn_def": "寺廟；廟宇"
      }
    ]
  },
  "buddhism": {
    "pos": "n.",
    "en_def": "an eastern religion based on the original teachings of Siddhartha Gautama",
    "cn_def": "佛教",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an eastern religion based on the original teachings of Siddhartha Gautama",
        "cn_def": "佛教"
      }
    ]
  },
  "cathedral": {
    "pos": "n.",
    "en_def": "a very large and grand stone church, typically the main church in an area",
    "cn_def": "大教堂",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a very large and grand stone church, typically the main church in an area",
        "cn_def": "大教堂"
      }
    ]
  },
  "christianity": {
    "pos": "n.",
    "en_def": "a western religion based on the life and teachings of Jesus Christ",
    "cn_def": "基督教",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a western religion based on the life and teachings of Jesus Christ",
        "cn_def": "基督教"
      }
    ]
  },
  "christian": {
    "pos": "n.",
    "en_def": "a person who believes in Christianity and follows its teachings",
    "cn_def": "基督徒",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who believes in Christianity and follows its teachings",
        "cn_def": "基督徒"
      },
      {
        "pos": "adj.",
        "en_def": "relating to or associated with Christianity or its historical traditions",
        "cn_def": "基督教的"
      }
    ]
  },
  "mosque": {
    "pos": "n.",
    "en_def": "a building where Muslims gather together to perform religious worship",
    "cn_def": "清真寺",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a building where Muslims gather together to perform religious worship",
        "cn_def": "清真寺"
      }
    ]
  },
  "islam": {
    "pos": "n.",
    "en_def": "the religion of Muslims, based on the words and teachings of Muhammad",
    "cn_def": "伊斯蘭教",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the religion of Muslims, based on the words and teachings of Muhammad",
        "cn_def": "伊斯蘭教"
      }
    ]
  },
  "islamic": {
    "pos": "adj.",
    "en_def": "relating to or characteristic of Islam, its culture, or its people",
    "cn_def": "伊斯蘭的；伊斯蘭教的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to or characteristic of Islam, its culture, or its people",
        "cn_def": "伊斯蘭的；伊斯蘭教的"
      }
    ]
  },
  "religion": {
    "pos": "n.",
    "en_def": "a systematic belief in and worship of a god or a higher spiritual power",
    "cn_def": "宗教",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a systematic belief in and worship of a god or a higher spiritual power",
        "cn_def": "宗教"
      }
    ]
  },
  "religious": {
    "pos": "adj.",
    "en_def": "relating to religion, or showing a strong dedication to a spiritual belief",
    "cn_def": "宗教的；虔誠的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to religion, or showing a strong dedication to a spiritual belief",
        "cn_def": "宗教的；虔誠的"
      }
    ]
  },
  "religious ritual": {
    "pos": "n.",
    "en_def": "a set of fixed actions performed regularly as part of a formal ceremony",
    "cn_def": "宗教儀式",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a set of fixed actions performed regularly as part of a formal ceremony",
        "cn_def": "宗教儀式"
      }
    ]
  },
  "religious practice": {
    "pos": "n.",
    "en_def": "an action or habit that is commonly done as part of practicing a religion",
    "cn_def": "宗教習俗；宗教實踐",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an action or habit that is commonly done as part of practicing a religion",
        "cn_def": "宗教習俗；宗教實踐"
      }
    ]
  },
  "religious beliefs": {
    "pos": "n.",
    "en_def": "a firm spiritual conviction or faith that is based on a specific religion",
    "cn_def": "宗教信仰",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a firm spiritual conviction or faith that is based on a specific religion",
        "cn_def": "宗教信仰"
      }
    ]
  },
  "religious belief": {
    "pos": "n.",
    "en_def": "a firm spiritual conviction or faith that is based on a specific religion",
    "cn_def": "宗教信仰",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a firm spiritual conviction or faith that is based on a specific religion",
        "cn_def": "宗教信仰"
      }
    ]
  },
  "practice religion": {
    "pos": "phr.",
    "en_def": "to actively perform the rituals and follow the rules of a spiritual belief",
    "cn_def": "信仰宗教；實踐宗教儀式",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to actively perform the rituals and follow the rules of a spiritual belief",
        "cn_def": "信仰宗教；實踐宗教儀式"
      }
    ]
  },
  "region": {
    "pos": "n.",
    "en_def": "a distinctive area or division of a country or part of the world",
    "cn_def": "地區；區域",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a distinctive area or division of a country or part of the world",
        "cn_def": "地區；區域"
      }
    ]
  },
  "regional": {
    "pos": "adj.",
    "en_def": "relating to or characteristic of a specific area, district, or territory",
    "cn_def": "地區的；區域性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to or characteristic of a specific area, district, or territory",
        "cn_def": "地區的；區域性的"
      }
    ]
  },
  "scheme": {
    "pos": "n.",
    "en_def": "a large-scale systematic plan or arrangement for attaining a specific object",
    "cn_def": "方案；計劃",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large-scale systematic plan or arrangement for attaining a specific object",
        "cn_def": "方案；計劃"
      },
      {
        "pos": "n.",
        "en_def": "a secret and dishonest plan or plot manufactured to deceive others",
        "cn_def": "陰謀；詭計"
      },
      {
        "pos": "v.",
        "en_def": "to make secret and dishonest plans to damage or deceive someone",
        "cn_def": "密謀；策劃"
      }
    ]
  },
  "scheming": {
    "pos": "v.",
    "en_def": "to make secret and dishonest plans to damage or deceive someone",
    "cn_def": "密謀；策劃",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make secret and dishonest plans to damage or deceive someone",
        "cn_def": "密謀；策劃"
      }
    ]
  },
  "strategy": {
    "pos": "n.",
    "en_def": "a detailed plan for achieving success in business, war, or a long-term goal",
    "cn_def": "策略；戰略",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a detailed plan for achieving success in business, war, or a long-term goal",
        "cn_def": "策略；戰略"
      }
    ]
  },
  "business strategy": {
    "pos": "n.",
    "en_def": "a clear plan that helps a commercial company achieve its long-term financial objectives",
    "cn_def": "商業策略",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a clear plan that helps a commercial company achieve its long-term financial objectives",
        "cn_def": "商業策略"
      }
    ]
  },
  "strategic": {
    "pos": "adj.",
    "en_def": "helping to achieve a plan, especially in a business or political scenario",
    "cn_def": "戰略性的；策略上的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "helping to achieve a plan, especially in a business or political scenario",
        "cn_def": "戰略性的；策略上的"
      }
    ]
  },
  "strategically": {
    "pos": "adv.",
    "en_def": "in a way that is carefully planned to achieve a specific long-term objective",
    "cn_def": "戰略性地；策略性地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that is carefully planned to achieve a specific long-term objective",
        "cn_def": "戰略性地；策略性地"
      }
    ]
  },
  "strategic location": {
    "pos": "n.",
    "en_def": "a dynamic place that provides a distinct advantage in business, transportation, or war",
    "cn_def": "戰略要地；極佳的地理位置",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a dynamic place that provides a distinct advantage in business, transportation, or war",
        "cn_def": "戰略要地；極佳的地理位置"
      }
    ]
  },
  "tactics": {
    "pos": "n.",
    "en_def": "a specific action or method planned to achieve a short-term goal",
    "cn_def": "戰術；策略；手法",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a specific action or method planned to achieve a short-term goal",
        "cn_def": "戰術；策略；手法"
      }
    ]
  },
  "tactic": {
    "pos": "n.",
    "en_def": "a specific action or method planned to achieve a short-term goal",
    "cn_def": "戰術；策略；手法",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a specific action or method planned to achieve a short-term goal",
        "cn_def": "戰術；策略；手法"
      }
    ]
  },
  "tactical": {
    "pos": "adj.",
    "en_def": "relating to small-scale, short-term actions done to achieve a larger strategic goal",
    "cn_def": "戰術上的；策略性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to small-scale, short-term actions done to achieve a larger strategic goal",
        "cn_def": "戰術上的；策略性的"
      }
    ]
  },
  "technique": {
    "pos": "n.",
    "en_def": "a specialized and practical way of doing an activity that needs skill or training",
    "cn_def": "技巧；技術",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a specialized and practical way of doing an activity that needs skill or training",
        "cn_def": "技巧；技術"
      }
    ]
  },
  "technical": {
    "pos": "adj.",
    "en_def": "relating to practical skills, automated machinery, or a specialized branch of science",
    "cn_def": "技術的；專門的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to practical skills, automated machinery, or a specialized branch of science",
        "cn_def": "技術的；專門的"
      }
    ]
  },
  "method": {
    "pos": "n.",
    "en_def": "a systematic and regular way of doing something, especially an academic study",
    "cn_def": "方法；方式",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a systematic and regular way of doing something, especially an academic study",
        "cn_def": "方法；方式"
      }
    ]
  },
  "methodical": {
    "pos": "adj.",
    "en_def": "done in a very orderly, careful, and systematic way, leaving nothing overlooked",
    "cn_def": "有條理的；井然有序的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "done in a very orderly, careful, and systematic way, leaving nothing overlooked",
        "cn_def": "有條理的；井然有序的"
      }
    ]
  },
  "alternative method": {
    "pos": "n.",
    "en_def": "a different choice or way of performing an action to achieve the same end",
    "cn_def": "替代方法",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a different choice or way of performing an action to achieve the same end",
        "cn_def": "替代方法"
      }
    ]
  },
  "approach": {
    "pos": "n.",
    "en_def": "a systematic method of dealing with a complex matter or an academic task",
    "cn_def": "方法；途徑",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a systematic method of dealing with a complex matter or an academic task",
        "cn_def": "方法；途徑"
      },
      {
        "pos": "v.",
        "en_def": "to come closer to a specific person, place, or dynamic point in time",
        "cn_def": "靠近；接近"
      }
    ]
  },
  "approaching": {
    "pos": "v.",
    "en_def": "to come closer to a specific person, place, or dynamic point in time",
    "cn_def": "靠近；接近",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to come closer to a specific person, place, or dynamic point in time",
        "cn_def": "靠近；接近"
      },
      {
        "pos": "adj.",
        "en_def": "coming closer in space or time; happening very soon",
        "cn_def": "逼近的；即將到來的"
      }
    ]
  },
  "minimize": {
    "pos": "v.",
    "en_def": "to reduce something undesirable to the smallest possible amount or degree",
    "cn_def": "減到最低；使最小化",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to reduce something undesirable to the smallest possible amount or degree",
        "cn_def": "減到最低；使最小化"
      }
    ]
  },
  "minimal": {
    "pos": "adj.",
    "en_def": "very small in amount, or the least possible degree allowed or reached",
    "cn_def": "極小的；微小的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very small in amount, or the least possible degree allowed or reached",
        "cn_def": "極小的；微小的"
      }
    ]
  },
  "minimum": {
    "pos": "n. adj.",
    "en_def": "the smallest amount or lowest level of something that is required or possible",
    "cn_def": "最低限度；最低的",
    "combined": [
      {
        "pos": "n. adj.",
        "en_def": "the smallest amount or lowest level of something that is required or possible",
        "cn_def": "最低限度；最低的"
      }
    ]
  },
  "maximization": {
    "pos": "n.",
    "en_def": "the act of making something as large or great as possible, like profits",
    "cn_def": "最大化",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of making something as large or great as possible, like profits",
        "cn_def": "最大化"
      }
    ]
  },
  "maximize": {
    "pos": "v.",
    "en_def": "to make something as large or great as possible, or to use something fully",
    "cn_def": "加到最大；使最大化",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make something as large or great as possible, or to use something fully",
        "cn_def": "加到最大；使最大化"
      }
    ]
  },
  "maximum": {
    "pos": "n. adj.",
    "en_def": "being the greatest or highest possible in amount, intensity, or degree",
    "cn_def": "最大的；最高限度的",
    "combined": [
      {
        "pos": "n. adj.",
        "en_def": "being the greatest or highest possible in amount, intensity, or degree",
        "cn_def": "最大的；最高限度的"
      }
    ]
  },
  "particle": {
    "pos": "n.",
    "en_def": "a minute portion of matter; a very small piece of something",
    "cn_def": "微粒；顆粒",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a minute portion of matter; a very small piece of something",
        "cn_def": "微粒；顆粒"
      }
    ]
  },
  "particles": {
    "pos": "n.",
    "en_def": "a minute portion of matter; a very small piece of something",
    "cn_def": "微粒；顆粒",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a minute portion of matter; a very small piece of something",
        "cn_def": "微粒；顆粒"
      }
    ]
  },
  "dust particle": {
    "pos": "n.",
    "en_def": "a tiny speck of dry solid matter floating around in the atmosphere",
    "cn_def": "灰塵微粒",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a tiny speck of dry solid matter floating around in the atmosphere",
        "cn_def": "灰塵微粒"
      }
    ]
  },
  "dust particles": {
    "pos": "n.",
    "en_def": "a tiny speck of dry solid matter floating around in the atmosphere",
    "cn_def": "灰塵微粒",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a tiny speck of dry solid matter floating around in the atmosphere",
        "cn_def": "灰塵微粒"
      }
    ]
  },
  "particulate matter": {
    "pos": "n.",
    "en_def": "a complex mixture of extremely small particles and liquid droplets in the air",
    "cn_def": "懸浮微粒（如 PM2.5）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a complex mixture of extremely small particles and liquid droplets in the air",
        "cn_def": "懸浮微粒（如 PM2.5）"
      }
    ]
  },
  "romantic": {
    "pos": "adj.",
    "en_def": "relating to or expressive of love, imagination, and strong emotional feelings",
    "cn_def": "浪漫的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to or expressive of love, imagination, and strong emotional feelings",
        "cn_def": "浪漫的"
      }
    ]
  },
  "romance": {
    "pos": "n.",
    "en_def": "a feeling of excitement and mystery associated with love; a love affair",
    "cn_def": "浪漫；戀情",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling of excitement and mystery associated with love; a love affair",
        "cn_def": "浪漫；戀情"
      }
    ]
  },
  "romanticize": {
    "pos": "v.",
    "en_def": "to represent something as being better or more exciting than it really is",
    "cn_def": "使浪漫化；美化",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to represent something as being better or more exciting than it really is",
        "cn_def": "使浪漫化；美化"
      }
    ]
  },
  "romanticism": {
    "pos": "n.",
    "en_def": "a historical movement in the arts and literature that emphasized inspiration and emotion",
    "cn_def": "浪漫主義",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a historical movement in the arts and literature that emphasized inspiration and emotion",
        "cn_def": "浪漫主義"
      }
    ]
  },
  "romantic relationship": {
    "pos": "n.",
    "en_def": "a close and loving connection between two romantic partners",
    "cn_def": "戀愛關係",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a close and loving connection between two romantic partners",
        "cn_def": "戀愛關係"
      }
    ]
  },
  "realize": {
    "pos": "v.",
    "en_def": "to understand a situation clearly",
    "cn_def": "明白",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to understand a situation clearly",
        "cn_def": "明白"
      },
      {
        "pos": "v.",
        "en_def": "to achieve something that you have planned or hoped for",
        "cn_def": "實現；使變為現實"
      }
    ]
  },
  "realized": {
    "pos": "v.",
    "en_def": "to understand a situation clearly",
    "cn_def": "明白",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to understand a situation clearly",
        "cn_def": "明白"
      },
      {
        "pos": "v.",
        "en_def": "to achieve something that you have planned or hoped for",
        "cn_def": "實現；使變為現實"
      }
    ]
  },
  "realize a dream": {
    "pos": "phr.",
    "en_def": "to make your most desirable hope or ambition become a reality",
    "cn_def": "實現夢想",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make your most desirable hope or ambition become a reality",
        "cn_def": "實現夢想"
      }
    ]
  },
  "realize one's potential": {
    "pos": "phr.",
    "en_def": "to achieve all that you are capable of doing in your career or life",
    "cn_def": "發揮潛力",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to achieve all that you are capable of doing in your career or life",
        "cn_def": "發揮潛力"
      }
    ]
  },
  "realize their potential": {
    "pos": "phr.",
    "en_def": "to achieve all that you are capable of doing in your career or life",
    "cn_def": "發揮潛力",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to achieve all that you are capable of doing in your career or life",
        "cn_def": "發揮潛力"
      }
    ]
  },
  "realization": {
    "pos": "n.",
    "en_def": "the act of achieving something that you have planned or hoped for",
    "cn_def": "實現；成為現實",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of achieving something that you have planned or hoped for",
        "cn_def": "實現；成為現實"
      },
      {
        "pos": "n.",
        "en_def": "the state of understanding something clearly, or the act of making a plan real",
        "cn_def": "明白；意識到"
      }
    ]
  },
  "came to the realization": {
    "pos": "phr.",
    "en_def": "to gradually understand or become aware of a specific fact or situation",
    "cn_def": "意識到；明白",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to gradually understand or become aware of a specific fact or situation",
        "cn_def": "意識到；明白"
      }
    ]
  },
  "come to the realization": {
    "pos": "phr.",
    "en_def": "to gradually understand or become aware of a specific fact or situation",
    "cn_def": "意識到；明白",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to gradually understand or become aware of a specific fact or situation",
        "cn_def": "意識到；明白"
      }
    ]
  },
  "realistic": {
    "pos": "adj.",
    "en_def": "accepting things as they are and dealing with them in a practical way",
    "cn_def": "實際的；現實的；逼真的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "accepting things as they are and dealing with them in a practical way",
        "cn_def": "實際的；現實的；逼真的"
      }
    ]
  },
  "realism": {
    "pos": "n.",
    "en_def": "a style of art or literature that shows things as they are in real life",
    "cn_def": "現實主義",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a style of art or literature that shows things as they are in real life",
        "cn_def": "現實主義"
      }
    ]
  },
  "practical": {
    "pos": "adj.",
    "en_def": "relating to experience, real situations, or actions rather than ideas or theories",
    "cn_def": "實用的；實際的；務實的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to experience, real situations, or actions rather than ideas or theories",
        "cn_def": "實用的；實際的；務實的"
      }
    ]
  },
  "feasible": {
    "pos": "adj.",
    "en_def": "possible to do easily or conveniently; able to be achieved successfully",
    "cn_def": "可行的；行得通的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "possible to do easily or conveniently; able to be achieved successfully",
        "cn_def": "可行的；行得通的"
      }
    ]
  },
  "unfeasible": {
    "pos": "adj.",
    "en_def": "not practical or convenient; impossible to achieve successfully under a specific framework",
    "cn_def": "不可行的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not practical or convenient; impossible to achieve successfully under a specific framework",
        "cn_def": "不可行的"
      }
    ]
  },
  "unfeasible / infeasible": {
    "pos": "adj.",
    "en_def": "not practical or convenient; impossible to achieve successfully under a specific framework",
    "cn_def": "不可行的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not practical or convenient; impossible to achieve successfully under a specific framework",
        "cn_def": "不可行的"
      }
    ]
  },
  "feasibility": {
    "pos": "n.",
    "en_def": "the state or degree of being easily or conveniently done; practical possibility",
    "cn_def": "可行性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state or degree of being easily or conveniently done; practical possibility",
        "cn_def": "可行性"
      }
    ]
  },
  "impress": {
    "pos": "v.",
    "en_def": "to cause someone to admire or respect you because of your exceptional skills",
    "cn_def": "給...留下深刻印象",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause someone to admire or respect you because of your exceptional skills",
        "cn_def": "給...留下深刻印象"
      }
    ]
  },
  "impressive": {
    "pos": "adj.",
    "en_def": "making a strong impression; causing admiration because of being exceptionally good",
    "cn_def": "令人印象深刻的；雄偉壯麗的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "making a strong impression; causing admiration because of being exceptionally good",
        "cn_def": "令人印象深刻的；雄偉壯麗的"
      }
    ]
  },
  "impressed": {
    "pos": "adj.",
    "en_def": "feeling admiration, respect, or strong approval toward someone or something",
    "cn_def": "感到印象深刻的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling admiration, respect, or strong approval toward someone or something",
        "cn_def": "感到印象深刻的"
      }
    ]
  },
  "be impressed with": {
    "pos": "phr.",
    "en_def": "to feel deep admiration or respect for a person's skill or an object's quality",
    "cn_def": "對...留下深刻印象；佩服",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to feel deep admiration or respect for a person's skill or an object's quality",
        "cn_def": "對...留下深刻印象；佩服"
      }
    ]
  },
  "was thoroughly impressed with": {
    "pos": "phr.",
    "en_def": "to feel deep admiration or respect for a person's skill or an object's quality",
    "cn_def": "對...留下深刻印象；佩服",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to feel deep admiration or respect for a person's skill or an object's quality",
        "cn_def": "對...留下深刻印象；佩服"
      }
    ]
  },
  "impressions": {
    "pos": "n.",
    "en_def": "an idea, feeling, or opinion about something, especially one formed without much thought",
    "cn_def": "印象",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an idea, feeling, or opinion about something, especially one formed without much thought",
        "cn_def": "印象"
      }
    ]
  },
  "impression": {
    "pos": "n.",
    "en_def": "an idea, feeling, or opinion about something, especially one formed without much thought",
    "cn_def": "印象",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an idea, feeling, or opinion about something, especially one formed without much thought",
        "cn_def": "印象"
      }
    ]
  },
  "makeleave an impression on": {
    "pos": "phr.",
    "en_def": "to cause someone to notice, admire, or remember you strongly",
    "cn_def": "給...留下印象",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to cause someone to notice, admire, or remember you strongly",
        "cn_def": "給...留下印象"
      }
    ]
  },
  "impressionism": {
    "pos": "n.",
    "en_def": "a style of modern painting that focuses on the visual effects of light and color",
    "cn_def": "印象派；印象主義",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a style of modern painting that focuses on the visual effects of light and color",
        "cn_def": "印象派；印象主義"
      }
    ]
  },
  "impressionist": {
    "pos": "n.",
    "en_def": "an artist or painter who paints in the style of impressionism",
    "cn_def": "印象派畫家",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an artist or painter who paints in the style of impressionism",
        "cn_def": "印象派畫家"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
