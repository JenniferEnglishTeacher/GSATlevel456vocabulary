// Unit 11 Quiz Data: sensation – exposition
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Basic U11 - sensation – exposition",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "sensation",
    "pos": "n.",
    "cn_def": "感覺；轟動",
    "en_def": "a physical feeling or perception resulting from something that happens to or comes into contact with the body.",
    "sentence": "The young girl felt a strange and uncomfortable {{BLANK}} when the freezing cold wind unexpectedly blew past her.",
    "cn": "當冰冷的寒風出乎意料地吹過她身旁時，這個年輕女孩感到一種奇怪且不舒服的感覺。"
  },
  {
    "word": "strange sensation",
    "pos": "phr.",
    "cn_def": "奇怪的感覺",
    "en_def": "an unusual physical or mental feeling.",
    "sentence": "Being out on a large boat for the very first time is a {{BLANK}} that certainly takes some getting used to.",
    "cn": "第一次乘坐大船出海是一種肯定需要一些時間來適應的奇怪的感覺。"
  },
  {
    "word": "sensational",
    "pos": "adj.",
    "cn_def": "轟動的；極好的",
    "en_def": "causing great public interest and excitement.",
    "sentence": "The new science fiction movie is truly {{BLANK}} and has quickly received thousands of highly positive reviews online.",
    "cn": "這部新的科幻電影真的是極好的（轟動的），並已迅速在網路上獲得了數千條高度正面的評論。"
  },
  {
    "word": "create a sensation",
    "pos": "phr.",
    "cn_def": "引起轟動",
    "en_def": "to cause a lot of excitement or interest.",
    "sentence": "The incredibly talented young singer managed to {{BLANK}} with her absolutely breathtaking performance at the summer music festival.",
    "cn": "這位才華洋溢的年輕歌手憑藉她在夏季音樂節上絕對令人驚嘆的表演，成功地引起了轟動。"
  },
  {
    "word": "drifted",
    "pos": "v. / n.",
    "cn_def": "漂流；大意",
    "en_def": "to be carried slowly by a current of air or water.",
    "sentence": "The broken wooden raft {{BLANK}} continuously for several days before it was finally spotted by a large passing cargo ship.",
    "cn": "破碎的木筏連續漂流了好幾天，才終於被一艘路過的大型貨輪發現。"
  },
  {
    "word": "drifted off to sleep",
    "pos": "phr.",
    "cn_def": "漸漸入睡",
    "en_def": "to gradually fall asleep.",
    "sentence": "Because she was incredibly tired from working all day, Nancy quickly {{BLANK}} during the boring history movie.",
    "cn": "因為她工作了一整天極度疲倦，南西在無聊的歷史電影中很快就漸漸入睡了。"
  },
  {
    "word": "faded",
    "pos": "v.",
    "cn_def": "褪色；消退",
    "en_def": "to gradually grow faint and disappear.",
    "sentence": "The bright red paint on my father's old car has completely {{BLANK}} after being left out in the hot sun for years.",
    "cn": "我父親舊車上鮮豔的紅漆，在烈日下曝曬多年後已經完全褪色了。"
  },
  {
    "word": "faded away",
    "pos": "phr.",
    "cn_def": "逐漸消失",
    "en_def": "to gradually disappear completely.",
    "sentence": "As the warm morning sun slowly rose over the mountains, the thick white fog on the peaceful lake eventually {{BLANK}}.",
    "cn": "隨著溫暖的晨光慢慢從群山升起，平靜湖面上濃濃的白霧最終逐漸消失了。"
  },
  {
    "word": "vanish",
    "pos": "v.",
    "cn_def": "消失",
    "en_def": "to disappear suddenly and completely.",
    "sentence": "Many beautiful and endangered animals could unfortunately {{BLANK}} forever as a direct and tragic result of ongoing global climate change.",
    "cn": "作為持續的全球氣候變遷直接且悲慘的結果，許多美麗且瀕臨絕種的動物可能不幸地永遠消失。"
  },
  {
    "word": "disappear",
    "pos": "v.",
    "cn_def": "消失",
    "en_def": "to cease to be visible.",
    "sentence": "The frightened wild rabbit managed to quickly {{BLANK}} into the dark and dense forest before the careful hunter could even catch it.",
    "cn": "那隻受驚的野兔設法迅速消失在黑暗茂密的森林裡，讓小心翼翼的獵人甚至來不及抓住牠。"
  },
  {
    "word": "murmur",
    "pos": "n. / v.",
    "cn_def": "低語聲；喃喃自語",
    "en_def": "a soft, indistinct sound made by a person or group of people speaking quietly or at a distance.",
    "sentence": "Before the highly anticipated movie officially started, the large theater was completely filled with a low {{BLANK}} from the excited audience.",
    "cn": "在這部備受期待的電影正式開始前，大型影廳裡完全充滿了興奮觀眾的低沉低語聲。"
  },
  {
    "word": "whisper",
    "pos": "v. / n.",
    "cn_def": "耳語；小聲說話",
    "en_def": "to speak very softly using one's breath without one's vocal cords.",
    "sentence": "The two naughty students had to cautiously {{BLANK}} to each other in the silent library so they wouldn't disturb anyone studying.",
    "cn": "兩個頑皮的學生必須在安靜的圖書館裡小心翼翼地對彼此耳語，這樣他們才不會打擾到任何正在學習的人。"
  },
  {
    "word": "drone",
    "pos": "v. / n.",
    "cn_def": "嗡嗡聲；單調地說",
    "en_def": "to make a continuous low humming sound; to speak tediously.",
    "sentence": "The incredibly boring professor continued to {{BLANK}} on for two long hours about an outdated topic that absolutely no one was interested in.",
    "cn": "這位極度無聊的教授繼續用單調的聲音講了兩個漫長的小時，談論一個絕對沒有人感興趣的過時話題。"
  },
  {
    "word": "drones",
    "pos": "n",
    "cn_def": "無人機",
    "en_def": "manless flying gadget",
    "sentence": "The invading nation lauched thousands of {{BLANK}} to attack the military bases of the neighboring country.",
    "cn": "入侵的國家發射很多無人機去攻擊鄰近國家的軍事基地"
  },
  {
    "word": "enclose",
    "pos": "v.",
    "cn_def": "圍住；附上",
    "en_def": "to surround or close off on all sides.",
    "sentence": "The rich and famous businessman decided to completely {{BLANK}} his large private property with a tall and highly secure metal fence.",
    "cn": "這位富有且著名的商人決定用一道高大且高度安全的金屬圍欄將他的大型私人財產完全圍住。"
  },
  {
    "word": "disclose",
    "pos": "v.",
    "cn_def": "揭露；公開",
    "en_def": "to make secret or new information known.",
    "sentence": "The reputable bank strictly refuses to secretly {{BLANK}} any sensitive private information about its loyal customers to the general public.",
    "cn": "這家聲譽卓著的銀行嚴格拒絕向大眾秘密揭露任何關於其忠誠顧客的敏感私人資訊。"
  },
  {
    "word": "enclosure",
    "pos": "n.",
    "cn_def": "圍欄；圈地",
    "en_def": "an area that is sealed off with an artificial or natural barrier.",
    "sentence": "The dangerous and powerful lions at the city zoo are kept safely inside a massive glass and steel {{BLANK}} for everyone's protection.",
    "cn": "為了每個人的安全，市立動物園裡危險且強大的獅子被安全地飼養在一個巨大的玻璃和鋼製圍欄內。"
  },
  {
    "word": "enclosed",
    "pos": "adj.",
    "cn_def": "隨函附上的；封閉的",
    "en_def": "surrounded or closed off on all sides; included with a letter or package.",
    "sentence": "Please carefully and thoroughly review the highly important {{BLANK}} documents before you sign the legal contract and mail it back.",
    "cn": "在您簽署法律合約並將其寄回之前，請仔細且徹底地審查極其重要的隨函附上的文件。"
  },
  {
    "word": "precious",
    "pos": "adj.",
    "cn_def": "珍貴的",
    "en_def": "of great value; not to be wasted or treated carelessly.",
    "sentence": "These old black-and-white photos of your beloved grandparents are incredibly {{BLANK}}, so you really must take excellent care of them.",
    "cn": "這些你深愛祖父母的舊黑白照片是極其珍貴的，所以你真的必須好好照顧它們。"
  },
  {
    "word": "priceless",
    "pos": "adj.",
    "cn_def": "無價的",
    "en_def": "so precious that its value cannot be determined.",
    "sentence": "The ancient golden artifact found deep inside the hidden tomb is totally {{BLANK}} and undoubtedly belongs in a secure national museum.",
    "cn": "在隱藏陵墓深處發現的古代黃金工藝品是完全無價的，且無疑屬於安全的國家博物館。"
  },
  {
    "word": "worthless",
    "pos": "adj.",
    "cn_def": "毫無價值的",
    "en_def": "having no real value or use.",
    "sentence": "Because the complex machine is completely broken and utterly unrepairable, it is now entirely {{BLANK}} to the frustrated factory owners.",
    "cn": "因為這台複雜的機器完全壞了且完全無法修理，它現在對沮喪的工廠老闆來說完全是毫無價值的。"
  },
  {
    "word": "precious metal",
    "pos": "phr.",
    "cn_def": "貴金屬",
    "en_def": "a rare, naturally occurring metallic chemical element of high economic value.",
    "sentence": "Gold and silver are highly valued {{BLANK}} that have successfully been used as standard currency for thousands of human generations.",
    "cn": "黃金和白銀是高度珍貴的貴金屬，已經成功地被數千代人類用作標準貨幣。"
  },
  {
    "word": "extraordinary",
    "pos": "adj.",
    "cn_def": "非凡的；出色的",
    "en_def": "very unusual or remarkable.",
    "sentence": "It took an absolutely {{BLANK}} effort for the highly dedicated salesperson to finally reach her incredibly ambitious annual sales goal.",
    "cn": "這位非常敬業的銷售員花了絕對非凡的努力，才終於達成她極具野心的年度銷售目標。"
  },
  {
    "word": "exceptional",
    "pos": "adj.",
    "cn_def": "卓越的；例外的",
    "en_def": "unusually good; outstanding.",
    "sentence": "The young girl consistently showed an {{BLANK}} talent for playing the classical piano, deeply impressing all of her experienced music teachers.",
    "cn": "這個年輕女孩不斷展現出彈奏古典鋼琴的卓越的天賦，深深打動了她所有經驗豐富的音樂老師。"
  },
  {
    "word": "phenomenon",
    "pos": "n. [C]",
    "cn_def": "現象",
    "en_def": "Something that exists or happens, especially something that is studied because it is unusual or interesting.",
    "sentence": "The rapid growth of social media shopping is a recent economic {{BLANK}} that has completely changed how brands sell products to young consumers.",
    "cn": "社群媒體購物的快速增長是近期的一種經濟現象，它完全改變了品牌向年輕消費者銷售產品的方式。"
  },
  {
    "word": "natural phenomenon",
    "pos": "phr.",
    "cn_def": "自然現象",
    "en_def": "An event or occurrence in the physical world that is not created by humans, such as a rainbow or volcanic eruption.",
    "sentence": "A solar eclipse is a fascinating {{BLANK}} where the moon passes between the sun and Earth, temporarily blocking the sunlight.",
    "cn": "日食是一種迷人的自然現象，此時月球穿過太陽和地球之間，暫時阻擋了陽光。"
  },
  {
    "word": "phenomenal",
    "pos": "adj.",
    "cn_def": "驚人的；非凡的",
    "en_def": "very remarkable; extraordinary.",
    "sentence": "The new internet software startup experienced {{BLANK}} growth during its very first year, making the young founders incredibly wealthy overnight.",
    "cn": "這家新的網路軟體新創公司在其第一年就經歷了驚人的成長，讓年輕的創辦人們一夜暴富。"
  },
  {
    "word": "ordinary",
    "pos": "adj.",
    "cn_def": "普通的",
    "en_def": "with no special or distinctive features; normal.",
    "sentence": "Despite his immense worldwide wealth and incredible fame, the highly successful actor actually prefers to live a surprisingly {{BLANK}} and quiet life.",
    "cn": "儘管擁有巨大的全球財富和令人難以置信的名氣，這位非常成功的演員實際上更喜歡過著令人驚訝的普通的和平靜生活。"
  },
  {
    "word": "structure",
    "pos": "n.",
    "cn_def": "結構；建築物",
    "en_def": "the arrangement of and relations between the parts or elements of something complex.",
    "sentence": "The highly complex {{BLANK}} of the human brain actively allows us to process detailed information in incredibly fast and fascinating ways.",
    "cn": "人類大腦高度複雜的結構，主動讓我們能以極其快速且迷人的方式處理詳細資訊。"
  },
  {
    "word": "infrastructure",
    "pos": "n.",
    "cn_def": "基礎建設",
    "en_def": "the basic physical and organizational structures and facilities needed for the operation of a society.",
    "sentence": "The ambitious city mayor heavily invested billions of dollars in upgrading the aging {{BLANK}} to better support the rapidly growing local population.",
    "cn": "雄心勃勃的市長投入了數十億美元來升級老舊的基礎建設，以更好地支持快速增長的當地人口。"
  },
  {
    "word": "structural damage",
    "pos": "phr.",
    "cn_def": "結構性損壞",
    "en_def": "physical harm that impairs the function or integrity of a structure.",
    "sentence": "The terrifying winter storm caused significant {{BLANK}} to several vulnerable houses located directly along the highly exposed coastline.",
    "cn": "可怕的冬季風暴對直接位於高度暴露海岸線上的幾棟脆弱房屋造成了重大的結構性損壞。"
  },
  {
    "word": "endeavor",
    "pos": "n. / v.",
    "cn_def": "努力；嘗試",
    "en_def": "an attempt to achieve a goal; to try hard to do or achieve something.",
    "sentence": "Climbing that highly dangerous, snow-covered mountain completely without an experienced guide will undoubtedly be a very difficult and risky {{BLANK}}.",
    "cn": "在完全沒有經驗豐富嚮導的情況下攀登那座極其危險、被雪覆蓋的山，無疑將是一次非常困難且冒險的嘗試。"
  },
  {
    "word": "endeavor",
    "pos": "v.",
    "cn_def": "努力；盡力",
    "en_def": "to try hard to do or achieve something.",
    "sentence": "You should always strictly {{BLANK}} to avoid making common grammar and spelling mistakes when carefully writing a professional business report.",
    "cn": "在仔細撰寫專業商業報告時，你應該總是嚴格地努力避免犯下常見的文法和拼字錯誤。"
  },
  {
    "word": "successful endeavor",
    "pos": "phr.",
    "cn_def": "成功的嘗試",
    "en_def": "an attempt or project that achieves its goals.",
    "sentence": "Launching the brand new smartphone application proved to be a highly {{BLANK}} that quickly generated millions of dollars in total profit.",
    "cn": "推出這款全新的智慧型手機應用程式被證明是一次高度成功的嘗試，迅速創造了數百萬美元的總利潤。"
  },
  {
    "word": "erect",
    "pos": "v.",
    "cn_def": "建立；豎立",
    "en_def": "to construct a building, wall, or other structure.",
    "sentence": "The proud city council officially decided to gracefully {{BLANK}} a large bronze monument in the central park to honor its brave founder.",
    "cn": "自豪的市議會正式決定在中央公園優雅地豎立一座大型青銅紀念碑，以紀念其勇敢的建立者。"
  },
  {
    "word": "erection",
    "pos": "n.",
    "cn_def": "建造；設立",
    "en_def": "the action of erecting a structure or object.",
    "sentence": "The surprisingly rapid {{BLANK}} of the brand new suspension bridge greatly improved the daily heavy traffic flow between the two busy cities.",
    "cn": "全新吊橋令人驚訝地快速建造，極大地改善了這兩座繁忙城市之間每天繁重的交通流量。"
  },
  {
    "word": "put up",
    "pos": "phr.",
    "cn_def": "建造；搭起",
    "en_def": "to construct or erect something.",
    "sentence": "The highly dedicated construction workers quickly managed to {{BLANK}} the temporary wooden fence before the incredibly heavy rain finally started.",
    "cn": "非常敬業的建築工人迅速在極大的暴雨最終開始之前，設法搭起了臨時的木製圍欄。"
  },
  {
    "word": "construct",
    "pos": "v.",
    "cn_def": "建造；構成",
    "en_def": "to build or erect something, typically a building, road, or machine.",
    "sentence": "The massive international company officially plans to {{BLANK}} a highly advanced new factory in the rural area to provide more local jobs.",
    "cn": "這家龐大的國際公司正式計畫在鄉村地區建造一座高度先進的新工廠，以提供更多當地就業機會。"
  },
  {
    "word": "rival",
    "pos": "n. / v.",
    "cn_def": "競爭對手；與...匹敵",
    "en_def": "a person or thing competing with another for the same objective; to equal or be compared with.",
    "sentence": "The highly successful and wealthy technology company currently faces a fierce new {{BLANK}} that is efficiently producing much cheaper electronic devices.",
    "cn": "這家非常成功且富有的科技公司目前面臨著一個猛烈的新競爭對手，該對手正高效率地生產便宜許多的電子設備。"
  },
  {
    "word": "rival",
    "pos": "v.",
    "cn_def": "與...匹敵",
    "en_def": "to be or seem to be equal or comparable to.",
    "sentence": "The highly impressive quality of the digital camera in this modern cell phone can easily {{BLANK}} that of a very expensive regular camera.",
    "cn": "這款現代手機中數位相機令人印象深刻的品質，可以輕鬆地與非常昂貴的一般相機匹敵。"
  },
  {
    "word": "rivalry",
    "pos": "n.",
    "cn_def": "競爭；敵對",
    "en_def": "competition for the same objective or for superiority in the same field.",
    "sentence": "There is an incredibly long and deeply intense {{BLANK}} between the two local high school football teams during the competitive sports season.",
    "cn": "在競爭激烈的體育賽季中，兩所當地高中美式足球隊之間有著令人難以置信的漫長且極度激烈的競爭。"
  },
  {
    "word": "competitor",
    "pos": "n.",
    "cn_def": "競爭者",
    "en_def": "an organization or country that is engaged in commercial or economic competition with others.",
    "sentence": "In order to remain highly profitable, the global business must constantly and carefully monitor every major {{BLANK}} in the competitive international market.",
    "cn": "為了保持高利潤，這家全球企業必須不斷且仔細地監控競爭激烈的國際市場中每一個主要的競爭者。"
  },
  {
    "word": "opponent",
    "pos": "n.",
    "cn_def": "對手",
    "en_def": "someone who competes against or fights another in a contest, game, or argument.",
    "sentence": "The highly skilled and muscular boxer carefully studied his strong {{BLANK}} for several weeks before the important championship match finally took place.",
    "cn": "這位技術高超且肌肉發達的拳擊手在重要的冠軍賽最終舉行前，仔細研究了他強大的對手好幾個星期。"
  },
  {
    "word": "ceremony",
    "pos": "n.",
    "cn_def": "儀式；典禮",
    "en_def": "a formal religious or public occasion, typically one celebrating a particular event or anniversary.",
    "sentence": "The beautiful women in the traditional {{BLANK}} wore long robes of pure white, and the proud men wore brightly colored red ones.",
    "cn": "傳統儀式中美麗的女人們穿著純白色的長袍，而自豪的男人們則穿著色彩鮮豔的紅色長袍。"
  },
  {
    "word": "rite",
    "pos": "n.",
    "cn_def": "儀式；慣例",
    "en_def": "a religious or other solemn ceremony or act.",
    "sentence": "The ancient indigenous tribe joyfully performs a highly special religious {{BLANK}} every single spring to warmly celebrate the return of the pleasant weather.",
    "cn": "古老的原住民部落每年春天都會歡樂地舉行一個非常特別的宗教儀式，以溫暖地慶祝宜人天氣的回歸。"
  },
  {
    "word": "ritual",
    "pos": "n.",
    "cn_def": "儀式；習慣",
    "en_def": "a religious or solemn ceremony consisting of a series of actions performed according to a prescribed order.",
    "sentence": "Having a quiet and relaxing cup of coffee on the sunny balcony is my absolute favorite morning {{BLANK}} before starting the busy day.",
    "cn": "在陽光明媚的陽台上安靜放鬆地喝杯咖啡，是我在開始忙碌一天之前絕對最喜歡的早晨儀式（習慣）。"
  },
  {
    "word": "religious ritual",
    "pos": "n.",
    "cn_def": "宗教儀式",
    "en_def": "a religious ceremony or practice to worship gods",
    "sentence": "The priest of the aboriginal tribe practices the conventional {{BLANK}} to worship to the gods for good fortune.",
    "cn": "原住民部落的祭司舉行傳統的宗教儀式，向神明祈求好運。"
  },
  {
    "word": "stand on ceremony",
    "pos": "phr.",
    "cn_def": "拘泥於禮節",
    "en_def": "to insist on formal behavior.",
    "sentence": "You really don't have to {{BLANK}} at this incredibly casual house party; just wear comfortable clothing and totally relax.",
    "cn": "在這個極其休閒的家庭派對上，你真的不必拘泥於禮節；只要穿著舒適的衣服並完全放鬆即可。"
  },
  {
    "word": "opening ceremony",
    "pos": "phr.",
    "cn_def": "開幕典禮",
    "en_def": "the formal event that marks the beginning of a larger event or festival.",
    "sentence": "The spectacular {{BLANK}} of the massive international sports event featured incredible traditional dancing and a surprisingly large colorful fireworks display.",
    "cn": "這場大型國際體育賽事壯觀的開幕典禮，以令人難以置信的傳統舞蹈和令人驚訝的盛大彩色煙火表演為特色。"
  },
  {
    "word": "revolution",
    "pos": "n.",
    "cn_def": "革命",
    "en_def": "a forcible overthrow of a government or social order; a dramatic and wide-reaching change in the way something works.",
    "sentence": "The rapid and completely unexpected development of the global internet has completely created a massive {{BLANK}} in the way we communicate daily.",
    "cn": "全球網際網路迅速且完全出乎意料的發展，已經徹底在我們日常溝通的方式上創造了一場巨大的革命。"
  },
  {
    "word": "revolutionary",
    "pos": "adj.",
    "cn_def": "革命性的",
    "en_def": "involving or causing a complete or dramatic change.",
    "sentence": "The brilliant scientist's totally {{BLANK}} new theory completely changed how modern physicists fundamentally understand the complex and mysterious nature of the universe.",
    "cn": "這位才華洋溢科學家完全革命性的新理論，徹底改變了現代物理學家對宇宙複雜神秘本質的根本理解。"
  },
  {
    "word": "revolutionize",
    "pos": "v.",
    "cn_def": "徹底改變",
    "en_def": "to change something radically or fundamentally.",
    "sentence": "The amazing invention of the highly affordable modern automobile managed to totally {{BLANK}} personal transportation and complicated urban planning around the entire world.",
    "cn": "極度負擔得起的現代汽車的驚人發明，成功地徹底改變了全世界的個人交通和複雜的城市規劃。"
  },
  {
    "word": "revolve",
    "pos": "v.",
    "cn_def": "旋轉；圍繞",
    "en_def": "to move in a circle on a central axis.",
    "sentence": "The knowledgeable and friendly astronomy teacher carefully explained how all the rocky planets in our solar system naturally {{BLANK}} around the glowing sun.",
    "cn": "知識淵博且友善的天文學老師仔細解釋了我們太陽系中所有岩石行星如何自然地圍繞著發光的太陽旋轉。"
  },
  {
    "word": "cultural revolution",
    "pos": "phr.",
    "cn_def": "文化大革命",
    "en_def": "a fundamental change in the cultural values and practices of a society.",
    "sentence": "The sudden and incredibly dramatic {{BLANK}} in the ancient country significantly changed its historical art, modern music, and traditional social values forever.",
    "cn": "這個古老國家突然且極其戲劇性的文化大革命，顯著地永遠改變了它的歷史藝術、現代音樂和傳統社會價值觀。"
  },
  {
    "word": "creak",
    "pos": "n.",
    "cn_def": "嘎吱聲；發出嘎吱聲",
    "en_def": "a harsh scraping or squeaking sound.",
    "sentence": "The incredibly loud and spooky {{BLANK}} of the old wooden door as I entered the dark room immediately woke my sleeping parents up.",
    "cn": "當我進入黑暗的房間時，老木門極其響亮且令人毛骨悚然的嘎吱聲立刻吵醒了熟睡的父母。"
  },
  {
    "word": "creaked",
    "pos": "v.",
    "cn_def": "發出嘎吱聲",
    "en_def": "to make a harsh, high-pitched sound when being moved or when pressure or weight is applied.",
    "sentence": "Mary walked as gently and quietly as she possibly could, but the aged wooden floor still {{BLANK}} loudly and annoyingly under her heavy feet.",
    "cn": "瑪麗盡可能輕柔且安靜地走，但老舊的木地板在她沉重的腳下仍然大聲且煩人地發出嘎吱聲。"
  },
  {
    "word": "renewed",
    "pos": "v.",
    "cn_def": "更新；重新燃起",
    "en_def": "to resume an activity after an interruption; to re-establish.",
    "sentence": "Watching the highly exciting television documentary about the vast, deep ocean has completely {{BLANK}} my long-forgotten childhood interest in sailing large boats.",
    "cn": "觀看這部關於廣闊深海極其刺激的電視紀錄片，已經徹底重新燃起了我被遺忘已久的童年對駕駛大船的興趣。"
  },
  {
    "word": "resume",
    "pos": "v.",
    "cn_def": "恢復；繼續",
    "en_def": "to begin to do or pursue something again after a pause or interruption.",
    "sentence": "The exciting professional baseball game will officially {{BLANK}} tomorrow afternoon as soon as the incredibly heavy and dangerous thunderstorm finally passes safely.",
    "cn": "刺激的職業棒球比賽將在極其強烈且危險的雷雨終於安全過去後，於明天下午正式恢復（繼續）。"
  },
  {
    "word": "renewable",
    "pos": "adj.",
    "cn_def": "可再生的",
    "en_def": "not depleted when used.",
    "sentence": "Powerful solar and wind power are naturally excellent sources of {{BLANK}} energy that can significantly help human beings protect the delicate natural environment.",
    "cn": "強大的太陽能和風能天然是可再生的能源的極佳來源，可以顯著幫助人類保護脆弱的自然環境。"
  },
  {
    "word": "reception",
    "pos": "n.",
    "cn_def": "接待；歡迎會",
    "en_def": "the action or process of receiving something sent, given, or inflicted; a formal social occasion held to welcome someone.",
    "sentence": "The victorious and highly respected king was given a truly grand and exciting {{BLANK}} upon safely arriving back at the heavily guarded large stone castle.",
    "cn": "勝利且備受尊敬的國王在安全返回戒備森嚴的大型石頭城堡時，受到了一場真正盛大且令人興奮的接待（歡迎會）。"
  },
  {
    "word": "reception desk",
    "pos": "phr.",
    "cn_def": "接待櫃檯",
    "en_def": "a desk or area in a hotel, office, etc., where visitors are received and directed.",
    "sentence": "When you are completely packed and fully ready to leave the luxury hotel, please kindly remember to leave your electronic room key at the main {{BLANK}}.",
    "cn": "當您完全打包好並準備離開豪華飯店時，請親切地記得將您的電子房卡留在主要的接待櫃檯。"
  },
  {
    "word": "receptionist",
    "pos": "n.",
    "cn_def": "接待員",
    "en_def": "a person employed in an office or other establishment to answer the telephone, deal with clients, and greet visitors.",
    "sentence": "The highly friendly and incredibly helpful {{BLANK}} quickly answered the loudly ringing telephone and efficiently directed the important business call to the busy general manager.",
    "cn": "這位非常友善且極度樂於助人的接待員迅速接起了大聲響鈴的電話，並高效率地將這通重要的商業電話轉接給忙碌的總經理。"
  },
  {
    "word": "grand reception",
    "pos": "phr.",
    "cn_def": "盛大的招待會",
    "en_def": "a large, impressive formal party or celebration.",
    "sentence": "The happily newly married young couple beautifully hosted a truly {{BLANK}} for absolutely all their beloved family members and closest lifelong friends to warmly celebrate.",
    "cn": "這對快樂新婚的年輕夫婦美麗地舉辦了一場真正的盛大的招待會，讓他們所有深愛的家人和最親密的一生摯友溫暖地慶祝。"
  },
  {
    "word": "gown",
    "pos": "n.",
    "cn_def": "禮服；長袍",
    "en_def": "a long elegant dress worn on formal occasions.",
    "sentence": "The incredibly famous Hollywood actress confidently and gracefully walked down the long red carpet wearing a stunning and outrageously expensive red silk {{BLANK}}.",
    "cn": "這位極其著名的好萊塢女演員自信優雅地走在長長的紅地毯上，穿著一件令人驚豔且昂貴得離譜的紅色絲綢禮服。"
  },
  {
    "word": "wedding gown",
    "pos": "phr.",
    "cn_def": "婚紗",
    "en_def": "a dress worn by a bride on her wedding day.",
    "sentence": "My extremely talented and patient mother spent several long, tiring months carefully hand-making my lovely older sister's completely beautiful white lace {{BLANK}}.",
    "cn": "我極具才華且耐心的母親花了幾個月漫長疲憊的時間，小心翼翼地手工製作了我可愛的姊姊那件完全美麗的白色蕾絲婚紗。"
  },
  {
    "word": "evening gown",
    "pos": "phr.",
    "cn_def": "晚禮服",
    "en_def": "a long, formal dress worn for evening events.",
    "sentence": "The wealthy and important guests were strictly required by the exclusive invitation to either wear a formal black suit or a beautiful long {{BLANK}} to the party.",
    "cn": "獨家邀請函嚴格要求這些富有且重要的客人，必須穿著正式的黑色西裝或美麗的長晚禮服參加派對。"
  },
  {
    "word": "cigar",
    "pos": "n.",
    "cn_def": "雪茄",
    "en_def": "a cylinder of tobacco rolled in tobacco leaves for smoking.",
    "sentence": "Proud American fathers historically and often happily give out highly expensive {{BLANK}} to their close male friends when a healthy new baby is finally born.",
    "cn": "驕傲的美國父親在健康的新嬰兒終於誕生時，在歷史上且經常快樂地向他們親密的男性朋友分發極其昂貴的雪茄。"
  },
  {
    "word": "cigarette",
    "pos": "n.",
    "cn_def": "香菸",
    "en_def": "a thin cylinder of finely cut tobacco rolled in paper for smoking.",
    "sentence": "Consistently smoking a {{BLANK}} every single day is a very unhealthy and highly dangerous bad habit that can eventually lead to severely serious and deadly lung diseases.",
    "cn": "每天持續抽香菸是一個非常不健康且高度危險的壞習慣，最終可能導致嚴重且致命的肺部疾病。"
  },
  {
    "word": "light a cigar",
    "pos": "phr.",
    "cn_def": "點燃雪茄",
    "en_def": "to ignite a cigar for smoking.",
    "sentence": "The extremely wealthy and successful businessman confidently used a heavy, solid gold lighter to slowly {{BLANK}} right after officially closing the massive corporate deal.",
    "cn": "這位極度富有且成功的商人在正式完成龐大的企業交易後，自信地使用一個沉重的純金打火機緩慢地點燃雪茄。"
  },
  {
    "word": "smoke a cigar",
    "pos": "phr.",
    "cn_def": "抽雪茄",
    "en_def": "to inhale and exhale the smoke of a cigar.",
    "sentence": "My retired grandfather absolutely loves to peacefully sit on the quiet wooden back porch and {{BLANK}} while slowly reading the detailed morning newspaper.",
    "cn": "我退休的祖父絕對喜歡平靜地坐在安靜的木製後廊上，一邊抽雪茄一邊慢慢閱讀詳細的晨報。"
  },
  {
    "word": "lessen",
    "pos": "v.",
    "cn_def": "減少；減輕",
    "en_def": "to make or become less; to diminish.",
    "sentence": "Consistently maintaining a healthy and regular daily exercise routine can significantly {{BLANK}} your overall personal risk of developing many highly serious long-term physical illnesses.",
    "cn": "持續維持健康規律的日常運動習慣，可以顯著減少你個人罹患許多極其嚴重的長期身體疾病的整體風險。"
  },
  {
    "word": "decrease",
    "pos": "v.",
    "cn_def": "減少",
    "en_def": "to make or become smaller or fewer in size, amount, intensity, or degree.",
    "sentence": "The highly innovative company successfully managed to drastically {{BLANK}} its massive production costs by highly automating the complicated manufacturing process in the new factory.",
    "cn": "這家高度創新的公司透過將新工廠中複雜的製造過程高度自動化，成功設法大幅減少了其龐大的生產成本。"
  },
  {
    "word": "enlarge",
    "pos": "v.",
    "cn_def": "擴大",
    "en_def": "to make or become bigger or more extensive.",
    "sentence": "We are actively planning to expensively {{BLANK}} our incredibly small and cramped kitchen early next year so we can finally have much more comfortable space to cook daily.",
    "cn": "我們正積極計畫在明年初花大錢擴大我們極其狹小擁擠的廚房，這樣我們終於能有舒適許多的空間來進行日常烹飪。"
  },
  {
    "word": "expand",
    "pos": "v.",
    "cn_def": "擴張",
    "en_def": "to become or make larger or more extensive.",
    "sentence": "The highly ambitious and rapidly growing international corporation actively plans to quickly {{BLANK}} its profitable retail business into several brand new and economically developing countries.",
    "cn": "這家極具野心且快速成長的國際企業積極計畫將其有利可圖的零售業務，迅速擴張到幾個全新且經濟正在發展的國家。"
  },
  {
    "word": "nonetheless",
    "pos": "adv.",
    "cn_def": "儘管如此",
    "en_def": "in spite of that; nevertheless.",
    "sentence": "Mike is currently seriously ill with aggressive cancer, but {{BLANK}}, he courageously and persistently continues to work incredibly hard at his highly demanding and stressful office job.",
    "cn": "麥克目前罹患了嚴重的侵襲性癌症，但儘管如此，他依然勇敢且堅持不懈地在他要求極高且充滿壓力的辦公室工作中極其努力地工作。"
  },
  {
    "word": "nevertheless",
    "pos": "adv.",
    "cn_def": "然而；儘管如此",
    "en_def": "in spite of that; notwithstanding; all the same.",
    "sentence": "The surprisingly heavy and sudden rain made the steep mountain hiking trail extremely muddy and highly dangerous; {{BLANK}}, we firmly decided to safely finish the long journey together.",
    "cn": "令人驚訝的突發大雨讓陡峭的登山步道變得極度泥濘且高度危險；然而（儘管如此），我們堅定地決定一起安全地完成這趟漫長的旅程。"
  },
  {
    "word": "however",
    "pos": "adv.",
    "cn_def": "然而",
    "en_def": "used to introduce a statement that contrasts with or seems to contradict something that has been said previously.",
    "sentence": "The incredibly expensive downtown restaurant has genuinely beautiful artistic decorations and exceptionally great service; {{BLANK}}, the actual served food is quite surprisingly disappointing and completely tasteless.",
    "cn": "這家極其昂貴的市中心餐廳擁有真正美麗的藝術裝飾和異常出色的服務；然而，實際提供的食物卻相當令人驚訝地令人失望且完全沒有味道。"
  },
  {
    "word": "exposition",
    "pos": "n.",
    "cn_def": "詳細闡述；博覽會",
    "en_def": "a comprehensive description and explanation of an idea or theory; a large public exhibition.",
    "sentence": "The highly knowledgeable history teacher passionately provided a highly detailed and truly fascinating {{BLANK}} on the complex and hidden political causes of the devastating global world war.",
    "cn": "知識非常淵博的歷史老師充滿熱情地對這場毀滅性全球世界大戰複雜且隱藏的政治原因，提供了一場極度詳細且真正引人入勝的詳細闡述。"
  }
];

