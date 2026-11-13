// Unit 4 Quiz Data: abundant – heavenly body
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Basic U4 - abundant – heavenly body",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "abundant",
    "pos": "adj.",
    "cn_def": "豐富的；大量的",
    "en_def": "Existing or available in large quantities; plentiful.",
    "sentence": "The region is famous for its {{BLANK}} sunshine, which makes it the absolute perfect place for growing high-quality wine grapes.",
    "cn": "該地區以其豐富的陽光而聞名，這使得它成為種植高品質釀酒葡萄絕對完美的地方。"
  },
  {
    "word": "resourceful",
    "pos": "adj.",
    "cn_def": "足智多謀的",
    "en_def": "Having the ability to find quick and clever ways to overcome difficulties.",
    "sentence": "The {{BLANK}} survivor managed to build a safe shelter out of broken tree branches and large green leaves in the jungle.",
    "cn": "這位足智多謀的倖存者設法在叢林裡用斷裂的樹枝和巨大的綠葉建了一個安全的庇護所。"
  },
  {
    "word": "extreme",
    "pos": "adj.",
    "cn_def": "極端的",
    "en_def": "Reaching a high or the highest degree; very great.",
    "sentence": "People who participate in {{BLANK}} sports must be fully aware of the serious physical risks before they start their dangerous activities.",
    "cn": "參與極端的運動的人在開始他們危險的活動之前，必須充分了解嚴重的身體風險。"
  },
  {
    "word": "broad",
    "pos": "adj.",
    "cn_def": "寬闊的；廣泛的",
    "en_def": "Having an ample distance from side to side; wide.",
    "sentence": "The experienced politician gave a {{BLANK}} overview of his new economic plan, touching on taxes, healthcare, and educational reforms.",
    "cn": "這位經驗豐富的政治人物對他的新經濟計畫做了一個廣泛的概述，涉及稅收、醫療和教育改革。"
  },
  {
    "word": "steep",
    "pos": "v.",
    "cn_def": "浸泡",
    "en_def": "To soak food or tea in water or other liquid to extract its flavor.",
    "sentence": "Climbing up the extremely {{BLANK}} hill completely tired us out, but the breathtaking view at the top was entirely worth the effort.",
    "cn": "爬上極度陡峭的山丘讓我們完全累壞了，但山頂上令人驚嘆的景色完全值得這番努力。"
  },
  {
    "word": "awe-inspiring",
    "pos": "adj.",
    "cn_def": "令人驚嘆的；令人敬畏的",
    "en_def": "Arousing awe through being impressive or magnificent.",
    "sentence": "The view from the top of the snow-covered mountain was so {{BLANK}} that we stood there in complete silence for several minutes.",
    "cn": "從白雪覆蓋的山頂看下去的景色是如此令人驚嘆的，以至於我們完全安靜地在那裡站了好幾分鐘。"
  },
  {
    "word": "awesome",
    "pos": "adj.",
    "cn_def": "令人驚嘆的；極好的",
    "en_def": "Extremely impressive or daunting; inspiring great admiration.",
    "sentence": "The outdoor rock concert last night was absolutely {{BLANK}}, featuring incredible special effects and breathtaking performances by all the famous musicians.",
    "cn": "昨晚的戶外搖滾演唱會絕對是極好的，特色是令人難以置信的特效以及所有著名音樂家激動人心的表演。"
  },
  {
    "word": "rural",
    "pos": "adj.",
    "cn_def": "鄉村的",
    "en_def": "In, relating to, or characteristic of the countryside rather than the town.",
    "sentence": "The quiet {{BLANK}} area did not have many big grocery stores, but the air was perfectly clean and the local people were remarkably friendly.",
    "cn": "這個安靜的鄉村的地區沒有許多大型雜貨店，但空氣非常乾淨，當地人也異常地友善。"
  },
  {
    "word": "cosmopolitan",
    "pos": "adj.",
    "cn_def": "世界主義的；國際化的",
    "en_def": "Containing people from many different countries, cultures, and diverse backgrounds.",
    "sentence": "Taipei is a vibrant, {{BLANK}} city where modern technology frameworks seamlessly blend with various traditional cultures.",
    "cn": "台北是一個充滿活力的國際化城市，在這裡現代科技架構與各種傳統文化完美融合。"
  },
  {
    "word": "urban",
    "pos": "adj.",
    "cn_def": "城市的",
    "en_def": "In, relating to, or characteristic of a town or city.",
    "sentence": "The rapid growth of the {{BLANK}} population has forced the city government to eagerly build more high-rise apartment buildings.",
    "cn": "城市的人口快速成長，迫使市政府急切地建造更多高層公寓和高效率的公共交通系統。"
  },
  {
    "word": "civilized",
    "pos": "adj.",
    "cn_def": "文明的；有教養的",
    "en_def": "Polite and well-mannered; culturally, socially, and technologically advanced.",
    "sentence": "Instead of yelling angrily at each other, the two colleagues decided to sit down and have a perfectly {{BLANK}} discussion about their fundamental disagreement.",
    "cn": "這兩位同事決定不向對方生氣地大吼大叫，而是坐下來對他們根本的分歧進行一場完全有教養的討論。"
  },
  {
    "word": "isolated",
    "pos": "adj.",
    "cn_def": "孤立的；偏僻的",
    "en_def": "Far away from other places, buildings, or people; remote.",
    "sentence": "Because Vince didn't understand the local language at all, he often felt terribly {{BLANK}} and depressed when he first moved to the foreign country.",
    "cn": "因為文斯完全不懂當地語言，當他剛搬到這個外國國家時，他經常感到非常孤立的且沮喪。"
  },
  {
    "word": "alienated",
    "pos": "adj.",
    "cn_def": "感到疏離的；孤立的",
    "en_def": "Experiencing strong feelings of isolation, social detachment, or exclusion from others.",
    "sentence": "The tech intern felt completely {{BLANK}} during his first week because the team was occupied with a critical database crisis.",
    "cn": "這位科技實習生在第一週感到完全被孤立，因為團隊正忙於一場關鍵的資料庫危機。"
  },
  {
    "word": "heavenly",
    "pos": "adj.",
    "cn_def": "天堂般的；美好的",
    "en_def": "Of heaven, divine; very pleasing, wonderful.",
    "sentence": "Spending two relaxing weeks in a luxurious oceanfront resort in Tahiti sounds absolutely {{BLANK}}, especially after surviving such a stressful year at work.",
    "cn": "在大溪地的豪華海濱度假村度過兩個輕鬆的星期聽起來絕對是天堂般的，尤其是在熬過了工作壓力如此大且疲憊的一年之後。"
  },
  {
    "word": "extremely",
    "pos": "adv.",
    "cn_def": "極端地；非常",
    "en_def": "To a very great degree; very.",
    "sentence": "Although the highly anticipated science fiction movie was {{BLANK}} long, it was still incredibly fun to watch with my friends.",
    "cn": "儘管這部備受期待的科幻電影非常長，但和我的朋友們一起看仍然覺得難以置信地有趣。"
  },
  {
    "word": "extraordinarily",
    "pos": "adv.",
    "cn_def": "異常地；非凡地",
    "en_def": "In a very unusual or remarkable way.",
    "sentence": "The young gymnast performed an {{BLANK}} difficult routine that impressed all the strict judges and won her the gold medal.",
    "cn": "這位年輕的體操運動員表演了一套異常地困難的動作，讓所有嚴格的裁判印象深刻並為她贏得了金牌。"
  },
  {
    "word": "severely",
    "pos": "adv.",
    "cn_def": "嚴重地；嚴厲地",
    "en_def": "To an undesirably great or intense degree.",
    "sentence": "The old wooden bridge was {{BLANK}} damaged by the powerful storm, and it will take several months to fully repair it.",
    "cn": "這座古老的木橋被強烈的風暴嚴重地損壞，這將需要好幾個月才能完全修復它。"
  },
  {
    "word": "inland",
    "pos": "adv.",
    "cn_def": "往內陸地",
    "en_def": "Into or towards the interior of a country.",
    "sentence": "After spending a relaxing week at the coast, the tour traveled {{BLANK}} to explore the magnificent and remote mountain ranges.",
    "cn": "在海邊度過輕鬆的一週後，旅行團往內陸地行駛去探索壯麗且偏遠的山脈。"
  },
  {
    "word": "latitude",
    "pos": "n.",
    "cn_def": "緯度",
    "en_def": "The angular distance of a place north or south of the earth's equator.",
    "sentence": "Paris and Vancouver share the exact same {{BLANK}}, which partly explains why they might have some similar seasonal weather patterns.",
    "cn": "巴黎和溫哥華擁有完全相同的緯度，這部分解釋了為什麼它們的季節性天氣模式有些相似。"
  },
  {
    "word": "longitude",
    "pos": "n.",
    "cn_def": "經度",
    "en_def": "The angular distance of a place east or west of the meridian at Greenwich.",
    "sentence": "In geography class, the teacher explained how to use both latitude and {{BLANK}} to find a specific location on a map.",
    "cn": "在地理課上，老師解釋了如何使用緯度和經度來在地圖上找到特定位置。"
  },
  {
    "word": "altitude",
    "pos": "n.",
    "cn_def": "海拔；高度",
    "en_def": "The height of an object or point in relation to sea level or ground level.",
    "sentence": "The mountain climbers struggled to breathe easily because the {{BLANK}} was extremely high and the oxygen was incredibly thin.",
    "cn": "登山者呼吸困難，因為海拔極高且氧氣極其稀薄。"
  },
  {
    "word": "aptitude",
    "pos": "n.",
    "cn_def": "天資；才能",
    "en_def": "A natural ability to do something.",
    "sentence": "Even as a young child, Mozart showed an extraordinary {{BLANK}} for music and could play the piano perfectly without lessons.",
    "cn": "即使在小時候，莫札特就展現了非凡的音樂天資，不用上課就能完美地彈奏鋼琴。"
  },
  {
    "word": "attitude",
    "pos": "n.",
    "cn_def": "態度",
    "en_def": "A settled way of thinking or feeling about someone or something.",
    "sentence": "If you want to succeed in this difficult project, you must maintain a positive {{BLANK}} and never give up easily.",
    "cn": "如果你想在這個艱難的專案中取得成功，你必須保持積極的態度並且永不輕易放棄。"
  },
  {
    "word": "gratitude",
    "pos": "n.",
    "cn_def": "感激",
    "en_def": "The quality of being thankful; readiness to show appreciation.",
    "sentence": "The rescued hikers expressed their deep {{BLANK}} to the brave emergency workers who had risked their lives to save them.",
    "cn": "獲救的登山客對冒著生命危險拯救他們的勇敢急救人員表達了深深的感激。"
  },
  {
    "word": "abundance",
    "pos": "n.",
    "cn_def": "豐富；充足",
    "en_def": "A very large quantity of something.",
    "sentence": "Because of the unusually good weather this year, the local farmers were able to produce an {{BLANK}} of fresh vegetables.",
    "cn": "由於今年異常良好的天氣，當地農民得以生產出豐富的新鮮蔬菜。"
  },
  {
    "word": "resource",
    "pos": "n.",
    "cn_def": "資源",
    "en_def": "A stock or supply of money, materials, staff, and other assets.",
    "sentence": "The CEO strongly believes that the intelligent and hardworking employees in the company are undoubtedly its most valuable {{BLANK}}.",
    "cn": "執行長堅信公司裡聰明且努力工作的員工無疑是其最寶貴的資源。"
  },
  {
    "word": "folklore",
    "pos": "n.",
    "cn_def": "民間傳說",
    "en_def": "The traditional beliefs, customs, and stories of a community passed through generations.",
    "sentence": "Many of the fascinating stories collected in this thick historical book come directly from the country's rich and ancient {{BLANK}}.",
    "cn": "收集在這本厚重歷史書中的許多迷人故事直接來自該國豐富且古老的民間傳說。"
  },
  {
    "word": "legend",
    "pos": "n.",
    "cn_def": "傳奇故事",
    "en_def": "The traditional stories and customs specific to a particular area.",
    "sentence": "According to the {{BLANK}} passed down for generations, a mysterious ghost wanders the halls of the abandoned castle on the night of a full moon.",
    "cn": "根據流傳世代的傳奇故事，在滿月之夜，一個神祕的鬼魂會在廢棄城堡的走廊上遊蕩。"
  },
  {
    "word": "boarding pass",
    "pos": "n.",
    "cn_def": "登機證；船票",
    "en_def": "An official document given to a passenger that authorizes them to enter an aircraft or ship.",
    "sentence": "The corporate representative accidentally dropped her digital {{BLANK}} while looking for her automated platform credentials.",
    "cn": "這位公司代表在尋找她的自動化平台憑證時，不小心弄丟了她的數位登機證。"
  },
  {
    "word": "boarding school",
    "pos": "n.",
    "cn_def": "寄宿學校",
    "en_def": "A private school where pupils receive formal education while living on campus.",
    "sentence": "The wealthy businessman decided to send his adolescent son to a prestigious {{BLANK}} in England.",
    "cn": "這位富有的商人決定將他正值青少年的兒子送到英國一所聲譽卓著的寄宿學校。"
  },
  {
    "word": "ferries",
    "pos": "n.",
    "cn_def": "渡輪",
    "en_def": "A boat or ship for conveying passengers and goods.",
    "sentence": "Passenger {{BLANK}} usually run every 15 minutes to take people across the busy harbor during the peak summer tourist season.",
    "cn": "客運渡輪通常在夏季旅遊旺季每15分鐘開一次，載著人們穿過繁忙的港口。"
  },
  {
    "word": "steep slope",
    "pos": "n.",
    "cn_def": "陡坡",
    "en_def": "A hillside with a large angle.",
    "sentence": "The {{BLANK}} near the edge of the mountain is so challenging that inexperienced hikers are strongly advised not to walk there.",
    "cn": "靠近山邊的陡坡是這麼陡峭以至於強烈建議缺乏經驗的登山客不要走在那裡。"
  },
  {
    "word": "gentle slope",
    "pos": "n.",
    "cn_def": "緩坡",
    "en_def": "A piece of ground that inclines or rises gradually rather than steeply.",
    "sentence": "The active tourists enjoyed walking along the {{BLANK}} of the hill to observe rare local plants.",
    "cn": "活潑的遊客們喜歡沿著小山丘的緩坡散步，以觀察罕見的當地植物。"
  },
  {
    "word": "valley",
    "pos": "n.",
    "cn_def": "山谷",
    "en_def": "A low area of land situated between mountains or hills, typically with a river flowing through.",
    "sentence": "The historical community built an automated agricultural drone framework to monitor fields inside the deep {{BLANK}}.",
    "cn": "這個歷史悠久的社區建立了一個自動化農業無人機架構，以監控深谷內的農田。"
  },
  {
    "word": "plain",
    "pos": "n.",
    "cn_def": "平原",
    "en_def": "A large, extensive area of flat land with very few trees.",
    "sentence": "Thousands of sheep bred by the wealthy ranch owner are currently grazing across the open {{BLANK}}.",
    "cn": "這位富有農場主人所飼養的數千隻綿羊，目前正在開闊的平原上吃草。"
  },
  {
    "word": "basin",
    "pos": "n.",
    "cn_def": "盆地",
    "en_def": "A large bowl-shaped depression in the earth's surface surrounded by higher land.",
    "sentence": "The engineering team deployed high-tech weather sensors throughout the geographic {{BLANK}} to track heavy rainfall routines.",
    "cn": "工程團隊在整個地理盆地部署了高科技天氣感測器，以追蹤豪雨的常規習性。"
  },
  {
    "word": "tundra",
    "pos": "n.",
    "cn_def": "苔原；凍原",
    "en_def": "A vast, flat, and treeless Arctic region where the subsoil is permanently frozen.",
    "sentence": "The scientific research staff had to adapt to the extremely freezing climate of the northern {{BLANK}}.",
    "cn": "科學研究人員必須適應北部苔原極度寒冷的氣候。"
  },
  {
    "word": "cliff",
    "pos": "n.",
    "cn_def": "懸崖",
    "en_def": "A steep rock face, especially at the edge of the sea.",
    "sentence": "We cautiously stood on the edge of the mountain {{BLANK}} and looked down at the dark blue sea violently crashing against the sharp rocks.",
    "cn": "我們小心翼翼地站在山懸崖的邊緣，看著深藍色的海水猛烈地拍打著尖銳的岩石。"
  },
  {
    "word": "cliffhanger",
    "pos": "n.",
    "cn_def": "扣人心弦的結局；懸念",
    "en_def": "A dramatic and exciting ending to an episode of a serial, leaving the audience in suspense.",
    "sentence": "The exciting television show ended on a massive {{BLANK}}, leaving millions of loyal fans eagerly waiting for the next season to air.",
    "cn": "這部刺激的電視節目以一個巨大的扣人心弦的結局收尾，讓數百萬忠實粉絲熱切期待下一季的播出。"
  },
  {
    "word": "glaciers",
    "pos": "n.",
    "cn_def": "冰川",
    "en_def": "A slowly moving mass or river of ice formed by the accumulation and compaction of snow on mountains.",
    "sentence": "Thousands of years ago, the northern parts of Canada were entirely covered by massive {{BLANK}} that slowly shaped the geographical landscape.",
    "cn": "數千年前，加拿大北部完全被巨大的冰川覆蓋，這些冰川隨著時間緩慢地塑造了地理景觀。"
  },
  {
    "word": "awe",
    "pos": "n.",
    "cn_def": "敬畏",
    "en_def": "A feeling of reverential respect mixed with fear or wonder.",
    "sentence": "The young students stared in complete {{BLANK}} at the massive dinosaur skeleton prominently displayed in the center of the natural history museum.",
    "cn": "年輕的學生滿懷完全的敬畏凝視著自然史博物館中央醒目展示的巨大恐龍骨架。"
  },
  {
    "word": "suburb",
    "pos": "n.",
    "cn_def": "郊區",
    "en_def": "An outlying district of a city, especially a residential one.",
    "sentence": "Many families choose to move from the noisy city center to a peaceful {{BLANK}} for additional living space.",
    "cn": "許多家庭選擇從嘈雜的市中心搬到寧靜的郊區，以獲得額外的居住空間。"
  },
  {
    "word": "civilization",
    "pos": "n.",
    "cn_def": "文明",
    "en_def": "The stage of human social and cultural development considered most advanced.",
    "sentence": "Jacob eagerly read a fascinating history book about the ancient Egyptian {{BLANK}} and how they managed to build the giant pyramids so long ago.",
    "cn": "雅各熱切地讀了一本引人入勝的歷史書，關於古埃及文明以及他們是如何奇蹟般地建造巨大金字塔的。"
  },
  {
    "word": "civilians",
    "pos": "n.",
    "cn_def": "平民",
    "en_def": "A person not in the armed services or the police force.",
    "sentence": "The brave soldiers constantly risked their own lives to protect innocent {{BLANK}} from the dangerous crossfire during the exceptionally fierce battle.",
    "cn": "在這座廢墟城市異常激烈的戰鬥中，勇敢的士兵不斷冒著生命危險保護無辜的平民免受危險的交火波及。"
  },
  {
    "word": "isolation",
    "pos": "n.",
    "cn_def": "隔離；孤立無援",
    "en_def": "The process or fact of isolating or being isolated.",
    "sentence": "After living in complete {{BLANK}} in a remote wooden cabin for six months, the writer seriously struggled to interact with people when he returned.",
    "cn": "在偏遠的木屋裡完全隔離生活了六個月後，這位作家回到城市時，嚴重地難以與人們互動。"
  },
  {
    "word": "social distancing",
    "pos": "n.",
    "cn_def": "社交距離",
    "en_def": "The practice of maintaining a certain physical space between individuals to prevent transmitting illness.",
    "sentence": "Implementing proper {{BLANK}} in public transport vehicles successfully minimized the risk of seasonal chronic infections.",
    "cn": "在大眾運輸工具中保持適當的社交距離，成功降低了季節性慢性感染的風險。"
  },
  {
    "word": "heaven",
    "pos": "n.",
    "cn_def": "天堂",
    "en_def": "A place regarded as the abode of God; a place or state of supreme bliss.",
    "sentence": "The deeply religious woman firmly believed that she would eventually be joyfully reunited with all her deceased loved ones in {{BLANK}} after her passing.",
    "cn": "這位非常虔誠的婦女堅信，她去世後最終將在天堂與所有已故的摯愛歡樂地重逢。"
  },
  {
    "word": "broadened",
    "pos": "v.",
    "cn_def": "擴展；拓寬",
    "en_def": "To become larger; to expand to encompass more people, ideas, or things.",
    "sentence": "The successful international company quickly {{BLANK}} its search to find highly qualified software engineers from all around the world.",
    "cn": "這家成功的跨國公司迅速擴展了其搜尋範圍，以從世界各地尋找高度合格的軟體工程師。"
  },
  {
    "word": "board",
    "pos": "v.",
    "cn_def": "登上（大眾運輸工具）",
    "en_def": "To officially get on or enter a ship, aircraft, train, or other public vehicle.",
    "sentence": "Passengers are requested to {{BLANK}} the international flight immediately after completing the security check.",
    "cn": "旅客們被要求在完成安全檢查後，立刻登上這班國際航班。"
  },
  {
    "word": "steep",
    "pos": "v.",
    "cn_def": "浸泡",
    "en_def": "To soak food or tea in water or other liquid to extract its flavor.",
    "sentence": "You must {{BLANK}} your special herbal tea well for at least five minutes before drinking it to get the best possible flavor.",
    "cn": "你必須將你的特製花草茶好好浸泡至少五分鐘再喝，才能獲得最佳的風味。"
  },
  {
    "word": "civilize",
    "pos": "v.",
    "cn_def": "使文明；教化",
    "en_def": "To bring a place or people to a stage of social, cultural, and moral development considered more advanced.",
    "sentence": "The ambitious empire foolishly believed it was its grand destiny to completely conquer and {{BLANK}} the supposedly wild tribes living across the vast ocean.",
    "cn": "這個雄心勃勃的帝國愚蠢地相信，徹底征服並教化據稱生活在浩瀚海洋彼岸的野蠻部落是其偉大的命運。"
  },
  {
    "word": "isolated",
    "pos": "v.",
    "cn_def": "隔離；孤立",
    "en_def": "To remain alone or apart from others; to keep separate.",
    "sentence": "The doctors immediately commanded that people who've shown signs of having the highly infectious virus must be successfully {{BLANK}} in a special hospital room.",
    "cn": "醫生立刻下令，出現感染高度傳染性病毒的令人擔憂跡象的人，必須成功地在特殊的醫院病房被隔離。"
  },
  {
    "word": "alienate",
    "pos": "v.",
    "cn_def": "使疏離；使孤立；排斥",
    "en_def": "To cause someone to feel isolated, estranged, or excluded from a specific group or community.",
    "sentence": "The manager's arrogant decision to flaunt corporate revenue served to {{BLANK}} the hardworking engineering staff.",
    "cn": "經理張揚公司營收的傲慢決定，反而使辛勤工作的工程人員感到被疏離。"
  },
  {
    "word": "are grateful for",
    "pos": "phr.",
    "cn_def": "感謝的",
    "en_def": "To be thankful for something.",
    "sentence": "We write the card for our parents to show that we {{BLANK}} their devotion to raising kids.",
    "cn": "我們寫卡片感謝父母養育我們。"
  },
  {
    "word": "an abundance of",
    "pos": "phr.",
    "cn_def": "大量的",
    "en_def": "A very large quantity of something.",
    "sentence": "The luxurious five-star hotel buffet offered {{BLANK}} delicious seafood, including fresh crabs, oysters, and perfectly grilled salmon.",
    "cn": "豪華的五星級飯店自助餐提供了大量的美味海鮮，包含新鮮螃蟹、生蠔和完美燒烤的鮭魚。"
  },
  {
    "word": "human resources",
    "pos": "phr.",
    "cn_def": "人力資源",
    "en_def": "The personnel of a business or organization.",
    "sentence": "If you have any serious complaints about your current salary or working conditions, you should contact the {{BLANK}} department immediately.",
    "cn": "如果你對目前的薪水或工作條件有任何嚴重的抱怨，你應該立刻聯絡人力資源部門。"
  },
  {
    "word": "natural resources",
    "pos": "phr.",
    "cn_def": "自然資源",
    "en_def": "Materials or substances such as minerals, forests, water, and fertile land that occur in nature.",
    "sentence": "The country is heavily reliant on exporting its {{BLANK}}, such as coal and oil, to sustain its growing economy.",
    "cn": "該國嚴重依賴出口其自然資源（如煤炭和石油）來維持其不斷增長的經濟。"
  },
  {
    "word": "renewable energy resources",
    "pos": "phr.",
    "cn_def": "再生能源資源",
    "en_def": "Sources of energy that are not depleted by use, such as water, wind, or solar power.",
    "sentence": "To combat the severe effects of climate change, the government must invest heavily in {{BLANK}} instead of burning fossil fuels.",
    "cn": "為了對抗氣候變遷的嚴重影響，政府必須大量投資於再生能源資源，而不是燃燒化石燃料。"
  },
  {
    "word": "go to extremes",
    "pos": "phr.",
    "cn_def": "走極端",
    "en_def": "To do something much more than is usual or reasonable.",
    "sentence": "You don't need to {{BLANK}} to lose weight; just eat a balanced diet and exercise regularly every week.",
    "cn": "你不需要走極端來減肥；只要每週吃均衡的飲食並規律地運動即可。"
  },
  {
    "word": "budget",
    "pos": "n./v.",
    "cn_def": "預算；編列預算",
    "en_def": "An estimate of income and expenditure; to allow or provide a particular amount of money.",
    "sentence": "Fiona plans to {{BLANK}} her money very carefully this year so she can finally take a long trip through Europe next summer.",
    "cn": "費歐娜計畫今年非常謹慎地為她的錢編列預算，這樣她明年夏天終於能去歐洲進行一趟長途旅行。"
  },
  {
    "word": "on a tight budget",
    "pos": "phr.",
    "cn_def": "預算拮据",
    "en_def": "Having a limited amount of money to spend.",
    "sentence": "Because Henry is trying to save up enough money to buy his first house, he is currently living {{BLANK}}.",
    "cn": "因為亨利正試圖存夠錢買他的第一棟房子，他目前過著預算拮据的生活。"
  },
  {
    "word": "stay on budget",
    "pos": "phr.",
    "cn_def": "保持在預算內",
    "en_def": "To not spend more money than had been planned for.",
    "sentence": "To {{BLANK}} this month, we are going to have to significantly cut down on the amount of money we spend on expensive dinners.",
    "cn": "為了這個月保持在預算內，我們將不得不大幅削減我們在昂貴晚餐上花費的金額。"
  },
  {
    "word": "under budget",
    "pos": "phr.",
    "cn_def": "低於預算",
    "en_def": "Costing less than the amount of money that was estimated or planned.",
    "sentence": "Mr. Edwards happily thanked his dedicated team for successfully finishing the complicated construction project completely {{BLANK}}.",
    "cn": "愛德華先生快樂地感謝他專注的團隊成功地完全低於預算完成了複雜的建設專案。"
  },
  {
    "word": "out of my budget",
    "pos": "phr.",
    "cn_def": "超出某人的預算",
    "en_def": "Costing more money than someone can afford to spend.",
    "sentence": "That beautiful designer dress is absolutely stunning, but unfortunately, it is a little {{BLANK}} right now.",
    "cn": "那件美麗的設計師洋裝絕對令人驚豔，但不幸的是，它現在有點超出我的預算。"
  },
  {
    "word": "folk tale",
    "pos": "phr.",
    "cn_def": "民間故事",
    "en_def": "A story originating in popular culture, typically passed on by word of mouth.",
    "sentence": "The grandmother sat by the warm fire and told a fascinating {{BLANK}} about a clever fox and a foolish bear.",
    "cn": "祖母坐在溫暖的爐火旁，講了一個關於聰明狐狸和愚蠢熊的迷人民間故事。"
  },
  {
    "word": "folk music",
    "pos": "phr.",
    "cn_def": "民俗音樂",
    "en_def": "Music that originates in traditional popular culture or that is written in such a style.",
    "sentence": "We spent the entire evening at the local pub listening to lively {{BLANK}} played on acoustic guitars and violins.",
    "cn": "我們整個晚上都在當地的酒館裡聽著用原聲吉他和小提琴演奏的輕快民俗音樂。"
  },
  {
    "word": "broaden your horizons",
    "pos": "phr.",
    "cn_def": "拓展某人的視野",
    "en_def": "To expand one's range of interests, activities, and knowledge.",
    "sentence": "Working in a foreign country for a year will definitely give you an incredible chance to {{BLANK}} in the international business world.",
    "cn": "在外國工作一年絕對會給你一個難以置信的機會，在國際商業世界中拓展你的視野。"
  },
  {
    "word": "broaden her knowledge",
    "pos": "phr.",
    "cn_def": "增廣見聞；擴充知識",
    "en_def": "To increase what one knows about a subject.",
    "sentence": "Jill frequently read books and watched historical documentaries to {{BLANK}} of ancient Chinese culture while she was in college.",
    "cn": "潔兒在大學期間經常閱讀書籍和觀看歷史紀錄片，以擴充她對中國古代文化的知識。"
  },
  {
    "word": "aboard",
    "pos": "adv./prep.",
    "cn_def": "在（車、船、飛機）上",
    "en_def": "On or into a ship, aircraft, train, or other transport vehicle.",
    "sentence": "The experienced captain welcomed all the excited tourists {{BLANK}} the luxury cruise ship this morning.",
    "cn": "這位經驗豐富的船長今天上午歡迎所有興奮的遊客登上這艘豪華郵輪。"
  },
  {
    "word": "go sightseeing",
    "pos": "phr.",
    "cn_def": "去觀光",
    "en_def": "To visit interesting places, especially as a tourist.",
    "sentence": "I am so incredibly excited about our trip, and I absolutely can't wait to {{BLANK}} once we arrive in London.",
    "cn": "我對我們的旅行感到極度興奮，一旦我們抵達倫敦，我絕對等不及要去觀光了。"
  },
  {
    "word": "sightseeing tour",
    "pos": "phr.",
    "cn_def": "觀光行程",
    "en_def": "An organized journey to look at the sights of a place.",
    "sentence": "We booked a comprehensive {{BLANK}} that took us to all the major monuments and historical museums in the capital city.",
    "cn": "我們預訂了一個全面的觀光行程，帶我們參觀了首都所有主要的紀念碑和歷史博物館。"
  },
  {
    "word": "take it all in",
    "pos": "phr. v.",
    "cn_def": "吸收；領會；欺騙",
    "en_def": "To fully understand or absorb something heard or seen; to deceive.",
    "sentence": "The university professor's lecture was so complex and detailed that Kevin could not simply {{BLANK}} during the one-hour class.",
    "cn": "大學教授的演講是如此複雜和詳細，以至於凱文無法在短短一小時的課堂上將其全部吸收。"
  },
  {
    "word": "take in the view",
    "pos": "phr.",
    "cn_def": "欣賞風景",
    "en_def": "To spend time looking at a beautiful landscape.",
    "sentence": "We slowly drove our rented car along the beautiful coast and stopped frequently to {{BLANK}} of the sparkling ocean.",
    "cn": "我們慢慢地沿著美麗的海岸開著我們租來的車，並經常停下來欣賞波光粼粼海洋的風景。"
  },
  {
    "word": "ferry terminal",
    "pos": "phr.",
    "cn_def": "渡輪站",
    "en_def": "The building and area where ferries arrive and depart.",
    "sentence": "We arrived at the newly built {{BLANK}} almost an hour early to ensure we wouldn't miss our scheduled boat to the island.",
    "cn": "我們提早了將近一個小時抵達新建的渡輪站，以確保我們不會錯過預定前往島嶼的船。"
  },
  {
    "word": "inland city",
    "pos": "phr.",
    "cn_def": "內陸城市",
    "en_def": "A city located far from the sea or ocean.",
    "sentence": "Moving from a breezy coastal town to a busy, hot {{BLANK}} was a massive adjustment for the fisherman who loved the ocean.",
    "cn": "從微風徐徐的沿海城鎮搬到繁忙炎熱的內陸城市，對那位熱愛海洋的漁夫來說是個巨大的適應過程。"
  },
  {
    "word": "travel inland",
    "pos": "phr.",
    "cn_def": "往內陸旅行",
    "en_def": "To journey away from the coast toward the center of a country.",
    "sentence": "The courageous explorers decided to {{BLANK}} to discover the ancient ruins hidden deep within the dense, tropical jungle.",
    "cn": "勇敢的探險家決定往內陸旅行，以發現在茂密熱帶叢林深處隱藏的古老遺跡。"
  },
  {
    "word": "steeped in",
    "pos": "phr.",
    "cn_def": "充滿著...；沉浸於...",
    "en_def": "To have a lot of a particular quality or be heavily influenced by something.",
    "sentence": "The ancient stone ruins that were recently found deep in the jungle are entirely {{BLANK}} mystery and historical legends.",
    "cn": "最近在叢林深處發現的古老石頭遺跡完全充滿著神秘與歷史傳說。"
  },
  {
    "word": "steep price",
    "pos": "phr.",
    "cn_def": "高昂的價格",
    "en_def": "An unreasonably high cost.",
    "sentence": "The famous marketing company always charges a very {{BLANK}} for its professional consulting services and highly successful advertising campaigns.",
    "cn": "這家著名的行銷公司總是為其專業的諮詢服務和高度成功的廣告活動收取非常高昂的價格。"
  },
  {
    "word": "steep cliff",
    "pos": "phr.",
    "cn_def": "陡峭的懸崖",
    "en_def": "A cliff with a very sharp drop.",
    "sentence": "The beautiful white lighthouse was built dangerously close to a {{BLANK}} to warn passing cargo ships about the hidden rocks below.",
    "cn": "美麗的白色燈塔建在危險地靠近陡峭的懸崖的地方，以警告路過的貨輪下方有暗礁。"
  },
  {
    "word": "edge of a cliff",
    "pos": "phr.",
    "cn_def": "懸崖邊緣",
    "en_def": "The very brink or border of a steep rock face.",
    "sentence": "The frightened tourist mistakenly walked too close to the {{BLANK}} and almost dropped his expensive digital camera into the stormy ocean.",
    "cn": "受驚的遊客不小心走得太靠近懸崖邊緣，差點把昂貴的數位相機掉進暴風雨的海裡。"
  },
  {
    "word": "in awe of",
    "pos": "phr.",
    "cn_def": "對...感到敬畏/驚嘆",
    "en_def": "Having a great amount of respect or admiration for someone or something.",
    "sentence": "Even after working together for five years, I am still consistently {{BLANK}} her brilliant ability to solve complex mathematical problems.",
    "cn": "即使一起工作了五年，我仍然一直對她解決複雜數學問題的卓越能力感到驚嘆。"
  },
  {
    "word": "rural development",
    "pos": "phr.",
    "cn_def": "鄉村發展",
    "en_def": "The process of improving the quality of life and economic well-being of people living in rural areas.",
    "sentence": "The national government has proudly allocated billions of dollars specifically for {{BLANK}} to provide significantly better schools and hospitals for struggling farmers.",
    "cn": "國家政府已自豪地撥款數十億美元專門用於鄉村發展，為苦苦掙扎的農民提供好很多的學校和醫院。"
  },
  {
    "word": "rural landscape",
    "pos": "phr.",
    "cn_def": "鄉村風景",
    "en_def": "The visible features of an area of countryside.",
    "sentence": "The famous painter spent several years perfectly capturing the pure beauty of the traditional English {{BLANK}} with its green rolling hills and small farms.",
    "cn": "這位著名的畫家花了數年時間完美捕捉傳統英國鄉村風景的純粹之美，那裡有著綠意盎然的連綿山丘和小型農場。"
  },
  {
    "word": "ancient civilization",
    "pos": "phr.",
    "cn_def": "古文明",
    "en_def": "The earliest stage of human social development.",
    "sentence": "Exploring the majestic ruins of the Mayan {{BLANK}} hidden deep in the humid rainforest was an absolutely unforgettable experience for the young archaeology students.",
    "cn": "對年輕的考古學學生來說，探索隱藏在潮濕雨林深處雄偉的馬雅古文明遺跡是一次絕對難忘的經歷。"
  },
  {
    "word": "isolated incident",
    "pos": "phr.",
    "cn_def": "偶發事件",
    "en_def": "An event that is not part of a wider pattern or trend.",
    "sentence": "The police chief confidently assured the worried public that the recent bank robbery was merely an {{BLANK}} and not the frightening beginning of a crime wave.",
    "cn": "警察局長自信地向擔憂的民眾保證，最近的銀行搶劫案只是一起偶發事件，而不是犯罪浪潮的可怕開端。"
  },
  {
    "word": "quarantine",
    "pos": "n./v.",
    "cn_def": "隔離；檢疫",
    "en_def": "A period or state of isolation imposed to prevent the spread of disease.",
    "sentence": "Medical authorities placed the infected tourists in strict {{BLANK}} to avoid a widespread outbreak within the suburb.",
    "cn": "醫療當局將受感染的遊客進行嚴格隔離，以避免在郊區內爆發大規模疫情。"
  },
  {
    "word": "heavenly body",
    "pos": "phr.",
    "cn_def": "天體",
    "en_def": "A planet, star, or other celestial body.",
    "sentence": "Through the incredibly powerful telescope, the eager astronomy students observed the glowing {{BLANK}} moving slowly and gracefully across the dark, star-filled night sky.",
    "cn": "透過極高倍數的望遠鏡，熱切的天文學學生觀察到發光的天體緩慢且優雅地劃過黑暗、繁星點點的夜空。"
  }
];

