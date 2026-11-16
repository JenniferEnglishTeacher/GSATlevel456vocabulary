// Topic 107 Quiz Data: Disagreement 意見分歧
// Source word list: https://www.examword.com/group-topic/disagreement — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T107 - Disagreement 意見分歧",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "argument",
    "pos": "n.",
    "cn_def": "爭論；爭吵",
    "en_def": "a disagreement in which people speak angrily or give different opinions",
    "sentence": "A: Why did the two supervisors leave the planning meeting so early this morning, and is everything all right between them now? B: They had a loud {{BLANK}} about who should manage the new budget, so the director asked them to calm down and discuss the problem privately after lunch.",
    "cn": "A：為什麼那兩位主管今天早上這麼早就離開企劃會議？他們之間現在還好嗎？ B：他們為了誰該管理新預算而大聲【爭論】，所以處長請他們冷靜下來，午餐後再私下討論這個問題。"
  },
  {
    "word": "conflict",
    "pos": "n.",
    "cn_def": "衝突",
    "en_def": "a serious disagreement between people or groups",
    "sentence": "A: Our project keeps falling behind schedule because the design team and the engineering team never seem to agree on anything important. B: I think we should hire a professional trainer to help them solve this {{BLANK}}, because the longer it continues, the more money and time the company will lose.",
    "cn": "A：我們的專案一直落後進度，因為設計團隊和工程團隊似乎在任何重要的事情上都無法達成共識。 B：我認為我們應該請一位專業講師幫他們解決這個【衝突】，因為它持續越久，公司損失的金錢和時間就越多。"
  },
  {
    "word": "controversy",
    "pos": "n.",
    "cn_def": "爭議；爭論",
    "en_def": "public disagreement about something that many people have strong opinions on",
    "sentence": "A: Have you read the news about the supermarket chain that suddenly decided to charge customers for every plastic bag at the checkout? B: Yes, the decision caused a lot of {{BLANK}} online, because some shoppers support the plan to protect the environment, while others think it is simply a way to make more profit.",
    "cn": "A：你看過那則關於連鎖超市突然決定在結帳時對每個塑膠袋收費的新聞嗎？ B：看過，這個決定在網路上引起很大的【爭議】，因為有些購物者支持這個保護環境的計畫，而其他人則認為這只是賺更多錢的方法。"
  },
  {
    "word": "discord",
    "pos": "n.",
    "cn_def": "不和；紛爭",
    "en_def": "a lack of agreement, so people do not get along or work well together",
    "sentence": "A: The new manager seems very friendly, so why are so many people in the accounting office unhappy since she arrived last spring? B: She often gives the best tasks to her old friends, and this has created {{BLANK}} among the staff, so several experienced workers are now looking for other jobs.",
    "cn": "A：新經理看起來很友善，為什麼她去年春天到任後，會計辦公室有這麼多人不開心？ B：她常把最好的工作交給她的老朋友，這在員工之間造成了【不和】，所以好幾位有經驗的員工現在正在找其他工作。"
  },
  {
    "word": "friction",
    "pos": "n.",
    "cn_def": "摩擦；不和",
    "en_def": "disagreement and unfriendly feelings between people who work or live together",
    "sentence": "A: Is it true that the sales staff and the warehouse workers often complain about each other during the busy holiday season? B: Yes, there is some {{BLANK}} between them, because salespeople promise fast delivery to customers while the warehouse simply does not have enough workers to pack all the orders on time.",
    "cn": "A：業務人員和倉庫員工在忙碌的假期旺季常常互相抱怨，這是真的嗎？ B：是的，他們之間有些【摩擦】，因為業務員向顧客承諾快速出貨，但倉庫根本沒有足夠的人手準時包裝所有訂單。"
  },
  {
    "word": "tension",
    "pos": "n.",
    "cn_def": "緊張關係；緊繃氣氛",
    "en_def": "a nervous, unfriendly feeling between people who may soon argue",
    "sentence": "A: You looked uncomfortable at the board meeting yesterday afternoon, so what exactly happened while I was visiting the factory? B: There was a lot of {{BLANK}} in the room, because two directors disagreed about closing the old branch, and nobody wanted to speak until the chairman finally changed the topic.",
    "cn": "A：你昨天下午在董事會上看起來很不自在，我去參觀工廠的時候到底發生了什麼事？ B：會議室裡充滿【緊繃氣氛】，因為兩位董事對於關閉舊分店意見不同，沒有人想發言，直到董事長終於轉移了話題。"
  },
  {
    "word": "opposition",
    "pos": "n.",
    "cn_def": "反對",
    "en_def": "strong disagreement with a plan or idea",
    "sentence": "A: The city wants to build a large shopping mall next to the park, so do you think the plan will be approved soon? B: I doubt it, because there is strong {{BLANK}} from local residents, who worry about heavy traffic and noise, and they have already collected over five thousand signatures against it.",
    "cn": "A：市政府想在公園旁邊蓋一座大型購物中心，你覺得這個計畫很快就會通過嗎？ B：我很懷疑，因為當地居民強烈【反對】，他們擔心交通擁擠和噪音，而且已經收集了超過五千份反對連署。"
  },
  {
    "word": "objection",
    "pos": "n.",
    "cn_def": "異議；反對理由",
    "en_def": "a reason you give for not agreeing with something",
    "sentence": "A: Before we sign the contract with the new cleaning company next week, does anyone in the department have concerns about the terms? B: My only {{BLANK}} is the price, because their service costs almost twice as much as our current supplier, and I am not sure the quality is really that much better.",
    "cn": "A：下週我們和新的清潔公司簽約之前，部門裡有人對條款有疑慮嗎？ B：我唯一的【異議】是價格，因為他們的服務費用幾乎是我們現在廠商的兩倍，而我不確定品質是否真的好那麼多。"
  },
  {
    "word": "row",
    "pos": "n.",
    "cn_def": "吵架；爭吵",
    "en_def": "a noisy, angry argument between people",
    "sentence": "A: Why did the restaurant manager have to call security last night when the dining room was so busy with customers? B: Two guests started a loud {{BLANK}} over a table they had both reserved, and they kept shouting at each other until the staff finally found them separate seats near the window.",
    "cn": "A：昨晚用餐區客人這麼多的時候，餐廳經理為什麼必須叫保全？ B：兩位客人為了一張他們都有預約的桌子大聲【吵架】，而且一直對彼此大吼，直到員工終於幫他們在窗邊找到不同的座位。"
  },
  {
    "word": "feud",
    "pos": "n.",
    "cn_def": "長期不和；宿怨",
    "en_def": "a long and bitter argument between two people, families or groups",
    "sentence": "A: I heard that the two coffee shops on Main Street refuse to join the local business association together, so what is the story behind that? B: The owners are brothers who have had a {{BLANK}} for over ten years since their father left the family business to only one of them, and they still do not speak.",
    "cn": "A：我聽說主街上那兩家咖啡店拒絕一起加入當地商業協會，這背後有什麼故事？ B：兩位老闆是兄弟，自從他們的父親把家族事業只留給其中一人後，他們已經【長期不和】超過十年，到現在還是不說話。"
  },
  {
    "word": "rift",
    "pos": "n.",
    "cn_def": "裂痕；嫌隙",
    "en_def": "a break in a friendly relationship caused by a disagreement",
    "sentence": "A: The two partners started the company together as close friends, so why are they now planning to go their separate ways? B: A serious {{BLANK}} developed between them last year when one partner wanted to expand overseas quickly, while the other believed the business should stay small and safe.",
    "cn": "A：兩位合夥人當初是以好朋友的身分一起創立公司的，為什麼他們現在打算分道揚鑣？ B：去年他們之間出現了嚴重的【裂痕】，當時一位合夥人想快速擴展到海外，而另一位則認為公司應該維持小規模、穩健經營。"
  },
  {
    "word": "division",
    "pos": "n.",
    "cn_def": "分歧；分裂",
    "en_def": "a disagreement that separates people into groups with different opinions",
    "sentence": "A: The staff vote on the new four-day work week was very close, wasn't it, and how do employees feel about the result now? B: Yes, it was, and there is still a clear {{BLANK}} in the company, because younger workers love the idea, but many parents worry about the longer working hours each day.",
    "cn": "A：員工對新的每週工作四天制度的投票結果非常接近，對吧？員工現在對結果有什麼感受？ B：對，而且公司內部仍有明顯的【分歧】，因為年輕員工很喜歡這個主意，但許多為人父母者擔心每天的工時變長。"
  },
  {
    "word": "differ",
    "pos": "v.",
    "cn_def": "意見不同；有分歧",
    "en_def": "to have a different opinion from someone else",
    "sentence": "A: You and the marketing director usually agree on most plans, so why didn't you support her idea about the new television advertisement? B: We sometimes {{BLANK}} on how to spend the budget, and this time I believe online videos will reach more young customers for much less money than a TV commercial.",
    "cn": "A：你和行銷總監通常在大部分計畫上都意見一致，為什麼你不支持她的新電視廣告構想？ B：我們有時在如何使用預算上會【意見不同】，而這次我認為網路影片能以比電視廣告少得多的錢接觸到更多年輕顧客。"
  },
  {
    "word": "disagree",
    "pos": "v.",
    "cn_def": "不同意",
    "en_def": "to have a different opinion; to not agree",
    "sentence": "A: The consultant suggested that we should close our store on Sundays to save money on staff costs, so what do you think about that? B: I strongly {{BLANK}} with that idea, because Sunday is actually our busiest day, and many families come in to shop together after lunch.",
    "cn": "A：顧問建議我們週日關店以節省人事成本，你覺得呢？ B：我強烈【不同意】那個想法，因為週日其實是我們最忙的一天，很多家庭會在午餐後一起來購物。"
  },
  {
    "word": "oppose",
    "pos": "v.",
    "cn_def": "反對",
    "en_def": "to disagree with a plan and try to stop it",
    "sentence": "A: The head office wants to move our entire customer service team to another city next year, so how will the union respond to this plan? B: The union leaders will definitely {{BLANK}} it, because many workers have children in local schools and cannot easily move their families so far away.",
    "cn": "A：總公司想在明年把我們整個客服團隊搬到另一個城市，工會會怎麼回應這個計畫？ B：工會領袖一定會【反對】，因為許多員工的孩子在當地上學，沒辦法輕易舉家搬到那麼遠的地方。"
  },
  {
    "word": "contradict",
    "pos": "v.",
    "cn_def": "反駁；與…矛盾",
    "en_def": "to say the opposite of what someone else has said",
    "sentence": "A: During the presentation, why did you look so embarrassed when the client asked about our delivery times? B: My assistant started to {{BLANK}} me in front of everyone, saying that orders actually take two weeks, not five days, and unfortunately the client believed her instead of me.",
    "cn": "A：簡報時，客戶問到我們的交貨時間，你為什麼看起來那麼尷尬？ B：我的助理開始當著大家的面【反駁】我，說訂單其實要兩週而不是五天，不幸的是客戶相信她而不是我。"
  },
  {
    "word": "challenge",
    "pos": "v.",
    "cn_def": "質疑；挑戰",
    "en_def": "to question whether something is right, fair or true",
    "sentence": "A: The new rule says all staff must work in the office five days a week, but many people were much more productive working from home. B: Several team leaders plan to {{BLANK}} the rule at the next meeting, and they will show data proving that remote work has improved sales and reduced costs.",
    "cn": "A：新規定說所有員工每週都必須進辦公室五天，但很多人在家工作時效率高得多。 B：幾位組長打算在下次會議中【質疑】這項規定，他們會提出數據證明遠距工作提升了業績並降低了成本。"
  },
  {
    "word": "object",
    "pos": "v.",
    "cn_def": "反對；不贊成",
    "en_def": "to say that you do not like or agree with something",
    "sentence": "A: The landlord wants to raise the rent for our office by twenty percent from next month, and he says it is because of higher costs. B: We should {{BLANK}} to such a large increase, because our contract clearly says the rent can only go up by five percent each year.",
    "cn": "A：房東想從下個月起把我們辦公室的租金調漲百分之二十，他說是因為成本提高。 B：我們應該【反對】這麼大的漲幅，因為我們的合約清楚寫明租金每年只能調漲百分之五。"
  },
  {
    "word": "counter",
    "pos": "v.",
    "cn_def": "反駁；反擊",
    "en_def": "to answer an argument or attack with an opposite idea or action",
    "sentence": "A: Our biggest competitor just told the media that its products are cheaper and better than ours, so how should we respond? B: We can {{BLANK}} their claims by publishing honest customer reviews and a clear price comparison, which will show that our products last much longer and offer better value.",
    "cn": "A：我們最大的競爭對手剛對媒體說他們的產品比我們的更便宜、更好，我們該怎麼回應？ B：我們可以發布真實的顧客評價和清楚的價格比較來【反駁】他們的說法，這會顯示我們的產品耐用得多、更划算。"
  },
  {
    "word": "contest",
    "pos": "v.",
    "cn_def": "對…提出異議；爭奪",
    "en_def": "to say formally that a decision or result is wrong and try to change it",
    "sentence": "A: The tax office says our company owes a large amount of money from three years ago, but our accountant thinks the numbers are wrong. B: In that case, we should {{BLANK}} the decision formally, and our lawyer can help us prepare all the receipts and documents before the deadline at the end of the month.",
    "cn": "A：稅務局說我們公司欠了三年前的一大筆錢，但我們的會計師認為數字有錯。 B：既然如此，我們應該正式對這項決定【提出異議】，我們的律師可以幫我們在月底期限前準備好所有收據和文件。"
  },
  {
    "word": "argumentative",
    "pos": "adj.",
    "cn_def": "愛爭論的；好爭辯的",
    "en_def": "often arguing or liking to argue",
    "sentence": "A: The new intern is clever and works hard, so why do some of the senior staff prefer not to work with him on projects? B: He can be quite {{BLANK}} in meetings, because he questions every small decision and refuses to accept other people's ideas, which makes simple discussions last much longer than necessary.",
    "cn": "A：新來的實習生很聰明又努力，為什麼有些資深員工不想和他一起做專案？ B：他在會議上相當【愛爭論】，因為他質疑每個小決定，又拒絕接受別人的想法，讓簡單的討論拖得比需要的久得多。"
  },
  {
    "word": "hostile",
    "pos": "adj.",
    "cn_def": "有敵意的；不友善的",
    "en_def": "unfriendly and angry toward someone or something",
    "sentence": "A: How did the shareholders react when the CEO announced that there would be no bonus this year after such a successful season? B: The crowd became very {{BLANK}}, and some people even shouted at him, so he promised to review the decision and explain the company's financial situation more clearly next week.",
    "cn": "A：在這麼成功的一季之後，執行長宣布今年不發紅利時，股東們有什麼反應？ B：現場變得非常有【敵意】，有些人甚至對他大吼，所以他答應會重新檢討這個決定，並在下週更清楚說明公司的財務狀況。"
  },
  {
    "word": "antagonistic",
    "pos": "adj.",
    "cn_def": "敵對的；對立的",
    "en_def": "showing strong dislike or opposition toward someone",
    "sentence": "A: The meeting between the factory owners and the workers' representatives went badly again yesterday, didn't it? B: Yes, both sides were very {{BLANK}} from the start, so instead of discussing the safety problems calmly, they spent most of the afternoon blaming each other for the recent accidents in the factory.",
    "cn": "A：工廠老闆和員工代表之間的會議昨天又談得很糟，對吧？ B：對，雙方一開始就非常【敵對】，所以他們沒有冷靜討論安全問題，反而花了大半個下午互相指責工廠最近發生的意外。"
  },
  {
    "word": "divided",
    "pos": "adj.",
    "cn_def": "意見分歧的；分裂的",
    "en_def": "having different opinions, so people are split into groups",
    "sentence": "A: Has the board finally decided whether to open a new branch in Tokyo or to invest more money in our online store instead? B: Not yet, because the members are still {{BLANK}} on the issue, and half of them think Japan is too risky while the others believe it is a great opportunity.",
    "cn": "A：董事會終於決定要在東京開新分公司，還是要把更多錢投資在我們的網路商店了嗎？ B：還沒，因為成員們在這個問題上仍然【意見分歧】，一半的人認為日本風險太高，而其他人則相信這是個大好機會。"
  },
  {
    "word": "irreconcilable",
    "pos": "adj.",
    "cn_def": "無法調和的；不可和解的",
    "en_def": "so different that agreement is impossible",
    "sentence": "A: Why did the two companies cancel their merger at the last minute after spending so many months on negotiations? B: They had {{BLANK}} differences about who would control the new company, and neither side was willing to give up power, so in the end they decided to walk away.",
    "cn": "A：兩家公司花了好幾個月談判，為什麼在最後一刻取消合併？ B：他們對於誰來掌控新公司有【無法調和的】歧見，雙方都不願意放棄權力，所以最後決定放棄。"
  },
  {
    "word": "opposed",
    "pos": "adj.",
    "cn_def": "反對的",
    "en_def": "disagreeing strongly with something",
    "sentence": "A: The government plans to build a new airport runway close to several villages, so what do the local farmers think about it? B: Most of them are firmly {{BLANK}} to the project, because the noise will disturb their animals, and they are afraid that they will lose part of their land without fair payment.",
    "cn": "A：政府打算在幾個村莊附近興建新的機場跑道，當地農民對此有什麼看法？ B：他們大多數人堅決【反對】這項計畫，因為噪音會干擾他們的動物，而且他們擔心會在沒有合理補償的情況下失去部分土地。"
  },
  {
    "word": "disputably",
    "pos": "adv.",
    "cn_def": "有爭議地；可質疑地",
    "en_def": "in a way that can be questioned or argued about",
    "sentence": "A: The magazine called our new smartphone the best on the market this year, so should we print that on all our advertisements? B: That ranking is {{BLANK}} correct at best, because several other phones scored higher in battery tests, so let's use a safer message to avoid complaints from customers.",
    "cn": "A：雜誌稱我們的新智慧型手機是今年市場上最好的，我們應該把這句話印在所有廣告上嗎？ B：這個排名充其量只是【有爭議地】正確，因為其他幾款手機在電池測試中得分更高，所以我們用比較保險的訊息，以免顧客抱怨。"
  },
  {
    "word": "controversially",
    "pos": "adv.",
    "cn_def": "有爭議地；引起爭議地",
    "en_def": "in a way that causes public disagreement",
    "sentence": "A: Did the bank really decide to close all of its small branches in the countryside, even though many older customers still depend on them? B: Yes, and quite {{BLANK}}, it also announced that customers must now pay a fee to speak with a staff member, which has made many people extremely angry.",
    "cn": "A：那家銀行真的決定關閉所有鄉下的小分行嗎？即使許多年長顧客仍仰賴它們。 B：是的，而且相當【引起爭議】的是，它還宣布顧客現在必須付費才能和行員交談，這讓許多人非常憤怒。"
  }
];

