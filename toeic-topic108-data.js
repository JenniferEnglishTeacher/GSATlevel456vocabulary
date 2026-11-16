// Topic 108 Quiz Data: Discussion 討論
// Source word list: https://www.examword.com/group-topic/discussion — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T108 - Discussion 討論",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "talkative",
    "pos": "adj.",
    "cn_def": "健談的；愛說話的",
    "en_def": "liking to talk a lot",
    "sentence": "A: Who should we ask to lead the small-group discussion at the client workshop next week, since we need someone who can keep the conversation going? B: I think Kevin would be perfect, because he is very {{BLANK}} and friendly, and he never lets an awkward silence last long when people are too shy to share their ideas.",
    "cn": "A：下週客戶研習會的小組討論該請誰來帶領？我們需要一個能讓對話持續下去的人。 B：我覺得凱文是最佳人選，因為他非常【健談】又友善，當大家太害羞不敢分享想法時，他從不讓尷尬的沉默持續太久。"
  },
  {
    "word": "mature",
    "pos": "adj.",
    "cn_def": "成熟的；穩重的",
    "en_def": "behaving in a sensible way, like a responsible adult",
    "sentence": "A: Why did the manager choose Linda to handle the angry customer's complaint during yesterday's meeting, even though she is the youngest person on the team? B: Although she is only twenty-four, she is very {{BLANK}} for her age, and she always stays calm and listens carefully before she offers a solution to any problem.",
    "cn": "A：為什麼經理在昨天的會議上選琳達來處理那位生氣客戶的投訴？她明明是團隊裡最年輕的人。 B：雖然她才二十四歲，但以她的年紀來說非常【成熟】，而且她在提出任何問題的解決方法之前，總是保持冷靜並仔細聆聽。"
  },
  {
    "word": "paranormal",
    "pos": "adj.",
    "cn_def": "超自然的；靈異的",
    "en_def": "strange and impossible to explain by science, such as ghosts",
    "sentence": "A: The marketing team is discussing ideas for the new mobile game, so what kind of story do you think young players would enjoy most this year? B: Many of them love mysterious stories about ghosts and strange powers, so I suggest a {{BLANK}} adventure in which players explore an old hotel and solve puzzles that science cannot explain.",
    "cn": "A：行銷團隊正在討論新手機遊戲的點子，你覺得今年年輕玩家最喜歡哪種故事？ B：他們很多人喜歡關於鬼魂和奇異力量的神祕故事，所以我建議做一個【超自然】冒險，讓玩家探索一間老飯店，並解開科學無法解釋的謎題。"
  },
  {
    "word": "cartoon",
    "pos": "n.",
    "cn_def": "卡通；漫畫",
    "en_def": "a funny drawing or a short film made of drawings",
    "sentence": "A: Our new safety video for factory workers is long and rather boring, so how can we make the important rules easier to remember during the training session? B: Why don't we ask the design team to create a short {{BLANK}} with funny characters, since people usually pay more attention to colorful drawings than to long lists of rules?",
    "cn": "A：我們給工廠員工看的新安全影片又長又無聊，在訓練課程中要怎樣讓重要規定更容易記住？ B：我們何不請設計團隊製作一部有趣角色的短篇【卡通】？因為大家通常對彩色圖畫比對一長串規定更專心。"
  },
  {
    "word": "fashion",
    "pos": "n.",
    "cn_def": "時尚；流行",
    "en_def": "the popular style of clothes, hair, etc. at a particular time",
    "sentence": "A: The clothing company wants to open a new store downtown, so what did the managers decide at this morning's planning meeting? B: They agreed to hold a {{BLANK}} show on opening day, because young customers love seeing the latest styles on real models, and it will also attract reporters from local newspapers and websites.",
    "cn": "A：這家服飾公司想在市中心開一家新店，經理們在今天早上的規劃會議上決定了什麼？ B：他們同意在開幕當天舉辦一場【時裝】秀，因為年輕顧客喜歡看真人模特兒展示最新款式，而且這也會吸引當地報紙和網站的記者。"
  },
  {
    "word": "extroverted",
    "pos": "adj.",
    "cn_def": "外向的",
    "en_def": "outgoing and enjoying being with other people",
    "sentence": "A: We are hiring a new event coordinator who must greet guests and speak to large groups, so what kind of person are we looking for? B: We need someone {{BLANK}} who feels comfortable meeting strangers and enjoys being the center of attention, because a quiet person might find the busy conference days very tiring.",
    "cn": "A：我們要招募一位新的活動協調人，他必須接待賓客並對大批群眾說話，我們要找什麼樣的人？ B：我們需要一個【外向】的人，能自在地與陌生人見面並喜歡成為眾人注目的焦點，因為安靜的人可能會覺得忙碌的會議日子非常累人。"
  },
  {
    "word": "affair",
    "pos": "n.",
    "cn_def": "事情；事務；（某種）活動",
    "en_def": "an event or matter, especially one of a particular kind",
    "sentence": "A: How much did the company spend on last month's product launch, and why does the finance director want to discuss it at Friday's meeting? B: The launch turned out to be an expensive {{BLANK}}, because we rented a large hall and hired famous speakers, so the director wants to talk about cheaper options before we plan the next event.",
    "cn": "A：公司上個月的產品發表會花了多少錢？為什麼財務長想在星期五的會議上討論這件事？ B：那場發表會結果是一件花費高昂的【事】，因為我們租了大型會場又請了知名講者，所以財務長想在規劃下一場活動前討論更便宜的方案。"
  },
  {
    "word": "horror",
    "pos": "n.",
    "cn_def": "恐怖；驚恐",
    "en_def": "a strong feeling of fear and shock; stories or films meant to scare people",
    "sentence": "A: The team-building night is on Friday, and someone suggested watching a movie together after dinner, so what kind of film should we choose? B: Let's avoid a {{BLANK}} movie, because several colleagues said they hate scary scenes and blood, and a light comedy would help everyone relax and laugh together after such a stressful month.",
    "cn": "A：團隊建立之夜在星期五，有人建議晚餐後一起看電影，我們該選哪種片？ B：我們避開【恐怖】片吧，因為好幾位同事說他們討厭嚇人的場面和血腥畫面，而輕鬆的喜劇能讓大家在壓力這麼大的一個月後放鬆、一起開懷大笑。"
  },
  {
    "word": "captivating",
    "pos": "adj.",
    "cn_def": "迷人的；引人入勝的",
    "en_def": "so interesting or attractive that it holds your attention",
    "sentence": "A: How was the guest speaker at this morning's sales conference, and did people stay until the end of her presentation? B: Her talk was so {{BLANK}} that nobody looked at their phones for an hour, because she told real stories about her mistakes and showed how she turned a small shop into a national business.",
    "cn": "A：今天早上業務會議的客座講者表現如何？大家有待到她簡報結束嗎？ B：她的演講非常【引人入勝】，整整一小時都沒人看手機，因為她講了自己犯錯的真實故事，並說明她如何把一家小店發展成全國性企業。"
  },
  {
    "word": "conscious",
    "pos": "adj.",
    "cn_def": "意識到的；察覺的",
    "en_def": "noticing or knowing about something",
    "sentence": "A: Why did the new manager change the way we run our weekly team meetings, and why does everyone now get two minutes to speak? B: She is very {{BLANK}} of the fact that quieter employees rarely share their opinions, so she wants to make sure that every person has a fair chance to be heard.",
    "cn": "A：新經理為什麼改變我們每週團隊會議的進行方式？為什麼現在每個人都有兩分鐘的發言時間？ B：她非常【意識到】比較安靜的員工很少分享意見，所以她想確保每個人都有公平的機會被聽見。"
  },
  {
    "word": "convincing",
    "pos": "adj.",
    "cn_def": "有說服力的；令人信服的",
    "en_def": "making you believe that something is true or right",
    "sentence": "A: Did the finance department accept your proposal to buy new laptops for the whole sales team during this afternoon's budget meeting? B: Yes, they agreed in the end, because I gave them a {{BLANK}} reason with clear numbers that showed how much time and money the new machines would save us over the next three years.",
    "cn": "A：財務部門在今天下午的預算會議上接受你為整個業務團隊購買新筆電的提案了嗎？ B：有，他們最後同意了，因為我給了他們一個【有說服力的】理由，並用清楚的數字顯示新電腦在未來三年能幫我們省下多少時間和金錢。"
  },
  {
    "word": "compare",
    "pos": "v.",
    "cn_def": "比較",
    "en_def": "to look at two or more things to see how they are similar or different",
    "sentence": "A: We have received three different offers for the new office printers, so how should we decide which company to choose at Thursday's meeting? B: Let's make a simple chart to {{BLANK}} the prices, the speed and the repair services of each machine, so everyone can see the differences clearly before we vote.",
    "cn": "A：我們收到了三份新辦公室印表機的不同報價，星期四開會時該怎麼決定選哪家公司？ B：我們做一張簡單的圖表來【比較】每台機器的價格、速度和維修服務，這樣大家在投票前就能清楚看出差異。"
  },
  {
    "word": "brutally",
    "pos": "adv.",
    "cn_def": "殘酷地；毫不留情地",
    "en_def": "in a very direct and harsh way that may hurt feelings",
    "sentence": "A: I asked Mark to give me feedback on my presentation before the client meeting, but why did he say so many negative things about it? B: He can be {{BLANK}} honest sometimes, but he only wants to help you, and if you fix the weak points he mentioned, your talk will be much stronger tomorrow.",
    "cn": "A：我在客戶會議前請馬克給我的簡報一些意見，但他為什麼說了那麼多負面的話？ B：他有時候會坦白得【毫不留情】，但他只是想幫你，如果你修正他提到的弱點，你明天的報告會好很多。"
  },
  {
    "word": "embarrassed",
    "pos": "adj.",
    "cn_def": "尷尬的；難為情的",
    "en_def": "feeling shy, ashamed or uncomfortable in front of others",
    "sentence": "A: Why did Tom leave the conference room so quickly after the meeting ended, and is he upset about something that happened? B: He felt very {{BLANK}} because he called the new client by the wrong name twice during the discussion, but I told him that everyone makes small mistakes like that sometimes.",
    "cn": "A：湯姆為什麼會議一結束就那麼快離開會議室？他是對發生的事情感到不高興嗎？ B：他覺得非常【尷尬】，因為他在討論中兩次叫錯新客戶的名字，但我告訴他每個人有時候都會犯這種小錯。"
  },
  {
    "word": "hesitate",
    "pos": "v.",
    "cn_def": "猶豫；遲疑",
    "en_def": "to stop or wait before doing something because you are unsure",
    "sentence": "A: I have some ideas about how to reduce our shipping costs, but I am new here, so is it all right to share them at tomorrow's team meeting? B: Of course, please don't {{BLANK}} to speak up, because our manager always welcomes fresh opinions, and new employees often notice problems that the rest of us have stopped seeing.",
    "cn": "A：我對如何降低運費有些想法，但我是新來的，可以在明天的團隊會議上分享嗎？ B：當然可以，請不要【猶豫】，儘管發言，因為我們經理總是歡迎新的意見，而新員工常會注意到我們其他人已經視而不見的問題。"
  },
  {
    "word": "habitually",
    "pos": "adv.",
    "cn_def": "習慣性地；慣常地",
    "en_def": "as a usual habit; regularly",
    "sentence": "A: Why does the director always start our Monday meetings ten minutes late, and should we say something to her about it? B: She {{BLANK}} checks her email and answers urgent questions from overseas customers first thing every Monday, so I think we should simply move the meeting to nine-fifteen instead of complaining.",
    "cn": "A：為什麼主管總是讓星期一的會議晚十分鐘開始？我們應該跟她說些什麼嗎？ B：她每週一早上一來都【習慣性地】先查看電子郵件並回覆海外客戶的緊急問題，所以我覺得我們乾脆把會議改到九點十五分，而不是抱怨。"
  },
  {
    "word": "stick",
    "pos": "v.",
    "cn_def": "堅持；遵守（stick to）",
    "en_def": "to keep following a plan, decision or rule without changing it",
    "sentence": "A: The discussion about the new advertising plan took almost three hours yesterday, so has the team finally made a decision about the budget? B: Yes, after looking at several other ideas, we decided to {{BLANK}} to the original plan, because it is cheaper and the managers believe it will still reach enough young customers.",
    "cn": "A：昨天關於新廣告計畫的討論花了將近三個小時，團隊終於對預算做出決定了嗎？ B：有，在看過其他幾個點子之後，我們決定【堅持】原本的計畫，因為它比較便宜，而且經理們相信它仍然能接觸到足夠多的年輕顧客。"
  },
  {
    "word": "seldomly",
    "pos": "adv.",
    "cn_def": "很少；不常",
    "en_def": "not often; rarely (a less common form of seldom)",
    "sentence": "A: How often does the regional manager join our weekly sales discussions, and should we prepare a special report in case she comes? B: She {{BLANK}} attends our meetings because she travels to other branches most of the month, but it is still a good idea to have the latest numbers ready just in case.",
    "cn": "A：區域經理多久參加一次我們每週的業務討論？我們要準備一份特別報告以防她出席嗎？ B：她【很少】參加我們的會議，因為她一個月大部分時間都在其他分店出差，不過還是把最新數字準備好以防萬一比較好。"
  },
  {
    "word": "randomly",
    "pos": "adv.",
    "cn_def": "隨機地；任意地",
    "en_def": "by chance, without any plan or order",
    "sentence": "A: Our weekly brainstorming meetings always have the same three people talking, so how can we get the others to join the discussion? B: Next time, let's {{BLANK}} choose names from a box and ask each person to share one idea, so everyone has to prepare and nobody can stay silent for the whole hour.",
    "cn": "A：我們每週的腦力激盪會議總是同樣三個人在講話，要怎麼讓其他人加入討論？ B：下次我們從箱子裡【隨機】抽名字，請每個人分享一個想法，這樣大家都得事先準備，也沒有人能整整一小時都不說話。"
  },
  {
    "word": "improve",
    "pos": "v.",
    "cn_def": "改善；改進",
    "en_def": "to make something better",
    "sentence": "A: Customers have complained that our online ordering system is slow and confusing, so what did the IT team suggest at the meeting? B: They plan to {{BLANK}} the website by making the menu simpler and adding a faster payment page, and they hope to finish the changes before the busy holiday season starts in December.",
    "cn": "A：顧客抱怨我們的線上訂購系統又慢又難用，資訊團隊在會議上提出了什麼建議？ B：他們計畫透過簡化選單和新增更快速的付款頁面來【改善】網站，並希望在十二月忙碌的假期旺季開始前完成這些修改。"
  },
  {
    "word": "critically",
    "pos": "adv.",
    "cn_def": "批判性地；嚴格審視地",
    "en_def": "in a careful way that looks for faults and judges whether something is good",
    "sentence": "A: The new marketing report is ready, but before we present it to the board on Monday, what should our team do with it? B: Each of us should read it {{BLANK}} and look for weak points, missing data or unclear charts, because the board members will ask difficult questions and we need to have good answers ready.",
    "cn": "A：新的行銷報告已經完成了，但在星期一向董事會報告之前，我們團隊應該怎麼處理它？ B：我們每個人都應該【批判性地】閱讀它，找出弱點、遺漏的數據或不清楚的圖表，因為董事們會問困難的問題，我們需要準備好完善的答案。"
  },
  {
    "word": "diligently",
    "pos": "adv.",
    "cn_def": "勤奮地；認真地",
    "en_def": "in a hard-working and careful way",
    "sentence": "A: How did the new assistant manage to finish the entire customer survey report in only one week, when it usually takes us almost a month? B: She worked very {{BLANK}} every day, checked each answer carefully and asked questions at our team discussions whenever something was unclear, so the director was really impressed with her effort.",
    "cn": "A：新來的助理是怎麼只用一週就完成整份顧客問卷報告的？我們通常要花將近一個月。 B：她每天都非常【勤奮地】工作，仔細檢查每份回答，並在團隊討論中遇到不清楚的地方就提問，所以主管對她的努力印象深刻。"
  }
];

