// Topic 68 Quiz Data: Communication 溝通
// Source word list: https://www.examword.com/group-topic/communication — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T68 - Communication 溝通",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "message",
    "pos": "n.",
    "cn_def": "訊息；留言",
    "en_def": "words you send or leave for someone when you cannot talk to them",
    "sentence": "A: Did the client from Singapore call back while I was in the budget meeting with the finance team this afternoon? B: Yes, she called around three o'clock, and she left a {{BLANK}} asking you to send the updated price list before Friday, because her manager needs it for a board meeting.",
    "cn": "A：我下午和財務團隊開預算會議時，新加坡的客戶有回電嗎？ B：有，她大約三點打來，留了一則【訊息】請你在星期五前寄出更新的價目表，因為她的經理開董事會時需要用到。"
  },
  {
    "word": "conversation",
    "pos": "n.",
    "cn_def": "對話；談話",
    "en_def": "a talk between two or more people",
    "sentence": "A: How did you find out that the marketing department is planning to move to the new building next spring? B: I had a long {{BLANK}} with their team leader during the lunch break yesterday, and she told me that they need more space because they are hiring ten new designers.",
    "cn": "A：你怎麼知道行銷部門計畫明年春天搬到新大樓？ B：我昨天午休時和他們的組長有一段很長的【談話】，她告訴我因為他們要聘請十位新設計師，所以需要更多空間。"
  },
  {
    "word": "discussion",
    "pos": "n.",
    "cn_def": "討論",
    "en_def": "a talk in which people share ideas about a subject",
    "sentence": "A: Has the management team decided whether employees can work from home two days a week starting next month? B: Not yet, because there was a long {{BLANK}} about it in this morning's meeting, and some managers worry that teamwork will suffer if people are not in the office together.",
    "cn": "A：管理團隊決定員工從下個月起是否可以每週在家工作兩天了嗎？ B：還沒，因為今天早上的會議對此進行了很長的【討論】，有些經理擔心如果大家不一起在辦公室，團隊合作會受到影響。"
  },
  {
    "word": "dialogue",
    "pos": "n.",
    "cn_def": "對話；交流",
    "en_def": "a serious talk between two groups to solve problems or understand each other",
    "sentence": "A: Why did the factory managers agree to meet the workers' representatives every month from now on? B: After the strike last year, both sides realized that open {{BLANK}} is the best way to solve problems early, before small complaints about pay or safety turn into serious conflicts.",
    "cn": "A：工廠經理為什麼同意從現在起每個月與工人代表開會？ B：去年罷工之後，雙方都明白開放的【對話】是及早解決問題的最好方法，免得關於薪資或安全的小抱怨演變成嚴重的衝突。"
  },
  {
    "word": "interaction",
    "pos": "n.",
    "cn_def": "互動；交流",
    "en_def": "the act of talking or working with someone",
    "sentence": "A: Why does the hotel manager want all new receptionists to attend a three-day training course before they start work? B: Because every {{BLANK}} with a guest at the front desk affects the hotel's online reviews, so she wants the staff to be friendly, patient, and helpful from their very first day.",
    "cn": "A：飯店經理為什麼要所有新的櫃檯人員在上班前參加三天的訓練課程？ B：因為櫃檯和客人的每一次【互動】都會影響飯店的網路評價，所以她希望員工從第一天起就友善、有耐心且樂於助人。"
  },
  {
    "word": "expression",
    "pos": "n.",
    "cn_def": "表情；表達",
    "en_def": "a look on someone's face that shows a feeling",
    "sentence": "A: Did the new sales assistant seem happy when the manager announced the changes to the work schedule this morning? B: Not really, because I could see from the worried {{BLANK}} on her face that she was upset about working on Saturdays, but she didn't say anything during the meeting.",
    "cn": "A：今天早上經理宣布班表變動時，新來的銷售助理看起來開心嗎？ B：不太開心，我從她臉上擔憂的【表情】看得出來她對週六要上班感到不高興，但她在會議中什麼也沒說。"
  },
  {
    "word": "feedback",
    "pos": "n.",
    "cn_def": "回饋；意見",
    "en_def": "comments about how well someone did something, used to make it better",
    "sentence": "A: How do you know whether the new training program for customer service staff is actually working well? B: After every session, we ask the trainees to fill out a short online form and give honest {{BLANK}}, and then we use their comments to improve the next course.",
    "cn": "A：你怎麼知道客服人員的新訓練課程是否真的有效？ B：每堂課結束後，我們會請學員填寫一份簡短的線上表單並給予誠實的【意見回饋】，然後我們用他們的意見來改善下一期課程。"
  },
  {
    "word": "response",
    "pos": "n.",
    "cn_def": "回應；回覆",
    "en_def": "an answer or reaction to something",
    "sentence": "A: Have we heard anything from the hotel in Tokyo about the meeting rooms we asked to book for the conference? B: Yes, I sent them an email on Monday, and I received a quick {{BLANK}} the next morning saying that two large rooms are available on the dates we need.",
    "cn": "A：東京那家飯店有回覆我們要為研討會預訂會議室的事嗎？ B：有，我星期一寄了電子郵件給他們，隔天早上就收到快速的【回覆】，說我們需要的日期有兩間大會議室可以使用。"
  },
  {
    "word": "statement",
    "pos": "n.",
    "cn_def": "聲明；陳述",
    "en_def": "something said or written officially to give information",
    "sentence": "A: What did the airline say about the cancelled flights after the storm closed the airport last night? B: The company released an official {{BLANK}} this morning saying that all passengers will get a full refund or a free seat on another flight within the next three days.",
    "cn": "A：昨晚暴風雨導致機場關閉後，航空公司對取消的航班怎麼說？ B：公司今天早上發布了正式【聲明】，表示所有乘客都可以獲得全額退款，或在接下來三天內免費改搭其他航班。"
  },
  {
    "word": "tone",
    "pos": "n.",
    "cn_def": "語氣；口吻",
    "en_def": "the way a voice sounds that shows how someone feels",
    "sentence": "A: Why did the customer get so angry on the phone, even though you gave him the right information about his order? B: My manager said that my {{BLANK}} of voice sounded impatient and a little rude, so next time I will speak more slowly and try to sound calm and friendly.",
    "cn": "A：雖然你給了那位客人正確的訂單資訊，他為什麼在電話裡那麼生氣？ B：我的經理說我說話的【語氣】聽起來不耐煩又有點無禮，所以下次我會說慢一點，並試著讓自己聽起來冷靜又友善。"
  },
  {
    "word": "gesture",
    "pos": "n.",
    "cn_def": "手勢；姿態",
    "en_def": "a movement of the hands or head that shows meaning",
    "sentence": "A: How did you communicate with the factory workers in Vietnam when you visited last month, since you don't speak Vietnamese? B: Usually a translator helped us, but when she was busy, I just made a simple {{BLANK}} with my hands, such as pointing at a machine or giving a thumbs-up, and the workers understood me quite well.",
    "cn": "A：你上個月去越南時不會說越南話，是怎麼和工廠工人溝通的？ B：通常有翻譯員幫忙，但她忙的時候，我就用手做個簡單的【手勢】，像是指著機器或比個讚，工人們都相當能理解我的意思。"
  },
  {
    "word": "signal",
    "pos": "n.",
    "cn_def": "信號；暗號",
    "en_def": "a sound, action, or sign that gives information",
    "sentence": "A: How will the tour guide let our group know when it is time to return to the bus at the crowded market? B: She told us that she will raise a yellow flag as a {{BLANK}}, and then everyone should walk back to the parking lot within ten minutes so we can leave on time.",
    "cn": "A：在擁擠的市場裡，導遊要怎麼讓我們這團知道該回巴士了？ B：她告訴我們她會舉起一面黃旗作為【信號】，然後大家應該在十分鐘內走回停車場，這樣我們才能準時出發。"
  },
  {
    "word": "clarify",
    "pos": "v.",
    "cn_def": "闡明；釐清",
    "en_def": "to make something easier to understand",
    "sentence": "A: The new travel policy is very confusing, so will we get money back for taxi rides to the airport or not? B: I'm not sure either, so I have asked the human resources manager to {{BLANK}} the rules at Friday's staff meeting, because many employees have asked the same question this week.",
    "cn": "A：新的差旅政策很令人困惑，那我們搭計程車去機場的費用到底能不能報銷？ B：我也不確定，所以我已經請人資經理在星期五的員工會議上【釐清】規定，因為這週有很多員工問了同樣的問題。"
  },
  {
    "word": "explain",
    "pos": "v.",
    "cn_def": "解釋；說明",
    "en_def": "to make something clear by giving details",
    "sentence": "A: Why are so many customers calling the help desk about the new online banking app this week? B: The app changed a lot after the update, so our team will make a short video to {{BLANK}} how to log in and pay bills, and we will post it on our website tomorrow.",
    "cn": "A：為什麼這週有這麼多顧客打電話到服務台詢問新的網路銀行應用程式？ B：更新後應用程式改變很多，所以我們團隊會製作一支短片來【說明】如何登入和繳費，明天會放上我們的網站。"
  },
  {
    "word": "inform",
    "pos": "v.",
    "cn_def": "通知；告知",
    "en_def": "to tell someone facts, often in an official way",
    "sentence": "A: What should I do if I need to leave work early on Friday for my daughter's school concert? B: You should {{BLANK}} your supervisor at least two days before, and then ask a colleague to cover your phone calls in the afternoon so that customers are not left waiting.",
    "cn": "A：如果我星期五要提早下班去參加女兒學校的音樂會，我該怎麼做？ B：你應該至少提前兩天【告知】你的主管，然後請一位同事幫你接下午的電話，這樣顧客才不會一直等。"
  },
  {
    "word": "notify",
    "pos": "v.",
    "cn_def": "通知；告知",
    "en_def": "to tell someone officially about something",
    "sentence": "A: The shipment of printer paper will arrive two days later than planned, so what should we do about the customers who ordered it? B: Please {{BLANK}} each customer by email this afternoon, apologize for the delay, and offer them free delivery on their next order so that they stay happy with our service.",
    "cn": "A：印表機紙的貨會比預定晚兩天到，那些訂購的顧客我們該怎麼處理？ B：請在今天下午以電子郵件【通知】每位顧客，為延誤道歉，並提供他們下次訂購免運費，讓他們對我們的服務保持滿意。"
  },
  {
    "word": "persuade",
    "pos": "v.",
    "cn_def": "說服；勸服",
    "en_def": "to make someone agree to do something by giving good reasons",
    "sentence": "A: How did you get the hotel to give us a discount on the rooms for the sales conference in March? B: I managed to {{BLANK}} the hotel manager by promising that we would book fifty rooms for three nights and hold our dinner party in their restaurant as well.",
    "cn": "A：你是怎麼讓飯店給我們三月業務研討會的房間折扣的？ B：我承諾我們會訂五十間房住三晚，而且也會在他們的餐廳舉辦晚宴，就這樣成功【說服】了飯店經理。"
  },
  {
    "word": "negotiate",
    "pos": "v.",
    "cn_def": "談判；協商",
    "en_def": "to talk with others in order to reach an agreement",
    "sentence": "A: The supplier wants to raise the price of the plastic boxes by fifteen percent next year, so what is our plan? B: Our purchasing manager will fly to Shanghai next week to {{BLANK}} a better deal, and she hopes to keep the increase below five percent by ordering more boxes each month.",
    "cn": "A：供應商明年想把塑膠盒的價格調漲百分之十五，我們有什麼打算？ B：我們的採購經理下週會飛去上海【協商】出更好的條件，她希望藉由每月訂購更多盒子，把漲幅控制在百分之五以下。"
  },
  {
    "word": "translate",
    "pos": "v.",
    "cn_def": "翻譯",
    "en_def": "to change words from one language into another",
    "sentence": "A: We are sending the new product brochure to customers in Japan and Korea, so is it ready to go yet? B: Not yet, because we hired a language company to {{BLANK}} the brochure into both languages, and they need another week to finish and check all the technical words.",
    "cn": "A：我們要把新產品手冊寄給日本和韓國的客戶，準備好了嗎？ B：還沒，因為我們請了一家語言公司把手冊【翻譯】成這兩種語言，他們還需要一週來完成並檢查所有的專業用語。"
  },
  {
    "word": "verbal",
    "pos": "adj.",
    "cn_def": "口頭的；言語的",
    "en_def": "spoken, not written",
    "sentence": "A: Did the landlord give you a written contract when you agreed to rent the small office above the bakery? B: No, we only made a {{BLANK}} agreement over the phone, so my lawyer told me to ask for a signed document before I pay the deposit next week.",
    "cn": "A：你同意租麵包店樓上那間小辦公室時，房東有給你書面合約嗎？ B：沒有，我們只在電話裡達成【口頭】協議，所以我的律師叫我在下週付押金之前要求一份簽好的文件。"
  },
  {
    "word": "nonverbal",
    "pos": "adj.",
    "cn_def": "非語言的",
    "en_def": "without using words",
    "sentence": "A: Why does the sales trainer spend so much time talking about how we stand and smile during meetings with clients? B: She believes that {{BLANK}} communication, such as eye contact and body language, often tells customers more than our words, so it can help us win their trust.",
    "cn": "A：業務培訓師為什麼花這麼多時間講我們和客戶開會時怎麼站、怎麼微笑？ B：她認為【非語言的】溝通，像是眼神接觸和肢體語言，常常比我們說的話更能傳達訊息給顧客，所以能幫助我們贏得他們的信任。"
  },
  {
    "word": "written",
    "pos": "adj.",
    "cn_def": "書面的",
    "en_def": "put down on paper or in a document",
    "sentence": "A: Can I just tell my manager on the phone that I want to take three weeks of vacation in August? B: You can call her first, but the company also needs a {{BLANK}} request through the online system at least one month before, or human resources cannot approve your leave.",
    "cn": "A：我可以直接打電話告訴經理我八月想休三週假嗎？ B：你可以先打給她，但公司也需要你至少提前一個月透過線上系統提出【書面】申請，否則人資部門無法核准你的假。"
  },
  {
    "word": "oral",
    "pos": "adj.",
    "cn_def": "口頭的；口說的",
    "en_def": "spoken, not written",
    "sentence": "A: What do candidates have to do in the second part of the job interview for the flight attendant position? B: After the written test, each person takes an {{BLANK}} exam in English and Japanese, in which they answer questions from passengers and explain safety rules out loud to the interviewers.",
    "cn": "A：空服員職位的面試第二部分，應徵者要做什麼？ B：筆試結束後，每個人都要參加英文和日文的【口說】測驗，要回答乘客的問題，並大聲向面試官說明安全規定。"
  },
  {
    "word": "effective",
    "pos": "adj.",
    "cn_def": "有效的",
    "en_def": "working well and giving the result you want",
    "sentence": "A: Our team keeps missing deadlines because people don't share updates, so what do you suggest we change? B: I think a short meeting every morning would be very {{BLANK}}, because everyone could explain what they are working on and ask for help before small problems become big ones.",
    "cn": "A：我們團隊因為大家不分享最新進度而一直趕不上期限，你建議我們改變什麼？ B：我覺得每天早上開個簡短的會議會非常【有效】，因為每個人都可以說明自己正在做什麼，並在小問題變成大問題之前尋求協助。"
  },
  {
    "word": "clear",
    "pos": "adj.",
    "cn_def": "清楚的；明確的",
    "en_def": "easy to understand",
    "sentence": "A: I read the new safety instructions for the warehouse twice, but I still don't understand what to do in a fire. B: I agree that they aren't very {{BLANK}}, so I will ask the safety officer to rewrite them with simple steps and pictures and post them next to every exit.",
    "cn": "A：倉庫新的安全須知我讀了兩遍，但還是不懂發生火災時該怎麼做。 B：我同意內容不太【清楚】，所以我會請安全專員用簡單的步驟和圖片重寫，並貼在每個出口旁邊。"
  },
  {
    "word": "concise",
    "pos": "adj.",
    "cn_def": "簡潔的",
    "en_def": "short and clear, using only the words that are needed",
    "sentence": "A: The director only has ten minutes for our presentation tomorrow, so how should we prepare our slides? B: We should keep each slide short and {{BLANK}}, with only three key points and one chart, so that she can quickly understand the sales results and make a decision before her next meeting.",
    "cn": "A：主管明天只有十分鐘聽我們簡報，我們該怎麼準備投影片？ B：我們應該讓每張投影片簡短又【簡潔】，只放三個重點和一張圖表，這樣她就能很快了解銷售成果，並在下一個會議前做出決定。"
  },
  {
    "word": "direct",
    "pos": "adj.",
    "cn_def": "直率的；直接的",
    "en_def": "saying what you think in an honest and clear way",
    "sentence": "A: What kind of manager is the new head of the finance department, and is she easy to work with? B: She is very {{BLANK}}, so if she doesn't like your report, she will tell you exactly what is wrong, but she also praises good work, and most of the team respects her honesty.",
    "cn": "A：財務部的新主管是什麼樣的經理？和她共事容易嗎？ B：她非常【直率】，如果她不喜歡你的報告，她會明確告訴你哪裡有問題，但她也會稱讚好的表現，所以大部分組員都很尊重她的坦誠。"
  },
  {
    "word": "formal",
    "pos": "adj.",
    "cn_def": "正式的",
    "en_def": "serious and official, following the correct rules",
    "sentence": "A: What should I wear to the awards dinner at the Grand Hotel next Saturday, since this is my first company event? B: The invitation says the dinner is {{BLANK}}, so men should wear a dark suit and tie, and women usually wear an evening dress, because the company president and important clients will attend.",
    "cn": "A：下週六在君悅飯店的頒獎晚宴我該穿什麼？這是我第一次參加公司活動。 B：邀請函上說晚宴是【正式的】，所以男士應該穿深色西裝打領帶，女士通常穿晚禮服，因為公司總裁和重要客戶都會出席。"
  },
  {
    "word": "informal",
    "pos": "adj.",
    "cn_def": "非正式的；輕鬆的",
    "en_def": "relaxed and friendly, not official",
    "sentence": "A: Do I need to prepare slides for the meeting with the new interns on Thursday afternoon? B: No, it's just an {{BLANK}} chat over coffee in the break room, so you can simply introduce yourself, talk about your job, and answer any questions they have about working here.",
    "cn": "A：星期四下午和新實習生的會議我需要準備投影片嗎？ B：不用，那只是在休息室邊喝咖啡邊進行的【非正式】閒聊，你只要簡單自我介紹、談談你的工作，並回答他們對在這裡工作的任何問題就好。"
  },
  {
    "word": "actively",
    "pos": "adv.",
    "cn_def": "積極地；主動地",
    "en_def": "in a way that takes part and does things with energy",
    "sentence": "A: Why did the manager choose Tom to lead the new customer service project instead of someone with more experience? B: During every meeting, Tom listens {{BLANK}}, asks useful questions, and writes down what customers say, so the manager believes he understands their problems better than anyone else on the team.",
    "cn": "A：經理為什麼選Tom帶領新的客服專案，而不是選更有經驗的人？ B：每次開會Tom都會【積極地】傾聽、提出有用的問題，並記下顧客說的話，所以經理相信他比團隊裡任何人都更了解顧客的問題。"
  },
  {
    "word": "clearly",
    "pos": "adv.",
    "cn_def": "清楚地",
    "en_def": "in a way that is easy to see, hear, or understand",
    "sentence": "A: The conference room is very large, so how can we make sure everyone in the back row hears the speaker? B: We will set up two extra speakers and give the presenter a wireless microphone, so she can speak {{BLANK}} without shouting, and the guests at the back won't miss anything important.",
    "cn": "A：會議廳很大，我們要怎麼確保最後一排的人都聽得到講者？ B：我們會多架兩個喇叭，並給講者一支無線麥克風，這樣她不用大喊也能【清楚地】說話，後排的來賓就不會錯過任何重要內容。"
  },
  {
    "word": "politely",
    "pos": "adv.",
    "cn_def": "有禮貌地",
    "en_def": "in a kind and respectful way",
    "sentence": "A: What did you say to the customer who wanted a refund for a jacket he had already worn for two months? B: I {{BLANK}} explained that our store only gives refunds within thirty days, but I offered him a discount coupon for his next purchase, and he seemed satisfied when he left.",
    "cn": "A：那位外套已經穿了兩個月卻要退款的顧客，你跟他說了什麼？ B：我【有禮貌地】解釋本店只在三十天內提供退款，但我給了他一張下次購物的折價券，他離開時看起來很滿意。"
  },
  {
    "word": "openly",
    "pos": "adv.",
    "cn_def": "公開地；坦率地",
    "en_def": "honestly, without hiding anything",
    "sentence": "A: Why do you think the new team leader is so popular with the staff after only three months in the job? B: She talks {{BLANK}} about the department's problems and goals at every meeting, and she encourages everyone to share their honest opinions without worrying about getting into trouble.",
    "cn": "A：你覺得新組長為什麼上任才三個月就這麼受員工歡迎？ B：她在每次會議上都【坦率地】談論部門的問題和目標，並鼓勵每個人分享真實的想法，不必擔心惹上麻煩。"
  }
];

