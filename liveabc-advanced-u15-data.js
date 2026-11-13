// Unit 15 Quiz Data: protect – devotion
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Advanced U15 - protect – devotion",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "protect",
    "pos": "v.",
    "cn_def": "保護",
    "en_def": "to keep someone or something safe from injury, damage, or loss",
    "sentence": "These high-quality sunglasses {{BLANK}} the driver's eyes against harmful UV rays during sunny days.",
    "cn": "這些高品質的太陽眼鏡能在晴天保護駕駛的眼睛免受有害紫外線的傷害。"
  },
  {
    "word": "protect our valuable crops from",
    "pos": "phr.",
    "cn_def": "保護...免受...",
    "en_def": "to provide safety and prevent harm from a specific physical threat",
    "sentence": "We must take precautions to {{BLANK}} sudden winter ice storms.",
    "cn": "我們必須採取預防措施，以保護我們珍貴的農作物免受突然發生的冬季冰暴危害。"
  },
  {
    "word": "protective",
    "pos": "adj.",
    "cn_def": "防護的；保護欲強的",
    "en_def": "giving or intended to give protection; expressing a strong desire to protect someone",
    "sentence": "Jonah is very {{BLANK}} of his little sister and always checks on her when they go out.",
    "cn": "喬納對他的小妹妹保護欲很強，他們出門時他總是會照顧她。"
  },
  {
    "word": "protection",
    "pos": "n.",
    "cn_def": "保護；防護",
    "en_def": "the state of being kept safe from injury, damage, loss, or destruction",
    "sentence": "You will need to wear this heavy helmet for {{BLANK}} when you go into the dark cave.",
    "cn": "當你進入黑暗的洞穴時，你需要戴上這頂沉重的安全帽以尋求保護。"
  },
  {
    "word": "environmental protection",
    "pos": "n.",
    "cn_def": "環境保護（環保）",
    "en_def": "the practice of protecting the natural environment on individual, organizational or governmental levels",
    "sentence": "The government launched new campaigns for {{BLANK}} to reduce plastic waste in our oceans.",
    "cn": "政府發起了新的環保運動，以減少我們海洋中的塑膠垃圾。"
  },
  {
    "word": "protectionism",
    "pos": "n.",
    "cn_def": "保護主義",
    "en_def": "the theory or practice of shielding a country's domestic industries from foreign competition",
    "sentence": "Some economic advisors warn that strict {{BLANK}} will negatively affect international trade and custom procedures.",
    "cn": "一些經濟顧問警告說，嚴格的保護主義將會對國際貿易和海關程序產生負面影響。"
  },
  {
    "word": "commission",
    "pos": "n.",
    "cn_def": "委員會",
    "en_def": "an official group of people given the task to control or investigate something",
    "sentence": "The special {{BLANK}} for the environment will be doing a thorough study on global warming.",
    "cn": "這個特別的環境委員會將對全球暖化進行一次徹底的研究。"
  },
  {
    "word": "commission",
    "pos": "n.",
    "cn_def": "佣金",
    "en_def": "an amount of money paid to an employee based on the more products they sell",
    "sentence": "Kelly makes a substantial {{BLANK}} on every luxury dress she sells at the department store.",
    "cn": "凱莉在百貨公司每賣出一件奢侈禮服，就能賺取豐厚的佣金。"
  },
  {
    "word": "commissioned",
    "pos": "v.",
    "cn_def": "委任；委託",
    "en_def": "to officially choose or pay someone to perform a specific practical task",
    "sentence": "The city government {{BLANK}} the famous artist to create a large marble sculpture for the new park.",
    "cn": "市政府委託這位著名的藝術家為新公園創作一座大型大理石雕塑。"
  },
  {
    "word": "awake",
    "pos": "adj.",
    "cn_def": "清醒的",
    "en_def": "not asleep; conscious of one's surroundings and mental thoughts",
    "sentence": "Tom was still {{BLANK}} at 3:00 in the morning because he was worrying about his financial budget.",
    "cn": "湯姆在凌晨三點仍然清醒著，因為他正在為自己的財務預算感到擔憂。"
  },
  {
    "word": "awoke",
    "pos": "v.",
    "cn_def": "醒來；喚醒",
    "en_def": "to stop sleeping; to wake up or cause someone to wake up",
    "sentence": "I {{BLANK}} to the sudden sound of heavy rain and loud thunder outside my bedroom window.",
    "cn": "我在臥室窗外濕重的大雨和響亮的雷聲中突然醒來。"
  },
  {
    "word": "kept me awake",
    "pos": "phr.",
    "cn_def": "讓某人保持清醒",
    "en_def": "to cause a person to remain awake, preventing them from falling asleep",
    "sentence": "The persistent noise from the construction site across the street {{BLANK}} all night.",
    "cn": "對面建築工地持續不斷的噪音讓我整晚都無法入睡。"
  },
  {
    "word": "wide awake",
    "pos": "phr.",
    "cn_def": "完全清醒的",
    "en_def": "completely awake and alert, experiencing no drowsiness at all",
    "sentence": "A strong cup of Joe worked like a charm, and I was {{BLANK}} for my early morning meeting.",
    "cn": "一杯濃郁的咖啡非常靈驗，讓我大清早開會時完全保持清醒。"
  },
  {
    "word": "awoke Linda to",
    "pos": "phr.",
    "cn_def": "意識到...",
    "en_def": "to become fully aware of a specific reality, danger, or opportunity",
    "sentence": "The recent financial report {{BLANK}} the true possibilities of making money on the stock market.",
    "cn": "最近的財務報告讓琳達意識到了在股市上賺錢的真正可能性。"
  },
  {
    "word": "fond",
    "pos": "adj.",
    "cn_def": "喜愛的",
    "en_def": "having a strong liking, affection, or love for someone or something",
    "sentence": "Kelly is very {{BLANK}} of premium chocolate ice cream and eats a large bowl of it every weekend.",
    "cn": "凱莉非常喜愛頂級巧克力冰淇淋，每個週末都要吃上一大碗。"
  },
  {
    "word": "fond of",
    "pos": "phr.",
    "cn_def": "喜歡...；喜愛...",
    "en_def": "to have a liking or affection for someone or something, especially over a long period",
    "sentence": "Active adolescents are often highly {{BLANK}} utilizing customizable digital applications for daily fund management.",
    "cn": "活潑的青少年往往高度喜歡利用客製化的數位應用程式來進行日常的資金管理。"
  },
  {
    "word": "fondness",
    "pos": "n.",
    "cn_def": "喜愛；愛好",
    "en_def": "an affectionate liking or love for a specific person, place, or object",
    "sentence": "Over the years, the elderly scholar developed a deep {{BLANK}} for ancient history and architecture.",
    "cn": "這些年來，這位年長的學者對古代歷史與建築產生了深厚的喜愛。"
  },
  {
    "word": "developed a fondness for",
    "pos": "phr.",
    "cn_def": "培養對...的喜愛",
    "en_def": "to gradually begin to like a specific thing or activity over time",
    "sentence": "After living in Germany for a semester, I {{BLANK}} traditional lifestyle and cuisine.",
    "cn": "在德國生活了一個學期後，我培養了對當地傳統生活方式與料理的喜愛。"
  },
  {
    "word": "fragrance",
    "pos": "n.",
    "cn_def": "香氣；香味",
    "en_def": "a pleasant, sweet, or distinct smell, typically from flowers or perfume",
    "sentence": "The pleasant {{BLANK}} of the red roses could be smelled from across the busy city street.",
    "cn": "從繁忙的城市街道對面，就能聞到紅玫瑰迷人的香氣。"
  },
  {
    "word": "fragrant",
    "pos": "adj.",
    "cn_def": "香的；芬芳的",
    "en_def": "having a pleasant or sweet smell; aromatic",
    "sentence": "The hotel lobby was beautifully decorated with {{BLANK}} lilies that produced an appealing scent.",
    "cn": "飯店大廳用芬芳的百合花裝飾得十分美麗，散發出迷人的氣味。"
  },
  {
    "word": "insomnia",
    "pos": "n.",
    "cn_def": "失眠症",
    "en_def": "habitual sleeplessness; the persistent inability to fall asleep easily",
    "sentence": "Max has an ongoing problem with {{BLANK}} and often relies on classical music to fall asleep.",
    "cn": "麥斯有著長期的失眠問題，常常需要依賴古典音樂來入睡。"
  },
  {
    "word": "sleep deprivation",
    "pos": "n.",
    "cn_def": "睡眠不足；睡眠剝奪",
    "en_def": "the condition of not having enough sleep, which heavily affects mental and physical health",
    "sentence": "Suffering from chronic {{BLANK}} can significantly minimize an engineering staff member's working efficiency.",
    "cn": "遭受長期的睡眠不足會顯著降低工程人員的工作效率。"
  },
  {
    "word": "be deprived of",
    "pos": "phr.",
    "cn_def": "被剝奪...；喪失...",
    "en_def": "to have something necessary, important, or valuable taken away or withheld from you",
    "sentence": "Citizens in the war zone should not {{BLANK}} their basic human rights and access to clean water.",
    "cn": "戰爭地區的公民不應該被剝奪其基本人權以及獲取乾淨水源的權利。"
  },
  {
    "word": "victims",
    "pos": "n.",
    "cn_def": "受害者",
    "en_def": "a person harmed, injured, or killed as a result of a crime, accident, or event",
    "sentence": "The unfortunate accident {{BLANK}} were sent to the nearest hospital for immediate medical treatment.",
    "cn": "不幸的車禍受害者被送往最近的醫院接受緊急醫療救治。"
  },
  {
    "word": "fell victim to",
    "pos": "phr.",
    "cn_def": "成為...的受害者",
    "en_def": "to be harmed, destroyed, or severely affected by a bad situation",
    "sentence": "The local economy {{BLANK}} sudden globalization and the extensive outsourcing of manufacturing jobs.",
    "cn": "當地經濟成為了突如其來的全球化以及製造業工作大量外包的受害者。"
  },
  {
    "word": "misery",
    "pos": "n.",
    "cn_def": "悲慘；痛苦",
    "en_def": "a state or feeling of great distress or discomfort of mind or body",
    "sentence": "The poor citizens lived in severe {{BLANK}} for years after their country lost the critical war.",
    "cn": "在他們的國家輸掉了那場關鍵的戰爭後，貧窮的公民多年來一直生活在嚴重的悲慘之中。"
  },
  {
    "word": "miserable",
    "pos": "adj.",
    "cn_def": "悲慘的；痛苦的",
    "en_def": "wretchedly unhappy or uncomfortable; causing great discomfort or distress",
    "sentence": "The weather during our mountain holiday was completely {{BLANK}}, with constant freezing rain and thick fog.",
    "cn": "我們在山區度假期間的天氣極其糟糕，持續下著冰凍的雨並伴隨著濃霧。"
  },
  {
    "word": "savings",
    "pos": "n.",
    "cn_def": "存款；積蓄",
    "en_def": "the money that a person keeps or saves instead of spending it right away",
    "sentence": "Joe spent all of his hard-earned {{BLANK}} on buying a customized computer system for his new office.",
    "cn": "喬把自己所有的辛苦積蓄都花在為新辦公室購買一套客製化的電腦系統上。"
  },
  {
    "word": "savings account",
    "pos": "n.",
    "cn_def": "儲蓄帳戶",
    "en_def": "a bank account that earns interest on the money that is kept in storage",
    "sentence": "The financial advisor recommended that the young couple open a joint {{BLANK}} at the bank.",
    "cn": "理財顧問建議這對年輕夫婦在銀行開立一個共同儲蓄帳戶。"
  },
  {
    "word": "life savings",
    "pos": "n.",
    "cn_def": "一生的積蓄",
    "en_def": "all the money that a person has saved during their entire career or lifetime",
    "sentence": "The elderly widow lost her entire {{BLANK}} after falling victim to a clever online financial fraud.",
    "cn": "這位年長的寡婦在成為一場聰明的線上財務詐欺受害者後，失去了她一生的積蓄。"
  },
  {
    "word": "brakes",
    "pos": "n.",
    "cn_def": "煞車",
    "en_def": "a mechanical device for slowing or stopping a moving vehicle or wheel",
    "sentence": "If the {{BLANK}} on your automobile are not working properly, you should get them inspected immediately.",
    "cn": "如果你汽車上的煞車運作不正常，你應該立刻去進行檢查。"
  },
  {
    "word": "braked",
    "pos": "v.",
    "cn_def": "踩煞車；減速",
    "en_def": "to slow down or stop a moving vehicle by using a mechanical device",
    "sentence": "The experienced driver {{BLANK}} hard to avoid hitting the little boy who was running in the street.",
    "cn": "經驗豐富的駕駛緊急踩煞車，以避免撞到在街道上奔跑的小男孩。"
  },
  {
    "word": "abrupt",
    "pos": "adj.",
    "cn_def": "突然的；唐突的",
    "en_def": "sudden and unexpected, or brief and unfriendly in manner",
    "sentence": "The manager's {{BLANK}} departure from the corporate staff meeting surprised all of his colleagues.",
    "cn": "經理從公司員工會議上突然離席，讓他的所有同事感到驚訝。"
  },
  {
    "word": "abruptly",
    "pos": "adv.",
    "cn_def": "突然地；意外地",
    "en_def": "suddenly and unexpectedly, often in a way that causes discomfort or annoyance",
    "sentence": "When the city bus stopped {{BLANK}}, many of the standing passengers lost their balance and almost fell over.",
    "cn": "當公車突然停下來時，許多站立的乘客失去了平衡，差點摔倒。"
  },
  {
    "word": "cease",
    "pos": "v.",
    "cn_def": "停止；終止",
    "en_def": "to bring an end to an activity or state, or to stop happening officially",
    "sentence": "As they grow into adolescents, children {{BLANK}} to be interested in the simple toys they liked before.",
    "cn": "當他們成長為青少年時，孩子們便不再對他們以前喜歡的簡單玩具感興趣了。"
  },
  {
    "word": "cease-fire",
    "pos": "n.",
    "cn_def": "停火；停火協議",
    "en_def": "a temporary suspension of fighting or battle; a formal agreement to stop a war",
    "sentence": "The two warring countries finally signed a {{BLANK}} after months of diplomatic consultations and peace talks.",
    "cn": "這兩個交戰國在經歷了數月的外交諮商和和平談判後，終於簽署了停火協議。"
  },
  {
    "word": "tend to",
    "pos": "phr.",
    "cn_def": "傾向於...；往往會...",
    "en_def": "to be likely to behave in a particular way or have a specific characteristic",
    "sentence": "Busy office workers {{BLANK}} skip breakfast when they are under intense pressure to meet deadlines.",
    "cn": "忙碌的上班族在面臨準時交件的強烈壓力時，往往會不吃早餐。"
  },
  {
    "word": "tendency",
    "pos": "n.",
    "cn_def": "傾向",
    "en_def": "a likelihood to happen or an inclination toward a particular characteristic or type of behavior",
    "sentence": "The market data shows a clear {{BLANK}} toward utilizing digital banking systems for daily fund management.",
    "cn": "市場數據顯示出一種利用數位銀行系統進行日常資金管理的明顯傾向。"
  },
  {
    "word": "have a tendency to",
    "pos": "phr.",
    "cn_def": "有...的傾向/習慣",
    "en_def": "to frequently perform a specific action or exhibit a particular behavioral trait",
    "sentence": "Active adolescents {{BLANK}} make emotional decisions rather than logical ones when facing stress.",
    "cn": "活潑的青少年在面對壓力時，有做出情緒化決定而非理性決定的傾向。"
  },
  {
    "word": "withdraw",
    "pos": "v.",
    "cn_def": "提款；取錢",
    "en_def": "to take money out of a bank account or financial investment profile",
    "sentence": "The businessman went to the local automated teller machine to {{BLANK}} some cash for the transaction.",
    "cn": "這位商人去當地的自動櫃員機提領了一些現金以進行交易。"
  },
  {
    "word": "withdraw",
    "pos": "v.",
    "cn_def": "退縮；不與人交往；退出",
    "en_def": "to detach or remove oneself from social situations, activities, or relationships",
    "sentence": "After suffering a heavy emotional blow, the quiet teenager began to {{BLANK}} from his matching peer group.",
    "cn": "在遭受沉重的情感打擊後，這位安靜的青少年開始從他的同儕群體中退縮。"
  },
  {
    "word": "withdrawal",
    "pos": "n.",
    "cn_def": "提款；戒斷症狀",
    "en_def": "the act of taking money out of a bank; the unpleasant process of stopping an addiction",
    "sentence": "Emily experienced severe headaches and other signs of {{BLANK}} when she decided to quit smoking.",
    "cn": "當愛蜜莉決定戒菸時，她經歷了嚴重的頭痛和其他戒斷症狀。"
  },
  {
    "word": "moderate",
    "pos": "adj.",
    "cn_def": "適度的；溫和的",
    "en_def": "average in amount, intensity, quality, or degree; not extreme",
    "sentence": "Some professional doctors suggest that a {{BLANK}} amount of red wine can be good for your health.",
    "cn": "一些專業醫生建議，適度的紅酒對你的健康是有好處的。"
  },
  {
    "word": "scanned",
    "pos": "v.",
    "cn_def": "掃描；細看；瀏覽",
    "en_def": "to look at something carefully to find a feature, or to use an electronic device to gather data",
    "sentence": "When you go through the airport customs procedure, your luggage will be {{BLANK}} by an automated machine.",
    "cn": "當您通過機場海關程序時，您的行李將接受自動化機器的掃描。"
  },
  {
    "word": "tolerate",
    "pos": "v.",
    "cn_def": "容忍；寬容",
    "en_def": "to allow something that you do not like to exist or happen without protesting",
    "sentence": "The teacher said she would not {{BLANK}} any dishonest behavior or cheating during the academic examination.",
    "cn": "老師說她絕不容忍在學術考試中有任何不誠實的行為或作弊。"
  },
  {
    "word": "tolerant",
    "pos": "adj.",
    "cn_def": "寬容的；包容的",
    "en_def": "showing willingness to allow the existence of opinions or behavior that one does not agree with",
    "sentence": "Traditional parents tend to be more {{BLANK}} of their own children's accidental mistakes and bad behavior.",
    "cn": "傳統的父母往往對自己孩子不經意的錯誤和不良行為更具包容性。"
  },
  {
    "word": "tolerable",
    "pos": "adj.",
    "cn_def": "可容忍的；還可以的",
    "en_def": "able to be endured or accepted satisfactorily, though not pleasing",
    "sentence": "The persistent noise from the building construction site outside was {{BLANK}} only during the daytime.",
    "cn": "窗外建築工地持續不斷的噪音只有在白天才是可以容忍的。"
  },
  {
    "word": "substitute",
    "pos": "v.",
    "cn_def": "代替；替換",
    "en_def": "to use a person or object in place of another for a specific purpose",
    "sentence": "You can easily {{BLANK}} beef for shrimp in this traditional recipe if you cannot eat seafood.",
    "cn": "如果你不能吃海鮮，在這道傳統食譜中你可以輕鬆地用牛肉代替蝦子。"
  },
  {
    "word": "substitutes",
    "pos": "n.",
    "cn_def": "代替品；代理人",
    "en_def": "a person or thing acting or used in place of another",
    "sentence": "There are many high-quality tofu products in the market that serve as excellent {{BLANK}} for meat.",
    "cn": "市場上有許多高品質的豆腐產品，可以作為肉類極佳的代替品。"
  },
  {
    "word": "warned",
    "pos": "v.",
    "cn_def": "警告；提醒",
    "en_def": "to inform someone in advance of an impending danger, threat, or problem",
    "sentence": "Sammy {{BLANK}} his younger brother not to play with fire because it is extremely dangerous.",
    "cn": "薩米警告他的弟弟不要玩火，因為那是極其危險的。"
  },
  {
    "word": "warning",
    "pos": "n.",
    "cn_def": "警告；預兆",
    "en_def": "a statement or event that informs someone of a potential danger or problem",
    "sentence": "The weather bureau issued a severe storm {{BLANK}} for all coastal areas of the island.",
    "cn": "氣象局對該島的所有沿海地區發布了嚴重的暴風雨警告。"
  },
  {
    "word": "warned me of",
    "pos": "phr.",
    "cn_def": "警告某人注意...",
    "en_def": "to notify a person about a specific approaching threat or obstacle",
    "sentence": "I was about to cross the busy street when my reliable friend {{BLANK}} an approaching vehicle.",
    "cn": "我正準備穿越繁忙的街道時，我可靠的朋友提醒我注意一輛駛近的車輛。"
  },
  {
    "word": "adolescents",
    "pos": "n.",
    "cn_def": "青少年",
    "en_def": "a young person who is developing from a child into an adult; a teenager",
    "sentence": "This interactive learning web application is suitable for {{BLANK}} who want to improve their English skills.",
    "cn": "這款互動式學習網頁應用程式適合想要提升英文能力的青少年。"
  },
  {
    "word": "adolescence",
    "pos": "n.",
    "cn_def": "青少年時期",
    "en_def": "the period of life following the onset of puberty during which a young person develops from a child into an adult",
    "sentence": "Most teenagers experience rapid physical growth and emotional changes during their {{BLANK}}.",
    "cn": "大多數網頁網頁青少年在他們的青少年時期都會經歷快速的身體生長與情感變化。"
  },
  {
    "word": "visual",
    "pos": "adj.",
    "cn_def": "視覺的",
    "en_def": "relating to seeing or sight, or using images to communicate information",
    "sentence": "If you are deeply interested in the {{BLANK}} arts, you should study the oil paintings in this gallery.",
    "cn": "如果你對視覺藝術有著深厚的興趣，你應該研究這家畫廊裡的油畫。"
  },
  {
    "word": "non-visual",
    "pos": "adj.",
    "cn_def": "非視覺的",
    "en_def": "not relating to seeing or sight, relying on other senses like hearing or touch",
    "sentence": "The blind scholar relies on {{BLANK}} methods, such as listening to audiobooks, to gather research data.",
    "cn": "這位失明的學者依賴非視覺的方法（例如聽有聲書）來收集研究資料。"
  },
  {
    "word": "monitor",
    "pos": "v.",
    "cn_def": "監控；監測",
    "en_def": "to observe and check the progress or quality of something over a period of time",
    "sentence": "The emergency room doctor checked the patient every few minutes to {{BLANK}} his vital signs.",
    "cn": "急診室醫生每隔幾分鐘就檢查一次患者，以監測他的生命徵象。"
  },
  {
    "word": "monitor",
    "pos": "n.",
    "cn_def": "顯示器；螢幕",
    "en_def": "an electronic screen used to display data, images, or television signals",
    "sentence": "I bought a modern computer complete with a flat-panel {{BLANK}} and a customizable keyboard for my son.",
    "cn": "我買了一台現代化的電腦，配備了液晶顯示器和客製化鍵盤給我兒子。"
  },
  {
    "word": "grabbed",
    "pos": "v.",
    "cn_def": "抓取；奪取",
    "en_def": "to take hold of something suddenly and roughly or forcefully",
    "sentence": "Sandy {{BLANK}} a quick sandwich on her way to school because she overlooked her breakfast time.",
    "cn": "珊卓在去學校的路上隨手抓了一個三明治，因為她忽略了早餐時間。"
  },
  {
    "word": "grab a bite to eat",
    "pos": "phr.",
    "cn_def": "隨便吃點東西",
    "en_def": "to get a small amount of food quickly because you are busy or hungry",
    "sentence": "I am absolutely starving; let's {{BLANK}} at that small dining establishment on the corner.",
    "cn": "我簡直快餓死了；我們在角落那家小餐飲店隨便吃點東西吧。"
  },
  {
    "word": "proposal",
    "pos": "n.",
    "cn_def": "提案；建議",
    "en_def": "a formal plan or suggestion put forward for consideration or discussion by others",
    "sentence": "The conservative manager will most likely turn down our innovative marketing {{BLANK}} for the new platform.",
    "cn": "保守的經理很有可能會拒絕我們針對新平台所提出的創新行銷提案。"
  },
  {
    "word": "proposed",
    "pos": "v.",
    "cn_def": "提議；求婚",
    "en_def": "to suggest a specific plan or action formally for other people to consider",
    "sentence": "Mark {{BLANK}} that we visit the city museum this weekend to look at the contemporary art exhibition.",
    "cn": "馬克提議我們這個週末去參觀城市博物館，看看當代藝術展。"
  },
  {
    "word": "marriage proposal",
    "pos": "n.",
    "cn_def": "求婚",
    "en_def": "an offer of marriage made formally to a choice romantic partner",
    "sentence": "Marsha is deeply in love with Kevin, and she hopes he will make a {{BLANK}} soon.",
    "cn": "瑪莎深深愛著凱文，她希望他能儘快向她求婚。"
  },
  {
    "word": "committed",
    "pos": "v.",
    "cn_def": "犯（罪）；承擔義務；致力於",
    "en_def": "to perform an illegal act or a crime; to pledge or bind oneself to a certain course",
    "sentence": "The soldiers were fully {{BLANK}} to finding the enemy forces and completing their core mission.",
    "cn": "士兵們全力致力於尋找敵軍並完成他們的核心任務。"
  },
  {
    "word": "committed a crime",
    "pos": "phr.",
    "cn_def": "犯罪",
    "en_def": "to perform an action that violates the official laws of a country",
    "sentence": "Samuel did not violate any traffic regulations, so he has clearly {{BLANK}}.",
    "cn": "薩米沒有違反任何交通法規，因此他顯然沒有犯罪。"
  },
  {
    "word": "commit suicide",
    "pos": "phr.",
    "cn_def": "自殺",
    "en_def": "to intentionally destroy or end one's own life due to deep distress",
    "sentence": "The main character in the tragic film choices to {{BLANK}} at the very end of the movie.",
    "cn": "這部悲劇電影中的主角在電影的最後選擇了自殺。"
  },
  {
    "word": "committed himself to",
    "pos": "phr.",
    "cn_def": "讓自己致力於...",
    "en_def": "to pledge your time, energy, or loyalty completely to a specific task or person",
    "sentence": "Ted {{BLANK}} working extremely hard this semester to earn a full scholarship.",
    "cn": "泰德這學期讓自己極其努力地學習，以贏得全額獎金。"
  },
  {
    "word": "committed to",
    "pos": "phr.",
    "cn_def": "致力於...；有堅定承諾的",
    "en_def": "to be completely loyal to a specific plan, relationship, or course of action",
    "sentence": "The research institute is deeply {{BLANK}} developing an innovative and eco-friendly software framework.",
    "cn": "該研究所深深致力於開發一款創新且環保的軟體架構。"
  },
  {
    "word": "dedicated to",
    "pos": "phr.",
    "cn_def": "奉獻於...；專注於...",
    "en_def": "to give a large amount of time and effort to a particular prominent purpose",
    "sentence": "The supportive teacher is entirely {{BLANK}} helping her adolescent students realize their full potential.",
    "cn": "這位給予支持的老師完全專注於幫助她的青少年學生發揮他們的全部潛力。"
  },
  {
    "word": "devoted to",
    "pos": "phr.",
    "cn_def": "傾注於...；深愛...",
    "en_def": "to give all or most of your time, affection, or resources to a choice cause",
    "sentence": "The loving father is completely {{BLANK}} supporting his family and ensuring his children's data safety.",
    "cn": "這位慈愛的父親完全傾注於支持他的家庭並確保他孩子們的資料安全。"
  },
  {
    "word": "commitment",
    "pos": "n.",
    "cn_def": "承諾；奉獻；投入",
    "en_def": "a firm promise or firm decision to do something, or the quality of being dedicated",
    "sentence": "Joining the financial investment summer camp requires a strict {{BLANK}} of both your time and energy.",
    "cn": "參加這場財務投資夏令營，需要對你的時間和精力做出嚴格的投入。"
  },
  {
    "word": "dedicate",
    "pos": "v.",
    "cn_def": "把...奉獻在；將...用於",
    "en_def": "to officially give entirely one's time or effort to a specific professional task",
    "sentence": "The tech manufacturer decided to {{BLANK}} more resources to improving its automated server security features.",
    "cn": "科技製造商決定投入更多資源來改善其自動化伺服器的安全功能。"
  },
  {
    "word": "dedication",
    "pos": "n.",
    "cn_def": "奉獻；專心（名詞）",
    "en_def": "the quality of being committed to a task or purpose; unselfish loyalty",
    "sentence": "The successful launch of the online platform was the result of the engineering staff's hard work and {{BLANK}}.",
    "cn": "線上平台的成功推出，是全體工程人員努力工作與奉獻的結果。"
  },
  {
    "word": "devote",
    "pos": "v.",
    "cn_def": "奉獻；投入（動詞）",
    "en_def": "to give an amount of time, effort, or money to a particular important activity",
    "sentence": "Ambitious programming students routinely {{BLANK}} several hours each evening to reviewing complex coding guidelines.",
    "cn": "有抱負的程式設計學生通常每天晚上投入幾個小時來複習複雜的編碼指南。"
  },
  {
    "word": "devotion",
    "pos": "n.",
    "cn_def": "摯愛；奉獻；忠誠",
    "en_def": "great love or loyalty, or the enthusiastic giving of time to something",
    "sentence": "The nurse's exceptional {{BLANK}} to helping elderly patients earned her high praise from the central hospital board.",
    "cn": "這位護理師對幫助年長患者的卓越奉獻，為她贏得了中央醫院董事會的高度讚賞。"
  }
];

