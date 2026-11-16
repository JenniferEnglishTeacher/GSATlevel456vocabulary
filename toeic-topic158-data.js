// Topic 158 Quiz Data: Goal 目標
// Source word list: https://www.examword.com/group-topic/goal — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T158 - Goal 目標",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "objective",
    "pos": "n.",
    "cn_def": "目標；目的",
    "en_def": "something you are trying to achieve",
    "sentence": "A: What is the main {{BLANK}} of next week's training session for the new customer service staff at our call center? B: We want them to learn how to handle angry callers politely and solve common billing problems quickly, so that fewer customers need to call us back later.",
    "cn": "A：我們客服中心下週為新進客服人員舉辦的訓練課程，主要【目標】是什麼？ B：我們希望他們學會如何有禮貌地應對生氣的來電者，並快速解決常見的帳單問題，讓之後需要再打電話來的客戶變少。"
  },
  {
    "word": "target",
    "pos": "n.",
    "cn_def": "目標；指標",
    "en_def": "a result or amount that you try to reach",
    "sentence": "A: Did our sales team manage to reach this month's {{BLANK}} of two hundred new contracts before the end of the quarter? B: Not quite, because two big clients delayed their orders until January, but the manager believes we can make up the difference with the holiday promotion next month.",
    "cn": "A：我們的業務團隊在這一季結束前，有達成這個月簽下兩百份新合約的【目標】嗎？ B：還差一點，因為兩個大客戶把訂單延到一月，不過經理相信我們可以靠下個月的節日促銷活動補足差額。"
  },
  {
    "word": "ambition",
    "pos": "n.",
    "cn_def": "抱負；雄心",
    "en_def": "a strong wish to be successful or to do something",
    "sentence": "A: Why did Sarah leave her stable job at the bank and start working for a small travel company last spring? B: She has always had the {{BLANK}} to run her own tour business one day, so she wanted to learn how the travel industry works from the inside first.",
    "cn": "A：莎拉為什麼去年春天辭掉銀行的穩定工作，跑去一家小旅行社上班？ B：她一直有個【抱負】，希望有一天能經營自己的旅遊公司，所以她想先從內部了解旅遊業是怎麼運作的。"
  },
  {
    "word": "aspiration",
    "pos": "n.",
    "cn_def": "志向；渴望",
    "en_def": "a hope or wish to achieve something important",
    "sentence": "A: During her job interview, what did the young applicant say about her long-term career plans in our marketing department? B: She explained that her main {{BLANK}} is to become a team leader within five years, and she is already taking evening classes in management to prepare for that role.",
    "cn": "A：在面試中，那位年輕應徵者對於她在我們行銷部門的長期職涯規劃說了什麼？ B：她說她最主要的【志向】是五年內成為團隊主管，而且她已經在上夜間管理課程，為那個職位做準備。"
  },
  {
    "word": "purpose",
    "pos": "n.",
    "cn_def": "目的；用途",
    "en_def": "the reason why something is done",
    "sentence": "A: What is the {{BLANK}} of the online survey that the human resources department sent to all employees this morning? B: They want to find out how satisfied people are with the new flexible working hours, and they will use the results to decide whether to continue the system next year.",
    "cn": "A：人資部門今天早上寄給全體員工的線上問卷，【目的】是什麼？ B：他們想了解大家對新的彈性工時有多滿意，並會根據結果決定明年是否繼續實施這個制度。"
  },
  {
    "word": "mission",
    "pos": "n.",
    "cn_def": "使命；任務",
    "en_def": "the main aim of an organization, or an important job someone is given",
    "sentence": "A: Why does the company print that short sentence about healthy food on every box and on the wall of the reception area? B: It describes our {{BLANK}}, which is to provide fresh and affordable meals to busy families, and the founders want every employee and visitor to remember it.",
    "cn": "A：公司為什麼要在每個盒子上和接待區牆上印那句關於健康食品的短句？ B：那句話說明了我們的【使命】，也就是為忙碌的家庭提供新鮮又實惠的餐點，創辦人希望每位員工和訪客都記得。"
  },
  {
    "word": "intention",
    "pos": "n.",
    "cn_def": "意圖；打算",
    "en_def": "something you plan or mean to do",
    "sentence": "A: Did the landlord say anything about raising the rent for our office when he visited the building yesterday afternoon? B: He told us that he has no {{BLANK}} of increasing it this year, because he is happy that we always pay on time and take good care of the place.",
    "cn": "A：房東昨天下午來大樓時，有提到要調漲我們辦公室的租金嗎？ B：他告訴我們他今年沒有調漲的【打算】，因為他很滿意我們總是準時付款，也把地方照顧得很好。"
  },
  {
    "word": "plan",
    "pos": "n.",
    "cn_def": "計畫",
    "en_def": "a set of steps you decide on to do something",
    "sentence": "A: What should we prepare before we meet the bank manager on Thursday to ask for a loan for our second café? B: We need a clear business {{BLANK}} that shows our expected costs, how many customers we hope to attract, and how we will pay the money back within three years.",
    "cn": "A：我們週四要去見銀行經理，為第二家咖啡店申請貸款，之前應該準備什麼？ B：我們需要一份清楚的營運【計畫】書，列出預估成本、希望吸引多少顧客，以及我們如何在三年內還清貸款。"
  },
  {
    "word": "strategy",
    "pos": "n.",
    "cn_def": "策略",
    "en_def": "a careful plan for reaching a goal, especially over a long time",
    "sentence": "A: Why have our online sales increased so much since the beginning of this year, even though we did not lower our prices? B: The marketing team changed its {{BLANK}} and started working with popular food bloggers, which helped us reach many younger customers who had never heard of our brand before.",
    "cn": "A：雖然我們沒有降價，為什麼今年年初以來線上銷售成長這麼多？ B：行銷團隊改變了【策略】，開始和熱門的美食部落客合作，幫助我們接觸到很多以前從沒聽過我們品牌的年輕顧客。"
  },
  {
    "word": "vision",
    "pos": "n.",
    "cn_def": "願景",
    "en_def": "an idea of what the future should be like",
    "sentence": "A: What did the new director talk about during her first speech to the staff at the annual company dinner last night? B: She shared her {{BLANK}} for the next ten years, explaining that she hopes to open branches in three more Asian countries and make our products more environmentally friendly.",
    "cn": "A：新任總監昨晚在公司年度晚宴上第一次對員工演講，她談了些什麼？ B：她分享了未來十年的【願景】，說明她希望在另外三個亞洲國家開設分公司，並讓我們的產品更環保。"
  },
  {
    "word": "dream",
    "pos": "n.",
    "cn_def": "夢想",
    "en_def": "something you have wanted to do or have for a long time",
    "sentence": "A: Is it true that the chef from our hotel restaurant is leaving next month to move back to his hometown in the south? B: Yes, he finally saved enough money to open a small noodle shop there, which has been his {{BLANK}} since he was a teenager helping in his grandmother's kitchen.",
    "cn": "A：我們飯店餐廳的主廚下個月要離職、搬回南部老家，是真的嗎？ B：是的，他終於存夠錢要在那裡開一家小麵店，那是他從少年時期在祖母廚房幫忙時就有的【夢想】。"
  },
  {
    "word": "milestone",
    "pos": "n.",
    "cn_def": "里程碑",
    "en_def": "an important event or stage in a process",
    "sentence": "A: Why is everyone in the office wearing party hats and eating cake this afternoon instead of working at their desks? B: Our online shop just reached one million customers, which is an important {{BLANK}} for a company that started with only three people in a tiny apartment five years ago.",
    "cn": "A：為什麼今天下午辦公室裡每個人都戴著派對帽吃蛋糕，而不是坐在位子上工作？ B：我們的網路商店剛達到一百萬名顧客，對一家五年前只有三個人在小公寓裡創業的公司來說，這是個重要的【里程碑】。"
  },
  {
    "word": "achievement",
    "pos": "n.",
    "cn_def": "成就",
    "en_def": "something good you have done through effort",
    "sentence": "A: Why was the director of our factory invited to give a speech at the industry conference in Singapore next month? B: Cutting energy use by thirty percent in only two years was a great {{BLANK}}, and other companies want to learn how her team managed to do it without reducing production.",
    "cn": "A：為什麼我們工廠的廠長受邀下個月在新加坡的產業研討會上演講？ B：只用兩年就把能源使用量減少百分之三十是很了不起的【成就】，其他公司都想知道她的團隊如何在不減產的情況下做到。"
  },
  {
    "word": "success",
    "pos": "n.",
    "cn_def": "成功",
    "en_def": "the result of getting what you wanted or planned",
    "sentence": "A: How did the new product launch at the shopping mall go last weekend, and did many people come to try the samples? B: It was a huge {{BLANK}}, because all the free samples were gone in two hours, and the store received more than five hundred online orders by Sunday evening.",
    "cn": "A：上週末在購物中心的新品發表會進行得如何？有很多人來試用樣品嗎？ B：非常【成功】，所有免費樣品兩個小時內就發完了，而且到週日晚上，店家收到超過五百筆網路訂單。"
  },
  {
    "word": "attain",
    "pos": "v.",
    "cn_def": "達到；獲得",
    "en_def": "to reach or achieve something after effort",
    "sentence": "A: How long does it usually take for a new staff member at our accounting firm to get the highest professional certificate? B: Most people need about four years of hard study and work experience to {{BLANK}} that level, but a few very talented accountants have done it in less than three.",
    "cn": "A：我們會計師事務所的新進人員通常需要多久才能拿到最高等級的專業證照？ B：大多數人需要大約四年的努力讀書和工作經驗才能【達到】那個等級，不過有少數非常有天分的會計師不到三年就做到了。"
  },
  {
    "word": "accomplish",
    "pos": "v.",
    "cn_def": "完成；達成",
    "en_def": "to succeed in doing something",
    "sentence": "A: Do you really think our small team of four people can finish redesigning the whole company website before the product launch in March? B: It will be hard, but if we divide the work carefully and avoid unnecessary meetings, I believe we can {{BLANK}} the task on time without working every weekend.",
    "cn": "A：你真的認為我們四人小組能在三月產品發表前完成整個公司網站的改版嗎？ B：會很辛苦，但如果我們仔細分工、避免不必要的會議，我相信我們能準時【完成】這項任務，而且不必每個週末都加班。"
  },
  {
    "word": "pursue",
    "pos": "v.",
    "cn_def": "追求；從事",
    "en_def": "to try to achieve or do something over a period of time",
    "sentence": "A: Why is Kevin from the sales department leaving the company after working here successfully for more than ten years? B: He has decided to {{BLANK}} a career in teaching, so he will study at a university in Taichung for two years and then look for a job at a high school.",
    "cn": "A：業務部的凱文在這裡表現很好、工作了十多年，為什麼要離開公司？ B：他決定【從事】教職，所以他會在台中的大學進修兩年，然後找一份高中的工作。"
  },
  {
    "word": "strive",
    "pos": "v.",
    "cn_def": "努力；奮鬥",
    "en_def": "to try very hard to do something",
    "sentence": "A: Why does the hotel manager read every online review from guests so carefully, even the short ones written late at night? B: All of our staff {{BLANK}} to give each guest a comfortable and pleasant stay, and reviews help us find small problems that we might not notice by ourselves.",
    "cn": "A：飯店經理為什麼會這麼仔細地閱讀每一則房客的網路評論，連深夜寫的短評也不放過？ B：我們所有員工都【努力】讓每位客人住得舒適愉快，而評論能幫助我們發現自己可能沒注意到的小問題。"
  },
  {
    "word": "aim",
    "pos": "v.",
    "cn_def": "力求；打算",
    "en_def": "to plan or try to achieve something",
    "sentence": "A: How quickly will customers receive their orders after the company opens the new warehouse near the airport next month? B: We {{BLANK}} to deliver every package within twenty-four hours in the northern area, and we are hiring thirty more drivers so that we can keep this promise during busy holidays.",
    "cn": "A：公司下個月在機場附近的新倉庫啟用後，顧客多快能收到訂單？ B：我們【力求】在北部地區二十四小時內送達每個包裹，而且我們正在多招募三十名司機，以便在忙碌的假期也能履行這個承諾。"
  },
  {
    "word": "focus",
    "pos": "v.",
    "cn_def": "專注；集中",
    "en_def": "to give most of your attention to one thing",
    "sentence": "A: There are so many complaints about the new website that I don't know where to start at tomorrow's team meeting. What should we do? B: Let's {{BLANK}} on the payment problems first, because customers cannot buy anything when that page fails, and we can fix the design details later.",
    "cn": "A：關於新網站的抱怨實在太多了，我不知道明天團隊會議該從哪裡開始。我們該怎麼辦？ B：我們先【專注】在付款問題上，因為那個頁面出錯時顧客什麼都買不了，設計細節之後再修就好。"
  },
  {
    "word": "commitment",
    "pos": "n.",
    "cn_def": "承諾；投入",
    "en_def": "a promise or firm decision to do something",
    "sentence": "A: Why did the city choose our company to supply the new buses instead of the cheaper company from overseas? B: The officials were impressed by our strong {{BLANK}} to reducing pollution, since all our buses are electric and we promised to recycle the old batteries at no extra cost.",
    "cn": "A：市政府為什麼選擇我們公司供應新公車，而不是那家比較便宜的海外公司？ B：官員們對我們減少污染的堅定【承諾】印象深刻，因為我們所有公車都是電動的，而且我們承諾免費回收舊電池。"
  },
  {
    "word": "determination",
    "pos": "n.",
    "cn_def": "決心",
    "en_def": "the quality of continuing to try even when something is difficult",
    "sentence": "A: How did the young designer manage to start her own clothing company after so many banks refused to lend her money? B: She showed great {{BLANK}}, selling her designs at weekend markets for three years and saving every dollar until she finally had enough to rent a small shop.",
    "cn": "A：在那麼多銀行拒絕借錢給她之後，這位年輕設計師是怎麼成功創立自己的服飾公司的？ B：她展現了極大的【決心】，花了三年在週末市集販售自己的設計，存下每一塊錢，直到終於有足夠的錢租下一間小店面。"
  },
  {
    "word": "motivation",
    "pos": "n.",
    "cn_def": "動機；動力",
    "en_def": "the desire or reason to do something",
    "sentence": "A: Why did the manager decide to give a small bonus to every worker who finishes their training courses this year? B: She noticed that staff {{BLANK}} was low after the long busy season, and she hopes the extra money will encourage people to learn new skills and feel more valued.",
    "cn": "A：經理為什麼決定今年發一小筆獎金給每位完成培訓課程的員工？ B：她注意到在漫長的旺季之後員工的【動力】很低，希望這筆額外的錢能鼓勵大家學習新技能，並覺得自己更受重視。"
  },
  {
    "word": "priority",
    "pos": "n.",
    "cn_def": "優先事項；首要之務",
    "en_def": "something that is more important than other things",
    "sentence": "A: Why do the workers at the factory check every machine so carefully before the morning shift begins, even when we are busy? B: Worker safety is our top {{BLANK}}, so we would rather start production twenty minutes late than let anyone use equipment that might be broken or dangerous.",
    "cn": "A：為什麼工廠的工人在早班開始前要那麼仔細地檢查每台機器，即使我們很忙也一樣？ B：員工安全是我們的【首要之務】，所以我們寧願晚二十分鐘開工，也不讓任何人使用可能損壞或危險的設備。"
  },
  {
    "word": "deadline",
    "pos": "n.",
    "cn_def": "截止期限",
    "en_def": "the time or date by which something must be done",
    "sentence": "A: Is there any chance we can send the final design for the hotel brochure to the printing company next Monday instead of this Friday? B: I'm afraid not, because the {{BLANK}} is Friday at five o'clock, and if we are late, the brochures will not be ready for the travel fair in Tokyo.",
    "cn": "A：飯店手冊的最終設計，我們有可能下週一再寄給印刷廠，而不是這週五嗎？ B：恐怕不行，因為【截止期限】是週五五點，如果我們遲交，手冊就趕不上東京的旅展了。"
  },
  {
    "word": "progress",
    "pos": "n.",
    "cn_def": "進展；進步",
    "en_def": "movement toward finishing or improving something",
    "sentence": "A: How is the construction of the new shopping mall near the train station going, and will it really open before the summer holidays? B: The builders are making good {{BLANK}} now that the rainy season is over, and the manager says the first three floors should be ready for shops by early June.",
    "cn": "A：火車站附近的新購物中心工程進行得如何？真的會在暑假前開幕嗎？ B：雨季結束後，工人們的【進展】很順利，經理說前三層樓應該在六月初就能讓店家進駐。"
  },
  {
    "word": "outcome",
    "pos": "n.",
    "cn_def": "結果",
    "en_def": "the final result of something",
    "sentence": "A: Has anyone heard what happened at the meeting with the Japanese supplier about the new prices for next year's orders? B: We are still waiting for the {{BLANK}}, because both sides wanted more time to think, but our manager expects a final decision by the end of this week.",
    "cn": "A：有人知道跟日本供應商討論明年訂單新價格的那場會議怎麼樣了嗎？ B：我們還在等【結果】，因為雙方都想要更多時間考慮，不過經理預計這週結束前會有最終決定。"
  },
  {
    "word": "benchmark",
    "pos": "n.",
    "cn_def": "基準；標竿",
    "en_def": "a standard used to compare and judge other things",
    "sentence": "A: Why do the engineers keep testing our new laptop against the popular model that our biggest competitor released last year? B: That model has become the {{BLANK}} for battery life in the industry, so we need to show customers that our product can run even longer on a single charge.",
    "cn": "A：為什麼工程師一直拿我們的新筆電和最大競爭對手去年推出的熱門機型做比較測試？ B：那款機型已經成為業界電池續航力的【基準】，所以我們必須向顧客證明我們的產品充一次電能用得更久。"
  },
  {
    "word": "resolve",
    "pos": "v.",
    "cn_def": "下定決心",
    "en_def": "to make a firm decision to do something",
    "sentence": "A: Do you have any special goals for the new year now that the busy season at the office is finally over? B: Every January I {{BLANK}} to exercise more and eat healthier food, but this year I have also joined a cooking class with two coworkers so that I will not give up after a few weeks.",
    "cn": "A：辦公室的旺季終於結束了，你新的一年有什麼特別的目標嗎？ B：每年一月我都會【下定決心】多運動、吃得更健康，不過今年我還和兩位同事一起報名了烹飪課，這樣才不會過幾週就放棄。"
  },
  {
    "word": "perseverance",
    "pos": "n.",
    "cn_def": "毅力；堅持不懈",
    "en_def": "continuing to try hard for a long time even when things are difficult",
    "sentence": "A: How did your colleague Ken pass the difficult Japanese language test after failing it twice in the past two years? B: It took a lot of patience and {{BLANK}}, because he studied for an hour every night after work and practiced speaking with Japanese clients whenever he had the chance.",
    "cn": "A：你同事阿健過去兩年考了兩次都沒過，這次是怎麼通過那個很難的日語檢定的？ B：靠的是很大的耐心和【毅力】，因為他每天下班後都讀一個小時，而且一有機會就跟日本客戶練習會話。"
  },
  {
    "word": "discipline",
    "pos": "n.",
    "cn_def": "自律；紀律",
    "en_def": "the ability to control yourself and follow rules or a routine",
    "sentence": "A: I started working from home last month, but I keep watching videos and wasting time instead of finishing my reports. Any advice? B: Working at home takes a lot of {{BLANK}}, so try to start at the same time every morning, turn off your phone, and take short breaks only after finishing each task.",
    "cn": "A：我上個月開始在家工作，但一直看影片浪費時間，報告都沒寫完。有什麼建議嗎？ B：在家工作需要很強的【自律】，所以試著每天早上同一時間開始，把手機關掉，每完成一項工作再稍微休息一下。"
  },
  {
    "word": "direction",
    "pos": "n.",
    "cn_def": "方向",
    "en_def": "the way something is developing or moving",
    "sentence": "A: Why did the design firm stop making printed catalogs after working with the same department stores for over twenty years? B: After losing two major clients, the owners decided to move in a new {{BLANK}} and now mainly create websites and online advertising for small businesses.",
    "cn": "A：這家設計公司和同樣幾家百貨公司合作了二十多年，為什麼不再做印刷型錄了？ B：在失去兩個大客戶之後，老闆們決定朝新的【方向】發展，現在主要為小型企業製作網站和線上廣告。"
  },
  {
    "word": "fulfillment",
    "pos": "n.",
    "cn_def": "成就感；滿足感",
    "en_def": "a feeling of happiness because you are doing something useful or satisfying",
    "sentence": "A: Why did Linda leave her well-paid job at the bank to work for a charity that helps older people in the countryside? B: She said she never felt any real {{BLANK}} counting money all day, but now she feels happy and useful every time she helps someone get the care they need.",
    "cn": "A：琳達為什麼辭掉銀行的高薪工作，去一個幫助鄉下老人的慈善機構上班？ B：她說整天數錢從來沒讓她感到真正的【成就感】，但現在每次幫助別人得到所需的照顧，她都覺得快樂又有意義。"
  },
  {
    "word": "self-improvement",
    "pos": "n.",
    "cn_def": "自我提升",
    "en_def": "the process of making yourself better through your own effort",
    "sentence": "A: Why does our company pay for online courses and give staff one free afternoon a month for studying? B: The managers believe that {{BLANK}} makes workers more confident and skilled, and employees who keep learning new things usually stay with the company longer and help their teams solve problems.",
    "cn": "A：為什麼公司要幫員工付線上課程的費用，還每個月給一個下午的讀書時間？ B：主管們相信【自我提升】能讓員工更有自信、更有技能，而持續學習新事物的員工通常會在公司待得更久，也能幫團隊解決問題。"
  }
];

