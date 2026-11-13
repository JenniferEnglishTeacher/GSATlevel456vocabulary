// Unit 18 Quiz Data: blur – make a difference
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Basic U18 - blur – make a difference",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "blur",
    "pos": "n.",
    "cn_def": "模糊不清的事物",
    "en_def": "a thing that cannot be seen or heard clearly.",
    "sentence": "The speeding sports car was just a fast red {{BLANK}} as it rapidly drove past the amazed crowd.",
    "cn": "那輛超速的跑車在快速駛過驚訝的人群時，只是一團快速紅色的模糊不清的事物。"
  },
  {
    "word": "blurs",
    "pos": "v.",
    "cn_def": "使模糊",
    "en_def": "to make or become unclear or less distinct.",
    "sentence": "The innovative new science fiction film completely {{BLANK}} the traditional line between hilarious comedy and serious drama.",
    "cn": "這部創新的新科幻電影完全使搞笑喜劇和嚴肅戲劇之間的傳統界線模糊。"
  },
  {
    "word": "blur the line between",
    "pos": "phr.",
    "cn_def": "模糊...之間的界線",
    "en_def": "to make it difficult to distinguish between two different things.",
    "sentence": "Highly realistic modern video games often {{BLANK}} exciting digital entertainment and real-life physical sports.",
    "cn": "高度逼真的現代電玩遊戲經常模糊刺激的數位娛樂與現實生活體育之間的界線。"
  },
  {
    "word": "blurred",
    "pos": "adj.",
    "cn_def": "模糊不清的",
    "en_def": "unable to see or be seen clearly.",
    "sentence": "Without his expensive prescription glasses, the frustrated student's vision was completely {{BLANK}} in the bright classroom.",
    "cn": "沒有他昂貴的處方眼鏡，這位沮喪學生在明亮教室裡的視線是完全模糊不清的。"
  },
  {
    "word": "blurry",
    "pos": "adj.",
    "cn_def": "模糊的",
    "en_def": "lacking clear definition or focus.",
    "sentence": "Because the camera lens was incredibly dirty, all the vacation photos turned out to be terribly {{BLANK}}.",
    "cn": "因為相機鏡頭極度骯髒，所有假期照片拍出來都非常模糊的。"
  },
  {
    "word": "formation",
    "pos": "n.",
    "cn_def": "形成；構成",
    "en_def": "the action of forming or process of being formed.",
    "sentence": "Her father's strict moral teachings undoubtedly contributed heavily to the early {{BLANK}} of her own political beliefs.",
    "cn": "她父親嚴格的道德教誨無疑地對她自身政治信仰的早期形成有著重大的貢獻。"
  },
  {
    "word": "cloud formation",
    "pos": "phr.",
    "cn_def": "雲層結構",
    "en_def": "the arrangement or structure of clouds in the sky.",
    "sentence": "Anna confidently says that those dark and heavy {{BLANK}} are a clear sign that a big storm is coming.",
    "cn": "安娜自信地說，那些黑暗厚重的雲層結構是強大風暴即將來臨的明顯跡象。"
  },
  {
    "word": "form",
    "pos": "v.",
    "cn_def": "形成；形狀",
    "en_def": "to bring together parts or combine to create; the visible shape or configuration of something.",
    "sentence": "The intelligent students decided to officially {{BLANK}} a dedicated study group to carefully prepare for the difficult final exams.",
    "cn": "聰明的學生們決定正式形成（組成）一個專門的讀書小組，以仔細準備困難的期末考。"
  },
  {
    "word": "form",
    "pos": "n. [C]",
    "cn_def": "形式、類型；表格",
    "en_def": "A type, kind, or appearance of something; or a document with blanks to fill in.",
    "sentence": "Please fill out this application {{BLANK}} with your prior work experience before submitting it to the HR manager.",
    "cn": "在將這份申請表格提交給人事經理之前，請先填寫您的過往工作經驗。"
  },
  {
    "word": "in the form of",
    "pos": "phr.",
    "cn_def": "以…的形式、以…的方式",
    "en_def": "Having the shape, type, or appearance of a specific thing.",
    "sentence": "The university provided financial assistance to the low-income student {{BLANK}} a monthly scholarship.",
    "cn": "這所大學以按月發放獎學金的形式，向這位低收入學生提供經濟援助。"
  },
  {
    "word": "art form",
    "pos": "n. [C]",
    "cn_def": "藝術形式",
    "en_def": "An activity or a field of expression that is considered a type of art, such as painting or dance.",
    "sentence": "Photography has been recognized as a serious {{BLANK}} that can capture deep human emotions.",
    "cn": "攝影已被公認為一種能夠捕捉人類深刻情感的嚴肅藝術形式。"
  },
  {
    "word": "formation",
    "pos": "n. [U, C]",
    "cn_def": "形成、構成；隊形、排列",
    "en_def": "The process of bringing something into existence, or the specific way things are arranged.",
    "sentence": "Extreme changes in temperature over millions of years led to the {{BLANK}} of these unique mountain rocks.",
    "cn": "數百萬年來極端的溫度變化，導致了這些獨特山岩的形成。"
  },
  {
    "word": "formless",
    "pos": "adj.",
    "cn_def": "無定形的",
    "en_def": "without a clear or definite shape or structure.",
    "sentence": "The mysterious magical creature appeared as a dark, {{BLANK}} shadow slowly moving across the completely silent room.",
    "cn": "那個神秘的魔法生物看起來像一個黑暗、無定形的影子，緩慢地穿過完全安靜的房間。"
  },
  {
    "word": "development",
    "pos": "n.",
    "cn_def": "發展",
    "en_def": "the process of developing or being developed.",
    "sentence": "The rapid technological {{BLANK}} of advanced smartphones has significantly changed how humans quickly communicate with each other.",
    "cn": "先進智慧型手機快速的技術發展，已經顯著改變了人類彼此快速溝通的方式。"
  },
  {
    "word": "evolved",
    "pos": "v.",
    "cn_def": "演變；進化",
    "en_def": "to develop gradually, especially from a simple to a more complex form.",
    "sentence": "Our complicated science project eventually {{BLANK}} into something that was quite remarkably different from what we originally planned.",
    "cn": "我們複雜的科學專案最終演變成一個與我們最初計畫相當顯著不同的東西。"
  },
  {
    "word": "evolution",
    "pos": "n.",
    "cn_def": "演化；發展",
    "en_def": "the gradual development of something, especially from a simple to a more complex form.",
    "sentence": "The fascinating {{BLANK}} of modern computer technology over the last few decades has completely changed human society.",
    "cn": "過去幾十年間現代電腦科技迷人的演化已經徹底改變了人類社會。"
  },
  {
    "word": "evolutionary",
    "pos": "adj.",
    "cn_def": "演化的",
    "en_def": "relating to the gradual development of something.",
    "sentence": "The brilliant biology professor taught a highly complex course about the {{BLANK}} history of strange deep-sea creatures.",
    "cn": "才華洋溢的生物學教授教授了一門關於奇異深海生物演化的歷史的高度複雜課程。"
  },
  {
    "word": "involve",
    "pos": "v.",
    "cn_def": "包含；牽涉",
    "en_def": "to have or include something as a necessary part.",
    "sentence": "This highly demanding corporate management job will definitely {{BLANK}} traveling to many different foreign countries every single month.",
    "cn": "這份要求極高的企業管理工作絕對會包含每個月到許多不同的外國國家出差。"
  },
  {
    "word": "be actively involved in",
    "pos": "v. phr.",
    "cn_def": "參與…、涉入…、捲入…",
    "en_def": "To take part in an activity, event, or situation, or to be deeply connected with it.",
    "sentence": "Marcus decided to {{BLANK}} the local charity project to help low-income families.",
    "cn": "馬庫斯決定積極參與當地的慈善計畫，以幫助低收入家庭。"
  },
  {
    "word": "revolves",
    "pos": "v.",
    "cn_def": "旋轉；圍繞",
    "en_def": "to move in a circle on a central axis.",
    "sentence": "The knowledgeable astronomy teacher clearly explained that the Earth naturally {{BLANK}} around the glowing sun once a year.",
    "cn": "知識淵博的天文學老師清楚地解釋說，地球每年自然地圍繞發光的太陽旋轉一次。"
  },
  {
    "word": "revolve around",
    "pos": "v. phr.",
    "cn_def": "圍繞…旋轉、以…為中心",
    "en_def": "To move in a circular path around a central object; or to have something as the main interest or focus.",
    "sentence": "For the first few months, a new mother's daily schedule will completely {{BLANK}} her baby's needs.",
    "cn": "在最初的幾個月裡，新手媽媽的每日行程將完全以寶寶的需求為中心（圍繞著寶寶的需求）。"
  },
  {
    "word": "revolution",
    "pos": "n. [C, U]",
    "cn_def": "環繞、旋轉、公轉",
    "en_def": "A complete circular movement made by an object around a central point.",
    "sentence": "It takes about 365 days for the Earth to complete one full {{BLANK}} around the sun.",
    "cn": "地球繞太陽完成一次完整的公轉（環繞）大約需要 365 天。"
  },
  {
    "word": "revolution",
    "pos": "n. [C, U]",
    "cn_def": "革命、重大變革",
    "en_def": "A violent or total change in a country's political system, or a major change in ideas or methods.",
    "sentence": "The Industrial {{BLANK}} in the 18th century completely changed the way goods were manufactured and produced.",
    "cn": "18 世紀的工業革命徹底改變了貨物的製造與生產方式。"
  },
  {
    "word": "revolutionary",
    "pos": "adj.",
    "cn_def": "革命性的、突破性的、大變革的",
    "en_def": "Involving or causing a complete and dramatic change in ideas, methods, or systems.",
    "sentence": "The research team developed a {{BLANK}} new medicine that could successfully cure the genetic defect.",
    "cn": "研究團隊研發出了一種革命性的（突破性的）新藥，能夠成功治療該基因缺陷。"
  },
  {
    "word": "revolutionized",
    "pos": "v.",
    "cn_def": "徹底改變、改革、帶來革命性變革",
    "en_def": "To completely change the way something is done, built, or thought about.",
    "sentence": "The invention of smartphones has completely {{BLANK}} the way modern people communicate and access information on demand.",
    "cn": "智慧型手機的發明，徹底改變了（帶來革命性變革）現代人溝通與隨選獲取資訊的方式。"
  },
  {
    "word": "exception",
    "pos": "n.",
    "cn_def": "例外",
    "en_def": "a person or thing that is excluded from a general statement or does not follow a rule.",
    "sentence": "I usually manage to sleep very peacefully at night, but last night's terrible loud thunderstorm was a major {{BLANK}}.",
    "cn": "我通常晚上都能睡得非常平靜，但昨晚可怕響亮的雷暴是一個重大的例外。"
  },
  {
    "word": "exceptional",
    "pos": "adj.",
    "cn_def": "卓越的；例外的",
    "en_def": "unusually good; outstanding.",
    "sentence": "Jerry is truly an {{BLANK}} employee who consistently works incredibly hard and contributes significantly to our modern company.",
    "cn": "傑瑞真的是一位卓越的員工，他始終極其努力地工作，並對我們現代公司做出了重大貢獻。"
  },
  {
    "word": "exceptional circumstances",
    "pos": "phr.",
    "cn_def": "例外情況",
    "en_def": "highly unusual or uncommon situations.",
    "sentence": "The strict international company naturally only tolerates employee lateness in highly {{BLANK}}, such as severe transportation strikes.",
    "cn": "這家嚴格的國際公司自然只在高度的例外情況下容許員工遲到，例如嚴重的交通罷工。"
  },
  {
    "word": "exceptionally",
    "pos": "adv.",
    "cn_def": "異常地；非常",
    "en_def": "to a greater degree than normal; unusually.",
    "sentence": "Because the winter weather was {{BLANK}} cold, the local government urgently opened extra shelters for the homeless citizens.",
    "cn": "因為冬季天氣異常地寒冷，當地政府緊急為無家可歸的公民開放了額外的庇護所。"
  },
  {
    "word": "extraordinary",
    "pos": "adj.",
    "cn_def": "非凡的",
    "en_def": "very unusual or remarkable.",
    "sentence": "The brave young firefighter showed truly {{BLANK}} courage when he bravely ran into the violently burning wooden house.",
    "cn": "這位勇敢的年輕消防員在勇敢跑進猛烈燃燒的木屋時，展現了真正非凡的勇氣。"
  },
  {
    "word": "spanned",
    "pos": "v. / n.",
    "cn_def": "橫跨；跨度",
    "en_def": "to extend across in space or time; the full extent of something from end to end.",
    "sentence": "The terrible economic impact from the sudden financial crisis unfortunately {{BLANK}} every single dark corner of the struggling economy.",
    "cn": "突發金融危機造成的可怕經濟影響，不幸地橫跨了這個苦苦掙扎的經濟的每一個黑暗角落。"
  },
  {
    "word": "lifespan",
    "pos": "n.",
    "cn_def": "壽命",
    "en_def": "the length of time for which a person or animal lives or a thing functions.",
    "sentence": "Because of highly advanced modern medicine, the average human {{BLANK}} has significantly increased over the past entire century.",
    "cn": "因為高度先進的現代醫學，人類的平均壽命在過去整整一個世紀中已經顯著增加。"
  },
  {
    "word": "attention span",
    "pos": "n.",
    "cn_def": "注意力持續時間",
    "en_def": "the length of time a person can concentrate on a task without becoming distracted.",
    "sentence": "Teachers frequently complain that young children who constantly watch short internet videos have an incredibly brief {{BLANK}}.",
    "cn": "老師們經常抱怨，不斷觀看網路短影音的幼童，其注意力持續時間極其短暫。"
  },
  {
    "word": "span across",
    "pos": "phr.",
    "cn_def": "橫跨",
    "en_def": "to stretch completely from one side to another.",
    "sentence": "The massive new steel bridge was specifically designed to beautifully {{BLANK}} the incredibly wide and deep river.",
    "cn": "這座巨大的新鋼橋被專門設計來美麗地橫跨這條極其寬闊且深邃的河流。"
  },
  {
    "word": "Apart from",
    "pos": "phr.",
    "cn_def": "除了...之外",
    "en_def": "except for; in addition to.",
    "sentence": "{{BLANK}} the friendly guy named Fred, clever Janice has also proudly won several expensive prizes for her competitive roller skating.",
    "cn": "除了那個名叫弗雷德的友善男孩之外，聰明的珍妮絲也自豪地贏得了幾個競爭激烈的溜直排輪昂貴獎項。"
  },
  {
    "word": "apart",
    "pos": "adv.",
    "cn_def": "分開地",
    "en_def": "separated by a distance; into pieces.",
    "sentence": "Because they live in completely different countries, the two loving brothers have sadly lived far {{BLANK}} for years.",
    "cn": "因為他們住在完全不同的國家，這兩個充滿愛的兄弟令人遺憾地已經遠遠分開地生活了幾年。"
  },
  {
    "word": "fall apart",
    "pos": "phr.",
    "cn_def": "散開；崩潰",
    "en_def": "to break into pieces; to lose one's capacity to cope.",
    "sentence": "The cheap old wooden chair finally began to completely {{BLANK}} after being left outside in the pouring rain.",
    "cn": "那把便宜的舊木椅在傾盆大雨中被留在外面後，終於開始完全散開（解體）。"
  },
  {
    "word": "take apart",
    "pos": "phr.",
    "cn_def": "拆開",
    "en_def": "to separate something into its individual pieces.",
    "sentence": "The curious young boy carefully managed to {{BLANK}} the broken radio to see exactly how it worked inside.",
    "cn": "好奇的小男孩小心翼翼地設法拆開了壞掉的收音機，想看看它裡面到底是如何運作的。"
  },
  {
    "word": "tell them apart",
    "pos": "phr.",
    "cn_def": "分辨",
    "en_def": "to distinguish one person or thing from another.",
    "sentence": "The identical twin sisters look so incredibly similar that even their own closest friends cannot {{BLANK}} easily.",
    "cn": "這對同卵雙胞胎姊妹看起來如此極度相似，以至於連她們自己最親密的朋友都無法輕易將她們分辨。"
  },
  {
    "word": "facilitates",
    "pos": "v.",
    "cn_def": "促進；使便利",
    "en_def": "to make an action or process easy or easier.",
    "sentence": "The brand new interactive teaching material specifically {{BLANK}} incredibly fast and effective learning for the young students in class.",
    "cn": "全新的互動教學教材特別促進了課堂上年輕學生極其快速且有效的學習。"
  },
  {
    "word": "facilitator",
    "pos": "n.",
    "cn_def": "促進者；引導者",
    "en_def": "a person or thing that makes an action or process easy or easier.",
    "sentence": "The highly trained professional {{BLANK}} ensured that the difficult business negotiation smoothly proceeded without any angry physical arguments.",
    "cn": "訓練有素的專業引導者確保了困難的商業談判順利進行，沒有發生任何憤怒的肢體爭論。"
  },
  {
    "word": "facility",
    "pos": "n.",
    "cn_def": "設施",
    "en_def": "a place, amenity, or piece of equipment provided for a particular purpose.",
    "sentence": "The highly prestigious international university proudly boasts an incredibly modern sports {{BLANK}} available for all of its hardworking students.",
    "cn": "這所極具聲望的國際大學自豪地擁有一座極其現代化的體育設施，供其所有辛勤的學生使用。"
  },
  {
    "word": "highly facilitated",
    "pos": "phr.",
    "cn_def": "高度促進的",
    "en_def": "made significantly easier or smoother by someone or something.",
    "sentence": "The massive global trade agreement was {{BLANK}} by the dedicated efforts of the brilliant foreign political ambassadors.",
    "cn": "這項龐大的全球貿易協定，是在才華洋溢的外國政治大使的盡責努力下被高度促進的。"
  },
  {
    "word": "encounter",
    "pos": "n.",
    "cn_def": "相遇；遭遇",
    "en_def": "an unexpected or casual meeting with someone or something; to unexpectedly experience.",
    "sentence": "An exciting weekend trip to the massive city zoo gave little Jim his very first terrifying {{BLANK}} with dangerous snakes.",
    "cn": "週末去大型城市動物園的刺激旅行，給了小吉姆他第一次與危險蛇類可怕的相遇。"
  },
  {
    "word": "encounter",
    "pos": "v.",
    "cn_def": "遭遇（困難/問題）、不期而遇",
    "en_def": "To experience something unexpected or difficult, or to meet someone by chance.",
    "sentence": "The project team might {{BLANK}} some technical difficulties when trying to update the online testing system.",
    "cn": "專案團隊在試圖更新線上測驗系統時，可能會遭遇一些技術上的困難。"
  },
  {
    "word": "close encounter",
    "pos": "phr.",
    "cn_def": "近距離接觸",
    "en_def": "a situation in which one comes very near to something dangerous or unusual.",
    "sentence": "The brave hiker had an incredibly {{BLANK}} with a massive angry bear while wandering deep in the dark woods.",
    "cn": "勇敢的登山客在黑暗的森林深處漫遊時，與一隻巨大的憤怒熊有了一次令人難以置信的近距離接觸。"
  },
  {
    "word": "unexpected encounter",
    "pos": "phr.",
    "cn_def": "意外相遇",
    "en_def": "a meeting that happens without warning or planning.",
    "sentence": "Michelle had a completely {{BLANK}} with a famous Hollywood movie star while nervously waiting at the busy international airport.",
    "cn": "蜜雪兒在繁忙的國際機場緊張地等待時，與一位著名的好萊塢電影明星有了一次完全的意外相遇。"
  },
  {
    "word": "bump into",
    "pos": "phr. v.",
    "cn_def": "巧遇、不期而遇、撞見",
    "en_def": "To meet someone you know completely by chance when you did not expect to see them.",
    "sentence": "Marcus was surprised to {{BLANK}} his former English teacher at the Japanese buffet restaurant last night.",
    "cn": "馬庫斯昨晚在一家日本自助餐廳巧遇他以前的英文老師，感到非常驚喜。"
  },
  {
    "word": "run into",
    "pos": "phr. v.",
    "cn_def": "巧遇、遇見；遭遇（困難）",
    "en_def": "To meet someone by accident, or to experience unexpected problems or difficulties.",
    "sentence": "While traveling in Tokyo, Chloe happened to {{BLANK}} an old college classmate she hadn't seen for years.",
    "cn": "在東京旅行時，克洛伊碰巧巧遇了一位多年未見的大學舊同學。"
  },
  {
    "word": "face",
    "pos": "v.",
    "cn_def": "面對",
    "en_def": "to confront and deal with or accept a difficult or unpleasant task or situation.",
    "sentence": "The struggling company will inevitably {{BLANK}} complete financial disaster if it doesn't quickly improve its terrible daily sales.",
    "cn": "如果這家苦苦掙扎的公司不迅速大幅改善其糟糕的日常銷售，它將無可避免地面對的財務災難。"
  },
  {
    "word": "faced with",
    "pos": "v. phr.",
    "cn_def": "面臨…、面對…（通常指困難、挑戰）",
    "en_def": "To have to deal with a difficult situation, problem, or choice.",
    "sentence": "When the manufacturing factory closed down, Marcus was {{BLANK}} the urgent need to find a new job.",
    "cn": "當製造工廠倒閉時，馬庫斯面臨著尋找新工作的迫切需求。"
  },
  {
    "word": "in the face of",
    "pos": "phr.",
    "cn_def": "面對…、在…面前（通常指不畏艱難）",
    "en_def": "While experiencing or dealing with a difficult situation, danger, or opposition.",
    "sentence": "Chloe remained completely calm {{BLANK}} danger and successfully guided the lost tourists out of the dark cave.",
    "cn": "面對危險，克洛伊保持完全冷靜，並成功引導迷路的遊客走出了黑暗的山洞。"
  },
  {
    "word": "face-to-face communication",
    "pos": "n. [U]",
    "cn_def": "面對面溝通",
    "en_def": "The act of talking directly to another person while being in the same physical place.",
    "sentence": "Although text messages are convenient, {{BLANK}} is still the best way to resolve serious personal conflicts.",
    "cn": "雖然簡訊很方便，但面對面溝通仍然是解決嚴重個人衝突的最佳方式。"
  },
  {
    "word": "enrich",
    "pos": "v.",
    "cn_def": "豐富",
    "en_def": "to improve or enhance the quality or value of.",
    "sentence": "The passionate history teacher uses deeply fascinating traditional stories to perfectly {{BLANK}} the young students' understanding of ancient cultures.",
    "cn": "熱情的歷史老師使用極其迷人的傳統故事，來完美地豐富年輕學生對古代文化的理解。"
  },
  {
    "word": "enrichment",
    "pos": "n.",
    "cn_def": "豐富；充實",
    "en_def": "the action of improving or enhancing the quality or value of something.",
    "sentence": "Joey's wealthy parents constantly took him on lots of educational trips abroad, which definitely brought incredible {{BLANK}} to his childhood.",
    "cn": "喬伊富有的父母不斷帶他去國外進行許多教育旅行，這絕對為他的童年帶來了令人難以置信的豐富（充實）。"
  },
  {
    "word": "enriched",
    "pos": "adj.",
    "cn_def": "營養強化的；豐富的",
    "en_def": "having added nutrients or improved quality.",
    "sentence": "This completely healthy and delicious morning bread is specially {{BLANK}} with extremely vital vitamins and important natural minerals.",
    "cn": "這款完全健康且美味的早晨麵包特別用極其重要的維生素和重要的天然礦物質進行了營養強化的。"
  },
  {
    "word": "enriching",
    "pos": "adj.",
    "cn_def": "使人充實的",
    "en_def": "providing rewarding value or improving the quality of something.",
    "sentence": "Volunteering at the crowded local animal shelter was a deeply {{BLANK}} experience that taught the teenager absolute responsibility.",
    "cn": "在擁擠的當地動物收容所當志工是一次深深使人充實的經歷，教會了這個青少年絕對的責任感。"
  },
  {
    "word": "marvel",
    "pos": "n. / v.",
    "cn_def": "奇蹟；感到驚嘆",
    "en_def": "a wonderful or astonishing person or thing; to be filled with wonder or astonishment.",
    "sentence": "My knowledgeable grandfather always happily says that modern smart mobile phones are a truly incredible {{BLANK}} of advanced modern technology.",
    "cn": "我知識淵博的祖父總是快樂地說，現代智慧型手機真的是先進現代科技一個令人難以置信的奇蹟。"
  },
  {
    "word": "marvel at",
    "pos": "phr.",
    "cn_def": "對...感到驚嘆",
    "en_def": "to look at or consider something with great surprise or admiration.",
    "sentence": "The romantic young couple silently stood outside to completely {{BLANK}} the breathtaking beauty of the incredibly bright shining stars.",
    "cn": "浪漫的年輕夫婦安靜地站在外面，完全對極其明亮閃耀星星令人驚嘆的美麗感到驚嘆。"
  },
  {
    "word": "marvelous",
    "pos": "adj.",
    "cn_def": "極好的；令人驚嘆的",
    "en_def": "causing great wonder; extraordinary.",
    "sentence": "The famous restaurant serves absolutely {{BLANK}} food that consistently attracts incredibly hungry and excited customers from all over the city.",
    "cn": "這家著名餐廳提供絕對極好的食物，不斷吸引來自城市各處極度飢餓且興奮的顧客。"
  },
  {
    "word": "marvelously",
    "pos": "adv.",
    "cn_def": "奇蹟般地；極好地",
    "en_def": "in a way that causes great wonder or is extraordinarily good.",
    "sentence": "The highly talented classical piano player performed so {{BLANK}} that the completely amazed audience loudly cheered for several long minutes.",
    "cn": "這位極具才華的古典鋼琴家表演得如此極好地，以至於完全驚訝的觀眾大聲歡呼了幾段漫長的分鐘。"
  },
  {
    "word": "engaging",
    "pos": "adj.",
    "cn_def": "迷人的；吸引人的",
    "en_def": "charming and attractive; capturing attention.",
    "sentence": "The colorful new fantasy video game was so deeply {{BLANK}} that I completely lost track of the entire long afternoon.",
    "cn": "這款色彩繽紛的新奇幻電玩遊戲如此深深地吸引人的，以至於我完全忘了整個漫長的下午時間。"
  },
  {
    "word": "engage",
    "pos": "v.",
    "cn_def": "吸引；參與",
    "en_def": "to occupy, attract, or involve someone's interest or attention.",
    "sentence": "The passionate teacher uses completely fun and interactive daily activities to successfully {{BLANK}} her easily distracted and highly energetic students.",
    "cn": "熱情的老師使用完全有趣且互動的日常活動，成功地吸引她容易分心且精力高度充沛的學生。"
  },
  {
    "word": "engage in",
    "pos": "phr.",
    "cn_def": "參與",
    "en_def": "to participate or become involved in.",
    "sentence": "The incredibly tired manager was entirely too distracted to properly {{BLANK}} their complex conversation about the new financial project.",
    "cn": "極度疲憊的經理完全太分心了，無法適當地參與他們關於新財務專案複雜的對話。"
  },
  {
    "word": "engaged to",
    "pos": "v. phr.",
    "cn_def": "與某人訂婚",
    "en_def": "Having formally agreed to marry a specific person in the future.",
    "sentence": "After dating happily for over five years, Marcus announced that he was {{BLANK}} Chloe.",
    "cn": "在快樂地交往了五年多之後，馬庫斯宣布他已經與克洛伊訂婚了。"
  },
  {
    "word": "engaged in",
    "pos": "v. phr.",
    "cn_def": "正從事於…、忙於…、參與…",
    "en_def": "To be deeply busy, occupied, or involved in a specific activity or situation.",
    "sentence": "The research team is currently {{BLANK}} a long-term scientific study regarding genetic defects.",
    "cn": "該研究團隊目前正從事於（忙於）一項關於基因缺陷的長期科學研究。"
  },
  {
    "word": "engage in",
    "pos": "v. phr.",
    "cn_def": "參加…、進行…、從事…（活動）",
    "en_def": "To take part in or do a specific activity, discussion, or behavior.",
    "sentence": "Doctors strongly recommend that elderly people {{BLANK}} light regular exercise to keep their hearts healthy.",
    "cn": "醫生強烈建議年長者進行（從事）規律的輕度運動，以保持心臟健康。"
  },
  {
    "word": "engagement",
    "pos": "n.",
    "cn_def": "訂婚；參與",
    "en_def": "the act of participation.",
    "sentence": "After dating for five wonderful years, the truly happy couple finally announced their incredibly exciting official romantic {{BLANK}}.",
    "cn": "在度過美好的五年約會後，這對真正幸福的夫婦終於宣布了他們極其令人興奮的正式浪漫訂婚。"
  },
  {
    "word": "engaging",
    "pos": "adj.",
    "cn_def": "迷人的、有吸引力的、引人入勝的",
    "en_def": "Interesting, charming, and keeping your attention completely.",
    "sentence": "The experienced English teacher designed an {{BLANK}} web-based game that kept the students motivated to practice spelling.",
    "cn": "這位經驗豐富的英文老師設計了一款引人入勝的（有吸引力的）網頁遊戲，讓學生們保持練習拼字的動力。"
  },
  {
    "word": "take part in",
    "pos": "v. phr.",
    "cn_def": "參加…、參與…",
    "en_def": "To participate or be involved in an activity, event, or sport with other people.",
    "sentence": "Marcus encourages his children to {{BLANK}} outdoor sports to stay healthy and build a strong character.",
    "cn": "馬庫斯鼓勵他的孩子們參加戶外運動，以保持健康並培養堅強的個性。"
  },
  {
    "word": "participate in",
    "pos": "v. phr.",
    "cn_def": "參加…、參與…",
    "en_def": "To take part in an event, a game, an activity, or an organized group.",
    "sentence": "Hundreds of international students from Taipei decided to {{BLANK}} the summer English camp last year.",
    "cn": "去年，數百名來自台北的國際學生決定參加（參與）這場夏季英語營。"
  },
  {
    "word": "participant",
    "pos": "n. [C]",
    "cn_def": "參與者、參加者",
    "en_def": "A person who takes part in a specific activity, event, or research study.",
    "sentence": "Each {{BLANK}} in the financial investment seminar will receive a professional certificate after completing the course.",
    "cn": "這場金融投資研討會的每位參與者在完成課程後，都將獲得一張專業證書。"
  },
  {
    "word": "participation",
    "pos": "n. [U]",
    "cn_def": "參與、參加",
    "en_def": "The act of taking part in an activity, event, or discussion.",
    "sentence": "Active {{BLANK}} in classroom discussions is highly valued and will count toward your final grade.",
    "cn": "積極參與課堂討論是備受看重的，且會計入你的期末成績。"
  },
  {
    "word": "charming",
    "pos": "adj.",
    "cn_def": "迷人的",
    "en_def": "pleasant or attractive.",
    "sentence": "The highly polite and naturally {{BLANK}} young man easily made a completely wonderful first impression on his strict future boss.",
    "cn": "這位極度有禮貌且天生迷人的年輕人，輕鬆地給他嚴格的未來老闆留下了一個完全美好的第一印象。"
  },
  {
    "word": "reproduce",
    "pos": "v.",
    "cn_def": "複製；繁殖",
    "en_def": "to produce a copy or representation of; to produce offspring.",
    "sentence": "This highly advanced and incredibly expensive office photocopier can accurately {{BLANK}} beautiful and complex color photographs in just a few seconds.",
    "cn": "這台高度先進且極其昂貴的辦公室影印機，能在短短幾秒鐘內準確地複製美麗且複雜的彩色照片。"
  },
  {
    "word": "reproduction",
    "pos": "n.",
    "cn_def": "複製品；繁殖",
    "en_def": "the action or process of making a copy of something; the production of offspring.",
    "sentence": "The historical museum beautifully proudly displays a highly perfect {{BLANK}} of an extremely famous ancient Roman statue for curious tourists.",
    "cn": "歷史博物館美麗自豪地為好奇的遊客展示了一尊極其著名的古羅馬雕像的完美複製品。"
  },
  {
    "word": "reproductive",
    "pos": "adj.",
    "cn_def": "生殖的",
    "en_def": "relating to or effecting reproduction.",
    "sentence": "The brilliant scientist passionately studies the incredibly complex {{BLANK}} cycle of several completely rare and highly endangered exotic wild birds.",
    "cn": "才華洋溢的科學家熱情地研究幾種完全稀有且高度瀕危的異國野鳥極其複雜的生殖的週期。"
  },
  {
    "word": "produce",
    "pos": "v.",
    "cn_def": "生產",
    "en_def": "to make or manufacture from components or raw materials.",
    "sentence": "The highly efficient new factory uses heavily automated machines to quickly {{BLANK}} thousands of extremely cheap plastic toys every day.",
    "cn": "高效率的新工廠使用重度自動化的機器，每天快速生產數千個極其便宜的塑膠玩具。"
  },
  {
    "word": "producer",
    "pos": "n.",
    "cn_def": "生產者；製作人",
    "en_def": "a person, company, or country that makes, grows, or supplies goods or commodities for sale.",
    "sentence": "The highly powerful Hollywood {{BLANK}} angrily demanded that the nervous director drastically change the boring ending of the movie.",
    "cn": "權力極大的好萊塢製作人憤怒地要求緊張的導演大幅改變電影無聊的結局。"
  },
  {
    "word": "representative",
    "pos": "n. / adj.",
    "cn_def": "代表；具代表性的",
    "en_def": "a person chosen or appointed to act or speak for another or others; typical of a class, group, or body of opinion.",
    "sentence": "His massive financial success as a dedicated businessman is highly {{BLANK}} of exactly what extremely hard work can accomplish.",
    "cn": "他作為一位盡責商人巨大的財務成功，高度具代表性的展示了極度努力工作究竟能成就什麼。"
  },
  {
    "word": "representative of",
    "pos": "phr.",
    "cn_def": "...的代表",
    "en_def": "serving as a typical example of something.",
    "sentence": "At the massive international trade show, Shawn confidently acted as a highly professional {{BLANK}} this growing global technology company.",
    "cn": "在大型國際貿易展上，尚恩自信地擔任這家不斷成長的全球科技公司高度專業的代表。"
  },
  {
    "word": "represent",
    "pos": "v.",
    "cn_def": "代表",
    "en_def": "to be entitled or appointed to act or speak for someone.",
    "sentence": "The highly skilled and incredibly expensive lawyer will formally {{BLANK}} the totally innocent man during the highly publicized and stressful trial.",
    "cn": "技術高超且極其昂貴的律師，將在高度公開且充滿壓力的審判中正式代表這個完全無辜的男人。"
  },
  {
    "word": "representation",
    "pos": "n.",
    "cn_def": "表現；代表",
    "en_def": "the action of speaking or acting on behalf of someone or the state of being so represented.",
    "sentence": "The community strongly demands completely fair and deeply equal political {{BLANK}} in the highly powerful national government without any hesitation.",
    "cn": "社區強烈要求在權力極大的國家政府中毫不猶豫地獲得完全公平且深刻平等的政治代表。"
  },
  {
    "word": "sales representative",
    "pos": "phr.",
    "cn_def": "業務代表",
    "en_def": "an employee of a company who travels around a particular area selling the company's goods to shops and other businesses.",
    "sentence": "The enthusiastic and highly persuasive {{BLANK}} cleverly managed to quickly sell the incredibly expensive new software to the hesitant client.",
    "cn": "熱情且極具說服力的業務代表巧妙地設法迅速將極其昂貴的新軟體賣給了猶豫不決的客戶。"
  },
  {
    "word": "on behalf of",
    "pos": "phr.",
    "cn_def": "代表…、替…",
    "en_def": "As the representative of someone else, or speaking and acting for them.",
    "sentence": "Chloe accepted the professional teaching award {{BLANK}} the entire English department.",
    "cn": "克洛伊代表整個英文學系接受了這座專業教學獎。"
  },
  {
    "word": "stand for",
    "pos": "phr. v.",
    "cn_def": "代表（字詞縮寫）；象徵、主張",
    "en_def": "To represent a word, an idea, or a belief, especially as an abbreviation or a symbol.",
    "sentence": "In the field of digital media, the letters OTT {{BLANK}} \"Over-The-Top\" streaming services.",
    "cn": "在數位媒體領域中，字母 OTT 代表「串流媒體（Over-The-Top）」服務。"
  },
  {
    "word": "symbolize",
    "pos": "v.",
    "cn_def": "象徵、代表",
    "en_def": "To be a symbol of something, or to represent a deeper quality or feeling.",
    "sentence": "In many fantasy novels, the white horse is used to {{BLANK}} purity, justice, and absolute goodness.",
    "cn": "在許多奇幻小說中，白馬被用來象徵純潔、正義與絕對的善良。"
  },
  {
    "word": "symbol",
    "pos": "n. [C]",
    "cn_def": "象徵、標誌、符號",
    "en_def": "A sign, shape, or object that is used to represent something else, such as an idea or quality.",
    "sentence": "The dove has long been recognized globally as a universal {{BLANK}} of peace and unbiased harmony.",
    "cn": "鴿子長期以來在全球被公認為和平與無偏見和諧的通用象徵。"
  },
  {
    "word": "symbolic of",
    "pos": "v. phr.",
    "cn_def": "象徵…的、代表…的",
    "en_def": "Serving as a symbol, or representing something else in a significant way.",
    "sentence": "The lighting of the Olympic flame is deeply {{BLANK}} unity and friendship among different nations.",
    "cn": "奧運聖火的點燃，深深象徵著不同國家之間的團結與友誼。"
  },
  {
    "word": "destination",
    "pos": "n.",
    "cn_def": "目的地",
    "en_def": "the place to which someone or something is going or being sent.",
    "sentence": "Belize is widely famous globally as a relatively cheap vacation {{BLANK}} featuring truly great ocean diving and completely beautiful relaxing beaches.",
    "cn": "貝里斯作為一個相對便宜的度假目的地在全球廣為人知，以真正絕佳的海洋潛水和完全美麗放鬆的海灘為特色。"
  },
  {
    "word": "tourist destination",
    "pos": "phr.",
    "cn_def": "旅遊勝地",
    "en_def": "a place that is popular with people who are on holiday.",
    "sentence": "The incredibly historic and perfectly preserved ancient European city remains an extremely popular {{BLANK}} for completely eager international travelers.",
    "cn": "這座極具歷史意義且保存完美的古老歐洲城市，仍然是熱切國際旅客極受歡迎的旅遊勝地。"
  },
  {
    "word": "tourist attraction",
    "pos": "n. [C]",
    "cn_def": "觀光景點、旅遊勝地",
    "en_def": "A place of interest that people visit for pleasure, culture, or entertainment.",
    "sentence": "Taipei 101 is a world-famous {{BLANK}} that draws millions of international visitors to Taiwan every year.",
    "cn": "台北101是一個世界聞名的觀光景點，每年都吸引數百萬國際遊客來到台灣。"
  },
  {
    "word": "landmark",
    "pos": "n. [C]",
    "cn_def": "地標、里程碑",
    "en_def": "A building or feature that is easily recognized, especially one that guides people or has historical importance.",
    "sentence": "The historic red brick station building serves as a major {{BLANK}} in the center of Tokyo.",
    "cn": "這座歷史悠久的紅磚車站建築是東京市中心的一個重要地標。"
  },
  {
    "word": "scenic spot",
    "pos": "n. [C]",
    "cn_def": "風景區、景點",
    "en_def": "A specific place known for its beautiful natural views and landscapes.",
    "sentence": "The mountain hot spring resort is a popular {{BLANK}} where travelers can enjoy beautiful lake views.",
    "cn": "這座山區溫泉度假村是一個受歡迎的風景區（景點），旅客可以在那裡欣賞美麗的湖景。"
  },
  {
    "word": "wandered",
    "pos": "v.",
    "cn_def": "漫遊；徘徊",
    "en_def": "to walk or move in a leisurely, casual, or aimless way.",
    "sentence": "Completely lost Shawn sadly {{BLANK}} the dark and rainy city streets, having absolutely no idea where he actually needed to securely go.",
    "cn": "完全迷路的尚恩悲傷地在黑暗多雨的城市街道上徘徊，完全不知道他實際上需要安全地去哪裡。"
  },
  {
    "word": "wander off",
    "pos": "phr.",
    "cn_def": "走失；離開",
    "en_def": "to leave a place or group without permission or unexpectedly.",
    "sentence": "Irresponsible parents should never allow their energetic young children to {{BLANK}} alone in the massive park.",
    "cn": "不負責任的父母不應該舒服地允許他們精力充沛的幼童，單獨在巨大的公園裡走失（離開）。"
  },
  {
    "word": "wandering",
    "pos": "adj.",
    "cn_def": "漫遊的；流浪的",
    "en_def": "traveling aimlessly from place to place.",
    "sentence": "The lonely {{BLANK}} dog desperately searched the completely empty alleyways for absolutely any small scraps of leftover human food.",
    "cn": "孤獨流浪的狗拚命地在完全空蕩的巷弄裡尋找任何微小的人類殘羹剩飯。"
  },
  {
    "word": "wander around",
    "pos": "phr.",
    "cn_def": "四處閒逛",
    "en_def": "to walk around a place casually without a specific goal.",
    "sentence": "During our relaxing summer vacation, we decided to {{BLANK}} the charming old town for hours.",
    "cn": "在我們輕鬆的暑假中，我們決定在這座迷人的老城鎮裡四處閒逛好幾個小時。"
  },
  {
    "word": "apply",
    "pos": "v.",
    "cn_def": "申請",
    "en_def": "to make a formal application or request.",
    "sentence": "If you genuinely want this highly competitive internship, you absolutely must completely {{BLANK}} for it before the incredibly strict Friday deadline.",
    "cn": "如果你真心想要這個競爭高度激烈的實習，你絕對必須在極其嚴格的星期五截止日期前完全申請它。"
  },
  {
    "word": "application",
    "pos": "n.",
    "cn_def": "應用；申請",
    "en_def": "a formal request to an authority for something; the action of putting something into operation.",
    "sentence": "This complex new mechanical tool that has just recently been invented actually has many completely different and highly useful practical {{BLANK}}.",
    "cn": "這個剛發明不久的複雜新機械工具，實際上擁有許多完全不同且非常實用的應用。"
  },
  {
    "word": "job application",
    "pos": "phr.",
    "cn_def": "求職申請",
    "en_def": "a formal request to be considered for a position of employment.",
    "sentence": "Nadia confidently gave her detailed {{BLANK}} to the busy secretary and was completely surprisingly soon called back for a formal interview.",
    "cn": "納迪婭自信地將她詳細的求職申請交給忙碌的秘書，並完全令人驚訝地很快被叫回去進行正式面試。"
  },
  {
    "word": "fill in the application form",
    "pos": "v. phr.",
    "cn_def": "填寫申請表",
    "en_def": "To complete a document by writing down your personal details and answers in the blanks.",
    "sentence": "Please remember to {{BLANK}} completely before submitting your resume to the HR manager.",
    "cn": "在將您的履歷提交給人事經理之前，請記得完整地填寫申請表。"
  },
  {
    "word": "applicant",
    "pos": "n.",
    "cn_def": "申請人",
    "en_def": "a person who makes a formal application for something, typically a job.",
    "sentence": "The strict international technology company received over five hundred impressive resumes from incredibly hopeful {{BLANK}} for the single management position.",
    "cn": "這家嚴格的國際科技公司收到了超過五百份來自極度充滿希望的申請人的令人印象深刻的履歷，只為了這一個管理職位。"
  },
  {
    "word": "applicable",
    "pos": "adj.",
    "cn_def": "適用的",
    "en_def": "relevant or appropriate.",
    "sentence": "The complex safety rules carefully described in this completely detailed manual are strictly {{BLANK}} to absolutely everyone working in the busy factory.",
    "cn": "這本極其詳細的手冊中仔細描述的複雜安全規定，嚴格適用的於繁忙工廠中工作的絕對每個人。"
  },
  {
    "word": "apply for a job",
    "pos": "v. phr.",
    "cn_def": "應徵工作、申請工作",
    "en_def": "To make a formal, written request to a company asking to be hired for a specific position.",
    "sentence": "Marcus decided to {{BLANK}} at the new technology firm located in the Daan district.",
    "cn": "馬庫斯決定去應徵位於大安區的那家新科技公司的工作。"
  },
  {
    "word": "apply for a school",
    "pos": "v. phr.",
    "cn_def": "申請學校",
    "en_def": "To submit a formal request and necessary documents to be admitted into an educational institution.",
    "sentence": "Before you {{BLANK}} abroad, you must achieve a high score on standardized English exams like the TOEFL.",
    "cn": "在你申請國外學校之前，你必須在托福等標準化英文測驗中取得高分。"
  },
  {
    "word": "apply for a scholarship",
    "pos": "v. phr.",
    "cn_def": "申請獎學金",
    "en_def": "To formally request financial aid from an institution to help pay for your education.",
    "sentence": "Since her family was low-income, Chloe had to {{BLANK}} to cover her university tuition fees.",
    "cn": "由於她的家庭收入較低，克洛伊必須申請獎學金來支付她的大學學費。"
  },
  {
    "word": "apply to",
    "pos": "v. phr.",
    "cn_def": "應用於…、適用於…",
    "en_def": "To use a rule, idea, or piece of information in a specific situation, or to be relevant to someone.",
    "sentence": "The new safety regulations regarding school field trips {{BLANK}} all educational institutions in Taiwan.",
    "cn": "關於學校戶外教學的新安全規定，適用於台灣所有的教育機構。"
  },
  {
    "word": "application",
    "pos": "n. [C]",
    "cn_def": "應用程式",
    "en_def": "A computer program or mobile software designed to perform a specific task for the user (often shortened to \"app\").",
    "sentence": "This interactive vocabulary {{BLANK}} allows students to track their test performance and practice spelling on mobile phones.",
    "cn": "這款互動式單字應用程式讓學生能在手機上追蹤自己的測驗表現並練習拼字。"
  },
  {
    "word": "apply the medical ointment to",
    "pos": "v. phr.",
    "cn_def": "將…塗抹於…",
    "en_def": "To spread a substance, such as cream, ointment, or paint, onto a surface.",
    "sentence": "You should gently {{BLANK}} your shoulders to ease the pain from the severe sunburn.",
    "cn": "你應該將醫療軟膏輕輕地塗抹於肩膀上，以減輕嚴重曬傷所造成的疼痛。"
  },
  {
    "word": "educate",
    "pos": "v.",
    "cn_def": "教育",
    "en_def": "to give intellectual, moral, and social instruction to someone.",
    "sentence": "The highly passionate librarian tirelessly worked to properly {{BLANK}} the completely confused new students on the complex computer catalog system.",
    "cn": "熱情極高的圖書館員不知疲倦地工作，以適當地在複雜的電腦目錄系統上教育完全困惑的新學生。"
  },
  {
    "word": "education",
    "pos": "n.",
    "cn_def": "教育",
    "en_def": "the process of receiving or giving systematic instruction, especially at a school or university.",
    "sentence": "Acquiring a high-quality university {{BLANK}} is widely considered absolutely vital for eventually securing a completely stable and highly profitable modern career.",
    "cn": "獲得高品質的大學教育被廣泛認為對於最終獲得一份完全穩定且高利潤的現代職業是絕對至關重要的。"
  },
  {
    "word": "educational",
    "pos": "adj.",
    "cn_def": "教育的；有教育意義的",
    "en_def": "relating to the provision of education; intended or serving to educate or enlighten.",
    "sentence": "The long historical movie was certainly highly {{BLANK}}, but unfortunately, absolutely all the young energetic students thought it was incredibly boring.",
    "cn": "這部長篇歷史電影確實高度有教育意義的，但不幸的是，絕對所有年輕充滿活力的學生都認為它極其無聊。"
  },
  {
    "word": "access",
    "pos": "n. / v.",
    "cn_def": "進入（的權利）；存取",
    "en_def": "the means or opportunity to approach or enter a place; to approach or enter.",
    "sentence": "You will definitely need a highly special electronic security card to properly {{BLANK}} this highly restricted and completely secret part of the building.",
    "cn": "你肯定需要一張非常特殊的電子安全卡，才能適當地進入（存取）建築物這個受到高度限制且完全機密的部分。"
  },
  {
    "word": "have completely free access to",
    "pos": "phr.",
    "cn_def": "有權限使用...",
    "en_def": "to have the right or opportunity to use something.",
    "sentence": "Only officially registered university students and strict professors actually {{BLANK}} the massive historical books in the old library.",
    "cn": "只有正式註冊的大學生和嚴格的教授實際上才有權限完全免費使用舊圖書館裡的大量歷史書籍。"
  },
  {
    "word": "gain access to",
    "pos": "phr.",
    "cn_def": "獲得存取/進入權",
    "en_def": "to obtain the ability to enter a place or look at something.",
    "sentence": "The skilled computer hacker unfortunately managed to {{BLANK}} the secure and private national banking system.",
    "cn": "這位技術高超的電腦駭客不幸地設法迅速獲得存取/進入權，進入安全且隱私的國家銀行系統。"
  },
  {
    "word": "accessible",
    "pos": "adj.",
    "cn_def": "易接近的；可使用的",
    "en_def": "able to be reached or entered.",
    "sentence": "The progressive modern city brilliantly ensured that absolutely all highly important public buildings are completely {{BLANK}} to physically disabled citizens in wheelchairs.",
    "cn": "這個進步的現代城市出色地確保了絕對所有極其重要的公共建築，都對坐輪椅的肢體殘疾公民是完全易接近的（可使用的）。"
  },
  {
    "word": "accessibility",
    "pos": "n.",
    "cn_def": "可達性；無障礙",
    "en_def": "the quality of being easy to approach, reach, enter, speak with, or use.",
    "sentence": "Improving the overall physical {{BLANK}} of the terribly designed old train station is undeniably a highly urgent priority for the new city mayor.",
    "cn": "改善設計糟糕的舊火車站整體的實體無障礙（可達性），無疑是新任市長極度緊迫的首要任務。"
  },
  {
    "word": "specialist",
    "pos": "n.",
    "cn_def": "專家；專科醫生",
    "en_def": "a person who concentrates primarily on a particular subject or activity.",
    "sentence": "A highly experienced skin {{BLANK}} at the incredibly busy local hospital desperately tried to quickly find out exactly what was wrong with the poor patient.",
    "cn": "極其繁忙的當地醫院裡一位經驗豐富的皮膚專科醫生拚命試圖迅速查明可憐的病患到底出了什麼問題。"
  },
  {
    "word": "computer specialist",
    "pos": "phr.",
    "cn_def": "電腦專家",
    "en_def": "a person with advanced knowledge of computer systems.",
    "sentence": "Intelligent Fiona is currently studying incredibly hard at the modern university to eventually become a highly paid and totally respected {{BLANK}}.",
    "cn": "聰明的費歐娜目前正在現代化大學裡極其努力地學習，以最終成為一名高薪且完全受人尊敬的電腦專家。"
  },
  {
    "word": "specialize in",
    "pos": "v.",
    "cn_def": "專攻",
    "en_def": "to concentrate on and become expert in a particular subject or skill.",
    "sentence": "That popular and delicious international restaurant specifically chooses to {{BLANK}} spicy and authentic Indian curry dishes.",
    "cn": "那家極受歡迎且美味的國際餐廳，特別聰明地選擇專攻辛辣且道地的印度咖哩菜餚。"
  },
  {
    "word": "expert",
    "pos": "n.",
    "cn_def": "專家",
    "en_def": "a person who is very knowledgeable about or skillful in a particular area.",
    "sentence": "If you struggle with complex legal tax problems, you should consider hiring a trained financial {{BLANK}} immediately.",
    "cn": "如果你正在與複雜的合法稅務問題掙扎，你應該強烈考慮立刻聘請一位受過訓練的財務專家。"
  },
  {
    "word": "specialized",
    "pos": "adj.",
    "cn_def": "專業的",
    "en_def": "requiring or involving detailed and specific knowledge or training.",
    "sentence": "Fixing that rare and expensive vintage sports car requires {{BLANK}} tools that ordinary mechanics do not possess.",
    "cn": "修理那輛罕見且昂貴的復古跑車，嚴格需要普通的技工根本沒有的專業的工具。"
  },
  {
    "word": "imitate",
    "pos": "v.",
    "cn_def": "模仿",
    "en_def": "to copy or simulate.",
    "sentence": "Young children often learn basic social behaviors by trying to {{BLANK}} the actions of their parents.",
    "cn": "幼童通常藉由試著模仿父母的行為來學習基本的社交行為。"
  },
  {
    "word": "imitation",
    "pos": "n.",
    "cn_def": "模仿；仿製品",
    "en_def": "the action of using someone or something as a model.",
    "sentence": "The talented young comedian did an absolutely fantastic and highly entertaining {{BLANK}} of the completely famous pop singer Michael Jackson singing on stage.",
    "cn": "才華洋溢的年輕喜劇演員對完全著名的流行歌手麥可·傑克森在舞台上唱歌進行了絕對美妙且極具娛樂性的模仿。"
  },
  {
    "word": "imitative",
    "pos": "adj.",
    "cn_def": "模仿的",
    "en_def": "copying or following a model or example.",
    "sentence": "Early classical art in that deeply historic region was often heavily {{BLANK}} of the highly complex beautiful styles brought over by the conquering ancient Romans.",
    "cn": "該深具歷史意義地區的早期古典藝術，往往重度模仿的征服的古羅馬人帶來的極其複雜美麗風格。"
  },
  {
    "word": "fake",
    "pos": "adj.",
    "cn_def": "假的",
    "en_def": "not genuine; imitation or counterfeit.",
    "sentence": "The naive tourist foolishly bought what heavily looked like an extremely expensive designer bag, but it completely turned out to clearly be a cheap {{BLANK}} copy.",
    "cn": "天真的遊客愚蠢地買了一個看起來像極其昂貴設計師包的東西，但它完全證明顯然是一個便宜的假的仿製品。"
  },
  {
    "word": "realm",
    "pos": "n.",
    "cn_def": "領域；王國",
    "en_def": "a kingdom; a field or domain of activity or interest.",
    "sentence": "The exciting and fascinating story mainly takes place in a magical {{BLANK}} that is full of strange and dangerous wild creatures.",
    "cn": "刺激且迷人的故事主要發生在一個神奇的領域（王國），那裡充滿了奇怪且危險的野生生物。"
  },
  {
    "word": "magical realm",
    "pos": "phr.",
    "cn_def": "魔法王國",
    "en_def": "a fictional world where magic exists.",
    "sentence": "The brave young hero courageously traveled into a dark and unpredictable {{BLANK}} to successfully save his kidnapped younger brother.",
    "cn": "勇敢的年輕英雄英勇地進入了一個黑暗且不可預測的魔法王國，以成功安全地拯救他被綁架的弟弟。"
  },
  {
    "word": "in the realm of",
    "pos": "phr.",
    "cn_def": "在...領域中",
    "en_def": "within the specific area or field of something.",
    "sentence": "Significant new discoveries {{BLANK}} modern medical science continue to improve human life every single day.",
    "cn": "現代醫學科學領域中的重大新發現，每天都持續改善人類的生活。"
  },
  {
    "word": "kingdom",
    "pos": "n.",
    "cn_def": "王國",
    "en_def": "a country, state, or territory ruled by a king or queen.",
    "sentence": "The benevolent and widely respected old queen ruled her peaceful and wealthy {{BLANK}} for over sixty glorious years.",
    "cn": "真正仁慈且深受廣泛尊敬的老女王，統治她和平且富有的王國超過六十個輝煌的年頭。"
  },
  {
    "word": "domain",
    "pos": "n.",
    "cn_def": "領域；領土",
    "en_def": "an area of territory owned or controlled by a ruler or government; a specified sphere of activity or knowledge.",
    "sentence": "Complex mathematical physics is the specific {{BLANK}} of highly trained scientists, not ordinary people.",
    "cn": "複雜的數學物理是受過高度訓練的科學家的特定領域，而不是一般人的領域。"
  },
  {
    "word": "array",
    "pos": "n.",
    "cn_def": "一系列；陣列",
    "en_def": "an impressive display or range of a particular type of thing.",
    "sentence": "There is a surprisingly wide and impressive {{BLANK}} of brightly colored flowers and useful modern gardening products available at the busy weekend market.",
    "cn": "在繁忙的週末市場上，有著令人驚訝地廣泛且令人難以置信的令人印象深刻的一系列色彩鮮豔的花朵和有用的現代園藝產品直接可用。"
  },
  {
    "word": "an array of",
    "pos": "phr.",
    "cn_def": "一系列",
    "en_def": "a large group of things or people, especially one that is attractive or causes admiration.",
    "sentence": "The massive modern international supermarket proudly offers {{BLANK}} fresh tropical fruits imported from sunny South America.",
    "cn": "這家大型的現代國際超市自豪地提供一系列從陽光充足的南美洲進口的新鮮熱帶水果。"
  },
  {
    "word": "a vast array of",
    "pos": "phr.",
    "cn_def": "大量的一系列",
    "en_def": "a very large and impressive collection or display.",
    "sentence": "The wealthy collector owns {{BLANK}} rare and expensive antique silver coins.",
    "cn": "這位富有的收藏家擁有大量的一系列稀有且昂貴的古董銀幣。"
  },
  {
    "word": "a wide array of",
    "pos": "phr.",
    "cn_def": "廣泛的一系列",
    "en_def": "a broad and diverse collection.",
    "sentence": "To satisfy all its customers, the popular new bakery offers {{BLANK}} sweet and delicious fresh pastries.",
    "cn": "為了滿足所有顧客，這家受歡迎的新麵包店提供各式各樣香甜美味的新鮮糕點。"
  },
  {
    "word": "recreation",
    "pos": "n.",
    "cn_def": "娛樂；消遣",
    "en_def": "activity done for enjoyment when one is not working.",
    "sentence": "The exhausted and stressed workers need adequate time for healthy {{BLANK}} to maintain their mental health.",
    "cn": "疲憊且壓力大的員工需要足夠的時間從事健康的休閒娛樂，以維持心理健康。"
  },
  {
    "word": "recreational",
    "pos": "adj.",
    "cn_def": "娛樂的；休閒的",
    "en_def": "relating to or denoting activity done for enjoyment when one is not working.",
    "sentence": "The modern community center securely provides all sorts of highly exciting {{BLANK}} activities for energetic young children to happily take part in during their free time.",
    "cn": "現代社區中心安全地為精力充沛的幼童提供了各種極其令人興奮的娛樂的活動，讓他們在空閒時間快樂地參與。"
  },
  {
    "word": "recreational activities",
    "pos": "phr.",
    "cn_def": "休閒活動",
    "en_def": "things people do for fun and enjoyment.",
    "sentence": "During the relaxing summer vacation, we enjoy doing fun {{BLANK}} like swimming and reading.",
    "cn": "在輕鬆的暑假期間，我們喜歡從事有趣的休閒活動，例如游泳和閱讀。"
  },
  {
    "word": "create",
    "pos": "v.",
    "cn_def": "創造",
    "en_def": "to bring something into existence.",
    "sentence": "The brilliant and passionate chef constantly manages to {{BLANK}} new and delicious dishes for his wealthy restaurant customers.",
    "cn": "才華洋溢且深具熱情的廚師不斷設法積極地為他富有的餐廳顧客創造全新且美味的菜餚。"
  },
  {
    "word": "creatively",
    "pos": "adj.",
    "cn_def": "有創意的",
    "en_def": "relating to or involving the imagination or original ideas, especially in the production of an artistic work.",
    "sentence": "The {{BLANK}} designer came up with a completely new idea for the poster that nobody had seen before.",
    "cn": "這位有創意的設計師為海報想出了一個從未有人見過的全新點子。"
  },
  {
    "word": "skeptical",
    "pos": "adj.",
    "cn_def": "懷疑的",
    "en_def": "not easily convinced; having doubts or reservations.",
    "sentence": "Highly intelligent Carla is understandably quite {{BLANK}} about her realistic chances of actually getting the highly competitive new office job in the city.",
    "cn": "聰明的卡拉對她實際獲得這份城市中競爭激烈的新辦公室工作的現實機會感到相當懷疑的，這是可以理解的。"
  },
  {
    "word": "skeptic",
    "pos": "n.",
    "cn_def": "懷疑論者",
    "en_def": "a person inclined to question or doubt all accepted opinions.",
    "sentence": "Even the most stubborn {{BLANK}} in the completely quiet room had to finally totally admit that the brilliant new scientific theory actually worked flawlessly.",
    "cn": "即使是安靜的房間裡最固執的懷疑論者，最終也不得不承認這個出色的新科學理論實際上完美無瑕地運作。"
  },
  {
    "word": "skepticism",
    "pos": "n.",
    "cn_def": "懷疑態度",
    "en_def": "a skeptical attitude; doubt as to the truth of something.",
    "sentence": "Despite the government's highly positive official promises, there is still widespread public {{BLANK}} heavily surrounding the complex new economic policy.",
    "cn": "儘管政府有積極的官方承諾，但對於這項複雜的新經濟政策，公眾仍然普遍存在著強烈的懷疑態度。"
  },
  {
    "word": "be highly skeptical about",
    "pos": "phr.",
    "cn_def": "對...感到懷疑",
    "en_def": "to have doubts regarding something.",
    "sentence": "It is absolutely natural to {{BLANK}} surprisingly cheap products sold on the vast internet by completely unknown companies.",
    "cn": "對於在廣闊網路上由完全未知的公司出售的驚人廉價產品對（此）感到高度懷疑是絕對自然的。"
  },
  {
    "word": "doubtful",
    "pos": "adj.",
    "cn_def": "可疑的；懷疑的",
    "en_def": "feeling uncertain about something.",
    "sentence": "Because the sky is incredibly dark and cloudy, it is highly {{BLANK}} that we will safely see the beautiful sun at all today.",
    "cn": "因為天空極其黑暗且多雲，我們今天是否能安全地看到美麗的太陽是高度懷疑的。"
  },
  {
    "word": "distinguished",
    "pos": "v.",
    "cn_def": "區分；分辨",
    "en_def": "to recognize or treat someone or something as different.",
    "sentence": "The completely identical young twins can actually only be successfully {{BLANK}} from one another by carefully looking closely at the specific color of their eyes.",
    "cn": "這對完全同卵的年輕雙胞胎，實際上只能透過仔細近看她們眼睛的特定顏色，才能成功地從彼此中被區分出來。"
  },
  {
    "word": "distinguish between",
    "pos": "phr.",
    "cn_def": "區分（兩者）",
    "en_def": "to recognize the difference between two people or things.",
    "sentence": "Young children must learn to {{BLANK}} right and wrong.",
    "cn": "幼童必須學會分辨是非對錯。"
  },
  {
    "word": "distinguished from",
    "pos": "phr.",
    "cn_def": "區別",
    "en_def": "to show how one thing is different from another.",
    "sentence": "The fascinating tall giraffe is easily {{BLANK}} all other wild animals by its incredibly long neck and unique brown spots.",
    "cn": "迷人的高大長頸鹿很容易透過牠令人難以置信的長脖子和獨特的棕色斑點與所有其他野生動物區別開來。"
  },
  {
    "word": "distinguishable",
    "pos": "adj.",
    "cn_def": "可辨別的",
    "en_def": "clear enough to be recognized or identified as different.",
    "sentence": "The fake painting was barely {{BLANK}} from the original, fooling even the experts.",
    "cn": "這幅假畫與真跡幾乎無法區分，甚至連專家都被騙了。"
  },
  {
    "word": "distinguished",
    "pos": "adj.",
    "cn_def": "卓越的、傑出的、著名的",
    "en_def": "Successful, authoritative, and commanding great respect from others due to excellence.",
    "sentence": "The university invited a {{BLANK}} professor of financial theory to deliver a speech at the summer camp.",
    "cn": "這所大學邀請了一位在金融理論領域卓越的（傑出的）教授在夏令營上發表專題演講。"
  },
  {
    "word": "tell",
    "pos": "v.",
    "cn_def": "看得出、能分辨、知道",
    "en_def": "To know, realize, or judge something correctly based on evidence or signs.",
    "sentence": "I could {{BLANK}} from Chloe's bright smile that she had successfully passed her standardized English exam.",
    "cn": "從克洛伊燦爛的笑容中，我看得出（知道）她已經成功通過了她的標準化英文測驗。"
  },
  {
    "word": "tell a from b",
    "pos": "v. phr.",
    "cn_def": "分辨A與B",
    "en_def": "To distinguish one person or thing from another based on their unique traits.",
    "sentence": "Without looking at the label, it is almost impossible to {{BLANK}} genetically-modified corn.",
    "cn": "如果不看標籤，幾乎不可能分辨有機玉米與基因改造玉米。"
  },
  {
    "word": "tell the difference",
    "pos": "v. phr.",
    "cn_def": "辨別差異、看出不同",
    "en_def": "To recognize or identify how two or more things or people are not the same.",
    "sentence": "The two twin brothers look so much alike that even their classmates can hardly {{BLANK}} between them.",
    "cn": "這對雙胞胎兄弟長得實在太像了，甚至連他們的同班同學都很難辨別他們之間的差異（看出不同）。"
  },
  {
    "word": "make a huge difference",
    "pos": "v. phr.",
    "cn_def": "產生影響、有關係、起作用",
    "en_def": "To have a significant effect, improvement, or influence on a person, situation, or thing.",
    "sentence": "Incorporating interactive web games into the curriculum can truly {{BLANK}} in student motivation.",
    "cn": "將互動式網頁遊戲融入課程中，確實能對學生的學習動機產生巨大的影響（起作用）。"
  }
];

