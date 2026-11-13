// Unit 17 Quiz Data: hungry – literally translated
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Basic U17 - hungry – literally translated",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "hungry",
    "pos": "adj.",
    "cn_def": "飢餓的",
    "en_def": "feeling or displaying the need for food.",
    "sentence": "The extremely {{BLANK}} little boy loudly asked his busy mother to quickly cook some delicious dinner.",
    "cn": "極度飢餓的小男孩大聲要求他忙碌的母親迅速煮一些美味的晚餐。"
  },
  {
    "word": "hunger",
    "pos": "n.",
    "cn_def": "飢餓",
    "en_def": "a feeling of discomfort or weakness caused by lack of food.",
    "sentence": "Lily's {{BLANK}} didn't go away even after she eagerly ate two huge sandwiches for lunch.",
    "cn": "莉莉的飢餓即使在她渴望地吃了兩個巨大的三明治當午餐後也沒有消失。"
  },
  {
    "word": "hunger for",
    "pos": "phr.",
    "cn_def": "渴望",
    "en_def": "to have a strong desire for something.",
    "sentence": "Ever since he was a young student, ambitious George has always had a deep {{BLANK}} knowledge.",
    "cn": "自從他還是個年輕學生以來，雄心勃勃的喬治就一直對知識有著深深的渴望。"
  },
  {
    "word": "long for",
    "pos": "v. phr.",
    "cn_def": "渴望得到…、盼望…",
    "en_def": "To want something very much, especially when it is difficult to get or will take a long time.",
    "sentence": "After working in the busy city for years, Marcus began to {{BLANK}} a peaceful life in a quiet village.",
    "cn": "在忙碌的城市工作多年後，馬庫斯開始渴望得到安靜村莊裡的平靜生活。"
  },
  {
    "word": "longs to",
    "pos": "v. phr.",
    "cn_def": "渴望做…、極想做…",
    "en_def": "To have a strong desire to perform a specific action or do something.",
    "sentence": "Having lived abroad for over five years, Chloe {{BLANK}} return home and spend time with her family.",
    "cn": "在國外生活了五年多，克洛伊渴望回到家鄉並陪伴她的家人。"
  },
  {
    "word": "desires",
    "pos": "v.",
    "cn_def": "渴望、想要、要求",
    "en_def": "To want something strongly or wish for something to happen.",
    "sentence": "The young entrepreneur truly {{BLANK}} to make a positive impact on society through her eco-friendly company.",
    "cn": "這位年輕的企業家真心渴望透過她那家環保概念的公司來對社會產生正面的影響。"
  },
  {
    "word": "desire",
    "pos": "n. [C, U]",
    "cn_def": "渴望、慾望、心願",
    "en_def": "A strong feeling of wanting to have something or wishing for something to happen.",
    "sentence": "Leo expressed a strong {{BLANK}} to learn advanced Japanese cooking techniques from the master chef.",
    "cn": "里歐表達了想要向主廚學習高級日本料理烹飪技巧的強烈渴望（心願）。"
  },
  {
    "word": "aspire",
    "pos": "v.",
    "cn_def": "渴望（成就）、追求、立志",
    "en_def": "To have a strong hope or ambition to achieve something great or become successful.",
    "sentence": "Many young students in the sports program {{BLANK}} to compete in the Olympic Games one day.",
    "cn": "體育培訓計畫中的許多年輕學生都立志（渴望）有一天能參加奧運會。"
  },
  {
    "word": "aspirations",
    "pos": "n. [C, usually plural]",
    "cn_def": "抱負、渴望、志向",
    "en_def": "A strong hope, desire, or ambition to achieve something high or great.",
    "sentence": "The university helps students fulfill their career {{BLANK}} by providing professional internships.",
    "cn": "這所大學透過提供專業的實習機會，來幫助學生實現他們的職涯抱負（志向）。"
  },
  {
    "word": "ambition",
    "pos": "n. [C, U]",
    "cn_def": "雄心、抱負、野心",
    "en_def": "A strong desire to achieve success, power, wealth, or a specific high goal.",
    "sentence": "Marcus has a great {{BLANK}} to open his own law firm before he reaches the age of thirty-five.",
    "cn": "馬庫斯有著在三十五歲前開設自己律師事務所的遠大雄心（抱負）。"
  },
  {
    "word": "ambitious",
    "pos": "adj.",
    "cn_def": "有雄心壯志的、野心勃勃的、艱巨的",
    "en_def": "Having or showing a strong desire and determination to succeed, or requiring a lot of effort.",
    "sentence": "The city government announced an {{BLANK}} plan to transition all public transport to green energy within three years.",
    "cn": "市政府宣布了一項雄心勃勃的（艱巨的）計劃，要在三年內將所有大眾運輸工具轉型為綠色能源。"
  },
  {
    "word": "starve",
    "pos": "v.",
    "cn_def": "挨餓",
    "en_def": "to suffer severely or die from hunger.",
    "sentence": "The poor stray animals will eventually {{BLANK}} if the kind local residents do not regularly feed them.",
    "cn": "如果善良的當地居民不定期餵食牠們，可憐的流浪動物最終將會挨餓。"
  },
  {
    "word": "starvation",
    "pos": "n.",
    "cn_def": "飢餓；餓死",
    "en_def": "suffering or death caused by hunger.",
    "sentence": "The dedicated charity workers warned that if the villagers don't get food soon, they will die of {{BLANK}}.",
    "cn": "盡責的慈善工作者警告說，如果村民們不快點得到食物，他們將會死於飢餓。"
  },
  {
    "word": "starving",
    "pos": "adj.",
    "cn_def": "非常飢餓的、快餓死的",
    "en_def": "Dying of hunger, or feeling extremely hungry.",
    "sentence": "After hiking for six hours without any snacks, Marcus felt absolutely {{BLANK}} by the time he reached the camp.",
    "cn": "在沒有任何零食的情況下健行了六個小時，馬庫斯到達營地時感到非常飢餓（快餓死了）。"
  },
  {
    "word": "starved to death",
    "pos": "v. phr.",
    "cn_def": "餓死",
    "en_def": "To die because there is not enough food to eat.",
    "sentence": "During the severe winter drought, many wild animals in the forest unfortunately {{BLANK}} due to the lack of plants.",
    "cn": "在寒冷的冬日嚴冬旱災期間，森林裡的許多野生動物遺憾地因為缺乏植物而餓死。"
  },
  {
    "word": "eat a horse",
    "pos": "idiom",
    "cn_def": "吃得下一頭牛（形容非常餓）",
    "en_def": "An expression used to say that you are extremely hungry.",
    "sentence": "I haven't had anything since breakfast, and it's already late in the evening; I could {{BLANK}} right now!",
    "cn": "我自從早餐後就什麼都沒吃，現在都已經深夜了；我現在非常餓（吃得下一頭牛）！"
  },
  {
    "word": "appetite",
    "pos": "n. [C, U]",
    "cn_def": "食慾、胃口",
    "en_def": "A natural desire to eat food, or a strong desire for something.",
    "sentence": "The delicious aroma of the grilled Japanese yakiniku immediately stimulated Chloe's {{BLANK}} as she walked into the restaurant.",
    "cn": "當克洛伊走進餐廳時，美味的日本烤肉香氣立刻激起了她的食慾（胃口）。"
  },
  {
    "word": "ache",
    "pos": "n.",
    "cn_def": "疼痛",
    "en_def": "a continuous or prolonged dull pain in a part of one's body.",
    "sentence": "The terrible {{BLANK}} in George's right leg was significantly worse when the winter weather was extremely cold.",
    "cn": "當冬季天氣極度寒冷時，喬治右腿可怕的疼痛明顯變得更糟。"
  },
  {
    "word": "ached",
    "pos": "v.",
    "cn_def": "疼痛",
    "en_def": "to suffer from a continuous dull pain.",
    "sentence": "After confidently finishing the exhausting marathon race, my tired feet truly {{BLANK}} for an entire week.",
    "cn": "在自信地完成令人筋疲力盡的馬拉松比賽後，我疲憊的雙腳真的疼痛了整整一個星期。"
  },
  {
    "word": "headache",
    "pos": "n.",
    "cn_def": "頭痛",
    "en_def": "a continuous pain in the head.",
    "sentence": "Fiona had a mild {{BLANK}} this sunny morning, but she thankfully feels much better right now.",
    "cn": "費歐娜這個陽光明媚的早晨有輕微的頭痛，但幸虧她現在感覺好多了。"
  },
  {
    "word": "pain",
    "pos": "n.",
    "cn_def": "痛楚",
    "en_def": "physical suffering or discomfort caused by illness or injury.",
    "sentence": "Robert immediately went to see a professional doctor because he was experiencing sharp chest {{BLANK}} all morning.",
    "cn": "羅伯特立刻去看了專業醫生，因為他整個早上都經歷著劇烈的胸部痛楚。"
  },
  {
    "word": "chest pain",
    "pos": "phr.",
    "cn_def": "胸痛",
    "en_def": "discomfort or pain that you feel anywhere along the front of your body between your neck and upper abdomen.",
    "sentence": "The nervous elderly patient rushed to the busy hospital because he suddenly felt a severe {{BLANK}}.",
    "cn": "緊張的年老病患趕緊前往繁忙的醫院，因為他突然感到嚴重的胸痛。"
  },
  {
    "word": "in severe pain",
    "pos": "phr.",
    "cn_def": "處於痛苦中、身體在痛",
    "en_def": "Experiencing physical suffering or discomfort caused by illness or injury.",
    "sentence": "After twisting his ankle during the basketball game, Marcus was {{BLANK}} and could barely walk to the bench.",
    "cn": "在籃球賽中扭傷腳踝後，馬庫斯身體極為痛苦（非常痛），幾乎無法走到替補席。"
  },
  {
    "word": "painful",
    "pos": "adj.",
    "cn_def": "令人疼痛的、痛苦的、難堪的",
    "en_def": "Causing physical pain, or causing distress, sadness, or emotional suffering.",
    "sentence": "The dentist explained that extracting the wisdom tooth would be a bit {{BLANK}}, but the healing process would be fast.",
    "cn": "牙醫解釋說，拔除這顆智齒會有點令人疼痛，但復原過程會很快。"
  },
  {
    "word": "painful memory",
    "pos": "phr.",
    "cn_def": "痛苦的回憶、不堪回首的往事",
    "en_def": "A sad or distressing recollection from the past that still causes emotional suffering.",
    "sentence": "Losing her childhood pet was a deeply {{BLANK}} for Chloe, and she still gets emotional when talking about it.",
    "cn": "失去童年寵物對克洛伊來說是一段深刻且痛苦的回憶，她現在談到這件事時依然會情緒激動。"
  },
  {
    "word": "painkiller",
    "pos": "n. [C]",
    "cn_def": "止痛藥",
    "en_def": "A drug or medicine used to reduce or relieve physical pain.",
    "sentence": "Leo took a strong {{BLANK}} to handle his severe migraine so that he could focus on finishing his work reports.",
    "cn": "里歐服下了一顆強效止痛藥來應對他嚴重的偏頭痛，以便能專注於完成他的工作報告。"
  },
  {
    "word": "relieve the pain",
    "pos": "v. phr.",
    "cn_def": "緩解疼痛、減輕痛苦",
    "en_def": "To make a physical pain or emotional suffering less severe or disappear completely.",
    "sentence": "Applying a cold compress to a swollen muscle can help {{BLANK}} and reduce inflammation quickly.",
    "cn": "在腫脹的肌肉上進行冷敷有助於緩解疼痛並快速消除發炎。"
  },
  {
    "word": "ease the pain",
    "pos": "v. phr.",
    "cn_def": "減輕疼痛、舒緩痛苦",
    "en_def": "To gradually lessen the intensity of physical discomfort or emotional distress.",
    "sentence": "The doctor prescribed a special ointment to help {{BLANK}} caused by the sunburn on Marcus's shoulders.",
    "cn": "醫生開了一款特別的軟膏，以幫助減輕（舒緩）馬庫斯肩膀上因曬傷所造成的疼痛。"
  },
  {
    "word": "reduce the pain",
    "pos": "v. phr.",
    "cn_def": "降低疼痛、減少痛苦",
    "en_def": "To lower the level or amount of physical pain you are experiencing.",
    "sentence": "Resting the injured wrist and elevating it on a soft pillow will significantly {{BLANK}}.",
    "cn": "讓受傷的手腕休息並將其抬高在軟枕頭上，將會顯著降低疼痛感。"
  },
  {
    "word": "connect",
    "pos": "v.",
    "cn_def": "連接",
    "en_def": "to bring together or into contact so that a real or notional link is established.",
    "sentence": "The modern new bridge will efficiently {{BLANK}} the two isolated towns across the wide and deep river.",
    "cn": "現代化的新橋將高效率地連接這座寬闊深邃河流兩岸兩個被孤立的城鎮。"
  },
  {
    "word": "connected",
    "pos": "adj.",
    "cn_def": "相關的；連接的",
    "en_def": "joined or linked together.",
    "sentence": "Intelligent Paul is incredibly interested in absolutely any complex topic that is closely {{BLANK}} to classical music.",
    "cn": "聰明的保羅對任何與古典音樂密切相關的複雜主題都極度感興趣。"
  },
  {
    "word": "connection",
    "pos": "n.",
    "cn_def": "關聯",
    "en_def": "a relationship in which a person, thing, or idea is linked or associated with something else.",
    "sentence": "The smart detective quickly realized that there was a hidden {{BLANK}} between the two seemingly unrelated crimes.",
    "cn": "聰明的警探迅速意識到，這兩起看似無關的犯罪之間有著隱藏的關聯。"
  },
  {
    "word": "stay connected",
    "pos": "phr.",
    "cn_def": "保持聯繫",
    "en_def": "to maintain a relationship or communication with someone.",
    "sentence": "Using modern social media makes it incredibly easy to {{BLANK}} with friends living in foreign countries.",
    "cn": "使用現代社群媒體讓與住在外國的朋友保持聯繫變得極其容易。"
  },
  {
    "word": "linked",
    "pos": "adj.",
    "cn_def": "連結的；有關聯的",
    "en_def": "connected or joined.",
    "sentence": "The researchers discovered that the rare illness is strongly {{BLANK}} to drinking heavily polluted river water.",
    "cn": "研究人員發現，這種罕見的疾病與飲用嚴重污染的河水有強烈的連結的（關聯）。"
  },
  {
    "word": "be connected to",
    "pos": "v. phr.",
    "cn_def": "與…連結/相連、與…有關聯",
    "en_def": "To be joined to something else, or to have a close logical or practical relationship with it.",
    "sentence": "The printer must {{BLANK}} the main computer via a USB cable before you can print out the vocabulary lists.",
    "cn": "印表機必須透過 USB 線與主電腦相連，然後你才能列印出單字表。"
  },
  {
    "word": "is closely linked to",
    "pos": "v. phr.",
    "cn_def": "與…有聯繫/關聯",
    "en_def": "To be physically connected, or to have a strong connection or causal relationship between two things.",
    "sentence": "Scientific research has shown that a high-sugar diet {{BLANK}} an increased risk of heart disease.",
    "cn": "科學研究已經顯示，高糖飲食與心臟病風險的增加密切相關（有因果聯繫）。"
  },
  {
    "word": "is often associated with",
    "pos": "v. phr.",
    "cn_def": "與…聯想在一起、與…有關聯",
    "en_def": "To be connected in the mind, or to happen together with something else frequently.",
    "sentence": "The color red {{BLANK}} danger, excitement, or passion in many different cultures.",
    "cn": "在許多不同的文化中，紅色經常與危險、興奮或激情聯想在一起（有關聯）。"
  },
  {
    "word": "is directly related to",
    "pos": "v. phr.",
    "cn_def": "與…有關、與…有親戚關係",
    "en_def": "To have a connection to something else, or to belong to the same family.",
    "sentence": "The drop in sales this month {{BLANK}} the recent supply chain delays in shipping.",
    "cn": "本月銷售額的下降與最近航運供應鏈的延誤直接相關（有關）。"
  },
  {
    "word": "be actively involved in",
    "pos": "v. phr.",
    "cn_def": "參與…、涉入…、捲入…",
    "en_def": "To take part in an activity, event, or situation, or to be mixed up in something negative.",
    "sentence": "Marcus decided to {{BLANK}} the local charity project to help low-income families.",
    "cn": "馬庫斯決定積極參與當地的慈善計畫，以幫助低收入家庭。"
  },
  {
    "word": "has something to do with",
    "pos": "phr.",
    "cn_def": "與…有些關係、與…有關",
    "en_def": "To have a connection, relation, or concern with a particular matter or person.",
    "sentence": "I suspect that the strange noise from the kitchen {{BLANK}} the old refrigerator.",
    "cn": "我懷疑廚房傳來的怪聲與那台舊冰箱有些關係。"
  },
  {
    "word": "contact",
    "pos": "v.",
    "cn_def": "聯絡、聯繫",
    "en_def": "To communicate with someone by calling, texting, emailing, or meeting them.",
    "sentence": "If you have any questions about the new schedule, please feel free to {{BLANK}} Chloe via email.",
    "cn": "如果你對新行程有任何疑問，請隨時透過電子郵件聯絡克洛伊。"
  },
  {
    "word": "contact",
    "pos": "n. [U, C]",
    "cn_def": "聯絡、聯繫、熟人/聯絡人",
    "en_def": "Communication or meeting between people, or a helpful person you know in an organization.",
    "sentence": "Marcus has lost {{BLANK}} with most of his high school classmates since he moved to Taipei for work.",
    "cn": "自從馬庫斯搬到台北工作後，他已經與大部分的高中同學失去了聯絡（聯繫）。"
  },
  {
    "word": "keep in contact with",
    "pos": "phr.",
    "cn_def": "與…保持聯絡",
    "en_def": "To maintain communication with someone regularly over time.",
    "sentence": "Thanks to modern social media applications, it is much easier to {{BLANK}} friends living abroad.",
    "cn": "拜現代社群媒體應用程式所賜，與旅居國外的朋友保持聯絡變得容易多了。"
  },
  {
    "word": "contact lenses",
    "pos": "n. [C, usually plural]",
    "cn_def": "隱形眼鏡",
    "en_def": "A thin plastic lens placed directly on the surface of the eye to improve vision.",
    "sentence": "Chloe prefers wearing {{BLANK}} when she goes out for formal dinners so she doesn't need her glasses.",
    "cn": "克洛伊出去參加正式晚宴時更喜歡配戴隱形眼鏡，這樣她就不需要戴眼鏡了。"
  },
  {
    "word": "compelled",
    "pos": "v.",
    "cn_def": "迫使",
    "en_def": "to force or oblige someone to do something.",
    "sentence": "As there was something terribly wrong with the engine, the frightened pilot was {{BLANK}} to land quickly.",
    "cn": "由於引擎出了嚴重的故障，受驚的飛行員被迫使迅速降落。"
  },
  {
    "word": "compelling",
    "pos": "adj.",
    "cn_def": "令人信服的；引人入勝的",
    "en_def": "evoking interest, attention, or admiration in a powerfully irresistible way.",
    "sentence": "The skilled lawyer presented a highly {{BLANK}} argument that successfully convinced the jury to free the innocent man.",
    "cn": "技巧高超的律師提出了一個極其令人信服的論點，成功說服陪審團釋放了無辜的男子。"
  },
  {
    "word": "felt compelled to",
    "pos": "phr.",
    "cn_def": "感到必須",
    "en_def": "to strongly think that you must do something.",
    "sentence": "When I saw the helpless little puppy shivering in the cold rain, I {{BLANK}} help it.",
    "cn": "當我看到那隻無助的小狗在冷雨中發抖時，我感到必須幫助牠。"
  },
  {
    "word": "be compelled to",
    "pos": "phr.",
    "cn_def": "被迫",
    "en_def": "to be forced to do something.",
    "sentence": "Due to the sudden and devastating financial crisis, the company will {{BLANK}} lay off many workers.",
    "cn": "由於突然且毀滅性的金融危機，公司將被迫解雇許多工人。"
  },
  {
    "word": "convince",
    "pos": "v.",
    "cn_def": "使確信、使相信、說服",
    "en_def": "To make someone completely believe that something is true or real.",
    "sentence": "The lawyer managed to {{BLANK}} the jury that his client was completely innocent of the crime.",
    "cn": "律師成功地使陪審團確信他的當事人與這起犯罪毫無關係（完全無辜）。"
  },
  {
    "word": "convincing",
    "pos": "adj.",
    "cn_def": "有說服力的、令人信服的",
    "en_def": "Making you believe that something is true or right because it sounds reasonable or genuine.",
    "sentence": "Marcus provided a {{BLANK}} argument for the budget increase, backed up by clear data and charts.",
    "cn": "馬庫斯為增加預算提出了一個令人信服的（有說服力的）論點，並有明確的數據和圖表支持。"
  },
  {
    "word": "persuade",
    "pos": "v.",
    "cn_def": "說服、勸服（去做某事）",
    "en_def": "To move someone to do something by giving them good reasons, arguments, or requests.",
    "sentence": "Chloe tried hard to {{BLANK}} her parents to let her study arts abroad next semester.",
    "cn": "克洛伊努力地想說服父母讓她下個學期去國外學習藝術。"
  },
  {
    "word": "persuasive",
    "pos": "adj.",
    "cn_def": "有說服力的、口才好的",
    "en_def": "Able to make someone do or believe something by giving them good reasons.",
    "sentence": "The marketing manager gave a highly {{BLANK}} presentation that won over the new international clients.",
    "cn": "行銷經理進行了一場極具說服力的簡報，贏得了新國外客戶的青睞。"
  },
  {
    "word": "persuasion",
    "pos": "n. [U]",
    "cn_def": "說服、說服力",
    "en_def": "The act of convincing someone to do or believe something, or the ability to do this.",
    "sentence": "It took a great deal of {{BLANK}} to get Marcus to join the weekend volunteer team.",
    "cn": "花了很大的說服（功夫）才讓馬庫斯加入週末的志工團隊。"
  },
  {
    "word": "talked their father into taking",
    "pos": "phr. v.",
    "cn_def": "說服某人去做…、勸服某人做…",
    "en_def": "To persuade someone to perform a specific action or do something.",
    "sentence": "The kids successfully {{BLANK}} them to the amusement park this weekend.",
    "cn": "孩子們成功地說服爸爸這週末帶他們去遊樂園。"
  },
  {
    "word": "forced",
    "pos": "v.",
    "cn_def": "強迫、迫使",
    "en_def": "To make someone do something that they do not want to do, by using power, laws, or threats.",
    "sentence": "The heavy rain and flooded roads {{BLANK}} the tour group to cancel their outdoor trip to the hot springs.",
    "cn": "大雨和道路積水迫使旅行團取消了前往溫泉的戶外行程。"
  },
  {
    "word": "force",
    "pos": "n. [U, C]",
    "cn_def": "力量、威力、武力；部隊/警力",
    "en_def": "Physical strength, power, or energy; or an organized group of people like the police or military.",
    "sentence": "The window was smashed with great {{BLANK}}, suggesting that the thief used a heavy hammer to break in.",
    "cn": "窗戶是被巨大的力量砸碎的，這暗示著小偷使用了沉重的鐵錘破門而入。"
  },
  {
    "word": "join forces",
    "pos": "phr.",
    "cn_def": "聯合、攜手合作",
    "en_def": "To act together or work as a team with someone else to achieve a common goal.",
    "sentence": "The two tech companies decided to {{BLANK}} to develop an advanced AI tool for English language learning.",
    "cn": "這兩家科技公司決定聯合（攜手合作），共同開發一款用於英語學習的高階人工智慧工具。"
  },
  {
    "word": "forceful",
    "pos": "adj.",
    "cn_def": "強而有力的、有說服力的、有權勢的",
    "en_def": "Expressing opinions strongly and clearly in a way that convinces or influences other people.",
    "sentence": "The professional educator gave a {{BLANK}} speech about the great importance of incorporating digital tools into classrooms.",
    "cn": "這位專業的教育工作者發表了一場強而有力的（有說服力的）演講，闡述了將數位工具融入課堂的巨大重要性。"
  },
  {
    "word": "enforce",
    "pos": "v.",
    "cn_def": "執行",
    "en_def": "to compel observance of or compliance with a law, rule, or obligation.",
    "sentence": "The strict local police officers are working extremely hard to carefully {{BLANK}} the brand new traffic laws.",
    "cn": "嚴格的當地警察正極其努力地工作，以仔細地執行全新的交通法規。"
  },
  {
    "word": "enforce",
    "pos": "v.",
    "cn_def": "執行（法律）、實施（規定）",
    "en_def": "To make people obey a rule, law, or decision.",
    "sentence": "The school principal warned that the teachers would strictly {{BLANK}} the ban on cheating during the exams.",
    "cn": "校長警告，老師們將嚴格執行考試期間禁止作弊的禁令。"
  },
  {
    "word": "enforcement",
    "pos": "n. [U]",
    "cn_def": "執行、實施、強制執行",
    "en_def": "The act of making sure that a law, rule, or order is obeyed and followed by people.",
    "sentence": "Strict {{BLANK}} of the speed limit rules has significantly reduced the number of traffic accidents on this highway.",
    "cn": "嚴格執行速限規定，已顯著減少了這條高速公路上的交通事故數量。"
  },
  {
    "word": "law enforcement",
    "pos": "n. [U]",
    "cn_def": "執法、執法機關/人員",
    "en_def": "The activity of making people obey the law, or the public agencies (like the police) that do this.",
    "sentence": "Many {{BLANK}} officers were deployed to protect the public and maintain order during the political rally.",
    "cn": "許多執法（人員）被部署在政治集會期間，以保護大眾並維持秩序。"
  },
  {
    "word": "in effect",
    "pos": "phr.",
    "cn_def": "生效中、實行中",
    "en_def": "(Of a law, rule, or contract) currently operating, valid, or being used at the present time.",
    "sentence": "The new government regulations regarding environmental protection will be {{BLANK}} starting next Monday.",
    "cn": "關於環境保護的新政府法規將從下週一開始生效（實行中）。"
  },
  {
    "word": "take effect",
    "pos": "v. phr.",
    "cn_def": "開始生效、起作用",
    "en_def": "To start to produce the intended result, or to officially become active or operational.",
    "sentence": "The doctor said that the strong painkiller would take about twenty minutes to {{BLANK}}.",
    "cn": "醫生說這顆強效止痛藥需要大約二十分鐘才會開始起作用（生效）。"
  },
  {
    "word": "reinforce",
    "pos": "v.",
    "cn_def": "強化、加強、鞏固",
    "en_def": "To make something stronger, such as a physical structure, an idea, or a specific feeling.",
    "sentence": "The teacher gave students a quick online quiz after the lecture to {{BLANK}} the vocabulary words they just learned.",
    "cn": "老師在講課後讓學生進行了一次快速的線上測驗，以強化（加強）他們剛剛學到的單字。"
  },
  {
    "word": "digest",
    "pos": "v.",
    "cn_def": "消化",
    "en_def": "to break down food in the alimentary canal into substances that can be absorbed and used by the body.",
    "sentence": "It usually takes a few hours for your healthy stomach to completely {{BLANK}} a heavy and greasy meal.",
    "cn": "你健康的胃通常需要幾個小時才能完全消化一頓豐盛油膩的飯菜。"
  },
  {
    "word": "digestion",
    "pos": "n.",
    "cn_def": "消化",
    "en_def": "the process of breaking down food by mechanical and enzymatic action in the alimentary canal into substances that can be used by the body.",
    "sentence": "Eating a massive amount of spicy food right before sleeping is generally very bad for your {{BLANK}}.",
    "cn": "在睡覺前吃大量辛辣食物通常對你的消化非常不好。"
  },
  {
    "word": "digestive",
    "pos": "adj.",
    "cn_def": "消化的",
    "en_def": "relating to the process of digesting food.",
    "sentence": "Drinking plenty of fresh water every day is absolutely essential for maintaining a healthy {{BLANK}} system.",
    "cn": "每天喝大量新鮮的水對於維持健康的消化的系統是絕對必要的。"
  },
  {
    "word": "bad for digestion",
    "pos": "phr.",
    "cn_def": "對消化不良",
    "en_def": "harmful to the stomach's ability to process food.",
    "sentence": "The knowledgeable doctor gently warned the patient that eating too quickly is surprisingly {{BLANK}}.",
    "cn": "知識淵博的醫生溫和地警告病患，吃得太快令人驚訝地對消化不良。"
  },
  {
    "word": "digestive system",
    "pos": "phr.",
    "cn_def": "消化系統",
    "en_def": "the organs and glands in the body that are responsible for digestion.",
    "sentence": "Consuming a lot of organic vegetables daily can effectively help your complex {{BLANK}} function much better.",
    "cn": "每天食用大量有機蔬菜能有效地幫助你複雜的消化系統運作得更好。"
  },
  {
    "word": "persisted",
    "pos": "v.",
    "cn_def": "堅持；持續",
    "en_def": "to continue firmly or obstinately in an opinion or a course of action in spite of difficulty, opposition, or failure.",
    "sentence": "Although the strict teacher repeatedly told the young girl to stop talking, she stubbornly {{BLANK}} with her bad behavior.",
    "cn": "儘管嚴格的老師屢次告訴那個年輕女孩停止講話，她還是固執地堅持著她的不良行為。"
  },
  {
    "word": "persistent",
    "pos": "adj.",
    "cn_def": "持續的；堅持的",
    "en_def": "continuing firmly or obstinately in a course of action in spite of difficulty or opposition.",
    "sentence": "Exhausted Matt constantly heard a {{BLANK}} buzzing noise in his ears after attending the incredibly loud rock concert.",
    "cn": "疲憊的麥特在參加了極度吵雜的搖滾演唱會後，不斷聽到耳朵裡有持續的嗡嗡聲。"
  },
  {
    "word": "persistence",
    "pos": "n.",
    "cn_def": "堅持不懈",
    "en_def": "firm or obstinate continuance in a course of action in spite of difficulty or opposition.",
    "sentence": "Achieving massive success in the highly competitive business world definitely requires a great deal of hard work and {{BLANK}}.",
    "cn": "在競爭高度激烈的商業世界中取得巨大成功，絕對需要大量的努力工作和堅持不懈。"
  },
  {
    "word": "continuous",
    "pos": "adj.",
    "cn_def": "連續的",
    "en_def": "forming an unbroken whole; without interruption.",
    "sentence": "The {{BLANK}} and heavy winter rain completely flooded the quiet streets of the small rural town yesterday.",
    "cn": "連續的冬季大雨昨天徹底淹沒了這個鄉村小鎮安靜的街道。"
  },
  {
    "word": "persistently",
    "pos": "adv.",
    "cn_def": "堅持不懈地",
    "en_def": "in a persistent manner; continuously.",
    "sentence": "The annoying salesman {{BLANK}} called my house four times last week trying to sell me a new product.",
    "cn": "那個煩人的推銷員上週堅持不懈地打電話到我家四次，試圖賣給我一個新產品。"
  },
  {
    "word": "syndrome",
    "pos": "n.",
    "cn_def": "症候群",
    "en_def": "a group of symptoms which consistently occur together, or a condition characterized by a set of associated symptoms.",
    "sentence": "The experienced doctor explained that this rare medical {{BLANK}} is most likely to seriously affect middle-aged working men.",
    "cn": "經驗豐富的醫生解釋說，這種罕見的醫學症候群最有可能嚴重影響中年的職業男性。"
  },
  {
    "word": "Down syndrome",
    "pos": "phr.",
    "cn_def": "唐氏症",
    "en_def": "a congenital disorder arising from a chromosome defect, causing intellectual impairment and physical abnormalities.",
    "sentence": "The dedicated teacher works incredibly patiently with several wonderful children who were naturally born with {{BLANK}}.",
    "cn": "盡責的老師極其耐心地與幾個天生患有唐氏症的優秀孩子一起工作。"
  },
  {
    "word": "metabolic syndrome",
    "pos": "phr.",
    "cn_def": "代謝症候群",
    "en_def": "a cluster of biochemical and physiological abnormalities associated with the development of cardiovascular disease and type 2 diabetes.",
    "sentence": "A severe lack of daily exercise can unfortunately greatly increase your personal risk of developing {{BLANK}}.",
    "cn": "嚴重缺乏日常運動不幸地會大大增加你個人罹患代謝症候群的風險。"
  },
  {
    "word": "rare syndrome",
    "pos": "phr.",
    "cn_def": "罕見症候群",
    "en_def": "a medical condition characterized by a unique set of symptoms that affects a small percentage of the population.",
    "sentence": "The brilliant scientists are desperately trying to discover an effective cure for this highly dangerous and {{BLANK}}.",
    "cn": "才華洋溢的科學家正拚命試圖發現一種有效的方法，來治療這種高度危險且罕見症候群。"
  },
  {
    "word": "gene",
    "pos": "n.",
    "cn_def": "基因",
    "en_def": "a unit of heredity which is transferred from a parent to offspring.",
    "sentence": "The brilliant biology professor clearly explained how a single mutated {{BLANK}} can potentially cause serious health problems.",
    "cn": "才華洋溢的生物學教授清楚地解釋了單一突變的基因如何可能導致嚴重的健康問題。"
  },
  {
    "word": "genetic",
    "pos": "adj.",
    "cn_def": "基因的；遺傳的",
    "en_def": "of or relating to genes or heredity.",
    "sentence": "The professional doctors are completely unsure of the exact cause, but they strongly think the disease might be {{BLANK}}.",
    "cn": "專業的醫生完全不確定確切的原因，但他們強烈認為這種疾病可能是遺傳的。"
  },
  {
    "word": "genetics",
    "pos": "n.",
    "cn_def": "遺傳學",
    "en_def": "the study of heredity and the variation of inherited characteristics.",
    "sentence": "The fascinating scientific field of {{BLANK}} actively studies how physical traits are passed down from parents to their children.",
    "cn": "迷人的遺傳學科學領域積極研究身體特徵是如何從父母傳遞給他們的孩子。"
  },
  {
    "word": "genetically",
    "pos": "adv.",
    "cn_def": "基因地",
    "en_def": "in a way that relates to genes or genetics.",
    "sentence": "These perfectly red and juicy tomatoes have been {{BLANK}} modified to be completely resistant to dangerous farm insects.",
    "cn": "這些完美的紅色多汁番茄已經被基因地改造，以完全抵抗危險的農場昆蟲。"
  },
  {
    "word": "genetic defect",
    "pos": "phr.",
    "cn_def": "基因缺陷",
    "en_def": "an abnormal characteristic or flaw inherited through genes.",
    "sentence": "Unfortunately, the newborn baby was tragically diagnosed with a rare {{BLANK}} that severely affects his weak heart.",
    "cn": "不幸的是，這名新生兒被悲慘地診斷出患有一種罕見的基因缺陷，嚴重影響了他虛弱的心臟。"
  },
  {
    "word": "genetic disorder",
    "pos": "phr.",
    "cn_def": "遺傳性疾病",
    "en_def": "an illness caused by one or more abnormalities in the genome.",
    "sentence": "People who suffer from this specific {{BLANK}} must take highly expensive prescription medicine every single day.",
    "cn": "罹患這種特定遺傳性疾病的人必須每天服用極其昂貴的處方藥。"
  },
  {
    "word": "genetically-modified-genetically-modified",
    "pos": "adj.",
    "cn_def": "基基因改造的、轉基因的",
    "en_def": "(Of food or organisms) having had its genetic structure changed artificially in a laboratory.",
    "sentence": "Some consumers prefer to buy organic corn because they worry about the potential health risks of {{BLANK}} food.",
    "cn": "一些消費者更喜歡購買有機玉米，因為他們擔心基因改造食品潛在的健康風險。"
  },
  {
    "word": "genetic defect",
    "pos": "n. [C]",
    "cn_def": "基因缺陷、遺傳性缺陷",
    "en_def": "A fault or flaw in a person's or animal's genes that may cause a disease or physical problem.",
    "sentence": "The medical screening test can detect a specific {{BLANK}} before the baby is born, allowing for early treatment.",
    "cn": "這項醫學篩檢測試可以在寶寶出生前檢測出特定的基因缺陷，以便進行早期治療。"
  },
  {
    "word": "inherent",
    "pos": "adj.",
    "cn_def": "固有的、內在的、與生俱來的",
    "en_def": "Existing as a natural, permanent, or basic part of something that cannot be removed.",
    "sentence": "There are {{BLANK}} risks in any financial investment, so you should always think carefully before risking your money.",
    "cn": "任何金融投資都有固有的（內在的）風險，因此在拿資金冒險之前，你應該總是仔細思考。"
  },
  {
    "word": "be inherent in",
    "pos": "v. phr.",
    "cn_def": "存在於…之中、是…固有的",
    "en_def": "To be a natural or inseparable part of a specific situation, system, or activity.",
    "sentence": "The desire to explore the unknown seems to {{BLANK}} human nature since the beginning of history.",
    "cn": "自歷史開端以來，探索未知的渴望似乎就存在於人類的天性之中（是人類天性固有的）。"
  },
  {
    "word": "gender",
    "pos": "n.",
    "cn_def": "性別",
    "en_def": "either of the two sexes (male and female), especially when considered with reference to social and cultural differences.",
    "sentence": "Progressive modern companies strongly believe that an applicant's {{BLANK}} and race absolutely shouldn't matter during the hiring process.",
    "cn": "進步的現代公司強烈認為，申請人的性別和種族在招募過程中絕對不應該有影響。"
  },
  {
    "word": "gender equality",
    "pos": "phr.",
    "cn_def": "性別平等",
    "en_def": "the state in which access to rights or opportunities is unaffected by gender.",
    "sentence": "The passionate political activists are constantly protesting in the busy streets to strongly demand absolute {{BLANK}} globally.",
    "cn": "熱情的政治活動家不斷在繁忙的街道上抗議，強烈要求全球絕對的性別平等。"
  },
  {
    "word": "gender discrimination",
    "pos": "phr.",
    "cn_def": "性別歧視",
    "en_def": "prejudice or discrimination based on a person's sex or gender.",
    "sentence": "The strict new government laws were officially created to completely prevent unfair {{BLANK}} in the modern workplace.",
    "cn": "嚴格的政府新法律被正式制定，以完全防止現代工作場所中不公平的性別歧視。"
  },
  {
    "word": "transgender",
    "pos": "adj.",
    "cn_def": "跨性別的",
    "en_def": "denoting or relating to a person whose sense of personal identity and gender does not correspond with their birth sex.",
    "sentence": "The supportive community enthusiastically held a vibrant parade to proudly celebrate and heavily support {{BLANK}} individuals' basic rights.",
    "cn": "充滿支持的社區熱情地舉辦了一場充滿活力的遊行，自豪地慶祝並大力支持跨性別的個人的基本權利。"
  },
  {
    "word": "LGBTQ",
    "pos": "n. [U] / adj.",
    "cn_def": "跨性別族群、多元性別（者）",
    "en_def": "An acronym standing for Lesbian, Gay, Bisexual, Transgender, and Queer, used to describe a community of diverse sexual orientations and gender identities.",
    "sentence": "The university hosted a cultural festival to promote inclusion and support for all {{BLANK}} students on campus.",
    "cn": "這所大學舉辦了一場文化節，以促進對校園內所有多元性別（LGBTQ）學生的包容與支持。"
  },
  {
    "word": "sex",
    "pos": "n.",
    "cn_def": "性別",
    "en_def": "either of the two main categories (male and female) into which humans and many other living things are divided on the basis of their reproductive functions.",
    "sentence": "The knowledgeable bird watcher explained that we can easily determine the {{BLANK}} of the rare bird by its colorful feathers.",
    "cn": "知識淵博的賞鳥者解釋說，我們可以透過這隻罕見鳥類色彩繽紛的羽毛輕鬆決定牠的性別。"
  },
  {
    "word": "homosexual",
    "pos": "adj. / n. [C]",
    "cn_def": "同性戀的；同性戀者",
    "en_def": "Attracted to people of the same sex or gender; a person who is sexually attracted to the same sex.",
    "sentence": "While {{BLANK}} relationships are openly celebrated in many modern societies, some traditional cultures still hold biases.",
    "cn": "雖然同性戀關係在許多現代社會中被公開祝福，但一些傳統文化仍然抱持著成見。"
  },
  {
    "word": "heterosexual",
    "pos": "adj. / n. [C]",
    "cn_def": "異性戀的；異性戀者",
    "en_def": "Attracted to people of the opposite sex or gender; a straight person.",
    "sentence": "The researcher gathered data from both homosexual and {{BLANK}} couples to study modern patterns in relationship communication.",
    "cn": "研究人員收集了同性戀和異性戀伴侶的數據，以研究現代伴侶溝通的模式。"
  },
  {
    "word": "complicate",
    "pos": "v.",
    "cn_def": "使複雜",
    "en_def": "to make something more difficult or confusing by causing it to be more complex.",
    "sentence": "Please do not needlessly {{BLANK}} this incredibly simple plan by adding so many highly confusing extra steps.",
    "cn": "請不要因為增加這麼多極度令人困惑的額外步驟，而毫無必要地使這個極其簡單的計畫複雜化。"
  },
  {
    "word": "complicated",
    "pos": "adj.",
    "cn_def": "複雜的",
    "en_def": "consisting of many interconnecting parts or elements; intricate.",
    "sentence": "Building a custom computer from scratch can honestly be a highly {{BLANK}} process for complete beginners to learn.",
    "cn": "從頭開始組裝一台客製化電腦，對完全的初學者來說，老實說可能是一個高度複雜的學習過程。"
  },
  {
    "word": "complication",
    "pos": "n.",
    "cn_def": "併發症；複雜化",
    "en_def": "a circumstance that complicates something; a secondary disease or condition aggravating an already existing one.",
    "sentence": "The fragile elderly patient unfortunately died from severe medical {{BLANK}} in his weak heart and damaged lungs.",
    "cn": "脆弱的年老病患不幸死於他虛弱心臟和受損肺部嚴重的醫療併發症。"
  },
  {
    "word": "medical complication",
    "pos": "phr.",
    "cn_def": "醫療併發症",
    "en_def": "an unfavorable evolution or consequence of a disease, a health condition, or a therapy.",
    "sentence": "If you don't carefully take your prescribed antibiotics, you might unfortunately develop a highly dangerous {{BLANK}}.",
    "cn": "如果你不仔細服用你被開立的抗生素，你可能會不幸地發展出高度危險的醫療併發症。"
  },
  {
    "word": "highly complicated",
    "pos": "phr.",
    "cn_def": "高度複雜的",
    "en_def": "extremely intricate or difficult to understand or analyze.",
    "sentence": "The brilliant engineer successfully designed a {{BLANK}} mechanical system that effectively powers the entire massive factory.",
    "cn": "才華洋溢的工程師成功設計了一個高度複雜的機械系統，有效地為整個龐大的工廠提供動力。"
  },
  {
    "word": "stature",
    "pos": "n.",
    "cn_def": "身材；聲望",
    "en_def": "a person's natural height; importance or reputation gained by ability or achievement.",
    "sentence": "Extremely talented Stephen Curry is undeniably one of the NBA's best basketball players despite his relatively short {{BLANK}}.",
    "cn": "儘管他相對較矮的身材，極具才華的史蒂芬·柯瑞無疑是NBA最好的籃球員之一。"
  },
  {
    "word": "short stature",
    "pos": "phr.",
    "cn_def": "身材矮小",
    "en_def": "a condition in which a person is significantly shorter than the average height.",
    "sentence": "Despite his noticeably {{BLANK}}, the courageous young man confidently stood up to the highly aggressive and mean bullies.",
    "cn": "儘管他明顯地身材矮小，這個勇敢的年輕人還是自信地挺身對抗那些極具攻擊性且刻薄的惡霸。"
  },
  {
    "word": "tall stature",
    "pos": "phr.",
    "cn_def": "身材高大",
    "en_def": "the state of being significantly taller than average.",
    "sentence": "Because of her exceptionally {{BLANK}}, the graceful girl was naturally very good at playing competitive high school volleyball.",
    "cn": "因為她異常地身材高大，這個優雅的女孩天生就很擅長打競爭激烈的高中排球。"
  },
  {
    "word": "physical stature",
    "pos": "phr.",
    "cn_def": "體格",
    "en_def": "the size or natural height of someone's body.",
    "sentence": "The professional wrestler's incredibly intimidating {{BLANK}} made all of his nervous opponents instantly fear him in the ring.",
    "cn": "職業摔角手極具威嚇力的體格，讓他所有緊張的對手在擂台上立刻害怕他。"
  },
  {
    "word": "disability",
    "pos": "n.",
    "cn_def": "殘疾",
    "en_def": "a physical or mental condition that limits a person's movements, senses, or activities.",
    "sentence": "Friendly Gary unfortunately has a permanent physical {{BLANK}} that sadly makes it extremely difficult for him to walk normally.",
    "cn": "友善的蓋瑞不幸地有一種永久性的身體殘疾，令人遺憾地使他極難正常行走。"
  },
  {
    "word": "disable",
    "pos": "v.",
    "cn_def": "使失效；使殘廢",
    "en_def": "to put out of action or limit the function of something.",
    "sentence": "The highly skilled computer technician had to quickly {{BLANK}} the dangerous virus before it could completely destroy the entire network.",
    "cn": "技術高超的電腦技術人員必須迅速使這個危險的病毒失效，以免它徹底摧毀整個網路。"
  },
  {
    "word": "disabled",
    "pos": "adj.",
    "cn_def": "殘疾的",
    "en_def": "having a physical or mental condition that limits movements, senses, or activities.",
    "sentence": "The modern and highly inclusive city government recently built several brand new ramps specifically for {{BLANK}} citizens to use safely.",
    "cn": "現代且高度包容的市政府最近建造了幾個全新的坡道，專門供殘疾的公民安全使用。"
  },
  {
    "word": "learning disability",
    "pos": "phr.",
    "cn_def": "學習障礙",
    "en_def": "a condition giving rise to difficulties in acquiring knowledge and skills to the level expected of those of the same age.",
    "sentence": "If an energetic child actually has a {{BLANK}}, it definitely doesn't mean they aren't intelligent or highly capable.",
    "cn": "如果一個精力充沛的孩子實際上患有學習障礙，這絕對不代表他們不聰明或能力不強。"
  },
  {
    "word": "inability",
    "pos": "n.",
    "cn_def": "無能",
    "en_def": "the state of being unable to do something.",
    "sentence": "Lazy Luke's apparent {{BLANK}} to successfully handle daily office stress makes him completely unsuitable for the demanding management job.",
    "cn": "懶惰的盧克明顯對成功處理日常辦公室壓力感到無能，這使他完全不適合這份要求極高的管理工作。"
  },
  {
    "word": "risk",
    "pos": "v.",
    "cn_def": "冒險",
    "en_def": "to expose someone or something valued to danger, harm, or loss.",
    "sentence": "The ambitious entrepreneur decided to bravely {{BLANK}} all of his personal savings to successfully start his innovative new technology company.",
    "cn": "雄心勃勃的企業家決定勇敢地冒險投入他所有的個人積蓄，以成功創辦他創新的新科技公司。"
  },
  {
    "word": "risky",
    "pos": "adj.",
    "cn_def": "冒險的",
    "en_def": "full of the possibility of danger, failure, or loss.",
    "sentence": "Driving a small car through the snowy mountains would be far too {{BLANK}}, so we smartly chose a safer alternative route.",
    "cn": "開小車穿過雪山會太冒險的了，所以我們聰明地選擇了一條更安全的替代路線。"
  },
  {
    "word": "risk",
    "pos": "n.",
    "cn_def": "風險",
    "en_def": "a situation involving exposure to danger.",
    "sentence": "The brave firefighter courageously put his own valuable life at absolute {{BLANK}} to safely save the terrified family from the burning building.",
    "cn": "勇敢的消防員英勇地將自己寶貴的生命置於絕對的風險之中，以安全地將受驚的家庭從燃燒的建築物中救出。"
  },
  {
    "word": "run the risk of",
    "pos": "phr.",
    "cn_def": "冒...的風險",
    "en_def": "to do something that might cause something bad to happen.",
    "sentence": "If you constantly refuse to eat healthy green vegetables, you {{BLANK}} developing serious long-term medical illnesses.",
    "cn": "如果你不斷拒絕吃健康的綠色蔬菜，你就會冒著發展出嚴重的長期醫療疾病的風險。"
  },
  {
    "word": "take a risk",
    "pos": "phr.",
    "cn_def": "冒險",
    "en_def": "to proceed in an action without certainty of the outcome, exposing oneself to potential failure.",
    "sentence": "Sometimes in order to achieve truly massive success in the competitive business world, you simply must {{BLANK}}.",
    "cn": "有時候，為了在競爭激烈的商業世界中取得真正巨大的成功，你根本就必須冒險。"
  },
  {
    "word": "characteristics",
    "pos": "n.",
    "cn_def": "特徵",
    "en_def": "a feature or quality belonging typically to a person, place, or thing and serving to identify it.",
    "sentence": "Unwavering patience is widely considered to be one of gentle Jeffrey's absolute finest and most admirable personal {{BLANK}}.",
    "cn": "堅定不移的耐心被廣泛認為是溫和的傑佛瑞絕對最優秀、最令人欽佩的個人特徵之一。"
  },
  {
    "word": "unique characteristic",
    "pos": "phr.",
    "cn_def": "獨特特徵",
    "en_def": "an attribute or trait that sets something apart from all others.",
    "sentence": "The beautiful rare bird's most {{BLANK}} is its bright blue feathers that beautifully shine brightly in the warm sunlight.",
    "cn": "這隻美麗稀有鳥類最獨特特徵是牠在溫暖的陽光下美麗地閃耀的明亮藍色羽毛。"
  },
  {
    "word": "characteristic",
    "pos": "adj.",
    "cn_def": "獨特的",
    "en_def": "typical of a particular person, place, or thing.",
    "sentence": "The unique and incredibly colorful spices used in traditional Indian cooking definitely have a highly {{BLANK}} and unforgettable flavor.",
    "cn": "傳統印度烹飪中使用的獨特且極其色彩繽紛的香料，絕對有一種高度獨特的且令人難忘的風味。"
  },
  {
    "word": "characterize",
    "pos": "v.",
    "cn_def": "描繪...的特性",
    "en_def": "to describe the distinctive nature or features of.",
    "sentence": "Experienced historians typically {{BLANK}} the long and peaceful era by its surprising lack of violent international military conflicts.",
    "cn": "經驗豐富的歷史學家通常以其令人驚訝地缺乏暴力的國際軍事衝突，來描繪這個漫長和平時代的特性。"
  },
  {
    "word": "character",
    "pos": "n.",
    "cn_def": "角色",
    "en_def": "a person in a novel, play, or movie.",
    "sentence": "The fascinating fictional {{BLANK}} in the incredibly popular fantasy novel embarks on a highly dangerous and truly magical adventure.",
    "cn": "這本極受歡迎的奇幻小說中迷人的虛構角色，展開了一場高度危險且真正充滿魔力的冒險。"
  },
  {
    "word": "character",
    "pos": "n. [U, C]",
    "cn_def": "個性、人格、品質",
    "en_def": "The combination of mental and moral qualities that make a person unique; personality.",
    "sentence": "Marcus has a very strong and reliable {{BLANK}}; he always stays calm and helps others during a crisis.",
    "cn": "馬庫斯有著非常堅強且可靠的個性（人格）；在危機期間，他總能保持冷靜並幫助他人。"
  },
  {
    "word": "characters",
    "pos": "n. [C]",
    "cn_def": "字元、文字、符號",
    "en_def": "A letter, number, or symbol used in writing or printing.",
    "sentence": "Passwords for this secure online system must be at least eight {{BLANK}} long and include a number.",
    "cn": "這個安全線上系統的密碼長度必須至少為八個字元（符號），且必須包含一個數字。"
  },
  {
    "word": "Chinese character",
    "pos": "n. [C]",
    "cn_def": "中文字、漢字",
    "en_def": "A logographic sign or symbol used in the Chinese writing system.",
    "sentence": "Learning to write each {{BLANK}} correctly requires a lot of patience and attention to stroke order.",
    "cn": "學習正確地書寫每個中文字（漢字），需要極大的耐心以及對筆畫順序的注意。"
  },
  {
    "word": "character traitses",
    "pos": "n. phr.",
    "cn_def": "人格特質、個性特徵",
    "en_def": "Individual aspects of a person's behavior and mind that define their personality.",
    "sentence": "Kindness, honesty, and punctuality are positive {{BLANK}} that employers value highly.",
    "cn": "善良、誠實和守時是雇主非常看重的正面人格特質（個性特徵）。"
  },
  {
    "word": "main character",
    "pos": "n. [C]",
    "cn_def": "主角、主要角色",
    "en_def": "The most important person in a story, novel, movie, or play.",
    "sentence": "Chloe felt deeply moved by the struggles and growth of the {{BLANK}} in the fantasy novel.",
    "cn": "克洛伊被那部奇幻小說中主角（主要角色）的掙扎與成長深深打動。"
  },
  {
    "word": "demand",
    "pos": "n.",
    "cn_def": "需求",
    "en_def": "an insistent and peremptory request, made as if by right.",
    "sentence": "Because of the sudden and highly unexpected winter storm, the local {{BLANK}} for warm electric heaters increased drastically overnight.",
    "cn": "由於突然且極其出乎意料的冬季風暴，當地對溫暖電暖器的需求在一夜之間急劇增加。"
  },
  {
    "word": "demanded",
    "pos": "v.",
    "cn_def": "要求",
    "en_def": "to ask authoritatively or brusquely.",
    "sentence": "The deeply upset and extremely angry customer aggressively {{BLANK}} to immediately speak with the busy store manager about her completely broken product.",
    "cn": "深感沮喪且極度憤怒的顧客積極地要求立刻與忙碌的店經理談談她完全損壞的產品。"
  },
  {
    "word": "demanding",
    "pos": "adj.",
    "cn_def": "要求高的；費力的",
    "en_def": "requiring much skill or effort.",
    "sentence": "Working actively as a professional hospital surgeon is incredibly {{BLANK}} with extremely long daily hours and highly intense pressure.",
    "cn": "積極地作為一名專業的醫院外科醫生工作是極其費力的（要求高的），每天的工時極長且壓力極大。"
  },
  {
    "word": "highly demanding",
    "pos": "phr.",
    "cn_def": "要求極高的",
    "en_def": "requiring a tremendous amount of effort, skill, or energy.",
    "sentence": "The rigorous university medical program is {{BLANK}} and strictly requires all ambitious students to study intensely every single night.",
    "cn": "嚴格的大學醫學課程是要求極高的，並嚴格要求所有雄心勃勃的學生每晚都必須密集地學習。"
  },
  {
    "word": "physical demand",
    "pos": "phr.",
    "cn_def": "體力要求",
    "en_def": "the physical exertion required to perform a specific task.",
    "sentence": "The incredibly intense {{BLANK}} of running a full marathon naturally requires absolute dedication and months of exhausting daily training.",
    "cn": "跑完一場全程馬拉松極其強烈的體力要求，自然需要絕對的奉獻精神和數個月令人筋疲力盡的日常訓練。"
  },
  {
    "word": "in high demand",
    "pos": "phr.",
    "cn_def": "需求量很大的、供不應求的",
    "en_def": "Wanted or needed by many people; extremely popular.",
    "sentence": "Software engineers with prior knowledge of artificial intelligence are {{BLANK}} in today's tech industry.",
    "cn": "具備人工智慧先前知識的軟體工程師，在當今的科技產業中需求量極大。"
  },
  {
    "word": "in short supply",
    "pos": "phr.",
    "cn_def": "供應不足的、短缺的",
    "en_def": "Available only in small quantities; hard to find or obtain.",
    "sentence": "Fresh vegetables and clean drinking water were {{BLANK}} right after the severe typhoon hit the city.",
    "cn": "強烈颱風襲擊該市後，新鮮蔬菜和乾淨的飲用水隨即供應不足（短缺）。"
  },
  {
    "word": "shortage",
    "pos": "n. [C, U]",
    "cn_def": "短缺、不足",
    "en_def": "A situation where there is not enough of something that is needed.",
    "sentence": "The international manufacturing factory is facing a serious {{BLANK}} of raw materials due to shipping delays.",
    "cn": "由於航運延誤，這家國際製造廠正遭遇嚴重的原料短缺。"
  },
  {
    "word": "on demand",
    "pos": "phr.",
    "cn_def": "隨選的、一經要求即提供的",
    "en_def": "Available whenever someone asks for it or wants to use it.",
    "sentence": "Modern consumers prefer to watch their favorite television shows {{BLANK}} rather than waiting for a weekly broadcast.",
    "cn": "現代消費者更喜歡隨選（隨選隨看）觀看他們最喜歡的電視節目，而不是等待每週的系統廣播。"
  },
  {
    "word": "OTT",
    "pos": "n. [U] / adj.",
    "cn_def": "串流媒體服務、串流的（意指串流影音平台）",
    "en_def": "Over-The-Top; media services offered directly to viewers via the internet, bypassing traditional cable or satellite.",
    "sentence": "Netflix and Disney+ are famous {{BLANK}} platforms that allow users to access thousands of movies on demand.",
    "cn": "Netflix 和 Disney+ 是著名的串流媒體（OTT）平台，讓使用者可以隨選觀看數千部電影。"
  },
  {
    "word": "live stream",
    "pos": "n. [C] / v.",
    "cn_def": "直播、線上直播",
    "en_def": "A live broadcast of an event over the internet, or to broadcast video over the internet in real time.",
    "sentence": "The popular English teacher held a {{BLANK}} last night to interact with students and answer grammar questions.",
    "cn": "那位受歡迎的英文老師昨晚舉行了線上直播，與學生互動並解答文法問題。"
  },
  {
    "word": "streaming",
    "pos": "n. [U]",
    "cn_def": "串流、影音串流",
    "en_def": "The activity of listening to music or watching video directly from the internet without downloading it first.",
    "sentence": "With the rise of music {{BLANK}} services, very few people buy traditional physical CDs anymore.",
    "cn": "隨著音樂串流服務的興起，現在已經很少有人會購買傳統的實體 CD 了。"
  },
  {
    "word": "stream",
    "pos": "v.",
    "cn_def": "串流傳輸、線上播放",
    "en_def": "To transmit or receive video and audio data over the internet as a continuous flow.",
    "sentence": "Users can easily {{BLANK}} their favorite movies on demand to their mobile tablets using a stable 5G network.",
    "cn": "使用者可以使用穩定的 5G 網路，輕鬆地將喜愛的電影串流傳輸（線上播放）到他們的手提平板上。"
  },
  {
    "word": "stream",
    "pos": "n. [C]",
    "cn_def": "連續不斷（的流動）；小河、溪流",
    "en_def": "A continuous flow of things or people; or a small, narrow river.",
    "sentence": "Marcus and Chloe sat on a rock next to a cold mountain {{BLANK}} to enjoy their packed lunch during the hike.",
    "cn": "馬庫斯和克洛伊在健行時，坐在冰涼的山間溪流（小河）旁的岩石上，享受他們準備好的便當。"
  },
  {
    "word": "chores",
    "pos": "n.",
    "cn_def": "雜務",
    "en_def": "a routine task, especially a household one.",
    "sentence": "One of my most incredibly boring daily {{BLANK}} is to carefully take the smelly garbage outside every single night.",
    "cn": "我最極度無聊的日常雜務之一，就是每晚小心地把發臭的垃圾拿到外面。"
  },
  {
    "word": "do household chores",
    "pos": "phr.",
    "cn_def": "做家事",
    "en_def": "to perform the routine tasks associated with maintaining a home.",
    "sentence": "A lot of busy modern people absolutely hate having to {{BLANK}} because they find them incredibly tedious and boring.",
    "cn": "許多忙碌的現代人絕對討厭必須做家事，因為他們覺得這極其乏味且無聊。"
  },
  {
    "word": "do housework",
    "pos": "phr.",
    "cn_def": "做家事",
    "en_def": "to complete regular tasks required to keep a house clean and functional.",
    "sentence": "Because both of my parents work extremely long hours, we strictly divide and {{BLANK}} equally on the relaxing weekends.",
    "cn": "因為我父母工作時間都極長，我們在放鬆的週末嚴格地平分並平等地做家事。"
  },
  {
    "word": "daily chore",
    "pos": "phr.",
    "cn_def": "日常雜務",
    "en_def": "a specific routine task that must be done every day.",
    "sentence": "Feeding the energetic and deeply hungry dogs is an incredibly important {{BLANK}} that I must strictly complete every single morning.",
    "cn": "餵養精力充沛且極度飢餓的狗是一項極其重要的日常雜務，我每天早上都必須嚴格完成。"
  },
  {
    "word": "caretaker",
    "pos": "n.",
    "cn_def": "照顧者",
    "en_def": "a person employed to look after people or animals.",
    "sentence": "Exhausted Mary is seriously considering officially hiring an experienced and deeply compassionate {{BLANK}} to help care for her fragile elderly mother.",
    "cn": "疲憊的瑪麗正認真考慮正式聘請一位經驗豐富且極具同情心的照顧者，來幫助照顧她脆弱的年老母親。"
  },
  {
    "word": "care",
    "pos": "n.",
    "cn_def": "照顧",
    "en_def": "the provision of what is necessary for the health, welfare, maintenance, and protection of someone or something.",
    "sentence": "The tiny and incredibly fragile prematurely born baby required absolute specialized medical {{BLANK}} in the busy hospital for several stressful weeks.",
    "cn": "弱小且極其脆弱的早產兒在繁忙的醫院裡，需要長達數個充滿壓力星期的絕對專門醫療照顧。"
  },
  {
    "word": "care for",
    "pos": "phr.",
    "cn_def": "照顧",
    "en_def": "to look after and provide for the needs of.",
    "sentence": "It requires an incredibly massive amount of profound patience and gentle kindness to properly {{BLANK}} a severely sick person.",
    "cn": "適當地照顧一個重病患者，需要極其大量的深厚耐心和溫柔的善良。"
  },
  {
    "word": "take care of",
    "pos": "phr.",
    "cn_def": "照顧",
    "en_def": "to keep someone or something safe and provided for.",
    "sentence": "When my parents peacefully travel abroad, my reliable older sister will securely {{BLANK}} our highly energetic golden retriever.",
    "cn": "當我父母平靜地出國旅行時，我可靠的姊姊將會穩妥地照顧我們精力高度充沛的黃金獵犬。"
  },
  {
    "word": "careful",
    "pos": "adj.",
    "cn_def": "小心的",
    "en_def": "making sure of avoiding potential danger, mishap, or harm.",
    "sentence": "You absolutely must be incredibly {{BLANK}} when you cautiously drive your expensive new car on these dangerously icy mountain roads.",
    "cn": "當你小心翼翼地在這些危險結冰的山路上駕駛你昂貴的新車時，你絕對必須極其小心的。"
  },
  {
    "word": "vigorous",
    "pos": "adj.",
    "cn_def": "精力充沛的",
    "en_def": "strong, healthy, and full of energy.",
    "sentence": "Professional football players must absolutely be incredibly {{BLANK}} athletes capable of maintaining a highly intense level of physical performance.",
    "cn": "職業美式足球員絕對必須是極其精力充沛的運動員，能夠維持高度激烈的體能表現水準。"
  },
  {
    "word": "vigorously",
    "pos": "adv.",
    "cn_def": "精神旺盛地",
    "en_def": "in a way that involves physical strength, effort, or energy.",
    "sentence": "The highly enthusiastic crowd cheered {{BLANK}} as the victorious home team finally scored the exciting winning goal in the final seconds.",
    "cn": "當勝利的主場球隊終於在最後幾秒踢進令人興奮的致勝球時，極度熱情的群眾精神旺盛地歡呼。"
  },
  {
    "word": "energetic",
    "pos": "adj.",
    "cn_def": "精力充沛的",
    "en_def": "showing or involving great activity or vitality.",
    "sentence": "The highly {{BLANK}} young puppy happily ran rapidly around the massive green park for two entire completely exhausting hours today.",
    "cn": "高度精力充沛的年輕小狗，今天快樂地在巨大的綠色公園裡快速奔跑了整整兩個完全令人筋疲力盡的小時。"
  },
  {
    "word": "vigorous exercise",
    "pos": "phr.",
    "cn_def": "劇烈運動",
    "en_def": "physical activity that is hard and involves a lot of effort.",
    "sentence": "Because Vicki is currently recovering from being terribly ill, she's definitely not completely ready for extremely {{BLANK}} just yet.",
    "cn": "因為薇琪目前正從重病中康復，她絕對還沒有完全準備好進行極其劇烈運動。"
  },
  {
    "word": "vigor",
    "pos": "n.",
    "cn_def": "活力",
    "en_def": "physical strength and good health.",
    "sentence": "The previously exhausted older man surprisingly completed the difficult and lengthy hiking trail with the incredible {{BLANK}} of a much younger person.",
    "cn": "先前筋疲力盡的老人，令人驚訝地以年輕許多的人那種令人難以置信的活力，完成了困難且漫長的登山步道。"
  },
  {
    "word": "indulge",
    "pos": "v.",
    "cn_def": "沉溺於；享受",
    "en_def": "to allow oneself to enjoy the pleasure of.",
    "sentence": "Hardworking Alice will occasionally gracefully {{BLANK}} in a highly expensive glass of imported red wine with her delicious weekend dinner.",
    "cn": "辛勤工作的愛麗絲偶爾會優雅地享受（沉溺於）一杯極其昂貴的進口紅酒，搭配她美味的週末晚餐。"
  },
  {
    "word": "indulged himself in",
    "pos": "phr.",
    "cn_def": "放縱自己",
    "en_def": "to allow oneself a special pleasure.",
    "sentence": "After successfully finishing the highly stressful project, tired Jim {{BLANK}} entertainment and joyfully took another massive slice of sweet chocolate cake.",
    "cn": "在成功完成充滿壓力的專案後，疲憊的吉姆放縱自己，愉快地又拿了一大塊甜巧克力蛋糕。"
  },
  {
    "word": "indulgent",
    "pos": "adj.",
    "cn_def": "溺愛的",
    "en_def": "having or indicating a tendency to be overly generous to or lenient with someone.",
    "sentence": "The deeply loving but overly {{BLANK}} grandparents constantly bought their excited grandchildren absolutely everything they ever loudly demanded at the busy store.",
    "cn": "深愛但過度溺愛的祖父母，不斷在繁忙的商店裡為他們興奮的孫子買下絕對所有他們大聲要求的東西。"
  },
  {
    "word": "indulgence",
    "pos": "n.",
    "cn_def": "放縱",
    "en_def": "the action or fact of indulging.",
    "sentence": "Eating an entire massive box of rich chocolate cookies is undeniably a highly unhealthy {{BLANK}} that you should definitely strictly avoid.",
    "cn": "吃掉一整大盒濃郁的巧克力餅乾，無疑是一種極度不健康的放縱，你絕對應該嚴格避免。"
  },
  {
    "word": "edible",
    "pos": "adj.",
    "cn_def": "可食用的",
    "en_def": "fit to be eaten.",
    "sentence": "The beautifully carved decorative fruit on the table is absolutely not {{BLANK}}, so please carefully ensure that you don't actually eat it.",
    "cn": "桌上雕刻精美的裝飾性水果絕對不是可食用的，所以請小心確保你沒有真的吃掉它。"
  },
  {
    "word": "inedible",
    "pos": "adj.",
    "cn_def": "不可食用的",
    "en_def": "not fit for eating.",
    "sentence": "Because the careless chef entirely burned the expensive steak, the completely ruined meal was officially considered highly {{BLANK}}.",
    "cn": "因為粗心的主廚完全把昂貴的牛排烤焦了，這頓徹底毀掉的餐點被官方認為是高度不可食用的。"
  },
  {
    "word": "rot",
    "pos": "v.",
    "cn_def": "腐爛",
    "en_def": "to decay or cause to decay by the action of bacteria and fungi.",
    "sentence": "If you carelessly leave fresh meat outside the cold refrigerator in the hot summer, it will inevitably {{BLANK}} quickly.",
    "cn": "如果你在炎熱的夏天粗心地把新鮮的肉留在冰冷的冰箱外面，它不可避免地會極快地腐爛。"
  },
  {
    "word": "rotten",
    "pos": "adj.",
    "cn_def": "腐爛的",
    "en_def": "suffering from decay.",
    "sentence": "You absolutely should promptly get rid of the terribly {{BLANK}} fruit sitting on the table because it will quickly attract annoying bugs.",
    "cn": "你絕對應該迅速處理掉放在桌上那極度腐爛的水果，因為它會很快吸引煩人的蟲子。"
  },
  {
    "word": "completely rotten",
    "pos": "phr.",
    "cn_def": "完全腐爛的",
    "en_def": "entirely decayed and unusable.",
    "sentence": "When the homeowner finally returned after a long vacation, he discovered that the vegetables in the fridge were {{BLANK}}.",
    "cn": "當屋主在漫長的假期後終於回來時，他發現冰箱裡的蔬菜已經完全腐爛的。"
  },
  {
    "word": "rotten fruit",
    "pos": "phr.",
    "cn_def": "腐爛的水果",
    "en_def": "fruit that has decayed.",
    "sentence": "The aggressive swarm of incredibly annoying flies was immediately attracted to the terribly {{BLANK}} that was carelessly left in the sunny kitchen.",
    "cn": "具攻擊性且極度煩人的蒼蠅群，立刻被粗心地留在陽光明媚廚房裡的極度腐爛的水果所吸引。"
  },
  {
    "word": "intake",
    "pos": "n.",
    "cn_def": "攝取量",
    "en_def": "an amount of food, air, or another substance taken into the body.",
    "sentence": "The strict medical doctor strongly suggested that you should definitely try to significantly limit your daily {{BLANK}} of highly processed sugar.",
    "cn": "嚴格的醫生強烈建議你絕對應該嘗試顯著限制你高度加工糖的每日攝取量。"
  },
  {
    "word": "daily intake",
    "pos": "phr.",
    "cn_def": "每日攝取量",
    "en_def": "the total amount of something consumed in one day.",
    "sentence": "Consuming a massive amount of fresh clean water is absolutely essential for strictly maintaining your highly recommended {{BLANK}} of hydration.",
    "cn": "飲用大量新鮮乾淨的水，對於嚴格維持你強烈建議的水分每日攝取量絕對是不可或缺的。"
  },
  {
    "word": "limit your intake",
    "pos": "phr.",
    "cn_def": "限制某人的攝取量",
    "en_def": "to restrict the amount of food, drink, or substance one consumes.",
    "sentence": "To lose excess weight, you must {{BLANK}} of fried foods and sugary drinks.",
    "cn": "為了減掉過多的體重，你必須限制油炸食物和含糖飲料的攝取量。"
  },
  {
    "word": "food intake",
    "pos": "phr.",
    "cn_def": "食物攝取量",
    "en_def": "the quantity of food a person or animal consumes.",
    "sentence": "The dedicated professional athlete meticulously tracks his entire {{BLANK}} every single day to perfectly ensure he remains in top physical shape.",
    "cn": "盡責的職業運動員每天一絲不苟地追蹤他整個的食物攝取量，以完美確保他保持在頂尖的身體狀態。"
  },
  {
    "word": "water intake",
    "pos": "phr.",
    "cn_def": "水分攝取量",
    "en_def": "the amount of water a person drinks.",
    "sentence": "During the incredibly hot and humid summer months, drastically increasing your pure {{BLANK}} is undeniably crucial to avoiding highly dangerous dehydration.",
    "cn": "在極其炎熱潮濕的夏季月份，大幅增加你純粹的水分攝取量無疑是避免高度危險脫水的關鍵。"
  },
  {
    "word": "inevitable",
    "pos": "adj.",
    "cn_def": "無可避免的",
    "en_def": "certain to happen; unavoidable.",
    "sentence": "If the two aggressive countries absolutely don't repair their deeply damaged relationship soon, a highly destructive military war will be completely {{BLANK}}.",
    "cn": "如果這兩個具攻擊性的國家不快點修復他們嚴重受損的關係，一場極具破壞性的軍事戰爭將是完全無可避免的。"
  },
  {
    "word": "inevitably",
    "pos": "adv.",
    "cn_def": "無可避免地",
    "en_def": "as is certain to happen; unavoidably.",
    "sentence": "Because the lazy student consistently refused to study properly, he {{BLANK}} failed the highly difficult and incredibly important final university exam.",
    "cn": "因為懶惰的學生始終拒絕適當地學習，他無可避免地沒有通過極度困難且極其重要的大學期末考。"
  },
  {
    "word": "unavoidable",
    "pos": "adj.",
    "cn_def": "無法避免的",
    "en_def": "not able to be avoided, prevented, or ignored; inevitable.",
    "sentence": "The massive traffic jam on the busy highway was entirely {{BLANK}} after the surprisingly severe and highly destructive sudden car accident occurred.",
    "cn": "在發生了令人驚訝的嚴重且極具破壞性的突發車禍後，繁忙高速公路上的巨大交通堵塞是完全無法避免的。"
  },
  {
    "word": "completely inevitable",
    "pos": "phr.",
    "cn_def": "完全無可避免的",
    "en_def": "absolutely certain to happen.",
    "sentence": "Due to the company's terrible financial decisions and greedy management, its total public bankruptcy was eventually deemed {{BLANK}} by all expert analysts.",
    "cn": "由於公司糟糕的財務決策和貪婪的管理層，其徹底的公開破產最終被所有專家分析師認為是完全無可避免的。"
  },
  {
    "word": "diabetes",
    "pos": "n.",
    "cn_def": "糖尿病",
    "en_def": "a disease in which the body's ability to produce or respond to the hormone insulin is impaired.",
    "sentence": "Despite tragically learning from his doctor that he has severe {{BLANK}}, stubborn Shawn still constantly eats a massive amount of terribly unhealthy sweets.",
    "cn": "儘管悲慘地從醫生那裡得知自己患有嚴重的糖尿病，固執的尚恩仍然不斷吃下大量極度不健康的甜食。"
  },
  {
    "word": "diabetic",
    "pos": "adj.",
    "cn_def": "糖尿病的",
    "en_def": "relating to or suffering from diabetes.",
    "sentence": "The specialized medical clinic provides customized and healthy daily meal plans for their fragile {{BLANK}} patients.",
    "cn": "這家專業的醫療診所，嚴格為其脆弱的糖尿病的病患提供客製化且健康的每日膳食計畫。"
  },
  {
    "word": "type 2 diabetes",
    "pos": "phr.",
    "cn_def": "第二型糖尿病",
    "en_def": "a chronic condition that affects the way the body processes blood sugar.",
    "sentence": "Because of his incredibly poor diet and severe lack of daily exercise, the tired older man unfortunately developed {{BLANK}}.",
    "cn": "由於他極其糟糕的飲食和嚴重缺乏日常運動，這位疲憊的老人不幸罹患了第二型糖尿病。"
  },
  {
    "word": "suffer from diabetes",
    "pos": "phr.",
    "cn_def": "罹患糖尿病",
    "en_def": "to experience the symptoms and health problems associated with diabetes.",
    "sentence": "Millions of totally unsuspecting people globally currently {{BLANK}} but tragically do not actively know they have the serious illness yet.",
    "cn": "全球目前有數百萬完全毫無防備的人正罹患糖尿病，但悲慘的是他們尚未主動知道自己患有這種嚴重的疾病。"
  },
  {
    "word": "literally",
    "pos": "adv.",
    "cn_def": "簡直；字面上",
    "en_def": "in a literal manner or sense; exactly.",
    "sentence": "When excited Brian finally called and happily asked surprised Linda out on a romantic date, she {{BLANK}} danced around her messy bedroom.",
    "cn": "當興奮的布萊恩終於打電話並快樂地約驚訝的琳達進行浪漫約會時，她簡直在她雜亂的臥室裡跳起舞來。"
  },
  {
    "word": "literal",
    "pos": "adj.",
    "cn_def": "字面上的",
    "en_def": "taking words in their usual or most basic sense without metaphor or allegory.",
    "sentence": "The highly frustrated foreign student was deeply confused because he incorrectly translated the complex English idiom using its entirely {{BLANK}} meaning.",
    "cn": "這位極度挫折的外國學生深感困惑，因為他使用完全字面上的意思錯誤地翻譯了這個複雜的英文慣用語。"
  },
  {
    "word": "literal meaning",
    "pos": "phr.",
    "cn_def": "字面意義",
    "en_def": "the exact or strict meaning of a word or phrase.",
    "sentence": "If you simply look at the {{BLANK}} of the strange phrase, it makes absolutely no sense in this deeply complex context.",
    "cn": "如果你只看這個奇怪片語的字面意義，在這個極其複雜的語境中它絕對不合理。"
  },
  {
    "word": "literally translated",
    "pos": "phr.",
    "cn_def": "直譯",
    "en_def": "translated word for word.",
    "sentence": "The beautiful and deeply emotional traditional poem, when {{BLANK}} into modern English, unfortunately loses a massive amount of its profound cultural charm.",
    "cn": "這首美麗且情感深厚的傳統詩歌，當直譯成現代英文時，不幸地失去了大量的深厚文化魅力。"
  }
];

