// Unit 12 Quiz Data: apparent – broaden one's horizons
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Basic U12 - apparent – broaden one's horizons",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "apparent",
    "pos": "adj.",
    "cn_def": "明顯的",
    "en_def": "clearly visible or understood; obvious.",
    "sentence": "Because his bedroom was completely messed up, it was quite {{BLANK}} that someone had secretly been sleeping on his bed.",
    "cn": "因為他的臥室完全被弄亂了，很明顯的有人偷偷睡在他的床上。"
  },
  {
    "word": "apparently",
    "pos": "adv.",
    "cn_def": "顯然地",
    "en_def": "as far as one knows or can see.",
    "sentence": "The sky is incredibly dark and cloudy today, so {{BLANK}} it is going to rain very heavily later this afternoon.",
    "cn": "今天天空極其黑暗且多雲，所以顯然地今天下午晚些時候會下大雨。"
  },
  {
    "word": "obvious",
    "pos": "adj.",
    "cn_def": "明顯的",
    "en_def": "easily perceived or understood; clear, self-evident, or apparent.",
    "sentence": "After watching him completely fail to hit the baseball, it was painfully {{BLANK}} that he had never played the game before.",
    "cn": "在看著他完全打不到棒球後，令人痛苦地明顯的是他以前從未玩過這個遊戲。"
  },
  {
    "word": "obviously",
    "pos": "adv.",
    "cn_def": "明顯地",
    "en_def": "in a way that is easily perceived or understood.",
    "sentence": "The strict teacher noticed that Evan {{BLANK}} hadn't studied very hard, since he miserably failed the difficult exam.",
    "cn": "嚴格的老師注意到伊凡顯然沒有很用功讀書，因為他悽慘地沒通過這場困難的考試。"
  },
  {
    "word": "sustain",
    "pos": "v.",
    "cn_def": "維持",
    "en_def": "to strengthen or support physically or mentally.",
    "sentence": "In order to properly {{BLANK}} rapid economic growth, the developing country must heavily invest in its public transportation systems immediately.",
    "cn": "為了適當地維持快速的經濟成長，這個發展中國家必須立刻大力投資其大眾運輸系統。"
  },
  {
    "word": "sustainable",
    "pos": "adj.",
    "cn_def": "永續的",
    "en_def": "able to be maintained at a certain rate or level.",
    "sentence": "Dedicated environmental researchers are actively looking for {{BLANK}} methods of producing clean electricity for the rapidly growing modern city.",
    "cn": "盡責的環境研究人員正積極為快速發展的現代城市尋找生產乾淨電力的永續的方法。"
  },
  {
    "word": "unsustainable",
    "pos": "adj.",
    "cn_def": "無法永續的",
    "en_def": "not able to be maintained at the current rate or level.",
    "sentence": "Relying entirely on expensive and highly polluting fossil fuels is a completely {{BLANK}} way to generate electricity for future generations.",
    "cn": "完全依賴昂貴且高污染的化石燃料，對後代來說是一種完全無法永續的發電方式。"
  },
  {
    "word": "sustainability",
    "pos": "n.",
    "cn_def": "永續性",
    "en_def": "the ability to be maintained at a certain rate or level.",
    "sentence": "The modern international company places a strong emphasis on environmental {{BLANK}} by efficiently using recycled materials for all their products.",
    "cn": "這家現代國際公司透過在其所有產品中高效率地使用回收材料，強烈強調環境的永續性。"
  },
  {
    "word": "sustainable development",
    "pos": "phr.",
    "cn_def": "永續發展",
    "en_def": "economic development that is conducted without depletion of natural resources.",
    "sentence": "The ambitious new mayor promised to passionately promote {{BLANK}} by building several massive solar power plants just outside the city.",
    "cn": "雄心勃勃的新市長承諾，將透過在城市外圍建造幾座大型太陽能發電廠來熱情推動永續發展。"
  },
  {
    "word": "technical",
    "pos": "adj.",
    "cn_def": "技術的；專業的",
    "en_def": "relating to a particular subject, art, or craft, or its techniques.",
    "sentence": "The dense scientific article contained far too many complex {{BLANK}} terms that the average reader simply could not understand correctly.",
    "cn": "這篇密集的科學文章包含太多複雜的專業的（技術的）術語，一般讀者根本無法正確理解。"
  },
  {
    "word": "technically",
    "pos": "adv.",
    "cn_def": "嚴格來說；技術上",
    "en_def": "according to the facts or exact meaning of something; strictly.",
    "sentence": "Although the red tomato is widely considered a vegetable in cooking, {{BLANK}} it is actually classified as a sweet fruit by scientists.",
    "cn": "雖然紅番茄在烹飪中被廣泛認為是蔬菜，但嚴格來說，它實際上被科學家歸類為甜水果。"
  },
  {
    "word": "technical problem",
    "pos": "phr.",
    "cn_def": "技術問題",
    "en_def": "an issue arising from the mechanical or electronic operation of a system.",
    "sentence": "Because the engineering team experienced an unexpected {{BLANK}}, the highly anticipated educational speech unfortunately started very late.",
    "cn": "因為工程團隊經歷了出乎意料的技術問題，這場備受期待的教育演講不幸地很晚才開始。"
  },
  {
    "word": "technical support",
    "pos": "phr.",
    "cn_def": "技術支援",
    "en_def": "a service provided to users of technology products or services.",
    "sentence": "If you honestly cannot fix the broken software yourself, you should probably contact {{BLANK}} to get some professional assistance quickly.",
    "cn": "如果你真的無法自己修復壞掉的軟體，你可能應該聯絡技術支援以迅速獲得一些專業協助。"
  },
  {
    "word": "technical term",
    "pos": "phr.",
    "cn_def": "專業術語",
    "en_def": "a word that has a specific meaning within a specific field of expertise.",
    "sentence": "The brilliant professor explained the complex {{BLANK}} in simple language so that all the beginner students could easily understand it.",
    "cn": "這位才華洋溢的教授用簡單的語言解釋了複雜的專業術語，讓所有初學者都能輕鬆理解。"
  },
  {
    "word": "unconventional",
    "pos": "adj.",
    "cn_def": "非傳統的；非常規的",
    "en_def": "not based on or conforming to what is generally done or believed.",
    "sentence": "When dealing with highly complex modern business issues, sometimes {{BLANK}} solutions are actually the most effective way to solve them.",
    "cn": "在處理高度複雜的現代商業問題時，有時非傳統的解決方案實際上是解決它們最有效的方法。"
  },
  {
    "word": "conventional",
    "pos": "adj.",
    "cn_def": "傳統的；常規的",
    "en_def": "based on or in accordance with what is generally done or believed.",
    "sentence": "Instead of following {{BLANK}} methods of farming, the young farmer decided to creatively grow his healthy vegetables indoors using advanced technology.",
    "cn": "這位年輕農夫沒有遵循傳統的耕作方法，而是決定創造性地使用先進技術在室內種植健康的蔬菜。"
  },
  {
    "word": "convention",
    "pos": "n.",
    "cn_def": "大會；慣例",
    "en_def": "a large meeting of people with a shared interest.",
    "sentence": "The famous international technology company holds a massive annual {{BLANK}} to proudly announce its newest electronic products to the eager public.",
    "cn": "這家著名的國際科技公司每年舉辦一次大型大會，向熱切的大眾自豪地宣布其最新的電子產品。"
  },
  {
    "word": "unconventionally",
    "pos": "adv.",
    "cn_def": "非傳統地",
    "en_def": "in a way that is not based on what is generally done or believed.",
    "sentence": "The extremely popular new pop artist dresses incredibly {{BLANK}}, which brilliantly helps her strongly stand out from other boring musicians.",
    "cn": "這位極受歡迎的新流行歌手穿著極其非傳統地，這出色地幫助她在其他無聊的音樂家中強烈地脫穎而出。"
  },
  {
    "word": "documents",
    "pos": "n.",
    "cn_def": "文件",
    "en_def": "a piece of written, printed, or electronic matter that provides information or evidence.",
    "sentence": "Pat had to quickly prepare several highly important legal {{BLANK}} to give to his expensive lawyer before the difficult trial officially started.",
    "cn": "派特必須迅速準備幾份極其重要的法律文件，以便在艱難的審判正式開始前交給他昂貴的律師。"
  },
  {
    "word": "documented",
    "pos": "v.",
    "cn_def": "記錄",
    "en_def": "to record (something) in written, photographic, or other form.",
    "sentence": "The strict safety inspector officially {{BLANK}} several dangerous violations at the factory and ordered the angry owners to fix them immediately.",
    "cn": "嚴格的安全檢查員官方記錄了工廠的幾項危險違規行為，並命令憤怒的老闆立即修復。"
  },
  {
    "word": "documentary",
    "pos": "n.",
    "cn_def": "紀錄片",
    "en_def": "a movie or a television or radio program that provides a factual record or report.",
    "sentence": "The fascinating television {{BLANK}} beautifully explored the mysterious deep ocean and the incredibly unique creatures that live completely in the darkness.",
    "cn": "這部引人入勝的電視紀錄片美麗地探索了神祕的深海，以及完全生活在黑暗中極其獨特的生物。"
  },
  {
    "word": "documented",
    "pos": "adj.",
    "cn_def": "有記錄的",
    "en_def": "recorded in written, photographic, or other form.",
    "sentence": "The ambitious historical researcher carefully studied the well {{BLANK}} evidence to write a completely accurate book about the powerful ancient empire.",
    "cn": "雄心勃勃的歷史研究員仔細研究了充分有記錄的證據，以寫出一本關於強大古代帝國完全準確的書。"
  },
  {
    "word": "pests",
    "pos": "n.",
    "cn_def": "害蟲；有害動物",
    "en_def": "a destructive insect or other animal that attacks crops, food, livestock, etc.",
    "sentence": "The aggressive farmer bought a special chemical spray that will effectively keep mice and other destructive {{BLANK}} from entering your cozy home.",
    "cn": "具攻擊性的農夫買了一種特殊的化學噴霧，能有效地防止老鼠和其他具破壞性的有害動物（害蟲）進入你舒適的家。"
  },
  {
    "word": "pesticide",
    "pos": "n.",
    "cn_def": "殺蟲劑",
    "en_def": "a substance used for destroying insects or other organisms harmful to cultivated plants or to animals.",
    "sentence": "To successfully protect the valuable summer crops from hungry insects, the workers carefully sprayed a powerful {{BLANK}} over the entire green field.",
    "cn": "為了成功保護寶貴的夏季農作物免受飢餓昆蟲的侵害，工人們小心地在整個綠色田野上噴灑了強效的殺蟲劑。"
  },
  {
    "word": "pest control",
    "pos": "phr.",
    "cn_def": "害蟲防治",
    "en_def": "the regulation or management of a species defined as a pest.",
    "sentence": "When we suddenly discovered hundreds of dangerous spiders hiding in the dark basement, we immediately called a professional {{BLANK}} company.",
    "cn": "當我們突然發現數百隻危險的蜘蛛隱藏在黑暗的地下室時，我們立刻打電話給專業的害蟲防治公司。"
  },
  {
    "word": "agricultural pest",
    "pos": "phr.",
    "cn_def": "農業害蟲",
    "en_def": "an insect or animal that is detrimental to farming.",
    "sentence": "The tiny green bug is a widely well-known {{BLANK}} that can unfortunately completely destroy an entire field of healthy wheat in days.",
    "cn": "這種綠色小蟲是一種廣為人知的農業害蟲，不幸地能在幾天內徹底摧毀整片健康的麥田。"
  },
  {
    "word": "benefits",
    "pos": "n.",
    "cn_def": "好處；益處",
    "en_def": "an advantage or profit gained from something.",
    "sentence": "There are undoubtedly many great {{BLANK}} to living in a big, modern city, such as convenient public transportation and excellent international restaurants.",
    "cn": "住在現代化大城市無疑有許多巨大的好處，例如便利的大眾運輸和極佳的國際餐廳。"
  },
  {
    "word": "benefit",
    "pos": "v.",
    "cn_def": "對...有益",
    "en_def": "to receive an advantage; profit.",
    "sentence": "Eating lots of fresh sweet fruits and crisp green vegetables every single day will significantly {{BLANK}} your overall long-term physical health.",
    "cn": "每天吃許多新鮮甜美的水果和清脆的綠色蔬菜，將顯著對你整體的長期身體健康有益。"
  },
  {
    "word": "beneficial",
    "pos": "adj.",
    "cn_def": "有益的",
    "en_def": "favorable or advantageous; resulting in good.",
    "sentence": "Taking essential organic vitamins daily is widely believed by doctors to be highly {{BLANK}} to maintaining a strong and healthy human immune system.",
    "cn": "醫生廣泛認為每天服用必需的有機維生素對維持強壯健康的免疫系統是高度有益的。"
  },
  {
    "word": "profit",
    "pos": "n.",
    "cn_def": "利潤",
    "en_def": "a financial gain, especially the difference between the amount earned and the amount spent.",
    "sentence": "If the struggling local retail store doesn't make a positive {{BLANK}} by the end of the month, we will inevitably go completely out of business.",
    "cn": "如果這家苦苦掙扎的當地零售店在月底前沒有獲得正向的利潤，我們將不可避免地徹底倒閉。"
  },
  {
    "word": "strive",
    "pos": "v.",
    "cn_def": "努力；奮鬥",
    "en_def": "to make great efforts to achieve or obtain something.",
    "sentence": "If you genuinely want to eventually succeed in this highly competitive industry, you must constantly {{BLANK}} to do much better than your rivals.",
    "cn": "如果你真的想在這個競爭激烈的產業中最終取得成功，你必須不斷努力做得比你的競爭對手好很多。"
  },
  {
    "word": "endeavor",
    "pos": "v.",
    "cn_def": "努力；盡力",
    "en_def": "to try hard to do or achieve something.",
    "sentence": "The dedicated project manager will strictly {{BLANK}} to heavily improve the uncomfortable daily working conditions for absolutely all of his tired employees.",
    "cn": "盡責的專案經理將嚴格努力大幅改善他所有疲憊員工不舒服的日常工作環境。"
  },
  {
    "word": "strive for",
    "pos": "phr.",
    "cn_def": "為...奮鬥",
    "en_def": "to make a great effort to achieve something.",
    "sentence": "The passionate Olympic athletes always intensely {{BLANK}} absolute physical perfection during their grueling daily training sessions before the international games.",
    "cn": "熱情的奧運選手在國際比賽前艱苦的日常訓練中，總是強烈地為絕對的身體完美而奮鬥。"
  },
  {
    "word": "endeavor",
    "pos": "n.",
    "cn_def": "努力；嘗試",
    "en_def": "an attempt to achieve a goal.",
    "sentence": "Starting a brand new international technology business entirely from scratch is a highly challenging {{BLANK}} that strongly requires lots of money and extreme patience.",
    "cn": "完全從零開始創立一家全新的國際科技企業是一項極具挑戰性的嘗試，強烈需要大量資金和極度的耐心。"
  },
  {
    "word": "swapped",
    "pos": "v.",
    "cn_def": "交換",
    "en_def": "to take part in an exchange of.",
    "sentence": "Because he really didn't like the dark, boring color, Brad happily {{BLANK}} his brown winter jacket for a brand new one in a much brighter color.",
    "cn": "因為他真的不喜歡那種深沉無聊的顏色，布萊德高興地把他的棕色冬裝外套交換成一件顏色亮得多的全新外套。"
  },
  {
    "word": "swap",
    "pos": "n.",
    "cn_def": "交換",
    "en_def": "an act of exchanging one thing for another.",
    "sentence": "The two close childhood friends warmly agreed to a fair {{BLANK}} of their absolute favorite video games so they could both enthusiastically play something completely new.",
    "cn": "兩個親密的兒時玩伴熱情地同意公平交換他們絕對最喜歡的電玩遊戲，這樣他們就能熱情地玩一些全新的東西。"
  },
  {
    "word": "exchange",
    "pos": "v.",
    "cn_def": "更換；交換",
    "en_def": "to give something and receive something of the same kind in return.",
    "sentence": "The highly dissatisfied customer quickly returned to the busy clothing store to aggressively {{BLANK}} the incredibly small shirt for a much larger size.",
    "cn": "極度不滿的顧客迅速回到繁忙的服飾店，積極地將極其小的襯衫更換成大得多的尺寸。"
  },
  {
    "word": "exchange",
    "pos": "n.",
    "cn_def": "交流；交換",
    "en_def": "an act of giving one thing and receiving another in return.",
    "sentence": "The incredibly exciting international student {{BLANK}} program allows brave teenagers to comfortably live and study in a completely different foreign country for a year.",
    "cn": "極其令人興奮的國際學生交換計畫，允許勇敢的青少年在一個完全不同的外國國家舒適地生活和學習一年。"
  },
  {
    "word": "ethical",
    "pos": "adj.",
    "cn_def": "道德的；倫理的",
    "en_def": "relating to moral principles or the branch of knowledge dealing with these.",
    "sentence": "It would absolutely not be {{BLANK}} for a trusted professional company to secretly share an employee's highly personal information with other greedy corporations.",
    "cn": "讓一家受信任的專業公司秘密地與其他貪婪的企業分享員工高度個人化的資訊，絕對是不道德的。"
  },
  {
    "word": "unethical",
    "pos": "adj.",
    "cn_def": "不道德的",
    "en_def": "not morally correct.",
    "sentence": "The greedy and arrogant businessman was heavily fined by the strict government for his highly {{BLANK}} and completely illegal corporate marketing practices.",
    "cn": "貪婪且傲慢的商人因其高度不道德的且完全非法的企業行銷手法，被嚴格的政府處以重罰。"
  },
  {
    "word": "ethic",
    "pos": "n.",
    "cn_def": "道德規範；職業道德",
    "en_def": "a set of moral principles.",
    "sentence": "Because she naturally has an incredibly strong work {{BLANK}}, Mary consistently stays at the busy office until the difficult job is completely finished.",
    "cn": "因為她天生有著令人難以置信的強烈工作職業道德，瑪麗始終留在繁忙的辦公室直到困難的工作完全結束。"
  },
  {
    "word": "ethically",
    "pos": "adv.",
    "cn_def": "合乎道德地",
    "en_def": "in a way that relates to moral principles.",
    "sentence": "The highly popular modern clothing brand proudly claims that all of its comfortable cotton shirts are completely {{BLANK}} produced without ever using cheap child labor.",
    "cn": "這個極受歡迎的現代服飾品牌自豪地聲稱，其所有舒適的棉質襯衫都是完全合乎道德地生產的，從未使用廉價童工。"
  },
  {
    "word": "alternative",
    "pos": "n.",
    "cn_def": "替代方案；選擇",
    "en_def": "one of two or more available possibilities.",
    "sentence": "Delicious frozen strawberry yogurt is widely considered a highly popular and healthy low-fat {{BLANK}} to eating traditional, heavy chocolate ice cream during the hot summer.",
    "cn": "在炎熱的夏天，美味的冷凍草莓優格被廣泛認為是吃傳統厚重巧克力冰淇淋的一種極受歡迎且健康的低脂替代方案。"
  },
  {
    "word": "alternative",
    "pos": "adj.",
    "cn_def": "替代的",
    "en_def": "available as another possibility.",
    "sentence": "Because Donna strictly doesn't eat any meat whatsoever, she always has to intelligently find {{BLANK}} sources of rich protein to stay physically healthy and strong.",
    "cn": "因為唐娜嚴格不吃任何肉類，她總是必須聰明地尋找富含蛋白質的替代的來源，以保持身體健康強壯。"
  },
  {
    "word": "alternatively",
    "pos": "adv.",
    "cn_def": "或者；要不然",
    "en_def": "as another option or possibility.",
    "sentence": "We could easily take the incredibly fast express train to the busy city, or {{BLANK}}, we could cheaply rent a small car and drive there ourselves.",
    "cn": "我們可以輕鬆地搭乘極快的特快列車前往繁忙的城市，或者，我們可以便宜地租一輛小車自己開車去那裡。"
  },
  {
    "word": "have no alternative but to",
    "pos": "phr.",
    "cn_def": "除了...別無選擇",
    "en_def": "to be forced to do something because there are no other choices.",
    "sentence": "Because it is absolutely terrible and highly dangerous weather outside, we {{BLANK}} completely cancel the exciting championship baseball game today.",
    "cn": "因為外面是絕對可怕且高度危險的天氣，我們今天除了完全取消刺激的棒球冠軍賽別無選擇。"
  },
  {
    "word": "alternative energy",
    "pos": "phr.",
    "cn_def": "替代能源",
    "en_def": "energy generated in ways that do not deplete natural resources or harm the environment.",
    "sentence": "In order to safely protect our beautiful and delicate planet, global governments must heavily invest billions of dollars in clean {{BLANK}} like wind and solar power.",
    "cn": "為了安全保護我們美麗且脆弱的星球，全球政府必須大力投資數十億美元在風能和太陽能等乾淨的替代能源上。"
  },
  {
    "word": "consequently",
    "pos": "adv.",
    "cn_def": "因此；結果",
    "en_def": "as a result.",
    "sentence": "Jack unfortunately broke his right arm during soccer practice; {{BLANK}}, he had to sadly drop out of the highly anticipated regional tennis tournament.",
    "cn": "傑克在足球練習時不幸摔斷了右臂；因此，他不得不悲傷地退出備受期待的區域網球錦標賽。"
  },
  {
    "word": "consequence",
    "pos": "n.",
    "cn_def": "後果",
    "en_def": "a result or effect of an action or condition.",
    "sentence": "You really should deeply think carefully about the serious {{BLANK}} before you bravely do something that might eventually turn out to be incredibly dangerous.",
    "cn": "在你勇敢地做一些最終可能變得極其危險的事情之前，你真的應該深入仔細思考嚴重的後果。"
  },
  {
    "word": "therefore",
    "pos": "adv.",
    "cn_def": "因此",
    "en_def": "for that reason; consequently.",
    "sentence": "The highly nervous student completely forgot to set his loud alarm clock; {{BLANK}}, he was incredibly late for his highly important university final exam.",
    "cn": "極度緊張的學生完全忘記設定他大聲的鬧鐘；因此，他極其重要的大學期末考遲到了非常久。"
  },
  {
    "word": "as a consequence",
    "pos": "phr.",
    "cn_def": "因此；結果",
    "en_def": "as a result of something.",
    "sentence": "The violent and unpredictable summer storm completely destroyed the only old bridge, and {{BLANK}}, the small rural town was totally isolated for several days.",
    "cn": "猛烈且不可預測的夏季風暴徹底摧毀了唯一的老橋，結果（因此），這個鄉村小鎮完全被孤立了好幾天。"
  },
  {
    "word": "trend",
    "pos": "n.",
    "cn_def": "趨勢；潮流",
    "en_def": "a general direction in which something is developing or changing.",
    "sentence": "I really enjoy peacefully reading popular modern fashion magazines to easily find out about the latest exciting clothing {{BLANK}} for the upcoming hot summer season.",
    "cn": "我非常喜歡平靜地閱讀受歡迎的現代時尚雜誌，以輕鬆了解即將到來的炎熱夏季最新令人興奮的服裝趨勢。"
  },
  {
    "word": "trending",
    "pos": "v.",
    "cn_def": "趨向",
    "en_def": "to change or develop in a general direction.",
    "sentence": "Modern American consumers have been steadily {{BLANK}} toward significantly healthier daily eating habits over the past two long and incredibly busy decades.",
    "cn": "在過去漫長且極其忙碌的二十年裡，現代美國消費者一直在穩定地趨向明顯更健康的日常飲食習慣。"
  },
  {
    "word": "trendy",
    "pos": "adj.",
    "cn_def": "時髦的",
    "en_def": "very fashionable or up to date in style or influence.",
    "sentence": "The highly popular new Italian restaurant in the busy downtown area is incredibly {{BLANK}} and consistently attracts lots of young, fashionable college students every single night.",
    "cn": "繁忙市中心極受歡迎的義大利新餐廳極其時髦的，且每晚持續吸引許多年輕、時尚的大學生。"
  },
  {
    "word": "currently trending",
    "pos": "phr.",
    "cn_def": "目前正流行",
    "en_def": "widely discussed or popular on the internet at the present time.",
    "sentence": "That incredibly funny short video of a cleverly dancing cat is {{BLANK}} on YouTube and effortlessly has millions of enthusiastic viewers worldwide.",
    "cn": "那部聰明跳舞的貓的極其搞笑短片目前正在YouTube上流行，且輕鬆地擁有全球數百萬熱情的觀眾。"
  },
  {
    "word": "profitable",
    "pos": "adj.",
    "cn_def": "有利可圖的；賺錢的",
    "en_def": "yielding profit or financial gain.",
    "sentence": "We had a highly {{BLANK}} afternoon happily selling our old, gently used secondhand clothes to interested buyers at the crowded outdoor flea market.",
    "cn": "我們度過了一個高度賺錢的下午，在擁擠的戶外跳蚤市場快樂地將我們舊的、輕度使用的二手衣服賣給有興趣的買家。"
  },
  {
    "word": "profit",
    "pos": "n.",
    "cn_def": "利潤",
    "en_def": "a financial gain.",
    "sentence": "The ambitious global technology company successfully generated a massive financial {{BLANK}} during the exceptionally busy and highly competitive holiday shopping season last year.",
    "cn": "雄心勃勃的全球科技公司在去年異常繁忙且競爭高度激烈的假日購物季期間，成功創造了巨大的財務利潤。"
  },
  {
    "word": "profitably",
    "pos": "adv.",
    "cn_def": "獲利地",
    "en_def": "in a way that yields profit or financial gain.",
    "sentence": "The highly experienced and intelligent business manager knows exactly how to proudly and {{BLANK}} run a large retail store in an incredibly competitive international market.",
    "cn": "經驗非常豐富且聰明的商業經理完全知道如何在極具競爭的國際市場中自豪且獲利地經營一家大型零售店。"
  },
  {
    "word": "lucrative",
    "pos": "adj.",
    "cn_def": "賺錢的；有利可圖的",
    "en_def": "producing a great deal of profit.",
    "sentence": "Writing successful mobile computer software can definitely be an incredibly {{BLANK}} career that effectively allows young programmers to easily earn massive amounts of money quickly.",
    "cn": "編寫成功的行動電腦軟體絕對是一項極其賺錢的職業，能有效地讓年輕程式設計師輕鬆快速地賺取大量金錢。"
  },
  {
    "word": "versatile",
    "pos": "adj.",
    "cn_def": "多用途的；多才多藝的",
    "en_def": "able to adapt or be adapted to many different functions or activities.",
    "sentence": "Strong and incredibly cheap plastic is a highly {{BLANK}} material that is frequently and cleverly used to easily make many different common household products.",
    "cn": "堅固且極其便宜的塑膠是一種高度多用途的材料，經常被巧妙地用來輕鬆製作許多不同的常見家庭用品。"
  },
  {
    "word": "versatility",
    "pos": "n.",
    "cn_def": "多功能性",
    "en_def": "ability to adapt or be adapted to many different functions or activities.",
    "sentence": "The amazing {{BLANK}} of the advanced modern smartphone allows users to take beautiful pictures, browse the internet, and send instant messages.",
    "cn": "先進的現代智慧型手機驚人的多功能性，有效地讓使用者能輕鬆拍出美麗的照片、瀏覽網路並安全地發送即時訊息。"
  },
  {
    "word": "highly versatile",
    "pos": "phr.",
    "cn_def": "非常多才多藝的",
    "en_def": "extremely capable of doing many things well.",
    "sentence": "The incredibly talented young musician is absolutely {{BLANK}}, perfectly and confidently playing the classical piano, the electric guitar, and the loud drums at concerts.",
    "cn": "這位才華洋溢的年輕音樂家絕對是非常多才多藝的，能在演唱會上完美自信地彈奏古典鋼琴、電吉他和響亮的鼓。"
  },
  {
    "word": "roasts",
    "pos": "v.",
    "cn_def": "烘烤",
    "en_def": "to cook (food, especially meat) by prolonged exposure to heat in an oven or over a fire.",
    "sentence": "For our grand and highly anticipated holiday dinner, my wonderful mother traditionally {{BLANK}} some incredibly delicious chicken and fresh green vegetables in the hot oven.",
    "cn": "為了我們盛大且備受期待的節日晚餐，我極好的母親傳統上會在熱烤箱裡烘烤一些極其美味的雞肉和新鮮的綠色蔬菜。"
  },
  {
    "word": "bake",
    "pos": "v.",
    "cn_def": "烘焙",
    "en_def": "to cook (food) by dry heat without direct exposure to a flame, typically in an oven.",
    "sentence": "The highly skilled and incredibly patient pastry chef woke up extremely early to carefully {{BLANK}} several fresh loaves of crusty bread and sweet chocolate cookies.",
    "cn": "技術高超且極具耐心的糕點師傅極早起床，小心翼翼地烘焙了幾條新鮮的脆皮麵包和甜巧克力餅乾。"
  },
  {
    "word": "boil",
    "pos": "v.",
    "cn_def": "煮沸",
    "en_def": "to reach or cause to reach the temperature at which it bubbles and turns to vapor.",
    "sentence": "If you effectively {{BLANK}} the dirty and dangerous water from the remote river for at least ten full minutes, it will be completely safe for you to drink.",
    "cn": "如果你有效地將偏遠河流中骯髒危險的水煮沸至少整整十分鐘，你喝起來就會完全安全。"
  },
  {
    "word": "fry",
    "pos": "v.",
    "cn_def": "油炸；煎",
    "en_def": "to cook (food) in hot fat or oil, typically in a shallow pan.",
    "sentence": "The incredibly busy and exhausted cook decided to quickly {{BLANK}} some eggs and thick bacon in the hot oily pan for a classic, heavy American breakfast.",
    "cn": "極其忙碌且疲憊的廚師決定在熱油鍋裡快速煎一些雞蛋和厚培根，做一頓經典厚重的傳統美式早餐。"
  },
  {
    "word": "grill",
    "pos": "v.",
    "cn_def": "燒烤",
    "en_def": "to cook (something) using a grill.",
    "sentence": "During the long, warm summer months, my outgoing father absolutely loves to confidently {{BLANK}} thick, juicy steaks and large beef burgers in the sunny backyard.",
    "cn": "在漫長溫暖的夏季月份裡，我外向的父親絕對喜歡在陽光明媚的後院自信地燒烤厚實多汁的牛排和大型牛肉漢堡。"
  },
  {
    "word": "steam",
    "pos": "v.",
    "cn_def": "蒸",
    "en_def": "to cook (food) by heating it in steam from boiling water.",
    "sentence": "If you want to efficiently and perfectly retain the healthy vitamins in your fresh green vegetables, you should lightly {{BLANK}} them instead of heavily boiling them.",
    "cn": "如果你想有效完美地保留新鮮綠色蔬菜中健康的維生素，你應該稍微蒸一下它們，而不是重度水煮它們。"
  },
  {
    "word": "horizon",
    "pos": "n.",
    "cn_def": "地平線",
    "en_def": "the line at which the earth's surface and the sky appear to meet.",
    "sentence": "As the deeply romantic and quiet evening approached, we peacefully sat on the soft sandy beach and silently watched the glowing sun set beautifully on the {{BLANK}}.",
    "cn": "隨著深深浪漫且安靜的傍晚來臨，我們平靜地坐在柔軟的沙灘上，默默地看著發光的太陽在地平線上美麗地落下。"
  },
  {
    "word": "on the horizon",
    "pos": "phr.",
    "cn_def": "即將到來；在地平線上",
    "en_def": "imminent or just becoming apparent.",
    "sentence": "With the incredibly difficult and highly important final math test finally {{BLANK}}, nervous Ralph started diligently studying much more every single night.",
    "cn": "隨著極其困難且高度重要的期末數學考試終於即將到來，緊張的拉爾夫開始每天晚上更加勤奮地學習。"
  },
  {
    "word": "around the corner",
    "pos": "phr.",
    "cn_def": "即將到來；在轉角處",
    "en_def": "very near.",
    "sentence": "The incredibly exciting and joyful winter holiday season is right {{BLANK}}, so you should definitely start thoughtfully buying your colorful gifts immediately.",
    "cn": "極其令人興奮和歡樂的冬季假日季節就在轉角處（即將到來），所以你絕對應該立刻開始深思熟慮地購買你色彩繽紛的禮物。"
  },
  {
    "word": "broaden her horizons",
    "pos": "phr.",
    "cn_def": "開闊眼界",
    "en_def": "to expand one's range of interests, activities, and knowledge.",
    "sentence": "Ambitious Michelle desperately wanted to peacefully travel to historical Europe so she could successfully {{BLANK}} and eagerly learn all about completely different foreign cultures.",
    "cn": "雄心勃勃的蜜雪兒極度想平靜地去歷史悠久的歐洲旅行，這樣她就能成功地開闊她的眼界，並熱切地學習所有關於完全不同的外國文化。"
  }
];

