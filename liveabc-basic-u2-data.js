// Unit 2 Quiz Data: mutual – airtight alibi
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Basic U2 - mutual – airtight alibi",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "mutual",
    "pos": "adj.",
    "cn_def": "互相的；共同的",
    "en_def": "Shared, felt, or shown equally by two or more people.",
    "sentence": "Even though they have very different personalities, John and Carrie share a {{BLANK}} appreciation for classic jazz music.",
    "cn": "儘管他們有著非常不同的個性，約翰和凱莉對經典爵士樂有著共同的欣賞。"
  },
  {
    "word": "solid",
    "pos": "adj.",
    "cn_def": "堅固的；紮實的",
    "en_def": "Firm and stable in shape; not liquid or fluid.",
    "sentence": "You need a {{BLANK}} understanding of basic mathematical principles before you can attempt to solve these advanced physics equations.",
    "cn": "在你嘗試解開這些進階物理方程式之前，你需要對基本數學原理有紮實的理解。"
  },
  {
    "word": "sociable",
    "pos": "adj.",
    "cn_def": "好交際的；合群的",
    "en_def": "Willing to talk and engage in activities with others; friendly.",
    "sentence": "The Millers are incredibly {{BLANK}} people who frequently enjoy having loud and exciting dinner parties with their neighbors.",
    "cn": "米勒一家是極其好交際的人，他們經常喜歡和鄰居舉辦熱鬧又刺激的晚宴。"
  },
  {
    "word": "unsociable",
    "pos": "adj.",
    "cn_def": "不愛交際的",
    "en_def": "Not enjoying the company of others; not friendly.",
    "sentence": "Ever since he lost his job, he has become quite {{BLANK}}, refusing to leave his room or speak to anyone.",
    "cn": "自從他失業後，他變得相當不愛交際的，拒絕離開他的房間或和任何人說話。"
  },
  {
    "word": "antisocial",
    "pos": "adj.",
    "cn_def": "反社會的；不擅社交的",
    "en_def": "Contrary to the laws and customs of society; not sociable.",
    "sentence": "His habit of ignoring people when they speak to him is considered completely {{BLANK}} and rude by his colleagues.",
    "cn": "當別人跟他說話時他總是不理睬的習慣，被他的同事認為是完全反社會的且粗魯的。"
  },
  {
    "word": "wild",
    "pos": "adj.",
    "cn_def": "野生的",
    "en_def": "Living or growing in the natural environment; not domesticated.",
    "sentence": "We went on an exciting safari in Africa and took incredible photographs of {{BLANK}} lions, elephants, and giraffes.",
    "cn": "我們去非洲參加了一場刺激的野生動物園之旅，並拍下了野生的獅子、大象和長頸鹿的驚人照片。"
  },
  {
    "word": "enhanced",
    "pos": "adj.",
    "cn_def": "增強的；提升的",
    "en_def": "Intensified or further improved in quality or value.",
    "sentence": "The newest version of the sports car comes with several {{BLANK}} safety features to better protect the driver during an accident.",
    "cn": "最新版本的跑車配備了幾項增強的安全功能，以在事故中更好地保護駕駛。"
  },
  {
    "word": "conscious",
    "pos": "adj.",
    "cn_def": "有意識的；意識到的",
    "en_def": "Aware of and responding to one's surroundings; awake.",
    "sentence": "Bobby bites his fingernails all the time when he's nervous, but he doesn't usually do it in a {{BLANK}} manner.",
    "cn": "波比緊張時總是在咬指甲，但他通常不是以有意識的方式在做這件事。"
  },
  {
    "word": "tolerant",
    "pos": "adj.",
    "cn_def": "寬容的；容忍的",
    "en_def": "Showing willingness to allow the existence of different opinions.",
    "sentence": "In a diverse and modern society, it is essential that citizens be more {{BLANK}} of cultures and beliefs that are different from their own.",
    "cn": "在一個多元且現代的社會中，公民必須對與自己不同的文化和信仰更加寬容的。"
  },
  {
    "word": "airtight",
    "pos": "adj.",
    "cn_def": "密不透風的；無懈可擊的",
    "en_def": "Not allowing air to escape; having no weaknesses.",
    "sentence": "The careful engineer made absolutely sure to have {{BLANK}} knowledge of the challenging landscape before he started building the suspension bridge.",
    "cn": "這位謹慎的工程師在開始建造吊橋之前，絕對確保自己對這個具挑戰性的地形擁有無懈可擊的知識。"
  },
  {
    "word": "indisputable",
    "pos": "adj.",
    "cn_def": "不容置疑的",
    "en_def": "Unable to be challenged or denied.",
    "sentence": "The surveillance video provided clear and {{BLANK}} evidence that the suspect was nowhere near the bank when the robbery actually occurred.",
    "cn": "監視器影片提供了清晰且不容置疑的證據，證明當搶劫實際發生時，嫌疑犯根本不在銀行附近。"
  },
  {
    "word": "sealed",
    "pos": "adj.",
    "cn_def": "密封的",
    "en_def": "Closed securely so that nothing can get in or out.",
    "sentence": "The ancient Egyptian tomb had remained completely {{BLANK}} for thousands of years until modern archaeologists finally discovered its hidden entrance.",
    "cn": "這個古埃及陵墓已經完全密封的數千年，直到現代考古學家終於發現了它隱藏的入口。"
  },
  {
    "word": "visible",
    "pos": "adj.",
    "cn_def": "可見的",
    "en_def": "Able to be seen.",
    "sentence": "The bright stars were clearly {{BLANK}} in the night sky because we were camping far away from the city's light pollution.",
    "cn": "明亮的星星在夜空中清晰可見的，因為我們在遠離城市光害的地方露營。"
  },
  {
    "word": "defensive",
    "pos": "adj.",
    "cn_def": "防禦的；防備的",
    "en_def": "Used or intended to defend; oversensitive to criticism.",
    "sentence": "Whenever I gently suggest that he could improve his writing skills, he immediately gets incredibly {{BLANK}} and starts arguing with me.",
    "cn": "每當我溫和地建議他可以改善寫作技巧時，他立刻變得極具防備的並開始和我爭論。"
  },
  {
    "word": "predatory",
    "pos": "adj.",
    "cn_def": "掠食的；剝削的",
    "en_def": "Relating to an animal or person that preys on others.",
    "sentence": "The government is trying to pass new laws to protect vulnerable citizens from the {{BLANK}} lending practices of some banks.",
    "cn": "政府正試圖通過新法律，以保護弱勢公民免受某些銀行剝削的放貸行為所害。"
  },
  {
    "word": "mutually",
    "pos": "adv.",
    "cn_def": "互相地",
    "en_def": "In a shared manner or to an equal degree.",
    "sentence": "The two rival companies eventually reached a {{BLANK}} beneficial agreement that allowed both of them to increase their profits.",
    "cn": "兩家競爭公司最終達成了一項互相地有益的協議，讓雙方都能增加利潤。"
  },
  {
    "word": "consciously",
    "pos": "adv.",
    "cn_def": "有意識地；蓄意地",
    "en_def": "In a deliberate and intentional way.",
    "sentence": "You must {{BLANK}} force yourself to sit up straight at your desk, otherwise you will eventually develop terrible back pain.",
    "cn": "你必須有意識地強迫自己坐在辦公桌前挺直腰板，否則你最終會發展出可怕的背痛。"
  },
  {
    "word": "unconsciously",
    "pos": "adv.",
    "cn_def": "無意識地",
    "en_def": "Without realizing or being aware of one's actions.",
    "sentence": "As the suspenseful movie reached its climax, I was {{BLANK}} holding my breath the entire time until the scene ended.",
    "cn": "當這部懸疑電影達到高潮時，我無意識地一直屏住呼吸，直到該場景結束。"
  },
  {
    "word": "subconsciously",
    "pos": "adv.",
    "cn_def": "潛意識地",
    "en_def": "In a way influenced by the part of the mind one is not fully aware of.",
    "sentence": "Even though he smiled and said he was fine, he was {{BLANK}} rubbing his sore shoulder throughout the entire meeting.",
    "cn": "即使他笑著說他沒事，在整個會議中他卻潛意識地在揉他痠痛的肩膀。"
  },
  {
    "word": "solidarity",
    "pos": "n.",
    "cn_def": "團結",
    "en_def": "Unity or agreement of feeling or action among people with a common interest.",
    "sentence": "The factory workers showed incredible {{BLANK}} during the strike, refusing to return to work until their demands were met.",
    "cn": "工廠工人在罷工期間展現了令人難以置信的團結，拒絕重返工作崗位直到他們的要求得到滿足。"
  },
  {
    "word": "motto",
    "pos": "n.",
    "cn_def": "座右銘；格言",
    "en_def": "A short sentence chosen as encapsulating the beliefs guiding an individual or group.",
    "sentence": "Many successful professional athletes apply the {{BLANK}} 'no pain, no gain' to their strict daily training routines.",
    "cn": "許多成功的職業運動員將「沒有痛苦就沒有收穫」的座右銘應用在他們嚴格的日常訓練中。"
  },
  {
    "word": "longevity",
    "pos": "n.",
    "cn_def": "長壽；持久",
    "en_def": "Long life; long existence or service.",
    "sentence": "Extreme {{BLANK}} is quite normal in my family, as both of my grandparents lived to be over 100 years old.",
    "cn": "極端的長壽在我家是很正常的，因為我的祖父母都活到了100歲以上。"
  },
  {
    "word": "wildlife",
    "pos": "n.",
    "cn_def": "野生動植物",
    "en_def": "Wild animals collectively; the native fauna of a region.",
    "sentence": "Taiwan's central mountain ranges are home to a diverse and beautiful range of {{BLANK}}, including monkeys, birds, and bears.",
    "cn": "台灣的中央山脈是各種美麗野生動植物的家園，包含猴子、鳥類和熊。"
  },
  {
    "word": "prey",
    "pos": "n./v.",
    "cn_def": "獵物；捕食",
    "en_def": "An animal that is hunted and killed by another for food.",
    "sentence": "Many small mammals and insects on this remote island are easy {{BLANK}} for the large, venomous snakes that live here.",
    "cn": "這座偏遠島嶼上的許多小型哺乳動物和昆蟲，都是生活在這裡的大型毒蛇的容易到手的獵物。"
  },
  {
    "word": "predators",
    "pos": "n.",
    "cn_def": "掠食者",
    "en_def": "An animal that naturally preys on others.",
    "sentence": "Nesting high on the steep cliff wall, the young birds were completely safe from dangerous {{BLANK}} that roamed below.",
    "cn": "在陡峭的懸崖壁高處築巢，幼鳥們完全免於在下方漫遊的危險掠食者的威脅。"
  },
  {
    "word": "enhancement",
    "pos": "n.",
    "cn_def": "提升；改進",
    "en_def": "An increase or improvement in quality, value, or extent.",
    "sentence": "The software update provides a significant {{BLANK}} to the system's security, making it much harder for hackers to steal information.",
    "cn": "這次軟體更新為系統的安全性提供了顯著的提升，讓駭客更難竊取資訊。"
  },
  {
    "word": "vision",
    "pos": "n.",
    "cn_def": "視力；願景",
    "en_def": "The faculty of being able to see; the ability to plan the future with imagination.",
    "sentence": "Marcus has a great and ambitious {{BLANK}} for his startup company, but it will be quite difficult to make it happen.",
    "cn": "馬庫斯對他的新創公司有一個偉大且雄心勃勃的願景，但要實現它將會相當困難。"
  },
  {
    "word": "mammal",
    "pos": "n.",
    "cn_def": "哺乳動物",
    "en_def": "A warm-blooded vertebrate animal with hair or fur.",
    "sentence": "It is a fascinating scientific fact that the largest {{BLANK}} in the entire world is the massive blue whale.",
    "cn": "整個世界上最大的哺乳動物是巨大的藍鯨，這是一個迷人的科學事實。"
  },
  {
    "word": "consciousness",
    "pos": "n.",
    "cn_def": "意識；知覺",
    "en_def": "The state of being awake and aware of one's surroundings.",
    "sentence": "After being struck heavily on the head by a falling rock, the injured hiker briefly lost {{BLANK}} before the rescue team arrived.",
    "cn": "在頭部被落石重擊後，受傷的登山客在救援隊抵達前短暫失去了意識。"
  },
  {
    "word": "shortcoming",
    "pos": "n.",
    "cn_def": "缺點；短處",
    "en_def": "A fault or failure to meet a certain standard.",
    "sentence": "Jesse is a brilliant engineer, but her only major {{BLANK}} is that she completely refuses to learn how to speak Chinese.",
    "cn": "潔西是位才華洋溢的工程師，但她唯一主要的缺點是她完全拒絕學習如何說中文。"
  },
  {
    "word": "weakness",
    "pos": "n.",
    "cn_def": "弱點",
    "en_def": "A disadvantage or fault; lack of strength.",
    "sentence": "During the demanding job interview, the manager asked me to truthfully describe my greatest professional strength and my greatest {{BLANK}}.",
    "cn": "在要求嚴格的工作面試中，經理要求我如實描述我最大的專業優勢和我最大的弱點。"
  },
  {
    "word": "tolerance",
    "pos": "n.",
    "cn_def": "寬容；忍耐力",
    "en_def": "The ability or willingness to tolerate something.",
    "sentence": "The wise leader preached a message of peace and religious {{BLANK}} to help unite the deeply divided country during the crisis.",
    "cn": "明智的領袖傳達了和平與宗教寬容的訊息，以幫助在危機期間團結嚴重分裂的國家。"
  },
  {
    "word": "circumstances",
    "pos": "n.",
    "cn_def": "情況；環境",
    "en_def": "A fact or condition connected with or relevant to an event or action.",
    "sentence": "The two men didn't get along well, but under entirely different {{BLANK}}, they could have actually been great friends.",
    "cn": "這兩個男人相處得不好，但在完全不同的情況下，他們實際上可能成為很好的朋友。"
  },
  {
    "word": "condition",
    "pos": "n.",
    "cn_def": "狀況；條件",
    "en_def": "The state of something, especially with regard to its appearance or working order.",
    "sentence": "The used car was highly affordable, but it was unfortunately in terrible {{BLANK}} and needed expensive repairs to its engine.",
    "cn": "這輛二手車非常負擔得起，但不幸的是它的狀況很糟，且需要對其引擎進行昂貴的維修。"
  },
  {
    "word": "defense",
    "pos": "n.",
    "cn_def": "防禦；防衛",
    "en_def": "The action of defending from or resisting attack.",
    "sentence": "Sadly, the ancient city's strong stone {{BLANK}} did not stop the invading enemy soldiers from climbing the walls and getting inside.",
    "cn": "令人遺憾地，這座古城堅固的石頭防禦並沒有阻止入侵的敵方士兵爬上城牆並進入內部。"
  },
  {
    "word": "self-defense",
    "pos": "phr.",
    "cn_def": "自衛",
    "en_def": "The defense of one's person using physical force.",
    "sentence": "The lawyer argued that his frightened client only attacked the aggressive man in an act of pure {{BLANK}} to save her own life.",
    "cn": "律師辯稱，他受驚的委託人只是出於純粹的自衛行為才攻擊那名具攻擊性的男子以保住自己的性命。"
  },
  {
    "word": "solidify",
    "pos": "v.",
    "cn_def": "鞏固；凝固",
    "en_def": "To make or become hard or solid; to make stronger.",
    "sentence": "The recent successful project helped to {{BLANK}} her position as the most capable manager in the entire marketing department.",
    "cn": "最近成功的專案有助於鞏固她作為整個行銷部門中最有能力經理的地位。"
  },
  {
    "word": "socialize",
    "pos": "v.",
    "cn_def": "交際；參與社交",
    "en_def": "To mix socially with others.",
    "sentence": "The weekend conference is a perfect opportunity for young professionals to {{BLANK}} and build valuable connections within the industry.",
    "cn": "這個週末會議是年輕專業人士參與社交並在業界建立寶貴人脈的完美機會。"
  },
  {
    "word": "roamed",
    "pos": "v.",
    "cn_def": "漫遊；遊蕩",
    "en_def": "To move about or travel aimlessly over a wide area.",
    "sentence": "Thousands of years ago, massive herds of wild bison once {{BLANK}} freely across the vast and empty American plains.",
    "cn": "數千年前，大量的野生野牛群曾經在廣闊空曠的美洲平原上自由漫遊。"
  },
  {
    "word": "wander",
    "pos": "v.",
    "cn_def": "徘徊；閒逛",
    "en_def": "To walk or move in a leisurely, casual, or aimless way.",
    "sentence": "On Sunday afternoons, I love to just {{BLANK}} through the city's botanical gardens and admire the beautiful blooming flowers.",
    "cn": "在星期天下午，我喜歡只是在城市的植物園裡閒逛，並欣賞美麗盛開的花朵。"
  },
  {
    "word": "enhance",
    "pos": "v.",
    "cn_def": "提高；增加",
    "en_def": "To intensify or further improve the quality, value, or extent of.",
    "sentence": "The chef added a variety of fresh local herbs and spices to {{BLANK}} the natural flavor of the expensive steak.",
    "cn": "廚師加入各種新鮮的當地香草和香料，以提升這塊昂貴牛排的天然風味。"
  },
  {
    "word": "tolerate",
    "pos": "v.",
    "cn_def": "容忍；忍受",
    "en_def": "To allow the existence of something one does not necessarily like or agree with.",
    "sentence": "The strict teacher clearly stated on the first day of class that she is not going to {{BLANK}} your rudeness any longer.",
    "cn": "嚴格的老師在開學第一天就清楚聲明她不打算再容忍你的粗魯了。"
  },
  {
    "word": "defend",
    "pos": "v.",
    "cn_def": "保衛；防守",
    "en_def": "To resist an attack; to protect from harm or danger.",
    "sentence": "The brave soldiers were ordered to fiercely {{BLANK}} the strategic bridge against the advancing enemy troops at all costs.",
    "cn": "勇敢的士兵們被命令要不惜一切代價猛烈地保衛這座具戰略意義的橋樑，抵禦推進的敵軍。"
  },
  {
    "word": "lengthen",
    "pos": "v.",
    "cn_def": "加長；延長",
    "en_def": "To make or become longer.",
    "sentence": "Doing regular stretching exercises can help to {{BLANK}} your muscles and significantly reduce the risk of sports injuries.",
    "cn": "規律地做伸展運動可以幫助延長你的肌肉並顯著降低運動傷害的風險。"
  },
  {
    "word": "longed for",
    "pos": "v.",
    "cn_def": "期盼；渴望",
    "en_def": "To want or desire something very much; to yearn for.",
    "sentence": "The job seeker {{BLANK}} a chance to get a full-time job with a decent salary.",
    "cn": "這位求職者期盼渴望得到全職工作且有不錯的薪資。"
  },
  {
    "word": "mutual trust",
    "pos": "phr.",
    "cn_def": "互信",
    "en_def": "A shared belief in the reliability, truth, or ability of each other.",
    "sentence": "Building strong {{BLANK}} is essential for any successful partnership, especially when starting a new business together.",
    "cn": "建立堅強的互信對於任何成功的合夥關係都是不可或缺的，尤其是在一起開創新事業時。"
  },
  {
    "word": "mutual respect",
    "pos": "phr.",
    "cn_def": "互相尊重",
    "en_def": "A shared feeling of admiration and consideration for each other.",
    "sentence": "A healthy and long-lasting marriage must be built on a foundation of honesty, excellent communication, and deep {{BLANK}}.",
    "cn": "一段健康且長久的婚姻必須建立在誠實、良好的溝通和深深的互相尊重的基礎上。"
  },
  {
    "word": "show solidarity with",
    "pos": "phr.",
    "cn_def": "展現對...的團結/支持",
    "en_def": "To demonstrate support for a group or cause.",
    "sentence": "Hundreds of university teachers joined the massive street march to {{BLANK}} their protesting students.",
    "cn": "數百名大學教師加入了大規模的街頭遊行，以展現對抗議學生的團結。"
  },
  {
    "word": "express solidarity",
    "pos": "phr.",
    "cn_def": "表達支持/團結",
    "en_def": "To state or communicate one's support for a group.",
    "sentence": "Several international leaders released statements to {{BLANK}} the nation after it was struck by the terrible earthquake.",
    "cn": "在該國遭受可怕的地震襲擊後，幾位國際領袖發表聲明以表達支持。"
  },
  {
    "word": "live by the motto",
    "pos": "phr.",
    "cn_def": "秉持...的座右銘生活",
    "en_def": "To base one's life choices on a specific phrase or belief.",
    "sentence": "I always try to {{BLANK}} that honesty is the best policy, even when telling the truth is difficult.",
    "cn": "我總是試著秉持「誠實為上策」的座右銘生活，即使說出真相很困難。"
  },
  {
    "word": "school motto",
    "pos": "phr.",
    "cn_def": "校訓",
    "en_def": "A phrase representing the educational beliefs or values of a school.",
    "sentence": "The principal proudly reminded the graduating students of the {{BLANK}}, encouraging them to always strive for excellence.",
    "cn": "校長自豪地提醒畢業生們校訓，鼓勵他們永遠追求卓越。"
  },
  {
    "word": "company motto",
    "pos": "phr.",
    "cn_def": "公司宗旨",
    "en_def": "A short phrase expressing the guiding principles of a business.",
    "sentence": "The newly established tech firm chose 'Innovation through Collaboration' as its official {{BLANK}} to inspire all its employees.",
    "cn": "這家新成立的科技公司選擇「透過合作創新」作為其官方的公司宗旨以激勵所有員工。"
  },
  {
    "word": "secret to longevity",
    "pos": "phr.",
    "cn_def": "長壽的秘訣",
    "en_def": "The reason or method for living a very long time.",
    "sentence": "Many researchers believe that the {{BLANK}} involves a combination of a healthy diet, daily exercise, and low stress.",
    "cn": "許多研究人員相信，長壽的秘訣包含了健康飲食、日常運動和低壓力的結合。"
  },
  {
    "word": "promote longevity",
    "pos": "phr.",
    "cn_def": "促進長壽",
    "en_def": "To encourage or contribute to a longer lifespan.",
    "sentence": "Eating plenty of fresh vegetables and avoiding processed foods are proven lifestyle habits that actively {{BLANK}} in human beings.",
    "cn": "多吃新鮮蔬菜並避免加工食品是被證實能積極促進人類長壽的生活習慣。"
  },
  {
    "word": "wildlife conservation",
    "pos": "phr.",
    "cn_def": "野生動物保育",
    "en_def": "The practice of protecting wild plant and animal species and their habitats.",
    "sentence": "The government has heavily invested in {{BLANK}} programs to ensure that endangered species are protected from illegal hunting.",
    "cn": "政府已大量投資於野生動物保育計畫，以確保瀕危物種免受非法狩獵的威脅。"
  },
  {
    "word": "wildlife habitat",
    "pos": "phr.",
    "cn_def": "野生動物棲息地",
    "en_def": "The natural environment in which a particular species of wild animal lives.",
    "sentence": "Cutting down ancient forests destroys the essential {{BLANK}} that thousands of rare animals depend on for their survival.",
    "cn": "砍伐古老森林摧毀了數千種珍稀動物賴以生存的必要野生動物棲息地。"
  },
  {
    "word": "in the wild",
    "pos": "phr.",
    "cn_def": "在野外",
    "en_def": "In a natural state or environment, unconfined by humans.",
    "sentence": "It is absolutely thrilling to see a powerful tiger running freely {{BLANK}} rather than locked inside a small cage.",
    "cn": "看到一隻強壯的老虎在野外自由奔跑，而不是被關在小籠子裡，絕對是令人興奮的。"
  },
  {
    "word": "social animal",
    "pos": "phr.",
    "cn_def": "群居動物；喜歡社交的人",
    "en_def": "An animal (including humans) that is highly interactive with other members of its species.",
    "sentence": "Humans are naturally a {{BLANK}}, meaning that we desperately need communication and connection with others to maintain good mental health.",
    "cn": "人類天生就是一種群居動物，這意味著我們極度需要與他人溝通和連結以維持良好的心理健康。"
  },
  {
    "word": "fell prey to",
    "pos": "phr.",
    "cn_def": "成為...的犧牲品；受...所害",
    "en_def": "To be vulnerable to or overcome by something.",
    "sentence": "Unfortunately, the elderly woman {{BLANK}} a sophisticated online scam and lost almost all of her life savings.",
    "cn": "不幸地，這位老婦人成為一場複雜網路詐騙的犧牲品，失去了幾乎所有的畢生積蓄。"
  },
  {
    "word": "prey on",
    "pos": "phr.",
    "cn_def": "捕食；利用",
    "en_def": "To hunt and kill for food; to take advantage of someone.",
    "sentence": "It is a known fact that domestic cats will often {{BLANK}} wild birds and rats if they are allowed outside.",
    "cn": "眾所周知，如果允許家貓外出，牠們經常會捕食野鳥和老鼠。"
  },
  {
    "word": "bird of prey",
    "pos": "phr.",
    "cn_def": "猛禽",
    "en_def": "A bird that feeds on animal flesh, with a strong hooked bill and sharp talons.",
    "sentence": "The eagle is a magnificent {{BLANK}} that can easily spot small animals from hundreds of feet in the air.",
    "cn": "老鷹是一種壯麗的猛禽，能從數百英尺的高空輕鬆發現小動物。"
  },
  {
    "word": "easy prey",
    "pos": "phr.",
    "cn_def": "容易下手的目標",
    "en_def": "Someone or something that is easily attacked or deceived.",
    "sentence": "Tourists who carry expensive cameras and leave their bags unzipped are often {{BLANK}} for clever pickpockets in crowded areas.",
    "cn": "帶著昂貴相機且包包沒拉上拉鍊的遊客，在擁擠的地區通常是聰明扒手容易下手的目標。"
  },
  {
    "word": "apex predator",
    "pos": "phr.",
    "cn_def": "頂級掠食者",
    "en_def": "A predator at the top of a food chain, without natural predators of its own.",
    "sentence": "The great white shark is an {{BLANK}} in the ocean, playing a crucial role in maintaining the balance of marine life.",
    "cn": "大白鯊是海洋中的頂級掠食者，在維持海洋生物平衡中扮演著關鍵的角色。"
  },
  {
    "word": "natural predator",
    "pos": "phr.",
    "cn_def": "天敵",
    "en_def": "An animal that hunts and eats a particular species in nature.",
    "sentence": "Because the invasive insect has no {{BLANK}} in this new environment, its population has multiplied out of control rapidly.",
    "cn": "因為這種入侵昆蟲在這個新環境中沒有天敵，牠的數量已迅速繁殖到失控的地步。"
  },
  {
    "word": "performance enhancement",
    "pos": "phr.",
    "cn_def": "效能提升；表現增強",
    "en_def": "The act of improving the efficiency or output of something.",
    "sentence": "The athlete was banned from the upcoming Olympic games after testing positive for illegal {{BLANK}} drugs during a random check.",
    "cn": "這名運動員在隨機檢查中對非法的表現增強藥物呈陽性反應後，被禁止參加即將到來的奧運會。"
  },
  {
    "word": "night vision",
    "pos": "phr.",
    "cn_def": "夜視能力",
    "en_def": "The ability to see in low light conditions.",
    "sentence": "Gail says that her {{BLANK}} is very bad, so she strongly prefers to never drive a car after the sun goes down.",
    "cn": "蓋兒說她的夜視能力非常差，所以她強烈傾向在太陽下山後絕不開車。"
  },
  {
    "word": "field of vision",
    "pos": "phr.",
    "cn_def": "視野",
    "en_def": "The entire area a person or animal is able to see when their eyes are fixed in one position.",
    "sentence": "When driving on the highway, a sudden movement in my {{BLANK}} warned me that a deer was jumping onto the road.",
    "cn": "在高速公路上開車時，我視野中突然的移動警告我有一隻鹿正跳到路上。"
  },
  {
    "word": "visionary",
    "pos": "",
    "cn_def": "",
    "en_def": "",
    "sentence": "Steve Jobs was widely recognized as a brilliant {{BLANK}} who completely revolutionized the personal computer and mobile phone industries.",
    "cn": "史蒂夫·賈伯斯被廣泛認可為一位才華洋溢的有遠見的人，他徹底顛覆了個人電腦和行動電話產業。"
  },
  {
    "word": "marine mammals",
    "pos": "phr.",
    "cn_def": "海洋哺乳動物",
    "en_def": "A mammal that lives in the ocean or depends on the ocean for its food.",
    "sentence": "Dolphins and seals are highly intelligent {{BLANK}} that rely heavily on sound to communicate underwater.",
    "cn": "海豚和海豹是高度聰明的海洋哺乳動物，牠們嚴重依賴聲音在水下溝通。"
  },
  {
    "word": "land mammal",
    "pos": "phr.",
    "cn_def": "陸地哺乳動物",
    "en_def": "A mammal that primarily lives on land.",
    "sentence": "The cheetah is widely known for being the fastest {{BLANK}} on the planet, capable of reaching incredible speeds during a hunt.",
    "cn": "獵豹以地球上跑得最快的陸地哺乳動物而廣為人知，能夠在狩獵期間達到驚人的速度。"
  },
  {
    "word": "roaming around",
    "pos": "phr.",
    "cn_def": "在...四處走動/遊蕩",
    "en_def": "To walk or travel without a specific destination in a particular area.",
    "sentence": "During our vacation in Rome, we spent the entire morning {{BLANK}} the ancient ruins and taking beautiful photos.",
    "cn": "在羅馬度假期間，我們花了整個早上在古老遺跡中四處走動並拍下美麗的照片。"
  },
  {
    "word": "roam freely",
    "pos": "phr.",
    "cn_def": "自由漫遊",
    "en_def": "To move about without restrictions or boundaries.",
    "sentence": "The national park was established so that endangered elephants and rhinos could {{BLANK}} without the threat of being hunted.",
    "cn": "建立國家公園是為了讓瀕危的大象和犀牛可以自由漫遊，而不受被狩獵的威脅。"
  },
  {
    "word": "overcome a shortcoming",
    "pos": "phr.",
    "cn_def": "克服缺點",
    "en_def": "To successfully deal with a personal fault or flaw.",
    "sentence": "Through months of dedicated practice and public speaking classes, Daniel finally managed to {{BLANK}} of being extremely shy.",
    "cn": "透過幾個月的專心練習和公開演講課程，丹尼爾終於成功克服了他極度害羞的缺點。"
  },
  {
    "word": "major shortcoming",
    "pos": "phr.",
    "cn_def": "主要缺點",
    "en_def": "A significant or prominent fault or weakness.",
    "sentence": "The {{BLANK}} of this new software is that it frequently crashes when too many people try to use it at the same time.",
    "cn": "這款新軟體的主要缺點是當太多人試圖同時使用它時，它經常會崩潰。"
  },
  {
    "word": "zero tolerance",
    "pos": "phr.",
    "cn_def": "零容忍",
    "en_def": "A strict policy of not allowing a particular type of behavior.",
    "sentence": "The school board recently adopted a strict {{BLANK}} policy towards bullying, meaning any offender will be suspended immediately.",
    "cn": "學校董事會最近對霸凌採取了嚴格的零容忍政策，這意味著任何違規者將在沒有警告的情況下被立即停學。"
  },
  {
    "word": "put up with",
    "pos": "phr.",
    "cn_def": "忍受",
    "en_def": "To endure or tolerate someone or something.",
    "sentence": "We'll just have to patiently {{BLANK}} the terrible noise from the construction site next door until the building work is completed.",
    "cn": "我們只好耐心地忍受隔壁建築工地的可怕噪音，直到建築工程完成。"
  },
  {
    "word": "on condition that",
    "pos": "phr.",
    "cn_def": "條件是…；在…的條件下",
    "en_def": "Only if a specific thing happens; provided that.",
    "sentence": "The school allowed Marcus to take the elective course {{BLANK}} he attended every single class.",
    "cn": "學校允許馬庫斯選修這門選修課，條件是他每堂課都必須出席。"
  },
  {
    "word": "in critical condition",
    "pos": "phr.",
    "cn_def": "情況危急；病危",
    "en_def": "Extremely ill or injured, and likely to die or face serious danger.",
    "sentence": "Following the severe traffic accident, the truck driver was rushed to the hospital and remains {{BLANK}}.",
    "cn": "在那場嚴重的交通意外之後，卡車司機被緊急送往醫院，目前仍情況危急。"
  },
  {
    "word": "in good condition",
    "pos": "phr.",
    "cn_def": "狀態良好；完好無缺",
    "en_def": "Healthy, working well, or looking clean and undamaged.",
    "sentence": "Although this smartphone is a used model, it is still {{BLANK}} and looks completely new.",
    "cn": "雖然這款智慧型手機是二手型號，但它依然狀態良好，而且看起來像全新的一樣。"
  },
  {
    "word": "in bad condition",
    "pos": "phr.",
    "cn_def": "狀態不佳；破舊不堪",
    "en_def": "Sick, not working properly, or heavily damaged.",
    "sentence": "The historic mountain cabin was {{BLANK}} after being abandoned and neglected for over twenty years.",
    "cn": "這座歷史悠久的山區小屋在被遺棄並疏於照顧二十多年後，已經破舊不堪（狀態不佳）。"
  },
  {
    "word": "Under no circumstances",
    "pos": "phr.",
    "cn_def": "無論在任何情況下都不",
    "en_def": "Never; absolutely not.",
    "sentence": "The doctor emphasized that {{BLANK}} are you officially allowed to look at another patient's private and confidential medical records.",
    "cn": "醫生強調，無論在任何情況下都不正式允許你查看另一位病人的私人且機密的醫療記錄。"
  },
  {
    "word": "Under normal circumstances",
    "pos": "phr.",
    "cn_def": "在正常情況下",
    "en_def": "Usually; in a typical situation.",
    "sentence": "{{BLANK}}, the flight from New York to London only takes about seven hours, but a massive storm caused severe delays today.",
    "cn": "在正常情況下，從紐約飛往倫敦只需大約七個小時，但今天一場巨大的風暴造成了嚴重的延誤。"
  },
  {
    "word": "unforeseen circumstances",
    "pos": "phr.",
    "cn_def": "不可預見的情況",
    "en_def": "Unexpected events or situations that could not be predicted.",
    "sentence": "Due to completely {{BLANK}}, the popular outdoor music festival had to be suddenly canceled just hours before it was supposed to begin.",
    "cn": "由於完全不可預見的情況，這個受歡迎的戶外音樂節不得不在原定開始前幾個小時突然被取消。"
  },
  {
    "word": "airtight container",
    "pos": "phr.",
    "cn_def": "密封容器",
    "en_def": "A box or jar designed to keep air out.",
    "sentence": "If you keep your leftover meals stored in an {{BLANK}} inside the refrigerator, the food will stay fresh for much longer.",
    "cn": "如果你把吃剩的飯菜存放在冰箱裡的密封容器中，食物會保鮮更久。"
  },
  {
    "word": "airtight alibi",
    "pos": "phr.",
    "cn_def": "完美的不在場證明",
    "en_def": "A claim of being elsewhere when a crime was committed that is impossible to disprove.",
    "sentence": "The detective was extremely frustrated because the primary suspect had an {{BLANK}} verified by dozens of reliable witnesses at the party.",
    "cn": "偵探感到極度挫折，因為主要嫌疑犯擁有數十名在派對上的可靠證人所證實的完美的不在場證明。"
  }
];