const MCQS = [
  {
    "q": "The new receptionist is very _____ and loves chatting with visitors. Some guests enjoy her stories, but others just want their keys quickly.",
    "options": [
      "talkative",
      "paranormal",
      "conscious",
      "convincing"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Although the intern is only nineteen, he handled the difficult client in a calm and _____ way. His supervisor praised him at the meeting.",
    "options": [
      "paranormal",
      "embarrassed",
      "mature",
      "conscious"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The television station is producing a new series about haunted houses. Each episode investigates _____ events that people claim to have seen.",
    "options": [
      "mature",
      "paranormal",
      "convincing",
      "talkative"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The children's museum hired an artist to draw a friendly _____ mascot. The smiling bear now appears on all of its tickets and posters.",
    "options": [
      "horror",
      "affair",
      "fashion",
      "cartoon"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The magazine's editor travels to Paris and Milan every spring. She reports on the latest _____ trends for the summer clothing season.",
    "options": [
      "cartoon",
      "horror",
      "fashion",
      "affair"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Sales positions often suit _____ people who enjoy meeting strangers. Quiet employees may prefer jobs in research or accounting instead.",
    "options": [
      "extroverted",
      "paranormal",
      "embarrassed",
      "conscious"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The company's anniversary dinner will be a formal _____ with live music. All guests are asked to wear business suits or evening dresses.",
    "options": [
      "cartoon",
      "fashion",
      "horror",
      "affair"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The cinema is showing a terrifying _____ film at midnight on Halloween. Viewers under eighteen will not be allowed into the theater.",
    "options": [
      "affair",
      "horror",
      "fashion",
      "compare"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The tour guide told such _____ stories about the old castle that nobody wanted to leave. Several visitors even booked a second tour.",
    "options": [
      "embarrassed",
      "conscious",
      "mature",
      "captivating"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Many shoppers are now more _____ of the environment when they buy products. Therefore, the store has stopped using plastic bags.",
    "options": [
      "talkative",
      "conscious",
      "captivating",
      "paranormal"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The lawyer presented _____ evidence that the contract had been broken. As a result, the judge decided the case in her client's favor.",
    "options": [
      "convincing",
      "embarrassed",
      "talkative",
      "extroverted"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Before booking the hotel, please _____ the prices on several travel websites. You may find the same room for much less money.",
    "options": [
      "hesitate",
      "stick",
      "compare",
      "improve"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The online review of the new restaurant was _____ honest about the cold food and slow service. The owner apologized publicly the next day.",
    "options": [
      "seldomly",
      "brutally",
      "diligently",
      "randomly"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The director felt _____ when his phone rang loudly during the quiet ceremony. He quickly turned it off and apologized to the speaker.",
    "options": [
      "captivating",
      "convincing",
      "paranormal",
      "embarrassed"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "If you have any questions about your order, please do not _____ to contact our customer service team. We are available twenty-four hours a day.",
    "options": [
      "compare",
      "improve",
      "hesitate",
      "stick"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Employees who _____ arrive late without a good reason may receive a written warning. Please inform your supervisor if you will be delayed.",
    "options": [
      "habitually",
      "brutally",
      "critically",
      "diligently"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The project is already two weeks behind. From now on, all team members must _____ to the schedule and finish each task on time.",
    "options": [
      "hesitate",
      "compare",
      "stick",
      "improve"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The owner of the small bakery _____ takes a vacation because nobody can replace her. She has not had a real holiday in years.",
    "options": [
      "seldomly",
      "brutally",
      "randomly",
      "critically"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The survey will be sent to five hundred _____ selected customers. Their answers will help us understand how people feel about our service.",
    "options": [
      "brutally",
      "habitually",
      "diligently",
      "randomly"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The hotel is installing faster Wi-Fi in every room. Management hopes this will _____ guest satisfaction and attract more business travelers.",
    "options": [
      "hesitate",
      "improve",
      "stick",
      "compare"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Good managers should look _____ at their own decisions and learn from their mistakes. This helps the whole team grow stronger.",
    "options": [
      "critically",
      "seldomly",
      "randomly",
      "brutally"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The accounting staff worked _____ through the weekend to finish the annual report. The director thanked them with a team lunch on Monday.",
    "options": [
      "brutally",
      "seldomly",
      "diligently",
      "randomly"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Our tour guide was friendly and _____, so the long bus ride passed quickly. She shared funny stories about every town we passed.",
    "options": [
      "conscious",
      "talkative",
      "paranormal",
      "embarrassed"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "This film contains violence and strong language and is meant for _____ audiences only. Parents should not bring young children to see it.",
    "options": [
      "talkative",
      "captivating",
      "embarrassed",
      "mature"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The sales representative gave a _____ demonstration of the new software. By the end, most of the clients were ready to sign the contract.",
    "options": [
      "paranormal",
      "convincing",
      "embarrassed",
      "conscious"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Researchers will _____ this year's survey results with last year's data. They want to see whether customer satisfaction has changed.",
    "options": [
      "hesitate",
      "stick",
      "improve",
      "compare"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Many customers _____ to buy expensive electronics online because they worry about damage. Free returns can help them feel more confident.",
    "options": [
      "hesitate",
      "compare",
      "improve",
      "stick"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The factory installed new machines to _____ the quality of its products. Since then, customer complaints have dropped by half.",
    "options": [
      "hesitate",
      "stick",
      "improve",
      "fashion"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Students in the business course learn to think _____ about advertising messages. They question claims that seem too good to be true.",
    "options": [
      "brutally",
      "seldomly",
      "randomly",
      "critically"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The new intern studied the product manual _____ and memorized every feature. Within a month, she could answer almost any customer question.",
    "options": [
      "brutally",
      "diligently",
      "randomly",
      "seldomly"
    ],
    "answer": 1,
    "vocabIndex": 21
  }
];

const LOOKUP = {
  "talkative": {
    "pos": "adj.",
    "en_def": "liking to talk a lot",
    "cn_def": "健談的；愛說話的"
  },
  "mature": {
    "pos": "adj.",
    "en_def": "behaving in a sensible way, like a responsible adult",
    "cn_def": "成熟的；穩重的"
  },
  "paranormal": {
    "pos": "adj.",
    "en_def": "strange and impossible to explain by science, such as ghosts",
    "cn_def": "超自然的；靈異的"
  },
  "cartoon": {
    "pos": "n.",
    "en_def": "a funny drawing or a short film made of drawings",
    "cn_def": "卡通；漫畫"
  },
  "fashion": {
    "pos": "n.",
    "en_def": "the popular style of clothes, hair, etc. at a particular time",
    "cn_def": "時尚；流行"
  },
  "extroverted": {
    "pos": "adj.",
    "en_def": "outgoing and enjoying being with other people",
    "cn_def": "外向的"
  },
  "affair": {
    "pos": "n.",
    "en_def": "an event or matter, especially one of a particular kind",
    "cn_def": "事情；事務；（某種）活動"
  },
  "horror": {
    "pos": "n.",
    "en_def": "a strong feeling of fear and shock; stories or films meant to scare people",
    "cn_def": "恐怖；驚恐"
  },
  "captivating": {
    "pos": "adj.",
    "en_def": "so interesting or attractive that it holds your attention",
    "cn_def": "迷人的；引人入勝的"
  },
  "conscious": {
    "pos": "adj.",
    "en_def": "noticing or knowing about something",
    "cn_def": "意識到的；察覺的"
  },
  "convincing": {
    "pos": "adj.",
    "en_def": "making you believe that something is true or right",
    "cn_def": "有說服力的；令人信服的"
  },
  "compare": {
    "pos": "v.",
    "en_def": "to look at two or more things to see how they are similar or different",
    "cn_def": "比較"
  },
  "brutally": {
    "pos": "adv.",
    "en_def": "in a very direct and harsh way that may hurt feelings",
    "cn_def": "殘酷地；毫不留情地"
  },
  "embarrassed": {
    "pos": "adj.",
    "en_def": "feeling shy, ashamed or uncomfortable in front of others",
    "cn_def": "尷尬的；難為情的"
  },
  "hesitate": {
    "pos": "v.",
    "en_def": "to stop or wait before doing something because you are unsure",
    "cn_def": "猶豫；遲疑"
  },
  "habitually": {
    "pos": "adv.",
    "en_def": "as a usual habit; regularly",
    "cn_def": "習慣性地；慣常地"
  },
  "stick": {
    "pos": "v.",
    "en_def": "to keep following a plan, decision or rule without changing it",
    "cn_def": "堅持；遵守（stick to）"
  },
  "seldomly": {
    "pos": "adv.",
    "en_def": "not often; rarely (a less common form of seldom)",
    "cn_def": "很少；不常"
  },
  "randomly": {
    "pos": "adv.",
    "en_def": "by chance, without any plan or order",
    "cn_def": "隨機地；任意地"
  },
  "improve": {
    "pos": "v.",
    "en_def": "to make something better",
    "cn_def": "改善；改進"
  },
  "critically": {
    "pos": "adv.",
    "en_def": "in a careful way that looks for faults and judges whether something is good",
    "cn_def": "批判性地；嚴格審視地"
  },
  "diligently": {
    "pos": "adv.",
    "en_def": "in a hard-working and careful way",
    "cn_def": "勤奮地；認真地"
  }
};

const EXTRA_GLOSSES = {};
