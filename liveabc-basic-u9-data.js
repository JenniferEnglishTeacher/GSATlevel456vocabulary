// Unit 9 Quiz Data: nation – unavailable
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Basic U9 - nation – unavailable",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "nation",
    "pos": "n.",
    "cn_def": "國家",
    "en_def": "a large body of people united by common descent, history, culture, or language.",
    "sentence": "The president delivered an inspiring speech, urging the entire {{BLANK}} to remain completely united during the ongoing economic crisis.",
    "cn": "總統發表了激勵人心的演說，敦促整個國家在持續的經濟危機中保持完全團結。"
  },
  {
    "word": "national",
    "pos": "adj.",
    "cn_def": "國家的；全國的",
    "en_def": "relating to or characteristic of a nation.",
    "sentence": "Tomorrow is a highly anticipated {{BLANK}} holiday, which means that all banks and public schools will be closed.",
    "cn": "明天是一個備受期待的國家的假日，這意味著所有銀行和公立學校都將關閉。"
  },
  {
    "word": "nationality",
    "pos": "n.",
    "cn_def": "國籍",
    "en_def": "the status of belonging to a particular nation.",
    "sentence": "Even though Leslie has lived in the United States for her entire life, she officially holds Canadian {{BLANK}}.",
    "cn": "儘管萊斯莉一生都住在美國，她官方持有的是加拿大國籍。"
  },
  {
    "word": "dual nationality",
    "pos": "phr.",
    "cn_def": "雙重國籍",
    "en_def": "the status of being a citizen of two different countries.",
    "sentence": "Because his parents were born in different countries, the young man was incredibly lucky to possess {{BLANK}}.",
    "cn": "因為他的父母出生在不同的國家，這個年輕人極其幸運地擁有雙重國籍。"
  },
  {
    "word": "internationally",
    "pos": "adv.",
    "cn_def": "國際地",
    "en_def": "in, between, or among many different nations.",
    "sentence": "The famous author is {{BLANK}} recognized for her brilliant novels that explore the complex nature of human relationships.",
    "cn": "這位著名作家因其探討人際關係複雜本質的才華洋溢的小說而在國際地受到認可。"
  },
  {
    "word": "state",
    "pos": "n.",
    "cn_def": "國家；州",
    "en_def": "a nation or territory considered as an organized political community under one government",
    "sentence": "The progressive law firm advised the international corporation on how to comply with the trade regulations of each foreign {{BLANK}}.",
    "cn": "這家進步派法律事務所就如何遵守每個外國國家的貿易法規，向這家國際公司提供建議。"
  },
  {
    "word": "state-run",
    "pos": "adj.",
    "cn_def": "國營的；政府開辦的",
    "en_def": "operated, managed, or funded directly by the government or official authorities of a country",
    "sentence": "The newly elected president promised to thoroughly modernize the {{BLANK}} railway system to improve daily commuting for all citizens.",
    "cn": "新當選的總統承諾徹底使國營鐵路系統走向現代化，以改善所有公民的每日通勤。"
  },
  {
    "word": "state",
    "pos": "v.",
    "cn_def": "陳述；聲明（動詞）",
    "en_def": "to express something definitely, clearly, and formally in speech or in a written legal document",
    "sentence": "The contract terms clearly {{BLANK}} that all imported goods must be assessed by customs officers before entering the port.",
    "cn": "合約條款明確陳述，所有進口貨物在進入港口前都必須接受海關官員的評估。"
  },
  {
    "word": "statement",
    "pos": "n.",
    "cn_def": "聲明；陳述（名詞）",
    "en_def": "a definite or official expression of something in speech or writing, or a formal account of facts",
    "sentence": "The ambitious entrepreneur issued an official {{BLANK}} to reassure the wealthy investors that the business expansion was going smoothly.",
    "cn": "這位雄心勃勃的企業家發表了一份正式聲明，以向富有的投資者們保證業務擴展正順利進行。"
  },
  {
    "word": "make a statement",
    "pos": "phr.",
    "cn_def": "發表聲明；陳述",
    "en_def": "to provide an official, formal oral or written account of facts, typically to the public or authorities",
    "sentence": "The leading researcher decided to {{BLANK}} to the press after his scientific experiment yielded highly accurate data.",
    "cn": "首席研究員在他的科學實驗產出高度準確的數據後，決定向媒體發表聲明。"
  },
  {
    "word": "proclaim",
    "pos": "v.",
    "cn_def": "宣告；宣佈；讚揚",
    "en_def": "to announce or declare something officially, publicly, and proudly, especially a major victory or law",
    "sentence": "The victorious general arrived at the capital to {{BLANK}} the complete defeat of the oppressive invading army.",
    "cn": "獲勝的將軍抵達首都，宣告徹底擊敗了那支殘暴的入侵軍隊。"
  },
  {
    "word": "declare",
    "pos": "v.",
    "cn_def": "宣布；宣告；申報",
    "en_def": "to formally, solemnly, or officially state a fact, intention, or legal condition to the public",
    "sentence": "The government intends to {{BLANK}} the heavily damaged forest region a protected zone to save the endangered wild species.",
    "cn": "政府打算宣布這片受損嚴重的森林區域為保護區，以拯救瀕危的野生學名物種。"
  },
  {
    "word": "declare war",
    "pos": "phr.",
    "cn_def": "宣戰",
    "en_def": "to officially or formally announce that a state of military conflict exists between countries",
    "sentence": "The unyielding dictator fiercely chose to {{BLANK}} on the neighboring state after the peace talks failed completely.",
    "cn": "在和平談判完全失敗後，這位不屈服的獨裁者猛烈地選擇向鄰國宣戰。"
  },
  {
    "word": "declaration",
    "pos": "n.",
    "cn_def": "宣告；宣言；申報書",
    "en_def": "a formal, official, or explicit announcement of an intention, political state, or legal fact",
    "sentence": "The historic {{BLANK}} of independence was celebrated by the citizens throughout the vast territory of the newly formed country.",
    "cn": "這份歷史性的獨立宣言，受到了這個新成立國家廣大領土上所有公民的慶祝。"
  },
  {
    "word": "possess",
    "pos": "v.",
    "cn_def": "擁有",
    "en_def": "to have as belonging to one; own.",
    "sentence": "According to the ancient legend, this mysterious silver ring is said to {{BLANK}} strange and highly dangerous magical powers.",
    "cn": "根據古老的傳說，這枚神祕的銀色戒指據說擁有奇怪且高度危險的魔法力量。"
  },
  {
    "word": "possession",
    "pos": "n.",
    "cn_def": "擁有；所有物",
    "en_def": "the state of having, owning, or controlling something.",
    "sentence": "The police officer quickly arrested the nervous young man for the illegal {{BLANK}} of dangerous and stolen weapons.",
    "cn": "警察迅速以非法擁有危險的被盜武器為由，逮捕了那名緊張的年輕人。"
  },
  {
    "word": "worldly possessions",
    "pos": "phr.",
    "cn_def": "世俗財產",
    "en_def": "physical things that someone owns, as opposed to spiritual values.",
    "sentence": "When the terrible wildfire destroyed their neighborhood, the family tragically lost all their {{BLANK}}, but they survived safely.",
    "cn": "當可怕的野火摧毀了他們的社區時，這家人悲慘地失去了所有世俗財產，但他們安全地倖存了下來。"
  },
  {
    "word": "spiritual",
    "pos": "adj.",
    "cn_def": "精神上的；心靈的",
    "en_def": "relating to or affecting the human spirit or soul as opposed to material or physical things.",
    "sentence": "After experiencing a serious personal crisis, Abby decided to focus entirely on her {{BLANK}} development and inner peace this year.",
    "cn": "在經歷了一次嚴重的個人危機後，艾比決定今年完全專注於她的精神上的發展和內心的平靜。"
  },
  {
    "word": "spiritually",
    "pos": "adv.",
    "cn_def": "精神上地",
    "en_def": "in a way that relates to the human spirit or soul.",
    "sentence": "Many people find that practicing daily meditation and deep breathing exercises leaves them feeling significantly healthier and {{BLANK}} fulfilled.",
    "cn": "許多人發現，練習每日冥想和深呼吸運動讓他們感覺明顯更健康且在精神上地獲得滿足。"
  },
  {
    "word": "spirit",
    "pos": "n.",
    "cn_def": "精神；靈魂",
    "en_def": "the nonphysical part of a person which is the seat of emotions and character.",
    "sentence": "Despite losing the difficult championship game, the young athletes maintained a remarkably strong and positive team {{BLANK}} throughout the tournament.",
    "cn": "儘管輸掉了艱難的冠軍賽，這些年輕運動員在整個錦標賽中保持了異常堅強且積極的團隊精神。"
  },
  {
    "word": "physical",
    "pos": "adj.",
    "cn_def": "身體的；物理的",
    "en_def": "relating to the body as opposed to the mind.",
    "sentence": "The strict doctor firmly reminded his patient that maintaining excellent {{BLANK}} health is absolutely essential for a long life.",
    "cn": "嚴格的醫生堅定地提醒他的病患，保持極佳的身體的健康對於長壽是絕對必要的。"
  },
  {
    "word": "imperial",
    "pos": "adj.",
    "cn_def": "帝國的；皇帝的",
    "en_def": "relating to an empire or an emperor.",
    "sentence": "The wealthy {{BLANK}} family was tragically forced to leave the grand palace and hide away safely after the violent war broke out.",
    "cn": "富有的皇（帝國）的家族在暴力的戰爭爆發後，悲慘地被迫離開宏偉的宮殿並安全地躲藏起來。"
  },
  {
    "word": "imperialism",
    "pos": "n.",
    "cn_def": "帝國主義",
    "en_def": "a policy of extending a country's power and influence through diplomacy or military force.",
    "sentence": "The history professor passionately discussed how 19th-century {{BLANK}} profoundly changed the economic and cultural landscapes of many African nations.",
    "cn": "歷史教授充滿熱情地討論了19世紀的帝國主義如何深刻地改變了許多非洲國家的經濟和文化景觀。"
  },
  {
    "word": "emperor",
    "pos": "n.",
    "cn_def": "皇帝",
    "en_def": "a sovereign ruler of great power and rank, especially one ruling an empire.",
    "sentence": "The powerful Roman {{BLANK}} commanded a vast and incredibly loyal army that successfully conquered many distant foreign lands.",
    "cn": "強大的羅馬皇帝指揮著一支龐大且極度忠誠的軍隊，成功征服了許多遙遠的外國土地。"
  },
  {
    "word": "empire",
    "pos": "n.",
    "cn_def": "帝國",
    "en_def": "an extensive group of states or countries under a single supreme authority.",
    "sentence": "At the absolute height of its power, the ancient {{BLANK}} spanned across three continents and controlled vital international trade routes.",
    "cn": "在其權力的絕對巔峰時期，這個古老的帝國橫跨三大洲並控制著至關重要的國際貿易路線。"
  },
  {
    "word": "imperial palace",
    "pos": "phr.",
    "cn_def": "皇宮",
    "en_def": "the official residence of an emperor or empress.",
    "sentence": "Thousands of curious tourists eagerly visit the beautiful {{BLANK}} every single day to admire its magnificent traditional architecture.",
    "cn": "每天都有成千上萬好奇的遊客熱切地參觀這座美麗的皇宮，以欣賞其壯麗的傳統建築。"
  },
  {
    "word": "blooming",
    "pos": "v. / n.",
    "cn_def": "開花；花朵",
    "en_def": "to produce flowers; a flower, especially one cultivated for its beauty.",
    "sentence": "My grandmother's beautiful garden is definitely most attractive when the red roses are fully {{BLANK}} in the early spring.",
    "cn": "我祖母美麗的花園絕對是在初春紅玫瑰完全開花時最迷人。"
  },
  {
    "word": "in bloom",
    "pos": "phr.",
    "cn_def": "盛開中",
    "en_def": "with the flowers fully open.",
    "sentence": "We decided to take a long walk through the colorful park because all the spring flowers were perfectly {{BLANK}}.",
    "cn": "我們決定在色彩繽紛的公園裡散步很久，因為所有的春季花朵都在完美地盛開中。"
  },
  {
    "word": "full bloom",
    "pos": "phr.",
    "cn_def": "全盛時期；完全綻放",
    "en_def": "the stage of a flower being completely open.",
    "sentence": "The magnificent cherry trees in the mountain valley finally reached {{BLANK}} yesterday, attracting hundreds of professional photographers.",
    "cn": "山谷中壯麗的櫻花樹昨天終於達到了完全綻放，吸引了數百名專業攝影師。"
  },
  {
    "word": "thriving",
    "pos": "adj.",
    "cn_def": "盛開的；繁榮的",
    "en_def": "producing flowers; flourishing.",
    "sentence": "The successful business owner proudly looked out over his incredibly profitable and rapidly {{BLANK}} international technology company.",
    "cn": "這位成功的企業主自豪地俯瞰著他那極其有利可圖且正在迅速繁榮的國際科技公司。"
  },
  {
    "word": "blossom",
    "pos": "n. / v.",
    "cn_def": "花朵；開花",
    "en_def": "a flower or a mass of flowers; to produce flowers.",
    "sentence": "The ancient cherry tree standing right next to our wooden house was completely covered in beautiful pink {{BLANK}} this morning.",
    "cn": "站在我們木屋正旁邊的那棵古老櫻花樹，今早完全被美麗的粉紅色花朵覆蓋了。"
  },
  {
    "word": "cherry blossom",
    "pos": "phr.",
    "cn_def": "櫻花",
    "en_def": "the flower of a cherry tree, famous for blooming beautifully in spring.",
    "sentence": "Thousands of excited tourists travel to Japan every spring specifically to view the stunningly beautiful {{BLANK}} slowly falling down.",
    "cn": "每年春天，成千上萬興奮的遊客專程前往日本，只為了觀賞令人驚豔的美麗櫻花緩緩落下。"
  },
  {
    "word": "in blossom",
    "pos": "phr.",
    "cn_def": "盛開中",
    "en_def": "flowering.",
    "sentence": "The entire scenic mountain valley looks absolutely magical when the millions of wild apple trees are finally perfectly {{BLANK}}.",
    "cn": "當數百萬棵野生蘋果樹終於完美地在盛開中時，整個風景優美的山谷看起來絕對充滿魔力。"
  },
  {
    "word": "strength",
    "pos": "n.",
    "cn_def": "力量；優點",
    "en_def": "the quality or state of being physically strong.",
    "sentence": "The exhausted warehouse worker had to use all his remaining physical {{BLANK}} just to safely lift the incredibly heavy wooden box.",
    "cn": "疲憊的倉庫工人必須用盡他剩餘的所有身體力量，只為了安全地舉起那個極其沉重的木箱。"
  },
  {
    "word": "inner strength",
    "pos": "phr.",
    "cn_def": "內在力量",
    "en_def": "mental and emotional toughness or resilience.",
    "sentence": "Surviving such a terrible and heartbreaking tragedy requires an incredible amount of {{BLANK}} and endless support from close family.",
    "cn": "在如此可怕且令人心碎的悲劇中倖存下來，需要令人難以置信的內在力量以及來自親密家人的無盡支持。"
  },
  {
    "word": "strengths and weaknesses",
    "pos": "phr.",
    "cn_def": "優缺點",
    "en_def": "the good and bad qualities of a person or thing.",
    "sentence": "Before the difficult job interview, Randall carefully compiled a detailed list of his professional {{BLANK}} to present clearly.",
    "cn": "在困難的工作面試之前，藍道仔細編寫了一份他專業優缺點的詳細清單以清楚地呈現。"
  },
  {
    "word": "strengthen",
    "pos": "v.",
    "cn_def": "加強；鞏固",
    "en_def": "to make or become stronger.",
    "sentence": "The government officially passed a new law designed to significantly {{BLANK}} the strict environmental protections for our polluted oceans.",
    "cn": "政府正式通過了一項新法律，旨在顯著加強對我們受污染海洋的嚴格環境保護。"
  },
  {
    "word": "throne",
    "pos": "n.",
    "cn_def": "王座",
    "en_def": "a ceremonial chair for a sovereign, bishop, or similar figure.",
    "sentence": "The majestic king and beautiful queen sat proudly on their golden {{BLANK}} in the incredibly grand and highly decorated palace.",
    "cn": "雄偉的國王和美麗的王后自豪地坐在極其宏偉且高度裝飾的宮殿裡金色的王座上。"
  },
  {
    "word": "heir to the throne",
    "pos": "phr.",
    "cn_def": "王位繼承人",
    "en_def": "the person next in line to become the monarch.",
    "sentence": "The birth of the healthy baby boy was celebrated widely because he was the official {{BLANK}} of the country.",
    "cn": "這個健康男嬰的誕生被廣泛慶祝，因為他是這個國家官方的王位繼承人。"
  },
  {
    "word": "refer to",
    "pos": "phr.",
    "cn_def": "提及；參考",
    "en_def": "to mention or allude to; to look at a source of information.",
    "sentence": "If you have any serious questions about how to fix this broken refrigerator, please closely {{BLANK}} the attached instruction manual.",
    "cn": "如果你對於如何修理這台壞掉的冰箱有任何嚴重的問題，請仔細參考附上的說明書。"
  },
  {
    "word": "reference",
    "pos": "n.",
    "cn_def": "參考；提及",
    "en_def": "the action of mentioning or alluding to something.",
    "sentence": "The professor made a brief but incredibly insightful {{BLANK}} to the ancient Roman Empire during his complex history lecture today.",
    "cn": "教授在今天複雜的歷史講課中，對古羅馬帝國做了一個簡短但極具洞察力的提及。"
  },
  {
    "word": "refer to the kind doctor as",
    "pos": "phr.",
    "cn_def": "把…稱為、將…稱作",
    "en_def": "To call or describe someone or something by a specific name or title.",
    "sentence": "Because he is always willing to help others, many citizens {{BLANK}} a local hero.",
    "cn": "因為他總是樂於助人，許多市民把這位善良的醫生稱為當地的英雄。"
  },
  {
    "word": "view mistakes as",
    "pos": "phr.",
    "cn_def": "把…視為、將…看作",
    "en_def": "To think about or consider someone or something in a particular way.",
    "sentence": "The strict manager tends to {{BLANK}} valuable opportunities for employees to learn and grow.",
    "cn": "這位嚴格的經理傾向於把錯誤視為員工學習與成長的寶貴機會。"
  },
  {
    "word": "see their parents as",
    "pos": "phr.",
    "cn_def": "把…看作、將…視為",
    "en_def": "To consider or regard someone or something in a specific way.",
    "sentence": "Many young children {{BLANK}} real-life superheroes who can solve any problem in the world.",
    "cn": "許多幼童把他們的父母看作現實生活中的超級英雄，能夠解決世界上任何問題。"
  },
  {
    "word": "regard this ancient document as",
    "pos": "phr.",
    "cn_def": "把…視為、認為…是",
    "en_def": "To think of someone or something with a specific feeling or opinion.",
    "sentence": "Historians generally {{BLANK}} one of the most important texts in human history.",
    "cn": "歷史學家普遍把這份古代文獻視為人類歷史上最重要的文本之一。"
  },
  {
    "word": "consider regular exercise to be",
    "pos": "phr.",
    "cn_def": "認為…是、把…視為",
    "en_def": "To have a particular opinion about someone or something; to believe someone or something has a certain quality.",
    "sentence": "Most experts {{BLANK}} the most effective way to maintain good physical and mental health.",
    "cn": "大多數專家認為規律運動是維持身心健康最有效的方法。"
  },
  {
    "word": "currency",
    "pos": "n.",
    "cn_def": "貨幣",
    "en_def": "a system of money in general use in a particular country.",
    "sentence": "You should always make absolutely sure you have some local {{BLANK}} with you when you independently travel to a foreign country.",
    "cn": "當你獨立前往外國旅行時，你總是應該絕對確保身上帶有一些當地的貨幣。"
  },
  {
    "word": "currency rate",
    "pos": "phr.",
    "cn_def": "匯率",
    "en_def": "the value of one currency for the purpose of conversion to another.",
    "sentence": "The international businessman checks the daily {{BLANK}} religiously to perfectly ensure his global company doesn't lose any profits.",
    "cn": "這位國際商人虔誠地檢查每日的匯率，以完美地確保他的全球公司不會損失任何利潤。"
  },
  {
    "word": "currency exchange",
    "pos": "phr.",
    "cn_def": "貨幣兌換",
    "en_def": "a business or service that changes one country's money for another.",
    "sentence": "We urgently need to find a secure {{BLANK}} counter at the busy airport so we can quickly buy train tickets.",
    "cn": "我們急需在繁忙的機場找到一個安全的貨幣兌換櫃台，這樣我們才能迅速購買火車票。"
  },
  {
    "word": "foreign currency",
    "pos": "phr.",
    "cn_def": "外幣",
    "en_def": "the money used in a country other than one's own.",
    "sentence": "The conservative bank charges an incredibly high fee if you ever try to withdraw {{BLANK}} from their automated teller machines.",
    "cn": "如果你試圖從他們的自動櫃員機提取外幣，這家保守的銀行會收取極高昂的手續費。"
  },
  {
    "word": "attached",
    "pos": "v.",
    "cn_def": "貼上；附加",
    "en_def": "to fasten or join one thing to another.",
    "sentence": "Rick carefully {{BLANK}} the important medical note to the kitchen fridge with a heavy magnet so his wife would definitely see it.",
    "cn": "瑞克小心地用一塊重磁鐵將重要的醫療紙條貼（附加）在廚房冰箱上，這樣他妻子絕對會看到它。"
  },
  {
    "word": "attachment",
    "pos": "n.",
    "cn_def": "附件；依戀",
    "en_def": "an extra part or extension that is or can be attached to something.",
    "sentence": "Please effectively download the detailed PDF {{BLANK}} in my email so you can properly review the updated financial figures tonight.",
    "cn": "請有效地在我的電子郵件中下載詳細的PDF附件，這樣你今晚就可以適當地審查更新的財務數據。"
  },
  {
    "word": "attached",
    "pos": "adj.",
    "cn_def": "附上的；依戀的",
    "en_def": "joined, fastened, or connected to something.",
    "sentence": "The newly hired assistant completely forgot to include the critically important {{BLANK}} document when she bravely sent the email to the boss.",
    "cn": "新聘請的助理在勇敢地發送電子郵件給老闆時，完全忘記包含極其重要的附上的文件。"
  },
  {
    "word": "emotional attachment",
    "pos": "phr.",
    "cn_def": "情感依戀",
    "en_def": "a strong feeling of affection or loyalty towards someone or something.",
    "sentence": "The lonely old man has a deep {{BLANK}} to that broken watch because his beloved late grandfather gave it to him.",
    "cn": "那位孤獨的老人對那隻壞掉的手錶有著深深的情感依戀，因為那是由他深愛的已故祖父送給他的。"
  },
  {
    "word": "is attached to",
    "pos": "phr.",
    "cn_def": "隨信附上、附帶於（電子郵件）",
    "en_def": "To be joined or sent together with an email message as a separate digital file.",
    "sentence": "The detailed PDF report {{BLANK}} the email I sent you this morning, so please review the file carefully before our afternoon meeting.",
    "cn": "今天早上我發給您的電子郵件中隨信附上了詳細的 PDF 報告，因此請在我們下午的會議之前仔細審閱該檔案。"
  },
  {
    "word": "was deeply attached to",
    "pos": "phr.",
    "cn_def": "依戀…、對…有深厚的感情",
    "en_def": "To feel a strong emotional connection, affection, or loyalty to someone or something.",
    "sentence": "Having lived in the old countryside house for over ten years, the elderly couple {{BLANK}} the neighborhood and refused to move to the city.",
    "cn": "在這棟鄉間老房子住了十多年，這對年邁的夫婦對這個社區深具感情（非常依戀），並拒絕搬到城市。"
  },
  {
    "word": "detached",
    "pos": "adj.",
    "cn_def": "不帶感情的、冷漠的、超然的",
    "en_def": "Emotionally distant, cool, or not showing any personal involvement or feelings.",
    "sentence": "The judge remained completely {{BLANK}} throughout the emotional trial, focusing only on the cold facts presented by both lawyers.",
    "cn": "在這場充滿情緒張力的審判中，法官始終保持完全超然（不帶感情），只專注於雙方律師提出的冰冷事實。"
  },
  {
    "word": "reputation",
    "pos": "n.",
    "cn_def": "名聲",
    "en_def": "the beliefs or opinions that are generally held about someone or something.",
    "sentence": "The arrogant politician knew that his professional {{BLANK}} would be seriously at risk if he unfortunately failed to win his court case.",
    "cn": "傲慢的政治人物知道，如果他不幸未能在官司中勝訴，他的專業名聲將處於嚴重的危險之中。"
  },
  {
    "word": "has an excellent reputation for",
    "pos": "phr.",
    "cn_def": "以...聞名/有...的名聲",
    "en_def": "to be known for a particular quality or characteristic.",
    "sentence": "My parents' newly opened Italian restaurant {{BLANK}} serving incredibly good and highly inexpensive food to local customers.",
    "cn": "我父母新開的義大利餐廳以為當地顧客提供極好且非常便宜的食物有極佳的名聲（聞名）。"
  },
  {
    "word": "dragged the innocent mayor's reputation through the mud",
    "pos": "phr.",
    "cn_def": "使某人名譽掃地",
    "en_def": "to publicly ruin or deeply damage someone's good name.",
    "sentence": "The angry journalist deliberately wrote a false article that cruelly {{BLANK}} during the election.",
    "cn": "憤怒的記者故意寫了一篇虛假的文章，在選舉期間殘酷地使無辜市長的名譽掃地。"
  },
  {
    "word": "reputable",
    "pos": "adj.",
    "cn_def": "聲譽卓著的",
    "en_def": "having a good reputation.",
    "sentence": "If you ever want to safely invest your valuable money, you should absolutely find a highly {{BLANK}} and experienced financial advisor.",
    "cn": "如果你曾經想要安全地投資你寶貴的金錢，你絕對應該找一位高度聲譽卓著的且經驗豐富的財務顧問。"
  },
  {
    "word": "reputed",
    "pos": "adj.",
    "cn_def": "據說的；被普遍認為的",
    "en_def": "generally believed to be a certain way, though not necessarily proven.",
    "sentence": "The mysteriously quiet man who just moved in next door is the {{BLANK}} leader of a highly dangerous international criminal organization.",
    "cn": "剛搬到隔壁的神祕安靜男子，是高度危險的國際犯罪組織的據說的首領。"
  },
  {
    "word": "plant stem",
    "pos": "phr.",
    "cn_def": "植物莖幹",
    "en_def": "the structural axis of a plant.",
    "sentence": "The biology students eagerly studied how vital nutrients travel swiftly upward through the {{BLANK}} to reach the delicate green leaves.",
    "cn": "生物系學生熱切地研究了重要的營養物質如何迅速向上穿過植物莖幹以到達嬌嫩的綠葉。"
  },
  {
    "word": "stemmed from",
    "pos": "phr.",
    "cn_def": "源自於",
    "en_def": "to be caused by or originate from something.",
    "sentence": "The psychologist explained that Anna's irrational fear of heights deeply {{BLANK}} a terrifying experience she unfortunately had as a young child.",
    "cn": "心理學家解釋說，安娜對高處不理性的恐懼深深源自於她小時候不幸有過的一次可怕經歷。"
  },
  {
    "word": "derive from",
    "pos": "phr.",
    "cn_def": "源自於；從...衍生出",
    "en_def": "to obtain or originate from a specified source.",
    "sentence": "Many of the most commonly used English words actually {{BLANK}} ancient Latin, which fascinates the brilliant linguistics professor entirely.",
    "cn": "許多最常用的英語單字實際上源自於古老的拉丁語，這讓那位才華洋溢的語言學教授完全著迷。"
  },
  {
    "word": "originated from",
    "pos": "phr.",
    "cn_def": "源自、發源於",
    "en_def": "To come from a particular place, time, or situation; to have a specific beginning.",
    "sentence": "Many delicious traditional dishes in Taiwan originally {{BLANK}} the early immigrant communities who brought their local cooking styles to the island.",
    "cn": "許多美味的台灣傳統料理最初源自早期的移民社群，他們將當地的烹飪風格帶到了這座島上。"
  },
  {
    "word": "result from",
    "pos": "phr.",
    "cn_def": "起因於、由…所造成",
    "en_def": "To be caused by something else (Effect + result from + Cause).",
    "sentence": "The severe flooding in the downtown area did not {{BLANK}} a lack of drainage systems, but rather from the unprecedented amount of heavy rainfall.",
    "cn": "市中心的嚴重水災並非起因於排水系統的缺乏，而是由前所未有的特大豪雨所造成的。"
  },
  {
    "word": "result in",
    "pos": "phr.",
    "cn_def": "導致、造成、結果是",
    "en_def": "To cause a particular situation or outcome to happen (Cause + result in + Effect).",
    "sentence": "Staying up late every night to play video games will eventually {{BLANK}} poor academic performance and extreme fatigue during the daytime.",
    "cn": "每晚熬夜打電子遊戲最終會導致學業成績不佳以及白天的極度疲勞。"
  },
  {
    "word": "As a result of",
    "pos": "phr.",
    "cn_def": "由於…的結果、因為",
    "en_def": "Because of something that has happened (Used before a noun phrase cause).",
    "sentence": "{{BLANK}} the sudden cancelation of the morning flight, hundreds of frustrated passengers had to spend the night sleeping on the airport floor.",
    "cn": "由於早上班機突然取消的結果，數百名感到沮喪的乘客不得不躺在機場地板上過夜。"
  },
  {
    "word": "as a result",
    "pos": "phr.",
    "cn_def": "因此、結果",
    "en_def": "Therefore; because of something that was just mentioned (Used to introduce the effect).",
    "sentence": "The young athlete trained intensely for four hours every single day; {{BLANK}}, he broke the national record and won the gold medal.",
    "cn": "這位年輕的運動員每天都密集訓練四個小時；因此，他打破了全國紀錄並贏得了金牌。"
  },
  {
    "word": "eternal",
    "pos": "adj.",
    "cn_def": "永恆的",
    "en_def": "lasting or existing forever; without end or beginning.",
    "sentence": "Some religious people deeply believe that after a person's death, they will peacefully go on to live an {{BLANK}} life in heaven.",
    "cn": "一些有宗教信仰的人深信，在人死後，他們將平靜地在天堂過著永恆的生命。"
  },
  {
    "word": "eternal youth",
    "pos": "phr.",
    "cn_def": "青春永駐",
    "en_def": "the state of looking or feeling young forever.",
    "sentence": "Many wealthy people strongly desiring {{BLANK}} frequently use all sorts of expensive cosmetic products to make their skin look artificially younger.",
    "cn": "許多強烈渴望青春永駐的富人經常使用各種昂貴的化妝產品，以讓他們的皮膚看起來人工地更年輕。"
  },
  {
    "word": "eternity",
    "pos": "n.",
    "cn_def": "永恆；漫長的時間",
    "en_def": "infinite or unending time.",
    "sentence": "Waiting anxiously in the crowded hospital room for the crucial medical test results honestly felt like an absolute {{BLANK}} to the terrified mother.",
    "cn": "在擁擠的醫院病房焦急地等待關鍵的醫學檢查結果，對這位受驚的母親來說，老實說感覺就像是絕對的永恆。"
  },
  {
    "word": "immortal",
    "pos": "adj.",
    "cn_def": "不朽的；長生不老的",
    "en_def": "living forever; never dying or decaying.",
    "sentence": "According to ancient legends, the powerful Greek gods were completely {{BLANK}}, but their daily actions still came across as very human sometimes.",
    "cn": "根據古老的傳說，強大的希臘神祇是完全長生不老的，但他們日常的行為有時仍然表現得非常像人類。"
  },
  {
    "word": "permanent",
    "pos": "adj.",
    "cn_def": "永久的、固定的、長期的",
    "en_def": "Lasting for a long time or forever; not temporary.",
    "sentence": "After working as a temporary freelancer for two years, David was thrilled to finally receive an offer for a {{BLANK}} position at the marketing company.",
    "cn": "在擔任了兩年的兼職接案人員後，大衛興高采烈地終於獲得了這家行銷公司固定（永久）職位的錄取通知。"
  },
  {
    "word": "permanently",
    "pos": "adv.",
    "cn_def": "永久地、長期地",
    "en_def": "In a way that lasts forever or for a very long time without changing.",
    "sentence": "Because of the severe spine injury he suffered in the accident, the doctor warned that the athlete's left leg might be {{BLANK}} damaged.",
    "cn": "由於他在事故中受到的嚴重脊椎傷勢，醫生警告說這位運動員的左腿可能會永久地受損。"
  },
  {
    "word": "for good",
    "pos": "phr.",
    "cn_def": "永遠地、永久地",
    "en_def": "Forever; permanently.",
    "sentence": "Tired of the cold winter weather and crowded streets, the family decided to leave New York {{BLANK}} and move to a sunny beach town in Florida.",
    "cn": "厭倦了寒冬的天氣和擁擠的街道，這戶人家決定永遠地離開紐約，搬到佛羅里達州一個陽光明媚的海灘小鎮。"
  },
  {
    "word": "temporary",
    "pos": "adj.",
    "cn_def": "暫時的、臨時的",
    "en_def": "Lasting for only a short or limited time; not permanent.",
    "sentence": "The store set up a {{BLANK}} counter near the entrance to sell holiday gifts, but it will be removed once the Christmas season is over.",
    "cn": "這家店在入口附近設置了一個暫時的（臨時的）櫃檯來販售節日禮物，但一旦聖誕節結束，它就會被拆除。"
  },
  {
    "word": "temporarily",
    "pos": "adv.",
    "cn_def": "暫時地、臨時地",
    "en_def": "For a short or limited time; not permanently.",
    "sentence": "Due to a sudden power outage caused by the lightning strike, the office computer network is {{BLANK}} unavailable until the technicians fix the system.",
    "cn": "由於雷擊導致的突發停電，辦公室的電腦網路在技術人員修復系統之前將暫時地無法使用。"
  },
  {
    "word": "glory",
    "pos": "n.",
    "cn_def": "榮耀",
    "en_def": "high renown or honor won by notable achievements.",
    "sentence": "The brilliant general rightfully earned immense national {{BLANK}} through his incredibly courageous achievements during the long and brutally destructive war.",
    "cn": "這位才華洋溢的將軍透過他在漫長且極具毀滅性的戰爭中極其勇敢的成就，理所當然地贏得了巨大的國家榮耀。"
  },
  {
    "word": "glory days",
    "pos": "phr.",
    "cn_def": "光輝歲月",
    "en_def": "a period in the past when something or someone was highly successful.",
    "sentence": "The retired professional athletes frequently meet at the local bar to nostalgically talk about their incredible {{BLANK}} from twenty years ago.",
    "cn": "退休的職業運動員經常在當地酒吧聚會，懷舊地談論他們二十年前令人難以置信的光輝歲月。"
  },
  {
    "word": "glorious",
    "pos": "adj.",
    "cn_def": "輝煌的；壯麗的",
    "en_def": "having, worthy of, or bringing fame or admiration.",
    "sentence": "We eventually reached the incredibly high mountain peak exactly in time to witness a truly {{BLANK}} and colorful sunset over the ocean.",
    "cn": "我們最終正好及時抵達極其高聳的山峰，見證了海洋上空一場真正壯麗的且色彩繽紛的日落。"
  },
  {
    "word": "sacrificed",
    "pos": "v.",
    "cn_def": "犧牲",
    "en_def": "to give up something valued for the sake of other considerations.",
    "sentence": "Dedicated Kim bravely {{BLANK}} her entire personal life in order to achieve massive success in her highly demanding corporate job.",
    "cn": "盡責的金勇敢地犧牲了她整個私人生活，為了在她要求極高的企業工作中取得巨大的成功。"
  },
  {
    "word": "make a significant financial sacrifice",
    "pos": "n.",
    "cn_def": "犧牲、奉獻",
    "en_def": "The act of giving up something valuable to help someone else or to achieve an important goal.",
    "sentence": "The devoted parents {{BLANK}} to send their daughter to a prestigious university overseas, working extra hours every week.",
    "cn": "這對無私的父母為了送女兒去國外著名的大學念書，做出了巨大的經濟犧牲，每週都額外加班工作。"
  },
  {
    "word": "make a sacrifice",
    "pos": "phr.",
    "cn_def": "做出犧牲",
    "en_def": "to give up something important or valuable.",
    "sentence": "Poor Maggie had to {{BLANK}} just to afford to send her smart son to the incredibly expensive private school.",
    "cn": "可憐的瑪姬必須做出許多痛苦的個人犧牲，只為了負擔得起送她聰明的兒子去那所極其昂貴的私立學校。"
  },
  {
    "word": "ultimate sacrifice",
    "pos": "phr.",
    "cn_def": "最終的犧牲（指捐軀）",
    "en_def": "the act of giving one's life for a cause.",
    "sentence": "The whole nation silently honored the brave soldiers who unfortunately made the {{BLANK}} while fiercely defending their beloved country from invaders.",
    "cn": "整個國家默默地向那些在猛烈保衛深愛國家免受入侵者侵害時，不幸做出最終的犧牲的勇敢士兵致敬。"
  },
  {
    "word": "esteemed",
    "pos": "n. / v.",
    "cn_def": "尊重；評價",
    "en_def": "respect and admiration, typically for a person.",
    "sentence": "Talented Tiger Woods is widely {{BLANK}} by millions of fans as being undoubtedly one of the best and most famous golfers in the world.",
    "cn": "才華洋溢的老虎伍茲被數百萬粉絲廣泛評價（尊重）為無疑是世界上最好、最著名的高爾夫球手之一。"
  },
  {
    "word": "esteemed",
    "pos": "adj.",
    "cn_def": "受人尊敬的",
    "en_def": "highly respected or admired.",
    "sentence": "The incredibly {{BLANK}} scientist was formally invited to the grand university to deliver a highly complex speech about his groundbreaking medical research.",
    "cn": "這位極度受人尊敬的科學家正式被邀請到宏偉的大學，就他突破性的醫學研究發表一場高度複雜的演講。"
  },
  {
    "word": "self-esteem",
    "pos": "n.",
    "cn_def": "自尊",
    "en_def": "confidence in one's own worth or abilities; self-respect.",
    "sentence": "Constantly criticizing your young children for making tiny mistakes will undoubtedly cause them to quickly develop severely low {{BLANK}}.",
    "cn": "不斷批評你年幼的孩子犯了微小的錯誤，無疑會導致他們迅速發展出嚴重低下的自尊。"
  },
  {
    "word": "conveyed",
    "pos": "v.",
    "cn_def": "傳達",
    "en_def": "to make an idea, impression, or feeling known or understandable to someone.",
    "sentence": "Sensitive Carl elegantly {{BLANK}} his deepest and most complex romantic feelings through the incredibly beautiful poetry he wrote for his girlfriend.",
    "cn": "敏感的卡爾透過他為女友寫的極其美麗的詩歌，優雅地傳達了他最深刻、最複雜的浪漫情感。"
  },
  {
    "word": "convey a clear message",
    "pos": "phr.",
    "cn_def": "傳達訊息",
    "en_def": "to successfully communicate a thought or idea.",
    "sentence": "The powerful movie utilized dark colors and somber music to effectively {{BLANK}} about the tragic consequences of violent war.",
    "cn": "這部強而有力的電影利用深色調和憂鬱的音樂，有效地傳達了一個關於暴力戰爭悲慘後果的清晰訊息。"
  },
  {
    "word": "conveyor",
    "pos": "n.",
    "cn_def": "傳達者；運輸工具",
    "en_def": "a person or thing that transports or communicates something.",
    "sentence": "The highly energetic teacher proudly acted as a passionate {{BLANK}} of valuable historical knowledge to her young, eager students during the class.",
    "cn": "這位精力充沛的老師在課堂上自豪地扮演著為她年輕、熱切的學生充滿熱情地傳達（者）寶貴歷史知識的角色。"
  },
  {
    "word": "conveyor belt",
    "pos": "phr.",
    "cn_def": "輸送帶",
    "en_def": "a continuous moving band of fabric, rubber, or metal used for transporting objects.",
    "sentence": "The damaged suitcases slowly rolled along the noisy {{BLANK}} as the exhausted passengers waited impatiently at the busy international airport.",
    "cn": "當疲憊的乘客在繁忙的國際機場不耐煩地等待時，受損的行李箱緩慢地沿著吵雜的輸送帶滾動。"
  },
  {
    "word": "delicate",
    "pos": "adj.",
    "cn_def": "精緻的；脆弱的",
    "en_def": "very fine in texture or structure; of intricate workmanship or quality.",
    "sentence": "These extremely {{BLANK}} white plates are made of fine, expensive china and will easily break if you carelessly drop them on the hard floor.",
    "cn": "這些極其精緻的白盤是由優質昂貴的瓷器製成的，如果你粗心地把它們掉在硬地板上，很容易就會碎。"
  },
  {
    "word": "delicacy",
    "pos": "n.",
    "cn_def": "佳餚；珍饈",
    "en_def": "a choice or expensive food.",
    "sentence": "In some adventurous foreign countries, eating fried insects is considered a rare culinary {{BLANK}} that many curious international tourists eagerly want to try.",
    "cn": "在一些愛冒險的外國國家，吃油炸昆蟲被認為是一種罕見的烹飪佳餚，許多好奇的國際遊客都熱切地想嘗試。"
  },
  {
    "word": "delicately",
    "pos": "adv.",
    "cn_def": "精緻地；小心翼翼地",
    "en_def": "in a very careful or finely skilled manner.",
    "sentence": "The highly experienced surgeon {{BLANK}} successfully removed the tiny tumor without causing any permanent damage to the patient's surrounding healthy tissues.",
    "cn": "經驗極其豐富的外科醫生小心翼翼地成功移除了微小的腫瘤，而沒有對病患周圍的健康組織造成任何永久性的損傷。"
  },
  {
    "word": "firm",
    "pos": "adj.",
    "cn_def": "堅固的；堅定的",
    "en_def": "having a solid, almost unyielding surface or structure.",
    "sentence": "Unlike the incredibly soft and fragile pillows on my bed, this new mattress is perfectly {{BLANK}} and provides excellent support for my back.",
    "cn": "不同於我床上極度柔軟脆弱的枕頭，這張新床墊非常堅固的，能為我的背部提供極好的支撐。"
  },
  {
    "word": "is firmly convinced that",
    "pos": "phr.",
    "cn_def": "堅信...；確信...",
    "en_def": "completely certain and holding a powerful, unyielding belief that something is absolutely true",
    "sentence": "The leading researcher {{BLANK}} implementing a more rigorous methodology will yield highly accurate data for the experiment.",
    "cn": "首席研究員堅信，實施更嚴謹的研究方法將為該實驗帶來高度準確的數據。"
  },
  {
    "word": "law firm",
    "pos": "n.",
    "cn_def": "法律事務所",
    "en_def": "a business partnership formed by lawyers to advise clients about their legal rights and represent them in court",
    "sentence": "The prestigious {{BLANK}} decided to amend its operational contract to handle complex international trade disputes more efficiently.",
    "cn": "這家聲譽卓著的法律事務所決定修訂其營運合約，以更有效率地處理複雜的國際貿易糾紛。"
  },
  {
    "word": "accounting firm",
    "pos": "n.",
    "cn_def": "會計師事務所",
    "en_def": "a company that provides professional services such as auditing, tax preparation, and financial tracking",
    "sentence": "The ambitious entrepreneur hired a local {{BLANK}} to thoroughly evaluate the corporation's import and tariff expenses.",
    "cn": "這位雄心勃勃的企業家雇用了一家當地的會計師事務所，以徹底評估公司的進口與關稅支出。"
  },
  {
    "word": "evaluate",
    "pos": "v.",
    "cn_def": "評估；評價（動詞）",
    "en_def": "to form an idea of the amount, number, or value of something after careful appraisal",
    "sentence": "The leading researcher needs to {{BLANK}} the scientific data thoroughly before presenting the methodology to the international board.",
    "cn": "首席研究員需要在向國際委員會展示研究方法之前，徹底評估科學數據。"
  },
  {
    "word": "evaluation",
    "pos": "n.",
    "cn_def": "評估；評價（名詞）",
    "en_def": "the making of a judgment about the amount, number, or value of something; assessment",
    "sentence": "The prestigious law firm requested a thorough {{BLANK}} of the new trade policy to protect their client's corporation.",
    "cn": "這家聲譽卓著的法律事務所要求對新的貿易政策進行徹底的評估，以保護他們客戶的公司。"
  },
  {
    "word": "evaluated",
    "pos": "adj./v-pt",
    "cn_def": "被評估的；已評估的",
    "en_def": "having been judged or calculated carefully regarding worth, quality, or significance",
    "sentence": "The exported goods were carefully {{BLANK}} by customs officers at the port to ensure compliance with international regulations.",
    "cn": "這些出口貨物在港口接受了海關官員的仔細評估，以確保符合國際法規。"
  },
  {
    "word": "assess",
    "pos": "v.",
    "cn_def": "評定；評估；核定（動詞）",
    "en_def": "to officially judge or decide the amount, value, quality, or importance of a situation or tax",
    "sentence": "The accounting firm will systematically {{BLANK}} the financial risks associated with the upcoming business expansion project.",
    "cn": "會計師事務所將系統性地評估與即將進行的業務擴展計畫相關的財務風險。"
  },
  {
    "word": "assessment",
    "pos": "n.",
    "cn_def": "評定；評估（名詞）",
    "en_def": "the factual act of judging or deciding the amount, value, quality, or importance of something",
    "sentence": "The government's environmental {{BLANK}} revealed that the invasive species was heavily damaging the local agricultural ecosystem.",
    "cn": "政府的環境評估顯示，這種侵入性物種正嚴重破壞當地的農業生態系統。"
  },
  {
    "word": "assessed",
    "pos": "adj./v-pt",
    "cn_def": "被評定的；已評估的",
    "en_def": "evaluated or officially charged with a specific value, property tax, or level of performance",
    "sentence": "The total tariff {{BLANK}} on the imported electronics caused the young entrepreneur to alter his pricing strategy completely.",
    "cn": "對進口電子產品所評定的總關稅，促使這位年輕的企業家完全改變了他的定價策略。"
  },
  {
    "word": "access",
    "pos": "v.",
    "cn_def": "讀取；進入；接近（動詞）",
    "en_def": "to open, obtain, or gain entry to a specific digital file, database, secure network, or physical location",
    "sentence": "Users can smoothly {{BLANK}} the online testing platform by entering their registered student name and password.",
    "cn": "使用者透過輸入他們註冊的學生姓名與密碼，即可順利登入線上測驗平台。"
  },
  {
    "word": "access",
    "pos": "n.",
    "cn_def": "進入的權利；通道；路徑（名詞）",
    "en_def": "the right, opportunity, or physical means to approach, enter, or make use of something",
    "sentence": "The remote mountain village historically had limited {{BLANK}} to modern medical facilities before the new highway was constructed.",
    "cn": "在新公路修築之前，這座偏遠的山村在歷史上接觸現代醫療設施的機會非常有限。"
  },
  {
    "word": "gain access to",
    "pos": "phr.",
    "cn_def": "獲得...的進入權；取得（資料）",
    "en_def": "to successfully manage to enter a secure physical area or retrieve protected digital data",
    "sentence": "The clever hacker made a bold attempt to {{BLANK}} the secure database framework of the international technology corporation.",
    "cn": "這名聰明的駭客做出大膽的嘗試，企圖獲取該國際科技公司安全資料庫架構的存取權。"
  },
  {
    "word": "accessible",
    "pos": "adj.",
    "cn_def": "可接近的；可進入的；易懂的",
    "en_def": "easy to approach, enter, obtain, use, or understand for various individuals or devices",
    "sentence": "The tech company devises responsive web layouts to ensure the online dictionary modal is fully {{BLANK}} on mobile devices.",
    "cn": "這家科技公司設計了響應式網頁版面，以確保線上字典彈窗在行動裝置上完全可以順利使用。"
  },
  {
    "word": "available",
    "pos": "adj.",
    "cn_def": "可獲得的；可利用的；有空的",
    "en_def": "able to be used, obtained, or accessed smoothly, or being free to do something or meet someone",
    "sentence": "The accounting firm will thoroughly check all the {{BLANK}} financial resources before funding the business expansion project.",
    "cn": "會計師事務所將在資助業務擴展計畫之前，徹底檢查所有可利用的財務資源。"
  },
  {
    "word": "unavailable",
    "pos": "adj.",
    "cn_def": "無法獲得的；沒空的",
    "en_def": "not able to be used, obtained, or accessed at the moment, or being too busy to attend a meeting",
    "sentence": "Because the automated network server was temporarily {{BLANK}}, the software engineering team had to fix the error manually.",
    "cn": "由於自動化網路伺服器暫時無法使用，軟體工程團隊必須手動修復該錯誤。"
  }
];

