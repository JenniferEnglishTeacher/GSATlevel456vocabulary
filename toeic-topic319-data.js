// Topic 319 Quiz Data: Reading 閱讀
// Source word list: https://www.examword.com/group-topic/reading — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T319 - Reading 閱讀",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "fiction",
    "pos": "n.",
    "cn_def": "小說；虛構作品",
    "en_def": "stories about imaginary people and events",
    "sentence": "A: Our company book club is choosing next month's title, so do you think we should pick a business guide or something more relaxing for the team? B: I would choose a popular work of {{BLANK}}, because after long days in the office, most people prefer an exciting invented story to another book about sales and management.",
    "cn": "A：我們公司的讀書會正在選下個月的書，你覺得我們應該選商業指南還是比較輕鬆的書給團隊？ B：我會選一本受歡迎的【小說】作品，因為在辦公室忙了一整天之後，大多數人比較喜歡刺激的虛構故事，而不是又一本關於銷售和管理的書。"
  },
  {
    "word": "mystery",
    "pos": "n.",
    "cn_def": "懸疑小說；謎",
    "en_def": "a story about a crime or a strange event that must be solved",
    "sentence": "A: You always seem to have a paperback in your bag during the morning train ride, so what kind of story are you reading these days? B: I am reading a {{BLANK}} about a missing painting in a London hotel, and I cannot guess who took it, which keeps me turning the pages until I reach my station.",
    "cn": "A：你每天早上搭火車時包包裡似乎總有一本平裝書，你最近在讀什麼樣的故事？ B：我在讀一本關於倫敦一家飯店裡失蹤畫作的【懸疑小說】，我猜不出是誰拿走的，這讓我一直翻頁直到抵達我的車站。"
  },
  {
    "word": "fantasy",
    "pos": "n.",
    "cn_def": "奇幻（作品）；幻想",
    "en_def": "stories about magic and imaginary worlds",
    "sentence": "A: Your daughter seems to finish a new book every weekend, so what does she like to read when she is not doing her homework? B: She loves {{BLANK}} novels full of dragons, magic schools, and secret kingdoms, and she says these imaginary worlds help her relax after a stressful week of tests at school.",
    "cn": "A：你女兒似乎每個週末都讀完一本新書，她不寫功課時喜歡讀什麼？ B：她很愛充滿龍、魔法學校和祕密王國的【奇幻】小說，她說這些想像的世界能幫助她在一週壓力很大的考試後放鬆。"
  },
  {
    "word": "creatively",
    "pos": "adv.",
    "cn_def": "有創意地",
    "en_def": "in a new and original way",
    "sentence": "A: The marketing team has a very small budget for the new library campaign, so how are they going to attract more young readers this year? B: They are thinking {{BLANK}} and plan to hide short stories around the city park with QR codes, so people can scan them and read the next chapter online for free.",
    "cn": "A：行銷團隊在新的圖書館宣傳活動上預算很少，他們今年要怎麼吸引更多年輕讀者？ B：他們正在【有創意地】思考，計畫在市立公園各處藏一些附有QR碼的短篇故事，讓人們可以掃描後免費上網閱讀下一章。"
  },
  {
    "word": "imagination",
    "pos": "n.",
    "cn_def": "想像力",
    "en_def": "the ability to create pictures and ideas in your mind",
    "sentence": "A: Why did the publishing company hire that young writer for the children's magazine when she has almost no experience in the industry? B: The editors were impressed by her {{BLANK}}, because her sample stories about talking animals and flying buses were so original that every child in the test group wanted to read more.",
    "cn": "A：那家出版公司為什麼雇用那位年輕作家為兒童雜誌撰稿，她在這個產業幾乎沒有經驗？ B：編輯們對她的【想像力】印象深刻，因為她關於會說話的動物和會飛的公車的樣本故事非常有原創性，測試組裡的每個孩子都想讀更多。"
  },
  {
    "word": "enhance",
    "pos": "v.",
    "cn_def": "提升；增強",
    "en_def": "to make something better or stronger",
    "sentence": "A: Our training manager wants every new employee to join the weekly reading program, but do you really think it makes any difference at work? B: Yes, reading business articles together can {{BLANK}} their vocabulary and communication skills, and last year's trainees wrote much clearer reports after only three months in the program.",
    "cn": "A：我們的訓練經理希望每位新員工都參加每週的閱讀計畫，但你真的認為這對工作有任何影響嗎？ B：是的，一起閱讀商業文章可以【提升】他們的字彙和溝通能力，去年的受訓者僅參加三個月後就寫出了清楚許多的報告。"
  },
  {
    "word": "tedious",
    "pos": "adj.",
    "cn_def": "冗長乏味的",
    "en_def": "long, slow and boring",
    "sentence": "A: You looked tired when you came out of the meeting room, so how was the afternoon session about the new company policies? B: It was really {{BLANK}}, because the speaker read every page of the forty-page manual aloud without any examples or questions, and half of the staff started checking their phones after twenty minutes.",
    "cn": "A：你從會議室出來時看起來很累，下午關於公司新政策的課程怎麼樣？ B：真的很【冗長乏味】，因為講者把四十頁的手冊每一頁都大聲唸出來，沒有任何例子或提問，半數員工二十分鐘後就開始看手機了。"
  },
  {
    "word": "perseverance",
    "pos": "n.",
    "cn_def": "毅力；堅持不懈",
    "en_def": "continuing to try even when something is difficult",
    "sentence": "A: How did your sister manage to finish reading all twelve volumes of that history series while working full-time at the bank? B: It took great {{BLANK}}, because she read twenty pages every night before bed, even on busy days, and she never gave up when some of the chapters became difficult to understand.",
    "cn": "A：你姊姊怎麼能一邊在銀行全職工作，一邊讀完那套歷史叢書的全部十二冊？ B：那需要很大的【毅力】，因為她每晚睡前都讀二十頁，即使在忙碌的日子也一樣，而且某些章節變得難懂時她也從不放棄。"
  },
  {
    "word": "life lesson",
    "pos": "n.phr.",
    "cn_def": "人生教訓；人生課題",
    "en_def": "something important you learn about how to live",
    "sentence": "A: Why does your manager keep recommending that old novel about the fisherman to everyone who joins the sales department? B: She says it teaches an important {{BLANK}} about patience and hard work, and she believes new salespeople should understand that success rarely comes quickly, even when they do everything right.",
    "cn": "A：你的經理為什麼一直向每位加入業務部的人推薦那本關於漁夫的老小說？ B：她說這本書傳達了一個關於耐心和努力的重要【人生教訓】，她認為新業務員應該明白，即使他們每件事都做對了，成功也很少會很快到來。"
  },
  {
    "word": "glimpse",
    "pos": "n.",
    "cn_def": "一瞥；短暫的一看",
    "en_def": "a quick or short look at something",
    "sentence": "A: Did you get a chance to look at the new novel by your favorite author when you visited the publisher's office yesterday? B: I only had a quick {{BLANK}} of the cover and the first page, because the editor said the book is still secret until the official launch event next month.",
    "cn": "A：你昨天去出版社辦公室時，有機會看看你最喜歡的作家的新小說嗎？ B：我只匆匆【一瞥】了封面和第一頁，因為編輯說那本書在下個月正式發表會前仍是機密。"
  },
  {
    "word": "fascinating",
    "pos": "adj.",
    "cn_def": "引人入勝的；極有趣的",
    "en_def": "extremely interesting",
    "sentence": "A: You stayed at your desk during the whole lunch break today, so were you finishing an urgent report for the director? B: No, I was reading a {{BLANK}} article about how a small coffee shop grew into a global company, and I simply could not stop until I reached the last paragraph.",
    "cn": "A：你今天整個午休都待在座位上，是在趕給主任的緊急報告嗎？ B：不是，我在讀一篇關於一家小咖啡店如何成長為跨國公司的【引人入勝的】文章，我讀到最後一段前根本停不下來。"
  },
  {
    "word": "observe",
    "pos": "v.",
    "cn_def": "觀察",
    "en_def": "to watch something carefully",
    "sentence": "A: Why does the new librarian sit near the children's corner every afternoon with a notebook instead of working at the front desk? B: She likes to {{BLANK}} which books the children choose and how long they read, so she can order more popular titles and plan better reading activities for next semester.",
    "cn": "A：新來的圖書館員為什麼每天下午都拿著筆記本坐在兒童區附近，而不是在服務台工作？ B：她喜歡【觀察】孩子們挑選哪些書以及閱讀多久，這樣她就能訂購更多受歡迎的書，並為下學期規劃更好的閱讀活動。"
  },
  {
    "word": "detective",
    "pos": "n.",
    "cn_def": "偵探",
    "en_def": "a person whose job is to find out who did a crime",
    "sentence": "A: Our team is organizing a murder mystery dinner for the company's anniversary party, so what role should I play to make it fun? B: You should be the {{BLANK}} who asks everyone questions and looks for clues, because you are good at noticing small details and our guests will enjoy watching you solve the case.",
    "cn": "A：我們團隊正在為公司週年派對籌辦一場謀殺懸疑晚宴，我該扮演什麼角色才會好玩？ B：你應該扮演向大家提問並尋找線索的【偵探】，因為你很會注意小細節，我們的賓客會喜歡看你破案。"
  },
  {
    "word": "fairy",
    "pos": "n.",
    "cn_def": "仙子；小精靈",
    "en_def": "a small magical creature in children's stories",
    "sentence": "A: The kindergarten teacher asked parents to help with the reading festival, so what costume are you making for your little girl? B: I am making her a {{BLANK}} costume with silver wings and a magic wand, because her favorite storybook is about a tiny girl who lives in a flower garden and helps lost animals.",
    "cn": "A：幼稚園老師請家長協助閱讀節活動，你在幫你的小女兒做什麼服裝？ B：我在幫她做一套有銀色翅膀和魔杖的【仙子】服裝，因為她最喜歡的故事書是關於一個住在花園裡、幫助迷路動物的小女孩。"
  },
  {
    "word": "factual",
    "pos": "adj.",
    "cn_def": "事實的；根據事實的",
    "en_def": "based on facts, not opinions",
    "sentence": "A: The sales director wants a short report about our competitors before Friday's meeting, so should I include opinions from online forums? B: Please keep it {{BLANK}} and use only numbers from official reports and company websites, because the board will make an important decision based on the information you give them.",
    "cn": "A：銷售總監希望在週五會議前拿到一份關於競爭對手的簡短報告，我應該納入網路論壇上的意見嗎？ B：請保持內容【符合事實】，只使用官方報告和公司網站上的數字，因為董事會將根據你提供的資訊做出重要決定。"
  },
  {
    "word": "endure",
    "pos": "v.",
    "cn_def": "忍受；忍耐",
    "en_def": "to accept something unpleasant for a long time",
    "sentence": "A: Why did you stop taking the express bus to work and start driving, even though parking downtown is so expensive? B: I could not {{BLANK}} another hour of loud music and crowded seats every morning, and now I listen to audiobooks in my car, which makes the trip much more pleasant.",
    "cn": "A：你為什麼不再搭快速公車上班而改開車，即使市中心停車那麼貴？ B：我無法再【忍受】每天早上一小時的吵雜音樂和擁擠座位，現在我在車上聽有聲書，讓通勤愉快多了。"
  },
  {
    "word": "book lover",
    "pos": "n.phr.",
    "cn_def": "愛書人",
    "en_def": "a person who loves reading books",
    "sentence": "A: What gift should we buy for Mr. Chen, who is retiring after thirty years in the accounting department next Friday? B: He is a real {{BLANK}} who reads on every lunch break, so I suggest a gift card for the big bookstore downtown and a nice leather bookmark with his name on it.",
    "cn": "A：陳先生下週五將從會計部退休，他在那裡工作了三十年，我們該買什麼禮物給他？ B：他是個不折不扣的【愛書人】，每次午休都在看書，所以我建議買一張市中心大書店的禮物卡，再加一個刻有他名字的精緻皮革書籤。"
  },
  {
    "word": "enjoyment",
    "pos": "n.",
    "cn_def": "樂趣；享受",
    "en_def": "the pleasure you get from doing something",
    "sentence": "A: Do you read novels mainly to improve your English for the TOEIC test, or is there another reason you carry one everywhere? B: To be honest, it is mostly for {{BLANK}}, because a good story helps me forget about work, although I have noticed that my reading speed and vocabulary have improved a lot this year.",
    "cn": "A：你讀小說主要是為了提升多益英文，還是有別的理由讓你到哪都帶著一本？ B：說實話主要是為了【樂趣】，因為好故事能讓我忘掉工作，不過我發現今年我的閱讀速度和字彙都進步了很多。"
  },
  {
    "word": "inspire",
    "pos": "v.",
    "cn_def": "激勵；啟發",
    "en_def": "to give someone the wish and energy to do something",
    "sentence": "A: Why did the human resources team invite a famous author to speak at our annual staff conference this year? B: They hoped her story would {{BLANK}} employees to read more and set personal goals, since she wrote her first book while working two jobs and raising three children on her own.",
    "cn": "A：人資團隊今年為什麼邀請一位知名作家在我們的年度員工大會上演講？ B：他們希望她的故事能【激勵】員工多閱讀並設定個人目標，因為她是在身兼兩份工作並獨自撫養三個孩子的同時寫出第一本書的。"
  },
  {
    "word": "motivate",
    "pos": "v.",
    "cn_def": "激勵；促使",
    "en_def": "to make someone want to do something",
    "sentence": "A: Many of our sales staff never open the training books we bought last year, so how can we change that before the new quarter begins? B: We could {{BLANK}} them by offering a small bonus to anyone who finishes one book a month and shares three useful ideas with the team during our Friday meeting.",
    "cn": "A：我們很多業務人員從沒翻開過去年買的訓練書籍，在新一季開始前我們要怎麼改變這個情況？ B：我們可以提供小額獎金給每個月讀完一本書、並在週五會議上和團隊分享三個實用想法的人，藉此【激勵】他們。"
  },
  {
    "word": "prudent",
    "pos": "adj.",
    "cn_def": "審慎的；謹慎的",
    "en_def": "careful and sensible, avoiding risks",
    "sentence": "A: The bookstore owner wants to open a second shop near the university, but sales have been slow this winter, so what do you think? B: It would be {{BLANK}} to wait until the summer and study the numbers first, because opening a new store costs a lot of money and the rent near the campus is very high.",
    "cn": "A：書店老闆想在大學附近開第二家店，但今年冬天銷售很慢，你怎麼看？ B：等到夏天並先研究數據會比較【審慎】，因為開一家新店要花很多錢，而且校園附近的租金非常高。"
  },
  {
    "word": "meticulously",
    "pos": "adv.",
    "cn_def": "一絲不苟地；極仔細地",
    "en_def": "very carefully, paying attention to every detail",
    "sentence": "A: How did the editor find so many small mistakes in the annual report that the whole finance team had already checked twice? B: She read every page {{BLANK}}, comparing each number with the original files and checking every name and date, so even the tiniest errors could not escape her careful eyes.",
    "cn": "A：那位編輯是怎麼在整個財務團隊已經檢查過兩次的年度報告中找到那麼多小錯誤的？ B：她【一絲不苟地】讀了每一頁，把每個數字都和原始檔案比對，並檢查每個名字和日期，所以即使是最小的錯誤也逃不過她仔細的眼睛。"
  },
  {
    "word": "certainly",
    "pos": "adv.",
    "cn_def": "當然；確實",
    "en_def": "without any doubt; of course",
    "sentence": "A: Would you be able to recommend a few good novels for my long business trip to Singapore next week? B: I can {{BLANK}} help you with that, because I just finished three excellent thrillers last month, and I will bring them to the office tomorrow so you can pack them in your suitcase.",
    "cn": "A：你能推薦幾本好小說給我下週去新加坡的長途出差嗎？ B：我【當然】可以幫你，因為我上個月剛讀完三本很棒的驚悚小說，我明天會把它們帶到辦公室，讓你可以放進行李箱。"
  },
  {
    "word": "aspect",
    "pos": "n.",
    "cn_def": "方面；層面",
    "en_def": "one part or feature of something",
    "sentence": "A: The customer survey about our online magazine has just come back, so which part did readers like most this year? B: The most popular {{BLANK}} was the weekly interview section, because readers said they enjoyed learning how business leaders handle stress, although many people also asked for shorter articles and more photos.",
    "cn": "A：關於我們線上雜誌的顧客調查剛回來了，今年讀者最喜歡哪個部分？ B：最受歡迎的【方面】是每週訪談專欄，因為讀者說他們喜歡了解企業領袖如何處理壓力，不過也有很多人要求文章短一點、照片多一點。"
  },
  {
    "word": "chaotic",
    "pos": "adj.",
    "cn_def": "混亂的",
    "en_def": "in a state of complete confusion and disorder",
    "sentence": "A: You were supposed to start the book fair at nine this morning, so why did the doors not open until almost eleven? B: The first hour was completely {{BLANK}}, because the delivery truck arrived late, the boxes were mixed up, and the volunteers did not know which publisher's tables they should set up first.",
    "cn": "A：書展應該在今天早上九點開始，為什麼門到快十一點才開？ B：第一個小時完全【混亂】，因為送貨卡車遲到、箱子混在一起，志工們也不知道應該先佈置哪家出版社的桌子。"
  },
  {
    "word": "jumble",
    "pos": "n.",
    "cn_def": "混雜；一團亂",
    "en_def": "an untidy mix of different things",
    "sentence": "A: Have you finished organizing the donated books for the community library sale that starts this Saturday morning? B: Not yet, because they arrived in a complete {{BLANK}} of novels, cookbooks, and old textbooks, so I still need to sort them by type and put price labels on every box.",
    "cn": "A：你整理好這週六早上開始的社區圖書館義賣捐贈書籍了嗎？ B：還沒，因為它們送來時是小說、食譜和舊課本完全【混雜成一團】，所以我還得依類型分類，並在每個箱子上貼價格標籤。"
  },
  {
    "word": "meaningless",
    "pos": "adj.",
    "cn_def": "無意義的",
    "en_def": "having no purpose or clear meaning",
    "sentence": "A: Why did the director reject the new training handbook that the consultants spent three months writing for our staff? B: She said many of the pages were full of {{BLANK}} business words that sounded impressive but did not explain clearly what employees should actually do when they deal with difficult customers.",
    "cn": "A：主任為什麼退回顧問花了三個月為我們員工撰寫的新訓練手冊？ B：她說很多頁面充滿了【無意義的】商業用語，聽起來很厲害，但並沒有清楚說明員工在應付難搞的顧客時實際上該怎麼做。"
  },
  {
    "word": "interact",
    "pos": "v.",
    "cn_def": "互動",
    "en_def": "to talk or work with other people",
    "sentence": "A: Why does the bookstore hold a reading event with local authors every month, even though it does not sell many books that night? B: Customers love the chance to {{BLANK}} with writers, ask them questions, and get signed copies, and many of them come back later to buy more books from the same authors.",
    "cn": "A：那家書店為什麼每個月都和當地作家舉辦閱讀活動，即使當晚書賣得不多？ B：顧客很喜歡有機會和作家【互動】、向他們提問並拿到簽名書，而且很多人之後會回來購買同一位作家的更多書。"
  },
  {
    "word": "constraint",
    "pos": "n.",
    "cn_def": "限制；約束",
    "en_def": "something that limits what you can do",
    "sentence": "A: The editor wanted to include more color photos in the travel guide, so why does the final version have so few pictures? B: Budget was the main {{BLANK}}, because printing color pages costs almost twice as much, and the publisher had to keep the price low enough for students and young travelers.",
    "cn": "A：編輯本來想在旅遊指南裡放更多彩色照片，為什麼最終版本照片這麼少？ B：預算是主要的【限制】，因為印刷彩色頁面的成本幾乎是兩倍，而出版社必須把價格壓得夠低，讓學生和年輕旅客買得起。"
  },
  {
    "word": "reality",
    "pos": "n.",
    "cn_def": "現實；真實情況",
    "en_def": "the way things really are",
    "sentence": "A: You told me you wanted to become a full-time writer after university, so why are you working at an accounting firm now? B: The {{BLANK}} is that most new writers earn very little money at first, so I work here during the day and write my novel in the evenings and on weekends.",
    "cn": "A：你說過大學畢業後想當全職作家，為什麼現在在會計師事務所工作？ B：【現實】是大多數新作家一開始賺的錢很少，所以我白天在這裡工作，晚上和週末寫我的小說。"
  },
  {
    "word": "curiosity",
    "pos": "n.",
    "cn_def": "好奇心",
    "en_def": "the strong wish to know or learn something",
    "sentence": "A: Why did you buy that thick book about the history of shipping when you usually only read short magazine articles? B: It was pure {{BLANK}}, because our company just started exporting to Europe, and I wanted to know how goods traveled across the ocean before modern container ships and airplanes existed.",
    "cn": "A：你平常只讀短篇雜誌文章，為什麼買了那本關於航運史的厚書？ B：純粹是【好奇心】，因為我們公司剛開始外銷到歐洲，我想知道在現代貨櫃船和飛機出現之前，貨物是怎麼漂洋過海的。"
  },
  {
    "word": "elusive",
    "pos": "adj.",
    "cn_def": "難以捉摸的；難以達到的",
    "en_def": "difficult to find, catch or achieve",
    "sentence": "A: Our team has tried many ways to get more people to read the company newsletter, so have we finally found an answer? B: Not yet, the solution is still {{BLANK}}, because staff say they are too busy to read long emails, but they also ignore the short video versions we tried last month.",
    "cn": "A：我們團隊試了很多方法讓更多人閱讀公司電子報，我們終於找到答案了嗎？ B：還沒，解決辦法仍然【難以捉摸】，因為員工說他們太忙沒空讀長郵件，但他們也不理會我們上個月試過的短影片版本。"
  },
  {
    "word": "encounter",
    "pos": "v.",
    "cn_def": "遇到；遭遇",
    "en_def": "to meet or experience something, often by chance",
    "sentence": "A: What should new staff do if they find words they do not understand in the technical manuals during their first week at the factory? B: Whenever they {{BLANK}} a difficult term, they should write it down and check the glossary at the back, or ask their supervisor during the daily meeting at four o'clock.",
    "cn": "A：新員工在工廠第一週若在技術手冊中看到不懂的字，該怎麼辦？ B：每當他們【遇到】困難的術語，就應該寫下來並查閱後面的詞彙表，或在每天四點的會議中詢問主管。"
  },
  {
    "word": "cherish",
    "pos": "v.",
    "cn_def": "珍惜；珍愛",
    "en_def": "to love and care for something very much",
    "sentence": "A: Why do you keep that old, worn-out copy of a children's book on your office desk instead of buying a new one? B: I {{BLANK}} it because my grandmother read it to me every night when I was little, and seeing it reminds me to stay patient and kind, even on stressful days at work.",
    "cn": "A：你為什麼把那本又舊又破的童書放在辦公桌上，而不買本新的？ B：我很【珍惜】它，因為我小時候祖母每晚都唸給我聽，看到它就提醒我即使在工作壓力大的日子也要保持耐心和善良。"
  },
  {
    "word": "empathy",
    "pos": "n.",
    "cn_def": "同理心",
    "en_def": "the ability to understand other people's feelings",
    "sentence": "A: The customer service manager asked all of us to read novels during the training course, so how is that supposed to help us at work? B: Reading stories about different people can build {{BLANK}}, because you learn to understand other people's feelings, and that helps you stay calm and kind when customers are angry or upset.",
    "cn": "A：客服經理要求我們在訓練課程期間都要讀小說，這對我們的工作應該有什麼幫助？ B：閱讀關於不同人的故事可以培養【同理心】，因為你會學著理解別人的感受，這能幫助你在顧客生氣或難過時保持冷靜和友善。"
  },
  {
    "word": "escapism",
    "pos": "n.",
    "cn_def": "逃避現實",
    "en_def": "an activity that helps you forget real-life problems",
    "sentence": "A: Your team has been working late every night on the merger, so how do you relax when you finally get home? B: I read adventure novels for pure {{BLANK}}, because for thirty minutes I can travel to a desert island or a pirate ship and forget about contracts, deadlines, and endless emails from lawyers.",
    "cn": "A：你的團隊每晚都為了合併案加班，你終於回到家時怎麼放鬆？ B：我讀冒險小說純粹是為了【逃避現實】，因為在三十分鐘內我可以去荒島或海盜船旅行，忘掉合約、截止期限和律師寄來的無盡郵件。"
  },
  {
    "word": "productive",
    "pos": "adj.",
    "cn_def": "有成效的；多產的",
    "en_def": "getting a lot done; giving good results",
    "sentence": "A: How was the team's first meeting in the new quiet reading room on the fourth floor this morning? B: It was very {{BLANK}}, because without the noise from the main office we reviewed all twelve customer reports, agreed on a new schedule, and still finished thirty minutes earlier than we planned.",
    "cn": "A：今天早上團隊第一次在四樓新的安靜閱讀室開會，情況如何？ B：非常【有成效】，因為沒有主辦公室的噪音，我們審閱了全部十二份顧客報告、確定了新的時程，而且還比計畫提早三十分鐘結束。"
  },
  {
    "word": "regain",
    "pos": "v.",
    "cn_def": "重新獲得；恢復",
    "en_def": "to get something back after losing it",
    "sentence": "A: You seemed so stressed after the busy holiday season, so what helped you feel better during your week off? B: I went to a small mountain hotel with a pile of books and no laptop, and after a few days of reading and walking, I started to {{BLANK}} my energy and focus.",
    "cn": "A：繁忙的假期旺季後你看起來壓力好大，休假那一週是什麼讓你感覺好一點？ B：我帶著一疊書、沒帶筆電，去了一家山上的小旅館，閱讀和散步幾天後，我開始【恢復】我的精力和專注力。"
  },
  {
    "word": "overcome",
    "pos": "v.",
    "cn_def": "克服；戰勝",
    "en_def": "to successfully deal with a problem or difficulty",
    "sentence": "A: How did your new assistant become so comfortable speaking at meetings when she was so shy during her first month here? B: She worked hard to {{BLANK}} her fear by reading business articles aloud every night, and then she practiced short presentations with me every Friday until she felt confident in front of the team.",
    "cn": "A：你的新助理第一個月在這裡時那麼害羞，她是怎麼變得能自在地在會議上發言的？ B：她努力【克服】自己的恐懼，每晚大聲朗讀商業文章，然後每週五和我練習簡短報告，直到她在團隊面前感到有自信。"
  },
  {
    "word": "obstacle",
    "pos": "n.",
    "cn_def": "障礙",
    "en_def": "something that stops you from making progress",
    "sentence": "A: Why are so few employees using the online library that the company paid for at the beginning of the year? B: The biggest {{BLANK}} is the complicated login process, because staff must enter three different passwords, so many people simply give up and read free articles on their phones instead.",
    "cn": "A：公司年初付費的線上圖書館為什麼很少員工使用？ B：最大的【障礙】是複雜的登入程序，因為員工必須輸入三組不同的密碼，所以很多人乾脆放棄，改用手機看免費文章。"
  }
];