const MCQS = [
  {
    "q": "The extremely ______ little boy loudly asked his busy mother to quickly cook some delicious dinner.",
    "options": [
      "persistent",
      "hungry",
      "vigorous",
      "characteristic"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Lily's ______ didn't go away even after she eagerly ate two huge sandwiches for lunch.",
    "options": [
      "complication",
      "demand",
      "intake",
      "hunger"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Ever since he was a young student, ambitious George has always had a deep ______ knowledge.",
    "options": [
      "physical stature",
      "in effect",
      "hunger for",
      "medical complication"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "After working in the busy city for years, Marcus began to ______ a peaceful life in a quiet village.",
    "options": [
      "long for",
      "is directly related to",
      "suffer from diabetes",
      "character traitses"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Having lived abroad for over five years, Chloe ______ return home and spend time with her family.",
    "options": [
      "daily chore",
      "be compelled to",
      "bad for digestion",
      "longs to"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The young entrepreneur truly ______ to make a positive impact on society through her eco-friendly company.",
    "options": [
      "desires",
      "ached",
      "reinforce",
      "stream"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Leo expressed a strong ______ to learn advanced Japanese cooking techniques from the master chef.",
    "options": [
      "demand",
      "desire",
      "characteristics",
      "complication"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Many young students in the sports program ______ to compete in the Olympic Games one day.",
    "options": [
      "contact",
      "enforce",
      "aspire",
      "reinforce"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The university helps students fulfill their career ______ by providing professional internships.",
    "options": [
      "aspirations",
      "caretaker",
      "enforcement",
      "streaming"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Marcus has a great ______ to open his own law firm before he reaches the age of thirty-five.",
    "options": [
      "inability",
      "ambition",
      "indulgence",
      "connection"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The city government announced an ______ plan to transition all public transport to green energy within three years.",
    "options": [
      "persuasive",
      "LGBTQ",
      "ambitious",
      "demanding"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The poor stray animals will eventually ______ if the kind local residents do not regularly feed them.",
    "options": [
      "aspire",
      "connect",
      "characterize",
      "starve"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The dedicated charity workers warned that if the villagers don't get food soon, they will die of ______.",
    "options": [
      "vigor",
      "indulgence",
      "starvation",
      "risk"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "After hiking for six hours without any snacks, Marcus felt absolutely ______ by the time he reached the camp.",
    "options": [
      "starving",
      "ambitious",
      "transgender",
      "heterosexual"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "During the severe winter drought, many wild animals in the forest unfortunately ______ due to the lack of plants.",
    "options": [
      "hunger for",
      "digestive system",
      "metabolic syndrome",
      "starved to death"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "I haven't had anything since breakfast, and it's already late in the evening; I could ______ right now!",
    "options": [
      "in high demand",
      "eat a horse",
      "daily intake",
      "vigorous exercise"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The delicious aroma of the grilled Japanese yakiniku immediately stimulated Chloe's ______ as she walked into the restaurant.",
    "options": [
      "appetite",
      "pain",
      "vigor",
      "force"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The terrible ______ in George's right leg was significantly worse when the winter weather was extremely cold.",
    "options": [
      "contact",
      "persistence",
      "ache",
      "indulgence"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "After confidently finishing the exhausting marathon race, my tired feet truly ______ for an entire week.",
    "options": [
      "rot",
      "ached",
      "risk",
      "complicate"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Fiona had a mild ______ this sunny morning, but she thankfully feels much better right now.",
    "options": [
      "starvation",
      "appetite",
      "stream",
      "headache"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Robert immediately went to see a professional doctor because he was experiencing sharp chest ______ all morning.",
    "options": [
      "pain",
      "indulgence",
      "appetite",
      "vigor"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The nervous elderly patient rushed to the busy hospital because he suddenly felt a severe ______.",
    "options": [
      "take effect",
      "chest pain",
      "take a risk",
      "short stature"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "After twisting his ankle during the basketball game, Marcus was ______ and could barely walk to the bench.",
    "options": [
      "type 2 diabetes",
      "genetic disorder",
      "physical stature",
      "in severe pain"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The dentist explained that extracting the wisdom tooth would be a bit ______, but the healing process would be fast.",
    "options": [
      "literal",
      "genetically-modified-genetically-modified",
      "painful",
      "heterosexual"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Losing her childhood pet was a deeply ______ for Chloe, and she still gets emotional when talking about it.",
    "options": [
      "painful memory",
      "in high demand",
      "daily chore",
      "stay connected"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Leo took a strong ______ to handle his severe migraine so that he could focus on finishing his work reports.",
    "options": [
      "caretaker",
      "diabetes",
      "painkiller",
      "desire"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Applying a cold compress to a swollen muscle can help ______ and reduce inflammation quickly.",
    "options": [
      "keep in contact with",
      "relieve the pain",
      "felt compelled to",
      "learning disability"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The doctor prescribed a special ointment to help ______ caused by the sunburn on Marcus's shoulders.",
    "options": [
      "be actively involved in",
      "painful memory",
      "medical complication",
      "ease the pain"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Resting the injured wrist and elevating it on a soft pillow will significantly ______.",
    "options": [
      "run the risk of",
      "law enforcement",
      "reduce the pain",
      "stay connected"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The modern new bridge will efficiently ______ the two isolated towns across the wide and deep river.",
    "options": [
      "rot",
      "contact",
      "complicate",
      "connect"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Intelligent Paul is incredibly interested in absolutely any complex topic that is closely ______ to classical music.",
    "options": [
      "ambitious",
      "connected",
      "painful",
      "digestive"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The smart detective quickly realized that there was a hidden ______ between the two seemingly unrelated crimes.",
    "options": [
      "connection",
      "care",
      "persuasion",
      "appetite"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "Using modern social media makes it incredibly easy to ______ with friends living in foreign countries.",
    "options": [
      "physical demand",
      "completely inevitable",
      "stay connected",
      "contact lenses"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The researchers discovered that the rare illness is strongly ______ to drinking heavily polluted river water.",
    "options": [
      "persistent",
      "genetic",
      "edible",
      "linked"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "The printer must ______ the main computer via a USB cable before you can print out the vocabulary lists.",
    "options": [
      "be connected to",
      "short stature",
      "do housework",
      "longs to"
    ],
    "answer": 0,
    "vocabIndex": 34
  },
  {
    "q": "Scientific research has shown that a high-sugar diet ______ an increased risk of heart disease.",
    "options": [
      "physical demand",
      "is closely linked to",
      "short stature",
      "food intake"
    ],
    "answer": 1,
    "vocabIndex": 35
  },
  {
    "q": "The color red ______ danger, excitement, or passion in many different cultures.",
    "options": [
      "talked their father into taking",
      "starved to death",
      "main character",
      "is often associated with"
    ],
    "answer": 3,
    "vocabIndex": 36
  },
  {
    "q": "The drop in sales this month ______ the recent supply chain delays in shipping.",
    "options": [
      "is directly related to",
      "stay connected",
      "Chinese character",
      "in severe pain"
    ],
    "answer": 0,
    "vocabIndex": 37
  },
  {
    "q": "Marcus decided to ______ the local charity project to help low-income families.",
    "options": [
      "rare syndrome",
      "in effect",
      "be actively involved in",
      "reduce the pain"
    ],
    "answer": 2,
    "vocabIndex": 38
  },
  {
    "q": "I suspect that the strange noise from the kitchen ______ the old refrigerator.",
    "options": [
      "relieve the pain",
      "has something to do with",
      "daily chore",
      "rotten fruit"
    ],
    "answer": 1,
    "vocabIndex": 39
  },
  {
    "q": "If you have any questions about the new schedule, please feel free to ______ Chloe via email.",
    "options": [
      "persuade",
      "indulge",
      "starve",
      "contact"
    ],
    "answer": 3,
    "vocabIndex": 40
  },
  {
    "q": "Marcus has lost ______ with most of his high school classmates since he moved to Taipei for work.",
    "options": [
      "syndrome",
      "vigor",
      "contact",
      "characteristics"
    ],
    "answer": 2,
    "vocabIndex": 41
  },
  {
    "q": "Thanks to modern social media applications, it is much easier to ______ friends living abroad.",
    "options": [
      "law enforcement",
      "keep in contact with",
      "starved to death",
      "hunger for"
    ],
    "answer": 1,
    "vocabIndex": 42
  },
  {
    "q": "Chloe prefers wearing ______ when she goes out for formal dinners so she doesn't need her glasses.",
    "options": [
      "contact lenses",
      "chest pain",
      "in high demand",
      "vigorous exercise"
    ],
    "answer": 0,
    "vocabIndex": 43
  },
  {
    "q": "As there was something terribly wrong with the engine, the frightened pilot was ______ to land quickly.",
    "options": [
      "indulge",
      "complicate",
      "compelled",
      "rot"
    ],
    "answer": 2,
    "vocabIndex": 44
  },
  {
    "q": "The skilled lawyer presented a highly ______ argument that successfully convinced the jury to free the innocent man.",
    "options": [
      "genetically-modified-genetically-modified",
      "painful",
      "unavoidable",
      "compelling"
    ],
    "answer": 3,
    "vocabIndex": 45
  },
  {
    "q": "When I saw the helpless little puppy shivering in the cold rain, I ______ help it.",
    "options": [
      "talked their father into taking",
      "felt compelled to",
      "run the risk of",
      "contact lenses"
    ],
    "answer": 1,
    "vocabIndex": 46
  },
  {
    "q": "Due to the sudden and devastating financial crisis, the company will ______ lay off many workers.",
    "options": [
      "be compelled to",
      "daily intake",
      "keep in contact with",
      "main character"
    ],
    "answer": 0,
    "vocabIndex": 47
  },
  {
    "q": "The lawyer managed to ______ the jury that his client was completely innocent of the crime.",
    "options": [
      "persisted",
      "forced",
      "contact",
      "convince"
    ],
    "answer": 3,
    "vocabIndex": 48
  },
  {
    "q": "Marcus provided a ______ argument for the budget increase, backed up by clear data and charts.",
    "options": [
      "linked",
      "homosexual",
      "convincing",
      "rotten"
    ],
    "answer": 2,
    "vocabIndex": 49
  },
  {
    "q": "Chloe tried hard to ______ her parents to let her study arts abroad next semester.",
    "options": [
      "persisted",
      "persuade",
      "digest",
      "enforce"
    ],
    "answer": 1,
    "vocabIndex": 50
  },
  {
    "q": "The marketing manager gave a highly ______ presentation that won over the new international clients.",
    "options": [
      "persuasive",
      "inedible",
      "literal",
      "heterosexual"
    ],
    "answer": 0,
    "vocabIndex": 51
  },
  {
    "q": "It took a great deal of ______ to get Marcus to join the weekend volunteer team.",
    "options": [
      "syndrome",
      "desire",
      "pain",
      "persuasion"
    ],
    "answer": 3,
    "vocabIndex": 52
  },
  {
    "q": "The kids successfully ______ them to the amusement park this weekend.",
    "options": [
      "talked their father into taking",
      "ease the pain",
      "highly complicated",
      "character traitses"
    ],
    "answer": 0,
    "vocabIndex": 53
  },
  {
    "q": "The heavy rain and flooded roads ______ the tour group to cancel their outdoor trip to the hot springs.",
    "options": [
      "convince",
      "aspire",
      "forced",
      "contact"
    ],
    "answer": 2,
    "vocabIndex": 54
  },
  {
    "q": "The window was smashed with great ______, suggesting that the thief used a heavy hammer to break in.",
    "options": [
      "character",
      "force",
      "syndrome",
      "stature"
    ],
    "answer": 1,
    "vocabIndex": 55
  },
  {
    "q": "The two tech companies decided to ______ to develop an advanced AI tool for English language learning.",
    "options": [
      "join forces",
      "highly demanding",
      "reduce the pain",
      "in effect"
    ],
    "answer": 0,
    "vocabIndex": 56
  },
  {
    "q": "The professional educator gave a ______ speech about the great importance of incorporating digital tools into classrooms.",
    "options": [
      "persistent",
      "unavoidable",
      "hungry",
      "forceful"
    ],
    "answer": 3,
    "vocabIndex": 57
  },
  {
    "q": "The strict local police officers are working extremely hard to carefully ______ the brand new traffic laws.",
    "options": [
      "compelled",
      "enforce",
      "ached",
      "starve"
    ],
    "answer": 1,
    "vocabIndex": 58
  },
  {
    "q": "The school principal warned that the teachers would strictly ______ the ban on cheating during the exams.",
    "options": [
      "disable",
      "desires",
      "enforce",
      "persisted"
    ],
    "answer": 2,
    "vocabIndex": 59
  },
  {
    "q": "Strict ______ of the speed limit rules has significantly reduced the number of traffic accidents on this highway.",
    "options": [
      "enforcement",
      "inability",
      "contact",
      "syndrome"
    ],
    "answer": 0,
    "vocabIndex": 60
  },
  {
    "q": "Many ______ officers were deployed to protect the public and maintain order during the political rally.",
    "options": [
      "literal meaning",
      "live stream",
      "law enforcement",
      "indulged himself in"
    ],
    "answer": 2,
    "vocabIndex": 61
  },
  {
    "q": "The new government regulations regarding environmental protection will be ______ starting next Monday.",
    "options": [
      "eat a horse",
      "in effect",
      "indulged himself in",
      "completely inevitable"
    ],
    "answer": 1,
    "vocabIndex": 62
  },
  {
    "q": "The doctor said that the strong painkiller would take about twenty minutes to ______.",
    "options": [
      "join forces",
      "genetic defect",
      "daily chore",
      "take effect"
    ],
    "answer": 3,
    "vocabIndex": 63
  },
  {
    "q": "The teacher gave students a quick online quiz after the lecture to ______ the vocabulary words they just learned.",
    "options": [
      "reinforce",
      "demanded",
      "ached",
      "complicate"
    ],
    "answer": 0,
    "vocabIndex": 64
  },
  {
    "q": "It usually takes a few hours for your healthy stomach to completely ______ a heavy and greasy meal.",
    "options": [
      "enforce",
      "digest",
      "complicate",
      "indulge"
    ],
    "answer": 1,
    "vocabIndex": 65
  },
  {
    "q": "Eating a massive amount of spicy food right before sleeping is generally very bad for your ______.",
    "options": [
      "force",
      "stature",
      "painkiller",
      "digestion"
    ],
    "answer": 3,
    "vocabIndex": 66
  },
  {
    "q": "Drinking plenty of fresh water every day is absolutely essential for maintaining a healthy ______ system.",
    "options": [
      "inedible",
      "literal",
      "digestive",
      "careful"
    ],
    "answer": 2,
    "vocabIndex": 67
  },
  {
    "q": "The knowledgeable doctor gently warned the patient that eating too quickly is surprisingly ______.",
    "options": [
      "starved to death",
      "stay connected",
      "join forces",
      "bad for digestion"
    ],
    "answer": 3,
    "vocabIndex": 68
  },
  {
    "q": "Consuming a lot of organic vegetables daily can effectively help your complex ______ function much better.",
    "options": [
      "take effect",
      "digestive system",
      "physical stature",
      "highly complicated"
    ],
    "answer": 1,
    "vocabIndex": 69
  },
  {
    "q": "Although the strict teacher repeatedly told the young girl to stop talking, she stubbornly ______ with her bad behavior.",
    "options": [
      "persisted",
      "stream",
      "complicate",
      "desires"
    ],
    "answer": 0,
    "vocabIndex": 70
  },
  {
    "q": "Exhausted Matt constantly heard a ______ buzzing noise in his ears after attending the incredibly loud rock concert.",
    "options": [
      "persuasive",
      "transgender",
      "persistent",
      "inedible"
    ],
    "answer": 2,
    "vocabIndex": 71
  },
  {
    "q": "Achieving massive success in the highly competitive business world definitely requires a great deal of hard work and ______.",
    "options": [
      "persistence",
      "persuasion",
      "headache",
      "demand"
    ],
    "answer": 0,
    "vocabIndex": 72
  },
  {
    "q": "The ______ and heavy winter rain completely flooded the quiet streets of the small rural town yesterday.",
    "options": [
      "persistent",
      "edible",
      "continuous",
      "ambitious"
    ],
    "answer": 2,
    "vocabIndex": 73
  },
  {
    "q": "The annoying salesman ______ called my house four times last week trying to sell me a new product.",
    "options": [
      "vigorously",
      "persistently",
      "genetically",
      "literally"
    ],
    "answer": 1,
    "vocabIndex": 74
  },
  {
    "q": "The experienced doctor explained that this rare medical ______ is most likely to seriously affect middle-aged working men.",
    "options": [
      "ambition",
      "digestion",
      "enforcement",
      "syndrome"
    ],
    "answer": 3,
    "vocabIndex": 75
  },
  {
    "q": "The dedicated teacher works incredibly patiently with several wonderful children who were naturally born with ______.",
    "options": [
      "completely inevitable",
      "hunger for",
      "Down syndrome",
      "literal meaning"
    ],
    "answer": 2,
    "vocabIndex": 76
  },
  {
    "q": "A severe lack of daily exercise can unfortunately greatly increase your personal risk of developing ______.",
    "options": [
      "has something to do with",
      "in severe pain",
      "in short supply",
      "metabolic syndrome"
    ],
    "answer": 3,
    "vocabIndex": 77
  },
  {
    "q": "The brilliant scientists are desperately trying to discover an effective cure for this highly dangerous and ______.",
    "options": [
      "stay connected",
      "rare syndrome",
      "food intake",
      "type 2 diabetes"
    ],
    "answer": 1,
    "vocabIndex": 78
  },
  {
    "q": "The brilliant biology professor clearly explained how a single mutated ______ can potentially cause serious health problems.",
    "options": [
      "gene",
      "indulgence",
      "pain",
      "starvation"
    ],
    "answer": 0,
    "vocabIndex": 79
  },
  {
    "q": "The professional doctors are completely unsure of the exact cause, but they strongly think the disease might be ______.",
    "options": [
      "diabetic",
      "continuous",
      "linked",
      "genetic"
    ],
    "answer": 3,
    "vocabIndex": 80
  },
  {
    "q": "The fascinating scientific field of ______ actively studies how physical traits are passed down from parents to their children.",
    "options": [
      "pain",
      "vigor",
      "genetics",
      "sex"
    ],
    "answer": 2,
    "vocabIndex": 81
  },
  {
    "q": "These perfectly red and juicy tomatoes have been ______ modified to be completely resistant to dangerous farm insects.",
    "options": [
      "genetically",
      "literally",
      "vigorously",
      "persistently"
    ],
    "answer": 0,
    "vocabIndex": 82
  },
  {
    "q": "Unfortunately, the newborn baby was tragically diagnosed with a rare ______ that severely affects his weak heart.",
    "options": [
      "in severe pain",
      "genetic defect",
      "gender discrimination",
      "character traitses"
    ],
    "answer": 1,
    "vocabIndex": 83
  },
  {
    "q": "People who suffer from this specific ______ must take highly expensive prescription medicine every single day.",
    "options": [
      "genetic disorder",
      "take effect",
      "water intake",
      "join forces"
    ],
    "answer": 0,
    "vocabIndex": 84
  },
  {
    "q": "Some consumers prefer to buy organic corn because they worry about the potential health risks of ______ food.",
    "options": [
      "disabled",
      "genetically-modified-genetically-modified",
      "vigorous",
      "diabetic"
    ],
    "answer": 1,
    "vocabIndex": 85
  },
  {
    "q": "The medical screening test can detect a specific ______ before the baby is born, allowing for early treatment.",
    "options": [
      "longs to",
      "take effect",
      "genetic disorder",
      "genetic defect"
    ],
    "answer": 3,
    "vocabIndex": 86
  },
  {
    "q": "There are ______ risks in any financial investment, so you should always think carefully before risking your money.",
    "options": [
      "inevitable",
      "edible",
      "inherent",
      "literal"
    ],
    "answer": 2,
    "vocabIndex": 87
  },
  {
    "q": "The desire to explore the unknown seems to ______ human nature since the beginning of history.",
    "options": [
      "be actively involved in",
      "physical stature",
      "main character",
      "be inherent in"
    ],
    "answer": 3,
    "vocabIndex": 88
  },
  {
    "q": "Progressive modern companies strongly believe that an applicant's ______ and race absolutely shouldn't matter during the hiring process.",
    "options": [
      "headache",
      "starvation",
      "gender",
      "pain"
    ],
    "answer": 2,
    "vocabIndex": 89
  },
  {
    "q": "The passionate political activists are constantly protesting in the busy streets to strongly demand absolute ______ globally.",
    "options": [
      "rare syndrome",
      "gender equality",
      "daily intake",
      "is directly related to"
    ],
    "answer": 1,
    "vocabIndex": 90
  },
  {
    "q": "The strict new government laws were officially created to completely prevent unfair ______ in the modern workplace.",
    "options": [
      "gender discrimination",
      "talked their father into taking",
      "hunger for",
      "ease the pain"
    ],
    "answer": 0,
    "vocabIndex": 91
  },
  {
    "q": "The supportive community enthusiastically held a vibrant parade to proudly celebrate and heavily support ______ individuals' basic rights.",
    "options": [
      "homosexual",
      "ambitious",
      "transgender",
      "complicated"
    ],
    "answer": 2,
    "vocabIndex": 92
  },
  {
    "q": "The university hosted a cultural festival to promote inclusion and support for all ______ students on campus.",
    "options": [
      "LGBTQ",
      "diabetic",
      "careful",
      "continuous"
    ],
    "answer": 0,
    "vocabIndex": 93
  },
  {
    "q": "The knowledgeable bird watcher explained that we can easily determine the ______ of the rare bird by its colorful feathers.",
    "options": [
      "syndrome",
      "gender",
      "appetite",
      "sex"
    ],
    "answer": 3,
    "vocabIndex": 94
  },
  {
    "q": "While ______ relationships are openly celebrated in many modern societies, some traditional cultures still hold biases.",
    "options": [
      "vigorous",
      "homosexual",
      "complicated",
      "painful"
    ],
    "answer": 1,
    "vocabIndex": 95
  },
  {
    "q": "The researcher gathered data from both homosexual and ______ couples to study modern patterns in relationship communication.",
    "options": [
      "vigorous",
      "risky",
      "linked",
      "heterosexual"
    ],
    "answer": 3,
    "vocabIndex": 96
  },
  {
    "q": "Please do not needlessly ______ this incredibly simple plan by adding so many highly confusing extra steps.",
    "options": [
      "rot",
      "characterize",
      "complicate",
      "stream"
    ],
    "answer": 2,
    "vocabIndex": 97
  },
  {
    "q": "Building a custom computer from scratch can honestly be a highly ______ process for complete beginners to learn.",
    "options": [
      "complicated",
      "digestive",
      "heterosexual",
      "persuasive"
    ],
    "answer": 0,
    "vocabIndex": 98
  },
  {
    "q": "The fragile elderly patient unfortunately died from severe medical ______ in his weak heart and damaged lungs.",
    "options": [
      "gender",
      "complication",
      "ache",
      "characters"
    ],
    "answer": 1,
    "vocabIndex": 99
  },
  {
    "q": "If you don't carefully take your prescribed antibiotics, you might unfortunately develop a highly dangerous ______.",
    "options": [
      "in short supply",
      "run the risk of",
      "join forces",
      "medical complication"
    ],
    "answer": 3,
    "vocabIndex": 100
  },
  {
    "q": "The brilliant engineer successfully designed a ______ mechanical system that effectively powers the entire massive factory.",
    "options": [
      "take a risk",
      "law enforcement",
      "highly complicated",
      "long for"
    ],
    "answer": 2,
    "vocabIndex": 101
  },
  {
    "q": "Extremely talented Stephen Curry is undeniably one of the NBA's best basketball players despite his relatively short ______.",
    "options": [
      "stature",
      "enforcement",
      "complication",
      "persistence"
    ],
    "answer": 0,
    "vocabIndex": 102
  },
  {
    "q": "Despite his noticeably ______, the courageous young man confidently stood up to the highly aggressive and mean bullies.",
    "options": [
      "Down syndrome",
      "short stature",
      "do household chores",
      "starved to death"
    ],
    "answer": 1,
    "vocabIndex": 103
  },
  {
    "q": "Because of her exceptionally ______, the graceful girl was naturally very good at playing competitive high school volleyball.",
    "options": [
      "be inherent in",
      "vigorous exercise",
      "tall stature",
      "on demand"
    ],
    "answer": 2,
    "vocabIndex": 104
  },
  {
    "q": "The professional wrestler's incredibly intimidating ______ made all of his nervous opponents instantly fear him in the ring.",
    "options": [
      "unique characteristic",
      "stay connected",
      "hunger for",
      "physical stature"
    ],
    "answer": 3,
    "vocabIndex": 105
  },
  {
    "q": "Friendly Gary unfortunately has a permanent physical ______ that sadly makes it extremely difficult for him to walk normally.",
    "options": [
      "disability",
      "force",
      "persistence",
      "demand"
    ],
    "answer": 0,
    "vocabIndex": 106
  },
  {
    "q": "The highly skilled computer technician had to quickly ______ the dangerous virus before it could completely destroy the entire network.",
    "options": [
      "digest",
      "disable",
      "characterize",
      "persuade"
    ],
    "answer": 1,
    "vocabIndex": 107
  },
  {
    "q": "The modern and highly inclusive city government recently built several brand new ramps specifically for ______ citizens to use safely.",
    "options": [
      "disabled",
      "inevitable",
      "heterosexual",
      "OTT"
    ],
    "answer": 0,
    "vocabIndex": 108
  },
  {
    "q": "If an energetic child actually has a ______, it definitely doesn't mean they aren't intelligent or highly capable.",
    "options": [
      "felt compelled to",
      "learning disability",
      "digestive system",
      "talked their father into taking"
    ],
    "answer": 1,
    "vocabIndex": 109
  },
  {
    "q": "Lazy Luke's apparent ______ to successfully handle daily office stress makes him completely unsuitable for the demanding management job.",
    "options": [
      "aspirations",
      "shortage",
      "inability",
      "painkiller"
    ],
    "answer": 2,
    "vocabIndex": 110
  },
  {
    "q": "The ambitious entrepreneur decided to bravely ______ all of his personal savings to successfully start his innovative new technology company.",
    "options": [
      "starve",
      "enforce",
      "desires",
      "risk"
    ],
    "answer": 3,
    "vocabIndex": 111
  },
  {
    "q": "Driving a small car through the snowy mountains would be far too ______, so we smartly chose a safer alternative route.",
    "options": [
      "genetically-modified-genetically-modified",
      "OTT",
      "risky",
      "ambitious"
    ],
    "answer": 2,
    "vocabIndex": 112
  },
  {
    "q": "The brave firefighter courageously put his own valuable life at absolute ______ to safely save the terrified family from the burning building.",
    "options": [
      "pain",
      "caretaker",
      "demand",
      "risk"
    ],
    "answer": 3,
    "vocabIndex": 113
  },
  {
    "q": "If you constantly refuse to eat healthy green vegetables, you ______ developing serious long-term medical illnesses.",
    "options": [
      "indulged himself in",
      "run the risk of",
      "take a risk",
      "do household chores"
    ],
    "answer": 1,
    "vocabIndex": 114
  },
  {
    "q": "Sometimes in order to achieve truly massive success in the competitive business world, you simply must ______.",
    "options": [
      "take a risk",
      "be connected to",
      "suffer from diabetes",
      "water intake"
    ],
    "answer": 0,
    "vocabIndex": 115
  },
  {
    "q": "Unwavering patience is widely considered to be one of gentle Jeffrey's absolute finest and most admirable personal ______.",
    "options": [
      "demand",
      "intake",
      "characteristics",
      "desire"
    ],
    "answer": 2,
    "vocabIndex": 116
  },
  {
    "q": "The beautiful rare bird's most ______ is its bright blue feathers that beautifully shine brightly in the warm sunlight.",
    "options": [
      "main character",
      "physical demand",
      "food intake",
      "unique characteristic"
    ],
    "answer": 3,
    "vocabIndex": 117
  },
  {
    "q": "The unique and incredibly colorful spices used in traditional Indian cooking definitely have a highly ______ and unforgettable flavor.",
    "options": [
      "characteristic",
      "homosexual",
      "indulgent",
      "genetically-modified-genetically-modified"
    ],
    "answer": 0,
    "vocabIndex": 118
  },
  {
    "q": "Experienced historians typically ______ the long and peaceful era by its surprising lack of violent international military conflicts.",
    "options": [
      "complicate",
      "characterize",
      "stream",
      "enforce"
    ],
    "answer": 1,
    "vocabIndex": 119
  },
  {
    "q": "The fascinating fictional ______ in the incredibly popular fantasy novel embarks on a highly dangerous and truly magical adventure.",
    "options": [
      "caretaker",
      "genetics",
      "diabetes",
      "character"
    ],
    "answer": 3,
    "vocabIndex": 120
  },
  {
    "q": "Marcus has a very strong and reliable ______; he always stays calm and helps others during a crisis.",
    "options": [
      "character",
      "ache",
      "persuasion",
      "appetite"
    ],
    "answer": 0,
    "vocabIndex": 121
  },
  {
    "q": "Passwords for this secure online system must be at least eight ______ long and include a number.",
    "options": [
      "indulgence",
      "shortage",
      "characters",
      "aspirations"
    ],
    "answer": 2,
    "vocabIndex": 122
  },
  {
    "q": "Learning to write each ______ correctly requires a lot of patience and attention to stroke order.",
    "options": [
      "chest pain",
      "Chinese character",
      "physical demand",
      "in severe pain"
    ],
    "answer": 1,
    "vocabIndex": 123
  },
  {
    "q": "Kindness, honesty, and punctuality are positive ______ that employers value highly.",
    "options": [
      "character traitses",
      "rare syndrome",
      "food intake",
      "physical stature"
    ],
    "answer": 0,
    "vocabIndex": 124
  },
  {
    "q": "Chloe felt deeply moved by the struggles and growth of the ______ in the fantasy novel.",
    "options": [
      "chest pain",
      "main character",
      "vigorous exercise",
      "gender discrimination"
    ],
    "answer": 1,
    "vocabIndex": 125
  },
  {
    "q": "Because of the sudden and highly unexpected winter storm, the local ______ for warm electric heaters increased drastically overnight.",
    "options": [
      "characters",
      "sex",
      "intake",
      "demand"
    ],
    "answer": 3,
    "vocabIndex": 126
  },
  {
    "q": "The deeply upset and extremely angry customer aggressively ______ to immediately speak with the busy store manager about her completely broken product.",
    "options": [
      "persuade",
      "forced",
      "demanded",
      "characterize"
    ],
    "answer": 2,
    "vocabIndex": 127
  },
  {
    "q": "Working actively as a professional hospital surgeon is incredibly ______ with extremely long daily hours and highly intense pressure.",
    "options": [
      "diabetic",
      "demanding",
      "painful",
      "persuasive"
    ],
    "answer": 1,
    "vocabIndex": 128
  },
  {
    "q": "The rigorous university medical program is ______ and strictly requires all ambitious students to study intensely every single night.",
    "options": [
      "law enforcement",
      "indulged himself in",
      "character traitses",
      "highly demanding"
    ],
    "answer": 3,
    "vocabIndex": 129
  },
  {
    "q": "The incredibly intense ______ of running a full marathon naturally requires absolute dedication and months of exhausting daily training.",
    "options": [
      "physical demand",
      "highly complicated",
      "character traitses",
      "daily intake"
    ],
    "answer": 0,
    "vocabIndex": 130
  },
  {
    "q": "Software engineers with prior knowledge of artificial intelligence are ______ in today's tech industry.",
    "options": [
      "stay connected",
      "be connected to",
      "in high demand",
      "hunger for"
    ],
    "answer": 2,
    "vocabIndex": 131
  },
  {
    "q": "Fresh vegetables and clean drinking water were ______ right after the severe typhoon hit the city.",
    "options": [
      "food intake",
      "in short supply",
      "hunger for",
      "be compelled to"
    ],
    "answer": 1,
    "vocabIndex": 132
  },
  {
    "q": "The international manufacturing factory is facing a serious ______ of raw materials due to shipping delays.",
    "options": [
      "inability",
      "aspirations",
      "shortage",
      "stream"
    ],
    "answer": 2,
    "vocabIndex": 133
  },
  {
    "q": "Modern consumers prefer to watch their favorite television shows ______ rather than waiting for a weekly broadcast.",
    "options": [
      "on demand",
      "medical complication",
      "vigorous exercise",
      "in effect"
    ],
    "answer": 0,
    "vocabIndex": 134
  },
  {
    "q": "Netflix and Disney+ are famous ______ platforms that allow users to access thousands of movies on demand.",
    "options": [
      "digestive",
      "disabled",
      "ambitious",
      "OTT"
    ],
    "answer": 3,
    "vocabIndex": 135
  },
  {
    "q": "The popular English teacher held a ______ last night to interact with students and answer grammar questions.",
    "options": [
      "highly demanding",
      "live stream",
      "in high demand",
      "chest pain"
    ],
    "answer": 1,
    "vocabIndex": 136
  },
  {
    "q": "With the rise of music ______ services, very few people buy traditional physical CDs anymore.",
    "options": [
      "force",
      "character",
      "ambition",
      "streaming"
    ],
    "answer": 3,
    "vocabIndex": 137
  },
  {
    "q": "Users can easily ______ their favorite movies on demand to their mobile tablets using a stable 5G network.",
    "options": [
      "stream",
      "convince",
      "compelled",
      "persisted"
    ],
    "answer": 0,
    "vocabIndex": 138
  },
  {
    "q": "Marcus and Chloe sat on a rock next to a cold mountain ______ to enjoy their packed lunch during the hike.",
    "options": [
      "persuasion",
      "care",
      "stream",
      "genetics"
    ],
    "answer": 2,
    "vocabIndex": 139
  },
  {
    "q": "One of my most incredibly boring daily ______ is to carefully take the smelly garbage outside every single night.",
    "options": [
      "force",
      "sex",
      "syndrome",
      "chores"
    ],
    "answer": 3,
    "vocabIndex": 140
  },
  {
    "q": "A lot of busy modern people absolutely hate having to ______ because they find them incredibly tedious and boring.",
    "options": [
      "do household chores",
      "limit your intake",
      "be connected to",
      "gender discrimination"
    ],
    "answer": 0,
    "vocabIndex": 141
  },
  {
    "q": "Because both of my parents work extremely long hours, we strictly divide and ______ equally on the relaxing weekends.",
    "options": [
      "learning disability",
      "do housework",
      "in high demand",
      "be connected to"
    ],
    "answer": 1,
    "vocabIndex": 142
  },
  {
    "q": "Feeding the energetic and deeply hungry dogs is an incredibly important ______ that I must strictly complete every single morning.",
    "options": [
      "be connected to",
      "reduce the pain",
      "daily chore",
      "Down syndrome"
    ],
    "answer": 2,
    "vocabIndex": 143
  },
  {
    "q": "Exhausted Mary is seriously considering officially hiring an experienced and deeply compassionate ______ to help care for her fragile elderly mother.",
    "options": [
      "caretaker",
      "sex",
      "aspirations",
      "force"
    ],
    "answer": 0,
    "vocabIndex": 144
  },
  {
    "q": "The tiny and incredibly fragile prematurely born baby required absolute specialized medical ______ in the busy hospital for several stressful weeks.",
    "options": [
      "chores",
      "care",
      "connection",
      "headache"
    ],
    "answer": 1,
    "vocabIndex": 145
  },
  {
    "q": "It requires an incredibly massive amount of profound patience and gentle kindness to properly ______ a severely sick person.",
    "options": [
      "rotten fruit",
      "be inherent in",
      "in severe pain",
      "care for"
    ],
    "answer": 3,
    "vocabIndex": 146
  },
  {
    "q": "When my parents peacefully travel abroad, my reliable older sister will securely ______ our highly energetic golden retriever.",
    "options": [
      "indulged himself in",
      "food intake",
      "take care of",
      "take effect"
    ],
    "answer": 2,
    "vocabIndex": 147
  },
  {
    "q": "You absolutely must be incredibly ______ when you cautiously drive your expensive new car on these dangerously icy mountain roads.",
    "options": [
      "LGBTQ",
      "careful",
      "compelling",
      "continuous"
    ],
    "answer": 1,
    "vocabIndex": 148
  },
  {
    "q": "Professional football players must absolutely be incredibly ______ athletes capable of maintaining a highly intense level of physical performance.",
    "options": [
      "genetic",
      "demanding",
      "characteristic",
      "vigorous"
    ],
    "answer": 3,
    "vocabIndex": 149
  },
  {
    "q": "The highly enthusiastic crowd cheered ______ as the victorious home team finally scored the exciting winning goal in the final seconds.",
    "options": [
      "vigorously",
      "inevitably",
      "literally",
      "genetically"
    ],
    "answer": 0,
    "vocabIndex": 150
  },
  {
    "q": "The highly ______ young puppy happily ran rapidly around the massive green park for two entire completely exhausting hours today.",
    "options": [
      "heterosexual",
      "forceful",
      "energetic",
      "connected"
    ],
    "answer": 2,
    "vocabIndex": 151
  },
  {
    "q": "Because Vicki is currently recovering from being terribly ill, she's definitely not completely ready for extremely ______ just yet.",
    "options": [
      "bad for digestion",
      "be compelled to",
      "short stature",
      "vigorous exercise"
    ],
    "answer": 3,
    "vocabIndex": 152
  },
  {
    "q": "The previously exhausted older man surprisingly completed the difficult and lengthy hiking trail with the incredible ______ of a much younger person.",
    "options": [
      "stream",
      "contact",
      "vigor",
      "indulgence"
    ],
    "answer": 2,
    "vocabIndex": 153
  },
  {
    "q": "Hardworking Alice will occasionally gracefully ______ in a highly expensive glass of imported red wine with her delicious weekend dinner.",
    "options": [
      "indulge",
      "disable",
      "rot",
      "characterize"
    ],
    "answer": 0,
    "vocabIndex": 154
  },
  {
    "q": "After successfully finishing the highly stressful project, tired Jim ______ entertainment and joyfully took another massive slice of sweet chocolate cake.",
    "options": [
      "vigorous exercise",
      "indulged himself in",
      "physical demand",
      "on demand"
    ],
    "answer": 1,
    "vocabIndex": 155
  },
  {
    "q": "The deeply loving but overly ______ grandparents constantly bought their excited grandchildren absolutely everything they ever loudly demanded at the busy store.",
    "options": [
      "careful",
      "risky",
      "continuous",
      "indulgent"
    ],
    "answer": 3,
    "vocabIndex": 156
  },
  {
    "q": "Eating an entire massive box of rich chocolate cookies is undeniably a highly unhealthy ______ that you should definitely strictly avoid.",
    "options": [
      "indulgence",
      "headache",
      "characteristics",
      "risk"
    ],
    "answer": 0,
    "vocabIndex": 157
  },
  {
    "q": "The beautifully carved decorative fruit on the table is absolutely not ______, so please carefully ensure that you don't actually eat it.",
    "options": [
      "continuous",
      "genetic",
      "edible",
      "unavoidable"
    ],
    "answer": 2,
    "vocabIndex": 158
  },
  {
    "q": "Because the careless chef entirely burned the expensive steak, the completely ruined meal was officially considered highly ______.",
    "options": [
      "homosexual",
      "inedible",
      "demanding",
      "painful"
    ],
    "answer": 1,
    "vocabIndex": 159
  },
  {
    "q": "If you carelessly leave fresh meat outside the cold refrigerator in the hot summer, it will inevitably ______ quickly.",
    "options": [
      "rot",
      "persisted",
      "aspire",
      "complicate"
    ],
    "answer": 0,
    "vocabIndex": 160
  },
  {
    "q": "You absolutely should promptly get rid of the terribly ______ fruit sitting on the table because it will quickly attract annoying bugs.",
    "options": [
      "digestive",
      "genetically-modified-genetically-modified",
      "ambitious",
      "rotten"
    ],
    "answer": 3,
    "vocabIndex": 161
  },
  {
    "q": "When the homeowner finally returned after a long vacation, he discovered that the vegetables in the fridge were ______.",
    "options": [
      "physical stature",
      "literally translated",
      "completely rotten",
      "rotten fruit"
    ],
    "answer": 2,
    "vocabIndex": 162
  },
  {
    "q": "The aggressive swarm of incredibly annoying flies was immediately attracted to the terribly ______ that was carelessly left in the sunny kitchen.",
    "options": [
      "genetic defect",
      "rotten fruit",
      "talked their father into taking",
      "food intake"
    ],
    "answer": 1,
    "vocabIndex": 163
  },
  {
    "q": "The strict medical doctor strongly suggested that you should definitely try to significantly limit your daily ______ of highly processed sugar.",
    "options": [
      "characters",
      "persuasion",
      "appetite",
      "intake"
    ],
    "answer": 3,
    "vocabIndex": 164
  },
  {
    "q": "Consuming a massive amount of fresh clean water is absolutely essential for strictly maintaining your highly recommended ______ of hydration.",
    "options": [
      "be inherent in",
      "be compelled to",
      "daily intake",
      "hunger for"
    ],
    "answer": 2,
    "vocabIndex": 165
  },
  {
    "q": "To lose excess weight, you must ______ of fried foods and sugary drinks.",
    "options": [
      "limit your intake",
      "painful memory",
      "hunger for",
      "long for"
    ],
    "answer": 0,
    "vocabIndex": 166
  },
  {
    "q": "The dedicated professional athlete meticulously tracks his entire ______ every single day to perfectly ensure he remains in top physical shape.",
    "options": [
      "metabolic syndrome",
      "food intake",
      "be compelled to",
      "completely inevitable"
    ],
    "answer": 1,
    "vocabIndex": 167
  },
  {
    "q": "During the incredibly hot and humid summer months, drastically increasing your pure ______ is undeniably crucial to avoiding highly dangerous dehydration.",
    "options": [
      "be actively involved in",
      "highly demanding",
      "water intake",
      "do household chores"
    ],
    "answer": 2,
    "vocabIndex": 168
  },
  {
    "q": "If the two aggressive countries absolutely don't repair their deeply damaged relationship soon, a highly destructive military war will be completely ______.",
    "options": [
      "digestive",
      "inevitable",
      "continuous",
      "careful"
    ],
    "answer": 1,
    "vocabIndex": 169
  },
  {
    "q": "Because the lazy student consistently refused to study properly, he ______ failed the highly difficult and incredibly important final university exam.",
    "options": [
      "persistently",
      "vigorously",
      "genetically",
      "inevitably"
    ],
    "answer": 3,
    "vocabIndex": 170
  },
  {
    "q": "The massive traffic jam on the busy highway was entirely ______ after the surprisingly severe and highly destructive sudden car accident occurred.",
    "options": [
      "unavoidable",
      "painful",
      "inevitable",
      "rotten"
    ],
    "answer": 0,
    "vocabIndex": 171
  },
  {
    "q": "Due to the company's terrible financial decisions and greedy management, its total public bankruptcy was eventually deemed ______ by all expert analysts.",
    "options": [
      "genetic defect",
      "take care of",
      "rare syndrome",
      "completely inevitable"
    ],
    "answer": 3,
    "vocabIndex": 172
  },
  {
    "q": "Despite tragically learning from his doctor that he has severe ______, stubborn Shawn still constantly eats a massive amount of terribly unhealthy sweets.",
    "options": [
      "syndrome",
      "diabetes",
      "character",
      "vigor"
    ],
    "answer": 1,
    "vocabIndex": 173
  },
  {
    "q": "The specialized medical clinic provides customized and healthy daily meal plans for their fragile ______ patients.",
    "options": [
      "diabetic",
      "inevitable",
      "linked",
      "hungry"
    ],
    "answer": 0,
    "vocabIndex": 174
  },
  {
    "q": "Because of his incredibly poor diet and severe lack of daily exercise, the tired older man unfortunately developed ______.",
    "options": [
      "physical demand",
      "painful memory",
      "type 2 diabetes",
      "highly demanding"
    ],
    "answer": 2,
    "vocabIndex": 175
  },
  {
    "q": "Millions of totally unsuspecting people globally currently ______ but tragically do not actively know they have the serious illness yet.",
    "options": [
      "eat a horse",
      "suffer from diabetes",
      "literal meaning",
      "bad for digestion"
    ],
    "answer": 1,
    "vocabIndex": 176
  },
  {
    "q": "When excited Brian finally called and happily asked surprised Linda out on a romantic date, she ______ danced around her messy bedroom.",
    "options": [
      "persistently",
      "inevitably",
      "literally",
      "genetically"
    ],
    "answer": 2,
    "vocabIndex": 177
  },
  {
    "q": "The highly frustrated foreign student was deeply confused because he incorrectly translated the complex English idiom using its entirely ______ meaning.",
    "options": [
      "compelling",
      "demanding",
      "OTT",
      "literal"
    ],
    "answer": 3,
    "vocabIndex": 178
  },
  {
    "q": "If you simply look at the ______ of the strange phrase, it makes absolutely no sense in this deeply complex context.",
    "options": [
      "literal meaning",
      "talked their father into taking",
      "chest pain",
      "stay connected"
    ],
    "answer": 0,
    "vocabIndex": 179
  },
  {
    "q": "The beautiful and deeply emotional traditional poem, when ______ into modern English, unfortunately loses a massive amount of its profound cultural charm.",
    "options": [
      "starved to death",
      "in effect",
      "physical stature",
      "literally translated"
    ],
    "answer": 3,
    "vocabIndex": 180
  }
];

const LOOKUP = {
  "hungry": {
    "pos": "adj.",
    "en_def": "feeling or displaying the need for food.",
    "cn_def": "飢餓的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling or displaying the need for food.",
        "cn_def": "飢餓的"
      }
    ]
  },
  "hunger": {
    "pos": "n.",
    "en_def": "a feeling of discomfort or weakness caused by lack of food.",
    "cn_def": "飢餓",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling of discomfort or weakness caused by lack of food.",
        "cn_def": "飢餓"
      }
    ]
  },
  "hunger for": {
    "pos": "phr.",
    "en_def": "to have a strong desire for something.",
    "cn_def": "渴望",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to have a strong desire for something.",
        "cn_def": "渴望"
      }
    ]
  },
  "long for": {
    "pos": "v. phr.",
    "en_def": "To want something very much, especially when it is difficult to get or will take a long time.",
    "cn_def": "渴望得到…、盼望…",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To want something very much, especially when it is difficult to get or will take a long time.",
        "cn_def": "渴望得到…、盼望…"
      }
    ]
  },
  "long to v": {
    "pos": "v. phr.",
    "en_def": "To have a strong desire to perform a specific action or do something.",
    "cn_def": "渴望做…、極想做…",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To have a strong desire to perform a specific action or do something.",
        "cn_def": "渴望做…、極想做…"
      }
    ]
  },
  "longs to": {
    "pos": "v. phr.",
    "en_def": "To have a strong desire to perform a specific action or do something.",
    "cn_def": "渴望做…、極想做…",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To have a strong desire to perform a specific action or do something.",
        "cn_def": "渴望做…、極想做…"
      }
    ]
  },
  "desire": {
    "pos": "v.",
    "en_def": "To want something strongly or wish for something to happen.",
    "cn_def": "渴望、想要、要求",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To want something strongly or wish for something to happen.",
        "cn_def": "渴望、想要、要求"
      },
      {
        "pos": "n. [C, U]",
        "en_def": "A strong feeling of wanting to have something or wishing for something to happen.",
        "cn_def": "渴望、慾望、心願"
      }
    ]
  },
  "desires": {
    "pos": "v.",
    "en_def": "To want something strongly or wish for something to happen.",
    "cn_def": "渴望、想要、要求",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To want something strongly or wish for something to happen.",
        "cn_def": "渴望、想要、要求"
      }
    ]
  },
  "aspire": {
    "pos": "v.",
    "en_def": "To have a strong hope or ambition to achieve something great or become successful.",
    "cn_def": "渴望（成就）、追求、立志",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To have a strong hope or ambition to achieve something great or become successful.",
        "cn_def": "渴望（成就）、追求、立志"
      }
    ]
  },
  "aspirations": {
    "pos": "n. [C, usually plural]",
    "en_def": "A strong hope, desire, or ambition to achieve something high or great.",
    "cn_def": "抱負、渴望、志向",
    "combined": [
      {
        "pos": "n. [C, usually plural]",
        "en_def": "A strong hope, desire, or ambition to achieve something high or great.",
        "cn_def": "抱負、渴望、志向"
      }
    ]
  },
  "aspiration": {
    "pos": "n. [C, usually plural]",
    "en_def": "A strong hope, desire, or ambition to achieve something high or great.",
    "cn_def": "抱負、渴望、志向",
    "combined": [
      {
        "pos": "n. [C, usually plural]",
        "en_def": "A strong hope, desire, or ambition to achieve something high or great.",
        "cn_def": "抱負、渴望、志向"
      }
    ]
  },
  "ambition": {
    "pos": "n. [C, U]",
    "en_def": "A strong desire to achieve success, power, wealth, or a specific high goal.",
    "cn_def": "雄心、抱負、野心",
    "combined": [
      {
        "pos": "n. [C, U]",
        "en_def": "A strong desire to achieve success, power, wealth, or a specific high goal.",
        "cn_def": "雄心、抱負、野心"
      }
    ]
  },
  "ambitious": {
    "pos": "adj.",
    "en_def": "Having or showing a strong desire and determination to succeed, or requiring a lot of effort.",
    "cn_def": "有雄心壯志的、野心勃勃的、艱巨的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Having or showing a strong desire and determination to succeed, or requiring a lot of effort.",
        "cn_def": "有雄心壯志的、野心勃勃的、艱巨的"
      }
    ]
  },
  "starve": {
    "pos": "v.",
    "en_def": "to suffer severely or die from hunger.",
    "cn_def": "挨餓",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to suffer severely or die from hunger.",
        "cn_def": "挨餓"
      }
    ]
  },
  "starvation": {
    "pos": "n.",
    "en_def": "suffering or death caused by hunger.",
    "cn_def": "飢餓；餓死",
    "combined": [
      {
        "pos": "n.",
        "en_def": "suffering or death caused by hunger.",
        "cn_def": "飢餓；餓死"
      }
    ]
  },
  "starving": {
    "pos": "adj.",
    "en_def": "Dying of hunger, or feeling extremely hungry.",
    "cn_def": "非常飢餓的、快餓死的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Dying of hunger, or feeling extremely hungry.",
        "cn_def": "非常飢餓的、快餓死的"
      }
    ]
  },
  "starve to death": {
    "pos": "v. phr.",
    "en_def": "To die because there is not enough food to eat.",
    "cn_def": "餓死",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To die because there is not enough food to eat.",
        "cn_def": "餓死"
      }
    ]
  },
  "starved to death": {
    "pos": "v. phr.",
    "en_def": "To die because there is not enough food to eat.",
    "cn_def": "餓死",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To die because there is not enough food to eat.",
        "cn_def": "餓死"
      }
    ]
  },
  "eat a horse": {
    "pos": "idiom",
    "en_def": "An expression used to say that you are extremely hungry.",
    "cn_def": "吃得下一頭牛（形容非常餓）",
    "combined": [
      {
        "pos": "idiom",
        "en_def": "An expression used to say that you are extremely hungry.",
        "cn_def": "吃得下一頭牛（形容非常餓）"
      }
    ]
  },
  "appetite": {
    "pos": "n. [C, U]",
    "en_def": "A natural desire to eat food, or a strong desire for something.",
    "cn_def": "食慾、胃口",
    "combined": [
      {
        "pos": "n. [C, U]",
        "en_def": "A natural desire to eat food, or a strong desire for something.",
        "cn_def": "食慾、胃口"
      }
    ]
  },
  "ache": {
    "pos": "n.",
    "en_def": "a continuous or prolonged dull pain in a part of one's body.",
    "cn_def": "疼痛",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a continuous or prolonged dull pain in a part of one's body.",
        "cn_def": "疼痛"
      },
      {
        "pos": "v.",
        "en_def": "to suffer from a continuous dull pain.",
        "cn_def": "疼痛"
      }
    ]
  },
  "ached": {
    "pos": "v.",
    "en_def": "to suffer from a continuous dull pain.",
    "cn_def": "疼痛",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to suffer from a continuous dull pain.",
        "cn_def": "疼痛"
      }
    ]
  },
  "headache": {
    "pos": "n.",
    "en_def": "a continuous pain in the head.",
    "cn_def": "頭痛",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a continuous pain in the head.",
        "cn_def": "頭痛"
      }
    ]
  },
  "pain": {
    "pos": "n.",
    "en_def": "physical suffering or discomfort caused by illness or injury.",
    "cn_def": "痛楚",
    "combined": [
      {
        "pos": "n.",
        "en_def": "physical suffering or discomfort caused by illness or injury.",
        "cn_def": "痛楚"
      }
    ]
  },
  "chest pain": {
    "pos": "phr.",
    "en_def": "discomfort or pain that you feel anywhere along the front of your body between your neck and upper abdomen.",
    "cn_def": "胸痛",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "discomfort or pain that you feel anywhere along the front of your body between your neck and upper abdomen.",
        "cn_def": "胸痛"
      }
    ]
  },
  "in severe pain": {
    "pos": "phr.",
    "en_def": "Experiencing physical suffering or discomfort caused by illness or injury.",
    "cn_def": "處於痛苦中、身體在痛",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Experiencing physical suffering or discomfort caused by illness or injury.",
        "cn_def": "處於痛苦中、身體在痛"
      }
    ]
  },
  "be in pain": {
    "pos": "phr.",
    "en_def": "Experiencing physical suffering or discomfort caused by illness or injury.",
    "cn_def": "處於痛苦中、身體在痛",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Experiencing physical suffering or discomfort caused by illness or injury.",
        "cn_def": "處於痛苦中、身體在痛"
      }
    ]
  },
  "painful": {
    "pos": "adj.",
    "en_def": "Causing physical pain, or causing distress, sadness, or emotional suffering.",
    "cn_def": "令人疼痛的、痛苦的、難堪的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Causing physical pain, or causing distress, sadness, or emotional suffering.",
        "cn_def": "令人疼痛的、痛苦的、難堪的"
      }
    ]
  },
  "painful memory": {
    "pos": "phr.",
    "en_def": "A sad or distressing recollection from the past that still causes emotional suffering.",
    "cn_def": "痛苦的回憶、不堪回首的往事",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A sad or distressing recollection from the past that still causes emotional suffering.",
        "cn_def": "痛苦的回憶、不堪回首的往事"
      }
    ]
  },
  "painkiller": {
    "pos": "n. [C]",
    "en_def": "A drug or medicine used to reduce or relieve physical pain.",
    "cn_def": "止痛藥",
    "combined": [
      {
        "pos": "n. [C]",
        "en_def": "A drug or medicine used to reduce or relieve physical pain.",
        "cn_def": "止痛藥"
      }
    ]
  },
  "relieve the pain": {
    "pos": "v. phr.",
    "en_def": "To make a physical pain or emotional suffering less severe or disappear completely.",
    "cn_def": "緩解疼痛、減輕痛苦",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To make a physical pain or emotional suffering less severe or disappear completely.",
        "cn_def": "緩解疼痛、減輕痛苦"
      }
    ]
  },
  "ease the pain": {
    "pos": "v. phr.",
    "en_def": "To gradually lessen the intensity of physical discomfort or emotional distress.",
    "cn_def": "減輕疼痛、舒緩痛苦",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To gradually lessen the intensity of physical discomfort or emotional distress.",
        "cn_def": "減輕疼痛、舒緩痛苦"
      }
    ]
  },
  "reduce the pain": {
    "pos": "v. phr.",
    "en_def": "To lower the level or amount of physical pain you are experiencing.",
    "cn_def": "降低疼痛、減少痛苦",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To lower the level or amount of physical pain you are experiencing.",
        "cn_def": "降低疼痛、減少痛苦"
      }
    ]
  },
  "connect": {
    "pos": "v.",
    "en_def": "to bring together or into contact so that a real or notional link is established.",
    "cn_def": "連接",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to bring together or into contact so that a real or notional link is established.",
        "cn_def": "連接"
      }
    ]
  },
  "connected": {
    "pos": "adj.",
    "en_def": "joined or linked together.",
    "cn_def": "相關的；連接的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "joined or linked together.",
        "cn_def": "相關的；連接的"
      }
    ]
  },
  "connection": {
    "pos": "n.",
    "en_def": "a relationship in which a person, thing, or idea is linked or associated with something else.",
    "cn_def": "關聯",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a relationship in which a person, thing, or idea is linked or associated with something else.",
        "cn_def": "關聯"
      }
    ]
  },
  "stay connected": {
    "pos": "phr.",
    "en_def": "to maintain a relationship or communication with someone.",
    "cn_def": "保持聯繫",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to maintain a relationship or communication with someone.",
        "cn_def": "保持聯繫"
      }
    ]
  },
  "linked": {
    "pos": "adj.",
    "en_def": "connected or joined.",
    "cn_def": "連結的；有關聯的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "connected or joined.",
        "cn_def": "連結的；有關聯的"
      }
    ]
  },
  "be connected to": {
    "pos": "v. phr.",
    "en_def": "To be joined to something else, or to have a close logical or practical relationship with it.",
    "cn_def": "與…連結/相連、與…有關聯",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To be joined to something else, or to have a close logical or practical relationship with it.",
        "cn_def": "與…連結/相連、與…有關聯"
      }
    ]
  },
  "be connected with/to": {
    "pos": "v. phr.",
    "en_def": "To be joined to something else, or to have a close logical or practical relationship with it.",
    "cn_def": "與…連結/相連、與…有關聯",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To be joined to something else, or to have a close logical or practical relationship with it.",
        "cn_def": "與…連結/相連、與…有關聯"
      }
    ]
  },
  "be linked with/to": {
    "pos": "v. phr.",
    "en_def": "To be physically connected, or to have a strong connection or causal relationship between two things.",
    "cn_def": "與…有聯繫/關聯",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To be physically connected, or to have a strong connection or causal relationship between two things.",
        "cn_def": "與…有聯繫/關聯"
      }
    ]
  },
  "is closely linked to": {
    "pos": "v. phr.",
    "en_def": "To be physically connected, or to have a strong connection or causal relationship between two things.",
    "cn_def": "與…有聯繫/關聯",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To be physically connected, or to have a strong connection or causal relationship between two things.",
        "cn_def": "與…有聯繫/關聯"
      }
    ]
  },
  "be associated with": {
    "pos": "v. phr.",
    "en_def": "To be connected in the mind, or to happen together with something else frequently.",
    "cn_def": "與…聯想在一起、與…有關聯",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To be connected in the mind, or to happen together with something else frequently.",
        "cn_def": "與…聯想在一起、與…有關聯"
      }
    ]
  },
  "is often associated with": {
    "pos": "v. phr.",
    "en_def": "To be connected in the mind, or to happen together with something else frequently.",
    "cn_def": "與…聯想在一起、與…有關聯",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To be connected in the mind, or to happen together with something else frequently.",
        "cn_def": "與…聯想在一起、與…有關聯"
      }
    ]
  },
  "be related to": {
    "pos": "v. phr.",
    "en_def": "To have a connection to something else, or to belong to the same family.",
    "cn_def": "與…有關、與…有親戚關係",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To have a connection to something else, or to belong to the same family.",
        "cn_def": "與…有關、與…有親戚關係"
      }
    ]
  },
  "is directly related to": {
    "pos": "v. phr.",
    "en_def": "To have a connection to something else, or to belong to the same family.",
    "cn_def": "與…有關、與…有親戚關係",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To have a connection to something else, or to belong to the same family.",
        "cn_def": "與…有關、與…有親戚關係"
      }
    ]
  },
  "be involved in": {
    "pos": "v. phr.",
    "en_def": "To take part in an activity, event, or situation, or to be mixed up in something negative.",
    "cn_def": "參與…、涉入…、捲入…",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To take part in an activity, event, or situation, or to be mixed up in something negative.",
        "cn_def": "參與…、涉入…、捲入…"
      }
    ]
  },
  "be actively involved in": {
    "pos": "v. phr.",
    "en_def": "To take part in an activity, event, or situation, or to be mixed up in something negative.",
    "cn_def": "參與…、涉入…、捲入…",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To take part in an activity, event, or situation, or to be mixed up in something negative.",
        "cn_def": "參與…、涉入…、捲入…"
      }
    ]
  },
  "has something to do with": {
    "pos": "phr.",
    "en_def": "To have a connection, relation, or concern with a particular matter or person.",
    "cn_def": "與…有些關係、與…有關",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To have a connection, relation, or concern with a particular matter or person.",
        "cn_def": "與…有些關係、與…有關"
      }
    ]
  },
  "have something to do with": {
    "pos": "phr.",
    "en_def": "To have a connection, relation, or concern with a particular matter or person.",
    "cn_def": "與…有些關係、與…有關",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To have a connection, relation, or concern with a particular matter or person.",
        "cn_def": "與…有些關係、與…有關"
      }
    ]
  },
  "contact": {
    "pos": "v.",
    "en_def": "To communicate with someone by calling, texting, emailing, or meeting them.",
    "cn_def": "聯絡、聯繫",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To communicate with someone by calling, texting, emailing, or meeting them.",
        "cn_def": "聯絡、聯繫"
      },
      {
        "pos": "n. [U, C]",
        "en_def": "Communication or meeting between people, or a helpful person you know in an organization.",
        "cn_def": "聯絡、聯繫、熟人/聯絡人"
      }
    ]
  },
  "keep in contact with": {
    "pos": "phr.",
    "en_def": "To maintain communication with someone regularly over time.",
    "cn_def": "與…保持聯絡",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To maintain communication with someone regularly over time.",
        "cn_def": "與…保持聯絡"
      }
    ]
  },
  "contact lens": {
    "pos": "n. [C, usually plural]",
    "en_def": "A thin plastic lens placed directly on the surface of the eye to improve vision.",
    "cn_def": "隱形眼鏡",
    "combined": [
      {
        "pos": "n. [C, usually plural]",
        "en_def": "A thin plastic lens placed directly on the surface of the eye to improve vision.",
        "cn_def": "隱形眼鏡"
      }
    ]
  },
  "contact lenses": {
    "pos": "n. [C, usually plural]",
    "en_def": "A thin plastic lens placed directly on the surface of the eye to improve vision.",
    "cn_def": "隱形眼鏡",
    "combined": [
      {
        "pos": "n. [C, usually plural]",
        "en_def": "A thin plastic lens placed directly on the surface of the eye to improve vision.",
        "cn_def": "隱形眼鏡"
      }
    ]
  },
  "compelled": {
    "pos": "v.",
    "en_def": "to force or oblige someone to do something.",
    "cn_def": "迫使",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to force or oblige someone to do something.",
        "cn_def": "迫使"
      }
    ]
  },
  "compel": {
    "pos": "v.",
    "en_def": "to force or oblige someone to do something.",
    "cn_def": "迫使",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to force or oblige someone to do something.",
        "cn_def": "迫使"
      }
    ]
  },
  "compelling": {
    "pos": "adj.",
    "en_def": "evoking interest, attention, or admiration in a powerfully irresistible way.",
    "cn_def": "令人信服的；引人入勝的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "evoking interest, attention, or admiration in a powerfully irresistible way.",
        "cn_def": "令人信服的；引人入勝的"
      }
    ]
  },
  "felt compelled to": {
    "pos": "phr.",
    "en_def": "to strongly think that you must do something.",
    "cn_def": "感到必須",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to strongly think that you must do something.",
        "cn_def": "感到必須"
      }
    ]
  },
  "feel compelled to": {
    "pos": "phr.",
    "en_def": "to strongly think that you must do something.",
    "cn_def": "感到必須",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to strongly think that you must do something.",
        "cn_def": "感到必須"
      }
    ]
  },
  "be compelled to": {
    "pos": "phr.",
    "en_def": "to be forced to do something.",
    "cn_def": "被迫",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be forced to do something.",
        "cn_def": "被迫"
      }
    ]
  },
  "convince": {
    "pos": "v.",
    "en_def": "To make someone completely believe that something is true or real.",
    "cn_def": "使確信、使相信、說服",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To make someone completely believe that something is true or real.",
        "cn_def": "使確信、使相信、說服"
      }
    ]
  },
  "convincing": {
    "pos": "adj.",
    "en_def": "Making you believe that something is true or right because it sounds reasonable or genuine.",
    "cn_def": "有說服力的、令人信服的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Making you believe that something is true or right because it sounds reasonable or genuine.",
        "cn_def": "有說服力的、令人信服的"
      }
    ]
  },
  "persuade": {
    "pos": "v.",
    "en_def": "To move someone to do something by giving them good reasons, arguments, or requests.",
    "cn_def": "說服、勸服（去做某事）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To move someone to do something by giving them good reasons, arguments, or requests.",
        "cn_def": "說服、勸服（去做某事）"
      }
    ]
  },
  "persuasive": {
    "pos": "adj.",
    "en_def": "Able to make someone do or believe something by giving them good reasons.",
    "cn_def": "有說服力的、口才好的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Able to make someone do or believe something by giving them good reasons.",
        "cn_def": "有說服力的、口才好的"
      }
    ]
  },
  "persuasion": {
    "pos": "n. [U]",
    "en_def": "The act of convincing someone to do or believe something, or the ability to do this.",
    "cn_def": "說服、說服力",
    "combined": [
      {
        "pos": "n. [U]",
        "en_def": "The act of convincing someone to do or believe something, or the ability to do this.",
        "cn_def": "說服、說服力"
      }
    ]
  },
  "talked their father into taking": {
    "pos": "phr. v.",
    "en_def": "To persuade someone to perform a specific action or do something.",
    "cn_def": "說服某人去做…、勸服某人做…",
    "combined": [
      {
        "pos": "phr. v.",
        "en_def": "To persuade someone to perform a specific action or do something.",
        "cn_def": "說服某人去做…、勸服某人做…"
      }
    ]
  },
  "talk ... into v-ing": {
    "pos": "phr. v.",
    "en_def": "To persuade someone to perform a specific action or do something.",
    "cn_def": "說服某人去做…、勸服某人做…",
    "combined": [
      {
        "pos": "phr. v.",
        "en_def": "To persuade someone to perform a specific action or do something.",
        "cn_def": "說服某人去做…、勸服某人做…"
      }
    ]
  },
  "force": {
    "pos": "v.",
    "en_def": "To make someone do something that they do not want to do, by using power, laws, or threats.",
    "cn_def": "強迫、迫使",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To make someone do something that they do not want to do, by using power, laws, or threats.",
        "cn_def": "強迫、迫使"
      },
      {
        "pos": "n. [U, C]",
        "en_def": "Physical strength, power, or energy; or an organized group of people like the police or military.",
        "cn_def": "力量、威力、武力；部隊/警力"
      }
    ]
  },
  "forced": {
    "pos": "v.",
    "en_def": "To make someone do something that they do not want to do, by using power, laws, or threats.",
    "cn_def": "強迫、迫使",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To make someone do something that they do not want to do, by using power, laws, or threats.",
        "cn_def": "強迫、迫使"
      }
    ]
  },
  "join forces": {
    "pos": "phr.",
    "en_def": "To act together or work as a team with someone else to achieve a common goal.",
    "cn_def": "聯合、攜手合作",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To act together or work as a team with someone else to achieve a common goal.",
        "cn_def": "聯合、攜手合作"
      }
    ]
  },
  "forceful": {
    "pos": "adj.",
    "en_def": "Expressing opinions strongly and clearly in a way that convinces or influences other people.",
    "cn_def": "強而有力的、有說服力的、有權勢的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Expressing opinions strongly and clearly in a way that convinces or influences other people.",
        "cn_def": "強而有力的、有說服力的、有權勢的"
      }
    ]
  },
  "enforce": {
    "pos": "v.",
    "en_def": "to compel observance of or compliance with a law, rule, or obligation.",
    "cn_def": "執行",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to compel observance of or compliance with a law, rule, or obligation.",
        "cn_def": "執行"
      },
      {
        "pos": "v.",
        "en_def": "To make people obey a rule, law, or decision.",
        "cn_def": "執行（法律）、實施（規定）"
      }
    ]
  },
  "enforcement": {
    "pos": "n. [U]",
    "en_def": "The act of making sure that a law, rule, or order is obeyed and followed by people.",
    "cn_def": "執行、實施、強制執行",
    "combined": [
      {
        "pos": "n. [U]",
        "en_def": "The act of making sure that a law, rule, or order is obeyed and followed by people.",
        "cn_def": "執行、實施、強制執行"
      }
    ]
  },
  "law enforcement": {
    "pos": "n. [U]",
    "en_def": "The activity of making people obey the law, or the public agencies (like the police) that do this.",
    "cn_def": "執法、執法機關/人員",
    "combined": [
      {
        "pos": "n. [U]",
        "en_def": "The activity of making people obey the law, or the public agencies (like the police) that do this.",
        "cn_def": "執法、執法機關/人員"
      }
    ]
  },
  "be in effect": {
    "pos": "phr.",
    "en_def": "(Of a law, rule, or contract) currently operating, valid, or being used at the present time.",
    "cn_def": "生效中、實行中",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "(Of a law, rule, or contract) currently operating, valid, or being used at the present time.",
        "cn_def": "生效中、實行中"
      }
    ]
  },
  "in effect": {
    "pos": "phr.",
    "en_def": "(Of a law, rule, or contract) currently operating, valid, or being used at the present time.",
    "cn_def": "生效中、實行中",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "(Of a law, rule, or contract) currently operating, valid, or being used at the present time.",
        "cn_def": "生效中、實行中"
      }
    ]
  },
  "take effect": {
    "pos": "v. phr.",
    "en_def": "To start to produce the intended result, or to officially become active or operational.",
    "cn_def": "開始生效、起作用",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To start to produce the intended result, or to officially become active or operational.",
        "cn_def": "開始生效、起作用"
      }
    ]
  },
  "reinforce": {
    "pos": "v.",
    "en_def": "To make something stronger, such as a physical structure, an idea, or a specific feeling.",
    "cn_def": "強化、加強、鞏固",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To make something stronger, such as a physical structure, an idea, or a specific feeling.",
        "cn_def": "強化、加強、鞏固"
      }
    ]
  },
  "digest": {
    "pos": "v.",
    "en_def": "to break down food in the alimentary canal into substances that can be absorbed and used by the body.",
    "cn_def": "消化",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to break down food in the alimentary canal into substances that can be absorbed and used by the body.",
        "cn_def": "消化"
      }
    ]
  },
  "digestion": {
    "pos": "n.",
    "en_def": "the process of breaking down food by mechanical and enzymatic action in the alimentary canal into substances that can be used by the body.",
    "cn_def": "消化",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the process of breaking down food by mechanical and enzymatic action in the alimentary canal into substances that can be used by the body.",
        "cn_def": "消化"
      }
    ]
  },
  "digestive": {
    "pos": "adj.",
    "en_def": "relating to the process of digesting food.",
    "cn_def": "消化的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to the process of digesting food.",
        "cn_def": "消化的"
      }
    ]
  },
  "bad for digestion": {
    "pos": "phr.",
    "en_def": "harmful to the stomach's ability to process food.",
    "cn_def": "對消化不良",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "harmful to the stomach's ability to process food.",
        "cn_def": "對消化不良"
      }
    ]
  },
  "digestive system": {
    "pos": "phr.",
    "en_def": "the organs and glands in the body that are responsible for digestion.",
    "cn_def": "消化系統",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the organs and glands in the body that are responsible for digestion.",
        "cn_def": "消化系統"
      }
    ]
  },
  "persist": {
    "pos": "v.",
    "en_def": "to continue firmly or obstinately in an opinion or a course of action in spite of difficulty, opposition, or failure.",
    "cn_def": "堅持；持續",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to continue firmly or obstinately in an opinion or a course of action in spite of difficulty, opposition, or failure.",
        "cn_def": "堅持；持續"
      }
    ]
  },
  "persisted": {
    "pos": "v.",
    "en_def": "to continue firmly or obstinately in an opinion or a course of action in spite of difficulty, opposition, or failure.",
    "cn_def": "堅持；持續",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to continue firmly or obstinately in an opinion or a course of action in spite of difficulty, opposition, or failure.",
        "cn_def": "堅持；持續"
      }
    ]
  },
  "persistent": {
    "pos": "adj.",
    "en_def": "continuing firmly or obstinately in a course of action in spite of difficulty or opposition.",
    "cn_def": "持續的；堅持的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "continuing firmly or obstinately in a course of action in spite of difficulty or opposition.",
        "cn_def": "持續的；堅持的"
      }
    ]
  },
  "persistence": {
    "pos": "n.",
    "en_def": "firm or obstinate continuance in a course of action in spite of difficulty or opposition.",
    "cn_def": "堅持不懈",
    "combined": [
      {
        "pos": "n.",
        "en_def": "firm or obstinate continuance in a course of action in spite of difficulty or opposition.",
        "cn_def": "堅持不懈"
      }
    ]
  },
  "continuous": {
    "pos": "adj.",
    "en_def": "forming an unbroken whole; without interruption.",
    "cn_def": "連續的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "forming an unbroken whole; without interruption.",
        "cn_def": "連續的"
      }
    ]
  },
  "persistently": {
    "pos": "adv.",
    "en_def": "in a persistent manner; continuously.",
    "cn_def": "堅持不懈地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a persistent manner; continuously.",
        "cn_def": "堅持不懈地"
      }
    ]
  },
  "syndrome": {
    "pos": "n.",
    "en_def": "a group of symptoms which consistently occur together, or a condition characterized by a set of associated symptoms.",
    "cn_def": "症候群",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a group of symptoms which consistently occur together, or a condition characterized by a set of associated symptoms.",
        "cn_def": "症候群"
      }
    ]
  },
  "down syndrome": {
    "pos": "phr.",
    "en_def": "a congenital disorder arising from a chromosome defect, causing intellectual impairment and physical abnormalities.",
    "cn_def": "唐氏症",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a congenital disorder arising from a chromosome defect, causing intellectual impairment and physical abnormalities.",
        "cn_def": "唐氏症"
      }
    ]
  },
  "metabolic syndrome": {
    "pos": "phr.",
    "en_def": "a cluster of biochemical and physiological abnormalities associated with the development of cardiovascular disease and type 2 diabetes.",
    "cn_def": "代謝症候群",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a cluster of biochemical and physiological abnormalities associated with the development of cardiovascular disease and type 2 diabetes.",
        "cn_def": "代謝症候群"
      }
    ]
  },
  "rare syndrome": {
    "pos": "phr.",
    "en_def": "a medical condition characterized by a unique set of symptoms that affects a small percentage of the population.",
    "cn_def": "罕見症候群",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a medical condition characterized by a unique set of symptoms that affects a small percentage of the population.",
        "cn_def": "罕見症候群"
      }
    ]
  },
  "gene": {
    "pos": "n.",
    "en_def": "a unit of heredity which is transferred from a parent to offspring.",
    "cn_def": "基因",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a unit of heredity which is transferred from a parent to offspring.",
        "cn_def": "基因"
      }
    ]
  },
  "genetic": {
    "pos": "adj.",
    "en_def": "of or relating to genes or heredity.",
    "cn_def": "基因的；遺傳的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "of or relating to genes or heredity.",
        "cn_def": "基因的；遺傳的"
      }
    ]
  },
  "genetics": {
    "pos": "n.",
    "en_def": "the study of heredity and the variation of inherited characteristics.",
    "cn_def": "遺傳學",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the study of heredity and the variation of inherited characteristics.",
        "cn_def": "遺傳學"
      }
    ]
  },
  "genetically": {
    "pos": "adv.",
    "en_def": "in a way that relates to genes or genetics.",
    "cn_def": "基因地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that relates to genes or genetics.",
        "cn_def": "基因地"
      }
    ]
  },
  "genetic defect": {
    "pos": "phr.",
    "en_def": "an abnormal characteristic or flaw inherited through genes.",
    "cn_def": "基因缺陷",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an abnormal characteristic or flaw inherited through genes.",
        "cn_def": "基因缺陷"
      },
      {
        "pos": "n. [C]",
        "en_def": "A fault or flaw in a person's or animal's genes that may cause a disease or physical problem.",
        "cn_def": "基因缺陷、遺傳性缺陷"
      }
    ]
  },
  "genetic disorder": {
    "pos": "phr.",
    "en_def": "an illness caused by one or more abnormalities in the genome.",
    "cn_def": "遺傳性疾病",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an illness caused by one or more abnormalities in the genome.",
        "cn_def": "遺傳性疾病"
      }
    ]
  },
  "genetically-modified-genetically-modified": {
    "pos": "adj.",
    "en_def": "(Of food or organisms) having had its genetic structure changed artificially in a laboratory.",
    "cn_def": "基基因改造的、轉基因的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "(Of food or organisms) having had its genetic structure changed artificially in a laboratory.",
        "cn_def": "基基因改造的、轉基因的"
      }
    ]
  },
  "genetically-modified": {
    "pos": "adj.",
    "en_def": "(Of food or organisms) having had its genetic structure changed artificially in a laboratory.",
    "cn_def": "基基因改造的、轉基因的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "(Of food or organisms) having had its genetic structure changed artificially in a laboratory.",
        "cn_def": "基基因改造的、轉基因的"
      }
    ]
  },
  "inherent": {
    "pos": "adj.",
    "en_def": "Existing as a natural, permanent, or basic part of something that cannot be removed.",
    "cn_def": "固有的、內在的、與生俱來的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Existing as a natural, permanent, or basic part of something that cannot be removed.",
        "cn_def": "固有的、內在的、與生俱來的"
      }
    ]
  },
  "be inherent in": {
    "pos": "v. phr.",
    "en_def": "To be a natural or inseparable part of a specific situation, system, or activity.",
    "cn_def": "存在於…之中、是…固有的",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To be a natural or inseparable part of a specific situation, system, or activity.",
        "cn_def": "存在於…之中、是…固有的"
      }
    ]
  },
  "gender": {
    "pos": "n.",
    "en_def": "either of the two sexes (male and female), especially when considered with reference to social and cultural differences.",
    "cn_def": "性別",
    "combined": [
      {
        "pos": "n.",
        "en_def": "either of the two sexes (male and female), especially when considered with reference to social and cultural differences.",
        "cn_def": "性別"
      }
    ]
  },
  "gender equality": {
    "pos": "phr.",
    "en_def": "the state in which access to rights or opportunities is unaffected by gender.",
    "cn_def": "性別平等",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the state in which access to rights or opportunities is unaffected by gender.",
        "cn_def": "性別平等"
      }
    ]
  },
  "gender discrimination": {
    "pos": "phr.",
    "en_def": "prejudice or discrimination based on a person's sex or gender.",
    "cn_def": "性別歧視",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "prejudice or discrimination based on a person's sex or gender.",
        "cn_def": "性別歧視"
      }
    ]
  },
  "transgender": {
    "pos": "adj.",
    "en_def": "denoting or relating to a person whose sense of personal identity and gender does not correspond with their birth sex.",
    "cn_def": "跨性別的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "denoting or relating to a person whose sense of personal identity and gender does not correspond with their birth sex.",
        "cn_def": "跨性別的"
      }
    ]
  },
  "lgbtq": {
    "pos": "n. [U] / adj.",
    "en_def": "An acronym standing for Lesbian, Gay, Bisexual, Transgender, and Queer, used to describe a community of diverse sexual orientations and gender identities.",
    "cn_def": "跨性別族群、多元性別（者）",
    "combined": [
      {
        "pos": "n. [U] / adj.",
        "en_def": "An acronym standing for Lesbian, Gay, Bisexual, Transgender, and Queer, used to describe a community of diverse sexual orientations and gender identities.",
        "cn_def": "跨性別族群、多元性別（者）"
      }
    ]
  },
  "sex": {
    "pos": "n.",
    "en_def": "either of the two main categories (male and female) into which humans and many other living things are divided on the basis of their reproductive functions.",
    "cn_def": "性別",
    "combined": [
      {
        "pos": "n.",
        "en_def": "either of the two main categories (male and female) into which humans and many other living things are divided on the basis of their reproductive functions.",
        "cn_def": "性別"
      }
    ]
  },
  "homosexual": {
    "pos": "adj. / n. [C]",
    "en_def": "Attracted to people of the same sex or gender; a person who is sexually attracted to the same sex.",
    "cn_def": "同性戀的；同性戀者",
    "combined": [
      {
        "pos": "adj. / n. [C]",
        "en_def": "Attracted to people of the same sex or gender; a person who is sexually attracted to the same sex.",
        "cn_def": "同性戀的；同性戀者"
      }
    ]
  },
  "heterosexual": {
    "pos": "adj. / n. [C]",
    "en_def": "Attracted to people of the opposite sex or gender; a straight person.",
    "cn_def": "異性戀的；異性戀者",
    "combined": [
      {
        "pos": "adj. / n. [C]",
        "en_def": "Attracted to people of the opposite sex or gender; a straight person.",
        "cn_def": "異性戀的；異性戀者"
      }
    ]
  },
  "complicate": {
    "pos": "v.",
    "en_def": "to make something more difficult or confusing by causing it to be more complex.",
    "cn_def": "使複雜",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make something more difficult or confusing by causing it to be more complex.",
        "cn_def": "使複雜"
      }
    ]
  },
  "complicated": {
    "pos": "adj.",
    "en_def": "consisting of many interconnecting parts or elements; intricate.",
    "cn_def": "複雜的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "consisting of many interconnecting parts or elements; intricate.",
        "cn_def": "複雜的"
      }
    ]
  },
  "complication": {
    "pos": "n.",
    "en_def": "a circumstance that complicates something; a secondary disease or condition aggravating an already existing one.",
    "cn_def": "併發症；複雜化",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a circumstance that complicates something; a secondary disease or condition aggravating an already existing one.",
        "cn_def": "併發症；複雜化"
      }
    ]
  },
  "medical complication": {
    "pos": "phr.",
    "en_def": "an unfavorable evolution or consequence of a disease, a health condition, or a therapy.",
    "cn_def": "醫療併發症",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an unfavorable evolution or consequence of a disease, a health condition, or a therapy.",
        "cn_def": "醫療併發症"
      }
    ]
  },
  "highly complicated": {
    "pos": "phr.",
    "en_def": "extremely intricate or difficult to understand or analyze.",
    "cn_def": "高度複雜的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "extremely intricate or difficult to understand or analyze.",
        "cn_def": "高度複雜的"
      }
    ]
  },
  "stature": {
    "pos": "n.",
    "en_def": "a person's natural height; importance or reputation gained by ability or achievement.",
    "cn_def": "身材；聲望",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person's natural height; importance or reputation gained by ability or achievement.",
        "cn_def": "身材；聲望"
      }
    ]
  },
  "short stature": {
    "pos": "phr.",
    "en_def": "a condition in which a person is significantly shorter than the average height.",
    "cn_def": "身材矮小",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a condition in which a person is significantly shorter than the average height.",
        "cn_def": "身材矮小"
      }
    ]
  },
  "tall stature": {
    "pos": "phr.",
    "en_def": "the state of being significantly taller than average.",
    "cn_def": "身材高大",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the state of being significantly taller than average.",
        "cn_def": "身材高大"
      }
    ]
  },
  "physical stature": {
    "pos": "phr.",
    "en_def": "the size or natural height of someone's body.",
    "cn_def": "體格",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the size or natural height of someone's body.",
        "cn_def": "體格"
      }
    ]
  },
  "disability": {
    "pos": "n.",
    "en_def": "a physical or mental condition that limits a person's movements, senses, or activities.",
    "cn_def": "殘疾",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a physical or mental condition that limits a person's movements, senses, or activities.",
        "cn_def": "殘疾"
      }
    ]
  },
  "disable": {
    "pos": "v.",
    "en_def": "to put out of action or limit the function of something.",
    "cn_def": "使失效；使殘廢",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to put out of action or limit the function of something.",
        "cn_def": "使失效；使殘廢"
      }
    ]
  },
  "disabled": {
    "pos": "adj.",
    "en_def": "having a physical or mental condition that limits movements, senses, or activities.",
    "cn_def": "殘疾的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a physical or mental condition that limits movements, senses, or activities.",
        "cn_def": "殘疾的"
      }
    ]
  },
  "learning disability": {
    "pos": "phr.",
    "en_def": "a condition giving rise to difficulties in acquiring knowledge and skills to the level expected of those of the same age.",
    "cn_def": "學習障礙",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a condition giving rise to difficulties in acquiring knowledge and skills to the level expected of those of the same age.",
        "cn_def": "學習障礙"
      }
    ]
  },
  "inability": {
    "pos": "n.",
    "en_def": "the state of being unable to do something.",
    "cn_def": "無能",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being unable to do something.",
        "cn_def": "無能"
      }
    ]
  },
  "risk": {
    "pos": "v.",
    "en_def": "to expose someone or something valued to danger, harm, or loss.",
    "cn_def": "冒險",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to expose someone or something valued to danger, harm, or loss.",
        "cn_def": "冒險"
      },
      {
        "pos": "n.",
        "en_def": "a situation involving exposure to danger.",
        "cn_def": "風險"
      }
    ]
  },
  "risky": {
    "pos": "adj.",
    "en_def": "full of the possibility of danger, failure, or loss.",
    "cn_def": "冒險的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "full of the possibility of danger, failure, or loss.",
        "cn_def": "冒險的"
      }
    ]
  },
  "run the risk of": {
    "pos": "phr.",
    "en_def": "to do something that might cause something bad to happen.",
    "cn_def": "冒...的風險",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to do something that might cause something bad to happen.",
        "cn_def": "冒...的風險"
      }
    ]
  },
  "take a risk": {
    "pos": "phr.",
    "en_def": "to proceed in an action without certainty of the outcome, exposing oneself to potential failure.",
    "cn_def": "冒險",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to proceed in an action without certainty of the outcome, exposing oneself to potential failure.",
        "cn_def": "冒險"
      }
    ]
  },
  "characteristic": {
    "pos": "n.",
    "en_def": "a feature or quality belonging typically to a person, place, or thing and serving to identify it.",
    "cn_def": "特徵",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feature or quality belonging typically to a person, place, or thing and serving to identify it.",
        "cn_def": "特徵"
      },
      {
        "pos": "adj.",
        "en_def": "typical of a particular person, place, or thing.",
        "cn_def": "獨特的"
      }
    ]
  },
  "characteristics": {
    "pos": "n.",
    "en_def": "a feature or quality belonging typically to a person, place, or thing and serving to identify it.",
    "cn_def": "特徵",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feature or quality belonging typically to a person, place, or thing and serving to identify it.",
        "cn_def": "特徵"
      }
    ]
  },
  "unique characteristic": {
    "pos": "phr.",
    "en_def": "an attribute or trait that sets something apart from all others.",
    "cn_def": "獨特特徵",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an attribute or trait that sets something apart from all others.",
        "cn_def": "獨特特徵"
      }
    ]
  },
  "characterize": {
    "pos": "v.",
    "en_def": "to describe the distinctive nature or features of.",
    "cn_def": "描繪...的特性",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to describe the distinctive nature or features of.",
        "cn_def": "描繪...的特性"
      }
    ]
  },
  "character": {
    "pos": "n.",
    "en_def": "a person in a novel, play, or movie.",
    "cn_def": "角色",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person in a novel, play, or movie.",
        "cn_def": "角色"
      },
      {
        "pos": "n. [U, C]",
        "en_def": "The combination of mental and moral qualities that make a person unique; personality.",
        "cn_def": "個性、人格、品質"
      },
      {
        "pos": "n. [C]",
        "en_def": "A letter, number, or symbol used in writing or printing.",
        "cn_def": "字元、文字、符號"
      }
    ]
  },
  "characters": {
    "pos": "n. [C]",
    "en_def": "A letter, number, or symbol used in writing or printing.",
    "cn_def": "字元、文字、符號",
    "combined": [
      {
        "pos": "n. [C]",
        "en_def": "A letter, number, or symbol used in writing or printing.",
        "cn_def": "字元、文字、符號"
      }
    ]
  },
  "chinese character": {
    "pos": "n. [C]",
    "en_def": "A logographic sign or symbol used in the Chinese writing system.",
    "cn_def": "中文字、漢字",
    "combined": [
      {
        "pos": "n. [C]",
        "en_def": "A logographic sign or symbol used in the Chinese writing system.",
        "cn_def": "中文字、漢字"
      }
    ]
  },
  "character traitses": {
    "pos": "n. phr.",
    "en_def": "Individual aspects of a person's behavior and mind that define their personality.",
    "cn_def": "人格特質、個性特徵",
    "combined": [
      {
        "pos": "n. phr.",
        "en_def": "Individual aspects of a person's behavior and mind that define their personality.",
        "cn_def": "人格特質、個性特徵"
      }
    ]
  },
  "character traits": {
    "pos": "n. phr.",
    "en_def": "Individual aspects of a person's behavior and mind that define their personality.",
    "cn_def": "人格特質、個性特徵",
    "combined": [
      {
        "pos": "n. phr.",
        "en_def": "Individual aspects of a person's behavior and mind that define their personality.",
        "cn_def": "人格特質、個性特徵"
      }
    ]
  },
  "main character": {
    "pos": "n. [C]",
    "en_def": "The most important person in a story, novel, movie, or play.",
    "cn_def": "主角、主要角色",
    "combined": [
      {
        "pos": "n. [C]",
        "en_def": "The most important person in a story, novel, movie, or play.",
        "cn_def": "主角、主要角色"
      }
    ]
  },
  "demand": {
    "pos": "n.",
    "en_def": "an insistent and peremptory request, made as if by right.",
    "cn_def": "需求",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an insistent and peremptory request, made as if by right.",
        "cn_def": "需求"
      },
      {
        "pos": "v.",
        "en_def": "to ask authoritatively or brusquely.",
        "cn_def": "要求"
      }
    ]
  },
  "demanded": {
    "pos": "v.",
    "en_def": "to ask authoritatively or brusquely.",
    "cn_def": "要求",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to ask authoritatively or brusquely.",
        "cn_def": "要求"
      }
    ]
  },
  "demanding": {
    "pos": "adj.",
    "en_def": "requiring much skill or effort.",
    "cn_def": "要求高的；費力的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "requiring much skill or effort.",
        "cn_def": "要求高的；費力的"
      }
    ]
  },
  "highly demanding": {
    "pos": "phr.",
    "en_def": "requiring a tremendous amount of effort, skill, or energy.",
    "cn_def": "要求極高的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "requiring a tremendous amount of effort, skill, or energy.",
        "cn_def": "要求極高的"
      }
    ]
  },
  "physical demand": {
    "pos": "phr.",
    "en_def": "the physical exertion required to perform a specific task.",
    "cn_def": "體力要求",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the physical exertion required to perform a specific task.",
        "cn_def": "體力要求"
      }
    ]
  },
  "in high demand": {
    "pos": "phr.",
    "en_def": "Wanted or needed by many people; extremely popular.",
    "cn_def": "需求量很大的、供不應求的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Wanted or needed by many people; extremely popular.",
        "cn_def": "需求量很大的、供不應求的"
      }
    ]
  },
  "in short supply": {
    "pos": "phr.",
    "en_def": "Available only in small quantities; hard to find or obtain.",
    "cn_def": "供應不足的、短缺的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Available only in small quantities; hard to find or obtain.",
        "cn_def": "供應不足的、短缺的"
      }
    ]
  },
  "shortage": {
    "pos": "n. [C, U]",
    "en_def": "A situation where there is not enough of something that is needed.",
    "cn_def": "短缺、不足",
    "combined": [
      {
        "pos": "n. [C, U]",
        "en_def": "A situation where there is not enough of something that is needed.",
        "cn_def": "短缺、不足"
      }
    ]
  },
  "on demand": {
    "pos": "phr.",
    "en_def": "Available whenever someone asks for it or wants to use it.",
    "cn_def": "隨選的、一經要求即提供的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Available whenever someone asks for it or wants to use it.",
        "cn_def": "隨選的、一經要求即提供的"
      }
    ]
  },
  "ott": {
    "pos": "n. [U] / adj.",
    "en_def": "Over-The-Top; media services offered directly to viewers via the internet, bypassing traditional cable or satellite.",
    "cn_def": "串流媒體服務、串流的（意指串流影音平台）",
    "combined": [
      {
        "pos": "n. [U] / adj.",
        "en_def": "Over-The-Top; media services offered directly to viewers via the internet, bypassing traditional cable or satellite.",
        "cn_def": "串流媒體服務、串流的（意指串流影音平台）"
      }
    ]
  },
  "live stream": {
    "pos": "n. [C] / v.",
    "en_def": "A live broadcast of an event over the internet, or to broadcast video over the internet in real time.",
    "cn_def": "直播、線上直播",
    "combined": [
      {
        "pos": "n. [C] / v.",
        "en_def": "A live broadcast of an event over the internet, or to broadcast video over the internet in real time.",
        "cn_def": "直播、線上直播"
      }
    ]
  },
  "streaming": {
    "pos": "n. [U]",
    "en_def": "The activity of listening to music or watching video directly from the internet without downloading it first.",
    "cn_def": "串流、影音串流",
    "combined": [
      {
        "pos": "n. [U]",
        "en_def": "The activity of listening to music or watching video directly from the internet without downloading it first.",
        "cn_def": "串流、影音串流"
      }
    ]
  },
  "stream": {
    "pos": "v.",
    "en_def": "To transmit or receive video and audio data over the internet as a continuous flow.",
    "cn_def": "串流傳輸、線上播放",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To transmit or receive video and audio data over the internet as a continuous flow.",
        "cn_def": "串流傳輸、線上播放"
      },
      {
        "pos": "n. [C]",
        "en_def": "A continuous flow of things or people; or a small, narrow river.",
        "cn_def": "連續不斷（的流動）；小河、溪流"
      }
    ]
  },
  "chores": {
    "pos": "n.",
    "en_def": "a routine task, especially a household one.",
    "cn_def": "雜務",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a routine task, especially a household one.",
        "cn_def": "雜務"
      }
    ]
  },
  "chore": {
    "pos": "n.",
    "en_def": "a routine task, especially a household one.",
    "cn_def": "雜務",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a routine task, especially a household one.",
        "cn_def": "雜務"
      }
    ]
  },
  "do household chores": {
    "pos": "phr.",
    "en_def": "to perform the routine tasks associated with maintaining a home.",
    "cn_def": "做家事",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to perform the routine tasks associated with maintaining a home.",
        "cn_def": "做家事"
      }
    ]
  },
  "do housework": {
    "pos": "phr.",
    "en_def": "to complete regular tasks required to keep a house clean and functional.",
    "cn_def": "做家事",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to complete regular tasks required to keep a house clean and functional.",
        "cn_def": "做家事"
      }
    ]
  },
  "daily chore": {
    "pos": "phr.",
    "en_def": "a specific routine task that must be done every day.",
    "cn_def": "日常雜務",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a specific routine task that must be done every day.",
        "cn_def": "日常雜務"
      }
    ]
  },
  "caretaker": {
    "pos": "n.",
    "en_def": "a person employed to look after people or animals.",
    "cn_def": "照顧者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person employed to look after people or animals.",
        "cn_def": "照顧者"
      }
    ]
  },
  "care": {
    "pos": "n.",
    "en_def": "the provision of what is necessary for the health, welfare, maintenance, and protection of someone or something.",
    "cn_def": "照顧",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the provision of what is necessary for the health, welfare, maintenance, and protection of someone or something.",
        "cn_def": "照顧"
      }
    ]
  },
  "care for": {
    "pos": "phr.",
    "en_def": "to look after and provide for the needs of.",
    "cn_def": "照顧",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to look after and provide for the needs of.",
        "cn_def": "照顧"
      }
    ]
  },
  "take care of": {
    "pos": "phr.",
    "en_def": "to keep someone or something safe and provided for.",
    "cn_def": "照顧",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to keep someone or something safe and provided for.",
        "cn_def": "照顧"
      }
    ]
  },
  "careful": {
    "pos": "adj.",
    "en_def": "making sure of avoiding potential danger, mishap, or harm.",
    "cn_def": "小心的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "making sure of avoiding potential danger, mishap, or harm.",
        "cn_def": "小心的"
      }
    ]
  },
  "vigorous": {
    "pos": "adj.",
    "en_def": "strong, healthy, and full of energy.",
    "cn_def": "精力充沛的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "strong, healthy, and full of energy.",
        "cn_def": "精力充沛的"
      }
    ]
  },
  "vigorously": {
    "pos": "adv.",
    "en_def": "in a way that involves physical strength, effort, or energy.",
    "cn_def": "精神旺盛地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that involves physical strength, effort, or energy.",
        "cn_def": "精神旺盛地"
      }
    ]
  },
  "energetic": {
    "pos": "adj.",
    "en_def": "showing or involving great activity or vitality.",
    "cn_def": "精力充沛的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing or involving great activity or vitality.",
        "cn_def": "精力充沛的"
      }
    ]
  },
  "vigorous exercise": {
    "pos": "phr.",
    "en_def": "physical activity that is hard and involves a lot of effort.",
    "cn_def": "劇烈運動",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "physical activity that is hard and involves a lot of effort.",
        "cn_def": "劇烈運動"
      }
    ]
  },
  "vigor": {
    "pos": "n.",
    "en_def": "physical strength and good health.",
    "cn_def": "活力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "physical strength and good health.",
        "cn_def": "活力"
      }
    ]
  },
  "indulge": {
    "pos": "v.",
    "en_def": "to allow oneself to enjoy the pleasure of.",
    "cn_def": "沉溺於；享受",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to allow oneself to enjoy the pleasure of.",
        "cn_def": "沉溺於；享受"
      }
    ]
  },
  "indulged himself in": {
    "pos": "phr.",
    "en_def": "to allow oneself a special pleasure.",
    "cn_def": "放縱自己",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to allow oneself a special pleasure.",
        "cn_def": "放縱自己"
      }
    ]
  },
  "indulge oneself in": {
    "pos": "phr.",
    "en_def": "to allow oneself a special pleasure.",
    "cn_def": "放縱自己",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to allow oneself a special pleasure.",
        "cn_def": "放縱自己"
      }
    ]
  },
  "indulgent": {
    "pos": "adj.",
    "en_def": "having or indicating a tendency to be overly generous to or lenient with someone.",
    "cn_def": "溺愛的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having or indicating a tendency to be overly generous to or lenient with someone.",
        "cn_def": "溺愛的"
      }
    ]
  },
  "indulgence": {
    "pos": "n.",
    "en_def": "the action or fact of indulging.",
    "cn_def": "放縱",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action or fact of indulging.",
        "cn_def": "放縱"
      }
    ]
  },
  "edible": {
    "pos": "adj.",
    "en_def": "fit to be eaten.",
    "cn_def": "可食用的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "fit to be eaten.",
        "cn_def": "可食用的"
      }
    ]
  },
  "inedible": {
    "pos": "adj.",
    "en_def": "not fit for eating.",
    "cn_def": "不可食用的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not fit for eating.",
        "cn_def": "不可食用的"
      }
    ]
  },
  "rot": {
    "pos": "v.",
    "en_def": "to decay or cause to decay by the action of bacteria and fungi.",
    "cn_def": "腐爛",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to decay or cause to decay by the action of bacteria and fungi.",
        "cn_def": "腐爛"
      }
    ]
  },
  "rotten": {
    "pos": "adj.",
    "en_def": "suffering from decay.",
    "cn_def": "腐爛的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "suffering from decay.",
        "cn_def": "腐爛的"
      }
    ]
  },
  "completely rotten": {
    "pos": "phr.",
    "en_def": "entirely decayed and unusable.",
    "cn_def": "完全腐爛的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "entirely decayed and unusable.",
        "cn_def": "完全腐爛的"
      }
    ]
  },
  "rotten fruit": {
    "pos": "phr.",
    "en_def": "fruit that has decayed.",
    "cn_def": "腐爛的水果",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "fruit that has decayed.",
        "cn_def": "腐爛的水果"
      }
    ]
  },
  "intake": {
    "pos": "n.",
    "en_def": "an amount of food, air, or another substance taken into the body.",
    "cn_def": "攝取量",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an amount of food, air, or another substance taken into the body.",
        "cn_def": "攝取量"
      }
    ]
  },
  "daily intake": {
    "pos": "phr.",
    "en_def": "the total amount of something consumed in one day.",
    "cn_def": "每日攝取量",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the total amount of something consumed in one day.",
        "cn_def": "每日攝取量"
      }
    ]
  },
  "limit one's intake": {
    "pos": "phr.",
    "en_def": "to restrict the amount of food, drink, or substance one consumes.",
    "cn_def": "限制某人的攝取量",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to restrict the amount of food, drink, or substance one consumes.",
        "cn_def": "限制某人的攝取量"
      }
    ]
  },
  "limit your intake": {
    "pos": "phr.",
    "en_def": "to restrict the amount of food, drink, or substance one consumes.",
    "cn_def": "限制某人的攝取量",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to restrict the amount of food, drink, or substance one consumes.",
        "cn_def": "限制某人的攝取量"
      }
    ]
  },
  "food intake": {
    "pos": "phr.",
    "en_def": "the quantity of food a person or animal consumes.",
    "cn_def": "食物攝取量",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the quantity of food a person or animal consumes.",
        "cn_def": "食物攝取量"
      }
    ]
  },
  "water intake": {
    "pos": "phr.",
    "en_def": "the amount of water a person drinks.",
    "cn_def": "水分攝取量",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the amount of water a person drinks.",
        "cn_def": "水分攝取量"
      }
    ]
  },
  "inevitable": {
    "pos": "adj.",
    "en_def": "certain to happen; unavoidable.",
    "cn_def": "無可避免的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "certain to happen; unavoidable.",
        "cn_def": "無可避免的"
      }
    ]
  },
  "inevitably": {
    "pos": "adv.",
    "en_def": "as is certain to happen; unavoidably.",
    "cn_def": "無可避免地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "as is certain to happen; unavoidably.",
        "cn_def": "無可避免地"
      }
    ]
  },
  "unavoidable": {
    "pos": "adj.",
    "en_def": "not able to be avoided, prevented, or ignored; inevitable.",
    "cn_def": "無法避免的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not able to be avoided, prevented, or ignored; inevitable.",
        "cn_def": "無法避免的"
      }
    ]
  },
  "completely inevitable": {
    "pos": "phr.",
    "en_def": "absolutely certain to happen.",
    "cn_def": "完全無可避免的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "absolutely certain to happen.",
        "cn_def": "完全無可避免的"
      }
    ]
  },
  "diabetes": {
    "pos": "n.",
    "en_def": "a disease in which the body's ability to produce or respond to the hormone insulin is impaired.",
    "cn_def": "糖尿病",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a disease in which the body's ability to produce or respond to the hormone insulin is impaired.",
        "cn_def": "糖尿病"
      }
    ]
  },
  "diabetic": {
    "pos": "adj.",
    "en_def": "relating to or suffering from diabetes.",
    "cn_def": "糖尿病的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to or suffering from diabetes.",
        "cn_def": "糖尿病的"
      }
    ]
  },
  "type 2 diabetes": {
    "pos": "phr.",
    "en_def": "a chronic condition that affects the way the body processes blood sugar.",
    "cn_def": "第二型糖尿病",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a chronic condition that affects the way the body processes blood sugar.",
        "cn_def": "第二型糖尿病"
      }
    ]
  },
  "suffer from diabetes": {
    "pos": "phr.",
    "en_def": "to experience the symptoms and health problems associated with diabetes.",
    "cn_def": "罹患糖尿病",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to experience the symptoms and health problems associated with diabetes.",
        "cn_def": "罹患糖尿病"
      }
    ]
  },
  "literally": {
    "pos": "adv.",
    "en_def": "in a literal manner or sense; exactly.",
    "cn_def": "簡直；字面上",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a literal manner or sense; exactly.",
        "cn_def": "簡直；字面上"
      }
    ]
  },
  "literal": {
    "pos": "adj.",
    "en_def": "taking words in their usual or most basic sense without metaphor or allegory.",
    "cn_def": "字面上的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "taking words in their usual or most basic sense without metaphor or allegory.",
        "cn_def": "字面上的"
      }
    ]
  },
  "literal meaning": {
    "pos": "phr.",
    "en_def": "the exact or strict meaning of a word or phrase.",
    "cn_def": "字面意義",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the exact or strict meaning of a word or phrase.",
        "cn_def": "字面意義"
      }
    ]
  },
  "literally translated": {
    "pos": "phr.",
    "en_def": "translated word for word.",
    "cn_def": "直譯",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "translated word for word.",
        "cn_def": "直譯"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