const MCQS = [
  {
    "q": "The region is famous for its ______ sunshine, which makes it the absolute perfect place for growing high-quality wine grapes.",
    "options": [
      "awe-inspiring",
      "abundant",
      "civilized",
      "alienated"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The ______ survivor managed to build a safe shelter out of broken tree branches and large green leaves in the jungle.",
    "options": [
      "resourceful",
      "heavenly",
      "awe-inspiring",
      "broad"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "People who participate in ______ sports must be fully aware of the serious physical risks before they start their dangerous activities.",
    "options": [
      "awesome",
      "resourceful",
      "urban",
      "extreme"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The experienced politician gave a ______ overview of his new economic plan, touching on taxes, healthcare, and educational reforms.",
    "options": [
      "urban",
      "heavenly",
      "broad",
      "civilized"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Climbing up the extremely ______ hill completely tired us out, but the breathtaking view at the top was entirely worth the effort.",
    "options": [
      "civilize",
      "broadened",
      "isolated",
      "steep"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The view from the top of the snow-covered mountain was so ______ that we stood there in complete silence for several minutes.",
    "options": [
      "awe-inspiring",
      "abundant",
      "extreme",
      "rural"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The outdoor rock concert last night was absolutely ______, featuring incredible special effects and breathtaking performances by all the famous musicians.",
    "options": [
      "broad",
      "awesome",
      "civilized",
      "alienated"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The quiet ______ area did not have many big grocery stores, but the air was perfectly clean and the local people were remarkably friendly.",
    "options": [
      "broad",
      "awe-inspiring",
      "rural",
      "cosmopolitan"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Taipei is a vibrant, ______ city where modern technology frameworks seamlessly blend with various traditional cultures.",
    "options": [
      "broad",
      "heavenly",
      "awesome",
      "cosmopolitan"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The rapid growth of the ______ population has forced the city government to eagerly build more high-rise apartment buildings.",
    "options": [
      "heavenly",
      "urban",
      "awesome",
      "resourceful"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Instead of yelling angrily at each other, the two colleagues decided to sit down and have a perfectly ______ discussion about their fundamental disagreement.",
    "options": [
      "civilized",
      "extreme",
      "awe-inspiring",
      "urban"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Because Vince didn't understand the local language at all, he often felt terribly ______ and depressed when he first moved to the foreign country.",
    "options": [
      "awe-inspiring",
      "awesome",
      "isolated",
      "resourceful"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The tech intern felt completely ______ during his first week because the team was occupied with a critical database crisis.",
    "options": [
      "awe-inspiring",
      "alienated",
      "isolated",
      "civilized"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Spending two relaxing weeks in a luxurious oceanfront resort in Tahiti sounds absolutely ______, especially after surviving such a stressful year at work.",
    "options": [
      "heavenly",
      "awesome",
      "urban",
      "isolated"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Although the highly anticipated science fiction movie was ______ long, it was still incredibly fun to watch with my friends.",
    "options": [
      "inland",
      "extraordinarily",
      "severely",
      "extremely"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The young gymnast performed an ______ difficult routine that impressed all the strict judges and won her the gold medal.",
    "options": [
      "inland",
      "severely",
      "extraordinarily",
      "extremely"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The old wooden bridge was ______ damaged by the powerful storm, and it will take several months to fully repair it.",
    "options": [
      "extremely",
      "extraordinarily",
      "inland",
      "severely"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "After spending a relaxing week at the coast, the tour traveled ______ to explore the magnificent and remote mountain ranges.",
    "options": [
      "inland",
      "severely",
      "extremely",
      "extraordinarily"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Paris and Vancouver share the exact same ______, which partly explains why they might have some similar seasonal weather patterns.",
    "options": [
      "glaciers",
      "latitude",
      "gentle slope",
      "awe"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "In geography class, the teacher explained how to use both latitude and ______ to find a specific location on a map.",
    "options": [
      "valley",
      "heaven",
      "longitude",
      "suburb"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The mountain climbers struggled to breathe easily because the ______ was extremely high and the oxygen was incredibly thin.",
    "options": [
      "abundance",
      "folklore",
      "aptitude",
      "altitude"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Even as a young child, Mozart showed an extraordinary ______ for music and could play the piano perfectly without lessons.",
    "options": [
      "isolation",
      "aptitude",
      "gratitude",
      "valley"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "If you want to succeed in this difficult project, you must maintain a positive ______ and never give up easily.",
    "options": [
      "aptitude",
      "folklore",
      "attitude",
      "cliff"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The rescued hikers expressed their deep ______ to the brave emergency workers who had risked their lives to save them.",
    "options": [
      "gratitude",
      "social distancing",
      "gentle slope",
      "legend"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Because of the unusually good weather this year, the local farmers were able to produce an ______ of fresh vegetables.",
    "options": [
      "altitude",
      "boarding pass",
      "tundra",
      "abundance"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The CEO strongly believes that the intelligent and hardworking employees in the company are undoubtedly its most valuable ______.",
    "options": [
      "resource",
      "longitude",
      "legend",
      "glaciers"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Many of the fascinating stories collected in this thick historical book come directly from the country's rich and ancient ______.",
    "options": [
      "civilization",
      "folklore",
      "valley",
      "basin"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "According to the ______ passed down for generations, a mysterious ghost wanders the halls of the abandoned castle on the night of a full moon.",
    "options": [
      "cliff",
      "tundra",
      "legend",
      "gentle slope"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The corporate representative accidentally dropped her digital ______ while looking for her automated platform credentials.",
    "options": [
      "cliff",
      "gratitude",
      "valley",
      "boarding pass"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The wealthy businessman decided to send his adolescent son to a prestigious ______ in England.",
    "options": [
      "cliffhanger",
      "altitude",
      "boarding school",
      "latitude"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Passenger ______ usually run every 15 minutes to take people across the busy harbor during the peak summer tourist season.",
    "options": [
      "awe",
      "ferries",
      "folklore",
      "attitude"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The ______ near the edge of the mountain is so challenging that inexperienced hikers are strongly advised not to walk there.",
    "options": [
      "steep slope",
      "ferries",
      "basin",
      "civilians"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The active tourists enjoyed walking along the ______ of the hill to observe rare local plants.",
    "options": [
      "abundance",
      "gentle slope",
      "boarding school",
      "social distancing"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The historical community built an automated agricultural drone framework to monitor fields inside the deep ______.",
    "options": [
      "valley",
      "steep slope",
      "basin",
      "abundance"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "Thousands of sheep bred by the wealthy ranch owner are currently grazing across the open ______.",
    "options": [
      "basin",
      "cliffhanger",
      "longitude",
      "plain"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "The engineering team deployed high-tech weather sensors throughout the geographic ______ to track heavy rainfall routines.",
    "options": [
      "latitude",
      "longitude",
      "basin",
      "legend"
    ],
    "answer": 2,
    "vocabIndex": 35
  },
  {
    "q": "The scientific research staff had to adapt to the extremely freezing climate of the northern ______.",
    "options": [
      "tundra",
      "abundance",
      "isolation",
      "gentle slope"
    ],
    "answer": 0,
    "vocabIndex": 36
  },
  {
    "q": "We cautiously stood on the edge of the mountain ______ and looked down at the dark blue sea violently crashing against the sharp rocks.",
    "options": [
      "tundra",
      "social distancing",
      "cliff",
      "ferries"
    ],
    "answer": 2,
    "vocabIndex": 37
  },
  {
    "q": "The exciting television show ended on a massive ______, leaving millions of loyal fans eagerly waiting for the next season to air.",
    "options": [
      "tundra",
      "aptitude",
      "gratitude",
      "cliffhanger"
    ],
    "answer": 3,
    "vocabIndex": 38
  },
  {
    "q": "Thousands of years ago, the northern parts of Canada were entirely covered by massive ______ that slowly shaped the geographical landscape.",
    "options": [
      "folklore",
      "glaciers",
      "legend",
      "boarding school"
    ],
    "answer": 1,
    "vocabIndex": 39
  },
  {
    "q": "The young students stared in complete ______ at the massive dinosaur skeleton prominently displayed in the center of the natural history museum.",
    "options": [
      "awe",
      "gratitude",
      "aptitude",
      "basin"
    ],
    "answer": 0,
    "vocabIndex": 40
  },
  {
    "q": "Many families choose to move from the noisy city center to a peaceful ______ for additional living space.",
    "options": [
      "longitude",
      "valley",
      "suburb",
      "tundra"
    ],
    "answer": 2,
    "vocabIndex": 41
  },
  {
    "q": "Jacob eagerly read a fascinating history book about the ancient Egyptian ______ and how they managed to build the giant pyramids so long ago.",
    "options": [
      "isolation",
      "civilization",
      "gratitude",
      "boarding pass"
    ],
    "answer": 1,
    "vocabIndex": 42
  },
  {
    "q": "The brave soldiers constantly risked their own lives to protect innocent ______ from the dangerous crossfire during the exceptionally fierce battle.",
    "options": [
      "ferries",
      "suburb",
      "gentle slope",
      "civilians"
    ],
    "answer": 3,
    "vocabIndex": 43
  },
  {
    "q": "After living in complete ______ in a remote wooden cabin for six months, the writer seriously struggled to interact with people when he returned.",
    "options": [
      "cliffhanger",
      "isolation",
      "boarding school",
      "gentle slope"
    ],
    "answer": 1,
    "vocabIndex": 44
  },
  {
    "q": "Implementing proper ______ in public transport vehicles successfully minimized the risk of seasonal chronic infections.",
    "options": [
      "glaciers",
      "boarding pass",
      "social distancing",
      "cliff"
    ],
    "answer": 2,
    "vocabIndex": 45
  },
  {
    "q": "The deeply religious woman firmly believed that she would eventually be joyfully reunited with all her deceased loved ones in ______ after her passing.",
    "options": [
      "aptitude",
      "altitude",
      "valley",
      "heaven"
    ],
    "answer": 3,
    "vocabIndex": 46
  },
  {
    "q": "The successful international company quickly ______ its search to find highly qualified software engineers from all around the world.",
    "options": [
      "broadened",
      "alienate",
      "civilize",
      "board"
    ],
    "answer": 0,
    "vocabIndex": 47
  },
  {
    "q": "Passengers are requested to ______ the international flight immediately after completing the security check.",
    "options": [
      "isolated",
      "civilize",
      "alienate",
      "board"
    ],
    "answer": 3,
    "vocabIndex": 48
  },
  {
    "q": "You must ______ your special herbal tea well for at least five minutes before drinking it to get the best possible flavor.",
    "options": [
      "broadened",
      "isolated",
      "steep",
      "board"
    ],
    "answer": 2,
    "vocabIndex": 49
  },
  {
    "q": "The ambitious empire foolishly believed it was its grand destiny to completely conquer and ______ the supposedly wild tribes living across the vast ocean.",
    "options": [
      "broadened",
      "civilize",
      "alienate",
      "isolated"
    ],
    "answer": 1,
    "vocabIndex": 50
  },
  {
    "q": "The doctors immediately commanded that people who've shown signs of having the highly infectious virus must be successfully ______ in a special hospital room.",
    "options": [
      "isolated",
      "alienate",
      "civilize",
      "steep"
    ],
    "answer": 0,
    "vocabIndex": 51
  },
  {
    "q": "The manager's arrogant decision to flaunt corporate revenue served to ______ the hardworking engineering staff.",
    "options": [
      "isolated",
      "board",
      "alienate",
      "civilize"
    ],
    "answer": 2,
    "vocabIndex": 52
  },
  {
    "q": "We write the card for our parents to show that we ______ their devotion to raising kids.",
    "options": [
      "sightseeing tour",
      "heavenly body",
      "isolated incident",
      "are grateful for"
    ],
    "answer": 3,
    "vocabIndex": 53
  },
  {
    "q": "The luxurious five-star hotel buffet offered ______ delicious seafood, including fresh crabs, oysters, and perfectly grilled salmon.",
    "options": [
      "an abundance of",
      "out of my budget",
      "renewable energy resources",
      "inland city"
    ],
    "answer": 0,
    "vocabIndex": 54
  },
  {
    "q": "If you have any serious complaints about your current salary or working conditions, you should contact the ______ department immediately.",
    "options": [
      "take it all in",
      "human resources",
      "renewable energy resources",
      "broaden her knowledge"
    ],
    "answer": 1,
    "vocabIndex": 55
  },
  {
    "q": "The country is heavily reliant on exporting its ______, such as coal and oil, to sustain its growing economy.",
    "options": [
      "natural resources",
      "sightseeing tour",
      "isolated incident",
      "go to extremes"
    ],
    "answer": 0,
    "vocabIndex": 56
  },
  {
    "q": "To combat the severe effects of climate change, the government must invest heavily in ______ instead of burning fossil fuels.",
    "options": [
      "edge of a cliff",
      "steep price",
      "in awe of",
      "renewable energy resources"
    ],
    "answer": 3,
    "vocabIndex": 57
  },
  {
    "q": "You don't need to ______ to lose weight; just eat a balanced diet and exercise regularly every week.",
    "options": [
      "are grateful for",
      "in awe of",
      "go to extremes",
      "broaden her knowledge"
    ],
    "answer": 2,
    "vocabIndex": 58
  },
  {
    "q": "Fiona plans to ______ her money very carefully this year so she can finally take a long trip through Europe next summer.",
    "options": [
      "out of my budget",
      "budget",
      "folk music",
      "aboard"
    ],
    "answer": 1,
    "vocabIndex": 59
  },
  {
    "q": "Because Henry is trying to save up enough money to buy his first house, he is currently living ______.",
    "options": [
      "on a tight budget",
      "natural resources",
      "folk tale",
      "rural landscape"
    ],
    "answer": 0,
    "vocabIndex": 60
  },
  {
    "q": "To ______ this month, we are going to have to significantly cut down on the amount of money we spend on expensive dinners.",
    "options": [
      "steep cliff",
      "folk tale",
      "stay on budget",
      "take it all in"
    ],
    "answer": 2,
    "vocabIndex": 61
  },
  {
    "q": "Mr. Edwards happily thanked his dedicated team for successfully finishing the complicated construction project completely ______.",
    "options": [
      "stay on budget",
      "quarantine",
      "rural development",
      "under budget"
    ],
    "answer": 3,
    "vocabIndex": 62
  },
  {
    "q": "That beautiful designer dress is absolutely stunning, but unfortunately, it is a little ______ right now.",
    "options": [
      "isolated incident",
      "out of my budget",
      "natural resources",
      "quarantine"
    ],
    "answer": 1,
    "vocabIndex": 63
  },
  {
    "q": "The grandmother sat by the warm fire and told a fascinating ______ about a clever fox and a foolish bear.",
    "options": [
      "sightseeing tour",
      "stay on budget",
      "out of my budget",
      "folk tale"
    ],
    "answer": 3,
    "vocabIndex": 64
  },
  {
    "q": "We spent the entire evening at the local pub listening to lively ______ played on acoustic guitars and violins.",
    "options": [
      "budget",
      "broaden your horizons",
      "folk music",
      "stay on budget"
    ],
    "answer": 2,
    "vocabIndex": 65
  },
  {
    "q": "Working in a foreign country for a year will definitely give you an incredible chance to ______ in the international business world.",
    "options": [
      "rural development",
      "broaden your horizons",
      "travel inland",
      "steeped in"
    ],
    "answer": 1,
    "vocabIndex": 66
  },
  {
    "q": "Jill frequently read books and watched historical documentaries to ______ of ancient Chinese culture while she was in college.",
    "options": [
      "broaden her knowledge",
      "stay on budget",
      "travel inland",
      "inland city"
    ],
    "answer": 0,
    "vocabIndex": 67
  },
  {
    "q": "The experienced captain welcomed all the excited tourists ______ the luxury cruise ship this morning.",
    "options": [
      "are grateful for",
      "sightseeing tour",
      "aboard",
      "travel inland"
    ],
    "answer": 2,
    "vocabIndex": 68
  },
  {
    "q": "I am so incredibly excited about our trip, and I absolutely can't wait to ______ once we arrive in London.",
    "options": [
      "budget",
      "go sightseeing",
      "edge of a cliff",
      "travel inland"
    ],
    "answer": 1,
    "vocabIndex": 69
  },
  {
    "q": "We booked a comprehensive ______ that took us to all the major monuments and historical museums in the capital city.",
    "options": [
      "budget",
      "out of my budget",
      "travel inland",
      "sightseeing tour"
    ],
    "answer": 3,
    "vocabIndex": 70
  },
  {
    "q": "The university professor's lecture was so complex and detailed that Kevin could not simply ______ during the one-hour class.",
    "options": [
      "take it all in",
      "steeped in",
      "on a tight budget",
      "under budget"
    ],
    "answer": 0,
    "vocabIndex": 71
  },
  {
    "q": "We slowly drove our rented car along the beautiful coast and stopped frequently to ______ of the sparkling ocean.",
    "options": [
      "folk music",
      "take in the view",
      "isolated incident",
      "renewable energy resources"
    ],
    "answer": 1,
    "vocabIndex": 72
  },
  {
    "q": "We arrived at the newly built ______ almost an hour early to ensure we wouldn't miss our scheduled boat to the island.",
    "options": [
      "aboard",
      "steep cliff",
      "ferry terminal",
      "quarantine"
    ],
    "answer": 2,
    "vocabIndex": 73
  },
  {
    "q": "Moving from a breezy coastal town to a busy, hot ______ was a massive adjustment for the fisherman who loved the ocean.",
    "options": [
      "inland city",
      "steep cliff",
      "sightseeing tour",
      "renewable energy resources"
    ],
    "answer": 0,
    "vocabIndex": 74
  },
  {
    "q": "The courageous explorers decided to ______ to discover the ancient ruins hidden deep within the dense, tropical jungle.",
    "options": [
      "under budget",
      "sightseeing tour",
      "natural resources",
      "travel inland"
    ],
    "answer": 3,
    "vocabIndex": 75
  },
  {
    "q": "The ancient stone ruins that were recently found deep in the jungle are entirely ______ mystery and historical legends.",
    "options": [
      "steeped in",
      "under budget",
      "folk music",
      "go to extremes"
    ],
    "answer": 0,
    "vocabIndex": 76
  },
  {
    "q": "The famous marketing company always charges a very ______ for its professional consulting services and highly successful advertising campaigns.",
    "options": [
      "rural landscape",
      "in awe of",
      "steep price",
      "isolated incident"
    ],
    "answer": 2,
    "vocabIndex": 77
  },
  {
    "q": "The beautiful white lighthouse was built dangerously close to a ______ to warn passing cargo ships about the hidden rocks below.",
    "options": [
      "sightseeing tour",
      "steep cliff",
      "steeped in",
      "folk tale"
    ],
    "answer": 1,
    "vocabIndex": 78
  },
  {
    "q": "The frightened tourist mistakenly walked too close to the ______ and almost dropped his expensive digital camera into the stormy ocean.",
    "options": [
      "budget",
      "folk tale",
      "in awe of",
      "edge of a cliff"
    ],
    "answer": 3,
    "vocabIndex": 79
  },
  {
    "q": "Even after working together for five years, I am still consistently ______ her brilliant ability to solve complex mathematical problems.",
    "options": [
      "heavenly body",
      "in awe of",
      "go to extremes",
      "renewable energy resources"
    ],
    "answer": 1,
    "vocabIndex": 80
  },
  {
    "q": "The national government has proudly allocated billions of dollars specifically for ______ to provide significantly better schools and hospitals for struggling farmers.",
    "options": [
      "human resources",
      "go to extremes",
      "steeped in",
      "rural development"
    ],
    "answer": 3,
    "vocabIndex": 81
  },
  {
    "q": "The famous painter spent several years perfectly capturing the pure beauty of the traditional English ______ with its green rolling hills and small farms.",
    "options": [
      "on a tight budget",
      "steeped in",
      "rural landscape",
      "an abundance of"
    ],
    "answer": 2,
    "vocabIndex": 82
  },
  {
    "q": "Exploring the majestic ruins of the Mayan ______ hidden deep in the humid rainforest was an absolutely unforgettable experience for the young archaeology students.",
    "options": [
      "ancient civilization",
      "budget",
      "steeped in",
      "take it all in"
    ],
    "answer": 0,
    "vocabIndex": 83
  },
  {
    "q": "The police chief confidently assured the worried public that the recent bank robbery was merely an ______ and not the frightening beginning of a crime wave.",
    "options": [
      "on a tight budget",
      "isolated incident",
      "steep cliff",
      "folk tale"
    ],
    "answer": 1,
    "vocabIndex": 84
  },
  {
    "q": "Medical authorities placed the infected tourists in strict ______ to avoid a widespread outbreak within the suburb.",
    "options": [
      "quarantine",
      "broaden her knowledge",
      "are grateful for",
      "steep cliff"
    ],
    "answer": 0,
    "vocabIndex": 85
  },
  {
    "q": "Through the incredibly powerful telescope, the eager astronomy students observed the glowing ______ moving slowly and gracefully across the dark, star-filled night sky.",
    "options": [
      "an abundance of",
      "edge of a cliff",
      "inland city",
      "heavenly body"
    ],
    "answer": 3,
    "vocabIndex": 86
  }
];

const LOOKUP = {
  "abundant": {
    "pos": "adj.",
    "en_def": "Existing or available in large quantities; plentiful.",
    "cn_def": "豐富的；大量的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Existing or available in large quantities; plentiful.",
        "cn_def": "豐富的；大量的"
      }
    ]
  },
  "resourceful": {
    "pos": "adj.",
    "en_def": "Having the ability to find quick and clever ways to overcome difficulties.",
    "cn_def": "足智多謀的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Having the ability to find quick and clever ways to overcome difficulties.",
        "cn_def": "足智多謀的"
      }
    ]
  },
  "extreme": {
    "pos": "adj.",
    "en_def": "Reaching a high or the highest degree; very great.",
    "cn_def": "極端的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Reaching a high or the highest degree; very great.",
        "cn_def": "極端的"
      }
    ]
  },
  "broad": {
    "pos": "adj.",
    "en_def": "Having an ample distance from side to side; wide.",
    "cn_def": "寬闊的；廣泛的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Having an ample distance from side to side; wide.",
        "cn_def": "寬闊的；廣泛的"
      }
    ]
  },
  "steep": {
    "pos": "v.",
    "en_def": "To soak food or tea in water or other liquid to extract its flavor.",
    "cn_def": "浸泡",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To soak food or tea in water or other liquid to extract its flavor.",
        "cn_def": "浸泡"
      },
      {
        "pos": "v.",
        "en_def": "To soak food or tea in water or other liquid to extract its flavor.",
        "cn_def": "浸泡"
      }
    ]
  },
  "awe-inspiring": {
    "pos": "adj.",
    "en_def": "Arousing awe through being impressive or magnificent.",
    "cn_def": "令人驚嘆的；令人敬畏的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Arousing awe through being impressive or magnificent.",
        "cn_def": "令人驚嘆的；令人敬畏的"
      }
    ]
  },
  "awesome": {
    "pos": "adj.",
    "en_def": "Extremely impressive or daunting; inspiring great admiration.",
    "cn_def": "令人驚嘆的；極好的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Extremely impressive or daunting; inspiring great admiration.",
        "cn_def": "令人驚嘆的；極好的"
      }
    ]
  },
  "rural": {
    "pos": "adj.",
    "en_def": "In, relating to, or characteristic of the countryside rather than the town.",
    "cn_def": "鄉村的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "In, relating to, or characteristic of the countryside rather than the town.",
        "cn_def": "鄉村的"
      }
    ]
  },
  "cosmopolitan": {
    "pos": "adj.",
    "en_def": "Containing people from many different countries, cultures, and diverse backgrounds.",
    "cn_def": "世界主義的；國際化的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Containing people from many different countries, cultures, and diverse backgrounds.",
        "cn_def": "世界主義的；國際化的"
      }
    ]
  },
  "urban": {
    "pos": "adj.",
    "en_def": "In, relating to, or characteristic of a town or city.",
    "cn_def": "城市的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "In, relating to, or characteristic of a town or city.",
        "cn_def": "城市的"
      }
    ]
  },
  "civilized": {
    "pos": "adj.",
    "en_def": "Polite and well-mannered; culturally, socially, and technologically advanced.",
    "cn_def": "文明的；有教養的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Polite and well-mannered; culturally, socially, and technologically advanced.",
        "cn_def": "文明的；有教養的"
      }
    ]
  },
  "isolated": {
    "pos": "adj.",
    "en_def": "Far away from other places, buildings, or people; remote.",
    "cn_def": "孤立的；偏僻的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Far away from other places, buildings, or people; remote.",
        "cn_def": "孤立的；偏僻的"
      },
      {
        "pos": "v.",
        "en_def": "To remain alone or apart from others; to keep separate.",
        "cn_def": "隔離；孤立"
      }
    ]
  },
  "alienated": {
    "pos": "adj.",
    "en_def": "Experiencing strong feelings of isolation, social detachment, or exclusion from others.",
    "cn_def": "感到疏離的；孤立的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Experiencing strong feelings of isolation, social detachment, or exclusion from others.",
        "cn_def": "感到疏離的；孤立的"
      }
    ]
  },
  "heavenly": {
    "pos": "adj.",
    "en_def": "Of heaven, divine; very pleasing, wonderful.",
    "cn_def": "天堂般的；美好的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Of heaven, divine; very pleasing, wonderful.",
        "cn_def": "天堂般的；美好的"
      }
    ]
  },
  "extremely": {
    "pos": "adv.",
    "en_def": "To a very great degree; very.",
    "cn_def": "極端地；非常",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "To a very great degree; very.",
        "cn_def": "極端地；非常"
      }
    ]
  },
  "extraordinarily": {
    "pos": "adv.",
    "en_def": "In a very unusual or remarkable way.",
    "cn_def": "異常地；非凡地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "In a very unusual or remarkable way.",
        "cn_def": "異常地；非凡地"
      }
    ]
  },
  "severely": {
    "pos": "adv.",
    "en_def": "To an undesirably great or intense degree.",
    "cn_def": "嚴重地；嚴厲地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "To an undesirably great or intense degree.",
        "cn_def": "嚴重地；嚴厲地"
      }
    ]
  },
  "inland": {
    "pos": "adv.",
    "en_def": "Into or towards the interior of a country.",
    "cn_def": "往內陸地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "Into or towards the interior of a country.",
        "cn_def": "往內陸地"
      }
    ]
  },
  "latitude": {
    "pos": "n.",
    "en_def": "The angular distance of a place north or south of the earth's equator.",
    "cn_def": "緯度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The angular distance of a place north or south of the earth's equator.",
        "cn_def": "緯度"
      }
    ]
  },
  "longitude": {
    "pos": "n.",
    "en_def": "The angular distance of a place east or west of the meridian at Greenwich.",
    "cn_def": "經度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The angular distance of a place east or west of the meridian at Greenwich.",
        "cn_def": "經度"
      }
    ]
  },
  "altitude": {
    "pos": "n.",
    "en_def": "The height of an object or point in relation to sea level or ground level.",
    "cn_def": "海拔；高度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The height of an object or point in relation to sea level or ground level.",
        "cn_def": "海拔；高度"
      }
    ]
  },
  "aptitude": {
    "pos": "n.",
    "en_def": "A natural ability to do something.",
    "cn_def": "天資；才能",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A natural ability to do something.",
        "cn_def": "天資；才能"
      }
    ]
  },
  "attitude": {
    "pos": "n.",
    "en_def": "A settled way of thinking or feeling about someone or something.",
    "cn_def": "態度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A settled way of thinking or feeling about someone or something.",
        "cn_def": "態度"
      }
    ]
  },
  "gratitude": {
    "pos": "n.",
    "en_def": "The quality of being thankful; readiness to show appreciation.",
    "cn_def": "感激",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The quality of being thankful; readiness to show appreciation.",
        "cn_def": "感激"
      }
    ]
  },
  "abundance": {
    "pos": "n.",
    "en_def": "A very large quantity of something.",
    "cn_def": "豐富；充足",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A very large quantity of something.",
        "cn_def": "豐富；充足"
      }
    ]
  },
  "resource": {
    "pos": "n.",
    "en_def": "A stock or supply of money, materials, staff, and other assets.",
    "cn_def": "資源",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A stock or supply of money, materials, staff, and other assets.",
        "cn_def": "資源"
      }
    ]
  },
  "folklore": {
    "pos": "n.",
    "en_def": "The traditional beliefs, customs, and stories of a community passed through generations.",
    "cn_def": "民間傳說",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The traditional beliefs, customs, and stories of a community passed through generations.",
        "cn_def": "民間傳說"
      }
    ]
  },
  "legend": {
    "pos": "n.",
    "en_def": "The traditional stories and customs specific to a particular area.",
    "cn_def": "傳奇故事",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The traditional stories and customs specific to a particular area.",
        "cn_def": "傳奇故事"
      }
    ]
  },
  "boarding pass": {
    "pos": "n.",
    "en_def": "An official document given to a passenger that authorizes them to enter an aircraft or ship.",
    "cn_def": "登機證；船票",
    "combined": [
      {
        "pos": "n.",
        "en_def": "An official document given to a passenger that authorizes them to enter an aircraft or ship.",
        "cn_def": "登機證；船票"
      }
    ]
  },
  "boarding school": {
    "pos": "n.",
    "en_def": "A private school where pupils receive formal education while living on campus.",
    "cn_def": "寄宿學校",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A private school where pupils receive formal education while living on campus.",
        "cn_def": "寄宿學校"
      }
    ]
  },
  "ferries": {
    "pos": "n.",
    "en_def": "A boat or ship for conveying passengers and goods.",
    "cn_def": "渡輪",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A boat or ship for conveying passengers and goods.",
        "cn_def": "渡輪"
      }
    ]
  },
  "ferry": {
    "pos": "n.",
    "en_def": "A boat or ship for conveying passengers and goods.",
    "cn_def": "渡輪",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A boat or ship for conveying passengers and goods.",
        "cn_def": "渡輪"
      }
    ]
  },
  "steep slope": {
    "pos": "n.",
    "en_def": "A hillside with a large angle.",
    "cn_def": "陡坡",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A hillside with a large angle.",
        "cn_def": "陡坡"
      }
    ]
  },
  "gentle slope": {
    "pos": "n.",
    "en_def": "A piece of ground that inclines or rises gradually rather than steeply.",
    "cn_def": "緩坡",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A piece of ground that inclines or rises gradually rather than steeply.",
        "cn_def": "緩坡"
      }
    ]
  },
  "valley": {
    "pos": "n.",
    "en_def": "A low area of land situated between mountains or hills, typically with a river flowing through.",
    "cn_def": "山谷",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A low area of land situated between mountains or hills, typically with a river flowing through.",
        "cn_def": "山谷"
      }
    ]
  },
  "plain": {
    "pos": "n.",
    "en_def": "A large, extensive area of flat land with very few trees.",
    "cn_def": "平原",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A large, extensive area of flat land with very few trees.",
        "cn_def": "平原"
      }
    ]
  },
  "basin": {
    "pos": "n.",
    "en_def": "A large bowl-shaped depression in the earth's surface surrounded by higher land.",
    "cn_def": "盆地",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A large bowl-shaped depression in the earth's surface surrounded by higher land.",
        "cn_def": "盆地"
      }
    ]
  },
  "tundra": {
    "pos": "n.",
    "en_def": "A vast, flat, and treeless Arctic region where the subsoil is permanently frozen.",
    "cn_def": "苔原；凍原",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A vast, flat, and treeless Arctic region where the subsoil is permanently frozen.",
        "cn_def": "苔原；凍原"
      }
    ]
  },
  "cliff": {
    "pos": "n.",
    "en_def": "A steep rock face, especially at the edge of the sea.",
    "cn_def": "懸崖",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A steep rock face, especially at the edge of the sea.",
        "cn_def": "懸崖"
      }
    ]
  },
  "cliffhanger": {
    "pos": "n.",
    "en_def": "A dramatic and exciting ending to an episode of a serial, leaving the audience in suspense.",
    "cn_def": "扣人心弦的結局；懸念",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A dramatic and exciting ending to an episode of a serial, leaving the audience in suspense.",
        "cn_def": "扣人心弦的結局；懸念"
      }
    ]
  },
  "glaciers": {
    "pos": "n.",
    "en_def": "A slowly moving mass or river of ice formed by the accumulation and compaction of snow on mountains.",
    "cn_def": "冰川",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A slowly moving mass or river of ice formed by the accumulation and compaction of snow on mountains.",
        "cn_def": "冰川"
      }
    ]
  },
  "glacier": {
    "pos": "n.",
    "en_def": "A slowly moving mass or river of ice formed by the accumulation and compaction of snow on mountains.",
    "cn_def": "冰川",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A slowly moving mass or river of ice formed by the accumulation and compaction of snow on mountains.",
        "cn_def": "冰川"
      }
    ]
  },
  "awe": {
    "pos": "n.",
    "en_def": "A feeling of reverential respect mixed with fear or wonder.",
    "cn_def": "敬畏",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A feeling of reverential respect mixed with fear or wonder.",
        "cn_def": "敬畏"
      }
    ]
  },
  "suburb": {
    "pos": "n.",
    "en_def": "An outlying district of a city, especially a residential one.",
    "cn_def": "郊區",
    "combined": [
      {
        "pos": "n.",
        "en_def": "An outlying district of a city, especially a residential one.",
        "cn_def": "郊區"
      }
    ]
  },
  "civilization": {
    "pos": "n.",
    "en_def": "The stage of human social and cultural development considered most advanced.",
    "cn_def": "文明",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The stage of human social and cultural development considered most advanced.",
        "cn_def": "文明"
      }
    ]
  },
  "civilians": {
    "pos": "n.",
    "en_def": "A person not in the armed services or the police force.",
    "cn_def": "平民",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A person not in the armed services or the police force.",
        "cn_def": "平民"
      }
    ]
  },
  "civilian": {
    "pos": "n.",
    "en_def": "A person not in the armed services or the police force.",
    "cn_def": "平民",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A person not in the armed services or the police force.",
        "cn_def": "平民"
      }
    ]
  },
  "isolation": {
    "pos": "n.",
    "en_def": "The process or fact of isolating or being isolated.",
    "cn_def": "隔離；孤立無援",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The process or fact of isolating or being isolated.",
        "cn_def": "隔離；孤立無援"
      }
    ]
  },
  "social distancing": {
    "pos": "n.",
    "en_def": "The practice of maintaining a certain physical space between individuals to prevent transmitting illness.",
    "cn_def": "社交距離",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The practice of maintaining a certain physical space between individuals to prevent transmitting illness.",
        "cn_def": "社交距離"
      }
    ]
  },
  "heaven": {
    "pos": "n.",
    "en_def": "A place regarded as the abode of God; a place or state of supreme bliss.",
    "cn_def": "天堂",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A place regarded as the abode of God; a place or state of supreme bliss.",
        "cn_def": "天堂"
      }
    ]
  },
  "broadened": {
    "pos": "v.",
    "en_def": "To become larger; to expand to encompass more people, ideas, or things.",
    "cn_def": "擴展；拓寬",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To become larger; to expand to encompass more people, ideas, or things.",
        "cn_def": "擴展；拓寬"
      }
    ]
  },
  "broaden": {
    "pos": "v.",
    "en_def": "To become larger; to expand to encompass more people, ideas, or things.",
    "cn_def": "擴展；拓寬",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To become larger; to expand to encompass more people, ideas, or things.",
        "cn_def": "擴展；拓寬"
      }
    ]
  },
  "board": {
    "pos": "v.",
    "en_def": "To officially get on or enter a ship, aircraft, train, or other public vehicle.",
    "cn_def": "登上（大眾運輸工具）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To officially get on or enter a ship, aircraft, train, or other public vehicle.",
        "cn_def": "登上（大眾運輸工具）"
      }
    ]
  },
  "civilize": {
    "pos": "v.",
    "en_def": "To bring a place or people to a stage of social, cultural, and moral development considered more advanced.",
    "cn_def": "使文明；教化",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To bring a place or people to a stage of social, cultural, and moral development considered more advanced.",
        "cn_def": "使文明；教化"
      }
    ]
  },
  "isolate": {
    "pos": "v.",
    "en_def": "To remain alone or apart from others; to keep separate.",
    "cn_def": "隔離；孤立",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To remain alone or apart from others; to keep separate.",
        "cn_def": "隔離；孤立"
      }
    ]
  },
  "alienate": {
    "pos": "v.",
    "en_def": "To cause someone to feel isolated, estranged, or excluded from a specific group or community.",
    "cn_def": "使疏離；使孤立；排斥",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To cause someone to feel isolated, estranged, or excluded from a specific group or community.",
        "cn_def": "使疏離；使孤立；排斥"
      }
    ]
  },
  "are grateful for": {
    "pos": "phr.",
    "en_def": "To be thankful for something.",
    "cn_def": "感謝的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To be thankful for something.",
        "cn_def": "感謝的"
      }
    ]
  },
  "be grateful for": {
    "pos": "phr.",
    "en_def": "To be thankful for something.",
    "cn_def": "感謝的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To be thankful for something.",
        "cn_def": "感謝的"
      }
    ]
  },
  "an abundance of": {
    "pos": "phr.",
    "en_def": "A very large quantity of something.",
    "cn_def": "大量的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A very large quantity of something.",
        "cn_def": "大量的"
      }
    ]
  },
  "human resources": {
    "pos": "phr.",
    "en_def": "The personnel of a business or organization.",
    "cn_def": "人力資源",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The personnel of a business or organization.",
        "cn_def": "人力資源"
      }
    ]
  },
  "natural resources": {
    "pos": "phr.",
    "en_def": "Materials or substances such as minerals, forests, water, and fertile land that occur in nature.",
    "cn_def": "自然資源",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Materials or substances such as minerals, forests, water, and fertile land that occur in nature.",
        "cn_def": "自然資源"
      }
    ]
  },
  "renewable energy resources": {
    "pos": "phr.",
    "en_def": "Sources of energy that are not depleted by use, such as water, wind, or solar power.",
    "cn_def": "再生能源資源",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Sources of energy that are not depleted by use, such as water, wind, or solar power.",
        "cn_def": "再生能源資源"
      }
    ]
  },
  "go to extremes": {
    "pos": "phr.",
    "en_def": "To do something much more than is usual or reasonable.",
    "cn_def": "走極端",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To do something much more than is usual or reasonable.",
        "cn_def": "走極端"
      }
    ]
  },
  "budget": {
    "pos": "n./v.",
    "en_def": "An estimate of income and expenditure; to allow or provide a particular amount of money.",
    "cn_def": "預算；編列預算",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "An estimate of income and expenditure; to allow or provide a particular amount of money.",
        "cn_def": "預算；編列預算"
      }
    ]
  },
  "on a tight budget": {
    "pos": "phr.",
    "en_def": "Having a limited amount of money to spend.",
    "cn_def": "預算拮据",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Having a limited amount of money to spend.",
        "cn_def": "預算拮据"
      }
    ]
  },
  "stay on budget": {
    "pos": "phr.",
    "en_def": "To not spend more money than had been planned for.",
    "cn_def": "保持在預算內",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To not spend more money than had been planned for.",
        "cn_def": "保持在預算內"
      }
    ]
  },
  "under budget": {
    "pos": "phr.",
    "en_def": "Costing less than the amount of money that was estimated or planned.",
    "cn_def": "低於預算",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Costing less than the amount of money that was estimated or planned.",
        "cn_def": "低於預算"
      }
    ]
  },
  "out of one's budget": {
    "pos": "phr.",
    "en_def": "Costing more money than someone can afford to spend.",
    "cn_def": "超出某人的預算",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Costing more money than someone can afford to spend.",
        "cn_def": "超出某人的預算"
      }
    ]
  },
  "out of my budget": {
    "pos": "phr.",
    "en_def": "Costing more money than someone can afford to spend.",
    "cn_def": "超出某人的預算",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Costing more money than someone can afford to spend.",
        "cn_def": "超出某人的預算"
      }
    ]
  },
  "folk tale": {
    "pos": "phr.",
    "en_def": "A story originating in popular culture, typically passed on by word of mouth.",
    "cn_def": "民間故事",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A story originating in popular culture, typically passed on by word of mouth.",
        "cn_def": "民間故事"
      }
    ]
  },
  "folk music": {
    "pos": "phr.",
    "en_def": "Music that originates in traditional popular culture or that is written in such a style.",
    "cn_def": "民俗音樂",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Music that originates in traditional popular culture or that is written in such a style.",
        "cn_def": "民俗音樂"
      }
    ]
  },
  "broaden your horizons": {
    "pos": "phr.",
    "en_def": "To expand one's range of interests, activities, and knowledge.",
    "cn_def": "拓展某人的視野",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To expand one's range of interests, activities, and knowledge.",
        "cn_def": "拓展某人的視野"
      }
    ]
  },
  "broaden one's horizons": {
    "pos": "phr.",
    "en_def": "To expand one's range of interests, activities, and knowledge.",
    "cn_def": "拓展某人的視野",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To expand one's range of interests, activities, and knowledge.",
        "cn_def": "拓展某人的視野"
      }
    ]
  },
  "broaden one's knowledge": {
    "pos": "phr.",
    "en_def": "To increase what one knows about a subject.",
    "cn_def": "增廣見聞；擴充知識",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To increase what one knows about a subject.",
        "cn_def": "增廣見聞；擴充知識"
      }
    ]
  },
  "broaden her knowledge": {
    "pos": "phr.",
    "en_def": "To increase what one knows about a subject.",
    "cn_def": "增廣見聞；擴充知識",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To increase what one knows about a subject.",
        "cn_def": "增廣見聞；擴充知識"
      }
    ]
  },
  "aboard": {
    "pos": "adv./prep.",
    "en_def": "On or into a ship, aircraft, train, or other transport vehicle.",
    "cn_def": "在（車、船、飛機）上",
    "combined": [
      {
        "pos": "adv./prep.",
        "en_def": "On or into a ship, aircraft, train, or other transport vehicle.",
        "cn_def": "在（車、船、飛機）上"
      }
    ]
  },
  "go sightseeing": {
    "pos": "phr.",
    "en_def": "To visit interesting places, especially as a tourist.",
    "cn_def": "去觀光",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To visit interesting places, especially as a tourist.",
        "cn_def": "去觀光"
      }
    ]
  },
  "sightseeing tour": {
    "pos": "phr.",
    "en_def": "An organized journey to look at the sights of a place.",
    "cn_def": "觀光行程",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "An organized journey to look at the sights of a place.",
        "cn_def": "觀光行程"
      }
    ]
  },
  "take it all in": {
    "pos": "phr. v.",
    "en_def": "To fully understand or absorb something heard or seen; to deceive.",
    "cn_def": "吸收；領會；欺騙",
    "combined": [
      {
        "pos": "phr. v.",
        "en_def": "To fully understand or absorb something heard or seen; to deceive.",
        "cn_def": "吸收；領會；欺騙"
      }
    ]
  },
  "take in": {
    "pos": "phr. v.",
    "en_def": "To fully understand or absorb something heard or seen; to deceive.",
    "cn_def": "吸收；領會；欺騙",
    "combined": [
      {
        "pos": "phr. v.",
        "en_def": "To fully understand or absorb something heard or seen; to deceive.",
        "cn_def": "吸收；領會；欺騙"
      }
    ]
  },
  "take in the view": {
    "pos": "phr.",
    "en_def": "To spend time looking at a beautiful landscape.",
    "cn_def": "欣賞風景",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To spend time looking at a beautiful landscape.",
        "cn_def": "欣賞風景"
      }
    ]
  },
  "ferry terminal": {
    "pos": "phr.",
    "en_def": "The building and area where ferries arrive and depart.",
    "cn_def": "渡輪站",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The building and area where ferries arrive and depart.",
        "cn_def": "渡輪站"
      }
    ]
  },
  "inland city": {
    "pos": "phr.",
    "en_def": "A city located far from the sea or ocean.",
    "cn_def": "內陸城市",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A city located far from the sea or ocean.",
        "cn_def": "內陸城市"
      }
    ]
  },
  "travel inland": {
    "pos": "phr.",
    "en_def": "To journey away from the coast toward the center of a country.",
    "cn_def": "往內陸旅行",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To journey away from the coast toward the center of a country.",
        "cn_def": "往內陸旅行"
      }
    ]
  },
  "steeped in": {
    "pos": "phr.",
    "en_def": "To have a lot of a particular quality or be heavily influenced by something.",
    "cn_def": "充滿著...；沉浸於...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To have a lot of a particular quality or be heavily influenced by something.",
        "cn_def": "充滿著...；沉浸於..."
      }
    ]
  },
  "be steeped in": {
    "pos": "phr.",
    "en_def": "To have a lot of a particular quality or be heavily influenced by something.",
    "cn_def": "充滿著...；沉浸於...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To have a lot of a particular quality or be heavily influenced by something.",
        "cn_def": "充滿著...；沉浸於..."
      }
    ]
  },
  "steep price": {
    "pos": "phr.",
    "en_def": "An unreasonably high cost.",
    "cn_def": "高昂的價格",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "An unreasonably high cost.",
        "cn_def": "高昂的價格"
      }
    ]
  },
  "steep cliff": {
    "pos": "phr.",
    "en_def": "A cliff with a very sharp drop.",
    "cn_def": "陡峭的懸崖",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A cliff with a very sharp drop.",
        "cn_def": "陡峭的懸崖"
      }
    ]
  },
  "edge of a cliff": {
    "pos": "phr.",
    "en_def": "The very brink or border of a steep rock face.",
    "cn_def": "懸崖邊緣",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The very brink or border of a steep rock face.",
        "cn_def": "懸崖邊緣"
      }
    ]
  },
  "in awe of": {
    "pos": "phr.",
    "en_def": "Having a great amount of respect or admiration for someone or something.",
    "cn_def": "對...感到敬畏/驚嘆",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Having a great amount of respect or admiration for someone or something.",
        "cn_def": "對...感到敬畏/驚嘆"
      }
    ]
  },
  "rural development": {
    "pos": "phr.",
    "en_def": "The process of improving the quality of life and economic well-being of people living in rural areas.",
    "cn_def": "鄉村發展",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The process of improving the quality of life and economic well-being of people living in rural areas.",
        "cn_def": "鄉村發展"
      }
    ]
  },
  "rural landscape": {
    "pos": "phr.",
    "en_def": "The visible features of an area of countryside.",
    "cn_def": "鄉村風景",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The visible features of an area of countryside.",
        "cn_def": "鄉村風景"
      }
    ]
  },
  "ancient civilization": {
    "pos": "phr.",
    "en_def": "The earliest stage of human social development.",
    "cn_def": "古文明",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The earliest stage of human social development.",
        "cn_def": "古文明"
      }
    ]
  },
  "isolated incident": {
    "pos": "phr.",
    "en_def": "An event that is not part of a wider pattern or trend.",
    "cn_def": "偶發事件",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "An event that is not part of a wider pattern or trend.",
        "cn_def": "偶發事件"
      }
    ]
  },
  "quarantine": {
    "pos": "n./v.",
    "en_def": "A period or state of isolation imposed to prevent the spread of disease.",
    "cn_def": "隔離；檢疫",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "A period or state of isolation imposed to prevent the spread of disease.",
        "cn_def": "隔離；檢疫"
      }
    ]
  },
  "heavenly body": {
    "pos": "phr.",
    "en_def": "A planet, star, or other celestial body.",
    "cn_def": "天體",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A planet, star, or other celestial body.",
        "cn_def": "天體"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
