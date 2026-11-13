// Unit 7 Quiz Data: continuously – at the expense of
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Advanced U7 - continuously – at the expense of",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "continuously",
    "pos": "adv.",
    "cn_def": "連續不斷地（無間斷）",
    "en_def": "happening without any pauses or interruptions.",
    "sentence": "The machine has been running {{BLANK}} for forty-eight hours without stopping, so the engineers decided to check it.",
    "cn": "這台機器已連續不斷運行了四十八小時，因此工程師決定進行檢查。"
  },
  {
    "word": "continuous",
    "pos": "adj.",
    "cn_def": "連續的、不斷的",
    "en_def": "ongoing over a long period without stopping.",
    "sentence": "The {{BLANK}} noise from the construction site made it impossible for nearby residents to sleep during the night.",
    "cn": "建築工地持續不斷的噪音讓附近居民在夜間根本無法入睡。"
  },
  {
    "word": "continuously rain",
    "pos": "phr.",
    "cn_def": "連續降雨",
    "en_def": "to rain nonstop without breaking.",
    "sentence": "It began to {{BLANK}} for three straight days, causing serious flooding in the low-lying areas of the city.",
    "cn": "連續降雨三天，導致城市低窪地區發生嚴重水災。"
  },
  {
    "word": "continually",
    "pos": "adv.",
    "cn_def": "頻繁地、接連地（有間斷）",
    "en_def": "starting and stopping repeatedly.",
    "sentence": "He {{BLANK}} checked his phone during the meeting, which annoyed the manager and made him appear unprofessional.",
    "cn": "他在會議期間頻繁地查看手機，這讓經理感到惱火，也讓他顯得不專業。"
  },
  {
    "word": "continually interrupt",
    "pos": "phr.",
    "cn_def": "不斷打斷、屢次干擾",
    "en_def": "to break into someone's talk again and again.",
    "sentence": "It is very rude to {{BLANK}} a speaker during a presentation, even if you have an urgent question to ask.",
    "cn": "即使你有緊急問題要問，在演講期間不斷打斷講者也是非常無禮的行為。"
  },
  {
    "word": "continue",
    "pos": "v.",
    "cn_def": "繼續、持續",
    "en_def": "to keep doing or maintaining something.",
    "sentence": "Despite feeling tired, she decided to {{BLANK}} studying for the exam because she wanted to do her very best.",
    "cn": "儘管感到疲倦，她決定繼續備考，因為她想盡力做到最好。"
  },
  {
    "word": "barely",
    "pos": "adv.",
    "cn_def": "僅僅、勉強、幾乎不",
    "en_def": "only just; almost not at all.",
    "sentence": "After working three jobs that week, he was so exhausted that he could {{BLANK}} keep his eyes open during dinner.",
    "cn": "那週打了三份工後，他筋疲力盡，吃晚飯時幾乎無法睜開眼睛。"
  },
  {
    "word": "barely hear",
    "pos": "phr.",
    "cn_def": "幾乎聽不到",
    "en_def": "to be almost unable to catch a sound.",
    "sentence": "The music at the concert was so loud that she could {{BLANK}} what her friend was saying right next to her.",
    "cn": "演唱會的音樂聲太大，她幾乎聽不到就站在她旁邊的朋友說的話。"
  },
  {
    "word": "bare",
    "pos": "adj.",
    "cn_def": "赤裸的、空無一物的",
    "en_def": "without clothes, coverage, or any decorations.",
    "sentence": "The walls of the new apartment were completely {{BLANK}}, so they decided to hang some paintings to make it feel warmer.",
    "cn": "新公寓的牆壁完全空無一物，所以他們決定掛一些畫作讓空間感覺更溫馨。"
  },
  {
    "word": "bare feet",
    "pos": "phr.",
    "cn_def": "光腳、赤腳",
    "en_def": "feet without socks or shoes on.",
    "sentence": "She walked across the warm sand on {{BLANK}} and enjoyed the feeling of the tiny waves washing over her toes.",
    "cn": "她赤腳走在溫暖的沙灘上，享受著細小海浪沖過腳趾的感覺。"
  },
  {
    "word": "frustrated",
    "pos": "adj.",
    "cn_def": "感到沮喪的、灰心的",
    "en_def": "feeling annoyed or discouraged due to failure.",
    "sentence": "He felt very {{BLANK}} after failing the driving test for the second time, but his instructor encouraged him to try again.",
    "cn": "第二次駕駛考試不及格後，他感到非常沮喪，但教練鼓勵他再試一次。"
  },
  {
    "word": "frustrate",
    "pos": "v.",
    "cn_def": "使沮喪",
    "en_def": "to block someone from finishing a goal.",
    "sentence": "The constant technical problems began to {{BLANK}} the entire team, as they were unable to meet the project deadline.",
    "cn": "不斷出現的技術問題開始讓整個團隊感到沮喪，因為他們無法在專案截止日期前完成。"
  },
  {
    "word": "frustrating",
    "pos": "adj.",
    "cn_def": "令人沮喪的、氣人的",
    "en_def": "making you feel annoyed, stuck, or disappointed.",
    "sentence": "It is incredibly {{BLANK}} when you study hard for a test but still cannot remember the answers during the exam.",
    "cn": "當你認真備考卻在考試中仍然想不起答案時，真的令人非常沮喪。"
  },
  {
    "word": "frustration",
    "pos": "n.",
    "cn_def": "沮喪、挫敗感",
    "en_def": "the state of feeling discouraged or blocked.",
    "sentence": "She expressed her {{BLANK}} by slamming the textbook shut and taking a long walk outside to calm herself down.",
    "cn": "她把課本用力闔上，然後出去長走一段路讓自己冷靜下來，藉此發洩挫敗感。"
  },
  {
    "word": "immigrant",
    "pos": "n.",
    "cn_def": "（自外國移入的）移民",
    "en_def": "a person who comes to a country to settle long-term.",
    "sentence": "As a first-generation {{BLANK}}, she worked extremely hard to build a new life and give her children better opportunities.",
    "cn": "作為第一代移民，她非常努力地建立新生活，為子女創造更好的機會。"
  },
  {
    "word": "immigrate",
    "pos": "v.",
    "cn_def": "移居入境",
    "en_def": "to move permanently into a foreign country.",
    "sentence": "His grandparents decided to {{BLANK}} after the war ended, hoping to find safety and a brighter future for their family.",
    "cn": "他的祖父母在戰爭結束後決定移民，希望為家人找到安全和更光明的未來。"
  },
  {
    "word": "immigrate to",
    "pos": "phr.",
    "cn_def": "移民到…",
    "en_def": "to enter and settle down in a specific country.",
    "sentence": "Many skilled workers choose to {{BLANK}} Canada because of its welcoming immigration policies and high quality of life.",
    "cn": "許多技術工人選擇移民到加拿大，因為該國友善的移民政策和高品質的生活。"
  },
  {
    "word": "immigrated from",
    "pos": "phr.",
    "cn_def": "從…移民過來",
    "en_def": "to leave your native home country for another.",
    "sentence": "She {{BLANK}} Vietnam when she was just eight years old and has now lived in Australia for over twenty years.",
    "cn": "她八歲時從越南移民過來，現在已在澳洲生活了二十多年。"
  },
  {
    "word": "migrant",
    "pos": "n.",
    "cn_def": "移工、候鳥",
    "en_def": "a worker who travels around to find employment.",
    "sentence": "Seasonal {{BLANK}} workers travel to different regions each year to pick fruit and vegetables during the harvest period.",
    "cn": "季節性移工每年前往不同地區，在收穫季節採摘水果和蔬菜。"
  },
  {
    "word": "migrate",
    "pos": "v.",
    "cn_def": "遷徙、移動",
    "en_def": "to move temporarily or seasonally to another place.",
    "sentence": "Many species of birds {{BLANK}} thousands of kilometres every autumn to reach warmer regions before winter arrives.",
    "cn": "許多鳥類每年秋天遷徙數千公里，在冬季來臨前抵達較溫暖的地區。"
  },
  {
    "word": "migration",
    "pos": "n.",
    "cn_def": "遷徙、移居",
    "en_def": "the process of moving from one region to another.",
    "sentence": "The annual {{BLANK}} of wildebeest across the African plains is considered one of the greatest wildlife events on earth.",
    "cn": "角馬每年橫越非洲平原的遷徙被認為是地球上最壯觀的野生動物活動之一。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "富有創造力的、有創意的",
    "en_def": "showing original ideas or artistic imagination.",
    "sentence": "The advertising team came up with a very {{BLANK}} campaign that used humour to capture people's attention online.",
    "cn": "廣告團隊提出了一個非常有創意的行銷活動，利用幽默感在網路上吸引人們的注意。"
  },
  {
    "word": "creative writer",
    "pos": "phr.",
    "cn_def": "創意作家",
    "en_def": "a writer who invents unique stories or poems.",
    "sentence": "As a talented {{BLANK}}, she published her first short story collection at the age of twenty-two to great acclaim.",
    "cn": "作為一位才華橫溢的創意作家，她在二十二歲時出版了第一本短篇故事集，廣受好評。"
  },
  {
    "word": "create",
    "pos": "v.",
    "cn_def": "創造、發明",
    "en_def": "to cause something completely new to exist.",
    "sentence": "The architect wanted to {{BLANK}} a building that looked both futuristic and welcoming to visitors from all backgrounds.",
    "cn": "這位建築師希望創造一棟既具未來感又讓各界訪客感到親切的建築。"
  },
  {
    "word": "creativity",
    "pos": "n.",
    "cn_def": "創造力",
    "en_def": "the capacity to bring forward new ideas.",
    "sentence": "Giving students free time to explore their own interests is one of the best ways to develop their {{BLANK}}.",
    "cn": "給予學生自由探索自身興趣的時間，是培養創造力的最佳方式之一。"
  },
  {
    "word": "creation",
    "pos": "n.",
    "cn_def": "創作品、建立",
    "en_def": "an original product or the act of creating.",
    "sentence": "The {{BLANK}} of a new national museum took over ten years of planning and required the support of many generous donors.",
    "cn": "一座新國立博物館的建立花了超過十年的規劃時間，並需要許多慷慨捐助者的支持。"
  },
  {
    "word": "attempt",
    "pos": "v.",
    "cn_def": "企圖、嘗試",
    "en_def": "to try to do something, especially something hard.",
    "sentence": "She decided to {{BLANK}} the difficult mountain climb despite the cold weather and the warnings from experienced hikers.",
    "cn": "儘管天氣寒冷且有經驗豐富登山者的警告，她仍決定嘗試攀登這座困難的山峰。"
  },
  {
    "word": "attempt",
    "pos": "n.",
    "cn_def": "企圖、嘗試",
    "en_def": "an effort or try to achieve something.",
    "sentence": "His first {{BLANK}} at making homemade bread failed completely, but he refused to give up and tried again the next day.",
    "cn": "他第一次嘗試製作自製麵包完全失敗，但他拒絕放棄，第二天又再次嘗試。"
  },
  {
    "word": "attempt to fix",
    "pos": "phr.",
    "cn_def": "試圖修理",
    "en_def": "to try to repair an object or situation.",
    "sentence": "The technician spent two hours trying to {{BLANK}} the broken laptop, but eventually had to order a new part.",
    "cn": "技術人員花了兩個小時試圖修理損壞的筆記型電腦，但最終不得不訂購新零件。"
  },
  {
    "word": "make attempts to",
    "pos": "phr.",
    "cn_def": "做出嘗試去…",
    "en_def": "to complete an effort toward a major goal.",
    "sentence": "The school counsellor encouraged students to {{BLANK}} speak English outside the classroom as often as possible.",
    "cn": "學校輔導老師鼓勵學生盡可能在課堂外嘗試說英語。"
  },
  {
    "word": "In an attempt to",
    "pos": "phr.",
    "cn_def": "試圖、為了要…",
    "en_def": "with the goal or intention of doing something.",
    "sentence": "{{BLANK}} save money, she started cooking all her meals at home instead of eating at restaurants every day.",
    "cn": "為了節省開支，她開始在家烹飪所有餐點，而不是每天在餐廳用餐。"
  },
  {
    "word": "reform",
    "pos": "v.",
    "cn_def": "改革、革新",
    "en_def": "to improve a system by making internal changes.",
    "sentence": "The new government promised to {{BLANK}} the education system so that all children could have equal access to quality schooling.",
    "cn": "新政府承諾改革教育體制，讓所有孩子都能平等獲得優質教育。"
  },
  {
    "word": "reform",
    "pos": "n.",
    "cn_def": "改革、革新",
    "en_def": "an official improvement made to a law or system.",
    "sentence": "The healthcare {{BLANK}} introduced last year has made it much easier for low-income families to see a doctor for free.",
    "cn": "去年推行的醫療改革讓低收入家庭更容易免費就醫。"
  },
  {
    "word": "reform from the bottom up",
    "pos": "phr.",
    "cn_def": "從基層徹底改革",
    "en_def": "to change a structure thoroughly from base level.",
    "sentence": "The new principal believed that the only way to improve the school was to {{BLANK}} and involve every teacher.",
    "cn": "新校長相信改善學校的唯一方法是從基層徹底改革，並讓每位老師都參與其中。"
  },
  {
    "word": "push forward with reform",
    "pos": "phr.",
    "cn_def": "推進改革",
    "en_def": "to advocate and advance systemic updates.",
    "sentence": "Despite strong opposition from some groups, the minister continued to {{BLANK}} and refused to back down.",
    "cn": "儘管某些群體強烈反對，部長仍繼續推進改革，拒絕退讓。"
  },
  {
    "word": "reformer",
    "pos": "n.",
    "cn_def": "改革者",
    "en_def": "a person who wants to change or improve a system.",
    "sentence": "The famous social {{BLANK}} dedicated her entire life to improving working conditions for labourers in the nineteenth century.",
    "cn": "這位著名的社會改革者將一生奉獻於改善十九世紀勞工的工作條件。"
  },
  {
    "word": "efficiency",
    "pos": "n.",
    "cn_def": "效率、效能",
    "en_def": "competence; doing work well without wasting time.",
    "sentence": "The new software dramatically improved the team's {{BLANK}}, allowing them to complete reports in half the usual time.",
    "cn": "新軟體大幅提升了團隊的效率，讓他們能在平時一半的時間內完成報告。"
  },
  {
    "word": "efficient",
    "pos": "adj.",
    "cn_def": "有效率的",
    "en_def": "working productively with zero wasted energy.",
    "sentence": "An {{BLANK}} study schedule helps students cover all subjects without feeling overwhelmed before final examinations.",
    "cn": "有效率的學習計畫幫助學生在期末考前涵蓋所有科目，而不會感到不知所措。"
  },
  {
    "word": "make up for",
    "pos": "phr.",
    "cn_def": "彌補效率",
    "en_def": "to balance out a flaw using strong work speed.",
    "sentence": "Although the new employee lacked experience, her enthusiasm and hard work helped {{BLANK}} her low efficiency in the early weeks.",
    "cn": "雖然這位新員工缺乏經驗，但她的熱情和努力在最初幾週彌補了效率上的不足。"
  },
  {
    "word": "manufacturer",
    "pos": "n.",
    "cn_def": "製造商、生產商",
    "en_def": "a company or person that makes finished goods.",
    "sentence": "The car {{BLANK}} announced a major recall after discovering a safety defect in the braking system of its newest model.",
    "cn": "這家汽車製造商在發現最新款煞車系統有安全缺陷後，宣布大規模召回。"
  },
  {
    "word": "manufacture",
    "pos": "v.",
    "cn_def": "（大量）製造、加工",
    "en_def": "to produce goods in large quantities using machines.",
    "sentence": "The company plans to {{BLANK}} its new electric scooters in Taiwan before expanding sales to markets across Southeast Asia.",
    "cn": "這家公司計劃在台灣製造其新款電動滑板車，然後再將銷售擴展到東南亞市場。"
  },
  {
    "word": "manufacture equipment",
    "pos": "phr.",
    "cn_def": "製造設備",
    "en_def": "to build mechanical or computer devices.",
    "sentence": "The firm specialises in contracts to {{BLANK}} for hospitals, producing high-precision tools used in surgical procedures.",
    "cn": "該公司專門承接為醫院製造設備的合約，生產用於外科手術的高精度工具。"
  },
  {
    "word": "paper manufacturer",
    "pos": "phr.",
    "cn_def": "造紙廠、紙張製造商",
    "en_def": "a factory or corporate body that outputs paper.",
    "sentence": "The local {{BLANK}} has been supplying recycled paper to schools and offices in the region for over thirty years.",
    "cn": "這家本地造紙廠為該地區的學校和辦公室供應再生紙張已超過三十年。"
  },
  {
    "word": "Unfortunately",
    "pos": "adv.",
    "cn_def": "不幸地、遺憾地",
    "en_def": "it is a pity that; unluckily.",
    "sentence": "{{BLANK}}, the concert was cancelled at the last minute due to the severe typhoon warning issued by the government.",
    "cn": "遺憾的是，由於政府發布嚴重颱風警報，演唱會在最後一刻被取消了。"
  },
  {
    "word": "fortunate",
    "pos": "adj.",
    "cn_def": "幸運的",
    "en_def": "lucky; having unexpected good wealth or success.",
    "sentence": "We were very {{BLANK}} that the rain stopped just in time for the outdoor graduation ceremony to begin on schedule.",
    "cn": "我們非常幸運，雨恰好在戶外畢業典禮準時開始前停了下來。"
  },
  {
    "word": "Fortunately",
    "pos": "adv.",
    "cn_def": "幸運地、還好",
    "en_def": "by a stroke of good luck; luckily.",
    "sentence": "{{BLANK}}, a kind stranger found her lost wallet and handed it in to the police station with everything still inside.",
    "cn": "幸運地，一位好心的陌生人找到了她遺失的錢包，並將其連同所有物品完好地交到了警察局。"
  },
  {
    "word": "unfortunate",
    "pos": "adj.",
    "cn_def": "不幸的、倒楣的",
    "en_def": "unlucky; experiencing bad events or conditions.",
    "sentence": "It was {{BLANK}} that the team's best player was injured right before the most important match of the season.",
    "cn": "很不幸的是，球隊最出色的球員在本賽季最重要的比賽前夕受傷了。"
  },
  {
    "word": "fortune",
    "pos": "n.",
    "cn_def": "財富、運勢",
    "en_def": "a large bundle of wealth or a destiny track.",
    "sentence": "He spent his entire {{BLANK}} on a failed business venture and had to start completely from scratch at the age of fifty.",
    "cn": "他將全部財富花在一次失敗的創業冒險上，不得不在五十歲時從頭開始。"
  },
  {
    "word": "original",
    "pos": "adj.",
    "cn_def": "原來的、最初的",
    "en_def": "existing from the absolute beginning.",
    "sentence": "The {{BLANK}} plan was to hold the event outdoors, but it had to be moved inside because of the unexpected heavy rain.",
    "cn": "最初的計劃是在戶外舉辦活動，但因突如其來的大雨不得不改在室內進行。"
  },
  {
    "word": "original",
    "pos": "n.",
    "cn_def": "原作、真跡",
    "en_def": "the first true painting or text, not a copy.",
    "sentence": "The museum displayed the {{BLANK}} of the famous painting, while high-quality prints were sold in the gift shop nearby.",
    "cn": "博物館展示了這幅著名畫作的原作，而高品質的複製品則在附近的禮品店出售。"
  },
  {
    "word": "original form",
    "pos": "phr.",
    "cn_def": "原始表格、原型",
    "en_def": "the initial baseline document or shape.",
    "sentence": "The architect preserved the building's {{BLANK}} while updating the interior to meet modern safety and comfort standards.",
    "cn": "建築師在更新內部以符合現代安全和舒適標準的同時，保留了建築的原始形態。"
  },
  {
    "word": "original ideas",
    "pos": "phr.",
    "cn_def": "獨創的想法",
    "en_def": "completely fresh thoughts that stand out from others.",
    "sentence": "The judge praised the student's {{BLANK}} and said it was unlike anything she had seen in twenty years of teaching.",
    "cn": "評審稱讚這名學生獨創的想法，並表示在她二十年的教學生涯中從未見過如此新穎的構思。"
  },
  {
    "word": "original plans",
    "pos": "phr.",
    "cn_def": "原定計畫",
    "en_def": "the baseline goals designed before adjustments.",
    "sentence": "The team had to abandon their {{BLANK}} after the budget was cut and find a more affordable solution instead.",
    "cn": "預算被削減後，團隊不得不放棄原定計畫，尋找更實惠的替代方案。"
  },
  {
    "word": "origin",
    "pos": "n.",
    "cn_def": "起源、出身",
    "en_def": "the starting source or root of something.",
    "sentence": "Scientists are still debating the exact {{BLANK}} of the universe and how the first stars and galaxies were formed.",
    "cn": "科學家們仍在爭論宇宙的確切起源，以及最初的恆星和星系是如何形成的。"
  },
  {
    "word": "originally",
    "pos": "adv.",
    "cn_def": "原先、最初",
    "en_def": "in the beginning, before changes took place.",
    "sentence": "The building was {{BLANK}} a warehouse, but it was converted into a trendy café and art gallery about five years ago.",
    "cn": "這棟建築最初是一座倉庫，但大約五年前被改建成一家時髦的咖啡廳和藝廊。"
  },
  {
    "word": "originality",
    "pos": "n.",
    "cn_def": "獨創性、創意",
    "en_def": "the quality of being unique, clever, and new.",
    "sentence": "The judges awarded first prize to her design because of its {{BLANK}} and the way it solved the problem in a fresh way.",
    "cn": "評審將首獎頒給她的設計，因為其獨創性以及以全新方式解決問題的思路。"
  },
  {
    "word": "originate",
    "pos": "v.",
    "cn_def": "源自、創始",
    "en_def": "to begin or rise from a specific source.",
    "sentence": "Many of the words we use in modern English {{BLANK}} from Latin and Greek, especially in science and medicine.",
    "cn": "我們現代英語中使用的許多詞彙源自拉丁語和希臘語，尤其是在科學和醫學領域。"
  },
  {
    "word": "originated in",
    "pos": "phr.",
    "cn_def": "發源於…",
    "en_def": "to start or develop inside a specific place.",
    "sentence": "Researchers believe the ancient tradition {{BLANK}} a small coastal village and gradually spread to the whole country.",
    "cn": "研究人員相信這一古老傳統發源於一個小沿海村莊，並逐漸傳播到全國各地。"
  },
  {
    "word": "novel",
    "pos": "adj.",
    "cn_def": "新穎的、新奇的",
    "en_def": "interestingly new, fresh, or unusual.",
    "sentence": "The scientist proposed a {{BLANK}} solution to the water shortage problem that had never been tried in the region before.",
    "cn": "這位科學家提出了一個新穎的解決方案來應對該地區從未嘗試過的缺水問題。"
  },
  {
    "word": "novel",
    "pos": "n.",
    "cn_def": "長篇小說",
    "en_def": "a long printed book containing a fictional story.",
    "sentence": "She read the entire {{BLANK}} in just two days because the plot was so gripping that she simply could not put it down.",
    "cn": "她兩天內就讀完了整本小說，因為情節太引人入勝，她根本無法放下書本。"
  },
  {
    "word": "novel approach",
    "pos": "phr.",
    "cn_def": "新穎的方法",
    "en_def": "a completely fresh way of handling a scenario.",
    "sentence": "The teacher tried a {{BLANK}} to teaching grammar by using funny video clips instead of traditional textbook exercises.",
    "cn": "這位老師嘗試用有趣影片片段取代傳統教科書練習，以新穎的方法教授文法。"
  },
  {
    "word": "historical novel",
    "pos": "phr.",
    "cn_def": "歷史小說",
    "en_def": "a fictional book set against past human eras.",
    "sentence": "The {{BLANK}} was set during the Second World War and told the story of a young nurse working on the front lines.",
    "cn": "這部歷史小說以第二次世界大戰為背景，講述了一位在前線工作的年輕護士的故事。"
  },
  {
    "word": "novelist",
    "pos": "n.",
    "cn_def": "小說家",
    "en_def": "a person who writes fictional storybooks.",
    "sentence": "The award-winning {{BLANK}} said in an interview that she draws inspiration from her own childhood memories and travels.",
    "cn": "這位獲獎小說家在採訪中表示，她從自己童年的記憶和旅行經歷中汲取靈感。"
  },
  {
    "word": "desired",
    "pos": "v.",
    "cn_def": "渴望、想要",
    "en_def": "to want something very strongly.",
    "sentence": "All she {{BLANK}} was a quiet evening at home with her family after months of stressful business travel overseas.",
    "cn": "在幾個月緊張的海外出差後，她所渴望的只是在家與家人度過一個安靜的夜晚。"
  },
  {
    "word": "desire",
    "pos": "n.",
    "cn_def": "渴望、慾望",
    "en_def": "a strong hope or wish for an item or status.",
    "sentence": "His deep {{BLANK}} to become a professional musician motivated him to practise the guitar for hours every single day.",
    "cn": "他成為職業音樂人的強烈渴望驅使他每天練習吉他數小時。"
  },
  {
    "word": "desire money",
    "pos": "phr.",
    "cn_def": "渴望金錢",
    "en_def": "to want financial wealth above other elements.",
    "sentence": "People who only {{BLANK}} often forget that health, relationships, and personal growth are far more important in life.",
    "cn": "只渴望金錢的人往往忘記，健康、人際關係和個人成長在生命中遠比金錢重要。"
  },
  {
    "word": "had no desire to",
    "pos": "phr.",
    "cn_def": "毫無意願去…",
    "en_def": "to have zero interest or wish to do an action.",
    "sentence": "After reading about the dangerous conditions, she {{BLANK}} join the expedition and decided to stay home instead.",
    "cn": "在讀到危險的情況後，她毫無意願參加這次探險，決定留在家中。"
  },
  {
    "word": "expense",
    "pos": "n.",
    "cn_def": "花費、費用、開支",
    "en_def": "the amount of money spent to buy or do something.",
    "sentence": "Studying abroad is a huge {{BLANK}}, so many students apply for scholarships to help cover the cost of tuition and living.",
    "cn": "出國留學是一筆巨大的開支，因此許多學生申請獎學金來幫助支付學費和生活費。"
  },
  {
    "word": "monthly living expenses",
    "pos": "phr.",
    "cn_def": "每月生活開銷",
    "en_def": "the routine cash needed to survive each month.",
    "sentence": "She kept a detailed budget to track her {{BLANK}} and made sure she was saving at least ten percent of her income.",
    "cn": "她記錄詳細的預算來追蹤每月生活開銷，確保自己至少儲蓄收入的百分之十。"
  },
  {
    "word": "expend",
    "pos": "v.",
    "cn_def": "花費、消耗",
    "en_def": "to use up time, money, or energy on a task.",
    "sentence": "The research team had to {{BLANK}} a great deal of effort collecting data before they could begin analysing the results.",
    "cn": "研究團隊在開始分析結果之前，必須花費大量精力收集數據。"
  },
  {
    "word": "expensive",
    "pos": "adj.",
    "cn_def": "昂貴的",
    "en_def": "costing a huge amount of money.",
    "sentence": "Fresh truffles are one of the most {{BLANK}} ingredients in the world because they are extremely rare and hard to find.",
    "cn": "新鮮松露是世界上最昂貴的食材之一，因為它們極為稀少且難以找到。"
  },
  {
    "word": "spare no expense",
    "pos": "phr.",
    "cn_def": "不惜工本、不惜代價",
    "en_def": "to spend any sum of money needed for success.",
    "sentence": "The couple decided to {{BLANK}} on their wedding and hired the best caterer, florist, and photographer available.",
    "cn": "這對夫婦決定在婚禮上不惜工本，聘請了最好的餐飲、花藝和攝影服務。"
  },
  {
    "word": "at somebody's expense",
    "pos": "phr.",
    "cn_def": "由某人買單/付費",
    "en_def": "paid for entirely by another person or group.",
    "sentence": "The company trip to Japan was organised {{BLANK}}, so all staff were excited and grateful for the opportunity.",
    "cn": "這次日本公司旅行由公司買單，所有員工都對這次機會感到興奮和感激。"
  },
  {
    "word": "at the expense of",
    "pos": "phr.",
    "cn_def": "以…為代價、犧牲…",
    "en_def": "causing harm, loss, or damage to another asset.",
    "sentence": "He achieved career success {{BLANK}} his health by working eighty-hour weeks for several years without rest.",
    "cn": "他以健康為代價獲得了職業成功，連續數年每週工作八十小時，毫無休息。"
  }
];

