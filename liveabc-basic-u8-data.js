// Unit 8 Quiz Data: bulletproof – unprecedented
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Basic U8 - bulletproof – unprecedented",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "bulletproof",
    "pos": "adj.",
    "cn_def": "防彈的",
    "en_def": "designed to resist the penetration of bullets.",
    "sentence": "The courageous police officer survived the dangerous shooting entirely because he was wearing a heavy {{BLANK}} vest under his uniform.",
    "cn": "這名勇敢的警官之所以能在危險的槍擊事件中倖存，完全是因為他在制服下穿了一件沉重的防彈的背心。"
  },
  {
    "word": "fireproof",
    "pos": "adj.",
    "cn_def": "防火的",
    "en_def": "able to withstand fire or great heat.",
    "sentence": "Important government documents are typically stored securely inside a massive {{BLANK}} safe to ensure they are protected during an emergency.",
    "cn": "重要的政府文件通常安全地存放在一個巨大的防火的保險箱內，以確保它們在緊急情況下受到保護。"
  },
  {
    "word": "waterproof",
    "pos": "adj.",
    "cn_def": "防水的",
    "en_def": "impervious to water.",
    "sentence": "Ryan always carried a bright yellow {{BLANK}} jacket in his backpack just in case it suddenly rained during his long hike.",
    "cn": "萊恩總是在背包裡帶著一件亮黃色的防水的外套，以防在他長途徒步時突然下雨。"
  },
  {
    "word": "water-resistant",
    "pos": "adj.",
    "cn_def": "抗水的；防潑水的",
    "en_def": "able to resist the penetration of water to some degree but not entirely.",
    "sentence": "The new smart watch is {{BLANK}}, meaning you can wear it while washing your hands, but you shouldn't swim with it.",
    "cn": "這款新的智慧型手錶是抗水的，這意味著你洗手時可以戴著它，但你不應該戴著它游泳。"
  },
  {
    "word": "heat-resistant",
    "pos": "adj.",
    "cn_def": "耐熱的",
    "en_def": "able to withstand high temperatures without being damaged.",
    "sentence": "When you are taking the hot baking pan out of the oven, make absolutely sure to use thick {{BLANK}} gloves.",
    "cn": "當你把熱烤盤從烤箱拿出來時，務必確保使用厚實的耐熱的手套。"
  },
  {
    "word": "resist",
    "pos": "v.",
    "cn_def": "抵抗；忍住",
    "en_def": "to withstand the action or effect of.",
    "sentence": "When I saw the delicious chocolate cake on the table, I simply couldn't {{BLANK}} eating a massive slice before dinner.",
    "cn": "當我看到桌上美味的巧克力蛋糕時，我就是無法忍住在晚餐前吃下一大塊。"
  },
  {
    "word": "resistant",
    "pos": "adj.",
    "cn_def": "有抵抗力的；抗...的",
    "en_def": "offering resistance to something or someone.",
    "sentence": "These specific vegetables were genetically engineered by scientists to be much more {{BLANK}} to disease and harsh weather conditions.",
    "cn": "這些特定的蔬菜是由科學家進行基因工程改造的，對疾病和惡劣天氣條件更具有抵抗力的。"
  },
  {
    "word": "resistance",
    "pos": "n.",
    "cn_def": "抵抗（力）；阻力",
    "en_def": "the refusal to accept or comply with something.",
    "sentence": "Despite facing fierce political {{BLANK}} from the conservative party, the new educational reform law was eventually passed by the government.",
    "cn": "儘管面臨來自保守黨激烈的政治阻力，新的教育改革法案最終還是被政府通過了。"
  },
  {
    "word": "severe",
    "pos": "adj.",
    "cn_def": "嚴重的；嚴厲的",
    "en_def": "of something bad or undesirable: very great, intense, or harsh.",
    "sentence": "The judge announced that the legal punishment for intentionally cheating on the important national exam would be extremely {{BLANK}}.",
    "cn": "法官宣布，故意在重要的國家考試中作弊的法律懲罰將會極度嚴厲的。"
  },
  {
    "word": "severely",
    "pos": "adv.",
    "cn_def": "嚴重地",
    "en_def": "to an undesirably great or intense degree.",
    "sentence": "The historic downtown area was {{BLANK}} damaged by the powerful earthquake, and it will cost billions of dollars to rebuild.",
    "cn": "歷史悠久的市中心地區被強烈地震嚴重地破壞，重建將花費數十億美元。"
  },
  {
    "word": "severity",
    "pos": "n.",
    "cn_def": "嚴重性",
    "en_def": "the fact or condition of being severe.",
    "sentence": "The inexperienced hikers completely underestimated the {{BLANK}} of the approaching winter storm and unfortunately became trapped on the mountain.",
    "cn": "缺乏經驗的登山客完全低估了逼近的冬季風暴的嚴重性，不幸地被困在山上。"
  },
  {
    "word": "severe storm",
    "pos": "phr.",
    "cn_def": "強烈風暴",
    "en_def": "very bad and destructive weather.",
    "sentence": "The local news station strongly advised all residents to stay safely indoors during the incredibly {{BLANK}} that was coming.",
    "cn": "當地新聞台強烈建議所有居民在即將到來的極其強烈風暴期間安全地待在室內。"
  },
  {
    "word": "severe pain",
    "pos": "phr.",
    "cn_def": "劇痛",
    "en_def": "physical suffering or discomfort caused by illness or injury that is very intense.",
    "sentence": "After heavily falling off his bicycle, Julian experienced {{BLANK}} in his right leg and had to visit the hospital.",
    "cn": "騎腳踏車重重摔倒後，朱利安的右腿感到劇痛，必須去醫院就診。"
  },
  {
    "word": "natural disaster",
    "pos": "phr.",
    "cn_def": "自然災害、天災",
    "en_def": "An extreme event like a flood, earthquake, or storm that causes great damage or loss of life.",
    "sentence": "The government has prepared emergency supply kits to ensure that citizens can survive if a major {{BLANK}} strikes the region unexpectedly.",
    "cn": "政府已經準備了緊急物資包，以確保如果該地區意外遭受重大自然災害（天災）時，市民能夠存活下來。"
  },
  {
    "word": "drought",
    "pos": "n.",
    "cn_def": "乾旱",
    "en_def": "a prolonged period of abnormally low rainfall, leading to a shortage of water.",
    "sentence": "We desperately hoped for much more rain this summer since our farming village had a terrible {{BLANK}} the previous year.",
    "cn": "我們極度希望今年夏天能下更多雨，因為我們的農村前一年發生了可怕的乾旱。"
  },
  {
    "word": "famine",
    "pos": "n.",
    "cn_def": "饑荒",
    "en_def": "extreme scarcity of food.",
    "sentence": "The prolonged lack of rain not only destroyed the crops but also caused a devastating {{BLANK}} across the entire African region.",
    "cn": "長期缺乏降雨不僅摧毀了農作物，還在整個非洲地區引發了毀滅性的饑荒。"
  },
  {
    "word": "wildfire",
    "pos": "n.",
    "cn_def": "野火",
    "en_def": "a large, destructive fire that spreads quickly over woodland or brush.",
    "sentence": "Driven by strong winds, the massive {{BLANK}} quickly destroyed thousands of acres of ancient forest in just a few short days.",
    "cn": "在強風的推波助瀾下，巨大的野火在短短幾天內迅速摧毀了數千英畝的古老森林。"
  },
  {
    "word": "mudslide",
    "pos": "n.",
    "cn_def": "土石流",
    "en_def": "a mass of mud and other earthy material that is falling or has fallen down a hillside.",
    "sentence": "Heavy rainfall over the weekend completely saturated the steep mountain, eventually triggering a dangerous {{BLANK}} that blocked the main highway.",
    "cn": "週末的強降雨完全浸透了陡峭的山體，最終引發了危險的土石流，堵塞了主要高速公路。"
  },
  {
    "word": "dust storm",
    "pos": "phr.",
    "cn_def": "沙塵暴",
    "en_def": "a meteorological phenomenon common in arid and semi-arid regions.",
    "sentence": "The travelers had to quickly cover their faces to protect their eyes and lungs when a sudden {{BLANK}} swept through the desert.",
    "cn": "當突如其來的沙塵暴席捲沙漠時，旅行者不得不迅速遮住臉以保護眼睛和肺部。"
  },
  {
    "word": "tsunami",
    "pos": "n.",
    "cn_def": "海嘯",
    "en_def": "A giant ocean wave caused by an earthquake under the sea.",
    "sentence": "Following a massive undersea earthquake, the coastal city issued an emergency warning because a destructive {{BLANK}} was rapidly approaching the shore.",
    "cn": "在一場巨大的海底地震之後，這座沿海城市發布了緊急警報，因為一場具破壞性的海嘯正迅速逼近海岸。"
  },
  {
    "word": "cyclone",
    "pos": "n.",
    "cn_def": "氣旋、熱帶風暴",
    "en_def": "A violent tropical storm with very strong winds that rotate around a center.",
    "sentence": "The powerful {{BLANK}} caused severe damage to the island nations in the Indian Ocean, tearing down power lines and destroying houses.",
    "cn": "這場強烈的氣旋對印度洋的島國造成了嚴重的破壞，扯斷了供電線路並摧毀了房屋。"
  },
  {
    "word": "typhoon",
    "pos": "n.",
    "cn_def": "颱風",
    "en_def": "A violent tropical storm with extremely strong winds and heavy rain that occurs in the Western Pacific.",
    "sentence": "Classes and work were canceled across Taiwan because a strong {{BLANK}} was expected to bring dangerous winds and flooding this weekend.",
    "cn": "全台停班停課，因為預計這週末一場強烈颱風將帶來危險的強風和洪水。"
  },
  {
    "word": "hurricane",
    "pos": "n.",
    "cn_def": "颶風",
    "en_def": "A violent tropical storm with extremely strong winds that occurs in the Atlantic Ocean.",
    "sentence": "Residents living near the Gulf of Mexico evacuated their homes before the massive {{BLANK}} made landfall with dangerous storm surges.",
    "cn": "居住在墨西哥灣附近的居民在這場巨大的颶風帶著危險的暴潮登陸之前，紛紛撤離了他們的家園。"
  },
  {
    "word": "tornado",
    "pos": "n.",
    "cn_def": "龍捲風",
    "en_def": "A violent, spinning column of air that stretches from a dark cloud to the ground.",
    "sentence": "The terrifying {{BLANK}} ripped through the small town in just a few minutes, lifting cars into the air and damaging buildings.",
    "cn": "那場可怕的龍捲風在短短幾分鐘內席捲了這座小鎮，將汽車捲入空中並損毀了建築物。"
  },
  {
    "word": "landslide",
    "pos": "n.",
    "cn_def": "土石流、山崩",
    "en_def": "A large mass of rocks and earth that suddenly slides down a mountain or cliff.",
    "sentence": "After the heavy rainfall hit the mountain village, a sudden {{BLANK}} blocked the main road and trapped many residents in their homes.",
    "cn": "在暴雨襲擊山村之後，一場突如其來的山崩（土石流）堵住了主要道路，將許多居民困在自己家中。"
  },
  {
    "word": "landscape",
    "pos": "n.",
    "cn_def": "風景、景色、自然景觀",
    "en_def": "Everything you can see when you look across a large area of land.",
    "sentence": "As the train moved through the countryside, passengers enjoyed the beautiful green {{BLANK}} filled with rolling hills and traditional farms.",
    "cn": "當火車穿過鄉間時，乘客們欣賞著充滿起伏山丘和傳統農莊的蔚藍美麗綠色自然景觀（風景）。"
  },
  {
    "word": "flood",
    "pos": "n.",
    "cn_def": "洪水",
    "en_def": "an overflow of a large amount of water beyond its normal limits.",
    "sentence": "After an entire week of continuous heavy rain, the anxious town next to the river began to seriously worry about {{BLANK}}.",
    "cn": "經過整整一星期的持續大雨，河邊焦慮的城鎮開始嚴重擔心洪水。"
  },
  {
    "word": "flood",
    "pos": "v.",
    "cn_def": "淹沒；氾濫",
    "en_def": "to cover or submerge a place with water in a flood.",
    "sentence": "The muddy waters of the river often {{BLANK}} the nearby low-lying fields and roads during the intensely wet rainy season.",
    "cn": "在極度潮濕的雨季，河流泥濘的河水經常淹沒附近低窪的田野和道路。"
  },
  {
    "word": "flooded",
    "pos": "adj.",
    "cn_def": "被淹沒的",
    "en_def": "covered or submerged with water.",
    "sentence": "The rescue workers bravely used small rubber boats to rescue the trapped families from their completely {{BLANK}} homes in the valley.",
    "cn": "救援人員勇敢地使用小型橡皮艇，將受困家庭從山谷中完全被淹沒的家園中救出。"
  },
  {
    "word": "flash flood",
    "pos": "phr.",
    "cn_def": "山洪爆發",
    "en_def": "a sudden local flood, typically due to heavy rain.",
    "sentence": "You must never camp directly in a dry riverbed because a deadly {{BLANK}} can unexpectedly happen without any warning whatsoever.",
    "cn": "你絕不能直接在乾涸的河床露營，因為致命的山洪爆發可能會在沒有任何警告的情況下出乎意料地發生。"
  },
  {
    "word": "flood the market",
    "pos": "phr.",
    "cn_def": "充斥市場",
    "en_def": "to bring a huge number of things to a place to sell.",
    "sentence": "Cheaper electronic products from overseas competitors have begun to {{BLANK}} and seriously threaten our local technology businesses.",
    "cn": "來自海外競爭對手較便宜的電子產品已經開始充斥市場，並嚴重威脅我們當地的科技企業。"
  },
  {
    "word": "toll",
    "pos": "n.",
    "cn_def": "傷亡人數",
    "en_def": "the number of deaths, casualties, or injuries arising from particular circumstances.",
    "sentence": "The tragic earthquake was so incredibly destructive that the exact death {{BLANK}} has not yet been accurately counted by officials.",
    "cn": "這場悲慘的地震如此具毀滅性，以至於官方尚未準確統計出確切的死亡傷亡人數。"
  },
  {
    "word": "pay a toll",
    "pos": "phr.",
    "cn_def": "付通行費",
    "en_def": "to pay a fee to use a particular road or bridge.",
    "sentence": "The angry drivers had to wait in a long line just to {{BLANK}} to cross the newly built suspension bridge.",
    "cn": "憤怒的駕駛必須排很長的隊，只為了付通行費以穿過新建的吊橋。"
  },
  {
    "word": "take a toll on",
    "pos": "phr.",
    "cn_def": "對...造成傷害",
    "en_def": "to have a bad effect on someone or something over a long period.",
    "sentence": "Chronic sleep deprivation and social media addiction {{BLANK}} many teenagers' mental and physical health.",
    "cn": "慢性睡眠缺乏和社群媒體成癮症傷害很多青少年的身心健康"
  },
  {
    "word": "infrastructure",
    "pos": "n.",
    "cn_def": "基礎建設",
    "en_def": "the basic physical and organizational structures and facilities needed for the operation of a society.",
    "sentence": "A significant portion of the {{BLANK}} in this old industrial city is outdated and desperately needs to be completely repaired.",
    "cn": "這座古老工業城市中很大一部分的基礎建設已經過時，極度需要徹底修復。"
  },
  {
    "word": "public infrastructure",
    "pos": "phr.",
    "cn_def": "公共基礎建設",
    "en_def": "facilities and systems serving a country, city, or area.",
    "sentence": "The ambitious new mayor promised to dramatically improve the {{BLANK}} by building modern hospitals and better public schools.",
    "cn": "雄心勃勃的新市長承諾將透過建造現代化醫院和更好的公立學校來大幅改善公共基礎建設。"
  },
  {
    "word": "ruined",
    "pos": "v.",
    "cn_def": "毀壞；破壞",
    "en_def": "to reduce to a state of ruin or destroy.",
    "sentence": "The expensive library book is completely {{BLANK}} because you carelessly left it outside all night in the pouring rain.",
    "cn": "這本昂貴的圖書館書籍完全被毀壞了，因為你粗心地把它留在外面淋了一整晚的傾盆大雨。"
  },
  {
    "word": "ruin",
    "pos": "n.",
    "cn_def": "毀滅；廢墟",
    "en_def": "the physical destruction or disintegration of something.",
    "sentence": "The famous ancient Roman temple is now only a pile of {{BLANK}}, but it still attracts thousands of fascinated tourists daily.",
    "cn": "著名的古羅馬神廟現在只是一堆廢墟，但它每天仍然吸引著數以千計著迷的遊客。"
  },
  {
    "word": "ruins",
    "pos": "n. pl.",
    "cn_def": "廢墟、遺跡",
    "en_def": "The broken parts that remain after a building or city has been destroyed.",
    "sentence": "Many tourists travel to Greece every year to walk through the ancient {{BLANK}} of the Parthenon and take photos of the historic stone pillars.",
    "cn": "每年都有許多遊客前往希臘，在帕德嫩神廟的古老廢墟（遺跡）中漫步，並拍攝歷史悠久的石柱照片。"
  },
  {
    "word": "in a state of financial ruin",
    "pos": "phr.",
    "cn_def": "處於毀滅狀態",
    "en_def": "in a completely broken or destroyed condition.",
    "sentence": "Years of terrible executive decisions and widespread corruption ultimately left the historical company {{BLANK}}.",
    "cn": "多年來糟糕的高層決策和普遍的貪腐，最終讓這家歷史悠久的公司處於財務毀滅狀態。"
  },
  {
    "word": "the remains of",
    "pos": "phr.",
    "cn_def": "…的殘骸、…的遺留物",
    "en_def": "The parts of something that are left after the rest has been destroyed, used, or taken away.",
    "sentence": "After the terrible forest fire was finally put out, the rangers found {{BLANK}} a burnt tent left behind by the careless campers.",
    "cn": "在可怕的森林大火終於被撲滅後，巡邏員發現了被粗心露營客留下的燒毀帳篷殘骸。"
  },
  {
    "word": "destroyed",
    "pos": "v.",
    "cn_def": "摧毀",
    "en_def": "to put an end to the existence of something by damaging or attacking it.",
    "sentence": "The aggressive military forces completely {{BLANK}} the enemy's main supply base, making it impossible for them to continue the war.",
    "cn": "具攻擊性的軍隊徹底摧毀了敵人的主要補給基地，使他們無法繼續戰爭。"
  },
  {
    "word": "destructive",
    "pos": "adj.",
    "cn_def": "具破壞性的、毀滅性的",
    "en_def": "Causing a large amount of severe damage, harm, or destruction.",
    "sentence": "The government warned that the upcoming typhoon could have a highly {{BLANK}} effect on coastal villages, urging everyone to evacuate immediately.",
    "cn": "政府警告說，即將來臨的颱風可能對沿海村莊造成極具破壞性的影響，並敦促每個人立刻撤離。"
  },
  {
    "word": "destruction",
    "pos": "n.",
    "cn_def": "破壞、毀滅、摧毀",
    "en_def": "The act or process of destroying something so badly that it cannot be fixed.",
    "sentence": "The sudden explosion at the chemical factory caused widespread {{BLANK}} to the surrounding neighborhood, shattering windows a mile away.",
    "cn": "化學工廠突如其來的爆炸對周邊社區造成了廣泛的破壞，甚至震碎了一英里外的窗戶。"
  },
  {
    "word": "damage",
    "pos": "v.",
    "cn_def": "損害、損壞、破壞",
    "en_def": "To harm, break, or spoil something physically.",
    "sentence": "If you don't use a sturdy phone case to protect your new smartphone, you might accidentally {{BLANK}} its fragile screen when you drop it.",
    "cn": "如果你不用一個堅固的保護殼來保護你的新智慧型手機，當你不小心摔到它時，可能會損壞它脆弱的螢幕。"
  },
  {
    "word": "damage",
    "pos": "n. [U]",
    "cn_def": "損害、損失、破壞",
    "en_def": "Physical harm caused to something, making it less attractive, useful, or valuable.",
    "sentence": "The heavy hailstorm caused severe {{BLANK}} to the farmer's fruit crop, forcing him to lower his selling prices for the season.",
    "cn": "沉重的冰雹對農夫的水果作物造成了嚴重的損害，迫使他不得不降低該季的售價。"
  },
  {
    "word": "deal massive damage",
    "pos": "phr.",
    "cn_def": "造成…傷害、施加…破壞",
    "en_def": "To cause harm or damage to someone or something, often used in games or combat contexts.",
    "sentence": "In the final round of the video game tournament, Leo's character managed to {{BLANK}} to the enemy boss, winning the match instantly.",
    "cn": "在電子遊戲錦標賽的決賽中，里歐的角色成功對敵方大頭目造成了巨大的傷害，立刻贏得了比賽。"
  },
  {
    "word": "do serious damage/harm to",
    "pos": "phr.",
    "cn_def": "對…造成損害/傷害",
    "en_def": "To cause physical, mental, or environmental harm or injury to someone or something.",
    "sentence": "Spending too many hours staring at a computer screen in a completely dark room will definitely {{BLANK}} your eyesight.",
    "cn": "在完全黑暗的房間裡花太多時間盯著電腦螢幕，絕對會對你的視力造成嚴重的損害（傷害）。"
  },
  {
    "word": "damaging",
    "pos": "adj.",
    "cn_def": "有害的、造成破壞的",
    "en_def": "Causing social, financial, or physical harm or trouble.",
    "sentence": "Spreading false rumors about the local restaurant on social media can be extremely {{BLANK}} to its business and long-term reputation.",
    "cn": "在社群媒體上散布關於當地餐廳的謠言，可能對其業務和長期聲譽造成極其有害的（造成破壞的）影響。"
  },
  {
    "word": "harmful",
    "pos": "adj.",
    "cn_def": "有害的、致傷的",
    "en_def": "Causing or likely to cause damage, pain, or injury.",
    "sentence": "Many doctors warn that feeding young children too much sugary food and soda can be highly {{BLANK}} to their developing teeth.",
    "cn": "許多醫生警告說，讓幼兒吃太多含糖食物和汽水，可能對他們發育中的牙齒非常有害。"
  },
  {
    "word": "harmless",
    "pos": "adj.",
    "cn_def": "無害的",
    "en_def": "Completely safe and not able or likely to cause any hurt, pain, or damage.",
    "sentence": "Don't be afraid of that little garter snake in the backyard; it is completely {{BLANK}} and actually helps catch annoying garden pests.",
    "cn": "不要害怕後院的那條小束帶蛇；牠完全是無害的，而且實際上還能幫忙捕捉惱人的花園害蟲。"
  },
  {
    "word": "emergency",
    "pos": "n.",
    "cn_def": "緊急情況",
    "en_def": "a serious, unexpected, and often dangerous situation requiring immediate action.",
    "sentence": "The flight attendant instructed the passengers that, in a real {{BLANK}}, they must quickly push the red button above their seats.",
    "cn": "空服員指示乘客，在真正的緊急情況下，他們必須迅速按下座位上方的紅色按鈕。"
  },
  {
    "word": "emergency room",
    "pos": "phr.",
    "cn_def": "急診室",
    "en_def": "the department of a hospital that provides immediate treatment for acute illnesses and trauma.",
    "sentence": "After badly breaking his arm during the football game, Mark was immediately rushed to the nearest {{BLANK}} for surgical treatment.",
    "cn": "在足球比賽中嚴重摔斷手臂後，馬克立刻被送往最近的急診室接受外科治療。"
  },
  {
    "word": "state of emergency",
    "pos": "phr.",
    "cn_def": "緊急狀態",
    "en_def": "a situation of national danger or disaster in which a government suspends normal procedures.",
    "sentence": "The president officially declared a national {{BLANK}} after the devastating hurricane completely destroyed several coastal cities in the south.",
    "cn": "在毀滅性的颶風徹底摧毀南部幾個沿海城市後，總統正式宣布進入全國緊急狀態。"
  },
  {
    "word": "emergency landing",
    "pos": "phr.",
    "cn_def": "緊急降落",
    "en_def": "an unplanned landing by an aircraft due to a crisis.",
    "sentence": "One of the airplane's engines suddenly caught fire, forcing the skilled pilot to make a dangerous {{BLANK}} in a cornfield.",
    "cn": "飛機的一個引擎突然起火，迫使技術高超的飛行員在玉米田裡進行危險的緊急降落。"
  },
  {
    "word": "kilometer",
    "pos": "n.",
    "cn_def": "公里",
    "en_def": "a metric unit of measurement equal to 1,000 meters.",
    "sentence": "The highly energetic people participating in the charity race had to continuously run 10 {{BLANK}} in the extreme summer heat.",
    "cn": "參加慈善路跑精力充沛的人們，必須在極端的夏日酷暑中連續跑10公里。"
  },
  {
    "word": "centimeter",
    "pos": "n.",
    "cn_def": "公分",
    "en_def": "a metric unit of length, equal to one hundredth of a meter.",
    "sentence": "The exotic green snake that we discovered hiding in the garden bushes was around 90 {{BLANK}} long and looked quite dangerous.",
    "cn": "我們在花園灌木叢中發現藏著的奇特綠蛇大約90公分長，看起來相當危險。"
  },
  {
    "word": "kilogram",
    "pos": "n.",
    "cn_def": "公斤",
    "en_def": "the SI unit of mass, equivalent to 1,000 grams.",
    "sentence": "To bake this massive birthday cake for the party, you will definitely need at least one {{BLANK}} of fine white flour.",
    "cn": "為了烤這個派對用的大型生日蛋糕，你絕對需要至少一公斤的優質白麵粉。"
  },
  {
    "word": "modified",
    "pos": "v.",
    "cn_def": "修改",
    "en_def": "to make partial or minor changes to something.",
    "sentence": "The clever marketing team thoroughly {{BLANK}} their business proposal to much better meet the demanding client's specific professional needs.",
    "cn": "聰明的行銷團隊徹底修改了他們的商業提案，以更好地滿足要求嚴格的客戶特定的專業需求。"
  },
  {
    "word": "genetically modified",
    "pos": "phr.",
    "cn_def": "基因改造的",
    "en_def": "containing genetic material that has been artificially altered.",
    "sentence": "Many modern environmentalists firmly believe that growing {{BLANK}} crops might have unforeseen and potentially dangerous effects on local ecosystems.",
    "cn": "許多現代環保人士堅信，種植基因改造的農作物可能對當地生態系統產生不可預見且潛在危險的影響。"
  },
  {
    "word": "modification",
    "pos": "n.",
    "cn_def": "修改；改變",
    "en_def": "the action of modifying something.",
    "sentence": "The structural engineer suggested a slight {{BLANK}} to the building's original design to ensure it could withstand strong earthquake tremors.",
    "cn": "結構工程師建議對建築物的原始設計進行輕微的修改，以確保它能承受強烈的地震震動。"
  },
  {
    "word": "alter",
    "pos": "v.",
    "cn_def": "改變",
    "en_def": "to change or cause to change in character or composition.",
    "sentence": "She had to carefully {{BLANK}} her beautiful wedding dress because she had surprisingly lost a significant amount of weight recently.",
    "cn": "她必須小心地改變（修改）她美麗的婚紗，因為她最近令人驚訝地減輕了大量的體重。"
  },
  {
    "word": "alternative",
    "pos": "n./adj.",
    "cn_def": "替代方案；可替代的",
    "en_def": "a choice limited to one of two or more possibilities, or describing something available as another choice",
    "sentence": "Utilizing public commuting options provides a green {{BLANK}} to driving a private vehicle in congested urban areas.",
    "cn": "在擁擠的都市區域中，利用大眾通勤工具為駕駛私人車輛提供了一種綠色的替代方案。"
  },
  {
    "word": "amend",
    "pos": "v.",
    "cn_def": "修訂；修改（法律/文件）",
    "en_def": "to formally modify, alter, or update a legal document, contract, policy, or legislative bill",
    "sentence": "The international corporation decided to {{BLANK}} its operational safety policy to thoroughly protect all its warehouse workers.",
    "cn": "這家國際公司決定修訂其營運安全政策，以徹底保護其所有倉庫工人。"
  },
  {
    "word": "amendment",
    "pos": "n.",
    "cn_def": "修訂案；修正條款",
    "en_def": "a formal or official change, modification, or addition made to a constitution, statute, or contract",
    "sentence": "The progressive politicians proposed a new tariff {{BLANK}} to support domestic technology manufacturing companies.",
    "cn": "進步派政治人物提出了一項新的關稅修正案，以支持國內的科技製造公司。"
  },
  {
    "word": "make an amendment",
    "pos": "phr.",
    "cn_def": "進行修訂；做出修改",
    "en_def": "to systematically perform or introduce a formal modification to a law, rule, or contract",
    "sentence": "The legal committee will {{BLANK}} the trade agreement to ensure both ports operate smoothly under the new laws.",
    "cn": "法律委員會將對該貿易協定進行修訂，以確保兩個港口在新法律下都能順利運作。"
  },
  {
    "word": "repair",
    "pos": "v.",
    "cn_def": "修復；修理（動詞）",
    "en_def": "to fix, restore, or mend something that is damaged, broken, split, or not functioning correctly",
    "sentence": "The skilled mechanic will attempt to {{BLANK}} the mechanical arm that suddenly failed on the automated production line.",
    "cn": "技術熟練的技工將嘗試修復在自動化生產線上突然故障的機械手臂。"
  },
  {
    "word": "repair",
    "pos": "n.",
    "cn_def": "修理；修補（名詞）",
    "en_def": "the factual act or process of fixing something that is broken, damaged, or completely worn out",
    "sentence": "After thoroughly inspecting the imported automobile, the technician estimated that the engine {{BLANK}} would take three days.",
    "cn": "在徹底檢查那輛進口汽車後，技術人員估計引擎修理將需要三天的時間。"
  },
  {
    "word": "process",
    "pos": "n.",
    "cn_def": "過程",
    "en_def": "a series of actions or steps taken in order to achieve a particular end.",
    "sentence": "Jeremy excitedly visited a local dairy factory and carefully watched the fascinating step-by-step {{BLANK}} of making delicious chocolate ice cream.",
    "cn": "傑瑞興奮地參觀了一家當地的乳製品工廠，並仔細觀看了製作美味巧克力冰淇淋引人入勝的逐步過程。"
  },
  {
    "word": "in the process of",
    "pos": "phr.",
    "cn_def": "在...的過程中",
    "en_def": "doing something currently.",
    "sentence": "The ambitious software company is currently {{BLANK}} developing a highly advanced application for learning foreign languages quickly.",
    "cn": "這家雄心勃勃的軟體公司目前正在開發一款用於快速學習外語的高度先進應用程式的過程中。"
  },
  {
    "word": "process",
    "pos": "v.",
    "cn_def": "處理；加工",
    "en_def": "to perform a series of mechanical or chemical operations on something.",
    "sentence": "The busy customer service representative explained that it can take up to three weeks for the company to {{BLANK}} your request.",
    "cn": "忙碌的客服代表解釋說，公司最多可能需要三個星期的時間來處理你的請求。"
  },
  {
    "word": "processed",
    "pos": "adj.",
    "cn_def": "加工過的",
    "en_def": "having been subjected to a special process or treatment.",
    "sentence": "You should definitely try to avoid eating highly {{BLANK}} meats if you genuinely want to improve your long-term cardiovascular health.",
    "cn": "如果你真的想改善你長期的心血管健康，你絕對應該試著避免吃高度加工過的肉類。"
  },
  {
    "word": "processed food",
    "pos": "phr.",
    "cn_def": "加工食品",
    "en_def": "food that has been altered from its natural state for safety reasons or convenience.",
    "sentence": "Nutritionists consistently warn that a daily diet consisting entirely of cheap {{BLANK}} will inevitably lead to severe weight gain.",
    "cn": "營養學家不斷警告，完全由廉價加工食品組成的日常飲食不可避免地會導致嚴重的體重增加。"
  },
  {
    "word": "fortified",
    "pos": "v.",
    "cn_def": "強化；加強",
    "en_def": "to strengthen a place with defensive works so as to protect it against attack.",
    "sentence": "The determined president {{BLANK}} his political campaign promises with his bold new policies aimed at improving the country's weak economy.",
    "cn": "意志堅定的總統以旨在改善國家疲弱經濟的大膽新政策，強化了他的政治競選承諾。"
  },
  {
    "word": "fortification",
    "pos": "n.",
    "cn_def": "防禦工事；強化",
    "en_def": "a defensive wall or other reinforcement built to strengthen a place.",
    "sentence": "The ancient Roman soldiers spent several grueling months building a massive stone {{BLANK}} to protect their city from foreign invaders.",
    "cn": "古羅馬士兵花了幾個月艱苦的時間建造一座巨大的石頭防禦工事，以保護他們的城市免受外國入侵者的侵害。"
  },
  {
    "word": "fortress",
    "pos": "n.",
    "cn_def": "堡壘",
    "en_def": "a heavily protected and impenetrable building.",
    "sentence": "The heavily armed rebels retreated to a hidden mountain {{BLANK}} where they could safely regroup and plan their next major attack.",
    "cn": "全副武裝的叛軍撤退到一座隱藏的山區堡壘，在那裡他們可以安全地重組並計畫下一次重大攻擊。"
  },
  {
    "word": "injected",
    "pos": "v.",
    "cn_def": "注射；注入",
    "en_def": "to drive or force a liquid into a person's body with a syringe.",
    "sentence": "The experienced nurse carefully {{BLANK}} the life-saving drug into Kyle's arm while he bravely looked away to ignore the pain.",
    "cn": "經驗豐富的護士小心地將救命藥物注射進凱爾的手臂，同時他勇敢地把頭轉開以忽略疼痛。"
  },
  {
    "word": "injection",
    "pos": "n.",
    "cn_def": "注射；打針",
    "en_def": "an instance of injecting or being injected.",
    "sentence": "The frightened child started crying loudly the moment he saw the doctor preparing the sharp needle for his annual {{BLANK}}.",
    "cn": "受驚的孩子一看到醫生準備銳利的針頭要為他進行年度打針時，就開始大聲哭了起來。"
  },
  {
    "word": "eject",
    "pos": "v.",
    "cn_def": "彈出；逐出",
    "en_def": "to force or throw something out, typically in a violent or sudden way.",
    "sentence": "The fighter pilot was forced to immediately {{BLANK}} from the burning aircraft just seconds before it crashed into the dark ocean.",
    "cn": "戰鬥機飛行員被迫在燃燒的飛機墜入黑暗海洋的前幾秒鐘立刻從中彈出。"
  },
  {
    "word": "inject money into",
    "pos": "phr.",
    "cn_def": "向...注資",
    "en_def": "to provide funds to a project or business.",
    "sentence": "The ambitious investors are planning to {{BLANK}} the new wearable device, hoping it dominates the global market.",
    "cn": "雄心勃勃的投資者正計畫向這款新的穿戴式裝置注資數百萬美元，希望它能主導全球市場。"
  },
  {
    "word": "object to",
    "pos": "v.",
    "cn_def": "反對",
    "en_def": "to say something to express one's disapproval or disagreement.",
    "sentence": "The angry neighbors strongly {{BLANK}} the controversial plan of building a massive, noisy chemical factory right next to their homes.",
    "cn": "憤怒的鄰居強烈反對就在他們家旁邊建造一座巨大、吵雜的化學工廠的具爭議性計畫。"
  },
  {
    "word": "layer",
    "pos": "n.",
    "cn_def": "層",
    "en_def": "a sheet, quantity, or thickness of material, typically one of several.",
    "sentence": "Traditional Italian lasagna is usually made from thick {{BLANK}} of rich meat sauce, fresh pasta, and delicious melted mozzarella cheese.",
    "cn": "傳統的義大利千層麵通常是由厚厚數層濃郁的肉醬、新鮮的義大利麵和美味的融化莫札瑞拉起司製成的。"
  },
  {
    "word": "layered",
    "pos": "v.",
    "cn_def": "把...分層",
    "en_def": "to arrange in a layer or layers.",
    "sentence": "The incredibly skilled pastry chef carefully {{BLANK}} the huge birthday cake with rich chocolate, sweet vanilla, and fresh strawberry cream.",
    "cn": "技巧極其高超的糕點師傅小心地把巨大的生日蛋糕塗上濃郁巧克力、甜香草和新鮮草莓鮮奶油分層。"
  },
  {
    "word": "ozone layer",
    "pos": "phr.",
    "cn_def": "臭氧層",
    "en_def": "a layer in the earth's stratosphere containing a high concentration of ozone.",
    "sentence": "The progressive environmental policy aims to effectively stop harmful chemicals from continually destroying the Earth's delicate and protective {{BLANK}}.",
    "cn": "漸進的環保政策旨在有效地阻止有害化學物質不斷破壞地球脆弱且具保護作用的臭氧層。"
  },
  {
    "word": "technique",
    "pos": "n.",
    "cn_def": "技巧；技術",
    "en_def": "a way of carrying out a particular task.",
    "sentence": "These beautiful clay pots were perfectly made by the artist using a brand new {{BLANK}} she learned during her trip.",
    "cn": "這些美麗的陶罐是由這位藝術家使用她在旅行中學到的一種全新技巧完美製作而成的。"
  },
  {
    "word": "technical",
    "pos": "adj.",
    "cn_def": "技術上的",
    "en_def": "relating to a particular subject, art, or craft, or its techniques.",
    "sentence": "The brilliant engineering team unexpectedly ran into several major {{BLANK}} problems, so the highly anticipated speech unfortunately started very late.",
    "cn": "才華洋溢的工程團隊出乎意料地遇到了幾個重大的技術上的問題，所以這場備受期待的演講不幸地很晚才開始。"
  },
  {
    "word": "technically",
    "pos": "adv.",
    "cn_def": "嚴格來說；技術上",
    "en_def": "according to the facts or exact meaning of something.",
    "sentence": "While tomatoes are commonly treated as vegetables in cooking, {{BLANK}}, they are actually categorized as a fruit by expert botanists.",
    "cn": "雖然番茄在烹飪中通常被當作蔬菜處理，但嚴格來說，它們實際上被專家植物學家歸類為水果。"
  },
  {
    "word": "technique",
    "pos": "n.",
    "cn_def": "技巧",
    "en_def": "skill",
    "sentence": "The famous movie director is widely known for the camera {{BLANK}} used in his intense and realistic action films.",
    "cn": "這位著名的電影導演以其在緊張逼真的動作片中使用的晃動鏡頭技巧而廣為人知。"
  },
  {
    "word": "predict",
    "pos": "v.",
    "cn_def": "預測",
    "en_def": "to say or estimate that a specified thing will happen in the future.",
    "sentence": "Even with modern technology, scientists cannot yet accurately {{BLANK}} exactly when and where a massive, destructive earthquake will finally happen.",
    "cn": "即使擁有現代科技，科學家仍然無法準確地預測一場巨大且具毀滅性的地震究竟何時何地會最終發生。"
  },
  {
    "word": "prediction",
    "pos": "n.",
    "cn_def": "預言；預測",
    "en_def": "a thing predicted; a forecast.",
    "sentence": "The famous economist's bold {{BLANK}} about the sudden stock market crash unfortunately turned out to be completely and devastatingly true.",
    "cn": "這位著名經濟學家關於股市突然崩盤的大膽預測，不幸地被證明是完全且具毀滅性的真實。"
  },
  {
    "word": "predictable",
    "pos": "adj.",
    "cn_def": "可預測的",
    "en_def": "able to be predicted.",
    "sentence": "The plot of that romantic comedy movie was incredibly boring and highly {{BLANK}}, as I knew exactly how it would end.",
    "cn": "那部浪漫喜劇電影的情節極度無聊且高度可預測的，因為我完全知道它會如何結束。"
  },
  {
    "word": "forecast",
    "pos": "n.",
    "cn_def": "預報",
    "en_def": "a prediction or estimate of future events, especially coming weather.",
    "sentence": "Before setting sail across the treacherous ocean, the cautious captain carefully listened to the detailed weather {{BLANK}} on the radio.",
    "cn": "在航行穿越危險的海洋之前，謹慎的船長仔細聆聽了收音機上詳細的天氣預報。"
  },
  {
    "word": "enhance",
    "pos": "v.",
    "cn_def": "提升；加強",
    "en_def": "to intensify, increase, or further improve the quality, value, or extent of.",
    "sentence": "The professional photographer cleverly used advanced computer software to significantly {{BLANK}} the colors and sharpness of the beautiful wedding photos.",
    "cn": "專業攝影師巧妙地使用先進的電腦軟體來顯著提升美麗婚禮照片的顏色和清晰度。"
  },
  {
    "word": "enhanced",
    "pos": "adj.",
    "cn_def": "增強的；改良的",
    "en_def": "intensified, increased, or further improved in quality.",
    "sentence": "The brand new military aircraft is fully equipped with highly {{BLANK}} radar systems to detect enemy targets from much further away.",
    "cn": "全新的軍用飛機配備了高度增強的雷達系統，能從更遠的地方偵測到敵方目標。"
  },
  {
    "word": "enhancement",
    "pos": "n.",
    "cn_def": "提升；增強",
    "en_def": "an increase or improvement in quality, value, or extent.",
    "sentence": "Scientific studies clearly show that those who exercise regularly experience significant {{BLANK}} in both their physical health and mental abilities.",
    "cn": "科學研究清楚地顯示，那些規律運動的人在身體健康和心智能力方面都經歷了顯著的提升。"
  },
  {
    "word": "improvement",
    "pos": "n.",
    "cn_def": "改善；進步",
    "en_def": "an example of improving or being improved.",
    "sentence": "After practicing speaking Spanish for an hour every single day, there was a massive {{BLANK}} in his overall conversational fluency.",
    "cn": "在每天練習說西班牙語一小時後，他整體的會話流利度有了巨大的進步。"
  },
  {
    "word": "prehistoric",
    "pos": "adj.",
    "cn_def": "史前的",
    "en_def": "relating to or denoting the period before written records.",
    "sentence": "While digging deeply in the ancient cave, the excited archaeologists discovered several mysterious {{BLANK}} tools carved out of animal bone.",
    "cn": "在古老洞穴深處挖掘時，興奮的考古學家發現了幾件由動物骨頭雕刻而成的神祕史前的工具。"
  },
  {
    "word": "primitive",
    "pos": "adj.",
    "cn_def": "原始的；遠古的",
    "en_def": "relating to, denoting, or preserving the character of an early stage in the historical development of something",
    "sentence": "The leading anthropologist thoroughly analyzed the {{BLANK}} tools found at the ancient crime scene to understand how the tribe historically survived.",
    "cn": "首席人類學家徹底分析了在古老犯罪現場發現的原始工具，以了解該部落在歷史上是如何生存的。"
  },
  {
    "word": "sophisticated",
    "pos": "adj.",
    "cn_def": "精密的；複雜先進的；老練的",
    "en_def": "having a high degree of complexity, refinement, or advanced development in technology, system, or taste",
    "sentence": "The software engineering team deployed a {{BLANK}} database system to monitor the day-to-day business operations of the company.",
    "cn": "軟體工程團隊部署了一套精密先進的資料庫系統，以監控公司的日常業務運作。"
  },
  {
    "word": "unprecedented",
    "pos": "adj.",
    "cn_def": "空前的；前所未有的",
    "en_def": "never done, known, or experienced before in history, representing a completely new situation",
    "sentence": "The international corporation achieved {{BLANK}} success last year, breaking all previous sales records for portable electronic devices.",
    "cn": "這家國際公司去年取得了前所未有的成功，打破了以往所有可攜式電子裝置的銷售紀錄。"
  }
];

