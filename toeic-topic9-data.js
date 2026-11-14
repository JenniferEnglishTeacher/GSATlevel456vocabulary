// Topic 9 Quiz Data: Age 年齡
// Source word list: https://www.examword.com/group-topic/age — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T09 - Age 年齡",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "reality",
    "pos": "n.",
    "cn_def": "現實；真實情況",
    "en_def": "the true situation, not what you hope or imagine",
    "sentence": "A: When I was a student, I thought that working at a big company would be exciting every day, so how does it feel after five years? B: The {{BLANK}} is quite different, because most days are full of emails and meetings, but I've learned to enjoy the small successes and the friendly people around me.",
    "cn": "A：我當學生時，以為在大公司工作每天都會很刺激，你工作五年後感覺如何？ B：【現實】很不一樣，因為大部分的日子都塞滿了電子郵件和會議，但我已經學會享受小小的成就和身邊友善的人們。"
  },
  {
    "word": "quite",
    "pos": "adv.",
    "cn_def": "相當；頗",
    "en_def": "fairly or very, but not extremely",
    "sentence": "A: Your father retired from the bank last spring, so how is he spending his time now that he doesn't go to the office every day? B: He is {{BLANK}} busy, actually, because he volunteers at the library twice a week, takes cooking classes, and helps my sister look after her two young children.",
    "cn": "A：你爸爸去年春天從銀行退休了，他現在不用每天進辦公室，都怎麼打發時間？ B：其實他【相當】忙，因為他每週去圖書館當兩次志工、上烹飪課，還幫我姊姊照顧她的兩個小孩。"
  },
  {
    "word": "enjoy",
    "pos": "v.",
    "cn_def": "享受；喜愛",
    "en_def": "to get pleasure from something",
    "sentence": "A: Many of our older customers have stopped coming to the gym in the evenings, so do you know why they changed their routine? B: They told me they {{BLANK}} the morning yoga classes much more, because the gym is quieter, the music is softer, and they can have coffee together afterward.",
    "cn": "A：我們很多年長的顧客晚上不再來健身房了，你知道他們為什麼改變作息嗎？ B：他們告訴我，他們更【喜歡】早上的瑜伽課，因為健身房比較安靜、音樂比較柔和，而且課後他們可以一起喝咖啡。"
  },
  {
    "word": "relive",
    "pos": "v.",
    "cn_def": "重溫；再經歷",
    "en_def": "to remember something so clearly that you feel you are experiencing it again",
    "sentence": "A: Why did so many retired employees come to the company's fiftieth anniversary party last Saturday night? B: The organizers showed old photos and videos from the 1980s, so everyone had a chance to {{BLANK}} their younger days and meet colleagues they had not seen for many years.",
    "cn": "A：為什麼上週六晚上有這麼多退休員工來參加公司五十週年派對？ B：主辦單位播放了1980年代的老照片和影片，所以大家都有機會【重溫】年輕時光，並見到許多年沒見的同事。"
  },
  {
    "word": "appear",
    "pos": "v.",
    "cn_def": "顯得；看起來；似乎",
    "en_def": "to seem; to give a particular impression",
    "sentence": "A: Did you know that Mr. Wilson, the new head of the design team, is already sixty-two years old? B: Really? He doesn't {{BLANK}} to be that old at all, maybe because he exercises every morning, rides his bike to work, and is always full of new ideas in meetings.",
    "cn": "A：你知道設計團隊的新主管威爾森先生已經六十二歲了嗎？ B：真的嗎？他完全【看起來】不像那個年紀，可能是因為他每天早上運動、騎腳踏車上班，而且開會時總是充滿新點子。"
  },
  {
    "word": "near",
    "pos": "adj.",
    "cn_def": "接近的；不久的",
    "en_def": "close in time or distance",
    "sentence": "A: Our team is getting older, and three senior engineers will retire within two years, so what is the company planning to do? B: In the {{BLANK}} future, the company will hire several young engineers and ask the senior staff to train them before they leave.",
    "cn": "A：我們團隊的年紀越來越大，有三位資深工程師兩年內就要退休，公司打算怎麼做？ B：在【不久的】將來，公司會雇用幾位年輕工程師，並請資深員工在離職前訓練他們。"
  },
  {
    "word": "adulthood",
    "pos": "n.",
    "cn_def": "成年；成年期",
    "en_def": "the time of life when you are an adult",
    "sentence": "A: Why does the bank run free money-management workshops for university students every summer? B: Many young people enter {{BLANK}} without knowing how to save money, pay bills, or avoid debt, so the bank wants to teach them these skills before they start their first full-time jobs.",
    "cn": "A：為什麼銀行每年夏天都為大學生舉辦免費的理財工作坊？ B：許多年輕人步入【成年】時還不知道如何存錢、繳帳單或避免負債，所以銀行想在他們開始第一份全職工作前教他們這些技能。"
  },
  {
    "word": "experienced",
    "pos": "adj.",
    "cn_def": "有經驗的；經驗豐富的",
    "en_def": "having knowledge or skill from doing something for a long time",
    "sentence": "A: The client wants the new shopping center designed in only six months, so who should we put in charge of the project? B: We need an {{BLANK}} architect who has handled large projects before, because a tight schedule like this leaves no time for beginners to learn from their mistakes.",
    "cn": "A：客戶希望新購物中心在短短六個月內設計完成，我們應該讓誰負責這個專案？ B：我們需要一位以前處理過大型專案、【經驗豐富的】建築師，因為這麼緊湊的時程，沒有時間讓新手從錯誤中學習。"
  },
  {
    "word": "recognize",
    "pos": "v.",
    "cn_def": "認出；認得",
    "en_def": "to know who someone is because you have seen them before",
    "sentence": "A: Did you meet anyone interesting at the high school reunion dinner at the hotel last weekend? B: It was a bit funny, because after twenty-five years many of my classmates had gray hair, and I couldn't {{BLANK}} some of them until they told me their names.",
    "cn": "A：上週末在飯店舉辦的高中同學會晚餐，你有遇到什麼有趣的人嗎？ B：有點好笑，因為過了二十五年，很多同學都有白頭髮了，有些人直到他們告訴我名字，我才【認出】他們來。"
  },
  {
    "word": "dynamic",
    "pos": "adj.",
    "cn_def": "充滿活力的；有幹勁的",
    "en_def": "full of energy and new ideas",
    "sentence": "A: Why do you think the new manager has become so popular with the staff in only three months? B: She is very {{BLANK}}, always full of energy and fresh ideas, and she encourages both younger and older employees to share their opinions in every meeting.",
    "cn": "A：你認為新經理為什麼在短短三個月內就這麼受員工歡迎？ B：她非常【有活力】，總是充滿幹勁和新點子，而且她在每次會議上都鼓勵年輕和年長的員工分享意見。"
  },
  {
    "word": "personality",
    "pos": "n.",
    "cn_def": "個性；性格",
    "en_def": "the kind of person someone is, shown by the way they behave and feel",
    "sentence": "A: Both candidates for the receptionist job have similar experience, so how will we choose the right person? B: I think we should choose the one with the warmer {{BLANK}}, because the receptionist is the first person every visitor meets, and a friendly attitude makes a strong first impression.",
    "cn": "A：兩位應徵接待員工作的人經驗差不多，我們要怎麼選出合適的人？ B：我認為我們應該選【個性】比較溫暖的那一位，因為接待員是每位訪客見到的第一個人，友善的態度能留下深刻的第一印象。"
  },
  {
    "word": "relaxed",
    "pos": "adj.",
    "cn_def": "放鬆的；輕鬆自在的",
    "en_def": "calm and not worried",
    "sentence": "A: You looked very tired and stressed last month, but you seem much happier now, so what changed? B: I started leaving work on time and walking in the park every evening, and now I feel much more {{BLANK}}, even when we have busy weeks with lots of deadlines.",
    "cn": "A：你上個月看起來很疲倦、壓力很大，但現在似乎開心多了，有什麼改變嗎？ B：我開始準時下班，每天傍晚去公園散步，現在即使遇到截止期限很多的忙碌週，我也覺得【放鬆】多了。"
  },
  {
    "word": "predict",
    "pos": "v.",
    "cn_def": "預測；預言",
    "en_def": "to say what will happen in the future",
    "sentence": "A: Why is the company building so many new apartments for older people in the suburbs this year? B: Experts {{BLANK}} that the number of residents over sixty-five will grow quickly in the next ten years, so the company expects strong demand for safe, comfortable homes near hospitals and parks.",
    "cn": "A：為什麼公司今年在郊區興建這麼多給年長者的新公寓？ B：專家【預測】未來十年六十五歲以上的居民人數會快速增加，所以公司預期靠近醫院和公園、安全又舒適的住宅會有強勁需求。"
  },
  {
    "word": "intriguing",
    "pos": "adj.",
    "cn_def": "引人入勝的；耐人尋味的",
    "en_def": "very interesting because it is unusual or mysterious",
    "sentence": "A: What did you think of the presentation about the island where many people live past one hundred years old? B: I found it very {{BLANK}}, especially the part about their simple diet and close family ties, and I'd like to read the full research report when it is published next month.",
    "cn": "A：你覺得那場關於許多人活過一百歲的島嶼的簡報怎麼樣？ B：我覺得非常【引人入勝】，尤其是關於他們簡單飲食和緊密家庭關係的部分，等下個月完整的研究報告出版時，我想讀一讀。"
  },
  {
    "word": "confident",
    "pos": "adj.",
    "cn_def": "有信心的；自信的",
    "en_def": "sure that you can do something well",
    "sentence": "A: How did your daughter feel about her first job interview at the travel agency yesterday afternoon? B: She felt quite {{BLANK}}, because she had practiced her answers with me several times, researched the company carefully, and prepared some good questions to ask the manager at the end.",
    "cn": "A：你女兒對她昨天下午在旅行社的第一次工作面試感覺如何？ B：她覺得很有【自信】，因為她跟我練習了好幾次回答、仔細研究了公司，還準備了幾個好問題在最後問經理。"
  },
  {
    "word": "vastly",
    "pos": "adv.",
    "cn_def": "極大地；大大地",
    "en_def": "very much; to a very great degree",
    "sentence": "A: Do you think the way young people shop today is similar to how your parents shopped thirty years ago? B: Not at all, it is {{BLANK}} different, because most young people now compare prices on their phones and buy online, while my parents always went to local stores and paid in cash.",
    "cn": "A：你覺得現在年輕人購物的方式和你父母三十年前的方式相似嗎？ B：完全不同，是【大大地】不一樣，因為現在大部分年輕人都用手機比價並在網路上購買，而我父母總是去當地商店並用現金付款。"
  },
  {
    "word": "ponder",
    "pos": "v.",
    "cn_def": "沉思；仔細考慮",
    "en_def": "to think carefully about something for a long time",
    "sentence": "A: Is your uncle still planning to sell his restaurant and retire next year, or has he changed his mind? B: He is still trying to decide, so he will {{BLANK}} the offer from the buyer over the holiday, because the restaurant has been his whole life for over thirty years.",
    "cn": "A：你叔叔還打算明年把餐廳賣掉然後退休嗎？還是他改變心意了？ B：他還在考慮，所以他會在假期期間【仔細思考】買家的出價，因為三十多年來，那間餐廳就是他的全部生活。"
  },
  {
    "word": "mature",
    "pos": "adj.",
    "cn_def": "成熟的；穩重的",
    "en_def": "behaving in a sensible way, like an adult",
    "sentence": "A: The new intern is only twenty years old, so are you sure we should let her speak with our most important client? B: Yes, she is very {{BLANK}} for her age, because she listens carefully, stays calm under pressure, and always asks for help when she isn't sure about something.",
    "cn": "A：新來的實習生才二十歲，你確定我們應該讓她和我們最重要的客戶談話嗎？ B：確定，以她的年紀來說她非常【成熟】，因為她會仔細聆聽、在壓力下保持冷靜，而且不確定的時候總會尋求協助。"
  },
  {
    "word": "independent",
    "pos": "adj.",
    "cn_def": "獨立的；自主的",
    "en_def": "able to live or work without help from others",
    "sentence": "A: Why did your grandmother decide to stay in her own apartment instead of moving in with your family? B: She wants to stay {{BLANK}} as long as possible, so she cooks for herself, takes the bus to the market, and only asks us for help with heavy cleaning once a month.",
    "cn": "A：你奶奶為什麼決定住在自己的公寓，而不搬去和你們家同住？ B：她想盡可能保持【獨立】，所以她自己煮飯、搭公車去市場，只有每個月一次的大掃除才會請我們幫忙。"
  },
  {
    "word": "insecure",
    "pos": "adj.",
    "cn_def": "沒有安全感的；缺乏自信的",
    "en_def": "not confident about yourself or your abilities",
    "sentence": "A: Why does Tom always stay quiet in meetings, even when he clearly knows the answer to the manager's questions? B: He feels {{BLANK}} because he is the youngest person on the team, so he worries that the older engineers will laugh at his ideas or think they are too simple.",
    "cn": "A：為什麼湯姆開會時總是保持沉默，即使他顯然知道經理問題的答案？ B：他覺得【沒有自信】，因為他是團隊裡最年輕的人，所以擔心年長的工程師會嘲笑他的想法，或覺得太簡單。"
  },
  {
    "word": "embrace",
    "pos": "v.",
    "cn_def": "欣然接受；擁抱",
    "en_def": "to accept new ideas, changes, or opportunities with enthusiasm",
    "sentence": "A: Were the older staff members unhappy when the company replaced all the paper forms with a new computer system? B: Surprisingly, most of them were happy to {{BLANK}} the change, because the training was clear and patient, and the new system saves them about an hour of work every day.",
    "cn": "A：公司用新的電腦系統取代所有紙本表格時，年長的員工不高興嗎？ B：令人驚訝的是，他們大多數人都樂於【接受】這項改變，因為訓練清楚又有耐心，而且新系統每天幫他們省下大約一個小時的工作。"
  },
  {
    "word": "ageless",
    "pos": "adj.",
    "cn_def": "永不顯老的；永恆的",
    "en_def": "never seeming to grow old; not affected by time",
    "sentence": "A: Why did the fashion company choose a famous sixty-year-old actress for its new advertising campaign this autumn? B: The company wanted to show that style is {{BLANK}}, and its research found that many older women feel ignored by advertisements that only use very young models.",
    "cn": "A：為什麼這家時尚公司今年秋天的新廣告活動選了一位六十歲的知名女演員？ B：公司想表達時尚是【不受年齡限制的】，而且它的研究發現，許多年長女性覺得只用年輕模特兒的廣告忽略了她們。"
  },
  {
    "word": "mindset",
    "pos": "n.",
    "cn_def": "心態；思維模式",
    "en_def": "a way of thinking or set of attitudes",
    "sentence": "A: How has your sixty-five-year-old father managed to learn computer programming so quickly after he retired? B: He has a great {{BLANK}}, because he believes people can learn new skills at any age, so he practices every day and isn't afraid of making mistakes.",
    "cn": "A：你六十五歲的父親退休後，是怎麼這麼快學會電腦程式設計的？ B：他有很棒的【心態】，因為他相信人在任何年紀都能學習新技能，所以他每天練習，而且不怕犯錯。"
  },
  {
    "word": "re-energize",
    "pos": "v.",
    "cn_def": "使恢復活力；重新振作",
    "en_def": "to give someone new energy and enthusiasm",
    "sentence": "A: Our sales team seems tired and bored after such a long and difficult year, so what can we do to help them? B: A short trip to the beach for team activities might {{BLANK}} everyone, and the managers could also announce some exciting new goals and rewards for next year.",
    "cn": "A：經過這麼漫長又艱難的一年，我們的業務團隊似乎又累又無精打采，我們能做些什麼來幫助他們？ B：去海邊進行短程的團隊活動或許能讓大家【重新振作】，主管們也可以宣布一些令人振奮的明年新目標和獎勵。"
  },
  {
    "word": "vibrant",
    "pos": "adj.",
    "cn_def": "充滿活力的；鮮明的",
    "en_def": "full of life, energy, and color",
    "sentence": "A: Why did the company choose this neighborhood for its new office, when the rent is higher than in other parts of the city? B: The area is very {{BLANK}}, with busy cafés, art galleries, and street markets, and the managers believe young employees will enjoy working in such a lively place.",
    "cn": "A：為什麼公司把新辦公室選在這個社區？這裡的租金比城裡其他地方都高。 B：這個地區非常【有活力】，有熱鬧的咖啡館、藝廊和街頭市集，主管們相信年輕員工會喜歡在這麼熱鬧的地方工作。"
  },
  {
    "word": "inevitable",
    "pos": "adj.",
    "cn_def": "不可避免的；必然的",
    "en_def": "certain to happen and impossible to avoid",
    "sentence": "A: Do you think our company will need to raise the price of our products next year because of higher costs? B: I'm afraid it's {{BLANK}}, because the price of raw materials and shipping has gone up by twenty percent, and we cannot keep paying for the difference ourselves.",
    "cn": "A：你認為我們公司明年會因為成本上升而需要調漲產品價格嗎？ B：恐怕這是【不可避免的】，因為原物料和運費已經上漲了百分之二十，我們沒辦法一直自己吸收差額。"
  },
  {
    "word": "priority",
    "pos": "n.",
    "cn_def": "優先事項；優先考慮",
    "en_def": "something that is more important than other things and must be done first",
    "sentence": "A: Now that your children are in elementary school, have you thought about going back to full-time work at the hospital? B: Yes, but my main {{BLANK}} is still my family, so I'm looking for a part-time job that lets me finish work before the children come home in the afternoon.",
    "cn": "A：既然你的孩子都上小學了，你有考慮回醫院做全職工作嗎？ B：有，但我的首要【優先事項】仍然是家庭，所以我在找一份兼職工作，讓我能在孩子下午回家前下班。"
  },
  {
    "word": "behave",
    "pos": "v.",
    "cn_def": "表現；舉止",
    "en_def": "to act or do things in a particular way",
    "sentence": "A: Why are we giving the new store staff a full day of customer service training before the shop opens next week? B: We want them to know how to {{BLANK}} politely with all customers, including elderly people who may need extra time and patience when they pay or ask questions.",
    "cn": "A：為什麼要在下週新店開幕前，給新店員一整天的顧客服務訓練？ B：我們希望他們知道如何對所有顧客禮貌地【應對】，包括在付款或詢問時可能需要更多時間和耐心的長者。"
  },
  {
    "word": "physically",
    "pos": "adv.",
    "cn_def": "身體上；體力上",
    "en_def": "in a way related to the body",
    "sentence": "A: Your father is eighty years old, but he still works in his garden every morning, so how does he stay so healthy? B: He stays {{BLANK}} active by walking for an hour every day, lifting light weights, and doing simple stretching exercises, and he also eats lots of fresh vegetables from his garden.",
    "cn": "A：你父親八十歲了，但每天早上還在花園裡工作，他是怎麼保持這麼健康的？ B：他每天走路一小時、舉輕量啞鈴、做簡單的伸展運動來保持【身體】活躍，還吃很多自家花園種的新鮮蔬菜。"
  },
  {
    "word": "mentally",
    "pos": "adv.",
    "cn_def": "心理上；精神上；智力上",
    "en_def": "in a way related to the mind",
    "sentence": "A: How does your grandmother keep her memory so sharp, even though she is now over ninety years old? B: She stays {{BLANK}} active by doing crossword puzzles every morning, reading the newspaper, and playing card games with her friends at the community center three afternoons a week.",
    "cn": "A：你奶奶已經九十多歲了，她是怎麼讓記憶力保持這麼好的？ B：她每天早上玩填字遊戲、看報紙，每週有三個下午在社區中心和朋友玩紙牌，藉此保持【頭腦】活躍。"
  },
  {
    "word": "obsessed",
    "pos": "adj.",
    "cn_def": "著迷的；執著的",
    "en_def": "thinking about something or someone all the time in a way that is not normal",
    "sentence": "A: Why does our sales manager check the sales numbers on his phone every ten minutes, even during lunch? B: He is {{BLANK}} with reaching the yearly target before December, but I think he should relax a little, because the team is already doing better than last year.",
    "cn": "A：為什麼我們的業務經理連吃午餐時都每十分鐘就用手機查一次業績數字？ B：他對在十二月前達成年度目標很【執著】，但我覺得他應該稍微放鬆一點，因為團隊的表現已經比去年好了。"
  },
  {
    "word": "relevant",
    "pos": "adj.",
    "cn_def": "相關的；切題的",
    "en_def": "connected with what is being discussed or done",
    "sentence": "A: Should I include my summer job at the ice cream shop on my résumé when I apply for the marketing position? B: Only if it is {{BLANK}} to the job, so you could mention that you designed the shop's social media posts, because that shows you already have some marketing experience.",
    "cn": "A：我應徵行銷職位時，應該在履歷上寫我暑假在冰淇淋店打工的經歷嗎？ B：只有在和這份工作【相關】時才寫，所以你可以提到你設計過店裡的社群媒體貼文，因為那顯示你已經有一些行銷經驗。"
  },
  {
    "word": "inclination",
    "pos": "n.",
    "cn_def": "傾向；意願；愛好",
    "en_def": "a feeling that makes you want to do something",
    "sentence": "A: Your father has worked as a lawyer for forty years, so does he plan to keep working, or will he retire soon? B: He has no {{BLANK}} to stop working yet, because he still loves helping his clients, and he says that a busy schedule keeps him young and healthy.",
    "cn": "A：你父親當了四十年律師，他打算繼續工作，還是很快就會退休？ B：他目前還沒有停止工作的【意願】，因為他仍然很喜歡幫助客戶，而且他說忙碌的行程讓他保持年輕和健康。"
  },
  {
    "word": "interact",
    "pos": "v.",
    "cn_def": "互動；交流",
    "en_def": "to communicate with and spend time with other people",
    "sentence": "A: Why did the nursing home start inviting students from the nearby high school to visit every Friday afternoon? B: The staff want the elderly residents to {{BLANK}} with young people more often, because talking, playing games, and sharing stories helps everyone feel happier and less lonely.",
    "cn": "A：為什麼安養院開始邀請附近高中的學生每週五下午來拜訪？ B：工作人員希望長者住民能更常和年輕人【互動】，因為聊天、玩遊戲和分享故事能讓每個人更快樂、更不孤單。"
  }
];