const MCQS = [
  {
    "q": "The machine has been running ______ for forty-eight hours without stopping, so the engineers decided to check it.",
    "options": [
      "continuously",
      "Fortunately",
      "Unfortunately",
      "barely"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The ______ noise from the construction site made it impossible for nearby residents to sleep during the night.",
    "options": [
      "efficient",
      "continuous",
      "frustrating",
      "expensive"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "It began to ______ for three straight days, causing serious flooding in the low-lying areas of the city.",
    "options": [
      "In an attempt to",
      "barely hear",
      "immigrate to",
      "continuously rain"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "He ______ checked his phone during the meeting, which annoyed the manager and made him appear unprofessional.",
    "options": [
      "Unfortunately",
      "continuously",
      "continually",
      "barely"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "It is very rude to ______ a speaker during a presentation, even if you have an urgent question to ask.",
    "options": [
      "continually interrupt",
      "bare feet",
      "at somebody's expense",
      "creative writer"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Despite feeling tired, she decided to ______ studying for the exam because she wanted to do her very best.",
    "options": [
      "desired",
      "frustrate",
      "reform",
      "continue"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "After working three jobs that week, he was so exhausted that he could ______ keep his eyes open during dinner.",
    "options": [
      "Unfortunately",
      "Fortunately",
      "barely",
      "continuously"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The music at the concert was so loud that she could ______ what her friend was saying right next to her.",
    "options": [
      "at somebody's expense",
      "barely hear",
      "novel approach",
      "original plans"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The walls of the new apartment were completely ______, so they decided to hang some paintings to make it feel warmer.",
    "options": [
      "original",
      "frustrating",
      "bare",
      "expensive"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "She walked across the warm sand on ______ and enjoyed the feeling of the tiny waves washing over her toes.",
    "options": [
      "original form",
      "bare feet",
      "immigrated from",
      "barely hear"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "He felt very ______ after failing the driving test for the second time, but his instructor encouraged him to try again.",
    "options": [
      "original",
      "bare",
      "frustrating",
      "frustrated"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The constant technical problems began to ______ the entire team, as they were unable to meet the project deadline.",
    "options": [
      "frustrate",
      "desired",
      "migrate",
      "expend"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "It is incredibly ______ when you study hard for a test but still cannot remember the answers during the exam.",
    "options": [
      "creative",
      "efficient",
      "continuous",
      "frustrating"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "She expressed her ______ by slamming the textbook shut and taking a long walk outside to calm herself down.",
    "options": [
      "immigrant",
      "desire",
      "frustration",
      "reformer"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "As a first-generation ______, she worked extremely hard to build a new life and give her children better opportunities.",
    "options": [
      "origin",
      "immigrant",
      "expense",
      "manufacturer"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "His grandparents decided to ______ after the war ended, hoping to find safety and a brighter future for their family.",
    "options": [
      "immigrate",
      "expend",
      "desired",
      "create"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Many skilled workers choose to ______ Canada because of its welcoming immigration policies and high quality of life.",
    "options": [
      "had no desire to",
      "In an attempt to",
      "immigrate to",
      "historical novel"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "She ______ Vietnam when she was just eight years old and has now lived in Australia for over twenty years.",
    "options": [
      "push forward with reform",
      "immigrated from",
      "creative writer",
      "manufacture equipment"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Seasonal ______ workers travel to different regions each year to pick fruit and vegetables during the harvest period.",
    "options": [
      "migrant",
      "reform",
      "creativity",
      "creation"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Many species of birds ______ thousands of kilometres every autumn to reach warmer regions before winter arrives.",
    "options": [
      "attempt",
      "frustrate",
      "expend",
      "migrate"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The annual ______ of wildebeest across the African plains is considered one of the greatest wildlife events on earth.",
    "options": [
      "migration",
      "migrant",
      "originality",
      "reformer"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The advertising team came up with a very ______ campaign that used humour to capture people's attention online.",
    "options": [
      "bare",
      "efficient",
      "frustrating",
      "creative"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "As a talented ______, she published her first short story collection at the age of twenty-two to great acclaim.",
    "options": [
      "spare no expense",
      "paper manufacturer",
      "creative writer",
      "monthly living expenses"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The architect wanted to ______ a building that looked both futuristic and welcoming to visitors from all backgrounds.",
    "options": [
      "expend",
      "create",
      "frustrate",
      "immigrate"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Giving students free time to explore their own interests is one of the best ways to develop their ______.",
    "options": [
      "desire",
      "frustration",
      "origin",
      "creativity"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The ______ of a new national museum took over ten years of planning and required the support of many generous donors.",
    "options": [
      "reformer",
      "migration",
      "creation",
      "efficiency"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "She decided to ______ the difficult mountain climb despite the cold weather and the warnings from experienced hikers.",
    "options": [
      "frustrate",
      "attempt",
      "manufacture",
      "reform"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "His first ______ at making homemade bread failed completely, but he refused to give up and tried again the next day.",
    "options": [
      "attempt",
      "novelist",
      "originality",
      "expense"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The technician spent two hours trying to ______ the broken laptop, but eventually had to order a new part.",
    "options": [
      "continuously rain",
      "attempt to fix",
      "historical novel",
      "paper manufacturer"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The school counsellor encouraged students to ______ speak English outside the classroom as often as possible.",
    "options": [
      "continuously rain",
      "novel approach",
      "make attempts to",
      "make up for"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "______ save money, she started cooking all her meals at home instead of eating at restaurants every day.",
    "options": [
      "In an attempt to",
      "original form",
      "spare no expense",
      "original ideas"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The new government promised to ______ the education system so that all children could have equal access to quality schooling.",
    "options": [
      "manufacture",
      "desired",
      "migrate",
      "reform"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The healthcare ______ introduced last year has made it much easier for low-income families to see a doctor for free.",
    "options": [
      "immigrant",
      "reform",
      "attempt",
      "frustration"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The new principal believed that the only way to improve the school was to ______ and involve every teacher.",
    "options": [
      "reform from the bottom up",
      "originated in",
      "original form",
      "spare no expense"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "Despite strong opposition from some groups, the minister continued to ______ and refused to back down.",
    "options": [
      "In an attempt to",
      "originated in",
      "push forward with reform",
      "desire money"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "The famous social ______ dedicated her entire life to improving working conditions for labourers in the nineteenth century.",
    "options": [
      "expense",
      "frustration",
      "efficiency",
      "reformer"
    ],
    "answer": 3,
    "vocabIndex": 35
  },
  {
    "q": "The new software dramatically improved the team's ______, allowing them to complete reports in half the usual time.",
    "options": [
      "efficiency",
      "expense",
      "fortune",
      "originality"
    ],
    "answer": 0,
    "vocabIndex": 36
  },
  {
    "q": "An ______ study schedule helps students cover all subjects without feeling overwhelmed before final examinations.",
    "options": [
      "frustrating",
      "original",
      "bare",
      "efficient"
    ],
    "answer": 3,
    "vocabIndex": 37
  },
  {
    "q": "Although the new employee lacked experience, her enthusiasm and hard work helped ______ her low efficiency in the early weeks.",
    "options": [
      "at the expense of",
      "had no desire to",
      "make up for",
      "push forward with reform"
    ],
    "answer": 2,
    "vocabIndex": 38
  },
  {
    "q": "The car ______ announced a major recall after discovering a safety defect in the braking system of its newest model.",
    "options": [
      "creativity",
      "manufacturer",
      "originality",
      "migrant"
    ],
    "answer": 1,
    "vocabIndex": 39
  },
  {
    "q": "The company plans to ______ its new electric scooters in Taiwan before expanding sales to markets across Southeast Asia.",
    "options": [
      "frustrate",
      "reform",
      "continue",
      "manufacture"
    ],
    "answer": 3,
    "vocabIndex": 40
  },
  {
    "q": "The firm specialises in contracts to ______ for hospitals, producing high-precision tools used in surgical procedures.",
    "options": [
      "desire money",
      "paper manufacturer",
      "manufacture equipment",
      "make attempts to"
    ],
    "answer": 2,
    "vocabIndex": 41
  },
  {
    "q": "The local ______ has been supplying recycled paper to schools and offices in the region for over thirty years.",
    "options": [
      "make up for",
      "paper manufacturer",
      "originated in",
      "desire money"
    ],
    "answer": 1,
    "vocabIndex": 42
  },
  {
    "q": "______, the concert was cancelled at the last minute due to the severe typhoon warning issued by the government.",
    "options": [
      "Unfortunately",
      "barely",
      "Fortunately",
      "continually"
    ],
    "answer": 0,
    "vocabIndex": 43
  },
  {
    "q": "We were very ______ that the rain stopped just in time for the outdoor graduation ceremony to begin on schedule.",
    "options": [
      "unfortunate",
      "creative",
      "fortunate",
      "novel"
    ],
    "answer": 2,
    "vocabIndex": 44
  },
  {
    "q": "______, a kind stranger found her lost wallet and handed it in to the police station with everything still inside.",
    "options": [
      "Fortunately",
      "barely",
      "continuously",
      "originally"
    ],
    "answer": 0,
    "vocabIndex": 45
  },
  {
    "q": "It was ______ that the team's best player was injured right before the most important match of the season.",
    "options": [
      "efficient",
      "unfortunate",
      "novel",
      "frustrating"
    ],
    "answer": 1,
    "vocabIndex": 46
  },
  {
    "q": "He spent his entire ______ on a failed business venture and had to start completely from scratch at the age of fifty.",
    "options": [
      "migrant",
      "expense",
      "reform",
      "fortune"
    ],
    "answer": 3,
    "vocabIndex": 47
  },
  {
    "q": "The ______ plan was to hold the event outdoors, but it had to be moved inside because of the unexpected heavy rain.",
    "options": [
      "frustrated",
      "expensive",
      "original",
      "creative"
    ],
    "answer": 2,
    "vocabIndex": 48
  },
  {
    "q": "The museum displayed the ______ of the famous painting, while high-quality prints were sold in the gift shop nearby.",
    "options": [
      "originality",
      "migrant",
      "novel",
      "original"
    ],
    "answer": 3,
    "vocabIndex": 49
  },
  {
    "q": "The architect preserved the building's ______ while updating the interior to meet modern safety and comfort standards.",
    "options": [
      "original form",
      "novel approach",
      "make attempts to",
      "continually interrupt"
    ],
    "answer": 0,
    "vocabIndex": 50
  },
  {
    "q": "The judge praised the student's ______ and said it was unlike anything she had seen in twenty years of teaching.",
    "options": [
      "original form",
      "original ideas",
      "make up for",
      "novel approach"
    ],
    "answer": 1,
    "vocabIndex": 51
  },
  {
    "q": "The team had to abandon their ______ after the budget was cut and find a more affordable solution instead.",
    "options": [
      "desire money",
      "novel approach",
      "original plans",
      "had no desire to"
    ],
    "answer": 2,
    "vocabIndex": 52
  },
  {
    "q": "Scientists are still debating the exact ______ of the universe and how the first stars and galaxies were formed.",
    "options": [
      "expense",
      "attempt",
      "fortune",
      "origin"
    ],
    "answer": 3,
    "vocabIndex": 53
  },
  {
    "q": "The building was ______ a warehouse, but it was converted into a trendy café and art gallery about five years ago.",
    "options": [
      "originally",
      "Unfortunately",
      "continuously",
      "continually"
    ],
    "answer": 0,
    "vocabIndex": 54
  },
  {
    "q": "The judges awarded first prize to her design because of its ______ and the way it solved the problem in a fresh way.",
    "options": [
      "reform",
      "originality",
      "expense",
      "creativity"
    ],
    "answer": 1,
    "vocabIndex": 55
  },
  {
    "q": "Many of the words we use in modern English ______ from Latin and Greek, especially in science and medicine.",
    "options": [
      "reform",
      "manufacture",
      "originate",
      "immigrate"
    ],
    "answer": 2,
    "vocabIndex": 56
  },
  {
    "q": "Researchers believe the ancient tradition ______ a small coastal village and gradually spread to the whole country.",
    "options": [
      "historical novel",
      "novel approach",
      "push forward with reform",
      "originated in"
    ],
    "answer": 3,
    "vocabIndex": 57
  },
  {
    "q": "The scientist proposed a ______ solution to the water shortage problem that had never been tried in the region before.",
    "options": [
      "creative",
      "novel",
      "original",
      "bare"
    ],
    "answer": 1,
    "vocabIndex": 58
  },
  {
    "q": "She read the entire ______ in just two days because the plot was so gripping that she simply could not put it down.",
    "options": [
      "novel",
      "reform",
      "migrant",
      "expense"
    ],
    "answer": 0,
    "vocabIndex": 59
  },
  {
    "q": "The teacher tried a ______ to teaching grammar by using funny video clips instead of traditional textbook exercises.",
    "options": [
      "original ideas",
      "novel approach",
      "immigrate to",
      "paper manufacturer"
    ],
    "answer": 1,
    "vocabIndex": 60
  },
  {
    "q": "The ______ was set during the Second World War and told the story of a young nurse working on the front lines.",
    "options": [
      "creative writer",
      "immigrate to",
      "continuously rain",
      "historical novel"
    ],
    "answer": 3,
    "vocabIndex": 61
  },
  {
    "q": "The award-winning ______ said in an interview that she draws inspiration from her own childhood memories and travels.",
    "options": [
      "novelist",
      "manufacturer",
      "attempt",
      "original"
    ],
    "answer": 0,
    "vocabIndex": 62
  },
  {
    "q": "All she ______ was a quiet evening at home with her family after months of stressful business travel overseas.",
    "options": [
      "migrate",
      "continue",
      "desired",
      "attempt"
    ],
    "answer": 2,
    "vocabIndex": 63
  },
  {
    "q": "His deep ______ to become a professional musician motivated him to practise the guitar for hours every single day.",
    "options": [
      "expense",
      "immigrant",
      "novelist",
      "desire"
    ],
    "answer": 3,
    "vocabIndex": 64
  },
  {
    "q": "People who only ______ often forget that health, relationships, and personal growth are far more important in life.",
    "options": [
      "had no desire to",
      "desire money",
      "reform from the bottom up",
      "barely hear"
    ],
    "answer": 1,
    "vocabIndex": 65
  },
  {
    "q": "After reading about the dangerous conditions, she ______ join the expedition and decided to stay home instead.",
    "options": [
      "original plans",
      "push forward with reform",
      "had no desire to",
      "original form"
    ],
    "answer": 2,
    "vocabIndex": 66
  },
  {
    "q": "Studying abroad is a huge ______, so many students apply for scholarships to help cover the cost of tuition and living.",
    "options": [
      "expense",
      "fortune",
      "original",
      "frustration"
    ],
    "answer": 0,
    "vocabIndex": 67
  },
  {
    "q": "She kept a detailed budget to track her ______ and made sure she was saving at least ten percent of her income.",
    "options": [
      "original plans",
      "novel approach",
      "monthly living expenses",
      "immigrate to"
    ],
    "answer": 2,
    "vocabIndex": 68
  },
  {
    "q": "The research team had to ______ a great deal of effort collecting data before they could begin analysing the results.",
    "options": [
      "originate",
      "immigrate",
      "frustrate",
      "expend"
    ],
    "answer": 3,
    "vocabIndex": 69
  },
  {
    "q": "Fresh truffles are one of the most ______ ingredients in the world because they are extremely rare and hard to find.",
    "options": [
      "continuous",
      "expensive",
      "novel",
      "unfortunate"
    ],
    "answer": 1,
    "vocabIndex": 70
  },
  {
    "q": "The couple decided to ______ on their wedding and hired the best caterer, florist, and photographer available.",
    "options": [
      "spare no expense",
      "paper manufacturer",
      "novel approach",
      "monthly living expenses"
    ],
    "answer": 0,
    "vocabIndex": 71
  },
  {
    "q": "The company trip to Japan was organised ______, so all staff were excited and grateful for the opportunity.",
    "options": [
      "immigrate to",
      "at the expense of",
      "historical novel",
      "at somebody's expense"
    ],
    "answer": 3,
    "vocabIndex": 72
  },
  {
    "q": "He achieved career success ______ his health by working eighty-hour weeks for several years without rest.",
    "options": [
      "at the expense of",
      "continuously rain",
      "novel approach",
      "attempt to fix"
    ],
    "answer": 0,
    "vocabIndex": 73
  }
];

const LOOKUP = {
  "continuously": {
    "pos": "adv.",
    "en_def": "happening without any pauses or interruptions.",
    "cn_def": "連續不斷地（無間斷）",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "happening without any pauses or interruptions.",
        "cn_def": "連續不斷地（無間斷）"
      }
    ]
  },
  "continuous": {
    "pos": "adj.",
    "en_def": "ongoing over a long period without stopping.",
    "cn_def": "連續的、不斷的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "ongoing over a long period without stopping.",
        "cn_def": "連續的、不斷的"
      }
    ]
  },
  "continuously rain": {
    "pos": "phr.",
    "en_def": "to rain nonstop without breaking.",
    "cn_def": "連續降雨",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to rain nonstop without breaking.",
        "cn_def": "連續降雨"
      }
    ]
  },
  "continually": {
    "pos": "adv.",
    "en_def": "starting and stopping repeatedly.",
    "cn_def": "頻繁地、接連地（有間斷）",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "starting and stopping repeatedly.",
        "cn_def": "頻繁地、接連地（有間斷）"
      }
    ]
  },
  "continually interrupt": {
    "pos": "phr.",
    "en_def": "to break into someone's talk again and again.",
    "cn_def": "不斷打斷、屢次干擾",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to break into someone's talk again and again.",
        "cn_def": "不斷打斷、屢次干擾"
      }
    ]
  },
  "continue": {
    "pos": "v.",
    "en_def": "to keep doing or maintaining something.",
    "cn_def": "繼續、持續",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to keep doing or maintaining something.",
        "cn_def": "繼續、持續"
      }
    ]
  },
  "barely": {
    "pos": "adv.",
    "en_def": "only just; almost not at all.",
    "cn_def": "僅僅、勉強、幾乎不",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "only just; almost not at all.",
        "cn_def": "僅僅、勉強、幾乎不"
      }
    ]
  },
  "barely hear": {
    "pos": "phr.",
    "en_def": "to be almost unable to catch a sound.",
    "cn_def": "幾乎聽不到",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be almost unable to catch a sound.",
        "cn_def": "幾乎聽不到"
      }
    ]
  },
  "bare": {
    "pos": "adj.",
    "en_def": "without clothes, coverage, or any decorations.",
    "cn_def": "赤裸的、空無一物的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "without clothes, coverage, or any decorations.",
        "cn_def": "赤裸的、空無一物的"
      }
    ]
  },
  "bare feet": {
    "pos": "phr.",
    "en_def": "feet without socks or shoes on.",
    "cn_def": "光腳、赤腳",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "feet without socks or shoes on.",
        "cn_def": "光腳、赤腳"
      }
    ]
  },
  "frustrated": {
    "pos": "adj.",
    "en_def": "feeling annoyed or discouraged due to failure.",
    "cn_def": "感到沮喪的、灰心的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling annoyed or discouraged due to failure.",
        "cn_def": "感到沮喪的、灰心的"
      }
    ]
  },
  "frustrate": {
    "pos": "v.",
    "en_def": "to block someone from finishing a goal.",
    "cn_def": "使沮喪",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to block someone from finishing a goal.",
        "cn_def": "使沮喪"
      }
    ]
  },
  "frustrating": {
    "pos": "adj.",
    "en_def": "making you feel annoyed, stuck, or disappointed.",
    "cn_def": "令人沮喪的、氣人的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "making you feel annoyed, stuck, or disappointed.",
        "cn_def": "令人沮喪的、氣人的"
      }
    ]
  },
  "frustration": {
    "pos": "n.",
    "en_def": "the state of feeling discouraged or blocked.",
    "cn_def": "沮喪、挫敗感",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of feeling discouraged or blocked.",
        "cn_def": "沮喪、挫敗感"
      }
    ]
  },
  "immigrant": {
    "pos": "n.",
    "en_def": "a person who comes to a country to settle long-term.",
    "cn_def": "（自外國移入的）移民",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who comes to a country to settle long-term.",
        "cn_def": "（自外國移入的）移民"
      }
    ]
  },
  "immigrate": {
    "pos": "v.",
    "en_def": "to move permanently into a foreign country.",
    "cn_def": "移居入境",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to move permanently into a foreign country.",
        "cn_def": "移居入境"
      }
    ]
  },
  "immigrate to": {
    "pos": "phr.",
    "en_def": "to enter and settle down in a specific country.",
    "cn_def": "移民到…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to enter and settle down in a specific country.",
        "cn_def": "移民到…"
      }
    ]
  },
  "immigrate from": {
    "pos": "phr.",
    "en_def": "to leave your native home country for another.",
    "cn_def": "從…移民過來",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to leave your native home country for another.",
        "cn_def": "從…移民過來"
      }
    ]
  },
  "immigrated from": {
    "pos": "phr.",
    "en_def": "to leave your native home country for another.",
    "cn_def": "從…移民過來",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to leave your native home country for another.",
        "cn_def": "從…移民過來"
      }
    ]
  },
  "migrant": {
    "pos": "n.",
    "en_def": "a worker who travels around to find employment.",
    "cn_def": "移工、候鳥",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a worker who travels around to find employment.",
        "cn_def": "移工、候鳥"
      }
    ]
  },
  "migrate": {
    "pos": "v.",
    "en_def": "to move temporarily or seasonally to another place.",
    "cn_def": "遷徙、移動",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to move temporarily or seasonally to another place.",
        "cn_def": "遷徙、移動"
      }
    ]
  },
  "migration": {
    "pos": "n.",
    "en_def": "the process of moving from one region to another.",
    "cn_def": "遷徙、移居",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the process of moving from one region to another.",
        "cn_def": "遷徙、移居"
      }
    ]
  },
  "creative": {
    "pos": "adj.",
    "en_def": "showing original ideas or artistic imagination.",
    "cn_def": "富有創造力的、有創意的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing original ideas or artistic imagination.",
        "cn_def": "富有創造力的、有創意的"
      }
    ]
  },
  "creative writer": {
    "pos": "phr.",
    "en_def": "a writer who invents unique stories or poems.",
    "cn_def": "創意作家",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a writer who invents unique stories or poems.",
        "cn_def": "創意作家"
      }
    ]
  },
  "create": {
    "pos": "v.",
    "en_def": "to cause something completely new to exist.",
    "cn_def": "創造、發明",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause something completely new to exist.",
        "cn_def": "創造、發明"
      }
    ]
  },
  "creativity": {
    "pos": "n.",
    "en_def": "the capacity to bring forward new ideas.",
    "cn_def": "創造力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the capacity to bring forward new ideas.",
        "cn_def": "創造力"
      }
    ]
  },
  "creation": {
    "pos": "n.",
    "en_def": "an original product or the act of creating.",
    "cn_def": "創作品、建立",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an original product or the act of creating.",
        "cn_def": "創作品、建立"
      }
    ]
  },
  "attempt": {
    "pos": "v.",
    "en_def": "to try to do something, especially something hard.",
    "cn_def": "企圖、嘗試",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to try to do something, especially something hard.",
        "cn_def": "企圖、嘗試"
      },
      {
        "pos": "n.",
        "en_def": "an effort or try to achieve something.",
        "cn_def": "企圖、嘗試"
      }
    ]
  },
  "attempt to fix": {
    "pos": "phr.",
    "en_def": "to try to repair an object or situation.",
    "cn_def": "試圖修理",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to try to repair an object or situation.",
        "cn_def": "試圖修理"
      }
    ]
  },
  "make attempts to": {
    "pos": "phr.",
    "en_def": "to complete an effort toward a major goal.",
    "cn_def": "做出嘗試去…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to complete an effort toward a major goal.",
        "cn_def": "做出嘗試去…"
      }
    ]
  },
  "in an attempt to": {
    "pos": "phr.",
    "en_def": "with the goal or intention of doing something.",
    "cn_def": "試圖、為了要…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "with the goal or intention of doing something.",
        "cn_def": "試圖、為了要…"
      }
    ]
  },
  "reform": {
    "pos": "v.",
    "en_def": "to improve a system by making internal changes.",
    "cn_def": "改革、革新",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to improve a system by making internal changes.",
        "cn_def": "改革、革新"
      },
      {
        "pos": "n.",
        "en_def": "an official improvement made to a law or system.",
        "cn_def": "改革、革新"
      }
    ]
  },
  "reform from the bottom up": {
    "pos": "phr.",
    "en_def": "to change a structure thoroughly from base level.",
    "cn_def": "從基層徹底改革",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to change a structure thoroughly from base level.",
        "cn_def": "從基層徹底改革"
      }
    ]
  },
  "push forward with reform": {
    "pos": "phr.",
    "en_def": "to advocate and advance systemic updates.",
    "cn_def": "推進改革",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to advocate and advance systemic updates.",
        "cn_def": "推進改革"
      }
    ]
  },
  "reformer": {
    "pos": "n.",
    "en_def": "a person who wants to change or improve a system.",
    "cn_def": "改革者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who wants to change or improve a system.",
        "cn_def": "改革者"
      }
    ]
  },
  "efficiency": {
    "pos": "n.",
    "en_def": "competence; doing work well without wasting time.",
    "cn_def": "效率、效能",
    "combined": [
      {
        "pos": "n.",
        "en_def": "competence; doing work well without wasting time.",
        "cn_def": "效率、效能"
      }
    ]
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "working productively with zero wasted energy.",
    "cn_def": "有效率的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "working productively with zero wasted energy.",
        "cn_def": "有效率的"
      }
    ]
  },
  "make up for": {
    "pos": "phr.",
    "en_def": "to balance out a flaw using strong work speed.",
    "cn_def": "彌補效率",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to balance out a flaw using strong work speed.",
        "cn_def": "彌補效率"
      }
    ]
  },
  "make up for efficiency": {
    "pos": "phr.",
    "en_def": "to balance out a flaw using strong work speed.",
    "cn_def": "彌補效率",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to balance out a flaw using strong work speed.",
        "cn_def": "彌補效率"
      }
    ]
  },
  "manufacturer": {
    "pos": "n.",
    "en_def": "a company or person that makes finished goods.",
    "cn_def": "製造商、生產商",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a company or person that makes finished goods.",
        "cn_def": "製造商、生產商"
      }
    ]
  },
  "manufacture": {
    "pos": "v.",
    "en_def": "to produce goods in large quantities using machines.",
    "cn_def": "（大量）製造、加工",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to produce goods in large quantities using machines.",
        "cn_def": "（大量）製造、加工"
      }
    ]
  },
  "manufacture equipment": {
    "pos": "phr.",
    "en_def": "to build mechanical or computer devices.",
    "cn_def": "製造設備",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to build mechanical or computer devices.",
        "cn_def": "製造設備"
      }
    ]
  },
  "paper manufacturer": {
    "pos": "phr.",
    "en_def": "a factory or corporate body that outputs paper.",
    "cn_def": "造紙廠、紙張製造商",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a factory or corporate body that outputs paper.",
        "cn_def": "造紙廠、紙張製造商"
      }
    ]
  },
  "unfortunately": {
    "pos": "adv.",
    "en_def": "it is a pity that; unluckily.",
    "cn_def": "不幸地、遺憾地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "it is a pity that; unluckily.",
        "cn_def": "不幸地、遺憾地"
      }
    ]
  },
  "fortunate": {
    "pos": "adj.",
    "en_def": "lucky; having unexpected good wealth or success.",
    "cn_def": "幸運的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "lucky; having unexpected good wealth or success.",
        "cn_def": "幸運的"
      }
    ]
  },
  "fortunately": {
    "pos": "adv.",
    "en_def": "by a stroke of good luck; luckily.",
    "cn_def": "幸運地、還好",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "by a stroke of good luck; luckily.",
        "cn_def": "幸運地、還好"
      }
    ]
  },
  "unfortunate": {
    "pos": "adj.",
    "en_def": "unlucky; experiencing bad events or conditions.",
    "cn_def": "不幸的、倒楣的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "unlucky; experiencing bad events or conditions.",
        "cn_def": "不幸的、倒楣的"
      }
    ]
  },
  "fortune": {
    "pos": "n.",
    "en_def": "a large bundle of wealth or a destiny track.",
    "cn_def": "財富、運勢",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large bundle of wealth or a destiny track.",
        "cn_def": "財富、運勢"
      }
    ]
  },
  "original": {
    "pos": "adj.",
    "en_def": "existing from the absolute beginning.",
    "cn_def": "原來的、最初的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "existing from the absolute beginning.",
        "cn_def": "原來的、最初的"
      },
      {
        "pos": "n.",
        "en_def": "the first true painting or text, not a copy.",
        "cn_def": "原作、真跡"
      }
    ]
  },
  "original form": {
    "pos": "phr.",
    "en_def": "the initial baseline document or shape.",
    "cn_def": "原始表格、原型",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the initial baseline document or shape.",
        "cn_def": "原始表格、原型"
      }
    ]
  },
  "original ideas": {
    "pos": "phr.",
    "en_def": "completely fresh thoughts that stand out from others.",
    "cn_def": "獨創的想法",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "completely fresh thoughts that stand out from others.",
        "cn_def": "獨創的想法"
      }
    ]
  },
  "original plans": {
    "pos": "phr.",
    "en_def": "the baseline goals designed before adjustments.",
    "cn_def": "原定計畫",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the baseline goals designed before adjustments.",
        "cn_def": "原定計畫"
      }
    ]
  },
  "origin": {
    "pos": "n.",
    "en_def": "the starting source or root of something.",
    "cn_def": "起源、出身",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the starting source or root of something.",
        "cn_def": "起源、出身"
      }
    ]
  },
  "originally": {
    "pos": "adv.",
    "en_def": "in the beginning, before changes took place.",
    "cn_def": "原先、最初",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in the beginning, before changes took place.",
        "cn_def": "原先、最初"
      }
    ]
  },
  "originality": {
    "pos": "n.",
    "en_def": "the quality of being unique, clever, and new.",
    "cn_def": "獨創性、創意",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of being unique, clever, and new.",
        "cn_def": "獨創性、創意"
      }
    ]
  },
  "originate": {
    "pos": "v.",
    "en_def": "to begin or rise from a specific source.",
    "cn_def": "源自、創始",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to begin or rise from a specific source.",
        "cn_def": "源自、創始"
      }
    ]
  },
  "originated in": {
    "pos": "phr.",
    "en_def": "to start or develop inside a specific place.",
    "cn_def": "發源於…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to start or develop inside a specific place.",
        "cn_def": "發源於…"
      }
    ]
  },
  "originate in": {
    "pos": "phr.",
    "en_def": "to start or develop inside a specific place.",
    "cn_def": "發源於…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to start or develop inside a specific place.",
        "cn_def": "發源於…"
      }
    ]
  },
  "novel": {
    "pos": "adj.",
    "en_def": "interestingly new, fresh, or unusual.",
    "cn_def": "新穎的、新奇的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "interestingly new, fresh, or unusual.",
        "cn_def": "新穎的、新奇的"
      },
      {
        "pos": "n.",
        "en_def": "a long printed book containing a fictional story.",
        "cn_def": "長篇小說"
      }
    ]
  },
  "novel approach": {
    "pos": "phr.",
    "en_def": "a completely fresh way of handling a scenario.",
    "cn_def": "新穎的方法",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a completely fresh way of handling a scenario.",
        "cn_def": "新穎的方法"
      }
    ]
  },
  "historical novel": {
    "pos": "phr.",
    "en_def": "a fictional book set against past human eras.",
    "cn_def": "歷史小說",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a fictional book set against past human eras.",
        "cn_def": "歷史小說"
      }
    ]
  },
  "novelist": {
    "pos": "n.",
    "en_def": "a person who writes fictional storybooks.",
    "cn_def": "小說家",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who writes fictional storybooks.",
        "cn_def": "小說家"
      }
    ]
  },
  "desire": {
    "pos": "v.",
    "en_def": "to want something very strongly.",
    "cn_def": "渴望、想要",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to want something very strongly.",
        "cn_def": "渴望、想要"
      },
      {
        "pos": "n.",
        "en_def": "a strong hope or wish for an item or status.",
        "cn_def": "渴望、慾望"
      }
    ]
  },
  "desired": {
    "pos": "v.",
    "en_def": "to want something very strongly.",
    "cn_def": "渴望、想要",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to want something very strongly.",
        "cn_def": "渴望、想要"
      }
    ]
  },
  "desire money": {
    "pos": "phr.",
    "en_def": "to want financial wealth above other elements.",
    "cn_def": "渴望金錢",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to want financial wealth above other elements.",
        "cn_def": "渴望金錢"
      }
    ]
  },
  "had no desire to": {
    "pos": "phr.",
    "en_def": "to have zero interest or wish to do an action.",
    "cn_def": "毫無意願去…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to have zero interest or wish to do an action.",
        "cn_def": "毫無意願去…"
      }
    ]
  },
  "have no desire to": {
    "pos": "phr.",
    "en_def": "to have zero interest or wish to do an action.",
    "cn_def": "毫無意願去…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to have zero interest or wish to do an action.",
        "cn_def": "毫無意願去…"
      }
    ]
  },
  "expense": {
    "pos": "n.",
    "en_def": "the amount of money spent to buy or do something.",
    "cn_def": "花費、費用、開支",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the amount of money spent to buy or do something.",
        "cn_def": "花費、費用、開支"
      }
    ]
  },
  "monthly living expenses": {
    "pos": "phr.",
    "en_def": "the routine cash needed to survive each month.",
    "cn_def": "每月生活開銷",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the routine cash needed to survive each month.",
        "cn_def": "每月生活開銷"
      }
    ]
  },
  "expend": {
    "pos": "v.",
    "en_def": "to use up time, money, or energy on a task.",
    "cn_def": "花費、消耗",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to use up time, money, or energy on a task.",
        "cn_def": "花費、消耗"
      }
    ]
  },
  "expensive": {
    "pos": "adj.",
    "en_def": "costing a huge amount of money.",
    "cn_def": "昂貴的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "costing a huge amount of money.",
        "cn_def": "昂貴的"
      }
    ]
  },
  "spare no expense": {
    "pos": "phr.",
    "en_def": "to spend any sum of money needed for success.",
    "cn_def": "不惜工本、不惜代價",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to spend any sum of money needed for success.",
        "cn_def": "不惜工本、不惜代價"
      }
    ]
  },
  "at somebody's expense": {
    "pos": "phr.",
    "en_def": "paid for entirely by another person or group.",
    "cn_def": "由某人買單/付費",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "paid for entirely by another person or group.",
        "cn_def": "由某人買單/付費"
      }
    ]
  },
  "at the expense of": {
    "pos": "phr.",
    "en_def": "causing harm, loss, or damage to another asset.",
    "cn_def": "以…為代價、犧牲…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "causing harm, loss, or damage to another asset.",
        "cn_def": "以…為代價、犧牲…"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
