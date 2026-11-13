// Unit 15 Quiz Data: prominent – significance
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Advanced U15 - prominent – significance",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "prominent",
    "pos": "adj.",
    "cn_def": "著名的、顯著的、突出的",
    "en_def": "highly important, famous, or easily seen in a spot.",
    "sentence": "She is a {{BLANK}} figure in the field of environmental science and has published over fifty research papers.",
    "cn": "她是環境科學領域的著名人物，已發表了五十多篇研究論文。"
  },
  {
    "word": "prominence",
    "pos": "n.",
    "cn_def": "顯著、傑出、聲望",
    "en_def": "the state of being important, famous, or noticeable.",
    "sentence": "The young chef rose to {{BLANK}} after winning a national cooking competition that was broadcast on television.",
    "cn": "這位年輕廚師在贏得一個電視播出的全國烹飪比賽後聲名鵲起。"
  },
  {
    "word": "awarded",
    "pos": "v.",
    "cn_def": "授予、頒發（獎項）",
    "en_def": "to officially give a prize to reward top work.",
    "sentence": "The university {{BLANK}} her an honorary degree for her outstanding contributions to medical research over forty years.",
    "cn": "大學因她四十年來對醫學研究的傑出貢獻而授予她榮譽學位。"
  },
  {
    "word": "award",
    "pos": "n.",
    "cn_def": "獎、獎項",
    "en_def": "a prize or medal won in a specialized contest.",
    "sentence": "Winning the national photography {{BLANK}} at such a young age gave her the confidence to pursue it as a full-time career.",
    "cn": "在如此年輕的年齡贏得全國攝影獎給了她將其作為全職職業追求的信心。"
  },
  {
    "word": "reward",
    "pos": "v.",
    "cn_def": "報酬、獎賞",
    "en_def": "token cash given to thank someone for casual help.",
    "sentence": "The company offered a generous {{BLANK}} to anyone who could provide information leading to the recovery of the stolen laptop.",
    "cn": "公司向任何能提供有助於追回被盜筆記型電腦資訊的人提供豐厚的獎賞。"
  },
  {
    "word": "fictional",
    "pos": "adj.",
    "cn_def": "虛構的、小說中的",
    "en_def": "imaginary; appearing inside storybooks, not real.",
    "sentence": "The {{BLANK}} town of Willowbrook was so vividly described in the novel that many readers felt it was a real place.",
    "cn": "這座虛構的柳溪鎮在小說中被描寫得如此生動，許多讀者感覺它是一個真實的地方。"
  },
  {
    "word": "fiction",
    "pos": "n.",
    "cn_def": "小說、虛構故事",
    "en_def": "books and stories about imaginary people or events.",
    "sentence": "She prefers reading {{BLANK}} over factual books because she enjoys being transported to imaginary worlds and stories.",
    "cn": "她更喜歡讀小說而不是事實性書籍，因為她喜歡被帶入虛構的世界和故事中。"
  },
  {
    "word": "non-fiction",
    "pos": "n.",
    "cn_def": "非小說類寫實文學",
    "en_def": "books writing strictly about true historical events.",
    "sentence": "The bestselling {{BLANK}} book explored the true story of a remarkable scientist whose work changed modern medicine.",
    "cn": "這本暢銷非小說類書籍探索了一位傑出科學家的真實故事，其工作改變了現代醫學。"
  },
  {
    "word": "mayor",
    "pos": "n.",
    "cn_def": "市長",
    "en_def": "the elected political head of a city government.",
    "sentence": "The {{BLANK}} announced a new plan to build affordable housing units in the city centre to help low-income families.",
    "cn": "市長宣布了一項在市中心建設經濟適用房的新計劃，以幫助低收入家庭。"
  },
  {
    "word": "mayo",
    "pos": "n.",
    "cn_def": "美乃滋",
    "en_def": "short name for white egg spread used on toast.",
    "sentence": "She spread a thin layer of {{BLANK}} on the sandwich before adding sliced tomatoes, lettuce, and grilled chicken.",
    "cn": "她在三明治上抹了一薄層美乃滋，然後加入切片番茄、生菜和烤雞肉。"
  },
  {
    "word": "responsible",
    "pos": "adj.",
    "cn_def": "負責的、具責任心的",
    "en_def": "having a duty to take care of a department task.",
    "sentence": "Each student is {{BLANK}} for completing their own section of the group project and submitting it before the deadline.",
    "cn": "每個學生負責完成小組項目自己那部分，並在截止日期前提交。"
  },
  {
    "word": "responsibility",
    "pos": "n.",
    "cn_def": "責任、職責",
    "en_def": "a specific duty or burden that an agent must track.",
    "sentence": "It is the {{BLANK}} of every citizen to vote in elections and make sure their voice is heard by the government.",
    "cn": "每個公民有責任在選舉中投票，確保政府聽到他們的聲音。"
  },
  {
    "word": "irresponsibility",
    "pos": "n.",
    "cn_def": "不負責任",
    "en_def": "a bad trait of tracking zero care for assignment rules.",
    "sentence": "His {{BLANK}} in missing the deadline without any notice put the whole team under enormous last-minute pressure.",
    "cn": "他在沒有任何通知的情況下錯過截止日期的不負責任，給整個團隊帶來了巨大的最後一刻壓力。"
  },
  {
    "word": "fund",
    "pos": "n.",
    "cn_def": "基金、資金",
    "en_def": "an amount of money saved for a specific purpose.",
    "sentence": "The school set up a special {{BLANK}} to help students from low-income families pay for school trips and activities.",
    "cn": "學校設立了一個特別基金，幫助來自低收入家庭的學生支付學校旅行和活動的費用。"
  },
  {
    "word": "fund",
    "pos": "v.",
    "cn_def": "資助、提供資金",
    "en_def": "to provide the cash needed to run a project.",
    "sentence": "The government agreed to {{BLANK}} the research project with five million dollars over the next three years.",
    "cn": "政府同意在未來三年內以五百萬元資助這個研究項目。"
  },
  {
    "word": "funding",
    "pos": "n.",
    "cn_def": "資金、資助（款項）",
    "en_def": "money given by a university or corporate body.",
    "sentence": "The charity lost its main source of {{BLANK}} when the company that supported it was forced to cut its budget.",
    "cn": "當支持它的公司被迫削減預算時，這家慈善機構失去了其主要資金來源。"
  },
  {
    "word": "fundraising",
    "pos": "n.",
    "cn_def": "募款、籌款活動",
    "en_def": "the active collection of cash to support charities.",
    "sentence": "The school organised a {{BLANK}} event that raised enough money to buy new computers for the library.",
    "cn": "學校組織了一次募款活動，籌集了足夠的資金為圖書館購買新電腦。"
  },
  {
    "word": "publicity",
    "pos": "n.",
    "cn_def": "宣傳、知名度、公眾注意",
    "en_def": "public attention or media coverage for an object.",
    "sentence": "The unexpected controversy surrounding the film actually generated massive {{BLANK}} and boosted ticket sales significantly.",
    "cn": "圍繞這部電影的意外爭議實際上產生了大量宣傳，並顯著提升了票房銷售。"
  },
  {
    "word": "publicize",
    "pos": "v.",
    "cn_def": "宣傳、公布、推廣",
    "en_def": "to give details to newspapers to attract attention.",
    "sentence": "The city council used social media to {{BLANK}} the new recycling programme and encourage residents to participate.",
    "cn": "市議會使用社群媒體宣傳新的回收計劃，並鼓勵居民參與。"
  },
  {
    "word": "public",
    "pos": "adj.",
    "cn_def": "公眾的、大眾",
    "en_def": "relating to ordinary citizens; the general masses.",
    "sentence": "The new park will be open to the {{BLANK}} free of charge seven days a week from six in the morning until midnight.",
    "cn": "新公園將每週七天、從早上六點到午夜免費向公眾開放。"
  },
  {
    "word": "required",
    "pos": "v.",
    "cn_def": "需要、要求、規定",
    "en_def": "to need something or make it mandatory by rule.",
    "sentence": "All participants are {{BLANK}} to submit a completed entry form and a copy of their ID at least one week before the event.",
    "cn": "所有參與者都被要求在活動前至少一週提交填妥的報名表和身份證副本。"
  },
  {
    "word": "requirements",
    "pos": "n.",
    "cn_def": "必要條件、要求",
    "en_def": "a mandatory baseline spec needed to enter a club.",
    "sentence": "One of the key {{BLANK}} for the scholarship is that applicants must have maintained a grade average above eighty percent.",
    "cn": "獎學金的關鍵要求之一是申請者必須保持平均成績在百分之八十以上。"
  },
  {
    "word": "receiver",
    "pos": "n.",
    "cn_def": "接收者、受獎人、聽筒",
    "en_def": "a person who gets a package or award prize.",
    "sentence": "The {{BLANK}} of the community service award thanked her neighbours and volunteers who had supported her work over the years.",
    "cn": "社區服務獎的受獎人感謝了多年來支持她工作的鄰居和義工們。"
  },
  {
    "word": "received",
    "pos": "v.",
    "cn_def": "收到、接受",
    "en_def": "to accept or take an item passed to you.",
    "sentence": "She was overjoyed when she {{BLANK}} the acceptance letter from the university she had always dreamed of attending.",
    "cn": "當她收到她一直夢想就讀的大學的錄取通知書時，她欣喜若狂。"
  },
  {
    "word": "revealed",
    "pos": "v.",
    "cn_def": "透露、顯露、揭露",
    "en_def": "to show or tell a secret fact that was hidden.",
    "sentence": "The documentary {{BLANK}} shocking facts about the food industry that most consumers had never been aware of before.",
    "cn": "這部紀錄片揭露了大多數消費者以前從未意識到的食品行業的驚人事實。"
  },
  {
    "word": "revelation",
    "pos": "n.",
    "cn_def": "揭露、啟示、被揭露的真相",
    "en_def": "a sudden shocking fact that is made public.",
    "sentence": "The {{BLANK}} that the famous author had been secretly writing under a different name shocked the entire literary world.",
    "cn": "這位著名作家一直秘密以不同名字寫作的揭露震驚了整個文學界。"
  },
  {
    "word": "honoree",
    "pos": "n.",
    "cn_def": "領獎人、受勳者、應受尊敬的人",
    "en_def": "a person who receives a special public award respect.",
    "sentence": "As the evening's main {{BLANK}}, she gave a moving speech about her journey and thanked everyone who had supported her.",
    "cn": "作為當晚的主要領獎人，她發表了感人的演講，講述了她的歷程，並感謝了所有支持她的人。"
  },
  {
    "word": "employee",
    "pos": "n.",
    "cn_def": "員工、僱員",
    "en_def": "a worker who draws monthly wages from a company.",
    "sentence": "Every {{BLANK}} at the company received a bonus at the end of the year as a reward for their hard work and dedication.",
    "cn": "公司的每位員工在年底收到獎金，作為對他們努力工作和奉獻精神的獎勵。"
  },
  {
    "word": "interviewee",
    "pos": "n.",
    "cn_def": "受訪者、面試者",
    "en_def": "a candidate answering questions during a job test.",
    "sentence": "The {{BLANK}} prepared thoroughly for the panel interview and was able to answer every question with confidence.",
    "cn": "受訪者為小組面試做了充分準備，能夠自信地回答每個問題。"
  },
  {
    "word": "addressee",
    "pos": "n.",
    "cn_def": "收件人",
    "en_def": "the explicit name listed on a postage envelope.",
    "sentence": "The parcel could not be delivered because the {{BLANK}} had moved to a new address without updating her details.",
    "cn": "包裹無法送達，因為收件人已搬到新地址，但沒有更新她的詳細資訊。"
  },
  {
    "word": "exposure",
    "pos": "n.",
    "cn_def": "暴露、接觸、曝曬",
    "en_def": "the fact of experiencing or being unprotected from air.",
    "sentence": "Long-term {{BLANK}} to strong sunlight without protection can cause serious skin damage and increase the risk of cancer.",
    "cn": "長期在沒有保護的情況下暴露在強烈陽光下可能會導致嚴重的皮膚損傷並增加癌症風險。"
  },
  {
    "word": "exposure",
    "pos": "n.",
    "cn_def": "曝光度、宣傳",
    "en_def": "public attention generated by news articles lines.",
    "sentence": "Winning the national award gave the small bakery enormous {{BLANK}} and customers started queuing from all over the city.",
    "cn": "贏得全國獎項給這家小烘焙坊帶來了巨大的曝光度，顧客開始從城市各地排隊。"
  },
  {
    "word": "expose",
    "pos": "v.",
    "cn_def": "暴露、揭露、使接觸",
    "en_def": "to remove a cover to reveal a hidden danger file.",
    "sentence": "The investigative journalist risked her career to {{BLANK}} corruption within the city's planning department.",
    "cn": "這位調查記者冒著職業風險揭露了城市規劃部門內部的腐敗行為。"
  },
  {
    "word": "exposure to",
    "pos": "phr.",
    "cn_def": "暴露於…、接觸…",
    "en_def": "being stuck next to loud sounds across long years.",
    "sentence": "Regular {{BLANK}} English outside the classroom is one of the best ways to improve fluency and listening skills.",
    "cn": "在課堂外定期接觸英語是提高流利度和聽力技能的最佳方式之一。"
  },
  {
    "word": "promptly",
    "pos": "adv.",
    "cn_def": "迅速地、準時地",
    "en_def": "quickly; immediately without any lazy delay.",
    "sentence": "The hotel staff {{BLANK}} replaced the broken air conditioner after the guest reported the problem at the front desk.",
    "cn": "客人在前台報告問題後，酒店員工迅速更換了損壞的空調。"
  },
  {
    "word": "prompt",
    "pos": "adj.",
    "cn_def": "迅速的、即時的",
    "en_def": "done without delay; tracking swift clean action.",
    "sentence": "Her {{BLANK}} response to the emergency prevented the situation from becoming much worse than it already was.",
    "cn": "她對緊急情況的迅速反應阻止了局勢變得比已有的更加糟糕。"
  },
  {
    "word": "prompted",
    "pos": "v.",
    "cn_def": "促使、激起、提示",
    "en_def": "to cause someone to make a sudden decision move.",
    "sentence": "The news about rising sea levels {{BLANK}} the local government to invest more money in coastal flood defences.",
    "cn": "關於海平面上升的消息促使當地政府在沿海防洪設施上投入更多資金。"
  },
  {
    "word": "individual",
    "pos": "n.",
    "cn_def": "個人、個體",
    "en_def": "a single person considered separate from a team.",
    "sentence": "Every {{BLANK}} in the community has a role to play in making the neighbourhood safer and more pleasant for everyone.",
    "cn": "社區中的每個個人都在使社區對所有人更安全、更愉快方面發揮著作用。"
  },
  {
    "word": "individual",
    "pos": "adj.",
    "cn_def": "個別的、獨特的",
    "en_def": "given to or matching only one single citizen.",
    "sentence": "The teacher gave {{BLANK}} feedback to each student after the presentation so they could all improve in different ways.",
    "cn": "老師在演講結束後給每位學生個別反饋，這樣他們都可以以不同方式進步。"
  },
  {
    "word": "individual serving",
    "pos": "phr.",
    "cn_def": "單人份",
    "en_def": "a food pack wrapped for exactly one diner unit.",
    "sentence": "The café offers {{BLANK}} options of each dessert so that customers can try different flavours without overeating.",
    "cn": "咖啡館提供每種甜點的單人份選項，讓顧客可以在不過量飲食的情況下嘗試不同口味。"
  },
  {
    "word": "individually",
    "pos": "adv.",
    "cn_def": "個別地、逐一地",
    "en_def": "one by one; handled separately across steps.",
    "sentence": "Each application will be reviewed {{BLANK}} by a panel of three judges who will score candidates based on set criteria.",
    "cn": "每份申請將由三位評審組成的小組個別審查，他們將根據既定標準對候選人進行評分。"
  },
  {
    "word": "labeled",
    "pos": "v.",
    "cn_def": "貼標籤於、歸類為",
    "en_def": "to attach a piece of paper listing names to a box.",
    "sentence": "She {{BLANK}} each storage box with a clear description of its contents so that items could be found easily later.",
    "cn": "她在每個儲物箱上貼上清晰描述其內容的標籤，以便以後能夠輕鬆找到物品。"
  },
  {
    "word": "label",
    "pos": "n.",
    "cn_def": "標籤、標牌",
    "en_def": "a small tag on clothing tracking wash rules text.",
    "sentence": "Always check the care {{BLANK}} on clothing before washing to avoid shrinking delicate fabrics in hot water.",
    "cn": "洗滌前請務必查看衣物上的護理標籤，以避免精緻面料在熱水中縮水。"
  },
  {
    "word": "stole",
    "pos": "v.",
    "cn_def": "偷竊、竊取",
    "en_def": "to take an asset without permission secretly.",
    "sentence": "Someone {{BLANK}} her bicycle from outside the library while she was inside studying for her afternoon exam.",
    "cn": "她在圖書館內為下午的考試學習時，有人偷走了她停在外面的自行車。"
  },
  {
    "word": "rob",
    "pos": "v.",
    "cn_def": "搶劫、奪取",
    "en_def": "to use force or guns to claim bank cash assets.",
    "sentence": "Two masked men attempted to {{BLANK}} the jewellery store but were caught by police before they could escape.",
    "cn": "兩名蒙面男子試圖搶劫珠寶店，但在逃跑前被警察抓獲。"
  },
  {
    "word": "Despite",
    "pos": "n.",
    "cn_def": "儘管、雖然",
    "en_def": "without being affected by; in spite of a risk.",
    "sentence": "{{BLANK}} feeling nervous, she delivered her speech confidently and received warm applause from the entire audience.",
    "cn": "儘管感到緊張，她還是自信地發表了演講，並獲得了全場觀眾的熱烈掌聲。"
  },
  {
    "word": "In spite of",
    "pos": "phr.",
    "cn_def": "儘管、雖然",
    "en_def": "handling a wedding outside facing a rain warning.",
    "sentence": "{{BLANK}} the heavy rain forecast, the outdoor wedding ceremony went ahead and everyone had a wonderful time.",
    "cn": "儘管有大雨預報，戶外婚禮儀式仍然如期進行，每個人都度過了美好的時光。"
  },
  {
    "word": "Despite the fact that",
    "pos": "phr.",
    "cn_def": "儘管事實是…",
    "en_def": "waking up early but still losing the transit race.",
    "sentence": "{{BLANK}} she had studied hard, she did not pass the exam and decided to retake it the following month.",
    "cn": "儘管她努力學習，她還是沒有通過考試，並決定下個月重考。"
  },
  {
    "word": "temporarily",
    "pos": "adv.",
    "cn_def": "暫時地",
    "en_def": "for a limited time only; not permanently fixed.",
    "sentence": "The road was {{BLANK}} closed for repairs, so drivers were asked to use the alternative route through the town centre.",
    "cn": "道路因維修而暫時關閉，因此司機被要求使用通過市中心的替代路線。"
  },
  {
    "word": "temporary",
    "pos": "adj.",
    "cn_def": "暫時的、臨時的",
    "en_def": "lasting for a brief duration; tracking early ends.",
    "sentence": "She took a {{BLANK}} job at the bookshop during the summer to earn some extra money before her university term started.",
    "cn": "她在暑假期間在書店做了一份臨時工作，在大學學期開始前賺些額外的錢。"
  },
  {
    "word": "remove",
    "pos": "v.",
    "cn_def": "移開、移除、脫掉",
    "en_def": "to take something away or drop a virus block.",
    "sentence": "Please {{BLANK}} your shoes before entering the house, as it is a family rule to keep the floors clean at all times.",
    "cn": "進屋前請脫掉鞋子，因為保持地板時刻清潔是家規。"
  },
  {
    "word": "removal",
    "pos": "n.",
    "cn_def": "消除、移除",
    "en_def": "the systemic clean dropping of old database entries.",
    "sentence": "The {{BLANK}} of the graffiti from the school wall took the maintenance team an entire afternoon to complete.",
    "cn": "清除學校牆壁上塗鴉的工作花了維護團隊整整一個下午才完成。"
  },
  {
    "word": "construction",
    "pos": "n.",
    "cn_def": "建造、建設、建築業",
    "en_def": "the active building of apartments or bridge spans.",
    "sentence": "The {{BLANK}} of the new metro line is expected to take five years and will create thousands of jobs in the city.",
    "cn": "新地鐵線的建設預計需要五年時間，將在城市創造數千個就業機會。"
  },
  {
    "word": "constructive",
    "pos": "adj.",
    "cn_def": "建設性的、有助益的",
    "en_def": "providing helpful ideas to fix operational bugs.",
    "sentence": "Her manager gave her some very {{BLANK}} feedback after the presentation, which helped her improve significantly next time.",
    "cn": "她的經理在演講結束後給了她一些非常具有建設性的反饋，這幫助她下次大幅改進。"
  },
  {
    "word": "construct",
    "pos": "v.",
    "cn_def": "建造、構成",
    "en_def": "to build a large layout structure using concrete.",
    "sentence": "Engineers worked around the clock to {{BLANK}} the temporary bridge that would allow emergency vehicles to cross the river.",
    "cn": "工程師全天候工作，建造臨時橋樑，讓緊急車輛能夠跨越河流。"
  },
  {
    "word": "run for",
    "pos": "phr.",
    "cn_def": "競選",
    "en_def": "to enter a political race to win a mayor role.",
    "sentence": "She announced her decision to {{BLANK}} city council, promising to focus on improving public transport and green spaces.",
    "cn": "她宣布競選市議員的決定，承諾將重點放在改善公共交通和綠地上。"
  },
  {
    "word": "roughly",
    "pos": "adv.",
    "cn_def": "大約、粗略地",
    "en_def": "approximately; tracking minor number variances.",
    "sentence": "The journey from Taipei to Tainan by high-speed rail takes {{BLANK}} ninety minutes, depending on which train you catch.",
    "cn": "從台北乘高鐵到台南大約需要九十分鐘，取決於你搭乘哪班列車。"
  },
  {
    "word": "rough",
    "pos": "adj.",
    "cn_def": "粗糙的、粗略的、艱難的",
    "en_def": "having an uneven surface; wild storm conditions.",
    "sentence": "The surface of the old stone wall felt extremely {{BLANK}} to the touch, with deep grooves carved in by centuries of weather.",
    "cn": "舊石牆的表面摸起來極為粗糙，上面有幾個世紀的風化侵蝕留下的深槽。"
  },
  {
    "word": "significant",
    "pos": "adj.",
    "cn_def": "顯著的、重要的、有重大意義的",
    "en_def": "highly important, large, or noticeable in scale.",
    "sentence": "There has been a {{BLANK}} improvement in air quality since the city introduced stricter vehicle emissions regulations last year.",
    "cn": "自去年城市引入更嚴格的車輛排放法規以來，空氣品質有了顯著改善。"
  },
  {
    "word": "value significance",
    "pos": "phr.",
    "cn_def": "重大意義",
    "en_def": "the core deep meaning held inside an old token.",
    "sentence": "Historians debated the {{BLANK}} of the ancient coin, arguing about what it revealed about the civilization's trade.",
    "cn": "歷史學家們討論了這枚古代硬幣的重大意義，爭論它揭示了該文明貿易的什麼信息。"
  },
  {
    "word": "considerably",
    "pos": "adv.",
    "cn_def": "相當地、非常",
    "en_def": "by a large, notable measure that changes status.",
    "sentence": "The new highway has {{BLANK}} reduced commuting time for thousands of workers who travel between the two cities daily.",
    "cn": "新高速公路大幅縮短了每天在兩座城市之間通勤的數千名工人的通勤時間。"
  },
  {
    "word": "significantly",
    "pos": "adv.",
    "cn_def": "顯著地、大幅地",
    "en_def": "in a way that is large enough to be clear value.",
    "sentence": "Sales figures increased {{BLANK}} after the company launched its new marketing campaign on social media platforms.",
    "cn": "公司在社群媒體平台上推出新行銷活動後，銷售數字顯著增加。"
  },
  {
    "word": "significance",
    "pos": "n.",
    "cn_def": "重要性、意義",
    "en_def": "the underlying importance or quality of an aura.",
    "sentence": "Few people fully understood the {{BLANK}} of the discovery at the time, but it eventually changed the field of medicine.",
    "cn": "當時很少有人完全理解這項發現的重要性，但它最終改變了醫學領域。"
  }
];