const MCQS = [
  {
    "q": "Even though they have very different personalities, John and Carrie share a ______ appreciation for classic jazz music.",
    "options": [
      "mutual",
      "predatory",
      "visible",
      "unsociable"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "You need a ______ understanding of basic mathematical principles before you can attempt to solve these advanced physics equations.",
    "options": [
      "visible",
      "solid",
      "wild",
      "mutual"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The Millers are incredibly ______ people who frequently enjoy having loud and exciting dinner parties with their neighbors.",
    "options": [
      "enhanced",
      "airtight",
      "indisputable",
      "sociable"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Ever since he lost his job, he has become quite ______, refusing to leave his room or speak to anyone.",
    "options": [
      "solid",
      "conscious",
      "unsociable",
      "wild"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "His habit of ignoring people when they speak to him is considered completely ______ and rude by his colleagues.",
    "options": [
      "antisocial",
      "predatory",
      "defensive",
      "indisputable"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "We went on an exciting safari in Africa and took incredible photographs of ______ lions, elephants, and giraffes.",
    "options": [
      "tolerant",
      "wild",
      "enhanced",
      "solid"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The newest version of the sports car comes with several ______ safety features to better protect the driver during an accident.",
    "options": [
      "conscious",
      "indisputable",
      "enhanced",
      "sociable"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Bobby bites his fingernails all the time when he's nervous, but he doesn't usually do it in a ______ manner.",
    "options": [
      "tolerant",
      "antisocial",
      "predatory",
      "conscious"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "In a diverse and modern society, it is essential that citizens be more ______ of cultures and beliefs that are different from their own.",
    "options": [
      "tolerant",
      "mutual",
      "predatory",
      "sealed"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The careful engineer made absolutely sure to have ______ knowledge of the challenging landscape before he started building the suspension bridge.",
    "options": [
      "visible",
      "airtight",
      "defensive",
      "antisocial"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The surveillance video provided clear and ______ evidence that the suspect was nowhere near the bank when the robbery actually occurred.",
    "options": [
      "predatory",
      "sociable",
      "indisputable",
      "wild"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The ancient Egyptian tomb had remained completely ______ for thousands of years until modern archaeologists finally discovered its hidden entrance.",
    "options": [
      "tolerant",
      "enhanced",
      "antisocial",
      "sealed"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The bright stars were clearly ______ in the night sky because we were camping far away from the city's light pollution.",
    "options": [
      "indisputable",
      "unsociable",
      "visible",
      "antisocial"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Whenever I gently suggest that he could improve his writing skills, he immediately gets incredibly ______ and starts arguing with me.",
    "options": [
      "antisocial",
      "defensive",
      "visible",
      "unsociable"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The government is trying to pass new laws to protect vulnerable citizens from the ______ lending practices of some banks.",
    "options": [
      "defensive",
      "conscious",
      "wild",
      "predatory"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The two rival companies eventually reached a ______ beneficial agreement that allowed both of them to increase their profits.",
    "options": [
      "mutually",
      "unconsciously",
      "subconsciously",
      "consciously"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "You must ______ force yourself to sit up straight at your desk, otherwise you will eventually develop terrible back pain.",
    "options": [
      "subconsciously",
      "consciously",
      "mutually",
      "unconsciously"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "As the suspenseful movie reached its climax, I was ______ holding my breath the entire time until the scene ended.",
    "options": [
      "subconsciously",
      "consciously",
      "unconsciously",
      "mutually"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Even though he smiled and said he was fine, he was ______ rubbing his sore shoulder throughout the entire meeting.",
    "options": [
      "unconsciously",
      "mutually",
      "consciously",
      "subconsciously"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The factory workers showed incredible ______ during the strike, refusing to return to work until their demands were met.",
    "options": [
      "solidarity",
      "motto",
      "mammal",
      "enhancement"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Many successful professional athletes apply the ______ 'no pain, no gain' to their strict daily training routines.",
    "options": [
      "predators",
      "longevity",
      "motto",
      "tolerance"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Extreme ______ is quite normal in my family, as both of my grandparents lived to be over 100 years old.",
    "options": [
      "longevity",
      "mammal",
      "shortcoming",
      "predators"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Taiwan's central mountain ranges are home to a diverse and beautiful range of ______, including monkeys, birds, and bears.",
    "options": [
      "solidarity",
      "prey",
      "condition",
      "wildlife"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Many small mammals and insects on this remote island are easy ______ for the large, venomous snakes that live here.",
    "options": [
      "solidarity",
      "prey",
      "longevity",
      "predators"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Nesting high on the steep cliff wall, the young birds were completely safe from dangerous ______ that roamed below.",
    "options": [
      "predators",
      "solidarity",
      "weakness",
      "circumstances"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The software update provides a significant ______ to the system's security, making it much harder for hackers to steal information.",
    "options": [
      "weakness",
      "circumstances",
      "vision",
      "enhancement"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Marcus has a great and ambitious ______ for his startup company, but it will be quite difficult to make it happen.",
    "options": [
      "prey",
      "vision",
      "wildlife",
      "consciousness"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "It is a fascinating scientific fact that the largest ______ in the entire world is the massive blue whale.",
    "options": [
      "enhancement",
      "circumstances",
      "mammal",
      "longevity"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "After being struck heavily on the head by a falling rock, the injured hiker briefly lost ______ before the rescue team arrived.",
    "options": [
      "solidarity",
      "enhancement",
      "motto",
      "consciousness"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Jesse is a brilliant engineer, but her only major ______ is that she completely refuses to learn how to speak Chinese.",
    "options": [
      "shortcoming",
      "defense",
      "mammal",
      "circumstances"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "During the demanding job interview, the manager asked me to truthfully describe my greatest professional strength and my greatest ______.",
    "options": [
      "motto",
      "predators",
      "weakness",
      "prey"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The wise leader preached a message of peace and religious ______ to help unite the deeply divided country during the crisis.",
    "options": [
      "vision",
      "tolerance",
      "predators",
      "longevity"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The two men didn't get along well, but under entirely different ______, they could have actually been great friends.",
    "options": [
      "circumstances",
      "enhancement",
      "solidarity",
      "weakness"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The used car was highly affordable, but it was unfortunately in terrible ______ and needed expensive repairs to its engine.",
    "options": [
      "mammal",
      "longevity",
      "weakness",
      "condition"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "Sadly, the ancient city's strong stone ______ did not stop the invading enemy soldiers from climbing the walls and getting inside.",
    "options": [
      "motto",
      "consciousness",
      "defense",
      "wildlife"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "The lawyer argued that his frightened client only attacked the aggressive man in an act of pure ______ to save her own life.",
    "options": [
      "secret to longevity",
      "self-defense",
      "apex predator",
      "unforeseen circumstances"
    ],
    "answer": 1,
    "vocabIndex": 35
  },
  {
    "q": "The recent successful project helped to ______ her position as the most capable manager in the entire marketing department.",
    "options": [
      "defend",
      "roamed",
      "enhance",
      "solidify"
    ],
    "answer": 3,
    "vocabIndex": 36
  },
  {
    "q": "The weekend conference is a perfect opportunity for young professionals to ______ and build valuable connections within the industry.",
    "options": [
      "tolerate",
      "wander",
      "socialize",
      "roamed"
    ],
    "answer": 2,
    "vocabIndex": 37
  },
  {
    "q": "Thousands of years ago, massive herds of wild bison once ______ freely across the vast and empty American plains.",
    "options": [
      "roamed",
      "wander",
      "lengthen",
      "solidify"
    ],
    "answer": 0,
    "vocabIndex": 38
  },
  {
    "q": "On Sunday afternoons, I love to just ______ through the city's botanical gardens and admire the beautiful blooming flowers.",
    "options": [
      "lengthen",
      "wander",
      "longed for",
      "roamed"
    ],
    "answer": 1,
    "vocabIndex": 39
  },
  {
    "q": "The chef added a variety of fresh local herbs and spices to ______ the natural flavor of the expensive steak.",
    "options": [
      "wander",
      "socialize",
      "enhance",
      "lengthen"
    ],
    "answer": 2,
    "vocabIndex": 40
  },
  {
    "q": "The strict teacher clearly stated on the first day of class that she is not going to ______ your rudeness any longer.",
    "options": [
      "lengthen",
      "defend",
      "solidify",
      "tolerate"
    ],
    "answer": 3,
    "vocabIndex": 41
  },
  {
    "q": "The brave soldiers were ordered to fiercely ______ the strategic bridge against the advancing enemy troops at all costs.",
    "options": [
      "defend",
      "solidify",
      "tolerate",
      "socialize"
    ],
    "answer": 0,
    "vocabIndex": 42
  },
  {
    "q": "Doing regular stretching exercises can help to ______ your muscles and significantly reduce the risk of sports injuries.",
    "options": [
      "tolerate",
      "lengthen",
      "socialize",
      "longed for"
    ],
    "answer": 1,
    "vocabIndex": 43
  },
  {
    "q": "The job seeker ______ a chance to get a full-time job with a decent salary.",
    "options": [
      "solidify",
      "defend",
      "longed for",
      "socialize"
    ],
    "answer": 2,
    "vocabIndex": 44
  },
  {
    "q": "Building strong ______ is essential for any successful partnership, especially when starting a new business together.",
    "options": [
      "fell prey to",
      "mutual trust",
      "social animal",
      "wildlife conservation"
    ],
    "answer": 1,
    "vocabIndex": 45
  },
  {
    "q": "A healthy and long-lasting marriage must be built on a foundation of honesty, excellent communication, and deep ______.",
    "options": [
      "roam freely",
      "express solidarity",
      "land mammal",
      "mutual respect"
    ],
    "answer": 3,
    "vocabIndex": 46
  },
  {
    "q": "Hundreds of university teachers joined the massive street march to ______ their protesting students.",
    "options": [
      "show solidarity with",
      "social animal",
      "in bad condition",
      "mutual respect"
    ],
    "answer": 0,
    "vocabIndex": 47
  },
  {
    "q": "Several international leaders released statements to ______ the nation after it was struck by the terrible earthquake.",
    "options": [
      "night vision",
      "in critical condition",
      "Under normal circumstances",
      "express solidarity"
    ],
    "answer": 3,
    "vocabIndex": 48
  },
  {
    "q": "I always try to ______ that honesty is the best policy, even when telling the truth is difficult.",
    "options": [
      "live by the motto",
      "overcome a shortcoming",
      "airtight container",
      "field of vision"
    ],
    "answer": 0,
    "vocabIndex": 49
  },
  {
    "q": "The principal proudly reminded the graduating students of the ______, encouraging them to always strive for excellence.",
    "options": [
      "marine mammals",
      "school motto",
      "wildlife conservation",
      "in good condition"
    ],
    "answer": 1,
    "vocabIndex": 50
  },
  {
    "q": "The newly established tech firm chose 'Innovation through Collaboration' as its official ______ to inspire all its employees.",
    "options": [
      "airtight container",
      "natural predator",
      "company motto",
      "fell prey to"
    ],
    "answer": 2,
    "vocabIndex": 51
  },
  {
    "q": "Many researchers believe that the ______ involves a combination of a healthy diet, daily exercise, and low stress.",
    "options": [
      "zero tolerance",
      "put up with",
      "show solidarity with",
      "secret to longevity"
    ],
    "answer": 3,
    "vocabIndex": 52
  },
  {
    "q": "Eating plenty of fresh vegetables and avoiding processed foods are proven lifestyle habits that actively ______ in human beings.",
    "options": [
      "natural predator",
      "Under no circumstances",
      "promote longevity",
      "easy prey"
    ],
    "answer": 2,
    "vocabIndex": 53
  },
  {
    "q": "The government has heavily invested in ______ programs to ensure that endangered species are protected from illegal hunting.",
    "options": [
      "put up with",
      "wildlife conservation",
      "wildlife habitat",
      "night vision"
    ],
    "answer": 1,
    "vocabIndex": 54
  },
  {
    "q": "Cutting down ancient forests destroys the essential ______ that thousands of rare animals depend on for their survival.",
    "options": [
      "wildlife habitat",
      "school motto",
      "promote longevity",
      "airtight alibi"
    ],
    "answer": 0,
    "vocabIndex": 55
  },
  {
    "q": "It is absolutely thrilling to see a powerful tiger running freely ______ rather than locked inside a small cage.",
    "options": [
      "roam freely",
      "self-defense",
      "in the wild",
      "Under normal circumstances"
    ],
    "answer": 2,
    "vocabIndex": 56
  },
  {
    "q": "Humans are naturally a ______, meaning that we desperately need communication and connection with others to maintain good mental health.",
    "options": [
      "social animal",
      "in bad condition",
      "self-defense",
      "airtight container"
    ],
    "answer": 0,
    "vocabIndex": 57
  },
  {
    "q": "Unfortunately, the elderly woman ______ a sophisticated online scam and lost almost all of her life savings.",
    "options": [
      "unforeseen circumstances",
      "fell prey to",
      "secret to longevity",
      "prey on"
    ],
    "answer": 1,
    "vocabIndex": 58
  },
  {
    "q": "It is a known fact that domestic cats will often ______ wild birds and rats if they are allowed outside.",
    "options": [
      "in good condition",
      "company motto",
      "on condition that",
      "prey on"
    ],
    "answer": 3,
    "vocabIndex": 59
  },
  {
    "q": "The eagle is a magnificent ______ that can easily spot small animals from hundreds of feet in the air.",
    "options": [
      "show solidarity with",
      "bird of prey",
      "field of vision",
      "prey on"
    ],
    "answer": 1,
    "vocabIndex": 60
  },
  {
    "q": "Tourists who carry expensive cameras and leave their bags unzipped are often ______ for clever pickpockets in crowded areas.",
    "options": [
      "easy prey",
      "on condition that",
      "in good condition",
      "live by the motto"
    ],
    "answer": 0,
    "vocabIndex": 61
  },
  {
    "q": "The great white shark is an ______ in the ocean, playing a crucial role in maintaining the balance of marine life.",
    "options": [
      "fell prey to",
      "in critical condition",
      "apex predator",
      "in good condition"
    ],
    "answer": 2,
    "vocabIndex": 62
  },
  {
    "q": "Because the invasive insect has no ______ in this new environment, its population has multiplied out of control rapidly.",
    "options": [
      "overcome a shortcoming",
      "show solidarity with",
      "prey on",
      "natural predator"
    ],
    "answer": 3,
    "vocabIndex": 63
  },
  {
    "q": "The athlete was banned from the upcoming Olympic games after testing positive for illegal ______ drugs during a random check.",
    "options": [
      "zero tolerance",
      "performance enhancement",
      "airtight container",
      "bird of prey"
    ],
    "answer": 1,
    "vocabIndex": 64
  },
  {
    "q": "Gail says that her ______ is very bad, so she strongly prefers to never drive a car after the sun goes down.",
    "options": [
      "roam freely",
      "show solidarity with",
      "night vision",
      "live by the motto"
    ],
    "answer": 2,
    "vocabIndex": 65
  },
  {
    "q": "When driving on the highway, a sudden movement in my ______ warned me that a deer was jumping onto the road.",
    "options": [
      "field of vision",
      "school motto",
      "Under no circumstances",
      "secret to longevity"
    ],
    "answer": 0,
    "vocabIndex": 66
  },
  {
    "q": "Steve Jobs was widely recognized as a brilliant ______ who completely revolutionized the personal computer and mobile phone industries.",
    "options": [
      "defense",
      "predatory",
      "tolerate",
      "visionary"
    ],
    "answer": 3,
    "vocabIndex": 67
  },
  {
    "q": "Dolphins and seals are highly intelligent ______ that rely heavily on sound to communicate underwater.",
    "options": [
      "marine mammals",
      "land mammal",
      "social animal",
      "Under normal circumstances"
    ],
    "answer": 0,
    "vocabIndex": 68
  },
  {
    "q": "The cheetah is widely known for being the fastest ______ on the planet, capable of reaching incredible speeds during a hunt.",
    "options": [
      "airtight alibi",
      "school motto",
      "land mammal",
      "overcome a shortcoming"
    ],
    "answer": 2,
    "vocabIndex": 69
  },
  {
    "q": "During our vacation in Rome, we spent the entire morning ______ the ancient ruins and taking beautiful photos.",
    "options": [
      "bird of prey",
      "roaming around",
      "airtight alibi",
      "live by the motto"
    ],
    "answer": 1,
    "vocabIndex": 70
  },
  {
    "q": "The national park was established so that endangered elephants and rhinos could ______ without the threat of being hunted.",
    "options": [
      "airtight container",
      "fell prey to",
      "natural predator",
      "roam freely"
    ],
    "answer": 3,
    "vocabIndex": 71
  },
  {
    "q": "Through months of dedicated practice and public speaking classes, Daniel finally managed to ______ of being extremely shy.",
    "options": [
      "in the wild",
      "mutual trust",
      "overcome a shortcoming",
      "Under normal circumstances"
    ],
    "answer": 2,
    "vocabIndex": 72
  },
  {
    "q": "The ______ of this new software is that it frequently crashes when too many people try to use it at the same time.",
    "options": [
      "major shortcoming",
      "marine mammals",
      "night vision",
      "show solidarity with"
    ],
    "answer": 0,
    "vocabIndex": 73
  },
  {
    "q": "The school board recently adopted a strict ______ policy towards bullying, meaning any offender will be suspended immediately.",
    "options": [
      "land mammal",
      "unforeseen circumstances",
      "apex predator",
      "zero tolerance"
    ],
    "answer": 3,
    "vocabIndex": 74
  },
  {
    "q": "We'll just have to patiently ______ the terrible noise from the construction site next door until the building work is completed.",
    "options": [
      "self-defense",
      "put up with",
      "in the wild",
      "Under no circumstances"
    ],
    "answer": 1,
    "vocabIndex": 75
  },
  {
    "q": "The school allowed Marcus to take the elective course ______ he attended every single class.",
    "options": [
      "on condition that",
      "Under no circumstances",
      "in bad condition",
      "Under normal circumstances"
    ],
    "answer": 0,
    "vocabIndex": 76
  },
  {
    "q": "Following the severe traffic accident, the truck driver was rushed to the hospital and remains ______.",
    "options": [
      "apex predator",
      "Under normal circumstances",
      "in critical condition",
      "roaming around"
    ],
    "answer": 2,
    "vocabIndex": 77
  },
  {
    "q": "Although this smartphone is a used model, it is still ______ and looks completely new.",
    "options": [
      "mutual trust",
      "in good condition",
      "marine mammals",
      "social animal"
    ],
    "answer": 1,
    "vocabIndex": 78
  },
  {
    "q": "The historic mountain cabin was ______ after being abandoned and neglected for over twenty years.",
    "options": [
      "roaming around",
      "airtight alibi",
      "mutual respect",
      "in bad condition"
    ],
    "answer": 3,
    "vocabIndex": 79
  },
  {
    "q": "The doctor emphasized that ______ are you officially allowed to look at another patient's private and confidential medical records.",
    "options": [
      "put up with",
      "mutual trust",
      "Under no circumstances",
      "unforeseen circumstances"
    ],
    "answer": 2,
    "vocabIndex": 80
  },
  {
    "q": "______, the flight from New York to London only takes about seven hours, but a massive storm caused severe delays today.",
    "options": [
      "prey on",
      "Under normal circumstances",
      "night vision",
      "wildlife habitat"
    ],
    "answer": 1,
    "vocabIndex": 81
  },
  {
    "q": "Due to completely ______, the popular outdoor music festival had to be suddenly canceled just hours before it was supposed to begin.",
    "options": [
      "self-defense",
      "mutual respect",
      "put up with",
      "unforeseen circumstances"
    ],
    "answer": 3,
    "vocabIndex": 82
  },
  {
    "q": "If you keep your leftover meals stored in an ______ inside the refrigerator, the food will stay fresh for much longer.",
    "options": [
      "airtight container",
      "social animal",
      "overcome a shortcoming",
      "zero tolerance"
    ],
    "answer": 0,
    "vocabIndex": 83
  },
  {
    "q": "The detective was extremely frustrated because the primary suspect had an ______ verified by dozens of reliable witnesses at the party.",
    "options": [
      "express solidarity",
      "airtight alibi",
      "secret to longevity",
      "apex predator"
    ],
    "answer": 1,
    "vocabIndex": 84
  }
];

const LOOKUP = {
  "mutual": {
    "pos": "adj.",
    "en_def": "Shared, felt, or shown equally by two or more people.",
    "cn_def": "互相的；共同的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Shared, felt, or shown equally by two or more people.",
        "cn_def": "互相的；共同的"
      }
    ]
  },
  "solid": {
    "pos": "adj.",
    "en_def": "Firm and stable in shape; not liquid or fluid.",
    "cn_def": "堅固的；紮實的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Firm and stable in shape; not liquid or fluid.",
        "cn_def": "堅固的；紮實的"
      }
    ]
  },
  "sociable": {
    "pos": "adj.",
    "en_def": "Willing to talk and engage in activities with others; friendly.",
    "cn_def": "好交際的；合群的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Willing to talk and engage in activities with others; friendly.",
        "cn_def": "好交際的；合群的"
      }
    ]
  },
  "unsociable": {
    "pos": "adj.",
    "en_def": "Not enjoying the company of others; not friendly.",
    "cn_def": "不愛交際的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Not enjoying the company of others; not friendly.",
        "cn_def": "不愛交際的"
      }
    ]
  },
  "antisocial": {
    "pos": "adj.",
    "en_def": "Contrary to the laws and customs of society; not sociable.",
    "cn_def": "反社會的；不擅社交的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Contrary to the laws and customs of society; not sociable.",
        "cn_def": "反社會的；不擅社交的"
      }
    ]
  },
  "wild": {
    "pos": "adj.",
    "en_def": "Living or growing in the natural environment; not domesticated.",
    "cn_def": "野生的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Living or growing in the natural environment; not domesticated.",
        "cn_def": "野生的"
      }
    ]
  },
  "enhanced": {
    "pos": "adj.",
    "en_def": "Intensified or further improved in quality or value.",
    "cn_def": "增強的；提升的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Intensified or further improved in quality or value.",
        "cn_def": "增強的；提升的"
      }
    ]
  },
  "conscious": {
    "pos": "adj.",
    "en_def": "Aware of and responding to one's surroundings; awake.",
    "cn_def": "有意識的；意識到的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Aware of and responding to one's surroundings; awake.",
        "cn_def": "有意識的；意識到的"
      }
    ]
  },
  "tolerant": {
    "pos": "adj.",
    "en_def": "Showing willingness to allow the existence of different opinions.",
    "cn_def": "寬容的；容忍的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Showing willingness to allow the existence of different opinions.",
        "cn_def": "寬容的；容忍的"
      }
    ]
  },
  "airtight": {
    "pos": "adj.",
    "en_def": "Not allowing air to escape; having no weaknesses.",
    "cn_def": "密不透風的；無懈可擊的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Not allowing air to escape; having no weaknesses.",
        "cn_def": "密不透風的；無懈可擊的"
      }
    ]
  },
  "indisputable": {
    "pos": "adj.",
    "en_def": "Unable to be challenged or denied.",
    "cn_def": "不容置疑的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Unable to be challenged or denied.",
        "cn_def": "不容置疑的"
      }
    ]
  },
  "sealed": {
    "pos": "adj.",
    "en_def": "Closed securely so that nothing can get in or out.",
    "cn_def": "密封的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Closed securely so that nothing can get in or out.",
        "cn_def": "密封的"
      }
    ]
  },
  "visible": {
    "pos": "adj.",
    "en_def": "Able to be seen.",
    "cn_def": "可見的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Able to be seen.",
        "cn_def": "可見的"
      }
    ]
  },
  "defensive": {
    "pos": "adj.",
    "en_def": "Used or intended to defend; oversensitive to criticism.",
    "cn_def": "防禦的；防備的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Used or intended to defend; oversensitive to criticism.",
        "cn_def": "防禦的；防備的"
      }
    ]
  },
  "predatory": {
    "pos": "adj.",
    "en_def": "Relating to an animal or person that preys on others.",
    "cn_def": "掠食的；剝削的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Relating to an animal or person that preys on others.",
        "cn_def": "掠食的；剝削的"
      }
    ]
  },
  "mutually": {
    "pos": "adv.",
    "en_def": "In a shared manner or to an equal degree.",
    "cn_def": "互相地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "In a shared manner or to an equal degree.",
        "cn_def": "互相地"
      }
    ]
  },
  "consciously": {
    "pos": "adv.",
    "en_def": "In a deliberate and intentional way.",
    "cn_def": "有意識地；蓄意地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "In a deliberate and intentional way.",
        "cn_def": "有意識地；蓄意地"
      }
    ]
  },
  "unconsciously": {
    "pos": "adv.",
    "en_def": "Without realizing or being aware of one's actions.",
    "cn_def": "無意識地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "Without realizing or being aware of one's actions.",
        "cn_def": "無意識地"
      }
    ]
  },
  "subconsciously": {
    "pos": "adv.",
    "en_def": "In a way influenced by the part of the mind one is not fully aware of.",
    "cn_def": "潛意識地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "In a way influenced by the part of the mind one is not fully aware of.",
        "cn_def": "潛意識地"
      }
    ]
  },
  "solidarity": {
    "pos": "n.",
    "en_def": "Unity or agreement of feeling or action among people with a common interest.",
    "cn_def": "團結",
    "combined": [
      {
        "pos": "n.",
        "en_def": "Unity or agreement of feeling or action among people with a common interest.",
        "cn_def": "團結"
      }
    ]
  },
  "motto": {
    "pos": "n.",
    "en_def": "A short sentence chosen as encapsulating the beliefs guiding an individual or group.",
    "cn_def": "座右銘；格言",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A short sentence chosen as encapsulating the beliefs guiding an individual or group.",
        "cn_def": "座右銘；格言"
      }
    ]
  },
  "longevity": {
    "pos": "n.",
    "en_def": "Long life; long existence or service.",
    "cn_def": "長壽；持久",
    "combined": [
      {
        "pos": "n.",
        "en_def": "Long life; long existence or service.",
        "cn_def": "長壽；持久"
      }
    ]
  },
  "wildlife": {
    "pos": "n.",
    "en_def": "Wild animals collectively; the native fauna of a region.",
    "cn_def": "野生動植物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "Wild animals collectively; the native fauna of a region.",
        "cn_def": "野生動植物"
      }
    ]
  },
  "prey": {
    "pos": "n./v.",
    "en_def": "An animal that is hunted and killed by another for food.",
    "cn_def": "獵物；捕食",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "An animal that is hunted and killed by another for food.",
        "cn_def": "獵物；捕食"
      }
    ]
  },
  "predator": {
    "pos": "n.",
    "en_def": "An animal that naturally preys on others.",
    "cn_def": "掠食者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "An animal that naturally preys on others.",
        "cn_def": "掠食者"
      }
    ]
  },
  "predators": {
    "pos": "n.",
    "en_def": "An animal that naturally preys on others.",
    "cn_def": "掠食者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "An animal that naturally preys on others.",
        "cn_def": "掠食者"
      }
    ]
  },
  "enhancement": {
    "pos": "n.",
    "en_def": "An increase or improvement in quality, value, or extent.",
    "cn_def": "提升；改進",
    "combined": [
      {
        "pos": "n.",
        "en_def": "An increase or improvement in quality, value, or extent.",
        "cn_def": "提升；改進"
      }
    ]
  },
  "vision": {
    "pos": "n.",
    "en_def": "The faculty of being able to see; the ability to plan the future with imagination.",
    "cn_def": "視力；願景",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The faculty of being able to see; the ability to plan the future with imagination.",
        "cn_def": "視力；願景"
      }
    ]
  },
  "mammal": {
    "pos": "n.",
    "en_def": "A warm-blooded vertebrate animal with hair or fur.",
    "cn_def": "哺乳動物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A warm-blooded vertebrate animal with hair or fur.",
        "cn_def": "哺乳動物"
      }
    ]
  },
  "consciousness": {
    "pos": "n.",
    "en_def": "The state of being awake and aware of one's surroundings.",
    "cn_def": "意識；知覺",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The state of being awake and aware of one's surroundings.",
        "cn_def": "意識；知覺"
      }
    ]
  },
  "shortcoming": {
    "pos": "n.",
    "en_def": "A fault or failure to meet a certain standard.",
    "cn_def": "缺點；短處",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A fault or failure to meet a certain standard.",
        "cn_def": "缺點；短處"
      }
    ]
  },
  "weakness": {
    "pos": "n.",
    "en_def": "A disadvantage or fault; lack of strength.",
    "cn_def": "弱點",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A disadvantage or fault; lack of strength.",
        "cn_def": "弱點"
      }
    ]
  },
  "tolerance": {
    "pos": "n.",
    "en_def": "The ability or willingness to tolerate something.",
    "cn_def": "寬容；忍耐力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The ability or willingness to tolerate something.",
        "cn_def": "寬容；忍耐力"
      }
    ]
  },
  "circumstance": {
    "pos": "n.",
    "en_def": "A fact or condition connected with or relevant to an event or action.",
    "cn_def": "情況；環境",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A fact or condition connected with or relevant to an event or action.",
        "cn_def": "情況；環境"
      }
    ]
  },
  "circumstances": {
    "pos": "n.",
    "en_def": "A fact or condition connected with or relevant to an event or action.",
    "cn_def": "情況；環境",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A fact or condition connected with or relevant to an event or action.",
        "cn_def": "情況；環境"
      }
    ]
  },
  "condition": {
    "pos": "n.",
    "en_def": "The state of something, especially with regard to its appearance or working order.",
    "cn_def": "狀況；條件",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The state of something, especially with regard to its appearance or working order.",
        "cn_def": "狀況；條件"
      }
    ]
  },
  "defense": {
    "pos": "n.",
    "en_def": "The action of defending from or resisting attack.",
    "cn_def": "防禦；防衛",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The action of defending from or resisting attack.",
        "cn_def": "防禦；防衛"
      }
    ]
  },
  "self-defense": {
    "pos": "phr.",
    "en_def": "The defense of one's person using physical force.",
    "cn_def": "自衛",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The defense of one's person using physical force.",
        "cn_def": "自衛"
      }
    ]
  },
  "solidify": {
    "pos": "v.",
    "en_def": "To make or become hard or solid; to make stronger.",
    "cn_def": "鞏固；凝固",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To make or become hard or solid; to make stronger.",
        "cn_def": "鞏固；凝固"
      }
    ]
  },
  "socialize": {
    "pos": "v.",
    "en_def": "To mix socially with others.",
    "cn_def": "交際；參與社交",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To mix socially with others.",
        "cn_def": "交際；參與社交"
      }
    ]
  },
  "roam": {
    "pos": "v.",
    "en_def": "To move about or travel aimlessly over a wide area.",
    "cn_def": "漫遊；遊蕩",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To move about or travel aimlessly over a wide area.",
        "cn_def": "漫遊；遊蕩"
      }
    ]
  },
  "roamed": {
    "pos": "v.",
    "en_def": "To move about or travel aimlessly over a wide area.",
    "cn_def": "漫遊；遊蕩",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To move about or travel aimlessly over a wide area.",
        "cn_def": "漫遊；遊蕩"
      }
    ]
  },
  "wander": {
    "pos": "v.",
    "en_def": "To walk or move in a leisurely, casual, or aimless way.",
    "cn_def": "徘徊；閒逛",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To walk or move in a leisurely, casual, or aimless way.",
        "cn_def": "徘徊；閒逛"
      }
    ]
  },
  "enhance": {
    "pos": "v.",
    "en_def": "To intensify or further improve the quality, value, or extent of.",
    "cn_def": "提高；增加",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To intensify or further improve the quality, value, or extent of.",
        "cn_def": "提高；增加"
      }
    ]
  },
  "tolerate": {
    "pos": "v.",
    "en_def": "To allow the existence of something one does not necessarily like or agree with.",
    "cn_def": "容忍；忍受",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To allow the existence of something one does not necessarily like or agree with.",
        "cn_def": "容忍；忍受"
      }
    ]
  },
  "defend": {
    "pos": "v.",
    "en_def": "To resist an attack; to protect from harm or danger.",
    "cn_def": "保衛；防守",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To resist an attack; to protect from harm or danger.",
        "cn_def": "保衛；防守"
      }
    ]
  },
  "lengthen": {
    "pos": "v.",
    "en_def": "To make or become longer.",
    "cn_def": "加長；延長",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To make or become longer.",
        "cn_def": "加長；延長"
      }
    ]
  },
  "long for": {
    "pos": "v.",
    "en_def": "To want or desire something very much; to yearn for.",
    "cn_def": "期盼；渴望",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To want or desire something very much; to yearn for.",
        "cn_def": "期盼；渴望"
      }
    ]
  },
  "longed for": {
    "pos": "v.",
    "en_def": "To want or desire something very much; to yearn for.",
    "cn_def": "期盼；渴望",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To want or desire something very much; to yearn for.",
        "cn_def": "期盼；渴望"
      }
    ]
  },
  "mutual trust": {
    "pos": "phr.",
    "en_def": "A shared belief in the reliability, truth, or ability of each other.",
    "cn_def": "互信",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A shared belief in the reliability, truth, or ability of each other.",
        "cn_def": "互信"
      }
    ]
  },
  "mutual respect": {
    "pos": "phr.",
    "en_def": "A shared feeling of admiration and consideration for each other.",
    "cn_def": "互相尊重",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A shared feeling of admiration and consideration for each other.",
        "cn_def": "互相尊重"
      }
    ]
  },
  "show solidarity with": {
    "pos": "phr.",
    "en_def": "To demonstrate support for a group or cause.",
    "cn_def": "展現對...的團結/支持",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To demonstrate support for a group or cause.",
        "cn_def": "展現對...的團結/支持"
      }
    ]
  },
  "express solidarity": {
    "pos": "phr.",
    "en_def": "To state or communicate one's support for a group.",
    "cn_def": "表達支持/團結",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To state or communicate one's support for a group.",
        "cn_def": "表達支持/團結"
      }
    ]
  },
  "live by the motto": {
    "pos": "phr.",
    "en_def": "To base one's life choices on a specific phrase or belief.",
    "cn_def": "秉持...的座右銘生活",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To base one's life choices on a specific phrase or belief.",
        "cn_def": "秉持...的座右銘生活"
      }
    ]
  },
  "school motto": {
    "pos": "phr.",
    "en_def": "A phrase representing the educational beliefs or values of a school.",
    "cn_def": "校訓",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A phrase representing the educational beliefs or values of a school.",
        "cn_def": "校訓"
      }
    ]
  },
  "company motto": {
    "pos": "phr.",
    "en_def": "A short phrase expressing the guiding principles of a business.",
    "cn_def": "公司宗旨",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A short phrase expressing the guiding principles of a business.",
        "cn_def": "公司宗旨"
      }
    ]
  },
  "secret to longevity": {
    "pos": "phr.",
    "en_def": "The reason or method for living a very long time.",
    "cn_def": "長壽的秘訣",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The reason or method for living a very long time.",
        "cn_def": "長壽的秘訣"
      }
    ]
  },
  "promote longevity": {
    "pos": "phr.",
    "en_def": "To encourage or contribute to a longer lifespan.",
    "cn_def": "促進長壽",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To encourage or contribute to a longer lifespan.",
        "cn_def": "促進長壽"
      }
    ]
  },
  "wildlife conservation": {
    "pos": "phr.",
    "en_def": "The practice of protecting wild plant and animal species and their habitats.",
    "cn_def": "野生動物保育",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The practice of protecting wild plant and animal species and their habitats.",
        "cn_def": "野生動物保育"
      }
    ]
  },
  "wildlife habitat": {
    "pos": "phr.",
    "en_def": "The natural environment in which a particular species of wild animal lives.",
    "cn_def": "野生動物棲息地",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The natural environment in which a particular species of wild animal lives.",
        "cn_def": "野生動物棲息地"
      }
    ]
  },
  "in the wild": {
    "pos": "phr.",
    "en_def": "In a natural state or environment, unconfined by humans.",
    "cn_def": "在野外",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "In a natural state or environment, unconfined by humans.",
        "cn_def": "在野外"
      }
    ]
  },
  "social animal": {
    "pos": "phr.",
    "en_def": "An animal (including humans) that is highly interactive with other members of its species.",
    "cn_def": "群居動物；喜歡社交的人",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "An animal (including humans) that is highly interactive with other members of its species.",
        "cn_def": "群居動物；喜歡社交的人"
      }
    ]
  },
  "fall prey to": {
    "pos": "phr.",
    "en_def": "To be vulnerable to or overcome by something.",
    "cn_def": "成為...的犧牲品；受...所害",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To be vulnerable to or overcome by something.",
        "cn_def": "成為...的犧牲品；受...所害"
      }
    ]
  },
  "fell prey to": {
    "pos": "phr.",
    "en_def": "To be vulnerable to or overcome by something.",
    "cn_def": "成為...的犧牲品；受...所害",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To be vulnerable to or overcome by something.",
        "cn_def": "成為...的犧牲品；受...所害"
      }
    ]
  },
  "prey on": {
    "pos": "phr.",
    "en_def": "To hunt and kill for food; to take advantage of someone.",
    "cn_def": "捕食；利用",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To hunt and kill for food; to take advantage of someone.",
        "cn_def": "捕食；利用"
      }
    ]
  },
  "bird of prey": {
    "pos": "phr.",
    "en_def": "A bird that feeds on animal flesh, with a strong hooked bill and sharp talons.",
    "cn_def": "猛禽",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A bird that feeds on animal flesh, with a strong hooked bill and sharp talons.",
        "cn_def": "猛禽"
      }
    ]
  },
  "easy prey": {
    "pos": "phr.",
    "en_def": "Someone or something that is easily attacked or deceived.",
    "cn_def": "容易下手的目標",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Someone or something that is easily attacked or deceived.",
        "cn_def": "容易下手的目標"
      }
    ]
  },
  "apex predator": {
    "pos": "phr.",
    "en_def": "A predator at the top of a food chain, without natural predators of its own.",
    "cn_def": "頂級掠食者",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A predator at the top of a food chain, without natural predators of its own.",
        "cn_def": "頂級掠食者"
      }
    ]
  },
  "natural predator": {
    "pos": "phr.",
    "en_def": "An animal that hunts and eats a particular species in nature.",
    "cn_def": "天敵",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "An animal that hunts and eats a particular species in nature.",
        "cn_def": "天敵"
      }
    ]
  },
  "performance enhancement": {
    "pos": "phr.",
    "en_def": "The act of improving the efficiency or output of something.",
    "cn_def": "效能提升；表現增強",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The act of improving the efficiency or output of something.",
        "cn_def": "效能提升；表現增強"
      }
    ]
  },
  "night vision": {
    "pos": "phr.",
    "en_def": "The ability to see in low light conditions.",
    "cn_def": "夜視能力",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The ability to see in low light conditions.",
        "cn_def": "夜視能力"
      }
    ]
  },
  "field of vision": {
    "pos": "phr.",
    "en_def": "The entire area a person or animal is able to see when their eyes are fixed in one position.",
    "cn_def": "視野",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The entire area a person or animal is able to see when their eyes are fixed in one position.",
        "cn_def": "視野"
      }
    ]
  },
  "visionary": {
    "pos": "",
    "en_def": "",
    "cn_def": "",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": ""
      }
    ]
  },
  "marine mammals": {
    "pos": "phr.",
    "en_def": "A mammal that lives in the ocean or depends on the ocean for its food.",
    "cn_def": "海洋哺乳動物",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A mammal that lives in the ocean or depends on the ocean for its food.",
        "cn_def": "海洋哺乳動物"
      }
    ]
  },
  "marine mammal": {
    "pos": "phr.",
    "en_def": "A mammal that lives in the ocean or depends on the ocean for its food.",
    "cn_def": "海洋哺乳動物",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A mammal that lives in the ocean or depends on the ocean for its food.",
        "cn_def": "海洋哺乳動物"
      }
    ]
  },
  "land mammal": {
    "pos": "phr.",
    "en_def": "A mammal that primarily lives on land.",
    "cn_def": "陸地哺乳動物",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A mammal that primarily lives on land.",
        "cn_def": "陸地哺乳動物"
      }
    ]
  },
  "roaming around": {
    "pos": "phr.",
    "en_def": "To walk or travel without a specific destination in a particular area.",
    "cn_def": "在...四處走動/遊蕩",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To walk or travel without a specific destination in a particular area.",
        "cn_def": "在...四處走動/遊蕩"
      }
    ]
  },
  "roam around": {
    "pos": "phr.",
    "en_def": "To walk or travel without a specific destination in a particular area.",
    "cn_def": "在...四處走動/遊蕩",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To walk or travel without a specific destination in a particular area.",
        "cn_def": "在...四處走動/遊蕩"
      }
    ]
  },
  "roam freely": {
    "pos": "phr.",
    "en_def": "To move about without restrictions or boundaries.",
    "cn_def": "自由漫遊",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To move about without restrictions or boundaries.",
        "cn_def": "自由漫遊"
      }
    ]
  },
  "overcome a shortcoming": {
    "pos": "phr.",
    "en_def": "To successfully deal with a personal fault or flaw.",
    "cn_def": "克服缺點",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To successfully deal with a personal fault or flaw.",
        "cn_def": "克服缺點"
      }
    ]
  },
  "major shortcoming": {
    "pos": "phr.",
    "en_def": "A significant or prominent fault or weakness.",
    "cn_def": "主要缺點",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A significant or prominent fault or weakness.",
        "cn_def": "主要缺點"
      }
    ]
  },
  "zero tolerance": {
    "pos": "phr.",
    "en_def": "A strict policy of not allowing a particular type of behavior.",
    "cn_def": "零容忍",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A strict policy of not allowing a particular type of behavior.",
        "cn_def": "零容忍"
      }
    ]
  },
  "put up with": {
    "pos": "phr.",
    "en_def": "To endure or tolerate someone or something.",
    "cn_def": "忍受",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To endure or tolerate someone or something.",
        "cn_def": "忍受"
      }
    ]
  },
  "on condition that": {
    "pos": "phr.",
    "en_def": "Only if a specific thing happens; provided that.",
    "cn_def": "條件是…；在…的條件下",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Only if a specific thing happens; provided that.",
        "cn_def": "條件是…；在…的條件下"
      }
    ]
  },
  "in critical condition": {
    "pos": "phr.",
    "en_def": "Extremely ill or injured, and likely to die or face serious danger.",
    "cn_def": "情況危急；病危",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Extremely ill or injured, and likely to die or face serious danger.",
        "cn_def": "情況危急；病危"
      }
    ]
  },
  "in good condition": {
    "pos": "phr.",
    "en_def": "Healthy, working well, or looking clean and undamaged.",
    "cn_def": "狀態良好；完好無缺",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Healthy, working well, or looking clean and undamaged.",
        "cn_def": "狀態良好；完好無缺"
      }
    ]
  },
  "in bad condition": {
    "pos": "phr.",
    "en_def": "Sick, not working properly, or heavily damaged.",
    "cn_def": "狀態不佳；破舊不堪",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Sick, not working properly, or heavily damaged.",
        "cn_def": "狀態不佳；破舊不堪"
      }
    ]
  },
  "under no circumstances": {
    "pos": "phr.",
    "en_def": "Never; absolutely not.",
    "cn_def": "無論在任何情況下都不",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Never; absolutely not.",
        "cn_def": "無論在任何情況下都不"
      }
    ]
  },
  "under normal circumstances": {
    "pos": "phr.",
    "en_def": "Usually; in a typical situation.",
    "cn_def": "在正常情況下",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Usually; in a typical situation.",
        "cn_def": "在正常情況下"
      }
    ]
  },
  "unforeseen circumstances": {
    "pos": "phr.",
    "en_def": "Unexpected events or situations that could not be predicted.",
    "cn_def": "不可預見的情況",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "Unexpected events or situations that could not be predicted.",
        "cn_def": "不可預見的情況"
      }
    ]
  },
  "airtight container": {
    "pos": "phr.",
    "en_def": "A box or jar designed to keep air out.",
    "cn_def": "密封容器",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A box or jar designed to keep air out.",
        "cn_def": "密封容器"
      }
    ]
  },
  "airtight alibi": {
    "pos": "phr.",
    "en_def": "A claim of being elsewhere when a crime was committed that is impossible to disprove.",
    "cn_def": "完美的不在場證明",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "A claim of being elsewhere when a crime was committed that is impossible to disprove.",
        "cn_def": "完美的不在場證明"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