const MCQS = [
  {
    "q": "The bookstore near our office has moved its _____ section to the second floor. Customers looking for novels should now take the escalator.",
    "options": [
      "fiction",
      "receipt",
      "budget",
      "invoice"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Nobody at the office could explain how the package disappeared from the locked room. The _____ was finally solved when security checked the camera footage.",
    "options": [
      "fantasy",
      "fiction",
      "mystery",
      "empathy"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The film studio is adapting a popular _____ series about wizards and dragons. Filming will begin next spring in New Zealand.",
    "options": [
      "reality",
      "fantasy",
      "constraint",
      "curiosity"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Our designer used old book pages _____ to decorate the walls of the café. Many customers now take photos of the unusual display.",
    "options": [
      "certainly",
      "slightly",
      "briefly",
      "creatively"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Reading novels from an early age helps children develop a rich _____. They learn to picture places they have never visited.",
    "options": [
      "constraint",
      "imagination",
      "obstacle",
      "reality"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The new lighting in the library was installed to _____ the reading experience. Visitors say their eyes feel much less tired now.",
    "options": [
      "enhance",
      "endure",
      "observe",
      "regain"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Checking hundreds of pages for spelling errors can be _____ work. The editor plays soft music to stay focused during long afternoons.",
    "options": [
      "prudent",
      "factual",
      "elusive",
      "tedious"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Learning to read in a foreign language requires patience and _____. Students who practice every day usually make the most progress.",
    "options": [
      "escapism",
      "reality",
      "perseverance",
      "constraint"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Losing the big contract taught the young manager a valuable _____. She now checks every detail before sending a proposal.",
    "options": [
      "life lesson",
      "book lover",
      "price tag",
      "time zone"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The memoir offers readers a rare _____ into the daily life of a famous chef. It describes his kitchen routines in great detail.",
    "options": [
      "obstacle",
      "constraint",
      "jumble",
      "glimpse"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The guest speaker shared a _____ story about his travels across Africa. Everyone in the hall wanted to hear more after he finished.",
    "options": [
      "prudent",
      "fascinating",
      "elusive",
      "chaotic"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Researchers will _____ how shoppers move through the bookstore next week. The results will help the manager redesign the store layout.",
    "options": [
      "endure",
      "regain",
      "observe",
      "cherish"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "In the novel, a retired _____ is asked to find a stolen diamond. He follows the clues to a small hotel by the sea.",
    "options": [
      "aspect",
      "reality",
      "jumble",
      "detective"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Many children grow up reading _____ tales about princesses and talking animals. These stories often teach simple lessons about kindness.",
    "options": [
      "fairy",
      "aspect",
      "constraint",
      "jumble"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The newspaper corrected several _____ errors in yesterday's article. The wrong dates and names have now been fixed on its website.",
    "options": [
      "tedious",
      "elusive",
      "factual",
      "productive"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Passengers had to _____ a five-hour delay at the airport because of the storm. Many of them passed the time by reading magazines.",
    "options": [
      "enhance",
      "endure",
      "motivate",
      "interact"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "As a true _____, my manager spends most weekends in secondhand bookshops. Her apartment is filled with shelves of old novels.",
    "options": [
      "life lesson",
      "price tag",
      "book lover",
      "time zone"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The library's summer program encourages children to read for _____ rather than for grades. Each child chooses books that they like.",
    "options": [
      "constraint",
      "obstacle",
      "reality",
      "enjoyment"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The school invited a famous author to _____ students to start writing their own stories. Several of them later joined the writing club.",
    "options": [
      "inspire",
      "endure",
      "observe",
      "regain"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Managers can _____ their teams by praising good work in public. Small rewards also help people stay positive and work harder.",
    "options": [
      "endure",
      "motivate",
      "regain",
      "observe"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "With printing costs rising, it would be _____ to delay the new magazine launch. The board will discuss the budget again in May.",
    "options": [
      "tedious",
      "fascinating",
      "elusive",
      "prudent"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The translator _____ compared each sentence with the original contract. Not a single detail was missing from the final version.",
    "options": [
      "creatively",
      "meticulously",
      "rarely",
      "loudly"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The new edition is _____ worth the higher price. It includes three extra chapters and many beautiful color photos.",
    "options": [
      "certainly",
      "meticulously",
      "creatively",
      "slightly"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Customer service is the most important _____ of working in a bookstore. Staff must help shoppers find the right titles quickly.",
    "options": [
      "jumble",
      "escapism",
      "aspect",
      "glimpse"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The office became _____ after the computer system suddenly crashed. Phones rang constantly while staff searched for paper files.",
    "options": [
      "prudent",
      "chaotic",
      "factual",
      "elusive"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The storage room was a _____ of old files, broken chairs, and empty boxes. It took the team two full days to clean it.",
    "options": [
      "glimpse",
      "aspect",
      "reality",
      "jumble"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Without clear goals, the survey results are almost _____ to the marketing team. The team must decide what it wants to measure first.",
    "options": [
      "fascinating",
      "prudent",
      "meaningless",
      "tedious"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The new app allows readers to _____ with other fans of the same book. Users can post comments and join online discussions.",
    "options": [
      "interact",
      "endure",
      "enhance",
      "regain"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Time is the biggest _____ on this writing project. The team has only two weeks to finish the whole training manual.",
    "options": [
      "enjoyment",
      "empathy",
      "escapism",
      "constraint"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Many novels allow readers to escape from _____ for a few hours. That is why fiction sells well during difficult economic times.",
    "options": [
      "aspect",
      "reality",
      "glimpse",
      "jumble"
    ],
    "answer": 1,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "fiction": {
    "pos": "n.",
    "en_def": "stories about imaginary people and events",
    "cn_def": "小說；虛構作品"
  },
  "mystery": {
    "pos": "n.",
    "en_def": "a story about a crime or a strange event that must be solved",
    "cn_def": "懸疑小說；謎"
  },
  "fantasy": {
    "pos": "n.",
    "en_def": "stories about magic and imaginary worlds",
    "cn_def": "奇幻（作品）；幻想"
  },
  "creatively": {
    "pos": "adv.",
    "en_def": "in a new and original way",
    "cn_def": "有創意地"
  },
  "imagination": {
    "pos": "n.",
    "en_def": "the ability to create pictures and ideas in your mind",
    "cn_def": "想像力"
  },
  "enhance": {
    "pos": "v.",
    "en_def": "to make something better or stronger",
    "cn_def": "提升；增強"
  },
  "tedious": {
    "pos": "adj.",
    "en_def": "long, slow and boring",
    "cn_def": "冗長乏味的"
  },
  "perseverance": {
    "pos": "n.",
    "en_def": "continuing to try even when something is difficult",
    "cn_def": "毅力；堅持不懈"
  },
  "life lesson": {
    "pos": "n.phr.",
    "en_def": "something important you learn about how to live",
    "cn_def": "人生教訓；人生課題"
  },
  "glimpse": {
    "pos": "n.",
    "en_def": "a quick or short look at something",
    "cn_def": "一瞥；短暫的一看"
  },
  "fascinating": {
    "pos": "adj.",
    "en_def": "extremely interesting",
    "cn_def": "引人入勝的；極有趣的"
  },
  "observe": {
    "pos": "v.",
    "en_def": "to watch something carefully",
    "cn_def": "觀察"
  },
  "detective": {
    "pos": "n.",
    "en_def": "a person whose job is to find out who did a crime",
    "cn_def": "偵探"
  },
  "fairy": {
    "pos": "n.",
    "en_def": "a small magical creature in children's stories",
    "cn_def": "仙子；小精靈"
  },
  "factual": {
    "pos": "adj.",
    "en_def": "based on facts, not opinions",
    "cn_def": "事實的；根據事實的"
  },
  "endure": {
    "pos": "v.",
    "en_def": "to accept something unpleasant for a long time",
    "cn_def": "忍受；忍耐"
  },
  "book lover": {
    "pos": "n.phr.",
    "en_def": "a person who loves reading books",
    "cn_def": "愛書人"
  },
  "enjoyment": {
    "pos": "n.",
    "en_def": "the pleasure you get from doing something",
    "cn_def": "樂趣；享受"
  },
  "inspire": {
    "pos": "v.",
    "en_def": "to give someone the wish and energy to do something",
    "cn_def": "激勵；啟發"
  },
  "motivate": {
    "pos": "v.",
    "en_def": "to make someone want to do something",
    "cn_def": "激勵；促使"
  },
  "prudent": {
    "pos": "adj.",
    "en_def": "careful and sensible, avoiding risks",
    "cn_def": "審慎的；謹慎的"
  },
  "meticulously": {
    "pos": "adv.",
    "en_def": "very carefully, paying attention to every detail",
    "cn_def": "一絲不苟地；極仔細地"
  },
  "certainly": {
    "pos": "adv.",
    "en_def": "without any doubt; of course",
    "cn_def": "當然；確實"
  },
  "aspect": {
    "pos": "n.",
    "en_def": "one part or feature of something",
    "cn_def": "方面；層面"
  },
  "chaotic": {
    "pos": "adj.",
    "en_def": "in a state of complete confusion and disorder",
    "cn_def": "混亂的"
  },
  "jumble": {
    "pos": "n.",
    "en_def": "an untidy mix of different things",
    "cn_def": "混雜；一團亂"
  },
  "meaningless": {
    "pos": "adj.",
    "en_def": "having no purpose or clear meaning",
    "cn_def": "無意義的"
  },
  "interact": {
    "pos": "v.",
    "en_def": "to talk or work with other people",
    "cn_def": "互動"
  },
  "constraint": {
    "pos": "n.",
    "en_def": "something that limits what you can do",
    "cn_def": "限制；約束"
  },
  "reality": {
    "pos": "n.",
    "en_def": "the way things really are",
    "cn_def": "現實；真實情況"
  },
  "curiosity": {
    "pos": "n.",
    "en_def": "the strong wish to know or learn something",
    "cn_def": "好奇心"
  },
  "elusive": {
    "pos": "adj.",
    "en_def": "difficult to find, catch or achieve",
    "cn_def": "難以捉摸的；難以達到的"
  },
  "encounter": {
    "pos": "v.",
    "en_def": "to meet or experience something, often by chance",
    "cn_def": "遇到；遭遇"
  },
  "cherish": {
    "pos": "v.",
    "en_def": "to love and care for something very much",
    "cn_def": "珍惜；珍愛"
  },
  "empathy": {
    "pos": "n.",
    "en_def": "the ability to understand other people's feelings",
    "cn_def": "同理心"
  },
  "escapism": {
    "pos": "n.",
    "en_def": "an activity that helps you forget real-life problems",
    "cn_def": "逃避現實"
  },
  "productive": {
    "pos": "adj.",
    "en_def": "getting a lot done; giving good results",
    "cn_def": "有成效的；多產的"
  },
  "regain": {
    "pos": "v.",
    "en_def": "to get something back after losing it",
    "cn_def": "重新獲得；恢復"
  },
  "overcome": {
    "pos": "v.",
    "en_def": "to successfully deal with a problem or difficulty",
    "cn_def": "克服；戰勝"
  },
  "obstacle": {
    "pos": "n.",
    "en_def": "something that stops you from making progress",
    "cn_def": "障礙"
  }
};

const EXTRA_GLOSSES = {};