const MCQS = [
  {
    "q": "The president delivered an inspiring speech, urging the entire ______ to remain completely united during the ongoing economic crisis.",
    "options": [
      "conveyor",
      "state",
      "declaration",
      "nation"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Tomorrow is a highly anticipated ______ holiday, which means that all banks and public schools will be closed.",
    "options": [
      "national",
      "eternal",
      "firm",
      "state-run"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Even though Leslie has lived in the United States for her entire life, she officially holds Canadian ______.",
    "options": [
      "state",
      "nationality",
      "blossom",
      "assessment"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Because his parents were born in different countries, the young man was incredibly lucky to possess ______.",
    "options": [
      "cherry blossom",
      "currency rate",
      "dual nationality",
      "worldly possessions"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The famous author is ______ recognized for her brilliant novels that explore the complex nature of human relationships.",
    "options": [
      "internationally",
      "permanently",
      "temporarily",
      "delicately"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The progressive law firm advised the international corporation on how to comply with the trade regulations of each foreign ______.",
    "options": [
      "statement",
      "reputation",
      "state",
      "spirit"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The newly elected president promised to thoroughly modernize the ______ railway system to improve daily commuting for all citizens.",
    "options": [
      "immortal",
      "reputed",
      "national",
      "state-run"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The contract terms clearly ______ that all imported goods must be assessed by customs officers before entering the port.",
    "options": [
      "evaluate",
      "state",
      "access",
      "possess"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The ambitious entrepreneur issued an official ______ to reassure the wealthy investors that the business expansion was going smoothly.",
    "options": [
      "statement",
      "nationality",
      "throne",
      "esteemed"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The leading researcher decided to ______ to the press after his scientific experiment yielded highly accurate data.",
    "options": [
      "law firm",
      "make a statement",
      "in bloom",
      "convey a clear message"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The victorious general arrived at the capital to ______ the complete defeat of the oppressive invading army.",
    "options": [
      "assess",
      "attached",
      "access",
      "proclaim"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The government intends to ______ the heavily damaged forest region a protected zone to save the endangered wild species.",
    "options": [
      "attached",
      "conveyed",
      "declare",
      "access"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The unyielding dictator fiercely chose to ______ on the neighboring state after the peace talks failed completely.",
    "options": [
      "strengths and weaknesses",
      "declare war",
      "in bloom",
      "stemmed from"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The historic ______ of independence was celebrated by the citizens throughout the vast territory of the newly formed country.",
    "options": [
      "declaration",
      "spirit",
      "strength",
      "blooming"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "According to the ancient legend, this mysterious silver ring is said to ______ strange and highly dangerous magical powers.",
    "options": [
      "strengthen",
      "assess",
      "possess",
      "state"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The police officer quickly arrested the nervous young man for the illegal ______ of dangerous and stolen weapons.",
    "options": [
      "blooming",
      "spirit",
      "evaluation",
      "possession"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "When the terrible wildfire destroyed their neighborhood, the family tragically lost all their ______, but they survived safely.",
    "options": [
      "eternal youth",
      "worldly possessions",
      "derive from",
      "make a significant financial sacrifice"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "After experiencing a serious personal crisis, Abby decided to focus entirely on her ______ development and inner peace this year.",
    "options": [
      "unavailable",
      "state-run",
      "temporary",
      "spiritual"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Many people find that practicing daily meditation and deep breathing exercises leaves them feeling significantly healthier and ______ fulfilled.",
    "options": [
      "permanently",
      "internationally",
      "spiritually",
      "temporarily"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Despite losing the difficult championship game, the young athletes maintained a remarkably strong and positive team ______ throughout the tournament.",
    "options": [
      "spirit",
      "statement",
      "attachment",
      "strength"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The strict doctor firmly reminded his patient that maintaining excellent ______ health is absolutely essential for a long life.",
    "options": [
      "accessible",
      "physical",
      "permanent",
      "unavailable"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The wealthy ______ family was tragically forced to leave the grand palace and hide away safely after the violent war broke out.",
    "options": [
      "imperial",
      "eternal",
      "immortal",
      "available"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The history professor passionately discussed how 19th-century ______ profoundly changed the economic and cultural landscapes of many African nations.",
    "options": [
      "access",
      "reputation",
      "imperialism",
      "conveyor"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The powerful Roman ______ commanded a vast and incredibly loyal army that successfully conquered many distant foreign lands.",
    "options": [
      "nation",
      "delicacy",
      "conveyor",
      "emperor"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "At the absolute height of its power, the ancient ______ spanned across three continents and controlled vital international trade routes.",
    "options": [
      "empire",
      "statement",
      "attachment",
      "currency"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Thousands of curious tourists eagerly visit the beautiful ______ every single day to admire its magnificent traditional architecture.",
    "options": [
      "plant stem",
      "full bloom",
      "has an excellent reputation for",
      "imperial palace"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "My grandmother's beautiful garden is definitely most attractive when the red roses are fully ______ in the early spring.",
    "options": [
      "strength",
      "self-esteem",
      "blooming",
      "eternity"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "We decided to take a long walk through the colorful park because all the spring flowers were perfectly ______.",
    "options": [
      "make a sacrifice",
      "in bloom",
      "result from",
      "stemmed from"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The magnificent cherry trees in the mountain valley finally reached ______ yesterday, attracting hundreds of professional photographers.",
    "options": [
      "full bloom",
      "derive from",
      "dragged the innocent mayor's reputation through the mud",
      "make a sacrifice"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The successful business owner proudly looked out over his incredibly profitable and rapidly ______ international technology company.",
    "options": [
      "emotional attachment",
      "thriving",
      "worldly possessions",
      "result from"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The ancient cherry tree standing right next to our wooden house was completely covered in beautiful pink ______ this morning.",
    "options": [
      "emperor",
      "assessment",
      "currency",
      "blossom"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "Thousands of excited tourists travel to Japan every spring specifically to view the stunningly beautiful ______ slowly falling down.",
    "options": [
      "stemmed from",
      "refer to the kind doctor as",
      "cherry blossom",
      "as a result"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The entire scenic mountain valley looks absolutely magical when the millions of wild apple trees are finally perfectly ______.",
    "options": [
      "plant stem",
      "as a result",
      "derive from",
      "in blossom"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The exhausted warehouse worker had to use all his remaining physical ______ just to safely lift the incredibly heavy wooden box.",
    "options": [
      "currency",
      "eternity",
      "strength",
      "reference"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "Surviving such a terrible and heartbreaking tragedy requires an incredible amount of ______ and endless support from close family.",
    "options": [
      "gain access to",
      "inner strength",
      "result in",
      "declare war"
    ],
    "answer": 1,
    "vocabIndex": 34
  },
  {
    "q": "Before the difficult job interview, Randall carefully compiled a detailed list of his professional ______ to present clearly.",
    "options": [
      "strengths and weaknesses",
      "in bloom",
      "refer to the kind doctor as",
      "declare war"
    ],
    "answer": 0,
    "vocabIndex": 35
  },
  {
    "q": "The government officially passed a new law designed to significantly ______ the strict environmental protections for our polluted oceans.",
    "options": [
      "declare",
      "possess",
      "strengthen",
      "state"
    ],
    "answer": 2,
    "vocabIndex": 36
  },
  {
    "q": "The majestic king and beautiful queen sat proudly on their golden ______ in the incredibly grand and highly decorated palace.",
    "options": [
      "esteemed",
      "possession",
      "declaration",
      "throne"
    ],
    "answer": 3,
    "vocabIndex": 37
  },
  {
    "q": "The birth of the healthy baby boy was celebrated widely because he was the official ______ of the country.",
    "options": [
      "as a result",
      "heir to the throne",
      "convey a clear message",
      "conveyor belt"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "If you have any serious questions about how to fix this broken refrigerator, please closely ______ the attached instruction manual.",
    "options": [
      "refer to",
      "dragged the innocent mayor's reputation through the mud",
      "currency exchange",
      "in bloom"
    ],
    "answer": 0,
    "vocabIndex": 39
  },
  {
    "q": "The professor made a brief but incredibly insightful ______ to the ancient Roman Empire during his complex history lecture today.",
    "options": [
      "reputation",
      "reference",
      "nation",
      "eternity"
    ],
    "answer": 1,
    "vocabIndex": 40
  },
  {
    "q": "Because he is always willing to help others, many citizens ______ a local hero.",
    "options": [
      "imperial palace",
      "is attached to",
      "refer to the kind doctor as",
      "in bloom"
    ],
    "answer": 2,
    "vocabIndex": 41
  },
  {
    "q": "The strict manager tends to ______ valuable opportunities for employees to learn and grow.",
    "options": [
      "view mistakes as",
      "result from",
      "cherry blossom",
      "foreign currency"
    ],
    "answer": 0,
    "vocabIndex": 42
  },
  {
    "q": "Many young children ______ real-life superheroes who can solve any problem in the world.",
    "options": [
      "imperial palace",
      "make a sacrifice",
      "is firmly convinced that",
      "see their parents as"
    ],
    "answer": 3,
    "vocabIndex": 43
  },
  {
    "q": "Historians generally ______ one of the most important texts in human history.",
    "options": [
      "in blossom",
      "regard this ancient document as",
      "is firmly convinced that",
      "result in"
    ],
    "answer": 1,
    "vocabIndex": 44
  },
  {
    "q": "Most experts ______ the most effective way to maintain good physical and mental health.",
    "options": [
      "for good",
      "dual nationality",
      "consider regular exercise to be",
      "result in"
    ],
    "answer": 2,
    "vocabIndex": 45
  },
  {
    "q": "You should always make absolutely sure you have some local ______ with you when you independently travel to a foreign country.",
    "options": [
      "currency",
      "imperialism",
      "state",
      "esteemed"
    ],
    "answer": 0,
    "vocabIndex": 46
  },
  {
    "q": "The international businessman checks the daily ______ religiously to perfectly ensure his global company doesn't lose any profits.",
    "options": [
      "heir to the throne",
      "worldly possessions",
      "regard this ancient document as",
      "currency rate"
    ],
    "answer": 3,
    "vocabIndex": 47
  },
  {
    "q": "We urgently need to find a secure ______ counter at the busy airport so we can quickly buy train tickets.",
    "options": [
      "has an excellent reputation for",
      "stemmed from",
      "currency exchange",
      "foreign currency"
    ],
    "answer": 2,
    "vocabIndex": 48
  },
  {
    "q": "The conservative bank charges an incredibly high fee if you ever try to withdraw ______ from their automated teller machines.",
    "options": [
      "originated from",
      "foreign currency",
      "ultimate sacrifice",
      "refer to the kind doctor as"
    ],
    "answer": 1,
    "vocabIndex": 49
  },
  {
    "q": "Rick carefully ______ the important medical note to the kitchen fridge with a heavy magnet so his wife would definitely see it.",
    "options": [
      "attached",
      "sacrificed",
      "assess",
      "state"
    ],
    "answer": 0,
    "vocabIndex": 50
  },
  {
    "q": "Please effectively download the detailed PDF ______ in my email so you can properly review the updated financial figures tonight.",
    "options": [
      "state",
      "esteemed",
      "glory",
      "attachment"
    ],
    "answer": 3,
    "vocabIndex": 51
  },
  {
    "q": "The newly hired assistant completely forgot to include the critically important ______ document when she bravely sent the email to the boss.",
    "options": [
      "firm",
      "evaluated",
      "attached",
      "assessed"
    ],
    "answer": 2,
    "vocabIndex": 52
  },
  {
    "q": "The lonely old man has a deep ______ to that broken watch because his beloved late grandfather gave it to him.",
    "options": [
      "accounting firm",
      "emotional attachment",
      "consider regular exercise to be",
      "result in"
    ],
    "answer": 1,
    "vocabIndex": 53
  },
  {
    "q": "The detailed PDF report ______ the email I sent you this morning, so please review the file carefully before our afternoon meeting.",
    "options": [
      "is attached to",
      "eternal youth",
      "result from",
      "glory days"
    ],
    "answer": 0,
    "vocabIndex": 54
  },
  {
    "q": "Having lived in the old countryside house for over ten years, the elderly couple ______ the neighborhood and refused to move to the city.",
    "options": [
      "cherry blossom",
      "emotional attachment",
      "currency rate",
      "was deeply attached to"
    ],
    "answer": 3,
    "vocabIndex": 55
  },
  {
    "q": "The judge remained completely ______ throughout the emotional trial, focusing only on the cold facts presented by both lawyers.",
    "options": [
      "reputable",
      "glorious",
      "detached",
      "evaluated"
    ],
    "answer": 2,
    "vocabIndex": 56
  },
  {
    "q": "The arrogant politician knew that his professional ______ would be seriously at risk if he unfortunately failed to win his court case.",
    "options": [
      "blossom",
      "reputation",
      "eternity",
      "attachment"
    ],
    "answer": 1,
    "vocabIndex": 57
  },
  {
    "q": "My parents' newly opened Italian restaurant ______ serving incredibly good and highly inexpensive food to local customers.",
    "options": [
      "has an excellent reputation for",
      "result from",
      "refer to the kind doctor as",
      "gain access to"
    ],
    "answer": 0,
    "vocabIndex": 58
  },
  {
    "q": "The angry journalist deliberately wrote a false article that cruelly ______ during the election.",
    "options": [
      "dual nationality",
      "currency rate",
      "cherry blossom",
      "dragged the innocent mayor's reputation through the mud"
    ],
    "answer": 3,
    "vocabIndex": 59
  },
  {
    "q": "If you ever want to safely invest your valuable money, you should absolutely find a highly ______ and experienced financial advisor.",
    "options": [
      "reputable",
      "detached",
      "state-run",
      "accessible"
    ],
    "answer": 0,
    "vocabIndex": 60
  },
  {
    "q": "The mysteriously quiet man who just moved in next door is the ______ leader of a highly dangerous international criminal organization.",
    "options": [
      "immortal",
      "reputed",
      "physical",
      "firm"
    ],
    "answer": 1,
    "vocabIndex": 61
  },
  {
    "q": "The biology students eagerly studied how vital nutrients travel swiftly upward through the ______ to reach the delicate green leaves.",
    "options": [
      "refer to",
      "glory days",
      "cherry blossom",
      "plant stem"
    ],
    "answer": 3,
    "vocabIndex": 62
  },
  {
    "q": "The psychologist explained that Anna's irrational fear of heights deeply ______ a terrifying experience she unfortunately had as a young child.",
    "options": [
      "inner strength",
      "conveyor belt",
      "stemmed from",
      "regard this ancient document as"
    ],
    "answer": 2,
    "vocabIndex": 63
  },
  {
    "q": "Many of the most commonly used English words actually ______ ancient Latin, which fascinates the brilliant linguistics professor entirely.",
    "options": [
      "strengths and weaknesses",
      "derive from",
      "emotional attachment",
      "conveyor belt"
    ],
    "answer": 1,
    "vocabIndex": 64
  },
  {
    "q": "Many delicious traditional dishes in Taiwan originally ______ the early immigrant communities who brought their local cooking styles to the island.",
    "options": [
      "originated from",
      "in blossom",
      "stemmed from",
      "view mistakes as"
    ],
    "answer": 0,
    "vocabIndex": 65
  },
  {
    "q": "The severe flooding in the downtown area did not ______ a lack of drainage systems, but rather from the unprecedented amount of heavy rainfall.",
    "options": [
      "glory days",
      "has an excellent reputation for",
      "make a sacrifice",
      "result from"
    ],
    "answer": 3,
    "vocabIndex": 66
  },
  {
    "q": "Staying up late every night to play video games will eventually ______ poor academic performance and extreme fatigue during the daytime.",
    "options": [
      "was deeply attached to",
      "ultimate sacrifice",
      "result in",
      "make a sacrifice"
    ],
    "answer": 2,
    "vocabIndex": 67
  },
  {
    "q": "______ the sudden cancelation of the morning flight, hundreds of frustrated passengers had to spend the night sleeping on the airport floor.",
    "options": [
      "currency exchange",
      "As a result of",
      "dual nationality",
      "eternal youth"
    ],
    "answer": 1,
    "vocabIndex": 68
  },
  {
    "q": "The young athlete trained intensely for four hours every single day; ______, he broke the national record and won the gold medal.",
    "options": [
      "for good",
      "result in",
      "as a result",
      "see their parents as"
    ],
    "answer": 2,
    "vocabIndex": 69
  },
  {
    "q": "Some religious people deeply believe that after a person's death, they will peacefully go on to live an ______ life in heaven.",
    "options": [
      "accessible",
      "national",
      "state-run",
      "eternal"
    ],
    "answer": 3,
    "vocabIndex": 70
  },
  {
    "q": "Many wealthy people strongly desiring ______ frequently use all sorts of expensive cosmetic products to make their skin look artificially younger.",
    "options": [
      "eternal youth",
      "is attached to",
      "make a statement",
      "view mistakes as"
    ],
    "answer": 0,
    "vocabIndex": 71
  },
  {
    "q": "Waiting anxiously in the crowded hospital room for the crucial medical test results honestly felt like an absolute ______ to the terrified mother.",
    "options": [
      "spirit",
      "reputation",
      "eternity",
      "declaration"
    ],
    "answer": 2,
    "vocabIndex": 72
  },
  {
    "q": "According to ancient legends, the powerful Greek gods were completely ______, but their daily actions still came across as very human sometimes.",
    "options": [
      "national",
      "immortal",
      "glorious",
      "available"
    ],
    "answer": 1,
    "vocabIndex": 73
  },
  {
    "q": "After working as a temporary freelancer for two years, David was thrilled to finally receive an offer for a ______ position at the marketing company.",
    "options": [
      "permanent",
      "reputable",
      "reputed",
      "accessible"
    ],
    "answer": 0,
    "vocabIndex": 74
  },
  {
    "q": "Because of the severe spine injury he suffered in the accident, the doctor warned that the athlete's left leg might be ______ damaged.",
    "options": [
      "spiritually",
      "delicately",
      "internationally",
      "permanently"
    ],
    "answer": 3,
    "vocabIndex": 75
  },
  {
    "q": "Tired of the cold winter weather and crowded streets, the family decided to leave New York ______ and move to a sunny beach town in Florida.",
    "options": [
      "for good",
      "eternal youth",
      "gain access to",
      "plant stem"
    ],
    "answer": 0,
    "vocabIndex": 76
  },
  {
    "q": "The store set up a ______ counter near the entrance to sell holiday gifts, but it will be removed once the Christmas season is over.",
    "options": [
      "national",
      "available",
      "eternal",
      "temporary"
    ],
    "answer": 3,
    "vocabIndex": 77
  },
  {
    "q": "Due to a sudden power outage caused by the lightning strike, the office computer network is ______ unavailable until the technicians fix the system.",
    "options": [
      "delicately",
      "temporarily",
      "internationally",
      "permanently"
    ],
    "answer": 1,
    "vocabIndex": 78
  },
  {
    "q": "The brilliant general rightfully earned immense national ______ through his incredibly courageous achievements during the long and brutally destructive war.",
    "options": [
      "nation",
      "delicacy",
      "glory",
      "reference"
    ],
    "answer": 2,
    "vocabIndex": 79
  },
  {
    "q": "The retired professional athletes frequently meet at the local bar to nostalgically talk about their incredible ______ from twenty years ago.",
    "options": [
      "glory days",
      "dual nationality",
      "has an excellent reputation for",
      "consider regular exercise to be"
    ],
    "answer": 0,
    "vocabIndex": 80
  },
  {
    "q": "We eventually reached the incredibly high mountain peak exactly in time to witness a truly ______ and colorful sunset over the ocean.",
    "options": [
      "permanent",
      "detached",
      "reputable",
      "glorious"
    ],
    "answer": 3,
    "vocabIndex": 81
  },
  {
    "q": "Dedicated Kim bravely ______ her entire personal life in order to achieve massive success in her highly demanding corporate job.",
    "options": [
      "declare",
      "assess",
      "sacrificed",
      "evaluate"
    ],
    "answer": 2,
    "vocabIndex": 82
  },
  {
    "q": "The devoted parents ______ to send their daughter to a prestigious university overseas, working extra hours every week.",
    "options": [
      "glory days",
      "make a significant financial sacrifice",
      "in bloom",
      "thriving"
    ],
    "answer": 1,
    "vocabIndex": 83
  },
  {
    "q": "Poor Maggie had to ______ just to afford to send her smart son to the incredibly expensive private school.",
    "options": [
      "is firmly convinced that",
      "was deeply attached to",
      "make a sacrifice",
      "derive from"
    ],
    "answer": 2,
    "vocabIndex": 84
  },
  {
    "q": "The whole nation silently honored the brave soldiers who unfortunately made the ______ while fiercely defending their beloved country from invaders.",
    "options": [
      "law firm",
      "dual nationality",
      "imperial palace",
      "ultimate sacrifice"
    ],
    "answer": 3,
    "vocabIndex": 85
  },
  {
    "q": "Talented Tiger Woods is widely ______ by millions of fans as being undoubtedly one of the best and most famous golfers in the world.",
    "options": [
      "state",
      "esteemed",
      "self-esteem",
      "nationality"
    ],
    "answer": 1,
    "vocabIndex": 86
  },
  {
    "q": "The incredibly ______ scientist was formally invited to the grand university to deliver a highly complex speech about his groundbreaking medical research.",
    "options": [
      "esteemed",
      "delicate",
      "national",
      "eternal"
    ],
    "answer": 0,
    "vocabIndex": 87
  },
  {
    "q": "Constantly criticizing your young children for making tiny mistakes will undoubtedly cause them to quickly develop severely low ______.",
    "options": [
      "emperor",
      "self-esteem",
      "currency",
      "eternity"
    ],
    "answer": 1,
    "vocabIndex": 88
  },
  {
    "q": "Sensitive Carl elegantly ______ his deepest and most complex romantic feelings through the incredibly beautiful poetry he wrote for his girlfriend.",
    "options": [
      "declare",
      "evaluate",
      "conveyed",
      "attached"
    ],
    "answer": 2,
    "vocabIndex": 89
  },
  {
    "q": "The powerful movie utilized dark colors and somber music to effectively ______ about the tragic consequences of violent war.",
    "options": [
      "convey a clear message",
      "worldly possessions",
      "declare war",
      "as a result"
    ],
    "answer": 0,
    "vocabIndex": 90
  },
  {
    "q": "The highly energetic teacher proudly acted as a passionate ______ of valuable historical knowledge to her young, eager students during the class.",
    "options": [
      "empire",
      "eternity",
      "strength",
      "conveyor"
    ],
    "answer": 3,
    "vocabIndex": 91
  },
  {
    "q": "The damaged suitcases slowly rolled along the noisy ______ as the exhausted passengers waited impatiently at the busy international airport.",
    "options": [
      "result from",
      "conveyor belt",
      "as a result",
      "accounting firm"
    ],
    "answer": 1,
    "vocabIndex": 92
  },
  {
    "q": "These extremely ______ white plates are made of fine, expensive china and will easily break if you carelessly drop them on the hard floor.",
    "options": [
      "available",
      "assessed",
      "immortal",
      "delicate"
    ],
    "answer": 3,
    "vocabIndex": 93
  },
  {
    "q": "In some adventurous foreign countries, eating fried insects is considered a rare culinary ______ that many curious international tourists eagerly want to try.",
    "options": [
      "declaration",
      "state",
      "delicacy",
      "nation"
    ],
    "answer": 2,
    "vocabIndex": 94
  },
  {
    "q": "The highly experienced surgeon ______ successfully removed the tiny tumor without causing any permanent damage to the patient's surrounding healthy tissues.",
    "options": [
      "delicately",
      "internationally",
      "temporarily",
      "spiritually"
    ],
    "answer": 0,
    "vocabIndex": 95
  },
  {
    "q": "Unlike the incredibly soft and fragile pillows on my bed, this new mattress is perfectly ______ and provides excellent support for my back.",
    "options": [
      "national",
      "assessed",
      "available",
      "firm"
    ],
    "answer": 3,
    "vocabIndex": 96
  },
  {
    "q": "The leading researcher ______ implementing a more rigorous methodology will yield highly accurate data for the experiment.",
    "options": [
      "view mistakes as",
      "full bloom",
      "is firmly convinced that",
      "as a result"
    ],
    "answer": 2,
    "vocabIndex": 97
  },
  {
    "q": "The prestigious ______ decided to amend its operational contract to handle complex international trade disputes more efficiently.",
    "options": [
      "is firmly convinced that",
      "law firm",
      "consider regular exercise to be",
      "in blossom"
    ],
    "answer": 1,
    "vocabIndex": 98
  },
  {
    "q": "The ambitious entrepreneur hired a local ______ to thoroughly evaluate the corporation's import and tariff expenses.",
    "options": [
      "accounting firm",
      "inner strength",
      "refer to",
      "is firmly convinced that"
    ],
    "answer": 0,
    "vocabIndex": 99
  },
  {
    "q": "The leading researcher needs to ______ the scientific data thoroughly before presenting the methodology to the international board.",
    "options": [
      "state",
      "evaluate",
      "possess",
      "conveyed"
    ],
    "answer": 1,
    "vocabIndex": 100
  },
  {
    "q": "The prestigious law firm requested a thorough ______ of the new trade policy to protect their client's corporation.",
    "options": [
      "self-esteem",
      "throne",
      "strength",
      "evaluation"
    ],
    "answer": 3,
    "vocabIndex": 101
  },
  {
    "q": "The exported goods were carefully ______ by customs officers at the port to ensure compliance with international regulations.",
    "options": [
      "state-run",
      "available",
      "evaluated",
      "unavailable"
    ],
    "answer": 2,
    "vocabIndex": 102
  },
  {
    "q": "The accounting firm will systematically ______ the financial risks associated with the upcoming business expansion project.",
    "options": [
      "assess",
      "evaluate",
      "declare",
      "sacrificed"
    ],
    "answer": 0,
    "vocabIndex": 103
  },
  {
    "q": "The government's environmental ______ revealed that the invasive species was heavily damaging the local agricultural ecosystem.",
    "options": [
      "glory",
      "eternity",
      "assessment",
      "evaluation"
    ],
    "answer": 2,
    "vocabIndex": 104
  },
  {
    "q": "The total tariff ______ on the imported electronics caused the young entrepreneur to alter his pricing strategy completely.",
    "options": [
      "imperial",
      "assessed",
      "immortal",
      "permanent"
    ],
    "answer": 1,
    "vocabIndex": 105
  },
  {
    "q": "Users can smoothly ______ the online testing platform by entering their registered student name and password.",
    "options": [
      "conveyed",
      "declare",
      "evaluate",
      "access"
    ],
    "answer": 3,
    "vocabIndex": 106
  },
  {
    "q": "The remote mountain village historically had limited ______ to modern medical facilities before the new highway was constructed.",
    "options": [
      "access",
      "imperialism",
      "state",
      "throne"
    ],
    "answer": 0,
    "vocabIndex": 107
  },
  {
    "q": "The clever hacker made a bold attempt to ______ the secure database framework of the international technology corporation.",
    "options": [
      "law firm",
      "in bloom",
      "emotional attachment",
      "gain access to"
    ],
    "answer": 3,
    "vocabIndex": 108
  },
  {
    "q": "The tech company devises responsive web layouts to ensure the online dictionary modal is fully ______ on mobile devices.",
    "options": [
      "assessed",
      "accessible",
      "eternal",
      "state-run"
    ],
    "answer": 1,
    "vocabIndex": 109
  },
  {
    "q": "The accounting firm will thoroughly check all the ______ financial resources before funding the business expansion project.",
    "options": [
      "available",
      "attached",
      "esteemed",
      "unavailable"
    ],
    "answer": 0,
    "vocabIndex": 110
  },
  {
    "q": "Because the automated network server was temporarily ______, the software engineering team had to fix the error manually.",
    "options": [
      "available",
      "eternal",
      "unavailable",
      "permanent"
    ],
    "answer": 2,
    "vocabIndex": 111
  }
];

const LOOKUP = {
  "nation": {
    "pos": "n.",
    "en_def": "a large body of people united by common descent, history, culture, or language.",
    "cn_def": "國家",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large body of people united by common descent, history, culture, or language.",
        "cn_def": "國家"
      }
    ]
  },
  "national": {
    "pos": "adj.",
    "en_def": "relating to or characteristic of a nation.",
    "cn_def": "國家的；全國的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to or characteristic of a nation.",
        "cn_def": "國家的；全國的"
      }
    ]
  },
  "nationality": {
    "pos": "n.",
    "en_def": "the status of belonging to a particular nation.",
    "cn_def": "國籍",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the status of belonging to a particular nation.",
        "cn_def": "國籍"
      }
    ]
  },
  "dual nationality": {
    "pos": "phr.",
    "en_def": "the status of being a citizen of two different countries.",
    "cn_def": "雙重國籍",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the status of being a citizen of two different countries.",
        "cn_def": "雙重國籍"
      }
    ]
  },
  "internationally": {
    "pos": "adv.",
    "en_def": "in, between, or among many different nations.",
    "cn_def": "國際地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in, between, or among many different nations.",
        "cn_def": "國際地"
      }
    ]
  },
  "state": {
    "pos": "n.",
    "en_def": "a nation or territory considered as an organized political community under one government",
    "cn_def": "國家；州",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a nation or territory considered as an organized political community under one government",
        "cn_def": "國家；州"
      },
      {
        "pos": "v.",
        "en_def": "to express something definitely, clearly, and formally in speech or in a written legal document",
        "cn_def": "陳述；聲明（動詞）"
      }
    ]
  },
  "state-run": {
    "pos": "adj.",
    "en_def": "operated, managed, or funded directly by the government or official authorities of a country",
    "cn_def": "國營的；政府開辦的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "operated, managed, or funded directly by the government or official authorities of a country",
        "cn_def": "國營的；政府開辦的"
      }
    ]
  },
  "statement": {
    "pos": "n.",
    "en_def": "a definite or official expression of something in speech or writing, or a formal account of facts",
    "cn_def": "聲明；陳述（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a definite or official expression of something in speech or writing, or a formal account of facts",
        "cn_def": "聲明；陳述（名詞）"
      }
    ]
  },
  "make a statement": {
    "pos": "phr.",
    "en_def": "to provide an official, formal oral or written account of facts, typically to the public or authorities",
    "cn_def": "發表聲明；陳述",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to provide an official, formal oral or written account of facts, typically to the public or authorities",
        "cn_def": "發表聲明；陳述"
      }
    ]
  },
  "proclaim": {
    "pos": "v.",
    "en_def": "to announce or declare something officially, publicly, and proudly, especially a major victory or law",
    "cn_def": "宣告；宣佈；讚揚",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to announce or declare something officially, publicly, and proudly, especially a major victory or law",
        "cn_def": "宣告；宣佈；讚揚"
      }
    ]
  },
  "declare": {
    "pos": "v.",
    "en_def": "to formally, solemnly, or officially state a fact, intention, or legal condition to the public",
    "cn_def": "宣布；宣告；申報",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to formally, solemnly, or officially state a fact, intention, or legal condition to the public",
        "cn_def": "宣布；宣告；申報"
      }
    ]
  },
  "declare war": {
    "pos": "phr.",
    "en_def": "to officially or formally announce that a state of military conflict exists between countries",
    "cn_def": "宣戰",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to officially or formally announce that a state of military conflict exists between countries",
        "cn_def": "宣戰"
      }
    ]
  },
  "declaration": {
    "pos": "n.",
    "en_def": "a formal, official, or explicit announcement of an intention, political state, or legal fact",
    "cn_def": "宣告；宣言；申報書",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a formal, official, or explicit announcement of an intention, political state, or legal fact",
        "cn_def": "宣告；宣言；申報書"
      }
    ]
  },
  "possess": {
    "pos": "v.",
    "en_def": "to have as belonging to one; own.",
    "cn_def": "擁有",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to have as belonging to one; own.",
        "cn_def": "擁有"
      }
    ]
  },
  "possession": {
    "pos": "n.",
    "en_def": "the state of having, owning, or controlling something.",
    "cn_def": "擁有；所有物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of having, owning, or controlling something.",
        "cn_def": "擁有；所有物"
      }
    ]
  },
  "worldly possessions": {
    "pos": "phr.",
    "en_def": "physical things that someone owns, as opposed to spiritual values.",
    "cn_def": "世俗財產",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "physical things that someone owns, as opposed to spiritual values.",
        "cn_def": "世俗財產"
      }
    ]
  },
  "spiritual": {
    "pos": "adj.",
    "en_def": "relating to or affecting the human spirit or soul as opposed to material or physical things.",
    "cn_def": "精神上的；心靈的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to or affecting the human spirit or soul as opposed to material or physical things.",
        "cn_def": "精神上的；心靈的"
      }
    ]
  },
  "spiritually": {
    "pos": "adv.",
    "en_def": "in a way that relates to the human spirit or soul.",
    "cn_def": "精神上地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that relates to the human spirit or soul.",
        "cn_def": "精神上地"
      }
    ]
  },
  "spirit": {
    "pos": "n.",
    "en_def": "the nonphysical part of a person which is the seat of emotions and character.",
    "cn_def": "精神；靈魂",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the nonphysical part of a person which is the seat of emotions and character.",
        "cn_def": "精神；靈魂"
      }
    ]
  },
  "physical": {
    "pos": "adj.",
    "en_def": "relating to the body as opposed to the mind.",
    "cn_def": "身體的；物理的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to the body as opposed to the mind.",
        "cn_def": "身體的；物理的"
      }
    ]
  },
  "imperial": {
    "pos": "adj.",
    "en_def": "relating to an empire or an emperor.",
    "cn_def": "帝國的；皇帝的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to an empire or an emperor.",
        "cn_def": "帝國的；皇帝的"
      }
    ]
  },
  "imperialism": {
    "pos": "n.",
    "en_def": "a policy of extending a country's power and influence through diplomacy or military force.",
    "cn_def": "帝國主義",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a policy of extending a country's power and influence through diplomacy or military force.",
        "cn_def": "帝國主義"
      }
    ]
  },
  "emperor": {
    "pos": "n.",
    "en_def": "a sovereign ruler of great power and rank, especially one ruling an empire.",
    "cn_def": "皇帝",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sovereign ruler of great power and rank, especially one ruling an empire.",
        "cn_def": "皇帝"
      }
    ]
  },
  "empire": {
    "pos": "n.",
    "en_def": "an extensive group of states or countries under a single supreme authority.",
    "cn_def": "帝國",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an extensive group of states or countries under a single supreme authority.",
        "cn_def": "帝國"
      }
    ]
  },
  "imperial palace": {
    "pos": "phr.",
    "en_def": "the official residence of an emperor or empress.",
    "cn_def": "皇宮",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the official residence of an emperor or empress.",
        "cn_def": "皇宮"
      }
    ]
  },
  "blooming": {
    "pos": "v. / n.",
    "en_def": "to produce flowers; a flower, especially one cultivated for its beauty.",
    "cn_def": "開花；花朵",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to produce flowers; a flower, especially one cultivated for its beauty.",
        "cn_def": "開花；花朵"
      }
    ]
  },
  "bloom": {
    "pos": "v. / n.",
    "en_def": "to produce flowers; a flower, especially one cultivated for its beauty.",
    "cn_def": "開花；花朵",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to produce flowers; a flower, especially one cultivated for its beauty.",
        "cn_def": "開花；花朵"
      }
    ]
  },
  "in bloom": {
    "pos": "phr.",
    "en_def": "with the flowers fully open.",
    "cn_def": "盛開中",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "with the flowers fully open.",
        "cn_def": "盛開中"
      }
    ]
  },
  "full bloom": {
    "pos": "phr.",
    "en_def": "the stage of a flower being completely open.",
    "cn_def": "全盛時期；完全綻放",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the stage of a flower being completely open.",
        "cn_def": "全盛時期；完全綻放"
      }
    ]
  },
  "blooming / thriving": {
    "pos": "adj.",
    "en_def": "producing flowers; flourishing.",
    "cn_def": "盛開的；繁榮的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "producing flowers; flourishing.",
        "cn_def": "盛開的；繁榮的"
      }
    ]
  },
  "thriving": {
    "pos": "adj.",
    "en_def": "producing flowers; flourishing.",
    "cn_def": "盛開的；繁榮的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "producing flowers; flourishing.",
        "cn_def": "盛開的；繁榮的"
      }
    ]
  },
  "blossom": {
    "pos": "n. / v.",
    "en_def": "a flower or a mass of flowers; to produce flowers.",
    "cn_def": "花朵；開花",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a flower or a mass of flowers; to produce flowers.",
        "cn_def": "花朵；開花"
      }
    ]
  },
  "cherry blossom": {
    "pos": "phr.",
    "en_def": "the flower of a cherry tree, famous for blooming beautifully in spring.",
    "cn_def": "櫻花",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the flower of a cherry tree, famous for blooming beautifully in spring.",
        "cn_def": "櫻花"
      }
    ]
  },
  "in blossom": {
    "pos": "phr.",
    "en_def": "flowering.",
    "cn_def": "盛開中",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "flowering.",
        "cn_def": "盛開中"
      }
    ]
  },
  "strength": {
    "pos": "n.",
    "en_def": "the quality or state of being physically strong.",
    "cn_def": "力量；優點",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality or state of being physically strong.",
        "cn_def": "力量；優點"
      }
    ]
  },
  "inner strength": {
    "pos": "phr.",
    "en_def": "mental and emotional toughness or resilience.",
    "cn_def": "內在力量",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "mental and emotional toughness or resilience.",
        "cn_def": "內在力量"
      }
    ]
  },
  "strengths and weaknesses": {
    "pos": "phr.",
    "en_def": "the good and bad qualities of a person or thing.",
    "cn_def": "優缺點",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the good and bad qualities of a person or thing.",
        "cn_def": "優缺點"
      }
    ]
  },
  "strengthen": {
    "pos": "v.",
    "en_def": "to make or become stronger.",
    "cn_def": "加強；鞏固",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make or become stronger.",
        "cn_def": "加強；鞏固"
      }
    ]
  },
  "throne": {
    "pos": "n.",
    "en_def": "a ceremonial chair for a sovereign, bishop, or similar figure.",
    "cn_def": "王座",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a ceremonial chair for a sovereign, bishop, or similar figure.",
        "cn_def": "王座"
      }
    ]
  },
  "heir to the throne": {
    "pos": "phr.",
    "en_def": "the person next in line to become the monarch.",
    "cn_def": "王位繼承人",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the person next in line to become the monarch.",
        "cn_def": "王位繼承人"
      }
    ]
  },
  "refer to": {
    "pos": "phr.",
    "en_def": "to mention or allude to; to look at a source of information.",
    "cn_def": "提及；參考",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to mention or allude to; to look at a source of information.",
        "cn_def": "提及；參考"
      }
    ]
  },
  "reference": {
    "pos": "n.",
    "en_def": "the action of mentioning or alluding to something.",
    "cn_def": "參考；提及",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of mentioning or alluding to something.",
        "cn_def": "參考；提及"
      }
    ]
  },
  "refer to the kind doctor as": {
    "pos": "phr.",
    "en_def": "To call or describe someone or something by a specific name or title.",
    "cn_def": "把…稱為、將…稱作",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To call or describe someone or something by a specific name or title.",
        "cn_def": "把…稱為、將…稱作"
      }
    ]
  },
  "refer to...as": {
    "pos": "phr.",
    "en_def": "To call or describe someone or something by a specific name or title.",
    "cn_def": "把…稱為、將…稱作",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To call or describe someone or something by a specific name or title.",
        "cn_def": "把…稱為、將…稱作"
      }
    ]
  },
  "view mistakes as": {
    "pos": "phr.",
    "en_def": "To think about or consider someone or something in a particular way.",
    "cn_def": "把…視為、將…看作",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To think about or consider someone or something in a particular way.",
        "cn_def": "把…視為、將…看作"
      }
    ]
  },
  "view...as": {
    "pos": "phr.",
    "en_def": "To think about or consider someone or something in a particular way.",
    "cn_def": "把…視為、將…看作",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To think about or consider someone or something in a particular way.",
        "cn_def": "把…視為、將…看作"
      }
    ]
  },
  "see their parents as": {
    "pos": "phr.",
    "en_def": "To consider or regard someone or something in a specific way.",
    "cn_def": "把…看作、將…視為",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To consider or regard someone or something in a specific way.",
        "cn_def": "把…看作、將…視為"
      }
    ]
  },
  "see...as": {
    "pos": "phr.",
    "en_def": "To consider or regard someone or something in a specific way.",
    "cn_def": "把…看作、將…視為",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To consider or regard someone or something in a specific way.",
        "cn_def": "把…看作、將…視為"
      }
    ]
  },
  "regard...as": {
    "pos": "phr.",
    "en_def": "To think of someone or something with a specific feeling or opinion.",
    "cn_def": "把…視為、認為…是",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To think of someone or something with a specific feeling or opinion.",
        "cn_def": "把…視為、認為…是"
      }
    ]
  },
  "regard this ancient document as": {
    "pos": "phr.",
    "en_def": "To think of someone or something with a specific feeling or opinion.",
    "cn_def": "把…視為、認為…是",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To think of someone or something with a specific feeling or opinion.",
        "cn_def": "把…視為、認為…是"
      }
    ]
  },
  "consider...to be": {
    "pos": "phr.",
    "en_def": "To have a particular opinion about someone or something; to believe someone or something has a certain quality.",
    "cn_def": "認為…是、把…視為",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To have a particular opinion about someone or something; to believe someone or something has a certain quality.",
        "cn_def": "認為…是、把…視為"
      }
    ]
  },
  "consider regular exercise to be": {
    "pos": "phr.",
    "en_def": "To have a particular opinion about someone or something; to believe someone or something has a certain quality.",
    "cn_def": "認為…是、把…視為",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To have a particular opinion about someone or something; to believe someone or something has a certain quality.",
        "cn_def": "認為…是、把…視為"
      }
    ]
  },
  "currency": {
    "pos": "n.",
    "en_def": "a system of money in general use in a particular country.",
    "cn_def": "貨幣",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a system of money in general use in a particular country.",
        "cn_def": "貨幣"
      }
    ]
  },
  "currency rate": {
    "pos": "phr.",
    "en_def": "the value of one currency for the purpose of conversion to another.",
    "cn_def": "匯率",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the value of one currency for the purpose of conversion to another.",
        "cn_def": "匯率"
      }
    ]
  },
  "currency exchange": {
    "pos": "phr.",
    "en_def": "a business or service that changes one country's money for another.",
    "cn_def": "貨幣兌換",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a business or service that changes one country's money for another.",
        "cn_def": "貨幣兌換"
      }
    ]
  },
  "foreign currency": {
    "pos": "phr.",
    "en_def": "the money used in a country other than one's own.",
    "cn_def": "外幣",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the money used in a country other than one's own.",
        "cn_def": "外幣"
      }
    ]
  },
  "attach": {
    "pos": "v.",
    "en_def": "to fasten or join one thing to another.",
    "cn_def": "貼上；附加",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to fasten or join one thing to another.",
        "cn_def": "貼上；附加"
      }
    ]
  },
  "attached": {
    "pos": "v.",
    "en_def": "to fasten or join one thing to another.",
    "cn_def": "貼上；附加",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to fasten or join one thing to another.",
        "cn_def": "貼上；附加"
      },
      {
        "pos": "adj.",
        "en_def": "joined, fastened, or connected to something.",
        "cn_def": "附上的；依戀的"
      }
    ]
  },
  "attachment": {
    "pos": "n.",
    "en_def": "an extra part or extension that is or can be attached to something.",
    "cn_def": "附件；依戀",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an extra part or extension that is or can be attached to something.",
        "cn_def": "附件；依戀"
      }
    ]
  },
  "emotional attachment": {
    "pos": "phr.",
    "en_def": "a strong feeling of affection or loyalty towards someone or something.",
    "cn_def": "情感依戀",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a strong feeling of affection or loyalty towards someone or something.",
        "cn_def": "情感依戀"
      }
    ]
  },
  "is attached to": {
    "pos": "phr.",
    "en_def": "To be joined or sent together with an email message as a separate digital file.",
    "cn_def": "隨信附上、附帶於（電子郵件）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To be joined or sent together with an email message as a separate digital file.",
        "cn_def": "隨信附上、附帶於（電子郵件）"
      }
    ]
  },
  "be attached to": {
    "pos": "phr.",
    "en_def": "To be joined or sent together with an email message as a separate digital file.",
    "cn_def": "隨信附上、附帶於（電子郵件）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To be joined or sent together with an email message as a separate digital file.",
        "cn_def": "隨信附上、附帶於（電子郵件）"
      },
      {
        "pos": "phr.",
        "en_def": "To feel a strong emotional connection, affection, or loyalty to someone or something.",
        "cn_def": "依戀…、對…有深厚的感情"
      }
    ]
  },
  "was deeply attached to": {
    "pos": "phr.",
    "en_def": "To feel a strong emotional connection, affection, or loyalty to someone or something.",
    "cn_def": "依戀…、對…有深厚的感情",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To feel a strong emotional connection, affection, or loyalty to someone or something.",
        "cn_def": "依戀…、對…有深厚的感情"
      }
    ]
  },
  "detached": {
    "pos": "adj.",
    "en_def": "Emotionally distant, cool, or not showing any personal involvement or feelings.",
    "cn_def": "不帶感情的、冷漠的、超然的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Emotionally distant, cool, or not showing any personal involvement or feelings.",
        "cn_def": "不帶感情的、冷漠的、超然的"
      }
    ]
  },
  "reputation": {
    "pos": "n.",
    "en_def": "the beliefs or opinions that are generally held about someone or something.",
    "cn_def": "名聲",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the beliefs or opinions that are generally held about someone or something.",
        "cn_def": "名聲"
      }
    ]
  },
  "have a reputation for": {
    "pos": "phr.",
    "en_def": "to be known for a particular quality or characteristic.",
    "cn_def": "以...聞名/有...的名聲",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be known for a particular quality or characteristic.",
        "cn_def": "以...聞名/有...的名聲"
      }
    ]
  },
  "has an excellent reputation for": {
    "pos": "phr.",
    "en_def": "to be known for a particular quality or characteristic.",
    "cn_def": "以...聞名/有...的名聲",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be known for a particular quality or characteristic.",
        "cn_def": "以...聞名/有...的名聲"
      }
    ]
  },
  "drag somebody's reputation through the mud": {
    "pos": "phr.",
    "en_def": "to publicly ruin or deeply damage someone's good name.",
    "cn_def": "使某人名譽掃地",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to publicly ruin or deeply damage someone's good name.",
        "cn_def": "使某人名譽掃地"
      }
    ]
  },
  "dragged the innocent mayor's reputation through the mud": {
    "pos": "phr.",
    "en_def": "to publicly ruin or deeply damage someone's good name.",
    "cn_def": "使某人名譽掃地",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to publicly ruin or deeply damage someone's good name.",
        "cn_def": "使某人名譽掃地"
      }
    ]
  },
  "reputable": {
    "pos": "adj.",
    "en_def": "having a good reputation.",
    "cn_def": "聲譽卓著的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a good reputation.",
        "cn_def": "聲譽卓著的"
      }
    ]
  },
  "reputed": {
    "pos": "adj.",
    "en_def": "generally believed to be a certain way, though not necessarily proven.",
    "cn_def": "據說的；被普遍認為的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "generally believed to be a certain way, though not necessarily proven.",
        "cn_def": "據說的；被普遍認為的"
      }
    ]
  },
  "plant stem": {
    "pos": "phr.",
    "en_def": "the structural axis of a plant.",
    "cn_def": "植物莖幹",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the structural axis of a plant.",
        "cn_def": "植物莖幹"
      }
    ]
  },
  "stemmed from": {
    "pos": "phr.",
    "en_def": "to be caused by or originate from something.",
    "cn_def": "源自於",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be caused by or originate from something.",
        "cn_def": "源自於"
      }
    ]
  },
  "stem from": {
    "pos": "phr.",
    "en_def": "to be caused by or originate from something.",
    "cn_def": "源自於",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be caused by or originate from something.",
        "cn_def": "源自於"
      }
    ]
  },
  "derive from": {
    "pos": "phr.",
    "en_def": "to obtain or originate from a specified source.",
    "cn_def": "源自於；從...衍生出",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to obtain or originate from a specified source.",
        "cn_def": "源自於；從...衍生出"
      }
    ]
  },
  "originate from": {
    "pos": "phr.",
    "en_def": "To come from a particular place, time, or situation; to have a specific beginning.",
    "cn_def": "源自、發源於",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To come from a particular place, time, or situation; to have a specific beginning.",
        "cn_def": "源自、發源於"
      }
    ]
  },
  "originated from": {
    "pos": "phr.",
    "en_def": "To come from a particular place, time, or situation; to have a specific beginning.",
    "cn_def": "源自、發源於",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To come from a particular place, time, or situation; to have a specific beginning.",
        "cn_def": "源自、發源於"
      }
    ]
  },
  "result from": {
    "pos": "phr.",
    "en_def": "To be caused by something else (Effect + result from + Cause).",
    "cn_def": "起因於、由…所造成",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To be caused by something else (Effect + result from + Cause).",
        "cn_def": "起因於、由…所造成"
      }
    ]
  },
  "result in": {
    "pos": "phr.",
    "en_def": "To cause a particular situation or outcome to happen (Cause + result in + Effect).",
    "cn_def": "導致、造成、結果是",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To cause a particular situation or outcome to happen (Cause + result in + Effect).",
        "cn_def": "導致、造成、結果是"
      }
    ]
  },
  "as a result of": {
    "pos": "phr.",
    "en_def": "Because of something that has happened (Used before a noun phrase cause).",
    "cn_def": "由於…的結果、因為",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Because of something that has happened (Used before a noun phrase cause).",
        "cn_def": "由於…的結果、因為"
      }
    ]
  },
  "as a result": {
    "pos": "phr.",
    "en_def": "Therefore; because of something that was just mentioned (Used to introduce the effect).",
    "cn_def": "因此、結果",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Therefore; because of something that was just mentioned (Used to introduce the effect).",
        "cn_def": "因此、結果"
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
  "eternal youth": {
    "pos": "phr.",
    "en_def": "the state of looking or feeling young forever.",
    "cn_def": "青春永駐",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the state of looking or feeling young forever.",
        "cn_def": "青春永駐"
      }
    ]
  },
  "eternity": {
    "pos": "n.",
    "en_def": "infinite or unending time.",
    "cn_def": "永恆；漫長的時間",
    "combined": [
      {
        "pos": "n.",
        "en_def": "infinite or unending time.",
        "cn_def": "永恆；漫長的時間"
      }
    ]
  },
  "immortal": {
    "pos": "adj.",
    "en_def": "living forever; never dying or decaying.",
    "cn_def": "不朽的；長生不老的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "living forever; never dying or decaying.",
        "cn_def": "不朽的；長生不老的"
      }
    ]
  },
  "permanent": {
    "pos": "adj.",
    "en_def": "Lasting for a long time or forever; not temporary.",
    "cn_def": "永久的、固定的、長期的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Lasting for a long time or forever; not temporary.",
        "cn_def": "永久的、固定的、長期的"
      }
    ]
  },
  "permanently": {
    "pos": "adv.",
    "en_def": "In a way that lasts forever or for a very long time without changing.",
    "cn_def": "永久地、長期地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "In a way that lasts forever or for a very long time without changing.",
        "cn_def": "永久地、長期地"
      }
    ]
  },
  "for good": {
    "pos": "phr.",
    "en_def": "Forever; permanently.",
    "cn_def": "永遠地、永久地",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Forever; permanently.",
        "cn_def": "永遠地、永久地"
      }
    ]
  },
  "temporary": {
    "pos": "adj.",
    "en_def": "Lasting for only a short or limited time; not permanent.",
    "cn_def": "暫時的、臨時的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Lasting for only a short or limited time; not permanent.",
        "cn_def": "暫時的、臨時的"
      }
    ]
  },
  "temporarily": {
    "pos": "adv.",
    "en_def": "For a short or limited time; not permanently.",
    "cn_def": "暫時地、臨時地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "For a short or limited time; not permanently.",
        "cn_def": "暫時地、臨時地"
      }
    ]
  },
  "glory": {
    "pos": "n.",
    "en_def": "high renown or honor won by notable achievements.",
    "cn_def": "榮耀",
    "combined": [
      {
        "pos": "n.",
        "en_def": "high renown or honor won by notable achievements.",
        "cn_def": "榮耀"
      }
    ]
  },
  "glory days": {
    "pos": "phr.",
    "en_def": "a period in the past when something or someone was highly successful.",
    "cn_def": "光輝歲月",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a period in the past when something or someone was highly successful.",
        "cn_def": "光輝歲月"
      }
    ]
  },
  "glorious": {
    "pos": "adj.",
    "en_def": "having, worthy of, or bringing fame or admiration.",
    "cn_def": "輝煌的；壯麗的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having, worthy of, or bringing fame or admiration.",
        "cn_def": "輝煌的；壯麗的"
      }
    ]
  },
  "sacrificed": {
    "pos": "v.",
    "en_def": "to give up something valued for the sake of other considerations.",
    "cn_def": "犧牲",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give up something valued for the sake of other considerations.",
        "cn_def": "犧牲"
      }
    ]
  },
  "sacrifice": {
    "pos": "v.",
    "en_def": "to give up something valued for the sake of other considerations.",
    "cn_def": "犧牲",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give up something valued for the sake of other considerations.",
        "cn_def": "犧牲"
      }
    ]
  },
  "make a sacrifice": {
    "pos": "n.",
    "en_def": "The act of giving up something valuable to help someone else or to achieve an important goal.",
    "cn_def": "犧牲、奉獻",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The act of giving up something valuable to help someone else or to achieve an important goal.",
        "cn_def": "犧牲、奉獻"
      },
      {
        "pos": "phr.",
        "en_def": "to give up something important or valuable.",
        "cn_def": "做出犧牲"
      }
    ]
  },
  "make a significant financial sacrifice": {
    "pos": "n.",
    "en_def": "The act of giving up something valuable to help someone else or to achieve an important goal.",
    "cn_def": "犧牲、奉獻",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The act of giving up something valuable to help someone else or to achieve an important goal.",
        "cn_def": "犧牲、奉獻"
      }
    ]
  },
  "ultimate sacrifice": {
    "pos": "phr.",
    "en_def": "the act of giving one's life for a cause.",
    "cn_def": "最終的犧牲（指捐軀）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the act of giving one's life for a cause.",
        "cn_def": "最終的犧牲（指捐軀）"
      }
    ]
  },
  "esteemed": {
    "pos": "n. / v.",
    "en_def": "respect and admiration, typically for a person.",
    "cn_def": "尊重；評價",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "respect and admiration, typically for a person.",
        "cn_def": "尊重；評價"
      },
      {
        "pos": "adj.",
        "en_def": "highly respected or admired.",
        "cn_def": "受人尊敬的"
      }
    ]
  },
  "esteem": {
    "pos": "n. / v.",
    "en_def": "respect and admiration, typically for a person.",
    "cn_def": "尊重；評價",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "respect and admiration, typically for a person.",
        "cn_def": "尊重；評價"
      }
    ]
  },
  "self-esteem": {
    "pos": "n.",
    "en_def": "confidence in one's own worth or abilities; self-respect.",
    "cn_def": "自尊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "confidence in one's own worth or abilities; self-respect.",
        "cn_def": "自尊"
      }
    ]
  },
  "conveyed": {
    "pos": "v.",
    "en_def": "to make an idea, impression, or feeling known or understandable to someone.",
    "cn_def": "傳達",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make an idea, impression, or feeling known or understandable to someone.",
        "cn_def": "傳達"
      }
    ]
  },
  "convey": {
    "pos": "v.",
    "en_def": "to make an idea, impression, or feeling known or understandable to someone.",
    "cn_def": "傳達",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make an idea, impression, or feeling known or understandable to someone.",
        "cn_def": "傳達"
      }
    ]
  },
  "convey a clear message": {
    "pos": "phr.",
    "en_def": "to successfully communicate a thought or idea.",
    "cn_def": "傳達訊息",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to successfully communicate a thought or idea.",
        "cn_def": "傳達訊息"
      }
    ]
  },
  "convey a message": {
    "pos": "phr.",
    "en_def": "to successfully communicate a thought or idea.",
    "cn_def": "傳達訊息",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to successfully communicate a thought or idea.",
        "cn_def": "傳達訊息"
      }
    ]
  },
  "conveyor": {
    "pos": "n.",
    "en_def": "a person or thing that transports or communicates something.",
    "cn_def": "傳達者；運輸工具",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or thing that transports or communicates something.",
        "cn_def": "傳達者；運輸工具"
      }
    ]
  },
  "conveyor belt": {
    "pos": "phr.",
    "en_def": "a continuous moving band of fabric, rubber, or metal used for transporting objects.",
    "cn_def": "輸送帶",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a continuous moving band of fabric, rubber, or metal used for transporting objects.",
        "cn_def": "輸送帶"
      }
    ]
  },
  "delicate": {
    "pos": "adj.",
    "en_def": "very fine in texture or structure; of intricate workmanship or quality.",
    "cn_def": "精緻的；脆弱的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very fine in texture or structure; of intricate workmanship or quality.",
        "cn_def": "精緻的；脆弱的"
      }
    ]
  },
  "delicacy": {
    "pos": "n.",
    "en_def": "a choice or expensive food.",
    "cn_def": "佳餚；珍饈",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a choice or expensive food.",
        "cn_def": "佳餚；珍饈"
      }
    ]
  },
  "delicately": {
    "pos": "adv.",
    "en_def": "in a very careful or finely skilled manner.",
    "cn_def": "精緻地；小心翼翼地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a very careful or finely skilled manner.",
        "cn_def": "精緻地；小心翼翼地"
      }
    ]
  },
  "firm": {
    "pos": "adj.",
    "en_def": "having a solid, almost unyielding surface or structure.",
    "cn_def": "堅固的；堅定的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a solid, almost unyielding surface or structure.",
        "cn_def": "堅固的；堅定的"
      }
    ]
  },
  "is firmly convinced that": {
    "pos": "phr.",
    "en_def": "completely certain and holding a powerful, unyielding belief that something is absolutely true",
    "cn_def": "堅信...；確信...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "completely certain and holding a powerful, unyielding belief that something is absolutely true",
        "cn_def": "堅信...；確信..."
      }
    ]
  },
  "law firm": {
    "pos": "n.",
    "en_def": "a business partnership formed by lawyers to advise clients about their legal rights and represent them in court",
    "cn_def": "法律事務所",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a business partnership formed by lawyers to advise clients about their legal rights and represent them in court",
        "cn_def": "法律事務所"
      }
    ]
  },
  "accounting firm": {
    "pos": "n.",
    "en_def": "a company that provides professional services such as auditing, tax preparation, and financial tracking",
    "cn_def": "會計師事務所",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a company that provides professional services such as auditing, tax preparation, and financial tracking",
        "cn_def": "會計師事務所"
      }
    ]
  },
  "evaluate": {
    "pos": "v.",
    "en_def": "to form an idea of the amount, number, or value of something after careful appraisal",
    "cn_def": "評估；評價（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to form an idea of the amount, number, or value of something after careful appraisal",
        "cn_def": "評估；評價（動詞）"
      }
    ]
  },
  "evaluation": {
    "pos": "n.",
    "en_def": "the making of a judgment about the amount, number, or value of something; assessment",
    "cn_def": "評估；評價（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the making of a judgment about the amount, number, or value of something; assessment",
        "cn_def": "評估；評價（名詞）"
      }
    ]
  },
  "evaluated": {
    "pos": "adj./v-pt",
    "en_def": "having been judged or calculated carefully regarding worth, quality, or significance",
    "cn_def": "被評估的；已評估的",
    "combined": [
      {
        "pos": "adj./v-pt",
        "en_def": "having been judged or calculated carefully regarding worth, quality, or significance",
        "cn_def": "被評估的；已評估的"
      }
    ]
  },
  "assess": {
    "pos": "v.",
    "en_def": "to officially judge or decide the amount, value, quality, or importance of a situation or tax",
    "cn_def": "評定；評估；核定（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to officially judge or decide the amount, value, quality, or importance of a situation or tax",
        "cn_def": "評定；評估；核定（動詞）"
      }
    ]
  },
  "assessment": {
    "pos": "n.",
    "en_def": "the factual act of judging or deciding the amount, value, quality, or importance of something",
    "cn_def": "評定；評估（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the factual act of judging or deciding the amount, value, quality, or importance of something",
        "cn_def": "評定；評估（名詞）"
      }
    ]
  },
  "assessed": {
    "pos": "adj./v-pt",
    "en_def": "evaluated or officially charged with a specific value, property tax, or level of performance",
    "cn_def": "被評定的；已評估的",
    "combined": [
      {
        "pos": "adj./v-pt",
        "en_def": "evaluated or officially charged with a specific value, property tax, or level of performance",
        "cn_def": "被評定的；已評估的"
      }
    ]
  },
  "access": {
    "pos": "v.",
    "en_def": "to open, obtain, or gain entry to a specific digital file, database, secure network, or physical location",
    "cn_def": "讀取；進入；接近（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to open, obtain, or gain entry to a specific digital file, database, secure network, or physical location",
        "cn_def": "讀取；進入；接近（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "the right, opportunity, or physical means to approach, enter, or make use of something",
        "cn_def": "進入的權利；通道；路徑（名詞）"
      }
    ]
  },
  "gain access to": {
    "pos": "phr.",
    "en_def": "to successfully manage to enter a secure physical area or retrieve protected digital data",
    "cn_def": "獲得...的進入權；取得（資料）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to successfully manage to enter a secure physical area or retrieve protected digital data",
        "cn_def": "獲得...的進入權；取得（資料）"
      }
    ]
  },
  "accessible": {
    "pos": "adj.",
    "en_def": "easy to approach, enter, obtain, use, or understand for various individuals or devices",
    "cn_def": "可接近的；可進入的；易懂的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "easy to approach, enter, obtain, use, or understand for various individuals or devices",
        "cn_def": "可接近的；可進入的；易懂的"
      }
    ]
  },
  "available": {
    "pos": "adj.",
    "en_def": "able to be used, obtained, or accessed smoothly, or being free to do something or meet someone",
    "cn_def": "可獲得的；可利用的；有空的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to be used, obtained, or accessed smoothly, or being free to do something or meet someone",
        "cn_def": "可獲得的；可利用的；有空的"
      }
    ]
  },
  "unavailable": {
    "pos": "adj.",
    "en_def": "not able to be used, obtained, or accessed at the moment, or being too busy to attend a meeting",
    "cn_def": "無法獲得的；沒空的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not able to be used, obtained, or accessed at the moment, or being too busy to attend a meeting",
        "cn_def": "無法獲得的；沒空的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
