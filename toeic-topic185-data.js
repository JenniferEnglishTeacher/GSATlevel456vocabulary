// Topic 185 Quiz Data: Imagination 想像力
// Source word list: https://www.examword.com/group-topic/imagination — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T185 - Imagination 想像力",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "imaginative",
    "pos": "adj.",
    "cn_def": "富有想像力的",
    "en_def": "good at thinking of new and unusual ideas",
    "sentence": "A: Our new coffee shop opens next month, but the designer's first plan for the walls looked boring and plain. What did you decide? B: We hired a more {{BLANK}} artist from a local college, and she painted colorful city scenes that make customers want to stay longer and take photos.",
    "cn": "A：我們的新咖啡店下個月開幕，但設計師對牆面的第一個方案看起來既無聊又單調。你們決定怎麼做？ B：我們從當地大學請了一位更【富有想像力的】藝術家，她畫了色彩繽紛的城市景象，讓顧客想待久一點並拍照。"
  },
  {
    "word": "imagine",
    "pos": "v.",
    "cn_def": "想像",
    "en_def": "to form a picture or idea of something in your mind",
    "sentence": "A: The client wants to see how the new office will look before they sign the contract, but the building is still empty. What should we do? B: Let's show them a 3D model, because it is hard for most people to {{BLANK}} the final space when they only see bare concrete walls.",
    "cn": "A：客戶想在簽約前看看新辦公室的樣子，但大樓還是空的。我們該怎麼辦？ B：我們給他們看3D模型吧，因為大多數人只看到光禿禿的水泥牆時，很難【想像】最後的空間。"
  },
  {
    "word": "imaginary",
    "pos": "adj.",
    "cn_def": "虛構的；想像中的",
    "en_def": "not real; existing only in the mind",
    "sentence": "A: Why did the sales trainer ask everyone to talk to an empty chair during this afternoon's workshop at the hotel? B: She wanted us to practice with an {{BLANK}} customer first, so we could feel more relaxed before calling real clients and answering their difficult questions next week.",
    "cn": "A：為什麼銷售講師今天下午在飯店的工作坊上要大家對著一張空椅子說話？ B：她希望我們先和一位【想像中的】顧客練習，這樣下週打電話給真正的客戶並回答他們的難題之前，我們會比較放鬆。"
  },
  {
    "word": "fantasy",
    "pos": "n.",
    "cn_def": "幻想；奇幻",
    "en_def": "a pleasant idea or story that is not real or not likely to happen",
    "sentence": "A: The publishing company just signed a contract with a young writer from Taichung. What kind of books does she write? B: She writes {{BLANK}} novels about dragons and magic kingdoms, and her first series has already sold over fifty thousand copies to teenagers across Asia.",
    "cn": "A：出版公司剛和一位來自台中的年輕作家簽約。她寫哪一類的書？ B：她寫關於龍和魔法王國的【奇幻】小說，她的第一個系列已經在亞洲各地賣給青少年超過五萬本。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的",
    "en_def": "able to make new things or think of new ideas",
    "sentence": "A: Our department has a very small budget for the year-end party, and the manager says we cannot rent a fancy restaurant this time. Any ideas? B: Let's be {{BLANK}} and hold a costume party in the office, with homemade snacks, simple games, and a small prize for the best outfit.",
    "cn": "A：我們部門的尾牙預算很少，經理說這次不能租高級餐廳。有什麼點子嗎？ B：我們就【有創意】一點，在辦公室辦一場變裝派對，準備自製點心、簡單遊戲，並為最佳服裝準備一份小獎品。"
  },
  {
    "word": "creativity",
    "pos": "n.",
    "cn_def": "創造力",
    "en_def": "the ability to produce new and original ideas",
    "sentence": "A: Why did the advertising agency decide to hire the young designer instead of the candidate with ten years of experience? B: The interviewers were really impressed by her {{BLANK}}, because her portfolio showed fresh ideas for posters, websites, and short videos that no other applicant had suggested.",
    "cn": "A：為什麼廣告公司決定聘用那位年輕設計師，而不是有十年經驗的應徵者？ B：面試官對她的【創造力】印象深刻，因為她的作品集展示了海報、網站和短片的新點子，是其他應徵者都沒提出的。"
  },
  {
    "word": "vision",
    "pos": "n.",
    "cn_def": "願景；遠見",
    "en_def": "a clear idea of what you want something to be like in the future",
    "sentence": "A: Everyone at the meeting seemed excited after the new CEO's speech this morning. What did she talk about? B: She shared her {{BLANK}} for the company over the next ten years, including opening stores in Japan, cutting plastic waste, and offering more training to young employees.",
    "cn": "A：今天早上新執行長演講後，會議上每個人似乎都很興奮。她講了什麼？ B：她分享了她對公司未來十年的【願景】，包括在日本開店、減少塑膠廢棄物，以及為年輕員工提供更多培訓。"
  },
  {
    "word": "visualize",
    "pos": "v.",
    "cn_def": "想像；使具體化",
    "en_def": "to form a picture of something in your mind",
    "sentence": "A: The architect's drawings are very detailed, but the board members still look confused about the new lobby design. What can we do? B: Let's add some photos of similar hotels, because pictures will help them {{BLANK}} how guests will move through the space and where the reception desk will be.",
    "cn": "A：建築師的圖面很詳細，但董事們對新大廳的設計看起來還是很困惑。我們能怎麼做？ B：我們加一些類似飯店的照片吧，因為圖片能幫助他們【在腦中具體想像】客人會如何在空間中移動，以及接待櫃台會在哪裡。"
  },
  {
    "word": "dream",
    "pos": "n.",
    "cn_def": "夢想",
    "en_def": "something you hope very much to have or do",
    "sentence": "A: I heard that Mr. Lin finally left the bank after working there for twenty years. What is he doing now? B: He is following his {{BLANK}} of opening a small bakery near the train station, and his bread has become so popular that people line up every morning before seven.",
    "cn": "A：我聽說林先生在銀行工作二十年後終於離職了。他現在在做什麼？ B：他正在追求在火車站附近開一家小麵包店的【夢想】，而他的麵包變得非常受歡迎，每天早上七點前就有人排隊。"
  },
  {
    "word": "daydream",
    "pos": "v.",
    "cn_def": "做白日夢",
    "en_def": "to think about pleasant things while you are awake and not paying attention",
    "sentence": "A: Why did the supervisor speak to the new cashier after lunch today? Did she make a big mistake with the money? B: Not really, but she often stares out of the window and seems to {{BLANK}} while customers are waiting in line, so the supervisor reminded her to stay focused.",
    "cn": "A：今天午餐後主管為什麼找新收銀員談話？她在錢方面犯了大錯嗎？ B：其實沒有，但她常常盯著窗外，似乎在顧客排隊等候時【做白日夢】，所以主管提醒她要保持專注。"
  },
  {
    "word": "innovation",
    "pos": "n.",
    "cn_def": "創新",
    "en_def": "a new idea, method, or product",
    "sentence": "A: Our competitor's sales grew by thirty percent last year, while ours stayed the same. What do you think they are doing differently? B: They spend much more money on {{BLANK}}, such as developing new apps and smart products, while we keep selling the same items we offered five years ago.",
    "cn": "A：我們的競爭對手去年銷售額成長了百分之三十，而我們的卻持平。你認為他們做了什麼不一樣的事？ B：他們在【創新】上花了更多錢，例如開發新的應用程式和智慧產品，而我們一直在賣五年前就有的同樣商品。"
  },
  {
    "word": "invent",
    "pos": "v.",
    "cn_def": "發明",
    "en_def": "to create something that did not exist before",
    "sentence": "A: Who is the speaker at the technology conference this Friday, and why is everyone so excited to hear her talk? B: She is the engineer who helped {{BLANK}} a cheap water filter for small villages, and her company now sells the product in more than twenty countries around the world.",
    "cn": "A：這週五科技研討會的講者是誰？為什麼大家這麼期待聽她演講？ B：她就是協助【發明】一種給小村莊用的平價濾水器的工程師，她的公司現在在全世界二十多個國家銷售這項產品。"
  },
  {
    "word": "fiction",
    "pos": "n.",
    "cn_def": "小說；虛構",
    "en_def": "books and stories about imaginary people and events",
    "sentence": "A: The bookstore manager wants to change the layout of the shop before the holiday season begins. What is her main plan? B: She wants to move all the {{BLANK}} to the front tables, because novels and short story collections sell much better than travel guides and business books during December.",
    "cn": "A：書店經理想在假期旺季開始前改變店內的陳設。她主要的計畫是什麼？ B：她想把所有的【小說類書籍】移到前面的桌子，因為在十二月，小說和短篇故事集比旅遊指南和商業書籍賣得好得多。"
  },
  {
    "word": "fanciful",
    "pos": "adj.",
    "cn_def": "異想天開的；不切實際的",
    "en_def": "imaginative but not practical or realistic",
    "sentence": "A: Did the investors like the startup's plan to build a hotel on the moon within five years? B: Not at all; they said the idea was too {{BLANK}} and asked the founders to come back with a more realistic proposal that could actually make money in the near future.",
    "cn": "A：投資人喜歡那家新創公司五年內在月球上蓋飯店的計畫嗎？ B：一點也不；他們說這個點子太【異想天開】了，要創辦人帶著一個近期內真的能賺錢、更務實的提案再回來。"
  },
  {
    "word": "originality",
    "pos": "n.",
    "cn_def": "獨創性；原創性",
    "en_def": "the quality of being new and different",
    "sentence": "A: There were more than three hundred entries in the company's logo design contest. How did the judges choose the winner? B: They gave the highest scores for {{BLANK}}, so designs that looked too similar to famous brands were removed early, and the winner used a fresh shape nobody had seen before.",
    "cn": "A：公司標誌設計比賽有三百多件作品參賽。評審是怎麼選出優勝者的？ B：他們對【原創性】給最高分，所以看起來太像知名品牌的設計很早就被淘汰，而優勝者用了一個沒有人見過的新造型。"
  },
  {
    "word": "inspiration",
    "pos": "n.",
    "cn_def": "靈感",
    "en_def": "someone or something that gives you new ideas",
    "sentence": "A: Your new line of summer dresses has such beautiful patterns and colors. Where did the design team get the ideas? B: They traveled to several fishing villages in southern Taiwan, and the bright boats and ocean views became the main {{BLANK}} for this year's collection.",
    "cn": "A：你們的新款夏季洋裝圖案和顏色好漂亮。設計團隊的點子是從哪裡來的？ B：他們去了台灣南部的幾個漁村，色彩鮮豔的漁船和海景成了今年系列的主要【靈感】。"
  },
  {
    "word": "inspire",
    "pos": "v.",
    "cn_def": "激勵；啟發",
    "en_def": "to make someone want to do something or give them new ideas",
    "sentence": "A: Why did the school invite a famous chef to speak to the students at the graduation ceremony next week? B: The principal hopes his life story will {{BLANK}} young people to work hard, because he started as a dishwasher and later opened restaurants in three different countries.",
    "cn": "A：學校為什麼邀請一位知名主廚在下週的畢業典禮上對學生演講？ B：校長希望他的人生故事能【激勵】年輕人努力工作，因為他從洗碗工做起，後來在三個不同的國家開了餐廳。"
  },
  {
    "word": "visionary",
    "pos": "adj.",
    "cn_def": "有遠見的",
    "en_def": "having clear and original ideas about what the future should be like",
    "sentence": "A: Why do so many business magazines write articles about the founder of that electric car company? B: Many people consider him a {{BLANK}} leader, because twenty years ago he predicted that clean energy would change transportation, and he built a successful company around that idea.",
    "cn": "A：為什麼這麼多商業雜誌寫那家電動車公司創辦人的文章？ B：許多人認為他是一位【有遠見的】領導者，因為二十年前他就預測乾淨能源會改變交通運輸，並圍繞這個想法建立了一家成功的公司。"
  },
  {
    "word": "conception",
    "pos": "n.",
    "cn_def": "構想；概念",
    "en_def": "the forming of an idea or plan; an understanding of something",
    "sentence": "A: How long did it take your team to finish the new shopping mall, from the first meeting to the opening day? B: From its {{BLANK}} to completion, the project took about six years, because we had to change the design twice and wait for the city government to approve every plan.",
    "cn": "A：你們團隊從第一次開會到開幕日，花了多久完成這座新購物中心？ B：從【構想】到完工，這個專案大約花了六年，因為我們必須改兩次設計，並等市政府核准每一份計畫。"
  },
  {
    "word": "brainstorm",
    "pos": "v.",
    "cn_def": "腦力激盪",
    "en_def": "to discuss many ideas quickly in a group",
    "sentence": "A: The marketing director wants a new slogan for the summer campaign by Friday, but nobody has a good idea yet. What should we do? B: Let's book the small meeting room tomorrow morning and {{BLANK}} together for an hour, writing every suggestion on the whiteboard before we choose the best three.",
    "cn": "A：行銷總監要在週五前拿到夏季活動的新標語，但到現在還沒人有好點子。我們該怎麼辦？ B：我們明天早上訂小會議室，一起【腦力激盪】一小時，把每個建議都寫在白板上，再選出最好的三個。"
  },
  {
    "word": "novelty",
    "pos": "n.",
    "cn_def": "新奇；新鮮感",
    "en_def": "the quality of being new and unusual",
    "sentence": "A: The robot waiters at the new restaurant downtown attracted huge crowds when it opened. Are they still that busy now? B: Not really; once the {{BLANK}} wore off after a few months, fewer customers came, because the food was ordinary and the prices were quite high for such small portions.",
    "cn": "A：市中心那家新餐廳開幕時，機器人服務生吸引了大批人潮。他們現在還那麼忙嗎？ B：其實沒有；幾個月後【新鮮感】一過，來的客人就變少了，因為食物很普通，而且份量這麼小價格卻相當高。"
  },
  {
    "word": "illusion",
    "pos": "n.",
    "cn_def": "錯覺；幻覺",
    "en_def": "something that seems real or true but is not",
    "sentence": "A: This hotel room is quite small, but it feels much bigger than I expected. How did the designers do that? B: They put a large mirror on one wall and used light colors everywhere, which creates the {{BLANK}} of more space even though the room is only twenty square meters.",
    "cn": "A：這間飯店房間蠻小的，但感覺比我預期的大很多。設計師是怎麼做到的？ B：他們在一面牆上裝了大鏡子，而且到處使用淺色，這製造了空間更大的【錯覺】，即使房間只有二十平方公尺。"
  },
  {
    "word": "myth",
    "pos": "n.",
    "cn_def": "迷思；神話",
    "en_def": "an idea that many people believe but that is not true; an ancient story",
    "sentence": "A: Some of our new employees think they must stay late every night to get promoted. Is that really true at this company? B: No, that is a common {{BLANK}}; the managers here judge people by the quality of their work and their results, not by how many hours they sit at their desks.",
    "cn": "A：我們有些新員工認為必須每晚加班才能升遷。在這家公司真的是這樣嗎？ B：不是，那是一個常見的【迷思】；這裡的主管是根據工作品質和成果來評價人，而不是看他們坐在辦公桌前多少小時。"
  },
  {
    "word": "symbolism",
    "pos": "n.",
    "cn_def": "象徵手法；象徵意義",
    "en_def": "the use of symbols to represent ideas",
    "sentence": "A: The new company logo is just a green leaf and a blue circle. Why did the board choose such a simple design? B: They liked the {{BLANK}} behind it, because the leaf represents our care for the environment and the circle shows that we serve customers all around the globe.",
    "cn": "A：新的公司標誌只是一片綠葉和一個藍色圓圈。董事會為什麼選了這麼簡單的設計？ B：他們喜歡它背後的【象徵意義】，因為葉子代表我們對環境的關懷，而圓圈表示我們服務全球各地的顧客。"
  },
  {
    "word": "speculate",
    "pos": "v.",
    "cn_def": "推測；臆測",
    "en_def": "to guess about something without having all the facts",
    "sentence": "A: Everyone in the office is talking about why the general manager suddenly left last Friday. Do you know the real reason? B: No, and I don't want to {{BLANK}} without facts; the company will send an official announcement on Monday, so we should just wait and focus on our work.",
    "cn": "A：辦公室裡每個人都在談論總經理上週五為什麼突然離職。你知道真正的原因嗎？ B：不知道，我也不想在沒有事實的情況下【臆測】；公司週一會發出正式公告，所以我們應該等著，專心做好自己的工作。"
  },
  {
    "word": "conjure",
    "pos": "v.",
    "cn_def": "使浮現於腦海；變出",
    "en_def": "to make a picture or idea appear in someone's mind",
    "sentence": "A: Why does the travel agency always use photos of white beaches and palm trees in its advertisements for winter tours? B: Those pictures {{BLANK}} up images of warm sunshine and relaxing holidays, which is exactly what tired office workers want to think about during the cold, rainy months.",
    "cn": "A：為什麼旅行社的冬季旅遊廣告總是用白色沙灘和棕櫚樹的照片？ B：那些照片讓人腦中【浮現】溫暖陽光和輕鬆假期的畫面，這正是疲憊的上班族在寒冷多雨的月份裡想要想像的事。"
  },
  {
    "word": "envision",
    "pos": "v.",
    "cn_def": "展望；設想",
    "en_def": "to imagine something that may happen in the future",
    "sentence": "A: The city plans to turn the old railway station into a public space. What kind of place do the planners have in mind? B: They {{BLANK}} a lively area with cafes, small shops, and a weekend market, where families and tourists can relax after visiting the museums nearby.",
    "cn": "A：市政府計畫把舊火車站改造成公共空間。規劃人員心中想的是什麼樣的地方？ B：他們【設想】一個有咖啡館、小商店和週末市集的熱鬧區域，讓家庭和遊客在參觀附近的博物館後可以放鬆。"
  },
  {
    "word": "pretend",
    "pos": "v.",
    "cn_def": "假裝",
    "en_def": "to act as if something is true when it is not",
    "sentence": "A: During the customer service training, why did the trainer ask Kevin to stand at the front desk and shout at us? B: He asked Kevin to {{BLANK}} to be an angry guest whose room was not ready, so the rest of us could practice staying calm and offering a polite solution.",
    "cn": "A：在客服訓練中，講師為什麼要凱文站在櫃台前對我們大吼？ B：他要凱文【假裝】是一位房間還沒準備好的生氣房客，這樣我們其他人就可以練習保持冷靜並提供有禮貌的解決方法。"
  },
  {
    "word": "hypothetical",
    "pos": "adj.",
    "cn_def": "假設的",
    "en_def": "based on a possible situation rather than a real one",
    "sentence": "A: During my job interview yesterday, the manager asked what I would do if a supplier suddenly doubled its prices. Was that a real problem? B: No, it was just a {{BLANK}} question to test how you solve problems, so you shouldn't worry that the company is actually facing that situation right now.",
    "cn": "A：昨天面試時，經理問我如果供應商突然把價格調高一倍我會怎麼做。那是真實的問題嗎？ B：不是，那只是一個【假設性的】問題，用來測試你如何解決問題，所以你不用擔心公司現在真的面臨那種情況。"
  },
  {
    "word": "abstract",
    "pos": "adj.",
    "cn_def": "抽象的",
    "en_def": "based on ideas rather than real things; not showing objects realistically",
    "sentence": "A: The hotel owner bought several large paintings for the lobby, but I can't tell what they are supposed to show. Can you? B: Not really, because they are {{BLANK}} art with only shapes and bright colors, but many guests say the paintings make the lobby feel modern and full of energy.",
    "cn": "A：飯店老闆為大廳買了幾幅大型畫作，但我看不出它們想表達什麼。你看得出來嗎？ B：其實看不太出來，因為那是只有形狀和鮮豔色彩的【抽象】藝術，但許多房客說這些畫讓大廳感覺很現代又充滿活力。"
  },
  {
    "word": "playful",
    "pos": "adj.",
    "cn_def": "好玩的；俏皮的",
    "en_def": "full of fun; not serious",
    "sentence": "A: The children's clothing company wants a new advertisement for its spring collection. What style does the client prefer? B: They asked for a {{BLANK}} video with bright music, cartoon animals, and kids jumping in the park, because they want parents to feel happy and relaxed when they watch it.",
    "cn": "A：那家童裝公司想為春季系列拍新廣告。客戶偏好什麼風格？ B：他們要求一支【俏皮有趣的】影片，有輕快的音樂、卡通動物和在公園裡跳躍的孩子，因為他們希望父母觀看時感到快樂又放鬆。"
  },
  {
    "word": "surreal",
    "pos": "adj.",
    "cn_def": "超現實的；離奇的",
    "en_def": "very strange, like a dream",
    "sentence": "A: How did you feel when your small company won the national design award in front of all those famous companies last night? B: It felt completely {{BLANK}}, like a strange dream, because only three years ago we were working from my tiny apartment with two old computers and no clients.",
    "cn": "A：昨晚你們的小公司在那麼多知名企業面前贏得全國設計獎時，你有什麼感覺？ B：感覺完全【不真實】，像一場奇怪的夢，因為三年前我們還在我的小公寓裡用兩台舊電腦工作，而且沒有任何客戶。"
  },
  {
    "word": "whimsical",
    "pos": "adj.",
    "cn_def": "異想天開的；古怪有趣的",
    "en_def": "unusual and playful in a way that is amusing",
    "sentence": "A: The new children's bookstore near our office has become very popular on social media. What makes it so special? B: It has a {{BLANK}} design, with a slide between the two floors, bookshelves shaped like trees, and a reading corner that looks like a cozy little castle.",
    "cn": "A：我們辦公室附近那家新的童書店在社群媒體上變得很受歡迎。它有什麼特別之處？ B：它有一種【奇趣】的設計，兩層樓之間有溜滑梯、書架做成樹的形狀，還有一個看起來像溫馨小城堡的閱讀角落。"
  }
];