const MCQS = [
  {
    "q": "Because his bedroom was completely messed up, it was quite ______ that someone had secretly been sleeping on his bed.",
    "options": [
      "lucrative",
      "apparent",
      "trendy",
      "unsustainable"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The sky is incredibly dark and cloudy today, so ______ it is going to rain very heavily later this afternoon.",
    "options": [
      "therefore",
      "consequently",
      "obviously",
      "apparently"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "After watching him completely fail to hit the baseball, it was painfully ______ that he had never played the game before.",
    "options": [
      "obvious",
      "documented",
      "technical",
      "apparent"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The strict teacher noticed that Evan ______ hadn't studied very hard, since he miserably failed the difficult exam.",
    "options": [
      "consequently",
      "ethically",
      "obviously",
      "therefore"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "In order to properly ______ rapid economic growth, the developing country must heavily invest in its public transportation systems immediately.",
    "options": [
      "sustain",
      "steam",
      "boil",
      "fry"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Dedicated environmental researchers are actively looking for ______ methods of producing clean electricity for the rapidly growing modern city.",
    "options": [
      "technical",
      "sustainable",
      "trendy",
      "unethical"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Relying entirely on expensive and highly polluting fossil fuels is a completely ______ way to generate electricity for future generations.",
    "options": [
      "versatile",
      "profitable",
      "unsustainable",
      "sustainable"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The modern international company places a strong emphasis on environmental ______ by efficiently using recycled materials for all their products.",
    "options": [
      "horizon",
      "documentary",
      "benefits",
      "sustainability"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The ambitious new mayor promised to passionately promote ______ by building several massive solar power plants just outside the city.",
    "options": [
      "sustainable development",
      "highly versatile",
      "technical problem",
      "strive for"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The dense scientific article contained far too many complex ______ terms that the average reader simply could not understand correctly.",
    "options": [
      "sustainable",
      "lucrative",
      "profitable",
      "technical"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Although the red tomato is widely considered a vegetable in cooking, ______ it is actually classified as a sweet fruit by scientists.",
    "options": [
      "alternatively",
      "technically",
      "consequently",
      "apparently"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Because the engineering team experienced an unexpected ______, the highly anticipated educational speech unfortunately started very late.",
    "options": [
      "technical support",
      "have no alternative but to",
      "technical problem",
      "broaden her horizons"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "If you honestly cannot fix the broken software yourself, you should probably contact ______ to get some professional assistance quickly.",
    "options": [
      "pest control",
      "broaden her horizons",
      "have no alternative but to",
      "technical support"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The brilliant professor explained the complex ______ in simple language so that all the beginner students could easily understand it.",
    "options": [
      "on the horizon",
      "technical term",
      "technical problem",
      "highly versatile"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "When dealing with highly complex modern business issues, sometimes ______ solutions are actually the most effective way to solve them.",
    "options": [
      "unconventional",
      "conventional",
      "trendy",
      "beneficial"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Instead of following ______ methods of farming, the young farmer decided to creatively grow his healthy vegetables indoors using advanced technology.",
    "options": [
      "lucrative",
      "profitable",
      "conventional",
      "apparent"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The famous international technology company holds a massive annual ______ to proudly announce its newest electronic products to the eager public.",
    "options": [
      "consequence",
      "pesticide",
      "documents",
      "convention"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The extremely popular new pop artist dresses incredibly ______, which brilliantly helps her strongly stand out from other boring musicians.",
    "options": [
      "technically",
      "unconventionally",
      "consequently",
      "obviously"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Pat had to quickly prepare several highly important legal ______ to give to his expensive lawyer before the difficult trial officially started.",
    "options": [
      "documentary",
      "swap",
      "documents",
      "versatility"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The strict safety inspector officially ______ several dangerous violations at the factory and ordered the angry owners to fix them immediately.",
    "options": [
      "documented",
      "sustain",
      "grill",
      "benefit"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The fascinating television ______ beautifully explored the mysterious deep ocean and the incredibly unique creatures that live completely in the darkness.",
    "options": [
      "versatility",
      "pesticide",
      "documentary",
      "profit"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The ambitious historical researcher carefully studied the well ______ evidence to write a completely accurate book about the powerful ancient empire.",
    "options": [
      "technical",
      "documented",
      "sustainable",
      "obvious"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The aggressive farmer bought a special chemical spray that will effectively keep mice and other destructive ______ from entering your cozy home.",
    "options": [
      "pests",
      "swap",
      "documentary",
      "consequence"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "To successfully protect the valuable summer crops from hungry insects, the workers carefully sprayed a powerful ______ over the entire green field.",
    "options": [
      "pests",
      "documents",
      "alternative",
      "pesticide"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "When we suddenly discovered hundreds of dangerous spiders hiding in the dark basement, we immediately called a professional ______ company.",
    "options": [
      "as a consequence",
      "broaden her horizons",
      "pest control",
      "strive for"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The tiny green bug is a widely well-known ______ that can unfortunately completely destroy an entire field of healthy wheat in days.",
    "options": [
      "currently trending",
      "agricultural pest",
      "technical term",
      "technical problem"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "There are undoubtedly many great ______ to living in a big, modern city, such as convenient public transportation and excellent international restaurants.",
    "options": [
      "benefits",
      "alternative",
      "endeavor",
      "consequence"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Eating lots of fresh sweet fruits and crisp green vegetables every single day will significantly ______ your overall long-term physical health.",
    "options": [
      "trending",
      "roasts",
      "documented",
      "benefit"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Taking essential organic vitamins daily is widely believed by doctors to be highly ______ to maintaining a strong and healthy human immune system.",
    "options": [
      "unsustainable",
      "beneficial",
      "alternative",
      "technical"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "If the struggling local retail store doesn't make a positive ______ by the end of the month, we will inevitably go completely out of business.",
    "options": [
      "convention",
      "documents",
      "profit",
      "documentary"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "If you genuinely want to eventually succeed in this highly competitive industry, you must constantly ______ to do much better than your rivals.",
    "options": [
      "documented",
      "bake",
      "swapped",
      "strive"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The dedicated project manager will strictly ______ to heavily improve the uncomfortable daily working conditions for absolutely all of his tired employees.",
    "options": [
      "endeavor",
      "sustain",
      "strive",
      "benefit"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The passionate Olympic athletes always intensely ______ absolute physical perfection during their grueling daily training sessions before the international games.",
    "options": [
      "agricultural pest",
      "currently trending",
      "technical support",
      "strive for"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "Starting a brand new international technology business entirely from scratch is a highly challenging ______ that strongly requires lots of money and extreme patience.",
    "options": [
      "ethic",
      "horizon",
      "endeavor",
      "pesticide"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "Because he really didn't like the dark, boring color, Brad happily ______ his brown winter jacket for a brand new one in a much brighter color.",
    "options": [
      "swapped",
      "trending",
      "fry",
      "grill"
    ],
    "answer": 0,
    "vocabIndex": 34
  },
  {
    "q": "The two close childhood friends warmly agreed to a fair ______ of their absolute favorite video games so they could both enthusiastically play something completely new.",
    "options": [
      "benefits",
      "swap",
      "consequence",
      "horizon"
    ],
    "answer": 1,
    "vocabIndex": 35
  },
  {
    "q": "The highly dissatisfied customer quickly returned to the busy clothing store to aggressively ______ the incredibly small shirt for a much larger size.",
    "options": [
      "documented",
      "roasts",
      "grill",
      "exchange"
    ],
    "answer": 3,
    "vocabIndex": 36
  },
  {
    "q": "The incredibly exciting international student ______ program allows brave teenagers to comfortably live and study in a completely different foreign country for a year.",
    "options": [
      "exchange",
      "convention",
      "documentary",
      "trend"
    ],
    "answer": 0,
    "vocabIndex": 37
  },
  {
    "q": "It would absolutely not be ______ for a trusted professional company to secretly share an employee's highly personal information with other greedy corporations.",
    "options": [
      "unsustainable",
      "ethical",
      "beneficial",
      "trendy"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "The greedy and arrogant businessman was heavily fined by the strict government for his highly ______ and completely illegal corporate marketing practices.",
    "options": [
      "versatile",
      "lucrative",
      "unethical",
      "unconventional"
    ],
    "answer": 2,
    "vocabIndex": 39
  },
  {
    "q": "Because she naturally has an incredibly strong work ______, Mary consistently stays at the busy office until the difficult job is completely finished.",
    "options": [
      "trend",
      "versatility",
      "benefits",
      "ethic"
    ],
    "answer": 3,
    "vocabIndex": 40
  },
  {
    "q": "The highly popular modern clothing brand proudly claims that all of its comfortable cotton shirts are completely ______ produced without ever using cheap child labor.",
    "options": [
      "technically",
      "unconventionally",
      "ethically",
      "alternatively"
    ],
    "answer": 2,
    "vocabIndex": 41
  },
  {
    "q": "Delicious frozen strawberry yogurt is widely considered a highly popular and healthy low-fat ______ to eating traditional, heavy chocolate ice cream during the hot summer.",
    "options": [
      "profit",
      "alternative",
      "documentary",
      "pesticide"
    ],
    "answer": 1,
    "vocabIndex": 42
  },
  {
    "q": "Because Donna strictly doesn't eat any meat whatsoever, she always has to intelligently find ______ sources of rich protein to stay physically healthy and strong.",
    "options": [
      "alternative",
      "conventional",
      "technical",
      "ethical"
    ],
    "answer": 0,
    "vocabIndex": 43
  },
  {
    "q": "We could easily take the incredibly fast express train to the busy city, or ______, we could cheaply rent a small car and drive there ourselves.",
    "options": [
      "profitably",
      "technically",
      "alternatively",
      "unconventionally"
    ],
    "answer": 2,
    "vocabIndex": 44
  },
  {
    "q": "Because it is absolutely terrible and highly dangerous weather outside, we ______ completely cancel the exciting championship baseball game today.",
    "options": [
      "around the corner",
      "highly versatile",
      "strive for",
      "have no alternative but to"
    ],
    "answer": 3,
    "vocabIndex": 45
  },
  {
    "q": "In order to safely protect our beautiful and delicate planet, global governments must heavily invest billions of dollars in clean ______ like wind and solar power.",
    "options": [
      "alternative energy",
      "agricultural pest",
      "as a consequence",
      "currently trending"
    ],
    "answer": 0,
    "vocabIndex": 46
  },
  {
    "q": "Jack unfortunately broke his right arm during soccer practice; ______, he had to sadly drop out of the highly anticipated regional tennis tournament.",
    "options": [
      "alternatively",
      "consequently",
      "ethically",
      "therefore"
    ],
    "answer": 1,
    "vocabIndex": 47
  },
  {
    "q": "You really should deeply think carefully about the serious ______ before you bravely do something that might eventually turn out to be incredibly dangerous.",
    "options": [
      "endeavor",
      "profit",
      "consequence",
      "convention"
    ],
    "answer": 2,
    "vocabIndex": 48
  },
  {
    "q": "The highly nervous student completely forgot to set his loud alarm clock; ______, he was incredibly late for his highly important university final exam.",
    "options": [
      "therefore",
      "apparently",
      "profitably",
      "alternatively"
    ],
    "answer": 0,
    "vocabIndex": 49
  },
  {
    "q": "The violent and unpredictable summer storm completely destroyed the only old bridge, and ______, the small rural town was totally isolated for several days.",
    "options": [
      "on the horizon",
      "technical support",
      "technical problem",
      "as a consequence"
    ],
    "answer": 3,
    "vocabIndex": 50
  },
  {
    "q": "I really enjoy peacefully reading popular modern fashion magazines to easily find out about the latest exciting clothing ______ for the upcoming hot summer season.",
    "options": [
      "sustainability",
      "trend",
      "profit",
      "ethic"
    ],
    "answer": 1,
    "vocabIndex": 51
  },
  {
    "q": "Modern American consumers have been steadily ______ toward significantly healthier daily eating habits over the past two long and incredibly busy decades.",
    "options": [
      "fry",
      "steam",
      "trending",
      "sustain"
    ],
    "answer": 2,
    "vocabIndex": 52
  },
  {
    "q": "The highly popular new Italian restaurant in the busy downtown area is incredibly ______ and consistently attracts lots of young, fashionable college students every single night.",
    "options": [
      "apparent",
      "beneficial",
      "lucrative",
      "trendy"
    ],
    "answer": 3,
    "vocabIndex": 53
  },
  {
    "q": "That incredibly funny short video of a cleverly dancing cat is ______ on YouTube and effortlessly has millions of enthusiastic viewers worldwide.",
    "options": [
      "technical problem",
      "currently trending",
      "pest control",
      "have no alternative but to"
    ],
    "answer": 1,
    "vocabIndex": 54
  },
  {
    "q": "We had a highly ______ afternoon happily selling our old, gently used secondhand clothes to interested buyers at the crowded outdoor flea market.",
    "options": [
      "profitable",
      "alternative",
      "documented",
      "conventional"
    ],
    "answer": 0,
    "vocabIndex": 55
  },
  {
    "q": "The ambitious global technology company successfully generated a massive financial ______ during the exceptionally busy and highly competitive holiday shopping season last year.",
    "options": [
      "sustainability",
      "swap",
      "benefits",
      "profit"
    ],
    "answer": 3,
    "vocabIndex": 56
  },
  {
    "q": "The highly experienced and intelligent business manager knows exactly how to proudly and ______ run a large retail store in an incredibly competitive international market.",
    "options": [
      "profitably",
      "alternatively",
      "ethically",
      "apparently"
    ],
    "answer": 0,
    "vocabIndex": 57
  },
  {
    "q": "Writing successful mobile computer software can definitely be an incredibly ______ career that effectively allows young programmers to easily earn massive amounts of money quickly.",
    "options": [
      "obvious",
      "lucrative",
      "versatile",
      "alternative"
    ],
    "answer": 1,
    "vocabIndex": 58
  },
  {
    "q": "Strong and incredibly cheap plastic is a highly ______ material that is frequently and cleverly used to easily make many different common household products.",
    "options": [
      "documented",
      "unsustainable",
      "versatile",
      "ethical"
    ],
    "answer": 2,
    "vocabIndex": 59
  },
  {
    "q": "The amazing ______ of the advanced modern smartphone allows users to take beautiful pictures, browse the internet, and send instant messages.",
    "options": [
      "endeavor",
      "alternative",
      "horizon",
      "versatility"
    ],
    "answer": 3,
    "vocabIndex": 60
  },
  {
    "q": "The incredibly talented young musician is absolutely ______, perfectly and confidently playing the classical piano, the electric guitar, and the loud drums at concerts.",
    "options": [
      "as a consequence",
      "highly versatile",
      "agricultural pest",
      "sustainable development"
    ],
    "answer": 1,
    "vocabIndex": 61
  },
  {
    "q": "For our grand and highly anticipated holiday dinner, my wonderful mother traditionally ______ some incredibly delicious chicken and fresh green vegetables in the hot oven.",
    "options": [
      "steam",
      "swapped",
      "roasts",
      "strive"
    ],
    "answer": 2,
    "vocabIndex": 62
  },
  {
    "q": "The highly skilled and incredibly patient pastry chef woke up extremely early to carefully ______ several fresh loaves of crusty bread and sweet chocolate cookies.",
    "options": [
      "bake",
      "sustain",
      "swapped",
      "endeavor"
    ],
    "answer": 0,
    "vocabIndex": 63
  },
  {
    "q": "If you effectively ______ the dirty and dangerous water from the remote river for at least ten full minutes, it will be completely safe for you to drink.",
    "options": [
      "documented",
      "bake",
      "boil",
      "trending"
    ],
    "answer": 2,
    "vocabIndex": 64
  },
  {
    "q": "The incredibly busy and exhausted cook decided to quickly ______ some eggs and thick bacon in the hot oily pan for a classic, heavy American breakfast.",
    "options": [
      "swapped",
      "fry",
      "boil",
      "endeavor"
    ],
    "answer": 1,
    "vocabIndex": 65
  },
  {
    "q": "During the long, warm summer months, my outgoing father absolutely loves to confidently ______ thick, juicy steaks and large beef burgers in the sunny backyard.",
    "options": [
      "grill",
      "bake",
      "boil",
      "benefit"
    ],
    "answer": 0,
    "vocabIndex": 66
  },
  {
    "q": "If you want to efficiently and perfectly retain the healthy vitamins in your fresh green vegetables, you should lightly ______ them instead of heavily boiling them.",
    "options": [
      "strive",
      "benefit",
      "exchange",
      "steam"
    ],
    "answer": 3,
    "vocabIndex": 67
  },
  {
    "q": "As the deeply romantic and quiet evening approached, we peacefully sat on the soft sandy beach and silently watched the glowing sun set beautifully on the ______.",
    "options": [
      "versatility",
      "ethic",
      "horizon",
      "pesticide"
    ],
    "answer": 2,
    "vocabIndex": 68
  },
  {
    "q": "With the incredibly difficult and highly important final math test finally ______, nervous Ralph started diligently studying much more every single night.",
    "options": [
      "agricultural pest",
      "on the horizon",
      "broaden her horizons",
      "sustainable development"
    ],
    "answer": 1,
    "vocabIndex": 69
  },
  {
    "q": "The incredibly exciting and joyful winter holiday season is right ______, so you should definitely start thoughtfully buying your colorful gifts immediately.",
    "options": [
      "around the corner",
      "highly versatile",
      "technical term",
      "agricultural pest"
    ],
    "answer": 0,
    "vocabIndex": 70
  },
  {
    "q": "Ambitious Michelle desperately wanted to peacefully travel to historical Europe so she could successfully ______ and eagerly learn all about completely different foreign cultures.",
    "options": [
      "sustainable development",
      "pest control",
      "strive for",
      "broaden her horizons"
    ],
    "answer": 3,
    "vocabIndex": 71
  }
];

const LOOKUP = {
  "apparent": {
    "pos": "adj.",
    "en_def": "clearly visible or understood; obvious.",
    "cn_def": "明顯的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "clearly visible or understood; obvious.",
        "cn_def": "明顯的"
      }
    ]
  },
  "apparently": {
    "pos": "adv.",
    "en_def": "as far as one knows or can see.",
    "cn_def": "顯然地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "as far as one knows or can see.",
        "cn_def": "顯然地"
      }
    ]
  },
  "obvious": {
    "pos": "adj.",
    "en_def": "easily perceived or understood; clear, self-evident, or apparent.",
    "cn_def": "明顯的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "easily perceived or understood; clear, self-evident, or apparent.",
        "cn_def": "明顯的"
      }
    ]
  },
  "obviously": {
    "pos": "adv.",
    "en_def": "in a way that is easily perceived or understood.",
    "cn_def": "明顯地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that is easily perceived or understood.",
        "cn_def": "明顯地"
      }
    ]
  },
  "sustain": {
    "pos": "v.",
    "en_def": "to strengthen or support physically or mentally.",
    "cn_def": "維持",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to strengthen or support physically or mentally.",
        "cn_def": "維持"
      }
    ]
  },
  "sustainable": {
    "pos": "adj.",
    "en_def": "able to be maintained at a certain rate or level.",
    "cn_def": "永續的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to be maintained at a certain rate or level.",
        "cn_def": "永續的"
      }
    ]
  },
  "unsustainable": {
    "pos": "adj.",
    "en_def": "not able to be maintained at the current rate or level.",
    "cn_def": "無法永續的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not able to be maintained at the current rate or level.",
        "cn_def": "無法永續的"
      }
    ]
  },
  "sustainability": {
    "pos": "n.",
    "en_def": "the ability to be maintained at a certain rate or level.",
    "cn_def": "永續性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability to be maintained at a certain rate or level.",
        "cn_def": "永續性"
      }
    ]
  },
  "sustainable development": {
    "pos": "phr.",
    "en_def": "economic development that is conducted without depletion of natural resources.",
    "cn_def": "永續發展",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "economic development that is conducted without depletion of natural resources.",
        "cn_def": "永續發展"
      }
    ]
  },
  "technical": {
    "pos": "adj.",
    "en_def": "relating to a particular subject, art, or craft, or its techniques.",
    "cn_def": "技術的；專業的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to a particular subject, art, or craft, or its techniques.",
        "cn_def": "技術的；專業的"
      }
    ]
  },
  "technically": {
    "pos": "adv.",
    "en_def": "according to the facts or exact meaning of something; strictly.",
    "cn_def": "嚴格來說；技術上",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "according to the facts or exact meaning of something; strictly.",
        "cn_def": "嚴格來說；技術上"
      }
    ]
  },
  "technical problem": {
    "pos": "phr.",
    "en_def": "an issue arising from the mechanical or electronic operation of a system.",
    "cn_def": "技術問題",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an issue arising from the mechanical or electronic operation of a system.",
        "cn_def": "技術問題"
      }
    ]
  },
  "technical support": {
    "pos": "phr.",
    "en_def": "a service provided to users of technology products or services.",
    "cn_def": "技術支援",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a service provided to users of technology products or services.",
        "cn_def": "技術支援"
      }
    ]
  },
  "technical term": {
    "pos": "phr.",
    "en_def": "a word that has a specific meaning within a specific field of expertise.",
    "cn_def": "專業術語",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a word that has a specific meaning within a specific field of expertise.",
        "cn_def": "專業術語"
      }
    ]
  },
  "unconventional": {
    "pos": "adj.",
    "en_def": "not based on or conforming to what is generally done or believed.",
    "cn_def": "非傳統的；非常規的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not based on or conforming to what is generally done or believed.",
        "cn_def": "非傳統的；非常規的"
      }
    ]
  },
  "conventional": {
    "pos": "adj.",
    "en_def": "based on or in accordance with what is generally done or believed.",
    "cn_def": "傳統的；常規的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "based on or in accordance with what is generally done or believed.",
        "cn_def": "傳統的；常規的"
      }
    ]
  },
  "convention": {
    "pos": "n.",
    "en_def": "a large meeting of people with a shared interest.",
    "cn_def": "大會；慣例",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large meeting of people with a shared interest.",
        "cn_def": "大會；慣例"
      }
    ]
  },
  "unconventionally": {
    "pos": "adv.",
    "en_def": "in a way that is not based on what is generally done or believed.",
    "cn_def": "非傳統地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that is not based on what is generally done or believed.",
        "cn_def": "非傳統地"
      }
    ]
  },
  "documents": {
    "pos": "n.",
    "en_def": "a piece of written, printed, or electronic matter that provides information or evidence.",
    "cn_def": "文件",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of written, printed, or electronic matter that provides information or evidence.",
        "cn_def": "文件"
      }
    ]
  },
  "document": {
    "pos": "n.",
    "en_def": "a piece of written, printed, or electronic matter that provides information or evidence.",
    "cn_def": "文件",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of written, printed, or electronic matter that provides information or evidence.",
        "cn_def": "文件"
      },
      {
        "pos": "v.",
        "en_def": "to record (something) in written, photographic, or other form.",
        "cn_def": "記錄"
      }
    ]
  },
  "documented": {
    "pos": "v.",
    "en_def": "to record (something) in written, photographic, or other form.",
    "cn_def": "記錄",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to record (something) in written, photographic, or other form.",
        "cn_def": "記錄"
      },
      {
        "pos": "adj.",
        "en_def": "recorded in written, photographic, or other form.",
        "cn_def": "有記錄的"
      }
    ]
  },
  "documentary": {
    "pos": "n.",
    "en_def": "a movie or a television or radio program that provides a factual record or report.",
    "cn_def": "紀錄片",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a movie or a television or radio program that provides a factual record or report.",
        "cn_def": "紀錄片"
      }
    ]
  },
  "pests": {
    "pos": "n.",
    "en_def": "a destructive insect or other animal that attacks crops, food, livestock, etc.",
    "cn_def": "害蟲；有害動物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a destructive insect or other animal that attacks crops, food, livestock, etc.",
        "cn_def": "害蟲；有害動物"
      }
    ]
  },
  "pest": {
    "pos": "n.",
    "en_def": "a destructive insect or other animal that attacks crops, food, livestock, etc.",
    "cn_def": "害蟲；有害動物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a destructive insect or other animal that attacks crops, food, livestock, etc.",
        "cn_def": "害蟲；有害動物"
      }
    ]
  },
  "pesticide": {
    "pos": "n.",
    "en_def": "a substance used for destroying insects or other organisms harmful to cultivated plants or to animals.",
    "cn_def": "殺蟲劑",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a substance used for destroying insects or other organisms harmful to cultivated plants or to animals.",
        "cn_def": "殺蟲劑"
      }
    ]
  },
  "pest control": {
    "pos": "phr.",
    "en_def": "the regulation or management of a species defined as a pest.",
    "cn_def": "害蟲防治",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the regulation or management of a species defined as a pest.",
        "cn_def": "害蟲防治"
      }
    ]
  },
  "agricultural pest": {
    "pos": "phr.",
    "en_def": "an insect or animal that is detrimental to farming.",
    "cn_def": "農業害蟲",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an insect or animal that is detrimental to farming.",
        "cn_def": "農業害蟲"
      }
    ]
  },
  "benefit": {
    "pos": "n.",
    "en_def": "an advantage or profit gained from something.",
    "cn_def": "好處；益處",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an advantage or profit gained from something.",
        "cn_def": "好處；益處"
      },
      {
        "pos": "v.",
        "en_def": "to receive an advantage; profit.",
        "cn_def": "對...有益"
      }
    ]
  },
  "benefits": {
    "pos": "n.",
    "en_def": "an advantage or profit gained from something.",
    "cn_def": "好處；益處",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an advantage or profit gained from something.",
        "cn_def": "好處；益處"
      }
    ]
  },
  "beneficial": {
    "pos": "adj.",
    "en_def": "favorable or advantageous; resulting in good.",
    "cn_def": "有益的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "favorable or advantageous; resulting in good.",
        "cn_def": "有益的"
      }
    ]
  },
  "profit": {
    "pos": "n.",
    "en_def": "a financial gain, especially the difference between the amount earned and the amount spent.",
    "cn_def": "利潤",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a financial gain, especially the difference between the amount earned and the amount spent.",
        "cn_def": "利潤"
      },
      {
        "pos": "n.",
        "en_def": "a financial gain.",
        "cn_def": "利潤"
      }
    ]
  },
  "strive": {
    "pos": "v.",
    "en_def": "to make great efforts to achieve or obtain something.",
    "cn_def": "努力；奮鬥",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make great efforts to achieve or obtain something.",
        "cn_def": "努力；奮鬥"
      }
    ]
  },
  "endeavor": {
    "pos": "v.",
    "en_def": "to try hard to do or achieve something.",
    "cn_def": "努力；盡力",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to try hard to do or achieve something.",
        "cn_def": "努力；盡力"
      },
      {
        "pos": "n.",
        "en_def": "an attempt to achieve a goal.",
        "cn_def": "努力；嘗試"
      }
    ]
  },
  "strive for": {
    "pos": "phr.",
    "en_def": "to make a great effort to achieve something.",
    "cn_def": "為...奮鬥",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make a great effort to achieve something.",
        "cn_def": "為...奮鬥"
      }
    ]
  },
  "swap": {
    "pos": "v.",
    "en_def": "to take part in an exchange of.",
    "cn_def": "交換",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take part in an exchange of.",
        "cn_def": "交換"
      },
      {
        "pos": "n.",
        "en_def": "an act of exchanging one thing for another.",
        "cn_def": "交換"
      }
    ]
  },
  "swapped": {
    "pos": "v.",
    "en_def": "to take part in an exchange of.",
    "cn_def": "交換",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take part in an exchange of.",
        "cn_def": "交換"
      }
    ]
  },
  "exchange": {
    "pos": "v.",
    "en_def": "to give something and receive something of the same kind in return.",
    "cn_def": "更換；交換",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give something and receive something of the same kind in return.",
        "cn_def": "更換；交換"
      },
      {
        "pos": "n.",
        "en_def": "an act of giving one thing and receiving another in return.",
        "cn_def": "交流；交換"
      }
    ]
  },
  "ethical": {
    "pos": "adj.",
    "en_def": "relating to moral principles or the branch of knowledge dealing with these.",
    "cn_def": "道德的；倫理的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to moral principles or the branch of knowledge dealing with these.",
        "cn_def": "道德的；倫理的"
      }
    ]
  },
  "unethical": {
    "pos": "adj.",
    "en_def": "not morally correct.",
    "cn_def": "不道德的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not morally correct.",
        "cn_def": "不道德的"
      }
    ]
  },
  "ethic": {
    "pos": "n.",
    "en_def": "a set of moral principles.",
    "cn_def": "道德規範；職業道德",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a set of moral principles.",
        "cn_def": "道德規範；職業道德"
      }
    ]
  },
  "ethically": {
    "pos": "adv.",
    "en_def": "in a way that relates to moral principles.",
    "cn_def": "合乎道德地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that relates to moral principles.",
        "cn_def": "合乎道德地"
      }
    ]
  },
  "alternative": {
    "pos": "n.",
    "en_def": "one of two or more available possibilities.",
    "cn_def": "替代方案；選擇",
    "combined": [
      {
        "pos": "n.",
        "en_def": "one of two or more available possibilities.",
        "cn_def": "替代方案；選擇"
      },
      {
        "pos": "adj.",
        "en_def": "available as another possibility.",
        "cn_def": "替代的"
      }
    ]
  },
  "alternatively": {
    "pos": "adv.",
    "en_def": "as another option or possibility.",
    "cn_def": "或者；要不然",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "as another option or possibility.",
        "cn_def": "或者；要不然"
      }
    ]
  },
  "have no alternative but to": {
    "pos": "phr.",
    "en_def": "to be forced to do something because there are no other choices.",
    "cn_def": "除了...別無選擇",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be forced to do something because there are no other choices.",
        "cn_def": "除了...別無選擇"
      }
    ]
  },
  "alternative energy": {
    "pos": "phr.",
    "en_def": "energy generated in ways that do not deplete natural resources or harm the environment.",
    "cn_def": "替代能源",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "energy generated in ways that do not deplete natural resources or harm the environment.",
        "cn_def": "替代能源"
      }
    ]
  },
  "consequently": {
    "pos": "adv.",
    "en_def": "as a result.",
    "cn_def": "因此；結果",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "as a result.",
        "cn_def": "因此；結果"
      }
    ]
  },
  "consequence": {
    "pos": "n.",
    "en_def": "a result or effect of an action or condition.",
    "cn_def": "後果",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a result or effect of an action or condition.",
        "cn_def": "後果"
      }
    ]
  },
  "therefore": {
    "pos": "adv.",
    "en_def": "for that reason; consequently.",
    "cn_def": "因此",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "for that reason; consequently.",
        "cn_def": "因此"
      }
    ]
  },
  "as a consequence": {
    "pos": "phr.",
    "en_def": "as a result of something.",
    "cn_def": "因此；結果",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "as a result of something.",
        "cn_def": "因此；結果"
      }
    ]
  },
  "trend": {
    "pos": "n.",
    "en_def": "a general direction in which something is developing or changing.",
    "cn_def": "趨勢；潮流",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a general direction in which something is developing or changing.",
        "cn_def": "趨勢；潮流"
      },
      {
        "pos": "v.",
        "en_def": "to change or develop in a general direction.",
        "cn_def": "趨向"
      }
    ]
  },
  "trending": {
    "pos": "v.",
    "en_def": "to change or develop in a general direction.",
    "cn_def": "趨向",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to change or develop in a general direction.",
        "cn_def": "趨向"
      }
    ]
  },
  "trendy": {
    "pos": "adj.",
    "en_def": "very fashionable or up to date in style or influence.",
    "cn_def": "時髦的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very fashionable or up to date in style or influence.",
        "cn_def": "時髦的"
      }
    ]
  },
  "currently trending": {
    "pos": "phr.",
    "en_def": "widely discussed or popular on the internet at the present time.",
    "cn_def": "目前正流行",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "widely discussed or popular on the internet at the present time.",
        "cn_def": "目前正流行"
      }
    ]
  },
  "profitable": {
    "pos": "adj.",
    "en_def": "yielding profit or financial gain.",
    "cn_def": "有利可圖的；賺錢的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "yielding profit or financial gain.",
        "cn_def": "有利可圖的；賺錢的"
      }
    ]
  },
  "profitably": {
    "pos": "adv.",
    "en_def": "in a way that yields profit or financial gain.",
    "cn_def": "獲利地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that yields profit or financial gain.",
        "cn_def": "獲利地"
      }
    ]
  },
  "lucrative": {
    "pos": "adj.",
    "en_def": "producing a great deal of profit.",
    "cn_def": "賺錢的；有利可圖的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "producing a great deal of profit.",
        "cn_def": "賺錢的；有利可圖的"
      }
    ]
  },
  "versatile": {
    "pos": "adj.",
    "en_def": "able to adapt or be adapted to many different functions or activities.",
    "cn_def": "多用途的；多才多藝的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to adapt or be adapted to many different functions or activities.",
        "cn_def": "多用途的；多才多藝的"
      }
    ]
  },
  "versatility": {
    "pos": "n.",
    "en_def": "ability to adapt or be adapted to many different functions or activities.",
    "cn_def": "多功能性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "ability to adapt or be adapted to many different functions or activities.",
        "cn_def": "多功能性"
      }
    ]
  },
  "highly versatile": {
    "pos": "phr.",
    "en_def": "extremely capable of doing many things well.",
    "cn_def": "非常多才多藝的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "extremely capable of doing many things well.",
        "cn_def": "非常多才多藝的"
      }
    ]
  },
  "roasts": {
    "pos": "v.",
    "en_def": "to cook (food, especially meat) by prolonged exposure to heat in an oven or over a fire.",
    "cn_def": "烘烤",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cook (food, especially meat) by prolonged exposure to heat in an oven or over a fire.",
        "cn_def": "烘烤"
      }
    ]
  },
  "roast": {
    "pos": "v.",
    "en_def": "to cook (food, especially meat) by prolonged exposure to heat in an oven or over a fire.",
    "cn_def": "烘烤",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cook (food, especially meat) by prolonged exposure to heat in an oven or over a fire.",
        "cn_def": "烘烤"
      }
    ]
  },
  "bake": {
    "pos": "v.",
    "en_def": "to cook (food) by dry heat without direct exposure to a flame, typically in an oven.",
    "cn_def": "烘焙",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cook (food) by dry heat without direct exposure to a flame, typically in an oven.",
        "cn_def": "烘焙"
      }
    ]
  },
  "boil": {
    "pos": "v.",
    "en_def": "to reach or cause to reach the temperature at which it bubbles and turns to vapor.",
    "cn_def": "煮沸",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to reach or cause to reach the temperature at which it bubbles and turns to vapor.",
        "cn_def": "煮沸"
      }
    ]
  },
  "fry": {
    "pos": "v.",
    "en_def": "to cook (food) in hot fat or oil, typically in a shallow pan.",
    "cn_def": "油炸；煎",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cook (food) in hot fat or oil, typically in a shallow pan.",
        "cn_def": "油炸；煎"
      }
    ]
  },
  "grill": {
    "pos": "v.",
    "en_def": "to cook (something) using a grill.",
    "cn_def": "燒烤",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cook (something) using a grill.",
        "cn_def": "燒烤"
      }
    ]
  },
  "steam": {
    "pos": "v.",
    "en_def": "to cook (food) by heating it in steam from boiling water.",
    "cn_def": "蒸",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cook (food) by heating it in steam from boiling water.",
        "cn_def": "蒸"
      }
    ]
  },
  "horizon": {
    "pos": "n.",
    "en_def": "the line at which the earth's surface and the sky appear to meet.",
    "cn_def": "地平線",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the line at which the earth's surface and the sky appear to meet.",
        "cn_def": "地平線"
      }
    ]
  },
  "on the horizon": {
    "pos": "phr.",
    "en_def": "imminent or just becoming apparent.",
    "cn_def": "即將到來；在地平線上",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "imminent or just becoming apparent.",
        "cn_def": "即將到來；在地平線上"
      }
    ]
  },
  "around the corner": {
    "pos": "phr.",
    "en_def": "very near.",
    "cn_def": "即將到來；在轉角處",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "very near.",
        "cn_def": "即將到來；在轉角處"
      }
    ]
  },
  "broaden her horizons": {
    "pos": "phr.",
    "en_def": "to expand one's range of interests, activities, and knowledge.",
    "cn_def": "開闊眼界",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to expand one's range of interests, activities, and knowledge.",
        "cn_def": "開闊眼界"
      }
    ]
  },
  "broaden one's horizons": {
    "pos": "phr.",
    "en_def": "to expand one's range of interests, activities, and knowledge.",
    "cn_def": "開闊眼界",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to expand one's range of interests, activities, and knowledge.",
        "cn_def": "開闊眼界"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