const MCQS = [
  {
    "q": "These high-quality sunglasses ______ the driver's eyes against harmful UV rays during sunny days.",
    "options": [
      "protect",
      "warned",
      "withdraw",
      "dedicate"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "We must take precautions to ______ sudden winter ice storms.",
    "options": [
      "fell victim to",
      "kept me awake",
      "dedicated to",
      "protect our valuable crops from"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Jonah is very ______ of his little sister and always checks on her when they go out.",
    "options": [
      "visual",
      "awake",
      "protective",
      "abrupt"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "You will need to wear this heavy helmet for ______ when you go into the dark cave.",
    "options": [
      "commitment",
      "protection",
      "protectionism",
      "cease-fire"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The government launched new campaigns for ______ to reduce plastic waste in our oceans.",
    "options": [
      "devoted to",
      "wide awake",
      "sleep deprivation",
      "environmental protection"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Some economic advisors warn that strict ______ will negatively affect international trade and custom procedures.",
    "options": [
      "protectionism",
      "proposal",
      "tendency",
      "commitment"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The special ______ for the environment will be doing a thorough study on global warming.",
    "options": [
      "commitment",
      "commission",
      "misery",
      "fondness"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Kelly makes a substantial ______ on every luxury dress she sells at the department store.",
    "options": [
      "cease-fire",
      "dedication",
      "commission",
      "tendency"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The city government ______ the famous artist to create a large marble sculpture for the new park.",
    "options": [
      "commissioned",
      "scanned",
      "devote",
      "substitute"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Tom was still ______ at 3:00 in the morning because he was worrying about his financial budget.",
    "options": [
      "tolerable",
      "awake",
      "non-visual",
      "moderate"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "I ______ to the sudden sound of heavy rain and loud thunder outside my bedroom window.",
    "options": [
      "commit suicide",
      "sleep deprivation",
      "committed",
      "awoke"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The persistent noise from the construction site across the street ______ all night.",
    "options": [
      "life savings",
      "environmental protection",
      "kept me awake",
      "developed a fondness for"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "A strong cup of Joe worked like a charm, and I was ______ for my early morning meeting.",
    "options": [
      "developed a fondness for",
      "warned me of",
      "commit suicide",
      "wide awake"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The recent financial report ______ the true possibilities of making money on the stock market.",
    "options": [
      "awoke Linda to",
      "environmental protection",
      "wide awake",
      "dedicated to"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Kelly is very ______ of premium chocolate ice cream and eats a large bowl of it every weekend.",
    "options": [
      "abrupt",
      "tolerable",
      "fond",
      "protective"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Active adolescents are often highly ______ utilizing customizable digital applications for daily fund management.",
    "options": [
      "awoke Linda to",
      "fond of",
      "commit suicide",
      "savings account"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Over the years, the elderly scholar developed a deep ______ for ancient history and architecture.",
    "options": [
      "savings",
      "substitutes",
      "fondness",
      "protection"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "After living in Germany for a semester, I ______ traditional lifestyle and cuisine.",
    "options": [
      "devoted to",
      "developed a fondness for",
      "dedicated to",
      "marriage proposal"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The pleasant ______ of the red roses could be smelled from across the busy city street.",
    "options": [
      "withdrawal",
      "protectionism",
      "devotion",
      "fragrance"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The hotel lobby was beautifully decorated with ______ lilies that produced an appealing scent.",
    "options": [
      "fragrant",
      "tolerable",
      "visual",
      "non-visual"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Max has an ongoing problem with ______ and often relies on classical music to fall asleep.",
    "options": [
      "monitor",
      "insomnia",
      "misery",
      "protectionism"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Suffering from chronic ______ can significantly minimize an engineering staff member's working efficiency.",
    "options": [
      "tend to",
      "marriage proposal",
      "developed a fondness for",
      "sleep deprivation"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Citizens in the war zone should not ______ their basic human rights and access to clean water.",
    "options": [
      "kept me awake",
      "committed",
      "be deprived of",
      "fond of"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The unfortunate accident ______ were sent to the nearest hospital for immediate medical treatment.",
    "options": [
      "victims",
      "proposal",
      "dedication",
      "withdrawal"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The local economy ______ sudden globalization and the extensive outsourcing of manufacturing jobs.",
    "options": [
      "be deprived of",
      "fell victim to",
      "fond of",
      "awoke Linda to"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The poor citizens lived in severe ______ for years after their country lost the critical war.",
    "options": [
      "fondness",
      "commitment",
      "misery",
      "dedication"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The weather during our mountain holiday was completely ______, with constant freezing rain and thick fog.",
    "options": [
      "miserable",
      "awake",
      "tolerant",
      "fond"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Joe spent all of his hard-earned ______ on buying a customized computer system for his new office.",
    "options": [
      "tendency",
      "adolescence",
      "adolescents",
      "savings"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The financial advisor recommended that the young couple open a joint ______ at the bank.",
    "options": [
      "committed",
      "savings account",
      "devoted to",
      "awoke"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The elderly widow lost her entire ______ after falling victim to a clever online financial fraud.",
    "options": [
      "life savings",
      "awoke",
      "dedicated to",
      "have a tendency to"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "If the ______ on your automobile are not working properly, you should get them inspected immediately.",
    "options": [
      "fragrance",
      "warning",
      "commitment",
      "brakes"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The experienced driver ______ hard to avoid hitting the little boy who was running in the street.",
    "options": [
      "devote",
      "warned",
      "braked",
      "protect"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The manager's ______ departure from the corporate staff meeting surprised all of his colleagues.",
    "options": [
      "miserable",
      "tolerant",
      "visual",
      "abrupt"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "When the city bus stopped ______, many of the standing passengers lost their balance and almost fell over.",
    "options": [
      "fragrant",
      "awake",
      "abruptly",
      "cease"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "As they grow into adolescents, children ______ to be interested in the simple toys they liked before.",
    "options": [
      "cease",
      "braked",
      "substitute",
      "scanned"
    ],
    "answer": 0,
    "vocabIndex": 34
  },
  {
    "q": "The two warring countries finally signed a ______ after months of diplomatic consultations and peace talks.",
    "options": [
      "commission",
      "cease-fire",
      "insomnia",
      "protectionism"
    ],
    "answer": 1,
    "vocabIndex": 35
  },
  {
    "q": "Busy office workers ______ skip breakfast when they are under intense pressure to meet deadlines.",
    "options": [
      "have a tendency to",
      "savings account",
      "tend to",
      "marriage proposal"
    ],
    "answer": 2,
    "vocabIndex": 36
  },
  {
    "q": "The market data shows a clear ______ toward utilizing digital banking systems for daily fund management.",
    "options": [
      "dedication",
      "fondness",
      "cease-fire",
      "tendency"
    ],
    "answer": 3,
    "vocabIndex": 37
  },
  {
    "q": "Active adolescents ______ make emotional decisions rather than logical ones when facing stress.",
    "options": [
      "environmental protection",
      "have a tendency to",
      "dedicated to",
      "wide awake"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "The businessman went to the local automated teller machine to ______ some cash for the transaction.",
    "options": [
      "withdraw",
      "cease",
      "braked",
      "tolerate"
    ],
    "answer": 0,
    "vocabIndex": 39
  },
  {
    "q": "After suffering a heavy emotional blow, the quiet teenager began to ______ from his matching peer group.",
    "options": [
      "commissioned",
      "scanned",
      "withdraw",
      "devote"
    ],
    "answer": 2,
    "vocabIndex": 40
  },
  {
    "q": "Emily experienced severe headaches and other signs of ______ when she decided to quit smoking.",
    "options": [
      "protection",
      "withdrawal",
      "warning",
      "dedication"
    ],
    "answer": 1,
    "vocabIndex": 41
  },
  {
    "q": "Some professional doctors suggest that a ______ amount of red wine can be good for your health.",
    "options": [
      "abrupt",
      "tolerable",
      "fond",
      "moderate"
    ],
    "answer": 3,
    "vocabIndex": 42
  },
  {
    "q": "When you go through the airport customs procedure, your luggage will be ______ by an automated machine.",
    "options": [
      "scanned",
      "cease",
      "devote",
      "commissioned"
    ],
    "answer": 0,
    "vocabIndex": 43
  },
  {
    "q": "The teacher said she would not ______ any dishonest behavior or cheating during the academic examination.",
    "options": [
      "braked",
      "tolerate",
      "cease",
      "proposed"
    ],
    "answer": 1,
    "vocabIndex": 44
  },
  {
    "q": "Traditional parents tend to be more ______ of their own children's accidental mistakes and bad behavior.",
    "options": [
      "fond",
      "moderate",
      "tolerant",
      "protective"
    ],
    "answer": 2,
    "vocabIndex": 45
  },
  {
    "q": "The persistent noise from the building construction site outside was ______ only during the daytime.",
    "options": [
      "tolerable",
      "visual",
      "miserable",
      "fond"
    ],
    "answer": 0,
    "vocabIndex": 46
  },
  {
    "q": "You can easily ______ beef for shrimp in this traditional recipe if you cannot eat seafood.",
    "options": [
      "devote",
      "withdraw",
      "scanned",
      "substitute"
    ],
    "answer": 3,
    "vocabIndex": 47
  },
  {
    "q": "There are many high-quality tofu products in the market that serve as excellent ______ for meat.",
    "options": [
      "devotion",
      "substitutes",
      "misery",
      "withdrawal"
    ],
    "answer": 1,
    "vocabIndex": 48
  },
  {
    "q": "Sammy ______ his younger brother not to play with fire because it is extremely dangerous.",
    "options": [
      "warned",
      "tolerate",
      "braked",
      "monitor"
    ],
    "answer": 0,
    "vocabIndex": 49
  },
  {
    "q": "The weather bureau issued a severe storm ______ for all coastal areas of the island.",
    "options": [
      "tendency",
      "fondness",
      "warning",
      "devotion"
    ],
    "answer": 2,
    "vocabIndex": 50
  },
  {
    "q": "I was about to cross the busy street when my reliable friend ______ an approaching vehicle.",
    "options": [
      "committed to",
      "life savings",
      "marriage proposal",
      "warned me of"
    ],
    "answer": 3,
    "vocabIndex": 51
  },
  {
    "q": "This interactive learning web application is suitable for ______ who want to improve their English skills.",
    "options": [
      "cease-fire",
      "substitutes",
      "adolescents",
      "monitor"
    ],
    "answer": 2,
    "vocabIndex": 52
  },
  {
    "q": "Most teenagers experience rapid physical growth and emotional changes during their ______.",
    "options": [
      "withdrawal",
      "adolescence",
      "fondness",
      "fragrance"
    ],
    "answer": 1,
    "vocabIndex": 53
  },
  {
    "q": "If you are deeply interested in the ______ arts, you should study the oil paintings in this gallery.",
    "options": [
      "awake",
      "non-visual",
      "moderate",
      "visual"
    ],
    "answer": 3,
    "vocabIndex": 54
  },
  {
    "q": "The blind scholar relies on ______ methods, such as listening to audiobooks, to gather research data.",
    "options": [
      "non-visual",
      "tolerable",
      "abrupt",
      "tolerant"
    ],
    "answer": 0,
    "vocabIndex": 55
  },
  {
    "q": "The emergency room doctor checked the patient every few minutes to ______ his vital signs.",
    "options": [
      "scanned",
      "monitor",
      "dedicate",
      "devote"
    ],
    "answer": 1,
    "vocabIndex": 56
  },
  {
    "q": "I bought a modern computer complete with a flat-panel ______ and a customizable keyboard for my son.",
    "options": [
      "withdrawal",
      "protectionism",
      "warning",
      "monitor"
    ],
    "answer": 3,
    "vocabIndex": 57
  },
  {
    "q": "Sandy ______ a quick sandwich on her way to school because she overlooked her breakfast time.",
    "options": [
      "awoke Linda to",
      "developed a fondness for",
      "grabbed",
      "sleep deprivation"
    ],
    "answer": 2,
    "vocabIndex": 58
  },
  {
    "q": "I am absolutely starving; let's ______ at that small dining establishment on the corner.",
    "options": [
      "grab a bite to eat",
      "committed a crime",
      "kept me awake",
      "wide awake"
    ],
    "answer": 0,
    "vocabIndex": 59
  },
  {
    "q": "The conservative manager will most likely turn down our innovative marketing ______ for the new platform.",
    "options": [
      "savings",
      "proposal",
      "tendency",
      "warning"
    ],
    "answer": 1,
    "vocabIndex": 60
  },
  {
    "q": "Mark ______ that we visit the city museum this weekend to look at the contemporary art exhibition.",
    "options": [
      "braked",
      "protect",
      "proposed",
      "commissioned"
    ],
    "answer": 2,
    "vocabIndex": 61
  },
  {
    "q": "Marsha is deeply in love with Kevin, and she hopes he will make a ______ soon.",
    "options": [
      "marriage proposal",
      "warned me of",
      "sleep deprivation",
      "committed to"
    ],
    "answer": 0,
    "vocabIndex": 62
  },
  {
    "q": "The soldiers were fully ______ to finding the enemy forces and completing their core mission.",
    "options": [
      "committed to",
      "wide awake",
      "grabbed",
      "committed"
    ],
    "answer": 3,
    "vocabIndex": 63
  },
  {
    "q": "Samuel did not violate any traffic regulations, so he has clearly ______.",
    "options": [
      "committed a crime",
      "sleep deprivation",
      "kept me awake",
      "awoke"
    ],
    "answer": 0,
    "vocabIndex": 64
  },
  {
    "q": "The main character in the tragic film choices to ______ at the very end of the movie.",
    "options": [
      "be deprived of",
      "commit suicide",
      "sleep deprivation",
      "savings account"
    ],
    "answer": 1,
    "vocabIndex": 65
  },
  {
    "q": "Ted ______ working extremely hard this semester to earn a full scholarship.",
    "options": [
      "marriage proposal",
      "devoted to",
      "be deprived of",
      "committed himself to"
    ],
    "answer": 3,
    "vocabIndex": 66
  },
  {
    "q": "The research institute is deeply ______ developing an innovative and eco-friendly software framework.",
    "options": [
      "grab a bite to eat",
      "environmental protection",
      "committed to",
      "kept me awake"
    ],
    "answer": 2,
    "vocabIndex": 67
  },
  {
    "q": "The supportive teacher is entirely ______ helping her adolescent students realize their full potential.",
    "options": [
      "committed himself to",
      "dedicated to",
      "life savings",
      "devoted to"
    ],
    "answer": 1,
    "vocabIndex": 68
  },
  {
    "q": "The loving father is completely ______ supporting his family and ensuring his children's data safety.",
    "options": [
      "awoke",
      "tend to",
      "marriage proposal",
      "devoted to"
    ],
    "answer": 3,
    "vocabIndex": 69
  },
  {
    "q": "Joining the financial investment summer camp requires a strict ______ of both your time and energy.",
    "options": [
      "adolescents",
      "victims",
      "commitment",
      "monitor"
    ],
    "answer": 2,
    "vocabIndex": 70
  },
  {
    "q": "The tech manufacturer decided to ______ more resources to improving its automated server security features.",
    "options": [
      "dedicate",
      "monitor",
      "protect",
      "commissioned"
    ],
    "answer": 0,
    "vocabIndex": 71
  },
  {
    "q": "The successful launch of the online platform was the result of the engineering staff's hard work and ______.",
    "options": [
      "brakes",
      "withdrawal",
      "adolescence",
      "dedication"
    ],
    "answer": 3,
    "vocabIndex": 72
  },
  {
    "q": "Ambitious programming students routinely ______ several hours each evening to reviewing complex coding guidelines.",
    "options": [
      "devote",
      "monitor",
      "braked",
      "warned"
    ],
    "answer": 0,
    "vocabIndex": 73
  },
  {
    "q": "The nurse's exceptional ______ to helping elderly patients earned her high praise from the central hospital board.",
    "options": [
      "commitment",
      "tendency",
      "devotion",
      "savings"
    ],
    "answer": 2,
    "vocabIndex": 74
  }
];

const LOOKUP = {
  "protect": {
    "pos": "v.",
    "en_def": "to keep someone or something safe from injury, damage, or loss",
    "cn_def": "保護",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to keep someone or something safe from injury, damage, or loss",
        "cn_def": "保護"
      }
    ]
  },
  "protect our valuable crops from": {
    "pos": "phr.",
    "en_def": "to provide safety and prevent harm from a specific physical threat",
    "cn_def": "保護...免受...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to provide safety and prevent harm from a specific physical threat",
        "cn_def": "保護...免受..."
      }
    ]
  },
  "protect from": {
    "pos": "phr.",
    "en_def": "to provide safety and prevent harm from a specific physical threat",
    "cn_def": "保護...免受...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to provide safety and prevent harm from a specific physical threat",
        "cn_def": "保護...免受..."
      }
    ]
  },
  "protective": {
    "pos": "adj.",
    "en_def": "giving or intended to give protection; expressing a strong desire to protect someone",
    "cn_def": "防護的；保護欲強的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "giving or intended to give protection; expressing a strong desire to protect someone",
        "cn_def": "防護的；保護欲強的"
      }
    ]
  },
  "protection": {
    "pos": "n.",
    "en_def": "the state of being kept safe from injury, damage, loss, or destruction",
    "cn_def": "保護；防護",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being kept safe from injury, damage, loss, or destruction",
        "cn_def": "保護；防護"
      }
    ]
  },
  "environmental protection": {
    "pos": "n.",
    "en_def": "the practice of protecting the natural environment on individual, organizational or governmental levels",
    "cn_def": "環境保護（環保）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the practice of protecting the natural environment on individual, organizational or governmental levels",
        "cn_def": "環境保護（環保）"
      }
    ]
  },
  "protectionism": {
    "pos": "n.",
    "en_def": "the theory or practice of shielding a country's domestic industries from foreign competition",
    "cn_def": "保護主義",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the theory or practice of shielding a country's domestic industries from foreign competition",
        "cn_def": "保護主義"
      }
    ]
  },
  "commission": {
    "pos": "n.",
    "en_def": "an official group of people given the task to control or investigate something",
    "cn_def": "委員會",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an official group of people given the task to control or investigate something",
        "cn_def": "委員會"
      },
      {
        "pos": "n.",
        "en_def": "an amount of money paid to an employee based on the more products they sell",
        "cn_def": "佣金"
      },
      {
        "pos": "v.",
        "en_def": "to officially choose or pay someone to perform a specific practical task",
        "cn_def": "委任；委託"
      }
    ]
  },
  "commissioned": {
    "pos": "v.",
    "en_def": "to officially choose or pay someone to perform a specific practical task",
    "cn_def": "委任；委託",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to officially choose or pay someone to perform a specific practical task",
        "cn_def": "委任；委託"
      }
    ]
  },
  "awake": {
    "pos": "adj.",
    "en_def": "not asleep; conscious of one's surroundings and mental thoughts",
    "cn_def": "清醒的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not asleep; conscious of one's surroundings and mental thoughts",
        "cn_def": "清醒的"
      },
      {
        "pos": "v.",
        "en_def": "to stop sleeping; to wake up or cause someone to wake up",
        "cn_def": "醒來；喚醒"
      }
    ]
  },
  "awoke": {
    "pos": "v.",
    "en_def": "to stop sleeping; to wake up or cause someone to wake up",
    "cn_def": "醒來；喚醒",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to stop sleeping; to wake up or cause someone to wake up",
        "cn_def": "醒來；喚醒"
      }
    ]
  },
  "keep somebody awake": {
    "pos": "phr.",
    "en_def": "to cause a person to remain awake, preventing them from falling asleep",
    "cn_def": "讓某人保持清醒",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to cause a person to remain awake, preventing them from falling asleep",
        "cn_def": "讓某人保持清醒"
      }
    ]
  },
  "kept me awake": {
    "pos": "phr.",
    "en_def": "to cause a person to remain awake, preventing them from falling asleep",
    "cn_def": "讓某人保持清醒",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to cause a person to remain awake, preventing them from falling asleep",
        "cn_def": "讓某人保持清醒"
      }
    ]
  },
  "wide awake": {
    "pos": "phr.",
    "en_def": "completely awake and alert, experiencing no drowsiness at all",
    "cn_def": "完全清醒的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "completely awake and alert, experiencing no drowsiness at all",
        "cn_def": "完全清醒的"
      }
    ]
  },
  "awoke linda to": {
    "pos": "phr.",
    "en_def": "to become fully aware of a specific reality, danger, or opportunity",
    "cn_def": "意識到...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to become fully aware of a specific reality, danger, or opportunity",
        "cn_def": "意識到..."
      }
    ]
  },
  "awake to": {
    "pos": "phr.",
    "en_def": "to become fully aware of a specific reality, danger, or opportunity",
    "cn_def": "意識到...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to become fully aware of a specific reality, danger, or opportunity",
        "cn_def": "意識到..."
      }
    ]
  },
  "fond": {
    "pos": "adj.",
    "en_def": "having a strong liking, affection, or love for someone or something",
    "cn_def": "喜愛的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a strong liking, affection, or love for someone or something",
        "cn_def": "喜愛的"
      }
    ]
  },
  "fond of": {
    "pos": "phr.",
    "en_def": "to have a liking or affection for someone or something, especially over a long period",
    "cn_def": "喜歡...；喜愛...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to have a liking or affection for someone or something, especially over a long period",
        "cn_def": "喜歡...；喜愛..."
      }
    ]
  },
  "be fond of": {
    "pos": "phr.",
    "en_def": "to have a liking or affection for someone or something, especially over a long period",
    "cn_def": "喜歡...；喜愛...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to have a liking or affection for someone or something, especially over a long period",
        "cn_def": "喜歡...；喜愛..."
      }
    ]
  },
  "fondness": {
    "pos": "n.",
    "en_def": "an affectionate liking or love for a specific person, place, or object",
    "cn_def": "喜愛；愛好",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an affectionate liking or love for a specific person, place, or object",
        "cn_def": "喜愛；愛好"
      }
    ]
  },
  "developed a fondness for": {
    "pos": "phr.",
    "en_def": "to gradually begin to like a specific thing or activity over time",
    "cn_def": "培養對...的喜愛",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to gradually begin to like a specific thing or activity over time",
        "cn_def": "培養對...的喜愛"
      }
    ]
  },
  "develop a fondness for": {
    "pos": "phr.",
    "en_def": "to gradually begin to like a specific thing or activity over time",
    "cn_def": "培養對...的喜愛",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to gradually begin to like a specific thing or activity over time",
        "cn_def": "培養對...的喜愛"
      }
    ]
  },
  "fragrance": {
    "pos": "n.",
    "en_def": "a pleasant, sweet, or distinct smell, typically from flowers or perfume",
    "cn_def": "香氣；香味",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a pleasant, sweet, or distinct smell, typically from flowers or perfume",
        "cn_def": "香氣；香味"
      }
    ]
  },
  "fragrant": {
    "pos": "adj.",
    "en_def": "having a pleasant or sweet smell; aromatic",
    "cn_def": "香的；芬芳的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a pleasant or sweet smell; aromatic",
        "cn_def": "香的；芬芳的"
      }
    ]
  },
  "insomnia": {
    "pos": "n.",
    "en_def": "habitual sleeplessness; the persistent inability to fall asleep easily",
    "cn_def": "失眠症",
    "combined": [
      {
        "pos": "n.",
        "en_def": "habitual sleeplessness; the persistent inability to fall asleep easily",
        "cn_def": "失眠症"
      }
    ]
  },
  "sleep deprivation": {
    "pos": "n.",
    "en_def": "the condition of not having enough sleep, which heavily affects mental and physical health",
    "cn_def": "睡眠不足；睡眠剝奪",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the condition of not having enough sleep, which heavily affects mental and physical health",
        "cn_def": "睡眠不足；睡眠剝奪"
      }
    ]
  },
  "be deprived of": {
    "pos": "phr.",
    "en_def": "to have something necessary, important, or valuable taken away or withheld from you",
    "cn_def": "被剝奪...；喪失...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to have something necessary, important, or valuable taken away or withheld from you",
        "cn_def": "被剝奪...；喪失..."
      }
    ]
  },
  "victim": {
    "pos": "n.",
    "en_def": "a person harmed, injured, or killed as a result of a crime, accident, or event",
    "cn_def": "受害者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person harmed, injured, or killed as a result of a crime, accident, or event",
        "cn_def": "受害者"
      }
    ]
  },
  "victims": {
    "pos": "n.",
    "en_def": "a person harmed, injured, or killed as a result of a crime, accident, or event",
    "cn_def": "受害者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person harmed, injured, or killed as a result of a crime, accident, or event",
        "cn_def": "受害者"
      }
    ]
  },
  "fall victim to": {
    "pos": "phr.",
    "en_def": "to be harmed, destroyed, or severely affected by a bad situation",
    "cn_def": "成為...的受害者",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be harmed, destroyed, or severely affected by a bad situation",
        "cn_def": "成為...的受害者"
      }
    ]
  },
  "fell victim to": {
    "pos": "phr.",
    "en_def": "to be harmed, destroyed, or severely affected by a bad situation",
    "cn_def": "成為...的受害者",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be harmed, destroyed, or severely affected by a bad situation",
        "cn_def": "成為...的受害者"
      }
    ]
  },
  "misery": {
    "pos": "n.",
    "en_def": "a state or feeling of great distress or discomfort of mind or body",
    "cn_def": "悲慘；痛苦",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a state or feeling of great distress or discomfort of mind or body",
        "cn_def": "悲慘；痛苦"
      }
    ]
  },
  "miserable": {
    "pos": "adj.",
    "en_def": "wretchedly unhappy or uncomfortable; causing great discomfort or distress",
    "cn_def": "悲慘的；痛苦的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "wretchedly unhappy or uncomfortable; causing great discomfort or distress",
        "cn_def": "悲慘的；痛苦的"
      }
    ]
  },
  "savings": {
    "pos": "n.",
    "en_def": "the money that a person keeps or saves instead of spending it right away",
    "cn_def": "存款；積蓄",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the money that a person keeps or saves instead of spending it right away",
        "cn_def": "存款；積蓄"
      }
    ]
  },
  "savings account": {
    "pos": "n.",
    "en_def": "a bank account that earns interest on the money that is kept in storage",
    "cn_def": "儲蓄帳戶",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a bank account that earns interest on the money that is kept in storage",
        "cn_def": "儲蓄帳戶"
      }
    ]
  },
  "life savings": {
    "pos": "n.",
    "en_def": "all the money that a person has saved during their entire career or lifetime",
    "cn_def": "一生的積蓄",
    "combined": [
      {
        "pos": "n.",
        "en_def": "all the money that a person has saved during their entire career or lifetime",
        "cn_def": "一生的積蓄"
      }
    ]
  },
  "brakes": {
    "pos": "n.",
    "en_def": "a mechanical device for slowing or stopping a moving vehicle or wheel",
    "cn_def": "煞車",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a mechanical device for slowing or stopping a moving vehicle or wheel",
        "cn_def": "煞車"
      }
    ]
  },
  "brake": {
    "pos": "n.",
    "en_def": "a mechanical device for slowing or stopping a moving vehicle or wheel",
    "cn_def": "煞車",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a mechanical device for slowing or stopping a moving vehicle or wheel",
        "cn_def": "煞車"
      },
      {
        "pos": "v.",
        "en_def": "to slow down or stop a moving vehicle by using a mechanical device",
        "cn_def": "踩煞車；減速"
      }
    ]
  },
  "braked": {
    "pos": "v.",
    "en_def": "to slow down or stop a moving vehicle by using a mechanical device",
    "cn_def": "踩煞車；減速",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to slow down or stop a moving vehicle by using a mechanical device",
        "cn_def": "踩煞車；減速"
      }
    ]
  },
  "abrupt": {
    "pos": "adj.",
    "en_def": "sudden and unexpected, or brief and unfriendly in manner",
    "cn_def": "突然的；唐突的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "sudden and unexpected, or brief and unfriendly in manner",
        "cn_def": "突然的；唐突的"
      }
    ]
  },
  "abruptly": {
    "pos": "adv.",
    "en_def": "suddenly and unexpectedly, often in a way that causes discomfort or annoyance",
    "cn_def": "突然地；意外地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "suddenly and unexpectedly, often in a way that causes discomfort or annoyance",
        "cn_def": "突然地；意外地"
      }
    ]
  },
  "cease": {
    "pos": "v.",
    "en_def": "to bring an end to an activity or state, or to stop happening officially",
    "cn_def": "停止；終止",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to bring an end to an activity or state, or to stop happening officially",
        "cn_def": "停止；終止"
      }
    ]
  },
  "cease-fire": {
    "pos": "n.",
    "en_def": "a temporary suspension of fighting or battle; a formal agreement to stop a war",
    "cn_def": "停火；停火協議",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a temporary suspension of fighting or battle; a formal agreement to stop a war",
        "cn_def": "停火；停火協議"
      }
    ]
  },
  "tend to": {
    "pos": "phr.",
    "en_def": "to be likely to behave in a particular way or have a specific characteristic",
    "cn_def": "傾向於...；往往會...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be likely to behave in a particular way or have a specific characteristic",
        "cn_def": "傾向於...；往往會..."
      }
    ]
  },
  "tend to v": {
    "pos": "phr.",
    "en_def": "to be likely to behave in a particular way or have a specific characteristic",
    "cn_def": "傾向於...；往往會...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be likely to behave in a particular way or have a specific characteristic",
        "cn_def": "傾向於...；往往會..."
      }
    ]
  },
  "tendency": {
    "pos": "n.",
    "en_def": "a likelihood to happen or an inclination toward a particular characteristic or type of behavior",
    "cn_def": "傾向",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a likelihood to happen or an inclination toward a particular characteristic or type of behavior",
        "cn_def": "傾向"
      }
    ]
  },
  "have a tendency to": {
    "pos": "phr.",
    "en_def": "to frequently perform a specific action or exhibit a particular behavioral trait",
    "cn_def": "有...的傾向/習慣",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to frequently perform a specific action or exhibit a particular behavioral trait",
        "cn_def": "有...的傾向/習慣"
      }
    ]
  },
  "withdraw": {
    "pos": "v.",
    "en_def": "to take money out of a bank account or financial investment profile",
    "cn_def": "提款；取錢",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take money out of a bank account or financial investment profile",
        "cn_def": "提款；取錢"
      },
      {
        "pos": "v.",
        "en_def": "to detach or remove oneself from social situations, activities, or relationships",
        "cn_def": "退縮；不與人交往；退出"
      }
    ]
  },
  "withdrawal": {
    "pos": "n.",
    "en_def": "the act of taking money out of a bank; the unpleasant process of stopping an addiction",
    "cn_def": "提款；戒斷症狀",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of taking money out of a bank; the unpleasant process of stopping an addiction",
        "cn_def": "提款；戒斷症狀"
      }
    ]
  },
  "moderate": {
    "pos": "adj.",
    "en_def": "average in amount, intensity, quality, or degree; not extreme",
    "cn_def": "適度的；溫和的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "average in amount, intensity, quality, or degree; not extreme",
        "cn_def": "適度的；溫和的"
      }
    ]
  },
  "scanned": {
    "pos": "v.",
    "en_def": "to look at something carefully to find a feature, or to use an electronic device to gather data",
    "cn_def": "掃描；細看；瀏覽",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to look at something carefully to find a feature, or to use an electronic device to gather data",
        "cn_def": "掃描；細看；瀏覽"
      }
    ]
  },
  "scan": {
    "pos": "v.",
    "en_def": "to look at something carefully to find a feature, or to use an electronic device to gather data",
    "cn_def": "掃描；細看；瀏覽",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to look at something carefully to find a feature, or to use an electronic device to gather data",
        "cn_def": "掃描；細看；瀏覽"
      }
    ]
  },
  "tolerate": {
    "pos": "v.",
    "en_def": "to allow something that you do not like to exist or happen without protesting",
    "cn_def": "容忍；寬容",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to allow something that you do not like to exist or happen without protesting",
        "cn_def": "容忍；寬容"
      }
    ]
  },
  "tolerant": {
    "pos": "adj.",
    "en_def": "showing willingness to allow the existence of opinions or behavior that one does not agree with",
    "cn_def": "寬容的；包容的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing willingness to allow the existence of opinions or behavior that one does not agree with",
        "cn_def": "寬容的；包容的"
      }
    ]
  },
  "tolerable": {
    "pos": "adj.",
    "en_def": "able to be endured or accepted satisfactorily, though not pleasing",
    "cn_def": "可容忍的；還可以的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to be endured or accepted satisfactorily, though not pleasing",
        "cn_def": "可容忍的；還可以的"
      }
    ]
  },
  "substitute": {
    "pos": "v.",
    "en_def": "to use a person or object in place of another for a specific purpose",
    "cn_def": "代替；替換",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to use a person or object in place of another for a specific purpose",
        "cn_def": "代替；替換"
      },
      {
        "pos": "n.",
        "en_def": "a person or thing acting or used in place of another",
        "cn_def": "代替品；代理人"
      }
    ]
  },
  "substitute...for": {
    "pos": "v.",
    "en_def": "to use a person or object in place of another for a specific purpose",
    "cn_def": "代替；替換",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to use a person or object in place of another for a specific purpose",
        "cn_def": "代替；替換"
      }
    ]
  },
  "substitutes": {
    "pos": "n.",
    "en_def": "a person or thing acting or used in place of another",
    "cn_def": "代替品；代理人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or thing acting or used in place of another",
        "cn_def": "代替品；代理人"
      }
    ]
  },
  "warn": {
    "pos": "v.",
    "en_def": "to inform someone in advance of an impending danger, threat, or problem",
    "cn_def": "警告；提醒",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to inform someone in advance of an impending danger, threat, or problem",
        "cn_def": "警告；提醒"
      }
    ]
  },
  "warned": {
    "pos": "v.",
    "en_def": "to inform someone in advance of an impending danger, threat, or problem",
    "cn_def": "警告；提醒",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to inform someone in advance of an impending danger, threat, or problem",
        "cn_def": "警告；提醒"
      }
    ]
  },
  "warning": {
    "pos": "n.",
    "en_def": "a statement or event that informs someone of a potential danger or problem",
    "cn_def": "警告；預兆",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a statement or event that informs someone of a potential danger or problem",
        "cn_def": "警告；預兆"
      }
    ]
  },
  "warned me of": {
    "pos": "phr.",
    "en_def": "to notify a person about a specific approaching threat or obstacle",
    "cn_def": "警告某人注意...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to notify a person about a specific approaching threat or obstacle",
        "cn_def": "警告某人注意..."
      }
    ]
  },
  "warn somebody of": {
    "pos": "phr.",
    "en_def": "to notify a person about a specific approaching threat or obstacle",
    "cn_def": "警告某人注意...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to notify a person about a specific approaching threat or obstacle",
        "cn_def": "警告某人注意..."
      }
    ]
  },
  "adolescents": {
    "pos": "n.",
    "en_def": "a young person who is developing from a child into an adult; a teenager",
    "cn_def": "青少年",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a young person who is developing from a child into an adult; a teenager",
        "cn_def": "青少年"
      }
    ]
  },
  "adolescent": {
    "pos": "n.",
    "en_def": "a young person who is developing from a child into an adult; a teenager",
    "cn_def": "青少年",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a young person who is developing from a child into an adult; a teenager",
        "cn_def": "青少年"
      }
    ]
  },
  "adolescence": {
    "pos": "n.",
    "en_def": "the period of life following the onset of puberty during which a young person develops from a child into an adult",
    "cn_def": "青少年時期",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the period of life following the onset of puberty during which a young person develops from a child into an adult",
        "cn_def": "青少年時期"
      }
    ]
  },
  "visual": {
    "pos": "adj.",
    "en_def": "relating to seeing or sight, or using images to communicate information",
    "cn_def": "視覺的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to seeing or sight, or using images to communicate information",
        "cn_def": "視覺的"
      }
    ]
  },
  "non-visual": {
    "pos": "adj.",
    "en_def": "not relating to seeing or sight, relying on other senses like hearing or touch",
    "cn_def": "非視覺的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not relating to seeing or sight, relying on other senses like hearing or touch",
        "cn_def": "非視覺的"
      }
    ]
  },
  "monitor": {
    "pos": "v.",
    "en_def": "to observe and check the progress or quality of something over a period of time",
    "cn_def": "監控；監測",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to observe and check the progress or quality of something over a period of time",
        "cn_def": "監控；監測"
      },
      {
        "pos": "n.",
        "en_def": "an electronic screen used to display data, images, or television signals",
        "cn_def": "顯示器；螢幕"
      }
    ]
  },
  "grabbed": {
    "pos": "v.",
    "en_def": "to take hold of something suddenly and roughly or forcefully",
    "cn_def": "抓取；奪取",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take hold of something suddenly and roughly or forcefully",
        "cn_def": "抓取；奪取"
      }
    ]
  },
  "grab": {
    "pos": "v.",
    "en_def": "to take hold of something suddenly and roughly or forcefully",
    "cn_def": "抓取；奪取",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take hold of something suddenly and roughly or forcefully",
        "cn_def": "抓取；奪取"
      }
    ]
  },
  "grab a bite to eat": {
    "pos": "phr.",
    "en_def": "to get a small amount of food quickly because you are busy or hungry",
    "cn_def": "隨便吃點東西",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to get a small amount of food quickly because you are busy or hungry",
        "cn_def": "隨便吃點東西"
      }
    ]
  },
  "proposal": {
    "pos": "n.",
    "en_def": "a formal plan or suggestion put forward for consideration or discussion by others",
    "cn_def": "提案；建議",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a formal plan or suggestion put forward for consideration or discussion by others",
        "cn_def": "提案；建議"
      }
    ]
  },
  "proposed": {
    "pos": "v.",
    "en_def": "to suggest a specific plan or action formally for other people to consider",
    "cn_def": "提議；求婚",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to suggest a specific plan or action formally for other people to consider",
        "cn_def": "提議；求婚"
      }
    ]
  },
  "propose": {
    "pos": "v.",
    "en_def": "to suggest a specific plan or action formally for other people to consider",
    "cn_def": "提議；求婚",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to suggest a specific plan or action formally for other people to consider",
        "cn_def": "提議；求婚"
      }
    ]
  },
  "marriage proposal": {
    "pos": "n.",
    "en_def": "an offer of marriage made formally to a choice romantic partner",
    "cn_def": "求婚",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an offer of marriage made formally to a choice romantic partner",
        "cn_def": "求婚"
      }
    ]
  },
  "committed": {
    "pos": "v.",
    "en_def": "to perform an illegal act or a crime; to pledge or bind oneself to a certain course",
    "cn_def": "犯（罪）；承擔義務；致力於",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to perform an illegal act or a crime; to pledge or bind oneself to a certain course",
        "cn_def": "犯（罪）；承擔義務；致力於"
      }
    ]
  },
  "commit": {
    "pos": "v.",
    "en_def": "to perform an illegal act or a crime; to pledge or bind oneself to a certain course",
    "cn_def": "犯（罪）；承擔義務；致力於",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to perform an illegal act or a crime; to pledge or bind oneself to a certain course",
        "cn_def": "犯（罪）；承擔義務；致力於"
      }
    ]
  },
  "commit a crime": {
    "pos": "phr.",
    "en_def": "to perform an action that violates the official laws of a country",
    "cn_def": "犯罪",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to perform an action that violates the official laws of a country",
        "cn_def": "犯罪"
      }
    ]
  },
  "committed a crime": {
    "pos": "phr.",
    "en_def": "to perform an action that violates the official laws of a country",
    "cn_def": "犯罪",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to perform an action that violates the official laws of a country",
        "cn_def": "犯罪"
      }
    ]
  },
  "commit suicide": {
    "pos": "phr.",
    "en_def": "to intentionally destroy or end one's own life due to deep distress",
    "cn_def": "自殺",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to intentionally destroy or end one's own life due to deep distress",
        "cn_def": "自殺"
      }
    ]
  },
  "committed himself to": {
    "pos": "phr.",
    "en_def": "to pledge your time, energy, or loyalty completely to a specific task or person",
    "cn_def": "讓自己致力於...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to pledge your time, energy, or loyalty completely to a specific task or person",
        "cn_def": "讓自己致力於..."
      }
    ]
  },
  "commit oneself to": {
    "pos": "phr.",
    "en_def": "to pledge your time, energy, or loyalty completely to a specific task or person",
    "cn_def": "讓自己致力於...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to pledge your time, energy, or loyalty completely to a specific task or person",
        "cn_def": "讓自己致力於..."
      }
    ]
  },
  "be committed to": {
    "pos": "phr.",
    "en_def": "to be completely loyal to a specific plan, relationship, or course of action",
    "cn_def": "致力於...；有堅定承諾的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be completely loyal to a specific plan, relationship, or course of action",
        "cn_def": "致力於...；有堅定承諾的"
      }
    ]
  },
  "committed to": {
    "pos": "phr.",
    "en_def": "to be completely loyal to a specific plan, relationship, or course of action",
    "cn_def": "致力於...；有堅定承諾的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be completely loyal to a specific plan, relationship, or course of action",
        "cn_def": "致力於...；有堅定承諾的"
      }
    ]
  },
  "be dedicated to": {
    "pos": "phr.",
    "en_def": "to give a large amount of time and effort to a particular prominent purpose",
    "cn_def": "奉獻於...；專注於...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to give a large amount of time and effort to a particular prominent purpose",
        "cn_def": "奉獻於...；專注於..."
      }
    ]
  },
  "dedicated to": {
    "pos": "phr.",
    "en_def": "to give a large amount of time and effort to a particular prominent purpose",
    "cn_def": "奉獻於...；專注於...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to give a large amount of time and effort to a particular prominent purpose",
        "cn_def": "奉獻於...；專注於..."
      }
    ]
  },
  "be devoted to": {
    "pos": "phr.",
    "en_def": "to give all or most of your time, affection, or resources to a choice cause",
    "cn_def": "傾注於...；深愛...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to give all or most of your time, affection, or resources to a choice cause",
        "cn_def": "傾注於...；深愛..."
      }
    ]
  },
  "devoted to": {
    "pos": "phr.",
    "en_def": "to give all or most of your time, affection, or resources to a choice cause",
    "cn_def": "傾注於...；深愛...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to give all or most of your time, affection, or resources to a choice cause",
        "cn_def": "傾注於...；深愛..."
      }
    ]
  },
  "commitment": {
    "pos": "n.",
    "en_def": "a firm promise or firm decision to do something, or the quality of being dedicated",
    "cn_def": "承諾；奉獻；投入",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a firm promise or firm decision to do something, or the quality of being dedicated",
        "cn_def": "承諾；奉獻；投入"
      }
    ]
  },
  "dedicate": {
    "pos": "v.",
    "en_def": "to officially give entirely one's time or effort to a specific professional task",
    "cn_def": "把...奉獻在；將...用於",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to officially give entirely one's time or effort to a specific professional task",
        "cn_def": "把...奉獻在；將...用於"
      }
    ]
  },
  "dedication": {
    "pos": "n.",
    "en_def": "the quality of being committed to a task or purpose; unselfish loyalty",
    "cn_def": "奉獻；專心（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of being committed to a task or purpose; unselfish loyalty",
        "cn_def": "奉獻；專心（名詞）"
      }
    ]
  },
  "devote": {
    "pos": "v.",
    "en_def": "to give an amount of time, effort, or money to a particular important activity",
    "cn_def": "奉獻；投入（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give an amount of time, effort, or money to a particular important activity",
        "cn_def": "奉獻；投入（動詞）"
      }
    ]
  },
  "devotion": {
    "pos": "n.",
    "en_def": "great love or loyalty, or the enthusiastic giving of time to something",
    "cn_def": "摯愛；奉獻；忠誠",
    "combined": [
      {
        "pos": "n.",
        "en_def": "great love or loyalty, or the enthusiastic giving of time to something",
        "cn_def": "摯愛；奉獻；忠誠"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