const MCQS = [
  {
    "q": "The main _____ of the workshop is to teach new staff how to use the billing software. Everyone will practice with real customer files.",
    "options": [
      "objective",
      "deadline",
      "benchmark",
      "discipline"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our sales team failed to reach its monthly _____ of 500 units. The manager will review the results with everyone on Friday.",
    "options": [
      "mission",
      "vision",
      "target",
      "perseverance"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Since childhood, Maria has had a strong _____ to run her own bakery. She finally opened a small shop near the station last spring.",
    "options": [
      "deadline",
      "ambition",
      "benchmark",
      "outcome"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The _____ of this meeting is to choose a supplier for the new office chairs. Please bring the price lists you collected.",
    "options": [
      "milestone",
      "discipline",
      "deadline",
      "purpose"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The charity's _____ is to provide clean water to villages in rural areas. Volunteers from our company joined the project last year.",
    "options": [
      "deadline",
      "benchmark",
      "mission",
      "discipline"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Before opening a second store, the owners wrote a detailed business _____. It showed the bank how they would pay back the loan.",
    "options": [
      "plan",
      "motivation",
      "outcome",
      "discipline"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The company changed its marketing _____ and started advertising on social media. As a result, online sales doubled within three months.",
    "options": [
      "deadline",
      "perseverance",
      "fulfillment",
      "strategy"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The new CEO shared her _____ for the company's future at the annual meeting. She hopes to open offices in five Asian countries.",
    "options": [
      "deadline",
      "vision",
      "discipline",
      "benchmark"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Reaching one million customers was an important _____ for the small online shop. The staff celebrated with a party at a local restaurant.",
    "options": [
      "milestone",
      "deadline",
      "discipline",
      "intention"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Daniel Lee received an award for lifetime _____ at the hotel industry dinner. He has managed luxury hotels for over forty years.",
    "options": [
      "deadline",
      "priority",
      "direction",
      "achievement"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The product launch was a great _____, and all the samples were gone in an hour. The team plans to hold another event next month.",
    "options": [
      "deadline",
      "priority",
      "success",
      "discipline"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Few employees _____ the highest level of the certification exam on their first try. Most people need to take it two or three times.",
    "options": [
      "strive",
      "attain",
      "aim",
      "focus"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "With only three people, the small team managed to _____ the task in two days. Their manager thanked them in front of the whole office.",
    "options": [
      "strive",
      "aim",
      "focus",
      "accomplish"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "After working in sales for ten years, Kevin decided to _____ a career in teaching. He now studies at night and works during the day.",
    "options": [
      "pursue",
      "strive",
      "focus",
      "accomplish"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Our hotel staff always _____ to give every guest a warm and pleasant stay. We read all online reviews carefully every week.",
    "options": [
      "attain",
      "accomplish",
      "strive",
      "pursue"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "We _____ to deliver all orders within 24 hours. Customers can track their packages online at any time.",
    "options": [
      "attain",
      "aim",
      "accomplish",
      "pursue"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "During the meeting, please _____ on the main problems with the new website. We can discuss small design details next week.",
    "options": [
      "focus",
      "attain",
      "pursue",
      "accomplish"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The company has made a strong _____ to reducing plastic waste in its factories. It will stop using plastic bags by next year.",
    "options": [
      "deadline",
      "benchmark",
      "outcome",
      "commitment"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Despite many failures, the young inventor showed great _____ and kept improving her design. Her product is now sold in many countries.",
    "options": [
      "deadline",
      "determination",
      "benchmark",
      "priority"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Free lunches and bonuses can increase staff _____ in busy months. Workers feel that the company values their hard work.",
    "options": [
      "deadline",
      "milestone",
      "motivation",
      "direction"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Customer safety is our top _____, so all machines are checked every morning. Any broken equipment is repaired before the store opens.",
    "options": [
      "deadline",
      "milestone",
      "outcome",
      "priority"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The report must be finished by Friday at noon. If we miss the _____, the client may choose another advertising agency.",
    "options": [
      "deadline",
      "priority",
      "vision",
      "ambition"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The construction team is making good _____ on the new shopping mall. The building should be ready to open in early summer.",
    "options": [
      "deadline",
      "progress",
      "discipline",
      "priority"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Both companies are waiting for the _____ of the negotiations on the new contract. A final decision is expected by the end of the week.",
    "options": [
      "discipline",
      "ambition",
      "outcome",
      "motivation"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The new phone's battery life has become a _____ for other brands. Competitors now test their own products against it.",
    "options": [
      "benchmark",
      "deadline",
      "motivation",
      "discipline"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Every January, many people _____ to exercise more and eat healthier food. However, most of them give up within a few weeks.",
    "options": [
      "attain",
      "accomplish",
      "pursue",
      "resolve"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Learning a new language at work requires patience and _____. Ken studied every evening for two years before he felt confident.",
    "options": [
      "deadline",
      "benchmark",
      "perseverance",
      "outcome"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Working from home requires strong _____ because no manager is watching you. Lisa starts work at eight every morning and takes short breaks.",
    "options": [
      "deadline",
      "discipline",
      "milestone",
      "outcome"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "After losing two major clients, the firm decided to move in a new _____. It now focuses on online design services.",
    "options": [
      "deadline",
      "priority",
      "benchmark",
      "direction"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Many employees use their free time for _____, such as taking online courses. The company even pays for some of these classes.",
    "options": [
      "self-improvement",
      "deadline",
      "benchmark",
      "outcome"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "objective": {
    "pos": "n.",
    "en_def": "something you are trying to achieve",
    "cn_def": "目標；目的"
  },
  "target": {
    "pos": "n.",
    "en_def": "a result or amount that you try to reach",
    "cn_def": "目標；指標"
  },
  "ambition": {
    "pos": "n.",
    "en_def": "a strong wish to be successful or to do something",
    "cn_def": "抱負；雄心"
  },
  "aspiration": {
    "pos": "n.",
    "en_def": "a hope or wish to achieve something important",
    "cn_def": "志向；渴望"
  },
  "purpose": {
    "pos": "n.",
    "en_def": "the reason why something is done",
    "cn_def": "目的；用途"
  },
  "mission": {
    "pos": "n.",
    "en_def": "the main aim of an organization, or an important job someone is given",
    "cn_def": "使命；任務"
  },
  "intention": {
    "pos": "n.",
    "en_def": "something you plan or mean to do",
    "cn_def": "意圖；打算"
  },
  "plan": {
    "pos": "n.",
    "en_def": "a set of steps you decide on to do something",
    "cn_def": "計畫"
  },
  "strategy": {
    "pos": "n.",
    "en_def": "a careful plan for reaching a goal, especially over a long time",
    "cn_def": "策略"
  },
  "vision": {
    "pos": "n.",
    "en_def": "an idea of what the future should be like",
    "cn_def": "願景"
  },
  "dream": {
    "pos": "n.",
    "en_def": "something you have wanted to do or have for a long time",
    "cn_def": "夢想"
  },
  "milestone": {
    "pos": "n.",
    "en_def": "an important event or stage in a process",
    "cn_def": "里程碑"
  },
  "achievement": {
    "pos": "n.",
    "en_def": "something good you have done through effort",
    "cn_def": "成就"
  },
  "success": {
    "pos": "n.",
    "en_def": "the result of getting what you wanted or planned",
    "cn_def": "成功"
  },
  "attain": {
    "pos": "v.",
    "en_def": "to reach or achieve something after effort",
    "cn_def": "達到；獲得"
  },
  "accomplish": {
    "pos": "v.",
    "en_def": "to succeed in doing something",
    "cn_def": "完成；達成"
  },
  "pursue": {
    "pos": "v.",
    "en_def": "to try to achieve or do something over a period of time",
    "cn_def": "追求；從事"
  },
  "strive": {
    "pos": "v.",
    "en_def": "to try very hard to do something",
    "cn_def": "努力；奮鬥"
  },
  "aim": {
    "pos": "v.",
    "en_def": "to plan or try to achieve something",
    "cn_def": "力求；打算"
  },
  "focus": {
    "pos": "v.",
    "en_def": "to give most of your attention to one thing",
    "cn_def": "專注；集中"
  },
  "commitment": {
    "pos": "n.",
    "en_def": "a promise or firm decision to do something",
    "cn_def": "承諾；投入"
  },
  "determination": {
    "pos": "n.",
    "en_def": "the quality of continuing to try even when something is difficult",
    "cn_def": "決心"
  },
  "motivation": {
    "pos": "n.",
    "en_def": "the desire or reason to do something",
    "cn_def": "動機；動力"
  },
  "priority": {
    "pos": "n.",
    "en_def": "something that is more important than other things",
    "cn_def": "優先事項；首要之務"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "the time or date by which something must be done",
    "cn_def": "截止期限"
  },
  "progress": {
    "pos": "n.",
    "en_def": "movement toward finishing or improving something",
    "cn_def": "進展；進步"
  },
  "outcome": {
    "pos": "n.",
    "en_def": "the final result of something",
    "cn_def": "結果"
  },
  "benchmark": {
    "pos": "n.",
    "en_def": "a standard used to compare and judge other things",
    "cn_def": "基準；標竿"
  },
  "resolve": {
    "pos": "v.",
    "en_def": "to make a firm decision to do something",
    "cn_def": "下定決心"
  },
  "perseverance": {
    "pos": "n.",
    "en_def": "continuing to try hard for a long time even when things are difficult",
    "cn_def": "毅力；堅持不懈"
  },
  "discipline": {
    "pos": "n.",
    "en_def": "the ability to control yourself and follow rules or a routine",
    "cn_def": "自律；紀律"
  },
  "direction": {
    "pos": "n.",
    "en_def": "the way something is developing or moving",
    "cn_def": "方向"
  },
  "fulfillment": {
    "pos": "n.",
    "en_def": "a feeling of happiness because you are doing something useful or satisfying",
    "cn_def": "成就感；滿足感"
  },
  "self-improvement": {
    "pos": "n.",
    "en_def": "the process of making yourself better through your own effort",
    "cn_def": "自我提升"
  }
};

const EXTRA_GLOSSES = {};