const MCQS = [
  {
    "q": "She is a ______ figure in the field of environmental science and has published over fifty research papers.",
    "options": [
      "prominent",
      "rough",
      "prompt",
      "responsible"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The young chef rose to ______ after winning a national cooking competition that was broadcast on television.",
    "options": [
      "fundraising",
      "non-fiction",
      "construction",
      "prominence"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The university ______ her an honorary degree for her outstanding contributions to medical research over forty years.",
    "options": [
      "labeled",
      "reward",
      "awarded",
      "received"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Winning the national photography ______ at such a young age gave her the confidence to pursue it as a full-time career.",
    "options": [
      "significance",
      "award",
      "exposure",
      "prominence"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The company offered a generous ______ to anyone who could provide information leading to the recovery of the stolen laptop.",
    "options": [
      "remove",
      "fund",
      "required",
      "reward"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The ______ town of Willowbrook was so vividly described in the novel that many readers felt it was a real place.",
    "options": [
      "fictional",
      "significant",
      "temporary",
      "constructive"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "She prefers reading ______ over factual books because she enjoys being transported to imaginary worlds and stories.",
    "options": [
      "fund",
      "exposure",
      "fiction",
      "irresponsibility"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The bestselling ______ book explored the true story of a remarkable scientist whose work changed modern medicine.",
    "options": [
      "interviewee",
      "non-fiction",
      "individual",
      "employee"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The ______ announced a new plan to build affordable housing units in the city centre to help low-income families.",
    "options": [
      "employee",
      "removal",
      "responsibility",
      "mayor"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "She spread a thin layer of ______ on the sandwich before adding sliced tomatoes, lettuce, and grilled chicken.",
    "options": [
      "label",
      "mayo",
      "Despite",
      "employee"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Each student is ______ for completing their own section of the group project and submitting it before the deadline.",
    "options": [
      "prompt",
      "rough",
      "responsible",
      "temporary"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "It is the ______ of every citizen to vote in elections and make sure their voice is heard by the government.",
    "options": [
      "responsibility",
      "employee",
      "irresponsibility",
      "requirements"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "His ______ in missing the deadline without any notice put the whole team under enormous last-minute pressure.",
    "options": [
      "interviewee",
      "irresponsibility",
      "honoree",
      "responsibility"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The school set up a special ______ to help students from low-income families pay for school trips and activities.",
    "options": [
      "label",
      "significance",
      "non-fiction",
      "fund"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The government agreed to ______ the research project with five million dollars over the next three years.",
    "options": [
      "publicize",
      "construct",
      "fund",
      "received"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The charity lost its main source of ______ when the company that supported it was forced to cut its budget.",
    "options": [
      "funding",
      "mayo",
      "Despite",
      "label"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The school organised a ______ event that raised enough money to buy new computers for the library.",
    "options": [
      "individual",
      "irresponsibility",
      "receiver",
      "fundraising"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The unexpected controversy surrounding the film actually generated massive ______ and boosted ticket sales significantly.",
    "options": [
      "significance",
      "publicity",
      "construction",
      "addressee"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The city council used social media to ______ the new recycling programme and encourage residents to participate.",
    "options": [
      "publicize",
      "remove",
      "revealed",
      "awarded"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The new park will be open to the ______ free of charge seven days a week from six in the morning until midnight.",
    "options": [
      "temporary",
      "rough",
      "public",
      "individual"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "All participants are ______ to submit a completed entry form and a copy of their ID at least one week before the event.",
    "options": [
      "required",
      "stole",
      "labeled",
      "publicize"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "One of the key ______ for the scholarship is that applicants must have maintained a grade average above eighty percent.",
    "options": [
      "receiver",
      "addressee",
      "irresponsibility",
      "requirements"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The ______ of the community service award thanked her neighbours and volunteers who had supported her work over the years.",
    "options": [
      "non-fiction",
      "receiver",
      "exposure",
      "responsibility"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "She was overjoyed when she ______ the acceptance letter from the university she had always dreamed of attending.",
    "options": [
      "remove",
      "labeled",
      "received",
      "stole"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The documentary ______ shocking facts about the food industry that most consumers had never been aware of before.",
    "options": [
      "stole",
      "revealed",
      "required",
      "publicize"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The ______ that the famous author had been secretly writing under a different name shocked the entire literary world.",
    "options": [
      "revelation",
      "employee",
      "non-fiction",
      "exposure"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "As the evening's main ______, she gave a moving speech about her journey and thanked everyone who had supported her.",
    "options": [
      "prominence",
      "fiction",
      "honoree",
      "receiver"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Every ______ at the company received a bonus at the end of the year as a reward for their hard work and dedication.",
    "options": [
      "requirements",
      "construction",
      "fundraising",
      "employee"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The ______ prepared thoroughly for the panel interview and was able to answer every question with confidence.",
    "options": [
      "prominence",
      "fund",
      "interviewee",
      "exposure"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The parcel could not be delivered because the ______ had moved to a new address without updating her details.",
    "options": [
      "Despite",
      "individual",
      "fiction",
      "addressee"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Long-term ______ to strong sunlight without protection can cause serious skin damage and increase the risk of cancer.",
    "options": [
      "exposure",
      "construction",
      "significance",
      "honoree"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "Winning the national award gave the small bakery enormous ______ and customers started queuing from all over the city.",
    "options": [
      "removal",
      "exposure",
      "receiver",
      "revelation"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The investigative journalist risked her career to ______ corruption within the city's planning department.",
    "options": [
      "remove",
      "required",
      "revealed",
      "expose"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "Regular ______ English outside the classroom is one of the best ways to improve fluency and listening skills.",
    "options": [
      "In spite of",
      "individual serving",
      "exposure to",
      "value significance"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The hotel staff ______ replaced the broken air conditioner after the guest reported the problem at the front desk.",
    "options": [
      "promptly",
      "temporarily",
      "considerably",
      "significantly"
    ],
    "answer": 0,
    "vocabIndex": 34
  },
  {
    "q": "Her ______ response to the emergency prevented the situation from becoming much worse than it already was.",
    "options": [
      "fictional",
      "prompt",
      "responsible",
      "constructive"
    ],
    "answer": 1,
    "vocabIndex": 35
  },
  {
    "q": "The news about rising sea levels ______ the local government to invest more money in coastal flood defences.",
    "options": [
      "reward",
      "revealed",
      "prompted",
      "received"
    ],
    "answer": 2,
    "vocabIndex": 36
  },
  {
    "q": "Every ______ in the community has a role to play in making the neighbourhood safer and more pleasant for everyone.",
    "options": [
      "fund",
      "individual",
      "exposure",
      "non-fiction"
    ],
    "answer": 1,
    "vocabIndex": 37
  },
  {
    "q": "The teacher gave ______ feedback to each student after the presentation so they could all improve in different ways.",
    "options": [
      "individual",
      "fictional",
      "prominent",
      "temporary"
    ],
    "answer": 0,
    "vocabIndex": 38
  },
  {
    "q": "The café offers ______ options of each dessert so that customers can try different flavours without overeating.",
    "options": [
      "value significance",
      "In spite of",
      "exposure to",
      "individual serving"
    ],
    "answer": 3,
    "vocabIndex": 39
  },
  {
    "q": "Each application will be reviewed ______ by a panel of three judges who will score candidates based on set criteria.",
    "options": [
      "temporarily",
      "promptly",
      "individually",
      "significantly"
    ],
    "answer": 2,
    "vocabIndex": 40
  },
  {
    "q": "She ______ each storage box with a clear description of its contents so that items could be found easily later.",
    "options": [
      "expose",
      "rob",
      "awarded",
      "labeled"
    ],
    "answer": 3,
    "vocabIndex": 41
  },
  {
    "q": "Always check the care ______ on clothing before washing to avoid shrinking delicate fabrics in hot water.",
    "options": [
      "construction",
      "label",
      "fundraising",
      "revelation"
    ],
    "answer": 1,
    "vocabIndex": 42
  },
  {
    "q": "Someone ______ her bicycle from outside the library while she was inside studying for her afternoon exam.",
    "options": [
      "stole",
      "expose",
      "publicize",
      "remove"
    ],
    "answer": 0,
    "vocabIndex": 43
  },
  {
    "q": "Two masked men attempted to ______ the jewellery store but were caught by police before they could escape.",
    "options": [
      "remove",
      "required",
      "rob",
      "fund"
    ],
    "answer": 2,
    "vocabIndex": 44
  },
  {
    "q": "______ feeling nervous, she delivered her speech confidently and received warm applause from the entire audience.",
    "options": [
      "Despite",
      "funding",
      "employee",
      "construction"
    ],
    "answer": 0,
    "vocabIndex": 45
  },
  {
    "q": "______ the heavy rain forecast, the outdoor wedding ceremony went ahead and everyone had a wonderful time.",
    "options": [
      "value significance",
      "In spite of",
      "Despite the fact that",
      "run for"
    ],
    "answer": 1,
    "vocabIndex": 46
  },
  {
    "q": "______ she had studied hard, she did not pass the exam and decided to retake it the following month.",
    "options": [
      "individual serving",
      "value significance",
      "exposure to",
      "Despite the fact that"
    ],
    "answer": 3,
    "vocabIndex": 47
  },
  {
    "q": "The road was ______ closed for repairs, so drivers were asked to use the alternative route through the town centre.",
    "options": [
      "roughly",
      "significantly",
      "temporarily",
      "promptly"
    ],
    "answer": 2,
    "vocabIndex": 48
  },
  {
    "q": "She took a ______ job at the bookshop during the summer to earn some extra money before her university term started.",
    "options": [
      "public",
      "temporary",
      "constructive",
      "fictional"
    ],
    "answer": 1,
    "vocabIndex": 49
  },
  {
    "q": "Please ______ your shoes before entering the house, as it is a family rule to keep the floors clean at all times.",
    "options": [
      "remove",
      "fund",
      "rob",
      "prompted"
    ],
    "answer": 0,
    "vocabIndex": 50
  },
  {
    "q": "The ______ of the graffiti from the school wall took the maintenance team an entire afternoon to complete.",
    "options": [
      "label",
      "publicity",
      "non-fiction",
      "removal"
    ],
    "answer": 3,
    "vocabIndex": 51
  },
  {
    "q": "The ______ of the new metro line is expected to take five years and will create thousands of jobs in the city.",
    "options": [
      "interviewee",
      "Despite",
      "construction",
      "requirements"
    ],
    "answer": 2,
    "vocabIndex": 52
  },
  {
    "q": "Her manager gave her some very ______ feedback after the presentation, which helped her improve significantly next time.",
    "options": [
      "temporary",
      "constructive",
      "responsible",
      "rough"
    ],
    "answer": 1,
    "vocabIndex": 53
  },
  {
    "q": "Engineers worked around the clock to ______ the temporary bridge that would allow emergency vehicles to cross the river.",
    "options": [
      "publicize",
      "revealed",
      "reward",
      "construct"
    ],
    "answer": 3,
    "vocabIndex": 54
  },
  {
    "q": "She announced her decision to ______ city council, promising to focus on improving public transport and green spaces.",
    "options": [
      "run for",
      "value significance",
      "exposure to",
      "Despite the fact that"
    ],
    "answer": 0,
    "vocabIndex": 55
  },
  {
    "q": "The journey from Taipei to Tainan by high-speed rail takes ______ ninety minutes, depending on which train you catch.",
    "options": [
      "considerably",
      "temporarily",
      "significantly",
      "roughly"
    ],
    "answer": 3,
    "vocabIndex": 56
  },
  {
    "q": "The surface of the old stone wall felt extremely ______ to the touch, with deep grooves carved in by centuries of weather.",
    "options": [
      "public",
      "rough",
      "individual",
      "constructive"
    ],
    "answer": 1,
    "vocabIndex": 57
  },
  {
    "q": "There has been a ______ improvement in air quality since the city introduced stricter vehicle emissions regulations last year.",
    "options": [
      "prominent",
      "temporary",
      "significant",
      "rough"
    ],
    "answer": 2,
    "vocabIndex": 58
  },
  {
    "q": "Historians debated the ______ of the ancient coin, arguing about what it revealed about the civilization's trade.",
    "options": [
      "value significance",
      "individual serving",
      "run for",
      "exposure to"
    ],
    "answer": 0,
    "vocabIndex": 59
  },
  {
    "q": "The new highway has ______ reduced commuting time for thousands of workers who travel between the two cities daily.",
    "options": [
      "significantly",
      "promptly",
      "roughly",
      "considerably"
    ],
    "answer": 3,
    "vocabIndex": 60
  },
  {
    "q": "Sales figures increased ______ after the company launched its new marketing campaign on social media platforms.",
    "options": [
      "significantly",
      "temporarily",
      "considerably",
      "individually"
    ],
    "answer": 0,
    "vocabIndex": 61
  },
  {
    "q": "Few people fully understood the ______ of the discovery at the time, but it eventually changed the field of medicine.",
    "options": [
      "mayor",
      "prominence",
      "significance",
      "fiction"
    ],
    "answer": 2,
    "vocabIndex": 62
  }
];

const LOOKUP = {
  "prominent": {
    "pos": "adj.",
    "en_def": "highly important, famous, or easily seen in a spot.",
    "cn_def": "著名的、顯著的、突出的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "highly important, famous, or easily seen in a spot.",
        "cn_def": "著名的、顯著的、突出的"
      }
    ]
  },
  "prominence": {
    "pos": "n.",
    "en_def": "the state of being important, famous, or noticeable.",
    "cn_def": "顯著、傑出、聲望",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being important, famous, or noticeable.",
        "cn_def": "顯著、傑出、聲望"
      }
    ]
  },
  "award": {
    "pos": "v.",
    "en_def": "to officially give a prize to reward top work.",
    "cn_def": "授予、頒發（獎項）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to officially give a prize to reward top work.",
        "cn_def": "授予、頒發（獎項）"
      },
      {
        "pos": "n.",
        "en_def": "a prize or medal won in a specialized contest.",
        "cn_def": "獎、獎項"
      }
    ]
  },
  "awarded": {
    "pos": "v.",
    "en_def": "to officially give a prize to reward top work.",
    "cn_def": "授予、頒發（獎項）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to officially give a prize to reward top work.",
        "cn_def": "授予、頒發（獎項）"
      }
    ]
  },
  "reward": {
    "pos": "v.",
    "en_def": "token cash given to thank someone for casual help.",
    "cn_def": "報酬、獎賞",
    "combined": [
      {
        "pos": "v.",
        "en_def": "token cash given to thank someone for casual help.",
        "cn_def": "報酬、獎賞"
      }
    ]
  },
  "fictional": {
    "pos": "adj.",
    "en_def": "imaginary; appearing inside storybooks, not real.",
    "cn_def": "虛構的、小說中的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "imaginary; appearing inside storybooks, not real.",
        "cn_def": "虛構的、小說中的"
      }
    ]
  },
  "fiction": {
    "pos": "n.",
    "en_def": "books and stories about imaginary people or events.",
    "cn_def": "小說、虛構故事",
    "combined": [
      {
        "pos": "n.",
        "en_def": "books and stories about imaginary people or events.",
        "cn_def": "小說、虛構故事"
      }
    ]
  },
  "non-fiction": {
    "pos": "n.",
    "en_def": "books writing strictly about true historical events.",
    "cn_def": "非小說類寫實文學",
    "combined": [
      {
        "pos": "n.",
        "en_def": "books writing strictly about true historical events.",
        "cn_def": "非小說類寫實文學"
      }
    ]
  },
  "mayor": {
    "pos": "n.",
    "en_def": "the elected political head of a city government.",
    "cn_def": "市長",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the elected political head of a city government.",
        "cn_def": "市長"
      }
    ]
  },
  "mayo": {
    "pos": "n.",
    "en_def": "short name for white egg spread used on toast.",
    "cn_def": "美乃滋",
    "combined": [
      {
        "pos": "n.",
        "en_def": "short name for white egg spread used on toast.",
        "cn_def": "美乃滋"
      }
    ]
  },
  "responsible": {
    "pos": "adj.",
    "en_def": "having a duty to take care of a department task.",
    "cn_def": "負責的、具責任心的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a duty to take care of a department task.",
        "cn_def": "負責的、具責任心的"
      }
    ]
  },
  "responsibility": {
    "pos": "n.",
    "en_def": "a specific duty or burden that an agent must track.",
    "cn_def": "責任、職責",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a specific duty or burden that an agent must track.",
        "cn_def": "責任、職責"
      }
    ]
  },
  "irresponsibility": {
    "pos": "n.",
    "en_def": "a bad trait of tracking zero care for assignment rules.",
    "cn_def": "不負責任",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a bad trait of tracking zero care for assignment rules.",
        "cn_def": "不負責任"
      }
    ]
  },
  "fund": {
    "pos": "n.",
    "en_def": "an amount of money saved for a specific purpose.",
    "cn_def": "基金、資金",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an amount of money saved for a specific purpose.",
        "cn_def": "基金、資金"
      },
      {
        "pos": "v.",
        "en_def": "to provide the cash needed to run a project.",
        "cn_def": "資助、提供資金"
      }
    ]
  },
  "funding": {
    "pos": "n.",
    "en_def": "money given by a university or corporate body.",
    "cn_def": "資金、資助（款項）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "money given by a university or corporate body.",
        "cn_def": "資金、資助（款項）"
      }
    ]
  },
  "fundraising": {
    "pos": "n.",
    "en_def": "the active collection of cash to support charities.",
    "cn_def": "募款、籌款活動",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the active collection of cash to support charities.",
        "cn_def": "募款、籌款活動"
      }
    ]
  },
  "publicity": {
    "pos": "n.",
    "en_def": "public attention or media coverage for an object.",
    "cn_def": "宣傳、知名度、公眾注意",
    "combined": [
      {
        "pos": "n.",
        "en_def": "public attention or media coverage for an object.",
        "cn_def": "宣傳、知名度、公眾注意"
      }
    ]
  },
  "publicize": {
    "pos": "v.",
    "en_def": "to give details to newspapers to attract attention.",
    "cn_def": "宣傳、公布、推廣",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give details to newspapers to attract attention.",
        "cn_def": "宣傳、公布、推廣"
      }
    ]
  },
  "public": {
    "pos": "adj.",
    "en_def": "relating to ordinary citizens; the general masses.",
    "cn_def": "公眾的、大眾",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to ordinary citizens; the general masses.",
        "cn_def": "公眾的、大眾"
      }
    ]
  },
  "require": {
    "pos": "v.",
    "en_def": "to need something or make it mandatory by rule.",
    "cn_def": "需要、要求、規定",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to need something or make it mandatory by rule.",
        "cn_def": "需要、要求、規定"
      }
    ]
  },
  "required": {
    "pos": "v.",
    "en_def": "to need something or make it mandatory by rule.",
    "cn_def": "需要、要求、規定",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to need something or make it mandatory by rule.",
        "cn_def": "需要、要求、規定"
      }
    ]
  },
  "requirements": {
    "pos": "n.",
    "en_def": "a mandatory baseline spec needed to enter a club.",
    "cn_def": "必要條件、要求",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a mandatory baseline spec needed to enter a club.",
        "cn_def": "必要條件、要求"
      }
    ]
  },
  "requirement": {
    "pos": "n.",
    "en_def": "a mandatory baseline spec needed to enter a club.",
    "cn_def": "必要條件、要求",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a mandatory baseline spec needed to enter a club.",
        "cn_def": "必要條件、要求"
      }
    ]
  },
  "receiver": {
    "pos": "n.",
    "en_def": "a person who gets a package or award prize.",
    "cn_def": "接收者、受獎人、聽筒",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who gets a package or award prize.",
        "cn_def": "接收者、受獎人、聽筒"
      }
    ]
  },
  "received": {
    "pos": "v.",
    "en_def": "to accept or take an item passed to you.",
    "cn_def": "收到、接受",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to accept or take an item passed to you.",
        "cn_def": "收到、接受"
      }
    ]
  },
  "receive": {
    "pos": "v.",
    "en_def": "to accept or take an item passed to you.",
    "cn_def": "收到、接受",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to accept or take an item passed to you.",
        "cn_def": "收到、接受"
      }
    ]
  },
  "revealed": {
    "pos": "v.",
    "en_def": "to show or tell a secret fact that was hidden.",
    "cn_def": "透露、顯露、揭露",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to show or tell a secret fact that was hidden.",
        "cn_def": "透露、顯露、揭露"
      }
    ]
  },
  "reveal": {
    "pos": "v.",
    "en_def": "to show or tell a secret fact that was hidden.",
    "cn_def": "透露、顯露、揭露",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to show or tell a secret fact that was hidden.",
        "cn_def": "透露、顯露、揭露"
      }
    ]
  },
  "revelation": {
    "pos": "n.",
    "en_def": "a sudden shocking fact that is made public.",
    "cn_def": "揭露、啟示、被揭露的真相",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sudden shocking fact that is made public.",
        "cn_def": "揭露、啟示、被揭露的真相"
      }
    ]
  },
  "honoree": {
    "pos": "n.",
    "en_def": "a person who receives a special public award respect.",
    "cn_def": "領獎人、受勳者、應受尊敬的人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who receives a special public award respect.",
        "cn_def": "領獎人、受勳者、應受尊敬的人"
      }
    ]
  },
  "employee": {
    "pos": "n.",
    "en_def": "a worker who draws monthly wages from a company.",
    "cn_def": "員工、僱員",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a worker who draws monthly wages from a company.",
        "cn_def": "員工、僱員"
      }
    ]
  },
  "interviewee": {
    "pos": "n.",
    "en_def": "a candidate answering questions during a job test.",
    "cn_def": "受訪者、面試者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a candidate answering questions during a job test.",
        "cn_def": "受訪者、面試者"
      }
    ]
  },
  "addressee": {
    "pos": "n.",
    "en_def": "the explicit name listed on a postage envelope.",
    "cn_def": "收件人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the explicit name listed on a postage envelope.",
        "cn_def": "收件人"
      }
    ]
  },
  "exposure": {
    "pos": "n.",
    "en_def": "the fact of experiencing or being unprotected from air.",
    "cn_def": "暴露、接觸、曝曬",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the fact of experiencing or being unprotected from air.",
        "cn_def": "暴露、接觸、曝曬"
      },
      {
        "pos": "n.",
        "en_def": "public attention generated by news articles lines.",
        "cn_def": "曝光度、宣傳"
      }
    ]
  },
  "expose": {
    "pos": "v.",
    "en_def": "to remove a cover to reveal a hidden danger file.",
    "cn_def": "暴露、揭露、使接觸",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to remove a cover to reveal a hidden danger file.",
        "cn_def": "暴露、揭露、使接觸"
      }
    ]
  },
  "exposure to": {
    "pos": "phr.",
    "en_def": "being stuck next to loud sounds across long years.",
    "cn_def": "暴露於…、接觸…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "being stuck next to loud sounds across long years.",
        "cn_def": "暴露於…、接觸…"
      }
    ]
  },
  "promptly": {
    "pos": "adv.",
    "en_def": "quickly; immediately without any lazy delay.",
    "cn_def": "迅速地、準時地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "quickly; immediately without any lazy delay.",
        "cn_def": "迅速地、準時地"
      }
    ]
  },
  "prompt": {
    "pos": "adj.",
    "en_def": "done without delay; tracking swift clean action.",
    "cn_def": "迅速的、即時的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "done without delay; tracking swift clean action.",
        "cn_def": "迅速的、即時的"
      },
      {
        "pos": "v.",
        "en_def": "to cause someone to make a sudden decision move.",
        "cn_def": "促使、激起、提示"
      }
    ]
  },
  "prompted": {
    "pos": "v.",
    "en_def": "to cause someone to make a sudden decision move.",
    "cn_def": "促使、激起、提示",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause someone to make a sudden decision move.",
        "cn_def": "促使、激起、提示"
      }
    ]
  },
  "individual": {
    "pos": "n.",
    "en_def": "a single person considered separate from a team.",
    "cn_def": "個人、個體",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a single person considered separate from a team.",
        "cn_def": "個人、個體"
      },
      {
        "pos": "adj.",
        "en_def": "given to or matching only one single citizen.",
        "cn_def": "個別的、獨特的"
      }
    ]
  },
  "individual serving": {
    "pos": "phr.",
    "en_def": "a food pack wrapped for exactly one diner unit.",
    "cn_def": "單人份",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a food pack wrapped for exactly one diner unit.",
        "cn_def": "單人份"
      }
    ]
  },
  "individually": {
    "pos": "adv.",
    "en_def": "one by one; handled separately across steps.",
    "cn_def": "個別地、逐一地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "one by one; handled separately across steps.",
        "cn_def": "個別地、逐一地"
      }
    ]
  },
  "label": {
    "pos": "v.",
    "en_def": "to attach a piece of paper listing names to a box.",
    "cn_def": "貼標籤於、歸類為",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to attach a piece of paper listing names to a box.",
        "cn_def": "貼標籤於、歸類為"
      },
      {
        "pos": "n.",
        "en_def": "a small tag on clothing tracking wash rules text.",
        "cn_def": "標籤、標牌"
      }
    ]
  },
  "labeled": {
    "pos": "v.",
    "en_def": "to attach a piece of paper listing names to a box.",
    "cn_def": "貼標籤於、歸類為",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to attach a piece of paper listing names to a box.",
        "cn_def": "貼標籤於、歸類為"
      }
    ]
  },
  "steal / stole / stolen": {
    "pos": "v.",
    "en_def": "to take an asset without permission secretly.",
    "cn_def": "偷竊、竊取",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take an asset without permission secretly.",
        "cn_def": "偷竊、竊取"
      }
    ]
  },
  "stole": {
    "pos": "v.",
    "en_def": "to take an asset without permission secretly.",
    "cn_def": "偷竊、竊取",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take an asset without permission secretly.",
        "cn_def": "偷竊、竊取"
      }
    ]
  },
  "rob": {
    "pos": "v.",
    "en_def": "to use force or guns to claim bank cash assets.",
    "cn_def": "搶劫、奪取",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to use force or guns to claim bank cash assets.",
        "cn_def": "搶劫、奪取"
      }
    ]
  },
  "despite": {
    "pos": "n.",
    "en_def": "without being affected by; in spite of a risk.",
    "cn_def": "儘管、雖然",
    "combined": [
      {
        "pos": "n.",
        "en_def": "without being affected by; in spite of a risk.",
        "cn_def": "儘管、雖然"
      }
    ]
  },
  "in spite of": {
    "pos": "phr.",
    "en_def": "handling a wedding outside facing a rain warning.",
    "cn_def": "儘管、雖然",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "handling a wedding outside facing a rain warning.",
        "cn_def": "儘管、雖然"
      }
    ]
  },
  "despite the fact that": {
    "pos": "phr.",
    "en_def": "waking up early but still losing the transit race.",
    "cn_def": "儘管事實是…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "waking up early but still losing the transit race.",
        "cn_def": "儘管事實是…"
      }
    ]
  },
  "temporarily": {
    "pos": "adv.",
    "en_def": "for a limited time only; not permanently fixed.",
    "cn_def": "暫時地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "for a limited time only; not permanently fixed.",
        "cn_def": "暫時地"
      }
    ]
  },
  "temporary": {
    "pos": "adj.",
    "en_def": "lasting for a brief duration; tracking early ends.",
    "cn_def": "暫時的、臨時的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "lasting for a brief duration; tracking early ends.",
        "cn_def": "暫時的、臨時的"
      }
    ]
  },
  "remove": {
    "pos": "v.",
    "en_def": "to take something away or drop a virus block.",
    "cn_def": "移開、移除、脫掉",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take something away or drop a virus block.",
        "cn_def": "移開、移除、脫掉"
      }
    ]
  },
  "removal": {
    "pos": "n.",
    "en_def": "the systemic clean dropping of old database entries.",
    "cn_def": "消除、移除",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the systemic clean dropping of old database entries.",
        "cn_def": "消除、移除"
      }
    ]
  },
  "construction": {
    "pos": "n.",
    "en_def": "the active building of apartments or bridge spans.",
    "cn_def": "建造、建設、建築業",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the active building of apartments or bridge spans.",
        "cn_def": "建造、建設、建築業"
      }
    ]
  },
  "constructive": {
    "pos": "adj.",
    "en_def": "providing helpful ideas to fix operational bugs.",
    "cn_def": "建設性的、有助益的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "providing helpful ideas to fix operational bugs.",
        "cn_def": "建設性的、有助益的"
      }
    ]
  },
  "construct": {
    "pos": "v.",
    "en_def": "to build a large layout structure using concrete.",
    "cn_def": "建造、構成",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to build a large layout structure using concrete.",
        "cn_def": "建造、構成"
      }
    ]
  },
  "run for": {
    "pos": "phr.",
    "en_def": "to enter a political race to win a mayor role.",
    "cn_def": "競選",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to enter a political race to win a mayor role.",
        "cn_def": "競選"
      }
    ]
  },
  "roughly": {
    "pos": "adv.",
    "en_def": "approximately; tracking minor number variances.",
    "cn_def": "大約、粗略地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "approximately; tracking minor number variances.",
        "cn_def": "大約、粗略地"
      }
    ]
  },
  "rough": {
    "pos": "adj.",
    "en_def": "having an uneven surface; wild storm conditions.",
    "cn_def": "粗糙的、粗略的、艱難的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having an uneven surface; wild storm conditions.",
        "cn_def": "粗糙的、粗略的、艱難的"
      }
    ]
  },
  "significant": {
    "pos": "adj.",
    "en_def": "highly important, large, or noticeable in scale.",
    "cn_def": "顯著的、重要的、有重大意義的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "highly important, large, or noticeable in scale.",
        "cn_def": "顯著的、重要的、有重大意義的"
      }
    ]
  },
  "value significance": {
    "pos": "phr.",
    "en_def": "the core deep meaning held inside an old token.",
    "cn_def": "重大意義",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the core deep meaning held inside an old token.",
        "cn_def": "重大意義"
      }
    ]
  },
  "considerably": {
    "pos": "adv.",
    "en_def": "by a large, notable measure that changes status.",
    "cn_def": "相當地、非常",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "by a large, notable measure that changes status.",
        "cn_def": "相當地、非常"
      }
    ]
  },
  "significantly": {
    "pos": "adv.",
    "en_def": "in a way that is large enough to be clear value.",
    "cn_def": "顯著地、大幅地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that is large enough to be clear value.",
        "cn_def": "顯著地、大幅地"
      }
    ]
  },
  "significance": {
    "pos": "n.",
    "en_def": "the underlying importance or quality of an aura.",
    "cn_def": "重要性、意義",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the underlying importance or quality of an aura.",
        "cn_def": "重要性、意義"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