const MCQS = [
  {
    "q": "The courageous police officer survived the dangerous shooting entirely because he was wearing a heavy ______ vest under his uniform.",
    "options": [
      "bulletproof",
      "flooded",
      "unprecedented",
      "alternative"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Important government documents are typically stored securely inside a massive ______ safe to ensure they are protected during an emergency.",
    "options": [
      "primitive",
      "alternative",
      "fireproof",
      "sophisticated"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Ryan always carried a bright yellow ______ jacket in his backpack just in case it suddenly rained during his long hike.",
    "options": [
      "processed",
      "destructive",
      "flooded",
      "waterproof"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The new smart watch is ______, meaning you can wear it while washing your hands, but you shouldn't swim with it.",
    "options": [
      "processed",
      "water-resistant",
      "heat-resistant",
      "enhanced"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "When you are taking the hot baking pan out of the oven, make absolutely sure to use thick ______ gloves.",
    "options": [
      "heat-resistant",
      "bulletproof",
      "damaging",
      "flooded"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "When I saw the delicious chocolate cake on the table, I simply couldn't ______ eating a massive slice before dinner.",
    "options": [
      "destroyed",
      "layered",
      "resist",
      "ruined"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "These specific vegetables were genetically engineered by scientists to be much more ______ to disease and harsh weather conditions.",
    "options": [
      "fireproof",
      "resistant",
      "alternative",
      "destructive"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Despite facing fierce political ______ from the conservative party, the new educational reform law was eventually passed by the government.",
    "options": [
      "landscape",
      "kilogram",
      "hurricane",
      "resistance"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The judge announced that the legal punishment for intentionally cheating on the important national exam would be extremely ______.",
    "options": [
      "destructive",
      "severe",
      "sophisticated",
      "heat-resistant"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The historic downtown area was ______ damaged by the powerful earthquake, and it will cost billions of dollars to rebuild.",
    "options": [
      "in a state of financial ruin",
      "state of emergency",
      "severely",
      "layered"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The inexperienced hikers completely underestimated the ______ of the approaching winter storm and unfortunately became trapped on the mountain.",
    "options": [
      "resistance",
      "damage",
      "landscape",
      "severity"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The local news station strongly advised all residents to stay safely indoors during the incredibly ______ that was coming.",
    "options": [
      "severe storm",
      "genetically modified",
      "object to",
      "emergency landing"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "After heavily falling off his bicycle, Julian experienced ______ in his right leg and had to visit the hospital.",
    "options": [
      "pay a toll",
      "severe pain",
      "emergency landing",
      "take a toll on"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The government has prepared emergency supply kits to ensure that citizens can survive if a major ______ strikes the region unexpectedly.",
    "options": [
      "natural disaster",
      "make an amendment",
      "inject money into",
      "in a state of financial ruin"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "We desperately hoped for much more rain this summer since our farming village had a terrible ______ the previous year.",
    "options": [
      "resistance",
      "landslide",
      "severity",
      "drought"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The prolonged lack of rain not only destroyed the crops but also caused a devastating ______ across the entire African region.",
    "options": [
      "modification",
      "ruin",
      "famine",
      "hurricane"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Driven by strong winds, the massive ______ quickly destroyed thousands of acres of ancient forest in just a few short days.",
    "options": [
      "wildfire",
      "flood",
      "fortress",
      "drought"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Heavy rainfall over the weekend completely saturated the steep mountain, eventually triggering a dangerous ______ that blocked the main highway.",
    "options": [
      "hurricane",
      "mudslide",
      "layer",
      "severity"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The travelers had to quickly cover their faces to protect their eyes and lungs when a sudden ______ swept through the desert.",
    "options": [
      "state of emergency",
      "deal massive damage",
      "inject money into",
      "dust storm"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Following a massive undersea earthquake, the coastal city issued an emergency warning because a destructive ______ was rapidly approaching the shore.",
    "options": [
      "technique",
      "landscape",
      "tsunami",
      "fortification"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The powerful ______ caused severe damage to the island nations in the Indian Ocean, tearing down power lines and destroying houses.",
    "options": [
      "layer",
      "wildfire",
      "amendment",
      "cyclone"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Classes and work were canceled across Taiwan because a strong ______ was expected to bring dangerous winds and flooding this weekend.",
    "options": [
      "drought",
      "typhoon",
      "tornado",
      "infrastructure"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Residents living near the Gulf of Mexico evacuated their homes before the massive ______ made landfall with dangerous storm surges.",
    "options": [
      "kilogram",
      "wildfire",
      "hurricane",
      "process"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The terrifying ______ ripped through the small town in just a few minutes, lifting cars into the air and damaging buildings.",
    "options": [
      "tornado",
      "fortification",
      "cyclone",
      "damage"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "After the heavy rainfall hit the mountain village, a sudden ______ blocked the main road and trapped many residents in their homes.",
    "options": [
      "toll",
      "layer",
      "landslide",
      "hurricane"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "As the train moved through the countryside, passengers enjoyed the beautiful green ______ filled with rolling hills and traditional farms.",
    "options": [
      "severity",
      "landscape",
      "flood",
      "infrastructure"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "After an entire week of continuous heavy rain, the anxious town next to the river began to seriously worry about ______.",
    "options": [
      "severity",
      "mudslide",
      "cyclone",
      "flood"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The muddy waters of the river often ______ the nearby low-lying fields and roads during the intensely wet rainy season.",
    "options": [
      "flood",
      "ruined",
      "amend",
      "predict"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The rescue workers bravely used small rubber boats to rescue the trapped families from their completely ______ homes in the valley.",
    "options": [
      "technical",
      "processed",
      "flooded",
      "severe"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "You must never camp directly in a dry riverbed because a deadly ______ can unexpectedly happen without any warning whatsoever.",
    "options": [
      "object to",
      "flash flood",
      "do serious damage/harm to",
      "ozone layer"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Cheaper electronic products from overseas competitors have begun to ______ and seriously threaten our local technology businesses.",
    "options": [
      "flood the market",
      "in the process of",
      "natural disaster",
      "deal massive damage"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The tragic earthquake was so incredibly destructive that the exact death ______ has not yet been accurately counted by officials.",
    "options": [
      "repair",
      "technique",
      "famine",
      "toll"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The angry drivers had to wait in a long line just to ______ to cross the newly built suspension bridge.",
    "options": [
      "natural disaster",
      "deal massive damage",
      "pay a toll",
      "processed food"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Chronic sleep deprivation and social media addiction ______ many teenagers' mental and physical health.",
    "options": [
      "flood the market",
      "take a toll on",
      "public infrastructure",
      "emergency landing"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "A significant portion of the ______ in this old industrial city is outdated and desperately needs to be completely repaired.",
    "options": [
      "forecast",
      "emergency",
      "enhancement",
      "infrastructure"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "The ambitious new mayor promised to dramatically improve the ______ by building modern hospitals and better public schools.",
    "options": [
      "public infrastructure",
      "ozone layer",
      "deal massive damage",
      "make an amendment"
    ],
    "answer": 0,
    "vocabIndex": 35
  },
  {
    "q": "The expensive library book is completely ______ because you carelessly left it outside all night in the pouring rain.",
    "options": [
      "flood",
      "process",
      "ruined",
      "alter"
    ],
    "answer": 2,
    "vocabIndex": 36
  },
  {
    "q": "The famous ancient Roman temple is now only a pile of ______, but it still attracts thousands of fascinated tourists daily.",
    "options": [
      "ruin",
      "kilometer",
      "technique",
      "infrastructure"
    ],
    "answer": 0,
    "vocabIndex": 37
  },
  {
    "q": "Many tourists travel to Greece every year to walk through the ancient ______ of the Parthenon and take photos of the historic stone pillars.",
    "options": [
      "toll",
      "famine",
      "mudslide",
      "ruins"
    ],
    "answer": 3,
    "vocabIndex": 38
  },
  {
    "q": "Years of terrible executive decisions and widespread corruption ultimately left the historical company ______.",
    "options": [
      "pay a toll",
      "in a state of financial ruin",
      "ozone layer",
      "emergency landing"
    ],
    "answer": 1,
    "vocabIndex": 39
  },
  {
    "q": "After the terrible forest fire was finally put out, the rangers found ______ a burnt tent left behind by the careless campers.",
    "options": [
      "public infrastructure",
      "emergency landing",
      "the remains of",
      "do serious damage/harm to"
    ],
    "answer": 2,
    "vocabIndex": 40
  },
  {
    "q": "The aggressive military forces completely ______ the enemy's main supply base, making it impossible for them to continue the war.",
    "options": [
      "alter",
      "repair",
      "ruined",
      "destroyed"
    ],
    "answer": 3,
    "vocabIndex": 41
  },
  {
    "q": "The government warned that the upcoming typhoon could have a highly ______ effect on coastal villages, urging everyone to evacuate immediately.",
    "options": [
      "processed",
      "destructive",
      "bulletproof",
      "harmful"
    ],
    "answer": 1,
    "vocabIndex": 42
  },
  {
    "q": "The sudden explosion at the chemical factory caused widespread ______ to the surrounding neighborhood, shattering windows a mile away.",
    "options": [
      "destruction",
      "toll",
      "kilometer",
      "tsunami"
    ],
    "answer": 0,
    "vocabIndex": 43
  },
  {
    "q": "If you don't use a sturdy phone case to protect your new smartphone, you might accidentally ______ its fragile screen when you drop it.",
    "options": [
      "amend",
      "repair",
      "damage",
      "fortified"
    ],
    "answer": 2,
    "vocabIndex": 44
  },
  {
    "q": "The heavy hailstorm caused severe ______ to the farmer's fruit crop, forcing him to lower his selling prices for the season.",
    "options": [
      "damage",
      "centimeter",
      "hurricane",
      "emergency"
    ],
    "answer": 0,
    "vocabIndex": 45
  },
  {
    "q": "In the final round of the video game tournament, Leo's character managed to ______ to the enemy boss, winning the match instantly.",
    "options": [
      "in the process of",
      "deal massive damage",
      "emergency landing",
      "take a toll on"
    ],
    "answer": 1,
    "vocabIndex": 46
  },
  {
    "q": "Spending too many hours staring at a computer screen in a completely dark room will definitely ______ your eyesight.",
    "options": [
      "natural disaster",
      "make an amendment",
      "severe pain",
      "do serious damage/harm to"
    ],
    "answer": 3,
    "vocabIndex": 47
  },
  {
    "q": "Spreading false rumors about the local restaurant on social media can be extremely ______ to its business and long-term reputation.",
    "options": [
      "damaging",
      "sophisticated",
      "unprecedented",
      "technical"
    ],
    "answer": 0,
    "vocabIndex": 48
  },
  {
    "q": "Many doctors warn that feeding young children too much sugary food and soda can be highly ______ to their developing teeth.",
    "options": [
      "predictable",
      "technical",
      "harmful",
      "flooded"
    ],
    "answer": 2,
    "vocabIndex": 49
  },
  {
    "q": "Don't be afraid of that little garter snake in the backyard; it is completely ______ and actually helps catch annoying garden pests.",
    "options": [
      "harmful",
      "enhanced",
      "prehistoric",
      "harmless"
    ],
    "answer": 3,
    "vocabIndex": 50
  },
  {
    "q": "The flight attendant instructed the passengers that, in a real ______, they must quickly push the red button above their seats.",
    "options": [
      "forecast",
      "emergency",
      "mudslide",
      "flood"
    ],
    "answer": 1,
    "vocabIndex": 51
  },
  {
    "q": "After badly breaking his arm during the football game, Mark was immediately rushed to the nearest ______ for surgical treatment.",
    "options": [
      "make an amendment",
      "severe storm",
      "deal massive damage",
      "emergency room"
    ],
    "answer": 3,
    "vocabIndex": 52
  },
  {
    "q": "The president officially declared a national ______ after the devastating hurricane completely destroyed several coastal cities in the south.",
    "options": [
      "inject money into",
      "state of emergency",
      "genetically modified",
      "severe pain"
    ],
    "answer": 1,
    "vocabIndex": 53
  },
  {
    "q": "One of the airplane's engines suddenly caught fire, forcing the skilled pilot to make a dangerous ______ in a cornfield.",
    "options": [
      "emergency landing",
      "inject money into",
      "pay a toll",
      "severe pain"
    ],
    "answer": 0,
    "vocabIndex": 54
  },
  {
    "q": "The highly energetic people participating in the charity race had to continuously run 10 ______ in the extreme summer heat.",
    "options": [
      "process",
      "emergency",
      "kilometer",
      "landslide"
    ],
    "answer": 2,
    "vocabIndex": 55
  },
  {
    "q": "The exotic green snake that we discovered hiding in the garden bushes was around 90 ______ long and looked quite dangerous.",
    "options": [
      "destruction",
      "prediction",
      "tsunami",
      "centimeter"
    ],
    "answer": 3,
    "vocabIndex": 56
  },
  {
    "q": "To bake this massive birthday cake for the party, you will definitely need at least one ______ of fine white flour.",
    "options": [
      "wildfire",
      "process",
      "kilogram",
      "modification"
    ],
    "answer": 2,
    "vocabIndex": 57
  },
  {
    "q": "The clever marketing team thoroughly ______ their business proposal to much better meet the demanding client's specific professional needs.",
    "options": [
      "modified",
      "flood",
      "ruined",
      "amend"
    ],
    "answer": 0,
    "vocabIndex": 58
  },
  {
    "q": "Many modern environmentalists firmly believe that growing ______ crops might have unforeseen and potentially dangerous effects on local ecosystems.",
    "options": [
      "severe pain",
      "genetically modified",
      "public infrastructure",
      "in the process of"
    ],
    "answer": 1,
    "vocabIndex": 59
  },
  {
    "q": "The structural engineer suggested a slight ______ to the building's original design to ensure it could withstand strong earthquake tremors.",
    "options": [
      "landslide",
      "wildfire",
      "modification",
      "hurricane"
    ],
    "answer": 2,
    "vocabIndex": 60
  },
  {
    "q": "She had to carefully ______ her beautiful wedding dress because she had surprisingly lost a significant amount of weight recently.",
    "options": [
      "alter",
      "amend",
      "modified",
      "process"
    ],
    "answer": 0,
    "vocabIndex": 61
  },
  {
    "q": "Utilizing public commuting options provides a green ______ to driving a private vehicle in congested urban areas.",
    "options": [
      "flooded",
      "alternative",
      "fireproof",
      "harmful"
    ],
    "answer": 1,
    "vocabIndex": 62
  },
  {
    "q": "The international corporation decided to ______ its operational safety policy to thoroughly protect all its warehouse workers.",
    "options": [
      "process",
      "eject",
      "repair",
      "amend"
    ],
    "answer": 3,
    "vocabIndex": 63
  },
  {
    "q": "The progressive politicians proposed a new tariff ______ to support domestic technology manufacturing companies.",
    "options": [
      "kilometer",
      "amendment",
      "centimeter",
      "injection"
    ],
    "answer": 1,
    "vocabIndex": 64
  },
  {
    "q": "The legal committee will ______ the trade agreement to ensure both ports operate smoothly under the new laws.",
    "options": [
      "make an amendment",
      "deal massive damage",
      "state of emergency",
      "natural disaster"
    ],
    "answer": 0,
    "vocabIndex": 65
  },
  {
    "q": "The skilled mechanic will attempt to ______ the mechanical arm that suddenly failed on the automated production line.",
    "options": [
      "modified",
      "alter",
      "repair",
      "ruined"
    ],
    "answer": 2,
    "vocabIndex": 66
  },
  {
    "q": "After thoroughly inspecting the imported automobile, the technician estimated that the engine ______ would take three days.",
    "options": [
      "infrastructure",
      "technique",
      "mudslide",
      "repair"
    ],
    "answer": 3,
    "vocabIndex": 67
  },
  {
    "q": "Jeremy excitedly visited a local dairy factory and carefully watched the fascinating step-by-step ______ of making delicious chocolate ice cream.",
    "options": [
      "fortress",
      "kilogram",
      "process",
      "ruin"
    ],
    "answer": 2,
    "vocabIndex": 68
  },
  {
    "q": "The ambitious software company is currently ______ developing a highly advanced application for learning foreign languages quickly.",
    "options": [
      "severe storm",
      "in the process of",
      "make an amendment",
      "genetically modified"
    ],
    "answer": 1,
    "vocabIndex": 69
  },
  {
    "q": "The busy customer service representative explained that it can take up to three weeks for the company to ______ your request.",
    "options": [
      "process",
      "ruined",
      "damage",
      "predict"
    ],
    "answer": 0,
    "vocabIndex": 70
  },
  {
    "q": "You should definitely try to avoid eating highly ______ meats if you genuinely want to improve your long-term cardiovascular health.",
    "options": [
      "sophisticated",
      "harmful",
      "severe",
      "processed"
    ],
    "answer": 3,
    "vocabIndex": 71
  },
  {
    "q": "Nutritionists consistently warn that a daily diet consisting entirely of cheap ______ will inevitably lead to severe weight gain.",
    "options": [
      "public infrastructure",
      "flood the market",
      "processed food",
      "make an amendment"
    ],
    "answer": 2,
    "vocabIndex": 72
  },
  {
    "q": "The determined president ______ his political campaign promises with his bold new policies aimed at improving the country's weak economy.",
    "options": [
      "enhance",
      "damage",
      "destroyed",
      "fortified"
    ],
    "answer": 3,
    "vocabIndex": 73
  },
  {
    "q": "The ancient Roman soldiers spent several grueling months building a massive stone ______ to protect their city from foreign invaders.",
    "options": [
      "hurricane",
      "fortification",
      "destruction",
      "fortress"
    ],
    "answer": 1,
    "vocabIndex": 74
  },
  {
    "q": "The heavily armed rebels retreated to a hidden mountain ______ where they could safely regroup and plan their next major attack.",
    "options": [
      "fortress",
      "ruin",
      "tsunami",
      "emergency"
    ],
    "answer": 0,
    "vocabIndex": 75
  },
  {
    "q": "The experienced nurse carefully ______ the life-saving drug into Kyle's arm while he bravely looked away to ignore the pain.",
    "options": [
      "predict",
      "fortified",
      "resist",
      "injected"
    ],
    "answer": 3,
    "vocabIndex": 76
  },
  {
    "q": "The frightened child started crying loudly the moment he saw the doctor preparing the sharp needle for his annual ______.",
    "options": [
      "repair",
      "injection",
      "drought",
      "typhoon"
    ],
    "answer": 1,
    "vocabIndex": 77
  },
  {
    "q": "The fighter pilot was forced to immediately ______ from the burning aircraft just seconds before it crashed into the dark ocean.",
    "options": [
      "enhance",
      "damage",
      "eject",
      "amend"
    ],
    "answer": 2,
    "vocabIndex": 78
  },
  {
    "q": "The ambitious investors are planning to ______ the new wearable device, hoping it dominates the global market.",
    "options": [
      "inject money into",
      "object to",
      "in a state of financial ruin",
      "dust storm"
    ],
    "answer": 0,
    "vocabIndex": 79
  },
  {
    "q": "The angry neighbors strongly ______ the controversial plan of building a massive, noisy chemical factory right next to their homes.",
    "options": [
      "emergency room",
      "public infrastructure",
      "object to",
      "flood the market"
    ],
    "answer": 2,
    "vocabIndex": 80
  },
  {
    "q": "Traditional Italian lasagna is usually made from thick ______ of rich meat sauce, fresh pasta, and delicious melted mozzarella cheese.",
    "options": [
      "layer",
      "process",
      "flood",
      "ruins"
    ],
    "answer": 0,
    "vocabIndex": 81
  },
  {
    "q": "The incredibly skilled pastry chef carefully ______ the huge birthday cake with rich chocolate, sweet vanilla, and fresh strawberry cream.",
    "options": [
      "repair",
      "layered",
      "resist",
      "alter"
    ],
    "answer": 1,
    "vocabIndex": 82
  },
  {
    "q": "The progressive environmental policy aims to effectively stop harmful chemicals from continually destroying the Earth's delicate and protective ______.",
    "options": [
      "inject money into",
      "the remains of",
      "pay a toll",
      "ozone layer"
    ],
    "answer": 3,
    "vocabIndex": 83
  },
  {
    "q": "These beautiful clay pots were perfectly made by the artist using a brand new ______ she learned during her trip.",
    "options": [
      "technique",
      "modification",
      "improvement",
      "drought"
    ],
    "answer": 0,
    "vocabIndex": 84
  },
  {
    "q": "The brilliant engineering team unexpectedly ran into several major ______ problems, so the highly anticipated speech unfortunately started very late.",
    "options": [
      "enhanced",
      "technical",
      "bulletproof",
      "severe"
    ],
    "answer": 1,
    "vocabIndex": 85
  },
  {
    "q": "While tomatoes are commonly treated as vegetables in cooking, ______, they are actually categorized as a fruit by expert botanists.",
    "options": [
      "fireproof",
      "alter",
      "technically",
      "eject"
    ],
    "answer": 2,
    "vocabIndex": 86
  },
  {
    "q": "The famous movie director is widely known for the camera ______ used in his intense and realistic action films.",
    "options": [
      "hurricane",
      "resistance",
      "injection",
      "technique"
    ],
    "answer": 3,
    "vocabIndex": 87
  },
  {
    "q": "Even with modern technology, scientists cannot yet accurately ______ exactly when and where a massive, destructive earthquake will finally happen.",
    "options": [
      "amend",
      "predict",
      "damage",
      "enhance"
    ],
    "answer": 1,
    "vocabIndex": 88
  },
  {
    "q": "The famous economist's bold ______ about the sudden stock market crash unfortunately turned out to be completely and devastatingly true.",
    "options": [
      "enhancement",
      "emergency",
      "hurricane",
      "prediction"
    ],
    "answer": 3,
    "vocabIndex": 89
  },
  {
    "q": "The plot of that romantic comedy movie was incredibly boring and highly ______, as I knew exactly how it would end.",
    "options": [
      "heat-resistant",
      "alternative",
      "predictable",
      "technical"
    ],
    "answer": 2,
    "vocabIndex": 90
  },
  {
    "q": "Before setting sail across the treacherous ocean, the cautious captain carefully listened to the detailed weather ______ on the radio.",
    "options": [
      "forecast",
      "landscape",
      "repair",
      "fortress"
    ],
    "answer": 0,
    "vocabIndex": 91
  },
  {
    "q": "The professional photographer cleverly used advanced computer software to significantly ______ the colors and sharpness of the beautiful wedding photos.",
    "options": [
      "resist",
      "enhance",
      "predict",
      "destroyed"
    ],
    "answer": 1,
    "vocabIndex": 92
  },
  {
    "q": "The brand new military aircraft is fully equipped with highly ______ radar systems to detect enemy targets from much further away.",
    "options": [
      "flooded",
      "destructive",
      "enhanced",
      "technical"
    ],
    "answer": 2,
    "vocabIndex": 93
  },
  {
    "q": "Scientific studies clearly show that those who exercise regularly experience significant ______ in both their physical health and mental abilities.",
    "options": [
      "forecast",
      "improvement",
      "technique",
      "enhancement"
    ],
    "answer": 3,
    "vocabIndex": 94
  },
  {
    "q": "After practicing speaking Spanish for an hour every single day, there was a massive ______ in his overall conversational fluency.",
    "options": [
      "improvement",
      "destruction",
      "centimeter",
      "forecast"
    ],
    "answer": 0,
    "vocabIndex": 95
  },
  {
    "q": "While digging deeply in the ancient cave, the excited archaeologists discovered several mysterious ______ tools carved out of animal bone.",
    "options": [
      "sophisticated",
      "harmful",
      "prehistoric",
      "harmless"
    ],
    "answer": 2,
    "vocabIndex": 96
  },
  {
    "q": "The leading anthropologist thoroughly analyzed the ______ tools found at the ancient crime scene to understand how the tribe historically survived.",
    "options": [
      "fireproof",
      "primitive",
      "unprecedented",
      "processed"
    ],
    "answer": 1,
    "vocabIndex": 97
  },
  {
    "q": "The software engineering team deployed a ______ database system to monitor the day-to-day business operations of the company.",
    "options": [
      "waterproof",
      "water-resistant",
      "harmful",
      "sophisticated"
    ],
    "answer": 3,
    "vocabIndex": 98
  },
  {
    "q": "The international corporation achieved ______ success last year, breaking all previous sales records for portable electronic devices.",
    "options": [
      "unprecedented",
      "fireproof",
      "damaging",
      "destructive"
    ],
    "answer": 0,
    "vocabIndex": 99
  }
];

const LOOKUP = {
  "bulletproof": {
    "pos": "adj.",
    "en_def": "designed to resist the penetration of bullets.",
    "cn_def": "防彈的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "designed to resist the penetration of bullets.",
        "cn_def": "防彈的"
      }
    ]
  },
  "fireproof": {
    "pos": "adj.",
    "en_def": "able to withstand fire or great heat.",
    "cn_def": "防火的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to withstand fire or great heat.",
        "cn_def": "防火的"
      }
    ]
  },
  "waterproof": {
    "pos": "adj.",
    "en_def": "impervious to water.",
    "cn_def": "防水的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "impervious to water.",
        "cn_def": "防水的"
      }
    ]
  },
  "water-resistant": {
    "pos": "adj.",
    "en_def": "able to resist the penetration of water to some degree but not entirely.",
    "cn_def": "抗水的；防潑水的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to resist the penetration of water to some degree but not entirely.",
        "cn_def": "抗水的；防潑水的"
      }
    ]
  },
  "heat-resistant": {
    "pos": "adj.",
    "en_def": "able to withstand high temperatures without being damaged.",
    "cn_def": "耐熱的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to withstand high temperatures without being damaged.",
        "cn_def": "耐熱的"
      }
    ]
  },
  "resist": {
    "pos": "v.",
    "en_def": "to withstand the action or effect of.",
    "cn_def": "抵抗；忍住",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to withstand the action or effect of.",
        "cn_def": "抵抗；忍住"
      }
    ]
  },
  "resistant": {
    "pos": "adj.",
    "en_def": "offering resistance to something or someone.",
    "cn_def": "有抵抗力的；抗...的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "offering resistance to something or someone.",
        "cn_def": "有抵抗力的；抗...的"
      }
    ]
  },
  "resistance": {
    "pos": "n.",
    "en_def": "the refusal to accept or comply with something.",
    "cn_def": "抵抗（力）；阻力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the refusal to accept or comply with something.",
        "cn_def": "抵抗（力）；阻力"
      }
    ]
  },
  "severe": {
    "pos": "adj.",
    "en_def": "of something bad or undesirable: very great, intense, or harsh.",
    "cn_def": "嚴重的；嚴厲的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "of something bad or undesirable: very great, intense, or harsh.",
        "cn_def": "嚴重的；嚴厲的"
      }
    ]
  },
  "severely": {
    "pos": "adv.",
    "en_def": "to an undesirably great or intense degree.",
    "cn_def": "嚴重地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "to an undesirably great or intense degree.",
        "cn_def": "嚴重地"
      }
    ]
  },
  "severity": {
    "pos": "n.",
    "en_def": "the fact or condition of being severe.",
    "cn_def": "嚴重性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the fact or condition of being severe.",
        "cn_def": "嚴重性"
      }
    ]
  },
  "severe storm": {
    "pos": "phr.",
    "en_def": "very bad and destructive weather.",
    "cn_def": "強烈風暴",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "very bad and destructive weather.",
        "cn_def": "強烈風暴"
      }
    ]
  },
  "severe pain": {
    "pos": "phr.",
    "en_def": "physical suffering or discomfort caused by illness or injury that is very intense.",
    "cn_def": "劇痛",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "physical suffering or discomfort caused by illness or injury that is very intense.",
        "cn_def": "劇痛"
      }
    ]
  },
  "natural disaster": {
    "pos": "phr.",
    "en_def": "An extreme event like a flood, earthquake, or storm that causes great damage or loss of life.",
    "cn_def": "自然災害、天災",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "An extreme event like a flood, earthquake, or storm that causes great damage or loss of life.",
        "cn_def": "自然災害、天災"
      }
    ]
  },
  "drought": {
    "pos": "n.",
    "en_def": "a prolonged period of abnormally low rainfall, leading to a shortage of water.",
    "cn_def": "乾旱",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a prolonged period of abnormally low rainfall, leading to a shortage of water.",
        "cn_def": "乾旱"
      }
    ]
  },
  "famine": {
    "pos": "n.",
    "en_def": "extreme scarcity of food.",
    "cn_def": "饑荒",
    "combined": [
      {
        "pos": "n.",
        "en_def": "extreme scarcity of food.",
        "cn_def": "饑荒"
      }
    ]
  },
  "wildfire": {
    "pos": "n.",
    "en_def": "a large, destructive fire that spreads quickly over woodland or brush.",
    "cn_def": "野火",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large, destructive fire that spreads quickly over woodland or brush.",
        "cn_def": "野火"
      }
    ]
  },
  "mudslide": {
    "pos": "n.",
    "en_def": "a mass of mud and other earthy material that is falling or has fallen down a hillside.",
    "cn_def": "土石流",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a mass of mud and other earthy material that is falling or has fallen down a hillside.",
        "cn_def": "土石流"
      }
    ]
  },
  "dust storm": {
    "pos": "phr.",
    "en_def": "a meteorological phenomenon common in arid and semi-arid regions.",
    "cn_def": "沙塵暴",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a meteorological phenomenon common in arid and semi-arid regions.",
        "cn_def": "沙塵暴"
      }
    ]
  },
  "tsunami": {
    "pos": "n.",
    "en_def": "A giant ocean wave caused by an earthquake under the sea.",
    "cn_def": "海嘯",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A giant ocean wave caused by an earthquake under the sea.",
        "cn_def": "海嘯"
      }
    ]
  },
  "cyclone": {
    "pos": "n.",
    "en_def": "A violent tropical storm with very strong winds that rotate around a center.",
    "cn_def": "氣旋、熱帶風暴",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A violent tropical storm with very strong winds that rotate around a center.",
        "cn_def": "氣旋、熱帶風暴"
      }
    ]
  },
  "typhoon": {
    "pos": "n.",
    "en_def": "A violent tropical storm with extremely strong winds and heavy rain that occurs in the Western Pacific.",
    "cn_def": "颱風",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A violent tropical storm with extremely strong winds and heavy rain that occurs in the Western Pacific.",
        "cn_def": "颱風"
      }
    ]
  },
  "hurricane": {
    "pos": "n.",
    "en_def": "A violent tropical storm with extremely strong winds that occurs in the Atlantic Ocean.",
    "cn_def": "颶風",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A violent tropical storm with extremely strong winds that occurs in the Atlantic Ocean.",
        "cn_def": "颶風"
      }
    ]
  },
  "tornado": {
    "pos": "n.",
    "en_def": "A violent, spinning column of air that stretches from a dark cloud to the ground.",
    "cn_def": "龍捲風",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A violent, spinning column of air that stretches from a dark cloud to the ground.",
        "cn_def": "龍捲風"
      }
    ]
  },
  "landslide": {
    "pos": "n.",
    "en_def": "A large mass of rocks and earth that suddenly slides down a mountain or cliff.",
    "cn_def": "土石流、山崩",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A large mass of rocks and earth that suddenly slides down a mountain or cliff.",
        "cn_def": "土石流、山崩"
      }
    ]
  },
  "landscape": {
    "pos": "n.",
    "en_def": "Everything you can see when you look across a large area of land.",
    "cn_def": "風景、景色、自然景觀",
    "combined": [
      {
        "pos": "n.",
        "en_def": "Everything you can see when you look across a large area of land.",
        "cn_def": "風景、景色、自然景觀"
      }
    ]
  },
  "flood": {
    "pos": "n.",
    "en_def": "an overflow of a large amount of water beyond its normal limits.",
    "cn_def": "洪水",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an overflow of a large amount of water beyond its normal limits.",
        "cn_def": "洪水"
      },
      {
        "pos": "v.",
        "en_def": "to cover or submerge a place with water in a flood.",
        "cn_def": "淹沒；氾濫"
      }
    ]
  },
  "flooded": {
    "pos": "adj.",
    "en_def": "covered or submerged with water.",
    "cn_def": "被淹沒的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "covered or submerged with water.",
        "cn_def": "被淹沒的"
      }
    ]
  },
  "flash flood": {
    "pos": "phr.",
    "en_def": "a sudden local flood, typically due to heavy rain.",
    "cn_def": "山洪爆發",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a sudden local flood, typically due to heavy rain.",
        "cn_def": "山洪爆發"
      }
    ]
  },
  "flood the market": {
    "pos": "phr.",
    "en_def": "to bring a huge number of things to a place to sell.",
    "cn_def": "充斥市場",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to bring a huge number of things to a place to sell.",
        "cn_def": "充斥市場"
      }
    ]
  },
  "toll": {
    "pos": "n.",
    "en_def": "the number of deaths, casualties, or injuries arising from particular circumstances.",
    "cn_def": "傷亡人數",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the number of deaths, casualties, or injuries arising from particular circumstances.",
        "cn_def": "傷亡人數"
      }
    ]
  },
  "pay a toll": {
    "pos": "phr.",
    "en_def": "to pay a fee to use a particular road or bridge.",
    "cn_def": "付通行費",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to pay a fee to use a particular road or bridge.",
        "cn_def": "付通行費"
      }
    ]
  },
  "take a toll on": {
    "pos": "phr.",
    "en_def": "to have a bad effect on someone or something over a long period.",
    "cn_def": "對...造成傷害",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to have a bad effect on someone or something over a long period.",
        "cn_def": "對...造成傷害"
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
  "public infrastructure": {
    "pos": "phr.",
    "en_def": "facilities and systems serving a country, city, or area.",
    "cn_def": "公共基礎建設",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "facilities and systems serving a country, city, or area.",
        "cn_def": "公共基礎建設"
      }
    ]
  },
  "ruin": {
    "pos": "v.",
    "en_def": "to reduce to a state of ruin or destroy.",
    "cn_def": "毀壞；破壞",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to reduce to a state of ruin or destroy.",
        "cn_def": "毀壞；破壞"
      },
      {
        "pos": "n.",
        "en_def": "the physical destruction or disintegration of something.",
        "cn_def": "毀滅；廢墟"
      }
    ]
  },
  "ruined": {
    "pos": "v.",
    "en_def": "to reduce to a state of ruin or destroy.",
    "cn_def": "毀壞；破壞",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to reduce to a state of ruin or destroy.",
        "cn_def": "毀壞；破壞"
      }
    ]
  },
  "ruins": {
    "pos": "n. pl.",
    "en_def": "The broken parts that remain after a building or city has been destroyed.",
    "cn_def": "廢墟、遺跡",
    "combined": [
      {
        "pos": "n. pl.",
        "en_def": "The broken parts that remain after a building or city has been destroyed.",
        "cn_def": "廢墟、遺跡"
      }
    ]
  },
  "in a state of ruin": {
    "pos": "phr.",
    "en_def": "in a completely broken or destroyed condition.",
    "cn_def": "處於毀滅狀態",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "in a completely broken or destroyed condition.",
        "cn_def": "處於毀滅狀態"
      }
    ]
  },
  "in a state of financial ruin": {
    "pos": "phr.",
    "en_def": "in a completely broken or destroyed condition.",
    "cn_def": "處於毀滅狀態",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "in a completely broken or destroyed condition.",
        "cn_def": "處於毀滅狀態"
      }
    ]
  },
  "the remains of": {
    "pos": "phr.",
    "en_def": "The parts of something that are left after the rest has been destroyed, used, or taken away.",
    "cn_def": "…的殘骸、…的遺留物",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The parts of something that are left after the rest has been destroyed, used, or taken away.",
        "cn_def": "…的殘骸、…的遺留物"
      }
    ]
  },
  "destroyed": {
    "pos": "v.",
    "en_def": "to put an end to the existence of something by damaging or attacking it.",
    "cn_def": "摧毀",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to put an end to the existence of something by damaging or attacking it.",
        "cn_def": "摧毀"
      }
    ]
  },
  "destroy": {
    "pos": "v.",
    "en_def": "to put an end to the existence of something by damaging or attacking it.",
    "cn_def": "摧毀",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to put an end to the existence of something by damaging or attacking it.",
        "cn_def": "摧毀"
      }
    ]
  },
  "destructive": {
    "pos": "adj.",
    "en_def": "Causing a large amount of severe damage, harm, or destruction.",
    "cn_def": "具破壞性的、毀滅性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Causing a large amount of severe damage, harm, or destruction.",
        "cn_def": "具破壞性的、毀滅性的"
      }
    ]
  },
  "destruction": {
    "pos": "n.",
    "en_def": "The act or process of destroying something so badly that it cannot be fixed.",
    "cn_def": "破壞、毀滅、摧毀",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The act or process of destroying something so badly that it cannot be fixed.",
        "cn_def": "破壞、毀滅、摧毀"
      }
    ]
  },
  "damage": {
    "pos": "v.",
    "en_def": "To harm, break, or spoil something physically.",
    "cn_def": "損害、損壞、破壞",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To harm, break, or spoil something physically.",
        "cn_def": "損害、損壞、破壞"
      },
      {
        "pos": "n. [U]",
        "en_def": "Physical harm caused to something, making it less attractive, useful, or valuable.",
        "cn_def": "損害、損失、破壞"
      }
    ]
  },
  "deal... damage": {
    "pos": "phr.",
    "en_def": "To cause harm or damage to someone or something, often used in games or combat contexts.",
    "cn_def": "造成…傷害、施加…破壞",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To cause harm or damage to someone or something, often used in games or combat contexts.",
        "cn_def": "造成…傷害、施加…破壞"
      }
    ]
  },
  "deal massive damage": {
    "pos": "phr.",
    "en_def": "To cause harm or damage to someone or something, often used in games or combat contexts.",
    "cn_def": "造成…傷害、施加…破壞",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To cause harm or damage to someone or something, often used in games or combat contexts.",
        "cn_def": "造成…傷害、施加…破壞"
      }
    ]
  },
  "do damageharm to": {
    "pos": "phr.",
    "en_def": "To cause physical, mental, or environmental harm or injury to someone or something.",
    "cn_def": "對…造成損害/傷害",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To cause physical, mental, or environmental harm or injury to someone or something.",
        "cn_def": "對…造成損害/傷害"
      }
    ]
  },
  "do serious damage/harm to": {
    "pos": "phr.",
    "en_def": "To cause physical, mental, or environmental harm or injury to someone or something.",
    "cn_def": "對…造成損害/傷害",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To cause physical, mental, or environmental harm or injury to someone or something.",
        "cn_def": "對…造成損害/傷害"
      }
    ]
  },
  "damaging": {
    "pos": "adj.",
    "en_def": "Causing social, financial, or physical harm or trouble.",
    "cn_def": "有害的、造成破壞的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Causing social, financial, or physical harm or trouble.",
        "cn_def": "有害的、造成破壞的"
      }
    ]
  },
  "harmful": {
    "pos": "adj.",
    "en_def": "Causing or likely to cause damage, pain, or injury.",
    "cn_def": "有害的、致傷的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Causing or likely to cause damage, pain, or injury.",
        "cn_def": "有害的、致傷的"
      }
    ]
  },
  "harmless": {
    "pos": "adj.",
    "en_def": "Completely safe and not able or likely to cause any hurt, pain, or damage.",
    "cn_def": "無害的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Completely safe and not able or likely to cause any hurt, pain, or damage.",
        "cn_def": "無害的"
      }
    ]
  },
  "emergency": {
    "pos": "n.",
    "en_def": "a serious, unexpected, and often dangerous situation requiring immediate action.",
    "cn_def": "緊急情況",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a serious, unexpected, and often dangerous situation requiring immediate action.",
        "cn_def": "緊急情況"
      }
    ]
  },
  "emergency room": {
    "pos": "phr.",
    "en_def": "the department of a hospital that provides immediate treatment for acute illnesses and trauma.",
    "cn_def": "急診室",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the department of a hospital that provides immediate treatment for acute illnesses and trauma.",
        "cn_def": "急診室"
      }
    ]
  },
  "state of emergency": {
    "pos": "phr.",
    "en_def": "a situation of national danger or disaster in which a government suspends normal procedures.",
    "cn_def": "緊急狀態",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a situation of national danger or disaster in which a government suspends normal procedures.",
        "cn_def": "緊急狀態"
      }
    ]
  },
  "emergency landing": {
    "pos": "phr.",
    "en_def": "an unplanned landing by an aircraft due to a crisis.",
    "cn_def": "緊急降落",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an unplanned landing by an aircraft due to a crisis.",
        "cn_def": "緊急降落"
      }
    ]
  },
  "kilometer": {
    "pos": "n.",
    "en_def": "a metric unit of measurement equal to 1,000 meters.",
    "cn_def": "公里",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a metric unit of measurement equal to 1,000 meters.",
        "cn_def": "公里"
      }
    ]
  },
  "centimeter": {
    "pos": "n.",
    "en_def": "a metric unit of length, equal to one hundredth of a meter.",
    "cn_def": "公分",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a metric unit of length, equal to one hundredth of a meter.",
        "cn_def": "公分"
      }
    ]
  },
  "kilogram": {
    "pos": "n.",
    "en_def": "the SI unit of mass, equivalent to 1,000 grams.",
    "cn_def": "公斤",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the SI unit of mass, equivalent to 1,000 grams.",
        "cn_def": "公斤"
      }
    ]
  },
  "modified": {
    "pos": "v.",
    "en_def": "to make partial or minor changes to something.",
    "cn_def": "修改",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make partial or minor changes to something.",
        "cn_def": "修改"
      }
    ]
  },
  "modify": {
    "pos": "v.",
    "en_def": "to make partial or minor changes to something.",
    "cn_def": "修改",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make partial or minor changes to something.",
        "cn_def": "修改"
      }
    ]
  },
  "genetically modified": {
    "pos": "phr.",
    "en_def": "containing genetic material that has been artificially altered.",
    "cn_def": "基因改造的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "containing genetic material that has been artificially altered.",
        "cn_def": "基因改造的"
      }
    ]
  },
  "modification": {
    "pos": "n.",
    "en_def": "the action of modifying something.",
    "cn_def": "修改；改變",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of modifying something.",
        "cn_def": "修改；改變"
      }
    ]
  },
  "alter": {
    "pos": "v.",
    "en_def": "to change or cause to change in character or composition.",
    "cn_def": "改變",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to change or cause to change in character or composition.",
        "cn_def": "改變"
      }
    ]
  },
  "alternative": {
    "pos": "n./adj.",
    "en_def": "a choice limited to one of two or more possibilities, or describing something available as another choice",
    "cn_def": "替代方案；可替代的",
    "combined": [
      {
        "pos": "n./adj.",
        "en_def": "a choice limited to one of two or more possibilities, or describing something available as another choice",
        "cn_def": "替代方案；可替代的"
      }
    ]
  },
  "amend": {
    "pos": "v.",
    "en_def": "to formally modify, alter, or update a legal document, contract, policy, or legislative bill",
    "cn_def": "修訂；修改（法律/文件）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to formally modify, alter, or update a legal document, contract, policy, or legislative bill",
        "cn_def": "修訂；修改（法律/文件）"
      }
    ]
  },
  "amendment": {
    "pos": "n.",
    "en_def": "a formal or official change, modification, or addition made to a constitution, statute, or contract",
    "cn_def": "修訂案；修正條款",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a formal or official change, modification, or addition made to a constitution, statute, or contract",
        "cn_def": "修訂案；修正條款"
      }
    ]
  },
  "make an amendment": {
    "pos": "phr.",
    "en_def": "to systematically perform or introduce a formal modification to a law, rule, or contract",
    "cn_def": "進行修訂；做出修改",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to systematically perform or introduce a formal modification to a law, rule, or contract",
        "cn_def": "進行修訂；做出修改"
      }
    ]
  },
  "repair": {
    "pos": "v.",
    "en_def": "to fix, restore, or mend something that is damaged, broken, split, or not functioning correctly",
    "cn_def": "修復；修理（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to fix, restore, or mend something that is damaged, broken, split, or not functioning correctly",
        "cn_def": "修復；修理（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "the factual act or process of fixing something that is broken, damaged, or completely worn out",
        "cn_def": "修理；修補（名詞）"
      }
    ]
  },
  "process": {
    "pos": "n.",
    "en_def": "a series of actions or steps taken in order to achieve a particular end.",
    "cn_def": "過程",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a series of actions or steps taken in order to achieve a particular end.",
        "cn_def": "過程"
      },
      {
        "pos": "v.",
        "en_def": "to perform a series of mechanical or chemical operations on something.",
        "cn_def": "處理；加工"
      }
    ]
  },
  "in the process of": {
    "pos": "phr.",
    "en_def": "doing something currently.",
    "cn_def": "在...的過程中",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "doing something currently.",
        "cn_def": "在...的過程中"
      }
    ]
  },
  "processed": {
    "pos": "adj.",
    "en_def": "having been subjected to a special process or treatment.",
    "cn_def": "加工過的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having been subjected to a special process or treatment.",
        "cn_def": "加工過的"
      }
    ]
  },
  "processed food": {
    "pos": "phr.",
    "en_def": "food that has been altered from its natural state for safety reasons or convenience.",
    "cn_def": "加工食品",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "food that has been altered from its natural state for safety reasons or convenience.",
        "cn_def": "加工食品"
      }
    ]
  },
  "fortify": {
    "pos": "v.",
    "en_def": "to strengthen a place with defensive works so as to protect it against attack.",
    "cn_def": "強化；加強",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to strengthen a place with defensive works so as to protect it against attack.",
        "cn_def": "強化；加強"
      }
    ]
  },
  "fortified": {
    "pos": "v.",
    "en_def": "to strengthen a place with defensive works so as to protect it against attack.",
    "cn_def": "強化；加強",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to strengthen a place with defensive works so as to protect it against attack.",
        "cn_def": "強化；加強"
      }
    ]
  },
  "fortification": {
    "pos": "n.",
    "en_def": "a defensive wall or other reinforcement built to strengthen a place.",
    "cn_def": "防禦工事；強化",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a defensive wall or other reinforcement built to strengthen a place.",
        "cn_def": "防禦工事；強化"
      }
    ]
  },
  "fortress": {
    "pos": "n.",
    "en_def": "a heavily protected and impenetrable building.",
    "cn_def": "堡壘",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a heavily protected and impenetrable building.",
        "cn_def": "堡壘"
      }
    ]
  },
  "inject": {
    "pos": "v.",
    "en_def": "to drive or force a liquid into a person's body with a syringe.",
    "cn_def": "注射；注入",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to drive or force a liquid into a person's body with a syringe.",
        "cn_def": "注射；注入"
      }
    ]
  },
  "injected": {
    "pos": "v.",
    "en_def": "to drive or force a liquid into a person's body with a syringe.",
    "cn_def": "注射；注入",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to drive or force a liquid into a person's body with a syringe.",
        "cn_def": "注射；注入"
      }
    ]
  },
  "injection": {
    "pos": "n.",
    "en_def": "an instance of injecting or being injected.",
    "cn_def": "注射；打針",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an instance of injecting or being injected.",
        "cn_def": "注射；打針"
      }
    ]
  },
  "eject": {
    "pos": "v.",
    "en_def": "to force or throw something out, typically in a violent or sudden way.",
    "cn_def": "彈出；逐出",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to force or throw something out, typically in a violent or sudden way.",
        "cn_def": "彈出；逐出"
      }
    ]
  },
  "inject money into": {
    "pos": "phr.",
    "en_def": "to provide funds to a project or business.",
    "cn_def": "向...注資",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to provide funds to a project or business.",
        "cn_def": "向...注資"
      }
    ]
  },
  "object to": {
    "pos": "v.",
    "en_def": "to say something to express one's disapproval or disagreement.",
    "cn_def": "反對",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to say something to express one's disapproval or disagreement.",
        "cn_def": "反對"
      }
    ]
  },
  "layer": {
    "pos": "n.",
    "en_def": "a sheet, quantity, or thickness of material, typically one of several.",
    "cn_def": "層",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sheet, quantity, or thickness of material, typically one of several.",
        "cn_def": "層"
      },
      {
        "pos": "v.",
        "en_def": "to arrange in a layer or layers.",
        "cn_def": "把...分層"
      }
    ]
  },
  "layered": {
    "pos": "v.",
    "en_def": "to arrange in a layer or layers.",
    "cn_def": "把...分層",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to arrange in a layer or layers.",
        "cn_def": "把...分層"
      }
    ]
  },
  "ozone layer": {
    "pos": "phr.",
    "en_def": "a layer in the earth's stratosphere containing a high concentration of ozone.",
    "cn_def": "臭氧層",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a layer in the earth's stratosphere containing a high concentration of ozone.",
        "cn_def": "臭氧層"
      }
    ]
  },
  "technique": {
    "pos": "n.",
    "en_def": "a way of carrying out a particular task.",
    "cn_def": "技巧；技術",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a way of carrying out a particular task.",
        "cn_def": "技巧；技術"
      },
      {
        "pos": "n.",
        "en_def": "skill",
        "cn_def": "技巧"
      }
    ]
  },
  "technical": {
    "pos": "adj.",
    "en_def": "relating to a particular subject, art, or craft, or its techniques.",
    "cn_def": "技術上的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to a particular subject, art, or craft, or its techniques.",
        "cn_def": "技術上的"
      }
    ]
  },
  "technically": {
    "pos": "adv.",
    "en_def": "according to the facts or exact meaning of something.",
    "cn_def": "嚴格來說；技術上",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "according to the facts or exact meaning of something.",
        "cn_def": "嚴格來說；技術上"
      }
    ]
  },
  "predict": {
    "pos": "v.",
    "en_def": "to say or estimate that a specified thing will happen in the future.",
    "cn_def": "預測",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to say or estimate that a specified thing will happen in the future.",
        "cn_def": "預測"
      }
    ]
  },
  "prediction": {
    "pos": "n.",
    "en_def": "a thing predicted; a forecast.",
    "cn_def": "預言；預測",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thing predicted; a forecast.",
        "cn_def": "預言；預測"
      }
    ]
  },
  "predictable": {
    "pos": "adj.",
    "en_def": "able to be predicted.",
    "cn_def": "可預測的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to be predicted.",
        "cn_def": "可預測的"
      }
    ]
  },
  "forecast": {
    "pos": "n.",
    "en_def": "a prediction or estimate of future events, especially coming weather.",
    "cn_def": "預報",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a prediction or estimate of future events, especially coming weather.",
        "cn_def": "預報"
      }
    ]
  },
  "enhance": {
    "pos": "v.",
    "en_def": "to intensify, increase, or further improve the quality, value, or extent of.",
    "cn_def": "提升；加強",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to intensify, increase, or further improve the quality, value, or extent of.",
        "cn_def": "提升；加強"
      }
    ]
  },
  "enhanced": {
    "pos": "adj.",
    "en_def": "intensified, increased, or further improved in quality.",
    "cn_def": "增強的；改良的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "intensified, increased, or further improved in quality.",
        "cn_def": "增強的；改良的"
      }
    ]
  },
  "enhancement": {
    "pos": "n.",
    "en_def": "an increase or improvement in quality, value, or extent.",
    "cn_def": "提升；增強",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an increase or improvement in quality, value, or extent.",
        "cn_def": "提升；增強"
      }
    ]
  },
  "improvement": {
    "pos": "n.",
    "en_def": "an example of improving or being improved.",
    "cn_def": "改善；進步",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an example of improving or being improved.",
        "cn_def": "改善；進步"
      }
    ]
  },
  "prehistoric": {
    "pos": "adj.",
    "en_def": "relating to or denoting the period before written records.",
    "cn_def": "史前的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to or denoting the period before written records.",
        "cn_def": "史前的"
      }
    ]
  },
  "primitive": {
    "pos": "adj.",
    "en_def": "relating to, denoting, or preserving the character of an early stage in the historical development of something",
    "cn_def": "原始的；遠古的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to, denoting, or preserving the character of an early stage in the historical development of something",
        "cn_def": "原始的；遠古的"
      }
    ]
  },
  "sophisticated": {
    "pos": "adj.",
    "en_def": "having a high degree of complexity, refinement, or advanced development in technology, system, or taste",
    "cn_def": "精密的；複雜先進的；老練的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a high degree of complexity, refinement, or advanced development in technology, system, or taste",
        "cn_def": "精密的；複雜先進的；老練的"
      }
    ]
  },
  "unprecedented": {
    "pos": "adj.",
    "en_def": "never done, known, or experienced before in history, representing a completely new situation",
    "cn_def": "空前的；前所未有的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "never done, known, or experienced before in history, representing a completely new situation",
        "cn_def": "空前的；前所未有的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
