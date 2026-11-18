// Topic 393 Quiz Data: Talk 談話
// Source word list: https://www.examword.com/group-topic/talk — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T393 - Talk 談話",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "speak",
    "pos": "v.",
    "cn_def": "說；說（某種語言）",
    "en_def": "to use your voice to say words, or to know and use a language",
    "sentence": "A: Our clients from Osaka will arrive at the office on Monday morning, but I'm worried because most of our sales team doesn't know any Japanese at all. B: Don't worry, Kenji from the accounting department can {{BLANK}} Japanese fluently, so I've asked him to join the meeting and help everyone understand each other.",
    "cn": "A：我們大阪的客戶星期一早上會到公司，但我很擔心，因為我們業務團隊大部分的人完全不懂日文。 B：別擔心，會計部的健二能流利地【說】日文，所以我已經請他參加會議，幫助大家互相理解。"
  },
  {
    "word": "conversation",
    "pos": "n.",
    "cn_def": "對話；交談",
    "en_def": "a talk between two or more people",
    "sentence": "A: How did you find out that the company across the street is looking for a new marketing manager with experience in online advertising? B: I had a long {{BLANK}} with their office manager while we were both waiting in line at the coffee shop, and she told me they want someone who can start next month.",
    "cn": "A：你怎麼知道對街那家公司正在找一位有網路廣告經驗的新行銷經理？ B：我們兩個在咖啡店排隊時，我和他們的辦公室經理有一段很長的【交談】，她告訴我他們想找下個月就能上班的人。"
  },
  {
    "word": "discussion",
    "pos": "n.",
    "cn_def": "討論",
    "en_def": "a talk in which people share ideas about a subject",
    "sentence": "A: Have the department heads decided whether we will move to the new office building downtown before the end of this year? B: Not yet, because the {{BLANK}} at yesterday's meeting lasted almost three hours, and several managers still have serious concerns about the higher rent and the longer commute for staff.",
    "cn": "A：各部門主管決定我們今年底前是否要搬到市中心的新辦公大樓了嗎？ B：還沒，因為昨天會議上的【討論】持續了將近三個小時，而且有幾位經理對較高的租金和員工較長的通勤時間仍有很大的疑慮。"
  },
  {
    "word": "chat",
    "pos": "v.",
    "cn_def": "閒聊；聊天",
    "en_def": "to talk in a friendly, informal way",
    "sentence": "A: Why were you standing near the elevator for so long after lunch when the report was due at two o'clock? B: I ran into an old classmate who now works on the fifth floor, so we stopped to {{BLANK}} for a few minutes about our families and our plans for the holidays.",
    "cn": "A：報告兩點就要交了，你午餐後為什麼在電梯旁站了那麼久？ B：我遇到一位現在在五樓上班的老同學，所以我們停下來【聊】了幾分鐘，聊我們的家人和假期計畫。"
  },
  {
    "word": "communicate",
    "pos": "v.",
    "cn_def": "溝通；傳達",
    "en_def": "to share information or ideas with other people",
    "sentence": "A: Now that half of our design team works from home in different cities, how do you make sure everyone knows about changes to the project schedule? B: We use a shared online platform and a weekly video call, which helps us {{BLANK}} clearly and quickly, even when people are in different time zones.",
    "cn": "A：既然我們設計團隊有一半的人在不同城市在家工作，你們怎麼確保大家都知道專案時程的變動？ B：我們使用共用的線上平台和每週一次的視訊會議，這幫助我們清楚又快速地【溝通】，即使大家在不同的時區也一樣。"
  },
  {
    "word": "communication",
    "pos": "n.",
    "cn_def": "溝通；聯繫",
    "en_def": "the sharing of information between people or groups",
    "sentence": "A: Why did the customer complain that nobody told her the delivery of her new sofa would be delayed by two weeks? B: There was a problem with {{BLANK}} between our warehouse and the customer service team, so the message about the delay was never sent to her by email or phone.",
    "cn": "A：為什麼那位顧客抱怨沒有人告訴她，她的新沙發會延遲兩週送達？ B：我們的倉庫和客服團隊之間的【溝通】出了問題，所以延遲的消息一直沒有透過電子郵件或電話通知她。"
  },
  {
    "word": "express",
    "pos": "v.",
    "cn_def": "表達",
    "en_def": "to show a feeling or idea in words or actions",
    "sentence": "A: The new manager seems very quiet during meetings, so do you think she is unhappy with the way our team handles projects? B: Not at all, she just prefers to {{BLANK}} her ideas in writing, so she usually sends a detailed email after each meeting with her thoughts and suggestions.",
    "cn": "A：新經理開會時似乎很安靜，你覺得她是不是對我們團隊處理專案的方式不滿意？ B：完全不是，她只是比較喜歡用書面方式【表達】她的想法，所以她通常在每次會議後寄一封詳細的電子郵件，說明她的想法和建議。"
  },
  {
    "word": "mention",
    "pos": "v.",
    "cn_def": "提到；提及",
    "en_def": "to speak or write about something briefly",
    "sentence": "A: Did the hotel receptionist tell you anything special about breakfast when you checked in last night after your long flight? B: Yes, she happened to {{BLANK}} that breakfast is served on the rooftop terrace from six to ten, and guests attending the conference can eat there for free.",
    "cn": "A：你昨晚長途飛行後辦理入住時，飯店櫃檯人員有告訴你關於早餐的特別事項嗎？ B：有，她剛好【提到】早餐在頂樓露台供應，時間是六點到十點，而且參加會議的客人可以免費在那裡用餐。"
  },
  {
    "word": "state",
    "pos": "v.",
    "cn_def": "陳述；明確說明",
    "en_def": "to say or write something clearly and formally",
    "sentence": "A: How do we know whether employees are allowed to bring their own laptops to the office and connect them to the company network? B: The IT manager will {{BLANK}} the rules clearly at Monday's training session, but as far as I know, personal laptops cannot be connected to the main network for security reasons.",
    "cn": "A：我們怎麼知道員工是否可以帶自己的筆電來公司並連上公司網路？ B：資訊經理會在星期一的訓練課程中清楚【說明】規定，不過據我所知，基於安全考量，個人筆電不能連上主要網路。"
  },
  {
    "word": "announce",
    "pos": "v.",
    "cn_def": "宣布；公布",
    "en_def": "to tell people something officially and publicly",
    "sentence": "A: When will the company tell the public about the new smartphone that our engineers have been developing for the past two years? B: The CEO plans to {{BLANK}} the product at a large press conference in Taipei next Thursday, and reporters from all over Asia have already been invited to attend.",
    "cn": "A：公司什麼時候會向大眾公開我們工程師過去兩年一直在開發的新智慧型手機？ B：執行長計畫在下週四於台北舉行的大型記者會上【宣布】這項產品，而且來自亞洲各地的記者都已經受邀出席。"
  },
  {
    "word": "explain",
    "pos": "v.",
    "cn_def": "解釋；說明",
    "en_def": "to make something clear or easy to understand",
    "sentence": "A: I don't understand why our electricity bill for the factory was almost twice as high last month as it was in the spring. B: Let me {{BLANK}} the reason: the air conditioners ran day and night during the heat wave, and we also added a second shift to finish a large order on time.",
    "cn": "A：我不明白為什麼工廠上個月的電費幾乎是春天時的兩倍。 B：讓我【解釋】原因：熱浪期間冷氣日夜運轉，而且我們還增加了第二個班次，以便準時完成一筆大訂單。"
  },
  {
    "word": "describe",
    "pos": "v.",
    "cn_def": "描述；形容",
    "en_def": "to say what someone or something is like",
    "sentence": "A: The airline staff member at the service counter wants to know what your missing suitcase looks like so they can search the airport for it. B: I can {{BLANK}} it easily, because it's a large dark blue suitcase with a red ribbon on the handle and a sticker of a small airplane on the side.",
    "cn": "A：服務櫃檯的航空公司人員想知道你遺失的行李箱長什麼樣子，這樣他們才能在機場裡尋找。 B：我可以很容易地【描述】它，因為那是一個大的深藍色行李箱，把手上綁著紅色緞帶，側面貼著一張小飛機貼紙。"
  },
  {
    "word": "persuade",
    "pos": "v.",
    "cn_def": "說服",
    "en_def": "to make someone agree to do something by giving reasons",
    "sentence": "A: Our biggest client wants to cancel their contract because they think our prices have become too expensive this year. B: I'll visit their office tomorrow and try to {{BLANK}} them to stay by offering a ten percent discount and free delivery on all orders over five hundred dollars.",
    "cn": "A：我們最大的客戶想取消合約，因為他們認為我們今年的價格變得太貴了。 B：我明天會去拜訪他們的辦公室，試著提供九折優惠以及五百美元以上訂單免運費，來【說服】他們留下來。"
  },
  {
    "word": "argue",
    "pos": "v.",
    "cn_def": "爭論；爭吵",
    "en_def": "to speak angrily to someone because you disagree",
    "sentence": "A: Why did the two project managers leave the meeting room looking so angry and upset this morning? B: They began to {{BLANK}} loudly about who should get the extra budget for next year, and the director finally had to stop the meeting and ask them to calm down.",
    "cn": "A：今天早上那兩位專案經理為什麼看起來那麼生氣又不高興地離開會議室？ B：他們開始大聲【爭吵】明年額外的預算應該給誰，最後主管不得不中止會議，請他們冷靜下來。"
  },
  {
    "word": "debate",
    "pos": "v.",
    "cn_def": "辯論；討論",
    "en_def": "to discuss a subject formally, with different opinions",
    "sentence": "A: Has the city council made a final decision about building the new parking garage next to the train station? B: Not yet, council members will {{BLANK}} the plan again next week, because some of them believe the money should be spent on more bus routes instead of more cars.",
    "cn": "A：市議會對於在火車站旁興建新停車場的事做出最後決定了嗎？ B：還沒有，議員們下週會再次【辯論】這項計畫，因為其中一些人認為這筆錢應該用在增加公車路線，而不是給更多的汽車。"
  },
  {
    "word": "negotiate",
    "pos": "v.",
    "cn_def": "談判；協商",
    "en_def": "to discuss something in order to reach an agreement",
    "sentence": "A: The landlord wants to raise the rent for our office by fifteen percent when the lease ends in March. B: Our office manager is going to {{BLANK}} with him next week, and she hopes he will accept a smaller increase if we agree to sign a longer, five-year contract.",
    "cn": "A：房東想在三月租約到期時，把我們辦公室的租金調漲百分之十五。 B：我們的辦公室經理下週會和他【協商】，她希望如果我們同意簽一份更長的五年合約，他會接受較小的漲幅。"
  },
  {
    "word": "whisper",
    "pos": "v.",
    "cn_def": "低聲說；耳語",
    "en_def": "to speak very quietly",
    "sentence": "A: Why did everyone in the back of the conference hall start laughing quietly during the speech by the chairman? B: Someone's phone began playing loud music, so people had to {{BLANK}} to each other to find out whose it was without disturbing the speaker on the stage.",
    "cn": "A：董事長演講時，為什麼會議廳後面的每個人都開始偷偷地笑？ B：有人的手機開始播放很大聲的音樂，所以大家只好互相【低聲交談】，想知道是誰的手機，又不打擾台上的講者。"
  },
  {
    "word": "shout",
    "pos": "v.",
    "cn_def": "大喊；叫喊",
    "en_def": "to say something very loudly",
    "sentence": "A: How did the workers in the noisy factory hear the fire alarm instructions when the machines were still running? B: The supervisor had to {{BLANK}} as loudly as possible and wave his arms, because the alarm was too quiet, so we will install a much louder system next month.",
    "cn": "A：機器還在運轉時，吵雜工廠裡的工人是怎麼聽到火災警報指示的？ B：主管必須盡可能大聲【喊叫】並揮動手臂，因為警報聲太小了，所以我們下個月會裝設一套更大聲的系統。"
  },
  {
    "word": "murmur",
    "pos": "v.",
    "cn_def": "低聲說；喃喃地說",
    "en_def": "to say something in a quiet, low voice that is hard to hear",
    "sentence": "A: Did the staff accept the news that the annual bonus would be smaller this year because of lower sales? B: Most people just began to {{BLANK}} quietly among themselves while the manager was speaking, but nobody actually stood up to complain or ask any difficult questions.",
    "cn": "A：員工接受了今年因為銷售較差而年終獎金會變少的消息嗎？ B：經理說話時，大部分的人只是開始彼此小聲【低語】，但沒有人真的站起來抱怨或提出任何尖銳的問題。"
  },
  {
    "word": "respond",
    "pos": "v.",
    "cn_def": "回應；回覆",
    "en_def": "to answer or react to something",
    "sentence": "A: A customer sent an angry email this morning saying that the printer she bought from our store stopped working after only two days. B: I'll {{BLANK}} to her message within the hour, apologize for the trouble, and offer to replace the printer or give her a full refund, whichever she prefers.",
    "cn": "A：一位顧客今天早上寄來一封很生氣的電子郵件，說她在我們店裡買的印表機才兩天就壞了。 B：我會在一小時內【回應】她的訊息，為造成的麻煩道歉，並提供更換印表機或全額退款，看她比較喜歡哪一種。"
  },
  {
    "word": "reply",
    "pos": "v.",
    "cn_def": "回覆；答覆",
    "en_def": "to answer someone in speech or writing",
    "sentence": "A: Have you heard back from the hotel about our request to reserve twenty rooms for the sales conference in December? B: Not yet, but their booking office promised to {{BLANK}} by Friday, so I'll call them on Monday morning if I still haven't received an email from them.",
    "cn": "A：關於我們要為十二月的業務會議預訂二十間房的要求，飯店有回音了嗎？ B：還沒有，但他們的訂房部承諾星期五前會【回覆】，所以如果我到時還沒收到他們的電子郵件，我星期一早上會打電話給他們。"
  },
  {
    "word": "comment",
    "pos": "n.",
    "cn_def": "評論；意見",
    "en_def": "something you say or write that gives an opinion",
    "sentence": "A: What did the director think about the first draft of the new advertising campaign that we showed her yesterday? B: She liked the colorful design, but she made one {{BLANK}} about the slogan, saying it was too long and might be difficult for customers to remember.",
    "cn": "A：主管對我們昨天給她看的新廣告活動初稿有什麼看法？ B：她喜歡那個色彩豐富的設計，但她對標語提出了一個【意見】，說它太長了，顧客可能很難記住。"
  },
  {
    "word": "opinion",
    "pos": "n.",
    "cn_def": "意見；看法",
    "en_def": "what you think or believe about something",
    "sentence": "A: Before we choose a caterer for the company's anniversary party, should we ask the staff what kind of food they would like? B: Yes, let's send a short online survey so that everyone can share their {{BLANK}}, and then we can pick the menu that most people enjoy.",
    "cn": "A：在我們為公司週年慶派對挑選外燴廠商之前，要不要問問員工他們想吃什麼樣的食物？ B：好，我們寄一份簡短的線上問卷，讓大家都能分享他們的【意見】，然後我們就能選出大多數人喜歡的菜單。"
  },
  {
    "word": "suggest",
    "pos": "v.",
    "cn_def": "建議；提議",
    "en_def": "to tell someone your idea about what they should do",
    "sentence": "A: Our team has been working late every night this week, and everyone looks exhausted and stressed about the deadline. B: I'd like to {{BLANK}} that we order dinner for everyone tonight and ask the manager whether we can move the deadline back by two or three days.",
    "cn": "A：我們團隊這週每天晚上都加班，每個人看起來都很疲累，也對截止期限感到壓力很大。 B：我想【建議】今晚我們幫大家訂晚餐，並且問經理是否能把截止期限延後兩三天。"
  },
  {
    "word": "advise",
    "pos": "v.",
    "cn_def": "勸告；建議",
    "en_def": "to tell someone what you think they should do",
    "sentence": "A: I'm thinking about investing some of my savings in the new technology company that everyone at the office is talking about. B: I would {{BLANK}} you to speak with a financial expert first, because new companies can be risky and you could lose a lot of money very quickly.",
    "cn": "A：我在考慮把一部分存款投資在辦公室裡大家都在談論的那家新科技公司。 B：我會【建議】你先和理財專家談談，因為新公司可能有風險，你可能很快就賠掉很多錢。"
  },
  {
    "word": "confess",
    "pos": "v.",
    "cn_def": "坦白；承認",
    "en_def": "to admit that you did something wrong",
    "sentence": "A: Who accidentally deleted the important sales report from the shared folder on the company server last night? B: The new intern came to my office this morning to {{BLANK}} that she made the mistake, and luckily our IT team was able to restore the file from a backup.",
    "cn": "A：昨晚是誰不小心把重要的銷售報告從公司伺服器的共用資料夾裡刪掉了？ B：新來的實習生今天早上到我辦公室【坦承】是她犯的錯，幸好我們的資訊團隊能從備份中把檔案復原。"
  },
  {
    "word": "gossip",
    "pos": "n.",
    "cn_def": "八卦；閒話",
    "en_def": "talk about other people's private lives that may not be true",
    "sentence": "A: Is it true that our company is going to close the branch office in Kaohsiung and move everyone to Taipei? B: That's just {{BLANK}} that people have been spreading in the break room; the manager told me yesterday there are no plans to close any office this year.",
    "cn": "A：我們公司真的要關閉高雄分公司，把所有人調到台北嗎？ B：那只是大家在休息室裡散播的【八卦】；經理昨天告訴我，今年沒有要關閉任何辦公室的計畫。"
  },
  {
    "word": "lecture",
    "pos": "n.",
    "cn_def": "演講；講座",
    "en_def": "a talk to a group of people about a subject, often at a university",
    "sentence": "A: Are you going to attend the event about online marketing that the university is holding in the main hall on Saturday afternoon? B: Yes, a famous professor from Singapore is giving a {{BLANK}} on how small businesses can use social media to attract new customers, and my boss is paying for the ticket.",
    "cn": "A：你會去參加大學星期六下午在大禮堂舉辦的網路行銷活動嗎？ B：會，一位來自新加坡的知名教授要發表一場【講座】，談小型企業如何利用社群媒體吸引新顧客，而且我老闆會幫我付票錢。"
  },
  {
    "word": "presentation",
    "pos": "n.",
    "cn_def": "簡報；報告",
    "en_def": "a talk that shows and explains information to a group",
    "sentence": "A: You look really nervous this morning, so is something important happening at work today? B: I have to give a {{BLANK}} to our new investors at ten o'clock, and I'll be showing them our sales results, our plans for next year, and the design of our new product.",
    "cn": "A：你今天早上看起來真的很緊張，今天工作上有什麼重要的事嗎？ B：我十點要對我們的新投資人做【簡報】，我會給他們看我們的銷售成績、明年的計畫，以及我們新產品的設計。"
  },
  {
    "word": "interrupt",
    "pos": "v.",
    "cn_def": "打斷；打擾",
    "en_def": "to stop someone while they are speaking or doing something",
    "sentence": "A: Why didn't you ask the sales director your question about the new commission system during the meeting? B: She was explaining the yearly targets in detail, and I didn't want to {{BLANK}} her in front of the whole team, so I'll send her an email after lunch instead.",
    "cn": "A：你為什麼沒有在會議中向業務總監提出關於新佣金制度的問題？ B：她當時正在詳細說明年度目標，我不想在整個團隊面前【打斷】她，所以我會在午餐後改寄電子郵件給她。"
  },
  {
    "word": "clarify",
    "pos": "v.",
    "cn_def": "釐清；闡明",
    "en_def": "to make something easier to understand by explaining it",
    "sentence": "A: Some employees are confused about whether the new holiday policy allows them to carry unused vacation days into next year. B: The human resources manager will send out an email this afternoon to {{BLANK}} the rules and answer the most common questions that staff have asked about it.",
    "cn": "A：有些員工搞不清楚新的休假政策是否允許他們把沒用完的假期累積到明年。 B：人資經理今天下午會寄出一封電子郵件來【釐清】規定，並回答員工最常問的問題。"
  },
  {
    "word": "discuss",
    "pos": "v.",
    "cn_def": "討論",
    "en_def": "to talk about something with other people",
    "sentence": "A: The client has asked for several big changes to the website design only one week before it is supposed to launch. B: Let's meet with the whole design team after lunch to {{BLANK}} which changes we can finish in time and which ones will need to wait until next month.",
    "cn": "A：客戶在網站預定上線前僅一週，要求對網站設計做幾項大幅修改。 B：我們午餐後和整個設計團隊開會，【討論】哪些修改我們能及時完成，哪些需要等到下個月。"
  }
];