const MCQS = [
  {
    "q": "Ms. Lin is out of the office until Monday. Please leave a _____ with the receptionist, and she will call you back.",
    "options": [
      "message",
      "statement",
      "gesture",
      "tone"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Mr. Park and the new client had a friendly _____ during lunch. They talked about travel, sports, and the coming product launch.",
    "options": [
      "signal",
      "conversation",
      "response",
      "feedback"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The board will hold a _____ about the new budget on Thursday. Each department manager should bring three ideas for saving money.",
    "options": [
      "gesture",
      "tone",
      "discussion",
      "message"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The customer did not say anything about the price. However, the surprised _____ on his face showed that he thought it was too high.",
    "options": [
      "dialogue",
      "statement",
      "feedback",
      "expression"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The hotel collects guest _____ through a short survey after checkout. Managers read every comment and use it to improve their service.",
    "options": [
      "gesture",
      "signal",
      "feedback",
      "tone"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "We emailed the supplier three times last week. Unfortunately, we still have not received any _____ about the missing shipment.",
    "options": [
      "response",
      "expression",
      "gesture",
      "tone"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The bank issued a public _____ after the system problem on Monday. It promised that no customer had lost any money.",
    "options": [
      "gesture",
      "interaction",
      "tone",
      "statement"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Please answer the phone in a warm and friendly _____. Callers form an opinion of our company within the first few seconds.",
    "options": [
      "statement",
      "tone",
      "feedback",
      "signal"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The manager could not speak over the loud machines in the factory. She made a quick _____ with her hand to tell workers to stop.",
    "options": [
      "discussion",
      "response",
      "statement",
      "gesture"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "When the red light flashes, it is a _____ that the printer is out of paper. Please add more paper before printing again.",
    "options": [
      "conversation",
      "expression",
      "signal",
      "feedback"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Several employees are confused about the new parking rules. The office manager will send an email to _____ them this afternoon.",
    "options": [
      "persuade",
      "clarify",
      "negotiate",
      "translate"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The trainer will _____ how to use the new cash register on Monday morning. All cashiers should arrive thirty minutes early.",
    "options": [
      "explain",
      "notify",
      "inform",
      "persuade"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Please _____ the front desk if you plan to check out late. A small fee may be charged after twelve o'clock.",
    "options": [
      "translate",
      "inform",
      "negotiate",
      "persuade"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The airline will _____ passengers by text message if their flight is delayed. Travelers should check that their phone numbers are correct.",
    "options": [
      "clarify",
      "explain",
      "negotiate",
      "notify"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The sales team tried hard to _____ the client to sign a two-year contract. In the end, she agreed to a one-year deal.",
    "options": [
      "persuade",
      "notify",
      "clarify",
      "translate"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Our lawyer will _____ the terms of the new lease with the landlord. We hope to get lower rent for the first year.",
    "options": [
      "persuade",
      "notify",
      "negotiate",
      "inform"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Our website is only in English right now. We plan to _____ it into Spanish and French before we open stores in Europe.",
    "options": [
      "translate",
      "clarify",
      "negotiate",
      "notify"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The employee received a _____ warning from his supervisor for being late. If it happens again, he will get a written one.",
    "options": [
      "concise",
      "effective",
      "verbal",
      "nonverbal"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Smiling and making eye contact are important types of _____ communication. They help customers feel welcome before you say a word.",
    "options": [
      "written",
      "nonverbal",
      "concise",
      "formal"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "All requests for vacation days must be made in _____ form. Please complete the online request at least two weeks in advance.",
    "options": [
      "concise",
      "direct",
      "effective",
      "written"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Each trainee must give a ten-minute _____ presentation at the end of the course. They can use slides but must speak without notes.",
    "options": [
      "nonverbal",
      "written",
      "oral",
      "direct"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Short daily meetings have been very _____ for our team. Since we started them, fewer projects have been delayed.",
    "options": [
      "verbal",
      "nonverbal",
      "written",
      "effective"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The instructions on the box were not _____ at all. Many customers called because they could not set up the printer.",
    "options": [
      "clear",
      "oral",
      "verbal",
      "nonverbal"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Your report should be _____ and no longer than two pages. The directors are busy and want only the most important facts.",
    "options": [
      "oral",
      "concise",
      "verbal",
      "nonverbal"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Our new manager is very _____ and always says exactly what she thinks. Some staff find this rude, but most appreciate her honesty.",
    "options": [
      "written",
      "oral",
      "verbal",
      "direct"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The company's annual awards dinner is a _____ event. Guests are asked to wear suits or evening dresses.",
    "options": [
      "formal",
      "concise",
      "verbal",
      "nonverbal"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Friday lunches at our office are relaxed and _____. Staff wear jeans, chat about their weekends, and share pizza together.",
    "options": [
      "written",
      "informal",
      "verbal",
      "concise"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Students who _____ take part in class discussions usually learn faster. They ask questions, share ideas, and volunteer for group tasks.",
    "options": [
      "clearly",
      "politely",
      "actively",
      "openly"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Please speak slowly and _____ when you leave a voicemail. Remember to say your phone number twice so we can call you back.",
    "options": [
      "clearly",
      "actively",
      "politely",
      "openly"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "If a customer is rude to you, stay calm and answer _____. Never argue with guests, even when they are wrong.",
    "options": [
      "actively",
      "politely",
      "clearly",
      "openly"
    ],
    "answer": 1,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "message": {
    "pos": "n.",
    "en_def": "words you send or leave for someone when you cannot talk to them",
    "cn_def": "訊息；留言"
  },
  "conversation": {
    "pos": "n.",
    "en_def": "a talk between two or more people",
    "cn_def": "對話；談話"
  },
  "discussion": {
    "pos": "n.",
    "en_def": "a talk in which people share ideas about a subject",
    "cn_def": "討論"
  },
  "dialogue": {
    "pos": "n.",
    "en_def": "a serious talk between two groups to solve problems or understand each other",
    "cn_def": "對話；交流"
  },
  "interaction": {
    "pos": "n.",
    "en_def": "the act of talking or working with someone",
    "cn_def": "互動；交流"
  },
  "expression": {
    "pos": "n.",
    "en_def": "a look on someone's face that shows a feeling",
    "cn_def": "表情；表達"
  },
  "feedback": {
    "pos": "n.",
    "en_def": "comments about how well someone did something, used to make it better",
    "cn_def": "回饋；意見"
  },
  "response": {
    "pos": "n.",
    "en_def": "an answer or reaction to something",
    "cn_def": "回應；回覆"
  },
  "statement": {
    "pos": "n.",
    "en_def": "something said or written officially to give information",
    "cn_def": "聲明；陳述"
  },
  "tone": {
    "pos": "n.",
    "en_def": "the way a voice sounds that shows how someone feels",
    "cn_def": "語氣；口吻"
  },
  "gesture": {
    "pos": "n.",
    "en_def": "a movement of the hands or head that shows meaning",
    "cn_def": "手勢；姿態"
  },
  "signal": {
    "pos": "n.",
    "en_def": "a sound, action, or sign that gives information",
    "cn_def": "信號；暗號"
  },
  "clarify": {
    "pos": "v.",
    "en_def": "to make something easier to understand",
    "cn_def": "闡明；釐清"
  },
  "explain": {
    "pos": "v.",
    "en_def": "to make something clear by giving details",
    "cn_def": "解釋；說明"
  },
  "inform": {
    "pos": "v.",
    "en_def": "to tell someone facts, often in an official way",
    "cn_def": "通知；告知"
  },
  "notify": {
    "pos": "v.",
    "en_def": "to tell someone officially about something",
    "cn_def": "通知；告知"
  },
  "persuade": {
    "pos": "v.",
    "en_def": "to make someone agree to do something by giving good reasons",
    "cn_def": "說服；勸服"
  },
  "negotiate": {
    "pos": "v.",
    "en_def": "to talk with others in order to reach an agreement",
    "cn_def": "談判；協商"
  },
  "translate": {
    "pos": "v.",
    "en_def": "to change words from one language into another",
    "cn_def": "翻譯"
  },
  "verbal": {
    "pos": "adj.",
    "en_def": "spoken, not written",
    "cn_def": "口頭的；言語的"
  },
  "nonverbal": {
    "pos": "adj.",
    "en_def": "without using words",
    "cn_def": "非語言的"
  },
  "written": {
    "pos": "adj.",
    "en_def": "put down on paper or in a document",
    "cn_def": "書面的"
  },
  "oral": {
    "pos": "adj.",
    "en_def": "spoken, not written",
    "cn_def": "口頭的；口說的"
  },
  "effective": {
    "pos": "adj.",
    "en_def": "working well and giving the result you want",
    "cn_def": "有效的"
  },
  "clear": {
    "pos": "adj.",
    "en_def": "easy to understand",
    "cn_def": "清楚的；明確的"
  },
  "concise": {
    "pos": "adj.",
    "en_def": "short and clear, using only the words that are needed",
    "cn_def": "簡潔的"
  },
  "direct": {
    "pos": "adj.",
    "en_def": "saying what you think in an honest and clear way",
    "cn_def": "直率的；直接的"
  },
  "formal": {
    "pos": "adj.",
    "en_def": "serious and official, following the correct rules",
    "cn_def": "正式的"
  },
  "informal": {
    "pos": "adj.",
    "en_def": "relaxed and friendly, not official",
    "cn_def": "非正式的；輕鬆的"
  },
  "actively": {
    "pos": "adv.",
    "en_def": "in a way that takes part and does things with energy",
    "cn_def": "積極地；主動地"
  },
  "clearly": {
    "pos": "adv.",
    "en_def": "in a way that is easy to see, hear, or understand",
    "cn_def": "清楚地"
  },
  "politely": {
    "pos": "adv.",
    "en_def": "in a kind and respectful way",
    "cn_def": "有禮貌地"
  },
  "openly": {
    "pos": "adv.",
    "en_def": "honestly, without hiding anything",
    "cn_def": "公開地；坦率地"
  }
};

const EXTRA_GLOSSES = {};
