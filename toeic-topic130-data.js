// Topic 130 Quiz Data: Express 表達
// Source word list: https://www.examword.com/group-topic/express — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T130 - Express 表達",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "expression",
    "pos": "n.",
    "cn_def": "表情；表達",
    "en_def": "a look on someone's face, or a way of showing a feeling",
    "sentence": "A: Did the new marketing assistant enjoy the welcome lunch that the team organized for her on Friday afternoon at the Italian restaurant downtown? B: I think so, because she had a happy {{BLANK}} on her face the whole time, and she thanked everyone for the kind cards and flowers before she left.",
    "cn": "A：新來的行銷助理喜歡團隊週五下午在市中心義大利餐廳為她辦的歡迎午餐嗎？ B：我想是的，因為她整段時間臉上都帶著開心的【表情】，而且離開前還感謝大家送的卡片和花。"
  },
  {
    "word": "expressive",
    "pos": "adj.",
    "cn_def": "富有表現力的；表達情感的",
    "en_def": "showing feelings or meaning clearly",
    "sentence": "A: Why did the director choose Emma to give the product presentation at the trade show instead of one of the senior sales staff? B: She has a very {{BLANK}} way of speaking, and her hand movements and warm smile keep the audience interested, so customers always remember the products she introduces.",
    "cn": "A：為什麼主管選了艾瑪在商展上做產品簡報，而不是選資深業務人員之一？ B：她說話的方式非常【富有表現力】，她的手勢和溫暖的笑容能讓觀眾保持興趣，所以客戶總是記得她介紹的產品。"
  },
  {
    "word": "expressively",
    "pos": "adv.",
    "cn_def": "富有表情地；生動地",
    "en_def": "in a way that shows feelings clearly",
    "sentence": "A: How did the new tour guide manage to keep the large group of tired tourists interested during the long museum visit yesterday afternoon? B: She told the old stories very {{BLANK}}, changing her voice for each character and using her hands, so even the children were listening carefully until the end.",
    "cn": "A：新導遊昨天下午在漫長的博物館參觀中，是怎麼讓那一大群疲累的遊客保持興趣的？ B：她非常【生動地】講述那些古老的故事，為每個角色變換聲音並搭配手勢，所以連孩子們都專心聽到最後。"
  },
  {
    "word": "convey",
    "pos": "v.",
    "cn_def": "傳達；表達",
    "en_def": "to make feelings, ideas or information known to someone",
    "sentence": "A: Could you help me write the email to our overseas suppliers about the delayed shipment, since I'm worried my English sounds too rude? B: Sure, we should {{BLANK}} our concerns politely but clearly, explain how the delay affects our customers, and ask them to confirm a new delivery date by Friday.",
    "cn": "A：你能幫我寫那封寄給海外供應商、關於延誤出貨的電子郵件嗎？我擔心我的英文聽起來太不禮貌。 B：當然，我們應該禮貌但清楚地【傳達】我們的擔憂，說明延誤如何影響我們的客戶，並請他們在週五前確認新的交貨日期。"
  },
  {
    "word": "communicate",
    "pos": "v.",
    "cn_def": "溝通；傳達",
    "en_def": "to share information or ideas with others",
    "sentence": "A: The engineers in Taipei and the designers in Berlin keep making mistakes on the new phone project, so what do you think the main problem is? B: I think they don't {{BLANK}} often enough, so we should set up a weekly video meeting and a shared online folder for all the drawings and updates.",
    "cn": "A：台北的工程師和柏林的設計師在新手機專案上一直出錯，你認為主要問題是什麼？ B：我認為他們【溝通】得不夠頻繁，所以我們應該安排每週一次的視訊會議，並建立一個共用的線上資料夾來放所有的圖面和最新資訊。"
  },
  {
    "word": "communication",
    "pos": "n.",
    "cn_def": "溝通；通訊",
    "en_def": "the act of sharing information with others",
    "sentence": "A: Why did the hotel guests complain so much about the renovation work on the third floor last week, even though it finished on time? B: There was poor {{BLANK}} between the front desk and the building team, so nobody told the guests about the noise before they checked in, and many of them felt upset.",
    "cn": "A：為什麼上週飯店客人對三樓的整修工程抱怨這麼多，即使工程準時完工？ B：櫃檯和施工團隊之間的【溝通】不良，所以沒有人在客人入住前告知他們會有噪音，很多人因此感到不滿。"
  },
  {
    "word": "declare",
    "pos": "v.",
    "cn_def": "宣布；申報",
    "en_def": "to state something officially; to tell customs about goods you are carrying",
    "sentence": "A: I'm flying back from the electronics fair in Tokyo tomorrow with some expensive camera samples, so do I need to do anything special at the airport? B: Yes, you must {{BLANK}} the samples at customs when you land, and keep the invoices from the company in your bag in case the officers want to check them.",
    "cn": "A：我明天要從東京電子展搭機回來，帶著一些昂貴的相機樣品，我在機場需要做什麼特別的事嗎？ B：需要，你降落後必須在海關【申報】這些樣品，並把公司的發票放在包包裡，以防海關人員要查看。"
  },
  {
    "word": "announcement",
    "pos": "n.",
    "cn_def": "公告；宣布",
    "en_def": "a public statement that gives information",
    "sentence": "A: Why is everyone gathering in the main hall of the office building at ten o'clock this morning instead of starting their usual work? B: The CEO is going to make an important {{BLANK}} about the merger with our biggest competitor, and all departments were asked to attend so nobody hears rumors first.",
    "cn": "A：為什麼今天早上十點大家都聚集在辦公大樓的大廳，而不是像平常一樣開始工作？ B：執行長要發布一項關於與我們最大競爭對手合併的重要【公告】，所有部門都被要求出席，這樣就沒有人會先聽到謠言。"
  },
  {
    "word": "proclaim",
    "pos": "v.",
    "cn_def": "宣布；宣告",
    "en_def": "to announce something officially and publicly",
    "sentence": "A: Why are there so many colorful posters and banners hanging along the main street near the city hall this week? B: The mayor is going to {{BLANK}} the first Sunday of next month as City Recycling Day, so local shops and schools are preparing special events to celebrate it together.",
    "cn": "A：為什麼這週市政府附近的主要街道上掛了那麼多色彩繽紛的海報和布條？ B：市長將【正式宣布】下個月的第一個星期日為城市回收日，所以當地商店和學校正在準備特別活動一起慶祝。"
  },
  {
    "word": "utter",
    "pos": "v.",
    "cn_def": "說出；發出（聲音）",
    "en_def": "to say something or make a sound with your voice",
    "sentence": "A: How did the new intern behave during her first meeting with the important clients from Singapore yesterday afternoon? B: She was so nervous that she didn't {{BLANK}} a single word for the whole hour, but she took careful notes, and later she wrote an excellent summary for the manager.",
    "cn": "A：新來的實習生昨天下午第一次和新加坡的重要客戶開會時表現如何？ B：她緊張到整整一個小時都沒【說出】一個字，但她做了仔細的筆記，之後還幫經理寫了一份很棒的摘要。"
  },
  {
    "word": "voice",
    "pos": "v.",
    "cn_def": "表達；說出（意見）",
    "en_def": "to tell people your opinion or feeling",
    "sentence": "A: The staff seem unhappy about the new rule that everyone must work on Saturdays during the busy season, so what should we do about it? B: We should hold a meeting where employees can {{BLANK}} their concerns openly, and then the managers can discuss possible changes, such as extra pay or days off later.",
    "cn": "A：員工似乎對旺季期間每個人都必須週六上班的新規定感到不滿，我們該怎麼辦？ B：我們應該召開一場會議，讓員工能公開【表達】他們的擔憂，然後經理們可以討論可能的調整，例如加班費或之後補休。"
  },
  {
    "word": "statement",
    "pos": "n.",
    "cn_def": "聲明；陳述",
    "en_def": "something that is said or written officially",
    "sentence": "A: Have the reporters received any official information yet about the fire at our factory in Taichung last night? B: Not yet, but the public relations team is preparing a short {{BLANK}} for the press, which will explain what happened, confirm that no workers were hurt, and describe our next steps.",
    "cn": "A：記者們收到任何有關昨晚我們台中工廠火災的官方資訊了嗎？ B：還沒有，但公關團隊正在準備一份給媒體的簡短【聲明】，內容會說明事發經過、確認沒有工人受傷，並描述我們接下來的步驟。"
  },
  {
    "word": "remark",
    "pos": "n.",
    "cn_def": "評論；話語",
    "en_def": "something you say that gives an opinion",
    "sentence": "A: Why does Jason look so upset after the team lunch, when he was in such a good mood this morning? B: The manager made a rude {{BLANK}} about his sales report in front of everyone, and although she apologized later, Jason still feels embarrassed and doesn't want to talk about it.",
    "cn": "A：為什麼傑森在團隊午餐後看起來那麼難過？他今天早上心情還很好。 B：經理當著大家的面對他的業績報告說了一句無禮的【話】，雖然她後來道歉了，傑森還是覺得很難堪，不想談這件事。"
  },
  {
    "word": "comment",
    "pos": "n.",
    "cn_def": "評論；意見；留言",
    "en_def": "an opinion that you say or write",
    "sentence": "A: The new website for our bakery went online last Monday, so have any customers said anything about the design or the ordering system? B: Yes, one customer left a helpful {{BLANK}} saying the menu was hard to find on her phone, so our designer is going to move it to the top of the page this week.",
    "cn": "A：我們麵包店的新網站上週一上線了，有顧客對設計或訂購系統說了什麼嗎？ B：有，一位顧客留下了一則很有幫助的【留言】，說在她的手機上很難找到菜單，所以我們的設計師這週會把它移到頁面頂端。"
  },
  {
    "word": "articulate",
    "pos": "v.",
    "cn_def": "清楚表達；闡明",
    "en_def": "to express ideas clearly in words",
    "sentence": "A: The investors want to know exactly why we need more money for the new delivery app, so how should we prepare for the meeting? B: We need to {{BLANK}} our goals clearly in the first five minutes, show them simple charts about our growth, and answer their questions about the costs honestly.",
    "cn": "A：投資人想確切知道為什麼我們的新外送應用程式需要更多資金，我們該如何準備這場會議？ B：我們需要在前五分鐘清楚地【闡明】我們的目標，給他們看關於成長的簡單圖表，並誠實回答他們關於成本的問題。"
  },
  {
    "word": "gesture",
    "pos": "n.",
    "cn_def": "表示；姿態；手勢",
    "en_def": "an action that shows your feelings; a movement of the hands",
    "sentence": "A: Why did the hotel manager send flowers and a free dinner voucher to the guests in room 512 this afternoon? B: Their air conditioner broke during the hot night, so he wanted to make a kind {{BLANK}} to show that the hotel cares and to apologize for all the trouble they had.",
    "cn": "A：為什麼飯店經理今天下午送花和免費晚餐券給512號房的客人？ B：他們的冷氣在炎熱的夜裡壞了，所以他想做個貼心的【表示】，表達飯店的關心並為他們遇到的所有麻煩道歉。"
  },
  {
    "word": "indicate",
    "pos": "v.",
    "cn_def": "顯示；表明",
    "en_def": "to show or point out that something is true",
    "sentence": "A: Should we open a second coffee shop near the train station next year, or is it still too risky for our small company? B: Our latest survey results {{BLANK}} that many commuters want a quick breakfast there, so I think it is a good chance, but we should check the rent first.",
    "cn": "A：我們明年該在火車站附近開第二家咖啡店嗎？還是對我們這種小公司來說風險仍然太高？ B：我們最新的調查結果【顯示】許多通勤族想在那裡買快速的早餐，所以我認為這是個好機會，但我們應該先確認租金。"
  },
  {
    "word": "demonstrate",
    "pos": "v.",
    "cn_def": "示範；證明",
    "en_def": "to show how something works; to prove something",
    "sentence": "A: Our customers keep calling the help desk because they don't understand how to use the new coffee machine, so what can we do? B: Let's make a short video to {{BLANK}} each step, from adding water to cleaning the parts, and put a link to it on the box and our website.",
    "cn": "A：我們的顧客一直打電話到服務台，因為他們不懂如何使用新的咖啡機，我們能怎麼做？ B：我們來拍一支短片【示範】每個步驟，從加水到清潔零件，並把連結放在包裝盒和我們的網站上。"
  },
  {
    "word": "portray",
    "pos": "v.",
    "cn_def": "描繪；描寫",
    "en_def": "to show or describe someone or something in a certain way",
    "sentence": "A: Are you happy with the new television advertisement that the agency made for our family hotel by the lake? B: Mostly, because it tries to {{BLANK}} the hotel as a quiet, friendly place for parents and children, but I think the music is too loud and we should change it.",
    "cn": "A：你滿意廣告公司為我們湖邊家庭旅館製作的新電視廣告嗎？ B：大致滿意，因為它試圖把旅館【描繪】成一個安靜、友善、適合父母和孩子的地方，但我覺得音樂太大聲了，我們應該換掉。"
  },
  {
    "word": "reveal",
    "pos": "v.",
    "cn_def": "揭露；透露；揭曉",
    "en_def": "to show or tell something that was secret or hidden",
    "sentence": "A: When will the company tell the public about the new electric scooter that the design team has been working on for two years? B: The marketing director plans to {{BLANK}} the final design at the technology show in March, and she hopes the media will share photos of it all over the internet.",
    "cn": "A：公司什麼時候會向大眾公布設計團隊研發了兩年的新電動機車？ B：行銷總監計劃在三月的科技展上【揭曉】最終設計，她希望媒體能在網路上到處分享它的照片。"
  },
  {
    "word": "emphasize",
    "pos": "v.",
    "cn_def": "強調",
    "en_def": "to show that something is very important",
    "sentence": "A: What should I say first when I train the new cashiers at the supermarket branch tomorrow morning? B: You should {{BLANK}} the importance of checking every customer's change carefully, because last month we lost a lot of money from small mistakes at the busy registers during weekends.",
    "cn": "A：我明天早上在超市分店訓練新收銀員時，應該先說什麼？ B：你應該【強調】仔細核對每位顧客找零的重要性，因為上個月週末忙碌時，我們在收銀台因為小錯誤損失了很多錢。"
  },
  {
    "word": "highlight",
    "pos": "v.",
    "cn_def": "突顯；強調；用螢光筆標示",
    "en_def": "to make something easy to notice",
    "sentence": "A: The annual report is almost fifty pages long, so how can we make sure the board members notice our best results this year? B: Let's {{BLANK}} the main achievements on the first page, such as the twenty percent rise in online sales, and add a few clear charts to support them.",
    "cn": "A：年度報告將近五十頁，我們要怎麼確保董事會成員注意到我們今年最好的成果？ B：我們在第一頁【突顯】主要成就，例如網路銷售成長百分之二十，並加上幾張清楚的圖表來佐證。"
  },
  {
    "word": "imply",
    "pos": "v.",
    "cn_def": "暗示；意味著",
    "en_def": "to suggest something without saying it directly",
    "sentence": "A: The client said our price was 'interesting' during the phone call, so do you think he is happy with our offer? B: I'm not sure, because that word might {{BLANK}} that he thinks it is too high, so we should send him a polite email and ask what he really means.",
    "cn": "A：客戶在電話中說我們的價格「很有意思」，你覺得他對我們的報價滿意嗎？ B：我不確定，因為那個字可能【暗示】他覺得價格太高，所以我們應該寄給他一封禮貌的電子郵件，問他真正的意思是什麼。"
  },
  {
    "word": "hint",
    "pos": "n.",
    "cn_def": "暗示；提示",
    "en_def": "a small or indirect suggestion",
    "sentence": "A: Do you know what kind of birthday present our manager would like, since the whole team wants to buy her something nice? B: She gave us a small {{BLANK}} last week when she said her old coffee mug was broken, so maybe we could buy her a beautiful new one with a card.",
    "cn": "A：你知道我們經理會喜歡什麼樣的生日禮物嗎？整個團隊都想買個好東西給她。 B：她上週給了我們一點小【暗示】，說她的舊咖啡杯破了，所以也許我們可以買一個漂亮的新杯子再附上一張卡片。"
  },
  {
    "word": "clarify",
    "pos": "v.",
    "cn_def": "澄清；闡明",
    "en_def": "to make something easier to understand",
    "sentence": "A: Several employees are confused about the new travel expense policy and keep asking me about taxi receipts and hotel costs, so what should we do? B: Let's ask the finance manager to {{BLANK}} the rules at Monday's staff meeting and send a simple one-page guide to everyone afterward, so the questions stop.",
    "cn": "A：好幾位員工對新的差旅費政策感到困惑，一直問我有關計程車收據和飯店費用的問題，我們該怎麼辦？ B：我們請財務經理在週一的員工會議上【釐清】這些規定，之後再寄一份簡單的一頁指南給大家，這樣問題就會停止了。"
  },
  {
    "word": "illustrate",
    "pos": "v.",
    "cn_def": "說明；舉例闡明；配插圖",
    "en_def": "to explain something by using examples or pictures",
    "sentence": "A: How can I make my sales presentation more interesting for the new clients, since last time some people almost fell asleep? B: Try to {{BLANK}} your main points with real stories from happy customers and a few colorful pictures, because people remember examples much better than long lists of numbers.",
    "cn": "A：我要怎麼讓我的銷售簡報對新客戶來說更有趣？上次有些人差點睡著。 B：試著用滿意顧客的真實故事和幾張色彩鮮明的圖片來【說明】你的重點，因為人們記住例子的能力比記住一長串數字好得多。"
  },
  {
    "word": "communicative",
    "pos": "adj.",
    "cn_def": "善於溝通的；健談的",
    "en_def": "willing and able to talk and share information",
    "sentence": "A: What kind of person are we looking for to lead the new customer service team at the call center in Kaohsiung? B: We need someone who is friendly, patient and very {{BLANK}}, because the leader must talk with angry callers, train new staff, and report problems to managers every day.",
    "cn": "A：我們要找什麼樣的人來帶領高雄客服中心的新客服團隊？ B：我們需要一個友善、有耐心且非常【善於溝通】的人，因為這位主管每天都必須和生氣的來電者交談、訓練新進員工，並向經理回報問題。"
  },
  {
    "word": "outspoken",
    "pos": "adj.",
    "cn_def": "直言不諱的；坦率的",
    "en_def": "saying what you think openly, even if others disagree",
    "sentence": "A: Why did the board invite Ms. Lin to the planning meeting, when they know she often disagrees with their ideas? B: She is very {{BLANK}} and always tells the truth about problems, so the board believes her honest opinions will help them avoid expensive mistakes on the new project.",
    "cn": "A：既然董事會知道林女士常常不同意他們的想法，為什麼還邀請她參加規劃會議？ B：她非常【直言不諱】，總是如實說出問題，所以董事會相信她誠實的意見能幫助他們在新專案上避免昂貴的錯誤。"
  },
  {
    "word": "confess",
    "pos": "v.",
    "cn_def": "坦承；承認",
    "en_def": "to admit that you did something wrong",
    "sentence": "A: Why did Daniel suddenly go to the manager's office this morning before the weekly meeting had even started? B: He wanted to {{BLANK}} that he forgot to send the important contract to the client last Friday, and he hoped to fix the problem before the client called to complain.",
    "cn": "A：為什麼丹尼爾今天早上在每週會議開始前就突然去了經理辦公室？ B：他想【坦承】他上週五忘了把重要合約寄給客戶，並希望在客戶打電話來抱怨之前解決這個問題。"
  },
  {
    "word": "exclaim",
    "pos": "v.",
    "cn_def": "驚叫；大聲說出",
    "en_def": "to say something suddenly and loudly because of strong feeling",
    "sentence": "A: How did the staff react when the CEO said at the party that everyone would get a bonus and an extra week of holiday? B: Many people began to {{BLANK}} with joy, some of them clapped loudly, and a few even hugged their coworkers because it had been such a difficult year.",
    "cn": "A：當執行長在派對上說每個人都會拿到獎金和額外一週假期時，員工有什麼反應？ B：很多人開始高興地【大聲歡呼】，有些人大聲鼓掌，甚至有幾個人擁抱同事，因為這一年實在太辛苦了。"
  },
  {
    "word": "affirm",
    "pos": "v.",
    "cn_def": "斷言；肯定；重申",
    "en_def": "to state firmly that something is true",
    "sentence": "A: Have you heard that many customers are worried after reading the news that our company might close some of its stores in the south? B: Yes, so the president will {{BLANK}} in tomorrow's press conference that all stores will stay open, and she will also share our plans to hire more staff next year.",
    "cn": "A：你有聽說很多顧客在看到我們公司可能關閉南部部分門市的新聞後很擔心嗎？ B：有，所以總裁會在明天的記者會上【明確表示】所有門市都會繼續營業，她也會分享我們明年要招募更多員工的計畫。"
  },
  {
    "word": "assert",
    "pos": "v.",
    "cn_def": "堅稱；主張；維護",
    "en_def": "to say firmly that something is true",
    "sentence": "A: Our competitor says its new phone has the longest battery life on the market, but is that really true? B: They {{BLANK}} it in every advertisement, but our own tests show that our phone lasts two hours longer, so we should share those results with customers clearly.",
    "cn": "A：我們的競爭對手說它的新手機擁有市面上最長的電池續航力，但那是真的嗎？ B：他們在每則廣告中都這麼【宣稱】，但我們自己的測試顯示我們的手機多撐兩小時，所以我們應該清楚地把這些結果分享給顧客。"
  }
];