const MCQS = [
  {
    "q": "Our new receptionist grew up in Spain and Canada. She can _____ three languages, which is very helpful for international visitors.",
    "options": [
      "speak",
      "talk",
      "chat",
      "argue"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "I had a friendly _____ with the new client over lunch. We talked about her travel plans and her favorite restaurants in Taipei.",
    "options": [
      "lecture",
      "presentation",
      "conversation",
      "opinion"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "After a long _____, the board members finally agreed on the budget. The new plan will be announced to all staff next week.",
    "options": [
      "opinion",
      "discussion",
      "comment",
      "gossip"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "During the coffee break, Ms. Lin likes to _____ with her coworkers about weekend plans. These short talks help the team feel closer.",
    "options": [
      "announce",
      "state",
      "persuade",
      "chat"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Because the factory managers work in three different countries, they _____ mainly by email and video calls. This saves both time and travel costs.",
    "options": [
      "mention",
      "describe",
      "communicate",
      "confess"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Good _____ between departments is important for any large company. When information is shared clearly, projects are finished faster.",
    "options": [
      "communication",
      "gossip",
      "presentation",
      "lecture"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Customers can _____ their thanks or concerns by filling out the card at the front desk. The manager reads every card each Friday.",
    "options": [
      "interrupt",
      "whisper",
      "argue",
      "express"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "When you call the hotel, please _____ that you are attending the medical conference. Guests at the conference receive a twenty percent discount.",
    "options": [
      "shout",
      "mention",
      "argue",
      "interrupt"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The airline will _____ the winners of its photo contest on its website next Monday. Each winner will receive two free round-trip tickets.",
    "options": [
      "announce",
      "persuade",
      "confess",
      "whisper"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "If you are not sure how to use the new copy machine, ask Mr. Chen. He will gladly _____ how it works.",
    "options": [
      "persuade",
      "interrupt",
      "explain",
      "argue"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The job advertisement should clearly _____ the duties of the position. Applicants need to know what they will do every day.",
    "options": [
      "whisper",
      "describe",
      "confess",
      "interrupt"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The sales team worked hard to _____ the hotel chain to buy our new cleaning products. In the end, the hotel signed a three-year contract.",
    "options": [
      "respond",
      "reply",
      "murmur",
      "persuade"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The two neighbors often _____ about where to park their cars. The building manager has finally decided to paint numbers on each space.",
    "options": [
      "announce",
      "describe",
      "argue",
      "explain"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Lawmakers will _____ the new tax plan in parliament next month. Many business owners are waiting to hear the final decision.",
    "options": [
      "debate",
      "whisper",
      "chat",
      "interrupt"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Before signing the contract, our lawyer will _____ a better price with the supplier. She has worked with this company for many years.",
    "options": [
      "confess",
      "interrupt",
      "murmur",
      "negotiate"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The library has strict rules about noise. Visitors who need to talk must _____ so they do not disturb other readers.",
    "options": [
      "shout",
      "whisper",
      "announce",
      "argue"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The tour guide had to _____ over the noise of the busy market. Some tourists at the back of the group still could not hear him.",
    "options": [
      "shout",
      "whisper",
      "murmur",
      "confess"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Our customer service team tries to _____ to every complaint within twenty-four hours. Quick answers help keep our customers happy.",
    "options": [
      "persuade",
      "describe",
      "respond",
      "mention"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Please _____ to this invitation by Friday so we know how many guests to expect. Dinner will be served in the hotel ballroom.",
    "options": [
      "announce",
      "reply",
      "explain",
      "describe"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The editor wrote a short _____ in the margin next to each mistake. The writer corrected them all before sending the article back.",
    "options": [
      "conversation",
      "lecture",
      "presentation",
      "comment"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "In my _____, the new office layout is much better than the old one. There is more light and more space for meetings.",
    "options": [
      "comment",
      "gossip",
      "opinion",
      "conversation"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "If the meeting room is too small, I _____ that we move to the larger conference room on the third floor. It can hold forty people.",
    "options": [
      "suggest",
      "interrupt",
      "respond",
      "whisper"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Doctors _____ office workers to stand up and walk around at least once every hour. Sitting for long periods can cause back pain.",
    "options": [
      "mention",
      "describe",
      "express",
      "advise"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The manager was surprised when the driver decided to _____ that he had damaged the delivery truck. She thanked him for being honest.",
    "options": [
      "persuade",
      "confess",
      "negotiate",
      "interrupt"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Employees should not spread _____ about their coworkers' private lives. It can hurt feelings and damage trust in the office.",
    "options": [
      "gossip",
      "presentation",
      "lecture",
      "communication"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Professor Wang will give a free _____ on climate change at the city library. Seats are limited, so please register early.",
    "options": [
      "gossip",
      "opinion",
      "lecture",
      "conversation"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Each team must prepare a ten-minute _____ for the sales meeting. Please include charts that show your results from the last quarter.",
    "options": [
      "gossip",
      "presentation",
      "conversation",
      "opinion"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Please do not _____ the speaker during the talk. There will be time for questions at the end of the session.",
    "options": [
      "respond",
      "reply",
      "negotiate",
      "interrupt"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The new instructions were confusing, so the supervisor sent a memo to _____ them. Now everyone understands the correct steps.",
    "options": [
      "whisper",
      "confess",
      "clarify",
      "murmur"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The committee will meet on Thursday to _____ the plans for the company picnic. Anyone with ideas is welcome to join them.",
    "options": [
      "discuss",
      "respond",
      "reply",
      "murmur"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "speak": {
    "pos": "v.",
    "en_def": "to use your voice to say words, or to know and use a language",
    "cn_def": "說；說（某種語言）"
  },
  "conversation": {
    "pos": "n.",
    "en_def": "a talk between two or more people",
    "cn_def": "對話；交談"
  },
  "discussion": {
    "pos": "n.",
    "en_def": "a talk in which people share ideas about a subject",
    "cn_def": "討論"
  },
  "chat": {
    "pos": "v.",
    "en_def": "to talk in a friendly, informal way",
    "cn_def": "閒聊；聊天"
  },
  "communicate": {
    "pos": "v.",
    "en_def": "to share information or ideas with other people",
    "cn_def": "溝通；傳達"
  },
  "communication": {
    "pos": "n.",
    "en_def": "the sharing of information between people or groups",
    "cn_def": "溝通；聯繫"
  },
  "express": {
    "pos": "v.",
    "en_def": "to show a feeling or idea in words or actions",
    "cn_def": "表達"
  },
  "mention": {
    "pos": "v.",
    "en_def": "to speak or write about something briefly",
    "cn_def": "提到；提及"
  },
  "state": {
    "pos": "v.",
    "en_def": "to say or write something clearly and formally",
    "cn_def": "陳述；明確說明"
  },
  "announce": {
    "pos": "v.",
    "en_def": "to tell people something officially and publicly",
    "cn_def": "宣布；公布"
  },
  "explain": {
    "pos": "v.",
    "en_def": "to make something clear or easy to understand",
    "cn_def": "解釋；說明"
  },
  "describe": {
    "pos": "v.",
    "en_def": "to say what someone or something is like",
    "cn_def": "描述；形容"
  },
  "persuade": {
    "pos": "v.",
    "en_def": "to make someone agree to do something by giving reasons",
    "cn_def": "說服"
  },
  "argue": {
    "pos": "v.",
    "en_def": "to speak angrily to someone because you disagree",
    "cn_def": "爭論；爭吵"
  },
  "debate": {
    "pos": "v.",
    "en_def": "to discuss a subject formally, with different opinions",
    "cn_def": "辯論；討論"
  },
  "negotiate": {
    "pos": "v.",
    "en_def": "to discuss something in order to reach an agreement",
    "cn_def": "談判；協商"
  },
  "whisper": {
    "pos": "v.",
    "en_def": "to speak very quietly",
    "cn_def": "低聲說；耳語"
  },
  "shout": {
    "pos": "v.",
    "en_def": "to say something very loudly",
    "cn_def": "大喊；叫喊"
  },
  "murmur": {
    "pos": "v.",
    "en_def": "to say something in a quiet, low voice that is hard to hear",
    "cn_def": "低聲說；喃喃地說"
  },
  "respond": {
    "pos": "v.",
    "en_def": "to answer or react to something",
    "cn_def": "回應；回覆"
  },
  "reply": {
    "pos": "v.",
    "en_def": "to answer someone in speech or writing",
    "cn_def": "回覆；答覆"
  },
  "comment": {
    "pos": "n.",
    "en_def": "something you say or write that gives an opinion",
    "cn_def": "評論；意見"
  },
  "opinion": {
    "pos": "n.",
    "en_def": "what you think or believe about something",
    "cn_def": "意見；看法"
  },
  "suggest": {
    "pos": "v.",
    "en_def": "to tell someone your idea about what they should do",
    "cn_def": "建議；提議"
  },
  "advise": {
    "pos": "v.",
    "en_def": "to tell someone what you think they should do",
    "cn_def": "勸告；建議"
  },
  "confess": {
    "pos": "v.",
    "en_def": "to admit that you did something wrong",
    "cn_def": "坦白；承認"
  },
  "gossip": {
    "pos": "n.",
    "en_def": "talk about other people's private lives that may not be true",
    "cn_def": "八卦；閒話"
  },
  "lecture": {
    "pos": "n.",
    "en_def": "a talk to a group of people about a subject, often at a university",
    "cn_def": "演講；講座"
  },
  "presentation": {
    "pos": "n.",
    "en_def": "a talk that shows and explains information to a group",
    "cn_def": "簡報；報告"
  },
  "interrupt": {
    "pos": "v.",
    "en_def": "to stop someone while they are speaking or doing something",
    "cn_def": "打斷；打擾"
  },
  "clarify": {
    "pos": "v.",
    "en_def": "to make something easier to understand by explaining it",
    "cn_def": "釐清；闡明"
  },
  "discuss": {
    "pos": "v.",
    "en_def": "to talk about something with other people",
    "cn_def": "討論"
  }
};

const EXTRA_GLOSSES = {};