const MCQS = [
  {
    "q": "The young girl felt a strange and uncomfortable ______ when the freezing cold wind unexpectedly blew past her.",
    "options": [
      "cigar",
      "cigarette",
      "sensation",
      "endeavor"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Being out on a large boat for the very first time is a ______ that certainly takes some getting used to.",
    "options": [
      "strange sensation",
      "grand reception",
      "put up",
      "natural phenomenon"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The new science fiction movie is truly ______ and has quickly received thousands of highly positive reviews online.",
    "options": [
      "ordinary",
      "revolutionary",
      "enclosed",
      "sensational"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The incredibly talented young singer managed to ______ with her absolutely breathtaking performance at the summer music festival.",
    "options": [
      "grand reception",
      "create a sensation",
      "evening gown",
      "structural damage"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The broken wooden raft ______ continuously for several days before it was finally spotted by a large passing cargo ship.",
    "options": [
      "phenomenon",
      "receptionist",
      "drifted",
      "competitor"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Because she was incredibly tired from working all day, Nancy quickly ______ during the boring history movie.",
    "options": [
      "faded away",
      "drifted off to sleep",
      "reception desk",
      "cultural revolution"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The bright red paint on my father's old car has completely ______ after being left out in the hot sun for years.",
    "options": [
      "faded",
      "construct",
      "enlarge",
      "lessen"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "As the warm morning sun slowly rose over the mountains, the thick white fog on the peaceful lake eventually ______.",
    "options": [
      "opening ceremony",
      "put up",
      "evening gown",
      "faded away"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Many beautiful and endangered animals could unfortunately ______ forever as a direct and tragic result of ongoing global climate change.",
    "options": [
      "vanish",
      "resume",
      "erect",
      "revolve"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The frightened wild rabbit managed to quickly ______ into the dark and dense forest before the careful hunter could even catch it.",
    "options": [
      "erect",
      "enlarge",
      "disappear",
      "enclose"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Before the highly anticipated movie officially started, the large theater was completely filled with a low ______ from the excited audience.",
    "options": [
      "drifted",
      "sensation",
      "opponent",
      "murmur"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The two naughty students had to cautiously ______ to each other in the silent library so they wouldn't disturb anyone studying.",
    "options": [
      "receptionist",
      "whisper",
      "reception",
      "cigar"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The incredibly boring professor continued to ______ on for two long hours about an outdated topic that absolutely no one was interested in.",
    "options": [
      "drone",
      "revolution",
      "cigarette",
      "ritual"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The invading nation lauched thousands of ______ to attack the military bases of the neighboring country.",
    "options": [
      "light a cigar",
      "successful endeavor",
      "precious metal",
      "drones"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The rich and famous businessman decided to completely ______ his large private property with a tall and highly secure metal fence.",
    "options": [
      "revolve",
      "enclose",
      "creaked",
      "renewed"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The reputable bank strictly refuses to secretly ______ any sensitive private information about its loyal customers to the general public.",
    "options": [
      "disappear",
      "construct",
      "disclose",
      "vanish"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The dangerous and powerful lions at the city zoo are kept safely inside a massive glass and steel ______ for everyone's protection.",
    "options": [
      "receptionist",
      "enclosure",
      "whisper",
      "competitor"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Please carefully and thoroughly review the highly important ______ documents before you sign the legal contract and mail it back.",
    "options": [
      "worthless",
      "revolutionary",
      "exceptional",
      "enclosed"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "These old black-and-white photos of your beloved grandparents are incredibly ______, so you really must take excellent care of them.",
    "options": [
      "precious",
      "enclosed",
      "worthless",
      "phenomenal"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The ancient golden artifact found deep inside the hidden tomb is totally ______ and undoubtedly belongs in a secure national museum.",
    "options": [
      "phenomenal",
      "ordinary",
      "priceless",
      "exceptional"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Because the complex machine is completely broken and utterly unrepairable, it is now entirely ______ to the frustrated factory owners.",
    "options": [
      "worthless",
      "enclosed",
      "ordinary",
      "exceptional"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Gold and silver are highly valued ______ that have successfully been used as standard currency for thousands of human generations.",
    "options": [
      "natural phenomenon",
      "reception desk",
      "precious metal",
      "faded away"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "It took an absolutely ______ effort for the highly dedicated salesperson to finally reach her incredibly ambitious annual sales goal.",
    "options": [
      "revolutionary",
      "worthless",
      "precious",
      "extraordinary"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The young girl consistently showed an ______ talent for playing the classical piano, deeply impressing all of her experienced music teachers.",
    "options": [
      "revolutionary",
      "exceptional",
      "precious",
      "worthless"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The rapid growth of social media shopping is a recent economic ______ that has completely changed how brands sell products to young consumers.",
    "options": [
      "enclosure",
      "reception",
      "phenomenon",
      "receptionist"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "A solar eclipse is a fascinating ______ where the moon passes between the sun and Earth, temporarily blocking the sunlight.",
    "options": [
      "precious metal",
      "evening gown",
      "wedding gown",
      "natural phenomenon"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The new internet software startup experienced ______ growth during its very first year, making the young founders incredibly wealthy overnight.",
    "options": [
      "ordinary",
      "phenomenal",
      "extraordinary",
      "enclosed"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Despite his immense worldwide wealth and incredible fame, the highly successful actor actually prefers to live a surprisingly ______ and quiet life.",
    "options": [
      "ordinary",
      "renewable",
      "priceless",
      "revolutionary"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The highly complex ______ of the human brain actively allows us to process detailed information in incredibly fast and fascinating ways.",
    "options": [
      "receptionist",
      "structure",
      "murmur",
      "gown"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The ambitious city mayor heavily invested billions of dollars in upgrading the aging ______ to better support the rapidly growing local population.",
    "options": [
      "rivalry",
      "drone",
      "infrastructure",
      "revolution"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The terrifying winter storm caused significant ______ to several vulnerable houses located directly along the highly exposed coastline.",
    "options": [
      "successful endeavor",
      "natural phenomenon",
      "light a cigar",
      "structural damage"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "Climbing that highly dangerous, snow-covered mountain completely without an experienced guide will undoubtedly be a very difficult and risky ______.",
    "options": [
      "endeavor",
      "competitor",
      "rival",
      "infrastructure"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "You should always strictly ______ to avoid making common grammar and spelling mistakes when carefully writing a professional business report.",
    "options": [
      "creaked",
      "endeavor",
      "rival",
      "erect"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "Launching the brand new smartphone application proved to be a highly ______ that quickly generated millions of dollars in total profit.",
    "options": [
      "put up",
      "strange sensation",
      "successful endeavor",
      "faded away"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The proud city council officially decided to gracefully ______ a large bronze monument in the central park to honor its brave founder.",
    "options": [
      "erect",
      "construct",
      "lessen",
      "decrease"
    ],
    "answer": 0,
    "vocabIndex": 34
  },
  {
    "q": "The surprisingly rapid ______ of the brand new suspension bridge greatly improved the daily heavy traffic flow between the two busy cities.",
    "options": [
      "ritual",
      "reception",
      "rivalry",
      "erection"
    ],
    "answer": 3,
    "vocabIndex": 35
  },
  {
    "q": "The highly dedicated construction workers quickly managed to ______ the temporary wooden fence before the incredibly heavy rain finally started.",
    "options": [
      "strange sensation",
      "drifted off to sleep",
      "put up",
      "light a cigar"
    ],
    "answer": 2,
    "vocabIndex": 36
  },
  {
    "q": "The massive international company officially plans to ______ a highly advanced new factory in the rural area to provide more local jobs.",
    "options": [
      "construct",
      "renewed",
      "revolutionize",
      "erect"
    ],
    "answer": 0,
    "vocabIndex": 37
  },
  {
    "q": "The highly successful and wealthy technology company currently faces a fierce new ______ that is efficiently producing much cheaper electronic devices.",
    "options": [
      "competitor",
      "rival",
      "infrastructure",
      "rite"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "The highly impressive quality of the digital camera in this modern cell phone can easily ______ that of a very expensive regular camera.",
    "options": [
      "enclose",
      "decrease",
      "construct",
      "rival"
    ],
    "answer": 3,
    "vocabIndex": 39
  },
  {
    "q": "There is an incredibly long and deeply intense ______ between the two local high school football teams during the competitive sports season.",
    "options": [
      "creak",
      "competitor",
      "rivalry",
      "whisper"
    ],
    "answer": 2,
    "vocabIndex": 40
  },
  {
    "q": "In order to remain highly profitable, the global business must constantly and carefully monitor every major ______ in the competitive international market.",
    "options": [
      "cigarette",
      "competitor",
      "opponent",
      "exposition"
    ],
    "answer": 1,
    "vocabIndex": 41
  },
  {
    "q": "The highly skilled and muscular boxer carefully studied his strong ______ for several weeks before the important championship match finally took place.",
    "options": [
      "opponent",
      "endeavor",
      "rite",
      "rival"
    ],
    "answer": 0,
    "vocabIndex": 42
  },
  {
    "q": "The beautiful women in the traditional ______ wore long robes of pure white, and the proud men wore brightly colored red ones.",
    "options": [
      "phenomenon",
      "reception",
      "cigar",
      "ceremony"
    ],
    "answer": 3,
    "vocabIndex": 43
  },
  {
    "q": "The ancient indigenous tribe joyfully performs a highly special religious ______ every single spring to warmly celebrate the return of the pleasant weather.",
    "options": [
      "reception",
      "drone",
      "rite",
      "exposition"
    ],
    "answer": 2,
    "vocabIndex": 44
  },
  {
    "q": "Having a quiet and relaxing cup of coffee on the sunny balcony is my absolute favorite morning ______ before starting the busy day.",
    "options": [
      "competitor",
      "exposition",
      "infrastructure",
      "ritual"
    ],
    "answer": 3,
    "vocabIndex": 45
  },
  {
    "q": "The priest of the aboriginal tribe practices the conventional ______ to worship to the gods for good fortune.",
    "options": [
      "natural phenomenon",
      "religious ritual",
      "stand on ceremony",
      "smoke a cigar"
    ],
    "answer": 1,
    "vocabIndex": 46
  },
  {
    "q": "You really don't have to ______ at this incredibly casual house party; just wear comfortable clothing and totally relax.",
    "options": [
      "stand on ceremony",
      "reception desk",
      "grand reception",
      "natural phenomenon"
    ],
    "answer": 0,
    "vocabIndex": 47
  },
  {
    "q": "The spectacular ______ of the massive international sports event featured incredible traditional dancing and a surprisingly large colorful fireworks display.",
    "options": [
      "cultural revolution",
      "precious metal",
      "opening ceremony",
      "smoke a cigar"
    ],
    "answer": 2,
    "vocabIndex": 48
  },
  {
    "q": "The rapid and completely unexpected development of the global internet has completely created a massive ______ in the way we communicate daily.",
    "options": [
      "opponent",
      "revolution",
      "ceremony",
      "rite"
    ],
    "answer": 1,
    "vocabIndex": 49
  },
  {
    "q": "The brilliant scientist's totally ______ new theory completely changed how modern physicists fundamentally understand the complex and mysterious nature of the universe.",
    "options": [
      "revolutionary",
      "renewable",
      "phenomenal",
      "exceptional"
    ],
    "answer": 0,
    "vocabIndex": 50
  },
  {
    "q": "The amazing invention of the highly affordable modern automobile managed to totally ______ personal transportation and complicated urban planning around the entire world.",
    "options": [
      "renewed",
      "faded",
      "disclose",
      "revolutionize"
    ],
    "answer": 3,
    "vocabIndex": 51
  },
  {
    "q": "The knowledgeable and friendly astronomy teacher carefully explained how all the rocky planets in our solar system naturally ______ around the glowing sun.",
    "options": [
      "rival",
      "revolve",
      "erect",
      "enclose"
    ],
    "answer": 1,
    "vocabIndex": 52
  },
  {
    "q": "The sudden and incredibly dramatic ______ in the ancient country significantly changed its historical art, modern music, and traditional social values forever.",
    "options": [
      "drifted off to sleep",
      "grand reception",
      "cultural revolution",
      "stand on ceremony"
    ],
    "answer": 2,
    "vocabIndex": 53
  },
  {
    "q": "The incredibly loud and spooky ______ of the old wooden door as I entered the dark room immediately woke my sleeping parents up.",
    "options": [
      "revolution",
      "ritual",
      "infrastructure",
      "creak"
    ],
    "answer": 3,
    "vocabIndex": 54
  },
  {
    "q": "Mary walked as gently and quietly as she possibly could, but the aged wooden floor still ______ loudly and annoyingly under her heavy feet.",
    "options": [
      "creaked",
      "endeavor",
      "enclose",
      "decrease"
    ],
    "answer": 0,
    "vocabIndex": 55
  },
  {
    "q": "Watching the highly exciting television documentary about the vast, deep ocean has completely ______ my long-forgotten childhood interest in sailing large boats.",
    "options": [
      "revolve",
      "renewed",
      "vanish",
      "erect"
    ],
    "answer": 1,
    "vocabIndex": 56
  },
  {
    "q": "The exciting professional baseball game will officially ______ tomorrow afternoon as soon as the incredibly heavy and dangerous thunderstorm finally passes safely.",
    "options": [
      "resume",
      "disclose",
      "rival",
      "enlarge"
    ],
    "answer": 0,
    "vocabIndex": 57
  },
  {
    "q": "Powerful solar and wind power are naturally excellent sources of ______ energy that can significantly help human beings protect the delicate natural environment.",
    "options": [
      "exceptional",
      "extraordinary",
      "renewable",
      "priceless"
    ],
    "answer": 2,
    "vocabIndex": 58
  },
  {
    "q": "The victorious and highly respected king was given a truly grand and exciting ______ upon safely arriving back at the heavily guarded large stone castle.",
    "options": [
      "ritual",
      "creak",
      "rite",
      "reception"
    ],
    "answer": 3,
    "vocabIndex": 59
  },
  {
    "q": "When you are completely packed and fully ready to leave the luxury hotel, please kindly remember to leave your electronic room key at the main ______.",
    "options": [
      "opening ceremony",
      "reception desk",
      "create a sensation",
      "religious ritual"
    ],
    "answer": 1,
    "vocabIndex": 60
  },
  {
    "q": "The highly friendly and incredibly helpful ______ quickly answered the loudly ringing telephone and efficiently directed the important business call to the busy general manager.",
    "options": [
      "competitor",
      "revolution",
      "rival",
      "receptionist"
    ],
    "answer": 3,
    "vocabIndex": 61
  },
  {
    "q": "The happily newly married young couple beautifully hosted a truly ______ for absolutely all their beloved family members and closest lifelong friends to warmly celebrate.",
    "options": [
      "opening ceremony",
      "put up",
      "grand reception",
      "faded away"
    ],
    "answer": 2,
    "vocabIndex": 62
  },
  {
    "q": "The incredibly famous Hollywood actress confidently and gracefully walked down the long red carpet wearing a stunning and outrageously expensive red silk ______.",
    "options": [
      "gown",
      "reception",
      "erection",
      "endeavor"
    ],
    "answer": 0,
    "vocabIndex": 63
  },
  {
    "q": "My extremely talented and patient mother spent several long, tiring months carefully hand-making my lovely older sister's completely beautiful white lace ______.",
    "options": [
      "light a cigar",
      "evening gown",
      "drones",
      "wedding gown"
    ],
    "answer": 3,
    "vocabIndex": 64
  },
  {
    "q": "The wealthy and important guests were strictly required by the exclusive invitation to either wear a formal black suit or a beautiful long ______ to the party.",
    "options": [
      "reception desk",
      "evening gown",
      "structural damage",
      "smoke a cigar"
    ],
    "answer": 1,
    "vocabIndex": 65
  },
  {
    "q": "Proud American fathers historically and often happily give out highly expensive ______ to their close male friends when a healthy new baby is finally born.",
    "options": [
      "cigar",
      "receptionist",
      "drifted",
      "infrastructure"
    ],
    "answer": 0,
    "vocabIndex": 66
  },
  {
    "q": "Consistently smoking a ______ every single day is a very unhealthy and highly dangerous bad habit that can eventually lead to severely serious and deadly lung diseases.",
    "options": [
      "revolution",
      "exposition",
      "cigarette",
      "rivalry"
    ],
    "answer": 2,
    "vocabIndex": 67
  },
  {
    "q": "The extremely wealthy and successful businessman confidently used a heavy, solid gold lighter to slowly ______ right after officially closing the massive corporate deal.",
    "options": [
      "cultural revolution",
      "strange sensation",
      "precious metal",
      "light a cigar"
    ],
    "answer": 3,
    "vocabIndex": 68
  },
  {
    "q": "My retired grandfather absolutely loves to peacefully sit on the quiet wooden back porch and ______ while slowly reading the detailed morning newspaper.",
    "options": [
      "smoke a cigar",
      "evening gown",
      "religious ritual",
      "structural damage"
    ],
    "answer": 0,
    "vocabIndex": 69
  },
  {
    "q": "Consistently maintaining a healthy and regular daily exercise routine can significantly ______ your overall personal risk of developing many highly serious long-term physical illnesses.",
    "options": [
      "vanish",
      "erect",
      "lessen",
      "revolve"
    ],
    "answer": 2,
    "vocabIndex": 70
  },
  {
    "q": "The highly innovative company successfully managed to drastically ______ its massive production costs by highly automating the complicated manufacturing process in the new factory.",
    "options": [
      "revolutionize",
      "decrease",
      "disappear",
      "creaked"
    ],
    "answer": 1,
    "vocabIndex": 71
  },
  {
    "q": "We are actively planning to expensively ______ our incredibly small and cramped kitchen early next year so we can finally have much more comfortable space to cook daily.",
    "options": [
      "renewed",
      "enclose",
      "construct",
      "enlarge"
    ],
    "answer": 3,
    "vocabIndex": 72
  },
  {
    "q": "The highly ambitious and rapidly growing international corporation actively plans to quickly ______ its profitable retail business into several brand new and economically developing countries.",
    "options": [
      "disappear",
      "lessen",
      "expand",
      "revolve"
    ],
    "answer": 2,
    "vocabIndex": 73
  },
  {
    "q": "Mike is currently seriously ill with aggressive cancer, but ______, he courageously and persistently continues to work incredibly hard at his highly demanding and stressful office job.",
    "options": [
      "receptionist",
      "nonetheless",
      "opponent",
      "faded away"
    ],
    "answer": 1,
    "vocabIndex": 74
  },
  {
    "q": "The surprisingly heavy and sudden rain made the steep mountain hiking trail extremely muddy and highly dangerous; ______, we firmly decided to safely finish the long journey together.",
    "options": [
      "nevertheless",
      "structural damage",
      "expand",
      "cultural revolution"
    ],
    "answer": 0,
    "vocabIndex": 75
  },
  {
    "q": "The incredibly expensive downtown restaurant has genuinely beautiful artistic decorations and exceptionally great service; ______, the actual served food is quite surprisingly disappointing and completely tasteless.",
    "options": [
      "opponent",
      "revolutionize",
      "construct",
      "however"
    ],
    "answer": 3,
    "vocabIndex": 76
  },
  {
    "q": "The highly knowledgeable history teacher passionately provided a highly detailed and truly fascinating ______ on the complex and hidden political causes of the devastating global world war.",
    "options": [
      "exposition",
      "cigar",
      "competitor",
      "phenomenon"
    ],
    "answer": 0,
    "vocabIndex": 77
  }
];

const LOOKUP = {
  "sensation": {
    "pos": "n.",
    "en_def": "a physical feeling or perception resulting from something that happens to or comes into contact with the body.",
    "cn_def": "感覺；轟動",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a physical feeling or perception resulting from something that happens to or comes into contact with the body.",
        "cn_def": "感覺；轟動"
      }
    ]
  },
  "strange sensation": {
    "pos": "phr.",
    "en_def": "an unusual physical or mental feeling.",
    "cn_def": "奇怪的感覺",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an unusual physical or mental feeling.",
        "cn_def": "奇怪的感覺"
      }
    ]
  },
  "sensational": {
    "pos": "adj.",
    "en_def": "causing great public interest and excitement.",
    "cn_def": "轟動的；極好的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing great public interest and excitement.",
        "cn_def": "轟動的；極好的"
      }
    ]
  },
  "create a sensation": {
    "pos": "phr.",
    "en_def": "to cause a lot of excitement or interest.",
    "cn_def": "引起轟動",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to cause a lot of excitement or interest.",
        "cn_def": "引起轟動"
      }
    ]
  },
  "drifted": {
    "pos": "v. / n.",
    "en_def": "to be carried slowly by a current of air or water.",
    "cn_def": "漂流；大意",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to be carried slowly by a current of air or water.",
        "cn_def": "漂流；大意"
      }
    ]
  },
  "drift": {
    "pos": "v. / n.",
    "en_def": "to be carried slowly by a current of air or water.",
    "cn_def": "漂流；大意",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to be carried slowly by a current of air or water.",
        "cn_def": "漂流；大意"
      }
    ]
  },
  "drifted off to sleep": {
    "pos": "phr.",
    "en_def": "to gradually fall asleep.",
    "cn_def": "漸漸入睡",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to gradually fall asleep.",
        "cn_def": "漸漸入睡"
      }
    ]
  },
  "drift off to sleep": {
    "pos": "phr.",
    "en_def": "to gradually fall asleep.",
    "cn_def": "漸漸入睡",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to gradually fall asleep.",
        "cn_def": "漸漸入睡"
      }
    ]
  },
  "faded": {
    "pos": "v.",
    "en_def": "to gradually grow faint and disappear.",
    "cn_def": "褪色；消退",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to gradually grow faint and disappear.",
        "cn_def": "褪色；消退"
      }
    ]
  },
  "fade": {
    "pos": "v.",
    "en_def": "to gradually grow faint and disappear.",
    "cn_def": "褪色；消退",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to gradually grow faint and disappear.",
        "cn_def": "褪色；消退"
      }
    ]
  },
  "faded away": {
    "pos": "phr.",
    "en_def": "to gradually disappear completely.",
    "cn_def": "逐漸消失",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to gradually disappear completely.",
        "cn_def": "逐漸消失"
      }
    ]
  },
  "fade away": {
    "pos": "phr.",
    "en_def": "to gradually disappear completely.",
    "cn_def": "逐漸消失",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to gradually disappear completely.",
        "cn_def": "逐漸消失"
      }
    ]
  },
  "vanish": {
    "pos": "v.",
    "en_def": "to disappear suddenly and completely.",
    "cn_def": "消失",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to disappear suddenly and completely.",
        "cn_def": "消失"
      }
    ]
  },
  "disappear": {
    "pos": "v.",
    "en_def": "to cease to be visible.",
    "cn_def": "消失",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cease to be visible.",
        "cn_def": "消失"
      }
    ]
  },
  "murmur": {
    "pos": "n. / v.",
    "en_def": "a soft, indistinct sound made by a person or group of people speaking quietly or at a distance.",
    "cn_def": "低語聲；喃喃自語",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a soft, indistinct sound made by a person or group of people speaking quietly or at a distance.",
        "cn_def": "低語聲；喃喃自語"
      }
    ]
  },
  "whisper": {
    "pos": "v. / n.",
    "en_def": "to speak very softly using one's breath without one's vocal cords.",
    "cn_def": "耳語；小聲說話",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to speak very softly using one's breath without one's vocal cords.",
        "cn_def": "耳語；小聲說話"
      }
    ]
  },
  "drone": {
    "pos": "v. / n.",
    "en_def": "to make a continuous low humming sound; to speak tediously.",
    "cn_def": "嗡嗡聲；單調地說",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to make a continuous low humming sound; to speak tediously.",
        "cn_def": "嗡嗡聲；單調地說"
      },
      {
        "pos": "n",
        "en_def": "manless flying gadget",
        "cn_def": "無人機"
      }
    ]
  },
  "drones": {
    "pos": "n",
    "en_def": "manless flying gadget",
    "cn_def": "無人機",
    "combined": [
      {
        "pos": "n",
        "en_def": "manless flying gadget",
        "cn_def": "無人機"
      }
    ]
  },
  "enclose": {
    "pos": "v.",
    "en_def": "to surround or close off on all sides.",
    "cn_def": "圍住；附上",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to surround or close off on all sides.",
        "cn_def": "圍住；附上"
      }
    ]
  },
  "disclose": {
    "pos": "v.",
    "en_def": "to make secret or new information known.",
    "cn_def": "揭露；公開",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make secret or new information known.",
        "cn_def": "揭露；公開"
      }
    ]
  },
  "enclosure": {
    "pos": "n.",
    "en_def": "an area that is sealed off with an artificial or natural barrier.",
    "cn_def": "圍欄；圈地",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an area that is sealed off with an artificial or natural barrier.",
        "cn_def": "圍欄；圈地"
      }
    ]
  },
  "enclosed": {
    "pos": "adj.",
    "en_def": "surrounded or closed off on all sides; included with a letter or package.",
    "cn_def": "隨函附上的；封閉的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "surrounded or closed off on all sides; included with a letter or package.",
        "cn_def": "隨函附上的；封閉的"
      }
    ]
  },
  "precious": {
    "pos": "adj.",
    "en_def": "of great value; not to be wasted or treated carelessly.",
    "cn_def": "珍貴的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "of great value; not to be wasted or treated carelessly.",
        "cn_def": "珍貴的"
      }
    ]
  },
  "priceless": {
    "pos": "adj.",
    "en_def": "so precious that its value cannot be determined.",
    "cn_def": "無價的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "so precious that its value cannot be determined.",
        "cn_def": "無價的"
      }
    ]
  },
  "worthless": {
    "pos": "adj.",
    "en_def": "having no real value or use.",
    "cn_def": "毫無價值的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having no real value or use.",
        "cn_def": "毫無價值的"
      }
    ]
  },
  "precious metal": {
    "pos": "phr.",
    "en_def": "a rare, naturally occurring metallic chemical element of high economic value.",
    "cn_def": "貴金屬",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a rare, naturally occurring metallic chemical element of high economic value.",
        "cn_def": "貴金屬"
      }
    ]
  },
  "extraordinary": {
    "pos": "adj.",
    "en_def": "very unusual or remarkable.",
    "cn_def": "非凡的；出色的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very unusual or remarkable.",
        "cn_def": "非凡的；出色的"
      }
    ]
  },
  "exceptional": {
    "pos": "adj.",
    "en_def": "unusually good; outstanding.",
    "cn_def": "卓越的；例外的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "unusually good; outstanding.",
        "cn_def": "卓越的；例外的"
      }
    ]
  },
  "phenomenon": {
    "pos": "n. [C]",
    "en_def": "Something that exists or happens, especially something that is studied because it is unusual or interesting.",
    "cn_def": "現象",
    "combined": [
      {
        "pos": "n. [C]",
        "en_def": "Something that exists or happens, especially something that is studied because it is unusual or interesting.",
        "cn_def": "現象"
      }
    ]
  },
  "natural phenomenon": {
    "pos": "phr.",
    "en_def": "An event or occurrence in the physical world that is not created by humans, such as a rainbow or volcanic eruption.",
    "cn_def": "自然現象",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "An event or occurrence in the physical world that is not created by humans, such as a rainbow or volcanic eruption.",
        "cn_def": "自然現象"
      }
    ]
  },
  "phenomenal": {
    "pos": "adj.",
    "en_def": "very remarkable; extraordinary.",
    "cn_def": "驚人的；非凡的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very remarkable; extraordinary.",
        "cn_def": "驚人的；非凡的"
      }
    ]
  },
  "ordinary": {
    "pos": "adj.",
    "en_def": "with no special or distinctive features; normal.",
    "cn_def": "普通的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "with no special or distinctive features; normal.",
        "cn_def": "普通的"
      }
    ]
  },
  "structure": {
    "pos": "n.",
    "en_def": "the arrangement of and relations between the parts or elements of something complex.",
    "cn_def": "結構；建築物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the arrangement of and relations between the parts or elements of something complex.",
        "cn_def": "結構；建築物"
      }
    ]
  },
  "infrastructure": {
    "pos": "n.",
    "en_def": "the basic physical and organizational structures and facilities needed for the operation of a society.",
    "cn_def": "基礎建設",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the basic physical and organizational structures and facilities needed for the operation of a society.",
        "cn_def": "基礎建設"
      }
    ]
  },
  "structural damage": {
    "pos": "phr.",
    "en_def": "physical harm that impairs the function or integrity of a structure.",
    "cn_def": "結構性損壞",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "physical harm that impairs the function or integrity of a structure.",
        "cn_def": "結構性損壞"
      }
    ]
  },
  "endeavor": {
    "pos": "n. / v.",
    "en_def": "an attempt to achieve a goal; to try hard to do or achieve something.",
    "cn_def": "努力；嘗試",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "an attempt to achieve a goal; to try hard to do or achieve something.",
        "cn_def": "努力；嘗試"
      },
      {
        "pos": "v.",
        "en_def": "to try hard to do or achieve something.",
        "cn_def": "努力；盡力"
      }
    ]
  },
  "successful endeavor": {
    "pos": "phr.",
    "en_def": "an attempt or project that achieves its goals.",
    "cn_def": "成功的嘗試",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an attempt or project that achieves its goals.",
        "cn_def": "成功的嘗試"
      }
    ]
  },
  "erect": {
    "pos": "v.",
    "en_def": "to construct a building, wall, or other structure.",
    "cn_def": "建立；豎立",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to construct a building, wall, or other structure.",
        "cn_def": "建立；豎立"
      }
    ]
  },
  "erection": {
    "pos": "n.",
    "en_def": "the action of erecting a structure or object.",
    "cn_def": "建造；設立",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of erecting a structure or object.",
        "cn_def": "建造；設立"
      }
    ]
  },
  "put up": {
    "pos": "phr.",
    "en_def": "to construct or erect something.",
    "cn_def": "建造；搭起",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to construct or erect something.",
        "cn_def": "建造；搭起"
      }
    ]
  },
  "construct": {
    "pos": "v.",
    "en_def": "to build or erect something, typically a building, road, or machine.",
    "cn_def": "建造；構成",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to build or erect something, typically a building, road, or machine.",
        "cn_def": "建造；構成"
      }
    ]
  },
  "rival": {
    "pos": "n. / v.",
    "en_def": "a person or thing competing with another for the same objective; to equal or be compared with.",
    "cn_def": "競爭對手；與...匹敵",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a person or thing competing with another for the same objective; to equal or be compared with.",
        "cn_def": "競爭對手；與...匹敵"
      },
      {
        "pos": "v.",
        "en_def": "to be or seem to be equal or comparable to.",
        "cn_def": "與...匹敵"
      }
    ]
  },
  "rivalry": {
    "pos": "n.",
    "en_def": "competition for the same objective or for superiority in the same field.",
    "cn_def": "競爭；敵對",
    "combined": [
      {
        "pos": "n.",
        "en_def": "competition for the same objective or for superiority in the same field.",
        "cn_def": "競爭；敵對"
      }
    ]
  },
  "competitor": {
    "pos": "n.",
    "en_def": "an organization or country that is engaged in commercial or economic competition with others.",
    "cn_def": "競爭者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an organization or country that is engaged in commercial or economic competition with others.",
        "cn_def": "競爭者"
      }
    ]
  },
  "opponent": {
    "pos": "n.",
    "en_def": "someone who competes against or fights another in a contest, game, or argument.",
    "cn_def": "對手",
    "combined": [
      {
        "pos": "n.",
        "en_def": "someone who competes against or fights another in a contest, game, or argument.",
        "cn_def": "對手"
      }
    ]
  },
  "ceremony": {
    "pos": "n.",
    "en_def": "a formal religious or public occasion, typically one celebrating a particular event or anniversary.",
    "cn_def": "儀式；典禮",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a formal religious or public occasion, typically one celebrating a particular event or anniversary.",
        "cn_def": "儀式；典禮"
      }
    ]
  },
  "rite": {
    "pos": "n.",
    "en_def": "a religious or other solemn ceremony or act.",
    "cn_def": "儀式；慣例",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a religious or other solemn ceremony or act.",
        "cn_def": "儀式；慣例"
      }
    ]
  },
  "ritual": {
    "pos": "n.",
    "en_def": "a religious or solemn ceremony consisting of a series of actions performed according to a prescribed order.",
    "cn_def": "儀式；習慣",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a religious or solemn ceremony consisting of a series of actions performed according to a prescribed order.",
        "cn_def": "儀式；習慣"
      }
    ]
  },
  "religious ritual": {
    "pos": "n.",
    "en_def": "a religious ceremony or practice to worship gods",
    "cn_def": "宗教儀式",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a religious ceremony or practice to worship gods",
        "cn_def": "宗教儀式"
      }
    ]
  },
  "stand on ceremony": {
    "pos": "phr.",
    "en_def": "to insist on formal behavior.",
    "cn_def": "拘泥於禮節",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to insist on formal behavior.",
        "cn_def": "拘泥於禮節"
      }
    ]
  },
  "opening ceremony": {
    "pos": "phr.",
    "en_def": "the formal event that marks the beginning of a larger event or festival.",
    "cn_def": "開幕典禮",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the formal event that marks the beginning of a larger event or festival.",
        "cn_def": "開幕典禮"
      }
    ]
  },
  "revolution": {
    "pos": "n.",
    "en_def": "a forcible overthrow of a government or social order; a dramatic and wide-reaching change in the way something works.",
    "cn_def": "革命",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a forcible overthrow of a government or social order; a dramatic and wide-reaching change in the way something works.",
        "cn_def": "革命"
      }
    ]
  },
  "revolutionary": {
    "pos": "adj.",
    "en_def": "involving or causing a complete or dramatic change.",
    "cn_def": "革命性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "involving or causing a complete or dramatic change.",
        "cn_def": "革命性的"
      }
    ]
  },
  "revolutionize": {
    "pos": "v.",
    "en_def": "to change something radically or fundamentally.",
    "cn_def": "徹底改變",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to change something radically or fundamentally.",
        "cn_def": "徹底改變"
      }
    ]
  },
  "revolve": {
    "pos": "v.",
    "en_def": "to move in a circle on a central axis.",
    "cn_def": "旋轉；圍繞",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to move in a circle on a central axis.",
        "cn_def": "旋轉；圍繞"
      }
    ]
  },
  "cultural revolution": {
    "pos": "phr.",
    "en_def": "a fundamental change in the cultural values and practices of a society.",
    "cn_def": "文化大革命",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a fundamental change in the cultural values and practices of a society.",
        "cn_def": "文化大革命"
      }
    ]
  },
  "creak": {
    "pos": "n.",
    "en_def": "a harsh scraping or squeaking sound.",
    "cn_def": "嘎吱聲；發出嘎吱聲",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a harsh scraping or squeaking sound.",
        "cn_def": "嘎吱聲；發出嘎吱聲"
      },
      {
        "pos": "v.",
        "en_def": "to make a harsh, high-pitched sound when being moved or when pressure or weight is applied.",
        "cn_def": "發出嘎吱聲"
      }
    ]
  },
  "creaked": {
    "pos": "v.",
    "en_def": "to make a harsh, high-pitched sound when being moved or when pressure or weight is applied.",
    "cn_def": "發出嘎吱聲",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make a harsh, high-pitched sound when being moved or when pressure or weight is applied.",
        "cn_def": "發出嘎吱聲"
      }
    ]
  },
  "renew": {
    "pos": "v.",
    "en_def": "to resume an activity after an interruption; to re-establish.",
    "cn_def": "更新；重新燃起",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to resume an activity after an interruption; to re-establish.",
        "cn_def": "更新；重新燃起"
      }
    ]
  },
  "renewed": {
    "pos": "v.",
    "en_def": "to resume an activity after an interruption; to re-establish.",
    "cn_def": "更新；重新燃起",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to resume an activity after an interruption; to re-establish.",
        "cn_def": "更新；重新燃起"
      }
    ]
  },
  "resume": {
    "pos": "v.",
    "en_def": "to begin to do or pursue something again after a pause or interruption.",
    "cn_def": "恢復；繼續",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to begin to do or pursue something again after a pause or interruption.",
        "cn_def": "恢復；繼續"
      }
    ]
  },
  "renewable": {
    "pos": "adj.",
    "en_def": "not depleted when used.",
    "cn_def": "可再生的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not depleted when used.",
        "cn_def": "可再生的"
      }
    ]
  },
  "reception": {
    "pos": "n.",
    "en_def": "the action or process of receiving something sent, given, or inflicted; a formal social occasion held to welcome someone.",
    "cn_def": "接待；歡迎會",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action or process of receiving something sent, given, or inflicted; a formal social occasion held to welcome someone.",
        "cn_def": "接待；歡迎會"
      }
    ]
  },
  "reception desk": {
    "pos": "phr.",
    "en_def": "a desk or area in a hotel, office, etc., where visitors are received and directed.",
    "cn_def": "接待櫃檯",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a desk or area in a hotel, office, etc., where visitors are received and directed.",
        "cn_def": "接待櫃檯"
      }
    ]
  },
  "receptionist": {
    "pos": "n.",
    "en_def": "a person employed in an office or other establishment to answer the telephone, deal with clients, and greet visitors.",
    "cn_def": "接待員",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person employed in an office or other establishment to answer the telephone, deal with clients, and greet visitors.",
        "cn_def": "接待員"
      }
    ]
  },
  "grand reception": {
    "pos": "phr.",
    "en_def": "a large, impressive formal party or celebration.",
    "cn_def": "盛大的招待會",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a large, impressive formal party or celebration.",
        "cn_def": "盛大的招待會"
      }
    ]
  },
  "gown": {
    "pos": "n.",
    "en_def": "a long elegant dress worn on formal occasions.",
    "cn_def": "禮服；長袍",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a long elegant dress worn on formal occasions.",
        "cn_def": "禮服；長袍"
      }
    ]
  },
  "wedding gown": {
    "pos": "phr.",
    "en_def": "a dress worn by a bride on her wedding day.",
    "cn_def": "婚紗",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a dress worn by a bride on her wedding day.",
        "cn_def": "婚紗"
      }
    ]
  },
  "evening gown": {
    "pos": "phr.",
    "en_def": "a long, formal dress worn for evening events.",
    "cn_def": "晚禮服",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a long, formal dress worn for evening events.",
        "cn_def": "晚禮服"
      }
    ]
  },
  "cigar": {
    "pos": "n.",
    "en_def": "a cylinder of tobacco rolled in tobacco leaves for smoking.",
    "cn_def": "雪茄",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a cylinder of tobacco rolled in tobacco leaves for smoking.",
        "cn_def": "雪茄"
      }
    ]
  },
  "cigarette": {
    "pos": "n.",
    "en_def": "a thin cylinder of finely cut tobacco rolled in paper for smoking.",
    "cn_def": "香菸",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thin cylinder of finely cut tobacco rolled in paper for smoking.",
        "cn_def": "香菸"
      }
    ]
  },
  "light a cigar": {
    "pos": "phr.",
    "en_def": "to ignite a cigar for smoking.",
    "cn_def": "點燃雪茄",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to ignite a cigar for smoking.",
        "cn_def": "點燃雪茄"
      }
    ]
  },
  "smoke a cigar": {
    "pos": "phr.",
    "en_def": "to inhale and exhale the smoke of a cigar.",
    "cn_def": "抽雪茄",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to inhale and exhale the smoke of a cigar.",
        "cn_def": "抽雪茄"
      }
    ]
  },
  "lessen": {
    "pos": "v.",
    "en_def": "to make or become less; to diminish.",
    "cn_def": "減少；減輕",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make or become less; to diminish.",
        "cn_def": "減少；減輕"
      }
    ]
  },
  "decrease": {
    "pos": "v.",
    "en_def": "to make or become smaller or fewer in size, amount, intensity, or degree.",
    "cn_def": "減少",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make or become smaller or fewer in size, amount, intensity, or degree.",
        "cn_def": "減少"
      }
    ]
  },
  "enlarge": {
    "pos": "v.",
    "en_def": "to make or become bigger or more extensive.",
    "cn_def": "擴大",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make or become bigger or more extensive.",
        "cn_def": "擴大"
      }
    ]
  },
  "expand": {
    "pos": "v.",
    "en_def": "to become or make larger or more extensive.",
    "cn_def": "擴張",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to become or make larger or more extensive.",
        "cn_def": "擴張"
      }
    ]
  },
  "nonetheless": {
    "pos": "adv.",
    "en_def": "in spite of that; nevertheless.",
    "cn_def": "儘管如此",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in spite of that; nevertheless.",
        "cn_def": "儘管如此"
      }
    ]
  },
  "nevertheless": {
    "pos": "adv.",
    "en_def": "in spite of that; notwithstanding; all the same.",
    "cn_def": "然而；儘管如此",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in spite of that; notwithstanding; all the same.",
        "cn_def": "然而；儘管如此"
      }
    ]
  },
  "however": {
    "pos": "adv.",
    "en_def": "used to introduce a statement that contrasts with or seems to contradict something that has been said previously.",
    "cn_def": "然而",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "used to introduce a statement that contrasts with or seems to contradict something that has been said previously.",
        "cn_def": "然而"
      }
    ]
  },
  "exposition": {
    "pos": "n.",
    "en_def": "a comprehensive description and explanation of an idea or theory; a large public exhibition.",
    "cn_def": "詳細闡述；博覽會",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a comprehensive description and explanation of an idea or theory; a large public exhibition.",
        "cn_def": "詳細闡述；博覽會"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