const MCQS = [
  {
    "q": "The manager's facial _____ changed quickly when he saw the sales figures. He looked worried for the rest of the meeting.",
    "options": [
      "expression",
      "statement",
      "announcement",
      "communication"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The actress has a very _____ face, so audiences understand her feelings without words. Directors love working with her on quiet scenes.",
    "options": [
      "outspoken",
      "expressive",
      "punctual",
      "numerous"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The children's choir sang so _____ that many parents in the audience had tears in their eyes. It was a truly moving concert.",
    "options": [
      "financially",
      "legally",
      "expressively",
      "rarely"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The poster uses bright colors to _____ a sense of energy. Our designers want young customers to feel excited when they see it.",
    "options": [
      "confess",
      "utter",
      "assert",
      "convey"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Our team members work in three different time zones. They _____ mainly through email and weekly video calls.",
    "options": [
      "confess",
      "communicate",
      "exclaim",
      "portray"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Good _____ skills are required for this sales position. Applicants must be able to talk comfortably with clients on the phone.",
    "options": [
      "communication",
      "gesture",
      "hint",
      "remark"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Travelers must _____ any goods worth more than twenty thousand dollars at customs. Failing to do so may result in a heavy fine.",
    "options": [
      "illustrate",
      "imply",
      "portray",
      "declare"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Please listen carefully to the _____ about the gate change. The flight will now leave from Gate 12 at three o'clock.",
    "options": [
      "expression",
      "gesture",
      "announcement",
      "hint"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The shy new employee did not _____ a single word during the long meeting. Later, he shared several good ideas by email.",
    "options": [
      "utter",
      "illustrate",
      "highlight",
      "demonstrate"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Residents attended the public meeting to _____ their concerns about the new highway. The city promised to review their opinions carefully.",
    "options": [
      "portray",
      "voice",
      "illustrate",
      "exclaim"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The company issued a press _____ after the product recall. It explained the problem and offered full refunds to customers.",
    "options": [
      "gesture",
      "hint",
      "statement",
      "expression"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The manager apologized for his rude _____ about the design team. He said he had not meant to hurt anyone's feelings.",
    "options": [
      "hint",
      "communication",
      "announcement",
      "remark"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Customers can leave a _____ on our website after each purchase. We read every review carefully to improve our service.",
    "options": [
      "gesture",
      "comment",
      "expression",
      "announcement"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "A good leader must be able to _____ a clear vision for the company. Employees work harder when they understand the goals.",
    "options": [
      "articulate",
      "confess",
      "exclaim",
      "utter"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "As a _____ of goodwill, the hotel offered the guests a free dinner. The manager hoped they would return in the future.",
    "options": [
      "statement",
      "remark",
      "comment",
      "gesture"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Recent surveys _____ that most office workers prefer flexible hours. Many companies are now changing their schedules to keep staff happy.",
    "options": [
      "confess",
      "exclaim",
      "indicate",
      "utter"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The sales representative will _____ how the new printer works. Afterward, customers can try it themselves in the showroom.",
    "options": [
      "demonstrate",
      "confess",
      "utter",
      "imply"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The new advertisement tries to _____ the bank as modern and friendly. However, many viewers found the background music annoying.",
    "options": [
      "confess",
      "portray",
      "utter",
      "exclaim"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The company will _____ its new smartphone at a large event next month. Until then, the design remains a secret.",
    "options": [
      "utter",
      "confess",
      "reveal",
      "clarify"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "During the training, the supervisor will _____ the importance of wearing safety helmets. Workers without helmets will not be allowed on site.",
    "options": [
      "confess",
      "exclaim",
      "imply",
      "emphasize"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Please _____ the key dates in yellow so everyone can see them. The calendar will be shared at tomorrow's meeting.",
    "options": [
      "utter",
      "highlight",
      "confess",
      "assert"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The manager did not say no directly. However, her long silence seemed to _____ that she disliked the proposal.",
    "options": [
      "imply",
      "exclaim",
      "utter",
      "portray"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The trainer gave the new staff a small _____ to help them solve the puzzle. Soon, everyone found the correct answer.",
    "options": [
      "statement",
      "remark",
      "announcement",
      "hint"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "If any part of the contract is unclear, please ask our lawyer to _____ it. We want both sides to fully understand the terms.",
    "options": [
      "exclaim",
      "confess",
      "clarify",
      "utter"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The speaker used several real examples to _____ her main points. The audience found the talk easy to follow and enjoyable.",
    "options": [
      "illustrate",
      "confess",
      "exclaim",
      "utter"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "We are looking for a friendly and _____ receptionist. The successful applicant will greet visitors and answer many phone calls daily.",
    "options": [
      "silent",
      "communicative",
      "fragile",
      "rusty"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Diana is a very _____ critic of the new office rules. She never hesitates to share her honest opinions in meetings.",
    "options": [
      "shy",
      "fragile",
      "outspoken",
      "rusty"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The employee decided to _____ his mistake to the manager. He admitted that he had sent the wrong invoice to the client.",
    "options": [
      "portray",
      "illustrate",
      "exclaim",
      "confess"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "When she opened the gift box, the receptionist began to _____ with delight. Her coworkers laughed and clapped their hands.",
    "options": [
      "portray",
      "exclaim",
      "clarify",
      "illustrate"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The company continues to _____ its innocence in the pricing case. Its lawyers say there is no evidence of any wrongdoing.",
    "options": [
      "assert",
      "illustrate",
      "utter",
      "exclaim"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "expression": {
    "pos": "n.",
    "en_def": "a look on someone's face, or a way of showing a feeling",
    "cn_def": "表情；表達"
  },
  "expressive": {
    "pos": "adj.",
    "en_def": "showing feelings or meaning clearly",
    "cn_def": "富有表現力的；表達情感的"
  },
  "expressively": {
    "pos": "adv.",
    "en_def": "in a way that shows feelings clearly",
    "cn_def": "富有表情地；生動地"
  },
  "convey": {
    "pos": "v.",
    "en_def": "to make feelings, ideas or information known to someone",
    "cn_def": "傳達；表達"
  },
  "communicate": {
    "pos": "v.",
    "en_def": "to share information or ideas with others",
    "cn_def": "溝通；傳達"
  },
  "communication": {
    "pos": "n.",
    "en_def": "the act of sharing information with others",
    "cn_def": "溝通；通訊"
  },
  "declare": {
    "pos": "v.",
    "en_def": "to state something officially; to tell customs about goods you are carrying",
    "cn_def": "宣布；申報"
  },
  "announcement": {
    "pos": "n.",
    "en_def": "a public statement that gives information",
    "cn_def": "公告；宣布"
  },
  "proclaim": {
    "pos": "v.",
    "en_def": "to announce something officially and publicly",
    "cn_def": "宣布；宣告"
  },
  "utter": {
    "pos": "v.",
    "en_def": "to say something or make a sound with your voice",
    "cn_def": "說出；發出（聲音）"
  },
  "voice": {
    "pos": "v.",
    "en_def": "to tell people your opinion or feeling",
    "cn_def": "表達；說出（意見）"
  },
  "statement": {
    "pos": "n.",
    "en_def": "something that is said or written officially",
    "cn_def": "聲明；陳述"
  },
  "remark": {
    "pos": "n.",
    "en_def": "something you say that gives an opinion",
    "cn_def": "評論；話語"
  },
  "comment": {
    "pos": "n.",
    "en_def": "an opinion that you say or write",
    "cn_def": "評論；意見；留言"
  },
  "articulate": {
    "pos": "v.",
    "en_def": "to express ideas clearly in words",
    "cn_def": "清楚表達；闡明"
  },
  "gesture": {
    "pos": "n.",
    "en_def": "an action that shows your feelings; a movement of the hands",
    "cn_def": "表示；姿態；手勢"
  },
  "indicate": {
    "pos": "v.",
    "en_def": "to show or point out that something is true",
    "cn_def": "顯示；表明"
  },
  "demonstrate": {
    "pos": "v.",
    "en_def": "to show how something works; to prove something",
    "cn_def": "示範；證明"
  },
  "portray": {
    "pos": "v.",
    "en_def": "to show or describe someone or something in a certain way",
    "cn_def": "描繪；描寫"
  },
  "reveal": {
    "pos": "v.",
    "en_def": "to show or tell something that was secret or hidden",
    "cn_def": "揭露；透露；揭曉"
  },
  "emphasize": {
    "pos": "v.",
    "en_def": "to show that something is very important",
    "cn_def": "強調"
  },
  "highlight": {
    "pos": "v.",
    "en_def": "to make something easy to notice",
    "cn_def": "突顯；強調；用螢光筆標示"
  },
  "imply": {
    "pos": "v.",
    "en_def": "to suggest something without saying it directly",
    "cn_def": "暗示；意味著"
  },
  "hint": {
    "pos": "n.",
    "en_def": "a small or indirect suggestion",
    "cn_def": "暗示；提示"
  },
  "clarify": {
    "pos": "v.",
    "en_def": "to make something easier to understand",
    "cn_def": "澄清；闡明"
  },
  "illustrate": {
    "pos": "v.",
    "en_def": "to explain something by using examples or pictures",
    "cn_def": "說明；舉例闡明；配插圖"
  },
  "communicative": {
    "pos": "adj.",
    "en_def": "willing and able to talk and share information",
    "cn_def": "善於溝通的；健談的"
  },
  "outspoken": {
    "pos": "adj.",
    "en_def": "saying what you think openly, even if others disagree",
    "cn_def": "直言不諱的；坦率的"
  },
  "confess": {
    "pos": "v.",
    "en_def": "to admit that you did something wrong",
    "cn_def": "坦承；承認"
  },
  "exclaim": {
    "pos": "v.",
    "en_def": "to say something suddenly and loudly because of strong feeling",
    "cn_def": "驚叫；大聲說出"
  },
  "affirm": {
    "pos": "v.",
    "en_def": "to state firmly that something is true",
    "cn_def": "斷言；肯定；重申"
  },
  "assert": {
    "pos": "v.",
    "en_def": "to say firmly that something is true",
    "cn_def": "堅稱；主張；維護"
  }
};

const EXTRA_GLOSSES = {};