const MCQS = [
  {
    "q": "The hotel looked beautiful in the online photos. In _____, the rooms were small, old, and very noisy.",
    "options": [
      "reality",
      "priority",
      "inclination",
      "mindset"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The new staff lounge has comfortable sofas and free coffee. Employees _____ spending their lunch break there.",
    "options": [
      "behave",
      "predict",
      "enjoy",
      "interact"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The two job candidates have similar résumés. However, the first one does not _____ to have any management experience.",
    "options": [
      "recognize",
      "appear",
      "embrace",
      "ponder"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The program helps teenagers who are leaving foster care. It prepares them for _____ by teaching them to cook and manage money.",
    "options": [
      "reality",
      "mindset",
      "inclination",
      "adulthood"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "This position requires at least ten years in the industry. Only _____ managers with strong leadership skills should apply.",
    "options": [
      "insecure",
      "experienced",
      "intriguing",
      "obsessed"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The famous singer wore sunglasses and a hat at the airport. Few travelers were able to _____ her.",
    "options": [
      "recognize",
      "predict",
      "embrace",
      "behave"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The company is looking for an energetic sales leader. The ideal candidate is _____ and enjoys working in a fast-moving team.",
    "options": [
      "inevitable",
      "insecure",
      "dynamic",
      "relevant"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The receptionist is warm and cheerful with everyone. Her friendly _____ makes every visitor feel welcome right away.",
    "options": [
      "adulthood",
      "reality",
      "priority",
      "personality"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The resort has no televisions and no phone signal. Guests usually feel calm and _____ by the second day.",
    "options": [
      "obsessed",
      "relaxed",
      "inevitable",
      "experienced"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Economists study past sales and current prices. They _____ that home prices will rise by five percent next year.",
    "options": [
      "recognize",
      "behave",
      "interact",
      "predict"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The documentary looks at a village where people rarely get sick. Viewers found its findings _____ and surprising.",
    "options": [
      "insecure",
      "relaxed",
      "intriguing",
      "obsessed"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Linda Chen has prepared for the presentation for two weeks. She feels _____ that the clients will accept her plan.",
    "options": [
      "confident",
      "inevitable",
      "intriguing",
      "dynamic"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The new software works much faster than the old version. Customers say it is _____ better than any competing product.",
    "options": [
      "physically",
      "mentally",
      "freely",
      "vastly"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The job offer from London is very attractive. However, Daniel Park needs more time to _____ whether to move his family.",
    "options": [
      "recognize",
      "ponder",
      "interact",
      "enjoy"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The manager trusts the young assistant with important tasks. He is _____ and responsible for someone his age.",
    "options": [
      "mature",
      "intriguing",
      "inevitable",
      "vibrant"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The research company does not receive money from any government. Its reports are fully _____ and fair.",
    "options": [
      "insecure",
      "obsessed",
      "independent",
      "relaxed"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Some new employees worry that they are not good enough. Managers should support workers who feel _____ in their roles.",
    "options": [
      "dynamic",
      "insecure",
      "vibrant",
      "experienced"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Online shopping has changed the retail industry. Stores that _____ new technology are more likely to succeed.",
    "options": [
      "behave",
      "predict",
      "embrace",
      "recognize"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The workshop teaches employees to see problems as chances to learn. A positive _____ helps teams work better together.",
    "options": [
      "adulthood",
      "reality",
      "personality",
      "mindset"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Sales have been slow for several months. The director hopes the new bonus plan will _____ the whole team.",
    "options": [
      "re-energize",
      "ponder",
      "recognize",
      "predict"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The new shopping street is full of colorful shops and music. It has become a _____ place for young people.",
    "options": [
      "insecure",
      "inevitable",
      "experienced",
      "vibrant"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Fuel prices have doubled since last year. A small increase in ticket prices is therefore _____.",
    "options": [
      "confident",
      "inevitable",
      "mature",
      "dynamic"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Customer safety comes before everything else. It is the top _____ for every employee in our factory.",
    "options": [
      "priority",
      "adulthood",
      "inclination",
      "reality"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The training explains the company's rules for client meetings. All employees must _____ politely and professionally.",
    "options": [
      "predict",
      "ponder",
      "behave",
      "recognize"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The warehouse job involves lifting heavy boxes all day. Applicants must be _____ strong and healthy.",
    "options": [
      "vastly",
      "physically",
      "freely",
      "boldly"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Final exams can be very stressful for students. Good sleep helps them stay _____ sharp during the test.",
    "options": [
      "vastly",
      "freely",
      "mentally",
      "boldly"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The chef checks every plate before it leaves the kitchen. He is _____ with making every dish perfect.",
    "options": [
      "relevant",
      "dynamic",
      "mature",
      "obsessed"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "Please keep your answers short during the interview. Only include information that is _____ to the position.",
    "options": [
      "relevant",
      "obsessed",
      "insecure",
      "relaxed"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The founder has received many offers for his company. However, he has no _____ to sell it.",
    "options": [
      "reality",
      "inclination",
      "personality",
      "adulthood"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The new app lets students chat with teachers after class. It helps them _____ more often outside the classroom.",
    "options": [
      "interact",
      "ponder",
      "predict",
      "recognize"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "reality": {
    "pos": "n.",
    "en_def": "the true situation, not what you hope or imagine",
    "cn_def": "現實；真實情況"
  },
  "quite": {
    "pos": "adv.",
    "en_def": "fairly or very, but not extremely",
    "cn_def": "相當；頗"
  },
  "enjoy": {
    "pos": "v.",
    "en_def": "to get pleasure from something",
    "cn_def": "享受；喜愛"
  },
  "relive": {
    "pos": "v.",
    "en_def": "to remember something so clearly that you feel you are experiencing it again",
    "cn_def": "重溫；再經歷"
  },
  "appear": {
    "pos": "v.",
    "en_def": "to seem; to give a particular impression",
    "cn_def": "顯得；看起來；似乎"
  },
  "near": {
    "pos": "adj.",
    "en_def": "close in time or distance",
    "cn_def": "接近的；不久的"
  },
  "adulthood": {
    "pos": "n.",
    "en_def": "the time of life when you are an adult",
    "cn_def": "成年；成年期"
  },
  "experienced": {
    "pos": "adj.",
    "en_def": "having knowledge or skill from doing something for a long time",
    "cn_def": "有經驗的；經驗豐富的"
  },
  "recognize": {
    "pos": "v.",
    "en_def": "to know who someone is because you have seen them before",
    "cn_def": "認出；認得"
  },
  "dynamic": {
    "pos": "adj.",
    "en_def": "full of energy and new ideas",
    "cn_def": "充滿活力的；有幹勁的"
  },
  "personality": {
    "pos": "n.",
    "en_def": "the kind of person someone is, shown by the way they behave and feel",
    "cn_def": "個性；性格"
  },
  "relaxed": {
    "pos": "adj.",
    "en_def": "calm and not worried",
    "cn_def": "放鬆的；輕鬆自在的"
  },
  "predict": {
    "pos": "v.",
    "en_def": "to say what will happen in the future",
    "cn_def": "預測；預言"
  },
  "intriguing": {
    "pos": "adj.",
    "en_def": "very interesting because it is unusual or mysterious",
    "cn_def": "引人入勝的；耐人尋味的"
  },
  "confident": {
    "pos": "adj.",
    "en_def": "sure that you can do something well",
    "cn_def": "有信心的；自信的"
  },
  "vastly": {
    "pos": "adv.",
    "en_def": "very much; to a very great degree",
    "cn_def": "極大地；大大地"
  },
  "ponder": {
    "pos": "v.",
    "en_def": "to think carefully about something for a long time",
    "cn_def": "沉思；仔細考慮"
  },
  "mature": {
    "pos": "adj.",
    "en_def": "behaving in a sensible way, like an adult",
    "cn_def": "成熟的；穩重的"
  },
  "independent": {
    "pos": "adj.",
    "en_def": "able to live or work without help from others",
    "cn_def": "獨立的；自主的"
  },
  "insecure": {
    "pos": "adj.",
    "en_def": "not confident about yourself or your abilities",
    "cn_def": "沒有安全感的；缺乏自信的"
  },
  "embrace": {
    "pos": "v.",
    "en_def": "to accept new ideas, changes, or opportunities with enthusiasm",
    "cn_def": "欣然接受；擁抱"
  },
  "ageless": {
    "pos": "adj.",
    "en_def": "never seeming to grow old; not affected by time",
    "cn_def": "永不顯老的；永恆的"
  },
  "mindset": {
    "pos": "n.",
    "en_def": "a way of thinking or set of attitudes",
    "cn_def": "心態；思維模式"
  },
  "re-energize": {
    "pos": "v.",
    "en_def": "to give someone new energy and enthusiasm",
    "cn_def": "使恢復活力；重新振作"
  },
  "vibrant": {
    "pos": "adj.",
    "en_def": "full of life, energy, and color",
    "cn_def": "充滿活力的；鮮明的"
  },
  "inevitable": {
    "pos": "adj.",
    "en_def": "certain to happen and impossible to avoid",
    "cn_def": "不可避免的；必然的"
  },
  "priority": {
    "pos": "n.",
    "en_def": "something that is more important than other things and must be done first",
    "cn_def": "優先事項；優先考慮"
  },
  "behave": {
    "pos": "v.",
    "en_def": "to act or do things in a particular way",
    "cn_def": "表現；舉止"
  },
  "physically": {
    "pos": "adv.",
    "en_def": "in a way related to the body",
    "cn_def": "身體上；體力上"
  },
  "mentally": {
    "pos": "adv.",
    "en_def": "in a way related to the mind",
    "cn_def": "心理上；精神上；智力上"
  },
  "obsessed": {
    "pos": "adj.",
    "en_def": "thinking about something or someone all the time in a way that is not normal",
    "cn_def": "著迷的；執著的"
  },
  "relevant": {
    "pos": "adj.",
    "en_def": "connected with what is being discussed or done",
    "cn_def": "相關的；切題的"
  },
  "inclination": {
    "pos": "n.",
    "en_def": "a feeling that makes you want to do something",
    "cn_def": "傾向；意願；愛好"
  },
  "interact": {
    "pos": "v.",
    "en_def": "to communicate with and spend time with other people",
    "cn_def": "互動；交流"
  }
};

const EXTRA_GLOSSES = {};