const MCQS = [
  {
    "q": "The two drivers had a heated _____ about who caused the accident. A police officer arrived and asked them both to calm down.",
    "options": [
      "argument",
      "rift",
      "opposition",
      "division"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The HR department offers free training on how to manage _____ in the workplace. Staff learn to solve disagreements calmly and fairly.",
    "options": [
      "objection",
      "row",
      "conflict",
      "feud"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The company's decision to use cheap overseas labor caused great _____ in the media. Many customers stopped buying its products.",
    "options": [
      "row",
      "controversy",
      "rift",
      "feud"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Rumors about job cuts created _____ and distrust among the staff. Productivity fell as workers stopped helping one another.",
    "options": [
      "objection",
      "argument",
      "row",
      "discord"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "There is often some _____ between the sales and production departments. Sales wants faster delivery, but production needs more time.",
    "options": [
      "objection",
      "row",
      "friction",
      "feud"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "You could feel the _____ in the room as everyone waited for the layoff announcement. Nobody said a word for several minutes.",
    "options": [
      "tension",
      "objection",
      "opposition",
      "division"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The plan to build a highway through the forest met strong _____ from environmental groups. The city council finally cancelled the project.",
    "options": [
      "friction",
      "rift",
      "discord",
      "opposition"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "If you have any _____ to the new contract, please email the legal team by Friday. Otherwise, it will be signed next week.",
    "options": [
      "argument",
      "objection",
      "friction",
      "tension"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The neighbors had a loud _____ about the parking space late last night. Several residents called the building manager to complain.",
    "options": [
      "row",
      "opposition",
      "division",
      "rift"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The two families have had a bitter _____ for three generations. They still refuse to attend the same town events.",
    "options": [
      "objection",
      "opposition",
      "tension",
      "feud"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The disagreement over salaries caused a deep _____ between the two founders. They stopped speaking and eventually sold the company.",
    "options": [
      "objection",
      "opposition",
      "rift",
      "argument"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The vote revealed a clear _____ among staff members about the new dress code. About half supported it and half rejected it.",
    "options": [
      "row",
      "division",
      "feud",
      "objection"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Although the two partners _____ on many small details, they share the same long-term goals. This balance has helped the business grow.",
    "options": [
      "oppose",
      "contradict",
      "contest",
      "differ"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Several engineers _____ with the manager's decision to delay the product launch. They believe the software is already ready for customers.",
    "options": [
      "disagree",
      "oppose",
      "contest",
      "counter"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Many residents _____ the plan to close the local library. They say it is an important place for children and older people.",
    "options": [
      "object",
      "oppose",
      "differ",
      "disagree"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The witness's statement seems to _____ the security camera video. The police are now checking which version is correct.",
    "options": [
      "object",
      "differ",
      "contradict",
      "disagree"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The young analyst was brave enough to _____ the CEO's sales forecast. She showed data proving the numbers were too optimistic.",
    "options": [
      "challenge",
      "object",
      "differ",
      "disagree"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Many employees _____ to working on weekends without extra pay. They have asked the union to discuss the issue with management.",
    "options": [
      "oppose",
      "contradict",
      "object",
      "challenge"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The company quickly released a statement to _____ the false rumors on social media. It explained that no stores would be closed.",
    "options": [
      "object",
      "differ",
      "disagree",
      "counter"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The losing bidder plans to _____ the result of the tender in court. It claims the selection process was unfair.",
    "options": [
      "object",
      "contest",
      "differ",
      "disagree"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Customers who are rude or _____ should be handled politely but firmly. Staff can call a supervisor if a situation gets worse.",
    "options": [
      "divided",
      "irreconcilable",
      "argumentative",
      "opposed"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The new CEO received a _____ reception from employees who feared job cuts. Few people clapped when she finished her speech.",
    "options": [
      "divided",
      "hostile",
      "irreconcilable",
      "opposed"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Relations between the two rival firms have been _____ for years. They compete for the same customers and rarely cooperate.",
    "options": [
      "antagonistic",
      "argumentative",
      "irreconcilable",
      "opposed"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Opinion in the office is _____ over the new open-plan seating. Some staff love it, while others find it too noisy.",
    "options": [
      "hostile",
      "argumentative",
      "irreconcilable",
      "divided"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The court ended the partnership because of _____ differences between the owners. Neither side could accept the other's plans.",
    "options": [
      "argumentative",
      "irreconcilable",
      "opposed",
      "divided"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The union is strongly _____ to any reduction in holiday pay. Its leaders say they will fight the proposal.",
    "options": [
      "divided",
      "argumentative",
      "irreconcilable",
      "opposed"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The report described the product as _____ the best on the market. Several experts, however, say the testing methods were weak.",
    "options": [
      "disputably",
      "hostile",
      "divided",
      "argumentative"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The airline _____ decided to charge passengers for using the restroom. The plan was dropped after thousands of complaints.",
    "options": [
      "hostile",
      "opposed",
      "controversially",
      "divided"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The lawyer presented a strong _____ for raising the minimum wage. Even committee members who disagreed admired her clear reasoning.",
    "options": [
      "argument",
      "friction",
      "discord",
      "tension"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Shareholders are expected to _____ the merger at next month's meeting. They believe the price offered is far too low.",
    "options": [
      "object",
      "oppose",
      "differ",
      "disagree"
    ],
    "answer": 1,
    "vocabIndex": 14
  }
];

const LOOKUP = {
  "argument": {
    "pos": "n.",
    "en_def": "a disagreement in which people speak angrily or give different opinions",
    "cn_def": "爭論；爭吵"
  },
  "conflict": {
    "pos": "n.",
    "en_def": "a serious disagreement between people or groups",
    "cn_def": "衝突"
  },
  "controversy": {
    "pos": "n.",
    "en_def": "public disagreement about something that many people have strong opinions on",
    "cn_def": "爭議；爭論"
  },
  "discord": {
    "pos": "n.",
    "en_def": "a lack of agreement, so people do not get along or work well together",
    "cn_def": "不和；紛爭"
  },
  "friction": {
    "pos": "n.",
    "en_def": "disagreement and unfriendly feelings between people who work or live together",
    "cn_def": "摩擦；不和"
  },
  "tension": {
    "pos": "n.",
    "en_def": "a nervous, unfriendly feeling between people who may soon argue",
    "cn_def": "緊張關係；緊繃氣氛"
  },
  "opposition": {
    "pos": "n.",
    "en_def": "strong disagreement with a plan or idea",
    "cn_def": "反對"
  },
  "objection": {
    "pos": "n.",
    "en_def": "a reason you give for not agreeing with something",
    "cn_def": "異議；反對理由"
  },
  "row": {
    "pos": "n.",
    "en_def": "a noisy, angry argument between people",
    "cn_def": "吵架；爭吵"
  },
  "feud": {
    "pos": "n.",
    "en_def": "a long and bitter argument between two people, families or groups",
    "cn_def": "長期不和；宿怨"
  },
  "rift": {
    "pos": "n.",
    "en_def": "a break in a friendly relationship caused by a disagreement",
    "cn_def": "裂痕；嫌隙"
  },
  "division": {
    "pos": "n.",
    "en_def": "a disagreement that separates people into groups with different opinions",
    "cn_def": "分歧；分裂"
  },
  "differ": {
    "pos": "v.",
    "en_def": "to have a different opinion from someone else",
    "cn_def": "意見不同；有分歧"
  },
  "disagree": {
    "pos": "v.",
    "en_def": "to have a different opinion; to not agree",
    "cn_def": "不同意"
  },
  "oppose": {
    "pos": "v.",
    "en_def": "to disagree with a plan and try to stop it",
    "cn_def": "反對"
  },
  "contradict": {
    "pos": "v.",
    "en_def": "to say the opposite of what someone else has said",
    "cn_def": "反駁；與…矛盾"
  },
  "challenge": {
    "pos": "v.",
    "en_def": "to question whether something is right, fair or true",
    "cn_def": "質疑；挑戰"
  },
  "object": {
    "pos": "v.",
    "en_def": "to say that you do not like or agree with something",
    "cn_def": "反對；不贊成"
  },
  "counter": {
    "pos": "v.",
    "en_def": "to answer an argument or attack with an opposite idea or action",
    "cn_def": "反駁；反擊"
  },
  "contest": {
    "pos": "v.",
    "en_def": "to say formally that a decision or result is wrong and try to change it",
    "cn_def": "對…提出異議；爭奪"
  },
  "argumentative": {
    "pos": "adj.",
    "en_def": "often arguing or liking to argue",
    "cn_def": "愛爭論的；好爭辯的"
  },
  "hostile": {
    "pos": "adj.",
    "en_def": "unfriendly and angry toward someone or something",
    "cn_def": "有敵意的；不友善的"
  },
  "antagonistic": {
    "pos": "adj.",
    "en_def": "showing strong dislike or opposition toward someone",
    "cn_def": "敵對的；對立的"
  },
  "divided": {
    "pos": "adj.",
    "en_def": "having different opinions, so people are split into groups",
    "cn_def": "意見分歧的；分裂的"
  },
  "irreconcilable": {
    "pos": "adj.",
    "en_def": "so different that agreement is impossible",
    "cn_def": "無法調和的；不可和解的"
  },
  "opposed": {
    "pos": "adj.",
    "en_def": "disagreeing strongly with something",
    "cn_def": "反對的"
  },
  "disputably": {
    "pos": "adv.",
    "en_def": "in a way that can be questioned or argued about",
    "cn_def": "有爭議地；可質疑地"
  },
  "controversially": {
    "pos": "adv.",
    "en_def": "in a way that causes public disagreement",
    "cn_def": "有爭議地；引起爭議地"
  }
};

const EXTRA_GLOSSES = {};