const MCQS = [
  {
    "q": "The speeding sports car was just a fast red ______ as it rapidly drove past the amazed crowd.",
    "options": [
      "domain",
      "blur",
      "landmark",
      "lifespan"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The innovative new science fiction film completely ______ the traditional line between hilarious comedy and serious drama.",
    "options": [
      "encounter",
      "apply",
      "educate",
      "blurs"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Highly realistic modern video games often ______ exciting digital entertainment and real-life physical sports.",
    "options": [
      "specialize in",
      "art form",
      "blur the line between",
      "tell the difference"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Without his expensive prescription glasses, the frustrated student's vision was completely ______ in the bright classroom.",
    "options": [
      "blurred",
      "specialized",
      "engaging",
      "exceptional"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Because the camera lens was incredibly dirty, all the vacation photos turned out to be terribly ______.",
    "options": [
      "revolutionary",
      "enriched",
      "blurry",
      "evolutionary"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Her father's strict moral teachings undoubtedly contributed heavily to the early ______ of her own political beliefs.",
    "options": [
      "facility",
      "formation",
      "facilitator",
      "enrichment"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Anna confidently says that those dark and heavy ______ are a clear sign that a big storm is coming.",
    "options": [
      "exceptional circumstances",
      "an array of",
      "representative of",
      "cloud formation"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The intelligent students decided to officially ______ a dedicated study group to carefully prepare for the difficult final exams.",
    "options": [
      "form",
      "imitate",
      "engage",
      "revolves"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Please fill out this application ______ with your prior work experience before submitting it to the HR manager.",
    "options": [
      "lifespan",
      "imitation",
      "form",
      "landmark"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The university provided financial assistance to the low-income student ______ a monthly scholarship.",
    "options": [
      "in the form of",
      "participate in",
      "make a huge difference",
      "in the realm of"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Photography has been recognized as a serious ______ that can capture deep human emotions.",
    "options": [
      "wander off",
      "art form",
      "sales representative",
      "tell them apart"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Extreme changes in temperature over millions of years led to the ______ of these unique mountain rocks.",
    "options": [
      "destination",
      "enrichment",
      "facilitator",
      "formation"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The mysterious magical creature appeared as a dark, ______ shadow slowly moving across the completely silent room.",
    "options": [
      "engaging",
      "formless",
      "marvelous",
      "distinguishable"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The rapid technological ______ of advanced smartphones has significantly changed how humans quickly communicate with each other.",
    "options": [
      "development",
      "representation",
      "recreation",
      "kingdom"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Our complicated science project eventually ______ into something that was quite remarkably different from what we originally planned.",
    "options": [
      "face",
      "tell",
      "facilitates",
      "evolved"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The fascinating ______ of modern computer technology over the last few decades has completely changed human society.",
    "options": [
      "facilitator",
      "reproduction",
      "evolution",
      "array"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The brilliant biology professor taught a highly complex course about the ______ history of strange deep-sea creatures.",
    "options": [
      "enriching",
      "educational",
      "blurry",
      "evolutionary"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "This highly demanding corporate management job will definitely ______ traveling to many different foreign countries every single month.",
    "options": [
      "facilitates",
      "involve",
      "educate",
      "distinguished"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Marcus decided to ______ the local charity project to help low-income families.",
    "options": [
      "be actively involved in",
      "representative of",
      "engage in",
      "wander off"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The knowledgeable astronomy teacher clearly explained that the Earth naturally ______ around the glowing sun once a year.",
    "options": [
      "tell",
      "evolved",
      "revolves",
      "enrich"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "For the first few months, a new mother's daily schedule will completely ______ her baby's needs.",
    "options": [
      "revolve around",
      "on behalf of",
      "scenic spot",
      "apply for a job"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "It takes about 365 days for the Earth to complete one full ______ around the sun.",
    "options": [
      "participation",
      "revolution",
      "formation",
      "accessibility"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The Industrial ______ in the 18th century completely changed the way goods were manufactured and produced.",
    "options": [
      "representation",
      "application",
      "revolution",
      "engagement"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The research team developed a ______ new medicine that could successfully cure the genetic defect.",
    "options": [
      "wandering",
      "applicable",
      "creatively",
      "revolutionary"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The invention of smartphones has completely ______ the way modern people communicate and access information on demand.",
    "options": [
      "wandered",
      "revolutionized",
      "educate",
      "create"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "I usually manage to sleep very peacefully at night, but last night's terrible loud thunderstorm was a major ______.",
    "options": [
      "exception",
      "enrichment",
      "skepticism",
      "symbol"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Jerry is truly an ______ employee who consistently works incredibly hard and contributes significantly to our modern company.",
    "options": [
      "fake",
      "enriching",
      "exceptional",
      "educational"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The strict international company naturally only tolerates employee lateness in highly ______, such as severe transportation strikes.",
    "options": [
      "span across",
      "Apart from",
      "face-to-face communication",
      "exceptional circumstances"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Because the winter weather was ______ cold, the local government urgently opened extra shelters for the homeless citizens.",
    "options": [
      "recreational",
      "fill in the application form",
      "exceptionally",
      "face"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The brave young firefighter showed truly ______ courage when he bravely ran into the violently burning wooden house.",
    "options": [
      "extraordinary",
      "applicable",
      "representative",
      "imitative"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The terrible economic impact from the sudden financial crisis unfortunately ______ every single dark corner of the struggling economy.",
    "options": [
      "participation",
      "spanned",
      "participant",
      "marvel"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Because of highly advanced modern medicine, the average human ______ has significantly increased over the past entire century.",
    "options": [
      "application",
      "reproduction",
      "facilitator",
      "lifespan"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Teachers frequently complain that young children who constantly watch short internet videos have an incredibly brief ______.",
    "options": [
      "attention span",
      "engaged to",
      "blur the line between",
      "participate in"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The massive new steel bridge was specifically designed to beautifully ______ the incredibly wide and deep river.",
    "options": [
      "be actively involved in",
      "a wide array of",
      "span across",
      "face-to-face communication"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "______ the friendly guy named Fred, clever Janice has also proudly won several expensive prizes for her competitive roller skating.",
    "options": [
      "apply for a school",
      "in the form of",
      "computer specialist",
      "Apart from"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "Because they live in completely different countries, the two loving brothers have sadly lived far ______ for years.",
    "options": [
      "encounter",
      "apart",
      "application",
      "faced with"
    ],
    "answer": 1,
    "vocabIndex": 35
  },
  {
    "q": "The cheap old wooden chair finally began to completely ______ after being left outside in the pouring rain.",
    "options": [
      "fill in the application form",
      "engage in",
      "apply for a scholarship",
      "fall apart"
    ],
    "answer": 3,
    "vocabIndex": 36
  },
  {
    "q": "The curious young boy carefully managed to ______ the broken radio to see exactly how it worked inside.",
    "options": [
      "take apart",
      "recreational activities",
      "exceptional circumstances",
      "Apart from"
    ],
    "answer": 0,
    "vocabIndex": 37
  },
  {
    "q": "The identical twin sisters look so incredibly similar that even their own closest friends cannot ______ easily.",
    "options": [
      "be actively involved in",
      "tell them apart",
      "apply the medical ointment to",
      "magical realm"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "The brand new interactive teaching material specifically ______ incredibly fast and effective learning for the young students in class.",
    "options": [
      "represent",
      "wandered",
      "facilitates",
      "evolved"
    ],
    "answer": 2,
    "vocabIndex": 39
  },
  {
    "q": "The highly trained professional ______ ensured that the difficult business negotiation smoothly proceeded without any angry physical arguments.",
    "options": [
      "recreation",
      "landmark",
      "expert",
      "facilitator"
    ],
    "answer": 3,
    "vocabIndex": 40
  },
  {
    "q": "The highly prestigious international university proudly boasts an incredibly modern sports ______ available for all of its hardworking students.",
    "options": [
      "education",
      "facility",
      "facilitator",
      "evolution"
    ],
    "answer": 1,
    "vocabIndex": 41
  },
  {
    "q": "The massive global trade agreement was ______ by the dedicated efforts of the brilliant foreign political ambassadors.",
    "options": [
      "highly facilitated",
      "distinguish between",
      "scenic spot",
      "representative of"
    ],
    "answer": 0,
    "vocabIndex": 42
  },
  {
    "q": "An exciting weekend trip to the massive city zoo gave little Jim his very first terrifying ______ with dangerous snakes.",
    "options": [
      "landmark",
      "marvel",
      "encounter",
      "specialist"
    ],
    "answer": 2,
    "vocabIndex": 43
  },
  {
    "q": "The project team might ______ some technical difficulties when trying to update the online testing system.",
    "options": [
      "symbolize",
      "encounter",
      "educate",
      "create"
    ],
    "answer": 1,
    "vocabIndex": 44
  },
  {
    "q": "The brave hiker had an incredibly ______ with a massive angry bear while wandering deep in the dark woods.",
    "options": [
      "close encounter",
      "job application",
      "in the form of",
      "apply for a school"
    ],
    "answer": 0,
    "vocabIndex": 45
  },
  {
    "q": "Michelle had a completely ______ with a famous Hollywood movie star while nervously waiting at the busy international airport.",
    "options": [
      "have completely free access to",
      "participate in",
      "unexpected encounter",
      "tourist attraction"
    ],
    "answer": 2,
    "vocabIndex": 46
  },
  {
    "q": "Marcus was surprised to ______ his former English teacher at the Japanese buffet restaurant last night.",
    "options": [
      "apply to",
      "cloud formation",
      "unexpected encounter",
      "bump into"
    ],
    "answer": 3,
    "vocabIndex": 47
  },
  {
    "q": "While traveling in Tokyo, Chloe happened to ______ an old college classmate she hadn't seen for years.",
    "options": [
      "sales representative",
      "run into",
      "gain access to",
      "be actively involved in"
    ],
    "answer": 1,
    "vocabIndex": 48
  },
  {
    "q": "The struggling company will inevitably ______ complete financial disaster if it doesn't quickly improve its terrible daily sales.",
    "options": [
      "face",
      "imitate",
      "educate",
      "symbolize"
    ],
    "answer": 0,
    "vocabIndex": 49
  },
  {
    "q": "When the manufacturing factory closed down, Marcus was ______ the urgent need to find a new job.",
    "options": [
      "face-to-face communication",
      "in the form of",
      "faced with",
      "fill in the application form"
    ],
    "answer": 2,
    "vocabIndex": 50
  },
  {
    "q": "Chloe remained completely calm ______ danger and successfully guided the lost tourists out of the dark cave.",
    "options": [
      "apply for a scholarship",
      "make a huge difference",
      "recreational activities",
      "in the face of"
    ],
    "answer": 3,
    "vocabIndex": 51
  },
  {
    "q": "Although text messages are convenient, ______ is still the best way to resolve serious personal conflicts.",
    "options": [
      "specialize in",
      "fall apart",
      "face-to-face communication",
      "magical realm"
    ],
    "answer": 2,
    "vocabIndex": 52
  },
  {
    "q": "The passionate history teacher uses deeply fascinating traditional stories to perfectly ______ the young students' understanding of ancient cultures.",
    "options": [
      "symbolize",
      "revolutionized",
      "create",
      "enrich"
    ],
    "answer": 3,
    "vocabIndex": 53
  },
  {
    "q": "Joey's wealthy parents constantly took him on lots of educational trips abroad, which definitely brought incredible ______ to his childhood.",
    "options": [
      "symbol",
      "enrichment",
      "imitation",
      "domain"
    ],
    "answer": 1,
    "vocabIndex": 54
  },
  {
    "q": "This completely healthy and delicious morning bread is specially ______ with extremely vital vitamins and important natural minerals.",
    "options": [
      "enriched",
      "distinguishable",
      "accessible",
      "skeptical"
    ],
    "answer": 0,
    "vocabIndex": 55
  },
  {
    "q": "Volunteering at the crowded local animal shelter was a deeply ______ experience that taught the teenager absolute responsibility.",
    "options": [
      "skeptical",
      "educational",
      "applicable",
      "enriching"
    ],
    "answer": 3,
    "vocabIndex": 56
  },
  {
    "q": "My knowledgeable grandfather always happily says that modern smart mobile phones are a truly incredible ______ of advanced modern technology.",
    "options": [
      "expert",
      "marvel",
      "domain",
      "skeptic"
    ],
    "answer": 1,
    "vocabIndex": 57
  },
  {
    "q": "The romantic young couple silently stood outside to completely ______ the breathtaking beauty of the incredibly bright shining stars.",
    "options": [
      "marvel at",
      "wander around",
      "attention span",
      "art form"
    ],
    "answer": 0,
    "vocabIndex": 58
  },
  {
    "q": "The famous restaurant serves absolutely ______ food that consistently attracts incredibly hungry and excited customers from all over the city.",
    "options": [
      "blurry",
      "creatively",
      "marvelous",
      "extraordinary"
    ],
    "answer": 2,
    "vocabIndex": 59
  },
  {
    "q": "The highly talented classical piano player performed so ______ that the completely amazed audience loudly cheered for several long minutes.",
    "options": [
      "marvelously",
      "reproduce",
      "blur the line between",
      "apply for a job"
    ],
    "answer": 0,
    "vocabIndex": 60
  },
  {
    "q": "The colorful new fantasy video game was so deeply ______ that I completely lost track of the entire long afternoon.",
    "options": [
      "blurry",
      "engaging",
      "specialized",
      "fake"
    ],
    "answer": 1,
    "vocabIndex": 61
  },
  {
    "q": "The passionate teacher uses completely fun and interactive daily activities to successfully ______ her easily distracted and highly energetic students.",
    "options": [
      "enrich",
      "tell",
      "revolutionized",
      "engage"
    ],
    "answer": 3,
    "vocabIndex": 62
  },
  {
    "q": "The incredibly tired manager was entirely too distracted to properly ______ their complex conversation about the new financial project.",
    "options": [
      "be highly skeptical about",
      "scenic spot",
      "engage in",
      "on behalf of"
    ],
    "answer": 2,
    "vocabIndex": 63
  },
  {
    "q": "After dating happily for over five years, Marcus announced that he was ______ Chloe.",
    "options": [
      "on behalf of",
      "engaged to",
      "engage in",
      "tourist attraction"
    ],
    "answer": 1,
    "vocabIndex": 64
  },
  {
    "q": "The research team is currently ______ a long-term scientific study regarding genetic defects.",
    "options": [
      "engaged in",
      "participate in",
      "revolve around",
      "exceptional circumstances"
    ],
    "answer": 0,
    "vocabIndex": 65
  },
  {
    "q": "Doctors strongly recommend that elderly people ______ light regular exercise to keep their hearts healthy.",
    "options": [
      "specialize in",
      "exceptional circumstances",
      "in the face of",
      "engage in"
    ],
    "answer": 3,
    "vocabIndex": 66
  },
  {
    "q": "After dating for five wonderful years, the truly happy couple finally announced their incredibly exciting official romantic ______.",
    "options": [
      "expert",
      "recreation",
      "engagement",
      "blur"
    ],
    "answer": 2,
    "vocabIndex": 67
  },
  {
    "q": "The experienced English teacher designed an ______ web-based game that kept the students motivated to practice spelling.",
    "options": [
      "representative",
      "engaging",
      "distinguishable",
      "educational"
    ],
    "answer": 1,
    "vocabIndex": 68
  },
  {
    "q": "Marcus encourages his children to ______ outdoor sports to stay healthy and build a strong character.",
    "options": [
      "in the face of",
      "engaged in",
      "take part in",
      "face-to-face communication"
    ],
    "answer": 2,
    "vocabIndex": 69
  },
  {
    "q": "Hundreds of international students from Taipei decided to ______ the summer English camp last year.",
    "options": [
      "participate in",
      "highly facilitated",
      "make a huge difference",
      "have completely free access to"
    ],
    "answer": 0,
    "vocabIndex": 70
  },
  {
    "q": "Each ______ in the financial investment seminar will receive a professional certificate after completing the course.",
    "options": [
      "lifespan",
      "access",
      "blur",
      "participant"
    ],
    "answer": 3,
    "vocabIndex": 71
  },
  {
    "q": "Active ______ in classroom discussions is highly valued and will count toward your final grade.",
    "options": [
      "development",
      "expert",
      "participation",
      "engagement"
    ],
    "answer": 2,
    "vocabIndex": 72
  },
  {
    "q": "The highly polite and naturally ______ young man easily made a completely wonderful first impression on his strict future boss.",
    "options": [
      "charming",
      "skeptical",
      "revolutionary",
      "marvelous"
    ],
    "answer": 0,
    "vocabIndex": 73
  },
  {
    "q": "This highly advanced and incredibly expensive office photocopier can accurately ______ beautiful and complex color photographs in just a few seconds.",
    "options": [
      "represent",
      "enrich",
      "symbolize",
      "reproduce"
    ],
    "answer": 3,
    "vocabIndex": 74
  },
  {
    "q": "The historical museum beautifully proudly displays a highly perfect ______ of an extremely famous ancient Roman statue for curious tourists.",
    "options": [
      "imitation",
      "reproduction",
      "spanned",
      "accessibility"
    ],
    "answer": 1,
    "vocabIndex": 75
  },
  {
    "q": "The brilliant scientist passionately studies the incredibly complex ______ cycle of several completely rare and highly endangered exotic wild birds.",
    "options": [
      "reproductive",
      "applicable",
      "blurred",
      "skeptical"
    ],
    "answer": 0,
    "vocabIndex": 76
  },
  {
    "q": "The highly efficient new factory uses heavily automated machines to quickly ______ thousands of extremely cheap plastic toys every day.",
    "options": [
      "blurs",
      "enrich",
      "symbolize",
      "produce"
    ],
    "answer": 3,
    "vocabIndex": 77
  },
  {
    "q": "The highly powerful Hollywood ______ angrily demanded that the nervous director drastically change the boring ending of the movie.",
    "options": [
      "exception",
      "facilitator",
      "producer",
      "lifespan"
    ],
    "answer": 2,
    "vocabIndex": 78
  },
  {
    "q": "His massive financial success as a dedicated businessman is highly ______ of exactly what extremely hard work can accomplish.",
    "options": [
      "engaging",
      "representative",
      "enriched",
      "extraordinary"
    ],
    "answer": 1,
    "vocabIndex": 79
  },
  {
    "q": "At the massive international trade show, Shawn confidently acted as a highly professional ______ this growing global technology company.",
    "options": [
      "bump into",
      "specialize in",
      "representative of",
      "exceptional circumstances"
    ],
    "answer": 2,
    "vocabIndex": 80
  },
  {
    "q": "The highly skilled and incredibly expensive lawyer will formally ______ the totally innocent man during the highly publicized and stressful trial.",
    "options": [
      "represent",
      "produce",
      "imitate",
      "apply"
    ],
    "answer": 0,
    "vocabIndex": 81
  },
  {
    "q": "The community strongly demands completely fair and deeply equal political ______ in the highly powerful national government without any hesitation.",
    "options": [
      "development",
      "accessibility",
      "reproduction",
      "representation"
    ],
    "answer": 3,
    "vocabIndex": 82
  },
  {
    "q": "The enthusiastic and highly persuasive ______ cleverly managed to quickly sell the incredibly expensive new software to the hesitant client.",
    "options": [
      "art form",
      "sales representative",
      "be highly skeptical about",
      "wander around"
    ],
    "answer": 1,
    "vocabIndex": 83
  },
  {
    "q": "Chloe accepted the professional teaching award ______ the entire English department.",
    "options": [
      "on behalf of",
      "apply to",
      "tourist destination",
      "engaged in"
    ],
    "answer": 0,
    "vocabIndex": 84
  },
  {
    "q": "In the field of digital media, the letters OTT ______ \"Over-The-Top\" streaming services.",
    "options": [
      "in the form of",
      "tourist attraction",
      "computer specialist",
      "stand for"
    ],
    "answer": 3,
    "vocabIndex": 85
  },
  {
    "q": "In many fantasy novels, the white horse is used to ______ purity, justice, and absolute goodness.",
    "options": [
      "apply",
      "represent",
      "symbolize",
      "blurs"
    ],
    "answer": 2,
    "vocabIndex": 86
  },
  {
    "q": "The dove has long been recognized globally as a universal ______ of peace and unbiased harmony.",
    "options": [
      "participant",
      "symbol",
      "realm",
      "lifespan"
    ],
    "answer": 1,
    "vocabIndex": 87
  },
  {
    "q": "The lighting of the Olympic flame is deeply ______ unity and friendship among different nations.",
    "options": [
      "symbolic of",
      "apply for a job",
      "run into",
      "exceptional circumstances"
    ],
    "answer": 0,
    "vocabIndex": 88
  },
  {
    "q": "Belize is widely famous globally as a relatively cheap vacation ______ featuring truly great ocean diving and completely beautiful relaxing beaches.",
    "options": [
      "lifespan",
      "destination",
      "domain",
      "symbol"
    ],
    "answer": 1,
    "vocabIndex": 89
  },
  {
    "q": "The incredibly historic and perfectly preserved ancient European city remains an extremely popular ______ for completely eager international travelers.",
    "options": [
      "job application",
      "sales representative",
      "revolve around",
      "tourist destination"
    ],
    "answer": 3,
    "vocabIndex": 90
  },
  {
    "q": "Taipei 101 is a world-famous ______ that draws millions of international visitors to Taiwan every year.",
    "options": [
      "take part in",
      "stand for",
      "tourist attraction",
      "a vast array of"
    ],
    "answer": 2,
    "vocabIndex": 91
  },
  {
    "q": "The historic red brick station building serves as a major ______ in the center of Tokyo.",
    "options": [
      "landmark",
      "blur",
      "producer",
      "access"
    ],
    "answer": 0,
    "vocabIndex": 92
  },
  {
    "q": "The mountain hot spring resort is a popular ______ where travelers can enjoy beautiful lake views.",
    "options": [
      "run into",
      "engage in",
      "stand for",
      "scenic spot"
    ],
    "answer": 3,
    "vocabIndex": 93
  },
  {
    "q": "Completely lost Shawn sadly ______ the dark and rainy city streets, having absolutely no idea where he actually needed to securely go.",
    "options": [
      "represent",
      "wandered",
      "produce",
      "symbolize"
    ],
    "answer": 1,
    "vocabIndex": 94
  },
  {
    "q": "Irresponsible parents should never allow their energetic young children to ______ alone in the massive park.",
    "options": [
      "representative of",
      "bump into",
      "wander off",
      "revolve around"
    ],
    "answer": 2,
    "vocabIndex": 95
  },
  {
    "q": "The lonely ______ dog desperately searched the completely empty alleyways for absolutely any small scraps of leftover human food.",
    "options": [
      "marvelous",
      "charming",
      "enriched",
      "wandering"
    ],
    "answer": 3,
    "vocabIndex": 96
  },
  {
    "q": "During our relaxing summer vacation, we decided to ______ the charming old town for hours.",
    "options": [
      "wander around",
      "wander off",
      "job application",
      "revolve around"
    ],
    "answer": 0,
    "vocabIndex": 97
  },
  {
    "q": "If you genuinely want this highly competitive internship, you absolutely must completely ______ for it before the incredibly strict Friday deadline.",
    "options": [
      "involve",
      "blurs",
      "apply",
      "represent"
    ],
    "answer": 2,
    "vocabIndex": 98
  },
  {
    "q": "This complex new mechanical tool that has just recently been invented actually has many completely different and highly useful practical ______.",
    "options": [
      "encounter",
      "application",
      "domain",
      "revolution"
    ],
    "answer": 1,
    "vocabIndex": 99
  },
  {
    "q": "Nadia confidently gave her detailed ______ to the busy secretary and was completely surprisingly soon called back for a formal interview.",
    "options": [
      "run into",
      "unexpected encounter",
      "face-to-face communication",
      "job application"
    ],
    "answer": 3,
    "vocabIndex": 100
  },
  {
    "q": "Please remember to ______ completely before submitting your resume to the HR manager.",
    "options": [
      "apply the medical ointment to",
      "fill in the application form",
      "revolve around",
      "close encounter"
    ],
    "answer": 1,
    "vocabIndex": 101
  },
  {
    "q": "The strict international technology company received over five hundred impressive resumes from incredibly hopeful ______ for the single management position.",
    "options": [
      "producer",
      "domain",
      "applicant",
      "encounter"
    ],
    "answer": 2,
    "vocabIndex": 102
  },
  {
    "q": "The complex safety rules carefully described in this completely detailed manual are strictly ______ to absolutely everyone working in the busy factory.",
    "options": [
      "applicable",
      "reproductive",
      "creatively",
      "extraordinary"
    ],
    "answer": 0,
    "vocabIndex": 103
  },
  {
    "q": "Marcus decided to ______ at the new technology firm located in the Daan district.",
    "options": [
      "apply to",
      "tourist attraction",
      "take apart",
      "apply for a job"
    ],
    "answer": 3,
    "vocabIndex": 104
  },
  {
    "q": "Before you ______ abroad, you must achieve a high score on standardized English exams like the TOEFL.",
    "options": [
      "in the form of",
      "engage in",
      "apply for a school",
      "exceptional circumstances"
    ],
    "answer": 2,
    "vocabIndex": 105
  },
  {
    "q": "Since her family was low-income, Chloe had to ______ to cover her university tuition fees.",
    "options": [
      "highly facilitated",
      "apply for a scholarship",
      "marvel at",
      "Apart from"
    ],
    "answer": 1,
    "vocabIndex": 106
  },
  {
    "q": "The new safety regulations regarding school field trips ______ all educational institutions in Taiwan.",
    "options": [
      "apply to",
      "span across",
      "exceptional circumstances",
      "art form"
    ],
    "answer": 0,
    "vocabIndex": 107
  },
  {
    "q": "This interactive vocabulary ______ allows students to track their test performance and practice spelling on mobile phones.",
    "options": [
      "representation",
      "blur",
      "exception",
      "application"
    ],
    "answer": 3,
    "vocabIndex": 108
  },
  {
    "q": "You should gently ______ your shoulders to ease the pain from the severe sunburn.",
    "options": [
      "unexpected encounter",
      "fall apart",
      "apply the medical ointment to",
      "gain access to"
    ],
    "answer": 2,
    "vocabIndex": 109
  },
  {
    "q": "The highly passionate librarian tirelessly worked to properly ______ the completely confused new students on the complex computer catalog system.",
    "options": [
      "form",
      "educate",
      "wandered",
      "imitate"
    ],
    "answer": 1,
    "vocabIndex": 110
  },
  {
    "q": "Acquiring a high-quality university ______ is widely considered absolutely vital for eventually securing a completely stable and highly profitable modern career.",
    "options": [
      "education",
      "engagement",
      "destination",
      "enrichment"
    ],
    "answer": 0,
    "vocabIndex": 111
  },
  {
    "q": "The long historical movie was certainly highly ______, but unfortunately, absolutely all the young energetic students thought it was incredibly boring.",
    "options": [
      "imitative",
      "educational",
      "creatively",
      "blurred"
    ],
    "answer": 1,
    "vocabIndex": 112
  },
  {
    "q": "You will definitely need a highly special electronic security card to properly ______ this highly restricted and completely secret part of the building.",
    "options": [
      "access",
      "form",
      "representation",
      "landmark"
    ],
    "answer": 0,
    "vocabIndex": 113
  },
  {
    "q": "Only officially registered university students and strict professors actually ______ the massive historical books in the old library.",
    "options": [
      "faced with",
      "apply for a school",
      "have completely free access to",
      "apply for a job"
    ],
    "answer": 2,
    "vocabIndex": 114
  },
  {
    "q": "The skilled computer hacker unfortunately managed to ______ the secure and private national banking system.",
    "options": [
      "magical realm",
      "in the face of",
      "scenic spot",
      "gain access to"
    ],
    "answer": 3,
    "vocabIndex": 115
  },
  {
    "q": "The progressive modern city brilliantly ensured that absolutely all highly important public buildings are completely ______ to physically disabled citizens in wheelchairs.",
    "options": [
      "distinguishable",
      "accessible",
      "formless",
      "engaging"
    ],
    "answer": 1,
    "vocabIndex": 116
  },
  {
    "q": "Improving the overall physical ______ of the terribly designed old train station is undeniably a highly urgent priority for the new city mayor.",
    "options": [
      "skeptic",
      "participant",
      "accessibility",
      "development"
    ],
    "answer": 2,
    "vocabIndex": 117
  },
  {
    "q": "A highly experienced skin ______ at the incredibly busy local hospital desperately tried to quickly find out exactly what was wrong with the poor patient.",
    "options": [
      "accessibility",
      "evolution",
      "skepticism",
      "specialist"
    ],
    "answer": 3,
    "vocabIndex": 118
  },
  {
    "q": "Intelligent Fiona is currently studying incredibly hard at the modern university to eventually become a highly paid and totally respected ______.",
    "options": [
      "computer specialist",
      "job application",
      "participate in",
      "an array of"
    ],
    "answer": 0,
    "vocabIndex": 119
  },
  {
    "q": "That popular and delicious international restaurant specifically chooses to ______ spicy and authentic Indian curry dishes.",
    "options": [
      "scenic spot",
      "fall apart",
      "span across",
      "specialize in"
    ],
    "answer": 3,
    "vocabIndex": 120
  },
  {
    "q": "If you struggle with complex legal tax problems, you should consider hiring a trained financial ______ immediately.",
    "options": [
      "specialist",
      "application",
      "expert",
      "participation"
    ],
    "answer": 2,
    "vocabIndex": 121
  },
  {
    "q": "Fixing that rare and expensive vintage sports car requires ______ tools that ordinary mechanics do not possess.",
    "options": [
      "specialized",
      "charming",
      "extraordinary",
      "marvelous"
    ],
    "answer": 0,
    "vocabIndex": 122
  },
  {
    "q": "Young children often learn basic social behaviors by trying to ______ the actions of their parents.",
    "options": [
      "involve",
      "imitate",
      "revolves",
      "reproduce"
    ],
    "answer": 1,
    "vocabIndex": 123
  },
  {
    "q": "The talented young comedian did an absolutely fantastic and highly entertaining ______ of the completely famous pop singer Michael Jackson singing on stage.",
    "options": [
      "imitation",
      "reproduction",
      "expert",
      "form"
    ],
    "answer": 0,
    "vocabIndex": 124
  },
  {
    "q": "Early classical art in that deeply historic region was often heavily ______ of the highly complex beautiful styles brought over by the conquering ancient Romans.",
    "options": [
      "fake",
      "imitative",
      "extraordinary",
      "blurred"
    ],
    "answer": 1,
    "vocabIndex": 125
  },
  {
    "q": "The naive tourist foolishly bought what heavily looked like an extremely expensive designer bag, but it completely turned out to clearly be a cheap ______ copy.",
    "options": [
      "engaging",
      "representative",
      "fake",
      "blurry"
    ],
    "answer": 2,
    "vocabIndex": 126
  },
  {
    "q": "The exciting and fascinating story mainly takes place in a magical ______ that is full of strange and dangerous wild creatures.",
    "options": [
      "landmark",
      "exception",
      "enrichment",
      "realm"
    ],
    "answer": 3,
    "vocabIndex": 127
  },
  {
    "q": "The brave young hero courageously traveled into a dark and unpredictable ______ to successfully save his kidnapped younger brother.",
    "options": [
      "magical realm",
      "take part in",
      "participate in",
      "unexpected encounter"
    ],
    "answer": 0,
    "vocabIndex": 128
  },
  {
    "q": "Significant new discoveries ______ modern medical science continue to improve human life every single day.",
    "options": [
      "wander around",
      "art form",
      "apply to",
      "in the realm of"
    ],
    "answer": 3,
    "vocabIndex": 129
  },
  {
    "q": "The benevolent and widely respected old queen ruled her peaceful and wealthy ______ for over sixty glorious years.",
    "options": [
      "expert",
      "kingdom",
      "form",
      "realm"
    ],
    "answer": 1,
    "vocabIndex": 130
  },
  {
    "q": "Complex mathematical physics is the specific ______ of highly trained scientists, not ordinary people.",
    "options": [
      "recreation",
      "specialist",
      "domain",
      "development"
    ],
    "answer": 2,
    "vocabIndex": 131
  },
  {
    "q": "There is a surprisingly wide and impressive ______ of brightly colored flowers and useful modern gardening products available at the busy weekend market.",
    "options": [
      "array",
      "exception",
      "kingdom",
      "accessibility"
    ],
    "answer": 0,
    "vocabIndex": 132
  },
  {
    "q": "The massive modern international supermarket proudly offers ______ fresh tropical fruits imported from sunny South America.",
    "options": [
      "wander around",
      "an array of",
      "span across",
      "take part in"
    ],
    "answer": 1,
    "vocabIndex": 133
  },
  {
    "q": "The wealthy collector owns ______ rare and expensive antique silver coins.",
    "options": [
      "wander around",
      "specialize in",
      "a vast array of",
      "close encounter"
    ],
    "answer": 2,
    "vocabIndex": 134
  },
  {
    "q": "To satisfy all its customers, the popular new bakery offers ______ sweet and delicious fresh pastries.",
    "options": [
      "engage in",
      "magical realm",
      "specialize in",
      "a wide array of"
    ],
    "answer": 3,
    "vocabIndex": 135
  },
  {
    "q": "The exhausted and stressed workers need adequate time for healthy ______ to maintain their mental health.",
    "options": [
      "recreation",
      "engagement",
      "array",
      "marvel"
    ],
    "answer": 0,
    "vocabIndex": 136
  },
  {
    "q": "The modern community center securely provides all sorts of highly exciting ______ activities for energetic young children to happily take part in during their free time.",
    "options": [
      "accessible",
      "educational",
      "representative",
      "recreational"
    ],
    "answer": 3,
    "vocabIndex": 137
  },
  {
    "q": "During the relaxing summer vacation, we enjoy doing fun ______ like swimming and reading.",
    "options": [
      "make a huge difference",
      "recreational activities",
      "engage in",
      "be highly skeptical about"
    ],
    "answer": 1,
    "vocabIndex": 138
  },
  {
    "q": "The brilliant and passionate chef constantly manages to ______ new and delicious dishes for his wealthy restaurant customers.",
    "options": [
      "revolves",
      "evolved",
      "create",
      "wandered"
    ],
    "answer": 2,
    "vocabIndex": 139
  },
  {
    "q": "The ______ designer came up with a completely new idea for the poster that nobody had seen before.",
    "options": [
      "creatively",
      "revolutionary",
      "recreational",
      "exceptional"
    ],
    "answer": 0,
    "vocabIndex": 140
  },
  {
    "q": "Highly intelligent Carla is understandably quite ______ about her realistic chances of actually getting the highly competitive new office job in the city.",
    "options": [
      "representative",
      "skeptical",
      "formless",
      "marvelous"
    ],
    "answer": 1,
    "vocabIndex": 141
  },
  {
    "q": "Even the most stubborn ______ in the completely quiet room had to finally totally admit that the brilliant new scientific theory actually worked flawlessly.",
    "options": [
      "symbol",
      "expert",
      "skeptic",
      "lifespan"
    ],
    "answer": 2,
    "vocabIndex": 142
  },
  {
    "q": "Despite the government's highly positive official promises, there is still widespread public ______ heavily surrounding the complex new economic policy.",
    "options": [
      "education",
      "destination",
      "exception",
      "skepticism"
    ],
    "answer": 3,
    "vocabIndex": 143
  },
  {
    "q": "It is absolutely natural to ______ surprisingly cheap products sold on the vast internet by completely unknown companies.",
    "options": [
      "unexpected encounter",
      "on behalf of",
      "be highly skeptical about",
      "distinguished from"
    ],
    "answer": 2,
    "vocabIndex": 144
  },
  {
    "q": "Because the sky is incredibly dark and cloudy, it is highly ______ that we will safely see the beautiful sun at all today.",
    "options": [
      "representative",
      "doubtful",
      "evolutionary",
      "enriched"
    ],
    "answer": 1,
    "vocabIndex": 145
  },
  {
    "q": "The completely identical young twins can actually only be successfully ______ from one another by carefully looking closely at the specific color of their eyes.",
    "options": [
      "represent",
      "reproduce",
      "blurs",
      "distinguished"
    ],
    "answer": 3,
    "vocabIndex": 146
  },
  {
    "q": "Young children must learn to ______ right and wrong.",
    "options": [
      "distinguish between",
      "engage in",
      "recreational activities",
      "marvel at"
    ],
    "answer": 0,
    "vocabIndex": 147
  },
  {
    "q": "The fascinating tall giraffe is easily ______ all other wild animals by its incredibly long neck and unique brown spots.",
    "options": [
      "take apart",
      "close encounter",
      "distinguished from",
      "in the form of"
    ],
    "answer": 2,
    "vocabIndex": 148
  },
  {
    "q": "The fake painting was barely ______ from the original, fooling even the experts.",
    "options": [
      "revolutionary",
      "distinguished",
      "enriching",
      "distinguishable"
    ],
    "answer": 3,
    "vocabIndex": 149
  },
  {
    "q": "The university invited a ______ professor of financial theory to deliver a speech at the summer camp.",
    "options": [
      "doubtful",
      "distinguished",
      "formless",
      "distinguishable"
    ],
    "answer": 1,
    "vocabIndex": 150
  },
  {
    "q": "I could ______ from Chloe's bright smile that she had successfully passed her standardized English exam.",
    "options": [
      "tell",
      "engage",
      "create",
      "imitate"
    ],
    "answer": 0,
    "vocabIndex": 151
  },
  {
    "q": "Without looking at the label, it is almost impossible to ______ genetically-modified corn.",
    "options": [
      "fall apart",
      "tell a from b",
      "apply for a job",
      "have completely free access to"
    ],
    "answer": 1,
    "vocabIndex": 152
  },
  {
    "q": "The two twin brothers look so much alike that even their classmates can hardly ______ between them.",
    "options": [
      "engaged to",
      "participate in",
      "tell the difference",
      "in the face of"
    ],
    "answer": 2,
    "vocabIndex": 153
  },
  {
    "q": "Incorporating interactive web games into the curriculum can truly ______ in student motivation.",
    "options": [
      "make a huge difference",
      "tourist destination",
      "apply to",
      "in the face of"
    ],
    "answer": 0,
    "vocabIndex": 154
  }
];

const LOOKUP = {
  "blur": {
    "pos": "n.",
    "en_def": "a thing that cannot be seen or heard clearly.",
    "cn_def": "模糊不清的事物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thing that cannot be seen or heard clearly.",
        "cn_def": "模糊不清的事物"
      },
      {
        "pos": "v.",
        "en_def": "to make or become unclear or less distinct.",
        "cn_def": "使模糊"
      }
    ]
  },
  "blurs": {
    "pos": "v.",
    "en_def": "to make or become unclear or less distinct.",
    "cn_def": "使模糊",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make or become unclear or less distinct.",
        "cn_def": "使模糊"
      }
    ]
  },
  "blur the line between": {
    "pos": "phr.",
    "en_def": "to make it difficult to distinguish between two different things.",
    "cn_def": "模糊...之間的界線",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make it difficult to distinguish between two different things.",
        "cn_def": "模糊...之間的界線"
      }
    ]
  },
  "blurred": {
    "pos": "adj.",
    "en_def": "unable to see or be seen clearly.",
    "cn_def": "模糊不清的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "unable to see or be seen clearly.",
        "cn_def": "模糊不清的"
      }
    ]
  },
  "blurry": {
    "pos": "adj.",
    "en_def": "lacking clear definition or focus.",
    "cn_def": "模糊的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "lacking clear definition or focus.",
        "cn_def": "模糊的"
      }
    ]
  },
  "formation": {
    "pos": "n.",
    "en_def": "the action of forming or process of being formed.",
    "cn_def": "形成；構成",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of forming or process of being formed.",
        "cn_def": "形成；構成"
      },
      {
        "pos": "n. [U, C]",
        "en_def": "The process of bringing something into existence, or the specific way things are arranged.",
        "cn_def": "形成、構成；隊形、排列"
      }
    ]
  },
  "cloud formation": {
    "pos": "phr.",
    "en_def": "the arrangement or structure of clouds in the sky.",
    "cn_def": "雲層結構",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the arrangement or structure of clouds in the sky.",
        "cn_def": "雲層結構"
      }
    ]
  },
  "form": {
    "pos": "v.",
    "en_def": "to bring together parts or combine to create; the visible shape or configuration of something.",
    "cn_def": "形成；形狀",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to bring together parts or combine to create; the visible shape or configuration of something.",
        "cn_def": "形成；形狀"
      },
      {
        "pos": "n. [C]",
        "en_def": "A type, kind, or appearance of something; or a document with blanks to fill in.",
        "cn_def": "形式、類型；表格"
      }
    ]
  },
  "in the form of": {
    "pos": "phr.",
    "en_def": "Having the shape, type, or appearance of a specific thing.",
    "cn_def": "以…的形式、以…的方式",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Having the shape, type, or appearance of a specific thing.",
        "cn_def": "以…的形式、以…的方式"
      }
    ]
  },
  "art form": {
    "pos": "n. [C]",
    "en_def": "An activity or a field of expression that is considered a type of art, such as painting or dance.",
    "cn_def": "藝術形式",
    "combined": [
      {
        "pos": "n. [C]",
        "en_def": "An activity or a field of expression that is considered a type of art, such as painting or dance.",
        "cn_def": "藝術形式"
      }
    ]
  },
  "formless": {
    "pos": "adj.",
    "en_def": "without a clear or definite shape or structure.",
    "cn_def": "無定形的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "without a clear or definite shape or structure.",
        "cn_def": "無定形的"
      }
    ]
  },
  "development": {
    "pos": "n.",
    "en_def": "the process of developing or being developed.",
    "cn_def": "發展",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the process of developing or being developed.",
        "cn_def": "發展"
      }
    ]
  },
  "evolve": {
    "pos": "v.",
    "en_def": "to develop gradually, especially from a simple to a more complex form.",
    "cn_def": "演變；進化",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to develop gradually, especially from a simple to a more complex form.",
        "cn_def": "演變；進化"
      }
    ]
  },
  "evolved": {
    "pos": "v.",
    "en_def": "to develop gradually, especially from a simple to a more complex form.",
    "cn_def": "演變；進化",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to develop gradually, especially from a simple to a more complex form.",
        "cn_def": "演變；進化"
      }
    ]
  },
  "evolution": {
    "pos": "n.",
    "en_def": "the gradual development of something, especially from a simple to a more complex form.",
    "cn_def": "演化；發展",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the gradual development of something, especially from a simple to a more complex form.",
        "cn_def": "演化；發展"
      }
    ]
  },
  "evolutionary": {
    "pos": "adj.",
    "en_def": "relating to the gradual development of something.",
    "cn_def": "演化的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to the gradual development of something.",
        "cn_def": "演化的"
      }
    ]
  },
  "involve": {
    "pos": "v.",
    "en_def": "to have or include something as a necessary part.",
    "cn_def": "包含；牽涉",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to have or include something as a necessary part.",
        "cn_def": "包含；牽涉"
      }
    ]
  },
  "be involved in": {
    "pos": "v. phr.",
    "en_def": "To take part in an activity, event, or situation, or to be deeply connected with it.",
    "cn_def": "參與…、涉入…、捲入…",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To take part in an activity, event, or situation, or to be deeply connected with it.",
        "cn_def": "參與…、涉入…、捲入…"
      }
    ]
  },
  "be actively involved in": {
    "pos": "v. phr.",
    "en_def": "To take part in an activity, event, or situation, or to be deeply connected with it.",
    "cn_def": "參與…、涉入…、捲入…",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To take part in an activity, event, or situation, or to be deeply connected with it.",
        "cn_def": "參與…、涉入…、捲入…"
      }
    ]
  },
  "revolves": {
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
  "revolve around": {
    "pos": "v. phr.",
    "en_def": "To move in a circular path around a central object; or to have something as the main interest or focus.",
    "cn_def": "圍繞…旋轉、以…為中心",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To move in a circular path around a central object; or to have something as the main interest or focus.",
        "cn_def": "圍繞…旋轉、以…為中心"
      }
    ]
  },
  "revolution": {
    "pos": "n. [C, U]",
    "en_def": "A complete circular movement made by an object around a central point.",
    "cn_def": "環繞、旋轉、公轉",
    "combined": [
      {
        "pos": "n. [C, U]",
        "en_def": "A complete circular movement made by an object around a central point.",
        "cn_def": "環繞、旋轉、公轉"
      },
      {
        "pos": "n. [C, U]",
        "en_def": "A violent or total change in a country's political system, or a major change in ideas or methods.",
        "cn_def": "革命、重大變革"
      }
    ]
  },
  "revolutionary": {
    "pos": "adj.",
    "en_def": "Involving or causing a complete and dramatic change in ideas, methods, or systems.",
    "cn_def": "革命性的、突破性的、大變革的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Involving or causing a complete and dramatic change in ideas, methods, or systems.",
        "cn_def": "革命性的、突破性的、大變革的"
      }
    ]
  },
  "revolutionized": {
    "pos": "v.",
    "en_def": "To completely change the way something is done, built, or thought about.",
    "cn_def": "徹底改變、改革、帶來革命性變革",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To completely change the way something is done, built, or thought about.",
        "cn_def": "徹底改變、改革、帶來革命性變革"
      }
    ]
  },
  "revolutionize": {
    "pos": "v.",
    "en_def": "To completely change the way something is done, built, or thought about.",
    "cn_def": "徹底改變、改革、帶來革命性變革",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To completely change the way something is done, built, or thought about.",
        "cn_def": "徹底改變、改革、帶來革命性變革"
      }
    ]
  },
  "exception": {
    "pos": "n.",
    "en_def": "a person or thing that is excluded from a general statement or does not follow a rule.",
    "cn_def": "例外",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or thing that is excluded from a general statement or does not follow a rule.",
        "cn_def": "例外"
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
  "exceptional circumstances": {
    "pos": "phr.",
    "en_def": "highly unusual or uncommon situations.",
    "cn_def": "例外情況",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "highly unusual or uncommon situations.",
        "cn_def": "例外情況"
      }
    ]
  },
  "exceptionally": {
    "pos": "adv.",
    "en_def": "to a greater degree than normal; unusually.",
    "cn_def": "異常地；非常",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "to a greater degree than normal; unusually.",
        "cn_def": "異常地；非常"
      }
    ]
  },
  "extraordinary": {
    "pos": "adj.",
    "en_def": "very unusual or remarkable.",
    "cn_def": "非凡的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very unusual or remarkable.",
        "cn_def": "非凡的"
      }
    ]
  },
  "spanned": {
    "pos": "v. / n.",
    "en_def": "to extend across in space or time; the full extent of something from end to end.",
    "cn_def": "橫跨；跨度",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to extend across in space or time; the full extent of something from end to end.",
        "cn_def": "橫跨；跨度"
      }
    ]
  },
  "span": {
    "pos": "v. / n.",
    "en_def": "to extend across in space or time; the full extent of something from end to end.",
    "cn_def": "橫跨；跨度",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to extend across in space or time; the full extent of something from end to end.",
        "cn_def": "橫跨；跨度"
      }
    ]
  },
  "lifespan": {
    "pos": "n.",
    "en_def": "the length of time for which a person or animal lives or a thing functions.",
    "cn_def": "壽命",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the length of time for which a person or animal lives or a thing functions.",
        "cn_def": "壽命"
      }
    ]
  },
  "attention span": {
    "pos": "n.",
    "en_def": "the length of time a person can concentrate on a task without becoming distracted.",
    "cn_def": "注意力持續時間",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the length of time a person can concentrate on a task without becoming distracted.",
        "cn_def": "注意力持續時間"
      }
    ]
  },
  "span across": {
    "pos": "phr.",
    "en_def": "to stretch completely from one side to another.",
    "cn_def": "橫跨",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to stretch completely from one side to another.",
        "cn_def": "橫跨"
      }
    ]
  },
  "apart from": {
    "pos": "phr.",
    "en_def": "except for; in addition to.",
    "cn_def": "除了...之外",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "except for; in addition to.",
        "cn_def": "除了...之外"
      }
    ]
  },
  "apart": {
    "pos": "adv.",
    "en_def": "separated by a distance; into pieces.",
    "cn_def": "分開地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "separated by a distance; into pieces.",
        "cn_def": "分開地"
      }
    ]
  },
  "fall apart": {
    "pos": "phr.",
    "en_def": "to break into pieces; to lose one's capacity to cope.",
    "cn_def": "散開；崩潰",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to break into pieces; to lose one's capacity to cope.",
        "cn_def": "散開；崩潰"
      }
    ]
  },
  "take apart": {
    "pos": "phr.",
    "en_def": "to separate something into its individual pieces.",
    "cn_def": "拆開",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to separate something into its individual pieces.",
        "cn_def": "拆開"
      }
    ]
  },
  "tell them apart": {
    "pos": "phr.",
    "en_def": "to distinguish one person or thing from another.",
    "cn_def": "分辨",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to distinguish one person or thing from another.",
        "cn_def": "分辨"
      }
    ]
  },
  "tell apart": {
    "pos": "phr.",
    "en_def": "to distinguish one person or thing from another.",
    "cn_def": "分辨",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to distinguish one person or thing from another.",
        "cn_def": "分辨"
      }
    ]
  },
  "facilitates": {
    "pos": "v.",
    "en_def": "to make an action or process easy or easier.",
    "cn_def": "促進；使便利",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make an action or process easy or easier.",
        "cn_def": "促進；使便利"
      }
    ]
  },
  "facilitate": {
    "pos": "v.",
    "en_def": "to make an action or process easy or easier.",
    "cn_def": "促進；使便利",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make an action or process easy or easier.",
        "cn_def": "促進；使便利"
      }
    ]
  },
  "facilitator": {
    "pos": "n.",
    "en_def": "a person or thing that makes an action or process easy or easier.",
    "cn_def": "促進者；引導者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or thing that makes an action or process easy or easier.",
        "cn_def": "促進者；引導者"
      }
    ]
  },
  "facility": {
    "pos": "n.",
    "en_def": "a place, amenity, or piece of equipment provided for a particular purpose.",
    "cn_def": "設施",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a place, amenity, or piece of equipment provided for a particular purpose.",
        "cn_def": "設施"
      }
    ]
  },
  "highly facilitated": {
    "pos": "phr.",
    "en_def": "made significantly easier or smoother by someone or something.",
    "cn_def": "高度促進的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "made significantly easier or smoother by someone or something.",
        "cn_def": "高度促進的"
      }
    ]
  },
  "encounter": {
    "pos": "n.",
    "en_def": "an unexpected or casual meeting with someone or something; to unexpectedly experience.",
    "cn_def": "相遇；遭遇",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an unexpected or casual meeting with someone or something; to unexpectedly experience.",
        "cn_def": "相遇；遭遇"
      },
      {
        "pos": "v.",
        "en_def": "To experience something unexpected or difficult, or to meet someone by chance.",
        "cn_def": "遭遇（困難/問題）、不期而遇"
      }
    ]
  },
  "close encounter": {
    "pos": "phr.",
    "en_def": "a situation in which one comes very near to something dangerous or unusual.",
    "cn_def": "近距離接觸",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a situation in which one comes very near to something dangerous or unusual.",
        "cn_def": "近距離接觸"
      }
    ]
  },
  "unexpected encounter": {
    "pos": "phr.",
    "en_def": "a meeting that happens without warning or planning.",
    "cn_def": "意外相遇",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a meeting that happens without warning or planning.",
        "cn_def": "意外相遇"
      }
    ]
  },
  "bump into": {
    "pos": "phr. v.",
    "en_def": "To meet someone you know completely by chance when you did not expect to see them.",
    "cn_def": "巧遇、不期而遇、撞見",
    "combined": [
      {
        "pos": "phr. v.",
        "en_def": "To meet someone you know completely by chance when you did not expect to see them.",
        "cn_def": "巧遇、不期而遇、撞見"
      }
    ]
  },
  "run into": {
    "pos": "phr. v.",
    "en_def": "To meet someone by accident, or to experience unexpected problems or difficulties.",
    "cn_def": "巧遇、遇見；遭遇（困難）",
    "combined": [
      {
        "pos": "phr. v.",
        "en_def": "To meet someone by accident, or to experience unexpected problems or difficulties.",
        "cn_def": "巧遇、遇見；遭遇（困難）"
      }
    ]
  },
  "face": {
    "pos": "v.",
    "en_def": "to confront and deal with or accept a difficult or unpleasant task or situation.",
    "cn_def": "面對",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to confront and deal with or accept a difficult or unpleasant task or situation.",
        "cn_def": "面對"
      }
    ]
  },
  "faced with": {
    "pos": "v. phr.",
    "en_def": "To have to deal with a difficult situation, problem, or choice.",
    "cn_def": "面臨…、面對…（通常指困難、挑戰）",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To have to deal with a difficult situation, problem, or choice.",
        "cn_def": "面臨…、面對…（通常指困難、挑戰）"
      }
    ]
  },
  "be faced with": {
    "pos": "v. phr.",
    "en_def": "To have to deal with a difficult situation, problem, or choice.",
    "cn_def": "面臨…、面對…（通常指困難、挑戰）",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To have to deal with a difficult situation, problem, or choice.",
        "cn_def": "面臨…、面對…（通常指困難、挑戰）"
      }
    ]
  },
  "in the face of": {
    "pos": "phr.",
    "en_def": "While experiencing or dealing with a difficult situation, danger, or opposition.",
    "cn_def": "面對…、在…面前（通常指不畏艱難）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "While experiencing or dealing with a difficult situation, danger, or opposition.",
        "cn_def": "面對…、在…面前（通常指不畏艱難）"
      }
    ]
  },
  "face-to-face communication": {
    "pos": "n. [U]",
    "en_def": "The act of talking directly to another person while being in the same physical place.",
    "cn_def": "面對面溝通",
    "combined": [
      {
        "pos": "n. [U]",
        "en_def": "The act of talking directly to another person while being in the same physical place.",
        "cn_def": "面對面溝通"
      }
    ]
  },
  "enrich": {
    "pos": "v.",
    "en_def": "to improve or enhance the quality or value of.",
    "cn_def": "豐富",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to improve or enhance the quality or value of.",
        "cn_def": "豐富"
      }
    ]
  },
  "enrichment": {
    "pos": "n.",
    "en_def": "the action of improving or enhancing the quality or value of something.",
    "cn_def": "豐富；充實",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of improving or enhancing the quality or value of something.",
        "cn_def": "豐富；充實"
      }
    ]
  },
  "enriched": {
    "pos": "adj.",
    "en_def": "having added nutrients or improved quality.",
    "cn_def": "營養強化的；豐富的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having added nutrients or improved quality.",
        "cn_def": "營養強化的；豐富的"
      }
    ]
  },
  "enriching": {
    "pos": "adj.",
    "en_def": "providing rewarding value or improving the quality of something.",
    "cn_def": "使人充實的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "providing rewarding value or improving the quality of something.",
        "cn_def": "使人充實的"
      }
    ]
  },
  "marvel": {
    "pos": "n. / v.",
    "en_def": "a wonderful or astonishing person or thing; to be filled with wonder or astonishment.",
    "cn_def": "奇蹟；感到驚嘆",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a wonderful or astonishing person or thing; to be filled with wonder or astonishment.",
        "cn_def": "奇蹟；感到驚嘆"
      }
    ]
  },
  "marvel at": {
    "pos": "phr.",
    "en_def": "to look at or consider something with great surprise or admiration.",
    "cn_def": "對...感到驚嘆",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to look at or consider something with great surprise or admiration.",
        "cn_def": "對...感到驚嘆"
      }
    ]
  },
  "marvelous": {
    "pos": "adj.",
    "en_def": "causing great wonder; extraordinary.",
    "cn_def": "極好的；令人驚嘆的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing great wonder; extraordinary.",
        "cn_def": "極好的；令人驚嘆的"
      }
    ]
  },
  "marvelously": {
    "pos": "adv.",
    "en_def": "in a way that causes great wonder or is extraordinarily good.",
    "cn_def": "奇蹟般地；極好地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that causes great wonder or is extraordinarily good.",
        "cn_def": "奇蹟般地；極好地"
      }
    ]
  },
  "engaging": {
    "pos": "adj.",
    "en_def": "charming and attractive; capturing attention.",
    "cn_def": "迷人的；吸引人的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "charming and attractive; capturing attention.",
        "cn_def": "迷人的；吸引人的"
      },
      {
        "pos": "adj.",
        "en_def": "Interesting, charming, and keeping your attention completely.",
        "cn_def": "迷人的、有吸引力的、引人入勝的"
      }
    ]
  },
  "engage": {
    "pos": "v.",
    "en_def": "to occupy, attract, or involve someone's interest or attention.",
    "cn_def": "吸引；參與",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to occupy, attract, or involve someone's interest or attention.",
        "cn_def": "吸引；參與"
      }
    ]
  },
  "engage in": {
    "pos": "phr.",
    "en_def": "to participate or become involved in.",
    "cn_def": "參與",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to participate or become involved in.",
        "cn_def": "參與"
      },
      {
        "pos": "v. phr.",
        "en_def": "To take part in or do a specific activity, discussion, or behavior.",
        "cn_def": "參加…、進行…、從事…（活動）"
      }
    ]
  },
  "be engaged to sb": {
    "pos": "v. phr.",
    "en_def": "Having formally agreed to marry a specific person in the future.",
    "cn_def": "與某人訂婚",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "Having formally agreed to marry a specific person in the future.",
        "cn_def": "與某人訂婚"
      }
    ]
  },
  "engaged to": {
    "pos": "v. phr.",
    "en_def": "Having formally agreed to marry a specific person in the future.",
    "cn_def": "與某人訂婚",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "Having formally agreed to marry a specific person in the future.",
        "cn_def": "與某人訂婚"
      }
    ]
  },
  "engaged in": {
    "pos": "v. phr.",
    "en_def": "To be deeply busy, occupied, or involved in a specific activity or situation.",
    "cn_def": "正從事於…、忙於…、參與…",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To be deeply busy, occupied, or involved in a specific activity or situation.",
        "cn_def": "正從事於…、忙於…、參與…"
      }
    ]
  },
  "be engaged in": {
    "pos": "v. phr.",
    "en_def": "To be deeply busy, occupied, or involved in a specific activity or situation.",
    "cn_def": "正從事於…、忙於…、參與…",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To be deeply busy, occupied, or involved in a specific activity or situation.",
        "cn_def": "正從事於…、忙於…、參與…"
      }
    ]
  },
  "engage in (an activity)": {
    "pos": "v. phr.",
    "en_def": "To take part in or do a specific activity, discussion, or behavior.",
    "cn_def": "參加…、進行…、從事…（活動）",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To take part in or do a specific activity, discussion, or behavior.",
        "cn_def": "參加…、進行…、從事…（活動）"
      }
    ]
  },
  "engagement": {
    "pos": "n.",
    "en_def": "the act of participation.",
    "cn_def": "訂婚；參與",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of participation.",
        "cn_def": "訂婚；參與"
      }
    ]
  },
  "take part in": {
    "pos": "v. phr.",
    "en_def": "To participate or be involved in an activity, event, or sport with other people.",
    "cn_def": "參加…、參與…",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To participate or be involved in an activity, event, or sport with other people.",
        "cn_def": "參加…、參與…"
      }
    ]
  },
  "participate in": {
    "pos": "v. phr.",
    "en_def": "To take part in an event, a game, an activity, or an organized group.",
    "cn_def": "參加…、參與…",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To take part in an event, a game, an activity, or an organized group.",
        "cn_def": "參加…、參與…"
      }
    ]
  },
  "participant": {
    "pos": "n. [C]",
    "en_def": "A person who takes part in a specific activity, event, or research study.",
    "cn_def": "參與者、參加者",
    "combined": [
      {
        "pos": "n. [C]",
        "en_def": "A person who takes part in a specific activity, event, or research study.",
        "cn_def": "參與者、參加者"
      }
    ]
  },
  "participation": {
    "pos": "n. [U]",
    "en_def": "The act of taking part in an activity, event, or discussion.",
    "cn_def": "參與、參加",
    "combined": [
      {
        "pos": "n. [U]",
        "en_def": "The act of taking part in an activity, event, or discussion.",
        "cn_def": "參與、參加"
      }
    ]
  },
  "charming": {
    "pos": "adj.",
    "en_def": "pleasant or attractive.",
    "cn_def": "迷人的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "pleasant or attractive.",
        "cn_def": "迷人的"
      }
    ]
  },
  "reproduce": {
    "pos": "v.",
    "en_def": "to produce a copy or representation of; to produce offspring.",
    "cn_def": "複製；繁殖",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to produce a copy or representation of; to produce offspring.",
        "cn_def": "複製；繁殖"
      }
    ]
  },
  "reproduction": {
    "pos": "n.",
    "en_def": "the action or process of making a copy of something; the production of offspring.",
    "cn_def": "複製品；繁殖",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action or process of making a copy of something; the production of offspring.",
        "cn_def": "複製品；繁殖"
      }
    ]
  },
  "reproductive": {
    "pos": "adj.",
    "en_def": "relating to or effecting reproduction.",
    "cn_def": "生殖的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to or effecting reproduction.",
        "cn_def": "生殖的"
      }
    ]
  },
  "produce": {
    "pos": "v.",
    "en_def": "to make or manufacture from components or raw materials.",
    "cn_def": "生產",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make or manufacture from components or raw materials.",
        "cn_def": "生產"
      }
    ]
  },
  "producer": {
    "pos": "n.",
    "en_def": "a person, company, or country that makes, grows, or supplies goods or commodities for sale.",
    "cn_def": "生產者；製作人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person, company, or country that makes, grows, or supplies goods or commodities for sale.",
        "cn_def": "生產者；製作人"
      }
    ]
  },
  "representative": {
    "pos": "n. / adj.",
    "en_def": "a person chosen or appointed to act or speak for another or others; typical of a class, group, or body of opinion.",
    "cn_def": "代表；具代表性的",
    "combined": [
      {
        "pos": "n. / adj.",
        "en_def": "a person chosen or appointed to act or speak for another or others; typical of a class, group, or body of opinion.",
        "cn_def": "代表；具代表性的"
      }
    ]
  },
  "representative of": {
    "pos": "phr.",
    "en_def": "serving as a typical example of something.",
    "cn_def": "...的代表",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "serving as a typical example of something.",
        "cn_def": "...的代表"
      }
    ]
  },
  "represent": {
    "pos": "v.",
    "en_def": "to be entitled or appointed to act or speak for someone.",
    "cn_def": "代表",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to be entitled or appointed to act or speak for someone.",
        "cn_def": "代表"
      }
    ]
  },
  "representation": {
    "pos": "n.",
    "en_def": "the action of speaking or acting on behalf of someone or the state of being so represented.",
    "cn_def": "表現；代表",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of speaking or acting on behalf of someone or the state of being so represented.",
        "cn_def": "表現；代表"
      }
    ]
  },
  "sales representative": {
    "pos": "phr.",
    "en_def": "an employee of a company who travels around a particular area selling the company's goods to shops and other businesses.",
    "cn_def": "業務代表",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an employee of a company who travels around a particular area selling the company's goods to shops and other businesses.",
        "cn_def": "業務代表"
      }
    ]
  },
  "on behalf of": {
    "pos": "phr.",
    "en_def": "As the representative of someone else, or speaking and acting for them.",
    "cn_def": "代表…、替…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "As the representative of someone else, or speaking and acting for them.",
        "cn_def": "代表…、替…"
      }
    ]
  },
  "stand for": {
    "pos": "phr. v.",
    "en_def": "To represent a word, an idea, or a belief, especially as an abbreviation or a symbol.",
    "cn_def": "代表（字詞縮寫）；象徵、主張",
    "combined": [
      {
        "pos": "phr. v.",
        "en_def": "To represent a word, an idea, or a belief, especially as an abbreviation or a symbol.",
        "cn_def": "代表（字詞縮寫）；象徵、主張"
      }
    ]
  },
  "symbolize": {
    "pos": "v.",
    "en_def": "To be a symbol of something, or to represent a deeper quality or feeling.",
    "cn_def": "象徵、代表",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To be a symbol of something, or to represent a deeper quality or feeling.",
        "cn_def": "象徵、代表"
      }
    ]
  },
  "symbol": {
    "pos": "n. [C]",
    "en_def": "A sign, shape, or object that is used to represent something else, such as an idea or quality.",
    "cn_def": "象徵、標誌、符號",
    "combined": [
      {
        "pos": "n. [C]",
        "en_def": "A sign, shape, or object that is used to represent something else, such as an idea or quality.",
        "cn_def": "象徵、標誌、符號"
      }
    ]
  },
  "be symbolic of": {
    "pos": "v. phr.",
    "en_def": "Serving as a symbol, or representing something else in a significant way.",
    "cn_def": "象徵…的、代表…的",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "Serving as a symbol, or representing something else in a significant way.",
        "cn_def": "象徵…的、代表…的"
      }
    ]
  },
  "symbolic of": {
    "pos": "v. phr.",
    "en_def": "Serving as a symbol, or representing something else in a significant way.",
    "cn_def": "象徵…的、代表…的",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "Serving as a symbol, or representing something else in a significant way.",
        "cn_def": "象徵…的、代表…的"
      }
    ]
  },
  "destination": {
    "pos": "n.",
    "en_def": "the place to which someone or something is going or being sent.",
    "cn_def": "目的地",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the place to which someone or something is going or being sent.",
        "cn_def": "目的地"
      }
    ]
  },
  "tourist destination": {
    "pos": "phr.",
    "en_def": "a place that is popular with people who are on holiday.",
    "cn_def": "旅遊勝地",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a place that is popular with people who are on holiday.",
        "cn_def": "旅遊勝地"
      }
    ]
  },
  "tourist attraction": {
    "pos": "n. [C]",
    "en_def": "A place of interest that people visit for pleasure, culture, or entertainment.",
    "cn_def": "觀光景點、旅遊勝地",
    "combined": [
      {
        "pos": "n. [C]",
        "en_def": "A place of interest that people visit for pleasure, culture, or entertainment.",
        "cn_def": "觀光景點、旅遊勝地"
      }
    ]
  },
  "landmark": {
    "pos": "n. [C]",
    "en_def": "A building or feature that is easily recognized, especially one that guides people or has historical importance.",
    "cn_def": "地標、里程碑",
    "combined": [
      {
        "pos": "n. [C]",
        "en_def": "A building or feature that is easily recognized, especially one that guides people or has historical importance.",
        "cn_def": "地標、里程碑"
      }
    ]
  },
  "scenic spot": {
    "pos": "n. [C]",
    "en_def": "A specific place known for its beautiful natural views and landscapes.",
    "cn_def": "風景區、景點",
    "combined": [
      {
        "pos": "n. [C]",
        "en_def": "A specific place known for its beautiful natural views and landscapes.",
        "cn_def": "風景區、景點"
      }
    ]
  },
  "wandered": {
    "pos": "v.",
    "en_def": "to walk or move in a leisurely, casual, or aimless way.",
    "cn_def": "漫遊；徘徊",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to walk or move in a leisurely, casual, or aimless way.",
        "cn_def": "漫遊；徘徊"
      }
    ]
  },
  "wander": {
    "pos": "v.",
    "en_def": "to walk or move in a leisurely, casual, or aimless way.",
    "cn_def": "漫遊；徘徊",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to walk or move in a leisurely, casual, or aimless way.",
        "cn_def": "漫遊；徘徊"
      }
    ]
  },
  "wander off": {
    "pos": "phr.",
    "en_def": "to leave a place or group without permission or unexpectedly.",
    "cn_def": "走失；離開",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to leave a place or group without permission or unexpectedly.",
        "cn_def": "走失；離開"
      }
    ]
  },
  "wandering": {
    "pos": "adj.",
    "en_def": "traveling aimlessly from place to place.",
    "cn_def": "漫遊的；流浪的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "traveling aimlessly from place to place.",
        "cn_def": "漫遊的；流浪的"
      }
    ]
  },
  "wander around": {
    "pos": "phr.",
    "en_def": "to walk around a place casually without a specific goal.",
    "cn_def": "四處閒逛",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to walk around a place casually without a specific goal.",
        "cn_def": "四處閒逛"
      }
    ]
  },
  "apply": {
    "pos": "v.",
    "en_def": "to make a formal application or request.",
    "cn_def": "申請",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make a formal application or request.",
        "cn_def": "申請"
      }
    ]
  },
  "application": {
    "pos": "n.",
    "en_def": "a formal request to an authority for something; the action of putting something into operation.",
    "cn_def": "應用；申請",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a formal request to an authority for something; the action of putting something into operation.",
        "cn_def": "應用；申請"
      },
      {
        "pos": "n. [C]",
        "en_def": "A computer program or mobile software designed to perform a specific task for the user (often shortened to \"app\").",
        "cn_def": "應用程式"
      }
    ]
  },
  "job application": {
    "pos": "phr.",
    "en_def": "a formal request to be considered for a position of employment.",
    "cn_def": "求職申請",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a formal request to be considered for a position of employment.",
        "cn_def": "求職申請"
      }
    ]
  },
  "fill in the application form": {
    "pos": "v. phr.",
    "en_def": "To complete a document by writing down your personal details and answers in the blanks.",
    "cn_def": "填寫申請表",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To complete a document by writing down your personal details and answers in the blanks.",
        "cn_def": "填寫申請表"
      }
    ]
  },
  "applicant": {
    "pos": "n.",
    "en_def": "a person who makes a formal application for something, typically a job.",
    "cn_def": "申請人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who makes a formal application for something, typically a job.",
        "cn_def": "申請人"
      }
    ]
  },
  "applicable": {
    "pos": "adj.",
    "en_def": "relevant or appropriate.",
    "cn_def": "適用的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relevant or appropriate.",
        "cn_def": "適用的"
      }
    ]
  },
  "apply for a job": {
    "pos": "v. phr.",
    "en_def": "To make a formal, written request to a company asking to be hired for a specific position.",
    "cn_def": "應徵工作、申請工作",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To make a formal, written request to a company asking to be hired for a specific position.",
        "cn_def": "應徵工作、申請工作"
      }
    ]
  },
  "apply for a school": {
    "pos": "v. phr.",
    "en_def": "To submit a formal request and necessary documents to be admitted into an educational institution.",
    "cn_def": "申請學校",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To submit a formal request and necessary documents to be admitted into an educational institution.",
        "cn_def": "申請學校"
      }
    ]
  },
  "apply for a scholarship": {
    "pos": "v. phr.",
    "en_def": "To formally request financial aid from an institution to help pay for your education.",
    "cn_def": "申請獎學金",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To formally request financial aid from an institution to help pay for your education.",
        "cn_def": "申請獎學金"
      }
    ]
  },
  "apply to": {
    "pos": "v. phr.",
    "en_def": "To use a rule, idea, or piece of information in a specific situation, or to be relevant to someone.",
    "cn_def": "應用於…、適用於…",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To use a rule, idea, or piece of information in a specific situation, or to be relevant to someone.",
        "cn_def": "應用於…、適用於…"
      }
    ]
  },
  "apply sth to": {
    "pos": "v. phr.",
    "en_def": "To spread a substance, such as cream, ointment, or paint, onto a surface.",
    "cn_def": "將…塗抹於…",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To spread a substance, such as cream, ointment, or paint, onto a surface.",
        "cn_def": "將…塗抹於…"
      }
    ]
  },
  "apply the medical ointment to": {
    "pos": "v. phr.",
    "en_def": "To spread a substance, such as cream, ointment, or paint, onto a surface.",
    "cn_def": "將…塗抹於…",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To spread a substance, such as cream, ointment, or paint, onto a surface.",
        "cn_def": "將…塗抹於…"
      }
    ]
  },
  "educate": {
    "pos": "v.",
    "en_def": "to give intellectual, moral, and social instruction to someone.",
    "cn_def": "教育",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give intellectual, moral, and social instruction to someone.",
        "cn_def": "教育"
      }
    ]
  },
  "education": {
    "pos": "n.",
    "en_def": "the process of receiving or giving systematic instruction, especially at a school or university.",
    "cn_def": "教育",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the process of receiving or giving systematic instruction, especially at a school or university.",
        "cn_def": "教育"
      }
    ]
  },
  "educational": {
    "pos": "adj.",
    "en_def": "relating to the provision of education; intended or serving to educate or enlighten.",
    "cn_def": "教育的；有教育意義的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to the provision of education; intended or serving to educate or enlighten.",
        "cn_def": "教育的；有教育意義的"
      }
    ]
  },
  "access": {
    "pos": "n. / v.",
    "en_def": "the means or opportunity to approach or enter a place; to approach or enter.",
    "cn_def": "進入（的權利）；存取",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "the means or opportunity to approach or enter a place; to approach or enter.",
        "cn_def": "進入（的權利）；存取"
      }
    ]
  },
  "have completely free access to": {
    "pos": "phr.",
    "en_def": "to have the right or opportunity to use something.",
    "cn_def": "有權限使用...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to have the right or opportunity to use something.",
        "cn_def": "有權限使用..."
      }
    ]
  },
  "have access to": {
    "pos": "phr.",
    "en_def": "to have the right or opportunity to use something.",
    "cn_def": "有權限使用...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to have the right or opportunity to use something.",
        "cn_def": "有權限使用..."
      }
    ]
  },
  "gain access to": {
    "pos": "phr.",
    "en_def": "to obtain the ability to enter a place or look at something.",
    "cn_def": "獲得存取/進入權",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to obtain the ability to enter a place or look at something.",
        "cn_def": "獲得存取/進入權"
      }
    ]
  },
  "accessible": {
    "pos": "adj.",
    "en_def": "able to be reached or entered.",
    "cn_def": "易接近的；可使用的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to be reached or entered.",
        "cn_def": "易接近的；可使用的"
      }
    ]
  },
  "accessibility": {
    "pos": "n.",
    "en_def": "the quality of being easy to approach, reach, enter, speak with, or use.",
    "cn_def": "可達性；無障礙",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of being easy to approach, reach, enter, speak with, or use.",
        "cn_def": "可達性；無障礙"
      }
    ]
  },
  "specialist": {
    "pos": "n.",
    "en_def": "a person who concentrates primarily on a particular subject or activity.",
    "cn_def": "專家；專科醫生",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who concentrates primarily on a particular subject or activity.",
        "cn_def": "專家；專科醫生"
      }
    ]
  },
  "computer specialist": {
    "pos": "phr.",
    "en_def": "a person with advanced knowledge of computer systems.",
    "cn_def": "電腦專家",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a person with advanced knowledge of computer systems.",
        "cn_def": "電腦專家"
      }
    ]
  },
  "specialize in": {
    "pos": "v.",
    "en_def": "to concentrate on and become expert in a particular subject or skill.",
    "cn_def": "專攻",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to concentrate on and become expert in a particular subject or skill.",
        "cn_def": "專攻"
      }
    ]
  },
  "expert": {
    "pos": "n.",
    "en_def": "a person who is very knowledgeable about or skillful in a particular area.",
    "cn_def": "專家",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who is very knowledgeable about or skillful in a particular area.",
        "cn_def": "專家"
      }
    ]
  },
  "specialized": {
    "pos": "adj.",
    "en_def": "requiring or involving detailed and specific knowledge or training.",
    "cn_def": "專業的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "requiring or involving detailed and specific knowledge or training.",
        "cn_def": "專業的"
      }
    ]
  },
  "imitate": {
    "pos": "v.",
    "en_def": "to copy or simulate.",
    "cn_def": "模仿",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to copy or simulate.",
        "cn_def": "模仿"
      }
    ]
  },
  "imitation": {
    "pos": "n.",
    "en_def": "the action of using someone or something as a model.",
    "cn_def": "模仿；仿製品",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of using someone or something as a model.",
        "cn_def": "模仿；仿製品"
      }
    ]
  },
  "imitative": {
    "pos": "adj.",
    "en_def": "copying or following a model or example.",
    "cn_def": "模仿的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "copying or following a model or example.",
        "cn_def": "模仿的"
      }
    ]
  },
  "fake": {
    "pos": "adj.",
    "en_def": "not genuine; imitation or counterfeit.",
    "cn_def": "假的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not genuine; imitation or counterfeit.",
        "cn_def": "假的"
      }
    ]
  },
  "realm": {
    "pos": "n.",
    "en_def": "a kingdom; a field or domain of activity or interest.",
    "cn_def": "領域；王國",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a kingdom; a field or domain of activity or interest.",
        "cn_def": "領域；王國"
      }
    ]
  },
  "magical realm": {
    "pos": "phr.",
    "en_def": "a fictional world where magic exists.",
    "cn_def": "魔法王國",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a fictional world where magic exists.",
        "cn_def": "魔法王國"
      }
    ]
  },
  "in the realm of": {
    "pos": "phr.",
    "en_def": "within the specific area or field of something.",
    "cn_def": "在...領域中",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "within the specific area or field of something.",
        "cn_def": "在...領域中"
      }
    ]
  },
  "kingdom": {
    "pos": "n.",
    "en_def": "a country, state, or territory ruled by a king or queen.",
    "cn_def": "王國",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a country, state, or territory ruled by a king or queen.",
        "cn_def": "王國"
      }
    ]
  },
  "domain": {
    "pos": "n.",
    "en_def": "an area of territory owned or controlled by a ruler or government; a specified sphere of activity or knowledge.",
    "cn_def": "領域；領土",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an area of territory owned or controlled by a ruler or government; a specified sphere of activity or knowledge.",
        "cn_def": "領域；領土"
      }
    ]
  },
  "array": {
    "pos": "n.",
    "en_def": "an impressive display or range of a particular type of thing.",
    "cn_def": "一系列；陣列",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an impressive display or range of a particular type of thing.",
        "cn_def": "一系列；陣列"
      }
    ]
  },
  "an array of": {
    "pos": "phr.",
    "en_def": "a large group of things or people, especially one that is attractive or causes admiration.",
    "cn_def": "一系列",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a large group of things or people, especially one that is attractive or causes admiration.",
        "cn_def": "一系列"
      }
    ]
  },
  "a vast array of": {
    "pos": "phr.",
    "en_def": "a very large and impressive collection or display.",
    "cn_def": "大量的一系列",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a very large and impressive collection or display.",
        "cn_def": "大量的一系列"
      }
    ]
  },
  "a wide array of": {
    "pos": "phr.",
    "en_def": "a broad and diverse collection.",
    "cn_def": "廣泛的一系列",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a broad and diverse collection.",
        "cn_def": "廣泛的一系列"
      }
    ]
  },
  "recreation": {
    "pos": "n.",
    "en_def": "activity done for enjoyment when one is not working.",
    "cn_def": "娛樂；消遣",
    "combined": [
      {
        "pos": "n.",
        "en_def": "activity done for enjoyment when one is not working.",
        "cn_def": "娛樂；消遣"
      }
    ]
  },
  "recreational": {
    "pos": "adj.",
    "en_def": "relating to or denoting activity done for enjoyment when one is not working.",
    "cn_def": "娛樂的；休閒的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to or denoting activity done for enjoyment when one is not working.",
        "cn_def": "娛樂的；休閒的"
      }
    ]
  },
  "recreational activities": {
    "pos": "phr.",
    "en_def": "things people do for fun and enjoyment.",
    "cn_def": "休閒活動",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "things people do for fun and enjoyment.",
        "cn_def": "休閒活動"
      }
    ]
  },
  "create": {
    "pos": "v.",
    "en_def": "to bring something into existence.",
    "cn_def": "創造",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to bring something into existence.",
        "cn_def": "創造"
      }
    ]
  },
  "creative": {
    "pos": "adj.",
    "en_def": "relating to or involving the imagination or original ideas, especially in the production of an artistic work.",
    "cn_def": "有創意的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to or involving the imagination or original ideas, especially in the production of an artistic work.",
        "cn_def": "有創意的"
      }
    ]
  },
  "creatively": {
    "pos": "adj.",
    "en_def": "relating to or involving the imagination or original ideas, especially in the production of an artistic work.",
    "cn_def": "有創意的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to or involving the imagination or original ideas, especially in the production of an artistic work.",
        "cn_def": "有創意的"
      }
    ]
  },
  "skeptical": {
    "pos": "adj.",
    "en_def": "not easily convinced; having doubts or reservations.",
    "cn_def": "懷疑的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not easily convinced; having doubts or reservations.",
        "cn_def": "懷疑的"
      }
    ]
  },
  "skeptic": {
    "pos": "n.",
    "en_def": "a person inclined to question or doubt all accepted opinions.",
    "cn_def": "懷疑論者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person inclined to question or doubt all accepted opinions.",
        "cn_def": "懷疑論者"
      }
    ]
  },
  "skepticism": {
    "pos": "n.",
    "en_def": "a skeptical attitude; doubt as to the truth of something.",
    "cn_def": "懷疑態度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a skeptical attitude; doubt as to the truth of something.",
        "cn_def": "懷疑態度"
      }
    ]
  },
  "be skeptical about": {
    "pos": "phr.",
    "en_def": "to have doubts regarding something.",
    "cn_def": "對...感到懷疑",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to have doubts regarding something.",
        "cn_def": "對...感到懷疑"
      }
    ]
  },
  "be highly skeptical about": {
    "pos": "phr.",
    "en_def": "to have doubts regarding something.",
    "cn_def": "對...感到懷疑",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to have doubts regarding something.",
        "cn_def": "對...感到懷疑"
      }
    ]
  },
  "doubtful": {
    "pos": "adj.",
    "en_def": "feeling uncertain about something.",
    "cn_def": "可疑的；懷疑的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling uncertain about something.",
        "cn_def": "可疑的；懷疑的"
      }
    ]
  },
  "distinguished": {
    "pos": "v.",
    "en_def": "to recognize or treat someone or something as different.",
    "cn_def": "區分；分辨",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to recognize or treat someone or something as different.",
        "cn_def": "區分；分辨"
      },
      {
        "pos": "adj.",
        "en_def": "Successful, authoritative, and commanding great respect from others due to excellence.",
        "cn_def": "卓越的、傑出的、著名的"
      }
    ]
  },
  "distinguish": {
    "pos": "v.",
    "en_def": "to recognize or treat someone or something as different.",
    "cn_def": "區分；分辨",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to recognize or treat someone or something as different.",
        "cn_def": "區分；分辨"
      }
    ]
  },
  "distinguish between": {
    "pos": "phr.",
    "en_def": "to recognize the difference between two people or things.",
    "cn_def": "區分（兩者）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to recognize the difference between two people or things.",
        "cn_def": "區分（兩者）"
      }
    ]
  },
  "distinguished from": {
    "pos": "phr.",
    "en_def": "to show how one thing is different from another.",
    "cn_def": "區別",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to show how one thing is different from another.",
        "cn_def": "區別"
      }
    ]
  },
  "distinguish from": {
    "pos": "phr.",
    "en_def": "to show how one thing is different from another.",
    "cn_def": "區別",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to show how one thing is different from another.",
        "cn_def": "區別"
      }
    ]
  },
  "distinguishable": {
    "pos": "adj.",
    "en_def": "clear enough to be recognized or identified as different.",
    "cn_def": "可辨別的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "clear enough to be recognized or identified as different.",
        "cn_def": "可辨別的"
      }
    ]
  },
  "tell": {
    "pos": "v.",
    "en_def": "To know, realize, or judge something correctly based on evidence or signs.",
    "cn_def": "看得出、能分辨、知道",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To know, realize, or judge something correctly based on evidence or signs.",
        "cn_def": "看得出、能分辨、知道"
      }
    ]
  },
  "tell a from b": {
    "pos": "v. phr.",
    "en_def": "To distinguish one person or thing from another based on their unique traits.",
    "cn_def": "分辨A與B",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To distinguish one person or thing from another based on their unique traits.",
        "cn_def": "分辨A與B"
      }
    ]
  },
  "tell the difference": {
    "pos": "v. phr.",
    "en_def": "To recognize or identify how two or more things or people are not the same.",
    "cn_def": "辨別差異、看出不同",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To recognize or identify how two or more things or people are not the same.",
        "cn_def": "辨別差異、看出不同"
      }
    ]
  },
  "make a huge difference": {
    "pos": "v. phr.",
    "en_def": "To have a significant effect, improvement, or influence on a person, situation, or thing.",
    "cn_def": "產生影響、有關係、起作用",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To have a significant effect, improvement, or influence on a person, situation, or thing.",
        "cn_def": "產生影響、有關係、起作用"
      }
    ]
  },
  "make a difference": {
    "pos": "v. phr.",
    "en_def": "To have a significant effect, improvement, or influence on a person, situation, or thing.",
    "cn_def": "產生影響、有關係、起作用",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "To have a significant effect, improvement, or influence on a person, situation, or thing.",
        "cn_def": "產生影響、有關係、起作用"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