const MCQS = [
  {
    "q": "Our clients want a fresh look for their new café. The designer came up with an _____ layout that surprised everyone.",
    "options": [
      "imaginary",
      "imaginative",
      "hypothetical",
      "surreal"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Before the renovation started, it was hard to _____ how the lobby would look. The 3D model helped a lot.",
    "options": [
      "imagine",
      "pretend",
      "speculate",
      "brainstorm"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The trainer asked staff to serve an _____ customer during practice. Later they would handle real guests in the store.",
    "options": [
      "imaginative",
      "creative",
      "visionary",
      "imaginary"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The publisher signed a young writer of _____ stories. Her books about dragons and magic sold well across Asia.",
    "options": [
      "vision",
      "myth",
      "fantasy",
      "novelty"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Our team has a very small budget this year. We need to find a _____ way to promote the product.",
    "options": [
      "imaginary",
      "creative",
      "hypothetical",
      "surreal"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The agency rewards _____ and new ideas. Designers there receive a bonus for every original campaign they create.",
    "options": [
      "creativity",
      "conception",
      "illusion",
      "symbolism"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The new CEO shared her _____ for the company's future. She plans to expand into Japan within five years.",
    "options": [
      "fantasy",
      "illusion",
      "fiction",
      "vision"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Athletes often _____ success before a big race. Picturing the finish line in their minds helps them stay calm.",
    "options": [
      "pretend",
      "invent",
      "visualize",
      "conjure"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Opening a small bakery was his lifelong _____. He finally left the bank after twenty years to do it.",
    "options": [
      "myth",
      "dream",
      "illusion",
      "fiction"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Please do not _____ during the safety training. The instructor will explain important rules for using the machines.",
    "options": [
      "daydream",
      "envision",
      "speculate",
      "inspire"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The company invests heavily in technological _____. As a result, it releases several new smart products every year.",
    "options": [
      "creativity",
      "fantasy",
      "originality",
      "innovation"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The engineer helped _____ a low-cost water filter. Her device is now used in villages in twenty countries.",
    "options": [
      "imagine",
      "pretend",
      "invent",
      "envision"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The library is moving its _____ section to the second floor. Novels and short stories will be shelved there next week.",
    "options": [
      "fantasy",
      "fiction",
      "vision",
      "novelty"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Investors rejected the plan to build a hotel on the moon. They said the idea was far too _____ to fund.",
    "options": [
      "fanciful",
      "creative",
      "visionary",
      "abstract"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The judges praised the logo for its _____. No other entry in the contest looked anything like it.",
    "options": [
      "inspiration",
      "conception",
      "novelty",
      "originality"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The designer said that ocean views were her main source of _____. Her new collection uses many shades of blue.",
    "options": [
      "illusion",
      "innovation",
      "inspiration",
      "symbolism"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The manager hopes the guest speaker will _____ employees to set higher goals. His story of success is very moving.",
    "options": [
      "imagine",
      "inspire",
      "pretend",
      "speculate"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The founder was a _____ leader who predicted the rise of electric cars. Many magazines now write about his ideas.",
    "options": [
      "visionary",
      "imaginary",
      "fanciful",
      "playful"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The mall took six years from _____ to completion. The design changed twice during that long period.",
    "options": [
      "inspiration",
      "imagination",
      "creativity",
      "conception"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Let's meet tomorrow to _____ ideas for the new slogan. We will write every suggestion on the whiteboard.",
    "options": [
      "daydream",
      "conjure",
      "brainstorm",
      "pretend"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Customers loved the robot waiters at first. However, once the _____ wore off, fewer people visited the restaurant.",
    "options": [
      "originality",
      "novelty",
      "vision",
      "fantasy"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "A large mirror on the wall creates the _____ of more space. The small hotel room now feels much bigger.",
    "options": [
      "illusion",
      "inspiration",
      "symbolism",
      "fiction"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "It is a common _____ that you must work late to be promoted. Managers here care more about results than hours.",
    "options": [
      "dream",
      "vision",
      "fantasy",
      "myth"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Staff should not _____ about the reasons for the CEO's departure. An official announcement will be sent on Monday.",
    "options": [
      "envision",
      "visualize",
      "speculate",
      "imagine"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The smell of fresh bread can _____ up memories of childhood. Bakeries often use this idea in their advertising.",
    "options": [
      "brainstorm",
      "conjure",
      "invent",
      "daydream"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "City planners _____ a lively public space at the old station. They hope cafes and markets will attract many visitors.",
    "options": [
      "envision",
      "pretend",
      "speculate",
      "invent"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "In the training session, one employee had to _____ to be an angry guest. The others practiced staying calm.",
    "options": [
      "envision",
      "visualize",
      "inspire",
      "pretend"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The interviewer asked a _____ question about rising supplier prices. It was only meant to test my problem-solving skills.",
    "options": [
      "imaginative",
      "whimsical",
      "hypothetical",
      "playful"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The lobby displays several large paintings of _____ art. They show only bright shapes rather than real objects.",
    "options": [
      "fanciful",
      "abstract",
      "surreal",
      "imaginary"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The children's bookstore has a _____ design with a slide and tree-shaped shelves. It is very popular online.",
    "options": [
      "whimsical",
      "hypothetical",
      "visionary",
      "abstract"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "imaginative": {
    "pos": "adj.",
    "en_def": "good at thinking of new and unusual ideas",
    "cn_def": "富有想像力的"
  },
  "imagine": {
    "pos": "v.",
    "en_def": "to form a picture or idea of something in your mind",
    "cn_def": "想像"
  },
  "imaginary": {
    "pos": "adj.",
    "en_def": "not real; existing only in the mind",
    "cn_def": "虛構的；想像中的"
  },
  "fantasy": {
    "pos": "n.",
    "en_def": "a pleasant idea or story that is not real or not likely to happen",
    "cn_def": "幻想；奇幻"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "able to make new things or think of new ideas",
    "cn_def": "有創意的"
  },
  "creativity": {
    "pos": "n.",
    "en_def": "the ability to produce new and original ideas",
    "cn_def": "創造力"
  },
  "vision": {
    "pos": "n.",
    "en_def": "a clear idea of what you want something to be like in the future",
    "cn_def": "願景；遠見"
  },
  "visualize": {
    "pos": "v.",
    "en_def": "to form a picture of something in your mind",
    "cn_def": "想像；使具體化"
  },
  "dream": {
    "pos": "n.",
    "en_def": "something you hope very much to have or do",
    "cn_def": "夢想"
  },
  "daydream": {
    "pos": "v.",
    "en_def": "to think about pleasant things while you are awake and not paying attention",
    "cn_def": "做白日夢"
  },
  "innovation": {
    "pos": "n.",
    "en_def": "a new idea, method, or product",
    "cn_def": "創新"
  },
  "invent": {
    "pos": "v.",
    "en_def": "to create something that did not exist before",
    "cn_def": "發明"
  },
  "fiction": {
    "pos": "n.",
    "en_def": "books and stories about imaginary people and events",
    "cn_def": "小說；虛構"
  },
  "fanciful": {
    "pos": "adj.",
    "en_def": "imaginative but not practical or realistic",
    "cn_def": "異想天開的；不切實際的"
  },
  "originality": {
    "pos": "n.",
    "en_def": "the quality of being new and different",
    "cn_def": "獨創性；原創性"
  },
  "inspiration": {
    "pos": "n.",
    "en_def": "someone or something that gives you new ideas",
    "cn_def": "靈感"
  },
  "inspire": {
    "pos": "v.",
    "en_def": "to make someone want to do something or give them new ideas",
    "cn_def": "激勵；啟發"
  },
  "visionary": {
    "pos": "adj.",
    "en_def": "having clear and original ideas about what the future should be like",
    "cn_def": "有遠見的"
  },
  "conception": {
    "pos": "n.",
    "en_def": "the forming of an idea or plan; an understanding of something",
    "cn_def": "構想；概念"
  },
  "brainstorm": {
    "pos": "v.",
    "en_def": "to discuss many ideas quickly in a group",
    "cn_def": "腦力激盪"
  },
  "novelty": {
    "pos": "n.",
    "en_def": "the quality of being new and unusual",
    "cn_def": "新奇；新鮮感"
  },
  "illusion": {
    "pos": "n.",
    "en_def": "something that seems real or true but is not",
    "cn_def": "錯覺；幻覺"
  },
  "myth": {
    "pos": "n.",
    "en_def": "an idea that many people believe but that is not true; an ancient story",
    "cn_def": "迷思；神話"
  },
  "symbolism": {
    "pos": "n.",
    "en_def": "the use of symbols to represent ideas",
    "cn_def": "象徵手法；象徵意義"
  },
  "speculate": {
    "pos": "v.",
    "en_def": "to guess about something without having all the facts",
    "cn_def": "推測；臆測"
  },
  "conjure": {
    "pos": "v.",
    "en_def": "to make a picture or idea appear in someone's mind",
    "cn_def": "使浮現於腦海；變出"
  },
  "envision": {
    "pos": "v.",
    "en_def": "to imagine something that may happen in the future",
    "cn_def": "展望；設想"
  },
  "pretend": {
    "pos": "v.",
    "en_def": "to act as if something is true when it is not",
    "cn_def": "假裝"
  },
  "hypothetical": {
    "pos": "adj.",
    "en_def": "based on a possible situation rather than a real one",
    "cn_def": "假設的"
  },
  "abstract": {
    "pos": "adj.",
    "en_def": "based on ideas rather than real things; not showing objects realistically",
    "cn_def": "抽象的"
  },
  "playful": {
    "pos": "adj.",
    "en_def": "full of fun; not serious",
    "cn_def": "好玩的；俏皮的"
  },
  "surreal": {
    "pos": "adj.",
    "en_def": "very strange, like a dream",
    "cn_def": "超現實的；離奇的"
  },
  "whimsical": {
    "pos": "adj.",
    "en_def": "unusual and playful in a way that is amusing",
    "cn_def": "異想天開的；古怪有趣的"
  }
};

const EXTRA_GLOSSES = {};
